"use strict";

// Koach Learn course, Hausa (ha) translation of workforce/workforce-data-science-certificate.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const GOOGLE_DA = { name: "Coursera: Google Data Analytics Professional Certificate (takardar shaidar nazarin bayanai ta Google, da Turanci)", url: "https://www.coursera.org/professional-certificates/google-data-analytics" };
const IBM_DS = { name: "Coursera: IBM Data Science Professional Certificate (takardar shaidar kimiyyar bayanai ta IBM, da Turanci)", url: "https://www.coursera.org/professional-certificates/ibm-data-science" };
const MS_PL300 = { name: "Microsoft Learn: Microsoft Certified: Power BI Data Analyst Associate (jarabawar PL-300, da Turanci)", url: "https://learn.microsoft.com/en-us/credentials/certifications/data-analyst-associate/" };
const COLAB = { name: "Google Colab (da Turanci)", url: "https://colab.research.google.com/" };

module.exports = {
  id: "workforce-data-science-certificate-ha",
  lang: "ha",
  translationOf: "workforce-data-science-certificate",
  category: "Workforce Development",
  name: "Shiri don Takardar Shaidar Ƙwararru a Kimiyyar Bayanai (Data Science)",
  skills: "Zaɓar takardar shaidar bayanai da ta dace, Yin tsarin karatu na mako, Tsaftacewa da taƙaita bayanai, Yin tambaya da amsa ta da jadawali, Gina aikin nuni (portfolio)",
  outcome: "zaɓar takardar shaidar bayanai da ta dace da burinku, yin tsarin karatu da za ku iya bi, da kammala ƙaramin aikin gwaji irin wanda waɗannan takardun shaida ke nema: ɗaukar bayanai na gaske, tsaftace su, taƙaita su, yin jadawali ɗaya mai sarari, da rubuta ma'anarsa.",
  about: [
    "Wannan kwas ɗin na masu neman aiki ne da ma'aikata da ke son shiga aikin bayanai (data), ko amfani da bayanai a aikin da suke yi yanzu, kuma suna tunanin wata sananniyar takardar shaida ta intanet, kamar Google Data Analytics Professional Certificate, IBM Data Science Professional Certificate, ko Power BI Data Analyst Associate na Microsoft.",
    "Ba ya maye gurbin waɗannan shirye-shiryen. Yana shirya ku ne don su: za ku koyi abin da kowanne ya ƙunsa, ku zaɓi wanda ya dace da burinku da lokacinku na mako, sannan ku yi atisayen manyan ƙwarewar da dukansu ke amfani da su, a kan ƙaramin aiki da za ku iya nuna wa masu ɗaukar aiki.",
    "Takardar shaida hanya ce ta koyo da nuna abin da kuka koya. Ba ta yi alƙawarin aiki ko ƙarin albashi ba. Abin da ya fi taimakawa shi ne kammalawa, yin atisaye, da iya bayanin ayyukanku. Ku duba shafin kowane shiri na yanzu don kuɗinsa, lokacinsa da abin da ya ƙunsa kafin ku yi rajista.",
    "Kowane darasi yana ɗaukar kusan minti biyar, tare da aiki na hannu. Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku kammala ƙaramin aikin nuni (portfolio): ku zaɓi bayanan jama'a kyauta (ko teburin tallace-tallace na misali a Darasi na 4), ku rubuta tambaya ɗaya mai sarari, ku tsaftace bayanan (ku gyara gurabe marasa komai, layukan da aka maimaita da tsare-tsare), ku yi teburin taƙaitawa, ku yi jadawali ɗaya da ke amsa tambayar, sannan ku rubuta sakamako a jimloli uku tare da iyaka ɗaya ta bayananku. Ku ajiye shi a Google Sheets, Excel ko Google Colab da gajeren take da bayani.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Masu neman aiki da ma'aikata da ke son shiga aikin bayanai, ko amfani da bayanai a aikin da suke yi, kuma suna tunanin wata sananniyar takardar shaidar bayanai ta intanet (Google Data Analytics, IBM Data Science ko Microsoft Power BI Data Analyst).",
    startingPoint: "Suna iya amfani da kwamfuta da spreadsheet (teburin lissafi) na farko. Yawancinsu ba su taɓa kwatanta takardun shaidar bayanai ba, ko bin dogon tsarin karatu na intanet, ko tsaftacewa, taƙaitawa da yin jadawalin bayanai na gaske ba.",
    gap: "Ƙwarewar bayanai tana buɗe ayyuka da yawa, amma mutane sau da yawa suna zaɓar takardar shaida da ba ta dace ba, suna tsayawa a tsakiya, ko suna kammalawa ba tare da aikin nunawa ba. Masu koyo suna buƙatar zaɓar takardar shaida da ta dace da burinsu, tsara karatun da za su iya bi, da kammala ƙaramin aikin nuni irin wanda waɗannan takardun shaida ke nema.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; an bayyana kalmomin bayanai",
      "Na'urori: ana buƙatar kwamfuta don spreadsheet da Google Colab; waya ta isa don tsara karatu",
      "Kuɗi da bayanan kwas suna canjawa, don haka masu koyo suna duba shafin hukuma na kowane shiri a yau",
      "Sirri: babu bayanan sirri na abokan ciniki a aikin nuni na jama'a ba tare da izini ba; bayanan misali ko na jama'a kaɗai",
      "Lokaci: darussa na kusan minti 5 da atisaye na hannu; takardun shaida suna ɗaukar watanni bayan wannan kwas"
    ],
    prerequisites: "Babu. Ɗan atisaye a spreadsheet yana taimakawa."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku wurin aiki da kuka sani", action: "bayyana matakan aikin bayanai da rubuta tambayoyi uku da bayanai za su iya amsawa a wurin", standard: "kuna nuna ko kowace tambaya aikin manazarcin bayanai ce ko ta masanin kimiyyar bayanai" },
    { id: "O2", condition: "Idan aka ba ku sanannun takardun shaidar bayanai guda uku", action: "kwatanta matakinsu, manyan kayan aikinsu, lokacinsu da kuɗinsu, da zaɓar wanda ya dace da burinku", standard: "da kuɗin da aka ɗauko daga shafin hukuma a yau" },
    { id: "O3", condition: "Don takardar shaidar da kuka zaɓa", action: "yin tsarin karatu na mako mai ƙayyadaddun lokutan karatu da buri ɗaya na mako", standard: "wanda ya dace da aikinku da iyalinku" },
    { id: "O4", condition: "Idan aka ba ku ƙananan bayanai masu matsaloli", action: "nemo da gyara gurabe marasa komai, layukan da aka maimaita da matsalolin tsari, da rubuta littafin tsaftacewa", standard: "bayan kun fara ajiye kwafin asalin bayanan" },
    { id: "O5", condition: "Idan aka ba ku bayanai da aka tsaftace da tambaya", action: "yin teburin taƙaitawa da jadawali ɗaya da ke amsa tambayar", standard: "da irin jadawalin da ya dace da take da ke faɗin amsar" },
    { id: "O6", condition: "Ta amfani da jadawalinku da taƙaitawarku", action: "rubuta sakamako a jimloli uku tare da iyaka ɗaya, da ajiye shi a matsayin aikin nuni", standard: "da gajeren take da bayani, kuma babu bayanan sirri" }
  ],
  chapters: [
    {
      name: "Babi na 1: Zaɓar takardar shaidarku da tsara yadda za ku kammala",
      lessons: [
        {
          objectives: ["O1"],
          title: "Abin da manazartan bayanai da masana kimiyyar bayanai ke yi",
          minutes: 5,
          goal: "Bayyana matakan aikin bayanai da faɗin wane sashe ne ya fi burge ku.",
          text: [
            "Aikin bayanai yana bin hanya mai sauƙi: yin tambaya, tattara bayanai, tsaftace su, bincika da nazarce su, nuna su da jadawali, da faɗin ma'anarsu. Shirin Google yana bayyana irin wannan tunani da nasa matakan.",
            "Manazarcin bayanai (data analyst) yawanci yana aiki da abin da ya riga ya faru: \"Wane kaya ne ya fi sayuwa a watan jiya?\" Yana amfani da spreadsheet, SQL (yaren yin tambayoyi ga rumbun bayanai) da kayan aikin dashboard kamar Tableau ko Power BI.",
            "Masanin kimiyyar bayanai (data scientist) shi ma yana yin haka, kuma yana gina models (samfurai) da ke hasashe ko rarraba abubuwa: \"Waɗanne abokan ciniki ne za su iya daina saye?\" Yawanci yana rubuta code a Python kuma yana amfani da lissafi sosai. Mutane da yawa suna farawa a matsayin manazarta sannan su girma zuwa kimiyyar bayanai."
          ],
          words: [["Data set (tarin bayanai)", "tarin bayanai, yawanci tebur mai layuka da ginshiƙai."], ["SQL", "Structured Query Language: yaren fitar da bayanai daga rumbun bayanai (database)."], ["Model (samfuri)", "shirin kwamfuta da ke koyon tsari daga bayanai don hasashe ko rarraba abubuwa."], ["Dashboard", "shafin jadawalai da ke sabuntuwa idan bayanai sun canja."]],
          slides: [
            { title: "Matakan aikin bayanai", bullets: ["Yin tambaya", "Tattarawa da tsaftace bayanai", "Nazari da yin jadawali", "Faɗin ma'anarsu"] },
            { title: "Manazarcin bayanai (data analyst)", bullets: ["Yana bayyana abin da ya faru", "Spreadsheet, SQL, Tableau ko Power BI", "\"Wane kaya ne ya fi sayuwa a watan jiya?\""] },
            { title: "Masanin kimiyyar bayanai (data scientist)", bullets: ["Yana kuma hasashe da rarrabawa da models", "Yawanci Python da ƙarin lissafi", "\"Waɗanne abokan ciniki ne za su iya daina saye?\""] }
          ],
          tryIt: "Ku yi tunanin aikinku na yanzu ko na ƙarshe (shago, rumbun kaya, asibiti, gidan abinci). Ku rubuta tambayoyi uku da bayanai za su iya amsawa a wurin, kamar \"Waɗanne sa'o'i ne suka fi cunkoso?\" Ku rubuta \"manazarci\" ko \"masanin kimiyyar bayanai\" kusa da kowace.",
          youCanNow: "bayyana matakan aikin bayanai da bambanci tsakanin manazarcin bayanai da masanin kimiyyar bayanai.",
          quickCheck: [
            { objective: "O1", q: "Mene ne matakin farko da aka saba a aikin bayanai?", options: ["Yin jadawali", "Tsaftace bayanai", "Gina model", "Yin tambaya"], answer: 3, why: "Aikin bayanai yana farawa da tambaya mai sarari, wadda ke jagorantar duk matakan da ke biye." },
            { objective: "O1", q: "A shagonku kuna son sanin waɗanne sa'o'i ne suka fi cunkoso. Aikin wane ne wannan?", options: ["Masanin kimiyyar bayanai kaɗai", "Manazarcin bayanai", "Ba na kowa ba; ba za a iya amsa shi ba", "Mai rubuta shirin kwamfuta kaɗai"], answer: 1, why: "Bayyana abin da ya faru, kamar sa'o'in cunkoso, aikin manazarci ne na yau da kullum." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kwatanta sanannun takardun shaidar bayanai",
          minutes: 6,
          goal: "Kwatanta sanannun takardun shaidar bayanai guda uku da zaɓar wanda ya dace da burinku.",
          text: [
            "Google Data Analytics Professional Certificate (a Coursera): jerin kwasa-kwasai 9 na masu farawa, ba a buƙatar gogewa. Shafinsa ya lissafa spreadsheet, SQL, Tableau da gabatarwa (presentation), kuma sashen tambayoyinsa (FAQ) ya ce yana koyar da Python. Ya ba da shawarar kusan watanni 6 a sa'o'i 10 a mako.",
            "IBM Data Science Professional Certificate (a Coursera): jerin kwasa-kwasai 12 na masu farawa. Shafinsa ya lissafa Python, SQL, Jupyter da libraries (tarin kayan code) kamar Pandas, NumPy, Matplotlib da Scikit-learn, kuma ya ƙunshi nazarin bayanai, nuna su da hoto, da models na machine learning (koyon na'ura). Ya ba da shawarar kusan watanni 4 a sa'o'i 10 a mako.",
            "Microsoft Certified: Power BI Data Analyst Associate: takardar shaida ta matsakaicin mataki da ake samu ta cin jarabawar PL-300, jarabawa da ake sa ido a kanta. Tana gwada shiryawa, tsarawa, nunawa da nazarin bayanai a Power BI, kuma kuna sabunta ta duk bayan watanni 12 kyauta a Microsoft Learn.",
            "Kuɗi, lokaci da jerin kwasa-kwasai suna canjawa, kuma wasu shirye-shirye suna cikin biyan kuɗin wata-wata (subscription) ko ana ba da su kyauta ta ɗakunan karatu, hukumomin ayyukan yi ko tallafin kuɗi. Ku buɗe kowane shafin hukuma ku duba kafin ku yi rajista. Babu takardar shaidar da ke tabbatar da aiki."
          ],
          steps: ["Ku rubuta burinku: manazarci, masanin kimiyyar bayanai, ko amfani da bayanai a aikinku na yanzu.", "Ku buɗe shafin hukuma na kowace takardar shaida.", "Ku rubuta matakinta, kayan aikinta, tsawonta da kuɗinta na yanzu.", "Ku tambayi cibiyar ayyukan yi ko ɗakin karatu na yankinku game da samun ta kyauta.", "Ku zaɓi ɗaya, ku rubuta dalili."],
          words: [["Professional certificate (takardar shaidar ƙwararru)", "jerin kwasa-kwasai na intanet daga kamfani ko makaranta da ke ƙarewa da takardar shaida."], ["Proctored exam (jarabawa da ake sa ido)", "jarabawa da wani jami'i ke kallo, a zahiri ko ta intanet, don hana magudi."], ["Python", "sanannen yaren rubuta shirin kwamfuta da ake amfani da shi a kimiyyar bayanai."]],
          slides: [
            { title: "Google Data Analytics", bullets: ["Kwasa-kwasai 9 a Coursera, matakin masu farawa", "Spreadsheet, SQL, Tableau; FAQ ya ce har da Python", "Kusan watanni 6 a sa'o'i 10 a mako (a cewar shafinsa)"] },
            { title: "IBM Data Science", bullets: ["Kwasa-kwasai 12 a Coursera, matakin masu farawa", "Python, SQL, Jupyter, Pandas, Scikit-learn", "Kusan watanni 4 a sa'o'i 10 a mako (a cewar shafinsa)"] },
            { title: "Microsoft Power BI Data Analyst", bullets: ["Matsakaicin mataki: ku ci jarabawar PL-300", "Shiryawa, tsarawa, nunawa da nazari a Power BI", "Ana sabunta ta kyauta duk bayan watanni 12 a Microsoft Learn"] },
            { title: "Kafin ku yi rajista", bullets: ["Ku duba shafin hukuma don kuɗi da lokaci", "Ku tambayi samun ta kyauta: ɗakin karatu, cibiyar ayyukan yi, tallafi", "Babu takardar shaidar da ke tabbatar da aiki"] }
          ],
          sources: [GOOGLE_DA, IBM_DS, MS_PL300],
          tryIt: "Ku yi teburin kwatanta mai layuka uku: takardar shaida, mataki, manyan kayan aiki, lokaci, kuɗi na yau (daga shafin hukuma). Ku zagaye wadda ta dace da burinku, ku rubuta jimla ɗaya da ke faɗin dalili.",
          youCanNow: "kwatanta takardun shaidar bayanai na Google, IBM da Microsoft, da zaɓar wanda ya dace da burinku.",
          quickCheck: [
            { objective: "O2", q: "Me samun takardar shaidar bayanai ke tabbatarwa?", options: ["Babu komai; tana nuna abin da kuka koya", "Tayin aiki", "Ƙarin albashi", "Digirin jami'a"], answer: 0, why: "Takardar shaida tana nuna ƙwarewa; ba ta tabbatar da aiki." },
            { objective: "O2", q: "Wani aboki ya ce wata takardar shaida tana da wani kuɗi a wata. Me za ku yi kafin ku yi rajista?", options: ["Ku amince da abokinku", "Ku tambayi AI farashin", "Ku duba kuɗin a shafin hukuma na shirin a yau", "Ku yi rajista ku gano daga baya"], answer: 2, why: "Kuɗi yana canjawa, don haka kuna duba shafin hukuma a lokacin da kuke rajista." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Yin tsarin karatu da za ku bi",
          minutes: 5,
          goal: "Gina tsarin karatu na mako da ya dace da aiki da iyali.",
          text: [
            "Yawancin mutanen da ba sa kammala takardar shaida suna tsayawa ne saboda rayuwa ta yi musu yawa, ba don ta yi wuya sosai ba. Tsarin da aka rubuta, mai ƙayyadaddun lokuta, yana ƙara yiwuwar kammalawa sosai.",
            "Ku fara da makonku na gaske. Idan kuna aikin canjin lokaci (shift), ku zaɓi lokutan karatu da suka dace: misali, lokuta uku na minti 45 a ranakun aiki da lokaci ɗaya na sa'o'i 2 a ƙarshen mako. Karatu gajere kuma akai-akai ya fi dogon zama ɗaya a ƙarshen mako.",
            "Kowane mako, ku sa ƙaramin buri ɗaya da za ku iya cirewa idan kun gama: \"gama module na 2 da gwajinsa\". Ku riƙe bayanan karatu da kalmominku, kuma ku yi kowane lab (atisayen hannu): a lab ne ake gina ƙwarewa. Mataimakin AI zai iya bayyana wani abu mai rikitarwa da kalmomi masu sauƙi ko ya yi muku gwaji, amma ku yi aikin da ake ba da maki da kanku, kuma ku bi dokokin gaskiya na shirin."
          ],
          steps: ["Ku rubuta sa'o'inku da ba sa canjawa: aiki, iyali, barci.", "Ku zaɓi lokutan karatu 3-5 a mako ku saka su a kalandarku.", "Ku sa buri ɗaya na mako da za ku iya cirewa.", "Ku nemi aboki ko mataimakin AI ya yi muku gwaji a kan bayanan karatunku.", "Ku duba kowace Lahadi ku gyara."],
          words: [["Lokacin karatu (study block)", "ƙayyadadden lokaci a kalandarku don koyo."], ["Lab (atisayen hannu)", "atisaye inda kuke aiwatar da ƙwarewa a kan bayanai na gaske ko code."]],
          slides: [
            { title: "Me yasa tsari yake da muhimmanci", bullets: ["Mutane suna tsayawa idan rayuwa ta yi musu yawa", "Tsarin da aka rubuta mai ƙayyadaddun lokuta yana taimaka muku kammalawa"] },
            { title: "Ku daidaita shi da makonku", bullets: ["Gajerun lokuta 3-5 sun fi dogon zama ɗaya", "Misali: lokuta uku na minti 45 a ranakun aiki", "Da lokaci ɗaya na sa'o'i 2 a ƙarshen mako"] },
            { title: "Kowane mako", bullets: ["Ƙaramin buri ɗaya da za ku iya cirewa", "Ku yi kowane lab na hannu", "AI zai iya yi muku gwaji; ku yi aikin maki da kanku"] }
          ],
          tryIt: "Ku saka lokutan karatu huɗu na mako mai zuwa a kalandar wayarku ko ta takarda. Ku rubuta buri ɗaya na mako daga takardar shaidar da kuka zaɓa, misali \"gama module na farko\".",
          youCanNow: "yin tsarin karatu na mako mai ƙayyadaddun lokuta da buri da za ku iya cirewa.",
          quickCheck: [
            { objective: "O3", q: "A ina ake gina ƙwarewa ta gaske a kwas na intanet?", options: ["Kallon bidiyo da gudu biyu", "Karanta tallace-tallacen kwas ɗin", "Yin lab na hannu", "Tsallakewa zuwa jarabawar ƙarshe"], answer: 2, why: "Atisaye a lab yana gina ƙwarewar da masu ɗaukar aiki ke son gani." },
            { objective: "O3", q: "Kuna aikin dare (shift na yamma). Wane tsarin karatu za ku rubuta?", options: ["Ƙayyadaddun lokutan karatu a kalandarku da suka dace da shift ɗinku, da buri na mako", "Karatu duk lokacin da kuka sami rana marar aiki", "Karatu sa'o'i takwas a dare ɗaya kowane wata", "Jira har jadawalinku ya canja"], answer: 0, why: "Lokuta akai-akai a kalandarku da buri su ne tsarin da ya fi yiwuwa ya yi aiki." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Zaɓar takardar shaidarku da tsara yadda za ku kammala",
        questions: [
          { objective: "O1", q: "Wace tambaya ce ta fi kama da aikin manazarcin bayanai?", options: ["Ta yaya zan gyara injin mota?", "Wane kaya ne ya fi sayuwa a watan jiya?", "Me zan dafa yau da dare?", "Wa zai ci wasan?"], answer: 1, why: "Manazarta suna bayyana abin da ya faru ta amfani da bayanan da ake da su." },
          { objective: "O2", q: "Wace takardar shaida ake samu ta cin jarabawar PL-300?", options: ["Google Data Analytics Professional Certificate", "IBM Data Science Professional Certificate", "Takardar kammala sakandare", "Microsoft Certified: Power BI Data Analyst Associate"], answer: 3, why: "Ana samun Power BI Data Analyst Associate na Microsoft ta cin PL-300." },
          { objective: "O2", q: "Burinku shi ne gina models na hasashe a Python. Darussan wane shiri ne suka fi dacewa?", options: ["IBM Data Science Professional Certificate", "Kwas na buga rubutu (typing)", "Lasisin tuƙa forklift", "Katin masu sarrafa abinci"], answer: 0, why: "Shirin IBM ya ƙunshi Python, Scikit-learn da models na machine learning." },
          { objective: "O2", q: "Kuɗin wani shiri $49 ne a wata a bara. Me za ku yi yanzu?", options: ["Ku ɗauka bai canja ba", "Ku tambayi baƙo a intanet", "Ku duba shafin hukuma a yau", "Ku ƙi dubawa"], answer: 2, why: "Kuɗi yana canjawa; shafin hukuma yana da na yanzu." },
          { objective: "O3", q: "Wane tsarin karatu ne ya fi yiwuwa ya yi aiki ga mai aikin shift?", options: ["Karatu sa'o'i 10 sau ɗaya a wata", "Karatu sai lokacin da kuka ji daɗi kawai", "Lokuta uku na minti 45 a ranakun aiki da lokaci ɗaya a ƙarshen mako", "Tsallake lab don adana lokaci"], answer: 2, why: "Gajerun lokuta akai-akai a kalandarku sun fi sauƙin bi." }
        ]
      }
    },
    {
      name: "Babi na 2: Atisayen manyan ƙwarewa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Tsaftace bayanai",
          minutes: 6,
          goal: "Nemo da gyara gurabe marasa komai, layukan da aka maimaita da matsalolin tsari a ƙananan bayanai.",
          text: [
            "Bayanai na gaske suna da rikici. Kafin ku yi nazari, kuna tsaftace su. Kowace takardar shaida da aka ambata a sama tana ba da lokaci kan wannan, domin bayanai marasa daidai suna kawo amsoshi marasa daidai.",
            "Matsalolin da aka saba: gurabe marasa komai, layi ɗaya sau biyu (duplicates), abu ɗaya da aka rubuta ta hanyoyi daban-daban (\"CA\", \"Calif.\", \"California\"), lambobin da aka ajiye a matsayin rubutu, da kwanan wata a tsare-tsare daban-daban.",
            "A Google Sheets ko Excel kuna iya jera (sort) da tace (filter) don nemo matsaloli, ku yi amfani da Remove duplicates (cire maimaici), ku yi amfani da Find and replace (nemo ku musanya) don sunaye su yi daidai, kuma ku canja tsarin ginshiƙi zuwa lamba ko kwanan wata. Ku ajiye kwafin asali kuma ku rubuta kowane canji da kuka yi, domin wasu su amince da aikinku."
          ],
          steps: ["Ku ajiye kwafin asalin bayanan.", "Ku jera ku tace kowane ginshiƙi don ganin gurabe marasa komai da ƙimomi masu ban mamaki.", "Ku cire layukan da aka maimaita.", "Ku sa rubutun sunaye ya yi daidai da Find and replace.", "Ku sa tsarin lamba da na kwanan wata.", "Ku rubuta gajeren littafin kowane canji."],
          words: [["Tsaftace bayanai (data cleaning)", "gyara kurakurai a bayanai kafin ku yi nazari."], ["Duplicate (maimaici)", "layin da ya bayyana fiye da sau ɗaya."], ["Littafin tsaftacewa (cleaning log)", "jerin kowane canji da kuka yi wa bayanan."]],
          slides: [
            { title: "Me yasa ake fara tsaftacewa", bullets: ["Bayanai masu rikici suna kawo amsoshi marasa daidai", "Kowace takardar shaidar bayanai tana koyar da wannan"] },
            { title: "Matsalolin da aka saba", bullets: ["Gurabe marasa komai da layukan da aka maimaita", "\"CA\", \"Calif.\", \"California\"", "Lambobi a matsayin rubutu; kwanan wata iri-iri"] },
            { title: "Yadda ake gyara su", bullets: ["Ku jera ku tace don nemo matsaloli", "Remove duplicates; Find and replace", "Ku sa tsarin lamba da na kwanan wata"] },
            { title: "Ku zama amintattu", bullets: ["Ku ajiye kwafin asali", "Ku rubuta littafin kowane canji"] }
          ],
          tryIt: "Ku yi ƙaramin tebur na tallace-tallace 15: Kwanan wata, Kaya, Shago, Adadin kuɗi. Ku saka layuka 2 da aka maimaita, adadin kuɗi ɗaya marar komai da rubutu iri biyu na sunan shago ɗaya. Sannan ku tsaftace shi ku rubuta littafin tsaftacewarku.",
          youCanNow: "nemo da gyara matsalolin bayanai da aka saba, da riƙe littafin tsaftacewa.",
          quickCheck: [
            { objective: "O4", q: "Mene ne duplicate a cikin bayanai?", options: ["Gurbi marar komai", "Layin da ya bayyana fiye da sau ɗaya", "Jadawali", "Taken ginshiƙi"], answer: 1, why: "Maimaici yana ƙirga abu ɗaya sau biyu kuma yana ɓata jimla." },
            { objective: "O4", q: "Kuna shirin tsaftace teburin tallace-tallace. Me za ku fara yi?", options: ["Ku goge layukan da suke da ban mamaki", "Ku yi jadawali", "Ku jera ta kwanan wata kawai", "Ku ajiye kwafin asali"], answer: 3, why: "Ajiye asali yana ba ku damar dubawa ko soke tsaftacewarku." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Taƙaita bayanai da yin jadawali ɗaya mai sarari",
          minutes: 5,
          goal: "Amsa tambaya da teburin taƙaitawa da jadawali ɗaya.",
          text: [
            "Ku fara da tambaya ɗaya mai sarari, kamar \"Wane shago ne ya fi sayarwa a watan jiya?\" Tambaya mai kyau tana yanke waɗanne ginshiƙai kuke buƙata.",
            "Teburin taƙaitawa yana haɗa bayanai rukuni-rukuni yana kuma tara jimlarsu. A Sheets ko Excel, pivot table yana yin haka: ku saka Shago a layuka (rows) da jimlar Adadin kuɗi a values. A Python, library ɗin Pandas yana yin irin wannan da groupby. Kuna iya gwada Python kyauta a Google Colab, wanda yake kama da kayan aikin shirin IBM.",
            "Sannan ku zaɓi jadawalin da ya dace: jadawalin sanduna (bar chart) don kwatanta rukunoni, jadawalin layi (line chart) don canji a tsawon lokaci, kuma ku guji jadawalin da'ira (pie chart) mai yankuna da yawa. Ku ba shi take da ke faɗin amsar, kamar \"Eastside ne ya fi sayarwa a watan Maris\", kuma ku sa sunaye a gaɓoɓin jadawalin (axes)."
          ],
          steps: ["Ku rubuta tambaya ɗaya.", "Ku yi pivot table (ko groupby na Pandas).", "Ku zaɓi jadawali: sanduna don kwatanta, layi don lokaci.", "Ku rubuta take da ke faɗin amsar.", "Ku sa sunaye a gaɓoɓin jadawalin (axes)."],
          words: [["Pivot table", "kayan aikin spreadsheet da ke haɗa bayanai rukuni-rukuni yana tara jimlarsu."], ["Pandas", "library na Python don aiki da teburan bayanai."], ["Jadawalin sanduna (bar chart)", "jadawali da ke kwatanta rukunoni da sanduna masu tsawo daban-daban."]],
          slides: [
            { title: "Ku fara da tambaya", bullets: ["\"Wane shago ne ya fi sayarwa a watan jiya?\"", "Tambayar ce ke zaɓar ginshiƙanku"] },
            { title: "Taƙaitawa", bullets: ["Spreadsheet: pivot table", "Python: groupby na Pandas (ku gwada a Google Colab)", "Layuka: Shago. Values: jimlar Adadin kuɗi"] },
            { title: "Jadawali mai sarari", bullets: ["Sanduna don kwatanta, layi don lokaci", "Take yana faɗin amsar", "Ku sa sunaye a gaɓoɓin jadawalin"] }
          ],
          sources: [COLAB],
          tryIt: "Ku yi amfani da teburin da kuka tsaftace a Darasi na 4. Ku yi pivot table na jimlar Adadin kuɗi bisa Shago, sannan ku yi jadawalin sanduna da take da ke faɗin amsar.",
          youCanNow: "mayar da tambaya zuwa teburin taƙaitawa da jadawali mai sarari.",
          quickCheck: [
            { objective: "O5", q: "Me pivot table ke yi?", options: ["Zana taswira", "Goge maimaici", "Gyara rubutu", "Haɗa bayanai rukuni-rukuni da tara jimlarsu"], answer: 3, why: "Pivot table yana haɗa layuka, kamar bisa shago, yana tara jimlarsu." },
            { objective: "O5", q: "Kuna son kwatanta jimlar tallace-tallacen shaguna 5. Wane jadawali za ku yi?", options: ["Jadawalin layi", "Jadawalin sanduna da take da ke faɗin amsar", "Jadawalin da'ira mai yankuna 50", "Babu jadawali"], answer: 1, why: "Jadawalin sanduna yana kwatanta rukunoni, kuma take da ke faɗin amsar yana sa ya yi sarari." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ba da labarin bayanai da gina aikin nuni (portfolio)",
          minutes: 5,
          goal: "Rubuta gajeren sakamako da haɗa aikinku a matsayin aikin nuni.",
          text: [
            "Masu ɗaukar aiki suna son ganin cewa kuna iya bayyana bayanai, ba yin jadawali kawai ba. Sakamako mai kyau jimloli uku ne: abin da kuka gano, dalilin da yasa yake da muhimmanci, da iyaka ɗaya ta bayanan. Misali: \"Eastside ya sayar da kashi 40% na tallace-tallacen Maris. Wataƙila yana buƙatar ƙarin ma'aikata a ranakun Asabar. Bayanan sun ƙunshi wata ɗaya kawai.\"",
            "Yawancin waɗannan takardun shaida suna ƙarewa da capstone (aikin ƙarshe) ko aikin nuni. Kuna iya fara ɗaya yanzu: take, tambayar, inda bayanan suka fito, littafin tsaftacewarku, jadawalin da sakamakonku. Ku yi amfani da bayanan jama'a kyauta, kamar shafin bayanan buɗaɗɗe (open data) na birni, ko teburin atisayenku. Kada ku taɓa amfani da bayanan sirri na abokan ciniki ko na kamfani ba tare da izini ba.",
            "Mataimakin AI zai iya taimaka muku duba ko rubutunku yana da sarari, amma ku tabbata kowace lamba a sakamakonku ta fito daga teburinku."
          ],
          steps: ["Ku rubuta sakamakonku a jimloli uku: sakamako, dalilin muhimmancinsa, iyaka ɗaya.", "Ku tattara take, tambaya, majiyar bayanai, littafin tsaftacewa, jadawali.", "Ku duba kowace lamba da teburinku.", "Ku ajiye shi a wuri ɗaya da za ku iya rabawa, kamar babban fayil na Google Drive ko GitHub."],
          words: [["Capstone (aikin ƙarshe)", "babban aiki na ƙarshe a ƙarshen shiri."], ["Portfolio (aikin nuni)", "tarin ayyukanku da kuke nuna wa masu ɗaukar aiki."], ["Iyaka (limitation)", "wani abu game da bayanan da ke nufin amsar ba za ta cika ba."]],
          slides: [
            { title: "Sakamako a jimloli uku", bullets: ["Abin da kuka gano", "Dalilin da yasa yake da muhimmanci", "Iyaka ɗaya ta bayanan"] },
            { title: "Aikinku na nuni (portfolio)", bullets: ["Take, tambaya da majiyar bayanai", "Littafin tsaftacewa, jadawali da sakamako", "Bayanan jama'a ko na atisaye kaɗai"] },
            { title: "Kafin ku raba", bullets: ["Ku duba kowace lamba da teburinku", "AI zai iya duba sarari, ba gaskiyar bayananku ba", "Ku ajiye shi inda za ku iya raba hanyar haɗi (link)"] }
          ],
          tryIt: "Aikin ƙarshe: ku kammala ƙaramin aikinku na nuni. Tambaya, bayanai da aka tsaftace, littafin tsaftacewa, teburin taƙaitawa, jadawali ɗaya da sakamako a jimloli uku tare da iyaka ɗaya. Ku ajiye shi da take da gajeren bayani.",
          youCanNow: "kammala da bayyana ƙaramin aikin bayanai irin wanda takardun shaidar bayanai ke nema.",
          quickCheck: [
            { objective: "O6", q: "Me yasa za ku saka iyaka ɗaya a sakamakonku?", options: ["Tana nuna gaskiya game da abin da bayanan za su iya da ba za su iya faɗa ba", "Tana sa sakamakon ya yi tsawo", "Doka ce ta tilasta", "Tana ɓoye kurakurai"], answer: 0, why: "Faɗin iyaka, kamar ƙunsar wata ɗaya kawai, yana gina amincewa da aikinku." },
            { objective: "O6", q: "Kuna son amfani da jerin abokan cinikin kamfaninku a aikin nuninku na jama'a. Me za ku yi?", options: ["Ku saka shi kamar yadda yake", "Ku cire sunaye kawai", "Ku yi amfani da bayanan jama'a ko na misali a maimakon haka, sai dai idan kuna da izini", "Ku saka shi ku nemi izini daga baya"], answer: 2, why: "Bayanan sirri na abokan ciniki ba sa shiga aikin nuni na jama'a ba tare da izini ba." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Atisayen manyan ƙwarewa",
        questions: [
          { objective: "O4", q: "Bayananku suna da \"CA\", \"Calif.\" da \"California\". Me za ku yi?", options: ["Ku sa su yi daidai da Find and replace", "Ku bar su", "Ku goge ginshiƙin", "Ku yi hasashen jimla"], answer: 0, why: "Daidaita rubutu yana hana a ƙirga wuri ɗaya a matsayin uku." },
          { objective: "O4", q: "Me yasa za ku riƙe littafin tsaftacewa?", options: ["Ba shi da amfani", "Don fayil ɗin ya yi girma", "Domin jadawali yana buƙatar sa", "Domin wasu su amince da canje-canjenku kuma su iya maimaita su"], answer: 3, why: "Littafi yana nuna ainihin abin da kuka canja." },
          { objective: "O5", q: "Wane kayan aiki ne ke haɗa bayanai rukuni-rukuni yana tara jimla a spreadsheet?", options: ["Duba rubutu (spell check)", "Pivot table", "Duba kafin bugawa (print preview)", "Sharhi (comments)"], answer: 1, why: "Pivot table yana haɗawa da taƙaita bayanai." },
          { objective: "O5", q: "Kuna son nuna yadda tallace-tallace suka canja a cikin watanni 12. Wane jadawali?", options: ["Jadawalin layi", "Jadawalin da'ira", "Babu jadawali", "Hoto"], answer: 0, why: "Jadawalin layi yana nuna canji a tsawon lokaci." },
          { objective: "O6", q: "Wanne ne sakamako mai kyau a jimloli uku?", options: ["\"Ga jadawali.\"", "\"Bayanai suna da ban sha'awa.\"", "\"Eastside ne ya fi sayarwa a Maris. Wataƙila yana buƙatar ƙarin ma'aikata a Asabar. Bayanan sun ƙunshi wata ɗaya.\"", "\"Na yi amfani da Excel.\""], answer: 2, why: "Yana ba da sakamakon, dalilin muhimmancinsa da iyaka." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Shiri don Takardar Shaidar Ƙwararru a Kimiyyar Bayanai (Data Science)",
    questions: [
      { objective: "O1", q: "Mene ne matakin farko da aka saba a aikin bayanai?", options: ["Yin jadawali", "Yin tambaya", "Sayen manhaja", "Raba sakamako"], answer: 1, why: "Tambaya mai sarari tana jagorantar duk abin da ke biye." },
      { objective: "O1", q: "Masanin kimiyyar bayanai, fiye da manazarci, yawanci yana:", options: ["Amfani da takarda kawai", "Rubuta bayanai kawai", "Ba ya taɓa amfani da bayanai", "Gina models da ke hasashe"], answer: 3, why: "Masana kimiyyar bayanai suna gina models na hasashe, sau da yawa a Python." },
      { objective: "O1", q: "Me ake amfani da SQL don shi?", options: ["Zana hotuna", "Gyara bidiyo", "Aika imel", "Fitar da bayanai daga rumbun bayanai"], answer: 3, why: "SQL yare ne na yin tambayoyi ga rumbun bayanai." },
      { objective: "O2", q: "Ana ba da Google Data Analytics Professional Certificate a:", options: ["Microsoft Learn kaɗai", "Coursera", "Ofishin motoci (DMV)", "Shagon manhajoji na waya"], answer: 1, why: "Shafinsa na hukuma yana Coursera." },
      { objective: "O2", q: "A cewar shafinsa, kwasa-kwasai nawa ne a IBM Data Science Professional Certificate?", options: ["3", "9", "12", "20"], answer: 2, why: "Shafin IBM a Coursera ya lissafa jerin kwasa-kwasai 12." },
      { objective: "O2", q: "A kan wane kayan aiki ne takardar shaidar Microsoft ta ta'allaka?", options: ["Power BI", "Photoshop", "Word", "Tableau"], answer: 0, why: "Ita ce Power BI Data Analyst Associate." },
      { objective: "O2", q: "Me samun takardar shaidar bayanai ke tabbatarwa?", options: ["Aiki", "Ƙarin albashi", "Babu komai; tana nuna abin da kuka koya", "Digirin jami'a"], answer: 2, why: "Takardun shaida suna nuna koyo; ba sa tabbatar da sakamako." },
      { objective: "O2", q: "Kafin ku yi rajista, ya kamata ku duba kuɗin a:", options: ["Shafin hukuma na shirin", "Tallar kafofin sada zumunta", "Bayanan karatun bara", "Ƙwaƙwalwar AI"], answer: 0, why: "Shafin hukuma yana da kuɗi da abubuwan da ke ciki na yanzu." },
      { objective: "O3", q: "Wane tsari ne ya fi kyau don kammala takardar shaida?", options: ["Karatu duk lokacin da aka sami dama", "Ƙayyadaddun lokutan karatu a kalandarku da buri na mako", "Tsallake lab", "Karatu sau ɗaya a wata na yini ɗaya"], answer: 1, why: "Lokuta akai-akai da aka tsara, da buri, suna taimaka muku kammalawa." },
      { objective: "O3", q: "Idan kuna amfani da mataimakin AI yayin karatun takardar shaida, ya kamata ku:", options: ["Bar shi ya yi aikin maki", "Guje masa gaba ɗaya, koyaushe", "Saka jarabawarku a ciki", "Yi amfani da shi don bayyana abubuwa da yi muku gwaji, da bin dokokin gaskiya"], answer: 3, why: "AI zai iya taimaka muku koyo, amma aikin maki dole ya zama naku." },
      { objective: "O3", q: "A ina ake gina ƙwarewa ta gaske a kwas na intanet?", options: ["Yin lab na hannu", "Kallon bidiyo kawai", "Karanta take", "Tsallake gwaje-gwaje"], answer: 0, why: "Lab atisaye ne na hannu." },
      { objective: "O4", q: "Mene ne duplicate a cikin bayanai?", options: ["Gurbi marar komai", "Sunan ginshiƙi", "Jadawali", "Layin da ya bayyana fiye da sau ɗaya"], answer: 3, why: "Maimaici layuka ne da aka maimaita." },
      { objective: "O4", q: "Kafin tsaftacewa, ya kamata ku:", options: ["Goge asalin", "Yi jadawali", "Ajiye kwafin asali", "Aika shi ga kowa ta imel"], answer: 2, why: "Kwafi yana ba ku damar sake farawa ko duba aikinku." },
      { objective: "O4", q: "Lambobin da aka ajiye a matsayin rubutu na iya jawo:", options: ["Aiki da sauri", "Jimla marar daidai", "Jadawali mafi kyau", "Babu komai"], answer: 1, why: "Lambobi a matsayin rubutu ba za su tara daidai ba." },
      { objective: "O4", q: "A Python, wane library ne ke aiki da tebura kamar spreadsheet?", options: ["Outlook", "Paint", "Zoom", "Pandas"], answer: 3, why: "Pandas don aiki da teburan bayanai ne." },
      { objective: "O5", q: "Wane kayan aiki kyauta ne ke ba ku damar gudanar da Python a burauzar intanet?", options: ["Na'urar lissafi", "Notepad", "Google Colab", "Paint"], answer: 2, why: "Google Colab yana gudanar da littattafan Python (notebooks) ta intanet." },
      { objective: "O5", q: "Don kwatanta tallace-tallacen shaguna 5, jadawali mafi kyau yawanci shi ne:", options: ["Jadawalin sanduna", "Jadawalin da'ira mai yankuna 20", "Taswira", "Babu jadawali"], answer: 0, why: "Jadawalin sanduna yana kwatanta rukunoni a sarari." },
      { objective: "O5", q: "Take mai kyau na jadawali:", options: ["\"Jadawali 1\"", "Yana faɗin amsar, kamar \"Eastside ne ya fi sayarwa a Maris\"", "Ana barin sa babu komai", "Yana da tsawo sosai"], answer: 1, why: "Take da ke faɗin amsar yana taimaka wa masu karatu." },
      { objective: "O6", q: "Waɗanne bayanai ne bai kamata ku yi amfani da su a aikin nuni na jama'a ba?", options: ["Bayanan buɗaɗɗe na birni", "Bayanan sirri na abokan ciniki ba tare da izini ba", "Teburin atisayenku", "Bayanan jama'a kyauta"], answer: 1, why: "Bayanan sirri suna buƙatar izini kuma bai kamata a raba su ba." },
      { objective: "O6", q: "Sakamakonku ya kamata ya ƙunshi iyaka ɗaya saboda:", options: ["Tana nuna gaskiya game da abin da bayanan za su iya da ba za su iya faɗa ba", "Tana sa shi ya yi tsawo", "Masu ɗaukar aiki ba sa son ta", "Doka ce ta tilasta"], answer: 0, why: "Faɗin iyaka yana nuna nazari mai kyau da aminci." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      1,
      6,
      8,
      10,
      11,
      12,
      16,
      17,
      19
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Tambaya mai sarari",
        objective: "O1",
        notYet: "Babu tambaya, ko tambayar da bayanan ba za su iya amsawa ba.",
        meets: "Tambaya ɗaya mai sarari da bayanan za su iya amsawa.",
        exceeds: "Tambayar tana da muhimmanci ga wurin aiki na gaske kuma tana faɗin dalili."
      },
      {
        name: "Bayanai da aka tsaftace da littafi",
        objective: "O4",
        notYet: "Gurabe marasa komai, maimaici ko matsalolin tsari suna nan, ko babu littafi.",
        meets: "An gyara gurabe marasa komai, maimaici da tsare-tsare, akwai littafin tsaftacewa, kuma an ajiye asali.",
        exceeds: "Littafin yana faɗin layuka nawa kowane gyara ya canja."
      },
      {
        name: "Taƙaitawa da jadawali",
        objective: "O5",
        notYet: "Babu teburin taƙaitawa, ko jadawali da bai amsa tambayar ba.",
        meets: "Teburin taƙaitawa da jadawali ɗaya na irin da ya dace, da take da ke faɗin amsar.",
        exceeds: "An sa sunaye a gaɓoɓin jadawalin kuma ana iya karanta shi da kallo ɗaya."
      },
      {
        name: "Sakamako da iyaka",
        objective: "O6",
        notYet: "Babu sakamako, ko ba a faɗi iyaka ba.",
        meets: "Sakamako a jimloli uku tare da iyaka ɗaya ta bayanan.",
        exceeds: "Sakamakon yana ba da shawarar mataki na gaba mai amfani."
      },
      {
        name: "A shirye don nuni",
        objective: "O6",
        notYet: "Ba a ajiye ba, ko yana da bayanan sirri.",
        meets: "An ajiye a Google Sheets, Excel ko Google Colab da gajeren take da bayani, kuma babu bayanan sirri.",
        exceeds: "An raba shi a matsayin hanyar haɗi da mai koyo zai iya ƙarawa a takardar bayanin aikinsa (CV) ko bayanansa na intanet."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka yi rajista a takardar shaidar bayanai cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka kammala takardar shaidar bayanai cikin watanni 6",
      "Masu koyo da suka yi amfani da aikin nuninsu a neman aiki ko suka sami aiki mai alaƙa da bayanai"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta mai intanet",
      "Spreadsheet kyauta (Google Sheets ko Microsoft Excel na intanet), da Google Colab idan ana so",
      "Bayanan jama'a kyauta, ko teburin tallace-tallace na misali daga Darasi na 4",
      "Kalandar waya ko ta takarda don tsarin karatu",
      "Kusan minti 60 don darussa da gwaje-gwaje, da ƙarin lokacin aikin hannu don aikin nuni"
    ],
    facilitatorNotes: [
      "Ku shirya teburin tallace-tallace na misali da aka saka matsaloli a ciki, domin kowane mai koyo ya yi atisayen tsaftace bayanai iri ɗaya.",
      "Ku sa masu koyo su duba kuɗin takardun shaida a shafukan hukuma kai tsaye a cikin aji maimakon amfani da tsofaffin lambobi.",
      "Ku nuna pivot table ɗaya da jadawali ɗaya mataki-mataki kafin masu koyo su gina nasu.",
      "Ku tunatar da masu koyo su yi amfani da bayanan jama'a ko na misali kaɗai a aikin nuni.",
      "Ku ba da maki ga aikin nuni da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
