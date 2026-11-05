"use strict";

// Koach Learn course, Hausa (ha) translation of agriculture-africa/agri-fish-farming.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const FAO_OXYGEN = { name: "FAO (Hukumar Abinci da Noma ta Majalisar Ɗinkin Duniya), Cibiyar Kiwon Kifi ta Yankin Afirka (Kutty, 1987): iskar oxygen a cikin ruwan tafkin kifi", url: "https://www.fao.org/4/AC175E/AC175E04.htm" };
const GHANA_MANUAL = { name: "Littafin manoma kan ƙaramin kiwon kifin tilapia a tafki a Ghana (Agyakwah da wasu, 2020; ma'ajiyar CGIAR)", url: "https://hdl.handle.net/10568/143338" };
const WORLDFISH_NG = { name: "WorldFish: kiwon kifin tilapia na GIFT a Najeriya (wuraren ƙyanƙyasa, girma, kasuwanni), 2025", url: "https://worldfishcenter.org/impact-story/tilapia-farming-more-lucrative-catfish-inside-nigerias-aquaculture-shift" };
const ALR_CI = { name: "Aquatic Living Resources (2001): yawan kifi da yawa a tafki yana rage amfanin tilapia a Côte d'Ivoire", url: "https://www.alr-journal.org/articles/alr/abs/2001/05/alr1120/alr1120.html" };
const GHANA_FC = { name: "Fisheries Commission (Hukumar Kifi ta Ghana): izini da lasisi, har da na kiwon kifi", url: "https://www.fishcom.gov.gh/" };
const KENYA_ACT = { name: "Kenya: Dokar Fisheries Management and Development Act, 2016 (rajista da lasisin kiwon kifi), a FAOLEX", url: "https://faolex.fao.org/docs/pdf/ken160880.pdf" };

module.exports = {
  id: "agri-fish-farming-ha",
  lang: "ha",
  translationOf: "agri-fish-farming",
  category: "Agriculture (Africa)",
  name: "Tushen Kiwon Kifi (Aquaculture)",
  skills: "Zaɓar tilapia ko kifin tarwaɗa, Zaɓar wuri da gina tafki, Duba ingancin ruwa, Saye da zuba 'ya'yan kifi masu inganci, Ciyarwa da canjin abinci zuwa nama, Lissafin kuɗin zagaye ɗaya na kiwo",
  outcome: "tsarawa da gudanar da zagaye ɗaya na kiwon tilapia ko kifin tarwaɗa na Afirka a tafki ko tanki: zaɓar irin kifin da wurin, duba izini, gwada ruwa da kayan aiki masu sauƙi, zuba 'ya'yan kifi masu inganci a yawan da ya dace, ciyarwa da kyau da bin diddigin FCR, magance matsalolin da aka saba gani, da girbi da sayarwa a ribar da kuka lissafa tun farko.",
  about: [
    "Wannan kwas ɗin na sabbin manoman kifi ne da ƙananansu, ma'aikatan gona, matasa 'yan kasuwar noma da jami'an faɗakar da manoma (extension) a Ghana, Najeriya, Kenya, Côte d'Ivoire da sauran Afirka, waɗanda ke son kiwon tilapia ko kifin tarwaɗa na Afirka a tafki ko tanki. Kiwon kifi yana iya kawo kuɗi mai kyau kuma ya ciyar da iyali, amma tafkuna da yawa na farko suna faɗuwa saboda 'ya'yan kifi marasa kyau, ruwa mara kyau, da abincin da ya fi tsada fiye da kuɗin sayar da kifin.",
    "Babi na 1 yana tsara gonar: zaɓar irin kifi, zaɓar wuri da gina tafki ko tanki da duba izini, da kiyaye ingancin ruwa da gwaje-gwaje masu sauƙi. Babi na 2 yana kiwo da sayar da kifin: 'ya'yan kifi masu inganci da yawan zubawa, ciyarwa da FCR tare da matsalolin da aka saba gani, da girbi, sayarwa da lissafin kuɗin zagaye ɗaya.",
    "Dokoki da izinin gonakin kifi sun bambanta daga ƙasa zuwa ƙasa kuma suna canjawa; wannan kwas ɗin yana faɗin hukumomin da za ku tambaya. Ba ya ba da yawan magani ko sinadarai: idan kifi ya yi rashin lafiya, ku kira jami'in faɗakarwar kifi ko likitan dabbobi. Adadin kuɗi misali ne kawai; ku yi amfani da farashin da aka ba ku. Kowane darasi yana ɗaukar kusan minti biyar kuma yana ƙarewa da aiki don gonarku. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku rubuta shirin zagaye ɗaya na tafki (ko tanki) a gonarku tare da lissafin kuɗi, ko na misali kamar tafkin tilapia mai murabba'in mita 300 kusa da Kumasi ko tankunan kifin tarwaɗa kusa da Ibadan: irin kifin da dalili; wurin, majiyar ruwa da izinin da kuka duba; gwaje-gwajen ruwa da sau nawa za ku yi su; adadin 'ya'yan kifi, yawan zubawa da wurin ƙyanƙyasa mai takardar shaida da za ku saya daga gare shi; yawan rayuwa da ake sa rai, nauyin girbi da abincin da ake buƙata ta amfani da FCR da ake sa rai; kowane kuɗin kashewa; kuɗin sayarwa da ake sa rai; riba ko asara; da farashin daidaito (break-even) a kowace kilogram.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Sabbin manoman kifi da ƙananansu, ma'aikatan gona, matasa 'yan kasuwar noma da jami'an faɗakarwa a Ghana, Najeriya, Kenya, Yammacin Afirka masu magana da Faransanci da sauran Afirka, waɗanda ke shirin ko suke gudanar da tafkin ƙasa ɗaya zuwa kaɗan, tafkuna masu leda ko tankuna na tilapia ko kifin tarwaɗa na Afirka.",
    startingPoint: "Sun san cewa ana iya kiwon kifi, kuma wataƙila suna da majiyar ruwa da ɗan fili. Yawancinsu ba su taɓa gwada ruwa ba, suna sayen 'ya'yan kifi daga kowane mai sayarwa, suna ciyarwa bisa tsammani, kuma ba su taɓa lissafin kuɗin zagaye kafin su fara ba.",
    gap: "Abubuwan da suka fi kawo faɗuwa su ne 'ya'yan kifi marasa inganci ko masu jinsi gauraye, cunkoso, faɗuwar oxygen da asuba, yawan ciyarwa, da kuɗin abinci da ya fi kuɗin sayar da kifi. Manoma suna buƙatar tsara zagaye a takarda, kiyaye ruwa lafiya da gwaje-gwaje masu sauƙi, zuba adadin da ya dace na 'ya'yan kifi masu kyau, da bin diddigin abinci tare da girma don su sani kafin girbi ko za su ci riba.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; kwas ɗin yana kuma samuwa da Sifaniyanci, Faransanci da Larabci",
      "Na'urori: waya mai sauƙi ko ta zamani, na'urar lissafi (calculator), da kayan gwaji masu araha (ma'aunin zafi, takardun pH, Secchi disk da aka yi a gida)",
      "Lokaci: darussa na minti 4 zuwa 6 da suka dace da aikin gona",
      "Izini da dokokin irin kifi sun bambanta daga ƙasa zuwa ƙasa; dole masu koyo su tambayi ofishin kifi na ƙasarsu ko na gundumarsu (county)",
      "Babu yawan magani ko sinadarai; kifi mara lafiya a kai shi ga jami'in faɗakarwa ko likitan dabbobi",
      "Adadin kuɗi misali ne; farashin abinci da na kifi sun bambanta sosai daga wuri zuwa wuri da lokaci zuwa lokaci"
    ],
    prerequisites: "Babu. Tunanin \"Farm Records and Gross Margin\" (Bayanan gona da ribar farko) daga kwas ɗin \"Kasuwancin Noma da Sarrafa Gona\" yana taimakawa wajen lissafin kuɗi a Darasi na 6."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku ruwanku, filinku, kuɗinku da kasuwar yankinku", action: "zaɓar tilapia ko kifin tarwaɗa na Afirka da tsarin tafki ko tanki", standard: "kuna ba da aƙalla dalilai uku da suka shafi wurinku da masu sayenku" },
    { id: "O2", condition: "Idan aka ba ku wani wuri da za a iya amfani da shi", action: "duba wurin don ruwa, ƙasa, gangare da ambaliya, da rubuta jerin izinin da za ku tambaya", standard: "kuna faɗin hukumar kifi a ƙasarku da za ku tuntuɓa" },
    { id: "O3", condition: "Da ma'aunin zafi, takardun pH da Secchi disk", action: "gwada ruwan tafki da faɗin abin da za a yi idan oxygen, zafi ko pH ba sa cikin iyakarsu", standard: "kuna rubuta kowane gwaji da rana da lokaci" },
    { id: "O4", condition: "Idan aka ba ku girman tafki ko tanki", action: "lissafa adadin 'ya'yan kifi da za a zuba da rubuta abubuwan dubawa a wurin ƙyanƙyasa mai takardar shaida", standard: "lissafin ya yi daidai, kuma an amince da yawan zubawar tare da jami'in faɗakarwa ko wurin ƙyanƙyasa" },
    { id: "O5", condition: "Idan aka ba ku bayanan ciyarwa da nauyin samfuri", action: "lissafa FCR (ma'aunin canjin abinci zuwa nama) da gano matsalolin da aka saba gani da wuri", standard: "daidai har zuwa wuri ɗaya bayan digo" },
    { id: "O6", condition: "Idan aka ba ku kuɗin kashewa, yawan rayuwa da ake sa rai, nauyin girbi da farashi", action: "rubuta shirin zagaye ɗaya tare da lissafin kuɗi, riba da farashin daidaito", standard: "an saka kowane kuɗin kashewa kuma lissafin ya yi daidai" }
  ],
  chapters: [
    {
      name: "Babi na 1: Tsara gonar kifi",
      lessons: [
        {
          title: "Zaɓar irin kifi da tsarin kiwo",
          objectives: ["O1"],
          minutes: 5,
          goal: "Ku zaɓi tilapia ko kifin tarwaɗa na Afirka da tsarin tafki ko tanki don gonarku.",
          text: [
            "Kifi iri biyu ne aka fi kiwo a Afirka. Tilapia ta Nilu (Nile tilapia) ta shahara a Ghana, Kenya, Côte d'Ivoire da Masar. Tana cin abincin ƙwaya (pellets) da abincin halitta da ke cikin ruwa mai kore, kuma ana sayar da ita ɗanya, soyayya ko gasasshiya. Tilapia masu jinsi gauraye suna haihuwa a tafki su cika shi da ƙananan kifi, don haka manoma suna sayen 'ya'yan kifi masu jinsi ɗaya (mono-sex, yawanci maza). Ingantattun nau'o'i kamar GIFT suna girma da sauri; WorldFish ta ce manoma a Najeriya suna kaiwa kusan g 600 cikin watanni shida da GIFT da ciyarwa mai kyau.",
            "Kifin tarwaɗa na Afirka (Clarias) shi ne babban kifin kiwo a Najeriya, kuma ana son sa ɗanye da busasshe da hayaƙi. Yana iya shaƙar iska, don haka yana jure ƙarancin oxygen fiye da wasu, kuma ana iya ajiye shi da yawa, sau da yawa a tanki. Amma yana buƙatar abinci mai yawan furotin, kuma manyan kifi suna cin ƙanana, don haka kuna rarraba su bisa girma.",
            "Ku zaɓi tsarin: tafkin ƙasa ba shi da tsadar gudanarwa inda ƙasa ke riƙe ruwa; tafki mai leda ko tankin siminti ko na roba yana aiki a ƙasa mai yashi ko ƙaramin fili, amma ginin sa ya fi tsada kuma yana buƙatar canja ruwa sau da yawa. Mafi muhimmanci: kafin ku zaɓa, ku tambayi masu saye wane kifi da wane girma suke so, kuma a wane farashi."
          ],
          steps: ["Ku tambayi masu saye uku (masu sayarwa a kasuwa, otal-otal, masu busar da kifi da hayaƙi) wane kifi, girma da farashi suke so.", "Ku duba ruwanku: yawansa, ko yana nan duk shekara, da tsaftarsa.", "Ku duba ƙasarku: tana riƙe ruwa?", "Ku zaɓi irin kifin da masu saye ke so kuma ruwanku zai iya ɗauka.", "Ku zaɓi tafki ko tanki bisa ƙasa, sarari da kuɗi."],
          words: [["Kiwon kifi (aquaculture)", "kiwon kifi da sauran dabbobin ruwa."], ["'Ya'yan kifi (fingerlings)", "ƙananan kifi, kusan girman yatsa, da ake saye don zubawa a tafki."], ["Jinsi ɗaya (mono-sex)", "'ya'yan kifi da kusan dukansu jinsi ɗaya ne (tilapia maza), don su yi girma maimakon su haihu."], ["GIFT", "Genetically Improved Farmed Tilapia: nau'in tilapia mai saurin girma da WorldFish ta samar."]],
          slides: [
            { title: "Tilapia ta Nilu", bullets: ["Ta shahara a Ghana, Kenya, Côte d'Ivoire", "Tana cin ƙwayar abinci da abincin ruwa mai kore", "Ku sayi masu jinsi ɗaya; GIFT tana girma da sauri"] },
            { title: "Kifin tarwaɗa na Afirka", bullets: ["Babban kifin kiwo a Najeriya; ɗanye ko busasshe da hayaƙi", "Yana shaƙar iska; ana iya ajiye shi da yawa, a tanki", "Yana buƙatar abinci mai furotin; ku rarraba bisa girma"] },
            { title: "Tafki ko tanki", bullets: ["Tafkin ƙasa: mai araha inda ƙasa ke riƙe ruwa", "Tafki mai leda ko tanki: ƙasa mai yashi, ƙaramin fili", "Tanki ya fi tsada kuma yana buƙatar canja ruwa sosai"] },
            { title: "Ku fara da mai saye", bullets: ["Wane kifi? Wane girma? Wane farashi?", "Ku tambayi aƙalla masu saye uku", "Sannan ku zaɓi irin kifi da tsari"] }
          ],
          sources: [WORLDFISH_NG, GHANA_MANUAL],
          tryIt: "Ku tambayi aƙalla masu saye uku kusa da ku wane kifi suke so, a wane girma da farashi. Ku rubuta amsoshinsu, sannan ku zaɓi tilapia ko kifin tarwaɗa da tafki ko tanki, tare da dalilai uku daga wurinku da masu sayenku.",
          youCanNow: "zaɓa tsakanin tilapia da kifin tarwaɗa na Afirka, da tsakanin tafki da tanki, ta amfani da ruwanku, ƙasarku da masu sayenku.",
          quickCheck: [
            { objective: "O1", q: "Me yasa manoman tilapia ke sayen 'ya'yan kifi masu jinsi ɗaya?", options: ["Sun fi araha", "Don kifin ya yi girma maimakon ya haihu ya cika tafki da ƙananan kifi", "Ba sa buƙatar abinci", "Sun fi daɗi"], answer: 1, why: "Tilapia masu jinsi gauraye suna haihuwa a tafki, sai su zama ƙanana marasa girma." },
            { objective: "O1", q: "Ƙasarku mai yashi ce kuma ba ta riƙe ruwa. Wane tsari ya fi dacewa?", options: ["Tafkin ƙasa marar leda", "Ba za a iya kiwon kifi ba", "Tafki a gefen kogi", "Tafki mai leda ko tanki"], answer: 3, why: "Leda ko tanki yana riƙe ruwa inda ƙasa ba za ta riƙe ba." }
          ]
        },
        {
          title: "Zaɓar wuri da gina tafki, da izini",
          objectives: ["O2"],
          minutes: 6,
          goal: "Ku duba wurin tafki kuma ku rubuta jerin izinin da za ku tambaya.",
          text: [
            "Wuri mai kyau na tafki yana da: ruwa duk shekara, mai tsabta wanda masana'antu, ma'adinai ko gonakin da aka fesa wa magani ba su ɓata ba; ƙasa mai isasshen yumɓu da ke riƙe ruwa (ku matse ƙasa mai ɗan danshi a hannu: idan ta riƙe siffarta, alama ce mai kyau); ɗan gangare kaɗan don tafki ya cika kuma ya zube da kansa; babu ambaliya; kuma yana kusa sosai don ku tsare shi daga ɓarayi da dabbobi masu cin kifi.",
            "Ku gina tafkin da katanga (dike) mai ƙarfi mai gangare, da ciyawa a kanta don hana zaizayar ƙasa, mashigar ruwa mai raga don kifin daji kada ya shiga, da mafitar ruwa ko bututun zubewa don ku iya zubar da tafkin lokacin girbi. Tafki mai murabba'in mita ɗari kaɗan yana da sauƙin kulawa ga sabon manomi. Ku kewaye shi da shinge idan za ku iya, kuma ku hana dabbobi da yara kusantar sa. Ku shirya tafkin kafin zubawa: ku busar da shi, ku cire laka da kifin daji, kuma ku saka farar ƙasa (lime) da taki idan jami'in faɗakarwarku ya ba da shawara.",
            "Gonakin kifi sau da yawa suna buƙatar rajista ko izini, wani lokaci kuma izinin amfani da ruwa ko na kare muhalli. A Kenya, dokar Fisheries Management and Development Act, 2016 tana buƙatar a yi rajista da lasisin kiwon kifi a Kenya Fisheries Service (Hukumar Kifi ta Kenya). A Ghana, Fisheries Commission (Hukumar Kifi) ce ke ba da izinin kiwon kifi. A Najeriya, ku tambayi Federal Department of Fisheries and Aquaculture (Sashen Kifi na Tarayya) da ma'aikatar jiharku; a Côte d'Ivoire, ma'aikatar da ke kula da kifi. Wasu wurare suna yarda da wasu nau'o'in kifi kaɗai. Dokoki suna canjawa, don haka ku tambaya kafin ku haƙa."
          ],
          steps: ["Ku duba majiyar ruwa: ta isa duk shekara, kuma tana da tsabta.", "Ku yi gwajin matse ƙasa; ku nemi jami'in faɗakarwa ya tabbatar.", "Ku zaɓi fili mai ɗan gangare sama da inda ambaliya ke kaiwa, kusa da inda za ku iya tsare shi.", "Ku tsara katanga mai ƙarfi, mashigar ruwa mai raga da mafita don zubewa.", "Ku tuntuɓi ofishin kifi: rajista, izini, amfani da ruwa, irin kifin da aka yarda da shi.", "Ku shirya tafkin kafin zubawa, kamar yadda jami'in faɗakarwarku ya ba da shawara."],
          words: [["Katanga (dike)", "bangon ƙasa da ke kewaye da tafki."], ["Mashiga da mafita (inlet da outlet)", "bututu ko hanyoyin da ruwa ke shiga tafki da fita daga gare shi."], ["Izini (permit)", "yarjejeniyar hukuma da kuke buƙata kafin ku fara ko ku gudanar da gona."]],
          slides: [
            { title: "Wuri mai kyau", bullets: ["Ruwa mai tsabta duk shekara", "Ƙasa mai yumɓu da ke riƙe ruwa", "Ɗan gangare; babu ambaliya; mai sauƙin tsarewa"] },
            { title: "Ku gina shi daidai", bullets: ["Katanga mai ƙarfi da ciyawa a kanta", "Mashiga mai raga; mafita don zubewa", "Shinge; ku hana dabbobi da yara kusantar sa"] },
            { title: "Izini: ku fara dubawa", bullets: ["Kenya: rajista da lasisi a Kenya Fisheries Service", "Ghana: izinin kiwon kifi daga Fisheries Commission", "Najeriya da Côte d'Ivoire: ofisoshin kifi na ƙasa da na jiha"] },
            { title: "Kafin ku haƙa", bullets: ["Ku tambayi dokokin amfani da ruwa da na muhalli", "Ku tambayi irin kifin da aka yarda da shi", "Dokoki suna canjawa: ku tambayi ofishin"] }
          ],
          sources: [GHANA_MANUAL, KENYA_ACT, GHANA_FC],
          tryIt: "Ku zagaya wurin da kuke tunani. Ku rubuta majiyar ruwa, sakamakon gwajin matse ƙasa, gangaren, duk wani haɗarin ambaliya da yadda za ku tsare shi. Sannan ku nemo lambar waya ko ofishin hukumar kifinku, ku rubuta tambayoyi uku game da izini da irin kifi.",
          youCanNow: "tantance ko wuri ya dace da tafkin kifi, tsara manyan sassansa, da sanin wane ofishin kifi za ku tambaya game da izini.",
          quickCheck: [
            { objective: "O2", q: "Kun matse ƙasa mai danshi kuma ta riƙe siffarta. Me wannan yake nunawa?", options: ["Ƙasar tana da yumɓu kuma wataƙila za ta riƙe ruwa", "Ƙasar ta yi yashi sosai", "Wurin zai yi ambaliya", "Ruwan ya ɓaci"], answer: 0, why: "Ƙasa mai yumɓu da ke riƙe siffarta yawanci tana riƙe ruwan tafki; ku nemi jami'in faɗakarwa ya tabbatar." },
            { objective: "O2", q: "Kafin ku haƙa tafkin kifi a Ghana, wa za ku tambaya game da izini?", options: ["Banki kaɗai", "Babu kowa; tafkin kifi ba ya buƙatar izini", "Fisheries Commission (Hukumar Kifi)", "Hukumar yaƙi da kwari"], answer: 2, why: "Fisheries Commission ta Ghana ce ke ba da izinin kiwon kifi." }
          ]
        },
        {
          title: "Ingancin ruwa da gwaje-gwaje masu sauƙi",
          objectives: ["O3"],
          minutes: 6,
          goal: "Ku gwada ruwan tafki kuma ku ɗauki mataki idan ya lalace.",
          text: [
            "Kifi a cikin ruwa yake rayuwa, don haka ruwa mara kyau yana kashe shi da sauri. Ku kula da abubuwa uku. Oxygen: a tafki mai kore ya fi yawa da rana (bayan azahar) kuma ya fi ƙaranci da asuba, domin tsirrai da algae (ƙananan tsirran ruwa) suna amfani da oxygen da dare. Ranaku masu gajimare, yawan algae, abincin da ke ruɓewa da taki suna ƙara muni. Wata takardar FAO ta ce tilapia tana rage motsi sosai idan oxygen ya faɗi zuwa kusan mg 1 zuwa 2 a kowace lita. Zafi: tilapia da kifin tarwaɗa kifin ruwa mai ɗumi ne; suna ci kuma suna girma a hankali a ruwan sanyi, kamar a yankunan tudu ko lokacin sanyi. pH (yawan tsamin ruwa): ruwan da ya yi tsami sosai ko ya yi gishirin alkali sosai yana damun kifi.",
            "Gwaje-gwaje masu sauƙi: ma'aunin zafi (thermometer) don zafi; takardun pH ko kayan gwaji; Secchi disk (faranti fari da baƙi a kan sanda mai alamomi) don ganin yadda ruwan ya yi kore; da idanunku da asuba. Kifin da ke haki a saman ruwa da asuba yana nufin oxygen ya yi ƙasa. Idan za ku iya, kayan gwajin oxygen ko na'urar auna shi suna ba da lamba.",
            "Idan oxygen ya yi ƙasa: ku daina ko ku rage ciyarwa har kifin ya warware, ku ƙara ruwa mai tsabta, ku fantsama ko ku harba ruwa don iska ta shiga, kuma ku cire matattun kifi. Idan ruwan ya yi kore sosai, ku rage taki. Idan pH bai yi daidai ba, ku tambayi jami'in faɗakarwarku game da saka farar ƙasa (lime). Ku rubuta kowane gwaji da rana da lokaci."
          ],
          steps: ["Ku duba tafkin da asuba: kifi suna haki a saman ruwa?", "Ku auna zafin ruwa da ma'aunin zafi.", "Ku gwada pH da takardu ko kayan gwaji sau ɗaya a mako.", "Ku tura Secchi disk ƙasa har ya ɓace; ku rubuta zurfin.", "Oxygen ya yi ƙasa: ku daina ciyarwa, ku ƙara ruwa mai tsabta, ku fantsama ko ku saka iska, ku cire matattun kifi.", "Ku rubuta kowane sakamako da rana da lokaci."],
          words: [["Oxygen a cikin ruwa (dissolved oxygen)", "oxygen da ke gauraye a ruwa, wanda kifi ke shaƙa ta hanyar kunnensa (gills)."], ["pH", "lamba da ke nuna yadda ruwa ya yi tsami ko ya yi alkali."], ["Secchi disk", "faranti baƙi da fari da ake tsoma a ruwa don ganin yadda ya yi tsabta ko kore."], ["Saka iska (aeration)", "gauraya iska cikin ruwa, da famfo, filafili ko ta fantsamawa."]],
          slides: [
            { title: "Oxygen", bullets: ["Ya fi yawa bayan azahar, ya fi ƙaranci da asuba", "Ya fi muni a ranar gajimare, da abinci mai ruɓewa", "Tilapia tana rage motsi kusa da mg 1 zuwa 2 a lita"] },
            { title: "Zafi da pH", bullets: ["Ruwa mai ɗumi: girma da sauri; mai sanyi: a hankali", "Tsami ko alkali da yawa yana damun kifi", "Ku tambayi jami'in faɗakarwa game da farar ƙasa"] },
            { title: "Gwaje-gwaje masu sauƙi", bullets: ["Ma'aunin zafi; takardun pH", "Secchi disk: yaya ruwan ya yi kore?", "Dubawa da asuba: kifi na haki = oxygen ya yi ƙasa"] },
            { title: "Oxygen ya yi ƙasa: ku yi aiki yanzu", bullets: ["Ku daina ko ku rage ciyarwa", "Ku ƙara ruwa mai tsabta; ku fantsama ko ku saka iska", "Ku cire matattun kifi; ku rubuta"] }
          ],
          sources: [FAO_OXYGEN, GHANA_MANUAL],
          tryIt: "Ku yi Secchi disk daga farin faranti da aka shafa wa kashi biyu cikin huɗu baƙin fenti, a ɗaure shi da sanda mai alama a kowace cm 5. Sannan ku yi takardar rubuta gwajin ruwa mai layukan rana, lokaci, zafi, pH, zurfin Secchi, halin kifi da matakin da aka ɗauka, ku cike layi ɗaya daga tafki ko majiyar ruwa kusa da ku.",
          youCanNow: "duba oxygen, zafi, pH da yawan kore na ruwa da kayan aiki masu sauƙi, da ɗaukar mataki da sauri idan ruwan ya lalace.",
          quickCheck: [
            { objective: "O3", q: "Yaushe oxygen ya fi ƙaranci a tafkin kifi mai kore?", options: ["Da tsakar rana", "Bayan azahar", "Da asuba", "Ba ya canjawa"], answer: 2, why: "Da dare tsirrai da algae suna amfani da oxygen ba sa samar da shi, don haka yana raguwa har zuwa asuba." },
            { objective: "O3", q: "Da asuba kun ga kifi suna haki a saman ruwa. Me za ku fara yi?", options: ["Ku ƙara musu abinci", "Ku daina ciyarwa, ku ƙara ruwa mai tsabta, ku fantsama ko ku saka iska", "Ku saka taki", "Ku jira sai gobe"], answer: 1, why: "Haki yana nufin oxygen ya yi ƙasa; rage abinci da ƙara ruwa mai tsabta da aka gauraya suna dawo da shi." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Tsara gonar kifi",
        questions: [
          { objective: "O1", q: "Wanne gaskiya ne game da kifin tarwaɗa na Afirka?", options: ["Yana iya shaƙar iska kuma yana jure ƙarancin oxygen fiye da wasu", "Ciyawa kaɗai yake ci", "Yana haihuwa ya cika tafki kamar tilapia masu jinsi gauraye", "Ba za a iya kiwon sa a tanki ba"], answer: 0, why: "Kifin tarwaɗa yana da wata gaɓa ta shaƙar iska, don haka yana jure ƙarancin oxygen da tanki." },
          { objective: "O1", q: "Me ya kamata ku fara ganowa kafin ku zaɓi kifi?", options: ["Launin kifin", "Abin da ɗan uwanku ke kiwo", "Kifi mafi girma da ake iya samu", "Wane kifi, girma da farashi masu sayenku ke so"], answer: 3, why: "Kifin da ba za ku iya sayarwa a farashi mai kyau ba asara ne, ko da ya yi girma sosai." },
          { objective: "O2", q: "Me yasa tafki yake buƙatar mafita ko hanyar zubewa?", options: ["Don kifin daji ya shiga", "Don ku iya zubar da shi lokacin girbi da tsaftacewa", "Don ruwan ya yi ɗumi", "Ba ya buƙatar sa"], answer: 1, why: "Zubar da ruwa yana sauƙaƙa girbi da shirya tafki." },
          { objective: "O2", q: "A Kenya, dole a yi rajista da lasisin kiwon kifi a:", options: ["Kenya Dairy Board (Hukumar Nono)", "Kenya Wildlife Service (Hukumar Namun Daji)", "Kenya Fisheries Service (Hukumar Kifi)", "Ofishin hanyoyi na gunduma"], answer: 2, why: "Dokar Fisheries Management and Development Act, 2016 tana buƙatar rajista da lasisi a Kenya Fisheries Service." },
          { objective: "O3", q: "Me Secchi disk yake nunawa?", options: ["Yadda ruwan ya yi kore ko tsabta", "Nauyin kifin", "pH na tafkin", "Oxygen a mg a kowace lita"], answer: 0, why: "Zurfin da faranti ke ɓacewa yana nuna yawan algae a ruwan." }
        ]
      }
    },
    {
      name: "Babi na 2: Kiwo da sayar da kifi",
      lessons: [
        {
          title: "'Ya'yan kifi masu inganci da yawan zubawa",
          objectives: ["O4"],
          minutes: 5,
          goal: "Ku lissafa adadin 'ya'yan kifi da za ku zuba kuma ku duba wurin ƙyanƙyasa.",
          text: [
            "'Ya'yan kifi masu kyau rabin nasara ne. Ku saya daga wurin ƙyanƙyasa (hatchery) da hukumar kifinku ta yi wa rajista ko ta ba shi takardar shaida, ko wanda jami'in faɗakarwarku ya ba da shawara. Ku tambaya: Tilapia ɗin jinsi ɗaya ne, kuma wane nau'i ne? Dukan 'ya'yan kifin kusan girmansu ɗaya ne? Nawa ke mutuwa a makonnin farko, kuma suna maye gurbinsu? Za ku iya ganin wurin ƙyanƙyasar? 'Ya'yan kifi masu lafiya suna iyo da ƙarfi, ba su da raunuka, kuma girmansu ɗaya ne. Kifin da aka kamo daga daji ko masu girma daban-daban suna kawo cuta, haihuwa da cin junansu.",
            "Yawan zubawa (stocking density) shi ne adadin kifi a kowane murabba'in mita (tafki) ko kowane mita mai siffar kube (tanki). Kifi da yawa yana nufin ƙarancin oxygen, girma a hankali da ƙananan kifi. Wani bincike kan tafkunan tilapia a Côte d'Ivoire da aka ciyar da taki kaɗai ya gano cewa kifi 2 zuwa 3 a kowane murabba'in mita sun riga sun rage amfani. Da abincin ƙwaya mai kyau, ana iya zuba kifi fiye da haka, kuma tankuna masu gudanar ruwa ko saka iska fiye da haka kuma, musamman ga kifin tarwaɗa. Ku amince da yawan zubawarku tare da jami'in faɗakarwarku ko wurin ƙyanƙyasa don tsarinku.",
            "Misali (adadin misali ne kawai): tafki mai m 20 da m 15 yana da murabba'in mita 300. A yawan misali na kifi 3 a kowane murabba'in mita, kuna zuba 'ya'yan kifi 900. Ku ɗauki 'ya'yan kifin lokacin sanyin safe, a cikin jakunkuna masu oxygen ko ruwa mai tsabta, kuma ku bar jakunkunan su yi iyo a tafkin na ɗan lokaci don zafin ruwa ya yi daidai kafin ku sake su."
          ],
          steps: ["Ku auna tafkin: tsawo x faɗi = faɗin wuri a murabba'in mita.", "Ku amince da yawan zubawa tare da jami'in faɗakarwarku ko wurin ƙyanƙyasa.", "Faɗin wuri x yawan zubawa = adadin 'ya'yan kifi.", "Ku zaɓi wurin ƙyanƙyasa mai rajista ko wanda aka ba da shawara; ku tambayi nau'i, jinsi ɗaya, girma da asara.", "Ku duba 'ya'yan kifin: masu ƙarfi, babu raunuka, girma ɗaya.", "Ku ɗauke su lokacin sanyin safe; ku bar jakunkuna su yi iyo don zafi ya yi daidai kafin sakewa."],
          words: [["Yawan zubawa (stocking density)", "adadin kifi a kowane murabba'in mita na tafki, ko kowane mita mai siffar kube na ruwan tanki."], ["Wurin ƙyanƙyasa (hatchery)", "gonar da ke haifar da kifi da kiwon ƙananansu don sayarwa."], ["Cin junansu (cannibalism)", "kifi na cin wasu kifin irinsu, abin da ya zama ruwan dare ga kifin tarwaɗa masu girma daban-daban."]],
          slides: [
            { title: "'Ya'yan kifi masu kyau", bullets: ["Wurin ƙyanƙyasa mai rajista ko wanda aka ba da shawara", "Tilapia: jinsi ɗaya, nau'in da aka sani", "Masu ƙarfi, babu raunuka, girma ɗaya"] },
            { title: "Yawan zubawa yana da muhimmanci", bullets: ["Da yawa: ƙarancin oxygen, girma a hankali, ƙananan kifi", "Binciken Côte d'Ivoire: 2-3 a m2 sun yi yawa da taki kaɗai", "Ku amince da yawan tare da jami'in faɗakarwa ko wurin ƙyanƙyasa"] },
            { title: "Lissafin misali", bullets: ["m 20 x m 15 = m2 300", "m2 300 x kifi 3 a m2 = 'ya'yan kifi 900", "Adadin misali ne kawai"] },
            { title: "Ranar zubawa", bullets: ["Sanyin safe", "Jakunkuna masu oxygen ko ruwa mai tsabta", "Ku bar jakunkuna su yi iyo don zafi ya yi daidai"] }
          ],
          sources: [ALR_CI, WORLDFISH_NG, GHANA_MANUAL],
          tryIt: "Ku auna tafkinku ko tankinku (ko ku yi amfani da m 20 da m 15). Ku tambayi jami'in faɗakarwa ko wurin ƙyanƙyasa yawan zubawa don tsarinku, ku lissafa adadin 'ya'yan kifin da za ku saya. Sannan ku rubuta tambayoyi biyar da za ku yi wa wurin ƙyanƙyasa kafin ku biya.",
          youCanNow: "lissafa adadin 'ya'yan kifi don tafki da zaɓar wurin ƙyanƙyasa da ke sayar da kifi masu inganci.",
          quickCheck: [
            { objective: "O4", q: "Tafki m 25 ne da m 10, kuma yawan zubawar da aka amince da shi kifi 2 ne a kowane murabba'in mita. 'Ya'yan kifi nawa?", options: ["250", "350", "500", "700"], answer: 2, why: "25 x 10 = murabba'in mita 250, kuma 250 x 2 = 'ya'yan kifi 500." },
            { objective: "O4", q: "Wane rukunin 'ya'yan kifin tarwaɗa ya kamata ku ƙi?", options: ["Kifi masu ƙarfi, girmansu ɗaya", "Kifi daga wurin ƙyanƙyasa mai rajista", "Kifi marasa raunuka", "Kifi masu girma daban-daban sosai"], answer: 3, why: "Girma daban-daban yana kawo cin junansu, domin manyan kifin tarwaɗa suna cin ƙanana." }
          ]
        },
        {
          title: "Ciyarwa, FCR da matsalolin da aka saba gani",
          objectives: ["O5"],
          minutes: 6,
          goal: "Ku lissafa FCR (ma'aunin canjin abinci zuwa nama) kuma ku gano matsaloli da wuri.",
          text: [
            "Abinci yawanci shi ne kuɗin kashewa mafi girma a kiwon kifi. Ku yi amfani da abinci mai inganci mai girman ƙwaya da ya dace da bakin kifin; ƙwayoyin da ke iyo a saman ruwa suna bar ku ga yawan da aka ci. Ku ciyar a lokuta iri ɗaya kowace rana, kuma ku ba da abin da kifin za su cinye cikin 'yan mintuna kaɗai; abincin da ba a ci ba yana ruɓewa kuma yana cinye oxygen. Yawan abinci yana ƙaruwa yayin da kifi ke girma: kowane mako biyu zuwa huɗu, ku kama ku auna samfurin kifi da raga, ku lissafa matsakaicin nauyi, sannan ku daidaita abinci da jadawalin mai yin abincin ko na jami'in faɗakarwa. Ku ajiye abinci a wuri mai bushe, ba a kan ƙasa ba; abinci mai fumfuna guba ne.",
            "FCR (feed conversion ratio, ma'aunin canjin abinci zuwa nama) yana nuna yadda abinci ke zama kifi: FCR = abincin da aka bayar / nauyin da aka ƙara. Misali: kun ciyar da kg 400 kuma kifin sun ƙara kg 250, don haka FCR = 400 / 250 = 1.6. FCR mai ƙasa yana nufin ƙarancin abinci a kowace kg ta kifi. FCR yana hawa da yawan ciyarwa, abinci mara kyau, ruwa mara kyau da kifi marasa lafiya.",
            "Matsalolin da aka saba gani: ƙarancin oxygen da asuba; dabbobi masu cin kifi kamar tsuntsaye, macizai da karnukan ruwa (otters), da ɓarayi; tilapia na haihuwa idan 'ya'yan kifin jinsi gauraye ne; kifin tarwaɗa na cin junansu idan girmansu ya bambanta (ku rarraba su); ambaliya da ke kwashe kifi; da cuta. Alamun kifi mara lafiya su ne rashin ci, gyambo, iyo ba yadda aka saba ba, ko mutuwar kifi da yawa. Ku cire matattun kifi, ku daina ciyarwa, ku duba ruwa, kuma ku kira jami'in faɗakarwar kifinku ko likitan dabbobi; kada ku yi amfani da magani ko sinadarai ba tare da shawararsu ba."
          ],
          steps: ["Ku ciyar da abinci mai inganci mai girman da ya dace a lokuta ƙayyadaddu.", "Ku ba da abin da kifin za su cinye cikin 'yan mintuna kaɗai.", "Kowane mako 2 zuwa 4, ku auna samfuri ku daidaita abinci da jadawali.", "Ku rubuta duk abincin da aka bayar.", "FCR = abincin da aka bayar / nauyin da aka ƙara.", "Ku kula kowace rana da matsaloli; ku kira jami'in faɗakarwa ko likitan dabbobi don kifi mara lafiya."],
          words: [["FCR (feed conversion ratio)", "kilogram na abincin da aka yi amfani da shi don kiwon kilogram ɗaya na kifi."], ["Auna samfuri (sample weighing)", "kama wasu kifi da raga a auna su don samun matsakaicin nauyinsu."], ["Dabba mai cin kifi (predator)", "dabbar da ke cin kifi, kamar wasu tsuntsaye, macizai da karnukan ruwa."]],
          slides: [
            { title: "Ku ciyar da kyau", bullets: ["Abinci mai kyau, girman ƙwaya da ya dace", "Lokuta ƙayyadaddu; abin da za su cinye cikin mintuna", "Ku auna samfuri kowane mako 2 zuwa 4"] },
            { title: "FCR: canjin abinci zuwa nama", bullets: ["FCR = abincin da aka bayar / nauyin da aka ƙara", "Abinci kg 400 / ƙari kg 250 = 1.6", "Mai ƙasa ya fi kyau"] },
            { title: "Matsalolin da aka saba gani", bullets: ["Ƙarancin oxygen; dabbobi masu cin kifi da ɓarayi", "Tilapia na haihuwa; kifin tarwaɗa na cin junansu", "Ambaliya; cuta"] },
            { title: "Kifi mara lafiya", bullets: ["Ba sa ci, gyambo, iyo ba yadda aka saba ba, mutuwa", "Ku cire matattu; ku daina ciyarwa; ku duba ruwa", "Ku kira jami'in faɗakarwa ko likitan dabbobi; babu magani ba tare da shawara ba"] }
          ],
          sources: [GHANA_MANUAL, FAO_OXYGEN],
          tryIt: "Ku yi takardar rubuta ciyarwa mai layukan rana, abincin da aka bayar (kg), matsakaicin nauyin samfuri da bayanai. Sannan ku lissafa FCR na wannan misalin: an ba da abinci kg 300, kifin sun ƙara kg 200. Ku rubuta hanya ɗaya ta rage shi.",
          youCanNow: "ciyar da kifi da kyau, lissafa FCR da gano matsalolin da aka saba gani da wuri.",
          quickCheck: [
            { objective: "O5", q: "Kun ciyar da abinci kg 450 kuma kifin sun ƙara kg 300. Nawa ne FCR?", options: ["0.7", "1.2", "1.5", "2.0"], answer: 2, why: "450 raba 300 = 1.5." },
            { objective: "O5", q: "Me yasa za ku ba da abin da kifi za su cinye cikin 'yan mintuna kaɗai?", options: ["Abincin da ba a ci ba yana ruɓewa, yana cinye oxygen kuma yana ɓata kuɗi", "Kifi ba sa son abinci", "Abinci kyauta ne", "Yana sa ruwan ya yi tsabta don iyo"], answer: 0, why: "Abincin da ba a ci ba ɓatar kuɗi ne kuma yana ɓata ruwa." }
          ]
        },
        {
          title: "Girbi, sayarwa da lissafin kuɗin zagaye ɗaya",
          objectives: ["O6"],
          minutes: 6,
          goal: "Ku rubuta shirin zagaye ɗaya tare da lissafin kuɗi, riba da farashin daidaito.",
          text: [
            "Ku tsara sayarwa kafin ku zuba kifi. Ku amince da masu saye kan girma, rana da farashi, kuma ku girbe lokacin sanyin safe. Ku daina ciyarwa kwana ɗaya kafin girbi don kifin su jure tafiya. Ku zubar da wani ɓangare na ruwan tafkin ku kama kifin da raga, ko ku zubar da shi gaba ɗaya don cikakken girbi. Ku ajiye kifin a sanyi da tsabta a kan ƙanƙara ko a inuwa, kuma ku sayar da sauri: ɗanyen kifi yana lalacewa cikin sa'o'i a zafi. Busarwa da hayaƙi ko a rana, abin da aka saba da kifin tarwaɗa a Najeriya, yana ƙara daraja da lokacin sayarwa. Girbin wani ɓangare na manyan kifi yana iya raba sayarwa cikin makonni da yawa.",
            "Ku fara lissafin kuɗin zagaye ɗaya a takarda. Misali na tafkin tilapia mai murabba'in mita 300 a Ghana (duk adadin misali ne kawai; ku yi amfani da farashin da aka ba ku): 'ya'yan kifi 900 a GHS 1.50 = GHS 1,350; abinci: girbin da ake sa rai kifi 720 (rayuwa 80%) x kg 0.35 = kg 252, kuma a FCR da ake sa rai na 1.6 hakan yana buƙatar kusan kg 400 na abinci a GHS 12 = GHS 4,800; shirya tafki GHS 300; aiki da tsaro GHS 1,200; girbi da sufuri GHS 300. Jimillar kuɗin kashewa GHS 7,950.",
            "Sayarwa: kg 252 a GHS 40 a kowace kg = GHS 10,080. Riba = 10,080 - 7,950 = GHS 2,130. Farashin daidaito = jimillar kuɗin kashewa / kg da aka girbe = 7,950 / 252 = kusan GHS 31.50 a kowace kg. Idan farashin mai saye ya kusa da farashin daidaitonku, ku canja shirin: 'ya'yan kifi mafi kyau, rage ɓatar abinci, ko mai saye mafi kyau."
          ],
          steps: ["Ku amince da masu saye kan girma, rana da farashi kafin zubawa.", "Ku rubuta kowane kuɗin kashewa: 'ya'yan kifi, abinci, shirya tafki, aiki, tsaro, girbi, sufuri.", "Girbin da ake sa rai = 'ya'yan kifi x yawan rayuwa x nauyin girbi.", "Abincin da ake buƙata = nauyin da aka ƙara x FCR da ake sa rai.", "Riba = kuɗin sayarwa - jimillar kuɗin kashewa.", "Farashin daidaito = jimillar kuɗin kashewa / kg da aka girbe."],
          words: [["Yawan rayuwa (survival rate)", "kason kifin da aka zuba da ke raye har lokacin girbi."], ["Farashin daidaito (break-even price)", "farashin kowace kg da kuɗin sayarwa ke rufe duk kuɗin kashewa daidai."], ["Girbin wani ɓangare (partial harvest)", "fitar da manyan kifi da barin sauran su ci gaba da girma."]],
          slides: [
            { title: "Girbi da sayarwa", bullets: ["An fara amincewa da mai saye, girma, rana da farashi", "Sanyin safe; ku daina ciyarwa kwana ɗaya kafin", "Ƙanƙara ko inuwa; ku sayar da sauri, ko ku busar"] },
            { title: "Kuɗin kashewa na misali (GHS)", bullets: ["'Ya'yan kifi 1,350; abinci 4,800", "Shirya tafki 300; aiki, tsaro 1,200; girbi 300", "Jimilla 7,950. Misali ne kawai"] },
            { title: "Sakamakon misali", bullets: ["Kifi 720 x kg 0.35 = kg 252", "kg 252 x GHS 40 = GHS 10,080", "Riba kusan GHS 2,130"] },
            { title: "Farashin daidaito", bullets: ["Jimillar kuɗin kashewa / kg da aka girbe", "7,950 / 252 = kusan GHS 31.50 a kowace kg", "Ya kusa da daidaito? Ku canja shirin"] }
          ],
          sources: [GHANA_MANUAL, WORLDFISH_NG],
          tryIt: "Aikin ƙarshe: ku rubuta shirin zagaye ɗaya na tafkinku ko tankinku (ko na misalin) tare da lissafin kuɗi: irin kifi, wuri da izinin da aka duba, gwaje-gwajen ruwa, 'ya'yan kifi da wurin ƙyanƙyasa, yawan rayuwa da ake sa rai, nauyin girbi da abinci, kowane kuɗin kashewa, kuɗin sayarwa da ake sa rai, riba da farashin daidaito a kowace kg.",
          youCanNow: "tsara girbi da sayarwa, da lissafa riba da farashin daidaito na zagaye ɗaya na kiwon kifi.",
          quickCheck: [
            { objective: "O6", q: "Jimillar kuɗin kashewa NGN 900,000 ne kuma kuna sa ran girbe kg 600 na kifin tarwaɗa. Nawa ne farashin daidaito?", options: ["NGN 600 a kowace kg", "NGN 1,000 a kowace kg", "NGN 1,200 a kowace kg", "NGN 1,500 a kowace kg"], answer: 3, why: "900,000 raba 600 = 1,500 a kowace kg." },
            { objective: "O6", q: "Yaushe ya kamata ku amince da masu saye kan sayarwa?", options: ["Bayan girbi, idan kifin suna kan ƙanƙara", "Kafin zubawa, kuma ku tabbatar kafin girbi", "Ba sai an yi ba; ku sayar a gefen hanya", "Sai idan kifi sun rage"], answer: 1, why: "Ɗanyen kifi yana lalacewa da sauri; mai saye da aka amince da shi da wuri yana hana sayarwa da araha ta tilas." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Kiwo da sayar da kifi",
        questions: [
          { objective: "O4", q: "A ina ya kamata ku sayi 'ya'yan kifi?", options: ["Daga wurin ƙyanƙyasa mai rajista ko wanda aka ba da shawara", "Daga kogi kusa da ku", "Daga duk wanda ya fi araha", "Daga kowane mai sayarwa da ya wuce"], answer: 0, why: "Wuraren ƙyanƙyasa masu rajista ko waɗanda aka ba da shawara suna ba da nau'in da aka sani, tilapia masu jinsi ɗaya da kifi masu lafiya." },
          { objective: "O4", q: "Tafki m 30 da m 10 a kifi 2 a kowane murabba'in mita yana buƙatar 'ya'yan kifi nawa?", options: ["300", "400", "500", "600"], answer: 3, why: "30 x 10 = murabba'in mita 300, kuma 300 x 2 = 600." },
          { objective: "O5", q: "Kifi ba sa ci, suna da gyambo kuma wasu suna mutuwa. Me za ku yi?", options: ["Ku ƙara musu abinci", "Ku sayi magani a kasuwa ku saka", "Ku cire matattun kifi, ku daina ciyarwa, ku duba ruwa, ku kira jami'in faɗakarwa ko likitan dabbobi", "Ku ƙara 'ya'yan kifi"], answer: 2, why: "Kifi mara lafiya yana buƙatar shawarar jami'i ko likitan dabbobi; magani ba tare da shawara ba yana iya cutar da kifi da masu saye." },
          { objective: "O5", q: "FCR da ke raguwa a lokacin zagaye yawanci yana nufin:", options: ["Ana ɓata abinci", "Abinci yana zama kifi da kyau fiye da da", "Kifin ba su da lafiya", "Tafkin ya yi kore sosai"], answer: 1, why: "Ƙarancin abinci a kowace kg ta ƙari yana nufin canjin abinci ya inganta." },
          { objective: "O6", q: "Kuɗin sayarwa GHS 12,000 ne kuma jimillar kuɗin kashewa GHS 9,500. Nawa ne riba?", options: ["GHS 1,500", "GHS 2,000", "GHS 2,500", "GHS 21,500"], answer: 2, why: "12,000 cire 9,500 = 2,500." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Tushen Kiwon Kifi (Aquaculture)",
    questions: [
      { objective: "O1", q: "Wane kifi ne babban kifin kiwo a Najeriya?", options: ["Kifin tarwaɗa na Afirka", "Salmon", "Trout", "Carp"], answer: 0, why: "Kifin tarwaɗa na Afirka shi ne babban kifin kiwo a Najeriya, ana sayar da shi ɗanye da busasshe da hayaƙi." },
      { objective: "O1", q: "Tilapia masu jinsi gauraye a tafki yawanci suna kawo:", options: ["Manyan kifi", "Sayarwa da sauri", "Ƙananan kifi masu yawa marasa girma saboda haihuwa", "Rage buƙatar abinci"], answer: 2, why: "Tilapia suna haihuwa a tafki su cika shi da ƙananan kifi." },
      { objective: "O1", q: "Mene ne tilapia ta GIFT?", options: ["Kyauta daga masu saye", "Cutar kifi", "Tsarin gina tafki", "Ingantaccen nau'in tilapia mai saurin girma daga WorldFish"], answer: 3, why: "GIFT na nufin Genetically Improved Farmed Tilapia (tilapia ta kiwo da aka inganta halittarta)." },
      { objective: "O2", q: "Wane wuri ne ya fi kyau don tafkin ƙasa?", options: ["Ƙasa mai yashi a filin ambaliyar kogi", "Ƙasa mai yumɓu a ɗan gangare sama da ambaliya, da ruwa mai tsabta duk shekara", "Kan tudu mai duwatsu babu ruwa", "Kusa da mafitar ruwan ma'adinai"], answer: 1, why: "Yumɓu yana riƙe ruwa, gangare yana bar ku cika da zubar da tafki, kuma ruwa mai tsabta yana kiyaye kifi a raye." },
      { objective: "O2", q: "Me yasa ake saka raga a mashigar ruwan tafki?", options: ["Don hana kifin daji da dabbobi masu cin kifi shiga", "Don ɗumama ruwa", "Don ciyar da kifi", "Don rage saurin girbi"], answer: 0, why: "Kifin daji suna gasa wajen abinci, suna kawo cuta kuma suna cin 'ya'yan kifi." },
      { objective: "O2", q: "Kafin ku gina tafkin kifi, ya kamata ku:", options: ["Fara haƙa ku tambaya daga baya", "Tambayi maƙwabtanku kaɗai", "Tambayi ofishin kifi na ƙasarku ko gundumarku game da izini da irin kifin da aka yarda da shi", "Ɗauka cewa babu doka"], answer: 2, why: "Ƙasashe da yawa suna buƙatar rajista ko izini, wasu kuma suna iyakance irin kifi." },
      { objective: "O3", q: "Me ke ƙara munin ƙarancin oxygen da asuba?", options: ["Ranaku masu rana da ƙarancin algae", "Ranaku masu gajimare, yawan algae da abinci mai ruɓewa", "Ruwa mai tsabta sabo", "Ƙarancin kifi"], answer: 1, why: "Waɗannan suna rage samar da oxygen ko suna cinye shi da dare." },
      { objective: "O3", q: "Tilapia da kifin tarwaɗa suna girma a hankali idan ruwan:", options: ["Yana da sanyi", "Yana da ɗumi", "Yana da tsabta", "Yana da kore"], answer: 0, why: "Dukansu kifin ruwa mai ɗumi ne; ruwan sanyi yana rage ci da girma." },
      { objective: "O3", q: "Wane kayan aiki ne ke auna yawan tsamin ruwan tafki?", options: ["Secchi disk", "Ma'aunin zafi", "Ragar kamun kifi", "Takardun pH ko kayan gwajin pH"], answer: 3, why: "Takardun pH ko kayan gwaji suna nuna yadda ruwa ya yi tsami ko alkali." },
      { objective: "O3", q: "Idan oxygen ya yi ƙasa, wane mataki ne BA DAIDAI BA?", options: ["Ƙara ruwa mai tsabta", "Fantsama ko saka iska a ruwa", "Ciyarwa fiye da yadda aka saba", "Cire matattun kifi"], answer: 2, why: "Ƙarin abinci yana ruɓewa kuma yana ƙara cinye oxygen." },
      { objective: "O4", q: "Yawan zubawa yana nufin:", options: ["Nauyin abinci a kowace rana", "Adadin kifi a kowane murabba'in mita ko mita mai siffar kube", "Zurfin tafki", "Farashin kowane ɗan kifi"], answer: 1, why: "Yawan zubawa shi ne kifi nawa ke raba kowane sashe na sarari." },
      { objective: "O4", q: "Tafki mai murabba'in mita 400 a kifi 2.5 a kowane murabba'in mita yana buƙatar:", options: ["'Ya'yan kifi 600", "'Ya'yan kifi 800", "'Ya'yan kifi 1,000", "'Ya'yan kifi 1,600"], answer: 2, why: "400 x 2.5 = 1,000." },
      { objective: "O4", q: "Me yasa ake barin jakunkunan 'ya'yan kifi su yi iyo a tafki kafin a sake su?", options: ["Don zafin ruwa ya yi daidai", "Don a ƙirga kifin", "Don a ciyar da su", "Don a tsaftace jakunkunan"], answer: 0, why: "Canjin zafi kwatsam yana girgiza 'ya'yan kifi kuma yana iya kashe su." },
      { objective: "O5", q: "Ana lissafa FCR kamar haka:", options: ["Kifin da aka sayar / kifin da aka zuba", "Farashi / kuɗin kashewa", "Faɗin tafki x yawan zubawa", "Abincin da aka bayar / nauyin da aka ƙara"], answer: 3, why: "Yana nuna kg nawa na abinci ke yin kg ɗaya na kifi." },
      { objective: "O5", q: "Kun ciyar da kg 600 kuma kifin sun ƙara kg 400. FCR?", options: ["1.5", "0.7", "2.4", "1.0"], answer: 0, why: "600 raba 400 = 1.5." },
      { objective: "O5", q: "Sau nawa ya kamata ku auna samfurin kifi don daidaita ciyarwa?", options: ["Ba sai an yi ba", "Lokacin girbi kaɗai", "Kowane mako 2 zuwa 4", "Kowace sa'a"], answer: 2, why: "Auna samfuri akai-akai yana nuna girma don abinci ya bi shi." },
      { objective: "O5", q: "Kifin tarwaɗa masu girma daban-daban sosai a tafki ɗaya suna iya kawo:", options: ["Girma da sauri ga dukansu", "Cin junansu", "Ruwa mai tsabta", "Rage kuɗin abinci"], answer: 1, why: "Manyan kifin tarwaɗa suna cin ƙanana, don haka manoma suna rarraba su bisa girma." },
      { objective: "O6", q: "Ana samun nauyin girbin da ake sa rai ta hanyar:", options: ["Abinci x farashi", "Faɗin tafki x zurfi", "'Ya'yan kifi x yawan rayuwa x nauyin girbi", "Kuɗin kashewa / farashi"], answer: 2, why: "Kifin da suka rayu kaɗai ake ƙirgawa, a nauyin da ake sa rai." },
      { objective: "O6", q: "Farashin daidaito a kowace kg shi ne:", options: ["Farashin kasuwa mafi girma", "Jimillar kuɗin kashewa / kg da aka girbe", "Kuɗin abinci kaɗai", "Farashin ɗan kifi"], answer: 1, why: "A wannan farashin, kuɗin sayarwa yana rufe kowane kuɗin kashewa daidai." },
      { objective: "O6", q: "Wanne ne yawanci kuɗin kashewa mafi girma a zagayen kifi?", options: ["Raga", "Allon sunan tafki", "Gwajin ruwa", "Abinci"], answer: 3, why: "Abinci yawanci yana ɗaukar kaso mafi girma na kuɗin kashewa, don haka FCR yana da muhimmanci." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [1, 3, 5, 6, 9, 10, 12, 13, 17, 18] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Irin kifi da wuri", objective: "O1", notYet: "Ba a ba da dalilin zaɓar irin kifin ba, ko ba a tambayi mai saye ba.", meets: "An zaɓi irin kifi da tsari tare da dalilai uku daga wurin da masu saye.", exceeds: "Ya faɗi sunayen masu saye, girman da suke so da farashin da suka faɗa." },
      { name: "Wuri da izini", objective: "O2", notYet: "Ba a duba wurin ba ko ba a faɗi hukumar kifi ba.", meets: "An duba ruwa, ƙasa, gangare da ambaliya; an rubuta hukumar kifi da tambayoyin izini.", exceeds: "Ya riga ya tuntuɓi ofishin kifi kuma ya rubuta amsar." },
      { name: "Shirin ingancin ruwa", objective: "O3", notYet: "Babu gwajin ruwa a cikin shirin.", meets: "Dubawa da asuba, gwajin zafi, pH da Secchi, da sau nawa za a yi su da abin da za a yi idan ba sa cikin iyaka.", exceeds: "Ya haɗa da takardar gwaji da aka cike da shirin gaggawa na ƙarancin oxygen." },
      { name: "'Ya'yan kifi da zubawa", objective: "O4", notYet: "Babu adadin 'ya'yan kifi ko bai yi daidai ba, ko ba a faɗi wurin ƙyanƙyasa ba.", meets: "Adadin da ya yi daidai daga faɗin wuri da yawan zubawar da aka amince; an faɗi wurin ƙyanƙyasa mai rajista ko wanda aka ba da shawara tare da abubuwan dubawa.", exceeds: "Ya rubuta nau'in, ko jinsi ɗaya ne, da tsarin maye gurbin wurin ƙyanƙyasa." },
      { name: "Kuɗin kashewa, riba da farashin daidaito", objective: "O6", notYet: "Akwai kuɗin kashewa da ba a saka ba, ba a haɗa abinci da FCR ba, ko lissafi bai yi daidai ba.", meets: "Duk kuɗin kashewa, abinci daga ƙarin da ake sa rai x FCR, riba da farashin daidaito sun yi daidai.", exceeds: "Ya nuna misali na biyu mai ƙarancin rayuwa ko ƙarancin farashi, da abin da manomin zai yi." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka zuba kifi daga wurin ƙyanƙyasa mai rajista ko wanda aka ba da shawara cikin watanni 6 (binciken biyo baya)",
      "Masu koyo da ke ajiye bayanan gwajin ruwa da na ciyarwa har ƙarshen zagaye (binciken biyo baya)",
      "Yawan rayuwa da FCR da aka bayar a lokacin girbi, idan aka kwatanta da shirin",
      "Masu koyo da suka ci riba a zagayensu na farko, inda bayanai suka ba da dama"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Littafin rubutu da alƙalami, ko waya mai manhajar spreadsheet ko ta rubutu",
      "Na'urar lissafi (ta waya ma ta isa)",
      "Ma'aunin zafi, takardun pH da Secchi disk da aka yi a gida (farin faranti, fenti, sanda)",
      "Tef ɗin aunawa don tafki",
      "Kusan minti 75 gaba ɗaya, a gajerun zama, tare da atisaye a tafki"
    ],
    facilitatorNotes: [
      "Ku yi Darasi na 3 da na 4 a tafkin da ake aiki da shi: ku yi dubawar asuba, gwajin Secchi da na pH da auna samfuri tare.",
      "Ku gayyaci jami'in faɗakarwar kifi ya bayyana izini da wuraren ƙyanƙyasa masu rajista a ƙasarku ko gundumarku.",
      "Kada ku taɓa ba da yawan magani ko sinadarai; ku tura masu koyo da ke da kifi marasa lafiya ga jami'in faɗakarwarsu ko likitan dabbobi.",
      "Ku maye gurbin farashin misali da farashin yankinku na 'ya'yan kifi, abinci da kifi kafin darasin lissafin kuɗi, kuma ku faɗa a sarari cewa misali ne.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
