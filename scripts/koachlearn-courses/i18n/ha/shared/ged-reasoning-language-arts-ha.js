"use strict";

// Koach Learn course, Hausa (ha) translation of shared/ged-reasoning-language-arts.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.
// The grammar examples and the English sentences being fixed stay in English inside quotes: the GED RLA test is in English.

const GED_SUBJECTS = { name: "GED Testing Service: darussan jarabawa (lokaci, nau'in tambayoyi, rubutun maƙala)", url: "https://ged.com/about_test/test_subjects/" };
const GED_RLA = { name: "GED Testing Service: Reasoning Through Language Arts (tunani da harshe)", url: "https://ged.com/about_test/test_subjects/language_arts/" };
const GED_SCORES = { name: "GED Testing Service: maki", url: "https://ged.com/about_test/scores/" };
const GED_FREE = { name: "GED Testing Service: jarabawar gwaji kyauta (da Turanci da Sifaniyanci)", url: "https://ged.com/study/free_online_ged_test/" };
const GED_READY = { name: "GED Ready, jarabawar gwaji ta hukuma", url: "https://www.ged.com/study/ged-ready.html" };
const HISET = { name: "HiSET, wata jarabawar daidai da shaidar sakandare (shafin hukuma)", url: "https://hiset.org/" };

module.exports = {
  id: "ged-reasoning-language-arts-ha",
  lang: "ha",
  translationOf: "ged-reasoning-language-arts",
  category: "Workforce Development",
  name: "Shirin Jarabawar GED: Reasoning Through Language Arts (Tunani da Harshe)",
  skills: "Gano babban ra'ayi da hujja, Fitar da ma'ana daga alamu, Gyara nahawu da alamomin rubutu, Auna hujjoji da dalilai, Rubuta dogon amsa (maƙala), Yin tsarin karatu",
  outcome: "karanta wani rubutu ku amsa tambayoyi irin na GED game da babban ra'ayinsa, hujjojinsa da nahawunsa, da rubuta dogon amsa na gwaji cikin minti 45 da ke zaɓar hujjar da ta fi ƙarfi, kuma ta bayyana dalili da shaida.",
  about: [
    "Wannan kwas na manya ne da ke shirin jarabawar GED ta Reasoning Through Language Arts (tunani da harshe): masu neman aiki, masu dawowa gida daga gidan yari, tsofaffin sojoji, matasa, baƙi da duk wanda ke komawa karatu. Shaidar GED tana iya buɗe ƙofofin aiki, horon sana'a da kwaleji.",
    "Kwas ɗin yana shirya ku don jarabawar. Ba ya ba ku shaidar GED. Hukumar GED Testing Service ce ke gudanar da jarabawar, kuma jiharku ce ke kafa dokokin zama ta. Wasu jihohi suna amfani da wata jarabawa mai suna HiSET. Ku duba ged.com da ofishin ilimin manya na jiharku don dokoki, kuɗi da wuraren jarabawa na yanzu.",
    "Za ku koyi yadda jarabawar take aiki, karanta don gano babban ra'ayi da hujja, gyara kurakuran nahawu da aka saba yi, auna hujjoji, da rubuta dogon amsa (maƙala). Kowane darasi yana da misalai da aka warware, atisayen \"Gwada yanzu\" da aka bayyana amsoshinsa, da ɗan gwaji mai tambayoyi biyu.",
    "Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe. Aikin ƙarshe maƙala ce ta gwaji da za ku rubuta cikin minti 45, ku kuma ba ta maki da ma'aunin rubric."
  ],
  finalTask: "Ku rubuta dogon amsa na gwaji irin na GED cikin minti 45 kan rubuce-rubuce biyu na ɗakin karatu da ke Darasi na 6. Ku zaɓi hujjar da ke da shaida mafi ƙarfi, ku bayyana dalili da aƙalla shaidu biyu daga rubuce-rubucen, kuma ku yi amfani da gabatarwa, sakin layi na tsakiya da kammalawa. Sannan ku sake karantawa don gyara nahawu, ku ba maƙalarku maki da ma'aunin rubric na kwas ɗin.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya da ke shirin jarabawar GED ta Reasoning Through Language Arts: masu neman aiki, masu dawowa gida daga gidan yari, tsofaffin sojoji, matasan da suka bar makaranta, baƙi da manyan da ke komawa karatu bayan shekaru masu yawa.",
    startingPoint: "Suna iya karanta rubutun yau da kullum kamar alamomi, fom da gajerun labarai. Da yawa ba su rubuta maƙala ko karanta nahawu ba shekaru da yawa, wasu kuma suna jin tsoron jarabawa ko har yanzu suna koyon Turanci.",
    gap: "Ayyuka da yawa, shirye-shiryen horo da kwalejoji suna neman takardar shaidar sakandare ko wata shaida daidai da ita. Masu koyo suna buƙatar karantawa a tsanake don neman shaida, auna hujjoji, amfani da nahawu daidai da rubuta maƙala a cikin ƙayyadadden lokaci. Waɗannan ƙwarewa ana gwada su, kuma za su yi amfani da su a wurin aiki.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli a koyarwa; rubutun atisaye gajeru ne",
      "Na'urori: waya, kwamfutar ɗakin karatu, ko takarda da alƙalami",
      "Lokaci: darussa na minti 4 zuwa 6 da suka dace da aiki, ganawa da iyali",
      "Dokokin jarabawa, kuɗi da jarabawar da jiha ke amfani da ita (GED ko HiSET) suna canjawa; masu koyo suna duba ged.com da jiharsu",
      "Wasu masu koyo suna jin tsoron jarabawa; atisaye ba shi da matsi kuma ana bayyana amsoshi"
    ],
    prerequisites: "Babu. Masu koyo da matakin karatunsu ya gaza aji 6 za su iya shiga ajin karatu na ilimin manya a lokaci guda."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Ta amfani da shafin GED na hukuma", action: "lissafa sassan jarabawar harshe ta GED, nau'in tambayoyinta da lokacinta, da rubuta tsarin karatu mai ranaku", standard: "an ambaci kowane sashe na jarabawar, kuma akwai aƙalla ranar karatu ɗaya a kowane mako har zuwa jarabawar" },
    { id: "O2", condition: "Idan aka ba ku gajeren rubutu", action: "gano babban ra'ayi, bayanai masu tallafa masa, da ma'anar da aka fitar daga alamu wadda shaida ke goyon baya", standard: "kuna nuna ainihin jimlar da ke tabbatar da kowace amsa" },
    { id: "O3", condition: "Idan aka ba ku jimloli masu kurakurai", action: "gyara kurakuran nahawu, alamomin rubutu, manyan baƙaƙe da zaɓin kalmomi", standard: "kuna samun aƙalla 4 cikin 5 daidai" },
    { id: "O4", condition: "Idan aka ba ku gajeriyar hujja", action: "gano iƙirari da shaida, da auna kowace shaida a matsayin mai ƙarfi ko mai rauni", standard: "kuna ba da dalili ga kowane hukunci" },
    { id: "O5", condition: "Idan aka ba ku rubuce-rubuce biyu masu saɓani, da agogon minti 45", action: "rubuta dogon amsa da ke zaɓar hujjar da ta fi samun tallafi, kuma ya bayyana dalili da shaida", standard: "da gabatarwa, aƙalla shaidu biyu daga rubuce-rubucen da kammalawa" }
  ],
  chapters: [
    {
      name: "Babi na 1: Karantawa a tsanake da rubutu daidai",
      lessons: [
        {
          title: "Yadda jarabawar harshe ta GED take aiki",
          objectives: ["O1"],
          minutes: 5,
          goal: "Lissafa sassan jarabawar harshe ta GED ku rubuta tsarin karatu mai ranaku.",
          text: [
            "GED tana da jarabawa huɗu: Lissafi (Math), Reasoning Through Language Arts (RLA, tunani da harshe), Kimiyya (Science) da Nazarin Zamantakewa (Social Studies). Kuna iya zama su ɗaya bayan ɗaya. Hukumar GED Testing Service ce ke yin jarabawar. Wasu jihohi suna amfani da wata jarabawa daidai da sakandare, HiSET, don haka ku duba wadda jiharku ke amfani da ita.",
            "A ged.com, an rubuta jarabawar RLA a matsayin minti 150 a sassa uku, da hutun minti 10 tsakanin sashe na 2 da na 3. Tana gwada karantawa don fahimtar ma'ana, gano da gina hujjoji, da nahawu da harshe. Sashe ɗaya maƙala ce ta rubutu, ana kiranta dogon amsa (extended response), kuma tana da minti 45.",
            "Yawancin tambayoyi na zaɓi ne (multiple choice). Wasu suna neman ku ja ku saki (drag and drop), ku zaɓi wani wuri a allo, ko ku zaɓi daga jerin da ke buɗewa (drop-down) a cikin jimla. Ged.com ta ce makin cin jarabawa 145 ne a kowane darasi. Lokaci da dokoki suna iya canjawa, don haka ku duba ged.com kafin ku yi rajista.",
            "Tsari ya fi karatun gaggawa na dare ɗaya. Gajeren atisaye kwana huɗu ko biyar a mako yana aiki fiye da dare ɗaya mai tsawo. Ged.com tana da jarabawar gwaji kyauta da jarabawar gwaji ta hukuma, GED Ready, wadda ke nuna ko kuna iya cin jarabawar."
          ],
          steps: ["Ku je ged.com ku karanta shafin Reasoning Through Language Arts.", "Ku rubuta lokaci, sassan jarabawa da nau'in tambayoyi.", "Ku zauna jarabawar gwaji ta RLA kyauta don ku ga matsayinku.", "Ku zaɓi makon da kuke son zama jarabawa, ku ƙirga makonnin da suka rage.", "Ku rubuta aƙalla ranar karatu ɗaya a kowane mako, da darasi ko ƙwarewar wannan ranar."],
          words: [["GED", "jarabawar da ta yi daidai da sakandare; cin dukkan darussa huɗu yana ba da shaidar da masu ɗaukar aiki da kwalejoji da yawa ke karɓa kamar takardar sakandare."], ["HiSET", "wata jarabawa daidai da sakandare da wasu jihohi ke amfani da ita."], ["Dogon amsa (extended response)", "sunan da GED ke ba wa maƙalar da kuke rubutawa a jarabawar."], ["Drop-down", "jerin da ke buɗewa idan kun danna shi, don ku zaɓi amsa ɗaya."], ["Tsarin karatu", "kalanda na abin da za ku yi atisaye a kai, da lokacin yin sa."]],
          slides: [
            { title: "Darussa huɗu na GED", bullets: ["Lissafi (Math)", "Reasoning Through Language Arts (RLA)", "Kimiyya (Science)", "Nazarin Zamantakewa (Social Studies)"] },
            { title: "Jarabawar RLA (ku duba ged.com)", bullets: ["Minti 150, sassa uku, hutu ɗaya na minti 10", "Karantawa don ma'ana, hujjoji, nahawu", "Maƙala ɗaya: dogon amsa, minti 45"] },
            { title: "Nau'in tambayoyi", bullets: ["Zaɓi daga amsoshi (multiple choice)", "Ja ka saki (drag and drop)", "Zaɓi wuri a allo", "Jeri mai buɗewa (drop-down)"] },
            { title: "Ku yi tsari", bullets: ["Ku fara zama jarabawar gwaji kyauta", "Ku zaɓi makon jarabawa", "Ku yi karatu kaɗan, a yawancin kwanakin mako"] }
          ],
          sources: [GED_SUBJECTS, GED_SCORES, GED_FREE, GED_READY, HISET],
          tryIt: "Ku buɗe ged.com ku zauna jarabawar gwaji ta RLA kyauta (ko ku karanta shafin RLA idan ba za ku iya zama ta yanzu ba). Sannan ku rubuta tsarin karatunku: makon da kuke son zama jarabawa, da rana ɗaya a kowane mako da ƙwarewar da za ku yi atisaye (karatu, nahawu, hujjoji ko maƙala). Ku ajiye shi; za ku ƙara masa abubuwa.",
          youCanNow: "ambaton sassan jarabawar harshe ta GED da bin tsarin karatu mai ranaku.",
          quickCheck: [
            { objective: "O1", q: "Mene ne dogon amsa (extended response) a jarabawar harshe ta GED?", options: ["Jerin kalmomin da za a koya", "Hira ta baki", "Maƙalar da kuke rubutawa a jarabawar", "Sashen lissafi"], answer: 2, why: "Ged.com tana kiran maƙalar rubutu dogon amsa (extended response)." },
            { objective: "O1", q: "Saura makonni 8 jarabawarku. Wane tsari ne ya fi kyau?", options: ["Karatun minti 30 kwana huɗu a kowane mako, da ƙwarewa ga kowace rana", "Karatu dukan dare kafin ranar jarabawa", "Zama jarabawar ba tare da atisaye ba don a ga abin da zai faru", "Karanta shawarwarin maƙala kawai"], answer: 0, why: "Gajeren atisaye na kullum mai ƙwarewar da aka tsara ga kowace rana yana gina ƙwarewa fiye da karatun gaggawa." }
          ]
        },
        {
          title: "Babban ra'ayi, bayanai da fitar da ma'ana",
          objectives: ["O2"],
          minutes: 6,
          goal: "Gano babban ra'ayi, bayanai biyu masu tallafa masa da ma'ana ɗaya da aka fitar daga alamu a gajeren rubutu.",
          text: [
            "Babban ra'ayi shi ne abin da dukan rubutun yake magana a kai galibi. Bayanai masu tallafawa su ne gaskiya, misalai da dalilan da ke goyon bayansa. Ku tambayi kanku: \"Idan zan faɗi wannan rubutu a jimla ɗaya, me zan ce?\"",
            "Misalin da aka warware. Rubutu: \"Rumbunan ajiyar kaya da yawa yanzu suna aiki dukan dare. Aikin dare sau da yawa yana biyan kuɗi fiye a kowace sa'a. Amma ma'aikatan dare suna cewa suna da matsalar barci, wasu kuma suna cewa ganin iyalansu ya fi wuya.\" Babban ra'ayi: aikin dare yana biyan kuɗi fiye amma yana da illa ga ma'aikata. Bayanai: yana biyan fiye; ma'aikata suna da matsalar barci; lokacin iyali ya fi wuya.",
            "Fitar da ma'ana (inference) hasashe ne mai hankali bisa alamun da ke cikin rubutu. Ba a rubuta shi kalma da kalma ba, amma rubutun yana goyon bayansa. Daga rubutun, kuna iya fahimtar cewa ma'aikaci mai ƙananan yara zai iya yin tunani sosai kafin ya karɓi aikin dare. Ba za ku iya cewa aikin dare ya saɓa wa doka ba; babu abin da ya faɗi haka.",
            "A jarabawa, koyaushe ku nuna jimlar da ke tabbatar da amsarku. Idan ba za ku iya nuna ta ba, wataƙila amsar ba daidai ba ce."
          ],
          steps: ["Ku fara karanta tambayar, don ku san abin da za ku nema.", "Ku karanta rubutun sau ɗaya har ƙarshe.", "Ku faɗi babban ra'ayi a jimla ɗaya.", "Ku nemo bayanai biyu da ke goyon bayansa.", "Don fitar da ma'ana, ku zaɓi amsar da rubutun ke goyon baya, ku nemo jimlar da ke tabbatar da ita."],
          words: [["Babban ra'ayi", "abin da rubutu yake magana a kai galibi."], ["Bayani mai tallafawa", "gaskiya, misali ko dalilin da ke goyon bayan babban ra'ayi."], ["Fitar da ma'ana (inference)", "abin da kuka gane daga alamun da ke cikin rubutu."], ["Shaida (evidence)", "kalmomin da ke cikin rubutu da ke tabbatar da amsa."]],
          slides: [
            { title: "Babban ra'ayi", bullets: ["Abin da rubutun yake magana a kai galibi", "Ku faɗe shi a jimla ɗaya"] },
            { title: "Bayanai masu tallafawa", bullets: ["Gaskiya, misalai da dalilai", "Suna goyon bayan babban ra'ayi"] },
            { title: "Fitar da ma'ana (inference)", bullets: ["Hasashe mai hankali daga alamun rubutu", "Ba a rubuta shi kalma da kalma ba", "Dole rubutun ya goyi bayansa"] },
            { title: "Ku tabbatar", bullets: ["Ku nuna jimlar da ke tabbatar da amsarku", "Babu jimlar da za ku nuna? Ku sake zaɓa"] }
          ],
          tryIt: "Rubutun atisaye: \"Birnin ya buɗe sababbin cibiyoyin sanyaya jiki uku a wannan bazara. A ranakun da zafi ya wuce digiri 100, sun kasance a buɗe har ƙarfe 10 na dare. Tsofaffi da mutanen da ba su da na'urar sanyaya ɗaki (air conditioning) ne suka fi ziyarta.\" 1) Babban ra'ayi? 2) Bayanai biyu? 3) Wace ma'ana ce rubutun ke goyon baya: (a) birnin yana son kare mutane daga zafi, ko (b) cibiyoyin sun yi tsada sosai? Amsoshi: 1) Birnin ya buɗe cibiyoyin sanyaya jiki don taimakon mutane a lokacin zafi. 2) A buɗe har ƙarfe 10 na dare a ranakun zafi sosai; yawancin masu ziyara tsofaffi ne da mutanen da ba su da na'urar sanyaya ɗaki. 3) (a). Babu abin da rubutun ya faɗa game da kuɗi.",
          youCanNow: "gano babban ra'ayi, bayanai da ma'anar da rubutu ke goyon baya, da nuna hujjar.",
          quickCheck: [
            { objective: "O2", q: "Wani rubutu ya ce gidan burodi ya ƙara aikin yamma, ya ɗauki mutane biyar aiki, kuma ya sayar da burodi fiye da da da kashi 30%. Mene ne babban ra'ayi?", options: ["Burodi yana da amfani ga lafiya", "Ƙara aikin yamma ya taimaki gidan burodin ya bunƙasa", "An ɗauki mutane biyar aiki", "Gidajen burodi suna rufewa da dare"], answer: 1, why: "Dukan rubutun game da aikin yamma ne da ya taimaki gidan burodin; ɗaukar ma'aikata da ƙarin ciniki bayanai ne." },
            { objective: "O2", q: "Wanne ne fitar da ma'ana, ba bayanin da aka rubuta a rubutun ba?", options: ["Gaskiyar da aka kwafo kalma da kalma daga rubutun", "Taken rubutun", "Adadin sakin layi", "Abin da kuka gane daga alamun da rubutun ya bayar"], answer: 3, why: "Fitar da ma'ana shi ne abin da alamu ke goyon baya, ba gaskiyar da aka faɗa kai tsaye ba." }
          ]
        },
        {
          title: "Gyara nahawu da alamomin rubutu",
          objectives: ["O3"],
          minutes: 6,
          goal: "Gyara nau'o'i biyar na kurakuran nahawu da alamomin rubutu da aka saba yi a jimloli.",
          text: [
            "Tambayoyin RLA da yawa suna nuna jimla mai jerin zaɓi (drop-down), suna tambayar wace siga ce daidai. Jarabawar da Turanci take, don haka misalan da ke ƙasa suna cikin Turanci. Wasu kurakurai suna maimaituwa. Ku koye su, za ku sami maki da yawa.",
            "1) Mai aiki (subject) da aikatau (verb) su dace: \"The list of jobs is long\" (mai aikin shi ne list, ba jobs ba). 2) Cikakkun jimloli: \"Because the bus was late.\" guntun jimla ne (fragment); gyara: \"I was late because the bus was late.\" 3) Jimloli da aka haɗa ba daidai ba (run-on): \"I applied I got the job\" tana buƙatar aya, alamar ; ko kalmar haɗawa: \"I applied, and I got the job.\"",
            "4) Kalmomin da sautinsu ɗaya ne: their (nasu), there (can, wuri), they're (they are, su ne); its (nasa, na abu), it's (it is); your (naku), you're (you are). 5) Manyan baƙaƙe da alamar ': sunayen mutane, wurare da ranaku suna farawa da babban baƙi (Monday, Texas); alamar ' tana nuna mallaka (the manager's office) ko baƙin da aka cire (don't), ba jam'i ba (two shifts, ba two shift's ba).",
            "Kalmomin haɗi (transition) suna haɗa ra'ayoyi: however (amma), therefore (saboda haka), for example (misali), in addition (ƙari da haka). Ku zaɓi wadda ta dace da ma'ana tsakanin jimloli biyu."
          ],
          steps: ["Ku karanta dukan jimlar, ba sashen da aka ja layi kawai ba.", "Ku nemo mai aiki da aikatau, ku duba ko sun dace.", "Ku duba cewa cikakkiyar jimla ce, ba jimloli biyu da aka haɗa ba daidai ba.", "Ku duba kalmomin da sautinsu ɗaya ne, manyan baƙaƙe da alamar '.", "Ku sake karanta zaɓinku a cikin jimlar don ku tabbata ya yi daidai."],
          words: [["Mai aiki (subject)", "wane ko me jimlar ke magana a kai."], ["Aikatau (verb)", "kalmar aiki ko kasancewa, kamar runs ko is."], ["Guntun jimla (fragment)", "ɓangaren jimla da ba zai iya tsayawa shi kaɗai ba."], ["Run-on", "jimloli biyu da aka haɗa ba tare da alamar rubutu daidai ba."], ["Kalmar haɗi (transition)", "kalmar da ke haɗa ra'ayoyi biyu, kamar however ko therefore."]],
          slides: [
            { title: "Kurakurai biyar da za ku kama", bullets: ["Mai aiki da aikatau da ba su dace ba", "Guntun jimla da jimloli da aka haɗa ba daidai ba", "Kalmomin da sautinsu ɗaya ne", "Manyan baƙaƙe da alamar '"] },
            { title: "Kalmomin da sautinsu ɗaya ne", bullets: ["their / there / they're", "its / it's", "your / you're"] },
            { title: "Alamar ' (apostrophe)", bullets: ["Mallaka: the manager's office", "Baƙin da aka cire: don't, it's", "Ba don jam'i kawai ba: two shifts"] },
            { title: "Kalmomin haɗi", bullets: ["however = amma (but)", "therefore = saboda haka (so)", "for example, in addition"] }
          ],
          tryIt: "Ku gyara kowace jimla. 1) \"The box of gloves are on the shelf.\" 2) \"Their going to the job fair on friday.\" 3) \"I finished my shift I went home.\" 4) \"The company changed it's hours.\" 5) \"Because I wanted to learn.\" Amsoshi: 1) \"is\" (mai aikin shi ne box). 2) \"They're going to the job fair on Friday.\" 3) \"I finished my shift, and I went home.\" 4) \"its\" (nasa, na abu). 5) Ku ƙara babban ra'ayi: \"I signed up for class because I wanted to learn.\"",
          youCanNow: "gane da gyara kurakuran nahawu da alamomin rubutu da aka fi samu a jarabawar.",
          quickCheck: [
            { objective: "O3", q: "Wace jimla ce daidai?", options: ["The team of nurses are ready.", "The team of nurses were ready.", "The team of nurses is ready.", "The team of nurses be ready."], answer: 2, why: "Mai aikin shi ne team (ƙungiya ɗaya), don haka aikatau shi ne is." },
            { objective: "O3", q: "Wace kalma ce ta dace: \"___ going to start training on Monday.\"", options: ["There", "They're", "Their", "Thier"], answer: 1, why: "They're yana nufin they are: they are going to start training." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Karantawa a tsanake da rubutu daidai",
        questions: [
          { objective: "O1", q: "Waɗanne nau'in tambayoyi ne ke cikin jarabawar harshe ta GED, a cewar ged.com?", options: ["Gaskiya ko ƙarya kawai", "Amsoshin baki kawai", "Maƙaloli kawai", "Zaɓi daga amsoshi, ja ka saki, zaɓi wuri, jeri mai buɗewa da maƙala ɗaya"], answer: 3, why: "Ged.com ta lissafa waɗannan nau'in tambayoyi da dogon amsa ɗaya." },
          { objective: "O2", q: "Wani rubutu ya ce asibiti ya ƙara lokacin aiki ranar Asabar, kuma ziyarar iyaye masu aiki ta ninka. Wace ma'ana ce rubutun ke goyon baya?", options: ["Iyaye masu aiki da yawa ba sa iya zuwa a ranakun aiki", "Asibitin zai rufe nan ba da daɗewa ba", "Asabar ranar hutu ce", "Likitoci ba sa son Asabar"], answer: 0, why: "Iyaye masu aiki da yawa sun zo lokacin da aka buɗe ranar Asabar, wanda ke nuna ranakun aiki suna musu wuya." },
          { objective: "O2", q: "Ta yaya za ku tabbatar cewa amsarku game da rubutu daidai ce?", options: ["Ku zaɓi amsar da ta fi tsawo", "Ku nuna jimlar da ke cikin rubutun da ke tabbatar da ita", "Ku zaɓi amsar da kuka fi so", "Ku zaɓi C koyaushe"], answer: 1, why: "Amsa daidai tana da goyon bayan kalmomin da ke cikin rubutun." },
          { objective: "O3", q: "Wace jimla ce daidai?", options: ["The store changed it's hours.", "The store changed its hours.", "The store changed its' hours.", "The store changed it is hours."], answer: 1, why: "Its ba tare da alamar ' ba yana nufin nasa (na abu)." },
          { objective: "O3", q: "\"I passed the test I was so happy.\" Mene ne matsalar?", options: ["Jimloli biyu ne da aka haɗa ba daidai ba (run-on); tana buƙatar aya ko kalmar haɗawa", "An yi kuskuren rubutun wata kalma", "Tana buƙatar babban baƙi a kalmar test", "Babu matsala"], answer: 0, why: "An haɗa cikakkun jimloli biyu ba tare da komai a tsakaninsu ba." }
        ]
      }
    },
    {
      name: "Babi na 2: Hujjoji da dogon amsa",
      lessons: [
        {
          title: "Iƙirari, shaida da dalilai masu ƙarfi",
          objectives: ["O4"],
          minutes: 5,
          goal: "Gano iƙirari da shaida a cikin hujja, ku auna kowace shaida a matsayin mai ƙarfi ko mai rauni.",
          text: [
            "Hujja (argument) tana ƙoƙarin gamsar da ku. Iƙirari (claim) shi ne abin da marubucin yake so ku yarda da shi. Shaida (evidence) ita ce abin da yake amfani da shi don tabbatar da shi.",
            "Shaida mai ƙarfi takamaimai ce, kuma ana iya dubawa: lambobi daga bincike ko rikodi, gaskiya, ko masani a wannan fanni. Shaida mai rauni ji ne kawai, labarin mutum ɗaya da aka ce ya shafi kowa, shahararren mutum da ba masani ba, ko iƙirari ba tare da hujja ba.",
            "Misalin da aka warware. Iƙirari: \"Garinmu ya kamata ya ƙara hanyar bas zuwa yankin masana'antu.\" Shaida A: \"Binciken gundumar da aka yi wa ma'aikata 600 ya gano 1 cikin 4 suna rasa aiki saboda rashin abin hawa.\" Mai ƙarfi: lamba ce daga bincike. Shaida B: \"Ɗan uwana ya ce bas ɗin zai yi kyau.\" Mai rauni: ra'ayin mutum ɗaya.",
            "Ku kuma lura da dabaru: kalmomi kamar \"kowa ya sani\", kai wa mutum hari maimakon ra'ayinsa, da ba da zaɓi biyu kawai lokacin da akwai fiye da haka."
          ],
          steps: ["Ku nemo iƙirarin: me marubucin yake so ku yarda da shi?", "Ku ja layi ƙarƙashin kowace shaida.", "Ku tambaya: shin takamaimai ce, kuma zan iya duba ta?", "Ku ce mai ƙarfi ce ko mai rauni, ku rubuta dalili ɗaya."],
          words: [["Hujja (argument)", "rubutun da ke ƙoƙarin gamsar da ku game da wani abu."], ["Iƙirari (claim)", "babban abin da marubuci yake so ku yarda da shi."], ["Shaida mai ƙarfi", "takamaiman gaskiya ko lambobin da za ku iya dubawa, ko masani a wannan fanni."], ["Shaida mai rauni", "ji, labari ɗaya, ko iƙirari ba tare da hujja ba."]],
          slides: [
            { title: "Sassan hujja", bullets: ["Iƙirari: abin da marubucin yake so ku yarda da shi", "Shaida: abin da yake amfani da shi don tabbatarwa"] },
            { title: "Shaida mai ƙarfi", bullets: ["Lambobi daga bincike ko rikodi", "Gaskiyar da za ku iya dubawa", "Masani a wannan fanni"] },
            { title: "Shaida mai rauni", bullets: ["Ji ko \"kowa ya sani\"", "Labarin mutum ɗaya", "Shahararren mutum da ba masani ba"] },
            { title: "Ku lura da dabaru", bullets: ["Kai wa mutum hari, ba ra'ayinsa ba", "Zaɓi biyu kawai lokacin da akwai fiye"] }
          ],
          tryIt: "Hujjar atisaye: \"Birnin ya kamata ya dasa ƙarin bishiyoyi a tsakiyar gari. Wani bincike na birnin ya auna titunan da ke da bishiyoyi kuma sun fi sanyi da kusan digiri 10 a lokacin bazara. Wani mawaƙi na gida ya ce bishiyoyi suna da kyau. Duk wanda bai yarda ba yana ƙin halitta ne kawai.\" Ku nemo iƙirarin ku auna kowane tallafi. Amsoshi: Iƙirari: a dasa ƙarin bishiyoyi a tsakiyar gari. Binciken birni: mai ƙarfi (lamba da aka auna daga bincike). Mawaƙi: mai rauni (ba masani ba ne; ra'ayi ne kawai). \"Duk wanda bai yarda ba yana ƙin halitta\": mai rauni (yana kai wa mutane hari maimakon ba da hujja).",
          youCanNow: "nemo iƙirari, raba shaida mai ƙarfi da mai rauni, da faɗin dalili.",
          quickCheck: [
            { objective: "O4", q: "Wace ce shaida mafi ƙarfi cewa shirin horon aiki yana aiki?", options: ["Daraktan ya ce yana da kyau", "Wani shahararren mutum yana son sa", "Rikodi ya nuna kashi 70% na waɗanda suka gama sun sami aiki cikin wata shida", "Kowa ya sani yana aiki"], answer: 2, why: "Takamaiman lamba ce daga rikodi da za a iya dubawa." },
            { objective: "O4", q: "\"Maƙwabcina ya yi rashin lafiya bayan ya ci abinci a can, don haka gidan abincin ba shi da aminci.\" Wane irin shaida ne wannan?", options: ["Shaidar masani", "Bincike", "Bayanan hukuma", "Mai rauni: labarin mutum ɗaya"], answer: 3, why: "Labari ɗaya ba ya tabbatar da wani abu game da kowane abinci a wurin." }
          ]
        },
        {
          title: "Kwatanta hujjoji biyu da tsara maƙalarku",
          objectives: ["O4", "O5"],
          minutes: 5,
          goal: "Kwatanta hujjoji biyu ku rubuta gajeren tsari don dogon amsa.",
          text: [
            "A jarabawa za ku karanta rubuce-rubuce biyu masu saɓanin ra'ayi. Ged.com ta ce za ku bincika su, ku yanke wace hujja ce ke da shaida mafi gamsarwa, ku bayyana dalili. Ba a tambayar ku wane gefe kuke goyon baya ba; kuna auna shaida ne.",
            "Ku yi amfani da tebur mai sauƙi. Ga kowane rubutu, ku rubuta iƙirarin, shaidar, da alama ta mai ƙarfi ko mai rauni. Rubutun da ke da shaida mai ƙarfi fiye shi ne yawanci zaɓinku, ko da kuna goyon bayan ɗayan gefen a ranku.",
            "Ku ɗauki kusan minti 10 kuna tsarawa. Tsarinku: 1) babbar magana (thesis), jimla ɗaya da ke faɗin wace hujja ce ta fi samun tallafi; 2) shaidu biyu ko uku daga wannan rubutu da dalilin da yasa suke da ƙarfi; 3) rauni ɗaya a ɗayan rubutun.",
            "Rubuce-rubucen atisaye suna Darasi na 6. Yau, ku yi atisayen tebur ɗin da kowane gajerun rubuce-rubucen ra'ayi biyu da suka saɓa, kamar wasiƙu biyu zuwa ga editan jarida."
          ],
          steps: ["Ku karanta rubuce-rubucen biyu ku nemo iƙirarin kowanne.", "Ku yi tebur mai layi biyu: shaida a kowane rubutu.", "Ku yi wa kowace shaida alamar mai ƙarfi ko mai rauni.", "Ku rubuta jimlar babbar magana ɗaya: wace hujja ce ta fi samun tallafi.", "Ku lissafa shaidar da za ku yi amfani da ita a kowane sakin layi na tsakiya."],
          words: [["Babbar magana (thesis)", "jimla ɗaya da ke faɗin babban abin da kuke son faɗa; a maƙalar GED, wace hujja ce ta fi samun tallafi."], ["Bincika (analyze)", "duba sassa a tsanake don ganin yadda suke aiki."], ["Sakin layi na tsakiya (body paragraph)", "sakin layi a tsakiya da ke ba da dalili ɗaya tare da shaida."]],
          slides: [
            { title: "Abin da maƙalar ke nema", bullets: ["Karanta rubuce-rubuce biyu masu saɓani", "Yanke wanda ke da shaida mafi gamsarwa", "Bayyana dalili; ba gefen da kuke so ba"] },
            { title: "Ku yi tebur", bullets: ["Iƙirarin kowane rubutu", "Shaidarsa", "Mai ƙarfi ko mai rauni?"] },
            { title: "Ku tsara cikin kusan minti 10", bullets: ["Babbar magana: wace hujja ce ta fi samun tallafi", "Shaidu 2 ko 3 da dalilin da yasa suke da ƙarfi", "Rauni ɗaya a ɗayan rubutun"] }
          ],
          sources: [GED_RLA],
          tryIt: "Atisaye: Rubutu na 1 ya ce makon aiki na kwana huɗu yana da kyau, kuma ya kawo rikodin wani kamfani: kwanakin rashin lafiya sun ragu daga 6 zuwa 4 ga kowane ma'aikaci a shekara. Rubutu na 2 ya ce ba shi da kyau domin \"ma'aikata za su zama ragwaye\", kuma wani manaja \"yana jin\" aiki zai ragu. Ku rubuta babbar magana. Amsa: \"Rubutu na 1 ya fi samun tallafi domin yana amfani da rikodin kamfani kan kwanakin rashin lafiya, yayin da Rubutu na 2 ya dogara da ji ba tare da bayanai ba.\"",
          youCanNow: "kwatanta hujjoji biyu da tebur, da rubuta babbar magana da tsarin maƙalarku.",
          quickCheck: [
            { objective: "O5", q: "Me dogon amsa na GED ke neman ku yi?", options: ["Rubuta labarin rayuwarku", "Yanke wace hujja ce ke da shaida mafi gamsarwa ku bayyana dalili", "Taƙaita littafin labari", "Rubuta waƙa"], answer: 1, why: "Ged.com ta ce za ku bincika rubuce-rubuce biyu ku bayyana wace hujja ce ke da shaida mafi kyau." },
            { objective: "O4", q: "Kuna goyon bayan Rubutu B, amma Rubutu A yana da shaida mai ƙarfi fiye. Wanne ne babbar maganarku za ta zaɓa?", options: ["Rubutu A, domin ya fi samun tallafi", "Rubutu B, domin kuna goyon bayansa", "Babu ɗaya", "Duka biyun daidai"], answer: 0, why: "Maƙalar tana auna shaida ne, ba ra'ayinku kan batun ba." }
          ]
        },
        {
          title: "Rubuta dogon amsa cikin minti 45",
          objectives: ["O5"],
          minutes: 6,
          goal: "Rubuta dogon amsa a ƙayyadadden lokaci da ke zaɓar hujjar da ta fi samun tallafi, kuma ya bayyana dalili da shaida.",
          text: [
            "Ku yi amfani da tsari mai sauƙi. Gabatarwa (jimloli 2 zuwa 3): ku ambaci batun, ku ba da babbar maganarku. Sakin layi na tsakiya (biyu ko uku): kowanne yana ba da dalili ɗaya, yana kawo ko bayyana shaida daga rubutun, kuma yana bayyana dalilin da yasa take da ƙarfi ko rauni. Kammalawa (jimloli 2): ku sake faɗin babbar maganarku da sababbin kalmomi.",
            "Rubuce-rubucen atisaye (an ƙirƙire su don wannan kwas). Rubutu A, daga ma'aikacin ɗakin karatu na birni: \"Ku bar babban ɗakin karatu a buɗe har ƙarfe 9 na dare. A gwajin wata uku, na'urar ƙirga masu shiga ta rubuta kusan ziyara 340 bayan ƙarfe 6 na yamma a kowane mako. Rikodin kwamfutocinmu ya nuna 6 cikin 10 na zaman neman aiki sun faru bayan ƙarfe 6 na yamma. Ƙarin sa'o'in ba su kai 1% na kasafin kuɗinmu ba.\" Rubutu B, daga ɗan majalisar birni: \"Ku rufe ƙarfe 6 na yamma. Na wuce wata maraice kuma ya yi kamar babu kowa. Mutane za su iya amfani da wayoyinsu kawai. Ɓata kuɗi ne.\"",
            "Tsarin lokaci: kusan minti 10 don karantawa da tsarawa, minti 30 don rubutu, minti 5 don sake karantawa. Ku yi amfani da kalmomin haɗi (first, in addition, however, therefore). Ku rubuta cikakkun jimloli da kalmominku, ku kuma kawo gajerun guntuwa daga rubuce-rubucen a matsayin shaida.",
            "Ku sake karantawa don neman kurakuran Darasi na 3: mai aiki da aikatau, jimloli da aka haɗa ba daidai ba, kalmomin da sautinsu ɗaya ne, manyan baƙaƙe da alamar '."
          ],
          steps: ["Ku saita agogon minti 45.", "Ku karanta rubuce-rubucen biyu ku cike teburinku na mai ƙarfi ko mai rauni (kusan minti 10).", "Ku rubuta gabatarwa da babbar maganarku.", "Ku rubuta sakin layi na tsakiya biyu ko uku, kowanne da shaida da dalilin da yasa take da ƙarfi ko rauni.", "Ku rubuta gajeriyar kammalawa.", "Ku sake karantawa a minti 5 na ƙarshe."],
          words: [["Gabatarwa (introduction)", "sakin layi na farko; yana ambaton batun kuma yana ba da babbar maganarku."], ["Kammalawa (conclusion)", "sakin layi na ƙarshe; yana sake faɗin babban abin da kuka faɗa."], ["Kawo zance (quote)", "kwafo 'yan ainihin kalmomi daga rubutun, a cikin alamun zance."], ["Sake karantawa (proofread)", "karanta rubutunku kuma don nemo da gyara kurakurai."]],
          slides: [
            { title: "Tsarin maƙala", bullets: ["Gabatarwa da babbar maganarku", "Sakin layi na tsakiya biyu ko uku masu shaida", "Gajeriyar kammalawa"] },
            { title: "Kowane sakin layi na tsakiya", bullets: ["Dalili ɗaya", "Shaida daga rubutun", "Dalilin da yasa take da ƙarfi, ko yasa ɗayan gefen yake da rauni"] },
            { title: "Tsarin lokaci na minti 45", bullets: ["Kusan minti 10: karantawa da tsarawa", "Kusan minti 30: rubutu", "Kusan minti 5: sake karantawa"] }
          ],
          tryIt: "Aikin ƙarshe: ku saita agogon minti 45 ku rubuta dogon amsarku kan rubuce-rubucen ɗakin karatu da ke sama. Sannan ku sake karantawa ku ba shi maki da ma'aunin rubric. Misalin babbar magana: \"Rubutu A ya fi samun tallafi domin yana amfani da ƙididdigar ziyara da rikodin kwamfutoci na ɗakin karatun da kansa, yayin da Rubutu B ya dogara da kallon maraice ɗaya da ra'ayoyi.\" Shaida mai ƙarfi da za ku yi amfani da ita: kusan ziyara 340 bayan ƙarfe 6 na yamma a kowane mako; 6 cikin 10 na zaman neman aiki bayan ƙarfe 6 na yamma; kuɗin da bai kai 1% na kasafi ba. Rauni a B: ziyara ɗaya, babu lambobi.",
          youCanNow: "rubuta cikakken dogon amsa a ƙayyadadden lokaci da ke auna hujjoji biyu da shaidarsu.",
          quickCheck: [
            { objective: "O5", q: "Me ya kamata ya kasance a gabatarwarku?", options: ["Jerin dokokin nahawu", "Dukan shaidu", "Batun da babbar maganarku", "Sunanku da adireshinku"], answer: 2, why: "Gabatarwa tana ambaton batun kuma tana faɗin wace hujja ce ta fi samun tallafi." },
            { objective: "O5", q: "A rubuce-rubucen ɗakin karatu, wace ce shaida mafi ƙarfi?", options: ["\"Ya yi kamar babu kowa\" wata maraice", "\"Mutane za su iya amfani da wayoyinsu kawai\"", "\"Ɓata kuɗi ne\"", "Na'urar ƙirga masu shiga ta rubuta kusan ziyara 340 bayan ƙarfe 6 na yamma a kowane mako"], answer: 3, why: "Takamaiman lamba ce daga rikodi da za a iya dubawa." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Hujjoji da dogon amsa",
        questions: [
          { objective: "O4", q: "Mene ne iƙirari a cikin hujja?", options: ["Babban abin da marubucin yake so ku yarda da shi", "Taken rubutu", "Jimla mafi tsawo", "Kuskuren nahawu"], answer: 0, why: "Iƙirari shi ne abin da marubucin yake ƙoƙarin gamsar da ku a kai." },
          { objective: "O4", q: "\"Mutanen da ke son ɗakin karatu ya daɗe a buɗe ragwaye ne kawai.\" Me ke damun wannan tallafi?", options: ["Yana amfani da lambobi da yawa", "Yana kawo maganar masani", "Yana kai wa mutane hari maimakon ba da hujja", "Babu komai; shaida ce mai ƙarfi"], answer: 2, why: "Kai wa masu saɓani hari ba shaida ba ce game da ra'ayin." },
          { objective: "O5", q: "Kusan minti nawa ya kamata ku ɗauka kuna karantawa da tsarawa a maƙalar minti 45?", options: ["Minti 0", "Kusan minti 40", "Kusan minti 2", "Kusan minti 10"], answer: 3, why: "Kusan minti 10 na tsarawa yana barin kusan 30 don rubutu da 5 don sake karantawa." },
          { objective: "O5", q: "Me sakin layi na tsakiya mai ƙarfi ke ƙunsa?", options: ["Dalili ɗaya, shaida daga rubutun da dalilin da yasa take da ƙarfi", "Ra'ayinku kawai", "Sabon batu", "Jerin kalmomi ba tare da jimloli ba"], answer: 0, why: "Kowane sakin layi na tsakiya yana haɗa dalili ɗaya da shaida kuma yana bayyana ta." },
          { objective: "O1", q: "A ina ya kamata ku duba dokokin GED na yanzu, lokaci da kuɗi?", options: ["Tunanin aboki", "Rubutu a kafofin sada zumunta", "Ged.com da ofishin ilimin manya na jiharku", "Tsohon littafin karatu"], answer: 2, why: "Dokoki da kuɗi suna canjawa; shafin hukuma da jiharku suna da na yanzu." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Shirin Jarabawar GED: Reasoning Through Language Arts (Tunani da Harshe)",
    questions: [
      { objective: "O1", q: "Wace jarabawa ce wannan kwas ke shirya ku?", options: ["Jarabawar GED ta Reasoning Through Language Arts", "Jarabawar lasisin tuƙi", "Jarabawar rubutu a kwamfuta", "Hirar zama ɗan ƙasa"], answer: 0, why: "Kwas ɗin yana shirya ku don jarabawar GED RLA; ba ya ba da shaidar." },
      { objective: "O1", q: "Wace ce wata jarabawa daidai da sakandare da wasu jihohi ke amfani da ita?", options: ["SAT", "HiSET", "CDL", "ESL"], answer: 1, why: "HiSET wata jarabawa ce daidai da sakandare da ake amfani da ita a wasu jihohi." },
      { objective: "O1", q: "Mene ne mataki na farko mafi kyau don tsarin karatu?", options: ["Yin rajistar jarabawa gobe", "Tsallake sassa masu wuya", "Zama jarabawar gwaji kyauta don ganin matsayinku", "Karatu daren da ya gabaci jarabawa kawai"], answer: 2, why: "Jarabawar gwaji tana nuna ƙwarewar da ta fi buƙatar atisaye." },
      { objective: "O1", q: "A cewar ged.com, tsawon lokacin sashen maƙala na jarabawar RLA nawa ne?", options: ["Minti 10", "Sa'o'i 2", "Babu maƙala", "Minti 45"], answer: 3, why: "Ged.com ta rubuta minti 45 don dogon amsa." },
      { objective: "O2", q: "Babban ra'ayin rubutu shi ne:", options: ["Kalmar farko", "Abin da rubutun yake magana a kai galibi", "Kalma mafi wuya", "Jimlar ƙarshe kawai"], answer: 1, why: "Babban ra'ayi shi ne rubutun da aka faɗa a jimla ɗaya." },
      { objective: "O2", q: "Wani rubutu ya ce masana'anta ta ƙara horon kiyaye lafiya kuma raunuka sun ragu da rabi. Wane bayani ne ke goyon bayan \"horon ya sa masana'antar ta fi aminci\"?", options: ["Raunuka sun ragu da rabi", "Masana'antar babba ce", "Horon a ranakun Litinin ne", "Masana'antar tana yin kujeru"], answer: 0, why: "Raguwar raunuka ita ce shaidar cewa aminci ya inganta." },
      { objective: "O2", q: "Wace ma'ana ce aka fitar da goyon baya daga: \"Layukan bankin abinci sun ninka bayan masana'antar ta rufe\"?", options: ["Bankin abinci yana rufewa", "Farashin abinci ya faɗi", "Mutane da yawa da suka rasa aiki sun buƙaci taimakon abinci", "Masana'antar ta sake buɗewa"], answer: 2, why: "Lokacin rufewar da tsawon layukan suna goyon bayan wannan ra'ayin." },
      { objective: "O3", q: "Wace jimla ce daidai?", options: ["The list of tasks are on the board.", "The list of tasks is on the board.", "The list of tasks were on the board.", "The list of tasks be on the board."], answer: 1, why: "Mai aikin shi ne list (jeri ɗaya), don haka aikatau shi ne is." },
      { objective: "O3", q: "Wace jimla ce ta yi amfani da manyan baƙaƙe daidai?", options: ["I start work on monday in ohio.", "I Start Work on Monday in Ohio.", "i start work on Monday in ohio.", "I start work on Monday in Ohio."], answer: 3, why: "Ranaku da wurare suna da manyan baƙaƙe; sauran kalmomi ba su da." },
      { objective: "O3", q: "Wanne ne guntun jimla (fragment)?", options: ["I got the job.", "Because the shift ended late.", "She called the manager.", "We passed."], answer: 1, why: "Ba za ta iya tsayawa ita kaɗai ba; tana buƙatar babban ra'ayi, kamar \"I was tired because the shift ended late.\"" },
      { objective: "O3", q: "Ku zaɓi kalmar da ta dace: \"___ a good day to apply.\"", options: ["Its", "Its'", "It's", "It"], answer: 2, why: "It's yana nufin it is: it is a good day to apply." },
      { objective: "O4", q: "Wace ce shaida mai ƙarfi?", options: ["Rahoton jiha da ke nuna sababbin ayyukan jinya 2,000 a bara", "\"Na dai sani kawai\"", "Ra'ayin tauraron fim game da aikin jinya", "\"Kowa ya faɗa haka\""], answer: 0, why: "Takamaiman lambobi daga rahoton hukuma ana iya duba su." },
      { objective: "O4", q: "\"Ko dai mu soke dukan hanyoyin bas ko birnin ya karye.\" Mene ne dabarar?", options: ["Tana amfani da bincike", "Tana kawo maganar masani", "Gaskiya ce", "Tana ba da zaɓi biyu kawai lokacin da akwai fiye"], answer: 3, why: "Akwai wasu hanyoyi, kamar soke wasu hanyoyi kawai ko neman sabon kuɗi." },
      { objective: "O4", q: "Me yasa labarin mutum ɗaya shaida ce mai rauni ga babban iƙirari?", options: ["Labarai koyaushe ƙarya ne", "Abin da ya faru ga mutum ɗaya ba lallai ya zama gaskiya ga yawancin mutane ba", "Labarai sun yi tsawo sosai", "Ya saɓa wa doka"], answer: 1, why: "Misali ɗaya ba ya nuna abin da yake gaskiya gaba ɗaya." },
      { objective: "O4", q: "Don auna hujja, da farko kuna nemo:", options: ["Kalma mafi tsawo", "Shekarun marubucin", "Iƙirarin da shaidarsa", "Kurakuran nahawu"], answer: 2, why: "Kuna auna hujja ta yadda shaidarta ke goyon bayan iƙirarinta." },
      { objective: "O5", q: "A maƙalar GED, babbar maganarku ya kamata ta faɗi:", options: ["Wace hujja ce ta fi samun tallafi", "Launin da kuka fi so", "Marubucin da kuke so", "Cewa duka biyun cikakku ne"], answer: 0, why: "Aikin shi ne yanke wace hujja ce ke da shaida mafi gamsarwa." },
      { objective: "O5", q: "Wace hanya ce mai kyau ta amfani da shaida a maƙalarku?", options: ["Kwafo dukan rubuce-rubuce", "Ƙirƙirar lambobi", "Barin shaida", "Kawo gajeren guntu ku bayyana dalilin da yasa yake da ƙarfi"], answer: 3, why: "Gajerun guntuwa tare da bayaninku suna nuna kun bincika shaidar." },
      { objective: "O5", q: "Me za ku yi a 'yan mintunan ƙarshe na maƙalar?", options: ["Fara sabuwar maƙala", "Sake karantawa don gyara nahawu da alamomin rubutu", "Goge babbar maganarku", "Fita daga ɗakin"], answer: 1, why: "Sake karantawa yana kama kurakuran da ke rage maki." },
      { objective: "O5", q: "Wace kammalawa ce ta fi kyau?", options: ["\"Ƙarshe.\"", "\"Ina son ɗakunan karatu.\"", "\"Saboda Rubutu A yana amfani da rikodi da ƙididdiga, Rubutu B kuma ra'ayoyi kawai, Rubutu A ya fi samun tallafi.\"", "\"Wasu sun yarda wasu kuma ba su yarda ba.\""], answer: 2, why: "Tana sake faɗin babbar magana da babban dalili da sababbin kalmomi." },
      { objective: "O2", q: "Idan ba ku da tabbacin amsa game da rubutu, ya kamata ku:", options: ["Koma baya ku nemo jimlar da ke tabbatar da amsa", "Zaɓi zaɓi mafi gajarta", "Tsallake karatu ku yi hasashe", "Zaɓi amsar da ke da kalmomi mafi wuya"], answer: 0, why: "Amsa daidai tana da goyon bayan rubutun, don haka ku koma ku nemo hujjar." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [2, 3, 4, 6, 7, 10, 11, 13, 15, 16] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku yi atisayen wannan sashe ku rubuta sabuwar maƙala kan sababbin rubuce-rubuce biyu.",
    criteria: [
      { name: "Babbar magana a sarari", objective: "O5", notYet: "Babu babbar magana, ko tana faɗin gefen da marubucin ke goyon baya maimakon wanda ya fi samun tallafi.", meets: "Gabatarwa tana da jimla ɗaya da ke faɗin wace hujja ce ta fi samun tallafi.", exceeds: "Babbar maganar tana kuma ambaton babban dalili, kamar rikodi da ra'ayoyi." },
      { name: "Shaida daga rubuce-rubucen", objective: "O4", notYet: "Babu shaida daga rubuce-rubucen, ko an ƙirƙiri shaida.", meets: "Aƙalla shaidu biyu daga rubuce-rubucen, kowace an bayyana ta mai ƙarfi ce ko mai rauni.", exceeds: "Tana kuma nuna dabara ko rauni a ɗayan rubutun kuma ta bayyana shi." },
      { name: "Tsari", objective: "O5", notYet: "Rubutu ɗaya dunƙule, ko ra'ayoyi suna tsalle-tsalle.", meets: "Gabatarwa, aƙalla sakin layi na tsakiya biyu da kammalawa, tare da kalmomin haɗi.", exceeds: "Kowane sakin layi na tsakiya yana farawa da jimlar batu a sarari da ke komawa ga babbar magana." },
      { name: "Nahawu da alamomin rubutu", objective: "O3", notYet: "Kurakurai da yawa suna sa karantawa ta yi wuya.", meets: "'Yan ƙananan kurakurai, amma ma'ana koyaushe a sarari take.", exceeds: "Kusan babu kurakurai; kalmomin da sautinsu ɗaya ne, manyan baƙaƙe da alamar ' duk daidai suke." },
      { name: "Karantawa daidai", objective: "O2", notYet: "Ya sami babban ra'ayin wani rubutu ba daidai ba.", meets: "Ya bayyana babban ra'ayin kowane rubutu daidai.", exceeds: "Yana kawo gajerun ainihin zance da suka dace da abin da rubuce-rubucen suka faɗa." },
      { name: "Tsari da lokaci", objective: "O1", notYet: "Bai gama cikin minti 45 ba kuma ba shi da tsarin karatu.", meets: "Ya gama cikin minti 45, kuma tsarin karatun yana da ranaku har zuwa makon jarabawa.", exceeds: "Ya kuma yi rajistar jarabawar gwaji ta GED Ready ko ranar jarabawa ta gaske a ged.com." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka sami \"Ya cika\" ko fiye a kowane layi na rubric",
      "Masu koyo da suka zauna GED Ready ko jarabawar gwaji kyauta ta ged.com cikin kwanaki 30",
      "Masu koyo da suka yi rajista ko suka ci jarabawar harshe ta GED cikin kwanaki 90 (bisa faɗinsu)",
      "Shirye-shiryen abokan aiki sun ce masu koyo da yawa suna ci gaba zuwa horon aiki ko azuzuwan kwaleji"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya, tablet ko kwamfuta mai intanet, ko darussan da aka buga a takarda",
      "Takarda da alƙalami don tebura, amsoshin atisaye da maƙaloli",
      "Agogo (agogon waya ma yana aiki) don maƙalar minti 45",
      "Jarabawar gwaji kyauta ta ged.com; GED Ready idan mai koyo ya zaɓi ya saye ta",
      "Kusan minti 90 gaba ɗaya don darussa da gwaje-gwaje, da minti 45 don maƙalar ƙarshe"
    ],
    facilitatorNotes: [
      "Ku fara da gwajin farko da jarabawar gwaji ta RLA kyauta ta ged.com, sannan ku raba masu koyo rukuni-rukuni bisa ƙwarewar da suka fi buƙata.",
      "Ku nuna yadda ake yin teburin mai ƙarfi ko mai rauni da babbar murya sau ɗaya kafin masu koyo su gwada nasu.",
      "Ku sa masu koyo su karanta maƙalolinsu da babbar murya bibbiyu, su ba da shawara kan layi ɗaya na rubric a lokaci ɗaya.",
      "Ku duba wace jarabawa jiharku ke amfani da ita (GED ko HiSET), ku raba wuraren jarabawa na gida da duk wani taimakon kuɗi.",
      "Ku sa atisaye ya kasance ba tare da matsi ba; manyan masu koyo da yawa suna ɗauke da tsoron jarabawa tun daga makaranta."
    ]
  }
};
