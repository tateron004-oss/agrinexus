"use strict";

// Koach Learn course (Yoruba translation of shared/deep-learning-intro.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const COLAB = { name: "Google Colab: Àwọn ìbéèrè tí àwọn ènìyàn máa ń béèrè", url: "https://research.google.com/colaboratory/faq.html" };
const KERAS_MNIST = { name: "Àpẹẹrẹ kóòdù Keras: Simple MNIST convnet", url: "https://keras.io/examples/vision/mnist_convnet/" };

module.exports = {
  id: "deep-learning-intro-yo",
  lang: "yo",
  translationOf: "deep-learning-intro",
  category: "Veterans (military)",
  name: "Ìfihàn sí Deep Learning àti Neural Network",
  skills: "Ṣíṣàlàyé bí neural network ṣe ń ṣiṣẹ́, Ṣíṣírò èsì neuron kan, Gbígbé dátà àwòrán wọlé àti ṣíṣe ìwọ̀n rẹ̀, Kíkọ́ àti kíkọ́ neural network nínú Keras, Ṣíṣàyẹ̀wò àti mímú model sunwọ̀n sí i",
  outcome: "kọ́ neural network kékeré kan, kọ́ ọ ní ẹ̀kọ́, kí o sì dán an wò nínú Google Colab pẹ̀lú Keras, tí ó ń ka nọ́mbà tí a fi ọwọ́ kọ, sọ bí ó ṣe péye tó lórí àwòrán tuntun, gbìyànjú àyípadà kan láti mú un dára sí i, kí o sì ṣàlàyé ohun tí model náà lè ṣe àti èyí tí kò lè ṣe.",
  about: [
    "Deep learning ló ń ṣiṣẹ́ lẹ́yìn ṣíṣí fóònù pẹ̀lú ojú, olùrànlọ́wọ́ ohùn, àwọn app ìtúmọ̀ èdè, irinṣẹ́ àwòrán ìṣègùn àti kámẹ́rà tí ń ṣàyẹ̀wò ẹ̀yà ẹ̀rọ ní ilé-iṣẹ́. Ẹ̀kọ́ yìí ṣàlàyé bí ó ṣe ń ṣiṣẹ́ ní ọ̀rọ̀ tó rọrùn, lẹ́yìn náà o máa kọ́ neural network tí ó ń ṣiṣẹ́ fúnra rẹ.",
    "Ó bá àwọn ọmọ ogun tẹ́lẹ̀ (veterans) tí wọ́n ń lọ sí iṣẹ́ ẹ̀rọ ìgbàlódé mu, àwọn tí wọ́n mọ Python díẹ̀, àti ẹnikẹ́ni tí ó ti parí \"Introduction to Machine Learning\". Orí 1 ń kọ́ àwọn èrò náà pẹ̀lú àṣeṣe lórí ìwé àti gègé. Orí 2 ń lọ sí Google Colab, ojú-òpó wẹ́ẹ̀bù ọ̀fẹ́ tí ó ń ṣe Python, níbi tí o ti máa kọ́ network ní ẹ̀kọ́ pẹ̀lú Keras, library deep learning ọ̀fẹ́. A fún ọ ní gbogbo ìlà kóòdù, a sì ṣàlàyé rẹ̀.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì parí pẹ̀lú iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\". Ìdánwò ìmọ̀ wà lẹ́yìn orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì parí ẹ̀kọ́ náà."
  ],
  finalTask: "Nínú Google Colab, gbé àwọn nọ́mbà ọwọ́-kọ MNIST wọlé, ṣe ìwọ̀n wọn, kọ́ neural network Keras kí o sì kọ́ ọ ní ẹ̀kọ́, sọ bí ó ṣe péye tó lórí àwọn àwòrán ìdánwò, sọ àsọtẹ́lẹ̀ fún àwòrán ìdánwò márùn-ún kí o sì fi wé àwọn label tòótọ́, lẹ́yìn náà ṣe àyípadà kan (neuron púpọ̀ sí i tàbí epoch púpọ̀ sí i), tún un kọ́, kí o sì kọ gbólóhùn méjì nípa bóyá ó ràn án lọ́wọ́ àti ààlà kan tí model náà ní.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn ọmọ ogun tẹ́lẹ̀ àti àwọn ọmọ ogun tí ń fi iṣẹ́ ológun sílẹ̀ tí wọ́n ń lọ sí iṣẹ́ ẹ̀rọ ìgbàlódé, dátà tàbí AI, pẹ̀lú àwọn ọkọ tàbí aya ọmọ ogun àti àwọn àgbàlagbà míì nínú ètò iṣẹ́ fún veterans tí wọ́n ti mọ Python díẹ̀.",
    startingPoint: "Wọ́n lè kọ ètò Python kúkúrú kí wọ́n sì ṣe é nínú Google Colab, wọ́n sì mọ èrò ìpìlẹ̀ kíkọ́ model ní ẹ̀kọ́ àti dídán an wò. Ọ̀pọ̀ jù lọ kò tíì wo inú neural network rí, kò tíì ṣírò ohun tí neuron kan ń mú jáde, tàbí kọ́ ọ̀kan kí wọ́n sì kọ́ ọ ní ẹ̀kọ́ pẹ̀lú Keras.",
    gap: "Deep learning ló ń darí àwọn irinṣẹ́ àwòrán, ohùn àti ọ̀rọ̀ nínú ààbò orílẹ̀-èdè, ètò ìrìnnà ẹrù, ìlera àti ilé-iṣẹ́, ọ̀pọ̀ iṣẹ́ ẹ̀rọ ìgbàlódé sì ń retí pé kí ènìyàn mọ bí neural network ṣe ń kẹ́kọ̀ọ́ àti bí ó ṣe ń kùnà. Àṣeṣe ọwọ́ ń jẹ́ kí àwọn akẹ́kọ̀ọ́ sọ̀rọ̀ nípa rẹ̀ pẹ̀lú ìgboyà nínú ìfọ̀rọ̀wánilẹ́nuwò iṣẹ́, ṣe ìdájọ́ èsì model, kí wọ́n sì rí ibi tí ènìyàn gbọ́dọ̀ máa ṣàyẹ̀wò.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; a ṣàlàyé àwọn ọ̀rọ̀ bíi weight, bias, loss àti epoch pẹ̀lú àpẹẹrẹ ìṣirò kékeré",
      "Ẹ̀rọ: kọ̀mpútà tàbí laptop pẹ̀lú browser wẹ́ẹ̀bù",
      "Àkáǹtì àti owó: àkáǹtì Google ọ̀fẹ́ fún Google Colab; Keras àti dátà MNIST jẹ́ ọ̀fẹ́; ohun èlò ọ̀fẹ́ Colab ní ààlà, ó sì lè yí padà",
      "Àkókò: nǹkan bí ìṣẹ́jú 5 sí 6 fún ẹ̀kọ́ kan pẹ̀lú àṣeṣe àti àkókò kíkọ́ model, nǹkan bí ìṣẹ́jú 60 sí 75 lápapọ̀",
      "Ìṣirò: ìsọdipúpọ̀ àti àròpọ̀ nọ́mbà kékeré pẹ̀lú ọwọ́; a kò nílò calculus"
    ],
    prerequisites: "Introduction to Programming with Python; Introduction to Machine Learning máa ṣèrànwọ́."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Láìlo àkọsílẹ̀", action: "ṣàlàyé ohun tí deep learning jẹ́ kí o sì dárúkọ irú dátà tí ó ń ṣiṣẹ́ lé lórí jù", standard: "kí o sọ̀rọ̀ nípa àwọn layer tí ń kọ́ àwòṣe láti inú àpẹẹrẹ, kí o sì dárúkọ ó kéré tán irú dátà méjì tó bá a mu" },
    { id: "O2", condition: "Tí a bá fún ọ ní input, weight, bias àti ReLU neuron kan", action: "ṣírò èsì neuron náà pẹ̀lú ọwọ́", standard: "kí èsì rẹ tọ́ ní gbogbo ìgbà, títí kan ìgbà tí ReLU bá fún ọ ní 0" },
    { id: "O3", condition: "Tí a bá fún ọ ní àkọsílẹ̀ kíkọ́ model tí ó ní loss àti accuracy", action: "ṣàlàyé bí kíkọ́ ṣe ń yí àwọn weight padà kí o sì dá àmì overfitting mọ̀", standard: "kí o lo àwọn ọ̀rọ̀ loss, learning rate, epoch àti validation lọ́nà tó tọ́" },
    { id: "O4", condition: "Nínú Google Colab pẹ̀lú Keras", action: "gbé àwọn nọ́mbà MNIST wọlé, ṣe ìwọ̀n àwọn pixel, kí o sì fi àwòrán kan hàn pẹ̀lú label rẹ̀", standard: "kí àwọn pixel wà láàárín 0 àti 1, kí label sì bá àwòrán mu" },
    { id: "O5", condition: "Tí a bá fún ọ ní dátà MNIST tí a ti pèsè", action: "kọ́ neural network Keras kan, compile rẹ̀, kí o sì kọ́ ọ ní ẹ̀kọ́", standard: "kí kóòdù náà ṣiṣẹ́, kí o lo validation split, kí loss sì máa dínkù láti epoch kan sí èkejì" },
    { id: "O6", condition: "Tí a bá fún ọ ní network tí a ti kọ́ ní ẹ̀kọ́", action: "wọn test accuracy rẹ̀, sọ àsọtẹ́lẹ̀ fún àwòrán tuntun, dán àyípadà kan wò kí o sì ṣàlàyé ààlà rẹ̀", standard: "kí o yí nǹkan kan ṣoṣo padà ní ìgbà kan, kí o sì dárúkọ ó kéré tán ààlà gidi kan" }
  ],
  chapters: [
    {
      name: "Orí 1: Bí neural network ṣe ń ṣiṣẹ́",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ohun tí deep learning jẹ́",
          minutes: 4,
          goal: "Ṣàlàyé deep learning ní ọ̀rọ̀ ara rẹ kí o sì dárúkọ ibi tí a ti ń lò ó.",
          text: [
            "Deep learning jẹ́ irú machine learning kan tí ó ń lo neural network: ọ̀pọ̀ ẹ̀ka ìṣirò kékeré, tí a ń pè ní neuron, tí a so pọ̀ ní layer. \"Deep\" (jíjìn) túmọ̀ sí pé layer pọ̀. Layer kọ̀ọ̀kan ń wá àwòṣe nínú ohun tí layer tí ó ṣáájú rẹ̀ mú jáde.",
            "Fún àwòrán kan, àwọn layer àkọ́kọ́ ń rí nǹkan tó rọrùn bíi etí ìlà, àwọn layer àárín ń rí ìrísí, àwọn layer ìkẹyìn sì ń rí odindi nǹkan bí ojú ènìyàn tàbí nọ́mbà. Kò sí ẹni tí ó kọ àwọn òfin yẹn: network náà ń kọ́ wọn láti inú ọ̀pọ̀ àpẹẹrẹ tí ó ní label.",
            "Ó ń ṣiṣẹ́ jù nígbà tí dátà bá pọ̀ tí ó sì kún fún oríṣiríṣi nǹkan: àwòrán, ìró, ọ̀rọ̀ sísọ àti ọ̀rọ̀ kíkọ gígùn. Ó nílò dátà àti agbára kọ̀mpútà ju àwọn model tó rọrùn lọ; ìdí nìyẹn tí ó fi gbilẹ̀ nígbà tí àkójọ dátà ńlá àti chip àwòrán tí ó yára (GPU) di ohun tí ó wọ́pọ̀."
          ],
          words: [["Deep learning", "machine learning pẹ̀lú neural network tí ó ní ọ̀pọ̀ layer."], ["Neural network", "model tí a fi ọ̀pọ̀ ẹ̀ka kékeré (neuron) tí a so pọ̀ ní layer ṣe."], ["Layer", "àkójọ neuron tí gbogbo wọn ń gba input láti layer tí ó ṣáájú."], ["GPU", "chip àwòrán tí ó ń ṣe ọ̀pọ̀ ìṣirò lẹ́ẹ̀kan náà, tí a ń lò láti kọ́ network kíákíá."]],
          slides: [
            { title: "Deep learning ni", bullets: ["Machine learning pẹ̀lú neural network", "Ọ̀pọ̀ layer ẹ̀ka ìṣirò kékeré", "\"Deep\" = layer púpọ̀"] },
            { title: "Àwọn layer ń wá àwòṣe", bullets: ["Layer àkọ́kọ́: etí ìlà", "Layer àárín: ìrísí", "Layer ìkẹyìn: odindi nǹkan"] },
            { title: "Ibi tí ó ti ń tàn", bullets: ["Àwòrán, ìró, ọ̀rọ̀ sísọ àti ọ̀rọ̀ kíkọ", "Dátà púpọ̀", "Ó nílò agbára kọ̀mpútà púpọ̀ (GPU)"] }
          ],
          tryIt: "Kọ irinṣẹ́ mẹ́rin tí o ti lò tí ó ṣeé ṣe kí wọ́n máa lo deep learning (fún àpẹẹrẹ ṣíṣí fóònù pẹ̀lú ojú, títẹ̀ pẹ̀lú ohùn, wíwá fọ́tò, ìtúmọ̀ èdè). Fún ọ̀kọ̀ọ̀kan, kọ irú dátà tí ó ń kọ́ láti inú rẹ̀: àwòrán, ìró tàbí ọ̀rọ̀ kíkọ.",
          youCanNow: "ṣàlàyé ohun tí deep learning jẹ́, ìdí tí ó fi ń lo layer, àti ibi tí a ti ń lò ó.",
          quickCheck: [
            { objective: "O1", q: "Kí ni neuron nínú neural network?", options: ["Sẹ́ẹ̀lì ọpọlọ tí a dà kọ sínú kọ̀mpútà", "Chip àwòrán", "Ẹ̀ka ìṣirò kékeré tí a so pọ̀ ní layer", "Àwòrán tí ó ní label"], answer: 2, why: "Neural network jẹ́ ọ̀pọ̀ ẹ̀ka ìṣirò kékeré, tí a ń pè ní neuron, ní layer." },
            { objective: "O1", q: "Ẹ̀ka ológun yín fẹ́ to ẹgbẹ̀rún ọ̀rọ̀ rédíò tí a gbà sílẹ̀ ní ìlànà ẹni tí ó sọ ọ́. Ṣé o máa ronú nípa deep learning?", options: ["Bẹ́ẹ̀ni; ó ń ṣiṣẹ́ jù pẹ̀lú dátà púpọ̀ bí ìró", "Rárá; deep learning kò lè lo ìró", "Rárá; ó ń ṣiṣẹ́ lórí nọ́mbà inú tábìlì nìkan", "Tí ohun tí a gbà sílẹ̀ bá kéré sí mẹ́wàá nìkan"], answer: 0, why: "Deep learning ń ṣiṣẹ́ jù pẹ̀lú dátà púpọ̀ tí ó kún fún oríṣiríṣi nǹkan, bí àwòrán, ìró àti ọ̀rọ̀ kíkọ." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Nínú neuron kan: weight, bias àti activation",
          minutes: 6,
          goal: "Ṣírò ohun tí neuron kan ṣoṣo ń mú jáde pẹ̀lú ọwọ́.",
          text: [
            "Neuron kan ń gba àwọn nọ́mbà wọlé, ó ń fi weight sọ ọ̀kọ̀ọ̀kan di púpọ̀, ó ń ṣe àròpọ̀ wọn, ó sì ń fi nọ́mbà kan sí i tí a ń pè ní bias. Àwọn weight ń sọ bí input kọ̀ọ̀kan ṣe ṣe pàtàkì tó; network náà ló ń kọ́ wọn.",
            "Lẹ́yìn náà ó ń lo activation function, tí ó ń pinnu ohun tí ó máa kọjá lọ. Èyí tí ó wọ́pọ̀ jù, ReLU, rọrùn: tí àpapọ̀ bá kéré sí òdo, mú 0 jáde; bí bẹ́ẹ̀ kọ́, mú àpapọ̀ náà jáde.",
            "Àpẹẹrẹ: input 2 àti 3, weight 0.5 àti -1, bias 1. Àpapọ̀ = 2 x 0.5 + 3 x (-1) + 1 = 1 - 3 + 1 = -1. ReLU sọ -1 di 0, nítorí náà neuron yìí mú 0 jáde. Tí input bá jẹ́ 2 àti 1 dípò: 1 - 1 + 1 = 1, nítorí náà ó mú 1 jáde.",
            "Network kan ní ẹgbẹẹgbẹ̀rún irú wọ̀nyí. Layer ìkẹyìn sábà máa ń lo softmax, tí ó ń sọ ohun tí ó mú jáde di àǹfààní (chance) tí ó jẹ́ 100 percent lápapọ̀, ọ̀kan fún ìdáhùn kọ̀ọ̀kan tí ó ṣeé ṣe."
          ],
          steps: ["Fi weight rẹ̀ sọ input kọ̀ọ̀kan di púpọ̀.", "Ṣe àròpọ̀ àwọn èsì náà.", "Fi bias kún un.", "Lo activation: pẹ̀lú ReLU, nọ́mbà òdì di 0.", "Nọ́mbà yẹn ni èsì neuron náà."],
          words: [["Neuron", "ẹ̀ka kékeré tí ó ń fi weight sọ input di púpọ̀, tí ó ń fi bias kún un, tí ó sì ń lo activation."], ["Weight", "nọ́mbà tí network ń kọ́ tí ó ń sọ bí input kan ṣe ṣe pàtàkì tó."], ["Bias", "nọ́mbà àfikún tí a fi kún àpapọ̀, tí network náà tún ń kọ́."], ["Activation function", "òfin tí ó ń pinnu ohun tí neuron kan máa kọjá lọ."], ["ReLU", "activation kan: àpapọ̀ òdì di 0, àwọn yòókù kò yí padà."], ["Softmax", "ó ń sọ ohun tí layer ìkẹyìn mú jáde di àǹfààní tí ó jẹ́ 1 lápapọ̀."]],
          slides: [
            { title: "Neuron kan", bullets: ["Input x weight, a ṣe àròpọ̀ wọn", "Pẹ̀lú bias", "Lẹ́yìn náà activation function"] },
            { title: "ReLU", bullets: ["Ní ìsàlẹ̀ òdo: mú 0 jáde", "Òdo tàbí jù bẹ́ẹ̀ lọ: mú àpapọ̀ jáde"] },
            { title: "Àpẹẹrẹ ìṣirò", bullets: ["Input 2, 3; weight 0.5, -1; bias 1", "2 x 0.5 + 3 x (-1) + 1 = -1", "ReLU(-1) = 0"] },
            { title: "Layer ìkẹyìn", bullets: ["Softmax ń fún ìdáhùn kọ̀ọ̀kan ní àǹfààní", "Àwọn àǹfààní náà jẹ́ 100% lápapọ̀"] }
          ],
          tryIt: "Ṣírò èsì neuron kan pẹ̀lú ọwọ́: input 4 àti 1, weight 0.5 àti 2, bias -3, activation ReLU. Lẹ́yìn náà yí bias padà sí -6 kí o sì tún un ṣírò. (Ìdáhùn: 1, lẹ́yìn náà 0.)",
          youCanNow: "ṣírò èsì neuron kan láti inú input, weight, bias àti activation rẹ̀.",
          quickCheck: [
            { objective: "O2", q: "Nínú neuron kan, kí ni bias?", options: ["Input tí iye rẹ̀ pọ̀ jù", "Activation function", "Òfin tí ó sọ pé model kò ṣe déédé", "Nọ́mbà kan tí a fi kún un lẹ́yìn tí a ti ṣe àròpọ̀ àwọn input tí a fi weight sọ di púpọ̀"], answer: 3, why: "Neuron náà ń fi bias kún àròpọ̀ weight kí ó tó lo activation." },
            { objective: "O2", q: "Input 4 àti 1, weight 0.5 àti 2, bias -1, ReLU. Èsì wo ni o máa ṣírò?", options: ["0", "3", "5", "-1"], answer: 1, why: "4 x 0.5 + 1 x 2 - 1 = 3, ReLU sì ń pa àpapọ̀ rere mọ́." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Bí network ṣe ń kẹ́kọ̀ọ́: loss, epoch àti ìgbésẹ̀ kékeré",
          minutes: 5,
          goal: "Ṣàlàyé bí kíkọ́ ṣe ń yí àwọn weight padà kí àṣìṣe lè dínkù.",
          text: [
            "Ní ìbẹ̀rẹ̀, àwọn weight jẹ́ lásán (random), nítorí náà àmọ̀ràn network kò dára. Kíkọ́ ló ń tún ìyẹn ṣe. Network náà ń méfò, loss function sì ń wọn bí ó ṣe ṣìnà tó: loss ńlá túmọ̀ sí pé ó ṣìnà gan-an, loss kékeré túmọ̀ sí pé ó súnmọ́.",
            "Lẹ́yìn náà ó ń ṣírò, fún weight kọ̀ọ̀kan, ọ̀nà tí ó máa dín loss kù (ìgbésẹ̀ yìí ni a ń pè ní backpropagation), ó sì ń gbé weight kọ̀ọ̀kan ní ìgbésẹ̀ kékeré sí ọ̀nà yẹn (gradient descent). Ìwọ̀n ìgbésẹ̀ náà ni learning rate: tí ó bá tóbi jù, ó máa kọjá ibi tí ó yẹ; tí ó bá kéré jù, ó máa lọ́ra gan-an.",
            "Lílọ ẹ̀ẹ̀kan la gbogbo àpẹẹrẹ ẹ̀kọ́ kọjá ni epoch. Kíkọ́ sábà máa ń gba epoch bíi mélòó kan. O máa wo bí loss ṣe ń dínkù àti accuracy ṣe ń pọ̀ sí i, o sì máa ṣàyẹ̀wò validation set (dátà tí a fi pamọ́ kúrò nínú kíkọ́) láti mú overfitting: tí training accuracy bá ń gòkè ṣùgbọ́n validation accuracy ń wálẹ̀, dúró."
          ],
          steps: ["Bẹ̀rẹ̀ pẹ̀lú weight lásán (random).", "Méfò lórí àwọn àpẹẹrẹ ẹ̀kọ́.", "Wọn àṣìṣe náà pẹ̀lú loss function.", "Sún weight kọ̀ọ̀kan ní ìgbésẹ̀ kékeré láti dín loss kù.", "Tún un ṣe fún epoch bíi mélòó kan, kí o máa wo validation accuracy."],
          words: [["Loss", "nọ́mbà tí ó ń wọn bí àmọ̀ràn network ṣe ṣìnà tó."], ["Backpropagation", "ṣíṣírò bí weight kọ̀ọ̀kan ṣe kan loss."], ["Gradient descent", "gbígbé àwọn weight ní ìgbésẹ̀ kékeré láti dín loss kù."], ["Learning rate", "bí ìgbésẹ̀ kọ̀ọ̀kan ṣe tóbi tó."], ["Epoch", "lílọ ẹ̀ẹ̀kan la gbogbo dátà ẹ̀kọ́ kọjá."], ["Validation set", "dátà tí a fi pamọ́ nígbà kíkọ́ láti ṣàyẹ̀wò overfitting."]],
          slides: [
            { title: "Méfò, wọ̀n, ṣàtúnṣe", bullets: ["Weight lásán ní ìbẹ̀rẹ̀", "Loss ń wọn bí ó ṣe ṣìnà tó", "Ṣàtúnṣe weight láti dín loss kù"] },
            { title: "Ìgbésẹ̀ kékeré", bullets: ["Backpropagation ń wá ọ̀nà", "Gradient descent ń gbé ìgbésẹ̀", "Learning rate ń pinnu ìwọ̀n ìgbésẹ̀"] },
            { title: "Epoch àti validation", bullets: ["Epoch: lílọ ẹ̀ẹ̀kan la dátà kọjá", "Máa wo validation accuracy", "Training ń gòkè, validation ń wálẹ̀ = overfitting"] }
          ],
          tryIt: "Ṣe eré \"méfò nọ́mbà\" pẹ̀lú ọ̀rẹ́ kan tàbí fúnra rẹ: yan nọ́mbà kan tí a fi pamọ́ láti 1 sí 100, méfò, gba \"ó ga jù\" tàbí \"ó kéré jù\", kí o sì yí àmọ̀ràn rẹ padà pẹ̀lú ìgbésẹ̀ tí ó ń kéré sí i ní ìgbà kọ̀ọ̀kan. Kọ apá eré náà tí ó dà bí loss, èyí tí ó dà bí learning rate, àti iye ìgbà (epoch) tí ó gbà.",
          youCanNow: "ṣàlàyé loss, backpropagation, gradient descent, learning rate, epoch àti overfitting ní ọ̀rọ̀ tó rọrùn.",
          quickCheck: [
            { objective: "O3", q: "Kí ni learning rate?", options: ["Iye àwòrán tí ó wà nínú dátà", "Ìwọ̀n ìgbésẹ̀ kọ̀ọ̀kan tí àwọn weight ń gbé", "Iye layer", "Accuracy ìkẹyìn"], answer: 1, why: "Ìgbésẹ̀ tí ó tóbi jù ń kọjá ibi tí ó yẹ; ìgbésẹ̀ tí ó kéré jù ń lọ́ra gan-an." },
            { objective: "O3", q: "Lẹ́yìn epoch 4, validation accuracy bẹ̀rẹ̀ sí wálẹ̀ nígbà tí training accuracy ń gòkè. Kí ni o máa ṣe?", options: ["Kọ́ ọ fún epoch 50 sí i", "Pa validation set rẹ́", "Dá kíkọ́ dúró; model náà ti ń bẹ̀rẹ̀ sí overfit", "Gbé learning rate sókè gan-an"], answer: 2, why: "Validation accuracy tí ń wálẹ̀ nígbà tí training accuracy ń gòkè jẹ́ àmì overfitting." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Bí neural network ṣe ń ṣiṣẹ́",
        questions: [
          { objective: "O1", q: "Kí ni \"deep\" túmọ̀ sí nínú deep learning?", options: ["Ó ń lo iná mànàmáná púpọ̀", "Ó ń ṣiṣẹ́ lábẹ́ omi nìkan", "Network náà ní ọ̀pọ̀ layer", "Ó ṣòro láti ṣàlàyé"], answer: 2, why: "Deep túmọ̀ sí ọ̀pọ̀ layer neuron." },
          { objective: "O2", q: "Àpapọ̀ neuron kan jẹ́ -2. Pẹ̀lú ReLU, kí ni ó máa mú jáde?", options: ["-2", "0", "1", "2"], answer: 1, why: "ReLU ń sọ àpapọ̀ òdì èyíkéyìí di 0." },
          { objective: "O2", q: "Input 1 àti 2, weight 3 àti 1, bias 0, ReLU. Kí ni èsì?", options: ["0", "3", "5", "6"], answer: 2, why: "1 x 3 + 2 x 1 + 0 = 5, 5 kì í sì í ṣe nọ́mbà òdì." },
          { objective: "O3", q: "Kí ni loss function ń wọ̀n?", options: ["Iye layer tí ó wà", "Bí àmọ̀ràn network ṣe ṣìnà tó", "Bí kọ̀mpútà ṣe yára tó", "Iye dátà tí o ní"], answer: 1, why: "Loss ni ìwọ̀n àṣìṣe." },
          { objective: "O3", q: "Training accuracy ń gòkè ṣùgbọ́n validation accuracy ń wálẹ̀. Kí ló ń ṣẹlẹ̀?", options: ["Network náà pé", "Overfitting", "Learning rate jẹ́ òdo", "Dátà ti sọnù"], answer: 1, why: "Ṣíṣe dáadáa lórí dátà ẹ̀kọ́ ṣùgbọ́n ṣíṣe burú lórí dátà tí a fi pamọ́ ni overfitting." }
        ]
      }
    },
    {
      name: "Orí 2: Kíkọ́ neural network nínú Colab",
      lessons: [
        {
          objectives: ["O4"],
          title: "Gbígbé dátà àwòrán wọlé àti pípèsè rẹ̀",
          minutes: 5,
          goal: "Gbé àwọn nọ́mbà MNIST wọlé nínú Colab, ṣe ìwọ̀n wọn, kí o sì wo àwòrán kan.",
          text: [
            "MNIST jẹ́ àkójọ dátà àṣeṣe tí ó lókìkí: 70,000 àwòrán kékeré ti nọ́mbà 0 sí 9 tí a fi ọwọ́ kọ, ọ̀kọ̀ọ̀kan jẹ́ pixel 28 lórí 28, pẹ̀lú nọ́mbà tó tọ́ gẹ́gẹ́ bí label. Keras, library deep learning ọ̀fẹ́ tí ó ń ṣiṣẹ́ nínú Google Colab, lè gbé e wọlé pẹ̀lú ìlà kan, tí a ti pín sí àwòrán ẹ̀kọ́ 60,000 àti àwòrán ìdánwò 10,000.",
            "Pixel kọ̀ọ̀kan jẹ́ nọ́mbà láti 0 (dúdú) sí 255 (funfun). Network ń kẹ́kọ̀ọ́ dáadáa sí i pẹ̀lú nọ́mbà kékeré, nítorí náà o máa ṣe ìwọ̀n wọn sí láàárín 0 àti 1 nípa pínpín wọn pẹ̀lú 255. A ń pe èyí ní normalizing.",
            "Wo dátà rẹ kí o tó kọ́ model. matplotlib, library fún yíya àwòrán, lè ya àwòrán kan kí o lè ṣàyẹ̀wò pé label bá àwòrán mu."
          ],
          steps: ["Nínú notebook Colab tuntun, ṣe: import keras", "Gbé wọlé: (x_train, y_train), (x_test, y_test) = keras.datasets.mnist.load_data()", "Ṣe ìwọ̀n: x_train = x_train / 255.0 àti x_test = x_test / 255.0", "Ṣàyẹ̀wò ìtóbi: print(x_train.shape, x_test.shape)", "Ya ọ̀kan: import matplotlib.pyplot as plt; plt.imshow(x_train[0], cmap=\"gray\"); plt.show(); print(y_train[0])"],
          words: [["MNIST", "àkójọ dátà àṣeṣe tí ó ní àwòrán 70,000 ti nọ́mbà tí a fi ọwọ́ kọ."], ["Keras", "library Python ọ̀fẹ́ tí ó rọrùn fún olùbẹ̀rẹ̀, fún kíkọ́ neural network."], ["Pixel", "àmì kékeré kan nínú àwòrán, tí a tọ́jú gẹ́gẹ́ bí nọ́mbà."], ["Normalizing", "ṣíṣe ìwọ̀n àwọn nọ́mbà sí ààlà kékeré bíi 0 sí 1 kí kíkọ́ lè ṣiṣẹ́ dáadáa."], ["matplotlib", "library Python fún yíya chart àti àwòrán."]],
          slides: [
            { title: "Àwọn nọ́mbà MNIST", bullets: ["70,000 nọ́mbà ọwọ́-kọ, 0 sí 9", "Ọ̀kọ̀ọ̀kan jẹ́ pixel 28 x 28", "60,000 fún kíkọ́, 10,000 fún ìdánwò"] },
            { title: "Ṣe ìwọ̀n àwọn pixel", bullets: ["Pixel wà láti 0 sí 255", "Pín pẹ̀lú 255.0 láti rí 0 sí 1", "Nọ́mbà kékeré ń kẹ́kọ̀ọ́ dáadáa sí i"] },
            { title: "Wò ó kí o tó kọ́ model", bullets: ["plt.imshow(x_train[0], cmap=\"gray\")", "Tẹ label jáde láti ṣàyẹ̀wò pé ó bá a mu"] }
          ],
          sources: [KERAS_MNIST, COLAB],
          tryIt: "Gbé MNIST wọlé kí o sì ṣe ìwọ̀n rẹ̀ nínú Colab. Tẹ shape àwọn àkójọ ẹ̀kọ́ àti ìdánwò jáde. Ya àwọn àwòrán ní ipò 0, 1 àti 2 kí o sì tẹ label wọn jáde láti ṣàyẹ̀wò pé wọ́n bá a mu.",
          youCanNow: "gbé àkójọ dátà àwòrán wọlé, ṣe normalizing rẹ̀, kí o sì fi ojú ṣàyẹ̀wò rẹ̀.",
          quickCheck: [
            { objective: "O4", q: "Kí ni normalizing àwọn pixel MNIST túmọ̀ sí níbí?", options: ["Ṣíṣe ìwọ̀n wọn sí láàárín 0 àti 1 nípa pínpín pẹ̀lú 255", "Yíyí àwọn àwòrán dorí kodò", "Pípa àwọn pixel dúdú rẹ́", "Sísọ gbogbo àwòrán di nọ́mbà 0"], answer: 0, why: "Pínpín pẹ̀lú 255 ń sọ 0 sí 255 di 0 sí 1, èyí sì ń ran kíkọ́ lọ́wọ́." },
            { objective: "O4", q: "O ti gbé MNIST wọlé, o sì fẹ́ rí i dájú pé àwọn label tọ́. Kí ni o máa ṣe?", options: ["Kọ́ model kọ́kọ́, kí o ṣàyẹ̀wò lẹ́yìn náà", "Pín àwọn label pẹ̀lú 255", "Pa test set rẹ́", "Ya àwòrán kan pẹ̀lú matplotlib kí o sì ṣàyẹ̀wò pé ó bá label rẹ̀ mu"], answer: 3, why: "Wo dátà rẹ kí o tó kọ́ model láti ṣàyẹ̀wò pé label bá àwòrán mu." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kíkọ́ network àti kíkọ́ ọ ní ẹ̀kọ́",
          minutes: 6,
          goal: "Kọ́ network Keras kan, compile rẹ̀, kí o sì kọ́ ọ ní ẹ̀kọ́ fún epoch díẹ̀.",
          text: [
            "Sequential model jẹ́ àkójọ layer tí a tò lé ara wọn. Tiwa: keras.Input(shape=(28, 28)) ń sọ ohun tí ó ń wọlé. layers.Flatten() ń sọ àwòrán 28 x 28 kọ̀ọ̀kan di ìlà kan ti nọ́mbà 784. layers.Dense(128, activation=\"relu\") jẹ́ layer ti neuron 128. layers.Dense(10, activation=\"softmax\") ni èsì: àǹfààní kan fún nọ́mbà kọ̀ọ̀kan láti 0 sí 9.",
            "compile ń pinnu bí ó ṣe máa kẹ́kọ̀ọ́: optimizer=\"adam\" (irú gradient descent kan tí ó gbajúmọ̀), loss=\"sparse_categorical_crossentropy\" (loss tó tọ́ nígbà tí label bá jẹ́ nọ́mbà lásán bíi 7), àti metrics=[\"accuracy\"] kí o lè rí bí ó ṣe máa ń tọ̀nà tó.",
            "fit ń kọ́ ọ ní ẹ̀kọ́: model.fit(x_train, y_train, epochs=5, validation_split=0.1). validation_split=0.1 ń fi 10 percent dátà ẹ̀kọ́ pamọ́ láti ṣàyẹ̀wò overfitting. Epoch kọ̀ọ̀kan ń tẹ loss, accuracy, val_loss àti val_accuracy jáde. Máa wo bí loss ṣe ń dínkù."
          ],
          steps: ["from keras import layers", "model = keras.Sequential([keras.Input(shape=(28, 28)), layers.Flatten(), layers.Dense(128, activation=\"relu\"), layers.Dense(10, activation=\"softmax\")])", "model.compile(optimizer=\"adam\", loss=\"sparse_categorical_crossentropy\", metrics=[\"accuracy\"])", "model.summary() láti rí àwọn layer.", "model.fit(x_train, y_train, epochs=5, validation_split=0.1)"],
          words: [["Sequential model", "network tí a fi layer tí a tò tẹ̀lé ara wọn ṣe."], ["Flatten", "layer tí ó ń sọ àkòjọ pixel oníbùú-òòró di ìlà gígùn kan."], ["Dense layer", "layer tí gbogbo neuron rẹ̀ so mọ́ gbogbo input."], ["Optimizer", "ọ̀nà tí ó ń ṣe àtúnṣe àwọn weight; adam jẹ́ èyí tí ó wọ́pọ̀."], ["compile", "ó ń ṣètò optimizer, loss àti metrics kí kíkọ́ tó bẹ̀rẹ̀."], ["validation_split", "ìpín dátà ẹ̀kọ́ tí a fi pamọ́ láti ṣàyẹ̀wò overfitting."]],
          slides: [
            { title: "Àwọn layer", bullets: ["Input: àwòrán 28 x 28", "Flatten: ìlà kan ti nọ́mbà 784", "Dense 128, relu: layer àárín (hidden)", "Dense 10, softmax: àǹfààní kan fún nọ́mbà kọ̀ọ̀kan"] },
            { title: "compile", bullets: ["optimizer=\"adam\"", "loss=\"sparse_categorical_crossentropy\"", "metrics=[\"accuracy\"]"] },
            { title: "fit", bullets: ["epochs=5: lílọ la dátà kọjá ní ìgbà márùn-ún", "validation_split=0.1 ń ṣàyẹ̀wò overfitting", "Máa wo bí loss ṣe ń dínkù tí accuracy ń gòkè"] }
          ],
          sources: [KERAS_MNIST],
          tryIt: "Kọ́ network náà, compile rẹ̀, kí o sì kọ́ ọ ní ẹ̀kọ́ fún epoch 5. Kọ accuracy àti val_accuracy sílẹ̀ lẹ́yìn epoch 1 àti lẹ́yìn epoch 5. Ṣé àwọn méjèèjì gòkè?",
          youCanNow: "kọ́ neural network nínú Keras, compile rẹ̀, kí o sì kọ́ ọ ní ẹ̀kọ́ nígbà tí o ń ṣọ́ overfitting.",
          quickCheck: [
            { objective: "O5", q: "Kí ni Sequential model nínú Keras?", options: ["Àkójọ àwòrán", "Àkọsílẹ̀ kíkọ́ model", "Àkójọ layer, ọ̀kan tẹ̀lé òmíràn", "Irú loss function kan"], answer: 2, why: "Sequential ń to àwọn layer lé ara wọn ní ìlànà láti input dé èsì." },
            { objective: "O5", q: "O fẹ́ rí i nígbà kíkọ́ bóyá model náà bẹ̀rẹ̀ sí overfit. Kí ni o máa fi kún fit?", options: ["validation_split=0.1", "epochs=0", "activation=\"softmax\"", "Flatten()"], answer: 0, why: "validation_split ń fi apá kan dátà ẹ̀kọ́ pamọ́ láti ṣàyẹ̀wò model ní epoch kọ̀ọ̀kan." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Dídánwò, sísọ àsọtẹ́lẹ̀ àti mímú un dára sí i",
          minutes: 6,
          goal: "Wọn test accuracy, sọ àsọtẹ́lẹ̀ fún àwòrán gidi, gbìyànjú àtúnṣe kan kí o sì dárúkọ ààlà model náà.",
          text: [
            "Ìdánwò tòótọ́ ni dátà tí network kò rí rí: model.evaluate(x_test, y_test) ń tẹ test loss àti accuracy jáde. Network kékeré bíi tiwa sábà máa ń ní ju 90 percent lọ dáadáa lórí MNIST.",
            "Láti sọ àsọtẹ́lẹ̀, fún un ní àwòrán: probs = model.predict(x_test[:5]) ń fún àwòrán kọ̀ọ̀kan ní àǹfààní 10. probs.argmax(axis=1) ń mú nọ́mbà tí àǹfààní rẹ̀ ga jù. Fi wọ́n wé y_test[:5].",
            "Láti mú un dára sí i, yí nǹkan kan ṣoṣo padà ní ìgbà kan kí o sì tún dán an wò: neuron púpọ̀ sí i (Dense(256)), epoch púpọ̀ sí i, tàbí convolutional network (layer tí ń ṣàyẹ̀wò apá kékeré àwòrán), tí ó dé nǹkan bí 99 percent nínú àpẹẹrẹ Keras ti ìjọba wọn.",
            "Mọ ààlà rẹ̀: ó mọ nọ́mbà kan ṣoṣo tí ó wà ní àárín bíi ti MNIST nìkan. Fọ́tò àmì ojú ọ̀nà tàbí lẹ́tà kan ṣì máa gba nọ́mbà kan. Nínú iṣẹ́ gidi, bíi kíka fọ́ọ̀mù tàbí ṣíṣàyẹ̀wò ẹ̀yà ẹ̀rọ, ènìyàn ń ṣàyẹ̀wò èsì tí model kò dá lójú, a sì ń dán model wò lórí dátà láti ibi gidi tí a ó ti lò ó."
          ],
          steps: ["Ṣe model.evaluate(x_test, y_test) kí o sì kọ test accuracy sílẹ̀.", "probs = model.predict(x_test[:5])", "print(probs.argmax(axis=1), y_test[:5]) láti fi àmọ̀ràn wé òtítọ́.", "Yí nǹkan kan padà (neuron tàbí epoch), tún un kọ́, tún kọ́ ọ ní ẹ̀kọ́ kí o sì tún evaluate rẹ̀.", "Kọ bóyá ó ràn án lọ́wọ́ àti ààlà kan."],
          words: [["evaluate", "ó ń dán model tí a ti kọ́ wò lórí dátà, ó sì ń sọ loss àti accuracy."], ["argmax", "ó ń mú ipò nọ́mbà tí ó tóbi jù: níbí, nọ́mbà tí ó ṣeé ṣe jù."], ["Convolutional network (CNN)", "network tí ó ní layer tí ń ṣàyẹ̀wò apá kékeré àwòrán; ó dára gan-an fún àwòrán."], ["Hyperparameter", "ètò tí ìwọ yàn, bí iye neuron tàbí epoch, dípò èyí tí network ń kọ́."]],
          slides: [
            { title: "Dán an wò lórí dátà tí kò rí rí", bullets: ["model.evaluate(x_test, y_test)", "Ó ń sọ test loss àti accuracy"] },
            { title: "Sọ àsọtẹ́lẹ̀", bullets: ["probs = model.predict(x_test[:5])", "probs.argmax(axis=1) = àwọn nọ́mbà tí ó méfò", "Fi wé y_test[:5]"] },
            { title: "Mú nǹkan kan dára ní ìgbà kan", bullets: ["Neuron púpọ̀ sí i tàbí epoch púpọ̀ sí i", "Tàbí convolutional network", "Tún dán an wò lẹ́yìn àyípadà kọ̀ọ̀kan"] },
            { title: "Mọ ààlà rẹ̀", bullets: ["Ó mọ nọ́mbà kan ṣoṣo bíi ti MNIST nìkan", "Dán an wò lórí dátà gidi láti ibi tí a ó ti lò ó", "Ènìyàn ń ṣàyẹ̀wò èsì tí kò dájú"] }
          ],
          sources: [KERAS_MNIST],
          tryIt: "Iṣẹ́ ìkẹyìn: evaluate network rẹ lórí test set, sọ àsọtẹ́lẹ̀ fún àwòrán ìdánwò márùn-ún àkọ́kọ́ kí o sì fi wé àwọn label tòótọ́, lẹ́yìn náà yí Dense(128) padà sí Dense(256) tàbí epochs sí 10, tún un kọ́ ní ẹ̀kọ́ kí o sì tún evaluate rẹ̀. Kọ gbólóhùn méjì: ṣé àyípadà náà ràn án lọ́wọ́, kí sì ni ààlà kan tí model yìí ní?",
          youCanNow: "kọ́ neural network ní ẹ̀kọ́, dán an wò, lò ó, kí o sì mú un dára sí i, kí o sì ṣàlàyé ibi tí a lè gbẹ́kẹ̀lé e àti ibi tí a kò lè gbẹ́kẹ̀lé e.",
          quickCheck: [
            { objective: "O6", q: "Kí ni model.predict(x_test[:5]) ń fún ọ?", options: ["Test accuracy", "Àǹfààní 10 fún ọ̀kọ̀ọ̀kan àwòrán 5 náà", "Àwọn label tòótọ́ 5", "Model tuntun tí a ti kọ́"], answer: 1, why: "predict ń dá àǹfààní padà fún nọ́mbà kọ̀ọ̀kan fún àwòrán kọ̀ọ̀kan; argmax ń mú èyí tí ó ṣeé ṣe jù." },
            { objective: "O6", q: "O fẹ́ mọ̀ bóyá epoch púpọ̀ sí i ń ṣèrànwọ́. Kí ni o máa ṣe?", options: ["Yí epoch, neuron àti layer padà lẹ́ẹ̀kan náà", "Ṣe ìdájọ́ pẹ̀lú training accuracy nìkan", "Fo test set ní ìgbà yìí", "Yí iye epoch nìkan padà, tún un kọ́, kí o sì fi test accuracy wéra"], answer: 3, why: "Yí nǹkan kan ṣoṣo padà ní ìgbà kan kí o lè mọ ohun tí ó fa ìyàtọ̀ náà." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Kíkọ́ neural network nínú Colab",
        questions: [
          { objective: "O4", q: "Kí nìdí tí a fi ń pín àwọn pixel MNIST pẹ̀lú 255.0?", options: ["Láti mú àwọn àwòrán tóbi sí i", "Láti pa àwọn pixel dúdú rẹ́", "Láti yí àwọn label padà", "Láti ṣe ìwọ̀n wọn sí láàárín 0 àti 1 kí kíkọ́ lè ṣiṣẹ́ dáadáa"], answer: 3, why: "Normalizing sí 0-1 ń ran network lọ́wọ́ láti kẹ́kọ̀ọ́." },
          { objective: "O5", q: "Kí ni layers.Flatten() ń ṣe?", options: ["Ó ń sọ àkòjọ 28 x 28 di ìlà kan ti nọ́mbà 784", "Ó ń mú àwòrán mọ́lẹ̀ sí i", "Ó ń fi neuron 10 kún un", "Ó ń pín dátà"], answer: 0, why: "Flatten ń sọ àkòjọ náà di ìlà fún àwọn Dense layer." },
          { objective: "O5", q: "Kí nìdí tí layer ìkẹyìn fi ní neuron 10 pẹ̀lú softmax?", options: ["Epoch 10 ló wà", "Ó máa ń jẹ́ 10 nígbà gbogbo", "Nọ́mbà 10 ló ṣeé ṣe, softmax sì ń fún ọ̀kọ̀ọ̀kan ní àǹfààní", "Láti dá ìrántí (memory) sí"], answer: 2, why: "Èsì kan fún nọ́mbà kọ̀ọ̀kan, gẹ́gẹ́ bí àǹfààní tí ó jẹ́ 1 lápapọ̀." },
          { objective: "O6", q: "Ìlà wo ni ó ń fún àwòrán kọ̀ọ̀kan ní nọ́mbà tí ó ṣeé ṣe jù?", options: ["probs.sum()", "model.fit(probs)", "y_test.argmax()", "probs.argmax(axis=1)"], answer: 3, why: "argmax ń mú àǹfààní tí ó ga jù." },
          { objective: "O6", q: "O fẹ́ mọ̀ bóyá Dense(256) dára ju Dense(128) lọ. Kí ni o máa ṣe?", options: ["Yí nǹkan márùn-ún padà lẹ́ẹ̀kan náà", "Wo training loss nìkan", "Yí i padà, tún un kọ́ ní ẹ̀kọ́, kí o sì fi test accuracy wéra", "Méfò"], answer: 2, why: "Yí nǹkan kan padà kí o sì tún dán an wò lórí test set kan náà." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Ìfihàn sí Deep Learning àti Neural Network",
    questions: [
      { objective: "O1", q: "Deep learning ni:", options: ["Ọ̀nà kan láti tọ́jú fáìlì", "Machine learning pẹ̀lú neural network tí ó ní ọ̀pọ̀ layer", "Irú spreadsheet kan", "Kíkẹ́kọ̀ọ́ nígbà tí o ń sùn"], answer: 1, why: "Ó ń lo network jíjìn (tí ó ní ọ̀pọ̀ layer)." },
      { objective: "O1", q: "Iṣẹ́ wo ni deep learning dára sí jù?", options: ["Dídá ojú ènìyàn mọ̀ nínú fọ́tò", "Ṣíṣe àròpọ̀ nọ́mbà méjì", "Títo list kúkúrú", "Títẹ ojú-ìwé kan jáde"], answer: 0, why: "Àwòrán, ìró àti ọ̀rọ̀ kíkọ ni agbára rẹ̀." },
      { objective: "O1", q: "Nínú network àwòrán, àwọn layer àkọ́kọ́ sábà máa ń rí:", options: ["Odindi ojú ènìyàn", "Orúkọ fáìlì", "Etí ìlà tó rọrùn", "Label"], answer: 2, why: "Àwọn layer ń kọ́ láti etí ìlà sí ìrísí sí odindi nǹkan." },
      { objective: "O1", q: "Kí nìdí tí deep learning fi gbilẹ̀ ní àwọn ọdún àìpẹ́ yìí?", options: ["Àkójọ dátà ńlá àti GPU tí ó yára", "Ojú-iboju tí ó kéré sí i", "Kọ̀mpútà tí ó dínkù", "Keyboard tuntun"], answer: 0, why: "Ó nílò dátà púpọ̀ àti agbára kọ̀mpútà." },
      { objective: "O2", q: "Kí ni weight ń ṣe nínú neuron?", options: ["Ó ń ka àwọn epoch", "Ó ń tọ́jú label", "Ó ń ya àwòrán", "Ó ń pinnu bí input kan ṣe ṣe pàtàkì tó"], answer: 3, why: "Weight ń yí ìwọ̀n input kọ̀ọ̀kan padà." },
      { objective: "O2", q: "Input 2 àti 2, weight 1 àti -2, bias 1, ReLU. Èsì?", options: ["-1", "0", "1", "3"], answer: 1, why: "2 - 4 + 1 = -1, ReLU sì ń sọ -1 di 0." },
      { objective: "O2", q: "Softmax nínú layer ìkẹyìn ń fúnni ní:", options: ["Iye layer", "Àǹfààní fún ìdáhùn kọ̀ọ̀kan tí ó jẹ́ 100% lápapọ̀", "Loss", "Nọ́mbà lásán (random)"], answer: 1, why: "Softmax ń sọ èsì di probability (àǹfààní)." },
      { objective: "O3", q: "Tí loss bá ń dínkù nígbà kíkọ́, ó túmọ̀ sí pé:", options: ["Dátà ń dínkù", "Kọ̀mpútà ń lọ́ra", "Overfitting ti ṣẹlẹ̀ dájú", "Àmọ̀ràn network ń dín àṣìṣe kù"], answer: 3, why: "Loss tí ó kéré sí i túmọ̀ sí àṣìṣe tí ó kéré sí i." },
      { objective: "O3", q: "Learning rate ń darí:", options: ["Bí ìgbésẹ̀ àtúnṣe weight kọ̀ọ̀kan ṣe tóbi tó", "Iye àwòrán tí ó wà", "Ìwọ̀n ojú-iboju", "Iye label"], answer: 0, why: "Ó ń pinnu ìwọ̀n ìgbésẹ̀ kọ̀ọ̀kan." },
      { objective: "O3", q: "Epoch kan ni:", options: ["Neuron kan", "Àwòrán ìdánwò kan", "Lílọ ẹ̀ẹ̀kan la gbogbo dátà ẹ̀kọ́ kọjá", "Ìṣẹ́jú kan ti kíkọ́"], answer: 2, why: "Epoch kan ń bo gbogbo àkójọ ẹ̀kọ́ lẹ́ẹ̀kan." },
      { objective: "O3", q: "A ń lo validation set láti:", options: ["Kọ́ model kíákíá", "Tọ́jú model", "Fi label sí àwọn àwòrán", "Mú overfitting nígbà kíkọ́"], answer: 3, why: "A fi pamọ́ láti ṣàyẹ̀wò model nígbà tí ó ń kẹ́kọ̀ọ́." },
      { objective: "O4", q: "Àwòrán mélòó ni MNIST fi sínú test set rẹ̀?", options: ["28", "784", "10,000", "60,000"], answer: 2, why: "MNIST ní àwòrán ẹ̀kọ́ 60,000 àti àwòrán ìdánwò 10,000." },
      { objective: "O4", q: "Àwòrán MNIST kọ̀ọ̀kan jẹ́:", options: ["Fọ́tò aláwọ̀ ti òpópónà", "Pixel 28 x 28 ti nọ́mbà tí a fi ọwọ́ kọ", "Ohùn kúkúrú", "Gbólóhùn kan"], answer: 1, why: "Àwòrán nọ́mbà kékeré aláwọ̀ eérú." },
      { objective: "O5", q: "Layer Keras wo ni gbogbo neuron rẹ̀ so mọ́ gbogbo input?", options: ["Dense", "Flatten", "Input", "Softmax"], answer: 0, why: "Dense túmọ̀ sí pé gbogbo rẹ̀ so pọ̀ pátápátá." },
      { objective: "O5", q: "Kí ni model.compile ń ṣètò?", options: ["Dátà", "Ìwọ̀n àwòrán", "Optimizer, loss àti metrics", "Test accuracy"], answer: 2, why: "compile ń pinnu bí model ṣe ń kẹ́kọ̀ọ́ àti ohun tí ó ń sọ jáde." },
      { objective: "O5", q: "Àwọn label jẹ́ nọ́mbà lásán bíi 7. Loss wo ló bá a mu?", options: ["sparse_categorical_crossentropy", "accuracy", "relu", "adam"], answer: 0, why: "Loss yẹn ń retí label tí ó jẹ́ odindi nọ́mbà." },
      { objective: "O5", q: "Kí ni validation_split=0.1 nínú fit ń ṣe?", options: ["Ó ń kọ́ model fún epoch 0.1", "Ó ń pa 10% dátà rẹ́", "Ó ń ṣètò learning rate", "Ó ń fi 10% dátà ẹ̀kọ́ pamọ́ láti ṣàyẹ̀wò model"], answer: 3, why: "Ó ń ya ìpín kan sọ́tọ̀ fún validation." },
      { objective: "O6", q: "Ìlà wo ni ó ń wọn accuracy lórí àwòrán tí model kò rí rí?", options: ["model.fit(x_test, y_test)", "model.evaluate(x_test, y_test)", "model.summary()", "plt.imshow(x_test[0])"], answer: 1, why: "evaluate ń dán model wò lórí dátà tí o fún un." },
      { objective: "O6", q: "Irú network wo ni ó ń ṣàyẹ̀wò apá kékeré àwòrán tí ó sì ń ṣe dáadáa gan-an lórí àwòrán?", options: ["Spreadsheet", "Convolutional network (CNN)", "Chatbot tí ń tẹ̀lé òfin", "Neuron kan ṣoṣo"], answer: 1, why: "A ṣe CNN fún àwòrán." },
      { objective: "O6", q: "A ń lo model nọ́mbà rẹ láti ka fọ́ọ̀mù tí a fi ọwọ́ kọ níbi iṣẹ́. Kí ni ìgbésẹ̀ tí ó fi ojúṣe hàn?", options: ["Gbẹ́kẹ̀lé gbogbo ìdáhùn", "Má ṣe dán an wò rárá", "Fi pamọ́ pé a ń lo model", "Jẹ́ kí ènìyàn ṣàyẹ̀wò èsì tí kò dájú, kí o sì kọ́kọ́ dán an wò lórí fọ́ọ̀mù gidi"], answer: 3, why: "Dídánwò ní ayé gidi àti àyẹ̀wò ènìyàn ń mú àṣìṣe model." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
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
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      {
        name: "Dátà ti ṣetán",
        objective: "O4",
        notYet: "A kò gbé MNIST wọlé tàbí a kò ṣe ìwọ̀n àwọn pixel.",
        meets: "A ti gbé MNIST wọlé, a sì ti ṣe ìwọ̀n àwọn pixel sí láàárín 0 àti 1.",
        exceeds: "A ya àwòrán kan, a sì ṣàyẹ̀wò rẹ̀ pẹ̀lú label rẹ̀."
      },
      {
        name: "A kọ́ network, a sì kọ́ ọ ní ẹ̀kọ́",
        objective: "O5",
        notYet: "Model náà kò compile tàbí kò kẹ́kọ̀ọ́.",
        meets: "Network Keras tí ó ní Flatten, Dense layer àárín àti èsì softmax ti neuron 10 ń kẹ́kọ̀ọ́ pẹ̀lú validation split.",
        exceeds: "Ó kọ bí loss àti validation accuracy ṣe yí padà láti epoch kan sí èkejì sílẹ̀."
      },
      {
        name: "Test accuracy àti àsọtẹ́lẹ̀",
        objective: "O6",
        notYet: "Kò sí test accuracy, tàbí a kò fi àsọtẹ́lẹ̀ wé àwọn label tòótọ́.",
        meets: "Ó sọ test accuracy, ó sì fi àsọtẹ́lẹ̀ márùn-ún wé àwọn label tòótọ́.",
        exceeds: "Ó tún wo àsọtẹ́lẹ̀ kan tí ó ṣìnà, ó sì sọ ìdí tí ó fi lè ṣẹlẹ̀."
      },
      {
        name: "A dán àyípadà kan wò",
        objective: "O6",
        notYet: "A kò ṣe àyípadà kankan, tàbí a yí ọ̀pọ̀ nǹkan padà lẹ́ẹ̀kan náà.",
        meets: "Àyípadà kan (neuron púpọ̀ sí i tàbí epoch púpọ̀ sí i), a tún un kọ́ ní ẹ̀kọ́, pẹ̀lú gbólóhùn kan lórí bóyá ó ràn án lọ́wọ́.",
        exceeds: "Ó tún ṣàyẹ̀wò àyípadà náà fún àmì overfitting."
      },
      {
        name: "Ààlà",
        objective: "O6",
        notYet: "Kò dárúkọ ààlà kankan, tàbí ààlà náà kò tọ́.",
        meets: "Ààlà gidi kan, bíi pé ó mọ nọ́mbà kan ṣoṣo tí ó wà ní àárín nìkan.",
        exceeds: "Ó tún sọ bí ènìyàn ṣe máa ṣàyẹ̀wò èsì tí kò dájú nínú iṣẹ́ gidi."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà rubric iṣẹ́ ìkẹyìn",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé wọ́n kọ́ neural network míì tàbí àpẹẹrẹ Keras míì ní ẹ̀kọ́ láàárín ọjọ́ 30 lẹ́yìn ẹ̀kọ́ náà (ìwádìí ìtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n fi notebook náà kún àkójọ iṣẹ́ wọn (portfolio) tàbí tí wọ́n lò ó láti sọ̀rọ̀ nípa AI nínú ìfọ̀rọ̀wánilẹ́nuwò iṣẹ́",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n wọ ètò ìkọ́ṣẹ́, ìwé-ẹ̀rí tàbí iṣẹ́ nínú ẹ̀rọ ìgbàlódé, dátà tàbí AI lẹ́yìn ẹ̀kọ́ náà"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kọ̀mpútà tàbí laptop pẹ̀lú browser wẹ́ẹ̀bù",
      "Àkáǹtì Google ọ̀fẹ́ láti lo Google Colab",
      "Ìwé àti gègé fún ìṣirò neuron pẹ̀lú ọwọ́",
      "Nǹkan bí ìṣẹ́jú 60 sí 75 lápapọ̀, pẹ̀lú àkókò fún kíkọ́ model"
    ],
    facilitatorNotes: [
      "Ẹ ṣe ìṣirò neuron lórí pátákó funfun gẹ́gẹ́ bí ẹgbẹ́ kí ẹ tó kọ kóòdù kankan; ó máa jẹ́ kí àwọn layer tí ó tẹ̀lé rọrùn láti lóye.",
      "Gba MNIST wọlé lẹ́ẹ̀kan ṣáájú kíláàsì láti ṣàyẹ̀wò pé network (íntánẹ́ẹ̀tì) ibẹ̀ gbà á láàyè.",
      "Kíkọ́ model ń gba ìṣẹ́jú díẹ̀; lo àkókò ìdúró náà láti jíròrò àwọn nọ́mbà loss àti accuracy bí wọ́n ṣe ń jáde.",
      "So àwọn àpẹẹrẹ pọ̀ mọ́ iṣẹ́ tí àwọn akẹ́kọ̀ọ́ mọ̀, bíi kíka fọ́ọ̀mù tàbí ṣíṣàyẹ̀wò ẹ̀yà ẹ̀rọ, kí o sì tẹnu mọ́ ọn pé ènìyàn ń ṣàyẹ̀wò èsì tí kò dájú.",
      "Gba àwọn akẹ́kọ̀ọ́ níyànjú láti tọ́jú notebook wọn fún portfolio, kí wọ́n sì máa ṣàlàyé rẹ̀ ní ìṣẹ́jú kan, bí wọ́n ṣe máa ṣe nínú ìfọ̀rọ̀wánilẹ́nuwò iṣẹ́."
    ]
  }
};
