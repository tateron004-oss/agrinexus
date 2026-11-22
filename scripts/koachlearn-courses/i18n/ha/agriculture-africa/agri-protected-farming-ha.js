"use strict";

// Koach Learn course, Hausa (ha) translation of agriculture-africa/agri-protected-farming.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const FAO_GAP_GH = { name: "FAO: Kyawawan hanyoyin noma don kayan lambu a gidan gilashi (greenhouse): ƙa'idoji don yankunan yanayin Bahar Rum (Plant Production and Protection Paper 217)", url: "https://www.fao.org/agriculture/crops/publications/detail/en/item/276049/icode/" };
const NORDEY_REVIEW = { name: "Nordey da wasu (2017): Noman kayan lambu a ƙarƙashin kariya a Afirka kudu da Sahara: iyakoki da damarmaki ga ƙananan manoma. Bita (Agronomy for Sustainable Development)", url: "https://publications.cirad.fr/une_notice.php?dk=585832" };
const ICIPE_TUTA = { name: "icipe: Ƙwarin wata: Tsutsar ganyen tumatir, Tuta absoluta", url: "https://www.icipe.org/news/insect-month-february-tomato-leafminer-tuta-absoluta" };
const PCPB = { name: "Hukumar Kula da Magungunan Ƙwari ta Kenya (Pest Control Products Board, PCPB)", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "Hukumar Kula da Abinci da Magunguna ta Ƙasa (NAFDAC, Najeriya)", url: "https://www.nafdac.gov.ng" };
const GHANA_EPA = { name: "Hukumar Kare Muhalli ta Ghana (Environmental Protection Authority, EPA)", url: "https://www.epa.gov.gh" };
const KEPHIS = { name: "Hukumar Kula da Lafiyar Shuke-shuke ta Kenya (KEPHIS): iri da 'ya'yan shuka masu shaida", url: "https://www.kephis.go.ke" };

module.exports = {
  id: "agri-protected-farming-ha",
  lang: "ha",
  translationOf: "agri-protected-farming",
  category: "Agriculture (Africa)",
  name: "Noma a Gidan Gilashi (Greenhouse) da Ƙarƙashin Kariya don Amfanin Gona Mai Daraja",
  skills: "Gane lokacin da noma a ƙarƙashin kariya ke biya, Kwatanta gidan gilashi, ragar inuwa da rami da tabbatar da alƙawuran mai sayarwa, Renon 'ya'yan shuka da tsara ban ruwan ɗigo mai taki, Sarrafa zafi, danshi, ƙwari da tsafta, Rubuta tsarin kasuwanci da lokacin dawowar jari",
  outcome: "rubuta tsarin kasuwanci don noman amfanin gona ɗaya mai daraja (tumatir, tattasai ko kokwamba) a ƙarƙashin gidan gilashi, ragar inuwa ko rami a gonarku: ko ya dace da ruwanku, kasuwarku da ƙwarewarku, tsarin ginin da farashi uku, tsarin amfanin gona da na ban ruwa mai taki, tsarin ƙwari da tsafta, da kuɗin kashewa, kuɗin shiga, ribar farko da lokacin dawowar jari.",
  about: [
    "Wannan kwas na ƙananan manoma ne da manoman kasuwanci masu girma, matasa masu sana'ar noma, ƙungiyoyin matasa da na mata, da jami'an faɗakarwar noma (extension officers) da ke tunanin gidan gilashi (greenhouse), ragar inuwa ko rami, ko waɗanda suke da ɗaya da ba ya biya. Misalan sune tumatir, tattasai (capsicum, barkono mai zaƙi) da kokwamba a Kenya, Najeriya, Ghana da Senegal.",
    "Babi na 1 yana taimaka muku ku yanke shawara ku kafa: lokacin da noma a ƙarƙashin kariya ke biya da lokacin da ba ya biya, manyan nau'o'in gine-gine da yadda ake kwatanta farashi, yadda ake gane masu sayarwa da ke yin alƙawuran ƙarya, da yadda ake zaɓar amfanin gona da renon 'ya'yan shuka masu tsafta. Babi na 2 game da tafiyar da shi a matsayin kasuwanci ne: ban ruwan ɗigo mai taki, sarrafa zafi, danshi, cututtuka da ƙwari, tsabtace ginin, da rubuta tsarin kasuwanci da lokacin dawowar jari.",
    "Gidan gilashi babban jari ne, kuma da yawa an bar su babu komai saboda lissafi, ruwa ko kasuwa ba su yi aiki ba. Kowane adadin kuɗi a wannan kwas misali ne na ƙirƙira don yin atisayen lissafi; ku yi amfani da farashinku da farashin kasuwarku, kuma ku yi magana da masanin noma (agronomist), jami'in faɗakarwar noma da mai ba da shawara amintacce kafin ku sa hannu ko ku biya. Akwai ɗan gwaji bayan kowane darasi, gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku rubuta tsarin kasuwanci na noma a ƙarƙashin kariya don amfanin gona ɗaya a gonarku: amsoshinku ga sharuɗɗa biyar na \"shin zai biya?\" (ruwa, kasuwa, ƙwarewa, jari, yanayi), ginin da za ku yi amfani da shi tare da aƙalla farashi uku da aka kwatanta da binciken masu sayarwa da aka yi, amfanin gona da irinsa, tsarin renon 'ya'ya da na ban ruwa mai taki da kuka amince da shi da masanin noma, tsarin mako-mako na ƙwari, yanayi da tsafta, da kuɗin kashewa, yawan girbi da ake sa rai, kuɗin shiga, ribar farko a kowane zagaye, lokacin dawowar jari, da abin da zai faru da lokacin dawowar jari idan farashi ya faɗi da kashi ɗaya cikin huɗu.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Ƙananan manoma da manoman kasuwanci masu girma, matasa masu sana'ar noma, ƙungiyoyin matasa da na mata da jami'an faɗakarwar noma a Afirka da ke tunanin, ko suke da, gidan gilashi, ragar inuwa ko rami don tumatir, tattasai, kokwamba ko wasu kayan lambu masu daraja.",
    startingPoint: "Sun taɓa noman kayan lambu a fili. An taɓa ba wasu kayan gidan gilashi da alƙawuran girbi mai yawa; wasu suna da ɗaya da ya sami matsalar ƙwari, cuta ko kasuwa. Kaɗan ne suka taɓa kwatanta farashi, tsara ban ruwa mai taki, ko lissafa lokacin dawowar jari.",
    gap: "Noma a ƙarƙashin kariya zai iya ba da girbi mafi yawa, mafi tsafta kuma a kai a kai, amma yana buƙatar kuɗi mai yawa tun farko, yana buƙatar ƙwarewa da ruwa mai dorewa, yana riƙe zafi da cuta, kuma yana biya ne kawai idan akwai kasuwa mai dorewa. Masu koyo suna buƙatar su yanke ko ya dace da su, su zaɓi gini su tabbatar da shi, su tafiyar da amfanin gona da kyau, kuma su nuna da lissafi cewa zai dawo da jari kafin rufin ya lalace.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; da yawa daga cikin masu koyo suna amfani da Turanci a matsayin harshe na biyu, kuma kwas ɗin yana nan a Sifaniyanci, Faransanci da Larabci",
      "Lissafi: ƙididdiga masu sauƙi da na'urar lissafin waya; ana nuna kowane lissafi mataki-mataki",
      "Kuɗi: duk adadin kuɗi misalai ne na ƙirƙira; masu koyo suna amfani da nasu farashi da kuɗin ƙasarsu (KES, NGN, GHS ko XOF)",
      "Lafiya: babu girke-girken taki, babu sunayen magungunan ƙwari ko yawansu; masu koyo suna aiki da masanin noma kuma suna bin takardar bayanin magani da hukumar ƙasa",
      "Kuɗi da bashi: babu shawarar zuba jari; masu koyo suna karanta kwangila gaba ɗaya kuma suna tambayar mai ba da shawara amintacce kafin su biya"
    ],
    prerequisites: "Babu. Kwas ɗin \"Ban Ruwa da Sarrafa Ruwa a Gona\" (ɗigo da famfo) da \"Sarrafa Ƙwari ta Hanyoyi Masu Haɗaka (IPM) da Yaƙi da Ƙwari Ba Tare da Sinadarai ba\" suna da amfani tare da wannan kwas."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Don gonarku", action: "duba sharuɗɗa biyar na noma a ƙarƙashin kariya (ruwa, kasuwa, ƙwarewa, jari da yanayi) da yanke shawarar ci gaba ko a'a", standard: "kuna ba da e ko a'a ga kowanne tare da dalili" },
    { id: "O2", condition: "Lokacin zaɓar gini", action: "kwatanta farashin gidan gilashi, ragar inuwa ko rami da tabbatar da alƙawuran kowane mai sayarwa", standard: "ta amfani da aƙalla farashi uku da neman shaidu da garanti a rubuce" },
    { id: "O3", condition: "Don amfanin gona ɗaya da kuka zaɓa", action: "tsara irin, renon 'ya'ya, dasawa da ban ruwan ɗigo mai taki tare da masanin noma", standard: "a matsayin tsari mai ranaku don zagayen amfanin gona ɗaya" },
    { id: "O4", condition: "Bayan an dasa amfanin gona", action: "gudanar da tsarin yau da kullum da na mako-mako don zafi, danshi, ƙwari da tsafta", standard: "wanda ya haɗa da tagogin iska, bincike, tarkuna da dokokin shiga kowane mako" },
    { id: "O5", condition: "Idan kuna da farashinku da farashin kasuwa", action: "lissafa kuɗin kashewa, kuɗin shiga, ribar farko da lokacin dawowar jari na amfanin gonar", standard: "kuma ku gwada abin da zai faru idan farashi ya faɗi da kashi ɗaya cikin huɗu" }
  ],
  chapters: [
    {
      name: "Babi na 1: Yanke shawara da kafawa",
      lessons: [
        {
          title: "Lokacin da noma a ƙarƙashin kariya ke biya, da lokacin da ba ya biya",
          objectives: ["O1"],
          minutes: 5,
          goal: "Duba sharuɗɗa biyar na noma a ƙarƙashin kariya a gonarku, ku yanke shawarar ci gaba ko a'a.",
          text: [
            "Noma a ƙarƙashin kariya yana nufin noman amfanin gona a ƙarƙashin rufi: gidan gilashi (greenhouse) mai leda (roba) da ragar ƙwari, gidan ragar inuwa, ko rami ƙasa-ƙasa ko wanda ake shiga. Idan an yi shi da kyau, yana hana ruwan sama mai ƙarfi, ƙanƙara da ƙwari da yawa, yana rage wasu cututtuka, kuma yana ba da girbi mafi yawa, mafi tsafta kuma a kai a kai na amfanin gona masu daraja kamar tumatir, tattasai da kokwamba.",
            "Bai dace da kowa ba. Wata bita ta 2017 kan noma a ƙarƙashin kariya a Afirka kudu da Sahara ta gano cewa bai dace da kowane yanayi ba, kuma har yanzu yana buƙatar wasu hanyoyin sarrafa ƙwari, kuma rashin ƙwarewa, taimakon fasaha da kuɗi yana hana ƙananan manoma da yawa. Gidajen gilashi da yawa a Kenya, Najeriya da Ghana suna tsaye babu komai bayan amfanin gona ɗaya ko biyu.",
            "Ku duba sharuɗɗa biyar kafin ku kashe kuɗi. Ruwa: ruwa mai tsafta kuma mai dorewa duk shekara, domin amfanin gonar ba ya samun ruwan sama. Kasuwa: masu saye da za su karɓi kayanku kowane mako da farashi mai kyau, kamar otal, babban shago, makaranta ko 'yan kasuwa, ba kawai \"kasuwa\" ba. Ƙwarewa: ku ko ma'aikaci da aka horar a ban ruwa mai taki, yanke rassa da binciken ƙwari, da masanin noma da za ku iya kira. Jari: kuɗi don ginin, amfanin gona na farko da kuɗin gudanarwa na wasu watanni, ba tare da sa abincin iyalinku cikin haɗari ba. Yanayi: a ƙasa mai zafi sosai, gidan gilashi a rufe zai iya yin zafi fiye da kima, don haka ragar inuwa ko gini mai iska sosai zai iya fi dacewa."
          ],
          steps: ["Ruwa: akwai ruwa mai tsafta kuma mai dorewa duk shekara?", "Kasuwa: wa zai saya kowane mako, kuma a wane farashi?", "Ƙwarewa: wa zai kula da ban ruwa mai taki, yanke rassa da binciken ƙwari, kuma wane masanin noma za ku iya kira?", "Jari: za ku iya biyan ginin, amfanin gona na farko da kuɗin gudanarwa ba tare da taɓa kuɗin abinci ba?", "Yanayi: shin gini a rufe zai yi zafi fiye da kima a inda kuke?", "Ku yanke shawara: ci gaba, fara ƙarami, ko ba yanzu ba."],
          words: [["Noma a ƙarƙashin kariya (protected farming)", "noman amfanin gona a ƙarƙashin rufi kamar gidan gilashi, ragar inuwa ko rami."], ["Gidan gilashi (greenhouse)", "ginin firam da aka rufe da leda (roba) da ragar ƙwari, mai tagogin iska."], ["Ragar inuwa (shade net)", "raga da ke rage wani ɓangare na hasken rana da zafi, kuma tana hana wasu ƙwari da tsuntsaye shiga."], ["Rami (tunnel)", "firam mai lanƙwasa da aka rufe da leda ko raga; rami ƙasa-ƙasa yana rufe kunya ɗaya, rami da ake shiga yana rufe fili."]],
          slides: [
            { title: "Abin da kariya za ta iya yi", bullets: ["Tana hana ruwan sama mai ƙarfi, ƙanƙara da ƙwari da yawa", "Girbi mafi yawa, mafi tsafta kuma a kai a kai", "Ta fi dacewa da amfanin gona masu daraja"] },
            { title: "Bai dace da kowa ba", bullets: ["Bai dace da kowane yanayi ba (bita, 2017)", "Har yanzu yana buƙatar wasu hanyoyin sarrafa ƙwari", "Ƙwarewa, taimako da kuɗi su ne manyan cikas"] },
            { title: "Sharuɗɗa biyar", bullets: ["Ruwa duk shekara", "Mai saye kowane mako", "Ƙwarewa da masanin noma", "Jari da yanayin da ya dace"] },
            { title: "Shawararku", bullets: ["Ci gaba", "Fara ƙarami (rami ko ragar inuwa)", "Ba yanzu ba: ku gyara sharaɗin da ya rage tukuna"] }
          ],
          sources: [NORDEY_REVIEW, FAO_GAP_GH],
          tryIt: "Ku rubuta sharuɗɗa biyar ku amsa kowanne don gonarku da e ko a'a tare da dalili. Sannan ku rubuta shawararku: ci gaba, fara ƙarami, ko ba yanzu ba, da abin da za ku buƙaci ku canja.",
          youCanNow: "duba sharuɗɗa biyar na noma a ƙarƙashin kariya da yanke shawara ko ya dace da gonarku yanzu.",
          quickCheck: [
            { objective: "O1", q: "Wace ce alama mafi ƙarfi cewa kun shirya don gidan gilashi?", options: ["Mai sayarwa ya ce zai biya cikin wata uku", "Maƙwabcinku ya sayi ɗaya", "Kuna da ruwa duk shekara da mai saye da ke karɓar tumatir kowane mako", "Kun ga hotuna a intanet"], answer: 2, why: "Ruwa mai dorewa da mai saye na kai a kai biyu ne daga cikin sharuɗɗa biyar da ke sa ya biya." },
            { objective: "O1", q: "Kuna noma a ƙasa mai zafi sosai. Me za ku fara dubawa?", options: ["Ko gidan gilashi a rufe zai yi zafi fiye da kima, da ko ragar inuwa ta fi dacewa", "Launin ledar kawai", "Babu komai; zafi yana da kyau ga kowane amfanin gona", "Ko za ku iya noma ba tare da ruwa ba"], answer: 0, why: "Gine-gine a rufe suna riƙe zafi; a wurare masu zafi, iska ko ragar inuwa za su iya fi dacewa." }
          ]
        },
        {
          title: "Gidan gilashi, ragar inuwa da rami: zaɓuɓɓuka, farashi da masu sayarwa",
          objectives: ["O2"],
          minutes: 6,
          goal: "Kwatanta aƙalla farashin gini uku ku tabbatar da alƙawuran kowane mai sayarwa.",
          text: [
            "Manyan zaɓuɓɓuka: gidan gilashi (firam na itace ko ƙarfe da leda mai kariyar UV a rufi da ragar ƙwari a gefe) yana ba da kariya mafi yawa kuma ya fi tsada. Gidan ragar inuwa ya fi araha, ya fi sanyi, kuma ya dace da wurare masu zafi da amfanin gona kamar tattasai da kayan lambu masu ganye, amma ba ya hana ruwan sama. Rami da ake shiga ko rami ƙasa-ƙasa su ne hanya mafi araha ta farawa da koyo. Ƙarfe ya fi itace daɗewa amma ya fi tsada; itace da aka sarrafa zai iya aiki idan an hana gara. Ledar rufi tana lalacewa bayan wasu shekaru, don haka ku tambayi tsawon lokacin da aka ba da garantin kariyarta ta UV.",
            "Farashi ya bambanta sosai bisa girma, kayan gini, ƙasa da abin da aka haɗa, don haka ku nemi aƙalla farashi uku a rubuce na girma iri ɗaya, ku kwatanta su layi bayan layi: firam, rufi da raga, ƙofofi, tsarin ɗigo, tankin ruwa, wurin renon 'ya'ya, kafawa, horo da ziyarar bayan sayarwa. Misali (adadi na ƙirƙira, don nuna hanyar kawai), farashi A na KES 380,000 zai iya haɗa da ɗigo da horo yayin da farashi B na KES 300,000 bai haɗa ba, don haka B ba shi ne mafi araha a gaskiya ba.",
            "Ku yi hankali da masu sayarwa da ke yin alƙawuran da suka wuce gona da iri. Alamun gargaɗi: tabbacin girbi ko kuɗin shiga, \"zai dawo da jari a lokacin noma ɗaya\", alƙawarin \"za mu saye kayanku\" ba tare da kwangila a rubuce ba, matsa muku ku biya babban kuɗin ajiya yau, babu manoman da za ku iya ziyarta, babu garanti a rubuce, da kayan da ake sayarwa ba tare da horo ko tsarin ruwa ba. Ku nemi ziyartar manoma biyu da suka yi amfani da ginin mai sayarwar aƙalla lokutan noma biyu. Ku karɓi garantin, ranar kawowa da abin da aka haɗa a rubuce, ku karanta kwangilar gaba ɗaya, kuma ku tambayi mai ba da shawara amintacce kafin ku biya."
          ],
          steps: ["Ku zaɓi girman da za ku iya kulawa da shi kuma ku ba shi ruwa.", "Ku nemi aƙalla masu sayarwa uku su ba ku farashi a rubuce na girma iri ɗaya.", "Ku kwatanta layi bayan layi: firam, rufi, raga, ɗigo, tanki, wurin renon 'ya'ya, kafawa, horo, bayan sayarwa.", "Ku nemi shaidu daga kowane mai sayarwa, ku ziyarci manoma biyu da ke amfani da ginin su.", "Ku karɓi garanti, ranar kawowa da abin da aka haɗa a rubuce; ku karanta duka ku tambayi mai ba da shawara."],
          words: [["Leda mai kariyar UV", "ledar gidan gilashi da aka yi don jure hasken ultraviolet na rana don ta daɗe."], ["Ragar ƙwari", "raga mai ƙananan ramuka a gefe da tagogin iska da ke hana ƙwari da yawa shiga amma tana barin iska ta shiga."], ["Farashi a rubuce (quote)", "takardar farashi daga mai sayarwa da ke nuna ainihin abin da aka haɗa."], ["Garanti (warranty)", "alƙawari a rubuce daga mai sayarwa na gyara ko maye gurbin sassan da suka lalace cikin wani lokaci."]],
          slides: [
            { title: "Zaɓuɓɓuka", bullets: ["Gidan gilashi: kariya mafi yawa, tsada mafi yawa", "Ragar inuwa: ta fi sanyi, ta fi araha, ba ta hana ruwan sama", "Rami: hanya mafi araha ta farawa da koyo"] },
            { title: "Ku kwatanta farashi uku", bullets: ["Girma iri ɗaya, a rubuce, layi bayan layi", "Firam, rufi, raga, ɗigo, tanki, wurin renon 'ya'ya", "Kafawa, horo, ziyarar bayan sayarwa"] },
            { title: "Alamun gargaɗi", bullets: ["Tabbacin girbi ko \"zai dawo da jari a lokacin noma ɗaya\"", "Alƙawarin saye ba tare da kwangila ba", "Matsa muku ku biya kuɗin ajiya yau"] },
            { title: "Ku kare kanku", bullets: ["Ku ziyarci manoma biyu da suka yi amfani da shi lokutan noma 2+", "Garanti da abin da aka haɗa a rubuce", "Ku karanta kwangilar gaba ɗaya; ku tambayi mai ba da shawara"] }
          ],
          sources: [FAO_GAP_GH, NORDEY_REVIEW],
          tryIt: "Ku nemi aƙalla masu sayarwa ko magina uku kusa da ku su ba ku farashi a rubuce na gini mai girma iri ɗaya. Ku sa su a tebur, layi bayan layi, ku yi alama kan abin da kowanne ya bari. Ku rubuta tambayoyin da za ku yi wa kowane mai sayarwa, har da manoma biyu da za ku iya ziyarta.",
          youCanNow: "kwatanta farashin gine-gine layi bayan layi da tabbatar da alƙawuran mai sayarwa kafin ku biya.",
          quickCheck: [
            { objective: "O2", q: "Wani mai sayarwa ya ba da tabbacin tan 10 na tumatir da dawowar jari a lokacin noma ɗaya, idan kun biya kuɗin ajiya yau. Me za ku yi?", options: ["Ku biya nan take kafin tayin ya ƙare", "Ku biya rabi ku yanke shawara daga baya", "Ku sa hannu ba tare da karantawa ba", "Ku ɗauke shi a matsayin alamar gargaɗi, ku nemi shaidu da sharuɗɗa a rubuce, ku kwatanta farashi"], answer: 3, why: "Tabbacin girbi da matsa muku ku biya yau alamomi ne da aka sani na alƙawuran da suka wuce gona da iri." },
            { objective: "O2", q: "Farashi B ya fi farashi A araha amma ba shi da tsarin ɗigo ko horo. Mene ne gaskiya?", options: ["B ne mafi kyawun ciniki a fili", "B zai iya fi tsada idan kun ƙara abin da ya bari", "Ba a taɓa buƙatar ɗigo da horo ba", "Ba za a iya kwatanta farashi ba"], answer: 1, why: "Ku kwatanta layi bayan layi; dole a sayi abubuwan da suka rage daban." }
          ]
        },
        {
          title: "Zaɓar amfanin gona da renon 'ya'yan shuka masu tsafta",
          objectives: ["O3"],
          minutes: 5,
          goal: "Zaɓi amfanin gona da irinsa don ginin ku, ku tsara renon 'ya'ya mai tsafta da dasawa.",
          text: [
            "Amfanin gona da aka fi nomawa a ƙarƙashin kariya sune tumatir, tattasai (capsicum, barkono mai zaƙi) da kokwamba. Tumatir yana da kasuwa mafi girma amma kuma haɗarin ƙwari da cututtuka mafi girma, har da Tuta absoluta. Tattasai yana sayuwa sosai a otal-otal da manyan shaguna, musamman masu launi, kuma yana jinkiri wajen farawa. Kokwamba yana girma da sauri kuma yana kawo kuɗi da wuri. Ku zaɓa bisa mai saye da farko: wane amfanin gona, launi da girma zai karɓa kowane mako.",
            "Ku yi amfani da irin da aka samar don gidan gilashi. Tumatir na gidan gilashi da yawa nau'in indeterminate ne (suna ci gaba da girma kuma ana ɗaure su da igiya zuwa sama na watanni da yawa), kuma kokwamba na gidan gilashi da yawa suna ba da 'ya'ya ba tare da ƙudan zuma ba. Irin waɗannan nau'o'in zai iya yin tsada, don haka ku sayi iri a rufe, mai shaida, daga dila mai rajista (KEPHIS ce ke ba da shaidar iri a Kenya), kuma kada ku ajiye iri daga hybrid (iri mai haɗaka).",
            "Ku reni 'ya'yan shuka a wurin reno mai tsafta: tirai na renon 'ya'ya da ƙasar reno mai tsafta (ba ƙasar gona ba), a ƙarƙashin ragar ƙwari, da ban ruwa a hankali. Manoma da yawa suna sayen 'ya'yan shuka daga mai renon 'ya'ya mai lasisi, wanda ke ajiye lokaci amma dole ya zama majiya mai tsafta kuma amintacciya. Ku dasa 'ya'ya masu ƙarfi, masu lafiya, marasa ƙwari a lokacin sanyin yamma, a tazarar da masanin noma ya ba ku, sannan ku shayar da su nan take. Ku tsara ranaku: shuka iri, dasawa, girbi na farko da girbi na ƙarshe, don mai sayenku ya sami kaya a kan lokaci."
          ],
          steps: ["Ku tambayi mai sayenku wane amfanin gona, launi da girma zai karɓa kowane mako.", "Ku zaɓi irin gidan gilashi; ku sayi iri a rufe, mai shaida.", "Ku reni 'ya'ya a tirai da ƙasar reno mai tsafta a ƙarƙashin ragar ƙwari, ko ku saya daga mai renon 'ya'ya mai lasisi.", "Ku dasa 'ya'ya masu ƙarfi, marasa ƙwari da yamma a tazarar da masanin noma ya bayar.", "Ku rubuta ranaku: shuka iri, dasawa, girbi na farko da na ƙarshe."],
          words: [["Tattasai (capsicum)", "barkono mai zaƙi; kore, ja, rawaya ko lemu."], ["Indeterminate", "nau'in tumatir da ke ci gaba da girma da ba da 'ya'ya na watanni; ana ɗaure shi da igiya zuwa sama."], ["Ƙasar reno (growing medium)", "gauraye mai tsafta (misali cocopeat, garin kwakwa) da ake amfani da shi maimakon ƙasa don renon 'ya'ya."], ["Mai renon 'ya'ya (propagator)", "kasuwancin wurin reno da ke renon 'ya'yan shuka yana sayarwa."]],
          slides: [
            { title: "Ku zaɓa bisa mai sayenku", bullets: ["Tumatir: kasuwa mafi girma, haɗarin ƙwari mafi yawa", "Tattasai: otal-otal da manyan shaguna; farawa a hankali", "Kokwamba: da sauri, kuɗi da wuri"] },
            { title: "Irin gidan gilashi", bullets: ["Tumatir indeterminate a kan igiya", "Kokwamba da ke ba da 'ya'ya ba tare da ƙudan zuma ba", "Iri a rufe, mai shaida; kada ku ajiye irin hybrid"] },
            { title: "'Ya'yan shuka masu tsafta", bullets: ["Tirai, ƙasar reno mai tsafta, a ƙarƙashin ragar ƙwari", "Ko mai renon 'ya'ya mai lasisi, amintacce", "Ku dasa marasa ƙwari a lokacin sanyin yamma"] },
            { title: "Ku tsara ranaku", bullets: ["Shuka, dasawa, girbi na farko da na ƙarshe", "Ku daidaita su da buƙatar mai sayenku kowane mako"] }
          ],
          sources: [KEPHIS, ICIPE_TUTA],
          tryIt: "Ku tambayi mai saye ɗaya wane amfanin gona, launi da girma zai karɓa kowane mako. Ku zaɓi amfanin gonarku da irin gidan gilashi, ku rubuta ranakun shuka iri (ko sayen 'ya'ya), dasawa, girbi na farko da girbi na ƙarshe.",
          youCanNow: "zaɓar amfanin gona na ƙarƙashin kariya bisa buƙatar mai sayenku da tsara 'ya'yan shuka masu tsafta da dasawa.",
          quickCheck: [
            { objective: "O3", q: "Me ya kamata ya yanke wane amfanin gona za ku fara nomawa a gidan gilashinku?", options: ["Abin da mai sayenku zai karɓa kowane mako", "Amfanin gona mai kyakkyawan fakitin iri", "Duk abin da maƙwabci ke nomawa", "Iri mafi araha"], answer: 0, why: "Mai saye na kai a kai shi ne ke sa amfanin gona na ƙarƙashin kariya ya biya." },
            { objective: "O3", q: "A ina ya kamata a reni 'ya'yan shukar gidan gilashi?", options: ["A ƙasar fili kusa da tsofaffin tumatir", "A ƙarƙashin bishiya ba tare da raga ba", "A tirai da ƙasar reno mai tsafta a ƙarƙashin ragar ƙwari, ko daga mai renon 'ya'ya mai lasisi", "Ko'ina; ƙwari ba su da muhimmanci a gidan gilashi"], answer: 2, why: "'Ya'ya masu tsafta suna hana ƙwari da cututtuka shiga ginin tare da amfanin gona." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Yanke shawara da kafawa",
        questions: [
          { objective: "O1", q: "Wanne BA ɗaya daga cikin sharuɗɗa biyar na wannan kwas ba ne?", options: ["Ruwa duk shekara", "Mai saye kowane mako", "Gidan gilashi mai launi mafi haske", "Ƙwarewa da masanin noma"], answer: 2, why: "Sharuɗɗa biyar sune ruwa, kasuwa, ƙwarewa, jari da yanayi." },
          { objective: "O1", q: "Me yasa dole ruwa ya zama mai dorewa duk shekara don gidan gilashi?", options: ["Amfanin gona a ƙarƙashin rufi ba ya samun ruwan sama", "Leda tana buƙatar wanki kowace rana", "Ruwa yana sanyaya firam", "Ba shi da muhimmanci"], answer: 0, why: "A ƙarƙashin rufi, duk ruwa dole ya fito daga tushen ruwanku." },
          { objective: "O2", q: "Wane gini ne ya fi sanyi kuma ya dace da wurare masu zafi, amma ba ya hana ruwan sama?", options: ["Gidan gilashi na leda a rufe", "Gidan ragar inuwa", "Rumbun bulo", "Rami ƙasa-ƙasa na leda"], answer: 1, why: "Ragar inuwa tana rage rana da zafi amma tana barin ruwan sama ya wuce." },
          { objective: "O2", q: "Mene ne hanya mafi kyau ta tabbatar da alƙawuran mai sayarwa?", options: ["Ku amince da takardar talla", "Ku biya da farko, sannan ku tambaya", "Ku tambaya a kafofin sada zumunta kawai", "Ku ziyarci manoma biyu da suka yi amfani da ginin su lokutan noma biyu ko fiye"], answer: 3, why: "Manoman da suka yi amfani da shi suna nuna abin da yake yi a gaskiya." },
          { objective: "O3", q: "Tumatir indeterminate:", options: ["Yana ci gaba da girma da ba da 'ya'ya na watanni, ana ɗaure shi da igiya zuwa sama", "Yana daina girma bayan 'yan makonni", "Ba ya taɓa buƙatar tallafi", "Wani nau'in kokwamba ne"], answer: 0, why: "Tumatir indeterminate yana ci gaba da girma, don haka ana ɗaure shi da igiya a gidan gilashi." }
        ]
      }
    },
    {
      name: "Babi na 2: Tafiyar da shi a matsayin kasuwanci",
      lessons: [
        {
          title: "Tushen ban ruwan ɗigo mai taki (fertigation)",
          objectives: ["O3"],
          minutes: 5,
          goal: "Bayyana yadda tsarin ban ruwan ɗigo mai taki ke aiki ku tsara binciken sa na yau da kullum tare da masanin noma.",
          text: [
            "Ban ruwa mai taki (fertigation) yana nufin ba da taki ta tsarin ɗigo, narkakke a cikin ruwan ban ruwa, don kowace shuka ta sami ɗan abinci da ruwa a saiwoyinta kowace rana. Yana ajiye ruwa da taki kuma yana sa ganye su kasance a bushe, wanda ke taimakawa wajen hana cuta. Ana koyar da tsarin ɗigo, famfo da zaɓin hasken rana (solar) a kwas ɗin \"Ban Ruwa da Sarrafa Ruwa a Gona\"; wannan darasi yana bayani kan abin da ya bambanta a ƙarƙashin rufi.",
            "Tsari mai sauƙi yana da tankin ruwa, matace (filter), hanyar ƙara takin (tankin taki ko injector, mai tura taki), manyan bututu da layukan ɗigo masu ramukan ɗigo (emitters) a kowace shuka. Ku yi amfani da takin da ke narkewa a ruwa kawai, wanda aka yi don ban ruwa mai taki. Girke-girken yana canjawa bisa amfanin gona da matakinsa ('ya'yan shuka, fure, 'ya'ya) da ruwanku da ƙasarku, don haka ku samo shi daga masanin noma, gwajin ƙasa da ruwa ko ma'aikatan fasaha na mai sayar da taki. Kada ku taɓa yin hasashe, kuma kada ku taɓa gauraya kaya a tanki ɗaya sai dai idan masanin noma ya ce za a iya gauraya su.",
            "Ku duba tsarin kowace rana: matacen yana da tsafta, kowane ramin ɗigo yana ɗigowa, babu layin da ke zubewa, kuma ƙasar da ke kewaye da shuke-shuke tana da danshi, ba ta jiƙe sosai ba. Masu noma da yawa suna amfani da mitar EC mai araha don duba cewa ƙarfin taki a ruwa daidai yake da abin da masanin noma ya saita, da mitar pH ko takardun pH. Ku wanke layukan da ruwa mai tsafta kamar yadda aka ba da shawara, don gishiri da taki kada su toshe ramukan ɗigo. Ku rubuta ruwa da takin kowace rana a littafin bayanai."
          ],
          steps: ["Ku samo tsarin ciyarwa bisa matakin amfanin gona daga masanin noma ko gwajin ƙasa da ruwa.", "Ku yi amfani da takin da ke narkewa a ruwa kawai don ban ruwa mai taki; ku gauraya kamar yadda aka ba da shawara kawai.", "Kowace rana: ku tsabtace matace, ku duba ramukan ɗigo suna ɗigowa kuma layuka ba sa zubewa.", "Ku duba ƙarfin da mitar EC da pH kamar yadda masanin noma ya saita.", "Ku wanke layuka kamar yadda aka ba da shawara; ku rubuta ruwa da taki kowace rana."],
          words: [["Ban ruwa mai taki (fertigation)", "ba da taki narkakke a ruwan ban ruwa ta tsarin ɗigo."], ["Ramin ɗigo (emitter)", "ƙaramin mafita a layin ɗigo da ke sakin ruwa a kowace shuka."], ["Mitar EC", "ƙaramar mita da ke auna yawan taki (gishiri) narkakke a ruwa."], ["Wankewa (flushing)", "tura ruwa mai tsafta ta cikin layuka don cire gishiri da toshewa."]],
          slides: [
            { title: "Mene ne ban ruwa mai taki", bullets: ["Taki narkakke a ruwan ɗigo", "Ɗan abinci da ruwa a saiwoyi kowace rana", "Yana ajiye ruwa kuma yana sa ganye su kasance a bushe"] },
            { title: "Sassan", bullets: ["Tanki, matace, tankin taki ko injector", "Babban bututu da layukan ɗigo masu ramukan ɗigo", "Takin da ke narkewa a ruwa kawai"] },
            { title: "Girke-girken", bullets: ["Yana canjawa bisa matakin amfanin gona, ruwa da ƙasa", "Daga masanin noma ko gwajin ruwa da ƙasa", "Kada ku yi hasashe; ku gauraya kamar yadda aka ba da shawara kawai"] },
            { title: "Binciken yau da kullum", bullets: ["Matace mai tsafta; kowane ramin ɗigo yana ɗigowa", "EC da pH kamar yadda masanin noma ya saita", "Ku wanke kamar yadda aka ba da shawara; ku rubuta"] }
          ],
          sources: [FAO_GAP_GH],
          tryIt: "Ku zana tsarin ban ruwan ɗigo mai takinku daga tanki zuwa shuke-shuke, ku sa sunan kowane sashe. Sannan ku rubuta jerin binciken yau da kullum (matace, ramukan ɗigo, zubewa, EC, pH, danshin ƙasa, littafin bayanai) da tambayoyin da za ku yi wa masanin nomanku game da tsarin ciyarwa na kowane matakin amfanin gona.",
          youCanNow: "bayyana tsarin ban ruwan ɗigo mai taki, tsara ciyarwarsa tare da masanin noma da gudanar da binciken sa na yau da kullum.",
          quickCheck: [
            { objective: "O3", q: "Daga ina ya kamata girke-girken ban ruwanku mai taki ya fito?", options: ["Hasashe daga launin ganye", "Masanin noma, gwajin ƙasa da ruwa ko ma'aikatan fasaha na mai sayarwa", "Girke-girke ɗaya don kowane amfanin gona da mataki", "Duk abin da ya fi araha a wannan makon"], answer: 1, why: "Girke-girken ya dogara da amfanin gona, mataki, ruwa da ƙasa, don haka dole ya fito daga shawarar ƙwararre." },
            { objective: "O3", q: "Wasu shuke-shuke suna yin yaushi yayin da wasu suna lafiya. Me za ku fara dubawa?", options: ["Ko ramukan ɗigonsu sun toshe kuma matacen yana da tsafta", "Ƙara taki a tanki", "Cire ragar ƙwari", "Shayarwa daga sama da bututun ruwa"], answer: 0, why: "Toshewar ramukan ɗigo dalili ne da aka saba gani da ke sa wasu shuke-shuke ba sa samun ruwa ko abinci." }
          ]
        },
        {
          title: "Sarrafa zafi, danshi, ƙwari da tsafta",
          objectives: ["O4"],
          minutes: 6,
          goal: "Gudanar da tsarin yau da kullum da na mako-mako don zafi, danshi, ƙwari da tsafta a ginin ku.",
          text: [
            "Zafi da danshi sune manyan matsalolin yau da kullum a ƙarƙashin rufi a wurare masu zafi. Gidan gilashi a rufe zai iya yin zafi fiye da waje sosai, kuma iska mai zafi, marar motsi, mai danshi tana kawo cututtukan fungi (naman gwari) kamar late blight (ɓacin ganye) da grey mould (furfura mai toka). Ku buɗe tagogin iska na gefe da na rufi da safe ku rufe su da yamma idan ana buƙata, ku sa ganye su kasance a bushe ta hanyar shayarwa ta ɗigo kawai, ku yanke tsofaffin ganyen ƙasa da rassan gefe don iska ta yi motsi, kuma kada ku cunkusa shuke-shuke. Ragar inuwa a kan rufi a watanni mafi zafi za ta iya taimakawa. Ku ajiye ma'aunin zafi mai araha a ciki, ku rubuta abin da yake nunawa.",
            "Ragar ƙwari tana hana ƙwari da yawa shiga, amma waɗanda suka shiga suna yawaita da sauri domin babu ruwan sama ko maƙiyansu na halitta da za su hana su: farin ƙuda (whiteflies), thrips, aphids (kwarkwatar shuka), spider mites (ƙananan gizo-gizo) da, a tumatir, Tuta absoluta. A ƙasa, root-knot nematodes (tsutsotsin ƙulli na saiwa) matsala ce da aka saba gani a gidajen gilashi da aka daɗe ana amfani da su. Ku bincika kowane layin shuka kowane mako, ku rataya katunan manne masu rawaya don farin ƙuda da aphids da masu shuɗi don thrips, kuma ku yi amfani da tarkunan pheromone (ƙamshin jan hankali) don Tuta absoluta. Ku bi matakan IPM (haɗaɗɗen sarrafa ƙwari); idan ana buƙatar maganin ƙwari, ku yi amfani da wanda aka yi wa rajista don amfanin gonarku kawai (PCPB a Kenya, NAFDAC a Najeriya, EPA a Ghana), ku bi takardar bayaninsa da lokacin jira kafin girbi, kuma ku sa kayan kariya, domin za ku riƙa tsinkar 'ya'ya a wuri a rufe sau da yawa.",
            "Tsafta tana hana ƙwari da cuta shiga. Ku yi amfani da ƙofa biyu don ɗaya ta kasance a rufe koyaushe, da kwanon wanke takalma (footbath) a ƙofar shiga. Ku iyakance baƙi, kuma ma'aikata su wanke hannu su sa tufafi masu tsafta. Ku cire shuke-shuke marasa lafiya da ganye da 'ya'yan da suka faɗi a cikin buhu a rufe, ku sa kewayen ginin ya kasance babu ciyawa, ku gyara ramukan raga nan take, kuma ku tsabtace kayan aiki. Tsakanin amfanin gona, ku cire duk sharar shuka ku tsabtace ginin kafin ku sake shuka."
          ],
          steps: ["Kowace safiya: ku buɗe tagogin iska; ku karanta ma'aunin zafi; ku duba ko ganye sun jiƙe.", "Kowace yamma: ku rufe tagogin iska idan ana buƙata; ku rubuta zafin.", "Kowane mako: ku bincika kowane layi; ku ƙirga ƙwarin da katunan manne da tarkunan pheromone suka kama.", "Kowane mako: ku yanke ganyen ƙasa da rassan gefe; ku cire shuke-shuke marasa lafiya da shara a buhu a rufe.", "Koyaushe: ƙofa biyu a rufe, kwanon wanke takalma, baƙi kaɗan, kayan aiki masu tsafta, gyaran ramukan raga."],
          words: [["Shigar iska (ventilation)", "barin iska ta yi motsi a cikin gini ta tagogin iska don rage zafi da danshi."], ["Danshi (humidity)", "yawan tururin ruwa a cikin iska; danshi mai yawa yana taimakawa cututtukan fungi."], ["Root-knot nematode", "ƙaramar tsutsa a ƙasa da ke sa kumburi a saiwoyi kuma tana raunana shuke-shuke."], ["Kwanon wanke takalma (footbath)", "kwano mara zurfi mai maganin kashe ƙwayoyin cuta a ƙofar shiga don tsabtace takalma."]],
          slides: [
            { title: "Zafi da danshi", bullets: ["Ku buɗe tagogin iska da safe, ku rufe idan ana buƙata", "Ku shayar ta ɗigo kawai; ganye su kasance a bushe", "Ku yanke ganyen ƙasa da rassan gefe; kada ku cunkusa"] },
            { title: "Ƙwari a ƙarƙashin rufi", bullets: ["Farin ƙuda, thrips, aphids, spider mites", "Tuta absoluta a tumatir", "Root-knot nematodes a tsohuwar ƙasa"] },
            { title: "Ku lura ku kama", bullets: ["Ku bincika kowane layi kowane mako", "Katunan rawaya: farin ƙuda, aphids; shuɗi: thrips", "Tarkunan pheromone don Tuta absoluta"] },
            { title: "Tsafta", bullets: ["Ƙofa biyu da kwanon wanke takalma", "Baƙi kaɗan; hannu, tufafi da kayan aiki masu tsafta", "Ku cire shara a rufe; ku gyara raga nan take"] }
          ],
          sources: [FAO_GAP_GH, ICIPE_TUTA, PCPB, NAFDAC, GHANA_EPA],
          tryIt: "Ku rubuta tsarin aiki mai shafi ɗaya don ginin ku: abin da kuke yi kowace safiya da yamma, abin da kuke yi kowane mako (bincike, tarkuna, yanke ganye, shara) da dokokin shiga (ƙofofi, kwanon wanke takalma, baƙi). Ku liƙa shi a ƙofa.",
          youCanNow: "gudanar da tsarin yau da kullum da na mako-mako don zafi, danshi, ƙwari da tsafta a gini na ƙarƙashin kariya.",
          quickCheck: [
            { objective: "O4", q: "Akwai zafi da danshi a ciki kuma kun ga furfura mai toka (grey mould) tana farawa. Me ya fi taimakawa?", options: ["Ku shayar da ganye da bututun ruwa", "Ku rufe dukkan tagogin iska dukan yini", "Ku ƙara shuke-shuke kusa da juna", "Ku buɗe tagogin iska, ganye su kasance a bushe, ku yanke ganyen ƙasa don iska"], answer: 3, why: "Iska mai motsi da busassun ganye suna rage saurin cututtukan fungi." },
            { objective: "O4", q: "Me yasa ake amfani da ƙofa biyu a ƙofar shiga gidan gilashi?", options: ["Don ya yi kama da na zamani", "Don ɗaya ta kasance a rufe koyaushe, ƙwari kaɗan su shiga", "Don riƙe ma'aikata a ciki", "Tana shigar da ƙarin zafi"], answer: 1, why: "Idan ƙofa ɗaya tana a rufe koyaushe, ƙwari ba za su iya tashi su shiga kai tsaye ba." }
          ]
        },
        {
          title: "Tsarin kasuwanci: ribar farko da lokacin dawowar jari",
          objectives: ["O5"],
          minutes: 6,
          goal: "Lissafa kuɗin kashewa, kuɗin shiga, ribar farko da lokacin dawowar jari don amfanin gona ɗaya na ƙarƙashin kariya.",
          text: [
            "Tsarin kasuwanci yana nuna, da lissafi, ko ginin zai iya biyan kansa kafin ya lalace. Kuna buƙatar nau'in kuɗin kashewa biyu. Jari (investment) shi ne abin da kuke biya sau ɗaya: ginin, tsarin ɗigo, tanki da kafawa. Kuɗin gudanarwa (running costs) suna zuwa a kowane zagayen amfanin gona: iri ko 'ya'yan shuka, taki, kariyar amfanin gona, ƙwadago, ruwa da wuta, sufuri, kayan tattarawa da kuɗin kasuwa.",
            "Ribar farko a kowane zagaye = kuɗin shiga (kg da ake sa ran sayarwa x farashin kowane kg) - kuɗin gudanarwa. Lokacin dawowar jari = jari / ribar farko a kowace shekara. Misali na ƙirƙira a KES, don atisayen hanyar kawai: jari KES 400,000; zagayen tumatir ɗaya a shekara; sayarwa da ake sa rai kg 4,000 a KES 40 = KES 160,000; kuɗin gudanarwa KES 90,000; ribar farko KES 70,000 a shekara. Dawowar jari = 400,000 / 70,000 = kusan shekara 5.7. Idan mai sayarwa ya ce rufin yana ɗaukar kusan shekara 4, wannan tsari ba zai dawo da jari kafin dole ku maye gurbinsa ba. Wannan alamar haɗari ce, ba dalilin ƙara cin bashi ba.",
            "Yanzu ku gwada shi. Idan farashi ya faɗi da kashi ɗaya cikin huɗu (KES 30 maimakon 40), kuɗin shiga ya zama KES 120,000, ribar farko KES 30,000, kuma dawowar jari fiye da shekara 13. Farashin tumatir yana hawa da sauka sosai bisa lokaci, don haka ku gwada mummunan farashi, ƙarancin girbi da asarar amfanin gona. Sannan ku nemi hanyoyin inganta shi: gini ƙarami ko mafi araha, kwangila da mai saye, zagaye biyu a shekara, amfanin gona mafi daraja kamar tattasai mai launi, ko raba kuɗin a ƙungiya. Lissafi iri ɗaya yana aiki a NGN, GHS ko XOF: manomi kusa da Dakar a Senegal yana yin ƙididdiga iri ɗaya a CFA franc. Ku yi amfani da farashinku, ku riƙe bayanai na gaske da zarar kun fara, kuma ku tambayi mai ba da shawara amintacce kafin ku ci bashi ko ku sa hannu."
          ],
          steps: ["Ku haɗa jarin daga farashin da kuka zaɓa.", "Ku jera kuɗin gudanarwa na zagaye ɗaya.", "Kuɗin shiga = kg da ake sa ran sayarwa x farashin kowane kg (daga mai sayenku).", "Ribar farko = kuɗin shiga - kuɗin gudanarwa; a shekara = riba x zagaye a shekara.", "Dawowar jari = jari / ribar farko a shekara; ku kwatanta da tsawon rayuwar rufin.", "Ku gwada faɗuwar farashi da kashi ɗaya cikin huɗu, ƙarancin girbi da asarar amfanin gona."],
          words: [["Jari (investment)", "kuɗin da ake biya sau ɗaya don kafawa, kamar ginin da tsarin ɗigo."], ["Kuɗin gudanarwa (running costs)", "kuɗin da ake kashewa a kowane zagayen amfanin gona, kamar 'ya'yan shuka, taki, ƙwadago da sufuri."], ["Ribar farko (gross margin)", "kuɗin shiga ban da kuɗin gudanarwa na zagaye ɗaya ko shekara ɗaya."], ["Lokacin dawowar jari (payback period)", "tsawon lokacin da ribar farko ke ɗauka don dawo da jarin."]],
          slides: [
            { title: "Nau'in kuɗin kashewa biyu", bullets: ["Jari: gini, ɗigo, tanki, kafawa", "Kuɗin gudanarwa: 'ya'yan shuka, taki, ƙwadago, ruwa, sufuri"] },
            { title: "Dabarun lissafi", bullets: ["Ribar farko = kuɗin shiga - kuɗin gudanarwa", "Dawowar jari = jari / ribar farko a shekara", "Dawowar jari dole ta fi tsawon rayuwar rufin gajarta"] },
            { title: "Misali na ƙirƙira (KES)", bullets: ["Jari 400,000; riba 70,000 a shekara", "Dawowar jari kusan shekara 5.7", "Farashi ya faɗi da kashi ɗaya cikin huɗu: fiye da shekara 13"] },
            { title: "Ku ƙarfafa shi", bullets: ["Gini ƙarami ko rabawa a ƙungiya", "Kwangila da mai saye; zagaye biyu a shekara", "Amfanin gona mafi daraja; bayanai na gaske; ku tambayi mai ba da shawara"] }
          ],
          sources: [NORDEY_REVIEW],
          tryIt: "Aikin ƙarshe: ku rubuta tsarin kasuwancinku na noma a ƙarƙashin kariya don amfanin gona ɗaya: sharuɗɗanku biyar, ginin da farashi uku da aka kwatanta da binciken masu sayarwa da aka yi, amfanin gona da irinsa, tsarin renon 'ya'ya da na ban ruwa mai taki, tsarinku na mako-mako, da jari, kuɗin gudanarwa, kuɗin shiga, ribar farko, lokacin dawowar jari, da dawowar jari idan farashi ya faɗi da kashi ɗaya cikin huɗu.",
          youCanNow: "lissafa ribar farko da lokacin dawowar jari don amfanin gona na ƙarƙashin kariya da gwada shi da faɗuwar farashi.",
          quickCheck: [
            { objective: "O5", q: "Jari 300,000 ne kuma ribar farko 100,000 a shekara. Mene ne lokacin dawowar jari?", options: ["Shekara 1", "Shekara 30", "Shekara 3", "Shekara 100"], answer: 2, why: "300,000 / 100,000 = shekara 3." },
            { objective: "O5", q: "Dawowar jarinku shekara 6 ce amma rufin yana ɗaukar kusan 4. Me wannan ke nuna muku?", options: ["Tsarin ba zai dawo da jari a kan lokaci ba; ku canja tsarin ko kada ku zuba jari yanzu", "Babu matsala; ku ƙara cin bashi", "Dawowar jari ba ta da muhimmanci", "Ku sayi gidan gilashi na biyu"], answer: 0, why: "Idan rufin ya lalace kafin jari ya dawo, za ku yi asara sai dai idan tsarin ya canja." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Tafiyar da shi a matsayin kasuwanci",
        questions: [
          { objective: "O3", q: "Mene ne ban ruwa mai taki (fertigation)?", options: ["Fesa maganin ƙwari ta bututun ruwa", "Ƙona sharar shuka", "Rufe gidan gilashi da raga", "Ba da taki narkakke a ruwan ban ruwan ɗigo"], answer: 3, why: "Ban ruwa mai taki yana ciyar da shuke-shuke ta layukan ɗigo." },
          { objective: "O3", q: "Mitar EC tana nuna muku:", options: ["Zafin iska", "Yawan taki narkakke a ruwa", "Farashin tumatir", "Yawan ƙwari a kan kati"], answer: 1, why: "EC tana auna gishiri narkakke, wanda ke nuna ƙarfin taki." },
          { objective: "O4", q: "Wane ƙwaro ne haɗari na musamman ga tumatir na gidan gilashi?", options: ["Tuta absoluta", "Fara", "Beraye a rumbun hatsi", "Kaskon shanu"], answer: 0, why: "Tuta absoluta tana kai hari ga ganye, kara da 'ya'yan tumatir kuma tana yawaita da sauri a ƙarƙashin rufi." },
          { objective: "O4", q: "Katunan manne masu shuɗi a gidan gilashi suna kama galibi:", options: ["Farin ƙuda", "Spider mites", "Thrips", "Nematodes"], answer: 2, why: "Launin shuɗi yana jan hankalin thrips; rawaya yana jan hankalin farin ƙuda da aphids." },
          { objective: "O5", q: "Ribar farko ita ce:", options: ["Kuɗin shiga ban da kuɗin gudanarwa", "Farashin ginin", "Yawan shuke-shuke", "Kuɗin shiga tare da jari"], answer: 0, why: "Ribar farko tana nuna abin da ya rage daga sayarwa bayan kuɗin gudanarwa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Noma a Gidan Gilashi (Greenhouse) da Ƙarƙashin Kariya don Amfanin Gona Mai Daraja",
    questions: [
      { objective: "O1", q: "Noma a ƙarƙashin kariya yana nufin:", options: ["Noma da dare kawai", "Noman amfanin gona a ƙarƙashin rufi kamar gidan gilashi, ragar inuwa ko rami", "Amfani da karen gadi", "Noma ba tare da ruwa ba"], answer: 1, why: "Rufin yana kare amfanin gona daga ruwan sama, ƙanƙara da ƙwari da yawa." },
      { objective: "O1", q: "Wane yanayin mai saye ne ya fi tallafa wa gidan gilashi?", options: ["\"Zan sayar a kasuwa ko ta yaya\"", "Babu mai saye tukuna", "Maƙwabci zai iya sayen kaɗan", "Otal ya amince ya karɓi adadi ƙayyadadde kowane mako"], answer: 3, why: "Mai saye na kai a kai kowane mako ɗaya ne daga cikin sharuɗɗa biyar." },
      { objective: "O1", q: "Wata bita ta 2017 kan noma a ƙarƙashin kariya a Afirka kudu da Sahara ta gano cewa:", options: ["Bai dace da kowane yanayi ba kuma har yanzu yana buƙatar wasu hanyoyin sarrafa ƙwari", "Yana kawar da dukkan ƙwari", "Ba ya buƙatar ƙwarewa", "Koyaushe yana biya a lokacin noma ɗaya"], answer: 0, why: "Bitar ta gano iyakoki bisa yanayi, kuma ƙwarewa, taimako da kuɗi cikas ne." },
      { objective: "O1", q: "Wanne ne sharaɗin jari?", options: ["Mallakar tarakta", "Samun babban iyali", "Kuɗi don ginin, amfanin gona na farko da kuɗin gudanarwa ba tare da taɓa kuɗin abinci ba", "Gidan gilashi mai launi mai haske"], answer: 2, why: "Kuna buƙatar kuɗi don kafawa da gudanarwa ba tare da sa gidanku cikin haɗari ba." },
      { objective: "O2", q: "Me yasa za a kwatanta farashi layi bayan layi?", options: ["Don ganin abin da kowanne ya haɗa da abin da ya bari", "Don zaɓar farashi mafi tsawo", "Domin masu sayarwa suna son haka", "Ba shi da amfani"], answer: 0, why: "Farashi mafi araha zai iya barin ɗigo, horo ko kafawa." },
      { objective: "O2", q: "Wace ce alamar gargaɗi daga mai sayar da gidan gilashi?", options: ["Garanti a rubuce", "Shaidun manoma da za ku iya ziyarta", "Jeri bayyananne na abin da aka haɗa", "Tabbacin girbi da matsa muku ku biya yau"], answer: 3, why: "Tabbaci da matsa muku ku biya da sauri alamomi ne na alƙawuran da suka wuce gona da iri." },
      { objective: "O2", q: "Wane zaɓi ne hanya mafi araha ta farawa da koyo?", options: ["Babban gidan gilashi na ƙarfe", "Rami da ake shiga ko rami ƙasa-ƙasa", "Gidan gilashi na gilashi", "Rumbun sanyi"], answer: 1, why: "Rami ya fi araha kuma yana ba ku damar koyo kafin babban jari." },
      { objective: "O2", q: "Me ya kamata ku karɓa a rubuce kafin ku biya?", options: ["Lambar wayar mai sayarwa kawai", "Babu komai; amana ta isa", "Garanti, ranar kawowa da duk abin da aka haɗa", "Hoton mai sayarwa"], answer: 2, why: "Sharuɗɗa a rubuce suna kare ku idan wani abu ya lalace." },
      { objective: "O3", q: "Nau'o'in kokwamba na gidan gilashi da yawa:", options: ["Suna ba da 'ya'ya ba tare da ƙudan zuma ba", "Suna buƙatar ƙudan zuma a ciki", "Suna girma a lokacin sanyi kawai", "Ana shuka su daga yankan kara"], answer: 0, why: "An samar da kokwamba na gidan gilashi da yawa don su ba da 'ya'ya ba tare da pollination (zuba fure) ba." },
      { objective: "O3", q: "Yaushe ne lokaci mafi kyau na dasa 'ya'yan shuka?", options: ["Da tsakar rana a cikin rana mai ƙarfi", "Lokacin ruwan sama mai ƙarfi a waje", "Kafin 'ya'yan su yi saiwa", "A lokacin sanyin yamma, sannan a shayar da su"], answer: 3, why: "Sanyin yamma yana rage girgizar dasawa." },
      { objective: "O3", q: "Wane taki ake amfani da shi don ban ruwa mai taki?", options: ["Kowane taki mai ƙwaya", "Takin da ke narkewa a ruwa wanda aka yi don ban ruwa mai taki", "Taki na dabbobi sabo", "Farar ƙasa (lime)"], answer: 1, why: "Takin da ke narkewa gaba ɗaya ne kawai ke wucewa ta layukan ɗigo ba tare da toshe su ba." },
      { objective: "O4", q: "Iska mai zafi, marar motsi, mai danshi a ƙarƙashin rufi tana ƙarfafa galibi:", options: ["Cututtukan fungi kamar late blight da grey mould", "Saurin zuba fure", "Ƙarancin ƙwari", "Ƙarancin kuɗin kashewa"], answer: 0, why: "Danshi da jiƙaƙƙun ganye suna taimakawa cututtukan fungi su yaɗu." },
      { objective: "O4", q: "Me yasa ƙwarin da suka shiga gidan gilashi ke yawaita da sauri?", options: ["Leda tana ciyar da su", "Koyaushe sun fi girma", "Gidajen gilashi suna jawo ruwan sama", "Babu ruwan sama ko maƙiyan halitta da yawa a ciki da za su hana su"], answer: 3, why: "A ƙarƙashin rufi, abubuwan halitta da ke hana ƙwari sun yi kaɗan." },
      { objective: "O4", q: "Wace ce kyakkyawar dokar tsafta?", options: ["Bari baƙi daga wasu gonaki su shiga yadda suke so", "Bar 'ya'yan da suka faɗi a ƙasa", "Amfani da kwanon wanke takalma da sa ɗaya daga cikin ƙofofi biyu a rufe koyaushe", "Bar ramuka a raga don iska"], answer: 2, why: "Kwanon wanke takalma da ƙofa biyu suna hana ƙwari da cututtuka shiga." },
      { objective: "O4", q: "Idan ana buƙatar maganin ƙwari a gidan gilashi a Kenya, dole ya kasance:", options: ["An yi masa rajista da PCPB kuma ana amfani da shi kamar yadda takardar bayaninsa ta ce, da kayan kariya", "Kowane magani da maƙwabci ke da shi", "An gauraya shi da ƙarfi domin a ciki ne", "An fesa shi kafin tsinka kai tsaye"], answer: 0, why: "Magunguna masu rajista kawai, ana amfani da su kamar yadda takardar bayani ta ce, ne suka halatta kuma suke da aminci." },
      { objective: "O5", q: "Wanne ne kuɗin jari?", options: ["'Ya'yan shuka", "Ƙwadagon tsinka", "Ginin gidan gilashi da tsarin ɗigo", "Sufuri zuwa kasuwa"], answer: 2, why: "Ana biyan jari sau ɗaya don kafawa; sauran kuɗin gudanarwa ne." },
      { objective: "O5", q: "Jari 500,000; ribar farko 125,000 a shekara. Mene ne lokacin dawowar jari?", options: ["Shekara 2", "Shekara 6", "Shekara 10", "Shekara 4"], answer: 3, why: "500,000 / 125,000 = shekara 4." },
      { objective: "O5", q: "Kuɗin shiga 200,000 kuma kuɗin gudanarwa 120,000. Mene ne ribar farko?", options: ["320,000", "80,000", "120,000", "200,000"], answer: 1, why: "200,000 - 120,000 = 80,000." },
      { objective: "O5", q: "Me yasa za a gwada abin da zai faru idan farashi ya faɗi da kashi ɗaya cikin huɗu?", options: ["Domin farashin kayan lambu yana hawa da sauka kuma dole ku san ko har yanzu za ku iya dawo da jari", "Don lissafin ya yi kyau", "Domin farashi ba ya taɓa canjawa", "Mai sayarwa ne ya buƙaci haka"], answer: 0, why: "Tsarin da ke aiki a farashi mafi kyau kawai yana da haɗari." },
      { objective: "O5", q: "Wane canji ne zai iya ƙarfafa tsarin kasuwanci mai rauni?", options: ["Ƙara cin bashi don sayen babban gidan gilashi", "Yin watsi da dawowar jari", "Zaɓar amfanin gona marar mai saye", "Kwangila da mai saye, gini ƙarami ko zagaye biyu a shekara"], answer: 3, why: "Ƙarancin jari, farashi mai dorewa ko ƙarin zagaye suna ƙara riba ko rage lokacin dawowar jari." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [1, 2, 5, 6, 9, 10, 11, 13, 16] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe na tsarin kasuwancin ku sake dubawa tare da masanin noma ko mai ba da shawara amintacce kafin ku zuba jari.",
    criteria: [
      { name: "Shin ya dace da ni?", objective: "O1", notYet: "Sharuɗɗa biyar ba su nan, ko an amsa su ba tare da dalilai ba.", meets: "An amsa ruwa, kasuwa, ƙwarewa, jari da yanayi kowanne da e ko a'a tare da dalili, kuma an rubuta shawara bayyananniya.", exceeds: "Sharaɗin da ya rage yana da tsarin gyara, kamar mai saye da aka ambata da suna ko gwajin ruwa." },
      { name: "Gini da binciken masu sayarwa", objective: "O2", notYet: "Farashi ɗaya kawai, ko an karɓi alƙawuran mai sayarwa ba tare da dubawa ba.", meets: "Aƙalla farashi uku an kwatanta su layi bayan layi, an nemi shaidu, kuma garanti da abin da aka haɗa suna a rubuce.", exceeds: "An ziyarci manoma biyu masu ba da shaida kuma an rubuta ainihin sakamakonsu." },
      { name: "Tsarin amfanin gona da ban ruwa mai taki", objective: "O3", notYet: "Babu jadawalin amfanin gona, ko tsarin ciyarwa hasashe ne.", meets: "An zaɓi amfanin gona da irinsa bisa buƙatar mai saye, tare da ranakun renon 'ya'ya, dasawa da girbi, da tsarin ciyarwa daga masanin noma ko gwaji tare da binciken ɗigo na yau da kullum.", exceeds: "Tsarin ya haɗa da adadin EC da pH da masanin noma ya saita da takardar bayanai ta yau da kullum." },
      { name: "Tsarin yanayi, ƙwari da tsafta", objective: "O4", notYet: "Babu tsari, ko ana magance ƙwari ta fesa magani kawai.", meets: "Tsarin yau da kullum da na mako-mako don tagogin iska, bincike, tarkuna, yanke ganye, shara da dokokin shiga, da magunguna masu rajista kawai ana amfani da su kamar yadda takardar bayani ta ce.", exceeds: "An liƙa tsarin a ƙofa kuma an bi shi an rubuta shi aƙalla makonni biyu." },
      { name: "Lissafi da dawowar jari", objective: "O5", notYet: "Babu lissafi, ko ribar farko ko dawowar jari ba daidai ba ne.", meets: "Jari, kuɗin gudanarwa, kuɗin shiga, ribar farko da dawowar jari daidai ne, an kwatanta su da tsawon rayuwar rufin, kuma an gwada faɗuwar farashi da kashi ɗaya cikin huɗu.", exceeds: "An kuma gwada ƙarancin girbi da asarar amfanin gona, kuma an jera canje-canjen da za su ƙarfafa tsarin." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka kwatanta aƙalla farashi uku kuma suka ziyarci manoma masu ba da shaida kafin sayen gini (binciken biyo baya)",
      "Masu koyo da suka yanke shawarar kada su zuba jari tukuna, ko su fara ƙarami, saboda tsarin kasuwancinsu bai dawo da jari ba (sakamako mai kyau, ba gazawa ba)",
      "Masu koyo masu gini da suka ce suna da tsarin mako-mako da ƙarancin asarar amfanin gona saboda ƙwari ko cuta bayan zagaye ɗaya",
      "Masu koyo da suka bayar da ainihin ribar farkonsu a kowane zagaye idan aka kwatanta da tsarin kasuwancinsu"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya mai na'urar lissafi, ko takarda, alƙalami da na'urar lissafi mai sauƙi",
      "Farashi a rubuce daga masu sayar da gidan gilashi, ragar inuwa ko rami na yankin (masu koyo suna tattara su a lokacin kwas ɗin)",
      "Bayanan tuntuɓar masanin noma ko jami'in faɗakarwar noma da mai saye da mai koyo zai iya magana da shi",
      "Zaɓi: ziyarar gidan gilashi mai aiki, ma'aunin zafi, katunan manne da mitar EC don nuna wa ƙungiyar",
      "Kusan minti 60 zuwa 90 gaba ɗaya don darussa, ƙananan gwaje-gwaje da jarabawa, tare da lokacin tattara farashi da magana da masu saye"
    ],
    facilitatorNotes: [
      "Ku yi gwajin farko tare, sannan ku ziyarci gidan gilashi ko ragar inuwa mai aiki idan za ku iya, ku tambayi mai shi game da ainihin kuɗin kashewa da matsaloli.",
      "Ku tunatar da masu koyo cewa kowane adadin kuɗi a kwas ɗin misali ne na ƙirƙira; dole su yi amfani da nasu farashi da farashin masu saye.",
      "Kada ku ba da shawarar wani mai sayar da gidan gilashi, kaya ko girke-girken taki; ku koya wa masu koyo yadda ake kwatantawa da dubawa maimakon haka.",
      "Ku ɗauki \"ba yanzu ba\" ko \"fara ƙarami\" a matsayin sakamako mai kyau idan lissafi bai yi aiki ba; yana ceton iyalai daga bashi.",
      "Kada ku taɓa ba da shawarar wani maganin ƙwari ko yawansa; ku nuna wa masu koyo yadda ake duba jerin hukumar ƙasa da karanta takardar bayanin magani.",
      "Ku ba da maki ga kowane tsarin kasuwanci da ma'aunin rubric, ku duba kowane lissafi tare da mai koyo kafin ya yi magana da mai ba da bashi ko mai sayarwa."
    ]
  }
};
