"use strict";

// Koach Learn course, Hausa (ha) translation of artificial-intelligence/agentic-building-agents.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "agentic-building-agents-ha",
  lang: "ha",
  translationOf: "agentic-building-agents",
  category: "Artificial Intelligence",
  name: "Gina AI Agents (Wakilan AI)",
  skills: "Rubuta zagayen agent a Python, Ayyana kayan aiki (tools) a matsayin functions, Neman model ya faɗi mataki na gaba a JSON, Ajiye ƙwaƙwalwa da rajistar aiki (run log), Ƙara iyakar matakai da sarrafa kurakurai",
  outcome: "gina ƙaramin AI agent mai aiki a Python a cikin Colab notebook kyauta: zagaye da ke tambayar model mataki na gaba, yana gudanar da ɗaya daga cikin tools biyu da kuka rubuta, yana mayar da sakamakon ga model, yana tsayawa a iyakar matakai, kuma yana rubuta kowane mataki a rajista.",
  about: [
    "Wannan shi ne kwas na 3 na shirin Design, Build, and Deploy Autonomous AI Agents (Tsara, Gina da Ƙaddamar da AI Agents masu aiki da kansu). Kuna da katin tsari (kwas na 1) da prompt da aka gwada (kwas na 2). Yanzu za ku gina agent ɗin kansa, da Python mai sauƙi, don ku ga kowane sashe maimakon a ɓoye shi a cikin framework.",
    "Babi na 1 yana gina zagayen: tools a matsayin Python functions, prompt da ke sa model ya zaɓi mataki a JSON, da code da ke gudanar da matakin ya mayar da sakamakon. Babi na 2 yana sa shi ya zama amintacce: ƙwaƙwalwa, rajistar aiki, iyakar matakai, sarrafa kurakurai, da duban frameworks na agents da za ku iya amfani da su daga baya.",
    "Kuna buƙatar asusun Google don Colab da API key na model (matakin kyauta na Gemini API daga kwas na 2 yana aiki, ko model na gida kyauta da Ollama a kwamfutarku). Ana nuna code a gajerun layuka a cikin darussa. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "A cikin Colab notebook, ku gina agent mai tools biyu da kuka rubuta (misali calculator(expression) da lookup_note(topic) da ke karantawa daga ƙaramin Python dictionary na bayanai). Ku ba shi manufar \"Awa nawa zan yi karatu a wannan watan idan na yi karatu minti 45 a kowace ranar aji da ke cikin bayanana?\". Dole agent ɗin ya zaɓi tools a JSON, ya gudanar da su, ya mayar da sakamako, ya tsaya a iyakar matakai 6, ya sarrafa amsa ɗaya marar kyau daga model ba tare da ya rushe ba, kuma ya buga rajistar kowane mataki.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya a shirin Design, Build, and Deploy Autonomous AI Agents da suka gama kwas na 1 da na 2: masu ƙananan kasuwanci, masu canja sana'a, ɗalibai da ma'aikata da ke son gina agent mai aiki da kansu.",
    startingPoint: "Suna da katin tsarin agent da system prompt da aka gwada wanda ke mayar da JSON. Suna iya gudanar da gajerun layukan Python a Google Colab, kuma su kira model da API key na sirri, amma ba su taɓa rubuta zagayen agent ba.",
    gap: "Frameworks suna ɓoye yadda agent ke aiki, don haka idan ya yi kuskure, masu farawa ba sa iya gane dalili. Masu koyo suna buƙatar gina zagayen da hannunsu, da tools, ƙwaƙwalwa, rajista, iyakar matakai da sarrafa kurakurai, don agents ɗinsu su zama amintattu kuma su iya gyara su.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi; ana nuna code a gajerun layuka don kwafa",
      "Na'urori: kwamfuta mai burauzar intanet; Colab kyauta da matakan API kyauta suna da iyaka",
      "Babu bayanan sirri ko na abokan ciniki a cikin tools ko bayanan atisaye",
      "API keys suna zama a wurin sirri (secret), ba a cikin notebook ba",
      "Lokaci: gajerun darussa masu aikin atisaye ɗaya kowanne"
    ],
    prerequisites: "Kwas na 1 da na 2 na Design, Build, and Deploy Autonomous AI Agents (\"Fahimtar LLM da Fasahar Rubuta Prompt\")."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "A cikin Colab notebook", action: "rubuta tools biyu a matsayin Python functions masu sunaye a sarari, bayanin layi ɗaya da duba abin da aka shigar", standard: "kowane tool yana aiki idan kun kira shi da kanku" },
    { id: "O2", condition: "Idan kuna da tools ɗinku da wata manufa", action: "rubuta system prompt da helper mai suna ask_model da ke sa model ya amsa da mataki ɗaya a JSON", standard: "ta yadda model zai zaɓi tool mai inganci ko amsar ƙarshe" },
    { id: "O3", condition: "Idan model ya zaɓi mataki", action: "rubuta zagaye da ke gudanar da tool ɗin da aka zaɓa ya mayar da sakamakon ga model", standard: "har model ya ba da amsar ƙarshe" },
    { id: "O4", condition: "Yayin da agent ke aiki", action: "tsara tarihin (history) da kyau da rubuta kowane mataki a rajistar aiki", standard: "da mataki, ainihin amsa, tool, abin da aka shigar da sakamako na kowane mataki" },
    { id: "O5", condition: "Idan model ya ba da amsa marar kyau, tool ya sami kuskure, ko aikin ya yi tsawo", action: "ƙara iyakar matakai da sarrafa amsoshi marasa kyau da kurakuran tools", standard: "ta yadda agent zai farfaɗo ko ya tsaya ya ba da rahoto ba tare da ya rushe ba" },
    { id: "O6", condition: "Idan kun gama agent ɗinku", action: "gwada shi da manufofi na yau da kullum da waɗanda ba za su yiwu ba, da bayyana lokacin da framework zai taimaka", standard: "kuna gudanar da gwaje-gwaje biyar duka kuma kuna rubuta abin da kuka gyara" }
  ],
  chapters: [
    {
      name: "Babi na 1: Zagayen agent a code",
      lessons: [
        {
          objectives: ["O1"],
          title: "Tools functions ne kawai",
          minutes: 5,
          goal: "Rubuta tools biyu a matsayin Python functions masu sunaye da bayanai a sarari.",
          text: [
            "Ga agent, tool function ce da code ɗinku ke gudanarwa idan model ya nema. Model ba ya gudanar da komai da kansa: yana rubuta sunan tool da abin da za a shigar ne kawai. Code ɗinku ne ke yanke shawara ko za a gudanar da shi.",
            "Ku fara da tools masu aminci da ke karantawa kawai. Calculator: def calculator(expression): da jiki da ke yarda da lambobi da + - * / ( ) . kawai, sannan ya lissafa amsar. Duban bayanai: NOTES = {'schedule': 'Class days: Mon, Wed, Thu'}, da def lookup_note(topic): return NOTES.get(topic, 'no note found').",
            "Ku tara su a cikin dictionary don zagayen ya same su da suna: TOOLS = {'calculator': calculator, 'lookup_note': lookup_note}. Ku rubuta bayanin layi ɗaya na kowanne. Model yana karanta waɗannan bayanai don ya zaɓa, don haka suna da muhimmanci kamar code ɗin."
          ],
          steps: ["Ku rubuta kowane tool a matsayin Python function mai abin shigarwa ɗaya.", "Ku sa shi ya zama mai aminci: ku duba abin da aka shigar kafin amfani da shi.", "Ku mayar da rubutu da model zai iya karantawa, har da saƙo a sarari idan an kasa.", "Ku saka tools ɗin a cikin TOOLS dictionary.", "Ku rubuta bayanin layi ɗaya na kowane tool."],
          words: [["Function", "wani yanki na code mai suna da ke karɓar abin shigarwa ya mayar da sakamako."], ["Dictionary", "tarin Python na sunaye da ƙimominsu bibbiyu, kamar {'calculator': calculator}."], ["Tool mai karantawa kawai (read-only)", "tool da ke duba abubuwa kawai, ba ya canja komai."]],
          slides: [
            { title: "Tool function ce", bullets: ["Model yana faɗin sunan tool da abin shigarwa kawai", "Code ɗinku ne ke yanke shawara ko za a gudanar da shi"] },
            { title: "Tools biyu masu aminci don farawa", bullets: ["calculator(expression): yana duba abin shigarwa, yana lissafi", "lookup_note(topic): yana karantawa daga dictionary"] },
            { title: "Ku sa tools su zama masu sauƙin zaɓa", bullets: ["TOOLS = {name: function}", "Layi ɗaya a sarari da ke bayyana kowane tool", "Ku mayar da saƙo a sarari idan an kasa"] }
          ],
          tryIt: "A cikin sabon Colab notebook, ku rubuta calculator da lookup_note, ku saka su a TOOLS, sannan ku gwada kowanne ta hanyar kiran sa da kanku: calculator('45*12/60') da lookup_note('schedule').",
          youCanNow: "rubuta tools masu aminci a matsayin Python functions da yi musu rajista da suna.",
          quickCheck: [
            { objective: "O1", q: "A cikin agent ɗinku, mene ne tool?", options: ["Python function da code ɗinku ke gudanarwa idan model ya nema", "Wani saiti a cikin model", "Shafin intanet da model ke ziyarta da kansa", "Model na AI na biyu"], answer: 0, why: "Model yana nema ne kawai; code ɗinku ne ke gudanar da function ɗin." },
            { objective: "O1", q: "Tool ɗinku na lookup_note ya karɓi topic da babu shi a cikin bayanai. Me ya kamata ya yi?", options: ["Ya ƙirƙiri bayanin da zai iya yiwuwa", "Ya rushe don ku lura", "Ya mayar da saƙo a sarari cewa ba a sami topic ɗin ba", "Ya mayar da dukkan dictionary na bayanai"], answer: 2, why: "Saƙo a sarari yana bar model ya gwada wata hanya maimakon ya yi tsammani." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Neman model ya faɗi mataki na gaba",
          minutes: 6,
          goal: "Rubuta prompt da ke sa model ya amsa da mataki ɗaya a JSON.",
          text: [
            "Model yana buƙatar sanin manufar, tools ɗin da tsarin amsa. System prompt ɗinku yana jera kowane tool da bayaninsa, kuma yana cewa: ka amsa da JSON kawai, ko dai {\"tool\": \"name\", \"input\": \"...\"} don amfani da tool, ko {\"final\": \"...\"} idan an cimma manufar.",
            "Ku ƙara ƙa'idoji daga katin tsarinku: a yi amfani da tools da aka jera kawai; mataki ɗaya a kowace amsa; idan sakamakon tool ya ce an kasa, a gwada wata hanya; kada a taɓa ƙirƙirar sakamakon tool.",
            "Ku rubuta helper don sauran code ɗinku kada ya damu da wane mai samar da model (provider) kuke amfani da shi: def ask_model(text): da ke kiran model ɗinku (ku kwafi kiran daga quickstart na provider ɗinku, kamar a kwas na 2) ya mayar da rubutun amsar. Idan kun canja provider daga baya, ask_model kaɗai ke canjawa."
          ],
          steps: ["Ku jera sunan kowane tool da bayaninsa a cikin system prompt.", "Ku ba da siffofin amsa guda biyu na JSON: tool ko final.", "Ku ƙara ƙa'idojin daga katin tsarinku.", "Ku rubuta ask_model(text) da ke mayar da rubutun amsar model.", "Ku gwada shi sau ɗaya da manufar ku buga amsar."],
          words: [["Mataki (action)", "abu ɗaya da agent ya yanke shawarar yi na gaba, kamar amfani da tool ko ba da amsar ƙarshe."], ["Helper function", "ƙaramar function da ke ɓoye cikakkun bayanai, kamar wane provider na model kuke kira."]],
          slides: [
            { title: "Prompt yana faɗa wa model", bullets: ["Manufar", "Tools ɗin da abin da kowanne ke yi", "Ainihin siffofin amsa na JSON"] },
            { title: "Siffofin amsa guda biyu", bullets: ["{\"tool\": \"name\", \"input\": \"...\"}", "{\"final\": \"...\"} idan an cimma manufar"] },
            { title: "Ƙa'idoji daga katin tsarinku", bullets: ["Tools da aka jera kawai, mataki ɗaya a kowace amsa", "Idan tool ya kasa, a gwada wata hanya", "Kada a taɓa ƙirƙirar sakamakon tool"] },
            { title: "Ku ɓoye provider ɗin", bullets: ["ask_model(text) yana mayar da rubutun amsar", "Ku canja provider ta hanyar canja function ɗaya"] }
          ],
          tryIt: "Ku rubuta system prompt da ask_model. Ku aika manufar aikin ƙarshe ku buga amsar. Shin ya zaɓi lookup_note da farko? Idan bai zaɓa ba, ku inganta bayanan tools ɗin.",
          youCanNow: "sa model ya zaɓi mataki na gaba a JSON daga jerin tools.",
          quickCheck: [
            { objective: "O2", q: "Yaya amsar model ya kamata ta kasance idan yana son tool?", options: ["Sakin layi mai daɗi da ke bayyana shirinsa", "Mataki ɗaya na JSON da ke faɗin sunan tool da abin shigarwa", "Code na Python na tool ɗin", "Jerin dukkan tools"], answer: 1, why: "Mataki ɗaya na JSON abu ne da zagayenku zai iya karantawa ya gudanar." },
            { objective: "O2", q: "Model yana ci gaba da zaɓar calculator kafin ya sami ranakun aji. Me za ku fara canjawa?", options: ["Ku cire calculator", "Ku ƙara iyakar matakai", "Ku koma ga framework", "Ku inganta bayanan tools don ya san cewa sai ya fara duba bayanai"], answer: 3, why: "Model yana zaɓar tools daga bayanansu, don haka bayanai masu sarari suna jagorantar zaɓinsa." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Gudanar da zagayen: yi aiki ka mayar da sakamako",
          minutes: 6,
          goal: "Rubuta zagayen da ke gudanar da tool ɗin da aka zaɓa ya mayar da sakamakon.",
          text: [
            "Zagayen gajere ne. history = [] yana riƙe abin da ya faru. A kowane mataki: ku haɗa rubutun (system prompt, manufa, history), ku kira ask_model, ku karanta (parse) JSON ɗin. Idan yana da 'final', ku buga shi ku tsaya. Idan yana da 'tool', ku nemo shi a TOOLS, ku gudanar da shi da abin shigarwa, ku ƙara layi a history: matakin da sakamakon.",
            "Mayar da sakamakon shi ne matakin lura (observe) daga kwas na 1. Ba tare da shi ba, model zai ci gaba da neman abu ɗaya har abada. Da shi, model yana ganin \"lookup_note(schedule) returned: Class days: Mon, Wed, Thu\" kuma zai iya yanke mataki na gaba, kamar amfani da calculator.",
            "Idan model ya faɗi sunan tool da babu shi a TOOLS, kada ku bari ya rushe: ku ƙara \"Unknown tool: X. Use one of: calculator, lookup_note\" a history ku ci gaba. Saƙonni a sarari ga model su ne yadda agent ke farfaɗowa daga kurakuransa."
          ],
          steps: ["history = []", "Ku haɗa rubutun: system prompt, manufa, history.", "Ku kira ask_model ku karanta JSON ɗin.", "Idan 'final' ne: ku buga ku tsaya.", "Idan 'tool' ne: ku gudanar da shi daga TOOLS ku ƙara matakin da sakamakon a history."],
          words: [["History (tarihi)", "jerin matakai da sakamakon da agent ya gani a wannan aikin, da ke ƙaruwa."], ["Lura (observation)", "sakamakon tool, da ake mayar wa model."]],
          slides: [
            { title: "Kowane mataki na zagayen", bullets: ["Haɗa rubutu: prompt, manufa, history", "Tambayi model, karanta JSON", "Final? Tsaya. Tool? Gudanar da shi."] },
            { title: "Mayar da sakamakon", bullets: ["Ƙara matakin da sakamakon a history", "Model yana ganin sa a mataki na gaba", "Ba tare da shi ba, agent yana maimaitawa"] },
            { title: "Tool da ba a sani ba?", bullets: ["Kada ku bari ya rushe", "Ku faɗa wa model waɗanne tools ne akwai", "Ku bar shi ya sake gwadawa"] }
          ],
          tryIt: "Ku rubuta zagayen ku gudanar da shi da manufar aikin ƙarshe. Ku buga history bayan kowane mataki. Ku ƙirga matakai nawa ya ɗauka kafin ya kai amsar ƙarshe.",
          youCanNow: "rubuta zagayen agent da ke gudanar da tools ya mayar da sakamakon ga model.",
          quickCheck: [
            { objective: "O3", q: "Mene ne matakin lura (observe) a cikin zagayen?", options: ["Ƙara sakamakon tool a history don model ya gan shi", "Buga amsar ƙarshe", "Zaɓar wane tool za a rubuta", "Duba API key"], answer: 0, why: "Mayar da sakamakon yana bar model ya yanke mataki na gaba bisa abin da ya faru." },
            { objective: "O3", q: "Agent ɗinku yana kiran tool ɗaya akai-akai. Mene ne gyara mafi yiwuwa?", options: ["Ku ƙara tools", "Ku tabbata ana mayar da kowane sakamakon tool a cikin history", "Ku gajarta system prompt", "Ku yi amfani da wani notebook daban"], answer: 1, why: "Ba tare da sakamakon a history ba, model bai san cewa an riga an gudanar da matakin ba." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Zagayen agent a code",
        questions: [
          { objective: "O1", q: "Wane ne ainihin ke gudanar da tool a cikin agent?", options: ["Model", "Burauzar mai amfani", "Code ɗinku", "Shafin intanet na tool ɗin"], answer: 2, why: "Model yana faɗin sunan tool ne kawai; code ɗinku ne ke yanke shawara ya gudanar da shi." },
          { objective: "O1", q: "Me yasa kowane tool yake buƙatar bayanin layi ɗaya a sarari?", options: ["Model yana karanta shi don zaɓar tool ɗin da ya dace", "Yana sa code ya yi sauri", "Python yana buƙatar sa", "Yana ɓoye tool ɗin daga model"], answer: 0, why: "Bayanai su ne yadda model ke sanin amfanin kowane tool." },
          { objective: "O3", q: "Model ya amsa {\"final\": \"About 27 hours\"}. Me zagayen zai yi?", options: ["Ya gudanar da calculator", "Ya sake farawa", "Ya nemi kalmar sirri daga mai amfani", "Ya buga amsar ya tsaya"], answer: 3, why: "Amsar final tana nufin an cimma manufar." },
          { objective: "O2", q: "Mene ne amfanin helper na ask_model?", options: ["Don gudanar da tools", "Don ajiye bayanan provider a wuri ɗaya", "Don ajiye API key a cikin code", "Don tsallake zagayen"], answer: 1, why: "Daga nan, canja provider yana nufin canja function ɗaya." },
          { objective: "O3", q: "Model ya nemi tool mai suna \"search\" da ba ku rubuta ba. Mene ne amsa mafi kyau?", options: ["A bari ya rushe don ku lura", "A faɗa wa model waɗanne tools ne akwai a ci gaba", "A gudanar da kowane bincike da za a samu", "A tsayar da agent har abada"], answer: 1, why: "Saƙo a sarari yana bar agent ya farfaɗo." }
        ]
      }
    },
    {
      name: "Babi na 2: Sa agent ya zama amintacce",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ƙwaƙwalwa da rajistar aiki",
          minutes: 5,
          goal: "Tsara ƙwaƙwalwar ɗan lokaci da kyau da rubuta kowane mataki a rajista.",
          text: [
            "Ƙwaƙwalwar ɗan lokaci (short-term memory) ita ce jerin history da kuke da shi. Yana ƙaruwa a kowane mataki, kuma ana aika duk abin da ke cikinsa ga model, wanda ke cin tokens da lokaci. Don dogon aiki, ku ajiye matakai na ƙarshe kaɗan cikakku, ku maye gurbin tsofaffin matakai da taƙaitawa ta layi ɗaya.",
            "Ƙwaƙwalwar dogon lokaci (long-term memory) ita ce duk abin da aka ajiye tsakanin ayyuka: fayil na bayanai, spreadsheet, ƙaramin database. Ku ajiye abin da agent ke buƙata da gaske a gaba kawai, kuma kada ku taɓa ajiye bayanan sirri da ba ku buƙata.",
            "Rajistar aiki (run log) don ku ce, ba don model ba. A kowane mataki, ku rubuta lambar mataki, ainihin amsar model, tool da abin shigarwa, sakamakon da lokaci. Idan agent ya yi wani abu mai ban mamaki, rajistar tana faɗa muku dalili. Hanya mai sauƙi: log.append({'step': n, 'reply': reply, 'result': result}) sannan ku buga shi a ƙarshe."
          ],
          words: [["Ƙwaƙwalwar ɗan lokaci (short-term memory)", "abin da agent ke gani a cikin aiki ɗaya: history zuwa yanzu."], ["Ƙwaƙwalwar dogon lokaci (long-term memory)", "bayanan da aka ajiye tsakanin ayyuka, kamar fayil na bayanai."], ["Rajistar aiki (run log)", "bayananku na kowane mataki da agent ya ɗauka, don dubawa da gyara kurakurai."]],
          slides: [
            { title: "Ƙwaƙwalwar ɗan lokaci", bullets: ["Jerin history, ana aika shi a kowane mataki", "Dogon history yana cin tokens da lokaci", "Ku taƙaita tsofaffin matakai"] },
            { title: "Ƙwaƙwalwar dogon lokaci", bullets: ["Ana ajiye ta tsakanin ayyuka: fayil ko database", "Ku ajiye abin da ake buƙata kawai", "Babu bayanan sirri da ba ku buƙata"] },
            { title: "Rajistar aiki", bullets: ["Mataki, ainihin amsa, tool, abin shigarwa, sakamako, lokaci", "Don ku ne, ba don model ba", "Ku karanta ta idan agent ya yi abin ban mamaki"] }
          ],
          tryIt: "Ku ƙara jerin log a agent ɗinku ku rubuta kowane mataki. Ku gudanar da shi, sannan ku buga log ɗin a matsayin tebur mai kyau: mataki, tool, abin shigarwa, sakamako.",
          youCanNow: "sarrafa ƙwaƙwalwar agent da ajiye rajistar aiki da za ku iya karantawa.",
          quickCheck: [
            { objective: "O4", q: "Mece ce ƙwaƙwalwar ɗan lokaci a cikin agent ɗinku?", options: ["Fayil da aka ajiye har abada", "Bayanan horon model", "Jerin history na wannan aikin", "Dictionary na bayanai"], answer: 2, why: "Ƙwaƙwalwar ɗan lokaci ita ce history da agent ke riƙewa a cikin aiki ɗaya." },
            { objective: "O4", q: "Agent ya ba da amsa mai ban mamaki kuma kuna son sanin dalili. Me za ku duba?", options: ["Amsar ƙarshe kawai", "API key", "Bayanan tools kawai", "Rajistar aiki ta kowane mataki"], answer: 3, why: "Rajistar tana nuna kowace amsa, tool, abin shigarwa da sakamako, don ku ga inda aka yi kuskure." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Iyakar matakai, amsoshi marasa kyau da kurakurai",
          minutes: 6,
          goal: "Ƙara iyakar matakai da sarrafa amsoshi marasa kyau daga model da kurakuran tools.",
          text: [
            "Kowane zagaye yana buƙatar iyaka: MAX_STEPS = 6 da for step in range(MAX_STEPS): maimakon zagaye da ke tafiya har abada. Idan ya kai iyakar ba tare da amsar ƙarshe ba, ku tsaya ku ba da rahoton \"Stopped: step limit reached\" tare da rajistar.",
            "Amsoshi marasa kyau suna faruwa: ƙarin kalmomi a kewayen JSON, maɓalli (key) da ya ɓace, amsa marar komai. Ku karanta (parse) a cikin try da except. Idan an kasa, ku ƙara \"Your last reply was not valid JSON. Reply with only JSON.\" a history ku bar mataki na gaba ya sake gwadawa. Ku ƙirga waɗannan; idan aka sami biyu a jere, ku tsaya.",
            "Tools ma suna kasawa: calculator ya karɓi haruffa, fayil ya ɓace. Kowane tool ya kamata ya kama kurakuransa ya mayar da saƙo a sarari kamar \"calculator error: only numbers and + - * / allowed\". Sai model ya gyara abin shigarwarsa a mataki na gaba."
          ],
          steps: ["Ku saita MAX_STEPS ku yi zagaye da range(MAX_STEPS).", "Ku karanta amsoshi a cikin try / except.", "Idan amsa ba ta yi kyau ba, ku faɗa wa model ku ci gaba.", "Ku tsaya bayan amsoshi marasa kyau biyu a jere.", "Ku sa kowane tool ya mayar da saƙon kuskure a sarari maimakon ya rushe."],
          words: [["Iyakar matakai (step limit)", "mafi yawan matakan da agent zai iya ɗauka a aiki ɗaya."], ["Exception", "kuskure da ke faruwa yayin da shiri ke aiki; try / except yana kama shi."]],
          slides: [
            { title: "Koyaushe ku saita iyaka", bullets: ["MAX_STEPS = 6", "for step in range(MAX_STEPS):", "A iyakar: ku tsaya ku ba da rahoto"] },
            { title: "Amsoshi marasa kyau daga model", bullets: ["Ku karanta a cikin try / except", "Ku faɗa wa model: ka amsa da JSON kawai", "Amsoshi marasa kyau biyu a jere: ku tsaya"] },
            { title: "Kurakuran tools", bullets: ["Kowane tool yana kama kurakuransa", "Ku mayar da saƙon kuskure a sarari", "Model yana gyara abin shigarwa a mataki na gaba"] }
          ],
          tryIt: "Ku gwada code ɗinku na tsaro: na ɗan lokaci, ku sa ask_model ya mayar da \"hello\" a mataki na 2, ku aika wa calculator abin shigarwa 'abc'. Ku duba cewa agent ya farfaɗo, kuma yana tsayawa a iyakar matakai idan kuka saita MAX_STEPS = 2.",
          youCanNow: "hana agent yin zagaye har abada da taimaka masa ya farfaɗo daga amsoshi marasa kyau da kurakuran tools.",
          quickCheck: [
            { objective: "O5", q: "Me MAX_STEPS ke yi?", options: ["Yana saita iyakar matakan da agent zai iya ɗauka", "Yana sa model ya amsa da sauri", "Yana iyakance tools nawa za ku iya rubutawa", "Yana saita tsawon rajistar"], answer: 0, why: "Iyakar matakai tana tsayar da aikin da zai iya ci gaba ba ƙarewa." },
            { objective: "O5", q: "Model ya amsa \"hello\" maimakon JSON a mataki ɗaya. Me agent ɗinku ya kamata ya yi?", options: ["Ya rushe", "Ya ɗauki \"hello\" a matsayin amsar ƙarshe", "Ya faɗa wa model ya amsa da JSON kawai ya ci gaba", "Ya sake fara dukkan aikin daga mataki na 1"], answer: 2, why: "Ana iya farfaɗowa daga amsa marar kyau ɗaya; agent yana tsayawa ne bayan amsoshi marasa kyau da suka maimaita." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Frameworks, da kammala agent ɗinku na farko",
          minutes: 6,
          goal: "Kammala da gwada agent ɗinku, da sanin lokacin da framework zai taimaka.",
          text: [
            "Frameworks na agents libraries ne da ke ba ku zagaye, sarrafa tools da ƙwaƙwalwa a shirye. Sanannu sun haɗa da LangGraph, CrewAI, OpenAI Agents SDK da Agent Development Kit na Google, kuma masu samar da models da yawa suna da native tool calling, inda model ke mayar muku da buƙatar tool a tsararren tsari. Suna canjawa sau da yawa, don haka ku karanta takardun bayanin kowane aiki (documentation) don saitin zamani.",
            "Gina zagayen da kanku da farko yana nufin kun fahimci abin da framework ke yi muku, kuma za ku iya gyara shi idan ya lalace. Yawancin agents na gaske har yanzu zagaye ne mai sauƙi kamar naku.",
            "Kafin ku ce agent ɗinku ya kammala, ku gwada shi kamar a kwas na 2: manufofi uku da ya kamata ya kammala, ɗaya da ba zai iya ba (ya kamata ya faɗi haka, ba ya ƙirƙiri amsa ba), da abin shigarwa marar kyau ɗaya. Ku karanta rajistar kowane aiki."
          ],
          steps: ["Ku gudanar da agent ɗin da manufofi uku da ya kamata ya kammala.", "Ku gudanar da manufa ɗaya da ba zai iya kammalawa ba: ya kamata ya faɗi haka.", "Ku gudanar da abin shigarwa marar kyau ɗaya.", "Ku karanta rajistar kowane aiki.", "Ku gyara rauni ɗaya ku sake gudanar da dukkan biyar ɗin."],
          words: [["Framework", "library da aka shirya da ke sarrafa sassan shiri na yau da kullum a madadinku."], ["Native tool calling", "fasalin model inda model ke mayar da buƙata a tsararren tsari don amfani da tool."]],
          slides: [
            { title: "Frameworks na agents", bullets: ["Zagaye, tools da ƙwaƙwalwa a shirye", "LangGraph, CrewAI, OpenAI Agents SDK, Google ADK", "Suna canjawa sau da yawa: ku karanta takardunsu"] },
            { title: "Me yasa za a gina shi da hannu da farko", bullets: ["Kuna fahimtar abin da framework ke yi", "Kuna iya gyara shi", "Yawancin agents na gaske zagaye ne mai sauƙi"] },
            { title: "Ku gwada kafin ku ce ya kammala", bullets: ["Manufofi uku da ya kamata ya kammala", "Ɗaya da ba zai iya ba: ya kamata ya faɗi haka", "Abin shigarwa marar kyau ɗaya; ku karanta kowace rajista"] }
          ],
          tryIt: "Aikin ƙarshe: ku kammala agent ɗinku mai tools biyu kan manufar awoyin karatu, da iyakar matakai 6, amsa marar kyau ɗaya da aka farfaɗo daga ita, da rajistar kowane mataki da aka buga. Sannan ku gudanar da gwaje-gwaje biyar na sama ku rubuta jimloli biyu kan abin da kuka gyara.",
          youCanNow: "gina, gwada da bayyana AI agent mai aiki a Python mai sauƙi.",
          quickCheck: [
            { objective: "O6", q: "Mene ne framework na agent?", options: ["Doka da ke hana tools", "Zagaye, tools da ƙwaƙwalwa a shirye da za ku iya amfani da su maimakon rubuta naku", "Model kyauta", "Wani nau'in API key"], answer: 1, why: "Frameworks suna haɗa sassan da kuka gina da hannu a wannan kwas." },
            { objective: "O6", q: "Kun ba agent ɗinku manufa da ba zai iya kaiwa da tools ɗinsa ba. Me agent nagari ya kamata ya yi?", options: ["Ya faɗi cewa ba zai iya kammalawa ba ya nuna abin da ya gwada", "Ya ƙirƙiri amsa da take kama da daidai", "Ya ci gaba da aiki har abada", "Ya kira tool da babu shi"], answer: 0, why: "Agent mai gaskiya yana ba da rahoton abin da bai iya yi ba maimakon ya ƙirƙiri wani abu." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Sa agent ya zama amintacce",
        questions: [
          { objective: "O4", q: "Me yasa za a taƙaita tsofaffin matakai a dogon aiki?", options: ["Model ba ya mantawa da komai ko ta yaya", "Yana ɓoye kurakurai", "Python ba zai iya riƙe dogayen jeri ba", "Dogon history yana cin tokens da lokaci"], answer: 3, why: "Ana aika duk abin da ke cikin history a kowane mataki." },
          { objective: "O4", q: "Don wane ne rajistar aiki da farko?", options: ["Don ku, don ku ga dalilin da yasa agent ya yi abin da ya yi", "Don model", "Don provider na API", "Don sauran masu amfani"], answer: 0, why: "Rajistar don dubawa da gyara kurakurai ce." },
          { objective: "O5", q: "Me ya kamata ya faru idan agent ya kai MAX_STEPS ba tare da amsar ƙarshe ba?", options: ["Ya ci gaba duk da haka", "Ya ƙirƙiri amsar ƙarshe", "Ya tsaya ya ba da rahoton cewa an kai iyakar", "Ya goge rajistar"], answer: 2, why: "A ba da rahoto da gaskiya a nuna rajistar." },
          { objective: "O5", q: "Calculator ya karɓi abin shigarwa 'abc'. Tool da aka gina da kyau:", options: ["Yana rushe dukkan agent", "Yana goge notebook", "Yana mayar da sifili a ɓoye", "Yana mayar da saƙon kuskure a sarari da model zai iya amfani da shi"], answer: 3, why: "Saƙonnin kuskure a sarari suna bar model ya gyara abin shigarwarsa." },
          { objective: "O6", q: "Wane ne gwaji mai kyau kafin a ce agent ya kammala?", options: ["Manufofin da tabbas zai kammala kawai", "Babu gwaji, a fitar da shi kawai", "Manufa da ba zai iya kammalawa ba, don a ga ko zai faɗi haka", "Gudanar da shi sau ɗaya"], answer: 2, why: "\"Ba zan iya ba\" na gaskiya ya fi amsar da aka ƙirƙira." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Gina AI Agents (Wakilan AI)",
    questions: [
      { objective: "O1", q: "Ga agent, tool shi ne:", options: ["Shafin intanet", "Function da code ɗinku ke gudanarwa idan model ya nema", "Model ɗin kansa", "Kalmar sirri"], answer: 1, why: "Tools functions ne; model yana faɗin sunayensu ne kawai." },
      { objective: "O1", q: "Wane irin tool ne ya fi aminci don farawa?", options: ["Tool mai duba bayanai da ke karantawa kawai", "Tool mai goge fayil", "Tool na biyan kuɗi", "Tool mai aika imel"], answer: 0, why: "Tools masu karantawa kawai ba sa canja komai." },
      { objective: "O1", q: "TOOLS = {'calculator': calculator} yana bar zagayen ya:", options: ["Nemo tool da sunansa", "Tsallake model", "Ajiye API key", "Sa model ya yi sauri"], answer: 0, why: "Dictionary yana haɗa sunaye da functions." },
      { objective: "O1", q: "Tool ya kamata ya duba abin da aka shigar saboda:", options: ["Python yana buƙatar haka", "Model yana iya aika abu marar aminci ko marar daidai", "Yana adana tokens", "Yana ɓoye sakamakon"], answer: 1, why: "Kada ku taɓa amincewa da abin da model ya fitar ba tare da dubawa ba." },
      { objective: "O2", q: "Wace amsa ce ke nufin agent yana son amfani da tool?", options: ["{\"final\": \"done\"}", "\"hello\"", "{\"tool\": \"calculator\", \"input\": \"2+2\"}", "Amsa marar komai"], answer: 2, why: "Siffar tool tana faɗin sunan tool da abin shigarwa." },
      { objective: "O2", q: "Ƙa'ida da ke taimakon gaskiya a cikin system prompt ita ce:", options: ["\"Ka yi watsi da kasawa.\"", "\"Koyaushe ka amsa a mataki ɗaya.\"", "\"Ka yi amfani da kowane tool da kake so.\"", "\"Kada ka taɓa ƙirƙirar sakamakon tool.\""], answer: 3, why: "Sakamakon da aka ƙirƙira kasawa ce da agents ke yawan yi." },
      { objective: "O2", q: "ask_model(text) yana da amfani saboda:", options: ["Yana bayyana keys a fili", "Yana gudanar da tools", "Yana ajiye bayanan provider a wuri ɗaya", "Yana cire zagayen"], answer: 2, why: "Canja provider yana canja wannan function ɗin kawai." },
      { objective: "O3", q: "Mayar da sakamakon tool a cikin history shi ne:", options: ["Matakin lura (observe)", "Matakin tunani (think)", "Abin da ke farawa (trigger)", "Amsar ƙarshe"], answer: 0, why: "Lura da sakamako yana bar model ya zaɓi mataki na gaba." },
      { objective: "O3", q: "Ba tare da mayar da sakamako ba, agent zai fi yiwuwa ya:", options: ["Kammala da sauri", "Rubuta JSON mafi kyau", "Zama mai rahusa", "Maimaita mataki ɗaya"], answer: 3, why: "Ba zai taɓa sanin abin da ya faru ba." },
      { objective: "O3", q: "Model ya faɗi sunan tool da ba a sani ba. Zagayen ya kamata ya:", options: ["Rushe", "Faɗa wa model sunayen tools masu inganci ya ci gaba", "Saka sabon tool da kansa", "Ba shi cikakken iko a kwamfuta"], answer: 1, why: "Saƙo a sarari yana taimaka wa agent ya farfaɗo." },
      { objective: "O4", q: "Ƙwaƙwalwar ɗan lokaci a cikin agent ɗinku ita ce:", options: ["Fayil da aka ajiye har abada", "Jerin history na wannan aikin", "Asusunku na Google", "Bayanan horon model"], answer: 1, why: "History shi ne abin da model ke gani a wannan aikin." },
      { objective: "O4", q: "Ƙwaƙwalwar dogon lokaci ya kamata ta ajiye:", options: ["Komai, har da bayanan sirri", "Babu komai har abada", "API key ɗinku", "Abin da agent ke buƙata a gaba kawai"], answer: 3, why: "Ku ajiye abin da ake buƙata kawai; ku guji bayanan sirri." },
      { objective: "O4", q: "Rajistar aiki mai kyau tana rubuta:", options: ["Mataki, ainihin amsa, tool, abin shigarwa da sakamako", "Amsar ƙarshe kawai", "Kalmar sirrinku", "Babu komai"], answer: 0, why: "Cikakkun matakai suna bar ku ku ga dalilin da yasa abubuwa suka faru." },
      { objective: "O5", q: "for step in range(MAX_STEPS): yana ba agent:", options: ["Matakai marasa iyaka", "Ƙarin tools", "Iyakar matakai", "Model mai sauri"], answer: 2, why: "Zagayen ba zai iya tafiya har abada ba." },
      { objective: "O5", q: "Model ya amsa da kalmomi a kewayen JSON. Agent nagari:", options: ["Yana kashe iyakar matakai", "Yana rushewa", "Yana karɓar kalmomin a matsayin amsa", "Yana faɗa wa model ya amsa da JSON kawai ya ci gaba"], answer: 3, why: "A farfaɗo sau ɗaya, a tsaya bayan kasawa da suka maimaita." },
      { objective: "O5", q: "Yaushe ya kamata agent ya tsaya bayan amsoshi marasa kyau?", options: ["Ba zai taɓa tsayawa ba", "Bayan kalma ta farko", "Bayan biyu a jere", "Sai kwamfuta ta mutu kawai"], answer: 2, why: "Kasawa da suka maimaita suna nufin akwai matsala." },
      { objective: "O6", q: "Frameworks na agents:", options: ["Ba sa taɓa canjawa", "Suna ba da zagaye, tools da ƙwaƙwalwa a shirye", "Suna cire buƙatar kowane gwaji", "Ana buƙatar su ga kowane agent"], answer: 1, why: "Suna taimakawa, amma suna canjawa sau da yawa kuma har yanzu suna buƙatar gwaji." },
      { objective: "O6", q: "Native tool calling yana nufin:", options: ["Model yana mayar da buƙata a tsararren tsari don amfani da tool", "Model yana gudanar da code a kwamfutarku da kansa", "Kuna rubuta tools da hannu", "Tools suna aiki ba tare da code ba"], answer: 0, why: "Provider yana mayar da kiran tool a tsararren tsari da code ɗinku ke gudanarwa." },
      { objective: "O6", q: "Me yasa za a gina zagayen da hannu da farko?", options: ["Kuna fahimta kuma kuna iya gyara abin da framework ke yi", "Frameworks haramun ne", "Koyaushe ya fi sauri", "Models suna buƙatar haka"], answer: 0, why: "Sanin sassan yana sa gyaran kurakurai ya yiwu." },
      { objective: "O6", q: "Idan aka ba shi manufa da ba zai iya kaiwa ba, agent nagari:", options: ["Yana ƙirƙirar amsa", "Yana faɗin cewa ba zai iya ba kuma yana nuna abin da ya gwada", "Yana zagaye har abada", "Yana goge rajistarsa"], answer: 1, why: "Kasawa ta gaskiya ta fi amsar da aka ƙirƙira." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 3, 4, 6, 7, 9, 12, 13, 15, 18] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Tools biyu masu aiki", objective: "O1", notYet: "Wani tool ya ɓace, yana rushewa, ko ba shi da bayani.", meets: "Dukkan tools biyu suna aiki, suna da sunaye da bayanai a sarari, kuma suna duba abin da aka shigar.", exceeds: "Tools suna mayar da saƙonnin kuskure a sarari da model zai iya amfani da su." },
      { name: "Matakai a JSON", objective: "O2", notYet: "Model yana amsa da rubutu kawai da zagayen ba zai iya karantawa ba.", meets: "Model yana zaɓar tools da amsar ƙarshe a JSON.", exceeds: "Prompt ɗin kuma yana faɗa wa model kada ya taɓa ƙirƙirar sakamakon tool." },
      { name: "Zagaye yana mayar da sakamako", objective: "O3", notYet: "Ba a mayar da sakamakon tools, ko zagayen ba ya ƙarewa.", meets: "Zagayen yana gudanar da tool ɗin da aka zaɓa, yana mayar da sakamakon, kuma yana tsayawa a amsar ƙarshe.", exceeds: "Ana sarrafa sunayen tools da ba a sani ba ta hanyar faɗa wa model waɗanne tools ne akwai." },
      { name: "Iyakokin tsaro", objective: "O5", notYet: "Babu iyakar matakai, ko amsa marar kyau tana rushe agent.", meets: "Yana tsayawa a iyakar matakai 6 kuma yana farfaɗowa daga amsa marar kyau ɗaya daga model.", exceeds: "Yana kuma sarrafa kuskuren tool kuma yana tsayawa bayan amsoshi marasa kyau biyu a jere." },
      { name: "Rajistar aiki", objective: "O4", notYet: "Babu rajista, ko wasu matakai sun ɓace daga cikinta.", meets: "Yana buga rajistar kowane mataki.", exceeds: "Rajistar tebur ce mai kyau da wani mutum zai iya karantawa don bayyana aikin." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka ci gaba zuwa kwas na 4 na shirin agents cikin kwanaki 30",
      "Masu koyo da suka ce sun gina ko sun daidaita agent don aiki na gaske cikin kwanaki 30 (binciken biyo baya)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta mai burauzar intanet da intanet",
      "Asusun Google kyauta don Google Colab",
      "API key na model daga kwas na 2 (matakin kyauta na Gemini API) ko model na gida kyauta da Ollama",
      "Katin tsari da prompt da aka gwada daga kwas na 1 da na 2",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku yi gwajin farko tare, sannan ku gina zagayen darasi ɗaya a lokaci ɗaya, kowa yana gudanar da code a lokacin.",
      "Ku duba cewa an ajiye API keys a matsayin secrets kuma ba a taɓa nuna su a allon da ake rabawa ba.",
      "Ku sa tools na atisaye su zama masu karantawa kawai, ku yi amfani da bayanan ƙirƙira, ba bayanan sirri ko na abokan ciniki ba.",
      "Idan agent ya yi abin da bai dace ba, ku nemi masu koyo su karanta rajistar aikinsu da babbar murya kafin su canja code.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku nemi kowane mai koyo ya nuna amsa marar kyau da aka farfaɗo daga ita a rajistarsa."
    ]
  }
};
