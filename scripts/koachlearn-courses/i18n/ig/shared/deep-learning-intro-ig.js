"use strict";

// Koach Learn course (Igbo translation of shared/deep-learning-intro.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const COLAB = { name: "Google Colab: Ajụjụ a na-ajụkarị", url: "https://research.google.com/colaboratory/faq.html" };
const KERAS_MNIST = { name: "Ọmụmaatụ koodu Keras: Simple MNIST convnet", url: "https://keras.io/examples/vision/mnist_convnet/" };

module.exports = {
  id: "deep-learning-intro-ig",
  lang: "ig",
  translationOf: "deep-learning-intro",
  category: "Veterans (military)",
  name: "Mmalite Deep Learning na Neural Network",
  skills: "Ịkọwa otu neural network si arụ ọrụ, Ịgbakọ ihe neuron na-enye, Ibubata na ịhazi data foto, Iwu na ịzụ network na Keras, Ịtụle na ime ka model ka mma",
  outcome: "iwu, ịzụ na ịnwale obere neural network na Google Colab site na Keras nke na-agụ ọnụọgụ e ji aka dee, ikwu otú o si ziri ezi na foto ọhụrụ, ịnwale otu mgbanwe iji mee ka ọ ka mma, na ịkọwa ihe model ahụ nwere ike ime na ihe ọ na-enweghị ike ime.",
  about: [
    "Deep learning na-eme ka ekwentị mata ihu gị meghee, na-enyere ndị enyemaka olu, ngwa ntụgharị asụsụ, ngwa foto ahụike na igwefoto na-enyocha akụkụ ngwaahịa n'ụlọ ọrụ mmepụta. Ihe ọmụmụ a na-akọwa otú o si arụ ọrụ n'okwu dị mfe, wee mee ka gị onwe gị wuo neural network na-arụ ọrụ.",
    "Ọ dabara ndị agha mbụ (veterans) na-abanye n'ọrụ teknụzụ, ndị maara ntakịrị Python, na onye ọ bụla gụchara \"Mmalite Machine Learning\". Isi 1 na-ewulite echiche ndị ahụ site n'omume pensụl na akwụkwọ. Isi 2 na-aga na Google Colab, weebụsaịtị n'efu na-agba Python, ebe ị ga-azụ network site na Keras, ọba akwụkwọ (library) deep learning n'efu. E nyere ahịrị koodu ọ bụla ma kọwaa ya.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise ma na-ejedebe n'ọrụ \"Nwalee ya ugbu a\". Nnwale ihe ọmụma na-emechi isi ọ bụla, ule nwere ajụjụ 20 na-emechikwa ihe ọmụmụ ahụ."
  ],
  finalTask: "Na Google Colab, bubata ọnụọgụ MNIST e ji aka dee, hazie ha, wuo ma zụọ neural network Keras, kwuo otú o si ziri ezi na foto nnwale, buo amụma foto nnwale ise ma tụnyere ha na ezi label ha, wee mee otu mgbanwe (neuron ndị ọzọ ma ọ bụ epoch ndị ọzọ), zụghachi ya, ma dee ahịrịokwu abụọ maka ma ọ nyere aka na otu oke model ahụ nwere.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị agha mbụ (veterans) na ndị agha na-apụ n'ọrụ agha na-abanye n'ọrụ teknụzụ, data ma ọ bụ AI, ya na ndị di ma ọ bụ nwunye ndị agha na ndị okenye ndị ọzọ na-amụ ihe na mmemme ọrụ ndị agha mbụ, ndị nwere ahụmahụ Python.",
    startingPoint: "Ha nwere ike ide ma gbaa obere mmemme Python na Google Colab, ma mara isi echiche nke ịzụ na ịnwale model. Ọtụtụ ahụbeghị ime neural network, gbakọọ ihe neuron na-enye, ma ọ bụ wuo ma zụọ otu site na Keras.",
    gap: "Deep learning na-akwali ngwa foto, olu na ederede n'ọrụ nchekwa obodo, mbufe ngwaahịa, ahụike na ụlọ ọrụ, ọtụtụ ọrụ teknụzụ na-atụkwa anya ka ndị mmadụ mara otú neural network si amụta ihe na otú ọ si ada. Omume aka na-enye ndị na-amụ ihe obi ike ikwu maka ya n'ajụjụ ọnụ ọrụ, ikpe ikpe maka nsonaazụ model, na ịhụ ebe mmadụ ga-anọgide na-elele.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; a na-akọwa okwu dị ka weight, bias, loss na epoch site n'obere ọmụmaatụ a gbakọrọ agbakọ",
      "Ngwaọrụ: kọmputa ma ọ bụ laptop nwere web browser",
      "Akaụntụ na ego: akaụntụ Google n'efu maka Google Colab; Keras na data MNIST bụ n'efu; ihe Colab na-enye n'efu nwere oke, ọ nwekwara ike ịgbanwe",
      "Oge: ihe dị ka nkeji 5 ruo 6 kwa nkuzi gbakwunyere oge omume na oge ọzụzụ, ihe dị ka nkeji 60 ruo 75 n'ozuzu",
      "Mgbakọ na mwepụ: ịmụba na ịgbakwunye obere ọnụọgụ n'aka; ọ dịghị mkpa calculus"
    ],
    prerequisites: "Mmalite Mmemme Kọmputa na Python; Mmalite Machine Learning ga-enye aka."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "N'enweghị ndetu", action: "ịkọwa ihe deep learning bụ na ịkpọ aha ụdị data ọ na-arụkarị ọrụ nke ọma na ya", standard: "na-ekwu maka layer na-amụta pattern site n'ọmụmaatụ na opekata mpe ụdị data abụọ dabara" },
    { id: "O2", condition: "Mgbe e nyere gị input, weight, bias na ReLU nke neuron", action: "ịgbakọ ihe neuron ahụ na-enye n'aka", standard: "na-enweta azịza ziri ezi mgbe niile, gụnyere mgbe ReLU na-enye 0" },
    { id: "O3", condition: "Mgbe e nyere gị ndekọ ọzụzụ nwere loss na accuracy", action: "ịkọwa otú ọzụzụ si agbanwe weight na ịmata ihe na-egosi overfitting", standard: "na-eji okwu loss, learning rate, epoch na validation n'ụzọ ziri ezi" },
    { id: "O4", condition: "Na Google Colab site na Keras", action: "ibubata ọnụọgụ MNIST, ịhazi pixel ma gosi otu foto na label ya", standard: "pixel dị n'etiti 0 na 1, label ahụ dabakwara foto ahụ" },
    { id: "O5", condition: "Mgbe e nyere gị data MNIST a kwadebere", action: "iwu, ịcompile na ịzụ neural network Keras", standard: "koodu ahụ na-agba, e jiri validation split, loss na-agbadakwa n'epoch niile" },
    { id: "O6", condition: "Mgbe e nyere gị network a zụrụ azụ", action: "ịtụ accuracy ya na nnwale, ibu amụma foto ọhụrụ, ịnwale otu mgbanwe na ịkọwa oke ya", standard: "na-agbanwe otu ihe n'otu oge ma kpọọ opekata mpe otu ezi oke" }
  ],
  chapters: [
    {
      name: "Isi 1: Otú neural network si arụ ọrụ",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ihe deep learning bụ",
          minutes: 4,
          goal: "Kọwaa deep learning n'okwu nke gị ma kpọọ aha ebe a na-eji ya.",
          text: [
            "Deep learning bụ ụdị machine learning na-eji neural network: ọtụtụ obere ngwa mgbakọ, a na-akpọ neuron, ejikọtara n'ọtụtụ layer. \"Deep\" (miri emi) pụtara na e nwere ọtụtụ layer. Layer ọ bụla na-achọta pattern n'ihe layer bu ya ụzọ wepụtara.",
            "Maka foto, layer mbụ na-ahụ ihe dị mfe dị ka nsọtụ, layer etiti na-ahụ ọdịdị, layer ndị ikpeazụ na-ahụ ihe zuru ezu dị ka ihu mmadụ ma ọ bụ ọnụọgụ. Ọ dịghị onye na-ede iwu ndị ahụ: network ahụ na-amụta ha site n'ọtụtụ ọmụmaatụ nwere label.",
            "Ọ na-arụ ọrụ nke ọma mgbe data dị ukwuu, data ahụ gbagwojuru anya ma baa ọgaranya: foto, ụda, okwu ọnụ na ederede ogologo. Ọ chọrọ data na ike kọmputa karịa model ndị dị mfe, ọ bụ ya mere o ji bilie mgbe nnukwu dataset na mgbawa eserese ngwa ngwa (GPU) bịara juputa."
          ],
          words: [["Deep learning", "machine learning na-eji neural network nwere ọtụtụ layer."], ["Neural network", "model e ji ọtụtụ obere ngwa (neuron) ejikọtara na layer mee."], ["Layer", "otu ìgwè neuron na-anata input site na layer bu ya ụzọ."], ["GPU", "mgbawa eserese (graphics chip) na-eme ọtụtụ mgbakọ n'otu oge, e ji azụ network ngwa ngwa."]],
          slides: [
            { title: "Deep learning bụ", bullets: ["Machine learning na-eji neural network", "Ọtụtụ layer nke obere ngwa mgbakọ", "\"Deep\" = ọtụtụ layer"] },
            { title: "Layer na-achọta pattern", bullets: ["Layer mbụ: nsọtụ", "Layer etiti: ọdịdị", "Layer ikpeazụ: ihe zuru ezu"] },
            { title: "Ebe ọ na-enwu", bullets: ["Foto, ụda, okwu ọnụ na ederede", "Ọtụtụ data", "Ọ chọrọ ike kọmputa karịa (GPU)"] }
          ],
          tryIt: "Dee ngwa anọ i jirila nke nwere ike iji deep learning (dịka ọmụmaatụ imeghe ekwentị site n'ihu, ide ihe site n'olu, ịchọ foto, ntụgharị asụsụ). Maka nke ọ bụla, dee ụdị data ọ na-amụta na ya: foto, ụda ma ọ bụ ederede.",
          youCanNow: "ịkọwa ihe deep learning bụ, ihe mere o ji eji layer, na ebe a na-eji ya.",
          quickCheck: [
            { objective: "O1", q: "Gịnị bụ neuron na neural network?", options: ["Mkpụrụ ndụ ụbụrụ e detuuru na kọmputa", "Mgbawa eserese", "Obere ngwa mgbakọ ejikọtara na layer", "Foto nwere label"], answer: 2, why: "E ji ọtụtụ obere ngwa mgbakọ, a na-akpọ neuron, n'ime layer mee neural network." },
            { objective: "O1", q: "Ndị otu gị chọrọ ịhazi puku kwuru puku ozi redio e dekọrọ site n'onye na-ekwu okwu. Ị ga-atụle deep learning?", options: ["Ee; ọ na-arụ ọrụ nke ọma n'ọtụtụ data bara ọgaranya dị ka ụda", "Mba; deep learning enweghị ike iji ụda", "Mba; ọ na-arụ naanị n'ọnụọgụ dị na tebụl", "Naanị ma ọ bụrụ na ndekọ ahụ erughị iri"], answer: 0, why: "Deep learning na-arụ ọrụ nke ọma n'ọtụtụ data bara ọgaranya, gbagwojuru anya, dị ka foto, ụda na ederede." }
          ]
        },
        {
          objectives: ["O2"],
          title: "N'ime neuron: weight, bias na activation",
          minutes: 6,
          goal: "Gbakọọ n'aka ihe otu neuron na-enye.",
          text: [
            "Neuron na-anata ọnụọgụ ụfọdụ, na-amụba nke ọ bụla site na weight, na-agbakọta ha, ma gbakwunye otu ọnụọgụ ọzọ a na-akpọ bias. Weight na-egosi otú input ọ bụla si dị mkpa; network ahụ na-amụta ha.",
            "Mgbe ahụ ọ na-eji activation function, nke na-ekpebi ihe ọ ga-ebufe. Nke a na-ejikarị, ReLU, dị mfe: ọ bụrụ na nchikota ahụ erughị efu, nye 0; ma ọ bụghị ya, nye nchikota ahụ.",
            "Ọmụmaatụ: input 2 na 3, weight 0.5 na -1, bias 1. Nchikota = 2 x 0.5 + 3 x (-1) + 1 = 1 - 3 + 1 = -1. ReLU na-eme -1 ka ọ bụrụ 0, ya mere neuron a na-enye 0. Ọ bụrụ input 2 na 1 kama: 1 - 1 + 1 = 1, ya mere ọ na-enye 1.",
            "Network nwere puku kwuru puku n'ime ndị a. Layer ikpeazụ na-ejikarị softmax, nke na-eme ka ihe ọ na-enye ghọọ ohere (chances) gbakọtara ruo pasent 100, otu maka azịza ọ bụla nwere ike ịbụ."
          ],
          steps: ["Mụbaa input ọ bụla site na weight ya.", "Gbakọta nsonaazụ ha.", "Gbakwunye bias.", "Tinye activation: na ReLU, ihe na-erughị efu na-aghọ 0.", "Ọnụọgụ ahụ bụ ihe neuron ahụ na-enye."],
          words: [["Neuron", "obere ngwa na-amụba input site na weight, na-agbakwunye bias ma na-eji activation."], ["Weight", "ọnụọgụ network na-amụta nke na-egosi otú input si dị mkpa."], ["Bias", "ọnụọgụ ọzọ a gbakwunyere na nchikota, a na-amụtakwa ya."], ["Activation function", "iwu na-ekpebi ihe neuron na-ebufe."], ["ReLU", "otu activation: nchikota na-erughị efu na-aghọ 0, ndị ọzọ na-anọ otu ha dị."], ["Softmax", "na-eme ka ihe layer ikpeazụ na-enye ghọọ ohere gbakọtara ruo 1."]],
          slides: [
            { title: "Otu neuron", bullets: ["Input x weight, gbakọta ha", "Gbakwunye bias", "Wee tinye activation function"] },
            { title: "ReLU", bullets: ["N'okpuru efu: nye 0", "Efu ma ọ bụ karịa: nye nchikota ahụ"] },
            { title: "Ọmụmaatụ a gbakọrọ agbakọ", bullets: ["Input 2, 3; weight 0.5, -1; bias 1", "2 x 0.5 + 3 x (-1) + 1 = -1", "ReLU(-1) = 0"] },
            { title: "Layer ikpeazụ", bullets: ["Softmax na-enye ohere maka azịza ọ bụla", "Ohere ndị ahụ gbakọtara ruo 100%"] }
          ],
          tryIt: "Gbakọọ n'aka ihe neuron na-enye: input 4 na 1, weight 0.5 na 2, bias -3, activation ReLU. Wee gbanwee bias ka ọ bụrụ -6 ma gbakọọ ya ọzọ. (Azịza: 1, wee 0.)",
          youCanNow: "ịgbakọ ihe neuron na-enye site na input, weight, bias na activation ya.",
          quickCheck: [
            { objective: "O2", q: "Na neuron, gịnị bụ bias?", options: ["Input nwere uru kachasị ukwuu", "Activation function", "Iwu na-ekwu na model ahụ ezighi ezi", "Otu ọnụọgụ ọzọ a gbakwunyere mgbe a gbakọtachara input na weight ha"], answer: 3, why: "Neuron na-agbakwunye bias na nchikota weight tupu activation." },
            { objective: "O2", q: "Input 4 na 1, weight 0.5 na 2, bias -1, ReLU. Gịnị ka ị ga-agbakọ dị ka ihe ọ na-enye?", options: ["0", "3", "5", "-1"], answer: 1, why: "4 x 0.5 + 1 x 2 - 1 = 3, ReLU na-edebekwa nchikota karịrị efu." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Otú network si amụta ihe: loss, epoch na obere nzọụkwụ",
          minutes: 5,
          goal: "Kọwaa otú ọzụzụ si agbanwe weight iji belata mperi.",
          text: [
            "Na mbido, weight bụ nke a họrọ n'enweghị usoro (random), ya mere ihe network na-eche adịghị mma. Ọzụzụ na-edozi nke ahụ. Network na-eche otu azịza, loss function na-atụkwa otú o si mehie: loss buru ibu pụtara na o mehiere nke ukwuu, obere loss pụtara na ọ dị nso.",
            "Mgbe ahụ ọ na-achọpụta, maka weight ọ bụla, ụzọ ga-ebelata loss (a na-akpọ nzọụkwụ a backpropagation) ma na-akwali weight ọ bụla obere nzọụkwụ n'ụzọ ahụ (gradient descent). Ogo nzọụkwụ ahụ bụ learning rate: ọ buru oke ibu, ọ na-agafe; ọ dị oke nta, ọ na-adị nwayọọ nke ukwuu.",
            "Otu ngagharị n'ọmụmaatụ ọzụzụ niile bụ epoch. Ọzụzụ na-ewekarị ọtụtụ epoch. Ị na-ele ka loss na-agbada, accuracy na-arịgo, ị na-elelekwa validation set (data a debere n'akụkụ, a naghị eji ya azụ) iji jide overfitting: ọ bụrụ na accuracy ọzụzụ na-arịgo mana accuracy validation na-agbada, kwụsị."
          ],
          steps: ["Malite na weight a họrọ n'enweghị usoro.", "Chee azịza n'ọmụmaatụ ọzụzụ.", "Tụọ mperi ahụ site na loss function.", "Kwalie weight ọ bụla obere nzọụkwụ iji belata loss.", "Mee ya ọzọ ruo ọtụtụ epoch, na-ele accuracy validation."],
          words: [["Loss", "ọnụọgụ na-atụ otú ihe network chere si mehie."], ["Backpropagation", "ịchọpụta otú weight ọ bụla si metụta loss."], ["Gradient descent", "ịkwali weight n'obere nzọụkwụ iji belata loss."], ["Learning rate", "otú nzọụkwụ ọ bụla si buo ibu."], ["Epoch", "otu ngagharị zuru ezu na data ọzụzụ."], ["Validation set", "data a debere n'akụkụ n'oge ọzụzụ iji lelee overfitting."]],
          slides: [
            { title: "Chee, tụọ, dozie", bullets: ["Weight random na mbido", "Loss na-atụ otú o si mehie", "Dozie weight iji belata loss"] },
            { title: "Obere nzọụkwụ", bullets: ["Backpropagation na-achọta ụzọ", "Gradient descent na-aga nzọụkwụ ahụ", "Learning rate na-ekpebi ogo nzọụkwụ"] },
            { title: "Epoch na validation", bullets: ["Epoch: otu ngagharị na data", "Lee accuracy validation", "Ọzụzụ na-arịgo, validation na-agbada = overfitting"] }
          ],
          tryIt: "Gwuo egwuregwu \"chee ọnụọgụ\" gị na enyi gị ma ọ bụ naanị gị: họrọ ọnụọgụ zoro ezo site na 1 ruo 100, chee, nweta \"ọ karịrị\" ma ọ bụ \"o rughị\", ma gbanwee ihe i chere site n'obere nzọụkwụ kwa oge. Dee akụkụ egwuregwu ahụ yiri loss, nke yiri learning rate, na ole agba (epoch) o were.",
          youCanNow: "ịkọwa loss, backpropagation, gradient descent, learning rate, epoch na overfitting n'okwu dị mfe.",
          quickCheck: [
            { objective: "O3", q: "Gịnị bụ learning rate?", options: ["Ole foto dị na dataset", "Ogo nzọụkwụ ọ bụla weight na-aga", "Ọnụọgụ layer", "Accuracy ikpeazụ"], answer: 1, why: "Nzọụkwụ buru oke ibu na-agafe; nzọụkwụ dị oke nta na-adị nwayọọ nke ukwuu." },
            { objective: "O3", q: "Mgbe epoch 4 gachara, accuracy validation malitere ịgbada ebe accuracy ọzụzụ na-arịgo. Gịnị ka ị ga-eme?", options: ["Zụọ ya epoch 50 ọzọ", "Hichapụ validation set", "Kwụsị ọzụzụ; model ahụ amalitela overfitting", "Bulie learning rate nke ukwuu"], answer: 2, why: "Accuracy validation na-agbada ebe accuracy ọzụzụ na-arịgo bụ ihe na-egosi overfitting." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Otú neural network si arụ ọrụ",
        questions: [
          { objective: "O1", q: "Gịnị ka \"deep\" pụtara na deep learning?", options: ["Ọ na-eji ọtụtụ ọkụ eletrik", "Ọ na-arụ naanị n'okpuru mmiri", "Network ahụ nwere ọtụtụ layer", "Ọ siri ike ịkọwa"], answer: 2, why: "Deep pụtara ọtụtụ layer neuron." },
          { objective: "O2", q: "Nchikota neuron bụ -2. Na ReLU, gịnị ka ọ na-enye?", options: ["-2", "0", "1", "2"], answer: 1, why: "ReLU na-eme nchikota ọ bụla na-erughị efu ka ọ bụrụ 0." },
          { objective: "O2", q: "Input 1 na 2, weight 3 na 1, bias 0, ReLU. Gịnị ka ọ na-enye?", options: ["0", "3", "5", "6"], answer: 2, why: "1 x 3 + 2 x 1 + 0 = 5, 5 erughịkwa efu." },
          { objective: "O3", q: "Gịnị ka loss function na-atụ?", options: ["Ole layer dị", "Otú ihe network chere si mehie", "Otú kọmputa si dị ngwa", "Ole data i nwere"], answer: 1, why: "Loss bụ ogo mperi ahụ." },
          { objective: "O3", q: "Accuracy ọzụzụ na-arịgo mana accuracy validation na-agbada. Gịnị na-eme?", options: ["Network ahụ zuru oke", "Overfitting", "Learning rate bụ efu", "Data ahụ efuola"], answer: 1, why: "Ime nke ọma na data ọzụzụ mana ime njọ na data a debere n'akụkụ bụ overfitting." }
        ]
      }
    },
    {
      name: "Isi 2: Iwu neural network na Colab",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ibubata na ịkwadebe data foto",
          minutes: 5,
          goal: "Bubata ọnụọgụ MNIST na Colab, hazie ha, ma lee otu foto.",
          text: [
            "MNIST bụ dataset omume a ma ama: 70,000 obere foto nke ọnụọgụ 0 ruo 9 e ji aka dee, nke ọ bụla 28 na 28 pixel, ọnụọgụ ziri ezi bụkwa label ya. Keras, ọba akwụkwọ deep learning n'efu na-arụ ọrụ na Google Colab, nwere ike ibubata ya n'otu ahịrị, nke e kewaworị ka ọ bụrụ 60,000 foto ọzụzụ na 10,000 foto nnwale.",
            "Pixel ọ bụla bụ ọnụọgụ site na 0 (oji) ruo 255 (ọcha). Network na-amụta nke ọma karịa site n'obere ọnụọgụ, ya mere ị na-ahazi ha ka ha dị n'etiti 0 na 1 site n'ike ha na 255. A na-akpọ nke a normalizing.",
            "Lee data gị tupu ọzụzụ. matplotlib, ọba akwụkwọ maka ise eserese, nwere ike ise otu foto ka ị hụ ma label ahụ dabara foto ahụ."
          ],
          steps: ["Na notebook Colab ọhụrụ, gbaa: import keras", "Bubata: (x_train, y_train), (x_test, y_test) = keras.datasets.mnist.load_data()", "Hazie: x_train = x_train / 255.0 na x_test = x_test / 255.0", "Lelee ogo: print(x_train.shape, x_test.shape)", "See otu: import matplotlib.pyplot as plt; plt.imshow(x_train[0], cmap=\"gray\"); plt.show(); print(y_train[0])"],
          words: [["MNIST", "dataset omume nwere 70,000 foto ọnụọgụ e ji aka dee."], ["Keras", "ọba akwụkwọ Python n'efu, dị mfe maka ndị mbido, e ji ewu neural network."], ["Pixel", "otu ntụpọ nke foto, e debere dị ka ọnụọgụ."], ["Normalizing", "ịhazi ọnụọgụ ka ha dị n'obere oke dị ka 0 ruo 1 ka ọzụzụ rụọ ọrụ nke ọma."], ["matplotlib", "ọba akwụkwọ Python maka ise chaatị na foto."]],
          slides: [
            { title: "Ọnụọgụ MNIST", bullets: ["70,000 ọnụọgụ e ji aka dee, 0 ruo 9", "Nke ọ bụla 28 x 28 pixel", "60,000 maka ọzụzụ, 10,000 maka nnwale"] },
            { title: "Hazie pixel", bullets: ["Pixel na-esi na 0 ruo 255", "Kee ha na 255.0 ka ha bụrụ 0 ruo 1", "Obere ọnụọgụ na-azụ nke ọma"] },
            { title: "Lee tupu ị zụọ", bullets: ["plt.imshow(x_train[0], cmap=\"gray\")", "Bipụta label ka ị hụ ma ọ dabara"] }
          ],
          sources: [KERAS_MNIST, COLAB],
          tryIt: "Bubata ma hazie MNIST na Colab. Bipụta ogo (shape) nke set ọzụzụ na set nnwale. See foto ndị dị n'ọnọdụ 0, 1 na 2 ma bipụta label ha ka ị hụ ma ha dabara.",
          youCanNow: "ibubata dataset foto, ịnormalize ya na ilele ya n'anya.",
          quickCheck: [
            { objective: "O4", q: "Gịnị ka ịnormalize pixel MNIST pụtara ebe a?", options: ["Ịhazi ha ka ha dị n'etiti 0 na 1 site n'ike ha na 255", "Ịtụgharị foto ndị ahụ isi ala", "Ihichapụ pixel gbara ọchịchịrị", "Ime ka foto ọ bụla bụrụ ọnụọgụ 0"], answer: 0, why: "Ike ya na 255 na-eme ka 0 ruo 255 ghọọ 0 ruo 1, nke na-enyere mmụta aka." },
            { objective: "O4", q: "I bubatara MNIST ma chọọ ijide n'aka na label ndị ahụ ziri ezi. Gịnị ka ị ga-eme?", options: ["Zụọ mbụ, lelee mgbe e mesịrị", "Kee label ndị ahụ na 255", "Hichapụ set nnwale", "See otu foto site na matplotlib ma lelee na ọ dabara label ya"], answer: 3, why: "Lee data gị tupu ọzụzụ ka ị hụ na label ahụ dabara foto ahụ." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Iwu na ịzụ network ahụ",
          minutes: 6,
          goal: "Wuo network Keras, compile ya ma zụọ ya ruo epoch ole na ole.",
          text: [
            "Sequential model bụ layer ndị a tụkọbara n'elu ibe ha. Nke anyị: keras.Input(shape=(28, 28)) na-ekwu ihe na-abanye. layers.Flatten() na-eme ka foto 28 x 28 ọ bụla ghọọ otu ahịrị nke ọnụọgụ 784. layers.Dense(128, activation=\"relu\") bụ layer nwere neuron 128. layers.Dense(10, activation=\"softmax\") bụ ihe na-apụta: otu ohere maka ọnụọgụ ọ bụla site na 0 ruo 9.",
            "compile na-ekpebi otú ọ ga-esi mụta: optimizer=\"adam\" (ụdị gradient descent a ma ama), loss=\"sparse_categorical_crossentropy\" (loss ziri ezi mgbe label bụ ọnụọgụ nkịtị dị ka 7), na metrics=[\"accuracy\"] ka ị hụ ugboro ole o ziri ezi.",
            "fit na-azụ ya: model.fit(x_train, y_train, epochs=5, validation_split=0.1). validation_split=0.1 na-edebe pasent 10 nke data ọzụzụ n'akụkụ iji lelee overfitting. Epoch ọ bụla na-ebipụta loss, accuracy, val_loss na val_accuracy. Lee ka loss na-agbada."
          ],
          steps: ["from keras import layers", "model = keras.Sequential([keras.Input(shape=(28, 28)), layers.Flatten(), layers.Dense(128, activation=\"relu\"), layers.Dense(10, activation=\"softmax\")])", "model.compile(optimizer=\"adam\", loss=\"sparse_categorical_crossentropy\", metrics=[\"accuracy\"])", "model.summary() ka ị hụ layer ndị ahụ.", "model.fit(x_train, y_train, epochs=5, validation_split=0.1)"],
          words: [["Sequential model", "network e ji layer a tụkọbara n'usoro, otu n'azụ ibe ya, mee."], ["Flatten", "layer na-eme ka grid pixel ghọọ otu ahịrị ogologo."], ["Dense layer", "layer ebe neuron ọ bụla jikọrọ na input ọ bụla."], ["Optimizer", "ụzọ e ji emeghari weight; adam bụ nke a na-ejikarị."], ["compile", "na-ekpebi optimizer, loss na metrics tupu ọzụzụ."], ["validation_split", "òkè data ọzụzụ a debere n'akụkụ iji lelee overfitting."]],
          slides: [
            { title: "Layer ndị ahụ", bullets: ["Input: foto 28 x 28", "Flatten: otu ahịrị nke ọnụọgụ 784", "Dense 128, relu: layer zoro ezo", "Dense 10, softmax: otu ohere kwa ọnụọgụ"] },
            { title: "compile", bullets: ["optimizer=\"adam\"", "loss=\"sparse_categorical_crossentropy\"", "metrics=[\"accuracy\"]"] },
            { title: "fit", bullets: ["epochs=5: ngagharị ise na data", "validation_split=0.1 na-elele overfitting", "Lee ka loss na-agbada, accuracy na-arịgo"] }
          ],
          sources: [KERAS_MNIST],
          tryIt: "Wuo, compile ma zụọ network ahụ ruo epoch 5. Dee accuracy na val_accuracy mgbe epoch 1 gachara na mgbe epoch 5 gachara. Ha abụọ ọ rịgoro?",
          youCanNow: "iwu neural network na Keras, ịcompile ya na ịzụ ya ka ị na-ele maka overfitting.",
          quickCheck: [
            { objective: "O5", q: "Gịnị bụ Sequential model na Keras?", options: ["Ndepụta foto", "Ndekọ ọzụzụ", "Layer a tụkọbara, otu n'azụ ibe ya", "Ụdị loss function"], answer: 2, why: "Sequential na-atụkọba layer n'usoro site na input ruo output." },
            { objective: "O5", q: "Ị chọrọ ịhụ n'oge ọzụzụ ma model ahụ amalitela overfitting. Gịnị ka ị ga-agbakwunye na fit?", options: ["validation_split=0.1", "epochs=0", "activation=\"softmax\"", "Flatten()"], answer: 0, why: "validation_split na-edebe ụfọdụ data ọzụzụ n'akụkụ iji lelee model ahụ kwa epoch." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ịnwale, ibu amụma na ime ka ọ ka mma",
          minutes: 6,
          goal: "Tụọ accuracy nnwale, buo amụma ezi foto, nwaa otu mgbanwe ma kpọọ aha oke model ahụ.",
          text: [
            "Ezi nnwale bụ data network ahụ na-ahụbeghị: model.evaluate(x_test, y_test) na-ebipụta loss na accuracy nnwale. Obere network dị ka nke anyị na-enwetakarị ihe karịrị pasent 90 nke ọma na MNIST.",
            "Iji buo amụma, nye ya foto: probs = model.predict(x_test[:5]) na-enye ohere 10 maka foto ọ bụla. probs.argmax(axis=1) na-ahọrọ ọnụọgụ nwere ohere kachasị elu. Tụnyere ndị ahụ na y_test[:5].",
            "Iji mee ka ọ ka mma, gbanwee otu ihe n'otu oge ma nwalee ọzọ: neuron ndị ọzọ (Dense(256)), epoch ndị ọzọ, ma ọ bụ convolutional network (layer na-enyocha obere akụkụ nke foto), nke na-eru ihe dị ka pasent 99 n'ọmụmaatụ Keras gọọmentị.",
            "Mara oke ya: ọ maara naanị otu ọnụọgụ dị n'etiti dị ka MNIST. Foto akara okporo ụzọ ma ọ bụ mkpụrụ akwụkwọ ga-enwetakwa ọnụọgụ. N'ezi ọrụ, dị ka ịgụ fọm ma ọ bụ inyocha akụkụ ngwaahịa, mmadụ na-elele nsonaazụ ndị model ahụ na-ejighị n'aka, a na-anwalekwa model ahụ na data sitere n'ezi ebe a ga-eji ya."
          ],
          steps: ["Gbaa model.evaluate(x_test, y_test) ma dee accuracy nnwale.", "probs = model.predict(x_test[:5])", "print(probs.argmax(axis=1), y_test[:5]) iji tụnyere ihe o chere na eziokwu.", "Gbanwee otu ihe (neuron ma ọ bụ epoch), wughachi, zụghachi ma nwalee ọzọ.", "Dee ma ọ nyere aka na otu oke."],
          words: [["evaluate", "na-anwale model a zụrụ azụ na data ma na-ekwu loss na accuracy."], ["argmax", "na-ahọrọ ọnọdụ ọnụọgụ kachasị ukwuu: ebe a, ọnụọgụ kachasị nwee ike ịbụ."], ["Convolutional network (CNN)", "network nwere layer na-enyocha obere akụkụ nke foto; ọ maara foto nke ọma."], ["Hyperparameter", "ntọala ị na-ahọrọ, dị ka neuron ma ọ bụ epoch, ọ bụghị nke network na-amụta."]],
          slides: [
            { title: "Nwalee na data a na-ahụbeghị", bullets: ["model.evaluate(x_test, y_test)", "Na-ekwu loss na accuracy nnwale"] },
            { title: "Buo amụma", bullets: ["probs = model.predict(x_test[:5])", "probs.argmax(axis=1) = ọnụọgụ o chere", "Tụnyere ya na y_test[:5]"] },
            { title: "Mee ka otu ihe ka mma n'otu oge", bullets: ["Neuron ma ọ bụ epoch ndị ọzọ", "Ma ọ bụ convolutional network", "Nwalee ọzọ mgbe mgbanwe ọ bụla gachara"] },
            { title: "Mara oke ya", bullets: ["Ọ maara naanị otu ọnụọgụ dị ka MNIST", "Nwalee na ezi data sitere n'ebe a ga-eji ya", "Mmadụ na-elele nsonaazụ ọ na-ejighị n'aka"] }
          ],
          sources: [KERAS_MNIST],
          tryIt: "Ọrụ ikpeazụ: nwalee network gị na set nnwale, buo amụma foto nnwale ise mbụ ma tụnyere ha na ezi label ha, wee gbanwee Dense(128) ka ọ bụrụ Dense(256) ma ọ bụ epoch ka ọ bụrụ 10, zụghachi ma nwalee ọzọ. Dee ahịrịokwu abụọ: mgbanwe ahụ ọ nyere aka, gịnị bụkwa otu oke model a nwere?",
          youCanNow: "ịzụ, ịnwale, iji na ime ka neural network ka mma, na ịkọwa ebe a ga-atụkwasị ya obi na ebe a na-agaghị atụkwasị ya obi.",
          quickCheck: [
            { objective: "O6", q: "Gịnị ka model.predict(x_test[:5]) na-enye gị?", options: ["Accuracy nnwale", "Ohere 10 maka foto 5 ọ bụla", "Ezi label 5 ahụ", "Model ọhụrụ a zụrụ azụ"], answer: 1, why: "predict na-enye ohere maka ọnụọgụ ọ bụla maka foto ọ bụla; argmax na-ahọrọ nke kachasị nwee ike ịbụ." },
            { objective: "O6", q: "Ị chọrọ ịmata ma epoch ndị ọzọ na-enyere aka. Gịnị ka ị ga-eme?", options: ["Gbanwee epoch, neuron na layer n'otu oge", "Kpee ikpe site naanị n'accuracy ọzụzụ", "Hapụ set nnwale n'oge a", "Gbanwee naanị ọnụọgụ epoch, zụghachi ma tụnyere accuracy nnwale"], answer: 3, why: "Gbanwee otu ihe n'otu oge ka ị mara ihe kpatara ọdịiche ahụ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Iwu neural network na Colab",
        questions: [
          { objective: "O4", q: "Gịnị mere a ga-eji kee pixel MNIST na 255.0?", options: ["Iji mee ka foto ndị ahụ buo ibu", "Iji hichapụ pixel gbara ọchịchịrị", "Iji gbanwee label ndị ahụ", "Iji hazie ha ka ha dị n'etiti 0 na 1 ka ọzụzụ rụọ ọrụ nke ọma"], answer: 3, why: "Ịnormalize ruo 0-1 na-enyere network aka ịmụta." },
          { objective: "O5", q: "Gịnị ka layers.Flatten() na-eme?", options: ["Na-eme ka grid 28 x 28 ghọọ otu ahịrị nke ọnụọgụ 784", "Na-eme ka foto ahụ na-enwu karịa", "Na-agbakwunye neuron 10", "Na-ekewa data ahụ"], answer: 0, why: "Flatten na-eme ka grid ahụ ghọọ ahịrị maka Dense layer." },
          { objective: "O5", q: "Gịnị mere layer ikpeazụ ji nwee neuron 10 na softmax?", options: ["E nwere epoch 10", "Ọ na-abụ 10 mgbe niile", "E nwere ọnụọgụ 10 nwere ike ịbụ, softmax na-enyekwa ohere maka nke ọ bụla", "Iji chekwaa ebe nchekwa"], answer: 2, why: "Otu output kwa ọnụọgụ, dị ka ohere gbakọtara ruo 1." },
          { objective: "O6", q: "Kedu ahịrị na-enye ọnụọgụ kachasị nwee ike ịbụ maka foto ọ bụla?", options: ["probs.sum()", "model.fit(probs)", "y_test.argmax()", "probs.argmax(axis=1)"], answer: 3, why: "argmax na-ahọrọ ohere kachasị elu." },
          { objective: "O6", q: "Ị chọrọ ịmata ma Dense(256) ka Dense(128) mma. Gịnị ka ị na-eme?", options: ["Gbanwee ihe ise n'otu oge", "Lee naanị loss ọzụzụ", "Gbanwee ya, zụghachi, ma tụnyere accuracy nnwale", "Chee echiche"], answer: 2, why: "Gbanwee otu ihe ma nwalee ọzọ na otu set nnwale ahụ." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Mmalite Deep Learning na Neural Network",
    questions: [
      { objective: "O1", q: "Deep learning bụ:", options: ["Ụzọ e ji edebe faịlụ", "Machine learning na-eji neural network nwere ọtụtụ layer", "Ụdị spreadsheet", "Ịmụ ihe mgbe ị na-ehi ụra"], answer: 1, why: "Ọ na-eji network miri emi (ọtụtụ layer)." },
      { objective: "O1", q: "Kedu ọrụ deep learning kachasị mara nke ọma?", options: ["Ịmata ihu mmadụ na foto", "Ịgbakọ ọnụọgụ abụọ", "Ịhazi obere ndepụta", "Ibipụta otu peeji"], answer: 0, why: "Foto, ụda na ederede bụ ike ya." },
      { objective: "O1", q: "Na network foto, layer mbụ na-ahụkarị:", options: ["Ihu mmadụ zuru ezu", "Aha faịlụ", "Nsọtụ dị mfe", "Label"], answer: 2, why: "Layer na-ewulite site na nsọtụ ruo ọdịdị ruo ihe zuru ezu." },
      { objective: "O1", q: "Gịnị mere deep learning ji bilie n'afọ ndị na-adịbeghị anya?", options: ["Nnukwu dataset na GPU ngwa ngwa", "Ihuenyo dị nta", "Kọmputa dị ole na ole", "Keyboard ọhụrụ"], answer: 0, why: "Ọ chọrọ ọtụtụ data na ike kọmputa." },
      { objective: "O2", q: "Gịnị ka weight na-eme na neuron?", options: ["Na-agụ epoch", "Na-edebe label", "Na-ese foto", "Na-ekpebi otú input si dị mkpa"], answer: 3, why: "Weight na-amụba input ọ bụla." },
      { objective: "O2", q: "Input 2 na 2, weight 1 na -2, bias 1, ReLU. Gịnị ka ọ na-enye?", options: ["-1", "0", "1", "3"], answer: 1, why: "2 - 4 + 1 = -1, ReLU na-emekwa -1 ka ọ bụrụ 0." },
      { objective: "O2", q: "Softmax na layer ikpeazụ na-enye:", options: ["Ọnụọgụ layer", "Ohere maka azịza ọ bụla gbakọtara ruo 100%", "Loss", "Ọnụọgụ random"], answer: 1, why: "Softmax na-eme ka output ghọọ ohere (probabilities)." },
      { objective: "O3", q: "Loss na-agbada n'oge ọzụzụ pụtara:", options: ["Data ahụ na-ebelata", "Kọmputa na-adị nwayọọ", "Overfitting n'ezie", "Ihe network na-eche na-ebelata mperi"], answer: 3, why: "Obere loss pụtara obere mperi." },
      { objective: "O3", q: "Learning rate na-achịkwa:", options: ["Otú nzọụkwụ mmegharị weight ọ bụla si buo ibu", "Ole foto dị", "Ogo ihuenyo", "Ọnụọgụ label"], answer: 0, why: "Ọ na-ekpebi ogo nzọụkwụ ọ bụla." },
      { objective: "O3", q: "Otu epoch bụ:", options: ["Otu neuron", "Otu foto nnwale", "Otu ngagharị na data ọzụzụ niile", "Otu nkeji ọzụzụ"], answer: 2, why: "Epoch na-agafe set ọzụzụ niile otu ugboro." },
      { objective: "O3", q: "A na-eji validation set:", options: ["Zụọ ngwa ngwa", "Debe model ahụ", "Tinye label na foto", "Jide overfitting n'oge ọzụzụ"], answer: 3, why: "A na-edebe ya n'akụkụ iji lelee model ahụ ka ọ na-azụ." },
      { objective: "O4", q: "Foto ole ka MNIST tinyere na set nnwale ya?", options: ["28", "784", "10,000", "60,000"], answer: 2, why: "MNIST nwere 60,000 foto ọzụzụ na 10,000 foto nnwale." },
      { objective: "O4", q: "Foto MNIST ọ bụla bụ:", options: ["Foto agba nke okporo ụzọ", "28 x 28 pixel nke ọnụọgụ e ji aka dee", "Ụda e dekọrọ", "Ahịrịokwu"], answer: 1, why: "Obere foto ọnụọgụ na-acha ntụ ntụ." },
      { objective: "O5", q: "Kedu layer Keras nwere neuron ọ bụla jikọrọ na input ọ bụla?", options: ["Dense", "Flatten", "Input", "Softmax"], answer: 0, why: "Dense pụtara na ihe niile jikọrọ ọnụ (fully connected)." },
      { objective: "O5", q: "Gịnị ka model.compile na-ekpebi?", options: ["Dataset", "Ogo foto", "Optimizer, loss na metrics", "Accuracy nnwale"], answer: 2, why: "compile na-ekpebi otú model ahụ si amụta na ihe ọ na-akọ." },
      { objective: "O5", q: "Label bụ ọnụọgụ nkịtị dị ka 7. Kedu loss dabara?", options: ["sparse_categorical_crossentropy", "accuracy", "relu", "adam"], answer: 0, why: "Loss ahụ na-atụ anya label bụ ọnụọgụ zuru ezu (integer)." },
      { objective: "O5", q: "Gịnị ka validation_split=0.1 na fit na-eme?", options: ["Na-azụ ruo epoch 0.1", "Na-ehichapụ 10% nke data", "Na-ekpebi learning rate", "Na-edebe 10% nke data ọzụzụ n'akụkụ iji lelee model ahụ"], answer: 3, why: "Ọ na-edebe òkè validation." },
      { objective: "O6", q: "Kedu ahịrị na-atụ accuracy na foto a na-ahụbeghị?", options: ["model.fit(x_test, y_test)", "model.evaluate(x_test, y_test)", "model.summary()", "plt.imshow(x_test[0])"], answer: 1, why: "evaluate na-anwale na data ị nyere ya." },
      { objective: "O6", q: "Kedu ụdị network na-enyocha obere akụkụ nke foto ma na-eme nke ọma na foto?", options: ["Spreadsheet", "Convolutional network (CNN)", "Chatbot na-eso iwu", "Otu neuron"], answer: 1, why: "E mere CNN maka foto." },
      { objective: "O6", q: "A na-eji model ọnụọgụ gị agụ fọm e ji aka dee n'ọrụ. Kedu nzọụkwụ nwere ọrụ?", options: ["Tụkwasị azịza ọ bụla obi", "Anwalela ya mgbe ọ bụla", "Zoo na a na-eji model", "Mee ka mmadụ lelee nsonaazụ ọ na-ejighị n'aka ma nwalee ya na ezi fọm tupu"], answer: 3, why: "Nnwale n'ezi ndụ na nlele mmadụ na-ejide mperi model ahụ." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [
      0,
      1,
      5,
      7,
      9,
      11,
      12,
      14,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      {
        name: "Data a kwadebere",
        objective: "O4",
        notYet: "E bubataghị MNIST ma ọ bụ a hazighị pixel ndị ahụ.",
        meets: "E bubatara MNIST, a hazikwara pixel ka ha dị n'etiti 0 na 1.",
        exceeds: "E sere otu foto ma lelee ya na label ya."
      },
      {
        name: "E wuru ma zụọ network",
        objective: "O5",
        notYet: "Model ahụ anaghị compile ma ọ bụ azụ.",
        meets: "Network Keras nwere Flatten, Dense layer zoro ezo na output softmax nwere neuron 10 na-azụ site na validation split.",
        exceeds: "Na-edekọ otú loss na accuracy validation si gbanwee n'epoch niile."
      },
      {
        name: "Accuracy nnwale na amụma",
        objective: "O6",
        notYet: "Enweghị accuracy nnwale, ma ọ bụ a tụnyereghị amụma na ezi label.",
        meets: "Na-ekwu accuracy nnwale ma tụnyere amụma ise na ezi label ha.",
        exceeds: "Na-elekwa otu amụma ezighi ezi ma kwuo ihe nwere ike ịkpata ya."
      },
      {
        name: "E nwalere otu mgbanwe",
        objective: "O6",
        notYet: "E meghị mgbanwe ọ bụla, ma ọ bụ a gbanwere ọtụtụ ihe n'otu oge.",
        meets: "Otu mgbanwe (neuron ndị ọzọ ma ọ bụ epoch ndị ọzọ), a zụghachiri ya, ya na ahịrịokwu maka ma ọ nyere aka.",
        exceeds: "Na-elelekwa mgbanwe ahụ maka ihe na-egosi overfitting."
      },
      {
        name: "Oke",
        objective: "O6",
        notYet: "A kpọghị aha oke ọ bụla, ma ọ bụ oke ahụ ezighi ezi.",
        meets: "Otu ezi oke, dị ka ịmara naanị otu ọnụọgụ dị n'etiti.",
        exceeds: "Na-ekwukwa otú mmadụ ga-esi lelee nsonaazụ ọ na-ejighị n'aka n'ezi ọrụ."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma nweta Ruru eru ma ọ bụ Karịrị n'ahịrị rubric ọ bụla nke ọrụ ikpeazụ",
      "Ndị na-amụ ihe kwuru na ha zụrụ neural network ọzọ ma ọ bụ ọmụmaatụ Keras n'ime ụbọchị 30 mgbe ihe ọmụmụ ahụ gachara (nnyocha nsochi)",
      "Ndị na-amụ ihe tinyere notebook ahụ na portfolio ma ọ bụ jiri ya kwuo maka AI n'ajụjụ ọnụ ọrụ",
      "Ndị na-amụ ihe banyere mmemme ọzụzụ teknụzụ, data ma ọ bụ AI, asambodo ma ọ bụ ọrụ mgbe ihe ọmụmụ ahụ gachara"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Kọmputa ma ọ bụ laptop nwere web browser",
      "Akaụntụ Google n'efu iji Google Colab",
      "Akwụkwọ na mkpịsị ode maka mgbakọ neuron n'aka",
      "Ihe dị ka nkeji 60 ruo 75 n'ozuzu, gbakwunyere oge ọzụzụ ga-agba"
    ],
    facilitatorNotes: [
      "Mee mgbakọ neuron na bọọdụ ọcha dị ka otu ìgwè tupu koodu ọ bụla; ọ na-eme ka layer ndị ga-esochi dị mfe ịghọta.",
      "Budata MNIST otu ugboro tupu klas iji lelee na netwọk ahụ na-ekwe ya.",
      "Ọzụzụ na-ewe nkeji ole na ole; jiri oge nchere ahụ kparịta ọnụọgụ loss na accuracy ka ha na-apụta.",
      "Jikọọ ọmụmaatụ na ọrụ ndị na-amụ ihe maara, dị ka ịgụ fọm ma ọ bụ inyocha akụkụ ngwaahịa, ma kwusie ike na mmadụ na-elele nsonaazụ ọ na-ejighị n'aka.",
      "Gbaa ndị na-amụ ihe ume ka ha chekwaa notebook ha maka portfolio ma mụọ ịkọwa ya n'otu nkeji, dị ka ha ga-eme n'ajụjụ ọnụ ọrụ."
    ]
  }
};
