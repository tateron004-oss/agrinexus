"use strict";

// Koach Learn course, Hausa (ha) translation of agriculture-africa/agri-soil-health.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const FAO_SOM = { name: "FAO: Muhimmancin taki na halitta a ƙasa (mabuɗin ƙasa mai jure fari)", url: "https://www.fao.org/4/a0100e/a0100e.pdf" };
const FAO_RUNOFF = { name: "FAO: Hanyoyin sarrafa ruwan sama da ke gudu don hana zaizayar ƙasa", url: "https://www.fao.org/4/t1696e/t1696e02.htm" };
const FAO_MECH = { name: "FAO TECA/STI: Dabarun gini don kiyaye ƙasa da rage zaizayar ƙasa", url: "https://sti-portal.fao.org/innovations/mechanical-soil-conservation-strategies-reduce-soil-erosion" };
const KALRO = { name: "Cibiyar Binciken Noma da Kiwo ta Kenya (KALRO): tuntuɓa don gwajin ƙasa", url: "https://www.kalro.org" };
const KALRO_SAMPLING = { name: "KALRO: Jagora kan ɗaukar samfurin ƙasa da shirya shi don gwajin taki", url: "https://kalroerepository.kalro.org/items/ab36e6de-6fdf-46dc-bfdc-044815064ec1" };
const CSIR_SRI = { name: "CSIR-Cibiyar Binciken Ƙasa (Soil Research Institute), Kwadaso, Kumasi (Ghana)", url: "https://sri.csir.org.gh" };
const HANDBOOK_4R = { name: "Sarrafa taki ta hanyar 4R a noman Afirka: littafin jagora na jami'an faɗakarwa kan taki", url: "https://alliancebioversityciat.org/publications-data/4r-plant-nutrient-management-african-agriculture-extension-handbook-fertilizer" };

module.exports = {
  id: "agri-soil-health-ha",
  lang: "ha",
  translationOf: "agri-soil-health",
  category: "Agriculture (Africa)",
  name: "Lafiyar Ƙasa da Ƙarfinta",
  skills: "Karanta ƙasarku a gona, Ɗaukar samfurin ƙasa don gwaji, Ƙara taki na halitta da takin gargajiya (compost) da kashin dabbobi, Tsara jujjuya amfanin gona da shuka su tare da wake da dangoginsa, Hana zaizayar ƙasa da ciyawar rufe ƙasa da aiki a kan layin tudu, Amfani da takin zamani ta hanyar 4R",
  outcome: "duba lafiyar ƙasarku, ɗaukar samfuri mai kyau don gwajin ɗakin gwaji (lab), da rubuta tsarin ƙasa na damina ɗaya da ke ƙara taki na halitta, ke jujjuya amfanin gona da wake da dangoginsa, ke hana ruwa ɗauke ƙasa, kuma ke amfani da takin zamani daidai: nau'i, yawa, lokaci da wuri.",
  about: [
    "Wannan kwas na ƙananan manoma ne da manoma masu tasowa, ma'aikatan gona da matasan manoma a Kenya, Najeriya, Ghana da sauran Afirka, waɗanda ke son samun ƙari daga ƙasa ɗaya. Ƙasa mai lafiya tana riƙe ruwa sosai, tana ciyar da amfanin gona da kyau, kuma tana mayar da kowane shilling, naira ko cedi da kuka kashe kan iri da taki.",
    "Babi na 1 game da sanin ƙasarku ne: karanta ta da idanunku da hannayenku, yin gwajin ƙasa daidai, da ƙara taki na halitta da takin gargajiya (compost) da kashin dabbobi. Babi na 2 game da kiyaye lafiyarta ne daga damina zuwa damina: jujjuya amfanin gona da shuka su tare da wake da dangoginsa, rufe ƙasa da ciyawa da hana zaizayar ƙasa, da amfani da takin zamani da kyau.",
    "Ƙasa tana bambanta daga gona zuwa gona. Ku yi amfani da wannan kwas tare da sakamakon gwajin ƙasarku da shawarar jami'in faɗakarwar noma (extension officer), cibiyar bincike ko shagon kayan noma, kuma ku fara gwada sababbin dabaru a ƙaramin fili. Kowane darasi yana ɗaukar kusan minti biyar kuma yana ƙarewa da aiki a gonarku. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku rubuta tsarin ƙasa mai shafi ɗaya na gona ɗaya a gonarku (ko gonar misali, kamar eka 1 ta masara da wake a Kakamega, eka 2 ta rogo a Oyo, ko eka 1 ta tumatir kusa da Kumasi): abin da binciken gonarku ya nuna, yaushe da kuma inda za ku yi gwajin ƙasa (ko abin da gwajin ya ce), yadda za ku ƙara taki na halitta, jujjuyawar amfanin gonarku ko shukawa tare da wake, yadda za ku riƙa rufe ƙasa ku hana zaizaya, da tsarin takin zamaninku da aka rubuta a matsayin nau'i, yawa, lokaci da wuri.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Ƙananan manoma da manoma masu tasowa, ma'aikatan gona da matasan manoma a Kenya, Najeriya, Ghana da sauran Afirka, waɗanda ke son samun ƙari daga ƙasa ɗaya, kuma suke noma amfanin gona kamar masara, wake, rogo da tumatir.",
    startingPoint: "Yawancinsu suna shuka kowace damina kuma suna amfani da ɗan kashin dabbobi ko takin zamani, sau da yawa saboda al'ada ko shawarar maƙwabci. Kaɗan ne suka taɓa binciken ƙasarsu a gona, suka yi gwajin ƙasa, suka yi takin gargajiya (compost), suka tsara jujjuya amfanin gona, suka gina abubuwan hana zaizaya a kan layin tudu, ko suka yi amfani da takin zamani ta hanyar 4R.",
    gap: "Ƙasa da ta gaji, mai tsami ko wadda ruwa ya zaizaye tana ɓata kuɗin da aka kashe kan iri da taki, kuma tana barin amfanin gona da rauni lokacin fari. Sanin ƙasarsu da gina ta kowace damina yana taimaka wa manoma su riƙe ruwa sosai, su ciyar da amfanin gona da kyau, kuma su sami girbi mafi yawa daga kowane buhun taki.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; ana bayanin kowace kalmar ƙasa",
      "Kayan aiki: shebur, bokiti da waya mai sauƙi; yawancin atisaye a gona ake yi",
      "Lokaci: darussa na kusan minti 5 da suka dace da aikin gona",
      "Ƙasa tana bambanta daga gona zuwa gona: yawan taki yana fitowa daga gwajin ƙasa, faɗakarwar noma ko bincike, kuma ana fara gwada sababbin dabaru a ƙaramin fili",
      "Kuɗin gwaji, wuraren ɗakunan gwaji da lokacin jira suna canjawa: masu koyo su kira ko su duba kafin su tafi"
    ],
    prerequisites: "Babu."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "A ɗaya daga cikin gonakinku", action: "binciken launi, irin ƙasa, tsutsotsin ƙasa, saiwoyi, ruwa da alamun shuka, da rubuta abin da suka nuna", standard: "kuna ɗaukar alamun shuka a matsayin alamomi da za a tabbatar da gwajin ƙasa" },
    { id: "O2", condition: "Don gona ɗaya", action: "ɗaukar samfurin ƙasa daidai da faɗin inda za a kai shi don gwaji", standard: "da ƙananan samfurori masu yawa da aka haɗa su zama samfuri ɗaya mai tsabta ga kowane sashe na gonar" },
    { id: "O3", condition: "Ta amfani da ragowar amfanin gona, ganye da kashin dabbobi", action: "yin tarin takin gargajiya (compost) da tsara yadda za a ƙara taki na halitta", standard: "ba tare da ƙona ragowar amfanin gona ba, kuma ba tare da sa ɗanyen kashi a kan ƙananan shuke-shuke ba" },
    { id: "O4", condition: "Don gona ɗaya", action: "tsara jujjuya amfanin gona na damina uku da shuka tare da wake ko dangoginsa", standard: "da wake ko dangoginsa a cikin tsarin, da tazara da ke bar dukkan amfanin gonan biyu su sami haske" },
    { id: "O5", condition: "Don gona mai gangara ko marar rufi", action: "zaɓar ciyawar rufe ƙasa da abubuwan hana zaizaya da shimfiɗa su a kan layin tudu", standard: "da alamar layin tudu da aka yi tare da taimakon faɗakarwar noma inda ake buƙata" },
    { id: "O6", condition: "Don amfanin gona ɗaya", action: "rubuta tsarin takin zamani da nau'i, yawa, lokaci da wuri da suka dace", standard: "da yawan taki da aka ɗauka daga gwajin ƙasa ko shawarar yankinku" }
  ],
  chapters: [
    {
      name: "Babi na 1: Sanin ƙasarku da ciyar da ita",
      lessons: [
        {
          objectives: ["O1"],
          title: "Karanta ƙasarku da idanunku da hannayenku",
          minutes: 5,
          goal: "Yi bincike mai sauƙi na ƙasarku a gona da rubuta abin da ya nuna muku.",
          text: [
            "Kuna iya koyon abubuwa da yawa game da ƙasa da shebur, hannayenku da idanunku. Ƙasa mai lafiya tana da duhu, tana farfashewa da sauƙi, kuma tana da ƙamshin ƙasa. Tana da tsutsotsin ƙasa da sauran ƙananan halittu, saiwoyi suna shiga can ƙasa, kuma ruwan sama yana shiga ciki maimakon ya gudu. Ƙasa marar kyau fara ce ko mai tauri, tana yin ɓawo bayan ruwan sama, tana fashewa sosai idan ta bushe, ko tana kasancewa jiƙaƙƙiya mai wari.",
            "Ku ji irin ƙasar: ku jiƙa ɗan ƙwallon ƙasa ku murza shi tsakanin yatsunku. Ƙasa mai yashi tana da ƙaiƙayi kuma tana watsewa; ruwa yana wucewa ta cikinta da sauri kuma takinta yana ɓacewa. Ƙasar laka (yumɓu) tana da ɗanƙo kuma ana iya murza ta ta zama doguwar siririyar igiya; tana riƙe ruwa da taki amma tana iya cika da ruwa ta yi tauri. Ƙasa matsakaiciya (loam) tana tsakanin su, kuma ita ce mafi sauƙin noma.",
            "Ku kuma duba shuke-shuken. Ganyen ƙasa na masara da suka yi rawaya na iya nufin nitrogen ya yi kaɗan. Ganyen masara ƙarama masu launin shunayya na iya nufin phosphorus ya yi kaɗan. Ciyawa kamar kudiji (striga) sau da yawa tana nuna ƙasa da ta gaji, marar ƙarfi. Waɗannan alamomi ne, ba shaida ba: gwajin ƙasa ne yake faɗa muku da tabbas."
          ],
          steps: ["Ku haƙa rami mai zurfin kusan shebur ɗaya a wurare uku a gonar.", "Ku duba launi, matakai, saiwoyi da duk wani mataki mai tauri.", "Ku ƙirga tsutsotsin ƙasa a cikin shebur ɗaya na ƙasa.", "Ku jiƙa ƙwallon ƙasa ku ji shi: mai ƙaiƙayi (yashi), mai ɗanƙo (laka) ko tsakani (loam).", "Bayan ruwan sama, ku lura da inda ruwa yake gudu ko yake tsayawa.", "Ku rubuta abin da kuka gani a kowane sashe na gonar."],
          words: [["Irin ƙasa (soil texture)", "yawan yashi, gari-gari ko laka a ƙasa; shi ne ke yanke yadda ruwa yake wucewa da sauri."], ["Loam", "ƙasa mai kyakkyawan haɗin yashi, gari-gari da laka."], ["Hardpan (mataki mai tauri)", "mataki mai tauri a ƙarƙashin saman ƙasa da saiwoyi da ruwa ba sa iya ratsawa."], ["Kudiji (striga)", "ciyawa mai cin wasu shuke-shuke da ke kai wa masara, dawa da gero hari, kuma ta fi yawa a ƙasa marar ƙarfi."]],
          slides: [
            { title: "Ƙasa mai lafiya", bullets: ["Mai duhu, mai farfashewa, mai ƙamshin ƙasa", "Tsutsotsin ƙasa da saiwoyi masu zurfi", "Ruwan sama yana shiga, ba ya gudu"] },
            { title: "Ku ji irin ƙasar", bullets: ["Mai ƙaiƙayi, tana watsewa: yashi, ruwa yana wucewa da sauri", "Mai ɗanƙo, tana zama igiya: laka, tana riƙe ruwa", "Tsakani: loam, mafi sauƙin noma"] },
            { title: "Alamun shuka (ba shaida ba)", bullets: ["Ganyen ƙasa na masara masu rawaya: watakila nitrogen ya yi kaɗan", "Ganyen masara ƙarama masu shunayya: watakila phosphorus ya yi kaɗan", "Kudiji (striga) da yawa: sau da yawa ƙasa ta gaji"] },
            { title: "Binciken gona", bullets: ["Ku haƙa a wurare uku", "Ku duba, ku shaƙa, ku ƙirga tsutsotsi, ku ji irin ƙasa", "Ku kalli ruwa bayan ruwan sama; ku rubuta"] }
          ],
          tryIt: "Ku yi binciken a ɗaya daga cikin gonakinku: ku haƙa a wurare uku, ku ji irin ƙasar, ku ƙirga tsutsotsin ƙasa, sannan ku rubuta layi ɗaya na kowane wuri. Ku ɗauki hoton kowane rami da waya don ku kwatanta a damina mai zuwa.",
          youCanNow: "duba ƙasarku a gona da bayyana irinta, halittun da ke cikinta, yadda ruwa yake wucewa da alamun gargaɗi.",
          quickCheck: [
            { objective: "O1", q: "Me ganyen ƙasa na masara masu rawaya za su iya nunawa?", options: ["Ruwa ya yi yawa a cikin ganyen", "Rana ta yi yawa", "Girma mai lafiya", "Nitrogen ya yi kaɗan"], answer: 3, why: "Ganyen ƙasa na masara masu rawaya na iya nufin nitrogen ya yi kaɗan; gwajin ƙasa ne yake tabbatarwa." },
            { objective: "O1", q: "Bayan ruwan sama, gonarku tana yin ɓawo mai tauri kuma ruwa yana gudu. Me za ku rubuta a binciken gonarku?", options: ["Ƙasa mai lafiya; babu buƙatar canji", "Alamar ƙasa marar kyau, da za a tabbatar da gwajin ƙasa", "Tsutsotsin ƙasa sun yi yawa", "Cikakkiyar loam"], answer: 1, why: "Ɓawo da gudun ruwa alamun ƙasa marar kyau ne; gwajin ƙasa ne yake faɗa muku da tabbas abin da take buƙata." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Yin gwajin ƙasa da ɗaukar samfuri mai kyau",
          minutes: 5,
          goal: "Ɗauki samfurin ƙasa daidai kuma ku san inda za ku kai shi don gwaji.",
          text: [
            "Gwajin ƙasa yana faɗa muku abin da idanunku ba za su iya gani ba: yawan tsamin ƙasa (pH) da yawan manyan sinadaran abinci da take riƙe da su. Ƙasa da yawa a yankunan da ake samun ruwan sama sosai a Kenya, Najeriya da Ghana tana da tsami, wanda ke kulle sinadaran abinci daga amfanin gona; gwaji yana faɗa muku ko farar ƙasa (lime) za ta taimaka. Ba tare da gwaji ba, kuna iya kashe kuɗi kan takin da bai dace ba.",
            "Inda za a yi gwaji: a Kenya, KALRO yana da ɗakunan gwajin ƙasa (misali ɗakin gwajin ƙarfin ƙasa a Kabete, Nairobi), kuma wasu gundumomi (counties) suna da nasu. A Ghana, CSIR-Cibiyar Binciken Ƙasa a Kwadaso, Kumasi tana yin gwajin ɗakin gwaji. A Najeriya da sauran wurare, ku tambayi ofishin faɗakarwar noma na jiharku ko gundumarku, jami'ar noma ko cibiyar bincike. Kuɗin gwaji, wuraren ɗakunan gwaji da lokacin jira suna canjawa, don haka ku kira ko ku duba kafin ku tafi.",
            "Jagorar KALRO da kanta ta ce ɗaukar samfuri shi ne babban tushen kuskure a gwajin ƙasa. Ɗan ɗiba guda daga wuri ɗaya ba ya wakiltar gona. Ku ɗauki ƙananan samfurori da yawa a faɗin gonar, ku haɗa su, sannan ku aika samfuri ɗaya mai tsabta da aka haɗa ga kowace gona, ko kowane sashe da ya yi daban."
          ],
          steps: ["Ku zaɓi gona ɗaya (ko sashe ɗaya da ke kama da juna).", "Ku yi tafiya a karkace (zigzag) ku ɗauki ƙananan samfurori 10 zuwa 20, daga saman cm 15 zuwa 20, da shebur ko burgi mai tsabta.", "Ku guji wurare na musamman: tsofaffin tarin kashi, toka, hanyoyi, sheƙar gara, layukan takin zamani.", "Ku haɗa dukkan samfurorin sosai a bokiti mai tsabta (ba buhun taki ba).", "Ku ɗauki kusan rabin kilo na haɗin, ku busar da shi a inuwa, ku rubuta alama: suna, gona, kwanan wata, amfanin gonar da za a shuka.", "Ku kai shi ɗakin gwaji kafin shuka don sakamakon ya iso da wuri."],
          words: [["pH", "lambar da ke nuna yawan tsami ko gishiri (alkaline) a ƙasa; yawancin amfanin gona suna son ta kusa da tsakiya."], ["Ƙasa mai tsami", "ƙasa mai ƙarancin pH da ke kulle sinadaran abinci kamar phosphorus."], ["Farar ƙasa (lime)", "garin dutse da ke rage tsamin ƙasa."], ["Samfurin haɗi (composite sample)", "ƙananan samfurori da yawa daga gona ɗaya da aka haɗa su zama ɗaya."]],
          slides: [
            { title: "Me yasa za a yi gwaji?", bullets: ["Yana nuna pH da manyan sinadaran abinci", "Yana faɗa muku ko farar ƙasa (lime) za ta taimaka", "Yana hana kashe kuɗi kan takin da bai dace ba"] },
            { title: "Inda za a yi gwaji", bullets: ["Kenya: ɗakunan gwajin KALRO (misali Kabete) da na wasu gundumomi", "Ghana: CSIR-Cibiyar Binciken Ƙasa, Kumasi", "Sauran wurare: ofishin faɗakarwar noma, jami'a, cibiyar bincike"] },
            { title: "Ku ɗauki samfuri mai kyau", bullets: ["A karkace, wurare 10 zuwa 20, saman cm 15 zuwa 20", "Ku guji tarin kashi, toka, hanyoyi, sheƙar gara", "Ku haɗa a bokiti mai tsabta; ku aika kusan rabin kilo"] },
            { title: "Alama da lokaci", bullets: ["Suna, gona, kwanan wata, amfanin gonar da za a shuka", "Ku busar a inuwa", "Ku aika kafin shuka; ku fara duba kuɗi da ɗakin gwaji"] }
          ],
          sources: [KALRO, KALRO_SAMPLING, CSIR_SRI],
          tryIt: "Ku nemo wuri mafi kusa da ake gwajin ƙasa: ku kira jami'in faɗakarwar noma ko ku duba KALRO, CSIR-SRI ko cibiyar binciken jiharku. Ku rubuta sunansa, kuɗinsa da lokacin jira. Sannan ku zana gonarku ku nuna hanyar karkace da za ku bi don ɗaukar samfuri.",
          youCanNow: "ɗaukar samfurin ƙasa da aka haɗa daidai, da sanin inda za a gwada shi.",
          quickCheck: [
            { objective: "O2", q: "Me pH na ƙasa yake faɗa muku?", options: ["Yawan tsamin ƙasa", "Yawan tsutsotsin da ke cikinta", "Zurfin da saiwoyi suke kaiwa", "Yawan ruwan saman da ya sauka"], answer: 0, why: "pH yana nuna yawan tsamin ƙasa; ƙasa mai tsami tana kulle sinadaran abinci kuma tana iya buƙatar farar ƙasa (lime)." },
            { objective: "O2", q: "Wani sashe na gonarku yana cike da ruwa, sauran kuma busasshe ne mai yashi. Yaya za ku ɗauki samfuri?", options: ["Ɗan ɗiba guda daga tsakiya", "Ku haɗa sashen jiƙaƙƙe da busasshe su zama samfuri ɗaya", "Ku aika samfurin haɗi daban ga kowane sashe da ya yi daban", "Ku ɗauki samfuri kusa da tarin kashi kawai"], answer: 2, why: "Kowace gona, ko kowane sashe da ya yi daban, yana samun nasa samfurin haɗi mai tsabta." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ƙara taki na halitta da takin gargajiya da kashin dabbobi",
          minutes: 5,
          goal: "Yi tarin takin gargajiya (compost) kuma ku yi amfani da kashin dabbobi lafiya don ƙara taki na halitta a ƙasa.",
          text: [
            "Taki na halitta (organic matter) shi ne baƙin ragowar shuke-shuke da dabbobi da suka ruɓe a cikin ƙasa. FAO tana kiransa mabuɗin ƙasa mai jure fari: yana riƙe ruwa kamar soso, yana ciyar da tsutsotsin ƙasa da halittun ƙasa, yana riƙe sinadaran abinci don ruwan sama kada ya wanke su, kuma yana sa ƙasa ta farfashe don saiwoyi su yi girma.",
            "Kuna ƙara taki na halitta ta hanyar barin ragowar amfanin gona a gona maimakon ƙona su, ta ƙara kashin dabbobi da takin gargajiya, da ta shuka wake da dangoginsa da amfanin gonar rufe ƙasa. Ƙona ragowar amfanin gona da yin huɗa akai-akai dukkansu suna cinye taki na halitta.",
            "Takin gargajiya yana da sauƙin yi: ku gina tari ko rami da matakan busassun abubuwa (karan masara, busasshiyar ciyawa), ɗanyen ganye (sabuwar ciyawa, ganye, sharar kicin) da kashin dabbobi, da ɗan ƙasa tsakanin matakan. Ku riƙa sa shi ya kasance da danshi kamar soson da aka matse, kuma ku juya shi duk mako biyu zuwa uku. Yana shiryawa cikin kusan wata biyu zuwa uku idan ya yi duhu, yana farfashewa, kuma yana da ƙamshin ƙasa. Ku bar ɗanyen kashi ya ruɓe kafin amfani; ɗanyen kashi mai zafi yana iya ƙona ƙananan shuke-shuke."
          ],
          steps: ["Ku zaɓi wuri mai inuwa kusa da gona da ruwa.", "Ku shimfiɗa tushe na karan shuka masu kauri don iska.", "Ku ƙara matakai: busassun abubuwa, ɗanyen ganye, kashi, ɗan ƙasa; ku maimaita.", "Ku shayar da kowane mataki ya yi danshi, ba ya jiƙe sharkaf ba.", "Ku tura sanda cikin tarin; idan yana da ɗumi, yana aiki.", "Ku juya tarin duk mako biyu zuwa uku.", "Ku yi amfani da shi idan ya yi duhu ya farfashe, a ramukan shuka ko layuka."],
          words: [["Taki na halitta (organic matter)", "ruɓaɓɓen ragowar shuke-shuke da dabbobi a ƙasa da ke riƙe ruwa da sinadaran abinci."], ["Takin gargajiya (compost)", "ruɓaɓɓiyar sharar shuke-shuke da dabbobi da ake amfani da ita don ciyar da ƙasa."], ["Ragowar amfanin gona", "karan, ganye da ɓawon da ke saura bayan girbi."], ["Amfanin gonar rufe ƙasa (cover crop)", "amfanin gona da ake shukawa musamman don rufe ƙasa da ciyar da ita."]],
          slides: [
            { title: "Me yasa taki na halitta yake da muhimmanci", bullets: ["Yana riƙe ruwa kamar soso (FAO)", "Yana ciyar da halittun ƙasa kuma yana riƙe sinadaran abinci", "Yana sa ƙasa ta farfashe don saiwoyi"] },
            { title: "Ku ƙara shi, kada ku ƙona shi", bullets: ["Ku bar ragowar amfanin gona; kada ku ƙona", "Ku ƙara kashin dabbobi da takin gargajiya", "Ku shuka wake da dangoginsa da amfanin gonar rufe ƙasa"] },
            { title: "Yin takin gargajiya", bullets: ["Matakai: busassu, ɗanye, kashi, ɗan ƙasa", "Danshi kamar soson da aka matse", "Ku juya duk mako biyu zuwa uku; yana shiryawa cikin wata 2 zuwa 3"] },
            { title: "Kashin dabbobi lafiya", bullets: ["Ku fara barin ɗanyen kashi ya ruɓe", "Ɗanyen kashi mai zafi yana iya ƙona ƙananan shuke-shuke", "Ku wanke hannu bayan kun taɓa shi"] }
          ],
          sources: [FAO_SOM],
          tryIt: "Ku fara tarin ko ramin takin gargajiya a wannan makon da abin da kuke da shi: karan shuka, ciyawa, sharar kicin da kashin dabbobi. Ku rubuta kwanan wata, matakan da kuka yi amfani da su, da tunatarwa a wayarku don ku juya shi bayan mako biyu.",
          youCanNow: "yin takin gargajiya, amfani da kashin dabbobi lafiya, da bayanin yadda taki na halitta yake taimakon ƙasarku.",
          quickCheck: [
            { objective: "O3", q: "Me ake sawa a tarin takin gargajiya?", options: ["Roba da gwangwani kawai", "Ɗanyen kashi kawai", "Matakan busassun abubuwa, ɗanyen ganye da kashi, da ɗan ƙasa a tsakaninsu", "Tokar ragowar amfanin gona da aka ƙona kawai"], answer: 2, why: "Ana gina takin gargajiya da matakan busassun abubuwa, ɗanyen ganye da kashi, a riƙe danshinsa kuma a juya shi." },
            { objective: "O3", q: "Bayan kusan wata uku takin gargajiyarku ya yi duhu, yana farfashewa, kuma yana da ƙamshin ƙasa. Me za ku yi?", options: ["Ku yi amfani da shi; ya shirya", "Ku ƙona shi", "Ku zubar da shi", "Ku bar shi ƙarin shekara biyu"], answer: 0, why: "Takin gargajiya ya shirya idan ya yi duhu, yana farfashewa kuma yana da ƙamshin ƙasa, bayan kusan wata biyu zuwa uku." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Sanin ƙasarku da ciyar da ita",
        questions: [
          { objective: "O1", q: "Kun jiƙa ƙwallon ƙasa sai ya yi ƙaiƙayi kuma yana watsewa. Wace irin ƙasa ce mai yiwuwa?", options: ["Laka", "Yashi", "Loam", "Ƙasar fadama (peat)"], answer: 1, why: "Ƙasa mai ƙaiƙayi da ke watsewa yashi ce; ruwa yana wucewa da sauri kuma takinta yana ɓacewa." },
          { objective: "O1", q: "Masara ƙarama tana da ganye masu shunayya. Mene ne mataki mafi kyau na gaba?", options: ["Ku sayi kowane taki nan take", "Ku ƙona gonar", "Ku ɗauke shi a matsayin alama ku tabbatar da gwajin ƙasa", "Ku cire amfanin gonar"], answer: 2, why: "Launin ganye alama ce, ba shaida ba; gwajin ƙasa ne yake faɗa muku da tabbas." },
          { objective: "O2", q: "Yaya ya kamata ku ɗauki samfurin ƙasa daga gona?", options: ["Ɗan ɗiba guda daga wuri mafi kyau", "Ƙasa daga tsohon tarin kashi", "Ƙasa daga hanya, inda haƙa yake da sauƙi", "Ƙananan samfurori 10 zuwa 20 a karkace, da aka haɗa su zama ɗaya"], answer: 3, why: "Samfurin haɗi daga wurare da yawa yana wakiltar gonar gaba ɗaya; KALRO ta ce ɗaukar samfuri shi ne babban tushen kuskure." },
          { objective: "O2", q: "A Ghana, wace cibiya ce take yin gwajin ƙasa a ɗakin gwaji?", options: ["CSIR-Cibiyar Binciken Ƙasa, Kumasi", "Hukumar ƙwallon ƙafa ta ƙasa", "Hukumar hasashen yanayi", "Gidan waya"], answer: 0, why: "CSIR-Cibiyar Binciken Ƙasa a Kwadaso, Kumasi tana yin gwajin ɗakin gwaji." },
          { objective: "O3", q: "Me ya kamata ku yi da karan masara bayan girbi don gina lafiyar ƙasa?", options: ["Ku ƙona su", "Ku bar su a gona ko ku yi takin gargajiya da su", "Ku jefa su a kogi", "Ku sayar da su duka kowace damina"], answer: 1, why: "Ragowar amfanin gona da aka bari a gona ko aka yi takin gargajiya da su suna ƙara taki na halitta; ƙonawa tana cinye shi." }
        ]
      }
    },
    {
      name: "Babi na 2: Kiyaye lafiyar ƙasa daga damina zuwa damina",
      lessons: [
        {
          objectives: ["O4"],
          title: "Jujjuya amfanin gona da shuka tare da wake da dangoginsa",
          minutes: 5,
          goal: "Tsara jujjuya amfanin gona na damina uku da shuka tare da wake ko dangoginsa a gona ɗaya.",
          text: [
            "Shuka amfanin gona ɗaya a gona ɗaya kowace damina yana tsotse sinadaran abinci iri ɗaya, kuma yana tara ƙwarinsa, cututtukansa da ciyawarsa. Jujjuya amfanin gona (crop rotation) yana nufin canja amfanin gona a gona daga damina zuwa damina, misali masara, sannan wake ko gyaɗa, sannan dawa ko rogo.",
            "Wake da dangoginsa (legumes) kamar wake, wake na saniya (cowpea), gyaɗa, waken soya da waken kurkura (pigeon pea) suna aiki tare da ƙwayoyin halitta (bacteria) a cikin ƙananan ƙulle-ƙulle (nodules) a saiwoyinsu don ɗaukar nitrogen daga iska. Wani ɓangare na wannan nitrogen yana saura a saiwoyi da ganye don amfanin gona na gaba, musamman idan kun bar ragowarsu a gona.",
            "Shuka tare (intercropping) yana nufin shuka amfanin gona biyu tare, kamar masara da wake, dawa da wake na saniya, ko rogo da gyaɗa. Yana rufe ƙasa, yana raba haɗari, kuma yana iya ba da ƙarin abinci gaba ɗaya daga ƙasa ɗaya. Ku bar tazara da ke bar dukkan amfanin gonan biyu su sami haske, kuma ku shuka waken da wuri don ya kafu."
          ],
          steps: ["Ku jera gonakin da kuke nomawa da abin da aka shuka a kowace a damina da ta wuce.", "Ku tsara damina uku masu zuwa don kada wata gona ta sami amfanin gona ɗaya sau biyu a jere.", "Ku sa wake ko dangoginsa a kowace gona aƙalla sau ɗaya cikin damina uku.", "Ku zaɓi biyu ɗaya na shukawa tare, kamar masara da wake.", "Ku bar ragowar wake da dangoginsa a gona bayan girbi."],
          words: [["Jujjuya amfanin gona (crop rotation)", "canja amfanin gonar da ake shukawa a gona daga damina ɗaya zuwa ta gaba."], ["Wake da dangoginsa (legume)", "shuka kamar wake, wake na saniya ko gyaɗa da ke iya ƙara nitrogen a ƙasa."], ["Nodules (ƙulle-ƙulle)", "ƙananan ƙulle-ƙulle a saiwoyin wake inda ƙwayoyin halitta ke ɗaukar nitrogen daga iska."], ["Shuka tare (intercropping)", "shuka amfanin gona biyu ko fiye tare a gona ɗaya."]],
          slides: [
            { title: "Me yasa za a jujjuya", bullets: ["Amfanin gona ɗaya kowace damina yana tsotse sinadarai iri ɗaya", "Ƙwari, cututtuka da ciyawa suna taruwa", "Misali: masara, sannan wake, sannan dawa"] },
            { title: "Wake da dangoginsa suna ciyar da ƙasa", bullets: ["Wake, wake na saniya, gyaɗa, waken soya, waken kurkura", "Ƙulle-ƙullen saiwoyi suna ɗaukar nitrogen daga iska", "Ku bar ragowarsu don amfanin gona na gaba ya amfana"] },
            { title: "Shuka tare", bullets: ["Masara + wake, dawa + wake na saniya, rogo + gyaɗa", "Yana rufe ƙasa kuma yana raba haɗari", "Ku bar tazara don dukkan amfanin gonan biyu su sami haske"] }
          ],
          sources: [FAO_SOM],
          tryIt: "Ku zana tebur mai sauƙi: gonakinku a gefe, damina uku masu zuwa a sama. Ku cike amfanin gona a kowane akwati ta yadda kowace gona za ta sami wake ko dangoginsa sau ɗaya kuma babu gonar da za ta maimaita amfanin gona. Ku tumɓuke shukar wake ko gyaɗa ɗaya ku nemi ƙulle-ƙulle a saiwoyinta.",
          youCanNow: "tsara jujjuya amfanin gona da shuka tare da wake ko dangoginsa da ke ciyar da ƙasarku.",
          quickCheck: [
            { objective: "O4", q: "Mene ne ƙulle-ƙulle (nodules) a saiwoyin wake da dangoginsa?", options: ["Alamun cuta", "Ƙananan ƙulle-ƙulle inda ƙwayoyin halitta ke ɗaukar nitrogen daga iska", "Ƙwayayen ƙwari", "Duwatsu a cikin ƙasa"], answer: 1, why: "Wake da dangoginsa suna aiki tare da ƙwayoyin halitta a ƙulle-ƙullen saiwoyi don ɗaukar nitrogen daga iska." },
            { objective: "O4", q: "Kun shuka masara da wake tare, amma waken ba ya samun haske. Me za ku canja?", options: ["Ku daina shuka wake", "Ku ƙona masarar", "Ku ƙara iri", "Ku yi amfani da tazara da ke bar dukkan amfanin gonan biyu su sami haske, ku kuma shuka waken da wuri"], answer: 3, why: "Shuka tare yana buƙatar tazara da ke bar dukkan amfanin gonan biyu su sami haske, da shuka waken da wuri don ya kafu." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Rufe ƙasa da ciyawa da hana zaizayar ƙasa",
          minutes: 5,
          goal: "Zaɓi da shimfiɗa ciyawar rufe ƙasa da abubuwa masu sauƙi na hana zaizaya a gona mai gangara.",
          text: [
            "Ƙasa marar rufi ƙasa ce da za ta ɓace. Ruwan sama mai ƙarfi yana tayar da ƙasa, kuma ruwan da ke gudu yana ɗauke saman ƙasa mafi albarka. Ciyawar rufe ƙasa (mulch), wato shimfiɗar ragowar amfanin gona, busasshiyar ciyawa ko ganye a saman ƙasa, tana rage ƙarfin ruwan sama, tana riƙe danshi da sanyin ƙasa, kuma tana ciyar da ƙasa yayin da take ruɓewa. FAO ta lura cewa a gangara ana buƙatar a rufe ƙasa da ragowar amfanin gona fiye da a ƙasa mai faɗi don hana zaizaya.",
            "A gangara, ku yi aiki a gefe-gefe na gangarar, kada ku taɓa yin sama da ƙasa. Ku shuka ku yi kunyoyi a kan layin tudu (contour), wato layi mai tsayi iri ɗaya a gefe-gefe na gangarar. FAO ta bayyana kunyoyin layin tudu a matsayin hanya mai kyau ga ƙananan manoma masu kayan hannu ko shanun huɗa, da layukan ciyawa (misali ciyawar Napier) a kan layin tudu a matsayin madadi mai arha ga matakala (terraces); ciyawar kuma tana iya ciyar da dabbobi.",
            "A ƙasa mai gangara sosai, layukan duwatsu, ganuwar ƙasa a kan layin tudu (contour bunds) da matakala (kamar matakalar fanya juu a Kenya) suna riƙe ƙasa da ruwa. Suna buƙatar aiki don ginawa da kiyayewa, kuma layukan da aka shimfiɗa ba daidai ba suna iya ƙara zaizaya, don haka ku nemi jami'in faɗakarwar noma ya taimaka wajen yin alamar layin tudu."
          ],
          steps: ["Ku zagaya gonar bayan ruwan sama ku yi alama inda ruwa yake gudu da inda aka wanke ƙasa.", "Ku yi alamar layukan tudu a gefe-gefe na gangarar da A-frame mai sauƙi ko ma'aunin bututun ruwa, ko da taimakon faɗakarwar noma.", "Ku shuka, ku yi kunyoyi, ku yi noman ciyawa a kan layukan tudu.", "Ku shuka layukan ciyawa ko ku gina layukan duwatsu ko ganuwar ƙasa a kan wasu layukan tudu.", "Ku rufe ƙasa tsakanin layuka da ciyawar rufe ƙasa.", "Ku duba ku gyara bayan kowane ruwan sama mai ƙarfi."],
          words: [["Ciyawar rufe ƙasa (mulch)", "shimfiɗar ragowar amfanin gona, ciyawa ko ganye a saman ƙasa."], ["Zaizayar ƙasa (erosion)", "ruwa ko iska suna ɗauke ƙasa."], ["Layin tudu (contour)", "layi a gefe-gefe na gangara inda kowane wuri yake da tsayi iri ɗaya."], ["Matakala (terrace)", "mataki mai faɗi da aka yanka a gangara don riƙe ƙasa da ruwa."]],
          slides: [
            { title: "Ƙasa marar rufi za ta ɓace", bullets: ["Ruwan sama yana tayar da ƙasa; ruwan da ke gudu yana ɗauke ta", "Ciyawar rufe ƙasa tana rage ƙarfin ruwa kuma tana riƙe danshi", "Gangara tana buƙatar ƙarin rufi"] },
            { title: "Ku yi aiki a gefe-gefe na gangara", bullets: ["Kada ku taɓa yin huɗa sama da ƙasa", "Ku yi kunyoyi ku shuka a kan layin tudu", "Layukan ciyawa: masu arha, kuma abincin dabbobi"] },
            { title: "Ƙasa mai gangara sosai", bullets: ["Layukan duwatsu, ganuwar ƙasa, matakala", "Ku shimfiɗa layuka a hankali; ku tambayi faɗakarwar noma", "Ku gyara bayan ruwan sama mai ƙarfi"] }
          ],
          sources: [FAO_RUNOFF, FAO_MECH],
          tryIt: "Bayan ruwan sama na gaba, ku zagaya gonarku ku zana inda ruwa yake gudu da inda aka wanke ƙasa. Ku zaɓi hanya ɗaya (ciyawar rufe ƙasa, kunyoyin layin tudu, layin ciyawa ko layin duwatsu) don wuri mafi muni, ku rubuta lokacin da za ku sa ta.",
          youCanNow: "gano zaizayar ƙasa a gonarku da zaɓar ciyawar rufe ƙasa da hanyoyin layin tudu don hana ta.",
          quickCheck: [
            { objective: "O5", q: "Mene ne layin tudu (contour)?", options: ["Layi kai tsaye sama da gangara", "Shinge", "Hanya", "Layi mai tsayi iri ɗaya a gefe-gefe na gangara"], answer: 3, why: "Layin tudu layi ne mai tsayi iri ɗaya a gefe-gefe na gangara; kunyoyi da layukan ciyawa suna bin sa." },
            { objective: "O5", q: "Kuna son gina matakalar fanya juu a gona mai gangara sosai. Me za ku fara yi?", options: ["Ku nemi jami'in faɗakarwar noma ya taimaka wajen yin alamar layin tudu", "Ku haƙa kai tsaye sama da ƙasa a gangarar", "Ku fara a ko'ina ku gyara daga baya", "Ku fara cire dukkan ciyawa"], answer: 0, why: "Layukan da aka shimfiɗa ba daidai ba suna iya ƙara zaizaya, don haka ku nemi taimako wajen yin alamar layin tudu." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Tushen takin zamani: nau'i, yawa, lokaci da wuri da suka dace",
          minutes: 6,
          goal: "Rubuta tsarin takin zamani na amfanin gona ɗaya ta hanyar 4R.",
          text: [
            "Amfanin gona suna buƙatar nitrogen (N), phosphorus (P) da potassium (K), da ƙananan adadin wasu sinadaran abinci. Takin zamani (mineral fertilizer) yana ba da su da sauri kuma da adadi sananne. Tunanin 4R, wanda ake amfani da shi a faɗakarwar noma a duk Afirka, yana taimaka muku samun mafi yawan amfani daga kowane buhu: nau'in da ya dace, a yawan da ya dace, a lokacin da ya dace, a wurin da ya dace.",
            "Nau'in da ya dace: takin da ke ba da abin da gwajin ƙasarku ya ce babu (misali takin phosphorus lokacin shuka, takin nitrogen don ƙarin taki a kan shuka mai girma, da farar ƙasa idan ƙasar tana da tsami). Yawan da ya dace: adadin da gwajin ƙasarku da shawarar yankinku suka bayar don amfanin gonarku da girbin da kuke nema; ƙari ba koyaushe ya fi kyau ba, kuma yana ɓata kuɗi. Lokacin da ya dace: lokacin da amfanin gona yake buƙata, misali ƙarin takin nitrogen a masara idan ta kai kusan tsayin gwiwa, lokacin da ƙasa take da danshi. Wurin da ya dace: kusa da saiwoyi, kamar a ramin shuka ko layi a gefen layin shuka, ba tare da ya taɓa iri ba, kuma a rufe shi don ruwan sama kada ya wanke shi.",
            "Ku yi amfani da takin zamani tare da taki na halitta; su biyun suna aiki fiye da kowanne shi kaɗai. Ku sayi buhunan da aka rufe daga dillalan kayan noma masu rajista, ku duba alamar buhun. Mataimakin AI a waya zai iya taimaka muku fahimtar rahoton gwajin ƙasa da kalmomi masu sauƙi, amma yawan taki yana fitowa daga ɗakin gwaji, jami'in faɗakarwar noma ko shawarar hukuma ta yankinku."
          ],
          steps: ["Ku karanta gwajin ƙasarku ko shawarar yankinku don amfanin gonar.", "Nau'i: ku rubuta takin da ke ba da kowane sinadari da babu (da farar ƙasa idan ana buƙata).", "Yawa: ku rubuta adadin a kowace eka ko hekta da shawarar ta bayar.", "Lokaci: ku yi alamar ranakun shuka da na ƙarin taki a kalandarku.", "Wuri: ku shirya sa shi a rami ko layi, ba tare da ya taɓa iri ba, ku rufe shi.", "Ku sayi buhunan da aka rufe daga dillalin kayan noma mai rajista; ku ajiye rasit."],
          words: [["NPK", "nitrogen (N), phosphorus (P) da potassium (K), manyan sinadaran abinci uku na amfanin gona."], ["4R", "nau'in da ya dace, yawan da ya dace, lokacin da ya dace, wurin da ya dace na takin zamani."], ["Ƙarin taki (topdressing)", "ƙara taki, yawanci nitrogen, ga amfanin gona da ke girma."], ["Dillalin kayan noma (agro-dealer)", "shagon da ke sayar da iri, taki da sauran kayan noma."]],
          slides: [
            { title: "4R", bullets: ["Nau'in da ya dace: abin da ƙasarku ba ta da shi", "Yawan da ya dace: adadin da aka ba da shawara", "Lokacin da ya dace: lokacin da amfanin gona yake buƙata", "Wurin da ya dace: kusa da saiwoyi, a rufe"] },
            { title: "Misali: masara", bullets: ["Takin phosphorus a ramin shuka, ba tare da ya taɓa iri ba", "Ƙarin takin nitrogen a kusan tsayin gwiwa, ƙasa mai danshi", "Farar ƙasa idan gwaji ya ce ƙasar tana da tsami"] },
            { title: "Ku sami amfanin kuɗinku", bullets: ["Ƙari ba koyaushe ya fi kyau ba", "Ku haɗa da takin gargajiya da kashin dabbobi", "Buhunan da aka rufe daga dillalai masu rajista"] },
            { title: "AI zai iya bayani, ba zai ba da umarni ba", bullets: ["Ku nemi AI a waya ya bayyana rahoton ƙasarku a sauƙaƙe", "Yawan taki daga ɗakin gwaji ko jami'in faɗakarwa yake"] }
          ],
          sources: [HANDBOOK_4R, KALRO],
          tryIt: "Aikin ƙarshe: ku rubuta tsarin ƙasarku mai shafi ɗaya na gona ɗaya. Ku haɗa abin da binciken gonarku ya nuna, tsarin gwajin ƙasarku ko sakamakonsa, yadda za ku ƙara taki na halitta, jujjuyawar amfanin gonarku ko shuka tare, yadda za ku hana zaizaya, da layin takin zamani na kowane sinadari: nau'i, yawa, lokaci da wuri.",
          youCanNow: "amfani da takin zamani ta hanyar 4R da haɗa cikakken tsarin ƙasa na damina ɗaya don gonarku.",
          quickCheck: [
            { objective: "O6", q: "Me \"nau'in da ya dace\" yake nufi a 4R?", options: ["Buhu mafi arha a shago", "Buhun da ke da alama mafi haske", "Takin da ke ba da abin da gwajin ƙasarku ya ce babu", "Duk takin da maƙwabci ya yi amfani da shi"], answer: 2, why: "Nau'in da ya dace yana ba da sinadaran abincin da gwajin ƙasarku ya ce babu." },
            { objective: "O6", q: "Wani mai sayarwa yana ba da taki mai arha daga buhun da aka buɗe wanda ba shi da alama. Me za ku yi?", options: ["Ku saya domin yana da arha", "Ku sayi buhunan da aka rufe masu alama daga dillalin kayan noma mai rajista a maimakon haka", "Ku haɗa shi da takinku", "Ku sayi ninki biyu"], answer: 1, why: "Ku sayi buhunan da aka rufe daga dillalan kayan noma masu rajista, ku duba alamar buhun." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Kiyaye lafiyar ƙasa daga damina zuwa damina",
        questions: [
          { objective: "O4", q: "Me yasa wake da dangoginsa suke taimakon amfanin gona na gaba?", options: ["Suna kashe dukkan ciyawa", "Saiwoyinsu suna aiki tare da ƙwayoyin halitta don ƙara nitrogen", "Suna sa ƙasa ta ƙara tsami", "Ba sa buƙatar ruwan sama"], answer: 1, why: "Ƙulle-ƙullen saiwoyi suna ɗaukar nitrogen daga iska; wani ɓangare yana saura a ƙasa don amfanin gona na gaba." },
          { objective: "O4", q: "Wane tsari ne jujjuya amfanin gona mai kyau?", options: ["Masara, sannan wake, sannan dawa", "Masara, sannan masara, sannan masara", "Tumatir bayan tumatir kowace damina", "Barin gonar ba rufi duk bayan damina ɗaya"], answer: 0, why: "Canja amfanin gona da haɗa wake ko dangoginsa yana katse zagayen ƙwari kuma yana ciyar da ƙasa." },
          { objective: "O5", q: "A gona mai gangara, yaya ya kamata ku yi huɗa ku shuka?", options: ["Kai tsaye sama da ƙasa a gangarar", "A da'ira", "A gefe-gefe na gangarar, a kan layin tudu", "A saman kawai"], answer: 2, why: "Aiki a kan layin tudu yana rage gudun ruwa kuma yana riƙe ƙasa a wurinta." },
          { objective: "O6", q: "Me \"lokacin da ya dace\" yake nufi don ƙarin takin nitrogen a masara?", options: ["Duk lokacin da kuke da ragowar kuɗi", "Kafin ku sayi iri", "Bayan girbi", "Lokacin da amfanin gona yake buƙata, kusan tsayin gwiwa, da ƙasa mai danshi"], answer: 3, why: "Ana fi amfani da nitrogen idan amfanin gona mai girma yana buƙata kuma ƙasa tana da danshi." },
          { objective: "O6", q: "A ina ne wurin da ya dace don takin shuka?", options: ["A kan iri", "Kusa da saiwoyi, ba tare da ya taɓa iri ba, kuma a rufe", "A watsa shi a hanya", "A tarin takin gargajiya"], answer: 1, why: "Sa taki kusa da saiwoyi, a rufe kuma ba tare da ya taɓa iri ba, yana amfani da shi sosai kuma yana hana ƙona iri." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Lafiyar Ƙasa da Ƙarfinta",
    questions: [
      { objective: "O1", q: "Wace ce alamar ƙasa mai lafiya?", options: ["Fara kuma mai tauri da ɓawo", "Mai duhu, mai farfashewa, da tsutsotsin ƙasa", "Kullum cike da ruwa", "Ruwan sama yana gudu kai tsaye"], answer: 1, why: "Ƙasa mai duhu, mai farfashewa da tsutsotsin ƙasa tana da lafiya." },
      { objective: "O1", q: "Ƙasa mai ɗanƙo da ke zama doguwar igiya galibi:", options: ["Yashi ce", "Tsakuwa ce", "Laka ce", "Toka ce"], answer: 2, why: "Ƙasa mai ɗanƙo da ke zama igiya tana da laka sosai." },
      { objective: "O1", q: "Gona tana da kudiji (striga) da yawa. Wannan sau da yawa alama ce ta:", options: ["Ƙasa da ta gaji, marar ƙarfi", "Takin gargajiya ya yi yawa", "Cikakkiyar ƙasa", "Inuwa ta yi yawa"], answer: 0, why: "Kudiji ya fi yawa a ƙasa marar ƙarfi da ta gaji." },
      { objective: "O2", q: "Me gwajin ƙasa na ɗakin gwaji yake faɗa muku da idanunku ba za su iya gani ba?", options: ["Launin ƙasa", "Yawan tsutsotsi", "Inda ruwa yake gudu", "pH da yawan sinadaran abinci"], answer: 3, why: "Gwajin ƙasa yana auna tsami da sinadaran abinci." },
      { objective: "O2", q: "A Kenya, wace cibiyar ƙasa ce take da ɗakunan gwajin ƙasa?", options: ["KALRO", "Kenya Power", "Kenya Airways", "Kenya Wildlife Service"], answer: 0, why: "KALRO, Cibiyar Binciken Noma da Kiwo ta Kenya, tana da ɗakunan gwajin ƙasa kamar wanda ke Kabete." },
      { objective: "O2", q: "Lokacin ɗaukar samfurin ƙasa, wane wuri ya kamata ku guje wa?", options: ["Tsakiyar gonar", "Wani wuri a karkace", "Gefen layin shuka", "Tsohon tarin kashi ko tarin toka"], answer: 3, why: "Wurare na musamman suna ba da hoton gonar da ba daidai ba." },
      { objective: "O2", q: "A cikin me ya kamata ku sa samfurorin ƙasa don haɗa su?", options: ["Tsohon buhun taki", "Bokiti mai tsabta", "Kwalbar sinadarai da aka yi amfani da ita", "Aljihunku"], answer: 1, why: "Bokiti mai tsabta yana kiyaye samfurin daga taki ko sinadarai da za su ɓata sakamakon." },
      { objective: "O3", q: "A cewar FAO, taki na halitta a ƙasa yana da muhimmanci domin:", options: ["Yana sa ƙasa ta ƙara tauri", "Yana cire dukkan sinadaran abinci", "Yana riƙe ruwa da sinadaran abinci kamar soso", "Yana hana saiwoyi girma"], answer: 2, why: "Taki na halitta yana riƙe ruwa da sinadaran abinci kuma yana ciyar da halittun ƙasa." },
      { objective: "O3", q: "Yaya danshin tarin takin gargajiya ya kamata ya kasance?", options: ["Busasshe ƙarƙaf", "Cike da ruwa", "Danshi kamar soson da aka matse", "Ba shi da muhimmanci"], answer: 2, why: "Takin gargajiya yana buƙatar danshi ba tare da ya jiƙe sharkaf ba." },
      { objective: "O3", q: "Me yasa ya kamata ku bar ɗanyen kashi ya ruɓe kafin ku yi amfani da shi kusa da ƙananan shuke-shuke?", options: ["Ɗanyen kashi mai zafi yana iya ƙona ƙananan shuke-shuke", "Ruɓaɓɓen kashi ya fi nauyi", "Ɗanyen kashi ba shi da sinadaran abinci", "Doka ce a ko'ina"], answer: 0, why: "Ɗanyen kashi yana iya yin ƙarfi da zafi sosai ga ƙananan shuke-shuke." },
      { objective: "O3", q: "Wace al'ada ce take cinye taki na halitta a ƙasa?", options: ["Ƙara takin gargajiya", "Ƙona ragowar amfanin gona", "Shuka wake da dangoginsa", "Rufe ƙasa da ciyawa"], answer: 1, why: "Ƙonawa tana lalata ragowar da za su ciyar da ƙasa." },
      { objective: "O4", q: "Wanne ne daga cikin wake da dangoginsa?", options: ["Masara", "Dawa", "Rogo", "Wake na saniya (cowpea)"], answer: 3, why: "Wake na saniya yana cikin wake da dangoginsa, kuma yana iya ƙara nitrogen a ƙasa." },
      { objective: "O4", q: "Shuka masara da wake tare a gona ɗaya ana kiransa:", options: ["Shuka tare (intercropping)", "Sa farar ƙasa (liming)", "Gina matakala (terracing)", "Ƙarin taki (topdressing)"], answer: 0, why: "Shuka amfanin gona biyu tare shi ne shuka tare (intercropping)." },
      { objective: "O4", q: "Me yasa za a jujjuya amfanin gona maimakon shuka iri ɗaya kowace damina?", options: ["Don amfani da ƙarin taki", "Don sa noman ciyawa ya fi wuya", "Don katse taruwar ƙwari da cututtuka da daidaita sinadaran abinci", "Domin doka ta tilasta"], answer: 2, why: "Jujjuyawa tana katse zagayen ƙwari kuma tana hana amfanin gona ɗaya tsotse sinadarai iri ɗaya." },
      { objective: "O5", q: "Me ciyawar rufe ƙasa (mulch) take yi?", options: ["Tana sa ƙasa ta ƙara zafi da bushewa", "Tana kashe tsutsotsin ƙasa", "Tana maye gurbin dukkan taki", "Tana rage ƙarfin ruwan sama, tana riƙe danshin ƙasa kuma tana ciyar da ita"], answer: 3, why: "Ciyawar rufe ƙasa tana kare ƙasa kuma tana ciyar da ita." },
      { objective: "O5", q: "Hanya mai arha ta rage zaizaya a gangara mara tsanani, wadda kuma za ta iya ciyar da dabbobi, ita ce:", options: ["Layukan ciyawa a kan layin tudu", "Huɗa sama da ƙasa a gangarar", "Ƙona gonar", "Cire dukkan shuke-shuke"], answer: 0, why: "FAO ta bayyana layukan ciyawa a matsayin madadi mai arha ga matakala." },
      { objective: "O5", q: "Me yasa za ku nemi jami'in faɗakarwar noma ya taimaka wajen yin alamar layukan tudu?", options: ["Ba a buƙata kwata-kwata", "Dole a fenti layukan tudu", "Layukan da aka shimfiɗa ba daidai ba suna iya ƙara zaizaya", "Jami'an faɗakarwa ne ke da ƙasar"], answer: 2, why: "Layukan da ba su yi daidai sosai ba suna iya tara ruwa su ƙara zaizaya." },
      { objective: "O6", q: "Wanne BA ya cikin 4R na amfani da takin zamani?", options: ["Nau'in da ya dace", "Yawan da ya dace", "Wurin da ya dace", "Launin da ya dace"], answer: 3, why: "4R su ne nau'i, yawa, lokaci da wuri." },
      { objective: "O6", q: "Daga ina ya kamata yawan takin amfanin gonarku ya fito?", options: ["Hasashe", "Gwajin ƙasarku da shawarar yankinku", "Duk abin da maƙwabcinku ya yi amfani da shi", "Buhu mafi girma a shago"], answer: 1, why: "Yawan taki ya kamata ya dace da ƙasarku da shawarar hukuma." },
      { objective: "O6", q: "Kun tambayi mataimakin AI a waya game da gwajin ƙasarku. Wace ce hanyar da ta dace ta amfani da shi?", options: ["Don ya bayyana rahoton da kalmomi masu sauƙi, sannan ku tabbatar da yawan taki da ɗakin gwaji ko faɗakarwar noma", "Don ya zaɓi yawan taki maimakon ɗakin gwaji", "Don ku aika masa bayanan bankinku", "Don ya maye gurbin gwajin ƙasa"], answer: 0, why: "AI zai iya bayani, amma yawan taki daga ɗakin gwaji, jami'in faɗakarwa ko shawarar hukuma yake." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [0, 1, 3, 5, 7, 10, 12, 14, 17, 18]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe na tsarin ku sake dubawa.",
    criteria: [
      {
        name: "Binciken gona da gwajin ƙasa",
        objective: "O2",
        notYet: "Babu binciken gona, ko babu tsarin gwajin ƙasa.",
        meets: "An rubuta sakamakon binciken gona, da yaushe da kuma inda za a yi gwajin ƙasa, ko abin da gwajin ya ce.",
        exceeds: "Yana amfani da sakamakon gwajin ƙasa don tsara sauran tsarin."
      },
      {
        name: "Taki na halitta",
        objective: "O3",
        notYet: "Ba a ƙara taki na halitta ba, ko an ƙona ragowar amfanin gona.",
        meets: "Tsari na barin ragowar amfanin gona da ƙara takin gargajiya ko ruɓaɓɓen kashi, tare da lokaci.",
        exceeds: "Ya haɗa da tarin takin gargajiya da aka riga aka fara a gonar."
      },
      {
        name: "Jujjuyawa da wake",
        objective: "O4",
        notYet: "Amfanin gona ɗaya kowace damina, ba tare da wake ko dangoginsa ba.",
        meets: "Jujjuyawar damina uku ko shuka tare da wake ko dangoginsa da tazara mai ma'ana.",
        exceeds: "Dukkan jujjuyawa da shuka tare, da barin ragowar amfanin gona a gona."
      },
      {
        name: "Rufi da zaizaya",
        objective: "O5",
        notYet: "An bar ƙasa ba rufi, ko ana aiki sama da ƙasa a gangara.",
        meets: "Ciyawar rufe ƙasa ko rufi, da hanyoyin hana zaizaya a kan layin tudu inda gonar take da gangara.",
        exceeds: "Ya ambaci wanda zai taimaka wajen yin alamar layin tudu da yadda za a kiyaye hanyoyin."
      },
      {
        name: "Takin zamani ta hanyar 4R",
        objective: "O6",
        notYet: "An jera takin zamani ba tare da tushen yawansa, lokaci ko wurin sa ba.",
        meets: "An rubuta nau'i, yawa, lokaci da wuri na kowane taki, da yawan da ya fito daga gwajin ƙasa ko shawarar yankin.",
        exceeds: "Ya haɗa takin zamani da taki na halitta kuma ya rubuta inda yawan ya fito."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka sami \"Ya cika\" ko \"Ya wuce\" a kowane layi na rubric na tsarin ƙasa",
      "Masu koyo da suka ce sun yi gwajin ƙasa, sun fara takin gargajiya ko sun shuka wake ko dangoginsa cikin damina ɗaya (binciken biyo baya)",
      "Canjin girbi ko kuɗin taki da masu koyo ko ƙungiyarsu suka bayar bayan damina ɗaya",
      "Masu koyo da suka fara wani kwas na noma na Koach Learn cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Shebur, bokiti mai tsabta da littafin rubutu",
      "Gona da za a bincika, zai fi kyau ta mai koyo",
      "Waya mai sauƙi don kiran ɗakin gwajin ƙasa ko ofishin faɗakarwar noma",
      "Kusan minti 60 gaba ɗaya, a gajerun zama, da lokaci a gona da na rubuta tsarin ƙasa"
    ],
    facilitatorNotes: [
      "A ƙungiyar manoma ko makarantar gona (field school): ku yi gwajin farko tare, sannan ku yi binciken gona da gwajin irin ƙasa a gona ta gaske.",
      "Ku yi atisayen ɗaukar samfurin haɗi na ƙasa tare, kuma ku nemo ɗakin gwaji mafi kusa da kuɗinsa na yanzu kafin zaman.",
      "Ku gina ƙaramin tarin takin gargajiya a matsayin ƙungiya don nuna matakan.",
      "Kada ku ba da yawan taki da kanku; ku gayyaci jami'in faɗakarwar noma ko ku yi amfani da shawarar yankin.",
      "Ku ba da maki ga tsarin ƙasa da rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
