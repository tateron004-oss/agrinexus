"use strict";

// Koach Learn course, Hausa (ha) translation of leadership/lead-agentic-understanding-ai.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "lead-agentic-understanding-ai-ha",
  lang: "ha",
  translationOf: "lead-agentic-understanding-ai",
  category: "Leadership Development",
  name: "Jagoranci a Zamanin Agentic AI 1: Fahimtar AI",
  skills: "Bayyana AI ga ƙungiyarku da kalmomi masu sauƙi, Bambance generative AI da agentic AI, Gane amfani mai kyau da mara kyau, Ambaton manyan haɗura, Rubuta bayanin AI ga ƙungiya",
  outcome: "bayyana wa ƙungiyarku, da kalmomi masu sauƙi, mene ne generative AI da agentic AI, inda suke taimakawa da inda suke kasawa, da jagorantar taron bayani na minti goma mai amfani uku masu kyau, haɗura uku da ƙa'ida ɗaya bayyananniya.",
  about: [
    "Wannan kwas na manajoji ne, masu kula da ma'aikata, shugabannin ƙungiyoyi da masu ƙananan kasuwanci da ƙungiyoyin sa-kai. Ba ku buƙatar ilimin fasaha. Kuna buƙatar iya magana game da AI a sarari, domin ƙungiyarku tana riga tana amfani da shi ko tana tambaya game da shi.",
    "Babi na 1 yana bayyana mene ne AI, yadda generative AI na yau yake aiki, da abin da ya sa agentic AI ya bambanta. Babi na 2 yana taimaka muku ku auna inda AI ya dace a aikin ƙungiyarku, abin da zai iya lalacewa, da yadda za ku yi wa ƙungiyarku bayani don kowa ya fara da fahimta ɗaya.",
    "Kowane darasi yana ɗaukar kusan minti biyar kuma yana ƙarewa da ɗan aiki da za ku yi da aikinku na gaske. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas. Wannan shi ne kwas na 1 cikin 3 na Jagoranci a Zamanin Agentic AI."
  ],
  finalTask: "Ku shirya kuma ku gabatar (ko ku naɗa) bayanin AI na minti goma ga ƙungiyarku. Ya bayyana generative AI da agentic AI da kalmomi masu sauƙi, ya nuna misali ɗaya kai tsaye da mataimakin AI kyauta, ya ambaci amfani uku masu kyau da haɗura uku a aikin ƙungiyarku na gaske, kuma ya ƙare da ƙa'ida ɗaya da kowa zai bi, kamar \"ba a saka bayanan sirri na abokan ciniki ko ma'aikata a kayan AI na jama'a\".",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manajoji, masu kula da ma'aikata, shugabannin ƙungiyoyi da masu ƙananan kasuwanci da ƙungiyoyin sa-kai waɗanda ƙungiyoyinsu suke riga suna amfani da AI ko suna tambaya game da shi. Ba a buƙatar ilimin fasaha.",
    startingPoint: "Sun ji labarin ChatGPT da kayan aiki irinsa, wataƙila sun gwada ɗaya. Har yanzu ba za su iya bayyana generative AI ko agentic AI a sarari ba, ko auna inda ya dace a aikin ƙungiyarsu, ko ambaton manyan haɗurransa.",
    gap: "Ƙungiyoyi suna amfani da AI ko da akwai jagora ko babu. Shugabanni suna buƙatar bayyana shi da kalmomi masu sauƙi, auna amfani mai kyau da mara kyau, ambaci haɗura da sanya ƙa'ida ta farko, don mutanensu su yi amfani da AI lafiya kuma da fahimta ɗaya.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi, ba a ɗauka cewa suna da ilimin fasaha ba",
      "Na'urori: waya ko kwamfuta mai mataimakin AI kyauta",
      "Lokaci: kusan minti biyar a kowane darasi, a cikin ranar aikin manaja",
      "Sirri: babu bayanan sirri na abokan ciniki ko ma'aikata a kayan AI na jama'a lokacin atisaye",
      "Manufofi da dokokin kowace ƙungiya game da AI da bayanai suna aiki"
    ],
    prerequisites: "Babu. Wannan shi ne kwas na 1 cikin 3 na Jagoranci a Zamanin Agentic AI."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan wani a ƙungiyarku ya tambayi mene ne AI", action: "bayyana AI, machine learning da generative AI da kalmomi masu sauƙi", standard: "da jumla ɗaya kowanne da sabon ma'aikaci zai fahimta" },
    { id: "O2", condition: "Idan aka ba ku wani aikin ƙungiya na yau da kullum", action: "bayyana abin da mataimakin AI da wakilin AI (agent) kowanne zai yi, da matakan da ya kamata mutum ya amince da su", standard: "kuna ambaton wanda zai ci gaba da ɗaukar alhaki" },
    { id: "O3", condition: "Idan aka ba ku jerin ayyukan ƙungiyarku", action: "rarraba kowane aiki zuwa amfani mai kyau, mai buƙatar kulawa, ko mara kyau na AI", standard: "da gajeren dalili ga kowanne" },
    { id: "O4", condition: "Don aikin ƙungiyarku na gaske", action: "ambaci manyan haɗura uku na AI da kariya ɗaya ga kowanne", standard: "da kariyar da za ku iya sanyawa a wannan watan" },
    { id: "O5", condition: "Ta amfani da mataimakin AI kyauta da aikin ƙungiya da ba na sirri ba", action: "yin gajeren nuni kai tsaye, har da tambayar biyo baya ɗaya da tabbatarwa", standard: "ba tare da amfani da bayanan sirri ba" },
    { id: "O6", condition: "Tare da ƙungiyarku", action: "gabatar da bayanin AI na minti goma da ke ƙarewa da ƙa'ida ɗaya", standard: "da ya ƙunshi amfani uku, haɗura uku da ƙa'idar, sannan a tura ta a rubuce bayan haka" }
  ],
  chapters: [
    {
      name: "Babi na 1: Abin da shugabanni suke buƙatar sani game da AI",
      lessons: [
        {
          objectives: ["O1"],
          title: "AI da kalmomi masu sauƙi",
          minutes: 5,
          goal: "Bayyana AI, machine learning da generative AI da jumla ɗaya kowanne.",
          text: [
            "Artificial intelligence (AI, basirar na'ura) manhaja ce da ke yin ayyukan da yawanci sai da hukuncin mutum, kamar gane magana, gano tsari ko rubuta rubutu. Machine learning (koyon na'ura) ita ce hanyar da aka fi amfani da ita wajen gina ta: maimakon rubuta kowace ƙa'ida, mutane suna nuna wa manhajar misalai masu yawa sai ta koyi tsari.",
            "Generative AI shi ne machine learning da ke ƙirƙirar sabon abu: rubutu, hotuna, sauti, lambar kwamfuta (code). Kayan aiki kamar ChatGPT, Microsoft Copilot, Google Gemini da Claude an gina su ne a kan manyan samfuran harshe (LLM) da aka koyar da rubuce-rubuce masu yawan gaske. Suna hasashen kalmomin da suka fi yiwuwa, shi ya sa suke rubutu da kyau, kuma shi ya sa suke iya yin kuskure alhali suna magana kamar sun tabbata.",
            "A matsayinku na shugaba, ba ku buƙatar lissafin. Kuna buƙatar jumloli uku masu sauƙi da za ku iya faɗa wa ƙungiyarku, da hikimar sanin lokacin da kayan aikin yake taimakawa da lokacin da yake hasashe kawai."
          ],
          words: [["Artificial intelligence (AI)", "manhajar da ke yin ayyukan da yawanci sai da hukuncin mutum."], ["Machine learning", "gina manhaja ta hanyar nuna mata misalai don ta koyi tsari."], ["Generative AI", "AI da ke ƙirƙirar sabon rubutu, hotuna, sauti ko code."], ["LLM", "large language model (babban samfurin harshe): AI ɗin da ke bayan mataimakan hira."]],
          slides: [
            { title: "Ma'anoni uku masu sauƙi", bullets: ["AI: manhajar da ke yin ayyukan da ke buƙatar hukunci", "Machine learning: tana koyon tsari daga misalai", "Generative AI: tana ƙirƙirar rubutu, hotuna, code"] },
            { title: "Me ya sa yake magana kamar ya tabbata", bullets: ["LLM suna hasashen kalmomin da suka fi yiwuwa", "Rubutu mai kyau ba daidai yake da gaskiya ba"] },
            { title: "Abin da shugaba yake buƙata", bullets: ["Kalmomi masu sauƙi don ƙungiyarku", "Hikima: yana taimakawa ko yana hasashe?"] }
          ],
          tryIt: "Ku rubuta bayaninku na jumla ɗaya na AI, machine learning da generative AI, da kalmomin da sabon ma'aikacinku zai fahimta. Ku karanta su da babbar murya.",
          youCanNow: "bayyana AI, machine learning da generative AI da kalmomi masu sauƙi.",
          quickCheck: [
            { objective: "O1", q: "Mene ne machine learning?", options: ["Manhajar da ke koyon tsari daga misalai", "Mutum-mutumin da ke koyon tafiya", "Mutum yana koyar da kwamfuta da hannu, ƙa'ida bayan ƙa'ida", "Manhajar da ba ta taɓa yin kuskure"], answer: 0, why: "Machine learning tana gano tsari a cikin misalai maimakon bin ƙa'idojin da aka rubuta da hannu." },
            { objective: "O1", q: "Sabon ma'aikaci ya tambayi mene ne generative AI. Wace amsa za ku bayar?", options: ["Injin bincike ne da sabon suna", "Manhaja ce da ke yin lissafi kawai", "AI ne da ke ƙirƙirar sabon rubutu, hotuna ko code daga abin da kuka nema", "Shiri ne da ya san kowane bayani"], answer: 2, why: "Generative AI yana ƙirƙirar sabon abu; bai san kowane bayani ba." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Daga mataimaki zuwa wakili: abin da agentic AI yake canjawa",
          minutes: 5,
          goal: "Bayyana bambancin mataimakin AI da wakilin AI (agent), da dalilin da ya sa yake da muhimmanci ga shugabanni.",
          text: [
            "Mataimakin AI yana amsawa idan an tambaye shi: kuna ba shi umarni, yana rubuta daftari, ku ne kuke yanke shawara. Wakilin AI (agent) ana ba shi manufa sai ya yi aiki: yana tsara matakai, yana amfani da kayan aiki kamar imel, kalanda, spreadsheet ko shafukan intanet, yana duba sakamako kuma yana ci gaba har ya gama ko a dakatar da shi.",
            "Agentic AI yana kai AI daga ba da shawara zuwa ɗaukar mataki. Mataimaki yana rubuta daftarin amsa ga abokin ciniki; wakili zai iya karanta akwatin imel, rubuta amsoshi, tura su, kuma ya sabunta bayanan abokin ciniki. Wannan yana ƙara ajiye lokaci, kuma yana iya yin kurakurai da sauri, da sunan ƙungiyarku.",
            "Ga shugabanni, manyan tambayoyi suna canjawa. Ba kawai \"amsar tana da kyau?\" ba, har ma \"me aka ba shi izinin yi, wa yake amincewa da ayyukansa, kuma wa yake ɗaukar alhaki idan ya yi kuskure?\" Kullum mutum ne yake ɗaukar alhaki."
          ],
          words: [["Agentic AI", "AI da ke aiki zuwa ga manufa ta hanyar tsara matakai da ɗaukar mataki da kayan aiki."], ["Alhaki (accountable)", "mutumin da ke amsa tambaya kan sakamakon, mai kyau ko mara kyau."]],
          slides: [
            { title: "Mataimaki da wakili", bullets: ["Mataimaki: kuna tambaya, yana rubuta daftari, ku kuke yanke shawara", "Wakili: ana ba shi manufa, yana tsarawa yana aiki da kayan aiki"] },
            { title: "Daga shawara zuwa mataki", bullets: ["Rubuta daftarin amsa, ko tura ta da sabunta bayanai", "Ƙarin ajiye lokaci, kurakurai da sauri"] },
            { title: "Sababbin tambayoyin shugaba", bullets: ["Me zai iya yi?", "Wa yake amincewa da ayyukansa?", "Wa yake ɗaukar alhaki? Kullum mutum"] }
          ],
          tryIt: "Ku zaɓi aiki ɗaya na yau da kullum a ƙungiyarku. Ku bayyana abin da mataimakin AI zai yi a kansa, da abin da wakilin AI zai iya yi. Ku rubuta matakan da kuke son mutum ya amince da su.",
          youCanNow: "bayyana yadda agentic AI ya bambanta da mataimaki, da abin da dole shugabanni su yanke shawara a kai.",
          quickCheck: [
            { objective: "O2", q: "Me wakilin AI zai iya yi da mataimaki na yau da kullum ba ya yi?", options: ["Amsa tambaya idan an tambaye shi", "Tsara matakai da ɗaukar mataki da kayan aiki zuwa ga manufa", "Rubuta gajeren imel", "Gyara kurakuransa ba tare da kowa ya sani ba"], answer: 1, why: "Wakilai suna tsarawa kuma suna aiki da kayan aiki, shi ya sa dole shugabanni su yanke abin da za su iya yi." },
            { objective: "O2", q: "Wakili zai iya tura imel ɗin mayar da kuɗi ga abokan ciniki da kansa. Me za ku fara yanke shawara a kai?", options: ["A bar shi ya tura komai don ajiye lokaci", "A hana duk AI a ƙungiyar", "A bar wakilin ya yanke waɗanne mayar da kuɗi ke buƙatar mutum", "Waɗanne matakai dole mutum ya amince da su, da wanda ke ɗaukar alhaki"], answer: 3, why: "Da wakilai, tambayar shugaba ita ce me zai iya yi, wa yake amincewa, da wa yake ɗaukar alhaki." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Abin da AI yake yi da kyau da inda yake kasawa",
          minutes: 5,
          goal: "Rarraba ayyuka zuwa amfani mai kyau, mai buƙatar kulawa da mara kyau na AI.",
          text: [
            "AI yana da kyau wajen daftarin farko (imel, tallar neman ma'aikata, ajandar taro), taƙaita dogayen takardu, tunanin zaɓuɓɓuka, sake rubutu don wasu masu karatu daban, da bayanin batutuwan da ba ku saba da su ba. Waɗannan suna ajiye lokaci domin har yanzu mutum yana duba sakamakon.",
            "Ku yi hankali da duk abin da ya shafi gaskiyar bayanai, doka, kuɗi, lafiya ko mutane: AI yana iya ƙirƙirar bayanai, majiyoyi da lambobi (ana yawan kiran wannan hallucination), yana iya nuna son kai (bias) daga bayanan da aka koyar da shi, kuma bai san manufofin ƙungiyarku ba sai kun faɗa masa.",
            "Amfani mara kyau: hukunci na ƙarshe game da mutane (ɗaukar aiki, kora, ladabtarwa, albashi), duk abin da ba za a iya gyara kuskurensa ba, da duk abin da ke buƙatar saka bayanan sirri a kayan aikin jama'a. Gwaji mai sauƙi ga ƙungiyarku: za ku ji daɗin bayyana wa mutumin da abin ya shafa cewa AI ne ya yi wannan?"
          ],
          words: [["Hallucination", "lokacin da AI ya rubuta abin da yake kama da gaskiya amma ƙirƙirarre ne."], ["Bias (son kai)", "tsarin rashin adalci a sakamakon AI, sau da yawa daga bayanan da aka koyar da shi."]],
          slides: [
            { title: "Amfani mai kyau", bullets: ["Daftarin farko: imel, talla, ajanda", "Taƙaitawa da tunanin zaɓuɓɓuka", "Sake rubutu don sababbin masu karatu"] },
            { title: "Ku yi amfani da kulawa", bullets: ["Bayanai, doka, kuɗi, lafiya, mutane", "Yana iya ƙirƙirar bayanai da majiyoyi", "Yana iya nuna son kai"] },
            { title: "Amfani mara kyau", bullets: ["Hukunci na ƙarshe game da mutane", "Kurakuran da ba za a iya gyarawa ba", "Bayanan sirri a kayan aikin jama'a"] },
            { title: "Gwajin bayyanawa", bullets: ["Za ku faɗa wa wanda abin ya shafa cewa AI ne ya yi?"] }
          ],
          tryIt: "Ku jera ayyuka goma da ƙungiyarku take yi. Ku yi wa kowanne alama KYAU (GOOD), KULAWA (CARE) ko MARA KYAU (POOR) don AI, da 'yan kalmomi kan dalili.",
          youCanNow: "auna waɗanne ayyukan ƙungiyarku ne amfani mai kyau, mai buƙatar kulawa ko mara kyau na AI.",
          quickCheck: [
            { objective: "O3", q: "Mene ne hallucination na AI?", options: ["Hoton da AI ya yi", "AI ya ƙi amsawa", "AI ya rubuta abin da yake kama da gaskiya amma ƙirƙirarre ne", "AI yana aiki a hankali"], answer: 2, why: "Hallucination yana zuwa da tabbaci, shi ya sa sakamakon AI yake buƙatar tabbatarwa." },
            { objective: "O3", q: "Ƙungiyarku tana son AI ya yanke waɗanne masu nema za a yi wa hira. Wace alama za ku ba shi?", options: ["KULAWA ko MARA KYAU: dole mutum ne ya yanke shawara, AI yana taimakawa kawai", "KYAU: AI ya fi sauri", "KYAU, matuƙar ba a faɗa wa kowa ba", "Ba abin tunani ba ne"], answer: 0, why: "Hukunci game da mutane yana buƙatar hikimar mutum, kuma gwajin bayyanawa ya faɗi idan za ku ɓoye shi." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Abin da shugabanni suke buƙatar sani game da AI",
        questions: [
          { objective: "O1", q: "Wanne ne mafi kyawun bayani mai sauƙi na generative AI?", options: ["Mutum-mutumi a masana'anta", "Spreadsheet mai sauri", "AI da ke ƙirƙirar sabon rubutu, hotuna ko code", "Injin bincike"], answer: 2, why: "Generative AI yana ƙirƙirar sabon abu." },
          { objective: "O1", q: "Me ya sa mataimakin AI zai iya magana kamar ya tabbata amma kuma ya yi kuskure?", options: ["Yana hasashen kalmomin da suka fi yiwuwa maimakon tabbatar da gaskiya", "An yi shi don ya yi ƙarya", "Tsofaffin jaridu kawai yake karantawa", "Ya lalace"], answer: 0, why: "Hasashe mai kyau ba tabbatar da gaskiya ba ne." },
          { objective: "O2", q: "Me ya fi nuna cewa AI \"agentic\" ne?", options: ["Yana da murya", "Yana da tsada", "Yana rubuta dogayen amsoshi", "Yana tsara matakai kuma yana ɗaukar mataki da kayan aiki"], answer: 3, why: "Wakilai suna aiki zuwa ga manufa, ba amsawa kawai ba." },
          { objective: "O2", q: "Wakilin AI ya tura imel ɗin mayar da kuɗi mara daidai ga abokin ciniki. Wa yake ɗaukar alhaki?", options: ["AI", "Wani mutum a ƙungiyarku", "Babu kowa", "Kamfanin manhajar kawai"], answer: 1, why: "Kullum mutum ne yake ɗaukar alhakin ayyukan AI da aka yi da sunan ƙungiya." },
          { objective: "O3", q: "Wanne ne amfani MARA KYAU na AI?", options: ["Rubuta daftarin ajandar taro", "Tunanin sunayen taron biki", "Taƙaita dogon rahoto", "Yanke hukunci na ƙarshe na korar ma'aikaci"], answer: 3, why: "Hukunci na ƙarshe game da mutane yana buƙatar hikimar mutum." }
        ]
      }
    },
    {
      name: "Babi na 2: Jagorantar matakan farko na ƙungiyarku",
      lessons: [
        {
          objectives: ["O4"],
          title: "Haɗuran da ya kamata kowane shugaba ya ambata",
          minutes: 5,
          goal: "Ambaci manyan haɗuran AI ga ƙungiyarku da kariya ɗaya ga kowanne.",
          text: [
            "Sirri: duk abin da aka rubuta a kayan AI na jama'a mai samar da shi yana iya ajiye shi, kuma wasu kayan aiki kyauta suna iya amfani da shi don inganta kayayyakinsu. Kariya: babu bayanan abokan ciniki, ma'aikata ko na sirri a kayan aikin jama'a; ku yi amfani da kayan aikin da ƙungiyarku ta amince da su.",
            "Daidaito: bayanan ƙarya, lambobi marasa daidai, majiyoyin da aka ƙirƙira. Kariya: mutum yana duba bayanai, lambobi da maganganun da aka ambato kafin komai ya fita. Son kai da adalci: sakamako yana iya zama rashin adalci ga wasu rukunin mutane. Kariya: babu hukunci game da mutane da AI kaɗai.",
            "Tsaro da wakilai: wakilan da ke karanta imel ko shafukan intanet ana iya yaudarar su da umarni ɓoyayyu (prompt injection), kuma wakilan da ke da izini da yawa suna iya yin ɓarna ta gaske. Kariya: mafi ƙarancin izini da amincewar mutum kafin ɗaukar mataki. Don cikakken tsari, AI Risk Management Framework na NIST (hukumar ma'auni ta Amurka), wanda yake kyauta, yana tsara wannan aiki zuwa ayyuka huɗu: Govern, Map, Measure da Manage (Jagoranci, Taswira, Aunawa da Gudanarwa)."
          ],
          words: [["Prompt injection", "rubutu ɓoyayye da ke ƙoƙarin sa AI ya bi umarnin wani daban."], ["Mafi ƙarancin izini (least access)", "ba kayan aiki ko mutum izinin da aikin yake buƙata kawai."], ["NIST AI RMF", "tsari na Amurka kyauta, na son rai, don sarrafa haɗuran AI."]],
          slides: [
            { title: "Sirri", bullets: ["Kayan aikin jama'a suna iya ajiye abin da kuka rubuta", "Babu bayanan abokan ciniki, ma'aikata ko na sirri", "Ku yi amfani da kayan aikin da aka amince da su"] },
            { title: "Daidaito da adalci", bullets: ["Ku duba bayanai, lambobi da maganganun da aka ambato", "Babu hukunci game da mutane da AI kaɗai"] },
            { title: "Tsaro da wakilai", bullets: ["Umarni ɓoyayyu suna iya yaudarar wakilai", "Mafi ƙarancin izini, amincewar mutum kafin mataki"] },
            { title: "Tsari kyauta", bullets: ["NIST AI RMF: Govern, Map, Measure, Manage", "Na son rai ne; ana sabunta shi: ku duba shafin NIST"] }
          ],
          sources: [{ name: "NIST AI Risk Management Framework", url: "https://www.nist.gov/itl/ai-risk-management-framework" }, { name: "OWASP Top 10 for LLM Applications 2025", url: "https://genai.owasp.org/llm-top-10/" }],
          tryIt: "Ku rubuta manyan haɗuran AI guda uku a aikin ƙungiyarku na gaske, da kariya ɗaya da za ku iya sanyawa a wannan watan ga kowanne.",
          youCanNow: "ambaci manyan haɗuran AI na ƙungiyarku da kariya mai amfani ga kowanne.",
          quickCheck: [
            { objective: "O4", q: "Mene ne ma'anar mafi ƙarancin izini ga kayan aikin AI?", options: ["Ba kayan aikin AI izini mafi yawa don su yi aiki da kyau", "Ba kowane kayan aiki izinin da aikinsa yake buƙata kawai", "Shugaba kaɗai ne zai yi amfani da AI", "Yin amfani da AI kaɗan gwargwadon iko"], answer: 1, why: "Mafi ƙarancin izini yana rage ɓarna idan kayan aiki ya yi kuskure ko aka yaudare shi." },
            { objective: "O4", q: "Ƙungiyarku tana kula da bayanan abokan ciniki. Wane haɗari da kariya ne suka fi dacewa?", options: ["Haɗari: AI yana da jinkiri. Kariya: sayi kwamfuta mai sauri", "Haɗari: AI sabo ne. Kariya: jira shekaru biyar", "Haɗari: ma'aikata suna son AI. Kariya: toshe duk shafukan intanet", "Haɗari: bayanan sirri suna fita zuwa kayan aikin jama'a. Kariya: cire bayanan da farko ko amfani da kayan aikin da aka amince da shi"], answer: 3, why: "Kariya mai kyau tana dacewa da ainihin haɗarin da ke cikin aikin ƙungiyar." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Gwada shi da kanku: nuni kai tsaye da za ku iya nunawa",
          minutes: 5,
          goal: "Yin gajeren nunin AI lafiya a kan aikin ƙungiya na gaske (ba na sirri ba).",
          text: [
            "Shugabannin da ke amfani da AI da kansu suna jagorantar sa da kyau. Ku zaɓi aiki na gaske da babu bayanan sirri a ciki: ajandar taron ƙungiya na mako mai zuwa, daftarin farko na tallar neman ma'aikaci, ko taƙaitaccen bayani mai sauƙi na wata manufa ta jama'a.",
            "Ku rubuta prompt (umarni) a sarari: abin da kuke buƙata, halin da ake ciki (ba tare da sunaye ko bayanan sirri ba), da tsarin amsar. Sannan ku inganta shi da tambayar biyo baya ɗaya, kamar \"ka gajarta shi\" ko \"ka rubuta shi don sababbin ma'aikata\". Ku tabbatar da kowane bayani kafin ku yi amfani da shi.",
            "A cikin bayaninku, ku nuna dukkan aikin, har da kuskure idan ya yi. Ganin shugaba yana kama kuskuren AI yana koya wa ƙungiya fiye da nuni mara aibi."
          ],
          steps: ["Ku zaɓi aiki na gaske da babu bayanan sirri.", "Ku rubuta prompt: buƙata, halin da ake ciki, tsari.", "Ku yi tambayar biyo baya ɗaya don inganta shi.", "Ku tabbatar da bayanai ku gyara kurakurai.", "Ku rubuta abin da za ku nuna wa ƙungiya."],
          words: [["Prompt (umarni)", "abin da kuke rubutawa ko faɗa wa kayan aikin AI don neman wani abu."], ["Tambayar biyo baya (follow-up)", "buƙata ta biyu da ke inganta amsar farko."]],
          slides: [
            { title: "Ku fara amfani da shi da kanku", bullets: ["Shugabannin da ke amfani da AI suna jagorantar sa da kyau", "Ku zaɓi aiki na gaske, babu bayanan sirri"] },
            { title: "Nuni mai kyau", bullets: ["Prompt a sarari: buƙata, halin da ake ciki, tsari", "Tambayar biyo baya ɗaya don inganta shi", "Ku tabbatar da kowane bayani"] },
            { title: "Ku nuna kurakuran ma", bullets: ["Kama kuskuren AI yana koyarwa fiye da komai"] }
          ],
          tryIt: "Ku yi amfani da ChatGPT, Copilot, Gemini ko Claude don rubuta daftarin ajandar taron ƙungiya na mako mai zuwa. Ku yi tambayar biyo baya ɗaya, ku duba shi, kuma ku ajiye na farko da na ƙarshe don bayaninku.",
          youCanNow: "yin gajeren nunin AI lafiya kuma da gaskiya a kan aikin ƙungiya na gaske.",
          quickCheck: [
            { objective: "O5", q: "Me ke sa nunin AI kai tsaye ya yi kyau ga ƙungiyarku?", options: ["Aiki na gaske da babu bayanan sirri", "Aiki da ke amfani da fayil na abokin ciniki na gaske", "Aikin ƙage da ba shi da alaƙa da aikinku", "Nuni da ke ɓoye duk wani kuskure"], answer: 0, why: "Aiki na gaske amma ba na sirri ba yana nuna amfanin ba tare da jefa bayanan kowa cikin haɗari ba." },
            { objective: "O5", q: "A lokacin nuninku AI ya rubuta ajanda da ranar taro mara daidai. Me za ku yi?", options: ["Ku tsallake wannan sashe da sauri", "Ku zargi kayan aikin ku tsaya", "Ku nuna yadda kuka kama shi ku yi tambayar biyo baya don gyarawa", "Ku ce kullum haka yake yin kuskure"], answer: 2, why: "Nuna yadda aka kama kuskure yana koya wa ƙungiyarku al'adar tabbatarwa." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Yi wa ƙungiyarku bayani da sanya ƙa'ida ta farko",
          minutes: 6,
          goal: "Gabatar da bayanin AI na minti goma ga ƙungiya da ke ƙarewa da ƙa'ida ɗaya.",
          text: [
            "Bayani na farko mai kyau gajere ne kuma mai amfani. Tsari: minti biyu kan mene ne AI da agentic AI; minti uku na nuni kai tsaye; minti biyu kan amfani masu kyau ga ƙungiyarmu; minti biyu kan haɗura; minti ɗaya kan ƙa'idar da inda za a yi tambaya.",
            "Ku zaɓi ƙa'ida ɗaya da ke kare mutane kuma mai sauƙin tunawa. Ƙa'ida ta farko mafi amfani ga yawancin ƙungiyoyi: \"Ba a saka bayanan sirri na abokan ciniki, masu hulɗa, ɗalibai, marasa lafiya ko ma'aikata a kayan AI na jama'a.\" Ku ƙara wanda za a tambaya idan ba a tabbata ba.",
            "Ku gayyaci tambayoyi da damuwa. Wasu za su yi farin ciki, wasu za su damu game da ayyukansu. Ku faɗi a fili abin da kuka sani, abin da ba ku sani ba, da cewa mutane suna ci gaba da ɗaukar alhakin aikinsu. Sannan ku bi baya da ƙa'idar a rubuce."
          ],
          steps: ["Minti biyu: mene ne AI da agentic AI.", "Minti uku: nuni kai tsaye.", "Minti biyu: amfani masu kyau ga ƙungiyarmu.", "Minti biyu: haɗura.", "Minti ɗaya: ƙa'idar da wanda za a tambaya; sannan a tura ta a rubuce."],
          words: [["Ƙa'ida (ground rule)", "doka mai sauƙi da kowa yake bi tare."], ["Bayani (briefing)", "gajeren taro don ba ƙungiya bayani iri ɗaya."]],
          slides: [
            { title: "Bayanin minti goma", bullets: ["Minti 2: mene ne AI da wakilai", "Minti 3: nuni kai tsaye", "Minti 2: amfani masu kyau; minti 2: haɗura", "Minti 1: ƙa'idar"] },
            { title: "Ƙa'ida ta farko", bullets: ["Babu bayanan sirri a kayan AI na jama'a", "Ku faɗi wanda za a tambaya idan ba a tabbata ba"] },
            { title: "Ku jagoranci tattaunawar", bullets: ["Ku gayyaci tambayoyi da damuwa", "Ku faɗi abin da kuka sani da wanda ba ku sani ba", "Mutane suna ɗaukar alhaki; ku bi baya a rubuce"] }
          ],
          tryIt: "Aikin ƙarshe: ku shirya bayaninku na minti goma da sassa biyar ɗin da ke sama, ta amfani da nuninku na Darasi na 5 da haɗurranku na Darasi na 4. Ku gabatar da shi ga ƙungiyarku (ko ku naɗa shi), ku ƙare da ƙa'ida ɗaya, sannan ku tura ƙa'idar a rubuce bayan haka.",
          youCanNow: "yi wa ƙungiyarku bayanin AI a sarari da sanya ƙa'ida ta farko da ke kare mutane.",
          quickCheck: [
            { objective: "O6", q: "Da me ya kamata bayanin AI na farko ya ƙare?", options: ["Jerin duk kayan aikin AI da ke kasuwa", "Ƙa'ida ɗaya bayyananniya da wanda za a tambaya", "Alkawarin cewa AI ba zai canja komai ba", "Jarabawa mai maki"], answer: 1, why: "Ƙa'ida ɗaya bayyananniya da mutumin da za a tuntuɓa suna ba ƙungiya wurin farawa ɗaya." },
            { objective: "O6", q: "Kwana ɗaya bayan bayaninku, mene ne mataki mafi kyau na gaba?", options: ["Ku jira ku ga ko wani ya tuna ƙa'idar", "Ku ƙara ƙarin ƙa'idoji biyar", "Ku nemi AI ya tunatar da kowa", "Ku tura ƙa'idar ga ƙungiya a rubuce"], answer: 3, why: "Ƙa'idar da aka rubuta tana da sauƙin samu da komawa gare ta." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Jagorantar matakan farko na ƙungiyarku",
        questions: [
          { objective: "O4", q: "Wani ma'aikaci yana son ya liƙa ƙorafin abokin ciniki, da suna da adireshi, a kayan AI na jama'a kyauta. Mafi kyawun amsa?", options: ["Ci gaba", "Liƙa adireshin kawai", "Cire bayanan sirri da farko, ko amfani da kayan aikin da aka amince da shi", "Tambayi AI ko lafiya ne"], answer: 2, why: "Bayanan sirri ba sa shiga kayan aikin jama'a." },
          { objective: "O4", q: "Mene ne ayyuka huɗu na NIST AI Risk Management Framework?", options: ["Govern, Map, Measure, Manage", "Plan, Build, Test, Ship", "Buy, Install, Train, Use", "Read, Write, Check, Send"], answer: 0, why: "NIST ya ambaci Govern, Map, Measure da Manage." },
          { objective: "O5", q: "Nuninku kai tsaye ya ba da rana mara daidai. Me ya kamata ku yi a cikin bayanin?", options: ["Ku ɓoye shi", "Ku nuna yadda kuka kama shi kuka gyara shi", "Ku dakatar da bayanin", "Ku zargi kayan aikin ku wuce"], answer: 1, why: "Kama kurakurai a fili yana koyar da al'adar tabbatarwa." },
          { objective: "O6", q: "Wace ce ƙa'ida ta farko mafi kyau ga yawancin ƙungiyoyi?", options: ["\"Babu bayanan sirri a kayan AI na jama'a; ku tambaya idan ba ku tabbata ba.\"", "\"Kada a taɓa amfani da AI.\"", "\"Manajoji kaɗai za su yi amfani da AI.\"", "\"A yi amfani da AI a komai.\""], answer: 0, why: "Tana kare mutane kuma tana da sauƙin tunawa." },
          { objective: "O6", q: "Wani a ƙungiya yana damuwa cewa AI zai maye gurbinsa. Shugaba nagari:", options: ["Zai rufe taron", "Zai yi watsi da damuwar", "Zai yi alkawarin cewa babu abin da zai canja har abada", "Zai faɗi a fili abin da aka sani, da cewa mutane suna ci gaba da ɗaukar alhaki"], answer: 3, why: "Amsoshi na gaskiya kuma masu sauƙi suna gina amana." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Jagoranci a Zamanin Agentic AI 1: Fahimtar AI",
    questions: [
      { objective: "O1", q: "Mafi kyawun bayanin AI shi ne:", options: ["Sabon nau'in allon kwamfuta", "Manhajar da ke yin ayyukan da yawanci sai da hukuncin mutum", "Manhajar kafofin sada zumunta", "Wani nau'in mutum-mutumi kawai"], answer: 1, why: "Wannan ita ce ma'ana mai sauƙi." },
      { objective: "O1", q: "Machine learning tana nufin:", options: ["Ma'aikata suna koyon amfani da injuna", "Injuna suna gyara kansu", "Manhaja tana koyon tsari daga misalai", "Yin rubutu da sauri"], answer: 2, why: "Tana koyo daga misalai maimakon ƙa'idojin da aka rubuta da hannu." },
      { objective: "O1", q: "Wanne ne kayan aikin generative AI?", options: ["Firinta", "Na'urar lissafi (calculator)", "Microsoft Copilot", "Kabad na ajiye takardu"], answer: 2, why: "Copilot, ChatGPT, Gemini da Claude suna ƙirƙirar rubutu." },
      { objective: "O1", q: "LLM gajartawar:", options: ["Large language model", "Long legal memo", "Low-level machine", "Local learning module"], answer: 0, why: "LLM su ne ke ba mataimakan hira ƙarfi." },
      { objective: "O2", q: "Mataimakin AI:", options: ["Ba ya taɓa yin kuskure", "Kullum yana aiki da kansa", "Yana sa hannu a kwangiloli", "Yana amsawa kuma yana rubuta daftari idan an tambaye shi"], answer: 3, why: "Mataimaka suna amsawa; ku kuke yanke shawara." },
      { objective: "O2", q: "Wakilin AI (agent):", options: ["Yana amsa tambayoyi kawai", "Yana tsara matakai kuma yana aiki da kayan aiki zuwa ga manufa", "Ma'aikaci ne mutum", "Ba zai iya amfani da imel ko kalanda ba"], answer: 1, why: "Wakilai suna ɗaukar mataki." },
      { objective: "O2", q: "Agentic AI yana canja tambayar shugaba zuwa:", options: ["Shin ya shahara?", "Wane launi yake da shi?", "Kalmomi nawa zai iya rubutawa?", "Me zai iya yi, wa yake amincewa, wa yake ɗaukar alhaki?"], answer: 3, why: "Ɗaukar mataki yana buƙatar izini da alhaki." },
      { objective: "O3", q: "Hallucination yana nufin AI:", options: ["Ya ƙi amsawa", "Yana da sauri sosai", "Ya rubuta abin da yake kama da gaskiya amma ƙirƙirarre ne", "Yana magana da murya"], answer: 2, why: "Dole a tabbatar da abin da aka ƙirƙira." },
      { objective: "O3", q: "Wanne ne amfani MAI KYAU na AI ga ƙungiya?", options: ["Daftarin farko na tallar neman ma'aikaci da mutum zai duba", "Yanke wanda za a ƙara wa albashi", "Tura sanarwar shari'a ba tare da dubawa ba", "Ajiye bayanan lafiyar ma'aikata"], answer: 0, why: "Daftarin da mutane suke dubawa yana ajiye lokaci lafiya." },
      { objective: "O3", q: "Sakamakon AI yana iya zama rashin adalci ga wasu rukunin mutane saboda:", options: ["Intanet mai jinkiri", "Son kai (bias) da aka koya daga bayanan horo", "Zaɓin nau'in rubutu", "Girman allo"], answer: 1, why: "Tsarin bayanan horo yana iya ɗauke da son kai." },
      { objective: "O3", q: "Gwajin bayyanawa yana tambaya:", options: ["Za ku faɗa wa wanda abin ya shafa cewa AI ne ya yi wannan?", "AI zai iya bayyana kansa?", "Shin yana da arha?", "Shin yana da sauri?"], answer: 0, why: "Jin daɗin bayyanawa yana nuna amfani da ya dace." },
      { objective: "O4", q: "Prompt injection shi ne:", options: ["Tsarin farashi", "Maganin likita", "Prompt mai sauri", "Rubutu ɓoyayye da ke ƙoƙarin sa AI ya bi umarnin wani daban"], answer: 3, why: "Ana iya yaudarar wakilan da ke karanta imel ko shafukan intanet." },
      { objective: "O4", q: "Mafi ƙarancin izini yana nufin:", options: ["Babu izini kwata-kwata", "Izinin da aikin yake buƙata kawai", "Cikakken izini don sauri", "Izini ga manajoji kawai"], answer: 1, why: "Ƙarancin izini yana rage ɓarnar kurakurai." },
      { objective: "O4", q: "NIST AI RMF shi ne:", options: ["Kayan aikin AI", "Doka mai tara", "Tsari kyauta, na son rai, don sarrafa haɗarin AI", "Takardar shaidar horo"], answer: 2, why: "NIST ya bayyana shi a matsayin na son rai." },
      { objective: "O4", q: "Kafin ku yi amfani da bayanan da AI ya rubuta a rahoto, ya kamata ku:", options: ["Nemi AI ya yi alkawari", "Amince da su idan suna kama da daidai", "Tabbatar da su da majiya amintacciya", "Cire duk lambobi"], answer: 2, why: "Mutum yana duba bayanai da lambobi." },
      { objective: "O5", q: "Nuni kai tsaye mai kyau yana amfani da:", options: ["Aiki na gaske da babu bayanan sirri", "Cikakken fayil na abokin ciniki", "Bayanan albashin ma'aikata", "Kalmomin sirri (password)"], answer: 0, why: "Ayyuka na gaske amma ba na sirri ba suna da aminci kuma sun dace." },
      { objective: "O5", q: "Me ya sa za ku nuna kuskuren AI a cikin bayaninku?", options: ["Yana tabbatar da cewa AI ba shi da amfani", "Abin dariya ne", "Yana ƙare taron da wuri", "Yana koyar da al'adar tabbatarwa"], answer: 3, why: "Ganin ana kama kurakurai yana koyarwa fiye da nuni mara aibi." },
      { objective: "O6", q: "Bayani na farko ya kamata ya ƙare da:", options: ["Manufa mai shafuka 50", "Ƙa'ida ɗaya bayyananniya da wanda za a tambaya", "Babu ƙarshe", "Sayen manhaja"], answer: 1, why: "Ƙa'ida mai sauƙi ana tunawa da ita kuma ana bin ta." },
      { objective: "O6", q: "Bayan bayanin ya kamata ku:", options: ["Hana tambayoyi", "Kada ku sake ambaton AI", "Goge nunin", "Tura ƙa'idar a rubuce"], answer: 3, why: "Rubuta ta yana sa ta zauna." },
      { objective: "O6", q: "Idan mutane suna amfani da AI a aikinsu, wa yake ci gaba da ɗaukar alhakin wannan aikin?", options: ["Kamfanin AI", "Kayan aikin AI", "Mutanen da ke yin aikin", "Babu kowa"], answer: 2, why: "Alhaki yana ci gaba da kasancewa a wurin mutane." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 3, 5, 6, 8, 10, 11, 13, 15, 17] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Bayani mai sauƙi", objective: "O1", notYet: "Yana amfani da kalmomin fasaha masu wuya, ko yana haɗa generative AI da agentic AI.", meets: "Yana bayyana generative AI da agentic AI da kalmomi masu sauƙi.", exceeds: "Yana amfani da misali daga aikin ƙungiyar da kowa ya sani." },
      { name: "Amfani uku masu kyau", objective: "O3", notYet: "Amfani ƙasa da uku, ko amfanin da bai dace ba.", meets: "Yana ambaton amfani uku masu kyau a aikin ƙungiyar na gaske.", exceeds: "Yana faɗin waɗanne ke buƙatar mutum ya duba sakamakon." },
      { name: "Haɗura uku", objective: "O4", notYet: "Haɗuran gama-gari ne ko babu su.", meets: "Yana ambaton haɗura uku da suka dace da aikin ƙungiyar na gaske.", exceeds: "Yana ba da kariya ga kowane haɗari." },
      { name: "Misali kai tsaye", objective: "O5", notYet: "Babu misali, ko yana amfani da bayanan sirri.", meets: "Yana nuna misali ɗaya kai tsaye da mataimakin AI kyauta a kan aikin da ba na sirri ba.", exceeds: "Yana nuna tambayar biyo baya da yadda aka tabbatar da sakamakon." },
      { name: "Ƙa'ida", objective: "O6", notYet: "Babu ƙa'ida, ko ƙa'idar ba ta da sarari.", meets: "Yana ƙarewa da ƙa'ida ɗaya bayyananniya da kowa zai bi.", exceeds: "Yana ambaton wanda za a tambaya kuma yana tura ƙa'idar a rubuce bayan haka." }
    ]
  },
  evaluation: {
    results: [
      "Shugabannin da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Shugabannin da suka gabatar da bayanin ga ƙungiyarsu cikin kwanaki 30 (binciken biyo baya)",
      "Ƙungiyoyin da ke da rubutacciyar ƙa'idar AI cikin kwanaki 30 (binciken biyo baya)",
      "Shugabannin da suka ci gaba zuwa kwas na 2 na Jagoranci a Zamanin Agentic AI"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai mataimakin AI kyauta kamar ChatGPT, Copilot, Gemini ko Claude",
      "Jerin ayyukan ƙungiyarku na yau da kullum",
      "Takarda ko takardar kwamfuta don rubutu da tsarin bayanin",
      "Kusan minti 60 gaba ɗaya, da ƙarin bayanin minti goma ga ƙungiya"
    ],
    facilitatorNotes: [
      "Ku yi gwajin farko tare, sannan ku sa manajoji su faɗi aiki ɗaya da suka yi wa alama KYAU, KULAWA ko MARA KYAU da dalili.",
      "Ku yi nunin Darasi na 5 kai tsaye tare da rukunin, har da kuskure ɗaya da aka kama.",
      "Ku tunatar da kowa ya bi manufofin AI da bayanai na ƙungiyarsa, kuma kada ya yi amfani da bayanan sirri a atisaye.",
      "Ku bar shugabanni su gwada bayaninsu bibiyu kafin su gabatar da shi ga ƙungiyarsu.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku nemi rubutacciyar ƙa'idar a matsayin shaida."
    ]
  }
};
