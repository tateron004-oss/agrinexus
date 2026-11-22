"use strict";

// Koach Learn course, Hausa (ha) translation of small-business/smallbiz-ai-healthcare-practices.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.
// This course is not legal or compliance advice.

const HHS_CLOUD = { name: "HHS: Jagora kan HIPAA da hidimomin girgije (cloud computing)", url: "https://www.hhs.gov/hipaa/for-professionals/special-topics/health-information-technology/cloud-computing/index.html" };
const HHS_BA = { name: "HHS: Abokan kasuwanci (jagorar HIPAA)", url: "https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/business-associates/index.html" };
const HHS_HIPAA = { name: "HHS: HIPAA ga ma'aikatan lafiya", url: "https://www.hhs.gov/hipaa/for-professionals/index.html" };

module.exports = {
  id: "smallbiz-ai-healthcare-practices-ha",
  lang: "ha",
  translationOf: "smallbiz-ai-healthcare-practices",
  category: "Small Business",
  name: "AI ga Ƙananan Asibitoci da Wuraren Kiwon Lafiya",
  skills: "Sanin lokacin da bayanan majiyyaci za su iya shiga AI da lokacin da ba za su iya ba, Rubuta jagororin magana na teburin karɓar baƙi, Rubuta takardun ilimantar da majiyyata don likita ya duba, Yin samfuran saƙon tsara ganawa da tunatarwa, Rubuta dokokin ofis, Kafa dokokin AI ga ma'aikata",
  outcome: "amfani da AI lafiya don ayyukan ofis na ƙaramin wurin kiwon lafiya: yanke waɗanne ayyuka za su iya amfani da kayan AI na gama-gari da waɗanda ke buƙatar kayan da aka amince da shi mai yarjejeniyar BAA, da yin jagororin magana na teburin karɓar baƙi, samfuran tunatarwa, takarda mai kalmomi masu sauƙi don likita ya duba, da dokar AI ta ma'aikata, ba tare da bayanan majiyyaci a cikin kowane kayan AI na gama-gari ba.",
  about: [
    "Wannan kwas na masu shi, manajojin ofis da ma'aikatan teburin karɓar baƙi na ƙananan wuraren kiwon lafiya ne: asibitocin iyali, asibitocin haƙori, wuraren jinya da ba da shawara (therapy da counseling), likitocin ƙashi (chiropractors), wuraren motsa jiki na jinya (physical therapy), likitocin ido (optometry) da hukumomin kula da lafiya a gida, ciki har da da yawa da 'yan tsiraru suka mallaka masu hidima ga al'ummominsu.",
    "Za ku koyi doka ɗaya mafi muhimmanci: bayanan lafiya masu kariya (PHI) ba sa shiga kayan AI sai dai idan wurin aikinku ya amince da shi kuma yana da yarjejeniyar abokin kasuwanci ta HIPAA (BAA) da kamfanin. Sannan za ku yi amfani da AI don ayyukan ofis da yawa da ba sa buƙatar bayanan majiyyaci ko kaɗan.",
    "A wannan kwas, AI ba ya gano cuta, ba ya ba da magani, kuma ba ya ba da shawarar likita. Likita ko ma'aikacin lafiya mai lasisi yana duba kowane rubutun lafiya da zai je ga majiyyaci. Wannan kwas ba shawarar shari'a ko ta bin doka (compliance) ba ce; ku duba jagorar HHS da mai ba ku shawara kan bin doka. Kowane darasi yana ɗaukar kusan minti biyar, da gwajin ilimi bayan kowane babi da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku haɗa kayan aikin AI na wurin aikinku: jerin ayyuka da aka raba zuwa \"babu PHI, AI na gama-gari ya yi\" da \"akwai PHI, kayan da aka amince da shi mai BAA kaɗai ko babu AI\"; jagororin magana uku na waya don teburin karɓar baƙi; samfuran saƙon tabbatar da ganawa da tunatarwa masu madadi; takardar majiyyata ɗaya mai kalmomi masu sauƙi kan batu na gama-gari, da alamar \"Don likita ya duba\"; da dokar AI ta ma'aikata mai shafi ɗaya. Babu bayanan majiyyaci na gaske a cikin ko ɗaya.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Masu shi, manajojin ofis da ma'aikatan teburin karɓar baƙi na ƙananan wuraren kiwon lafiya: asibitocin iyali, asibitocin haƙori, wuraren therapy da counseling, likitocin ƙashi, wuraren physical therapy, likitocin ido da hukumomin kula da lafiya a gida, ciki har da da yawa da 'yan tsiraru suka mallaka masu hidima ga al'ummominsu.",
    startingPoint: "Suna gudanar da teburin karɓar baƙi, tsara ganawa da takardun ofis kowace rana, kuma sun san muhimman abubuwan sirrin majiyyaci. Da yawa sun ji labarin kayan AI ko sun gwada ɗaya, amma ba su tabbata abin da HIPAA ta yarda da shi ba.",
    gap: "Rubuce-rubucen ofis suna ɗaukar lokacin da ƙananan wuraren kiwon lafiya ba su da shi, amma saka bayanan majiyyaci a kayan AI da bai dace ba yana iya karya dokokin HIPAA kuma ya cutar da majiyyata. Masu koyo suna buƙatar doka a sarari kan waɗanne ayyuka za su iya amfani da AI, da shirye-shiryen jagororin magana, samfura, takardu da dokar ma'aikata da ke hana bayanan majiyyaci shiga.",
    constraints: [
      "Babu PHI a kowane kayan AI na gama-gari; kayan da wurin aiki ya amince da su masu yarjejeniyar BAA kaɗai",
      "AI ba ya taɓa gano cuta, ba da magani ko shawarar likita; likita mai lasisi yana duba duk rubutun lafiya na majiyyata",
      "Ba shawarar shari'a ko ta bin doka ba ce: a duba jagorar HHS da mai ba wurin aikin shawara kan bin doka",
      "Lokaci: teburin karɓar baƙi suna da aiki sosai, don haka kowane darasi kusan minti 5 ne",
      "Kalmomi masu sauƙi ga ma'aikata da takardun majiyyata (kusan matakin karatun aji 6)"
    ],
    prerequisites: "Babu. Masu koyo da ba su saba da mataimakan AI ba za su iya fara ɗaukar kwas na gabatarwa ga AI."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku jerin ayyukan ofis", action: "raba kowane aiki zuwa \"babu PHI, AI na gama-gari ya yi\" ko \"akwai PHI, kayan da aka amince da shi mai BAA kaɗai ko babu AI\"", standard: "kuna sa kowane aiki mai PHI a layi na biyu" },
    { id: "O2", condition: "Idan aka ba ku kiran waya da aka saba samu a teburin karɓar baƙi", action: "rubuta jagororin magana na waya da ke tura kiran neman ƙarin magani, alamun rashin lafiya da na gaggawa zuwa wurin da ya dace", standard: "kowane jagorar gaggawa yana faɗa wa mai kira ya kira 911, kuma shugaban sashen jinya ya amince" },
    { id: "O3", condition: "Ta amfani da madadi maimakon bayanan majiyyaci", action: "yin samfuran saƙon tabbatar da ganawa da tunatarwa da ba sa faɗin dalilin ziyarar", standard: "ba tare da bayanan majiyyaci na gaske a kayan AI ba" },
    { id: "O4", condition: "Idan aka ba ku batun lafiya na gama-gari ga majiyyata", action: "rubuta daftarin takarda mai kalmomi masu sauƙi da sa mata alamar likita ya duba", standard: "a kusan matakin karatun aji 6, da layin tuntuɓarku da sanarwar 911" },
    { id: "O5", condition: "Idan aka ba ku aikin rubutun ofis kamar doka, imel ko tallar aiki", action: "rubuta daftarinsa da kayan AI na gama-gari da lissafa duk wani sashe da ke buƙatar dubawar bin doka ko ta HR", standard: "ba tare da amfani da bayanan majiyyaci ba" },
    { id: "O6", condition: "Don wurin aikinku", action: "rubuta dokar AI ta ma'aikata mai shafi ɗaya da dokoki biyar zuwa bakwai", standard: "har da babu PHI ba tare da BAA ba, kayan da aka amince da su da sunayensu, kai rahoton kuskure da dubawa kowace shekara" }
  ],
  chapters: [
    {
      name: "Babi na 1: HIPAA da farko, sannan teburin karɓar baƙi",
      lessons: [
        {
          objectives: ["O1"],
          title: "PHI, HIPAA da AI: dokar da ke zuwa da farko",
          minutes: 6,
          goal: "Yanke ko wani aiki zai iya amfani da kayan AI na gama-gari ko yana buƙatar kayan da aka amince da shi mai BAA.",
          text: [
            "Bayanan lafiya masu kariya (PHI) bayanan lafiya ne da za su iya gane wani majiyyaci: sunaye tare da cututtuka, ranar haihuwa, rubutun fayil na majiyyaci, lambobin inshora, bayanan ganawa, hotuna da sauransu. HIPAA tana kafa dokoki kan yadda wuraren kiwon lafiya ke kare su.",
            "Jagorar HHS ta ce idan wani wurin kiwon lafiya da dokar ta shafa (covered entity) yana amfani da hidimar waje, kamar hidimar girgije (cloud), don ƙirƙira, karɓa, ajiyewa ko aika PHI, wannan hidimar abokin kasuwanci ce (business associate), kuma wurin aikin yana buƙatar yarjejeniyar abokin kasuwanci (BAA) da ita. Amfani da irin wannan hidima don PHI ba tare da BAA ba yana karya dokokin HIPAA. Yawancin kayan hira na AI kyauta na gama-gari ba sa sa hannu a BAA da mutane ɗaiɗaiku.",
            "Don haka ku raba kowane aiki: idan yana buƙatar PHI, ku yi amfani da kayan da wurin aikinku ya amince da shi kuma yake da BAA da shi kaɗai, ko kada ku yi amfani da AI. Idan ba ya buƙatar PHI, kamar takardar bayani ta gama-gari, jagorar magana ta waya ko dokar ofis, kayan AI na gama-gari zai iya taimakawa. Idan kuna shakka, ku tambayi jami'in bin doka ko na sirri."
          ],
          steps: ["Ku lissafa ayyukan ofis da kuke son taimako da su.", "Ku tambaya: wannan aikin yana buƙatar wani bayanin majiyyaci?", "Babu PHI: kayan AI na gama-gari zai iya taimakawa.", "Akwai PHI: kayan da aka amince da shi mai BAA kaɗai, ko babu AI.", "Kuna shakka: ku tambayi jami'in sirri ko na bin doka."],
          words: [["PHI", "bayanan lafiya masu kariya (protected health information): bayanan lafiya da za su iya gane majiyyaci."], ["HIPAA", "dokar tarayyar Amurka da ke da dokokin kare bayanan lafiya."], ["Yarjejeniyar abokin kasuwanci (BAA)", "kwangilar da kamfani ke yarda zai kare PHI bisa HIPAA."], ["Covered entity (wanda dokar ta shafa)", "shirin inshorar lafiya, cibiyar sarrafa bayanai (clearinghouse) ko mai ba da kiwon lafiya da dole ya bi HIPAA."]],
          slides: [
            { title: "Abin da ake ƙirgawa a matsayin PHI", bullets: ["Sunaye tare da cututtuka, ranar haihuwa", "Rubutun fayil, lambobin inshora, ganawa", "Hotuna da sauran bayanan da ke gane mutum"] },
            { title: "HHS kan hidimomin waje", bullets: ["Hidimar da ke sarrafa PHI abokin kasuwanci ce", "Wurin aikin yana buƙatar BAA da ita", "PHI ba tare da BAA ba yana karya dokokin HIPAA"] },
            { title: "Ku raba kowane aiki", bullets: ["Babu PHI: AI na gama-gari zai iya taimakawa", "Akwai PHI: kayan da aka amince da shi mai BAA kaɗai, ko babu AI", "Kuna shakka: ku tambayi jami'in bin doka"] }
          ],
          sources: [HHS_CLOUD, HHS_BA, HHS_HIPAA],
          tryIt: "Ku lissafa ayyuka goma a ofishinku. Ku raba su zuwa layuka biyu: \"Babu PHI: AI na gama-gari ya yi\" da \"Akwai PHI: kayan da aka amince da shi mai BAA kaɗai ko babu AI\".",
          youCanNow: "yanke ko aikin ofis zai iya amfani da kayan AI na gama-gari ko yana buƙatar kayan da aka amince da shi mai BAA.",
          quickCheck: [
            { objective: "O1", q: "Wanne a cikin waɗannan PHI ne?", options: ["Lambar inshorar wani majiyyaci", "Lokutan buɗe ofishinku", "Tallar aikin mai karɓar baƙi", "Takardar bayani ta gama-gari kan wanke hannu"], answer: 0, why: "Lambobin inshora bayanan lafiya ne da za su iya gane majiyyaci." },
            { objective: "O1", q: "Kuna son AI ya taimaka rubuta jagorar magana ta waya game da wurin ajiye mota. Wane kayan aiki za ku iya amfani da shi?", options: ["Kayan aiki mai BAA kaɗai", "Kayan AI na gama-gari, domin ba ya buƙatar PHI", "Babu kayan AI ko ɗaya", "Wayar majiyyaci kaɗai"], answer: 1, why: "Ayyukan da ba sa buƙatar bayanan majiyyaci za su iya amfani da kayan AI na gama-gari." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Jagororin magana na waya da saƙo na teburin karɓar baƙi",
          minutes: 5,
          goal: "Rubuta jagororin magana a sarari kuma masu tausayi don kiran da aka saba samu.",
          text: [
            "Ma'aikatan teburin karɓar baƙi suna samun kira iri ɗaya kowace rana: tambayoyin sababbin majiyyata, inshorar da ake karɓa, kwatance da wurin ajiye mota, canza lokacin ganawa, neman ƙarin magani (refill), neman takardun lafiya, da wanda yake kama da yana cikin gaggawa.",
            "Waɗannan jagororin magana ba sa buƙatar bayanan majiyyaci, don haka kayan AI na gama-gari zai iya taimakawa: \"Ka rubuta gajeriyar jagorar magana ta waya mai daɗi don asibitin haƙori na iyali, ga sabon majiyyaci da ke tambaya ko muna karɓar inshorarsa. Dokarmu: [dokarku]. Kada ta wuce kalmomi 80.\"",
            "Kowace jagorar magana da ta shafi jinya dole ta tura mai kira zuwa ga mutumin da ya dace: tambayoyin ƙarin magani da alamun rashin lafiya suna zuwa ga ma'aikatan jinya, kuma kowace jagorar gaggawa tana faɗa wa mai kira ya katse ya kira 911 ko ya je ɗakin gaggawa (ER) mafi kusa. Ku sa shugaban sashen jinya ya amince da waɗannan jagororin."
          ],
          steps: ["Ku lissafa kira goma da kuka fi samu.", "Ku nemi AI ya rubuta gajeriyar jagora ga kowanne, da dokokinku na gaske.", "Ku tabbata tambayoyin jinya suna zuwa ga ma'aikatan jinya.", "Ku ƙara layin gaggawa: a kira 911.", "Ku sa shugaban sashen jinya ya amince da su."],
          words: [["Jagorar magana (script)", "gajeren jagora na abin da za a faɗa a kiran da aka saba samu."], ["Triage (tantance gaggawa)", "yanke yadda matsalar lafiya take da gaggawa; ma'aikatan jinya ne ke yi, ba teburin karɓar baƙi ko AI ba."]],
          slides: [
            { title: "Kiran da aka saba samu", bullets: ["Sababbin majiyyata da inshora", "Kwatance, canza lokaci, takardun lafiya", "Ƙarin magani da yiwuwar gaggawa"] },
            { title: "Ba a buƙatar PHI", bullets: ["AI na gama-gari zai iya rubuta daftarinsu", "Ku ba shi dokokinku na gaske", "Kowanne kada ya wuce kusan kalmomi 80"] },
            { title: "Ku tura tambayoyin jinya", bullets: ["Ƙarin magani da alamun rashin lafiya -> ma'aikatan jinya", "Gaggawa -> a kira 911 ko a je ER", "Shugaban sashen jinya yana amincewa da jagororin"] }
          ],
          tryIt: "Ku nemi AI ya rubuta jagororin magana uku na teburin karɓar baƙi: tambayar inshora, canza lokacin ganawa, da mai kira da ke bayanin ciwon ƙirji (wanda dole ya faɗa masa ya kira 911). Ku sa musu alama don shugaban sashen jinya ya amince.",
          youCanNow: "rubuta jagororin magana na teburin karɓar baƙi masu tausayi, a sarari, kuma masu tura tambayoyin jinya lafiya.",
          quickCheck: [
            { objective: "O2", q: "Ina jagorar magana ta teburin karɓar baƙi za ta tura neman ƙarin magani?", options: ["Zuwa kayan AI", "Zuwa ofishin biyan kuɗi", "Zuwa ma'aikatan jinya", "Zuwa kantin magani na mai kira kaɗai"], answer: 2, why: "Tambayoyin ƙarin magani da alamun rashin lafiya suna zuwa ga ma'aikatan jinya." },
            { objective: "O2", q: "AI ya rubuta jagora don mai kira da ke fama da numfashi da ke cewa \"Za mu kira ku gobe.\" Me za ku yi?", options: ["Ku yi amfani da ita; tana da ladabi", "Ku gajarta ta", "Ku fassara ta", "Ku canja ta don ta faɗa wa mai kira ya katse ya kira 911 ko ya je ɗakin gaggawa mafi kusa"], answer: 3, why: "Kowace jagorar gaggawa tana faɗa wa mai kira ya kira 911 ko ya je ɗakin gaggawa mafi kusa." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Samfuran tsara ganawa da tunatarwa",
          minutes: 5,
          goal: "Yin samfuran saƙon tabbatar da ganawa da tunatarwa da ke kare sirri.",
          text: [
            "Samfura suna ajiye lokaci kuma suna rage rashin zuwan majiyyata. Ku rubuta su da madadi: \"Sannu [suna na farko], wannan [sunan asibiti] ne, muna tabbatar da ganawarku a ranar [rana] da ƙarfe [lokaci]. Ku amsa da C don tabbatarwa ko ku kira [lambar waya] don canza lokaci.\"",
            "Ku sa tunatarwa ta zama gajeriya. Kada ku sa dalilin ziyarar ko irin mai ba da kiwon lafiya idan hakan zai bayyana bayanan sirri, kamar ziyarar therapy ko ta wani ƙwararren likita. Tsarin gudanar da asibitinku ko tsarin aika saƙo ga majiyyata ne ke cike ainihin bayanan, ba kayan AI ba.",
            "Ku nemi AI ya rubuta su a wasu harsunan da majiyyatanku ke magana, sannan ku sa ma'aikaci mai iya harshen sosai ko ƙwararren mai fassara ya duba su."
          ],
          steps: ["Ku nemi AI samfuran tabbatarwa, tunatarwa da canza lokaci masu madadi.", "Ku cire duk abin da ke bayyana dalilin ziyarar.", "Ku saka su a tsarin tsara ganawarku, wanda ke cike bayanan.", "Ku sa mutum mai iya harshen ko ƙwararre ya duba fassarorin."],
          words: [["Tsarin gudanar da asibiti (practice management system)", "manhajar da wurin kiwon lafiya ke amfani da ita don tsara ganawa da biyan kuɗi."], ["Mafi ƙarancin abin da ake buƙata (minimum necessary)", "ra'ayin HIPAA na amfani da ko raba bayanan da ake buƙata don aikin kaɗai."]],
          slides: [
            { title: "Samfura masu madadi", bullets: ["[suna na farko], [rana], [lokaci], [lambar waya]", "Kayan AI ba ya taɓa ganin ainihin bayanai"] },
            { title: "Ku sa tunatarwa gajeriya", bullets: ["Kada ku sa dalilin ziyarar", "Ku yi hankali da fannoni masu muhimmancin sirri", "Tsarin tsara ganawarku ne ke cike bayanai"] },
            { title: "Wasu harsuna", bullets: ["AI yana rubuta daftarin fassara", "Mutum mai iya harshen ko ƙwararre yana dubawa"] }
          ],
          tryIt: "Ku nemi AI samfurin tabbatarwa, na tunatarwa kwana ɗaya kafin ganawa, da na canza lokaci, duka masu madadi. Ku cire duk abin da ke bayyana dalilin zuwan majiyyaci.",
          youCanNow: "yin samfuran ganawa masu kare sirri da taimakon AI.",
          quickCheck: [
            { objective: "O3", q: "Me ke cike ainihin bayanan majiyyaci a tunatarwa?", options: ["Tsarin gudanar da asibitinku ko tsarin aika saƙo", "Kayan AI na gama-gari", "Kamfanin inshorar majiyyaci", "Kalandar takarda"], answer: 0, why: "Tsarin tsara ganawa ko aika saƙonku ne ke cike ainihin bayanai, ba kayan AI ba." },
            { objective: "O3", q: "Samfurin tunatarwa yana cewa \"ganawarku ta therapy.\" Me za ku canja?", options: ["Babu komai", "Ku cire kalmar \"therapy\" don kada ta bayyana bayanan sirri", "Ku ƙara sunan cutar", "Ku ƙara lambar wayar gidan likitan therapy"], answer: 1, why: "Kada ku sa dalilin ziyarar ko irin mai ba da kiwon lafiya idan zai bayyana bayanan sirri." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: HIPAA da farko, sannan teburin karɓar baƙi",
        questions: [
          { objective: "O1", q: "Wanne ne bayanan lafiya masu kariya (PHI)?", options: ["Kwatancen wurin ajiye mota na ofishinku", "Sunan majiyyaci tare da cutarsa", "Takardar bayani ta gama-gari kan wanke hannu", "Lokutan aikin ofishinku"], answer: 1, why: "Bayanan lafiya da ke gane majiyyaci PHI ne." },
          { objective: "O1", q: "A cewar HHS, hidimar da ke ajiye PHI don wurin aikinku tana buƙatar:", options: ["Kalmar sirrin majiyyaci", "Babu komai", "Asusun kafofin sada zumunta", "Yarjejeniyar abokin kasuwanci (BAA)"], answer: 3, why: "Hidimomin da ke sarrafa PHI abokan kasuwanci ne kuma suna buƙatar BAA." },
          { objective: "O1", q: "Kuna son AI ya taƙaita rubutun fayil na wani majiyyaci. Wurin aikinku ba shi da BAA da kayan aikin. Me za ku yi?", options: ["Kada ku yi amfani da wannan kayan don haka", "Ku liƙa rubutun a ciki", "Ku cire sunan ƙarshe kawai ku liƙa", "Ku tambayi aboki"], answer: 0, why: "PHI yana shiga kayan da aka amince da su masu BAA kaɗai." },
          { objective: "O2", q: "Mai kira yana bayanin ciwon ƙirji. Jagorar magana ya kamata ta:", options: ["Nemi AI ya gano cutar", "Sa masa ganawa a mako mai zuwa", "Faɗa masa ya kira 911 ko ya je ER mafi kusa", "Sa shi ya jira a waya"], answer: 2, why: "Gaggawa tana zuwa 911." },
          { objective: "O3", q: "Me ya kamata tunatarwa ta saƙon tes ta bari?", options: ["Lokacin", "Ranar", "Dalilin ziyarar", "Lambar wayar asibitin"], answer: 2, why: "Gajerun tunatarwa suna kare sirri." }
        ]
      }
    },
    {
      name: "Babi na 2: Takardun majiyyata, aikin ofis da dokokin ma'aikata",
      lessons: [
        {
          objectives: ["O4"],
          title: "Takardun majiyyata masu kalmomi masu sauƙi, da likita ya duba",
          minutes: 5,
          goal: "Rubuta daftarin takardar majiyyata ta gama-gari da kalmomi masu sauƙi, ku aika ta don likita ya duba.",
          text: [
            "Majiyyata da yawa suna fama da kalmomin likitanci. AI yana da kyau wajen sake rubuta bayanai na gama-gari da kalmomi masu sauƙi: yadda ake shiri don wanke haƙori, abin da za a kawo a ziyarar farko, shawarwari na gama-gari kan motsa jiki.",
            "Ku yi amfani da batutuwa na gama-gari kaɗai, kada ku taɓa amfani da bayanan wani majiyyaci. Ku tambaya: \"Ka rubuta takarda mai shafi ɗaya a kusan matakin karatun aji 6 kan yadda ake shiri don ziyarar farko ta physical therapy. Gajerun jimloli, kanun labarai, babu shawarar likita sai shirye-shirye na gama-gari.\"",
            "AI yana iya yin kuskure kan bayanan lafiya. Ku sa wa kowane daftari alamar \"Don likita ya duba\", kuma ku sa likita mai lasisi ya duba ya amince da shi kafin kowane majiyyaci ya gan shi. Ku ƙara layin tuntuɓar asibitinku da sanarwa cewa a kira 911 idan akwai gaggawa."
          ],
          steps: ["Ku zaɓi batu na gama-gari da majiyyata ke tambaya a kai.", "Ku nemi AI ya rubuta daftari mai kalmomi masu sauƙi da kanun labarai.", "Ku sa masa alamar \"Don likita ya duba\".", "Likita mai lasisi yana gyarawa yana amincewa.", "Ku ƙara layin tuntuɓarku da sanarwar 911."],
          words: [["Kalmomi masu sauƙi (plain language)", "rubutun da yawancin mutane ke fahimta a karon farko da suka karanta shi."], ["Matakin karatu", "yadda rubutu yake da wuyar karantawa, sau da yawa ana bayar da shi a matsayin ajin makaranta."]],
          slides: [
            { title: "Kalmomi masu sauƙi suna taimakon majiyyata", bullets: ["Shiri don ziyara", "Abin da za a kawo", "Halaye na gama-gari masu kyau ga lafiya"] },
            { title: "Batutuwa na gama-gari kaɗai", bullets: ["Kada a taɓa amfani da bayanan wani majiyyaci", "Ku nemi kusan matakin karatun aji 6"] },
            { title: "Dubawar likita", bullets: ["Ku sa wa daftari alamar \"Don likita ya duba\"", "Likita mai lasisi yana amincewa", "Ku ƙara layin tuntuɓa da sanarwar 911"] }
          ],
          tryIt: "Ku nemi AI ya rubuta takarda mai shafi ɗaya kan batu na gama-gari don wurin aikinku. Ku sa mata alamar \"Don likita ya duba\" kuma ku lissafa bayanai biyu da ya kamata likita ya duba.",
          youCanNow: "rubuta daftarin takardun majiyyata masu kalmomi masu sauƙi da AI, da tura su don likita ya amince.",
          quickCheck: [
            { objective: "O4", q: "Wane batu ne ya dace da daftarin takarda ta gama-gari da AI?", options: ["Sakamakon gwajin Malam Lee", "Canje-canjen maganin wani majiyyaci", "Abin da za a kawo a ziyarar farko", "Gano cutar mai kira"], answer: 2, why: "Ku yi amfani da batutuwa na gama-gari kaɗai, kada ku taɓa amfani da bayanan wani majiyyaci." },
            { objective: "O4", q: "Daftarin takardar da AI ya rubuta yana da kyau. Me za ku yi kafin majiyyaci ya gan ta?", options: ["Ku buga ta nan take", "Ku saka ta a shafin intanet", "Ku tambayi AI ko daidai take", "Ku sa mata alamar \"Don likita ya duba\" ku sa likita mai lasisi ya amince da ita"], answer: 3, why: "AI yana iya yin kuskure kan bayanan lafiya, don haka likita mai lasisi yana duba kowane daftari." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Dokokin ofis, imel da tallace-tallacen aiki",
          minutes: 4,
          goal: "Amfani da AI don takardun ofis da ba sa buƙatar bayanan majiyyaci.",
          text: [
            "Babban sashe na gudanar da wurin kiwon lafiya rubutun kasuwanci ne na yau da kullum: dokar soke ganawa da rashin zuwa, imel ga ma'aikata game da sabon tsarin waya, tallar aikin mataimakin likita (medical assistant), wasiƙar ƙorafi ga mai sayar da kaya, jerin abubuwan yi ga sabon ma'aikaci.",
            "Waɗannan ba sa buƙatar PHI, don haka kayan AI na gama-gari za su iya rubuta daftarinsu. Ku ba da dokokinku da bayananku na gaske: \"Ka rubuta dokar rashin zuwa mai daɗi don wurin counseling: sanarwa awa 24 kafin lokaci, kuɗin $50 bayan rashin zuwa na biyu. Kalmomi masu sauƙi.\"",
            "Ku duba duk wata doka da ta shafi shari'a: kuɗaɗe, aikin yi, biyan kuɗi da haƙƙoƙin majiyyata suna iya kasancewa ƙarƙashin doka. Ku sa mai ba ku shawara kan bin doka, mai ba da shawara kan HR ko lauya ya duba kafin ku wallafa."
          ],
          steps: ["Ku zaɓi takardar ofis da ba ta da bayanan majiyyaci.", "Ku ba AI ainihin bayanan dokarku.", "Ku gyara ta don ta yi kama da yadda kuke magana.", "Ku sa mai ba da shawara kan bin doka, HR ko shari'a ya duba duk abin da doka ta shafa."],
          words: [["Dokar rashin zuwa (no-show policy)", "dokokin wurin aikin game da ganawar da aka rasa."], ["Mai ba da shawara kan bin doka (compliance advisor)", "mutumin da ke taimakon wurin kiwon lafiya ya bi dokoki da ƙa'idojin kiwon lafiya."]],
          slides: [
            { title: "Rubutun kasuwanci na yau da kullum", bullets: ["Dokar soke ganawa da rashin zuwa", "Imel ga ma'aikata da tallace-tallacen aiki", "Wasiƙu ga masu sayar da kaya da jerin abubuwan yi"] },
            { title: "Babu PHI: AI na gama-gari zai iya taimakawa", bullets: ["Ku ba da bayananku na gaske", "Ku gyara don ya yi kama da ku"] },
            { title: "Ku duba batutuwan da doka ta shafa", bullets: ["Kuɗaɗe, aikin yi, biyan kuɗi, haƙƙoƙin majiyyata", "Dubawar bin doka, HR ko shari'a"] }
          ],
          tryIt: "Ku nemi AI ya rubuta daftarin dokar rashin zuwa ta wurin aikinku ko tallar aikin teburin karɓar baƙi. Ku rubuta duk abin da ke buƙatar dubawar bin doka ko HR.",
          youCanNow: "amfani da AI don takardun ofis da ba su da bayanan majiyyaci, da dubawar da ta dace.",
          quickCheck: [
            { objective: "O5", q: "Wanne ne rubutun kasuwanci na yau da kullum da ba ya buƙatar PHI?", options: ["Jerin abubuwan yi ga sabon ma'aikaci", "Rubutun fayil na wani majiyyaci", "Wasiƙar sakamakon gwaji ga majiyyaci ɗaya", "Takardar tura majiyyaci mai sunan cutarsa"], answer: 0, why: "Dokoki, imel, tallace-tallacen aiki da jerin abubuwan yi ba sa buƙatar bayanan majiyyaci." },
            { objective: "O5", q: "AI ya rubuta daftarin dokar rashin zuwa mai kuɗi. Me za ku yi kafin ku wallafa ta?", options: ["Ku wallafa ta nan take", "Ku sa mai ba da shawara kan bin doka, HR ko lauya ya duba ta", "Ku ninka kuɗin", "Ku cire ranar"], answer: 1, why: "Kuɗaɗe da haƙƙoƙin majiyyata suna iya kasancewa ƙarƙashin doka, don haka mai ba da shawara yana fara dubawa." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Rubuta dokar AI ta wurin aikinku",
          minutes: 5,
          goal: "Rubuta dokar AI mai shafi ɗaya ga ma'aikata da kammala kayan aikin AI na wurin aikinku.",
          text: [
            "Wataƙila ma'aikata sun riga sun fara amfani da AI a wayoyinsu. Gajeriyar doka a rubuce tana kare majiyyata da wurin aikin. Dokoki biyar zuwa bakwai sun isa a fara.",
            "Misalan dokoki: (1) Babu PHI a kowane kayan AI sai dai idan wurin aikin ya amince da shi kuma yana da BAA. (2) Ana lissafa kayan da aka amince da su da sunayensu. (3) AI ba ya taɓa ba majiyyata gano cuta ko shawarar magani. (4) Likita mai lasisi yana amincewa da duk wani bayanin lafiya da zai je ga majiyyata. (5) Ma'aikata suna duba bayanai a daftarin AI. (6) A kai rahoton duk wani PHI da aka saka bisa kuskure ga jami'in sirri nan take. (7) Ana duba dokar kowace shekara.",
            "Ku yi amfani da AI don inganta kalmomin, sannan ku sa jami'in sirri ko na bin doka ya amince da ita, ku horar da ma'aikata, kuma ku ajiye kwafi da aka sa hannu."
          ],
          steps: ["Ku rubuta daftarin dokoki biyar zuwa bakwai.", "Ku lissafa kayan da aka amince da su da sunayensu.", "Ku ƙara yadda ake kai rahoton kuskure.", "Ku nemi AI ya inganta kalmomin.", "Ku sami amincewar bin doka, ku horar da ma'aikata, ku ajiye kwafi da aka sa hannu."],
          words: [["Jami'in sirri (privacy officer)", "mutumin da ke da alhakin sirrin HIPAA a wurin kiwon lafiya."], ["Kayan da aka amince da shi", "kayan aikin da wurin aikin ya duba ya yarda da shi, mai BAA idan yana sarrafa PHI."]],
          slides: [
            { title: "Dalilin samun doka", bullets: ["Wataƙila ma'aikata sun riga sun fara amfani da AI", "Tana kare majiyyata da wurin aikin"] },
            { title: "Muhimman dokoki", bullets: ["Babu PHI ba tare da kayan da aka amince da shi mai BAA ba", "AI ba ya gano cuta ko ba da shawarar magani", "Likita yana amincewa da bayanin lafiya na majiyyata"] },
            { title: "Ku sa ta yi aiki", bullets: ["A kai rahoton PHI da aka saka bisa kuskure nan take", "Jami'in bin doka yana amincewa; a horar da ma'aikata", "A duba ta kowace shekara"] }
          ],
          sources: [HHS_BA],
          tryIt: "Aikin ƙarshe: ku rubuta dokar AI ta ma'aikatanku mai shafi ɗaya kuma ku haɗa kayan aikin AI na wurin aikinku: jerin ayyuka da aka raba, jagororin magana uku, samfuran tunatarwa, takarda mai alamar likita ya duba, da dokar. Ku duba cewa babu bayanan majiyyaci na gaske a ko'ina.",
          youCanNow: "jagorantar amfani da AI lafiya a wurin kiwon lafiya da dokoki a sarari da kayan aiki masu amfani da ba su da PHI.",
          quickCheck: [
            { objective: "O6", q: "Dokoki nawa darasin ya ba da shawara don dokar AI ta farko?", options: ["Ɗaya", "Hamsin", "Biyar zuwa bakwai", "Babu; ku faɗa wa ma'aikata da baki kawai"], answer: 2, why: "Dokoki biyar zuwa bakwai sun isa a fara." },
            { objective: "O6", q: "Daftarin dokar AI ɗinku ya shirya. Mene ne matakai na gaba?", options: ["Ku ajiye ta a aljihun tebur", "Ku saka ta a intanet don majiyyata", "Ku bar kowane ma'aikaci ya canja ta", "Ku sa jami'in sirri ko na bin doka ya amince da ita, ku horar da ma'aikata ku ajiye kwafi da aka sa hannu"], answer: 3, why: "Jami'in yana amincewa, ana horar da ma'aikata, kuma kuna ajiye kwafi da aka sa hannu." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Takardun majiyyata, aikin ofis da dokokin ma'aikata",
        questions: [
          { objective: "O4", q: "Wane ne ke amincewa da takardar majiyyata da AI ya rubuta?", options: ["Likita mai lasisi", "AI", "Teburin karɓar baƙi shi kaɗai", "Majiyyaci"], answer: 0, why: "Likitoci ne ke duba bayanan lafiya." },
          { objective: "O4", q: "Wane batu ne ya yi daidai don daftarin takarda ta gama-gari da AI?", options: ["Rubutun fayil", "Sakamakon gwajin Malam Lee", "Jerin magungunan wani majiyyaci", "Yadda ake shiri don ziyarar farko"], answer: 3, why: "Batutuwa na gama-gari ba su da PHI." },
          { objective: "O5", q: "Wane aikin ofis ne zai iya amfani da kayan AI na gama-gari?", options: ["Taƙaita rubutun ziyarar wani majiyyaci", "Tallar aikin mataimakin likita", "Rubuta wasiƙa da ke da cutar wani majiyyaci", "Sa lambobin biyan kuɗi (coding) na takardar wani majiyyaci"], answer: 1, why: "Ba ta da bayanan majiyyaci." },
          { objective: "O6", q: "Wani ma'aikaci ya liƙa sunan majiyyaci da cutarsa a kayan AI kyauta bisa kuskure. Me ya kamata dokar ta ce a yi?", options: ["A kai rahoto ga jami'in sirri nan take", "A ɓoye shi", "A goge kwamfutar", "Kada a yi komai"], answer: 0, why: "Kai rahoto da wuri yana bar wurin aikin ya ɗauki matakin da ya dace." },
          { objective: "O6", q: "Wace ce doka mai kyau ta AI?", options: ["PHI zai iya zuwa ko'ina", "Kowane kayan aiki ya yi", "AI ba ya taɓa ba majiyyata gano cuta ko shawarar magani", "Babu wanda ke duba abin da AI ya rubuta"], answer: 2, why: "Shawarwarin jinya suna hannun likitoci masu lasisi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI ga Ƙananan Asibitoci da Wuraren Kiwon Lafiya",
    questions: [
      { objective: "O1", q: "Ma'anar PHI ita ce:", options: ["Inshorar lafiya ta jama'a", "Bayanan lafiya masu kariya", "Binciken gida na sirri", "Ma'aunin lafiya na farko"], answer: 1, why: "Bayanan lafiya ne da ke gane majiyyaci." },
      { objective: "O1", q: "Wanne ne PHI?", options: ["Fosta ta gama-gari game da lokacin mura", "Lokutan aikin ofis", "Kwatancen wurin ajiye mota", "Ranar haihuwa tare da irin ganawa"], answer: 3, why: "Bayanan da ke gane mutum tare da bayanan lafiya PHI ne." },
      { objective: "O1", q: "BAA ita ce:", options: ["Fom na majiyyaci", "Lambar biyan kuɗi", "Katin inshora", "Kwangilar da kamfani ke yarda zai kare PHI"], answer: 3, why: "Yarjejeniyar abokin kasuwanci tana rufe yadda ake sarrafa PHI." },
      { objective: "O1", q: "Yawancin kayan hira na AI kyauta na gama-gari:", options: ["Koyaushe an amince da su a HIPAA", "Ba sa sa hannu a BAA da mutane ɗaiɗaiku", "HHS ce ke gudanar da su", "Suna goge komai nan take"], answer: 1, why: "Kada ku ɗauka cewa kayan aiki na gama-gari an amince da shi don PHI." },
      { objective: "O1", q: "Idan kuna shakka ko aiki zai iya amfani da AI, ku tambayi:", options: ["Majiyyaci", "Kayan AI", "Jami'in sirri ko na bin doka", "Ƙungiyar kafofin sada zumunta"], answer: 2, why: "Su ne ke yanke abin da aka amince da shi." },
      { objective: "O1", q: "A ina ma'aikata za su sami jagorar HIPAA ta hukuma?", options: ["hhs.gov", "Wani shafin blog kawai", "Manhajar hira", "Sharhi a ƙarƙashin labari"], answer: 0, why: "HHS tana wallafa jagorar HIPAA." },
      { objective: "O2", q: "Tambayoyin ƙarin magani da alamun rashin lafiya a waya suna zuwa ga:", options: ["Saƙon murya har abada", "AI", "Ma'aikatan jinya", "Ofishin biyan kuɗi"], answer: 2, why: "Tambayoyin jinya suna buƙatar ma'aikatan jinya." },
      { objective: "O2", q: "Wane ne ke amincewa da jagororin magana na teburin karɓar baƙi da suka shafi jinya?", options: ["Shugaban sashen jinya", "Sabon ma'aikaci", "AI", "Mai sayar da kaya"], answer: 0, why: "Amincewar ɓangaren jinya tana sa jagororin su zama lafiya." },
      { objective: "O2", q: "Wane ne ke yin triage (tantance gaggawa)?", options: ["AI", "Ma'aikatan jinya", "Teburin karɓar baƙi shi kaɗai", "Abokan majiyyata"], answer: 1, why: "Yanke yadda abu yake da gaggawa aikin jinya ne." },
      { objective: "O3", q: "Wanne ne samfurin tunatarwa mai kyau?", options: ["Lambar inshorar majiyyaci", "\"Sannu Jane, muna tabbatar da ganawarki ta biyo bayan HIV\"", "Rubutun fayil", "\"Sannu [suna na farko], muna tabbatar da ganawarku a ranar [rana] da ƙarfe [lokaci].\""], answer: 3, why: "Madadi kuma babu dalilin ziyara." },
      { objective: "O3", q: "Me ke cike ainihin bayanan majiyyaci a tunatarwa?", options: ["Tsarin tsara ganawa ko aika saƙonku", "Kayan AI na gama-gari", "Wayar wani mai aikin sa-kai", "Kafofin sada zumunta"], answer: 0, why: "Ainihin bayanai suna zama a tsarin da aka amince da su." },
      { objective: "O3", q: "Tunatarwa da AI ya fassara ya kamata a sa wane ya duba su?", options: ["Majiyyaci", "Babu kowa", "AI kuma", "Ma'aikaci mai iya harshen sosai ko ƙwararren mai fassara"], answer: 3, why: "Fassarori suna iya ƙunsar kurakurai." },
      { objective: "O4", q: "Matakin karatu mai kyau don takardun majiyyata na gama-gari kusan:", options: ["Makarantar likitanci", "Wanda ya kammala jami'a", "Aji 6", "Babu kalmomi ko kaɗan"], answer: 2, why: "Kalmomi masu sauƙi suna taimakon ƙarin majiyyata su fahimta." },
      { objective: "O4", q: "Ana sa wa kowane daftarin takarda na AI alamar:", options: ["\"Na ƙarshe\"", "\"Don likita ya duba\"", "\"Sirri\"", "\"AI ya amince\""], answer: 1, why: "Dole likitoci su amince da bayanan lafiya." },
      { objective: "O4", q: "Takardun majiyyata ya kamata su ƙunshi:", options: ["Babu wani abu kuma", "Labaran wasu majiyyata da sunayensu", "Gano cuta ga kowane mai karatu", "Layin tuntuɓarku da sanarwar 911 don gaggawa"], answer: 3, why: "Majiyyata suna buƙatar sanin yadda za su sami taimako." },
      { objective: "O5", q: "Wace takarda ce ke buƙatar dubawar bin doka ko HR?", options: ["Allon lokutan aiki na hutu", "Saƙon godiya ga ma'aikata kan wani biki", "Dokar kuɗin rashin zuwa", "Taswirar wurin ajiye mota"], answer: 2, why: "Kuɗaɗe da haƙƙoƙin majiyyata suna iya kasancewa ƙarƙashin doka." },
      { objective: "O5", q: "Imel ga ma'aikata game da sabon tsarin waya:", options: ["Ba ya buƙatar PHI, don haka AI na gama-gari zai iya taimakawa", "Dole ya ƙunshi sunayen majiyyata", "Yana buƙatar BAA", "Ba za a iya rubuta shi ba"], answer: 0, why: "Babu bayanan majiyyaci a ciki." },
      { objective: "O6", q: "Dokar AI ya kamata ta lissafa:", options: ["Sunayen majiyyata", "Kayan da aka amince da su da sunayensu", "Kalmomin sirrin ma'aikata", "Babu wani abu na musamman"], answer: 1, why: "Ma'aikata suna buƙatar sanin waɗanne kayan aiki aka yarda da su." },
      { objective: "O6", q: "Sau nawa ya kamata a duba dokar AI?", options: ["Ba a taɓa ba", "Aƙalla kowace shekara", "Kowace shekara goma", "Sai bayan an ci tara kawai"], answer: 1, why: "Kayan aiki da dokoki suna canjawa." },
      { objective: "O6", q: "A wannan kwas, ana amfani da AI don:", options: ["Ayyukan ofis da daftari, ba gano cuta ba ko kaɗan", "Gano cutar majiyyata", "Rubuta magani", "Maye gurbin likitoci"], answer: 0, why: "Shawarwarin jinya suna hannun likitoci masu lasisi." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      1,
      3,
      7,
      9,
      13,
      15,
      17
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Jerin ayyuka da aka raba",
        objective: "O1",
        notYet: "Akwai aikin da ke buƙatar PHI a layin \"AI na gama-gari ya yi\".",
        meets: "An raba ayyuka goma daidai zuwa layuka biyu.",
        exceeds: "Ya rubuta wane kayan da aka amince da shi mai BAA, idan akwai, wurin aikin ke amfani da shi don ayyukan PHI."
      },
      {
        name: "Jagororin magana masu lafiya na teburin karɓar baƙi",
        objective: "O2",
        notYet: "Wata jagora tana ba da shawarar likita ko ba ta tura gaggawa zuwa 911.",
        meets: "Jagorori uku da ke tura tambayoyin jinya ga ma'aikatan jinya da gaggawa zuwa 911.",
        exceeds: "An sa musu alama don shugaban sashen jinya ya amince, da bayanin wanda ya amince da su."
      },
      {
        name: "Samfuran tunatarwa masu sirri",
        objective: "O3",
        notYet: "Wani samfuri yana da ainihin bayanan majiyyaci ko yana bayyana dalilin ziyarar.",
        meets: "Samfuran tabbatarwa da tunatarwa masu madadi kuma babu dalilin ziyara.",
        exceeds: "Akwai kuma samfurin canza lokaci da fassara da mutum mai iya harshen ya duba."
      },
      {
        name: "Takarda don dubawa",
        objective: "O4",
        notYet: "Takardar game da wani majiyyaci ce, ko ba a sa mata alamar dubawa ba.",
        meets: "Batu na gama-gari, kalmomi masu sauƙi, da alamar \"Don likita ya duba\" tare da layin tuntuɓa da sanarwar 911.",
        exceeds: "Ta lissafa bayanan da ya kamata likita ya duba."
      },
      {
        name: "Dokar AI ta ma'aikata",
        objective: "O6",
        notYet: "Dokar ba ta da dokar hana PHI ko yadda ake kai rahoton kuskure.",
        meets: "Dokoki biyar zuwa bakwai har da babu PHI ba tare da BAA ba, kayan da aka amince da su, kai rahoto da dubawa kowace shekara.",
        exceeds: "Jami'in sirri ko na bin doka ya amince da ita, tare da shirin horar da ma'aikata."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Wuraren kiwon lafiya da suka ɗauki dokar AI ta ma'aikata a rubuce cikin kwanaki 30 (binciken biyo baya)",
      "Wuraren kiwon lafiya da suka ce babu PHI da aka saka a kayan AI na gama-gari bayan horo",
      "Masu koyo da suka fara wani kwas na ƙananan kasuwanci na Koach Learn cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta ko waya mai intanet",
      "Mataimakin AI kyauta na gama-gari, don ayyukan da ba su da PHI kaɗai",
      "Dokokin wurin aikinku na yanzu da irin kiran da aka saba samu, ko na misali",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku yi amfani da bayanan ƙirƙira ko na misali kaɗai a aji; kada ku taɓa rubuta bayanan majiyyaci na gaske a kayan AI.",
      "Ku gayyaci jami'in sirri ko na bin doka na wurin aikin zuwa zaman da ake yi kan dokar AI ta ma'aikata.",
      "Ku sa likita mai lasisi ya duba duk takardu da jagororin magana da suka shafi jinya kafin a yi amfani da su.",
      "Ku tunatar da masu koyo cewa wannan kwas ba shawarar shari'a ko ta bin doka ba ce, kuma yana nuna musu jagorar HHS da mai ba su shawara.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
