"use strict";

// Koach Learn course (Swahili translation of shared/ai-customer-service-careers.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "ai-customer-service-careers-sw",
  lang: "sw",
  translationOf: "ai-customer-service-careers",
  category: "Re-Entry",
  name: "AI kwa Kazi za Huduma kwa Wateja",
  skills: "Kuhudumia mteja mwanzo hadi mwisho, Kutuliza wateja waliokasirika, Kutumia majibu yanayopendekezwa na AI na hifadhi ya maarifa, Kuandika maelezo ya tiketi, Kulinda taarifa za wateja, Kufanya usaili wa kazi za huduma kwa wateja",
  outcome: "kuhudumia simu au chat ya mteja kuanzia salamu hadi mwisho, kumtuliza mteja aliyekasirika, kutumia zana za AI kama mawakala wa huduma wanavyofanya huku ukikagua majibu yake, kuandika maelezo ya tiketi yaliyo wazi, na kuonyesha ujuzi huu katika usaili wa kazi ya huduma kwa wateja.",
  about: [
    "Kazi za huduma kwa wateja ziko kila mahali: vituo vya simu (call centers), msaada kwa chat, maduka, benki, hospitali, kampuni za umeme na maji, kampuni za usafirishaji na kampuni za teknolojia. Nyingi ni za kuanzia, zinatoa mafunzo, na baadhi ni za kufanyia nyumbani. AI inabadilisha kazi hii: chatbots zinajibu maswali rahisi, na mawakala binadamu wanashughulikia magumu zaidi kwa msaada wa AI.",
    "Kozi hii ni kwa watu wanaorudi nyumbani kutoka gerezani, watafuta kazi katika programu za maendeleo ya wafanyakazi, na yeyote anayetaka kazi ya huduma kwa wateja. Ujuzi wa kushughulika na watu ulio nao tayari, kama kutulia, kusikiliza na kutatua matatizo, ndio kiini chake.",
    "Utafanya mazoezi na msaidizi wa AI anayeigiza kama mteja. Kila somo linachukua kama dakika tano na lina kazi ya \"Jaribu sasa\". Jaribio la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Igiza mawasiliano matatu na wateja ukitumia msaidizi wa AI anayeigiza kama mteja: swali rahisi, mteja aliyekasirika, na tatizo usiloweza kutatua mara ya kwanza. Tumia hatua tano za kumhudumia mteja, andika maelezo ya tiketi kwa kila moja, kisha andika vipengele vitatu vya wasifu (résumé) na jibu la usaili la STAR kuhusu kumtuliza mteja aliyekasirika.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wanaorudi nyumbani kutoka gerezani, watafuta kazi katika programu za maendeleo ya wafanyakazi, na yeyote anayetaka kazi ya kuanzia ya huduma kwa wateja katika kituo cha simu, timu ya chat, duka, benki, kliniki au kampuni ya usafirishaji.",
    startingPoint: "Wanaweza kuzungumza na watu, kutulia na kutatua matatizo ya kila siku. Wengi wametumia simu na ujumbe mfupi; wachache wametumia dawati la msaada, mfumo wa tiketi au msaidizi wa AI kazini.",
    gap: "Kazi za huduma kwa wateja sasa zinachanganya mawasiliano ya binadamu na zana za AI. Wanafunzi wanahitaji njia iliyo wazi ya kumhudumia mteja, kutuliza wateja waliokasirika, kukagua mapendekezo ya AI, kuandika maelezo ya tiketi na kuonyesha ujuzi huu katika usaili, ili waajiriwe na wadumu kazini.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi",
      "Vifaa: simu au kompyuta ya pamoja ya maktaba au ya programu",
      "Muda: masomo ya kama dakika tano yenye kazi fupi za mazoezi",
      "Faragha: mazoezi yanatumia wateja wa kubuni na hakuna taarifa halisi za akaunti",
      "Sheria na zana za kampuni zinatofautiana; wanafunzi wanafuata sera ya kila mwajiri"
    ],
    prerequisites: "Hakuna. Wanafunzi wapya kwa zana za AI wanaweza kuanza na kozi \"Utangulizi wa AI na Kujiamini katika Teknolojia\"."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa matangazo matatu ya kazi za huduma kwa wateja", action: "kueleza kazi kuu za huduma kwa wateja na jinsi mawakala wanavyotumia zana za AI kama chatbots, majibu yanayopendekezwa na hifadhi za maarifa", standard: "ukitaja angalau zana moja na kazi moja ya binadamu kwa kila kazi" },
    { id: "O2", condition: "Katika igizo na mteja", action: "kumhudumia mteja kuanzia salamu hadi mwisho kwa hatua tano: salimia, sikiliza, thibitisha, tatua na funga", standard: "ukitumia hatua zote tano kwa mpangilio" },
    { id: "O3", condition: "Katika igizo na mteja aliyekasirika", action: "kumtuliza mteja kwa hatua za HEAT na kuamua wakati wa kupeleka kesi juu (escalate)", standard: "bila kubishana wala kusema \"tulia\"" },
    { id: "O4", condition: "Ukipewa jibu linalopendekezwa na AI", action: "kukagua jibu hilo dhidi ya hifadhi ya maarifa na sera, na kulirekebisha kabla ya kulituma", standard: "ili kila ukweli na kila ahadi ilingane na sera" },
    { id: "O5", condition: "Baada ya kumhudumia mteja", action: "kuandika maelezo ya tiketi yanayoeleza tatizo, ulichofanya, kilichoahidiwa na hatua ya kufuatilia", standard: "yakiwa na kila sehemu inayohitajika na bila nywila wala taarifa binafsi" },
    { id: "O6", condition: "Ukipewa tangazo la kazi", action: "kuandika vipengele vya wasifu na jibu la usaili la STAR vinavyoonyesha ujuzi wako wa huduma kwa wateja", standard: "ukiwa na vipengele vitatu na hadithi moja kamili ya STAR" }
  ],
  chapters: [
    {
      name: "Sura 1: Kuwahudumia wateja vizuri",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kazi ya huduma kwa wateja inavyoonekana pamoja na AI",
          minutes: 4,
          goal: "Eleza kazi za huduma kwa wateja na jinsi zana za AI zinavyotumika ndani yake.",
          text: [
            "Mawakala wa huduma kwa wateja huwasaidia watu kwa simu, chat, barua pepe, mitandao ya kijamii au ana kwa ana. Majina ya kawaida ya kazi: mwakilishi wa huduma kwa wateja, wakala wa msaada, wakala wa kituo cha simu, fundi wa dawati la msaada na mtaalamu wa huduma kwa wateja.",
            "Sasa AI inajibu maswali mengi rahisi kupitia chatbots, kwa hiyo mawakala binadamu wanapata kesi ngumu zaidi, zenye hisia zaidi au zisizo za kawaida. Mara nyingi mawakala hutumia zana za AI zinazopendekeza majibu, kutafuta katika hifadhi ya maarifa ya kampuni, kufupisha mazungumzo marefu na kuandika maelezo ya tiketi.",
            "Hii inafanya ujuzi wa binadamu kuwa wa thamani zaidi: kusikiliza, kuhurumia, kutulia, kufanya maamuzi mazuri na kutatua matatizo. AI inapendekeza; wewe unaamua kilicho sahihi kwa mteja na unafuata sera ya kampuni."
          ],
          words: [["Mwakilishi wa huduma kwa wateja", "mtu ambaye kazi yake ni kuwasaidia wateja kwa maswali na matatizo yao."], ["Hifadhi ya maarifa (knowledge base)", "maktaba ya kampuni ya majibu na makala za jinsi ya kufanya mambo."], ["Tiketi", "kumbukumbu ya tatizo moja la mteja na kilichofanyika kulihusu."]],
          slides: [
            { title: "Kazi zilipo", bullets: ["Simu, chat, barua pepe, mitandao ya kijamii, ana kwa ana", "Maduka, benki, hospitali, umeme na maji, teknolojia"] },
            { title: "AI ndani ya kazi", bullets: ["Chatbots zinajibu maswali rahisi", "Majibu yanayopendekezwa na utafutaji wa maarifa", "Muhtasari na maelezo ya tiketi"] },
            { title: "Ujuzi wa binadamu una thamani zaidi", bullets: ["Kusikiliza na kuhurumia", "Utulivu na maamuzi mazuri", "Wewe unaamua; AI inapendekeza"] }
          ],
          tryIt: "Angalia matangazo matatu ya kazi za huduma kwa wateja. Andika majina ya kazi, kama yanataja AI, chat au zana fulani, na ujuzi mitatu kila moja inaouomba.",
          youCanNow: "kueleza kazi za huduma kwa wateja na jinsi mawakala wanavyotumia zana za AI.",
          quickCheck: [
            { objective: "O1", q: "Kampuni inapotumia chatbots, wakala binadamu kwa kawaida hushughulikia nini?", options: ["Kubadilisha nywila tu", "Hakuna kitu, kwa sababu chatbots zinafanya kazi yote", "Kesi ngumu zaidi na zenye hisia zaidi", "Kesi za lugha nyingine tu"], answer: 2, why: "Chatbots zinachukua maswali rahisi, kwa hiyo watu wanapata kesi ngumu zinazohitaji uangalifu na busara." },
            { objective: "O1", q: "Tangazo la kazi linaomba \"uzoefu wa mfumo wa tiketi.\" Hujawahi kutumia mmoja. Ungefanya nini?", options: ["Kuacha kazi hiyo kwa sababu hufai", "Kuomba na kuonyesha ujuzi unaohusiana, na kujifunza mfumo wa tiketi unavyofanya kazi", "Kusema kwenye wasifu wako kwamba uliutumia", "Kuomba chatbot ikuombee kazi"], answer: 1, why: "Unaweza kuomba kwa uaminifu, kuonyesha ujuzi unaohusiana na kujifunza zana hiyo; kudanganya kwenye wasifu si jibu kamwe." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Hatua tano za kumhudumia mteja",
          minutes: 5,
          goal: "Mhudumie mteja kuanzia salamu hadi mwisho kwa hatua tano.",
          text: [
            "Mawasiliano mengi mazuri yanafuata hatua tano. Salimia: sema jina lako na utoe msaada. Sikiliza: mwache aeleze bila kumkatiza, na uulize maswali ili uelewe. Thibitisha: rudia tatizo kwa maneno yako mwenyewe. Tatua: toa jibu au hatua zinazofuata kwa uwazi. Funga: hakikisha limetatuliwa, uliza kama kuna jambo jingine, na umshukuru.",
            "Mfano: \"Asante kwa kupiga simu, mimi ni Dee. Nikusaidie nini?\" ... \"Kwa hiyo oda yako inaonyesha imefikishwa lakini hukuipata. Ngoja nikague.\" ... \"Nimekutumia nyingine; itafika Alhamisi. Kuna jambo jingine naweza kukusaidia?\"",
            "Thibitisha utambulisho kwa utaratibu wa kampuni kabla ya kutoa maelezo ya akaunti. Usiombe kamwe taarifa ambazo utaratibu hauhitaji, na usiombe kamwe nywila kamili."
          ],
          steps: ["Salimia kwa jina lako na utoe msaada.", "Sikiliza bila kumkatiza; uliza maswali.", "Thibitisha tatizo kwa maneno yako mwenyewe.", "Tatua au eleza hatua zinazofuata kwa uwazi.", "Funga: hakikisha, uliza kama kuna jingine, mshukuru."],
          words: [["Kuthibitisha utambulisho", "kuhakikisha mteja ni yule anayesema kuwa yeye, kwa kutumia hatua za kampuni."], ["Suluhisho", "jibu la tatizo la mteja."]],
          slides: [
            { title: "Hatua tano", bullets: ["Salimia na sikiliza", "Thibitisha tatizo", "Tatua na funga"] },
            { title: "Sikika hivi", bullets: ["\"Mimi ni Dee. Nikusaidie nini?\"", "\"Kwa hiyo oda yako inaonyesha imefikishwa lakini haikufika.\"", "\"Kuna jingine naweza kukusaidia?\""] },
            { title: "Linda akaunti", bullets: ["Thibitisha utambulisho kwa njia ya kampuni", "Omba kinachohitajika tu", "Usiombe kamwe nywila kamili"] }
          ],
          tryIt: "Mwambie msaidizi wa AI: \"Igiza kama mteja ambaye kifurushi chake kinaonyesha kimefikishwa lakini hakikufika. Baki katika uhusika. Tukimaliza, nipe alama kwa salimia, sikiliza, thibitisha, tatua na funga.\" Fanya igizo hilo.",
          youCanNow: "kumhudumia mteja kuanzia salamu hadi mwisho kwa hatua tano.",
          quickCheck: [
            { objective: "O2", q: "Hatua ipi inakuja mara baada ya kumsalimia mteja?", options: ["Tatua", "Funga", "Thibitisha", "Sikiliza"], answer: 3, why: "Baada ya salamu unasikiliza tatizo lote kabla ya kulithibitisha au kulitatua." },
            { objective: "O2", q: "Unadhani tatizo limetatuliwa. Ungefanya nini kabla ya kumaliza mawasiliano?", options: ["Kuhakikisha limetatuliwa, kuuliza kama kuna jingine linalohitajika na kumshukuru", "Kukata simu haraka ili kupokea simu inayofuata", "Kumwambia apige tena likiharibika", "Kumwomba akupe nyota tano"], answer: 0, why: "Kufunga vizuri kunakagua suluhisho, kunauliza kama kuna jingine na kunamshukuru mteja." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kumtuliza mteja aliyekasirika",
          minutes: 6,
          goal: "Tumia hatua za kupunguza hasira ili kumtuliza mteja aliyekasirika na kupata suluhisho.",
          text: [
            "Mara nyingi wateja waliokasirika wamekasirishwa na hali, si na wewe. Tulia, ongea kwa sauti ya chini na polepole, na usibishane wala usichukulie kibinafsi.",
            "Tumia hatua za HEAT: Hear, msikilize mpaka mwisho; Empathize, onyesha unaelewa (\"Naelewa jinsi hilo linavyoudhi\"); Apologize, omba radhi kwa yaliyompata; na Take action, chukua hatua (mwambie hasa utakachofanya). Epuka \"tulia\" na \"hiyo si kazi yangu\".",
            "Jua mipaka yako. Mtu akitukana au kutishia, fuata sera ya kampuni yako, ambayo mara nyingi inaruhusu onyo kisha kumaliza mawasiliano, au kumkabidhi msimamizi. Kupumzika kidogo na kuongea na wafanyakazi wenzako baada ya simu ngumu kunakusaidia kubaki salama kiakili."
          ],
          steps: ["Tulia na usichukulie kibinafsi.", "Msikilize mpaka mwisho.", "Onyesha unaelewa na uombe radhi kwa yaliyompata.", "Chukua hatua: sema hasa utakachofanya.", "Akitukana, fuata sera ya kampuni au mwite msimamizi."],
          words: [["Kupunguza hasira (de-escalation)", "kutuliza hali iliyo na mvutano."], ["Kuhurumia (empathy)", "kuonyesha kwamba unaelewa jinsi mtu anavyojisikia."], ["Kupeleka juu (escalate)", "kumkabidhi msimamizi au mtaalamu kesi."]],
          slides: [
            { title: "Si kuhusu wewe", bullets: ["Wamekasirishwa na hali", "Sauti ya chini na polepole; usibishane"] },
            { title: "HEAT", bullets: ["Hear: msikilize mpaka mwisho", "Empathize na Apologize: elewa na omba radhi", "Take action: chukua hatua"] },
            { title: "Jua mipaka yako", bullets: ["Matusi au vitisho: fuata sera", "Mwite msimamizi", "Jitunze baada ya simu ngumu"] }
          ],
          tryIt: "Mwombe msaidizi wa AI aigize kama mteja mwenye hasira ambaye bili yake ilikatwa mara mbili. Tumia HEAT. Kisha uliza AI ni maneno yapi yalifanya kazi na yapi ubadilishe.",
          youCanNow: "kumtuliza mteja aliyekasirika kwa HEAT na kujua wakati wa kupeleka kesi juu.",
          quickCheck: [
            { objective: "O3", q: "Herufi T katika HEAT inasimama kwa nini?", options: ["Ongea haraka (Talk faster)", "Hamisha (Transfer)", "Chukua hatua (Take action)", "Shukuru (Thank)"], answer: 2, why: "HEAT ni Hear, Empathize, Apologize na Take action." },
            { objective: "O3", q: "Mteja anapiga kelele kuhusu kukatwa pesa mara mbili. Ungesema nini kwanza?", options: ["\"Nakusikia, na samahani kwa hili. Ngoja nilikague sasa hivi.\"", "\"Tulia ili nikusaidie.\"", "\"Hiyo si idara yangu.\"", "\"Lazima ulibofya mara mbili.\""], answer: 0, why: "Kusikiliza na kuonyesha unaelewa kwanza kunapunguza hasira; kulaumu au kusema tulia kunaiongeza." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kuwahudumia wateja vizuri",
        questions: [
          { objective: "O1", q: "Hifadhi ya maarifa ni nini?", options: ["Akaunti ya benki ya mteja", "Aina ya chatbot", "Maktaba ya kampuni ya majibu na makala za jinsi ya kufanya mambo", "Video ya mafunzo tu"], answer: 2, why: "Mawakala wanaitafuta ili kupata majibu sahihi." },
          { objective: "O1", q: "Kwa nini ujuzi wa binadamu una thamani zaidi AI inapokua katika huduma kwa wateja?", options: ["Binadamu wanapata kesi ngumu zaidi na zenye hisia zaidi", "AI imepigwa marufuku", "Wateja hawatumii chat kamwe", "Binadamu wanajibu maswali rahisi tu"], answer: 0, why: "Chatbots zinachukua kesi rahisi; watu wanashughulikia ngumu." },
          { objective: "O2", q: "Hatua ipi inakuja mara baada ya kusikiliza?", options: ["Kumaliza simu", "Kuomba nywila yake", "Kumhamisha", "Kuthibitisha tatizo kwa maneno yako mwenyewe"], answer: 3, why: "Kuthibitisha kunaonyesha umeelewa." },
          { objective: "O3", q: "Herufi E katika HEAT inasimama kwa nini?", options: ["Escalate (peleka juu)", "Empathize (onyesha unaelewa)", "Exit (toka)", "Email (barua pepe)"], answer: 1, why: "HEAT: Hear, Empathize, Apologize, Take action." },
          { objective: "O3", q: "Ni maneno gani unapaswa kuepuka kwa mteja aliyekasirika?", options: ["\"Naelewa jinsi hilo linavyoudhi.\"", "\"Tulia.\"", "\"Hiki ndicho nitakachofanya.\"", "\"Asante kwa uvumilivu wako.\""], answer: 1, why: "\"Tulia\" kwa kawaida huwaongezea watu hasira." }
        ]
      }
    },
    {
      name: "Sura 2: Zana za AI na kupata kazi",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kutumia majibu yanayopendekezwa na AI na hifadhi ya maarifa",
          minutes: 5,
          goal: "Tumia mapendekezo ya AI kama mwanzo na uyakague kabla ya kutuma.",
          text: [
            "Mifumo mingi ya msaada huonyesha majibu yanayopendekezwa na AI au majibu kutoka hifadhi ya maarifa. Yanaokoa muda, lakini yanaweza kuwa si sahihi, yamepitwa na wakati, au hayafai hali ya mteja huyu.",
            "Kabla ya kutuma: lisome lote, kagua ukweli dhidi ya hifadhi ya maarifa au sera (tarehe, bei, sheria za kurudisha pesa), lifanye limfae mtu huyu (tumia jina lake, jibu alichouliza), na rekebisha sauti yake. AI ikipendekeza kitu kinachokwenda kinyume na sera, kama kurudisha pesa usiyoruhusiwa kutoa, usilitume.",
            "Kufanya mazoezi nyumbani, bandika ujumbe wa mteja wa kubuni kwenye msaidizi wa AI wa bure na uulize: \"Andika rasimu ya jibu la kirafiki. Sera yetu: pesa zinarudishwa ndani ya siku 30 kwa risiti.\" Kisha lirekebishe kana kwamba wewe ndiye wakala."
          ],
          steps: ["Soma jibu lililopendekezwa lote.", "Kagua ukweli dhidi ya hifadhi ya maarifa au sera.", "Lifanye limfae mteja huyu.", "Rekebisha sauti yake.", "Usitume kitu chochote kinachokwenda kinyume na sera."],
          words: [["Jibu linalopendekezwa", "jibu lililoandikwa na AI ambalo wakala anaweza kulirekebisha na kulituma."], ["Sera", "sheria rasmi za kampuni."]],
          slides: [
            { title: "Mapendekezo ya AI yanaokoa muda", bullets: ["Lakini yanaweza kukosea au kupitwa na wakati", "Huenda hayamfai mteja huyu"] },
            { title: "Kabla ya kutuma", bullets: ["Kagua ukweli dhidi ya sera", "Lifanye la binafsi na rekebisha sauti", "Usitume kamwe kinachovunja sera"] },
            { title: "Mazoezi nyumbani", bullets: ["Bandika ujumbe wa kubuni kwenye AI", "Ipe sera", "Rekebisha kama wakala"] }
          ],
          tryIt: "Andika barua pepe ya mteja wa kubuni kuhusu pesa zilizochelewa kurudishwa. Mwombe AI aandike rasimu ya jibu kwa sera unayoibuni, kisha uirekebishe na uweke alama kwenye kila badiliko ulilofanya.",
          youCanNow: "kutumia majibu yanayopendekezwa na AI kwa usalama kwa kuyakagua, kuyafanya ya binafsi na kufuata sera.",
          quickCheck: [
            { objective: "O4", q: "Jibu linalopendekezwa na AI ni nini?", options: ["Jibu la mwisho unalolazimika kutuma", "Rasimu ambayo AI inaandika na wewe unaikagua na kuirekebisha", "Ujumbe kutoka kwa msimamizi wako", "Dodoso analojaza mteja"], answer: 1, why: "Pendekezo ni mwanzo tu; wewe unalikagua na kuamua cha kutuma." },
            { objective: "O4", q: "Rasimu ya AI inaahidi kurudisha pesa ndani ya siku mbili, lakini sera inasema siku tano hadi saba. Ungefanya nini?", options: ["Kulituma kwa sababu AI ndiyo iliyoliandika", "Kufuta jibu lote na kutotuma chochote", "Kubadilisha muda ulingane na sera kabla ya kutuma", "Kumwuliza mteja anapendelea muda upi"], answer: 2, why: "Kila ukweli na kila ahadi lazima vilingane na sera kabla ya kutuma." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kuandika maelezo ya tiketi na kulinda taarifa za wateja",
          minutes: 5,
          goal: "Andika maelezo ya tiketi yaliyo wazi na ushughulikie taarifa za wateja kwa usalama.",
          text: [
            "Kila mawasiliano yanahitaji maelezo ili wakala anayefuata ajue kilichotokea. Maelezo mazuri ya tiketi ni mafupi na ya ukweli: tatizo, ulichokagua, ulichofanya, kilichoahidiwa na tarehe yoyote ya kufuatilia. Mfano: \"Mteja anaripoti kifurushi hakikufika, oda inaonyesha kimefikishwa 10/12. Nimekagua ufuatiliaji wa msafirishaji. Nimetuma kingine, kitafika 10/16. Fuatilia kama hakijapokelewa.\"",
            "Baadhi ya zana zinaruhusu AI kufupisha mazungumzo kuwa maelezo. Kagua muhtasari huo: AI inaweza kuacha ahadi au kuongeza kitu ambacho hakikutokea.",
            "Linda taarifa: fungua akaunti unazosaidia tu, usimpe kamwe mtu asiyeruhusiwa maelezo ya mteja, usibandike kamwe taarifa za mteja kwenye zana za AI ambazo kampuni yako haijaidhinisha, na usiandike kamwe namba kamili za kadi au nywila katika maelezo. Kufuata sheria za faragha ni sehemu ya kazi."
          ],
          steps: ["Andika tatizo kwa mstari mmoja.", "Andika ulichokagua na ulichofanya.", "Andika chochote kilichoahidiwa na tarehe ya kufuatilia.", "Kagua muhtasari wowote wa AI kama una makosa au umeacha kitu.", "Usiandike namba kamili za kadi wala nywila."],
          words: [["Maelezo ya tiketi", "kumbukumbu fupi ya maandishi ya mawasiliano na mteja."], ["Faragha ya taarifa", "kulinda taarifa binafsi za watu na kuzitumia kama inavyoruhusiwa tu."]],
          slides: [
            { title: "Maelezo mazuri ya tiketi", bullets: ["Tatizo, ulichokagua, ulichofanya", "Kilichoahidiwa na tarehe ya kufuatilia", "Mafupi na ya ukweli"] },
            { title: "Muhtasari wa AI", bullets: ["Unaokoa muda", "Kagua kama ahadi zimeachwa au kuna makosa"] },
            { title: "Linda taarifa za wateja", bullets: ["Akaunti unazosaidia tu", "Hakuna taarifa za wateja katika zana za AI zisizoidhinishwa", "Hakuna namba za kadi wala nywila katika maelezo"] }
          ],
          tryIt: "Andika maelezo ya tiketi kwa maigizo mawili uliyofanya katika Sura 1. Kisha mwombe AI afupishe igizo moja na ulinganishe muhtasari wake na maelezo yako.",
          youCanNow: "kuandika maelezo ya tiketi yaliyo wazi na kulinda taarifa za wateja.",
          quickCheck: [
            { objective: "O5", q: "Kwa nini maelezo ya tiketi ni muhimu?", options: ["Yanamwezesha wakala anayefuata kuendelea na kesi bila kumwuliza mteja tena", "Ni kwa ajili ya wanasheria wa kampuni tu", "Yanachukua nafasi ya kuongea na mteja", "Ni mahali pa kuandika maoni yako kuhusu mteja"], answer: 0, why: "Maelezo yaliyo wazi yanamwezesha yeyote kuendelea na kesi bila kumfanya mteja arudie kila kitu." },
            { objective: "O5", q: "Mteja anakusomea namba ya kadi yake kwa bahati mbaya. Ungeandika nini katika maelezo?", options: ["Namba kamili ya kadi ili ihifadhiwe", "Namba ya kadi na nywila yake", "Hakuna chochote kuhusu simu hiyo", "Tatizo na hatua zilizochukuliwa, bila namba ya kadi"], answer: 3, why: "Maelezo yanaandika tatizo na hatua, kamwe si namba kamili za kadi wala nywila." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kupata kazi ya huduma kwa wateja",
          minutes: 5,
          goal: "Onyesha ujuzi wako wa huduma kwa wateja kwenye wasifu na katika usaili.",
          text: [
            "Waajiri wanataka mtu anayetegemewa, mwenye utulivu, anayewasiliana wazi, mwenye ujuzi wa msingi wa kompyuta na aliye tayari kujifunza. Uzoefu kutoka maduka, huduma ya chakula, kuwatunza wengine, kanisa, jeshi au kazi ukiwa gerezani unahesabika.",
            "Andika vipengele vya wasifu vinavyoonyesha matokeo: \"Nilihudumia wateja 60+ kwa siku katika jiko lenye shughuli nyingi kwa utulivu na urafiki.\" Mwombe AI akusaidie kugeuza uzoefu wako kuwa vipengele vya huduma kwa wateja, na hakikisha ni vya kweli.",
            "Tarajia maswali ya kuigiza: \"Mteja anapiga kelele kuhusu oda iliyochelewa. Unafanya nini?\" Jibu kwa hatua zako (HEAT na hatua tano za kumhudumia mteja). Andaa hadithi ya STAR kuhusu wakati ulipomtuliza mtu au kutatua tatizo. Baadhi ya waajiri hutoa jaribio la kuchapa au la ujuzi wa kompyuta, kwa hiyo fanya mazoezi ya kuchapa kwa jaribio la bure la kuchapa mtandaoni."
          ],
          steps: ["Orodhesha uzoefu ambapo uliwasaidia watu.", "Mwombe AI augeuze kuwa vipengele vya kweli vya wasifu vyenye namba.", "Andaa hadithi ya STAR kuhusu kumtuliza mtu au kutatua tatizo.", "Fanya mazoezi ya jibu la kuigiza kwa HEAT.", "Fanya mazoezi ya kuchapa kwa jaribio la bure mtandaoni."],
          words: [["Swali la kuigiza", "swali la usaili ambapo unaonyesha jinsi ungeshughulikia hali fulani."], ["Jaribio la kuchapa", "jaribio la jinsi unavyochapa kwa haraka na kwa usahihi."]],
          slides: [
            { title: "Waajiri wanataka nini", bullets: ["Anayetegemewa na mtulivu", "Mawasiliano yaliyo wazi", "Ujuzi wa msingi wa kompyuta; tayari kujifunza"] },
            { title: "Vipengele vya wasifu", bullets: ["Onyesha matokeo kwa namba", "Uzoefu wote wa kusaidia watu unahesabika", "Viwe vya kweli"] },
            { title: "Maandalizi ya usaili", bullets: ["Majibu ya kuigiza kwa HEAT", "Hadithi ya STAR kuhusu kumtuliza mtu", "Fanya mazoezi ya kuchapa"] }
          ],
          tryIt: "Kazi ya mwisho: igiza mawasiliano matatu na wateja ukitumia AI (swali rahisi, mteja aliyekasirika, tatizo lisilotatuliwa mara ya kwanza), andika maelezo ya tiketi kwa kila moja, kisha andika vipengele vitatu vya wasifu na jibu la STAR kuhusu kumtuliza mteja aliyekasirika.",
          youCanNow: "kuwahudumia wateja kwa zana za AI kama wakala wa msaada na kuonyesha ujuzi huo ili kupata kazi.",
          quickCheck: [
            { objective: "O6", q: "Herufi R katika jibu la STAR inasimama kwa nini?", options: ["Sababu (Reason)", "Jibu (Reply)", "Alama (Rating)", "Matokeo (Result)"], answer: 3, why: "STAR ni Situation (hali), Task (kazi), Action (hatua) na Result (matokeo)." },
            { objective: "O6", q: "Ulifanya kazi jikoni gerezani ukiwahudumia watu 200 kwa siku. Ungeutumiaje kwenye wasifu wa huduma kwa wateja?", options: ["Kuuacha kwa sababu hauhesabiki", "Kuandika kipengele kuhusu kuwahudumia watu 200 kwa siku kwa haraka na kwa adabu", "Kusema tu kwamba ulikuwa na shughuli nyingi", "Kuueleza kama kazi ya meneja"], answer: 1, why: "Uzoefu halisi wa kuwahudumia watu unahesabika; ueleze kwa uaminifu ukiwa na namba." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Zana za AI na kupata kazi",
        questions: [
          { objective: "O4", q: "Jibu linalopendekezwa na AI linatoa kurudisha pesa ambako sera yako hairuhusu. Unafanya nini?", options: ["Kulituma hata hivyo", "Kumwomba mteja aamue", "Kufuta tiketi", "Kutolituma; kufuata sera"], answer: 3, why: "Mawakala wanafuata sera, si makisio ya AI." },
          { objective: "O5", q: "Maelezo mazuri ya tiketi yanajumuisha:", options: ["Tatizo, ulichofanya, kilichoahidiwa na hatua ya kufuatilia", "Namba kamili ya kadi ya mteja", "Maoni yako kuhusu mteja", "Hakuna kitu"], answer: 0, why: "Maelezo yanamsaidia wakala anayefuata." },
          { objective: "O5", q: "Muhtasari wa AI umeacha ahadi uliyoitoa. Unapaswa:", options: ["Kuiacha nje", "Kufuta maelezo yote", "Kuongeza ahadi hiyo kwenye maelezo", "Kuilaumu AI baadaye"], answer: 2, why: "Kagua na urekebishe muhtasari wa AI." },
          { objective: "O5", q: "Kipi hakipaswi kuandikwa kamwe katika maelezo ya tiketi?", options: ["Tarehe ya oda", "Tarehe ya kufuatilia", "Ulichokagua", "Nywila kamili ya mteja"], answer: 3, why: "Nywila hazipaswi kuandikwa kamwe." },
          { objective: "O6", q: "Katika usaili unaulizwa jinsi ungemshughulikia mteja anayepiga kelele. Jibu bora:", options: ["\"Ningepiga kelele pia.\"", "\"Ningekata simu mara moja.\"", "Eleza HEAT na hatua ambazo ungechukua", "\"Sijui.\""], answer: 2, why: "Kuonyesha hatua zako kunathibitisha ujuzi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI kwa Kazi za Huduma kwa Wateja",
    questions: [
      { objective: "O1", q: "Lipi ni jina la kazi ya huduma kwa wateja?", options: ["Dereva wa forklift", "Wakala wa msaada", "Fundi wa kuchomelea", "Rubani"], answer: 1, why: "Mawakala wa msaada huwasaidia wateja." },
      { objective: "O1", q: "Katika kampuni nyingi leo, maswali rahisi mara nyingi hujibiwa na:", options: ["Chatbots", "Barua za posta tu", "Hakuna mtu", "Mkurugenzi mkuu"], answer: 0, why: "Chatbots hushughulikia maswali rahisi ya kawaida." },
      { objective: "O1", q: "Tiketi ni:", options: ["Tiketi ya sinema", "Faini ya maegesho", "Kumbukumbu ya tatizo moja la mteja na kilichofanyika", "Mshahara"], answer: 2, why: "Tiketi zinafuatilia kila tatizo." },
      { objective: "O4", q: "Nani hufanya uamuzi wa mwisho wa kumwambia mteja nini?", options: ["Wewe, ukifuata sera", "AI", "Mteja", "Mfanyakazi mwenzako yeyote"], answer: 0, why: "AI inapendekeza; mawakala wanaamua." },
      { objective: "O2", q: "Hatua ya kwanza ya kumhudumia mteja ni:", options: ["Funga", "Tatua", "Hamisha", "Salimia kwa jina lako na utoe msaada"], answer: 3, why: "Salamu ya ukarimu inaanza vizuri." },
      { objective: "O2", q: "\"Kwa hiyo oda yako inaonyesha imefikishwa lakini haikufika\" ni mfano wa:", options: ["Kufunga", "Kuthibitisha tatizo", "Kupeleka juu", "Kuthibitisha utambulisho"], answer: 1, why: "Kurudia tatizo kunalithibitisha." },
      { objective: "O2", q: "Kabla ya kutoa maelezo ya akaunti, unapaswa:", options: ["Kuyatoa mara moja", "Kuthibitisha utambulisho kwa utaratibu wa kampuni", "Kuomba nywila yake kamili", "Kumwomba mfanyakazi mwenzako akisie"], answer: 1, why: "Uthibitisho unalinda akaunti." },
      { objective: "O2", q: "Unapaswa kufunga mawasiliano vipi?", options: ["Kukata simu ghafla", "Kunyamaza", "Kuomba bakshishi", "Kuhakikisha limetatuliwa, kuuliza kama kuna jingine, kumshukuru"], answer: 3, why: "Kufunga vizuri kunamwacha mteja ameridhika." },
      { objective: "O3", q: "Mara nyingi wateja waliokasirika wamekasirishwa na:", options: ["Hali, si wewe", "Wewe binafsi", "Hali ya hewa", "Hakuna kitu"], answer: 0, why: "Kukumbuka hili kunakusaidia kutulia." },
      { objective: "O3", q: "HEAT inasimama kwa:", options: ["Help, End, Ask, Transfer", "Hurry, Explain, Argue, Talk", "Hear, Empathize, Apologize, Take action", "Hold, Email, Answer, Thank"], answer: 2, why: "Hizo ndizo hatua nne za HEAT." },
      { objective: "O3", q: "Mteja anaanza kutukana na kutishia. Unapaswa:", options: ["Kumtishia pia", "Kutoa anwani yake", "Kuendelea kuvumilia matusi milele", "Kufuata sera ya kampuni, ambayo inaweza kumaanisha onyo, kumaliza mawasiliano au msimamizi"], answer: 3, why: "Sera zinawalinda mawakala na wateja." },
      { objective: "O3", q: "Kupeleka juu (escalate) maana yake ni:", options: ["Kupanda ngazi za umeme", "Kupandisha sauti yako", "Kumkabidhi msimamizi au mtaalamu kesi", "Kufunga kesi"], answer: 2, why: "Kupeleka juu kunapeleka kesi ngumu ngazi ya juu." },
      { objective: "O4", q: "Majibu yanayopendekezwa na AI yanaweza:", options: ["Kuwa kamili kila wakati", "Kukosea, kupitwa na wakati au kutomfaa mteja", "Kuwa haramu kusoma", "Kuwa katika lugha nyingine tu"], answer: 1, why: "Yakague kila wakati." },
      { objective: "O4", q: "Kabla ya kutuma jibu linalopendekezwa na AI, kagua ukweli dhidi ya:", options: ["Hifadhi ya maarifa au sera", "Mitandao ya kijamii", "Kumbukumbu yako tu", "Tovuti ya mshindani"], answer: 0, why: "Vyanzo rasmi vinafanya majibu yawe sahihi." },
      { objective: "O5", q: "Kipi hakipaswi kamwe kuingia katika zana ya AI ambayo kampuni yako haijaidhinisha?", options: ["Ujumbe wa mazoezi wa kubuni", "Swali la sarufi", "Taarifa za mteja", "Salamu ya jumla"], answer: 2, why: "Taarifa za wateja lazima zilindwe." },
      { objective: "O5", q: "Faragha ya taarifa maana yake ni:", options: ["Kulinda taarifa binafsi na kuzitumia kama inavyoruhusiwa tu", "Kuwapa marafiki taarifa", "Kufuta taarifa zote", "Kuweka taarifa mtandaoni"], answer: 0, why: "Ni wajibu wa msingi wa kazi." },
      { objective: "O6", q: "Kipengele kipi cha wasifu ni bora zaidi kwa huduma kwa wateja?", options: ["\"Nilifanya vitu\"", "\"Nilifanya kazi wakati mwingine\"", "\"Mtu mzuri\"", "\"Nilihudumia wateja 60+ kwa siku kwa utulivu na urafiki\""], answer: 3, why: "Kinaonyesha namba na ujuzi." },
      { objective: "O6", q: "Uzoefu kutoka mahali gani unaweza kuhesabika kwa huduma kwa wateja?", options: ["Vituo vya simu tu", "Huduma ya chakula, kuwatunza wengine, kanisa au kazi ukiwa gerezani", "Chuo tu", "Hakuna"], answer: 1, why: "Kuwasaidia watu popote kunajenga ujuzi huu." },
      { objective: "O6", q: "Hadithi ya STAR kuhusu kumtuliza mtu inaonyesha:", options: ["Historia ya mshahara wako", "Hali, Kazi, Hatua na Matokeo", "Sinema unazopenda", "Hakuna kitu"], answer: 1, why: "STAR inathibitisha ujuzi kwa mfano." },
      { objective: "O6", q: "Baadhi ya waajiri hupima ujuzi upi kabla ya kuajiri?", options: ["Kurusha na kudaka vitu", "Kuogelea", "Kuimba", "Kasi na usahihi wa kuchapa"], answer: 3, why: "Mawakala wanachapa sana; fanya mazoezi kwa jaribio la bure la kuchapa." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi amepiga hatua kiasi gani
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [1, 4, 7, 9, 11, 13, 14, 16, 18] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Mtiririko wa mawasiliano", objective: "O2", notYet: "Aliruka hatua, kama kutatua kabla ya kusikiliza au kumaliza bila kufunga.", meets: "Alitumia salimia, sikiliza, thibitisha, tatua na funga katika mawasiliano yote matatu.", exceeds: "Pia alithibitisha utambulisho inapohitajika na akaweka hatua inayofuata iliyo wazi kwa tatizo lisilotatuliwa." },
      { name: "Kumtuliza mteja aliyekasirika", objective: "O3", notYet: "Alibishana, alilaumu au alisema \"tulia\".", meets: "Alitumia Hear, Empathize, Apologize na Take action, na mteja akatulia.", exceeds: "Pia alijua wakati wa kupeleka kesi juu na akaeleza hatua inayofuata kwa uwazi." },
      { name: "AI imekaguliwa", objective: "O4", notYet: "Alituma pendekezo la AI lisilolingana na sera.", meets: "Alikagua kila pendekezo la AI dhidi ya hifadhi ya maarifa au sera kabla ya kulitumia.", exceeds: "Anaweza kuonyesha kila badiliko alilofanya na kusema kwa nini." },
      { name: "Maelezo ya tiketi", objective: "O5", notYet: "Maelezo hayana tatizo, hatua, ahadi au ufuatiliaji, au yana taarifa binafsi.", meets: "Kila tiketi ina tatizo, kilichofanyika, kilichoahidiwa na ufuatiliaji, bila taarifa binafsi.", exceeds: "Maelezo ni mafupi kiasi kwamba wakala mwingine angeweza kuendelea bila kuuliza chochote." },
      { name: "Tayari kuajiriwa", objective: "O6", notYet: "Vipengele havieleweki, au jibu la STAR linakosa sehemu.", meets: "Vipengele vitatu vya wasifu vilivyo wazi na jibu la STAR lenye sehemu zote nne.", exceeds: "Vipengele vina namba, na jibu la STAR linaishia na matokeo halisi." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaoomba kazi ya huduma kwa wateja ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi wanaopata usaili au ofa ya kazi ya huduma kwa wateja ndani ya siku 90",
      "Wanafunzi wanaofaulu kazi ya mwisho kwa rubriki",
      "Wanafunzi wanaoanza kozi nyingine ya kazi ya Koach Learn ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye intaneti",
      "Msaidizi wa AI wa bure kama ChatGPT, Microsoft Copilot au Google Gemini wa kuigiza kama mteja",
      "Matangazo matatu halisi ya kazi za huduma kwa wateja kutoka tovuti ya kazi",
      "Karatasi na kalamu kwa maelezo ya tiketi na vipengele vya wasifu",
      "Kama dakika 60 kwa jumla: masomo, maigizo, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Fanyeni maigizo wawili wawili: mwanafunzi mmoja anaigiza mteja, mwingine wakala, kisha mbadilishane; AI inaweza kuigiza mteja kwa wanafunzi wanaofanya peke yao.",
      "Tumieni wateja na akaunti za kubuni tu; msifanye mazoezi kamwe kwa namba halisi za kadi au nywila.",
      "Pima kazi ya mwisho kwa rubriki na toa maoni kuhusu mstari mmoja wa Bado kwa wakati.",
      "Wasaidie wanafunzi waliokuwa gerezani kupata njia za kweli za kueleza uzoefu wa kazi kutoka huduma ya chakula, kuwatunza wengine au kazi walizofanya gerezani.",
      "Ikiwezekana, mkaribishe mwajiri wa eneo au mwajiri wa kituo cha simu kutazama maigizo ya mwisho."
    ]
  }
};
