"use strict";

// Koach Learn course, Hausa (ha) translation of underserved/underserved-ai-digital-empowerment.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "underserved-ai-digital-empowerment-ha",
  lang: "ha",
  translationOf: "underserved-ai-digital-empowerment",
  category: "Undeserved Community",
  name: "Gabatarwa ga AI da Ƙarfafawa a Fasahar Zamani",
  skills: "Shiga intanet kyauta ko da kuɗi kaɗan, Buɗe mataimakin AI kyauta, Neman taimako da kalmomi masu sauƙi, Mayar da wasiƙa mai wuya zuwa jerin abubuwan yi, Tabbatar da amsoshi da kiyaye bayananku",
  outcome: "shiga intanet a ɗakin karatu, a cibiyar al'umma ko a wayarku, da amfani da mataimakin AI kyauta don mayar da wasiƙa ko sanarwa mai ruɗarwa zuwa kalmomi masu sauƙi da gajeren jerin abubuwan yi, ba tare da bayyana bayanan sirri ba.",
  about: [
    "Wannan kwas ɗin na duk wanda yake jin fasaha ta bar shi a baya ne, ko wanda aka taɓa faɗa masa cewa kwamfuta da AI \"ba na mutane irinmu ba ne\". Naku ne, kuma da yawa daga cikin mafi kyawun kayan aiki kyauta ne.",
    "Za ku nemo hanyoyin shiga intanet kyauta ko da kuɗi kaɗan, ku buɗe mataimakin AI kyauta, ku yi amfani da shi don ayyukan iyali na gaske: karanta wasiƙa mai wuya, tsara mako mai cike da aiki, ko rubuta saƙo ga makaranta ko mai gida.",
    "Kowane darasi yana ɗaukar kusan minti biyar. Ku karanta shi, ku kalli hotunan bayani (slides), sannan ku yi aikin \"Gwada yanzu\". Akwai ɗan gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku ɗauki wata wasiƙa ko sanarwa ta gaske da kuka samu (daga makaranta, asibiti, mai gida ko kamfanin wuta ko ruwa). Ku rufe ko ku bar kowace lamba da suna na sirri. Ku nemi mataimakin AI kyauta ya bayyana ta da kalmomi masu sauƙi, ya kuma yi gajeren jerin abubuwan yi tare da ranaku. Sannan ku tabbatar da rana ɗaya ko lambar waya ɗaya a shafin hukuma ko ta hanyar kiran ofishin.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya a al'ummomin da ba a kula da su sosai, waɗanda suke jin fasaha ta bar su a baya: iyalai masu ƙaramin kuɗin shiga, tsofaffi, iyaye, mutanen da ba su da kwamfuta a gida, da masu magana da Turanci a matsayin harshe na biyu.",
    startingPoint: "Suna iya kira da tura saƙon tes a waya. Ba sa amfani da kwamfuta, burauzar intanet ko mataimakan AI sosai, ko kwata-kwata, kuma an faɗa wa wasu cewa fasaha \"ba ta mutane irinmu ba ce\".",
    gap: "Makarantu, asibitoci, masu gidaje da ofisoshi suna aika wasiƙu kuma suna sa ran mutane su yi abubuwa ta intanet. Masu koyo suna buƙatar wuri kyauta don shiga intanet, da hanya mai aminci ta amfani da mataimakin AI kyauta don fahimtar wasiƙu da tsara abin da za su yi, ba tare da amsoshi marasa gaskiya ko zamba sun ruɗe su ba.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli (kusan aji 5 zuwa 6)",
      "Na'urori: wataƙila suna da waya mai sauƙi kawai, ko kwamfutar ɗakin karatu mai ƙayyadadden lokaci",
      "Kuɗi: kayan aiki kyauta kawai da wuraren shiga intanet kyauta",
      "Haɗarin zamba da sirri yana da yawa: babu lambobi ko sunaye na sirri na gaske a kowane aikin gwaji",
      "Lokaci: gajerun darussa da suka dace da aiki, iyali da ganawa"
    ],
    prerequisites: "Babu."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "A inda kuke zaune", action: "ambaci wuraren shiga intanet kyauta da shiri ɗaya da zai iya rage kuɗin wayarku ko intanet", standard: "kuna ambaton aƙalla wurare biyu tare da lokutan buɗewarsu" },
    { id: "O2", condition: "Idan aka ba ku jerin ayyukan yau da kullum", action: "gane waɗanda mataimakin AI zai iya taimakawa da su, da wanda ke yanke abin da za a yi da amsarsa", standard: "kuna samun aƙalla 4 cikin 5 daidai" },
    { id: "O3", condition: "Ta amfani da kwamfutar ɗakin karatu ko waya", action: "buɗe mataimakin AI kyauta daga manhajarsa ko shafinsa na hukuma, da yin tambaya mai faɗin abin da kuke buƙata, halin da kuke ciki da yadda kuke son amsar", standard: "ba tare da taimakon kowa ba" },
    { id: "O4", condition: "Idan aka ba ku wasiƙa ko sanarwa mai ruɗarwa", action: "neman mataimakin AI ya bayyana ta da kalmomi masu sauƙi ya yi jerin abubuwan yi tare da ranaku, kuna amfani da madadi a wurin bayanan sirri", standard: "ba tare da sunaye ko lambobi na gaske a cikin prompt ba" },
    { id: "O5", condition: "Idan amsar AI tana da rana, lambar waya ko doka", action: "tabbatar da ita da wasiƙar, shafin hukuma na .gov, ofishin ko 211", standard: "kafin ku yi aiki da ita" },
    { id: "O6", condition: "Idan kuna rubuta prompt ko kun sami saƙon gaggawa", action: "kiyaye bayanan sirri daga ciki da gane alamun gargaɗin zamba", standard: "ba tare da bayyana lambobin sirri ba, kuma kuna tuntuɓar ofisoshi ta lamba ko shafin da kuka nemo da kanku kawai" }
  ],
  chapters: [
    {
      name: "Babi na 1: Shiga intanet",
      lessons: [
        {
          objectives: ["O1"],
          title: "Hanyoyin shiga intanet kyauta ko da kuɗi kaɗan",
          minutes: 5,
          goal: "Ambaci wurare biyu kusa da ku da za ku iya amfani da intanet kyauta, da shiri ɗaya da zai iya rage kuɗin wayarku ko intanet.",
          text: [
            "Ba sai kun mallaki kwamfuta ba kafin ku yi amfani da fasaha. Ɗakunan karatu na jama'a suna da kwamfutoci kyauta da Wi-Fi kyauta, kuma da yawa suna ba da aron kwamfutar tafi-da-gidanka (laptop) ko hotspot. Cibiyoyin al'umma, cibiyoyin neman aiki da wasu coci-coci ma suna da kwamfutocin da za ku iya amfani da su.",
            "Lifeline shiri ne na gwamnatin tarayyar Amurka da ke rage kuɗin wata-wata na waya ko intanet ga mutane masu ƙaramin kuɗin shiga, ko waɗanda suke cikin shirye-shirye kamar SNAP (tallafin abinci) ko Medicaid (inshorar lafiya). Kuna nema ta intanet, sannan ku zaɓi kamfanin waya ko intanet da ke cikin shirin.",
            "Ma'aikatan ɗakin karatu za su iya taimaka muku ku fara. Neman taimako abu ne na yau da kullum; taimaka wa mutane da kwamfuta yana cikin aikinsu."
          ],
          steps: ["Ku nemo ɗakin karatu na jama'a mafi kusa da ku da lokutan buɗewarsa.", "Ku tambaya ko yana ba da aron laptop ko hotspot, da ko yana da azuzuwan koyon kwamfuta kyauta.", "Idan kuɗi ya yi ƙaranci, ku karanta game da Lifeline a shafin hukuma ku ga ko kun cancanta.", "Ku rubuta wurin da lokacin da za ku shiga intanet a wannan makon."],
          words: [["Wi-Fi", "hanyar haɗuwa da intanet ba tare da waya (kebul) ba."], ["Hotspot", "ƙaramar na'ura (ko wani saiti a waya) da ke raba haɗin intanet da sauran na'urori."], ["Lifeline", "shirin gwamnatin tarayyar Amurka da ke ba da rangwame na wata-wata kan kuɗin waya ko intanet ga mutanen da suka cancanta."]],
          sources: [{ name: "Lifeline Support (USAC, shafin hukuma na Lifeline)", url: "https://www.lifelinesupport.org/" }],
          slides: [
            { title: "Za ku iya shiga intanet ba tare da mallakar kwamfuta ba", bullets: ["Ɗakunan karatu na jama'a: kwamfutoci da Wi-Fi kyauta", "Cibiyoyin al'umma da cibiyoyin neman aiki", "Wasu ɗakunan karatu suna ba da aron laptop da hotspot"] },
            { title: "Rage kuɗin wayarku ko intanet", bullets: ["Lifeline yana ba da rangwame na wata-wata ga waɗanda suka cancanta", "Kuna iya cancanta ta kuɗin shiga, SNAP ko Medicaid", "Ku nema a shafin hukuma na Lifeline"] },
            { title: "Ku nemi taimako", bullets: ["Ma'aikatan ɗakin karatu suna taimaka wa mutane da kwamfuta kullum", "Ku tambayi game da azuzuwan kwamfuta kyauta", "Neman taimako hikima ce, ba rauni ba"] }
          ],
          tryIt: "Ku rubuta wurare biyu kusa da ku da za ku iya amfani da intanet kyauta, tare da lokutan buɗewarsu. Idan kuɗin wayarku ko intanet yana da wuyar biya, ku buɗe lifelinesupport.org ku karanta waɗanda suka cancanta.",
          youCanNow: "ambaci wuraren shiga intanet kyauta, kuma kun san inda za ku koyi game da Lifeline.",
          quickCheck: [
            { objective: "O1", q: "Mene ne hotspot da wasu ɗakunan karatu suke ba da aro?", options: ["Ƙaramar na'ura da ke ba ku damar shiga intanet", "Injin dumama ɗakuna masu sanyi", "Tsarin waya kyauta", "Ajin koyon kwamfuta"], answer: 0, why: "Hotspot ƙaramar na'ura ce da ke ba ku intanet don ku shiga ko da ba ku ɗakin karatu." },
            { objective: "O1", q: "Kuɗin intanet ɗinku yana da wuyar biya, kuma kuna samun SNAP. Me za ku yi?", options: ["Ku yanke intanet har abada", "Ku karanta game da Lifeline a shafin hukuma ku ga ko kun cancanta", "Ku nemi baƙo a intanet ya biya muku", "Ku jira kamfanin ya kira ku"], answer: 1, why: "Lifeline yana rage kuɗin wata-wata ga mutane masu ƙaramin kuɗin shiga ko waɗanda ke cikin shirye-shirye kamar SNAP." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Mene ne AI, da kalmomin yau da kullum",
          minutes: 4,
          goal: "Bayyana mene ne mataimakin AI da ambaci hanyoyi uku da zai iya taimaka wa iyalinku.",
          text: [
            "AI gajartawar artificial intelligence ce (basirar na'ura). Mataimakin AI shiri ne da za ku iya rubuta masa, ko ku yi masa magana, da kalmominku. Yana rubuta amsa cikin daƙiƙoƙi. Masu kyauta sun haɗa da ChatGPT, Microsoft Copilot da Google Gemini.",
            "Zai iya bayyana wasiƙa mai wuya, rubuta gajeren saƙo, tsara abinci bisa kasafin kuɗi, taimaka wa yaro ya fahimci aikin gida, ko fassara tsakanin harsuna.",
            "Mataimaki ne, ba shugaba ba. Bai san rayuwarku ba, kuma wani lokaci yana kuskure a bayanai. Ku ne kuke yanke abin da za ku tambaya da abin da za ku yi amfani da shi."
          ],
          words: [["AI", "artificial intelligence (basirar na'ura): shirye-shiryen kwamfuta da ke yin ayyuka kamar rubutu da amsa tambayoyi."], ["Mataimakin AI", "shirin AI da kuke hira da shi ta rubutu ko magana."]],
          slides: [
            { title: "Mataimakin AI mataimaki ne", bullets: ["Kuna rubutu ko magana da kalmominku", "Yana rubuta amsa cikin daƙiƙoƙi", "Masu kyauta: ChatGPT, Microsoft Copilot, Google Gemini"] },
            { title: "Hanyoyin da zai iya taimaka wa iyalinku", bullets: ["Bayyana wasiƙa mai wuya", "Tsara abinci bisa kasafin kuɗi", "Taimako da tambayoyin aikin gida", "Fassara saƙo"] },
            { title: "Ku ne shugaba", bullets: ["Bai san rayuwarku ba", "Yana iya kuskure a bayanai", "Ku ne kuke yanke abin da za ku tambaya da abin da za ku yi amfani da shi"] }
          ],
          tryIt: "Ku rubuta ayyuka uku daga makonku da mataimakin AI zai iya taimaka muku, ko iyalinku, ko ƙungiyarku ta al'umma.",
          youCanNow: "faɗin mene ne mataimakin AI da ambaci hanyoyi uku da zai iya taimaka muku.",
          quickCheck: [
            { objective: "O2", q: "Mene ne mataimakin AI?", options: ["Mutumin da ke karanta wasiƙunku", "Ofishin gwamnati", "Shirin da kuke rubuta masa ko magana da shi da kalmominku", "Kamfanin waya"], answer: 2, why: "Mataimakin AI shiri ne da ke rubuta amsa idan kun tambaye shi da kalmominku." },
            { objective: "O2", q: "Yaronku ya kasa ci gaba da aikin gida. Ta yaya mataimakin AI zai taimaka?", options: ["Ya yi masa jarabawar gaba ɗaya", "Ya sa hannu a takardun makaranta", "Ya kira malamin a madadinku", "Ya bayyana darasin da kalmomi mafi sauƙi"], answer: 3, why: "AI zai iya bayyana abubuwa da kalmomi mafi sauƙi; ku da yaronku ne kuke da iko." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Buɗe mataimakin AI kyauta da yin tambayarku ta farko",
          minutes: 5,
          goal: "Buɗe mataimakin AI kyauta ku yi masa tambaya a sarari game da wani aiki na gaske.",
          text: [
            "A kwamfutar ɗakin karatu ko ta cibiyar al'umma, ku buɗe burauzar intanet ku je copilot.microsoft.com, chatgpt.com ko gemini.google.com. A waya, ku saka manhajar hukuma daga shagon manhajoji.",
            "Ku nemo akwatin da ake rubutu. Ku yi tambayarku kamar yadda za ku tambayi maƙwabci mai taimako: ku faɗi abin da kuke buƙata, ɗan bayani game da halin da kuke ciki, da yadda kuke son amsar.",
            "Misali: \"Ina da $60 don kayan abinci a wannan makon, don iyali mai mutum huɗu. Ka ba ni ra'ayoyi biyar na abincin dare mai arha tare da jerin sayayya. Ka yi amfani da kalmomi masu sauƙi.\""
          ],
          steps: ["Ku buɗe burauzar ko manhajar hukuma.", "Ku nemo akwatin saƙo.", "Ku rubuta abin da kuke buƙata, halin da kuke ciki (ba tare da bayanan sirri ba), da yadda kuke son amsar.", "Ku danna Enter ko kibiyar aikawa, sannan ku karanta amsar."],
          words: [["Burauzar intanet (browser)", "shirin da kuke amfani da shi don ziyartar shafukan intanet, kamar Chrome, Edge ko Safari."], ["Prompt (umarni)", "tambaya ko buƙatar da kuke rubutawa mataimakin AI."]],
          slides: [
            { title: "Ku buɗe shi", bullets: ["Kwamfuta: copilot.microsoft.com, chatgpt.com ko gemini.google.com", "Waya: manhajar hukuma daga shagon manhajoji"] },
            { title: "Ku tambaya kamar yadda kuke tambayar maƙwabci", bullets: ["Abin da kuke buƙata", "Ɗan bayani game da halin da kuke ciki", "Yadda kuke son amsar"] },
            { title: "Misali", bullets: ["\"Ina da $60 don kayan abinci, don iyali mai mutum huɗu.", "Ka ba ni abincin dare biyar masu arha da jerin sayayya.", "Ka yi amfani da kalmomi masu sauƙi.\""] }
          ],
          tryIt: "Ku buɗe mataimakin AI kyauta. Ku nemi taimakonsa da aiki ɗaya daga jerinku na Darasi na 2, kuna amfani da dukkan sassa uku na tambaya mai kyau. Ku karanta amsar.",
          youCanNow: "buɗe mataimakin AI kyauta da yin tambaya a sarari da ke kawo amsa mai amfani.",
          quickCheck: [
            { objective: "O3", q: "A kwamfutar ɗakin karatu, a ina za ku rubuta copilot.microsoft.com?", options: ["A wurin adireshi na burauzar intanet", "A cikin saƙon tes", "A menu na firinta", "A cikin imel zuwa ɗakin karatu"], answer: 0, why: "Kuna buɗe burauzar intanet ku rubuta adireshin don isa ga mataimakin AI." },
            { objective: "O3", q: "Kuna son taimako wajen tsara bikin ranar haihuwa da ɗan kuɗi kaɗan. Wace tambaya ce ta fi kyau?", options: ["\"Biki.\"", "\"Ka taimake ni in tsara biki don yara 8 da $50. Ka ba ni jeri mai sauƙi.\"", "\"Faɗa mini komai.\"", "\"Mene ne biki?\""], answer: 1, why: "Tana faɗin abin da kuke buƙata, halin da kuke ciki da yadda kuke son amsar." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Shiga intanet",
        questions: [
          { objective: "O1", q: "Ba ku da kwamfuta. A ina za ku iya amfani da ɗaya kyauta, yawanci?", options: ["Ɗakin karatu na jama'a", "Shagon sayar da motoci", "Ma'ajiyar banki", "Gidan mai"], answer: 0, why: "Ɗakunan karatu na jama'a suna ba da kwamfutoci da Wi-Fi kyauta." },
          { objective: "O1", q: "Me Lifeline yake yi?", options: ["Yana ba ku mota kyauta", "Yana rage kuɗin wata-wata na waya ko intanet ga waɗanda suka cancanta", "Yana biyan kuɗin hayarku", "Yana ba ku sabuwar kwamfuta kowace shekara"], answer: 1, why: "Lifeline rangwame ne na gwamnatin tarayya kan kuɗin waya ko intanet." },
          { objective: "O2", q: "Wanne ne mataimakin AI kyauta?", options: ["Manhajar na'urar lissafi", "Firinta", "Microsoft Copilot", "Saƙon tes"], answer: 2, why: "Copilot, ChatGPT da Gemini sanannun mataimakan AI ne masu kyauta." },
          { objective: "O2", q: "Wane ne ke yanke abin da za a yi da amsar mataimakin AI?", options: ["AI", "Shagon manhajoji", "Ɗakin karatu", "Ku"], answer: 3, why: "AI mataimaki ne; ku ne kuke da iko." },
          { objective: "O3", q: "Wace tambaya ce za ta kawo amsa mafi amfani?", options: ["\"abinci\"", "\"Ina da $60 don kayan abinci don mutum huɗu. Ka ba ni abincin dare biyar masu arha da jeri da kalmomi masu sauƙi.\"", "\"taimako\"", "\"faɗa mini abubuwa\""], answer: 1, why: "Tana faɗin abin da kuke buƙata, halin da kuke ciki da yadda kuke son amsar." }
        ]
      }
    },
    {
      name: "Babi na 2: Amfani da AI a rayuwa ta gaske, lafiya",
      lessons: [
        {
          objectives: ["O4"],
          title: "Mayar da wasiƙa mai wuya zuwa kalmomi masu sauƙi",
          minutes: 5,
          goal: "Yi amfani da mataimakin AI don bayyana wasiƙa mai ruɗarwa da yin jerin abubuwan yi.",
          text: [
            "Wasiƙu daga makarantu, asibitoci, masu gidaje da ofisoshi suna iya cika da kalmomi masu wuya. Mataimakin AI zai iya mayar da su zuwa kalmomi masu sauƙi, ya kuma fitar da abin da ya kamata ku yi da lokacin da za ku yi shi.",
            "Da farko, ku cire bayanan sirri. Ku rubuta ko ku liƙa kalmomin da ke bayyana abin da wasiƙar take magana a kai kawai, kuma ku sauya sunaye da lambobi da madadi kamar [sunana] ko [lambar asusu].",
            "Sannan ku tambaya: \"Ka bayyana wannan wasiƙa da kalmomi masu sauƙi. Me ya kamata in yi, kuma kafin wace rana? Ka yi gajeren jerin abubuwan yi.\""
          ],
          steps: ["Ku karanta wasiƙar sau ɗaya ku zagaye sassan da ba ku fahimta ba.", "Ku kwafa ko ku rubuta waɗannan sassa, kuna sauya sunaye da lambobi da madadi.", "Ku nemi AI ya bayyana ta da kalmomi masu sauƙi ya yi jerin abubuwan yi tare da ranaku.", "Ku yi tambayar biyo baya idan wani abu bai bayyana ba tukuna, kamar \"Mene ne ma'anar 'recertification'?\""],
          words: [["Madadi (placeholder)", "abin da ke tsayawa a wuri, kamar [sunana], da kuke rubutawa a maimakon bayanan sirri na gaske."], ["Tambayar biyo baya (follow-up)", "tambaya ta biyu da ke ginuwa kan amsar farko."]],
          slides: [
            { title: "Wasiƙu masu wuya, kalmomi masu sauƙi", bullets: ["Wasiƙun makaranta, asibiti, mai gida ko ofishi", "AI zai iya bayyana kalmomi masu wuya", "Zai iya jera abin da za a yi da lokacin yi"] },
            { title: "Ku fara cire bayanan sirri", bullets: ["Ku sauya sunaye da [sunana]", "Ku sauya lambobi da [lambar asusu]", "Ku bar kalmomin da ke bayyana wasiƙar kawai"] },
            { title: "Abin da za ku tambaya", bullets: ["\"Ka bayyana wannan da kalmomi masu sauƙi.\"", "\"Me ya kamata in yi, kuma kafin yaushe?\"", "\"Ka yi gajeren jerin abubuwan yi.\""] }
          ],
          tryIt: "Ku zaɓi wata wasiƙa ko sanarwa da kuke da ita (ko samfuri daga shafin intanet na makaranta). Ku cire bayanan sirri, sannan ku nemi mataimakin AI ya bayyana ta ya yi jerin abubuwan yi.",
          youCanNow: "mayar da wasiƙa mai ruɗarwa zuwa kalmomi masu sauƙi da jerin abubuwan yi, ba tare da bayananku na sirri ba.",
          quickCheck: [
            { objective: "O4", q: "Wanne ne madadi mai kyau a cikin prompt?", options: ["Lambar asusunku ta gaske", "Cikakken sunan yaronku", "[lambar asusu]", "Adireshin gidanku"], answer: 2, why: "Madadi kamar [lambar asusu] yana tsayawa a wurin bayanin gaske don ya kasance a sirri." },
            { objective: "O4", q: "Bayanin AI har yanzu yana amfani da kalmar \"recertification\" kuma ba ku san ta ba. Me za ku yi?", options: ["Ku haƙura da wasiƙar", "Ku yi tsammanin ma'anarta", "Ku liƙa lambar shari'arku (case number)", "Ku tambaya: \"Mene ne ma'anar recertification?\""], answer: 3, why: "Tambayar biyo baya tana neman AI ya bayyana kalmar mai wuya." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Tabbatar da abin da AI ya faɗa muku",
          minutes: 4,
          goal: "Tabbatar da rana, lambar waya ko doka daga amsar AI da majiyar hukuma.",
          text: [
            "Mataimakan AI suna iya yin kuskure. Suna iya ba da tsohuwar lambar waya, ranar ƙarshe da ba daidai ba, ko dokar wata jiha daban.",
            "Kafin ku yi aiki da kowane abu game da kuɗi, tallafi, lafiya, makaranta, gidaje ko doka, ku tabbatar da shi. Ku duba wasiƙar da kanta, shafin hukuma (shafukan gwamnati a Amurka yawanci suna ƙarewa da .gov), ko ku kira ofishin.",
            "Idan ba ku sami amsar ba, ku kira 211. Layi ne kyauta kuma na sirri da ke haɗa ku da taimakon gida kan abinci, gidaje, kuɗin wuta da ruwa, da sauransu."
          ],
          steps: ["Ku zagaye kowace rana, lamba da doka a cikin amsar AI.", "Ku kwatanta kowanne da ainihin wasiƙar.", "Ku duba shafin hukuma ko ku kira ofishin.", "Idan kun makale, ku kira 211 ko ku tambayi ma'aikacin ɗakin karatu."],
          words: [[".gov", "ƙarshen adireshin shafukan intanet na gwamnatin Amurka na hukuma."], ["211", "layin waya kyauta kuma na sirri da ke haɗa mutane da taimakon gida."]],
          sources: [{ name: "211.org: Game da 211", url: "https://www.211.org/about-us" }],
          slides: [
            { title: "AI yana iya yin kuskure", bullets: ["Tsofaffin lambobin waya", "Ranakun ƙarshe da ba daidai ba", "Dokokin wata jiha daban"] },
            { title: "Koyaushe ku tabbatar da waɗannan", bullets: ["Kuɗi da tallafi", "Lafiya da makaranta", "Gidaje da doka"] },
            { title: "Inda za ku tabbatar", bullets: ["Ainihin wasiƙar", "Shafin hukuma, sau da yawa yana ƙarewa da .gov", "Ku kira ofishin, ko ku kira 211 don taimakon gida"] }
          ],
          tryIt: "Ku ɗauki jerin abubuwan yi daga Darasi na 4. Ku tabbatar da rana ɗaya ko lambar waya ɗaya da ainihin wasiƙar ko shafin hukuma.",
          youCanNow: "tabbatar da amsar AI da majiyar hukuma kafin ku yi aiki da ita.",
          quickCheck: [
            { objective: "O5", q: "Mene ne 211?", options: ["Layi kyauta kuma na sirri da ke haɗa ku da taimakon gida", "Lambar gaggawa ta 'yan sanda", "Hidimar shari'a ta kuɗi", "Shafin sayayya na intanet"], answer: 0, why: "211 kyauta ne kuma na sirri, kuma yana haɗa mutane da taimakon gida kamar abinci da kuɗin wuta da ruwa." },
            { objective: "O5", q: "AI ya ba ku lambar wayar ofishin gidaje. Me za ku yi kafin ku kira?", options: ["Ku kira ta nan take", "Ku tabbatar da ita a shafin hukuma na ofishin ko a wasiƙarku", "Ku saka ta a kafafen sada zumunta", "Ku tambayi AI ko ya tabbata"], answer: 1, why: "AI yana iya ba da tsofaffin lambobi ko marasa daidai, don haka ku fara tabbatarwa da majiyar hukuma." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kiyaye bayananku da iyalinku",
          minutes: 5,
          goal: "Kiyaye bayanan sirri daga kayan AI da gane saƙon zamba.",
          text: [
            "Kada ku taɓa rubuta waɗannan a mataimakin AI: lambobin Social Security (lambar shaidar Amurka), lambobin shari'a ko na tallafi, lambobin banki ko kati, kalmomin sirri (password), ko cikakkun sunayen yaranku tare da makarantarsu.",
            "'Yan damfara suna kai hari ga iyalan da ke cikin wahala. Ku yi hankali da saƙonnin da ke alƙawarin kuɗi kyauta ko tallafin gwamnati (grant), ke cewa tallafinku zai tsaya sai dai idan kun yi wani abu yanzu, ko ke neman ku biya da katin kyauta (gift card).",
            "Ofisoshin gaske ba sa neman a biya su da katin kyauta. Idan saƙo ya damu ku, kada ku danna hanyoyin haɗinsa (links). Ku je shafin hukuma da kanku ko ku kira lambar da kuka riga kuka sani."
          ],
          steps: ["Ku karanta kowane prompt kafin ku aika ku cire bayanan sirri.", "Ku yi shakkar saƙonnin da ke gaggauta ku ko ke alƙawarin kuɗi kyauta.", "Kada ku taɓa biya da katin kyauta don saƙo ya ce ku yi haka.", "Ku tuntuɓi ofishin ta lamba ko shafin da kuka nemo da kanku."],
          words: [["Zamba", "dabarar satar kuɗi ko bayanai."], ["Phishing (saƙon kamun bayanai)", "saƙon bogi da ke ƙoƙarin sa ku danna hanyar haɗi ko ku bayyana bayanan sirri."]],
          slides: [
            { title: "Kada ku taɓa rubutawa AI", bullets: ["Lambar Social Security, ta shari'a ko ta tallafi", "Lambobin banki ko kati, kalmomin sirri", "Cikakkun sunayen yaranku da makarantarsu"] },
            { title: "Alamun gargaɗin zamba", bullets: ["Alƙawarin kuɗi kyauta ko tallafi (grant)", "\"Tallafinku zai tsaya yau\"", "Biya da katin kyauta"] },
            { title: "Ku zauna lafiya", bullets: ["Kada ku danna hanyoyin haɗi a saƙonni masu damuwa", "Ku je shafin hukuma da kanku", "Ku kira lambar da kuka riga kuka sani gaskiya ce"] }
          ],
          tryIt: "Aikin ƙarshe: ku ɗauki wata wasiƙa ko sanarwa ta gaske, ku cire dukkan bayanan sirri, ku nemi mataimakin AI ya bayyana ta ya yi jerin abubuwan yi tare da ranaku, sannan ku tabbatar da rana ɗaya ko lambar waya ɗaya da majiyar hukuma.",
          youCanNow: "amfani da AI don aikin iyali na gaske yayin da kuke kiyaye bayananku da gane zamba.",
          quickCheck: [
            { objective: "O6", q: "Wanne ne alamar gargaɗin zamba?", options: ["Wasiƙar da ta yi daidai da shafin ofishin", "Tunatarwa daga ofishin makarantar yaronku", "Saƙon da ke gaggauta ku ku biya da katin kyauta", "Takardar kuɗi mai adadin da ya dace"], answer: 2, why: "Ofisoshin gaske ba sa neman katin kyauta ko gaggauta ku ku biya yanzu." },
            { objective: "O6", q: "Wani tes ya ce kun ci tallafin gwamnati (grant), kuma yana da hanyar haɗi. Me za ku yi?", options: ["Ku danna hanyar haɗin don karɓa", "Ku mayar da lambar bankinku", "Ku tura shi ga abokai", "Kada ku danna; ku nemo ofishin da kanku"], answer: 3, why: "Zuwa shafin hukuma ko lambar da kuka nemo da kanku yana kare ku daga hanyoyin haɗi na bogi." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Amfani da AI a rayuwa ta gaske, lafiya",
        questions: [
          { objective: "O4", q: "Kafin ku liƙa wasiƙa a mataimakin AI, me ya kamata ku yi?", options: ["Ku ƙara lambar Social Security ɗinku", "Ku sauya sunaye da lambobi da madadi", "Ku ƙara bayanan bankinku don ya fi taimakawa", "Babu komai"], answer: 1, why: "Madadi yana ba ku damar samun taimako ba tare da bayyana bayanan sirri ba." },
          { objective: "O5", q: "AI ya ce ranar ƙarshenku ita ce 5 ga Yuni, amma wasiƙar ta ce 1 ga Yuni. Wanne za ku amince da shi?", options: ["AI", "Babu ɗayansu", "Duk wanda ya fi nisa", "Wasiƙar ko ofishin hukuma"], answer: 3, why: "Majiyar hukuma ce ke da gaskiya idan AI bai yarda da ita ba." },
          { objective: "O5", q: "Mene ne 211?", options: ["Layi kyauta kuma na sirri da ke haɗa ku da taimakon gida", "Banki", "Manhajar AI", "Lambar zamba"], answer: 0, why: "211 yana haɗa mutane da taimakon gida kan abinci, gidaje da sauransu." },
          { objective: "O6", q: "Wani tes ya ce tallafinku zai tsaya yau sai dai idan kun biya da katin kyauta. Wannan:", options: ["Sanarwa ce ta yau da kullum", "Sabuwar doka ce", "Alamar gargaɗin zamba ce", "Saƙon makaranta ne"], answer: 2, why: "Gaggauta ku da neman katin kyauta alamun zamba ne." },
          { objective: "O6", q: "Wani saƙo ya damu ku. Wace hanya ce mafi aminci ta tabbatar da shi?", options: ["Ku danna hanyar haɗinsa", "Ku mayar da bayananku", "Ku tura shi ga abokai", "Ku je shafin hukuma da kanku ko ku kira lambar da kuka sani"], answer: 3, why: "Tuntuɓar ofishin da kanku yana guje wa hanyoyin haɗi na bogi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Gabatarwa ga AI da Ƙarfafawa a Fasahar Zamani",
    questions: [
      { objective: "O1", q: "A ina za ku iya samun aron laptop ko hotspot, sau da yawa?", options: ["Wasu ɗakunan karatu na jama'a", "Kowane shagon kayan abinci", "Akwatin gidan waya", "Wurin ajiye motoci"], answer: 0, why: "Ɗakunan karatu da yawa suna ba da aron laptop da hotspot." },
      { objective: "O1", q: "Lifeline yana taimakawa da:", options: ["Gyaran mota", "Kuɗin wata-wata na waya ko intanet", "Kuɗin haya", "Kayan abinci"], answer: 1, why: "Lifeline rangwame ne kan kuɗin waya ko intanet." },
      { objective: "O1", q: "A ina ya kamata ku karanta game da Lifeline?", options: ["Tallar kafafen sada zumunta", "Tes daga baƙo", "Shafin hukuma na Lifeline", "Tallar da ke tasowa (pop-up)"], answer: 2, why: "Shafukan hukuma suna da ainihin dokoki da takardar nema." },
      { objective: "O2", q: "Mataimakin AI shi ne:", options: ["Mutum a ɗakin karatu", "Ofishin gwamnati", "Kamfanin waya", "Shirin da kuke hira da shi da kalmominku"], answer: 3, why: "Shirin kwamfuta ne da kuke rubuta masa ko magana da shi." },
      { objective: "O2", q: "Wanne ne abin da mataimakin AI zai iya taimakawa da shi?", options: ["Tsara abinci bisa kasafin kuɗi", "Sa hannu a yarjejeniyar hayarku", "Zuwa ganawarku", "Biyan kuɗaɗenku daga asusunku"], answer: 0, why: "Yana da kyau wajen tsare-tsare, jeri da bayani." },
      { objective: "O2", q: "AI wani lokaci yana kuskure a bayanai. Wannan yana nufin ya kamata ku:", options: ["Kada ku taɓa amfani da shi", "Tabbatar da muhimman bayanai", "Ƙara amincewa da shi", "Biya don wanda ya fi kyau"], answer: 1, why: "Yana da amfani, amma muhimman bayanai suna buƙatar tabbatarwa." },
      { objective: "O3", q: "A kwamfutar ɗakin karatu, ta yaya za ku buɗe Copilot?", options: ["Ku kira ɗakin karatu", "Ku kashe kwamfutar ku sake kunna ta", "Ku rubuta copilot.microsoft.com a burauzar", "Ku aika imel"], answer: 2, why: "Adireshin shafin yana buɗe Copilot a cikin burauzar." },
      { objective: "O3", q: "Tambaya mai kyau ga AI ta haɗa da:", options: ["Kalmar sirrinku", "Kalma ɗaya kawai", "Lambar bankinku", "Abin da kuke buƙata, halin da kuke ciki da yadda kuke son amsar"], answer: 3, why: "Waɗannan sassa uku suna kawo amsa mai amfani." },
      { objective: "O3", q: "A ina za ku saka manhajar AI a waya?", options: ["Shagon manhajoji na hukuma", "Hanyar haɗi a cikin tes daga baƙo", "Tallar da ke tasowa (pop-up)", "Kowane shafin intanet"], answer: 0, why: "Shagon manhajoji na hukuma shi ne wuri mai aminci." },
      { objective: "O4", q: "Mene ne madadi (placeholder)?", options: ["Wani nau'in manhaja", "Abin da ke tsayawa a wuri, kamar [sunana], maimakon bayanai na gaske", "Kalmar sirri", "Shafin intanet"], answer: 1, why: "Yana kiyaye bayanan sirri daga cikin prompt ɗinku." },
      { objective: "O4", q: "Kuna son taimako da wasiƙar makaranta. Wace buƙata ce mai kyau?", options: ["\"wasiƙa\"", "\"Ga cikakken sunan yarona da lambar shaidarsa\"", "\"Ka bayyana wannan da kalmomi masu sauƙi ka jera abin da ya kamata in yi da kafin yaushe.\"", "\"makaranta\""], answer: 2, why: "Tana neman kalmomi masu sauƙi da jerin abubuwan yi, ba tare da bayanan sirri ba." },
      { objective: "O4", q: "AI ya yi amfani da kalma mai wuya da ba ku sani ba. Kuna iya:", options: ["Haƙura", "Yin kamar kun san ta", "Rufe burauzar", "Yin tambayar biyo baya: \"Mene ne ma'anar wannan kalmar?\""], answer: 3, why: "Tambayoyin biyo baya suna bayyana sassan da ke ruɗarwa." },
      { objective: "O5", q: "Wanne ya kamata ku tabbatar da shi koyaushe kafin ku yi aiki da shi?", options: ["Ranar ƙarshe ta tallafi", "Ra'ayin abincin dare", "Barkwanci", "Jerin launuka"], answer: 0, why: "Ranakun ƙarshe, kuɗi da tallafi dole a tabbatar da su da majiyar hukuma." },
      { objective: "O5", q: "Shafukan gwamnatin Amurka yawanci suna ƙarewa da:", options: [".win", ".gov", ".gift", ".shop"], answer: 1, why: "Shafukan hukuma na gwamnatin Amurka suna amfani da .gov." },
      { objective: "O5", q: "Ba ku sami taimakon gida don kuɗin wuta da ruwa ba. Wa za ku kira?", options: ["Lamba a tallar da ke tasowa (pop-up)", "Babu kowa", "211", "Kowace lamba a intanet"], answer: 2, why: "211 yana haɗa ku da taimakon gida kan kuɗaɗe, abinci da gidaje." },
      { objective: "O6", q: "Wanne ne kada ku taɓa rubutawa mataimakin AI?", options: ["\"Ka yi amfani da kalmomi masu sauƙi\"", "\"Ka yi jeri\"", "Ra'ayin abincin dare", "Lambar katin bankinku"], answer: 3, why: "Lambobin banki da kati bayanan sirri ne." },
      { objective: "O6", q: "Wani saƙo yana alƙawarin tallafin gwamnati kyauta idan kun fara biyan kuɗi. Wataƙila wannan:", options: ["Zamba ce", "Shiri ne na yau da kullum", "Sanarwar makaranta ce", "Mayar da harajin kuɗi ne"], answer: 0, why: "Biyan kuɗi don samun kuɗi \"kyauta\" zamba ce da aka saba gani." },
      { objective: "O6", q: "Ofisoshin gaske suna neman a biya su da:", options: ["Katin kyauta", "Ba da katin kyauta ba ko kaɗan", "Katin kyauta a ƙarshen mako kawai", "Kuɗi ta tes"], answer: 1, why: "Biya da katin kyauta alamar zamba ce." },
      { objective: "O6", q: "Wani tes ya ce \"Ku danna nan yanzu ko ku rasa tallafinku.\" Me za ku yi?", options: ["Ku danna da sauri", "Ku mayar da lambar shari'arku", "Kada ku danna; ku je shafin hukuma ko ku kira lambar da kuka sani", "Ku raba shi da maƙwabta"], answer: 2, why: "Ku tuntuɓi ofishin da kanku maimakon amfani da hanyar haɗin saƙon." },
      { objective: "O5", q: "A aikin ƙarshe, bayan AI ya yi jerin abubuwan yinku, kuna:", options: ["Goge wasiƙar", "Saka ta a intanet", "Ƙara bayanan bankinku", "Tabbatar da rana ɗaya ko lambar waya ɗaya da majiyar hukuma"], answer: 3, why: "Tabbatarwa da majiyar hukuma ita ce mataki na ƙarshe." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      3,
      7,
      9,
      10,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "An cire bayanan sirri",
        objective: "O6",
        notYet: "Prompt ɗin yana da suna na gaske, lambar shari'a, lambar asusu ko adireshi.",
        meets: "An bar kowane suna da lamba na sirri, ko an sauya su da madadi.",
        exceeds: "An yi amfani da madadi masu sarari kamar [sunana] don amsar ta ci gaba da ma'ana."
      },
      {
        name: "Buƙata a sarari",
        objective: "O3",
        notYet: "Buƙatar ba ta da sarari, kamar \"taimake ni da wannan\".",
        meets: "Tana faɗin abin da ake buƙata, halin da ake ciki da yadda ake son amsar.",
        exceeds: "Amsar farko ta kusa zama abin da ake buƙata."
      },
      {
        name: "Kalmomi masu sauƙi da jerin abubuwan yi",
        objective: "O4",
        notYet: "Babu bayani da kalmomi masu sauƙi, ko babu jerin abubuwan yi.",
        meets: "An sami bayani da kalmomi masu sauƙi da gajeren jerin abubuwan yi tare da ranaku.",
        exceeds: "An yi tambayar biyo baya don bayyana kalma mai wuya ko wani mataki."
      },
      {
        name: "An tabbatar da bayani",
        objective: "O5",
        notYet: "Ba a tabbatar da wata rana ko lambar waya ba.",
        meets: "An tabbatar da rana ɗaya ko lambar waya ɗaya da wasiƙar ko majiyar hukuma.",
        exceeds: "Mai koyo zai iya faɗin inda ya tabbatar da shi da abin da ya samu."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka ce sun yi amfani da mataimakin AI lafiya don wasiƙa, fom ko saƙo cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka nemi Lifeline ko suka fara amfani da kwamfutar ɗakin karatu ko hotspot",
      "Masu koyo da suka fara wani kwas na Koach Learn cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Wayar zamani mai intanet, ko kwamfutar ɗakin karatu ko ta cibiyar al'umma",
      "Mataimakin AI kyauta: Microsoft Copilot, ChatGPT ko Google Gemini",
      "Wasiƙa ta gaske da aka rufe bayanan sirrinta, ko samfurin wasiƙa daga shafin intanet na makaranta",
      "Takarda da alƙalami don rubutu da jerin abubuwan yi",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku fara da faɗin cewa fasaha ta kowa ce, kuma neman taimako abu ne na yau da kullum.",
      "Ku kawo samfuran wasiƙu don kada kowa ya zama dole ya raba wasiƙunsa.",
      "Ku duba kowane prompt kafin a aika; babu sunaye, lambobin shari'a ko lambobin asusu na gaske.",
      "Ku shirya bayanan 211 da Lifeline, kuma ku tabbata masu koyo sun fita daga asusunsu a kwamfutocin da ake rabawa.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
