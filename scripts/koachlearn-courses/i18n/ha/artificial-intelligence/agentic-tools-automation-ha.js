"use strict";

// Koach Learn course, Hausa (ha) translation of artificial-intelligence/agentic-tools-automation.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "agentic-tools-automation-ha",
  lang: "ha",
  translationOf: "agentic-tools-automation",
  category: "Artificial Intelligence",
  name: "Amfani da Kayan Aiki da Aiki da Kai a Wakilin AI",
  skills: "Bayyana kayan aiki da schema, Tantance bayanan da aka tura wa kayan aiki, Sa kayan rubutu a bayan amincewa, Gwajin bushe (dry run) da sake gudu lafiya, Haɗa kayan aiki da MCP, Gudanar da wakili bisa jadawali",
  outcome: "ba wakili (agent) kayan aiki na gaske lafiya: bayyana kowane kayan aiki da schema, duba kowane argument, ajiye ayyukan rubutu a bayan gwajin bushe (dry run) da \"eh\" daga mutum, da gudanar da wakilin a matsayin aiki da kai da ake iya maimaitawa, wanda ke karanta fayil ya rubuta rahoto.",
  about: [
    "Wannan shi ne kwas na 4 na shirin Design, Build, and Deploy Autonomous AI Agents (Tsara, Gina da Ƙaddamar da Wakilan AI masu Aiki da Kansu). Wakilinku na kwas na 3 yana da kayan aiki biyu masu aminci. Wakilai na gaske suna karanta fayiloli, suna kiran hidimomin intanet, kuma suna rubuta sakamako, kuma a nan ne yawancin hatsarin wakilai ke faruwa. Wannan kwas yana koya muku ƙara kayan aiki na gaske ba tare da rasa iko ba.",
    "Babi na 1 game da kayan aiki ne: bayyana su da schema da model zai fahimta, duba kowane argument da lambarku (code) ta karɓa, da sa duk wani aiki da ke canja wani abu a bayan gwajin bushe da amincewar mutum. Babi na 2 game da aiki da kai (automation) ne: abubuwan farawa (triggers) da jadawali, sake gudu lafiya, Model Context Protocol (MCP) don haɗa kayan aiki, da mayar da wakilinku aikin da ke gudana da kansa.",
    "Za ku yi aiki da Python a Google Colab ko a kwamfutarku. Ana nuna lamba (code) a gajerun layuka a cikin darussa. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas."
  ],
  finalTask: "Ku gina wakilin \"rahoton mako\". Yana karanta fayil ɗin CSV na tallace-tallace ko kashe-kashen kuɗi na ƙirƙira da kayan karatu, yana amfani da kayan lissafi (calculator) don samun jimilla, kuma yana rubuta daftarin gajeren taƙaitawa. Kayan rubutunsa ɗaya tilo, save_report(filename, text), dole ya duba argument ɗinsa (fayilolin .txt ko .md kaɗai, a cikin babban fayil na reports kaɗai), ya gudana a yanayin gwajin bushe (dry run) a farko, kuma ya tambaya \"Save report? yes/no\" kafin ya rubuta. Gudanar da shi sau biyu don mako ɗaya kada ya ƙirƙiri rahotanni biyu iri ɗaya. Ku nuna rajistar (log) cikakken gudu ɗaya.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya a shirin Design, Build, and Deploy Autonomous AI Agents da suka gama kwasa-kwasai na 1 zuwa 3: masu ƙananan kasuwanci, masu sauya sana'a, ɗalibai da ma'aikata da ke son wakilan da ke yin aiki na gaske bisa jadawali.",
    startingPoint: "Sun gina madauki (loop) na wakili mai kayan aiki biyu a Python, mai iyakar matakai, sarrafa kurakurai da rajistar gudu. Ba su taɓa ba wakili kayan aikin da ke karanta fayiloli ko canja wani abu ba, kuma ba su taɓa gudanar da wakili a matsayin aiki da kai ba.",
    gap: "Yawancin hatsarin wakilai suna faruwa idan wakilai suka sami kayan aiki na gaske da ke karantawa da rubutawa. Masu koyo suna buƙatar bayyana kayan aiki a sarari, duba kowane argument, ajiye ayyukan rubutu a bayan gwajin bushe da \"eh\" daga mutum, da sa aiki da kai ya zama lafiya idan aka sake gudanar da shi, don wakilansu su taimaka ba tare da yin ɓarna ba.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi; ana nuna lamba a gajerun layuka don kwafa",
      "Na'urori: kwamfuta mai burauzar intanet; Colab don gini ne, ba don gudanar da jadawali ba",
      "Atisaye yana amfani da bayanan CSV na ƙirƙira kaɗai, ba bayanan abokan ciniki ko na kuɗi na gaske ba",
      "Ayyukan rubutu suna zama a yanayin gwajin bushe har sai mutum ya amince",
      "Sabobin MCP amintattu kaɗai, da mafi ƙarancin damar shiga da ake buƙata"
    ],
    prerequisites: "Kwas na 3 na Design, Build, and Deploy Autonomous AI Agents (\"Gina AI Agents (Wakilan AI)\")."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Ga kowane kayan aiki da wakilinku ke amfani da shi", action: "rubuta schema na kayan aiki mai suna a sarari, manufa, da abubuwan shigarwa masu nau'i (type)", standard: "ta yadda model zai iya zaɓar kayan aiki da argument daidai" },
    { id: "O2", condition: "Idan an ba ku argument da model ya tura", action: "duba kowane argument da jerin abubuwan da aka yarda da su (allow list) kafin kayan aikin ya yi amfani da shi", standard: "kuna ƙin nau'ukan fayil marasa kyau, dabarun hanyar fayil (path) da nau'ukan da ba daidai ba, da saƙon kuskure a sarari" },
    { id: "O3", condition: "Ga duk wani kayan aiki da ke canja wani abu", action: "sa aikin a bayan gwajin bushe da amincewar eh/a'a da ke nuna ainihin bayanai", standard: "ta yadda ba za a rubuta komai ba har sai mutum ya ce eh" },
    { id: "O4", condition: "Idan an ba ku aikin da ke gudana akai-akai", action: "zaɓar abin farawa (trigger) da sa aiki da kai ya zama lafiya idan aka sake gudanar da shi", standard: "ta yadda gudu na biyu don lokaci ɗaya ba zai ƙirƙiri kwafi ba" },
    { id: "O5", condition: "Idan kuna da kayan aiki da kuke son raba wa manhajojin AI", action: "bayyana abin da sabar MCP ke yi da yanke shawarar lokacin amfani da ita", standard: "kuna ambaton dokokin amincewa da dubawa da za ku ci gaba da su" },
    { id: "O6", condition: "Idan an ba ku kayan karatu, lissafi da ajiyewa", action: "gina da gwada aiki da kai na rahoton mako daga farko zuwa ƙarshe", standard: "da cikakkiyar rajistar gudu, kuma ana ba da rahoton bayanai marasa kyau, ba a yi watsi da su ba" }
  ],
  chapters: [
    {
      name: "Babi na 1: Ba wakili kayan aiki na gaske",
      lessons: [
        {
          objectives: ["O1"],
          title: "Bayyana kayan aiki da schema",
          minutes: 5,
          goal: "Rubuta bayanin kayan aiki mai suna, manufa da abubuwan shigarwa masu nau'i.",
          text: [
            "Model yana zaɓar kayan aiki daga bayaninsu. Schema na kayan aiki bayani ne daidai: suna, jimla ɗaya ko biyu kan abin da yake yi da lokacin amfani da shi, da kowane abin shigarwa tare da nau'insa da ma'anarsa. Yawancin kamfanoni suna rubuta abubuwan shigarwa a JSON Schema, wata hanya ta yau da kullum ta bayyana bayanai.",
            "Misali: suna read_csv; bayani \"Read a CSV file from the data folder and return its first 50 rows as text. Use when you need the numbers in a file.\" (Karanta fayil ɗin CSV daga babban fayil na data, ka mayar da layukansa 50 na farko a rubutu. Ka yi amfani da shi idan kana buƙatar lambobin da ke cikin fayil.); abubuwan shigarwa: filename (string, wajibi, sunan fayil a babban fayil na data kamar sales-week-42.csv).",
            "Schema masu kyau ƙanana ne kuma takamaimai. Kayan aiki ɗaya, aiki ɗaya. Ku faɗi abin da kayan aikin ke mayarwa da lokacin da bai kamata a yi amfani da shi ba. Ku yi amfani da sunayen da ke kama da ayyuka: read_csv, save_report, ba tool1 ba."
          ],
          steps: ["Ku sa wa kayan aikin suna da kalmar aiki.", "Ku bayyana abin da yake yi, lokacin amfani da shi, da abin da yake mayarwa.", "Ku jera kowane abin shigarwa da nau'insa da ko wajibi ne.", "Ku bar shi da aiki ɗaya.", "Gwaji: ku ba model manufa ku ga ko zai zaɓi kayan aikin daidai."],
          words: [["Schema na kayan aiki (tool schema)", "bayani daidai na kayan aiki: sunansa, manufarsa da abubuwan shigarwarsa."], ["JSON Schema", "hanyar yau da kullum ta bayyana siffar bayanai, kamar waɗanne wurare rubutu ne ko lambobi."], ["Argument", "ƙimar da ake tura wa kayan aiki ko aiki (function)."]],
          slides: [
            { title: "Model yana zaɓa daga bayani", bullets: ["Suna, manufa, abubuwan shigarwa", "Ana yawan rubuta abubuwan shigarwa a JSON Schema"] },
            { title: "Misali: read_csv", bullets: ["Yana karanta CSV daga babban fayil na data", "Yana mayar da layuka 50 na farko a rubutu", "Abin shigarwa: filename (string, wajibi)"] },
            { title: "Schema masu kyau", bullets: ["Kayan aiki ɗaya, aiki ɗaya", "Sunayen aiki: read_csv, save_report", "Ku faɗi abin da yake mayarwa da lokacin da bai kamata a yi amfani da shi ba"] }
          ],
          tryIt: "Ku rubuta schema na kayan aiki uku: read_csv, calculator da save_report. Ku ba chatbot kyauta schema ukun da manufar \"Total last week's sales and save a report\" (Ka haɗa jimillar tallace-tallacen makon jiya ka ajiye rahoto), ku tambaye shi wane kayan aiki zai fara kira da waɗanne argument.",
          youCanNow: "bayyana kayan aiki ta yadda model zai iya zaɓarsa ya cike abubuwan shigarwarsa daidai.",
          quickCheck: [
            { objective: "O1", q: "Me abubuwan shigarwa masu nau'i a schema ke faɗa wa model?", options: ["Saurin gudun kayan aikin", "Wanda ya rubuta kayan aikin", "Irin ƙimar da kowane abin shigarwa dole ya zama, kamar rubutu ko lamba", "Wane model za a yi amfani da shi"], answer: 2, why: "Nau'ukan suna bayyana siffar kowane abin shigarwa don model ya tura argument daidai." },
            { objective: "O1", q: "Kuna son kayan aiki ɗaya da ke karanta fayiloli, aika imel, da goge tsofaffin rahotanni. Me za ku yi a maimakon haka?", options: ["Ku raba shi zuwa kayan aiki daban-daban, kowanne da aiki ɗaya a sarari", "Ku bar shi, domin kayan aiki ɗaya ya fi sauƙi", "Ku ba shi bayani mai tsawo", "Ku ɓoye sashen gogewa daga schema"], answer: 0, why: "Kayan aiki mai kyau yana yin aiki ɗaya a sarari, wanda ke sauƙaƙa bayyana shi, duba shi da amincewa da shi." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kada ku amince da argument: tantance abin shigarwa",
          minutes: 6,
          goal: "Duba kowane argument da model ya tura kafin kayan aiki ya yi amfani da shi.",
          text: [
            "Model ne ke rubuta argument na kayan aikinku, kuma model yana iya yin kuskure ko a yaudare shi da prompt injection (saka umarnin ɓoye). Don haka kayan aikin, ba model ba, dole ya tilasta dokokin. Ku ɗauki argument kamar abin shigarwa daga baƙo a intanet.",
            "Ku duba nau'i da siffa: shin filename string ne? Ku duba ƙimomin da aka yarda: sunayen da ke ƙarewa da .csv kaɗai, a cikin babban fayil na data kaɗai. Ku hana dabarun hanya: suna kamar ../../secrets.txt yana ƙoƙarin hawa ya fita daga babban fayil. A Python: from pathlib import Path, sannan p = (DATA_DIR / filename).resolve() kuma ku ƙi idan DATA_DIR.resolve() ba ya cikin p.parents.",
            "Idan dubawa ta kasa, ku mayar da saƙo a sarari, ba faɗuwar shirin ba: \"read_csv error: only .csv files in the data folder are allowed\". Kada ku taɓa gudanar da rubutun da model ya rubuta a matsayin lamba (code) ko umarnin shell; haka ne ƙaramin kuskure ke zama babba."
          ],
          steps: ["Ku duba nau'in kowane argument.", "Ku duba ƙimomin da aka yarda: nau'ukan fayil, manyan fayiloli, iyakar lambobi.", "Ku warware hanyoyin fayil ku ƙi duk abin da ke wajen babban fayil da aka yarda.", "Ku mayar da saƙon kuskure a sarari idan an kasa.", "Kada ku taɓa gudanar da rubutun model a matsayin lamba ko umarnin shell."],
          words: [["Tantancewa (validation)", "duba cewa abin shigarwa nau'in da ya dace ne kuma yana cikin ƙimomin da aka yarda kafin a yi amfani da shi."], ["Path traversal (hawan hanya)", "dabarar amfani da ../ a sunan fayil don isa ga fayilolin da ke wajen babban fayil da aka yarda."], ["Allow list (jerin da aka yarda)", "jerin ƙimomin da su kaɗai aka yarda da su."]],
          slides: [
            { title: "Kayan aikin ne ke tilasta dokokin", bullets: ["Model yana iya yin kuskure ko a yaudare shi", "Ku ɗauki argument kamar abin shigarwa daga baƙo"] },
            { title: "Ku duba kowane argument", bullets: ["Nau'i: string ne ko lamba?", "Ƙimomin da aka yarda: .csv kaɗai, babban fayil na data kaɗai", "Ku hana dabarun hanya na ../"] },
            { title: "Idan an kasa", bullets: ["Ku mayar da saƙon kuskure a sarari", "Kada shirin ya faɗi, kada ya yi tsammani", "Kada ku taɓa gudanar da rubutun model a matsayin lamba ko umarni"] }
          ],
          tryIt: "Ku rubuta read_csv mai tantancewa. Ku gwada shi da kanku da: 'sales.csv', 'notes.exe', '../secret.txt' da 42. Na farko kaɗai ya kamata ya karanta fayil; sauran su mayar da kurakurai a sarari.",
          youCanNow: "rubuta kayan aikin da ke duba kowane argument kafin su yi aiki.",
          quickCheck: [
            { objective: "O2", q: "Me yasa dole lambar kayan aikin da kanta ta duba argument ɗinsa?", options: ["Schema ya riga ya hana kowace ƙima marar kyau", "Model yana iya tura abin da ba shi da aminci ko ba daidai ba", "Yana sa model ya fi wayo", "Ana buƙatarsa ne don kayan rubutu kaɗai"], answer: 1, why: "Lambar kayan aikin ce kaɗai za ta iya tilasta dokokinsa; model yana iya yin kuskure ko a yaudare shi." },
            { objective: "O2", q: "read_csv ya karɓi lamba 42 a matsayin sunan fayil. Me ya kamata ya faru?", options: ["Karanta fayil mai suna 42.csv", "Mayar da shi rubutu a ci gaba", "Neman model ya yi tsammanin fayil ɗin da ya dace", "Mayar da kuskure a sarari cewa sunan fayil dole ya zama rubutu da ke ƙarewa da .csv"], answer: 3, why: "Ana ƙin nau'in da ba daidai ba da kuskure a sarari da model zai iya yin aiki da shi." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kayan rubutu: gwajin bushe da amincewar mutum",
          minutes: 6,
          goal: "Sa aikin rubutu a bayan gwajin bushe da amincewar eh/a'a.",
          text: [
            "Kayan rubutu yana canja wani abu: yana ajiye fayil, yana aika saƙo, yana sabunta takardar lissafi (sheet), yana kashe kuɗi. Ku ba kayan rubutu makullai biyu. Na farko, gwajin bushe (dry run): kayan aikin yana faɗin ainihin abin da zai yi, amma ba ya yi. Ku sa gwajin bushe ya zama na farko (default), da DRY_RUN = True a saman lambarku.",
            "Na biyu, amincewar mutum: kafin ainihin rubutu, ku nuna wa mutumin abin da zai faru ku tambaya. A notebook, answer = input('Save report to reports/week-42.md? yes/no ') kuma ku ci gaba ne kawai idan answer == 'yes'. A manhaja ta gaske, wannan maɓallin Approve (Amince) ne.",
            "Ku nuna ainihin bayanai a cikin amincewar, ba taƙaitawar da model ya rubuta ba: sunan fayil, wanda za a aika wa, adadin kuɗi. Ku rubuta kowace amincewa da kowane ƙi a rajista. Idan model ya sake neman rubutu iri ɗaya bayan an ce a'a, wannan alama ce ta dakatar da gudun."
          ],
          steps: ["Ku sa wa kowane kayan aiki alamar READ (karatu) ko WRITE (rubutu).", "Ku ba kowane kayan rubutu yanayin gwajin bushe, a kunne tun farko.", "Kafin ainihin rubutu, ku nuna ainihin bayanai ku tambaya eh ko a'a.", "Ku rubuta ne kawai idan an ce eh, ku rubuta amsar a rajista.", "Ku dakatar da gudun idan model ya sake gwada rubutun da aka ƙi."],
          words: [["Gwajin bushe (dry run)", "gudun gwaji da ke nuna abin da zai faru ba tare da yin shi ba."], ["Ƙofar amincewa (approval gate)", "wurin da dole mutum ya ce eh kafin wani aiki ya faru."]],
          slides: [
            { title: "Kayan rubutu suna canja abubuwa", bullets: ["Ajiyewa, aikawa, sabuntawa, kashe kuɗi", "Suna buƙatar makullai biyu"] },
            { title: "Makulli 1: gwajin bushe tun farko", bullets: ["DRY_RUN = True", "Yana nuna ainihin abin da zai faru", "Ba ya yin sa"] },
            { title: "Makulli 2: amincewar mutum", bullets: ["Ku nuna ainihin bayanai: fayil, wanda za a aika wa, adadi", "Ku tambaya eh ko a'a", "Ku rubuta idan an ce eh kawai; ku rubuta amsar a rajista"] }
          ],
          tryIt: "Ku rubuta save_report(filename, text) mai tantancewa (.md ko .txt kaɗai, a babban fayil na reports kaɗai), gwajin bushe tun farko da amincewar eh/a'a. Ku gwada shi da DRY_RUN a kunne, sannan a kashe, kuna amsa a'a sau ɗaya da eh sau ɗaya.",
          youCanNow: "ƙara kayan rubutu da ke yin aiki ne kawai bayan gwajin bushe da \"eh\" daga mutum.",
          quickCheck: [
            { objective: "O3", q: "Me gwajin bushe ke yi?", options: ["Yana nuna abin da zai faru ba tare da yin shi ba", "Yana gudanar da aikin sau biyu don tabbatarwa", "Yana goge tsohon fayil tukuna", "Yana ajiye kwafin model"], answer: 0, why: "Gwajin bushe yana bar mutum ya ga sakamakon kafin wani abu ya canja." },
            { objective: "O3", q: "Saƙon amincewa yana cewa kawai \"Proceed? yes/no\" (A ci gaba? eh/a'a). Me za ku canja?", options: ["Babu komai, gajere ne kuma a sarari", "Ku sa wakilin ya amsa eh da kansa", "Ku nuna ainihin sunan fayil da rubutun da za a ajiye", "Ku cire amincewar don a ajiye lokaci"], answer: 2, why: "Mutum zai iya amincewa da kyau ne kawai idan ya ga ainihin bayanai." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Ba wakili kayan aiki na gaske",
        questions: [
          { objective: "O1", q: "Me schema na kayan aiki ke ba model?", options: ["Makullin API ɗinku", "Lambar tushe (source code) ta kayan aikin", "Sunan kayan aikin, manufarsa da abubuwan shigarwarsa", "Izinin gudanar da komai"], answer: 2, why: "Model yana zaɓar kayan aiki yana cike su daga schema ɗinsu." },
          { objective: "O1", q: "Wane suna ne ya fi kyau ga kayan aiki?", options: ["save_report", "doStuff", "tool1", "x"], answer: 0, why: "Sunayen aiki suna faɗa wa model abin da kayan aikin ke yi." },
          { objective: "O2", q: "Model ya tura wa read_csv sunan fayil '../../passwords.txt'. Ya kamata kayan aikin ya:", options: ["Karanta shi, domin model ya nema", "Nemi model ya yi alƙawarin cewa babu haɗari", "Karanta rabinsa", "Ƙi shi da kuskure a sarari"], answer: 3, why: "Dole kayan aikin ya hana dabarun hanya da ke fita daga babban fayil da aka yarda." },
          { objective: "O3", q: "Me yasa DRY_RUN ya kamata ya kasance a kunne tun farko?", options: ["Ya fi sauri", "Babu abin da zai canja har sai wani ya kashe shi da gangan", "Model suna son sa", "Yana rage amfani da tokens"], answer: 1, why: "Saitin farko mai aminci yana hana rubutu ba da gangan ba." },
          { objective: "O3", q: "Me ya kamata saƙon amincewa ya nuna?", options: ["Taƙaitawar da model ya rubuta", "Babu komai, sai \"OK?\"", "Sunan model", "Ainihin bayanai: sunan fayil, wanda za a aika wa ko adadi"], answer: 3, why: "Dole mutane su amince da abin da zai faru da gaske." }
        ]
      }
    },
    {
      name: "Babi na 2: Daga wakili zuwa aiki da kai",
      lessons: [
        {
          objectives: ["O4"],
          title: "Abubuwan farawa, jadawali da sake gudu lafiya",
          minutes: 5,
          goal: "Zaɓi abin farawa ga wakili kuma ku sa sake gudu ya zama lafiya.",
          text: [
            "Aiki da kai (automation) wakili ne da ke farawa da kansa. Abin farawa (trigger) ne ke fara shi: jadawali (kowace Litinin ƙarfe 8 na safe), wani abu da ya faru (sabon fayil a babban fayil, sabuwar amsa a fom) ko maɓallin da wani ya danna.",
            "Ana sake gudanar da aiki da kai: jadawali yana tashi sau biyu, gudu yana kasawa a tsakiya kuma ku sake fara shi. Ku tsara don haka. Idempotent yana nufin gudanar da shi sau biyu yana ba da sakamako ɗaya da sau ɗaya. Ku sa wa abubuwan da aka fitar suna da lokacinsu (reports/week-42.md) ku duba kafin rubutu: idan rahoton yana nan, ku tsaya ko ku tambaya, maimakon yin kwafi.",
            "Hanyoyin tsara jadawali: a kwamfutarku, Windows Task Scheduler ko cron a Mac da Linux zai iya gudanar da shirin Python; kayan aiki marasa lamba (no-code) kamar Zapier, Make da n8n suna gudanar da ayyuka bisa abubuwan farawa; hidimomin girgije (cloud) ma suna da masu tsara jadawali. Colab don gini da gwaji ne, ba don gudanarwa bisa jadawali ba. Ku duba iyakokin kyauta na yanzu na kowane kayan aiki a shafinsa."
          ],
          steps: ["Ku zaɓi abin farawa: jadawali, abin da ya faru ko maɓalli.", "Ku sa wa kowane abin da aka fitar suna da lokacinsa, kamar week-42.", "Kafin rubutu, ku duba ko abin da za a fitar ya riga ya kasance.", "Idan yana nan, ku tsaya ko ku tambaya; kada ku taɓa yin kwafi.", "Ku zaɓi inda zai gudana, ku duba iyakokin wannan kayan aikin."],
          words: [["Abin farawa (trigger)", "abin da ke fara aiki da kai."], ["Idempotent", "lafiya a gudanar da shi fiye da sau ɗaya: gudu na biyu ba ya ƙara canja komai."], ["Cron", "mai tsara jadawali a Mac da Linux da ke gudanar da umarni a lokutan da aka saita."]],
          slides: [
            { title: "Nau'ukan abin farawa uku", bullets: ["Jadawali: kowace Litinin ƙarfe 8 na safe", "Abin da ya faru: sabon fayil ko amsar fom", "Maɓalli: mutum ne ke fara shi"] },
            { title: "Ku tsara don sake gudu", bullets: ["Idempotent: sau biyu = sau ɗaya", "Ku sa wa abin da aka fitar suna da lokaci: week-42", "Ku duba kafin rubutu; kada ku taɓa yin kwafi"] },
            { title: "Inda zai iya gudana", bullets: ["Task Scheduler ko cron a kwamfutarku", "Marasa lamba: Zapier, Make, n8n", "Colab don gini ne, ba don jadawali ba"] }
          ],
          tryIt: "Ku canja save_report ta yadda sunan fayil zai ƙunshi lambar mako, kuma gudu na biyu don mako ɗaya zai tsaya da \"Report for week 42 already exists\" (Rahoton mako na 42 ya riga ya kasance). Ku gudanar da shi sau biyu don tabbatarwa.",
          youCanNow: "zaɓar abin farawa da sa aiki da kai ya zama lafiya a gudanar da shi fiye da sau ɗaya.",
          quickCheck: [
            { objective: "O4", q: "Me ake nufi idan aiki da kai idempotent ne?", options: ["Yana gudana sau ɗaya kawai a shekara", "Gudanar da shi sau biyu yana ba da sakamako ɗaya da gudanar da shi sau ɗaya", "Ba ya taɓa buƙatar abin farawa", "Koyaushe yana neman amincewa"], answer: 1, why: "Ayyukan idempotent ana iya sake gudanar da su lafiya ba tare da yin kwafi ba." },
            { objective: "O4", q: "Aikinku na mako ya gudana sau biyu bisa kuskure ya yi rahotanni biyu. Me za ku canja?", options: ["Ku rage yawan gudanar da shi", "Ku goge rahotanni da hannu kowane mako", "Ku kashe rajistar", "Ku sa wa rahoton suna da mako ku tsaya idan rahoton wannan makon ya riga ya kasance"], answer: 3, why: "Suna bisa mako tare da duba ko yana nan yana sa sake gudu ya zama lafiya." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Haɗa kayan aiki da MCP",
          minutes: 5,
          goal: "Bayyana mene ne MCP kuma ku yanke shawarar lokacin amfani da sabar MCP.",
          text: [
            "Model Context Protocol (MCP) ƙa'ida ce ta buɗaɗɗen tushe (open-source) don haɗa manhajojin AI da tsarukan waje: fayiloli, rumbunan bayanai (databases), kalanda, kayan bincike. Shafinsa da kansa yana kwatanta shi da tashar USB-C don AI: ku gina haɗi sau ɗaya, manhajojin AI da yawa su yi amfani da shi.",
            "A MCP, sabar (server) tana ba da kayan aiki da bayanai; abokin hulɗa (client), a cikin manhajar AI kamar Claude, ChatGPT ko editan lamba kamar VS Code, yana haɗuwa da ita kuma yana bar model ya yi amfani da su. Kuna iya amfani da sabobin da aka riga aka yi ko ku rubuta ƙaramar sabar ku a Python da ke naɗe kayan aiki kamar read_csv ɗinku.",
            "MCP ba ya sa kayan aiki ya zama lafiya da kansa. Kowace doka daga Babi na 1 tana nan: duba argument, mafi ƙarancin dama (least privilege), amincewa don rubutu. Ku saka sabobi daga majiyoyin da kuka amince da su kaɗai, domin sabar tana gudana da duk damar da kuka ba ta. Ku karanta shafin shawarwarin tsaro na MCP (security best practices) kafin ku haɗa wani abu na sirri."
          ],
          words: [["MCP", "Model Context Protocol: buɗaɗɗiyar ƙa'ida don haɗa manhajojin AI da kayan aiki da bayanai."], ["Sabar MCP (MCP server)", "shirin da ke ba manhajojin AI kayan aiki ko bayanai ta MCP."], ["Abokin hulɗa na MCP (MCP client)", "sashen manhajar AI da ke haɗuwa da sabobin MCP."]],
          slides: [
            { title: "Mene ne MCP", bullets: ["Buɗaɗɗiyar ƙa'ida don haɗa manhajojin AI da kayan aiki da bayanai", "Kamar tashar USB-C don AI", "Ku gina sau ɗaya, ku yi amfani a manhajojin AI da yawa"] },
            { title: "Sabobi da abokan hulɗa", bullets: ["Sabar: tana ba da kayan aiki da bayanai", "Abokin hulɗa: a cikin manhajar AI, yana haɗuwa da sabobi", "Kuna iya rubuta ƙaramar sabar a Python"] },
            { title: "Har yanzu aikinku ne", bullets: ["Duba argument, mafi ƙarancin dama", "Amincewa don rubutu", "Ku saka sabobi daga majiyoyi amintattu kaɗai"] }
          ],
          sources: [{ name: "Model Context Protocol: Mene ne MCP? (What is MCP?)", url: "https://modelcontextprotocol.io/docs/getting-started/intro" }],
          tryIt: "Ku karanta shafin gabatarwar MCP. Sannan ku rubuta jimloli uku: wanne daga cikin kayan aikinku za ku bayar ta sabar MCP, wace manhajar AI za ta yi amfani da shi, da wace dokar amincewa za ku ci gaba da ita.",
          youCanNow: "bayyana sabobin MCP da abokan hulɗa, da yanke shawarar lokacin da haɗa kayan aiki ta MCP ya dace.",
          quickCheck: [
            { objective: "O5", q: "Mece ce sabar MCP?", options: ["Shirin da ke ba manhajojin AI kayan aiki da bayanai ta hanyar da aka saba", "Model da ke rubuta lamba", "Babban fayil a girgije don rahotanni", "Wani nau'in makullin API"], answer: 0, why: "MCP, Model Context Protocol, hanya ce da aka saba ta haɗa kayan aiki da bayanai da manhajojin AI." },
            { objective: "O5", q: "Kun bayar da save_report ta sabar MCP. Me zai faru da duba argument ɗinsa da amincewarsa?", options: ["Ana iya cire su, domin MCP yana kula da tsaro", "Suna komawa manhajar AI", "Kuna ajiye su a cikin kayan aikin", "Amincewar kaɗai ce ke zama"], answer: 2, why: "MCP yana haɗa kayan aiki; ba ya maye gurbin dubawa da amincewa a cikin lambarku." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Gina aiki da kai na rahoton mako",
          minutes: 6,
          goal: "Haɗa kayan aiki, madauki da dokokin tsaro zuwa aiki da kai ɗaya.",
          text: [
            "Yanzu ku haɗa komai. Kayan aiki: read_csv (karatu, an tantance), calculator (karatu, an tantance), save_report (rubutu: an tantance, gwajin bushe, amincewa, babu kwafi). Madauki daga kwas na 3 mai iyakar matakai da rajista. System prompt daga kwas na 2 mai manufar: taƙaita makon ku ajiye rahoto.",
            "Ku yi ƙaramin fayil na ƙirƙira don gwaji, kamar data/sales-week-42.csv mai ginshiƙai day, item, amount (rana, kaya, adadi). Kada ku taɓa gwaji da bayanan abokan ciniki ko na sirri na gaske.",
            "Ku gudanar da shi daga farko zuwa ƙarshe. Ku karanta rajistar: shin ya karanta kafin ya yi lissafi? Shin ya tambaya kafin ya ajiye? Ku gudanar da shi karo na biyu don mako ɗaya: kada ya yi kwafi. Sannan ku gwada fayil mai layi marar kyau (kalma inda ya kamata lamba ta kasance) ku duba cewa yana ba da rahoton matsalar maimakon yin tsammani."
          ],
          steps: ["Ku ƙirƙiri CSV na ƙirƙira a babban fayil na data.", "Ku yi rajistar kayan aiki uku da schema ɗinsu.", "Ku gudanar da madaukin da iyakar matakai da rajista.", "Ku amince da ajiyewa sau ɗaya; ku sake gudanarwa don gwada babu kwafi.", "Ku gwada fayil mai layi marar kyau."],
          words: [["Bayanan gwaji (test data)", "bayanan ƙirƙira da ake amfani da su don duba shiri ba tare da haɗarin bayanan gaske ba."], ["Gwajin farko zuwa ƙarshe (end-to-end test)", "gudanar da dukkan aiki da kai daga farko zuwa ƙarshe."]],
          slides: [
            { title: "Ku haɗa shi", bullets: ["read_csv, calculator, save_report", "Madauki mai iyakar matakai da rajista", "Prompt mai manufar mako"] },
            { title: "Ku gwada da bayanan ƙirƙira", bullets: ["data/sales-week-42.csv", "Kada ku taɓa amfani da bayanan abokan ciniki ko na sirri na gaske"] },
            { title: "Ku duba gudun", bullets: ["Ya karanta kafin lissafi?", "Ya tambaya kafin ajiyewa?", "Gudu na biyu: babu kwafi", "Layi marar kyau: an ba da rahoto, ba a yi tsammani ba"] }
          ],
          tryIt: "Aikin ƙarshe: ku gina wakilin rahoton mako da read_csv, calculator da save_report (an tantance, gwajin bushe tun farko, amincewar eh/a'a, babu kwafi). Ku gudanar da shi a kan CSV na ƙirƙira, ku sake gudanar da shi don mako ɗaya, ku ajiye rajistar cikakken gudun.",
          youCanNow: "mayar da wakili aiki da kai mai lafiya da ake iya maimaitawa, mai kayan aiki na gaske.",
          quickCheck: [
            { objective: "O6", q: "Mene ne gwajin farko zuwa ƙarshe na aiki da kanku?", options: ["Gwada calculator kaɗai", "Gudanar da dukkan aiki da kai daga farko zuwa ƙarshe", "Karanta lambar da babbar murya", "Gwada model a chatbot"], answer: 1, why: "Farko zuwa ƙarshe yana nufin kowane sashe yana gudana tare, kamar yadda zai yi da gaske." },
            { objective: "O6", q: "CSV ɗinku yana da kalmar \"none\" inda ya kamata lambar tallace-tallace ta kasance. Me ya kamata wakilin ya yi?", options: ["Ya ba da rahoton matsalar a taƙaitawarsa", "Ya ƙidaya shi sifili ba tare da faɗa ba", "Ya tsallake dukkan fayil ɗin", "Ya yi tsammanin lamba"], answer: 0, why: "Wakili mai kyau yana ba da rahoton bayanai marasa kyau maimakon ɓoye su." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Daga wakili zuwa aiki da kai",
        questions: [
          { objective: "O4", q: "Wanne ne abin farawa na abin da ya faru (event)?", options: ["Mutum ya karanta rajista", "Kowace Litinin ƙarfe 8 na safe", "Sabon fayil ya iso babban fayil", "Iyakar matakai"], answer: 2, why: "Abin da ya faru, kamar sabon fayil, ne ke fara gudun." },
          { objective: "O4", q: "Aiki da kai idempotent ne idan:", options: ["Gudanar da shi sau biyu yana ba da sakamako ɗaya da sau ɗaya", "Yana gudu da sauri sosai", "Ba ya taɓa kasawa", "Ba ya amfani da kayan aiki"], answer: 0, why: "Sake gudu lafiya ba ya maimaita aiki." },
          { objective: "O5", q: "Me sabar MCP ke yi?", options: ["Tana horar da model", "Tana ba manhajojin AI kayan aiki da bayanai", "Tana ajiye kalmar sirrinku", "Tana maye gurbin duba argument"], answer: 1, why: "Sabobi suna bayar da kayan aiki da bayanai; abokan hulɗa a manhajojin AI suna haɗuwa da su." },
          { objective: "O5", q: "Kun sami sabar MCP a shafin intanet da ba ku sani ba wadda ke neman damar shiga fayilolinku. Mataki mafi kyau?", options: ["Ku yi amfani da sabobi daga majiyoyin da kuka amince da su kaɗai, da mafi ƙarancin damar da ake buƙata", "Ku ba ta damar shiga komai", "Ku saka ta nan take", "Ku kashe amincewa"], answer: 0, why: "Sabar tana gudana da duk damar da kuka ba ta." },
          { objective: "O6", q: "Da waɗanne bayanai ya kamata ku gwada aiki da kanku?", options: ["Bayanan abokan ciniki na gaske", "Bayanin asusun bankinku", "Imel ɗin abokinku", "Bayanan gwaji na ƙirƙira"], answer: 3, why: "Bayanan gwaji suna guje wa haɗarin bayanan gaske." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Amfani da Kayan Aiki da Aiki da Kai a Wakilin AI",
    questions: [
      { objective: "O1", q: "Schema na kayan aiki ya haɗa da:", options: ["Bayanan horar da model", "Suna, manufa da abubuwan shigarwa", "Kalmar sirri", "Jerin farashi"], answer: 1, why: "Wannan ne model ke karantawa don zaɓa da amfani da kayan aikin." },
      { objective: "O1", q: "Ana amfani da JSON Schema don:", options: ["Ajiye makullan API", "Yin hotuna", "Bayyana siffar abubuwan shigarwa na kayan aiki", "Horar da model"], answer: 2, why: "Yana bayyana nau'uka da wuraren da ake buƙata dole." },
      { objective: "O1", q: "Kayan aiki mai kyau yana yin:", options: ["Duk abin da model ya faɗa", "Kowane aiki lokaci ɗaya", "Aiki ɗaya a sarari", "Babu komai"], answer: 2, why: "Ƙananan kayan aiki takamaimai sun fi sauƙin zaɓa kuma sun fi aminci." },
      { objective: "O2", q: "Wane ne dole ya tilasta dokokin kayan aiki?", options: ["Lambar kayan aikin da kanta", "Model", "Burauzar mai amfani", "Babu kowa"], answer: 0, why: "Model yana iya yin kuskure ko a yaudare shi." },
      { objective: "O2", q: "Sunan fayil '../secret.txt' misali ne na:", options: ["Fayil na yau da kullum", "Abin farawa", "Schema", "Path traversal (hawan hanya)"], answer: 3, why: "../ yana ƙoƙarin fita daga babban fayil da aka yarda." },
      { objective: "O2", q: "Allow list shi ne:", options: ["Jerin masu amfani da aka hana", "Jerin ƙimomin da su kaɗai aka yarda", "Jerin abubuwan yi", "Saitin model"], answer: 1, why: "Ƙimomin da ke cikin jerin kaɗai ake karɓa." },
      { objective: "O2", q: "Ya kamata wakili ya gudanar da rubutun da model ya rubuta a matsayin umarnin shell?", options: ["Eh, koyaushe", "Ranakun ƙarshen mako kaɗai", "Idan gajere ne kaɗai", "A'a, ko kaɗan"], answer: 3, why: "Hakan yana mayar da kuskuren model matsalar tsarin kwamfuta." },
      { objective: "O3", q: "Gwajin bushe:", options: ["Yana goge fayilolin gwaji", "Yana gudana ba tare da model ba", "Yana nuna abin da zai faru ba tare da yin shi ba", "Yana gudana sau biyu"], answer: 2, why: "Yana nuna aikin a gaba lafiya." },
      { objective: "O3", q: "Wanne ne kayan rubutu?", options: ["save_report", "calculator", "read_csv", "search"], answer: 0, why: "Ajiyewa yana canja wani abu." },
      { objective: "O3", q: "Kafin ainihin rubutu, ya kamata mutum ya ga:", options: ["Alamar babban yatsa (thumbs-up) kawai", "Ainihin fayil, wanda za a aika wa ko adadi", "Makullin API", "Babu komai"], answer: 1, why: "Dole amincewa ta kasance game da ainihin bayanai." },
      { objective: "O3", q: "Model ya sake neman ajiyewa nan da nan bayan kun ce a'a. Ya kamata ku:", options: ["Dakatar da gudun ku karanta rajistar", "Ku ce eh don ya daina", "Ku kashe amincewa", "Ku ba shi ƙarin kayan aiki"], answer: 0, why: "Sake gwada rubutun da aka ƙi alamar gargaɗi ce." },
      { objective: "O4", q: "Wanne ne abin farawa na jadawali?", options: ["Layi marar kyau", "Sabuwar amsar fom", "Danna maɓalli", "Kowace Litinin ƙarfe 8 na safe"], answer: 3, why: "Jadawali suna fara gudu a lokutan da aka saita." },
      { objective: "O4", q: "Sa wa rahotanni suna da mako (week-42) yana taimakawa:", options: ["Sa model ya fi wayo", "Guje wa rahotanni biyu iri ɗaya a sake gudu", "Ɓoye rahoton", "Rage amfani da tokens"], answer: 1, why: "Wakilin zai iya duba ko rahoton wannan makon ya riga ya kasance." },
      { objective: "O4", q: "Shin Google Colab wuri ne da ya dace don gudanar da jadawalin mako?", options: ["Eh, yana gudana har abada", "Eh, yana da kalanda a ciki", "A'a, don gini da gwaji ne", "Ga masu biyan kuɗi kaɗai"], answer: 2, why: "Ku yi amfani da mai tsara jadawali ko hidimar aiki da kai don gudu bisa jadawali." },
      { objective: "O4", q: "Ana amfani da cron da Windows Task Scheduler don:", options: ["Duba JSON", "Rubuta prompts", "Gudanar da shirye-shirye a lokutan da aka saita", "Horar da model"], answer: 2, why: "Masu tsara jadawali ne su." },
      { objective: "O5", q: "MCP gajartawar:", options: ["Model Context Protocol", "Main Control Program", "Multi Cloud Platform", "Model Copy Process"], answer: 0, why: "Buɗaɗɗiyar ƙa'ida ce don haɗa manhajojin AI da kayan aiki." },
      { objective: "O5", q: "A shafin MCP da kansa, ana kwatanta MCP da:", options: ["Wayar caji ta Apple kaɗai", "Manajan kalmomin sirri", "Takardar lissafi (spreadsheet)", "Tashar USB-C don manhajojin AI"], answer: 3, why: "Haɗi ɗaya da aka saba da manhajoji da yawa za su iya amfani da shi." },
      { objective: "O5", q: "Amfani da MCP yana nufin duba argument ɗinku:", options: ["Ba a buƙatarsa kuma", "Har yanzu ana buƙatarsa", "Shafin intanet na sabar ne ke yi", "Model ne ke yi"], answer: 1, why: "MCP yana haɗa kayan aiki; ba ya sa su zama lafiya." },
      { objective: "O6", q: "Wani layi a CSV yana da kalma inda ya kamata lamba ta kasance. Wakili mai kyau:", options: ["Yana tsammanin lamba", "Yana tsallake dukkan rahoton a ɓoye", "Yana goge fayil ɗin", "Yana ba da rahoton matsalar"], answer: 3, why: "Ku ba da rahoton matsalolin bayanai; kada ku taɓa yin tsammani." },
      { objective: "O6", q: "Gwajin farko zuwa ƙarshe yana nufin:", options: ["Gwada aiki (function) ɗaya", "Karanta schema", "Gudanar da dukkan aiki da kai daga farko zuwa ƙarshe", "Duba amsar ƙarshe kaɗai"], answer: 2, why: "Yana duba kowane sashe yana aiki tare." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      3,
      4,
      7,
      9,
      11,
      12,
      15,
      17,
      19
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "An bayyana kayan aiki",
        objective: "O1",
        notYet: "Wani kayan aiki ba shi da schema, ko sunansa ko manufarsa ba su da sarari.",
        meets: "read_csv, calculator da save_report kowanne yana da suna, manufa da abubuwan shigarwa masu nau'i.",
        exceeds: "Bayanin yana da sarari sosai har model yana zaɓar kayan aikin da ya dace a karon farko."
      },
      {
        name: "An duba argument",
        objective: "O2",
        notYet: "save_report yana karɓar kowane sunan fayil ko babban fayil.",
        meets: "Fayilolin .txt ko .md kaɗai, a babban fayil na reports kaɗai; abin shigarwa marar kyau yana samun kuskure a sarari.",
        exceeds: "Ana duba read_csv ta hanya ɗaya kuma an gwada kurakuran."
      },
      {
        name: "Gwajin bushe da amincewa",
        objective: "O3",
        notYet: "An rubuta rahoton ba tare da gwajin bushe ko \"eh\" ba.",
        meets: "Gwajin bushe yana a kunne tun farko kuma ana tambaya \"Save report? yes/no\" kafin rubutu.",
        exceeds: "Amincewar tana nuna ainihin sunan fayil da hangen rubutun a gaba."
      },
      {
        name: "Sake gudu lafiya",
        objective: "O4",
        notYet: "Gudu na biyu don mako ɗaya yana yin rahoto na biyu iri ɗaya.",
        meets: "Gudu na biyu don mako ɗaya yana tsayawa ba tare da kwafi ba.",
        exceeds: "Yana faɗa a sarari rahoton wane mako ne ya riga ya kasance."
      },
      {
        name: "An rubuta cikakken gudu a rajista",
        objective: "O6",
        notYet: "Babu rajista, ko gudun bai ƙare ba.",
        meets: "Rajistar tana nuna cikakken gudu ɗaya daga karanta CSV zuwa amincewa.",
        exceeds: "Taƙaitawar tana ba da rahoton duk layukan da ba su da kyau a bayanan."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka gama kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka ci gaba zuwa kwas na 5 na shirin wakilai cikin kwanaki 30",
      "Masu koyo da suka ce sun gudanar da aiki da kai bisa jadawali mai amincewa kan ayyukan rubutu cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka ce babu rubutun da ba a so ko kwafi daga ayyukansu na aiki da kai (binciken biyo baya)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta mai burauzar intanet da intanet; Colab ko Python a kwamfutarku",
      "Makullin API na model daga kwas na 2, ko model na kyauta a kwamfutarku (local)",
      "Fayil ɗin CSV na ƙirƙira na tallace-tallace ko kashe-kashen kuɗi",
      "Madaukin wakilinku daga kwas na 3",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku yi gwajin farko tare, sannan ku gina kowane matakin tsaro kai tsaye: schema, dubawa, gwajin bushe, amincewa.",
      "Ku ba kowa CSV na ƙirƙira iri ɗaya don a iya kwatanta sakamako; kada ku taɓa amfani da bayanan abokan ciniki ko na kuɗi na gaske.",
      "Ku sa masu koyo su gwada munanan sunayen fayil daga Darasi na 2 da babbar murya a matsayin rukuni don ganin kowane kuskure.",
      "Ku jaddada cewa sabobin MCP amintattu kaɗai ya kamata a yi amfani da su, da mafi ƙarancin damar da ake buƙata.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku nemi kowane mai koyo ya nuna gudunsa na biyu yana tsayawa ba tare da kwafi ba."
    ]
  }
};
