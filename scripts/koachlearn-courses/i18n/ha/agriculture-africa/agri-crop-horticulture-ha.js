"use strict";

// Koach Learn course, Hausa (ha) translation of agriculture-africa/agri-crop-horticulture.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const FAO_IPM = { name: "FAO: Haɗaɗɗen Tsarin Yaƙi da Ƙwari (IPM)", url: "https://www.fao.org/pest-and-pesticide-management/ipm/integrated-pest-management/en/" };
const FAO_FAMEWS = { name: "FAO: manhajar waya don taimakawa yaƙi da tsutsar sojoji (Fall Armyworm) a Afirka (FAMEWS)", url: "https://www.fao.org/newsroom/detail/FAO-launches-mobile-application-to-support-fight-against-Fall-Armyworm-in-Africa/en" };
const ICIPE_PUSHPULL = { name: "icipe: Fasahar push-pull tana dakatar da tsutsar sojoji", url: "https://www.icipe.org/news/icipe-push-pull-technology-halts-fall-armyworm-rampage" };
const PCPB = { name: "Pest Control Products Board (Hukumar Kayayyakin Yaƙi da Ƙwari, Kenya)", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "National Agency for Food and Drug Administration and Control (NAFDAC, Najeriya)", url: "https://www.nafdac.gov.ng" };
const KALRO = { name: "Kenya Agricultural and Livestock Research Organization (KALRO, Cibiyar Binciken Noma da Kiwo ta Kenya)", url: "https://www.kalro.org" };
const FAO_CSA = { name: "FAO: Littafin Noma Mai Jure Sauyin Yanayi (kula da ƙasa da ruwa)", url: "https://openknowledge.fao.org/3/a-i3484e.pdf" };

module.exports = {
  id: "agri-crop-horticulture-ha",
  lang: "ha",
  translationOf: "agri-crop-horticulture",
  category: "Agriculture (Africa)",
  name: "Noma Mai Ɗorewa na Amfanin Gona da Kayan Lambu",
  skills: "Dubawa da inganta lafiyar ƙasa, Shuka da iri mai kyau, tazara da lokaci daidai, Ciyar da amfanin gona da takin dabbobi, takin gargajiya (compost) da takin zamani, Leƙen gona da haɗaɗɗen tsarin yaƙi da ƙwari, Amfani da maganin ƙwari lafiya kuma bisa doka, Ban ruwa ga kayan lambu da kula da girbi",
  outcome: "tsarawa da gudanar da kakar noma ta amfanin gona na gona da ta lambun kayan lambu: shiryawa da ciyar da ƙasa, shuka da kyau, leƙen gona da yaƙi da ƙwari ta haɗaɗɗen tsari (IPM), ban ruwa ba tare da ɓata ruwa ba, da girbi da kula da amfanin gona don ya riƙe darajarsa.",
  about: [
    "Wannan kwas na ƙananan manoma ne, matasa masu fara noman kayan lambu, ƙungiyoyin mata da na matasa, da jami'an faɗakarwa kan aikin gona (extension officers) a Kenya, Najeriya da ko'ina a Afirka. Misalan su ne masara, wake, rogo da dawa a gona, da tumatir, kale (sukuma wiki) da albasa a lambun kayan lambu.",
    "Babi na 1 game da noman amfanin gona mai ƙarfi ne: fahimta da gwada ƙasarku, shuka da iri mai kyau a tazara da lokaci daidai, da ciyar da amfanin gona da haɗin takin dabbobi, takin gargajiya da takin zamani. Babi na 2 game da kare amfanin gona da kammala shi ne: leƙen gona da haɗaɗɗen tsarin yaƙi da ƙwari, amfani da maganin ƙwari lafiya kuma bisa doka, ban ruwa ga kayan lambu ba tare da ɓata ruwa ba, da girbi da kula da amfanin gona bayan girbi.",
    "Amfanin gona, ƙasa da ƙwari sun bambanta daga wuri zuwa wuri. Ku yi amfani da wannan kwas tare da jami'in faɗakarwarku, cibiyar bincike (kamar KALRO a Kenya, ko shirin bunƙasa aikin gona na jiharku a Najeriya) da shagon kayan gona (agrovet). Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku rubuta tsarin noma na kaka ɗaya don amfanin gona ɗaya na gona (misali rabin eka na masara da wake) da lambun kayan lambu ɗaya (misali kashi ɗaya cikin takwas na eka na tumatir ko kale): duba ƙasa da duk wani gwajin ƙasa, yadda za ku shirya da ciyar da ƙasa, iri da tazara, ranakun shuka, tsarin leƙen gona na kowane mako tare da manyan ƙwari da cututtukan da za ku sa ido a kansu da matakan IPM ɗinku, tsarin ban ruwa ga kayan lambu, da yadda za ku girbe, ku ware, ku ajiye, ku sayar.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Ƙananan manoma, matasa masu fara noman kayan lambu, ƙungiyoyin mata da na matasa, da jami'an faɗakarwa kan aikin gona a Kenya, Najeriya da ko'ina a Afirka, masu noman amfanin gona kamar masara, wake, rogo da dawa, da kayan lambu kamar tumatir, kale da albasa.",
    startingPoint: "Yawancinsu suna shuka da girbi kowace kaka, sau da yawa da irin da suka ajiye ko marar takardar shaida, takin zamani da aka watsa barkatai, da maganin ƙwari da aka saya a buɗe. Kaɗan ne suka taɓa yin gwajin ƙasa, leƙen gona bisa tsari, karanta cikakken bayanin kwalbar maganin ƙwari, ko tsara ban ruwa da kula da amfanin gona bayan girbi.",
    gap: "Ƙasa mara kyau, shuka mai cunkoso ko a makare, takin da ba a sa a wurin da ya dace ba, fesa magani ba tare da buƙata ba da asara bayan girbi suna rage amfani da kuɗin shiga, kuma amfani da maganin ƙwari ba lafiya ba yana cutar da iyalai da masu saye. Rubutaccen tsarin kaka bisa kyawawan hanyoyin noma yana taimaka wa manoma su ƙara amfani, su rage kashe kuɗi a kan kayan noma, su sayar da amfanin gona da ke riƙe darajarsa.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; ana bayanin kowace kalmar noma",
      "Na'urori: waya mai sauƙi da littafin rubutu; yawancin atisaye a gona ake yi",
      "Lokaci: gajerun darussa da suka dace da aikin gona da lokacin kaka",
      "Ƙasa, nau'in iri, yawan takin da ake sa da kayayyakin da aka yi wa rajista sun bambanta daga wuri zuwa wuri: masu koyo suna samun yawa da kayayyaki daga gwajin ƙasa, jami'in faɗakarwa ko bayanin kwalbar (label)",
      "Tsaron maganin ƙwari: ba a yin atisayen fesa magani a aji; masu koyo suna bin bayanin kwalbar da dokokin ƙasarsu"
    ],
    prerequisites: "Babu. Kwas ɗin \"Lafiyar Ƙasa da Ƙarfinta\" yana zurfafa kan ƙasa, kuma \"Sarrafa Ƙwari ta Hanyoyi Masu Haɗaka (IPM) da Yaƙi da Ƙwari Ba Tare da Sinadarai ba\" yana zurfafa kan ƙwari."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "A ɗaya daga cikin gonakinku", action: "duba lafiyar ƙasa a gona da bayanin yadda ake ɗaukar samfur mai kyau don gwajin ƙasa", standard: "kuna ambaton aƙalla alamu uku na ƙasa mai lafiya ko mara kyau" },
    { id: "O2", condition: "Don amfanin gona ɗaya na gona da kayan lambu ɗaya", action: "zaɓar iri mai takardar shaida ko kayan shuka masu tsabta, tazara, da ranar shuka ko dasawa", standard: "kowane zaɓi daga dillali, jami'in faɗakarwa ko bayanin da ke jikin fakitin iri" },
    { id: "O3", condition: "Don babban amfanin gonarku", action: "rubuta tsarin ciyarwa da ya haɗa takin gargajiya, shuke-shuken wake da takin zamani da aka sa a wurin da ya dace", standard: "an rubuta cewa yawan takin daga gwajin ƙasa ko jami'in faɗakarwa yake" },
    { id: "O4", condition: "Idan aka ba ku amfanin gona mai ƙwari ko cuta", action: "leƙa shi bisa tsari kowane mako, zaɓar matakan IPM, da amfani da maganin ƙwari da aka yi wa rajista bisa bayanin kwalbarsa kawai idan akwai dalili", standard: "kuna farawa da rigakafi da hanyoyin da ba na sinadarai ba" },
    { id: "O5", condition: "Don ƙaramin lambun kayan lambu", action: "tsara ban ruwa ba tare da ɓata ruwa ba ta digo (drip) ko gwangwanin ban ruwa, ciyawar rufe ƙasa (mulch) da lokaci daidai na rana", standard: "kuna duba danshin ƙasa kafin kowane ban ruwa" },
    { id: "O6", condition: "A lokacin girbi", action: "tsara yadda za a girbe, a ware, a busar, a ajiye amfanin gona don rage asara", standard: "da girma daidai, kulawa a hankali da ajiya lafiya ga kowane amfanin gona" }
  ],
  chapters: [
    {
      name: "Babi na 1: Noman amfanin gona mai ƙarfi",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ku san ƙasarku",
          minutes: 5,
          goal: "Duba lafiyar ƙasarku a gona da sanin lokaci da yadda ake samun gwajin ƙasa.",
          text: [
            "Ƙasa mai lafiya baƙa ce, mai sauƙin farfashewa, tana da ƙamshin ƙasa, tana da tsutsotsin ƙasa da saiwoyi masu zurfi, kuma tana shanye ruwan sama maimakon barin shi ya gudu. Ƙasa mara kyau tana da tauri, fara-fara ce, tana yin ɓawo bayan ruwan sama, ko ruwa yana tsayawa a kanta. Ku yi dubawa mai sauƙi a gona: ku haƙa rami mai zurfin ruwan fartanya, ku duba launi da layukan ƙasa, ku matse ɗan hannu na ƙasa, ku ƙirga tsutsotsin ƙasa, ku kuma lura inda ruwa ke gudu ko tsayawa bayan ruwan sama.",
            "Gwajin ƙasa yana faɗa muku abin da idanunku ba za su iya gani ba: tsamin ƙasa (pH) da manyan sinadaran abinci na shuka. Ƙasa da yawa a wuraren da ake samun ruwan sama mai yawa a Kenya da Najeriya tana da tsami, wanda ke kulle sinadaran abinci; ana iya ba da shawarar sa farar ƙasa (lime). Ku tambayi jami'in faɗakarwa, cibiyar bincike ko shagon kayan gona inda za ku sami gwajin ƙasa da yadda ake ɗaukar samfur mai kyau: ƙananan samfura da yawa daga ko'ina a gonar, a haɗa su wuri ɗaya, ba daga tulin taki ko wuraren da aka ƙone ba.",
            "Ku gina lafiyar ƙasa kowace kaka: ku ƙara takin gargajiya (takin dabbobi, compost, ragowar amfanin gona), ku riƙa rufe ƙasa, ku canja amfanin gona daga kaka zuwa kaka, kuma ku guji ƙone ragowar amfanin gona da noma ƙasa ba tare da buƙata ba."
          ],
          steps: ["Ku haƙa rami mai zurfin ruwan fartanya ku duba launi, layuka da saiwoyi.", "Ku matse ɗan hannu na ƙasa; ku ƙirga tsutsotsin ƙasa.", "Ku lura inda ruwa ke gudu ko tsayawa.", "Ku tambayi jami'in faɗakarwa ko shagon kayan gona inda za ku sami gwajin ƙasa.", "Ku ɗauki ƙananan samfura da yawa daga ko'ina a gonar ku haɗa su."],
          words: [["Lafiyar ƙasa", "ƙarfin ƙasa na tsiro da shuke-shuke masu ƙarfi, riƙe ruwa da tallafa wa rayuwa."], ["pH", "ma'aunin yawan tsami ko gishirin ƙasa (acid ko alkali); yawancin amfanin gona sun fi son ƙasa mai ɗan tsami zuwa tsaka-tsaki."], ["Takin gargajiya (organic matter)", "ruɓaɓɓun ragowar shuke-shuke da dabbobi a cikin ƙasa, kamar takin dabbobi da compost."], ["Sa farar ƙasa (liming)", "zuba farar ƙasa (lime) don rage tsamin ƙasa."]],
          slides: [
            { title: "Ƙasa mai lafiya", bullets: ["Baƙa, mai sauƙin farfashewa, ƙamshin ƙasa", "Tsutsotsin ƙasa, saiwoyi masu zurfi", "Tana shanye ruwan sama"] },
            { title: "Dubawa a gona", bullets: ["Rami mai zurfin fartanya: launi, layuka, saiwoyi", "Ku matse, ku ƙirga tsutsotsi", "Inda ruwa ke gudu ko tsayawa"] },
            { title: "Gwajin ƙasa", bullets: ["Yana nuna pH da sinadaran abinci", "Ƙasa mai tsami na iya buƙatar farar ƙasa", "Ƙananan samfura da yawa, a haɗa su"] },
            { title: "Ku gina ta kowace kaka", bullets: ["Takin dabbobi, compost, ragowar amfanin gona", "Ku rufe ƙasa, ku canja amfanin gona", "Kada ku ƙone"] }
          ],
          sources: [KALRO, FAO_CSA],
          tryIt: "Ku yi dubawar a gona ɗaya: ku haƙa, ku duba, ku matse, ku ƙirga tsutsotsin ƙasa, ku rubuta abin da kuka gani. Sannan ku nemi inda za ku sami gwajin ƙasa kusa da ku da nawa yake kashewa.",
          youCanNow: "duba lafiyar ƙasarku a gona da sanin yadda ake ɗaukar samfur don gwajin ƙasa.",
          quickCheck: [
            { objective: "O1", q: "Bayan ruwan sama, ruwa yana tsayawa a gonarku na kwanaki, kuma ƙasar fara-fara ce mai tauri. Me wannan yake nunawa?", options: ["Ƙasa mai lafiya sosai", "Ƙasa da ke buƙatar kulawa, kamar ƙarin takin gargajiya", "Ƙasa da ba ta buƙatar wani canji", "Ƙasa mai tsutsotsin ƙasa da yawa fiye da kima"], answer: 1, why: "Ƙasa mai lafiya baƙa ce mai sauƙin farfashewa kuma tana shanye ruwan sama; ruwa mai tsayawa da ƙasa fara mai tauri alamun ƙasa mara kyau ne." },
            { objective: "O1", q: "Kuna ɗaukar samfurin ƙasa. A ina za ku haƙa?", options: ["Kusa da tulin taki kaɗai", "Inda kuka ƙone ragowar amfanin gona kaɗai", "Wuri ɗaya a tsakiyar gonar", "Ƙananan wurare da yawa a ko'ina a gonar, a haɗa su"], answer: 3, why: "Ƙananan samfura da yawa da aka haɗa suna nuna dukan gonar; tulin taki da wuraren da aka ƙone suna ba da sakamako mara daidai." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Shuka daidai: iri, tazara da lokaci",
          minutes: 5,
          goal: "Shuka amfanin gona na gona da renon 'yan shukan kayan lambu da iri mai kyau, tazara da lokaci daidai.",
          text: [
            "Iri mai kyau shi ne hanya mafi araha ta ƙara amfani. Ku sayi iri mai takardar shaida (certified seed) na nau'in da ya dace da yankinku daga dillalin da aka yi wa rajista, ku duba kwanan wata da hatimin fakitin. Don rogo, ku yi amfani da yankan kara masu tsabta daga shuke-shuke masu lafiya, domin cututtukan ƙwayoyin cuta (virus) suna yaɗuwa ta yankan kara masu cuta.",
            "Tazara ce ke yanke yawan shuke-shuken da ke raba haske, ruwa da sinadaran abinci. Ku yi amfani da tazarar da aka ba da shawara don nau'in irinku da yankinku, misali tazarar layuka da ta tsakanin shuke-shuke don masara, da tazara mai faɗi a wurare masu ƙarancin ruwa. Giɓi da cunkoso duk suna rage amfani. Ku shuka da wuri da zarar damina ta kama da gaske kuma ƙasa ta jiƙe har ƙasa.",
            "Kayan lambu kamar tumatir, kale da albasa yawanci ana fara renon su a gandun shuka (nursery): gado mai tsawo da ruwa ke fita daga cikinsa, ko kwanukan renon shuka, da ƙasa mai tsabta, inuwa a farko, ban ruwa a hankali da kariya daga ƙwari. Ku taurara 'yan shukan ta hanyar ƙara musu rana da rage ruwa a hankali kafin dasa su, zai fi kyau a cikin sanyin yamma."
          ],
          steps: ["Ku sayi iri mai takardar shaida (ko yankan kara masu tsabta) na nau'in da ya dace.", "Ku yi amfani da tazarar da aka ba da shawara don nau'inku da yankinku.", "Ku shuka idan damina ta kama da gaske kuma ƙasa ta jiƙe.", "Ku reni 'yan shukan kayan lambu a gandun shuka mai tsabta da ruwa ke fita.", "Ku taurara 'yan shukan, sannan ku dasa su a sanyin yamma."],
          words: [["Iri mai takardar shaida", "irin da hukumar iri ta hukuma ta duba ingancinsa da nau'insa."], ["Tazara", "nisan da ke tsakanin layuka da tsakanin shuke-shuke."], ["Gandun shuka (nursery)", "ƙaramin wuri mai kariya inda ake renon 'yan shuka kafin a dasa su."], ["Taurarawa (hardening)", "saba wa 'yan shuka da yanayin gona a hankali kafin a dasa su."]],
          slides: [
            { title: "Iri mai kyau", bullets: ["Mai takardar shaida, ya dace da yankinku", "Dillalin da aka yi wa rajista; ku duba kwanan wata da hatimi", "Rogo: yankan kara masu tsabta daga shuke-shuke masu lafiya"] },
            { title: "Tazara da lokaci", bullets: ["Tazarar da aka ba da shawara don nau'inku", "Giɓi da cunkoso duk suna rage amfani", "Ku shuka idan damina ta kama da gaske"] },
            { title: "Gandun shukan kayan lambu", bullets: ["Gado mai tsawo, ruwa yana fita, ƙasa mai tsabta", "Inuwa a farko, ban ruwa a hankali", "Ku taurara, sannan ku dasa da yamma"] }
          ],
          sources: [KALRO],
          tryIt: "Don babban amfanin gonarku da kayan lambu ɗaya, ku rubuta: nau'in iri, inda za ku sayi iri mai takardar shaida, tazarar da aka ba da shawara (ku tambayi shagon kayan gona ko jami'in faɗakarwa), da ranar da kuke shirin shuka ko dasawa.",
          youCanNow: "shuka amfanin gona na gona da renon 'yan shukan kayan lambu da iri mai kyau, tazara da lokaci daidai.",
          quickCheck: [
            { objective: "O2", q: "Me yasa ya kamata a shuka rogo da yankan kara masu tsabta daga shuke-shuke masu lafiya?", options: ["Cututtukan ƙwayoyin cuta suna yaɗuwa ta yankan kara masu cuta", "Yankan kara masu tsabta suna tsiro ba tare da ruwa ba", "Shuke-shuke masu lafiya ba sa buƙatar tazara", "Yankan kara daga shuke-shuke marasa lafiya sun fi tsada"], answer: 0, why: "Cututtukan ƙwayoyin cuta na rogo suna yaɗuwa ta yankan kara masu cuta, don haka yankan kara masu tsabta daga shuke-shuke masu lafiya suna kare sabon amfanin gona." },
            { objective: "O2", q: "'Yan shukan tumatirinku sun shirya a gandun shuka. Me za ku yi kafin ku dasa su?", options: ["Ku ninka musu ruwa sau biyu", "Ku kai su cikin rana kai tsaye da tsakar rana", "Ku taurara su da ƙarin rana da ragin ruwa, sannan ku dasa su a sanyin yamma", "Ku yanke dukan ganyensu"], answer: 2, why: "Taurarawa tana shirya 'yan shuka don gona, kuma sanyin yamma yana rage girgizar dasawa." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ciyar da amfanin gona: takin dabbobi, compost da takin zamani",
          minutes: 6,
          goal: "Tsara yadda za ku ciyar da amfanin gona da sinadaran abinci na gargajiya da na zamani, a wurin da ya dace kuma a lokacin da ya dace.",
          text: [
            "Amfanin gona yana buƙatar nitrogen (N), phosphorus (P) da potassium (K), da ƙananan yawan wasu sinadaran abinci. Takin dabbobi da compost suna ƙara wasu sinadaran abinci kuma, abin da ke da muhimmanci daidai da haka, takin gargajiya da ke riƙe ruwa kuma yana ciyar da halittun ƙasa. Shuke-shuken wake kamar wake (beans), wake na gida (cowpea) da gyaɗa suna ƙara nitrogen a ƙasa ta saiwoyinsu.",
            "Takin zamani yana ba da sinadaran abinci da sauri kuma da yawan da aka sani. Tsarin da aka saba don masara shi ne takin shuka mai phosphorus, sannan ƙarin takin nitrogen (topdressing) idan amfanin gona ya kai tsawon gwiwa, amma kayayyaki da yawan da ya dace sun dogara ne da gwajin ƙasarku da shawarwarin yankinku. Sa ɗan kaɗan kusa da shuka (a cikin ramin shuka) yana amfani da takin zamani fiye da watsa shi ko'ina.",
            "Ku haɗa duka biyun: takin gargajiya tare da takin zamani da aka sa a wurin da ya dace yawanci suna ba da amfani mafi kyau kuma mai ɗorewa fiye da kowanne shi kaɗai. Ku yi compost daga ragowar amfanin gona, takin dabbobi da sharar kicin, kuna juya shi kuma kuna jiƙa shi. Kada ku taɓa sa sabon taki mai zafi ko takin zamani kai tsaye a kan iri."
          ],
          steps: ["Ku ƙara takin dabbobi ko compost kafin shuka ko lokacin shuka.", "Ku saka shuke-shuken wake a jujjuya amfanin gona ko a cakuɗa shuka.", "Ku yi amfani da kayayyakin takin zamani da yawan da ke daga gwajin ƙasarku da shawarwarin yankinku.", "Ku sa takin zamani kusa da shuka, ba ya taɓa iri ba.", "Ku ƙara takin nitrogen a matakin da ya dace, idan ƙasa ta jiƙe."],
          words: [["N, P, K", "nitrogen, phosphorus da potassium: manyan sinadaran abinci na shuka."], ["Ƙarin taki (topdressing)", "ƙara takin zamani, yawanci nitrogen, ga amfanin gona da ke girma."], ["Compost (takin gargajiya da aka ruɓar)", "ruɓaɓɓiyar sharar shuke-shuke da dabbobi da ake amfani da ita don ciyar da ƙasa."]],
          slides: [
            { title: "Abin da amfanin gona ke buƙata", bullets: ["Nitrogen, phosphorus, potassium", "Da ƙananan sinadaran abinci", "Shuke-shuken wake suna ƙara nitrogen"] },
            { title: "Takin gargajiya", bullets: ["Takin dabbobi da compost", "Suna riƙe ruwa, suna ciyar da halittun ƙasa"] },
            { title: "Amfani da takin zamani da kyau", bullets: ["Kayayyaki da yawa daga gwajin ƙasa da shawarar yankinku", "Ku sa shi kusa da shuka, ba a kan iri ba", "Ƙarin takin nitrogen a matakin da ya dace"] },
            { title: "Ku haɗa duka biyun", bullets: ["Na gargajiya + na zamani = amfani mai ɗorewa", "Ku yi compost daga ragowar amfanin gona da taki"] }
          ],
          sources: [FAO_CSA, KALRO],
          tryIt: "Ku rubuta tsarin ciyarwa don amfanin gonarku na gona: wane takin gargajiya za ku ƙara da yaushe, duk wani shukan wake, da kayayyakin takin zamani da lokacinsu (ku rubuta \"yawa daga gwajin ƙasa ko jami'in faɗakarwa\" idan ba ku sani ba tukuna). Ku fara tulin compost idan ba ku da shi.",
          youCanNow: "tsara yadda za ku ciyar da amfanin gona da takin dabbobi, compost da takin zamani da aka sa a wurin da ya dace.",
          quickCheck: [
            { objective: "O3", q: "Me takin dabbobi da compost suke ƙarawa baya ga sinadaran abinci?", options: ["Maganin ƙwari", "Takin gargajiya da ke riƙe ruwa kuma yana ciyar da halittun ƙasa", "Iri mai takardar shaida", "Farar ƙasa (lime)"], answer: 1, why: "Takin gargajiya yana riƙe ruwa kuma yana ciyar da halittun ƙasa, wanda yake da muhimmanci kamar sinadaran abinci." },
            { objective: "O3", q: "Kuna da takin zamani don shuka masara. A ina za ku sa shi?", options: ["Ɗan kaɗan kusa da shuka, ba ya taɓa iri ba", "A watsa shi ko'ina a dukan gonar", "Kai tsaye a kan iri", "A tuli a gefen gona"], answer: 0, why: "Sa ɗan kaɗan kusa da shuka yana amfani da takin da kyau, kuma takin da ke kan iri yana iya lalata shi." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Noman amfanin gona mai ƙarfi",
        questions: [
          { objective: "O1", q: "Wanne ne alamar ƙasa mai lafiya?", options: ["Mai tauri da fara-fara, tana yin ɓawo bayan ruwan sama", "Baƙa, mai sauƙin farfashewa, da tsutsotsin ƙasa", "Ruwa yana gudu daga kanta koyaushe", "Tana warin sinadarai"], answer: 1, why: "Ƙasa mai lafiya mai sauƙin farfashewa ce, baƙa, kuma cike da rayuwa." },
          { objective: "O1", q: "Yaya ya kamata ku ɗauki samfurin ƙasa?", options: ["Cokali ɗaya daga tulin taki", "Daga wurin da aka ƙone", "Ƙananan samfura da yawa a ko'ina a gonar, a haɗa su", "Daga titi"], answer: 2, why: "Samfurin da aka haɗa yana wakiltar dukan gonar." },
          { objective: "O2", q: "Me yasa ake amfani da yankan kara masu tsabta na rogo?", options: ["Cututtukan ƙwayoyin cuta suna yaɗuwa ta yankan kara masu cuta", "Sun fi araha", "Suna tsiro da sauri a kowace ƙasa", "Masu saye suna neman su"], answer: 0, why: "Kayan shuka masu tsabta suna hana cututtuka yaɗuwa." },
          { objective: "O2", q: "Mene ne taurarar 'yan shuka?", options: ["Ƙara musu ruwa", "Ƙara musu takin zamani", "Shuka su a ƙasa mai tauri", "Ƙara musu rana da rage ruwa a hankali kafin dasa su"], answer: 3, why: "Tana shirya 'yan shuka don yanayin gona." },
          { objective: "O3", q: "Daga ina yawan takin zamani da ya dace yake fitowa?", options: ["Hasashen maƙwabci", "Gwajin ƙasarku da shawarwarin yankinku", "Launin buhun", "Amfani da shi gwargwadon iko"], answer: 1, why: "Ƙasa da yanki ne ke yanke abin da amfanin gona ke buƙata." }
        ]
      }
    },
    {
      name: "Babi na 2: Kare amfanin gona da kammala shi",
      lessons: [
        {
          objectives: ["O4"],
          title: "Leƙen gona da haɗaɗɗen tsarin yaƙi da ƙwari",
          minutes: 6,
          goal: "Leƙa amfanin gona kowane mako da zaɓar matakan IPM kafin ku nemi sinadarai.",
          text: [
            "FAO ta bayyana haɗaɗɗen tsarin yaƙi da ƙwari (IPM) a matsayin duba dukan hanyoyin yaƙi da ƙwari da ake da su da haɗa waɗanda suka dace, da takaita amfani da maganin ƙwari ga abin da ke da dalili. Yana farawa da rigakafi: ƙasa mai lafiya, nau'in iri masu jure cuta, iri mai tsabta, jujjuya amfanin gona, shuka a kan lokaci, tsabtar gona (cire shuke-shuke masu cuta da ragowarsu) da ƙarfafa maƙiyan ƙwari na halitta kamar ƙwarin ladybird da ƙananan zanzarai masu kashe ƙwari (parasitic wasps).",
            "Ku leƙa gona kowane mako. Ku bi ta cikin gonar a siffar W ko a karkace, ku duba ƙayyadadden adadin shuke-shuke (misali shuke-shuke 10 a wurare 5), ku rubuta abin da kuka gani: lalacewar tsutsar sojoji (fall armyworm) a cikin tsakiyar masara, ƙwarin aphid, farin ƙuda (whiteflies), tabon ganye, yanƙwanewa, tsutsar ganyen tumatir (leaf miner). Ku kwatanta da matakin da jami'in faɗakarwa ya ce ya cancanci a ɗauki mataki.",
            "Ku fara amfani da hanyoyin da ba na sinadarai ba inda suke aiki: tsintar ƙwari da hannu, push-pull don masara da dawa, tarkuna, kayayyakin neem ko na halitta da aka amince da su, da cire shuke-shuke masu cuta. Ana iya rubuta ganin tsutsar sojoji a manhajar FAMEWS ta FAO inda ake amfani da ita. Ku nemi jami'in faɗakarwa ko asibitin shuke-shuke (plant clinic) ya gano matsalar idan ba ku tabbata ba."
          ],
          steps: ["Ku yi rigakafi: nau'in iri masu jure cuta, iri mai tsabta, jujjuya amfanin gona, tsabtar gona.", "Ku leƙa gona kowane mako a siffar W; ku duba ƙayyadadden adadin shuke-shuke.", "Ku rubuta ƙwari, cututtuka da lalacewa.", "Ku kwatanta da matakan ɗaukar mataki na jami'in faɗakarwa.", "Ku fara da hanyoyin da ba na sinadarai ba; ku nemi a gano matsalar idan ba ku tabbata ba."],
          words: [["IPM", "haɗaɗɗen tsarin yaƙi da ƙwari: haɗa rigakafi, sa ido da hanyoyi da yawa na yaƙi da ƙwari, da maganin ƙwari kawai idan akwai dalili."], ["Leƙen gona (scouting)", "zagaya gona a kai a kai don duba ƙwari da cututtuka."], ["Maƙiyan ƙwari na halitta", "ƙwari da sauran halittu da ke cin ƙwari masu ɓarna ko kai musu hari."], ["Matakin ɗaukar mataki (action level)", "yawan ƙwari ko lalacewa da yaƙi da su ya cancanci kuɗin da za a kashe."]],
          slides: [
            { title: "IPM (FAO)", bullets: ["Ku duba dukan hanyoyi, ku haɗa waɗanda suka dace", "Maganin ƙwari kawai idan akwai dalili"] },
            { title: "Ku fara da rigakafi", bullets: ["Iri masu jure cuta, iri mai tsabta, jujjuya amfanin gona", "Tsabtar gona", "Ku ƙarfafa maƙiyan ƙwari na halitta"] },
            { title: "Ku leƙa gona kowane mako", bullets: ["Siffar W, ƙayyadadden adadin shuke-shuke", "Ku rubuta abin da kuka gani", "Ku kwatanta da matakan ɗaukar mataki"] },
            { title: "Ku yaƙi ƙwari da hikima", bullets: ["Tsinta da hannu, push-pull, tarkuna", "Kayayyakin halitta da aka amince da su", "A gano matsalar idan ba ku tabbata ba"] }
          ],
          sources: [FAO_IPM, ICIPE_PUSHPULL, FAO_FAMEWS],
          tryIt: "Ku yi takardar leƙen gona ta kowane mako (kwanan wata, wuri, shuke-shuken da aka duba, ƙwari, cututtuka, lalacewa, mataki) ku kuma leƙa gona ɗaya ko gadon kayan lambu ɗaya a wannan makon.",
          youCanNow: "leƙa amfanin gona kowane mako da zaɓar matakan IPM, kuna farawa da rigakafi da hanyoyin da ba na sinadarai ba.",
          quickCheck: [
            { objective: "O4", q: "Wanne ne matakin rigakafi a IPM?", options: ["Fesa magani kowane mako ko da ba a buƙata ba", "Sayen maganin ƙwari mafi ƙarfi", "Cakuɗa maganin ƙwari biyu wuri ɗaya", "Amfani da nau'in iri masu jure cuta da cire shuke-shuke masu cuta"], answer: 3, why: "IPM yana farawa da rigakafi: nau'in iri masu jure cuta, iri mai tsabta, jujjuya amfanin gona da tsabtar gona." },
            { objective: "O4", q: "Kun ga 'yan tsutsar sojoji kaɗan a masararku. Me za ku fara yi?", options: ["Ku fesa dukan gonar yau", "Ku rubuta shi ku kwatanta da matakin ɗaukar mataki daga jami'in faɗakarwa", "Ku ƙyale shi har lokacin girbi", "Ku ƙone gonar"], answer: 1, why: "Ana kwatanta abin da aka rubuta a leƙen gona da matakin ɗaukar mataki don yanke ko yaƙi da ƙwarin ya cancanta." }
          ]
        },
        {
          objectives: ["O4","O5"],
          title: "Amfani da maganin ƙwari lafiya kuma bisa doka, da ban ruwa ga kayan lambu",
          minutes: 6,
          goal: "Amfani da maganin ƙwari lafiya idan akwai dalili, da tsara ban ruwa ba tare da ɓata ruwa ba ga lambun kayan lambu.",
          text: [
            "Idan ana buƙatar maganin ƙwari, ku yi amfani da kayayyakin da aka yi wa rajista don wannan amfanin gona da wannan ƙwaro a ƙasarku kawai (a Kenya ta Pest Control Products Board; a Najeriya ta NAFDAC), waɗanda aka saya daga dillalin da ke da lasisi, ba a cikin kwalaben da aka sake zubawa ba tare da bayani ba. Ku karanta bayanin da ke jikin kwalbar (label) ku bi shi daidai: yawa, cakuɗawa, tufafin kariya, lokacin sake shiga gona, da tazarar kafin girbi, wato adadin kwanakin tsakanin fesa magani da girbi. Ku nisantar da yara da dabbobi, kada ku taɓa ci ko shan taba yayin fesa magani, kuma ku zubar da kwalaben lafiya, ba a matsayin kwalaben ruwa ko abinci ba.",
            "Kayan lambu suna son ruwa kuma suna da saurin lalacewa. Ban ruwa ta digo (drip irrigation) yana kai ruwa a saiwoyi, yana adana ruwa kuma yana barin ganye a bushe, wanda ke rage cuta a tumatir. Kayan ban ruwa ta digo masu araha da gwangwanin ban ruwa suna aiki don ƙananan lambuna. Ku yi ban ruwa da sassafe ko da yamma, kuma ku ba da ruwa mai yawa sau kaɗan maimakon ɗan kaɗan kowace rana.",
            "Ku shimfiɗa ciyawar rufe ƙasa (mulch) kewaye da kayan lambu don riƙe danshi da hana ƙasa hawa kan ganye. Ku duba danshin ƙasa da yatsanku 'yan santimita a ƙasa kafin ku yi ban ruwa. Inda ruwa ke da ƙaranci, ku tara ruwan sama daga rufin gida ku yi amfani da kududdufan ajiyar ruwa (water pans)."
          ],
          steps: ["Ku yi amfani da kayayyakin da aka yi wa rajista don wannan amfanin gona da ƙwaro kawai, daga dillalai masu lasisi.", "Ku karanta ku bi bayanin kwalbar: yawa, tufafin kariya, sake shiga gona, tazarar kafin girbi.", "Ku zubar da kwalaben lafiya.", "Ku yi ban ruwa ga kayan lambu a saiwoyi (digo ko gwangwani), da safe ko da yamma.", "Ku shimfiɗa ciyawar rufe ƙasa ku duba danshin ƙasa kafin ban ruwa."],
          words: [["Tazarar kafin girbi (pre-harvest interval, PHI)", "adadin kwanakin da dole ku jira bayan fesa magani kafin ku girbe."], ["Maganin ƙwari da aka yi wa rajista", "kaya da hukumar ƙasa mai kula da ita ta amince da shi don amfanin da aka faɗa."], ["Ban ruwa ta digo (drip irrigation)", "ban ruwa ta bututu masu ƙananan ramuka da ke diga ruwa a saiwoyi."]],
          slides: [
            { title: "Kayayyakin da aka yi wa rajista kawai", bullets: ["Kenya: PCPB. Najeriya: NAFDAC", "Dillali mai lasisi, ainihin kwalba mai bayani", "Don wannan amfanin gona da ƙwaro"] },
            { title: "Ku bi bayanin kwalbar", bullets: ["Yawa da cakuɗawa, tufafin kariya", "Lokacin sake shiga gona", "Tazarar kafin girbi kafin ku tsinka"] },
            { title: "Tsaro", bullets: ["Babu yara ko dabbobi a kusa", "Babu ci ko shan taba yayin fesa magani", "Kada ku sake amfani da kwalaben don abinci ko ruwa"] },
            { title: "Ku ba kayan lambu ruwa da kyau", bullets: ["Digo ko gwangwani a saiwoyi", "Safe ko yamma, ruwa mai yawa sau kaɗan", "Ciyawar rufe ƙasa; ku fara duba danshi"] }
          ],
          sources: [PCPB, NAFDAC, FAO_IPM],
          tryIt: "Ku ɗauki bayanin kwalbar kowane maganin ƙwari (daga shago, intanet ko rumbunku). Ku rubuta: amfanin gona da ƙwarin da aka yi masa rajista dominsu, yawa, tufafin kariya, da tazarar kafin girbi. Sannan ku rubuta tsarin ban ruwa don lambun kayan lambunku.",
          youCanNow: "amfani da maganin ƙwari lafiya kuma bisa doka idan akwai dalili, da ba kayan lambu ruwa ba tare da ɓata ruwa ba.",
          quickCheck: [
            { objective: "O4", q: "Mene ne tazarar kafin girbi a bayanin kwalbar maganin ƙwari?", options: ["Lokacin cakuɗa maganin fesawa", "Kwanakin kafin shuka", "Kwanakin da za a jira tsakanin fesa magani da girbi", "Tsawon lokacin da kwalbar za ta daɗe"], answer: 2, why: "Tazarar kafin girbi ita ce adadin kwanakin tsakanin fesa magani na ƙarshe da girbi." },
            { objective: "O5", q: "Lambun kale ɗinku ya bushe kuma kuna da gwangwanin ban ruwa. Yaushe za ku yi ban ruwa?", options: ["Da tsakar rana, ɗan kaɗan kowace awa", "Da sassafe ko da yamma, bayan duba danshin ƙasa", "Sai ganye sun yanƙwane har mako guda", "Ba za ku taɓa ba; ku jira ruwan sama"], answer: 1, why: "Ban ruwa da sassafe ko da yamma, mai yawa kuma sai ƙasa ta bushe kawai, yana adana ruwa kuma ya dace da kayan lambu." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Girbi da kula da amfanin gona bayan girbi",
          minutes: 5,
          goal: "Girbi a lokacin da ya dace da kula, warewa da ajiye amfanin gona don ya riƙe darajarsa.",
          text: [
            "Abinci mai yawa yana lalacewa bayan girbi. Ku girbe a lokacin da amfanin gona ya isa: tumatir a matakin da mai sayenku yake so (sau da yawa idan ya fara canja launi don kasuwanni masu nisa), ganyen kale tun suna ƙanana masu laushi, masara idan ƙwayar ta nuna kuma ta bushe isasshe, rogo idan saiwoyi sun shirya kuma kawai gwargwadon abin da za ku iya sayarwa ko sarrafawa da sauri, domin saiwoyin suna lalacewa cikin 'yan kwanaki.",
            "Ku riƙe su a hankali: ku yi amfani da kwanduna masu tsabta (crates), ba buhuna ba, don tumatir da amfanin gona masu laushi; ku ajiye amfanin gona a inuwa; ku kuma girbe a sanyin safiya. Ku ware ku jera su bisa girma da inganci, ku cire waɗanda suka lalace don kada su ɓata sauran. Ku kiyaye tazarar kafin girbi bayan duk wani fesa magani.",
            "Ku busar da hatsi sosai kafin ajiya: masara da gyaɗa masu danshi suna iya fitar da fumfuna (mould) da ke samar da aflatoxin, wani guba. Ku tambayi mai sayenku ko jami'in faɗakarwa yawan danshin da ake so, ku gwada shi idan za ku iya. Ku ajiye hatsi a rumbuna masu tsabta, busassu, masu tsayi daga ƙasa, ko a cikin buhunan ajiya marasa iska (hermetic bags) don yaƙi da ƙwarin hatsi (weevils) ba tare da sinadarai ba."
          ],
          steps: ["Ku girbe idan amfanin gona ya isa daidai yadda mai sayenku yake so.", "Ku girbe a sanyin safiya; ku ajiye amfanin gona a inuwa.", "Ku yi amfani da kwanduna masu tsabta don amfanin gona masu laushi.", "Ku ware ku jera; ku cire waɗanda suka lalace.", "Ku busar da hatsi sosai; ku ajiye shi a rumbuna masu tsabta, busassu, masu tsayi ko buhunan da ba sa shigar da iska."],
          words: [["Asara bayan girbi", "abincin da ya ɓace ko ya lalace tsakanin girbi da sayarwa ko amfani."], ["Jerawa (grading)", "warewa amfanin gona bisa girma da inganci."], ["Aflatoxin", "guba da fumfuna ke samarwa a kan hatsi da gyaɗa masu danshi."], ["Buhun ajiya mara iska (hermetic bag)", "buhun ajiya da iska ba ta shiga, wanda ke hana ƙwari ta hanyar yanke musu iska."]],
          slides: [
            { title: "Girbi a lokacin da ya dace", bullets: ["Tumatir a matakin da mai sayenku yake so", "Kale tun yana ƙarami mai laushi", "Rogo kawai gwargwadon abin da za ku sayar da sauri"] },
            { title: "Ku riƙe su a hankali", bullets: ["Sanyin safiya, inuwa", "Kwanduna masu tsabta, ba buhuna ba", "Ku ware, ku jera, ku cire waɗanda suka lalace"] },
            { title: "Ajiye hatsi lafiya", bullets: ["Ku busar sosai: hatsi mai danshi yana iya kawo aflatoxin", "Rumbuna masu tsabta, busassu, masu tsayi", "Buhunan da ba sa shigar da iska don yaƙi da ƙwarin hatsi"] }
          ],
          sources: [FAO_IPM],
          tryIt: "Aikin ƙarshe: ku rubuta tsarin noma na kakarku don amfanin gona na gona da lambun kayan lambu: duba ƙasa da gwaji, shiryawa da ciyar da ƙasa, iri da tazara, ranakun shuka, leƙen gona na kowane mako da matakan IPM, ban ruwa ga kayan lambu, da girbi, warewa, ajiya da sayarwa.",
          youCanNow: "girbi, riƙewa, warewa da ajiye amfanin gona don rage asara da kiyaye darajarsa.",
          quickCheck: [
            { objective: "O6", q: "Mene ne aflatoxin?", options: ["Takin zamani", "Buhun ajiya", "Wani nau'in ƙwarin hatsi", "Guba daga fumfuna a kan hatsi mai danshi"], answer: 3, why: "Masara da gyaɗa masu danshi suna iya fitar da fumfuna da ke samar da aflatoxin, wani guba." },
            { objective: "O6", q: "Kuna girbin tumatir don sayarwa. Ta yaya za ku ɗauke su?", options: ["A kwanduna masu tsabta, a ajiye su a inuwa", "A buhuna cikin rana", "A tara su a buɗe a cikin amalanke", "A jaka tare da waɗanda suka lalace"], answer: 0, why: "Kwanduna masu tsabta da inuwa suna kare amfanin gona masu laushi; buhuna da rana suna ƙuje su su lalata su." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Kare amfanin gona da kammala shi",
        questions: [
          { objective: "O4", q: "A IPM, ana amfani da maganin ƙwari:", options: ["Kowane mako ko me ya faru", "Ba a taɓa amfani da shi ko kaɗan", "Kawai idan akwai dalili, bayan an duba sauran hanyoyi", "A kan kayan lambu kawai"], answer: 2, why: "IPM na FAO yana takaita amfani da maganin ƙwari ga abin da ke da dalili." },
          { objective: "O4", q: "Yaya ya kamata ku leƙa gona?", options: ["Ku duba gefen gona kawai", "Ku bi siffar W ku duba ƙayyadadden adadin shuke-shuke", "Ku duba daga gida", "Bayan girbi kawai"], answer: 1, why: "Siffar W tana ɗaukar samfurin dukan gonar daidai." },
          { objective: "O4", q: "Tazarar kafin girbi ita ce:", options: ["Kwanakin da za a jira tsakanin fesa magani da girbi", "Lokacin shuka", "Farashin maganin ƙwari", "Girman injin fesa magani"], answer: 0, why: "Tana tabbatar da cewa ragowar magani a kan abinci ya kasance a matakin da ba shi da haɗari." },
          { objective: "O5", q: "Me yasa ake amfani da ban ruwa ta digo don tumatir?", options: ["Yana jiƙa ganye", "Yana amfani da ruwa mai yawa", "Doka ta wajabta shi", "Yana kai ruwa a saiwoyi kuma yana barin ganye a bushe, yana rage cuta"], answer: 3, why: "Busassun ganye suna nufin ƙarancin cuta da ƙarancin ɓata ruwa." },
          { objective: "O6", q: "Me yasa ake busar da masara sosai kafin ajiya?", options: ["Don ta yi nauyi", "Hatsi mai danshi yana iya fitar da fumfuna da ke samar da aflatoxin", "Masu saye sun fi son hatsi mai danshi", "Don canja launinta"], answer: 1, why: "Aflatoxin guba ce mai haɗari daga fumfuna a kan hatsi mai danshi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Noma Mai Ɗorewa na Amfanin Gona da Kayan Lambu",
    questions: [
      { objective: "O1", q: "Gwajin ƙasa yana faɗa muku:", options: ["Yanayin sama", "pH da yawan sinadaran abinci", "Farashin amfanin gona", "Sunayen ƙwari"], answer: 1, why: "Gwajin ƙasa yana auna tsami da sinadaran abinci." },
      { objective: "O1", q: "Ƙasa mai tsami na iya buƙatar:", options: ["Ƙarin ƙonewa", "Gishiri", "Farar ƙasa (lime), idan gwajin ƙasa ya ba da shawara", "Babu komai har abada"], answer: 2, why: "Sa farar ƙasa yana rage tsami kuma yana sakin sinadaran abinci." },
      { objective: "O1", q: "Wanne ne ke gina lafiyar ƙasa?", options: ["Ƙara takin dabbobi da compost da rufe ƙasa", "Ƙone ragowar amfanin gona", "Noma ƙasa sau da yawa", "Barin ƙasa a buɗe"], answer: 0, why: "Takin gargajiya da rufe ƙasa suna ciyar da ƙasa kuma suna kare ta." },
      { objective: "O2", q: "Iri mai takardar shaida shi ne:", options: ["Kowace hatsi daga kasuwa", "Iri ba tare da fakiti ba", "Irin da aka ajiye na shekara goma", "Irin da hukumar iri ta hukuma ta duba"], answer: 3, why: "Takardar shaida tana duba nau'i da inganci." },
      { objective: "O2", q: "Shuke-shuke masu cunkoso yawanci:", options: ["Suna ba da ƙarin amfani", "Suna gasa kan haske, ruwa da sinadaran abinci kuma suna rage amfani", "Ba sa buƙatar takin zamani", "Suna jure dukan ƙwari"], answer: 1, why: "Tazara daidai tana daidaita yawan shuke-shuke da abin da ake da shi." },
      { objective: "O2", q: "Yaushe ya kamata a dasa 'yan shuka?", options: ["Da tsakar rana cikin rana kai tsaye", "Lokacin hadari", "Bayan taurarawa, zai fi kyau a sanyin yamma", "Kafin su fitar da ganye"], answer: 2, why: "Yanayin sanyi yana rage girgizar dasawa." },
      { objective: "O3", q: "Waɗanne amfanin gona ne ke ƙara nitrogen a ƙasa?", options: ["Wake (beans), wake na gida (cowpea) da gyaɗa", "Masara kawai", "Tumatir", "Albasa"], answer: 0, why: "Shuke-shuken wake suna ɗaure nitrogen ta saiwoyinsu." },
      { objective: "O3", q: "Ƙarin taki (topdressing) ga masara yawanci yana nufin ƙara:", options: ["Farar ƙasa lokacin shuka", "Iri", "Ruwa kawai", "Nitrogen ga amfanin gona da ke girma"], answer: 3, why: "Ƙarin takin nitrogen yana tallafa wa girma a matakin da ya dace." },
      { objective: "O3", q: "Ya kamata a sa takin zamani:", options: ["Kai tsaye a kan iri", "Kusa da shuka, ba ya taɓa iri ba", "A kan titi", "A kan ganye kawai"], answer: 1, why: "Sa shi kusa da saiwoyi yana amfani da shi da kyau ba tare da ƙone iri ba." },
      { objective: "O4", q: "Maƙiyan ƙwari na halitta su ne:", options: ["Ciyawa", "Maganin ƙwari", "Ƙwarin da ke cin ƙwari masu ɓarna ko kai musu hari", "Ɓarayi"], answer: 2, why: "Ƙwarin ladybird da ƙananan zanzarai masu kashe ƙwari suna taimakawa wajen yaƙi da ƙwari." },
      { objective: "O4", q: "Matakin ɗaukar mataki shi ne:", options: ["Yawan ƙwari da yaƙi da su ya cancanci kuɗin da za a kashe", "Wani nau'in injin fesa magani", "Lokacin girbi", "Sakamakon gwajin ƙasa"], answer: 0, why: "Yana taimakawa wajen guje wa fesa magani ba tare da buƙata ba." },
      { objective: "O4", q: "Ana amfani da push-pull galibi a:", options: ["Tumatir", "Kale", "Albasa", "Masara da dawa"], answer: 3, why: "icipe ta ƙirƙiro shi don ƙwarin hatsi kamar tsutsar kara (stemborer) da tsutsar sojoji." },
      { objective: "O4", q: "A Kenya, wace hukuma ce ke yi wa maganin ƙwari rajista?", options: ["KCAA", "Pest Control Products Board (PCPB)", "KMD", "ODPC"], answer: 1, why: "PCPB ce ke kula da kayayyakin yaƙi da ƙwari a Kenya." },
      { objective: "O4", q: "Maganin ƙwari da ake sayarwa a kwalbar da aka sake zubawa ba tare da bayani ba:", options: ["Kaya mai araha ne", "Ba laifi idan arha ne", "Bai kamata a saya ko a yi amfani da shi ba", "Ya fi aminci"], answer: 2, why: "Ba tare da bayanin kwalba ba ba za ku san kayan ko ku yi amfani da shi lafiya ba." },
      { objective: "O4", q: "Ya kamata a yi da kwalaben maganin ƙwari da babu komai a ciki:", options: ["A zubar da su lafiya, kada a sake amfani da su don abinci ko ruwa", "A yi amfani da su don ajiye ruwan sha", "A ba yara", "A jefa su cikin kogi"], answer: 0, why: "Ragowar magani na iya guba mutane da ruwa." },
      { objective: "O5", q: "Lokaci mafi kyau na ban ruwa ga kayan lambu shi ne:", options: ["Tsakar rana", "Da dare kawai lokacin ruwan sama", "Ba a taɓa ba", "Sassafe ko yamma"], answer: 3, why: "Ruwa kaɗan ne ke ɓacewa saboda zafi da ƙafewa." },
      { objective: "O5", q: "Ciyawar rufe ƙasa kewaye da kayan lambu:", options: ["Tana busar da ƙasa", "Tana riƙe danshi kuma tana hana ƙasa hawa kan ganye", "Tana jawo dukan ƙwari", "Tana maye gurbin ruwa gaba ɗaya"], answer: 1, why: "Ciyawar rufe ƙasa tana adana ruwa kuma tana rage cutar da ke fantsama daga ƙasa." },
      { objective: "O6", q: "Ya kamata a ɗauki amfanin gona masu laushi kamar tumatir a cikin:", options: ["Matsattsun buhuna", "Hannaye kawai", "Kwanduna masu tsabta", "Ledoji cikin rana"], answer: 2, why: "Kwanduna suna kare amfanin gona masu laushi daga matsewa." },
      { objective: "O6", q: "Me yasa za a girbe rogo gwargwadon abin da za ku iya sayarwa ko sarrafawa da sauri kawai?", options: ["Saiwoyin suna lalacewa cikin 'yan kwanaki bayan girbi", "Masu saye ba sa son rogo", "Rogo yana sake tsiro cikin dare ɗaya", "Doka ce"], answer: 0, why: "Sabbin saiwoyin rogo suna lalacewa da sauri." },
      { objective: "O6", q: "Buhunan ajiya marasa iska suna yaƙi da ƙwarin hatsi ta hanyar:", options: ["Ƙara guba", "Yin ƙara", "Shigar da haske", "Yanke iska"], answer: 3, why: "Buhunan da iska ba ta shiga suna hana ƙwari samun iskar oxygen." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 3, 6, 8, 9, 12, 15, 17, 19] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe na tsarin ku sake duba shi.",
    criteria: [
      { name: "Duba ƙasa", objective: "O1", notYet: "Ba a ambaci duba ƙasa ko gwajin ƙasa ba.", meets: "An rubuta sakamakon dubawa a gona, tare da inda da yadda za a ɗauki samfur don gwajin ƙasa.", exceeds: "Yana amfani da sakamakon gwajin ƙasa, ko ranar da za a yi shi, don tsara shirin." },
      { name: "Iri, tazara da ranaku", objective: "O2", notYet: "Babu inda za a sami iri, tazara ko ranakun shuka.", meets: "Iri mai takardar shaida ko kayan shuka masu tsabta, tazarar da aka ba da shawara da ranakun shuka don amfanin gona biyun, tare da inda kowanne ya fito.", exceeds: "Ya haɗa da tsarin gandun shuka da taurarar 'yan shukan kayan lambu." },
      { name: "Ciyar da ƙasa", objective: "O3", notYet: "Takin zamani kawai aka jera, ko an yi hasashen yawansa.", meets: "Takin gargajiya, duk wani shukan wake, da lokaci da wurin sa takin zamani, tare da yawa daga gwajin ƙasa ko jami'in faɗakarwa.", exceeds: "Ya haɗa da tsarin compost da jujjuya amfanin gona don kaka mai zuwa." },
      { name: "Leƙen gona da IPM", objective: "O4", notYet: "Ana shirin fesa magani bisa jadawali ba tare da leƙen gona ba.", meets: "Tsarin leƙen gona na kowane mako, manyan ƙwarin da za a sa ido a kansu, matakan rigakafi da na rashin sinadarai, da dokokin bayanin kwalba ga duk wani maganin ƙwari.", exceeds: "Ya faɗi inda za a sami gano matsala da matakin ɗaukar mataki ga babban ƙwaro ɗaya." },
      { name: "Ban ruwa", objective: "O5", notYet: "Babu tsarin ban ruwa ga kayan lambu.", meets: "Hanyar ban ruwa, lokacin rana, ciyawar rufe ƙasa da duba danshin ƙasa.", exceeds: "Ya haɗa da hanyar tara ko adana ruwa." },
      { name: "Girbi da ajiya", objective: "O6", notYet: "Babu girbi, warewa ko ajiya.", meets: "Lokacin girbi, riƙewa a hankali, warewa, busarwa da ajiya, da inda za a sayar.", exceeds: "Ya faɗi ingancin da mai saye yake buƙata da yadda za a bi diddigin asara." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka sami \"Ya cika\" ko \"Ya wuce\" a kowane layin rubric na tsarin kaka",
      "Masu koyo da suka ce sun yi gwajin ƙasa, sun yi amfani da iri mai takardar shaida ko sun leƙa gona kowane mako a kaka mai zuwa (binciken biyo baya)",
      "Canjin asarar girbi da ta bayan girbi da masu koyo ko ƙungiyarsu suka ba da rahoto bayan kaka ɗaya",
      "Masu koyo da suka fara wani kwas na noma na Koach Learn cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Littafin rubutu da alƙalami, da waya mai sauƙi",
      "Samun gona ko lambun kayan lambu, da fartanya don duba ƙasa",
      "Bayanin kwalbar maganin ƙwari na gaske da fakitin iri, idan akwai",
      "Kusan minti 60 gaba ɗaya, a gajerun zama, da lokaci a gona da na rubuta tsarin kaka"
    ],
    facilitatorNotes: [
      "A ƙungiyar manoma ko makarantar gona (field school): ku yi gwajin farko tare, sannan ku yi duba ƙasa da zagayen leƙen gona a gona ta gaske.",
      "Ku gayyaci jami'in faɗakarwa ko mai shagon kayan gona ya ba da tazara, nau'in iri da yawan takin zamani na yankin; kada ku ba da yawa da kanku.",
      "Kada ku cakuɗa ko ku fesa maganin ƙwari a aji; ku nuna bayanin kwalba ku yi atisayen karanta shi.",
      "Ku ba da maki ga tsarin kaka da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
