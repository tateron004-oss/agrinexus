"use strict";

// Koach Learn course, Hausa (ha) translation of small-business/smallbiz-ai-service-business.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const CAN_SPAM = { name: "FTC: Dokar CAN-SPAM, jagorar bin doka ga kasuwanci (da Turanci)", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" };

const FTC_REVIEWS = { name: "FTC: Dokar ra'ayoyin abokan ciniki da shaidu, tambayoyi da amsoshi (da Turanci)", url: "https://www.ftc.gov/business-guidance/resources/consumer-reviews-testimonials-rule-questions-answers" };

module.exports = {
  id: "smallbiz-ai-service-business-ha",
  lang: "ha",
  translationOf: "smallbiz-ai-service-business",
  category: "Small Business",
  name: "AI don Kasuwancin Ba da Hidima",
  skills: "Rubuta farashi da ƙiyasi a sarari, Shirya saƙonnin yin alƙawari da tunatarwa, Yin jerin matakan aiki, Rubuta bayanin hidimomi, Biyo bayan aiki, Neman ra'ayoyi ta hanyar da ta dace",
  outcome: "amfani da AI don gudanar da takardun kasuwancin ba da hidima tun daga kiran farko har zuwa abokin ciniki mai dawowa: samfurin farashi mai sarari, saƙonnin alƙawari da tunatarwa, jerin matakan aiki, jerin hidimomi da farashinsu, da saƙon biyo baya da ke neman ra'ayi na gaskiya da sake aiki.",
  about: [
    "Wannan kwas na mutanen da ke sayar da lokacinsu da ƙwarewarsu ne: masu share gidaje, wanzamai da masu gyaran gashi, masu gyaran farce, masu kula da lambu, masu gyaran famfo da masu gyare-gyare, masu ɗaukar kaya, makanikai masu zuwa wurin mutum, masu fenti, masu wanke dabbobi da malaman koyarwa a gida. Da yawa daga cikin ɗalibanmu suna gudanar da kasuwanci na mutum ɗaya ko na iyali.",
    "Za ku yi amfani da mataimakin AI kyauta da takardu da teburin lissafi (spreadsheet) masu sauƙi don amsa masu tambaya da sauri, ba da farashi a sarari, zuwa aiki a shirye, gama kowane aiki da inganci iri ɗaya, da mayar da abokan ciniki masu farin ciki su zama masu dawowa da masu kawo wasu.",
    "Kowane darasi yana ɗaukar kusan minti biyar, tare da aikin \"Gwada yanzu\". Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku haɗa kayan aikin kasuwancin hidima don sana'arku: jerin hidimomi da farashinsu, samfurin farashi mai faɗin aikin, farashi, abin da ba a ciki da tsawon lokacin da farashin zai yi aiki, samfuran tabbatar da alƙawari da tunatarwa, jerin matakai don aikin da kuka fi yi, da saƙon biyo baya da ke godiya ga abokin ciniki kuma yana neman ra'ayi na gaskiya da ya kawo wani.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Mutanen da ke sayar da lokacinsu da ƙwarewarsu: masu share gidaje, wanzamai da masu gyaran gashi, masu gyaran farce, masu kula da lambu, masu gyaran famfo da masu gyare-gyare, masu ɗaukar kaya, makanikai masu zuwa wurin mutum, masu fenti, masu wanke dabbobi da malaman koyarwa a gida. Da yawa suna gudanar da kasuwanci na mutum ɗaya ko na iyali.",
    startingPoint: "Sun san sana'arsu sosai kuma suna samun aiki ta waya, saƙon tes da maganar baki. Da yawa suna amfani da waya don komai, kuma ba su da ƙwarewa sosai da mataimakan AI, samfura (templates) ko kayan yin alƙawari.",
    gap: "Jinkirin amsa, farashi marar sarari da rashin zuwan abokan ciniki suna jawo asarar ayyuka da kuɗi. Masu koyo suna buƙatar takardu shiryayyu masu sarari (jerin hidimomi, farashi, saƙonnin alƙawari, jerin matakai da biyo baya) don su sami ƙarin ayyuka, su guji jayayya, kuma su sami sake aiki.",
    constraints: [
      "Lokaci: masu kasuwanci suna wurin aiki duk yini, don haka kowane darasi kusan minti 5 ne",
      "Na'urori: sau da yawa waya kawai",
      "Dokokin kwangila da lasisi sun dogara ne kan jiha da sana'a",
      "Saƙonnin talla suna buƙatar izini da hanyar daina karɓa; FTC (hukumar kasuwanci ta Amurka) ta hana ra'ayoyin ƙarya ko na saye",
      "Sirri: kada ku taɓa neman lambar kati ko katin shaida daga abokan ciniki ta tes ko saƙonnin kafofin sada zumunta"
    ],
    prerequisites: "Babu. Masu koyo da ba su saba da mataimakan AI ba za su iya fara ɗaukar kwas na gabatarwa ga AI."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan kuna da hidimominku da farashinku na gaske", action: "rubuta jerin hidimomi da ke faɗin abin da ke ciki, abin da ke da ƙarin kuɗi da farashi", standard: "tare da kowane farashi da abin da ke ciki da ku da kanku kuka duba" },
    { id: "O2", condition: "Idan kuna da wani aiki na gaske ko na misali", action: "yin samfurin farashi da cike shi da aikin, farashi, abin da ba a ciki da tsawon lokacin da zai yi aiki", standard: "tare da farashin da kuka sa daga kuɗaɗenku tare da riba" },
    { id: "O3", condition: "Idan sabon mai tambaya ya tuntuɓe ku ta tes, imel, saƙon kafofin sada zumunta ko kiran da ba ku ɗauka ba", action: "rubuta samfurin amsa ta farko da ke yin godiya, yin tambayoyin da kuke buƙata da ba da mataki na gaba", standard: "ba tare da neman lambar kati ko katin shaida ba" },
    { id: "O4", condition: "Idan kuna da dokar soke alƙawarinku", action: "rubuta tabbatar da alƙawari da tunatarwa ta ranar da ta gabata", standard: "tare da rana, lokacin zuwa, adireshi, farashi da dokar a ciki" },
    { id: "O5", condition: "Don aikin da kuka fi yi", action: "yin jerin matakai na kafin ku isa, a wurin aiki da kafin ku tafi", standard: "tare da matakan tsaro na sana'arku da zagayen dubawa na ƙarshe a ciki" },
    { id: "O6", condition: "Bayan kun gama wani aiki", action: "rubuta saƙon biyo baya da ke godiya ga abokin ciniki kuma yana neman ra'ayi na gaskiya, kawo wani da alƙawari na gaba", standard: "bisa dokar FTC game da ra'ayoyi" }
  ],
  chapters: [
    {
      name: "Babi na 1: Samun aikin",
      lessons: [
        {
          objectives: ["O1"],
          title: "Jerin hidimomi mai sarari",
          minutes: 5,
          goal: "Rubuta jerin hidimomi mai bayani a sarari da farashi.",
          text: [
            "Abokan ciniki suna son sanin abin da kuke yi da kusan nawa ne kafin su kira. Jerin hidimomi yana nuna kowace hidima, abin da ke ciki, tsawon lokacin da take ɗauka da farashi ko iyakar farashi.",
            "Ku ba AI hidimominku da farashinku na gaske: \"Ka rubuta jerin hidimomi don kasuwancina na share gidaje: share gida na yau da kullum $120 har zuwa ɗakuna 2, share gida sosai $220, share gida bayan an tashi daga $260. Ka faɗi abin da ke cikin kowanne. Kalmomi masu sauƙi.\" Ku duba komai, musamman abin da ke ciki da wanda ba ya ciki.",
            "Jerin hidimomi mai sarari yana rage jayayya a gaba. Ku faɗi a fili abin da ke da ƙarin kuɗi (cikin murhu, gashin dabbobi, matakala, tafiya fiye da mil 15)."
          ],
          steps: ["Ku jera hidimominku da farashinsu na gaske.", "Ku rubuta abin da ke ciki da abin da ke da ƙarin kuɗi.", "Ku nemi AI ya tsara jerin hidimomi mai sarari.", "Ku duba kowane farashi da abin da ke ciki."],
          words: [["Jerin hidimomi (service menu)", "jerin hidimomin da kuke bayarwa tare da abin da ke ciki da farashi."], ["Ƙari (add-on)", "ƙarin hidima da ke da ƙarin kuɗi."]],
          slides: [
            { title: "Abin da abokan ciniki ke son sani da farko", bullets: ["Abin da kuke yi", "Abin da ke ciki", "Kusan nawa ne kuɗinsa"] },
            { title: "Ku yi shi da AI", bullets: ["Ku ba da hidimominku da farashinku na gaske", "Ku nemi kalmomi masu sarari da sauƙi"] },
            { title: "Ku hana jayayya", bullets: ["Ku faɗi abin da ke da ƙarin kuɗi", "Misali: murhu, gashin dabbobi, tafiya fiye da mil 15"] }
          ],
          tryIt: "Ku rubuta jerin hidimominku mai aƙalla hidimomi uku, abin da ke ciki da ƙari. Ku yi amfani da AI don tsara shi, sannan ku duba kowane farashi.",
          youCanNow: "rubuta jerin hidimomi mai sarari da abin da ke ciki, ƙari da farashi.",
          quickCheck: [
            { objective: "O1", q: "Me jerin hidimomi yake nunawa ga kowace hidima?", options: ["Abin da ke ciki, tsawon lokacin da take ɗauka da farashi", "Sunan hidimar kawai", "Adireshin gidanku da lambar katin shaidarku", "Farashin masu gasa da ku"], answer: 0, why: "Jerin hidimomi yana nuna kowace hidima, abin da ke ciki, tsawon lokacin da take ɗauka da farashi ko iyakar farashi." },
            { objective: "O1", q: "Jerin AI ya ce share gida sosai ya haɗa da cikin murhu, amma kuna karɓar ƙarin kuɗi don haka. Me za ku yi?", options: ["Ku bar shi ku yi jayayya daga baya", "Ku canja shi ya ce cikin murhu yana da ƙarin kuɗi", "Ku goge share gida sosai", "Ku ƙara kowane farashi"], answer: 1, why: "Kuna duba duk abin da ke ciki, kuma faɗin abin da ke da ƙarin kuɗi a fili yana hana jayayya a gaba." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Rubuta farashi da ƙiyasi",
          minutes: 6,
          goal: "Yi samfurin farashi mai sarari, mai adalci, wanda kuma yake kare ku.",
          text: [
            "Takardar farashi (quote) tana faɗin ainihin abin da za ku yi, a kan nawa, da kuma a kan wane sharaɗi. Mai kyau tana da: sunan abokin ciniki da adireshin aikin, aikin da za a yi (scope), kayan aiki, farashi, abin da ba a ciki, sharuɗɗan biya, lokacin da aiki zai fara da tsawon lokacin da farashin zai yi aiki.",
            "Ku nemi AI ya yi samfuri: \"Ka yi samfurin takardar farashi mai shafi ɗaya don ƙaramin kasuwancin fenti, tare da gurabe don [customer], [address], [scope], [materials], [price], [not included], [payment terms], [valid until].\" Ku ajiye shi a Docs ko Word.",
            "AI zai iya taimaka muku bayyana aikin a sarari, amma ku ne kuke sa farashi daga kuɗaɗenku: kayan aiki, awoyinku, tafiya da riba. Don manyan ayyuka, dokokin kwangila da lasisi sun dogara ne kan jiharku da sana'arku, don haka ku duba hukumar ba da lasisin 'yan kwangila ta jiharku ko ku tambayi ƙwararre."
          ],
          steps: ["Ku nemi AI samfurin takardar farashi mai gurabe.", "Ku cike shi da aiki na gaske ko na misali.", "Ku sa farashi daga kuɗaɗenku tare da riba.", "Ku jera abin da ba a ciki da tsawon lokacin da farashin zai yi aiki.", "Ku duba dokokin lasisi da kwangila don manyan ayyuka."],
          words: [["Takardar farashi (quote)", "farashi a rubuce don wani takamaiman aiki."], ["Aikin da za a yi (scope of work)", "ainihin abin da za ku yi da wanda ba za ku yi ba a wani aiki."], ["Sharuɗɗan biya (payment terms)", "yaushe da yadda abokin ciniki zai biya, kamar kuɗin gaba (deposit) sannan sauran idan an gama."]],
          slides: [
            { title: "Sassan takardar farashi mai kyau", bullets: ["Abokin ciniki, adireshi da aikin da za a yi", "Kayan aiki da farashi", "Abin da ba a ciki, sharuɗɗan biya, har zuwa yaushe"] },
            { title: "AI yana yin samfurin", bullets: ["Gurabe kamar [scope] da [price]", "Ku ajiye shi a Docs ko Word"] },
            { title: "Ku ne kuke sa farashi", bullets: ["Kayan aiki + awoyi + tafiya + riba", "Manyan ayyuka: ku duba dokokin lasisi da kwangila na jiha"] }
          ],
          tryIt: "Ku yi samfurin takardar farashinku da AI, sannan ku cike shi don aiki ɗaya na gaske ko na misali. Ku lissafa farashin a takarda daga kuɗaɗenku.",
          youCanNow: "rubuta takardar farashi mai sarari da ke faɗin aikin, farashi da sharuɗɗa.",
          quickCheck: [
            { objective: "O2", q: "Me \"sharuɗɗan biya\" a takardar farashi suke faɗa wa abokin ciniki?", options: ["Launin fentin da za ku yi amfani da shi", "Wane ne mataimakinku", "Yadda da lokacin da zai biya", "Tsawon lokacin da aikin zai ɗauka"], answer: 2, why: "Sharuɗɗan biya suna faɗin yadda da lokacin da abokin ciniki zai biya." },
            { objective: "O2", q: "AI ya ba da shawarar farashi don takardar farashin fentinku. Me za ku yi?", options: ["Ku yi amfani da shi domin AI ya san kasuwa", "Ku ninka shi biyu don tsira", "Ku bar farashin babu komai", "Ku sa farashin da kanku daga kayan aiki, awoyi, tafiya da riba"], answer: 3, why: "AI zai iya taimaka wajen bayyana aikin, amma ku ne kuke sa farashi daga kuɗaɗenku." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Amsa sababbin masu tambaya da sauri",
          minutes: 4,
          goal: "Ku amsa sababbin tambayoyi da sauri da samfuran da ke yin tambayoyin da suka dace.",
          text: [
            "Kasuwancin da ya fara amsawa sau da yawa shi ke samun aikin. Ku shirya samfuri don kowace hanyar da mutane ke tuntuɓarku: tes, imel, saƙonnin kafofin sada zumunta da kiran da ba ku ɗauka ba.",
            "Amsa ta farko mai kyau tana yin godiya, tana yin tambayoyi biyu ko uku da kuke buƙata don ba da farashi (\"Ɗakuna nawa? Akwai dabbobi? Wace rana ta dace?\"), kuma tana ba da mataki na gaba. Ku nemi AI ya rubuta ɗaya don kowace hanya da salon maganarku.",
            "Ku ajiye samfuran a wayarku don ku iya amsawa tsakanin ayyuka. Kada ku nemi mutane su turo lambar kati ko katin shaida ta tes ko saƙonnin kafofin sada zumunta."
          ],
          steps: ["Ku jera tambayoyin da kuke buƙata don ba da farashi.", "Ku nemi AI samfurin amsa ta farko don kowace hanya.", "Ku ajiye su a wayarku.", "Ku amsa cikin awa ɗaya idan za ku iya."],
          words: [["Mai tambaya (lead)", "mutumin da ya tambaya game da hidimarku amma bai yi alƙawari ba tukuna."], ["Hanya (channel)", "hanyar da abokan ciniki ke tuntuɓarku, kamar tes, imel ko saƙonnin kafofin sada zumunta."]],
          slides: [
            { title: "Sauri yana kawo aiki", bullets: ["Amsa ta farko sau da yawa tana samun aikin", "Samfuri don kowace hanya"] },
            { title: "Amsa ta farko mai kyau", bullets: ["Ku yi godiya", "Ku yi tambayoyi 2-3 da kuke buƙata", "Ku ba da mataki na gaba"] },
            { title: "Ku ajiye shi kusa kuma lafiya", bullets: ["Samfura a ajiye a wayarku", "Kada ku taɓa neman lambar kati ta tes"] }
          ],
          tryIt: "Ku rubuta tambayoyinku uku da dole ne ku yi. Ku nemi AI samfurin amsa ta farko na tes da na imel da salon maganarku, sannan ku ajiye su a wayarku.",
          youCanNow: "amsa sababbin masu tambaya da sauri da samfuran da ke tattara abin da kuke buƙata don ba da farashi.",
          quickCheck: [
            { objective: "O3", q: "A ina ya kamata ku ajiye samfuran amsa ta farko?", options: ["A wayarku don ku iya amsawa tsakanin ayyuka", "A kwamfutar gida kawai", "A takarda a ofis", "Babu inda; ku rubuta kowanne sabo"], answer: 0, why: "Ajiye samfura a wayarku yana ba ku damar amsawa da sauri tsakanin ayyuka." },
            { objective: "O3", q: "Sabon mai tambaya ya turo tes: \"Nawa ne yanke ciyawa?\" Wace ce amsa ta farko mai kyau?", options: ["\"Ku turo min lambar katinku don yin alƙawari.\"", "Ku yi godiya, ku tambayi girman filin ciyawar da ranar da ta dace, ku ba da mataki na gaba", "Ku jira har ƙarshen mako kafin ku amsa", "Ku turo cikakken jerin farashinku ba tare da gaisuwa ba"], answer: 1, why: "Amsa ta farko mai kyau tana yin godiya, tana yin tambayoyin da kuke buƙata, kuma tana ba da mataki na gaba." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Samun aikin",
        questions: [
          { objective: "O1", q: "Me yasa za ku jera abin da ke da ƙarin kuɗi a jerin hidimominku?", options: ["Don rikitar da abokan ciniki", "Don hana jayayya a gaba", "Don karɓar kuɗaɗe a ɓoye", "Ba shi da amfani"], answer: 1, why: "Ƙari masu sarari suna sa kowa ya san abin da zai jira." },
          { objective: "O2", q: "Wanne ne ya kamata ya kasance a takardar farashi?", options: ["Rangwamen ƙarya", "Kalmar sirrinku", "Lambar katin abokin ciniki", "Aikin da za a yi da tsawon lokacin da farashin zai yi aiki"], answer: 3, why: "Aikin da za a yi da tsawon lokacin aiki suna kare ɓangarorin biyu." },
          { objective: "O2", q: "Wane ne yake sa farashi a takardar farashi?", options: ["Ku, daga kuɗaɗenku da riba", "AI", "Abokin ciniki shi kaɗai", "Mai gasa da ku"], answer: 0, why: "Ku kaɗai kuka san ainihin kuɗaɗenku." },
          { objective: "O2", q: "A ina za ku duba dokokin lasisi don manyan ayyuka?", options: ["Wurin maƙwabci", "Hira da AI", "Hukumar ba da lasisin 'yan kwangila ta jiharku ko ƙwararre", "Wani rubutu a kafofin sada zumunta"], answer: 2, why: "Lasisi ya dogara ne kan jiharku da sana'arku." },
          { objective: "O3", q: "Me ya kamata amsa ta farko ga mai tambaya ta ƙunsa?", options: ["Neman lambar katinsa", "Farashinku kawai", "Godiya, tambayoyin da kuke buƙata, da mataki na gaba", "Babu komai; ku jira mako ɗaya"], answer: 2, why: "Wannan yana kai mai tambaya zuwa yin alƙawari." }
        ]
      }
    },
    {
      name: "Babi na 2: Yin aikin da riƙe abokin ciniki",
      lessons: [
        {
          objectives: ["O4"],
          title: "Tabbatar da alƙawari da tunatarwa",
          minutes: 4,
          goal: "Ku shirya saƙonnin alƙawari da tunatarwa da ke rage rashin zuwan abokan ciniki.",
          text: [
            "Rashin zuwan abokin ciniki da rashin samun shiga gida suna jawo asarar albashin yini ɗaya. Tabbatarwa da tunatarwa masu sarari suna taimakawa. Tabbatarwa tana faɗin rana, lokacin zuwa, adireshi, farashi, abin da abokin ciniki zai yi don shiryawa, da dokar soke alƙawarinku.",
            "Ku tambayi AI: \"Ka rubuta tabbatar da alƙawari da tunatarwa ta ranar da ta gabata don kasuwancina na wanke karnuka da ke zuwa wurin mutum. Gurabe: [name], [date], [time window], [address], [price]. Ka saka dokarmu ta soke alƙawari kafin awa 24.\"",
            "Kayan yin alƙawari da yawa suna iya tura tunatarwa da kansu; ku duba saitin kayanku. Idan kuna tura tes ko imel na talla (ba tunatarwa kawai ba), ku fara samun izini kuma ku bi dokokin imel, har da hanyar daina karɓa (unsubscribe)."
          ],
          steps: ["Ku rubuta dokar soke alƙawarinku.", "Ku nemi AI samfurin tabbatarwa da na tunatarwa.", "Ku saita tunatarwa ta atomatik a kayan yin alƙawarinku idan yana da ita.", "Ku tura talla kawai da izini da hanyar daina karɓa."],
          words: [["Rashin zuwa (no-show)", "abokin ciniki da bai zo alƙawarin da aka yi ba."], ["Dokar soke alƙawari", "dokokinku na soke alƙawari, kamar sanarwa kafin awa 24."], ["Lokacin zuwa (time window)", "iyakar lokacin isowa, kamar ƙarfe 9 zuwa 11 na safe."]],
          slides: [
            { title: "Ku rage rashin zuwa", bullets: ["Tabbatarwa nan da nan bayan alƙawari", "Tunatarwa ranar da ta gabata"] },
            { title: "Tabbatarwa mai kyau", bullets: ["Rana, lokacin zuwa, adireshi, farashi", "Yadda za a shirya", "Dokar soke alƙawari"] },
            { title: "Ku yi ta atomatik kuma ku bi doka", bullets: ["Kayan yin alƙawari suna iya tura tunatarwa", "Talla tana buƙatar izini da hanyar daina karɓa"] }
          ],
          sources: [CAN_SPAM],
          tryIt: "Ku rubuta dokar soke alƙawarinku a layi biyu. Ku nemi AI samfurin tabbatarwa da na tunatarwa ta ranar da ta gabata masu gurabe, sannan ku ajiye su.",
          youCanNow: "tura tabbatar da alƙawari da tunatarwa da ke rage rashin zuwan abokan ciniki.",
          quickCheck: [
            { objective: "O4", q: "Wace matsala ce tabbatarwa da tunatarwa ke taimakawa wajen hanawa?", options: ["Mummunan yanayi", "Hauhawar farashin kayan aiki", "Rashin zuwan abokan ciniki da rashin samun shiga", "Ra'ayoyin ƙarya"], answer: 2, why: "Darasin ya ce rashin zuwa da rashin samun shiga suna jawo asarar albashin yini, kuma tunatarwa tana taimakawa wajen rage su." },
            { objective: "O4", q: "Kuna son tura tes na rangwamen biki ga duk tsofaffin abokan cinikinku. Me kuke buƙata da farko?", options: ["Babu komai; tunatarwa da talla iri ɗaya ne", "Sabuwar lambar waya", "Amincewar AI", "Izininsu, da hanyar daina karɓa"], answer: 3, why: "Saƙonnin talla, ba kamar tunatarwa ba, suna buƙatar izini da hanyar daina karɓa." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Jerin matakan aiki don inganci iri ɗaya kowane lokaci",
          minutes: 5,
          goal: "Ku mayar da ƙwarewarku jerin matakan aiki da ku da mataimakanku za ku bi.",
          text: [
            "Jerin matakai (checklist) yana sa kowane aiki ya yi kyau kamar mafi kyawun aikinku, ko da a ranar da kuka gaji ko lokacin da mataimaki ya yi shi. Yana kuma taimaka muku horar da sababbin mutane.",
            "Ku faɗi ko ku rubuta yadda kuke yin aikin da kuka fi yi, daga farko har ƙarshe, sannan ku tambayi AI: \"Ka mayar da waɗannan bayanai jerin matakan aiki don kula da lambun gida na yau da kullum: kafin ka isa, a wurin aiki, kafin ka tafi. Gajerun matakai.\" Ku ƙara matakan tsaro da sana'arku ke buƙata, kuma ku duba su da jagorar tsaro ta hukuma ko horon sana'arku.",
            "Ku ƙara zagayen dubawa na ƙarshe tare da abokin ciniki, da hotunan kafin da bayan aiki (da izininsa) don nuna aikin."
          ],
          steps: ["Ku bayyana aikin da kuka fi yi daga farko har ƙarshe.", "Ku nemi AI ya mayar da shi jerin matakai mai sassa uku.", "Ku ƙara matakan tsaro na sana'arku.", "Ku ƙara zagayen dubawa da hotuna da izini.", "Ku gwada shi a aiki na gaba ku gyara shi."],
          words: [["Jerin matakai (checklist)", "jerin matakan da ake yi wa alama don kada a manta da komai."], ["Zagayen dubawa (walk-through)", "duba aikin da aka gama tare da abokin ciniki."]],
          slides: [
            { title: "Me yasa jerin matakai", bullets: ["Inganci iri ɗaya kowane lokaci", "Yana taimakawa horar da mataimaka"] },
            { title: "Ku yi shi da AI", bullets: ["Ku bayyana aikinku daga farko har ƙarshe", "Kafin ku isa, a wurin aiki, kafin ku tafi"] },
            { title: "Ku gama da kyau", bullets: ["Matakan tsaro na sana'arku", "Zagayen dubawa tare da abokin ciniki", "Hotunan kafin da bayan aiki da izini"] }
          ],
          tryIt: "Ku bayyana aikin da kuka fi yi a layuka kaɗan. Ku nemi AI ya mayar da shi jerin matakai mai sassa uku, ku ƙara matakan tsaro, sannan ku yi amfani da shi a aikinku na gaba.",
          youCanNow: "yin jerin matakan aiki da amfani da shi don inganci ya kasance iri ɗaya kowane lokaci.",
          quickCheck: [
            { objective: "O5", q: "Mene ne sassa uku na jerin matakan aiki a wannan darasi?", options: ["Kafin ku isa, a wurin aiki, kafin ku tafi", "Safe, rana, dare", "Farashi, haraji, kyauta", "Kira, tes, imel"], answer: 0, why: "AI yana mayar da bayananku jerin matakai mai sassa uku: kafin ku isa, a wurin aiki da kafin ku tafi." },
            { objective: "O5", q: "Kuna son ƙara matakin tsaro na amfani da tsani. A ina za ku duba shi?", options: ["Ku tambayi AI ku amince da amsar", "Jagorar tsaro ta hukuma ko horon sana'arku", "Ra'ayin wani abokin ciniki", "Ku tsallake matakan tsaro don ajiye lokaci"], answer: 1, why: "Ana duba matakan tsaro da jagora ta hukuma ko horon sana'arku." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Biyo baya, ra'ayoyi na gaskiya da sake aiki",
          minutes: 5,
          goal: "Ku biyo baya bayan aiki don samun ra'ayoyi na gaskiya, masu kawo wasu da sababbin alƙawura.",
          text: [
            "Aikin bai ƙare ba lokacin da kuka tafi. Saƙon godiya a ranar da kanta, tare da hanyar haɗi (link) don barin ra'ayi da tayin yin alƙawari na gaba, yana kawo sake aiki. Ku nemi AI ya rubuta shi da salon maganarku tare da gurabe [name] da [service].",
            "Ku tambayi kowane abokin ciniki ta hanya ɗaya, ko yana farin ciki ko a'a, don ra'ayi na gaskiya. Kada ku ba da lada don ra'ayoyi masu kyau kawai, kuma kada ku taɓa rubuta na ƙarya; dokar FTC game da ra'ayoyi ta hana duka biyun.",
            "Ku saita tunatarwa don hidimomin da ake maimaitawa: magudanar ruwan rufin gida kowace kaka, aski kowane mako uku, duba injin dumama gida kowace shekara. Gajeren saƙo \"Lokacin ... na gaba ya yi?\" yana sa kalandarku ta cika."
          ],
          steps: ["Ku tura saƙon godiya a ranar da kanta.", "Ku saka hanyar haɗin ra'ayi kuma ku nemi ra'ayoyi na gaskiya.", "Ku ba da tayin alƙawari na gaba.", "Ku saita tunatarwa don hidimomin da ake maimaitawa."],
          words: [["Kawo wani (referral)", "abokin ciniki ya turo muku abokinsa."], ["Hidimar da ake maimaitawa", "aikin da abokan ciniki ke buƙata kuma a kan lokaci."]],
          slides: [
            { title: "Godiya a ranar da kanta", bullets: ["Ku gode masa da sunansa", "Hanyar haɗin ra'ayi", "Tayin alƙawari na gaba"] },
            { title: "Ra'ayoyi na gaskiya kaɗai", bullets: ["Ku tambayi kowane abokin ciniki ta hanya ɗaya", "Babu lada don ra'ayoyi masu kyau kawai", "Kada ku taɓa yin ra'ayoyin ƙarya (dokar FTC)"] },
            { title: "Ku sa kalandar ta cika", bullets: ["Magudanar rufi kowace kaka; aski kowane mako 3", "Tunatarwar \"Lokacin ... na gaba ya yi?\""] }
          ],
          sources: [FTC_REVIEWS],
          tryIt: "Aikin ƙarshe: ku haɗa kayan aikin hidimarku: jerin hidimomi, samfurin farashi, samfuran amsa ta farko, tabbatarwa da tunatarwa, jerin matakan aiki, da saƙon godiya na biyo baya mai neman ra'ayi da tayin alƙawari na gaba.",
          youCanNow: "gudanar da takardun kasuwancin hidima tun daga kiran farko har zuwa abokin ciniki mai dawowa da taimakon AI.",
          quickCheck: [
            { objective: "O6", q: "Yaushe ya kamata ku tura saƙon godiya bayan aiki?", options: ["Wata mai zuwa", "Sai idan abokin ciniki ya yi ƙorafi", "A ranar da kanta", "Ba za a taɓa ba"], answer: 2, why: "Godiya a ranar da kanta, tare da hanyar haɗin ra'ayi da tayin alƙawari na gaba, tana kawo sake aiki." },
            { objective: "O6", q: "Wani abokin ciniki bai ji daɗin wani ɓangare na aikin ba. Ta yaya za ku nemi ra'ayinsa?", options: ["Kada ku tambaye shi kwata-kwata", "Ku ba da rangwame sai idan ya ba da taurari 5", "Ku rubuta masa ra'ayi mai kyau", "Ku tambaye shi ta hanya ɗaya da kowa don ra'ayi na gaskiya"], answer: 3, why: "Kuna tambayar kowane abokin ciniki ta hanya ɗaya don ra'ayi na gaskiya; an hana ba da lada don ra'ayoyi masu kyau kawai." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Yin aikin da riƙe abokin ciniki",
        questions: [
          { objective: "O4", q: "Wanne ne ya kamata ya kasance a tabbatar da alƙawari?", options: ["Rana, lokacin zuwa, adireshi, farashi da dokar soke alƙawari", "Lambar katin abokin ciniki", "Kalmar sirrinku", "Babu komai"], answer: 0, why: "Waɗannan bayanai suna hana ruɗani da rashin zuwa." },
          { objective: "O4", q: "Kafin ku tura imel na talla kuna buƙatar:", options: ["Sunan mai turawa na ƙarya", "Babu komai", "Katin shaidar abokin ciniki", "Izini da hanyar daina karɓa"], answer: 3, why: "Dokar CAN-SPAM tana buƙatar hanyar daina karɓa da gaskiya." },
          { objective: "O5", q: "Me yasa za a yi amfani da jerin matakan aiki?", options: ["Don rage gudu", "Inganci iri ɗaya kowane lokaci da sauƙin horo", "Don tsallake tsaro", "Don ƙara farashi"], answer: 1, why: "Jerin matakai yana sa inganci ya kasance iri ɗaya." },
          { objective: "O5", q: "Kafin ku ɗauki hotunan kafin da bayan aiki ya kamata ku:", options: ["Sami izinin abokin ciniki", "Ɗauke su a ɓoye", "Saka adireshin a intanet", "Tsallake shi"], answer: 0, why: "Ku girmama sirrin abokin ciniki." },
          { objective: "O6", q: "Wace hanyar neman ra'ayi ce ta bi dokar FTC?", options: ["Rubuta ra'ayoyi da asusun abokai", "Rangwamen 10% don ra'ayoyin taurari 5 kawai", "Tambayar kowane abokin ciniki don ra'ayi na gaskiya", "Sayen ra'ayoyi"], answer: 2, why: "Neman ra'ayi na gaskiya ba tare da sharaɗi ba ya dace." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI don Kasuwancin Ba da Hidima",
    questions: [
      { objective: "O1", q: "Jerin hidimomi yana nuna:", options: ["Adireshin abokan ciniki", "Hidimomi, abin da ke ciki da farashi", "Kalmomin sirri", "Lambobin Social Security na ma'aikata"], answer: 1, why: "Yana nuna abin da kuke bayarwa da kuɗinsa." },
      { objective: "O1", q: "Ƙari (add-on) shi ne:", options: ["Ra'ayi", "Kyauta ta banza", "Haraji", "Ƙarin hidima da ke da ƙarin kuɗi"], answer: 3, why: "Ƙari ƙarin abubuwa ne." },
      { objective: "O1", q: "AI ya tsara jerin hidimominku. Dole ne ku duba:", options: ["Launuka", "Salon rubutu kawai", "Babu komai", "Kowane farashi da abin da ke ciki"], answer: 3, why: "AI yana iya canja bayanai." },
      { objective: "O2", q: "Ma'anar aikin da za a yi (scope of work) ita ce:", options: ["Kayan aikinku", "Ainihin abin da za ku yi da wanda ba za ku yi ba", "Motarku", "Awoyinku"], answer: 1, why: "Aikin da za a yi yana bayyana aikin." },
      { objective: "O2", q: "Takardar farashi ya kamata ta faɗi tsawon lokacin da za ta:", options: ["Kasance a buga", "Kasance a faɗa", "Yi aiki", "Kasance a rubuta da kwamfuta"], answer: 2, why: "Farashi yana canjawa; ya kamata takardar farashi ta ƙare." },
      { objective: "O2", q: "Farashin da aka sa daga kuɗaɗenku ya haɗa da:", options: ["Kayan aiki, awoyi, tafiya da riba", "Kayan aiki kawai", "Tafiya kawai", "Abin da AI ya ba da shawara"], answer: 0, why: "Duk kuɗaɗe tare da riba." },
      { objective: "O3", q: "Mai tambaya (lead) shi ne:", options: ["Kayan aiki", "Wani ƙarfe", "Mutumin da ya tambaya amma bai yi alƙawari ba", "Takardar biya"], answer: 2, why: "Masu tambaya abokan ciniki ne masu yiwuwa." },
      { objective: "O3", q: "Me yasa za ku amsa masu tambaya da sauri?", options: ["Amsa ta farko sau da yawa tana samun aikin", "Doka ce", "Don dame su", "Ba shi da muhimmanci"], answer: 0, why: "Sauri yana kawo aiki." },
      { objective: "O3", q: "Wanne ne kada ku taɓa nema ta tes?", options: ["Yawan ɗakuna", "Lambar kati", "Rana mai kyau", "Dabbobi a gida"], answer: 1, why: "Lambobin kati na sirri ne." },
      { objective: "O4", q: "Lokacin zuwa (time window) shi ne:", options: ["Hutu", "Gilashin taga", "Wa'adin biya", "Iyakar lokacin isowa"], answer: 3, why: "Yana faɗin lokacin da za a jira isowarku." },
      { objective: "O4", q: "Tunatarwa ta ranar da ta gabata tana taimakawa:", options: ["Rage rashin zuwa da rashin samun shiga", "Ƙara farashi", "Tsallake aikin", "Ɓoye dokar"], answer: 0, why: "Tunatarwa tana rage ayyukan da aka rasa." },
      { objective: "O4", q: "A ina ake yawan saita tunatarwa ta atomatik?", options: ["Babu inda", "Kalandar takarda", "Banki", "Saitin kayan yin alƙawarinku"], answer: 3, why: "Kayan yin alƙawari da yawa suna tura tunatarwa." },
      { objective: "O5", q: "Ta yaya ya kamata ku yi jerin matakan aiki?", options: ["Ku bar AI ya ƙirƙiro shi daga babu komai", "Ku kwafi na mai gasa da ku", "Ku bayyana aikinku, AI ya tsara shi, sannan ku gwada shi", "Ku tsallake shi"], answer: 2, why: "Ƙwarewarku, wadda AI ya tsara." },
      { objective: "O5", q: "Matakan tsaro a jerin matakanku ya kamata a duba su da:", options: ["AI kawai", "Jagorar tsaro ta hukuma ko horon sana'arku", "Rubutu a kafofin sada zumunta", "Babu komai"], answer: 1, why: "Tsaro yana buƙatar majiya amintacciya." },
      { objective: "O5", q: "Zagayen dubawa (walk-through) shi ne:", options: ["Ra'ayi", "Hanyar shiga gida", "Takardar farashi", "Duba aikin da aka gama tare da abokin ciniki"], answer: 3, why: "Yana tabbatar da cewa abokin ciniki ya ji daɗi." },
      { objective: "O6", q: "Yaushe ya kamata ku tura saƙon godiya?", options: ["Ba za a taɓa ba", "Bayan shekara ɗaya", "A ranar da kanta", "Sai idan ya yi ƙorafi"], answer: 2, why: "Godiya da wuri tana kawo ƙarin ra'ayoyi da sababbin alƙawura." },
      { objective: "O6", q: "Ba da rangwame don ra'ayoyin taurari 5 kawai:", options: ["An hana shi a dokar FTC game da ra'ayoyi", "Ba laifi", "Dole ne", "Wayo ne"], answer: 0, why: "An hana lada da aka danganta da ra'ayoyi masu kyau." },
      { objective: "O6", q: "Misalin hidimar da ake maimaitawa shi ne:", options: ["Tashi daga gida sau ɗaya", "Share magudanar ruwan rufi kowace kaka", "Gyaran taga da ya karye sau ɗaya", "Kai kaya sau ɗaya"], answer: 1, why: "Ana maimaita shi a kan lokaci." },
      { objective: "O6", q: "Kawo wani (referral) shi ne:", options: ["Kuɗin hidima", "Abokin ciniki ya turo muku abokinsa", "Haraji", "Kayan aiki"], answer: 1, why: "Masu kawo wasu suna kawo sababbin abokan ciniki." },
      { objective: "O2", q: "Wane ɓangare na aikin ne ya rage a hannunku, ba na AI ba?", options: ["Sa farashi da yin aikin daidai", "Tsara samfuri", "Rubuta kalmomin tunatarwa", "Tsara bayanai"], answer: 0, why: "AI yana taimakawa da kalmomi; ku ne kuke gudanar da kasuwancin." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      3,
      7,
      8,
      10,
      12,
      16
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Jerin hidimomi mai sarari",
        objective: "O1",
        notYet: "Farashi ko abin da ke ciki ba ya nan ko ba daidai ba ne.",
        meets: "Kowace hidima tana faɗin abin da ke ciki, abin da ke da ƙarin kuɗi da farashi.",
        exceeds: "Yana kuma nuna tsawon lokacin da kowace hidima take ɗauka da duk wani ƙari."
      },
      {
        name: "Cikakken samfurin farashi",
        objective: "O2",
        notYet: "Takardar farashin ba ta da aikin da za a yi, farashi, abin da ba a ciki ko tsawon lokacin da za ta yi aiki.",
        meets: "Dukkan sassan suna nan kuma farashin ya fito daga kuɗaɗenku tare da riba.",
        exceeds: "Tana kuma da sharuɗɗan biya da bayanin inda aka duba dokokin lasisi don manyan ayyuka."
      },
      {
        name: "Saƙonnin alƙawari",
        objective: "O4",
        notYet: "Tabbatarwa ko tunatarwa ba ta da lokacin zuwa, adireshi ko dokar soke alƙawari.",
        meets: "Tabbatarwa da tunatarwa ta ranar da ta gabata mai rana, lokacin zuwa, adireshi, farashi da doka.",
        exceeds: "Tana kuma faɗa wa abokin ciniki yadda zai shirya kuma an saita ta ta tafi ta atomatik."
      },
      {
        name: "Jerin matakan aiki",
        objective: "O5",
        notYet: "Jerin matakan ya tsallake wasu matakai ko ba shi da matakan tsaro.",
        meets: "Jerin matakai mai sassa uku da matakan tsaro da zagayen dubawa na ƙarshe.",
        exceeds: "An gwada shi a aiki na gaske kuma an gyara shi bayan haka."
      },
      {
        name: "Biyo baya na gaskiya",
        objective: "O6",
        notYet: "Saƙon yana ba da lada don ra'ayoyi masu kyau kawai ko ba ya neman ra'ayi.",
        meets: "Yana godiya ga abokin ciniki, yana neman ra'ayi na gaskiya da kawo wani, kuma yana ba da tayin alƙawari na gaba.",
        exceeds: "Yana kuma saita tunatarwa don hidimar da ake maimaitawa ta gaba."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu kasuwanci da suka ce sun fi amsa masu tambaya da sauri kuma sun sami ƙarin ayyuka cikin kwanaki 30 (binciken biyo baya)",
      "Masu kasuwanci da suka ce rashin zuwan abokan ciniki ko jayayyar farashi ta ragu cikin kwanaki 30",
      "Masu koyo da suka fara wani kwas na ƙananan kasuwanci na Koach Learn cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai intanet",
      "Mataimakin AI kyauta da takardu kyauta kamar Google Docs ko Word",
      "Hidimominku, farashinku da kuɗaɗenku na gaske, ko na misali",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku haɗa masu koyo bisa sana'arsu idan za ku iya, don su raba jerin matakai da kalmomin takardar farashi.",
      "Ku tunatar da masu koyo cewa farashi yana fitowa daga kuɗaɗensu, kuma dokokin lasisi da kwangila daga hukumar jiharsu ko ƙwararre, ba daga AI ba.",
      "Ku sa masu koyo su ajiye samfura a wayoyinsu yayin zaman don su tafi a shirye su yi amfani da su.",
      "Ku tunatar da masu koyo kada su taɓa neman lambar kati ko katin shaida daga abokan ciniki ta tes, kuma kada su taɓa yin ra'ayoyin ƙarya ko su saya.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
