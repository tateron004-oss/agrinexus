"use strict";

// Koach Learn course (Igbo translation of shared/ai-programming-python.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const COLAB = { name: "Google Colab: Ajụjụ a na-ajụkarị", url: "https://research.google.com/colaboratory/faq.html" };
const HF_PIPELINES = { name: "Hugging Face Transformers: Pipelines", url: "https://huggingface.co/docs/transformers/en/main_classes/pipelines" };
const HF_MODEL = { name: "Hugging Face: kaadị model distilbert-base-uncased-finetuned-sst-2-english", url: "https://huggingface.co/distilbert/distilbert-base-uncased-finetuned-sst-2-english" };

module.exports = {
  id: "ai-programming-python-ig",
  lang: "ig",
  translationOf: "ai-programming-python",
  category: "Youth",
  name: "Mmemme AI na Python maka Ndị Mmalite",
  skills: "Iji library Python na Colab, Iwu chatbot nwere iwu, Ibubata model AI a zụrụla azụ, Ịgba AI n'ọtụtụ ederede, Ịlele azịza AI",
  outcome: "ide mmemme Python na Google Colab nke na-eji model AI n'efu a zụrụla azụ kewaa ndepụta okwu ndị mmadụ dere ka ọ bụrụ nke ọma (positive) na nke ọjọọ (negative), na-egosipụta nchịkọta, ma na-akara azịza AI na-ejighị n'aka ka mmadụ lelee ha.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị mmalite maara ntakịrị Python (variable, if, list na loop) ma chọọ ime mmemme na-eji AI. Ọ bụrụ na ị debeghị koodu mgbe ọ bụla, buru ụzọ were \"Mmalite Mmemme Kọmputa na Python\".",
    "Ị ga-amalite site n'iwu chatbot dị mfe na iwu Python nkịtị, ka ị hụ ihe mmemme nwere ike ime n'enweghị AI. Mgbe ahụ, ị ga-ebubata model AI n'efu a zụrụla azụ site na Hugging Face ma jiri ya gụọ obi (mood) dị n'okwu ndị mmadụ dere, ụdị ngwa ụlọ ọrụ na-eji n'elele nyocha (review) na nnyocha (survey).",
    "Ihe niile na-agba na Google Colab n'ime browser gị, n'efu. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise ma na-ejedebe na koodu ị ga-ede n'onwe gị. Obere nnwale ihe ọmụma na-emechi isi ọ bụla, ule nwere ajụjụ 20 na-emechikwa ihe ọmụmụ a."
  ],
  finalTask: "Wuo ihe na-ekewa nzaghachi (feedback) na Google Colab: dee ndepụta nwere opekata mpe okwu mkpụmkpụ isii (dịka ọmụmaatụ site n'omume otu egwuregwu, klas ma ọ bụ obere ụlọ ahịa), gbaa model sentiment a zụrụla azụ n'otu ọ bụla, gosipụta okwu ọ bụla na label na score ya, kaa azịza ọ bụla nwere score na-erughị 0.80 dị ka \"check by hand\" (lelee ya n'aka), ma gosipụta ole bụ positive na ole bụ negative.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị ntorobịa na ndị okenye dere ntakịrị Python ma chọọ iji AI wuo ihe: ụmụ akwụkwọ sekọndrị na mahadum, ndị otu klọb koodu, ndị na-agbanwe ọrụ na ndị na-amụ ọrụ.",
    startingPoint: "Ha nwere ike ide ma gbaa obere mmemme Python na Google Colab nwere variable, if, list, loop na function. Ọtụtụ ebubatabeghị library AI mgbe ọ bụla, ejibeghị model a zụrụla azụ, ma ọ bụ chee echiche banyere otu model si ji n'aka ma ọ bụ mgbe mmadụ kwesịrị ilele azịza ya.",
    gap: "Ugbu a, ngwa AI dị n'ọtụtụ ọrụ na ngwaahịa, ndị were mmadụ n'ọrụ na-ejikwa ndị nwere ike iji ha na koodu ma lelee ha nke ọma kpọrọ ihe. N'enweghị omume aka, ndị na-amụ ihe na-eche na AI bụ anwansi ma ọ bụ na ọ karịrị ha, ha anaghịkwa amụta ịnwale oke model ma ọ bụ idebe ozi nzuzo n'ebe ọ na-adịghị.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; a na-akọwa okwu dị ka library, model, score na threshold",
      "Ngwaọrụ: kọmputa ma ọ bụ laptop nwere web browser; ide koodu na tablet siri ike",
      "Akaụntụ na ụgwọ: akaụntụ Google n'efu maka Google Colab na model Hugging Face n'efu; ihe Colab na-enye n'efu nwere oke, o nwekwara ike ịgbanwe",
      "Oge: ihe dị ka nkeji 5 ruo 6 kwa nkuzi gbakwunyere omume, ihe dị ka nkeji 60 ruo 75 n'ozuzu",
      "Nzuzo: ndị na-amụ ihe na-eji okwu e chepụtara echepụta ma ọ bụ nke e nyere ha ikike iji, ha anaghịkwa etinye okwuntughe ma ọ bụ API key na notebook a na-ekesa"
    ],
    prerequisites: "Mmalite Mmemme Kọmputa na Python (variable, if, list, loop na function)."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Na Google Colab", action: "ịkọwa otu model AI si dị iche na koodu nwere iwu, na ibubata ma ọ bụ wụnye library Python", standard: "site n'ịkọwa ya nke ọma n'otu ahịrịokwu, library ahụ ebuba n'enweghị error" },
    { id: "O2", condition: "Mgbe e nyere gị mkpụrụ okwu (keyword) na nzaghachi maka chatbot dị mfe", action: "iji ngwa string na dictionary jikọta ozi na nzaghachi ziri ezi", standard: "na-ejikọta ya n'agbanyeghị mkpụrụ edemede ukwu, na-enyekwa nzaghachi nkịtị (default) mgbe ọ dịghị ihe dabara" },
    { id: "O3", condition: "Mgbe e nyere gị function nzaghachi gị", action: "ide loop mkparịta ụka na-akwụsị mgbe onye ọrụ kwuru bye, na ịkọwa oke nzaghachi nwere iwu", standard: "loop ahụ na-apụ na bye, ma nwee opekata mpe otu ọmụmaatụ iwu ndị ahụ enweghị ike ijikwa" },
    { id: "O4", condition: "Site n'iji pipeline Hugging Face", action: "ibubata model sentiment a zụrụla azụ, ịgba ya n'otu ahịrịokwu, na ịgụ label na score ya", standard: "mgbe ị gụchara kaadị model ahụ, ma gụọ label na score ahụ nke ọma" },
    { id: "O5", condition: "Mgbe e nyere gị ndepụta okwu", action: "ịgba model ahụ n'okwu ọ bụla site na loop, ịgụta label ndị ahụ, na igosipụta nchịkọta doro anya", standard: "ọnụọgụ ndị ahụ dabara na label ndị ahụ, a gbachakwara score n'ọnụọgụ ntụpọ abụọ" },
    { id: "O6", condition: "Mgbe e nyere gị azịza model ahụ", action: "ịkara azịza ndị dị n'okpuru threshold obi ike ka mmadụ lelee ha, na ịgbaso omume AI nwere ọrụ", standard: "a kara score ọ bụla dị n'okpuru threshold \"check by hand\", ọ dịghịkwa ozi nzuzo ma ọ bụ key na notebook ahụ" }
  ],
  chapters: [
    {
      name: "Isi 1: Ihe nkwado Python maka AI",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ihe mmemme AI bụ, na ịhazi Colab",
          minutes: 5,
          goal: "Kọwaa ihe model AI bụ ma bubata library Python na Colab.",
          text: [
            "Mmemme nkịtị pụtara na ị na-ede iwu ọ bụla n'onwe gị: ọ bụrụ na okwu ahụ bụ \"hi\", kwuo \"hello\". Mmemme AI pụtara na ị na-eji model: mmemme mụtara usoro (pattern) site n'ọtụtụ ọmụmaatụ, ya mere ọ nwere ike ijikwa ọnọdụ ị na-edeghị iwu maka ha.",
            "Ị naghị ewukarị model site na mbido. Ị na-eji library: koodu dị njikere nke onye ọzọ dere ma kesaa. Na Python, ị na-ebubata library site na import. Library AI n'efu a ma ama gụnyere Hugging Face Transformers (model asụsụ), scikit-learn (machine learning ochie) na PyTorch (deep learning).",
            "Google Colab enweelarị ọtụtụ n'ime library ndị a. Ọ bụrụ na otu adịghị, ị na-awụnye ya n'ime cell site na !pip install sochiri aha ya. ! ahụ na-agwa Colab ka ọ gbaa iwu sistemụ kama Python. Colab bụ n'efu, mana a na-ekesa kọmputa ya, ya mere ihe ọ na-enye n'efu nwere oke, o nwekwara ike ịgbanwe."
          ],
          steps: ["Meghee colab.research.google.com ma mepụta notebook ọhụrụ.", "N'ime cell, dee: import random", "Ahịrị na-esote: print(random.choice([\"rock\", \"paper\", \"scissors\"]))", "Gbaa ya ugboro ole na ole ma lee ka azịza ahụ si agbanwe.", "Ọ bụrụ na import adaa na \"No module named\", gbaa !pip install <name> n'ime cell, wee nwaa ọzọ."],
          words: [["Model AI", "mmemme mụtara usoro site n'ọtụtụ ọmụmaatụ ma nwee ike ịkọ ihe na data ọhụrụ."], ["Library", "koodu dị njikere ị nwere ike ibubata ma jiri na mmemme nke gị."], ["import", "okwu Python na-ebubata library."], ["pip", "ngwa na-awụnye library Python."], ["Nwere iwu (rule-based)", "mmemme ebe mmadụ dere iwu ọ bụla n'aka."]],
          slides: [
            { title: "Iwu na model", bullets: ["Nwere iwu: ị na-ede iwu ọ bụla", "Model AI: mụtara usoro site n'ọmụmaatụ", "Model na-ejikwa ọnọdụ ị na-edeghị"] },
            { title: "Library na-arụ ọrụ siri ike", bullets: ["import na-ebubata koodu dị njikere", "Transformers, scikit-learn, PyTorch", "Ha niile bụ n'efu"] },
            { title: "Ịhazi Colab", bullets: ["Ọtụtụ library dịlarị n'ime ya", "Otu adịghị? !pip install <name>", "Ihe e nyere n'efu nwere oke, o nwekwara ike ịgbanwe"] }
          ],
          sources: [COLAB],
          tryIt: "Na notebook Colab ọhụrụ, bubata library random ma dee mmemme na-ahọrọ otu mgbatị ahụ, nri nta ma ọ bụ isiokwu ọmụmụ na mberede site na ndepụta nwere ise, ma gosipụta ya. Gbaa ya ugboro atọ.",
          youCanNow: "ịkọwa ọdịiche dị n'etiti koodu nwere iwu na model AI, na ibubata library na Colab.",
          quickCheck: [
            { objective: "O1", q: "Gịnị bụ library na Python?", options: ["Ndepụta notebook ndị i chekwara", "Folda Google Drive", "Koodu dị njikere nke onye ọzọ dere ma kesaa", "Ozi error"], answer: 2, why: "Library bụ koodu dị njikere a kesara, nke ị na-ebubata site na import." },
            { objective: "O1", q: "Ị chọrọ iji scikit-learn mana ị maghị ma Colab nwere ya. Gịnị ka ị ga-ebu ụzọ nwaa?", options: ["Gbaa import sklearn, ma ọ bụrụ na o kwuo \"No module named\", gbaa !pip install scikit-learn", "Dee library ahụ ọzọ n'onwe gị", "Hichapụ notebook ahụ", "Dee aha library ahụ n'ime print()"], answer: 0, why: "Colab enweelarị ọtụtụ library; wụnye site na !pip naanị ma ọ bụrụ na import adaa." }
          ]
        },
        {
          objectives: ["O2"],
          title: "String na dictionary: ụbụrụ chatbot dị mfe",
          minutes: 6,
          goal: "Jiri dictionary jikọta mkpụrụ okwu dị n'ozi na nzaghachi.",
          text: [
            "Mmemme AI na-arụ ọrụ n'ọtụtụ ederede, ya mere ị chọrọ ngwa string ole na ole. message.lower() na-eme ka ederede bụrụ mkpụrụ edemede nta, ka \"HELLO\" na \"hello\" dabara. \"hours\" in message bụ True ma ọ bụrụ na okwu ahụ dị ebe ọ bụla n'ozi ahụ. message.split() na-ekewa ahịrịokwu ka ọ bụrụ list okwu.",
            "Dictionary na-echekwa ụzọ abụọ: key na value, n'ime akara curly. replies = {\"hours\": \"We are open 9 to 5.\", \"price\": \"Prices are on our menu page.\"} Ị na-enweta value site na replies[\"hours\"].",
            "Iji wuo ụbụrụ chatbot, gaa n'ime dictionary site na loop: for keyword, answer in replies.items(): if keyword in message: return answer. Ọ bụrụ na ọ dịghị ihe dabara, laghachi nzaghachi nkịtị dị ka \"Sorry, I do not know that yet.\""
          ],
          steps: ["Mee dictionary nke mkpụrụ okwu na nzaghachi.", "Dee function reply(message).", "N'ime ya, debe message = message.lower().", "Gaa n'ime replies.items() site na loop ma laghachi azịza nke mkpụrụ okwu mbụ a hụrụ.", "Mgbe loop gachara, laghachi nzaghachi nkịtị."],
          words: [["String", "ederede na Python."], ["Dictionary", "otu ụzọ key: value n'ime akara curly."], ["Key", "aha ị na-achọ na dictionary."], ["Value", "ihe e chekwara n'okpuru key."], [".items()", "na-enye key na value ọ bụla dị na dictionary, maka loop."]],
          slides: [
            { title: "Ngwa ederede", bullets: ["lower(): \"HELLO\" ghọrọ \"hello\"", "\"hours\" in message: True ma ọ bụ False", "split(): ahịrịokwu ghọrọ list okwu"] },
            { title: "Dictionary", bullets: ["{\"hours\": \"Open 9 to 5.\"}", "Chọọ ya site na replies[\"hours\"]", "Key n'aka ekpe, value n'aka nri"] },
            { title: "Ụbụrụ chatbot", bullets: ["Mee ka ozi ahụ bụrụ mkpụrụ edemede nta", "Gaa n'ime replies.items() site na loop", "Laghachi nke mbụ dabara, ma ọ bụ nzaghachi nkịtị"] }
          ],
          tryIt: "Dee reply(message) maka ebe mgbatị ahụ, ọba akwụkwọ ma ọ bụ ụgbọ ala na-ere nri i chepụtara, nwere opekata mpe mkpụrụ okwu anọ (dịka ọmụmaatụ hours, price, location, contact). Nwalee ya n'ozi atọ, gụnyere otu e dere na mkpụrụ edemede ukwu na otu ọ na-ekwesịghị ịghọta.",
          youCanNow: "iji ngwa string na dictionary jikọta ozi na nzaghachi ziri ezi.",
          quickCheck: [
            { objective: "O2", q: "Gịnị ka \"I need help now\".split() na-enye?", options: ["\"i need help now\"", "[\"I\", \"need\", \"help\", \"now\"]", "True", "4"], answer: 1, why: "split() na-ekewa ahịrịokwu ka ọ bụrụ list okwu." },
            { objective: "O2", q: "Chatbot gị ahụghị mkpụrụ okwu ọ bụla n'ozi ahụ. Gịnị ka ị ga-eme ka o mee?", options: ["Daa na error", "Gosipụta nzaghachi niile dị na dictionary", "Kwụsị mmemme ahụ", "Laghachi nzaghachi nkịtị dị ka \"Sorry, I do not know that yet.\""], answer: 3, why: "Nzaghachi nkịtị na-ejikwa ozi ndị na-adabaghị na mkpụrụ okwu ọ bụla." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ime ka chatbot kwuo okwu, na ịhụ oke ya",
          minutes: 5,
          goal: "Tinye function nzaghachi gị n'ime loop na-akparịta ụka ruo mgbe onye ọrụ kwuru bye, ma hụ ihe iwu na-enweghị ike ime.",
          text: [
            "Chatbot chọrọ loop: rịọ ozi, gosipụta nzaghachi, ma megharịa. while True: na-emeghari ruo mgbe ebighị ebi, ya mere ị na-etinye ụzọ ọpụpụ: ọ bụrụ na ozi ahụ bụ \"bye\", gosipụta ekele ọpụpụ ma jiri break pụọ na loop ahụ.",
            "Ugbu a nwalee ya dị ka ezi onye ọrụ ga-eme. Dee \"when do you open?\" chatbot gị nwere ike ịda, n'ihi na i dere \"hours\", ọ bụghị \"open\". Ụzọ ọhụrụ ọ bụla e si ekwu ihe chọrọ iwu ọhụrụ. Nke ahụ bụ oke kacha ukwuu nke mmemme nwere iwu.",
            "Nke a bụ ihe mere model AI ji baa uru: model asụsụ mụtara site n'ọtụtụ nde ahịrịokwu, ya mere ọ nwere ike ịghọta ọtụtụ ụzọ e si ekwu otu ihe ahụ. N'isi na-esote, ị ga-eji otu."
          ],
          steps: ["Malite na while True:", "N'ime ya, nweta message = input(\"You: \")", "Ọ bụrụ na message.lower() == \"bye\", gosipụta ekele ọpụpụ ma mee break.", "Ma ọ bụghị ya, print(\"Bot:\", reply(message)).", "Nwalee ya n'ụzọ ise dị iche iche e si ajụ otu ajụjụ ahụ."],
          words: [["while True", "loop na-aga n'ihu ruo mgbe ihe dị n'ime ya kwụsịrị ya."], ["break", "na-apụ na loop ozugbo."], ["Oke (limit)", "ihe mmemme na-enweghị ike ime nke ọma."]],
          slides: [
            { title: "Loop mkparịta ụka", bullets: ["while True: na-aga n'ihu na-akparịta ụka", "input() na-enweta ozi ahụ", "break na-akwụsị mkparịta ụka na \"bye\""] },
            { title: "Nwalee dị ka ezi onye ọrụ", bullets: ["Jụọ otu ihe ahụ n'ụzọ ise", "Gụọ ole chatbot ahụ zara nke ọma"] },
            { title: "Ihe mere iwu ji kwụsị n'ebe ụfọdụ", bullets: ["Ụzọ ọhụrụ ọ bụla e si ekwu ihe chọrọ iwu ọhụrụ", "Model AI mụtara site n'ọtụtụ nde ahịrịokwu", "Nke ahụ ka Isi 2 na-eji"] }
          ],
          tryIt: "Tinye function nzaghachi gị site na Nkuzi 2 n'ime loop mkparịta ụka na-akwụsị na \"bye\". Jụọ maka hours n'ụzọ ise dị iche iche. Dee ole chatbot gị ghọtara, wee tinye otu iwu iji dozie otu o mehiere.",
          youCanNow: "iwu loop chatbot nwere iwu na-arụ ọrụ, na ịkọwa ihe mere naanị iwu ji nwee oke.",
          quickCheck: [
            { objective: "O3", q: "Gịnị ka while True: na-eme n'onwe ya?", options: ["Na-emeghari ruo mgbe ebighị ebi ruo mgbe ihe dị ka break kwụsịrị ya", "Na-agba naanị otu ugboro", "Na-agba naanị ma onye ọrụ kwuo bye", "Na-ebubata library"], answer: 0, why: "while True na-emeghari ruo mgbe ebighị ebi, ya mere ị chọrọ ụzọ ọpụpụ dị ka break." },
            { objective: "O3", q: "Ndị ọrụ na-ede \"what time do you close?\" mgbe niile, chatbot gị nwere iwu na-adakwa. Gịnị ka nke ahụ na-agwa gị?", options: ["Chatbot ahụ nwere mperi ide ihe", "Colab mebiri emebi", "Ụzọ ọhụrụ ọ bụla e si ekwu ihe chọrọ iwu ọhụrụ, nke ahụ bụ oke chatbot nwere iwu", "Ndị ọrụ kwesịrị ide na mkpụrụ edemede ukwu"], answer: 2, why: "Chatbot nwere iwu na-ejikọta naanị iwu i dere; model asụsụ na-ejikwa ọtụtụ ụzọ e si ekwu ihe." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ihe nkwado Python maka AI",
        questions: [
          { objective: "O1", q: "Gịnị bụ isi ọdịiche dị n'etiti koodu nwere iwu na model AI?", options: ["Koodu nwere iwu na-adị ọsọ mgbe niile", "Model anaghị eji koodu ọ bụla", "Model mụtara usoro site n'ọmụmaatụ kama ka e dee iwu ọ bụla n'aka", "Ọ dịghị ọdịiche"], answer: 2, why: "Model na-amụta usoro site na data; koodu nwere iwu chọrọ ka e dee iwu ọ bụla." },
          { objective: "O1", q: "Cell Colab gị kwuru \"No module named\" maka otu library. Gịnị ka ị ga-eme?", options: ["Gbaa !pip install na aha library ahụ, wee bubata ya ọzọ", "Malitegharịa kọmputa gị", "Hichapụ notebook ahụ", "Gbanwee aha variable ahụ"], answer: 0, why: "pip na-awụnye library na-adịghị." },
          { objective: "O2", q: "replies = {\"hours\": \"Open 9 to 5.\"}. Gịnị bụ replies[\"hours\"]?", options: ["\"hours\"", "Error", "True", "\"Open 9 to 5.\""], answer: 3, why: "Ịchọ key na-enye value ya." },
          { objective: "O2", q: "Gịnị mere a ga-eji message.lower() na chatbot?", options: ["Iji mee ka ederede ahụ dị mkpụmkpụ", "Ka \"HOURS\" na \"hours\" abụọ dabara", "Iji hichapụ ozi ahụ", "Iji tụgharịa ya n'asụsụ ọzọ"], answer: 1, why: "Ime ka ọ bụrụ mkpụrụ edemede nta na-eme ka njikọ ghara ilegara mkpụrụ edemede ukwu anya." },
          { objective: "O3", q: "Kedu okwu na-apụ na loop while True?", options: ["exit", "break", "stop", "return to"], answer: 1, why: "break na-apụ na loop ozugbo." }
        ]
      }
    },
    {
      name: "Isi 2: Iji model AI a zụrụla azụ",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ibubata model a zụrụla azụ site na Hugging Face",
          minutes: 6,
          goal: "Bubata model sentiment n'efu na Colab ma jiri ya n'otu ahịrịokwu.",
          text: [
            "Model a zụrụla azụ (pre-trained) bụ nke onye ọzọ zụrụla ma kesaa, ya mere ị nwere ike iji ya ozugbo. Hugging Face bụ weebụsaịtị nwere ọtụtụ puku model n'efu, library Transformers ya na-ebubatakwa ha n'otu ahịrị.",
            "Ngwa kacha mfe bụ pipeline. Ị na-agwa ya ọrụ ahụ na model ahụ: classifier = pipeline(\"text-classification\", model=\"distilbert/distilbert-base-uncased-finetuned-sst-2-english\"). Model a na-agụ ederede bekee ma kpebie ma obi (sentiment) ya bụ POSITIVE ma ọ bụ NEGATIVE.",
            "Jiri ya dị ka function: classifier(\"The practice today was great!\"). Ọ na-alaghachi list nwere dictionary n'ime ya, dịka ọmụmaatụ [{'label': 'POSITIVE', 'score': 0.99}]. Score bụ otu model ahụ si ji n'aka, site na 0 ruo 1. Ịgba mbụ na-ebudata model ahụ, ya mere ọ na-ewe ogologo oge ntakịrị.",
            "Gụọ peeji model mgbe niile (\"kaadị model\" ya) tupu i jiri ya: ọ na-ekwu ihe e ji zụọ model ahụ, ihe ọ bụ maka ya na ikike (licence) ya."
          ],
          steps: ["N'ime cell ọhụrụ: from transformers import pipeline", "Mepụta classifier = pipeline(\"text-classification\", model=\"distilbert/distilbert-base-uncased-finetuned-sst-2-english\")", "Gbaa result = classifier(\"The practice today was great!\")", "print(result[0][\"label\"], result[0][\"score\"])", "Ọ bụrụ na transformers adịghị, buru ụzọ gbaa !pip install transformers."],
          words: [["Model a zụrụla azụ", "model onye ọzọ zụrụla nke ị nwere ike iji ozugbo."], ["Hugging Face", "weebụsaịtị na otu library maka ịkesa model AI n'efu."], ["pipeline", "ngwa Transformers na-ebubata model maka ọrụ n'otu ahịrị."], ["Sentiment", "obi (mood) dị n'ederede: positive ma ọ bụ negative."], ["Score", "otu model ahụ si ji n'aka, site na 0 ruo 1."], ["Kaadị model", "peeji na-akọwa ihe model na-eme, data ya na ikike (licence) ya."]],
          slides: [
            { title: "Model a zụrụla azụ", bullets: ["Onye ọzọ zụrụla ya", "Hugging Face nwere ọtụtụ puku, n'efu", "Buru ụzọ gụọ kaadị model"] },
            { title: "Otu ahịrị iji bubata", bullets: ["from transformers import pipeline", "pipeline(\"text-classification\", model=...)", "Ịgba mbụ na-ebudata model ahụ"] },
            { title: "Ịgụ azịza ahụ", bullets: ["[{'label': 'POSITIVE', 'score': 0.99}]", "result[0][\"label\"] bụ obi ahụ", "result[0][\"score\"] bụ otu o si ji n'aka"] }
          ],
          sources: [HF_PIPELINES, HF_MODEL],
          tryIt: "Bubata classifier sentiment ma gbaa ya n'ahịrịokwu atọ i dere: otu nwere obi ụtọ doro anya, otu nwere iwe doro anya, na otu agwakọtara dị ka \"The food was good but the wait was long.\" Gosipụta label na score maka nke ọ bụla ma dee nke o jichaghị n'aka.",
          youCanNow: "ibubata model a zụrụla azụ site na pipeline ma gụọ label na score ya.",
          quickCheck: [
            { objective: "O4", q: "Gịnị ka kaadị model na-agwa gị?", options: ["Okwuntughe Colab gị", "Ole okwu ị nwere", "Ọnụahịa kọmputa", "Ihe e ji zụọ model ahụ, ihe ọ bụ maka ya na ikike (licence) ya"], answer: 3, why: "Gụọ kaadị model tupu i jiri model." },
            { objective: "O4", q: "Ị gbara classifier ahụ na nke mbụ, o wee were oge. Gịnị ka ị ga-eme?", options: ["Kwụsị ya ma hapụ ya", "Chere; ịgba mbụ na-ebudata model ahụ", "Wụnye Python ọzọ", "Gbanwee label ka ọ bụrụ POSITIVE n'aka"], answer: 1, why: "Ịgba mbụ na-ebudata model ahụ, ya mere ọ na-ewe ogologo oge." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ịgba model ahụ n'ọtụtụ ederede",
          minutes: 5,
          goal: "Jiri loop kewaa ndepụta okwu ma gụta azịza ndị ahụ.",
          text: [
            "Ezi mmemme na-ejikwa ọtụtụ ederede, ọ bụghị otu. Tinye okwu gị na list, wee mee loop: for comment in comments: result = classifier(comment)[0]. Ị nwekwara ike inye ya list ahụ niile otu mgbe, classifier(comments), ma nweta otu azịza maka okwu ọ bụla.",
            "Iji chịkọta, debe ihe ngụta (counter): positive = 0 na negative = 0 tupu loop ahụ, wee tinye 1 n'onye ziri ezi n'ime ya dabere na result[\"label\"].",
            "Gbachaa score ka ọ dị mfe ịgụ: round(result[\"score\"], 2) na-enye ọnụọgụ ntụpọ abụọ. f-string na-egosipụta ahịrị dị mma: print(f\"{result['label']:8} {round(result['score'], 2)}  {comment}\")."
          ],
          steps: ["Tinye opekata mpe okwu ise na list.", "Debe positive = 0 na negative = 0.", "Gaa n'okwu ndị ahụ site na loop ma kewaa nke ọ bụla.", "Gosipụta label, score a gbachara na okwu ahụ.", "Tinye na counter ziri ezi, wee gosipụta ngụkọta mgbe loop gachara."],
          words: [["Counter", "variable na-agụta ugboro ole ihe mere."], ["round()", "na-ebelata ọnụọgụ ka o nwee ọnụọgụ ntụpọ ole a kara aka."], ["Batch", "otu ìgwè input a na-ejikwa ọnụ."]],
          slides: [
            { title: "Ọtụtụ ederede, otu loop", bullets: ["Tinye okwu na list", "for comment in comments:", "result = classifier(comment)[0]"] },
            { title: "Gụta ka ị na-aga", bullets: ["positive = 0, negative = 0 tupu loop", "Tinye 1 na counter ziri ezi n'ime ya", "Gosipụta ngụkọta mgbe loop gachara"] },
            { title: "Mee ka ọ dị mfe ịgụ", bullets: ["round(score, 2) maka ọnụọgụ ntụpọ abụọ", "Otu ahịrị dị mma kwa okwu"] }
          ],
          tryIt: "Dee okwu isii gbasara klas, omume otu egwuregwu ma ọ bụ ụlọ ahịa dị nso. Kewaa ha site na loop, gosipụta otu ahịrị dị mma maka nke ọ bụla, ma gosipụta ole bụ positive na ole bụ negative.",
          youCanNow: "ịgba model AI na list ederede ma chịkọta azịza ya site na counter.",
          quickCheck: [
            { objective: "O5", q: "Gịnị ka classifier(comments) na-alaghachi mgbe comments bụ list?", options: ["Otu azịza maka list ahụ niile", "Error mgbe niile", "Otu azịza kwa okwu", "Naanị azịza okwu mbụ"], answer: 2, why: "Inye list na-alaghachi otu azịza maka okwu ọ bụla." },
            { objective: "O5", q: "N'ime loop gị, result[\"label\"] bụ \"POSITIVE\". Gịnị ka ị ga-eme na counter gị?", options: ["Tinye 1 na positive", "Tinye 1 na negative", "Laghachi positive na 0", "Hichapụ okwu ahụ"], answer: 0, why: "Tinye 1 na counter dabara na label ahụ." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ịlele AI na imecha ihe na-ekewa nzaghachi",
          minutes: 6,
          goal: "Kaa azịza nwere obere obi ike ka mmadụ lelee ha, ma mechaa ihe na-ekewa nzaghachi.",
          text: [
            "Model AI na-eme mperi. Nke a maara naanị positive na negative, ya mere a na-amanye okwu ndị na-anọ n'etiti (neutral) ma ọ bụ agwakọtara ka ha banye n'otu n'ime ha. O nwekwara ike ịghara ịhụ ịkọ nkọ (\"Great, another rainy game day.\"), e jikwa nyocha ihe nkiri bekee zụọ ya, ya mere okwu ntorobịa (slang) ma ọ bụ asụsụ ndị ọzọ nwere ike ime ka mgbagwoju anya.",
            "Ezigbo omume bụ threshold obi ike: ọ bụrụ na score dị n'okpuru ọnụọgụ ị họọrọ, dị ka 0.80, mmemme ahụ na-ekwu \"check by hand\" (lelee ya n'aka) kama ịtụkwasị label ahụ obi. Mmadụ na-eme mkpebi ikpeazụ n'ihe ọ bụla dị mkpa.",
            "Jiri AI n'ụzọ nwere ọrụ: agbala ozi nzuzo n'ime ngwa n'enweghị ikike, etinyela okwuntughe ma ọ bụ API key na notebook a na-ekesa, ma gwa ndị mmadụ mgbe azịza si n'AI.",
            "Ugbu a i nwere ihe niile maka ọrụ ikpeazụ: list, model, loop, if nwere threshold, counter na ngosipụta doro anya."
          ],
          steps: ["Họrọ threshold, dịka ọmụmaatụ THRESHOLD = 0.80.", "N'ime loop, lelee: if result[\"score\"] < THRESHOLD:", "Gosipụta \"check by hand\" n'akụkụ okwu ndị ahụ.", "Gụta positive na negative dị ka mbụ.", "Gosipụta ngụkọta na ole chọrọ ka mmadụ lelee ha."],
          words: [["Threshold", "ọnụọgụ oke ị họọrọ; a na-ejikwa azịza dị n'okpuru ya n'ụzọ pụrụ iche."], ["Obi ike (confidence)", "otu model si ji azịza ya n'aka."], ["Ịkọ nkọ (sarcasm)", "ikwu ihe megidere ihe ị pụtara, nke model na-adịghị ahụkarị."], ["Mmadụ n'ime loop (human in the loop)", "mmadụ na-enyocha azịza AI tupu e jiri ha."]],
          slides: [
            { title: "Model na-eme mperi", bullets: ["Naanị positive ma ọ bụ negative: a na-amanye nke agwakọtara", "Ọ naghị ahụ ịkọ nkọ na slang", "E ji nyocha ihe nkiri bekee zụọ ya"] },
            { title: "Jiri threshold", bullets: ["THRESHOLD = 0.80", "Score dị n'okpuru ya: \"check by hand\"", "Mmadụ na-eme mkpebi ikpeazụ"] },
            { title: "Jiri AI n'ụzọ nwere ọrụ", bullets: ["Nweta ikike maka ozi nzuzo", "Okwuntughe ma ọ bụ key adịghị na notebook a na-ekesa", "Kwuo mgbe azịza si n'AI"] }
          ],
          sources: [HF_MODEL],
          tryIt: "Ọrụ ikpeazụ: wuo ihe na-ekewa nzaghachi. Jiri opekata mpe okwu isii, gụnyere otu agwakọtara na otu nwere ịkọ nkọ. Gosipụta nke ọ bụla na label na score ya, kaa ihe ọ bụla dị n'okpuru 0.80 dị ka \"check by hand\", ma gosipụta ngụkọta positive, negative na check-by-hand. Wee gụọ ndị a kara akara n'onwe gị ma kpebie.",
          youCanNow: "iwu mmemme AI na Python na-arụ ọrụ nke na-ekewa ederede, na-akọ azịza ya, ma na-enyefe mmadụ ihe ndị o jighị n'aka.",
          quickCheck: [
            { objective: "O6", q: "Gịnị mere model sentiment a nwere ike ịgha okwu na-anọ n'etiti (neutral)?", options: ["Ọ na-agụ naanị ọnụọgụ", "Ọ maara naanị positive na negative, ya mere a na-amanye okwu neutral n'otu n'ime ha", "Ọ chọrọ okwuntughe", "Ọ na-arụ ọrụ naanị na Fraịde"], answer: 1, why: "Model ahụ nwere naanị label abụọ, ya mere a na-amanye okwu agwakọtara ma ọ bụ neutral n'otu n'ime ha." },
            { objective: "O6", q: "Enyi gị chọrọ ka ị gbaa ozi nzuzo ya n'ihe na-ekewa nzaghachi gị. Gịnị ka ị ga-eme?", options: ["Gbaa ha n'ajụghị ndị dere ha", "Tinye azịza ahụ n'ịntanetị", "Tinye API key gị na notebook ka ọ dị ọsọ", "Jiri naanị ozi i nwere ikike iji, ma kwuo na azịza ndị ahụ si n'AI"], answer: 3, why: "Iji AI n'ụzọ nwere ọrụ pụtara inweta ikike maka data nzuzo na ịgwa ndị mmadụ mgbe e jiri AI." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Iji model AI a zụrụla azụ",
        questions: [
          { objective: "O4", q: "Gịnị bụ model a zụrụla azụ?", options: ["Model ị ga-ebu ụzọ zụọ ọtụtụ izu", "Ndepụta iwu ị na-ede", "Weebụsaịtị a na-akwụ ụgwọ", "Model onye ọzọ zụrụla nke ị nwere ike iji ozugbo"], answer: 3, why: "Model a zụrụla azụ dị njikere iji." },
          { objective: "O4", q: "Classifier ahụ laghachiri [{'label': 'NEGATIVE', 'score': 0.97}]. Gịnị ka 0.97 pụtara?", options: ["Model ahụ ji n'aka nke ukwuu na okwu ahụ bụ negative", "Agụrụ okwu 97", "Okwu ahụ dị ogologo 97%", "Ọ ọnụ 97 cents"], answer: 0, why: "Score bụ obi ike model ahụ site na 0 ruo 1." },
          { objective: "O5", q: "Kedu ahịrị na-enweta label site na result = classifier(text)?", options: ["result.label", "result[\"label\"][0]", "result[0][\"label\"]", "label(result)"], answer: 2, why: "Azịza ahụ bụ list nwere dictionary, ya mere buru ụzọ [0], wee [\"label\"]." },
          { objective: "O6", q: "Otu okwu nwetara score 0.55. Na threshold 0.80, gịnị ka mmemme gị na-eme?", options: ["Ọ na-ehichapụ ya", "Ọ na-agụta ya ugboro abụọ", "Ọ na-akwụsị mmemme ahụ", "Ọ na-aka ya \"check by hand\""], answer: 3, why: "A na-enyefe mmadụ score dị n'okpuru threshold." },
          { objective: "O6", q: "Kedu n'ime ndị a bụ iji AI n'ụzọ nwere ọrụ?", options: ["Itinye API key gị na notebook ị na-ekesa", "Ịgba ozi nzuzo ụmụ klas gị n'ajụghị ha", "Ịgwa ndị mmadụ na azịza si n'AI na ilele ndị o jighị n'aka", "Ịtụkwasị label ọ bụla obi"], answer: 2, why: "Imeghe anya na idebe mmadụ n'ime loop bụ iji ya n'ụzọ nwere ọrụ." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Mmemme AI na Python maka Ndị Mmalite",
    questions: [
      { objective: "O1", q: "Ụzọ kacha mma isi kọwaa model AI bụ:", options: ["Ndepụta ahịrị if", "Mmemme mụtara usoro site n'ọtụtụ ọmụmaatụ", "Ụdị keyboard", "Adreesị weebụsaịtị"], answer: 1, why: "Model na-amụta usoro site na data." },
      { objective: "O1", q: "Gịnị ka import na-eme na Python?", options: ["Ọ na-ebubata library ka i wee jiri koodu ya", "Ọ na-ebudata ihe nkiri", "Ọ na-egosipụta ederede", "Ọ na-ehichapụ faịlụ"], answer: 0, why: "import na-ewebata library n'ime mmemme gị." },
      { objective: "O1", q: "Gịnị ka ! pụtara na !pip install transformers na Colab?", options: ["Ọ bụ mperi", "Mee ka ụda ya dị elu", "Gbaa nke a dị ka iwu sistemụ, ọ bụghị Python", "Wụnye ya ugboro abụọ"], answer: 2, why: "! na-agwa Colab ka ọ gbaa iwu shell." },
      { objective: "O1", q: "Kedu eziokwu gbasara ọkwa n'efu nke Colab?", options: ["Ọ bụ n'efu, mana ihe ọ na-enye nwere oke, o nwekwara ike ịgbanwe", "Ihe ọ na-enye enweghị oke", "Ị ga-ebu ụzọ wụnye ya", "Ọ na-agba naanị na ekwentị"], answer: 0, why: "Colab kwuru na e kweghị nkwa na ihe ọ na-enye n'efu ga-adị mgbe niile ma ọ bụ enweghị oke." },
      { objective: "O2", q: "\"HELP\".lower() na-enye:", options: ["\"HELP\"", "\"Help\"", "Error", "\"help\""], answer: 3, why: "lower() na-eme ka mkpụrụ edemede ọ bụla bụrụ nta." },
      { objective: "O2", q: "\"price\" in \"what is the price?\" na-enye:", options: ["False", "True", "\"price\"", "0"], answer: 1, why: "in na-elele ma okwu ahụ dị n'ederede ahụ." },
      { objective: "O2", q: "Na {\"hours\": \"Open 9 to 5.\"}, gịnị bụ \"hours\"?", options: ["Value", "Key", "List", "Loop"], answer: 1, why: "Akụkụ aka ekpe nke ụzọ abụọ ahụ bụ key." },
      { objective: "O3", q: "Chatbot gị aghọtaghị \"when do you open?\" mana ọ maara \"hours\". Gịnị kpatara?", options: ["Colab mebiri emebi", "Python enweghị ike ịgụ ajụjụ", "Dictionary ahụ dị mkpụmkpụ nke ukwuu ịrụ ọrụ", "Chatbot nwere iwu na-ejikọta naanị iwu i dere"], answer: 3, why: "N'ime chatbot nwere iwu, ụzọ ọ bụla e si ekwu ihe chọrọ iwu nke ya." },
      { objective: "O3", q: "N'ime loop mkparịta ụka, gịnị kwesịrị ime mgbe onye ọrụ dere bye?", options: ["Gosipụta ekele ọpụpụ ma mee break", "Malite loop ọhụrụ", "Rịọ okwuntughe", "Ọ dịghị ihe"], answer: 0, why: "break na-akwụsị loop ahụ nke ọma." },
      { objective: "O3", q: "Gịnị mere model asụsụ ji baa uru maka chatbot?", options: ["Ha anaghị eme mperi mgbe ọ bụla", "Ha achọghị kọmputa", "Ha na-aghọta ọtụtụ ụzọ e si ekwu otu ihe ahụ", "Ha na-arụ ọrụ n'enweghị data"], answer: 2, why: "Ha mụtara site n'ọtụtụ nde ahịrịokwu." },
      { objective: "O4", q: "Gịnị bụ Hugging Face?", options: ["App mgbasa ozi ọha", "Error Python", "Egwuregwu vidio", "Saịtị na library maka ịkesa model AI n'efu"], answer: 3, why: "Hugging Face nwere model na library Transformers." },
      { objective: "O4", q: "Kedu ahịrị na-ebubata model sentiment ahụ?", options: ["import sentiment", "model = load()", "pipeline(\"text-classification\", model=\"distilbert/distilbert-base-uncased-finetuned-sst-2-english\")", "print(\"model\")"], answer: 2, why: "pipeline na-anara ọrụ ahụ na aha model ahụ." },
      { objective: "O4", q: "Gịnị mere ịgba mbụ nke model ahụ ji ewe ogologo oge?", options: ["Colab na-adị nwayọọ n'ebumnuche", "Ọ na-ebudata model ahụ", "Ọ na-azụ ya site na mbido", "Ọ na-elele email gị"], answer: 1, why: "Faịlụ model ahụ na-ebuda na nke mbụ." },
      { objective: "O4", q: "Gịnị ka ị kwesịrị ịgụ tupu i jiri model?", options: ["Kaadị model ya", "Akụkọ browser gị", "Akara Colab", "Ọ dịghị ihe"], answer: 0, why: "Kaadị model na-akọwa ihe e ji ya eme, data ya na ikike (licence) ya." },
      { objective: "O4", q: "Score model sentiment ahụ bụ:", options: ["Ogologo ederede ahụ", "Ọnụọgụ okwu positive", "Otu model ahụ si ji n'aka, site na 0 ruo 1", "Akara n'ime 100"], answer: 2, why: "Score bụ obi ike." },
      { objective: "O5", q: "Iji gụta okwu positive n'ime loop, ị na-ebu ụzọ:", options: ["Debe positive = 0 tupu loop", "Gosipụta positive", "Hichapụ list ahụ", "Bubata counter"], answer: 0, why: "Counter na-amalite na 0 tupu loop." },
      { objective: "O5", q: "round(0.98765, 2) na-enye:", options: ["0.98", "0.99", "1", "98"], answer: 1, why: "A gbachaa ya n'ọnụọgụ ntụpọ abụọ, 0.98765 bụ 0.99." },
      { objective: "O6", q: "Kedu okwu model a nwere ike ịgha karịa?", options: ["\"I loved it!\"", "\"Great, another rainy game day.\"", "\"This was terrible.\"", "\"Best class ever.\""], answer: 1, why: "Ịkọ nkọ na-ekwu ihe megidere ihe ọ pụtara, model na-adịghịkwa ahụkarị ya." },
      { objective: "O6", q: "Gịnị mere a ga-eji threshold obi ike?", options: ["Iji mee ka mmemme ahụ dị ọsọ", "Iji zigara mmadụ azịza o jighị n'aka ka o lelee ha", "Iji zoo okwu negative", "Iji hichapụ score dị ala"], answer: 1, why: "Azịza nwere obere obi ike chọrọ ka mmadụ lelee ha." },
      { objective: "O6", q: "Kedu nke ADỊGHỊ mma itinye na notebook ị na-ekesa?", options: ["List okwu e chepụtara echepụta", "Ahịrị nkọwa na-amalite na #", "Ahịrị print", "Okwuntughe gị ma ọ bụ API key gị"], answer: 3, why: "Ihe nzuzo dị na notebook a na-ekesa nwere ike ịbụ ihe a ga-edetu ma jiri mee ihe ọjọọ." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
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
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      {
        name: "E bubatara model ma jiri ya",
        objective: "O4",
        notYet: "Model ahụ anaghị ebuba, ma ọ bụ ọ dịghị label ma ọ bụ score a na-enweta.",
        meets: "Model sentiment a zụrụla azụ na-agba ma na-enye label na score maka okwu ọ bụla.",
        exceeds: "Notebook ahụ dere ihe kaadị model kwuru na e ji zụọ ya."
      },
      {
        name: "Loop na ngosipụta",
        objective: "O5",
        notYet: "Okwu na-erughị isii, ma ọ bụ a naghị egosipụta okwu ọ bụla na label na score ya.",
        meets: "Opekata mpe okwu isii, nke ọ bụla gosipụtara na label ya na score a gbachara.",
        exceeds: "Ngosipụta ahụ kwụ n'ahịrị nke ọma site na f-string."
      },
      {
        name: "Ngụkọta",
        objective: "O5",
        notYet: "Ngụkọta positive na negative adịghị ma ọ bụ ezighi ezi.",
        meets: "E gosipụtara ngụkọta ziri ezi nke okwu positive na negative.",
        exceeds: "Ọ na-egosipụtakwa ole e kara \"check by hand\"."
      },
      {
        name: "Threshold obi ike",
        objective: "O6",
        notYet: "Enweghị threshold, ma ọ bụ a kaghị score dị ala akara.",
        meets: "A kara score ọ bụla dị n'okpuru 0.80 \"check by hand\".",
        exceeds: "Gụnyere okwu nwere ịkọ nkọ ma ọ bụ agwakọtara ma kọwaa ihe mere model ahụ nwere ike ịgha ya."
      },
      {
        name: "Iji ya n'ụzọ nwere ọrụ",
        objective: "O6",
        notYet: "Notebook ahụ nwere ozi nzuzo n'enweghị ikike, ma ọ bụ okwuntughe ma ọ bụ API key.",
        meets: "Naanị okwu e chepụtara echepụta ma ọ bụ nke e nyere ikike, ọ dịghịkwa okwuntughe ma ọ bụ key na notebook ahụ.",
        exceeds: "Ọ gbakwunyere ndetu na-ekwu na label ndị ahụ si n'AI, nakwa na mmadụ na-elele ndị o jighị n'aka."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma nweta Ruru eru ma ọ bụ Karịrị n'ahịrị rubric ọ bụla nke ihe na-ekewa nzaghachi",
      "Ndị na-amụ ihe kwuru na ha wuru ma ọ bụ gbanwere mmemme AI ọzọ n'ime ụbọchị 30 mgbe ihe ọmụmụ ahụ gachara (nnyocha nsochi)",
      "Ndị na-amụ ihe gara n'ihe ọmụmụ na-esote, dị ka Mmalite Machine Learning ma ọ bụ Data Science maka Ndị Mmalite",
      "Ndị na-amụ ihe gosiri ihe na-ekewa nzaghachi na portfolio, klas, klọb ma ọ bụ arịrịọ ọrụ"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Kọmputa ma ọ bụ laptop nwere web browser",
      "Akaụntụ Google n'efu iji Google Colab",
      "Okwu mkpụmkpụ isii ma ọ bụ karịa e chepụtara echepụta, dịka ọmụmaatụ site n'omume, klas ma ọ bụ obere ụlọ ahịa",
      "Ihe dị ka nkeji 60 ruo 75 n'ozuzu, gbakwunyere oge omume"
    ],
    facilitatorNotes: [
      "Budata model ahụ otu ugboro tupu klas na otu netwọk ahụ iji hụ na ọ na-arụ ọrụ; netwọk ụlọ akwụkwọ na-egbochi mbudata model mgbe ụfọdụ.",
      "Mee ka ndị na-amụ ihe jiri okwu e chepụtara echepụta ma ọ bụ nke ha nwere ikike iji; ọ bụghị ezi ozi nzuzo mgbe ọ bụla.",
      "Chetara ndị na-amụ ihe ka ha ghara itinye okwuntughe ma ọ bụ API key na notebook mgbe ọ bụla, karịsịa nke ha na-ekesa.",
      "Rịọ onye ọ bụla na-amụ ihe ka ọ chọta otu okwu model ahụ ghara, ma kparịta ihe kpatara ya dị ka otu.",
      "Ihe Colab na-enye n'efu nwere ike ịgwụ; ọ bụrụ na nnọkọ akwụsị, gosi ndị na-amụ ihe otu esi ejikọ ọzọ ma gbaa cell ndị ahụ ọzọ site n'elu."
    ]
  }
};
