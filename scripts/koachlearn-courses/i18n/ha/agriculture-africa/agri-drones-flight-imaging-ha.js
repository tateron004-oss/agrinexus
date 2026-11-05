"use strict";

// Koach Learn course, Hausa (ha) translation of agriculture-africa/agri-drones-flight-imaging.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const NCAA_P21 = { name: "Hukumar Kula da Sufurin Jiragen Sama ta Najeriya (NCAA): Nig.CARs 2023 Kashi na 21, Jiragen da ake tuƙawa daga nesa (RPAS)", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };
const KCAA_UAS = { name: "Hukumar Kula da Sufurin Jiragen Sama ta Kenya (KCAA): Jirage marasa matuƙi (Unmanned Aircraft Systems)", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const FAO_ITU_DRONES = { name: "FAO da ITU: E-agriculture in Action: Drones for Agriculture (Jirage marasa matuƙi don noma, 2018)", url: "https://www.itu.int/pub/D-STR-E_AGRICULT.02-2018" };

module.exports = {
  id: "agri-drones-flight-imaging-ha",
  lang: "ha",
  translationOf: "agri-drones-flight-imaging",
  category: "Agriculture (Africa)",
  name: "Jirage Marasa Matuƙi (Drones) don Sa Ido a Gona 2: Tashi, Ɗaukar Hotuna da Na'urorin Ji",
  skills: "Yin binciken kafin tashi, Tuƙi a inda ido ke gani, Shirya tashin taswira mai sarrafa kansa, Zaɓar tsayi da haɗuwar hotuna, Zaɓar na'urar ji da ta dace, Ɗaukar hotuna masu kyau da haske daidai",
  outcome: "shirya tashin taswira a kan gonaki: zaɓar na'urar ji, tsayi, haɗuwar hotuna da lokacin rana, yin binciken kafin tashi, da ɗaukar cikakken rukunin hotuna masu kyau, masu haske daidai, da za a iya haɗa su su zama taswira.",
  about: [
    "Wannan shi ne Kwas na 2 na jerin kwasa-kwasan sa ido da jirgi marar matuƙi (drone), don manoma, jami'an faɗakarwar noma, ma'aikatan kasuwancin noma da matasa masu ba da hidimar drone a Kenya, Najeriya da ko'ina a Afirka. Ku fara ɗaukar Kwas na 1, ko ku tabbata kun riga kun san dokokin drone na ƙasarku, kuma kuna da rajista, lasisi da izinin da suke buƙata.",
    "A Babi na 1 za ku koyi shirya drone, tuƙa shi lafiya a inda ido ke gani, da shirya tashin taswira mai sarrafa kansa da tsayi da haɗuwar hotuna da suka dace. A Babi na 2 za ku koyi abin da kowace na'urar ji ke nunawa (launi, multispectral, zafi), da yadda haske, iska da lokaci ke bambanta taswira mai amfani da marar amfani.",
    "Misalan ayyukan gona ne na gaske: gonar masara ta hekta 2, gonar shayi, gonar rogo, da gidan gilashi na kayan lambu (greenhouse). Kowane darasi yana ƙarewa da ɗan aikin gwaji. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas."
  ],
  finalTask: "Ku rubuta cikakken tsarin tashin ɗaukar hotuna don gonar masara ta hekta 2 (ta gaske ko misali): manufar tashin, na'urar ji, tsayin tashi da girman bayanin hoto (GSD) da manhajar tashi ta nuna, haɗuwar hotuna ta gaba da ta gefe, saurin tashi, adadin batura, lokacin rana, iyakar yanayi, wurin tashi, da jerin binciken kafin tashi. Idan kuna da drone da izinin da ake buƙata, ku tuƙa shi ku duba kowane hoto kafin ku bar gonar.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manoma, jami'an faɗakarwar noma, ma'aikatan kasuwancin noma da matasa masu ba da hidimar drone a Kenya, Najeriya da ko'ina a Afirka da ke ɗaukar Kwas na 2 na jerin kwasa-kwasan sa ido da drone.",
    startingPoint: "Masu koyo sun san abin da drone zai iya yi a gona da yadda ake nemo dokokin drone na ƙasarsu (Kwas na 1). Kaɗan ne suka taɓa yin rubutaccen binciken kafin tashi, tuƙa tashin taswira da aka shirya, saita tsayi da haɗuwar hotuna don bayanin da suke buƙata, ko sanin wace na'urar ji da wane haske ke ba da taswira mai amfani.",
    gap: "Tashin da ba a shirya shi da kyau ba yana kawo hatsari, kuma tashin da aka shirya ba daidai ba ko a lokacin da bai dace ba yana ba da hotuna marasa kyau, masu tabo-tabo, da ba za a iya haɗawa ko kwatantawa ba, yana ɓata batura, lokaci da kuɗin abokan hulɗa. Shirya tashin taswira yadda ya kamata yana ba da cikakkun hotuna masu kyau tun farko.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi; ana bayanin kowace kalma ta tashi da ta ɗaukar hoto",
      "Na'urori: waya ko tablet mai manhajar taswira tana taimakawa; ana buƙatar drone ne kawai don tashin da ba dole ba",
      "Dokoki: ana tashi ne kawai da rajista, lasisi da izinin da ƙasa ke buƙata",
      "Yanayin gona: iska, zafi, gizagizai masu tabo-tabo da rashin sabis na waya a gonaki da yawa",
      "Lokaci: gajerun darussa, da lokacin rubuta tsarin tashi"
    ],
    prerequisites: "\"Drone don Sa Ido a Gona 1: Gabatarwa, Dokoki da Tsaro\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Kafin kowane tashi", action: "yin cikakken binciken kafin tashi na jirgin, batura, na'urar tuƙi (controller), saituna da takardu", standard: "ba tare da tsallake ko ɗaya daga cikin jerin ba" },
    { id: "O2", condition: "A tashin gwaji ko wanda aka ba da izini", action: "tashi, yin zagaye mai sauƙi da sauka yayin da kuke ganin drone ɗin", standard: "a cikin iyakar tsayi ta doka, da sauka akwai sauran caji a batir" },
    { id: "O3", condition: "Don gonar da za a yi wa taswira", action: "shirya tashin taswira mai layuka da tsayi, girman bayanin hoto, haɗuwar hotuna, sauri da batura", standard: "da haɗuwar hotuna kusan kashi 70 zuwa 80 a gaba da kashi 60 zuwa 70 a gefe" },
    { id: "O4", condition: "Idan aka ba ku hoton drone mai launi da cikakken bayani", action: "nuna giɓi, ciyawa, ruwa, faɗuwar karan amfanin gona da lalacewa", standard: "da yi wa kowane wuri alama don a duba shi da ƙafa" },
    { id: "O5", condition: "Idan aka ba ku tambaya game da gona", action: "zaɓar tsakanin na'urar ji ta RGB, multispectral da ta zafi (thermal)", standard: "da dalilin da ya dace da tambayar da kuɗin" },
    { id: "O6", condition: "A ranar tashin taswira", action: "saita lokaci, iyakar haske da iska, da duba kowane hoto kafin barin gonar", standard: "don hotunan su yi kyau, haskensu ya yi daidai, kuma su cika" }
  ],
  chapters: [
    {
      name: "Babi na 1: Ayyukan tashi",
      lessons: [
        {
          objectives: ["O1"],
          title: "Shirya drone: binciken kafin tashi",
          minutes: 5,
          goal: "Yi cikakken binciken kafin tashi a kan drone kafin kowane tashi.",
          text: [
            "Yawancin hatsarin drone suna farawa ne a ƙasa: farfela da ta tsage, batir da rabin caji, tsohuwar taswira a manhaja, ko kamfas (compass) da ba a daidaita ba. Rubutaccen jerin bincike da ake amfani da shi kowane lokaci yana hana yawancinsu.",
            "Ku duba jirgin (jiki, hannaye, farfeloli a matse kuma ba su lalace ba, kyamara mai tsafta kuma a matse), batura (cikakken caji, ba su kumbura ba, wuraren haɗi masu tsafta), na'urar tuƙi da waya ko tablet (an caja su, an sabunta manhajar kafin ku bar gida, an sauke taswirorin da ke aiki ba tare da intanet ba idan babu sabis a gona), da saituna (tsayin komawa gida sama da itace ko mast mafi tsawo, an ajiye wurin gida).",
            "Ku kuma duba takardu: rajista, lasisin matuƙi da duk wani izinin tashi da hukumarku ke buƙata don wannan wuri, a hannunku ko a wayarku."
          ],
          steps: ["Binciken takardu: rajista, lasisi, izini don wannan wuri.", "Jirgi: jiki, hannaye, farfeloli, kyamara.", "Batura: an caja su, ba su kumbura ba, wuraren haɗi masu tsafta.", "Na'urar tuƙi da waya ko tablet: an caja, an sabunta manhaja, taswirori marasa intanet a shirye.", "Saituna: tsayin komawa gida, wurin gida, daidaita kamfas idan manhajar ta nema.", "Ku duba kewaye: mutane, dabbobi, iska, sannan ku fara."],
          words: [["Binciken kafin tashi (pre-flight check)", "jerin abubuwan da ake dubawa kafin kowane tashi."], ["Komawa gida (Return-to-home, RTH)", "saitin da ke sa drone ya koma wurin da ya tashi da kansa, misali idan batir ya yi ƙasa ko an rasa sigina."], ["Wurin gida (home point)", "wurin da drone zai koma, yawanci inda ya tashi."]],
          slides: [
            { title: "Hatsari suna farawa a ƙasa", bullets: ["Farfeloli da suka tsage, batura marasa ƙarfi", "Tsohuwar taswira a manhaja, kamfas da ba a daidaita ba", "Jerin bincike kowane lokaci yana hana yawancinsu"] },
            { title: "Ku duba kayan", bullets: ["Jiki, hannaye, farfeloli, kyamara", "Batura an caja su, ba su kumbura ba", "Na'urar tuƙi, waya, sabunta manhaja, taswirori marasa intanet"] },
            { title: "Ku duba saituna", bullets: ["Tsayin komawa gida sama da abu mafi tsawo", "An ajiye wurin gida", "An daidaita kamfas idan an nema"] },
            { title: "Ku duba takardu", bullets: ["Rajista da lasisin matuƙi", "Izini don wannan wuri", "Ku riƙe su a hannunku"] }
          ],
          sources: [KCAA_UAS, NCAA_P21],
          tryIt: "Ku rubuta naku jerin binciken kafin tashi mai aƙalla abubuwa 12 a ƙarƙashin kanu huɗu: takardu, jirgi, batura da na'urar tuƙi, saituna. Ku ajiye shi a wayarku.",
          youCanNow: "shirya drone da cikakken binciken kafin tashi da ya ƙunshi takardu, jirgi, batura, na'urar tuƙi da saituna.",
          quickCheck: [
            { objective: "O1", q: "Mene ne wurin gida (home point)?", options: ["Gidan matuƙin", "Wurin da drone ke komawa da kansa idan an yi komawa gida", "Wuri mafi tsayi a gonar", "Shagon drone"], answer: 1, why: "Ana ajiye wurin gida kafin tashi don komawa gida ya dawo da drone can." },
            { objective: "O1", q: "Za ku je gonar da babu sabis na waya. Me za ku yi kafin ku bar gida?", options: ["Babu komai; manhajar za ta yi aiki duk da haka", "Ku shirya sabunta manhajar a gona", "Ku bar batura ba tare da caji ba", "Ku sauke taswirori marasa intanet ku sabunta manhajar"], answer: 3, why: "Ya kamata a sabunta manhaja kuma a sauke taswirori marasa intanet kafin ku tafi, domin wataƙila babu sabis a gona." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Tuƙi lafiya a inda ido ke gani",
          minutes: 5,
          goal: "Tashi, yi zagaye mai sauƙi, ku sauka yayin da kuke ganin drone ɗin.",
          text: [
            "Ganin ido kai tsaye (VLOS) yana nufin ku, ko mai taimaka muku kallo, kuna ganin drone da idanunku, ba tare da madubin hangen nesa ba, a duk lokacin tashi. Yawancin tashin gona na ƙananan manoma da sababbin matuƙa VLOS ne. Tashi fiye da inda ido ke gani yana buƙatar izini na musamman. Misali, Kashi na 21 na Najeriya yana buƙatar VLOS don ƙananan drones, kuma ya sa tsayi mafi girma na mita 120 (ƙafa 400) sama da ƙasa don ayyuka da yawa; ku duba iyakar ƙasarku.",
            "Ku tashi daga wurinku mai sarari, ku hau zuwa tsayi mai aminci sama da itatuwa, ku tsaya cak a sama na 'yan daƙiƙoƙi don ku ga drone ɗin ya tsaya daidai. Ku tuƙa a hankali. Ku riƙe drone a gabanku, ba a saman kanku ko a bayanku ba, don kada ku rasa sanin inda yake fuskanta.",
            "Ku kula da batir da iska. Ku sauka da isasshen caji don sauka lafiya, ba a kashi na ƙarshe ba. Idan iska tana tura drone ɗin sosai, ku dawo da shi ku sauka."
          ],
          steps: ["Ku tsaya a wurin tashinku tare da mai taimaka muku kallo.", "Ku tashi ku hau sama da itatuwa; ku tsaya cak ku duba ya tsaya daidai.", "Ku tuƙa a hankali a siffar murabba'i a gabanku, kuna ganinsa.", "Ku kula da batir da iska a kan allo.", "Ku dawo, ku sauko a hankali, ku sauka akwai sauran caji."],
          words: [["VLOS", "visual line of sight (ganin ido kai tsaye): kuna ganin drone da idanunku a duk lokacin tashi."], ["BVLOS", "beyond visual line of sight (fiye da ganin ido): tashi zuwa inda ba ku gani; yana buƙatar izini na musamman."], ["AGL", "above ground level (sama da ƙasa): tsayin da aka auna daga ƙasar da ke ƙarƙashin drone."]],
          slides: [
            { title: "Ganin ido kai tsaye", bullets: ["Ku ko mai taimaka muku kallo kuna ganin drone koyaushe", "Babu madubin hangen nesa", "Fiye da ganin ido yana buƙatar izini na musamman"] },
            { title: "Ku san iyakar tsayi", bullets: ["Kashi na 21 na Najeriya: m 120 (ƙafa 400) AGL don tashi da yawa", "Ku duba iyakar ƙasarku"] },
            { title: "Ku tuƙa shi da kyau", bullets: ["Ku hau sama da itatuwa, ku tsaya cak, ku duba ya tsaya daidai", "Ku tuƙa a hankali, ku riƙe shi a gabanku", "Ku kula da batir da iska"] },
            { title: "Ku sauka da sauran caji", bullets: ["Ba a kashi na ƙarshe ba", "Iska tana tura shi sosai: ku dawo da shi ku sauka"] }
          ],
          sources: [NCAA_P21, KCAA_UAS],
          tryIt: "Idan kuna da drone da izini, ku tuƙa murabba'i a hankali a gabanku ku sauka akwai sauran caji. Idan ba ku da su, ku yi amfani da manhajar kwaikwayon tuƙin drone kyauta (simulator) ko ku kalli bidiyon horo ku rubuta matakan da kuka gani.",
          youCanNow: "tashi, yin zagaye mai sauƙi a inda ido ke gani, da sauka lafiya akwai sauran caji.",
          quickCheck: [
            { objective: "O2", q: "Riƙe drone \"a gabanku\" yana taimakawa da me?", options: ["Cajin batir", "Sa hotuna su yi haske", "Sanin inda drone ke fuskanta", "Tashi fiye da ganin ido"], answer: 2, why: "Riƙe drone a gabanku, ba a saman kanku ko a bayanku ba, yana taimaka muku ku san inda yake fuskanta." },
            { objective: "O2", q: "Nan da nan bayan tashi, iska tana tura drone sosai. Me za ku yi?", options: ["Ku dawo da shi ku sauka", "Ku hau sama don ku guje wa iskar", "Ku ƙara sauri don ku gama", "Ku kau da kai ku bar shi ya tashi"], answer: 0, why: "Idan iska tana tura drone sosai, ku dawo da shi ku sauka." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Shirya tashin taswira mai sarrafa kansa",
          minutes: 6,
          goal: "Shirya tashin taswira mai layuka da tsayi, haɗuwar hotuna da saurin da suka dace.",
          text: [
            "Don yin taswirar gona, drone yana tashi gaba da baya a layuka madaidaita (grid, wani lokaci ana kiransa salon injin yanka ciyawa, lawnmower) yana ɗaukar hotunan da ke haɗuwa da juna. Manhajojin taswira suna bar ku zana iyakar gonar, sannan su shirya muku layukan.",
            "Tsayi ne ke saita bayanin hoto. Idan kun yi sama sosai, kowane pixel (ɗigon hoto) yana rufe ƙasa mai yawa, bayanin yana raguwa, amma kuna gamawa da sauri. Manhajar tana nuna wannan a matsayin GSD (ground sampling distance), misali cm 2 a kowane pixel. Don ƙirga shukar masara kuna buƙatar cikakken bayani; don ganin wuraren da ruwa ya kwanta, bayani mara zurfi ma ya isa. Kada ku taɓa shirya tashi sama da iyakar tsayi ta doka.",
            "Haɗuwar hotuna (overlap) ita ce yawan abin da kowane hoto ke rabawa da na gaba. Manhaja tana buƙatar haɗuwa mai yawa don ta haɗa hotuna su zama taswira ɗaya; jagororin taswira da yawa suna ba da shawarar kusan kashi 70 zuwa 80 a gaba da kashi 60 zuwa 70 a gefe, da ƙari a kan amfanin gona masu tsayi da kamanni ɗaya kamar masara ko shayi. Ku tuƙa a hankali har hotuna su yi kyau, kuma ku shirya isassun batura don ku gama."
          ],
          steps: ["Ku zana iyakar gonar a manhajar taswira.", "Ku zaɓi tsayi: ku duba GSD da yake bayarwa, ku zauna ƙasa da iyakar doka.", "Ku saita haɗuwar hotuna ta gaba da ta gefe (misali kashi 75 da 65).", "Ku duba lokacin tashi da adadin batura.", "Ku ajiye tsarin ku sake duba shi kafin ku je gona."],
          words: [["Tashi mai layuka (grid flight)", "tashi a layuka madaidaita gaba da baya da ke rufe gonar gaba ɗaya."], ["Haɗuwar hotuna (overlap)", "yawan abin da kowane hoto ke rabawa da na gaba, a kashi."], ["GSD", "ground sampling distance: yawan ƙasar da pixel ɗaya ke rufewa, kamar cm 2."], ["Orthomosaic", "babban hoto ɗaya mai daidaiton taswira da aka haɗa daga hotuna masu yawa da ke haɗuwa."]],
          slides: [
            { title: "Tashin taswira", bullets: ["Layuka madaidaita gaba da baya", "Hotuna suna haɗuwa da juna", "Manhaja tana haɗa su su zama taswira ɗaya"] },
            { title: "Tsayi ne ke saita bayani", bullets: ["Sama sosai = ƙarancin bayani, gamawa da sauri", "Ƙasa = ƙarin bayani, ƙarin batura", "Ku zauna ƙasa da iyakar tsayi ta doka"] },
            { title: "Haɗuwar hotuna tana sa haɗawa ta yi aiki", bullets: ["Kusan 70-80% a gaba, 60-70% a gefe ya saba", "Ƙari a kan amfanin gona masu tsayi da kamanni ɗaya"] },
            { title: "Kafin ku tafi", bullets: ["Ku duba GSD, lokacin tashi, batura", "Ku ajiye tsarin ku sake duba shi"] }
          ],
          tryIt: "Ku buɗe manhajar taswira ko ta shirya tashi kyauta (ko mai shirya tashi da ke cikin manhajar drone ɗinku) ku zana gona ta hekta 2. Ku gwada tsayi uku ku rubuta GSD da lokacin tashi na kowanne.",
          youCanNow: "shirya tashin taswira mai layuka da zaɓar tsayi, haɗuwar hotuna da sauri don aikin.",
          quickCheck: [
            { objective: "O3", q: "Mene ne salon grid ko na injin yanka ciyawa?", options: ["Layuka madaidaita gaba da baya a kan gonar", "Zagaye a kewayen itace ɗaya", "Hoto ɗaya daga sama sosai", "Tashi a kan hanya"], answer: 0, why: "Tashin taswira yana bin layuka madaidaita gaba da baya don hotunan su rufe gonar gaba ɗaya da haɗuwa." },
            { objective: "O3", q: "Kuna son ƙirga shukar masara amma tsarinku yana ba da bayani mara zurfi. Me za ku canja?", options: ["Ku ƙara sauri", "Ku rage haɗuwar hotuna", "Ku yi ƙasa don GSD mai zurfi, a cikin iyakar doka", "Ku tashi da yamma"], answer: 2, why: "Tashi ƙasa yana ba da cikakken bayani a kowane pixel, amma kada ku taɓa wuce iyakar doka." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Ayyukan tashi",
        questions: [
          { objective: "O1", q: "Me yasa ake amfani da rubutaccen jerin binciken kafin tashi kowane lokaci?", options: ["Yana nuna ƙwarewa", "Yawancin hatsari suna farawa da wani abu da aka manta a ƙasa", "Drone yana buƙatarsa don ya kunna", "Yana maye gurbin lasisi"], answer: 1, why: "Jerin bincike yana gano farfeloli da suka tsage, batura marasa ƙarfi da saituna marasa daidai." },
          { objective: "O1", q: "Zuwa wane tsayi ya kamata a saita komawa gida?", options: ["Ƙasa yadda zai yiwu", "Ƙasa da itace mafi tsawo", "Sama da itace ko mast mafi tsawo a wurin", "Ba shi da muhimmanci"], answer: 2, why: "Dole drone ya wuce kowane cikas idan ya koma gida da kansa." },
          { objective: "O2", q: "Mene ne ma'anar VLOS?", options: ["Kuna ganin drone da idanunku a duk lokacin tashi", "Drone yana ganin ku", "Drone yana tashi da dare", "Drone yana tashi fiye da sararin sama"], answer: 0, why: "Ganin ido kai tsaye yana nufin ganin drone ba tare da taimakon wani abu ba koyaushe." },
          { objective: "O3", q: "Kun ƙara tsayi a tashin taswira. Me zai faru?", options: ["Ƙarin bayani a kowane pixel", "Hotuna sun daina haɗuwa", "Babu abin da zai canja", "Kowane pixel yana rufe ƙasa mai yawa kuma kuna gamawa da sauri"], answer: 3, why: "Tashi sama yana ba da GSD mara zurfi amma yana rufe gonar da sauri." },
          { objective: "O3", q: "Me yasa hotunan taswira ke buƙatar haɗuwa mai yawa?", options: ["Don a yi amfani da ƙarin batir", "Don manhaja ta haɗa su su zama taswira ɗaya", "Don sa hotuna su yi haske", "Domin doka ta ce kashi 100"], answer: 1, why: "Manhajar haɗa hotuna tana daidaita abubuwan da hotuna masu haɗuwa suka raba." }
        ]
      }
    },
    {
      name: "Babi na 2: Ɗaukar hotuna daga sama da na'urorin ji",
      lessons: [
        {
          objectives: ["O4"],
          title: "Hotuna masu launi (RGB): abin da za ku iya gani",
          minutes: 5,
          goal: "Karanta hoton drone mai launi da cikakken bayani don neman giɓi, ciyawa, ruwa da lalacewa.",
          text: [
            "Kyamarar launi ta yau da kullum (RGB) ita ce na'urar ji mafi amfani ga yawancin gonaki, kuma tana zuwa da kusan kowane drone. A 'yan santimita a kowane pixel, kuna iya ganin shukar masara, wake ko rogo ɗaya-ɗaya.",
            "A hotuna masu launi ku nemi: giɓi a layuka (tsiro marar kyau ko shukar da kwari suka cinye), tarin ciyawa tsakanin layuka, ruwa da ya kwanta da ƙasa marar komai, masara ko dawa da suka faɗi (lodging), lalacewa daga ƙanƙara ko iska, shanu ko awaki a wurin da bai dace ba, da magudanan ruwa da suka toshe ko shingaye da suka karye.",
            "Hotuna masu launi suna iya nuna alamun matsalar sinadaran ƙasa ko cuta (rawayewa, kore marar daidai), amma suna nuna ta a makare fiye da idon da ke ƙasa ko kyamarar multispectral. Koyaushe ku yi wa wurin alama ku duba shi da ƙafa."
          ],
          steps: ["Ku buɗe hoton ko taswirar ku nuna gonar gaba ɗaya.", "Ku nemi duk wani abu marar daidai: giɓi, canjin launi, ruwa, ƙasa marar komai.", "Ku zuƙo kowanne.", "Ku yi wa kowane wuri alama da lamba da ɗan bayani.", "Ku tafi wuraren da ƙafa ku duba su."],
          words: [["Hoto mai cikakken bayani (high-resolution)", "hoto mai bayani dalla-dalla, inda kowane pixel ke rufe ɗan ƙaramin yanki na ƙasa."], ["Faɗuwar kara (lodging)", "lokacin da karan masara, dawa ko alkama ya lanƙwasa ko ya faɗi."]],
          slides: [
            { title: "RGB: na'urar ji ta kowace rana", bullets: ["Tana zuwa da kusan kowane drone", "Tana nuna shuka ɗaya-ɗaya a 'yan cm a kowane pixel"] },
            { title: "Abin da za ku nema", bullets: ["Giɓi a layuka, tarin ciyawa", "Ruwa da ya kwanta, ƙasa marar komai", "Masara da ta faɗi, lalacewar ƙanƙara ko iska", "Dabbobi, shingaye da suka karye, magudanan da suka toshe"] },
            { title: "Iyakoki", bullets: ["Tana nuna cuta da ƙarancin sinadarai a makare", "Koyaushe ku duba wurare da ƙafa"] }
          ],
          tryIt: "Ku nemo hoton drone ko hoton tauraron ɗan adam na gona a intanet (ko ku yi amfani da naku). Ku jera abubuwa biyar da kuke gani, ku nuna inda kowanne yake, ku faɗi abin da za ku duba a ƙasa.",
          youCanNow: "karanta hoton drone mai launi da yi wa giɓi, ciyawa, ruwa da lalacewa alama don a duba su a ƙasa.",
          quickCheck: [
            { objective: "O4", q: "A hoto mai launi, me giɓi a layi zai iya nunawa?", options: ["Taki da ya yi yawa", "Batir mai ƙarfi", "Girbi mai kyau", "Tsiro marar kyau ko shukar da kwari suka cinye"], answer: 3, why: "Giɓi a layuka sau da yawa yana nufin iri bai tsiro ba ko an cinye shukar." },
            { objective: "O4", q: "Hoton yana nuna wani yanki mai rawaya, marar daidai a gonar wake. Me za ku yi?", options: ["Ku fesa maganin a gonar gaba ɗaya", "Ku yi wa wurin alama ku duba shi da ƙafa", "Ku yi watsi da shi", "Ku goge hoton"], answer: 1, why: "Hotuna masu launi suna iya nuna alamun matsala, amma dole a duba wurin a ƙasa." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Na'urorin ji na multispectral da na zafi (thermal)",
          minutes: 6,
          goal: "Zaɓi tsakanin na'urar ji ta RGB, multispectral da ta zafi don tambaya game da gona.",
          text: [
            "Ganyaye kore masu lafiya suna mayar da hasken near-infrared (NIR) mai yawa, wanda ido ba ya gani. Ganyaye masu damuwa ko marasa lafiya suna mayar da ƙasa da haka. Kyamarar multispectral tana auna rukunonin haske da yawa, har da near-infrared da red edge, don manhaja ta lissafa ma'aunin shuke-shuke (vegetation index) kamar NDVI da ke nuna ƙarfin girman shuka. FAO tana amfani da NDVI daga taurarin ɗan adam don bin lafiyar shuke-shuke a ko'ina a Afirka; drones suna yin haka a matakin gona.",
            "Kyamarar zafi (thermal) tana auna zafin saman abu. Shukar da ba ta da isasshen ruwa tana rufe ƙofofin numfashinta ta yi zafi, don haka hotunan zafi suna iya nuna ƙarancin ruwa da bututun ban ruwa da suka toshe. Kyamarar zafi kuma tana da kyau wajen nemo dabbobi da dare ko da asuba.",
            "Waɗannan na'urorin ji sun fi tsada kuma suna buƙatar kulawa (daidaitawa, lokacin rana da ya dace). Ku zaɓe su idan tambayar tana buƙatarsu: damuwar shuka da wuri a gonar shayi ko kayan lambu da ake ban ruwa, eh; ƙirga giɓi a gonar wake ta eka 1, a'a, launi ya isa."
          ],
          words: [["Near-infrared (NIR)", "hasken da ke bayan ja kaɗan da mutane ba sa gani; ganyaye masu lafiya suna mayar da shi da yawa."], ["Ma'aunin shuke-shuke (vegetation index)", "lambar da aka lissafa daga rukunonin haske da ke nuna yadda shuke-shuke suke kore da ƙarfi."], ["NDVI", "Normalized Difference Vegetation Index: ma'aunin shuke-shuke da aka saba daga haske ja da near-infrared, daga -1 zuwa +1; mafi girma yawanci yana nufin shuke-shuke kore masu yawa da lafiya."]],
          slides: [
            { title: "Multispectral", bullets: ["Tana auna ja, red edge, near-infrared da sauransu", "Manhaja tana yin taswirar ma'aunin shuke-shuke kamar NDVI", "Tana nuna damuwar shuka da wuri fiye da launi"] },
            { title: "Zafi (thermal)", bullets: ["Tana auna zafin saman abu", "Shukar da ba ta da isasshen ruwa ta fi zafi", "Tana gano bututun ban ruwa da suka toshe da dabbobi da asuba"] },
            { title: "Ku zaɓa bisa tambayar", bullets: ["Giɓi da ciyawa: RGB", "Damuwa da wuri a amfanin gona masu daraja: multispectral", "Ƙarancin ruwa ko dabbobi: zafi"] }
          ],
          sources: [{ name: "FAO GIEWS: Kallon Duniya daga sama (NDVI da alamomin shuke-shuke)", url: "https://www.fao.org/giews/earthobservation/index.jsp" }, FAO_ITU_DRONES],
          tryIt: "Ga kowace tambaya, ku zaɓi RGB, multispectral ko zafi ku rubuta dalili: (a) Bututun ban ruwa na ɗigo-ɗigo (drip) ya toshe? (b) A ina wake bai tsiro ba? (c) Akwai wani yanki na shayi da ke cikin damuwa kafin ganyen ya canja launi?",
          youCanNow: "faɗin abin da na'urorin ji na multispectral da na zafi ke nunawa da zaɓar na'urar ji da ta dace don tambaya game da gona.",
          quickCheck: [
            { objective: "O5", q: "Me kyamarar zafi ke aunawa?", options: ["Tsayin shuka", "Zafin saman abu", "Sinadaran ƙasa", "Ruwan sama"], answer: 1, why: "Kyamarar zafi tana auna zafin saman abu, wanda zai iya nuna ƙarancin ruwa." },
            { objective: "O5", q: "Wata gonar shayi tana son gano damuwar shuka da wuri a dukkan yankunanta. Wace na'urar ji za ku ba da shawara?", options: ["Babu", "Kyamarar zafi don dabbobi kawai", "Kyamarar waya", "Kyamarar multispectral"], answer: 3, why: "Kyamarorin multispectral suna auna near-infrared da red edge, da ke nuna damuwar shuka da wuri." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ɗaukar hotuna masu kyau: haske, iska da lokaci",
          minutes: 5,
          goal: "Shirya tashi ta yadda kowane hoto zai yi kyau, haskensa ya yi daidai, kuma ya yi amfani.",
          text: [
            "Hotunan da aka ɗauka bayan makonni za a iya kwatanta su ne kawai idan an ɗauke su ta hanya ɗaya. Ku tashi kusan tsakar rana, lokacin da inuwa ke gajarta, kuma a haske mai tsayayye: ko rana cikakkiya ko gizagizai daidai, ba gizagizai masu tabo-tabo da ke wucewa a kan gonar ba. Ku tashi a tsayi da saituna iri ɗaya kowane lokaci.",
            "Iska tana girgiza drone kuma tana motsa ganyaye, wanda ke ɓata hotuna kuma yana hana haɗawa. Ku rage sauri a iska kaɗan, kada ku tashi ko kaɗan a iska mai ƙarfi. Ku tabbata ruwan tabarau (lens) yana da tsafta kuma an saita kyamara ta mai da hankali daidai; manhajojin taswira da yawa suna saita kyamarar muku.",
            "Don kyamarorin multispectral, ku ɗauki hoton allon daidaitawa (calibration panel, katin da aka san yadda yake mayar da haske, wanda ke zuwa da na'urar ji) kafin da bayan tashi, don manhaja ta gyara bambancin haske. Kafin ku bar gonar, ku duba hotunan: idan wasu ba su fita sosai ba, sun yi duhu ko sun ɓace, ku sake tashi a wannan sashe tun kuna nan."
          ],
          steps: ["Ku shirya tashi kusan tsakar rana a haske mai tsayayye.", "Ku duba iska; ku rage sauri a iska kaɗan, ku fasa a iska mai ƙarfi.", "Ku goge ruwan tabarau; ku duba saitunan kyamara.", "Multispectral: ku ɗauki hoton allon daidaitawa kafin da bayan tashi.", "Kafin ku tafi, ku duba hotunan ku sake tashi a duk sashen da bai yi kyau ba."],
          words: [["Allon daidaitawa (calibration panel)", "katin da aka san haskensa da ake ɗaukar hotonsa kafin da bayan tashin multispectral don gyara bambancin haske."], ["Ɓaci (blur)", "lokacin da hoto bai fita sosai ba saboda kyamara ko shuke-shuke sun motsa."]],
          slides: [
            { title: "Hanya ɗaya, kowane lokaci", bullets: ["Ku tashi kusan tsakar rana: inuwa gajeriya", "Haske mai tsayayye: rana cikakkiya ko gizagizai daidai", "Tsayi da saituna iri ɗaya a kowane tashi"] },
            { title: "Ku hana ɓacin hoto", bullets: ["Ku rage sauri a iska kaɗan", "Ku fasa a iska mai ƙarfi", "Ruwan tabarau mai tsafta, saitunan kyamara daidai"] },
            { title: "Ƙarin abubuwa na multispectral", bullets: ["Ku ɗauki hoton allon daidaitawa", "KAFIN da BAYAN tashi"] },
            { title: "Ku duba kafin ku tafi", bullets: ["Ku duba hotunan", "Ku sake tashi a sassan da suka ɓaci, suka yi duhu ko suka ɓace"] }
          ],
          tryIt: "Aikin ƙarshe: ku rubuta cikakken tsarin tashin ɗaukar hotuna don gonar masara ta hekta 2: manufa, na'urar ji, tsayi da GSD, haɗuwar hotuna, sauri, batura, lokacin rana, iyakar yanayi, wurin tashi da jerin bincike. Idan kuna da drone da izinin da ake buƙata, ku tuƙa shi ku duba kowane hoto kafin ku tafi.",
          youCanNow: "shirya da ɗaukar rukunin hotuna masu kyau, masu haske daidai, da za a iya haɗa su su zama taswirar gona kuma a kwatanta su a tsawon lokaci.",
          quickCheck: [
            { objective: "O6", q: "Mene ne allon daidaitawa (calibration panel)?", options: ["Farfela ta ajiya", "Akwatin batir", "Katin da aka san yadda yake mayar da haske da ake ɗaukar hotonsa kafin da bayan tashin multispectral", "Allon na'urar tuƙi"], answer: 2, why: "Ɗaukar hoton allon daidaitawa yana bar manhaja ta gyara bambancin hasken ranar." },
            { objective: "O6", q: "Gizagizai masu tabo-tabo suna wucewa da sauri a kan gonar da tsakar rana. Me za ku yi?", options: ["Ku jira rana cikakkiya ko gizagizai daidai kafin ku tashi", "Ku tashi yanzu ku yi fata", "Ku tashi da magariba a maimakon haka", "Ku hau sama don ku wuce gizagizan"], answer: 0, why: "Haske mai tsayayye, ko rana cikakkiya ko gizagizai daidai, yana ba da hotuna masu haske daidai da za a iya kwatantawa." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Ɗaukar hotuna daga sama da na'urorin ji",
        questions: [
          { objective: "O4", q: "Wace na'urar ji ce ta isa don gano giɓi a gonar wake ta eka 1?", options: ["Ta zafi kawai", "Multispectral kawai", "Kyamarar launi ta yau da kullum (RGB)", "Babu na'urar ji da za ta iya"], answer: 2, why: "Giɓi yana da sauƙin gani a hotuna masu launi a 'yan santimita a kowane pixel." },
          { objective: "O5", q: "Ganyaye kore masu lafiya suna mayar da wane abu da yawa?", options: ["Hasken near-infrared", "Sauti", "Zafi kawai", "Raƙuman rediyo"], answer: 0, why: "Tsarin ganye mai lafiya yana mayar da near-infrared sosai; ma'aunin shuke-shuke yana amfani da wannan." },
          { objective: "O5", q: "Hoton zafi yana nuna wani yanki na tumatir ya fi sauran zafi sosai. Dalilin da ya kamata a duba shi ne:", options: ["Launin taki da ya yi yawa", "Drone ya yi sama sosai", "Yankin ya fi kore", "Ƙarancin ruwa ko bututun drip da ya toshe"], answer: 3, why: "Shukar da ba ta da isasshen ruwa tana yin zafi domin tana rufe ƙofofin numfashinta." },
          { objective: "O6", q: "Yaushe ne lokaci mafi kyau na tashi don hotunan da za a kwatanta?", options: ["Da fitowar rana wani mako, da faɗuwar rana wani mako", "Kusan tsakar rana, a haske mai tsayayye, ta hanya ɗaya kowane lokaci", "A gizagizai masu tabo-tabo da ke motsi", "Da dare"], answer: 1, why: "Gajeriyar inuwa da haske mai tsayayye suna sa a iya kwatanta hotuna." },
          { objective: "O6", q: "Wasu hotuna sun ɓaci lokacin da kuka duba su a gona. Ya kamata ku:", options: ["Sake tashi a wannan sashe kafin ku tafi", "Koma gida ku yi fata haɗawa za ta yi aiki", "Goge dukkan hotunan", "Ƙara sauri a gaba"], answer: 0, why: "Gyara shi a wurin yana hana wata tafiya kuma yana ba da cikakkiyar taswira." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Jirage Marasa Matuƙi (Drones) don Sa Ido a Gona 2: Tashi, Ɗaukar Hotuna da Na'urorin Ji",
    questions: [
      { objective: "O1", q: "A ina ne yawancin hatsarin drone ke farawa?", options: ["A sama kawai", "A ƙasa, da wani abu da aka manta wajen shiri", "A ofis", "A manhaja bayan sauka"], answer: 1, why: "Farfeloli da suka tsage, batura marasa ƙarfi da saituna marasa daidai suna kawo hatsari da yawa." },
      { objective: "O1", q: "Wanne ne ɓangaren binciken takardu?", options: ["Matsewar farfela", "Goge ruwan tabarau", "Rajista, lasisi da izini don wurin", "Kumburin batir"], answer: 2, why: "Binciken takardu yana tabbatar da cewa an ba ku izinin tashi a wurin." },
      { objective: "O1", q: "Wani batir ya yi kama da ya kumbura. Ya kamata ku:", options: ["Kada ku yi amfani da shi", "Yi amfani da shi don ɗan gajeren tashi", "Matse shi ya yi lebur", "Ƙara masa caji"], answer: 0, why: "Batir da ya kumbura yana iya lalacewa ko ya kama wuta; kada ku tashi da shi." },
      { objective: "O1", q: "Me yasa za ku sauke taswirori marasa intanet kafin ku je gonar karkara?", options: ["Don rage kuɗin mai", "Don sa drone ya yi sauri", "Domin doka ta buƙata", "Wataƙila babu sabis na waya a gona"], answer: 3, why: "Ba tare da sabis ba, manhajar ba za ta iya buɗe taswirorin da take buƙata ba." },
      { objective: "O1", q: "Komawa gida (return-to-home) shi ne:", options: ["Saitin da ke sa drone ya koma wurin da ya tashi da kansa", "Maɓallin da ke kashe injuna", "Salon kyamara", "Wani nau'in batir"], answer: 0, why: "RTH yana dawo da drone gida idan batir ya yi ƙasa ko an rasa sigina." },
      { objective: "O2", q: "Tashi fiye da ganin ido:", options: ["Koyaushe an yarda", "Yana buƙatar izini na musamman", "Dole ne don taswira", "Ya fi aminci"], answer: 1, why: "BVLOS yana da haɗari mafi yawa kuma yana buƙatar izini." },
      { objective: "O2", q: "Kashi na 21 na Najeriya ya sa tsayi mafi girma da aka saba na:", options: ["Mita 10", "Mita 1,000", "Mita 120 (ƙafa 400) sama da ƙasa", "Babu iyaka"], answer: 2, why: "Kashi na 21 yana amfani da m 120 (ƙafa 400) AGL don ayyuka da yawa; ku duba iyakar ƙasarku." },
      { objective: "O2", q: "A lokacin tashi, a ina ya kamata ku riƙe drone?", options: ["A bayanku", "A saman kanku kai tsaye", "Inda ba ku gani", "A gabanku, inda kuke gani"], answer: 3, why: "A gabanku kuma kuna gani, za ku iya sanin inda yake fuskanta." },
      { objective: "O2", q: "Yaushe ya kamata ku sauka?", options: ["Akwai sauran caji a batir", "A kashi 0", "Sai drone ya sauka da kansa", "Idan waya ta cika"], answer: 0, why: "Ku bar isasshen caji don sauko lafiya da sauka." },
      { objective: "O3", q: "Tashin taswira yana tafiya:", options: ["A zagaye", "A layuka madaidaita gaba da baya", "Ba tare da tsari ba", "Sama da ƙasa kai tsaye"], answer: 1, why: "Salon grid yana rufe gonar gaba ɗaya da hotuna masu haɗuwa." },
      { objective: "O3", q: "GSD yana nufin:", options: ["Saurin drone a ƙasa", "Nisan tsaro na duniya", "Yawan ƙasar da pixel ɗaya ke rufewa", "Girman batir"], answer: 2, why: "Ground sampling distance shi ne bayanin hoto, kamar cm 2 a kowane pixel." },
      { objective: "O3", q: "Don ƙirga shukar masara ɗaya-ɗaya ya kamata ku:", options: ["Tashi sama yadda zai yiwu", "Yi amfani da taurarin ɗan adam kawai", "Tashi da dare", "Yi ƙasa don cikakken bayani, a cikin iyakar doka"], answer: 3, why: "GSD mai zurfi yana nuna shuka ɗaya-ɗaya; ku zauna ƙasa da iyakar tsayi." },
      { objective: "O3", q: "Haɗuwar hotuna ta gaba da aka saba don taswira kusan:", options: ["Kashi 70 zuwa 80", "Kashi 5", "Kashi 0", "Kashi 100 daidai"], answer: 0, why: "Haɗuwa mai yawa tana bar manhaja ta haɗa hotuna." },
      { objective: "O4", q: "Faɗuwar kara (lodging) a hoto mai launi tana nufin:", options: ["Shuke-shuke da suka yi kore sosai", "Karan da ya lanƙwasa ko ya faɗi", "Ciyawa tsakanin layuka", "Ruwa a kan ƙasa"], answer: 1, why: "Masara ko dawa da suka faɗi suna kwance lebur kuma suna da sauƙin gani daga sama." },
      { objective: "O4", q: "Hoto mai launi yana nuna wani yanki mai rawayewa. Mataki mafi kyau na gaba shi ne:", options: ["Fesa masa magani", "Yin watsi da shi", "Yi masa alama ku duba shi da ƙafa", "Ƙara tsayi"], answer: 2, why: "Hotuna suna nuna inda; ku ne kuke tabbatar da dalilin a ƙasa." },
      { objective: "O5", q: "Ana lissafa NDVI daga:", options: ["Sauti da zafi", "Haske shuɗi kawai", "Samfurin ƙasa", "Haske ja da near-infrared"], answer: 3, why: "NDVI yana kwatanta haske ja da near-infrared da ake mayarwa." },
      { objective: "O5", q: "Babban ƙimar NDVI yawanci tana nufin:", options: ["Shuke-shuke kore masu yawa da lafiya", "Ƙasa marar komai", "Ruwa", "Kyamara da ta lalace"], answer: 0, why: "FAO tana bayanin babban NDVI mai kyau a matsayin shuke-shuke masu yawa da lafiya." },
      { objective: "O5", q: "Kyamarar zafi zaɓi ne mai kyau don:", options: ["Karanta lambar mota", "Gano ƙarancin ruwa da dabbobi da asuba", "Ƙirga iri a buhu", "Ganin launuka da haske sosai"], answer: 1, why: "Kyamarar zafi tana auna zafi, wanda ke da alaƙa da ƙarancin ruwa da dabbobi masu ɗumin jiki." },
      { objective: "O6", q: "Me yasa ake ɗaukar hoton allon daidaitawa da kyamarar multispectral?", options: ["Abin tunawa ne", "Don gwada farfeloli", "Don manhaja ta gyara bambancin hasken ranar", "Don auna iska"], answer: 2, why: "Sanannen hasken da allon ke mayarwa yana bar manhaja ta gyara karatun." },
      { objective: "O6", q: "Iska mai ƙarfi da gugar iska a ranar tashin taswira tana nufin:", options: ["Ku ƙara sauri", "Ku ƙara tsayi", "Ku cire farfeloli", "Kada ku tashi; ku sake saka wata rana"], answer: 3, why: "Iska mai ƙarfi tana sa a rasa iko kuma tana ɓata hotuna." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      1,
      5,
      6,
      10,
      12,
      13,
      15,
      17,
      18
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe na tsarin ku sake duba shi.",
    criteria: [
      {
        name: "Manufa da na'urar ji",
        objective: "O5",
        notYet: "Babu manufa, ko na'urar ji ba ta dace da manufar ba.",
        meets: "Manufar tashi a sarari da na'urar ji da ta dace da ita, tare da dalili.",
        exceeds: "Ya bayyana dalilin da ya sa ba a zaɓi na'urar ji mafi arha ko mafi tsada ba."
      },
      {
        name: "Tsayi, bayani da haɗuwar hotuna",
        objective: "O3",
        notYet: "Babu tsayi, GSD ko haɗuwar hotuna, ko ya wuce iyakar tsayi ta doka.",
        meets: "Tsayi da GSD da manhaja ta nuna, haɗuwar hotuna ta gaba da ta gefe, sauri da adadin batura.",
        exceeds: "Ya nuna yadda bayanin ya dace da aikin, kamar ƙirga shuke-shuke."
      },
      {
        name: "Haske, iska da lokaci",
        objective: "O6",
        notYet: "Babu lokacin rana ko iyakar yanayi.",
        meets: "Lokacin rana, haske, iyakar iska da shirin duba kowane hoto kafin barin gona.",
        exceeds: "Ya haɗa da matakan allon daidaitawa ko ranar ajiya."
      },
      {
        name: "Jerin binciken kafin tashi",
        objective: "O1",
        notYet: "Jerin binciken ya rasa jirgi, batura, saituna ko takardu.",
        meets: "Ya ƙunshi jirgi, batura, na'urar tuƙi da manhaja, saitunan komawa gida da takardu.",
        exceeds: "Ya ƙara wurin tashi da yadda drone zai kasance a inda ake gani."
      },
      {
        name: "Tuƙi lafiya",
        objective: "O2",
        notYet: "Babu wurin tashi, ko tashi fiye da ganin ido ba tare da izini ba.",
        meets: "Wurin tashi a sarari, tashi a inda ido ke gani da cikin tsayin doka, da sauka akwai sauran caji.",
        exceeds: "Ya ambaci mai taimakawa kallo da matakan da za a ɗauka idan iska ta ƙaru."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka sami \"Ya cika\" ko \"Ya wuce\" a kowane layin rubric na tsarin tashi",
      "Masu koyo masu izini da suka ce sun yi tashin taswira da aka shirya kuma sun sami cikakkun hotuna cikin kwanaki 60 (binciken biyo baya)",
      "Masu koyo da suka ci gaba zuwa Kwas na 3 na jerin kwasa-kwasan drone",
      "Masu ba da hidimar drone da suka ce sun rage sake tashi ko hatsari bayan horo"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko tablet mai manhajar taswirar drone, ko hotunan allonta (screenshots)",
      "Littafin rubutu ko jerin bincike da aka buga",
      "Drone tare da rajista, lasisi da izininsa, don tashin gwaji wanda ba dole ba kawai",
      "Kusan minti 60 gaba ɗaya, a gajerun zama, da lokacin rubuta tsarin tashi"
    ],
    facilitatorNotes: [
      "Ku yi gwajin farko tare, sannan ku shirya tashin taswira guda ɗaya na misali a kan allo don kowa ya ga yadda tsayi, GSD da haɗuwar hotuna ke canjawa.",
      "Duk tashin gwaji dole ya bi dokokin ƙasa, da matuƙi mai lasisi da izinin da ake buƙata, kuma 'yan kallo su kasance nesa.",
      "Ku karanta jerin binciken kafin tashi da babbar murya a kan drone na gaske ko na hoto, kuma kada ku yi amfani da batura da suka kumbura.",
      "Ku yi amfani da hotunan misali idan babu drone, don masu koyo su yi atisayen karanta hotuna masu launi, na multispectral da na zafi.",
      "Ku ba da maki ga tsarin tashi da rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
