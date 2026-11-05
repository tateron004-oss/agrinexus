"use strict";

// Koach Learn course, Hausa (ha) translation of workforce/workforce-food-handler.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "workforce-food-handler-ha",
  lang: "ha",
  translationOf: "workforce-food-handler",
  category: "Workforce Development",
  name: "Mai Sarrafa Abinci da Shirin Jarabawar ServSafe",
  skills: "Wanke hannu yadda ya kamata, Hana yaɗuwar ƙwayoyin cuta tsakanin abinci, Kiyaye abinci daga yankin zafin haɗari, Dafa abinci zuwa zafin da ya dace, Kula da abubuwan da ke jawo alerji, Tsaftacewa da kashe ƙwayoyin cuta",
  outcome: "sarrafa abinci lafiya a lokacin aiki a gidan abinci ko wurin ba da abinci: wanke hannuwanku yadda ya kamata, hana yaɗuwar ƙwayoyin cuta, kiyaye abinci daga yankin zafin haɗari, dafa abinci da ajiye shi a zafin da ya dace, kare baƙi masu alerji, tsaftace wurin aiki da kashe ƙwayoyin cuta a kansa, kuma ku kasance a shirye don zama jarabawar mai sarrafa abinci.",
  about: [
    "Wannan kwas ɗin na duk wanda yake aiki da abinci ko yake son yi ne: ma'aikatan gidajen abinci da na abinci mai sauri (fast food), ma'aikatan kicin na makaranta da na kantin abinci, masu dafa abinci don biki, masu motar sayar da abinci, ma'aikatan gidan burodi da na shagon nama (deli), da masu shirin samun katin mai sarrafa abinci (food handler card) ko jarabawar ServSafe.",
    "Za ku koyi muhimman ƙwarewar tsaron abinci da kowace jarabawar mai sarrafa abinci ke tambaya a kai: wanke hannu da tsaftar jiki, yaɗuwar ƙwayoyin cuta tsakanin abinci, kula da lokaci da zafi, zafin dafa abinci, abubuwan da ke jawo alerji, da bambancin tsaftacewa da kashe ƙwayoyin cuta. Tambayoyin atisaye namu ne, mun rubuta su don su taimaka muku ku yi tunani kamar jarabawar; ba a kwafo su daga wata jarabawa ta gaske ba.",
    "Kowane darasi yana ɗaukar kusan minti biyar. Ku karanta darasin, ku kalli hotunan bayani (slides), sannan ku yi aikin \"Gwada yanzu\". Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe. Jihohi da ƙananan hukumomi (county) ne ke kafa dokokin katin mai sarrafa abinci, kuma ana sabunta dokokin abinci lokaci zuwa lokaci, don haka ku tambayi ofishin lafiya na yankinku game da dokokin wurin da kuke aiki."
  ],
  finalTask: "Ku rubuta \"Jerin Duba Aiki Lafiya\" (Safe Shift Checklist) mai shafi ɗaya don kicin na gaske ko na atisaye: yaushe da yadda za a wanke hannu, yadda za a ajiye ɗanyen abinci da abincin da ake ci kai tsaye don hana yaɗuwar ƙwayoyin cuta, zafin ajiye abinci mai sanyi, zafin ajiye abinci mai zafi da zafin dafa abinci da za ku duba da ma'aunin zafi (thermometer), matakan sanyaya abinci, abin da za ku yi idan baƙo ya ce yana da alerji, matakan tsaftacewa da kashe ƙwayoyin cuta a teburin shiri, da alamomin rashin lafiya da dole ku faɗa. Sannan ku nemo dokar katin mai sarrafa abinci ta jiharku ko county ɗinku ku rubuta ta a sama.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Sababbin ma'aikatan abinci da na yanzu, da masu neman aiki: ma'aikatan gidajen abinci da na abinci mai sauri, ma'aikatan kicin na makaranta da na kantin abinci, masu dafa abinci don biki, ma'aikatan motar abinci, gidan burodi da shagon nama, da masu shirin samun katin mai sarrafa abinci ko jarabawar ServSafe.",
    startingPoint: "Suna iya dafa ko shirya abinci a gida, kuma wataƙila sun taɓa aiki a kicin, amma ba su koyi dokokin wurin ba da abinci game da wanke hannu, tsarin ajiya, zafin ajiye abinci da na dafawa, abubuwan da ke jawo alerji da kashe ƙwayoyin cuta ba.",
    gap: "Masu ɗaukar aiki da ofisoshin lafiya da yawa suna buƙatar katin mai sarrafa abinci jim kaɗan bayan an ɗauki mutum aiki, kuma kuskure ɗaya game da zafi, yaɗuwar ƙwayoyin cuta ko alerji zai iya sa baƙi su yi rashin lafiya. Masu koyo suna buƙatar waɗannan ɗabi'u da lambobi don su sami aiki, su ci jarabawa, kuma su kare baƙi.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli (kusan aji 6)",
      "Na'urori: waya ko kwamfutar da ake rabawa; ma'aunin zafin abinci yana taimakawa amma ba dole ba ne",
      "Lokaci: darussa na kusan minti biyar da suka dace da lokutan aiki",
      "Dokoki sun bambanta daga jiha zuwa jiha da county zuwa county, kuma lambobin wurin ba da abinci sun bambanta da shawarwarin dafa abinci a gida; masu koyo su tambayi ofishin lafiya na yankinsu",
      "Ilimi na gaba ɗaya ne kawai: ba ya maye gurbin kwas ɗin mai sarrafa abinci da aka amince da shi ko takardar shaidar manaja"
    ],
    prerequisites: "Babu."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "A lokacin aiki a kicin", action: "wanke hannuwanku yadda ya kamata a lokutan da suka dace, da hana hannu mara safar hannu taɓa abincin da ake ci kai tsaye", standard: "kuna goge hannu aƙalla daƙiƙa 20, kuma kuna iya faɗin aƙalla lokuta shida na wanke hannu" },
    { id: "O2", condition: "Idan aka ba ku ɗanyen abinci da abincin da ake ci kai tsaye don ajiyewa ko shiryawa", action: "ajiye su da shirya su ta yadda ƙwayoyin cuta ba za su yaɗu ba", standard: "kuna sa kowane abu a kan shiryayyen firiji da ya dace, kuma kuna amfani da kayan aiki daban-daban ko waɗanda aka kashe ƙwayoyin cutarsu" },
    { id: "O3", condition: "Idan baƙo yana da alerjin abinci ko wani wuri yana buƙatar tsaftacewa", action: "bin matakan alerji, da tsaftace wuri da kashe ƙwayoyin cuta a kansa bisa tsari", standard: "kowane mataki a tsarinsa, ba tare da yin hasashe game da abubuwan da ke cikin abinci ba" },
    { id: "O4", condition: "Idan aka ba ku abincin TCS mai sanyi da mai zafi da ma'aunin zafi", action: "duba zafin ajiye abinci da narkar da daskararren abinci lafiya", standard: "mai sanyi a 41°F ko ƙasa da haka, mai zafi a 135°F ko sama da haka, a kowane lokaci" },
    { id: "O5", condition: "Idan kuna dafa abinci, sake dumama shi ko sanyaya shi", action: "zaɓar zafi da lokaci mai aminci ga kowane abinci, da tsara sanyaya abinci da sauri", standard: "daidai da lambobin FDA Food Code da aka koyar a kwas ɗin" },
    { id: "O6", condition: "Kafin aiki a wurin ba da abinci da kuma lokacin aikin", action: "gane alamomin rashin lafiya da dole ku faɗa, da nemo dokar katin mai sarrafa abinci a wurin da kuke aiki", standard: "kuna faɗin alamomin, da wa'adin, tsawon lokacin katin da kwasa-kwasan da ofishin lafiyarku ya amince da su" }
  ],
  chapters: [
    {
      name: "Babi na 1: Hannu mai tsabta da abinci mai tsabta",
      lessons: [
        {
          objectives: ["O1","O6"],
          title: "Wanke hannu da tsaftar jiki",
          minutes: 5,
          goal: "Wanke hannuwanku yadda ya kamata a lokutan da suka dace, kuma ku bi dokokin tsaftar jiki na asali.",
          text: [
            "Hannuwa suna yaɗa cututtukan da ke fitowa daga abinci fiye da kusan komai. Ku wanke su a wurin wanke hannu na musamman (ba a wurin wanke abinci ko na wanke kwanoni ba) da ruwan ɗumi mai gudana da sabulu. Ku goge hannuwa, tsakanin yatsu, ƙarƙashin farce har zuwa wuyan hannu aƙalla daƙiƙa 20, ku kurkura, sannan ku shanya da tawul ɗin takarda da ake amfani da shi sau ɗaya ko na'urar busar da hannu. Ku yi amfani da tawul ɗin don rufe famfo idan yana da hannu.",
            "Ku wanke hannu idan kun fara aiki, bayan amfani da bayan gida, bayan taɓa ɗanyen nama, kaza ko kifi, bayan taɓa fuskarku, gashinku, wayarku ko shara, bayan ci, sha, shan taba ko tari, bayan tsaftacewa, da kafin ku sa safar hannu (gloves). Safar hannu ba ta maye gurbin wanke hannu, kuma ku canja ta idan ta yage, idan kun canja aiki, da bayan kun taɓa ɗanyen abinci.",
            "Kada ku taɓa abincin da ake ci kai tsaye (abincin da ba za a sake dafawa ba, kamar salad, burodi ko burger da aka dafa) da hannu mara safar hannu. Ku yi amfani da safar hannu, abin kamawa (tongs), takardar deli ko cokula.",
            "Tsaftar jiki: ku sa tufafi masu tsabta da abin rufe gashi, ku gajarta farcenku kuma ku tsaftace su, ku rufe rauni da bandeji da safar hannu. Ku faɗa wa manajanku idan kuna amai, gudawa, fata ko idanu masu rawaya (jaundice), ko ciwon maƙogwaro tare da zazzaɓi, ko idan likita ya ce kuna da wasu cututtuka kamar norovirus, hepatitis A ko salmonella. Wataƙila sai ku zauna a gida ko ku nisanci abinci."
          ],
          steps: ["Ku yi amfani da wurin wanke hannu kawai.", "Ku jiƙa hannu da ruwan ɗumi mai gudana ku sa sabulu.", "Ku goge hannu, yatsu, farce da wuyan hannu aƙalla daƙiƙa 20.", "Ku kurkura, ku shanya da tawul ɗin takarda ko na'urar busar da hannu.", "Ku rufe famfo da tawul ɗin.", "Ku sa sabuwar safar hannu idan za ku taɓa abincin da ake ci kai tsaye."],
          words: [["Cutar da ke fitowa daga abinci (foodborne illness)", "rashin lafiya da ake samu bayan cin abincin da ke da ƙwayoyin cuta ko guba a ciki."], ["Abincin da ake ci kai tsaye (ready-to-eat food)", "abincin da za a ci ba tare da sake dafawa ba, kamar salad, burodi ko burger da aka dafa."], ["Jaundice", "rawayar fata ko idanu, alamar cututtuka kamar hepatitis A."]],
          slides: [
            { title: "Ku wanke yadda ya kamata", bullets: ["Wurin wanke hannu kawai", "Ruwan ɗumi da sabulu", "Ku goge aƙalla daƙiƙa 20; ku shanya da tawul ɗin takarda"] },
            { title: "Lokacin wanke hannu", bullets: ["Farkon aiki da bayan bayan gida", "Bayan ɗanyen nama, shara, fuskarku ko waya", "Kafin ku sa safar hannu"] },
            { title: "Ba hannu mara safa a abincin da ake ci kai tsaye", bullets: ["Ku yi amfani da safar hannu, tongs, takardar deli ko cokula", "Ku canja safar hannu idan ta yage ko kun canja aiki"] },
            { title: "Tsafta da rashin lafiya", bullets: ["Tufafi masu tsabta, abin rufe gashi, gajeren farce", "Ku rufe rauni da bandeji da safar hannu", "Ku faɗi amai, gudawa, jaundice, ciwon maƙogwaro da zazzaɓi"] }
          ],
          sources: [
            { name: "FDA: Sarrafa abinci lafiya (wanke hannu aƙalla daƙiƙa 20)", url: "https://www.fda.gov/food/buy-store-serve-safe-food/safe-food-handling" },
            { name: "FDA: Food Code 2022", url: "https://www.fda.gov/food/fda-food-code/food-code-2022" }
          ],
          tryIt: "Ku wanke hannuwanku cikakke kuna ƙidaya lokaci: aƙalla daƙiƙa 20 na gogewa. Sannan ku rubuta lokuta shida a lokacin aiki a kicin da dole ku wanke hannu.",
          youCanNow: "wanke hannuwanku yadda ya kamata, sanin lokacin wanke su, guje wa taɓa abincin da ake ci kai tsaye da hannu mara safa, da sanin alamomin da za ku faɗa.",
          quickCheck: [
            { objective: "O1", q: "Mene ne abincin da ake ci kai tsaye?", options: ["Abincin da ba za a sake dafawa ba, kamar salad ko burodi", "Ɗanyen kaza da ke jiran a dafa shi", "Daskararren abinci a cikin firiza", "Kowane abinci a cikin rufaffen kwali"], answer: 0, why: "Ba za a sake dafa abincin da ake ci kai tsaye ba, don haka kada ya taɓa hannu mara safa." },
            { objective: "O1", q: "Yanzu kuka fitar da shara, kuma kuna buƙatar yin sandwich. Me za ku fara yi?", options: ["Ku sa safar hannu nan take", "Ku wanke hannuwanku, sannan ku sa sabuwar safar hannu", "Ku goge hannuwanku a jikin atamfar aiki (apron)", "Ku yi amfani da maganin tsaftace hannu (sanitizer) kawai"], answer: 1, why: "Safar hannu ba ta maye gurbin wanke hannu; kuna wanke hannu bayan taɓa shara da kafin sa safar hannu." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Hana yaɗuwar ƙwayoyin cuta tsakanin abinci",
          minutes: 5,
          goal: "Ajiye abinci da shirya shi ta yadda ƙwayoyin cuta da abubuwan da ke jawo alerji ba za su yaɗu daga wani abinci ko wuri zuwa wani ba.",
          text: [
            "Yaɗuwar ƙwayoyin cuta (cross-contamination) ita ce lokacin da ƙwayoyin cuta suka tashi daga wani abu zuwa wani: daga ɗanyen kaza zuwa salad, daga allon yanka mai datti zuwa burodi, ko daga hannunku zuwa sandwich.",
            "Ku raba ɗanyen abinci da abincin da ake ci kai tsaye. Ku yi amfani da allunan yanka, wuƙaƙe da cokula daban-daban don ɗanyen nama da don kayan lambu ko abincin da aka dafa; kicin da yawa suna amfani da allunan launuka daban-daban. Idan dole ne ku yi amfani da wuri ɗaya, ku tsaftace shi ku kashe ƙwayoyin cutarsa tsakanin ayyuka.",
            "Ku ajiye abinci a firiji yadda ya kamata. Ku sa abincin da ake ci kai tsaye a shiryayyun sama. Ku sa ɗanyen abincin dabbobi a ƙasa, bisa tsarin zafin dafa su: cikakkun yankan nama da kifi a saman niƙaƙƙen nama, kaza kuma a ƙasan ƙarshe, don ruwansu kada ya ɗiga kan abincin da ke buƙatar ƙarancin dafawa. Ku rufe abinci ku yi masa lakabi da suna da kwanan wata.",
            "Wasu ɗabi'u: kada ku taɓa mayar da abincin da aka dafa a farantin ko tiren da ya riƙe ɗanyen nama; ku nisanta sinadarai (chemicals) daga abinci kuma ku ajiye su ƙasa da shi; ku yi amfani da cokalin ƙanƙara mai tsabta, ba kofi ko hannunku ba, don ɗiban ƙanƙara."
          ],
          steps: ["Ku yi amfani da allunan yanka da wuƙaƙe daban don ɗanyen nama da abincin da ake ci kai tsaye.", "Ku tsaftace wurare ku kashe ƙwayoyin cuta tsakanin ayyuka.", "Ku ajiye abincin da ake ci kai tsaye a sama a cikin firiji.", "Ku ajiye ɗanyen nama a ƙasa: cikakkun yankan nama da kifi, sannan niƙaƙƙen nama, sannan kaza a ƙasa.", "Ku rufe abincin da aka ajiye ku yi masa lakabi da suna da kwanan wata.", "Ku nisanta sinadarai daga abinci kuma ku ajiye su ƙasa da shi."],
          words: [["Yaɗuwar ƙwayoyin cuta (cross-contamination)", "lokacin da ƙwayoyin cuta ko abubuwan da ke jawo alerji suka tashi daga wani abinci, wuri ko hannu zuwa wani abinci."], ["Allunan launuka daban-daban (color-coded boards)", "allunan yanka masu launuka daban don abinci daban-daban, don a raba su."]],
          slides: [
            { title: "Mene ne yaɗuwar ƙwayoyin cuta", bullets: ["Ƙwayoyin cuta suna tashi daga wani abu zuwa wani", "Ɗanyen kaza zuwa salad; allo mai datti zuwa burodi"] },
            { title: "Ku raba ɗanye da abincin da ake ci kai tsaye", bullets: ["Allunan yanka, wuƙaƙe da cokula daban-daban", "Ku tsaftace ku kashe ƙwayoyin cuta tsakanin ayyuka"] },
            { title: "Ajiya a firiji, daga sama zuwa ƙasa", bullets: ["Abincin da ake ci kai tsaye a sama", "Cikakkun yankan nama da kifi, sannan niƙaƙƙen nama", "Kaza a shiryayyen ƙasa"] },
            { title: "Wasu ɗabi'u", bullets: ["Kada ku sake amfani da farantin ɗanyen nama don dafaffen abinci", "Sinadarai nesa da abinci kuma ƙasa da shi", "Ku yi amfani da cokalin ɗiban ƙanƙara"] }
          ],
          sources: [
            { name: "FDA: Sarrafa abinci lafiya (raba ɗanyen abinci da abincin da ake ci kai tsaye)", url: "https://www.fda.gov/food/buy-store-serve-safe-food/safe-food-handling" }
          ],
          tryIt: "Ku zana firiji mai shiryayyu huɗu. Ku sa waɗannan abubuwa a shiryayyun da suka dace: tiren ɗanyen cinyar kaza, kwanon yankakken latas (lettuce), ɗanyen niƙaƙƙen naman shanu, da ɗanyen yankan kifin salmon. Ku rubuta jimla ɗaya da ke faɗin dalilin da yasa tsarin yake da muhimmanci.",
          youCanNow: "ajiye abinci da shirya shi ta yadda ƙwayoyin cuta ba za su yaɗu tsakanin ɗanyen abinci da abincin da ake ci kai tsaye ba.",
          quickCheck: [
            { objective: "O2", q: "Mene ne yaɗuwar ƙwayoyin cuta (cross-contamination)?", options: ["Dafa abinci da yawa", "Ajiye abinci a firiza", "Ƙwayoyin cuta suna tashi daga wani abinci ko wuri zuwa wani", "Haɗa miya biyu tare"], answer: 2, why: "Yaɗuwar ƙwayoyin cuta ita ce lokacin da ƙwayoyin cuta suka tashi daga wani abu, kamar ɗanyen kaza, zuwa wani." },
            { objective: "O2", q: "Kuna buƙatar ƙanƙara don abin sha. Da me za ku ɗiba?", options: ["Kofin sha", "Hannunku mai tsabta", "Kofi daga wurin ajiye kwanoni", "Cokalin ɗiban ƙanƙara mai tsabta"], answer: 3, why: "Cokalin ɗiban ƙanƙara mai tsabta yana hana hannu da fasasshen kofi shiga ƙanƙarar." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Abubuwan da ke jawo alerji, da tsaftacewa da kashe ƙwayoyin cuta",
          minutes: 5,
          goal: "Ba da abinci lafiya ga baƙo mai alerjin abinci, kuma ku tsaftace wuri ku kashe ƙwayoyin cuta a kansa yadda ya kamata.",
          text: [
            "Alerjin abinci zai iya kashe mutum. FDA ta ambaci manyan abubuwa tara da ke jawo alerjin abinci: madara, ƙwai, kifi, kifin harsashi irin su jatan lande (shrimp) da kaguwa (crab), goro na bishiya (tree nuts), gyaɗa, alkama, waken soya da ridi (sesame). An ƙara ridi ranar 1 ga Janairu, 2023.",
            "Idan baƙo ya ce yana da alerji, ku ɗauki maganar da muhimmanci. Ku faɗa wa manaja ko babban mai dafa abinci (chef). Ku duba girke-girken da lakabin kowane abin da ke ciki. Ku wanke hannuwanku, ku canja safar hannu, ku yi amfani da kayan aiki da wurare masu tsabta da aka kashe ƙwayoyin cutarsu don yin abincin. Ku ware shi daga sauran abinci ku kai shi daban. Idan ba ku tabbata cewa abincin lafiya ne ba, ku faɗa; kada ku taɓa yin hasashe. Idan baƙo yana nuna alamun alerji, kamar wahalar numfashi ko kumburi, ku kira 911.",
            "Tsaftacewa da kashe ƙwayoyin cuta sun bambanta. Tsaftacewa (cleaning) tana cire ragowar abinci, datti da maiko da ake gani. Kashe ƙwayoyin cuta (sanitizing) yana rage ƙwayoyin cuta zuwa matakin da ba shi da haɗari. Dole ne ku fara tsaftacewa; maganin kashe ƙwayoyin cuta (sanitizer) ba ya aiki sosai a wuri mai datti.",
            "Don tsaftace teburin shiri da kashe ƙwayoyin cuta a kansa: ku kankare ragowar abinci, ku wanke da sabulu da ruwa, ku kurkura, ku shafa sanitizer a ƙarfin da ya dace (ku duba da takardun gwaji (test strips) da kicin ɗinku ke amfani da su da umarnin lakabi), ku bar shi tsawon lokacin da lakabin ya faɗa (contact time), sannan ku bar shi ya bushe da kansa a iska. Kada ku shanya shi da tawul. Kwanoni a wurin wanke kwanoni mai kwami uku suna bin tsari ɗaya: wanke, kurkura, kashe ƙwayoyin cuta, bushewa a iska."
          ],
          steps: ["Alerji: ku faɗa wa manaja ko chef ku duba kowane abin da ke ciki.", "Ku wanke hannu, ku canja safar hannu, ku yi amfani da kayan aiki masu tsabta da aka kashe ƙwayoyin cutarsu.", "Ku ware abincin mai alerji ku kai shi daban.", "Wuri: ku kankare, ku wanke, ku kurkura.", "Ku kashe ƙwayoyin cuta a ƙarfin da ya dace (test strips) tsawon contact time na lakabi.", "Ku bar shi ya bushe a iska; kada ku shanya da tawul."],
          words: [["Abin da ke jawo alerji (allergen)", "abincin da zai iya jawo wa wasu mutane mummunan martanin garkuwar jiki."], ["Kashe ƙwayoyin cuta (sanitizing)", "rage ƙwayoyin cuta a wuri mai tsabta zuwa matakin da ba shi da haɗari, da zafi ko sinadari."], ["Contact time", "tsawon lokacin da sanitizer dole ya kasance a jike a wuri don ya yi aiki."], ["Takardun gwaji (test strips)", "takardu ƙanana da ke nuna ko ruwan sanitizer yana da ƙarfin da ya dace."]],
          slides: [
            { title: "Manyan abubuwa tara da ke jawo alerji (FDA)", bullets: ["Madara, ƙwai, kifi, kifin harsashi (crustacean)", "Goro na bishiya, gyaɗa, alkama, waken soya", "Ridi (sesame) (an ƙara shi 1 ga Janairu, 2023)"] },
            { title: "Baƙo yana da alerji", bullets: ["Ku faɗa wa manaja ko chef; ku duba kowane lakabi", "Hannu mai tsabta, sabuwar safar hannu, kayan aiki marasa ƙwayoyin cuta", "Kada ku yi hasashe; ku kira 911 idan alerji ya tashi"] },
            { title: "Tsaftacewa da kashe ƙwayoyin cuta", bullets: ["Tsaftacewa tana cire dattin da ake gani", "Kashe ƙwayoyin cuta yana rage su zuwa matakin lafiya", "Koyaushe ku fara tsaftacewa"] },
            { title: "Tsaftace tebur ku kashe ƙwayoyin cuta", bullets: ["Ku kankare, ku wanke, ku kurkura", "Sanitizer a ƙarfin da ya dace tsawon contact time", "Bushewa a iska; ba tawul"] }
          ],
          sources: [
            { name: "FDA: Alerjin abinci (manyan abubuwa tara da ke jawo alerjin abinci)", url: "https://www.fda.gov/food/nutrition-food-labeling-and-critical-foods/food-allergies" }
          ],
          tryIt: "Ku zaɓi wani abinci a jerin abinci (menu) da kuka sani, kamar cheeseburger ko stir-fry. Ku jera waɗanne daga cikin manyan abubuwa tara da ke jawo alerji za su iya kasancewa a cikinsa. Sannan ku rubuta matakai shida da za ku bi don tsaftace teburin shiri da kashe ƙwayoyin cuta a kansa bayan kun yi shi.",
          youCanNow: "kula da odar baƙo mai alerji lafiya, da tsaftace wuri da kashe ƙwayoyin cuta a kansa bisa tsarin da ya dace.",
          quickCheck: [
            { objective: "O3", q: "Me yasa dole ku tsaftace wuri kafin ku kashe ƙwayoyin cuta a kansa?", options: ["Sanitizer ba ya aiki sosai a wuri mai datti", "Tsaftacewa tana sa sanitizer ya fi ƙamshi", "Kashe ƙwayoyin cuta yana cire maiko da kansa", "Ana buƙatar tsaftacewa sau ɗaya a mako kawai"], answer: 0, why: "Sanitizer yana buƙatar wuri mai tsabta don rage ƙwayoyin cuta zuwa matakin lafiya." },
            { objective: "O3", q: "Baƙo ya tambaya ko akwai ridi (sesame) a cikin wani abinci, kuma ba ku tabbata ba. Me za ku ce?", options: ["\"Ina tsammanin babu matsala.\"", "\"Ban tabbata ba; bari in tambayi chef in duba lakabi.\"", "\"Ku cire ridin kawai.\"", "\"Babu wanda ke da alerjin ridi.\""], answer: 1, why: "Kada ku taɓa yin hasashe game da abubuwan da ke jawo alerji; ku duba girke-girke da lakabi tare da chef ko manaja." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Hannu mai tsabta da abinci mai tsabta",
        questions: [
          { objective: "O1", q: "Tsawon wane lokaci ya kamata ku goge hannuwanku idan kuna wanke su?", options: ["Daƙiƙa 3", "Aƙalla daƙiƙa 20", "Har sai sun yi kama da masu tsabta kawai", "Minti 2 a wurin wanke kwanoni"], answer: 1, why: "Goge hannu aƙalla daƙiƙa 20 yana cire ƙwayoyin cuta; ku yi amfani da wurin wanke hannu." },
          { objective: "O1", q: "Mai dafa abinci yana buƙatar sa latas a kan burger da aka dafa. Me ya kamata ya yi amfani da shi?", options: ["Hannu mara safa, bayan an wanke shi", "Safar hannun da ya yi amfani da ita don ɗanyen nama", "Safar hannu mai tsabta, tongs ko cokali", "Atamfar aikinsa (apron)"], answer: 2, why: "Kada a taɓa abincin da ake ci kai tsaye da hannu mara safa." },
          { objective: "O2", q: "Wane shiryayye ne ya dace da ɗanyen kaza a firiji?", options: ["Shiryayyen ƙasa", "Shiryayyen sama", "Saman salad", "Kusa da burodi"], answer: 0, why: "Kaza tana buƙatar zafin dafa abinci mafi girma, don haka tana ƙasa inda ruwanta ba zai ɗiga kan sauran abinci ba." },
          { objective: "O3", q: "Baƙo ya ce yana da alerjin ridi (sesame). Me za ku fara yi?", options: ["Ku faɗa masa cewa ridi ba ya jawo alerji", "Ku cire ƙwayoyin ridi daga burodin", "Ku yi hasashen cewa abincin ba shi da matsala", "Ku faɗa wa manaja ko chef ku duba kowane abin da ke ciki"], answer: 3, why: "Dole a ɗauki alerji da muhimmanci a duba, ba a yi hasashe ba." },
          { objective: "O3", q: "Mene ne tsarin da ya dace don teburin shiri?", options: ["Kashe ƙwayoyin cuta, sannan wanke", "Kankare, wanke, kurkura, kashe ƙwayoyin cuta, bushewa a iska", "Gogewa da busasshen tawul kawai", "Kurkura, sannan shanya da tawul"], answer: 1, why: "Sanitizer yana aiki ne kawai a wurin da aka fara tsaftacewa aka kurkura." }
        ]
      }
    },
    {
      name: "Babi na 2: Lokaci da zafi",
      lessons: [
        {
          objectives: ["O4"],
          title: "Yankin zafin haɗari",
          minutes: 5,
          goal: "Ku riƙe abinci mai sanyi a sanyi, abinci mai zafi a zafi, kuma ku duba zafi da ma'aunin zafi.",
          text: [
            "Ƙwayoyin cuta suna girma mafi sauri tsakanin 41°F da 135°F. Ana kiran wannan tazara yankin zafin haɗari (temperature danger zone). A wuraren ba da abinci, FDA Food Code ta ce a ajiye abinci mai sanyi a 41°F ko ƙasa da haka, abinci mai zafi kuma a 135°F ko sama da haka. (Shawarwarin dafa abinci a gida daga FDA da USDA suna amfani da 40°F da 140°F; a wurin aiki, ku bi dokar da ofishin lafiyarku ke amfani da ita.)",
            "Abincin da ke buƙatar wannan kulawa ana kiransa abincin TCS (time/temperature control for safety, wato kula da lokaci da zafi don tsaro): nama, kaza, kifi, ƙwai, kayan madara, dafaffiyar shinkafa, wake da dankali, yankakken kankana (melon), yankakken tumatir, yankakkun ganyaye, tofu da tsiro (sprouts), da wasu.",
            "Ku yi amfani da ma'aunin zafin abinci mai tsabta da aka kashe ƙwayoyin cutarsa. Ku sa bakinsa a wuri mafi kauri na abincin, kada ya taɓa ƙashi ko tukunya. Ku duba zafin ajiye abinci bisa jadawali, misali kowane awa 2, ku rubuta a littafin rajista (log). Ku daidaita ma'aunin zafi (calibrate) yadda kicin ɗinku ya koya muku.",
            "Ku narkar da daskararren abinci lafiya: a cikin firiji, ƙarƙashin ruwan sanyi mai gudana, a cikin microwave idan za a dafa shi nan take, ko a matsayin wani ɓangare na dafawa. Kada ku taɓa narkar da abinci a kan tebur."
          ],
          steps: ["Ku tsaftace ma'aunin zafi ku kashe ƙwayoyin cutarsa.", "Ku sa bakinsa a wuri mafi kauri na abincin.", "Abinci mai sanyi: 41°F ko ƙasa. Abinci mai zafi: 135°F ko sama.", "Ku rubuta zafin da lokacin a littafin rajista.", "Idan abinci yana cikin yankin haɗari, ku faɗa wa manajanku."],
          words: [["Yankin zafin haɗari (temperature danger zone)", "41°F zuwa 135°F a wuraren ba da abinci: tazarar da ƙwayoyin cuta ke girma mafi sauri a ciki."], ["Abincin TCS", "abincin da ke buƙatar kula da lokaci da zafi don ya kasance lafiya, kamar nama, kayan madara, dafaffiyar shinkafa da yankakken kankana."], ["Daidaitawa (calibrate)", "dubawa da gyara ma'aunin zafi don ya karanta daidai."]],
          slides: [
            { title: "Yankin haɗari", bullets: ["41°F zuwa 135°F (FDA Food Code)", "Abinci mai sanyi: 41°F ko ƙasa", "Abinci mai zafi: 135°F ko sama"] },
            { title: "Abincin TCS", bullets: ["Nama, kaza, kifi, ƙwai, kayan madara", "Dafaffiyar shinkafa, wake, dankali", "Yankakken kankana, tumatir, ganyaye"] },
            { title: "Ku yi amfani da ma'aunin zafi", bullets: ["Mai tsabta, an kashe ƙwayoyin cutarsa", "Wuri mafi kauri, kada ya taɓa ƙashi ko tukunya", "Ku duba ku rubuta bisa jadawali"] },
            { title: "Narkar da abinci lafiya", bullets: ["A firiji ko ƙarƙashin ruwan sanyi mai gudana", "A microwave idan za a dafa nan take", "Ba a kan tebur ba"] }
          ],
          sources: [
            { name: "FDA: Muhimman zafin tsaron ƙwai a wuraren ba da abinci (41°F ajiyar sanyi, 135°F ajiyar zafi)", url: "https://www.fda.gov/food/retail-food-industryregulatory-assistance-training/key-temperatures-egg-safety-food-service-operations-and-retail-food-stores" },
            { name: "FDA: Food Code 2022", url: "https://www.fda.gov/food/fda-food-code/food-code-2022" }
          ],
          tryIt: "Ku yi amfani da ma'aunin zafin abinci a gida ko wurin aiki don duba zafin cikin firijinku (ku sa shi a cikin kofin ruwa a firiji na 'yan mintuna) da na wani abinci mai zafi ɗaya. Ku rubuta ko kowanne yana da lafiya don ajiyar abinci a wurin ba da abinci.",
          youCanNow: "faɗin yankin zafin haɗari, kiyaye abincin TCS daga gare shi, da duba zafi yadda ya kamata.",
          quickCheck: [
            { objective: "O4", q: "Mene ne ma'anar abincin TCS?", options: ["Abincin da ake ba da shi a sanyi koyaushe", "Abincin da ke zuwa a gwangwani", "Abincin da ke buƙatar kula da lokaci da zafi don tsaro", "Abincin da ake sayarwa a shaguna kawai"], answer: 2, why: "Abincin TCS yana buƙatar kula da lokaci da zafi domin ƙwayoyin cuta za su iya girma a cikinsa." },
            { objective: "O4", q: "Kwanon wake da ake riƙe wa a zafi ya karanta 120°F a dubawar awa 2. Me za ku yi?", options: ["Ku rubuta ku ci gaba da bayarwa", "Ku ƙara wake a sama", "Ku kashe na'urar ɗumama abinci", "Ku faɗa wa manajanku, domin yana cikin yankin haɗari"], answer: 3, why: "Dole abinci mai zafi ya kasance a 135°F ko sama, don haka 120°F yana cikin yankin haɗari." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Zafin dafawa, sake dumamawa da sanyaya abinci",
          minutes: 6,
          goal: "Dafa, sake dumama da sanyaya abinci zuwa zafin da FDA Food Code ta ce yana da aminci.",
          text: [
            "Dafa abinci zuwa zafin ciki da ya dace yana kashe ƙwayoyin cuta. Manyan zafin dafa abinci na FDA Food Code don wuraren ba da abinci su ne: kaza da talo-talo (turkey) da abincin da aka cusa (stuffed): 165°F na ƙasa da daƙiƙa 1 (nan take). Niƙaƙƙen nama kamar hamburger, da ƙwan da za a ajiye don gaba: 155°F na daƙiƙa 17. Cikakkun yankan naman shanu da na alade, kifi, da ƙwan da aka dafa don a ba da shi nan take: 145°F na daƙiƙa 15.",
            "Sake dumamawa: dafaffen abincin da kuka sanyaya kuma za ku riƙe a zafi dole a sake dumama shi zuwa 165°F na daƙiƙa 15 cikin awa 2. Abincin da aka dafa a microwave ya kai 165°F, a juya shi a rufe shi, a bar shi minti 2.",
            "Sanyaya abinci: dole dafaffen abinci ya yi sanyi daga 135°F zuwa 70°F cikin awa 2, kuma daga 135°F zuwa 41°F cikin awa 6 gaba ɗaya. Ku sanyaya da sauri ta hanyar raba abinci a kwanoni marasa zurfi, amfani da ruwan ƙanƙara ko sandar ƙanƙara (ice wand), da juyawa. Kada ku taɓa barin babbar tukunya ta yi sanyi a kan tebur.",
            "Ofishin lafiya na yankinku yana iya amfani da sabon ko tsohon nau'in Food Code, kuma shawarwarin dafa abinci a gida sun bambanta (misali 160°F don niƙaƙƙen naman shanu a gida). Don jarabawa ko aiki, ku koyi lambobin da kwas ɗinku da ofishin lafiyarku ke amfani da su."
          ],
          steps: ["Ku duba wuri mafi kauri da ma'aunin zafi.", "Kaza da abincin da aka cusa: 165°F.", "Niƙaƙƙen nama da ƙwan da za a ajiye: 155°F na daƙiƙa 17.", "Cikakkun yankan nama, kifi, ƙwan da za a ba da nan take: 145°F na daƙiƙa 15.", "Sake dumamawa don riƙewa a zafi: 165°F na daƙiƙa 15 cikin awa 2.", "Sanyaya: 135°F zuwa 70°F cikin awa 2, zuwa 41°F cikin awa 6 gaba ɗaya."],
          words: [["Zafin ciki (internal temperature)", "zafin wuri mafi kauri na abinci, wanda ake aunawa da ma'aunin zafi."], ["Sandar ƙanƙara (ice wand)", "rufaffiyar sandar roba da aka cika da ƙanƙara ko ruwa aka daskarar, ana juya abinci da ita don sanyaya shi da sauri."], ["Sanyaya mataki biyu (two-stage cooling)", "sanyaya dafaffen abinci zuwa 70°F cikin awa 2, sannan zuwa 41°F cikin awa 6 gaba ɗaya."]],
          slides: [
            { title: "Zafin dafa abinci (Food Code)", bullets: ["Kaza da abincin da aka cusa: 165°F, nan take", "Niƙaƙƙen nama: 155°F na daƙiƙa 17", "Cikakkun yankan nama, kifi: 145°F na daƙiƙa 15"] },
            { title: "Sake dumamawa don riƙewa a zafi", bullets: ["165°F na daƙiƙa 15", "Cikin awa 2"] },
            { title: "Sanyaya mataki biyu", bullets: ["135°F zuwa 70°F cikin awa 2", "Zuwa 41°F cikin awa 6 gaba ɗaya", "Kwanoni marasa zurfi, ruwan ƙanƙara, ice wand, juyawa"] },
            { title: "Ku san lambobinku", bullets: ["Ofisoshin lafiya suna iya amfani da nau'ikan Food Code daban", "Shawarar gida ta bambanta: 160°F don niƙaƙƙen naman shanu", "Ku koyi abin da kwas ɗinku da county ɗinku ke amfani da shi"] }
          ],
          sources: [
            { name: "FDA: Hanyoyin daidaita jami'an duba tsaron abinci (zafin dafawa, sake dumamawa da sanyaya na Food Code)", url: "https://www.fda.gov/media/155354/download" },
            { name: "FDA: Muhimman zafin tsaron ƙwai a wuraren ba da abinci", url: "https://www.fda.gov/food/retail-food-industryregulatory-assistance-training/key-temperatures-egg-safety-food-service-operations-and-retail-food-stores" }
          ],
          tryIt: "Ku yi ƙaramin katin aljihu mai zafin dafawa, sake dumamawa, riƙewa da sanyaya daga wannan darasi. Sannan ku tsara yadda za ku sanyaya cikakkiyar tukunyar chili (miyar wake da nama) da sauri, mataki-mataki.",
          youCanNow: "dafa, sake dumama, riƙe da sanyaya abinci zuwa zafin Food Code mai aminci, da duba su da ma'aunin zafi.",
          quickCheck: [
            { objective: "O5", q: "Mene ne zafin dafa abinci a wurin ba da abinci don cikakken yankan naman shanu ko na alade?", options: ["145°F na daƙiƙa 15", "120°F na minti 1", "155°F na daƙiƙa 17", "165°F na daƙiƙa 15"], answer: 0, why: "Cikakkun yankan naman shanu da na alade suna kaiwa 145°F na daƙiƙa 15 bisa FDA Food Code." },
            { objective: "O5", q: "Dole a sanyaya cikakkiyar babbar tukunyar shinkafa. Mene ne mataki na farko mafi kyau?", options: ["Ku bar tukunyar a kan tebur har zuwa safe", "Ku sa tukunyar mai zafi kai tsaye a firiji da murfi", "Ku raba shinkafar a kwanoni marasa zurfi", "Ku rufe ta da tawul"], answer: 2, why: "Kwanoni marasa zurfi suna bar abinci ya wuce yankin haɗari da sauri sosai." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Samun katin mai sarrafa abinci da cin jarabawa",
          minutes: 5,
          goal: "Nemo dokar katin mai sarrafa abinci ta yankinku kuma ku shirya don jarabawa.",
          text: [
            "Dokokin katin mai sarrafa abinci sun bambanta daga jiha zuwa jiha da county zuwa county. Wasu jihohi suna buƙatar kati ga yawancin ma'aikatan abinci; wasu suna bar wa counties ko birane; wasu ba su da doka ta gaba ɗaya. Ofishin lafiya ko na lafiyar muhalli (environmental health) na yankinku zai faɗa muku abin da ya shafi wurin da kuke aiki.",
            "Misali: California. Bisa California Health and Safety Code sashe na 113948, dole masu sarrafa abinci su sami katin mai sarrafa abinci na California cikin kwanaki 30 bayan wurin abinci ya ɗauke su aiki. Katin yana aiki na shekaru uku, kuma dole kwas ɗin ya fito daga mai ba da horo da American National Standards Institute (ANSI) ta amince da shi. Wasu wurare ba sa ƙarƙashin dokar, kamar wasu shagunan kayan abinci da kantin abincin makarantu, don haka ku tambayi county ɗinku.",
            "Katin mai sarrafa abinci ya bambanta da takardar shaidar manajan abinci (kamar jarabawar ServSafe Manager). Kwasa-kwasan mai sarrafa abinci gajeru ne kuma suna koyar da abubuwan asali na wannan kwas. Takardar shaidar manaja ta fi tsawo, ta fi zurfi, kuma yawanci ana buƙatar ta ga wanda ke jagorantar aiki.",
            "Don shiryawa: ku ɗauki kwas da aka amince da shi, ku sake duba kowane batu a wannan kwas, ku yi amfani da katin aljihu da kuka yi, ku yi atisaye da tambayoyin da kuka rubuta da kanku ko waɗanda suka zo tare da kwas ɗinku. Ku karanta kowace tambaya a hankali: kalmomi kamar \"farko\", \"mafi kyau\" da \"kada ku taɓa\" suna da muhimmanci."
          ],
          steps: ["Ku bincika sunan jiharku ko county ɗinku tare da \"food handler card\" ku nemo shafin ofishin lafiya (sau da yawa yana ƙarewa da .gov).", "Ku rubuta wa'adin bayan ɗaukar aiki, tsawon lokacin da katin ke aiki, da kwasa-kwasan da aka amince da su.", "Ku zaɓi kwas da aka amince da shi daga jerin da ofishin lafiyarku ya nuna.", "Ku sake duba wanke hannu, yaɗuwar ƙwayoyin cuta, zafi, abubuwan da ke jawo alerji da tsaftacewa.", "Ku ɗauki kwas ɗin da gwajin, kuma ku ajiye kwafin katinku."],
          words: [["Katin mai sarrafa abinci (food handler card)", "shaidar cewa kun gama kwas na asali na tsaron abinci; ana buƙatar sa ga ma'aikatan abinci a wasu jihohi da counties."], ["ANSI", "American National Standards Institute, cibiyar da ke amincewa da masu ba da horon tsaron abinci."], ["Takardar shaidar manajan abinci (food manager certification)", "shaidar tsaron abinci ta matakin sama, yawanci ga wanda ke jagorantar kicin."]],
          slides: [
            { title: "Dokoki sun bambanta daga wuri zuwa wuri", bullets: ["Wasu jihohi suna buƙatar kati; wasu suna bar wa counties", "Ofishin lafiya na yankinku ya sani"] },
            { title: "Misali: California", bullets: ["Kati cikin kwanaki 30 bayan ɗaukar aiki", "Yana aiki na shekaru uku", "Kwas daga mai ba da horo da ANSI ta amince da shi"] },
            { title: "Katin mai sarrafa abinci da shaidar manaja", bullets: ["Mai sarrafa abinci: gajere, abubuwan asali", "Manaja: ya fi tsawo, ga wanda ke jagoranci"] },
            { title: "Ku shirya don jarabawa", bullets: ["Ku ɗauki kwas da aka amince da shi", "Ku yi amfani da katin aljihun zafinku", "Ku kula da kalmomi kamar farko, mafi kyau, kada ku taɓa"] }
          ],
          sources: [
            { name: "Sonoma County, California: Katin mai sarrafa abinci (kwanaki 30, shekaru uku, ANSI)", url: "https://sonomacounty.gov/Health/Environmental-Health/Food-Program/Food-Handler-Card/" },
            { name: "California Department of Public Health: Horon tsaron abinci a shaguna da gidajen abinci (HSC 113948)", url: "https://www.cdph.ca.gov/Programs/CEH/DFDCS/CDPH%20Document%20Library/FDB/FoodSafetyProgram/RetailFood/RetailFoodSafetyTraining.pdf" }
          ],
          tryIt: "Aikin ƙarshe: ku rubuta Jerin Duba Aiki Lafiya naku (wanke hannu, ajiya, zafi, sanyaya, matakan alerji, matakan tsaftacewa da kashe ƙwayoyin cuta, alamomin rashin lafiya da za ku faɗa). Sannan ku nemo dokar katin mai sarrafa abinci ta jiharku ko county ɗinku, ku rubuta wa'adin, tsawon lokacin da katin ke aiki da kwasa-kwasan da aka amince da su a sama.",
          youCanNow: "nemo dokar katin mai sarrafa abinci a wurin da kuke aiki, zaɓar kwas da aka amince da shi, da shiryawa don jarabawa.",
          quickCheck: [
            { objective: "O6", q: "Mene ne bambanci tsakanin katin mai sarrafa abinci da takardar shaidar manajan abinci?", options: ["Abu ɗaya ne", "Katin mai sarrafa abinci yana koyar da asali; shaidar manaja ta fi zurfi ga wanda ke jagoranci", "Katin mai sarrafa abinci na manajoji ne kawai", "Shaidar manaja ta fi gajarta"], answer: 1, why: "Kwasa-kwasan mai sarrafa abinci suna koyar da asali; shaidar manaja ta fi tsawo kuma yawanci ana buƙatar ta ga wanda ke jagoranci." },
            { objective: "O6", q: "Za ku fara sabon aiki a kicin mako mai zuwa. Ta yaya za ku nemo dokar katin mai sarrafa abinci?", options: ["Ku tambayi aboki a wata jiha", "Ku ɗauka babu doka", "Ku sayi kwas na farko da kuka gani a intanet", "Ku duba shafin ofishin lafiya na jiharku ko county ɗinku"], answer: 3, why: "Dokoki sun bambanta daga jiha zuwa jiha da county zuwa county, don haka ofishin lafiya na yankinku shi ne majiya." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Lokaci da zafi",
        questions: [
          { objective: "O4", q: "A wuraren ba da abinci, mene ne yankin zafin haɗari bisa FDA Food Code?", options: ["0°F zuwa 32°F", "41°F zuwa 135°F", "165°F zuwa 212°F", "70°F zuwa 80°F kawai"], answer: 1, why: "Ƙwayoyin cuta suna girma mafi sauri tsakanin 41°F da 135°F." },
          { objective: "O5", q: "Mene ne mafi ƙarancin zafin dafa kaza a wurin ba da abinci?", options: ["145°F", "135°F", "155°F", "165°F"], answer: 3, why: "Dole kaza ta kai 165°F." },
          { objective: "O5", q: "Dole a sanyaya babbar tukunyar miya. Mene ne hanya mafi aminci?", options: ["Ku raba ta a kwanoni marasa zurfi ku yi amfani da ruwan ƙanƙara", "Ku bar ta a kan tebur har zuwa safe", "Ku sa duk tukunyar mai zafi a can cikin firiji da murfi", "Ku ƙara ruwan zafi"], answer: 0, why: "Kwanoni marasa zurfi da ƙanƙara suna sanyaya abinci da sauri ta yankin haɗari." },
          { objective: "O5", q: "Dole dafaffen abinci ya yi sanyi daga 135°F zuwa 70°F cikin:", options: ["Awa 6", "Awa 12", "Awa 2", "Awa 24"], answer: 2, why: "Mataki na farko na sanyaya abinci shi ne 135°F zuwa 70°F cikin awa 2." },
          { objective: "O6", q: "A California, dole sabon mai sarrafa abinci ya sami katin mai sarrafa abinci cikin:", options: ["Kwanaki 30 bayan ɗaukar aiki", "Shekara ɗaya", "Kafin shekara 21", "Ba a taɓa buƙata ba"], answer: 0, why: "Dokar California ita ce kwanaki 30 bayan ɗaukar aiki; katin yana aiki na shekaru uku." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Mai Sarrafa Abinci da Shirin Jarabawar ServSafe",
    questions: [
      { objective: "O1", q: "A ina ya kamata masu sarrafa abinci su wanke hannuwansu?", options: ["Wurin wanke abinci", "Wurin wanke kwanoni", "Wurin wanke hannu", "Kowane wurin wanki da babu komai a ciki"], answer: 2, why: "Ku yi amfani da wurin wanke hannu kawai, don kada abinci da kwanoni su ƙazantu." },
      { objective: "O1", q: "Yaushe dole ku wanke hannu kafin ku sa safar hannu?", options: ["Ba a taɓa ba; safar hannu ta isa", "Kowane lokaci", "Sau ɗaya a rana kawai", "Bayan abincin rana kawai"], answer: 1, why: "Safar hannu ba ta maye gurbin wanke hannu." },
      { objective: "O6", q: "Wani mai dafa abinci yana gudawa kuma ya yi amai da safiyar yau. Me ya kamata ya yi?", options: ["Ya faɗa wa manaja kafin ya yi aiki da abinci", "Ya yi aiki amma ya sa safar hannu biyu", "Ya sha ruwa ya ci gaba da dafa abinci", "Kada ya ce komai"], answer: 0, why: "Dole a faɗi waɗannan alamomi; wataƙila ma'aikacin sai ya nisanci abinci." },
      { objective: "O2", q: "Wanne ne abincin da ake ci kai tsaye?", options: ["Ɗanyen niƙaƙƙen naman shanu", "Ɗanyen kaza", "Ɗanyen jatan lande (shrimp)", "Yankakken tumatir don sandwich"], answer: 3, why: "Za a ci shi ba tare da sake dafawa ba, don haka kada hannu mara safa ya taɓa shi." },
      { objective: "O1", q: "Kuna da ƙaramin rauni a yatsanku. Ya kamata ku:", options: ["Ku ƙyale shi", "Ku rufe shi da bandeji ku sa safar hannu", "Ku sa bandeji kawai", "Ku tafi gida na mako guda"], answer: 1, why: "Bandeji tare da safar hannu suna nisanta raunin daga abinci." },
      { objective: "O2", q: "Wanne ne yaɗuwar ƙwayoyin cuta?", options: ["Dafa kaza zuwa 165°F", "Wanke hannu na daƙiƙa 20", "Yanka ɗanyen kaza, sannan salad, a kan allo ɗaya da ba a kashe ƙwayoyin cutarsa ba", "Yi wa abinci lakabi da kwanan wata"], answer: 2, why: "Ƙwayoyin cuta suna tashi daga ɗanyen kazar zuwa salad ɗin." },
      { objective: "O2", q: "A firiji, me ke zuwa a shiryayyen SAMA?", options: ["Abincin da ake ci kai tsaye kamar yankakken 'ya'yan itace", "Ɗanyen kaza", "Ɗanyen niƙaƙƙen naman shanu", "Sinadarai"], answer: 0, why: "Abincin da ake ci kai tsaye yana zuwa saman ɗanyen abinci don kada komai ya ɗiga a kansa." },
      { objective: "O2", q: "A ina ya kamata a ajiye sinadaran tsaftacewa?", options: ["A shiryayyen saman abinci", "Kusa da wurin salad", "A cikin kwanonin abinci marasa komai", "Nesa da abinci kuma ƙasa da shi"], answer: 3, why: "Ajiye sinadarai nesa da ƙasa yana hana su ɗiga ko zubewa kan abinci." },
      { objective: "O3", q: "Manyan abubuwa nawa ne ke jawo alerjin abinci a jerin FDA?", options: ["Biyar", "Tara", "Goma sha biyu", "Uku"], answer: 1, why: "Madara, ƙwai, kifi, kifin harsashi, goro na bishiya, gyaɗa, alkama, waken soya da ridi." },
      { objective: "O3", q: "Baƙo mai alerjin gyaɗa ya yi odar wani abinci. Wane mataki ne BA daidai ba?", options: ["Faɗa wa chef", "Duba lakabin kowane abin da ke ciki", "Amfani da kayan aiki masu tsabta da aka kashe ƙwayoyin cutarsu", "Kankare gyaɗar daga abincin da aka gama a ba da shi"], answer: 3, why: "Cire abin da ke jawo alerji ba ya sa abincin ya zama lafiya; ku yi sabo da kayan aiki masu tsabta." },
      { objective: "O3", q: "Mene ne bambanci tsakanin tsaftacewa da kashe ƙwayoyin cuta?", options: ["Tsaftacewa tana cire datti; kashe ƙwayoyin cuta yana rage su zuwa matakin lafiya", "Abu ɗaya ne", "Kashe ƙwayoyin cuta yana cire datti; tsaftacewa tana kashe ƙwayoyin cuta", "Tsaftacewa ta ƙasa ce kawai"], answer: 0, why: "Kuna fara tsaftacewa, sannan ku kashe ƙwayoyin cuta." },
      { objective: "O3", q: "Bayan kun kashe ƙwayoyin cuta a allon yanka, ya kamata ku:", options: ["Ku shanya shi da tawul", "Ku kurkure sanitizer nan take", "Ku bar shi ya bushe a iska", "Ku sa shi kai tsaye ƙarƙashin ɗanyen nama"], answer: 2, why: "Bushewa a iska tana bar sanitizer ya yi aiki tsawon contact time ba tare da tawul ya ƙara ƙwayoyin cuta ba." },
      { objective: "O3", q: "Ta yaya za ku san ruwan sanitizer yana da ƙarfin da ya dace?", options: ["Ta ƙamshinsa", "Ku duba shi da test strips da kicin ɗinku ke amfani da su", "Ta launinsa", "Ku ƙara da yawa don tsaro"], answer: 1, why: "Test strips suna nuna ƙarfinsa; idan ya yi rauni ba zai yi aiki ba, idan ya yi ƙarfi sosai yana iya zama haɗari." },
      { objective: "O4", q: "A wane zafi ko ƙasa da shi ya kamata a riƙe abincin TCS mai sanyi a wurin ba da abinci?", options: ["50°F", "60°F", "45°F", "41°F"], answer: 3, why: "Food Code ta ce ajiyar sanyi 41°F ce ko ƙasa da haka." },
      { objective: "O4", q: "Dole a riƙe abincin TCS mai zafi a teburin buffet a:", options: ["135°F ko sama", "100°F ko sama", "120°F ko sama", "Zafin ɗaki"], answer: 0, why: "Ajiyar zafi 135°F ce ko sama bisa Food Code." },
      { objective: "O4", q: "Wace ce hanya mai aminci ta narkar da daskararren kaza?", options: ["A kan tebur har zuwa safe", "A cikin firiji", "A ruwan ɗumi a kan tebur", "A rana"], answer: 1, why: "Narkarwa a firiji tana kiyaye shi daga yankin haɗari." },
      { objective: "O5", q: "Dole niƙaƙƙen naman shanu (patties) a gidan abinci ya kai:", options: ["135°F", "145°F na daƙiƙa 15", "155°F na daƙiƙa 17", "100°F"], answer: 2, why: "Food Code ta sa 155°F na daƙiƙa 17 ga niƙaƙƙen nama." },
      { objective: "O5", q: "Yankan naman alade (pork chop) ko yankan kifin salmon dole ya kai:", options: ["165°F na daƙiƙa 15", "120°F", "100°F", "145°F na daƙiƙa 15"], answer: 3, why: "Cikakkun yankan nama da kifi 145°F ne na daƙiƙa 15." },
      { objective: "O5", q: "Ragowar chili da aka sanyaya jiya za a sa shi a wurin riƙe abinci a zafi. Ku sake dumama shi zuwa:", options: ["165°F na daƙiƙa 15 cikin awa 2", "135°F cikin awa 6", "100°F", "Har sai ya ɗan yi ɗumi kawai"], answer: 0, why: "Abincin da aka dafa aka sanyaya a wurin ana sake dumama shi zuwa 165°F na daƙiƙa 15 cikin awa 2 don riƙewa a zafi." },
      { objective: "O6", q: "A ina za ku sami dokar katin mai sarrafa abinci ta yankinku?", options: ["Wani rubutu a kafofin sada zumunta", "Hasashen abokin aiki", "Ofishin lafiya na jiharku ko county ɗinku", "Kowane shafin jarabawa"], answer: 2, why: "Dokoki sun bambanta daga jiha zuwa jiha da county zuwa county, don haka ofishin lafiya na yankinku shi ne majiya ta hukuma." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      2,
      5,
      8,
      10,
      13,
      16,
      18,
      19
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Wanke hannu",
        objective: "O1",
        notYet: "Matakan wanke hannu ko lokutansa ba su nan ko ba daidai ba ne.",
        meets: "Ya jera cikakkun matakan wanke hannu da aƙalla lokuta shida na wankewa.",
        exceeds: "Ya kuma faɗi lokacin canja safar hannu da yadda ake kula da abincin da ake ci kai tsaye."
      },
      {
        name: "Ajiya da yaɗuwar ƙwayoyin cuta",
        objective: "O2",
        notYet: "An ajiye ɗanyen abinci a saman abincin da ake ci kai tsaye, ko babu kayan aiki daban-daban.",
        meets: "Ya nuna tsarin shiryayyu da ya dace da allunan yanka da wuƙaƙe daban ko waɗanda aka kashe ƙwayoyin cutarsu.",
        exceeds: "Ya kuma haɗa da lakabi da suna da kwanan wata, da ajiye sinadarai ƙasa da abinci."
      },
      {
        name: "Matakan alerji da kashe ƙwayoyin cuta",
        objective: "O3",
        notYet: "Matakan alerji ko tsarin tsaftacewa da kashe ƙwayoyin cuta ba su nan.",
        meets: "Ya jera matakan alerji da tsarin: kankare, wanke, kurkura, kashe ƙwayoyin cuta, bushewa a iska.",
        exceeds: "Ya ambaci test strips da contact time na lakabin sanitizer."
      },
      {
        name: "Zafin riƙe abinci",
        objective: "O4",
        notYet: "Zafin riƙe abinci ba ya nan ko ba daidai ba ne.",
        meets: "Mai sanyi a 41°F ko ƙasa, mai zafi a 135°F ko sama, an duba da ma'aunin zafi.",
        exceeds: "Ya ƙara jadawalin dubawa da littafin rajista."
      },
      {
        name: "Dafawa da sanyayawa",
        objective: "O5",
        notYet: "Lambobin dafawa ko sanyayawa ba su nan ko ba daidai ba ne.",
        meets: "Ya ba da zafin dafawa da ya dace da iyakokin lokaci biyu na sanyayawa.",
        exceeds: "Ya ƙara dokar sake dumamawa da yadda ake sanyaya abinci da sauri."
      },
      {
        name: "Rashin lafiya da dokar kati ta yanki",
        objective: "O6",
        notYet: "Ba a jera alamomin rashin lafiya ba, ko babu dokar kati a sama.",
        meets: "Ya jera alamomin da za a faɗa, da wa'adin kati na yanki, tsawon lokacinsa da kwasa-kwasan da aka amince da su.",
        exceeds: "Ya ambaci shafin ofishin lafiya inda aka sami dokar."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka sami katin mai sarrafa abinci daga kwas da aka amince da shi cikin kwanaki 60",
      "Masu koyo da suka sami ko suka riƙe aiki a wurin ba da abinci cikin kwanaki 90 (binciken biyo baya)",
      "Abokan aiki masu ɗaukar ma'aikata sun ce an rage kurakuran tsaron abinci a binciken ofishin lafiya ko duban lokacin aiki"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta don karanta darussa",
      "Wurin wanki mai sabulu don atisayen wanke hannu",
      "Ma'aunin zafin abinci (ba dole ba ne amma yana taimakawa)",
      "Takarda da alƙalami don katin aljihu da Jerin Duba Aiki Lafiya",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku nuna yadda ake wanke hannu kai tsaye, ku ƙidaya daƙiƙa 20 tare.",
      "Ku yi amfani da hotuna ko kwanoni marasa komai don atisayen shiryayyun firiji; ba a buƙatar ɗanyen abinci.",
      "Ku tunatar da masu koyo cewa lambobin dafa abinci a gida sun bambanta da na wuraren ba da abinci, kuma dokar ofishin lafiyarsu ce take aiki.",
      "Ku taimaki kowane mai koyo ya nemo dokar kati ta jiharsa ko county ɗinsa; ta bambanta daga wuri zuwa wuri.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
