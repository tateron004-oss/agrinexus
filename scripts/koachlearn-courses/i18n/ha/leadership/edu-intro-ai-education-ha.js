"use strict";

// Koach Learn course, Hausa (ha) translation of leadership/edu-intro-ai-education.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "edu-intro-ai-education-ha",
  lang: "ha",
  translationOf: "edu-intro-ai-education",
  category: "Leadership Development",
  name: "AI ga Shugabannin Makaranta da na Ilimi 1: Gabatarwa ga AI a Ilimi",
  skills: "Bayyana AI ga ma'aikata da iyalai, Gane amfani mai kyau da mara kyau a makaranta, Sanin ƙa'idojin sirrin ɗalibai (FERPA, COPPA), Karanta jagorancin gwamnatin tarayya kan AI, Jagorantar tattaunawa da ma'aikata",
  outcome: "bayyana wa ma'aikatanku mene ne AI da yadda ya riga ya shigo makaranta, ambaci amfaninsa masu kyau da haɗarinsa, faɗin ƙa'idojin sirrin ɗalibai a ƙarƙashin FERPA da COPPA, da jagorantar tattaunawar minti 15 da ma'aikata ta amfani da takarda mai shafi ɗaya mai suna \"AI a makarantarmu\".",
  about: [
    "Wannan kwas ɗin na shugabannin makaranta ne (principal), mataimakansu, malamai masu jagoranci, masu horar da malamai da shugabannin gundumar makarantu (district). Ba sai kuna da ilimin fasaha ba. Malamanku da ɗalibanku sun riga sun fara amfani da AI; wannan kwas ɗin yana taimaka muku ku jagoranci wannan amfani, maimakon ku riƙa mayar da martani kawai.",
    "Babi na 1 yana bayanin mene ne AI, inda yake a makarantarku tuni, da inda yake taimakon koyo da inda yake cutar da shi. Babi na 2 yana bayanin abin da dole shugabanni su fara sani: sirrin ɗalibai a ƙarƙashin FERPA da COPPA, abin da Ma'aikatar Ilimi ta Amurka ta faɗa game da AI, da yadda ake buɗe tattaunawa da ma'aikatanku.",
    "Wannan kwas ɗin yana bayanin doka da kalmomi masu sauƙi don ku san abin da za ku tambaya; ba shawarar lauya ba ne. Lauyan gundumarku da jami'in sirri (privacy officer) su ne ke da kalma ta ƙarshe. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin. Wannan shi ne kwas na 1 cikin 8 a jerin AI ga Shugabannin Makaranta da na Ilimi."
  ],
  finalTask: "Ku rubuta takarda mai shafi ɗaya mai suna \"AI a makarantarmu\" don ma'aikata: mene ne AI a jimloli biyu, hanyoyi uku da zai iya taimakon malamai, haɗari uku ga ɗalibai, ƙa'idar sirri (\"kada a saka sunayen ɗalibai, makinsu ko wani bayani da ke nuna ko wane ne ɗalibi a kayan AI da gundumar ba ta amince da su ba\"), da wanda za a tambaya. Ku yi amfani da ita don jagorantar tattaunawar minti 15 da ma'aikata, sannan ku rubuta manyan tambayoyi uku da ma'aikata suka yi.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Shugabannin makaranta (principal), mataimakansu, malamai masu jagoranci, masu horar da malamai da shugabannin gundumar makarantu a makarantun Amurka. Ba a buƙatar ilimin fasaha.",
    startingPoint: "Sun san cewa malamai da ɗalibai suna amfani da AI, kuma wataƙila sun gwada chatbot (shirin hira na AI). Har yanzu ba za su iya bayyana AI a sarari ga ma'aikata ba, ko su nuna inda ake amfani da shi a makarantarsu, ko su faɗi ƙa'idojin sirrin ɗalibai da suka shafi kayan AI ba.",
    gap: "AI ya riga ya shiga ajujuwa, sau da yawa ba tare da jagora ba. Shugabanni suna buƙatar bayyana shi a sauƙaƙe, ganin inda ake amfani da shi, yanke hukunci kan amfani mai taimako da mai cutarwa, da sanin ƙa'idojin FERPA da COPPA, don su jagoranci amfani da AI maimakon mayar da martani, kuma su kare sirrin ɗalibai.",
    constraints: [
      "Kalmomi masu sauƙi ga shugabannin makaranta da ba masana fasaha ba; kwas ɗin yana bayanin doka amma ba shawarar lauya ba ne",
      "Lauyan gunduma da jami'in sirri su ne ke da kalma ta ƙarshe kan nauyin kiyaye sirri",
      "Kada a saka sunayen ɗalibai, makinsu ko wani bayani da ke nuna ko wane ne ɗalibi a kayan AI da ba a amince da su ba, har a lokacin atisaye",
      "Jagorancin gwamnatin tarayya da na jiha yana canjawa, don haka shugabanni suna duba sabon bugu da kansu",
      "Lokaci: gajerun darussa da suka dace da ranar makaranta, da tattaunawar minti 15 da ma'aikata"
    ],
    prerequisites: "Babu. Wannan shi ne kwas na 1 cikin 8 a jerin AI ga Shugabannin Makaranta da na Ilimi."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan ma'aikaci, mahaifi ko ɗalibi ya tambayi mene ne AI", action: "bayyana AI da generative AI da kalmomi masu sauƙi, har da dalilin da yasa yake iya yin kuskure", standard: "a jimloli biyu da sabon malami, mahaifi da ɗalibin aji biyar za su fahimta" },
    { id: "O2", condition: "Tare da mai kula da fasahar makarantarku ko malamai biyu", action: "zana taswirar wuraren da AI ya riga ya bayyana a makarantarku", standard: "kuna jera aƙalla wurare shida, kowanne da alamar an amince da shi ko ba a amince ba, da ko yana taɓa bayanan ɗalibai" },
    { id: "O3", condition: "Idan aka ba ku amfanin AI da aka gani a makarantu", action: "raba kowane amfani zuwa mai taimako, mai buƙatar hankali ko mai cutarwa", standard: "da dalili ɗaya ga kowanne, ta amfani da gwajin iyali" },
    { id: "O4", condition: "Idan ma'aikata suna amfani da kayan AI", action: "faɗin ƙa'idojin FERPA da COPPA da sake rubuta buƙata ta yadda ba ta da bayanin ɗalibi", standard: "kuna faɗin lokacin da za a tambayi jami'in sirri ko lauya" },
    { id: "O5", condition: "Idan aka ba ku jagorancin gwamnatin tarayya da na jiha kan AI a makarantu", action: "taƙaita ƙa'ida ɗaya ta gwamnatin tarayya da nemo sabon jagorancin jiharku", standard: "kuna rubuta ranarsa da abu ɗaya da ya faɗa, ko cewa babu shi tukuna" },
    { id: "O6", condition: "Tare da ma'aikatanku", action: "jagorantar tattaunawar minti 15 kan AI ta amfani da takarda mai shafi ɗaya mai suna \"AI a makarantarmu\"", standard: "da dukkan sassan takardar a ciki, kuma an rubuta manyan tambayoyi uku na ma'aikata" }
  ],
  chapters: [
    {
      name: "Babi na 1: AI a makarantun yau",
      lessons: [
        {
          objectives: ["O1"],
          title: "Mene ne AI, da kalmomin da ma'aikatanku za su yi amfani da su",
          minutes: 5,
          goal: "Bayyana AI da generative AI ga ma'aikata da kalmomi masu sauƙi.",
          text: [
            "Artificial intelligence (AI, basirar na'ura) shiri ne na kwamfuta da ke yin ayyukan da yawanci sai da tunanin mutum, kamar gane magana, gano tsari ko rubutu. Generative AI yana ƙirƙirar sabon abu: rubutu, hotuna, sauti da code (umarnin kwamfuta). Kayan hira kamar ChatGPT, Microsoft Copilot, Google Gemini da Claude an gina su a kan large language models (LLM, manyan samfuran harshe) da ke hasashen kalmomin da za su biyo baya.",
            "Domin suna hasashen kalmomi, waɗannan kayan suna rubutu cikin sauƙi, amma har yanzu suna iya yin kuskure, bayaninsu ya tsufa, ko su nuna son kai. Ba su san ɗalibanku, manhajar karatunku ko al'ummarku ba sai wani ya faɗa musu, kuma kada a faɗa musu bayanan sirri na ɗalibai.",
            "Hanya mai sauƙi ta faɗa wa ma'aikata: \"AI abokin aiki ne mai saurin rubuta daftarin farko. Ba ya maye gurbin hukuncin malami, kuma ba shi ne kalma ta ƙarshe game da kowane ɗalibi ba.\""
          ],
          words: [["Generative AI", "AI da ke ƙirƙirar sabon rubutu, hotuna, sauti ko code."], ["LLM", "large language model (babban samfurin harshe): AI da ke bayan mataimakan hira."], ["Hallucination (hasashen ƙarya)", "lokacin da AI ya rubuta abin da yake kama da gaskiya amma ƙirƙirarre ne."]],
          slides: [
            { title: "AI a jimloli biyu", bullets: ["Shirin kwamfuta da ke yin ayyukan da ke buƙatar tunani", "Generative AI yana ƙirƙirar rubutu, hotuna, code"] },
            { title: "Rubutu mai kyau ba yana nufin daidai ba", bullets: ["Yana iya yin kuskure, tsufa ko nuna son kai", "Bai san ɗalibanku ko manhajar karatunku ba"] },
            { title: "Ku faɗa wa ma'aikata", bullets: ["Abokin aiki mai saurin rubuta daftarin farko", "Ba ya maye gurbin hukuncin malami", "Ba shi ne kalma ta ƙarshe game da ɗalibi ba"] }
          ],
          tryIt: "Ku rubuta bayanin AI a jimloli biyu da sabon malami, mahaifi da ɗalibin aji biyar za su iya fahimta. Ku gwada shi a kan abokin aiki ɗaya.",
          youCanNow: "bayyana AI da generative AI da kalmomi masu sauƙi ga ma'aikata da iyalai.",
          quickCheck: [
            { objective: "O1", q: "Mene ne generative AI?", options: ["AI da ke ƙirƙirar sabon rubutu, hotuna ko code", "Shirin da ke duba jarabawa da kansa", "Injin bincike na bayanan makaranta", "Shirin da ba ya taɓa yin kuskure"], answer: 0, why: "Generative AI yana ƙirƙirar sabon abu, shi yasa kuma yake iya yin kuskure." },
            { objective: "O1", q: "Wani mahaifi ya tambayi dalilin da yasa chatbot ya ba ɗansa bayani marar gaskiya. Me za ku bayyana?", options: ["Lallai yaron ne ya rubuta ba daidai ba", "AI yana hasashen kalmomi kuma yana iya yin kuskure, don haka dole a duba amsoshinsa", "Kayan ya lalace a ranar", "Kayan AI na kuɗi ne kawai suke daidai"], answer: 1, why: "AI yana hasashen rubutu maimakon duba gaskiya, don haka yana iya yin kama da daidai amma ya yi kuskure." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Inda AI ya riga ya bayyana a makarantarku",
          minutes: 5,
          goal: "Zana taswirar inda ake amfani da AI a makarantarku, a hukumance da ba a hukumance ba.",
          text: [
            "AI ya riga ya shiga makarantarku. Malamai suna iya amfani da kayan hira don rubuta daftarin darussa ko imel ga iyaye. Ɗalibai suna iya amfani da su don aikin gida, wani lokaci yadda ya dace, wani lokaci ba haka ba. Kayayyaki da yawa da gundumarku ke biyan kuɗinsu (dandalin koyo, kayan rubutu, shirye-shiryen karatu, shirye-shiryen ofis) sun ƙara fasalolin AI, wani lokaci a kunne tun farko.",
            "Akwai kuma AI a ɓoye: shirye-shiryen atisaye masu daidaitawa (adaptive) da ke zaɓar tambaya ta gaba, allunan gargaɗi na farko (dashboard), kayan gano satar rubutu da rubutun AI, da kayan tsaro ko sa ido.",
            "Shugabanni ba za su iya jagorantar abin da ba sa gani ba. Taswira mai sauri, da aka yi tare da mai kula da fasaha da wasu malamai, tana nuna kayan da aka amince da su, waɗanda ake amfani da su duk da haka, da waɗanda ke taɓa bayanan ɗalibai. Wannan taswirar ita ce farkon kowane shawara da za a yanke daga baya."
          ],
          steps: ["Ku tambayi malamai, ɗalibai da mai kula da fasaha kayan AI da suke amfani da su.", "Ku jera fasalolin AI da ke cikin kayayyakin da kuke da su tuni.", "Ku yi wa kowanne alama: an amince ko ba a amince ba, da ko yana taɓa bayanan ɗalibai.", "Ku rubuta inda ɗalibai ke haɗuwa da AI ba tare da sun sani ba."],
          words: [["Shiri mai daidaitawa (adaptive program)", "shirin kwamfuta da ke canja tambaya ko aiki na gaba bisa amsoshin ɗalibi."], ["Mai gano rubutun AI (AI-writing detector)", "kayan da ke cewa zai iya gane ko AI ne ya rubuta wani rubutu; sau da yawa ba a iya dogara da shi."]],
          slides: [
            { title: "AI ya riga ya iso", bullets: ["Malamai suna rubuta daftarin darussa da imel", "Ɗalibai suna amfani da kayan hira", "An ƙara fasalolin AI a kayan da kuke da su"] },
            { title: "A ɓoye", bullets: ["Shirye-shiryen atisaye masu daidaitawa", "Allunan gargaɗi na farko (dashboard)", "Kayan gano rubutu da na sa ido"] },
            { title: "Ku zana taswira", bullets: ["An amince da shi ko a'a?", "Yana taɓa bayanan ɗalibai?", "Inda ɗalibai ke haɗuwa da AI ba tare da sani ba"] }
          ],
          tryIt: "Tare da mai kula da fasaha ko malamai biyu, ku jera aƙalla wurare shida da AI ke bayyana a makarantarku. Ku yi wa kowanne alama: an amince ko ba a amince ba, da ko yana taɓa bayanan ɗalibai.",
          youCanNow: "zana taswirar inda ake amfani da AI a makarantarku tuni, da waɗanne amfani ke taɓa bayanan ɗalibai.",
          quickCheck: [
            { objective: "O2", q: "Mene ne shirin koyo mai daidaitawa (adaptive)?", options: ["Shirin da malamai ke canjawa da hannu kowace rana", "Shirin da ke aiki ba tare da intanet ba", "Shirin da ke canja aiki na gaba bisa amsoshin ɗalibi", "Shirin da manya kaɗai ke amfani da shi"], answer: 2, why: "Shirye-shirye masu daidaitawa suna amfani da amsoshin ɗalibi don zaɓar abin da zai biyo baya." },
            { objective: "O2", q: "Kun gano cewa wani kayan da makarantarku ke da shi tuni yana da sabon fasalin AI a kunne. Me za ku yi?", options: ["Ku ƙyale shi, tun da an riga an amince da kayan", "Ku hana kayan gaba ɗaya nan take", "Ku ce malamai su daina amfani da kwamfuta", "Ku ƙara shi a taswirar AI ku duba ko yana taɓa bayanan ɗalibai"], answer: 3, why: "Fasalolin AI suna iya bayyana a kayan da kuke da su, don haka suna cikin taswirar." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Inda AI ke taimakon koyo, da inda yake cutarwa",
          minutes: 5,
          goal: "Raba amfanin AI a makaranta zuwa mai taimako, mai buƙatar hankali da mai cutarwa.",
          text: [
            "Amfani mai taimako yawanci yana rage wa malami lokaci ko yana buɗe hanya ga kowa: rubuta daftarin kayan darasi, ƙirƙirar tambayoyin atisaye a matakan karatu daban-daban, fassara wasiƙun iyali don ƙwararren mutum ya duba, da ba ɗalibai mai bayani mai haƙuri kamar malami mai zaman kansa, ƙarƙashin jagorancin malami.",
            "Amfani mai buƙatar hankali yana buƙatar ƙa'idoji a sarari: ɗalibai suna amfani da AI a aikin aji (yana iya maye gurbin tunanin da aikin ya kamata ya gina), ra'ayin AI kan aikin ɗalibai (yana iya zama na gama-gari ko ba daidai ba), da kayan gano rubutun AI (suna iya zargin ɗalibai ba bisa gaskiya ba, har da masu koyon Turanci).",
            "Amfani mai cutarwa: saka bayanan sirri na ɗalibai a kayan da ba a amince da su ba, barin AI ya yanke shawara kan maki, sanya ɗalibi a aji, horo ko ilimi na musamman (special education), da amfani da AI ta hanyoyin da ba a sanar da iyalai ba. Gwaji ga ma'aikata: \"Zan ji daɗin bayyana wannan amfani ga iyalin ɗalibin?\""
          ],
          words: [["Samun dama (access)", "ko kowane ɗalibi zai iya shiga ya amfana, har da ɗalibai masu nakasa da masu koyon Turanci."], ["Zargi marar gaskiya", "cewa ɗalibi ya yi satar amsa alhali bai yi ba, misali domin mai gano rubutu ya nuna aikinsa."]],
          slides: [
            { title: "Mai taimako", bullets: ["Rubuta daftarin kayan darasi da atisaye", "Matakan karatu daban-daban", "Daftarin fassara da mutum ke dubawa"] },
            { title: "Mai buƙatar hankali", bullets: ["Amfanin ɗalibai a aikin aji", "Ra'ayin AI kan aikin ɗalibai", "Kayan gano rubutun AI suna iya zargi ba daidai ba"] },
            { title: "Mai cutarwa", bullets: ["Bayanan ɗalibai a kayan da ba a amince da su ba", "AI yana yanke maki, aji, horo", "Amfanin da ba a sanar da iyalai ba"] },
            { title: "Gwajin iyali", bullets: ["Zan bayyana wannan amfani ga iyalin?"] }
          ],
          tryIt: "Ku jera amfanin AI guda takwas da kuka gani ko kuka ji a makarantu. Ku yi wa kowanne alama MAI TAIMAKO, MAI BUƘATAR HANKALI ko MAI CUTARWA, ku rubuta dalili ɗaya.",
          youCanNow: "yanke hukunci kan waɗanne amfanin AI a makaranta ke taimakon koyo da waɗanda ke jefa ɗalibai cikin haɗari.",
          quickCheck: [
            { objective: "O3", q: "Me gwajin iyali yake tambaya?", options: ["Zan bayyana wannan amfani na AI ga iyalin ɗalibin?", "Iyalin yana da kwamfuta?", "Iyalin ne ya biya kuɗin kayan?", "Iyalin zai yi amfani da AI a gida?"], answer: 0, why: "Idan ba za ku bayyana shi ga iyali ba, amfanin yana buƙatar a sake duba shi." },
            { objective: "O3", q: "Wani malami yana son amfani da mai gano AI don yanke ko an yi satar amsa a rubutun ɗalibai. Wace alama za ku ba shi?", options: ["MAI TAIMAKO: yana rage lokaci", "MAI CUTARWA: kada a taɓa amfani da AI", "MAI BUƘATAR HANKALI: masu gano rubutu suna iya zargin ɗalibai ba daidai ba, don haka ba su kaɗai ne shaida ba", "Ba abin tattaunawa ba ne"], answer: 2, why: "Masu gano rubutu suna iya zargin ɗalibai ba daidai ba, har da masu koyon Turanci." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: AI a makarantun yau",
        questions: [
          { objective: "O1", q: "Wane ne mafi kyawun bayani mai sauƙi na generative AI ga ma'aikata?", options: ["Kyamarar tsaron makaranta", "Sabon tsarin ba da maki", "AI da ke ƙirƙirar sabon rubutu, hotuna ko code", "Manhajar ɗaukar halarta"], answer: 2, why: "Generative AI yana ƙirƙirar sabon abu." },
          { objective: "O1", q: "Wani malami ya ce, \"AI ne ya rubuta, don haka lallai daidai ne.\" Mene ne amsa mafi kyau?", options: ["AI yana hasashen kalmomi kuma yana iya yin kuskure; ku duba shi", "Ku yarda", "Sai idan yana da tsawo", "Sai idan yana amfani da manyan kalmomi"], answer: 0, why: "Rubutu mai kyau yana iya zama ba daidai ba." },
          { objective: "O2", q: "Me yasa za a fara zana taswirar amfani da AI a makarantarku?", options: ["Don a hana komai", "Kamfanonin kayan suna buƙata", "Yana da daɗi", "Shugabanni ba za su iya jagorantar abin da ba sa gani ba"], answer: 3, why: "Taswirar tana nuna amfanin da aka amince da shi, amfanin ɓoye da haɗarin bayanan ɗalibai." },
          { objective: "O3", q: "Me yasa kayan gano rubutun AI amfani ne MAI BUƘATAR HANKALI?", options: ["Koyaushe suna daidai", "Suna iya zargin ɗalibai ba daidai ba, har da masu koyon Turanci", "Kyauta ne", "Suna rubuta makala"], answer: 1, why: "Zargin ƙarya yana iya cutar da ɗalibai." },
          { objective: "O3", q: "Wane amfani ne MAI CUTARWA?", options: ["Rubuta daftarin tambayoyin atisaye", "Shirya rubutun karatu a matakai uku", "Rubuta daftarin jaridar makaranta", "Barin AI ya yanke shawarar sanya ɗalibi a ilimi na musamman"], answer: 3, why: "Shawarwari game da ɗalibai suna hannun ƙwararrun mutane." }
        ]
      }
    },
    {
      name: "Babi na 2: Abin da dole shugabanni su fara sani",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ƙa'idojin sirrin ɗalibai: FERPA da COPPA",
          minutes: 6,
          goal: "Faɗin ƙa'idojin FERPA da COPPA da suka shafi amfanin ma'aikata da kayan AI.",
          text: [
            "FERPA, wato Family Educational Rights and Privacy Act (dokar haƙƙin ilimi da sirrin iyali), tana kare sirrin bayanan karatun ɗalibai: bayanan da suka shafi ɗalibi kai tsaye kuma makaranta ke ajiye su. Iyaye suna da haƙƙin dubawa da nazarin waɗannan bayanai da neman gyara; haƙƙoƙin suna komawa ga ɗalibin idan ya cika shekara 18 ko ya shiga kwaleji. Yawanci makarantu suna buƙatar izini kafin su bayyana bayanin da ke nuna ko wane ne ɗalibi (PII), sai dai a wasu yanayi kamar bayanan kundin suna (directory information, bayan sanarwa da damar ƙin yarda) da jami'an makaranta masu halaltacciyar buƙatar ilimi. Kamfanin waje zai iya zama jami'in makaranta ne kawai idan yana yi wa makaranta hidima, yana ƙarƙashin ikon makarantar kai tsaye, kuma yana bin iyakoki kan sake raba bayanai.",
            "COPPA, wato Children's Online Privacy Protection Act (dokar kare sirrin yara a intanet), wadda Federal Trade Commission (FTC, hukumar kasuwanci ta tarayya) ke aiwatarwa, tana kare yara 'yan ƙasa da shekara 13 a intanet. FTC ta ce makaranta za ta iya ba da izini a madadin iyaye ne kawai idan hidimar tana tattara bayanai don amfani da amfanar makarantar, ba don wata manufar kasuwanci ba. FTC ta gyara dokar COPPA a ranar 22 ga Afrilu, 2025.",
            "Abin da wannan ke nufi a aikace: malamin da ya liƙa sunayen ɗalibai, makinsu, bayanan IEP (shirin ilimi na musamman na ɗalibi) ko wani bayani da ke nuna ko wane ne ɗalibi a kayan AI kyauta da gundumar ba ta amince da shi ba, yana iya bayyana bayanan karatu ga kamfanin da ba shi da yarjejeniya. Ƙa'idar shugaba: kayan da gunduma ta amince da su kaɗai don duk abin da ya shafi ɗalibai, kuma a cire bayanan da ke nuna ɗalibi duk da haka. Don sanin ainihin nauyinku, ku tambayi jami'in sirri ko lauyan gundumarku; dokokin sirrin ɗalibai na jiha suna iya ƙara wasu."
          ],
          words: [["FERPA", "dokar tarayya da ke kare sirrin bayanan karatun ɗalibai."], ["COPPA", "dokar tarayya da ke kare sirrin yara 'yan ƙasa da shekara 13 a intanet."], ["Bayanin da ke nuna ko wane ne ɗalibi (PII)", "personally identifiable information: bayanin da ke nuna ɗalibi, kamar suna, lambar shaida ko haɗin wasu bayanai."], ["Bayanan kundin suna (directory information)", "bayanai na asali kamar suna da lokutan halartar makaranta da makaranta za ta iya rabawa bayan sanarwa da damar ƙin yarda."]],
          slides: [
            { title: "FERPA a taƙaice", bullets: ["Tana kare bayanan karatun ɗalibai", "Iyaye za su iya dubawa su nemi gyara", "Haƙƙoƙi suna komawa ga ɗalibi a shekara 18 ko kwaleji"] },
            { title: "FERPA da kamfanonin waje", bullets: ["Yawanci ana buƙatar izini kafin raba PII", "Kamfani a matsayin jami'in makaranta: hidimar makaranta, ikon kai tsaye", "Da iyakoki kan sake raba bayanai"] },
            { title: "COPPA a taƙaice", bullets: ["Yara 'yan ƙasa da shekara 13 a intanet; FTC ke aiwatarwa", "Izinin makaranta don amfanin makaranta kaɗai, ba wata kasuwanci ba", "An gyara dokar a 22 ga Afrilu, 2025"] },
            { title: "Ƙa'idar shugaba", bullets: ["Kayan da gunduma ta amince da su kaɗai don al'amuran ɗalibai", "A cire bayanan da ke nuna ɗalibi duk da haka", "Ku tambayi jami'in sirri; dokokin jiha suna iya ƙara wasu"] }
          ],
          sources: [{ name: "FERPA: Protecting Student Privacy (US Department of Education)", url: "https://studentprivacy.ed.gov/ferpa" }, { name: "FTC: Complying with COPPA, Frequently Asked Questions", url: "https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions" }, { name: "FTC: Children's Privacy", url: "https://www.ftc.gov/business-guidance/privacy-security/childrens-privacy" }],
          tryIt: "Ku rubuta misalai uku na abin da malami KADA ya liƙa a kayan AI da ba a amince da shi ba, sannan ku sake rubuta ɗaya daga cikinsu ta yadda zai nemi taimako iri ɗaya ba tare da wani bayanin ɗalibi ba.",
          youCanNow: "faɗin ƙa'idojin FERPA da COPPA da suka shafi amfanin ma'aikata da AI, da ƙa'idar da ta biyo bayansu.",
          quickCheck: [
            { objective: "O4", q: "Me COPPA ke karewa?", options: ["Asusun imel na malamai", "Sirrin yara 'yan ƙasa da shekara 13 a intanet", "Gine-ginen makaranta", "Bayanan wasannin ɗalibai kaɗai"], answer: 1, why: "COPPA tana kare sirrin yara 'yan ƙasa da shekara 13 a intanet." },
            { objective: "O4", q: "Wani malami yana son taimakon AI wajen rubuta ra'ayi ga wani ɗalibi mai suna da maki mara kyau. Me za ku ba da shawara?", options: ["Ya liƙa suna da makin a kowane kayan kyauta", "Ya yi amfani da baƙaƙen farkon sunan ɗalibin, wanda koyaushe yana da lafiya", "Ya ƙyale ra'ayin ga wannan ɗalibin", "Ya nemi taimako kan ra'ayin ba tare da sunan ɗalibi ko maki ba, ko ya yi amfani da kayan da gunduma ta amince da shi"], answer: 3, why: "Cire bayanin ɗalibi, ko amfani da kayan da aka amince da shi, yana kare bayanan karatu." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Abin da jagorancin gwamnatin tarayya ya ce game da AI a makarantu",
          minutes: 5,
          goal: "Taƙaita jagorancin gwamnatin tarayya kan AI da nemo sabon bugunsa da kanku.",
          text: [
            "A ranar 22 ga Yuli, 2025, Ma'aikatar Ilimi ta Amurka ta aika Dear Colleague Letter (wasiƙar jagora) kan AI. Kamar yadda K-12 Dive (jaridar labaran ilimi) ta ruwaito, wasiƙar ta ce kuɗin tallafin gwamnatin tarayya da ake da su za su iya tallafa wa AI da ake amfani da shi don kayan manhajar karatu masu inganci, koyarwa ta musamman mai tasiri sosai (high-impact tutoring), da shawarwari kan hanyoyin kwaleji da sana'a. Kuma ta fitar da ƙa'idoji: ayyukan AI su kasance malamai ne ke jagoranta, bisa ɗa'a, masu sauƙin amfani ga ɗalibai masu nakasa, a bayyane game da yadda ake ƙaddamar da sababbin kayan, kuma suna bin dokokin sirrin bayanai na tarayya.",
            "Jagoranci yana canjawa. Ku karanta wasiƙar da kanta da duk wani sabon jagoranci a ed.gov, ku kuma duba abin da hukumar ilimi ta jiharku ta wallafa; jihohi da yawa suna da nasu jagorancin AI ga makarantu. Shafin Student Privacy Policy Office (ofishin manufofin sirrin ɗalibai) na Ma'aikatar, studentprivacy.ed.gov, yana da kayan bayani kan hidimomin ilimi na intanet, har da jerin dubawa mai suna Model Terms of Service (samfurin sharuɗɗan hidima).",
            "Ga shugabanni, waɗannan ƙa'idoji gwaji ne mai amfani ga kowane shirin AI: Malamai ne ke jagoranta? Kowa zai iya amfani da shi? Mun faɗa wa iyalai yadda yake aiki? Yana kare bayanan ɗalibai?"
          ],
          steps: ["Ku karanta wasiƙar AI ta Ma'aikatar Ilimi a ed.gov.", "Ku duba hukumar ilimi ta jiharku don jagorancin AI.", "Ku duba kayan bayani na studentprivacy.ed.gov kan hidimomin ilimi na intanet.", "Ku gwada shirye-shiryenku da ƙa'idojin: malamai ne ke jagoranta, bisa ɗa'a, kowa zai iya amfani, a bayyane, yana bin dokokin sirri."],
          words: [["Dear Colleague Letter", "wasiƙar jagora daga hukumar tarayya zuwa makarantu da jihohi; jagora ce, ba sabuwar doka ba."], ["Hukumar ilimi ta jiha (state education agency)", "ma'aikatar ilimi ta jiharku."]],
          slides: [
            { title: "Wasiƙar AI ta tarayya, 22 ga Yuli, 2025", bullets: ["Kuɗin tallafi za su iya tallafa wa AI don kayan manhajar karatu", "Koyarwa ta musamman mai tasiri sosai", "Shawarwari kan hanyoyin kwaleji da sana'a"] },
            { title: "Ƙa'idojinta", bullets: ["Malamai ne ke jagoranta, bisa ɗa'a", "Mai sauƙin amfani ga ɗalibai masu nakasa", "A bayyane; yana bin dokokin sirri"] },
            { title: "Ku nemo sabon bugu", bullets: ["ed.gov don wasiƙar da sabon jagoranci", "Hukumar ilimi ta jiharku", "studentprivacy.ed.gov don kayan bayani kan kamfanoni"] }
          ],
          sources: [{ name: "K-12 Dive: Education Department issues AI priorities (July 2025)", url: "https://www.k12dive.com/news/education-department-issues-ai-priorities-but-what-if-the-agency-closes/754015/" }, { name: "Privacy and Education Technology (Student Privacy Policy Office)", url: "https://studentprivacy.ed.gov/privacy-and-education-technology" }],
          tryIt: "Ku nemo shafin hukumar ilimi ta jiharku kan AI (ku bincika shafinta da kalmar \"artificial intelligence\"). Ku rubuta ranar sabon jagorancinta da abu ɗaya da ya faɗa, ko ku rubuta cewa babu shi tukuna.",
          youCanNow: "taƙaita jagorancin gwamnatin tarayya kan AI ga makarantu, da nemo sabon bugu na tarayya da na jiha.",
          quickCheck: [
            { objective: "O5", q: "A ina za ku nemi jagorancin AI na jiharku ga makarantu?", options: ["Shafin intanet na hukumar ilimi ta jiharku", "Wani rubutu a kafofin sada zumunta", "Amsar kayan AI da kansa", "Shafin tallace-tallace na kamfani"], answer: 0, why: "Hukumar ilimi ta jiha ita ce majiyar hukuma ta jagorancin jiha." },
            { objective: "O5", q: "Wani abokin aiki ya faɗi jagorancin AI na tarayya daga ƙwaƙwalwa. Me za ku yi kafin ku raba shi da ma'aikata?", options: ["Ku raba shi, tun da yana kama da daidai", "Ku nemo sabon takardar hukuma ku duba ranarta da kalmominta", "Ku tambayi chatbot na AI ya tabbatar", "Ku jira wani abokin aiki ya yarda"], answer: 1, why: "Jagoranci yana canjawa, don haka shugabanni suna duba sabon bugun hukuma da kansu." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Buɗe tattaunawa kan AI da ma'aikatanku",
          minutes: 6,
          goal: "Jagorantar tattaunawar minti 15 da ma'aikata kan AI ta amfani da takarda mai shafi ɗaya.",
          text: [
            "Ma'aikata suna jin abubuwa da yawa game da AI: farin ciki, damuwa game da satar amsa, tsoron a maye gurbinsu, ko kawai suna da aiki da yawa da ba su da lokacin damuwa. Ku buɗe da sauraro, ba da ƙa'ida ba. Ku tambaya: \"A ina kuka ga AI a wannan shekara, a ajinku ko a rayuwarku?\"",
            "Sannan ku raba takarda mai shafi ɗaya: mene ne AI a jimloli biyu, hanyoyi uku da zai iya taimakon malamai, haɗari uku ga ɗalibai, ƙa'idar sirri, da wanda za a tambaya. Ku bar ta a shafi ɗaya; za ku iya ƙara bayani daga baya.",
            "Ku rufe ta hanyar faɗin mataki ɗaya na gaba (misali, gajeren binciken kayan da ma'aikata ke amfani da su, ko ƙungiyar malamai masu sa kai don gwada kayan da aka amince da shi) ku kuma tattara manyan tambayoyi. Waɗannan tambayoyi suna nuna muku abin da za ku koyar a gaba."
          ],
          steps: ["Ku buɗe da tambayar sauraro.", "Ku raba takarda mai shafi ɗaya.", "Ku tattauna misali ɗaya mai taimako da ɗaya mai haɗari.", "Ku faɗi mataki ɗaya na gaba.", "Ku tattara manyan tambayoyi uku."],
          words: [["Takardar bayani (handout)", "gajeren shafi da aka buga ko aka raba wanda mutane ke ajiyewa."], ["Mataki na gaba", "aiki ɗaya a sarari da ƙungiyar ta yarda ta yi."]],
          slides: [
            { title: "Ku buɗe da sauraro", bullets: ["\"A ina kuka ga AI a wannan shekara?\"", "Farin ciki, damuwa da gajiya duk na al'ada ne"] },
            { title: "Takarda mai shafi ɗaya", bullets: ["AI a jimloli biyu", "Taimako uku, haɗari uku", "Ƙa'idar sirri da wanda za a tambaya"] },
            { title: "Ku rufe da kyau", bullets: ["Mataki ɗaya na gaba", "Ku tattara manyan tambayoyi uku"] }
          ],
          tryIt: "Aikin ƙarshe: ku rubuta takardarku mai shafi ɗaya mai suna \"AI a makarantarmu\" (ma'ana a jimloli biyu, taimako uku, haɗari uku, ƙa'idar sirri, wanda za a tambaya). Ku jagoranci tattaunawar minti 15 da ma'aikata da ita, ku rubuta manyan tambayoyi uku da ma'aikata suka yi.",
          youCanNow: "buɗewa da jagorantar tattaunawar makarantarku kan AI da wurin farawa a sarari da kowa ya sani.",
          quickCheck: [
            { objective: "O6", q: "Wace hanya ce mai kyau ta buɗe tattaunawa da ma'aikata kan AI?", options: ["Sanar da jerin abubuwan da aka hana", "Nuna dogon jerin slides kan yadda AI ke aiki", "Yin tambayar sauraro game da inda ma'aikata suka ga AI", "Farawa da jarabawa"], answer: 2, why: "Farawa da sauraro yana nuna wa ma'aikata cewa abin da suka gani yana da muhimmanci." },
            { objective: "O6", q: "A ƙarshen tattaunawarku ta minti 15, ma'aikata har yanzu suna da tambayoyi da yawa. Me za ku yi?", options: ["Ku amsa kowace ɗaya, ko da ta kai awa ɗaya", "Ku ce su bincika a intanet", "Ku gama ba tare da mataki na gaba ba", "Ku rubuta manyan tambayoyi uku ku ba da mataki ɗaya na gaba"], answer: 3, why: "Mataki na gaba a sarari da tambayoyin da aka tattara suna nuna abin da za ku yi a gaba." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Abin da dole shugabanni su fara sani",
        questions: [
          { objective: "O4", q: "Me FERPA ke karewa?", options: ["Albashin malamai", "Tsaron ginin makaranta", "Sirrin bayanan karatun ɗalibai", "Jerin abincin makaranta"], answer: 2, why: "FERPA tana kare bayanan karatun ɗalibai." },
          { objective: "O4", q: "COPPA tana kare sirrin yara a intanet:", options: ["'Yan ƙasa da shekara 13", "'Yan ƙasa da shekara 18", "'Yan ƙasa da shekara 21", "Na kowane shekaru"], answer: 0, why: "FTC ta ce dokar tana kare yara 'yan ƙasa da shekara 13." },
          { objective: "O4", q: "A cewar FTC, yaushe makaranta za ta iya ba da izini a madadin iyaye ƙarƙashin COPPA?", options: ["Duk lokacin da malami ya so", "Idan hidimar tana tattara bayanai don amfani da amfanar makarantar kaɗai, ba don wata manufar kasuwanci ba", "Ba taɓa ba", "Idan manhajar kyauta ce"], answer: 1, why: "Izinin makaranta yana iyakance ga amfanin ilimi ba tare da wata manufar kasuwanci ba." },
          { objective: "O5", q: "Wace ce ɗaya daga cikin ƙa'idojin wasiƙar AI ta Ma'aikatar Ilimi ta Yuli 2025?", options: ["Ayyukan AI su kasance malamai ne ke jagoranta", "AI ya maye gurbin malamai", "Dole a hana AI", "Makarantu masu zaman kansu kaɗai za su iya amfani da AI"], answer: 0, why: "Wasiƙar tana kira ga ayyukan da malamai ke jagoranta." },
          { objective: "O6", q: "Ta yaya ya kamata ku buɗe tattaunawa da ma'aikata kan AI?", options: ["Da ƙa'ida mai shafuka 30", "Da tallan kamfani", "Da hani", "Da tambayar sauraro game da inda ma'aikata suka ga AI"], answer: 3, why: "Sauraro da farko yana gina amana kuma yana nuna abin da ma'aikata ke buƙata." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI ga Shugabannin Makaranta da na Ilimi 1: Gabatarwa ga AI a Ilimi",
    questions: [
      { objective: "O1", q: "Kayan hira kamar ChatGPT an gina su a kan:", options: ["Takardun lissafi (spreadsheet)", "Manyan samfuran harshe (LLM)", "Firintoci", "Tsarin ɗaukar halarta"], answer: 1, why: "LLM ne ke ba kayan hira ƙarfi." },
      { objective: "O1", q: "Hallucination (hasashen ƙarya) na AI shi ne:", options: ["Amsa mai sauri", "Allon da ya karye", "Abin ƙirƙira da yake kama da gaskiya", "Atisayen gaggawa na makaranta"], answer: 2, why: "AI yana iya ƙirƙirar bayanai da majiyoyi." },
      { objective: "O6", q: "Mafi kyawun saƙo a layi ɗaya ga ma'aikata shi ne:", options: ["AI yana ba da maki ga komai", "AI yana maye gurbin shirya darasi", "AI abokin rubuta daftarin farko ne, ba kalma ta ƙarshe game da ɗalibi ba", "AI koyaushe yana daidai"], answer: 2, why: "Yana sa hukuncin malami ya kasance a tsakiya." },
      { objective: "O2", q: "Fasalolin AI suna iya bayyana a kayan da kuke da su tuni:", options: ["Wani lokaci a kunne tun farko", "Ba taɓa ba", "Sai idan kun biya ƙari", "A waya kaɗai"], answer: 0, why: "Kamfanoni suna ƙara fasalolin AI a kayayyakin da ake da su." },
      { objective: "O2", q: "Shiri mai daidaitawa (adaptive):", options: ["Yana buga takardar sakamako", "Yana ɗaukar halarta", "Yana kulle ƙofofi", "Yana canja aiki na gaba bisa amsoshin ɗalibi"], answer: 3, why: "Yana daidaita kansa da amsoshi." },
      { objective: "O2", q: "Taswirar AI ɗinku ya kamata ta nuna ko kowane kayan:", options: ["Yana da kyakkyawar tambari", "An amince da shi kuma yana taɓa bayanan ɗalibai", "Ya shahara", "Sabo ne"], answer: 1, why: "Amincewa da bayanai su ne abin da dole shugabanni su sani." },
      { objective: "O3", q: "Wane amfani ne MAI TAIMAKO?", options: ["Sa ido a ɓoye", "Yanke hukuncin horo", "Liƙa IEP a kayan kyauta", "Ƙirƙirar tambayoyin atisaye a matakan karatu daban-daban"], answer: 3, why: "Yana rage lokaci kuma yana buɗe hanya ga kowa." },
      { objective: "O3", q: "Me yasa amfanin ɗalibai da AI a aikin aji zai iya zama matsala?", options: ["Ya saɓa wa doka", "Koyaushe satar amsa ne", "Yana iya maye gurbin tunanin da aikin ke ginawa", "Yana da jinkiri sosai"], answer: 2, why: "Ƙa'idoji ne ke yanke lokacin da AI ke tallafa wa koyo ko ke maye gurbinsa." },
      { objective: "O3", q: "Gwajin iyali yana tambaya:", options: ["Zan bayyana wannan amfani na AI ga iyalin ɗalibin?", "Iyalin yana da kwamfuta?", "Iyalin yana kan intanet?", "Iyalin ne ya biya?"], answer: 0, why: "Jin daɗin bayyana amfani dubawa ce mai kyau." },
      { objective: "O4", q: "Haƙƙoƙin FERPA suna komawa daga iyaye zuwa ɗalibi a:", options: ["Shekara 10", "Shekara 18 ko shiga kwaleji", "Shekara 13", "Ba taɓa ba"], answer: 1, why: "Ɗalibin ya zama ɗalibi mai cancanta (eligible student)." },
      { objective: "O4", q: "A ƙarƙashin FERPA, iyaye za su iya:", options: ["Dubawa da nazarin bayanan karatun ɗansu", "Karanta littattafan sirri na malamai", "Canja maki da kansu", "Babu komai"], answer: 0, why: "Dubawa da nazari su ne manyan haƙƙoƙin FERPA." },
      { objective: "O4", q: "Kamfani zai iya zama \"jami'in makaranta\" a ƙarƙashin FERPA ne kawai idan:", options: ["Yana da manhaja", "Kyauta ne", "Ya shahara", "Yana yi wa makaranta hidima ƙarƙashin ikonta kai tsaye, da iyakoki kan sake raba bayanai"], answer: 3, why: "Waɗannan sharuɗɗa sun fito ne daga jagorancin FERPA." },
      { objective: "O4", q: "Ana iya raba bayanan kundin suna (directory information):", options: ["Ba taɓa ba", "Bayan sanarwa da damar ƙin yarda", "Da kamfanoni kaɗai", "Ɗalibai kaɗai"], answer: 1, why: "Dole makarantu su ba da sanarwa su ba da damar ƙin yarda." },
      { objective: "O4", q: "Wace hukuma ce ke aiwatar da COPPA?", options: ["Hukumar gidan waya", "Ma'aikatar Noma", "Federal Trade Commission (FTC)", "Hukumar gudanarwar makaranta"], answer: 2, why: "FTC ce ke aiwatar da COPPA." },
      { objective: "O4", q: "Wani malami ya liƙa sunaye da makin ɗalibai a kayan AI kyauta da ba a amince da shi ba. Wannan:", options: ["Wajibi ne", "Koyaushe ba laifi", "Yana iya bayyana bayanan karatu ga kamfanin da ba shi da yarjejeniya", "Yana inganta sirri"], answer: 2, why: "Wannan shi ne haɗarin FERPA na kayan da ba a amince da su ba." },
      { objective: "O4", q: "Don ainihin nauyin sirri na gundumarku, ku tambayi:", options: ["Jami'in sirri ko lauyanku", "Chatbot", "Ɗalibi", "Mai sayar da kayan kamfani"], answer: 0, why: "Ƙwararrun mutane ne ke da kalma ta ƙarshe." },
      { objective: "O5", q: "Wasiƙar AI ta Ma'aikatar Ilimi tana da kwanan wata:", options: ["3 ga Maris, 2019", "1 ga Janairu, 2000", "27 ga Oktoba, 2026", "22 ga Yuli, 2025"], answer: 3, why: "An aika ta a ranar 22 ga Yuli, 2025." },
      { objective: "O5", q: "A ina za ku sami jerin dubawa na Model Terms of Service?", options: ["Manhajar kafofin sada zumunta", "studentprivacy.ed.gov", "Tallar kamfani", "Wurin sharhi na labarai"], answer: 1, why: "Yana kan shafin Student Privacy Policy Office." },
      { objective: "O5", q: "Bayan jagorancin tarayya, ya kamata ku duba:", options: ["Rubuce-rubucen kamfanoni kaɗai", "Dokokin wata ƙasa", "Babu wani abu", "Jagorancin AI na hukumar ilimi ta jiharku"], answer: 3, why: "Jihohi da yawa suna wallafa nasu jagorancin AI." },
      { objective: "O6", q: "Tattaunawa mai kyau da ma'aikata kan AI tana ƙarewa da:", options: ["Tallan kayan sayarwa", "Hani", "Mataki ɗaya na gaba da tattara manyan tambayoyi", "Babu matsaya"], answer: 2, why: "Mataki na gaba da tambayoyi suna nuna abin da za a yi a gaba." }
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
      9,
      13,
      14,
      16,
      18,
      19
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Ma'ana mai sauƙi",
        objective: "O1",
        notYet: "Ma'anar tana amfani da kalmomin ƙwararru ko ta wuce jimloli biyu.",
        meets: "Ta bayyana AI a jimloli biyu masu sauƙi.",
        exceeds: "Abokin aiki da sabo ne ga AI ya fahimce ta a karatun farko."
      },
      {
        name: "Taimako da haɗari",
        objective: "O3",
        notYet: "Taimako ƙasa da uku ko haɗari ƙasa da uku, ko ba su dace da makaranta ba.",
        meets: "Hanyoyi uku da AI zai iya taimakon malamai da haɗari uku ga ɗalibai.",
        exceeds: "Kowane haɗari yana faɗin abin da ma'aikata za su yi game da shi."
      },
      {
        name: "Ƙa'idar sirri",
        objective: "O4",
        notYet: "Babu ƙa'idar sirri ko ba ta da sarari.",
        meets: "Ta faɗi cewa kada a saka sunayen ɗalibai, makinsu ko wani bayani da ke nuna ko wane ne ɗalibi a kayan AI da gunduma ba ta amince da su ba.",
        exceeds: "Ta ba da gajeren misalin neman taimako ba tare da bayanin ɗalibi ba."
      },
      {
        name: "Wanda za a tambaya",
        objective: "O6",
        notYet: "Ba ta faɗi wanda za a tambaya ba.",
        meets: "Ta ambaci wanda za a tambaya idan akwai tambayoyi.",
        exceeds: "Ta kuma ambaci jami'in sirri don tambayoyin sirri."
      },
      {
        name: "Tattaunawa da ma'aikata",
        objective: "O6",
        notYet: "Ba a yi tattaunawa ba, ko ba a rubuta tambayoyi ba.",
        meets: "An jagoranci tattaunawar minti 15 kuma an rubuta manyan tambayoyi uku.",
        exceeds: "An gama da mataki ɗaya na gaba a sarari ga ma'aikata."
      }
    ]
  },
  evaluation: {
    results: [
      "Shugabannin da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Makarantun da ma'aikata suka karɓi takardar \"AI a makarantarmu\" cikin kwanaki 30 (binciken biyo baya)",
      "Makarantun da ke da taswirar kayan AI da ake amfani da su, da alamar an amince ko ba a amince ba (binciken biyo baya)",
      "Shugabannin da suka ci gaba zuwa kwas na 2 na AI ga Shugabannin Makaranta da na Ilimi"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta mai intanet",
      "Jerin kayan da gundumarku ta amince da su, idan akwai",
      "Takarda ko daftari don taswirar AI da takarda mai shafi ɗaya",
      "Kusan minti 60 gaba ɗaya, da tattaunawar minti 15 da ma'aikata"
    ],
    facilitatorNotes: [
      "Ku yi gwajin farko tare, sannan ku zana taswirar AI a ƙungiyoyin makaranta tare da mai kula da fasaha.",
      "Ku tunatar da shugabanni cewa kwas ɗin yana bayanin doka da kalmomi masu sauƙi kuma ba shawarar lauya ba ne; ku gayyaci jami'in sirri na gunduma idan zai yiwu.",
      "Kada ku taɓa amfani da bayanan ɗalibai na gaske a misalan atisaye.",
      "Ku bar shugabanni su yi atisayen buɗe tattaunawa da ma'aikata bi-biyu kafin su jagorance ta a makaranta.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, ku nemi tambayoyin ma'aikata da aka rubuta a matsayin shaida."
    ]
  }
};
