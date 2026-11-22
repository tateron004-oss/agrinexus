"use strict";

// Koach Learn course, Hausa (ha) translation of shared/data-science-beginners.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const COLAB = { name: "Google Colab: Tambayoyin da ake yawan yi", url: "https://research.google.com/colaboratory/faq.html" };
const PANDAS = { name: "pandas: Minti 10 zuwa pandas", url: "https://pandas.pydata.org/docs/user_guide/10min.html" };
const SEABORN = { name: "seaborn: load_dataset", url: "https://seaborn.pydata.org/generated/seaborn.load_dataset.html" };

module.exports = {
  id: "data-science-beginners-ha",
  lang: "ha",
  translationOf: "data-science-beginners",
  category: "Youth",
  name: "Gabatarwa ga Kimiyyar Bayanai (Data Science) da Nazarin Bayanai",
  skills: "Yin tambayar da bayanai za su iya amsawa, Lissafin matsakaici da gane baƙon ƙima (outlier), Loda bayanai da pandas, Tsaftacewa da rarraba bayanai rukuni-rukuni, Yin jadawali da raba sakamako",
  outcome: "ɗaukar bayanai na gaske a Google Colab, loda su da pandas, tsaftace su, amsa tambaya a sarari da matsakaici da rukunoni, yin jadawali, da rubuta sakamako uku na gaskiya.",
  about: [
    "Masu nazarin bayanai suna mayar da layukan lambobi zuwa amsoshin da mutane za su iya aiki da su: wace rana shago ya fi cunkoso, wane atisaye ya fi taimakon ƙungiya, ina kuɗin wani shiri suke zuwa. Yana ɗaya daga cikin ƙwarewar aiki mafi amfani a yau, kuma za ku iya farawa kyauta.",
    "Babi na 1 yana koyar da tunani ba tare da rubuta code ba: yin tambaya mai kyau, sanin bayananku, da amfani da matsakaici ba tare da an ruɗe ku ba. Babi na 2 yana komawa Google Colab, shafin intanet kyauta da ke gudanar da Python, inda za ku yi amfani da pandas, kayan aikin bayanai mafi shahara a Python, a kan bayanan wani gidan abinci na gaske.",
    "Kowane darasi yana ɗaukar kusan minti biyar kuma yana ƙarewa da aikin \"Gwada yanzu\". Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "A Google Colab, ku loda bayanan kuɗin goro (tips) na gidan abinci da pandas, ku duba ko akwai ƙimomin da suka ɓace, ku ƙara ginshiƙi na kuɗin goro a matsayin kashi cikin ɗari na kuɗin abinci, ku nemo matsakaicin kashi na kuɗin goro na kowace rana da na abincin rana da na dare, ku yi jadawalin sanduna (bar chart) na ɗaya daga cikinsu, sannan ku rubuta sakamako uku da jimloli masu sauƙi, har da abu ɗaya da bayanan ba za su iya faɗa muku ba.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Matasa da manya da ke fara koyon bayanai: ɗaliban sakandare da na jami'a, 'yan shirye-shiryen matasa, masu horar da wasanni, ma'aikatan ƙananan kasuwanci da ƙungiyoyi masu zaman kansu, da masu son canja sana'a zuwa aikin nazarin bayanai.",
    startingPoint: "Suna iya amfani da kwamfuta da burauzar intanet, kuma sun ɗan rubuta Python. Da yawa suna amfani da spreadsheet (tebur na kwamfuta) amma ba su taɓa loda bayanai a pandas ba, ko duba ƙimomin da suka ɓace, ko kwatanta rukunoni, ko rubuta sakamakon da ke faɗin iyakokinsa.",
    gap: "Ƙungiyoyi, makarantu, kasuwanci da ƙungiyoyi masu zaman kansu suna yanke shawara daga bayanai, kuma nazarin bayanai hanya ce da aka saba bi don shiga ayyukan fasaha. Ba tare da matakan farko ba, mutane suna amsa tambayar da ba ita ba, baƙin ƙimomi ko alaƙa (correlation) suna ruɗar su, ko kuma suna raba jadawali da iƙirarin da bayanan ba su goyi baya ba.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; ana bayanin kalmomi kamar DataFrame, median, outlier da correlation",
      "Na'urori: kwamfuta ko laptop mai burauzar intanet",
      "Asusu da kuɗi: asusun Google kyauta don Google Colab; pandas da seaborn an riga an saka su",
      "Lokaci: kusan minti 5 zuwa 6 kowane darasi tare da atisaye, kusan minti 60 zuwa 75 gaba ɗaya",
      "Lissafi: matsakaici da kashi cikin ɗari kawai"
    ],
    prerequisites: "Introduction to Programming with Python (Gabatarwa ga Shirye-shiryen Kwamfuta da Python)."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku tambaya ta gaske, kamar ta mai horar da wasa ko ta shago", action: "jera matakai biyar na aikin bayanai bisa tsari da haɗa kowanne da misalin", standard: "tare da dukkan matakai biyar (Tambaya, Samo, Tsaftace, Bincika, Raba) a tsarinsu daidai" },
    { id: "O2", condition: "Idan aka ba ku teburin bayanai da tambaya", action: "bayyana abin da kowane ginshiƙi ke ɗauke da shi da nau'insa, da duba ko bayanan za su iya amsa tambayar", standard: "kuna faɗin ginshiƙan lambobi da na rukuni daidai, kuma kuna faɗa idan ba za a iya amsa tambaya ba" },
    { id: "O3", condition: "Idan aka ba ku gajeren jerin lambobi ko iƙirari game da abubuwa biyu", action: "lissafin mean da median, gane kowane baƙon ƙima, da duba ko iƙirarin yana haɗa alaƙa da sanadi", standard: "tare da mean da median daidai, kuma an faɗi kowane kuskuren haɗa alaƙa da sanadi" },
    { id: "O4", condition: "A Google Colab da pandas", action: "loda bayanai a cikin DataFrame da bayyana layukansa, ginshiƙansa da nau'ikansu", standard: "ta amfani da head(), shape, info() da describe() da faɗin sakamakon daidai" },
    { id: "O5", condition: "Idan aka ba ku DataFrame da aka loda", action: "duba ƙimomin da suka ɓace, ƙara ginshiƙin lissafi, tace layuka da kwatanta rukunoni", standard: "code ɗin kowane mataki yana aiki, kuma an rubuta duk tsaftacewar da aka yi" },
    { id: "O6", condition: "Idan kuna da sakamakon rukunoninku", action: "yin jadawalin sanduna mai take da rubuta sakamakon da ke faɗin iyakokinsa", standard: "da lambobi daga sakamakonku, da aƙalla iyaka ɗaya ta gaskiya" }
  ],
  chapters: [
    {
      name: "Babi na 1: Yin tunani kamar mai nazarin bayanai",
      lessons: [
        {
          objectives: ["O1"],
          title: "Mene ne kimiyyar bayanai, da matakai biyar",
          minutes: 4,
          goal: "Faɗin matakai biyar na aikin bayanai da haɗa su da misali na gaske.",
          text: [
            "Kimiyyar bayanai (data science) tana nufin amfani da bayanai don amsa tambayoyi da yanke shawarwari mafi kyau. Nazarin bayanai (data analysis) shi ne sashen aiki da hannu: tsaftacewa, ƙirgawa, kwatantawa da yin jadawali.",
            "Kusan kowane aiki yana bin matakai biyar. Tambaya: me kuke son sani? Samo: nemo bayanan. Tsaftace: gyara kurakurai da giɓi. Bincika: ƙirga, nemo matsakaici, kwatanta da yin jadawali. Raba: faɗa wa mutane abin da kuka gano da kalmomi masu sauƙi.",
            "Misali: wata mai horar da ƙwallon ƙafa ta matasa ta tambaya \"Shin muna ci fiye da haka a rabin lokaci na biyu?\" Ta samo sakamakon kowane wasa, ta cire wasan da aka soke, ta tara ƙwallayen rabin farko da na biyu, sannan ta raba jadawali mai sauƙi da ƙungiyar."
          ],
          steps: ["Ku yi tambaya a sarari.", "Ku samo bayanan.", "Ku tsaftace su.", "Ku bincika su da ƙirga, matsakaici da jadawali.", "Ku raba abin da kuka gano."],
          words: [["Bayanai (data)", "gaskiyoyi da lambobin da aka tattara game da wani abu."], ["Kimiyyar bayanai (data science)", "amfani da bayanai don amsa tambayoyi da jagorantar shawarwari."], ["Nazarin bayanai (data analysis)", "tsaftacewa, taƙaitawa da yin jadawalin bayanai don nemo amsoshi."], ["Dataset (tarin bayanai)", "tarin bayanai, yawanci a tebur."]],
          slides: [
            { title: "Kimiyyar bayanai ita ce", bullets: ["Amfani da bayanai don amsa tambayoyi", "Da yanke shawarwari mafi kyau"] },
            { title: "Matakai biyar", bullets: ["Tambaya, Samo, Tsaftace", "Bincika, Raba"] },
            { title: "Misali: mai horar da ƙwallon ƙafa", bullets: ["Tambaya: ƙarin ƙwallaye a rabin na biyu?", "Samo ku tsaftace sakamakon wasanni", "Bincika ku raba jadawali mai sauƙi"] }
          ],
          tryIt: "Ku yi tunanin tambaya ɗaya daga rayuwarku, aikinku ko al'ummarku da bayanai za su iya amsawa (misali \"Wace rana na fi kashe kuɗi?\"). Ku rubuta abin da za ku yi a kowane mataki na matakai biyar.",
          youCanNow: "bayyana matakai biyar na aikin bayanai da tsara ɗaya.",
          quickCheck: [
            { objective: "O1", q: "Me ke faruwa a matakin Tsaftace na aikin bayanai?", options: ["Kuna yin tambayar", "Kuna gyara kurakurai da giɓi a cikin bayanan", "Kuna raba jadawalin", "Kuna tattara ƙarin bayanai"], answer: 1, why: "Tsaftace yana nufin gyara kurakurai da giɓi kafin ku bincika." },
            { objective: "O1", q: "Mai shago ya tambaya, \"Wace rana muka fi sayarwa?\" Me za ku yi nan take bayan wannan matakin Tambaya?", options: ["Yin jadawali", "Rubuta sakamakon", "Nemo matsakaicin kwanakin mako", "Samo bayanan sayarwa tare da ranaku"], answer: 3, why: "Bayan Tambaya sai Samo: nemo bayanan da za su iya amsa tambayar." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Sanin bayananku: layuka, ginshiƙai da nau'ikansu",
          minutes: 5,
          goal: "Karanta teburin bayanai da faɗin abin da kowane ginshiƙi ke ɗauke da shi da nau'insa.",
          text: [
            "Yawancin bayanai suna zuwa a tebur. Tsararrun bayanai (tidy data) suna nufin kowane layi abu ɗaya ne da kuka auna (wasa ɗaya, sayarwa ɗaya, mutum ɗaya), kuma kowane ginshiƙi gaskiya ɗaya ce game da shi (rana, adadi, ƙungiya).",
            "Ginshiƙai suna da nau'uka. Lambobi za ku iya yin lissafi da su, kamar farashi ko minti. Rukunoni (categories) ƙungiyoyi ne, kamar ranar mako ko sunan ƙungiya: kuna ƙirga su, amma ba ku nemo matsakaicinsu. Ranaku nau'insu daban ne.",
            "Tambayoyi masu kyau suna dacewa da bayanan da kuke da su. \"Mene ne matsakaicin sayarwa a ranar Asabar?\" yana buƙatar ginshiƙin adadin sayarwa da ginshiƙin rana. Idan bayanan ba su da shi, ba za ku iya amsawa ba, kuma faɗin haka yana cikin aikin."
          ],
          steps: ["Ku faɗi abin da layi ɗaya yake wakilta.", "Ku jera kowane ginshiƙi da ma'anarsa.", "Ku yi wa kowane ginshiƙi alama: lamba, rukuni ko rana.", "Ku duba ko za a iya amsa tambayarku da waɗannan ginshiƙai."],
          words: [["Layi (row)", "rikodi ɗaya: abu ɗaya da kuka auna."], ["Ginshiƙi (column)", "gaskiya ɗaya da aka rubuta wa kowane layi."], ["Tsararrun bayanai (tidy data)", "layi ɗaya kowane abu, ginshiƙi ɗaya kowace gaskiya."], ["Na lamba (numeric)", "ginshiƙin lambobi da za ku iya yin lissafi da su."], ["Na rukuni (categorical)", "ginshiƙin ƙungiyoyi ko lakabi, kamar rana ko ƙungiya."]],
          slides: [
            { title: "Tsararrun bayanai", bullets: ["Kowane layi: abu ɗaya da aka auna", "Kowane ginshiƙi: gaskiya ɗaya game da shi"] },
            { title: "Nau'ikan ginshiƙai", bullets: ["Lambobi: farashi, minti", "Rukunoni: rana, ƙungiya", "Ranaku"] },
            { title: "Haɗa tambaya da bayanai", bullets: ["Tambayar tana buƙatar ginshiƙan da suka dace", "Babu ginshiƙi = ba za a iya amsawa ba", "Ku faɗi haka da gaskiya"] }
          ],
          tryIt: "Ku yi ƙaramin tebur na kwanakinku 7 na ƙarshe: rana, ranar mako, awannin barci da yanayin zuciya daga 1 zuwa 5. Ku yi wa kowane ginshiƙi alama a matsayin lamba, rukuni ko rana, sannan ku rubuta tambaya ɗaya da teburin zai iya amsawa da ɗaya da ba zai iya ba.",
          youCanNow: "karanta tebur, faɗin nau'in kowane ginshiƙi da duba ko tambaya ta dace da bayanan.",
          quickCheck: [
            { objective: "O2", q: "Mene ne ginshiƙin rukuni (categorical)?", options: ["Ginshiƙin farashi", "Ginshiƙin ranaku kawai", "Ginshiƙin ƙungiyoyi, kamar sunan ƙungiya ko ranar mako", "Ginshiƙin matsakaita"], answer: 2, why: "Rukunoni ƙungiyoyi ne da kuke ƙirgawa, ba kuke nemo matsakaicinsu ba." },
            { objective: "O2", q: "Teburin sayarwarku yana da ginshiƙin adadi da na rana amma babu lokacin rana. Wani ya tambaya ko safiya ta fi sayarwa. Me za ku ce?", options: ["Bayanan ba za su iya amsa hakan ba, domin babu ginshiƙin lokaci", "Safiya ta fi sayarwa", "Ku nemo matsakaicin ginshiƙin rana", "Ku yi hasashe daga adadin"], answer: 0, why: "Idan bayanan ba su da shi, ba za ku iya amsawa ba, kuma faɗin haka yana cikin aikin." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Matsakaici, baƙin ƙimomi da guje wa ruɗu",
          minutes: 6,
          goal: "Lissafa mean da median, gane baƙon ƙima, da guje wa kuskuren da aka saba yi.",
          text: [
            "Mean (matsakaici) shi ne jimilla a raba da yawan lambobin. Median ita ce ƙimar tsakiya idan kun jera su. Ga 3, 4, 4, 5 da 34, mean shi ne 50 / 5 = 10, amma median 4 ce.",
            "Wannan 34 baƙon ƙima ne (outlier): ƙimar da ta yi nisa da sauran. Wataƙila kuskuren rubutu ne, ko kuma gaskiya ce kuma muhimmiya. Baƙin ƙimomi suna jan mean sosai amma ba sa motsa median da yawa, don haka idan akwai baƙin ƙimomi, median sau da yawa ta fi bayyana ƙima ta yau da kullum.",
            "Abubuwa biyu da ke tafiya tare ana kiransu alaƙa (correlation), amma hakan bai tabbatar da cewa ɗaya ne yake jawo ɗayan ba. Sayar da ice cream da ƙunar rana duk suna ƙaruwa lokacin zafi: rana ce ke jawo su duka. Kafin ku ce wani abu ne sanadi, ku nemi wani dalili."
          ],
          steps: ["Ku jera lambobin.", "Mean: ku tara su ku raba da yawansu.", "Median: ku ɗauki ta tsakiya (ko matsakaicin biyun tsakiya).", "Ku nemi ƙimomin da suka yi nisa da sauran, ku duba ko kurakurai ne.", "Kafin ku ce \"X yana jawo Y\", ku nemi wani bayani daban."],
          words: [["Mean", "matsakaici: jimilla a raba da yawa."], ["Median", "ƙimar tsakiya idan an jera lambobin."], ["Baƙon ƙima (outlier)", "ƙimar da ta yi nisa da sauran."], ["Alaƙa (correlation)", "abubuwa biyu da ke yawan tafiya tare."], ["Sanadi (causation)", "wani abu da yake sa wani abu ya faru da gaske."]],
          slides: [
            { title: "Mean da median", bullets: ["Mean: jimilla / yawa", "Median: ƙimar tsakiya bayan an jera", "3, 4, 4, 5, 34: mean 10, median 4"] },
            { title: "Baƙin ƙimomi", bullets: ["Sun yi nisa da sauran ƙimomi", "Kuskuren rubutu, ko gaskiya kuma muhimmi", "Suna jan mean, ba median ba"] },
            { title: "Alaƙa ba sanadi ba ce", bullets: ["Ice cream da ƙunar rana suna ƙaruwa tare", "Rana ce ke jawo su duka", "Ku fara neman wani dalili"] }
          ],
          tryIt: "Ga lokutan kawo kaya 7 a minti: 22, 25, 19, 24, 95, 21, 23. Ku lissafa mean da median da hannu, ku faɗi baƙon ƙimar, sannan ku rubuta wace lamba ce ta fi bayyana kawo kaya na yau da kullum, da dalili. (Mean kusan 32.7, median 23.)",
          youCanNow: "lissafin mean da median, gane baƙin ƙimomi da guje wa haɗa alaƙa da sanadi.",
          quickCheck: [
            { objective: "O3", q: "Mene ne mean na 2, 4, 6 da 8?", options: ["5", "4", "6", "20"], answer: 0, why: "2 + 4 + 6 + 8 = 20, kuma 20 / 4 = 5." },
            { objective: "O3", q: "Lokutan jiran bas a wannan makon sun kasance 5, 6, 5, 7 da 60 minti. Wace lamba za ku faɗa a matsayin jira na yau da kullum?", options: ["Mean, 16.6", "Mafi girma, 60", "Median, 6", "Jimilla, 83"], answer: 2, why: "60 baƙon ƙima ne da ke jan mean sama; median tana nuna jira na yau da kullum." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Yin tunani kamar mai nazarin bayanai",
        questions: [
          { objective: "O1", q: "Mene ne mataki na farko na aikin bayanai?", options: ["Yin jadawali", "Goge baƙin ƙimomi", "Yin tambaya a sarari", "Raba sakamakon"], answer: 2, why: "Tambaya a sarari ce ke jagorantar kowane mataki." },
          { objective: "O2", q: "A teburin wasanni, \"sunan ƙungiya\" wane irin ginshiƙi ne?", options: ["Na rukuni", "Na lamba", "Na rana", "Baƙon ƙima"], answer: 0, why: "Sunayen ƙungiyoyi rukunoni ne, ba lambobi ba." },
          { objective: "O3", q: "Mece ce median ta 2, 9, 3, 7, 5?", options: ["3", "5", "5.2", "7"], answer: 1, why: "Bayan an jera: 2, 3, 5, 7, 9. Ƙimar tsakiya ita ce 5." },
          { objective: "O3", q: "Gida ɗaya a cikin jeri yana da tsada sau goma fiye da sauran. Wanne ne ya fi bayyana gida na yau da kullum?", options: ["Mean", "Median", "Farashi mafi girma", "Jimilla"], answer: 1, why: "Babban baƙon ƙima ɗaya ba ya jan median sosai." },
          { objective: "O3", q: "Yaran da suke yawan wasanni suna samun maki mafi kyau. Me bai kamata ku kammala nan take ba?", options: ["Cewa abubuwan biyu suna tafiya tare", "Cewa wasanni ne ke jawo maki mafi kyau", "Cewa ƙarin bayanai za su iya taimakawa", "Cewa wasu dalilai za su iya kasancewa"], answer: 1, why: "Alaƙa kaɗai ba ta tabbatar da sanadi ba." }
        ]
      }
    },
    {
      name: "Babi na 2: Nazarin bayanai da Python",
      lessons: [
        {
          objectives: ["O4"],
          title: "Loda bayanai da duba su da pandas",
          minutes: 5,
          goal: "Loda bayanai a cikin DataFrame na pandas a Colab da bayyana su.",
          text: [
            "pandas laburaren Python ne kyauta don aiki da tebura, kuma yana nan a Google Colab. Tebur a pandas ana kiransa DataFrame, kuma yawanci ana masa suna df.",
            "Don atisaye muna amfani da bayanan gidan abinci na gaske na abinci 244 da ke zuwa tare da seaborn, laburaren jadawali: df = sns.load_dataset(\"tips\"). Yana buƙatar intanet, wadda Colab ke da ita. Ginshiƙansa sun haɗa da total_bill (jimillar kuɗin abinci), tip (kuɗin goro), day (rana), time (Lunch ko Dinner, wato abincin rana ko na dare) da size (mutanen da ke teburin). Don bayananku, pd.read_csv(\"file.csv\") yana loda fayil ɗin CSV da kuka ɗora.",
            "Umarni huɗu suna nuna muku abin da kuke da shi: df.head() yana nuna layuka biyar na farko, df.shape yana ba da yawan layuka da ginshiƙai, df.info() yana jera nau'in kowane ginshiƙi, kuma df.describe() yana ba da ƙirga, mean, mafi ƙanƙanta, mafi girma da sauransu na ginshiƙan lambobi."
          ],
          steps: ["A sabon notebook na Colab ku gudanar: import pandas as pd da import seaborn as sns", "Loda: df = sns.load_dataset(\"tips\")", "Duba: df.head()", "Girma da nau'uka: df.shape da df.info()", "Taƙaitawa: df.describe()"],
          words: [["pandas", "laburaren Python kyauta don aiki da teburan bayanai."], ["DataFrame", "tebur a pandas, mai layuka da ginshiƙai masu suna."], ["CSV", "fayil na rubutu mai sauƙi na tebur, da waƙafi tsakanin ƙimomi."], ["head()", "yana nuna layukan farko na DataFrame."], ["describe()", "yana ba da lambobin taƙaitawa na kowane ginshiƙin lamba."]],
          slides: [
            { title: "pandas da DataFrame", bullets: ["pandas: kayan aikin tebur na Python", "Tebur shi ne DataFrame, sau da yawa ana kiransa df", "Yana nan a Google Colab"] },
            { title: "Loda bayanan", bullets: ["df = sns.load_dataset(\"tips\")", "Fayil ɗinku: pd.read_csv(\"file.csv\")"] },
            { title: "Ku duba kafin ku yi nazari", bullets: ["df.head(): layukan farko", "df.shape da df.info(): girma da nau'uka", "df.describe(): lambobin taƙaitawa"] }
          ],
          sources: [PANDAS, SEABORN, COLAB],
          tryIt: "Ku loda bayanan tips a Colab. Ku rubuta yawan layuka da ginshiƙai da yake da su, waɗanne ginshiƙai ne lambobi da waɗanne rukunoni ne, da mean da mafi girman total_bill daga df.describe().",
          youCanNow: "loda bayanai da pandas da bayyana girmansu, ginshiƙansu da lambobin taƙaitawa.",
          quickCheck: [
            { objective: "O4", q: "Me df.info() yake nunawa?", options: ["Jadawalin sanduna", "Layi na farko kawai", "Ƙimomin da suka ɓace an cike su", "Nau'in kowane ginshiƙi"], answer: 3, why: "df.info() yana jera kowane ginshiƙi da nau'insa." },
            { objective: "O4", q: "Kun ɗora fayil ɗin ƙungiyarku attendance.csv zuwa Colab. Wane layi za ku yi amfani da shi don loda shi?", options: ["sns.load_dataset(\"attendance\")", "df = pd.read_csv(\"attendance.csv\")", "df.head(\"attendance.csv\")", "df.describe(\"attendance.csv\")"], answer: 1, why: "pd.read_csv yana loda fayil ɗin CSV da kuka ɗora." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Tsaftacewa, tacewa da rarrabawa rukuni-rukuni",
          minutes: 6,
          goal: "Duba ƙimomin da suka ɓace, ƙara ginshiƙi, tace layuka da kwatanta rukunoni.",
          text: [
            "Ku fara tsaftacewa. df.isna().sum() yana ƙirga ƙimomin da suka ɓace a kowane ginshiƙi. Idan wasu sun ɓace, za ku iya cire waɗannan layukan da df.dropna() ko ku yanke yadda za ku cike su; ku rubuta abin da kuka yi. Ku kuma duba ƙimomin da ba za su yiwu ba, kamar kuɗin abinci mara kyau (ƙasa da sifili).",
            "Ku ƙirƙiri ginshiƙin da kuke buƙata. Kuɗin goro na $5 yana da ma'ana daban a kan kuɗin abinci na $20 da na $100, don haka ku ƙara ma'auni mai adalci: df[\"tip_pct\"] = df[\"tip\"] / df[\"total_bill\"] * 100.",
            "Ku tace layuka da sharaɗi: df[df[\"time\"] == \"Dinner\"] yana barin abincin dare kawai. Ku rarraba don kwatantawa: df.groupby(\"day\")[\"tip_pct\"].mean() yana ba da matsakaicin kashi na kuɗin goro na kowace rana. Idan pandas ya nuna gargaɗi mai launin rawaya, ku karanta shi, amma ba kuskure ba ne. .round(1) yana sa lambobin su yi kyau."
          ],
          steps: ["Ku ƙirga ƙimomin da suka ɓace: df.isna().sum()", "Ku ƙara ginshiƙi: df[\"tip_pct\"] = df[\"tip\"] / df[\"total_bill\"] * 100", "Ku tace: dinners = df[df[\"time\"] == \"Dinner\"]", "Ku rarraba: df.groupby(\"day\")[\"tip_pct\"].mean().round(1)", "Ku gwada wani rukuni, kamar time ko size."],
          words: [["Ƙimar da ta ɓace (missing value)", "akwatin tebur mara komai; pandas yana nuna shi a matsayin NaN."], ["Tsaftacewa", "nemo da gyara ƙimomin da suka ɓace, marasa daidai ko waɗanda ba za su yiwu ba."], ["Tacewa (filter)", "barin layukan da suka dace da sharaɗi kawai."], ["groupby", "raba layuka zuwa rukunoni da taƙaita kowane rukuni."]],
          slides: [
            { title: "Ku fara tsaftacewa", bullets: ["df.isna().sum() yana ƙirga ƙimomin da suka ɓace", "Ku cire ko ku cike, ku rubuta abin da kuka yi", "Ku nemi ƙimomin da ba za su yiwu ba"] },
            { title: "Ku yi ma'auni mai adalci", bullets: ["tip_pct = tip / total_bill * 100", "Yana kwatanta manya da ƙananan kuɗin abinci da adalci"] },
            { title: "Tacewa da rarrabawa", bullets: ["df[df[\"time\"] == \"Dinner\"]", "df.groupby(\"day\")[\"tip_pct\"].mean()", "Gargaɗi ba kuskure ba ne"] }
          ],
          sources: [PANDAS],
          tryIt: "Ku duba bayanan tips don ƙimomin da suka ɓace. Ku ƙara ginshiƙin tip_pct. Ku nemo matsakaicin kashi na kuɗin goro na kowace rana da na Lunch da Dinner. Ku rubuta wace rana ce ta fi matsakaici.",
          youCanNow: "duba ƙimomin da suka ɓace, ƙirƙirar sabon ginshiƙi, tace layuka da kwatanta rukunoni.",
          quickCheck: [
            { objective: "O5", q: "Me df.dropna() yake yi?", options: ["Yana ƙara sabon ginshiƙi", "Yana ƙirga layuka", "Yana cire layukan da ke da ƙimomin da suka ɓace", "Yana yin jadawali"], answer: 2, why: "dropna() yana cire layukan da ke da ƙimomin da suka ɓace; ku rubuta cewa kun yi haka." },
            { objective: "O5", q: "Kun ga kuɗin abinci na -12.00 a cikin bayanan. Me za ku yi?", options: ["Ku ɗauke shi a matsayin ƙimar da ba za ta yiwu ba, ku gyara ko ku cire shi, ku rubuta abin da kuka yi", "Ku bar shi; kuɗin abinci ƙasa da sifili abu ne na yau da kullum", "Ku haɗa shi a matsakaici da sauran duk da haka", "Ku ɓoye shi a jadawalin"], answer: 0, why: "Duba ƙimomin da ba za su yiwu ba, kamar kuɗin abinci ƙasa da sifili, yana cikin tsaftacewa." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Yin jadawali da raba sakamako na gaskiya",
          minutes: 6,
          goal: "Yin jadawalin sanduna a sarari da rubuta sakamakon da mutane za su amince da shi.",
          text: [
            "Jadawali yana nuna tsari da sauri fiye da tebur. Jadawalin sanduna (bar chart) ya fi kyau don kwatanta rukunoni: tip_by_day = df.groupby(\"day\")[\"tip_pct\"].mean() sannan tip_by_day.plot(kind=\"bar\", title=\"Average tip % by day\"). Ku ba kowane jadawali take, kuma ku faɗi ma'anar lambobin.",
            "Ku rubuta sakamako da jimloli masu sauƙi tare da lambar: \"A matsakaici, kuɗin goro na [rana] shi ne mafi yawa, kusan kashi X cikin ɗari na kuɗin abinci.\" Ku yi amfani da lambar da code ɗinku ya buga.",
            "Ku faɗi iyakoki da gaskiya. Ku faɗi yawan layukan da rukuni ke da shi: df[\"day\"].value_counts() yana nuna ranar da ke da ƙananan abinci, don haka matsakaicinta ba shi da tabbas sosai. Waɗannan bayanan sun fito daga gidan abinci ɗaya, don haka wataƙila ba haka yake a wasu ba. Kuma suna nuna abin da ya faru ne, ba dalilinsa ba."
          ],
          steps: ["Ku yi lambobin rukunoni.", "Ku zana su: .plot(kind=\"bar\", title=\"...\")", "Ku duba girman rukunoni da value_counts().", "Ku rubuta sakamako uku da lambobi na gaske.", "Ku ƙara iyaka ɗaya: abin da bayanan ba za su iya faɗa muku ba."],
          words: [["Jadawalin sanduna (bar chart)", "jadawali na sanduna da ake amfani da shi don kwatanta rukunoni."], ["value_counts()", "yana ƙirga layukan da kowane rukuni ke da su."], ["Sakamako (finding)", "bayani a sarari na abin da bayanan suka nuna, tare da lamba."], ["Iyaka (limitation)", "abin da bayananku ko nazarinku ba za su iya faɗa muku ba."]],
          slides: [
            { title: "Jadawalin sanduna yana kwatanta rukunoni", bullets: ["groupby, sannan .plot(kind=\"bar\")", "Koyaushe ku ƙara take"] },
            { title: "Ku rubuta sakamako a sarari", bullets: ["Jimla mai sauƙi tare da lambar", "Ku yi amfani da lambar da code ɗinku ya buga"] },
            { title: "Ku faɗi iyakoki da gaskiya", bullets: ["Ƙananan rukunoni ba su da tabbas sosai", "Gidan abinci ɗaya, ba dukkan gidajen abinci ba", "Yana nuna abin da ya faru, ba dalilinsa ba"] }
          ],
          sources: [PANDAS],
          tryIt: "Aikin ƙarshe: a notebook ɗaya, ku loda bayanan tips, ku duba ƙimomin da suka ɓace, ku ƙara tip_pct, ku nemo matsakaicin kashi na kuɗin goro bisa rana da bisa lokaci, ku yi jadawalin sanduna na ɗaya daga cikinsu da take, sannan ku rubuta sakamako uku da lambobi, har da abu ɗaya da waɗannan bayanan ba za su iya faɗa muku ba.",
          youCanNow: "mayar da bayanai zuwa jadawali da sakamako na gaskiya da kalmomi masu sauƙi.",
          quickCheck: [
            { objective: "O6", q: "Wane irin jadawali ne ya fi kyau don kwatanta rukunoni, kamar kwanaki?", options: ["Jadawalin da'ira (pie) na lamba ɗaya", "Jadawalin sanduna", "Tebur mara lakabi", "Jadawali mara take"], answer: 1, why: "Jadawalin sanduna ya fi kyau don kwatanta rukunoni." },
            { objective: "O6", q: "Jadawalinku ya nuna cewa ranar Asabar an fi ba da kuɗin goro. Me za ku ƙara kafin ku raba shi?", options: ["Iƙirarin cewa Asabar ce ke jawo ƙarin kuɗin goro a ko'ina", "Babu komai; jadawali yana magana da kansa", "Lambar ƙarya don ya ƙara bayyana", "Take da iyaka ta gaskiya, kamar yawan abincin da kowace rana ke da shi"], answer: 3, why: "Take da iyaka ta gaskiya suna taimaka wa mutane su amince da sakamakon kuma su fahimce shi." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Nazarin bayanai da Python",
        questions: [
          { objective: "O4", q: "A pandas, mene ne DataFrame?", options: ["Firam na hoto", "Jadawali", "Kuskuren Python", "Tebur mai layuka da ginshiƙai masu suna"], answer: 3, why: "DataFrame tebura ne na pandas." },
          { objective: "O5", q: "Wane umarni ne ke ƙirga ƙimomin da suka ɓace a kowane ginshiƙi?", options: ["df.isna().sum()", "df.head()", "df.plot()", "df.shape"], answer: 0, why: "isna yana yi wa akwatunan da suka ɓace alama, sum kuma yana ƙirga su." },
          { objective: "O5", q: "Me yasa za a ƙara ginshiƙin kashi na kuɗin goro maimakon kwatanta dalar kuɗin goro?", options: ["Dala ba lambobi ba ne", "pandas ba zai iya amfani da dala ba", "Kashi cikin ɗari yana kwatanta manya da ƙananan kuɗin abinci da adalci", "Yana sa teburin ya yi ƙarami"], answer: 2, why: "Kashi na kuɗin abinci kwatanci ne mai adalci." },
          { objective: "O5", q: "Wane layi ne ke ba da matsakaicin kashi na kuɗin goro na kowace rana?", options: ["df[\"day\"].plot()", "df.mean(\"day\")", "df.head(\"day\")", "df.groupby(\"day\")[\"tip_pct\"].mean()"], answer: 3, why: "groupby yana raba bisa rana; mean yana nemo matsakaicin kowane rukuni." },
          { objective: "O6", q: "Wata rana tana da abinci 19 kawai. Me rahotonku zai ce?", options: ["Babu komai", "Cewa bayanan ba daidai ba ne", "Cewa matsakaicinta ba shi da tabbas sosai domin rukunin ƙarami ne", "Cewa ita ce rana mafi kyau"], answer: 2, why: "Ƙananan rukunoni suna sa matsakaici ya rage tabbas." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Gabatarwa ga Kimiyyar Bayanai (Data Science) da Nazarin Bayanai",
    questions: [
      { objective: "O1", q: "Kimiyyar bayanai galibi tana game da:", options: ["Gyaran kwamfutoci", "Amfani da bayanai don amsa tambayoyi da yanke shawarwari", "Yin rubutu da sauri", "Gina shafukan intanet"], answer: 1, why: "Tana mayar da bayanai zuwa amsoshi." },
      { objective: "O1", q: "Wane tsari ne daidai don aikin bayanai?", options: ["Tambaya, Samo, Tsaftace, Bincika, Raba", "Raba, Tambaya, Tsaftace, Samo, Bincika", "Bincika, Raba, Tambaya, Samo, Tsaftace", "Tsaftace, Raba, Samo, Tambaya, Bincika"], answer: 0, why: "Ku fara da tambaya, ku ƙare da rabawa." },
      { objective: "O2", q: "A tsararrun bayanai, kowane layi shi ne:", options: ["Ginshiƙi ɗaya", "Jadawali ɗaya", "Abu ɗaya da kuka auna", "Jimilla"], answer: 2, why: "Layi ɗaya kowane rikodi." },
      { objective: "O2", q: "Wane ginshiƙi ne na lamba?", options: ["Mintunan da aka buga wasa", "Sunan ƙungiya", "Ranar mako", "Birni"], answer: 0, why: "Kuna iya yin lissafi da minti." },
      { objective: "O2", q: "Bayananku ba su da ginshiƙi game da yanayi. Za ku iya amsa \"Shin mutane suna ba da ƙarin kuɗin goro idan ana ruwan sama?\"", options: ["E, ku yi hasashe kawai", "E, ku yi amfani da mean", "E, ku yi amfani da jadawali", "A'a, kuma ya kamata ku faɗi haka"], answer: 3, why: "Tambaya tana buƙatar bayanan da suka shafe ta." },
      { objective: "O3", q: "Mene ne mean na 4, 6 da 8?", options: ["4", "6", "8", "18"], answer: 1, why: "18 / 3 = 6." },
      { objective: "O3", q: "Mece ce median ta 1, 3, 3, 9, 50?", options: ["3", "9", "13.2", "50"], answer: 0, why: "Ƙimar tsakiya bayan an jera ita ce 3." },
      { objective: "O3", q: "Baƙon ƙima (outlier) shi ne:", options: ["Median", "Ginshiƙin da ya ɓace", "Taken jadawali", "Ƙimar da ta yi nisa da sauran"], answer: 3, why: "Baƙin ƙimomi suna nesa da sauran." },
      { objective: "O3", q: "Baƙin ƙimomi suna fi jan wace lamba?", options: ["Mean", "Median", "Yawan layuka", "Babu ɗaya"], answer: 0, why: "Mean yana amfani da kowace ƙima, don haka manyan ƙimomi suna motsa shi." },
      { objective: "O3", q: "Sayar da laima da hatsarin mota duk suna ƙaruwa a ranakun ruwan sama. Wannan yana nuna:", options: ["Laima ce ke jawo hatsari", "Hatsari ne ke jawo sayar da laima", "Alaƙa, wadda wataƙila ruwan sama ne ke jawo ta", "Babu komai ko kaɗan"], answer: 2, why: "Abu na uku, ruwan sama, ne ke jawo su duka." },
      { objective: "O4", q: "pandas shi ne:", options: ["Manhajar spreadsheet ta kuɗi", "Wani irin jadawali", "Shafin intanet", "Laburaren Python kyauta don teburan bayanai"], answer: 3, why: "pandas yana sarrafa DataFrame a Python." },
      { objective: "O4", q: "Wane umarni ne ke nuna layuka biyar na farko?", options: ["df.tail(0)", "df.shape", "df.head()", "df.sum()"], answer: 2, why: "head yana nuna layukan sama." },
      { objective: "O4", q: "df.shape ya mayar da (244, 7). Me hakan yake nufi?", options: ["Ginshiƙai 244 da layuka 7", "Layuka 244 da ginshiƙai 7", "Ƙimomi 244 da suka ɓace", "Jadawali 7"], answer: 1, why: "shape yana ba da layuka, sannan ginshiƙai." },
      { objective: "O4", q: "Wanne ne ke loda fayil ɗinku na CSV?", options: ["pd.read_csv(\"file.csv\")", "df.head(\"file.csv\")", "sns.plot(\"file.csv\")", "print(\"file.csv\")"], answer: 0, why: "read_csv yana karanta CSV zuwa DataFrame." },
      { objective: "O4", q: "df.describe() yana ba da:", options: ["Jadawalin sanduna", "Sunan fayil", "Lambobin taƙaitawa kamar mean, mafi ƙanƙanta da mafi girma", "Gyaran ƙimomin da suka ɓace"], answer: 2, why: "describe yana taƙaita ginshiƙan lambobi." },
      { objective: "O5", q: "Wanne ne ke barin layukan abincin dare kawai?", options: ["df[df[\"time\"] == \"Dinner\"]", "df[\"Dinner\"]", "df.dinner()", "df.drop(\"Dinner\")"], answer: 0, why: "Sharaɗi a cikin df[ ] yana tace layuka." },
      { objective: "O5", q: "Kun sami ƙimomin da suka ɓace kuma kun cire waɗannan layukan. Me kuma ya kamata ku yi?", options: ["Ku ɓoye shi", "Ku goge dukkan bayanan", "Babu komai", "Ku rubuta abin da kuka yi"], answer: 3, why: "Rubuta matakan tsaftacewa yana kiyaye gaskiyar nazarin." },
      { objective: "O6", q: "Wane jadawali ne ya fi kyau don kwatanta matsakaita a kwanaki daban-daban?", options: ["Hoto", "Jadawalin sanduna", "Lamba ɗaya", "Gajimaren kalmomi (word cloud)"], answer: 1, why: "Sanduna suna kwatanta rukunoni a sarari." },
      { objective: "O6", q: "Wanne ne sakamakon da aka rubuta da kyau?", options: ["\"Kuɗin goro yana da kyau.\"", "\"Sayarwar ƙarshen mako ta kai matsakaicin $420 a rana, kusan kashi 30% fiye da ranakun aiki.\"", "\"Bayanai suna nuna abubuwa.\"", "\"Ƙarshen mako ne mafi kyau domin mutane suna farin ciki.\""], answer: 1, why: "Yana da cikakken bayani, yana amfani da lamba, kuma bai faɗi sanadin da ba zai iya nunawa ba." },
      { objective: "O6", q: "Waɗannan bayanan tips sun fito daga gidan abinci ɗaya. Wace iyaka ce daidai a faɗa?", options: ["Sakamakon ya shafi ko'ina", "Bayanan na bogi ne", "Babu iyakoki", "Wataƙila sakamakon bai shafi sauran gidajen abinci ba"], answer: 3, why: "Majiya ɗaya ba za ta iya magana a madadin dukkan gidajen abinci ba." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      1,
      3,
      4,
      6,
      8,
      9,
      11,
      12,
      15,
      17
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Loda bayanai da duba su",
        objective: "O4",
        notYet: "Bayanan ba su loda ba, ko ba a duba ƙimomin da suka ɓace ba.",
        meets: "An loda bayanan tips, an bayyana su kuma an duba ƙimomin da suka ɓace.",
        exceeds: "An kuma faɗi yawan layuka da nau'in kowane ginshiƙin da aka yi amfani da shi."
      },
      {
        name: "Ginshiƙin kashi na kuɗin goro",
        objective: "O5",
        notYet: "Babu ginshiƙin kashi na kuɗin goro, ko an lissafa shi ba daidai ba.",
        meets: "Ginshiƙin tip_pct daidai da tip a raba da total_bill sau 100.",
        exceeds: "An kuma duba ƙimomin da ba za su yiwu ba kamar kuɗin abinci ƙasa da sifili."
      },
      {
        name: "Matsakaicin rukunoni",
        objective: "O5",
        notYet: "Kwatanci ɗaya kawai, ko matsakaitan ba daidai ba ne.",
        meets: "Matsakaicin kashi na kuɗin goro na kowace rana da na abincin rana da na dare, an tattara lambobin (round).",
        exceeds: "An kuma nuna yawan abincin da ke cikin kowane rukuni."
      },
      {
        name: "Jadawalin sanduna",
        objective: "O6",
        notYet: "Babu jadawali, ko jadawalin ba shi da take.",
        meets: "Jadawalin sanduna na kwatanci ɗaya mai take a sarari.",
        exceeds: "Lakabin layukan jadawali (axis) ko wani bayani yana faɗin ma'anar lambobin."
      },
      {
        name: "Sakamako na gaskiya",
        objective: "O6",
        notYet: "Sakamako ƙasa da uku, ko ba a faɗi wata iyaka ba.",
        meets: "Sakamako uku masu sauƙi da lambobi daga sakamakon nazarin, har da abu ɗaya da bayanan ba za su iya faɗa ba.",
        exceeds: "Ba a faɗi sanadi ba, kuma an ambaci ƙananan rukunoni inda suke da muhimmanci."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka sami \"Ya cika\" ko \"Ya wuce\" a kowane layin rubric na nazarin tips",
      "Masu koyo da suka ce sun yi nazarin wasu bayanai nasu, kamar na ƙungiya, kulob, aji ko aiki, cikin kwanaki 30 bayan kwas ɗin (binciken biyo baya)",
      "Masu koyo da suka ci gaba zuwa kwas na gaba, kamar \"Gabatarwa ga Machine Learning (Koyon Na'ura)\"",
      "Masu koyo da suka saka notebook ɗin a cikin tarin ayyukansu (portfolio) ko suka yi amfani da shi a neman aikin bayanai ko shiga wani shiri"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta ko laptop mai burauzar intanet da intanet",
      "Asusun Google kyauta don amfani da Google Colab",
      "Takarda da alƙalami don rubuta tambayar da sakamakon",
      "Kusan minti 60 zuwa 75 gaba ɗaya, tare da lokacin atisaye"
    ],
    facilitatorNotes: [
      "Ku fara da tambayar da masu koyo suka damu da ita, kamar sakamakon wasannin ƙungiya ko halartar kulob, kafin a buɗe kowane code.",
      "Ku lissafa mean da median na ƙaramin jerin lambobi da hannu tare kafin a yi amfani da pandas.",
      "Bayanan tips suna lodawa daga intanet; ku gwada su a intanet ɗinku kafin aji, kuma ku shirya kwafin CSV.",
      "Ku sa masu koyo su karanta sakamakon juna, su nuna duk wani iƙirarin sanadi ko iyakar da ba a faɗa ba.",
      "Idan masu koyo sun kawo bayanansu, ku duba cewa babu bayanan sirri na mutane na gaske a ciki kafin su ɗora su."
    ]
  }
};
