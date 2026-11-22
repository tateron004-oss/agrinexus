"use strict";

// Koach Learn course, Hausa (ha) translation of agriculture-africa/agri-agroecology-regeneration.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.
// Money figures are made-up examples.

const FAO_AE = { name: "FAO (Hukumar Abinci da Noma ta Majalisar Ɗinkin Duniya): Cibiyar ilimin agroecology", url: "https://www.fao.org/agroecology/en/" };
const FAO_10 = { name: "FAO: Abubuwa 10 na agroecology (ƙasashen FAO sun amince da su a 2019)", url: "https://www.fao.org/agroecology/overview/the-10-elements-of-agroecology/en" };
const FMNR_STEPS = { name: "Tearfund Footsteps 110: Farfaɗo da bishiyoyi da manoma ke kula da shi (FMNR), matakan nasara (tare da World Vision)", url: "https://learn.tearfund.org/-/media/learn/resources/footsteps/pdfs/footsteps-101-110/2020-tearfund-footsteps-110-farming-for-the-future-en-centre-page-en.pdf" };
const FMNR_ICRAF = { name: "World Agroforestry (ICRAF) Uganda: Jagorar amfani da FMNR", url: "https://fmnrhub.com.au/wp-content/uploads/2024/05/FMNR_Uganda-near-final-v3-2018.pdf" };
const FAO_AGROFOR = { name: "FAO: Agroforestry (haɗa bishiyoyi da noma)", url: "https://www.fao.org/agroforestry/en/" };
const GLIRICIDIA = { name: "Sileshi da wasu: Shin haɗa bishiyoyin legume yana ƙara daidaiton amfanin masara a Kudancin Afirka? (gwaje-gwaje a Malawi da Zambia)", url: "https://repository.up.ac.za/handle/2263/20631" };
const TITHONIA = { name: "Tithonia diversifolia: bambancin sinadaran ganye da amfaninsa wajen ɗaukar ganye zuwa gona (yammacin Kenya)", url: "https://centaur.reading.ac.uk/119281" };
const FAO_SOM = { name: "FAO: Muhimmancin ruɓaɓɓun abubuwa a cikin ƙasa (soil organic matter)", url: "https://www.fao.org/4/a0100e/a0100e.pdf" };
const HANDBOOK_4R = { name: "4R Plant Nutrient Management in African Agriculture: littafin jagora ga jami'an faɗakarwa kan taki", url: "https://alliancebioversityciat.org/publications-data/4r-plant-nutrient-management-african-agriculture-extension-handbook-fertilizer" };

module.exports = {
  id: "agri-agroecology-regeneration-ha",
  lang: "ha",
  translationOf: "agri-agroecology-regeneration",
  category: "Agriculture (Africa)",
  name: "Agroecology da Farfaɗo da Ƙasa",
  skills: "Amfani da ƙa'idodin agroecology, Farfaɗo da ƙasa da amfanin rufe ƙasa da takin kore, Farfaɗo da bishiyoyi da FMNR, Haɗa amfanin gona da dabbobi, Rage kuɗin takin zamani, Auna gyaruwar ƙasa a kowace damina",
  outcome: "rubuta da fara shirin damina uku don farfaɗo da gona ɗaya da ta lalace ta hanyar agroecology: amfanin rufe ƙasa ko takin kore, bishiyoyi, haɗa amfanin gona da dabbobi da sinadaran da ke gonar kanta, tare da rage kuɗin takin da ake saya, da ma'auni masu sauƙi don ganin ƙasar tana gyaruwa.",
  about: [
    "Wannan kwas ɗin na ƙananan manoma ne da manoman kasuwanci masu girma, matasa masu sana'ar noma, ma'aikatan gona da jami'an faɗakarwa (extension) a Kenya, Najeriya, Ghana, Nijar, Senegal da faɗin Afirka waɗanda ƙasarsu ta gaji: amfani yana raguwa, ƙasa ta yi tauri ko ruwa yana kwashe ta, kuduji (striga) yana yaɗuwa, kuma taki yana ƙara tsada kowace shekara.",
    "Babi na 1 yana bayanin ƙa'idodin agroecology da yadda ake farfaɗo da ƙasar da ta lalace: amfanin rufe ƙasa da takin kore, bishiyoyin taki, da farfaɗo da bishiyoyi da manoma ke kula da shi (FMNR), wanda ya taimaki manoma a Nijar su dawo da bishiyoyi a kan miliyoyin hekta. Babi na 2 yana haɗa amfanin gona da dabbobi, yana amfani da bambancin halittu don amfaninku, yana rage kuɗin takin da ake shigo da shi, kuma yana nuna muku yadda ake auna gyaruwa a kowace damina.",
    "Kwas ɗin \"Lafiyar Ƙasa da Ƙarfinta\" yana bayanin gwajin ƙasa, takin gida (compost), sauya amfanin gona da rufe ƙasa da ciyawa; wannan kwas yana ginuwa a kansa kuma ba ya maimaita shi. Farfaɗo da ƙasa yana ɗaukar damina da yawa, don haka ku fara a gona ɗaya ku kwatanta. Adadin kuɗi misalai ne na ƙirƙira. Kowane darasi yana ɗaukar kusan minti biyar kuma yana ƙarewa da aiki a gonarku."
  ],
  finalTask: "Ku rubuta shirin farfaɗo da ƙasa na damina uku don gona ɗaya da ta lalace a gonarku (ko misali: eka 1 ta gonar masara da ta gaji a Kakamega, hekta 2 ta dawa da gyaɗa a Zinder, Nijar, ko hekta 1 ta rogo a Jihar Oyo): yadda gonar take yanzu; waɗanne amfanin rufe ƙasa, takin kore ko bishiyoyi za ku yi amfani da su da lokacin; yadda amfanin gona da dabbobi za su ciyar da juna; buhunan takin da ake saya nawa kuke son maye gurbinsu da kuɗin da za a ajiye; da ma'auni huɗu ko fiye da za ku rubuta kowace damina, tare da zanen gonar.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Ƙananan manoma da manoman kasuwanci masu girma, ma'aikatan gona, matasa masu sana'ar noma da jami'an faɗakarwa a faɗin Afirka (Kenya, Najeriya, Ghana da Yammacin Afirka masu Faransanci, har da Sahel), masu noman masara, rogo, dawa, gero, wake, gyaɗa, shinkafa, koko da kofi, sau da yawa tare da awaki, shanu, aladu ko kaji.",
    startingPoint: "Sun san tushen takin gida, taki na dabbobi, sauya amfanin gona da rufe ƙasa da ciyawa, kuma suna ganin ƙasarsu ta lalace. Kaɗan ne ke amfani da amfanin rufe ƙasa, takin kore, bishiyoyin taki ko FMNR da gangan, suke haɗa amfanin gona da dabbobi a matsayin tsari ɗaya, ko suke auna canjin ƙasa a tsawon lokaci.",
    gap: "Ƙasar da ta lalace da hauhawar farashin taki suna rage amfani da kuɗin shiga. Masu koyo suna buƙatar hanyoyi masu amfani da marasa tsada don sake gina ƙasa da rage abin da ake saya, da hanyar ganin ko yana aiki, don su ci gaba a cikin daminun farko masu jinkiri.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; kwas ɗin yana kuma cikin Sifaniyanci, Faransanci da Larabci",
      "Ƙasa da aiki: ƙananan gonaki, aikin iyali, ana kuma buƙatar ragowar amfanin gona don wasu abubuwa (abincin dabbobi, makamashi)",
      "Lokaci: farfaɗo da ƙasa yana ɗaukar damina da yawa; darussa suna ɗaukar minti 4 zuwa 6",
      "Kuɗi: adadin kuɗi misalai ne; ba a ba da farashi ko tallafi a matsayin gaskiya ba",
      "Haƙƙin ƙasa: dokokin bishiyoyi da kiwo sun bambanta tsakanin al'ummomi da ƙasashe; masu koyo suna duba dokokin yankinsu"
    ],
    prerequisites: "Ana ba da shawarar fara ɗaukar \"Lafiyar Ƙasa da Ƙarfinta\" (gwajin ƙasa, takin gida, sauya amfanin gona, rufe ƙasa da ciyawa)."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku jerin ayyukan da ake yi a gonarku", action: "haɗa kowane aiki da ƙa'idar agroecology da yake amfani da ita, kamar sake amfani, bambanci ko taimakon juna", standard: "kuna haɗa aƙalla ayyuka biyar daidai" },
    { id: "O2", condition: "Don gona ɗaya da ta lalace", action: "zaɓar amfanin rufe ƙasa ko takin kore da tsara lokacin shuka shi da lokacin yanke shi", standard: "da irin da ya dace da ruwan saman yankinku, tare da ranar shuka da ranar yanka" },
    { id: "O3", condition: "A gonar da ke da kututturen bishiyoyi masu rai ko wurin bishiyoyi", action: "tsara farfaɗo da bishiyoyi da manoma ke kula da shi (FMNR) ko bishiyoyin taki, mataki-mataki", standard: "kuna faɗin waɗanne kututture ko bishiyoyi, rassa nawa, yankan rassa, da kariya daga dabbobi da wuta" },
    { id: "O4", condition: "Idan aka ba ku amfanin gona da dabbobin da ke gonarku", action: "zana yadda abinci, taki na dabbobi da ragowar amfanin gona ke tafiya tsakanin amfanin gonarku da dabbobinku", standard: "kuna nuna aƙalla haɗi uku da wuri ɗaya da sinadarai ke barin gonar" },
    { id: "O5", condition: "Idan aka ba ku takin da kuka yi amfani da shi a daminar da ta gabata", action: "ƙiyasta buhunan takin da ake saya nawa sinadaran gonar za su iya maye gurbinsu da kuɗin da za a ajiye", standard: "da kuɗin ƙasarku, an rubuta cewa ƙiyasi ne da za a duba tare da jami'in faɗakarwa" },
    { id: "O6", condition: "A gonar da kuke farfaɗowa", action: "rubuta ma'aunin ƙasa da na gona masu sauƙi a lokaci ɗaya kowace damina", standard: "ta amfani da aƙalla ma'auni huɗu, a rubuce, kuma an kwatanta su da daminar da ta gabata" }
  ],
  chapters: [
    {
      name: "Babi na 1: Ƙa'idodi da farfaɗo da ƙasa",
      lessons: [
        {
          title: "Agroecology: ƙa'idodin da za ku iya amfani da su a gonarku",
          objectives: ["O1"],
          minutes: 5,
          goal: "Haɗa ayyukan gonarku da ƙa'idodin agroecology.",
          text: [
            "Agroecology tana nufin noma tare da yadda halitta take aiki: amfani da tsirrai, dabbobi, rayayyun halittun ƙasa, bishiyoyi da ilimin mutane don gona ta ƙara ciyar da kanta kuma ta rage sayen kaya daga waje. FAO tana bayanin abubuwa 10 na agroecology, waɗanda ƙasashen da ke cikinta suka amince da su a 2019.",
            "Biyar suna magana kan yadda gona take aiki: sake amfani (sinadarai da shara suna komawa cikin gona), inganci (samun ƙari daga ruwa, ƙasa da kaya iri ɗaya), bambanci (amfanin gona, dabbobi da bishiyoyi da yawa), taimakon juna (sassan da ke taimakon juna, kamar wake da ke ciyar da masara) da juriya (jure wa matsaloli). Biyar kuma suna magana kan mutane: haɗa ilimi tare (manoma da masu bincike suna koyo tare), kyawawan halaye na mutane da al'umma, al'ada da al'adun abinci, shugabanci mai adalci, da tattalin arziki na zagaye da haɗin kai (saye da sayarwa a yanki da adalci).",
            "Wataƙila kuna amfani da wasu tuni. Ciyar da awaki da karan masara da mayar da takinsu gona sake amfani ne da taimakon juna. Haɗa rogo da gyaɗa a gona ɗaya bambanci ne. Makarantar manoma a gona (farmer field school) haɗa ilimi tare ne. Agroecology tana neman ku yi amfani da su da gangan, kuma ku ƙara wasu, mataki-mataki."
          ],
          words: [["Agroecology", "noma da ke amfani da hanyoyin halitta da ilimin yanki don gona ta rage buƙatar kayan da ake saya kuma ta fi jure matsaloli."], ["Taimakon juna (synergy)", "lokacin da sassa biyu na gona suke taimakon juna, don tare su ba da fiye da yadda kowanne zai bayar shi kaɗai."], ["Sake amfani (a gona)", "mayar da ragowar amfanin gona, taki na dabbobi da shara cikin ƙasa maimakon a rasa su."]],
          slides: [
            { title: "Agroecology ita ce...", bullets: ["Noma tare da hanyoyin halitta", "Gona tana ƙara ciyar da kanta, tana rage saye", "FAO: abubuwa 10, an amince da su a 2019"] },
            { title: "Yadda gona take aiki", bullets: ["Sake amfani da inganci", "Bambanci da taimakon juna", "Juriya"] },
            { title: "Mutane da adalci", bullets: ["Haɗa ilimi tare", "Halayen al'umma, al'adun abinci", "Shugabanci nagari; tattalin arziki na zagaye mai adalci"] },
            { title: "Wataƙila kuna yi tuni", bullets: ["Karan masara ga awaki, taki ya koma gona", "Rogo + gyaɗa a gona ɗaya", "Makarantun manoma a gona"] }
          ],
          sources: [FAO_10, FAO_AE],
          tryIt: "Ku rubuta ayyuka shida a gonarku ko a ƙauyenku. A gefen kowanne, ku rubuta ƙa'idar agroecology da yake amfani da ita (sake amfani, inganci, bambanci, taimakon juna, juriya ko ɗaya daga cikin abubuwan mutane). Ku zagaye ƙa'ida ɗaya da kusan ba ku amfani da ita.",
          youCanNow: "haɗa ayyukan gona da ƙa'idodin agroecology da gane waɗanda za ku iya ƙara amfani da su.",
          quickCheck: [
            { objective: "O1", q: "Wata manomiya tana ciyar da awakinta da ganyen wake, kuma tana baza takin awakin a gonar masararta. Waɗanne ƙa'idodi take amfani da su?", options: ["Sake amfani da taimakon juna", "Shugabanci kaɗai", "Ingancin tarakta", "Babu ko ɗaya"], answer: 0, why: "Ragowar amfanin gona suna ciyar da dabbobi, taki kuma yana ciyar da ƙasa: ana sake amfani da sinadarai kuma sassan suna taimakon juna." },
            { objective: "O1", q: "Wanne ne misalin bambanci a gona?", options: ["Masara kaɗai, kowace damina, a kowace gona", "Ƙona dukkan ragowar amfanin gona", "Rogo, gyaɗa, bishiyoyi da awaki a gona ɗaya", "Sayen dukkan abincin dabbobi daga gari"], answer: 2, why: "Amfanin gona, dabbobi da bishiyoyi da yawa tare bambanci ne, ɗaya daga cikin abubuwa 10 na FAO." }
          ]
        },
        {
          title: "Farfaɗo da ƙasar da ta lalace: amfanin rufe ƙasa da takin kore",
          objectives: ["O2"],
          minutes: 6,
          goal: "Zaɓi amfanin rufe ƙasa ko takin kore don gonar da ta lalace, ku tsara lokacin shuka da yanka.",
          text: [
            "Ƙasar da ta lalace ta rasa ruɓaɓɓun abubuwa (organic matter) da tsarinta: ruwan sama yana gudu a sama, amfanin gona ba sa girma sosai, kuma ciyayi kamar kuduji (striga) suna mamaye ta. Ciyawar rufe ƙasa (mulch) da takin gida suna taimakawa, amma ba safai kuke da isasshe ba. Amfanin rufe ƙasa da takin kore suna shuka ruɓaɓɓun abubuwan a cikin gonar kanta.",
            "Amfanin rufe ƙasa (cover crop) ana shuka shi musamman don rufe da kare ƙasa, sau da yawa tsakanin damina. Takin kore (green manure) ana shuka shi sannan a yanke shi a bar shi a kan ƙasa ko a haɗa shi cikinta don ya ciyar da ita. Tsirrai masu ƙwaya irin na wake (legumes) suna yin duka biyun kuma suna ƙara nitrogen: lablab, mucuna (velvet bean), canavalia (jack bean), crotalaria, wake da waken kurege (pigeon pea) ana amfani da su a sassa daban-daban na Afirka. Wasu, kamar lablab da wake, suna kuma ba da abinci ko abincin dabbobi; ƙwayar mucuna tana buƙatar sarrafawa ta musamman kafin mutane su ci ta, don haka ku ɗauke ta a matsayin amfanin ƙasa da abincin dabbobi, ku tambayi jami'in faɗakarwa.",
            "Ana iya amfani da ganyen wasu ƙananan bishiyoyi a matsayin takin ganye kore ma. A yammacin Kenya, manoma suna yanka ganyen tithonia (Mexican sunflower) daga shinge suna baza su a gonaki; bincike ya gano ganyen suna da sinadarai sosai, amma yanka da ɗauka aiki ne mai wuya, don haka ya fi amfani a kan kayan lambu da sauran amfanin gona masu tsada.",
            "Lokaci yana da muhimmanci. Ku shuka amfanin rufe ƙasa da wuri don ya girma sosai kafin rani, ko ku shuka shi cikin babban amfanin gona bayan 'yan makonni da shuka (relay). Ku yanke shi kafin ya fara gasa da amfanin gonarku na gaba ko ya yi ƙwaya mai tauri, ku bar abin da kuka yanke a saman ƙasa a matsayin ciyawar rufe ƙasa. Ku tambayi jami'in faɗakarwa ko cibiyar bincike wane iri da waɗanne ranaku suka dace da ruwan saman yankinku."
          ],
          steps: ["Ku zagaya gonar: ina babu komai, ina ta yi tauri, ko ina kuduji ya cika?", "Ku zaɓi irin amfanin rufe ƙasa ko takin kore ɗaya ko biyu da suka dace da ruwan saman yankinku.", "Ku yanke shawara: ku shuka shi tsakanin damina, cikin babban amfanin gona (relay), ko a matsayin hutun gona.", "Ku rubuta ranar shuka da ranar yanka.", "Ku yanke shi kafin ya gasa da amfanin gonarku; ku bar shi a saman ƙasa.", "Ku hana dabbobi shiga har sai ya gama aikinsa, ko ku tsara raba shi a matsayin abincin dabbobi."],
          words: [["Ƙasar da ta lalace", "ƙasar da ta rasa ƙasa, ruɓaɓɓun abubuwa ko tsirrai masu rufe ta, don haka tana ba da amfani ƙasa da yadda ya kamata sosai."], ["Amfanin rufe ƙasa (cover crop)", "amfanin gona da ake shukawa musamman don rufe da kare ƙasa."], ["Takin kore (green manure)", "amfanin gona da ake shukawa sannan a yanke shi a bar shi a kan ƙasa ko a cikinta don ya ciyar da ita."], ["Shuka cikin amfanin gona (relay cropping)", "shuka amfanin gona na biyu cikin amfanin gona da ke tsaye kafin a girbe na farko."]],
          slides: [
            { title: "Ku shuka ruɓaɓɓun abubuwa a cikin gonar", bullets: ["Ƙasar da ta lalace: ruwa yana gudu, tsirrai ba sa girma, kuduji", "Ciyawar rufe ƙasa ko takin gida ba su isa a kawo ba", "Amfanin rufe ƙasa da takin kore suna girma a wurin"] },
            { title: "Zaɓin tsirrai irin na wake (legumes)", bullets: ["Lablab, wake, waken kurege: abinci ko abincin dabbobi ma", "Mucuna, canavalia, crotalaria: na ƙasa da abincin dabbobi", "Suna ƙara nitrogen daga iska"] },
            { title: "Takin ganye kore", bullets: ["Ganyen tithonia a yammacin Kenya", "Suna da sinadarai sosai; yanka aiki ne mai wuya", "Ya fi amfani a kan amfanin gona masu tsada"] },
            { title: "Ku daidaita lokaci", bullets: ["Ku shuka da wuri ko cikin babban amfanin gona", "Ku yanke kafin ya gasa ko ya yi ƙwaya mai tauri", "Ku tambayi jami'in faɗakarwa abin da ya dace da ruwan samanku"] }
          ],
          sources: [TITHONIA, FAO_SOM],
          tryIt: "Ku zaɓi gonarku da ta fi lalacewa. Ku zaɓi amfanin rufe ƙasa ko takin kore ɗaya don ita, ku rubuta: dalilin da yasa kuka zaɓe shi, ranar shuka, yadda za ku shuka shi (tsakanin damina, cikin amfanin gona ko hutun gona) da ranar yanka. Ku rubuta tambaya ɗaya da za ku yi wa jami'in faɗakarwa.",
          youCanNow: "zaɓar amfanin rufe ƙasa ko takin kore don gonar da ta lalace da tsara lokacin shuka da yanka shi.",
          quickCheck: [
            { objective: "O2", q: "Mene ne babban bambanci tsakanin amfanin rufe ƙasa da takin kore?", options: ["Amfanin rufe ƙasa koyaushe bishiyoyi ne", "Takin kore ana saya a buhu", "Babu bambanci", "Takin kore ana shuka shi don a yanke shi a bar shi ya ciyar da ƙasa"], answer: 3, why: "Amfanin rufe ƙasa yana kare ƙasa; takin kore ana shuka shi musamman don a yanke shi ya ciyar da ita (amfanin gona da yawa suna yin duka biyun)." },
            { objective: "O2", q: "Yaushe ya kamata ku yanke amfanin rufe ƙasa da aka shuka kafin masara?", options: ["Kafin ya gasa da masarar ko ya yi ƙwaya mai tauri", "Ba za a taɓa ba", "Bayan an girbe masarar", "Sai idan ya yi fure mai ruwan shunayya"], answer: 0, why: "Yanka a lokacin da ya dace yana hana gasa kuma yana barin ciyawar rufe ƙasa don amfanin gona na gaba." }
          ]
        },
        {
          title: "Bishiyoyin da ke dawowa: FMNR da bishiyoyin taki",
          objectives: ["O3"],
          minutes: 6,
          goal: "Tsara farfaɗo da bishiyoyi da manoma ke kula da shi (FMNR) ko bishiyoyin taki don gona ɗaya.",
          text: [
            "Gonaki da yawa da suke kama da babu bishiyoyi har yanzu suna da kututture da saiwoyi masu rai a ƙarƙashin ƙasa. Farfaɗo da bishiyoyi da manoma ke kula da shi (FMNR) yana barin su sake girma maimakon sare su kowace damina. A Nijar, FMNR ya yaɗu daga manomi zuwa manomi kuma ya dawo da bishiyoyi a kan fiye da hekta miliyan biyar na gonaki, yana ba da abincin dabbobi, itacen girki, inuwa da amfanin gona mafi kyau.",
            "Matakan, daga World Vision da jagororin abokan aikinta: ku duba gonar don kututturen da ke tsiro, ku zaɓi irin bishiyoyi masu amfani; a kowane kututture, ku bar rassa uku zuwa biyar mafi tsawo da mafi miƙewa, ku yanke sauran; ku yanke rassan gefe har zuwa kusan rabin tsayin kowane reshe, da kayan aiki mai kaifi, kuna yankawa zuwa sama; ku dawo bayan 'yan watanni don cire sababbin tsiro; ku kare rassan daga dabbobi da wuta; idan kun girbe wani reshe, ku bar ƙarami ya maye gurbinsa. Ku yi alama a rassan da kuka zaɓa, ku yarda da dokoki tare da maƙwabta da al'ummarku don dabbobi da masu sare itace su bar su.",
            "Inda babu kututture, kuna iya shuka bishiyoyin taki: bishiyoyi irin na wake kamar gliricidia, gawo (faidherbia, wadda ta zama ruwan dare a gonakin Sahel masu bishiyoyi, har da yankin gyaɗa na Senegal) ko calliandra, waɗanda ganyensu ke ciyar da ƙasa ko dabbobi. Gwaje-gwaje na tsawon lokaci a Malawi da Zambia sun gano masarar da aka shuka tare da gliricidia ta ba da amfani mafi daidaito a tsawon shekaru fiye da masara mai taki kaɗai, ko da yake yanke rassan bishiyoyin sau biyu ko uku a shekara aiki ne na gaske.",
            "Kafin ku sare ko sayar da bishiyoyi, ku duba dokokin gandun daji na ƙasarku da dokokin al'ummarku."
          ],
          steps: ["Ku zagaya gonar ku yi alama a kututture masu rai da ƙananan bishiyoyi.", "Ku zaɓi irin bishiyoyi masu amfani: abincin dabbobi, itacen girki, 'ya'yan itace, ƙasa.", "Ku bar rassa 3 zuwa 5 miƙaƙƙu a kowane kututture; ku yanke sauran.", "Ku yanke rassan gefe har rabin tsayi; kayan aiki mai kaifi, ku yanka zuwa sama.", "Ku kare daga dabbobi da wuta; ku yarda da dokoki tare da maƙwabta.", "Babu kututture? Ku tsara bishiyoyin taki da shawarar jami'in faɗakarwa."],
          words: [["FMNR", "farfaɗo da bishiyoyi da manoma ke kula da shi: barin kututture da saiwoyin bishiyoyi a ƙasarku su sake girma, sannan a zaɓi a gyara rassa mafi kyau."], ["Bishiyar taki", "bishiya, yawanci irin na wake, wadda ganyenta ke ciyar da ƙasa."], ["Gonaki masu bishiyoyi (parkland)", "gonar da bishiyoyi suke a warwatse cikin gonaki."], ["Dokar yanki (by-law)", "doka da al'umma ko majalisar yanki suka amince da ita."]],
          slides: [
            { title: "Daji a ƙarƙashin ƙasa", bullets: ["Kututture da saiwoyi masu rai a gonaki marasa bishiyoyi", "FMNR yana barin su sake girma", "Nijar: bishiyoyi sun dawo a kan hekta miliyan 5+"] },
            { title: "Matakan FMNR", bullets: ["Ku zaɓi kututture da irin bishiyoyi masu amfani", "Ku bar rassa 3 zuwa 5 miƙaƙƙu", "Ku yanke har rabin tsayi; kayan aiki mai kaifi, zuwa sama"] },
            { title: "Kariya da kulawa", bullets: ["Ku cire sababbin tsiro bayan 'yan watanni", "Ku hana dabbobi da wuta", "Ku yarda da dokoki tare da al'umma"] },
            { title: "Babu kututture? Bishiyoyin taki", bullets: ["Gliricidia, gawo (faidherbia), calliandra", "Amfanin masara mafi daidaito a gwajin Malawi da Zambia", "Yanke rassa aiki ne; ku duba dokokin gandun daji"] }
          ],
          sources: [FMNR_STEPS, FMNR_ICRAF, GLIRICIDIA, FAO_AGROFOR],
          tryIt: "Ku zagaya gona ɗaya ku ƙirga kututture masu rai ko ƙananan bishiyoyi. Ku yi zane mai sauri da alamar waɗanda za ku bari. Ku rubuta irin bishiyoyin (ko ku tambayi wani), abin da kuke so daga gare su, da yadda za ku kare su daga dabbobi da wuta.",
          youCanNow: "tsara farfaɗo da bishiyoyi da manoma ke kula da shi (FMNR) ko bishiyoyin taki don gona, mataki-mataki.",
          quickCheck: [
            { objective: "O3", q: "A FMNR, me za ku yi da tsiro masu yawa a kan kututture mai rai?", options: ["Ku yanke su duka kowace damina", "Ku ƙone kututturen", "Ku bar rassa uku zuwa biyar mafi tsawo da mafi miƙewa, ku yanke sauran", "Ku bar kowane tsiro ya girma"], answer: 2, why: "Barin 'yan rassa masu kyau yana sa su girma da sauri su zama bishiyoyi masu amfani." },
            { objective: "O3", q: "Me yasa manomi zai yarda da dokokin FMNR tare da maƙwabta?", options: ["Don dabbobi da masu sare itace su bar rassan da aka zaɓa", "Don sayar da kututturen", "Domin bishiyoyi suna girma da sauri bayan taro", "Ba a taɓa buƙata ba"], answer: 0, why: "Yarjejeniyar al'umma tana kare rassan daga kiwo da sarewa yayin da suke girma." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Ƙa'idodi da farfaɗo da ƙasa",
        questions: [
          { objective: "O1", q: "Makarantar manoma a gona inda manoma da masu bincike suke gwada ayyuka tare misali ne na wane abu na agroecology?", options: ["Haɗa ilimi tare", "Ingancin taki", "Noman amfani iri ɗaya kaɗai", "Kayan da ake shigo da su"], answer: 0, why: "Manoma da masu bincike suna koyo tare shi ne haɗa ilimi tare." },
          { objective: "O1", q: "Wane aiki ne yake nuna taimakon juna?", options: ["Sayar da dukkan ragowar amfanin gona", "Tsirrai irin na wake suna ƙara nitrogen da masara ta gaba za ta yi amfani da shi", "Barin gona babu komai a kanta", "Ƙona kututturen amfanin gona"], answer: 1, why: "Tsiron wake yana taimakon masara: sassa biyu na gona suna aiki tare." },
          { objective: "O2", q: "Wata gona a Ghana babu komai a kanta kuma ta yi tauri bayan girbi. Me za ku shuka don kare ta da ciyar da ita kafin damina ta gaba?", options: ["Babu komai; ku bar ta haka", "Amfanin gona iri ɗaya kuma tare da ƙarin taki", "Amfanin rufe ƙasa irin na wake kamar wake ko lablab", "Ciyayi kawai"], answer: 2, why: "Amfanin rufe ƙasa irin na wake yana kare ƙasa kuma yana ƙara nitrogen da ruɓaɓɓun abubuwa." },
          { objective: "O2", q: "Ganyen tithonia suna da sinadarai sosai amma yanka da ɗaukarsu aiki ne mai yawa. A ina suka fi amfani?", options: ["A baza su kaɗan-kaɗan a kan manyan gonakin masara", "A kan amfanin gona masu tsada kamar kayan lambu", "A ƙone su don toka", "A ciyar da aladu kaɗai"], answer: 1, why: "Bincike a yammacin Kenya ya gano aikin ya fi biya a kan amfanin gona masu tsada." },
          { objective: "O3", q: "Har zuwa wane tsayi ya kamata ku yanke rassan gefe a kan ƙananan rassan FMNR?", options: ["Ba za a yanke ba", "Ku sare dukkan reshen a ƙasa", "Har zuwa sama", "Har zuwa kusan rabin tsayin reshen"], answer: 3, why: "Yanke rassa zuwa sama sosai yana sa reshe ya yi rauni ga iska da dabbobi." }
        ]
      }
    },
    {
      name: "Babi na 2: Gonar da ke ciyar da kanta",
      lessons: [
        {
          title: "Amfanin gona, dabbobi da bambancin halittu suna aiki tare",
          objectives: ["O4"],
          minutes: 5,
          goal: "Zana yadda abinci, taki na dabbobi da ragowar amfanin gona ke tafiya tsakanin amfanin gonarku da dabbobinku.",
          text: [
            "A gonar da ke haɗa noma da kiwo, amfanin gona da dabbobi suna iya ciyar da juna. Ragowar amfanin gona, amfanin rufe ƙasa, ganyen bishiyoyi da ragowar hatsi suna ciyar da dabbobi; dabbobi suna mayar da su madara, nama, ƙwai, ƙarfin aiki da taki; taki da fitsari suna komawa su ciyar da ƙasa. Idan waɗannan haɗin suna da ƙarfi, kuɗi kaɗan ne ke barin gonar.",
            "Ku zana shi. Ku sa gonakinku, dabbobinku, gidanku da tarin takin gida ko na dabbobi a takarda, sannan ku zana kibiyoyi: karan masara zuwa awaki, taki zuwa gonar kayan lambu, kashin kaji zuwa takin gida, ruwan tafkin kifi zuwa kayan lambu a gonar kifi. Sannan ku yi alama a wuraren da ake asara: ƙona ragowar amfanin gona, barin taki a rana da ruwan sama, rasa fitsari, sayar da amfanin gona ba tare da wani abu ya dawo ba. Kowane wurin asara wuri ne na samun riba.",
            "Bambancin halittu ma ɓangare ne na tsarin. Bishiyoyi, shinge, layukan ciyawa da tsirrai masu fure suna ba da mazauni ga ƙwari da tsuntsayen da ke cin kwari masu ɓarna, da ƙudan zuma da ke taimakon fure na wake, tumatir da kofi su yi 'ya'ya. Amfanin gona da iri daban-daban suna raba haɗari. Ku bar wasu kusurwoyi na daji, ku guji fesa magani idan ba ku buƙata ba, kuma ku shuka fiye da amfanin gona ɗaya.",
            "Ku lura da daidaito: dabbobi suna buƙatar abinci a tsawon rani, kuma ragowar amfanin gona da aka ba dabbobi ba sa kan ƙasa a matsayin ciyawar rufe ƙasa. Ku yanke shawarar wane kaso zai tafi ina, kuma ku shuka ƙarin abincin dabbobi (layukan ciyawa, bishiyoyin abincin dabbobi, lablab) don kada ku zama dole ku zaɓi ɗaya."
          ],
          steps: ["Ku zana gonakinku, dabbobinku, gidanku da tarin taki.", "Ku zana kibiyoyi don kowace tafiya: abinci, ragowar amfanin gona, taki, ruwa.", "Ku yi alama a wuraren asara: ƙonawa, rasa taki da fitsari, babu abin da ya dawo.", "Ku yi alama a wuraren bambancin halittu: shinge, bishiyoyi, furanni, kusurwoyin daji.", "Ku zaɓi wurin asara ɗaya da za ku rufe a wannan damina."],
          words: [["Noma da kiwo tare (mixed farming)", "noman amfanin gona da kiwon dabbobi a gona ɗaya don su taimaki juna."], ["Tafiyar sinadarai", "yadda sinadarai ke tafiya a cikin gona, misali daga abinci zuwa taki zuwa ƙasa."], ["Bambancin halittu (biodiversity)", "yawan nau'o'in tsirrai, dabbobi, ƙwari da rayayyun halittun ƙasa a gona da kewayenta."], ["Maƙiyan kwari na halitta", "ƙwari, tsuntsaye da sauran dabbobin da ke cin kwari masu ɓarna amfanin gona."]],
          slides: [
            { title: "Amfanin gona suna ciyar da dabbobi, dabbobi suna ciyar da ƙasa", bullets: ["Ragowar amfanin gona, abincin dabbobi, ganyen bishiyoyi zuwa dabbobi", "Madara, nama, ƙwai, ƙarfin aiki da taki suna dawowa", "Haɗi mai ƙarfi = kuɗi kaɗan ne ke fita"] },
            { title: "Ku zana tafiye-tafiyen gonarku", bullets: ["Kibiyoyi: abinci, taki, ragowar amfanin gona, ruwa", "Ku yi alama a asara: ƙonawa, rasa taki, fitsari", "Kowace asara riba ce da ke jira"] },
            { title: "Bambancin halittu yana aiki dominku", bullets: ["Shinge da furanni suna ba da mazauni ga masu cin kwari da ƙudan zuma", "Amfanin gona da yawa suna raba haɗari", "Ku fesa magani sai idan ana buƙata kawai"] },
            { title: "Ku daidaita abincin dabbobi da rufe ƙasa", bullets: ["Ragowar amfanin gona ba za su zama abinci da ciyawar rufe ƙasa a lokaci ɗaya ba", "Ku shuka ƙarin abincin dabbobi: layukan ciyawa, lablab, bishiyoyi"] }
          ],
          sources: [FAO_10, FAO_AGROFOR],
          tryIt: "Ku zana taswirar tafiye-tafiyen gonarku da aƙalla kibiyoyi uku tsakanin amfanin gona da dabbobi. Ku yi alama a aƙalla wurin asara ɗaya da wuri ɗaya da za ku iya ƙara bambancin halittu. Ku rubuta wurin asara ɗaya da za ku rufe a wannan damina.",
          youCanNow: "zana yadda abinci, taki na dabbobi da ragowar amfanin gona ke tafiya a gonarku da gano wuraren asara da za a rufe.",
          quickCheck: [
            { objective: "O4", q: "A taswirar tafiye-tafiye, wanne ne wurin asara?", options: ["Karan masara da aka ba awaki", "Taki da aka baza a gonar kayan lambu", "Taki da aka bari a rana da ruwan sama har ruwa ya kwashe shi", "Kashin kaji da aka ƙara a takin gida"], answer: 2, why: "Takin da aka bari a rana da ruwan sama yana rasa sinadaran da ya kamata su koma ƙasa." },
            { objective: "O4", q: "Me yasa za a bar shinge, bishiyoyi da tsirrai masu fure a kewayen gonaki?", options: ["Suna ba da mazauni ga maƙiyan kwari masu ɓarna da masu taimakon fure", "Koyaushe suna rage amfani", "Don ado ne kawai", "Suna hana ruwan sama"], answer: 0, why: "Mazauni ga masu cin kwari da ƙudan zuma hidima ce ta kyauta ga amfanin gonarku." }
          ]
        },
        {
          title: "Rage kuɗin takin da ake shigo da shi",
          objectives: ["O5"],
          minutes: 5,
          goal: "Ƙiyasta buhunan takin da ake saya nawa sinadaran gonar za su iya maye gurbinsu, da kuɗin da za a ajiye.",
          text: [
            "Yawancin takin zamani (na masana'anta) da ake amfani da shi a Afirka ana shigo da shi ne, don haka farashinsa yana bin kasuwannin duniya da canjin kuɗi. Agroecology tana nufin a rage buƙatarsa, ba koyaushe a daina gaba ɗaya ba. Ku fara daga abin da kuka yi amfani da shi a daminar da ta gabata: buhu nawa, wane iri, a wace gona, da nawa suka kashe.",
            "Sannan ku rubuta sinadaran gonar da za ku iya ƙarawa: amfanin rufe ƙasa irin na wake da haɗa amfanin gona (nitrogen), bishiyoyin taki da takin ganye kore, ƙarin taki na dabbobi da fitsari da aka fi kulawa da su, ruwan taki daga biogas (bio-slurry) idan kuna da injin biogas, da ragowar amfanin gona da aka bari a gona. Haɗa ɗan ƙaramin takin zamani da waɗannan sau da yawa yana aiki fiye da kowanne shi kaɗai. A gwajin Malawi, masara mai gliricidia tare da rabin takin da aka ba da shawara ta yi kusan kamar masara mai cikakken taki.",
            "Ku ƙiyasta, sannan ku gwada. Misali (adadi na ƙirƙira): wata manomiya a Kakamega ta yi amfani da buhu 4 a eka ɗaya, KES 3,500 kowane buhu. Da lablab da aka shuka cikin amfanin gona da ƙarin taki na dabbobi, tana shirin gwada buhu 2 a rabin gonar da buhu 4 a ɗaya rabin, ta kwatanta amfanin. Idan amfanin ya yi daidai, za ta ajiye buhu 2, KES 7,000, a wannan eka. Kada ku rage taki ba zato ba tsammani a dukkan ƙasarku.",
            "Ku tambayi jami'in faɗakarwa ko ɗakin gwajin ƙasa ya duba shirinku da sakamakon gwajin ƙasarku, kuma ku sayi takin zamani daga dillalan kayan noma masu rajista kaɗai, a cikin buhunan da aka rufe."
          ],
          steps: ["Ku rubuta takin daminar da ta gabata: buhu, iri, gona, kuɗi.", "Ku rubuta sinadaran gonar da za ku iya ƙarawa.", "Ku tsara rage taki a ɓangaren gona, tare da sinadaran gonar.", "Ku bar layin cikakken taki don kwatanta.", "Ku ƙiyasta buhunan da kuɗin da za a ajiye idan amfani bai ragu ba.", "Ku duba shirin tare da jami'in faɗakarwa; ku faɗaɗa abin da ya yi aiki kaɗai."],
          words: [["Takin zamani (mineral fertilizer)", "takin da aka yi a masana'anta, kamar urea, DAP ko NPK, yawanci ana sayar da shi a buhu."], ["Haɗaɗɗen kula da ƙarfin ƙasa (integrated soil fertility management)", "haɗa sinadarai na halitta (taki na dabbobi, tsirrai irin na wake, ragowar amfanin gona) da ɗan ƙaramin takin zamani."], ["Layin kwatanta", "ɓangaren gona da ake noma ta tsohuwar hanya don ku kwatanta sakamako da adalci."]],
          slides: [
            { title: "Me yasa za a rage takin da ake shigo da shi", bullets: ["Farashi yana bin kasuwannin duniya da canjin kuɗi", "Ku rage buƙatarsa, ba koyaushe ku daina ba", "Ku fara daga buhuna da kuɗin daminar da ta gabata"] },
            { title: "Sinadaran gonar kanta", bullets: ["Tsirrai irin na wake, haɗa amfanin gona, bishiyoyin taki", "Taki na dabbobi, fitsari, ruwan taki na biogas, ragowar amfanin gona", "Ku haɗa da ɗan ƙaramin takin zamani"] },
            { title: "Ku gwada kafin ku rage", bullets: ["Misali: buhu 2 da buhu 4 a rabin gonaki", "Amfani iri ɗaya = an ajiye buhu 2, KES 7,000 (na ƙirƙira)", "Kada ku rage duka a lokaci ɗaya"] },
            { title: "Ku duba ku saya lafiya", bullets: ["Jami'in faɗakarwa ko ɗakin gwajin ƙasa ya duba shirinku", "Dillalan kayan noma masu rajista, buhunan da aka rufe"] }
          ],
          sources: [GLIRICIDIA, HANDBOOK_4R],
          tryIt: "Ku rubuta takin da kuka yi amfani da shi a daminar da ta gabata a gona ɗaya. Ku rubuta hanyoyin sinadaran gona biyu da za ku ƙara. Ku tsara gwaji a rabin gona da ƙarancin taki, ku ƙiyasta buhuna da kuɗin da za ku ajiye idan amfani bai ragu ba, da kuɗin ƙasarku.",
          youCanNow: "ƙiyasta yawan takin da ake saya da sinadaran gonar za su iya maye gurbinsa, da tsara gwaji mai adalci kafin ku rage.",
          quickCheck: [
            { objective: "O5", q: "Kuna son rage amfani da taki. Mene ne mataki na farko mafi aminci?", options: ["Ku daina dukkan taki a kowace gona a lokaci ɗaya", "Ku ninka takin", "Ku sayi takin da ba shi da lakabi domin ya fi arha", "Ku gwada ƙarancin taki tare da sinadaran gona a ɓangaren gona, kusa da layin cikakken taki"], answer: 3, why: "Gwaji gefe da gefe yana nuna ko ƙarancin takin yana aiki kafin ku saka dukkan girbinku cikin haɗari." },
            { objective: "O5", q: "Wani manomi a Najeriya ya yi amfani da buhu 6, NGN 40,000 kowanne, sannan ya rage zuwa 4 da amfani iri ɗaya. Nawa ya ajiye?", options: ["NGN 40,000", "NGN 80,000", "NGN 240,000", "Babu komai"], answer: 1, why: "Buhu 2 × NGN 40,000 = NGN 80,000 (adadi na misali)." }
          ]
        },
        {
          title: "Auna gyaruwa a kowace damina",
          objectives: ["O6", "O2", "O5"],
          minutes: 5,
          goal: "Rubuta ma'aunin ƙasa da na gona masu sauƙi a lokaci ɗaya kowace damina.",
          text: [
            "Farfaɗo da ƙasa yana da jinkiri. Wataƙila amfani ba zai yi tsalle a damina ta farko ba, don haka kuna buƙatar wasu alamu don ganin ko ƙasar tana dawowa. Ku auna wurare iri ɗaya, a wata iri ɗaya, kowace damina, kuma ku rubuta.",
            "Ma'auni masu sauƙi: rufin ƙasa (yawan ƙasar da tsirrai ko ciyawar rufe ƙasa suka rufe; ku ƙiyasta da ido ko ku ƙirga a cikin wani murabba'i); tsutsotsin ƙasa (ku haƙa dunƙulen ƙasa girman shebur ku ƙirga); shigar ruwa (ku tura gwangwani da aka yanke ƙasa da samansa cikin ƙasa, ku zuba ruwa, ku auna lokacin da yake ɗauka kafin ya shiga); ƙamshin ƙasa da dunƙulenta (shin tana fashewa zuwa ƙananan dunƙule ko manyan dunƙule masu tauri?); hoton ƙasa daga wuri ɗaya; amfanin gona daga wani yanki da aka yi wa alama; da buhunan taki da kuɗin da kuka kashe.",
            "Bayan 'yan shekaru, gwajin ƙasa a ɗakin gwaji zai iya nuna ruɓaɓɓun abubuwa da sinadarai (duba \"Lafiyar Ƙasa da Ƙarfinta\" don ɗaukar samfur). Ku kwatanta gonar da kuke farfaɗowa da wadda ba a canja ba idan za ku iya.",
            "Waya tana taimakawa: ku ɗauki hotuna daga wuri ɗaya, ku ajiye lambobinku a manhajar rubutu (notes) ko spreadsheet, ku tambayi mataimakin AI ya mayar da su tebur ko jadawali mai sauƙi. Lambobin daga gonarku suke."
          ],
          steps: ["Ku yi alama a wurare uku a gonar da sanduna ko duwatsu.", "Ku zaɓi aƙalla ma'auni huɗu: rufin ƙasa, tsutsotsi, shigar ruwa, dunƙule, hoto, amfani, kuɗi.", "Ku rubuta su a wata iri ɗaya kowace damina.", "Ku kwatanta da daminar da ta gabata da kuma gonar da ba a canja ba.", "Ku sake duba shirinku: ku ci gaba da abin da ya yi aiki, ku canja wanda bai yi ba."],
          words: [["Alama (indicator)", "wata alama mai sauƙi da kuke aunawa don ganin ko abubuwa suna gyaruwa ko suna ƙara lalacewa."], ["Shigar ruwa (infiltration)", "saurin da ruwa ke shiga cikin ƙasa."], ["Rufin ƙasa (ground cover)", "kason saman ƙasa da tsirrai ko ciyawar rufe ƙasa suka rufe."], ["Ma'aunin farko (baseline)", "ma'aunin ku na farko, wanda ake kwatanta na baya da shi."]],
          slides: [
            { title: "Canji mai jinkiri yana buƙatar aunawa", bullets: ["Amfani bazai yi tsalle a damina ta farko ba", "Wurare iri ɗaya, wata iri ɗaya, kowace damina", "Ku rubuta shi"] },
            { title: "Ma'auni masu sauƙi", bullets: ["Rufin ƙasa da ƙirgar tsutsotsi", "Shigar ruwa: ku auna lokacin da ruwa ke shiga", "Dunƙule, hoto, amfani, kuɗin taki"] },
            { title: "Ku kwatanta", bullets: ["Da daminar da ta gabata (ma'aunin farkonku)", "Da gonar da ba a canja ba", "Gwajin ɗakin gwaji bayan 'yan shekaru"] },
            { title: "Wayarku tana taimakawa", bullets: ["Hotuna daga wuri ɗaya", "Lambobi a notes ko spreadsheet", "AI zai iya tsara su a tebur"] }
          ],
          sources: [FAO_SOM, FAO_AE],
          tryIt: "Aikin ƙarshe: ku rubuta shirin farfaɗo da ƙasa na damina uku don gona ɗaya, tare da zane. Sannan ku ɗauki ma'aunin farkonku yau: ku yi alama a wurare uku ku rubuta aƙalla ma'auni huɗu (misali rufin ƙasa, ƙirgar tsutsotsi, lokacin shigar ruwa da hoto).",
          youCanNow: "auna ƙasarku da gonarku da alamu masu sauƙi kowace damina da amfani da su don tantance shirin farfaɗo da ƙasarku.",
          quickCheck: [
            { objective: "O6", q: "Me yasa za a auna wurare iri ɗaya a wata iri ɗaya kowace damina?", options: ["Yana da kyan gani", "Don kwatancen ya zama mai adalci kuma ya nuna canji na gaske", "Domin tsutsotsi suna bayyana a wata ɗaya kawai", "Don a ƙara amfani da takarda"], answer: 1, why: "Wuri da lokaci iri ɗaya suna kawar da wasu dalilai, don haka canje-canje suna nuna yanayin ƙasa." },
            { objective: "O6", q: "Ruwa a gwangwanin shigar ruwa yana shiga da sauri fiye da bara. Me hakan yake nunawa?", options: ["Ƙasar tana ƙara lalacewa", "Gwangwanin ya karye", "Babu komai", "Tsarin ƙasa yana gyaruwa kuma tana riƙe ƙarin ruwan sama"], answer: 3, why: "Saurin shigar ruwa yana nufin ƙarin ruwan sama yana shiga ƙasa maimakon ya gudu a sama." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Gonar da ke ciyar da kanta",
        questions: [
          { objective: "O4", q: "Wace kibiya ce ta dace a taswirar tafiye-tafiye tsakanin amfanin gona da dabbobi?", options: ["Karan masara zuwa awaki, da takin awaki zuwa gonar masara", "Taki daga gari zuwa shago", "Ruwan sama daga sama zuwa kogi", "Katin waya zuwa ga manomi"], answer: 0, why: "Abinci zuwa dabbobi da taki da ke komawa gonaki su ne tafiye-tafiyen sinadaran gonar kanta." },
          { objective: "O4", q: "Ana buƙatar ragowar amfanin gona duka a matsayin abincin dabbobi na rani da ciyawar rufe ƙasa. Me ya fi taimakawa?", options: ["Ku ƙone rabi", "Ku shuka ƙarin abincin dabbobi kamar layukan ciyawa, lablab ko bishiyoyin abincin dabbobi", "Ku sayar da dabbobin", "Ku bar gonar babu komai a kanta"], answer: 1, why: "Ƙarin abincin dabbobi yana rage gasa tsakanin ciyar da dabbobi da rufe ƙasa." },
          { objective: "O5", q: "Me gwaje-gwaje na tsawon lokaci a Malawi suka gano game da masara mai gliricidia tare da rabin taki?", options: ["Koyaushe ta gaza", "Ta buƙaci ninki biyu na taki", "Amfaninta ya yi kusan kamar masara mai cikakken taki", "Bishiyoyin sun kashe masarar"], answer: 2, why: "Gliricidia tare da rabin taki ta ba da amfani kusa da na cikakken taki a Makoka." },
          { objective: "O5", q: "Daga ina ya kamata ku sayi takin zamani da har yanzu kuke amfani da shi?", options: ["Kowane mai sayarwa a bakin hanya da buhunan da aka buɗe", "Daga tallar intanet da babu adireshi", "Daga ragowar buhunan maƙwabci", "Daga dillalin kayan noma mai rajista, a buhunan da aka rufe"], answer: 3, why: "Dillalai masu rajista da buhunan da aka rufe suna rage haɗarin takin bogi ko wanda aka gauraya." },
          { objective: "O6", q: "Mene ne ma'aunin farko (baseline)?", options: ["Ƙasan gonar", "Wani nau'in taki", "Ma'auni na farko da ake kwatanta na baya da shi", "Girbin ƙarshe da za ku taɓa yi"], answer: 2, why: "Ba tare da ma'aunin farko ba ba za ku iya sanin ko abubuwa sun gyaru ba." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Agroecology da Farfaɗo da Ƙasa",
    questions: [
      { objective: "O1", q: "Wace hukuma ce take bayanin abubuwa 10 na agroecology?", options: ["FIFA", "FAO", "Kamfanin iri", "Bankin Duniya kaɗai"], answer: 1, why: "Ƙasashen da ke cikin FAO sun amince da abubuwa 10 na agroecology na FAO a 2019." },
      { objective: "O1", q: "Mayar da ragowar amfanin gona da taki na dabbobi cikin ƙasa yana amfani da wace ƙa'ida?", options: ["Noman amfani iri ɗaya kaɗai", "Shugabanci", "Shigo da kaya", "Sake amfani"], answer: 3, why: "Mayar da ragowar amfanin gona da taki sake amfani da sinadarai ne." },
      { objective: "O1", q: "Sayar da kayan lambu ga makarantar yanki da sayen iri daga ƙungiyar haɗin gwiwa ta yanki misali ne na:", options: ["Ingancin tarakta", "Taimakon juna na kwari", "Tattalin arziki na zagaye da haɗin kai", "Zaizayar ƙasa"], answer: 2, why: "Saye da sayarwa a yanki da adalci shi ne abin tattalin arziki na zagaye da haɗin kai." },
      { objective: "O2", q: "Wane amfanin gona ne irin na wake da ake yawan amfani da shi a matsayin amfanin rufe ƙasa ko takin kore?", options: ["Masara", "Dawa", "Shinkafa", "Lablab"], answer: 3, why: "Lablab tsiro ne irin na wake da ke rufe ƙasa, yana ƙara nitrogen kuma yana ba da abincin dabbobi." },
      { objective: "O2", q: "Mene ne shuka cikin amfanin gona (relay cropping)?", options: ["Shuka amfanin gona na biyu cikin amfanin gona da ke tsaye kafin a girbe na farko", "Ƙona ragowar amfanin gona a layuka", "Shuka sau ɗaya kawai a kowace shekara biyu", "Ɗaukar amfanin gona da babbar mota"], answer: 0, why: "Shuka cikin amfanin gona yana barin amfanin rufe ƙasa ya fara girma kafin a girbe babban amfanin gona." },
      { objective: "O2", q: "Me yasa za a yanke takin kore kafin ya yi ƙwaya mai tauri?", options: ["Ƙwayar guba ce ga ƙasa", "Yana hana shi zama ciyawa mai gasa da amfanin gona na gaba", "Ƙwaya mai tauri tana sa ruwan sama", "Doka ce ta buƙata"], answer: 1, why: "Yanka a kan lokaci yana hana gasa da tsiron da ba a so." },
      { objective: "O2", q: "Mene ne ƙasar da ta lalace?", options: ["Ƙasar da ke da bishiyoyi da yawa", "Ƙasar da ke ƙarƙashin ruwa", "Ƙasar da ta rasa ƙasa, ruɓaɓɓun abubuwa ko rufi kuma tana ba da amfani ƙasa sosai", "Ƙasar da ke da takardar mallaka"], answer: 2, why: "Ƙasar da ta lalace ta rasa abubuwan da ke sa ta ba da amfani." },
      { objective: "O3", q: "Me FMNR yake amfani da shi don dawo da bishiyoyi?", options: ["Sayayyun ƙananan bishiyoyi (seedlings) kaɗai", "Kututture, saiwoyi da ƙwayoyin da ke cikin ƙasa tuni", "Bishiyoyin roba", "Allurar taki"], answer: 1, why: "FMNR yana kare kuma yana gyara abin da ke sake tsiro daga ƙasa tuni." },
      { objective: "O3", q: "Kusan yawan gonaki nawa ne a Nijar suka dawo da bishiyoyi ta hanyar FMNR?", options: ["Kusan hekta 10", "Kusan hekta 500", "Babu ko ɗaya", "Fiye da hekta miliyan biyar"], answer: 3, why: "FMNR ya yaɗu daga manomi zuwa manomi zuwa fiye da hekta miliyan biyar a Nijar." },
      { objective: "O3", q: "Idan kuna yanke rassan FMNR, ya kamata ku:", options: ["Yi amfani da kayan aiki mai kaifi ku yanka zuwa sama", "Yi amfani da kayan aiki marar kaifi ku yanka zuwa ƙasa", "Ɓare bawon bishiyar", "Yanke har zuwa saman bishiyar"], answer: 0, why: "Yankan mai kaifi zuwa sama yana warkewa da sauri kuma yana yin ɓarna kaɗan." },
      { objective: "O3", q: "Wace bishiyar taki ce ta zama ruwan dare a gonakin Sahel masu bishiyoyi kamar yankin gyaɗa na Senegal?", options: ["Eucalyptus (turare)", "Gawo (faidherbia)", "Mangwaro", "Pine"], answer: 1, why: "Gawo (faidherbia) bishiya ce irin na wake da ake bari sosai a gonakin Sahel." },
      { objective: "O4", q: "Wanne ne wurin asara a taswirar tafiyar sinadaran gona?", options: ["Taki da aka baza a gona", "Ragowar amfanin gona da aka ba awaki", "Ƙona ragowar amfanin gona", "Kashin kaji a takin gida"], answer: 2, why: "Ƙonawa yana tura sinadarai da ruɓaɓɓun abubuwa sama a hayaƙi." },
      { objective: "O4", q: "Ta yaya shinge da tsirrai masu fure suke taimakon amfanin gona?", options: ["Suna ba da mazauni ga masu cin kwari da masu taimakon fure", "Koyaushe suna jawo ƙarin kwari", "Suna sa ƙasa ta yi tsami", "Suna hana ruwan sama isa ga amfanin gona"], answer: 0, why: "Mazauni ga maƙiyan kwari na halitta da ƙudan zuma hidima ce ta kyauta ga amfanin gona." },
      { objective: "O4", q: "A gonar kifin tilapia da kayan lambu, wane haɗi ne mai amfani?", options: ["Zubar da sharar kifi a kogi", "Amfani da ruwan tafki don ban ruwa ga kayan lambu", "Zubar da ruwan tafkin a kan hanya", "Ƙona kayan lambu"], answer: 1, why: "Ruwan tafki mai sinadarai yana ciyar da kayan lambu: haɗin amfanin gona da dabbobi." },
      { objective: "O5", q: "Me yasa farashin takin zamani yake canjawa sosai a ƙasashen Afirka da yawa?", options: ["Ana shuka shi a gonaki", "Ya dogara da ruwan sama", "Ba ya taɓa canjawa", "Yawancinsa ana shigo da shi, don haka yana bin farashin duniya da canjin kuɗi"], answer: 3, why: "Kayan da ake shigo da su suna bin kasuwannin duniya da canjin kuɗi." },
      { objective: "O5", q: "Wata manomiya a Ghana ta yi amfani da buhu 5, GHS 400 kowanne, sannan ta rage zuwa 3 da amfani iri ɗaya. Nawa ta ajiye?", options: ["GHS 800", "GHS 400", "GHS 2,000", "GHS 1,200"], answer: 0, why: "Buhu 2 × GHS 400 = GHS 800 (adadi na misali)." },
      { objective: "O5", q: "Mene ne haɗaɗɗen kula da ƙarfin ƙasa (integrated soil fertility management)?", options: ["Amfani da takin zamani kaɗai", "Rashin amfani da kowane sinadari", "Haɗa sinadarai na halitta da ɗan ƙaramin takin zamani", "Gwajin ƙasa kowane mako"], answer: 2, why: "Yana haɗa hanyoyin halitta da na zamani don kowanne ya fi aiki." },
      { objective: "O6", q: "Wanne ne ma'auni mai sauƙi na gyaruwar ƙasa?", options: ["Launin wayarku", "Saurin da ruwa ke shiga cikin ƙasa", "Farashin masara a gari", "Yawan baƙi"], answer: 1, why: "Saurin shigar ruwa yana nuna tsarin ƙasa mafi kyau." },
      { objective: "O6", q: "Me yasa za ku kwatanta gonar da kuke farfaɗowa da gonar da ba a canja ba?", options: ["Don ganin ko canjin ya fito daga ayyukanku ba yanayi kawai ba", "Don amfani da ƙarin iri", "Domin maƙwabta suna tambaya", "Ba shi da wani bambanci"], answer: 0, why: "Gonar kwatanta tana nuna abin da da zai faru ko ta yaya." },
      { objective: "O6", q: "Ma'auni nawa ya kamata ku rubuta kowace damina a gonar da kuke farfaɗowa?", options: ["Babu ko ɗaya", "Ɗaya, amfani kawai", "Ruwan sama kawai", "Aƙalla huɗu, kamar rufin ƙasa, tsutsotsi, shigar ruwa da amfani"], answer: 3, why: "Ma'auni da yawa suna nuna canji tun kafin amfani ya ƙaru." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [1, 3, 6, 7, 9, 11, 14, 16, 17] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan ɓangare na shirin ku sake gwadawa.",
    criteria: [
      { name: "An ambaci ƙa'idodi", objective: "O1", notYet: "Shirin bai faɗi waɗanne ƙa'idodin agroecology yake amfani da su ba.", meets: "Kowane aiki a cikin shirin an haɗa shi da ƙa'idar agroecology.", exceeds: "Yana amfani da aƙalla ƙa'idodi huɗu daban-daban, har da ɗaya daga cikin abubuwan mutane." },
      { name: "Amfanin rufe ƙasa ko takin kore", objective: "O2", notYet: "Babu amfanin rufe ƙasa ko takin kore, ko babu ranaku.", meets: "Irin da ya dace da ruwan sama, tare da ranakun shuka da yanka.", exceeds: "Yana kuma bayanin yadda ya dace da abincin dabbobi da babban amfanin gona, kuma an duba shi tare da jami'in faɗakarwa." },
      { name: "Bishiyoyi", objective: "O3", notYet: "Babu shirin bishiyoyi, ko bishiyoyi babu kariya.", meets: "FMNR ko bishiyoyin taki tare da rassa ko irin bishiyoyi, yanke rassa da kariya daga dabbobi da wuta.", exceeds: "Ya haɗa da yarjejeniyar al'umma ko dokar yanki, da yadda za a girbe rassa a maye gurbinsu." },
      { name: "Haɗin amfanin gona da dabbobi", objective: "O4", notYet: "Babu taswirar tafiye-tafiye, ko haɗi ɗaya kawai.", meets: "Taswirar tafiye-tafiye da aƙalla haɗi uku da wurin asara ɗaya da za a rufe.", exceeds: "Yana nuna yadda ake raba ragowar amfanin gona tsakanin abincin dabbobi da rufe ƙasa, da inda aka ƙara bambancin halittu." },
      { name: "Ajiye kuɗin taki", objective: "O5", notYet: "Babu ƙiyasi, ko an shirya daina taki a dukkan ƙasa a lokaci ɗaya.", meets: "Ya ƙiyasta buhuna da kuɗin da za a ajiye da kuɗin ƙasar, tare da gwaji mai adalci kusa da layin cikakken taki.", exceeds: "An duba shirin tare da jami'in faɗakarwa ko sakamakon gwajin ƙasa, tare da ƙa'idar lokacin da za a faɗaɗa." },
      { name: "Ma'auni a kowace damina", objective: "O6", notYet: "Babu ma'auni ko babu ma'aunin farko.", meets: "Aƙalla ma'auni huɗu, an ɗauki ma'aunin farko, da rana ga kowace damina.", exceeds: "Ya haɗa da gonar kwatanta da ba a canja ba da hotuna daga wurare na dindindin." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka shuka amfanin rufe ƙasa ko takin kore, ko suka fara FMNR, a damina mai zuwa (binciken biyo baya)",
      "Canjin takin da ake saya a kowace eka a gonar da aka farfaɗo cikin damina biyu (bayanan masu koyo)",
      "Canjin ma'aunin ƙasa (rufin ƙasa, shigar ruwa, ƙirgar tsutsotsi) da amfani a gonar da aka farfaɗo cikin damina uku",
      "Yawan maƙwabta ko 'yan ƙungiya da suka kwaikwayi wani aiki (rahotannin jami'an faɗakarwa)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Takarda, alƙalami da alƙalamai masu launi don taswirar tafiye-tafiyen gona da zanen gona",
      "Shebur, gwangwani marar komai da aka yanke ƙasa da samansa, ruwa da agogo don ma'aunin ƙasa",
      "Sanduna ko duwatsu don yin alama a wuraren aunawa",
      "Bayanan takin daminar da ta gabata da farashinsa (ko adadi na misali)",
      "Waya don hotuna da rubutu (ba dole ba ne)",
      "Kusan minti 90 gaba ɗaya, tare da lokacin gona don ma'aunin"
    ],
    facilitatorNotes: [
      "Ku yi Darasi na 3 da na 6 a gona: ku nemo kututture tare don FMNR, ku yi gwajin shigar ruwa da ƙirgar tsutsotsi a matsayin ƙungiya.",
      "Ku gayyaci jami'in faɗakarwa ko cibiyar bincike (misali KALRO, IITA, CSIR ko ISRA) don tabbatar da waɗanne amfanin rufe ƙasa da bishiyoyin taki suka dace da ruwan saman yankin.",
      "Ku tattauna dokokin kiwo da sare bishiyoyi na yankin a fili; FMNR sau da yawa yana buƙatar yarjejeniyar al'umma.",
      "Kada ku taɓa gabatar da farashin misali a matsayin gaskiya; ku tattara farashin taki na yankin kafin zaman.",
      "Ku ƙarfafa layukan gwaji gefe da gefe maimakon rage taki ba zato ba tsammani a dukkan ƙasa.",
      "Ku ba da maki ga shirin ƙarshe da ma'aunin rubric, kuma ku bi diddigi bayan damina ɗaya da biyu don kwatanta ma'auni."
    ]
  }
};
