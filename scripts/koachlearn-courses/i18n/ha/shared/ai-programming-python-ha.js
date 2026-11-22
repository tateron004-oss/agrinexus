"use strict";

// Koach Learn course, Hausa (ha) translation of shared/ai-programming-python.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.
// Python code, model names and the sentences the English-only model reads stay in English.

const COLAB = { name: "Google Colab: Tambayoyin da ake yawan yi (FAQ)", url: "https://research.google.com/colaboratory/faq.html" };
const HF_PIPELINES = { name: "Hugging Face Transformers: Pipelines", url: "https://huggingface.co/docs/transformers/en/main_classes/pipelines" };
const HF_MODEL = { name: "Hugging Face: katin bayanin samfurin distilbert-base-uncased-finetuned-sst-2-english", url: "https://huggingface.co/distilbert/distilbert-base-uncased-finetuned-sst-2-english" };

module.exports = {
  id: "ai-programming-python-ha",
  lang: "ha",
  translationOf: "ai-programming-python",
  category: "Youth",
  name: "Shirya Shirye-shiryen AI da Python don Masu Farawa",
  skills: "Amfani da laburaren Python a Colab, Gina chatbot mai dokoki, Loda samfurin AI da aka riga aka horar, Gudanar da AI a kan rubutu da yawa, Duba sakamakon AI",
  outcome: "rubuta shirin Python a Google Colab da ke amfani da samfurin AI kyauta da aka riga aka horar don rarraba jerin ra'ayoyi da aka rubuta zuwa masu kyau (positive) da marasa kyau (negative), buga taƙaitaccen bayani, da yi wa sakamakon da AI bai tabbata da su alama don mutum ya duba.",
  about: [
    "Wannan kwas ɗin na masu farawa ne da suka san Python kaɗan (variables, if, lists da loops) kuma suke son yin shirin da ke amfani da AI. Idan ba ku taɓa rubuta code ba, ku fara ɗaukar kwas ɗin \"Gabatarwa ga Shirye-shiryen Kwamfuta da Python\".",
    "Za ku fara da gina chatbot mai sauƙi da dokokin Python kawai, don ku ga abin da shiri zai iya yi ba tare da AI ba. Sannan za ku loda samfurin AI kyauta da aka riga aka horar daga Hugging Face, ku yi amfani da shi don karanta yanayin ra'ayoyin da aka rubuta. Irin wannan kayan aiki kamfanoni ke amfani da shi a kan sharhi da bincike.",
    "Komai yana gudana a Google Colab a cikin burauzar intanet ɗinku, kyauta. Kowane darasi yana ɗaukar kusan minti biyar, kuma yana ƙarewa da code da za ku rubuta da kanku. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku gina mai rarraba ra'ayoyi a Google Colab: ku rubuta jerin gajerun ra'ayoyi aƙalla shida (misali daga atisayen ƙungiya, aji ko ƙaramin shago), ku gudanar da samfurin yanayi (sentiment) da aka riga aka horar a kan kowanne, ku buga kowane ra'ayi tare da lakabinsa (label) da makinsa (score), ku yi wa duk sakamakon da makinsa ya gaza 0.80 alamar \"check by hand\" (a duba da hannu), sannan ku buga yawan ra'ayoyi masu kyau da yawan marasa kyau.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Matasa da manya da suka ɗan rubuta Python kuma suke son gina wani abu da AI: ɗaliban sakandare da na jami'a, 'yan kungiyoyin koyon code, masu canja sana'a da masu horon neman aiki.",
    startingPoint: "Suna iya rubutu da gudanar da gajerun shirye-shiryen Python a Google Colab masu variables, if, lists, loops da functions. Yawancinsu ba su taɓa shigo da laburaren AI ba, ba su taɓa amfani da samfurin da aka riga aka horar ba, kuma ba su taɓa tunanin yadda samfuri ya tabbata ba ko lokacin da ya kamata mutum ya duba amsoshinsa ba.",
    gap: "Yanzu an saka kayan AI a ayyuka da kayayyaki da yawa, kuma masu ɗaukar aiki suna daraja mutanen da za su iya amfani da su a code kuma su duba su cikin gaskiya. Ba tare da atisaye na hannu ba, masu koyo ko dai su ɗauka AI sihiri ne ko kuma ya fi ƙarfinsu, kuma ba sa koyon gwada iyakar samfuri ko kiyaye bayanan sirri daga ciki.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; ana bayyana kalmomi kamar laburare (library), samfuri (model), maki (score) da iyaka (threshold)",
      "Na'urori: kwamfuta ko laptop mai burauzar intanet; yana da wuya a rubuta code a tablet",
      "Asusu da kuɗi: asusun Google kyauta don Google Colab, da samfuran Hugging Face kyauta; albarkatun Colab na kyauta suna da iyaka kuma suna iya canjawa",
      "Lokaci: kusan minti 5 zuwa 6 a kowane darasi tare da atisaye, kusan minti 60 zuwa 75 gaba ɗaya",
      "Sirri: masu koyo suna amfani da ra'ayoyin ƙirƙira ko waɗanda aka ba su izini, kuma ba sa taɓa liƙa kalmomin sirri (password) ko maɓallan API (API keys) a notebook da ake rabawa"
    ],
    prerequisites: "\"Gabatarwa ga Shirye-shiryen Kwamfuta da Python\": variables, if, lists, loops da functions."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "A cikin Google Colab", action: "bayyana yadda samfurin AI ya bambanta da code mai dokoki, da shigo da ko saka laburaren Python", standard: "da bayani daidai a jimla ɗaya, kuma laburaren ya loda ba tare da kuskure ba" },
    { id: "O2", condition: "Idan aka ba ku kalmomin nema (keywords) da amsoshi don chatbot mai sauƙi", action: "amfani da kayan aikin rubutu (string) da dictionary don haɗa saƙo da amsar da ta dace", standard: "haɗawar tana aiki ko da manyan ko ƙananan haruffa ne, kuma akwai amsar tsoho idan babu abin da ya dace" },
    { id: "O3", condition: "Idan kuna da function ɗin amsarku", action: "rubuta madaukin hira (chat loop) da ke tsayawa idan mai amfani ya ce bye, da bayyana iyakokin amsoshi masu dokoki", standard: "madaukin yana fita a kan bye, kuma akwai aƙalla misali ɗaya da dokokin ba za su iya ɗauka ba" },
    { id: "O4", condition: "Ta amfani da pipeline na Hugging Face", action: "loda samfurin yanayi (sentiment) da aka riga aka horar, gudanar da shi a kan jimla, da karanta lakabinsa da makinsa", standard: "bayan karanta katin bayanin samfurin, kuma an karanta lakabin da makin daidai" },
    { id: "O5", condition: "Idan aka ba ku jerin ra'ayoyi", action: "gudanar da samfurin a kan kowane ra'ayi a cikin madauki, ƙirga lakabobin, da buga taƙaitaccen bayani mai tsari", standard: "ƙididdigar ta yi daidai da lakabobin, kuma an zagaye makin zuwa wurare biyu bayan digo" },
    { id: "O6", condition: "Idan kuna da sakamakon samfurin", action: "yi wa sakamakon da ke ƙasa da iyakar tabbaci alama don mutum ya duba, da bin kyawawan halaye na amfani da AI cikin gaskiya", standard: "kowane maki da ke ƙasa da iyakar yana da alamar \"check by hand\", kuma babu bayanan sirri ko maɓallai a notebook ɗin" }
  ],
  chapters: [
    {
      name: "Babi na 1: Tubalan Python don AI",
      lessons: [
        {
          objectives: ["O1"],
          title: "Mene ne shirye-shiryen AI, da shirya Colab",
          minutes: 5,
          goal: "Bayyana mene ne samfurin AI, da shigo da laburaren Python a Colab.",
          text: [
            "Shirye-shirye na yau da kullum yana nufin ku ne kuke rubuta kowace doka da kanku: idan kalmar \"hi\" ce, ka ce \"hello\". Shirye-shiryen AI yana nufin kuna amfani da samfuri (model): shirin da ya koyi alamu (patterns) daga misalai masu yawa, don haka zai iya ɗaukar yanayin da ba ku taɓa rubuta doka a kansa ba.",
            "Ba kasafai ake gina samfuri daga farko ba. Kuna amfani da laburare (library): code da aka riga aka rubuta wanda wani ya rubuta ya raba. A Python kuna loda laburare da import. Sanannun laburaren AI kyauta sun haɗa da Hugging Face Transformers (samfuran harshe), scikit-learn (koyon na'ura na gargajiya) da PyTorch (deep learning, wato koyo mai zurfi).",
            "Google Colab yana da yawancin waɗannan laburare tun farko. Idan ɗaya ya ɓace, kuna saka shi a cikin cell da !pip install sannan sunansa. Alamar ! tana gaya wa Colab ya gudanar da umarnin tsarin kwamfuta (system command) maimakon Python. Colab kyauta ne, amma ana rabawa kwamfutocinsa, don haka albarkatunsa na kyauta suna da iyaka kuma suna iya canjawa."
          ],
          steps: ["Ku buɗe colab.research.google.com ku yi sabon notebook.", "A cikin cell, ku rubuta: import random", "Layi na gaba: print(random.choice([\"rock\", \"paper\", \"scissors\"]))", "Ku gudanar da shi sau da yawa ku ga amsar tana canjawa.", "Idan wani import ya kasa da \"No module named\", ku gudanar da !pip install <name> a cell, sannan ku sake gwadawa."],
          words: [["Samfurin AI (AI model)", "shirin da ya koyi alamu daga misalai masu yawa kuma zai iya yin hasashe a kan sababbin bayanai."], ["Laburare (library)", "code da aka riga aka rubuta wanda za ku iya lodawa ku yi amfani da shi a cikin shirinku."], ["import", "kalmar Python da ke loda laburare."], ["pip", "kayan aikin da ke saka laburaren Python."], ["Mai dokoki (rule-based)", "shirin da mutum ya rubuta kowace dokarsa da hannu."]],
          slides: [
            { title: "Dokoki da samfura", bullets: ["Mai dokoki: ku ne kuke rubuta kowace doka", "Samfurin AI: ya koyi alamu daga misalai", "Samfura suna ɗaukar yanayin da ba ku taɓa rubutawa ba"] },
            { title: "Laburare suna yin aiki mai nauyi", bullets: ["import yana loda code da aka riga aka rubuta", "Transformers, scikit-learn, PyTorch", "Duk kyauta ne a yi amfani da su"] },
            { title: "Shirya Colab", bullets: ["An riga an saka laburare da yawa", "Ɗaya ya ɓace? !pip install <name>", "Albarkatun kyauta suna da iyaka kuma suna iya canjawa"] }
          ],
          sources: [COLAB],
          tryIt: "A cikin sabon notebook na Colab, ku shigo da laburaren random, ku rubuta shirin da ke zaɓar motsa jiki, ko abin ciye-ciye, ko darasin karatu ba da gangan ba daga jerin abubuwa biyar, ya buga shi. Ku gudanar da shi sau uku.",
          youCanNow: "bayyana bambancin code mai dokoki da samfurin AI, da shigo da laburare a Colab.",
          quickCheck: [
            { objective: "O1", q: "Mene ne laburare (library) a Python?", options: ["Jerin notebooks ɗinku da kuka ajiye", "Folda a Google Drive", "Code da aka riga aka rubuta wanda wani ya rubuta ya raba", "Saƙon kuskure"], answer: 2, why: "Laburare code ne da aka riga aka rubuta aka raba, wanda kuke lodawa da import." },
            { objective: "O1", q: "Kuna son amfani da scikit-learn amma ba ku tabbata Colab yana da shi ba. Me za ku fara gwadawa?", options: ["Ku gudanar da import sklearn, idan ya ce \"No module named\", ku gudanar da !pip install scikit-learn", "Ku sake rubuta laburaren da kanku", "Ku goge notebook ɗin", "Ku rubuta sunan laburaren a cikin print()"], answer: 0, why: "Colab yana da laburare da yawa tun farko; ku saka da !pip ne kawai idan import ya kasa." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Strings da dictionaries: ƙwaƙwalwar chatbot mai sauƙi",
          minutes: 6,
          goal: "Amfani da dictionary don haɗa kalmomin nema a cikin saƙo da amsoshi.",
          text: [
            "Shirye-shiryen AI suna aiki da rubutu mai yawa, don haka kuna buƙatar wasu kayan aikin rubutu (string). message.lower() yana mayar da rubutu zuwa ƙananan haruffa, don haka \"HELLO\" da \"hello\" su dace. \"hours\" in message yana zama True idan kalmar tana ko'ina a cikin saƙon. message.split() yana raba jimla zuwa jerin kalmomi (list).",
            "Dictionary yana ajiye biyu-biyu: maɓalli (key) da ƙima (value), a cikin baka mai lanƙwasa { }. replies = {\"hours\": \"We are open 9 to 5.\", \"price\": \"Prices are on our menu page.\"} Kuna samun ƙima da replies[\"hours\"].",
            "Don gina ƙwaƙwalwar chatbot, ku zagaya cikin dictionary ɗin: for keyword, answer in replies.items(): if keyword in message: return answer. Idan babu abin da ya dace, ku mayar da amsar tsoho kamar \"Sorry, I do not know that yet.\""
          ],
          steps: ["Ku yi dictionary na kalmomin nema da amsoshi.", "Ku rubuta function reply(message).", "A ciki, ku saka message = message.lower().", "Ku zagaya cikin replies.items() ku mayar da amsar kalmar nema ta farko da aka samu.", "Bayan madaukin, ku mayar da amsar tsoho."],
          words: [["String", "rubutu a cikin Python."], ["Dictionary", "tarin biyu-biyu na key: value a cikin baka mai lanƙwasa { }."], ["Maɓalli (key)", "lakabin da kuke nema a cikin dictionary."], ["Ƙima (value)", "abin da aka ajiye a ƙarƙashin maɓalli."], [".items()", "yana ba da kowane maɓalli da ƙimarsa a cikin dictionary, don madauki."]],
          slides: [
            { title: "Kayan aikin rubutu", bullets: ["lower(): \"HELLO\" ya zama \"hello\"", "\"hours\" in message: True ko False", "split(): jimla ta zama jerin kalmomi"] },
            { title: "Dictionaries", bullets: ["{\"hours\": \"Open 9 to 5.\"}", "Ku nema da replies[\"hours\"]", "Maɓallai a hagu, ƙimomi a dama"] },
            { title: "Ƙwaƙwalwar chatbot", bullets: ["Ku mayar da saƙon ƙananan haruffa", "Ku zagaya cikin replies.items()", "Ku mayar da na farko da ya dace, ko amsar tsoho"] }
          ],
          tryIt: "Ku rubuta reply(message) don gidan motsa jiki, ɗakin karatu ko motar sayar da abinci na ƙirƙira, mai aƙalla kalmomin nema huɗu (misali hours, price, location, contact). Ku gwada shi da saƙonni uku, har da ɗaya da aka rubuta da manyan haruffa da ɗaya da bai kamata ya fahimta ba.",
          youCanNow: "amfani da kayan aikin rubutu da dictionary don haɗa saƙo da amsar da ta dace.",
          quickCheck: [
            { objective: "O2", q: "Me \"I need help now\".split() yake bayarwa?", options: ["\"i need help now\"", "[\"I\", \"need\", \"help\", \"now\"]", "True", "4"], answer: 1, why: "split() yana raba jimla zuwa jerin kalmomi." },
            { objective: "O2", q: "Chatbot ɗinku bai sami wata kalmar nema a cikin saƙon ba. Me za ku sa ya yi?", options: ["Ya faɗi da kuskure", "Ya buga kowace amsa da ke cikin dictionary", "Ya dakatar da shirin", "Ya mayar da amsar tsoho kamar \"Sorry, I do not know that yet.\""], answer: 3, why: "Amsar tsoho tana ɗaukar saƙonnin da babu kalmar nema da ta dace da su." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Sa chatbot ya yi magana, da ganin iyakokinsa",
          minutes: 5,
          goal: "Saka function ɗin amsarku a cikin madauki da ke hira har mai amfani ya ce bye, da gane abin da dokoki ba za su iya yi ba.",
          text: [
            "Chatbot yana buƙatar madauki (loop): ya nemi saƙo, ya buga amsa, ya maimaita. while True: yana maimaitawa har abada, don haka kuna ƙara hanyar fita: idan saƙon \"bye\" ne, ku buga sallama ku yi amfani da break don fita daga madaukin.",
            "Yanzu ku gwada shi kamar yadda mai amfani na gaske zai yi. Ku rubuta \"when do you open?\" kuma bot ɗinku zai iya kasawa, domin kun rubuta \"hours\", ba \"open\" ba. Kowace sabuwar hanyar faɗin abu tana buƙatar sabuwar doka. Wannan ita ce babbar iyakar shirye-shirye masu dokoki.",
            "Wannan ne ainihin dalilin da yasa samfuran AI suke da amfani: samfurin harshe ya koya daga miliyoyin jimloli, don haka zai iya fahimtar hanyoyi da yawa na faɗin abu ɗaya. A babi na gaba za ku yi amfani da ɗaya."
          ],
          steps: ["Ku fara da while True:", "A ciki, ku sami message = input(\"You: \")", "Idan message.lower() == \"bye\", ku buga sallama ku yi break.", "In ba haka ba, print(\"Bot:\", reply(message)).", "Ku gwada da hanyoyi biyar daban-daban na yin tambaya ɗaya."],
          words: [["while True", "madaukin da ke ci gaba har sai wani abu a cikinsa ya dakatar da shi."], ["break", "yana fita daga madauki nan take."], ["Iyaka (limit)", "abin da shiri ba zai iya yi da kyau ba."]],
          slides: [
            { title: "Madaukin hira", bullets: ["while True: yana ci gaba da hira", "input() yana karɓar saƙon", "break yana ƙare hirar a kan \"bye\""] },
            { title: "Ku gwada kamar mai amfani na gaske", bullets: ["Ku tambayi abu ɗaya ta hanyoyi biyar", "Ku ƙirga nawa bot ɗin ya yi daidai"] },
            { title: "Dalilin da yasa dokoki suke tsayawa", bullets: ["Kowace sabuwar hanyar faɗa tana buƙatar sabuwar doka", "Samfuran AI sun koya daga miliyoyin jimloli", "Wannan ne abin da Babi na 2 ke amfani da shi"] }
          ],
          tryIt: "Ku saka function ɗin amsarku daga Darasi na 2 a cikin madaukin hira da ke ƙarewa a kan \"bye\". Ku tambayi game da lokutan aiki (hours) ta hanyoyi biyar daban-daban. Ku rubuta nawa bot ɗinku ya fahimta, sannan ku ƙara doka ɗaya don gyara ɗaya da ya kasa.",
          youCanNow: "gina madaukin chatbot mai dokoki da ke aiki, da bayyana dalilin da yasa dokoki kaɗai suke da iyaka.",
          quickCheck: [
            { objective: "O3", q: "Me while True: yake yi shi kaɗai?", options: ["Yana maimaitawa har abada har sai wani abu kamar break ya dakatar da shi", "Yana gudana sau ɗaya kawai", "Yana gudana ne kawai idan mai amfani ya ce bye", "Yana loda laburare"], answer: 0, why: "while True yana maimaitawa har abada, don haka kuna buƙatar hanyar fita kamar break." },
            { objective: "O3", q: "Masu amfani suna ta rubuta \"what time do you close?\" kuma bot ɗinku mai dokoki yana kasawa. Me hakan zai gaya muku?", options: ["Bot ɗin yana da kuskuren rubutu", "Colab ya lalace", "Kowace sabuwar hanyar faɗin abu tana buƙatar sabuwar doka, kuma wannan ita ce iyakar bots masu dokoki", "Ya kamata masu amfani su rubuta da manyan haruffa"], answer: 2, why: "Bots masu dokoki suna dacewa ne da dokokin da kuka rubuta kawai; samfuran harshe suna ɗaukar hanyoyi da yawa na faɗin abu." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Tubalan Python don AI",
        questions: [
          { objective: "O1", q: "Mene ne babban bambanci tsakanin code mai dokoki da samfurin AI?", options: ["Code mai dokoki koyaushe ya fi sauri", "Samfura ba sa amfani da code ko kaɗan", "Samfuri ya koyi alamu daga misalai maimakon a rubuta kowace doka da hannu", "Babu bambanci"], answer: 2, why: "Samfura suna koyon alamu daga bayanai; code mai dokoki yana buƙatar a rubuta kowace doka." },
          { objective: "O1", q: "Cell ɗinku na Colab ya ce \"No module named\" game da wani laburare. Me za ku yi?", options: ["Ku gudanar da !pip install da sunan laburaren, sannan ku sake shigo da shi", "Ku sake kunna kwamfutarku", "Ku goge notebook ɗin", "Ku canja sunan variable ɗin"], answer: 0, why: "pip yana saka laburaren da ya ɓace." },
          { objective: "O2", q: "replies = {\"hours\": \"Open 9 to 5.\"}. Mene ne replies[\"hours\"]?", options: ["\"hours\"", "Kuskure", "True", "\"Open 9 to 5.\""], answer: 3, why: "Neman maɓalli yana ba da ƙimarsa." },
          { objective: "O2", q: "Me yasa ake amfani da message.lower() a chatbot?", options: ["Don a gajarta rubutun", "Don \"HOURS\" da \"hours\" duka su dace", "Don a goge saƙon", "Don a fassara shi"], answer: 1, why: "Mayar da rubutu ƙananan haruffa yana sa haɗawa ta ƙyale manyan haruffa." },
          { objective: "O3", q: "Wace kalma ce ke fita daga madaukin while True?", options: ["exit", "break", "stop", "return to"], answer: 1, why: "break yana fita daga madaukin nan take." }
        ]
      }
    },
    {
      name: "Babi na 2: Amfani da samfurin AI da aka riga aka horar",
      lessons: [
        {
          objectives: ["O4"],
          title: "Loda samfurin da aka riga aka horar da Hugging Face",
          minutes: 6,
          goal: "Loda samfurin yanayi (sentiment) kyauta a Colab, ku yi amfani da shi a kan jimla ɗaya.",
          text: [
            "Samfurin da aka riga aka horar (pre-trained model) shi ne wanda wani ya riga ya horar ya raba, don haka za ku iya amfani da shi nan take. Hugging Face shafin intanet ne da ke ajiye dubban samfura kyauta, kuma laburarensa Transformers yana loda su da layi ɗaya.",
            "Kayan aiki mafi sauƙi shi ne pipeline. Kuna gaya masa aikin da samfurin: classifier = pipeline(\"text-classification\", model=\"distilbert/distilbert-base-uncased-finetuned-sst-2-english\"). Wannan samfurin yana karanta rubutun Turanci ya yanke ko yanayinsa (sentiment) POSITIVE (mai kyau) ne ko NEGATIVE (marar kyau).",
            "Ku yi amfani da shi kamar function: classifier(\"The practice today was great!\"). Yana mayar da list da dictionary a ciki, misali [{'label': 'POSITIVE', 'score': 0.99}]. Makin (score) yana nuna yadda samfurin ya tabbata, daga 0 zuwa 1. Gudanarwa ta farko tana sauke samfurin, don haka tana ɗan ɗaukar lokaci.",
            "Koyaushe ku karanta shafin samfuri (\"model card\", wato katin bayaninsa) kafin ku yi amfani da shi: yana faɗin abin da aka horar da samfurin a kai, abin da aka yi shi don shi, da lasisinsa."
          ],
          steps: ["A cikin sabon cell: from transformers import pipeline", "Ku ƙirƙiri classifier = pipeline(\"text-classification\", model=\"distilbert/distilbert-base-uncased-finetuned-sst-2-english\")", "Ku gudanar da result = classifier(\"The practice today was great!\")", "print(result[0][\"label\"], result[0][\"score\"])", "Idan transformers ya ɓace, ku fara gudanar da !pip install transformers."],
          words: [["Samfurin da aka riga aka horar (pre-trained model)", "samfurin da wani ya riga ya horar wanda za ku iya amfani da shi nan take."], ["Hugging Face", "shafin intanet da tarin laburare don raba samfuran AI kyauta."], ["pipeline", "kayan aikin Transformers da ke loda samfuri don wani aiki a layi ɗaya."], ["Yanayi (sentiment)", "yanayin wani rubutu: mai kyau ko marar kyau."], ["Maki (score)", "yadda samfurin ya tabbata, daga 0 zuwa 1."], ["Katin bayanin samfuri (model card)", "shafin da ke bayyana abin da samfuri yake yi, bayanansa da lasisinsa."]],
          slides: [
            { title: "Samfuran da aka riga aka horar", bullets: ["Wani ya riga ya horar da su", "Hugging Face yana ajiye dubbai, kyauta", "Ku fara karanta katin bayanin samfurin (model card)"] },
            { title: "Layi ɗaya don lodawa", bullets: ["from transformers import pipeline", "pipeline(\"text-classification\", model=...)", "Gudanarwa ta farko tana sauke samfurin"] },
            { title: "Karanta sakamakon", bullets: ["[{'label': 'POSITIVE', 'score': 0.99}]", "result[0][\"label\"] shi ne yanayin", "result[0][\"score\"] shi ne yadda ya tabbata"] }
          ],
          sources: [HF_PIPELINES, HF_MODEL],
          tryIt: "Ku loda mai rarraba yanayi (classifier) ku gudanar da shi a kan jimloli uku na Turanci da kuka rubuta: ɗaya mai farin ciki a fili, ɗaya mai ɓacin rai a fili, da ɗaya gauraye kamar \"The food was good but the wait was long.\" Ku buga lakabi da maki na kowanne, ku lura da wanda samfurin ya fi rashin tabbata da shi.",
          youCanNow: "loda samfurin da aka riga aka horar da pipeline, da karanta lakabinsa da makinsa.",
          quickCheck: [
            { objective: "O4", q: "Me katin bayanin samfuri (model card) yake gaya muku?", options: ["Kalmar sirrinku ta Colab", "Yawan ra'ayoyin da kuke da su", "Farashin kwamfuta", "Abin da aka horar da samfurin a kai, abin da aka yi shi don shi, da lasisinsa"], answer: 3, why: "Ku karanta katin bayanin samfuri kafin ku yi amfani da shi." },
            { objective: "O4", q: "Kun gudanar da classifier a karon farko kuma yana ɗaukar lokaci. Me za ku yi?", options: ["Ku dakatar da shi ku haƙura", "Ku jira; gudanarwa ta farko tana sauke samfurin", "Ku sake saka Python", "Ku canja lakabin zuwa POSITIVE da hannu"], answer: 1, why: "Gudanarwa ta farko tana sauke samfurin, don haka tana ɗaukar lokaci." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Gudanar da samfurin a kan rubutu da yawa",
          minutes: 5,
          goal: "Amfani da madauki don rarraba jerin ra'ayoyi da ƙirga sakamakon.",
          text: [
            "Shirye-shirye na gaske suna aiki da rubutu da yawa, ba ɗaya ba. Ku saka ra'ayoyinku a cikin list, sannan ku yi madauki: for comment in comments: result = classifier(comment)[0]. Kuna kuma iya ba da dukan list ɗin a lokaci ɗaya, classifier(comments), ku sami sakamako ɗaya ga kowane ra'ayi.",
            "Don taƙaitawa, ku riƙe masu ƙirga (counters): positive = 0 da negative = 0 kafin madaukin, sannan ku ƙara 1 ga wanda ya dace a cikinsa bisa result[\"label\"].",
            "Ku zagaye makin don ya zama mai sauƙin karantawa: round(result[\"score\"], 2) yana ba da wurare biyu bayan digo. f-string yana buga layi mai tsari: print(f\"{result['label']:8} {round(result['score'], 2)}  {comment}\")."
          ],
          steps: ["Ku saka aƙalla ra'ayoyi biyar a cikin list.", "Ku saka positive = 0 da negative = 0.", "Ku zagaya cikin ra'ayoyin ku rarraba kowanne.", "Ku buga lakabin, makin da aka zagaye, da ra'ayin.", "Ku ƙara ga mai ƙirga da ya dace, sannan ku buga jimillar bayan madaukin."],
          words: [["Mai ƙirga (counter)", "variable da ke ƙirga sau nawa wani abu ya faru."], ["round()", "yana gajarta lamba zuwa wasu wurare bayan digo."], ["Rukuni (batch)", "tarin bayanan shigarwa da ake sarrafawa tare."]],
          slides: [
            { title: "Rubutu da yawa, madauki ɗaya", bullets: ["Ku saka ra'ayoyi a cikin list", "for comment in comments:", "result = classifier(comment)[0]"] },
            { title: "Ku ƙirga yayin da kuke tafiya", bullets: ["positive = 0, negative = 0 kafin madaukin", "Ku ƙara 1 ga mai ƙirga da ya dace a ciki", "Ku buga jimilla bayan madaukin"] },
            { title: "Ku sa shi mai sauƙin karantawa", bullets: ["round(score, 2) don wurare biyu bayan digo", "Layi ɗaya mai tsari ga kowane ra'ayi"] }
          ],
          tryIt: "Ku rubuta ra'ayoyi shida (da Turanci) game da aji, atisayen ƙungiya ko wani shago na kusa. Ku rarraba su a cikin madauki, ku buga layi ɗaya mai tsari ga kowanne, sannan ku buga nawa ne masu kyau da nawa ne marasa kyau.",
          youCanNow: "gudanar da samfurin AI a kan jerin rubutu, da taƙaita sakamakon da masu ƙirga.",
          quickCheck: [
            { objective: "O5", q: "Me classifier(comments) yake mayarwa idan comments list ne?", options: ["Sakamako ɗaya ga dukan list ɗin", "Kuskure a kowane lokaci", "Sakamako ɗaya ga kowane ra'ayi", "Sakamakon ra'ayi na farko kawai"], answer: 2, why: "Ba da list yana mayar da sakamako ɗaya ga kowane ra'ayi." },
            { objective: "O5", q: "A cikin madaukinku, result[\"label\"] shi ne \"POSITIVE\". Me za ku yi da masu ƙirganku?", options: ["Ku ƙara 1 ga positive", "Ku ƙara 1 ga negative", "Ku mayar da positive zuwa 0", "Ku goge ra'ayin"], answer: 0, why: "Ku ƙara 1 ga mai ƙirga da ya dace da lakabin." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Duba AI da kammala mai rarraba ra'ayoyi",
          minutes: 6,
          goal: "Yi wa sakamakon da ba a tabbata da su ba alama don mutum ya duba, da kammala mai rarraba ra'ayoyi.",
          text: [
            "Samfuran AI suna yin kuskure. Wannan samfurin ya san mai kyau da marar kyau ne kawai, don haka ana tilasta ra'ayoyin da ba su da gefe ko gauraye su shiga ɗaya daga cikinsu. Yana kuma iya kasa gane habaici (sarcasm), misali \"Great, another rainy game day.\", kuma an horar da shi a kan sharhin fina-finai na Turanci, don haka kalmomin titi ko wasu harsuna na iya ruɗa shi.",
            "Kyakkyawar al'ada ita ce iyakar tabbaci (confidence threshold): idan makin ya gaza lambar da kuka zaɓa, kamar 0.80, shirin yana cewa \"check by hand\" (a duba da hannu) maimakon amincewa da lakabin. Mutum ne ke yanke hukunci na ƙarshe a kan duk wani abu mai muhimmanci.",
            "Ku yi amfani da AI cikin gaskiya: kada ku gudanar da saƙonnin sirri a cikin kayan aiki ba tare da izini ba, kada ku liƙa kalmomin sirri ko maɓallan API a notebook da ake rabawa, kuma ku gaya wa mutane idan sakamako ya fito daga AI.",
            "Yanzu kuna da komai don aikin ƙarshe: list, samfuri, madauki, if mai iyaka, masu ƙirga, da bugu mai sarari."
          ],
          steps: ["Ku zaɓi iyaka, misali THRESHOLD = 0.80.", "A cikin madaukin, ku duba: if result[\"score\"] < THRESHOLD:", "Ku buga \"check by hand\" kusa da waɗannan ra'ayoyin.", "Ku ƙirga masu kyau da marasa kyau kamar da.", "Ku buga jimilla da yawan waɗanda ke buƙatar mutum ya duba."],
          words: [["Iyaka (threshold)", "lambar yanke da kuka zaɓa; sakamakon da ke ƙasa da ita ana sarrafa su ta musamman."], ["Tabbaci (confidence)", "yadda samfuri ya tabbata da amsarsa."], ["Habaici (sarcasm)", "faɗin akasin abin da kuke nufi, wanda samfura sukan kasa ganewa."], ["Mutum a cikin aikin (human in the loop)", "mutum yana duba sakamakon AI kafin a yi amfani da su."]],
          slides: [
            { title: "Samfura suna yin kuskure", bullets: ["Mai kyau ko marar kyau kawai: ana tilasta gauraye", "Yana kasa gane habaici da kalmomin titi", "An horar da shi a kan sharhin fina-finai na Turanci"] },
            { title: "Ku yi amfani da iyaka", bullets: ["THRESHOLD = 0.80", "Maki ƙasa da ita: \"check by hand\"", "Mutum ne ke yanke hukunci na ƙarshe"] },
            { title: "Ku yi amfani da AI cikin gaskiya", bullets: ["Ku nemi izini don saƙonnin sirri", "Babu kalmomin sirri ko maɓallai a notebooks da ake rabawa", "Ku faɗa idan sakamako ya fito daga AI"] }
          ],
          sources: [HF_MODEL],
          tryIt: "Aikin ƙarshe: ku gina mai rarraba ra'ayoyi. Ku yi amfani da aƙalla ra'ayoyi shida, har da ɗaya gauraye da ɗaya mai habaici. Ku buga kowanne da lakabinsa da makinsa, ku yi wa duk abin da ya gaza 0.80 alamar \"check by hand\", sannan ku buga jimillar masu kyau, marasa kyau da na \"check by hand\". Sannan ku karanta waɗanda aka yi wa alama da kanku ku yanke hukunci.",
          youCanNow: "gina shirin AI da ke aiki a Python da ke rarraba rubutu, ya ba da rahoton sakamakonsa, ya kuma miƙa wa mutum yanayin da bai tabbata da su ba.",
          quickCheck: [
            { objective: "O6", q: "Me yasa wannan samfurin yanayi zai iya kuskure a kan ra'ayi marar gefe?", options: ["Yana karanta lambobi ne kawai", "Ya san mai kyau da marar kyau ne kawai, don haka ana tilasta ra'ayoyi marasa gefe su shiga ɗaya", "Yana buƙatar kalmar sirri", "Yana aiki ne a ranar Jumma'a kawai"], answer: 1, why: "Samfurin yana da lakabi biyu ne kawai, don haka ana tilasta ra'ayoyi gauraye ko marasa gefe su shiga ɗaya." },
            { objective: "O6", q: "Aboki yana son ku gudanar da saƙonninsa na sirri a cikin mai rarrabawarku. Me za ku yi?", options: ["Ku gudanar da su ba tare da tambayar waɗanda suka rubuta su ba", "Ku saka sakamakon a intanet", "Ku liƙa maɓallin API ɗinku a notebook don ya yi sauri", "Ku yi amfani da saƙonnin da kuke da izinin amfani da su kawai, kuma ku faɗa cewa sakamakon ya fito daga AI"], answer: 3, why: "Amfani da AI cikin gaskiya yana nufin samun izini don bayanan sirri da gaya wa mutane idan an yi amfani da AI." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Amfani da samfurin AI da aka riga aka horar",
        questions: [
          { objective: "O4", q: "Mene ne samfurin da aka riga aka horar?", options: ["Samfurin da dole ku fara horarwa na makonni", "Jerin dokokin da kuke rubutawa", "Shafin intanet na biya", "Samfurin da wani ya riga ya horar wanda za ku iya amfani da shi nan take"], answer: 3, why: "Samfuran da aka riga aka horar suna shirye don amfani." },
          { objective: "O4", q: "Classifier ya mayar da [{'label': 'NEGATIVE', 'score': 0.97}]. Me 0.97 yake nufi?", options: ["Samfurin ya tabbata sosai cewa ra'ayin marar kyau ne", "An karanta kalmomi 97", "Tsawon ra'ayin kashi 97% ne", "Ya ci centi 97"], answer: 0, why: "Makin shi ne tabbacin samfurin daga 0 zuwa 1." },
          { objective: "O5", q: "Wane layi ne ke samun lakabin daga result = classifier(text)?", options: ["result.label", "result[\"label\"][0]", "result[0][\"label\"]", "label(result)"], answer: 2, why: "Sakamakon list ne da ke ɗauke da dictionary, don haka da farko [0], sannan [\"label\"]." },
          { objective: "O6", q: "Wani ra'ayi ya sami maki 0.55. Da iyakar 0.80, me shirinku zai yi?", options: ["Ya goge shi", "Ya ƙirga shi sau biyu", "Ya dakatar da shirin", "Ya yi masa alamar \"check by hand\""], answer: 3, why: "Makin da ke ƙasa da iyakar ana miƙa su ga mutum." },
          { objective: "O6", q: "Wanne a cikin waɗannan ne amfani da AI cikin gaskiya?", options: ["Liƙa maɓallin API ɗinku a notebook da kuke rabawa", "Gudanar da saƙonnin sirri na abokan aji ba tare da tambaya ba", "Gaya wa mutane cewa sakamako ya fito daga AI, da duba waɗanda ba a tabbata da su ba", "Amincewa da kowane lakabi"], answer: 2, why: "Fitowa fili da riƙe mutum a cikin aikin shi ne amfani cikin gaskiya." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Shirya Shirye-shiryen AI da Python don Masu Farawa",
    questions: [
      { objective: "O1", q: "Mafi kyawun bayanin samfurin AI shi ne:", options: ["Jerin umarnin if", "Shirin da ya koyi alamu daga misalai masu yawa", "Wani nau'in allon rubutu (keyboard)", "Adireshin shafin intanet"], answer: 1, why: "Samfura suna koyon alamu daga bayanai." },
      { objective: "O1", q: "Me import yake yi a Python?", options: ["Yana loda laburare don ku yi amfani da code ɗinsa", "Yana sauke fim", "Yana buga rubutu", "Yana goge fayil"], answer: 0, why: "import yana kawo laburare cikin shirinku." },
      { objective: "O1", q: "Me alamar ! take nufi a !pip install transformers a Colab?", options: ["Kuskure ne", "A ƙara murya", "A gudanar da wannan a matsayin umarnin tsarin kwamfuta, ba Python ba", "A saka shi sau biyu"], answer: 2, why: "! yana gaya wa Colab ya gudanar da umarnin shell." },
      { objective: "O1", q: "Wanne ne gaskiya game da Colab na kyauta?", options: ["Kyauta ne, amma albarkatunsa suna da iyaka kuma suna iya canjawa", "Albarkatunsa ba su da iyaka", "Dole ku fara saka shi", "Yana aiki a waya kawai"], answer: 0, why: "Colab ya ce albarkatun kyauta ba a ba da tabbacinsu ba kuma ba marasa iyaka ba ne." },
      { objective: "O2", q: "\"HELP\".lower() yana bayarwa:", options: ["\"HELP\"", "\"Help\"", "Kuskure", "\"help\""], answer: 3, why: "lower() yana mayar da kowane harafi ƙarami." },
      { objective: "O2", q: "\"price\" in \"what is the price?\" yana bayarwa:", options: ["False", "True", "\"price\"", "0"], answer: 1, why: "in yana duba ko kalmar tana cikin rubutun." },
      { objective: "O2", q: "A cikin {\"hours\": \"Open 9 to 5.\"}, mene ne \"hours\"?", options: ["Ƙima (value)", "Maɓalli (key)", "List", "Madauki"], answer: 1, why: "Gefen hagu na biyun shi ne maɓalli." },
      { objective: "O3", q: "Chatbot ɗinku bai fahimci \"when do you open?\" ba amma ya san \"hours\". Me yasa?", options: ["Colab ya lalace", "Python ba ya iya karanta tambayoyi", "Dictionary ɗin ya yi gajarta da yawa don yin aiki", "Bots masu dokoki suna dacewa ne da dokokin da kuka rubuta kawai"], answer: 3, why: "Kowace hanyar faɗa tana buƙatar dokarta a bot mai dokoki." },
      { objective: "O3", q: "A cikin madaukin hira, me ya kamata ya faru idan mai amfani ya rubuta bye?", options: ["A buga sallama a yi break", "A fara sabon madauki", "A nemi kalmar sirri", "Babu komai"], answer: 0, why: "break yana ƙare madaukin cikin tsari." },
      { objective: "O3", q: "Me yasa samfuran harshe suke da amfani ga chatbots?", options: ["Ba sa taɓa yin kuskure", "Ba sa buƙatar kwamfuta", "Suna fahimtar hanyoyi da yawa na faɗin abu ɗaya", "Suna aiki ba tare da bayanai ba"], answer: 2, why: "Sun koya daga miliyoyin jimloli." },
      { objective: "O4", q: "Mene ne Hugging Face?", options: ["Manhajar sada zumunta", "Kuskuren Python", "Wasan bidiyo", "Shafi da laburare don raba samfuran AI kyauta"], answer: 3, why: "Hugging Face yana ajiye samfura da laburaren Transformers." },
      { objective: "O4", q: "Wane layi ne ke loda samfurin yanayi?", options: ["import sentiment", "model = load()", "pipeline(\"text-classification\", model=\"distilbert/distilbert-base-uncased-finetuned-sst-2-english\")", "print(\"model\")"], answer: 2, why: "pipeline yana karɓar aikin da sunan samfurin." },
      { objective: "O4", q: "Me yasa gudanarwa ta farko ta samfurin take ɗaukar lokaci?", options: ["Colab yana jinkiri da gangan", "Tana sauke samfurin", "Tana horarwa daga farko", "Tana duba imel ɗinku"], answer: 1, why: "Fayilolin samfurin suna saukowa a karon farko." },
      { objective: "O4", q: "Me ya kamata ku karanta kafin ku yi amfani da samfuri?", options: ["Katin bayanin samfurin (model card)", "Tarihin burauzar ku", "Tambarin Colab", "Babu komai"], answer: 0, why: "Katin bayanin samfuri yana bayyana amfaninsa, bayanansa da lasisinsa." },
      { objective: "O4", q: "Makin samfurin yanayi shi ne:", options: ["Tsawon rubutun", "Yawan kalmomi masu kyau", "Yadda samfurin ya tabbata, daga 0 zuwa 1", "Maki cikin 100"], answer: 2, why: "Maki shi ne tabbaci." },
      { objective: "O5", q: "Don ƙirga ra'ayoyi masu kyau a madauki, da farko kuna:", options: ["Saka positive = 0 kafin madaukin", "Buga positive", "Goge list ɗin", "Shigo da counter"], answer: 0, why: "Mai ƙirga yana farawa daga 0 kafin madaukin." },
      { objective: "O5", q: "round(0.98765, 2) yana bayarwa:", options: ["0.98", "0.99", "1", "98"], answer: 1, why: "Idan aka zagaye zuwa wurare biyu bayan digo, 0.98765 ya zama 0.99." },
      { objective: "O6", q: "Wane ra'ayi ne wannan samfurin ya fi yiwuwa ya yi kuskure a kai?", options: ["\"I loved it!\"", "\"Great, another rainy game day.\"", "\"This was terrible.\"", "\"Best class ever.\""], answer: 1, why: "Habaici yana faɗin akasin abin da yake nufi, kuma samfura sukan kasa gane shi." },
      { objective: "O6", q: "Me yasa ake amfani da iyakar tabbaci?", options: ["Don a sa shirin ya yi sauri", "Don a miƙa sakamakon da ba a tabbata da su ba ga mutum ya duba", "Don a ɓoye ra'ayoyi marasa kyau", "Don a goge ƙananan maki"], answer: 1, why: "Sakamakon da ke da ƙaramin tabbaci suna buƙatar mutum ya duba." },
      { objective: "O6", q: "Wanne BA shi da aminci a saka a notebook da kuke rabawa?", options: ["Jerin ra'ayoyin ƙirƙira", "Layin bayani (comment) da ke farawa da #", "Umarnin print", "Kalmar sirrinku ko maɓallin API ɗinku"], answer: 3, why: "Ana iya kwafe sirrin da ke cikin notebooks da ake rabawa a yi amfani da su ba daidai ba." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
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
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "An loda samfurin kuma an yi amfani da shi",
        objective: "O4",
        notYet: "Samfurin bai loda ba, ko babu lakabi ko maki da aka samar.",
        meets: "Samfurin yanayi da aka riga aka horar yana gudana kuma yana ba da lakabi da maki ga kowane ra'ayi.",
        exceeds: "Notebook ɗin ya rubuta abin da katin bayanin samfurin ya ce an horar da shi a kai."
      },
      {
        name: "Madauki da bugu",
        objective: "O5",
        notYet: "Ra'ayoyin ba su kai shida ba, ko ba a buga kowane ra'ayi da lakabinsa da makinsa ba.",
        meets: "Aƙalla ra'ayoyi shida, kowanne an buga shi da lakabinsa da makin da aka zagaye.",
        exceeds: "Bugun yana cikin layuka masu tsari da f-string."
      },
      {
        name: "Ƙididdiga",
        objective: "O5",
        notYet: "Ƙididdigar masu kyau da marasa kyau ba ta nan ko ba daidai ba ce.",
        meets: "An buga ƙididdiga daidai ta ra'ayoyi masu kyau da marasa kyau.",
        exceeds: "Yana kuma buga nawa aka yi wa alamar \"check by hand\"."
      },
      {
        name: "Iyakar tabbaci",
        objective: "O6",
        notYet: "Babu iyaka, ko ba a yi wa ƙananan maki alama ba.",
        meets: "Kowane maki da ke ƙasa da 0.80 yana da alamar \"check by hand\".",
        exceeds: "Ya haɗa da ra'ayi mai habaici ko gauraye, kuma ya bayyana dalilin da yasa samfurin zai iya kuskure a kansa."
      },
      {
        name: "Amfani cikin gaskiya",
        objective: "O6",
        notYet: "Notebook ɗin yana da saƙonnin sirri ba tare da izini ba, ko kalmar sirri ko maɓallin API.",
        meets: "Ra'ayoyin ƙirƙira ko waɗanda aka ba da izini kawai, kuma babu kalmomin sirri ko maɓallai a notebook ɗin.",
        exceeds: "Ya ƙara bayani cewa lakabobin sun fito daga AI kuma mutum yana duba waɗanda ba a tabbata da su ba."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka sami \"Ya cika\" ko \"Ya wuce\" a kowane layin rubric na mai rarraba ra'ayoyi",
      "Masu koyo da suka ce sun gina ko sun canja wani shirin AI cikin kwanaki 30 bayan kwas ɗin (binciken biyo baya)",
      "Masu koyo da suka ci gaba zuwa kwas na gaba, kamar \"Gabatarwa ga Machine Learning (Koyon Na'ura)\" ko Data Science for Beginners",
      "Masu koyo da suka nuna mai rarraba ra'ayoyinsu a cikin tarin ayyukansu (portfolio), a aji, a ƙungiya ko a takardar neman aiki"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta ko laptop mai burauzar intanet",
      "Asusun Google kyauta don amfani da Google Colab",
      "Gajerun ra'ayoyin ƙirƙira shida ko fiye, misali daga atisaye, aji ko ƙaramin shago",
      "Kusan minti 60 zuwa 75 gaba ɗaya, tare da lokacin atisaye"
    ],
    facilitatorNotes: [
      "Ku sauke samfurin sau ɗaya kafin aji a kan hanyar sadarwa (network) ɗaya don ku tabbata yana aiki; hanyoyin sadarwar makarantu wani lokaci suna hana sauke samfura.",
      "Ku sa masu koyo su yi amfani da ra'ayoyin ƙirƙira ko waɗanda suke da izinin amfani da su; kada a taɓa amfani da saƙonnin sirri na gaske.",
      "Ku tunatar da masu koyo kada su taɓa liƙa kalmomin sirri ko maɓallan API a notebook, musamman wanda suke rabawa.",
      "Ku nemi kowane mai koyo ya nemo ra'ayi ɗaya da samfurin ya yi kuskure a kai, sannan ku tattauna dalilin a matsayin ƙungiya.",
      "Albarkatun Colab na kyauta suna iya ƙarewa; idan zama ya tsaya, ku nuna wa masu koyo yadda ake sake haɗawa (reconnect) da sake gudanar da cells daga sama."
    ]
  }
};
