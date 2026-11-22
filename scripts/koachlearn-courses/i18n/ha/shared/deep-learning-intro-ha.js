"use strict";

// Koach Learn course, Hausa (ha) translation of shared/deep-learning-intro.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.
// Python code, Keras names and settings stay exactly as in the English.

const COLAB = { name: "Google Colab: Frequently Asked Questions", url: "https://research.google.com/colaboratory/faq.html" };
const KERAS_MNIST = { name: "Keras code example: Simple MNIST convnet", url: "https://keras.io/examples/vision/mnist_convnet/" };

module.exports = {
  id: "deep-learning-intro-ha",
  lang: "ha",
  translationOf: "deep-learning-intro",
  category: "Veterans (military)",
  name: "Gabatarwa ga Deep Learning da Neural Networks",
  skills: "Bayanin yadda neural network ke aiki, Lissafin abin da neuron ke fitarwa, Lodawa da daidaita bayanan hotuna, Ginawa da horar da network a Keras, Auna da inganta model",
  outcome: "gina, horarwa da gwada ƙaramin neural network a Google Colab da Keras wanda ke karanta lambobin da aka rubuta da hannu, faɗin daidaitonsa (accuracy) a kan sababbin hotuna, gwada canji ɗaya don inganta shi, da bayanin abin da model ɗin zai iya yi da wanda ba zai iya yi ba.",
  about: [
    "Deep learning ne ke sa waya ta buɗe da fuskarku, yake taimaka wa mataimakan murya, manhajojin fassara, kayan duba hotunan asibiti da kyamarorin da ke duba kayayyaki a masana'anta. Wannan kwas yana bayanin yadda yake aiki da kalmomi masu sauƙi, sannan ku gina neural network mai aiki da kanku.",
    "Ya dace da tsoffin sojoji da ke shiga aikin fasaha, mutanen da suka san ɗan Python, da duk wanda ya gama kwas ɗin \"Gabatarwa ga Machine Learning (Koyon Na'ura)\". Babi na 1 yana gina tunanin da atisaye a takarda da alƙalami. Babi na 2 yana komawa Google Colab, shafin intanet kyauta da ke gudanar da Python, inda za ku horar da network da Keras, ɗakin lambobi (library) na deep learning kyauta. An ba da kowane layin code kuma an yi bayaninsa.",
    "Kowane darasi yana ɗaukar kusan minti biyar, kuma yana ƙarewa da aikin \"Gwada yanzu\". Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "A Google Colab, ku loda lambobin MNIST da aka rubuta da hannu, ku daidaita su, ku gina ku horar da neural network na Keras, ku faɗi daidaitonsa a kan hotunan gwaji, ku sa shi ya hasashen hotunan gwaji biyar ku kwatanta da ainihin lakabinsu (labels), sannan ku yi canji ɗaya (ƙarin neurons ko ƙarin epochs), ku sake horarwa, ku rubuta jimloli biyu kan ko ya taimaka da kuma iyaka ɗaya ta model ɗin.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Tsoffin sojoji da sojojin da ke barin aiki suna shiga aikin fasaha, bayanai (data) ko AI, tare da matan ko mazan sojoji da sauran manya masu koyo a shirye-shiryen aikin tsoffin sojoji, waɗanda suka san ɗan Python.",
    startingPoint: "Suna iya rubutawa da gudanar da gajerun shirye-shiryen Python a Google Colab, kuma sun san asalin tunanin horarwa da gwajin model. Yawancinsu ba su taɓa ganin cikin neural network ba, ko lissafa abin da neuron ke fitarwa, ko gina da horar da ɗaya da Keras ba.",
    gap: "Deep learning ne ke tafiyar da kayan aikin hotuna, magana da rubutu a tsaro, sufuri da jigilar kaya, lafiya da masana'antu, kuma ayyukan fasaha da yawa suna sa ran mutane su san yadda neural networks ke koyo da yadda suke kasawa. Atisaye da hannu yana sa masu koyo su yi magana a kai da ƙarfin gwiwa a hirar neman aiki, su auna sakamakon model, kuma su gane inda dole mutum ya ci gaba da sa ido.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; ana bayanin kalmomi kamar weight, bias, loss da epoch da ƙananan misalan lissafi",
      "Na'urori: kwamfuta ko laptop mai burauzar intanet",
      "Asusu da kuɗi: asusun Google kyauta don Google Colab; Keras da bayanan MNIST kyauta ne; albarkatun Colab na kyauta suna da iyaka kuma suna iya canjawa",
      "Lokaci: kusan minti 5 zuwa 6 a kowane darasi tare da lokacin atisaye da horarwa, kusan minti 60 zuwa 75 gaba ɗaya",
      "Lissafi: ninkawa da haɗa ƙananan lambobi da hannu; ba a buƙatar calculus"
    ],
    prerequisites: "\"Gabatarwa ga Shirye-shiryen Kwamfuta da Python\"; \"Gabatarwa ga Machine Learning (Koyon Na'ura)\" zai taimaka."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Ba tare da rubutattun bayanai ba", action: "bayanin mene ne deep learning da ambaton irin bayanan da ya fi aiki da su", standard: "kuna ambaton layers da ke koyon tsari daga misalai, da aƙalla irin bayanai biyu da suka dace" },
    { id: "O2", condition: "Idan aka ba ku inputs, weights, bias da ReLU na neuron", action: "lissafa abin da neuron ɗin zai fitar da hannu", standard: "kuna samun amsa daidai kowane lokaci, har da lokacin da ReLU ya ba da 0" },
    { id: "O3", condition: "Idan aka ba ku rahoton horarwa mai loss da accuracy", action: "bayanin yadda horarwa ke canja weights da gane alamun overfitting", standard: "kuna amfani da kalmomin loss, learning rate, epoch da validation daidai" },
    { id: "O4", condition: "A Google Colab da Keras", action: "loda lambobin MNIST, daidaita pixels da nuna hoto ɗaya tare da lakabinsa", standard: "pixels suna tsakanin 0 da 1, kuma lakabin ya yi daidai da hoton" },
    { id: "O5", condition: "Idan aka ba ku bayanan MNIST da aka shirya", action: "gina, compile da horar da neural network na Keras", standard: "code ɗin yana aiki, an yi amfani da validation split, kuma loss yana raguwa a kowane epoch" },
    { id: "O6", condition: "Idan aka ba ku network da aka horar", action: "auna daidaitonsa a gwaji, hasashen sababbin hotuna, gwada canji ɗaya da bayanin iyakokinsa", standard: "kuna canja abu ɗaya a lokaci ɗaya, kuma kuna ambaton aƙalla iyaka ɗaya ta gaske" }
  ],
  chapters: [
    {
      name: "Babi na 1: Yadda neural networks ke aiki",
      lessons: [
        {
          objectives: ["O1"],
          title: "Mene ne deep learning",
          minutes: 4,
          goal: "Bayyana deep learning da kalmominku, ku kuma faɗi inda ake amfani da shi.",
          text: [
            "Deep learning wani nau'in machine learning ne da ke amfani da neural networks: ƙananan sassan lissafi masu yawa, da ake kira neurons, da aka haɗa su a layuka (layers). \"Deep\" (zurfi) yana nufin akwai layers masu yawa. Kowane layer yana neman tsari a cikin abin da layer na gabansa ya fitar.",
            "A hoto, layers na farko suna lura da abubuwa masu sauƙi kamar gefuna (edges), na tsakiya suna lura da siffofi, na ƙarshe kuma suna lura da abu gaba ɗaya kamar fuska ko lamba. Ba wanda ya rubuta waɗannan dokoki: network ɗin yana koyon su daga misalai masu yawa da aka sa wa lakabi.",
            "Ya fi aiki idan akwai bayanai masu yawa, kuma bayanan suna da yawa da rikitarwa: hotuna, sauti, magana da dogon rubutu. Yana buƙatar bayanai da ƙarfin kwamfuta fiye da models masu sauƙi, shi ya sa ya yi tashe bayan manyan tarin bayanai da ƙwayoyin zane masu sauri (GPUs) suka zama ruwan dare."
          ],
          words: [["Deep learning", "machine learning da ke amfani da neural networks masu layers da yawa."], ["Neural network", "model da aka yi da ƙananan sassa masu yawa (neurons) da aka haɗa a layers."], ["Layer", "rukunin neurons da dukansu ke karɓar bayani daga layer na gabansu."], ["GPU", "ƙwayar zane (graphics chip) da ke yin lissafi da yawa a lokaci ɗaya, ana amfani da ita don horar da networks da sauri."]],
          slides: [
            { title: "Deep learning shi ne", bullets: ["Machine learning da neural networks", "Layers masu yawa na ƙananan sassan lissafi", "\"Deep\" = layers masu yawa"] },
            { title: "Layers suna neman tsari", bullets: ["Layers na farko: gefuna", "Layers na tsakiya: siffofi", "Layers na ƙarshe: abu gaba ɗaya"] },
            { title: "Inda ya fi haskakawa", bullets: ["Hotuna, sauti, magana da rubutu", "Bayanai masu yawa", "Yana buƙatar ƙarin ƙarfin kwamfuta (GPUs)"] }
          ],
          tryIt: "Ku rubuta kayan aiki huɗu da kuka yi amfani da su da wataƙila suke amfani da deep learning (misali buɗe waya da fuska, rubutu da murya, neman hoto, fassara). Ga kowanne, ku rubuta irin bayanan da yake koya daga ciki: hotuna, sauti ko rubutu.",
          youCanNow: "bayanin mene ne deep learning, dalilin da yasa yake amfani da layers, da inda ake amfani da shi.",
          quickCheck: [
            { objective: "O1", q: "Mene ne neurons a cikin neural network?", options: ["Ƙwayoyin ƙwaƙwalwa da aka kwafa cikin kwamfuta", "Ƙwayoyin zane (graphics chips)", "Ƙananan sassan lissafi da aka haɗa a layers", "Hotunan da aka sa wa lakabi"], answer: 2, why: "Neural network an yi shi ne da ƙananan sassan lissafi masu yawa, da ake kira neurons, a layers." },
            { objective: "O1", q: "Rundunarku tana son ta rarraba dubban saƙonnin rediyo da aka naɗa bisa ga wanda ya yi magana. Za ku yi tunanin deep learning?", options: ["Eh; ya fi aiki da bayanai masu yawa da rikitarwa kamar sauti", "A'a; deep learning ba ya iya amfani da sauti", "A'a; yana aiki ne kawai da lambobi a tebur", "Sai dai idan naɗaɗɗun ba su kai goma ba"], answer: 0, why: "Deep learning ya fi aiki da bayanai masu yawa da rikitarwa kamar hotuna, sauti da rubutu." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Cikin neuron: weights, bias da activation",
          minutes: 6,
          goal: "Lissafa da hannu abin da neuron ɗaya ke fitarwa.",
          text: [
            "Neuron yana karɓar wasu lambobi, yana ninka kowanne da weight (nauyi), yana haɗa su, sannan ya ƙara wata lamba guda da ake kira bias. Weights suna faɗin muhimmancin kowane input; network ɗin ne ke koyon su.",
            "Sannan yana amfani da activation function, wanda ke yanke abin da zai wuce gaba. Wanda aka fi amfani da shi, ReLU, mai sauƙi ne: idan jimlar ta yi ƙasa da sifili, ya fitar da 0; in ba haka ba, ya fitar da jimlar.",
            "Misali: inputs 2 da 3, weights 0.5 da -1, bias 1. Jimla = 2 x 0.5 + 3 x (-1) + 1 = 1 - 3 + 1 = -1. ReLU yana mayar da -1 zuwa 0, don haka wannan neuron yana fitar da 0. Idan inputs 2 da 1 ne a maimakon haka: 1 - 1 + 1 = 1, don haka yana fitar da 1.",
            "Network yana da dubban irin waɗannan. Layer na ƙarshe sau da yawa yana amfani da softmax, wanda ke mayar da abin da ya fitar zuwa damarmaki (chances) da jimlarsu ta kai kashi 100, ɗaya ga kowace amsa mai yiwuwa."
          ],
          steps: ["Ku ninka kowane input da weight ɗinsa.", "Ku haɗa sakamakon gaba ɗaya.", "Ku ƙara bias.", "Ku yi amfani da activation: da ReLU, lambar ƙasa da sifili ta zama 0.", "Wannan lambar ita ce abin da neuron ke fitarwa."],
          words: [["Neuron", "ƙaramin sashe da ke ninka inputs da weights, ya ƙara bias, sannan ya yi amfani da activation."], ["Weight", "lambar da network ke koyo wadda ke faɗin muhimmancin input."], ["Bias", "ƙarin lamba da ake ƙarawa a jimla, ita ma ana koyon ta."], ["Activation function", "dokar da ke yanke abin da neuron zai wuce da shi gaba."], ["ReLU", "wani activation: jimlar da ke ƙasa da sifili ta zama 0, sauran kuma su zauna yadda suke."], ["Softmax", "yana mayar da abin da layer na ƙarshe ya fitar zuwa damarmaki da jimlarsu ta kai 1."]],
          slides: [
            { title: "Neuron ɗaya", bullets: ["Inputs x weights, a haɗa su", "Tare da bias", "Sannan activation function"] },
            { title: "ReLU", bullets: ["Ƙasa da sifili: ya fitar da 0", "Sifili ko sama: ya fitar da jimlar"] },
            { title: "Misalin lissafi", bullets: ["Inputs 2, 3; weights 0.5, -1; bias 1", "2 x 0.5 + 3 x (-1) + 1 = -1", "ReLU(-1) = 0"] },
            { title: "Layer na ƙarshe", bullets: ["Softmax yana ba da damar kowace amsa", "Jimlar damarmakin ta kai 100%"] }
          ],
          tryIt: "Ku lissafa abin da neuron zai fitar da hannu: inputs 4 da 1, weights 0.5 da 2, bias -3, activation ReLU. Sannan ku canja bias zuwa -6 ku sake lissafawa. (Amsoshi: 1, sannan 0.)",
          youCanNow: "lissafa abin da neuron ke fitarwa daga inputs, weights, bias da activation ɗinsa.",
          quickCheck: [
            { objective: "O2", q: "A cikin neuron, mene ne bias?", options: ["Input mafi girma", "Activation function", "Dokar da ke cewa model ɗin ba shi da adalci", "Ƙarin lamba ɗaya da ake ƙarawa bayan an haɗa inputs da aka ninka da weights"], answer: 3, why: "Neuron yana ƙara bias a jimlar inputs da weights kafin activation." },
            { objective: "O2", q: "Inputs 4 da 1, weights 0.5 da 2, bias -1, ReLU. Wace amsa za ku samu?", options: ["0", "3", "5", "-1"], answer: 1, why: "4 x 0.5 + 1 x 2 - 1 = 3, kuma ReLU yana barin jimlar da ta wuce sifili." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Yadda network ke koyo: loss, epochs da ƙananan matakai",
          minutes: 5,
          goal: "Bayyana yadda horarwa ke canja weights don rage kurakurai.",
          text: [
            "A farko, weights ba su da tsari (random), don haka hasashen network ɗin ba shi da kyau. Horarwa ce ke gyara hakan. Network yana yin hasashe, sannan loss function yana auna yawan kuskurensa: babban loss yana nufin kuskure mai yawa, ƙaramin loss yana nufin ya kusa.",
            "Sannan yana gano, ga kowane weight, wace hanya ce za ta rage loss (wannan mataki ana kiransa backpropagation), sannan ya matsar da kowane weight ɗan mataki ta wannan hanya (gradient descent). Girman matakin shi ne learning rate: idan ya yi girma sosai, yana wuce wurin; idan ya yi ƙanƙanta sosai, yana tafiya a hankali sosai.",
            "Zagaye ɗaya a cikin dukkan misalan horarwa shi ne epoch. Horarwa yawanci tana ɗaukar epochs da yawa. Kuna kallon loss yana raguwa, accuracy yana ƙaruwa, kuma kuna duba validation set (bayanan da aka ware daga horarwa) don kama overfitting: idan accuracy na horarwa yana ci gaba da hawa amma na validation yana sauka, ku tsaya."
          ],
          steps: ["Ku fara da weights marasa tsari (random).", "Ku yi hasashe a kan misalan horarwa.", "Ku auna kuskure da loss function.", "Ku matsar da kowane weight ɗan mataki don rage loss.", "Ku maimaita na epochs da yawa, kuna kallon accuracy na validation."],
          words: [["Loss", "lambar da ke auna yawan kuskuren hasashen network."], ["Backpropagation", "gano yadda kowane weight ya shafi loss."], ["Gradient descent", "matsar da weights a ƙananan matakai don rage loss."], ["Learning rate", "girman kowane mataki."], ["Epoch", "zagaye ɗaya cikakke a cikin bayanan horarwa."], ["Validation set", "bayanan da aka ware lokacin horarwa don duba overfitting."]],
          slides: [
            { title: "Hasashe, auna, gyara", bullets: ["Weights marasa tsari a farko", "Loss yana auna yawan kuskure", "Gyara weights don rage loss"] },
            { title: "Ƙananan matakai", bullets: ["Backpropagation yana gano hanya", "Gradient descent yana ɗaukar matakin", "Learning rate yana saita girman matakin"] },
            { title: "Epochs da validation", bullets: ["Epoch: zagaye ɗaya a cikin bayanan", "Ku kalli accuracy na validation", "Horarwa sama, validation ƙasa = overfitting"] }
          ],
          tryIt: "Ku yi wasan \"gane lambar\" da aboki ko ku kaɗai: ku zaɓi lambar ɓoye daga 1 zuwa 100, ku yi hasashe, ku sami amsar \"ta yi yawa\" ko \"ta yi kaɗan\", sannan ku canja hasashenku da ƙaramin mataki kowane lokaci. Ku rubuta wane sashe na wasan yake kama da loss, wanne yake kama da learning rate, da zagaye nawa (epochs) aka ɗauka.",
          youCanNow: "bayanin loss, backpropagation, gradient descent, learning rate, epochs da overfitting da kalmomi masu sauƙi.",
          quickCheck: [
            { objective: "O3", q: "Mene ne learning rate?", options: ["Yawan hotunan da ke cikin tarin bayanai", "Girman kowane mataki da weights ke matsawa", "Yawan layers", "Accuracy na ƙarshe"], answer: 1, why: "Mataki mai girma sosai yana wuce wurin; mataki ƙarami sosai yana tafiya a hankali sosai." },
            { objective: "O3", q: "Bayan epoch 4, accuracy na validation ya fara sauka yayin da accuracy na horarwa ke ci gaba da hawa. Me za ku yi?", options: ["Ku ƙara horarwa na epochs 50", "Ku goge validation set", "Ku tsayar da horarwa; model ɗin ya fara overfitting", "Ku ƙara learning rate sosai"], answer: 2, why: "Saukar accuracy na validation tare da hawan accuracy na horarwa alamar overfitting ce." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Yadda neural networks ke aiki",
        questions: [
          { objective: "O1", q: "Me \"deep\" ke nufi a deep learning?", options: ["Yana amfani da wutar lantarki mai yawa", "Yana aiki ne kawai a ƙarƙashin ruwa", "Network ɗin yana da layers masu yawa", "Yana da wuyar bayani"], answer: 2, why: "Deep yana nufin layers masu yawa na neurons." },
          { objective: "O2", q: "Jimlar neuron -2 ce. Da ReLU, me zai fitar?", options: ["-2", "0", "1", "2"], answer: 1, why: "ReLU yana mayar da duk jimlar da ke ƙasa da sifili zuwa 0." },
          { objective: "O2", q: "Inputs 1 da 2, weights 3 da 1, bias 0, ReLU. Me zai fitar?", options: ["0", "3", "5", "6"], answer: 2, why: "1 x 3 + 2 x 1 + 0 = 5, kuma 5 ba ta ƙasa da sifili." },
          { objective: "O3", q: "Me loss function ke auna?", options: ["Yawan layers", "Yawan kuskuren hasashen network", "Saurin kwamfuta", "Yawan bayanan da kuke da su"], answer: 1, why: "Loss shi ne girman kuskure." },
          { objective: "O3", q: "Accuracy na horarwa yana ci gaba da hawa amma na validation yana sauka. Me ke faruwa?", options: ["Network ɗin ya cika", "Overfitting", "Learning rate sifili ne", "Bayanan sun ɓace"], answer: 1, why: "Yin kyau a bayanan horarwa amma ƙasa a bayanan da aka ware shi ne overfitting." }
        ]
      }
    },
    {
      name: "Babi na 2: Gina neural network a Colab",
      lessons: [
        {
          objectives: ["O4"],
          title: "Lodawa da shirya bayanan hotuna",
          minutes: 5,
          goal: "Loda lambobin MNIST a Colab, ku daidaita su, ku kalli hoto ɗaya.",
          text: [
            "MNIST sanannen tarin bayanai ne na atisaye: ƙananan hotuna 70,000 na lambobi 0 zuwa 9 da aka rubuta da hannu, kowanne pixels 28 da 28, tare da ainihin lambar a matsayin lakabi. Keras, ɗakin lambobi (library) na deep learning kyauta da ke aiki a Google Colab, zai iya loda shi da layi ɗaya, an riga an raba shi zuwa hotunan horarwa 60,000 da na gwaji 10,000.",
            "Kowane pixel lamba ce daga 0 (baƙi) zuwa 255 (fari). Networks suna koyo da kyau da ƙananan lambobi, don haka kuna daidaita su zuwa tsakanin 0 da 1 ta raba su da 255. Ana kiran wannan normalizing.",
            "Ku kalli bayananku kafin horarwa. matplotlib, ɗakin lambobi na zane, zai iya zana hoto ɗaya don ku duba cewa lakabin ya yi daidai da hoton."
          ],
          steps: ["A sabon notebook na Colab ku gudanar da: import keras", "Loda: (x_train, y_train), (x_test, y_test) = keras.datasets.mnist.load_data()", "Daidaita: x_train = x_train / 255.0 da x_test = x_test / 255.0", "Duba girma: print(x_train.shape, x_test.shape)", "Zana ɗaya: import matplotlib.pyplot as plt; plt.imshow(x_train[0], cmap=\"gray\"); plt.show(); print(y_train[0])"],
          words: [["MNIST", "tarin bayanai na atisaye mai hotuna 70,000 na lambobin da aka rubuta da hannu."], ["Keras", "ɗakin lambobi (library) na Python kyauta, mai sauƙi ga masu farawa, don gina neural networks."], ["Pixel", "ɗigo ɗaya na hoto, da aka ajiye a matsayin lamba."], ["Normalizing", "daidaita lambobi zuwa ƙaramin zango kamar 0 zuwa 1 don horarwa ta fi aiki."], ["matplotlib", "ɗakin lambobi na Python don zana jadawali da hotuna."]],
          slides: [
            { title: "Lambobin MNIST", bullets: ["Lambobi 70,000 da aka rubuta da hannu, 0 zuwa 9", "Kowanne pixels 28 x 28", "60,000 don horarwa, 10,000 don gwaji"] },
            { title: "Daidaita pixels", bullets: ["Pixels suna daga 0 zuwa 255", "Ku raba da 255.0 don samun 0 zuwa 1", "Ƙananan lambobi suna horarwa da kyau"] },
            { title: "Ku duba kafin horarwa", bullets: ["plt.imshow(x_train[0], cmap=\"gray\")", "Ku buga lakabin ku duba ko ya yi daidai"] }
          ],
          sources: [KERAS_MNIST, COLAB],
          tryIt: "Ku loda ku daidaita MNIST a Colab. Ku buga girman tarin horarwa da na gwaji. Ku zana hotunan da ke matsayi 0, 1 da 2, ku buga lakabinsu don duba ko sun yi daidai.",
          youCanNow: "loda tarin hotuna, daidaita shi (normalize) da duba shi da ido.",
          quickCheck: [
            { objective: "O4", q: "Me normalizing pixels na MNIST ke nufi a nan?", options: ["Daidaita su zuwa tsakanin 0 da 1 ta raba su da 255", "Juya hotunan sama ya koma ƙasa", "Goge pixels masu duhu", "Mayar da kowane hoto lamba 0"], answer: 0, why: "Raba da 255 yana mayar da 0 zuwa 255 zuwa 0 zuwa 1, wanda ke taimaka wa koyo." },
            { objective: "O4", q: "Kun loda MNIST kuma kuna son ku tabbata lakabin daidai ne. Me za ku yi?", options: ["Ku fara horarwa ku duba daga baya", "Ku raba lakabin da 255", "Ku goge tarin gwaji", "Ku zana hoto ɗaya da matplotlib ku duba ko ya yi daidai da lakabinsa"], answer: 3, why: "Ku kalli bayananku kafin horarwa don duba ko lakabin ya yi daidai da hoton." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ginawa da horar da network",
          minutes: 6,
          goal: "Gina network na Keras, ku yi compile, ku horar da shi na epochs kaɗan.",
          text: [
            "Sequential model tari ne na layers. Namu: keras.Input(shape=(28, 28)) yana faɗin abin da ke shiga. layers.Flatten() yana mayar da kowane hoto na 28 x 28 zuwa layi ɗaya na lambobi 784. layers.Dense(128, activation=\"relu\") layer ne na neurons 128. layers.Dense(10, activation=\"softmax\") shi ne mai fitarwa: dama ɗaya ga kowace lamba daga 0 zuwa 9.",
            "compile yana saita yadda yake koyo: optimizer=\"adam\" (sanannen nau'in gradient descent), loss=\"sparse_categorical_crossentropy\" (loss da ya dace idan lakabi lambobi ne kawai kamar 7), da metrics=[\"accuracy\"] don ku ga sau nawa yake daidai.",
            "fit yana horar da shi: model.fit(x_train, y_train, epochs=5, validation_split=0.1). validation_split=0.1 yana ware kashi 10 na bayanan horarwa don duba overfitting. Kowane epoch yana buga loss, accuracy, val_loss da val_accuracy. Ku kalli loss yana raguwa."
          ],
          steps: ["from keras import layers", "model = keras.Sequential([keras.Input(shape=(28, 28)), layers.Flatten(), layers.Dense(128, activation=\"relu\"), layers.Dense(10, activation=\"softmax\")])", "model.compile(optimizer=\"adam\", loss=\"sparse_categorical_crossentropy\", metrics=[\"accuracy\"])", "model.summary() don ganin layers.", "model.fit(x_train, y_train, epochs=5, validation_split=0.1)"],
          words: [["Sequential model", "network da aka yi da layers da aka jera ɗaya bayan ɗaya."], ["Flatten", "layer da ke mayar da tebur na pixels zuwa dogon layi ɗaya."], ["Dense layer", "layer da kowane neuron ɗinsa ke haɗe da kowane input."], ["Optimizer", "hanyar da ke sabunta weights; adam sananne ne."], ["compile", "yana saita optimizer, loss da metrics kafin horarwa."], ["validation_split", "rabon bayanan horarwa da aka ware don duba overfitting."]],
          slides: [
            { title: "Layers", bullets: ["Input: hoto na 28 x 28", "Flatten: layi ɗaya na lambobi 784", "Dense 128, relu: layer na ɓoye (hidden)", "Dense 10, softmax: dama ɗaya ga kowace lamba"] },
            { title: "compile", bullets: ["optimizer=\"adam\"", "loss=\"sparse_categorical_crossentropy\"", "metrics=[\"accuracy\"]"] },
            { title: "fit", bullets: ["epochs=5: zagaye biyar a cikin bayanan", "validation_split=0.1 yana duba overfitting", "Ku kalli loss yana sauka, accuracy yana hawa"] }
          ],
          sources: [KERAS_MNIST],
          tryIt: "Ku gina, ku yi compile, ku horar da network na epochs 5. Ku rubuta accuracy da val_accuracy bayan epoch 1 da bayan epoch 5. Dukansu sun hau?",
          youCanNow: "gina neural network a Keras, yin compile da horar da shi yayin da kuke lura da overfitting.",
          quickCheck: [
            { objective: "O5", q: "Mene ne Sequential model a Keras?", options: ["Jerin hotuna", "Rahoton horarwa", "Tarin layers, ɗaya bayan ɗaya", "Wani nau'in loss function"], answer: 2, why: "Sequential yana jera layers bi da bi daga input zuwa output." },
            { objective: "O5", q: "Kuna son ku gani lokacin horarwa ko model ɗin ya fara overfitting. Me za ku ƙara a fit?", options: ["validation_split=0.1", "epochs=0", "activation=\"softmax\"", "Flatten()"], answer: 0, why: "validation_split yana ware wasu bayanan horarwa don duba model ɗin a kowane epoch." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Gwaji, hasashe da ingantawa",
          minutes: 6,
          goal: "Auna accuracy na gwaji, ku yi hasashen hotuna na gaske, ku gwada ingantawa ɗaya, ku faɗi iyakokin model ɗin.",
          text: [
            "Gwaji na gaskiya shi ne bayanan da network bai taɓa gani ba: model.evaluate(x_test, y_test) yana buga loss da accuracy na gwaji. Ƙaramin network kamar namu yawanci yana samun sama da kashi 90 sosai a MNIST.",
            "Don hasashe, ku ba shi hotuna: probs = model.predict(x_test[:5]) yana ba da damarmaki 10 ga kowane hoto. probs.argmax(axis=1) yana zaɓar lambar da ke da dama mafi girma. Ku kwatanta waɗannan da y_test[:5].",
            "Don inganta shi, ku canja abu ɗaya a lokaci ɗaya ku sake gwadawa: ƙarin neurons (Dense(256)), ƙarin epochs, ko convolutional network (layers da ke bincika ƙananan sassan hoto), wanda ke kaiwa kusan kashi 99 a misalin Keras na hukuma.",
            "Ku san iyakokinsa: yana sanin lambobi guda ɗaya da ke tsakiya kamar MNIST kawai. Hoton alamar titi ko harafi zai sami lamba duk da haka. A aiki na gaske, kamar karanta fom ko duba kayayyaki, mutum yana duba sakamakon da model ɗin bai da tabbaci a kai, kuma ana gwada model ɗin da bayanai daga ainihin wurin da za a yi amfani da shi."
          ],
          steps: ["Ku gudanar da model.evaluate(x_test, y_test) ku rubuta accuracy na gwaji.", "probs = model.predict(x_test[:5])", "print(probs.argmax(axis=1), y_test[:5]) don kwatanta hasashe da gaskiya.", "Ku canja abu ɗaya (neurons ko epochs), ku sake gini, horarwa da aunawa.", "Ku rubuta ko ya taimaka da iyaka ɗaya."],
          words: [["evaluate", "yana gwada model da aka horar a kan bayanai kuma yana faɗin loss da accuracy."], ["argmax", "yana zaɓar matsayin lamba mafi girma: a nan, lambar da ta fi yiwuwa."], ["Convolutional network (CNN)", "network mai layers da ke bincika ƙananan sassan hoto; yana da kyau sosai wajen hotuna."], ["Hyperparameter", "saitin da ku kuka zaɓa, kamar neurons ko epochs, ba wanda network ke koyo ba."]],
          slides: [
            { title: "Gwaji a kan bayanan da bai gani ba", bullets: ["model.evaluate(x_test, y_test)", "Yana faɗin loss da accuracy na gwaji"] },
            { title: "Yin hasashe", bullets: ["probs = model.predict(x_test[:5])", "probs.argmax(axis=1) = lambobin da ya hasashe", "Ku kwatanta da y_test[:5]"] },
            { title: "Ku inganta abu ɗaya a lokaci ɗaya", bullets: ["Ƙarin neurons ko ƙarin epochs", "Ko convolutional network", "Ku sake gwaji bayan kowane canji"] },
            { title: "Ku san iyakokinsa", bullets: ["Yana sanin lambobi guda ɗaya kamar MNIST kawai", "Ku gwada da bayanai na gaske daga wurin da za a yi amfani da shi", "Mutum yana duba sakamakon da ba a tabbatar ba"] }
          ],
          sources: [KERAS_MNIST],
          tryIt: "Aikin ƙarshe: ku auna network ɗinku a kan tarin gwaji, ku yi hasashen hotunan gwaji biyar na farko ku kwatanta da ainihin lakabinsu, sannan ku canja Dense(128) zuwa Dense(256) ko epochs zuwa 10, ku sake horarwa ku sake aunawa. Ku rubuta jimloli biyu: canjin ya taimaka, kuma mece ce iyaka ɗaya ta wannan model?",
          youCanNow: "horarwa, gwadawa, amfani da inganta neural network, da bayanin inda za a amince da shi da inda ba za a amince ba.",
          quickCheck: [
            { objective: "O6", q: "Me model.predict(x_test[:5]) ke ba ku?", options: ["Accuracy na gwaji", "Damarmaki 10 ga kowane hoto cikin hotuna 5", "Ainihin lakabi 5", "Sabon model da aka horar"], answer: 1, why: "predict yana mayar da dama ga kowace lamba a kowane hoto; argmax yana zaɓar wadda ta fi yiwuwa." },
            { objective: "O6", q: "Kuna son ku sani ko ƙarin epochs suna taimakawa. Me za ku yi?", options: ["Ku canja epochs, neurons da layers duka lokaci ɗaya", "Ku yanke hukunci da accuracy na horarwa kawai", "Ku tsallake tarin gwaji wannan karon", "Ku canja yawan epochs kawai, ku sake horarwa ku kwatanta accuracy na gwaji"], answer: 3, why: "Ku canja abu ɗaya a lokaci ɗaya don ku san abin da ya kawo bambancin." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Gina neural network a Colab",
        questions: [
          { objective: "O4", q: "Me yasa ake raba pixels na MNIST da 255.0?", options: ["Don a ƙara girman hotunan", "Don a goge pixels masu duhu", "Don a canja lakabi", "Don a daidaita su tsakanin 0 da 1 don horarwa ta fi aiki"], answer: 3, why: "Daidaita su zuwa 0-1 yana taimaka wa network ya koya." },
          { objective: "O5", q: "Me layers.Flatten() ke yi?", options: ["Yana mayar da tebur na 28 x 28 zuwa layi ɗaya na lambobi 784", "Yana ƙara hasken hoton", "Yana ƙara neurons 10", "Yana raba bayanan"], answer: 0, why: "Flatten yana mayar da tebur ɗin zuwa layi ɗaya don Dense layers." },
          { objective: "O5", q: "Me yasa layer na ƙarshe yake da neurons 10 da softmax?", options: ["Akwai epochs 10", "Koyaushe 10 ne", "Akwai lambobi 10 masu yiwuwa, kuma softmax yana ba da dama ga kowanne", "Don ajiye memory"], answer: 2, why: "Fitarwa ɗaya ga kowace lamba, a matsayin damarmaki da jimlarsu ta kai 1." },
          { objective: "O6", q: "Wane layi ne ke ba da lambar da ta fi yiwuwa ga kowane hoto?", options: ["probs.sum()", "model.fit(probs)", "y_test.argmax()", "probs.argmax(axis=1)"], answer: 3, why: "argmax yana zaɓar dama mafi girma." },
          { objective: "O6", q: "Kuna son ku sani ko Dense(256) ya fi Dense(128). Me za ku yi?", options: ["Ku canja abubuwa biyar lokaci ɗaya", "Ku kalli loss na horarwa kawai", "Ku canja shi, ku sake horarwa, ku kwatanta accuracy na gwaji", "Ku yi tsammani"], answer: 2, why: "Ku canja abu ɗaya ku sake gwaji a kan tarin gwaji iri ɗaya." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Gabatarwa ga Deep Learning da Neural Networks",
    questions: [
      { objective: "O1", q: "Deep learning shi ne:", options: ["Hanyar ajiye fayiloli", "Machine learning da neural networks masu layers da yawa", "Wani nau'in spreadsheet", "Koyo yayin barci"], answer: 1, why: "Yana amfani da networks masu zurfi (layers da yawa)." },
      { objective: "O1", q: "Wane aiki ne deep learning ya fi ƙwarewa a kai?", options: ["Gane fuskoki a hotuna", "Haɗa lambobi biyu", "Jera ɗan gajeren jeri", "Buga shafi"], answer: 0, why: "Hotuna, sauti da rubutu su ne ƙarfinsa." },
      { objective: "O1", q: "A network na hotuna, layers na farko yawanci suna lura da:", options: ["Fuskoki gaba ɗaya", "Sunan fayil", "Gefuna masu sauƙi", "Lakabi"], answer: 2, why: "Layers suna ginuwa daga gefuna zuwa siffofi zuwa abubuwa." },
      { objective: "O1", q: "Me yasa deep learning ya yi tashe a shekarun nan?", options: ["Manyan tarin bayanai da GPUs masu sauri", "Ƙananan allo", "Ƙarancin kwamfutoci", "Sababbin madannai (keyboards)"], answer: 0, why: "Yana buƙatar bayanai masu yawa da ƙarfin kwamfuta." },
      { objective: "O2", q: "Me weight ke yi a cikin neuron?", options: ["Yana ƙidaya epochs", "Yana ajiye lakabi", "Yana zana hoton", "Yana saita muhimmancin input"], answer: 3, why: "Weights suna auna girman kowane input." },
      { objective: "O2", q: "Inputs 2 da 2, weights 1 da -2, bias 1, ReLU. Me zai fitar?", options: ["-1", "0", "1", "3"], answer: 1, why: "2 - 4 + 1 = -1, kuma ReLU yana mayar da -1 zuwa 0." },
      { objective: "O2", q: "Softmax a layer na ƙarshe yana ba da:", options: ["Yawan layers", "Damarmakin kowace amsa da jimlarsu ta kai 100%", "Loss", "Lambar bazata (random)"], answer: 1, why: "Softmax yana mayar da abin da aka fitar zuwa damarmaki (probabilities)." },
      { objective: "O3", q: "Raguwar loss lokacin horarwa tana nufin:", options: ["Bayanan suna raguwa", "Kwamfutar tana ƙara jinkiri", "Lallai overfitting ne", "Hasashen network yana rage kuskure"], answer: 3, why: "Ƙaramin loss yana nufin ƙananan kurakurai." },
      { objective: "O3", q: "Learning rate yana sarrafa:", options: ["Girman kowane matakin sabunta weight", "Yawan hotuna", "Girman allo", "Yawan lakabi"], answer: 0, why: "Yana saita girman kowane mataki." },
      { objective: "O3", q: "Epoch ɗaya shi ne:", options: ["Neuron ɗaya", "Hoton gwaji ɗaya", "Zagaye ɗaya a cikin dukkan bayanan horarwa", "Minti ɗaya na horarwa"], answer: 2, why: "Epoch yana bi ta dukkan tarin horarwa sau ɗaya." },
      { objective: "O3", q: "Ana amfani da validation set don:", options: ["Horarwa da sauri", "Ajiye model", "Sa wa hotuna lakabi", "Kama overfitting lokacin horarwa"], answer: 3, why: "An ware shi ne don duba model ɗin yayin da yake horarwa." },
      { objective: "O4", q: "Hotuna nawa MNIST ke sakawa a tarin gwajinsa?", options: ["28", "784", "10,000", "60,000"], answer: 2, why: "MNIST yana da hotunan horarwa 60,000 da na gwaji 10,000." },
      { objective: "O4", q: "Kowane hoton MNIST shi ne:", options: ["Hoton titi mai launi", "Pixels 28 x 28 na lambar da aka rubuta da hannu", "Gajeren sauti", "Jimla"], answer: 1, why: "Ƙananan hotunan lambobi masu launin toka (grayscale)." },
      { objective: "O5", q: "Wane layer na Keras ne kowane neuron ɗinsa ke haɗe da kowane input?", options: ["Dense", "Flatten", "Input", "Softmax"], answer: 0, why: "Dense yana nufin an haɗa su gaba ɗaya (fully connected)." },
      { objective: "O5", q: "Me model.compile ke saitawa?", options: ["Tarin bayanai", "Girman hoto", "Optimizer, loss da metrics", "Accuracy na gwaji"], answer: 2, why: "compile yana saita yadda model ke koyo da abin da yake bayarwa a rahoto." },
      { objective: "O5", q: "Lakabi lambobi ne kawai kamar 7. Wane loss ne ya dace?", options: ["sparse_categorical_crossentropy", "accuracy", "relu", "adam"], answer: 0, why: "Wannan loss yana sa ran lakabi na lambobi cikakku (integers)." },
      { objective: "O5", q: "Me validation_split=0.1 a cikin fit ke yi?", options: ["Yana horarwa na epochs 0.1", "Yana goge kashi 10% na bayanan", "Yana saita learning rate", "Yana ware kashi 10% na bayanan horarwa don duba model"], answer: 3, why: "Yana ajiye wani kaso don validation." },
      { objective: "O6", q: "Wane layi ne ke auna accuracy a kan hotunan da bai gani ba?", options: ["model.fit(x_test, y_test)", "model.evaluate(x_test, y_test)", "model.summary()", "plt.imshow(x_test[0])"], answer: 1, why: "evaluate yana gwaji a kan bayanan da kuka ba shi." },
      { objective: "O6", q: "Wane irin network ne ke bincika ƙananan sassan hoto kuma yana da kyau sosai wajen hotuna?", options: ["Spreadsheet", "Convolutional network (CNN)", "Chatbot mai bin dokoki", "Neuron ɗaya"], answer: 1, why: "An gina CNNs ne don hotuna." },
      { objective: "O6", q: "Ana amfani da model ɗinku na lambobi don karanta fom da aka rubuta da hannu a wurin aiki. Wane mataki ne na alhaki?", options: ["Ku amince da kowace amsa", "Kada ku taɓa gwada shi", "Ku ɓoye cewa ana amfani da model", "Mutum ya duba sakamakon da ba a da tabbaci a kai, kuma a fara gwada shi da fom na gaske"], answer: 3, why: "Gwaji a duniyar gaske da duba na mutum suna kama kurakuran model ɗin." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
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
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "An shirya bayanai",
        objective: "O4",
        notYet: "Ba a loda MNIST ba, ko ba a daidaita pixels ba.",
        meets: "An loda MNIST kuma an daidaita pixels tsakanin 0 da 1.",
        exceeds: "An zana hoto ɗaya kuma an duba shi da lakabinsa."
      },
      {
        name: "An gina kuma an horar da network",
        objective: "O5",
        notYet: "Model ɗin ba ya yin compile ko horarwa.",
        meets: "Network na Keras mai Flatten, Dense hidden layer da output na softmax mai neurons 10 yana horarwa da validation split.",
        exceeds: "Ya rubuta yadda loss da accuracy na validation suka canja a kowane epoch."
      },
      {
        name: "Accuracy na gwaji da hasashe",
        objective: "O6",
        notYet: "Babu accuracy na gwaji, ko ba a kwatanta hasashe da ainihin lakabi ba.",
        meets: "Ya faɗi accuracy na gwaji kuma ya kwatanta hasashe biyar da ainihin lakabinsu.",
        exceeds: "Ya kuma duba hasashe ɗaya da ba daidai ba, ya kuma ba da shawarar dalilin da yasa ya faru."
      },
      {
        name: "An gwada canji ɗaya",
        objective: "O6",
        notYet: "Ba a yi canji ba, ko an canja abubuwa da yawa lokaci ɗaya.",
        meets: "Canji ɗaya (ƙarin neurons ko ƙarin epochs), an sake horarwa, tare da jimla kan ko ya taimaka.",
        exceeds: "Ya kuma duba canjin don alamun overfitting."
      },
      {
        name: "Iyakoki",
        objective: "O6",
        notYet: "Ba a ambaci iyaka ba, ko iyakar ba daidai ba ce.",
        meets: "Iyaka ɗaya ta gaske, kamar sanin lambobi guda ɗaya da ke tsakiya kawai.",
        exceeds: "Ya kuma faɗi yadda mutum zai duba sakamakon da ba a da tabbaci a kai a aiki na gaske."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka gama kwas ɗin kuma suka sami \"Ya cika\" ko \"Ya wuce\" a kowane layin rubric na aikin ƙarshe",
      "Masu koyo da suka ce sun horar da wani neural network ko misalin Keras a cikin kwanaki 30 bayan kwas ɗin (binciken biyo baya)",
      "Masu koyo da suka saka notebook ɗin a cikin tarin ayyukansu (portfolio) ko suka yi amfani da shi don magana game da AI a hirar neman aiki",
      "Masu koyo da suka shiga shirin horarwa, takardar shaida (certificate) ko aiki na fasaha, bayanai ko AI bayan kwas ɗin"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta ko laptop mai burauzar intanet",
      "Asusun Google kyauta don amfani da Google Colab",
      "Takarda da alƙalami don lissafin neuron da hannu",
      "Kusan minti 60 zuwa 75 gaba ɗaya, tare da lokacin da horarwa ke gudana"
    ],
    facilitatorNotes: [
      "Ku yi lissafin neuron a kan farin allo tare a matsayin rukuni kafin kowane code; yana sa layers na gaba su fi sauƙin fahimta sosai.",
      "Ku saukar da MNIST sau ɗaya kafin aji don duba ko network ɗin wurin ya yarda.",
      "Horarwa tana ɗaukar mintoci kaɗan; ku yi amfani da lokacin jira don tattauna lambobin loss da accuracy yayin da suke bugawa.",
      "Ku haɗa misalai da ayyukan da masu koyo suka sani, kamar karanta fom ko duba kayayyaki, kuma ku jaddada cewa mutum yana duba sakamakon da ba a da tabbaci a kai.",
      "Ku ƙarfafa masu koyo su ajiye notebook ɗinsu don tarin ayyukansu (portfolio), su kuma yi atisayen bayaninsa a minti ɗaya, kamar yadda za su yi a hirar neman aiki."
    ]
  }
};
