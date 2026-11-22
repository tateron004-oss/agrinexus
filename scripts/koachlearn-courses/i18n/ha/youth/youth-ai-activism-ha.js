"use strict";

// Koach Learn course, Hausa (ha) translation of youth/youth-ai-activism.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "youth-ai-activism-ha",
  lang: "ha",
  translationOf: "youth-ai-activism",
  category: "Youth",
  name: "AI don Fafutuka da Kawo Ci Gaba ga Al'umma",
  skills: "Zaɓar matsala ta yankinku, Bincike da tabbatar da gaskiya da AI, Shirya ƙaramin mataki, Rubuta saƙo ga mai yanke shawara, Yaɗa saƙo lafiya kuma cikin ladabi",
  outcome: "shirya ƙaramin mataki mai aminci kan wata matsala a makaranta ko unguwa da ta dame ku, ta amfani da AI don bincikenta, tabbatar da bayanai a majiyoyi amintattu, rubuta saƙo mai ladabi ga mai yanke shawara, da yin shiri mai sauƙi don yaɗa shi.",
  about: [
    "Wannan kwas ɗin na matasa ne masu son kawo canji: wurin shaƙatawa mai tsabta, mashigar titi mafi aminci kusa da makaranta, ƙarin kwandunan sake sarrafa shara (recycling), tara abinci don mabuƙata, ko ƙungiyar da ke maraba da sababbin ɗalibai. Ƙananan ayyuka na yankinku wuri ne mai kyau na farawa.",
    "Za ku zaɓi wata matsala, ku yi amfani da mataimakin AI kamar ChatGPT, Microsoft Copilot ko Google Gemini don bincikenta da tunanin mafita, ku tabbatar da kowane bayani a majiyoyi amintattu, ku shirya ƙaramin mataki ɗaya, ku rubuta wasiƙa ko imel mai ladabi ga wanda zai iya taimakawa, sannan ku yaɗa saƙonku lafiya.",
    "Ku duba dokokin makarantarku game da AI da ƙa'idar shekarun kowane kayan aiki, kuma ku sanar da iyaye, mai kula da ku ko malami kafin ku yi rajista a ko'ina, ku tuntuɓi jami'ai, ko ku shirya taro. Kowane darasi yana ƙarewa da aikin \"Gwada yanzu\", akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku yi tsarin aiki na shafi ɗaya kan wata matsala a makaranta ko unguwa da ta dame ku: matsalar a jimla ɗaya, bayanai biyu da kuka tabbatar a majiyoyi amintattu, ƙaramin mataki ɗaya mai rana da masu taimako, da babban mutumin da ke goyon bayanku. Ku yi amfani da AI don taimakawa rubuta daftarin wasiƙa ko imel mai ladabi ga mai yanke shawara (shugaban makaranta, hukumar makarantu ko ɗan majalisar birni), ku duba shi ku sake rubuta shi da kalmominku, sannan ku yi shiri mai sauƙi don yaɗa saƙonku lafiya.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Matasa masu son kawo canji a makaranta ko a unguwarsu, kamar wurin shaƙatawa mai tsabta, mashigar titi mafi aminci, ƙarin kwandunan sake sarrafa shara, tara abinci, ko ƙungiyar da ke maraba da kowa.",
    startingPoint: "Suna damuwa da al'amura kuma suna ganin matsaloli a kewayensu, kuma suna amfani da kafofin sada zumunta, wataƙila har da mataimakan AI. Kaɗan ne suka taɓa tabbatar da bayanai a majiyoyi amintattu, suka shirya mataki da izini, ko suka rubuta wa mai yanke shawara.",
    gap: "Sha'awa ba tare da shiri ba tana iya ɓacewa, kuma AI yana iya yaɗa bayanan ƙarya ko hotunan bogi da ke ɓata amana. Matasa suna buƙatar zaɓar canjin da za su iya kawowa, su tabbatar da kowane bayani, su yi shiri lafiya tare da babban mutum, kuma su yi magana cikin ladabi da masu iko, don muryarsu ta kawo sakamako na gaske.",
    constraints: [
      "Ƙa'idar shekaru da dokokin makaranta game da AI; iyaye, mai kula ko malami suna ciki kafin a tuntuɓi jami'ai ko a shirya taro",
      "Tsaro: izini don taro, kada a taɓa zuwa shi kaɗai, kuma babu bayanan sirri a intanet",
      "Dole a tabbatar da bayanai a majiyoyi amintattu; babu hotuna ko maganganun bogi",
      "Na'urori: waya, ko kwamfutar makaranta ko ta ɗakin karatu mai kayan aiki kyauta",
      "Gajerun darussa da kalmomi masu sauƙi"
    ],
    prerequisites: "Babu."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan kuna tunani game da makarantarku ko unguwarku", action: "zaɓar matsala ɗaya ta yankinku da bayyana ta a jimla ɗaya, tare da waɗanda abin ya shafa da wanda zai iya gyarawa", standard: "kuna zaɓar matsalar da za ku iya aiki a kanta lafiya" },
    { id: "O2", condition: "Ta amfani da mataimakin AI da majiyoyi amintattu", action: "bincika matsalarku da tabbatar da kowane bayani, tare da tattara shaidarku ta kanku", standard: "kuna amfani da bayanan da shafin hukuma ko mutum na gaske ya tabbatar kawai" },
    { id: "O3", condition: "Idan kuna da matsalarku", action: "shirya ƙaramin mataki ɗaya mai rana, masu taimako, izinin da ake buƙata da babban mutum mai goyon baya", standard: "tare da samun izini kafin ku fara" },
    { id: "O4", condition: "Idan kuna da bayanan da kuka tabbatar", action: "rubuta gajeren saƙo mai ladabi ga mai yanke shawara mai takamaiman buƙata", standard: "an sake rubuta shi da kalmominku kuma babban mutum ya karanta shi kafin a aika" },
    { id: "O5", condition: "Idan kuna yaɗa matakinku", action: "yin fosta ko rubutu a kafar sada zumunta da ke faɗin me, yaushe, ina da me yasa, da yaɗa shi lafiya", standard: "daga asusun da aka amince da shi, ba tare da bayanan sirri ko zagin wani ba" },
    { id: "O6", condition: "Kafin ku yaɗa wani abu game da manufarku", action: "duba cewa gaskiya ne, an tabbatar da shi kuma adalci ne, sa alamar AI a hotunan AI, da rubuta tsarin aiki na shafi ɗaya", standard: "ba tare da hotuna ko maganganun bogi na mutane na gaske ba" }
  ],
  chapters: [
    {
      name: "Babi na 1: Daga damuwa zuwa shiri",
      lessons: [
        {
          objectives: ["O1"],
          title: "Zaɓar matsalar da za ku iya canjawa da gaske",
          minutes: 4,
          goal: "Zaɓi matsala ɗaya ta yankinku ku bayyana ta a jimla ɗaya mai sarari.",
          text: [
            "Kawo ci gaba ga al'umma (social impact) yana nufin inganta rayuwar wasu mutane. Fafutuka (activism) yana nufin yin aiki don kawo canji. Ba dole ne ku gyara duniya gaba ɗaya ba. Ƙaramar matsala ta yankinku da kuke gani, kamar famfunan ruwan sha da suka lalace a makaranta ko shara a tashar bas, ta fi sauƙin canjawa kuma tana koya muku yadda canji ke faruwa.",
            "Ku tambayi kanku: Su wane ne abin ya shafa? Yaya yanayi mafi kyau zai kasance? Wane ne yake da ikon gyarawa, kamar shugaban makaranta, mai ba ƙungiya shawara, hukumar makarantu ko majalisar birni?",
            "Mataimakin AI zai iya taimaka muku tunanin ra'ayoyi: \"Shekaruna 15. Waɗanne ƙananan matsaloli ne matasa za su iya taimakawa a magance a makarantar sakandare ko a unguwa?\" Sannan ku zaɓi ɗaya da ke da muhimmanci a gare ku, kuma za ku iya aiki a kanta lafiya."
          ],
          words: [["Kawo ci gaba ga al'umma (social impact)", "inganta rayuwar wasu mutane."], ["Fafutuka (activism)", "yin aiki don kawo canji a makarantarku, unguwarku ko duniya."], ["Mai yanke shawara", "mutum ko ƙungiya mai ikon kawo canji."]],
          slides: [
            { title: "Ku fara da ƙarami na yankinku", bullets: ["Matsalar da kuke gani", "Ta fi sauƙin canjawa", "Tana koyar da yadda canji ke faruwa"] },
            { title: "Tambayoyi uku", bullets: ["Su wane ne abin ya shafa?", "Yaya yanayi mafi kyau zai kasance?", "Wane ne yake da ikon gyarawa?"] },
            { title: "Ku yi tunanin ra'ayoyi da AI", bullets: ["Ku nemi ra'ayoyin da matasa za su iya aiki a kai", "Ku zaɓi ɗaya da ke da muhimmanci a gare ku", "Ku zaɓi ɗaya da za ku iya aiki a kai lafiya"] }
          ],
          tryIt: "Ku rubuta matsalarku a jimla ɗaya, kamar \"Makarantarmu ba ta da kwandunan sake sarrafa shara a ɗakin cin abinci, don haka gwangwanaye suna shiga cikin shara.\" Ku ƙara waɗanda abin ya shafa da wanda zai iya gyarawa.",
          youCanNow: "zaɓar matsala ta yankinku da faɗin waɗanda ta shafa da wanda zai iya canja ta.",
          quickCheck: [
            { objective: "O1", q: "Mene ne ma'anar fafutuka (activism)?", options: ["Rubutu game da kanku a intanet", "Gyara duniya gaba ɗaya lokaci ɗaya", "Yin aiki don kawo canji", "Yin gardama a intanet"], answer: 2, why: "Fafutuka yana nufin yin aiki don kawo canji; kawo ci gaba ga al'umma yana nufin inganta rayuwar wasu." },
            { objective: "O1", q: "Matsaloli da yawa suna damun ku. Wanne ne zaɓi na farko mafi kyau?", options: ["Shara a tashar bas ɗinku da kuke gani kuma za ku iya taimakawa a gyara", "Kawo ƙarshen dukkan gurɓacewar muhalli a duniya", "Matsala a ƙasar da ba ku san komai game da ita ba", "Duk abin da ake magana a kai a intanet yanzu"], answer: 0, why: "Ƙaramar matsala ta yankinku ta fi sauƙin canjawa kuma tana koya muku yadda canji ke faruwa." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Bincike da AI da tabbatar da kowane bayani",
          minutes: 6,
          goal: "Yi amfani da AI don fara bincike, sannan ku tabbatar da bayanai a majiyoyi amintattu.",
          text: [
            "AI wuri ne mai kyau na farawa: \"Ka bayyana dalilin da yasa makarantu ke sake sarrafa shara da abin da yawanci ke hana su. Ka ba ni tambayoyin da zan yi wa shugaban makarantata.\" Amma AI yana iya yin kuskure ko ya ba da tsohon bayani, kuma wani lokaci yana ƙirƙirar lambobi ko majiyoyi. Ana kiran wannan hallucination (hasashen ƙarya).",
            "Dole ne a tabbatar da kowane bayani da kuke son amfani da shi a saƙo. Majiyoyi amintattu sun haɗa da shafin makarantarku ko na hukumar makarantu, shafin hukuma na birninku, shafukan gwamnati (da yawa suna ƙarewa da .gov), da mutane na gaske kamar malami, ma'aikacin ɗakin karatu ko ofishin da ke kula da abin.",
            "Shaidarku ta kanku ma tana da amfani. Ku ƙirga kwandunan shara da suka cika suka zube, ku ɗauki hoton matsalar (ba hoton mutane ba tare da izini ba), ko ku yi ɗan bincike (survey) tsakanin abokan ajinku da izinin malami."
          ],
          steps: ["Ku nemi AI ya bayyana matsalar kuma ya ba da tambayoyi.", "Ku rubuta duk bayanan da kuke son amfani da su.", "Ku tabbatar da kowane bayani a shafin hukuma ko wurin mutum na gaske.", "Ku tattara shaidarku ta kanku: ƙirge, hotunan wurare, ɗan bincike.", "Ku jefar da duk bayanin da ba za ku iya tabbatarwa ba."],
          words: [["Hallucination (hasashen ƙarya)", "lokacin da AI ya rubuta abin da yake kama da gaskiya amma ƙirƙirarre ne."], ["Shaida", "bayanai ko hujjojin da ke goyon bayan abin da kuke faɗa."], ["Bincike (survey)", "gajerun tambayoyi da kuke yi wa mutane da yawa."]],
          slides: [
            { title: "AI wurin farawa ne", bullets: ["Yana bayyana matsalar", "Yana ba da tambayoyin da za ku yi", "Yana iya yin kuskure ko ƙirƙirar abubuwa"] },
            { title: "Ku tabbatar da kowane bayani", bullets: ["Shafin makaranta ko na birni", "Shafukan gwamnati, sau da yawa .gov", "Malamai, ma'aikatan ɗakin karatu, ofishin da ke kula"] },
            { title: "Shaidarku ta kanku", bullets: ["Ƙirge da hotunan wurare", "Ɗan bincike, da izinin malami", "Babu hoton mutane ba tare da izini ba"] }
          ],
          tryIt: "Ku nemi mataimakin AI ya bayyana matsalarku kuma ya ba ku bayanai uku. Ku tabbatar da kowane bayani a majiya amintacciya, ku rubuta \"an tabbatar\" ko \"ba a tabbatar ba\". Sannan ku tattara shaida ɗaya ta kanku.",
          youCanNow: "bincika matsala da AI da riƙe bayanan da kuka tabbatar a majiyoyi amintattu kawai.",
          quickCheck: [
            { objective: "O2", q: "Wace ce majiya amintacciya don dokar hukumar makarantu?", options: ["Wani rubutu kawai a kafar sada zumunta", "Amsar AI ba tare da majiya ba", "Hasashen aboki", "Shafin makarantarku ko na hukumar makarantu"], answer: 3, why: "Shafukan hukuma na makaranta, hukumar makarantu, birni da gwamnati majiyoyi ne amintattu." },
            { objective: "O2", q: "Kuna son hotuna don nuna matsalar shara. Me za ku ɗauki hotonsa?", options: ["Baƙi da ke zubar da shara", "Wuraren da shara ta cika, ba mutane ba tare da izini ba", "Fuskokin abokan ajinku", "Adireshin gidanku"], answer: 1, why: "Hotunan matsalar shaida ce mai kyau; kada ku ɗauki hoton mutane ba tare da izini ba." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Shirya ƙaramin mataki ɗaya",
          minutes: 5,
          goal: "Mayar da matsalarku zuwa ƙaramin mataki ɗaya mai rana, masu taimako da babban mutum mai goyon baya.",
          text: [
            "Matakai masu kyau suna da takamaimai: ranar share wuri, shawarar kwandunan sake sarrafa shara ga shugaban makaranta, tara kayayyaki, ko jawabi a taron majalisar ɗalibai. Ku zaɓi ɗaya da za ku iya yi cikin 'yan makonni masu zuwa.",
            "Ku tambayi AI: \"Ka taimake ni in shirya share wurin shaƙatawa na awa ɗaya don ɗalibai 10. Ka jera kayayyaki, dokokin tsaro, wanda zan nemi izini daga gare shi da jadawali mai sauƙi.\" Sannan ku duba shirin tare da babban mutum.",
            "Tsaro da farko: ku nemi izini daga makarantarku ko mai wurin shaƙatawar, ku sa iyaye, mai kula da ku ko malami a ciki, kada ku taɓa zuwa ku kaɗai, kuma ku bi duk dokoki game da safar hannu, tituna ko shara."
          ],
          steps: ["Ku zaɓi mataki ɗaya takamaimai.", "Ku nemi AI jerin abubuwa: kayayyaki, matakai, jadawali, izini.", "Ku zaɓi rana da masu taimako.", "Ku roƙi iyaye, mai kula, malami ko mai ba da shawara su goyi bayanku.", "Ku sami duk izinin da kuke buƙata kafin ku fara."],
          words: [["Tsarin aiki (action plan)", "jerin abin da za ku yi, yaushe, da wanda zai taimaka."], ["Mai goyon baya", "babban mutum da ke taimakawa kuma yana duba shirinku."]],
          slides: [
            { title: "Mataki ɗaya takamaimai", bullets: ["Share wuri, shawara, tara kayayyaki ko jawabi", "Ana iya yi cikin 'yan makonni masu zuwa"] },
            { title: "Ku yi shiri da AI", bullets: ["Kayayyaki da matakai", "Jadawali", "Wanda za ku nemi izini daga gare shi"] },
            { title: "Tsaro da farko", bullets: ["Ku sami izini", "Babban mutum a ciki", "Kada ku je ku kaɗai; ku bi dokoki"] }
          ],
          tryIt: "Ku yi amfani da mataimakin AI don shirya ƙaramin mataki ɗaya don matsalarku. Ku rubuta ranar, masu taimako biyu, izinin da kuke buƙata, da babban mutumin da zai goyi bayanku.",
          youCanNow: "mayar da matsala zuwa tsarin aiki takamaimai mai aminci tare da goyon bayan babban mutum.",
          quickCheck: [
            { objective: "O3", q: "Me ke sa mataki ya zama takamaimai?", options: ["Yana da abin da za a yi a sarari, rana da masu taimako", "Yana da girma sosai", "Ba shi da wa'adi", "Ra'ayi ne kawai"], answer: 0, why: "Matakai takamaimai suna faɗin abin da za ku yi, yaushe da tare da su wa." },
            { objective: "O3", q: "Kuna shirya share wani wurin shaƙatawa na birni. Me za ku yi kafin ranar?", options: ["Ku je kawai", "Ku je ku kaɗai da wuri", "Ku sami izini daga mai wurin shaƙatawar ku sa babban mutum a ciki", "Ku saka adireshin gidanku a intanet don masu taimako"], answer: 2, why: "Tsaro da farko: ku sami izini, ku sa babban mutum a ciki, kuma kada ku taɓa zuwa ku kaɗai." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Daga damuwa zuwa shiri",
        questions: [
          { objective: "O1", q: "Wace matsala ce wuri mafi kyau na farawa?", options: ["Kawo ƙarshen yunwa a duk duniya kafin Juma'a", "Samun kwandunan sake sarrafa shara a ɗakin cin abincin makarantarku", "Canja kowace doka", "Gyara intanet gaba ɗaya"], answer: 1, why: "Ƙananan matsaloli na yankinku sun fi sauƙin canjawa kuma suna koya muku yadda ake yi." },
          { objective: "O1", q: "Wane ne mai yanke shawara?", options: ["Mutum ko ƙungiya mai ikon kawo canjin", "Duk mai amfani da kafar sada zumunta", "Mataimakin AI", "Abokin aji da ya yarda da ku"], answer: 0, why: "Masu yanke shawara, kamar shugaban makaranta ko majalisa, za su iya kawo canjin." },
          { objective: "O2", q: "AI ya ba ku wata ƙididdiga don wasiƙarku. Me za ku yi?", options: ["Ku yi amfani da ita nan take", "Ku ƙara mata girma", "Ku tabbatar da ita a majiya amintacciya kafin amfani da ita", "Ku tambayi AI ko ya tabbata sannan ku yi amfani da ita"], answer: 2, why: "AI yana iya ƙirƙirar lambobi; ku tabbatar a majiyoyi amintattu." },
          { objective: "O2", q: "Wace ce shaidarku ta kanku?", options: ["Jita-jita", "Hasashe", "Labarin ƙarya", "Ƙirgen kwandunan shara da suka cika suka zube"], answer: 3, why: "Ƙirge da hotunan wurare shaida ce da kuke tattarawa da kanku." },
          { objective: "O3", q: "Kafin share wurin shaƙatawa, me dole ne ku yi?", options: ["Ku je ku kaɗai da dare", "Ku sami izini ku sa babban mutum a ciki", "Ku ƙyale dokokin tsaro", "Ku saka adireshinku a intanet"], answer: 1, why: "Izini da goyon bayan babban mutum suna kiyaye matakin lafiya." }
        ]
      }
    },
    {
      name: "Babi na 2: Yin magana da yaɗa saƙo",
      lessons: [
        {
          objectives: ["O4"],
          title: "Rubuta saƙo mai ladabi ga mai yanke shawara",
          minutes: 5,
          goal: "Yi amfani da AI don rubuta daftarin wasiƙa ko imel mai sarari da ladabi, sannan ku mayar da shi naku.",
          text: [
            "Saƙo mai ƙarfi gajere ne kuma mai ladabi: ko ku su wane ne (sunanku na farko, ajinku, makaranta ko unguwa), matsalar a jimla ɗaya, bayani ɗaya ko biyu da kuka tabbatar, takamaiman buƙata, da godiya.",
            "Ku tambayi AI: \"Ka taimake ni in rubuta gajeren imel mai ladabi ga shugaban makarantata ina neman kwandunan sake sarrafa shara a ɗakin cin abinci. Ina aji 10. Ga bayanaina: [bayananku da kuka tabbatar]. Kada ya wuce kalmomi 150.\" Sannan ku sake rubuta shi da kalmominku, ku cire duk abin da ba ku tabbatar ba.",
            "Don sanin wanda za ku tuntuɓa, ku duba shafin makarantarku ko na hukumar makarantu, ko shafin hukuma na birninku. USA.gov (shafin gwamnatin Amurka) yana da shafi da ke haɗawa da zaɓaɓɓun jami'an tarayya, jiha da ƙaramar hukuma. Ku sa iyaye, mai kula ko malami su karanta saƙonku kafin ku aika."
          ],
          steps: ["Ku faɗi ko ku su wane ne ba tare da bayanan sirri ba sai sunanku na farko da ajinku.", "Ku faɗi matsalar a jimla ɗaya.", "Ku ƙara bayani ɗaya ko biyu da kuka tabbatar.", "Ku yi takamaiman buƙata ku yi godiya.", "Ku sake rubuta daftarin AI da kalmominku, ku sa babban mutum ya karanta kafin ku aika."],
          words: [["Takamaiman buƙata", "ainihin abin da kuke son mutumin ya yi."], ["Zaɓaɓɓen jami'i", "mutumin da aka zaɓa ta ƙuri'a zuwa wani aiki, kamar ɗan majalisar birni."]],
          slides: [
            { title: "Saƙo mai ƙarfi", bullets: ["Ko ku su wane ne", "Matsalar a jimla ɗaya", "Bayani ɗaya ko biyu da aka tabbatar", "Takamaiman buƙata da godiya"] },
            { title: "AI yana rubuta daftari, ku ne masu yanke shawara", bullets: ["Ku ba shi bayanan da aka tabbatar kawai", "Ku sake rubutawa da kalmominku", "Kada ya wuce kalmomi 150"] },
            { title: "Wanda za ku tuntuɓa", bullets: ["Shafin makaranta ko na hukumar makarantu", "Shafin hukuma na birni", "Shafin zaɓaɓɓun jami'ai na USA.gov"] }
          ],
          sources: [{ name: "USA.gov: Nemo zaɓaɓɓun jami'anku", url: "https://www.usa.gov/elected-officials" }],
          tryIt: "Ku yi amfani da mataimakin AI don rubuta daftarin saƙo ga mai yanke shawara game da matsalarku, ta amfani da bayanan da kuka tabbatar kawai. Ku sake rubuta shi da kalmominku, ku roƙi babban mutum ya karanta shi. Kada ku aika har sai ya karanta.",
          youCanNow: "rubuta gajeren saƙo mai ladabi, mai bayanan da aka tabbatar, da ke neman mai yanke shawara ya kawo takamaiman canji.",
          quickCheck: [
            { objective: "O4", q: "Mene ne \"takamaiman buƙata\" a cikin saƙo?", options: ["Dogon jerin koke-koke", "Buƙata a sarari, kamar ƙara kwandunan sake sarrafa shara a ɗakin cin abinci", "Tambaya game da yanayi", "Lambar wayarku"], answer: 1, why: "Takamaiman buƙata tana faɗa wa mai yanke shawara ainihin abin da kuke son ya yi." },
            { objective: "O4", q: "Daftarin AI yana da wata lamba da ba ku taɓa tabbatarwa ba. Me za ku yi?", options: ["Ku bar ta; tana da daɗin ji", "Ku ƙara mata girma", "Ku yi mata rubutu mai kauri", "Ku cire ta ko ku tabbatar da ita kafin ku aika"], answer: 3, why: "Ku sake rubuta daftarin ku cire duk abin da ba ku tabbatar ba." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Yaɗa saƙo lafiya",
          minutes: 5,
          goal: "Yi fosta ko rubutu mai sauƙi game da matakinku ku yaɗa shi lafiya.",
          text: [
            "Mutane suna shiga idan saƙon ya fito a sarari: me, yaushe, ina, da me yasa yake da muhimmanci. AI zai iya taimaka muku rubuta gajeren taken (slogan) ko rubutu, kuma kayan aiki kyauta kamar Canva za su iya taimaka muku yin fosta. Ku duba kowace rana, lokaci da wuri.",
            "Ku kasance lafiya a intanet: ku yi rubutu daga asusun ƙungiyar makaranta ko asusun da iyalinku suka amince da shi idan za ku iya, ku ɓoye cikakken sunanku, lambar wayarku da adireshin gidanku, kuma kada ku raba hotunan wasu mutane ba tare da izini ba.",
            "Wasu mutane ba za su yarda da ku ba. Ba laifi ba ne. Ku amsa cikin ladabi ko kada ku amsa kwata-kwata, kuma kada ku taɓa zagin wani. Idan wani ya yi muku barazana ko ya dame ku, kada ku amsa; ku ajiye shaidar, ku toshe shi (block), ku kai rahoto, ku faɗa wa babban mutum da kuka amince da shi."
          ],
          steps: ["Ku rubuta me, yaushe, ina da me yasa a 'yan kalmomi.", "Ku nemi AI ra'ayoyin take uku, ku zaɓi ɗaya ko ku sake rubuta shi.", "Ku yi fosta ko rubutu ku duba kowane bayani.", "Ku yaɗa daga asusun ƙungiya ko wanda iyali suka amince da shi.", "Ku ɓoye bayanan sirri, ku faɗa wa babban mutum game da duk wata barazana."],
          words: [["Take (slogan)", "gajeriyar kalma mai jan hankali game da manufarku."], ["Cin zarafi (harassment)", "saƙonni marasa daɗi ko na barazana da ake maimaitawa."]],
          slides: [
            { title: "Saƙo a sarari", bullets: ["Me, yaushe, ina, me yasa", "Gajeren take", "Ku duba kowane bayani"] },
            { title: "Ku yaɗa lafiya", bullets: ["Asusun ƙungiya ko wanda iyali suka amince da shi", "Babu lambar waya ko adireshin gida", "Babu hoton wasu ba tare da izini ba"] },
            { title: "Idan mutane ba su yarda ba", bullets: ["Ku yi ladabi ko kada ku amsa", "Babu zagin wani", "Barazana: ajiye, toshe, kai rahoto, faɗa wa babba"] }
          ],
          tryIt: "Ku nemi mataimakin AI ra'ayoyin take uku don matakinku. Ku zaɓi ɗaya, ku yi fosta ko rubutu mai sauƙi mai me, yaushe, ina da me yasa, kuma ku sa babban mutum ya duba shi kafin ku yaɗa.",
          youCanNow: "yin saƙo a sarari game da manufarku da yaɗa shi lafiya kuma cikin ladabi.",
          quickCheck: [
            { objective: "O5", q: "Waɗanne abubuwa huɗu ne fosta game da matakinku ya kamata ta faɗa wa mutane?", options: ["Me, yaushe, ina da me yasa", "Cikakken sunanku, waya, adireshi da makaranta", "Take kawai", "Wanda za a ɗora wa laifi"], answer: 0, why: "Saƙo a sarari yana faɗin me, yaushe, ina da me yasa yake da muhimmanci." },
            { objective: "O5", q: "Wani ya rubuta muku sharhi mara daɗi yana kiran ku da sunaye marasa kyau. Me za ku yi?", options: ["Ku zage shi kuma", "Ku saka bayanan sirrinsa a intanet", "Ku amsa cikin ladabi ko kada ku amsa, ku faɗa wa babba idan ya zama barazana", "Ku goge dukkan fafutukarku"], answer: 2, why: "Kada ku taɓa zagin wani; ku ajiye, ku toshe, ku kai rahoto, ku faɗa wa babba game da barazana." }
          ]
        },
        {
          objectives: ["O6"],
          title: "AI cikin alhaki a fafutuka, da tsarin aikinku",
          minutes: 6,
          goal: "Ku guji abubuwan da ke ɓatar da mutane, ku kammala tsarin aiki na shafi ɗaya.",
          text: [
            "AI yana sauƙaƙa ƙirƙirar hotunan bogi, maganganun bogi da labaran ƙarya. Amfani da su, ko da don kyakkyawar manufa, yana ɓata amana kuma yana iya yaɗa ƙarya. Kada ku taɓa yin hotuna ko maganganun bogi na mutane na gaske, kuma ku sa alamar AI a duk hoton da AI ya ƙirƙira da kuka yi amfani da shi.",
            "Kafin ku yaɗa wani abu, ku tambaya: Gaskiya ne? Na tabbatar da shi? Adalci ne ga mutanen da abin ya shafa? Shin zan ji daɗi idan mutumin da nake rubutu game da shi ya karanta?",
            "Yanzu ku haɗa komai a shafi ɗaya: matsalar, bayanai biyu da aka tabbatar, mataki ɗaya mai rana da masu taimako, babban mutum mai goyon bayanku, saƙonku ga mai yanke shawara, da yadda za ku yaɗa shi. Sannan ku yi tunani: me ya yi aiki, kuma me za ku yi a gaba?"
          ],
          steps: ["Ku duba cewa kowane hoto da magana na gaske ne ko an sa masa alamar AI a sarari.", "Ku tambaya: gaskiya ne, an tabbatar, kuma adalci ne?", "Ku rubuta tsarin aikinku na shafi ɗaya.", "Ku haɗa saƙonku da shirin yaɗawa.", "Bayan matakinku, ku rubuta abin da ya yi aiki da abin da ke gaba."],
          words: [["Bayanan ƙarya (misinformation)", "bayanin da ba gaskiya ba, da aka yaɗa bisa kuskure ko da gangan."], ["Alama (label)", "rubutu da ke cewa an yi wani abu da AI."]],
          slides: [
            { title: "Babu bogi", bullets: ["Babu hotuna ko maganganun bogi na mutane na gaske", "Ku sa alamar AI a hotunan AI", "Bogi yana ɓata amana, ko da don manufa mai kyau"] },
            { title: "Kafin ku yaɗa", bullets: ["Gaskiya ne?", "Na tabbatar da shi?", "Adalci ne?"] },
            { title: "Tsarin aikinku na shafi ɗaya", bullets: ["Matsala da bayanai biyu da aka tabbatar", "Mataki ɗaya, rana, masu taimako, babba", "Saƙo da shirin yaɗawa"] }
          ],
          tryIt: "Aikin ƙarshe: ku rubuta tsarin aikinku na shafi ɗaya mai matsalar, bayanai biyu da aka tabbatar, mataki ɗaya mai rana da masu taimako, babban mutum mai goyon bayanku, saƙonku da kuka sake rubutawa ga mai yanke shawara, da shirinku na yaɗa shi lafiya.",
          youCanNow: "amfani da AI cikin alhaki don shirya, yin magana, da yaɗa ƙaramin mataki da ke kawo canji na gaske.",
          quickCheck: [
            { objective: "O6", q: "Mene ne bayanan ƙarya (misinformation)?", options: ["Bayanin da aka tabbatar", "Alama a kan hoton AI", "Zanen fosta", "Bayanin da ba gaskiya ba da aka yaɗa bisa kuskure ko da gangan"], answer: 3, why: "Bayanan ƙarya bayanai ne marasa gaskiya, kuma AI yana sauƙaƙa ƙirƙirarsu." },
            { objective: "O6", q: "Wata maganar bogi da aka ce wani shugaba na yankinku ya faɗa za ta sa manufarku ta yaɗu sosai. Me za ku yi?", options: ["Ku yi amfani da ita sau ɗaya", "Kada ku yi amfani da ita; maganganun bogi suna ɓata amana kuma suna yaɗa ƙarya", "Ku yi amfani da ita amma ku ɓoye sunan", "Ku nemi AI ya sa ta yi kama da ta gaske"], answer: 1, why: "Maganganu ko hotunan bogi na mutane na gaske suna ɓata amana, ko da don manufa mai kyau." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Yin magana da yaɗa saƙo",
        questions: [
          { objective: "O4", q: "Wanne ya dace a cikin saƙo ga mai yanke shawara?", options: ["Takamaiman buƙata da godiya", "Zagi", "Bayanan da ba ku tabbatar ba", "Adireshin gidanku da lambar wayarku"], answer: 0, why: "Buƙata a sarari da ladabi suna sa saƙo ya yi ƙarfi." },
          { objective: "O4", q: "A ina za ku sami hanyoyin haɗi zuwa zaɓaɓɓun jami'anku?", options: ["Wani rubutu kawai a kafar sada zumunta", "Hasashen AI", "Shafin zaɓaɓɓun jami'ai na USA.gov", "Imel ɗin da ake turawa daga mutum zuwa mutum"], answer: 2, why: "USA.gov yana haɗawa da jami'an tarayya, jiha da ƙaramar hukuma." },
          { objective: "O5", q: "Wani ya rubuta barazana a kan rubutun fafutukarku. Me za ku yi?", options: ["Ku amsa da barazana", "Ku yaɗa adireshinsa", "Ku ƙyale shi kada ku faɗa wa kowa", "Ku ajiye shaidar, ku toshe shi, ku kai rahoto, ku faɗa wa babba da kuka amince da shi"], answer: 3, why: "Ya kamata a ajiye barazana, a toshe, a kai rahoto, a faɗa wa babba." },
          { objective: "O6", q: "Aboki ya ba da shawarar yin hoton bogi na AI na magajin gari don jan hankali. Ku:", options: ["Ku ce a'a; bogi yana yaɗa ƙarya kuma yana ɓata amana", "Ku yi shi amma kada ku sa masa alama", "Ku yi shi don manufa mai kyau", "Ku saka shi ku goge shi daga baya"], answer: 0, why: "Hotunan bogi na mutane na gaske suna ɓatar da mutane, ko da don manufa mai kyau." },
          { objective: "O6", q: "Me ya kamata ku tambaya kafin ku yaɗa wani abu game da manufarku?", options: ["Zai yaɗu sosai?", "Gaskiya ne, an tabbatar, kuma adalci ne?", "Shi ne rubutu mafi tsawo?", "AI ne ya rubuta duka?"], answer: 1, why: "Gaskiya, tabbatarwa da adalci suna sa fafutukarku ta zama amintacciya." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI don Fafutuka da Kawo Ci Gaba ga Al'umma",
    questions: [
      { objective: "O1", q: "Kawo ci gaba ga al'umma yana nufin:", options: ["Inganta rayuwar wasu mutane", "Samun likes", "Cin nasara a gardama", "Yawan amfani da AI"], answer: 0, why: "Kawo ci gaba ga al'umma shi ne inganta rayuwar wasu." },
      { objective: "O1", q: "Me yasa za a fara da ƙaramar matsala ta yankinku?", options: ["Ba shi da muhimmanci", "Ta fi sauƙin canjawa kuma tana koyar da yadda canji ke faruwa", "Manyan matsaloli haramun ne", "Manya suna tilasta haka"], answer: 1, why: "Ƙananan nasarori suna gina ƙwarewa da ƙarfin gwiwa." },
      { objective: "O1", q: "Wace ce matsala a sarari a jimla ɗaya?", options: ["\"Abubuwa ba su da kyau\"", "\"Komai ya kamata ya canja\"", "\"Ɗakin cin abincinmu ba shi da kwandunan sake sarrafa shara, don haka gwangwanaye suna shiga cikin shara\"", "\"Mutane suna da ban haushi\""], answer: 2, why: "Tana faɗin mece ce matsalar da dalilin da yasa take da muhimmanci." },
      { objective: "O1", q: "Wane ne zai iya gyara matsalar famfunan ruwan sha na makaranta?", options: ["Kamfanin wasannin bidiyo", "Mataimakin AI", "Wani mabiyi a intanet kawai", "Shugaban makaranta ko hukumar makarantu"], answer: 3, why: "Shugabannin makaranta za su iya yin gyare-gyare a makaranta." },
      { objective: "O2", q: "Hallucination a AI yana nufin:", options: ["AI ya rubuta abin da yake kama da gaskiya amma ƙirƙirarre ne", "AI ya lalace", "AI yana da basirar ƙirƙira sosai", "AI yana da jinkiri"], answer: 0, why: "AI yana iya ƙirƙirar bayanai da majiyoyi." },
      { objective: "O2", q: "Wace ce majiya amintacciya don dokar birni?", options: ["Hoton barkwanci (meme)", "Shafin hukuma na birnin", "Sharhin da ba a san wanda ya rubuta ba", "Amsar AI ita kaɗai"], answer: 1, why: "Shafukan hukuma su ne wurin tabbatar da dokoki." },
      { objective: "O2", q: "Ba za ku iya tabbatar da wani bayani da AI ya ba ku ba. Ya kamata ku:", options: ["Yi amfani da shi duk da haka", "Sa ya yi kama da tabbas sosai", "Bar shi waje", "Ambaci AI a matsayin majiya"], answer: 2, why: "Ku yi amfani da bayanan da kuka tabbatar kawai." },
      { objective: "O2", q: "Kafin ku yi ɗan bincike tsakanin abokan aji, ya kamata ku:", options: ["Nemi adireshin gidajensu", "Yi shi a ɓoye", "Nemi kalmomin sirrinsu", "Sami izinin malami"], answer: 3, why: "Ya kamata malami ya amince da binciken makaranta." },
      { objective: "O3", q: "Wane mataki ne takamaimai?", options: ["Share wurin shaƙatawa na awa ɗaya ranar Asabar 14 ga wata tare da ɗalibai 10", "\"Mu yi wani abu wata rana\"", "\"Gyara muhalli\"", "\"Ku kyautata\""], answer: 0, why: "Yana da me, yaushe da su wa." },
      { objective: "O3", q: "Me ya kamata ku tambayi AI lokacin shirya mataki?", options: ["Ya yi muku shi", "Kayayyaki, matakai, jadawali da wanda za a nemi izini daga gare shi", "Bayanan sirrin mutane", "Ya ƙirƙiri shaidar bogi"], answer: 1, why: "AI zai iya yin jerin abubuwa masu amfani da za ku duba tare da babban mutum." },
      { objective: "O3", q: "Wace ce dokar tsaro don matakin al'umma?", options: ["Ku je ku kaɗai", "Ku ƙyale izini", "Ku sa iyaye, mai kula ko malami a ciki", "Ku yi aiki kusa da motoci ba tare da shiri ba"], answer: 2, why: "Goyon bayan babban mutum da izini suna kiyaye kowa lafiya." },
      { objective: "O4", q: "Wanne ya dace a cikin saƙonku ga shugaban makaranta?", options: ["Lambar wayarku don baƙi", "Zagi", "Jita-jitar da ba a tabbatar ba", "Sunanku na farko, ajinku da takamaiman buƙata"], answer: 3, why: "Ku faɗi ko ku su wane ne a sauƙaƙe, ku nemi abu a sarari." },
      { objective: "O4", q: "Bayan AI ya rubuta daftarin wasiƙarku, ya kamata ku:", options: ["Sake rubuta ta da kalmominku ku cire bayanan da ba a tabbatar ba", "Aika ta nan take", "Ƙara mata tsawo", "Ƙara maganar bogi"], answer: 0, why: "Ya kamata saƙonku ya zama naku kuma daidai." },
      { objective: "O4", q: "Wane ne ya kamata ya karanta saƙonku kafin ku aika?", options: ["Babu kowa", "Iyaye, mai kula ko malami", "Baƙo a intanet", "AI kawai"], answer: 1, why: "Babban mutum zai iya gano kurakurai kuma ya kiyaye ku." },
      { objective: "O5", q: "Fosta mai ƙarfi tana faɗa wa mutane:", options: ["Adireshin gidanku", "Take kawai", "Me, yaushe, ina da me yasa", "Doguwar maƙala"], answer: 2, why: "Waɗannan bayanai suna taimaka wa mutane su shiga." },
      { objective: "O5", q: "Wane asusu ne ya fi kyau don yaɗa fafutukarku?", options: ["Asusun baƙo", "Asusun da lambar wayarku ke cikin bayaninsa", "Asusun bogi", "Asusun ƙungiyar makaranta ko wanda iyali suka amince da shi"], answer: 3, why: "Asusun da aka amince da shi yana ƙara kiyaye ku." },
      { objective: "O5", q: "Wani bai yarda da rubutunku ba, amma cikin ladabi. Ku:", options: ["Amsa cikin ladabi ko kada ku amsa", "Zage shi", "Yaɗa bayanan sirrinsa", "Yi rubutun bogi game da shi"], answer: 0, why: "Girmamawa tana sa manufarku ta yi ƙarfi." },
      { objective: "O6", q: "Bayanan ƙarya (misinformation) su ne:", options: ["Wani nau'in fosta", "Bayanin da ba gaskiya ba, da aka yaɗa bisa kuskure ko da gangan", "Bayanin da aka tabbatar", "Bincike (survey)"], answer: 1, why: "Bayanan ƙarya bayanai ne marasa gaskiya." },
      { objective: "O6", q: "Kun yi amfani da hoton wurin shaƙatawa mai tsabta da AI ya ƙirƙira a fostarku. Ya kamata ku:", options: ["Ce hoto ne na gaske", "Ɓoye shi a ƙaramin rubutu", "Sa masa alamar cewa AI ne ya ƙirƙira shi", "Cire ranar"], answer: 2, why: "Alamomi suna sa ku kasance masu gaskiya ga masu kallonku." },
      { objective: "O6", q: "Bayan matakinku, mataki na ƙarshe mai kyau shi ne:", options: ["Goge komai", "Kada ku sake yi", "Ɗora wa wasu laifi", "Rubuta abin da ya yi aiki da abin da za a yi a gaba"], answer: 3, why: "Yin tunani a kai yana taimaka wa matakinku na gaba ya fi kyau." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      2,
      4,
      6,
      8,
      10,
      11,
      13,
      14,
      17
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Matsala a sarari",
        objective: "O1",
        notYet: "Matsalar ba ta da sarari ko ta yi girma da yawa don a yi aiki a kanta.",
        meets: "Matsalar a jimla ɗaya, tare da waɗanda abin ya shafa da wanda zai iya gyarawa.",
        exceeds: "Tana kuma faɗin yadda yanayi mafi kyau zai kasance."
      },
      {
        name: "Bayanan da aka tabbatar",
        objective: "O2",
        notYet: "Ba a tabbatar da bayanai ba, ko daga AI kawai suka fito.",
        meets: "Bayanai biyu da aka tabbatar a majiyoyi amintattu, kuma an ambaci majiyoyin.",
        exceeds: "Akwai kuma shaidar mai koyo ta kansa, kamar ƙirge ko bincike (survey)."
      },
      {
        name: "Mataki da tsaro",
        objective: "O3",
        notYet: "Babu rana, masu taimako ko babban mutum mai goyon baya, ko babu izini.",
        meets: "Ƙaramin mataki ɗaya mai rana, masu taimako, babban mutum mai goyon baya da izinin da ake buƙata.",
        exceeds: "Ya haɗa da gajeren jerin abubuwan tsaro na ranar."
      },
      {
        name: "Saƙo ga mai yanke shawara",
        objective: "O4",
        notYet: "Saƙon ba shi da ladabi, ba shi da sarari, ko yana amfani da bayanan da ba a tabbatar ba.",
        meets: "Gajeren saƙo mai ladabi mai matsalar, bayanan da aka tabbatar, takamaiman buƙata da godiya, da kalmomin mai koyo.",
        exceeds: "Babban mutum ya karanta shi, kuma yana ambaton mutumin da ya dace a tuntuɓa."
      },
      {
        name: "Yaɗawa lafiya da gaskiya",
        objective: "O6",
        notYet: "Shirin yaɗawa yana da bayanan sirri, hotunan bogi ko abubuwan AI marasa alama.",
        meets: "Shirin yaɗawa daga asusun da aka amince da shi ba tare da bayanan sirri ba, kuma an sa alama a duk hoton AI.",
        exceeds: "Yana kuma faɗin yadda mai koyo zai amsa idan mutane ba su yarda ba."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka aiwatar da matakin da suka shirya cikin kwanaki 60 tare da babban mutum mai goyon baya",
      "Saƙonnin da aka aika ga masu yanke shawara, da duk amsoshi ko canje-canjen da suka biyo baya",
      "Masu koyo da suka shiga ko suka kafa ƙungiyar hidima, aikin majalisar ɗalibai ko ƙungiyar al'umma cikin kwanaki 90"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya, ko kwamfutar makaranta ko ta ɗakin karatu mai intanet",
      "Mataimakin AI kyauta da aka yarda mai koyo ya yi amfani da shi, da kayan zane kyauta kamar Canva",
      "Takarda ko takardar kwamfuta don tsarin aiki na shafi ɗaya",
      "Babban mutum mai goyon baya: iyaye, mai kula, malami ko mai ba da shawara",
      "Kusan minti 60 gaba ɗaya, tare da lokacin aiwatar da matakin kansa"
    ],
    facilitatorNotes: [
      "Ku taimaka wa masu koyo su zaɓi matsalolin da za su iya aiki a kansu lafiya a yankinsu; ku kauce musu daga duk abin da zai sa su je su kaɗai ko su yi faɗa da mutane.",
      "Ku amince da izini da babban mutum mai goyon baya kafin a yi kowane taro ko a aika kowane saƙo.",
      "Ku karanta kowane saƙo da fosta kafin a fitar da su, don duba bayanai, salon magana da sirri.",
      "Ku tattauna yadda ake amsa rashin jituwa da cin zarafi a intanet, ku faɗi wanda ya kamata masu koyo su sanar.",
      "Ku ba da maki ga tsarin aiki da ma'aunin rubric, kuma ku bi su bayan matakin don taimaka musu su yi tunani a kai."
    ]
  }
};
