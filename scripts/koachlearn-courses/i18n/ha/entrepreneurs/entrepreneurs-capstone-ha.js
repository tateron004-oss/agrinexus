"use strict";

// Koach Learn course, Hausa (ha) translation of entrepreneurs/entrepreneurs-capstone.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "entrepreneurs-capstone-ha",
  lang: "ha",
  translationOf: "entrepreneurs-capstone",
  category: "Entrepreneurs",
  name: "Aikin Ƙarshe (Capstone): Gina Tsarin Kasuwanci, Hidima, Aiki da Kai, Dabarar Talla ko Tsarin Aiki da AI",
  skills: "Zaɓa da iyakance aiki, Tabbatarwa da mutane na gaske, Tsara mafita, Gina ta da AI, Duba lissafi da haɗari, Gwadawa da gabatar da aikinku",
  outcome: "zaɓar aikin kasuwanci ɗaya na AI (tsarin kasuwanci na sabon kamfani, kasuwancin hidima, tsarin aiki da kai, dabarar talla, ko tsarin aiki mai inganci), gina shi daga farko har ƙarshe tare da AI a matsayin mataimaki, gwada shi da mutane na gaske, da gabatar da cikakken aiki da aka duba.",
  about: [
    "Wannan shi ne aikin ƙarshe (capstone): aikin da ke haɗa duk abin da kuka koya a kwasa-kwasan Entrepreneurs (masu kasuwanci). Za ku zaɓi aiki ƊAYA daga cikin biyar, ku gina shi don kasuwanci na gaske, naku ko wanda kuka san shi sosai.",
    "Zaɓuɓɓuka biyar su ne: 1) tsarin kasuwanci na sabon kamfani da AI, 2) kasuwancin hidima mai amfani da AI, 3) tsarin aiki da kai (automation) na AI don kasuwanci, 4) dabarar talla da AI, ko 5) tsarin aiki mai inganci da AI (kayan aiki, samfura da al'adun da ke tafiyar da makon kasuwanci). Kowane darasi mataki ɗaya ne na gina shi: zaɓa da iyakancewa, tabbatarwa, tsarawa, ginawa, duba lissafi da haɗari, sannan gwadawa da gabatarwa.",
    "Kowane darasi yana ɗaukar kusan minti biyar ana karanta shi, amma ayyukan \"Gwada yanzu\" aikin gaske ne kuma suna iya ɗaukar awa ɗaya ko fiye. Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe. Idan aikinku ya shafi haraji, lasisi ko maganganun shari'a, darussan suna nuna muku majiyoyin hukuma; ku yi magana da akanta ko lauya game da halin da kuke ciki."
  ],
  finalTask: "Ku miƙa cikakken aikinku na ƙarshe a matsayin takarda ɗaya ko jaka (folder) ɗaya: taƙaitawa mai shafi ɗaya (kasuwancin, abokin ciniki, matsalar, mafitarku), cikakken aikin (tsarin kasuwanci, kunshin hidima, aiki da kai mai aiki tare da bayanansa, dabarar talla, ko tsarin aiki mai inganci), bayanan tabbatarwa daga aƙalla mutane uku na gaske, lissafi da jerin haɗari, sakamakon gwaji da canje-canjen da kuka yi, da gabatarwa ta minti uku da za ku iya yi da baki.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Masu kasuwanci da ke kammala kwasa-kwasan Entrepreneurs na Koach Learn kuma suke son gina cikakken aiki ɗaya na AI don kasuwancinsu ko wanda suka san shi sosai.",
    startingPoint: "Sun yi amfani da AI don rubutun kasuwanci, kayan aiki, talla, aiki da kai ko inganta aiki a kwasa-kwasan baya. Yawancinsu ba su taɓa ɗaukar aiki ɗaya daga tunani har zuwa sakamakon da aka gwada aka gabatar ba.",
    gap: "Ƙwarewar da aka koya ɗaya bayan ɗaya tana amfani ne kawai idan ta haɗu a cikin aikin da aka gama. Masu koyo suna buƙatar iyakancewa, tabbatarwa, tsarawa, ginawa, dubawa da gabatar da aiki ɗaya na gaske, don su tafi da abin da za su iya amfani da shi, su nuna wa abokin hulɗa ko mai ba da kuɗi, kuma su ci gaba da inganta shi.",
    constraints: [
      "Kalmomi masu sauƙi; kowane darasi gajere ne, amma aikin na iya ɗaukar awa ɗaya ko fiye a kowane mataki",
      "Na'urori: kwamfuta mai mataimakin AI kyauta, takardar lissafi (spreadsheet) da shirin rubutu",
      "Lokaci: kusan sati biyu zuwa huɗu na aiki na ɗan lokaci",
      "Batutuwan haraji, lasisi da shari'a suna zuwa majiyoyin hukuma (SBA, IRS) da akanta ko lauya",
      "Madadi a maimakon sunayen abokan ciniki ko bayanan sirri a kowane prompt na AI"
    ],
    prerequisites: "\"Gabatarwa ga AI don 'Yan Kasuwa\" da aƙalla wasu kwasa-kwasan Entrepreneurs guda biyu, musamman wanda ya dace da aikin da aka zaɓa."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku zaɓuɓɓukan aikin ƙarshe guda biyar da kasuwanci na gaske", action: "zaɓar aiki ɗaya da rubuta iyakarsa a sakin layi ɗaya, da abin da ke ciki, abin da ba ya ciki da ranar gamawa", standard: "ƙarami har za a iya gama shi a kan lokaci" },
    { id: "O2", condition: "Idan aka ba ku manyan zato na aikinku", action: "yin hira da aƙalla mutane uku na gaske da tambayoyi marasa son kai, da yi wa kowane zato alama: an tabbatar, ba daidai ba ne, ko ba a tabbata ba", standard: "kuna rubuta ainihin kalmominsu kuma kuna sabunta iyakar aikin idan wani zato ba daidai ba ne" },
    { id: "O3", condition: "Idan aka ba ku iyakar aikinku da bayanan tabbatarwa", action: "rubuta tsarin aiki (outline) mai sassan da suka dace da irin aikinku", standard: "kuna nuna waɗanne sassa ne ke buƙatar bayananku na gaske" },
    { id: "O4", condition: "Ta amfani da AI a matsayin mataimakinku", action: "gina aikin sashe ɗaya bayan ɗaya, AI yana rubuta daftari ku kuma kuna dubawa", standard: "kuna ajiye rajistar gini kuma kuna amfani da madadi don bayanan sirri" },
    { id: "O5", condition: "Idan aka ba ku aikinku", action: "duba lissafinsa a takardar lissafi (spreadsheet) da rubuta jerin haɗari", standard: "an duba kowace dabara (formula), kuma an yi wa batutuwan haraji da shari'a alama don a tabbatar da su a majiyar hukuma ko wurin ƙwararre" },
    { id: "O6", condition: "Idan aka ba ku aikinku da aka gama", action: "gwada shi da mutane uku, yin manyan canje-canje da gabatarwa ta minti uku", standard: "kuna bayyana matsalar, mafitarku, hujja da mataki na gaba" }
  ],
  chapters: [
    {
      name: "Babi na 1: Tsara aikinku",
      lessons: [
        {
          objectives: ["O1"],
          title: "Mataki na 1: Zaɓa da iyakance aikinku",
          minutes: 6,
          goal: "Zaɓi aiki ɗaya daga cikin ayyukan ƙarshe guda biyar kuma ku rubuta iyakarsa a sakin layi ɗaya.",
          text: [
            "Ku zaɓi aikin da zai fi taimakon kasuwanci na gaske cikin watanni uku masu zuwa. Tsarin kasuwanci ya dace da sabon tunani da ke buƙatar tsari a sarari ko kuɗi. Kasuwancin hidima ya dace da wanda ya shirya sayar da hidima ta amfani da AI. Tsarin aiki da kai ya dace da kasuwancin da ayyuka masu maimaituwa suka cika masa wuya. Dabarar talla ta dace da kasuwancin da ke buƙatar ƙarin abokan ciniki. Tsarin aiki mai inganci ya dace da mai kasuwanci da aiki ya yi masa yawa kuma yake buƙatar mako mafi kyau.",
            "Iyakance aiki (scope) yana nufin yanke shawarar abin da ke ciki da abin da ba ya ciki. Iyaka mai kyau ƙarama ce har za a iya gamawa: \"Dabarar talla ta kwanaki 90 don wankin mota na tafi-da-gidanka, a unguwa ɗaya da hanyoyi biyu\" ta fi \"talla don komai\".",
            "Ku nemi AI ya taimaka muku kwatantawa: \"Ga kasuwancina da babbar matsalarsa. Wanne cikin waɗannan ayyukan ƙarshe guda biyar zai fi taimakawa, kuma me yasa?\" Sannan ku yanke shawara da kanku ku rubuta iyakar aikinku."
          ],
          steps: ["Ku rubuta kasuwancinku (ko wanda kuke taimakawa) da babbar matsalarsa.", "Ku karanta zaɓuɓɓukan ayyuka guda biyar.", "Ku tambayi AI wanne zai fi taimakawa da dalili.", "Ku zaɓi ɗaya.", "Ku rubuta iyakar aikin a sakin layi ɗaya: abin da ke ciki, abin da ba ya ciki, da ranar gamawa."],
          words: [["Capstone (aikin ƙarshe)", "aiki na ƙarshe da ke haɗa duk abin da kuka koya."], ["Scope (iyakar aiki)", "iyakokin aiki: abin da ke ciki da abin da ba ya ciki."]],
          slides: [
            { title: "Zaɓuɓɓukan aikin ƙarshe guda biyar", bullets: ["Tsarin kasuwanci na sabon kamfani da AI", "Kasuwancin hidima mai amfani da AI", "Tsarin aiki da kai na AI", "Dabarar talla ko tsarin aiki mai inganci da AI"] },
            { title: "Wanne ya dace?", bullets: ["Sabon tunani mai buƙatar tsari: tsarin kasuwanci", "An shirya sayar da hidima: kasuwancin hidima", "Ayyuka masu maimaituwa da yawa: aiki da kai"] },
            { title: "Da kuma", bullets: ["Ana buƙatar abokan ciniki: dabarar talla", "Aiki ya yi wa mai kasuwanci yawa: tsarin aiki mai inganci"] },
            { title: "Ku iyakance shi ƙarami", bullets: ["Abin da ke ciki, abin da ba ya ciki", "Ranar gamawa", "Ƙarami har za a iya gamawa"] }
          ],
          tryIt: "Ku zaɓi aikinku na ƙarshe kuma ku rubuta iyakarsa a sakin layi ɗaya, da abin da ke ciki, abin da ba ya ciki da ranar gamawarku.",
          youCanNow: "zaɓar aikin ƙarshe da ya dace da kasuwanci na gaske, da iyakance shi ta yadda za ku iya gama shi.",
          quickCheck: [
            { objective: "O1", q: "Me iyakar aiki (scope) ke faɗi?", options: ["Abin da ke ciki da wanda ba ya cikin aikin, da lokacin da za a gama shi", "Labarin rayuwarku", "Kowane tunani da kuka taɓa yi", "Sunan kayan aikinku na AI"], answer: 0, why: "Iyakar aiki tana sa aikin ya zama ƙarami har za a iya gamawa." },
            { objective: "O1", q: "Iyakar aikinku ta ƙunshi talla a birane biyar da hanyoyi shida cikin sati biyu. Me za ku yi?", options: ["Ku bar ta yadda take", "Ku rage ta zuwa yanki ɗaya da hanyoyi kaɗan", "Ku ƙara birane", "Ku cire ranar gamawa"], answer: 1, why: "Ƙaramar iyaka za a iya gama ta kuma a yi ta da kyau." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Mataki na 2: Tabbatarwa da mutane na gaske",
          minutes: 5,
          goal: "Duba zato na aikinku ta hanyar magana da aƙalla mutane uku na gaske.",
          text: [
            "Kowane aiki yana dogara ne kan zato: abokan ciniki suna son wannan, za su biya wannan adadi, wannan aikin yana ɓata awowi kaza, mutane suna samun mu a wannan dandali. Tabbatarwa (validation) tana nufin duba su da mutane na gaske kafin ku gina.",
            "Ku tambayi AI: \"Ka jera manyan zato guda biyar a cikin wannan aiki, kuma ka rubuta tambayoyin hira guda uku marasa son kai ga kowanne.\" Marasa son kai yana nufin ba ku jagoranci mutumin ba: ku tambayi \"Yaya kuke magance wannan yanzu?\" ba \"Ba za ku so tunanina ba?\"",
            "Ku yi magana da aƙalla mutane uku: abokan ciniki masu yiwuwa, mai kasuwancin, ko ma'aikatan da ke yin aikin. Ku rubuta ainihin kalmominsu. Sannan ku nemi AI ya taimaka muku rarraba abin da kuka ji, ku kuma lura da waɗanne zato suka tsaya da waɗanda ba su tsaya ba."
          ],
          steps: ["Ku tambayi AI ya jera manyan zato guda biyar na aikinku.", "Ku rubuta tambayoyin hira marasa son kai.", "Ku yi magana da aƙalla mutane uku na gaske.", "Ku rubuta ainihin kalmominsu.", "Ku yi wa kowane zato alama: an tabbatar, ba daidai ba ne, ko ba a tabbata ba, sannan ku sabunta iyakar aikinku."],
          words: [["Zato (assumption)", "abin da kuka yarda gaskiya ne amma ba ku duba ba."], ["Tabbatarwa (validation)", "duba zato da shaida ta gaske kafin ku gina."], ["Tambaya marar son kai", "tambayar da ba ta tura mutum zuwa wata amsa ba."]],
          slides: [
            { title: "Kowane aiki yana da zato", bullets: ["Abokan ciniki suna son sa", "Za su biya wannan adadi", "Wannan aikin yana ɓata awowi kaza"] },
            { title: "Ku yi tambayoyi marasa son kai", bullets: ["\"Yaya kuke magance wannan yanzu?\"", "Ba \"Ba za ku so tunanina ba?\""] },
            { title: "Ku yi magana da mutane uku ko fiye", bullets: ["Abokan ciniki, mai kasuwanci ko ma'aikata", "Ku rubuta ainihin kalmominsu", "An tabbatar, ba daidai ba, ko ba a tabbata ba?"] }
          ],
          tryIt: "Ku jera zato guda biyar da taimakon AI, ku yi hira da aƙalla mutane uku da tambayoyi marasa son kai, sannan ku yi wa kowane zato alama: an tabbatar, ba daidai ba ne, ko ba a tabbata ba.",
          youCanNow: "tabbatar da aikin kasuwanci da mutane na gaske kafin ku gina shi.",
          quickCheck: [
            { objective: "O2", q: "Mene ne zato a cikin aikin kasuwanci?", options: ["Gaskiyar da aka tabbatar", "Dokar shari'a", "Abin da kuka yarda da shi amma ba ku duba ba", "Sunan abokin ciniki"], answer: 2, why: "Tabbatarwa tana duba zato da mutane na gaske." },
            { objective: "O2", q: "Hira ta nuna cewa abokan ciniki ba su damu da abin da kuka tsara aikin a kai ba. Me za ku yi?", options: ["Ku ƙyale shi", "Ku yi hira da masu yarda da ku kaɗai", "Ku gina shi duk da haka", "Ku sabunta iyakar aikinku ko tsarinsa"], answer: 3, why: "Zato marasa daidai ya kamata su canja tsarin kafin ku gina." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Mataki na 3: Tsara mafita",
          minutes: 6,
          goal: "Rubuta tsarin (outline) aikinku ta amfani da tsarin da ya dace da zaɓinku.",
          text: [
            "Kowane aiki yana da tsarinsa. Tsarin kasuwanci: SBA (hukumar ƙananan kasuwanci ta Amurka) ta jera sassan tsarin gargajiya (taƙaitawar shugabanci, bayanin kamfani, nazarin kasuwa, tsari da gudanarwa, hidima ko kayayyaki, talla da sayarwa, neman kuɗi, hasashen kuɗi) da zaɓin tsari gajere (lean). Kasuwancin hidima: matsalar, abin da za a miƙa, matakai (na AI da na mutum), prompt na umarni, farashi. Tsarin aiki da kai: taswirar aiki, abin da ke farawa da ayyuka, matakin AI, kariyar amincewa, gwaje-gwaje da sa ido.",
            "Dabarar talla: abokin ciniki mafi dacewa, tayi, hanyoyi ɗaya ko biyu, kalandar abun ciki, tsarin imel, da lambobin da za ku bi. Tsarin aiki mai inganci: tsarin mako, kayan aiki (kayan aiki ɗaya ga kowane aiki), samfura, SOPs (matakan aiki na yau da kullum), aiki da kai da rajistar lokaci.",
            "Ku nemi AI ya mayar da iyakar aikinku da bayanan tabbatarwa zuwa tsari mai waɗannan sassa. Ku gyara shi don kowane sashe ya nuna abin da mutane na gaske suka faɗa muku."
          ],
          steps: ["Ku nemo tsarin da ya dace da irin aikinku.", "Ku ba AI iyakar aikinku da bayanan tabbatarwa.", "Ku nemi tsari mai waɗannan sassa da layi ɗaya kan abin da ke cikin kowanne.", "Ku gyara tsarin ta amfani da abin da mutane na gaske suka faɗa muku.", "Ku nuna waɗanne sassa AI zai iya rubuta daftarinsu, da waɗanda ke buƙatar bayananku na gaske."],
          words: [["Tsari (outline)", "jerin sassan da aiki zai kasance da su, kafin ku rubuta shi gaba ɗaya."], ["Tsari gajere (lean plan)", "gajeren tsarin kasuwanci da ke mai da hankali kan muhimman sassa, a maimakon dogon tsarin gargajiya."]],
          slides: [
            { title: "Tsarin kasuwanci (sassan SBA)", bullets: ["Taƙaitawar shugabanci, kamfani, nazarin kasuwa", "Tsari, kayayyaki ko hidima, talla", "Neman kuɗi, hasashen kuɗi"] },
            { title: "Hidima ko aiki da kai", bullets: ["Hidima: matsala, abin da za a miƙa, matakai, prompt, farashi", "Aiki da kai: taswira, mafari, ayyuka, kariya, gwaje-gwaje"] },
            { title: "Talla ko tsarin aiki mai inganci", bullets: ["Talla: abokin ciniki, tayi, hanyoyi, kalanda, imel", "Inganci: tsarin mako, kayan aiki, samfura, SOPs"] },
            { title: "Ku gina tsarin", bullets: ["AI yana rubuta daftari daga iyakar aiki da bayananku", "Ku gyara da abin da mutane na gaske suka faɗa"] }
          ],
          sources: [{ name: "SBA: Write your business plan", url: "https://www.sba.gov/business-guide/plan-your-business/write-your-business-plan" }],
          tryIt: "Ku sa AI ya mayar da iyakar aikinku da bayanan tabbatarwa zuwa tsari mai sassan da suka dace da aikinku. Ku gyara shi kuma ku nuna waɗanne sassa ke buƙatar bayananku na gaske.",
          youCanNow: "tsara cikakken tsarin aikinku na ƙarshe bisa shaida ta gaske.",
          quickCheck: [
            { objective: "O3", q: "A ina za ku sami daidaitattun sassan tsarin kasuwanci?", options: ["Shafin tsarin kasuwanci na SBA", "Wani rubutu a kafofin sada zumunta", "Hasashen AI kawai", "Fayilolin sirri na abokin hamayya"], answer: 0, why: "SBA ta jera sassan tsarin kasuwanci na gargajiya." },
            { objective: "O3", q: "Tsarin da AI ya rubuta don aikinku na aiki da kai bai ƙunshi kariya (guardrails) ba. Me za ku yi?", options: ["Ku karɓi tsarin", "Ku ƙara sashen kariya", "Ku cire gwaje-gwajen ma", "Ku koma aikin talla"], answer: 1, why: "Aikin aiki da kai yana buƙatar taswirar aiki, mafari da ayyuka, matakin AI, kariya da gwaje-gwaje." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Tsara aikinku",
        questions: [
          { objective: "O1", q: "Wani mai kasuwanci ya ce, \"Ina ɓata awa 10 a mako ina kwafar oda daga wata manhaja zuwa wata.\" Wane aikin ƙarshe ne ya fi dacewa?", options: ["Dabarar talla da AI", "Tsarin aiki da kai na AI", "Tsarin kasuwanci na sabon kamfani da AI", "Babu ɗaya"], answer: 1, why: "Kwafa mai maimaituwa daidai abin da aiki da kai ke warwarewa ne." },
          { objective: "O1", q: "Wane aiki ne aka iyakance shi da kyau?", options: ["Amfani da duk kayan aikin AI", "Talla don komai har abada", "Gyara dukan kasuwancin", "Dabarar talla ta kwanaki 90 don unguwa ɗaya da hanyoyi biyu"], answer: 3, why: "Ƙarami ne kuma a sarari har za a iya gama shi." },
          { objective: "O2", q: "Wace ce tambayar hira marar son kai?", options: ["\"Yaya kuke magance wannan yanzu?\"", "\"Ba za ku so tunanina ba?\"", "\"Za ku biya $100, ko?\"", "\"Kowa yana buƙatar wannan, ko ba haka ba?\""], answer: 0, why: "Ba ta tura mutumin zuwa wata amsa ba." },
          { objective: "O2", q: "Aƙalla mutane nawa na gaske ya kamata ku yi magana da su?", options: ["Hira ɗaya da AI", "Babu kowa", "Uku", "Ku kaɗai"], answer: 2, why: "Hira uku ita ce mafi ƙaranci a wannan aikin ƙarshe." },
          { objective: "O3", q: "Wanne ne ɗaya daga cikin sassan tsarin kasuwanci na gargajiya na SBA?", options: ["Kalmomin sirri na kafofin sada zumunta", "Manhajojin da kuka fi so", "Nazarin kasuwa", "Kayan ado na ofis"], answer: 2, why: "Nazarin kasuwa yana ɗaya daga cikin sassan da SBA ta jera." }
        ]
      }
    },
    {
      name: "Babi na 2: Gina, duba da gabatarwa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Mataki na 4: Gina shi da AI",
          minutes: 6,
          goal: "Gina cikakken aikin sashe bayan sashe, AI yana rubuta daftari ku kuma kuna dubawa.",
          text: [
            "Ku yi aiki sashe ɗaya a lokaci ɗaya. Ga kowanne, ku ba AI sunan sashen, bayananku na gaske da yadda kuke son sa. Misali: \"Ka rubuta sashen nazarin kasuwa na tsarin kasuwancin wankin motata na tafi-da-gidanka. Ga abin da abokan ciniki uku suka faɗa mini da bayanan yankin da na samo. Ƙasa da kalmomi 300, da kalmomi masu sauƙi.\"",
            "Ga ayyukan hannu, ku gina ainihin abin: ku kafa aiki da kai ku gwada shi, ku ƙirƙiri samfura da SOPs, ku yi rubuce-rubucen farko da imel ɗin, ko ku rubuta kunshin hidimar ku gudanar da shi sau ɗaya.",
            "Ku ajiye gajeriyar rajistar gini: abin da kuka yi, wane kayan aiki, abin da kuka canja bayan dubawa. Kada ku taɓa saka bayanan sirri na abokan ciniki ko na kuɗi a kayan aikin AI; ku yi amfani da madadi ku cike su da kanku."
          ],
          steps: ["Ku zaɓi sashe na gaba daga tsarinku.", "Ku ba AI sunan sashen, bayananku da yadda kuke son sa.", "Ku duba daftarin: bayanai, lambobi, salo, da'awoyi.", "Ku gina sassan hannu na gaske kuma ku gwada su.", "Ku rubuta layi ɗaya a rajistar gininku sannan ku wuce zuwa sashe na gaba."],
          words: [["Rajistar gini (build log)", "sauƙaƙan bayanin abin da kuka yi, da wane kayan aiki, da abin da kuka canja."], ["Madadi (placeholder)", "abin tsayawa a wuri kamar [sunan abokin ciniki] da kuke maye gurbinsa da kanku, a wajen kayan aikin AI."]],
          slides: [
            { title: "Sashe ɗaya a lokaci ɗaya", bullets: ["Sunan sashe + bayananku + yadda kuke son sa", "AI yana rubuta daftari; ku kuna dubawa"] },
            { title: "Ku gina ainihin abin", bullets: ["Ku kafa aiki da kai ku gwada shi", "Ku ƙirƙiri samfura, SOPs, rubuce-rubuce", "Ku gudanar da hidimar sau ɗaya"] },
            { title: "Ku ajiye rajistar gini", bullets: ["Me, wane kayan aiki, me kuka canja", "Babu bayanan sirri a kayan aikin AI"] }
          ],
          tryIt: "Ku gina aƙalla rabin sassan aikinku (ko babban sashensa mai aiki) tare da AI yana rubuta daftari ku kuma kuna dubawa. Ku ajiye rajistar gininku.",
          youCanNow: "gina aikin kasuwanci na gaske tare da AI a matsayin mataimakinku, ku kuma a matsayin mai dubawa.",
          quickCheck: [
            { objective: "O4", q: "Me rajistar gini ke ajiyewa?", options: ["Kalmomin sirrinku", "Sakamakon ƙarshe kawai", "Abin da kuka yi, wane kayan aiki da abin da kuka canja", "Lambobin wayar abokan ciniki"], answer: 2, why: "Rajistar gini tana nuna yadda aka gina aikin aka duba shi." },
            { objective: "O4", q: "Kuna buƙatar AI ya rubuta daftarin imel ga abokin ciniki don aikinku. Ta yaya za ku saka abokin cinikin?", options: ["Ku liƙa cikakken sunansa da adireshinsa", "Ku liƙa lambar katinsa", "Ku bar imel ɗin", "Ku yi amfani da madadi kamar [sunan abokin ciniki]"], answer: 3, why: "Madadi yana hana bayanan sirri shiga AI." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Mataki na 5: Duba lissafi da haɗari",
          minutes: 6,
          goal: "Duba lissafin aikinku kuma ku yi jerin haɗari.",
          text: [
            "Kowane aiki yana buƙatar lissafi na gaskiya: kuɗaɗen kashewa (kayan aiki, lokaci, kayayyaki), farashi ko kuɗin da aka tanada, da lokacin da zai biya kansa. Ku saka su a takardar lissafi (spreadsheet) ku duba kowace dabara (formula) da kanku. AI zai iya ba da shawarar abin da za a saka, amma ku ne ke duba lissafin.",
            "Sannan ku yi jerin haɗari daga abin da kuka koya: Shin duk da'awoyin talla da na AI gaskiya ne kuma za a iya tabbatar da su (dokokin talla na FTC, hukumar kasuwanci ta Amurka)? Shin an hana bayanan abokan ciniki shiga kayan aikin AI kuma ana kare su? Shin mutum yana duba duk abin da abokan ciniki ke gani? Shin an bayyana tallace-tallacen da aka biya? Shin kuna buƙatar lasisi, izini ko rajistar haraji a inda kuke aiki?",
            "Don ɓangaren hukuma, ku yi amfani da shafukan hukuma. Misali, IRS (hukumar haraji ta Amurka) ta ce ba sai kun biya kuɗi don lambar EIN (Employer Identification Number) ba, kuma tana gargaɗi game da shafukan da ke cajin kuɗi don ita. Masu sana'ar kansu yawanci suna biyan harajin sana'ar kai (self-employment tax), kuma sau da yawa harajin ƙiyasi na kowane wata uku; ku duba irs.gov ku yi magana da akanta. Ku tambayi lauya game da duk wani abu na shari'a a cikin tsarinku."
          ],
          steps: ["Ku jera duk kuɗaɗen kashewa, farashi ko kuɗin da aka tanada a takardar lissafi.", "Ku lissafa lokacin da aikin zai biya kansa.", "Ku duba kowace dabara (formula) da kanku.", "Ku yi jerin haɗari: da'awoyi, bayanai, dubawar mutum, bayyanawa, lasisi da haraji.", "Ku yi wa abubuwan da za a tabbatar alama, don a tabbatar da su a shafin hukuma, wurin akanta ko lauya."],
          words: [["Biyan kai (payback)", "tsawon lokacin da kuɗin da aka samu ko aka tanada zai rufe abin da kuka kashe."], ["EIN", "Employer Identification Number: lambar harajin tarayya ta kyauta don kasuwanci, da IRS ke bayarwa."], ["Harajin sana'ar kai (self-employment tax)", "harajin Social Security da Medicare da masu sana'ar kansu ke biya."]],
          slides: [
            { title: "Lissafi na gaskiya", bullets: ["Kuɗaɗen kashewa: kayan aiki, lokaci, kayayyaki", "Farashi ko kuɗin da aka tanada", "Lokacin da zai biya kansa; ku duba kowace dabara"] },
            { title: "Jerin haɗari", bullets: ["Da'awoyi na gaskiya kuma za a iya tabbatar da su", "Ana kare bayanan abokan ciniki", "Dubawar mutum; bayyanawa"] },
            { title: "Majiyoyin hukuma", bullets: ["IRS: EIN kyauta ne; ku yi hankali da shafukan da ke caji", "Harajin sana'ar kai da na ƙiyasi: irs.gov", "Ku tambayi akanta ko lauya"] }
          ],
          sources: [{ name: "IRS: Get an Employer Identification Number", url: "https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number" }, { name: "IRS: Self-Employed Individuals Tax Center", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" }, { name: "FTC: Advertising and Marketing Basics", url: "https://www.ftc.gov/business-guidance/advertising-marketing/advertising-marketing-basics" }],
          tryIt: "Ku gina takardar lissafinku (kuɗaɗen kashewa, farashi ko kuɗin da aka tanada, biyan kai), ku duba kowace dabara, kuma ku rubuta jerin haɗarinku da abubuwan da za a tabbatar a hukumance.",
          youCanNow: "duba lissafi da haɗarin aiki, da sanin inda za ku tabbatar da batutuwan haraji da shari'a.",
          quickCheck: [
            { objective: "O5", q: "Mene ne biyan kai (payback)?", options: ["Tsawon lokacin da kuɗin da aka samu ko aka tanada zai rufe abin da aka kashe", "Mayar wa abokin ciniki kuɗi", "Takardar haraji", "Tara don jinkiri"], answer: 0, why: "Biyan kai yana nuna tsawon lokacin kafin aikin ya biya kansa." },
            { objective: "O5", q: "Aikinku yana buƙatar lasisin kasuwanci. Me zai shiga jerin haɗarinku?", options: ["Babu komai; AI ya ce babu matsala", "Ku tabbatar da dokokin lasisin a hukumar da abin ya shafa", "Ku tsallake lasisin", "Ku tambayi aboki a intanet"], answer: 1, why: "Ana tabbatar da batutuwan lasisi da shari'a a majiyoyin hukuma ko wurin ƙwararre." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Mataki na 6: Gwadawa, ingantawa da gabatarwa",
          minutes: 6,
          goal: "Gwada aikinku da aka gama da mutane na gaske, ku inganta shi, kuma ku gabatar da shi cikin minti uku.",
          text: [
            "Ku nuna aikin da aka gama ga aƙalla mutane uku: mai kasuwancin, abokin ciniki mai yiwuwa, ko wanda zai yi amfani da shi. Ku tambaya: \"Me ke a sarari? Me ke rikitarwa? Me za ku canja?\" Ga ayyukan hannu, ku bar su su gwada shi.",
            "Ku yi canje-canjen da suka fi muhimmanci ku rubuta su. Sannan ku nemi AI ya taimaka muku rubuta gabatarwa ta minti uku: matsalar, wa ke da ita, mafitarku, hujja (abin da mutane suka faɗa muku da sakamakon gwaji), lissafi, da mataki na gaba.",
            "Ku yi atisaye da babbar murya. Ku nemi AI ya yi kamar mai saurare mai tsanani (mai zuba jari, mai kasuwanci, abokin ciniki) ya yi muku tambayoyi masu wuya. Sannan ku haɗa komai a matsayin kunshin aikinku na ƙarshe."
          ],
          steps: ["Ku nuna ko ku gwada aikin da aƙalla mutane uku.", "Ku yi manyan canje-canje ku rubuta su.", "Ku nemi AI ya tsara gabatarwa ta minti uku.", "Ku yi atisaye da babbar murya ku auna lokaci.", "Ku yi wasan kwaikwayon tambayoyi masu wuya da AI.", "Ku haɗa kunshin ƙarshe."],
          words: [["Pitch (gabatarwa)", "gajeren jawabi da ke bayyana aikinku da dalilin da yasa yake da muhimmanci."], ["Hujja", "shaidar da ke nuna aikinku yana aiki, kamar sakamakon gwaji da abin da mutane suka faɗa."]],
          slides: [
            { title: "Ku gwada aikin da aka gama", bullets: ["Aƙalla mutane uku", "Me ke a sarari, me ke rikitarwa, me ya cancanci canji?", "Ku bar su su gwada sassan hannu"] },
            { title: "Gabatarwa ta minti uku", bullets: ["Matsalar da wa ke da ita", "Mafitarku da hujja", "Lissafi da mataki na gaba"] },
            { title: "Atisaye", bullets: ["Da babbar murya, da auna lokaci", "AI yana yin kamar mai saurare mai tsanani", "Sannan ku haɗa kunshin ƙarshe"] }
          ],
          tryIt: "Aikin ƙarshe: ku gwada aikinku da mutane uku, ku yi manyan canje-canje, ku yi atisayen gabatarwarku ta minti uku, kuma ku haɗa kunshin aikinku na ƙarshe: taƙaitawa, cikakken aiki, bayanan tabbatarwa, lissafi da jerin haɗari, sakamakon gwaji da gabatarwa.",
          youCanNow: "gina, duba, gwada da gabatar da cikakken aikin kasuwanci na AI daga farko har ƙarshe.",
          quickCheck: [
            { objective: "O6", q: "Mece ce hujja a gabatarwa ta minti uku?", options: ["Ra'ayinku", "Dogon jerin abubuwan da aikin ke yi", "Shaida kamar sakamakon gwaji da abin da mutane suka faɗa", "Barkwanci"], answer: 2, why: "Hujja tana nuna aikin yana aiki ga mutane na gaske." },
            { objective: "O6", q: "Masu gwaji sun ga sassa biyu suna rikitarwa. Me za ku yi kafin gabatarwa?", options: ["Ku gabatar da shi yadda yake", "Ku cire bayanan masu gwajin", "Ku ƙara sassa", "Ku yi manyan canje-canje ku sake gwada sassan da ke rikitarwa"], answer: 3, why: "Ana gwadawa ne don nemo da gyara matsaloli kafin ku gabatar." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Gina, duba da gabatarwa",
        questions: [
          { objective: "O4", q: "Lokacin gini da AI, me ya kamata ku ba shi ga kowane sashe?", options: ["Sunan sashen, bayananku na gaske da yadda kuke son sa", "Kalmar sirrin bankinku", "Babu komai; ku bar shi ya yi hasashe", "Tsarin abokin hamayya don ya kwafa"], answer: 0, why: "Bayanai na gaske da tsari a sarari suna kawo daftari mai amfani." },
          { objective: "O5", q: "Wa ke duba dabarun (formulas) da ke takardar lissafinku?", options: ["Wani shafin intanet kawai", "AI kaɗai", "Babu kowa", "Ku"], answer: 3, why: "Lissafin AI yana iya zama ba daidai ba." },
          { objective: "O5", q: "Wani shafin intanet ya ce zai samo muku EIN a kan $250. Me IRS ta ce?", options: ["Wannan shi ne farashin hukuma", "Ba sai kun biya kuɗi don EIN ba; ku yi hankali da shafukan da ke caji", "EIN yana kai $1,000", "EIN da aka biya kuɗinsa ne kaɗai ke da inganci"], answer: 1, why: "IRS tana ba da EIN kyauta kuma tana gargaɗi game da shafukan da ke caji." },
          { objective: "O6", q: "Me ya kamata ya kasance a gabatarwa ta minti uku?", options: ["Matsalar, mafitarku, hujja da mataki na gaba", "Kowane bayani na kowace takardar lissafi", "Kalmomin sirrinku", "Barkwanci kaɗai"], answer: 0, why: "Gabatarwa gajeriya ce kuma tana mai da hankali kan abin da ke da muhimmanci." },
          { objective: "O6", q: "Ta yaya AI zai taimaka muku yin atisayen gabatarwarku?", options: ["Ta rubuta sharhi na bogi", "Ta yi jawabin a madadinku", "Ta yin kamar mai saurare mai tsanani da ke yin tambayoyi masu wuya", "Ta tsallake atisaye"], answer: 2, why: "Wasan kwaikwayo yana gina ƙarfin gwiwa don tambayoyi na gaske." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Aikin Ƙarshe (Capstone): Gina Tsarin Kasuwanci, Hidima, Aiki da Kai, Dabarar Talla ko Tsarin Aiki da AI",
    questions: [
      { objective: "O1", q: "Ayyukan ƙarshe nawa kuke zaɓa?", options: ["Dukansu biyar", "Ɗaya", "Uku", "Babu ko ɗaya"], answer: 1, why: "Kuna zaɓar aiki ƊAYA ku gama shi." },
      { objective: "O1", q: "Mai kasuwanci da aiki ya yi masa yawa kuma yake buƙatar mako mafi kyau ya kamata ya zaɓi:", options: ["Sabon tambari (logo)", "Tsarin kasuwanci na sabon kamfani da AI", "Babu komai", "Tsarin aiki mai inganci da AI"], answer: 3, why: "Tsarin aiki mai inganci yana tsara makon mai kasuwancin." },
      { objective: "O1", q: "Sabon tunani da ke buƙatar kuɗi ya fi dacewa da:", options: ["Samfurin ƙorafi", "Tsarin aiki da kai", "Kalandar abun ciki kawai", "Tsarin kasuwanci na sabon kamfani da AI"], answer: 3, why: "Tsarin kasuwanci yana bayyana tunanin da kuɗin da ake buƙata." },
      { objective: "O1", q: "Iyakar aiki (scope) tana nufin:", options: ["Tambarin aikin", "Abin da ke ciki da wanda ba ya cikin aikin", "Farashi", "Manhajar kwamfuta"], answer: 1, why: "Iyakar aiki tana saita iyakoki don ku iya gamawa." },
      { objective: "O2", q: "Zato shi ne:", options: ["Takardar haraji", "Gaskiyar da aka tabbatar", "Abin da kuka yarda da shi amma ba ku duba ba", "Wani nau'in AI"], answer: 2, why: "Tabbatarwa tana duba zato." },
      { objective: "O2", q: "Lokacin hira ya kamata ku rubuta:", options: ["Ainihin kalmomin mutane", "Abin da kuka so ku ji kawai", "Lambobin katinsu", "Babu komai"], answer: 0, why: "Ainihin kalmomi suna sa ku kasance masu gaskiya." },
      { objective: "O2", q: "Idan wani zato ya zama ba daidai ba, ya kamata ku:", options: ["Ɓoye shi", "Ƙyale shi", "Sabunta iyakar aikinku ko tsarinsa", "Tambayi wasu mutane har wani ya yarda"], answer: 2, why: "Tabbatarwa tana da amfani ne kawai idan kun yi aiki da ita." },
      { objective: "O3", q: "A ina za ku sami daidaitattun sassan tsarin kasuwanci?", options: ["Shafin tsarin kasuwanci na SBA", "Wani rubutu a kafofin sada zumunta", "Abokin hamayya", "Akwatin imel ɗinku"], answer: 0, why: "SBA ta jera sassan tsarin gargajiya da na gajere (lean)." },
      { objective: "O3", q: "Aikin tsarin aiki da kai ya ƙunshi:", options: ["Tambari kawai", "Taswirar aiki, mafari da ayyuka, matakin AI, kariya, gwaje-gwaje", "Farashi kawai", "Gabatarwa kawai"], answer: 1, why: "Waɗannan sassa suna sa aiki da kai ya yi aiki lafiya." },
      { objective: "O3", q: "Aikin dabarar talla ya ƙunshi:", options: ["Bayanan asusun banki kawai", "SOP kawai", "Rajistar lokaci kawai", "Abokin ciniki mafi dacewa, tayi, hanyoyi, kalanda da tsarin imel"], answer: 3, why: "Waɗannan su ne sassan dabarar talla." },
      { objective: "O4", q: "Lokacin gini, hanya mafi kyau ita ce:", options: ["Sashe ɗaya a lokaci ɗaya, AI yana rubuta daftari, ku kuna dubawa", "Gaba ɗaya a lokaci ɗaya ba tare da dubawa ba", "Kwafar wani aiki", "Barin AI ya wallafa shi"], answer: 0, why: "Ƙananan matakai tare da dubawa suna kiyaye inganci." },
      { objective: "O4", q: "Rajistar gini tana ajiye:", options: ["Babu abin amfani", "Kalmomin sirrinku", "Adireshin abokan cinikinku", "Abin da kuka yi, wane kayan aiki, da abin da kuka canja"], answer: 3, why: "Tana nuna yadda kuka yi aikin kuma tana taimaka muku ingantawa." },
      { objective: "O4", q: "Yaya ya kamata ku yi da sunayen abokan ciniki a prompt na AI?", options: ["Ku ƙara lambobin kati", "Ku rubuta su tare da lambobin waya", "Ku yi amfani da madadi kamar [sunan abokin ciniki]", "Ku wallafa su a fili"], answer: 2, why: "Madadi yana hana bayanan sirri shiga." },
      { objective: "O5", q: "Biyan kai (payback) shi ne:", options: ["Mayar wa abokin ciniki kuɗi", "Tsawon lokacin da kuɗin da aka samu ko aka tanada zai rufe abin da aka kashe", "Kuɗin caji", "Bashi"], answer: 1, why: "Yana nuna lokacin da aikin zai biya kansa." },
      { objective: "O5", q: "Wanne ne ya kamata ya shiga jerin haɗarinku?", options: ["Shin tambarina mai zagaye ne?", "Wane launi na fi so?", "Manhajoji nawa nake da su?", "Shin duk da'awoyin talla gaskiya ne kuma za a iya tabbatar da su?"], answer: 3, why: "Dokokin FTC suna buƙatar da'awoyi na gaskiya." },
      { objective: "O5", q: "Masu sana'ar kansu yawanci suna biyan:", options: ["Harajin sayarwa kawai", "Babu haraji", "Harajin sana'ar kai da kuma harajin kuɗin shiga", "Harajin dukiya kawai"], answer: 2, why: "Haka IRS ta faɗa a cibiyar harajin masu sana'ar kansu." },
      { objective: "O5", q: "Don tambayoyin shari'a a aikinku, ya kamata ku:", options: ["Yi magana da lauya", "Amince da kowace amsar AI", "Tsallake su", "Kwafi abokin hamayya"], answer: 0, why: "Lauya zai iya ba ku shawara game da halin da kuke ciki." },
      { objective: "O6", q: "Lokacin gwada aikin da aka gama, ku tambayi mutane:", options: ["Za ku ba ni taurari biyar?", "Me ke a sarari, me ke rikitarwa, me za ku canja?", "Mece ce kalmar sirrinku?", "Zan iya samun lambar katinku?"], answer: 1, why: "Waɗannan tambayoyi suna nemo ingantawa na gaske." },
      { objective: "O6", q: "Hujja a gabatarwarku tana nufin:", options: ["Alƙawari", "Shaida kamar sakamakon gwaji da abin da mutane suka faɗa", "Tambari", "Dogon jerin abubuwan da aikin ke yi"], answer: 1, why: "Shaida tana sa a yarda da gabatarwa." },
      { objective: "O6", q: "Kunshin aikin ƙarshe ya ƙunshi:", options: ["Taƙaitawa, cikakken aiki, bayanan tabbatarwa, lissafi da haɗari, sakamakon gwaji, gabatarwa", "Shafin take kawai", "Tarihin hirar AI kawai", "Tambari kawai"], answer: 0, why: "Tare, waɗannan suna nuna cikakken aiki da aka duba." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      3,
      4,
      5,
      7,
      10,
      13,
      14,
      17,
      18
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Taƙaitawa da iyakar aiki",
        objective: "O1",
        notYet: "Babu kasuwancin, abokin ciniki, matsalar ko mafitar, ko iyakar aikin ta yi girma da yawa har ba za a iya gamawa ba.",
        meets: "Taƙaitawa mai shafi ɗaya da kasuwanci, abokin ciniki, matsala da mafita, da iyakar aiki a sarari.",
        exceeds: "Ya bayyana dalilin da yasa aka zaɓi wannan irin aiki don wannan kasuwanci."
      },
      {
        name: "Tabbatarwa",
        objective: "O2",
        notYet: "Ƙasa da mutane uku, ko tambayoyi masu jagoranci.",
        meets: "Bayanai daga mutane uku ko fiye da ainihin kalmominsu, kuma an yi wa kowane zato alama.",
        exceeds: "Ya nuna abin da ya canja a aikin saboda abin da mutane suka faɗa."
      },
      {
        name: "Cikakken aiki",
        objective: "O4",
        notYet: "Akwai sassan da suka ɓace, ko an bar rubutun AI da ba a duba ba.",
        meets: "Kowane sashe na irin aikin, an gina shi da AI kuma an duba shi, tare da rajistar gini.",
        exceeds: "Ana amfani da aikin tuni, ko ya shirya a ƙaddamar da shi."
      },
      {
        name: "Lissafi da haɗari",
        objective: "O5",
        notYet: "Ba a duba dabarun (formulas) ba, ko babu jerin haɗari.",
        meets: "Takardar lissafi da aka duba dabarunta da biyan kai, tare da jerin haɗari.",
        exceeds: "An tabbatar da batutuwan haraji da shari'a a majiyoyin hukuma ko wurin ƙwararre."
      },
      {
        name: "Gwaji da gabatarwa",
        objective: "O6",
        notYet: "Ba a gwada ba, ko gabatarwar ta yi tsawo ko ba ta da hujja.",
        meets: "An gwada da mutane uku, an yi manyan canje-canje, gabatarwa ta minti uku da matsala, mafita, hujja da mataki na gaba.",
        exceeds: "An gabatar da shi da baki ga masu saurare na gaske kuma an amsa tambayoyi masu wuya."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala aikin ƙarshe kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Ayyukan da aka ƙaddamar ko ake amfani da su cikin kwanaki 60 (binciken biyo baya)",
      "Masu koyo da suka gabatar da aikinsu ga abokin hulɗa, mai ba da bashi, mai ba da kuɗi ko abokin ciniki",
      "Kuɗin shiga, lokacin da aka tanada ko sababbin abokan ciniki da masu koyo suka danganta da aikin"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta mai mataimakin AI kyauta, takardar lissafi (spreadsheet) da shirin rubutu",
      "Samun aƙalla mutane uku na gaske don hira da gwaji",
      "Kayan aiki daga kwasa-kwasan Entrepreneurs na baya da suka dace da aikin",
      "Kusan minti 60 na darussa da gwaje-gwaje, tare da awowi da yawa na aiki cikin sati biyu zuwa huɗu"
    ],
    facilitatorNotes: [
      "Ku yi ɗan taron dubawa bayan kowane mataki don kada masu koyo su kasa tafiya da aikin.",
      "Ku amince da kowace iyakar aiki kafin masu koyo su fara tabbatarwa, kuma ku ƙarfafa ƙananan iyakoki.",
      "Ku tunatar da masu koyo su yi amfani da madadi don bayanan abokan ciniki kuma su tabbatar da batutuwan haraji, lasisi da shari'a a hukumance.",
      "Ku ƙare da ranar nunawa (demo day) inda kowane mai koyo zai yi gabatarwarsa ta minti uku.",
      "Ku ba da maki ga kunshin aikin ƙarshe da ma'aunin rubric, layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
