"use strict";

// Koach Learn course, Hausa (ha) translation of workforce/workforce-communication-productivity.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "workforce-communication-productivity-ha",
  lang: "ha",
  translationOf: "workforce-communication-productivity",
  category: "Workforce Development",
  name: "Sadarwa da Ƙwazo a Wurin Aiki",
  skills: "Rubuta saƙonnin aiki a sarari, Miƙa aiki a ƙarshen shift ko aiki, Neman taimako da ba da rahoton ci gaba, Jera ayyuka bisa muhimmanci, Tsara mako da keɓe lokaci, Amfani da AI a matsayin mataimaki, ba madadin ku ba",
  outcome: "sadarwa a sarari da yin ayyukan da suka dace a wurin aikinku: rubuta saƙo mai sarari da babban batu a farko, miƙa aiki cikakke, aika gajeren rahoton ci gaba, jera ayyuka bisa muhimmanci da gaggawa, da tsara mako da keɓe lokaci, kuna amfani da AI don taimakawa wajen rubuta daftari da tsara abubuwa.",
  about: [
    "Wannan kwas ɗin na ma'aikata ne da masu neman aiki a kowane fanni: shaguna, rumbun ajiyar kaya, taimakon kiwon lafiya, ofis, hidimar abokan ciniki, da sana'o'in hannu. Sadarwa a sarari da kyakkyawar al'ada wajen amfani da lokaci suna cikin ƙwarewar da masu ɗaukar aiki suka fi daraja, kuma suna taimakawa a kowane aiki.",
    "Za ku yi atisayen rubuta saƙonnin da mutane za su fahimta tun farko, miƙa aiki ta yadda babu abin da zai ɓace, sanar da manajanku halin da ake ciki, da yanke abin da za ku fara yi idan komai yana kama da na gaggawa. Mataimakin AI yana taimaka muku rubuta daftari da tsara abubuwa; ku ne kuke kawo bayanan gaskiya da hukunci.",
    "Kowane darasi yana ɗaukar kusan minti biyar, tare da aikin \"Gwada yanzu\". Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe. Ku bi dokokin wurin aikinku game da kayan AI da aka yarda ku yi amfani da su, kuma ku kiyaye bayanan sirri daga ciki."
  ],
  finalTask: "Ku kammala kayan sadarwa da ƙwazo na mako ɗaya: saƙon aiki ɗaya mai sarari da babban batu a farko, miƙa aiki ɗaya na shift ko aiki ta amfani da jerin miƙa aiki, rahoton ci gaba ɗaya a tsarin An gama / Na gaba / An tsaya (Done / Next / Blocked), jerin ayyuka da aka raba cikin akwatuna huɗu na gaggawa da muhimmanci, da tsarin mako mai zuwa da aka keɓe lokaci. Ku yi amfani da AI don taimakawa rubuta aƙalla biyu daga cikinsu, kuma ku tabbatar da kowane bayani.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Ma'aikata da masu neman aiki a kowane fanni: shaguna, rumbun ajiyar kaya, taimakon kiwon lafiya, ofis, hidimar abokan ciniki da sana'o'in hannu.",
    startingPoint: "Suna aika saƙon tes da imel, kuma suna da wani irin jerin ayyuka. Da yawa suna rubuta saƙonnin da babban batun ya ɓuya a ciki, suna miƙa aiki ba cikakke ba, kuma suna tsara mako bisa duk abin da ya zo da gaggawa. Wasu sun taɓa gwada mataimakin AI.",
    gap: "Sadarwa a sarari da sarrafa lokaci suna cikin ƙwarewar da masu ɗaukar aiki suka fi daraja, kuma miƙa aikin da aka bar wani abu da saƙonnin da ba su da sarari suna jawo kurakurai. Masu koyo suna buƙatar tsare-tsare masu sauƙi da ake maimaitawa don saƙonni, miƙa aiki da rahotanni, hanyar zaɓar abin da ya fi muhimmanci, da tsarin mako, suna amfani da AI don rubuta daftari yayin da hukuncinsu yake ci gaba da zama mai iko.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli",
      "Na'urori: wayar zamani ko kwamfuta; kalandar waya ko littafin tsari na takarda",
      "Sirri da dokoki: babu bayanan sirri na abokin ciniki ko mara lafiya a kayan AI sai dai idan wurin aiki ya amince da tsarin; dokokin AI na wurin aiki ne farko",
      "Masu aikin shift ba su da cikakken iko kan jadawalinsu, don haka tsare-tsare suna aiki a kewayen shift da ba ya canjawa",
      "Lokaci: darussa na kusan minti 5 da suka dace da ranar aiki"
    ],
    prerequisites: "Babu."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan kuna da saƙon da za ku aika a wurin aiki", action: "rubuta saƙon da babban batu a farko da buƙata mai sarari mai lokacin ƙarshe", standard: "kan batu ɗaya, an tabbatar da kowane bayani" },
    { id: "O2", condition: "A ƙarshen shift ko aiki", action: "miƙa aiki cikakke ta amfani da jerin sassa biyar", standard: "tare da abubuwan da ba a gama ba da abin da za a kula da shi, kuma babu bayanan sirri a kayan da ba a amince da su ba" },
    { id: "O3", condition: "Kowane mako, ko idan kun makale", action: "rubuta rahoton ci gaba na An gama / Na gaba / An tsaya, da neman taimako da wuri", standard: "tare da abin da kuka gwada, abin da kuke buƙata da lokacin da kuke buƙatarsa" },
    { id: "O4", condition: "Idan kuna da aƙalla ayyuka goma", action: "raba su cikin akwatuna huɗu na gaggawa da muhimmanci da zaɓar manyan uku", standard: "kuna tambayar manajanku idan ba ku tabbata abin da ya kamata a fara ba" },
    { id: "O5", condition: "Don mako mai zuwa", action: "yin tsarin keɓe lokaci da shift ɗinku, ayyuka masu muhimmanci, lokutan saƙonni da lokacin ajiya", standard: "da aka daidaita da rayuwarku ta gaske" },
    { id: "O6", condition: "Idan kuna amfani da AI don taimako a aikinku", action: "zaɓar sassan da AI zai rubuta daftarinsu da tabbatar da kowane bayani kafin aikawa", standard: "kuna amfani da kayan da aka amince da su kaɗai, kuma kuna kiyaye bayanan sirri daga ciki" }
  ],
  chapters: [
    {
      name: "Babi na 1: Sadarwa a sarari",
      lessons: [
        {
          objectives: ["O1"],
          title: "Babban batu a farko: saƙonnin aiki masu sarari",
          minutes: 5,
          goal: "Rubuta saƙon aiki da babban batu a farko da buƙata mai sarari.",
          text: [
            "Mutanen da ke da aiki da yawa suna karanta layin farko kuma su yi saurin duba sauran. Ku sa babban batu ko buƙatar a farko, sannan bayanai, sannan abin da kuke buƙata da lokacin da kuke buƙatarsa. Misali: \"Za ka iya maye gurbina a shift ɗina na Asabar 8-4? Ina da gaggawar iyali. Don Allah ka amsa kafin Alhamis da rana tsaka.\"",
            "Ku gajarta shi: batu ɗaya a kowane saƙo, gajerun jimloli, da alamomin jeri (bullet) don jerin abubuwa. A imel, ku yi amfani da take mai sarari (subject line): \"Ina buƙatar mai maye gurbi: shift na Asabar 8-4\".",
            "Mataimakin AI zai iya mayar da rubutun da ba a tsara ba ya zama saƙo mai sarari: \"Ka sake rubuta wannan ta yadda babban batu zai zo a farko, ƙasa da kalmomi 80, cikin ladabi kuma kai tsaye.\" Ku ne kuke tabbatar da bayanai, sunaye da lokuta."
          ],
          steps: ["Ku rubuta babban batu ko buƙata a jimla ɗaya.", "Ku ƙara bayanan da mai karatu yake buƙata kawai.", "Ku faɗi abin da kuke buƙata da lokacin da kuke buƙatarsa.", "Ku yi amfani da take mai sarari.", "Ku nemi AI ya gajarta shi, sannan ku tabbatar da bayanai."],
          words: [["Babban batu a farko", "sa saƙo ko buƙata mafi muhimmanci a farkon rubutu."], ["Take (subject line)", "gajeren sunan imel da ke saman sa."]],
          slides: [
            { title: "Masu karatu suna dubawa da sauri", bullets: ["Babban batu ko buƙata a farko", "Sannan bayanai", "Sannan abin da kuke buƙata da lokacin da kuke buƙatarsa"] },
            { title: "Ku gajarta shi", bullets: ["Batu ɗaya a kowane saƙo", "Gajerun jimloli da alamomin jeri", "Take mai sarari: \"Ina buƙatar mai maye gurbi: Asabar 8-4\""] },
            { title: "AI zai iya gajarta shi", bullets: ["\"Babban batu a farko, ƙasa da kalmomi 80\"", "Ku ne kuke tabbatar da sunaye, ranaku da lokuta"] }
          ],
          tryIt: "Ku ɗauki saƙon da kuke buƙatar aikawa (ko misali, kamar neman canjin jadawali). Ku sake rubuta shi da babban batu a farko da lokacin ƙarshe, ku nemi AI ya gajarta shi, sannan ku tabbatar da kowane bayani.",
          youCanNow: "rubuta gajeren saƙon aiki da babban batu da buƙata a farko.",
          quickCheck: [
            { objective: "O1", q: "Me yasa ake sa babban batu a farkon saƙon aiki?", options: ["Yana tsawaita saƙon", "Yana sa saƙon ya fi ladabi", "Mutanen da ke da aiki da yawa suna karanta layin farko kuma su yi saurin duba sauran", "Doka ce ta shari'a"], answer: 2, why: "Ko masu karatu da ke ganin layin farko kawai za su sami abin da kuke buƙata." },
            { objective: "O1", q: "Kuna buƙatar hutu ranar Juma'a. Wane saƙo za ku aika?", options: ["\"Zan iya samun hutu ranar Juma'a don ganin likita? Don Allah ka sanar da ni kafin Laraba.\"", "\"Sannu, ina fata kana lafiya, wannan makon akwai aiki sosai kuma...\"", "\"Juma'a?\"", "Saƙo mai buƙatu uku daban-daban"], answer: 0, why: "Yana sa buƙatar a farko, yana ba da dalili da lokacin ƙarshe, kuma yana kan batu ɗaya." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Miƙa aiki ba tare da barin komai ba",
          minutes: 5,
          goal: "Miƙa shift ko aiki cikakke ta amfani da jeri mai sauƙi.",
          text: [
            "Matsaloli da yawa a wurin aiki suna faruwa lokacin miƙa aiki: ƙarshen shift, abokin aiki da zai tafi hutu, ko aikin da aka ba wani. Gajeren jeri yana hana abubuwa ɓacewa.",
            "Miƙa aiki mai kyau yana da: Halin da ake ciki (inda abubuwa suke yanzu), Abubuwan da ba a gama ba, Abin da za a kula da shi (haɗari ko matsaloli), Mutanen tuntuɓa (wanda za a kira), da Matakai na gaba (abin da mutum na gaba zai fara yi).",
            "Kuna iya faɗin bayananku a cikin wayarku ko ku rubuta su da sauri, sannan ku tambayi AI: \"Ka mayar da waɗannan bayanai su zama miƙa aiki mai sassa: Halin da ake ciki, Abubuwan da ba a gama ba, Abin da za a kula da shi, Mutanen tuntuɓa, Matakai na gaba.\" Ku cire bayanan sirri na abokin ciniki, mara lafiya ko ma'aikaci sai dai idan kuna amfani da tsarin aiki da aka amince da shi."
          ],
          steps: ["Ku rubuta ko ku faɗi bayanai a takaice a ƙarshen shift ko aiki.", "Ku tsara su cikin Halin da ake ciki, Abubuwan da ba a gama ba, Abin da za a kula da shi, Mutanen tuntuɓa, Matakai na gaba.", "Ku duba cewa babu abin da ya rage.", "Ku miƙa shi kuma ku amsa tambayoyi."],
          words: [["Miƙa aiki (handoff)", "ba wani mutum aiki, tare da bayanan da yake buƙata."], ["Abin da ba a gama ba (open item)", "wani abu da har yanzu ba a kammala ba."]],
          slides: [
            { title: "Matsaloli suna faruwa wajen miƙa aiki", bullets: ["Ƙarshen shift", "Hutu ko tafiya", "Aikin da aka ba wani"] },
            { title: "Jerin miƙa aiki", bullets: ["Halin da ake ciki da abubuwan da ba a gama ba", "Abin da za a kula da shi (haɗari)", "Mutanen tuntuɓa da matakai na gaba"] },
            { title: "AI yana tsara bayananku", bullets: ["Ku faɗi ko ku rubuta bayanai a takaice", "Ku nemi sassa biyar", "Ku kiyaye bayanan sirri daga ciki"] }
          ],
          tryIt: "Ku rubuta miƙa aiki don aikinku na yanzu ko na ƙarshe (ko misalin shift a rumbun ajiyar kaya) ta amfani da sassa biyar. Ku yi amfani da AI don tsara bayananku, ku duba cewa babu abin da ya rage.",
          youCanNow: "miƙa aiki cikakke ta yadda mutum na gaba zai san abin da zai yi.",
          quickCheck: [
            { objective: "O2", q: "Me yasa miƙa aiki yake da muhimmanci?", options: ["Yana tsawaita shift", "Na manajoji ne kawai", "Yana maye gurbin horo", "Matsaloli da yawa suna faruwa lokacin da aiki ya koma hannun wani"], answer: 3, why: "Bayanai suna ɓacewa lokacin da aiki ya koma hannun wani, don haka jeri yana kiyaye su cikakku." },
            { objective: "O2", q: "Kuna miƙa shift kuma wani falet (pallet) ya karkata sosai. A ina za ku sa shi?", options: ["Babu inda; mutum na gaba zai gan shi", "A ƙarƙashin \"Abin da za a kula da shi\" a miƙa aikinku", "A cikin tes ga aboki", "A cikin kanku kawai"], answer: 1, why: "Matsalolin tsaro da abubuwan da za a kula da su suna shiga cikin miƙa aiki don mutum na gaba ya ɗauki mataki." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Rahoton ci gaba da neman taimako",
          minutes: 4,
          goal: "Aika gajeren rahoton ci gaba da neman taimako da wuri kuma a sarari.",
          text: [
            "Manajoji suna son jin ci gaba kafin su tambaya. Rahoto mai layi uku yana aiki: An gama (abin da kuka kammala), Na gaba (abin da za ku yi na gaba), An tsaya (abin da ke hana ku ci gaba da abin da kuke buƙata). A Turanci ana kiran su Done, Next, Blocked.",
            "Ku nemi taimako da wuri, ba a ranar ƙarshe ba. Ku faɗi abin da kuka gwada, abin da kuke buƙata, da lokacin da kuke buƙatarsa: \"Na gwada sake kunna na'urar karanta lamba (scanner) da duba wayarta. Har yanzu ba ta haɗuwa. Ma'aikatan IT za su iya duba ta kafin ƙarfe 2 na rana?\"",
            "AI zai iya taimaka muku samun kalmomi idan saƙo yana da wuyar faɗi, kamar neman ƙarin lokaci ko sanar da manajanku wani kuskure. Ku faɗi gaskiya kuma ku gajarta."
          ],
          steps: ["Ku rubuta An gama, Na gaba, An tsaya.", "Ga duk abin da ya tsayar da ku, ku faɗi abin da kuka gwada da abin da kuke buƙata.", "Ku aika shi kafin a tambaye ku.", "Ku nemi taimako da wuri da lokacin ƙarshe mai sarari."],
          words: [["Rahoton ci gaba (status update)", "gajeren bayani game da yadda aiki yake tafiya."], ["An tsaya (blocked)", "ba za ku iya ci gaba ba har sai an gyara wani abu ko wani ya taimaka."]],
          slides: [
            { title: "Rahoto mai layi uku", bullets: ["An gama (Done)", "Na gaba (Next)", "An tsaya (Blocked)"] },
            { title: "Ku nemi taimako da wuri", bullets: ["Abin da kuka gwada", "Abin da kuke buƙata", "Lokacin da kuke buƙatarsa"] },
            { title: "Saƙonni masu wuya", bullets: ["Neman ƙarin lokaci; sanar da kuskure", "AI yana taimakawa wajen samun kalmomi", "Ku faɗi gaskiya kuma ku gajarta"] }
          ],
          tryIt: "Ku rubuta rahoton An gama / Na gaba / An tsaya na wannan makon (na gaske ko misali). Ku haɗa buƙatar taimako ɗaya mai sarari tare da abin da kuka gwada da lokacin ƙarshe.",
          youCanNow: "aika rahotannin ci gaba masu sarari da neman taimako da wuri.",
          quickCheck: [
            { objective: "O3", q: "Mene ne ma'anar \"An tsaya\" (Blocked) a rahoton ci gaba?", options: ["Ba za ku iya ci gaba ba har sai an gyara wani abu", "Kun gama aikin", "Kuna hutu", "Kun toshe imel ɗin abokin aiki"], answer: 0, why: "An tsaya yana sanar da manajanku abin da ke hana ku don ya taimaka." },
            { objective: "O3", q: "Kun makale a wani aiki kwana ɗaya kuma za a buƙace shi gobe. Me za ku yi?", options: ["Ku ci gaba da gwadawa ku kaɗai ba tare da faɗa wa kowa ba", "Ku jira har bayan lokacin ƙarshe", "Ku nemi taimako yanzu, kuna faɗin abin da kuka gwada, abin da kuke buƙata da lokacin da kuke buƙatarsa", "Ku tsallake aikin"], answer: 2, why: "Neman taimako da wuri tare da bayanai yana ba wasu lokaci su taimaka kafin lokacin ƙarshe." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Sadarwa a sarari",
        questions: [
          { objective: "O1", q: "A ina babban batu yake zuwa a saƙon aiki?", options: ["A ƙarshe", "A farko", "A ɓoye a tsakiya", "Babu inda"], answer: 1, why: "Masu karatu masu aiki da yawa suna ganin layin farko." },
          { objective: "O1", q: "Wane take ne ya fi sarari?", options: ["\"Abubuwa\"", "\"Sannu\"", "\"Tambaya\"", "\"Ina buƙatar mai maye gurbi: shift na Asabar 8-4\""], answer: 3, why: "Yana faɗin batun da buƙatar." },
          { objective: "O2", q: "Wanne ne yake shiga cikin miƙa aiki?", options: ["Abubuwan da ba a gama ba da abin da za a kula da shi", "Kalmar sirrinku ta kafofin sada zumunta", "Gulma", "Babu komai"], answer: 0, why: "Mutum na gaba yana buƙatar halin da ake ciki, haɗari da matakai na gaba." },
          { objective: "O3", q: "Mene ne layuka uku na rahoton ci gaba?", options: ["Eh, A'a, Wataƙila", "Sannu, Yaya kake, Sai an jima", "An gama, Na gaba, An tsaya", "Fara, Tsaya, Dakata"], answer: 2, why: "Wannan tsarin yana nuna ci gaba da buƙatu." },
          { objective: "O3", q: "Yaushe ya kamata ku nemi taimako?", options: ["Ba kwata-kwata", "Sai bayan lokacin ƙarshe", "Da wuri, tare da abin da kuka gwada da lokacin ƙarshe", "Ta hanyar tsammani kawai"], answer: 2, why: "Neman taimako da wuri yana ba da lokacin gyara matsaloli." }
        ]
      }
    },
    {
      name: "Babi na 2: Yin ayyukan da suka dace",
      lessons: [
        {
          objectives: ["O4"],
          title: "Jera ayyukanku: na gaggawa da masu muhimmanci",
          minutes: 5,
          goal: "Raba ayyuka cikin akwatuna huɗu da yanke abin da za a fara yi.",
          text: [
            "Idan komai yana kama da na gaggawa, ku jera su. Ku zana akwatuna huɗu: Na gaggawa kuma mai muhimmanci (ku yi yanzu), Mai muhimmanci amma ba na gaggawa ba (ku sa masa lokaci), Na gaggawa amma ba mai muhimmanci ba (ku ba wani ko ku yi da sauri), Babu ɗaya (ku bar shi ko ku yi daga baya). Ana yawan kiran wannan Eisenhower matrix.",
            "Ayyuka masu muhimmanci suna da alaƙa da burinku ko manyan ayyukan aikinku: tsaro, abokan ciniki, lokutan ƙarshe da manajanku ya sa. Ayyukan gaggawa suna da lokacin ƙarshe da ke kusa ko wani yana jira.",
            "Kuna iya liƙa jerin ayyukanku (ba tare da bayanan sirri ba) a cikin AI ku tambaye shi ya ba da shawarar akwatuna. Sannan ku yanke shawara da kanku: ku ne kuka san abin da manajanku yake tsammani. Idan ba ku tabbata ba, ku tambayi manajanku wanne ne zai fara."
          ],
          steps: ["Ku jera duk ayyukanku.", "Ku tambaya: yana da muhimmanci? Na gaggawa ne?", "Ku sa kowanne a ɗaya daga cikin akwatuna huɗu.", "Ku yi akwati na 1, ku sa wa akwati na 2 lokaci, ku ba wani ko ku yi akwati na 3 da sauri, ku bar akwati na 4.", "Idan ba ku tabbata ba, ku tambayi manajanku."],
          words: [["Na gaggawa (urgent)", "yana buƙatar kulawa nan ba da daɗewa ba, da lokacin ƙarshe da ke kusa ko wani yana jira."], ["Mai muhimmanci (important)", "yana da alaƙa da manyan ayyukanku ko burinku."], ["Eisenhower matrix", "hanyar akwatuna huɗu don jera ayyuka bisa gaggawa da muhimmanci."]],
          slides: [
            { title: "Akwatuna huɗu", bullets: ["Na gaggawa + mai muhimmanci: ku yi yanzu", "Mai muhimmanci, ba na gaggawa ba: ku sa masa lokaci", "Na gaggawa, ba mai muhimmanci ba: ku ba wani ko ku yi da sauri", "Babu ɗaya: ku bar shi ko daga baya"] },
            { title: "Abin da ke sa aiki ya zama mai muhimmanci", bullets: ["Tsaro da abokan ciniki", "Manyan ayyuka da lokutan ƙarshe na manaja"] },
            { title: "AI yana ba da shawara, ku kuke yanke shawara", bullets: ["Ku liƙa jerinku ba tare da bayanan sirri ba", "Ku duba akwatunan da kanku", "Ba ku tabbata ba? Ku tambayi manajanku"] }
          ],
          tryIt: "Ku jera aƙalla ayyuka goma na wannan makon. Ku raba su cikin akwatuna huɗu (ku nemi AI ya fara gwadawa idan kuna so), sannan ku zaɓi manyan uku na gobe.",
          youCanNow: "jera ayyuka bisa gaggawa da muhimmanci da zaɓar abin da za a fara yi.",
          quickCheck: [
            { objective: "O4", q: "Me ke sa aiki ya zama mai muhimmanci?", options: ["Wani ya nema da babbar murya", "Yana da alaƙa da manyan ayyukanku, tsaro ko burinku", "Shi ne imel mafi sabo", "Shi ne mafi sauƙi"], answer: 1, why: "Ayyuka masu muhimmanci suna da alaƙa da manyan ayyukanku, tsaro da burinku." },
            { objective: "O4", q: "Wani aiki ba na gaggawa ba ne kuma ba mai muhimmanci ba ne. Me za ku yi da shi?", options: ["Ku fara yin sa", "Ku sa masa lokaci a safiyar yau", "Ku nemi abokin aiki ya yi shi yanzu", "Ku bar shi ko ku yi shi daga baya"], answer: 3, why: "Ana barin ayyukan akwati na 4 ko a yi su daga baya don lokaci ya tafi kan abin da ya fi muhimmanci." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Tsara makonku da keɓe lokaci",
          minutes: 5,
          goal: "Tsara mako ta hanyar keɓe lokaci don aiki mai muhimmanci.",
          text: [
            "Jerin ayyuka yana faɗin me za a yi; kalanda tana faɗin yaushe. Keɓe lokaci (time blocking) yana nufin sa ayyuka a takamaiman lokuta a kalandarku, kamar \"Talata 9-10: kammala rahoton kayan ajiya\".",
            "Ku fara keɓe lokaci ga ayyuka masu muhimmanci amma ba na gaggawa ba, domin su ne ake ture su gefe. Ku ƙara gajerun lokuta don imel da saƙonni maimakon dubawa duk yini. Ku bar ɗan lokaci a buɗe don abubuwan ba-zata.",
            "Ku tambayi AI: \"Ga shift ɗina da ayyukana tare da lokacin da kowanne zai ɗauka. Ka yi mini tsarin keɓe lokaci na mako mai zuwa tare da lokacin ajiya.\" Sannan ku daidaita shi da rayuwarku ta gaske: tafiya zuwa aiki, iyali, hutu."
          ],
          steps: ["Ku rubuta lokutanku da ba sa canjawa: shift, taruka, iyali.", "Ku ƙiyasta lokacin da kowane aiki zai ɗauka.", "Ku fara keɓe lokaci ga ayyuka masu muhimmanci.", "Ku ƙara gajerun lokutan saƙonni da lokacin ajiya.", "Ku nemi AI ya yi daftari, sannan ku daidaita shi."],
          words: [["Keɓe lokaci (time blocking)", "sa ayyuka a takamaiman lokuta a kalandarku."], ["Lokacin ajiya (buffer time)", "lokacin da aka bari a buɗe don abubuwan ba-zata da jinkiri."]],
          slides: [
            { title: "Jeri yana faɗin me; kalanda tana faɗin yaushe", bullets: ["\"Talata 9-10: kammala rahoton kayan ajiya\""] },
            { title: "Yadda ake keɓe lokaci", bullets: ["Ayyuka masu muhimmanci amma ba na gaggawa ba farko", "Gajerun lokuta don imel da saƙonni", "Ku bar lokacin ajiya"] },
            { title: "AI yana yin daftarin mako", bullets: ["Ku ba da shift, ayyuka da ƙiyasin lokaci", "Ku daidaita don tafiya, iyali da hutu"] }
          ],
          tryIt: "Ku yi tsarin keɓe lokaci na mako mai zuwa da shift ɗinku, ayyuka uku masu muhimmanci, lokutan saƙonni biyu da lokacin ajiya. Ku yi amfani da AI don daftarin farko idan kuna so.",
          youCanNow: "tsara mako da keɓe lokaci ta yadda za a yi aiki mai muhimmanci.",
          quickCheck: [
            { objective: "O5", q: "Mene ne lokacin ajiya (buffer time)?", options: ["Lokacin duba kafofin sada zumunta", "Ƙarin lokaci don taruka", "Lokacin da aka bari a buɗe a tsarinku don abubuwan ba-zata da jinkiri", "Ƙarin aiki bayan lokaci (overtime)"], answer: 2, why: "Lokacin ajiya yana hana abin ba-zata ya lalata dukkan tsarin." },
            { objective: "O5", q: "Tsarin mako na AI ya sa wani aiki a lokacin shift ɗinku na Talata. Me za ku yi?", options: ["Ku mayar da shi lokacin da ya dace da jadawalinku na gaske", "Ku bi tsarin AI duk da haka", "Ku tsallake shift ɗinku", "Ku goge tsarin"], answer: 0, why: "AI yana yin daftarin tsarin, amma ku ne kuke daidaita shi da rayuwarku ta gaske." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Amfani da AI a matsayin mataimaki, ba madadin ku ba",
          minutes: 5,
          goal: "Yi amfani da AI a sassan aikinku da suka dace, kuma ku bar hukuncinku ya ci gaba da zama mai iko.",
          text: [
            "AI ya fi taimakawa wajen daftarin farko, tsara bayanai, taƙaitawa, da samun kalmomi don saƙonni masu wuya. Bai san wurin aikinku, abokan aikinku ko ainihin abin da manajanku yake nufi ba, kuma yana iya yin kuskure.",
            "Kyawawan al'adu: ku ba shi bayananku, ba tunaninku ba; ku nemi gajeren daftari; ku tabbatar da kowane bayani; ku sa ya yi kama da ku; ku bi dokokin AI na wurin aikinku; ku kiyaye bayanan sirri da na kanku daga ciki.",
            "Ku bi diddigin abu ɗaya: lokacin da aka ajiye. Idan wani kayan aiki ya ajiye muku minti 20 a rana a kan saƙonni, wannan lokaci ne na ɓangaren aikinku da ya shafi mutane, inda kuke fice."
          ],
          steps: ["Ku yi amfani da AI don daftari, tsarawa da taƙaitawa.", "Ku tabbatar da bayanai kuma ku sa ya yi kama da ku.", "Ku bi dokokin AI na wurin aiki.", "Ku rubuta lokacin da kuke ajiyewa kowane mako."],
          words: [["Hukunci (judgment)", "ƙarfinku na yanke shawara mai kyau ta amfani da abin da kuka sani."]],
          slides: [
            { title: "AI yana da kyau wajen", bullets: ["Daftarin farko", "Tsara bayanai da taƙaitawa", "Kalmomi don saƙonni masu wuya"] },
            { title: "Kyawawan al'adu", bullets: ["Ku tabbatar da kowane bayani", "Ku sa ya yi kama da ku", "Ku bi dokoki; ku kiyaye bayanan sirri daga ciki"] },
            { title: "Lokacin da aka ajiye = lokacin mutane", bullets: ["Ku bi diddigin mintunan da aka ajiye", "Ku yi amfani da su inda kuke fice"] }
          ],
          tryIt: "Aikin ƙarshe: ku gina kayanku na mako ɗaya: saƙo ɗaya da babban batu a farko, miƙa aiki ɗaya, rahoton An gama/Na gaba/An tsaya ɗaya, jerin ayyuka a akwatuna huɗu, da mako da aka keɓe lokaci. Ku yi amfani da AI don daftarin aƙalla biyu, kuma ku tabbatar da kowane bayani.",
          youCanNow: "sadarwa a sarari da sarrafa lokacinku a wurin aiki tare da AI a matsayin mataimaki.",
          quickCheck: [
            { objective: "O6", q: "Wane ɓangare na aikinku AI yake da kyau a kai?", options: ["Yanke abin da ya fi muhimmanci", "Kwantar da hankalin abokin ciniki da ya ɓaci", "Sanin ainihin lokacin ƙarshe na manajanku", "Daftarin farko da tsara bayanai"], answer: 3, why: "AI yana taimakawa da daftari da tsarawa; hukunci da aikin mutane suna hannunku." },
            { objective: "O6", q: "Kuna son AI ya gyara bayanan da ke da sunan wani mara lafiya. Me za ku yi?", options: ["Ku liƙa su a kowane AI kyauta", "Ku yi amfani da kayan da aka amince da shi kaɗai, ko ku fara cire bayanan sirri", "Ku saka bayanan a intanet", "Ku tura su ta imel ga aboki don ya gyara"], answer: 1, why: "Dokokin wurin aiki ne farko: kayan da aka amince da su kaɗai, kuma bayanan sirri suna zama a waje." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Yin ayyukan da suka dace",
        questions: [
          { objective: "O4", q: "Wani aiki yana da muhimmanci amma ba na gaggawa ba ne. Me za ku yi?", options: ["Ku sa masa lokaci", "Ku bar shi", "Ku yi shi nan take kowane lokaci", "Ku ba wani abokin ciniki"], answer: 0, why: "Sa masa lokaci yana kare aiki mai muhimmanci." },
          { objective: "O4", q: "Wane aiki ne na gaggawa kuma mai muhimmanci?", options: ["Canja hoton allon kwamfutarku", "Tsara tsofaffin imel", "Karanta wasiƙar labarai", "Haɗarin tsaro a ƙasa a yanzu"], answer: 3, why: "Tsaro a yanzu na gaggawa ne kuma mai muhimmanci." },
          { objective: "O5", q: "Mene ne keɓe lokaci (time blocking)?", options: ["Toshe abokan aiki", "Sa ayyuka a takamaiman lokuta a kalandarku", "Kashe wayarku har abada", "Wani wasa"], answer: 1, why: "Yana tsara lokacin da za ku yi ayyuka." },
          { objective: "O5", q: "Me yasa ake barin lokacin ajiya?", options: ["Don abubuwan ba-zata da jinkiri", "Don yin barci", "Domin AI ya ce haka", "Ba shi da amfani"], answer: 0, why: "Abubuwan ba-zata kullum suna faruwa." },
          { objective: "O6", q: "Daftarin AI ya ce manajanku yana son rahoton ranar Juma'a, amma ta ce Laraba. Me za ku yi?", options: ["Ku aika ranakun biyu", "Ku amince da AI", "Ku gyara shi zuwa Laraba", "Ku yi watsi da shi"], answer: 2, why: "Ku ne kuke tabbatar da bayanai; AI bai san abin da aka faɗa ba." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Sadarwa da Ƙwazo a Wurin Aiki",
    questions: [
      { objective: "O1", q: "Me yasa ake sa babban batu a farko?", options: ["Doka ce", "Mutanen da ke da aiki da yawa suna karanta layin farko kuma su yi saurin duba sauran", "Yana tsawaita shi", "Yana ɓoye batun"], answer: 1, why: "Ana karanta layukan farko." },
      { objective: "O1", q: "Saƙon aiki mai kyau ya haɗa da:", options: ["Gulma", "Kowane bayani da kuka sani", "Kalmar sirrinku", "Abin da kuke buƙata da lokacin da kuke buƙatarsa"], answer: 3, why: "Buƙata mai sarari da lokacin ƙarshe tana sa a ɗauki mataki." },
      { objective: "O1", q: "Saƙo ɗaya ya kamata ya kasance kan:", options: ["Komai na wannan watan", "Batutuwa goma", "Babu batu", "Batu ɗaya"], answer: 3, why: "Batu ɗaya yana sa saƙo ya kasance a sarari." },
      { objective: "O2", q: "Wanne ne sashen miƙa aiki?", options: ["Abincin da kuka fi so", "Abin da za a kula da shi", "Shirye-shiryen ƙarshen mako", "Jerin kalmomin sirri"], answer: 1, why: "Abin da za a kula da shi yana jera haɗari." },
      { objective: "O2", q: "Miƙa aiki yana da muhimmanci saboda:", options: ["Ba dole ba ne", "Yana da daɗi", "Matsaloli da yawa suna faruwa lokacin da aiki ya koma hannun wani", "Yana maye gurbin horo"], answer: 2, why: "Giɓi wajen miƙa aiki yana jawo kurakurai." },
      { objective: "O2", q: "Idan kuna amfani da AI don tsara bayanan miƙa aiki, ku cire:", options: ["Bayanan sirri na abokin ciniki ko mara lafiya, sai dai idan kuna amfani da tsarin da aka amince da shi", "Abubuwan da ba a gama ba", "Matakai na gaba", "Matsayin mutanen tuntuɓa"], answer: 0, why: "Bayanan sirri suna zama a kiyaye." },
      { objective: "O3", q: "\"An tsaya\" (Blocked) a rahoton ci gaba yana nufin:", options: ["Kuna hutu", "Kun gama", "Ba za ku iya ci gaba ba har sai an gyara wani abu", "An kulle asusunku"], answer: 2, why: "Yana nuna abin da kuke buƙata." },
      { objective: "O3", q: "Buƙatar taimako mai kyau tana faɗin:", options: ["Abin da kuka gwada, abin da kuke buƙata, da lokacin da kuke buƙatarsa", "\"Taimako!\" kawai", "Babu komai", "Laifin wane ne"], answer: 0, why: "Buƙatu masu sarari suna samun taimako da sauri." },
      { objective: "O3", q: "Lokaci mafi kyau na aika rahoton ci gaba shi ne:", options: ["Ba kwata-kwata", "Kafin manajanku ya tambaya", "Sai bayan matsaloli", "Sau ɗaya a shekara"], answer: 1, why: "Rahotannin da aka aika tun kafin a tambaya suna gina amincewa." },
      { objective: "O4", q: "Ayyukan akwati na 4 (ba na gaggawa ba, ba masu muhimmanci ba) ya kamata a:", options: ["Yi su kowace awa", "Fara yin su", "Ba shugaban kamfani su", "Bar su ko a yi su daga baya"], answer: 3, why: "Ba su da wani amfani sosai." },
      { objective: "O4", q: "Ayyuka masu muhimmanci suna da alaƙa da:", options: ["Manyan ayyukanku, tsaro da burinku", "Shirye-shiryen talabijin da kuka fi so", "Imel marasa ma'ana", "Babu komai"], answer: 0, why: "Muhimmanci yana nufin yana da tasiri ga matsayinku a aiki." },
      { objective: "O4", q: "Idan ba ku tabbata wane aiki zai fara ba, ya kamata ku:", options: ["Bar AI ya yanke shawara shi kaɗai", "Yi tsammani", "Kada ku yi komai", "Tambayi manajanku"], answer: 3, why: "Manajanku ya san abin da ya fi muhimmanci." },
      { objective: "O5", q: "Wane ayyuka ya kamata ku fara keɓe musu lokaci a kalandarku?", options: ["Kafofin sada zumunta", "Waɗanda ba su da muhimmanci sosai", "Masu muhimmanci amma ba na gaggawa ba", "Babu ɗaya"], answer: 2, why: "Su ne ake ture su gefe." },
      { objective: "O5", q: "Maimakon duba imel duk yini, kuna iya:", options: ["Kada ku taɓa karanta imel", "Amfani da gajerun lokutan saƙonni", "Duba kowane minti", "Tura komai ga wasu"], answer: 1, why: "Keɓe lokuta yana kare lokacin mayar da hankali." },
      { objective: "O5", q: "Bayan AI ya yi daftarin tsarin makonku, ku:", options: ["Yi watsi da shi", "Bi shi daidai yadda yake", "Goge kalandarku", "Daidaita shi da rayuwarku ta gaske"], answer: 3, why: "Ku kuka san tafiyarku, iyalinku da lokutan hutunku." },
      { objective: "O6", q: "AI yana da kyau wajen:", options: ["Sanin abokan aikinku", "Sanin abin da manajanku yake nufi", "Daftarin farko da tsara bayanai", "Kasancewa daidai koyaushe"], answer: 2, why: "Rubuta daftari da tsarawa ƙarfinsa ne." },
      { objective: "O6", q: "Kafin aika daftarin AI, koyaushe ku:", options: ["Tabbatar da kowane bayani", "Ƙara wani rubutun AI", "Cire sunanku", "Aika shi ba tare da karantawa ba"], answer: 0, why: "AI yana iya yin kuskure." },
      { objective: "O6", q: "Lokacin da aka ajiye da AI ya fi kyau a yi amfani da shi don:", options: ["Rashin yin komai", "Ɓangaren aikinku da ya shafi mutane", "Ƙarin lokaci a gaban allo", "Babu komai"], answer: 1, why: "Aikin mutane shi ne inda kuke fice." },
      { objective: "O6", q: "Wanne ne yake bin dokokin AI na wurin aiki?", options: ["Amfani da kowace manhaja", "Amfani da kayan da aka amince da su kaɗai da kiyaye bayanan sirri daga ciki", "Liƙa bayanan abokan ciniki", "Raba kalmomin sirri"], answer: 1, why: "Dokoki suna kare ku da mai ɗaukar ku aiki." },
      { objective: "O3", q: "Layin \"Na gaba\" (Next) a rahoto yana faɗa wa manajanku:", options: ["Abin da za ku yi na gaba", "Shirinku na abincin rana", "Hutunku na gaba", "Babu komai"], answer: 0, why: "Yana nuna shirinku." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      3,
      6,
      7,
      9,
      12,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Saƙo da babban batu a farko",
        objective: "O1",
        notYet: "Babban batu ko buƙata ya ɓuya ko babu shi.",
        meets: "Babban batu yana farko, tare da buƙata mai sarari da lokacin ƙarshe, kan batu ɗaya.",
        exceeds: "Yana da take mai sarari, kuma saƙon bai kai kalmomi 100 ba."
      },
      {
        name: "Miƙa aiki cikakke",
        objective: "O2",
        notYet: "Sashe ɗaya ko fiye daga cikin sassa biyar babu shi.",
        meets: "Dukkan sassa biyar, har da abubuwan da ba a gama ba da abin da za a kula da shi.",
        exceeds: "Kowane abin da ba a gama ba yana faɗin wanda zai ɗauki nauyinsa na gaba."
      },
      {
        name: "Rahoton ci gaba",
        objective: "O3",
        notYet: "Babu An gama, Na gaba ko An tsaya.",
        meets: "Rahoton An gama / Na gaba / An tsaya tare da buƙatar taimako ɗaya mai sarari.",
        exceeds: "Buƙatar taimakon tana faɗin abin da aka gwada da lokacin da ake buƙatarsa."
      },
      {
        name: "Jerin akwatuna huɗu da keɓe lokaci",
        objective: "O5",
        notYet: "Ba a jera ayyukan ba, ko makon ba shi da lokutan da aka keɓe.",
        meets: "Ayyuka goma a akwatuna huɗu, da mako mai shift, ayyuka uku masu muhimmanci, lokutan saƙonni da lokacin ajiya.",
        exceeds: "An fara keɓe lokaci ga ayyuka masu muhimmanci amma ba na gaggawa ba."
      },
      {
        name: "An duba aikin AI",
        objective: "O6",
        notYet: "An aika daftarin AI ba tare da dubawa ba, ko an yi amfani da bayanan sirri.",
        meets: "AI ya taimaka rubuta daftarin aƙalla abubuwa biyu, kuma an tabbatar da kowane bayani.",
        exceeds: "Mai koyo ya rubuta bayani ɗaya da ya gyara."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka ce suna amfani da saƙonni masu babban batu a farko da rahotannin ci gaba a wurin aiki bayan kwanaki 30 (binciken biyo baya)",
      "Masu kula da ma'aikata da suka ce an rage miƙa aikin da aka bar wani abu ko lokutan ƙarshe da aka wuce",
      "Masu koyo da suka fara wani kwas na Koach Learn game da aiki cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Wayar zamani ko kwamfuta",
      "Mataimakin AI kyauta: ChatGPT, Microsoft Copilot ko Google Gemini, ko kayan da wurin aiki ya amince da shi",
      "Kalandar waya ko littafin tsari na takarda",
      "Misalan saƙonni, bayanan miƙa aiki da jerin ayyuka ba tare da bayanan sirri ba",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku yi amfani da misalai daga fannonin masu koyo (shaguna, rumbun ajiyar kaya, taimakon kiwon lafiya, ofis) don tsare-tsaren su yi kama da na gaske.",
      "Ku yi atisayen miƙa aiki bibbiyu: ɗaya yana miƙa aiki, ɗayan yana duba sassa biyar.",
      "Ku tunatar da masu koyo a kiwon lafiya da hidimar abokan ciniki cewa bayanan marasa lafiya da abokan ciniki ba sa shiga kayan AI da ba a amince da su ba.",
      "Masu aikin shift ƙila ba su da iko kan jadawalinsu; ku taimaka musu su keɓe lokacin da suke da iko a kai.",
      "Ku ba da maki ga kayan mako ɗaya da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
