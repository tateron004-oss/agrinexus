"use strict";

// Koach Learn course, Hausa (ha) translation of small-business/smallbiz-ai-business-strategy.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "smallbiz-ai-business-strategy-ha",
  lang: "ha",
  translationOf: "smallbiz-ai-business-strategy",
  category: "Small Business",
  name: "Gina Dabarun AI na Kasuwanci da Haɗa Kayan Aiki",
  skills: "Gano inda lokaci ke tafiya, Zaɓar ayyukan AI bisa amfani da haɗari, Gudanar da gwaji na kwanaki 30, Auna sakamako, Haɗa kayan aiki lafiya, Rubuta ƙa'idojin amfani da AI",
  outcome: "rubuta tsarin AI mai shafi ɗaya don kasuwancinku: ayyuka biyu da za ku fara ingantawa da dalilinsu, gwaji na kwanaki 30 mai ma'aunin kafin da bayan, yadda kayan aikinku za su haɗu da wanda ke amincewa da me, da gajerun ƙa'idojin amfani da AI gare ku da ma'aikatanku.",
  about: [
    "Wannan kwas na masu ƙananan kasuwanci ne da suka ɗan gwada AI, kuma yanzu suke son tsari maimakon gwaje-gwaje barkatai: shaguna, gidajen abinci, wuraren gyaran gashi, masu aikin tsaftacewa da gyare-gyare, da ƙananan ofisoshi.",
    "Za ku gano inda lokacinku ke tafiya, ku zaɓi ayyukan AI da suka cancanta, ku gwada ɗaya na kwanaki 30 ku auna shi, ku koyi yadda kayan aiki ke haɗuwa da juna (integrations), sannan ku rubuta ƙa'idoji masu sauƙi kan yadda kasuwancinku ke amfani da AI.",
    "Kowane darasi yana ɗaukar kusan minti biyar, tare da aikin \"Gwada yanzu\". Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe. Ayyukan suna haɗuwa su zama tsarin AI ɗinku mai shafi ɗaya."
  ],
  finalTask: "Ku rubuta tsarin AI ɗinku mai shafi ɗaya mai sassa biyar: (1) taswirar lokacinku da ayyuka biyu da kuka zaɓa, kowanne da makin amfani da na haɗari; (2) gwaji na kwanaki 30 don aiki na farko, mai ma'aunin kafin da bayan; (3) zane ko jeri mai sauƙi na yadda kayan aikinku ke haɗuwa da matakan da ke buƙatar amincewarku; (4) lissafin kuɗi; (5) ƙa'idojin amfani da AI guda biyar gare ku da ma'aikatanku.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Masu ƙananan kasuwanci da suka ɗan gwada AI, kuma yanzu suke son tsari maimakon gwaje-gwaje barkatai: shaguna, gidajen abinci, wuraren gyaran gashi, masu aikin tsaftacewa da gyare-gyare, da ƙananan ofisoshi, wasu da 'yan ma'aikata.",
    startingPoint: "Sun yi amfani da mataimakin AI na hira don wasu ayyuka, kuma suna amfani da manhajojin kasuwanci da dama kamar na yin alƙawari (booking), na karɓar kuɗi da takardar lissafi (spreadsheet). Ba su da rubutaccen tsari kan waɗanne ayyukan AI za su yi, yadda za su auna su, yadda kayan aiki ke haɗuwa ko menene ƙa'idojin.",
    gap: "Gwaje-gwajen AI barkatai suna ɓata lokaci da kuɗi, kuma ayyukan atomatik (automation) marasa matakin amincewa suna iya maimaita kuskure mai tsada ko su fitar da bayanai. Masu kasuwanci suna buƙatar zaɓar ayyukan da suka cancanta, gwada ɗaya su auna shi, haɗa kayan aiki lafiya, da kafa ƙa'idojin AI masu sarari gare su da ma'aikatansu.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli",
      "Na'urori: kwamfuta ko wayar zamani mai manhajojin kasuwancin na yanzu",
      "Lokaci: darussa na kusan minti 5 da suka dace da ranar aiki mai cike da ayyuka",
      "Farashi da fasalolin kayan aiki suna canjawa; masu kasuwanci suna duba shafin farashin kowane kayan aiki da kansu",
      "Sirri da tsaro: mutane ne ke yanke shawarwarin kuɗi, doka, ɗaukar ma'aikata da tsaro; ana kare bayanan abokan ciniki"
    ],
    prerequisites: "Ku fara ɗaukar \"Introduction to AI for Small Business\" (Gabatarwa ga AI don Ƙananan Kasuwanci) ko \"Muhimman Kayan AI ga Ƙananan Kasuwanci\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Daga tunawa da mako na yau da kullum", action: "yin taswirar lokaci ta ayyukan da ke cin lokacinku", standard: "mai ayyuka aƙalla goma, da mintunan kowanne, an rarraba su cikin rukunoni, kuma an zagaye manyan uku" },
    { id: "O2", condition: "Idan kuna da aƙalla ra'ayoyin AI guda biyar", action: "ba kowanne maki na amfani da na haɗari, da zaɓar ayyuka biyu da za ku fara da su", standard: "ɗaya nasara mai sauri, ɗaya kuma babban aiki, kowanne da dalili a jimla ɗaya" },
    { id: "O3", condition: "Idan kuna da aikinku na nasara mai sauri", action: "tsara gwaji na kwanaki 30 mai ma'aunin kafin da bayan", standard: "mai lambobin farko (baseline), manufa mai sarari da rubutun kowane mako" },
    { id: "O4", condition: "Idan kuna da kayan aikin da kasuwancinku ke amfani da su", action: "zana yadda kayan aikinku ke tura bayanai ga juna", standard: "da akwatuna da kibiyoyi, da aƙalla mataki ɗaya na hannu da za a iya mayarwa atomatik" },
    { id: "O5", condition: "Idan kuna da taswirar kayan aikinku da kuɗaɗensu", action: "nuna matakan da ke buƙatar amincewarku da lissafa ainihin kuɗin atomatik", standard: "ana sa tauraro a kowane mataki da ke tura kuɗi ko saƙonni ga mutane da yawa, ana kuma kwatanta kuɗi da sa'o'in da aka tanada" },
    { id: "O6", condition: "Idan kun san yadda kasuwancinku ke amfani da AI", action: "rubuta ƙa'idojin amfani da AI guda biyar da tsarin AI mai shafi ɗaya", standard: "da dukkan sassa biyar na tsarin, da ƙa'idojin da ma'aikaci zai ga suna da sarari" }
  ],
  chapters: [
    {
      name: "Babi na 1: Zaɓar abin da za a inganta",
      lessons: [
        {
          objectives: ["O1"],
          title: "Gano inda lokacinku ke tafiya",
          minutes: 5,
          goal: "Yi taswira mai sauƙi ta ayyukan da ke cin lokacinku kowane mako.",
          text: [
            "Dabara tana farawa da gaskiyar abubuwa game da kasuwancinku. Na mako ɗaya, ku rubuta ayyukan da ke cin lokacinku da kusan tsawon lokacin kowanne: amsa saƙonni, tsara alƙawura, oda kayayyaki, rubutu a kafofin sada zumunta, lissafin kuɗi, ƙididdigar farashi (quotes), tsaftacewa, koyar da ma'aikata.",
            "Ku haɗa su cikin rukunoni: abokan ciniki, sayarwa da tallace-tallace, gudanarwa (oda, tsara jadawali), kuɗi (takardun biya, lissafin kuɗi), da mutane (ɗaukar ma'aikata, horaswa).",
            "Sau da yawa za ku ga cewa 'yan ayyuka kaɗan ne ke cin mafi yawan lokacinku. A nan ne AI zai iya taimakawa, amma sai idan aikin ya dace da shi. Wannan shi ne darasi na gaba."
          ],
          steps: ["Na mako ɗaya, ku rubuta kowane aiki da mintunan da yake ɗauka.", "Ku haɗa ayyukan cikin rukunoni biyar.", "Ku haɗa jimillar lokaci a kowane rukuni.", "Ku zagaye manyan ayyuka uku da suka fi cin lokaci."],
          words: [["Dabara (strategy)", "tsari na abin da za a fara yi da dalilinsa."], ["Taswirar lokaci (time map)", "jerin ayyukanku da yawan lokacin da kowanne ke ɗauka."], ["Gudanarwa (operations)", "aikin yau da kullum na tafiyar da kasuwanci, kamar oda da tsara jadawali."]],
          slides: [
            { title: "Ku fara da gaskiyar kasuwancinku", bullets: ["Ku rubuta kowane aiki na mako ɗaya", "Ku rubuta kusan tsawon lokacin kowanne"] },
            { title: "Rukunoni biyar", bullets: ["Abokan ciniki; sayarwa da tallace-tallace", "Gudanarwa; kuɗi", "Mutane"] },
            { title: "Ku nemo masu cin lokaci", bullets: ["Ku haɗa jimillar kowane rukuni", "Ku zagaye manyan ayyuka uku"] }
          ],
          tryIt: "Ku fara taswirar lokacinku. Daga tunawa, ku jera aƙalla ayyuka goma na kowane mako da mintunan kowanne, ku rarraba su cikin rukunoni biyar, sannan ku zagaye manyan uku.",
          youCanNow: "gano inda lokacinku ke tafiya da nemo ayyukan da suka fi cin lokacinku.",
          quickCheck: [
            { objective: "O1", q: "Me taswirar lokaci ke jerawa?", options: ["Ayyukanku da tsawon lokacin kowanne", "Adireshin gidajen ma'aikatanku", "Kuɗin sayarwarku na wata", "Lokutan buɗe shagonku kawai"], answer: 0, why: "Taswirar lokaci tana nuna inda lokacinku na mako ke tafiya." },
            { objective: "O1", q: "Taswirar lokacinku ta nuna ayyuka uku ne ke cin mafi yawan makonku. Me za ku yi da su?", options: ["Ku yi watsi da su", "Ku zagaye su a matsayin wuraren da AI zai fi taimakawa", "Ku goge su daga jerin", "Ku yi su da sauri ba tare da canji ba"], answer: 1, why: "Ayyukan da suka fi cin lokaci su ne inda AI zai fi taimakawa." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Zaɓar ayyukan AI bisa amfani da haɗari",
          minutes: 5,
          goal: "Ba ayyukan AI da za a iya yi maki, ku zaɓi biyu da za ku fara da su.",
          text: [
            "Ba kowane aiki mai cin lokaci ne ya dace da AI ba. Ku ba kowanne maki 1 zuwa 5 na amfani (lokaci ko kuɗin da aka tanada, hidima mafi kyau) da maki 1 zuwa 5 na haɗari (me zai faru idan AI ya yi kuskure: abokan ciniki masu fushi, asarar kuɗi, matsalar shari'a).",
            "Ku fara da babban amfani da ƙaramin haɗari. Rubuta daftarin saƙonnin kafofin sada zumunta da amsa tambayoyin da aka saba yi sau da yawa farawa ne mai kyau. Rarraba lissafin kuɗi ko ƙididdigar farashi na iya zama da babban amfani amma suna buƙatar dubawa sosai. Shawarwarin ɗaukar ma'aikata, takardun doka da duk abin da ya shafi lafiya ko tsaro suna da babban haɗari: mutum da ƙwararre ne za su riƙe iko.",
            "Ku zaɓi ayyuka biyu. Ɗaya nasara mai sauri don ƙara ƙarfin gwiwa, ɗaya kuma babban aiki da za ku tsara a hankali."
          ],
          steps: ["Ku jera manyan ayyuka uku masu cin lokaci da sauran ra'ayoyi.", "Ku ba da maki 1-5 na amfani da 1-5 na haɗari.", "Ku zaɓi nasara mai sauri ɗaya (babban amfani, ƙaramin haɗari).", "Ku zaɓi babban aiki ɗaya da za ku tsara a hankali."],
          words: [["Amfani (value)", "yawan abin da aiki ke tanadawa ko samarwa, ko yadda yake inganta hidima."], ["Haɗari (risk)", "yawan illar da kuskure zai iya jawowa."], ["Nasara mai sauri (quick win)", "ƙaramin aiki da ke aiki da sauri kuma yana ƙara ƙarfin gwiwa."]],
          slides: [
            { title: "Ku ba kowane ra'ayi maki", bullets: ["Amfani 1-5: lokaci, kuɗi, hidima mafi kyau", "Haɗari 1-5: illa idan AI ya yi kuskure"] },
            { title: "Inda za a fara", bullets: ["Babban amfani, ƙaramin haɗari tukuna", "Saƙonnin kafofin sada zumunta da tambayoyin da aka saba yi farawa ne mai kyau", "Ɗaukar ma'aikata, doka, lafiya da tsaro: mutane ne ke da iko"] },
            { title: "Ku zaɓi biyu", bullets: ["Nasara mai sauri ɗaya", "Babban aiki ɗaya da aka tsara a hankali"] }
          ],
          tryIt: "Ku ba aƙalla ra'ayoyin AI guda biyar maki na amfani da na haɗari a ƙaramin tebur. Ku zaɓi nasararku mai sauri da babban aikinku, ku rubuta jimla ɗaya ta dalilin kowanne.",
          youCanNow: "zaɓar ayyukan AI don kasuwancinku ta hanyar auna amfani da haɗari.",
          quickCheck: [
            { objective: "O2", q: "A cikin makin amfani da haɗari, me haɗari ke nufi?", options: ["Kuɗin kayan aikin", "Tsawon lokacin saitawa", "Illa idan AI ya yi kuskure", "Yawan ma'aikatan da ke amfani da shi"], answer: 2, why: "Haɗari shi ne illar da za ta iya faruwa idan AI ya yi kuskure." },
            { objective: "O2", q: "Wani ra'ayi yana da babban amfani da ƙaramin haɗari, wani kuma babban amfani da babban haɗari. Da wanne za ku fara?", options: ["Mai babban haɗari", "Babu ɗayansu", "Duka biyu lokaci ɗaya", "Mai babban amfani da ƙaramin haɗari"], answer: 3, why: "Babban amfani da ƙaramin haɗari shi ne aiki na farko mafi kyau." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Gudanar da gwaji na kwanaki 30 da auna shi",
          minutes: 5,
          goal: "Tsara ƙaramin gwaji na kwanaki 30 mai ma'aunin kafin da bayan mai sarari.",
          text: [
            "Gwaji (pilot) ƙaramin gwaji ne mai ƙayyadadden lokaci. Maimakon canja komai, kuna gwada AI kan aiki ɗaya na kwanaki 30 kuma ku auna ko ya taimaka.",
            "Da farko ku auna \"kafin\": tsawon lokacin da aikin ke ɗauka yanzu, yawan kurakurai, yadda abokan ciniki ke amsawa. Sannan ku yanke manufar \"bayan\": \"Amsa saƙonnin da aka saba samu ya ragu daga minti 60 zuwa minti 25 a rana, ba tare da ƙaruwar ƙorafe-ƙorafe ba.\"",
            "A lokacin gwajin, ku riƙe gajeren rubutu: abin da ya yi aiki, abin da ya ɓaci, abin da kuka gyara. A ƙarshe, ku yanke shawara: ci gaba, canja ko tsayawa. Tsayawa ba laifi ba ne; kun koyi wani abu da arha."
          ],
          steps: ["Ku zaɓi aikin ku rubuta lambobin kafin.", "Ku rubuta manufar bayan.", "Ku gudanar da gwajin na kwanaki 30 ku riƙe gajeren rubutu.", "A rana ta 30: ci gaba, canja ko tsayawa."],
          words: [["Gwaji (pilot)", "ƙaramin gwaji mai ƙayyadadden lokaci na sabuwar hanyar aiki."], ["Lambobin farko (baseline)", "lambobin \"kafin\" da kuke kwatantawa da su."], ["Manufa (target)", "sakamakon da kuke fatan kaiwa."]],
          slides: [
            { title: "Gwaji ƙaramin gwaji ne", bullets: ["Aiki ɗaya, kwanaki 30", "Ku auna ko ya taimaka"] },
            { title: "Kafin da bayan", bullets: ["Kafin: lokaci, kurakurai, yadda abokan ciniki ke amsawa", "Misalin manufar bayan: daga minti 60 zuwa 25 a rana", "Ba tare da ƙaruwar ƙorafe-ƙorafe ba"] },
            { title: "A rana ta 30", bullets: ["Ku karanta rubutunku", "Ci gaba, canja ko tsayawa", "Tsayawa darasi ne mai arha"] }
          ],
          tryIt: "Ku rubuta tsarin gwaji don nasararku mai sauri: aikin, lambobin kafin (ku yi ƙiyasi idan ya zama dole), manufar bayan, da abin da za ku rubuta a rubutunku kowane mako.",
          youCanNow: "tsarawa da auna gwajin AI na kwanaki 30 don aikin kasuwanci ɗaya.",
          quickCheck: [
            { objective: "O3", q: "Menene lambobin farko (baseline) a cikin gwaji?", options: ["Lambobin \"kafin\" da kuke kwatantawa da su", "Sakamakon ƙarshe", "Farashin kayan aikin", "Jadawalin ma'aikata"], answer: 0, why: "Lambobin farko su ne inda kuka fara, don ku iya auna canji." },
            { objective: "O3", q: "A rana ta 30 gwajinku bai tanadi lokaci ko kaɗan ba. Me za ku yi?", options: ["Ku bar shi yana gudana har abada", "Ku tsayar da shi ko ku canja shi; kun koya da arha", "Ku sayi sigar da ta fi tsada", "Ku ɓoye sakamakon"], answer: 1, why: "Gwaji ƙarami ne, don haka wanda bai yi nasara ba yana da ƙaramin kuɗi kuma yana koyar da abubuwa da yawa." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Zaɓar abin da za a inganta",
        questions: [
          { objective: "O1", q: "Menene mataki na farko na dabarun AI a wannan kwas?", options: ["Sayen kayan aiki da yawa", "Gano inda lokacinku ke tafiya", "Korar ma'aikata", "Kwaikwayon abokin hamayya"], answer: 1, why: "Dabara tana farawa da gaskiyar abubuwa game da kasuwancinku." },
          { objective: "O2", q: "Wane aiki ne zaɓi na farko mafi kyau?", options: ["Duk abin da ya fi sabo", "Ƙaramin amfani, babban haɗari", "Babban haɗari, kowane amfani", "Babban amfani, ƙaramin haɗari"], answer: 3, why: "Ku fara inda AI ya fi taimakawa kuma ba zai yi illa sosai ba." },
          { objective: "O2", q: "Wane aiki ne ya kamata mutum da ƙwararre su riƙe iko a kansa?", options: ["Shawarwarin ɗaukar ma'aikata", "Rubuta daftarin saƙonnin kafofin sada zumunta", "Amsa \"Wane lokaci kuke buɗewa?\"", "Tunanin sunayen abinci a jerin abinci"], answer: 0, why: "Ɗaukar ma'aikata yana da babban haɗari." },
          { objective: "O3", q: "Menene gwaji (pilot)?", options: ["Aikin matukin jirgin sama", "Canji na dindindin", "Ƙaramin gwaji mai ƙayyadadden lokaci", "Lasisin manhaja"], answer: 2, why: "Gwaji yana gwada aiki ɗaya na wani ƙayyadadden lokaci." },
          { objective: "O3", q: "A rana ta 30 gwajin bai taimaka ba. Menene matakin da ya dace?", options: ["Ɓoye sakamakon", "Faɗaɗa shi zuwa komai", "Tsayar da shi ko canja shi; kun koya da arha", "Kada ku sake auna komai"], answer: 2, why: "Tsayar da gwajin da bai yi aiki ba shawara ce mai kyau." }
        ]
      }
    },
    {
      name: "Babi na 2: Haɗa kayan aiki da kafa ƙa'idoji",
      lessons: [
        {
          objectives: ["O4"],
          title: "Yadda kayan aiki ke haɗuwa: integrations a kalmomi masu sauƙi",
          minutes: 5,
          goal: "Zana yadda kayan aikin kasuwancinku ke tura bayanai ga juna.",
          text: [
            "Integration (haɗi) wata alaƙa ce da ke bar wani kayan aiki ya tura bayanai zuwa wani da kansa. Misali: fom ɗin yin alƙawari yana ƙara alƙawarin cikin kalandarku; odar da aka biya tana ƙara layi a takardar sayarwarku; sabon sharhi (review) yana turo muku saƙon tes.",
            "Kayan aiki da yawa suna da haɗin da aka gina a cikinsu, an jera su a cikin saitunansu (settings), sau da yawa ana kiransu apps, integrations ko connected accounts. Hidimomin haɗawa (connector services) kamar Zapier, Make ko Microsoft Power Automate suna haɗa kayan aikin da ba sa haɗuwa da kansu. Ku duba shafin hukuma na kowane kayan aiki don ganin abin da yake haɗuwa da shi da kuɗinsa.",
            "Ku zana kayan aikinku a matsayin akwatuna, bayanai kuma a matsayin kibiyoyi: \"booking app -> kalanda\", \"POS -> takardar sayarwa\". Sannan ku nuna waɗanne kibiyoyi ke aiki tuni, waɗanne kuke yi da hannu, da waɗanda za ku iya mayarwa atomatik."
          ],
          steps: ["Ku jera kayan aikin da kuke amfani da su: POS (na'urar karɓar kuɗi), booking, imel, kalanda, spreadsheets, kafofin sada zumunta.", "Ku zana kowanne a matsayin akwati.", "Ku zana kibiyoyi don bayanan da ke tafiya tsakaninsu.", "Ku yi wa kowace kibiya alama: atomatik, da hannu, ko za a iya mayarwa atomatik."],
          words: [["Integration (haɗi)", "alaƙar da ke bar wani kayan aiki ya tura bayanai zuwa wani da kansa."], ["Hidimar haɗawa (connector service)", "kayan aiki kamar Zapier, Make ko Power Automate da ke haɗa sauran kayan aiki."], ["Mayarwa atomatik (automate)", "sa aiki ya faru da kansa ba tare da mutum yana yin kowane mataki ba."]],
          slides: [
            { title: "Integration alaƙa ce", bullets: ["Fom ɗin alƙawari -> kalanda", "Odar da aka biya -> takardar sayarwa", "Sabon sharhi -> saƙon tes"] },
            { title: "Hanyoyin haɗawa", bullets: ["Haɗin da aka gina a cikin saitunan kayan aiki", "Hidimomin haɗawa: Zapier, Make, Power Automate", "Ku duba kowane shafin hukuma don kuɗi"] },
            { title: "Ku zana taswirarku", bullets: ["Kayan aiki akwatuna ne; bayanai kibiyoyi ne", "Alama: atomatik, da hannu, za a iya mayarwa atomatik"] }
          ],
          tryIt: "Ku zana taswirar kayan aikinku a takarda da akwatuna da kibiyoyi. Ku nuna aƙalla kibiya ɗaya da kuke yi da hannu a yau wadda za a iya mayarwa atomatik.",
          youCanNow: "zana yadda kayan aikin kasuwancinku ke haɗuwa da gano ayyukan da za a iya mayarwa atomatik.",
          quickCheck: [
            { objective: "O4", q: "Me kibiyoyin da ke kan taswirar kayan aikinku ke nunawa?", options: ["Wanda ke da iko", "Kayan aikin da ya fi tsada", "Bayanan da ke tafiya tsakanin kayan aiki", "Jerin lokacin da kuka sayi kayan aikin"], answer: 2, why: "Kibiyoyi suna nuna yadda bayanai ke wucewa daga wani kayan aiki zuwa wani." },
            { objective: "O4", q: "Kuna kwafar kowace odar da aka biya zuwa takardar sayarwarku da hannu. Me za ku yi?", options: ["Ku daina rubuta sayarwa", "Ku ɗauki wanda zai yi rubutu da sauri", "Ku goge takardar sayarwa", "Ku nuna shi a taswirarku a matsayin matakin da za a iya mayarwa atomatik"], answer: 3, why: "Matakan hannu da ke motsa bayanai suna da kyau don integration." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Riƙe iko: amincewa, kuɗi da bayanai",
          minutes: 5,
          goal: "Yanke waɗanne matakan atomatik ke buƙatar amincewarku, ku duba ainihin kuɗin.",
          text: [
            "Atomatik yana tanadin lokaci, amma kuma yana iya maimaita kuskure sau ɗari. Ku bar mutum ya amince da duk abin da ke tura kuɗi, ke tura saƙonni ga abokan ciniki da yawa, ke canja farashi, ke goge bayanai ko ke yin alkawari.",
            "Ku lissafa dukkan kuɗin: kuɗin biyan kowane wata (subscriptions), kuɗin kowane amfani, lokacin saitawa da lokacin duba aikin. Ku kwatanta shi da lokacin da aka tanada a gwajinku. Idan lissafin bai dace ba, ku ci gaba da yi da hannu a yanzu.",
            "Ku san inda bayananku ke tafiya. Kafin ku haɗa kayan aiki, ku karanta waɗanne bayanai zai iya gani, kuma ku rage su zuwa mafi ƙanƙanta. Ku yi amfani da kalmomin sirri (passwords) masu ƙarfi da shiga mai matakai biyu a asusun kasuwanci, kuma ku cire damar ma'aikatan da suka tafi."
          ],
          steps: ["Ku yi alama a kowane matakin atomatik da ke tura kuɗi, ke tura saƙo ga mutane da yawa, ke canja farashi ko ke goge bayanai.", "Ku sa amincewarku ta zama dole a waɗannan matakan.", "Ku haɗa jimillar kuɗin kowane wata.", "Ku duba waɗanne bayanai kowane haɗi zai iya gani.", "Ku kunna shiga mai matakai biyu."],
          words: [["Matakin amincewa (approval step)", "wurin da dole mutum ya ce eh kafin aikin ya ci gaba."], ["Shiga mai matakai biyu (two-step sign-in)", "dubawa ta biyu, kamar lambar da aka turo wayarku, lokacin da kuke shiga asusu."], ["Kuɗin biya na kowane lokaci (subscription)", "biyan kuɗi akai-akai don ci gaba da amfani da kayan aiki."]],
          slides: [
            { title: "Mutum ne ke amincewa", bullets: ["Duk abin da ke tura kuɗi", "Saƙonni ga abokan ciniki da yawa", "Canjin farashi, gogewa, alkawura"] },
            { title: "Ku lissafa dukkan kuɗin", bullets: ["Subscriptions da kuɗin kowane amfani", "Lokacin saitawa da na dubawa", "Ku kwatanta da lokacin da aka tanada"] },
            { title: "Ku kare bayananku", bullets: ["Ku ba kowane kayan aiki mafi ƙarancin bayanan da yake buƙata", "Kalmomin sirri masu ƙarfi da shiga mai matakai biyu", "Ku cire damar shiga idan ma'aikaci ya tafi"] }
          ],
          tryIt: "A taswirar kayan aikinku, ku sa tauraro a kowane matakin da ke buƙatar amincewarku. Sannan ku rubuta lissafin kuɗi: kuɗin kayan aiki na wata idan aka kwatanta da sa'o'in da aka tanada sau darajar sa'arku ɗaya.",
          youCanNow: "riƙe iko kan ayyukan atomatik ta hanyar matakan amincewa, lissafin kuɗi da iyakance bayanai.",
          quickCheck: [
            { objective: "O5", q: "Me yasa za a bar matakin amincewa a ayyukan atomatik da ke tura kuɗi ko saƙonni ga mutane da yawa?", options: ["Atomatik yana iya maimaita kuskure sau da yawa", "Amincewa tana sa kayan aiki su yi arha", "Doka koyaushe tana buƙatar haka", "Tana sa aikin atomatik ya yi sauri"], answer: 0, why: "Kuskure ɗaya a aikin atomatik yana iya maimaituwa sau da yawa kafin ku lura." },
            { objective: "O5", q: "Wani ma'aikaci ya bar kasuwancinku. Me za ku yi?", options: ["Ku bar damar shigarsa idan ya dawo", "Ku ba sabon ma'aikaci kalmar sirrinsa", "Ku cire damar shigarsa a kayan aikin kasuwanci", "Kada ku canja komai"], answer: 2, why: "Cire damar shiga yana kare bayanan kasuwancinku." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Rubuta ƙa'idojin amfani da AI da tsarinku mai shafi ɗaya",
          minutes: 5,
          goal: "Rubuta ƙa'idojin AI guda biyar masu sauƙi don kasuwancinku, ku kammala tsarin AI mai shafi ɗaya.",
          text: [
            "Ƙa'idojin amfani da AI (AI use policy) gajeren jeri ne na dokoki kan yadda ku da ma'aikatanku ke amfani da AI. Suna kare abokan ciniki kuma suna sa kowa ya yi abu iri ɗaya. Ƙa'idoji biyar sun isa a fara da su.",
            "Misalan ƙa'idoji: (1) Ba a saka sunayen abokan ciniki tare da bayanan tuntuɓarsu, lambobin kati, kalmomin sirri ko bayanan ma'aikata a kayan AI. (2) Mutum yana tabbatar da kowane bayani kafin abokan ciniki su gani. (3) Ba za mu taɓa rubuta sharhi ko iƙirari na ƙarya ba. (4) Kayan aikin da aka amince da su kaɗai ake amfani da su don kasuwanci. (5) Mutane ne ke yanke shawarwarin kuɗi, doka, ɗaukar ma'aikata da tsaro.",
            "Ku nemi AI ya sa ƙa'idojinku su zama masu sarari da gajeru, sannan ku saka su a shafi ɗaya tare da taswirar lokacinku, ayyukan da kuka zaɓa, tsarin gwaji, taswirar kayan aiki da lissafin kuɗi. Ku sake duba tsarin kowane wata uku."
          ],
          steps: ["Ku rubuta ƙa'idoji biyar da kalmomi masu sauƙi.", "Ku nemi AI ya sa su zama masu sarari da gajeru.", "Ku raba su da ma'aikata ku karɓi tambayoyinsu.", "Ku saka komai a shafi ɗaya ku sa ranar sake dubawa."],
          words: [["Ƙa'idojin amfani da AI (AI use policy)", "rubutattun dokoki kan yadda kasuwanci ke amfani da AI."], ["Kayan aikin da aka amince da shi (approved tool)", "kayan aikin da mai kasuwanci ya duba kuma ya yarda a yi amfani da shi a kasuwanci."]],
          slides: [
            { title: "Me yasa ake buƙatar ƙa'idoji", bullets: ["Suna kare abokan ciniki", "Suna sa ma'aikata su yi abu iri ɗaya", "Ƙa'idoji biyar sun isa a fara"] },
            { title: "Misalan ƙa'idoji", bullets: ["Babu bayanan sirri na abokan ciniki ko ma'aikata a AI", "Mutum yana tabbatar da bayanai; babu sharhin ƙarya", "Kayan aikin da aka amince da su kaɗai; mutane ne ke yanke manyan shawarwari"] },
            { title: "Tsarinku mai shafi ɗaya", bullets: ["Taswirar lokaci da ayyuka biyu", "Gwaji, taswirar kayan aiki da lissafin kuɗi", "Ƙa'idoji biyar; sake dubawa kowane wata uku"] }
          ],
          tryIt: "Aikin ƙarshe: ku rubuta ƙa'idojin AI ɗinku guda biyar da tsarin AI mai shafi ɗaya mai dukkan sassa biyar. Ku raba ƙa'idojin da ma'aikaci ɗaya ko wani da kuka amince da shi, ku tambaye shi ko akwai abin da bai fito fili ba.",
          youCanNow: "jagorantar yadda kasuwancinku ke amfani da AI da rubutaccen tsari da ƙa'idoji masu sarari.",
          quickCheck: [
            { objective: "O6", q: "Menene ƙa'idojin amfani da AI?", options: ["Tsarin AI na biyan kuɗi", "Rubutattun dokoki kan yadda kasuwancinku ke amfani da AI", "Sharhin abokin ciniki", "Sharuɗɗan amfani na kayan aiki"], answer: 1, why: "Ƙa'idojin amfani da AI suna kafa dokoki masu sarari gare ku da ma'aikatanku." },
            { objective: "O6", q: "Kun rubuta ƙa'idojin AI ɗinku guda biyar. Me za ku yi a gaba?", options: ["Ku ɓoye su", "Ku saka su a intanet ba tare da karantawa ba", "Ku nemi AI ya amince da su", "Ku raba su da ma'aikaci ku tambaye shi ko akwai abin da bai fito fili ba"], answer: 3, why: "Ƙa'idoji suna aiki ne kawai idan mutanen da ke amfani da su sun fahimce su." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Haɗa kayan aiki da kafa ƙa'idoji",
        questions: [
          { objective: "O4", q: "Menene integration?", options: ["Alaƙar da ke bar wani kayan aiki ya tura bayanai zuwa wani", "Sabon ma'aikaci", "Fom ɗin haraji", "Wani nau'in bashi"], answer: 0, why: "Integrations suna wucewa da bayanai tsakanin kayan aiki." },
          { objective: "O4", q: "Wanne ne hidimar haɗawa (connector service)?", options: ["Na'urar haɗa takardu (stapler)", "Aljihun ajiye kuɗi", "Injin fax", "Zapier"], answer: 3, why: "Zapier yana haɗa kayan aikin da ba sa haɗuwa da kansu." },
          { objective: "O5", q: "Wane matakin atomatik ne ya fi buƙatar amincewarku?", options: ["Ajiye sunan fayil", "Tura imel na rangwame ga dukkan abokan ciniki 800", "Ƙara launi a kalanda", "Jera wani jeri"], answer: 1, why: "Saƙonni ga abokan ciniki da yawa suna buƙatar eh daga mutum." },
          { objective: "O5", q: "Wani aikin atomatik yana cin kuɗi a kowane wata fiye da lokacin da yake tanadawa. Me za ku yi?", options: ["Ku ci gaba da yi da hannu a yanzu", "Ku ci gaba da biya", "Ku ƙara kayan aiki", "Ku yi watsi da kuɗin"], answer: 0, why: "Dole lissafin ya dace." },
          { objective: "O6", q: "Wace ce ƙa'idar amfani da AI mai kyau?", options: ["Ku liƙa lambobin katin abokan ciniki don tanadin lokaci", "Ku yi amfani da kowane kayan aiki da kuka samu", "Mutum yana tabbatar da kowane bayani kafin abokan ciniki su gani", "AI ne ke yanke shawarar ɗaukar ma'aikata"], answer: 2, why: "Tabbatar da bayanai yana kare abokan ciniki." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Gina Dabarun AI na Kasuwanci da Haɗa Kayan Aiki",
    questions: [
      { objective: "O1", q: "Taswirar lokaci tana jera:", options: ["Kalmomin sirrinku", "Ayyukanku da tsawon lokacin kowanne", "Adireshin abokan cinikinku", "Abokan hamayyarku"], answer: 1, why: "Tana nuna inda lokacinku ke tafiya." },
      { objective: "O1", q: "Wanne ne ɗaya daga cikin rukunoni biyar?", options: ["Fina-finai", "Yanayi", "Wasanni", "Gudanarwa"], answer: 3, why: "Abokan ciniki, sayarwa da tallace-tallace, gudanarwa, kuɗi, mutane." },
      { objective: "O1", q: "Me yasa za ku zagaye manyan ayyuka uku da suka fi cin lokaci?", options: ["Don ado", "Don goge su", "Don raba su a intanet", "Su ne inda AI zai fi taimakawa"], answer: 3, why: "Manyan ayyuka suna ba da mafi yawan tanadin lokaci." },
      { objective: "O2", q: "A cikin makin amfani da haɗari, haɗari yana nufin:", options: ["Yadda yake da daɗi", "Illa idan AI ya yi kuskure", "Yadda kayan aikin yake sabo", "Yawan manhajojin da kuke da su"], answer: 1, why: "Haɗari yana auna illar da za ta iya faruwa." },
      { objective: "O2", q: "Nasara mai sauri ita ce:", options: ["Tikitin caca", "Aiki mafi girma kuma mafi haɗari", "Ƙaramin aiki da ke aiki da sauri", "Ƙara a kotu"], answer: 2, why: "Nasarori masu sauri suna ƙara ƙarfin gwiwa." },
      { objective: "O2", q: "Wane aiki ne yake da babban haɗari?", options: ["Rubuta kwangilar doka", "Rubuta daftarin bayanin hoto a Instagram", "Tunanin sunan abinci na musamman", "Tsara jerin abubuwan dubawa"], answer: 0, why: "Takardun doka suna buƙatar ƙwararre." },
      { objective: "O3", q: "Lambobin \"kafin\" a cikin gwaji ana kiransu:", options: ["Kasafin kuɗi", "Manufa", "Lambobin farko (baseline)", "Kalmar sirri"], answer: 2, why: "Lambobin farko su ne abin da kuke kwatantawa da shi." },
      { objective: "O3", q: "Manufar gwaji mai kyau ita ce:", options: ["\"Saƙonni sun ragu daga minti 60 zuwa 25 a rana ba tare da ƙaruwar ƙorafe-ƙorafe ba\"", "\"Mu yi kyau\"", "\"Mu ƙara amfani da AI\"", "\"Mu gwada abubuwa\""], answer: 0, why: "Tana da takamaimai kuma ana iya auna ta." },
      { objective: "O3", q: "A lokacin gwajin kuna riƙe:", options: ["Babu rubutu", "Gajeren rubutu na abin da ya yi aiki da abin da ya ɓaci", "Lambobin katin abokan ciniki", "Labari mai daɗi kawai"], answer: 1, why: "Rubutun yana jagorantar shawararku ta rana ta 30." },
      { objective: "O4", q: "\"Odar da aka biya -> takardar sayarwa\" misali ne na:", options: ["Haraji", "Ƙa'ida", "Sharhi", "Integration"], answer: 3, why: "Bayanai suna tafiya da kansu tsakanin kayan aiki." },
      { objective: "O4", q: "A ina ake yawan samun haɗin da aka gina a cikin kayan aiki?", options: ["A cikin saitunan kayan aikin", "A kan rasiti", "A cikin wasiƙun gidan waya", "Babu inda"], answer: 0, why: "Saitunan sau da yawa suna jera apps ko integrations." },
      { objective: "O4", q: "A taswirar kayan aikinku, kibiyoyi suna nuna:", options: ["Sunayen ma'aikata", "Yanayin zuciyar abokan ciniki", "Farashi", "Bayanan da ke tafiya tsakanin kayan aiki"], answer: 3, why: "Akwatuna kayan aiki ne; kibiyoyi bayanai ne." },
      { objective: "O5", q: "Me yasa za a bar matakin amincewa a ayyukan atomatik da ke tura kuɗi?", options: ["Don a dami ma'aikata", "Yana da jinkiri", "Atomatik yana iya maimaita kuskure sau da yawa", "Ba a buƙatar sa"], answer: 2, why: "Mutum yana dakatar da kurakurai masu tsada da ke maimaituwa." },
      { objective: "O5", q: "Dukkan kuɗin kayan aiki sun haɗa da:", options: ["Farashin da ke kan talla kawai", "Subscription, kuɗin kowane amfani, lokacin saitawa da na dubawa", "Babu komai", "Wutar lantarki kawai"], answer: 1, why: "Dukkan kuɗaɗe ana kwatanta su da lokacin da aka tanada." },
      { objective: "O5", q: "Idan ma'aikaci ya tafi, ya kamata ku:", options: ["Kada ku yi komai", "Ku bar shi a buɗe", "Ku raba kalmar sirrinsa", "Ku cire damar shigarsa a kayan aikin kasuwanci"], answer: 3, why: "Cire damar shiga yana kare bayananku." },
      { objective: "O5", q: "Me shiga mai matakai biyu ke ƙarawa?", options: ["Ƙarin sigar kyauta", "Kalmar sirri ta biyu a takarda", "Dubawa ta biyu, kamar lambar da aka turo waya", "Babu komai"], answer: 2, why: "Yana sa asusu ya yi wuyar kutsawa." },
      { objective: "O6", q: "Ƙa'idojin amfani da AI su ne:", options: ["Rubutattun dokoki kan yadda kasuwancinku ke amfani da AI", "Takardar inshora", "Yarjejeniyar haya", "Kayan aiki"], answer: 0, why: "Suna kiyaye kowa kuma suna sa a yi abu iri ɗaya." },
      { objective: "O6", q: "Wanne ne ya dace a cikin ƙa'idojin AI ɗinku?", options: ["AI ne ke yanke wanda za a ɗauka aiki", "Mutane ne ke yanke shawarwarin kuɗi, doka, ɗaukar ma'aikata da tsaro", "Kowane kayan aiki ya yi", "Sharhin ƙarya ba laifi ba ne"], answer: 1, why: "Manyan shawarwari suna hannun mutane." },
      { objective: "O6", q: "Sau nawa ya kamata ku sake duba tsarin AI ɗinku?", options: ["Ba za a taɓa ba", "Kusan kowane wata uku", "Kowace sa'a", "Sai bayan wani bala'i kawai"], answer: 1, why: "Sake dubawa akai-akai yana sa tsarin ya kasance na zamani." },
      { objective: "O6", q: "Tsarin AI ɗinku mai shafi ɗaya ya haɗa da:", options: ["Taswirar lokaci, ayyuka, gwaji, taswirar kayan aiki, lissafin kuɗi da ƙa'idoji", "Jerin manhajoji kawai", "Kalmomin sirrin abokan ciniki", "Farashin abokin hamayya"], answer: 0, why: "Waɗannan sassa ne ke cika tsari." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      3,
      4,
      6,
      7,
      9,
      11,
      12,
      13,
      16
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Taswirar lokaci da ayyuka biyu",
        objective: "O2",
        notYet: "Babu taswirar lokaci, ko an zaɓi ayyuka ba tare da makin amfani da na haɗari ba.",
        meets: "Taswirar lokaci da ayyuka biyu da aka zaɓa, kowanne da makin amfani da na haɗari.",
        exceeds: "Kowane zaɓi yana da dalili mai sarari a jimla ɗaya da ke da alaƙa da taswirar lokaci."
      },
      {
        name: "Gwaji na kwanaki 30",
        objective: "O3",
        notYet: "Babu ma'auni, ko babu lambobin kafin.",
        meets: "Gwaji don aiki na farko mai lambobin farko (baseline) da manufar bayan.",
        exceeds: "Yana kuma da tsarin rubutu na kowane mako da ƙa'idar tsayawa ko canjawa a rana ta 30."
      },
      {
        name: "Haɗin kayan aiki da amincewa",
        objective: "O4",
        notYet: "Babu taswirar kayan aiki, ko ba a nuna matakan amincewa ba.",
        meets: "Zane ko jeri na yadda kayan aiki ke haɗuwa, da matakan amincewa a nuna su.",
        exceeds: "An sa tauraro a kowane matakin da ke tura kuɗi ko saƙonni ga mutane da yawa."
      },
      {
        name: "Lissafin kuɗi",
        objective: "O5",
        notYet: "Babu lissafin kuɗi.",
        meets: "An kwatanta kuɗin kayan aiki na wata da sa'o'in da aka tanada sau darajar sa'arku ɗaya.",
        exceeds: "Ya haɗa da kuɗin kowane amfani, lokacin saitawa da na dubawa."
      },
      {
        name: "Ƙa'idojin amfani da AI",
        objective: "O6",
        notYet: "Ƙa'idoji ƙasa da biyar, ko ƙa'idojin da ke ba AI shawarwarin kuɗi, doka, ɗaukar ma'aikata ko tsaro.",
        meets: "Ƙa'idoji biyar masu sarari gare ku da ma'aikatanku.",
        exceeds: "An raba su da ma'aikaci ko wani amintacce, kuma an ƙara musu sarari daga ra'ayinsa."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu kasuwanci da suka gudanar da gwajinsu na kwanaki 30 kuma suka ba da rahoton sakamakon kafin da bayan (binciken biyo baya)",
      "Masu kasuwanci da suka ba da rahoton sa'o'in da aka tanada a kowane mako bayan gwajin",
      "Masu kasuwanci da suka raba rubutattun ƙa'idojin amfani da AI da ma'aikata cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta ko wayar zamani mai intanet da manhajojin kasuwancin na yanzu",
      "Mataimakin AI kyauta da spreadsheet kyauta don ba da maki da bin diddigi",
      "Takarda da alƙalami don taswirar lokaci da taswirar kayan aiki",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku nemi masu kasuwanci su yi ƙiyasin ayyukan mako na yau da kullum kafin zaman, don taswirar lokaci ta yi sauri.",
      "Ku zana misalin taswirar kayan aiki a allo da akwatuna da kibiyoyi kafin masu kasuwanci su zana nasu.",
      "Ku tunatar da masu kasuwanci su duba shafin farashin kowane kayan aiki da kansu; farashi da fasaloli suna canjawa.",
      "Ku jaddada cewa mutane ne ke riƙe shawarwarin kuɗi, doka, ɗaukar ma'aikata da tsaro, kuma ana kare bayanan abokan ciniki.",
      "Ku ba da maki ga tsarin mai shafi ɗaya da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
