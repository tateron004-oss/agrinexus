"use strict";

// Koach Learn course, Hausa (ha) translation of small-business/smallbiz-ai-customer-service.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const FTC_REVIEWS = { name: "FTC: Dokar Ra'ayoyin Abokan Ciniki da Shaidu, Tambayoyi da Amsoshi", url: "https://www.ftc.gov/business-guidance/resources/consumer-reviews-testimonials-rule-questions-answers" };
const FTC_REVIEWS_PR = { name: "FTC: Dokar Ƙarshe da ta Hana Ra'ayoyi da Shaidu na Bogi (Agusta 2024)", url: "https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials" };

module.exports = {
  id: "smallbiz-ai-customer-service-ha",
  lang: "ha",
  translationOf: "smallbiz-ai-customer-service",
  category: "Small Business",
  name: "AI don Hidimar Abokan Ciniki da Sadarwa",
  skills: "Rubuta FAQ na abokan ciniki, Gina samfuran amsa, Tsara muryar kasuwanci, Amsa ra'ayoyin abokan ciniki, Kwantar da abokan ciniki masu fushi, Kiyaye bayanan abokan ciniki a sirri",
  outcome: "gina kayan hidimar abokan ciniki don kasuwancinku da taimakon AI: FAQ na tambayoyinku goma da aka fi yi, samfuran amsa biyar a muryar kasuwancinku, da amsa mai natsuwa ga abokin ciniki mai fushi da kuma ga ra'ayi na jama'a, dukansu kun duba su da kanku kafin ku yi amfani da su.",
  about: [
    "Wannan kwas na masu ƙananan kasuwanci ne da ma'aikatansu da ke amsa abokan ciniki ta waya, tes, imel, saƙonnin kafofin sada zumunta da ra'ayoyin intanet: gidajen abinci, wuraren gyaran gashi, shaguna, masu wanki da tsaftacewa, masu gyara da motocin sayar da abinci.",
    "Za ku yi amfani da mataimakin AI kyauta don amsa tambayoyi iri ɗaya da sauri, ku sa amsoshinku su zama masu daɗi kuma iri ɗaya, ku amsa ra'ayoyin abokan ciniki yadda ya dace, kuma ku kwantar da abokan ciniki masu fushi ba tare da yin asara ba. Ku ne masu iko kan kowace amsa.",
    "Kowane darasi yana ɗaukar kusan minti biyar, tare da aikin \"Gwada yanzu\". Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe. Ayyukanku za su haɗu su zama kayan hidimar abokan ciniki da za ku iya amfani da su washegari."
  ],
  finalTask: "Ku gina kayan hidimar abokan cinikinku a takarda ɗaya: muryar kasuwancinku (kalmomi uku da jerin abin da za a yi da wanda ba za a yi ba), FAQ mai tambayoyinku goma da aka fi yi da amsoshin da kuka duba, samfuran amsa biyar masu wuraren cikawa, amsa ɗaya ga abokin ciniki mai fushi na gaske ko na misali, da amsa ɗaya ga ra'ayi na jama'a. Kun duba kowane bayani da kanku, kuma babu bayanan sirri na abokin ciniki da suka shiga kayan AI.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Masu ƙananan kasuwanci da ma'aikatansu da ke amsa abokan ciniki ta waya, tes, imel, kafofin sada zumunta da ra'ayoyin intanet: gidajen abinci, wuraren gyaran gashi, shaguna, masu tsaftacewa, masu gyara da motocin sayar da abinci.",
    startingPoint: "Suna amsa tambayoyin abokan ciniki kowace rana, sau da yawa iri ɗaya, kuma wataƙila suna amsa ra'ayoyi. Ba sa amfani da AI sosai wajen amsa, kuma ba su da rubutaccen FAQ, muryar kasuwanci ko samfuran amsa.",
    gap: "Amsa tambayoyi iri ɗaya ɗaya bayan ɗaya yana ɗaukar lokaci, amsoshi suna iya bambanta daga mutum zuwa mutum, kuma ƙorafi ko ra'ayin da ba a amsa da kyau ba yana iya rasa abokan ciniki. Masu kasuwanci suna buƙatar kayan hidimar abokan ciniki da aka duba, iri ɗaya, da aka yi da taimakon AI, yayin da suke faɗin gaskiya, suna bin dokar FTC kan ra'ayoyi, kuma suna kiyaye bayanan abokan ciniki a sirri.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli",
      "Na'urori: waya ta zamani ko kwamfuta da ake amfani da ita tsakanin abokan ciniki",
      "Lokaci: darussa na kusan minti 5 da suka dace da ranar aiki mai cike da hidima",
      "Dokoki: dokar FTC kan ra'ayoyi ta hana ra'ayoyi na bogi ko masu kyau da aka biya kuɗi; ƙorafin rauni ana kai shi ga ƙwararre ko kamfanin inshora",
      "Sirri: babu sunayen abokan ciniki, bayanan katin banki ko hanyoyin tuntuɓarsu a kayan AI"
    ],
    prerequisites: "Kwas ɗin \"Introduction to AI for Small Business\" (Gabatarwa ga AI don Ƙananan Kasuwanci) yana taimakawa amma ba dole ba ne."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan kuna da tambayoyin abokan ciniki da aka fi yi muku", action: "rubuta FAQ da taimakon AI", standard: "mai tambayoyi goma, kuma kowace amsa an duba ta da abin da kuke yi a zahiri" },
    { id: "O2", condition: "Idan kun san yadda kuke son kasuwancinku ya yi magana", action: "bayyana muryar kasuwancinku da sa AI ya rubuta da ita", standard: "da kalmomin murya uku da jerin abin da za a yi da wanda ba za a yi ba a farkon hirar" },
    { id: "O3", condition: "Ta amfani da mataimakin AI", action: "ƙirƙirar samfuran amsa biyar da ake sake amfani da su, masu wuraren cikawa", standard: "a muryar kasuwancinku, an duba su, kuma an ajiye su inda za ku kwafe su da sauri" },
    { id: "O4", condition: "Idan kuna da ra'ayi mai kyau ko mara kyau a intanet", action: "rubuta amsa ta gaskiya mai natsuwa da taimakon AI", standard: "kowace magana gaskiya ce, kuma babu ra'ayoyi na bogi ko da aka biya kuɗi" },
    { id: "O5", condition: "Idan kuna da abokin ciniki mai fushi da iyakokinku na mayar da kuɗi da sake yin aiki", action: "rubuta amsa ta amfani da hanyar LAST", standard: "kuna ba da maganin da za ku bayar a zahiri kawai" },
    { id: "O6", condition: "Idan kuna da FAQ, samfuran amsa da amsoshinku", action: "haɗa kayan hidimar abokan ciniki da ke kiyaye bayanan abokan ciniki a sirri", standard: "a takarda ɗaya, an duba kowane bayani, kuma babu bayanan abokin ciniki na gaske" }
  ],
  chapters: [
    {
      name: "Babi na 1: Amsoshin yau da kullum masu sauri da daɗi",
      lessons: [
        {
          objectives: ["O1"],
          title: "Gano tambayoyin abokan ciniki da aka fi yi da gina FAQ",
          minutes: 5,
          goal: "Jera tambayoyin abokan ciniki da aka fi yi ku mayar da su FAQ da aka duba.",
          text: [
            "Yawancin kasuwanci suna amsa tambayoyi goma iri ɗaya akai-akai: lokutan buɗewa, farashi, wurin ajiye mota, kai kaya, yin alƙawari, mayar da kaya, hanyoyin biya, lokacin jira, rashin lafiyar abinci (allergy) ko kayan da aka yi amfani da su, da \"kuna yin...?\".",
            "Ku fara rubuta su daga tunaninku, tes ɗinku da saƙonninku. Sannan ku ba mataimakin AI amsoshinku na gaske a rubuce ba tare da tsari ba, ku nemi ya mayar da su FAQ mai sarari: \"Ga amsoshina a rubuce ba tare da tsari ba. Ka yi gajeren FAQ don shafin intanet na wurin gyaran farcena. Mai daɗi, kalmomi masu sauƙi.\"",
            "Ku duba kowace amsa da abin da kuke yi a zahiri. FAQ a shafinku na intanet ko a allo alƙawari ne ga abokan ciniki."
          ],
          steps: ["Ku jera tambayoyi goma da kuka fi ji.", "Ku rubuta amsarku ta gaske ga kowacce, ba tare da tsari ba.", "Ku nemi AI ya mayar da su FAQ mai sarari.", "Ku duba kowace amsa, sannan ku saka ta a shafinku, shafinku na sada zumunta ko a kan teburin shago."],
          words: [["FAQ", "gajartawar frequently asked questions (tambayoyin da aka fi yi): jerin tambayoyin da aka saba yi da amsoshinsu."]],
          slides: [
            { title: "Tambayoyi goma iri ɗaya", bullets: ["Lokutan buɗewa, farashi, wurin ajiye mota, kai kaya", "Yin alƙawari, mayar da kaya, hanyoyin biya", "\"Kuna yin...?\""] },
            { title: "Gina FAQ", bullets: ["Ku jera tambayoyin", "Ku rubuta amsoshinku na gaske ba tare da tsari ba", "Ku nemi AI ya sa su zama masu sarari da daɗi"] },
            { title: "Ku duba kafin ku saka", bullets: ["FAQ alƙawari ne", "Dole kowace amsa ta yi daidai da abin da kuke yi a zahiri"] }
          ],
          tryIt: "Ku rubuta tambayoyin abokan ciniki goma da aka fi yi muku, da amsa ga kowacce ba tare da tsari ba. Ku nemi mataimakin AI ya yi gajeren FAQ mai daɗi daga gare su, sannan ku duba kowace amsa.",
          youCanNow: "gina FAQ da aka duba daga tambayoyin abokan cinikinku na gaske.",
          quickCheck: [
            { objective: "O1", q: "Me yasa FAQ yake kamar alƙawari ga abokan ciniki?", options: ["Domin abokan ciniki za su dogara da abin da ya faɗa", "Domin kwangilar shari'a ce", "Domin AI ne ya rubuta shi", "Domin ana saka shi sau ɗaya kawai"], answer: 0, why: "Abokan ciniki suna aiki da abin da FAQ ɗinku ya faɗa, don haka dole kowace amsa ta zama gaskiya." },
            { objective: "O1", q: "FAQ na AI ya ce kuna da wurin ajiye mota kyauta, amma ba ku da shi. Me za ku yi?", options: ["Ku bar shi don ya jawo abokan ciniki", "Ku gyara amsar ta yi daidai da abin da kuke yi a zahiri", "Ku ƙara ɗan \"wataƙila\"", "Ku nemi AI ya cire dukkan amsoshin"], answer: 1, why: "Amsoshin FAQ daga ƙa'idojinku na gaske suke, kuma ku ne kuke duba su." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Tsara muryar kasuwancinku",
          minutes: 4,
          goal: "Bayyana yadda kasuwancinku yake magana, ku sa AI ya rubuta da wannan muryar.",
          text: [
            "Muryar kasuwancinku ita ce yadda kasuwancinku yake magana. Gidan abinci na iyali (kamar taqueria, gidan abincin Mekziko) zai iya zama mai ɗumi da wasa; mai shirya takardun haraji mai natsuwa da ƙwarewa; wurin aski mai sauƙin kai da ƙauna kamar maƙwabci.",
            "Ku zaɓi kalmomi uku don muryarku, ku rubuta gajeren jerin abin da za a yi da wanda ba za a yi ba: \"Ku yi: amfani da sunan farko, faɗin na gode, taƙaitawa. Kada ku: yi amfani da kalmomin titi (slang), rubuta da manyan haruffa duka, yi alƙawari kan lokaci.\"",
            "Ku ba AI wannan a farkon hira: \"Ka rubuta da wannan muryar a kowace amsa.\" Yanzu kowace amsa tana kama da kasuwanci ɗaya, ko wane ne a ƙungiyarku ya aika ta."
          ],
          steps: ["Ku zaɓi kalmomi uku na yadda kuke son yin magana.", "Ku rubuta abubuwa uku da za a yi da uku da ba za a yi ba.", "Ku liƙa su a farkon hira.", "Ku nemi amsar misali, ku duba ko tana kama da ku."],
          words: [["Muryar kasuwanci (brand voice)", "yadda kasuwanci yake magana a saƙonninsa."], ["Iri ɗaya (consistent)", "kamar yadda yake kowane lokaci."]],
          slides: [
            { title: "Yaya kasuwancinku yake magana?", bullets: ["Gidan abinci na iyali: mai ɗumi, mai wasa", "Mai shirya haraji: mai natsuwa, mai ƙwarewa", "Wurin aski: mai sauƙin kai, kamar maƙwabci"] },
            { title: "Ku rubuta shi", bullets: ["Kalmomin murya uku", "Abubuwa uku da za a yi da uku da ba za a yi ba"] },
            { title: "Ku yi amfani da shi da AI", bullets: ["Ku liƙa shi a farkon hirar", "Kowace amsa tana kama da kasuwancinku"] }
          ],
          tryIt: "Ku rubuta kalmominku uku na murya da abin da za a yi da wanda ba za a yi ba. Ku liƙa su a mataimakin AI, ku nemi amsa ga \"Kuna buɗe ranar Lahadi?\" Shin tana kama da ku?",
          youCanNow: "bayyana muryar kasuwancinku da samun amsoshin AI da ke kama da kasuwancinku.",
          quickCheck: [
            { objective: "O2", q: "Mece ce muryar kasuwanci?", options: ["Lambar wayar kasuwancinku", "Launukan tambarinku (logo)", "Yadda kasuwancinku yake magana a saƙonni", "Gaisuwar da aka naɗa"], answer: 2, why: "Muryar kasuwanci ita ce yadda kasuwancinku yake magana da abokan ciniki." },
            { objective: "O2", q: "Kuna son kowace amsar AI ta yi kama da gidan burodinku. Me za ku yi?", options: ["Ku yi fatan zai yi tsammani", "Ku nemi sabon salo kowane lokaci", "Ku yi amfani da manyan haruffa duka don nuna farin ciki", "Ku saka kalmomin muryarku da abin da za a yi da wanda ba za a yi ba a farkon hirar"], answer: 3, why: "Ba AI muryarku a farko yana taimaka wa kowace amsa ta yi daidai da ita." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Samfuran amsa don saƙonni, tes da imel",
          minutes: 5,
          goal: "Yi samfuran amsa da ake sake amfani da su, masu wuraren cikawa.",
          text: [
            "Samfurin amsa (reply template) amsa ce da aka shirya mai wuraren da ba a cike ba. Kuna cike wuraren kowane lokaci, don haka kuna amsawa cikin daƙiƙoƙi ba tare da sake rubutu ba.",
            "Samfura masu amfani: tabbatar da alƙawari, tunatarwar alƙawari, oda ta shirya, za mu ɗan jinkirta, yi haƙuri wani kaya ya ƙare, da godiya bayan ziyara. Ku tambayi AI: \"Da muryar kasuwancina, ka rubuta gajerun samfuran tes biyar don kasuwancin wanke mota mai yawo. Ka yi amfani da [sunan abokin ciniki], [rana] da [lokaci] a matsayin wuraren cikawa.\"",
            "Ku ajiye samfuran a rubutun (notes) wayarku ko gajerun hanyoyin tes, ko a manhajar alƙawarinku idan tana ba da damar ajiye amsoshi. Kada ku taɓa liƙa sunayen abokan ciniki na gaske, lambobin wayarsu ko bayanan katinsu a AI don yin su; ku yi amfani da wuraren cikawa."
          ],
          steps: ["Ku zaɓi yanayi biyar da kuke yawan amsawa.", "Ku nemi AI gajeren samfuri ga kowanne, mai wuraren cikawa a cikin baka [ ].", "Ku duba kalmomi da bayanai.", "Ku ajiye su inda za ku kwafe su da sauri."],
          words: [["Samfurin amsa (reply template)", "amsar da aka ajiye mai wuraren da kuke cikawa kowane lokaci."], ["Wurin cikawa (placeholder)", "wurin da ba a cike ba kamar [sunan abokin ciniki] da za ku cike da ainihin bayanai daga baya."]],
          slides: [
            { title: "Ku amsa cikin daƙiƙoƙi", bullets: ["Samfuri amsa ce da aka shirya mai wuraren cikawa", "Ku cike [sunan abokin ciniki], [rana], [lokaci]"] },
            { title: "Samfura biyar masu amfani", bullets: ["Tabbatar da alƙawari da tunatarwa", "Oda ta shirya; za mu ɗan jinkirta", "Yi haƙuri ya ƙare; na gode"] },
            { title: "Ku ajiye su lafiya kuma kusa", bullets: ["Rubutun waya, gajerun hanyoyin tes ko amsoshin da aka ajiye", "Ku yi amfani da wuraren cikawa, ba bayanan abokan ciniki na gaske ba"] }
          ],
          tryIt: "Ku nemi AI samfuran amsa biyar a muryar kasuwancinku masu [wuraren cikawa]. Ku duba su, ku ajiye su inda za ku kwafe su da sauri.",
          youCanNow: "yi da ajiye samfuran amsa da ke bar ku amsa abokan ciniki da sauri kuma iri ɗaya.",
          quickCheck: [
            { objective: "O3", q: "Mene ne samfurin amsa?", options: ["Saƙon da kuke sake amfani da shi mai wuraren cikawa", "Amsar sau ɗaya kawai", "Ra'ayin abokin ciniki", "Jerin farashi"], answer: 0, why: "Samfuri amsa ce da aka shirya mai wuraren da kuke cikawa kowane lokaci." },
            { objective: "O3", q: "Kuna son samfuri don \"odarku ta shirya\". Me za ku ba AI?", options: ["Sunan abokin ciniki na gaske da lambar wayarsa", "Lambar katinku", "Wuraren cikawa kamar [sunan abokin ciniki] da [lokaci]", "Babu komai"], answer: 2, why: "Wuraren cikawa suna hana bayanan sirri shiga, kuma suna sa samfurin ya zama mai sake amfani." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Amsoshin yau da kullum masu sauri da daɗi",
        questions: [
          { objective: "O1", q: "Mene ne ma'anar FAQ?", options: ["Farashin amsa mai sauri", "Tambayoyin da aka fi yi (frequently asked questions)", "Tambaya kyauta", "Jarabawar amsar ƙarshe"], answer: 1, why: "FAQ yana jera tambayoyin da aka saba yi da amsoshinsu." },
          { objective: "O1", q: "AI ya mayar da amsoshinku marasa tsari FAQ. Me ya biyo baya?", options: ["Ku saka shi ba tare da karantawa ba", "Ku ƙara alƙawura", "Ku goge shi", "Ku duba kowace amsa da abin da kuke yi a zahiri"], answer: 3, why: "FAQ alƙawari ne ga abokan ciniki." },
          { objective: "O2", q: "Mece ce muryar kasuwanci?", options: ["Yadda kasuwancinku yake magana a saƙonni", "Muryar waƙar mai kasuwanci", "Lambar wayarku", "Launin tambarinku"], answer: 0, why: "Muryar kasuwanci ita ce yadda kuke magana." },
          { objective: "O3", q: "Wanne ne wurin cikawa mai kyau a samfuri?", options: ["Kalmar sirrinku", "Lambar katin abokin ciniki", "[sunan abokin ciniki]", "Adireshin gida na gaske"], answer: 2, why: "Wuraren cikawa suna hana bayanan sirri shiga kayan AI." },
          { objective: "O3", q: "Me yasa za a yi amfani da samfuran amsa?", options: ["Don ƙara farashi", "Don guje wa abokan ciniki", "Don amsa da sauri kuma iri ɗaya", "Don ɓoye farashi"], answer: 2, why: "Samfura suna adana lokaci kuma suna sa amsoshi su kasance da inganci iri ɗaya." }
        ]
      }
    },
    {
      name: "Babi na 2: Ra'ayoyi, tattaunawa mai wuya da amana",
      lessons: [
        {
          objectives: ["O4"],
          title: "Amsa ra'ayoyin intanet, masu kyau da marasa kyau",
          minutes: 5,
          goal: "Rubuta amsoshi na gaskiya ga ra'ayoyi masu kyau da marasa kyau, ku bi dokar FTC kan ra'ayoyi.",
          text: [
            "Abokan ciniki suna karanta yadda kuke amsa ra'ayoyi (reviews). Ku gode wa ra'ayoyi masu kyau a taƙaice, kuna ambaton abincin ko hidimar da suka so. Ga ra'ayoyi marasa kyau, ku natsu: ku gode musu, ku ce kuna baƙin ciki da abin da ya same su, ku gyara abin da za ku iya, ku gayyace su su tuntuɓe ku kai tsaye. Kada ku yi jayayya a gaban jama'a ko ku bayyana bayanansu na sirri.",
            "AI yana taimaka muku rubuta amsa mai natsuwa idan ranku ya ɓaci. Ku liƙa rubutun ra'ayin (ba bayanan sirri na wanda ya rubuta ba), ku tambaya: \"Ka rubuta gajeriyar amsa mai ladabi. Ka nemi gafara, ka ambaci cewa mun sake horar da ma'aikatanmu kan lokacin jira, ka gayyace su su kira mu.\" Ku faɗi abin da yake gaskiya kawai.",
            "Kada ku taɓa rubuta ra'ayoyi na bogi, ku saye su, ko ku yi amfani da AI don yin su. Hukumar Kasuwanci ta Tarayyar Amurka (FTC) tana da doka, da ta fara aiki tun Oktoba 2024, da ta hana ra'ayoyi da shaidu na bogi, har da waɗanda AI ya yi, da kuma biyan kuɗi don ra'ayoyi sai idan masu kyau ne. Ku karanta shafin tambayoyi da amsoshi na FTC don sanin abin da aka yarda da shi."
          ],
          steps: ["Ku karanta ra'ayin sau biyu, ku jira idan ranku ya ɓaci.", "Ku nemi AI gajeren daftari mai ladabi.", "Ku tabbata kowace magana gaskiya ce.", "Ku gayyaci abokan ciniki marasa jin daɗi su tuntuɓe ku kai tsaye.", "Kada ku taɓa rubutawa, saye ko ƙirƙirar ra'ayoyi na bogi."],
          words: [["Ra'ayi (review)", "makin da abokin ciniki ya ba kasuwancinku da sharhinsa a gaban jama'a."], ["FTC", "Federal Trade Commission (Hukumar Kasuwanci ta Tarayya): hukumar Amurka da ke kare masu saye daga harkokin kasuwanci na zalunci da yaudara."], ["Shaida (testimonial)", "maganar abokin ciniki da ke yabon kasuwanci, da kasuwancin ke amfani da ita a tallarsa."]],
          slides: [
            { title: "Ra'ayoyi masu kyau", bullets: ["Ku gode musu, ku ambaci abin da suka so", "Ku taƙaita, ku faɗi gaskiya"] },
            { title: "Ra'ayoyi marasa kyau", bullets: ["Ku natsu; ku jira idan ranku ya ɓaci", "Ku gode, ku nemi gafara, ku gyara abin da za ku iya", "Ku gayyace su su tuntuɓe ku kai tsaye"] },
            { title: "Dokar FTC kan ra'ayoyi na bogi", bullets: ["Ta hana ra'ayoyi na bogi, har da waɗanda AI ya yi", "Ta hana biyan kuɗi don ra'ayoyi masu kyau kawai", "Tana aiki tun Oktoba 2024: duba ftc.gov"] }
          ],
          sources: [FTC_REVIEWS, FTC_REVIEWS_PR],
          tryIt: "Ku nemo ra'ayi ɗaya na gaske game da kasuwancinku (ko ku rubuta ra'ayi mara kyau na misali game da odar da ta jinkirta). Ku yi amfani da AI don rubuta daftarin amsa mai natsuwa, ku duba cewa kowace magana gaskiya ce, ku gyara ta zuwa muryarku.",
          youCanNow: "amsa ra'ayoyi masu kyau da marasa kyau cikin natsuwa da gaskiya, ba tare da karya dokar FTC kan ra'ayoyi na bogi ba.",
          quickCheck: [
            { objective: "O4", q: "Wace al'ada ta ra'ayoyi ce dokar FTC ta hana?", options: ["Amsa ra'ayoyi marasa kyau", "Biyan abokan ciniki kawai idan sun bar ra'ayoyi masu kyau", "Gode wa abokan ciniki kan ra'ayoyi", "Neman dukkan abokan ciniki su ba da ra'ayoyi na gaskiya"], answer: 1, why: "Ba da lada don ra'ayoyi masu kyau kawai an hana shi a dokar FTC." },
            { objective: "O4", q: "Wani ra'ayi mai zafi ya ɓata muku rai. Me za ku yi?", options: ["Ku amsa nan take da manyan haruffa", "Ku saka ra'ayi mai kyau na bogi don daidaita shi", "Ku nemi abokai su yi jayayya da wanda ya rubuta", "Ku jira, ku sake karantawa, sannan ku rubuta amsa mai natsuwa ta gaskiya"], answer: 3, why: "Jira yana taimaka muku amsa cikin natsuwa da gaskiya." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kwantar da abokin ciniki mai fushi",
          minutes: 5,
          goal: "Yi amfani da hanya mai sauƙi ta matakai huɗu, da taimakon AI, don amsa abokin ciniki mai fushi.",
          text: [
            "Hanya mai sauƙi tana aiki ga yawancin ƙorafe-ƙorafe: Listen, Apologize, Solve, Thank (LAST): Saurara, Nemi gafara, Warware, Gode. Ku saurari dukan ƙorafin, ku nemi gafara kan abin da ya faru, ku ba da magani mai adalci da za ku iya bayarwa a zahiri, ku gode musu da suka faɗa muku.",
            "Ku yanke iyakokinku kafin ku buƙace su: yaushe za ku mayar da kuɗi, sake yin aikin, rage farashi ko ba da wani abu kyauta. AI zai iya rubuta daftarin saƙon, amma ku ne kuke zaɓar maganin. Kada ku bar AI ya yi alƙawarin abin da ba ku amince da shi ba.",
            "Idan abokin ciniki ya yi barazana, ya takura, ko ya ambaci rauni, tsaro ko ɗaukar matakin shari'a, ku taƙaita amsar, kada ku amince da laifi a rubuce, ku yi magana da ƙwararre ko kamfanin inshorarku."
          ],
          steps: ["Saurara: ku karanta ko ku ji dukan ƙorafin.", "Ku nemi gafara kan abin da ya faru.", "Warware: ku ba da gyara mai adalci cikin iyakokinku.", "Ku gode musu da suka faɗa muku.", "Ku nemi AI ya rubuta daftari, sannan ku duba cewa alƙawarin na wanda za ku cika ne."],
          words: [["LAST", "Listen, Apologize, Solve, Thank (Saurara, Nemi gafara, Warware, Gode): hanyar amsa ƙorafe-ƙorafe."], ["Mika matsala sama (escalate)", "kai babbar matsala ga mai kasuwanci, ƙwararre ko kamfanin inshora."]],
          slides: [
            { title: "Hanyar LAST", bullets: ["Listen: Saurara", "Apologize: Nemi gafara", "Solve: Warware", "Thank: Gode"] },
            { title: "Ku fara saka iyakokinku", bullets: ["Yaushe za ku mayar da kuɗi, sake yi ko rage farashi", "Ku ne kuke zaɓar gyara, ba AI ba"] },
            { title: "Yaushe za ku mika matsala sama", bullets: ["Barazana ko takurawa", "Ƙorafin rauni, tsaro ko shari'a", "Ku taƙaita; ku kira ƙwararre ko kamfanin inshora"] }
          ],
          tryIt: "Ku rubuta iyakokinku na mayar da kuɗi da sake yin aiki a layi uku. Sannan ku yi amfani da AI don rubuta amsar LAST ga: \"Kek ɗina ba ɗanɗanon da na nema ba ne, kuma bikin ya lalace.\" Ku duba cewa maganin na wanda za ku bayar a zahiri ne.",
          youCanNow: "amsa abokin ciniki mai fushi da hanyar LAST da magani na gaske mai adalci.",
          quickCheck: [
            { objective: "O5", q: "Mene ne mataki na farko na hanyar LAST?", options: ["Warware", "Gode", "Saurara", "Nemi gafara"], answer: 2, why: "LAST yana farawa da sauraron abokin ciniki." },
            { objective: "O5", q: "Amsar AI ga abokin ciniki mai fushi ta ba da mayar da dukan kuɗi da hidima kyauta na wata ɗaya, fiye da iyakokinku. Me za ku yi?", options: ["Ku canja ta zuwa gyara cikin iyakokinku", "Ku aika ta yadda take", "Ku cire neman gafarar", "Ku yi watsi da abokin ciniki"], answer: 0, why: "Ku ne kuke zaɓar gyara mai adalci cikin iyakokin da kuka saka, ba AI ba." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Sirri, gaskiya da kayan hidimar abokan cinikinku",
          minutes: 5,
          goal: "Haɗa kayan hidimarku wuri ɗaya ku kiyaye bayanan abokan ciniki a sirri.",
          text: [
            "Abokan ciniki sun amince muku da sunayensu, lambobin wayarsu, adireshinsu, wani lokaci har da bayanan katinsu. Ku hana waɗannan shiga kayan AI. Ku yi aiki da wuraren cikawa, sannan ku cike ainihin bayanai da kanku a wayarku ko manhajar alƙawarinku.",
            "Idan kuna amfani da chatbot a shafinku na intanet ko a saƙonni, ku faɗa wa abokan ciniki cewa suna magana da mataimaki mai aiki da kansa (na'ura), kuma ku ba su hanyar kaiwa ga mutum. Ku riƙa duba abin da yake faɗa akai-akai.",
            "Yanzu ku saka komai a takarda ɗaya: muryar kasuwancinku, FAQ ɗinku, samfuranku, hanyar LAST tare da iyakokinku, da amsarku ga ra'ayi. Ku raba ta da ma'aikatanku don kowa ya amsa iri ɗaya."
          ],
          steps: ["Ku duba cewa kowane samfuri yana amfani da wuraren cikawa, ba bayanan gaske ba.", "Idan kuna amfani da chatbot, ku faɗi cewa na'ura ce, ku ba da hanyar kaiwa ga mutum.", "Ku tattara murya, FAQ, samfura, iyakokin LAST da amsoshin ra'ayoyi a takarda ɗaya.", "Ku raba ta da ƙungiyarku."],
          words: [["Chatbot", "shirin kwamfuta mai aiki da kansa da ke amsa saƙonni."], ["Bayanan abokan ciniki", "bayanai game da abokan cinikinku, kamar sunaye, lambobin waya da odoji."]],
          slides: [
            { title: "Ku kiyaye bayanan abokan ciniki a sirri", bullets: ["Babu sunaye tare da waya, adireshi ko kati a AI", "Ku yi amfani da wuraren cikawa; ku cike bayanai da kanku"] },
            { title: "Idan kuna amfani da chatbot", bullets: ["Ku faɗi cewa na'ura ce", "Ku ba da hanyar kaiwa ga mutum", "Ku riƙa duba amsoshinsa akai-akai"] },
            { title: "Kayan hidimar abokan cinikinku", bullets: ["Muryar kasuwanci da FAQ", "Samfura da iyakokin LAST", "Amsoshin ra'ayoyi, an raba su da ƙungiyarku"] }
          ],
          tryIt: "Aikin ƙarshe: ku saka muryar kasuwancinku, FAQ mai tambayoyi goma, samfura biyar, amsa ɗaya ga abokin ciniki mai fushi da amsa ɗaya ga ra'ayi a takarda ɗaya. Ku duba kowane bayani, ku cire duk wani bayanin abokin ciniki na gaske.",
          youCanNow: "gudanar da hidimar abokan cinikinku da kaya da aka duba, masu sirri kuma iri ɗaya, da aka yi da taimakon AI.",
          quickCheck: [
            { objective: "O6", q: "Me yasa za ku raba kayan hidimar abokan cinikinku da ma'aikata?", options: ["Don su canja farashi", "Don kowa ya amsa iri ɗaya", "Don su tsallake horo", "Don abokan ciniki su gyara shi"], answer: 1, why: "Kayan da aka raba suna sa amsoshi su zama iri ɗaya a dukan ƙungiyarku." },
            { objective: "O6", q: "Kuna yin samfura, kuma bayanan katin wani abokin ciniki na gaske suna cikin rubutunku. Me za ku yi?", options: ["Ku liƙa su a AI don ya fahimta", "Ku yi amfani da su a matsayin samfurin misali", "Ku raba su da ma'aikata a cikin kayan", "Ku hana su shiga kayan AI da kayan hidimar"], answer: 3, why: "Dole bayanan katin abokan ciniki su kasance a waje da kayan AI." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Ra'ayoyi, tattaunawa mai wuya da amana",
        questions: [
          { objective: "O4", q: "Wani abokin ciniki ya bar ra'ayi mai tauraro ɗaya game da dogon jira. Mece ce amsa mafi kyau?", options: ["Ku gode masa, ku nemi gafara, ku faɗi abin da kuke gyarawa, ku gayyace shi ya tuntuɓe ku", "Ku yi jayayya cewa ya yi kuskure", "Ku saka lambar wayarsa", "Ku yi watsi da shi har abada"], answer: 0, why: "Amsoshi masu natsuwa na gaskiya suna gina amana." },
          { objective: "O4", q: "A ƙarƙashin dokar FTC, wanne BA a yarda da shi ba?", options: ["Gode wa wanda ya ba da ra'ayi", "Amsa ra'ayi mara kyau", "Neman abokan ciniki masu farin ciki su bar ra'ayoyi na gaskiya", "Amfani da AI don rubuta ra'ayoyin abokan ciniki na bogi"], answer: 3, why: "Dokar FTC ta hana ra'ayoyi na bogi, har da waɗanda AI ya yi." },
          { objective: "O5", q: "Me harafin S a LAST yake nufi?", options: ["Sell (Sayar)", "Solve (Warware)", "Stop (Tsaya)", "Smile (Murmushi)"], answer: 1, why: "Listen, Apologize, Solve, Thank: Saurara, Nemi gafara, Warware, Gode." },
          { objective: "O5", q: "Wane ne yake zaɓar maganin ga abokin ciniki mai fushi?", options: ["Ku, cikin iyakokin da kuka saka", "AI", "Abokin ciniki shi kaɗai", "Wani baƙo a intanet"], answer: 0, why: "AI yana rubuta daftari; ku ne kuke yanke gyara." },
          { objective: "O6", q: "Chatbot na shafinku ya kamata ya:", options: ["Yi kamar shi mutum ne", "Karɓi lambobin kati a hira", "Faɗi cewa na'ura ce, kuma ya ba da hanyar kaiwa ga mutum", "Kada a taɓa duba shi"], answer: 2, why: "Gaskiya da hanyar kaiwa ga mutum suna gina amana." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI don Hidimar Abokan Ciniki da Sadarwa",
    questions: [
      { objective: "O1", q: "Wace tambayar abokin ciniki da aka saba yi ce za a saka a FAQ?", options: ["Mece ce kalmar sirrinku?", "Yaushe kuke buɗewa?", "Mece ce lambar bankinku?", "Su wane ne masu kamfanonin da ke kawo muku kaya?"], answer: 1, why: "Lokutan buɗewa suna cikin tambayoyin da aka fi yi." },
      { objective: "O1", q: "Daga ina amsoshin FAQ ɗinku suke fitowa?", options: ["Ra'ayoyi barkatai", "Tsammanin AI", "Shafin abokin hamayya", "Ƙa'idojinku na gaske, ku kuka rubuta su, AI ya sa su zama masu sarari"], answer: 3, why: "AI yana tsara amsoshinku na gaske ne kawai." },
      { objective: "O1", q: "Me yasa za a duba FAQ kafin a saka shi?", options: ["Don a tsawaita shi", "AI koyaushe daidai yake", "Ba a buƙata ba", "Alƙawari ne ga abokan ciniki"], answer: 3, why: "Abokan ciniki za su riƙe ku da shi." },
      { objective: "O2", q: "Kalmomin murya uku na gidan burodi na iyali za su iya zama:", options: ["Mai fushi, mai gaggawa, mai sanyi", "Mai ɗumi, mai fara'a, mai sauƙi", "Na sirri, marar sarari, mai tsawo", "Na shari'a, mai tsauri, mai zafi"], answer: 1, why: "Kalmomin murya suna bayyana yadda kuke son yin magana." },
      { objective: "O2", q: "A ina za ku saka muryar kasuwancinku don AI ya yi amfani da ita?", options: ["A kan rasit", "A cikin kalmar sirrinku", "A farkon hirar", "Babu inda"], answer: 2, why: "Liƙa ta a sama yana jagorantar kowace amsa." },
      { objective: "O2", q: "Abin da \"ba za a yi ba\" a jerin muryar kasuwanci zai iya zama:", options: ["Rubuta da manyan haruffa duka", "Faɗin na gode", "Amfani da sunan farko", "Taƙaitawa"], answer: 0, why: "Manyan haruffa duka suna iya yin kama da ihu." },
      { objective: "O3", q: "Wanne ne samfurin amsa mai kyau?", options: ["\"Aiko mini da kalmar sirrinka.\"", "\"Sannu Jane Smith, 555-0101, kati 4111...\"", "\"Sannu [sunan abokin ciniki], odarku ta shirya don ɗauka a [lokaci].\"", "\"A'a.\""], answer: 2, why: "Yana amfani da wuraren cikawa kuma yana da sarari." },
      { objective: "O3", q: "A ina za ku ajiye samfura don amfani da sauri?", options: ["Rubutun waya, gajerun hanyoyin tes ko amsoshin da aka ajiye", "A kanku kawai", "A akwatin imel na abokin ciniki", "A kafofin sada zumunta a bainar jama'a"], answer: 0, why: "Samfuran da aka ajiye suna da sauƙin kwafewa." },
      { objective: "O3", q: "Don yin samfura da AI ya kamata ku ba shi:", options: ["Sunaye da lambobin abokan ciniki na gaske", "Wuraren cikawa kamar [rana] da [lokaci]", "Bayanan kati", "Kalmomin sirrinku"], answer: 1, why: "Ku yi amfani da wuraren cikawa, ba bayanan gaske ba." },
      { objective: "O4", q: "Wani ra'ayi mai kyau ya yaba \"oxtail (miyar wutsiyar shanu) mafi daɗi a gari\". Amsa mai kyau:", options: ["Ta ba da kuɗi don wani ra'ayin", "Ta yi watsi da shi", "Ta nemi adireshinsu", "Ta gode musu, ta ambaci oxtail ɗin"], answer: 3, why: "Gajeriyar godiya ta musamman ita ce mafi kyau." },
      { objective: "O4", q: "Biyan abokan ciniki kawai idan sun bar ra'ayoyi masu kyau:", options: ["Dokar FTC ta hana shi", "Wajibi ne", "Kyakkyawan tunani ne", "Ya yi daidai ne a ƙarshen mako kawai"], answer: 0, why: "Dokar ta hana ladan da ya dogara da ra'ayi mai kyau." },
      { objective: "O4", q: "Idan ra'ayi mai zafi ya ɓata muku rai, ya kamata ku fara:", options: ["Rubuta ra'ayoyi masu kyau na bogi", "Amsa nan take da manyan haruffa duka", "Saka bayanan abokin ciniki", "Jira ku sake karanta shi kafin ku amsa"], answer: 3, why: "Amsoshi masu natsuwa sun fi kyau." },
      { objective: "O5", q: "A hanyar LAST, mataki na farko shi ne:", options: ["Dariya", "Tafiya", "Saurara", "Ƙarya"], answer: 2, why: "Ku fara sauraron dukan ƙorafin." },
      { objective: "O5", q: "Me yasa za a saka iyakokin mayar da kuɗi da sake yin aiki kafin ƙorafi?", options: ["Don a ƙi kowa", "Don ku ba da gyare-gyare masu adalci da za ku cika a zahiri", "Don a rikitar da ma'aikata", "Doka ce"], answer: 1, why: "Iyakoki masu sarari suna kawo shawarwari masu adalci da sauri." },
      { objective: "O5", q: "Wani abokin ciniki ya ce ya ji rauni a shagonku. Ya kamata ku:", options: ["Saka labarin a intanet", "Sa AI ya amince da laifi dalla-dalla", "Yi watsi da shi", "Taƙaita amsar ku yi magana da ƙwararre ko kamfanin inshorarku"], answer: 3, why: "Ƙorafin rauni da na shari'a suna buƙatar shawarar ƙwararre." },
      { objective: "O5", q: "AI ya rubuta amsar da ta yi alƙawarin abinci kyauta na shekara ɗaya. Ku:", options: ["Ƙara wasu alƙawura", "Aika ta", "Cire shi sai dai idan kun amince da haka da gaske", "Nemi abokin ciniki ya yanke shawara"], answer: 2, why: "Ku yi alƙawarin abin da za ku cika kawai." },
      { objective: "O6", q: "Bayanan katin abokan ciniki ya kamata:", options: ["A hana su shiga kayan AI", "A liƙa su a hira", "A saka su a amsoshi", "A ajiye su a samfura"], answer: 0, why: "Bayanan kati na sirri ne." },
      { objective: "O6", q: "Idan kuna amfani da chatbot, ya kamata abokan ciniki su iya:", options: ["Kada su taɓa kaiwa ga kowa", "Kaiwa ga mutum", "Biya da katin kyauta (gift card) kawai", "Amfani da kalma ɗaya kawai"], answer: 1, why: "Hanyar kaiwa ga mutum tana gina amana." },
      { objective: "O6", q: "Kayan hidimar abokan cinikinku sun haɗa da:", options: ["Kalmomin sirri", "Murya, FAQ, samfura, iyakokin LAST da amsoshin ra'ayoyi", "Lambobin katin abokan ciniki", "Ra'ayoyi na bogi"], answer: 1, why: "Waɗannan sassan suna sa hidima ta zama mai sauri da iri ɗaya." },
      { objective: "O6", q: "Me yasa za a raba kayan da ma'aikata?", options: ["Don kowa ya amsa iri ɗaya", "Don a rage musu sauri", "Don a ɓoye shi", "Ba shi da amfani"], answer: 0, why: "Kasancewa iri ɗaya yana gina amana." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [0, 2, 3, 6, 8, 9, 10, 12, 13, 16]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Muryar kasuwanci", objective: "O2", notYet: "Babu kalmomin murya, ko babu jerin abin da za a yi da wanda ba za a yi ba.", meets: "Kalmomin murya uku da jerin abin da za a yi da wanda ba za a yi ba.", exceeds: "Amsoshin misali sun yi daidai da muryar a fili." },
      { name: "FAQ da aka duba", objective: "O1", notYet: "Tambayoyi ƙasa da goma, ko amsar da ba gaskiya ba ce.", meets: "Tambayoyi goma da aka saba yi, da amsoshin da aka duba da abin da kuke yi a zahiri.", exceeds: "Amsoshin gajeru ne kuma a muryar kasuwanci." },
      { name: "Samfuran amsa", objective: "O3", notYet: "Ƙasa da biyar, ko samfura masu bayanan abokan ciniki na gaske.", meets: "Samfura biyar da aka duba masu wuraren cikawa.", exceeds: "An ajiye su inda ma'aikata za su kwafe su da sauri." },
      { name: "Amsa ga abokin ciniki mai fushi", objective: "O5", notYet: "Tana kare kai, ko tana ba da gyaran da ba za ku bayar ba.", meets: "Tana bin LAST kuma tana ba da gyara cikin iyakokinku.", exceeds: "Iyakokinku na mayar da kuɗi da sake yin aiki suna rubuce a cikin kayan." },
      { name: "Amsa ga ra'ayi", objective: "O4", notYet: "Tana jayayya, tana faɗin abin da ba gaskiya ba, ko babu ita.", meets: "Mai natsuwa, ta gaskiya, kuma a muryarku.", exceeds: "Tana faɗin abin da kuke gyarawa kuma tana gayyatar abokin ciniki ya tuntuɓe ku." },
      { name: "Sirri da bayanai", objective: "O6", notYet: "Bayanan abokan ciniki na gaske a cikin kayan ko hirar AI, ko bayanan da ba a duba ba.", meets: "Ba a yi amfani da bayanan sirri na abokan ciniki ba, kuma an duba kowane bayani.", exceeds: "Kayan sun rubuta yadda chatbot, idan ana amfani da shi, yake faɗin cewa na'ura ce kuma yake ba da hanyar kaiwa ga mutum." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu kasuwanci da ke amfani da FAQ ko samfuransu kowane mako (binciken biyo baya na kwanaki 30)",
      "Masu kasuwanci da ke amsa kowane sabon ra'ayin intanet cikin mako ɗaya (binciken biyo baya)",
      "Masu kasuwanci da suka ce amsoshinsu sun yi sauri ko ra'ayoyinsu sun inganta cikin kwanaki 90"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ta zamani ko kwamfuta mai intanet",
      "Mataimakin AI kyauta: Microsoft Copilot, ChatGPT ko Google Gemini",
      "Kayan rubuta takarda kyauta kamar Google Docs ko Microsoft Word don kayan hidimar",
      "Jerin tambayoyin abokan ciniki na gaske da iyakokinku na mayar da kuɗi da sake yin aiki",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku nemi masu kasuwanci su kawo tambayoyinsu na gaske da aka saba yi, da ra'ayi ɗaya na gaske ko na misali.",
      "Ku yi amfani da sunayen abokan ciniki na misali kawai; kada ku taɓa liƙa saƙonnin abokan ciniki na gaske masu sunaye ko lambobi a AI.",
      "Ku gwada hanyar LAST bibbiyu da ƙorafin ƙirƙira kafin a rubuta amsar.",
      "Ku tunatar da masu kasuwanci cewa ƙorafin rauni ana kai shi ga ƙwararre ko kamfanin inshorarsu, ba amsar AI ba.",
      "Ku ba da maki ga kayan da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
