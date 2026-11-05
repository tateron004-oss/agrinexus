"use strict";

// Koach Learn course, Hausa (ha) translation of agriculture-africa/agri-drones-crop-health.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const FAO_EO = { name: "FAO GIEWS: Kallon duniya daga sama (NDVI da alamun tsirrai)", url: "https://www.fao.org/giews/earthobservation/index.jsp" };
const FAO_FAMEWS = { name: "FAO: manhajar waya don yaƙi da tsutsar Fall Armyworm a Afirka (FAMEWS)", url: "https://www.fao.org/newsroom/detail/FAO-launches-mobile-application-to-support-fight-against-Fall-Armyworm-in-Africa/en" };
const ODM = { name: "OpenDroneMap (manhaja kyauta, buɗaɗɗiya, don yin taswira daga hotunan jirgi mara matuƙi)", url: "https://www.opendronemap.org/" };
const QGIS = { name: "QGIS (manhajar GIS kyauta, buɗaɗɗiya)", url: "https://qgis.org/" };

module.exports = {
  id: "agri-drones-crop-health-ha",
  lang: "ha",
  translationOf: "agri-drones-crop-health",
  category: "Agriculture (Africa)",
  name: "Jirgi Mara Matuƙi don Sa Ido a Gona 3: Lafiyar Amfanin Gona, Kwari da Sarrafa Bayanai",
  skills: "Karanta taswirar lafiyar amfanin gona ta NDVI, Gano alamun kwari, cuta da damuwa da wuri, Tabbatar da wuraren matsala a ƙasa, Haɗa hotunan jirgi su zama taswira, Yin taswirar index a QGIS, Rubuta rahoton matakan da za a ɗauka a gona",
  outcome: "mayar da hotunan gona da jirgi mara matuƙi ya ɗauka zuwa taswirar lafiyar amfanin gona, gano wuraren da ke da matsala, duba su a ƙasa, da rubuta gajeren rahoton matakai da manomi zai iya amfani da shi.",
  about: [
    "Wannan shi ne Kwas na 3 na jerin kwasa-kwasan sa ido da jirgi mara matuƙi (drone), don jami'an faɗakarwa kan noma (extension officers), masana amfanin gona, manajojin gona da matasa masu ba da hidimar jirgi mara matuƙi a Kenya, Najeriya da ko'ina a Afirka. Ya kamata ku san yadda ake ɗaukar hotunan jirgi da ke shiga juna (Kwas na 2), ko kuna da irin waɗannan hotuna; akwai samfurin bayanai kyauta a intanet.",
    "Babi na 1 yana koya muku karanta taswirar lafiyar amfanin gona, da gane alamun da matsalolin kwari, cuta, ruwa da sinadaran abinci na shuka suke nunawa da wuri a kan masara, rogo, wake, shayi da kofi, da yadda ake tabbatar da su a ƙasa. Babi na 2 yana koya muku haɗa hotuna su zama taswira da manhaja kyauta, yin taswirar NDVI a QGIS, da rubuta rahoton da zai kai ga ɗaukar mataki.",
    "Taswirar jirgi mara matuƙi ba ta maye gurbin idanun manomi ko binciken jami'in faɗakarwa. Tana nuna inda za a fara dubawa, don ɗan lokaci da kuɗin da ake da su su tafi wurin da ya dace. Kowane darasi yana ɗaukar kusan minti biyar, da ɗan aikin atisaye; akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ta amfani da taswirar jirgi mara matuƙi ta gona ta gaske ko samfurin bayanai kyauta: ku yi taswirar NDVI ko ta launi, ku yi alama a aƙalla wurare uku masu matsala, ku rubuta shirin tabbatarwa a ƙasa (abin da za ku nema a kowane wuri), sannan ku rubuta rahoton matakai mai shafi ɗaya don manomi, da hoton taswirar, abin da aka samu ko ake zato, matakin gaba da aka ba da shawara a kowane wuri, da wanda za a tuntuɓa don tabbatarwa.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Jami'an faɗakarwa kan noma, masana amfanin gona, manajojin gona da matasa masu ba da hidimar jirgi mara matuƙi a Kenya, Najeriya da ko'ina a Afirka da ke ɗaukar Kwas na 3 na jerin sa ido da jirgi mara matuƙi, suna aiki da amfanin gona kamar masara, rogo, wake, shayi da kofi.",
    startingPoint: "Masu koyo suna iya ɗaukar hotunan jirgi da ke shiga juna (Kwas na 2), ko suna da samfurin bayanai. Kaɗan ne suka taɓa haɗa hotuna su zama taswira, yin taswirar NDVI a QGIS, karanta alamun taswira don kwari, cuta da damuwa, duba wurare a ƙasa, ko rubuta rahoton da manomi ya yi aiki da shi.",
    gap: "Hotunan jirgi mara matuƙi suna da amfani ne kawai idan sun zama taswira, an je an duba wuraren da ke da rauni da ƙafa, kuma manomi ya sami matakin gaba a sarari. Idan ba haka ba, ana gano matsaloli a makare, ana hasashen magani, kuma ana ɓata kuɗi. Mayar da hotuna zuwa rahoton matakai da aka tabbatar yana tura ɗan lokaci da kuɗin da ake da su zuwa wurin da ya dace.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi; ana bayanin kowace kalmar taswira da GIS",
      "Na'urori: kwamfutar da za ta iya amfani da QGIS da OpenDroneMap kyauta, da waya mai GPS don dubawa a ƙasa",
      "Bayanai: hotunan jirgi na gaske ko samfurin bayanai kyauta; sarrafawa na iya ɗaukar awa ɗaya ko fiye",
      "Taswirar jirgi mara matuƙi ba ta maye gurbin idanun manomi ko binciken ƙwararre; babu shawarar maganin kwari daga taswira",
      "Ana raba bayanan manoma da taswirorinsu ne kawai da izininsu"
    ],
    prerequisites: "\"Jirage Marasa Matuƙi (Drones) don Sa Ido a Gona 2: Tashi, Ɗaukar Hotuna da Na'urorin Ji\", ko hotunan jirgi da ke shiga juna da za a yi aiki da su."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku taswirar lafiyar amfanin gona ta NDVI ko ta launi", action: "karanta makullin taswirar (legend) da gano wuraren da ke da rauni da masu ƙarfi", standard: "ta hanyar kwatanta bambance-bambance a cikin gonar da kuma da tsofaffin taswirori" },
    { id: "O2", condition: "Idan aka ba ku alamun taswira a cikin gona", action: "bayyana abin da kowace alama za ta iya nunawa, kamar kwari, cuta, ruwa, injuna ko sinadaran abinci na shuka", standard: "kuna ɗaukar kowace alama a matsayin ishara da za a tabbatar, ba binciken ƙarshe ba" },
    { id: "O3", condition: "Ga kowane wuri mai matsala a kan taswira", action: "rubuta shirin tabbatarwa a ƙasa da rubuta abin da kuka samu a wurin", standard: "da lambar wurin, coordinates, abin da kuka gani, abin da ake zato ya jawo shi, yadda kuka tabbata da hotuna" },
    { id: "O4", condition: "Idan aka ba ku hotunan jirgi da ke shiga juna", action: "haɗa su su zama orthomosaic da manhaja kyauta da duba shi don ramuka da dushewa", standard: "an sa wa hotunan suna, an ajiye kwafinsu, kuma an duba sakamakon" },
    { id: "O5", condition: "Ta amfani da QGIS da orthomosaic na multispectral", action: "lissafa da yi wa taswirar NDVI launi tare da nuna iyakar gona da wuraren da aka duba a ƙasa", standard: "ta amfani da dabarar (NIR - Red) / (NIR + Red)" },
    { id: "O6", condition: "Bayan tabbatarwa a ƙasa", action: "rubuta rahoton matakai mai shafi ɗaya don manomi", standard: "da hoton taswira, abin da aka samu, matakin gaba ga kowane wuri da wanda za a tuntuɓa, ba tare da shawarar maganin kwari daga taswira ba" }
  ],
  chapters: [
    {
      name: "Babi na 1: Karanta lafiyar amfanin gona",
      lessons: [
        {
          objectives: ["O1"],
          title: "Karanta taswirar lafiyar amfanin gona ta NDVI",
          minutes: 5,
          goal: "Karanta taswirar NDVI ta amfani da ma'aunin launinta da gano wuraren da ke da rauni da masu ƙarfi.",
          text: [
            "NDVI (Normalized Difference Vegetation Index) yana kwatanta hasken near-infrared (hasken da ido ba ya gani) da jan haske da shuke-shuke ke mayarwa. Ƙimominsa suna farawa daga -1 zuwa +1. FAO ta bayyana cewa ƙima mai yawa ta sama da sifili tana nuna tsirrai masu yawa da lafiya, yayin da ƙima ƙanana ko ƙasa da sifili ke nuna tsirrai kaɗan, ƙasa mara komai ko ruwa.",
            "A kan taswirar NDVI ta jirgi mara matuƙi, kowane ɗigo (pixel) yana samun launi daga ma'auni, sau da yawa ja don ƙima ƙanana zuwa kore don ƙima masu yawa. Koyaushe ku karanta makullin taswirar (legend): launuka suna da ma'ana ne a cikin wannan taswirar kaɗai. Gonar da ta yi ja duka a farkon damina wataƙila ƙananan shuke-shuke ne kawai da ƙasa mara komai.",
            "Ku nemi bambance-bambance a cikin gonar, ba launi kaɗai ba. Wuri mai ƙarancin ƙima a cikin gonar masara da take daidai a ko'ina ya cancanci a je a duba. Ku kwatanta da tsofaffin taswirorin gonar: wurin da ke ƙara girma mako bayan mako ya fi muhimmanci fiye da wanda bai canja ba."
          ],
          steps: ["Ku karanta makullin taswira: wane launi ne ƙasa, wane ne sama?", "Ku lura da amfanin gonar da matakin girmanta: ƙananan shuke-shuke suna nuna ƙasa sosai.", "Ku nemi wuraren da suka bambanta da sauran gonar.", "Ku kwatanta da tsohuwar taswira: wurin sabo ne ko yana ƙara girma?", "Ku yi alama a wuraren da za ku je ku duba."],
          words: [["NDVI", "ma'aunin tsirrai daga -1 zuwa +1; ƙima mai yawa yawanci tana nufin shuke-shuke kore masu yawa da lafiya."], ["Makullin taswira (legend)", "jerin da ke nuna abin da kowane launi a kan taswira yake nufi."], ["Matakin girma", "yadda amfanin gona ya girma, daga tsiro zuwa girbi."]],
          slides: [
            { title: "NDVI a layi ɗaya", bullets: ["Yana kwatanta hasken near-infrared da jan haske", "Daga -1 zuwa +1", "Mai yawa = kore mai yawa da lafiya; ƙanƙane = tsirrai kaɗan, ƙasa ko ruwa"] },
            { title: "Ku fara karanta makullin taswira", bullets: ["Launuka suna da ma'ana a cikin taswirar kaɗai", "Ƙananan shuke-shuke suna nuna ƙasa sosai"] },
            { title: "Ku nemi bambance-bambance", bullets: ["Wuraren da suka bambanta da sauran", "Sabbin wurare ko masu ƙara girma sun fi muhimmanci", "Ku yi alama a wuraren da za ku duba"] }
          ],
          sources: [FAO_EO],
          tryIt: "Ku nemi samfurin taswirar NDVI a intanet (ku nemi taswirar NDVI ta gonar masara) ko ku yi amfani da taku. Ku karanta makullin taswirar, ku yi alama a wurare biyu masu rauni da wuri ɗaya mai ƙarfi, sannan ku rubuta matakin girman da amfanin gonar zai iya kasancewa.",
          youCanNow: "karanta makullin taswirar NDVI da gano wuraren da ke da rauni da masu ƙarfi da suka cancanci a duba.",
          quickCheck: [
            { objective: "O1", q: "Me ƙimar NDVI mai yawa ta sama da sifili take nunawa?", options: ["Ƙasa mara komai", "Ruwa", "Jirgin da ya lalace", "Tsirrai masu yawa da lafiya"], answer: 3, why: "Ƙimar NDVI mai yawa tana nuna tsirrai masu yawa da lafiya; ƙima ƙanana suna nuna tsirrai kaɗan, ƙasa ko ruwa." },
            { objective: "O1", q: "Gonar masara tana kore daidai a ko'ina sai wuri ɗaya mai ƙarancin ƙima. Me za ku yi?", options: ["Ku yi alama a wurin don ku je ku duba, ku kwatanta shi da tsofaffin taswirori", "Ku ƙyale shi domin yawancin gonar kore ce", "Ku fesa magani a gonar duka", "Ku goge taswirar"], answer: 0, why: "Wuri mai ƙarancin ƙima a cikin gona da take daidai ya cancanci a duba, kuma tsofaffin taswirori suna nuna ko yana ƙara girma." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Gano alamun kwari, cuta da damuwa da wuri",
          minutes: 6,
          goal: "Gane alamun taswira da ke nuna matsalolin kwari, cuta, ruwa ko sinadaran abinci na shuka.",
          text: [
            "Matsaloli daban-daban suna barin siffofi daban-daban a kan taswira. Wuraren da suke farawa ƙanana kuma suna yaɗuwa waje a cikin makonni na iya nuna kwari ko cuta, kamar tsutsar Fall Armyworm a masara ko cututtukan ƙwayoyin cuta (virus) a rogo. Matsaloli a gefe ɗaya na iya fitowa daga gonar maƙwabci, hanya ko iska. Layuka madaidaita yawanci suna bin mutane ko injuna: layin da aka tsallake wajen sa taki, bututun ban ruwa da ya toshe, ko kuskuren injin shuka.",
            "Kusurwoyi da kwari masu ƙasa da danshi suna nuna ruwa ya taru da yawa; ƙasa mai tudu, mai yashi ko mai gangara tana nuna ƙarancin ruwa, musamman a hotunan zafi (thermal) da rana. Rawayar da ta bazu daidai a gonar duka na iya nuna ƙarancin sinadarin abinci na shuka kamar nitrogen, amma kuma na iya zama fari.",
            "Alama ishara ce, ba binciken ƙarshe ba. Cututtuka da kwari suna kama da juna idan aka gan su daga sama, kuma magungunansu sun bambanta sosai. Ana iya rubuta ganin tsutsar Fall Armyworm da manhajar FAMEWS ta FAO inda ake amfani da ita; ku tabbatar da duk wani kwaro ko cuta da ake zato tare da jami'in faɗakarwa ko asibitin shuka kafin ku ɗauki mataki."
          ],
          words: [["Alama (pattern)", "siffa da bazuwar matsala a kan taswira: wuri, gefe, layi, wuri mai ƙasa."], ["Fall Armyworm", "tsutsa mai cin masara da sauran amfanin gona; ta bazu a Afirka tun 2016."], ["Asibitin shuka (plant clinic)", "wurin da ma'aikata masu horo ke bincika matsalolin shuka da manoma suka kawo."]],
          slides: [
            { title: "Siffofi suna ba da labari", bullets: ["Wuraren da ke yaɗuwa: kwari ko cuta?", "Gefe ɗaya: maƙwabci, hanya ko iska?", "Layuka madaidaita: injuna, taki ko ban ruwa"] },
            { title: "Ruwa da sinadaran abinci", bullets: ["Kwari masu ƙasa da danshi: ruwa ya taru", "Tudu mai yashi da gangara: ƙarancin ruwa", "Rawaya daidai a ko'ina: sinadaran abinci ko fari"] },
            { title: "Ishara ce, ba binciken ƙarshe ba", bullets: ["Kwari da cututtuka suna kama da juna daga sama", "Magungunansu sun bambanta sosai", "Ku tabbatar da jami'in faɗakarwa ko asibitin shuka"] }
          ],
          sources: [FAO_FAMEWS],
          tryIt: "Ku zana ƙananan hotuna huɗu na gona: ɗaya da wuri mai yaɗuwa, ɗaya da matsala a gefe, ɗaya da layuka, ɗaya da kusurwa mai ƙasa da danshi. A ƙarƙashin kowanne, ku rubuta abubuwa biyu da za su iya jawo shi.",
          youCanNow: "gane alamun matsala da aka saba gani a taswirar amfanin gona da lissafa abubuwan da za su iya jawo su don a duba.",
          quickCheck: [
            { objective: "O2", q: "Me wurin da yake farawa ƙarami kuma yana yaɗuwa waje a cikin makonni zai iya nunawa?", options: ["Kuskuren injin shuka", "Kwari ko cuta", "Hanya", "Magudanar ruwa da ta toshe kawai"], answer: 1, why: "Wuraren da ke yaɗuwa waje a cikin makonni na iya nuna kwari ko cuta kamar Fall Armyworm ko cututtukan rogo." },
            { objective: "O2", q: "Taswirar tana nuna amfanin gona mai rauni a ɓangaren gonar mai tudu da yashi a rana mai zafi. Me za ku fara zato?", options: ["Ruwa ya taru da yawa", "Taki ya yi yawa", "Ƙarancin ruwa", "Layin shuka da aka tsallake"], answer: 2, why: "Ƙasa mai tudu, mai yashi ko mai gangara sau da yawa tana nuna ƙarancin ruwa, musamman a hotunan zafi na rana." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Tabbatarwa a ƙasa: duba wuraren da ƙafa",
          minutes: 5,
          goal: "Ziyarci kowane wuri mai matsala da shiri, ku rubuta abin da kuka samu.",
          text: [
            "Tabbatarwa a ƙasa (ground-truthing) yana nufin zuwa ainihin wurin da ke kan taswira don ganin abin da yake can da gaske. Ku sa taswirar a wayarku mai GPS (manhajojin taswira da GIS kyauta da yawa suna iya nuna inda kuke a kan taswirar jirgi), ko ku rubuta coordinates na kowane wuri.",
            "A kowane wuri, ku duba shuke-shuken, ganyaye (sama da ƙasansu), kara da saiwoyi, ƙasa da danshinta, da ƙwari. Ku kwatanta da shuke-shuke masu lafiya 'yan mitoci daga can a wuri mai ƙarfi. Ku ɗauki hotuna masu kyau da gajerun bayanai.",
            "Ku rubuta abin da kuka samu a hanya ɗaya kowane lokaci: lambar wuri, coordinates, amfanin gona da matakin girmansa, abin da kuka gani, abin da ake zato ya jawo shi, yadda kuka tabbata, da lambobin hotuna. Rubuce-rubuce masu kyau suna sauƙaƙa karanta taswira ta gaba, kuma suna taimaka wa ƙwararren da zai tabbatar da dalilin."
          ],
          steps: ["Ku ba kowane wuri lamba ku rubuta coordinates ɗinsa.", "Ku tafi wurin ta amfani da taswirar GPS a wayarku.", "Ku duba shuke-shuke, ganyaye, kara, saiwoyi, ƙasa, danshi da ƙwari.", "Ku kwatanta da wuri mai lafiya kusa da shi.", "Ku rubuta wuri, coordinates, abin da kuka gani, abin da ake zato, yadda kuka tabbata, lambobin hotuna."],
          words: [["Tabbatarwa a ƙasa (ground-truthing)", "duba a ƙasa abin da taswira ko hoto yake nunawa."], ["Coordinates", "lambobin latitude da longitude (layukan faɗi da tsawon duniya) da ke nuna ainihin wuri."]],
          slides: [
            { title: "Ku je ainihin wurin", bullets: ["Taswira mai GPS a wayarku", "Ko ku rubuta coordinates na kowane wuri"] },
            { title: "Ku duba sosai", bullets: ["Ganyaye sama da ƙasa, kara, saiwoyi", "Ƙasa da danshi, ƙwari", "Ku kwatanta da wuri mai lafiya kusa"] },
            { title: "Ku rubuta a hanya ɗaya kowane lokaci", bullets: ["Wuri, coordinates, amfanin gona da matakin girma", "Abin da kuka gani, abin da ake zato, yadda kuka tabbata", "Lambobin hotuna"] }
          ],
          tryIt: "Ku yi fom ɗin tabbatarwa a ƙasa (a takarda ko a spreadsheet na waya) mai waɗannan ginshiƙai: wuri, coordinates, amfanin gona da matakin girma, abin da na gani, abin da ake zato, yadda na tabbata, hotuna. Ku cike layi ɗaya don wuri na gaske ko na misali.",
          youCanNow: "shirya da gudanar da ziyarar tabbatarwa a ƙasa da rubuta abin da aka samu a fom mai sarari.",
          quickCheck: [
            { objective: "O3", q: "Ta yaya za ku sami ainihin wurin da ke kan taswira idan kuna cikin gona?", options: ["Ku yi hasashe daga launin amfanin gona", "Ku tambayi maƙwabci", "Ku sa taswirar a waya mai GPS, ko ku rubuta coordinates na wurin", "Ku yi ta tafiya har sai shuke-shuke sun yi muni"], answer: 2, why: "Wayar da ke nuna inda kuke a kan taswirar jirgi, ko coordinates na wurin, suna kai ku ainihin wurin." },
            { objective: "O3", q: "Kun isa wuri na 2 kun sami masara tana yaushi. Me za ku rubuta?", options: ["\"Shuke-shuke marasa kyau\" kawai", "Babu komai; za ku tuna", "Hoto ba tare da bayani ba", "Lambar wuri, coordinates, matakin girma, abin da kuka gani, abin da ake zato, yadda kuka tabbata da lambobin hotuna"], answer: 3, why: "Rubuta bayanai iri ɗaya kowane lokaci yana sa a iya kwatanta rubuce-rubuce, kuma yana taimaka wa ƙwararre ya tabbatar da dalilin." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Karanta lafiyar amfanin gona",
        questions: [
          { objective: "O1", q: "Taswirar NDVI ta wata gona ta yi ja kusan duka a farkon damina. Mafi yiwuwar dalili shi ne:", options: ["Jirgin ya lalace", "Ƙananan shuke-shuke da ƙasa mara komai mai yawa", "Komai ya mutu", "An yi ruwan sama"], answer: 1, why: "Ƙananan shuke-shuke ba sa rufe ƙasa sosai, don haka ƙasa tana rage ƙimomin." },
          { objective: "O1", q: "Wane wuri ya kamata ku fara zuwa?", options: ["Wurin da yake daidai da na watan da ya gabata", "Wurin da ya fi kore da ƙarfi", "Wuri mai ƙarancin ƙima da ya ƙara girma tun taswirar da ta gabata", "Gefen gona mai ciyawa"], answer: 2, why: "Wurin da ke ƙara girma yana nuna matsalar da ke aiki kuma tana yaɗuwa." },
          { objective: "O2", q: "Layuka madaidaita na amfanin gona mai rauni a gona yawanci suna nuna:", options: ["Injuna, taki ko layukan ban ruwa", "Ƙwayar cuta (virus) da ke yaɗuwa daga shuka ɗaya", "Iska daga gefe ɗaya", "Babu komai"], answer: 0, why: "Layuka madaidaita suna bin yadda mutane da injuna ke aiki a gona." },
          { objective: "O2", q: "Taswirar jirgi mara matuƙi tana nuna sosai cewa akwai cuta. Kafin ku fesa magani, ya kamata ku:", options: ["Fesa maganin da ya fi ƙarfi", "Saka taswirar a intanet", "Fesa gonar duka", "Tabbatar da dalilin tare da jami'in faɗakarwa ko asibitin shuka"], answer: 3, why: "Kwari da cututtuka suna kama da juna daga sama kuma suna buƙatar magunguna daban-daban." },
          { objective: "O3", q: "Me yasa za ku kwatanta wuri mai rauni da shuke-shuke masu lafiya 'yan mitoci daga can?", options: ["Don ganin abin da ya bambanta", "Don ajiye batir", "Domin doka ta ce haka", "Don samun sabis na waya mafi kyau"], answer: 0, why: "Kwatanta su gefe da gefe yana nuna abin da ke damun shuke-shuke masu rauni." }
        ]
      }
    },
    {
      name: "Babi na 2: Sarrafa bayanan jirgi mara matuƙi",
      lessons: [
        {
          objectives: ["O4"],
          title: "Haɗa hotuna su zama taswira",
          minutes: 6,
          goal: "Mayar da hotunan jirgi da ke shiga juna zuwa taswirar orthomosaic guda ɗaya.",
          text: [
            "Manhajar haɗa hotuna tana nemo abubuwan da hotuna masu shiga juna suke da su iri ɗaya, ta gano inda aka ɗauki kowanne, sannan ta gina hoto ɗaya mai daidaiton taswira da ake kira orthomosaic. Tana kuma iya yin taswirar tsayi (elevation model), wato tsayin ƙasa da na amfanin gona.",
            "Akwai zaɓuɓɓuka kyauta. OpenDroneMap manhaja ce kyauta kuma buɗaɗɗiya (open-source), kuma fuskarta ta WebODM tana barin ku ɗora hotuna ta burauzar intanet a kwamfutarku. Akwai kuma hidimomin intanet (cloud) na kuɗi da manhajojin kamfanin da ya yi jirgin; ku duba farashinsu na yanzu da inda suke ajiye bayananku.",
            "Sarrafawa yana buƙatar kwamfuta mai ƙarfi da lokaci: hotuna 'yan ɗari kaɗan na iya ɗaukar awa ɗaya ko fiye. Ku kwafi hotunan daga jirgin zuwa babban fayil (folder) mai sunan gona, filin da kwanan wata, ku ajiye kwafinsu, sannan ku sarrafa. Ku duba sakamakon: ramuka, wurare masu dushewa ko layukan da suka lanƙwasa suna nufin hotunan ba su shiga juna sosai ba ko ba su yi kyau ba."
          ],
          steps: ["Ku kwafi hotuna zuwa folder mai suna gona_fili_kwanan wata (misali Kitale_Block3_2026-11-04).", "Ku ajiye kwafin folder ɗin.", "Ku buɗe manhajar haɗa hotuna ku ƙirƙiri sabon aiki.", "Ku ƙara hotunan ku fara sarrafawa.", "Ku duba orthomosaic ɗin don ramuka, dushewa da layukan da suka lanƙwasa.", "Ku fitar da shi a matsayin GeoTIFF (hoton taswira da ke ɗauke da wurinsa)."],
          words: [["Orthomosaic", "babban hoto ɗaya mai daidaiton taswira da aka haɗa daga hotuna da yawa masu shiga juna."], ["GeoTIFF", "fayil ɗin hoto da ke ɗauke da wurinsa a duniya, don manhajar taswira ta sa shi a daidai wuri."], ["Taswirar tsayi (elevation model)", "taswirar tsayin ƙasa ko saman amfanin gona."]],
          slides: [
            { title: "Hotuna su zama taswira", bullets: ["Manhaja tana daidaita hotuna masu shiga juna", "Tana gina orthomosaic ɗaya", "Tana kuma iya gina taswirar tsayi"] },
            { title: "Kayan aiki kyauta da na kuɗi", bullets: ["OpenDroneMap / WebODM: kyauta, buɗaɗɗiya", "Hidimomin cloud na kuɗi da manhajojin kamfanin jirgi", "Ku duba farashi da inda ake ajiye bayananku"] },
            { title: "Kyawawan halaye", bullets: ["Folder mai suna gona_fili_kwanan wata", "Ku ajiye kwafi kafin sarrafawa", "Ku duba ramuka, dushewa, layuka masu lanƙwasa", "Ku fitar da shi a matsayin GeoTIFF"] }
          ],
          sources: [ODM],
          tryIt: "Ku sauke samfurin bayanan jirgi mara matuƙi kyauta (OpenDroneMap yana da hanyoyin haɗi zuwa samfurin bayanai) ko ku yi amfani da hotunanku. Ku sa wa folder suna ku ajiye kwafinsa, kuma idan kwamfutarku ta iya, ku sarrafa shi ya zama orthomosaic. Idan ba ta iya ba, ku rubuta kowane mataki da za ku bi.",
          youCanNow: "tsara hotunan jirgi mara matuƙi da haɗa su su zama taswirar orthomosaic da manhaja kyauta.",
          quickCheck: [
            { objective: "O4", q: "Bayan orthomosaic, me kuma manhajar haɗa hotuna za ta iya yi?", options: ["Taswirar tsayin ƙasa da na amfanin gona", "Takardar bayanin maganin kwari", "Hasashen yanayi", "Gwajin ƙasa"], answer: 0, why: "Manhajar haɗa hotuna tana kuma iya yin taswirar tsayi da ke nuna tsayin ƙasa da na amfanin gona." },
            { objective: "O4", q: "Yanzu kun sauka da hotuna 400. Me za ku yi kafin sarrafawa?", options: ["Ku goge masu dushewa daga jirgin kawai", "Ku kwafe su zuwa folder mai sunan gona, fili da kwanan wata, ku ajiye kwafinsu", "Ku sarrafa su kai tsaye daga katin jirgin", "Ku tura su ga manomi ta imel"], answer: 1, why: "Sa wa folder suna da ajiye kwafin hotuna kafin sarrafawa suna kare bayanan." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Yin taswirar NDVI a QGIS",
          minutes: 6,
          goal: "Lissafa da yi wa taswirar NDVI launi daga orthomosaic na multispectral a QGIS.",
          text: [
            "QGIS manhajar GIS ce kyauta kuma buɗaɗɗiya da gwamnatoci, jami'o'i da ƙungiyoyi masu zaman kansu (NGOs) ke amfani da ita a ko'ina a Afirka. Tana iya buɗe GeoTIFF ɗinku ta yi lissafi a kan bands ɗinsa.",
            "Idan orthomosaic ɗinku yana da band na ja (Red) da na near-infrared (NIR), ku yi amfani da Raster Calculator don lissafa NDVI = (NIR - Red) / (NIR + Red). Sannan ku yi wa sakamakon launi da colour ramp (jerin launuka, misali daga ja zuwa kore) ku saita iyakar ƙimomi don bambance-bambancen da ke cikin gonar su fito fili.",
            "Kyamarar launi kawai kuke da ita? Har yanzu kuna iya yin ma'aunin kore mara cikakken daidai daga bands na ja, kore da shuɗi, amma bai kai NDVI ba wajen amincewa; ku ɗauke shi a matsayin jagora kawai. Ku ƙara iyakar gona da wuraren da kuka duba a ƙasa a matsayin layers don taswirar ta nuna ainihin inda wuraren suke."
          ],
          steps: ["Ku buɗe QGIS ku ƙara GeoTIFF na orthomosaic ɗinku.", "Ku duba wane band ne ja, wane ne near-infrared.", "Ku buɗe Raster Calculator ku shigar da (NIR - Red) / (NIR + Red) ta amfani da waɗannan bands.", "Ku yi wa sabon layer launi da colour ramp daga ja zuwa kore.", "Ku ƙara iyakar gona da wuraren da kuka duba a ƙasa.", "Ku fitar da hoton taswirar don rahotonku."],
          words: [["GIS", "geographic information system (tsarin bayanan wurare): manhaja don yin taswira da nazarinta."], ["Band", "layin haske ɗaya a cikin hoto, kamar ja, kore, shuɗi ko near-infrared."], ["Raster", "hoto da aka yi da ɗigo-ɗigo (pixels), kowanne da ƙimarsa, kamar taswirar jirgi."], ["Layer", "rukunin bayanan taswira ɗaya, kamar iyakar gona ko wurare, da ake nunawa a kan wasu."]],
          slides: [
            { title: "QGIS", bullets: ["Manhajar GIS kyauta, buɗaɗɗiya", "Tana buɗe GeoTIFF ɗinku", "Tana lissafi a kan bands na hoto"] },
            { title: "Dabarar NDVI", bullets: ["NDVI = (NIR - Red) / (NIR + Red)", "Ku yi amfani da Raster Calculator", "Ku yi launi daga ja zuwa kore"] },
            { title: "Kyamarar launi kawai?", bullets: ["Ma'aunin kore mara cikakken daidai daga bands na RGB", "Bai kai NDVI ba wajen amincewa: jagora ne kawai"] },
            { title: "Ku kammala taswirar", bullets: ["Ku ƙara iyakar gona da wuraren da aka duba", "Ku fitar da hoto don rahoto"] }
          ],
          sources: [QGIS, FAO_EO],
          tryIt: "Ku saka QGIS (kyauta) ku buɗe orthomosaic ɗinku ko samfurin hoton multispectral. Ku lissafa NDVI da Raster Calculator, ku yi masa launi, ku yi alama a wurare uku a matsayin points.",
          youCanNow: "yin taswirar NDVI mai launi a QGIS da ƙara wurare da iyakokin gona a kanta.",
          quickCheck: [
            { objective: "O5", q: "Me Raster Calculator na QGIS zai iya yi?", options: ["Haɗa hotuna", "Tuƙa jirgin", "Aika rahoton", "Yin lissafi a kan bands na hoto, kamar lissafa NDVI"], answer: 3, why: "Raster Calculator yana lissafi a kan bands, kamar (NIR - Red) / (NIR + Red)." },
            { objective: "O5", q: "Taswirar NDVI ɗinku launi ɗaya ce duka. Me za ku canja?", options: ["Ku sake tashi da jirgin da dare", "Ku goge band na near-infrared", "Ku saita iyakar colour ramp don bambance-bambance a cikin gonar su fito fili", "Ku yi amfani da wata gona"], answer: 2, why: "Yin launi da colour ramp da saita iyakar ƙimomi suna sa bambance-bambance a cikin gonar su bayyana." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Rubuta rahoton matakai na gona",
          minutes: 5,
          goal: "Rubuta rahoto mai shafi ɗaya da ke faɗa wa manomi abin da aka samu da abin da zai yi a gaba.",
          text: [
            "Taswira kaɗai ba ta taimaka wa manomi mai yawan aiki. Gajeren rahoto yana mayar da ita zuwa mataki. Ku sa shi ya zama shafi ɗaya, da kalmomi masu sauƙi, a harshen da manomi ya fi so. Manoma da yawa za su karanta shi a waya mai sauƙi, don haka hoto da 'yan layuka sun fi dogon rubutu.",
            "Ku haɗa: gona, fili, kwanan wata da matakin girman amfanin gona; hoton taswira mai wurare masu lamba; ga kowane wuri, abin da kuka gani a ƙasa, abin da ake zato ya jawo shi da yadda kuka tabbata; matakin gaba (misali: sake shuka wuraren da babu tsiro, share magudanar ruwa, neman asibitin shuka ya tabbatar da cuta, duba layin ban ruwa); da wanda za a tuntuɓa.",
            "Kada ku taɓa ba da shawarar maganin kwari ko yawan maganin (dose) daga taswirar jirgi mara matuƙi. Ku tura manomi zuwa jami'in faɗakarwa, agrovet ko asibitin shuka don duk wata shawara kan sinadarai, da kuma zuwa takardar bayanin maganin (label) don amfani lafiya. Ku amince da lokacin da za a sake tashi da jirgin don ganin ko matakin ya yi aiki."
          ],
          steps: ["Kanun rahoto: gona, fili, kwanan wata, amfanin gona da matakin girma.", "Hoton taswira mai wurare masu lamba.", "Ga kowane wuri: abin da kuka gani, abin da ake zato, yadda kuka tabbata.", "Matakin gaba ga kowane wuri da wanda za a tuntuɓa.", "Ranar tashin jirgi na gaba don duba sakamako."],
          words: [["Rahoton matakai", "gajeren rahoto da ke faɗin abin da aka samu da abin da za a yi."], ["Agrovet", "shagon da ke sayar da kayan noma kamar iri, taki da magungunan dabbobi, sau da yawa tare da shawara."]],
          slides: [
            { title: "Taswira kaɗai ba ta isa ba", bullets: ["Shafi ɗaya, kalmomi masu sauƙi", "Harshen da manomi ya fi so", "Hoto da 'yan layuka"] },
            { title: "Abin da ke ciki", bullets: ["Gona, fili, kwanan wata, matakin girma", "Taswira mai wurare masu lamba", "Abin da aka samu, abin da ake zato, yadda aka tabbata, matakin gaba"] },
            { title: "Ku kasance lafiya da gaskiya", bullets: ["Babu maganin kwari ko dose daga taswira", "Ku tura zuwa jami'in faɗakarwa, agrovet ko asibitin shuka", "Ku amince da lokacin sake tashi da jirgi"] }
          ],
          tryIt: "Aikin ƙarshe: ta amfani da taswirarku da fom ɗin tabbatarwa a ƙasa, ku rubuta rahoton matakai mai shafi ɗaya don manomi: kanun rahoto, hoton taswira mai aƙalla wurare uku masu lamba, abin da aka samu da abin da ake zato ga kowanne, matakin gaba, waɗanda za a tuntuɓa da ranar tashin jirgi na gaba.",
          youCanNow: "mayar da bayanan jirgi mara matuƙi zuwa rahoton matakai mai shafi ɗaya a sarari da manomi zai iya amfani da shi.",
          quickCheck: [
            { objective: "O6", q: "Yaya tsawon rahoton matakai na gona ya kamata ya kasance?", options: ["Shafi goma", "Shafi ɗaya", "Taswira kawai ba tare da kalmomi ba", "Tsawo yadda zai yiwu"], answer: 1, why: "Rahoto mai shafi ɗaya da kalmomi masu sauƙi, da taswira da matakai na gaba, shi ne manomi mai yawan aiki zai iya amfani da shi." },
            { objective: "O6", q: "Taswirarku da binciken ƙasa suna nuna akwai cuta a wuri na 3. Wane mataki na gaba za ku rubuta?", options: ["A nemi asibitin shuka ko jami'in faɗakarwa su tabbatar da cutar", "A fesa maganin fungi mai ƙarfi da ninki biyu na dose", "A cire gonar duka", "A jira shekara ɗaya"], answer: 0, why: "Kada ku taɓa ba da shawarar magani ko dose daga taswira; ku tura manomi zuwa ƙwararre don ya fara tabbatarwa." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Sarrafa bayanan jirgi mara matuƙi",
        questions: [
          { objective: "O4", q: "Mene ne orthomosaic?", options: ["Hoto ɗaya kawai", "Wani nau'in jirgi mara matuƙi", "Hoto ɗaya mai daidaiton taswira da aka haɗa daga hotuna da yawa", "Kwaro"], answer: 2, why: "Manhajar haɗa hotuna tana gina taswira ɗaya daga hotuna masu shiga juna." },
          { objective: "O4", q: "Taswirar da kuka haɗa tana da ramuka da layuka masu lanƙwasa. Mafi yiwuwar dalili shi ne:", options: ["Hotunan ba su shiga juna sosai ba ko ba su yi kyau ba", "Batir ya yi yawa", "Wayar manomi", "Rana ta yi yawa a kan allo"], answer: 0, why: "Haɗa hotuna yana buƙatar hotuna masu kyau da yawa da ke shiga juna." },
          { objective: "O5", q: "Wace ce dabarar NDVI?", options: ["(Red + Blue) / 2", "NIR x Red", "Green - Blue", "(NIR - Red) / (NIR + Red)"], answer: 3, why: "NDVI yana kwatanta hasken near-infrared da jan haske." },
          { objective: "O5", q: "Mene ne QGIS?", options: ["Jirgi mara matuƙi na kuɗi", "Manhajar GIS kyauta, buɗaɗɗiya don taswira", "Maganin kwari", "Kamfanin sadarwar waya"], answer: 1, why: "QGIS manhaja ce kyauta da ake amfani da ita don yin taswira da nazarinta." },
          { objective: "O6", q: "A rahotonku, manomi ya tambayi wane maganin kwari zai fesa a wuri na 2. Ya kamata ku:", options: ["Yi hasashen ɗaya daga taswirar", "Tura shi zuwa jami'in faɗakarwa, agrovet ko asibitin shuka da kuma label ɗin maganin", "Faɗa masa ya fesa ninki biyu", "Yi shiru"], answer: 1, why: "Shawara kan sinadarai tana buƙatar tabbataccen bincike da shawarar ƙwararre." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Jirgi Mara Matuƙi don Sa Ido a Gona 3: Lafiyar Amfanin Gona, Kwari da Sarrafa Bayanai",
    questions: [
      { objective: "O1", q: "Ƙimomin NDVI suna farawa daga:", options: ["-100 zuwa 0", "-1 zuwa +1", "0 zuwa 100", "1 zuwa 10"], answer: 1, why: "NDVI ma'auni ne tsakanin -1 da +1." },
      { objective: "O1", q: "A kan taswirar NDVI, abu na farko da za ku karanta shi ne:", options: ["Girman fayil", "Makullin taswira (legend)", "Sunan jirgin", "Yanayi"], answer: 1, why: "Makullin taswira yana faɗin waɗanne launuka ne ƙima ƙanana da masu yawa." },
      { objective: "O1", q: "Wani wuri bai canja ba a taswirori uku. Wani sabon wuri yana yaɗuwa. Wanne ya fi muhimmanci?", options: ["Tsohon wurin", "Babu ɗaya", "Wurin da ke yaɗuwa", "Dukansu suna da gaggawa daidai"], answer: 2, why: "Wurin da ke yaɗuwa yana nuna matsalar da ke aiki." },
      { objective: "O2", q: "Amfanin gona mai rauni a gefe ɗaya kusa da gonar maƙwabci na iya fitowa daga:", options: ["Hotuna sun shiga juna da yawa", "Makullin taswira", "Batirin jirgi", "Kwari ko maganin feshi da iska ta kawo daga wannan gefen"], answer: 3, why: "Alamun gefe sau da yawa suna nuna wani abu da ke shigowa daga wajen gonar." },
      { objective: "O2", q: "Kwari masu ƙasa da danshi da amfanin gona mai rauni sun fi nuna:", options: ["Ruwa ya taru da yawa", "Rana ta yi yawa", "Girbi mai kyau", "Kyamarar da ta lalace"], answer: 0, why: "Ruwa yana taruwa a kwari kuma yana cutar da saiwoyi." },
      { objective: "O2", q: "Alamar da ke kan taswirar jirgi mara matuƙi ita ce:", options: ["Binciken ƙarshe", "Ishara da ke buƙatar dubawa a ƙasa", "Kwaro ne koyaushe", "Cuta ce koyaushe"], answer: 1, why: "Alamomi suna nuna inda za a duba; binciken ƙasa yana gano dalilin." },
      { objective: "O2", q: "An yi manhajar FAMEWS ta FAO don rubuta:", options: ["Ruwan sama", "Farashin kasuwa", "Ganin tsutsar Fall Armyworm", "Tashin jirage marasa matuƙi"], answer: 2, why: "FAMEWS shi ne Tsarin Sa Ido da Faɗakarwa da Wuri na FAO kan Fall Armyworm." },
      { objective: "O3", q: "Tabbatarwa a ƙasa (ground-truthing) tana nufin:", options: ["Tashi ƙasa-ƙasa", "Sayen sabuwar manhaja", "Goge ruwan tabarau na kyamara", "Duba a ƙasa abin da taswira take nunawa"], answer: 3, why: "Kuna ziyartar wurin don ganin abin da yake can da gaske." },
      { objective: "O3", q: "Lokacin binciken ƙasa ya kamata ku duba:", options: ["Ganyaye sama da ƙasa, kara, saiwoyi, ƙasa da ƙwari", "Saman ganye ɗaya kawai", "Sararin sama kawai", "Jirgin kawai"], answer: 0, why: "Cikakken bincike yana gano kwari, cuta da matsalolin ƙasa." },
      { objective: "O3", q: "Me yasa za ku rubuta abin da kuka samu a hanya ɗaya kowane lokaci?", options: ["Jirgin ne yake buƙatar haka", "Yana sa a iya kwatanta rubuce-rubuce kuma yana taimaka wa ƙwararru", "Don cike lokaci", "Yana sa hotuna su yi kyau"], answer: 1, why: "Rubuce-rubuce iri ɗaya suna taimakawa wajen kwatantawa da tabbatar da dalilai." },
      { objective: "O3", q: "Coordinates su ne:", options: ["Launuka a kan taswira", "Saurin jirgin", "Lambobin latitude da longitude na ainihin wuri", "Wani nau'in amfanin gona"], answer: 2, why: "Suna bar ku sake samun ainihin wurin." },
      { objective: "O4", q: "OpenDroneMap shi ne:", options: ["Sunan kamfanin jirgi", "Maganin kwari", "Tauraron ɗan adam (satellite)", "Manhaja kyauta, buɗaɗɗiya don haɗa hotunan jirgi"], answer: 3, why: "OpenDroneMap da WebODM suna mayar da hotuna zuwa taswira kyauta." },
      { objective: "O4", q: "Kafin sarrafa hotuna ya kamata ku:", options: ["Sa wa folder suna ku ajiye kwafinsa", "Goge rabin hotunan", "Canja sunan kowane hoto da hannu", "Kashe kwamfutar"], answer: 0, why: "Suna mai kyau da ajiyar kwafi suna hana bayanai su ɓace." },
      { objective: "O5", q: "GeoTIFF shi ne:", options: ["Tsarin bidiyo", "Hoto da ke ɗauke da wurinsa a duniya", "Wani sashe na jirgi", "Saƙon tes"], answer: 1, why: "Manhajar taswira tana amfani da wurin da ke cikinsa don sa shi a daidai wuri." },
      { objective: "O5", q: "A QGIS, ana lissafa NDVI da:", options: ["Kayan bugawa (print)", "Maɓallin imel", "Raster Calculator", "Maɓallin ƙara sauti"], answer: 2, why: "Raster Calculator yana lissafi a kan bands na hoto." },
      { objective: "O5", q: "Da kyamarar launi kawai, ma'aunin kore shi ne:", options: ["Daidai yake da NDVI", "Ba zai yiwu ba", "Ya fi NDVI kyau", "Jagora mara cikakken daidai, bai kai NDVI ba wajen amincewa"], answer: 3, why: "Ma'aunan RGB ba su da near-infrared, don haka jagora ne kawai." },
      { objective: "O5", q: "Layer a GIS shi ne:", options: ["Rukunin bayanan taswira ɗaya da ake nunawa a kan wasu", "Batirin jirgi", "Cutar amfanin gona", "Takardar shari'a"], answer: 0, why: "Iyakoki, wurare (points) da hotuna kowanne layer ne." },
      { objective: "O6", q: "Rahoton matakai na gona mai kyau shi ne:", options: ["Shafuka ashirin na lambobi", "Shafi ɗaya, kalmomi masu sauƙi, da taswira da matakai na gaba", "Hotunan da ba a sarrafa ba kawai", "Dabarar NDVI kawai"], answer: 1, why: "Manoma masu yawan aiki suna buƙatar gajeren shiri a sarari." },
      { objective: "O6", q: "Wanne ne BAI kamata ya kasance a rahotonku ba?", options: ["Kwanan wata da matakin girman amfanin gona", "Wurare masu lamba", "Maganin kwari da dose da aka zaɓa daga taswira kaɗai", "Wanda za a tuntuɓa"], answer: 2, why: "Shawara kan sinadarai tana buƙatar tabbataccen bincike daga ƙwararre." },
      { objective: "O6", q: "Me yasa za a amince da ranar tashin jirgi na gaba?", options: ["Don a yi amfani da batura", "Domin doka ta ce kowane mako", "Don a sayar da ƙarin tashin jirgi", "Don ganin ko matakin ya yi aiki"], answer: 3, why: "Taswirar biyo baya tana nuna ko an magance matsalar." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 1, 3, 5, 7, 8, 11, 14, 17, 18] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe na aikin ku sake dubawa.",
    criteria: [
      { name: "Taswirar lafiyar amfanin gona", objective: "O5", notYet: "Babu taswira, ko babu makullin taswira da iyakar gona.", meets: "Taswirar NDVI ko ta launi mai makullin taswira, iyakar launuka da ke nuna bambance-bambance, da iyakar gona.", exceeds: "Tana ambaton dabarar NDVI ko ma'aunin da aka yi amfani da shi da iyakokinsa." },
      { name: "Wurare masu matsala", objective: "O1", notYet: "Wurare ƙasa da uku, ko an zaɓi wurare ta launi kaɗai.", meets: "Aƙalla wurare uku masu lamba bisa bambance-bambance a cikin gonar.", exceeds: "Tana kwatanta wuraren da tsohuwar taswirar wannan gonar." },
      { name: "Shirin tabbatarwa a ƙasa", objective: "O3", notYet: "Babu shiri, ko \"a je a duba\" kawai.", meets: "Ga kowane wuri, abin da za a nema, da coordinates da yadda za a rubuta abin da aka samu.", exceeds: "Tana ambaton abubuwan da ake zato za a duba a kowane wuri daga alamarsa a taswira." },
      { name: "Rahoton matakai", objective: "O6", notYet: "Ya wuce shafi ɗaya, ko babu matakai na gaba.", meets: "Shafi ɗaya da taswira, abin da aka samu, abin da ake zato, yadda aka tabbata, matakin gaba ga kowane wuri da wanda za a tuntuɓa.", exceeds: "An rubuta shi a harshen manomi kuma an amince da lokacin sake tashi da jirgi." },
      { name: "Shawara mai aminci", objective: "O2", notYet: "Yana ba da shawarar maganin kwari ko dose daga taswira.", meets: "Yana ɗaukar alamomi a matsayin ishara kuma yana tura tambayoyin sinadarai zuwa jami'in faɗakarwa, agrovet ko asibitin shuka.", exceeds: "Yana bayyana wa manomi dalilin da yasa alamar take buƙatar tabbatarwa." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka sami \"Ya cika\" ko \"Ya wuce\" a kowane layi na rubric",
      "Masu koyo da suka ce sun ba wa manomi rahoton matakai na gona cikin kwanaki 60 (binciken biyo baya)",
      "Manoma da suka ce sun ɗauki mataki bisa rahoto kuma sun tuntuɓi ƙwararre kafin fesa magani",
      "Masu koyo da suka ci gaba zuwa Kwas na 4 na jerin jirgi mara matuƙi"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta da aka saka QGIS da OpenDroneMap (WebODM) kyauta a cikinta",
      "Bayanan jirgi mara matuƙi daga gona ta gaske, ko samfurin bayanai kyauta",
      "Waya mai GPS da manhajar taswira don dubawa a ƙasa",
      "Kusan minti 60 gaba ɗaya, a gajerun zama, da lokacin sarrafa bayanai da lokacin rubuta rahoton"
    ],
    facilitatorNotes: [
      "Ku yi gwajin farko tare, sannan ku sarrafa samfurin bayanai ɗaya da kowa zai yi amfani da shi kafin aji, domin haɗa hotuna na iya ɗaukar awa ɗaya ko fiye.",
      "Ku yi matakin NDVI kai tsaye a QGIS don masu koyo su ga Raster Calculator da colour ramp.",
      "Idan zai yiwu, ku zagaya gona ta gaske don ku tabbatar da wurare biyu a ƙasa tare.",
      "Kada ku taɓa bari masu koyo su ba da shawarar maganin kwari ko dose daga taswira; ku kawo jami'in faɗakarwa ko asibitin shuka don bincike.",
      "Ku ba da maki ga rahoton da rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
