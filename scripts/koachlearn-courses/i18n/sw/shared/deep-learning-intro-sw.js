"use strict";

// Koach Learn course (Swahili translation of shared/deep-learning-intro.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const COLAB = { name: "Google Colab: Maswali Yanayoulizwa Mara kwa Mara", url: "https://research.google.com/colaboratory/faq.html" };
const KERAS_MNIST = { name: "Mfano wa msimbo wa Keras: Simple MNIST convnet", url: "https://keras.io/examples/vision/mnist_convnet/" };

module.exports = {
  id: "deep-learning-intro-sw",
  lang: "sw",
  translationOf: "deep-learning-intro",
  category: "Veterans (military)",
  name: "Utangulizi wa Deep Learning na Mitandao ya Neva (Neural Networks)",
  skills: "Kueleza jinsi mtandao wa neva unavyofanya kazi, Kukokotoa matokeo ya neuroni, Kupakia na kupima upya data ya picha, Kujenga na kufunza mtandao kwa Keras, Kutathmini na kuboresha modeli",
  outcome: "kujenga, kufunza na kujaribu mtandao mdogo wa neva katika Google Colab kwa Keras unaosoma tarakimu zilizoandikwa kwa mkono, kuripoti usahihi wake kwenye picha mpya, kujaribu badiliko moja la kuuboresha, na kueleza modeli inachoweza na isichoweza kufanya.",
  about: [
    "Deep learning ndiyo inayoendesha kufungua simu kwa uso, wasaidizi wa sauti, apps za kutafsiri, zana za picha za kitabibu na kamera zinazokagua vipuri kiwandani. Kozi hii inaeleza jinsi inavyofanya kazi kwa maneno rahisi, kisha unajenga mtandao wa neva unaofanya kazi wewe mwenyewe.",
    "Inawafaa wanajeshi wastaafu wanaoingia katika teknolojia, watu wanaojua Python kidogo, na yeyote aliyemaliza kozi \"Utangulizi wa Machine Learning (Kujifunza kwa Mashine)\". Sura 1 inajenga mawazo kwa mazoezi ya karatasi na kalamu. Sura 2 inahamia Google Colab, tovuti ya bure inayoendesha Python, ambapo unafunza mtandao kwa Keras, maktaba ya bure ya deep learning. Kila mstari wa msimbo umetolewa na kuelezwa.",
    "Kila somo linachukua kama dakika tano na linaisha na kazi ya \"Jaribu sasa\". Jaribio la maarifa linafunga kila sura na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Katika Google Colab, pakia tarakimu za MNIST zilizoandikwa kwa mkono, zipime upya, jenga na ufunze mtandao wa neva wa Keras, ripoti usahihi wake kwenye picha za majaribio, tabiri picha tano za majaribio na uzilinganishe na lebo sahihi, kisha fanya badiliko moja (neuroni zaidi au epoch zaidi), funza tena, na uandike sentensi mbili kuhusu kama lilisaidia na kikomo kimoja cha modeli.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wanajeshi wastaafu na wanajeshi wanaomaliza utumishi wanaoingia katika kazi za teknolojia, data au AI, pamoja na wenzi wa wanajeshi na wanafunzi wengine wazima katika programu za ajira za wastaafu ambao wana uzoefu fulani wa Python.",
    startingPoint: "Wanaweza kuandika na kuendesha programu fupi za Python katika Google Colab na wanajua wazo la msingi la kufunza na kujaribu modeli. Wengi hawajawahi kuona ndani ya mtandao wa neva, kukokotoa neuroni inatoa nini, au kujenga na kufunza mtandao kwa Keras.",
    gap: "Deep learning inaendesha zana za picha, sauti na maandishi katika ulinzi, usafirishaji, afya na viwanda, na kazi nyingi za teknolojia zinatarajia watu wajue jinsi mitandao ya neva inavyojifunza na inavyokosea. Mazoezi ya vitendo yanawasaidia wanafunzi kuizungumzia kwa kujiamini katika usaili, kupima matokeo ya modeli na kuona mahali ambapo mtu lazima abaki akisimamia.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; maneno kama weight, bias, loss na epoch yanaelezwa kwa mifano midogo iliyofanyiwa kazi",
      "Vifaa: kompyuta au laptop yenye kivinjari cha wavuti",
      "Akaunti na gharama: akaunti ya Google ya bure kwa Google Colab; Keras na data ya MNIST ni bure; rasilimali za bure za Colab zina kikomo na zinaweza kubadilika",
      "Muda: kama dakika 5 hadi 6 kwa somo pamoja na mazoezi na muda wa kufunza, kama dakika 60 hadi 75 kwa jumla",
      "Hesabu: kuzidisha na kujumlisha namba ndogo kwa mkono; hakuna calculus inayohitajika"
    ],
    prerequisites: "Utangulizi wa Kuandika Programu kwa Python; \"Utangulizi wa Machine Learning (Kujifunza kwa Mashine)\" unasaidia."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Bila maelezo yaliyoandikwa", action: "kueleza deep learning ni nini na kutaja aina za data inazofanya nazo kazi vizuri zaidi", standard: "ukitaja tabaka zinazojifunza ruwaza kutoka kwa mifano na angalau aina mbili za data zinazofaa" },
    { id: "O2", condition: "Ukipewa ingizo, weights, bias na ReLU za neuroni", action: "kukokotoa matokeo ya neuroni kwa mkono", standard: "ukipata jibu sahihi kila wakati, hata ReLU inapotoa 0" },
    { id: "O3", condition: "Ukipewa kumbukumbu ya mafunzo yenye loss na usahihi", action: "kueleza jinsi mafunzo yanavyobadilisha weights na kutambua dalili za overfitting", standard: "ukitumia maneno loss, learning rate, epoch na validation kwa usahihi" },
    { id: "O4", condition: "Katika Google Colab ukitumia Keras", action: "kupakia tarakimu za MNIST, kupima upya pikseli na kuonyesha picha moja pamoja na lebo yake", standard: "pikseli zikiwa kati ya 0 na 1 na lebo ikilingana na picha" },
    { id: "O5", condition: "Ukipewa data ya MNIST iliyoandaliwa", action: "kujenga, ku-compile na kufunza mtandao wa neva wa Keras", standard: "msimbo ukiendeshwa, validation split ikitumika na loss ikishuka katika epoch zote" },
    { id: "O6", condition: "Ukipewa mtandao uliofunzwa", action: "kupima usahihi wake wa majaribio, kutabiri picha mpya, kujaribu badiliko moja na kueleza vikomo vyake", standard: "ukibadilisha kitu kimoja kwa wakati na kutaja angalau kikomo kimoja halisi" }
  ],
  chapters: [
    {
      name: "Sura 1: Jinsi mitandao ya neva inavyofanya kazi",
      lessons: [
        {
          objectives: ["O1"],
          title: "Deep learning ni nini",
          minutes: 4,
          goal: "Eleza deep learning kwa maneno yako mwenyewe na utaje inapotumika.",
          text: [
            "Deep learning ni aina ya machine learning inayotumia mitandao ya neva: vipimo vingi vidogo vya hesabu, vinavyoitwa neuroni, vilivyounganishwa katika tabaka. \"Deep\" (kina) maana yake kuna tabaka nyingi. Kila tabaka linatafuta ruwaza katika matokeo ya tabaka lililotangulia.",
            "Kwa picha, tabaka za mwanzo zinaona vitu rahisi kama kingo, tabaka za kati zinaona maumbo, na tabaka za mwisho zinaona vitu kamili kama uso au tarakimu. Hakuna anayeandika kanuni hizo: mtandao unazijifunza kutoka kwa mifano mingi yenye lebo.",
            "Inafanya kazi vizuri zaidi kunapokuwa na data nyingi, iliyochanganyika na tajiri: picha, sauti, usemi na maandishi marefu. Inahitaji data na nguvu ya kompyuta zaidi kuliko modeli rahisi, ndiyo maana ilienea baada ya seti kubwa za data na chipu za haraka za michoro (GPU) kuwa za kawaida."
          ],
          words: [["Deep learning", "machine learning kwa mitandao ya neva yenye tabaka nyingi."], ["Mtandao wa neva (neural network)", "modeli iliyotengenezwa kwa vipimo vingi vidogo (neuroni) vilivyounganishwa katika tabaka."], ["Tabaka (layer)", "kundi la neuroni zote zinazopokea ingizo kutoka tabaka lililotangulia."], ["GPU", "chipu ya michoro inayofanya hesabu nyingi kwa wakati mmoja, inayotumika kufunza mitandao haraka."]],
          slides: [
            { title: "Deep learning ni", bullets: ["Machine learning kwa mitandao ya neva", "Tabaka nyingi za vipimo vidogo vya hesabu", "\"Deep\" = tabaka nyingi"] },
            { title: "Tabaka zinatafuta ruwaza", bullets: ["Tabaka za mwanzo: kingo", "Tabaka za kati: maumbo", "Tabaka za mwisho: vitu kamili"] },
            { title: "Inapong'ara", bullets: ["Picha, sauti, usemi na maandishi", "Data nyingi", "Inahitaji nguvu zaidi ya kompyuta (GPU)"] }
          ],
          tryIt: "Andika zana nne ulizotumia ambazo huenda zinatumia deep learning (kwa mfano kufungua kwa uso, kuandika kwa sauti, kutafuta picha, kutafsiri). Kwa kila moja, andika inajifunza kutoka aina gani ya data: picha, sauti au maandishi.",
          youCanNow: "kueleza deep learning ni nini, kwa nini inatumia tabaka, na inapotumika.",
          quickCheck: [
            { objective: "O1", q: "Neuroni katika mtandao wa neva ni nini?", options: ["Seli za ubongo zilizonakiliwa kwenye kompyuta", "Chipu za michoro", "Vipimo vidogo vya hesabu vilivyounganishwa katika tabaka", "Picha zenye lebo"], answer: 2, why: "Mtandao wa neva umetengenezwa kwa vipimo vingi vidogo vya hesabu, vinavyoitwa neuroni, katika tabaka." },
            { objective: "O1", q: "Kikosi chako kinataka kupanga maelfu ya jumbe za redio zilizorekodiwa kulingana na msemaji. Ungefikiria deep learning?", options: ["Ndiyo; inafanya kazi vizuri zaidi na data nyingi tajiri kama sauti", "Hapana; deep learning haiwezi kutumia sauti", "Hapana; inafanya kazi tu na namba katika jedwali", "Tu kama kuna rekodi chini ya kumi"], answer: 0, why: "Deep learning inafanya kazi vizuri zaidi na data nyingi, tajiri na iliyochanganyika kama picha, sauti na maandishi." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ndani ya neuroni: weights, bias na activation",
          minutes: 6,
          goal: "Kokotoa kwa mkono matokeo ya neuroni moja.",
          text: [
            "Neuroni inapokea namba kadhaa, inazidisha kila moja kwa weight (uzito), inazijumlisha, na inaongeza namba moja zaidi inayoitwa bias. Weights zinasema kila ingizo lina umuhimu kiasi gani; mtandao unazijifunza.",
            "Kisha inatumia activation function, inayoamua nini kipitishwe. Inayotumika zaidi, ReLU, ni rahisi: jumla ikiwa chini ya sifuri, toa 0; vinginevyo toa jumla.",
            "Mfano: ingizo 2 na 3, weights 0.5 na -1, bias 1. Jumla = 2 x 0.5 + 3 x (-1) + 1 = 1 - 3 + 1 = -1. ReLU inageuza -1 kuwa 0, kwa hiyo neuroni hii inatoa 0. Ingizo likiwa 2 na 1 badala yake: 1 - 1 + 1 = 1, kwa hiyo inatoa 1.",
            "Mtandao una maelfu ya hizi. Tabaka la mwisho mara nyingi linatumia softmax, inayogeuza matokeo yake kuwa nafasi (uwezekano) zinazojumlika kuwa asilimia 100, moja kwa kila jibu linalowezekana."
          ],
          steps: ["Zidisha kila ingizo kwa weight yake.", "Jumlisha matokeo.", "Ongeza bias.", "Tumia activation: kwa ReLU, hasi inakuwa 0.", "Namba hiyo ndiyo matokeo ya neuroni."],
          words: [["Neuroni", "kipimo kidogo kinachozidisha ingizo kwa weights, kuongeza bias na kutumia activation."], ["Weight (uzito)", "namba ambayo mtandao unajifunza inayosema ingizo lina umuhimu kiasi gani."], ["Bias", "namba ya ziada inayoongezwa kwenye jumla, nayo pia inajifunzwa."], ["Activation function", "kanuni inayoamua neuroni inapitisha nini."], ["ReLU", "activation: jumla hasi zinakuwa 0, nyingine zinabaki zilivyo."], ["Softmax", "inageuza matokeo ya tabaka la mwisho kuwa nafasi zinazojumlika kuwa 1."]],
          slides: [
            { title: "Neuroni moja", bullets: ["Ingizo x weights, zikijumlishwa", "Ongeza bias", "Kisha activation function"] },
            { title: "ReLU", bullets: ["Chini ya sifuri: toa 0", "Sifuri au zaidi: toa jumla"] },
            { title: "Mfano uliofanyiwa kazi", bullets: ["Ingizo 2, 3; weights 0.5, -1; bias 1", "2 x 0.5 + 3 x (-1) + 1 = -1", "ReLU(-1) = 0"] },
            { title: "Tabaka la mwisho", bullets: ["Softmax inatoa nafasi kwa kila jibu", "Nafasi zinajumlika kuwa 100%"] }
          ],
          tryIt: "Kokotoa matokeo ya neuroni kwa mkono: ingizo 4 na 1, weights 0.5 na 2, bias -3, activation ReLU. Kisha badilisha bias kuwa -6 na ukokotoe tena. (Majibu: 1, kisha 0.)",
          youCanNow: "kukokotoa matokeo ya neuroni kutoka kwa ingizo, weights, bias na activation yake.",
          quickCheck: [
            { objective: "O2", q: "Katika neuroni, bias ni nini?", options: ["Ingizo lenye thamani kubwa zaidi", "Activation function", "Kanuni inayosema modeli haina haki", "Namba moja zaidi inayoongezwa baada ya ingizo zenye weights kujumlishwa"], answer: 3, why: "Neuroni inaongeza bias kwenye jumla ya weights kabla ya activation." },
            { objective: "O2", q: "Ingizo 4 na 1, weights 0.5 na 2, bias -1, ReLU. Ungekokotoa matokeo gani?", options: ["0", "3", "5", "-1"], answer: 1, why: "4 x 0.5 + 1 x 2 - 1 = 3, na ReLU inabakiza jumla chanya." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Jinsi mtandao unavyojifunza: loss, epoch na hatua ndogo",
          minutes: 5,
          goal: "Eleza jinsi mafunzo yanavyobadilisha weights ili kufanya makosa machache.",
          text: [
            "Mwanzoni, weights ni za kubahatisha, kwa hiyo makisio ya mtandao ni mabaya. Mafunzo yanarekebisha hilo. Mtandao unakisia, na loss function inapima jinsi ulivyokosea: loss kubwa maana yake umekosea sana, loss ndogo maana yake umekaribia.",
            "Kisha unakokotoa, kwa kila weight, upande gani ungepunguza loss (hatua hii inaitwa backpropagation) na unasogeza kila weight hatua ndogo upande huo (gradient descent). Ukubwa wa hatua ni learning rate: ikiwa kubwa mno inapita lengo, ikiwa ndogo mno ni polepole sana.",
            "Kupita mara moja katika mifano yote ya mafunzo ni epoch moja. Mafunzo kwa kawaida yanachukua epoch kadhaa. Unatazama loss ikishuka na usahihi ukipanda, na unakagua validation set (data iliyowekwa kando isitumike katika mafunzo) ili kugundua overfitting: usahihi wa mafunzo ukiendelea kupanda lakini usahihi wa validation ukishuka, simama."
          ],
          steps: ["Anza na weights za kubahatisha.", "Kisia kwenye mifano ya mafunzo.", "Pima kosa kwa loss function.", "Sogeza kila weight hatua ndogo ili kupunguza loss.", "Rudia kwa epoch kadhaa, ukitazama usahihi wa validation."],
          words: [["Loss", "namba inayopima jinsi makisio ya mtandao yalivyo na makosa."], ["Backpropagation", "kukokotoa jinsi kila weight ilivyoathiri loss."], ["Gradient descent", "kusogeza weights kwa hatua ndogo ili kupunguza loss."], ["Learning rate", "ukubwa wa kila hatua."], ["Epoch", "kupita mara moja kamili katika data ya mafunzo."], ["Validation set", "data iliyowekwa kando wakati wa mafunzo ili kukagua overfitting."]],
          slides: [
            { title: "Kisia, pima, rekebisha", bullets: ["Mwanzoni weights ni za kubahatisha", "Loss inapima jinsi ulivyokosea", "Rekebisha weights ili kupunguza loss"] },
            { title: "Hatua ndogo", bullets: ["Backpropagation inapata upande", "Gradient descent inapiga hatua", "Learning rate inaweka ukubwa wa hatua"] },
            { title: "Epoch na validation", bullets: ["Epoch: kupita mara moja katika data", "Tazama usahihi wa validation", "Mafunzo juu, validation chini = overfitting"] }
          ],
          tryIt: "Cheza \"kisia namba\" na rafiki au peke yako: chagua namba iliyofichwa kati ya 1 na 100, kisia, pata \"juu mno\" au \"chini mno\", na badilisha kisio lako kwa hatua ndogo zaidi kila mara. Andika sehemu gani ya mchezo ni kama loss, ipi ni kama learning rate, na ilichukua mizunguko (epoch) mingapi.",
          youCanNow: "kueleza loss, backpropagation, gradient descent, learning rate, epoch na overfitting kwa maneno rahisi.",
          quickCheck: [
            { objective: "O3", q: "Learning rate ni nini?", options: ["Idadi ya picha katika seti ya data", "Ukubwa wa kila hatua ambayo weights zinasogea", "Idadi ya tabaka", "Usahihi wa mwisho"], answer: 1, why: "Hatua kubwa mno inapita lengo; hatua ndogo mno ni polepole sana." },
            { objective: "O3", q: "Baada ya epoch 4, usahihi wa validation unaanza kushuka wakati usahihi wa mafunzo unaendelea kupanda. Ungefanya nini?", options: ["Funza kwa epoch 50 zaidi", "Futa validation set", "Simamisha mafunzo; modeli inaanza overfitting", "Ongeza learning rate sana"], answer: 2, why: "Usahihi wa validation ukishuka huku usahihi wa mafunzo ukipanda ni dalili ya overfitting." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Jinsi mitandao ya neva inavyofanya kazi",
        questions: [
          { objective: "O1", q: "\"Deep\" ina maana gani katika deep learning?", options: ["Inatumia umeme mwingi", "Inafanya kazi chini ya maji tu", "Mtandao una tabaka nyingi", "Ni vigumu kuieleza"], answer: 2, why: "Deep maana yake tabaka nyingi za neuroni." },
          { objective: "O2", q: "Jumla ya neuroni ni -2. Kwa ReLU, inatoa nini?", options: ["-2", "0", "1", "2"], answer: 1, why: "ReLU inageuza jumla yoyote hasi kuwa 0." },
          { objective: "O2", q: "Ingizo 1 na 2, weights 3 na 1, bias 0, ReLU. Matokeo ni nini?", options: ["0", "3", "5", "6"], answer: 2, why: "1 x 3 + 2 x 1 + 0 = 5, na 5 si hasi." },
          { objective: "O3", q: "Loss function inapima nini?", options: ["Kuna tabaka ngapi", "Jinsi makisio ya mtandao yalivyo na makosa", "Kompyuta ina kasi kiasi gani", "Una data kiasi gani"], answer: 1, why: "Loss ni ukubwa wa kosa." },
          { objective: "O3", q: "Usahihi wa mafunzo unaendelea kupanda lakini usahihi wa validation unashuka. Nini kinatokea?", options: ["Mtandao ni kamili", "Overfitting", "Learning rate ni sifuri", "Data haipo"], answer: 1, why: "Kufanya vizuri zaidi kwenye data ya mafunzo lakini vibaya zaidi kwenye data iliyowekwa kando ni overfitting." }
        ]
      }
    },
    {
      name: "Sura 2: Kujenga mtandao wa neva katika Colab",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kupakia na kuandaa data ya picha",
          minutes: 5,
          goal: "Pakia tarakimu za MNIST katika Colab, zipime upya, na utazame picha moja.",
          text: [
            "MNIST ni seti maarufu ya data ya mazoezi: picha ndogo 70,000 za tarakimu 0 hadi 9 zilizoandikwa kwa mkono, kila moja pikseli 28 kwa 28, na tarakimu sahihi kama lebo. Keras, maktaba ya bure ya deep learning inayofanya kazi katika Google Colab, inaweza kuipakia kwa mstari mmoja, ikiwa tayari imegawanywa kuwa picha 60,000 za mafunzo na 10,000 za majaribio.",
            "Kila pikseli ni namba kutoka 0 (nyeusi) hadi 255 (nyeupe). Mitandao inajifunza vizuri zaidi kwa namba ndogo, kwa hiyo unazipima upya ziwe kati ya 0 na 1 kwa kugawanya kwa 255. Hii inaitwa normalizing.",
            "Tazama data yako kabla ya kufunza. matplotlib, maktaba ya kuchora, inaweza kuchora picha moja ili ukague kwamba lebo inalingana na picha."
          ],
          steps: ["Katika notebook mpya ya Colab endesha: import keras", "Pakia: (x_train, y_train), (x_test, y_test) = keras.datasets.mnist.load_data()", "Pima upya: x_train = x_train / 255.0 na x_test = x_test / 255.0", "Kagua ukubwa: print(x_train.shape, x_test.shape)", "Chora moja: import matplotlib.pyplot as plt; plt.imshow(x_train[0], cmap=\"gray\"); plt.show(); print(y_train[0])"],
          words: [["MNIST", "seti ya data ya mazoezi yenye picha 70,000 za tarakimu zilizoandikwa kwa mkono."], ["Keras", "maktaba ya bure ya Python, rahisi kwa wanaoanza, ya kujenga mitandao ya neva."], ["Pikseli", "nukta moja ya picha, iliyohifadhiwa kama namba."], ["Normalizing", "kupima upya namba ziwe katika kiwango kidogo kama 0 hadi 1 ili mafunzo yafanye kazi vizuri zaidi."], ["matplotlib", "maktaba ya Python ya kuchora chati na picha."]],
          slides: [
            { title: "Tarakimu za MNIST", bullets: ["Tarakimu 70,000 zilizoandikwa kwa mkono, 0 hadi 9", "Kila moja pikseli 28 x 28", "60,000 za mafunzo, 10,000 za majaribio"] },
            { title: "Pima upya pikseli", bullets: ["Pikseli zinaanzia 0 hadi 255", "Gawanya kwa 255.0 kupata 0 hadi 1", "Namba ndogo zinafunza vizuri zaidi"] },
            { title: "Tazama kabla ya kufunza", bullets: ["plt.imshow(x_train[0], cmap=\"gray\")", "Chapisha lebo ukague kama inalingana"] }
          ],
          sources: [KERAS_MNIST, COLAB],
          tryIt: "Pakia na upime upya MNIST katika Colab. Chapisha ukubwa (shape) wa seti za mafunzo na majaribio. Chora picha zilizo katika nafasi 0, 1 na 2 na uchapishe lebo zake ukague kama zinalingana.",
          youCanNow: "kupakia seti ya data ya picha, kuifanyia normalizing na kuikagua kwa macho.",
          quickCheck: [
            { objective: "O4", q: "Kufanyia normalizing pikseli za MNIST kuna maana gani hapa?", options: ["Kuzipima upya ziwe kati ya 0 na 1 kwa kugawanya kwa 255", "Kugeuza picha juu chini", "Kufuta pikseli nyeusi", "Kufanya kila picha kuwa tarakimu 0"], answer: 0, why: "Kugawanya kwa 255 kunageuza 0 hadi 255 kuwa 0 hadi 1, jambo linalosaidia kujifunza." },
            { objective: "O4", q: "Umepakia MNIST na unataka kuhakikisha lebo ni sahihi. Ungefanya nini?", options: ["Funza kwanza na ukague baadaye", "Gawanya lebo kwa 255", "Futa seti ya majaribio", "Chora picha moja kwa matplotlib na ukague inalingana na lebo yake"], answer: 3, why: "Tazama data yako kabla ya kufunza ili kukagua kwamba lebo inalingana na picha." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kujenga na kufunza mtandao",
          minutes: 6,
          goal: "Jenga mtandao wa Keras, u-compile na uufunze kwa epoch chache.",
          text: [
            "Modeli ya Sequential ni mrundikano wa tabaka. Yetu: keras.Input(shape=(28, 28)) inasema kinachoingia. layers.Flatten() inageuza kila picha ya 28 x 28 kuwa safu moja ya namba 784. layers.Dense(128, activation=\"relu\") ni tabaka la neuroni 128. layers.Dense(10, activation=\"softmax\") ni matokeo: nafasi moja kwa kila tarakimu 0 hadi 9.",
            "compile inaweka jinsi inavyojifunza: optimizer=\"adam\" (aina maarufu ya gradient descent), loss=\"sparse_categorical_crossentropy\" (loss sahihi lebo zinapokuwa namba za kawaida kama 7), na metrics=[\"accuracy\"] ili uone ni mara ngapi iko sahihi.",
            "fit inaifunza: model.fit(x_train, y_train, epochs=5, validation_split=0.1). validation_split=0.1 inaweka kando asilimia 10 ya data ya mafunzo ili kukagua overfitting. Kila epoch inachapisha loss, accuracy, val_loss na val_accuracy. Tazama loss ikishuka."
          ],
          steps: ["from keras import layers", "model = keras.Sequential([keras.Input(shape=(28, 28)), layers.Flatten(), layers.Dense(128, activation=\"relu\"), layers.Dense(10, activation=\"softmax\")])", "model.compile(optimizer=\"adam\", loss=\"sparse_categorical_crossentropy\", metrics=[\"accuracy\"])", "model.summary() kuona tabaka.", "model.fit(x_train, y_train, epochs=5, validation_split=0.1)"],
          words: [["Modeli ya Sequential", "mtandao uliotengenezwa kwa tabaka zilizorundikwa moja baada ya jingine."], ["Flatten", "tabaka linalogeuza gridi ya pikseli kuwa safu moja ndefu."], ["Tabaka la Dense", "tabaka ambalo kila neuroni imeunganishwa na kila ingizo."], ["Optimizer", "njia inayosasisha weights; adam ni moja inayotumika sana."], ["compile", "inaweka optimizer, loss na metrics kabla ya mafunzo."], ["validation_split", "sehemu ya data ya mafunzo inayowekwa kando ili kukagua overfitting."]],
          slides: [
            { title: "Tabaka", bullets: ["Input: picha ya 28 x 28", "Flatten: safu moja ya namba 784", "Dense 128, relu: tabaka lililofichwa", "Dense 10, softmax: nafasi moja kwa kila tarakimu"] },
            { title: "compile", bullets: ["optimizer=\"adam\"", "loss=\"sparse_categorical_crossentropy\"", "metrics=[\"accuracy\"]"] },
            { title: "fit", bullets: ["epochs=5: kupita mara tano katika data", "validation_split=0.1 inakagua overfitting", "Tazama loss ikishuka na usahihi ukipanda"] }
          ],
          sources: [KERAS_MNIST],
          tryIt: "Jenga, u-compile na ufunze mtandao kwa epoch 5. Andika accuracy na val_accuracy baada ya epoch 1 na baada ya epoch 5. Je, zote mbili zilipanda?",
          youCanNow: "kujenga mtandao wa neva katika Keras, ku-compile na kuufunza huku ukitazama overfitting.",
          quickCheck: [
            { objective: "O5", q: "Modeli ya Sequential katika Keras ni nini?", options: ["Orodha ya picha", "Kumbukumbu ya mafunzo", "Mrundikano wa tabaka, moja baada ya jingine", "Aina ya loss function"], answer: 2, why: "Sequential inarundika tabaka kwa mpangilio kutoka ingizo hadi matokeo." },
            { objective: "O5", q: "Unataka kuona wakati wa mafunzo kama modeli inaanza overfitting. Ungeongeza nini kwenye fit?", options: ["validation_split=0.1", "epochs=0", "activation=\"softmax\"", "Flatten()"], answer: 0, why: "validation_split inaweka kando sehemu ya data ya mafunzo ili kukagua modeli kila epoch." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kujaribu, kutabiri na kuboresha",
          minutes: 6,
          goal: "Pima usahihi wa majaribio, tabiri picha halisi, jaribu uboreshaji mmoja na utaje vikomo vya modeli.",
          text: [
            "Jaribio la kweli ni data ambayo mtandao haujawahi kuiona: model.evaluate(x_test, y_test) inachapisha loss na usahihi wa majaribio. Mtandao mdogo kama wetu kwa kawaida unapata zaidi ya asilimia 90 kwenye MNIST.",
            "Ili kutabiri, upe picha: probs = model.predict(x_test[:5]) inatoa nafasi 10 kwa kila picha. probs.argmax(axis=1) inachagua tarakimu yenye nafasi kubwa zaidi. Zilinganishe na y_test[:5].",
            "Ili kuuboresha, badilisha kitu kimoja kwa wakati na ujaribu tena: neuroni zaidi (Dense(256)), epoch zaidi, au mtandao wa convolutional (tabaka zinazochunguza vipande vidogo vya picha), unaofikia kama asilimia 99 katika mfano rasmi wa Keras.",
            "Jua vikomo: unajua tarakimu moja moja zilizo katikati kama MNIST tu. Picha ya alama ya barabarani au herufi bado itapewa tarakimu. Katika kazi halisi, kama kusoma fomu au kukagua vipuri, mtu anakagua matokeo yenye uhakika mdogo, na modeli inajaribiwa kwa data kutoka mahali halisi itakapotumika."
          ],
          steps: ["Endesha model.evaluate(x_test, y_test) na uandike usahihi wa majaribio.", "probs = model.predict(x_test[:5])", "print(probs.argmax(axis=1), y_test[:5]) kulinganisha makisio na ukweli.", "Badilisha kitu kimoja (neuroni au epoch), jenga upya, funza upya na utathmini upya.", "Andika kama lilisaidia na kikomo kimoja."],
          words: [["evaluate", "inajaribu modeli iliyofunzwa kwa data na kuripoti loss na usahihi."], ["argmax", "inachagua nafasi ya namba kubwa zaidi: hapa, tarakimu inayowezekana zaidi."], ["Mtandao wa convolutional (CNN)", "mtandao wenye tabaka zinazochunguza vipande vidogo vya picha; hodari sana kwa picha."], ["Hyperparameter", "mpangilio unaouchagua wewe, kama neuroni au epoch, si ule ambao mtandao unajifunza."]],
          slides: [
            { title: "Jaribu kwa data isiyoonekana", bullets: ["model.evaluate(x_test, y_test)", "Inaripoti loss na usahihi wa majaribio"] },
            { title: "Fanya utabiri", bullets: ["probs = model.predict(x_test[:5])", "probs.argmax(axis=1) = tarakimu zilizokisiwa", "Linganisha na y_test[:5]"] },
            { title: "Boresha kitu kimoja kwa wakati", bullets: ["Neuroni zaidi au epoch zaidi", "Au mtandao wa convolutional", "Jaribu tena baada ya kila badiliko"] },
            { title: "Jua vikomo", bullets: ["Inajua tarakimu moja moja kama MNIST tu", "Jaribu kwa data halisi ya mahali itakapotumika", "Mtu anakagua matokeo yasiyo na uhakika"] }
          ],
          sources: [KERAS_MNIST],
          tryIt: "Kazi ya mwisho: tathmini mtandao wako kwenye seti ya majaribio, tabiri picha tano za kwanza za majaribio na uzilinganishe na lebo sahihi, kisha badilisha Dense(128) kuwa Dense(256) au epoch kuwa 10, funza upya na utathmini upya. Andika sentensi mbili: je, badiliko lilisaidia, na ni kikomo kipi kimoja cha modeli hii?",
          youCanNow: "kufunza, kujaribu, kutumia na kuboresha mtandao wa neva, na kueleza mahali unapopaswa na usipopaswa kuaminiwa.",
          quickCheck: [
            { objective: "O6", q: "model.predict(x_test[:5]) inakupa nini?", options: ["Usahihi wa majaribio", "Nafasi 10 kwa kila moja ya picha 5", "Lebo 5 sahihi", "Modeli mpya iliyofunzwa"], answer: 1, why: "predict inarudisha nafasi kwa kila tarakimu kwa kila picha; argmax inachagua inayowezekana zaidi." },
            { objective: "O6", q: "Unataka kujua kama epoch zaidi zinasaidia. Ungefanya nini?", options: ["Badilisha epoch, neuroni na tabaka zote kwa pamoja", "Pima kwa usahihi wa mafunzo tu", "Ruka seti ya majaribio safari hii", "Badilisha idadi ya epoch tu, funza upya na ulinganishe usahihi wa majaribio"], answer: 3, why: "Badilisha kitu kimoja kwa wakati ili ujue nini kilisababisha tofauti." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kujenga mtandao wa neva katika Colab",
        questions: [
          { objective: "O4", q: "Kwa nini ugawanye pikseli za MNIST kwa 255.0?", options: ["Kufanya picha kuwa kubwa zaidi", "Kufuta pikseli nyeusi", "Kubadilisha lebo", "Kuzipima upya ziwe kati ya 0 na 1 ili mafunzo yafanye kazi vizuri zaidi"], answer: 3, why: "Normalizing kuwa 0-1 inasaidia mtandao kujifunza." },
          { objective: "O5", q: "layers.Flatten() inafanya nini?", options: ["Inageuza gridi ya 28 x 28 kuwa safu moja ya namba 784", "Inaongeza mwangaza wa picha", "Inaongeza neuroni 10", "Inagawanya data"], answer: 0, why: "Flatten inabadilisha gridi kuwa safu kwa ajili ya tabaka za Dense." },
          { objective: "O5", q: "Kwa nini tabaka la mwisho lina neuroni 10 zenye softmax?", options: ["Kuna epoch 10", "Daima ni 10", "Kuna tarakimu 10 zinazowezekana, na softmax inatoa nafasi kwa kila moja", "Kuokoa kumbukumbu"], answer: 2, why: "Tokeo moja kwa kila tarakimu, kama nafasi zinazojumlika kuwa 1." },
          { objective: "O6", q: "Mstari upi unatoa tarakimu inayowezekana zaidi kwa kila picha?", options: ["probs.sum()", "model.fit(probs)", "y_test.argmax()", "probs.argmax(axis=1)"], answer: 3, why: "argmax inachagua nafasi kubwa zaidi." },
          { objective: "O6", q: "Unataka kujua kama Dense(256) ni bora kuliko Dense(128). Unafanya nini?", options: ["Badilisha vitu vitano kwa pamoja", "Tazama loss ya mafunzo tu", "Ibadilishe, funza upya, na ulinganishe usahihi wa majaribio", "Kisia"], answer: 2, why: "Badilisha kitu kimoja na ujaribu tena kwa seti ileile ya majaribio." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Utangulizi wa Deep Learning na Mitandao ya Neva (Neural Networks)",
    questions: [
      { objective: "O1", q: "Deep learning ni:", options: ["Njia ya kuhifadhi mafaili", "Machine learning kwa mitandao ya neva yenye tabaka nyingi", "Aina ya spreadsheet", "Kujifunza ukiwa umelala"], answer: 1, why: "Inatumia mitandao yenye kina (tabaka nyingi)." },
      { objective: "O1", q: "Deep learning ni hodari hasa kwa kazi gani?", options: ["Kutambua nyuso katika picha", "Kujumlisha namba mbili", "Kupanga orodha fupi", "Kuchapisha ukurasa"], answer: 0, why: "Picha, sauti na maandishi ndizo nguvu zake." },
      { objective: "O1", q: "Katika mtandao wa picha, tabaka za mwanzo kwa kawaida zinaona:", options: ["Nyuso kamili", "Jina la faili", "Kingo rahisi", "Lebo"], answer: 2, why: "Tabaka zinajenga kutoka kingo hadi maumbo hadi vitu." },
      { objective: "O1", q: "Kwa nini deep learning ilienea katika miaka ya karibuni?", options: ["Seti kubwa za data na GPU za haraka", "Skrini ndogo zaidi", "Kompyuta chache zaidi", "Kibodi mpya"], answer: 0, why: "Inahitaji data nyingi na nguvu ya kompyuta." },
      { objective: "O2", q: "Weight inafanya nini katika neuroni?", options: ["Inahesabu epoch", "Inahifadhi lebo", "Inachora picha", "Inaweka kiasi cha umuhimu wa ingizo"], answer: 3, why: "Weights zinapima kila ingizo." },
      { objective: "O2", q: "Ingizo 2 na 2, weights 1 na -2, bias 1, ReLU. Matokeo?", options: ["-1", "0", "1", "3"], answer: 1, why: "2 - 4 + 1 = -1, na ReLU inageuza -1 kuwa 0." },
      { objective: "O2", q: "Softmax katika tabaka la mwisho inatoa:", options: ["Idadi ya tabaka", "Nafasi kwa kila jibu zinazojumlika kuwa 100%", "Loss", "Namba ya kubahatisha"], answer: 1, why: "Softmax inageuza matokeo kuwa uwezekano." },
      { objective: "O3", q: "Loss ikishuka wakati wa mafunzo ina maana:", options: ["Data inapungua", "Kompyuta inakuwa polepole", "Hakika ni overfitting", "Makisio ya mtandao yanapungua makosa"], answer: 3, why: "Loss ndogo zaidi maana yake makosa madogo zaidi." },
      { objective: "O3", q: "Learning rate inadhibiti:", options: ["Ukubwa wa kila hatua ya kusasisha weights", "Kuna picha ngapi", "Ukubwa wa skrini", "Idadi ya lebo"], answer: 0, why: "Inaweka ukubwa wa kila hatua." },
      { objective: "O3", q: "Epoch moja ni:", options: ["Neuroni moja", "Picha moja ya majaribio", "Kupita mara moja katika data yote ya mafunzo", "Dakika moja ya mafunzo"], answer: 2, why: "Epoch inapitia seti nzima ya mafunzo mara moja." },
      { objective: "O3", q: "Validation set inatumika:", options: ["Kufunza haraka zaidi", "Kuhifadhi modeli", "Kuweka lebo kwenye picha", "Kugundua overfitting wakati wa mafunzo"], answer: 3, why: "Inawekwa kando ili kukagua modeli inapofunzwa." },
      { objective: "O4", q: "MNIST inaweka picha ngapi katika seti yake ya majaribio?", options: ["28", "784", "10,000", "60,000"], answer: 2, why: "MNIST ina picha 60,000 za mafunzo na 10,000 za majaribio." },
      { objective: "O4", q: "Kila picha ya MNIST ni:", options: ["Picha ya rangi ya mtaa", "Pikseli 28 x 28 za tarakimu iliyoandikwa kwa mkono", "Kipande cha sauti", "Sentensi"], answer: 1, why: "Picha ndogo za kijivu za tarakimu." },
      { objective: "O5", q: "Tabaka lipi la Keras lina kila neuroni imeunganishwa na kila ingizo?", options: ["Dense", "Flatten", "Input", "Softmax"], answer: 0, why: "Dense maana yake imeunganishwa kikamilifu." },
      { objective: "O5", q: "model.compile inaweka nini?", options: ["Seti ya data", "Ukubwa wa picha", "Optimizer, loss na metrics", "Usahihi wa majaribio"], answer: 2, why: "compile inaweka jinsi modeli inavyojifunza na inachoripoti." },
      { objective: "O5", q: "Lebo ni namba za kawaida kama 7. Loss ipi inafaa?", options: ["sparse_categorical_crossentropy", "accuracy", "relu", "adam"], answer: 0, why: "Loss hiyo inatarajia lebo za namba kamili." },
      { objective: "O5", q: "validation_split=0.1 katika fit inafanya nini?", options: ["Inafunza kwa epoch 0.1", "Inafuta 10% ya data", "Inaweka learning rate", "Inaweka kando 10% ya data ya mafunzo ili kukagua modeli"], answer: 3, why: "Inatenga sehemu ya validation." },
      { objective: "O6", q: "Mstari upi unapima usahihi kwenye picha zisizoonekana?", options: ["model.fit(x_test, y_test)", "model.evaluate(x_test, y_test)", "model.summary()", "plt.imshow(x_test[0])"], answer: 1, why: "evaluate inajaribu kwa data unayoipa." },
      { objective: "O6", q: "Ni aina gani ya mtandao inayochunguza vipande vidogo vya picha na kufanya vizuri sana kwa picha?", options: ["Spreadsheet", "Mtandao wa convolutional (CNN)", "Chatbot inayofuata kanuni", "Neuroni moja"], answer: 1, why: "CNN zimetengenezwa kwa ajili ya picha." },
      { objective: "O6", q: "Modeli yako ya tarakimu inatumika kusoma fomu zilizoandikwa kwa mkono kazini. Hatua ipi ni ya kuwajibika?", options: ["Kuamini kila jibu", "Kutoijaribu kamwe", "Kuficha kwamba modeli inatumika", "Mtu akague matokeo yenye uhakika mdogo na uijaribu kwanza kwa fomu halisi"], answer: 3, why: "Majaribio ya ulimwengu halisi na ukaguzi wa binadamu vinagundua makosa ya modeli." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
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
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Data imeandaliwa",
        objective: "O4",
        notYet: "MNIST haijapakiwa au pikseli hazijapimwa upya.",
        meets: "MNIST imepakiwa na pikseli zimepimwa upya kuwa kati ya 0 na 1.",
        exceeds: "Picha moja imechorwa na kukaguliwa dhidi ya lebo yake."
      },
      {
        name: "Mtandao umejengwa na kufunzwa",
        objective: "O5",
        notYet: "Modeli haifanyi compile wala haifunzwi.",
        meets: "Mtandao wa Keras wenye Flatten, tabaka la Dense lililofichwa na tabaka la matokeo la softmax la neuroni 10 unafunzwa kwa validation split.",
        exceeds: "Anaandika jinsi loss na usahihi wa validation vilivyobadilika katika epoch."
      },
      {
        name: "Usahihi wa majaribio na utabiri",
        objective: "O6",
        notYet: "Hakuna usahihi wa majaribio, au utabiri haujalinganishwa na lebo sahihi.",
        meets: "Anaripoti usahihi wa majaribio na analinganisha utabiri tano na lebo sahihi.",
        exceeds: "Pia anatazama utabiri mmoja uliokosewa na anapendekeza kwa nini ulitokea."
      },
      {
        name: "Badiliko moja limejaribiwa",
        objective: "O6",
        notYet: "Hakuna badiliko lililofanywa, au vitu kadhaa vilibadilishwa kwa pamoja.",
        meets: "Badiliko moja (neuroni zaidi au epoch zaidi), limefunzwa upya, na sentensi kuhusu kama lilisaidia.",
        exceeds: "Pia anakagua badiliko kwa dalili za overfitting."
      },
      {
        name: "Vikomo",
        objective: "O6",
        notYet: "Hakuna kikomo kilichotajwa, au kikomo si sahihi.",
        meets: "Kikomo kimoja halisi, kama kujua tarakimu moja moja zilizo katikati tu.",
        exceeds: "Pia anaeleza jinsi mtu angekagua matokeo yenye uhakika mdogo katika kazi halisi."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kupata Anafikia au Anazidi katika kila mstari wa rubriki ya kazi ya mwisho",
      "Wanafunzi wanaoripoti kufunza mtandao mwingine wa neva au mfano wa Keras katika siku 30 baada ya kozi (utafiti wa kufuatilia)",
      "Wanafunzi wanaoongeza notebook kwenye mkusanyiko wa kazi zao (portfolio) au wanaoitumia kuzungumzia AI katika usaili wa kazi",
      "Wanafunzi wanaojiunga na programu ya mafunzo, cheti au kazi ya teknolojia, data au AI baada ya kozi"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta au laptop yenye kivinjari cha wavuti",
      "Akaunti ya Google ya bure ya kutumia Google Colab",
      "Karatasi na kalamu kwa ukokotoaji wa neuroni kwa mkono",
      "Kama dakika 60 hadi 75 kwa jumla, pamoja na muda wa mafunzo kuendeshwa"
    ],
    facilitatorNotes: [
      "Fanyeni ukokotoaji wa neuroni ubaoni kama kikundi kabla ya msimbo wowote; unafanya tabaka za baadaye kuwa rahisi zaidi kufuatilia.",
      "Endesha upakuaji wa MNIST mara moja kabla ya darasa ili kukagua kwamba mtandao (network) unaruhusu.",
      "Mafunzo yanachukua dakika chache; tumieni muda wa kusubiri kujadili namba za loss na usahihi zinapochapishwa.",
      "Unganisha mifano na kazi ambazo wanafunzi wanazijua, kama kusoma fomu au kukagua vipuri, na sisitiza kwamba mtu anakagua matokeo yenye uhakika mdogo.",
      "Wahimize wanafunzi kuhifadhi notebook yao kwa portfolio na kufanya mazoezi ya kuieleza kwa dakika moja, kama wangefanya katika usaili."
    ]
  }
};
