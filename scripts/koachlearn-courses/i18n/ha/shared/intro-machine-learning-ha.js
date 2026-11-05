"use strict";

// Koach Learn course, Hausa (ha) translation of shared/intro-machine-learning.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const COLAB = { name: "Google Colab: Tambayoyin da ake yawan yi (Frequently Asked Questions)", url: "https://research.google.com/colaboratory/faq.html" };
const SKLEARN = { name: "scikit-learn: Yadda ake farawa (Getting Started)", url: "https://scikit-learn.org/stable/getting_started.html" };

module.exports = {
  id: "intro-machine-learning-ha",
  lang: "ha",
  translationOf: "intro-machine-learning",
  category: "Youth",
  name: "Gabatarwa ga Machine Learning (Koyon Na'ura)",
  skills: "Bayanin yadda na'ura ke koyo, Zaɓar features da labels, Raba bayanai don horo da gwaji, Horar da model da scikit-learn, Auna da kwatanta daidaito (accuracy)",
  outcome: "horar da models biyu masu sauƙi na machine learning a Google Colab da scikit-learn, gwada su a kan bayanan da ba su taɓa gani ba, kwatanta daidaitonsu, da bayyana wanda za ku yi amfani da shi da iyakokinsa.",
  about: [
    "Machine learning (koyon na'ura) yana bayan matatun saƙonnin banza (spam), shawarwarin fina-finai, lokutan cunkoson hanya a taswira, da faɗakarwar zamba a katin banki. Wannan kwas ɗin yana nuna muku yadda yake aiki, sannan ku gina model da kanku.",
    "Babi na 1 ba ya buƙatar code: kuna koyon ra'ayoyin da misalai na yau da kullum da ƙananan teburori da kuke yi da kanku. Babi na 2 yana komawa Google Colab, shafin intanet kyauta da ke gudanar da Python, inda kuke horarwa da gwada models na gaske da wani library kyauta mai suna scikit-learn. Sanin ɗan Python yana taimakawa, amma ana ba ku kowane layin code tare da bayaninsa.",
    "Kowane darasi yana ɗaukar kusan minti biyar kuma yana ƙarewa da aikin \"Gwada yanzu\". Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "A Google Colab, ku loda bayanan furannin iris, ku raba su zuwa training set da test set, ku horar da decision tree da model na k-nearest neighbors, ku buga daidaiton kowane model a kan test set, ku yi amfani da wanda ya fi kyau don hasashen nau'in sabuwar fure ɗaya, sannan ku rubuta jimloli biyu: wane model za ku zaɓa, da iyaka ɗaya ta model ɗinku.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Matasa da manya da ke da ɗan sanin Python waɗanda suke son fahimta da gwada machine learning: ɗaliban sakandare da na jami'a, 'yan ƙungiyoyin koyon code, masu canja sana'a, da masu horon sana'a da ke neman ayyukan bayanai (data) ko AI.",
    startingPoint: "Suna iya rubutawa da gudanar da gajerun shirye-shiryen Python a Google Colab, kuma suna amfani da lists da functions. Yawancinsu sun ji labarin AI da machine learning amma ba su taɓa horar da model ba, ko raba bayanai zuwa training set da test set, ko auna da kwatanta daidaito ba.",
    gap: "Machine learning yana bayan matatun spam, shawarwari, taswirori da kayan aiki da yawa a wurin aiki, kuma ayyukan farko na bayanai da AI suna sa ran mutane su san yadda models ke koyo da yadda suke kasawa. Ba tare da aiki da hannu ba, masu koyo ba za su iya yanke hukunci kan sakamakon model ba, ko gane bayanai marasa kyau, ko ganin dalilin da yasa duba adalci yake da muhimmanci.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; ana bayanin kalmomi kamar feature, label, overfitting da accuracy",
      "Na'urori: kwamfuta ko laptop mai burauzar intanet",
      "Asusu da kuɗi: asusun Google kyauta don Google Colab; scikit-learn ya riga ya kasance a ciki",
      "Lokaci: kusan minti 5 zuwa 6 a kowane darasi tare da atisaye, kusan minti 60 zuwa 75 gaba ɗaya",
      "Lissafi: kaso (percent) da ma'auni masu sauƙi kawai; babu dabarun lissafi (formulas)"
    ],
    prerequisites: "\"Gabatarwa ga Shirye-shiryen Kwamfuta da Python\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Ba tare da rubutattun bayanai ba", action: "bayyana mene ne machine learning da gane ko aiki classification ne ko regression", standard: "da bayani daidai, da aƙalla ayyuka 4 cikin 5 da aka rarraba daidai" },
    { id: "O2", condition: "Idan aka ba ku matsalar hasashe", action: "yin ƙaramin dataset mai features masu ma'ana da label, da duba shi don gibi", standard: "da features da ke shafar amsar, ginshiƙin label ɗaya, da aƙalla gibi ɗaya mai yiwuwa da aka ambata" },
    { id: "O3", condition: "Idan aka ba ku dataset da sakamakon gwajin model", action: "bayyana dalilin da yasa ake raba bayanai zuwa training set da test set, da lissafin daidaito", standard: "da daidaito daidai har zuwa cikakken kaso mafi kusa" },
    { id: "O4", condition: "A Google Colab da scikit-learn", action: "loda dataset na atisaye da bayyana layukansa, features da labels", standard: "kuna ambaton yawan layuka da ginshiƙai da ma'anar label" },
    { id: "O5", condition: "Idan aka ba ku dataset na iris", action: "raba bayanai, horar da decision tree, da buga daidaitonsa a kan test set", standard: "code yana gudana ba tare da kuskure ba, kuma an buga daidaiton" },
    { id: "O6", condition: "Idan aka ba ku models biyu da aka horar", action: "kwatanta daidaitonsu a gwaji, hasashen sabon misali, da rubuta iyaka ɗaya ta model ɗin da kuka zaɓa", standard: "kuna zaɓar model da dalili, kuma kuna ambaton iyaka ta gaske" }
  ],
  chapters: [
    {
      name: "Babi na 1: Yadda na'urori ke koyo",
      lessons: [
        {
          objectives: ["O1"],
          title: "Mene ne machine learning",
          minutes: 4,
          goal: "Bayyana machine learning da kalmominku, da gane shi a rayuwar yau da kullum.",
          text: [
            "A shirye-shirye na yau da kullum, mutum ne yake rubuta dokoki. A machine learning (ML), kuna ba kwamfuta misalai da yawa tare da amsoshi daidai, ita kuma tana nemo dokokin da kanta. Sakamakon ana kiransa model.",
            "Misalai na yau da kullum: imel ɗinku yana koyon yadda spam yake kama daga miliyoyin imel da aka yi wa alama. Manhajar waƙa tana ba da shawarar waƙoƙi daga abin da mutane kamarku suka saurara. Manhajar taswira tana hasashen cunkoso daga tafiye-tafiyen da suka gabata.",
            "Ayyuka biyu da aka saba: classification yana sa abubuwa cikin rukunoni (spam ko ba spam, wane irin fure). Regression yana hasashen lamba (farashin gida, minti nawa kafin bas ta zo). Idan misalan suna zuwa da amsoshi, ana kiransa supervised learning, kuma shi ne abin da wannan kwas ɗin yake koyarwa."
          ],
          words: [["Machine learning (ML)", "kwamfutoci suna nemo tsari a cikin misalai maimakon bin dokokin da mutum ya rubuta."], ["Model", "abin da ML yake samarwa: tarin tsare-tsaren da aka koya da ke yin hasashe."], ["Classification", "hasashen rukuni ko nau'i."], ["Regression", "hasashen lamba."], ["Supervised learning", "koyo daga misalai da ke zuwa da amsoshi daidai."]],
          slides: [
            { title: "Dokoki da koyo", bullets: ["Shirye-shirye: mutum yana rubuta dokoki", "ML: kwamfuta tana nemo dokoki daga misalai", "Sakamakon shi ne model"] },
            { title: "ML da kuke riga kuke amfani da shi", bullets: ["Matatun spam", "Shawarwarin waƙoƙi da bidiyo", "Lokutan cunkoso a taswira", "Faɗakarwar zamba a kati"] },
            { title: "Ayyuka biyu da aka saba", bullets: ["Classification: wane rukuni?", "Regression: wace lamba?", "Supervised: misalai suna zuwa da amsoshi"] }
          ],
          tryIt: "Ku rubuta manhajoji uku da kuke amfani da su waɗanda wataƙila suna amfani da machine learning. Ga kowanne, ku rubuta abin da yake hasashe, da ko classification ne (rukuni) ko regression (lamba).",
          youCanNow: "bayyana mene ne machine learning da bambance classification da regression.",
          quickCheck: [
            { objective: "O1", q: "A machine learning, mene ne model?", options: ["Jerin dokokin da mutum ya rubuta da hannu", "Takardar lissafi (spreadsheet) ta bayanai", "Wani nau'in kwamfuta", "Sakamakon kwamfuta ta nemo tsari a cikin misalai"], answer: 3, why: "Model shi ne abin da kwamfuta ke samarwa bayan ta nemo tsari a cikin misalai." },
            { objective: "O1", q: "Wani shago yana son ya rarraba imel na abokan ciniki zuwa \"ƙorafi\" ko \"tambaya\". Wane irin aiki za ku kira wannan?", options: ["Regression", "Classification", "Gwaji", "Overfitting"], answer: 1, why: "Sa abubuwa cikin rukunoni classification ne; hasashen lamba regression ne." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Bayanai: features da labels",
          minutes: 5,
          goal: "Gina ƙaramin dataset mai features da label.",
          text: [
            "ML yana koyo daga bayanai (data), yawanci tebur. Kowane layi misali ɗaya ne. Ginshiƙan da ke bayyana misalin su ne features. Ginshiƙin da ke da amsar da kuke son hasashe shi ne label.",
            "Misali: don hasashen ko bas za ta makara, kowane layi tafiya ɗaya ne. Features za su iya zama lokacin rana, ranar mako, da ko an yi ruwan sama. Label shi ne ta makara ko ta zo a kan lokaci.",
            "Features masu kyau abubuwa ne da ke shafar amsar da gaske. Layuka da yawa yawanci suna taimakawa. Dole ne bayanan su kasance masu adalci kuma cikakku: idan kun tattara tafiye-tafiyen ranakun aiki kawai, model ɗin ba zai yi kyau a ƙarshen mako ba. Model ba zai fi bayanansa kyau ba."
          ],
          steps: ["Ku yanke abin da kuke son hasashe: wannan shi ne label ɗinku.", "Ku rubuta abubuwan da za su iya shafar sa: waɗannan su ne features ɗinku.", "Ku yi tebur mai layi ɗaya ga kowane misali.", "Ku cika aƙalla layuka 10 daga rayuwa ta gaske.", "Ku duba: shin wasu nau'ikan misalai ba su nan?"],
          words: [["Dataset", "tarin misalai, yawanci tebur."], ["Feature", "ginshiƙi da ke bayyana misali, ana amfani da shi don yin hasashe."], ["Label", "ginshiƙin amsa da model yake koyon hasashe."], ["Son kai a bayanai (bias in data)", "idan bayanai sun bar wasu rukunoni ko sun ƙirga su fiye da kima, don haka model ɗin ya zama marar adalci ko kuskure a gare su."]],
          slides: [
            { title: "Bayanai tebur ne", bullets: ["Kowane layi: misali ɗaya", "Features: ginshiƙan bayani", "Label: amsar da za a yi hasashe"] },
            { title: "Misali: shin bas ta makara?", bullets: ["Features: lokaci, rana, ruwan sama", "Label: ta makara ko a kan lokaci"] },
            { title: "Bayanai masu kyau", bullets: ["Features da ke da muhimmanci da gaske", "Isassun layuka", "Babu rukunin da ya ɓace, kamar ƙarshen mako"] }
          ],
          tryIt: "Ku zaɓi abin da za ku iya hasashe daga rayuwar yau da kullum, kamar ko za ku gaji bayan atisaye ko ko shago zai cika da mutane. Ku yi tebur mai features biyu ko uku da label, ku cika layuka 10.",
          youCanNow: "zaɓar label da features masu amfani, da gina ƙaramin dataset.",
          quickCheck: [
            { objective: "O2", q: "A tebur na bayanai, mene ne features?", options: ["Ginshiƙan da ke bayyana kowane misali", "Amsar da kuke son hasashe", "Daidaiton model", "Test set"], answer: 0, why: "Features suna bayyana misalin; label shi ne amsar da za a yi hasashe." },
            { objective: "O2", q: "Kun tattara bayanai kan ɗaliban da ke gama aikin gida, amma daga aji ɗaya kawai. Me za ku yi kafin horo?", options: ["Ku horar nan take; aji ɗaya ya isa ga kowa", "Ku goge ginshiƙin label", "Ku tattara bayanai daga ƙarin azuzuwa don model ɗin ya yi adalci ga sauran ɗalibai", "Ku yi amfani da layuka biyar na farko kawai"], answer: 2, why: "Bayanai daga rukuni ɗaya za su iya sa model ya yi rauni ko rashin adalci ga wasu." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Horo da gwaji: shin model ɗin yana da kyau?",
          minutes: 5,
          goal: "Raba bayanai zuwa training set da test set, da auna daidaito.",
          text: [
            "Horo (training) shi ne lokacin da model yake nazarin misalai don nemo tsari. Amma model da ya haddace misalansa kawai zai iya bayyana kamar cikakke, kuma ya kasa a kan sababbi. Ana kiran wannan overfitting, kamar ɗalibin da ya haddace amsoshin jarabawar bara.",
            "Don haka kuna ajiye wasu bayanai a gefe. Training set (sau da yawa kusan kashi 75 zuwa 80 na layuka) ana amfani da shi don koyo. Test set (sauran) ana ɓoye shi har ƙarshe, ana amfani da shi don duba model a kan misalan da bai taɓa gani ba.",
            "Daidaito (accuracy) shi ne kason misalan gwaji da ya samu daidai. Daidai 18 cikin 20 kashi 90 ne. Koyaushe ku tambayi mene ne asarar kuskure: shawarar waƙa marar daidai ba matsala ba ce, amma faɗakarwar zamba da aka rasa matsala ce."
          ],
          steps: ["Ku gauraya layukanku.", "Ku sa kusan kashi 75 a training set.", "Ku ajiye sauran a matsayin test set, kuma kada ku duba shi.", "Ku nemo tsari (doka) daga training set kaɗai.", "Ku yi amfani da shi a kan test set, ku ƙirga nawa ya samu daidai."],
          words: [["Horo (training)", "model yana koyon tsari daga misalai."], ["Training set", "layukan da ake amfani da su don koyo."], ["Test set", "layukan da aka ajiye a gefe don duba model a kan sababbin misalai."], ["Overfitting", "idan model ya haddace bayanan horonsa kuma ya yi rauni a kan sababbin bayanai."], ["Daidaito (accuracy)", "kason hasashen da suka yi daidai."]],
          slides: [
            { title: "Horo", bullets: ["Model yana nazarin misalai", "Yana nemo tsari", "Haddacewa ba koyo ba ne"] },
            { title: "Ajiye wasu bayanai a gefe", bullets: ["Training set: kusan 75-80% na layuka", "Test set: sauran, a ɓoye har ƙarshe"] },
            { title: "Daidaito (accuracy)", bullets: ["Amsoshi daidai / jimillar misalan gwaji", "Daidai 18 cikin 20 = 90%", "Ku tambayi mene ne asarar kuskure"] }
          ],
          tryIt: "Ku ɗauki teburinku mai layuka 10 daga Darasi na 2. Ku rufe layuka 2 na ƙarshe. Daga 8 na farko, ku rubuta doka ɗaya mai sauƙi (misali \"idan an yi ruwan sama, bas za ta makara\"). Ku gwada dokar a kan layuka 2 da aka ɓoye, ku lissafa daidaiton.",
          youCanNow: "raba bayanai zuwa training set da test set, da lissafin daidaito.",
          quickCheck: [
            { objective: "O3", q: "Mene ne overfitting?", options: ["Idan model ya yi ƙanƙanta sosai", "Idan bayanan gwaji sun yi yawa", "Idan model ya haddace misalan horonsa kuma ya kasa a kan sababbi", "Idan daidaito kashi 50 ne"], answer: 2, why: "Overfitting kamar haddace amsoshin jarabawar bara ne." },
            { objective: "O3", q: "Wani model na zamba ya sami daidaito 95%, amma abubuwan da ya rasa zamba ce ta gaske. Me za ku tambaya a gaba?", options: ["Mene ne asarar kurakuran?", "Za mu iya tsallake test set?", "Za mu iya horarwa a kan test set?", "Shin 95% koyaushe ya isa?"], answer: 0, why: "Koyaushe ku tambayi asarar kuskure; faɗakarwar zamba da aka rasa tana da muhimmanci sosai." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Yadda na'urori ke koyo",
        questions: [
          { objective: "O1", q: "Daga me model na machine learning yake koyo?", options: ["Dokokin da mutum ya rubuta don kowane hali", "Batirin kwamfutar", "Misalai, sau da yawa tare da amsoshi daidai", "Tsammani kawai ba tare da dalili ba"], answer: 2, why: "ML yana nemo tsari a cikin misalai." },
          { objective: "O1", q: "Hasashen zafin gobe a digiri shi ne:", options: ["Regression", "Classification", "Ba ML ba ne", "Label"], answer: 0, why: "Hasashen lamba regression ne." },
          { objective: "O2", q: "A tebur don hasashen ko shago zai cika, \"ya cika ko bai cika ba\" shi ne:", options: ["Feature", "Test set", "Daidaito", "Label"], answer: 3, why: "Label shi ne amsar da kuke son hasashe." },
          { objective: "O3", q: "Me yasa ake ɓoye test set har ƙarshe?", options: ["Don horo ya yi sauri", "Don duba model a kan misalan da bai taɓa gani ba", "Domin ya lalace", "Don bayanan su yi yawa"], answer: 1, why: "Gwaji a kan sababbin bayanai yana nuna ko model ya koya da gaske." },
          { objective: "O3", q: "Model ya sami misalan gwaji 15 cikin 20 daidai. Mene ne daidaitonsa?", options: ["15%", "20%", "50%", "75%"], answer: 3, why: "15 raba 20 yana bayar da 0.75, wato kashi 75." }
        ]
      }
    },
    {
      name: "Babi na 2: Horar da model ɗinku na farko a Colab",
      lessons: [
        {
          objectives: ["O4"],
          title: "Loda dataset da scikit-learn",
          minutes: 5,
          goal: "Loda dataset na atisaye a Colab da duba features da labels ɗinsa.",
          text: [
            "scikit-learn library ne na Python kyauta don machine learning, kuma ya riga ya kasance a Google Colab. Yana zuwa da ƙananan datasets na atisaye. Dataset na iris yana da furanni 150. Kowace tana da features huɗu (tsawo da faɗin sassa biyu na furen, a santimita) da label: ɗaya daga cikin nau'o'i uku.",
            "Ku loda shi da: from sklearn.datasets import load_iris, sannan iris = load_iris(). Features suna cikin iris.data, labels kuma suna cikin iris.target. iris.feature_names da iris.target_names suna faɗa muku ma'anar ginshiƙan da labels.",
            "Koyaushe ku duba bayananku kafin horo: layuka nawa, mene ne ginshiƙan, da wasu layukan misali. iris.data.shape yana faɗa muku layuka da ginshiƙai: (150, 4)."
          ],
          steps: ["Ku buɗe sabon notebook a colab.research.google.com.", "Ku gudanar da: from sklearn.datasets import load_iris", "Ku gudanar da: iris = load_iris()", "Ku buga iris.data.shape, iris.feature_names da iris.target_names.", "Ku buga layuka uku na farko: print(iris.data[:3], iris.target[:3])"],
          words: [["scikit-learn", "library na Python kyauta don machine learning, ana shigo da shi a matsayin sklearn."], ["Dataset na iris", "sanannen dataset na atisaye mai furanni 150 a nau'o'i uku."], ["shape", "yawan layuka da ginshiƙai a cikin bayanai."], ["X da y", "sunayen da aka saba: X don features, y don labels."]],
          slides: [
            { title: "scikit-learn", bullets: ["Library na ML na Python kyauta", "Ya riga ya kasance a Google Colab", "Yana zuwa da datasets na atisaye"] },
            { title: "Dataset na iris", bullets: ["Furanni 150, features 4 kowace", "Label: ɗaya daga cikin nau'o'i 3", "iris.data da iris.target"] },
            { title: "Ku duba kafin ku horar", bullets: ["iris.data.shape yana bayar da (150, 4)", "feature_names da target_names", "Ku buga wasu layuka"] }
          ],
          sources: [SKLEARN, COLAB],
          tryIt: "Ku loda dataset na iris a Colab. Ku buga shape, sunayen features huɗu, sunayen nau'o'i uku, da layuka biyar na farko tare da labels ɗinsu. Ku rubuta wace lamba ke nufin wane nau'i.",
          youCanNow: "loda dataset a Colab da bayyana features, labels da girmansa.",
          quickCheck: [
            { objective: "O4", q: "A dataset na iris na scikit-learn, me iris.target yake riƙe?", options: ["Ma'aunin furannin", "Labels na nau'ikan", "Sunayen ginshiƙai", "Daidaito"], answer: 1, why: "iris.target yana riƙe labels; iris.data yana riƙe features." },
            { objective: "O4", q: "Kun gama loda sabon dataset. Me za ku yi kafin horar da model?", options: ["Ku horar nan take ba tare da dubawa ba", "Ku goge rabin layuka", "Ku canja labels da hannu", "Ku duba shape, sunayen ginshiƙai da wasu layukan misali"], answer: 3, why: "Koyaushe ku duba bayananku kafin horo." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Horo da gwajin decision tree",
          minutes: 6,
          goal: "Raba bayanai, horar da decision tree, da auna daidaitonsa.",
          text: [
            "Decision tree (bishiyar yanke shawara) yana koyon jerin tambayoyin e-ko-a'a, kamar zanen matakai (flowchart): \"Shin furen petal ya gajarta da 2.5 cm? To nau'i na 0 ne.\" Yana da sauƙin bayani, shi ya sa yake model na farko mai kyau.",
            "Kowane model na scikit-learn yana aiki iri ɗaya: ku ƙirƙira shi, ku yi masa fit a kan bayanan horo, sannan ku yi predict a kan sababbin bayanai. Code ɗin: X, y = load_iris(return_X_y=True). X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.25, random_state=42). model = DecisionTreeClassifier(random_state=42). model.fit(X_train, y_train).",
            "Sannan ku gwada shi: predictions = model.predict(X_test) da print(accuracy_score(y_test, predictions)). random_state=42 kawai yana gyara gaurayawar don ku sami sakamako iri ɗaya duk lokacin da kuka gudanar da shi."
          ],
          steps: ["Ku shigo da: from sklearn.model_selection import train_test_split", "Ku shigo da: from sklearn.tree import DecisionTreeClassifier", "Ku shigo da: from sklearn.metrics import accuracy_score", "Ku raba da train_test_split(X, y, test_size=0.25, random_state=42).", "Ku ƙirƙiri model, ku kira model.fit(X_train, y_train), sannan ku yi predict a kan X_test ku buga daidaiton."],
          words: [["Decision tree", "model da ke koyon zanen matakai na tambayoyin e-ko-a'a."], ["fit", "horar da model a kan bayanai."], ["predict", "amfani da model da aka horar don tsammanin labels na sababbin bayanai."], ["train_test_split", "kayan aikin scikit-learn da ke raba bayanai zuwa training set da test set."], ["random_state", "lambar da ke gyara gaurayawa ta yadda sakamako zai maimaitu."]],
          slides: [
            { title: "Decision trees", bullets: ["Zanen matakai na tambayoyin e-ko-a'a", "Mai sauƙin bayani", "Model na farko mai kyau"] },
            { title: "Tsarin kowane model", bullets: ["Ku ƙirƙira shi", "fit(X_train, y_train)", "predict(X_test)"] },
            { title: "Ku auna shi", bullets: ["accuracy_score(y_test, predictions)", "test_size=0.25 yana ajiye 25% don gwaji", "random_state yana sa sakamako ya maimaitu"] }
          ],
          sources: [SKLEARN],
          tryIt: "Ku rubuta ku gudanar da cikakken code na decision tree a Colab. Ku buga daidaiton. Sannan ku canja test_size zuwa 0.5, ku sake gudanarwa, ku rubuta ko daidaito ya ƙaru ko ya ragu.",
          youCanNow: "raba bayanai, horar da decision tree da fit, yin hasashe da shi, da auna daidaito.",
          quickCheck: [
            { objective: "O5", q: "Me yasa decision tree model na farko ne mai kyau?", options: ["Yana da sauƙin bayani, kamar zanen matakai na tambayoyin e-ko-a'a", "Ba ya taɓa yin kuskure", "Ba ya buƙatar bayanai", "Yana aiki a kan furanni kawai"], answer: 0, why: "Ana iya karanta tambayoyin decision tree kamar zanen matakai." },
            { objective: "O5", q: "Kun horar da model ɗinku kuma kuna son ku duba shi. Wane layi za ku gudanar?", options: ["model.fit(X_test, y_test)", "load_iris()", "predictions = model.predict(X_test), sannan accuracy_score(y_test, predictions)", "random_state=42"], answer: 2, why: "Ku yi predict a kan test set, sannan ku kwatanta da labels na gaskiya don samun daidaito." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kwatanta models da sanin iyakokinsu",
          minutes: 6,
          goal: "Horar da model na biyu, kwatanta shi da na farko, hasashen sabon misali, da ambaton iyaka.",
          text: [
            "Ba kasafai ake samun model ɗaya cikakke ba, don haka kuna gwada fiye da ɗaya. k-nearest neighbors (KNN) yana hasashe ta hanyar nemo misalai k mafi kama a cikin bayanan horo, sannan ya yi ƙuri'a. Ku ƙirƙira shi da KNeighborsClassifier(n_neighbors=5) daga sklearn.neighbors; yana amfani da matakan fit da predict iri ɗaya.",
            "Ku kwatanta models biyun a kan test set ɗaya. Don hasashen sabuwar fure ɗaya, ku ba model list a cikin list: model.predict([[5.1, 3.5, 1.4, 0.2]]). Yana mayar da lambar nau'in; iris.target_names yana mayar da ita suna.",
            "Ku san iyakoki. Waɗannan models suna sanin waɗannan nau'o'i uku da waɗannan ma'auni huɗu kawai: ku nuna musu fure ta wardi (rose), za su ci gaba da ce mata iris. Ƙaramin test set zai iya sa daidaito ya bayyana fiye ko ƙasa da yadda yake. Kuma da bayanan mutane na gaske, ku duba cewa model yana aiki da adalci ga kowane rukuni kafin kowa ya dogara da shi."
          ],
          steps: ["Ku shigo da: from sklearn.neighbors import KNeighborsClassifier", "Ku ƙirƙiri knn = KNeighborsClassifier(n_neighbors=5) ku yi masa fit a kan bayanan horo iri ɗaya.", "Ku buga makin daidaito biyun.", "Ku yi hasashen sabuwar fure ɗaya da model mafi kyau: model.predict([[5.1, 3.5, 1.4, 0.2]])", "Ku rubuta wane model za ku zaɓa da iyaka ɗaya."],
          words: [["k-nearest neighbors (KNN)", "model da ke hasashe ta ƙuri'ar misalan horo mafi kama."], ["n_neighbors", "misalai masu kama nawa KNN yake dubawa (wato k)."], ["Iyaka (limit)", "halin da model ba zai iya sarrafawa da kyau ba."], ["Adalci (fairness)", "model yana aiki daidai wa daida ga kowane rukunin mutanen da yake shafa."]],
          slides: [
            { title: "Ku gwada fiye da model ɗaya", bullets: ["KNN: ƙuri'ar misalai k mafi kama", "KNeighborsClassifier(n_neighbors=5)", "Matakan fit da predict iri ɗaya"] },
            { title: "Kwatanta da hasashe", bullets: ["Test set ɗaya ga models biyun", "model.predict([[5.1, 3.5, 1.4, 0.2]])", "target_names yana mayar da lambobi sunaye"] },
            { title: "Ku san iyakoki", bullets: ["Yana sanin abin da aka horar da shi kawai", "Ƙananan test sets suna iya ruɗarwa", "Da bayanan mutane, ku duba adalci"] }
          ],
          sources: [SKLEARN],
          tryIt: "Aikin ƙarshe: a notebook ɗaya, ku horar da decision tree da model na KNN a kan rabuwa ɗaya, ku buga daidaito biyun, ku yi hasashen nau'in furen [6.0, 2.9, 4.5, 1.5] da model mafi kyau ku buga sunansa, sannan ku rubuta jimloli biyu kan wane model kuka zaɓa da iyaka ɗaya da yake da ita.",
          youCanNow: "horarwa, gwadawa da kwatanta models biyu, yin hasashe, da bayyana iyakokin model.",
          quickCheck: [
            { objective: "O6", q: "Me n_neighbors=5 yake nufi a model na KNN?", options: ["Yana horarwa sau biyar", "Yana duba misalan horo 5 mafi kama ya yi ƙuri'a", "Yana ajiye kashi 5 don gwaji", "Yana hasashen furanni 5 a lokaci ɗaya"], answer: 1, why: "KNN yana hasashe ta ƙuri'ar misalai k mafi kama." },
            { objective: "O6", q: "Model ɗinku ya yi hasashen nau'i na 0 ga sabuwar fure. Ta yaya za ku mayar da wannan lambar suna?", options: ["Ku yi tsammanin sunan", "Ku sake horar da model", "Ku canja girman gwaji", "Ku duba shi a iris.target_names"], answer: 3, why: "iris.target_names yana mayar da lambar nau'i zuwa suna." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Horar da model ɗinku na farko a Colab",
        questions: [
          { objective: "O4", q: "Me iris.data.shape (150, 4) yake faɗa muku?", options: ["Nau'o'i 150 da furanni 4", "Model ɗin daidai ne kashi 150%", "Layuka 4 da ginshiƙai 150", "Layuka 150 da ginshiƙan features 4"], answer: 3, why: "Shape yana lissafa layuka, sannan ginshiƙai." },
          { objective: "O5", q: "Mene ne tsarin matakai daidai na model na scikit-learn?", options: ["Ku ƙirƙira shi, ku yi fit a kan bayanan horo, sannan ku yi predict", "predict, sannan fit, sannan ƙirƙira", "fit a kan test set, sannan predict a kan bayanan horo", "predict kawai"], answer: 0, why: "Ana ƙirƙirar kowane model, a yi masa fit, sannan a yi amfani da shi don predict." },
          { objective: "O5", q: "Me test_size=0.25 yake nufi a train_test_split?", options: ["Amfani da layuka 25", "Horo na minti 25", "Ajiye 25% na layuka don gwaji", "Dole daidaito ya zama 25%"], answer: 2, why: "test_size yana saita kason layukan da aka ajiye a gefe." },
          { objective: "O6", q: "Ta yaya k-nearest neighbors yake yin hasashe?", options: ["Yana tambayar mutum", "Yana jefa kuɗi sama (kai ko gindi)", "Yana rubuta dokoki da hannu", "Yana yin ƙuri'ar misalan horo mafi kama"], answer: 3, why: "KNN yana amfani da misalai k mafi kusa." },
          { objective: "O6", q: "An ba model ɗinku na iris ma'aunin fure ta wardi (rose). Me zai faru?", options: ["Zai ce \"rose\"", "Zai ƙi", "Zai ci gaba da ambaton ɗaya daga cikin nau'o'in iris uku", "Zai koyi wardi da kansa"], answer: 2, why: "Model yana sanin labels da aka horar da shi a kai kawai." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Gabatarwa ga Machine Learning (Koyon Na'ura)",
    questions: [
      { objective: "O1", q: "Machine learning yana nufin:", options: ["Mutum yana rubuta kowace doka", "Kwamfuta tana nemo tsari daga misalai", "Mutum-mutumi (robot) da ke tafiya", "Intanet mafi sauri"], answer: 1, why: "ML yana koyo daga bayanai." },
      { objective: "O1", q: "Wanne ne amfanin machine learning na yau da kullum?", options: ["Matatar spam ta imel", "Makunnin wuta", "Taswirar takarda", "Na'urar lissafi tana haɗa 2 + 2"], answer: 0, why: "Matatun spam suna koyo daga imel da yawa da aka yi wa alama." },
      { objective: "O1", q: "Yanke shawarar ko hoto yana nuna mage ko kare shi ne:", options: ["Regression", "Overfitting", "Classification", "Feature"], answer: 2, why: "Zaɓar rukuni classification ne." },
      { objective: "O1", q: "Hasashen minti nawa kafin bas ta iso shi ne:", options: ["Regression", "Classification", "Tarin labels", "Gwaji"], answer: 0, why: "Hasashen lamba regression ne." },
      { objective: "O1", q: "Supervised learning yana amfani da:", options: ["Babu bayanai", "Hotuna kawai", "Malami a cikin aji kawai", "Misalai tare da amsoshi daidai"], answer: 3, why: "Supervised yana nufin an yi wa misalan label." },
      { objective: "O2", q: "A dataset, kowane layi yawanci shi ne:", options: ["Feature ɗaya", "Misali ɗaya", "Dukan model", "Makin gwaji"], answer: 1, why: "Layuka misalai ne; ginshiƙai features ne ko label." },
      { objective: "O2", q: "Don hasashen ko tikitin wasa zai ƙare, wanne ne feature mai ma'ana?", options: ["Launin shafin sayar da tikiti", "Ranar mako da abokin hamayya", "Daidaiton model", "Label"], answer: 1, why: "Features ya kamata su shafi amsar da gaske." },
      { objective: "O2", q: "Bayanan bas ɗinku suna da tafiye-tafiyen ranakun aiki kawai. Mene ne haɗarin?", options: ["Babu", "Zai horar da sauri sosai", "Daidaito zai zama 100%", "Model ɗin zai yi rauni wajen hasashen ƙarshen mako"], answer: 3, why: "Nau'ikan misalan da suka ɓace suna sa model ya yi kuskure a kansu." },
      { objective: "O3", q: "Overfitting shi ne lokacin da model:", options: ["Ya haddace bayanan horo kuma ya kasa a kan sababbin bayanai", "Ya yi ƙanƙanta da ba za a iya loda shi ba", "Yana da features kaɗan", "Ya ƙare da ƙwaƙwalwa (memory)"], answer: 0, why: "Model da ya yi overfitting ba ya aiki da kyau a kan sababbin bayanai." },
      { objective: "O3", q: "Wane bayani ya kamata ku yi amfani da shi don auna daidaito?", options: ["Training set", "Duk bayanan da kuke so", "Test set da model bai gani ba", "Layi ɗaya kawai"], answer: 2, why: "Bayanan da ba a gani ba ne kaɗai ke nuna aiki na gaske." },
      { objective: "O3", q: "Model ya sami layukan gwaji 45 cikin 50 daidai. Daidaito shi ne:", options: ["45%", "50%", "90%", "95%"], answer: 2, why: "45 raba 50 yana bayar da 0.9." },
      { objective: "O4", q: "scikit-learn shi ne:", options: ["Manhaja ta kuɗi", "Wani nau'in dataset", "Library na Python kyauta don machine learning", "Takardar lissafi (spreadsheet)"], answer: 2, why: "scikit-learn (sklearn) kyauta ne kuma buɗaɗɗen tushe (open source)." },
      { objective: "O4", q: "A dataset na iris, nau'in furen shi ne:", options: ["Feature", "Label", "Shape", "Model"], answer: 1, why: "Nau'in shi ne abin da muke hasashe, don haka shi ne label." },
      { objective: "O5", q: "Wane layi ne ke horar da model?", options: ["model.fit(X_train, y_train)", "model.predict(X_test)", "print(model)", "load_iris()"], answer: 0, why: "fit yana horar da model." },
      { objective: "O5", q: "Wane layi ne ke bayar da hasashe ga test set?", options: ["model.fit(X_test)", "accuracy_score(X_test)", "model.predict(X_test)", "train_test_split(model)"], answer: 2, why: "predict yana amfani da model da aka horar a kan sababbin bayanai." },
      { objective: "O5", q: "Me yasa ake saita random_state=42?", options: ["Don sakamako ya zama iri ɗaya a kowane gudanarwa", "Don model ya fi kyau da kashi 42", "Don amfani da layuka 42", "Dole ne don gudanar da Python"], answer: 0, why: "Yana gyara gaurayawar bazuwar." },
      { objective: "O5", q: "Decision tree yana kama da:", options: ["Ƙuri'ar maƙwabta", "Jimillar takardar lissafi", "Tsammani na bazuwar", "Zanen matakai na tambayoyin e-ko-a'a"], answer: 3, why: "Bishiyoyi suna raba bayanai da tambayoyi." },
      { objective: "O6", q: "Don hasashen sabuwar fure ɗaya kuna rubuta:", options: ["model.predict(5.1, 3.5, 1.4, 0.2)", "model.predict([[5.1, 3.5, 1.4, 0.2]])", "model.fit([5.1])", "predict.model(5.1)"], answer: 1, why: "Model yana tsammanin list na layuka, don haka layi ɗaya yana shiga cikin wani list." },
      { objective: "O6", q: "Models biyu sun sami 93% da 97% a kan test set ɗaya. Mataki mai kyau na gaba shi ne:", options: ["Goge su duka", "Zaɓar 97% da kuma tunani kan iyakokinsa da asarar kurakurai", "Sake horarwa a kan test set", "Zaɓar wanda ya fi jinkiri"], answer: 1, why: "Ku kwatanta da adalci, sannan ku auna iyakoki da asarar kurakurai." },
      { objective: "O6", q: "Kafin amfani da model da ke yanke shawara game da mutane, ya kamata ku:", options: ["Tsallake gwaji", "Ɓoye yadda yake aiki", "Amfani da bayanan horo kawai", "Duba cewa yana aiki da adalci ga kowane rukuni"], answer: 3, why: "Duba adalci yana kare mutanen da yake shafa." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
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
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Loda da raba bayanai",
        objective: "O5",
        notYet: "Bayanan ba su loda ba, ko an gwada model a kan bayanan horo.",
        meets: "An loda bayanan iris kuma an raba su zuwa training set da test set da train_test_split.",
        exceeds: "Yana kuma buga shape na kowane set kuma yana bayanin rabuwar."
      },
      {
        name: "An horar da models biyu kuma an gwada su",
        objective: "O5",
        notYet: "An horar da model ɗaya kawai, ko daidaito ba ya nan.",
        meets: "An horar da decision tree da model na KNN, kuma an buga daidaiton gwajin kowanne.",
        exceeds: "Yana kuma gwada wata ƙima ta biyu ta n_neighbors kuma yana kwatantawa."
      },
      {
        name: "Hasashe ga sabuwar fure",
        objective: "O6",
        notYet: "Babu hasashe, ko shigarwar tana da siffa marar daidai.",
        meets: "Model mafi kyau yana hasashen sabuwar fure ɗaya kuma an buga sunan nau'in.",
        exceeds: "Yana kuma bayanin dalilin da yasa hasashen yake da ma'ana daga ma'aunin."
      },
      {
        name: "Zaɓi da iyakoki",
        objective: "O6",
        notYet: "Jimloli biyun ba su nan, ko ba a ambaci iyaka ta gaske ba.",
        meets: "Jimloli biyu: wane model da dalili, da iyaka ɗaya ta gaske.",
        exceeds: "Yana kuma ambaton asarar kurakurai ko adalci ga bayanan mutane."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka sami \"Ya cika\" ko \"Ya wuce\" a kowane layin rubric na aikin ƙarshe",
      "Masu koyo da suka ce sun horar da model a kan wani dataset cikin kwanaki 30 bayan kwas ɗin (binciken biyo baya)",
      "Masu koyo da suka ci gaba zuwa kwas na gaba, kamar Deep Learning ko Data Science for Beginners",
      "Masu koyo da suka ƙara notebook ɗin a cikin tarin ayyukansu (portfolio), aikin aji ko takardar neman aiki"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta ko laptop mai burauzar intanet",
      "Asusun Google kyauta don amfani da Google Colab (scikit-learn ya riga ya kasance a ciki)",
      "Takarda da alƙalami don zana features da labels na aikin dataset",
      "Kusan minti 60 zuwa 75 gaba ɗaya, tare da lokacin atisaye"
    ],
    facilitatorNotes: [
      "Ku duba cewa masu koyo za su iya buɗe Google Colab kafin aji; wasu asusun makaranta suna toshe shi.",
      "Ku yi aikin dataset na makarar bas ko na aikin gida a takarda a matsayin rukuni kafin kowane code.",
      "Ku sa masu koyo su kwatanta daidaito a kan allo; ƙimomin random_state daban-daban suna bayar da sakamako daban-daban, wanda ke kawo tattaunawa mai kyau.",
      "Ku tayar da batun adalci a fili: ku tambayi me zai iya lalacewa idan model kamar wannan ya yanke shawara game da mutane.",
      "Ku ƙarfafa masu aiki biyu-biyu su bayyana wa juna kowane layin code kafin su gudanar da shi."
    ]
  }
};
