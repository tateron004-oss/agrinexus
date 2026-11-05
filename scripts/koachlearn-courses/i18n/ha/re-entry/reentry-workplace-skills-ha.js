"use strict";

// Koach Learn course, Hausa (ha) translation of re-entry/reentry-workplace-skills.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "reentry-workplace-skills-ha",
  lang: "ha",
  translationOf: "reentry-workplace-skills",
  category: "Re-Entry",
  name: "Ƙwarewar Wurin Aiki da Yin Aiki Yadda Ya Kamata",
  skills: "Imel da tes na aiki, Magana da shugaban aiki, Tsara ranar aiki da fifita ayyuka, Amfani da takardu da jadawalin da ake rabawa, Karɓar ra'ayi da magance matsala, Bin dokokin AI na wurin aiki",
  outcome: "rubuta saƙo mai sarari na aiki ga shugabanku da taimakon AI, tsara ranar aiki da jerin abubuwan yi bisa muhimmanci, da bin dokokin wurin aikinku kan amfani da AI da kiyaye bayanan sirri.",
  about: [
    "Wannan kwas na mutanen da ke dawowa gida ne da ke fara aiki, ko suke shirin fara aiki. Yanzu wuraren aiki suna amfani da imel, tes, jadawalin da ake rabawa da takardun kwamfuta, kuma da yawa suna amfani da AI. Waɗannan ƙwarewa suna taimaka muku ku riƙe aikin ku ci gaba a cikinsa.",
    "Za ku yi atisayen saƙonnin aiki, magana da shugaban aiki, tsara aikinku na rana, amfani da takardu da jadawalin da ake rabawa, karɓar ra'ayi, da amfani da AI a wurin aiki yadda ya kamata.",
    "Kowane darasi yana ɗaukar kusan minti biyar. Misalan daga ayyukan farko na gaske suke: rumbun ajiyar kaya, kicin, shago, aikin tsaftacewa, gini da aikin ofis. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku yi amfani da mataimakin AI don rubuta gajeren imel ko tes na aiki ga shugabanku, kuna neman canja ranar aiki ɗaya, tare da dalili da tayin taimakawa a sami wanda zai maye gurbinku. Ku sa ya yi kama da yadda kuke magana, ku duba cewa babu bayanan sirri a ciki. Sannan ku yi jerin abubuwan yi bisa muhimmanci don ranar aiki ta gaske ko ta atisaye.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya da ke dawowa gida daga gidan yari da ke fara aiki ko suke shirin fara aiki, sau da yawa a ayyukan farko na rumbun kaya, kicin, shago, tsaftacewa, gini ko ofis.",
    startingPoint: "Suna iya tura tes da yin kira. Ba su da ƙwarewa sosai da imel na aiki, jadawalin da ake rabawa, takardun da ake rabawa ko amfani da AI a wurin aiki. Wasu ba su da tabbas wajen magana da shugaban aiki ko karɓar ra'ayi.",
    gap: "Yanzu wuraren aiki suna amfani da saƙonni, jadawali da takardun da ake rabawa, kuma da yawa suna amfani da AI. Masu koyo suna buƙatar yin magana cikin ladabi da sarari, tsara aikinsu na rana, karɓar ra'ayi, da bin dokokin AI da na sirri don su riƙe aikin su ci gaba a cikinsa.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli (kusan aji 5 zuwa 6)",
      "Na'urori: wayar zamani, wani lokaci kwamfutar ɗakin karatu ko ta wurin aiki",
      "Lokaci: darussa na kusan minti 5 da suka dace da aiki da ganawa",
      "Dokokin wurin aiki: kowane mai ɗaukar aiki yana da nasa dokokin AI da na sirri",
      "Sirri: babu bayanan sirri na abokin ciniki, na kamfani ko na kai a cikin kowane kayan AI"
    ],
    prerequisites: "Kwas ɗin \"Introduction to AI and Digital Confidence\" (Gabatarwa ga AI da Ƙarfin Gwiwa a Fasahar Zamani) yana da amfani amma ba dole ba ne."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan kuna da wani yanayi na gaske a wurin aiki", action: "rubuta gajeren imel ko tes na aiki mai sarari da taimakon AI", standard: "da babban abin da kuke son faɗa a layin farko, ƙarshe mai ladabi, da kalmominku na kanku" },
    { id: "O2", condition: "Idan akwai wani abu da kuke son faɗa wa shugaban aiki", action: "shirya da yin atisayen gajeriyar magana mai ladabi", standard: "da abin da kuke son faɗa a rubuce a jimla ɗaya, kuma kun yi atisaye aƙalla sau ɗaya" },
    { id: "O3", condition: "Idan kun sami ra'ayi ko matsala a wurin aiki", action: "amsawa cikin natsuwa da kai rahoton matsalar ga mutumin da ya dace", standard: "har da abin da ya faru, lokacin da ya faru da abin da kuka yi" },
    { id: "O4", condition: "Idan kuna da jerin ayyuka na ranar aiki", action: "yin jerin abubuwan yi da aka raba zuwa dole, ya kamata, da idan akwai lokaci", standard: "da ayyukan da wa'adinsu yau ne a sama" },
    { id: "O5", condition: "Idan an ba ku hanyar haɗi (link) ta jadawali ko takardar da ake rabawa", action: "buɗe ta, nemo sashenku da ƙara abu a ciki", standard: "ba tare da canja sassan da ba naku ba" },
    { id: "O6", condition: "Idan kuna da dokar AI ta wurin aikinku", action: "zaɓar ayyukan da za ku iya amfani da AI a kansu da bayanan da za ku bar wa waje", standard: "ba tare da taɓa saka bayanan sirri na abokin ciniki ko na kamfani a cikin kayan AI ba" }
  ],
  chapters: [
    {
      name: "Babi na 1: Sadarwa a wurin aiki",
      lessons: [
        {
          objectives: ["O1"],
          title: "Rubuta saƙonnin aiki",
          minutes: 5,
          goal: "Rubuta gajeren imel ko tes mai sarari da ladabi ga wani a wurin aiki.",
          text: [
            "A wurin aiki, yadda kuke rubutu yana da muhimmanci. Saƙon aiki gajere ne, mai ladabi kuma mai sarari: yana faɗin abin da kuke buƙata a layin farko, yana ba da dalili idan ana buƙata, kuma yana ƙarewa da godiya.",
            "Tsari mai sauƙi: gaisuwa, babban abin da kuke son faɗa, bayani ɗaya ko biyu, abin da kuke nema, godiya da sunanku. Misali: \"Sannu Maria, ina so in canja aikina na ranar Asabar zuwa Lahadi a wannan makon saboda wani taron iyali. Zan iya taimakawa a sami wanda zai maye gurbina. Na gode, Andre.\"",
            "Mataimakin AI zai iya taimakawa: \"Ka sa wannan saƙo ga shugabana ya fi dacewa da wurin aiki amma har yanzu da sakin fuska.\" Sannan ku karanta shi, ku sa ya yi kama da ku, ku duba rubutun sunaye. Ku guji kalmomin tes na titi, rubutu da manyan baƙaƙe duka, da alamomin emoji da yawa a wurin aiki."
          ],
          steps: ["Ku fara da gaisuwa da sunan mutumin.", "Ku faɗi babban abin da kuke son faɗa a layin farko.", "Ku ƙara bayani ɗaya ko biyu.", "Ku faɗi abin da kuke nema.", "Ku ƙare da godiya da sunanku."],
          words: [["Na aiki (professional)", "hanyar sadarwa mai ladabi da sarari da mutane ke amfani da ita a wurin aiki."], ["Shugaban aiki (supervisor)", "mutumin da ke jagorantar aikinku da jadawalinku."]],
          slides: [
            { title: "Gajere, mai ladabi, mai sarari", bullets: ["Babban abin farko", "Dalili idan ana buƙata", "Ku ƙare da godiya"] },
            { title: "Tsari mai sauƙi", bullets: ["Gaisuwa, babban abin, bayani", "Abin da kuke nema", "Godiya da sunanku"] },
            { title: "AI zai iya gyara shi", bullets: ["\"Ka sa ya fi dacewa da aiki amma da sakin fuska.\"", "Ku sa ya yi kama da ku", "Babu kalmomin titi, manyan baƙaƙe duka ko emoji da yawa"] }
          ],
          tryIt: "Ku rubuta daftarin saƙo ga shugaban aiki kuna tambaya game da jadawalinku. Ku nemi mataimakin AI ya sa ya fi dacewa da wurin aiki amma da sakin fuska, sannan ku yi canji ɗaya don ya yi kama da ku.",
          youCanNow: "rubuta gajeren saƙon aiki mai ladabi ga wani a wurin aiki.",
          quickCheck: [
            { objective: "O1", q: "Me ya kamata layin farko na saƙon aiki ya yi?", options: ["Ya faɗi babban abin da kuke son faɗa", "Ya ba da dogon labari", "Ya nemi gafara sau da yawa", "Ya jera ayyukanku na baya"], answer: 0, why: "Sa babban abin a farko yana sa saƙon aiki ya yi saurin karantawa." },
            { objective: "O1", q: "AI ya sa saƙonku ga shugaban aiki ya yi tsauri da tsawo sosai. Me za ku yi?", options: ["Ku aika shi yadda yake", "Ku nemi AI ya ƙara tsawaita shi", "Ku gajarta shi ku canja kalmomi don ya yi kama da ku", "Ku aika shi ba tare da sunanku ba"], answer: 2, why: "Saƙon aiki mai kyau gajere ne, mai ladabi, kuma da kalmominku na kanku." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Magana da shugaban aikinku",
          minutes: 5,
          goal: "Shirya da yin gajeriyar magana mai ladabi da shugaban aiki.",
          text: [
            "Wasu abubuwa sun fi kyau a faɗe su ido da ido: neman taimako, bayanin kuskure, ko neman ƙarin awoyi na aiki. Ɗan shiri yana sauƙaƙa abin.",
            "Kafin ku yi magana, ku rubuta abin da kuke son faɗa a jimla ɗaya, da abin da kuke fatan zai faru. Ku zaɓi lokacin natsuwa ku tambaya, \"Kuna da minti biyu?\" Ku yi magana a sarari, ku saurara sosai, sannan ku maimaita abin da kuka ji: \"Wato kuna son in gama kayan da aka dawo da su kafin in sake jera kaya. Na gane.\"",
            "Kuna iya yin atisaye da AI: \"Ka yi kamar kai ne shugabana a rumbun ajiyar kaya. Ina son in nemi ƙarin awoyi. Ka yi mini tambayoyi, sannan ka faɗa mini yadda na yi.\""
          ],
          steps: ["Ku rubuta abin da kuke son faɗa a jimla ɗaya.", "Ku zaɓi lokacin natsuwa ku tambaya ko suna da minti ɗaya.", "Ku yi magana a sarari ku saurara sosai.", "Ku maimaita abin da kuka ji.", "Ku yi atisaye da AI tukuna idan kuna so."],
          words: [["Maimaitawa (repeat back)", "faɗin abin da wani ya faɗa muku da kalmominku, don ku tabbata kun gane."], ["Wasan kwaikwayo (role-play)", "atisayen magana ta hanyar yin kamar abin yana faruwa."]],
          slides: [
            { title: "Wasu abubuwa ana faɗinsu ido da ido", bullets: ["Neman taimako", "Bayanin kuskure", "Neman ƙarin awoyi"] },
            { title: "Yadda ake yi", bullets: ["Abin da kuke son faɗa a jimla ɗaya", "Ku zaɓi lokacin natsuwa", "Ku saurara, sannan ku maimaita"] },
            { title: "Atisaye da AI", bullets: ["\"Ka yi kamar kai ne shugabana.\"", "Ku nemi ya faɗa muku yadda kuka yi"] }
          ],
          tryIt: "Ku nemi mataimakin AI ya yi kamar shi ne shugabanku yayin da kuke neman ƙarin awoyi. Ku yi maganar, sannan ku nemi ya ba ku shawarwari biyu don ku fi yin kyau.",
          youCanNow: "shirya da yin magana mai ladabi da shugaban aiki.",
          quickCheck: [
            { objective: "O2", q: "Me yasa za ku rubuta abin da kuke son faɗa a jimla ɗaya kafin ku yi magana da shugaban aiki?", options: ["Don ku karanta masa kalma da kalma", "Don ku san ainihin abin da kuke son faɗa", "Don ku aika shi a maimakon magana", "Don ku tsallake maganar"], answer: 1, why: "Jimla ɗaya mai sarari tana taimaka muku ku tsaya kan abin da kuke son faɗa." },
            { objective: "O2", q: "Shugabanku yana kama da yana da aiki sosai kuma ransa a ɓace. Me za ku yi?", options: ["Ku fara magana nan take", "Ku aika tes na fushi", "Ku nemi abokin aiki ya yi magana a madadinku", "Ku jira lokacin natsuwa ku tambaya ko yana da minti ɗaya"], answer: 3, why: "Lokacin natsuwa da tambaya tukuna suna nuna ladabi kuma suna kawo sakamako mafi kyau." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Karɓar ra'ayi da magance matsaloli",
          minutes: 5,
          goal: "Amsa ra'ayi cikin natsuwa da kai rahoton matsala yadda ya kamata.",
          text: [
            "Ra'ayi (feedback) bayani ne game da yadda kuke aiki. Ko da yana da wuyar ji, ta haka ne mutane ke ingantuwa kuma ake amince musu da ƙarin aiki. Ku saurara, ku ce na gode, ku yi tambaya idan wani abu bai yi sarari ba, kuma ku nuna cewa kuna gyarawa.",
            "Matsaloli suna faruwa: za ku makara, kun yi kuskure, wata na'ura ta lalace, wani abokin aiki yana jawo matsala. Ku kai rahoto da wuri, ga mutumin da ya dace, da gaskiyar abin da ya faru: me ya faru, yaushe, da me kuka yi. \"Na zubar da kwalin tulunan gilashi a layi na 4 ƙarfe 2 na rana. Na tare wurin kuma na ɗauko tsintsiya. Wa zan faɗa wa game da lissafin kaya?\"",
            "Idan kuna jin haushi, ku ja numfashi kafin ku amsa. Kuna iya cewa, \"Bari in yi tunani a kai in dawo muku da amsa.\" Ku yi amfani da AI don tsara amsa mai natsuwa, ba don aika amsa cikin fushi ba."
          ],
          steps: ["Ku saurara ba tare da jayayya ba.", "Ku ce na gode, ku yi tambayoyi idan ana buƙata.", "Ku kai rahoton matsaloli da wuri, da gaskiyar abin da ya faru.", "Ku ja numfashi idan kuna jin haushi.", "Ku cika abin da kuka ce za ku yi."],
          words: [["Ra'ayi (feedback)", "bayani game da yadda kuke aiki, don ya taimaka muku ku inganta."], ["Kai rahoto (report)", "faɗa wa mutumin da ya dace abin da ya faru."]],
          slides: [
            { title: "Ra'ayi yana taimaka muku ku girma", bullets: ["Ku saurara, ku ce na gode", "Ku yi tambaya idan bai yi sarari ba", "Ku nuna cewa kuna gyarawa"] },
            { title: "Ku kai rahoton matsaloli da wuri", bullets: ["Ga mutumin da ya dace", "Me ya faru, yaushe, me kuka yi"] },
            { title: "Ku natsu", bullets: ["Ku ja numfashi", "\"Bari in yi tunani in dawo muku da amsa.\"", "Ku yi amfani da AI don tsara amsa mai natsuwa"] }
          ],
          tryIt: "Ku tambayi mataimakin AI: \"Shugabana ya ce ina buƙatar in ƙara sauri a layin aiki. Ka taimake ni in tsara amsa mai natsuwa da kyau, da hanyoyi biyu na ingantawa.\" Ku rubuta amsar da za ku yi amfani da ita.",
          youCanNow: "amsa ra'ayi cikin natsuwa da kai rahoton matsala a sarari.",
          quickCheck: [
            { objective: "O3", q: "Mene ne ra'ayi (feedback) a wurin aiki?", options: ["Hukunci", "Bayani game da yadda kuke aiki", "Ƙarin albashi", "Ƙorafi daga abokin ciniki kawai"], answer: 1, why: "Ra'ayi bayani ne game da yadda kuke aiki don ku inganta." },
            { objective: "O3", q: "Kun zubar da kwali kuma abin da ke ciki ya karye. Me za ku yi?", options: ["Ku ɓoye shi ku yi fatan babu wanda zai gani", "Ku ɗora laifi kan abokin aiki", "Ku kai rahoto da wuri ga mutumin da ya dace da gaskiyar abin da ya faru", "Ku jira har ƙarshen mako"], answer: 2, why: "Kai rahoto da wuri da gaskiya yana nuna amana kuma yana taimakawa a gyara matsalar." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Sadarwa a wurin aiki",
        questions: [
          { objective: "O1", q: "A ina ya kamata babban abin da kuke son faɗa ya kasance a saƙon aiki?", options: ["Ba ko'ina", "A ƙarshen ƙarshe", "A layin farko", "A wani saƙo dabam"], answer: 2, why: "Shugabanni masu aiki da yawa suna fara karanta layin farko." },
          { objective: "O1", q: "Wanne ne ya fi dacewa da wurin aiki?", options: ["\"Sannu Maria, zan iya canja Asabar zuwa Lahadi a wannan makon? Zan iya taimakawa a sami wanda zai maye gurbina. Na gode, Andre\"", "\"kai ba zan zo asabar ba\"", "\"BA ZAN ZO ASABAR BA\"", "\"??\""], answer: 0, why: "Yana da ladabi, sarari, kuma yana tayin taimako." },
          { objective: "O2", q: "Mene ne ma'anar \"maimaitawa\" (repeat back)?", options: ["Tafiya ku bar wurin", "Faɗin abin da ƙarfi", "Jayayya", "Faɗin abin da kuka ji da kalmominku"], answer: 3, why: "Yana nuna cewa kun gane." },
          { objective: "O3", q: "Shugabanku ya ba ku ra'ayi mai tsauri. Amsa ta farko mai kyau ita ce:", options: ["Ku yi jayayya nan take", "Ku saurara ku ce na gode", "Ku bar aikin", "Ku ƙyale shi"], answer: 1, why: "Sauraro yana nuna cewa za ku iya girma." },
          { objective: "O3", q: "Kun karya wani abu a wurin aiki. Me za ku yi?", options: ["Ku ɓoye shi", "Ku kai rahoto da wuri ga mutumin da ya dace da gaskiyar abin da ya faru", "Ku ɗora laifi kan abokin aiki", "Ku jira har wani ya gani"], answer: 1, why: "Rahoto da wuri da gaskiya yana gina amana." }
        ]
      }
    },
    {
      name: "Babi na 2: Gudanar da aiki",
      lessons: [
        {
          objectives: ["O4"],
          title: "Tsara ranar aikinku da fifita ayyuka",
          minutes: 5,
          goal: "Yi jerin abubuwan yi ku sa ayyuka mafi muhimmanci a farko.",
          text: [
            "Jerin abubuwan yi yana hana ku manta ayyuka kuma yana taimaka muku ku fara yin mafi muhimmanci. Ana kiran wannan fifita ayyuka (prioritizing).",
            "Ku rubuta kowane aiki. Sannan ku yi wa kowanne alama: Dole a yi yau (wa'adi, tsaro, abin da shugabanku ya nema), Ya kamata a yi, da A yi idan akwai lokaci. Ku fara da ayyukan dole. Idan ba ku da tabbas game da mafi muhimmanci, ku tambayi shugabanku; wannan tambaya ce ta hikima, ba rauni ba.",
            "AI zai iya taimakawa wajen jera ayyuka: \"Ga ayyukana na wannan aiki a shagon kayan abinci. Ka jera su bisa muhimmanci ka bayyana dalili.\" Ku kwatanta jerinsa da abin da shugabanku ya faɗa."
          ],
          steps: ["Ku rubuta kowane aiki.", "Ku yi wa kowanne alama: dole, ya kamata, ko idan akwai lokaci.", "Ku fara yin ayyukan dole.", "Ku tambayi shugabanku idan ba ku da tabbas.", "Ku yi alamar an gama a kan kowane aiki da kuka gama."],
          words: [["Fifita (prioritize)", "yanke waɗanne ayyuka ne mafi muhimmanci da yin su a farko."], ["Wa'adi (deadline)", "lokacin da dole a gama wani abu kafinsa."]],
          slides: [
            { title: "Jerin abubuwan yi yana taimakawa", bullets: ["Babu abin da za a manta", "Muhimman abubuwa a farko"] },
            { title: "Dole, ya kamata, idan akwai lokaci", bullets: ["Dole: wa'adi, tsaro, abin da shugaba ya nema", "Ya kamata: muhimmi, amma ba na gaggawa sosai ba", "Idan akwai lokaci: in lokaci ya rage"] },
            { title: "AI zai iya jera su", bullets: ["\"Ka jera ayyukana bisa muhimmanci.\"", "Ku kwatanta da abin da shugabanku ya faɗa"] }
          ],
          tryIt: "Ku rubuta ayyuka shida daga ranar aiki ta gaske ko ta tunani. Ku yi wa kowanne alamar dole, ya kamata, ko idan akwai lokaci. Ku nemi mataimakin AI ya jera su, ku kwatanta da naku jerin.",
          youCanNow: "tsara ranar aiki da yin ayyuka mafi muhimmanci a farko.",
          quickCheck: [
            { objective: "O4", q: "A jerin dole, ya kamata, idan akwai lokaci, waɗanne ayyuka ne ke ƙarƙashin \"dole\"?", options: ["Ayyukan da dole a yi yau", "Ayyukan da kuka fi so", "Ayyukan da suka fi sauƙi", "Ayyukan wata mai zuwa"], answer: 0, why: "Ayyukan dole su ne waɗanda dole a yi yau, sau da yawa da wa'adi." },
            { objective: "O4", q: "Ayyuka biyu duka suna kama da na gaggawa kuma ba ku san wanne za ku fara ba. Me za ku yi?", options: ["Ku yi wanda ya fi sauƙi", "Kada ku yi ko ɗaya", "Ku yi rabin kowanne", "Ku tambayi shugabanku wanne ya fi muhimmanci"], answer: 3, why: "Idan ba ku da tabbas game da mafi muhimmanci, kuna tambayar shugabanku." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Jadawali da takardun da ake rabawa",
          minutes: 6,
          goal: "Buɗe jadawali ko takardar da ake rabawa, nemo sashenku, ku ƙara abu a ciki.",
          text: [
            "Ayyuka da yawa suna raba jadawali da takardu ta intanet. Ranakun aikinku na iya kasancewa a manhajar jadawali (app) da mai ɗaukar aikinku ya zaɓa; jerin abubuwan dubawa da fom na iya kasancewa a Google Docs, Google Sheets, Microsoft Word ko Excel.",
            "Idan wani ya raba takarda da ku, za ku sami hanyar haɗi (link) ta imel ko tes. Ku taɓa ta, ku shiga asusu idan an nema, ku nemo sashenku. Kuna iya rubutu a cikin takardar, kuma wasu za su ga canje-canjen. Sharhi (comment) yana bar ku yi tambaya ba tare da canja rubutun ba: ku zaɓi kalmomin ku zaɓi Comment.",
            "Ku duba manhajar jadawalinku kowace rana, kuma idan ranar aiki ta canja, ku tabbatar da shugabanku. Kada ku taɓa canja wani abu a takardar da ake rabawa da ba naku ba ne ku canja; ku tambaya tukuna."
          ],
          steps: ["Ku taɓa hanyar haɗin da aka raba ta imel ko tes.", "Ku shiga asusu idan an nema.", "Ku nemo sashenku na takardar ko jadawalin.", "Ku rubuta abin da kuka sabunta, ko ku ƙara sharhi don yin tambaya.", "Ku duba jadawalinku kowace rana ku tabbatar da canje-canje."],
          words: [["Takardar da ake rabawa (shared document)", "fayil a intanet da mutane da yawa za su iya buɗewa su gyara."], ["Sharhi (comment)", "ɗan rubutu da ake ƙarawa a gefen rubutu, don yin ko amsa tambayoyi."]],
          slides: [
            { title: "Ana raba aiki ta intanet", bullets: ["Jadawali a manhaja (app)", "Docs da Sheets, Word da Excel"] },
            { title: "Amfani da takardar da ake rabawa", bullets: ["Ku taɓa hanyar haɗi, ku shiga asusu", "Ku nemo sashenku", "Ku rubuta, ko ku ƙara sharhi"] },
            { title: "Kyawawan halaye", bullets: ["Ku duba jadawalinku kowace rana", "Ku tabbatar da canje-canje da shugabanku", "Ku canja abin da yake naku kawai"] }
          ],
          tryIt: "Ku ƙirƙiri takardar Google Doc ko Word kyauta mai suna \"Makon aikina\". Ku rubuta ranakun aikinku na mako ɗaya, ku ƙara sharhi ɗaya a matsayin tambaya, sannan ku yi atisayen raba ta ta hanyar haɗi da wani a iyalinku ko da kanku.",
          youCanNow: "amfani da jadawali da takardun da ake rabawa da ƙara abu a cikinsu yadda ya kamata.",
          quickCheck: [
            { objective: "O5", q: "Ta yaya ake yawan shiga takardar da ake rabawa?", options: ["Ta hanyar saya", "Ta hanyar haɗi da aka turo ta imel ko tes", "Ta hanyar buga ta a takarda", "Ta hanyar kiran kamfanin"], answer: 1, why: "Idan aka raba takarda da ku, yawanci kuna samun hanyar haɗi." },
            { objective: "O5", q: "Kun ga kuskure a sashen wani abokin aiki a jadawalin da ake rabawa. Me za ku yi?", options: ["Ku canja shi da kanku", "Ku goge sashensa", "Ku ƙara sharhi ko ku tambaye shi game da shi", "Ku ƙyale shi har abada"], answer: 2, why: "Ba kwa canja sassan da ba naku ba; kuna yin sharhi ko tambaya tukuna." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Amfani da AI a wurin aiki yadda ya kamata",
          minutes: 5,
          goal: "Bi dokokin AI na wurin aikinku ku kiyaye bayanan kamfani da na abokan ciniki a sirri.",
          text: [
            "Wuraren aiki da yawa suna amfani da AI, kuma da yawa suna da dokoki game da shi. Wasu suna yarda da wasu kayan AI; wasu ba sa yarda da AI kwata-kwata don wasu ayyuka. Koyaushe ku tambayi shugabanku abin da aka yarda kafin ku yi amfani da AI don aiki.",
            "Kada ku taɓa saka bayanan sirri na aiki a cikin kayan AI na jama'a: sunayen abokan ciniki, adireshinsu ko bayanan biyansu, bayanan abokan aiki, farashi ko tsare-tsaren da ba a bayyana wa jama'a ba, ko kalmomin sirri (password). Hakan na iya karya dokokin kamfani da kuma doka.",
            "Ku yi amfani da AI don abubuwa kamar inganta rubutunku na kanku, bayanin wata kalma, ko atisayen magana. Ku tabbatar da abin da ya faɗa, kuma ku faɗi gaskiya idan kun yi amfani da shi a wani abu da kuka miƙa."
          ],
          steps: ["Ku tambayi shugabanku wane amfani da AI aka yarda.", "Kada ku taɓa saka bayanan sirri na abokin ciniki, abokin aiki ko na kamfani a cikin AI.", "Ku yi amfani da AI don rubutunku na kanku da koyo.", "Ku tabbatar da amsoshinsa.", "Ku faɗi gaskiya game da amfani da shi."],
          words: [["Na sirri (confidential)", "bayanan sirri da bai kamata a raba su a wajen kamfani ba."], ["Doka ta wurin aiki (policy)", "ƙa'ida a rubuce a wurin aiki."]],
          slides: [
            { title: "Ku tambaya tukuna", bullets: ["Wuraren aiki suna da dokokin AI", "Ku tambayi shugabanku abin da aka yarda"] },
            { title: "Kada ku taɓa saka a cikin AI", bullets: ["Sunayen abokan ciniki ko bayanan biyansu", "Bayanan abokan aiki", "Tsare-tsaren kamfani, farashi ko kalmomin sirri"] },
            { title: "Amfani masu kyau", bullets: ["Gyara rubutunku na kanku", "Bayanin wata kalma", "Atisayen magana"] }
          ],
          tryIt: "Aikin ƙarshe: ku nemi mataimakin AI ya taimaka a rubuta gajeren saƙon aiki ga shugabanku, kuna neman canja ranar aiki ɗaya, tare da dalili da tayin taimakawa a sami wanda zai maye gurbinku. Ku sa ya yi kama da ku, ku duba cewa babu bayanan sirri a ciki. Sannan ku yi jerin abubuwan yi bisa muhimmanci don ranar aiki.",
          youCanNow: "yin sadarwa cikin ladabi a wurin aiki, tsara aikinku, amfani da kayan da ake rabawa, da amfani da AI a wurin aiki yadda ya kamata.",
          quickCheck: [
            { objective: "O6", q: "Mene ne doka ta wurin aiki (policy)?", options: ["Ƙa'ida a rubuce a wurin aiki", "Ra'ayin abokin aiki", "Ra'ayin abokin ciniki", "Wani nau'in manhajar jadawali"], answer: 0, why: "Doka ta wurin aiki ƙa'ida ce a rubuce da wurin aikinku ke sa ran ku bi." },
            { objective: "O6", q: "Kuna son AI ya taimaka a amsa ƙorafin abokin ciniki da ke da lambar wayarsa. Me za ku yi?", options: ["Ku saka komai a cikin kayan AI na jama'a", "Ku duba dokar AI ku bar bayanan abokin cinikin a waje", "Ku saka ƙorafin a intanet don neman shawara", "Ku tura lambar abokin cinikin ga aboki"], answer: 1, why: "Ku bi dokokin AI na wurin aikinku ku kiyaye bayanan abokin ciniki a sirri." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Gudanar da aiki",
        questions: [
          { objective: "O4", q: "Mene ne ma'anar \"fifita\" ayyuka (prioritize)?", options: ["Yin ayyuka ba tare da tsari ba", "Yin ayyuka mafi sauƙi kawai", "Tsallake ayyuka", "Yin ayyuka mafi muhimmanci a farko"], answer: 3, why: "Fifita ayyuka yana sa muhimman ayyuka a farko." },
          { objective: "O4", q: "Wane aiki ne \"dole a yi yau\"?", options: ["Abin da shugabanku ya nema da wa'adin yau", "Wani abu da za ku iya yi a wata mai zuwa", "Shirya kabad ɗinku don nishaɗi", "Babu komai"], answer: 0, why: "Wa'adi da buƙatun shugaba su ne farko." },
          { objective: "O5", q: "Kuna son yin tambaya game da wani layi a takardar da ake rabawa. Za ku:", options: ["Sake rubuta shi ba tare da tambaya ba", "Goge layin", "Ƙara sharhi", "Ƙyale shi"], answer: 2, why: "Sharhi yana yin tambaya ba tare da canja rubutun ba." },
          { objective: "O6", q: "Kuna iya saka sunan abokin ciniki da lambar katinsa a cikin kayan AI na jama'a?", options: ["Sai idan AI ya nema", "Eh, don a ajiye lokaci", "A ƙarshen mako kawai", "A'a, kwata-kwata"], answer: 3, why: "Bayanan abokin ciniki na sirri ne." },
          { objective: "O6", q: "Kafin amfani da AI don ayyukan aiki, ya kamata ku:", options: ["Ɓoye shi", "Ɗauka cewa babu matsala", "Tambayi shugabanku abin da aka yarda", "Yi amfani da duk kayan da kuke so"], answer: 2, why: "Wuraren aiki suna da nasu dokokin AI." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Ƙwarewar Wurin Aiki da Yin Aiki Yadda Ya Kamata",
    questions: [
      { objective: "O1", q: "Saƙon aiki shi ne:", options: ["Dogo kuma cike da kalmomin titi", "Gajere, mai ladabi kuma mai sarari", "Manyan baƙaƙe duka", "Yawancinsa emoji ne"], answer: 1, why: "Saƙonni masu sarari da ladabi su ne suka fi aiki." },
      { objective: "O1", q: "Saƙon aiki mai kyau yana ƙarewa da:", options: ["Godiya da sunanku", "Babu komai", "Barkwanci", "Lambar Social Security ɗinku"], answer: 0, why: "Godiya da suna suna da ladabi da sarari." },
      { objective: "O1", q: "AI zai iya taimakawa saƙon aiki ta hanyar:", options: ["Sa shi ya fi dacewa da aiki yayin da kuke riƙe kalmominku", "Aika shi ba tare da kun karanta ba", "Ƙara bayanan sirri", "Tsawaita shi"], answer: 0, why: "AI yana gyarawa; ku ne kuke dubawa ku sa ya yi kama da ku." },
      { objective: "O2", q: "Shugaban aiki (supervisor) shi ne:", options: ["Abokin aiki a matakinku", "Mutumin da ke jagorantar aikinku", "Abokin ciniki", "Direban kai kaya"], answer: 1, why: "Shugabanni suna gudanar da aiki da jadawali." },
      { objective: "O2", q: "Kafin ku yi magana da shugaban aiki, ku rubuta:", options: ["Babu komai", "Dogon jawabi", "Abin da kuke son faɗa a jimla ɗaya", "Ƙorafe-ƙorafe game da abokan aiki"], answer: 2, why: "Jimla ɗaya mai sarari tana sa ku tsaya kan abin." },
      { objective: "O2", q: "Lokaci mai kyau na magana da shugaban aiki shi ne:", options: ["Ba taɓa ba", "Lokacin cunkoso", "Lokacin da yake tare da abokin ciniki", "Lokacin natsuwa, bayan kun tambaya ko yana da minti ɗaya"], answer: 3, why: "Lokutan natsuwa suna kawo sakamako mafi kyau." },
      { objective: "O2", q: "Wasan kwaikwayo (role-play) da AI yana taimaka muku:", options: ["Samun ƙarin albashi kai tsaye", "Guje wa duk wata magana", "Yin atisayen magana kafin ta faru", "Tsallake aiki"], answer: 2, why: "Atisaye yana gina ƙarfin gwiwa." },
      { objective: "O3", q: "Ra'ayi (feedback) shi ne:", options: ["Bayani game da yadda kuke aiki", "Hukunci", "Albashi", "Jadawali"], answer: 0, why: "Ra'ayi yana taimaka muku ku inganta." },
      { objective: "O3", q: "Idan kuna kai rahoton matsala, ku haɗa da:", options: ["Jita-jita", "Wanda za a ɗora wa laifi", "Babu komai", "Me ya faru, yaushe, da me kuka yi"], answer: 3, why: "Gaskiyar abin da ya faru tana taimakawa a magance matsalar." },
      { objective: "O3", q: "Idan kuna jin haushi a wurin aiki, amsa mai kyau ita ce:", options: ["Ihu", "\"Bari in yi tunani a kai in dawo muku da amsa.\"", "Fita ku tafi", "Aika tes na fushi"], answer: 1, why: "Ɗaukar lokaci yana sa abubuwa su natsu." },
      { objective: "O4", q: "Wa'adi (deadline) shi ne:", options: ["Hutu", "Lokacin da dole a gama wani abu kafinsa", "Ranar hutu", "Ranar biyan albashi"], answer: 1, why: "Wa'adi yana nuna lokacin da ake buƙatar aiki." },
      { objective: "O4", q: "A tsarin dole, ya kamata, idan akwai lokaci, kuna farawa da:", options: ["Duk abin da yake da daɗi", "Idan akwai lokaci", "Ya kamata", "Dole"], answer: 3, why: "Ayyukan dole su ne farko." },
      { objective: "O4", q: "Idan ba ku da tabbas game da mafi muhimmanci, kuna:", options: ["Tambayar shugabanku", "Yin tsammani ku yi fata", "Rashin yin komai", "Tambayar abokin ciniki"], answer: 0, why: "Tambaya hikima ce, ba rauni ba." },
      { objective: "O5", q: "Takardar da ake rabawa ita ce:", options: ["Kalmar sirri", "Takarda a kabad ɗinku", "Fayil a intanet da mutane da yawa za su iya gyarawa", "Littafin sirri na kai"], answer: 2, why: "Ana gyara takardun da ake rabawa tare." },
      { objective: "O5", q: "Idan aka raba takarda da ku, yawanci kuna samun:", options: ["Babu komai", "Wasiƙa ta gidan waya", "Kiran waya kawai", "Hanyar haɗi ta imel ko tes"], answer: 3, why: "Hanyoyin haɗi suna buɗe fayilolin da ake rabawa." },
      { objective: "O5", q: "Ya kamata ku canja sassan takardar da ake rabawa da ba naku ba?", options: ["Da dare kawai", "Eh, a kowane lokaci", "A'a; ku tambaya tukuna", "Sai idan kun gaji da zama"], answer: 2, why: "Ku girmama aikin wasu." },
      { objective: "O5", q: "Sau nawa ya kamata ku duba manhajar jadawalinku?", options: ["Sau ɗaya a shekara", "Kowace rana", "Ba taɓa ba", "Sai lokacin da aka kore ku"], answer: 1, why: "Ranakun aiki na iya canjawa." },
      { objective: "O6", q: "Bayanai \"na sirri\" (confidential) su ne:", options: ["Na sirri kuma bai kamata a raba su a wajen kamfani ba", "Labaran jama'a", "Yanayin gari", "Waƙar da kuka fi so"], answer: 0, why: "Suna zama a cikin kamfani." },
      { objective: "O6", q: "Amfani mai kyau na AI a wurin aiki, idan an yarda, shi ne:", options: ["Inganta rubutunku na kanku", "Saka bayanan biyan abokan ciniki", "Raba adireshin abokan aiki", "Saka tsare-tsaren kamfani a intanet"], answer: 0, why: "Rubutunku na kanku ba shi da bayanan sirri." },
      { objective: "O6", q: "\"Doka ta wurin aiki\" (policy) ita ce:", options: ["Wani nau'in inshora kawai", "Ƙa'ida a rubuce a wurin aiki", "Abokin aiki", "Hutun cin abinci"], answer: 1, why: "Dokokin wurin aiki suna kafa ƙa'idoji, har da game da AI." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      2,
      4,
      7,
      8,
      10,
      11,
      13,
      17,
      18
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Buƙata a sarari",
        objective: "O1",
        notYet: "Saƙon bai faɗi wace ranar aiki ba ko dalili, ko babban abin ya ɓoye a ciki.",
        meets: "Layin farko yana neman canja ranar aiki da aka ambata, da ɗan gajeren dalili.",
        exceeds: "Ya yi gajarta har ana iya karanta shi cikin daƙiƙoƙi, kuma yana ƙarewa da godiya da sunanku."
      },
      {
        name: "Tayin taimako",
        objective: "O1",
        notYet: "Babu tayin taimakawa a sami wanda zai maye gurbi.",
        meets: "Yana tayin taimakawa a sami wanda zai maye gurbin a ranar aikin.",
        exceeds: "Yana ambaton sunan wani abokin aiki da zai iya maye gurbi, ko lokacin da za a yi magana a kai."
      },
      {
        name: "Yana kama da ku, babu bayanan sirri",
        objective: "O6",
        notYet: "Yana amfani da kalmomin da mai koyo ba zai faɗa ba, ko yana da bayanan sirri.",
        meets: "Yana da ladabi, da kalmomin mai koyo, kuma babu bayanan sirri.",
        exceeds: "Mai koyo ya canja wasu kalmomin AI da kansa kuma zai iya faɗin dalili."
      },
      {
        name: "Jerin abubuwan yi bisa muhimmanci",
        objective: "O4",
        notYet: "Ayyukan ba su da tsari, ko ayyukan da ke da wa'adi ba su ne farko ba.",
        meets: "An raba ayyukan zuwa dole, ya kamata, da idan akwai lokaci, da wa'adin yau a farko.",
        exceeds: "Ya kuma rubuta wanda za a tambaya idan ba a san mafi muhimmanci ba."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da har yanzu suna aiki kwanaki 90 bayan sun fara aiki (binciken biyo baya)",
      "Masu koyo da suka ce sun aika saƙon aiki ko sun yi amfani da jadawalin da ake rabawa cikin kwanaki 30",
      "Rahotannin masu ɗaukar aiki ko abokan aiki masu taimakon masu dawowa gida game da ingantacciyar sadarwa daga waɗanda suka kammala shirin"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Wayar zamani mai intanet, ko kwamfutar ɗakin karatu ko ta shirin",
      "Mataimakin AI kyauta: Microsoft Copilot, ChatGPT ko Google Gemini",
      "Kayan raba takardu ko jadawali kyauta don atisaye, kamar Google Docs",
      "Takarda da alƙalami don jerin abubuwan yi",
      "Kusan minti 60 gaba ɗaya, a gajerun zama: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku yi wasan kwaikwayon magana da shugaban aiki bibbiyu bayan Darasi na 2; yana gina ƙarfin gwiwa da sauri.",
      "Ku yi amfani da sunayen atisaye da ranakun aiki na ƙirƙira; kada a taɓa amfani da bayanan sirri na gaske na abokan ciniki ko abokan aiki.",
      "Ku tunatar da masu koyo cewa kowane mai ɗaukar aiki yana da nasa dokar AI, kuma su tambaya kafin su yi amfani da AI a wurin aiki.",
      "Ku shirya takardar atisaye ɗaya da ake rabawa don masu koyo su ƙara abu a ciki ba tare da canja sassan wasu ba.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
