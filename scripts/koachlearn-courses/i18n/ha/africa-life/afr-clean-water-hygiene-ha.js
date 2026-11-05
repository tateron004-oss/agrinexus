"use strict";

// Koach Learn course, Hausa (ha) translation of africa-life/afr-clean-water-hygiene.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const WHO_WATER = { name: "Hukumar Lafiya ta Duniya (WHO): Takardar bayani kan ruwan sha", url: "https://www.who.int/news-room/fact-sheets/detail/drinking-water" };
const CDC_SAFE_WATER = { name: "Cibiyar Kula da Cututtuka ta Amurka (CDC): Yadda ake tsabtace ruwa (tafasa, barin ruwa ya kwanta da tacewa, kashe ƙwayoyin cuta)", url: "https://www.cdc.gov/healthywater/emergency/making-water-safe.html" };
const CDC_HANDS = { name: "CDC: Game da wanke hannu (muhimman lokuta da matakai)", url: "https://www.cdc.gov/clean-hands/about/index.html" };
const JMP_SANITATION = { name: "Shirin Haɗin Gwiwa na WHO da UNICEF (JMP): Matakan bandaki da tsaftar muhalli", url: "https://washdata.org/monitoring/sanitation" };
const WHO_DIARRHOEA = { name: "Hukumar Lafiya ta Duniya (WHO): Takardar bayani kan cututtukan gudawa", url: "https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease" };
const WHO_CHOLERA = { name: "Hukumar Lafiya ta Duniya (WHO): Takardar bayani kan kwalara", url: "https://www.who.int/news-room/fact-sheets/detail/cholera" };

module.exports = {
  id: "afr-clean-water-hygiene-ha",
  lang: "ha",
  translationOf: "afr-clean-water-hygiene",
  category: "Africa: Life and Work",
  name: "Ruwa Mai Tsabta, Bandaki da Tsafta a Gida",
  skills: "Zaɓar majiyar ruwa mafi aminci, Tsabtace ruwan sha, Ajiye ruwa lafiya, Wanke hannu da sabulu, Kiyaye bandaki da kashin yara lafiya, Gane alamun haɗari na gudawa da kwalara",
  outcome: "kiyaye ruwan iyalinku, hannayensu da bandakinku lafiya: zaɓar ruwa mafi aminci, tsabtace shi a gida, ajiye shi a rufe, wanke hannu da sabulu a muhimman lokuta, zubar da kashi lafiya, da sanin alamun gargaɗi da ke nufin ku je asibiti yanzu.",
  about: [
    "Ƙwayoyin cuta a cikin ruwa, a hannu da kuma daga kashi suna kawo gudawa, kwalara da taifod. Gudawa tana cikin manyan abubuwan da ke kashe ƙananan yara, kuma ana iya hana yawancinta da ruwa mai tsabta, sabulu da bandaki mai tsabta. Wannan kwas na iyaye mata da maza ne, kakanni, masu kula da yara da matasa a garuruwa da ƙauyuka a Kenya, Najeriya, Ghana, DR Congo, Senegal, Masar da ko'ina a Afirka.",
    "Za ku kwatanta majiyoyin ruwa da ke kusa da ku, ku tsabtace ruwan sha ta hanyar tafasa shi ko da maganin chlorine, ku ajiye shi ta yadda zai kasance mai tsabta, ku shirya wurin wanke hannu da sabulu, ku kiyaye bandaki da kashin yara lafiya, kuma ku koyi alamun haɗari na gudawa da kwalara.",
    "Wannan kwas yana koyar da yadda ake hana cuta da lokacin neman taimako. Ba ya faɗin yadda ake magance cuta ko wane magani za a bayar: wannan aikin asibiti ne, ma'aikacin lafiya na unguwa da ma'aikatar lafiya ta ƙasarku. Kowane darasi yana ɗaukar kusan minti biyar, kuma yana ƙarewa da aikin \"Gwada yanzu\" a gida."
  ],
  finalTask: "Ku yi tsarin ruwa mai tsabta da tsafta na gidanku a shafi ɗaya: majiyar ruwanku mafi aminci da ta ajiya, yadda za ku tsabtace ruwan sha, yadda za ku ajiye shi ku zuba shi, inda wurin wanke hannunku yake da muhimman lokutan da iyalinku ke wanke hannu, yadda kuke kiyaye bandaki da kashin yara lafiya, da katin alamun haɗari mai suna da lambar wayar asibiti ko ma'aikacin lafiya na unguwa mafi kusa.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Iyaye mata da maza, kakanni, masu kula da yara da matasa a ko'ina a Afirka, a garuruwa, unguwannin marasa galihu da ƙauyuka. Da yawa suna ɗebo ruwa daga burtsatse (borehole), rijiya, kanti, kogi ko famfon jama'a, ko suna sayen ruwan leda (pure water) ko na jarka, kuma suna raba bandaki ko shadda da wasu.",
    startingPoint: "Sun san cewa ruwa mai datti yana iya sa mutane rashin lafiya, kuma sau da yawa suna tafasa ruwa don jarirai. Da yawa ba sa tsabtace dukkan ruwan sha, suna ajiye shi a buɗaɗɗun kwantena, suna tsoma kofi a ciki da hannu, suna wanke hannu ba tare da sabulu ba ko da ruwa kawai, kuma ba su da tabbas waɗanne alamun gudawa ne ke buƙatar asibiti nan take.",
    gap: "Gudawa, kwalara da taifod suna yaɗuwa ta ruwa marar tsabta, hannayen da ba a wanke ba da kashi, kuma suna kashe ƙananan yara da yawa. Iyalai suna buƙatar wasu ɗabi'u na yau da kullum, wato ruwa mai tsabta, sabulu a lokacin da ya dace da bandaki mai aminci, tare da sanin lokacin da za a je asibiti nan take, don kare 'ya'yansu.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; da yawa daga cikin masu koyo Turanci ba harshensu na farko ba ne",
      "Na'urori: waya mai sauƙi da data mai tsada; darussa suna aiki ba tare da intanet ba bayan an sauke su",
      "Kuɗi: kasafin kuɗi kaɗan; a yi amfani da hanyoyi masu araha (tafasa, maganin chlorine da ake sayarwa don ruwa, sabulu, wurin wanke hannu mai sauƙi)",
      "Lafiya: hana cuta da alamun gargaɗi kawai; babu yawan magani, magani ko gano cuta; masu koyo suna bin asibitinsu, ma'aikacin lafiya na unguwa da ma'aikatar lafiya",
      "Lokaci: darussa na minti 4 zuwa 6 da suka dace da aikin gida da sauran aiki"
    ],
    prerequisites: "Babu."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku majiyoyin ruwa da ke kusa da gidanku", action: "jera majiyoyin ruwa daga mafi aminci zuwa mafi haɗari da zaɓar ɗaya don sha", standard: "kuna ba da dalili ga kowanne kuma kuna ambaton majiyar ajiya" },
    { id: "O2", condition: "Idan aka ba ku ruwa daga majiyarku da abubuwan da kuke da su a gida", action: "tsabtace ruwan sha ta hanyar tafasa shi ko da maganin chlorine da ake sayarwa don ruwa", standard: "kuna bin kowane mataki, har da barin ruwa mai gurɓata ya kwanta ko tace shi da farko, da bin takardar bayanin maganin" },
    { id: "O3", condition: "Idan aka ba ku ruwan da aka tsabtace da kwantenan da ke gidanku", action: "ajiye ruwan sha da zuba shi ta yadda hannu da datti ba za su taɓa shi ba", standard: "kuna amfani da kwantena mai tsabta mai murfi, kuma kuna zubawa ko amfani da famfo, ba tsomawa ba" },
    { id: "O4", condition: "Idan aka ba ku sabulu ko toka da ruwa a gida", action: "wanke hannu da sabulu a muhimman lokuta da shirya wurin wanke hannu", standard: "kuna goge kowane sashe na hannu aƙalla daƙiƙa 20, kuma wurin yana kusa da bandaki da kicin" },
    { id: "O5", condition: "Idan aka ba ku bandakinku ko shaddarku da ƙananan yara a gida", action: "kiyaye bandaki mai tsabta da zubar da kashin yara lafiya", standard: "ba tare da barin kashi a fili ba, kuma ana amfani da murfi" },
    { id: "O6", condition: "Idan wani a iyali yana gudawa ko bayan gida mai ruwa", action: "gane alamun haɗari na ƙarancin ruwa a jiki da na kwalara da kai mutumin asibiti nan take", standard: "kuna ambaton aƙalla alamun haɗari huɗu da asibiti ko ma'aikacin lafiya na unguwa mafi kusa" }
  ],
  chapters: [
    {
      name: "Babi na 1: Ruwan sha mai aminci",
      lessons: [
        {
          title: "Zaɓar majiyar ruwa mafi aminci",
          objectives: ["O1"],
          minutes: 5,
          goal: "Jera majiyoyin ruwa da ke kusa da gidanku daga mafi aminci zuwa mafi haɗari.",
          text: [
            "Ruwa yana iya yin kama da mai tsabta amma yana ɗauke da ƙwayoyin cuta. Babban haɗari shi ne kashi (bayan gidan mutum ko na dabba) ya shiga cikin ruwa. WHO ta ce ruwa marar tsabta yana iya yaɗa gudawa, kwalara, zawo mai jini (dysentery), taifod, ciwon hanta A (hepatitis A) da shan inna (polio). Ruwan koguna da tafkuna yana iya ɗauke da tsutsotsin da ke kawo tsagaye (bilharzia ko schistosomiasis).",
            "Majiyoyin da suka fi aminci yawanci su ne ruwan famfo, burtsatse ko rijiya mai kariya da ke da murfi da famfon tuƙa, maɓuɓɓuga mai kariya, da ruwan sama da aka tara a tanki mai tsabta mai murfi. Majiyoyin da suka fi haɗari su ne buɗaɗɗun rijiyoyi, maɓuɓɓugan da ba su da kariya, koguna, kududdufai, tafkuna da madatsun ruwa, inda mutane da dabbobi ke wanka, iyo da sha. Ruwan kanti, na tanka ko na leda yana da aminci ne kawai gwargwadon inda ya fito da yadda aka sarrafa shi.",
            "Ku duba kowace majiya da ke kusa da ku. Tana da murfi? Akwai bandaki, shadda ko garken dabbobi kusa da ita, ko a sama da ita? Mutane suna wanke tufafi a can, ko suna barin dabbobi su sha a can? Ku zaɓi mafi aminci don sha da girki, da ta ajiya don lokacin da ta bushe ko ta lalace. Ko ruwa mai kyau yana iya ƙazanta a hanyar zuwa gida, don haka za ku ci gaba da tsabtace shi da ajiye shi da kyau (darussa na gaba)."
          ],
          steps: ["Ku rubuta kowace majiyar ruwa da iyalinku ke amfani da ita.", "Ga kowacce ku tambaya: tana da murfi da kariya, kuma tana nesa da bandaki da dabbobi?", "Ku jera su daga mafi aminci zuwa mafi haɗari.", "Ku zaɓi ɗaya don sha da girki, da ta ajiya.", "Ku yi amfani da ruwa mai haɗari don wanke-wanke kawai, kuma ku tsabtace duk ruwan da kuke sha."],
          words: [["Kashi", "bayan gidan mutum ko na dabba (najasa)."], ["Majiya mai kariya", "rijiya, burtsatse ko maɓuɓɓuga da aka rufe aka toshe don kada datti da ruwan ambaliya su shiga."], ["Tsagaye (bilharzia ko schistosomiasis)", "cuta daga ƙananan tsutsotsi da ke cikin wasu koguna da tafkuna."]],
          slides: [
            { title: "Ruwa mai kyan gani ba lallai mai aminci ba ne", bullets: ["Kashi a cikin ruwa yana yaɗa ƙwayoyin cuta", "Gudawa, kwalara, taifod, ciwon hanta A", "Koguna da tafkuna suna iya ɗauke da tsutsotsin tsagaye"] },
            { title: "Yawanci sun fi aminci", bullets: ["Ruwan famfo", "Burtsatse ko rijiya mai kariya, mai murfi da famfon tuƙa", "Maɓuɓɓuga mai kariya; ruwan sama a tanki mai tsabta mai murfi"] },
            { title: "Yawanci sun fi haɗari", bullets: ["Buɗaɗɗun rijiyoyi da maɓuɓɓugan da ba su da kariya", "Koguna, kududdufai, tafkuna da madatsun ruwa", "Kanti, tanka, ruwan leda: aminci gwargwadon majiyarsu"] },
            { title: "Ku duba kowace majiya", bullets: ["Tana da murfi? Tana nesa da bandaki da dabbobi?", "Ku zaɓi mafi aminci don sha, da ta ajiya", "Ku ci gaba da tsabtace shi da ajiye shi da kyau"] }
          ],
          sources: [WHO_WATER],
          tryIt: "Ku rubuta kowace majiyar ruwa da iyalinku ke amfani da ita. Ku yi wa kowacce alama: ta fi aminci ko ta fi haɗari, da dalili. Ku zagaye wadda za ku yi amfani da ita don sha da ta ajiya.",
          youCanNow: "kwatanta majiyoyin ruwa da ke kusa da ku da zaɓar mafi aminci don sha, tare da ta ajiya.",
          quickCheck: [
            { objective: "O1", q: "Wace majiya ce yawanci ta fi aminci don sha?", options: ["Burtsatse mai kariya, mai murfi da famfon tuƙa", "Kogin da shanu ke sha", "Buɗaɗɗen kududdufi", "Madatsar ruwa inda mutane ke wanke tufafi"], answer: 0, why: "Majiya mai kariya da murfi tana hana kashi da ruwan ambaliya shiga." },
            { objective: "O1", q: "Ruwan kogi yana da kyan gani. Mene ne gaskiya?", options: ["Ruwa mai kyan gani koyaushe yana da aminci", "Ruwa mai kyan gani yana iya ɗauke da ƙwayoyin cuta, don haka ku tsabtace shi kafin ku sha", "Ruwa mai ruwan ƙasa ne kaɗai ke da haɗari", "Koguna suna tsabtace kansu"], answer: 1, why: "Ba a ganin ƙwayoyin cuta; ruwa mai kyan gani yana iya ɗauke da su." }
          ]
        },
        {
          title: "Tsabtace ruwan sha a gida",
          objectives: ["O2"],
          minutes: 6,
          goal: "Tsabtace ruwan sha ta hanyar tafasa shi ko da maganin chlorine da ake sayarwa don ruwa.",
          text: [
            "Idan ruwanku bai tabbata yana da aminci ba, ku tsabtace shi kafin ku sha, kafin ku haɗa abincin jariri ko madarar gwangwani, da kafin ku goge haƙora. Hanyoyi biyu da aka saba su ne tafasa da chlorine. Dukansu sun fi aiki a kan ruwa mai kyan gani.",
            "Idan ruwan yana da gurɓata (dagwalo), da farko ku bar shi ya kwanta a kwantena mai tsabta don datti ya nutse ƙasa, sannan ku zuba ruwan da ke sama ta tsumma mai tsabta da aka ninka sau da yawa. Barin ruwa ya kwanta da tacewa da tsumma ba sa sa ruwa ya zama mai aminci su kaɗai; suna shirya shi ne don tafasa ko chlorine.",
            "Tafasa: ku sa ruwan ya tafasa sosai, da manyan kumfa, na minti 1. A tsaunuka masu tsawo, sama da kusan mita 2,000, ku tafasa na minti 3. Ku bar shi ya huce a rufe, a cikin tukunyar ko a kwantena mai tsabta.",
            "Chlorine: ku yi amfani da maganin chlorine da ake sayarwa don ruwan sha (ruwa, ƙwaya ko leda) ko wanda ma'aikacin lafiyarku ya ba ku. Ku bi takardar bayanin maganin daidai: nawa za a sa a cikin ruwa nawa, da tsawon lokacin jira kafin a sha (sau da yawa aƙalla minti 30). Ruwa mai gurɓata yana iya buƙatar fiye da haka; takardar za ta faɗa muku. Ku ajiye chlorine nesa da yara. Idan ba ku da takardar bayani ko ba ku da tabbas, ku tambayi ma'aikacin lafiya na unguwa ko asibiti. WHO tana gwada wasu magungunan tsabtace ruwa na gida; ma'aikatar lafiyarku za ta iya faɗin waɗanda aka amince da su a inda kuke zaune."
          ],
          steps: ["Idan ruwan yana da gurɓata: ku bar shi ya kwanta, sannan ku zuba shi ta tsumma mai tsabta da aka ninka.", "Tafasa: tafasa sosai na minti 1 (minti 3 a tsaunuka masu tsawo), sannan ku bar shi ya huce a rufe.", "Ko chlorine: ku sa maganin kamar yadda takardarsa ta ce, ku juya, ku jira lokacin da ke kan takardar.", "Ku zuba shi a kwantena mai tsabta mai murfi.", "Ku ajiye magungunan chlorine inda yara ba za su kai ba."],
          words: [["Tafasa sosai", "ruwa yana tafasa da ƙarfi da manyan kumfa da ba sa tsayawa idan kun juya shi."], ["Maganin chlorine", "ruwa, ƙwaya ko leda da ake sayarwa don kashe ƙwayoyin cuta a ruwan sha."], ["Kwanta", "barin ruwa a tsaye ba motsi don datti ya nutse ƙasa."]],
          slides: [
            { title: "Lokacin tsabtace ruwa", bullets: ["Kafin a sha", "Kafin a haɗa abincin jariri ko madarar gwangwani", "Kafin a goge haƙora"] },
            { title: "Ruwa mai gurɓata da farko", bullets: ["Ku bar shi ya kwanta", "Ku zuba shi ta tsumma mai tsabta da aka ninka", "Wannan yana shirya shi ne; bai zama mai aminci ba tukuna"] },
            { title: "Tafasa", bullets: ["Tafasa sosai na minti 1", "Minti 3 sama da kusan mita 2,000", "Ku bar shi ya huce a rufe"] },
            { title: "Chlorine", bullets: ["Maganin da ake sayarwa don ruwan sha", "Ku bi takardar bayani: yawan maganin da lokacin jira", "Ba ku da tabbas? Ku tambayi ma'aikacin lafiya; ku ajiye nesa da yara"] }
          ],
          sources: [CDC_SAFE_WATER, WHO_WATER],
          tryIt: "Ku zaɓi hanya ɗaya, tafasa ko maganin chlorine, ku tsabtace kwantena ɗaya na ruwan sha yau, mataki-mataki. Ku rubuta kowane mataki da kuka yi.",
          youCanNow: "tsabtace ruwa mai gurɓata ko wanda ba ku amince da shi ba don sha, ta hanyar barin shi ya kwanta, sannan tafasa shi ko amfani da maganin chlorine kamar yadda takardarsa ta ce.",
          quickCheck: [
            { objective: "O2", q: "Ruwanku yana da gurɓata. Me za ku yi kafin ku tafasa shi ko ku sa chlorine?", options: ["Ku sa sukari", "Ku sha shi da sauri", "Ku bar shi ya kwanta, ku zuba shi ta tsumma mai tsabta da aka ninka", "Babu komai; ruwa mai gurɓata ba laifi"], answer: 2, why: "Barin ruwa ya kwanta da tacewa suna cire datti don tafasa ko chlorine su fi aiki." },
            { objective: "O2", q: "Na tsawon wane lokaci za ku bar ruwa yana tafasa sosai a wuri na yau da kullum (ba tsauni ba)?", options: ["Har sai ya ɗan yi zafi", "Daƙiƙa 5", "Har sai rabinsa ya ƙare", "Minti 1"], answer: 3, why: "CDC tana ba da shawarar tafasa sosai na minti 1, ko minti 3 a tsaunuka masu tsawo." }
          ]
        },
        {
          title: "Ajiye ruwa da zuba shi lafiya",
          objectives: ["O3"],
          minutes: 4,
          goal: "Ajiye ruwan sha da zuba shi ta yadda hannu da datti ba za su iya taɓa shi ba.",
          text: [
            "Ruwa mai tsabta yana iya sake ƙazanta a cikin gida. Ƙwayoyin cuta suna shiga idan aka tsoma hannu ko kofi a cikin kwantena, idan aka bar shi a buɗe, ko idan kwantenan kansa yana da datti.",
            "Ku ajiye ruwan sha a kwantena mai tsabta mai murfi, wanda ya fi kyau idan yana da ƙunƙuntaccen baki ko famfo. Ku ɗaga shi daga ƙasa, nesa da dabbobi. Ku zuba ruwan ko ku yi amfani da famfon; kada ku taɓa tsoma kofi ko hannunku a ciki. Ku riƙa wanke kwantenan da murfinsa da sabulu da ruwa mai tsabta, sannan ku kife shi ya bushe.",
            "Rufe ruwa yana kuma hana sauro yin ƙwai a ciki. Ku raba ruwan sha da ruwan wanke-wanke. Iyali a Kumasi, Lubumbashi ko Kano za su iya bin doka ɗaya: kwantena ɗaya mai tsabta mai murfi na ruwan sha a kowane gida, kuma babu mai tsomawa."
          ],
          steps: ["Ku yi amfani da kwantena mai tsabta mai murfi, ƙunƙuntaccen baki ko famfo.", "Ku ɗaga shi daga ƙasa, nesa da dabbobi.", "Ku zuba ko ku yi amfani da famfo: babu tsoma kofi ko hannu.", "Ku riƙa wanke kwantenan da sabulu da ruwa mai tsabta.", "Ku raba ruwan sha da ruwan wanke-wanke."],
          words: [["Kwantena", "jarka, bokiti, tukunya ko kwalba da ke ɗauke da ruwa."], ["Tsomawa", "sa kofi ko hannu cikin ruwa don ɗebo wasu."]],
          slides: [
            { title: "Ruwa mai tsabta yana iya sake ƙazanta", bullets: ["Tsoma hannu ko kofi", "Buɗaɗɗun kwantena", "Kwantena masu datti"] },
            { title: "Ku ajiye shi da kyau", bullets: ["Kwantena mai tsabta mai murfi, ƙunƙuntaccen baki ko famfo", "A ɗaga daga ƙasa, nesa da dabbobi", "A raba da ruwan wanke-wanke"] },
            { title: "Ku zuba shi da kyau", bullets: ["Ku zuba, ko ku yi amfani da famfo", "Kada ku taɓa tsoma kofi ko hannu", "Ku riƙa wanke kwantenan da sabulu"] }
          ],
          sources: [WHO_WATER, CDC_SAFE_WATER],
          tryIt: "Ku duba yadda gidanku ke ajiye ruwan sha. Yana da murfi? Akwai mai tsomawa? Ku yi canji ɗaya yau, kamar murfi, ludayi mai dogon hannu da ake rataya a ƙugiya, ko kwantena mai famfo.",
          youCanNow: "ajiye ruwan sha da zuba shi ta yadda zai kasance mai tsabta bayan kun tsabtace shi.",
          quickCheck: [
            { objective: "O3", q: "Wace hanya ce ta fi aminci don ɗebo ruwa daga kwantenan ajiya?", options: ["Ku tsoma kofi a ciki", "Ku zuba shi ko ku yi amfani da famfo", "Ku tsoma hannunku a ciki", "Ku bar murfin a buɗe don ya yi sauri"], answer: 1, why: "Zubawa ko amfani da famfo suna hana hannu da kofi shiga ruwa mai tsabta." },
            { objective: "O3", q: "Me yasa za a riƙa rufe kwantenan ruwan sha?", options: ["Yana hana datti, hannu da sauro shiga", "Yana sa ruwa ya yi sanyi", "Don kyan gani ne kawai", "Yana sa ruwan ya tafasa"], answer: 0, why: "Murfi yana hana datti, ƙwayoyin cuta da ƙwan sauro shiga." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Ruwan sha mai aminci",
        questions: [
          { objective: "O1", q: "Akwai shadda a sama da wata buɗaɗɗiyar rijiya marar zurfi, kusa da ita. Me za ku yi?", options: ["Ku sha daga ita; tana da kyan gani", "Ku yi amfani da rijiyar don sha kawai", "Ku zaɓi majiya mafi aminci don sha, kuma ku tsabtace duk ruwan da kuke sha", "Ku sa murfi a shaddar kawai"], answer: 2, why: "Kashi yana iya gudana daga shadda zuwa buɗaɗɗiyar rijiya da ke kusa; ku zaɓi majiya mafi aminci kuma ku tsabtace ruwan sha." },
          { objective: "O2", q: "Wace magana ce daidai game da magungunan chlorine na ruwa?", options: ["Ku sa yadda kuke so", "Ku sha nan take", "Kowane bilicin (bleach) iri ɗaya ne", "Ku bi takardar bayani don yawan maganin da tsawon lokacin jira"], answer: 3, why: "Takardar bayani tana ba da yawan maganin da ya dace da lokacin jira na wannan maganin." },
          { objective: "O2", q: "Kuna zaune a tsaunuka masu tsawo, sama da kusan mita 2,000. Na tsawon wane lokaci za ku tafasa?", options: ["Minti 3 tana tafasa sosai", "Daƙiƙa 10", "Minti 1 kawai", "Ba sai an tafasa ba"], answer: 0, why: "Ruwa yana tafasa da ƙaramin zafi a sama, don haka CDC tana ba da shawarar minti 3 a can." },
          { objective: "O3", q: "Yaronku yana tsoma kofi a cikin bokitin ruwa. Mene ne canji mafi kyau?", options: ["Ku ce masa ya tsoma da sauri", "Ku yi amfani da kwantena mai murfi da ake zubawa, ko mai famfo", "Ku bar bokitin a buɗe", "Ku sa sukari a ruwan"], answer: 1, why: "Zubawa ko famfo suna hana hannu da kofi masu datti kaiwa ga ruwa mai tsabta." },
          { objective: "O1", q: "Ruwan kanti ko na tanka...", options: ["Koyaushe yana da aminci", "Ba ya taɓa zama mai aminci", "Yana da aminci ne kawai idan yana da ɗumi", "Yana da aminci ne kawai gwargwadon majiyarsa da yadda aka sarrafa shi"], answer: 3, why: "Ruwan da aka saya yana iya zama mai tsabta ko mai datti; ku tambayi majiyarsa kuma ku ajiye shi da kyau." }
        ]
      }
    },
    {
      name: "Babi na 2: Hannu mai tsabta, bandaki mai aminci, ɗaukar mataki da sauri",
      lessons: [
        {
          title: "Wanke hannu da sabulu a muhimman lokuta",
          objectives: ["O4"],
          minutes: 5,
          goal: "Wanke hannu da sabulu a muhimman lokuta da shirya wurin wanke hannu a gida.",
          text: [
            "Wanke hannu da sabulu yana cikin hanyoyi mafi araha na hana gudawa da cututtukan ƙirji. Ruwa kaɗai bai isa ba; sabulu ne ke cire ƙwayoyin cuta.",
            "Muhimman lokuta: bayan amfani da bandaki; bayan tsabtace duburar yaro ko canja masa zanin bayan gida (nappy); kafin, lokacin da kuma bayan shirya abinci; kafin cin abinci da kafin ciyar da yaro; bayan kula da wanda ke gudawa ko amai; bayan fyace hanci, tari ko atishawa; da bayan taɓa dabbobi ko shara.",
            "Yadda ake yi: ku jiƙa hannayenku da ruwa mai tsabta mai gudana, ku sa sabulu, ku goge tafin hannu, bayan hannu, tsakanin yatsu da ƙarƙashin farce aƙalla daƙiƙa 20 (kusan tsawon rera gajeriyar waƙa sau biyu), ku kurkure da ruwa mai gudana, ku bar su su bushe da iska ko ku yi amfani da tsumma mai tsabta. Inda babu famfo, wurin wanke hannu yana taimakawa: jarka ko kwalba mai ƙaramin rami da abin toshewa, da aka rataya ko ake karkatarwa da sanda ta ƙafa (ana yawan kiransa tippy tap), da sabulu a ɗaure da igiya, da ɗan tsakuwa a ƙasa don ruwan da aka yi amfani da shi. Ku sa shi kusa da bandaki da kusa da inda kuke girki."
          ],
          steps: ["Ku jiƙa hannu da ruwa mai tsabta mai gudana.", "Ku sa sabulu.", "Ku goge tafin hannu, bayan hannu, tsakanin yatsu da ƙarƙashin farce aƙalla daƙiƙa 20.", "Ku kurkure da ruwa mai gudana.", "Ku bar su su bushe da iska ko ku yi amfani da tsumma mai tsabta.", "Ku shirya wurin wanke hannu kusa da bandaki da kicin."],
          words: [["Muhimman lokuta", "lokutan da wanke hannu ke hana mafi yawan ƙwayoyin cuta."], ["Wurin wanke hannu", "wuri na dindindin mai ruwa da sabulu don wanke hannu."], ["Tippy tap", "wurin wanke hannu mai sauƙi da aka yi daga jarka ko kwalba da kuke karkatarwa da sanda ta ƙafa."]],
          slides: [
            { title: "Sabulu, ba ruwa kaɗai ba", bullets: ["Sabulu yana cire ƙwayoyin cuta daga hannu", "Yana hana gudawa da cututtukan ƙirji"] },
            { title: "Muhimman lokuta", bullets: ["Bayan bandaki ko tsabtace duburar yaro", "Kafin girki, cin abinci ko ciyar da yaro", "Bayan kula da mara lafiya; bayan dabbobi ko shara"] },
            { title: "Yadda ake wankewa", bullets: ["Jiƙa, sabulu, goge aƙalla daƙiƙa 20", "Tafin hannu, bayan hannu, tsakanin yatsu, ƙarƙashin farce", "Kurkure da ruwa mai gudana; bushe da iska ko tsumma mai tsabta"] },
            { title: "Wurin wanke hannu a gida", bullets: ["Jarka ko kwalba mai famfo ko sandar karkatarwa", "Sabulu a ɗaure da igiya; tsakuwa a ƙasa", "Kusa da bandaki da kicin"] }
          ],
          sources: [CDC_HANDS, WHO_WATER],
          tryIt: "Ku shirya ko ku inganta wurin wanke hannu ɗaya a gida yau, mai ruwa da sabulu, kusa da bandaki ko kicin. Sannan ku nuna wa kowane mutum a gidanku yadda ake wankewa na daƙiƙa 20.",
          youCanNow: "wanke hannu da kyau da sabulu a muhimman lokuta da shirya wurin wanke hannu a gida.",
          quickCheck: [
            { objective: "O4", q: "Yaushe dole ku wanke hannu da sabulu?", options: ["Sau ɗaya a rana kawai", "Kafin zuwa coci ko masallaci kawai", "Bayan bandaki, bayan tsabtace duburar yaro da kafin girki ko cin abinci", "Sai idan suna da kyan datti kawai"], answer: 2, why: "Waɗannan muhimman lokuta suna hana ƙwayoyin cuta daga kashi kaiwa ga abinci da baki." },
            { objective: "O4", q: "Na tsawon wane lokaci ya kamata ku goge da sabulu?", options: ["Daƙiƙa 2", "Har sai sabulun ya ƙare", "Tafin hannu kawai, da sauri", "Aƙalla daƙiƙa 20, kowane sashe na hannu"], answer: 3, why: "Goge kowane sashe aƙalla daƙiƙa 20 yana cire ƙwayoyin cuta." }
          ]
        },
        {
          title: "Bandaki mai aminci da kashin yara",
          objectives: ["O5"],
          minutes: 5,
          goal: "Kiyaye bandakinku mai tsabta da zubar da kashin yara lafiya.",
          text: [
            "Kashin da aka bari a fili, a daji, a gona, a magudanar ruwa ko a kogi, yana ɗauke da ƙwayoyin cuta da ƙudaje, ƙafafu, ruwan sama da hannaye ke dawo da su cikin abinci da ruwa. WHO da UNICEF suna ɗaukar bandaki a matsayin mafi aminci idan yana raba kashi da mutane: bandakin da ake jan ruwa (flush) ko ake zuba ruwa, ko shadda mai rami da ke da shimfiɗa (slab). Bandakin da gidanku ba ya raba wa wasu ya fi kyau ma.",
            "Ku kiyaye bandaki ko shadda mai tsabta: ku riƙa wanke shimfiɗar ko wurin zama, ku riƙa rufe ramin da murfi don hana ƙudaje, kuma ku sa wurin wanke hannu kusa da shi. Yara ma suna buƙatar bandakin da za su iya amfani da shi lafiya, kamar tukunyar bayan gida ta yara (potty) ko ƙaramin murfin rami.",
            "Kashin ƙananan yara yana da haɗari kamar na manya. Ku zuba shi a bandaki ko shadda nan take, har da na zanin bayan gida da na tukunyar yara, sannan ku wanke tukunyar da hannayenku da sabulu. Kada ku bar shi a tsakar gida ko ku jefa shi a magudanar ruwa ko shara."
          ],
          steps: ["Ku riƙa wanke shimfiɗar ko wurin zama.", "Ku riƙa rufe ramin da murfi.", "Ku sa sabulu da ruwa kusa da bandaki.", "Ku zuba kashin yara a bandaki nan take.", "Ku wanke tukunyar yara da hannayenku da sabulu."],
          words: [["Shadda", "bandaki a kan rami a ƙasa."], ["Shimfiɗa (slab)", "ƙaƙƙarfan bene a kan ramin shadda da kuke tsayawa a kai."], ["Bayan gida a fili", "yin bayan gida a gonaki, daji, koguna ko wasu wurare a fili."]],
          slides: [
            { title: "Kashi a fili yana dawowa", bullets: ["Ƙudaje, ƙafafu, ruwan sama da hannaye suna ɗauke da ƙwayoyin cuta", "Zuwa cikin abinci da ruwa"] },
            { title: "Bandaki mafi aminci", bullets: ["Na jan ruwa, na zuba ruwa, ko shadda mai shimfiɗa", "Wanda ba a raba wa wasu gidaje ba ya fi kyau", "Murfi a rufe; sabulu da ruwa a gefensa"] },
            { title: "Kashin yara", bullets: ["Yana da haɗari kamar na manya", "Cikin bandaki nan take", "Ku wanke tukunyar yara da hannayenku da sabulu"] }
          ],
          sources: [JMP_SANITATION, WHO_DIARRHOEA],
          tryIt: "Ku duba bandakinku ko shaddarku yau: yana da tsabta, an rufe shi, kuma akwai sabulu da ruwa a gefensa? Ku gyara abu ɗaya. Ku yarda da iyalinku inda kashin yara zai riƙa zuwa a kowane lokaci.",
          youCanNow: "kiyaye bandaki ko shadda mai tsabta a rufe da zubar da kashin yara lafiya.",
          quickCheck: [
            { objective: "O5", q: "Ina kashin jariri daga zanin bayan gida yake zuwa?", options: ["Cikin bandaki ko shadda nan take", "Cikin tsakar gida", "Cikin magudanar ruwa", "Cikin juji (tarin shara)"], answer: 0, why: "Kashin yara ma yana ɗauke da ƙwayoyin cuta kuma dole ya shiga bandaki." },
            { objective: "O5", q: "Me yasa za a riƙa rufe ramin shadda da murfi?", options: ["Don ya yi ɗumi", "Don hana ƙudaje ɗaukar ƙwayoyin cuta zuwa abinci", "Don ɓoye wari kawai", "Ba a buƙata"], answer: 1, why: "Ƙudajen da ke sauka a kan kashi suna iya kai ƙwayoyin cuta ga abinci." }
          ]
        },
        {
          title: "Gudawa da kwalara: lokacin zuwa asibiti yanzu",
          objectives: ["O6"],
          minutes: 6,
          goal: "Gane alamun haɗari na ƙarancin ruwa a jiki da na kwalara da neman taimako nan take.",
          text: [
            "Gudawa tana fitar da ruwa da gishiri daga jiki. Ana kiran wannan ƙarancin ruwa a jiki (dehydration), kuma yana iya kashe ƙaramin yaro da sauri. Kwalara tana iya kawo bayan gida mai ruwa mai yawan gaske kuma, a cewar WHO, tana iya kisa cikin awanni idan ba a yi magani ba. Kada ku jira ku ga ko za ta sauƙaƙa.",
            "Ku je asibiti, cibiyar lafiya ko wurin ma'aikacin lafiya na unguwa YANZU idan mutumin: yana barci sosai, ya raunana, jikinsa ya yi laushi ko yana da wuyar tashi; ba ya iya sha ko yana sha kaɗan sosai; idanunsa sun shige ciki; fatarsa tana komawa a hankali sosai idan an tsunkule ta; yana bayan gida mai ruwa mai yawa, kamar ruwan shinkafa; akwai jini a bayan gidansa; yana amai akai-akai; ko gudawarsa ta ɗauki kwanaki da yawa. Jariri ko ƙaramin yaro mai gudawa yana buƙatar kulawa ta musamman.",
            "Gishirin shan ruwa (ORS) yana maye gurbin ruwa da gishirin da suka fita, kuma ma'aikatan lafiya suna ba yara zinc ma. Ku tambayi asibitinku, ma'aikacin lafiya na unguwa ko kantin magani yadda ake amfani da ORS; ku ba da shi a hanya, kamar yadda suka faɗa muku, amma ku ci gaba da zuwa. Ku ci gaba da shayarwa. A lokacin ɓarkewar kwalara, ku saurari ma'aikatar lafiya: tana iya yin gangamin allurar rigakafi da buɗe cibiyoyin magani. Ku rubuta suna da lambar wayar asibiti da ma'aikacin lafiya na unguwa mafi kusa a kati, kuma ku ajiye kuɗin mota idan za ku iya."
          ],
          steps: ["Ku sa ido sosai a kan duk mai gudawa, musamman ƙananan yara.", "Ku duba alamun haɗari.", "Idan kun ga ko ɗaya, ku je asibiti ko ku kira ma'aikacin lafiya na unguwa yanzu.", "Ku tambayi ma'aikacin lafiya yadda ake ba da ORS, kuma ku ci gaba da shayarwa.", "Ku wanke hannu da sabulu bayan kowace taɓawa, kuma ku tsabtace wurin lafiya."],
          words: [["Ƙarancin ruwa a jiki (dehydration)", "lokacin da jiki ya rasa ruwa da gishiri da yawa."], ["ORS (gishirin shan ruwa)", "haɗin gishiri da sukari da, idan aka haɗa shi da ruwa mai tsabta, yake maye gurbin abin da gudawa ta fitar."], ["Kwalara", "cuta daga ruwa ko abinci mai datti da ke kawo gudawa mai ruwa sosai kuma tana iya kisa da sauri."], ["Ɓarkewar cuta", "mutane da yawa da ke da wata cuta a yanki ɗaya a lokaci ɗaya."]],
          slides: [
            { title: "Gudawa tana iya kisa da sauri", bullets: ["Jiki yana rasa ruwa da gishiri", "Kwalara tana iya kisa cikin awanni", "Kada ku jira"] },
            { title: "Ku je asibiti YANZU idan", bullets: ["Barci sosai, jiki ya yi laushi, da wuyar tashi; ba ya iya sha", "Idanu sun shige ciki; fata tana komawa a hankali idan an tsunkule ta", "Bayan gida mai yawa kamar ruwan shinkafa; jini a bayan gida", "Amai akai-akai; ta ɗauki kwanaki da yawa"] },
            { title: "A hanya", bullets: ["Ku tambayi ma'aikacin lafiya yadda ake ba da ORS", "Ku ci gaba da shayarwa", "Ku wanke hannu bayan kowace taɓawa"] },
            { title: "Ku kasance a shirye", bullets: ["Kati mai lambobin asibiti da na ma'aikacin lafiya", "Kuɗin mota idan za ku iya", "A lokacin ɓarkewar cuta, ku bi ma'aikatar lafiya"] }
          ],
          sources: [WHO_DIARRHOEA, WHO_CHOLERA],
          tryIt: "Ku yi katin alamun haɗari: ku rubuta alamun haɗari huɗu ko fiye, suna da lambar wayar asibiti ko ma'aikacin lafiya na unguwa mafi kusa, da yadda za ku isa can. Ku manna shi a bango.",
          youCanNow: "gane alamun haɗari na ƙarancin ruwa a jiki da na kwalara da kai mutumin asibiti nan take.",
          quickCheck: [
            { objective: "O6", q: "Wace ce alamar haɗari da ke nufin ku je asibiti yanzu?", options: ["Bayan gida ɗaya mai laushi", "Yaron da ke wasa kamar yadda ya saba", "Yaron da ke barci sosai kuma ba ya iya sha", "Jin ƙishirwa bayan wasan ƙwallo"], answer: 2, why: "Barci sosai da rashin iya sha alamun ƙarancin ruwa mai tsanani ne a jiki." },
            { objective: "O6", q: "Maƙwabci yana bayan gida mai ruwa mai yawan gaske kamar ruwan shinkafa a lokacin ɓarkewar kwalara. Me za ku yi?", options: ["Ku jira har gobe", "Ku ba shi duk maganin da ke gida", "Ku ɓoye shi daga ma'aikatan lafiya", "Ku taimaka masa ya isa asibiti ko cibiyar magani yanzu"], answer: 3, why: "Kwalara tana iya kisa cikin awanni; kulawa da sauri a asibiti tana ceton rayuka." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Hannu mai tsabta, bandaki mai aminci, ɗaukar mataki da sauri",
        questions: [
          { objective: "O4", q: "Akwai ruwa amma babu sabulu a wurin wanke hannu. Mene ne gaskiya?", options: ["Ruwa kaɗai ya isa", "Ana buƙatar sabulu don cire ƙwayoyin cuta; ku samo sabulu don wurin", "Hannu ba sa buƙatar wankewa", "Ku yi amfani da bokitin ruwan sha"], answer: 1, why: "Sabulu yana cire ƙwayoyin cutar da ruwa kaɗai ke barin su." },
          { objective: "O4", q: "A ina ne wuri mafi kyau na wanke hannu?", options: ["Kusa da bandaki da kusa da inda kuke girki", "Nesa da gida", "A cikin bokitin ruwan sha", "A ɗakin kwana"], answer: 0, why: "Kusa da bandaki da kicin yana sauƙaƙa wankewa a muhimman lokuta." },
          { objective: "O5", q: "Kashin ɗan ƙaramin yaro yana tsakar gida. Me za ku yi?", options: ["Ku share shi zuwa magudanar ruwa", "Ku bar shi ya bushe", "Ku rufe shi da yashi ku bar shi", "Ku zuba shi a bandaki ku wanke hannu da sabulu"], answer: 3, why: "Wurin kashin yara bandaki ne; sannan a wanke hannu." },
          { objective: "O6", q: "Yaronku yana gudawa, idanunsa sun shige ciki, kuma fatarsa tana komawa a hankali idan an tsunkule ta. Me za ku yi?", options: ["Ku jira kwana biyu", "Ku daina ba shi duk wani abin sha", "Ku je asibiti yanzu ku tambayi yadda ake ba da ORS a hanya", "Ku ba shi maganin babba"], answer: 2, why: "Waɗannan alamun ƙarancin ruwa a jiki ne; dole ma'aikacin lafiya ya ga yaron yanzu." },
          { objective: "O6", q: "Me ORS yake yi?", options: ["Yana kashe sauro", "Yana maye gurbin ruwa da gishirin da gudawa ta fitar", "Yana tsabtace bandaki", "Yana sa ruwa ya tafasa da sauri"], answer: 1, why: "ORS yana maye gurbin ruwa da gishirin da gudawa ke fitarwa daga jiki." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Ruwa Mai Tsabta, Bandaki da Tsafta a Gida",
    questions: [
      { objective: "O1", q: "Mene ne babban haɗari ga lafiyar ruwan sha?", options: ["Kashi ya shiga cikin ruwa", "Ruwa mai sanyi", "Ruwa mai nauyi (hard water)", "Ruwan da ke da ɗanɗanon ƙarfe"], answer: 0, why: "WHO ta ce ƙwayoyin cuta daga kashi su ne babban haɗarin ruwan sha." },
      { objective: "O1", q: "Wace tambaya ce ke taimaka muku auna rijiya?", options: ["Wane launi ne bokitin?", "Tana da murfi kuma tana nesa da bandaki da dabbobi?", "Wane ne ya haƙa ta?", "Tana kusa da kasuwa?"], answer: 1, why: "Majiya mai murfi da ke nesa da bandaki da dabbobi ba ta cika ɗaukar kashi ba." },
      { objective: "O1", q: "Burtsatsenku na yau da kullum ya lalace. Me za ku yi?", options: ["Ku sha ruwan kogi ba tare da tsabtacewa ba", "Ku daina sha", "Ku yi amfani da majiyar ajiya kuma ku tsabtace ruwan kafin ku sha", "Ku yi amfani da ruwan wanke-wanke"], answer: 2, why: "Majiyar ajiya tare da tsabtacewa suna kiyaye ruwan sha idan babbar majiya ta lalace." },
      { objective: "O2", q: "Waɗanne hanyoyi biyu ne ke tsabtace ruwan sha a gida?", options: ["Sa sukari ko gishiri", "Barin shi a rana na awa ɗaya ko girgiza shi", "Sanyaya shi ko daskarar da shi", "Tafasa shi, ko amfani da maganin chlorine da ake sayarwa don ruwa"], answer: 3, why: "Tafasa da magungunan chlorine suna kashe ƙwayoyin cuta; sauran ba sa yi." },
      { objective: "O2", q: "Zuba ruwa mai gurɓata ta tsumma yana sa shi ya zama mai aminci?", options: ["A'a; yana cire datti, amma za ku ci gaba da tafasa shi ko sa chlorine", "Eh, koyaushe", "Sai idan tsummar sabuwa ce", "Eh, idan kun yi sau biyu"], answer: 0, why: "Tsumma tana cire datti, ba dukkan ƙwayoyin cuta ba; har yanzu kuna buƙatar tafasa ko chlorine." },
      { objective: "O2", q: "Kuna da maganin chlorine amma takardar bayaninsa ta ɓace. Me za ku yi?", options: ["Ku yi tsammanin yawan maganin", "Ku sa da yawa don ku tsira", "Ku tambayi ma'aikacin lafiya na unguwa ko asibiti yadda ake amfani da shi", "Ku sha nan take bayan kun sa shi"], answer: 2, why: "Yawan maganin da ya dace da lokacin jira suna da muhimmanci; ma'aikacin lafiya zai iya faɗa muku." },
      { objective: "O2", q: "Kafin haɗa madarar gwangwanin jariri, ruwan ya kamata ya zama...", options: ["Kai tsaye daga kogi", "An tsabtace shi: an tafasa an bar shi ya huce, ko an tsabtace shi lafiya", "Mai ɗumi daga rana", "Kowane irin ruwa"], answer: 1, why: "Jarirai sun fi kowa haɗari; dole a tsabtace ruwansu da farko." },
      { objective: "O3", q: "Wane kwantena na ruwan sha ne ya fi kyau?", options: ["Buɗaɗɗen bokiti a ƙasa", "Kwantenan da aka yi amfani da shi don man fetur", "Kwantena mai tsabta mai murfi, mai ƙunƙuntaccen baki ko famfo, an ɗaga shi daga ƙasa", "Kowace tukunya"], answer: 2, why: "Mai tsabta, mai murfi da aka ɗaga daga ƙasa yana kiyaye ruwan da aka tsabtace." },
      { objective: "O3", q: "Me yasa kada kowa ya tsoma kofi a cikin ruwan sha?", options: ["Hannu da kofi suna kawo ƙwayoyin cuta cikin ruwa mai tsabta", "Yana ɓata ruwa", "Yana yin hayaniya", "Rashin ladabi ne"], answer: 0, why: "Tsomawa yana kai ƙwayoyin cuta daga hannu da kofi zuwa dukkan kwantenan." },
      { objective: "O3", q: "Sau nawa ya kamata ku wanke kwantenan ruwa?", options: ["Ba a taɓa ba", "Sau ɗaya a shekara", "Sai idan yana wari kawai", "A kai a kai, da sabulu da ruwa mai tsabta, sannan ku kife shi ya bushe"], answer: 3, why: "Wankewa a kai a kai yana hana ƙwayoyin cuta taruwa a cikin kwantenan." },
      { objective: "O4", q: "Wanne ne muhimmin lokacin wanke hannu?", options: ["Kafin ciyar da yaro", "Bayan kallon talabijin", "Kafin barci kawai", "Bayan shan ruwa"], answer: 0, why: "Hannu mai tsabta kafin ciyar da yaro yana hana ƙwayoyin cuta shiga bakin yaron." },
      { objective: "O4", q: "Waɗanne sassan hannu kuke gogewa?", options: ["Ƙarshen yatsu kawai", "Tafin hannu, bayan hannu, tsakanin yatsu da ƙarƙashin farce", "Tafin hannu kawai", "Hannun dama kawai"], answer: 1, why: "Ƙwayoyin cuta suna ɓoyewa a kowane sashe na hannu, don haka ku goge su duka." },
      { objective: "O4", q: "Ba ku da famfo a gida. Ta yaya za ku wanke hannu da ruwa mai gudana?", options: ["Ku tsoma hannunku a bokitin ruwan sha", "Ku goge su da tsumma kawai", "Ku yi wurin wanke hannu daga jarka ko kwalba da ke zubawa, da sabulu a ɗaure da igiya", "Ku ƙyale wankewa"], answer: 2, why: "Wurin wanke hannu mai sauƙi yana ba da ruwa mai gudana don wankewa ba tare da ɓata ruwan da aka ajiye ba." },
      { objective: "O5", q: "Wane bandaki ne WHO da UNICEF ke ɗauka a matsayin mafi aminci?", options: ["Gona mai nisa da gida", "Bokitin da ake zubawa a magudanar ruwa", "Rami ba tare da shimfiɗa ba", "Shadda mai shimfiɗa, ko bandakin jan ruwa ko na zuba ruwa"], answer: 3, why: "Waɗannan suna raba kashi da mutane; rami ba tare da shimfiɗa ba ko gonaki a fili ba sa yi." },
      { objective: "O5", q: "Me ya kamata koyaushe ya kasance kusa da bandaki?", options: ["Sabulu da ruwa don wanke hannu", "Kwantenan ruwan sha", "Abinci", "Babu komai"], answer: 0, why: "Wanke hannu nan take bayan bandaki yana hana ƙwayoyin cuta yaɗuwa." },
      { objective: "O5", q: "Me yasa kashin yara yake da haɗari?", options: ["Ba shi da haɗari", "Yana ɗauke da ƙwayoyin cuta kamar kashin manya", "Saboda wari kawai", "Sai idan yaron ba shi da lafiya kawai"], answer: 1, why: "Kashin yara yana ɗauke da ƙwayoyin cuta iri ɗaya kuma dole ya shiga bandaki." },
      { objective: "O6", q: "Wanne a cikin waɗannan ke buƙatar asibiti yanzu?", options: ["Bayan gida ɗaya mai laushi kuma yaron yana wasa", "Yaron da ke jin ƙishirwa bayan gudu", "Jini a bayan gida", "Yaron da ke son cin abinci"], answer: 2, why: "Jini a bayan gida alamar haɗari ce da ke buƙatar ma'aikacin lafiya." },
      { objective: "O6", q: "Me yasa bai kamata ku jira ba idan wani yana da alamun kwalara?", options: ["Saboda abin kunya ne", "Saboda asibiti yana rufewa da wuri", "Tana wucewa da kanta", "Kwalara tana iya kisa cikin awanni ba tare da kulawa ba"], answer: 3, why: "WHO ta ce kwalara tana iya kisa cikin awanni idan ba a yi magani ba." },
      { objective: "O6", q: "Jariri yana gudawa. Me za ku ci gaba da yi yayin da kuke neman taimako?", options: ["Ku ci gaba da shayarwa", "Ku daina ba shi duk wani madara", "Ku daina ba shi duk wani abin sha", "Ku ba shi maganin babba"], answer: 0, why: "Shayarwa tana ci gaba da ba jariri ruwa da abinci; ma'aikacin lafiya zai ba da shawara kan sauran." },
      { objective: "O6", q: "Me ya kamata katin alamun haɗarinku ya ƙunsa?", options: ["Lambar sirrin kuɗin wayarku (PIN)", "Alamun haɗari da suna da lambar asibiti ko ma'aikacin lafiya mafi kusa", "Jerin magunguna da yawansu", "Babu komai; za ku tuna"], answer: 1, why: "A lokacin gaggawa, alamun da wanda za a kira su ne abin da kuke buƙata nan take." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 3, 4, 8, 11, 13, 15, 17] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Majiyar ruwa", objective: "O1", notYet: "Ba a zaɓi majiya ba, ko an zaɓi majiya mai haɗari ba tare da dalili ba.", meets: "An jera majiyoyi da dalilai; an zaɓi mafi aminci don sha kuma an ambaci ta ajiya.", exceeds: "An kuma faɗi abin da ke sa kowace majiya ta zama mai haɗari (bandaki, dabbobi, rashin murfi) da wanda za a faɗa wa idan majiya ta lalace ko ta ƙazanta." },
      { name: "Tsabtace ruwa", objective: "O2", notYet: "Babu hanyar tsabtacewa, ko hanyar da ke da matakan da suka ɓace (babu lokacin tafasa, babu lokacin jira na takardar bayani).", meets: "Tafasa ko maganin chlorine, tare da barin ruwa mai gurɓata ya kwanta da farko, kowane mataki da dokar takardar bayani.", exceeds: "An kuma tsara hanyar ajiya, kuma an ajiye chlorine inda yara ba za su kai ba." },
      { name: "Ajiya da zubawa", objective: "O3", notYet: "Buɗaɗɗen kwantena, ko har yanzu ana barin tsomawa.", meets: "Kwantena mai tsabta mai murfi, an ɗaga shi daga ƙasa, ana zubawa ko amfani da famfo, ana wanke shi a kai a kai.", exceeds: "An raba ruwan sha da ruwan wanke-wanke, kuma kowa a gida ya san dokar hana tsomawa." },
      { name: "Wanke hannu", objective: "O4", notYet: "Babu wurin wanke hannu ko babu sabulu; babu muhimman lokuta.", meets: "Wuri mai ruwa da sabulu kusa da bandaki ko kicin, kuma an rubuta muhimman lokuta.", exceeds: "Wurare kusa da bandaki da kicin duka, kuma an nuna wa kowane mutum a iyali wankewa na daƙiƙa 20." },
      { name: "Bandaki da kashin yara", objective: "O5", notYet: "An bar kashi a fili ko babu tsari don kashin yara.", meets: "Ana kiyaye bandaki mai tsabta a rufe, kuma kashin yara yana shiga cikinsa a kowane lokaci.", exceeds: "An raba aikin tsabtacewa tsakanin 'yan iyali, tare da sabulu kusa da bandaki." },
      { name: "Katin alamun haɗari", objective: "O6", notYet: "Alamun haɗari ƙasa da huɗu, ko babu lambar asibiti.", meets: "Aƙalla alamun haɗari huɗu da suna da lambar asibiti ko ma'aikacin lafiya mafi kusa.", exceeds: "Har da yadda za a isa can da tsarin kuɗin mota, ba tare da yawan magani a kan katin ba." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Gidajen da ke tsabtace dukkan ruwan sha kuma suna ajiye shi a rufe bayan kwanaki 30 (binciken biyo baya)",
      "Gidajen da ke da wurin wanke hannu mai sabulu bayan kwanaki 30",
      "Raguwar gudawa a ƙananan yara da iyalai ko ma'aikatan lafiya na unguwa suka ruwaito a lokaci mai zuwa",
      "Zuwa asibiti da sauri saboda gudawa mai alamun haɗari, kamar yadda ma'aikatan lafiya na unguwa suka ruwaito"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Sabulu, kwantenan ruwa mai murfi, da jarka ko kwalba don wurin wanke hannu",
      "Tukunyar tafasa ruwa, ko maganin chlorine da ake sayarwa don ruwan sha tare da takardar bayaninsa",
      "Takarda da alƙalami don tsarin da katin alamun haɗari",
      "Kusan minti 60 gaba ɗaya, a gajerun zama: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Yana aiki sosai da ƙungiyoyin mata, ƙungiyoyin iyaye mata, makarantu, ƙungiyoyin addini da ziyarar ma'aikatan lafiya na unguwa; ku yi gwajin farko tare.",
      "Ku gina wurin wanke hannu tare a lokacin Darasi na 4; shi ne sashen da masu koyo suka fi tunawa.",
      "Ku gayyaci ma'aikacin lafiya na unguwa ko ma'aikaciyar jinya ta asibiti zuwa zaman da ake magana kan alamun haɗari da ORS.",
      "Kada ku ba da yawan magani ko shawarar magani; ku tura duk tambayoyin magani ga asibiti, ma'aikacin lafiya na unguwa ko ma'aikatar lafiya.",
      "A lokacin ɓarkewar kwalara, ku yi amfani da saƙonnin ma'aikatar lafiya na yanzu da wuraren cibiyoyin magani.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
