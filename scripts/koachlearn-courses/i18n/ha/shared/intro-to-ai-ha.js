"use strict";

// Koach Learn course, Hausa (ha) translation of shared/intro-to-ai.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "intro-to-ai-ha",
  lang: "ha",
  translationOf: "intro-to-ai",
  category: "Seniors and Technology",
  name: "Gabatarwa ga Basirar Na'ura (AI)",
  skills: "Bayanin mene ne AI, Gane AI a rayuwar yau da kullum, Rubuta prompt a sarari, Inganta amsa da tabbatar da ita, Amfani da AI cikin adalci da aminci",
  outcome: "bayyana da kalmomi masu sauƙi mene ne basirar na'ura (AI) da yadda take koyo, gane ta a kayan da kuke amfani da su, da amfani da mataimakin AI kyauta don kammala aiki na gaske na yau da kullum: yin tambaya a sarari, inganta amsar, tabbatar da ita, da kiyaye bayanan sirri daga ciki.",
  about: [
    "Basirar na'ura, wato AI, tana cikin wayoyi, taswirori (maps), imel, shafukan sayayya da shafukan neman aiki. Wannan kwas ɗin yana bayyana mece ce da kalmomi masu sauƙi, sannan ya nuna muku yadda ake amfani da ita da kyau. Na kowa ne: kakanni, ɗalibai, masu neman aiki, masu aikin sa-kai da ƙananan ƙungiyoyi.",
    "A Babi na 1 za ku koyi mece ce AI, yadda take koyo daga misalai, da inda kuke haɗuwa da ita tun yanzu. A Babi na 2 za ku yi amfani da mataimakin AI kyauta don yin aiki na gaske, ku tabbatar da abin da ya faɗa, kuma ku yi amfani da shi cikin adalci da aminci.",
    "Kowane darasi yana ɗaukar kusan minti biyar: ku karanta, ku kalli hotunan bayani (slides), sannan ku yi aikin \"Gwada yanzu\". Akwai ɗan gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku zaɓi aiki ɗaya na gaske, kamar shirya abincin dare na iyali, saƙon neman masu aikin sa-kai, ko tsarin karatu na mako. Ku yi amfani da mataimakin AI kyauta don yin sa: ku rubuta prompt a sarari, ku nemi gyara biyu, ku tabbatar da bayani ɗaya a cikin amsar a shafin hukuma ko amintacce, kuma ku tabbata babu bayanan sirri a cikin prompt ɗin. Sannan ku bayyana wa aboki cikin jimloli uku mece ce AI da dalilin da yasa kuka tabbatar da amsar.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya da ba su saba da basirar na'ura (AI) ba: tsofaffi, ɗalibai, masu neman aiki, masu aikin sa-kai, mutanen da ke dawowa daga gidan yari, da ma'aikatan ƙungiyoyin sa-kai da ƙananan ƙungiyoyi. Da yawa sun ji labarin AI a labarai amma ba su taɓa amfani da mataimakin AI da gangan ba.",
    startingPoint: "Suna iya amfani da waya ko kwamfuta don buɗe burauzar intanet, rubuta gajeren saƙo da amfani da manhajoji (apps) da aka saba, kamar taswira, imel da bidiyo. Kaɗan ne za su iya faɗin mece ce AI, inda take a manhajojinsu, ko yadda ake neman taimakon mataimakin AI da tabbatar da abin da ya faɗa.",
    gap: "Yanzu AI tana cikin wayoyi, taswirori, imel, sayayya, banki da shafukan neman aiki, kuma mataimakan AI kyauta suna iya ceton lokaci sosai. Mutanen da ba su fahimce ta ba ko dai su guji kayan aiki mai amfani, ko su amince da shi fiye da kima, su bayyana bayanan sirri, ko su faɗa cikin zamba da ake yi da AI.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; ana bayyana kowace sabuwar kalma, kamar prompt, data da bias",
      "Na'urori: waya, tablet ko kwamfuta mai intanet da burauzar intanet",
      "Lokaci: darussa na minti 4 zuwa 6, kusan minti 60 gaba ɗaya",
      "Kuɗi: mataimakan AI kyauta kaɗai (ChatGPT, Microsoft Copilot ko Google Gemini); ba a buƙatar tsarin biya",
      "Sirri: masu koyo ba sa taɓa rubuta lambobin katin shaida, kalmomin sirri, bayanan banki, lambobin asibiti ko cikakken adireshi a mataimakin AI"
    ],
    prerequisites: "Babu. Masu koyo ya kamata su iya buɗe burauzar intanet su rubuta gajeren saƙo."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Ba tare da duba rubutu ba", action: "bayyana da kalmomi masu sauƙi mece ce basirar na'ura (AI) da generative AI, da dalilin da yasa AI za ta iya magana kamar ta tabbata amma ta yi kuskure", standard: "cikin jimloli biyu ko uku da ke amfani da ma'anar tsari (pattern) da hasashe" },
    { id: "O2", condition: "Idan aka ba ku misali mai sauƙi kamar matatar spam", action: "bayyana yadda AI take koyo daga data, da yadda data mara kyau ko ta gefe ɗaya ke kawo amsoshi masu son kai (bias)", standard: "kuna ambaton misalan, tsarin, da hanya ɗaya da hasashen zai iya zama rashin adalci" },
    { id: "O3", condition: "Ta amfani da wayarku ko kwamfutarku", action: "gane aƙalla wurare biyar da kuke amfani da AI tun yanzu, da nemo saiti ɗaya da ke sarrafa ta", standard: "da misalai biyar daidai da saiti ɗaya da aka buɗe" },
    { id: "O4", condition: "Ta amfani da mataimakin AI kyauta", action: "rubuta prompt a sarari da ke faɗin abin da kuke buƙata, halin da ake ciki, da yadda kuke son amsar", standard: "da dukkan sassa uku kuma babu bayanan sirri" },
    { id: "O5", condition: "Idan aka ba ku amsar farko daga mataimakin AI", action: "inganta amsar da tambayoyin biyo baya, da tabbatar da bayananta a majiya ta hukuma ko amintacciya", standard: "da aƙalla tambayoyin biyo baya biyu da aƙalla bayani ɗaya da aka tabbatar" },
    { id: "O6", condition: "Kafin ku aika prompt ko ku yi amfani da kalmomin da AI ta rubuta", action: "duba prompt ɗin don bayanan sirri, bin ƙa'idojin taimakon AI, da mayar da martani lafiya ga zamba da ake yi da AI", standard: "an maye kowane bayanin sirri da madadi, kuma an zaɓi mataki mai aminci daidai kowane lokaci" }
  ],
  chapters: [
    {
      name: "Babi na 1: Mece ce AI",
      lessons: [
        {
          objectives: ["O1"],
          title: "AI da kalmomi masu sauƙi",
          minutes: 4,
          goal: "Bayyana cikin jimloli biyu mece ce basirar na'ura (AI).",
          text: [
            "Basirar na'ura (artificial intelligence, AI) tana nufin shirye-shiryen kwamfuta da ke yin ayyukan da yawanci sai mutum: fahimtar magana, gane fuska a hoto, ba da shawarar waƙa, fassara jimla, ko rubuta amsar tambaya.",
            "AI ba ta tunani ko ji kamar mutum. Tana da ƙwarewa sosai wajen nemo tsari (pattern) a cikin misalai masu yawan gaske, da amfani da wannan tsarin don yin hasashe. Hasashe mai kyau yana iya kama da hikima; hasashe mara kyau ma yana iya zuwa da tabbaci iri ɗaya.",
            "Akwai nau'o'in AI da yawa. Wanda mutane suka fi magana a kai a yau shi ne generative AI (AI mai ƙirƙira): kayan aiki kamar ChatGPT, Microsoft Copilot da Google Gemini da ke ƙirƙirar sabon rubutu, hotuna ko sauti idan kun nema."
          ],
          words: [["Basirar na'ura (AI)", "shirye-shiryen kwamfuta da ke yin ayyukan da yawanci sai mutum, kamar fahimtar magana ko amsa tambayoyi."], ["Tsari (pattern)", "abin da ke maimaituwa ta hanyar da za a iya hasashe."], ["Generative AI (AI mai ƙirƙira)", "AI da ke ƙirƙirar sabon rubutu, hotuna ko sauti idan kun nema."]],
          slides: [
            { title: "AI ita ce...", bullets: ["Shirye-shiryen kwamfuta da ke yin ayyukan da yawanci sai mutum", "Magana, hotuna, shawarwari, fassara, rubutu"] },
            { title: "Yadda take aiki, a layi ɗaya", bullets: ["Tana nemo tsari a cikin misalai masu yawa", "Sannan ta yi hasashe mafi kyau"] },
            { title: "Ba mutum ba ce", bullets: ["Ba ta tunani ko ji", "Hasashe mara kyau yana iya zuwa da tabbaci kamar mai kyau"] },
            { title: "Generative AI (AI mai ƙirƙira)", bullets: ["Tana ƙirƙirar sabon rubutu, hotuna ko sauti", "Misalai: ChatGPT, Microsoft Copilot, Google Gemini"] }
          ],
          tryIt: "Ba tare da duba baya ba, ku faɗi ko ku rubuta jimloli biyu da ke bayyana AI ga wanda bai taɓa jin labarinta ba. Ku yi amfani da kalmomin \"tsari\" da \"hasashe\".",
          youCanNow: "bayyana da kalmomi masu sauƙi mece ce AI da dalilin da yasa za ta iya yin kuskure.",
          quickCheck: [
            { objective: "O1", q: "A wannan kwas, me generative AI take yi?", options: ["Tana jera imel cikin fayiloli kawai", "Tana ƙirƙirar sabon rubutu, hotuna ko sauti idan kun nema", "Tana tunani da ji kamar mutum", "Koyaushe ta san amsar gaskiya"], answer: 1, why: "Kayan generative AI kamar ChatGPT, Copilot da Gemini suna ƙirƙirar sabon rubutu, hotuna ko sauti." },
            { objective: "O1", q: "Wani aboki ya ce, \"AI ta yi magana kamar ta tabbata sosai, don haka dole ta yi daidai.\" Me za ku faɗa masa?", options: ["Gaskiya ne; AI ba ta taɓa kuskure idan ta yi magana da tabbaci", "Kayan AI na biya ne kaɗai ke iya kuskure", "AI tana hasashe daga tsari, don haka hasashe mara kyau yana iya zuwa da tabbaci iri ɗaya", "AI tana kuskure ne kawai idan intanet ya yi jinkiri"], answer: 2, why: "AI tana amfani da tsari don yin hasashe, kuma hasashe mara kyau yana iya zuwa da tabbaci kamar mai kyau." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Yadda AI take koyo daga misalai",
          minutes: 5,
          goal: "Bayyana yadda AI take koyo, da misali mai sauƙi.",
          text: [
            "Yawancin AI a yau tana koyo ne daga misalai, ba daga ƙa'idojin da mutum ya rubuta ba. Don koya wa shiri gane imel na spam (saƙon banza), mutane suna nuna masa imel masu yawa da aka yi wa alama \"spam\" ko \"ba spam ba\". Shirin yana nemo tsarin, kamar wasu kalmomi ko hanyoyin haɗi (links) masu ban mamaki, sannan ya yi amfani da su a kan sababbin imel.",
            "Misalan da take koyo daga gare su ana kiransu data (bayanai). Data mai kyau mai bambanci tana sa AI ta fi kyau. Idan data tsohuwa ce, ta gefe ɗaya ce, ko babu wasu rukunin mutane a cikinta, hasashen AI ma zai zama tsoho, na gefe ɗaya, ko rashin adalci. Ana kiran wannan bias (son kai).",
            "Kayan rubutu kamar ChatGPT sun koya daga rubutu mai yawan gaske, don haka suna da ƙwarewa wajen hasashen waɗanne kalmomi ya kamata su biyo baya. Shi yasa suke rubutu cikin sauƙi, kuma shi yasa suke iya rubuta abin da yake kama da daidai amma ba gaskiya ba ne."
          ],
          steps: ["Mutane suna tattara misalai masu yawa (data).", "Shirin yana neman tsari a cikin misalan.", "Yana amfani da tsarin don yin hasashe game da sabon abu.", "Mutane suna duba hasashen kuma suna ba shi misalai mafi kyau idan ya yi kuskure."],
          words: [["Data (bayanai)", "misalai, lambobi, kalmomi ko hotunan da AI take koyo daga gare su."], ["Bias (son kai)", "lokacin da data ta karkata gefe ɗaya, don haka hasashen AI ya zama rashin adalci ga wasu mutane."], ["Training (horarwa)", "matakin da AI take koyon tsari daga data."]],
          slides: [
            { title: "Koyo daga misalai", bullets: ["Ku nuna mata imel masu yawa da alamar spam ko ba spam ba", "Tana nemo tsarin", "Tana jera sababbin imel bisa wannan tsarin"] },
            { title: "Data tana da muhimmanci", bullets: ["Data mai kyau mai bambanci = hasashe mafi kyau", "Data tsohuwa ko ta gefe ɗaya = hasashe tsoho ko rashin adalci"] },
            { title: "Dalilin da yasa AI ta rubutu ke iya kuskure", bullets: ["Tana hasashen kalmomi na gaba daga tsari", "Tana iya yin kama da daidai amma ba gaskiya ba"] }
          ],
          tryIt: "Ku yi tunanin wani abu da kuka koya daga misalai, kamar bambance 'ya'yan itace da suka nuna da waɗanda ba su nuna ba. Ku rubuta yadda za ku koya wa kwamfuta abu ɗaya: waɗanne misalai za ku nuna mata, kuma me za ta iya yin kuskure a kai?",
          youCanNow: "bayyana yadda AI take koyo daga data da dalilin da yasa data mara kyau ke kawo amsoshi marasa kyau ko rashin adalci.",
          quickCheck: [
            { objective: "O2", q: "Mene ne bias (son kai) a AI?", options: ["Hasashen da ke karkata gefe ɗaya domin data tsohuwa ce, ta gefe ɗaya ce, ko babu wasu rukunin mutane a ciki", "Saitin da ke sa AI ta yi sauri", "Wani nau'in ƙwayar cutar kwamfuta (virus)", "Hanyar ƙara hasken allo"], answer: 0, why: "Idan misalan na gefe ɗaya ne ko babu wasu rukunin mutane, hasashen AI ma ya zama rashin adalci." },
            { objective: "O2", q: "Kuna son koya wa shiri bambance 'ya'yan itace da suka nuna da waɗanda ba su nuna ba. Me za ku fara yi?", options: ["Ku rubuta ƙa'ida ɗaya ku yi fatan ta yi aiki", "Ku nuna masa hoton ayaba ɗaya kawai", "Ku ce ya yi hasashe ba tare da misalai ba", "Ku nuna masa hotunan 'ya'yan itace masu yawa, kowanne da alamar ya nuna ko bai nuna ba"], answer: 3, why: "AI tana koyo ta hanyar nemo tsari a cikin misalai masu yawa da aka yi wa alama, wato data." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Gane AI a rayuwarku ta yau",
          minutes: 4,
          goal: "Nemo aƙalla wurare biyar da kuke amfani da AI tun yanzu.",
          text: [
            "Wataƙila kuna amfani da AI kowace rana ba tare da kun kira ta haka ba. Taswirar wayarku tana zaɓar hanya mafi sauri don guje wa cunkoso. Imel ɗinku yana tura saƙonnin banza zuwa fayil ɗin spam. Manhajojin bidiyo da waƙa suna ba da shawarar abin da za ku kalla na gaba. Wayarku tana buɗewa da fuskarku. Madannin rubutunku (keyboard) yana ba da shawarar kalma ta gaba.",
            "Mataimakan murya kamar Siri, Google Assistant da Alexa suna amfani da AI don fahimtar abin da kuke faɗa. Bankuna suna amfani da AI don gane biyan kuɗi da kati da ya yi kama da baƙon abu. Shafukan neman aiki suna amfani da ita don haɗa takardar bayanin aikinku (résumé) da guraben aiki.",
            "Sanin inda AI take yana taimaka muku yin tambayoyi masu kyau: me yasa manhajar ta ba da wannan shawara? Zan iya kashe ta? Me ta sani game da ni? Yawancin manhajoji suna da saituna (settings) inda za ku iya gani ko canja wannan."
          ],
          words: [["Mataimakin murya (voice assistant)", "AI da kuke magana da ita da babbar murya, kamar Siri, Google Assistant ko Alexa."], ["Shawara (recommendation)", "abin da manhaja take ba da shawara bisa abin da ku ko mutane kamarku suka zaɓa a baya."]],
          slides: [
            { title: "AI da kuke amfani da ita tun yanzu", bullets: ["Taswirori da ke guje wa cunkoso", "Matatar spam a imel", "Shawarwarin bidiyo, waƙoƙi da kayayyaki"] },
            { title: "Ƙarin AI na yau da kullum", bullets: ["Buɗe waya da fuska", "Mataimakan murya: Siri, Google Assistant, Alexa", "Saƙon banki game da amfani da kati da ba a saba ba"] },
            { title: "Tambayoyi masu kyau", bullets: ["Me yasa ta ba da wannan shawara?", "Zan iya kashe ta?", "Me ta sani game da ni? Ku duba saituna"] }
          ],
          tryIt: "Ku duba wayarku ko kwamfutarku ku rubuta wurare biyar da ke amfani da AI. Ga ɗaya daga cikinsu, ku buɗe saitunansa ku nemo zaɓi ɗaya da za ku iya canjawa.",
          youCanNow: "gane AI a kayan aikin da kuke amfani da su kowace rana da nemo saitunan da ke sarrafa ta.",
          quickCheck: [
            { objective: "O3", q: "Wanne daga cikin waɗannan ke amfani da AI don fahimtar abin da kuke faɗa?", options: ["Kalandar takarda", "Fitilar tebur", "Mataimakin murya kamar Siri ko Alexa", "Jadawalin motar bas na takarda"], answer: 2, why: "Mataimakan murya suna amfani da AI don fahimtar magana." },
            { objective: "O3", q: "Wata manhajar waƙa tana ta ba da shawarar waƙoƙin da ba ku so, kuma kuna mamakin me ta sani game da ku. Me za ku yi?", options: ["Ku goge wayarku", "Ku buɗe saitunan manhajar don gani ko canja abin da take amfani da shi", "Ku daina sauraron waƙa", "Ku rubuta kalmar sirrinku a akwatin bincike"], answer: 1, why: "Yawancin manhajoji suna da saitunan da za ku iya gani ko canja yadda shawarwari ke aiki." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Mece ce AI",
        questions: [
          { objective: "O1", q: "Wane ne mafi kyawun bayanin AI da kalmomi masu sauƙi?", options: ["Mutum-mutumi (robot) da ke tunani da ji", "Shafin intanet da koyaushe ke daidai", "Wani nau'in wayar intanet (cable)", "Shirye-shiryen kwamfuta da ke nemo tsari suna yin hasashe don yin ayyukan da mutane suka saba yi"], answer: 3, why: "AI tana nemo tsari a cikin misalai tana amfani da su don yin hasashe." },
          { objective: "O1", q: "Me generative AI take yi?", options: ["Tana gyara wayoyin da suka lalace", "Tana cajin batirinku", "Tana ajiye fayiloli kawai", "Tana ƙirƙirar sabon rubutu, hotuna ko sauti idan kun nema"], answer: 3, why: "Generative tana nufin tana ƙirƙirar sabon abu." },
          { objective: "O2", q: "An horar da wata AI da hotunan rukunin mutane ɗaya kawai. Mene ne matsalar da za ta iya tasowa?", options: ["Za ta yi aiki iri ɗaya ga kowa", "Za ta yi sauri", "Hasashenta zai iya zama rashin adalci ko kuskure ga sauran rukunoni", "Za ta daina aiki"], answer: 2, why: "Data ta gefe ɗaya tana kawo bias (son kai)." },
          { objective: "O2", q: "Mene ne \"data\" a AI?", options: ["Misalan da AI take koyo daga gare su", "Allon wayar", "Wani nau'in kalmar sirri", "Farashin manhajar"], answer: 0, why: "Data su ne misalai, kalmomi, lambobi ko hotunan da AI take koyo daga gare su." },
          { objective: "O3", q: "Wanne daga cikin waɗannan amfani ne na AI na yau da kullum?", options: ["Makunnin fitila", "Kalandar takarda", "Manhajar taswira da ke zaɓar hanya don guje wa cunkoso", "Agogon da ake murzawa"], answer: 2, why: "Manhajojin taswira suna amfani da AI don hasashen cunkoso da zaɓar hanya." }
        ]
      }
    },
    {
      name: "Babi na 2: Amfani da AI da kyau",
      lessons: [
        {
          objectives: ["O4"],
          title: "Neman taimakon mataimakin AI",
          minutes: 5,
          goal: "Buɗe mataimakin AI kyauta ku rubuta prompt mai sassa uku a sarari.",
          text: [
            "Mataimakan AI kyauta sun haɗa da ChatGPT (chatgpt.com), Microsoft Copilot (copilot.microsoft.com) da Google Gemini (gemini.google.com). Suna aiki a burauzar intanet ko a matsayin manhaja daga shagon manhajoji na hukuma.",
            "Abin da kuke rubutawa ana kiransa prompt (umarni). Prompt mai sarari yana da sassa uku: abin da kuke buƙata, ɗan bayani game da halin da ake ciki, da yadda kuke son amsar. Misali: \"Ina gudanar da ƙaramin rumbun abinci na coci. Ka rubuta saƙo mai fara'a mai layi 4 na neman masu aikin sa-kai na ranar Asabar. Ka yi amfani da kalmomi masu sauƙi.\"",
            "Prompt mai kalma ɗaya kamar \"masu aikin sa-kai\" yana sa AI ta yi hasashen abin da kuke nufi, don haka amsar ta zama ta gama-gari kuma ba ta da amfani sosai."
          ],
          steps: ["Ku buɗe mataimakin AI a burauzar ko a manhajar hukuma.", "Ku faɗi abin da kuke buƙata.", "Ku ƙara halin da ake ciki, ba tare da bayanan sirri ba.", "Ku faɗi yadda kuke son amsar: tsawo, jeri, matakai, kalmomi masu sauƙi.", "Ku aika ku karanta amsar."],
          words: [["Prompt (umarni)", "abin da kuke rubutawa ko faɗa wa mataimakin AI don neman wani abu."], ["Mataimakin AI", "shirin AI da kuke hira da shi ta rubutu ko magana, kamar ChatGPT, Copilot ko Gemini."]],
          slides: [
            { title: "Mataimakan AI kyauta", bullets: ["chatgpt.com", "copilot.microsoft.com", "gemini.google.com"] },
            { title: "Sassa uku na prompt mai sarari", bullets: ["1. Abin da kuke buƙata", "2. Halin da ake ciki (babu bayanan sirri)", "3. Yadda kuke son amsar"] },
            { title: "Misali", bullets: ["\"Ina gudanar da ƙaramin rumbun abinci. Ka rubuta saƙo mai fara'a mai layi 4", "na neman masu aikin sa-kai na Asabar. Ka yi amfani da kalmomi masu sauƙi.\""] }
          ],
          tryIt: "Ku buɗe mataimakin AI kyauta ɗaya. Ku rubuta prompt mai sassa uku don wani aiki na gaske a wannan makon, kamar saƙon taya murnar ranar haihuwa, tsarin karatu ko jerin kayan sayayya, sannan ku aika.",
          youCanNow: "buɗe mataimakin AI kyauta da rubuta prompt a sarari da ke kawo amsar farko mai amfani.",
          quickCheck: [
            { objective: "O4", q: "Mene ne prompt?", options: ["Abin da kuke rubutawa ko faɗa wa mataimakin AI", "Gargaɗi daga wayarku", "Amsar AI", "Wani nau'in kalmar sirri"], answer: 0, why: "Prompt shi ne abin da kuke ba mataimakin AI don faɗa masa abin da kuke buƙata." },
            { objective: "O4", q: "Kuna buƙatar gajeren saƙon taya murnar ranar haihuwa ga innarku. Wane prompt za ku aika?", options: ["\"Ranar haihuwa\"", "\"Rubuta wani abu\"", "\"Saƙo\"", "\"Ka rubuta saƙon taya murnar ranar haihuwa mai daɗi mai layi 3 ga innata, wadda take son aikin lambu. Ka yi amfani da kalmomi masu sauƙi.\""], answer: 3, why: "Yana faɗin abin da kuke buƙata, halin da ake ciki da yadda kuke son amsar." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Inganta amsa da tabbatar da ita",
          minutes: 5,
          goal: "Inganta amsa da tambayoyin biyo baya, ku tabbatar da bayananta.",
          text: [
            "Ku ɗauki amsar farko a matsayin daftari. A cikin hira ɗaya kuna iya cewa: \"Ka gajarta ta.\" \"Ka yi amfani da kalmomi masu sauƙi.\" \"Ka ba ni zaɓuɓɓuka uku.\" \"Ka sa ta a tebur.\" Mataimakin yana tuna saƙonnin da suka gabata a cikin wannan hirar.",
            "AI tana iya ƙirƙirar abubuwa: ranar da ba daidai ba, lambar wayar da babu ita, tsohuwar ƙa'ida. Ana kiran wannan hallucination (hasashen ƙarya). Ku tabbatar da duk wani bayani game da kuɗi, lafiya, doka, tallafi, ranaku, adireshi ko lambobin waya a shafin hukuma (shafukan gwamnatin Amurka suna ƙarewa da .gov) ko wajen wanda ya sani, kamar likita, ma'aikacin ɗakin karatu ko mai kula da shari'arku (case manager).",
            "Ku tambayi mataimakin \"A ina zan tabbatar da wannan?\" sannan ku je wannan shafin da kanku."
          ],
          steps: ["Ku karanta amsar farko.", "Ku nemi canji ɗaya a lokaci ɗaya.", "Ku ja layi a ƙarƙashin bayanan gaskiya: lambobi, ranaku, sunaye, ƙa'idoji.", "Ku tabbatar da kowane bayani a majiya ta hukuma ko amintacciya.", "Idan ba su yi daidai ba, ku amince da majiyar hukuma."],
          words: [["Tambayar biyo baya (follow-up)", "saƙo na biyu da ke neman AI ta canja ko ta bayyana amsarta."], ["Hallucination (hasashen ƙarya)", "lokacin da AI ta rubuta abin da yake kama da gaskiya amma ƙirƙirarre ne."]],
          slides: [
            { title: "Amsar farko daftari ce", bullets: ["\"Ka gajarta ta.\"", "\"Ka yi amfani da kalmomi masu sauƙi.\"", "\"Ka ba ni zaɓuɓɓuka uku.\""] },
            { title: "AI tana iya ƙirƙirar abubuwa", bullets: ["Ranaku, lambobi ko ƙa'idoji marasa daidai", "Ofisoshi ko littattafan da babu su"] },
            { title: "Ku tabbatar kafin ku amince", bullets: ["Kuɗi, lafiya, doka, tallafi, ranaku, lambobin waya", "Shafukan hukuma (.gov) ko wanda ya sani"] }
          ],
          tryIt: "Ku ɗauki amsarku daga darasin da ya gabata. Ku nemi canje-canje biyu, ɗaya bayan ɗaya. Sannan ku zaɓi bayani ɗaya a ciki ku tabbatar da shi a shafin hukuma ko amintacce.",
          youCanNow: "inganta amsar AI da tambayoyin biyo baya da tabbatar da bayananta kafin ku yi amfani da ita.",
          quickCheck: [
            { objective: "O5", q: "Mene ne hallucination a AI?", options: ["Lokacin da batirin AI ya ƙare", "Lokacin da AI ta ƙi amsawa", "Lokacin da AI ta ƙirƙiri abin da yake kama da gaskiya", "Lokacin da AI ta amsa da wani harshe"], answer: 2, why: "AI tana iya ƙirƙirar rana, lamba ko ƙa'ida marar daidai da ke kama da gaskiya; wannan shi ne hallucination." },
            { objective: "O5", q: "Wata amsar AI ta ba da ranar ƙarshe ta cike takardar tallafi. Me za ku yi kafin ku dogara da ita?", options: ["Ku tabbatar da ranar a shafin hukuma ko wajen wanda ya sani", "Ku amince da ita domin daga AI ta fito", "Ku sake tambayar AI tambaya iri ɗaya ku yi amfani da wannan", "Ku fara raba ta ga abokai"], answer: 0, why: "Bayanai game da ranaku, kuɗi, tallafi da ƙa'idoji ya kamata a tabbatar da su a majiyar hukuma." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Amfani da AI cikin adalci da aminci",
          minutes: 5,
          goal: "Yi amfani da AI ba tare da bayyana bayanan sirri ba, cikin adalci da gaskiya.",
          text: [
            "Kada ku rubuta bayanan sirri a mataimakin AI: lambar Social Security (lambar shaidar Amurka) ko lambobin katin shaida, kalmomin sirri, lambobin banki ko kati, lambobin takardun asibiti ko cikakken adireshin gida. Ku rubuta \"[lambata]\" a maimakon haka. Kamfanin yana iya ajiye hirarku.",
            "Ku faɗi gaskiya game da taimakon AI. Makarantu da wuraren aiki da yawa suna da ƙa'idoji a kai, don haka ku tambaya kafin ku miƙa aikin da AI ta rubuta. Ku karanta ku canja abin da ta rubuta don ya yi kama da ku kuma ya faɗi abin da kuke nufi.",
            "Ku tuna da bias (son kai): idan amsa ta yi kama da rashin adalci ga wani rukunin mutane, ku yi mata tambaya. Kuma ku yi hankali da zamba da ake yi da AI, kamar muryoyin bogi na 'yan uwa da ke neman kuɗi. Ku tsaya, ku katse wayar, ku sake kira ta lambar da kuka sani."
          ],
          steps: ["Ku karanta prompt ɗinku don bayanan sirri kafin ku aika.", "Ku maye bayanan sirri da madadi.", "Ku duba ƙa'idojin makarantarku ko wurin aikinku game da taimakon AI.", "Ku mayar da kalmomin ƙarshe naku.", "Ku ɗauki neman kuɗi cikin gaggawa a matsayin alamar gargaɗi."],
          words: [["Bayanan sirri", "bayanan da za su iya bar wani ya yi kamar shi ne ku, ko ya ɗauki kuɗinku."], ["Madadi (placeholder)", "abin da kuke rubutawa a maimakon ainihin bayani, kamar \"[lambata]\"."]],
          slides: [
            { title: "Kada ku saka su a AI", bullets: ["Lambobin katin shaida da na Social Security", "Kalmomin sirri, lambobin banki da kati", "Lambobin takardun asibiti, cikakken adireshin gida"] },
            { title: "Ku faɗi gaskiya", bullets: ["Ku bi ƙa'idojin AI na makarantarku ko wurin aikinku", "Ku gyara kalmomin don su zama naku"] },
            { title: "Ku yi hankali", bullets: ["Ku yi tambaya kan amsoshin da suka yi kama da rashin adalci", "Muryoyin bogi suna iya neman kuɗi: ku katse ku sake kira"] }
          ],
          tryIt: "Aikin ƙarshe: ku zaɓi aiki na gaske, ku rubuta prompt a sarari ba tare da bayanan sirri ba, ku nemi gyara biyu, ku tabbatar da bayani ɗaya a shafi amintacce, sannan ku bayyana AI ga aboki cikin jimloli uku.",
          youCanNow: "amfani da AI don kammala aiki na gaske yayin da kuke kiyaye bayanan sirri da amfani da ita cikin gaskiya.",
          quickCheck: [
            { objective: "O6", q: "Me yasa ya kamata ku kiyaye bayanan sirri daga hirar AI?", options: ["Yana tsawaita amsar", "Mataimakan AI ba sa iya karanta lambobi", "Ya saɓa wa ƙa'idojin kowace makaranta", "Kamfanin yana iya ajiye hirarku"], answer: 3, why: "Kamfanin yana iya ajiye hirarku, don haka lambobin katin shaida, banki da na asibiti kada su taɓa shiga." },
            { objective: "O6", q: "Kun sami kira da muryar jikanku yana neman ku aika kuɗi yanzu. Me za ku yi?", options: ["Ku aika kuɗin da sauri", "Ku katse wayar ku sake kiransa ta lambar da kuka sani", "Ku ba da lambar katin bankinku don tabbatar shi ne", "Ku ce mai kiran ya aiko da tes a maimakon haka"], answer: 1, why: "AI tana iya kwaikwayon murya, don haka ku tsaya ku sake kira ta lambar da kuka riga kuka sani." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Amfani da AI da kyau",
        questions: [
          { objective: "O4", q: "Wane prompt ne ya fi sarari?", options: ["\"masu aikin sa-kai\"", "\"taimako\"", "\"abubuwan Asabar\"", "\"Ina gudanar da rumbun abinci. Ka rubuta saƙo mai fara'a mai layi 4 na neman masu aikin sa-kai na Asabar. Ka yi amfani da kalmomi masu sauƙi.\""], answer: 3, why: "Yana ba da buƙata, halin da ake ciki da tsarin amsa." },
          { objective: "O5", q: "Amsar tana amfani da kalmomi masu wuya. Me za ku rubuta a gaba?", options: ["\"Ka yi amfani da kalmomi masu sauƙi.\"", "Kalmar sirrinku", "Babu komai; ku rufe manhajar", "\"Ka sake farawa har abada.\""], answer: 0, why: "Tambayar biyo baya tana neman AI ta canja amsarta." },
          { objective: "O5", q: "AI ta ba da lambar wayar ofishin tallafi. Me ya kamata ku yi?", options: ["Ku kira ta nan take", "Ku raba ta a kafafen sada zumunta", "Ku tabbatar da ita a shafin hukuma na ofishin", "Ku tambayi AI ko ta tabbata ku amince"], answer: 2, why: "AI tana iya ƙirƙirar lambobi; shafin hukuma ne majiya amintacciya." },
          { objective: "O6", q: "Me ya kamata ku rubuta a maimakon lambar katin bankinku a cikin prompt?", options: ["Ainihin lambar", "Lambar PIN ɗinku", "Lambobi 12 na ƙarshe", "Madadi kamar \"[katina]\""], answer: 3, why: "Madadi yana bar ku samun taimako ba tare da bayyana bayanan sirri ba." },
          { objective: "O6", q: "Kuna son miƙa aikin gida da AI ta taimaka wajen rubutawa. Me ya kamata ku fara yi?", options: ["Ku duba ƙa'idojin makarantarku game da taimakon AI", "Ku miƙa shi ba tare da karantawa ba", "Ku kwafi na aboki", "Ku goge shi"], answer: 0, why: "Makarantu da wuraren aiki suna da ƙa'idoji game da taimakon AI; gaskiya ce farko." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Gabatarwa ga Basirar Na'ura (AI)",
    questions: [
      { objective: "O1", q: "Mafi kyawun bayanin AI shi ne:", options: ["Mutum a cikin kwamfuta", "Wani nau'in waya", "Shirye-shiryen da ke amfani da tsari don yin ayyukan da mutane suka saba yi", "Wani nau'in adireshin imel"], answer: 2, why: "AI tana nemo tsari tana yin hasashe don yin ayyuka." },
      { objective: "O1", q: "Me yasa AI za ta iya magana kamar ta tabbata amma ta yi kuskure?", options: ["Tana wasa ne", "Ba ta taɓa kuskure", "Batirinta ya yi ƙasa", "Tana yin hasashe mafi kyau daga tsari, ba daga sanin gaskiya ba"], answer: 3, why: "AI tana hasashe daga tsari, kuma hasashe mara kyau yana iya zuwa da tabbaci." },
      { objective: "O1", q: "Wane kayan aiki ne generative AI?", options: ["Na'urar lissafi (calculator)", "Taswirar takarda", "Google Gemini", "Makunnin fitila"], answer: 2, why: "Gemini tana ƙirƙirar sabon rubutu idan kun nema, don haka generative AI ce." },
      { objective: "O2", q: "Ta yaya yawancin shirye-shiryen AI ke koyo a yau?", options: ["Daga misalai masu yawa (data)", "Daga karanta tunaninku", "Ta hanyar hasashe ba tare da misalai ba", "Daga batirin wayar"], answer: 0, why: "Suna koyon tsari daga data." },
      { objective: "O2", q: "An horar da matatar spam da dubban imel da aka yi wa alama spam ko ba spam ba. Wannan misali ne na:", options: ["Horarwa da data", "Cajin waya", "Aika tes", "Kalmar sirri"], answer: 0, why: "Koyo daga misalan da aka yi wa alama shi ne horarwa (training)." },
      { objective: "O2", q: "Mene ne bias (son kai) a AI?", options: ["Kwamfuta mai sauri", "Data da ta karkata gefe ɗaya, tana sa hasashe ya zama rashin adalci ga wasu mutane", "Wani nau'in prompt", "Saitin waya na haske"], answer: 1, why: "Data ta gefe ɗaya tana kawo hasashe na rashin adalci." },
      { objective: "O3", q: "Wanne ne misalin AI na yau da kullum?", options: ["Injin ɗinka takardu (stapler)", "Manhajar bidiyo da ke ba da shawarar abin da za a kalla na gaba", "Ambulan na takarda", "Mabuɗin ƙofa"], answer: 1, why: "Shawarwari suna fitowa daga AI." },
      { objective: "O3", q: "Siri, Google Assistant da Alexa su ne:", options: ["Bankuna", "Mataimakan murya da ke amfani da AI", "Adireshin imel", "Firintoci"], answer: 1, why: "Suna amfani da AI don fahimtar magana." },
      { objective: "O3", q: "Wata manhaja tana ta ba da shawarar abubuwan da ba ku so. Mataki na farko mai kyau shi ne:", options: ["Jefar da wayar", "Duba saitunan manhajar don abin da za ku iya canjawa", "Ba ta kalmar sirrinku", "Daina amfani da dukkan manhajoji har abada"], answer: 1, why: "Yawancin manhajoji suna da saitunan da ke sarrafa shawarwari." },
      { objective: "O4", q: "Mene ne prompt?", options: ["Cajar waya", "Abin da kuke rubutawa ko faɗa wa mataimakin AI", "Ƙarshen adireshin shafi", "Wani nau'in ƙwayar cutar kwamfuta"], answer: 1, why: "Prompt shi ne buƙatarku ga AI." },
      { objective: "O4", q: "Wane adireshi ne ke buɗe mataimakin AI na Microsoft?", options: ["copilot.microsoft.com", "free-ai-prize.win", "microsoft-gift.xyz", "copilot.bank"], answer: 0, why: "copilot.microsoft.com shi ne adireshin hukuma na Microsoft." },
      { objective: "O4", q: "Prompt mai sarari yana da waɗanne sassa uku?", options: ["Suna, kalmar sirri, adireshi", "Abin da kuke buƙata, halin da ake ciki, yadda kuke son amsar", "Launi, girma, farashi", "Sannu, na gode, sai an jima"], answer: 1, why: "Waɗannan sassa uku suna kawo amsa mai amfani." },
      { objective: "O5", q: "Amsar farko ta yi tsawo sosai. Ya kamata ku:", options: ["Karɓe ta duk da haka", "Biya don sabuwar manhaja", "Ce \"Ka gajarta ta.\"", "Fara rubuta bayanan sirri"], answer: 2, why: "Tambayar biyo baya tana canja amsar." },
      { objective: "O5", q: "\"Hallucination\" a AI tana nufin:", options: ["AI ta ƙirƙiri abin da yake kama da gaskiya", "Allon ya dushe", "Manhajar kyauta ce", "An kashe AI"], answer: 0, why: "AI tana iya ƙirƙirar bayanan da suke kama da na gaske." },
      { objective: "O5", q: "Wanne ya kamata ku tabbatar da majiyar hukuma koyaushe?", options: ["Waƙar ranar haihuwa", "Barkwanci", "Jerin launukan biki", "Ranar ƙarshe ta biyan haraji"], answer: 3, why: "Ranaku, kuɗi da ƙa'idoji suna iya zama ba daidai ba kuma dole a tabbatar da su." },
      { objective: "O5", q: "Shafukan gwamnatin Amurka yawanci suna ƙarewa da:", options: [".win", ".shop", ".gov", ".xyz"], answer: 2, why: "Shafukan gwamnatin Amurka suna amfani da .gov." },
      { objective: "O6", q: "Wanne ne lafiya a rubuta a mataimakin AI?", options: ["Lambar Social Security ɗinku", "\"[lambata]\" a matsayin madadi", "Kalmar sirrin bankinku", "Lambar tsaron katinku"], answer: 1, why: "Madadi yana kiyaye bayanan sirri daga ciki." },
      { objective: "O6", q: "Kafin ku yi amfani da kalmomin da AI ta rubuta don makaranta ko aiki, ya kamata ku:", options: ["Duba ƙa'idoji ku mayar da kalmomin naku", "Miƙa su ba tare da karantawa ba", "Cire sunanku", "Fara saka su a intanet"], answer: 0, why: "Amfani da gaskiya yana nufin bin ƙa'idoji da gyara aikin." },
      { objective: "O6", q: "Wata amsar AI ta yi kama da rashin adalci ga wani rukunin mutane. Me za ku yi?", options: ["Ku yaɗa ta sosai", "Ku yi mata tambaya ku duba wasu majiyoyi", "Ku ɗauka gaskiya ce", "Ku canja kalmar sirrinku"], answer: 1, why: "Bias yana iya bayyana a cikin amsoshi; ku yi masa tambaya." },
      { objective: "O6", q: "Wani kira da muryar ɗan uwa yana neman ku aika kuɗi yanzu. Ya kamata ku:", options: ["Aika da sauri", "Karanta musu lambar katinku", "Ba su code daga wayarku", "Katse wayar ku sake kiran ɗan uwan ta lambar da kuka sani"], answer: 3, why: "AI tana iya kwaikwayon murya; sake kira ta lambar da kuka sani yana dakatar da zambar." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      1,
      5,
      6,
      9,
      11,
      13,
      14,
      16,
      19
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Bayanin AI",
        objective: "O1",
        notYet: "Babu bayani, ko ba daidai ba ne, ko bai faɗi dalilin da yasa aka tabbatar da amsar ba.",
        meets: "Jimloli uku masu sauƙi suna faɗin mece ce AI, cewa tana hasashe daga tsari, da dalilin da yasa aka tabbatar da amsar.",
        exceeds: "Yana kuma ba da misali na yau da kullum kuma ya ambaci cewa data mara kyau tana iya sa amsoshi su zama rashin adalci."
      },
      {
        name: "Prompt a sarari",
        objective: "O4",
        notYet: "Prompt ɗin kalma ɗaya ko biyu ne, ko bai faɗi abin da ake buƙata ba.",
        meets: "Prompt ɗin yana faɗin abin da ake buƙata, halin da ake ciki da yadda ake son amsar.",
        exceeds: "Prompt ɗin yana kuma sanya tsawo ko tsari kuma ya kawo amsar farko mai amfani."
      },
      {
        name: "Inganta amsar",
        objective: "O5",
        notYet: "Ba a yi tambayar biyo baya ba, ko an yi amfani da amsar farko kamar yadda take.",
        meets: "An yi tambayoyin biyo baya biyu, ɗaya bayan ɗaya, kuma amsar ta inganta.",
        exceeds: "An kuma canja kalmomin ƙarshe don su yi kama da mai koyo."
      },
      {
        name: "Tabbatar da bayani",
        objective: "O5",
        notYet: "Ba a tabbatar da wani bayani ba, ko an tabbatar ne kawai ta hanyar sake tambayar AI.",
        meets: "An tabbatar da bayani ɗaya a shafin hukuma ko amintacce.",
        exceeds: "An tabbatar da kowane bayani game da ranaku, kuɗi, ƙa'idoji ko lambobin waya, kuma an gyara duk wani bambanci."
      },
      {
        name: "Sirri da gaskiya",
        objective: "O6",
        notYet: "Prompt ɗin yana da bayanin sirri kamar lambar katin shaida, kalmar sirri ko cikakken adireshi.",
        meets: "Babu bayanan sirri a cikin prompt ɗin; duk wani bayanin kai madadi ne.",
        exceeds: "An kuma duba ƙa'idojin makaranta ko wurin aiki game da taimakon AI inda suka shafa."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka sami \"Ya cika\" ko \"Ya wuce\" a kowane layin rubric na aikin ƙarshe",
      "Masu koyo da suka ce sun yi amfani da mataimakin AI kyauta don aiki na gaske cikin kwanaki 30 bayan kwas ɗin (binciken biyo baya)",
      "Masu koyo da suka ce sun tabbatar da amsar AI a majiyar hukuma, ko sun gane kuma sun guji kira ko saƙon zamba",
      "Masu koyo da suka ci gaba zuwa wani kwas, kamar Digital Literacy Basics (Tushen Ilimin Fasahar Zamani) ko Intro to Cybersecurity (Gabatarwa ga Tsaron Intanet)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya, tablet ko kwamfuta mai intanet da burauzar intanet",
      "Mataimakin AI kyauta: ChatGPT, Microsoft Copilot ko Google Gemini (babu biyan kuɗi)",
      "Takarda da alƙalami don rubuta prompt, tambayoyin biyo baya da bayanin da aka tabbatar",
      "Kusan minti 60 gaba ɗaya, a gajerun zama"
    ],
    facilitatorNotes: [
      "Ku yi gwajin farko tare, sannan ku koyar da babi ɗaya a kowane zama, ana yin ayyukan \"Gwada yanzu\" bibbiyu; ku haɗa masu koyo da ba su saba da na'urori ba da abokin aiki mai ƙarfin gwiwa.",
      "Wasu mataimakan kyauta suna neman masu koyo su shiga asusu; ku bar kowane mai koyo ya yanke ko zai buɗe asusu, kuma ku nuna waɗanda ke aiki ba tare da shiga asusu ba inda akwai.",
      "Kafin kowa ya aika prompt, ku ce ya karanta shi da babbar murya ya maye duk wani bayanin sirri da madadi kamar \"[lambata]\".",
      "Ku shirya shafin hukuma ɗaya ga kowane rukuni don aikin tabbatarwa (misali shafin .gov ko shafin ɗakin karatu na yankin) don masu koyo su yi atisayen tabbatar da bayani na gaske.",
      "Ku tattauna zambar kwaikwayon murya a fili; ku faɗa wa masu koyo su katse wayar su sake kiran 'yan uwa ta lambar da suka sani, kuma ku ba da hanyar kai rahoton zamba ta yankinku idan shirinku yana da ita."
    ]
  }
};
