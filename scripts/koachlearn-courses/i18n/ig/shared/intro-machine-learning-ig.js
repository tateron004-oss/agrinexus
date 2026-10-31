"use strict";

// Koach Learn course (Igbo translation of shared/intro-machine-learning.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const COLAB = { name: "Google Colab: Ajụjụ a na-ajụkarị", url: "https://research.google.com/colaboratory/faq.html" };
const SKLEARN = { name: "scikit-learn: Ịmalite", url: "https://scikit-learn.org/stable/getting_started.html" };

module.exports = {
  id: "intro-machine-learning-ig",
  lang: "ig",
  translationOf: "intro-machine-learning",
  category: "Youth",
  name: "Mmalite Machine Learning",
  skills: "Ịkọwa otu igwe si amụta ihe, Ịhọrọ feature na label, Ikewa data maka ọzụzụ na nnwale, Ịzụ model na scikit-learn, Ịtụ na ịtụnyere izi ezi (accuracy)",
  outcome: "ịzụ model machine learning abụọ dị mfe na Google Colab site na scikit-learn, nwalee ha na data ha ahụbeghị, tụnyere izi ezi ha, ma kọwaa nke ị ga-eji na ebe ike ya kwụsịrị.",
  about: [
    "Machine learning (igwe na-amụta ihe) dị n'azụ ihe na-egbochi ozi spam, ihe nkiri a na-atụ aro gị, oge ọgbaghara ụzọ na map, na ịdọ aka na ntị maka aghụghọ na kaadị ụlọ akụ. Ihe ọmụmụ a na-egosi gị otu o si arụ ọrụ, wee mee ka i wuo model n'onwe gị.",
    "Isi 1 achọghị koodu: ị ga-amụta echiche ndị ahụ site n'ihe atụ kwa ụbọchị na obere tebụl ị ga-eme n'onwe gị. Isi 2 na-aga na Google Colab, weebụsaịtị n'efu na-agba Python, ebe ị ga-azụ ma nwalee ezi model site na library n'efu a na-akpọ scikit-learn. Ịma ntakịrị Python na-enyere aka, mana e nyere ma kọwaa ahịrị koodu ọ bụla.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, ọ na-ejedebekwa n'ọrụ \"Nwalee ya ugbu a\". E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Na Google Colab, bulite data okooko osisi iris, kewaa ya ka ọ bụrụ training set na test set, zụọ decision tree na model k-nearest neighbors, bipụta izi ezi model ọ bụla na test set, jiri nke ka mma buo amụma ụdị otu okooko osisi ọhụrụ, ma dee ahịrịokwu abụọ: model ị ga-ahọrọ na otu ebe ike model gị kwụsịrị.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị ntorobịa na ndị okenye nwere ntakịrị ahụmahụ Python chọrọ ịghọta na ịnwale machine learning: ụmụ akwụkwọ sekọndrị na mahadum, ndị otu klọb koodu, ndị na-agbanwe ọrụ na ndị na-amụ ọrụ na-aga n'ọrụ data ma ọ bụ AI.",
    startingPoint: "Ha nwere ike ide ma gbaa obere mmemme Python na Google Colab ma jiri list na function. Ọtụtụ anụla maka AI na machine learning mana ha azụbeghị model mgbe ọ bụla, kewaa data ka ọ bụrụ training set na test set, ma ọ bụ tụọ ma tụnyere izi ezi.",
    gap: "Machine learning dị n'azụ ihe na-egbochi spam, ntụaro, map na ọtụtụ ngwaọrụ ebe ọrụ, ọrụ mbido data na AI na-atụkwa anya na ndị mmadụ ma otu model si amụta ihe na otu o si ada. Na-enweghị omume aka, ndị na-amụ ihe enweghị ike ikpe ikpe n'azịza model, hụ data na-adịghị mma, ma ọ bụ hụ ihe mere ilele ikpe ziri ezi (fairness) ji dị mkpa.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; a na-akọwa okwu dị ka feature, label, overfitting na accuracy",
      "Ngwaọrụ: kọmputa ma ọ bụ laptop nwere web browser",
      "Akaụntụ na ego: akaụntụ Google n'efu maka Google Colab; a wụnyelarị scikit-learn",
      "Oge: ihe dị ka nkeji 5 ruo 6 kwa nkuzi gbakwunyere omume, ihe dị ka nkeji 60 ruo 75 n'ozuzu",
      "Mgbakọ: naanị pasentị na ntụle dị mfe; ọ dịghị usoro mgbakọ (formula)"
    ],
    prerequisites: "Mmalite Mmemme Kọmputa na Python."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Na-enweghị ndetu", action: "ịkọwa ihe machine learning bụ ma mata ma ọrụ bụ classification ka ọ bụ regression", standard: "site na nkọwa ziri ezi na opekata mpe ọrụ 4 n'ime 5 e kewara nke ọma" },
    { id: "O2", condition: "Mgbe e nyere gị nsogbu amụma", action: "ime obere dataset nwere feature ndị kwesịrị ekwesị na label, ma lelee ma ihe ọ bụla na-efu", standard: "site na feature ndị na-emetụta azịza, otu kọlụm label na opekata mpe otu ihe nwere ike ịna-efu a kpọrọ aha" },
    { id: "O3", condition: "Mgbe e nyere gị dataset na azịza nnwale model", action: "ịkọwa ihe mere e ji ekewa data ka ọ bụrụ training set na test set ma gbakọọ izi ezi (accuracy)", standard: "site n'izi ezi ziri ezi ruo pasentị zuru ezu kacha nso" },
    { id: "O4", condition: "Na Google Colab nwere scikit-learn", action: "ibulite dataset omume ma kọwaa row ya, feature ya na label ya", standard: "na-akpọ ọnụ ọgụgụ row na kọlụm na ihe label pụtara" },
    { id: "O5", condition: "Mgbe e nyere gị dataset iris", action: "ikewa data ahụ, zụọ decision tree ma bipụta izi ezi ya na test set", standard: "site na koodu na-agba n'enweghị njehie na izi ezi e bipụtara" },
    { id: "O6", condition: "Mgbe e nyere gị model abụọ a zụrụ azụ", action: "ịtụnyere izi ezi nnwale ha, buo amụma maka ihe atụ ọhụrụ ma dee otu ebe ike model ị họrọ kwụsịrị", standard: "na-ahọrọ model nwere ihe kpatara ya ma na-akpọ aha ezi oke ya" }
  ],
  chapters: [
    {
      name: "Isi 1: Otu igwe si amụta ihe",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ihe machine learning bụ",
          minutes: 4,
          goal: "Kọwaa machine learning n'okwu nke gị ma hụ ya na ndụ kwa ụbọchị.",
          text: [
            "Na mmemme kọmputa nkịtị, mmadụ na-ede iwu. Na machine learning (ML), ị na-enye kọmputa ọtụtụ ihe atụ nwere azịza ziri ezi, ọ na-achọta iwu ndị ahụ n'onwe ya. A na-akpọ ihe ọ mepụtara model.",
            "Ihe atụ kwa ụbọchị: email gị na-amụta otu spam si dị site n'ọtụtụ nde email a kara akara. App egwu na-atụ aro egwu site n'ihe ndị dị ka gị gụrụ. App map na-ebu amụma ọgbaghara ụzọ site na njem gara aga.",
            "Ọrụ abụọ a na-ahụkarị: classification na-etinye ihe n'otu (spam ma ọ bụ ọ bụghị spam, ụdị okooko osisi). Regression na-ebu amụma nọmba (ọnụ ahịa ụlọ, nkeji ole fọdụrụ ka bọs bịa). Mgbe ihe atụ ndị ahụ nwere azịza, a na-akpọ ya supervised learning, nke ahụ ka ihe ọmụmụ a na-akụzi."
          ],
          words: [["Machine learning (ML)", "kọmputa na-achọta usoro n'ihe atụ kama ịgbaso iwu mmadụ dere."], ["Model", "ihe ML na-emepụta: usoro a mụtara nke na-ebu amụma."], ["Classification", "ibu amụma otu ma ọ bụ ụdị ihe."], ["Regression", "ibu amụma nọmba."], ["Supervised learning", "ịmụta ihe site n'ihe atụ nwere azịza ziri ezi."]],
          slides: [
            { title: "Iwu na mmụta", bullets: ["Mmemme kọmputa: mmadụ na-ede iwu", "ML: kọmputa na-achọta iwu site n'ihe atụ", "Ihe ọ mepụtara bụ model"] },
            { title: "ML ị na-ejibu", bullets: ["Ihe na-egbochi spam", "Ntụaro egwu na vidiyo", "Oge ọgbaghara ụzọ na map", "Ịdọ aka na ntị aghụghọ kaadị"] },
            { title: "Ọrụ abụọ a na-ahụkarị", bullets: ["Classification: kedu otu?", "Regression: kedu nọmba?", "Supervised: ihe atụ nwere azịza"] }
          ],
          tryIt: "Depụta app atọ ị na-eji nke nwere ike iji machine learning. Maka nke ọ bụla, dee ihe ọ na-ebu amụma ya na ma ọ bụ classification (otu) ka ọ bụ regression (nọmba).",
          youCanNow: "ịkọwa ihe machine learning bụ ma mata ọdịiche dị n'etiti classification na regression.",
          quickCheck: [
            { objective: "O1", q: "Na machine learning, gịnị bụ model?", options: ["Ndepụta iwu mmadụ ji aka dee", "Spreadsheet nwere data", "Ụdị kọmputa", "Ihe kọmputa mepụtara mgbe ọ chọtara usoro n'ihe atụ"], answer: 3, why: "Model bụ ihe kọmputa na-emepụta mgbe ọ chọtara usoro n'ihe atụ." },
            { objective: "O1", q: "Ụlọ ahịa chọrọ ikewa email ndị ahịa ka ọ bụrụ \"mkpesa\" ma ọ bụ \"ajụjụ\". Kedu ụdị ọrụ ị ga-akpọ nke a?", options: ["Regression", "Classification", "Nnwale", "Overfitting"], answer: 1, why: "Itinye ihe n'otu bụ classification; ibu amụma nọmba bụ regression." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Data: feature na label",
          minutes: 5,
          goal: "Wuo obere dataset nwere feature na label.",
          text: [
            "ML na-amụta ihe site na data, nke na-abụkarị tebụl. Row ọ bụla bụ otu ihe atụ. Kọlụm ndị na-akọwa ihe atụ ahụ bụ feature. Kọlụm nwere azịza ị chọrọ ibu amụma ya bụ label.",
            "Ihe atụ: iji buo amụma ma bọs ga-egbu oge, row ọ bụla bụ otu njem. Feature nwere ike ịbụ oge n'ụbọchị, ụbọchị n'izu na ma mmiri zoro. Label bụ ma o gburu oge ka ọ bịara n'oge.",
            "Feature dị mma bụ ihe na-emetụta azịza n'ezie. Row ndị ọzọ na-enyekarị aka. Data ahụ ga-ezikwa ezi ma zuo ezu: ọ bụrụ na i nakọtara naanị njem ụbọchị ọrụ, model ahụ agaghị arụ ọrụ nke ọma na ngwụsị izu. Model enweghị ike ịka data ya mma."
          ],
          steps: ["Kpebie ihe ị chọrọ ibu amụma ya: nke ahụ bụ label gị.", "Depụta ihe nwere ike imetụta ya: ndị ahụ bụ feature gị.", "Mee tebụl nwere otu row maka ihe atụ ọ bụla.", "Dejupụta opekata mpe row 10 site na ndụ n'ezie.", "Lelee: ụdị ihe atụ ụfọdụ ọ na-efu?"],
          words: [["Dataset", "nchịkọta ihe atụ, na-abụkarị tebụl."], ["Feature", "kọlụm na-akọwa ihe atụ, nke e ji ebu amụma."], ["Label", "kọlụm azịza model na-amụta ibu amụma ya."], ["Bias na data", "mgbe data hapụrụ ma ọ bụ gụbigara ụfọdụ otu ọnụ, nke mere na model adịghị ezi ma ọ bụ na-ehie ụzọ maka ha."]],
          slides: [
            { title: "Data bụ tebụl", bullets: ["Row ọ bụla: otu ihe atụ", "Feature: kọlụm ndị na-akọwa", "Label: azịza a ga-ebu amụma ya"] },
            { title: "Ihe atụ: bọs ọ ga-egbu oge?", bullets: ["Feature: oge, ụbọchị, mmiri ozuzo", "Label: o gburu oge ma ọ bụ ọ bịara n'oge"] },
            { title: "Data dị mma", bullets: ["Feature ndị dị mkpa n'ezie", "Row zuru ezu", "Ọ dịghị otu na-efu, dị ka ngwụsị izu"] }
          ],
          tryIt: "Họrọ ihe ị nwere ike ibu amụma ya site na ndụ kwa ụbọchị, dị ka ma ike ga-agwụ gị mgbe omume egwuregwu gasịrị ma ọ bụ ma ụlọ ahịa ga-ejupụta. Mee tebụl nwere feature abụọ ma ọ bụ atọ na label, ma dejupụta row 10.",
          youCanNow: "ịhọrọ label na feature bara uru ma wuo obere dataset.",
          quickCheck: [
            { objective: "O2", q: "Na tebụl data, gịnị bụ feature?", options: ["Kọlụm ndị na-akọwa ihe atụ ọ bụla", "Azịza ị chọrọ ibu amụma ya", "Izi ezi model ahụ", "Test set"], answer: 0, why: "Feature na-akọwa ihe atụ; label bụ azịza a ga-ebu amụma ya." },
            { objective: "O2", q: "Ị na-anakọta data maka ụmụ akwụkwọ na-emecha ihe omume ụlọ, mana naanị site n'otu klas. Gịnị ka ị ga-eme tupu ọzụzụ?", options: ["Zụọ ozugbo; otu klas zuru maka mmadụ niile", "Hichapụ kọlụm label", "Nakọta data site na klas ndị ọzọ ka model ahụ zie ezi nye ụmụ akwụkwọ ndị ọzọ", "Jiri naanị row ise mbụ"], answer: 2, why: "Data sitere n'otu otu nwere ike ime ka model ghara ịrụ ọrụ nke ọma ma ọ bụ ghara izi ezi nye ndị ọzọ." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ọzụzụ na nnwale: model ahụ ọ dị mma?",
          minutes: 5,
          goal: "Kewaa data ka ọ bụrụ training set na test set ma tụọ izi ezi.",
          text: [
            "Ọzụzụ (training) bụ mgbe model na-amụ ihe atụ iji chọta usoro. Mana model nke buru naanị ihe atụ ya n'isi nwere ike ịdị ka ọ zuru oke ma daa n'ihe atụ ọhụrụ. A na-akpọ nke a overfitting, dị ka nwa akwụkwọ buru azịza ule afọ gara aga n'isi.",
            "Ya mere ị na-edobe ụfọdụ data n'akụkụ. A na-eji training set (na-abụkarị ihe dị ka pasentị 75 ruo 80 nke row) amụta ihe. Test set (ndị fọdụrụ) na-ezo ezo ruo n'ọgwụgwụ, a na-ejikwa ya elele model ahụ n'ihe atụ ọ hụbeghị mgbe ọ bụla.",
            "Izi ezi (accuracy) bụ akụkụ nke ihe atụ nnwale o nwetara nke ọma. 18 ziri ezi n'ime 20 bụ pasentị 90. Jụọ mgbe niile ihe mperi na-efu: ntụaro egwu ezighi ezi adịghị njọ, mana ịdọ aka na ntị aghụghọ e furu efu dị njọ."
          ],
          steps: ["Gbanwee usoro row gị (shuffle).", "Tinye ihe dị ka pasentị 75 na training set.", "Debe ndị fọdụrụ dị ka test set, elekwala ha anya.", "Chọta usoro (iwu) site na training set naanị.", "Jiri ya na test set ma gụọ ole o nwetara nke ọma."],
          words: [["Training (ọzụzụ)", "model na-amụta usoro site n'ihe atụ."], ["Training set", "row e ji amụta ihe."], ["Test set", "row e debere n'akụkụ iji lelee model n'ihe atụ ọhụrụ."], ["Overfitting", "mgbe model buru data ọzụzụ ya n'isi ma ghara ịrụ ọrụ nke ọma na data ọhụrụ."], ["Accuracy (izi ezi)", "akụkụ nke amụma ndị ziri ezi."]],
          slides: [
            { title: "Ọzụzụ", bullets: ["Model na-amụ ihe atụ", "Ọ na-achọta usoro", "Ibu n'isi abụghị ịmụta ihe"] },
            { title: "Debe data n'akụkụ", bullets: ["Training set: ihe dị ka 75-80% nke row", "Test set: ndị fọdụrụ, zoro ezo ruo n'ọgwụgwụ"] },
            { title: "Izi ezi (accuracy)", bullets: ["Azịza ziri ezi / ihe atụ nnwale niile", "18 ziri ezi n'ime 20 = 90%", "Jụọ ihe mperi na-efu"] }
          ],
          tryIt: "Were tebụl row 10 gị site na Nkuzi 2. Kpuchie row 2 ikpeazụ. Site na 8 mbụ, dee otu iwu dị mfe (dịka ọmụmaatụ \"ọ bụrụ na mmiri zoro, bọs ga-egbu oge\"). Nwalee iwu ahụ na row 2 e zoro ezo ma gbakọọ izi ezi ya.",
          youCanNow: "ikewa data ka ọ bụrụ training set na test set ma gbakọọ izi ezi.",
          quickCheck: [
            { objective: "O3", q: "Gịnị bụ overfitting?", options: ["Mgbe model dị obere nke ukwuu", "Mgbe data nnwale dị ukwuu nke ukwuu", "Mgbe model buru ihe atụ ọzụzụ ya n'isi ma daa n'ndị ọhụrụ", "Mgbe izi ezi bụ pasentị 50"], answer: 2, why: "Overfitting dị ka ibu azịza ule afọ gara aga n'isi." },
            { objective: "O3", q: "Model aghụghọ nwetara izi ezi 95%, mana ndị o furu bụ ezi aghụghọ. Gịnị ka ị ga-ajụ ọzọ?", options: ["Gịnị ka mperi ndị ahụ na-efu?", "Anyị nwere ike ịhapụ test set?", "Anyị nwere ike ịzụ na test set?", "95% ọ na-ezu mgbe niile?"], answer: 0, why: "Jụọ mgbe niile ihe mperi na-efu; ịdọ aka na ntị aghụghọ e furu efu dị mkpa nke ukwuu." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Otu igwe si amụta ihe",
        questions: [
          { objective: "O1", q: "Site n'ihe ka model machine learning si amụta ihe?", options: ["Iwu mmadụ dere maka ọnọdụ ọ bụla", "Batrị kọmputa ahụ", "Ihe atụ, na-enwekarị azịza ziri ezi", "Naanị ịkọ nkọ n'efu"], answer: 2, why: "ML na-achọta usoro n'ihe atụ." },
          { objective: "O1", q: "Ibu amụma okpomọkụ echi n'ogo (degrees) bụ:", options: ["Regression", "Classification", "Ọ bụghị ML", "Label"], answer: 0, why: "Ibu amụma nọmba bụ regression." },
          { objective: "O2", q: "Na tebụl iji buo amụma ma ụlọ ahịa ga-ejupụta, \"ọ jupụtara ma ọ bụ o jupụtaghị\" bụ:", options: ["Feature", "Test set", "Izi ezi", "Label"], answer: 3, why: "Label bụ azịza ị chọrọ ibu amụma ya." },
          { objective: "O3", q: "Gịnị mere e ji ezo test set ruo n'ọgwụgwụ?", options: ["Ime ka ọzụzụ dị ngwa", "Ilele model n'ihe atụ ọ hụbeghị mgbe ọ bụla", "N'ihi na ọ gbajiri agbaji", "Ime ka data buru ibu"], answer: 1, why: "Nnwale na data ọhụrụ na-egosi ma model ahụ mụtara ihe n'ezie." },
          { objective: "O3", q: "Model nwetara 15 n'ime ihe atụ nnwale 20 nke ọma. Kedu izi ezi ya?", options: ["15%", "20%", "50%", "75%"], answer: 3, why: "15 kewaa 20 bụ 0.75, ya bụ pasentị 75." }
        ]
      }
    },
    {
      name: "Isi 2: Ịzụ model mbụ gị na Colab",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ibulite dataset site na scikit-learn",
          minutes: 5,
          goal: "Bulite dataset omume na Colab ma lee feature na label ya.",
          text: [
            "scikit-learn bụ library Python n'efu maka machine learning, nke a wụnyelarị na Google Colab. O nwere obere dataset omume. Dataset iris nwere okooko osisi 150. Nke ọ bụla nwere feature anọ (ogologo na obosara akụkụ abụọ nke okooko osisi ahụ, na centimita) na label: otu n'ime ụdị atọ.",
            "Bulite ya site na: from sklearn.datasets import load_iris, wee iris = load_iris(). Feature dị na iris.data, label dịkwa na iris.target. iris.feature_names na iris.target_names na-agwa gị ihe kọlụm na label pụtara.",
            "Lee data gị mgbe niile tupu ọzụzụ: row ole, kọlụm ndị ahụ bụ gịnị, na row ole na ole dị ka ihe atụ. iris.data.shape na-agwa gị row na kọlụm: (150, 4)."
          ],
          steps: ["Meghee notebook ọhụrụ na colab.research.google.com.", "Gbaa: from sklearn.datasets import load_iris", "Gbaa: iris = load_iris()", "Bipụta iris.data.shape, iris.feature_names na iris.target_names.", "Bipụta row atọ mbụ: print(iris.data[:3], iris.target[:3])"],
          words: [["scikit-learn", "library Python n'efu maka machine learning, a na-ebubata ya dị ka sklearn."], ["Dataset iris", "dataset omume a ma ama nke okooko osisi 150 n'ụdị atọ."], ["shape", "ọnụ ọgụgụ row na kọlụm dị na data."], ["X na y", "aha a na-ejikarị: X maka feature, y maka label."]],
          slides: [
            { title: "scikit-learn", bullets: ["Library ML Python n'efu", "Ọ dịlarị na Google Colab", "O nwere dataset omume"] },
            { title: "Dataset iris", bullets: ["Okooko osisi 150, feature 4 nke ọ bụla", "Label: otu n'ime ụdị 3", "iris.data na iris.target"] },
            { title: "Lee tupu ị zụọ", bullets: ["iris.data.shape na-enye (150, 4)", "feature_names na target_names", "Bipụta row ole na ole"] }
          ],
          sources: [SKLEARN, COLAB],
          tryIt: "Bulite dataset iris na Colab. Bipụta shape, aha feature anọ ahụ, aha ụdị atọ ahụ, na row ise mbụ ya na label ha. Dee nọmba nọchiri anya ụdị ọ bụla.",
          youCanNow: "ibulite dataset na Colab ma kọwaa feature ya, label ya na nha ya.",
          quickCheck: [
            { objective: "O4", q: "Na dataset iris nke scikit-learn, gịnị dị n'ime iris.target?", options: ["Ntụle okooko osisi ahụ", "Label ụdị ahụ", "Aha kọlụm", "Izi ezi"], answer: 1, why: "iris.target nwere label; iris.data nwere feature." },
            { objective: "O4", q: "Ị ka bulitere dataset ọhụrụ. Gịnị ka ị ga-eme tupu ịzụ model?", options: ["Zụọ ozugbo n'eleghị anya", "Hichapụ ọkara row", "Gbanwee label ndị ahụ n'aka", "Lee shape, aha kọlụm na row ole na ole dị ka ihe atụ"], answer: 3, why: "Lee data gị mgbe niile tupu ọzụzụ." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ịzụ na ịnwale decision tree",
          minutes: 6,
          goal: "Kewaa data, zụọ decision tree, ma tụọ izi ezi ya.",
          text: [
            "Decision tree na-amụta usoro ajụjụ ee-ma-ọ-bụ-mba, dị ka flowchart: \"Petal ọ dị mkpụmkpụ karịa 2.5 cm? Mgbe ahụ ọ bụ ụdị 0.\" Ọ dị mfe ịkọwa, nke na-eme ka ọ bụrụ ezigbo model mbụ.",
            "Model scikit-learn ọ bụla na-arụ ọrụ n'otu ụzọ: mepụta ya, fit ya na data ọzụzụ, wee predict na data ọhụrụ. Koodu ahụ: X, y = load_iris(return_X_y=True). X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.25, random_state=42). model = DecisionTreeClassifier(random_state=42). model.fit(X_train, y_train).",
            "Wee nwalee ya: predictions = model.predict(X_test) na print(accuracy_score(y_test, predictions)). random_state=42 na-edozi naanị usoro shuffle ka ị nweta otu azịza ahụ oge ọ bụla ị gbara ya."
          ],
          steps: ["Bubata: from sklearn.model_selection import train_test_split", "Bubata: from sklearn.tree import DecisionTreeClassifier", "Bubata: from sklearn.metrics import accuracy_score", "Kewaa site na train_test_split(X, y, test_size=0.25, random_state=42).", "Mepụta model, kpọọ model.fit(X_train, y_train), wee predict na X_test ma bipụta izi ezi."],
          words: [["Decision tree", "model na-amụta flowchart nke ajụjụ ee-ma-ọ-bụ-mba."], ["fit", "ịzụ model na data."], ["predict", "iji model a zụrụ azụ chepụta label maka data ọhụrụ."], ["train_test_split", "ngwa scikit-learn na-ekewa data ka ọ bụrụ training set na test set."], ["random_state", "nọmba na-edozi shuffle ka azịza wee na-emeghachi otu ahụ."]],
          slides: [
            { title: "Decision tree", bullets: ["Flowchart nke ajụjụ ee-ma-ọ-bụ-mba", "Ọ dị mfe ịkọwa", "Ezigbo model mbụ"] },
            { title: "Usoro maka model ọ bụla", bullets: ["Mepụta ya", "fit(X_train, y_train)", "predict(X_test)"] },
            { title: "Tụọ ya", bullets: ["accuracy_score(y_test, predictions)", "test_size=0.25 na-edobe 25% maka nnwale", "random_state na-eme ka azịza na-emeghachi"] }
          ],
          sources: [SKLEARN],
          tryIt: "Dee ma gbaa koodu decision tree niile na Colab. Bipụta izi ezi. Wee gbanwee test_size ka ọ bụrụ 0.5, gbaa ya ọzọ, ma dee ma izi ezi rịgoro ka ọ dara.",
          youCanNow: "ikewa data, zụọ decision tree site na fit, predict site na ya ma tụọ izi ezi.",
          quickCheck: [
            { objective: "O5", q: "Gịnị mere decision tree ji bụrụ ezigbo model mbụ?", options: ["Ọ dị mfe ịkọwa, dị ka flowchart nke ajụjụ ee-ma-ọ-bụ-mba", "Ọ naghị emehie ihe mgbe ọ bụla", "Ọ chọghị data", "Ọ na-arụ ọrụ naanị na okooko osisi"], answer: 0, why: "Enwere ike ịgụ ajụjụ decision tree dị ka flowchart." },
            { objective: "O5", q: "I zụrụ model gị ma chọọ ilele ya. Kedu ahịrị ị ga-agba?", options: ["model.fit(X_test, y_test)", "load_iris()", "predictions = model.predict(X_test), wee accuracy_score(y_test, predictions)", "random_state=42"], answer: 2, why: "Predict na test set, wee tụnyere ya na ezi label maka izi ezi." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ịtụnyere model na ịmata oke ha",
          minutes: 6,
          goal: "Zụọ model nke abụọ, tụnyere ya na nke mbụ, buo amụma maka ihe atụ ọhụrụ ma kpọọ aha otu oke.",
          text: [
            "Ọ dịkarịghị otu model zuru oke, ya mere ị na-anwale karịa otu. k-nearest neighbors (KNN) na-ebu amụma site n'ịchọta ihe atụ k kacha yie ya na data ọzụzụ ma were votu. Mepụta ya site na KNeighborsClassifier(n_neighbors=5) sitere na sklearn.neighbors; ọ na-eji otu nzọụkwụ fit na predict ahụ.",
            "Tụnyere model abụọ ahụ n'otu test set. Iji buo amụma maka otu okooko osisi ọhụrụ, nye model ahụ list n'ime list: model.predict([[5.1, 3.5, 1.4, 0.2]]). Ọ na-eweghachi nọmba ụdị ahụ; iris.target_names na-eme ka ọ bụrụ aha.",
            "Mara oke ha. Model ndị a maara naanị ụdị atọ a na ntụle anọ a: gosi ha rose, ha ga-akpọ ya iris. Test set dị obere nwere ike ime ka izi ezi dị ka ọ ka mma ma ọ bụ ka njọ karịa ka ọ dị. Na ezi data gbasara mmadụ, lelee na model ahụ na-arụ ọrụ n'ụzọ ziri ezi nye otu ọ bụla tupu onye ọ bụla adabere na ya."
          ],
          steps: ["Bubata: from sklearn.neighbors import KNeighborsClassifier", "Mepụta knn = KNeighborsClassifier(n_neighbors=5) ma fit ya n'otu data ọzụzụ ahụ.", "Bipụta akara izi ezi abụọ ahụ.", "Buo amụma maka otu okooko osisi ọhụrụ site na model ka mma: model.predict([[5.1, 3.5, 1.4, 0.2]])", "Dee model ị ga-ahọrọ na otu oke ya."],
          words: [["k-nearest neighbors (KNN)", "model na-ebu amụma site na votu nke ihe atụ ọzụzụ kacha yie ya."], ["n_neighbors", "ihe atụ ole yiri ya KNN na-ele (k)."], ["Oke (limit)", "ọnọdụ model enweghị ike ijikwa nke ọma."], ["Ikpe ziri ezi (fairness)", "model na-arụ ọrụ nke ọma n'otu aka ahụ nye otu mmadụ ọ bụla o metụtara."]],
          slides: [
            { title: "Nwalee karịa otu model", bullets: ["KNN: votu nke ihe atụ k kacha yie ya", "KNeighborsClassifier(n_neighbors=5)", "Otu nzọụkwụ fit na predict ahụ"] },
            { title: "Tụnyere ma buo amụma", bullets: ["Otu test set maka model abụọ ahụ", "model.predict([[5.1, 3.5, 1.4, 0.2]])", "target_names na-eme ka nọmba bụrụ aha"] },
            { title: "Mara oke ha", bullets: ["Ọ maara naanị ihe e ji zụọ ya", "Test set dị obere nwere ike iduhie", "Na data mmadụ, lelee ikpe ziri ezi"] }
          ],
          sources: [SKLEARN],
          tryIt: "Ọrụ ikpeazụ: n'otu notebook, zụọ decision tree na model KNN n'otu nkewa ahụ, bipụta izi ezi abụọ ahụ, buo amụma ụdị okooko osisi [6.0, 2.9, 4.5, 1.5] site na model ka mma ma bipụta aha ya, wee dee ahịrịokwu abụọ maka model ị họrọ na otu oke o nwere.",
          youCanNow: "ịzụ, nwalee ma tụnyere model abụọ, buo amụma, ma kọwaa oke model.",
          quickCheck: [
            { objective: "O6", q: "Gịnị ka n_neighbors=5 pụtara na model KNN?", options: ["Ọ na-azụ ugboro ise", "Ọ na-ele ihe atụ ọzụzụ 5 kacha yie ya ma were votu", "Ọ na-edobe pasentị 5 maka nnwale", "Ọ na-ebu amụma okooko osisi 5 n'otu oge"], answer: 1, why: "KNN na-ebu amụma site na votu nke ihe atụ k kacha yie ya." },
            { objective: "O6", q: "Model gị buru amụma ụdị 0 maka okooko osisi ọhụrụ. Kedu ka ị ga-esi mee ka nọmba ahụ bụrụ aha?", options: ["Chepụta aha ahụ", "Zụọ model ahụ ọzọ", "Gbanwee nha nnwale", "Chọọ ya na iris.target_names"], answer: 3, why: "iris.target_names na-eme ka nọmba ụdị bụrụ aha." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ịzụ model mbụ gị na Colab",
        questions: [
          { objective: "O4", q: "Gịnị ka iris.data.shape (150, 4) na-agwa gị?", options: ["Ụdị 150 na okooko osisi 4", "Model ahụ ziri ezi 150%", "Row 4 na kọlụm 150", "Row 150 na kọlụm feature 4"], answer: 3, why: "Shape na-ebu ụzọ depụta row, wee kọlụm." },
          { objective: "O5", q: "Kedu usoro ziri ezi nke nzọụkwụ maka model scikit-learn?", options: ["Mepụta ya, fit ya na data ọzụzụ, wee predict", "predict, wee fit, wee mepụta", "fit na test set, wee predict na data ọzụzụ", "Naanị predict"], answer: 0, why: "A na-emepụta model ọ bụla, fit ya, wee jiri ya predict." },
          { objective: "O5", q: "Gịnị ka test_size=0.25 pụtara na train_test_split?", options: ["Jiri row 25", "Zụọ maka nkeji 25", "Debe 25% nke row maka nnwale", "Izi ezi ga-abụrịrị 25%"], answer: 2, why: "test_size na-akọwa akụkụ row e debere n'akụkụ." },
          { objective: "O6", q: "Kedu ka k-nearest neighbors si ebu amụma?", options: ["Ọ na-ajụ mmadụ", "Ọ na-atụ mkpụrụ ego", "Ọ na-eji aka ede iwu", "Ọ na-ewe votu nke ihe atụ ọzụzụ kacha yie ya"], answer: 3, why: "KNN na-eji ihe atụ k kacha nso." },
          { objective: "O6", q: "E nyere model iris gị ntụle nke rose. Gịnị na-eme?", options: ["Ọ na-ekwu \"rose\"", "Ọ jụrụ", "Ọ ka na-akpọ ya otu n'ime ụdị iris atọ ahụ", "Ọ na-amụta rose n'onwe ya"], answer: 2, why: "Model maara naanị label e ji zụọ ya." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Mmalite Machine Learning",
    questions: [
      { objective: "O1", q: "Machine learning pụtara:", options: ["Mmadụ na-ede iwu ọ bụla", "Kọmputa na-achọta usoro site n'ihe atụ", "Robot na-eje ije", "Ịntanetị ka ngwa"], answer: 1, why: "ML na-amụta ihe site na data." },
      { objective: "O1", q: "Kedu nke bụ ojiji machine learning kwa ụbọchị?", options: ["Ihe na-egbochi spam na email", "Mgba ọkụ", "Map akwụkwọ", "Igwe mgbakọ na-agbakọ 2 + 2"], answer: 0, why: "Ihe na-egbochi spam na-amụta ihe site n'ọtụtụ email a kara akara." },
      { objective: "O1", q: "Ikpebi ma foto na-egosi pusi ka ọ bụ nkịta bụ:", options: ["Regression", "Overfitting", "Classification", "Feature"], answer: 2, why: "Ịhọrọ otu bụ classification." },
      { objective: "O1", q: "Ibu amụma nkeji ole fọdụrụ ka bọs bịarute bụ:", options: ["Regression", "Classification", "Nchịkọta label", "Nnwale"], answer: 0, why: "Ibu amụma nọmba bụ regression." },
      { objective: "O1", q: "Supervised learning na-eji:", options: ["Ọ dịghị data", "Naanị foto", "Naanị onye nkuzi nọ n'ime ụlọ", "Ihe atụ nwere azịza ziri ezi"], answer: 3, why: "Supervised pụtara na ihe atụ ndị ahụ nwere label." },
      { objective: "O2", q: "Na dataset, row ọ bụla na-abụkarị:", options: ["Otu feature", "Otu ihe atụ", "Model niile", "Akara nnwale"], answer: 1, why: "Row bụ ihe atụ; kọlụm bụ feature ma ọ bụ label." },
      { objective: "O2", q: "Iji buo amụma ma tiketi egwuregwu ga-agwụ, kedu feature nwere isi?", options: ["Agba weebụsaịtị tiketi", "Ụbọchị n'izu na otu ndị a na-egwu megide", "Izi ezi model ahụ", "Label"], answer: 1, why: "Feature kwesịrị imetụta azịza n'ezie." },
      { objective: "O2", q: "Data bọs gị nwere naanị njem ụbọchị ọrụ. Gịnị bụ ihe egwu ya?", options: ["Ọ dịghị", "Ọ ga-azụ ngwa ngwa nke ukwuu", "Izi ezi ga-abụ 100%", "Model ahụ agaghị ebu amụma ngwụsị izu nke ọma"], answer: 3, why: "Ụdị ihe atụ na-efu na-eme ka model hie ụzọ maka ha." },
      { objective: "O3", q: "Overfitting bụ mgbe model:", options: ["Buru data ọzụzụ n'isi ma daa na data ọhụrụ", "Dị obere nke ukwuu ibulite", "Nwere feature dị ole na ole", "Ebe nchekwa ya gwụrụ"], answer: 0, why: "Model overfit anaghị arụ ọrụ nke ọma na data ọhụrụ." },
      { objective: "O3", q: "Kedu data ka ị ga-eji tụọ izi ezi?", options: ["Training set", "Data ọ bụla masịrị gị", "Test set model ahụ ahụbeghị", "Naanị otu row"], answer: 2, why: "Naanị data a hụbeghị na-egosi ezi ọrụ." },
      { objective: "O3", q: "Model nwetara 45 n'ime row nnwale 50 nke ọma. Izi ezi bụ:", options: ["45%", "50%", "90%", "95%"], answer: 2, why: "45 kewaa 50 bụ 0.9." },
      { objective: "O4", q: "scikit-learn bụ:", options: ["App a na-akwụ ụgwọ", "Ụdị dataset", "Library Python n'efu maka machine learning", "Spreadsheet"], answer: 2, why: "scikit-learn (sklearn) bụ n'efu na open source." },
      { objective: "O4", q: "Na dataset iris, ụdị okooko osisi bụ:", options: ["Feature", "Label", "Shape", "Model"], answer: 1, why: "Ụdị bụ ihe anyị na-ebu amụma ya, ya mere ọ bụ label." },
      { objective: "O5", q: "Kedu ahịrị na-azụ model?", options: ["model.fit(X_train, y_train)", "model.predict(X_test)", "print(model)", "load_iris()"], answer: 0, why: "fit na-azụ model." },
      { objective: "O5", q: "Kedu ahịrị na-enye amụma maka test set?", options: ["model.fit(X_test)", "accuracy_score(X_test)", "model.predict(X_test)", "train_test_split(model)"], answer: 2, why: "predict na-eji model a zụrụ azụ na data ọhụrụ." },
      { objective: "O5", q: "Gịnị mere e ji etinye random_state=42?", options: ["Ime ka azịza bụrụ otu ahụ oge ọ bụla", "Ime ka model ka mma 42%", "Iji row 42", "Ọ dị mkpa iji gbaa Python"], answer: 0, why: "Ọ na-edozi shuffle ahụ." },
      { objective: "O5", q: "Decision tree dị ka:", options: ["Votu nke ndị agbata obi", "Mgbakọ spreadsheet", "Ịkọ nkọ n'efu", "Flowchart nke ajụjụ ee-ma-ọ-bụ-mba"], answer: 3, why: "Tree na-ekewa data site n'ajụjụ." },
      { objective: "O6", q: "Iji buo amụma maka otu okooko osisi ọhụrụ, ị na-ede:", options: ["model.predict(5.1, 3.5, 1.4, 0.2)", "model.predict([[5.1, 3.5, 1.4, 0.2]])", "model.fit([5.1])", "predict.model(5.1)"], answer: 1, why: "Model na-atụ anya list nke row, ya mere otu row na-abanye n'ime list ọzọ." },
      { objective: "O6", q: "Model abụọ nwetara 93% na 97% n'otu test set. Ezigbo nzọụkwụ ọzọ bụ:", options: ["Hichapụ ha abụọ", "Họrọ 97% ma chebakwaa echiche maka oke ya na ihe mperi na-efu", "Zụọ ọzọ na test set", "Họrọ nke na-adị nwayọọ"], answer: 1, why: "Tụnyere n'ụzọ ziri ezi, wee tụlee oke na ihe mperi na-efu." },
      { objective: "O6", q: "Tupu iji model na-eme mkpebi gbasara mmadụ, ị kwesịrị:", options: ["Ịhapụ nnwale", "Izo otu o si arụ ọrụ", "Iji naanị data ọzụzụ", "Ilele na ọ na-arụ ọrụ n'ụzọ ziri ezi nye otu ọ bụla"], answer: 3, why: "Nlele ikpe ziri ezi na-echebe ndị ọ na-emetụta." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [
      0,
      2,
      3,
      6,
      8,
      10,
      11,
      13,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      {
        name: "Ibulite na ikewa data",
        objective: "O5",
        notYet: "Data ahụ anaghị ebulite, ma ọ bụ a na-anwale model na data ọzụzụ.",
        meets: "E bulitere data iris ma kewaa ya ka ọ bụrụ training set na test set site na train_test_split.",
        exceeds: "Ọ na-ebipụtakwa shape nke set ọ bụla ma kọwaa nkewa ahụ."
      },
      {
        name: "Model abụọ a zụrụ ma nwalee",
        objective: "O5",
        notYet: "Naanị otu model ka a zụrụ, ma ọ bụ izi ezi adịghị.",
        meets: "A zụrụ decision tree na model KNN, e bipụtakwara izi ezi nnwale nke ọ bụla.",
        exceeds: "Ọ na-anwalekwa uru nke abụọ nke n_neighbors ma tụnyere ha."
      },
      {
        name: "Amụma maka okooko osisi ọhụrụ",
        objective: "O6",
        notYet: "Enweghị amụma, ma ọ bụ ihe e nyere dị n'ọdịdị ezighi ezi.",
        meets: "Model ka mma na-ebu amụma maka otu okooko osisi ọhụrụ, e bipụtakwara aha ụdị ahụ.",
        exceeds: "Ọ na-akọwakwa ihe mere amụma ahụ ji kwekọọ na ntụle ndị ahụ."
      },
      {
        name: "Nhọrọ na oke",
        objective: "O6",
        notYet: "Ahịrịokwu abụọ ahụ adịghị, ma ọ bụ a kpọghị aha ezi oke ọ bụla.",
        meets: "Ahịrịokwu abụọ: model ọ bụ na ihe kpatara ya, na otu ezi oke.",
        exceeds: "Ọ na-ekwukwa maka ihe mperi na-efu ma ọ bụ ikpe ziri ezi maka data gbasara mmadụ."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma nweta Ruru eru ma ọ bụ Karịrị n'ahịrị rubric ọ bụla nke ọrụ ikpeazụ",
      "Ndị na-amụ ihe kwuru na ha zụrụ model na dataset ọzọ n'ime ụbọchị 30 mgbe ihe ọmụmụ ahụ gasịrị (nnyocha nsochi)",
      "Ndị na-amụ ihe gara n'ihe ọmụmụ ọzọ, dị ka Deep Learning ma ọ bụ Data Science maka Ndị Mbido",
      "Ndị na-amụ ihe tinyere notebook ahụ na portfolio, ọrụ klas ma ọ bụ akwụkwọ arịrịọ ọrụ"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Kọmputa ma ọ bụ laptop nwere web browser",
      "Akaụntụ Google n'efu iji Google Colab (a wụnyelarị scikit-learn)",
      "Akwụkwọ na mkpịsị ode iji see feature na label maka ọrụ dataset",
      "Ihe dị ka nkeji 60 ruo 75 n'ozuzu, gbakwunyere oge omume"
    ],
    facilitatorNotes: [
      "Lelee na ndị na-amụ ihe nwere ike imeghe Google Colab tupu klas; ụfọdụ akaụntụ ụlọ akwụkwọ na-egbochi ya.",
      "Meenụ ọrụ dataset bọs na-egbu oge ma ọ bụ ihe omume ụlọ n'akwụkwọ dị ka otu tupu koodu ọ bụla.",
      "Mee ka ndị na-amụ ihe tụnyere izi ezi ha n'ihu bọọdụ; uru random_state dị iche iche na-enye azịza dị iche iche, nke bụ ezigbo mkparịta ụka.",
      "Kwuo maka ikpe ziri ezi n'ihu ọha: jụọ ihe nwere ike ịga njọ ma ọ bụrụ na model dị otu a mere mkpebi gbasara mmadụ.",
      "Gbaa ndị na-amụ ihe ume ka ha kọwaara ibe ha ahịrị koodu ọ bụla tupu ha agbaa ya, abụọ abụọ."
    ]
  }
};
