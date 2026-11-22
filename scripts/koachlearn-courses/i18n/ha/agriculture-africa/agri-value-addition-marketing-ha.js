"use strict";

// Koach Learn course, Hausa (ha) translation of agriculture-africa/agri-value-addition-marketing.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const NAFDAC_FOOD = { name: "NAFDAC (Najeriya): Rajistar abinci, Sashen Abincin da aka yi a Najeriya (Made in Nigeria Food Division) (ƙanana da matsakaita/manyan masana'antu)", url: "https://www.nafdac.gov.ng/food/food-registration/" };
const GH_FDA_REG = { name: "Hukumar Abinci da Magunguna ta Ghana (Ghana FDA): Rajistar kaya", url: "https://fdaghana.gov.gh/services-2/product-registration/" };
const GH_FDA_PLS = { name: "Hukumar Abinci da Magunguna ta Ghana: Tsarin Ba da Lasisi a Hankali (Progressive Licensing Scheme) don ƙananan masu sarrafawa (Pink, Yellow, Green)", url: "https://fdaghana.gov.gh/programmes/progressive-licensing-scheme-2/" };
const KEBS = { name: "Hukumar Ƙa'idoji ta Kenya (KEBS): Alamar Ƙa'ida (Standardization Mark, takardar shaidar kaya) da alamomin inganci", url: "https://www.kebs.org" };
const CODEX_HYGIENE = { name: "Codex Alimentarius (FAO/WHO): Kwamitin Tsabtar Abinci da Ƙa'idodin Gama-gari na Tsabtar Abinci (CXC 1-1969)", url: "https://codex.fao.org/codex-committees/general-subject-committees/CCFH" };
const FAO_ZECC = { name: "Shafin FAO TECA/STI: Ɗakin sanyaya kayan lambu ba tare da wutar lantarki ba (Zero Energy Cooling Chamber)", url: "https://sti-portal.fao.org/innovations/zero-energy-cooling-chamber-vegetables" };

module.exports = {
  id: "agri-value-addition-marketing-ha",
  lang: "ha",
  translationOf: "agri-value-addition-marketing",
  category: "Agriculture (Africa)",
  name: "Ƙara Darajar Amfanin Gona, Kunshi da Kasuwancin Noma",
  skills: "Zaɓar kayan da za a ƙara wa daraja, Lissafin kuɗin kaya da sa farashi, Sarrafa kaya cikin tsabta, Kunshi da lakabi, Kiyaye kaya lafiya a hanya, Sayarwa kai tsaye ga masu saye",
  outcome: "mayar da amfanin gona ɗaya ko nono daga gonarku zuwa kaya da aka kunshe kuma aka sa masa lakabi: zaɓar shi, lissafin kuɗinsa, yin sa cikin tsabta, gano rajistar da yake buƙata, da ba da shi kai tsaye ga shago, makaranta, otal ko mai saye ta intanet a farashin da ke kawo riba.",
  about: [
    "Amfanin gona danye yakan yi araha lokacin girbi, lokacin da kowa ke sayar da abu ɗaya. Mayar da shi kaya kamar busasshen mangwaro, garin rogo, man gyaɗa (groundnut paste) ko yogot (yoghurt) yana iya kawo ƙarin kuɗi, ya daɗe bai lalace ba, kuma ya kai ga sababbin masu saye. Wannan kwas na manoma ƙanana ne, ƙungiyoyin mata da matasa, matasan 'yan kasuwar noma da jami'an faɗakarwar noma (extension workers) a Kenya, Najeriya, Ghana, ƙasashen Afirka ta Yamma masu Faransanci da sauran Afirka.",
    "Za ku zaɓi kaya ɗaya da ya dace da gonarku da wani mai saye na gaske, ku lissafa kuɗin kunshi ɗaya da farashin da za ku sa, ku shirya sarrafawa cikin tsabta, ku zana lakabi, ku gano wace hukumar ƙasa ce dole ta amince da shi, ku tsara yadda za ku kiyaye shi lafiya a hanyar zuwa wurin mai saye, sannan ku shirya gabatarwar sayarwa kai tsaye.",
    "Yana ginuwa kan kwas ɗin Kula da Amfanin Gona Bayan Girbi da Ajiya, da kwas ɗin \"Ƙungiyoyin Haɗin Gwiwa na Manoma da Kai Amfanin Gona Kasuwa\", don haka ba ya maimaita ajiya, busarwa ko sayarwa tare a matsayin ƙungiya. Kowane darasi yana ɗaukar kusan minti biyar kuma yana ƙarewa da aikin \"Gwada yanzu\" don gonarku. Duk lambobin kuɗi misalai ne kawai, ba farashi na gaske ba."
  ],
  finalTask: "Ku rubuta tsarin kaya mai shafi ɗaya don kaya ɗaya da kuka ƙara wa daraja daga gonarku: kayan da mai saye, takardar lissafin kuɗi mai kuɗi da farashin kowane kunshi, jerin dubawar tsabta don yin sa, daftarin lakabi tare da hukumar ƙasa da dole ku tuntuɓa, yadda za ku kiyaye shi lafiya a hanya, da gajeriyar gabatarwa ga mai saye ɗaya kai tsaye.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manoma ƙanana da masu haɓaka, ma'aikatan gona, ƙungiyoyin mata da matasa, matasan 'yan kasuwar noma da jami'an faɗakarwar noma a Kenya, Najeriya, Ghana, ƙasashen Afirka ta Yamma masu Faransanci da sauran Afirka. Da yawa sun riga sun sayar da amfanin gona danye a bakin gona ko kasuwar yankin, kuma suna son farashi mafi kyau.",
    startingPoint: "Suna iya shuka da girbe amfanin gona ko samar da nono, kuma suna iya ajiye shi da busar da shi da kyau (duba Kula da Amfanin Gona Bayan Girbi da Ajiya). Wasu sun riga sun yi ɗan kaya kaɗan don iyali ko maƙwabta, ba tare da lissafin kuɗi, lakabi ko rajista ba.",
    gap: "Ana sa farashin kayan gona da yawa ta hanyar tsammani, ana yin su ba tare da tsarin tsabta ba, ana sayar da su ba tare da lakabi mai kyau ba, kuma ana ba da su ga dillalai masu biya a makare ko kaɗan. Manoma suna buƙatar zaɓar kayan da mai saye ke so da gaske, su lissafa kuɗinsa, su yi shi lafiya, su sa masa lakabi, su duba amincewar ƙasa da yake buƙata, kuma su sayar kai tsaye, don ƙara daraja ya kawo kuɗi maimakon asara.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; masu koyo da yawa Turanci harshensu na biyu ne",
      "Na'urori: waya mai sauƙi ko wayar zamani, sau da yawa ana rabawa; na'urar lissafi; takarda",
      "Kuɗi: ƙaramin jari; a fara da ɗan kaya kaɗan da kayan aiki masu araha",
      "Dokoki: dokokin rajistar abinci da lakabi sun bambanta a kowace ƙasa kuma suna canjawa; masu koyo suna tuntuɓar hukumar ƙasarsu",
      "Lokaci: darussa na minti 4 zuwa 6 da suka dace da aikin gona"
    ],
    prerequisites: "Yana da amfani: Kula da Amfanin Gona Bayan Girbi da Ajiya, da \"Ƙungiyoyin Haɗin Gwiwa na Manoma da Kai Amfanin Gona Kasuwa\". Ƙari, ninkawa da raba lambobi na asali."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku manyan amfanin gonarku ko nono da abin da masu saye kusa da ku ke nema", action: "zaɓar kaya ɗaya da za a ƙara wa daraja da mai saye da za a sayar masa", standard: "bayan kwatanta aƙalla zaɓi biyu kan buƙata, kayan farko, kayan aiki da dokoki" },
    { id: "O2", condition: "Idan aka ba ku kuɗaɗen kaya na zubi ɗaya", action: "lissafin kuɗin kunshi ɗaya da sa farashin sayarwa", standard: "kuna ƙidaya kayan farko, kunshi, makamashi, aiki, sufuri da asara, tare da farashin da ke rufe kowane kuɗi da ƙarin riba" },
    { id: "O3", condition: "Don kayan da kuka zaɓa, daga sarrafawa zuwa mai saye", action: "rubuta jerin dubawar tsabta da sarkar sanyi", standard: "wanda ya ƙunshi hannaye, ruwa, wuraren aiki, kayan farko, kunshewa da kiyaye kayan lafiya a ajiya da sufuri" },
    { id: "O4", condition: "Idan aka ba ku kayanku da ƙasarku", action: "rubuta daftarin lakabi da ambaton hukumar ƙasa da dole ta amince da kayan", standard: "tare da sunan kaya, abubuwan da ke ciki, nauyin ciki, mai yin sa da hanyar tuntuɓa, lambar zubi da ranaku, da tunatarwa a duba dokokin hukumar na yanzu" },
    { id: "O5", condition: "Idan aka ba ku shago, makaranta, otal ko mai saye ta intanet ɗaya", action: "shirya gabatarwar sayarwa kai tsaye da sharuɗɗa a rubuce", standard: "da ke faɗin kayan, farashi, yawa, isarwa, ranar biya da yadda ake magance ƙorafi" }
  ],
  chapters: [
    {
      name: "Babi na 1: Yin kaya mai kawo riba",
      lessons: [
        {
          title: "Zaɓar kayan da za a ƙara wa daraja",
          objectives: ["O1"],
          minutes: 5,
          goal: "Kwatanta kaya biyu da za a ƙara wa daraja don gonarku, ku zaɓi ɗaya mai mai saye na gaske.",
          text: [
            "Ƙara daraja yana nufin yin wani abu ga amfanin gonarku da zai sa mai saye ya biya ƙari: busarwa, niƙa, soyawa, markaɗa, tsimawa (fermenting), tsaftacewa, rarraba zuwa kunshi, ko kunshewa da kyau kawai. Mangwaro sabo da ke ruɓewa cikin mako ɗaya yana iya zama busasshen mangwaro da ke daɗewa watanni. Rogo yana iya zama gari ko kwaki (gari), gyaɗa tana iya zama man gyaɗa (paste), nono kuma yana iya zama yogot.",
            "Ku fara da mai saye, ba da na'ura ba. Ku tambayi shaguna, masu dafa abinci a makarantu, otal-otal da 'yan kasuwa kusa da ku abin da suke saya, nawa, sau nawa, a wane girman kunshi da kuma a wane farashi. Kayan da babu wanda ke nema kusa da ku haɗari ne.",
            "Sannan ku duba abubuwa huɗu: buƙata (wa zai saya kuma nawa), kayan farko (ko ku ko maƙwabtanku kuna da isasshe, duk shekara ko a lokacin damina kawai), kayan aiki da ƙwarewa (ko za ku iya farawa kaɗan, misali da na'urar busarwa ta hasken rana ko injin niƙa na haya), da dokoki (kayan nono da nama sun fi haɗari kuma yawanci suna buƙatar amincewa fiye da busasshen gari). Ku kwatanta aƙalla zaɓi biyu kafin ku zaɓa."
          ],
          steps: ["Ku jera kaya biyu ko uku da za ku iya yi daga amfanin gonarku ko nononku.", "Ku tambayi aƙalla masu saye uku abin da suke saya, nawa kuma a wane farashi.", "Ku ba kowane kaya maki kan buƙata, kayan farko, kayan aiki da ƙwarewa, da dokoki.", "Ku zaɓi wanda ya fi samun maki kuma yana da mai saye da aka sani da suna."],
          words: [["Ƙara daraja (value addition)", "canja ko kunshe amfanin gonarku don mai saye ya biya ƙari a kansa."], ["Tsawon rayuwar kaya (shelf life)", "tsawon lokacin da kaya ke zama lafiya kuma mai kyau don ci."], ["Mai saurin lalacewa (perishable)", "kayan da ke lalacewa da sauri, kamar nono, yogot ko tumatir sabo."]],
          slides: [
            { title: "Ma'anar ƙara daraja", bullets: ["Busarwa, niƙa, markaɗa, soyawa, tsimawa ko kunshe amfanin gonarku", "Mangwaro zuwa busasshen mangwaro; rogo zuwa gari ko kwaki", "Gyaɗa zuwa man gyaɗa; nono zuwa yogot"] },
            { title: "Ku fara da mai saye", bullets: ["Ku tambayi shaguna, masu dafa abincin makaranta, otal-otal da 'yan kasuwa", "Abin da suke saya, nawa, sau nawa", "Girman kunshi da farashin da suke biya"] },
            { title: "Ku ba kowane zaɓi maki", bullets: ["Buƙata: wa ke saya kuma nawa", "Kayan farko: ko akwai isasshe, kuma a waɗanne watanni", "Kayan aiki da ƙwarewa; dokoki (nono ya fi haɗari)"] }
          ],
          tryIt: "Ku zaɓi kaya biyu da za ku iya yi. Ku tambayi masu saye uku kusa da ku game da kowanne, sannan ku ba su maki kan buƙata, kayan farko, kayan aiki da dokoki. Ku rubuta kayan da kuka zaɓa da mai sayen da za ku nufa.",
          youCanNow: "kwatanta kayan da aka ƙara wa daraja kan buƙata, kayan farko, kayan aiki da dokoki, da zaɓar ɗaya mai mai saye na gaske.",
          quickCheck: [
            { objective: "O1", q: "Kuna son ƙara wa mangwaronku daraja. Me za ku fara yi?", options: ["Ku sayi babbar na'urar busarwa bashi", "Ku kwaikwayi abin da maƙwabcinku ke yi", "Ku tambayi masu saye kusa da ku abin da suke saya da farashinsa", "Ku yi iyakar abin da za ku iya, ku nemi masu saye daga baya"], answer: 2, why: "Farawa da masu saye na gaske yana nuna ko akwai buƙata kafin ku kashe kuɗi." },
            { objective: "O1", q: "Wane kaya ne yawanci ke buƙatar ƙarin amincewa da kulawa don yin sa lafiya?", options: ["Yogot da aka yi da nono", "Garin rogo", "Yankakken busasshen mangwaro", "Wake mai tsabta da aka rarraba a kunshi"], answer: 0, why: "Kayan nono suna lalacewa da sauri kuma suna iya ɗaukar ƙwayoyin cuta, don haka sun fi haɗari kuma yawanci ana tsaurara dokokinsu." }
          ]
        },
        {
          title: "Lissafin kuɗi da sa farashin kayanku",
          objectives: ["O2"],
          minutes: 6,
          goal: "Lissafa kuɗin kunshi ɗaya ku sa farashin da ke rufe kowane kuɗi da ƙarin riba.",
          text: [
            "Ƙananan masu sarrafa kaya da yawa suna asara ba tare da sun sani ba, domin suna ƙidaya kayan farko kawai. Ku ƙidaya kowane kuɗin zubi ɗaya: kayan farko, kunshi da lakabi, makamashi (mai, gawayi, wutar lantarki, kuɗin niƙa), ruwa, aiki (har da lokacinku), sufuri, da kuɗaɗe kamar na rajista ko harajin kasuwa da aka raba a tsawon shekara.",
            "Sannan ku ƙidaya asara: wasu kaya suna lalacewa, suna zubewa ko ana ba da su a matsayin samfuri. Ku raba jimlar kuɗin zubi da yawan kunshin da za ku iya sayarwa da gaske. Misali (lambobin misalai ne kawai): wata ƙungiya a Ghana tana yin man gyaɗa. Gyaɗa GHS 400, tuluna da lakabi GHS 150, niƙa da mai GHS 50, aiki GHS 100, sufuri GHS 50: jimla GHS 750. Suna cika tuluna 50 amma suna tsammanin sayar da 48, don haka kowane tulu yana kashe kusan GHS 15.60.",
            "Farashinku dole ya rufe kuɗin kowane kunshi da ƙarin riba don ajiya da gyare-gyare. Sannan ku kwatanta farashin da na irin kayan a shaguna. Idan farashinku ya fi nasu nesa, ku nemi hanya mafi araha ta yin sa, ƙaramin kunshi, ko mai sayen da ke biyan inganci. Wannan hanya tana aiki don busasshen mangwaro a KES, kwaki (gari) a NGN ko yogot a XOF."
          ],
          steps: ["Ku jera kowane kuɗin zubi ɗaya, har da aikinku.", "Ku ƙidaya kunshin da za ku iya sayarwa da gaske bayan asara.", "Ku raba jimlar kuɗi da kunshin da za ku iya sayarwa: wannan shi ne kuɗin kowane kunshi.", "Ku ƙara riba don samun farashinku.", "Ku kwatanta shi da irin kayan a shaguna, ku daidaita tsarinku idan ya cancanta."],
          words: [["Kuɗin kowane kunshi (cost per unit)", "abin da kuke kashewa don yin kunshi ɗaya."], ["Riba (margin)", "kuɗin da ke ragewa daga kowane sayarwa bayan an biya kuɗaɗe."], ["Zubi (batch)", "zagaye ɗaya na yin kaya, misali tuluna 50 da aka yi a rana ɗaya."]],
          slides: [
            { title: "Ku ƙidaya kowane kuɗin zubi", bullets: ["Kayan farko, kunshi, lakabi", "Mai, wutar lantarki, niƙa, ruwa", "Aiki (har da naku), sufuri, kuɗaɗe"] },
            { title: "Kuɗin kowane kunshi", bullets: ["Jimlar kuɗin zubi / kunshin da za ku iya sayarwa da gaske", "Misali: GHS 750 / tuluna 48 = kusan GHS 15.60", "Lambobin misalai ne kawai"] },
            { title: "Sa farashi", bullets: ["Kuɗin kowane kunshi + riba = farashi", "Ku duba irin kayan a shaguna", "Ya yi tsada? Hanya mafi araha, ƙaramin kunshi ko wani mai saye"] }
          ],
          tryIt: "Ku yi takardar lissafin kuɗi don zubi ɗaya na kayan da kuka zaɓa. Ku jera kowane kuɗi, kunshin da kuke tsammanin sayarwa, kuɗin kowane kunshi da farashin da za ku sa. Ku kwatanta shi da irin kaya ɗaya a shago.",
          youCanNow: "yin takardar lissafin kuɗi, gano kuɗin kunshi ɗaya da sa farashin da ke rufe shi tare da riba.",
          quickCheck: [
            { objective: "O2", q: "Wane kuɗi ne ƙananan masu sarrafa kaya suka fi mantawa?", options: ["Kayan farko", "Aikinsu da asara", "Farashi a shago", "Sunan kayan"], answer: 1, why: "Lokacinku da kunshin da suka lalace ko aka ba da su samfuri kuɗi ne na gaske, kuma barin su yana ɓoye asara." },
            { objective: "O2", q: "Zubi ɗaya yana kashe KES 6,000 kuma za ku iya sayar da kunshi 40. Nawa ne kuɗin kowane kunshi?", options: ["KES 240", "KES 600", "KES 1,500", "KES 150"], answer: 3, why: "Kuɗin kowane kunshi shi ne jimlar kuɗin zubi raba da kunshin da aka sayar: 6,000 / 40 = KES 150." }
          ]
        },
        {
          title: "Tsabta da lafiyar abinci lokacin sarrafawa",
          objectives: ["O3"],
          minutes: 6,
          goal: "Rubuta jerin dubawar tsabta da ke kiyaye kayanku lafiya yayin da kuke yin sa.",
          text: [
            "Mai saye ba zai dawo ba, kuma hukuma tana iya dakatar da sayarwarku, idan kaya ya sa wani rashin lafiya. Ƙa'idodin Gama-gari na Tsabtar Abinci na Codex Alimentarius na duniya suna rufe dukkan sarkar, daga gona har zuwa mutumin da ke cin abincin. Hukumar abinci ta ƙasarku tana amfani da irin waɗannan ra'ayoyin idan tana duba ku.",
            "Abubuwan asali: ruwa mai tsabta kuma lafiyayye; wanke hannu da sabulu kafin aiki da bayan bayan gida; kada a yi aiki lokacin rashin lafiya; a rufe gashi da raunuka; wuraren aiki, kayan aiki da kwantena masu tsabta; a ware kayan farko daga kayan da aka gama; a hana dabbobi, ƙwari da ɓeraye shiga; da wuri mai tsabta kuma busasshe don ajiye kunshin.",
            "Ku fara da kayan farko masu tsabta. Kada ku taɓa sarrafa gyaɗa ko hatsi masu fumfuna (mould), domin suna iya ɗaukar aflatoxin (duba Kula da Amfanin Gona Bayan Girbi da Ajiya). Nonon yin yogot dole a dafa shi kuma a sarrafa shi da hanyar da aka gwada daga jami'in faɗakarwar kiwon shanu ko hukumar ƙa'idoji, kuma a ajiye shi a sanyi. Ku rubuta matakanku don a yi kowane zubi iri ɗaya, kuma ku ba kowane zubi lamba da rana."
          ],
          steps: ["Ku rubuta matakan yin kayanku daga kayan farko zuwa kunshin da aka rufe.", "A kowane mataki, ku rubuta abin da zai iya sa ya zama mara lafiya (datti, ƙwayoyin cuta, fumfuna, ƙwari).", "Ku rubuta dokar tsabta da ke hana shi.", "Ku ba kowane zubi lamba da rana, ku rubuta wanda ya yi shi."],
          words: [["Lafiyar abinci (food safety)", "kiyaye abinci daga ƙwayoyin cuta, guba da datti da ke iya sa mutane rashin lafiya."], ["Gurɓacewa (contamination)", "lokacin da datti, ƙwayoyin cuta ko sinadarai suka shiga abinci."], ["Lambar zubi (batch number)", "lambar da ke kan kowane kunshi da ke faɗa muku lokacin da yadda aka yi shi, don ku gano matsala."]],
          slides: [
            { title: "Me yasa tsabta take da muhimmanci", bullets: ["Abokin ciniki ɗaya da ya yi rashin lafiya zai iya kawo ƙarshen kasuwancinku", "Ƙa'idodin tsabta na Codex: daga gona zuwa faranti", "Masu dubawa suna neman waɗannan abubuwan asali"] },
            { title: "Abubuwan asali", bullets: ["Ruwa lafiyayye; wanke hannu da sabulu", "Kada a yi aiki lokacin rashin lafiya; rufe gashi da raunuka", "Kayan aiki masu tsabta; ware danye da wanda aka gama"] },
            { title: "Ku fara da tsabta, ku rubuta", bullets: ["Kada ku taɓa amfani da hatsi ko gyaɗa masu fumfuna", "Nono: hanyar da aka gwada, a ajiye a sanyi", "Matakai iri ɗaya a kowane zubi; lambar zubi da rana"] }
          ],
          sources: [CODEX_HYGIENE],
          tryIt: "Ku rubuta matakan yin kayanku. Kusa da kowane mataki, ku rubuta abu ɗaya da zai iya sa ya zama mara lafiya da dokar da ke hana shi. Wannan shi ne jerin dubawar tsabtarku.",
          youCanNow: "rubuta jerin dubawar tsabta don kayanku da ba kowane zubi lamba da rana.",
          quickCheck: [
            { objective: "O3", q: "Wani ma'aikaci yana zawo a ranar sarrafawa. Me ya kamata ya faru?", options: ["Ya nisanci sarrafawa har sai ya warke", "Ya yi aiki amma ya wanke hannu sau ɗaya", "Ya yi aiki da safar hannu kawai", "Ya kunshe kaya maimakon ya gauraya"], answer: 0, why: "Ma'aikata marasa lafiya suna iya kai ƙwayoyin cuta cikin abinci, don haka kada su taɓa shi har sai sun warke." },
            { objective: "O3", q: "Wasu gyaɗa a cikin buhu suna da fumfuna. Me za ku yi?", options: ["Ku soya su da tsawo don kashe fumfunar", "Ku gauraya su da gyaɗa masu kyau", "Ku cire su kuma kada ku yi man gyaɗa da su", "Ku sayar da su a farashi mai rahusa"], answer: 2, why: "Fumfuna tana iya ɗaukar aflatoxin, wadda dafawa ba ta cirewa, don haka kada a yi amfani da gyaɗa mai fumfuna." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Yin kaya mai kawo riba",
        questions: [
          { objective: "O1", q: "Wanne ne misalin ƙara daraja?", options: ["Sayar da rogo sabo a bakin gona", "Niƙa rogo zuwa gari da kunshe shi", "Shuka ƙarin rogo", "Barin rogo a ƙasa ya ƙara daɗewa"], answer: 1, why: "Niƙa da kunshewa suna mayar da amfanin gona kayan da mai saye ke biyan ƙari a kansa." },
          { objective: "O1", q: "Kuna da nono a lokacin damina kawai. Wace dubawa ce ta fi muhimmanci kafin ku zaɓi yogot?", options: ["Launin lakabin", "Sunan alamar kasuwancinku", "Abin da abokanku ke so", "Ko kuna da isasshen kayan farko duk shekara da mai saye a gare shi"], answer: 3, why: "Samun kayan farko da buƙata ne ke yanke ko kayan zai iya riƙe mai saye." },
          { objective: "O2", q: "Mene ne kuɗin kowane kunshi?", options: ["Jimlar kuɗin zubi raba da kunshin da za ku iya sayarwa da gaske", "Farashin shago ban da aikinku", "Kuɗin kayan farko kawai", "Duk abin da maƙwabcinku ke karɓa"], answer: 0, why: "Raba dukkan kuɗaɗen zubi da kunshin da ake iya sayarwa yana ba da ainihin kuɗin kunshi ɗaya." },
          { objective: "O3", q: "Wace ce dokar tsabta ta asali don sarrafawa?", options: ["Bari kaji su yi yawo a wurin aiki", "Amfani da kowane ruwa da kuke da shi", "Wanke hannu da sabulu kafin aiki da bayan bayan gida", "Ajiye danye da wanda aka gama tare"], answer: 2, why: "Wanke hannu da sabulu yana hana ƙwayoyin cuta daga hannaye shiga abinci." },
          { objective: "O3", q: "Me yasa za a ba kowane zubi lamba da rana?", options: ["Don kunshin ya yi kyau", "Don gano da gyara matsala idan zubi ɗaya ya lalace", "Domin masu saye suna son lambobi", "Don ƙara farashi"], answer: 1, why: "Lambar zubi tana bar ku gano kunshin da suka fito daga zubin da ke da matsala da lokacin da aka yi shi." }
        ]
      }
    },
    {
      name: "Babi na 2: Kunshewa, lakabi da sayarwa kai tsaye",
      lessons: [
        {
          title: "Kunshi, lakabi, alamar kasuwanci da rajista",
          objectives: ["O4"],
          minutes: 6,
          goal: "Rubuta daftarin lakabi don kayanku ku gano hukumar ƙasa da dole ta amince da shi.",
          text: [
            "Kunshi mai kyau yana kiyaye kaya lafiya kuma yana sa masu saye su amince da shi. Ku zaɓi kunshin da aka yarda da shi don abinci (food-grade) da ke hana iska, ruwa da ƙwari shiga: jakunkuna da aka rufe don busasshen mangwaro da gari, tuluna masu tsabta masu murfi mai matsewa don man gyaɗa, da kofuna masu tsabta da aka rufe don yogot. Alamar kasuwancinku (brand) ita ce sunanku, tambarinku (logo) da alƙawarinku, misali 'mai tsabta, na gida, babu ƙarin sukari'. Ku sa ta mai sauƙi kuma iri ɗaya a kowane kunshi.",
            "Lakabi yawanci yana nuna: sunan kaya, abubuwan da ke ciki, nauyin ciki ko yawansa, sunan mai yin sa da hanyar tuntuɓa, lambar zubi, ranar da aka yi shi da ranar ƙarewa (use-by ko best-before), yadda ake ajiye shi, da duk wata lambar rajista ko alama. Ƙasarku tana iya buƙatar ƙari, don haka ku duba kafin ku buga lakabi da yawa.",
            "Yawancin abincin da aka kunshe suna buƙatar amincewa kafin a sayar da su a shaguna. A Kenya, KEBS tana ba da Alamar Ƙa'ida (Standardization Mark) ga kayan da suka cika wata Ƙa'idar Kenya. A Najeriya, NAFDAC tana yin rajistar abincin da aka yi a gida ta Sashen Abincin da aka yi a Najeriya (Made in Nigeria Food Division), tare da hanyoyi don ƙananan masu yin kaya da kuma matsakaita da manya. A Ghana, Hukumar Abinci da Magunguna (FDA) tana yin rajistar kaya, kuma Tsarin Ba da Lasisi a Hankali (Progressive Licensing Scheme) yana bar ƙananan masu yin kaya sosai (mutum ɗaya zuwa biyar) su cika dokoki mataki-mataki. A Côte d'Ivoire, ku tuntuɓi hukumar ƙa'idoji ta ƙasa CODINORM; sauran ƙasashe suna da nasu. Dokoki, fom da kuɗaɗe suna canjawa, don haka ku tuntuɓi hukumar kafin ku fara."
          ],
          steps: ["Ku zaɓi kunshin abinci (food-grade) da ke hana iska, ruwa da ƙwari shiga.", "Ku rubuta sunan alamar kasuwancinku da alƙawari na layi ɗaya.", "Ku rubuta daftarin lakabi: suna, abubuwan da ke ciki, nauyin ciki, mai yin sa da hanyar tuntuɓa, lambar zubi, ranaku, ajiya.", "Ku nemo hukumar ƙasarku (KEBS, NAFDAC, Ghana FDA, CODINORM ko wata) ku tambayi abin da kayanku ke buƙata.", "Ku buga lakabi ne kawai bayan kun san dokokin."],
          words: [["Alamar kasuwanci (brand)", "suna, tambari da alƙawari da ke sa masu saye su gane kayanku kuma su amince da shi."], ["Nauyin ciki (net weight)", "nauyin abincin da ke cikin kunshi, ba tare da ƙidaya kunshin ba."], ["Rajista (registration)", "amincewa ta hukuma daga hukumar ƙasa cewa za a iya sayar da abinci."], ["Ranar mafi kyau (best-before date)", "ranar da kaya ke riƙe da ingancinsa mafi kyau har zuwa ita idan an ajiye shi kamar yadda lakabi ya faɗa."]],
          slides: [
            { title: "Kunshin da ke kare kaya", bullets: ["Na abinci (food-grade); yana hana iska, ruwa da ƙwari", "Jakunkuna da aka rufe, tuluna masu tsabta, kofuna da aka rufe", "Alamar kasuwanci mai sauƙi iri ɗaya a kowane kunshi"] },
            { title: "Abin da lakabi yawanci ke nunawa", bullets: ["Suna, abubuwan da ke ciki, nauyin ciki", "Sunan mai yin sa da hanyar tuntuɓa", "Lambar zubi, ranar yi, ranar ƙarewa (best-before ko use-by)", "Ajiya; lambar rajista ko alama"] },
            { title: "Wa ke amincewa (ku duba dokokin yanzu)", bullets: ["Kenya: Alamar Ƙa'ida ta KEBS (Standardization Mark)", "Najeriya: rajistar NAFDAC (har da hanyar ƙananan masu yin kaya)", "Ghana: FDA; Tsarin Ba da Lasisi a Hankali don ƙananan masu yin kaya sosai"] },
            { title: "Kafin ku buga", bullets: ["Côte d'Ivoire: CODINORM; sauran ƙasashe: hukumarsu", "Dokoki, fom da kuɗaɗe suna canjawa", "Ku fara tambayar hukumar, sannan ku buga lakabi"] }
          ],
          sources: [KEBS, NAFDAC_FOOD, GH_FDA_REG, GH_FDA_PLS],
          tryIt: "Ku rubuta daftarin lakabin kayanku a takarda ko da kayan aiki kyauta kamar Canva. Sannan ku nemo shafin intanet ko ofishin hukumar abinci ta ƙasarku, ku rubuta tambayoyin da za ku yi mata game da rajista da lakabi.",
          youCanNow: "rubuta daftarin lakabin kaya da ambaton hukumar ƙasa da za ku tuntuɓa kafin ku sayar a shaguna.",
          quickCheck: [
            { objective: "O4", q: "Wane abu ne lakabin abinci yawanci ke buƙata?", options: ["Lambar sirrin banki (PIN) ta manomi", "Farashin gyaɗa danye", "Hoton gonar", "Lambar zubi da ranar mafi kyau (best-before)"], answer: 3, why: "Lambar zubi da ranaku suna bar masu saye da masu dubawa su san lokacin da aka yi shi da tsawon lokacin da zai daɗe." },
            { objective: "O4", q: "Wani ƙaramin mai sarrafa kaya a Ghana mai ma'aikata uku yana son amincewar FDA. Wane shiri ne zai iya taimaka masa ya cika dokoki mataki-mataki?", options: ["Alamar Ƙa'ida (Standardization Mark)", "Tsarin Ba da Lasisi a Hankali (Progressive Licensing Scheme)", "GLOBALG.A.P.", "Sashen Abincin da aka yi a Najeriya"], answer: 1, why: "Tsarin Ba da Lasisi a Hankali na Ghana FDA na ƙananan masu yin kaya ne na mutum ɗaya zuwa biyar." }
          ]
        },
        {
          title: "Kiyaye kaya lafiya a hanya: sarkar sanyi da sufuri",
          objectives: ["O3"],
          minutes: 5,
          goal: "Tsara yadda kayanku zai zauna lafiya ba tare da lalacewa ba daga ma'ajiyarku zuwa mai saye.",
          text: [
            "Ana iya yin kaya daidai sosai kuma duk da haka ya lalace a hanya. Kayan da ke saurin lalacewa kamar yogot da ruwan 'ya'yan itace sabo suna buƙatar sarkar sanyi (cold chain): dole su zauna a sanyi a kowane mataki, daga yin su har zuwa firjin mai saye. Idan suka yi zafi a hanya, ƙwayoyin cuta suna girma kuma kayan zai iya sa mutane rashin lafiya, ko da yana kama da lafiya.",
            "Don gajerun tafiye-tafiye, ku yi amfani da akwatin sanyi mai tsabta (cool box) tare da ƙanƙara, kuma ku kai da sassafe. Ku yarda da mai saye cewa zai sa shi a firji nan take. Kada ku taɓa sake daskarewa ko sake sayar da yogot da ya yi zafi. Busassun kaya kamar garin rogo, busasshen mangwaro da man gyaɗa ba sa buƙatar sanyi, amma dole su zauna a bushe, a rufe, a inuwa, kuma nesa da mai, sinadarai da ƙwari.",
            "Ku tsara tafiyar: wa zai ɗauka, da me (babur, matatu, okada, bas ko babbar mota), tsawon lokacin da za ta ɗauka, da yadda za a kare kunshi daga matsewa, rana da ruwan sama. Sanyaya mai araha kamar ɗakin sanyaya ba tare da wutar lantarki ba na FAO (zero energy cooling chamber) yana iya ajiye amfanin gona cikin sanyi kafin ku sarrafa shi. Ku rubuta matakan sarkar sanyi da sufurinku a jerin dubawar tsabtarku."
          ],
          steps: ["Ku yanke ko kayanku mai saurin lalacewa ne (yana buƙatar sanyi) ko busasshe (yana buƙatar bushewa da rufewa).", "Don kayan sanyi: akwatin sanyi, ƙanƙara, kai wa da wuri, firjin mai saye nan take.", "Don busassun kaya: a rufe, a inuwa, nesa da sinadarai da ƙwari.", "Ku tsara wa zai ɗauka, ta yaya, tsawon lokaci, da yadda za a kare kunshi.", "Ku ƙara waɗannan matakai a jerin dubawar tsabtarku."],
          words: [["Sarkar sanyi (cold chain)", "kiyaye kaya a sanyi a kowane mataki daga yin sa har zuwa sayar da shi."], ["Akwatin sanyi (cool box)", "akwati mai kariya daga zafi da ke kiyaye abubuwa a sanyi da ƙanƙara."]],
          slides: [
            { title: "Sarkar sanyi don kayan da ke saurin lalacewa", bullets: ["Yogot da ruwan 'ya'yan itace dole su zauna a sanyi har ƙarshe", "Zafi a hanya = ƙwayoyin cuta suna girma, ko da yana kama da lafiya", "Kada ku taɓa sake sayar da yogot da ya yi zafi"] },
            { title: "Gajerun tafiye-tafiye, ƙaramin kuɗi", bullets: ["Akwatin sanyi mai tsabta tare da ƙanƙara", "Ku kai da sassafe", "Mai saye ya sa shi a firji nan take"] },
            { title: "Busassun kaya", bullets: ["A bushe, a rufe kuma a inuwa", "Nesa da mai, sinadarai da ƙwari", "A kare kunshi daga matsewa da ruwan sama"] }
          ],
          sources: [FAO_ZECC],
          tryIt: "Ku rubuta tafiyar kayanku daga ma'ajiyarku zuwa mai sayenku: wa zai ɗauka, ta yaya, tsawon lokaci, da abin da zai kiyaye shi a sanyi ko a bushe ba tare da lalacewa ba. Ku ƙara shi a jerin dubawar tsabtarku.",
          youCanNow: "tsara sarkar sanyi ko hanyar sufurin busassun kaya da ke kiyaye kayanku lafiya har mai saye ya karɓa.",
          quickCheck: [
            { objective: "O3", q: "Yogot ɗinku ya zauna a rana awa uku a cikin bas da ta yi jinkiri. Me za ku yi?", options: ["Ku sayar da shi da sauri a farashi mai rahusa", "Ku mayar da shi firji ku sayar gobe", "Kada ku sayar da shi; ba shi da lafiya yanzu", "Ku ɗanɗana shi ku sayar idan yana da kyau"], answer: 2, why: "Yogot da ya yi zafi yana iya girma ƙwayoyin cuta da ba za ku iya gani ko ɗanɗanawa ba, don haka kada a sayar da shi." },
            { objective: "O3", q: "Me busasshen mangwaro ya fi buƙata a hanyar zuwa mai saye?", options: ["A ajiye shi a bushe, a rufe kuma a inuwa", "A ajiye shi a daskare", "A ajiye shi a sararin iska", "A ajiye shi kusa da gwangwanin mai"], answer: 0, why: "Busassun kaya suna lalacewa idan suka jiƙe, suka yi zafi sosai ko suka kusanci sinadarai, ba don suna da ɗumi ba." }
          ]
        },
        {
          title: "Sayarwa kai tsaye: shaguna, makarantu, otal-otal da intanet",
          objectives: ["O5"],
          minutes: 6,
          goal: "Shirya gabatarwa da sharuɗɗa a rubuce don sayar da kayanku kai tsaye ga mai saye ɗaya.",
          text: [
            "Ba kowane dillali ne mugu ba: wasu 'yan kasuwa suna biya daidai kuma suna ɗaukar amfanin gona da ba za ku iya ɗauka ba. Amma ku lura da alamun cin zarafi: ma'aunin da aka yi wa magudi, farashin da aka canja bayan isarwa, biyan da ke zuwa bayan watanni ko ba ya zuwa kwata-kwata, da 'ku saya yanzu, ku biya daga baya' daga baƙi da suke ɓacewa daga baya. Sayarwa kai tsaye tana iya ba ku farashi mafi kyau da abokin ciniki na dindindin.",
            "Kowane mai saye yana son abubuwa daban. Shagunan yankin da manyan shaguna (supermarkets) suna son lakabi, samar da kaya akai-akai, kuma wani lokaci suna sayarwa ta hanyar amana (consignment: suna biya ne kawai bayan kayan ya sayu), wanda haɗari ne. Makarantu da asibitoci suna saya da yawa a kan jadawali kuma sau da yawa suna buƙatar ƙimar farashi (quote), takardar neman biya (invoice) da wani lokaci rajista. Otal-otal da gidajen abinci suna son inganci iri ɗaya kowane lokaci. Masu saye ta intanet a WhatsApp, Facebook ko kasuwar intanet suna son hotuna masu kyau, farashi da isarwa da sauri.",
            "Gabatarwa mai kyau gajeriya ce: mene ne kayan, me yasa yake da kyau (mai tsabta, na gida, sabo), farashi, girman kunshi, nawa za ku iya samarwa da sau nawa, da isarwa. Sannan ku yarda da sharuɗɗa a rubuce, ko da a saƙo mai sauƙi: yawa, farashi, ranar isarwa, ranar biya da hanyar biya (misali kuɗin waya, mobile money), da abin da zai faru idan kunshi ya lalace. Ku ajiye kwafi. Kada ku taɓa raba lambar sirri (PIN) ko kalmar sirri (password) da kowane mai saye. Don babban kwangila ko na dogon lokaci, ku nemi mai ba da shawara da kuka amince da shi ya fara karanta shi."
          ],
          steps: ["Ku zaɓi mai saye ɗaya: shago, makaranta, otal ko masu saye ta intanet.", "Ku rubuta gajeriyar gabatarwa: kaya, me yasa yake da kyau, farashi, girman kunshi, samarwa, isarwa.", "Ku kawo samfuri da lakabinku.", "Ku yarda da sharuɗɗa a rubuce: yawa, farashi, isarwa, ranar biya da hanyar biya, kunshin da suka lalace.", "Ku ajiye kwafi, ku rubuta kowace isarwa da kowane biya."],
          words: [["Dillali (middleman)", "ɗan kasuwa da ke saya daga manoma ya sayar wa wasu."], ["Sayarwa ta amana (consignment)", "shago yana karɓar kayanku kuma yana biyan ku ne kawai bayan sun sayu."], ["Gabatarwa (pitch)", "gajeren tayi mai sarari ga mai saye."], ["Takardar neman biya (invoice)", "lissafin kuɗi a rubuce da ke neman mai saye ya biya kayan da aka kai."]],
          slides: [
            { title: "Ku lura da cin zarafi", bullets: ["Ma'aunin magudi; canja farashi bayan isarwa", "Biya bayan watanni ko ba ya zuwa", "Baƙi da ke cewa 'za mu biya daga baya' suka ɓace"] },
            { title: "Abin da kowane mai saye ke so", bullets: ["Shaguna: lakabi, samarwa akai-akai; haɗarin sayarwa ta amana", "Makarantu: da yawa, jadawali, ƙimar farashi da takardar biya", "Otal: inganci iri ɗaya kowane lokaci; intanet: hotuna, isarwa da sauri"] },
            { title: "Gajeriyar gabatarwa", bullets: ["Mene ne shi kuma me yasa yake da kyau", "Farashi, girman kunshi, nawa kuma sau nawa", "Isarwa; ku kawo samfuri da lakabin"] },
            { title: "Ku rubuta sharuɗɗa", bullets: ["Yawa, farashi, ranar isarwa", "Ranar biya da hanyar biya; kunshin da suka lalace", "Ku ajiye kwafi; kada ku taɓa raba PIN"] }
          ],
          tryIt: "Aikin ƙarshe: ku rubuta tsarin kayanku mai shafi ɗaya. Ku haɗa kayan da mai saye, takardar lissafin kuɗi da farashinku, jerin dubawar tsabta da sarkar sanyi, daftarin lakabinku da hukumar ƙasa, da gajeriyar gabatarwa tare da sharuɗɗan da za ku nemi mai saye ya yarda da su a rubuce.",
          youCanNow: "gabatar da kayanku ga mai saye kai tsaye da yarda da sharuɗɗa masu sarari a rubuce game da farashi, isarwa da biya.",
          quickCheck: [
            { objective: "O5", q: "Wani shago ya ce zai karɓi man gyaɗarku ta hanyar amana (consignment). Mene ne haɗarin?", options: ["Dole ku fara biyan shagon", "Ana biyan ku ne kawai bayan ya sayu, kuma kunshin da ba su sayu ba za su iya dawowa", "Shagon zai canja lakabinku", "Babu haɗari ko kaɗan"], answer: 1, why: "A sayarwa ta amana ku ne kuke ɗaukar haɗarin har kayan ya sayu, don haka ku yarda kan tsawon lokaci da abin da zai faru da kunshin da ba su sayu ba." },
            { objective: "O5", q: "Wani otal ya yarda ya riƙa sayen yogot kowane mako. Me ya kamata ku yarda a rubuce?", options: ["Sunan otal ɗin kawai", "Lambar sirrin (PIN) kuɗin wayarku", "Babu komai; musafaha ya isa", "Yawa, farashi, ranar isarwa, ranar biya da abin da zai faru da kunshin da suka lalace"], answer: 3, why: "Sharuɗɗa a rubuce kan yawa, farashi, isarwa da biya suna hana rikici daga baya." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Kunshewa, lakabi da sayarwa kai tsaye",
        questions: [
          { objective: "O4", q: "Wace hukuma ce ke ba da Alamar Ƙa'ida (Standardization Mark) ga kaya a Kenya?", options: ["NAFDAC", "Ghana FDA", "KEBS", "CODINORM"], answer: 2, why: "KEBS, Hukumar Ƙa'idoji ta Kenya, ita ce ke ba da Alamar Ƙa'ida." },
          { objective: "O4", q: "Yaushe ya kamata ku buga lakabi masu yawa?", options: ["Bayan kun duba abin da hukumar ƙasarku ke buƙata", "Kafin ku zaɓi kayan", "Kafin ku yi magana da kowane mai saye", "Sai bayan mai saye ya yi ƙorafi"], answer: 0, why: "Dokokin lakabi sun bambanta a kowace ƙasa kuma suna canjawa, don haka ku fara dubawa don kada ku ɓata lakabi." },
          { objective: "O3", q: "Wane kaya ne ke buƙatar sarkar sanyi?", options: ["Garin rogo", "Busasshen mangwaro", "Man gyaɗa a cikin tulu da aka rufe", "Yogot"], answer: 3, why: "Yogot yana saurin lalacewa kuma dole ya zauna a sanyi daga yin sa har zuwa mai saye." },
          { objective: "O5", q: "Wace ce alamar gargaɗi ta dillali mai cin zarafi?", options: ["Biya a ranar da aka yarda", "Canja farashi bayan kun kai kaya", "Auna kaya a gabanku", "Ba da rasiti"], answer: 1, why: "Canja farashi bayan isarwa yana mayar da asarar kanku kuma yana karya amana." },
          { objective: "O5", q: "Me ya kamata ya kasance a gajeriyar gabatarwa ga mai dafa abincin makaranta?", options: ["Labarin rayuwarku", "Farashin maƙwabcinku", "Kaya, farashi, girman kunshi, samarwa da isarwa", "Lambar sirrin bankinku (PIN)"], answer: 2, why: "Mai saye yana buƙatar sanin abin da kuke bayarwa, a wane farashi, nawa da yadda zai iso." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Ƙara Darajar Amfanin Gona, Kunshi da Kasuwancin Noma",
    questions: [
      { objective: "O1", q: "Mene ne ma'anar ƙara daraja?", options: ["Canja ko kunshe amfanin gona don masu saye su biya ƙari", "Shuka sabon amfanin gona", "Sayarwa a bakin gona", "Cin bashin kuɗi don iri"], answer: 0, why: "Busarwa, niƙa, sarrafawa ko kunshewa da kyau na iya kawo farashi mafi girma." },
      { objective: "O1", q: "Me ya kamata ya fara jagorantar zaɓin kayanku?", options: ["Na'ura mafi araha da za ku samu", "Abin da ke da kyau a kan lakabi", "Abin da masu saye kusa da ku ke saya da gaske", "Abin da ya shahara a talabijin"], answer: 2, why: "Kaya mai mai saye na gaske ba shi da haɗari kamar wanda aka yi da fata kawai." },
      { objective: "O1", q: "Waɗanne abubuwa huɗu ne ya kamata ku ba kowane zaɓin kaya maki a kai?", options: ["Launi, ɗanɗano, ƙamshi, girma", "Buƙata, kayan farko, kayan aiki da ƙwarewa, dokoki", "Farashi, alamar kasuwanci, tambari, taken talla", "Ruwan sama, rana, iska, ƙasa"], answer: 1, why: "Waɗannan huɗu suna nuna ko za ku iya yin sa, sayar da shi, kuma ku yi haka bisa doka." },
      { objective: "O1", q: "Bishiyoyin mangwaronku suna 'ya'ya watanni biyu a shekara. Me hakan ke nufi ga busasshen mangwaro?", options: ["Ba za ku iya yin busasshen mangwaro ba", "Dole ku sayar da shi duka sabo", "Farashi ba shi da muhimmanci", "Ku tsara kayan farko: ku saya daga maƙwabta ko ku yi isasshe don sayarwa tsawon shekara"], answer: 3, why: "Kayan farko na lokaci-lokaci yana shafar tsawon lokacin da za ku iya samar wa mai saye." },
      { objective: "O2", q: "Wane kuɗi ne ya kamata ya kasance a takardar lissafin kuɗinku?", options: ["Kayan farko kawai", "Lokacin aikinku", "Kuɗin sufurin mai saye zuwa gida", "Kuɗin makarantar maƙwabcinku"], answer: 1, why: "Aikinku kuɗi ne na gaske; barin sa yana ɓoye ko kayan yana kawo riba." },
      { objective: "O2", q: "Zubin kwaki (gari) ɗaya yana kashe NGN 60,000 kuma za ku iya sayar da buhu 120. Nawa ne kuɗin kowane buhu?", options: ["NGN 500", "NGN 200", "NGN 1,200", "NGN 7,200"], answer: 0, why: "60,000 raba da buhu 120 shi ne NGN 500 a kowane buhu." },
      { objective: "O2", q: "Ta yaya za ku sa farashinku?", options: ["Ku kwaikwayi farashi mafi ƙanƙanta a kasuwa", "Ku karɓi abin da mai saye na farko ya bayar", "Kuɗin kowane kunshi da riba, sannan ku duba farashin shaguna", "Ku sa farashi ɗaya da na amfanin gona danye"], answer: 2, why: "Farashi dole ya rufe dukkan kuɗaɗe tare da riba kuma ya yi ma'ana ga masu saye." },
      { objective: "O2", q: "Farashinku ya fi na irin kayan a shaguna nesa. Mene ne mataki mai kyau na gaba?", options: ["Ku haƙura nan take", "Ku ƙara farashin", "Ku ɓoye farashin", "Ku nemi hanya mafi araha, ƙaramin kunshi ko mai sayen da ke biyan inganci"], answer: 3, why: "Canja kuɗin yi, girman kunshi ko mai saye na iya sa kayan ya yi gogayya." },
      { objective: "O3", q: "Wanne ne ɓangare na jerin dubawar tsabta?", options: ["Wanke hannu da sabulu kafin aiki", "Barin dabbobi a wurin aiki", "Ajiye danye da wanda aka gama tare", "Duk ruwan da za ku samu"], answer: 0, why: "Wanke hannu da sabulu yana hana ƙwayoyin cuta shiga abinci." },
      { objective: "O3", q: "Me yasa kada ku taɓa yin man gyaɗa da gyaɗa mai fumfuna?", options: ["Suna da nauyi sosai", "Suna iya ɗaukar aflatoxin, wadda dafawa ba ta cirewa", "Suna ɓata tulun", "Masu saye ba sa son launin"], answer: 1, why: "Aflatoxin guba ce da ke ɓoye wadda soyawa ba ta lalatawa." },
      { objective: "O3", q: "Ana kai yogot a akwatin sanyi tare da ƙanƙara da sassafe. Wannan misalin:", options: ["Alamar kasuwanci ne", "Sayarwa ta amana ne", "Sarkar sanyi ne", "Rajista ne"], answer: 2, why: "Kiyaye kaya mai saurin lalacewa a sanyi a kowane mataki shi ne sarkar sanyi." },
      { objective: "O3", q: "Ta yaya ya kamata garin rogo ya tafi wurin mai saye?", options: ["A buɗaɗɗun buhuna cikin ruwan sama", "Kusa da mai da sinadarai", "A daskare", "A bushe, a rufe, a inuwa kuma nesa da ƙwari"], answer: 3, why: "Busassun kaya suna lalacewa idan suka jiƙe ko suka gurɓace, don haka dole su zauna a bushe kuma a kare su." },
      { objective: "O4", q: "Wane abu ne yawanci ke kan lakabin abinci?", options: ["Abubuwan da ke ciki da nauyin ciki", "Lambar sirrin (PIN) manomi", "Sunan mai saye", "Farashin taki"], answer: 0, why: "Abubuwan da ke ciki da nauyin ciki suna faɗa wa masu saye abin da ke ciki da yawansa." },
      { objective: "O4", q: "A Najeriya, wace hukuma ce ke yin rajistar abincin da aka kunshe da aka yi a gida?", options: ["KEBS", "Ghana FDA", "CODINORM", "NAFDAC"], answer: 3, why: "NAFDAC tana yin rajistar abincin da aka yi a Najeriya, har da na ƙananan masu yin kaya." },
      { objective: "O4", q: "Mene ne alamar kasuwanci (brand)?", options: ["Wani nau'in tulu", "Suna, tambari da alƙawari da masu saye ke ganewa", "Lasisin gwamnati", "Lambar zubi"], answer: 1, why: "Alamar kasuwanci tana taimaka wa masu saye su gane kayanku kuma su amince da shi." },
      { objective: "O4", q: "Dokokin rajistar kayanku ba su da sarari. Me za ku yi?", options: ["Ku sayar duk da haka ku jira", "Ku tambayi ɗan kasuwa ra'ayinsa", "Ku tuntuɓi hukumar abinci ko ta ƙa'idoji ta ƙasarku ku duba dokokinta na yanzu", "Ku kwafi lambar rajistar wata alamar kasuwanci"], answer: 2, why: "Hukumar ƙasa ce kaɗai za ta iya faɗin abin da kayanku ke buƙata; dokoki da kuɗaɗe suna canjawa." },
      { objective: "O5", q: "Wane dalili ne mai kyau na sayarwa kai tsaye ga makaranta?", options: ["Odar kaya masu yawa akai-akai a kan jadawali", "Babu takardu kwata-kwata", "Makarantu ba sa biya a makare", "Babu buƙatar inganci"], answer: 0, why: "Makarantu sau da yawa suna saya da yawa akai-akai, amma suna buƙatar ƙimar farashi, takardar biya da inganci iri ɗaya." },
      { objective: "O5", q: "Me otal-otal yawanci suka fi damuwa da shi?", options: ["Samfuri kyauta kowane mako", "Launin tufafinku", "Girman gonarku", "Inganci iri ɗaya kowane lokaci"], answer: 3, why: "Otal-otal suna hidimar baƙi kullum kuma suna buƙatar inganci da samarwa iri ɗaya." },
      { objective: "O5", q: "Kuna sayar da busasshen mangwaro a WhatsApp. Me ke taimaka wa masu saye ta intanet?", options: ["Ba a nuna farashi ba", "Hotuna masu kyau, farashi da isarwa da sauri", "Neman lambar sirrin bankinsu (PIN)", "Dogayen saƙonnin murya"], answer: 1, why: "Masu saye ta intanet suna yanke shawara daga hotuna da farashi mai sarari, kuma suna sa ran isarwa da sauri." },
      { objective: "O5", q: "Wani mai saye ya yarda ta waya zai saya tuluna 50 kowane mako. Mene ne mataki mafi kyau na gaba?", options: ["Ku kai kaya ku yi fatan zai biya", "Ku tura masa lambar sirrin (PIN) kuɗin wayarku", "Ku rubuta yawa, farashi, ranar isarwa da ranar biya a saƙo, ku ajiye kwafi", "Ku jira shi ya sa sharuɗɗa daga baya"], answer: 2, why: "Sharuɗɗa a rubuce, ko da a saƙo, suna kare ɓangarorin biyu idan aka sami rikici." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe na tsarin kayan ku sake gwadawa.",
    criteria: [
      { name: "Kaya da mai saye", objective: "O1", notYet: "An ambaci kaya ba tare da mai saye ba, ko ba a kwatanta zaɓin da wani zaɓi ba.", meets: "Kaya ɗaya da mai saye ɗaya da aka sani da suna, an zaɓe su bayan kwatanta zaɓi biyu kan buƙata, kayan farko, kayan aiki da dokoki.", exceeds: "Yana kuma nuna yadda za a samu kayan farko duk shekara, misali daga maƙwabta ko ƙungiya." },
      { name: "Takardar lissafin kuɗi da farashi", objective: "O2", notYet: "An ƙidaya kayan farko kawai, ko babu kuɗin kowane kunshi.", meets: "Kowane kuɗin zubi, har da aiki da asara, yana ba da kuɗin kowane kunshi da farashi mai riba.", exceeds: "An kwatanta farashi da na shaguna, kuma tsarin yana nuna abin da za a canja idan ya yi tsada." },
      { name: "Tsabta da sarkar sanyi", objective: "O3", notYet: "Babu matakai a rubuce, ko manyan haɗurra kamar wanke hannu, fumfuna ko kiyaye sanyi ba sa ciki.", meets: "Jerin dubawa ya ƙunshi ruwa, hannaye, wuraren aiki, kayan farko, kunshewa, lambobin zubi da sufuri lafiya.", exceeds: "Kowane mataki yana ambaton haɗarin da dokar, kuma wani zai iya bin sa ba tare da taimako ba." },
      { name: "Lakabi da rajista", objective: "O4", notYet: "Lakabin ba shi da abubuwan da ke ciki, nauyin ciki, hanyar tuntuɓa ko ranaku, ko ba a ambaci hukumar ƙasa ba.", meets: "Lakabin yana nuna suna, abubuwan da ke ciki, nauyin ciki, mai yin sa da hanyar tuntuɓa, lambar zubi, ranaku da ajiya, kuma ya ambaci hukumar da za a tuntuɓa.", exceeds: "Mai koyo ya tuntuɓi hukumar kuma ya rubuta abin da take buƙata da kuɗinsa." },
      { name: "Gabatarwa da sharuɗɗa", objective: "O5", notYet: "Babu gabatarwa, ko babu sharuɗɗa a rubuce kan farashi, isarwa da biya.", meets: "Gajeriyar gabatarwa tare da sharuɗɗa a rubuce: yawa, farashi, ranar isarwa, ranar biya da hanyar biya, kunshin da suka lalace.", exceeds: "An gabatar da shi ga mai saye na gaske, kuma mai koyo ya rubuta amsar." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka sayar da aƙalla zubi ɗaya na kayan da aka ƙara wa daraja cikin kwanaki 90 (binciken biyo baya)",
      "Masu koyo da suka ce sun sami farashi mafi girma a kowane kilo na amfanin gona danye fiye da sayar da shi danye (binciken biyo baya)",
      "Masu koyo da suka tuntuɓi ko suka yi rajista da hukumar abinci ko ta ƙa'idoji ta ƙasarsu",
      "Masu koyo da suka ce asara ta ragu lokacin girbi domin an sarrafa amfanin gona maimakon sayar da shi da araha"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya (wayar zamani tana da amfani) da na'urar lissafi",
      "Takarda da alƙalami don takardar lissafin kuɗi, jerin dubawar tsabta da lakabi",
      "Na zaɓi: kayan aikin zane kyauta kamar Canva don lakabi",
      "Samfurin amfanin gonarku danye da irin kaya daga shagon yankin don kwatantawa",
      "Kusan minti 90 gaba ɗaya, a gajerun zama, da lokacin ziyartar masu saye"
    ],
    facilitatorNotes: [
      "Ku raba masu koyo rukuni-rukuni bisa kaya (misali busasshen mangwaro, garin rogo, man gyaɗa, yogot) don su raba binciken masu saye da kuɗaɗe.",
      "Ku yi darasin lissafin kuɗi da zubi na gaske da ƙungiyar ta yi, ku bar masu koyo su duba lissafin juna.",
      "Ku gayyaci jami'i daga hukumar abinci ko ta ƙa'idoji ta ƙasa (KEBS, NAFDAC, Ghana FDA, CODINORM ko hukumar ƙasarku) don bayyana matakan rajista na yanzu; kada ku faɗi kuɗaɗe daga ƙwaƙwalwa.",
      "Ku yi zagayen tsabta na aiki a wurin sarrafa kaya na gaske, ku jaddada cewa kayan nono suna buƙatar hanyar da aka gwada da sarkar sanyi.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya; ku yi wasan kwaikwayon gabatarwa inda mai koyo ɗaya zai zama mai saye."
    ]
  }
};
