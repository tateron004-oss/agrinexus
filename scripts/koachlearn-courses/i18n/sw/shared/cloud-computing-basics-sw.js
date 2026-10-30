"use strict";

// Koach Learn course (Swahili translation of shared/cloud-computing-basics.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "cloud-computing-basics-sw",
  lang: "sw",
  translationOf: "cloud-computing-basics",
  category: "Youth",
  name: "Misingi ya Kompyuta ya Wingu (Cloud Computing)",
  skills: "Kueleza wingu (cloud) ni nini, Kutofautisha SaaS, PaaS na IaaS, Kuhifadhi na kusawazisha faili kwenye wingu, Kushiriki faili kwa usalama, Kulinda akaunti ya wingu",
  outcome: "kueleza kompyuta ya wingu (cloud computing) ni nini na aina zake tatu kuu za huduma, kisha kutumia huduma ya bure ya kuhifadhi kwenye wingu kuhifadhi, kupanga na kushiriki faili kwa usalama, huku akaunti yako ikilindwa kwa uthibitishaji wa hatua mbili.",
  about: [
    "Kila unapotazama video mtandaoni, unapohifadhi picha kwenye Google Photos au iCloud, au unapofanya kazi kwenye Google Doc pamoja na mwanafunzi mwenzako, unatumia kompyuta ya wingu. Biashara zinaendesha tovuti, apps na AI juu yake, na ujuzi wa wingu unahitajika katika kazi nyingi.",
    "Kozi hii inaeleza wingu ni nini kwa maneno rahisi, aina kuu za huduma za wingu na kampuni kubwa zinazozitoa. Kisha utatumia huduma ya bure ya kuhifadhi kwenye wingu kuhifadhi, kupanga na kushiriki faili kwa usalama, kama timu za shuleni na kazini zinavyofanya.",
    "Kila somo linachukua kama dakika tano. Soma somo, tazama slaidi, kisha fanya kazi ya \"Jaribu sasa\". Kuna jaribio fupi la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni. Ukitaka kuendelea zaidi, kozi ya Microsoft Azure Fundamentals inajengwa juu ya hii."
  ],
  finalTask: "Katika Google Drive au Microsoft OneDrive: tengeneza folda iitwayo \"Nyaraka za Kazi\", pakia au tengeneza faili mbili ndani yake (kwa mfano CV na orodha ya wadhamini), shiriki faili moja na rafiki au mwanafamilia kwa ruhusa ya kutazama tu, angalia nani ana ruhusa, kisha ondoa ruhusa yake. Hakikisha uthibitishaji wa hatua mbili umewashwa kwenye akaunti. Mwisho, andika sentensi tatu zinazoeleza wingu, na taja mfano mmoja wa SaaS, mmoja wa PaaS na mmoja wa IaaS.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Vijana (vijana wadogo na vijana wakubwa) walio shuleni, katika programu za mafunzo au katika kazi zao za kwanza. Wanatumia apps za wingu kila siku lakini mara chache wamefikiria jinsi wingu linavyofanya kazi au jinsi ya kusimamia faili na kushiriki kwa makusudi.",
    startingPoint: "Wanaweza kutumia simu janja, kutazama video mtandaoni, kutumia barua pepe na apps za mitandao ya kijamii, na huenda wana akaunti ya Google au Microsoft. Wachache wamepanga folda, wameweka ruhusa za kushiriki au wamewasha uthibitishaji wa hatua mbili.",
    gap: "Shule, mafunzo kazini na kazi zinatarajia watu wahifadhi, wapange na washiriki faili kwenye wingu na wajue maneno ya msingi ya wingu yanayotumika katika kazi za teknolojia. Bila ujuzi huu, wanafunzi hupoteza kazi zao, hushiriki faili binafsi kupita kiasi na huacha akaunti wazi kwa ulaghai (phishing) na wizi wa nywila.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi (kama darasa la 7 hadi 8)",
      "Vifaa: simu au kompyuta ya pamoja ya shule au maktaba; kifaa cha pili si lazima",
      "Muda: masomo ya dakika 5 yanayoingia kati ya shule au kazi",
      "Faragha: hakuna namba halisi za Social Security (namba ya utambulisho ya Marekani), taarifa za benki au nywila katika faili za mazoezi",
      "Baadhi ya wanafunzi walio chini ya miaka 18 huenda wakahitaji akaunti ya mzazi au ya shule kutumia huduma za Google au Microsoft"
    ],
    prerequisites: "Hakuna. Wanafunzi wapya kwa akaunti za barua pepe wanaweza kwanza kutengeneza akaunti ya bure ya Google au Microsoft pamoja na mtu mzima au msaidizi wa programu."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa orodha ya apps za kila siku na mfano wa biashara ndogo", action: "kueleza kompyuta ya wingu ni nini na kutaja faida na hatari zake kuu", standard: "kwa maneno yako mwenyewe, ukitaja angalau faida mbili na hatari moja" },
    { id: "O2", condition: "Ukipewa huduma sita za wingu", action: "kupanga kila moja kuwa SaaS, PaaS au IaaS na kusema wewe unawajibika kwa nini katika kila moja", standard: "ukipata angalau 5 kati ya 6 sahihi" },
    { id: "O3", condition: "Ukitumia Google Drive au OneDrive", action: "kutengeneza folda, kuongeza faili mbili na kuzipa majina yaliyo wazi", standard: "bila msaada, ili mtu mwingine aweze kupata kila faili kwa jina lake" },
    { id: "O4", condition: "Ukipewa faili na mtu wa kumshirikisha", action: "kushiriki faili kwa ruhusa ndogo kabisa inayohitajika, kuangalia nani ana ruhusa na kuondoa ruhusa", standard: "bila kuacha faili yoyote wazi kwa watu wasioihitaji" },
    { id: "O5", condition: "Katika akaunti yako mwenyewe ya Google au Microsoft", action: "kuwasha uthibitishaji wa hatua mbili, kukagua vifaa vilivyoingia kwenye akaunti na kutambua ujumbe wa ulaghai (phishing)", standard: "kabla kazi ya mwisho haijakamilika" }
  ],
  chapters: [
    {
      name: "Sura 1: Wingu ni nini",
      lessons: [
        {
          objectives: ["O1"],
          title: "Wingu kwa maneno rahisi",
          minutes: 4,
          goal: "Eleza kwa maneno yako mwenyewe kompyuta ya wingu ni nini.",
          text: [
            "\"Wingu\" (cloud) maana yake ni kompyuta zilizo katika majengo makubwa yaitwayo vituo vya data, ambazo unazitumia kupitia intaneti. Badala ya kuweka kila kitu kwenye simu au kompyuta yako, faili zako, apps na nguvu ya kompyuta zinakaa kwenye kompyuta hizo, na unazifikia kutoka kifaa chochote.",
            "Fikiria umeme. Hujengi kituo cha kuzalisha umeme nyumbani; unaunganisha tu na kulipia unachotumia. Kompyuta ya wingu inafanya kazi vivyo hivyo: kampuni inamiliki kompyuta, na watu na biashara wanatumia wanachohitaji, wakati wanapohitaji.",
            "Mifano ya kila siku: barua pepe ya Gmail na Outlook; Google Drive, OneDrive, iCloud na Dropbox kwa faili; Netflix na Spotify kwa kutazama na kusikiliza mtandaoni; na wasaidizi wa AI kama ChatGPT au Copilot, wanaoendeshwa kwenye kompyuta za wingu."
          ],
          words: [["Kompyuta ya wingu (cloud computing)", "kutumia kompyuta, hifadhi na programu kupitia intaneti badala ya kwenye kifaa chako mwenyewe."], ["Kituo cha data (data center)", "jengo kubwa lililojaa kompyuta zinazoendesha huduma za wingu."], ["Seva (server)", "kompyuta yenye nguvu inayotoa huduma kwa kompyuta nyingine kupitia mtandao."]],
          slides: [
            { title: "Wingu ni nini", bullets: ["Kompyuta zilizo katika vituo vya data", "Unazitumia kupitia intaneti", "Kutoka kifaa chochote"] },
            { title: "Kama umeme", bullets: ["Hujengi kituo cha kuzalisha umeme", "Unaunganisha na kulipia unachotumia"] },
            { title: "Tayari unalitumia", bullets: ["Gmail, Outlook", "Google Drive, OneDrive, iCloud, Dropbox", "Netflix, Spotify, wasaidizi wa AI"] }
          ],
          tryIt: "Andika apps au tovuti tano ulizotumia wiki hii. Kando ya kila moja, andika \"wingu\" ikiwa vitu vyako vinahifadhiwa au vinaendeshwa kwenye kompyuta za kampuni badala ya kwenye kifaa chako tu.",
          youCanNow: "kueleza kompyuta ya wingu kwa maneno yako mwenyewe na kutaja huduma za wingu unazotumia tayari.",
          quickCheck: [
            { objective: "O1", q: "Faili zako zinakaa wapi unapozihifadhi kwenye wingu?", options: ["Kwenye kompyuta za kituo cha data unazozifikia kupitia intaneti", "Ndani ya kadi ya kumbukumbu ya simu yako tu", "Kwenye diski unayoituma kwa kampuni kwa posta", "Ndani ya ujumbe mfupi wa simu yako"], answer: 0, why: "Wingu ni kompyuta zilizo katika vituo vya data unazotumia kupitia intaneti kutoka kifaa chochote." },
            { objective: "O1", q: "Rafiki anauliza kwa nini wingu ni kama umeme. Unasema nini?", options: ["Vyote viwili vinazimika usiku", "Vyote viwili vinahitaji waya hadi nyumbani kwako", "Unatumia unachohitaji bila kumiliki kompyuta, kama umeme bila kituo cha kuzalisha umeme", "Vyote viwili ni bure kwa kila mtu"], answer: 2, why: "Somo linalinganisha wingu na kuunganisha na kulipia umeme bila kujenga kituo cha kuzalisha umeme." }
          ]
        },
        {
          objectives: ["O1"],
          title: "Kwa nini watu na biashara wanatumia wingu",
          minutes: 5,
          goal: "Taja faida na hatari kuu za wingu.",
          text: [
            "Faida: unaweza kufikia faili zako kutoka kifaa chochote; simu ikipotea haimaanishi picha zimepotea; timu zinaweza kufanya kazi kwenye hati moja kwa wakati mmoja; na biashara zinaweza kuanza kidogo na kukua, zikilipia nguvu zaidi ya kompyuta pale tu zinapoihitaji, badala ya kununua seva za bei ghali.",
            "Hatari: unahitaji muunganisho wa intaneti; mtu akiiba nywila yako, anaweza kufikia faili zako kutoka popote; mipango ya bure ina kikomo cha hifadhi; na data yako inashikiliwa na kampuni, kwa hiyo unapaswa kujua mipangilio yake ya faragha.",
            "Kampuni kubwa za wingu kwa biashara ni pamoja na Amazon Web Services (AWS), Microsoft Azure na Google Cloud. Kwa watu wa kawaida, Google, Microsoft, Apple na Dropbox zinatoa hifadhi ya bure ya wingu na nyongeza za kulipia. Angalia ukurasa wa kila kampuni wenyewe kujua kiasi cha sasa cha hifadhi ya bure."
          ],
          words: [["Uwezo wa kukua (scalability)", "uwezo wa kuongeza au kupunguza nguvu ya kompyuta kadiri inavyohitajika."], ["Mtoa huduma (provider)", "kampuni inayoendesha huduma ya wingu."], ["Kikomo cha hifadhi", "kiasi kikubwa zaidi cha data ambacho mpango wako unakuruhusu kuweka."]],
          slides: [
            { title: "Faida", bullets: ["Faili zako kwenye kifaa chochote", "Simu ikipotea, picha hazipotei", "Timu zinafanya kazi kwenye faili moja", "Biashara zinakua bila kununua seva"] },
            { title: "Hatari", bullets: ["Inahitaji intaneti", "Nywila iliyoibiwa inafungua kila kitu", "Mipango ya bure ina kikomo"] },
            { title: "Watoa huduma wakubwa", bullets: ["Biashara: AWS, Microsoft Azure, Google Cloud", "Kila siku: Google, Microsoft, Apple, Dropbox"] }
          ],
          tryIt: "Fikiria biashara ndogo unayoijua, kama kinyozi, gari la kuuza chakula au ofisi ya kanisa. Andika njia mbili ambazo wingu lingeweza kuisaidia na hatari moja inayopaswa kujiandaa nayo.",
          youCanNow: "kutaja faida na hatari kuu za wingu na kampuni kubwa zinazotoa huduma za wingu.",
          quickCheck: [
            { objective: "O1", q: "Ipi ni faida ya kuweka picha zako kwenye wingu?", options: ["Huhitaji intaneti kamwe", "Simu ikipotea haimaanishi picha zimepotea", "Mipango ya bure haina kikomo cha hifadhi", "Hakuna kampuni inayowahi kushikilia data yako"], answer: 1, why: "Nakala za wingu zinabaki salama kwenye kompyuta za mtoa huduma hata simu ikipotea." },
            { objective: "O1", q: "Mmiliki wa gari la kuuza chakula anataka kuhamisha kumbukumbu zake kwenye wingu. Ajiandae kwanza na hatari ipi?", options: ["Wingu linafanya faili kuwa kubwa zaidi", "Wingu linafanya kazi kwenye kifaa kimoja tu", "Faili za wingu haziwezi kushirikiwa na wafanyakazi", "Mtu mwenye nywila iliyoibiwa anaweza kufikia faili kutoka popote"], answer: 3, why: "Nywila iliyoibiwa inafungua faili za wingu kutoka popote, kwa hiyo usalama imara wa akaunti ni muhimu." }
          ]
        },
        {
          objectives: ["O2"],
          title: "SaaS, PaaS na IaaS: aina tatu za huduma",
          minutes: 5,
          goal: "Panga huduma za wingu kuwa SaaS, PaaS na IaaS.",
          text: [
            "Huduma za wingu ziko za aina tatu kuu, kutegemea kiasi ambacho mtoa huduma anakufanyia. Tumia mfano wa piza: unaweza kununua piza iliyo tayari, kukodi jiko lenye viungo, au kukodi oveni tu.",
            "SaaS (Software as a Service, yaani programu kama huduma): programu iliyokamilika unayoitumia kwenye kivinjari au app, kama Gmail, Google Docs, Microsoft 365 au Zoom. Mtoa huduma anaendesha kila kitu. PaaS (Platform as a Service, yaani jukwaa kama huduma): jukwaa lililo tayari ambapo watengenezaji wa programu wanajenga na kuendesha apps zao bila kusimamia seva, kama Google App Engine au Azure App Service. IaaS (Infrastructure as a Service, yaani miundombinu kama huduma): kompyuta pepe, hifadhi na mitandao ghafi unayoviweka mwenyewe, kama Amazon EC2 au Azure Virtual Machines.",
            "Katika kila aina, usalama ni jukumu la pamoja. Mtoa huduma analinda vituo vyake vya data; wewe daima unawajibika kwa nywila yako, unayemshirikisha, na unachopakia."
          ],
          steps: ["Jiulize: je, ninatumia tu programu iliyokamilika? Hiyo ni SaaS.", "Je, ninajenga app yangu mwenyewe juu ya jukwaa lililo tayari? Hiyo ni PaaS.", "Je, ninaweka kompyuta zangu pepe mwenyewe? Hiyo ni IaaS.", "Katika zote tatu, linda akaunti yako na data yako."],
          words: [["SaaS", "Software as a Service: programu iliyokamilika unayoitumia kupitia intaneti."], ["PaaS", "Platform as a Service: jukwaa lililo tayari la kujenga na kuendesha apps zako mwenyewe."], ["IaaS", "Infrastructure as a Service: kompyuta pepe, hifadhi na mitandao unayokodi na kusimamia."], ["Jukumu la pamoja (shared responsibility)", "mtoa huduma analinda wingu; wewe unalinda akaunti yako na data yako ndani yake."]],
          slides: [
            { title: "Aina tatu za huduma", bullets: ["SaaS: piza iliyo tayari", "PaaS: jiko la kukodi lenye viungo", "IaaS: oveni tu"] },
            { title: "Mifano", bullets: ["SaaS: Gmail, Google Docs, Microsoft 365, Zoom", "PaaS: Google App Engine, Azure App Service", "IaaS: Amazon EC2, Azure Virtual Machines"] },
            { title: "Jukumu la pamoja", bullets: ["Mtoa huduma: analinda vituo vya data", "Wewe: nywila yako, kushiriki na unachopakia"] }
          ],
          tryIt: "Panga hizi kuwa SaaS, PaaS au IaaS: Gmail, Azure Virtual Machines, Google App Engine, Zoom, Amazon EC2, Microsoft 365. Linganisha majibu yako na mifano iliyo katika somo hili.",
          youCanNow: "kupanga huduma za wingu kuwa SaaS, PaaS na IaaS na kueleza jukumu la pamoja.",
          quickCheck: [
            { objective: "O2", q: "Google App Engine inawaruhusu watengenezaji kuendesha apps zao bila kusimamia seva. Ni aina gani?", options: ["SaaS", "IaaS", "PaaS", "Si yoyote kati ya aina hizo tatu"], answer: 2, why: "Jukwaa lililo tayari ambapo watengenezaji wanajenga na kuendesha apps ni Platform as a Service." },
            { objective: "O2", q: "Shule yako inatumia Microsoft 365, ambayo ni SaaS. Nini bado ni kazi yako?", options: ["Kulinda nywila yako na kuchagua unayemshirikisha", "Kulinda jengo la kituo cha data", "Kurekebisha seva za mtoa huduma", "Hakuna; SaaS maana yake mtoa huduma anafanya kila kitu"], answer: 0, why: "Usalama ni wa pamoja: mtoa huduma anaendesha huduma, lakini nywila yako na kushiriki ni jukumu lako daima." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Wingu ni nini",
        questions: [
          { objective: "O1", q: "\"Wingu\" maana yake nini?", options: ["Hali ya hewa", "Kompyuta za vituo vya data unazotumia kupitia intaneti", "Aina ya kasha la simu", "Diski ngumu ya kompyuta yako tu"], answer: 1, why: "Huduma za wingu zinaendeshwa kwenye kompyuta za mbali zinazofikiwa kupitia intaneti." },
          { objective: "O1", q: "Ipi ni hatari ya wingu?", options: ["Unaweza kufikia faili kutoka kifaa chochote", "Timu zinaweza kushiriki hati", "Nywila iliyoibiwa inaweza kufungua faili zako kutoka popote", "Simu ikipotea haimaanishi picha zimepotea"], answer: 2, why: "Usalama wa akaunti ni muhimu kwa sababu wingu linafikiwa kutoka popote." },
          { objective: "O2", q: "Gmail na Zoom ni mifano ya:", options: ["IaaS", "PaaS", "Vituo vya data", "SaaS"], answer: 3, why: "Ni programu zilizokamilika zinazotumika kupitia intaneti." },
          { objective: "O2", q: "Kampuni inakodi kompyuta pepe na kuziweka yenyewe. Hii ni:", options: ["IaaS", "SaaS", "Kivinjari", "Nywila"], answer: 0, why: "Kukodi kompyuta pepe unazozisimamia ni Infrastructure as a Service." },
          { objective: "O2", q: "Katika jukumu la pamoja, nani analinda nywila yako?", options: ["Mlinzi wa kituo cha data", "Wewe", "Intaneti", "Hakuna mtu"], answer: 1, why: "Akaunti yako na unachoshiriki ni kazi yako daima." }
        ]
      }
    },
    {
      name: "Sura 2: Kutumia wingu mwenyewe",
      lessons: [
        {
          objectives: ["O3"],
          title: "Kuhifadhi na kupanga faili kwenye hifadhi ya wingu",
          minutes: 5,
          goal: "Pakia, tengeneza na panga faili katika Google Drive au OneDrive.",
          text: [
            "Google Drive inakuja na akaunti ya bure ya Google, na OneDrive inakuja na akaunti ya bure ya Microsoft. Zote mbili zinafanya kazi kwenye kivinjari cha wavuti (drive.google.com au onedrive.com) na kama apps za simu kutoka duka rasmi la apps.",
            "Tumia kitufe cha New kutengeneza folda au hati, au Upload kuongeza faili kutoka kifaa chako. Zipe faili majina yaliyo wazi, kama \"CV - Jordan Lee - 2026\", ili uzipate baadaye. Weka faili zinazohusiana katika folda moja.",
            "Kusawazisha (sync) kunaifanya faili iwe ileile kwenye kila kifaa: ibadilishe kwenye kompyuta yako ndogo na toleo jipya linaonekana kwenye simu yako. Huduma nyingi za wingu pia zinaweka matoleo ya zamani, ili uweze kurudi nyuma ukikosea."
          ],
          steps: ["Ingia (sign in) kwenye drive.google.com au onedrive.com (au fungua app).", "Bonyeza New na uchague Folder; ipe jina lililo wazi.", "Fungua folda; bonyeza New kutengeneza hati, au Upload kuongeza faili.", "Badilisha majina ya faili yawe wazi.", "Fungua faili ileile kwenye kifaa kingine uone ikisawazishwa."],
          words: [["Kupakia (upload)", "kunakili faili kutoka kifaa chako kwenda kwenye wingu."], ["Kusawazisha (sync)", "kuweka faili zikiwa sawa kwenye vifaa vyako vyote kiotomatiki."], ["Historia ya matoleo (version history)", "nakala za zamani zilizohifadhiwa za faili ambazo unaweza kurudi kwazo."]],
          slides: [
            { title: "Hifadhi ya bure ya wingu", bullets: ["Google Drive pamoja na akaunti ya Google", "OneDrive pamoja na akaunti ya Microsoft", "Kivinjari au app rasmi"] },
            { title: "Panga", bullets: ["New: folda au hati", "Upload: ongeza faili", "Majina yaliyo wazi na folda"] },
            { title: "Kusawazisha na matoleo", bullets: ["Faili ileile kwenye kila kifaa", "Rudi kwenye toleo la zamani ukihitaji"] }
          ],
          tryIt: "Katika Google Drive au OneDrive, tengeneza folda iitwayo \"Nyaraka za Kazi\". Tengeneza au pakia faili mbili ndani yake na uzipe majina yaliyo wazi. Kisha fungua folda hiyo kwenye kifaa cha pili ikiwa unacho.",
          youCanNow: "kupakia, kutengeneza, kutaja na kupanga faili kwenye hifadhi ya wingu na kujua kwamba zinasawazishwa kwenye vifaa vyote.",
          quickCheck: [
            { objective: "O3", q: "Kusawazisha (sync) kunafanya nini kwa faili katika OneDrive?", options: ["Kunafuta nakala ya zamani kila usiku", "Kunaweka toleo lilelile la faili kwenye vifaa vyako vyote", "Kunatuma faili kwa kila mtu katika orodha ya mawasiliano yako", "Kunaigeuza faili kuwa PDF"], answer: 1, why: "Kusawazisha kunaifanya faili iwe ileile kwenye kila kifaa unachotumia." },
            { objective: "O3", q: "Umehifadhi barua ya maombi ya kazi kwa jina \"doc1\". Ufanye nini ili uipate baadaye?", options: ["Iache; utafutaji utakisia", "Tengeneza folda mpya kwa kila faili", "Ipakie tena kwa jina lilelile", "Ibadilishe jina liwe wazi, kama \"Barua ya Maombi - Jordan Lee - 2026\""], answer: 3, why: "Majina yaliyo wazi yanafanya faili kuwa rahisi kupatikana baadaye." }
          ]
        },
        {
          objectives: ["O4"],
          title: "Kushiriki faili kwa usalama",
          minutes: 5,
          goal: "Shiriki faili na mtu sahihi kwa kiwango sahihi cha ruhusa, na uondoe ruhusa.",
          text: [
            "Faili za wingu ni rahisi kushiriki, jambo lenye manufaa na pia hatari. Bonyeza Share kwenye faili na uongeze anwani ya barua pepe ya mtu, au nakili kiungo (link). Chagua anachoweza kufanya: kutazama, kutoa maoni au kuhariri.",
            "Toa ruhusa ndogo kabisa inayohitajika. CV kwa mwajiri: kutazama tu. Mradi wa kikundi: kuhariri kwa timu yako. Kuwa mwangalifu na viungo vilivyowekwa ili \"anyone with the link\" (yeyote mwenye kiungo) aweze kufungua faili; yeyote anayepata kiungo anaweza kuiona, hata kama kimetumwa kwa mtu mwingine.",
            "Angalia nani ana ruhusa kwenye skrini ya Share au Manage access, na ondoa watu mradi unapoisha. Kamwe usiweke faili zenye namba za Social Security, taarifa za benki au nywila katika folda inayoshirikiwa."
          ],
          steps: ["Chagua faili na ubonyeze Share.", "Ongeza barua pepe ya mtu, au nakili kiungo.", "Chagua View, Comment au Edit; chagua kidogo zaidi anachohitaji.", "Epuka \"anyone with the link\" kwa faili binafsi.", "Baadaye, fungua Share au Manage access na uondoe watu wasiohitaji tena."],
          words: [["Kiwango cha ruhusa", "kile mtu anachoweza kufanya na faili yako: kutazama, kutoa maoni au kuhariri."], ["Ruhusa ndogo kabisa", "kuwapa watu ruhusa wanayoihitaji kweli tu."]],
          slides: [
            { title: "Jinsi ya kushiriki", bullets: ["Bonyeza Share", "Ongeza barua pepe au nakili kiungo", "Chagua View, Comment au Edit"] },
            { title: "Ruhusa ndogo kabisa", bullets: ["CV kwa mwajiri: kutazama tu", "Mradi wa timu: kuhariri kwa timu", "Kuwa mwangalifu na \"anyone with the link\""] },
            { title: "Safisha", bullets: ["Angalia Manage access", "Ondoa watu mradi unapoisha", "Hakuna namba binafsi katika folda zinazoshirikiwa"] }
          ],
          tryIt: "Shiriki faili moja kutoka folda yako ya \"Nyaraka za Kazi\" na rafiki au mwanafamilia kwa ruhusa ya kutazama tu. Mwombe aifungue. Kisha fungua Manage access na umwondoe.",
          youCanNow: "kushiriki faili ya wingu kwa kiwango sahihi cha ruhusa na kuondoa ruhusa isipohitajika tena.",
          quickCheck: [
            { objective: "O4", q: "Mpangilio upi wa kushiriki unatoa ruhusa ndogo kabisa?", options: ["Edit (kuhariri)", "Comment (kutoa maoni)", "View (kutazama)", "Owner (mmiliki)"], answer: 2, why: "View inawaruhusu watu kufungua faili lakini si kuibadilisha, na hiyo ndiyo ruhusa ndogo kabisa." },
            { objective: "O4", q: "Mradi wa kikundi chako umeisha na wanafunzi wenzako wanne bado wana ruhusa ya kuhariri. Unafanya nini?", options: ["Fungua Manage access na uondoe watu wasiohitaji tena", "Badilisha kiungo kiwe \"anyone with the link\"", "Futa akaunti yako yote", "Iache ikiwa hivyo ikiwa siku moja wataihitaji"], answer: 0, why: "Ondoa ruhusa mradi unapoisha ili watu wanaohitaji faili tu waweze kuifikia." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kulinda akaunti yako ya wingu",
          minutes: 5,
          goal: "Washa uthibitishaji wa hatua mbili na ukague usalama wa akaunti yako.",
          text: [
            "Akaunti yako ya wingu inashikilia faili zako, barua pepe na picha, kwa hiyo wezi wanailenga. Hatua muhimu zaidi ni uthibitishaji wa hatua mbili (pia huitwa two-factor au multi-factor authentication): baada ya nywila yako, unathibitisha pia kwa simu yako. Mwizi mwenye nywila yako tu hawezi kuingia.",
            "Tumia nywila ndefu ya kipekee, ikiwezekana iliyowekwa katika kidhibiti cha nywila (password manager). Google na Microsoft zote zina ukurasa wa ukaguzi wa usalama (security check-up) katika mipangilio ya akaunti yako unaoonyesha vifaa vilivyoingia, shughuli za karibuni na njia za kurejesha akaunti.",
            "Jihadhari na ulaghai (phishing): barua pepe bandia zinazosema \"hifadhi yako imejaa\" au \"mtu amekushirikisha faili\" zinazokupeleka kwenye ukurasa bandia wa kuingia. Nenda mwenyewe kwenye drive.google.com au onedrive.com badala ya kubofya. Kumbuka jukumu la pamoja: mtoa huduma analinda vituo vyake vya data; wewe unalinda akaunti yako."
          ],
          steps: ["Fungua mipangilio ya usalama ya akaunti yako ya Google au Microsoft.", "Washa uthibitishaji wa hatua mbili.", "Hakikisha simu na barua pepe za kurejesha akaunti ni sahihi.", "Kagua vifaa vilivyoingia na uondoe usivyovijua.", "Nenda mwenyewe kwenye tovuti za wingu badala ya kubofya viungo vya barua pepe."],
          words: [["Uthibitishaji wa hatua mbili", "ukaguzi wa pili, kama msimbo au kugusa kwenye simu yako, baada ya nywila yako."], ["Kidhibiti cha nywila (password manager)", "app inayotengeneza na kuhifadhi nywila imara kwa ajili yako."], ["Ulaghai (phishing)", "ujumbe bandia unaojaribu kukudanganya utoe nywila yako."]],
          slides: [
            { title: "Akaunti yako inalengwa", bullets: ["Inashikilia faili, barua pepe na picha", "Washa uthibitishaji wa hatua mbili"] },
            { title: "Ukaguzi wa usalama", bullets: ["Nywila ndefu ya kipekee", "Simu na barua pepe sahihi za kurejesha akaunti", "Ondoa vifaa usivyovijua"] },
            { title: "Jihadhari na ulaghai", bullets: ["\"Hifadhi yako imejaa\"", "\"Mtu amekushirikisha faili\"", "Nenda kwenye tovuti mwenyewe"] }
          ],
          tryIt: "Mazoezi ya kazi ya mwisho: fungua mipangilio ya usalama ya akaunti yako ya Google au Microsoft, washa uthibitishaji wa hatua mbili, na ukague vifaa vilivyoingia. Kisha maliza kazi ya mwisho ukitumia folda yako ya \"Nyaraka za Kazi\".",
          youCanNow: "kulinda akaunti yako ya wingu kwa uthibitishaji wa hatua mbili, ukaguzi wa usalama na kuutambua ulaghai.",
          quickCheck: [
            { objective: "O5", q: "Uthibitishaji wa hatua mbili ni nini?", options: ["Kuandika nywila yako mara mbili", "Kuwa na akaunti mbili tofauti za barua pepe", "Kuhifadhi nywila yako sehemu mbili", "Ukaguzi wa pili, mara nyingi kwenye simu yako, baada ya nywila yako"], answer: 3, why: "Baada ya nywila, unathibitisha pia kwa simu yako, kwa hiyo mwizi mwenye nywila tu hawezi kuingia." },
            { objective: "O5", q: "Unaona simu usiyoitambua katika vifaa vilivyoingia kwenye akaunti yako. Unafanya nini?", options: ["Ipuuze; huenda ni sawa", "Iondoe na ubadilishe nywila yako", "Ishirikishe nywila yako", "Zima uthibitishaji wa hatua mbili"], answer: 1, why: "Kuondoa vifaa usivyovijua katika ukaguzi wa usalama kunawazuia wageni wasiingie kwenye akaunti yako." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kutumia wingu mwenyewe",
        questions: [
          { objective: "O3", q: "Kusawazisha (sync) maana yake nini?", options: ["Kufuta faili", "Kuweka faili zikiwa sawa kwenye vifaa vyako vyote", "Kuchapisha faili", "Kushiriki faili na watu usiowajua"], answer: 1, why: "Kusawazisha kunasasisha faili kila mahali unapoingia." },
          { objective: "O4", q: "Unamshirikisha mwajiri CV yako. Ruhusa ipi ni bora?", options: ["Edit (kuhariri)", "Owner (mmiliki)", "View only (kutazama tu)", "Yeyote mwenye kiungo anaweza kuhariri"], answer: 2, why: "Toa ruhusa ndogo kabisa inayohitajika; anahitaji kuisoma tu." },
          { objective: "O4", q: "Mradi wa kikundi uliisha mwezi uliopita. Ufanye nini na folda inayoshirikiwa?", options: ["Ondoa watu wasiohitaji ruhusa tena", "Iweke wazi kwa umma", "Ongeza watu zaidi", "Shiriki kiungo kwenye mitandao ya kijamii"], answer: 0, why: "Kuondoa ruhusa za zamani kunaweka faili zako kuwa binafsi." },
          { objective: "O5", q: "Barua pepe inasema \"Hifadhi yako imejaa, ingia hapa.\" Unafanya nini?", options: ["Bofya na uingie", "Jibu kwa kutuma nywila yako", "Watumie marafiki", "Nenda mwenyewe kwenye drive.google.com au onedrive.com"], answer: 3, why: "Huu unaweza kuwa ulaghai; nenda mwenyewe kwenye tovuti halisi." },
          { objective: "O5", q: "Hatua ipi ni muhimu zaidi kulinda akaunti ya wingu?", options: ["Nywila fupi", "Uthibitishaji wa hatua mbili", "Kumpa rafiki nywila yako", "Kuzima kusawazisha"], answer: 1, why: "Mwizi mwenye nywila yako tu bado hawezi kuingia." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Misingi ya Kompyuta ya Wingu",
    questions: [
      { objective: "O1", q: "Kituo cha data ni:", options: ["Jengo lililojaa kompyuta zinazoendesha huduma za wingu", "Duka la simu", "Maabara ya kompyuta ya shule", "Aina ya app"], answer: 0, why: "Huduma za wingu zinaendeshwa katika vituo vya data." },
      { objective: "O1", q: "Kompyuta ya wingu ni kama umeme kwa sababu:", options: ["Daima ni bure", "Unatumia unachohitaji bila kumiliki kituo cha kuzalisha umeme", "Inafanya kazi usiku tu", "Haihitaji intaneti"], answer: 1, why: "Unatumia na kulipia unachohitaji, kama huduma ya umeme au maji." },
      { objective: "O1", q: "Ipi ni huduma ya wingu unayoweza kuitumia kila siku?", options: ["Daftari la karatasi", "Kikokotoo kisicho na intaneti", "Google Drive", "Taa ya mezani"], answer: 2, why: "Google Drive inahifadhi faili kwenye kompyuta za wingu." },
      { objective: "O1", q: "Faida ya wingu kwa biashara ni:", options: ["Lazima ununue seva za bei ghali kwanza", "Haihitaji intaneti kamwe", "Nywila hazihitajiki", "Unaweza kukua na kulipia nguvu zaidi ya kompyuta pale tu inapohitajika"], answer: 3, why: "Hii inaitwa uwezo wa kukua (scalability)." },
      { objective: "O1", q: "Ipi ni kampuni kubwa ya wingu kwa biashara?", options: ["Microsoft Azure", "Duka la mikate la mtaani", "Chapa ya printa", "Kivinjari cha wavuti"], answer: 0, why: "AWS, Azure na Google Cloud ndizo kubwa zaidi." },
      { objective: "O1", q: "Ipi ni hatari halisi ya kutumia wingu?", options: ["Faili kwenye kifaa chochote", "Timu zinashiriki hati", "Kuhitaji muunganisho wa intaneti", "Nakala za akiba za kiotomatiki"], answer: 2, why: "Bila intaneti, huenda usiweze kufikia faili zako." },
      { objective: "O2", q: "SaaS ni kifupi cha:", options: ["Storage as a Server", "Software as a Service", "Security and a System", "Sync and a Screen"], answer: 1, why: "SaaS ni programu iliyokamilika inayotumika kupitia intaneti." },
      { objective: "O2", q: "Microsoft 365 ni mfano wa:", options: ["IaaS", "PaaS", "SaaS", "Kituo cha data"], answer: 2, why: "Ni programu iliyokamilika unayoitumia mtandaoni." },
      { objective: "O2", q: "Mtengenezaji anaendesha app yake kwenye Azure App Service bila kusimamia seva. Hii ni:", options: ["SaaS", "PaaS", "IaaS", "Kidhibiti cha nywila"], answer: 1, why: "Jukwaa lililo tayari kwa apps zako mwenyewe ni PaaS." },
      { objective: "O2", q: "Kompyuta pepe za Amazon EC2 ni mfano wa:", options: ["SaaS", "PaaS", "Kivinjari", "IaaS"], answer: 3, why: "Kukodi kompyuta pepe unazozisimamia ni IaaS." },
      { objective: "O2", q: "Katika jukumu la pamoja, mtoa huduma analinda:", options: ["Vituo vyake vya data", "Nywila yako", "Unaowashirikisha faili", "Unachochagua kupakia"], answer: 0, why: "Wewe bado unalinda akaunti yako na data yako mwenyewe." },
      { objective: "O3", q: "Jina lipi la faili liko wazi zaidi?", options: ["\"doc1\"", "\"vitu\"", "\"CV - Jordan Lee - 2026\"", "\"mpya mpya ya mwisho\""], answer: 2, why: "Majina yaliyo wazi yanafanya faili kuwa rahisi kupatikana." },
      { objective: "O3", q: "Ili kuongeza faili kutoka kifaa chako kwenda kwenye wingu, unafanya nini?", options: ["Unaifuta", "Unaipakia (upload)", "Unaichapisha", "Unaituma kwa barua pepe kwa mtu usiyemjua"], answer: 1, why: "Kupakia kunainakili kwenye hifadhi ya wingu." },
      { objective: "O3", q: "Historia ya matoleo inakuruhusu:", options: ["Kurudi kwenye nakala ya zamani ya faili", "Kuona faili za watu wengine", "Kupata hifadhi zaidi ya bure", "Kubadilisha nywila yako"], answer: 0, why: "Inaweka matoleo ya zamani yaliyohifadhiwa." },
      { objective: "O4", q: "Kushiriki kwa \"anyone with the link\" maana yake:", options: ["Ni wewe tu unayeweza kuifungua", "Ni watu katika orodha yako ya mawasiliano tu wanaoweza kuifungua", "Hakuna anayeweza kuifungua", "Yeyote anayepata kiungo anaweza kuifungua, hata kama kimetumwa kwa mtu mwingine"], answer: 3, why: "Viungo vinaweza kufika mbali kuliko ulivyokusudia." },
      { objective: "O4", q: "Wazo la ruhusa ndogo kabisa maana yake:", options: ["Mpe kila mtu ruhusa ya kuhariri", "Wape watu ruhusa wanayoihitaji tu", "Usishiriki kitu chochote kamwe", "Shiriki kila kitu kwa umma"], answer: 1, why: "Ruhusa ndogo maana yake hatari ndogo." },
      { objective: "O4", q: "Kipi hakipaswi kamwe kuwekwa katika folda ya wingu inayoshirikiwa?", options: ["Muhtasari wa mradi wa kikundi", "Ratiba ya darasa", "Faili yenye namba yako ya Social Security", "Picha ya timu"], answer: 2, why: "Namba binafsi hazipaswi kuwa katika folda zinazoshirikiwa." },
      { objective: "O5", q: "Uthibitishaji wa hatua mbili maana yake:", options: ["Kuandika nywila yako mara mbili", "Ukaguzi wa pili kwenye simu yako baada ya nywila yako", "Akaunti mbili", "Folda mbili"], answer: 1, why: "Unawazuia wezi walio na nywila yako tu." },
      { objective: "O5", q: "Katika ukaguzi wa usalama unapaswa:", options: ["Kuondoa vifaa vilivyoingia usivyovitambua", "Kuzima simu yako ya kurejesha akaunti", "Kushiriki nywila yako", "Kufuta faili zako zote"], answer: 0, why: "Vifaa usivyovijua vinaweza kumaanisha mtu mwingine ameingia." },
      { objective: "O5", q: "Barua pepe inasema \"Mtu amekushirikisha faili\" kutoka kwa mtumaji usiyemjua. Hatua salama zaidi ni:", options: ["Bofya na uingie kwenye ukurasa unaofunguka", "Jibu kwa kutuma nywila yako", "Watumie wote", "Nenda mwenyewe kwenye tovuti yako ya hifadhi ya wingu kuangalia"], answer: 3, why: "Barua pepe bandia za kushiriki zinapeleka kwenye kurasa bandia za kuingia." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      3,
      6,
      9,
      11,
      13,
      14,
      16,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Folda na faili",
        objective: "O3",
        notYet: "Hakuna folda ya \"Nyaraka za Kazi\", au faili zina majina yasiyo wazi kama \"doc1\".",
        meets: "Folda ina faili mbili zenye majina yaliyo wazi.",
        exceeds: "Faili pia zimefunguliwa kwenye kifaa cha pili kuonyesha kwamba zinasawazishwa."
      },
      {
        name: "Kushiriki kwa usalama",
        objective: "O4",
        notYet: "Faili ilishirikiwa kwa ruhusa ya kuhariri au kama \"anyone with the link\", au ruhusa haikuondolewa kamwe.",
        meets: "Faili moja ilishirikiwa kwa kutazama tu, ruhusa ikaangaliwa, kisha ikaondolewa.",
        exceeds: "Anaweza kueleza kwa nini kutazama tu kulikuwa ruhusa ndogo kabisa iliyohitajika."
      },
      {
        name: "Akaunti imelindwa",
        objective: "O5",
        notYet: "Uthibitishaji wa hatua mbili umezimwa.",
        meets: "Uthibitishaji wa hatua mbili umewashwa na vifaa vilivyoingia vimekaguliwa.",
        exceeds: "Simu na barua pepe za kurejesha akaunti pia zimekaguliwa, na mwanafunzi anaweza kutaja dalili moja ya ulaghai (phishing)."
      },
      {
        name: "Wingu limeelezwa",
        objective: "O1",
        notYet: "Sentensi tatu hazipo au hazisemi wingu ni nini.",
        meets: "Sentensi tatu zilizo wazi zinasema wingu ni nini na zinataja faida moja na hatari moja.",
        exceeds: "Sentensi pia zinatumia ulinganisho wa kila siku, kama umeme."
      },
      {
        name: "Aina za huduma",
        objective: "O2",
        notYet: "Mfano mmoja au zaidi wa SaaS, PaaS na IaaS si sahihi au haupo.",
        meets: "Mfano mmoja sahihi wa kila moja: SaaS, PaaS na IaaS.",
        exceeds: "Pia anasema mtumiaji bado anawajibika kwa nini katika jukumu la pamoja."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaoripoti kwamba uthibitishaji wa hatua mbili umewashwa kwenye akaunti yao kuu siku 30 baadaye (utafiti wa kufuatilia)",
      "Wanafunzi wanaotumia hifadhi ya wingu kwa nyaraka za shule, kazi au programu ndani ya siku 30",
      "Wanafunzi wanaoanza kozi ya Microsoft Azure Fundamentals au kozi nyingine ya teknolojia ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu janja au kompyuta yenye intaneti; kifaa cha pili kinasaidia lakini si lazima",
      "Akaunti ya bure ya Google (Google Drive) au akaunti ya Microsoft (OneDrive)",
      "Simu inayoweza kupokea misimbo au maombi ya uthibitishaji wa hatua mbili",
      "Karatasi na kalamu kwa maelezo ya \"Jaribu sasa\"",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Fanyeni jaribio la awali pamoja, kisha fanyeni sura moja kwa kila kipindi, na kazi za \"Jaribu sasa\" zifanywe papo hapo.",
      "Tumia faili za mazoezi tu (CV ya mfano au orodha ya wadhamini yenye majina ya kubuni); kamwe usitumie namba halisi za utambulisho, taarifa za benki au nywila.",
      "Waweke wanafunzi wawili wawili ili washirikishane faili kwa kutazama tu na kisha waondoe ruhusa wakati wa somo.",
      "Kwenye kompyuta za pamoja, hakikisha wanafunzi wametoka (sign out) na wamefunga kivinjari kabla hawajaondoka.",
      "Kwa wanafunzi walio chini ya miaka 18, fuata sheria za shule au programu kuhusu akaunti binafsi; akaunti ya shule inaweza kutumika ikiwa inaruhusu kushiriki."
    ]
  }
};
