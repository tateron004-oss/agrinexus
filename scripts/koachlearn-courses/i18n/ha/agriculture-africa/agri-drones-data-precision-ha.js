"use strict";

// Koach Learn course, Hausa (ha) translation of agriculture-africa/agri-drones-data-precision.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const FAO_EO = { name: "FAO GIEWS: kallon duniya daga sama (NDVI da alamomin tsirrai)", url: "https://www.fao.org/giews/earthobservation/index.jsp" };
const QGIS = { name: "QGIS (manhajar taswira ta GIS kyauta, a buɗe ga kowa)", url: "https://qgis.org/" };
const ODM = { name: "OpenDroneMap (manhajar yin taswira daga jirgi mara matuƙi, kyauta)", url: "https://www.opendronemap.org/" };
const FAO_ITU_DRONES = { name: "FAO da ITU: E-agriculture in Action: Drones for Agriculture (2018)", url: "https://www.itu.int/pub/D-STR-E_AGRICULT.02-2018" };
const FAO_WHO_AERIAL = { name: "FAO da WHO: Jagora kan fesa magungunan ƙwari daga sama (2024)", url: "https://www.who.int/publications/i/item/9789240076785" };

module.exports = {
  id: "agri-drones-data-precision-ha",
  lang: "ha",
  translationOf: "agri-drones-data-precision",
  category: "Agriculture (Africa)",
  name: "Jirage Marasa Matuƙi a Noma: Nazarin Bayanai da Noma Mai Cikakken Daidaito",
  skills: "Duba daidaiton taswirar jirgi mara matuƙi, Zaɓar ma'aunin tsirrai da ya dace, Yin ƙididdigar shiyya da ƙirga shuke-shuke a QGIS, Yin taswirar umarni (prescription map), Gane ko noma mai daidaito yana biya, Isar da sakamako ga manoma",
  outcome: "mayar da bayanan jirgi mara matuƙi zuwa nazari da aka duba kuma mai daidaito, mai ƙididdigar shiyyoyi da taswirar umarni, gane ko aiki da shi zai biya, da isar da sakamakon ta yadda manomi ko manajan gona zai iya aiki da shi.",
  about: [
    "Wannan kwas ɗin na masu nazarin bayanan jirgi mara matuƙi (drone) ne, masana aikin gona, jami'an faɗakarwa (extension), manajojin kasuwancin noma da manyan gonaki, da kamfanonin hidimar jirgi mara matuƙi a Kenya, Najeriya da faɗin Afirka. Ya kamata ku riga kun iya haɗa taswirar jirgi mara matuƙi da yin taswirar NDVI ta farko (ku duba hanyar sa ido, Kwas na 3).",
    "Babi na 1 nazari ne: tabbatar cewa taswira ta yi daidai sosai don a yi aiki da ita, zaɓar ma'aunin tsirrai, da auna shiyyoyi da ƙirga shuke-shuke ko itatuwa a QGIS. Babi na 2 noma mai daidaito ne: yin taswirar umarni daga nazarinku, duba ribar ta hanyar ƙaramin kasafi (partial budget), da gabatar da sakamako ta yadda manoma za su yi aiki da shi.",
    "Misalan suna amfani da masara da wake, shayi, kofi, avocado da rogo. Yawan taki da iri a wannan kwas misali ne kawai: ainihin yawan yana fitowa daga gwajin ƙasa, binciken gida da shawarwarin jami'an faɗakarwa. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku yi amfani da bayanan jirgi mara matuƙi na gona ta gaske ko samfuri kyauta: ku faɗi daidaiton taswirar da yadda kuka duba shi; ku zaɓi ma'aunin tsirrai ku bayyana dalili; ku raba gonar zuwa shiyyoyi ku ba da ƙididdigar kowace shiyya (faɗi da matsakaicin ma'auni) da ƙidayar shuke-shuke ko itatuwa; ku yi taswirar umarni mai yawa ko aiki ga kowace shiyya (da yawan da aka ba da shawara a yankinku); ku lissafa ƙaramin kasafi da ke nuna ko yana biya; sannan ku rubuta sakamako na shafi ɗaya ga manomi da kalmomi masu sauƙi.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Masu nazarin bayanan jirgi mara matuƙi, masana aikin gona, jami'an faɗakarwa, manajojin kasuwancin noma da manyan gonaki, da kamfanonin hidimar jirgi mara matuƙi a Kenya, Najeriya da faɗin Afirka, masu aiki da amfanin gona kamar masara da wake, shayi, kofi, avocado da rogo.",
    startingPoint: "Masu koyo sun riga sun iya haɗa taswirar jirgi mara matuƙi da yin taswirar NDVI ta farko. Kaɗan ne ke duba daidaiton wurin taswira, zaɓar ma'auni bisa amfanin gona da matakin girmansa, mayar da taswira zuwa ƙididdigar shiyya, yin taswirar umarni, gwada ko yana biya, ko gabatar da sakamako ta yadda manomi zai yi aiki da shi.",
    gap: "Taswira mai launi kaɗai ba safai take canja abin da ake yi a gona ba, kuma taswira marar daidaito ko ma'aunin da bai dace ba na iya tura ma'aikata da kayan noma zuwa wuraren da ba daidai ba. Mayar da bayanan jirgi mara matuƙi zuwa lambobi da aka duba, umarni mai amfani da ƙaramin kasafi na gaskiya yana bar manoma da manyan gonaki su kashe kayan noma inda zai biya, kuma su amince da hidimar jirgin.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi; ana bayanin kowane ma'auni da kalmar taswira",
      "Na'urori: kwamfutar tafi-da-gidanka mai QGIS kyauta, da bayanan jirgi mara matuƙi ko samfuri kyauta",
      "Yawan da ke ciki misali ne: ainihin yawan taki da iri yana fitowa daga gwajin ƙasa, binciken gida da jami'an faɗakarwa",
      "Fesawa ko watsawa da jirgi mara matuƙi yana buƙatar izinin hukumar sufurin jiragen sama da na magungunan ƙwari",
      "Bayanan manoma sirri ne, kuma ana raba su ne kawai da izininsu"
    ],
    prerequisites: "\"Jirgi Mara Matuƙi don Sa Ido a Gona 3: Lafiyar Amfanin Gona, Kwari da Sarrafa Bayanai\" (haɗa taswira da yin taswirar NDVI)."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku taswirar jirgi mara matuƙi da aka haɗa da rahoton sarrafa ta", action: "duba daidaiton wurin taswirar da ingancin hotunanta, da ba da rahoton kuskuren", standard: "ta amfani da wuraren gwaji (check points) ko wata hanyar da aka faɗa, kafin kowane nazari" },
    { id: "O2", condition: "Idan aka ba ku amfanin gona, matakin girmansa da kyamarar da aka yi amfani da ita", action: "zaɓar ma'aunin tsirrai da bayyana dalilin da ya sa ya dace", standard: "da tabbatar da shi da taswirar launin gaske da kuma a gona" },
    { id: "O3", condition: "Ta amfani da QGIS da taswirar ma'auni", action: "ƙirƙirar shiyyoyi da ba da rahoton faɗin kowace shiyya da matsakaicin ma'aunin ta, da ƙirga shuke-shuke ko itatuwa", standard: "an duba ƙidayar a samfuri a gona, kuma an faɗi kuskuren" },
    { id: "O4", condition: "Idan aka ba ku shiyyoyi da dalilansu da aka tabbatar a gona", action: "yin taswirar umarni mai yawa ko aiki ga kowace shiyya", standard: "ta amfani da yawa biyu zuwa huɗu daga gwajin ƙasa ko shawarwarin yankinku" },
    { id: "O5", condition: "Don wani aikin noma mai daidaito da aka gabatar", action: "lissafa ƙaramin kasafi mai yanayin taka-tsantsan da yanayin da ya fi yiwuwa", standard: "ana ƙidaya abin da ke canjawa kaɗai, kuma ana faɗin gaskiya idan ba ya biya" },
    { id: "O6", condition: "Ga manomi ko manajan gona", action: "rubuta gajeren sakamako da ke farawa da aikin da za a yi, a harshensu da ma'aunansu", standard: "yana nuna yadda kuka tabbata da abin da aka duba a gona" }
  ],
  chapters: [
    {
      name: "Babi na 1: Nazarin bayanai",
      lessons: [
        {
          objectives: ["O1"],
          title: "Shin taswirar ta yi daidai sosai don a yi aiki da ita?",
          minutes: 6,
          goal: "Duba daidaiton wurin taswirar jirgi mara matuƙi da ingancin hotunanta kafin ku yi nazari.",
          text: [
            "Kafin ku tura ma'aikata zuwa wata shiyya, dole ku amince cewa taswirar ta sa abubuwa a wurinsu na gaskiya. GNSS na yau da kullum na jirgi mara matuƙi na iya sa taswira ta kauce da mita kaɗan. Hakan ba laifi ba ne don nemo kusurwa mai ruwa, amma bai isa ba don jagorantar aiki a layi ɗaya-ɗaya ko kwatanta taswirorin ranaku daban-daban.",
            "Hanyoyi uku na inganta da duba daidaito: wuraren sarrafa ƙasa (GCPs), wato alamomin da aka sa a ƙasa waɗanda kuke auna wurinsu da na'urar GNSS mai daidaito, kuma kuke amfani da su wajen sarrafa taswira; jirage marasa matuƙi masu RTK ko PPK, da ke gyara wuri lokacin tashi ko bayan tashi; da wuraren gwaji (check points), ƙarin alamomin da aka auna amma ba a yi amfani da su wajen sarrafawa ba, don gwada taswirar ƙarshe. Ku ba da rahoton kuskuren da kuka auna.",
            "Ku kuma duba inganci: rahoton sarrafawa (hotuna nawa aka yi amfani da su, da duk wani gargaɗi), ainihin cikakken bayanin hoto (GSD), dushewa, ramuka da kuskuren haɗawa. Don taswirorin da za ku kwatanta a lokuta daban-daban, ku yi amfani da hanya ɗaya kowane lokaci, kuma ku tabbata sun hau kan juna daidai."
          ],
          steps: ["Ku karanta rahoton sarrafawa: hotunan da aka yi amfani da su, gargaɗi, GSD.", "Ku nemi dushewa, ramuka da kuskuren haɗawa.", "Ku auna kuskuren wuri a wuraren gwaji (ko ku kwatanta da wurare da aka sani).", "Ku yanke ko daidaiton ya dace da shawarar da za a yanke.", "Don taswirorin lokuta daban-daban, ku duba cewa sun hau kan juna daidai."],
          words: [["Wurin sarrafa ƙasa (ground control point, GCP)", "alama a ƙasa da aka auna wurinta daidai, ana amfani da ita don gyara wurin taswira."], ["RTK / PPK", "hanyoyin gyara wurin jirgi mara matuƙi lokacin tashi (RTK) ko bayan tashi (PPK) don samun cikakken daidaito."], ["Wurin gwaji (check point)", "alamar da aka auna, ana amfani da ita ne kawai don gwada daidaiton taswira."], ["Rahoton sarrafawa (processing report)", "taƙaitaccen bayani da manhajar haɗa taswira ke bayarwa game da ingancin taswira."]],
          slides: [
            { title: "Amincewa kafin aiki", bullets: ["GNSS na yau da kullum: kuskuren mita kaɗan", "Ya isa don shiyyoyi, ba don layi ɗaya-ɗaya ba", "Taswirorin lokuta daban-daban dole su hau kan juna"] },
            { title: "Inganta daidaito", bullets: ["Wuraren sarrafa ƙasa (GCPs)", "Jirage masu RTK ko PPK", "Wuraren gwaji don gwada sakamakon"] },
            { title: "Duba inganci", bullets: ["Rahoton sarrafawa da gargaɗi", "Ainihin GSD, dushewa, ramuka", "Hanya ɗaya a kowace rana"] }
          ],
          sources: [ODM],
          tryIt: "Ku buɗe rahoton sarrafawa na wata taswira da kuka yi (ko rahoton wani samfurin bayanai). Ku rubuta yawan hotunan da aka yi amfani da su, GSD, duk wani gargaɗi, sannan ku yanke ko taswirar ta yi daidai sosai don (a) nemo wuraren da ke da ruwa, (b) jagorantar sake shuka layi ɗaya-ɗaya.",
          youCanNow: "duba daidaiton taswirar jirgi mara matuƙi da ingancinta, da yanke ko ta dace da shawarar da za a yanke.",
          quickCheck: [
            { objective: "O1", q: "Me ake amfani da wuraren gwaji (check points) da shi?", options: ["Gwada daidaiton taswirar ƙarshe, domin ba a yi amfani da su wajen sarrafawa ba", "Saukar da jirgin lafiya", "Cajin batir a gona", "Nuna inda ma'aikata za su fara"], answer: 0, why: "Wuraren gwaji ƙarin alamomi ne da aka auna amma ba a sa su a sarrafawa ba, don ku auna ainihin kuskuren taswirar." },
            { objective: "O1", q: "Za ku kwatanta taswirar wannan watan da ta watan jiya don jagorantar aiki a layi ɗaya-ɗaya. Me za ku fara duba?", options: ["Launuka kawai", "Lafiyar batir ɗin jirgin", "Cewa taswirorin biyu sun yi daidai kuma sun hau kan juna", "Babu komai; GNSS na yau da kullum koyaushe ya isa"], answer: 2, why: "GNSS na yau da kullum na iya kaucewa da mita kaɗan, don haka taswirorin da ake amfani da su don layuka ko a lokuta daban-daban dole su yi daidai kuma su hau kan juna." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Zaɓar ma'aunin tsirrai da ya dace",
          minutes: 6,
          goal: "Zaɓi ma'aunin tsirrai da ya dace da amfanin gona, matakin girma da kyamara.",
          text: [
            "NDVI = (NIR - Red) / (NIR + Red) shi ne ma'aunin da aka fi sani; FAO na amfani da shi daga tauraron ɗan Adam don bin diddigin tsirrai a faɗin Afirka. Amma NDVI yakan cika (saturation) a cikin ganyayyaki masu kauri da lafiya kamar masarar da ta girma, shayi ko kofi: ƙimominsa suna taruwa a sama, kuma ƙananan bambance-bambance suna ɓacewa.",
            "NDRE yana amfani da zangon red edge maimakon ja: (NIR - RedEdge) / (NIR + RedEdge). Yana ci gaba da gane bambanci a cikin ganye masu kauri, kuma sau da yawa yana nuna bambancin nitrogen da chlorophyll daga baya a lokacin damina. Idan kyamarar launi kaɗai kuke da ita, ma'auni kamar VARI, (Green - Red) / (Green + Red - Blue), ko Excess Green, 2 x Green - Red - Blue, suna raba koren shuka da ƙasa kuma suna nuna ƙarfin girma a dunƙule; suna da amfani wajen tsayuwar shuka da ciyawa, amma ba su da tabbas sosai wajen gane damuwar shuka.",
            "Ku zaɓa bisa tambayar: tsayuwar shuka da ciyawa a farkon damina, ma'aunin RGB ko NDVI; ƙarfin girma a tsakiyar damina a amfanin gona mai buɗaɗɗen ganye, NDVI; ganye masu kauri da nitrogen, NDRE. Duk wanda kuka zaɓa, ku kalli taswirar launin gaske ma, kuma ku tabbatar a gona."
          ],
          words: [["Cika (saturation)", "lokacin da ma'auni ya daina canjawa duk da cewa shuke-shuke suna da bambanci, kamar yadda NDVI ke yi a ganye masu kauri."], ["Red edge", "ɗan ƙaramin zangon haske tsakanin ja da near-infrared (NIR), mai gane chlorophyll."], ["NDRE", "Normalized Difference Red Edge, ma'aunin da ya fi NDVI gane bambanci a ganye masu kauri."], ["VARI", "Visible Atmospherically Resistant Index, ma'aunin tsirrai daga zangon RGB kaɗai."]],
          slides: [
            { title: "NDVI da iyakarsa", bullets: ["(NIR - Red) / (NIR + Red)", "Ana amfani da shi sosai, har da FAO", "Yana cika a ganye masu kauri"] },
            { title: "Wasu ma'auni", bullets: ["NDRE: (NIR - RedEdge) / (NIR + RedEdge)", "VARI: (G - R) / (G + R - B)", "Excess Green: 2G - R - B"] },
            { title: "Ku zaɓa bisa tambayar", bullets: ["Tsayuwar shuka da ciyawa: ma'aunin RGB ko NDVI", "Buɗaɗɗen amfanin gona a tsakiyar damina: NDVI", "Ganye masu kauri da nitrogen: NDRE"] }
          ],
          sources: [FAO_EO, QGIS],
          tryIt: "Ga kowane yanayi ku zaɓi ma'auni ku rubuta dalili: (a) ƙidayar tsayuwar masara mai makonni 3 da jirgi mai kyamarar RGB, (b) bambancin nitrogen a shayi mai rufaffen ganye da jirgi mai kyamarar multispectral, (c) ƙarfin girman rogo a tsakiyar damina da jirgi mai kyamarar multispectral.",
          youCanNow: "zaɓar ma'aunin tsirrai da ya dace da amfanin gona, matakin girmansa da kyamarar.",
          quickCheck: [
            { objective: "O2", q: "Me ya sa NDVI zai iya rasa ƙananan bambance-bambance a masarar da ta girma, shayi ko kofi?", options: ["Yana aiki da dare kawai", "Yana cika a ganye masu kauri da lafiya", "Yana buƙatar kyamarar zafi (thermal)", "Ba ya amfani da zangon near-infrared"], answer: 1, why: "A ganye masu kauri da lafiya, ƙimomin NDVI suna taruwa a sama, don haka ƙananan bambance-bambance suna ɓacewa." },
            { objective: "O2", q: "Kyamarar RGB kaɗai kuke da ita, kuma kuna son ganin tsayuwar shuka a farkon damina. Wane ma'auni za ku zaɓa?", options: ["NDRE", "Ma'aunin zafi (thermal)", "Babu; RGB ba zai taimaka ba", "Ma'aunin RGB kamar VARI ko Excess Green"], answer: 3, why: "Ma'aunin RGB suna raba koren shuka da ƙasa kuma sun dace da tsayuwar shuka da ciyawa a farkon damina." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ƙididdigar shiyya da ƙirga a QGIS",
          minutes: 6,
          goal: "Auna faɗin kowace shiyya da matsakaicin ma'aunin ta, da ƙirga shuke-shuke ko itatuwa.",
          text: [
            "Nazari yana mayar da taswira mai launi zuwa lambobin da mutane za su yi aiki da su. Da farko, ku ƙirƙiri shiyyoyi: ku raba taswirar ma'auni zuwa rukunoni (misali ƙasa, tsakiya, sama), sannan ku mayar da su zuwa polygon ku cire ƙananan guntaye; ko ku zana shiyyoyi da hannu da ilimin manomi. Ku lissafa faɗin kowace shiyya.",
            "Sannan ku yi amfani da Zonal Statistics na QGIS don lissafa, ga kowace shiyya, matsakaici, mafi ƙanƙanta, mafi girma da bambancin ma'aunin. Ku kwatanta shiyyoyi, kuma ku kwatanta shiyyoyi iri ɗaya a ranaku daban-daban. Tebur kamar Shiyya A: 3.2 ha, matsakaicin NDVI 0.71; Shiyya C: 0.8 ha, matsakaicin NDVI 0.48 ya fi hoto sauƙin aiki da shi.",
            "Ƙirga: ga itatuwa (avocado, mangwaro, kofi), kawunan itatuwa sau da yawa suna bayyana a fili a taswirar RGB mai cikakken bayani, kuma ana iya ƙirga su da hannu da ɗigo (points), ko da ƙarin manhaja (plugin) da rubutun umarni (scripts). Ga amfanin gona na layi, ku ƙirga a ƙananan filayen samfuri ku ninka. Koyaushe ku duba wani samfurin ƙidayar a gona, ku faɗi kuskuren."
          ],
          steps: ["Ku raba taswirar ma'auni zuwa rukunoni kaɗan, ko ku zana shiyyoyi tare da manomi.", "Ku mayar da rukunoni zuwa polygon; ku cire ƙananan guntaye; ku lissafa faɗi.", "Ku yi Zonal Statistics don matsakaici, mafi ƙanƙanta, mafi girma da bambanci a kowace shiyya.", "Ku ƙirga itatuwa ko shuke-shuke (ɗigo, plugin ko filayen samfuri).", "Ku duba ƙidayar a gona ku faɗi kuskuren."],
          words: [["Ƙididdigar shiyya (zonal statistics)", "lambobi (kamar matsakaici) da aka lissafa daga pixel ɗin da ke cikin kowace shiyya."], ["Polygon", "siffa a rufe a taswira, kamar shiyya ko iyakar gona."], ["Rarrabawa (classify)", "haɗa ƙimomin pixel zuwa rukunoni kaɗan, kamar ƙasa, tsakiya da sama."]],
          slides: [
            { title: "Daga launuka zuwa lambobi", bullets: ["Ku raba taswirar ma'auni zuwa rukunoni", "Ku mayar da su polygon na shiyya, ku cire guntaye", "Ku lissafa faɗin kowace shiyya"] },
            { title: "Zonal Statistics", bullets: ["Matsakaici, mafi ƙanƙanta, mafi girma, bambanci a kowace shiyya", "Ku kwatanta shiyyoyi da ranaku", "Shiyya A: 3.2 ha, matsakaicin NDVI 0.71"] },
            { title: "Ƙirga", bullets: ["Kawunan itatuwa a taswirar RGB mai cikakken bayani", "Amfanin gona na layi: filayen samfuri, sannan a ninka", "Ku duba a gona ku faɗi kuskuren"] }
          ],
          sources: [QGIS],
          tryIt: "A QGIS da taswirarku ko samfuri: ku zana ko ku raba shiyyoyi uku, ku lissafa faɗinsu, ku yi Zonal Statistics a kan ma'aunin, sannan ku yi tebur na shiyya, faɗi da matsakaicin ƙima. Idan itatuwa ne, ku ƙirga itatuwan da ke shiyya ɗaya.",
          youCanNow: "auna shiyyoyi da ƙirga shuke-shuke ko itatuwa a QGIS, da gabatar da sakamakon a tebur.",
          quickCheck: [
            { objective: "O3", q: "Me teburin ƙididdigar shiyya ke ba ku?", options: ["Hoto mafi kyau", "Lokacin tashin jirgin", "Takardar kuɗin abokin hulɗa", "Lambobi kamar faɗin kowace shiyya da matsakaicin ma'aunin ta"], answer: 3, why: "Ƙididdigar shiyya tana mayar da taswira mai launi zuwa lambobin da mutane za su yi aiki da su." },
            { objective: "O3", q: "Manhajarku ta ƙirga itatuwan avocado 1,240. Me za ku yi kafin ku ba da rahoto?", options: ["Ku mayar da shi 1,000", "Ku duba wani samfurin ƙidayar a gona ku faɗi kuskuren", "Ku ƙara 10% don tsaro", "Ku ba da rahoto ba tare da dubawa ba"], answer: 1, why: "Ana duba ƙidaya a samfuri a gona, kuma ana faɗin kuskuren." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Nazarin bayanai",
        questions: [
          { objective: "O1", q: "Me ake amfani da wurin gwaji (check point) da shi?", options: ["Gyara taswira lokacin sarrafawa", "Gwada daidaiton taswirar ƙarshe", "Cajin batir", "Saukar da jirgin"], answer: 1, why: "Ana auna wuraren gwaji amma ba a yi amfani da su wajen sarrafawa ba, don haka suna gwada sakamakon." },
          { objective: "O1", q: "Taswira ta kauce da kusan mita 3. Ta yi daidai sosai don:", options: ["Jagorantar sake shuka layi ɗaya-ɗaya", "Auna shuka ɗaya-ɗaya", "Nemo kusurwa mai ruwa a gona", "Babu komai ko kaɗan"], answer: 2, why: "Kuskuren mita kaɗan ba laifi ba ne ga manyan abubuwa, amma ba don layuka ba." },
          { objective: "O2", q: "Me ya sa NDVI zai nuna ɗan bambanci kaɗan a cikin shayi mai kauri da ya girma?", options: ["NDVI yana cika a ganye masu kauri", "Shayi ba shi da ganye", "Jirgin ya yi ƙasa sosai", "NDVI yana aiki a kan ƙasa kawai"], answer: 0, why: "Ƙimomi suna taruwa a sama a tsirrai masu kauri." },
          { objective: "O2", q: "Wane ma'auni ne za a iya lissafa shi daga kyamarar RGB kaɗai?", options: ["NDRE", "NDVI", "Babu", "VARI"], answer: 3, why: "VARI yana amfani da zangon kore, ja da shuɗi kaɗai." },
          { objective: "O3", q: "Zonal Statistics na QGIS yana ba ku:", options: ["Hasashen yanayi", "Lambobi kamar matsakaicin ma'auni na kowace shiyya", "Lasisin matuƙi", "Farashin iri"], answer: 1, why: "Yana taƙaita ƙimomin pixel da ke cikin kowace shiyya." }
        ]
      }
    },
    {
      name: "Babi na 2: Noma mai cikakken daidaito",
      lessons: [
        {
          objectives: ["O4"],
          title: "Yin taswirar umarni (prescription map)",
          minutes: 6,
          goal: "Mayar da shiyyoyi zuwa taswirar umarni mai yawa ko aiki ga kowace shiyya.",
          text: [
            "Taswirar umarni tana faɗa wa inji ko ma'aikaci abin da zai yi a kowace shiyya. Ku fara daga dalilin, ba daga launi ba: ku yi amfani da tabbatarwa a gona (ground-truthing) kuma, inda zai yiwu, gwajin ƙasa don ku gane dalilin bambancin kowace shiyya. Sannan ku zaɓi aiki ga kowace shiyya: ƙarin ko ragin taki, wani yawan iri dabam, sake shuka, magudanar ruwa, cire ciyawa, ko babu canji.",
            "Yawan yana fitowa daga ilimin aikin gona, ba daga jirgin ba. Ku yi amfani da sakamakon gwajin ƙasa da shawarwarin cibiyar bincike ta ƙasarku ko hidimar faɗakarwa game da amfanin gonar da yankin. Taswirar tana faɗin inda kowane yawa zai tafi ne kawai. Ku sa yawan ya zama kaɗan (biyu zuwa huɗu) don ya zama mai sauƙin aiki.",
            "Ga injina, ku fitar da shiyyoyin a matsayin shapefile ko tsarin da na'urar sarrafa injin ke karɓa. Don aiki da hannu, ku buga ko ku raba taswirar shiyya mai sauƙi da umarnin kowace shiyya a gram a kowane ramin shuka ko buhu a kowace shiyya, kuma ku yi alamar shiyyoyin a gona. Umarnin fesawa ko watsawa da jirgi mara matuƙi yana buƙatar izinin sufurin jiragen sama da na magungunan ƙwari da ƙasarku ke buƙata."
          ],
          steps: ["Ku tabbatar da dalilin a kowace shiyya (tabbatarwa a gona, gwajin ƙasa).", "Ku zaɓi aiki ga kowace shiyya.", "Ku ɗauki yawan daga gwajin ƙasa da shawarwarin yankinku.", "Ku tsaya a yawa biyu zuwa huɗu.", "Ku fitar da shi ga injina, ko ku yi taswirar shiyya da aka buga mai umarni ga ma'aikata."],
          words: [["Taswirar umarni (prescription map)", "taswirar da ke faɗa wa inji ko ma'aikaci yawan abin da zai zuba, ko abin da zai yi, a kowace shiyya."], ["Shapefile", "tsarin fayil na GIS da aka saba amfani da shi don shiyyoyi da iyakoki."], ["Gwajin ƙasa", "binciken ɗakin gwaje-gwaje na sinadaran ƙasa da tsamin ta."]],
          slides: [
            { title: "Ku fara daga dalilin", bullets: ["Ku tabbatar da kowace shiyya a gona", "Gwajin ƙasa inda zai yiwu", "Sannan ku zaɓi aiki"] },
            { title: "Yawan daga ilimin aikin gona yake", bullets: ["Gwajin ƙasa da shawarwarin yankinku", "Taswirar tana faɗin inda, ba nawa ba", "Yawa biyu zuwa huɗu"] },
            { title: "Ku isar da shi", bullets: ["Injina: shapefile ko tsarin na'urar sarrafawa", "Aikin hannu: taswira da aka buga, gram a kowane rami", "Fesawa ko watsawa da jirgi: ana buƙatar izini"] }
          ],
          sources: [FAO_WHO_AERIAL, QGIS],
          tryIt: "Ta amfani da shiyyoyinku uku daga Darasi na 3, ku rubuta teburin umarni: shiyya, faɗi, dalilin da ya fi yiwuwa, aiki, yawa (ku rubuta \"daga shawarar yanki\" idan ba ku da shi), da yadda ma'aikata za su nemo shiyyar.",
          youCanNow: "yin taswirar umarni mai amfani mai yawa ko aiki ga kowace shiyya.",
          quickCheck: [
            { objective: "O4", q: "Me taswirar umarni ke nunawa?", options: ["Launukan NDVI kawai", "Iyakar gonar", "Abin da za a zuba ko a yi a kowace shiyya", "Hanyoyin tashin jirgin"], answer: 2, why: "Taswirar umarni tana faɗa wa inji ko ma'aikaci abin da zai yi a kowace shiyya." },
            { objective: "O4", q: "Wata shiyya tana kama da rauni a taswira. Me za ku yi kafin ku zaɓi aiki?", options: ["Ku nemo dalilin ta tabbatarwa a gona kuma, inda zai yiwu, gwajin ƙasa", "Ku ninka taki a wurin", "Ku sake shuka shi nan take", "Ku yi watsi da shi"], answer: 0, why: "Ku fara daga dalilin, ba daga launi ba; aikin ya dogara ne da dalilin bambancin shiyyar." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Shin yana biya? Ƙaramin kasafi mai sauƙi",
          minutes: 6,
          goal: "Gane ko aikin noma mai daidaito yana biya ta amfani da ƙaramin kasafi.",
          text: [
            "Ƙaramin kasafi (partial budget) yana kwatanta abin da ke canjawa kaɗai. A gefe ɗaya: ƙarin kuɗin shiga (ƙarin amfanin da aka sayar) da kuɗin da aka tara (ragin takin da ake ɓatawa). A ɗayan gefe: ƙarin kuɗaɗe (hidimar jirgi, ƙarin kayan noma a wasu shiyyoyi, aikin ma'aikata) da kuɗin shigar da aka rasa. Idan gefen farko ya fi girma, canjin yana biya.",
            "Misali da lambobin misali a shilling na Kenya: gonar masara mai hekta 4 tana biyan KSh 6,000 don taswira. Umarnin yana mayar da buhun taki 2 daga shiyya mai cike da ruwa ta hekta 1, inda ake ɓata shi, zuwa shiyya ta tsakiya ta hekta 2, don haka ba a sayi ƙarin taki ba, kuma manomin yana sa ran ƙarin buhun masara 5 daga wannan shiyyar. Riba: buhu 5 x farashin buhu a kasuwar yankin. Kuɗaɗe: KSh 6,000 na taswira + aikin haƙa magudanar ruwa da hannu. Ku yi amfani da farashin gaske na yankinku da hasashen amfanin gona na taka-tsantsan.",
            "Ku nuna iyaka, domin yawan amfani da farashi suna canjawa: yanayin taka-tsantsan da yanayin da ya fi yiwuwa. Ku kuma ƙidaya ribobin da ke da wuyar sa wa farashi, kamar gargaɗi da wuri game da tsutsar fall armyworm. Ku faɗi gaskiya idan lambobin ba su biya a ƙaramar gona; ƙungiyar haɗin gwiwa (cooperative) ko hidimar da ake rabawa na iya canja amsar."
          ],
          steps: ["Ku jera ƙarin kuɗin shiga da kuɗin da aka tara.", "Ku jera ƙarin kuɗaɗe da kuɗin shigar da aka rasa.", "Ku yi amfani da farashin yankinku da hasashen amfanin gona na taka-tsantsan.", "Ku lissafa yanayin taka-tsantsan da yanayin da ya fi yiwuwa.", "Ku rubuta amsar da gaskiya, da abin da zai iya canja ta."],
          words: [["Ƙaramin kasafi (partial budget)", "kwatanci mai sauƙi na kuɗaɗe da ribobin da ke canjawa kaɗai idan kun canja abu ɗaya."], ["Daidai-wa-daida (break-even)", "lokacin da ƙarin riba ta yi daidai da ƙarin kuɗaɗe kawai."]],
          slides: [
            { title: "Abin da ke canjawa kaɗai", bullets: ["Ƙari: ƙarin kuɗin shiga, kuɗin da aka tara", "Ragi: ƙarin kuɗaɗe, kuɗin shigar da aka rasa", "Ƙari ya fi ragi girma = yana biya"] },
            { title: "Ku yi amfani da lambobi na gaske", bullets: ["Farashin yanki na kowane buhu ko kg", "Hasashen amfanin gona na taka-tsantsan", "Hidima, kayan noma, aikin ma'aikata"] },
            { title: "Ku faɗi gaskiya", bullets: ["Yanayin taka-tsantsan da wanda ya fi yiwuwa", "Ku ƙidaya ribobin da ke da wuyar sa wa farashi", "Ƙaramar gona? Hidimar da ake rabawa na iya taimakawa"] }
          ],
          tryIt: "Ku yi ƙaramin kasafi na misalin ta amfani da farashin gaske daga kasuwar yankinku (farashin buhun masara, farashin buhun taki, kuɗin ma'aikaci a rana). Ku lissafa yanayin taka-tsantsan (ƙarin buhu 3) da yanayin da ya fi yiwuwa (ƙarin buhu 5). Shin yana biya?",
          youCanNow: "amfani da ƙaramin kasafi don nuna ko aikin noma mai daidaito yana biya.",
          quickCheck: [
            { objective: "O5", q: "A ƙaramin kasafi, wanne ne ake ƙidaya shi a matsayin kuɗi da aka kashe?", options: ["Kuɗin hidimar taswira da jirgi mara matuƙi", "Ƙarin amfanin da aka sayar", "Kuɗin taki da aka tara", "Farashi mafi girma na girbi"], answer: 0, why: "Ƙarin kuɗaɗe kamar hidimar jirgi da aikin ma'aikata suna a gefen kuɗaɗe." },
            { objective: "O5", q: "Yanayinku da ya fi yiwuwa yana biya, amma yanayin taka-tsantsan yana asara. Me za ku faɗa wa manomin?", options: ["Yanayin da ya fi yiwuwa kawai", "Cewa koyaushe yana biya", "Duka yanayin biyu da gaskiya, da abin da ke kawo bambancin", "Babu komai game da kuɗi"], answer: 2, why: "Yawan amfani da farashi suna canjawa, don haka kuna nuna iyaka kuma kuna faɗin gaskiya idan lambobin suna kusa da juna." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Isar da sakamako ta yadda manoma za su yi aiki",
          minutes: 5,
          goal: "Gabatar da sakamakon nazari a gajeren tsari mai sarari da manomi zai yi aiki da shi.",
          text: [
            "Nazari mafi kyau zai lalace idan manomi bai fahimce shi ba ko bai amince da shi ba. Ku fara da amsar da aikin: \"Shiyya C (kusurwa mai gangare kusa da hanya, kusan eka 2) tana cike da ruwa. Ku haƙa magudanar ruwa kafin ku zuba takin ƙari (topdressing). Kada ku ƙara taki a wurin a wannan damina.\" Sannan ku nuna taswirar da shiyyoyi a launuka masu sauƙi da alamomin wuri da aka sani.",
            "Ku yi amfani da hanya da harshen da manomin ke amfani da su: takarda da aka buga, hoto da gajeren saƙo a WhatsApp ko SMS, ko saƙon murya a Kiswahili, Hausa, Yoruba, Igbo ko wani harshen gida. Ku yi amfani da ma'aunan gida (eka, buhu, debe) tare da hekta da kilogram. Ku rage yawan lambobi.",
            "Ku nuna yadda kuka tabbata, da abin da aka tabbatar a gona. Ku ba da shawarar ku zaga gonar tare. Ku amince da abin da za a duba a gaba, ku rubuta abin da manomin ya yi, don nazari na gaba ya nuna ko ya yi aiki. Ku kiyaye bayanan manoma a sirri, kuma ku raba su ne kawai da izininsu."
          ],
          steps: ["Ku rubuta amsar da aikin farko, shiyya bayan shiyya.", "Ku nuna taswira mai sauƙi da alamomin wuri.", "Ku yi amfani da hanyar manomin, harshensa da ma'aunansa.", "Ku faɗi yadda kuka tabbata da abin da aka tabbatar.", "Ku amince da bibiya, ku rubuta abin da manomin ya yi."],
          words: [["Alamar wuri (landmark)", "wani abu da mutane suka sani, kamar hanya, itace, shago ko kogi, da ake amfani da shi don nemo wurare."], ["Bibiya (follow-up)", "dubawa daga baya don ganin ko aikin ya yi nasara."]],
          slides: [
            { title: "Amsa da aiki da farko", bullets: ["Shiyya C, kusurwa mai gangare kusa da hanya", "Ku haƙa magudanar ruwa kafin topdressing", "Sannan taswirar"] },
            { title: "Hanyarsu, harshensu", bullets: ["Takarda, WhatsApp, SMS, saƙon murya", "Kiswahili, Hausa, Yoruba, Igbo da sauransu", "Eka, buhu, debe tare da hekta"] },
            { title: "Gina amincewa", bullets: ["Ku faɗi yadda kuka tabbata", "Ku zaga gonar tare", "Ku amince da bibiya; ku kiyaye sirrin bayanai"] }
          ],
          sources: [FAO_ITU_DRONES],
          tryIt: "Aikin ƙarshe: ku kammala nazarinku ku rubuta sakamako na shafi ɗaya ga manomi: daidaito da yadda aka duba shi, ma'aunin da dalilinsa, teburin shiyyoyi da ƙidaya, taswirar umarni, ƙaramin kasafi, da ayyuka da kalmomi masu sauƙi tare da ranar bibiya.",
          youCanNow: "isar da nazarin jirgi mara matuƙi a matsayin ayyuka masu sarari kuma amintattu da manomi zai iya bi.",
          quickCheck: [
            { objective: "O6", q: "Ta yaya ya kamata sakamakon manomi ya fara?", options: ["Da dabarar lissafin ma'auni", "Da amsar da aikin da za a yi", "Da sunan samfurin jirgin", "Da dogon tebur"], answer: 1, why: "Farawa da amsar da aikin yana taimaka wa manomi ya yi aiki da shi." },
            { objective: "O6", q: "Manomin yana karanta Kiswahili kuma yana amfani da WhatsApp. Ta yaya za ku aika sakamakon?", options: ["Dogon PDF na Turanci ta imel", "Fayil ɗin ɗanyen bayanai", "Babu komai; ku faɗa wa ofishin gonar kawai", "Hoton taswirar shiyya da gajeren saƙo ko saƙon murya a Kiswahili"], answer: 3, why: "Ku yi amfani da hanya da harshen da manomin ke amfani da su, da lambobi kaɗan da ma'aunan gida." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Noma mai cikakken daidaito",
        questions: [
          { objective: "O4", q: "Daga ina ya kamata yawan taki a taswirar umarni ya fito?", options: ["Launin taswirar jirgi kaɗai", "Gwajin ƙasa da shawarwarin aikin gona na yanki", "Hasashe", "Kamfanin da ya ƙera jirgin"], answer: 1, why: "Taswirar tana nuna inda; ilimin aikin gona yana faɗin nawa." },
          { objective: "O4", q: "Yawa nawa ne ke da sauƙin aiki a yawancin taswirorin umarni?", options: ["Biyu zuwa huɗu", "Hamsin", "Ɗaya ga kowace shuka", "Babu"], answer: 0, why: "Yawa kaɗan suna da sauƙi ga ma'aikata da injina su zuba." },
          { objective: "O5", q: "Ƙaramin kasafi yana kwatanta:", options: ["Duk kuɗaɗen gona na shekara goma", "Kuɗaɗe da ribobin da ke canjawa kaɗai", "Farashin jirgin kaɗai", "Farashin amfanin gona kaɗai"], answer: 1, why: "Yana mai da hankali kan abin da canjin ke ƙarawa ko ragewa." },
          { objective: "O6", q: "Wace jimla ce mafi kyau don fara sakamakon manomi?", options: ["Matsakaicin NDRE na polygon 3 ya kasance 0.31", "Rahoton sarrafawa yana da hotuna 412", "Mun yi amfani da QGIS 3", "Shiyya C kusa da hanya tana cike da ruwa: ku haƙa magudanar ruwa kafin topdressing"], answer: 3, why: "Ku fara da amsar da aikin a kalmomin da aka saba." },
          { objective: "O5", q: "Ƙaramin kasafi ya nuna canjin ba ya biya a gonar eka 1. Ya kamata ku:", options: ["Canja lambobin", "Ɓoye sakamakon", "Faɗi haka da gaskiya ku duba hidimar da ake rabawa ko ta ƙungiyar haɗin gwiwa", "Ninka farashin"], answer: 2, why: "Sakamakon gaskiya yana gina amincewa; rabawa na iya canja lissafin riba." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Jirage Marasa Matuƙi a Noma: Nazarin Bayanai da Noma Mai Cikakken Daidaito",
    questions: [
      { objective: "O1", q: "GNSS na yau da kullum na jirgi mara matuƙi yawanci yana sa taswira:", options: ["Daidai sosai", "Ta kauce da mita kaɗan", "Ta kauce da kilomita", "Ta juye"], answer: 1, why: "Ba tare da gyara ba, kuskuren wuri mita kaɗan ne." },
      { objective: "O1", q: "Wuraren sarrafa ƙasa (GCPs) su ne:", options: ["Batir ɗin jirgi", "Ma'aikatan gona", "Alamomin da aka sa a ƙasa da aka auna wurinsu daidai", "Wani nau'in ma'auni"], answer: 2, why: "GCPs suna gyara wurin taswira lokacin sarrafawa." },
      { objective: "O1", q: "RTK da PPK su ne:", options: ["Hanyoyin gyara wurin jirgi mara matuƙi don cikakken daidaito", "Cututtukan amfanin gona", "Nau'ukan taki", "Sunayen kamfanonin kyamara"], answer: 0, why: "Suna gyara wurin GNSS lokacin tashi ko bayan tashi." },
      { objective: "O1", q: "Me ya sa taswirorin ranaku daban-daban dole su hau kan juna daidai?", options: ["Saboda launi", "Don tara wurin ajiya", "Manhajar tana buƙatar haka", "Don a kwatanta wurare iri ɗaya a lokuta daban-daban"], answer: 3, why: "Taswirorin da ba su hau kan juna ba suna nuna canje-canjen ƙarya." },
      { objective: "O1", q: "Rahoton sarrafawa yana faɗa muku:", options: ["Farashin amfanin gona", "Hotunan da aka yi amfani da su, gargaɗi da GSD", "Sunan manomi", "Yanayi"], answer: 1, why: "Yana taƙaita ingancin taswirar da aka haɗa." },
      { objective: "O2", q: "Cikar NDVI (saturation) tana nufin:", options: ["Ma'aunin ya daina nuna bambanci a ganye masu kauri", "Kyamarar ta jike", "Batir ya cika", "Taswirar tana da ramuka"], answer: 0, why: "Ƙimomi suna taruwa a sama a tsirrai masu kauri." },
      { objective: "O2", q: "NDRE yana amfani da wane zango maimakon ja?", options: ["Shuɗi", "Zafi (thermal)", "Red edge", "Kore"], answer: 2, why: "NDRE = (NIR - RedEdge) / (NIR + RedEdge)." },
      { objective: "O2", q: "Excess Green (2G - R - B) yana da amfani wajen:", options: ["Auna pH na ƙasa", "Hasashen yanayi", "Ƙirga kuɗi", "Raba koren shuka da ƙasa a hotunan RGB"], answer: 3, why: "Yana haskaka koren tsirrai a kan ƙasa." },
      { objective: "O2", q: "Don bambancin nitrogen a cikin kofi mai kauri, ku zaɓi:", options: ["Excess Green", "NDRE", "Babu ma'auni", "Zafi (thermal) kaɗai"], answer: 1, why: "NDRE yana ci gaba da gane bambanci inda NDVI ke cika." },
      { objective: "O2", q: "Duk ma'aunin da kuka yi amfani da shi, ya kamata ku kuma:", options: ["Kalli taswirar launin gaske ku tabbatar a gona", "Goge ɗanyen hotunan", "Yi watsi da manomin", "Yi amfani da rana ɗaya kawai har abada"], answer: 0, why: "Ma'auni alamomi ne; dubawa a gona ce ke tabbatarwa." },
      { objective: "O3", q: "Mayar da pixel da aka rarraba zuwa shiyyoyi yana ƙirƙirar:", options: ["Batir", "Ɗigo kawai", "Polygon", "Bidiyo"], answer: 2, why: "Shiyyoyi siffofin polygon ne masu faɗi." },
      { objective: "O3", q: "Me ya sa ake cire ƙananan guntaye daga shiyyoyi?", options: ["Don canja amfanin gona", "Saboda launi", "Don amfani da ƙarin wurin ajiya", "Ma'aikata ba za su iya kula da ƙananan wurare ba"], answer: 3, why: "Shiyyoyi masu amfani suna da girman da za a iya yi musu aiki." },
      { objective: "O3", q: "Ƙidayar itatuwa daga taswirar jirgi ya kamata a:", options: ["Duba ta a samfuri a gona, a faɗi kuskuren", "Amince da ita ba tare da dubawa ba", "Ninka ta", "Ɓoye ta"], answer: 0, why: "Dubawa a gona tana nuna yadda ƙidayar ta yi daidai." },
      { objective: "O4", q: "Taswirar umarni tana faɗin:", options: ["Wane jirgi za a saya", "Abin da za a zuba ko a yi a kowace shiyya", "Yanayi", "Kuɗin shigar manomi"], answer: 1, why: "Tana jagorantar ma'aikata ko injina shiyya bayan shiyya." },
      { objective: "O4", q: "Kafin ku zaɓi aiki ga shiyya mai rauni, ya kamata ku:", options: ["Fesa ta", "Zuba taki mafi yawa", "Tabbatar da dalilin ta tabbatarwa a gona da gwajin ƙasa", "Cire ta daga taswira"], answer: 2, why: "Dole aikin ya gyara ainihin dalilin." },
      { objective: "O4", q: "Don aiki da hannu, an fi ba da umarni a matsayin:", options: ["Shapefile kawai", "Jerin ƙimomin pixel", "Tebur na wurare (coordinates) kawai", "Taswirar shiyya mai sauƙi da gram a kowane rami ko buhu a kowace shiyya"], answer: 3, why: "Ma'aikata suna buƙatar umarni masu sauƙi kuma masu amfani." },
      { objective: "O5", q: "A ƙaramin kasafi, kuɗin taki da aka tara ana ƙidaya shi a matsayin:", options: ["Riba", "Kuɗi da aka kashe", "Babu komai", "Kuɗin shiga da aka rasa"], answer: 0, why: "Kuɗin da aka tara yana a gefen riba." },
      { objective: "O5", q: "Me ya sa ake lissafa yanayin taka-tsantsan da yanayin da ya fi yiwuwa?", options: ["Don ruɗar manomi", "Domin yawan amfani da farashi suna canjawa", "Doka ce ta buƙata", "Don amfani da ƙarin takarda"], answer: 1, why: "Iyaka tana nuna haɗarin da gaskiya." },
      { objective: "O6", q: "Wane ma'auni ne ke taimaka wa yawancin ƙananan manoma su fahimci sakamako?", options: ["Murabba'in kilomita kaɗai", "Pixel kaɗai", "Eka, buhu da debe tare da hekta", "Rubutun kimiyya kaɗai"], answer: 2, why: "Ma'aunan da aka saba suna sa sakamako ya zama mai amfani." },
      { objective: "O6", q: "Me ya sa ake rubuta abin da manomi ya yi bayan shawararku?", options: ["Don sayar da bayanansa", "Don cike fom", "Ba shi da amfani", "Don nazari na gaba ya nuna ko ya yi aiki"], answer: 3, why: "Bibiya tana rufe zagayen kuma tana inganta shawara." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      1,
      5,
      8,
      10,
      12,
      13,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe na nazarin ku sake duba shi.",
    criteria: [
      {
        name: "Daidaiton taswira",
        objective: "O1",
        notYet: "Ba a faɗi daidaito ba, ko ba a duba inganci ba.",
        meets: "An faɗi daidaiton taswirar da yadda aka duba shi, kuma an duba ingancin hotuna a rahoton sarrafawa.",
        exceeds: "An yi amfani da wuraren gwaji kuma an faɗi kuskuren da aka auna."
      },
      {
        name: "Zaɓin ma'auni",
        objective: "O2",
        notYet: "Ba a bayyana dalilin ma'aunin ba, ko bai dace da amfanin gona ko kyamarar ba.",
        meets: "Ma'aunin ya dace da amfanin gona, matakin girma da kyamarar, tare da gajeren dalili.",
        exceeds: "An kwatanta ma'auni biyu kuma an nuna dalilin zaɓar ɗaya."
      },
      {
        name: "Shiyyoyi da ƙidaya",
        objective: "O3",
        notYet: "Babu ƙididdigar shiyya, ko ba a duba ƙidaya ba.",
        meets: "Faɗin kowace shiyya da matsakaicin ma'aunin ta, da ƙidayar shuke-shuke ko itatuwa da aka duba a samfuri a gona.",
        exceeds: "An kwatanta shiyyoyi iri ɗaya a ranaku biyu."
      },
      {
        name: "Taswirar umarni",
        objective: "O4",
        notYet: "An yi hasashen yawan ne, ko yawan ya yi yawa sosai.",
        meets: "Yawa ko ayyuka biyu zuwa huɗu ga shiyyoyi, daga shawarwarin yanki, da ke da alaƙa da dalilan da aka tabbatar a gona.",
        exceeds: "An fitar da shi a tsarin da inji ko ma'aikata za su iya amfani da shi."
      },
      {
        name: "Ƙaramin kasafi",
        objective: "O5",
        notYet: "Babu kasafi, ko yana ƙidaya abubuwan da ba sa canjawa.",
        meets: "Ƙaramin kasafi mai yanayin taka-tsantsan da yanayin da ya fi yiwuwa, da farashin yanki.",
        exceeds: "Ya ambaci ribobin da ke da wuyar sa wa farashi, da lokacin da hidimar da ake rabawa za ta taimaka."
      },
      {
        name: "Sakamakon manomi",
        objective: "O6",
        notYet: "Ya fi shafi ɗaya tsawo, ko yana farawa da bayanan fasaha.",
        meets: "Shafi ɗaya da ke farawa da aikin da za a yi, da kalmomi masu sauƙi da ma'aunan gida, tare da yadda kuka tabbata.",
        exceeds: "An shirya shi a harshen manomin da hanyarsa, tare da amincewa kan dubawar bibiya."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka sami \"Ya cika\" ko \"Ya wuce\" a kowane layin rubric na nazarin",
      "Masu koyo da suka ce sun isar da taswirar umarni ko rahoton shiyya ga manomi ko babbar gona cikin kwanaki 60 (binciken biyo baya)",
      "Manoma ko manyan gonaki da suka ce sun yi aiki da sakamakon jirgi mara matuƙi kuma sun rubuta abin da ya faru",
      "Masu koyo da suka ɗauki wani kwas na jirgi mara matuƙi ko na noma mai daidaito"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfutar tafi-da-gidanka da aka saka QGIS kyauta a ciki",
      "Bayanan jirgi mara matuƙi daga gona ta gaske, ko samfurin bayanai kyauta",
      "Yawan da aka ba da shawara a yanki daga jami'an faɗakarwa ko bincike, da farashin kayan noma da amfanin gona na yanki",
      "Kusan minti 60 gaba ɗaya, a gajerun zama, da ƙarin lokaci don kammala nazarin da sakamakon manomi"
    ],
    facilitatorNotes: [
      "Ku yi gwajin farko tare, sannan ku yi matakin ƙididdigar shiyya kai tsaye a QGIS a kan samfurin bayanai da kowa ke amfani da shi.",
      "Kada ku ba da yawan taki ko iri da kanku; ku kawo yawan daga jami'an faɗakarwa ko bincike na amfanin gonar yankin.",
      "Ku tunatar da masu koyo cewa umarnin fesawa ko watsawa da jirgi mara matuƙi yana buƙatar izinin sufurin jiragen sama da na magungunan ƙwari.",
      "Ku yi amfani da bayanan gonar da manomi ya yarda a raba kawai, kuma ku cire sunaye daga misalan aji.",
      "Ku ba da maki ga nazarin da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
