"use strict";

// Koach Learn course (Swahili translation of shared/intro-machine-learning.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const COLAB = { name: "Google Colab: Maswali Yanayoulizwa Mara kwa Mara", url: "https://research.google.com/colaboratory/faq.html" };
const SKLEARN = { name: "scikit-learn: Kuanza", url: "https://scikit-learn.org/stable/getting_started.html" };

module.exports = {
  id: "intro-machine-learning-sw",
  lang: "sw",
  translationOf: "intro-machine-learning",
  category: "Youth",
  name: "Utangulizi wa Machine Learning (Kujifunza kwa Mashine)",
  skills: "Kueleza jinsi mashine zinavyojifunza, Kuchagua features na labels, Kugawa data kwa mafunzo na majaribio, Kufundisha modeli kwa scikit-learn, Kupima na kulinganisha usahihi",
  outcome: "kufundisha modeli mbili rahisi za machine learning katika Google Colab kwa scikit-learn, kuzijaribu kwenye data ambayo hazijaiona, kulinganisha usahihi wake, na kueleza ipi ungetumia na mipaka yake ni ipi.",
  about: [
    "Machine learning (kujifunza kwa mashine) iko nyuma ya vichujio vya barua taka (spam), mapendekezo ya filamu, muda wa msongamano kwenye ramani na tahadhari za ulaghai kwenye kadi ya benki. Kozi hii inakuonyesha jinsi inavyofanya kazi, kisha unatengeneza modeli wewe mwenyewe.",
    "Sura 1 haihitaji code: unajifunza mawazo kwa mifano ya kila siku na majedwali madogo unayotengeneza mwenyewe. Sura 2 inahamia Google Colab, tovuti ya bure inayoendesha Python, ambapo unafundisha na kujaribu modeli halisi kwa maktaba ya bure iitwayo scikit-learn. Kujua Python kidogo kunasaidia, lakini kila mstari wa code unatolewa na kuelezwa.",
    "Kila somo linachukua kama dakika tano na linaishia na kazi ya \"Jaribu sasa\". Jaribio la maarifa linafunga kila sura na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Katika Google Colab, pakia dataset ya maua ya iris, igawe kuwa seti ya mafunzo na seti ya majaribio, fundisha decision tree na modeli ya k-nearest neighbors, chapisha usahihi wa kila modeli kwenye seti ya majaribio, tumia iliyo bora kutabiri aina ya ua moja jipya, na uandike sentensi mbili: ungechagua modeli ipi na kikomo kimoja cha modeli yako.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Vijana na watu wazima wenye uzoefu kidogo wa Python wanaotaka kuelewa na kujaribu machine learning: wanafunzi wa sekondari na vyuo, wanachama wa vilabu vya code, watu wanaobadilisha kazi na wanafunzi wa mafunzo ya kazi wanaoelekea kazi za data au AI.",
    startingPoint: "Wanaweza kuandika na kuendesha programu fupi za Python katika Google Colab na kutumia lists na functions. Wengi wamesikia kuhusu AI na machine learning lakini hawajawahi kufundisha modeli, kugawa data kuwa seti za mafunzo na majaribio, wala kupima na kulinganisha usahihi.",
    gap: "Machine learning iko nyuma ya vichujio vya spam, mapendekezo, ramani na zana nyingi za kazini, na kazi za mwanzo za data na AI zinatarajia watu wajue jinsi modeli zinavyojifunza na jinsi zinavyoshindwa. Bila mazoezi ya vitendo wanafunzi hawawezi kupima matokeo ya modeli, kugundua data mbaya, wala kuona kwa nini ukaguzi wa haki ni muhimu.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; maneno kama feature, label, overfitting na usahihi yanaelezwa",
      "Vifaa: kompyuta au laptop yenye kivinjari cha wavuti",
      "Akaunti na gharama: akaunti ya bure ya Google kwa Google Colab; scikit-learn tayari imesakinishwa",
      "Muda: kama dakika 5 hadi 6 kwa somo pamoja na mazoezi, kama dakika 60 hadi 75 kwa jumla",
      "Hesabu: asilimia na vipimo rahisi tu; hakuna fomula"
    ],
    prerequisites: "Utangulizi wa Kuandika Programu kwa Python."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Bila maandishi", action: "kueleza machine learning ni nini na kutambua kama kazi ni classification au regression", standard: "kwa maelezo sahihi na angalau kazi 4 kati ya 5 zimepangwa sahihi" },
    { id: "O2", condition: "Ukipewa tatizo la kutabiri", action: "kutengeneza dataset ndogo yenye features zinazofaa na label na kuikagua kama kuna mapengo", standard: "kwa features zinazoathiri jibu, safu moja ya label na angalau pengo moja linalowezekana limetajwa" },
    { id: "O3", condition: "Ukipewa dataset na matokeo ya majaribio ya modeli", action: "kueleza kwa nini data inagawanywa kuwa seti za mafunzo na majaribio na kukokotoa usahihi", standard: "kwa usahihi sahihi hadi asilimia nzima iliyo karibu" },
    { id: "O4", condition: "Katika Google Colab ukitumia scikit-learn", action: "kupakia dataset ya mazoezi na kueleza safu zake za mlalo, features na labels", standard: "ukitaja idadi ya safu za mlalo na za wima na maana ya label" },
    { id: "O5", condition: "Ukipewa dataset ya iris", action: "kugawa data, kufundisha decision tree na kuchapisha usahihi wake kwenye seti ya majaribio", standard: "code ikiendeshwa bila makosa na usahihi ukichapishwa" },
    { id: "O6", condition: "Ukipewa modeli mbili zilizofundishwa", action: "kulinganisha usahihi wao wa majaribio, kutabiri mfano mpya na kuandika kikomo kimoja cha modeli uliyochagua", standard: "ukichagua modeli kwa sababu na kutaja kikomo halisi" }
  ],
  chapters: [
    {
      name: "Sura 1: Jinsi mashine zinavyojifunza",
      lessons: [
        {
          objectives: ["O1"],
          title: "Machine learning ni nini",
          minutes: 4,
          goal: "Eleza machine learning kwa maneno yako mwenyewe na uitambue katika maisha ya kila siku.",
          text: [
            "Katika uandishi wa programu wa kawaida, mtu ndiye anaandika sheria. Katika machine learning (ML), unaipa kompyuta mifano mingi yenye majibu sahihi, nayo inatafuta sheria yenyewe. Matokeo yanaitwa modeli.",
            "Mifano ya kila siku: barua pepe yako inajifunza spam inavyoonekana kutoka kwa mamilioni ya barua zilizowekwa alama. App ya muziki inapendekeza nyimbo kutokana na zile walizosikiliza watu kama wewe. App ya ramani inatabiri msongamano kutokana na safari za zamani.",
            "Kazi mbili za kawaida: classification inaweka vitu katika makundi (spam au si spam, ua ni la aina gani). Regression inatabiri namba (bei ya nyumba, dakika hadi basi lifike). Mifano inapokuja na majibu, inaitwa supervised learning, na hiyo ndiyo kozi hii inafundisha."
          ],
          words: [["Machine learning (ML)", "kompyuta kutafuta mifumo (patterns) katika mifano badala ya kufuata sheria alizoandika mtu."], ["Modeli", "kile ML inachotoa: mkusanyiko wa mifumo iliyojifunzwa inayofanya utabiri."], ["Classification", "kutabiri kundi au aina."], ["Regression", "kutabiri namba."], ["Supervised learning", "kujifunza kutoka kwa mifano inayokuja na majibu sahihi."]],
          slides: [
            { title: "Sheria dhidi ya kujifunza", bullets: ["Uandishi wa programu: mtu anaandika sheria", "ML: kompyuta inatafuta sheria kutoka kwa mifano", "Matokeo ni modeli"] },
            { title: "ML unayoitumia tayari", bullets: ["Vichujio vya spam", "Mapendekezo ya nyimbo na video", "Muda wa msongamano kwenye ramani", "Tahadhari za ulaghai wa kadi"] },
            { title: "Kazi mbili za kawaida", bullets: ["Classification: kundi gani?", "Regression: namba gani?", "Supervised: mifano inakuja na majibu"] }
          ],
          tryIt: "Orodhesha app tatu unazotumia ambazo huenda zinatumia machine learning. Kwa kila moja, andika inatabiri nini na kama hiyo ni classification (kundi) au regression (namba).",
          youCanNow: "kueleza machine learning ni nini na kutofautisha classification na regression.",
          quickCheck: [
            { objective: "O1", q: "Katika machine learning, modeli ni nini?", options: ["Orodha ya sheria alizoandika mtu kwa mkono", "Jedwali la data (spreadsheet)", "Aina ya kompyuta", "Matokeo ya kompyuta kutafuta mifumo katika mifano"], answer: 3, why: "Modeli ni kile kompyuta inachotoa baada ya kutafuta mifumo katika mifano." },
            { objective: "O1", q: "Duka linataka kupanga barua pepe za wateja kuwa \"malalamiko\" au \"swali\". Ungeiita kazi hii aina gani?", options: ["Regression", "Classification", "Majaribio", "Overfitting"], answer: 1, why: "Kuweka vitu katika makundi ni classification; kutabiri namba ni regression." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Data: features na labels",
          minutes: 5,
          goal: "Tengeneza dataset ndogo yenye features na label.",
          text: [
            "ML inajifunza kutoka kwa data, kwa kawaida jedwali. Kila safu ya mlalo (row) ni mfano mmoja. Safu za wima (columns) zinazoeleza mfano ni features. Safu yenye jibu unalotaka kutabiri ni label.",
            "Mfano: kutabiri kama basi litachelewa, kila row ni safari moja. Features zinaweza kuwa saa ya siku, siku ya wiki na kama mvua ilinyesha. Label ni limechelewa au liko kwa wakati.",
            "Features nzuri ni vitu vinavyoathiri jibu kweli. Rows nyingi zaidi kwa kawaida zinasaidia. Data pia lazima iwe ya haki na kamili: ukikusanya safari za siku za kazi tu, modeli itakuwa mbaya wikendi. Modeli inaweza kuwa nzuri tu kama data yake."
          ],
          steps: ["Amua unachotaka kutabiri: hiyo ndiyo label yako.", "Orodhesha vitu vinavyoweza kuiathiri: hizo ndizo features zako.", "Tengeneza jedwali lenye row moja kwa kila mfano.", "Jaza angalau rows 10 kutoka maisha halisi.", "Kagua: je, kuna aina fulani za mifano zinazokosekana?"],
          words: [["Dataset", "mkusanyiko wa mifano, kwa kawaida jedwali."], ["Feature", "safu inayoeleza mfano, inayotumika kufanya utabiri."], ["Label", "safu ya jibu ambalo modeli inajifunza kutabiri."], ["Upendeleo katika data (bias)", "data inapoacha au kuhesabu kupita kiasi baadhi ya makundi, hivyo modeli inakuwa si ya haki au inakosea kwao."]],
          slides: [
            { title: "Data ni jedwali", bullets: ["Kila row: mfano mmoja", "Features: safu zinazoeleza", "Label: jibu la kutabiri"] },
            { title: "Mfano: basi litachelewa?", bullets: ["Features: saa, siku, mvua", "Label: limechelewa au liko kwa wakati"] },
            { title: "Data nzuri", bullets: ["Features zinazojalisha kweli", "Rows za kutosha", "Hakuna makundi yanayokosekana, kama wikendi"] }
          ],
          tryIt: "Chagua kitu unachoweza kutabiri katika maisha ya kila siku, kama utachoka baada ya mazoezi au duka litakuwa na watu wengi. Tengeneza jedwali lenye features mbili au tatu na label, na ujaze rows 10.",
          youCanNow: "kuchagua label na features zenye manufaa na kutengeneza dataset ndogo.",
          quickCheck: [
            { objective: "O2", q: "Katika jedwali la data, features ni nini?", options: ["Safu zinazoeleza kila mfano", "Jibu unalotaka kutabiri", "Usahihi wa modeli", "Seti ya majaribio"], answer: 0, why: "Features zinaeleza mfano; label ni jibu la kutabiri." },
            { objective: "O2", q: "Unakusanya data ya wanafunzi wanaomaliza kazi ya nyumbani, lakini kutoka darasa moja tu. Ungefanya nini kabla ya kufundisha?", options: ["Kufundisha mara moja; darasa moja linatosha kwa wote", "Kufuta safu ya label", "Kukusanya data kutoka madarasa zaidi ili modeli iwe ya haki kwa wanafunzi wengine", "Kutumia rows tano za kwanza tu"], answer: 2, why: "Data kutoka kundi moja inaweza kufanya modeli iwe mbaya au si ya haki kwa wengine." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Mafunzo na majaribio: je, modeli ni nzuri?",
          minutes: 5,
          goal: "Gawa data kuwa seti ya mafunzo na seti ya majaribio na upime usahihi.",
          text: [
            "Mafunzo (training) ni pale modeli inaposoma mifano ili kutafuta mifumo. Lakini modeli iliyokariri mifano yake tu inaweza kuonekana kamili na bado ikashindwa kwenye mipya. Hiyo inaitwa overfitting, kama mwanafunzi aliyekariri majibu ya mtihani wa mwaka jana.",
            "Kwa hiyo unaweka data fulani pembeni. Seti ya mafunzo (mara nyingi kama asilimia 75 hadi 80 ya rows) inatumika kujifunza. Seti ya majaribio (zilizobaki) inafichwa hadi mwisho na inatumika kukagua modeli kwenye mifano ambayo haijawahi kuiona.",
            "Usahihi (accuracy) ni sehemu ya mifano ya majaribio iliyopatwa sahihi. 18 sahihi kati ya 20 ni asilimia 90. Daima uliza kosa linagharimu nini: pendekezo baya la wimbo si tatizo, tahadhari ya ulaghai iliyokosekana ni tatizo."
          ],
          steps: ["Changanya rows zako.", "Weka kama asilimia 75 katika seti ya mafunzo.", "Weka zilizobaki kama seti ya majaribio na usiziangalie.", "Tafuta mfumo (sheria) kutoka seti ya mafunzo pekee.", "Itumie kwenye seti ya majaribio na uhesabu ngapi imepata sahihi."],
          words: [["Mafunzo (training)", "modeli kujifunza mifumo kutoka kwa mifano."], ["Seti ya mafunzo", "rows zinazotumika kujifunza."], ["Seti ya majaribio", "rows zilizowekwa pembeni kukagua modeli kwenye mifano mipya."], ["Overfitting", "modeli inapokariri data yake ya mafunzo na kufanya vibaya kwenye data mpya."], ["Usahihi (accuracy)", "sehemu ya utabiri uliokuwa sahihi."]],
          slides: [
            { title: "Mafunzo", bullets: ["Modeli inasoma mifano", "Inatafuta mifumo", "Kukariri si kujifunza"] },
            { title: "Weka data pembeni", bullets: ["Seti ya mafunzo: kama 75-80% ya rows", "Seti ya majaribio: zilizobaki, zimefichwa hadi mwisho"] },
            { title: "Usahihi", bullets: ["Majibu sahihi / jumla ya mifano ya majaribio", "18 sahihi kati ya 20 = 90%", "Uliza kosa linagharimu nini"] }
          ],
          tryIt: "Chukua jedwali lako la rows 10 kutoka Somo la 2. Funika rows 2 za mwisho. Kutoka 8 za kwanza, andika sheria moja rahisi (kwa mfano \"mvua ikinyesha, basi linachelewa\"). Jaribu sheria hiyo kwenye rows 2 zilizofichwa na ukokotoe usahihi.",
          youCanNow: "kugawa data kuwa seti za mafunzo na majaribio na kukokotoa usahihi.",
          quickCheck: [
            { objective: "O3", q: "Overfitting ni nini?", options: ["Modeli ikiwa ndogo sana", "Data ya majaribio ikiwa nyingi sana", "Modeli ikikariri mifano yake ya mafunzo na kushindwa kwenye mipya", "Usahihi ukiwa asilimia 50"], answer: 2, why: "Overfitting ni kama kukariri majibu ya mtihani wa mwaka jana." },
            { objective: "O3", q: "Modeli ya ulaghai inapata usahihi wa 95%, lakini inayokosa ni ulaghai halisi. Ungeuliza nini baadaye?", options: ["Makosa yanagharimu nini?", "Tunaweza kuruka seti ya majaribio?", "Tunaweza kufundisha kwenye seti ya majaribio?", "Je, 95% inatosha kila wakati?"], answer: 0, why: "Daima uliza kosa linagharimu nini; tahadhari ya ulaghai iliyokosekana ni muhimu sana." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Jinsi mashine zinavyojifunza",
        questions: [
          { objective: "O1", q: "Modeli ya machine learning inajifunza kutoka kwa nini?", options: ["Sheria alizoandika mtu kwa kila hali", "Betri ya kompyuta", "Mifano, mara nyingi yenye majibu sahihi", "Kubahatisha tu"], answer: 2, why: "ML inatafuta mifumo katika mifano." },
          { objective: "O1", q: "Kutabiri joto la kesho kwa nyuzi ni:", options: ["Regression", "Classification", "Si ML", "Label"], answer: 0, why: "Kutabiri namba ni regression." },
          { objective: "O2", q: "Katika jedwali la kutabiri kama duka lina watu wengi, \"lina watu wengi au halina\" ni:", options: ["Feature", "Seti ya majaribio", "Usahihi", "Label"], answer: 3, why: "Label ni jibu unalotaka kutabiri." },
          { objective: "O3", q: "Kwa nini seti ya majaribio inafichwa hadi mwisho?", options: ["Ili mafunzo yawe ya haraka", "Ili kukagua modeli kwenye mifano ambayo haijawahi kuiona", "Kwa sababu imeharibika", "Ili data iwe kubwa zaidi"], answer: 1, why: "Kujaribu kwenye data mpya kunaonyesha kama modeli ilijifunza kweli." },
          { objective: "O3", q: "Modeli inapata mifano 15 kati ya 20 ya majaribio sahihi. Usahihi wake ni upi?", options: ["15%", "20%", "50%", "75%"], answer: 3, why: "15 ikigawanywa kwa 20 ni 0.75, au asilimia 75." }
        ]
      }
    },
    {
      name: "Sura 2: Kufundisha modeli yako ya kwanza katika Colab",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kupakia dataset kwa scikit-learn",
          minutes: 5,
          goal: "Pakia dataset ya mazoezi katika Colab na uangalie features na labels zake.",
          text: [
            "scikit-learn ni maktaba ya bure ya Python kwa machine learning, tayari imesakinishwa katika Google Colab. Inakuja na datasets ndogo za mazoezi. Dataset ya iris ina maua 150. Kila ua lina features nne (urefu na upana wa sehemu mbili za ua, kwa sentimita) na label: moja ya aina tatu (species).",
            "Ipakie kwa: from sklearn.datasets import load_iris, kisha iris = load_iris(). Features ziko katika iris.data na labels katika iris.target. iris.feature_names na iris.target_names zinakuambia maana ya safu na labels.",
            "Daima angalia data yako kabla ya mafunzo: rows ngapi, safu ni zipi, na rows chache za mfano. iris.data.shape inakuambia rows na safu: (150, 4)."
          ],
          steps: ["Fungua notebook mpya katika colab.research.google.com.", "Endesha: from sklearn.datasets import load_iris", "Endesha: iris = load_iris()", "Chapisha iris.data.shape, iris.feature_names na iris.target_names.", "Chapisha rows tatu za kwanza: print(iris.data[:3], iris.target[:3])"],
          words: [["scikit-learn", "maktaba ya bure ya Python kwa machine learning, inaingizwa kama sklearn."], ["Dataset ya iris", "dataset maarufu ya mazoezi yenye maua 150 ya aina tatu."], ["shape", "idadi ya rows na safu katika data."], ["X na y", "majina ya kawaida: X kwa features, y kwa labels."]],
          slides: [
            { title: "scikit-learn", bullets: ["Maktaba ya bure ya ML ya Python", "Tayari iko katika Google Colab", "Inakuja na datasets za mazoezi"] },
            { title: "Dataset ya iris", bullets: ["Maua 150, features 4 kila moja", "Label: moja ya aina 3", "iris.data na iris.target"] },
            { title: "Angalia kabla ya kufundisha", bullets: ["iris.data.shape inatoa (150, 4)", "feature_names na target_names", "Chapisha rows chache"] }
          ],
          sources: [SKLEARN, COLAB],
          tryIt: "Pakia dataset ya iris katika Colab. Chapisha shape, majina manne ya features, majina matatu ya aina, na rows tano za kwanza pamoja na labels zake. Andika namba ipi inawakilisha aina ipi.",
          youCanNow: "kupakia dataset katika Colab na kueleza features, labels na ukubwa wake.",
          quickCheck: [
            { objective: "O4", q: "Katika dataset ya iris ya scikit-learn, iris.target ina nini?", options: ["Vipimo vya maua", "Labels za aina", "Majina ya safu", "Usahihi"], answer: 1, why: "iris.target ina labels; iris.data ina features." },
            { objective: "O4", q: "Umepakia dataset mpya sasa hivi. Ungefanya nini kabla ya kufundisha modeli?", options: ["Kufundisha mara moja bila kuangalia", "Kufuta nusu ya rows", "Kubadilisha labels kwa mkono", "Kuangalia shape, majina ya safu na rows chache za mfano"], answer: 3, why: "Daima angalia data yako kabla ya mafunzo." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kufundisha na kujaribu decision tree",
          minutes: 6,
          goal: "Gawa data, fundisha decision tree, na upime usahihi wake.",
          text: [
            "Decision tree (mti wa maamuzi) inajifunza mfululizo wa maswali ya ndiyo au hapana, kama chati ya mtiririko: \"Je, petal ni fupi kuliko cm 2.5? Basi ni aina 0.\" Ni rahisi kuieleza, hivyo ni modeli nzuri ya kwanza.",
            "Kila modeli ya scikit-learn inafanya kazi kwa njia moja: iunde, ifundishe (fit) kwenye data ya mafunzo, kisha itabiri (predict) kwenye data mpya. Code: X, y = load_iris(return_X_y=True). X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.25, random_state=42). model = DecisionTreeClassifier(random_state=42). model.fit(X_train, y_train).",
            "Kisha ijaribu: predictions = model.predict(X_test) na print(accuracy_score(y_test, predictions)). random_state=42 inafanya tu mchanganyiko uwe uleule ili upate matokeo yaleyale kila unapoendesha."
          ],
          steps: ["Ingiza: from sklearn.model_selection import train_test_split", "Ingiza: from sklearn.tree import DecisionTreeClassifier", "Ingiza: from sklearn.metrics import accuracy_score", "Gawa kwa train_test_split(X, y, test_size=0.25, random_state=42).", "Unda modeli, ita model.fit(X_train, y_train), kisha tabiri kwenye X_test na uchapishe usahihi."],
          words: [["Decision tree", "modeli inayojifunza chati ya mtiririko ya maswali ya ndiyo au hapana."], ["fit", "kufundisha modeli kwenye data."], ["predict", "kutumia modeli iliyofundishwa kukisia labels za data mpya."], ["train_test_split", "zana ya scikit-learn inayogawa data kuwa seti za mafunzo na majaribio."], ["random_state", "namba inayofanya mchanganyiko wa bahati uwe uleule ili matokeo yajirudie."]],
          slides: [
            { title: "Decision trees", bullets: ["Chati ya mtiririko ya maswali ya ndiyo au hapana", "Rahisi kueleza", "Modeli nzuri ya kwanza"] },
            { title: "Mtindo wa kila modeli", bullets: ["Iunde", "fit(X_train, y_train)", "predict(X_test)"] },
            { title: "Ipime", bullets: ["accuracy_score(y_test, predictions)", "test_size=0.25 inaweka 25% kwa majaribio", "random_state inafanya matokeo yajirudie"] }
          ],
          sources: [SKLEARN],
          tryIt: "Andika na uendeshe code yote ya decision tree katika Colab. Chapisha usahihi. Kisha badilisha test_size iwe 0.5, endesha tena, na uandike kama usahihi ulipanda au kushuka.",
          youCanNow: "kugawa data, kufundisha decision tree kwa fit, kutabiri nayo na kupima usahihi.",
          quickCheck: [
            { objective: "O5", q: "Kwa nini decision tree ni modeli nzuri ya kwanza?", options: ["Ni rahisi kuieleza, kama chati ya mtiririko ya maswali ya ndiyo au hapana", "Haikosei kamwe", "Haihitaji data", "Inafanya kazi kwa maua tu"], answer: 0, why: "Maswali ya decision tree yanaweza kusomwa kama chati ya mtiririko." },
            { objective: "O5", q: "Umefundisha modeli yako na unataka kuikagua. Ungeendesha mstari upi?", options: ["model.fit(X_test, y_test)", "load_iris()", "predictions = model.predict(X_test), kisha accuracy_score(y_test, predictions)", "random_state=42"], answer: 2, why: "Tabiri kwenye seti ya majaribio, kisha linganisha na labels za kweli kupata usahihi." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kulinganisha modeli na kujua mipaka yake",
          minutes: 6,
          goal: "Fundisha modeli ya pili, ilinganishe na ya kwanza, tabiri mfano mpya na utaje kikomo.",
          text: [
            "Ni nadra kuwa na modeli moja kamili, kwa hiyo unajaribu zaidi ya moja. k-nearest neighbors (KNN) inatabiri kwa kutafuta mifano k inayofanana zaidi katika data ya mafunzo na kupiga kura. Iunde kwa KNeighborsClassifier(n_neighbors=5) kutoka sklearn.neighbors; inatumia hatua zilezile za fit na predict.",
            "Linganisha modeli zote mbili kwenye seti ileile ya majaribio. Kutabiri ua moja jipya, ipe modeli list ndani ya list: model.predict([[5.1, 3.5, 1.4, 0.2]]). Inarudisha namba ya aina; iris.target_names inaigeuza kuwa jina.",
            "Jua mipaka. Modeli hizi zinajua aina hizi tatu tu na vipimo hivi vinne tu: zionyeshe waridi na bado zitataja iris. Seti ndogo ya majaribio inaweza kufanya usahihi uonekane bora au mbaya kuliko ulivyo. Na kwa data halisi kuhusu watu, kagua kwamba modeli inafanya kazi kwa haki kwa kila kundi kabla mtu yeyote hajaitegemea."
          ],
          steps: ["Ingiza: from sklearn.neighbors import KNeighborsClassifier", "Unda knn = KNeighborsClassifier(n_neighbors=5) na uifundishe (fit) kwenye data ileile ya mafunzo.", "Chapisha alama zote mbili za usahihi.", "Tabiri ua moja jipya kwa modeli iliyo bora: model.predict([[5.1, 3.5, 1.4, 0.2]])", "Andika ungechagua modeli ipi na kikomo kimoja."],
          words: [["k-nearest neighbors (KNN)", "modeli inayotabiri kwa kura ya mifano ya mafunzo inayofanana zaidi."], ["n_neighbors", "idadi ya mifano inayofanana ambayo KNN inaangalia (k)."], ["Kikomo", "hali ambayo modeli haiwezi kuishughulikia vizuri."], ["Haki (fairness)", "modeli kufanya kazi vizuri sawasawa kwa kila kundi la watu inaowaathiri."]],
          slides: [
            { title: "Jaribu zaidi ya modeli moja", bullets: ["KNN: kura ya mifano k inayofanana zaidi", "KNeighborsClassifier(n_neighbors=5)", "Hatua zilezile za fit na predict"] },
            { title: "Linganisha na tabiri", bullets: ["Seti ileile ya majaribio kwa modeli zote mbili", "model.predict([[5.1, 3.5, 1.4, 0.2]])", "target_names inageuza namba kuwa majina"] },
            { title: "Jua mipaka", bullets: ["Inajua tu kile ilichofundishwa", "Seti ndogo za majaribio zinaweza kupotosha", "Kwa data ya watu, kagua haki"] }
          ],
          sources: [SKLEARN],
          tryIt: "Kazi ya mwisho: katika notebook moja, fundisha decision tree na modeli ya KNN kwenye mgawanyo uleule, chapisha usahihi wa zote mbili, tabiri aina ya ua [6.0, 2.9, 4.5, 1.5] kwa modeli iliyo bora na uchapishe jina lake, kisha andika sentensi mbili kuhusu modeli uliyochagua na kikomo kimoja ilicho nacho.",
          youCanNow: "kufundisha, kujaribu na kulinganisha modeli mbili, kufanya utabiri, na kueleza mipaka ya modeli.",
          quickCheck: [
            { objective: "O6", q: "n_neighbors=5 inamaanisha nini katika modeli ya KNN?", options: ["Inafundisha mara tano", "Inaangalia mifano 5 ya mafunzo inayofanana zaidi na kupiga kura", "Inaweka asilimia 5 kwa majaribio", "Inatabiri maua 5 kwa wakati mmoja"], answer: 1, why: "KNN inatabiri kwa kura ya mifano k inayofanana zaidi." },
            { objective: "O6", q: "Modeli yako ilitabiri aina 0 kwa ua jipya. Ungeigeuzaje namba hiyo kuwa jina?", options: ["Kukisia jina", "Kufundisha modeli tena", "Kubadilisha ukubwa wa majaribio", "Kuitafuta katika iris.target_names"], answer: 3, why: "iris.target_names inageuza namba ya aina kuwa jina." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kufundisha modeli yako ya kwanza katika Colab",
        questions: [
          { objective: "O4", q: "iris.data.shape (150, 4) inakuambia nini?", options: ["Aina 150 na maua 4", "Modeli ina usahihi wa 150%", "Rows 4 na safu 150", "Rows 150 na safu 4 za features"], answer: 3, why: "Shape inataja rows, kisha safu." },
          { objective: "O5", q: "Mpangilio sahihi wa hatua kwa modeli ya scikit-learn ni upi?", options: ["Iunde, ifundishe (fit) kwenye data ya mafunzo, kisha itabiri", "predict, kisha fit, kisha unda", "fit kwenye seti ya majaribio, kisha predict kwenye data ya mafunzo", "predict tu"], answer: 0, why: "Kila modeli inaundwa, inafundishwa (fit), kisha inatumika kutabiri." },
          { objective: "O5", q: "test_size=0.25 inamaanisha nini katika train_test_split?", options: ["Tumia rows 25", "Fundisha kwa dakika 25", "Weka 25% ya rows kwa majaribio", "Usahihi lazima uwe 25%"], answer: 2, why: "test_size inaweka sehemu ya rows zinazowekwa pembeni." },
          { objective: "O6", q: "k-nearest neighbors inafanyaje utabiri?", options: ["Inamuuliza mtu", "Inarusha sarafu", "Inaandika sheria kwa mkono", "Inapiga kura ya mifano ya mafunzo inayofanana zaidi"], answer: 3, why: "KNN inatumia mifano k iliyo karibu zaidi." },
          { objective: "O6", q: "Modeli yako ya iris inapewa vipimo vya waridi. Nini kinatokea?", options: ["Inasema \"waridi\"", "Inakataa", "Bado inataja moja ya aina tatu za iris", "Inajifunza waridi yenyewe"], answer: 2, why: "Modeli inajua tu labels ilizofundishwa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Utangulizi wa Machine Learning (Kujifunza kwa Mashine)",
    questions: [
      { objective: "O1", q: "Machine learning inamaanisha:", options: ["Mtu anaandika kila sheria", "Kompyuta inatafuta mifumo kutoka kwa mifano", "Roboti inayotembea", "Intaneti ya haraka zaidi"], answer: 1, why: "ML inajifunza kutoka kwa data." },
      { objective: "O1", q: "Kipi ni matumizi ya kila siku ya machine learning?", options: ["Kichujio cha spam cha barua pepe", "Swichi ya taa", "Ramani ya karatasi", "Kikokotoo kinachojumlisha 2 + 2"], answer: 0, why: "Vichujio vya spam vinajifunza kutoka kwa barua nyingi zilizowekwa alama." },
      { objective: "O1", q: "Kuamua kama picha inaonyesha paka au mbwa ni:", options: ["Regression", "Overfitting", "Classification", "Feature"], answer: 2, why: "Kuchagua kundi ni classification." },
      { objective: "O1", q: "Kutabiri dakika ngapi hadi basi lifike ni:", options: ["Regression", "Classification", "Seti ya labels", "Majaribio"], answer: 0, why: "Kutabiri namba ni regression." },
      { objective: "O1", q: "Supervised learning inatumia:", options: ["Hakuna data", "Picha tu", "Mwalimu darasani tu", "Mifano yenye majibu sahihi"], answer: 3, why: "Supervised inamaanisha mifano ina labels." },
      { objective: "O2", q: "Katika dataset, kila row kwa kawaida ni:", options: ["Feature moja", "Mfano mmoja", "Modeli nzima", "Alama ya majaribio"], answer: 1, why: "Rows ni mifano; safu ni features au label." },
      { objective: "O2", q: "Kutabiri kama tiketi za mechi zitaisha, feature ipi ina maana?", options: ["Rangi ya tovuti ya tiketi", "Siku ya wiki na timu pinzani", "Usahihi wa modeli", "Label"], answer: 1, why: "Features zinapaswa kuathiri jibu kweli." },
      { objective: "O2", q: "Data yako ya basi ina safari za siku za kazi tu. Hatari ni ipi?", options: ["Hakuna", "Itafundishwa haraka mno", "Usahihi utakuwa 100%", "Modeli itakuwa mbaya kutabiri wikendi"], answer: 3, why: "Aina za mifano zinazokosekana zinafanya modeli ikosee kwazo." },
      { objective: "O3", q: "Overfitting ni pale modeli:", options: ["Inakariri data ya mafunzo na kushindwa kwenye data mpya", "Ni ndogo mno kupakiwa", "Ina features chache mno", "Inaishiwa na kumbukumbu (memory)"], answer: 0, why: "Modeli yenye overfitting haiwezi kufanya kazi vizuri kwenye data mpya." },
      { objective: "O3", q: "Unapaswa kutumia data ipi kupima usahihi?", options: ["Seti ya mafunzo", "Data yoyote unayopenda", "Seti ya majaribio ambayo modeli haijaiona", "Row moja tu"], answer: 2, why: "Data isiyoonekana pekee inaonyesha utendaji halisi." },
      { objective: "O3", q: "Modeli inapata rows 45 kati ya 50 za majaribio sahihi. Usahihi ni:", options: ["45%", "50%", "90%", "95%"], answer: 2, why: "45 ikigawanywa kwa 50 ni 0.9." },
      { objective: "O4", q: "scikit-learn ni:", options: ["App ya kulipia", "Aina ya dataset", "Maktaba ya bure ya Python kwa machine learning", "Spreadsheet"], answer: 2, why: "scikit-learn (sklearn) ni ya bure na ya chanzo huria (open source)." },
      { objective: "O4", q: "Katika dataset ya iris, aina ya ua ni:", options: ["Feature", "Label", "Shape", "Modeli"], answer: 1, why: "Aina ndiyo tunayotabiri, kwa hiyo ni label." },
      { objective: "O5", q: "Mstari upi unafundisha modeli?", options: ["model.fit(X_train, y_train)", "model.predict(X_test)", "print(model)", "load_iris()"], answer: 0, why: "fit inafundisha modeli." },
      { objective: "O5", q: "Mstari upi unatoa utabiri kwa seti ya majaribio?", options: ["model.fit(X_test)", "accuracy_score(X_test)", "model.predict(X_test)", "train_test_split(model)"], answer: 2, why: "predict inatumia modeli iliyofundishwa kwenye data mpya." },
      { objective: "O5", q: "Kwa nini kuweka random_state=42?", options: ["Ili matokeo yawe yaleyale kila unapoendesha", "Ili modeli iwe bora kwa 42%", "Ili kutumia rows 42", "Inahitajika ili Python iendeshe"], answer: 0, why: "Inafanya mchanganyiko wa bahati uwe uleule." },
      { objective: "O5", q: "Decision tree ni kama:", options: ["Kura ya majirani", "Jumla ya spreadsheet", "Kukisia kwa bahati", "Chati ya mtiririko ya maswali ya ndiyo au hapana"], answer: 3, why: "Trees zinagawa data kwa maswali." },
      { objective: "O6", q: "Kutabiri ua moja jipya unaandika:", options: ["model.predict(5.1, 3.5, 1.4, 0.2)", "model.predict([[5.1, 3.5, 1.4, 0.2]])", "model.fit([5.1])", "predict.model(5.1)"], answer: 1, why: "Modeli inatarajia list ya rows, kwa hiyo row moja inaingia ndani ya list nyingine." },
      { objective: "O6", q: "Modeli mbili zinapata 93% na 97% kwenye seti ileile ya majaribio. Hatua nzuri inayofuata ni:", options: ["Kufuta zote mbili", "Kuchagua 97% na pia kufikiria mipaka yake na gharama ya makosa", "Kufundisha upya kwenye seti ya majaribio", "Kuchagua ile ya polepole"], answer: 1, why: "Linganisha kwa haki, kisha pima mipaka na gharama ya makosa." },
      { objective: "O6", q: "Kabla ya kutumia modeli inayofanya maamuzi kuhusu watu, unapaswa:", options: ["Kuruka majaribio", "Kuficha jinsi inavyofanya kazi", "Kutumia data ya mafunzo tu", "Kukagua inafanya kazi kwa haki kwa kila kundi"], answer: 3, why: "Ukaguzi wa haki unalinda watu inaowaathiri." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
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
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Kupakia na kugawa data",
        objective: "O5",
        notYet: "Data haipakii, au modeli inajaribiwa kwenye data ya mafunzo.",
        meets: "Data ya iris imepakiwa na kugawanywa kuwa seti za mafunzo na majaribio kwa train_test_split.",
        exceeds: "Pia inachapisha shape ya kila seti na kueleza mgawanyo."
      },
      {
        name: "Modeli mbili zimefundishwa na kujaribiwa",
        objective: "O5",
        notYet: "Modeli moja tu imefundishwa, au usahihi haupo.",
        meets: "Decision tree na modeli ya KNN zimefundishwa, na usahihi wa majaribio wa kila moja umechapishwa.",
        exceeds: "Pia anajaribu thamani ya pili ya n_neighbors na kulinganisha."
      },
      {
        name: "Utabiri wa ua jipya",
        objective: "O6",
        notYet: "Hakuna utabiri, au ingizo liko katika umbo lisilo sahihi.",
        meets: "Modeli iliyo bora inatabiri ua moja jipya na jina la aina linachapishwa.",
        exceeds: "Pia anaeleza kwa nini utabiri una maana kutokana na vipimo."
      },
      {
        name: "Chaguo na mipaka",
        objective: "O6",
        notYet: "Sentensi mbili hazipo, au hakuna kikomo halisi kilichotajwa.",
        meets: "Sentensi mbili: modeli ipi na kwa nini, na kikomo kimoja halisi.",
        exceeds: "Pia anataja gharama ya makosa au haki kwa data kuhusu watu."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kupata Anafikia au Anazidi katika kila mstari wa rubric ya kazi ya mwisho",
      "Wanafunzi wanaoripoti kufundisha modeli kwenye dataset nyingine ndani ya siku 30 baada ya kozi (utafiti wa ufuatiliaji)",
      "Wanafunzi wanaoendelea na kozi inayofuata, kama Deep Learning au Data Science kwa Wanaoanza",
      "Wanafunzi wanaoongeza notebook kwenye portfolio, mradi wa darasa au maombi ya kazi"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta au laptop yenye kivinjari cha wavuti",
      "Akaunti ya bure ya Google ya kutumia Google Colab (scikit-learn tayari imesakinishwa)",
      "Karatasi na kalamu ya kuchora features na labels kwa kazi ya dataset",
      "Kama dakika 60 hadi 75 kwa jumla, pamoja na muda wa mazoezi"
    ],
    facilitatorNotes: [
      "Hakikisha wanafunzi wanaweza kufungua Google Colab kabla ya darasa; baadhi ya akaunti za shule zinaizuia.",
      "Fanyeni zoezi la dataset ya basi kuchelewa au kazi ya nyumbani kwenye karatasi kama kikundi kabla ya code yoyote.",
      "Waambie wanafunzi walinganishe usahihi ubaoni; thamani tofauti za random_state zinatoa matokeo tofauti, na hilo ni mjadala mzuri.",
      "Zungumzia haki waziwazi: uliza nini kingeweza kwenda vibaya kama modeli kama hii ingefanya maamuzi kuhusu watu.",
      "Wahimize wanafunzi wawili wawili waelezane kila mstari wa code kabla ya kuuendesha."
    ]
  }
};
