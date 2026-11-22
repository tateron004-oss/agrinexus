"use strict";

// Koach Learn course, Hausa (ha) translation of leadership/lead-agentic-transformation.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "lead-agentic-transformation-ha",
  lang: "ha",
  translationOf: "lead-agentic-transformation",
  category: "Leadership Development",
  name: "Shugabanci a Zamanin Agentic AI 3: Agentic AI, Sarrafa Aiki ta Na'ura da Jagorantar Sauyi",
  skills: "Zaɓen aikin da za a sarrafa ta na'ura, Ƙayyade matakin 'yancin wakilin AI, Auna matakin farko da amfani, Riƙe rajistar haɗari, Jagorantar mutane cikin sauyi, Rubuta shirin gwaji na kwana 90",
  outcome: "zaɓen tsarin aiki ɗaya da wakilan AI (AI agents) za su iya inganta, da rubuta masa shirin gwaji na kwana 90, mai taswirar tsarin aikin, matakin 'yancin wakilin da amincewar da ake buƙata, matakin farko da ma'aunan nasara, rajistar haɗari, shirin mutane da horo, da ƙa'idar ci gaba ko tsayawa kafin a faɗaɗa shi.",
  about: [
    "Wannan kwas ɗin na shugabanni ne da za su yanke shawarar ko wakilan AI za su shiga ƙungiyarsu, da yadda za su shiga: manajoji, daraktoci, masu kasuwanci, da shugabannin ƙungiyoyin sa-kai da na gwamnati. Shi ne ke kammala jerin kwasa-kwasan \"Shugabanci a Zamanin Agentic AI\".",
    "Babi na 1 game da aikin ne: nemo tsarin aiki da ya cancanci a sarrafa ta na'ura, ƙayyade nawa wakili zai iya yi da kansa, da auna amfani da haɗari da gaskiya. Babi na 2 game da mutane ne: jagorantar sauyi, kafa tsarin kulawa mai sauƙi, da rubuta shirin gwaji na kwana 90 da za ku iya gabatarwa ga kwamitin gudanarwa, mai kasuwanci ko ƙungiyar shugabanni.",
    "Ba a buƙatar rubuta code. Za ku yi amfani da mataimakin AI kyauta don taimakon rubuta daftari, da hankalinku don yanke shawara. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku rubuta shirin gwaji na kwana 90 mai shafi biyu don wakilin AI ɗaya a ƙungiyarku. Ku haɗa da: taswirar tsarin aiki (matakan yanzu da lokacinsu), aikin wakilin da matakin 'yancinsa, kowane wurin da mutum zai amince da kuma wanda ke da alhaki, matakin farko da ma'aunan nasara, rajistar haɗari mai aƙalla haɗari biyar, shirin mutane (su wa abin ya shafa, yadda za ku sanar da su da horar da su), da ƙa'idar ci gaba ko tsayawa ta rana ta 90. Ku gabatar da shi cikin minti biyar ga abokin aiki ku rubuta tambayoyinsa biyu mafi wuya.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Shugabanni da za su yanke shawarar ko wakilan AI za su shiga ƙungiyarsu da yadda za su shiga: manajoji, daraktoci, masu kasuwanci, da shugabannin ƙungiyoyin sa-kai da na gwamnati da ke kammala jerin \"Shugabanci a Zamanin Agentic AI\".",
    startingPoint: "Suna iya bayanin generative AI da agentic AI, suna amfani da AI a aikinsu na shugabanci, kuma suna da jagorar amfani da AI ta ƙungiyarsu. Ba su taɓa tsarawa ko jagorantar gwajin wakilin AI ba.",
    gap: "Ayyukan wakilan AI sau da yawa suna kasawa domin shugabanni sun sarrafa tsarin aikin da bai dace ba, sun ba wakilai 'yanci da yawa, sun tsallake auna matakin farko, ko sun manta da mutanen da abin ya shafa. Shugabanni suna buƙatar shirin gwaji mai sarari da gaskiya, mai amincewa, ma'auni, haɗari, shirin mutane da ƙa'idar tsayawa kafin a fara aiki da shi.",
    constraints: [
      "Ba a buƙatar code; kalmomi masu sauƙi ga shugabannin da ba masana fasaha ba",
      "Na'urori: kwamfuta mai mataimakin AI kyauta don rubuta daftari",
      "Dokoki da ƙa'idoji sun bambanta bisa fanni da wuri, don haka masu koyo su tuntuɓi ƙwararren mai ba da shawara",
      "Babu bayanan sirri ko na asiri a kayan AI yayin rubuta shirin",
      "Lokaci: gajerun darussa, amma shirin ƙarshe zai ɗauki lokaci fiye da haka"
    ],
    prerequisites: "Kwas na 1 da na 2 na \"Shugabanci a Zamanin Agentic AI\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku tsarin aiki biyar a fannin ku", action: "zana taswirar tsarin aiki da ba shi maki a matsayin zaɓi na farko don wakilin AI", standard: "ta amfani da abubuwa biyar: yawa, matakai masu sarari, bayanai na dijital, wahala, da ƙarancin cutarwa" },
    { id: "O2", condition: "Don tsarin aikin gwajinku", action: "zaɓen matakin 'yancin farko na wakilin, lissafa kowane wurin amincewar mutum, da ambaton mai wakilin", standard: "tare da amincewa kafin wakilin ya kashe kuɗi ko ya yi magana da abokan ciniki" },
    { id: "O3", condition: "Kafin gwajin ya fara", action: "kafa matakin farko, ma'aunan nasara uku zuwa biyar da rajistar haɗari", standard: "tare da ma'aunan inganci da aƙalla haɗari biyar, kowanne da kariya da mai kula da shi" },
    { id: "O4", condition: "Idan aka ba ku mutanen da gwajinku ya shafa", action: "tsara yadda za ku sanar da su, ku sa su a ciki, ku kuma horar da su", standard: "kuna faɗin gaskiya game da abin da zai canja da wanda ba zai canja ba, da yadda za su kawo damuwarsu" },
    { id: "O5", condition: "Don ƙungiyarku ko kamfaninku", action: "kafa tsarin kulawa mai sauƙi na AI mai jerin kayan AI, mai kula da kowane wakili, da ƙungiyar bita", standard: "tare da aƙalla layuka uku a jerin, da wani da zai iya dakatar da kowane wakili" },
    { id: "O6", condition: "Ta amfani da sassan da ke sama", action: "rubuta da gabatar da shirin gwaji na kwana 90 mai shafi biyu mai ƙa'idar ci gaba ko tsayawa", standard: "an rubuta ƙa'idar kafin gwajin ya fara, kuma an rubuta tambayoyi biyu masu wuya" }
  ],
  chapters: [
    {
      name: "Babi na 1: Wakilan AI a cikin aiki",
      lessons: [
        {
          objectives: ["O1"],
          title: "Nemo tsarin aikin da ya cancanci a sarrafa ta na'ura",
          minutes: 6,
          goal: "Zana taswirar tsarin aiki ku ba shi maki don ganin ko zaɓi ne mai kyau na farko don wakili.",
          text: [
            "Kada ku fara da fasahar; ku fara da aikin. Tsarin aiki mai kyau na farko yana faruwa akai-akai, yana bin matakai masu sarari, yana amfani da bayanan da suka riga suka zama na dijital, yana gajiyar da mutane ko yana jinkiri, kuma kuskurensa ana iya kama shi kafin ya yi illa. Misalai: rarraba buƙatun da ke shigowa, shirya rahotannin mako-mako, tsara jadawali, rubuta daftarin farko na amsoshi na yau da kullum.",
            "Ku zana taswirarsa kafin ku sarrafa shi ta na'ura. Ku rubuta kowane mataki, wanda ke yinsa, kayan aikin da ake amfani da shi, da lokacin da yake ɗauka. Zana taswira sau da yawa yana nuna ɓarnar da za ku iya cirewa ba tare da AI kwata-kwata ba. Sarrafa tsarin aiki da ya lalace ta na'ura yana sa ya lalace da sauri ne kawai.",
            "Ku ba kowane zaɓi maki daga 1 zuwa 5 kan: yawa, matakai masu sarari, bayanai na dijital, wahalar da ma'aikata ke sha, da ƙarancin cutarwa idan an yi kuskure. Ku zaɓi wanda ya fi samun maki don gwajinku na farko, ba ra'ayin da ya fi burgewa ba. Ku guji gwaje-gwajen farko da ke yanke shawara game da mutane, kuɗi ko tsaro."
          ],
          steps: ["Ku lissafa tsarin aiki biyar da za a iya zaɓa.", "Ku zana taswirar mafi kyau guda biyu: matakai, wanda ke yi, kayan aiki, lokaci.", "Ku fara cire ɓarnar da ke bayyane.", "Ku ba kowanne maki 1 zuwa 5 kan yawa, matakai masu sarari, bayanai na dijital, wahala, ƙarancin cutarwa.", "Ku zaɓi mafi yawan maki da ba ya yanke shawara game da mutane, kuɗi ko tsaro."],
          words: [["Taswirar tsarin aiki (process map)", "hoton mataki-mataki na yadda ake yin wani aiki a yau."], ["Gwaji (pilot)", "ƙaramin gwaji mai ƙayyadadden lokaci kafin a faɗaɗa abu."]],
          slides: [
            { title: "Ku fara da aikin", bullets: ["Akai-akai, matakai masu sarari, bayanai na dijital", "Yana jinkiri ko yana gajiyar da mutane", "Ana iya kama kuskure kafin ya yi illa"] },
            { title: "Taswira kafin sarrafa ta na'ura", bullets: ["Matakai, wanda ke yi, kayan aiki, lokaci", "Ku fara cire ɓarna", "Tsarin da ya lalace + AI = lalacewa da sauri"] },
            { title: "Ku ba zaɓuɓɓuka maki", bullets: ["Yawa, matakai masu sarari, bayanai na dijital, wahala, ƙarancin cutarwa", "Ku zaɓi mafi yawan maki, ba wanda ya fi burgewa ba", "Ku guji shawarwari kan mutane, kuɗi, tsaro da farko"] }
          ],
          tryIt: "Ku lissafa tsarin aiki biyar a fannin ku. Ku zana taswirar mafi kyau guda biyu, ku ba su maki kan abubuwa biyar ɗin, sannan ku zaɓi tsarin aikin gwajinku.",
          youCanNow: "zana taswirar tsarin aiki da zaɓen zaɓi na farko mai ma'ana don wakilin AI.",
          quickCheck: [
            { objective: "O1", q: "Me taswirar tsarin aiki take nunawa?", options: ["Kowane mataki, wanda ke yinsa, kayan aikin da ake amfani da shi da lokacin da yake ɗauka", "Zanen ofis", "Sakamakon ƙarshe kawai", "Waɗanne ma'aikata za a maye gurbinsu"], answer: 0, why: "Taswira tana nuna yadda ake yin aikin a zahiri, wanda ke bayyana inda wakili zai iya taimakawa." },
            { objective: "O1", q: "Wani tsarin aiki ba ya faruwa sau da yawa, ba shi da sarari, kuma yana da illa idan an yi kuskure. Yaya za ku ba shi maki a matsayin gwajin farko?", options: ["Gwajin farko mai ƙarfi, domin yana da wuya", "Zaɓi mara kyau na farko; ku zaɓi tsarin aiki mai yawa, mai sarari, mai ƙarancin cutarwa", "Ku sarrafa shi gaba ɗaya nan take", "Ku ba shi maki daga baya, bayan an gina wakilin"], answer: 1, why: "Gwaje-gwajen farko su zama masu yawa, masu sarari, kuma masu ƙarancin cutarwa idan an yi kuskure." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Nawa wakilin zai iya yi? 'Yanci da amincewa",
          minutes: 5,
          goal: "Ƙayyade matakin 'yancin wakili ku kuma ambaci wuraren amincewar mutum.",
          text: [
            "Ku ɗauki 'yanci a matsayin matakai. Mataki na 1, shawara: wakilin yana rubuta daftari, mutum yana yin komai. Mataki na 2, shiryawa: wakilin yana shirya aikin (fom da aka cike, imel da ya shirya) kuma mutum yana amincewa da kowanne. Mataki na 3, aiki tare da dubawa: wakilin yana aiki kan al'amuran yau da kullum yana tura na musamman ga mutum, wanda kuma yake duba samfuri. Mataki na 4, aiki shi kaɗai: ba kasafai ba, sai don ayyuka masu ƙarancin cutarwa da za a iya mayarwa.",
            "Ku fara gwaje-gwaje a mataki na 1 ko na 2. Ku hau sama ne kawai idan ma'aunanku sun nuna wakilin abin dogaro ne, kuma don al'amuran da ya tabbatar da hakan kawai. Ku riƙe amincewa kafin duk wani abu da ke kashe kuɗi, yin magana da abokan ciniki ko jama'a, canja bayanan rajista, ko shafar haƙƙin mutum.",
            "Ku ambaci mutumin da ke da alhakin wakilin: wanda ke ɗaukar alhakin sakamakonsa, yana duba rajistar ayyukansa (log), kuma zai iya kashe shi. Wakilin da ba shi da mai kula da shi shi ne hanya mafi yawa da sarrafa aiki ta na'ura ke lalacewa."
          ],
          words: [["Matakin 'yanci (autonomy level)", "nawa wakilin AI zai iya yi ba tare da mutum ya amince ba."], ["Na musamman (exception)", "al'amarin da bai dace da tsarin da aka saba ba, kuma yana buƙatar mutum."], ["Mai wakili (agent owner)", "mutumin da ke da alhakin sakamakon wakili kuma zai iya kashe shi."]],
          slides: [
            { title: "Matakai huɗu na 'yanci", bullets: ["1 Shawara: wakili yana rubuta daftari, mutane suna aiki", "2 Shiryawa: mutane suna amincewa da kowane aiki", "3 Aiki tare da dubawa: na musamman zuwa ga mutane", "4 Aiki shi kaɗai: ba kasafai ba, ƙarancin cutarwa, za a iya mayarwa"] },
            { title: "Ku fara ƙasa, ku sami amana", bullets: ["Gwaje-gwaje a mataki na 1 ko 2", "Ku hau sama sai da shaida kawai"] },
            { title: "Koyaushe ku amince kafin", bullets: ["Kashe kuɗi", "Magana da abokan ciniki ko jama'a", "Canja bayanan rajista ko shafar haƙƙi"] },
            { title: "Kowane wakili yana da mai kula", bullets: ["Yana ɗaukar alhakin sakamako, yana duba log", "Zai iya kashe shi"] }
          ],
          tryIt: "Don tsarin aikin gwajinku, ku zaɓi matakin 'yanci na farko, ku lissafa kowane mataki da dole mutum ya amince, kuma ku ambaci mai wakilin.",
          youCanNow: "ƙayyade matakin 'yancin wakili, wuraren amincewa da mai kula da shi.",
          quickCheck: [
            { objective: "O2", q: "Me mai wakili yake yi?", options: ["Yana rubuta code na wakilin", "Yana sayen manhajar", "Yana ɗaukar alhakin sakamakon wakilin, yana duba log ɗinsa kuma zai iya kashe shi", "Shi ne ya fi amfani da wakilin"], answer: 2, why: "Kowane wakili yana buƙatar mutum mai suna da ke da alhakinsa." },
            { objective: "O2", q: "Wakilin gwajinku zai rubuta daftarin amsoshi ga abokan ciniki. A wane matakin 'yanci za ku fara?", options: ["'Yanci cikakke, don a fi ajiye lokaci", "Aiki tare da dubawa, ana tura na musamman kawai", "Babu mataki; ku tsallake shawarar", "Mataki na 1 ko 2, don mutum ya amince kafin wani abu ya kai ga abokin ciniki"], answer: 3, why: "Gwaje-gwaje yawanci suna farawa a ƙasa, kuma amincewa tana zuwa kafin wakili ya yi magana da abokan ciniki." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Auna amfani da haɗari da gaskiya",
          minutes: 6,
          goal: "Kafa matakin farko, ma'aunan nasara da rajistar haɗari don gwaji.",
          text: [
            "Ba za ku iya nuna ci gaba ba sai kuna da matakin farko (baseline): yadda tsarin aikin yake tafiya a yau. Ku auna lokaci kan kowane aiki, yawa, yawan kuskure, lokacin jira, da gamsuwar ma'aikata ko abokan ciniki na 'yan makonni kafin gwajin.",
            "Ku zaɓi ma'aunan nasara uku zuwa biyar, kuma ku haɗa da inganci, ba gudu kaɗai ba: \"lokaci kan kowace buƙata ya ragu da kashi 30 cikin 100 ba tare da ƙaruwar kurakurai ba\". Ku ƙidaya kuɗaɗen da ke ɓoye: lokacin dubawa, kuɗin kayan aiki, horo, da lokacin gyara kurakuran wakilin.",
            "Ku riƙe rajistar haɗari: tebur mai sauƙi na kowane haɗari, yiwuwar faruwarsa, girman illarsa, kariyar da aka sa, da mai kula da shi. Haɗarin da wakilai suka saba da shi: sakamako mara daidai, zubewar bayanan sirri, prompt injection (umarnin ɓoye na yaudara), samun dama da yawa, sakamako marar adalci, ma'aikata da ke amincewa da wakilin fiye da kima, da dogaro ga mai sayarwa ɗaya. Tsarin NIST AI Risk Management Framework kyauta (NIST hukumar gwamnatin Amurka ce), wanda aka tsara a matsayin Govern, Map, Measure da Manage, jagora ne mai kyau."
          ],
          steps: ["Ku auna matakin farko na 'yan makonni.", "Ku zaɓi ma'auni uku zuwa biyar, har da inganci.", "Ku ƙidaya kuɗaɗen da ke ɓoye: dubawa, kayan aiki, horo, gyara.", "Ku lissafa aƙalla haɗari biyar a rajista.", "Ku ba kowane haɗari kariya da mai kula da shi."],
          words: [["Matakin farko (baseline)", "yadda tsarin aiki yake tafiya kafin ku canja shi."], ["Rajistar haɗari (risk register)", "teburin haɗari mai yiwuwar faruwa, girman illa, kariya da mai kula."], ["Dogaro ga mai sayarwa (vendor lock-in)", "makalewa da mai sayarwa ɗaya domin sauyawa yana da wuya."]],
          slides: [
            { title: "Matakin farko tukuna", bullets: ["Lokaci kan kowane aiki, yawa, kurakurai", "Lokacin jira, gamsuwa", "Ku auna na 'yan makonni"] },
            { title: "Ku auna inganci, ba gudu kaɗai ba", bullets: ["\"Sauri da 30%, ba ƙaruwar kurakurai\"", "Ku ƙidaya lokacin dubawa, kayan aiki, horo da gyara"] },
            { title: "Rajistar haɗari", bullets: ["Haɗari, yiwuwa, illa, kariya, mai kula", "Sakamako mara daidai, sirri, injection, samun dama", "Rashin adalci, amincewa fiye da kima, dogaro ga mai sayarwa"] }
          ],
          sources: [{ name: "NIST AI Risk Management Framework", url: "https://www.nist.gov/itl/ai-risk-management-framework" }],
          tryIt: "Ku rubuta ma'aunan matakin farko na tsarin aikin gwajinku, ma'aunan nasara uku zuwa biyar, da rajistar haɗari mai aƙalla haɗari biyar, kowanne da kariya da mai kula da shi.",
          youCanNow: "kafa matakin farko, ma'aunan nasara na gaskiya da rajistar haɗari don gwajin AI.",
          quickCheck: [
            { objective: "O3", q: "Mece ce rajistar haɗari?", options: ["Jerin haɗari, kowanne da yiwuwa, illa, kariya da mai kula", "Jerin ma'aikatan da ke amfani da AI", "Takardar inshora", "Log ɗin ayyukan wakilin"], answer: 0, why: "Rajistar haɗari tana sa kowane haɗari ya bayyana kuma tana ba shi kariya da mai kula." },
            { objective: "O3", q: "Ma'aunin nasararku kawai shi ne \"sauri\". Me za ku ƙara?", options: ["Babu komai; gudu shi ne mafi muhimmanci", "Ma'aunin inganci, kamar rashin ƙaruwar kurakurai", "Ma'aunin yadda ma'aikata ke son mai sayarwa", "Makin da wakilin ya ba kansa"], answer: 1, why: "Gudu ba tare da inganci ba zai iya ɓoye kurakurai da sake aiki." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Wakilan AI a cikin aiki",
        questions: [
          { objective: "O1", q: "Wanne ne tsarin aiki mafi kyau na farko don gwajin wakilin AI?", options: ["Yanke shawarar wanda za a ƙara wa matsayi", "Amincewa da manyan biyan kuɗi", "Rarraba buƙatun yau da kullum da ke shigowa", "Kula da hatsarori na tsaro"], answer: 2, why: "Aiki mai yawa, mai sarari, mai ƙarancin cutarwa yana zama gwajin farko mai aminci." },
          { objective: "O1", q: "Me yasa za a zana taswirar tsarin aiki kafin a sarrafa shi ta na'ura?", options: ["Zana taswira sau da yawa yana nuna ɓarna, kuma sarrafa tsarin da ya lalace yana sa ya lalace da sauri", "Doka ce ta buƙace shi", "Wakilai ba za su iya aiki ba tare da taswira ba", "Yana tsawaita gwajin"], answer: 0, why: "Ku fara gyara tsarin aikin, sannan ku sarrafa shi ta na'ura." },
          { objective: "O2", q: "A matakin 'yanci na 2 (shiryawa), wa ke amincewa da kowane aiki?", options: ["Babu kowa", "Wakilin", "Mai sayarwa", "Mutum"], answer: 3, why: "Mataki na 2 yana shirya ayyuka don mutum ya amince." },
          { objective: "O3", q: "Mene ne matakin farko (baseline)?", options: ["Shiri mafi arha", "Yadda tsarin aiki yake tafiya kafin sauyi", "Sunan wakilin", "Rahoton ƙarshe"], answer: 1, why: "Ba tare da matakin farko ba ba za ku iya nuna ci gaba ba." },
          { objective: "O3", q: "Wanne ma'aunin nasara ne ya fi kyau?", options: ["\"Yana jin kamar ya fi sauri\"", "\"Ma'aikata suna son tambarin\"", "\"Wakilin yana aiki sosai\"", "\"Lokaci kan kowace buƙata ya ragu da 30% ba tare da ƙaruwar kurakurai ba\""], answer: 3, why: "Yana auna gudu da inganci idan aka kwatanta da matakin farko." }
        ]
      }
    },
    {
      name: "Babi na 2: Jagorantar mutane da shirin",
      lessons: [
        {
          objectives: ["O4"],
          title: "Jagorantar mutane cikin sauyi",
          minutes: 5,
          goal: "Tsara yadda za ku sanar, ku sa a ciki, ku kuma horar da mutanen da abin ya shafa.",
          text: [
            "Sarrafa aiki ta na'ura yana canja ayyuka, kuma mutane suna jin hakan kafin ku sanar da komai. Ku sa mutanen da ke yin aikin a yau a ciki tun farko: sun san al'amuran musamman, dabarun da suke bi, da haɗarin gaske. Ya kamata su taimaka wajen zana taswirar tsarin aikin da gwada wakilin.",
            "Ku sanar da wuri kuma da gaskiya: dalilin da yasa kuke gwaji, abin da zai canja da wanda ba zai canja ba, abin da zai faru da lokacin da aka ajiye, da yadda mutane za su kawo damuwarsu. Idan ba ku sani ba tukuna, ku faɗi haka, ku kuma faɗi lokacin da za ku sani. Shiru yana cika da jita-jita.",
            "Ku tsara sababbin ƙwarewa: duba aikin wakili, kula da al'amuran musamman, gane kurakuran AI, da rubuta umarni masu kyau. Ku ware lokaci don horo, kuma ku yaba wa mutanen da suka gano matsaloli; kama kuskuren wakili gudummawa ce, ba rashin aminci ba."
          ],
          steps: ["Ku lissafa su wa abin ya shafa da yadda ya shafe su.", "Ku gayyaci mutanen da ke yin aikin su taimaka a taswira da gwaji.", "Ku faɗa musu dalili, abin da zai canja, wanda ba zai canja ba, da yadda za su kawo damuwa.", "Ku tsara sababbin ƙwarewa da lokacin horo.", "Ku yaba wa mutanen da suka gano matsaloli."],
          words: [["Gudanar da sauyi (change management)", "tsara yadda mutane za su tashi daga tsohuwar hanyar aiki zuwa sabuwa."], ["Mai ruwa da tsaki (stakeholder)", "duk wanda sauyi ya shafa ko wanda zai iya shafar sauyin."]],
          slides: [
            { title: "Ku sa masu yin aikin a ciki", bullets: ["Sun san al'amuran musamman da haɗari", "Suna taimaka wa taswira da gwaji"] },
            { title: "Ku sanar da wuri kuma da gaskiya", bullets: ["Dalili, abin da zai canja, wanda ba zai canja ba", "Abin da zai faru da lokacin da aka ajiye", "Ku faɗi idan ba ku sani ba tukuna"] },
            { title: "Ku gina sababbin ƙwarewa", bullets: ["Duba aikin wakili da al'amuran musamman", "Gane kurakuran AI", "Ku yaba wa masu gano matsaloli"] }
          ],
          tryIt: "Ku lissafa mutanen da gwajinku ya shafa. Ku rubuta musu gajeren saƙon farko da ke bayanin dalili, abin da zai canja da wanda ba zai canja ba, da yadda za su kawo damuwa. Ku tsara zaman horo ɗaya.",
          youCanNow: "tsara ɓangaren mutane na sauyin AI: sa su a ciki, sanarwa ta gaskiya da horo.",
          quickCheck: [
            { objective: "O4", q: "Gudanar da sauyi game da me yake?", options: ["Canja nau'ikan manhaja", "Canja kasafin kuɗi", "Kai mutane daga tsohuwar hanyar aiki zuwa sabuwa", "Canja manajoji"], answer: 2, why: "Gudanar da sauyi game da mutane ne, ba kayan aiki kaɗai ba." },
            { objective: "O4", q: "Ma'aikata suna tambaya ko gwajin zai shafi ayyukansu kuma ba ku sani ba tukuna. Me za ku faɗa?", options: ["Ku yi alƙawarin cewa babu abin da zai canja", "Kada ku ce komai har rana ta 90", "Ku ce musu sirri ne", "Ku ce ba ku sani ba tukuna da lokacin da za ku sani"], answer: 3, why: "Amsoshi na gaskiya, ko da \"ba tukuna\", suna gina amana lokacin sauyi." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Tsarin kulawa mai sauƙi na AI da ke aiki",
          minutes: 5,
          goal: "Kafa tsarin kulawa mai sauƙi: jerin kayan AI, mai kula da kowane wakili da lokutan bita.",
          text: [
            "Tsarin kulawa (governance) yana nufin yanke shawarar wa zai iya yin me da AI, da duba cewa yana aiki. Ba dole ya zama mai nauyi ba. Ku fara da abubuwa uku.",
            "Jerin kayan AI (inventory): jerin kowane kayan AI da wakili da ake amfani da su, abin da yake yi, bayanan da yake taɓawa, matakin 'yancinsa da mai kula da shi. Ba za ku iya kula da abin da ba ku san yana nan ba, kuma ma'aikata sau da yawa suna fara amfani da kayan aiki da kansu.",
            "Ƙaramar ƙungiyar bita (ga ƙaramar ƙungiya, mutum biyu ko uku) da ke amincewa da sababbin wakilai, tana duba rajistar haɗari da rahotannin abubuwan da suka faru kowane wata, kuma za ta iya dakatar da kowane wakili. Ku rubuta yadda wani zai kai rahoton matsalar AI da saurin da za ku amsa. Ku tabbatar da duk wata doka ko ƙa'ida da ta shafi fannin ku da wurin ku tare da ƙwararren mai ba da shawara."
          ],
          steps: ["Ku gina jerin kayan AI da wakilai.", "Ku rubuta manufa, bayanai, matakin 'yanci da mai kula da kowanne.", "Ku kafa ƙaramar ƙungiyar bita.", "Ku duba haɗari da abubuwan da suka faru kowane wata; a bar a dakatar da kowane wakili.", "Ku wallafa yadda ake kai rahoton matsalar AI."],
          words: [["Tsarin kulawa (governance)", "dokoki da matsayi don yanke shawara da duba yadda ake amfani da wani abu."], ["Jerin kayan AI (inventory)", "cikakken jerin kayan AI da wakilan da ake amfani da su."], ["Abin da ya faru (incident)", "lamarin da wani abu ya lalace ko ya kusa lalacewa."]],
          slides: [
            { title: "Tsarin kulawa zai iya zama mai sauƙi", bullets: ["Wa zai iya yin me da AI", "Da duba cewa yana aiki"] },
            { title: "Ku fara da jerin kayan AI", bullets: ["Kowane kayan AI da wakili", "Manufa, bayanai, matakin 'yanci, mai kula"] },
            { title: "Ƙaramar ƙungiyar bita", bullets: ["Tana amincewa da sababbin wakilai", "Bitar haɗari da abubuwan da suka faru kowane wata", "Za ta iya dakatar da kowane wakili"] },
            { title: "Ku sauƙaƙa kai rahoto", bullets: ["Yadda ake kai rahoton matsalar AI", "Saurin da za ku amsa", "Ku tabbatar da ƙa'idojin fanni tare da mai ba da shawara"] }
          ],
          sources: [{ name: "NIST AI Risk Management Framework (Govern function)", url: "https://www.nist.gov/itl/ai-risk-management-framework" }],
          tryIt: "Ku fara jerin kayan AI na ƙungiyarku mai aƙalla layuka uku (kayan aiki, manufa, bayanai, matakin 'yanci, mai kula). Ku ambaci waɗanda za su kasance a ƙungiyar bitarku.",
          youCanNow: "kafa tsarin kulawa mai sauƙi na AI mai jerin kayan AI, masu kula da lokutan bita.",
          quickCheck: [
            { objective: "O5", q: "Mene ne jerin kayan AI (inventory)?", options: ["Jerin kowane kayan AI da wakili da ake amfani da su, tare da masu kula", "Shagon da ke sayar da AI", "Ƙidayar kwamfutoci", "Jerin ma'aikatan da aka horar a AI"], answer: 0, why: "Ba za ku iya kula da abin da ba ku lissafa ba." },
            { objective: "O5", q: "Ba ku da tabbacin waɗanne dokoki ne suka shafi wakilinku a fannin ku. Me za ku yi?", options: ["Ku tambayi mataimakin AI ku bi abin da ya ce", "Ku tuntuɓi ƙwararren mai ba da shawara", "Ku ɗauka babu dokar da ta shafi gwaje-gwaje", "Ku kwafi shirin wani kamfani"], answer: 1, why: "Dokoki sun bambanta bisa fanni da wuri, don haka ƙwararren mai ba da shawara ya tabbatar da su." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Rubuta shirin gwaji na kwana 90",
          minutes: 6,
          goal: "Haɗa shirin gwaji na kwana 90 mai ƙa'idar ci gaba ko tsayawa.",
          text: [
            "Ku haɗa aikinku zuwa shiri mai shafi biyu. Kwana 1 zuwa 30: matakin farko, shiryawa, horo, wakili a mataki na 1 ko 2 kan ƙaramin ɓangare na aikin. Kwana 31 zuwa 60: aiki, bitar log kowane mako, gyara matsaloli, bin diddigin ma'auni. Kwana 61 zuwa 90: kwatantawa da matakin farko, hira da ma'aikata, da yanke shawara.",
            "Ku rubuta ƙa'idar ci gaba ko tsayawa kafin ku fara, don sakamako ya yanke shawara, ba sha'awa ba: \"Ku faɗaɗa zuwa dukan ƙungiya idan lokaci kan kowace buƙata ya ragu da aƙalla kashi 25 cikin 100, kurakurai ba su ƙaru ba, kuma babu wani babban abin da ya faru. In ba haka ba, ku tsaya ko ku sake tsarawa.\" Ku haɗa da ƙa'idar tsayawa don manyan abubuwan da suka faru a kowane lokaci.",
            "Ku yi amfani da mataimakin AI don mayar da bayananku zuwa daftari mai tsabta, sannan ku gyara shi da kanku. Ku gabatar da shi cikin minti biyar: matsalar, tsarin aikin, wakilin da iyakokinsa, ma'auni, haɗari, shirin mutane, da ƙa'idar yanke shawara."
          ],
          steps: ["Kwana 1-30: matakin farko, shiryawa, horo, ƙaramin farawa.", "Kwana 31-60: aiki, bitar log kowane mako, gyare-gyare, ma'auni.", "Kwana 61-90: kwatantawa, hira da ma'aikata, yanke shawara.", "Ku fara rubuta ƙa'idar ci gaba ko tsayawa da ƙa'idar tsayawa.", "Ku rubuta daftari da AI, ku gyara da kanku, ku gabatar cikin minti biyar."],
          words: [["Ƙa'idar ci gaba ko tsayawa (go or no-go rule)", "ƙa'idar yanke shawara, da aka rubuta tun farko, kan ko za a ci gaba."], ["Ƙa'idar tsayawa (stop rule)", "yanayin da ke dakatar da gwajin nan take, kamar babban abin da ya faru."]],
          slides: [
            { title: "Matakai uku", bullets: ["Kwana 1-30: matakin farko, shiryawa, ƙaramin farawa", "Kwana 31-60: aiki, bita, gyara", "Kwana 61-90: kwatantawa, hira, yanke shawara"] },
            { title: "Ku fara yanke ƙa'idar", bullets: ["Ci gaba idan an cimma ma'auni kuma babu babban abin da ya faru", "In ba haka ba, ku tsaya ko ku sake tsarawa", "Ƙa'idar tsayawa don manyan abubuwan da suka faru"] },
            { title: "Ku gabatar cikin minti biyar", bullets: ["Matsala, tsarin aiki, wakili da iyakokinsa", "Ma'auni, haɗari, shirin mutane", "Ƙa'idar yanke shawara"] }
          ],
          tryIt: "Aikin ƙarshe: ku rubuta shirin gwaji na kwana 90 mai shafi biyu mai taswirar tsarin aiki, 'yanci da amincewa, mai kula, matakin farko da ma'auni, rajistar haɗari, shirin mutane, da ƙa'idar ci gaba ko tsayawa. Ku gabatar da shi ga abokin aiki cikin minti biyar ku rubuta tambayoyinsa biyu mafi wuya.",
          youCanNow: "jagorantar gwajin wakilin AI daga ra'ayi zuwa shiri mai ma'auni masu sarari, kariya da ƙa'idar yanke shawara.",
          quickCheck: [
            { objective: "O6", q: "Mece ce ƙa'idar ci gaba ko tsayawa?", options: ["Ƙa'idar lokacin da ma'aikata za su iya amfani da AI", "Lokacin da wakilin ke fara aiki kowace rana", "Ƙa'idar da aka rubuta tun farko da ke yanke ko za a faɗaɗa, a canja ko a tsaya a rana ta 90", "Jerin kayan aikin da aka hana"], answer: 2, why: "Rubuta ƙa'idar tun farko yana sa shawarar rana ta 90 ta zama ta gaskiya." },
            { objective: "O6", q: "Abokin aiki ya yi tambaya mai wuya game da shirinku da ba za ku iya amsawa ba. Me za ku yi?", options: ["Ku rubuta ta ku ƙara amsa ko mataki na gaba a cikin shirin", "Ku canja magana", "Ku cire wannan ɓangare na shirin", "Ku ce AI zai magance shi"], answer: 0, why: "Tambayoyi masu wuya suna nuna inda shirin ke buƙatar aiki kafin gwajin ya fara." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Jagorantar mutane da shirin",
        questions: [
          { objective: "O4", q: "Wa ya kamata ya taimaka wajen zana taswirar tsarin aiki da gwada wakilin?", options: ["Mai sayarwa kawai", "Manyan shugabanni kawai", "Mutanen da ke yin aikin a yau", "Babu kowa"], answer: 2, why: "Sun san al'amuran musamman da haɗarin gaske." },
          { objective: "O4", q: "Ba ku sani ba tukuna yadda gwajin zai shafi ayyuka. Me ya kamata ku faɗa?", options: ["Cewa ba ku sani ba tukuna da lokacin da za ku sani", "Cewa babu abin da zai taɓa canjawa", "Kada ku ce komai har sai ya ƙare", "Cewa kowa zai rasa aikinsa"], answer: 0, why: "Gaskiya game da rashin tabbas tana hana jita-jita." },
          { objective: "O5", q: "Mene ne jerin kayan AI (inventory)?", options: ["Jerin kayan cefane", "Jerin kowane kayan AI da wakili da ake amfani da su, tare da masu kula", "Jerin ma'aikata", "Kasafin kuɗi"], answer: 1, why: "Ba za ku iya kula da abin da ba ku san yana nan ba." },
          { objective: "O6", q: "Yaushe ya kamata a rubuta ƙa'idar ci gaba ko tsayawa?", options: ["Kafin gwajin ya fara", "Bayan sakamako ya fito", "Ba zai taɓa ba", "Sai idan gwajin ya kasa"], answer: 0, why: "Rubuta ta tun farko yana bar sakamako, ba sha'awa ba, ya yanke shawara." },
          { objective: "O6", q: "Babban lamarin zubewar bayanan sirri ya faru a rana ta 40. Me ya kamata shirin ya ce?", options: ["Ku ci gaba har rana ta 90", "Ku ɗaga matakin 'yanci", "Ku ɓoye shi", "Ku dakatar nan take bisa ƙa'idar tsayawa"], answer: 3, why: "Ƙa'idar tsayawa tana aiki a kowane lokaci." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Shugabanci a Zamanin Agentic AI 3: Agentic AI, Sarrafa Aiki ta Na'ura da Jagorantar Sauyi",
    questions: [
      { objective: "O1", q: "Zaɓi mai kyau na farko don sarrafa aiki ta na'ura shi ne:", options: ["Mai wuya kuma ba kasafai ake yinsa ba", "Mai yawa, matakai masu sarari, ƙarancin cutarwa idan an yi kuskure", "Game da korar mutane", "Game da manyan biyan kuɗi"], answer: 1, why: "Aiki mai sauƙi, mai yawa, mai ƙarancin cutarwa farawa ne mai aminci." },
      { objective: "O1", q: "Taswirar tsarin aiki tana nuna:", options: ["Tsarin matsayin ƙungiya kawai", "Zanen ofisoshi", "Kowane mataki, wanda ke yinsa, kayan aiki da lokaci", "Albashi"], answer: 2, why: "Taswira tana nuna yadda ake yin aiki a yau." },
      { objective: "O1", q: "Sarrafa tsarin aiki da ya lalace ta na'ura:", options: ["Yana sa ya zama kyauta", "Yana gyara shi kai tsaye", "Yana sa ya lalace da sauri", "Yana cire duk haɗari"], answer: 2, why: "Ku fara gyara tsarin aikin." },
      { objective: "O1", q: "Abubuwa biyar na ba da maki sun haɗa da:", options: ["Yawa, matakai masu sarari, bayanai na dijital, wahala, ƙarancin cutarwa", "Launi, girma, alama", "Kuɗi kawai", "Shahara"], answer: 0, why: "Suna hasashen gwajin farko mai kyau." },
      { objective: "O2", q: "Matakin 'yanci na 1 (shawara) yana nufin:", options: ["Ba a amfani da AI", "Wakilin yana aiki shi kaɗai", "Wakilin yana amincewa da mutane", "Wakilin yana rubuta daftari; mutane suna yin komai"], answer: 3, why: "Shawara kawai yake bayarwa." },
      { objective: "O2", q: "Mataki na 3 (aiki tare da dubawa) yana tura me ga mutane?", options: ["Babu komai", "Al'amuran musamman, da samfuri don bita", "Takardun kuɗi kawai", "Yabo kawai"], answer: 1, why: "Al'amuran yau da kullum suna wucewa; na musamman suna zuwa ga mutane." },
      { objective: "O2", q: "Gwaje-gwaje yawanci su fara a:", options: ["Mataki mafi girma da ake da shi", "Mataki na 4", "Babu mataki", "Mataki na 1 ko 2"], answer: 3, why: "Ku fara ƙasa ku sami amana." },
      { objective: "O2", q: "Koyaushe amincewa ta zo kafin wakili ya:", options: ["Ƙidaya kalmomi", "Karanta shafin jama'a", "Kashe kuɗi ko yi magana da abokan ciniki", "Tsara tebur"], answer: 2, why: "Waɗannan ayyuka suna da sakamako na gaske." },
      { objective: "O2", q: "Mai wakili:", options: ["Yana ɗaukar alhakin sakamakonsa, yana duba log kuma zai iya kashe shi", "Shi ne mai sayar da AI", "Ba dole ba ne", "Shi ne wakilin da kansa"], answer: 0, why: "Kowane wakili yana buƙatar mutum mai alhaki." },
      { objective: "O3", q: "Ma'aunan nasara su haɗa da:", options: ["Gudu kawai", "Inganci, ba gudu kaɗai ba", "Kuɗi kawai", "Ra'ayoyin ma'aikata kawai"], answer: 1, why: "Sauri amma mafi muni ba nasara ba ne." },
      { objective: "O3", q: "Wanne ne kuɗin wakili da ke ɓoye?", options: ["Lokacin da ake kashewa wajen dubawa da gyara aikinsa", "Kuɗin hayar ofis", "Kofi", "Wurin ajiye mota"], answer: 0, why: "Lokacin dubawa da gyara yana rage abin da aka ajiye." },
      { objective: "O3", q: "Rajistar haɗari tana lissafa kowane haɗari tare da:", options: ["Babu wani abu", "Barkwanci", "Kuɗi kawai", "Yiwuwa, illa, kariya da mai kula"], answer: 3, why: "Wannan yana sa a iya sarrafa haɗari." },
      { objective: "O3", q: "Dogaro ga mai sayarwa (vendor lock-in) yana nufin:", options: ["Ofis da aka kulle", "Makalewa da mai sayarwa ɗaya domin sauyawa yana da wuya", "Kalmar sirri", "Ragin farashi"], answer: 1, why: "Haɗari ne na dabarun gaba da ya cancanci a lissafa." },
      { objective: "O5", q: "Ayyuka huɗu na NIST AI RMF su ne:", options: ["Buy, Build, Run, Sell", "Plan, Do, Check, Act", "Govern, Map, Measure, Manage", "Hire, Train, Promote, Retire"], answer: 2, why: "NIST ya ambaci waɗannan huɗu." },
      { objective: "O4", q: "Gudanar da sauyi game da:", options: ["Canja kalmomin sirri", "Ƙidayar tsabar kuɗi", "Kai mutane daga tsohuwar hanyar aiki zuwa sabuwa", "Sayen manhaja"], answer: 2, why: "Shi ne ɓangaren mutane na sauyi." },
      { objective: "O4", q: "Wani ma'aikaci ya gano kuskuren wakili. Ya kamata shugabanni su:", options: ["Gane shi a matsayin gudummawa", "Ɗauke shi a matsayin rashin aminci", "Yi watsi da shi", "Ɓoye shi"], answer: 0, why: "Gano matsaloli yana kiyaye gwajin lafiya." },
      { objective: "O5", q: "Tsarin kulawa na AI zai iya farawa da:", options: ["Babu komai", "Littafin jagora mai shafi 200", "Hana duk kayan aiki", "Jerin kayan AI, masu kula da ƙaramar ƙungiyar bita"], answer: 3, why: "Tsarin kulawa mai sauƙi ya isa a fara." },
      { objective: "O5", q: "Wa zai iya dakatar da wakili a ƙarƙashin tsarin kulawa mai kyau?", options: ["Babu kowa", "Ƙungiyar bita ko mai kula", "Mai sayarwa kawai", "Wakilin kawai"], answer: 1, why: "Dole wani ya kasance koyaushe yana iya dakatar da shi." },
      { objective: "O5", q: "Don dokokin da suka shafi fannin ku da wurin ku, ya kamata ku:", options: ["Kwafi dokokin wata ƙasa", "Nemi AI ya yanke shawara", "Ɗauka babu wadda ta shafe ku", "Tuntuɓi ƙwararren mai ba da shawara"], answer: 3, why: "Tambayoyin doka suna buƙatar shawarar ƙwararre." },
      { objective: "O6", q: "Kwana 61 zuwa 90 na gwajin don me ne?", options: ["Sayen ƙarin kayan aiki", "Fara shiryawa", "Kwatantawa da matakin farko, hira da ma'aikata da yanke shawara", "Tsallake bita"], answer: 2, why: "Mataki na ƙarshe yana kawo shawarar." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [0, 2, 4, 7, 9, 11, 14, 16, 17, 19]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Taswirar tsarin aiki", objective: "O1", notYet: "Matakan yanzu ko lokutansu ba su nan.", meets: "Yana nuna matakan yanzu, waɗanda ke yinsu da lokaci.", exceeds: "Yana ambaton ɓarnar da aka gano yayin zana taswira da dalilin da yasa wannan tsarin aikin ya sami maki mai kyau." },
      { name: "'Yanci da amincewa", objective: "O2", notYet: "Babu matakin 'yanci, wuraren amincewa ko mutum mai alhaki.", meets: "Yana faɗin aikin wakilin, matakin 'yancinsa, kowane wurin amincewar mutum da mutumin da ke da alhaki.", exceeds: "Yana bayanin dalilin da yasa wannan matakin ya dace da gwajin farko." },
      { name: "Ma'auni da haɗari", objective: "O3", notYet: "Babu matakin farko, ko haɗarin da bai kai biyar ba.", meets: "Matakin farko da ma'aunan nasara, da rajistar haɗari mai aƙalla haɗari biyar.", exceeds: "Kowane haɗari yana da kariya da mai kula, kuma ma'aunai sun haɗa da inganci." },
      { name: "Shirin mutane", objective: "O4", notYet: "Bai faɗi su wa abin ya shafa ba, ko yadda za a sanar da su a horar da su.", meets: "Yana ambaton su wa abin ya shafa da yadda za ku sanar da su ku horar da su.", exceeds: "Yana sa ma'aikata a cikin zana taswira da gwaji kuma yana faɗin yadda za su kawo damuwa." },
      { name: "Ƙa'idar ci gaba ko tsayawa", objective: "O6", notYet: "Babu ƙa'ida, ko ƙa'idar da ba za a iya aunawa ba.", meets: "Ƙa'idar ci gaba ko tsayawa mai sarari ta rana ta 90, da aka rubuta kafin farawa.", exceeds: "Ta haɗa da ƙa'idar tsayawa don manyan abubuwan da suka faru yayin gwajin." },
      { name: "An gabatar kuma an gwada", objective: "O6", notYet: "Ba a gabatar ba, ko ba a rubuta tambayoyi ba.", meets: "An gabatar cikin minti biyar, kuma an rubuta tambayoyi biyu mafi wuya na abokin aikin.", exceeds: "An sabunta shirin don amsa waɗannan tambayoyi." }
    ]
  },
  evaluation: {
    results: [
      "Shugabannin da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Shirye-shiryen gwaji da aka gabatar ga kwamitin gudanarwa, mai kasuwanci ko ƙungiyar shugabanni cikin kwanaki 60 (binciken biyo baya)",
      "Gwaje-gwajen da aka fara da rubutacciyar ƙa'idar ci gaba ko tsayawa da mai wakili mai suna (binciken biyo baya)",
      "Ƙungiyoyi masu jerin kayan AI da ƙungiyar bita a cikin kwanaki 90"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta mai mataimakin AI kyauta don rubuta daftari",
      "Jerin tsarin aiki a fannin ku da damar ganin mutanen da ke yinsu",
      "Samfurin shiri mai shafi biyu ko takarda marar rubutu",
      "Kusan minti 60 don darussa da gwaje-gwaje, da ƙarin lokaci don rubutawa da gabatar da shirin"
    ],
    facilitatorNotes: [
      "Ku yi gwajin farko tare, sannan ku sa shugabanni su ba tsarin aiki maki a ƙananan ƙungiyoyi.",
      "Ku ƙarfafa shugabanni su gayyaci ma'aikatan da ke yin aikin su taimaka wajen zana taswirar tsarin aikin.",
      "Ku tunatar da shugabanni kada su saka bayanan sirri ko na asiri a kayan AI yayin rubuta daftari, kuma su tabbatar da dokoki tare da ƙwararren mai ba da shawara.",
      "Ku shirya zaman gabatarwa inda abokan aiki za su yi tambayoyi biyu mafi wuya.",
      "Ku ba da maki ga shirin ƙarshe da ma'aunin rubric, kuma ku duba cewa an rubuta ƙa'idar ci gaba ko tsayawa kafin ranar farawa."
    ]
  }
};
