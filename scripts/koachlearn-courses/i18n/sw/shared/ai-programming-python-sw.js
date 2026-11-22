"use strict";

// Koach Learn course (Swahili translation of shared/ai-programming-python.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const COLAB = { name: "Google Colab: Maswali Yanayoulizwa Mara kwa Mara", url: "https://research.google.com/colaboratory/faq.html" };
const HF_PIPELINES = { name: "Hugging Face Transformers: Pipelines", url: "https://huggingface.co/docs/transformers/en/main_classes/pipelines" };
const HF_MODEL = { name: "Hugging Face: kadi ya modeli distilbert-base-uncased-finetuned-sst-2-english", url: "https://huggingface.co/distilbert/distilbert-base-uncased-finetuned-sst-2-english" };

module.exports = {
  id: "ai-programming-python-sw",
  lang: "sw",
  translationOf: "ai-programming-python",
  category: "Youth",
  name: "Kuandika Programu za AI kwa Python kwa Wanaoanza",
  skills: "Kutumia maktaba za Python katika Colab, Kujenga chatbot ya kanuni, Kupakia modeli ya AI iliyofunzwa tayari, Kuendesha AI juu ya maandishi mengi, Kukagua majibu ya AI",
  outcome: "kuandika programu ya Python katika Google Colab inayotumia modeli ya AI ya bure iliyofunzwa tayari kupanga orodha ya maoni yaliyoandikwa kuwa chanya na hasi, kuonyesha muhtasari, na kuweka alama kwenye majibu ambayo AI haina uhakika nayo ili mtu ayakague.",
  about: [
    "Kozi hii ni kwa wanaoanza wanaojua Python kidogo (vigezo, if, orodha na vitanzi) na wanaotaka kutengeneza programu inayotumia AI. Kama hujawahi kuandika code, anza na kozi \"Utangulizi wa Kuandika Programu kwa Python\".",
    "Utaanza kwa kujenga chatbot rahisi kwa kanuni za kawaida za Python, ili uone programu inaweza kufanya nini bila AI. Kisha utapakia modeli ya AI ya bure iliyofunzwa tayari kutoka Hugging Face na kuitumia kusoma hisia za maoni yaliyoandikwa. Ni zana ya aina ileile ambayo makampuni hutumia kwa maoni ya wateja na tafiti.",
    "Kila kitu kinaendeshwa katika Google Colab kwenye kivinjari chako, bure. Kila somo linachukua kama dakika tano na linaisha kwa code unayoandika mwenyewe. Jaribio la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Jenga kipanga maoni katika Google Colab: andika orodha ya angalau maoni sita mafupi kwa Kiingereza (kwa mfano kutoka mazoezi ya timu, darasa au duka dogo), endesha modeli ya hisia iliyofunzwa tayari juu ya kila moja, onyesha kila maoni pamoja na lebo na alama yake, weka \"check by hand\" (kagua kwa mkono) kwa kila jibu lenye alama chini ya 0.80, na uonyeshe maoni mangapi yalikuwa chanya na mangapi hasi.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Vijana na watu wazima walioandika Python kidogo na wanaotaka kujenga kitu kwa AI: wanafunzi wa sekondari na chuo, wanachama wa klabu za code, watu wanaobadilisha kazi na wanafunzi wa mafunzo ya kazi.",
    startingPoint: "Wanaweza kuandika na kuendesha programu fupi za Python katika Google Colab kwa vigezo, if, orodha, vitanzi na function. Wengi hawajawahi kupakia maktaba ya AI, kutumia modeli iliyofunzwa tayari, wala kufikiria modeli ina uhakika kiasi gani au lini mtu anapaswa kukagua majibu yake.",
    gap: "Zana za AI sasa ziko ndani ya kazi na bidhaa nyingi, na waajiri wanathamini watu wanaoweza kuzitumia katika code na kuzikagua kwa uwajibikaji. Bila mazoezi ya vitendo, wanafunzi hufikiri AI ni uchawi au iko mbali nao, na hawajifunzi kupima mipaka ya modeli wala kulinda data binafsi.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; maneno kama maktaba, modeli, alama na kiwango cha mpaka yanaelezwa",
      "Vifaa: kompyuta au laptop yenye kivinjari cha wavuti; tableti ni ngumu kwa kuandika code",
      "Akaunti na gharama: akaunti ya Google ya bure kwa Google Colab na modeli za bure za Hugging Face; rasilimali za bure za Colab zina kikomo na zinaweza kubadilika",
      "Muda: kama dakika 5 hadi 6 kwa somo pamoja na mazoezi, kama dakika 60 hadi 75 kwa jumla",
      "Faragha: wanafunzi wanatumia maoni ya kubuni au waliyoruhusiwa, na kamwe hawabandiki nenosiri au API key katika notebook wanayoshirikiana"
    ],
    prerequisites: "Utangulizi wa Kuandika Programu kwa Python (vigezo, if, orodha, vitanzi na function)."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Katika Google Colab", action: "kueleza jinsi modeli ya AI inavyotofautiana na code ya kanuni, na kupakia au kusakinisha maktaba ya Python", standard: "kwa maelezo sahihi ya sentensi moja na maktaba ikipakia bila makosa" },
    { id: "O2", condition: "Ukipewa maneno muhimu na majibu ya chatbot rahisi", action: "kutumia zana za string na dictionary kuoanisha ujumbe na jibu sahihi", standard: "ikioanisha bila kujali herufi kubwa na kutoa jibu la kawaida wakati hakuna kinacholingana" },
    { id: "O3", condition: "Ukipewa function yako ya majibu", action: "kuandika kitanzi cha mazungumzo kinachoisha mtumiaji akisema bye, na kueleza mipaka ya majibu ya kanuni", standard: "kitanzi kikitoka kwa bye na angalau mfano mmoja ambao kanuni haziwezi kushughulikia" },
    { id: "O4", condition: "Ukitumia pipeline ya Hugging Face", action: "kupakia modeli ya hisia iliyofunzwa tayari, kuiendesha juu ya sentensi na kusoma lebo na alama yake", standard: "baada ya kusoma kadi ya modeli, lebo na alama zikisomwa kwa usahihi" },
    { id: "O5", condition: "Ukipewa orodha ya maoni", action: "kuendesha modeli juu ya kila maoni kwa kitanzi, kuhesabu lebo na kuonyesha muhtasari nadhifu", standard: "hesabu zikilingana na lebo na alama zikizungushwa hadi desimali mbili" },
    { id: "O6", condition: "Ukipewa majibu ya modeli", action: "kuweka alama kwenye majibu yaliyo chini ya kiwango cha uhakika ili mtu ayakague, na kufuata tabia za kutumia AI kwa uwajibikaji", standard: "kila alama iliyo chini ya kiwango ikiwekwa \"check by hand\" na bila data binafsi wala funguo katika notebook" }
  ],
  chapters: [
    {
      name: "Sura 1: Misingi ya Python kwa ajili ya AI",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kuandika programu za AI ni nini, na kuandaa Colab",
          minutes: 5,
          goal: "Eleza modeli ya AI ni nini na upakie maktaba ya Python katika Colab.",
          text: [
            "Programu ya kawaida inamaanisha unaandika kila kanuni wewe mwenyewe: kama neno ni \"hi\", sema \"hello\". Programu ya AI inamaanisha unatumia modeli: programu iliyojifunza mifumo kutoka kwa mifano mingi, kwa hiyo inaweza kushughulikia hali ambazo hukuwahi kuziandikia kanuni.",
            "Mara chache unajenga modeli kuanzia sifuri. Unatumia maktaba (library): code iliyo tayari ambayo mtu mwingine aliandika na kuishiriki. Katika Python unapakia maktaba kwa import. Maktaba maarufu za bure za AI ni Hugging Face Transformers (modeli za lugha), scikit-learn (machine learning ya kawaida) na PyTorch (deep learning).",
            "Google Colab tayari ina nyingi ya maktaba hizi. Kama moja haipo, unaisakinisha katika kisanduku kwa !pip install ikifuatwa na jina lake. Alama ! inaiambia Colab iendeshe amri ya mfumo badala ya Python. Colab ni bure, lakini kompyuta zake zinashirikiwa, kwa hiyo rasilimali za bure zina kikomo na zinaweza kubadilika."
          ],
          steps: ["Fungua colab.research.google.com na utengeneze notebook mpya.", "Katika kisanduku, andika: import random", "Mstari unaofuata: print(random.choice([\"rock\", \"paper\", \"scissors\"]))", "Iendeshe mara kadhaa na uangalie jibu likibadilika.", "Kama import itashindwa na \"No module named\", endesha !pip install <jina> katika kisanduku, kisha ujaribu tena."],
          words: [["Modeli ya AI", "programu iliyojifunza mifumo kutoka kwa mifano mingi na inaweza kukisia juu ya data mpya."], ["Maktaba (library)", "code iliyo tayari unayoweza kupakia na kuitumia katika programu yako."], ["import", "neno la Python linalopakia maktaba."], ["pip", "zana inayosakinisha maktaba za Python."], ["Ya kanuni (rule-based)", "programu ambayo mtu aliandika kila kanuni kwa mkono."]],
          slides: [
            { title: "Kanuni dhidi ya modeli", bullets: ["Ya kanuni: unaandika kila kanuni", "Modeli ya AI: ilijifunza mifumo kutoka kwa mifano", "Modeli zinashughulikia hali ambazo hukuziandika"] },
            { title: "Maktaba zinafanya kazi nzito", bullets: ["import inapakia code iliyo tayari", "Transformers, scikit-learn, PyTorch", "Zote ni bure kutumia"] },
            { title: "Kuandaa Colab", bullets: ["Maktaba nyingi tayari zimesakinishwa", "Moja haipo? !pip install <jina>", "Rasilimali za bure zina kikomo na zinaweza kubadilika"] }
          ],
          sources: [COLAB],
          tryIt: "Katika notebook mpya ya Colab, pakia maktaba ya random na uandike programu inayochagua kwa bahati zoezi, kitafunio au mada ya kusoma kutoka orodha ya vitu vitano na kukionyesha. Iendeshe mara tatu.",
          youCanNow: "kueleza tofauti kati ya code ya kanuni na modeli ya AI, na kupakia maktaba katika Colab.",
          quickCheck: [
            { objective: "O1", q: "Maktaba (library) katika Python ni nini?", options: ["Orodha ya notebook zako zilizohifadhiwa", "Folda ya Google Drive", "Code iliyo tayari ambayo mtu mwingine aliandika na kuishiriki", "Ujumbe wa kosa"], answer: 2, why: "Maktaba ni code iliyo tayari na iliyoshirikiwa unayoipakia kwa import." },
            { objective: "O1", q: "Unataka kutumia scikit-learn lakini huna uhakika kama Colab inayo. Ungejaribu nini kwanza?", options: ["Kuendesha import sklearn, na ikisema \"No module named\", kuendesha !pip install scikit-learn", "Kuiandika maktaba upya wewe mwenyewe", "Kufuta notebook", "Kuandika jina la maktaba ndani ya print()"], answer: 0, why: "Colab tayari ina maktaba nyingi; sakinisha kwa !pip ikiwa import imeshindwa tu." }
          ]
        },
        {
          objectives: ["O2"],
          title: "String na dictionary: ubongo wa chatbot rahisi",
          minutes: 6,
          goal: "Tumia dictionary kuoanisha maneno muhimu katika ujumbe na majibu.",
          text: [
            "Programu za AI hufanya kazi na maandishi mengi, kwa hiyo unahitaji zana chache za string. message.lower() inafanya maandishi kuwa herufi ndogo, ili \"HELLO\" na \"hello\" zilingane. \"hours\" in message ni True kama neno hilo liko popote katika ujumbe. message.split() inavunja sentensi kuwa orodha ya maneno.",
            "Dictionary inahifadhi jozi: ufunguo (key) na thamani (value), ndani ya mabano ya maua. replies = {\"hours\": \"We are open 9 to 5.\", \"price\": \"Prices are on our menu page.\"} Unapata thamani kwa replies[\"hours\"].",
            "Ili kujenga ubongo wa chatbot, pitia dictionary kwa kitanzi: for keyword, answer in replies.items(): if keyword in message: return answer. Kama hakuna kinacholingana, rudisha jibu la kawaida kama \"Sorry, I do not know that yet.\""
          ],
          steps: ["Tengeneza dictionary ya maneno muhimu na majibu.", "Andika function reply(message).", "Ndani yake, weka message = message.lower().", "Pitia replies.items() kwa kitanzi na urudishe jibu la neno muhimu la kwanza linalopatikana.", "Baada ya kitanzi, rudisha jibu la kawaida."],
          words: [["String", "maandishi katika Python."], ["Dictionary", "kundi la jozi za key: value ndani ya mabano ya maua."], ["Ufunguo (key)", "lebo unayoitafuta katika dictionary."], ["Thamani (value)", "kile kilichohifadhiwa chini ya ufunguo."], [".items()", "inatoa kila ufunguo na thamani katika dictionary, kwa ajili ya kitanzi."]],
          slides: [
            { title: "Zana za maandishi", bullets: ["lower(): \"HELLO\" inakuwa \"hello\"", "\"hours\" in message: True au False", "split(): sentensi inakuwa orodha ya maneno"] },
            { title: "Dictionary", bullets: ["{\"hours\": \"Open 9 to 5.\"}", "Tafuta kwa replies[\"hours\"]", "Funguo upande wa kushoto, thamani upande wa kulia"] },
            { title: "Ubongo wa chatbot", bullets: ["Fanya ujumbe kuwa herufi ndogo", "Pitia replies.items() kwa kitanzi", "Rudisha jibu la kwanza linalolingana, au la kawaida"] }
          ],
          tryIt: "Andika reply(message) kwa gym, maktaba au gari la chakula la kubuni lenye angalau maneno muhimu manne (kwa mfano hours, price, location, contact). Ijaribu kwa jumbe tatu, ukiwemo mmoja ulioandikwa kwa herufi kubwa na mmoja ambao haipaswi kuuelewa.",
          youCanNow: "kutumia zana za string na dictionary kuoanisha ujumbe na jibu sahihi.",
          quickCheck: [
            { objective: "O2", q: "\"I need help now\".split() inatoa nini?", options: ["\"i need help now\"", "[\"I\", \"need\", \"help\", \"now\"]", "True", "4"], answer: 1, why: "split() inavunja sentensi kuwa orodha ya maneno." },
            { objective: "O2", q: "Chatbot yako haipati neno muhimu lolote katika ujumbe. Ungeifanya ifanye nini?", options: ["Ikwame kwa kosa", "Ionyeshe kila jibu lililo katika dictionary", "Isimamishe programu", "Irudishe jibu la kawaida kama \"Sorry, I do not know that yet.\""], answer: 3, why: "Jibu la kawaida linashughulikia jumbe zisizolingana na neno muhimu lolote." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kuifanya chatbot iongee, na kuona mipaka yake",
          minutes: 5,
          goal: "Weka function yako ya majibu katika kitanzi kinachozungumza hadi mtumiaji aseme bye, na utambue kile ambacho kanuni haziwezi kufanya.",
          text: [
            "Chatbot inahitaji kitanzi: uliza ujumbe, onyesha jibu, na urudie. while True: inarudia milele, kwa hiyo unaongeza njia ya kutoka: kama ujumbe ni \"bye\", onyesha kwaheri na utumie break kutoka kwenye kitanzi.",
            "Sasa ijaribu kama mtumiaji halisi angefanya. Andika \"when do you open?\" na boti yako inaweza kushindwa, kwa sababu uliandika \"hours\", si \"open\". Kila njia mpya ya kusema kitu inahitaji kanuni mpya. Huo ndio mpaka mkuu wa programu za kanuni.",
            "Ndiyo sababu modeli za AI zinafaa: modeli ya lugha ilijifunza kutoka kwa mamilioni ya sentensi, kwa hiyo inaweza kuelewa njia nyingi za kusema jambo moja. Katika sura inayofuata utatumia moja."
          ],
          steps: ["Anza na while True:", "Ndani yake, pata message = input(\"You: \")", "Kama message.lower() == \"bye\", onyesha kwaheri na utumie break.", "Vinginevyo print(\"Bot:\", reply(message)).", "Jaribu kwa njia tano tofauti za kuuliza swali lilelile."],
          words: [["while True", "kitanzi kinachoendelea hadi kitu ndani yake kikisimamishe."], ["break", "inatoka kwenye kitanzi mara moja."], ["Mpaka (limit)", "kitu ambacho programu haiwezi kufanya vizuri."]],
          slides: [
            { title: "Kitanzi cha mazungumzo", bullets: ["while True: inaendelea kuzungumza", "input() inapata ujumbe", "break inamaliza mazungumzo kwa \"bye\""] },
            { title: "Jaribu kama mtumiaji halisi", bullets: ["Uliza jambo moja kwa njia tano", "Hesabu boti inapata ngapi sawa"] },
            { title: "Kwa nini kanuni zinakwama", bullets: ["Kila njia mpya ya kusema inahitaji kanuni mpya", "Modeli za AI zilijifunza kutoka mamilioni ya sentensi", "Hicho ndicho Sura 2 inatumia"] }
          ],
          tryIt: "Weka function yako ya majibu kutoka Somo 2 ndani ya kitanzi cha mazungumzo kinachoisha kwa \"bye\". Uliza kuhusu saa za kufungua kwa njia tano tofauti. Andika boti yako ilielewa ngapi, kisha ongeza kanuni moja kurekebisha moja iliyokosa.",
          youCanNow: "kujenga kitanzi cha chatbot ya kanuni kinachofanya kazi na kueleza kwa nini kanuni peke yake zina mipaka.",
          quickCheck: [
            { objective: "O3", q: "while True: inafanya nini yenyewe?", options: ["Inarudia milele hadi kitu kama break kiisimamishe", "Inaendeshwa mara moja tu", "Inaendeshwa tu mtumiaji akisema bye", "Inapakia maktaba"], answer: 0, why: "while True inarudia milele, kwa hiyo unahitaji njia ya kutoka kama break." },
            { objective: "O3", q: "Watumiaji wanaendelea kuandika \"what time do you close?\" na boti yako ya kanuni inashindwa. Hilo lingekuambia nini?", options: ["Boti ina kosa la kuandika", "Colab imeharibika", "Kila njia mpya ya kusema kitu inahitaji kanuni mpya, na huo ndio mpaka wa boti za kanuni", "Watumiaji waandike kwa herufi kubwa"], answer: 2, why: "Boti za kanuni zinalinganisha tu kanuni ulizoandika; modeli za lugha zinashughulikia njia nyingi zaidi za kusema mambo." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Misingi ya Python kwa ajili ya AI",
        questions: [
          { objective: "O1", q: "Tofauti kuu kati ya code ya kanuni na modeli ya AI ni ipi?", options: ["Code ya kanuni daima ni ya haraka zaidi", "Modeli hazitumii code yoyote", "Modeli ilijifunza mifumo kutoka kwa mifano badala ya kuandikiwa kila kanuni kwa mkono", "Hakuna tofauti"], answer: 2, why: "Modeli zinajifunza mifumo kutoka kwa data; code ya kanuni inahitaji kila kanuni iandikwe." },
          { objective: "O1", q: "Kisanduku chako cha Colab kinasema \"No module named\" kwa maktaba fulani. Unafanya nini?", options: ["Kuendesha !pip install pamoja na jina la maktaba, kisha kuipakia tena kwa import", "Kuwasha upya kompyuta yako", "Kufuta notebook", "Kubadilisha jina la kigezo"], answer: 0, why: "pip inasakinisha maktaba isiyokuwepo." },
          { objective: "O2", q: "replies = {\"hours\": \"Open 9 to 5.\"}. replies[\"hours\"] ni nini?", options: ["\"hours\"", "Kosa", "True", "\"Open 9 to 5.\""], answer: 3, why: "Kutafuta ufunguo kunatoa thamani yake." },
          { objective: "O2", q: "Kwa nini kutumia message.lower() katika chatbot?", options: ["Kufanya maandishi kuwa mafupi", "Ili \"HOURS\" na \"hours\" zote zilingane", "Kufuta ujumbe", "Kuutafsiri"], answer: 1, why: "Kufanya herufi kuwa ndogo kunafanya ulinganisho usijali herufi kubwa." },
          { objective: "O3", q: "Neno lipi linatoka kwenye kitanzi cha while True?", options: ["exit", "break", "stop", "return to"], answer: 1, why: "break inatoka kwenye kitanzi mara moja." }
        ]
      }
    },
    {
      name: "Sura 2: Kutumia modeli ya AI iliyofunzwa tayari",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kupakia modeli iliyofunzwa tayari kwa Hugging Face",
          minutes: 6,
          goal: "Pakia modeli ya hisia ya bure katika Colab na uitumie juu ya sentensi moja.",
          text: [
            "Modeli iliyofunzwa tayari (pre-trained) ni ile ambayo mtu tayari aliifunza na kuishiriki, kwa hiyo unaweza kuitumia mara moja. Hugging Face ni tovuti inayohifadhi maelfu ya modeli za bure, na maktaba yake ya Transformers inazipakia kwa mstari mmoja.",
            "Zana rahisi zaidi ni pipeline. Unaiambia kazi na modeli: classifier = pipeline(\"text-classification\", model=\"distilbert/distilbert-base-uncased-finetuned-sst-2-english\"). Modeli hii inasoma maandishi ya Kiingereza na kuamua kama hisia zake (sentiment) ni POSITIVE (chanya) au NEGATIVE (hasi).",
            "Itumie kama function: classifier(\"The practice today was great!\"). Inarudisha orodha yenye dictionary ndani, kwa mfano [{'label': 'POSITIVE', 'score': 0.99}]. Alama (score) ni kiasi cha uhakika wa modeli, kutoka 0 hadi 1. Mara ya kwanza inapakua modeli, kwa hiyo inachukua muda kidogo zaidi.",
            "Daima soma ukurasa wa modeli (\"kadi ya modeli\", model card) kabla ya kuitumia: unasema modeli ilifunzwa kwa data gani, ni ya kazi gani na leseni yake."
          ],
          steps: ["Katika kisanduku kipya: from transformers import pipeline", "Tengeneza classifier = pipeline(\"text-classification\", model=\"distilbert/distilbert-base-uncased-finetuned-sst-2-english\")", "Endesha result = classifier(\"The practice today was great!\")", "print(result[0][\"label\"], result[0][\"score\"])", "Kama transformers haipo, endesha !pip install transformers kwanza."],
          words: [["Modeli iliyofunzwa tayari", "modeli ambayo mtu mwingine tayari aliifunza na unaweza kuitumia mara moja."], ["Hugging Face", "tovuti na kundi la maktaba za kushiriki modeli za AI za bure."], ["pipeline", "zana ya Transformers inayopakia modeli kwa kazi fulani kwa mstari mmoja."], ["Hisia (sentiment)", "hali ya moyo ya maandishi: chanya au hasi."], ["Alama (score)", "kiasi cha uhakika wa modeli, kutoka 0 hadi 1."], ["Kadi ya modeli (model card)", "ukurasa unaoeleza modeli inafanya nini, data yake na leseni yake."]],
          slides: [
            { title: "Modeli zilizofunzwa tayari", bullets: ["Tayari zimefunzwa na mtu mwingine", "Hugging Face inahifadhi maelfu, bure", "Soma kadi ya modeli kwanza"] },
            { title: "Mstari mmoja kupakia", bullets: ["from transformers import pipeline", "pipeline(\"text-classification\", model=...)", "Mara ya kwanza inapakua modeli"] },
            { title: "Kusoma jibu", bullets: ["[{'label': 'POSITIVE', 'score': 0.99}]", "result[0][\"label\"] ni hisia", "result[0][\"score\"] ni kiasi cha uhakika"] }
          ],
          sources: [HF_PIPELINES, HF_MODEL],
          tryIt: "Pakia kipanga hisia na ukiendeshe juu ya sentensi tatu za Kiingereza unazoandika: moja ya furaha wazi, moja ya hasira wazi, na moja mchanganyiko kama \"The food was good but the wait was long.\" Onyesha lebo na alama ya kila moja na uandike ni ipi modeli ilikuwa na uhakika mdogo zaidi.",
          youCanNow: "kupakia modeli iliyofunzwa tayari kwa pipeline na kusoma lebo na alama yake.",
          quickCheck: [
            { objective: "O4", q: "Kadi ya modeli inakuambia nini?", options: ["Nenosiri lako la Colab", "Una maoni mangapi", "Bei ya kompyuta", "Modeli ilifunzwa kwa nini, ni ya kazi gani na leseni yake"], answer: 3, why: "Soma kadi ya modeli kabla ya kutumia modeli." },
            { objective: "O4", q: "Unaendesha kipanga kwa mara ya kwanza na kinachukua muda. Ungefanya nini?", options: ["Kukisimamisha na kukata tamaa", "Kusubiri; mara ya kwanza inapakua modeli", "Kusakinisha Python tena", "Kubadilisha lebo kuwa POSITIVE kwa mkono"], answer: 1, why: "Mara ya kwanza inapakua modeli, kwa hiyo inachukua muda zaidi." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kuendesha modeli juu ya maandishi mengi",
          minutes: 5,
          goal: "Tumia kitanzi kupanga orodha ya maoni na kuhesabu matokeo.",
          text: [
            "Programu halisi hushughulikia maandishi mengi, si moja. Weka maoni yako katika orodha, kisha tumia kitanzi: for comment in comments: result = classifier(comment)[0]. Unaweza pia kupitisha orodha nzima kwa mara moja, classifier(comments), na kupata jibu moja kwa kila maoni.",
            "Ili kufanya muhtasari, tumia vihesabu: positive = 0 na negative = 0 kabla ya kitanzi, kisha ongeza 1 kwenye kile kinachofaa ndani yake kulingana na result[\"label\"].",
            "Zungusha alama ili isomeke kwa urahisi: round(result[\"score\"], 2) inatoa desimali mbili. f-string inaonyesha mstari nadhifu: print(f\"{result['label']:8} {round(result['score'], 2)}  {comment}\")."
          ],
          steps: ["Weka angalau maoni matano katika orodha.", "Weka positive = 0 na negative = 0.", "Pitia maoni kwa kitanzi na upange kila moja.", "Onyesha lebo, alama iliyozungushwa na maoni.", "Ongeza kwenye kihesabu kinachofaa, kisha onyesha jumla baada ya kitanzi."],
          words: [["Kihesabu (counter)", "kigezo kinachohesabu mara ngapi kitu kilitokea."], ["round()", "inafupisha namba hadi idadi fulani ya desimali."], ["Kundi (batch)", "kundi la input zinazoshughulikiwa pamoja."]],
          slides: [
            { title: "Maandishi mengi, kitanzi kimoja", bullets: ["Weka maoni katika orodha", "for comment in comments:", "result = classifier(comment)[0]"] },
            { title: "Hesabu unapoendelea", bullets: ["positive = 0, negative = 0 kabla ya kitanzi", "Ongeza 1 kwenye kihesabu kinachofaa ndani yake", "Onyesha jumla baada ya kitanzi"] },
            { title: "Ifanye isomeke", bullets: ["round(score, 2) kwa desimali mbili", "Mstari mmoja nadhifu kwa kila maoni"] }
          ],
          tryIt: "Andika maoni sita kwa Kiingereza kuhusu darasa, mazoezi ya timu au duka la mtaani. Yapange kwa kitanzi, onyesha mstari mmoja nadhifu kwa kila moja, na uonyeshe mangapi yalikuwa chanya na mangapi hasi.",
          youCanNow: "kuendesha modeli ya AI juu ya orodha ya maandishi na kufanya muhtasari wa matokeo kwa vihesabu.",
          quickCheck: [
            { objective: "O5", q: "classifier(comments) inarudisha nini wakati comments ni orodha?", options: ["Jibu moja kwa orodha nzima", "Kosa kila mara", "Jibu moja kwa kila maoni", "Jibu la maoni ya kwanza tu"], answer: 2, why: "Ukipitisha orodha unapata jibu moja kwa kila maoni." },
            { objective: "O5", q: "Ndani ya kitanzi chako, result[\"label\"] ni \"POSITIVE\". Ungefanya nini na vihesabu vyako?", options: ["Kuongeza 1 kwenye positive", "Kuongeza 1 kwenye negative", "Kurudisha positive kuwa 0", "Kufuta maoni"], answer: 0, why: "Ongeza 1 kwenye kihesabu kinacholingana na lebo." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kukagua AI na kumaliza kipanga maoni",
          minutes: 6,
          goal: "Weka alama kwenye majibu yenye uhakika mdogo ili mtu ayakague, na umalize kipanga maoni.",
          text: [
            "Modeli za AI hukosea. Hii inajua chanya na hasi tu, kwa hiyo maoni ya katikati au mchanganyiko yanalazimishwa kuwa moja kati ya hizo. Inaweza pia kukosa kejeli (\"Great, another rainy game day.\") na ilifunzwa kwa maoni ya Kiingereza kuhusu filamu, kwa hiyo lugha ya mtaani au lugha nyingine zinaweza kuichanganya.",
            "Tabia nzuri ni kiwango cha mpaka cha uhakika (threshold): kama alama iko chini ya namba unayochagua, kama 0.80, programu inasema \"check by hand\" (kagua kwa mkono) badala ya kuiamini lebo. Mtu anafanya uamuzi wa mwisho kwa kila jambo muhimu.",
            "Tumia AI kwa uwajibikaji: usipitishe jumbe za faragha katika zana bila ruhusa, usibandike nenosiri wala API key katika notebook unayoshirikiana, na waambie watu jibu lilipotoka kwa AI.",
            "Sasa una kila kitu kwa kazi ya mwisho: orodha, modeli, kitanzi, if yenye kiwango cha mpaka, vihesabu na matokeo yaliyo wazi."
          ],
          steps: ["Chagua kiwango cha mpaka, kwa mfano THRESHOLD = 0.80.", "Ndani ya kitanzi, kagua: if result[\"score\"] < THRESHOLD:", "Onyesha \"check by hand\" kando ya maoni hayo.", "Hesabu chanya na hasi kama awali.", "Onyesha jumla na mangapi yanahitaji kukaguliwa na mtu."],
          words: [["Kiwango cha mpaka (threshold)", "namba ya mpaka unayochagua; majibu yaliyo chini yake yanashughulikiwa kwa namna maalum."], ["Uhakika (confidence)", "kiasi ambacho modeli ina uhakika na jibu lake."], ["Kejeli (sarcasm)", "kusema kinyume cha unachomaanisha, jambo ambalo modeli mara nyingi hukosa."], ["Mtu katika mzunguko (human in the loop)", "mtu anakagua majibu ya AI kabla hayajatumika."]],
          slides: [
            { title: "Modeli hukosea", bullets: ["Chanya au hasi tu: mchanganyiko unalazimishwa", "Inakosa kejeli na lugha ya mtaani", "Ilifunzwa kwa maoni ya Kiingereza kuhusu filamu"] },
            { title: "Tumia kiwango cha mpaka", bullets: ["THRESHOLD = 0.80", "Alama chini yake: \"check by hand\"", "Mtu anafanya uamuzi wa mwisho"] },
            { title: "Tumia AI kwa uwajibikaji", bullets: ["Pata ruhusa kwa jumbe za faragha", "Hakuna nenosiri wala funguo katika notebook za pamoja", "Sema jibu lilipotoka kwa AI"] }
          ],
          sources: [HF_MODEL],
          tryIt: "Kazi ya mwisho: jenga kipanga maoni. Tumia angalau maoni sita, ukiwemo moja mchanganyiko na moja la kejeli. Onyesha kila moja pamoja na lebo na alama yake, weka \"check by hand\" kwa kila kitu chini ya 0.80, na uonyeshe jumla za chanya, hasi na check by hand. Kisha soma yaliyowekwa alama wewe mwenyewe na uamue.",
          youCanNow: "kujenga programu ya AI ya Python inayofanya kazi, inayopanga maandishi, inayoripoti matokeo yake na inayompa mtu hali zisizo na uhakika.",
          quickCheck: [
            { objective: "O6", q: "Kwa nini modeli hii ya hisia inaweza kukosea maoni ya katikati?", options: ["Inasoma namba tu", "Inajua chanya na hasi tu, kwa hiyo maoni ya katikati yanalazimishwa kuwa moja kati ya hizo", "Inahitaji nenosiri", "Inafanya kazi Ijumaa tu"], answer: 1, why: "Modeli ina lebo mbili tu, kwa hiyo maoni mchanganyiko au ya katikati yanalazimishwa kuwa moja kati ya hizo." },
            { objective: "O6", q: "Rafiki anataka upitishe jumbe zake za faragha katika kipanga chako. Ungefanya nini?", options: ["Kuzipitisha bila kuwauliza watu walioziandika", "Kuweka matokeo mtandaoni", "Kubandika API key yako katika notebook ili iende haraka", "Kutumia jumbe ulizoruhusiwa tu, na kusema matokeo yalitoka kwa AI"], answer: 3, why: "Kutumia AI kwa uwajibikaji ni kupata ruhusa kwa data ya faragha na kuwaambia watu AI ilipotumika." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kutumia modeli ya AI iliyofunzwa tayari",
        questions: [
          { objective: "O4", q: "Modeli iliyofunzwa tayari ni nini?", options: ["Modeli unayopaswa kuifunza kwa wiki kwanza", "Orodha ya kanuni unazoandika", "Tovuti ya kulipia", "Modeli ambayo mtu tayari aliifunza na unaweza kuitumia mara moja"], answer: 3, why: "Modeli zilizofunzwa tayari ziko tayari kutumika." },
          { objective: "O4", q: "Kipanga kinarudisha [{'label': 'NEGATIVE', 'score': 0.97}]. 0.97 inamaanisha nini?", options: ["Modeli ina uhakika mkubwa kwamba maoni ni hasi", "Maneno 97 yalisomwa", "Maoni yana urefu wa 97%", "Iligharimu senti 97"], answer: 0, why: "Alama ni uhakika wa modeli kutoka 0 hadi 1." },
          { objective: "O5", q: "Mstari upi unapata lebo kutoka result = classifier(text)?", options: ["result.label", "result[\"label\"][0]", "result[0][\"label\"]", "label(result)"], answer: 2, why: "Jibu ni orodha yenye dictionary, kwa hiyo kwanza [0], kisha [\"label\"]." },
          { objective: "O6", q: "Maoni yanapata alama 0.55. Kwa kiwango cha mpaka cha 0.80, programu yako inafanya nini?", options: ["Inayafuta", "Inayahesabu mara mbili", "Inasimamisha programu", "Inayawekea \"check by hand\""], answer: 3, why: "Alama zilizo chini ya kiwango cha mpaka zinaenda kwa mtu." },
          { objective: "O6", q: "Lipi kati ya haya ni kutumia AI kwa uwajibikaji?", options: ["Kubandika API key yako katika notebook unayoshiriki", "Kupitisha jumbe za faragha za wanafunzi wenzako bila kuuliza", "Kuwaambia watu jibu lilitoka kwa AI na kukagua yasiyo na uhakika", "Kuamini kila lebo"], answer: 2, why: "Kuwa wazi na kumweka mtu katika mzunguko ndiyo matumizi ya uwajibikaji." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kuandika Programu za AI kwa Python kwa Wanaoanza",
    questions: [
      { objective: "O1", q: "Modeli ya AI inaelezwa vizuri zaidi kama:", options: ["Orodha ya kauli za if", "Programu iliyojifunza mifumo kutoka kwa mifano mingi", "Aina ya kibodi", "Anwani ya tovuti"], answer: 1, why: "Modeli zinajifunza mifumo kutoka kwa data." },
      { objective: "O1", q: "import inafanya nini katika Python?", options: ["Inapakia maktaba ili uweze kutumia code yake", "Inapakua filamu", "Inaonyesha maandishi", "Inafuta faili"], answer: 0, why: "import inaleta maktaba ndani ya programu yako." },
      { objective: "O1", q: "Alama ! ina maana gani katika !pip install transformers ndani ya Colab?", options: ["Ni kosa", "Ifanye kwa sauti kubwa zaidi", "Endesha hii kama amri ya mfumo, si Python", "Isakinishe mara mbili"], answer: 2, why: "! inaiambia Colab iendeshe amri ya shell." },
      { objective: "O1", q: "Kauli ipi ni kweli kuhusu Colab ya bure?", options: ["Ni bure, lakini rasilimali zina kikomo na zinaweza kubadilika", "Rasilimali hazina kikomo", "Lazima uisakinishe kwanza", "Inafanya kazi kwenye simu tu"], answer: 0, why: "Colab inasema rasilimali za bure hazihakikishwi na hazina ukomo." },
      { objective: "O2", q: "\"HELP\".lower() inatoa:", options: ["\"HELP\"", "\"Help\"", "Kosa", "\"help\""], answer: 3, why: "lower() inafanya kila herufi kuwa ndogo." },
      { objective: "O2", q: "\"price\" in \"what is the price?\" inatoa:", options: ["False", "True", "\"price\"", "0"], answer: 1, why: "in inakagua kama neno liko katika maandishi." },
      { objective: "O2", q: "Katika {\"hours\": \"Open 9 to 5.\"}, \"hours\" ni nini?", options: ["Thamani", "Ufunguo", "Orodha", "Kitanzi"], answer: 1, why: "Upande wa kushoto wa jozi ni ufunguo." },
      { objective: "O3", q: "Chatbot yako haielewi \"when do you open?\" lakini inajua \"hours\". Kwa nini?", options: ["Colab imeharibika", "Python haiwezi kusoma maswali", "Dictionary ni fupi mno kufanya kazi", "Boti za kanuni zinalinganisha tu kanuni ulizoandika"], answer: 3, why: "Katika boti ya kanuni, kila njia ya kusema inahitaji kanuni yake." },
      { objective: "O3", q: "Katika kitanzi cha mazungumzo, nini kinapaswa kutokea mtumiaji akiandika bye?", options: ["Kuonyesha kwaheri na kutumia break", "Kuanza kitanzi kipya", "Kuuliza nenosiri", "Hakuna kitu"], answer: 0, why: "break inamaliza kitanzi kwa usafi." },
      { objective: "O3", q: "Kwa nini modeli za lugha zinafaa kwa chatbot?", options: ["Hazikosei kamwe", "Hazihitaji kompyuta", "Zinaelewa njia nyingi za kusema jambo moja", "Zinafanya kazi bila data"], answer: 2, why: "Zilijifunza kutoka kwa mamilioni ya sentensi." },
      { objective: "O4", q: "Hugging Face ni nini?", options: ["Programu ya mitandao ya kijamii", "Kosa la Python", "Mchezo wa video", "Tovuti na maktaba za kushiriki modeli za AI za bure"], answer: 3, why: "Hugging Face inahifadhi modeli na maktaba ya Transformers." },
      { objective: "O4", q: "Mstari upi unapakia modeli ya hisia?", options: ["import sentiment", "model = load()", "pipeline(\"text-classification\", model=\"distilbert/distilbert-base-uncased-finetuned-sst-2-english\")", "print(\"model\")"], answer: 2, why: "pipeline inapokea kazi na jina la modeli." },
      { objective: "O4", q: "Kwa nini mara ya kwanza ya kuendesha modeli inachukua muda zaidi?", options: ["Colab ni ya polepole kwa makusudi", "Inapakua modeli", "Inafunza kuanzia sifuri", "Inakagua barua pepe yako"], answer: 1, why: "Faili za modeli zinapakuliwa mara ya kwanza." },
      { objective: "O4", q: "Unapaswa kusoma nini kabla ya kutumia modeli?", options: ["Kadi yake ya modeli", "Historia ya kivinjari chako", "Nembo ya Colab", "Hakuna kitu"], answer: 0, why: "Kadi ya modeli inaeleza matumizi yake, data yake na leseni yake." },
      { objective: "O4", q: "Alama ya modeli ya hisia ni:", options: ["Urefu wa maandishi", "Idadi ya maneno chanya", "Kiasi cha uhakika wa modeli, kutoka 0 hadi 1", "Daraja kati ya 100"], answer: 2, why: "Alama ni uhakika." },
      { objective: "O5", q: "Ili kuhesabu maoni chanya katika kitanzi, kwanza:", options: ["Unaweka positive = 0 kabla ya kitanzi", "Unaonyesha positive", "Unafuta orodha", "Unapakia counter kwa import"], answer: 0, why: "Kihesabu kinaanza kwa 0 kabla ya kitanzi." },
      { objective: "O5", q: "round(0.98765, 2) inatoa:", options: ["0.98", "0.99", "1", "98"], answer: 1, why: "Ikizungushwa hadi desimali mbili, 0.98765 inakuwa 0.99." },
      { objective: "O6", q: "Maoni yapi modeli hii ina uwezekano mkubwa wa kuyakosea?", options: ["\"I loved it!\"", "\"Great, another rainy game day.\"", "\"This was terrible.\"", "\"Best class ever.\""], answer: 1, why: "Kejeli inasema kinyume cha inachomaanisha, na modeli mara nyingi huikosa." },
      { objective: "O6", q: "Kwa nini kutumia kiwango cha mpaka cha uhakika?", options: ["Kufanya programu iende haraka", "Kupeleka majibu yasiyo na uhakika kwa mtu ili ayakague", "Kuficha maoni hasi", "Kufuta alama za chini"], answer: 1, why: "Majibu yenye uhakika mdogo yanahitaji kukaguliwa na mtu." },
      { objective: "O6", q: "Kipi SI salama kuweka katika notebook unayoshiriki?", options: ["Orodha ya maoni ya kubuni", "Mstari wa maelezo unaoanza na #", "Kauli ya print", "Nenosiri lako au API key"], answer: 3, why: "Siri katika notebook za pamoja zinaweza kunakiliwa na kutumiwa vibaya." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      2,
      5,
      7,
      8,
      10,
      14,
      15,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Modeli imepakiwa na kutumika",
        objective: "O4",
        notYet: "Modeli haipakii, au hakuna lebo wala alama zinazotolewa.",
        meets: "Modeli ya hisia iliyofunzwa tayari inafanya kazi na inatoa lebo na alama kwa kila maoni.",
        exceeds: "Notebook inaandika kile kadi ya modeli inasema kuhusu data iliyotumika kuifunza."
      },
      {
        name: "Kitanzi na matokeo",
        objective: "O5",
        notYet: "Maoni ni chini ya sita, au si kila maoni yanaonyeshwa na lebo na alama yake.",
        meets: "Angalau maoni sita, kila moja likionyeshwa na lebo yake na alama iliyozungushwa.",
        exceeds: "Matokeo yamepangwa nadhifu kwa mistari kwa kutumia f-string."
      },
      {
        name: "Hesabu",
        objective: "O5",
        notYet: "Hesabu za chanya na hasi hazipo au si sahihi.",
        meets: "Hesabu sahihi za maoni chanya na hasi zinaonyeshwa.",
        exceeds: "Pia inaonyesha mangapi yaliwekwa \"check by hand\"."
      },
      {
        name: "Kiwango cha mpaka cha uhakika",
        objective: "O6",
        notYet: "Hakuna kiwango cha mpaka, au alama za chini hazijawekewa alama.",
        meets: "Kila alama iliyo chini ya 0.80 imewekwa \"check by hand\".",
        exceeds: "Ina maoni ya kejeli au mchanganyiko na inaeleza kwa nini modeli inaweza kuyakosea."
      },
      {
        name: "Matumizi ya uwajibikaji",
        objective: "O6",
        notYet: "Notebook ina jumbe za faragha bila ruhusa, au nenosiri au API key.",
        meets: "Maoni ya kubuni au yaliyoruhusiwa tu, na hakuna nenosiri wala funguo katika notebook.",
        exceeds: "Inaongeza maelezo kwamba lebo zilitoka kwa AI na mtu anakagua zisizo na uhakika."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kupata Anafikia au Anazidi katika kila mstari wa rubric ya kipanga maoni",
      "Wanafunzi wanaoripoti kujenga au kubadilisha programu nyingine ya AI ndani ya siku 30 baada ya kozi (utafiti wa ufuatiliaji)",
      "Wanafunzi wanaoendelea na kozi inayofuata, kama Utangulizi wa Machine Learning (Kujifunza kwa Mashine) au Data Science for Beginners",
      "Wanafunzi wanaoonyesha kipanga maoni katika portfolio, darasa, klabu au maombi ya kazi"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta au laptop yenye kivinjari cha wavuti",
      "Akaunti ya Google ya bure ili kutumia Google Colab",
      "Maoni mafupi sita au zaidi ya kubuni, kwa mfano kutoka mazoezi, darasa au duka dogo",
      "Kama dakika 60 hadi 75 kwa jumla, pamoja na muda wa mazoezi"
    ],
    facilitatorNotes: [
      "Pakua modeli mara moja kabla ya darasa kwenye mtandao uleule ili kuhakikisha inafanya kazi; mitandao ya shule wakati mwingine huzuia upakuaji wa modeli.",
      "Waambie wanafunzi watumie maoni ya kubuni au waliyoruhusiwa kutumia; kamwe si jumbe halisi za faragha.",
      "Wakumbushe wanafunzi wasibandike kamwe nenosiri au API key katika notebook, hasa wanayoishiriki.",
      "Mwombe kila mwanafunzi atafute maoni moja ambayo modeli inakosea na mjadili kwa nini kama kikundi.",
      "Rasilimali za bure za Colab zinaweza kuisha; kipindi kikisimama, waonyeshe wanafunzi jinsi ya kuunganisha tena na kuendesha visanduku tena kuanzia juu."
    ]
  }
};
