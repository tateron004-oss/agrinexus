"use strict";

// Koach Learn course, Hausa (ha) translation of agriculture-africa/agri-livestock-health.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.
// Safety rule kept: the course never gives drug or vaccine doses; it tells students to follow the vet and the label.

const WOAH_ND = { name: "Hukumar Lafiyar Dabbobi ta Duniya (WOAH): cutar Newcastle", url: "https://www.woah.org/en/disease/newcastle-disease/" };
const FAO_ND_VILLAGE = { name: "FAO: Cutar Newcastle a kajin gida na ƙauye", url: "https://www.fao.org/4/y5162e/y5162e05.htm" };
const FAO_BIOSEC = { name: "FAO: Kyawawan matakan kare gona daga cututtuka (biosecurity) a kiwon kaji ƙanana da na yawo a Kenya", url: "https://www.fao.org/4/al838e/al838e00.pdf" };
const FAO_PRUDENT = { name: "FAO: Amfani da magungunan ƙwayoyin cuta (antimicrobials) a hankali a aladu da kaji (likitocin dabbobi, tsarin lafiya, lokacin jira)", url: "https://www.fao.org/3/ca6729en/CA6729EN.pdf" };
const VCN = { name: "Majalisar Likitocin Dabbobi ta Najeriya (Veterinary Council of Nigeria): rajistar likitocin dabbobi", url: "https://vcn.gov.ng" };

module.exports = {
  id: "agri-livestock-health-ha",
  lang: "ha",
  translationOf: "agri-livestock-health",
  category: "Agriculture (Africa)",
  name: "Lafiyar Dabbobin Kiwo da Kula da Su",
  skills: "Bambance dabba mai lafiya da mara lafiya, Ciyarwa da shayarwa yadda ya kamata, Tsaftace da kiyaye gidan dabbobi, Tsara allurar rigakafi tare da likitan dabbobi, Kare kaji daga cutar Newcastle, Yaƙi da ƙwayoyin cuta masu rayuwa a jiki (parasites) da ajiye bayanan lafiya",
  outcome: "gudanar da tsarin lafiya mai sauƙi don shanu, awaki ko kajinku: duba kowace dabba kowace rana don alamun rashin lafiya, ciyar da su da shayar da su sosai, tsaftace gidansu, bin jadawalin rigakafi da kuka yi da likitan dabbobi na yankinku, hana cutar Newcastle da ƙwayoyin cuta masu rayuwa a jiki shiga, rubuta kowane magani, da sanin lokacin kiran likitan dabbobi.",
  about: [
    "Wannan kwas na masu kiwon dabbobi ƙanana da masu faɗaɗa kiwo ne, makiyaya, masu kiwon kaji, ma'aikatan gona da matasan manoma a Kenya, Najeriya, Ghana da sauran Afirka, waɗanda ke kiwon shanu, awaki, tumaki ko kaji. Dabbobi masu lafiya suna girma da sauri, suna ba da ƙarin nono da ƙwai, kuma kuɗinsu ya fi yawa a kasuwa; ɓarkewar cuta guda ɗaya tana iya share ajiyar shekaru.",
    "Babi na 1 game da kulawar yau da kullum ne: bambance dabba mai lafiya da mara lafiya, abinci da ruwa, da gidan dabbobi da tsafta. Babi na 2 game da rigakafi da magani ne: jadawalin allurar rigakafi tare da likitan dabbobi, kare kaji daga cututtuka da cutar Newcastle, da ƙwayoyin cuta masu rayuwa a jiki, bayanai da lokacin kiran likitan dabbobi.",
    "Wannan kwas ba ya ba da yawan magani ko na allurar rigakafi (dose). Cututtuka, alluran rigakafi da magungunan da aka amince da su sun bambanta daga ƙasa zuwa ƙasa da yanki zuwa yanki, don haka koyaushe ku bi likitan dabbobi ko jami'in lafiyar dabbobi na yankinku da abin da ke rubuce a jikin magani (label). Kowane darasi yana ɗaukar kusan minti biyar kuma yana ƙarewa da aiki da dabbobinku. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas."
  ],
  finalTask: "Ku rubuta tsarin lafiya mai shafi ɗaya don dabbobinku (naku, ko na misali kamar shanun nono 3 a Kiambu, awaki 15 a Kano, ko kaji masu ƙwai 200 kusa da Kumasi): duba lafiyarku na kowace rana, tsarin abinci da ruwa har da lokacin rani, dokoki biyu na gidan dabbobi da tsafta, jadawalin rigakafi da kuka amince da shi da likitan dabbobi, dokokinku na kare gona daga cututtuka (ga kaji: cutar Newcastle), yadda za ku yaƙi tsutsotsi da kaska, bayanan da za ku ajiye, da alamun da ke nufin ku kira likitan dabbobi nan take, tare da sunan likitan da lambar wayarsa.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Masu kiwon dabbobi ƙanana da masu faɗaɗa kiwo, makiyaya, masu kiwon kaji, ma'aikatan gona da matasan manoma a Kenya, Najeriya, Ghana da sauran Afirka, waɗanda ke kiwon shanu, awaki, tumaki ko kaji.",
    startingPoint: "Yawancinsu suna duban dabbobinsu kowace rana kuma suna magance rashin lafiya idan sun gan ta, sau da yawa da magungunan da aka saya ba tare da shawarar likitan dabbobi ba. Kaɗan ne ke bin rubutaccen jadawalin rigakafi, ke bin dokokin kare gona daga cututtuka, ke rubuta magani da lokacin jira, ko ke tsara abinci da ruwa don lokacin rani.",
    gap: "Ɓarkewar cuta guda ɗaya tana iya share ajiyar shekaru, kuma abinci mara kyau, gida mai datti, ƙwayoyin cuta masu rayuwa a jiki da amfani da magani ba daidai ba suna rage nono, ƙwai da girma, kuma suna iya cutar da mutane. Tsarin lafiya mai sauƙi a rubuce da aka yi da likitan dabbobi yana kiyaye lafiyar dabbobi, yana hana asara, kuma yana sa abincin da ke fitowa daga gona ya zama lafiyayye.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; ana bayanin kowace kalma ta lafiyar dabbobi",
      "Na'urori: waya mai sauƙi da littafin rubutu don bayanai da lambar likitan dabbobi",
      "Babu yawan magani ko na allurar rigakafi: cututtuka, alluran rigakafi da magungunan da aka amince da su sun bambanta daga yanki zuwa yanki; masu koyo suna bin likitan dabbobi da abin da ke jikin magani",
      "Tsaro: wasu cututtukan dabbobi suna kama mutane; kada ku taɓa buɗe gawar dabbar da ta mutu farat ɗaya tana zubar da jini",
      "Lokaci: darussa na kusan minti 5 da suka dace da aikin kula da dabbobi"
    ],
    prerequisites: "Babu."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Yayin duba dabbobinku na kowace rana", action: "gane alamun dabba mai lafiya da mara lafiya, da ware wadda wataƙila ba ta da lafiya", standard: "kuna ambaton aƙalla alamun gargaɗi biyar, kuma kuna tuntuɓar likitan dabbobi ko jami'in lafiyar dabbobi" },
    { id: "O2", condition: "Don dabbobinku a tsawon shekara", action: "tsara abinci da ruwa mai tsabta, har da lokacin rani", standard: "ba tare da abinci mai fumfuna ba, kuma ana canja abinci a hankali" },
    { id: "O3", condition: "Don gidan dabbobinku", action: "duba gidan dabbobi da kafa dokokin tsafta na gona", standard: "da gida bushe, mai inuwa, mara cunkoso, ana ware sababbin dabbobi, kuma ana raba marasa lafiya" },
    { id: "O4", condition: "Tare da likitan dabbobi mai rajista ko jami'in lafiyar dabbobi", action: "amince da rubutaccen jadawalin rigakafi da ajiye alluran rigakafi a wuri mai sanyi kuma kafin su ƙare", standard: "da kowace allura, dabbobin, shekarunsu, da lokacin maimaitawa" },
    { id: "O5", condition: "Don garken kaji", action: "kafa dokokin kare gona daga cututtuka da tsarin abin da za a yi idan cutar Newcastle ta ɓarke", standard: "da allurar rigakafi bisa jadawalin likitan dabbobi, da matakan da za a ɗauka idan tsuntsaye suka mutu farat ɗaya" },
    { id: "O6", condition: "Don garken dabbobinku ko na kajinku", action: "tsara yaƙi da ƙwayoyin cuta masu rayuwa a jiki tare da likitan dabbobi, ajiye bayanan magani, da jera alamun da ke buƙatar likita nan take", standard: "kuna rubuta kowane magani tare da lokacin jirarsa" }
  ],
  chapters: [
    {
      name: "Babi na 1: Kulawar yau da kullum",
      lessons: [
        {
          objectives: ["O1"],
          title: "Alamun dabba mai lafiya da mara lafiya",
          minutes: 5,
          goal: "Yi ɗan duba lafiya kowace rana kuma ku gane dabbar da wataƙila ba ta da lafiya.",
          text: [
            "Ku ne kuka fi sanin dabbobinku. Kallo a kowace rana, a lokacin ciyarwa ko tatsa, yana gano rashin lafiya da wuri, lokacin da maganinta ya fi araha kuma kafin ta yaɗu.",
            "Dabba mai lafiya tana farke kuma tana son sanin abubuwa, tana tsayawa da tafiya yadda ya kamata, tana ci da sha sosai, kuma shanu, awaki da tumaki suna tuƙa (cud) idan suna hutawa. Idanunta suna haske kuma a fili, hancinta mai tsabta ne, gashinta ko gashin fukafukanta yana da santsi da ƙyalli, numfashinta a hankali yake, kuma kashinta da fitsarinta suna kama da na yau da kullum. Kaza mai lafiya tana motsi sosai, jan zakararta (comb) yana haske, kuma tana yin ƙwai kamar yadda ta saba.",
            "Alamun gargaɗi: tsayawa ita kaɗai nesa da sauran, sunkuyar da kai, rashin ci ko rashin tuƙa, idanu marasa haske ko masu zubar ruwa, hanci mai zubar ruwa, tari ko numfashi da sauri, gudawa ko jini a kashi, ɗingishi, kumburi, raunuka, raguwar nono ko ƙwai farat ɗaya, fukafukai a hargitse, karkacewar wuya a tsuntsaye, ko mutuwa farat ɗaya. Ku ware dabba mara lafiya daga sauran, ku tuntuɓi likitan dabbobi ko jami'in lafiyar dabbobi."
          ],
          steps: ["Ku duba kowace dabba sau ɗaya a rana, a lokacin ciyarwa ko tatsa.", "Ku duba: tana farke, tana tsayawa da tafiya daidai, tana ci, tana tuƙa.", "Ku ƙara dubawa: idanu, hanci, gashi ko fukafukai, numfashi, kashi.", "Ku lura da duk wata raguwar nono ko ƙwai.", "Ku ware duk dabbar da ke da alamun gargaɗi.", "Ku rubuta abin da kuka gani, ku kira likitan dabbobi ko jami'in lafiyar dabbobi."],
          words: [["Tuƙa (chewing the cud)", "lokacin da shanu, awaki da tumaki suka dawo da abinci baki suka sake tauna shi; alama ce ta lafiya."], ["Ware (isolate)", "ajiye dabba mara lafiya nesa da sauran."], ["Jami'in lafiyar dabbobi (animal health officer)", "ma'aikaci da aka horar, na gwamnati ko mai zaman kansa, da ke taimakon manoma kan lafiyar dabbobi."]],
          slides: [
            { title: "Mai lafiya", bullets: ["Tana farke, tana tafiya daidai, tana ci da sha", "Tana tuƙa; idanu masu haske, hanci mai tsabta", "Gashi ko fukafukai masu santsi; kashi na yau da kullum"] },
            { title: "Alamun gargaɗi", bullets: ["Ita kaɗai, kai a sunkuye, ba ta ci", "Idanu ko hanci masu zubar ruwa, tari, gudawa", "Ɗingishi, kumburi, ƙarancin nono ko ƙwai"] },
            { title: "Ku ɗauki mataki da wuri", bullets: ["Ku duba kowace dabba kowace rana", "Ku ware duk dabba mara lafiya", "Ku kira likitan dabbobi ko jami'in lafiyar dabbobi"] }
          ],
          tryIt: "Gobe a lokacin ciyarwa, ku duba kowace dabba da wannan jeri: tana farke, tana ci, tana tuƙa, idanu, hanci, gashi, numfashi, kashi. Ku rubuta layi ɗaya ga kowace dabba (ko ga kowane ɗaki na kaji). Ku yi alama a kan duk wadda za ku sa ido a kai ko ku kira likitan dabbobi game da ita.",
          youCanNow: "yin duba lafiya kowace rana da gane alamun dabba mara lafiya.",
          quickCheck: [
            { objective: "O1", q: "Wace alama ce ta gargaɗi a kaza?", options: ["Jan zakara mai haske", "Yin ƙwai kamar yadda ta saba", "Tana motsi kuma tana ci sosai", "Fukafukai a hargitse"], answer: 3, why: "Fukafukai a hargitse alamar gargaɗi ce; kaza mai lafiya tana motsi kuma jan zakararta yana haske." },
            { objective: "O1", q: "Kuna da aiki sosai, kuma kuna shirin duba dabbobinku sau ɗaya kawai a mako. Mene ne haɗarin?", options: ["Dabbobi za su ƙara ci", "Za a gano rashin lafiya a makare, lokacin da maganinta ya fi tsada kuma wataƙila ta yaɗu", "Nono zai ƙaru", "Babu haɗari"], answer: 1, why: "Kallo kowace rana yana gano rashin lafiya da wuri, lokacin da maganinta ya fi araha kuma kafin ta yaɗu." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Abinci da ruwa",
          minutes: 5,
          goal: "Tsara abinci da ruwa mai tsabta don dabbobinku a tsawon shekara, har da lokacin rani.",
          text: [
            "Ruwa shi ne na farko. Dabbobi suna buƙatar ruwa mai tsabta kowace rana, da ƙari a lokacin zafi; saniya mai tatsa tana shan ruwa fiye da wadda ba a tatsa, kuma nono yana raguwa da sauri idan babu isasshen ruwa. Ku tsaftace kwamin ruwa da kwanonin sha, ku ajiye su a inuwa, kuma kada ku taɓa barin tsuntsaye su sha ruwa mai datti da ke kwance.",
            "Shanu, awaki da tumaki suna buƙatar abinci mai yawan zare (roughage): ciyawa, ciyawar kiwo kamar Napier grass, Rhodes grass, desmodium ko lucerne, da ragowar amfanin gona kamar karan masara da ganyen wake. Dabbobin da ake tatsa, masu ciki ko masu girma suna kuma buƙatar abinci mai kuzari da furotin. Awaki suna kuma cin ganyen ƙananan bishiyoyi da itatuwa. Ku ba su gishiri ko dutsen lasa (mineral lick) kamar yadda likitan dabbobi ko jami'in faɗakarwar noma ya ba da shawara. Kajin ƙwai ko na nama suna buƙatar cikakken abinci; kajin ƙauye suna yawo neman abinci, amma suna ƙara ƙwai da girma idan aka ƙara musu ɗan hatsi, ganye da ruwa mai tsabta.",
            "Ku shirya don lokacin rani: ku shuka ciyawar kiwo, kuma ku ajiye busasshiyar ciyawa (hay), silage ko busassun ragowar amfanin gona lokacin da suke da yawa. Kada ku taɓa ba da abinci mai fumfuna: fumfuna yana iya ɗauke da aflatoxin, guba da ke cutar da dabbobi kuma tana shiga nono da ƙwai. Ku canja abinci a hankali cikin kwanaki da yawa don guje wa ciwon ciki."
          ],
          steps: ["Ku ba da ruwa mai tsabta kowace rana; ƙari a lokacin zafi da ga dabbobin da ake tatsa.", "Ku tsaftace kwamin ruwa da kwanonin sha; ku ajiye su a inuwa.", "Ku tsara abinci mai yawan zare: makiyaya, ciyawar kiwo da ragowar amfanin gona.", "Ku ƙara abinci mai kuzari da furotin ga dabbobin da ake tatsa, masu ciki da masu girma.", "Ku ajiye busasshiyar ciyawa, silage ko ragowar amfanin gona don lokacin rani.", "Ku zubar da abinci mai fumfuna; ku canja abinci a hankali."],
          words: [["Abinci mai yawan zare (roughage)", "abinci mai girma kamar ciyawa, busasshiyar ciyawa da ragowar amfanin gona."], ["Ciyawar kiwo (fodder)", "amfanin gonar da ake shukawa don ciyar da dabbobi, kamar Napier grass ko lucerne."], ["Silage", "ɗanyar ciyawar kiwo da aka ajiye a wurin da iska ba ta shiga don ta daɗe watanni."], ["Dutsen lasa (mineral lick)", "dunƙulen gishiri da ma'adinai da dabbobi ke lasa."]],
          slides: [
            { title: "Ruwa da farko", bullets: ["Ruwa mai tsabta kowace rana", "Ƙari a lokacin zafi da ga dabbobin da ake tatsa", "Kwanonin sha masu tsabta, a inuwa"] },
            { title: "Abinci", bullets: ["Abinci mai yawan zare: ciyawa, ciyawar kiwo, ragowar amfanin gona", "Ƙarin kuzari da furotin ga masu tatsa da masu girma", "Ma'adinai kamar yadda likitan dabbobi ya ce"] },
            { title: "Ku tsara ku kare", bullets: ["Ku ajiye busasshiyar ciyawa, silage ko ragowa don rani", "Kada ku taɓa ba da abinci mai fumfuna", "Ku canja abinci a hankali"] }
          ],
          tryIt: "Ku jera abincin da dabbobinku ke samu yanzu da inda kowanne ke fitowa. Ku yi alama a kan waɗanda ke ƙarewa a lokacin rani, ku rubuta hanya ɗaya ta ajiye ko shuka ƙari kafin lokacin. Ku duba kowane kwanon sha yau, ku tsaftace duk wanda ke da datti.",
          youCanNow: "tsara abinci da ruwa mai tsabta don dabbobinku a tsawon shekara.",
          quickCheck: [
            { objective: "O2", q: "Wanne daga cikin waɗannan abinci ne mai yawan zare ga shanu?", options: ["Karan masara da ganyen wake", "Gishiri kawai", "Dutsen lasa kawai", "Ruwa mai tsabta"], answer: 0, why: "Abinci mai yawan zare ya haɗa da ciyawa, ciyawar kiwo da ragowar amfanin gona kamar karan masara da ganyen wake." },
            { objective: "O2", q: "A ranar zafi, kwamin ruwan saniyarku mai tatsa babu komai kuma yana da datti. Me za ku yi?", options: ["Ku jira har yamma", "Ku ba ta ƙarin busasshen abinci a maimakon haka", "Ku tsaftace shi ku cika shi da ruwa mai tsabta, a inuwa", "Ku bar ta ta sha daga kududdufin ruwa mai kwance"], answer: 2, why: "Dabbobi suna buƙatar ruwa mai tsabta kowace rana, ƙari a lokacin zafi, kuma nono yana raguwa da sauri ba tare da shi ba." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Gidan dabbobi da tsafta",
          minutes: 5,
          goal: "Duba gidan dabbobinku kuma ku kafa dokokin tsafta uku don gonarku.",
          text: [
            "Gida mai kyau yana sa dabbobi su zauna a bushe, a inuwa, lafiya daga ɓarayi da namun daji masu farauta, kuma ba tare da cunkoso ba. Yana buƙatar iska mai kyau ba tare da iskar sanyi mai shiga ba, ƙasa bushe da ke zubar da ruwa, da isasshen wuri da kowace dabba za ta kwanta, ta ci, ta sha. Gida mai cunkoso, mai danshi da datti yana yaɗa cututtuka, tsutsotsi da matsalolin ƙafa.",
            "Ku tsaftace shi: ku kwashe kashi da shimfiɗar da ta jiƙe akai-akai (tana zama taki mai kyau), ku tsaftace kwanonin abinci da na sha, ku kuma yaƙi ƙudaje, ɓeraye da tsuntsayen daji. Ga kaji, ku yi amfani da busasshiyar shimfiɗa (litter) ku canja ta idan ta jiƙe. Ku wanke hannu bayan kun taɓa dabbobi, musamman marasa lafiya.",
            "Ku hana cuta shiga, kuma ku hana ta fita: ku ajiye sababbin dabbobi nesa da garkenku na tsawon lokacin da likitan dabbobi ya ce kafin ku haɗa su, kuma ku ajiye marasa lafiya a wani ɗaki dabam. Wasu cututtukan dabbobi suna kama mutane ma, kamar brucellosis da anthrax (cutar baƙin dauda). Idan dabba ta mutu farat ɗaya tana zubar da jini daga hanci ko wasu kafofi, kada ku buɗe gawarta; ku hana mutane da dabbobi kusantar ta, ku kira likitan dabbobi nan take. Ku rabu da matattun dabbobi yadda likitan dabbobi ko jami'in lafiyar dabbobi ya ce."
          ],
          steps: ["Ku duba gida: bushe, mai inuwa, mai iska, yana zubar da ruwa, ba cunkoso.", "Ku kwashe kashi da shimfiɗa mai jiƙe akai-akai.", "Ku tsaftace kwanonin abinci da na sha; ku yaƙi ƙudaje da ɓeraye.", "Ku ware sababbin dabbobi kafin ku haɗa su, kamar yadda likitan dabbobi ya ce.", "Ku ajiye ɗaki dabam don dabbobi marasa lafiya.", "Ku wanke hannu bayan taɓa dabbobi; ku kira likitan dabbobi game da mutuwa farat ɗaya."],
          words: [["Shimfiɗa (litter)", "busasshen abin shimfiɗa kamar gutsattsarin katako a ƙasan gidan kaji."], ["Keɓewa (quarantine)", "ajiye sababbin dabbobi ko marasa lafiya dabam don hana cuta yaɗuwa."], ["Cutar dabba zuwa mutum (zoonosis)", "cutar da za ta iya wucewa tsakanin dabbobi da mutane."], ["Gawa (carcass)", "jikin matacciyar dabba."]],
          slides: [
            { title: "Gida mai kyau", bullets: ["Bushe, mai inuwa, mai iska, ba iskar sanyi", "Ƙasa da ke zubar da ruwa", "Wurin kwanciya, ci da sha; lafiya daga ɓarayi"] },
            { title: "Ku tsaftace shi", bullets: ["Ku kwashe kashi da shimfiɗa mai jiƙe akai-akai", "Ku tsaftace kwanonin abinci da na sha", "Ku yaƙi ƙudaje, ɓeraye da tsuntsayen daji"] },
            { title: "Ku hana cuta shiga", bullets: ["Ana ware sababbin dabbobi kafin a haɗa su", "Ɗaki dabam don dabbobi marasa lafiya", "Ku wanke hannu bayan taɓa dabbobi"] },
            { title: "Mutuwa farat ɗaya", bullets: ["Kada ku buɗe gawar", "Ku hana mutane da dabbobi kusanta", "Ku kira likitan dabbobi nan take"] }
          ],
          sources: [FAO_BIOSEC],
          tryIt: "Ku zaga gidan dabbobinku ko garkensu da wannan jeri: bushe, mai inuwa, mai iska, yana zubar da ruwa, ba cunkoso, kwanonin sha masu tsabta. Ku rubuta abu ɗaya da za ku gyara a wannan makon, da dokokin tsafta uku ga duk wanda ke aiki da dabbobinku.",
          youCanNow: "duba gidan dabbobi ku tsaftace shi, ware dabbobi marasa lafiya da sababbi, da ɗaukar mataki lafiya idan dabba ta mutu farat ɗaya.",
          quickCheck: [
            { objective: "O3", q: "Me yasa za a kwashe kashi da shimfiɗa mai jiƙe akai-akai?", options: ["Don dabbobi su rage ci", "Don a rage abinci", "Gida mai datti da danshi yana yaɗa cututtuka, tsutsotsi da matsalolin ƙafa", "Don gidan ya yi kama da babu komai"], answer: 2, why: "Gida mai cunkoso, mai danshi da datti yana yaɗa cututtuka, tsutsotsi da matsalolin ƙafa." },
            { objective: "O3", q: "Ruwan sama ya shiga gidan kajinku kuma shimfiɗar ta jiƙe. Me za ku yi?", options: ["Ku canja shimfiɗar da ta jiƙe da busasshiya, ku gyara wurin da ruwa ke shiga", "Ku bar ta ta bushe da kanta", "Ku zuba abinci a kanta", "Ku fitar da tsuntsayen cikin ruwan sama"], answer: 0, why: "Kaji suna buƙatar busasshiyar shimfiɗa; ana canja wadda ta jiƙe kuma a gyara dalilin." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Kulawar yau da kullum",
        questions: [
          { objective: "O1", q: "Wace ce alamar saniya ko akuya mai lafiya?", options: ["Tsayawa ita kaɗai da kai a sunkuye", "Tuƙa yayin da take hutawa", "Idanu da hanci masu zubar ruwa", "Rashin shan ruwa"], answer: 1, why: "Tuƙa yana nuna cikinta yana aiki yadda ya kamata." },
          { objective: "O1", q: "Akuya ba ta ci kuma tana tsayawa nesa da garken. Me za ku fara yi?", options: ["Ku jira mako guda", "Ku sayar da ita nan take", "Ku ware ta ku tuntuɓi likitan dabbobi ko jami'in lafiyar dabbobi", "Ku ba ta kowane magani daga shago"], answer: 2, why: "Ware ta yana kare garken, kuma likitan dabbobi zai iya gano dalilin." },
          { objective: "O2", q: "Dusar masararku ta yi fumfuna. Me ya kamata ku yi?", options: ["Ku zubar da ita; kada ku ba dabbobi", "Ku ba kaji ita", "Ku haɗa ta da abinci mai kyau", "Ku ba shanun tatsa kawai"], answer: 0, why: "Fumfuna yana iya ɗauke da aflatoxin, wadda ke cutar da dabbobi kuma tana shiga nono da ƙwai." },
          { objective: "O2", q: "Ta yaya ya kamata ku shirya don lokacin rani?", options: ["Ku sayar da dukkan kwamin ruwa", "Ku ba da busasshiyar ciyawa mai fumfuna", "Ku daina ba da ruwa", "Ku shuka ciyawar kiwo ku ajiye busasshiyar ciyawa, silage ko ragowar amfanin gona"], answer: 3, why: "Abincin da aka ajiye yana riƙe dabbobi har lokacin rani ya wuce." },
          { objective: "O3", q: "Saniya ta mutu farat ɗaya tana zubar da jini daga hanci. Me za ku yi?", options: ["Ku buɗe ta don ganin dalili", "Kada ku buɗe ta; ku hana mutane kusanta, ku kira likitan dabbobi nan take", "Ku sayar da namanta da sauri", "Ku bar wa karnuka ita"], answer: 1, why: "Mutuwa farat ɗaya da zubar jini tana iya zama anthrax, wadda ke kama mutane; ba a buɗe gawar." }
        ]
      }
    },
    {
      name: "Babi na 2: Rigakafi da maganin cututtuka",
      lessons: [
        {
          objectives: ["O4"],
          title: "Jadawalin rigakafi tare da likitan dabbobi na yankinku",
          minutes: 5,
          goal: "Amince da rubutaccen jadawalin rigakafi tare da likitan dabbobi mai rajista, kuma ku kiyaye alluran rigakafi su yi aiki.",
          text: [
            "Alluran rigakafi suna hana manyan cututtukan dabbobi da yawa da kuɗi ƙasa da na magani nesa ba kusa ba. Waɗanne alluran rigakafi dabbobinku ke buƙata, da yaushe, ya dogara da ƙasarku, yankinku da cututtukan da ke akwai a can. Misalan da aka saba sun haɗa da cutar ƙafa da baki (foot-and-mouth), lumpy skin disease, anthrax da blackquarter a shanu; peste des petits ruminants (PPR) a awaki da tumaki; da cutar Newcastle, Gumboro da fowl pox a kaji. Likitan dabbobi ko jami'in lafiyar dabbobi da ya san yankinku ne kaɗai zai iya ba da jadawalin da ya dace.",
            "Ku roƙi likitan dabbobinku ya rubuta kalandar shekara: kowace allura, ga waɗanne dabbobi, a wane shekaru, da yaushe za a maimaita. Ku yi amfani da likitan dabbobi mai rajista ko ma'aikacin lafiyar dabbobi da aka horar. A Najeriya, Veterinary Council of Nigeria (Majalisar Likitocin Dabbobi ta Najeriya) ce ke ajiye rajistar likitocin dabbobi; a Kenya, Kenya Veterinary Board tana yi wa likitocin dabbobi da mataimakansu (para-vets) rajista; a Ghana, Veterinary Services Directorate ta Ma'aikatar Abinci da Noma (MoFA) ce ke gudanar da hidimomin lafiyar dabbobi da kamfe-kamfen rigakafi. Kamfe-kamfen gwamnati wani lokaci kyauta ne ko masu araha, don haka ku saurari sanarwa.",
            "Alluran rigakafi kayayyaki ne masu rai ko masu saurin lalacewa. Ku saya daga shagunan magungunan dabbobi masu lasisi (agrovets) kawai, ku duba ranar ƙarewa, ku ajiye su a sanyi (a akwatin sanyi ko firiji, nesa da rana) tun daga shago har zuwa dabba, kuma ku yi amfani da su yadda abin da ke jikin kwalin (label) da likitan dabbobi suka ce. Allurar rigakafi da ta yi zafi wataƙila ba za ta kare dabbobinku ba."
          ],
          steps: ["Ku tambayi likitan dabbobi mai rajista ko jami'in lafiyar dabbobi waɗanne cututtuka ne haɗari a yankinku.", "Ku karɓi rubutacciyar kalandar shekara: allura, dabbobi, shekaru, ranakun maimaitawa.", "Ku sayi alluran rigakafi daga agrovets masu lasisi kawai; ku duba ranar ƙarewa.", "Ku ajiye alluran rigakafi a sanyi tun daga shago har zuwa dabba.", "Ku yi amfani da su daidai yadda abin da ke jikin kwali da likitan dabbobi suka ce.", "Ku rubuta kowace allura: rana, dabbobi, allura, lambar batch, wanda ya yi ta."],
          words: [["Allurar rigakafi (vaccine)", "kayan da ke koya wa jikin dabba yaƙi da cuta kafin ta kamu."], ["Jadawalin rigakafi", "kalandar waɗanne alluran rigakafi za a yi, ga waɗanne dabbobi, da yaushe."], ["Sarkar sanyi (cold chain)", "ajiye alluran rigakafi a sanyi tun daga mai yin su har zuwa dabba."], ["PPR", "peste des petits ruminants, cuta mai kisa ta ƙwayar cuta (virus) a awaki da tumaki."]],
          slides: [
            { title: "Me yasa za a yi rigakafi", bullets: ["Rigakafi ya fi magani araha nesa ba kusa ba", "Waɗanne alluran rigakafi ya dogara da yankinku", "Likitan dabbobi na yankinku ne kaɗai zai tsara jadawalin"] },
            { title: "Misalan da aka saba", bullets: ["Shanu: foot-and-mouth, lumpy skin, anthrax, blackquarter", "Awaki da tumaki: PPR", "Kaji: cutar Newcastle, Gumboro, fowl pox"] },
            { title: "Ku yi amfani da masu rajista", bullets: ["Najeriya: Veterinary Council of Nigeria", "Kenya: Kenya Veterinary Board", "Ghana: Veterinary Services Directorate (MoFA)"] },
            { title: "Ku kiyaye alluran rigakafi su yi aiki", bullets: ["Agrovets masu lasisi; ku duba ranar ƙarewa", "Ku ajiye su a sanyi tun daga shago har zuwa dabba", "Ku bi abin da ke jikin kwali da likitan dabbobi"] }
          ],
          sources: [VCN],
          tryIt: "Ku kira ko ku ziyarci likitan dabbobi ko jami'in lafiyar dabbobi na yankinku ku tambaya: daga waɗanne cututtuka ya kamata in yi wa dabbobina rigakafi a nan, kuma yaushe? Ku rubuta amsarsu a matsayin kalandar watanni 12, kuma ku ajiye lambar likitan dabbobin a wayarku.",
          youCanNow: "samun jadawalin rigakafi daga likitan dabbobi mai rajista, da ajiye alluran rigakafi a sanyi don su yi aiki.",
          quickCheck: [
            { objective: "O4", q: "Wace ce cutar kaji da ake hanawa da allurar rigakafi?", options: ["East Coast fever", "Cutar Newcastle", "Brucellosis a awaki", "Ruɓewar ƙafa (foot rot)"], answer: 1, why: "Cutar Newcastle, Gumboro da fowl pox cututtukan kaji ne da aka saba, waɗanda alluran rigakafi ke hanawa." },
            { objective: "O4", q: "Likitan dabbobinku ya yi alluran rigakafi na farko amma bai rubuta komai ba. Me za ku nema?", options: ["Allurar rigakafi mafi araha", "Babu komai; za ku tuna", "Allurar rigakafi ga kowace cuta a duniya", "Rubutacciyar kalandar shekara: kowace allura, waɗanne dabbobi, a wane shekaru da yaushe za a maimaita"], answer: 3, why: "Rubutacciyar kalanda daga likitan dabbobi tana sa kowace allura ta kasance a kan lokaci." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kare kaji daga cututtuka da cutar Newcastle",
          minutes: 5,
          goal: "Kafa dokokin kare gona daga cututtuka da za su hana cutar Newcastle da sauran cututtuka shiga garken kajinku.",
          text: [
            "Cutar Newcastle tana ɗaya daga cikin cututtukan kaji mafi tsanani a Afirka. Hukumar Lafiyar Dabbobi ta Duniya (WOAH) ta bayyana alamomi kamar haki, tari da atishawa; alamun jijiyoyi kamar rawar jiki, shanyewa da karkacewar wuya; gudawa; da raguwar ƙwai. Mutuwa za ta iya kai kashi 100 cikin 100 na garke, kuma kusan dukkan tsuntsayen garke za su iya kamuwa cikin 'yan kwanaki.",
            "WOAH ta bayyana cewa tana yaɗuwa ta hanyar taɓa tsuntsaye marasa lafiya da kashinsu, da kuma ta abinci, ruwa, kayan aiki da tufafin da cutar ta ɓata. Shi yasa kare gona daga cututtuka (biosecurity), wato matakai masu sauƙi na yau da kullum da ke hana ƙwayoyin cuta shiga, yake da muhimmanci kamar allurar rigakafi. Jagorar FAO ga ƙananan garken kaji a Kenya ta jaddada cewa yawancin waɗannan matakai ba sa ci kuɗi da yawa, ko ba sa ci kwata-kwata.",
            "Ku yi wa dukkan garken rigakafin cutar Newcastle bisa jadawalin da likitan dabbobinku ya bayar. Ga kajin ƙauye, FAO ta bayyana alluran rigakafi masu jure zafi (kamar I-2) da za a iya bayarwa ta digon ido; ku tambayi jami'in lafiyar dabbobi abin da ake samu. Idan tsuntsaye da yawa suka yi rashin lafiya ko suka mutu farat ɗaya, ku kulle garken a ciki, ku sanar da likitan dabbobi ko jami'in lafiyar dabbobi nan take, kuma kada ku sayar ko ku motsa tsuntsaye. WOAH ta ba da shawarar barin gidan da aka tsaftace babu kaji na kwanaki 21 kafin a sake saka sababbi bayan ɓarkewar cuta."
          ],
          steps: ["Ku hana baƙi shiga gidan kaji; ku wanke hannu ku yi amfani da kwanon maganin ƙafa ko takalma na dabam.", "Ku sayi tsuntsaye daga majiyoyi amintattu masu lafiya kawai; ku fara ware sababbin tsuntsaye.", "Ku hana tsuntsayen daji, ɓeraye da kajin wasu mutane kusantar abinci da ruwa.", "Ku tsaftace ku kashe ƙwayoyin cuta a kwanonin sha, na abinci da akwatunan kaji akai-akai.", "Ku yi wa dukkan garken rigakafi bisa jadawalin likitan dabbobi.", "Idan tsuntsaye suka yi rashin lafiya ko suka mutu farat ɗaya: ku kulle garken, ku kira likitan dabbobi, kada ku sayar ko ku motsa tsuntsaye."],
          words: [["Kare gona daga cututtuka (biosecurity)", "matakai masu sauƙi na yau da kullum da ke hana ƙwayoyin cuta shiga gona da hana su yaɗuwa."], ["Cutar Newcastle", "cutar kaji ta ƙwayar cuta (virus) mai saurin yaɗuwa da za ta iya kashe dukkan garke."], ["Kwanon maganin ƙafa (foot dip)", "tire mai maganin kashe ƙwayoyin cuta da mutane ke takawa kafin su shiga gidan dabbobi."], ["Allurar rigakafi mai jure zafi (thermostable vaccine)", "allurar rigakafi da ta fi jure zafi, mai amfani a ƙauye; har yanzu dole a ajiye ta a sanyi gwargwadon iko."]],
          slides: [
            { title: "Cutar Newcastle (WOAH)", bullets: ["Haki, tari, karkacewar wuya, gudawa", "Raguwar ƙwai; mutuwa har kashi 100 cikin 100", "Dukkan garke yana kamuwa cikin kwanaki"] },
            { title: "Yadda take yaɗuwa", bullets: ["Tsuntsaye marasa lafiya da kashinsu", "Abinci, ruwa, kayan aiki da tufafin da cutar ta ɓata", "Kare gona yana hana ta; yawancinsa kyauta ne"] },
            { title: "Dokokin kare gona daga cututtuka", bullets: ["Ku rage baƙi; ku wanke hannu; kwanon maganin ƙafa", "Ana fara ware sababbin tsuntsaye", "Ku hana tsuntsayen daji da ɓeraye; ku tsaftace kwanonin sha"] },
            { title: "Ku yi rigakafi ku yi sauri", bullets: ["Dukkan garke, bisa jadawalin likitan dabbobi", "Kajin ƙauye: ku tambayi game da allurar digon ido", "Mutuwa farat ɗaya: ku kulle, ku kira likita, kada ku sayar"] }
          ],
          sources: [WOAH_ND, FAO_ND_VILLAGE, FAO_BIOSEC],
          tryIt: "Ku rubuta dokoki biyar na kare kajinku daga cututtuka ku liƙa su a ƙofar gidan kaji. Sannan ku tambayi likitan dabbobi ko jami'in lafiyar dabbobi yaushe ya kamata a sake yi wa garkenku rigakafin cutar Newcastle, ku ƙara shi a kalandarku.",
          youCanNow: "kare garken kaji daga cutar Newcastle ta hanyar kare gona daga cututtuka da allurar rigakafi, da ɗaukar mataki da sauri idan tsuntsaye suka mutu.",
          quickCheck: [
            { objective: "O5", q: "Mene ne kare gona daga cututtuka (biosecurity)?", options: ["Wani nau'in allurar rigakafi", "Wani irin kaza", "Ƙarin abinci", "Matakai masu sauƙi na yau da kullum da ke hana ƙwayoyin cuta shiga gona"], answer: 3, why: "Kare gona daga cututtuka matakai ne na yau da kullum da ke hana ƙwayoyin cuta shiga, kuma yawancinsu ba sa ci kuɗi da yawa ko kwata-kwata." },
            { objective: "O5", q: "Maƙwabci wanda tsuntsayensa suka yi rashin lafiya yana son ararar tiren ƙwai da kwanonin abincinku. Me za ku yi?", options: ["Ku ba shi aro ku sake amfani da su idan sun dawo", "Kada ku raba kayan aiki, domin ƙwayoyin cuta suna yaɗuwa a kansu", "Ku ba shi aro na kwana ɗaya kawai", "Ku musanya tsuntsayenku a maimakon haka"], answer: 1, why: "Cutar Newcastle tana yaɗuwa ta abinci, ruwa, kayan aiki da tufafin da cutar ta ɓata." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ƙwayoyin cuta masu rayuwa a jiki, bayanai da lokacin kiran likita",
          minutes: 6,
          goal: "Tsara yaƙi da ƙwayoyin cuta masu rayuwa a jiki tare da likitan dabbobi, ku ajiye bayanan magani, kuma ku san alamun da ke buƙatar likitan dabbobi nan take.",
          text: [
            "Tsutsotsin da ke cikin hanji, da kaska, ƙwarƙwata (mites) da ƙuma a waje, suna shan jini, suna rage girma kuma suna yaɗa cututtuka; kaska suna yaɗa East Coast fever a shanu a Gabashin Afirka. Alamun tsutsotsi sun haɗa da rashin girma, gashi mai kaushi, babban ciki, gudawa da fatar ido ko dasashi mara launi (fari-fari). Ku rage waɗannan ƙwayoyin cuta da gida mai tsabta da bushe, da canja wa dabbobin kiwo sabon makiyaya, da rashin cunkoso. Likitan dabbobinku zai iya faɗa muku yaushe za a ba da maganin tsutsotsi, a tsoma su a maganin kaska ko a fesa musu, da wane magani. Koyaushe ku yi amfani da yawan maganin da ke jikin kwali ko wanda likitan dabbobi ya bayar: ƙasa da shi yana sa tsutsotsi da kaska su daina jin maganin, kuma ƙari a kansa zai iya cutar da dabbar.",
            "Magunguna suna barin saura a jiki. Kowane magani yana da lokacin jira (withdrawal period): lokacin bayan magani kafin a iya sayarwa ko cin nono, ƙwai ko naman wannan dabbar. FAO ta jaddada yin aiki tare da likitan dabbobinku kan tsarin lafiya da rubuta kowane magani tare da lokacin jirarsa. Kada ku taɓa amfani da maganin ƙwayoyin cuta (antibiotics) don sa dabbobi su yi girma da sauri, ko ba tare da shawarar likitan dabbobi ba.",
            "Bayanai suna mayar da tsammani zuwa sani. Ga kowace dabba ko garken kaji, ku rubuta: shaidarta, haihuwa, alluran rigakafi, magunguna (rana, magani, wanda ya ba da shi, ranar da lokacin jira zai ƙare), nauyi ko abin da take samarwa, da mutuwa. Littafin rubutu ya isa; haka ma takardar lissafi (spreadsheet) a waya. Ku kira likitan dabbobi nan take don: mutuwa farat ɗaya, dabbobi da yawa marasa lafiya a lokaci ɗaya, dabbar da ba ta ci ba fiye da kwana ɗaya, haihuwa mai wahala, zubar jini mai yawa, alamun jijiyoyi, ko duk wata cuta da gwamnatinku ta ce dole a sanar da ita."
          ],
          steps: ["Ku roƙi likitan dabbobinku tsarin yaƙi da ƙwayoyin cuta masu rayuwa a jiki: yaushe za a ba da maganin tsutsotsi da tsoma ko fesa maganin kaska, da da wane magani.", "Ku yi amfani da yawan maganin da ke jikin kwali ko daga likitan dabbobi, ba na tsammani ba.", "Ku kai dabbobin kiwo sabon makiyaya; ku ajiye gida a bushe.", "Ku rubuta kowane magani tare da ranar da lokacin jira zai ƙare.", "Kada ku sayar da nono, ƙwai ko nama kafin lokacin jira ya ƙare.", "Ku kira likitan dabbobi nan take don mutuwa farat ɗaya, dabbobi da yawa marasa lafiya, haihuwa mai wahala ko alamun jijiyoyi."],
          words: [["Ƙwayar cuta mai rayuwa a jiki (parasite)", "tsutsa, kaska, ƙwarƙwata ko ƙuma da ke rayuwa a kan dabba ko a cikinta kuma tana cutar da ita."], ["Maganin tsutsotsi (deworming)", "ba da magani don kashe tsutsotsi a cikin dabba."], ["Lokacin jira (withdrawal period)", "lokacin bayan magani kafin a iya sayarwa ko cin nono, ƙwai ko nama."], ["Daina jin magani (resistance)", "lokacin da tsutsotsi, kaska ko ƙwayoyin cuta suka tsira daga maganin da a da yake kashe su."]],
          slides: [
            { title: "Ƙwayoyin cuta masu rayuwa a jiki", bullets: ["Tsutsotsi: rashin girma, babban ciki, fatar ido mara launi", "Kaska suna yaɗa cuta, misali East Coast fever", "Gida mai tsabta, sabon makiyaya, ba cunkoso"] },
            { title: "Ku yi magani yadda ya kamata", bullets: ["Tsarin likitan dabbobi don maganin tsutsotsi da kaska", "Yawan magani daga kwali ko likita; ba tsammani ba", "Yawan magani mara daidai yana sa a daina jin magani"] },
            { title: "Lokacin jira", bullets: ["Lokaci kafin a iya sayar da nono, ƙwai ko nama", "Ku rubuta ranar ƙarewa ga kowane magani", "Babu maganin ƙwayoyin cuta ba tare da shawarar likita ba"] },
            { title: "Ku kira likitan dabbobi nan take", bullets: ["Mutuwa farat ɗaya; dabbobi da yawa marasa lafiya tare", "Rashin ci fiye da kwana ɗaya; haihuwa mai wahala", "Zubar jini, alamun jijiyoyi, cututtukan da dole a sanar"] }
          ],
          sources: [FAO_PRUDENT, WOAH_ND],
          tryIt: "Aikin ƙarshe: ku rubuta tsarin lafiyarku mai shafi ɗaya. Ku haɗa da duban ku na kowace rana, tsarin abinci da ruwa, dokokin gidan dabbobi, kalandar rigakafi daga likitan dabbobinku, dokokin kare gona daga cututtuka, tsarin yaƙi da ƙwayoyin cuta masu rayuwa a jiki, bayanan da za ku ajiye, da alamun da ke nufin ku kira likitan dabbobi, tare da sunan likitan da lambar wayarsa a sama.",
          youCanNow: "yaƙi da ƙwayoyin cuta masu rayuwa a jiki tare da likitan dabbobi, ajiye bayanan magani tare da lokutan jira, da sanin lokacin kiran likitan dabbobi.",
          quickCheck: [
            { objective: "O6", q: "Wace cuta ce kaska ke yaɗawa a shanu a Gabashin Afirka?", options: ["East Coast fever", "Cutar Newcastle", "Fowl pox", "PPR"], answer: 0, why: "Kaska suna yaɗa East Coast fever a shanu a Gabashin Afirka." },
            { objective: "O6", q: "Kun yi wa akuya magani yau. Me za ku rubuta a cikin bayanai?", options: ["Babu komai, idan akuyar ta yi kama da ta warke", "Farashin maganin kawai", "Rana, magani, wanda ya ba da shi, da yaushe lokacin jira zai ƙare", "Sunan maƙwabci"], answer: 2, why: "Rubuta kowane magani tare da lokacin jirarsa yana sa nono da nama su zama lafiyayyu don sayarwa da ci." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Rigakafi da maganin cututtuka",
        questions: [
          { objective: "O4", q: "Wa ya kamata ya tsara jadawalin rigakafin dabbobinku?", options: ["Maƙwabci a wata ƙasa", "Hoton talla a shagon abincin dabbobi", "Likitan dabbobi mai rajista ko jami'in lafiyar dabbobi da ya san yankinku", "Kowa a intanet"], answer: 2, why: "Waɗanne alluran rigakafi ake buƙata, da yaushe, ya dogara da cututtukan da ke akwai a yankinku." },
          { objective: "O4", q: "Kun sayi allurar rigakafi kuka yi tafiyar awa uku zuwa gida cikin rana. Mene ne haɗarin?", options: ["Zafi zai iya lalata allurar, ta kasa kare dabbobinku", "Za ta ƙara ƙarfi", "Babu haɗari kwata-kwata", "Za ta zama maganin tsutsotsi"], answer: 0, why: "Dole a ajiye alluran rigakafi a sanyi tun daga shago har zuwa dabba." },
          { objective: "O5", q: "Wace ce alamar cutar Newcastle a kaji?", options: ["Jan zakara mafi haske", "Ƙarin ƙwai", "Girma da sauri", "Karkacewar wuya, haki da mutuwa farat ɗaya"], answer: 3, why: "WOAH ta jera alamun numfashi da na jijiyoyi, raguwar ƙwai da yawan mutuwa." },
          { objective: "O5", q: "Tsuntsayenku da yawa sun mutu farat ɗaya. Me ya kamata ku yi?", options: ["Ku sayar da sauran da sauri a kasuwa", "Ku kulle garken, ku kira likitan dabbobi, kada ku motsa ko ku sayar da tsuntsaye", "Ku ba maƙwabta matattun tsuntsayen", "Ku sayi sababbin tsuntsaye a ranar"], answer: 1, why: "Motsawa ko sayar da tsuntsaye yana yaɗa cuta; dole likitan dabbobi ya gano dalilin." },
          { objective: "O6", q: "Mene ne lokacin jira (withdrawal period)?", options: ["Lokaci kafin a iya sayarwa ko cin nono, ƙwai ko naman dabbar da aka yi wa magani", "Hutun manoma", "Lokacin da allurar rigakafi ke ɗauka tana aiki", "Lokacin busar da hatsi"], answer: 0, why: "Yana hana sauran magani shiga abinci." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Lafiyar Dabbobin Kiwo da Kula da Su",
    questions: [
      { objective: "O1", q: "Yaushe ne lokaci mai kyau don duba lafiya na kowace rana?", options: ["Sau ɗaya a wata", "Sai dabba ta mutu kawai", "A lokacin ciyarwa ko tatsa", "Ba a taɓa ba; dabbobi suna kula da kansu"], answer: 2, why: "Dabbobi suna taruwa kuma suna motsi a lokacin ciyarwa ko tatsa." },
      { objective: "O1", q: "Kaza mai lafiya yawanci tana da:", options: ["Jan zakara mara launi da ya tsuke", "Fukafukai a hargitse", "Wuya a karkace", "Jan zakara mai haske, kuma tana motsi"], answer: 3, why: "Jan zakara mai haske da motsi alamun lafiya ne." },
      { objective: "O1", q: "Wace ce alamar gargaɗi a saniyar nono?", options: ["Raguwar nono farat ɗaya", "Tuƙa", "Idanu masu haske", "Cin abinci sosai"], answer: 0, why: "Raguwar nono farat ɗaya sau da yawa tana nufin rashin lafiya." },
      { objective: "O2", q: "Mene ne na farko wajen ciyar da dabbobi?", options: ["Ƙarin abinci masu tsada", "Ruwa mai tsabta kowace rana", "Dutsen lasa kawai", "Busasshiyar ciyawa mai fumfuna"], answer: 1, why: "Ba tare da isasshen ruwa mai tsabta ba, lafiya da abin da dabba ke samarwa suna raguwa da sauri." },
      { objective: "O2", q: "Napier grass da lucerne misalai ne na:", options: ["Alluran rigakafi", "Magungunan tsutsotsi", "Ciyawar kiwo (fodder)", "Shimfiɗa (litter)"], answer: 2, why: "Amfanin gona ne da ake shukawa don ciyar da dabbobi." },
      { objective: "O2", q: "Me yasa ake canja abincin dabbobi a hankali cikin kwanaki da yawa?", options: ["Don guje wa ciwon ciki", "Domin sabon abinci koyaushe mara kyau ne", "Don a rage ruwa", "Ba shi da muhimmanci"], answer: 0, why: "Canjin abinci farat ɗaya yana dagula narkewar abinci." },
      { objective: "O3", q: "Gidan dabbobi mai kyau shi ne:", options: ["Mai cunkoso da ɗumi", "Mai danshi da duhu", "Bushe, mai inuwa, mai iska kuma ba cunkoso", "A buɗe ga ɓarayi"], answer: 2, why: "Gida bushe, mai iska, mara cunkoso yana rage cututtuka." },
      { objective: "O3", q: "Kun sayi sababbin awaki uku. Me ya kamata ku yi kafin ku haɗa su da garkenku?", options: ["Ku haɗa su nan take", "Ku ware su na tsawon lokacin da likitan dabbobi ya ce", "Ku sayar da tsofaffin awakinku", "Ku ba su maganin ƙwayoyin cuta don kariya kawai"], answer: 1, why: "Ware sababbin dabbobi yana hana su shigo da cuta." },
      { objective: "O3", q: "Zoonosis ita ce:", options: ["Wani nau'in ciyawar kiwo", "Allurar rigakafi", "Cutar da za ta iya wucewa tsakanin dabbobi da mutane", "Gidan kaji"], answer: 2, why: "Brucellosis da anthrax misalai ne." },
      { objective: "O4", q: "PPR babbar cuta ce ta:", options: ["Awaki da tumaki", "Kaji", "Masara", "Kifi"], answer: 0, why: "Peste des petits ruminants tana kama awaki da tumaki." },
      { objective: "O4", q: "A Najeriya, wace hukuma ce ke ajiye rajistar likitocin dabbobi?", options: ["Hukumar Kula da Yanayi ta Najeriya (Nigerian Meteorological Agency)", "Veterinary Council of Nigeria", "Babban Banki", "Kamfanin abincin dabbobi"], answer: 1, why: "VCN ce ke yi wa likitocin dabbobi rajista." },
      { objective: "O4", q: "A ina ya kamata ku sayi alluran rigakafi?", options: ["Daga kowa a bakin hanya", "Ta intanet daga masu sayarwa da ba a sani ba", "Daga tsohon firijin maƙwabci", "Daga agrovet mai lasisi, kuna duba ranar ƙarewa"], answer: 3, why: "Masu sayarwa masu lasisi da alluran rigakafi da ba su ƙare ba sun fi yiwuwa su yi aiki." },
      { objective: "O5", q: "A cewar WOAH, cutar Newcastle tana yaɗuwa ta:", options: ["Hasken rana kawai", "Ruwa mai tsabta", "Tsuntsayen da aka yi wa rigakafi kawai", "Tsuntsaye marasa lafiya, kashinsu, da abinci, ruwa, kayan aiki da tufafin da cutar ta ɓata"], answer: 3, why: "Taɓawa kai tsaye da kayan da cutar ta ɓata suna yaɗa ƙwayar cutar." },
      { objective: "O5", q: "Wane mataki ne na kare gona daga cututtuka mai araha?", options: ["Barin baƙi su ratsa gidan kaji", "Raba akwatunan kaji da wasu gonaki ba tare da tsaftacewa ba", "Wanke hannu da amfani da kwanon maganin ƙafa kafin shiga", "Barin tsuntsayen daji su ci daga kwanon abinci"], answer: 2, why: "Tsafta mai sauƙi tana hana ƙwayoyin cuta shiga." },
      { objective: "O5", q: "Ga kajin ƙauye, FAO ta bayyana alluran rigakafin Newcastle da:", options: ["Ake haɗawa da siminti", "Na shanu ne kawai", "Ba a taɓa buƙatar su ba", "Ake bayarwa ta digon ido kuma suka fi jure zafi"], answer: 3, why: "Alluran rigakafi masu jure zafi kamar I-2 sun dace da garken kajin ƙauye." },
      { objective: "O5", q: "Bayan ɓarkewar cutar Newcastle, WOAH ta ba da shawarar barin gidan da aka tsaftace babu kaji na:", options: ["Kwana 1", "Kwanaki 21", "Awa 2", "Za a iya sake saka kaji nan take"], answer: 1, why: "WOAH ta jera kwanaki 21 babu kaji kafin a sake saka sababbi." },
      { objective: "O6", q: "Wace ce alamar tsutsotsi a awaki?", options: ["Girma da sauri da gashi mai ƙyalli", "Fatar ido ja mai haske", "Cin abinci fiye da yadda aka saba da ƙara nauyi", "Rashin girma, babban ciki da fatar ido mara launi"], answer: 3, why: "Tsutsotsi suna shan jini da sinadaran abinci, suna kawo waɗannan alamomi." },
      { objective: "O6", q: "Ta yaya za ku yanke yawan maganin tsutsotsi?", options: ["Ku yi tsammani da ido", "Ku yi amfani da rabi don ajiye kuɗi", "Ku bi abin da ke jikin kwali ko likitan dabbobinku", "Ku ninka shi don ku tabbata"], answer: 2, why: "Yawan magani mara daidai yana cutar da dabbobi ko yana sa a daina jin magani." },
      { objective: "O6", q: "An yi wa saniya magani jiya kuma lokacin jira bai ƙare ba. Yaya batun nononta?", options: ["Ku sayar da shi kamar yadda aka saba", "Kada ku sayar ko ku sha shi har lokacin jira ya ƙare", "Ku haɗa shi da wani nono", "Ku tafasa shi ku sayar"], answer: 1, why: "Nono a lokacin jira zai iya ɗauke da sauran magani." },
      { objective: "O6", q: "Wane yanayi ne ke nufin ku kira likitan dabbobi nan take?", options: ["Dabbobi da yawa marasa lafiya a lokaci ɗaya", "Dabba tana tuƙa", "Kaji suna yin ƙwai kamar yadda suka saba", "Ɗan maraƙi yana sha sosai"], answer: 0, why: "Dabbobi da yawa marasa lafiya za su iya nufin cuta da ke yaɗuwa." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      2,
      3,
      6,
      7,
      9,
      11,
      12,
      16,
      19
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe na tsarin ku sake dubawa.",
    criteria: [
      {
        name: "Duba na kowace rana",
        objective: "O1",
        notYet: "Babu duba na kowace rana, ko ba a jera alamun gargaɗi ba.",
        meets: "Duba na kowace rana a lokacin ciyarwa ko tatsa, tare da manyan alamun gargaɗi da abin da za a yi.",
        exceeds: "An daidaita duban ga kowane irin dabbar da ake kiwo."
      },
      {
        name: "Abinci, ruwa da gidan dabbobi",
        objective: "O2",
        notYet: "Babu tsarin lokacin rani, ko babu dokokin gidan dabbobi da tsafta.",
        meets: "Abinci da ruwa mai tsabta a tsawon shekara tare da tsarin lokacin rani, da dokoki biyu na gidan dabbobi da tsafta.",
        exceeds: "Ya haɗa da shuka ko ajiye ciyawar kiwo da ware sababbin dabbobi."
      },
      {
        name: "Jadawalin rigakafi",
        objective: "O4",
        notYet: "Babu jadawali, ko wanda ba a amince da shi da likitan dabbobi ba.",
        meets: "Rubutaccen jadawali daga likitan dabbobi mai rajista, tare da yadda ake ajiye alluran rigakafi a sanyi kuma kafin su ƙare.",
        exceeds: "Ya ambaci kamfe-kamfen gwamnati da sunan likitan dabbobi da lambar wayarsa."
      },
      {
        name: "Kare gona daga cututtuka",
        objective: "O5",
        notYet: "Babu dokokin kare gona daga cututtuka.",
        meets: "Dokokin kare gona daga cututtuka, kuma ga kaji, rigakafin Newcastle da matakan da za a ɗauka idan tsuntsaye suka mutu farat ɗaya.",
        exceeds: "Ana amfani da matakai masu araha kamar wanke hannu da kwanon maganin ƙafa."
      },
      {
        name: "Ƙwayoyin cuta masu rayuwa a jiki, bayanai da likitan dabbobi",
        objective: "O6",
        notYet: "Babu bayanai, ko an yi tsammanin yawan magani.",
        meets: "An tsara yaƙi da ƙwayoyin cuta masu rayuwa a jiki tare da likitan dabbobi, akwai bayanan magani tare da lokutan jira, da alamun da ke nufin a kira likitan dabbobi nan take.",
        exceeds: "Bayanan sun kuma haɗa da haihuwa, nauyi ko abin da ake samarwa, da mutuwa."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka sami \"Ya cika\" ko \"Ya wuce\" a kowane layin rubric na tsarin lafiya",
      "Masu koyo da suka ce suna da rubutaccen jadawalin rigakafi daga likitan dabbobi mai rajista cikin kwanaki 60 (binciken biyo baya)",
      "Canjin mutuwar dabbobi ko tsuntsaye, da na yawan nono ko ƙwai, da masu koyo suka bayar bayan watanni shida",
      "Masu koyo da suka ce suna ajiye bayanan magani kuma suna bin lokutan jira"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Littafin rubutu ko takardar lissafi (spreadsheet) a waya don bayanai",
      "Lambar wayar likitan dabbobi mai rajista ko jami'in lafiyar dabbobi",
      "Damar zuwa wurin dabbobin mai koyo don duba na kowace rana",
      "Kusan minti 60 gaba ɗaya, a gajerun zama, da ƙarin lokaci don rubuta tsarin lafiya"
    ],
    facilitatorNotes: [
      "A ƙungiyar manoma: ku yi gwajin farko tare, sannan ku gwada duba lafiya na kowace rana a kan dabbobi na gaske.",
      "Ku gayyaci likitan dabbobi mai rajista ko jami'in lafiyar dabbobi don ya bayyana cututtukan yankin da alluran rigakafi; kada ku ba da yawan magani da kanku.",
      "Ku wanke hannu bayan taɓa dabbobi, kuma kada ku taɓa taɓa dabbobin da suka mutu farat ɗaya suna zubar da jini.",
      "Ku taimaki kowane mai koyo ya rubuta sunan likitan dabbobinsa da lambar wayarsa kafin ya tafi.",
      "Ku ba da maki ga tsarin lafiya da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
