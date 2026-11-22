"use strict";

// Koach Learn course, Hausa (ha) translation of entrepreneurs/entrepreneurs-ai-automation-agentic.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "entrepreneurs-ai-automation-agentic-ha",
  lang: "ha",
  translationOf: "entrepreneurs-ai-automation-agentic",
  category: "Entrepreneurs",
  name: "Sarrafa Ayyuka da AI da Hanyoyin Aiki na Wakilan AI (Agentic)",
  skills: "Zana tsarin aiki, Tunanin abin da ke farawa da ayyuka, Gina sarrafa kai ba tare da rubuta code ba, Ƙara matakin AI, Saka iyakoki ga wakilan AI, Sa ido da gyara sarrafa kai",
  outcome: "zana tsarin wani aiki ɗaya da kasuwancinku ke maimaitawa, gina masa sarrafa kai (automation) mai aiki ba tare da rubuta code ba tare da matakin AI, ƙara matakin amincewar mutum a matsayin iyaka, sannan gwada shi da sa ido a kansa ta yadda idan ya lalace zai tsaya lafiya.",
  about: [
    "Sarrafa kai (automation) yana nufin kwamfuta tana yi muku wani aiki da ake maimaitawa idan wani abu ya faru: an cike fom, imel ya iso, an biya oda. AI yana ƙara ikon karantawa, rarrabawa da rubutu a cikin wannan aikin. Kayan aiki na \"agentic\" (wakilan AI) sun fi haka: kuna ba su manufa, su kuma su tsara su ɗauki matakai da yawa da kansu.",
    "Wannan kwas ɗin na masu kasuwanci ne da ke son daina kwafa da liƙa bayanai iri ɗaya duk yini. Za ku zana tsarin aiki, ku koyi tunanin abin da ke farawa da ayyuka (trigger da action), ku gina sarrafa kai na gaske da kayan aiki marar code (kamar Zapier, Make ko Microsoft Power Automate), ku ƙara matakin AI, sannan ku saka iyakoki ta yadda babu wani abu mai muhimmanci da zai faru ba tare da amincewarku ba.",
    "Kowane darasi yana ɗaukar kusan minti biyar tare da aikin hannu. Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe. Abubuwan da kayan aiki ke iya yi da iyakokin tsarinsu na kyauta suna canjawa sau da yawa, don haka ku duba shafin farashi da na taimako na kowane kayan aiki da kansa."
  ],
  finalTask: "Ku gina ku gwada sarrafa kai ɗaya don kasuwancinku, misali: idan abokin ciniki ya cike fom ɗin tambayarku, a ƙara buƙatarsa a cikin takardar lissafi (spreadsheet), AI ya rubuta daftarin amsa, sannan a aika muku daftarin don ku amince kafin wani abu ya tafi ga abokin ciniki. Ku rubuta bayani mai shafi ɗaya: zanen tsarin aiki, abin da ke farawa da ayyuka, umarnin AI, matakin amincewa, sakamakon gwaji uku da abin da za ku duba kowane mako.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Masu ƙananan kasuwanci da ke ɓata awanni suna kwafar bayanai iri ɗaya tsakanin fom, imel da takardun lissafi, kuma suna son kwamfuta ta yi musu wannan aikin.",
    startingPoint: "Suna amfani da fom na intanet, imel da takardun lissafi, kuma sun taɓa amfani da mataimakin AI. Kaɗan ne suka taɓa gina sarrafa kai ko suka yi tunanin abin da ya kamata wakilin AI ya yi da wanda bai kamata ya yi shi kaɗai ba.",
    gap: "Kwafa da ake maimaitawa yana ɓata awanni kuma yana kawo kurakurai, amma sarrafa kai da wakilai da ke aiki ba tare da iyaka ba suna iya aika amsoshi marasa daidai, kashe kuɗi ko fitar da bayanan abokan ciniki. Masu kasuwanci suna buƙatar gina ƙaramin sarrafa kai ɗaya mai matakin AI, iyakar amincewa, gwaje-gwaje da duba na kowane mako, ta yadda zai rage lokaci kuma ya tsaya lafiya idan ya lalace.",
    constraints: [
      "Babu rubuta code; kalmomi masu sauƙi da tsarin kyauta na kayan aiki marar code",
      "Na'urori: kwamfuta mai kayan aikin fom, takardar lissafi da imel",
      "Lokaci: kusan minti biyar a kowane darasi, tare da lokacin gini da gwaji",
      "Abubuwan da kayan aiki ke iya yi da iyakokin tsarin kyauta suna canjawa sau da yawa; ku duba shafin farashi da na taimako na kowane kayan aiki",
      "Ku gwada da bayanan ƙirƙira, kuma kada ku saka lambobin kati da sauran bayanan sirri a cikin matakan AI"
    ],
    prerequisites: "Kwas ɗin \"Kayan AI da Kowane Ɗan Kasuwa Ya Kamata Ya Sani\", ko sabawa da fom na intanet da takardun lissafi."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan kuna da wani aiki da kuke maimaitawa kowane mako", action: "zana tsarinsa a matsayin matakai daga farko zuwa ƙarshe, kuna yi wa kowanne alama a matsayin kwafa, yanke shawara ko rubutu", standard: "bayan an gyara duk abin da AI ya yi kuskure a kai" },
    { id: "O2", condition: "Idan kuna da zanen tsarin aikinku", action: "rubuta tsarin aikin a matsayin abin da ke farawa (trigger) da jerin ayyuka (actions)", standard: "tare da alamar matakin AI da matakin amincewa" },
    { id: "O3", condition: "Ta amfani da tsarin kyauta na kayan aiki marar code", action: "gina sarrafa kai da ke kai amsoshin fom cikin takardar lissafi kuma ya sanar da ku", standard: "an gwada shi da bayanan ƙirƙira kuma yana aiki" },
    { id: "O4", condition: "Idan kuna da sarrafa kai da ke aiki", action: "ƙara matakin AI da ke rubuta daftarin amsa ko rarraba buƙata, sannan ya aika muku", standard: "da dokoki masu sarari, an gwada shi da buƙatu uku daban-daban, kuma babu bayanan sirri da ke wucewa ta cikinsa" },
    { id: "O5", condition: "Don sarrafa kanku ko kowane wakilin AI", action: "rubuta jerin iyakoki na abin da zai iya yi shi kaɗai da abin da koyaushe ke buƙatar amincewarku", standard: "inda aika saƙo ga abokan ciniki da kashe kuɗi koyaushe ke buƙatar amincewa" },
    { id: "O6", condition: "Kafin da bayan kun kunna sarrafa kanku", action: "gwada shi da bayanai na ban mamaki, kunna sanarwar lalacewa, da tsara duba na kowane mako", standard: "ta yadda zai tsaya ya sanar da ku idan wani abu ya lalace" }
  ],
  chapters: [
    {
      name: "Babi na 1: Tunani a matsayin tsarin aiki",
      lessons: [
        {
          objectives: ["O1"],
          title: "Zana tsarin aikin da kuke maimaitawa",
          minutes: 5,
          goal: "Zana aikin kasuwanci da ake maimaitawa a matsayin jerin matakai daga farko zuwa ƙarshe.",
          text: [
            "Kafin ku sarrafa kowane abu da kansa, ku rubuta shi. Tsarin aiki (workflow) shi ne matakan da wani aiki ke bi daga farko zuwa ƙarshe. Misali, sabuwar tambaya daga abokin ciniki: fom ya iso, kuna kwafar bayanan cikin takardar lissafi, kuna rubuta amsa, kuna ƙara tunatarwa don biyo baya.",
            "Ku zaɓi aikin da ke faruwa sau da yawa, yana bin matakai iri ɗaya kowane lokaci, kuma yana ɓata lokacinku da kwafa, liƙa ko sake rubutu. Waɗannan su ne mafi kyau a sarrafa su da kansu.",
            "AI zai iya taimaka muku zana tsarin. Ku bayyana abin da kuke yi da kalmominku, ku tambaya: \"Ka mayar da wannan tsarin aiki mai lambobi. Ka yi alama a kan matakan da ke kwafar bayanai, waɗanda ke buƙatar yanke shawara, da waɗanda ke buƙatar rubutu.\""
          ],
          steps: ["Ku zaɓi aikin da kuke yi aƙalla sau ɗaya a mako.", "Ku bayyana shi ga mataimakin AI da kalmominku.", "Ku nemi tsarin aiki mai lambobi, mai alamar matakan kwafa, yanke shawara da rubutu.", "Ku kwatanta zanen da abin da kuke yi a gaskiya, ku gyara shi."],
          words: [["Tsarin aiki (workflow)", "matakan da wani aiki ke bi daga farko zuwa ƙarshe."], ["Sarrafa da kansa (automate)", "saita kwamfuta ta yi aikin da ake maimaitawa ba tare da kun yi kowane mataki ba."]],
          slides: [
            { title: "Ku fara rubuta shi", bullets: ["Tsarin aiki = matakai daga farko zuwa ƙarshe", "Misali: fom, takardar lissafi, amsa, tunatarwa"] },
            { title: "Ayyukan da suka fi dacewa a sarrafa da kansu", bullets: ["Suna faruwa sau da yawa", "Matakai iri ɗaya kowane lokaci", "Kwafa da sake rubutu da yawa"] },
            { title: "Ku zana shi da AI", bullets: ["Ku bayyana abin da kuke yi", "Ku nemi matakai masu lambobi", "Ku yi alamar matakan kwafa, yanke shawara da rubutu"] }
          ],
          tryIt: "Ku zana tsarin aiki ɗaya da kuke maimaitawa kowane mako tare da taimakon AI. Ku yi wa kowane mataki alama a matsayin kwafa, yanke shawara ko rubutu, kuma ku gyara duk abin da AI ya yi kuskure a kai.",
          youCanNow: "zana aikin kasuwanci da ake maimaitawa a matsayin matakai masu sarari.",
          quickCheck: [
            { objective: "O1", q: "Mene ne tsarin aiki (workflow)?", options: ["Matakan da aiki ke bi daga farko zuwa ƙarshe", "Wani nau'in takardar lissafi", "Ƙorafin abokin ciniki", "Manhajar AI"], answer: 0, why: "Tsarin aiki yana jera kowane mataki na aiki bisa tsari." },
            { objective: "O1", q: "Zanen da AI ya yi na tsarin odarku ya bar matakin da kuke duba kayan da ke ajiye. Me za ku yi?", options: ["Ku yi amfani da zanen kamar yadda yake", "Ku ƙara matakin da ya ɓace da kanku", "Ku fara sarrafa shi duk da haka", "Ku goge zanen gaba ɗaya"], answer: 1, why: "Ku ne kuka fi sanin aikinku, don haka ku ne kuke gyara zanen AI." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Abin da ke farawa (trigger) da ayyuka (actions)",
          minutes: 5,
          goal: "Mayar da zanen tsarin aikinku abin da ke farawa da jerin ayyuka.",
          text: [
            "Kowane sarrafa kai yana da abin da ke farawa (trigger) ɗaya da aiki (action) ɗaya ko fiye. Trigger shi ne abin da ke faruwa ya fara shi: \"sabuwar amsar fom\", \"sabon imel mai kalmar invoice\", \"sabuwar oda da aka biya\". Ayyuka su ne abin da ke biyo baya: \"ƙara layi a takardar lissafi\", \"aika mini saƙo\", \"ƙirƙiri abu a kalanda\".",
            "Matakan kwafa suna zama ayyuka cikin sauƙi. Matakan rubutu suna iya zama ayyukan AI. Matakan yanke shawara yawanci suna zama a hannunku, ko su zama matakin amincewa inda sarrafa kan yake jiran ku ce \"eh\".",
            "Kayan aiki marasa code kamar Zapier, Make da Microsoft Power Automate suna haɗa manhajojin da kuke amfani da su ta hanyar triggers da actions. Yawancinsu suna da tsarin kyauta mai iyaka; ku duba shafin farashi na kowane kayan aiki don ganin abin da ke ciki a yau."
          ],
          steps: ["Ku nemo abin da ke faruwa ya fara tsarin aikinku: shi ne trigger.", "Ku mayar da kowane matakin kwafa aiki (action).", "Ku mayar da matakan rubutu ayyukan AI.", "Ku mayar da matakan yanke shawara matakin amincewa, ko ku bar su a hannunku.", "Ku rubuta shi kamar haka: Idan [trigger], sai [aiki na 1], [aiki na 2]..."],
          words: [["Trigger (abin da ke farawa)", "abin da ke faruwa ya fara sarrafa kai."], ["Action (aiki)", "matakin da sarrafa kai ke yi bayan trigger."], ["Kayan aiki marar code (no-code tool)", "kayan aiki da ke bar ku gina sarrafa kai ta danna da zaɓi, ba ta rubuta shirin kwamfuta ba."]],
          slides: [
            { title: "Trigger ɗaya, wasu ayyuka", bullets: ["Trigger: abin da ke faruwa ya fara shi", "Ayyuka: abin da ke biyo baya"] },
            { title: "Ku mayar da matakai ayyuka", bullets: ["Matakan kwafa: ayyuka masu sauƙi", "Matakan rubutu: ayyukan AI", "Yanke shawara: matakin amincewa ko ku da kanku"] },
            { title: "Kayan aiki marasa code", bullets: ["Zapier, Make, Microsoft Power Automate", "Suna haɗa manhajojin da kuke amfani da su", "Ku duba iyakokin tsarin kyauta a shafukansu"] }
          ],
          sources: [{ name: "Zapier: Pricing (farashi)", url: "https://zapier.com/pricing" }, { name: "Make: Pricing (farashi)", url: "https://www.make.com/en/pricing" }],
          tryIt: "Ku rubuta tsarin aikinku a matsayin \"Idan [trigger], sai [ayyuka]\". Ku yi alama a kan aikin da AI zai yi da inda kuke son matakin amincewa.",
          youCanNow: "bayyana kowane sarrafa kai a matsayin trigger da ayyuka, tare da yanke shawara a hannunku.",
          quickCheck: [
            { objective: "O2", q: "A cikin \"Idan kuɗi ya iso, a aika rasit\", mene ne aikin (action)?", options: ["Kuɗi ya iso", "Abokin ciniki", "A aika rasit", "Banki"], answer: 2, why: "Aiki shi ne abin da ke faruwa bayan trigger." },
            { objective: "O2", q: "Ɗaya daga cikin matakan tsarin aikinku shi ne yanke shawara ko za a mayar da kuɗi. Yaya za ku yi da shi?", options: ["Ku bar sarrafa kan ya yanke shawara", "Ku bar AI ya yanke shawara", "Ku cire matakin", "Ku bar shi a matsayin matakin amincewa a gare ku"], answer: 3, why: "Matakan yanke shawara suna zama matakin amincewa ko su zauna a hannunku." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Gina sarrafa kanku na farko ba tare da code ba",
          minutes: 6,
          goal: "Gina sarrafa kai mai aiki da ke kai amsoshin fom cikin takardar lissafi kuma ya sanar da ku.",
          text: [
            "Ku fara da sarrafa kai mai sauƙi kuma marar haɗari: idan wani ya cike fom ɗin tambayarku (misali Google Form ko Microsoft Form), a ƙara amsoshinsa a takardar lissafi a kuma aika muku sanarwa. Babu abin da zai tafi ga abokin ciniki tukuna.",
            "A cikin kayan aikinku marar code, ku ƙirƙiri sabon sarrafa kai, ku zaɓi manhajar fom a matsayin trigger, ku haɗa asusunku, ku zaɓi fom ɗin. Sannan ku ƙara aikin takardar lissafi, ku daidaita kowace tambayar fom da shafi (column). Ku ƙara aiki na biyu don aika muku imel ko saƙo.",
            "Ku gwada shi da tambayar bogi mai sunan ƙirƙira kamar \"Test Customer\". Ku duba cewa layin ya bayyana a shafuka masu daidai kuma kun sami saƙon. Sai a lokacin ku kunna shi."
          ],
          steps: ["Ku yi gajeren fom ɗin tambaya mai suna, imel da buƙata.", "A kayan aiki marar code, ku zaɓi fom ɗin a matsayin trigger.", "Ku ƙara aikin takardar lissafi, ku daidaita tambayoyi da shafuka.", "Ku ƙara aikin sanar da ku.", "Ku gwada da bayanan \"Test Customer\", ku duba sakamako, sannan ku kunna shi."],
          words: [["Haɗa asusu (connect an account)", "ba kayan aikin sarrafa kai izinin amfani da ɗaya daga cikin manhajojinku."], ["Daidaita bayanai (field mapping)", "haɗa kowane yanki na bayani da inda ya kamata ya je, kamar tambayar fom da shafin takardar lissafi."]],
          slides: [
            { title: "Ku fara da mai sauƙi, marar haɗari", bullets: ["Amsoshin fom cikin takardar lissafi", "Sanarwa zuwa gare ku", "Babu abin da ke tafiya ga abokin ciniki tukuna"] },
            { title: "Ku gina shi", bullets: ["Trigger: sabuwar amsar fom", "Aiki: ƙara layi a takardar lissafi, daidaita bayanai", "Aiki: sanar da ku"] },
            { title: "Ku gwada kafin ku kunna", bullets: ["Ku yi amfani da bayanan \"Test Customer\"", "Ku duba shafuka da sanarwar", "Sannan ku kunna shi"] }
          ],
          tryIt: "Ku gina sarrafa kai na fom-zuwa-takardar-lissafi tare da sanarwa a tsarin kyauta na kayan aiki marar code. Ku gwada shi da bayanan ƙirƙira ku tabbatar yana aiki.",
          youCanNow: "gina da gwada sarrafa kai mai sauƙi marar code tsakanin manhajojin da kuke amfani da su.",
          quickCheck: [
            { objective: "O3", q: "Mene ne field mapping (daidaita bayanai) a kayan aiki marar code?", options: ["Haɗa kowane yanki na bayani da inda yake zuwa", "Zana taswirar shagonku", "Zaɓar salon rubutu", "Biyan kuɗin tsari"], answer: 0, why: "Daidaita bayanai yana kai kowace amsa zuwa shafin da ya dace." },
            { objective: "O3", q: "Kun gina sarrafa kanku. Me za ku yi kafin ku kunna shi?", options: ["Ku aika shi ga duk abokan ciniki", "Ku gwada shi da bayanan ƙirƙira kamar \"Test Customer\"", "Ku goge fom ɗin", "Ku tsallake gwaji don adana lokaci"], answer: 1, why: "Gwaji da bayanan ƙirƙira yana gano matsaloli ba tare da haɗari ba." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Tunani a matsayin tsarin aiki",
        questions: [
          { objective: "O1", q: "Wane aiki ne ya fi dacewa a fara sarrafa shi da kansa?", options: ["Shawarar shari'a ta lokaci ɗaya", "Wanda ke faruwa sau da yawa da matakai iri ɗaya da kwafa da yawa", "Abin da kuke yi sau ɗaya a shekara", "Ɗaukar ma'aikacinku na farko"], answer: 1, why: "Aikin kwafa da ake maimaitawa akai-akai shi ne ke adana lokaci mafi yawa." },
          { objective: "O2", q: "A cikin \"Idan sabuwar amsar fom ta iso, a ƙara layi a takardar lissafi\", mene ne trigger?", options: ["Imel ɗinku", "A ƙara layi a takardar lissafi", "Takardar lissafin", "Sabuwar amsar fom ta iso"], answer: 3, why: "Trigger shi ne abin da ke faruwa ya fara sarrafa kai." },
          { objective: "O2", q: "Me yawanci ke faruwa da matakan yanke shawara a sarrafa kai?", options: ["Suna zama matakin amincewa ko su zauna a hannunku", "Kayan aikin yana yin hasashe", "Ana goge su", "Abokin ciniki ne ke yanke shawara"], answer: 0, why: "Yanke shawara yana buƙatar hankalinku." },
          { objective: "O3", q: "Mene ne field mapping (daidaita bayanai)?", options: ["Zaɓar salon rubutu", "Zana taswirar gona", "Haɗa kowane yanki na bayani da inda yake zuwa", "Biyan kuɗi"], answer: 2, why: "Yana haɗa tambayoyin fom da shafukan takardar lissafi." },
          { objective: "O3", q: "Wane bayani ya kamata ku yi amfani da shi don gwada sabon sarrafa kai?", options: ["Kalmar sirrinku", "Lambar katin abokin ciniki na gaske", "Bayanan gwaji na ƙirƙira kamar \"Test Customer\"", "Babu gwaji kwata-kwata"], answer: 2, why: "Bayanan bogi suna bar ku gwada lafiya." }
        ]
      }
    },
    {
      name: "Babi na 2: Ƙara AI ku riƙe iko",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ƙara matakin AI",
          minutes: 5,
          goal: "Ƙara aikin AI da ke rubuta daftarin amsa ko rarraba buƙata.",
          text: [
            "Kayan aiki marasa code da yawa suna bar ku ƙara aikin AI: aika rubutu zuwa samfurin AI tare da umarni, ku sami amsarsa a matsayin wani ɓangare na sarrafa kai. Amfanin da aka saba: rarraba tambaya cikin rukuni, fitar da muhimman bayanai, ko rubuta daftarin amsa. A wasu kayan aiki matakin AI yana cikin tsare-tsaren biya ne kawai (lokacin da aka duba a Oktoba 2026, matakan AI na Zapier suna buƙatar tsarin biya); ku duba shafin farashi. Idan naku bai ƙunsa ba, ku sa sarrafa kan ya aiko muku buƙatar, ku liƙa ta a mataimakin hira na AI kyauta da kanku.",
            "Ku rubuta umarnin AI a hankali, kamar prompt da za a sake amfani da shi: \"Ka karanta wannan buƙatar abokin ciniki. Ka amsa ƙasa da kalmomi 100, cikin fara'a da sarari. Ka yi amfani da bayanan kasuwanci da aka bayar a nan kaɗai: [lokutan aiki, hidimomi]. Kada ka taɓa faɗin farashi. Idan ba ka tabbata ba, ka rubuta [CHECK].\"",
            "Ku aika daftarin AI zuwa GARE KU, ba ga abokin ciniki ba. Ku yi tunanin wane bayanin abokin ciniki ke wucewa zuwa hidimar AI; ku duba sharuɗɗan bayanai da sirri na kayan aikin, kuma kada ku aika lambobin kati, lambobin katin shaida ko bayanan lafiya ta cikinsa."
          ],
          steps: ["Ku ƙara aikin AI bayan matakin takardar lissafi.", "Ku rubuta umarni a hankali mai dokoki da bayanan kasuwancinku.", "Ku tura rubutun buƙatar da AI ke buƙata kaɗai.", "Ku aika daftarin AI zuwa gare ku don dubawa.", "Ku gwada da buƙatu uku daban-daban na ƙirƙira."],
          words: [["Aikin AI (AI action)", "mataki a cikin sarrafa kai da ke aika rubutu ga AI kuma yana amfani da amsarsa."], ["Sharuɗɗan bayanai (data terms)", "dokokin yadda kayan aiki ke ajiye da amfani da bayanan da kuka aika masa."]],
          slides: [
            { title: "Abin da matakin AI zai iya yi", bullets: ["Rarraba buƙata cikin rukuni", "Fitar da muhimman bayanai", "Rubuta daftarin amsa", "Yana iya buƙatar tsarin biya: ku duba shafin farashi"] },
            { title: "Umarni da aka rubuta a hankali", bullets: ["Tsawo da salon magana", "Ka yi amfani da bayanan da aka bayar kaɗai", "Kada a faɗi farashi; a rubuta [CHECK] idan ba a tabbata ba"] },
            { title: "Ku kiyaye shi lafiya", bullets: ["Daftarin yana zuwa gare ku, ba ga abokin ciniki ba", "Ku aika abin da AI ke buƙata kaɗai", "Ku duba sharuɗɗan bayanai na kayan aikin"] }
          ],
          sources: [{ name: "Zapier: Pricing (matakan AI da iyakokin tsari)", url: "https://zapier.com/pricing" }],
          tryIt: "Ku ƙara matakin AI a sarrafa kanku da ke rubuta daftarin amsa ya aika muku. Ku gwada shi da buƙatu uku daban-daban na ƙirƙira, ku rubuta duk wani kuskure.",
          youCanNow: "ƙara matakin AI a sarrafa kai da dokoki masu sarari, ba tare da bayanan sirri a ciki ba.",
          quickCheck: [
            { objective: "O4", q: "Wace doka ce ta dace a cikin umarnin matakin AI?", options: ["\"Ka ƙirƙiri farashi idan ba ka tabbata ba\"", "\"Ka aika kai tsaye ga abokin ciniki\"", "\"Ka yi amfani da bayanan da aka bayar kaɗai; kada ka taɓa faɗin farashi\"", "\"Ka saka lambar katin\""], answer: 2, why: "Dokoki masu sarari suna sa daftarin AI ya zama daidai kuma lafiya." },
            { objective: "O4", q: "Fom ɗinku yana neman lambar kati. Me za ku yi game da matakin AI?", options: ["Ku aika komai ga AI", "Ku nemi AI ya ɓoye ta", "Ku ajiye ta a cikin amsar", "Ku cire wannan wurin daga abin da matakin AI ke karɓa"], answer: 3, why: "Lambobin kati da bayanan sirri kada su wuce ta matakin AI." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Wakilan AI da iyakoki",
          minutes: 5,
          goal: "Yanke shawarar abin da wakilin AI zai iya yi shi kaɗai da abin da ke buƙatar amincewarku.",
          text: [
            "Ana ba wakilin AI (AI agent) manufa, shi kuma yana tsarawa yana ɗaukar matakai da yawa da kansa, kamar bincike, cike fom, ko amfani da manhajojinku. Wakilai suna iya adana lokaci, amma kuma suna iya yin kurakurai cikin sauri kuma da yawa.",
            "Iyakoki (guardrails) su ne ƙa'idodin da kuke saka. Doka mai sauƙi: wakili yana iya karantawa, rarrabawa da rubuta daftari shi kaɗai, amma dole ya sami amincewarku kafin ya aika wani abu ga abokin ciniki, ya kashe kuɗi, ya goge wani abu, ya canja farashi ko ya yi rajista a kowane abu. Ku ba shi damar shiga manhajoji da manyan fayiloli (folders) da yake buƙata kaɗai.",
            "Ku riƙe bayanin abin da wakilin ya yi (yawancin kayan aiki suna da tarihi ko rajistar ayyuka) kuma ku fara da ƙananan ayyuka marasa haɗari. Ku ƙara masa 'yanci ne kawai bayan ya yi aiki da kyau na ɗan lokaci."
          ],
          steps: ["Ku jera abin da wakilin zai yi.", "Ku yi wa kowane aiki alama: an yarda ya yi shi kaɗai, ko yana buƙatar amincewarku.", "Ku tilasta amincewa don aikawa, kashe kuɗi, gogewa, farashi da rajista.", "Ku iyakance damarsa zuwa manhajoji da manyan fayilolin da yake buƙata kaɗai.", "Ku riƙa duba tarihinsa ko rajistar ayyukansa akai-akai."],
          words: [["Wakilin AI (AI agent)", "kayan aikin AI da ke ɗaukar matakai da yawa da kansa zuwa wata manufa."], ["Iyaka (guardrail)", "ƙa'idar da ke hana sarrafa kai ko wakili yin wani abu mai haɗari."], ["Rajistar ayyuka (log)", "bayanin abin da sarrafa kai ko wakili ya yi da lokacin da ya yi."]],
          slides: [
            { title: "Mene ne wakili", bullets: ["Ana ba shi manufa", "Yana tsarawa yana ɗaukar matakai da yawa shi kaɗai", "Yana da sauri, har da kurakurai masu sauri"] },
            { title: "Yana buƙatar amincewarku", bullets: ["Aika saƙo ga abokan ciniki", "Kashe kuɗi ko canja farashi", "Gogewa ko yin rajista a abubuwa"] },
            { title: "Ku iyakance ku sa ido", bullets: ["Damar shiga abin da yake buƙata kaɗai", "Ku duba tarihinsa ko rajistar ayyukansa", "Ku fara ƙarami, ku ƙara 'yanci a hankali"] }
          ],
          tryIt: "Ku rubuta jerin iyakoki don sarrafa kanku: abin da zai iya yi shi kaɗai, da abubuwa biyar da koyaushe ke buƙatar amincewarku. Ku ƙara matakin amincewa idan kayan aikinku yana da shi.",
          youCanNow: "saka iyakoki ta yadda sarrafa kai da wakilai ba za su taɓa yin matakai masu haɗari ba tare da ku ba.",
          quickCheck: [
            { objective: "O5", q: "Mene ne iyaka (guardrail) a sarrafa kai?", options: ["Ƙa'idar da ke hana ayyuka masu haɗari", "Trigger mafi sauri", "Shafin takardar lissafi", "Abin da ake biya kuɗi"], answer: 0, why: "Iyakoki suna hana sarrafa kai yin abubuwa masu haɗari shi kaɗai." },
            { objective: "O5", q: "Wani kayan aikin wakili yana neman damar shiga duk manyan fayilolinku da bankinku. Me za ku ba shi?", options: ["Duk abin da ya nema", "Manhajoji da manyan fayilolin da yake buƙata kaɗai", "Kalmar sirrinku", "Ikon shugaba (admin)"], answer: 1, why: "Ƙaramar dama tana iyakance ɓarna idan wani abu ya lalace." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Gwaji, sa ido da tsayawa lafiya idan an lalace",
          minutes: 5,
          goal: "Gwada sarrafa kanku don neman matsaloli kuma ku tsara duba na kowane mako.",
          text: [
            "Sarrafa kai yana lalacewa: wata manhaja ta canja, an canja sunan tambayar fom, kalmar sirri ta ƙare, ko AI ya ba da amsa mai ban mamaki. Ku gwada da bayanai na ban mamaki: wuri marar komai, saƙo mai tsawo sosai, saƙo a wani harshe, saƙo marar ladabi.",
            "Ku saita shi ya tsaya lafiya idan ya lalace: idan wani abu ya lalace, sarrafa kan ya tsaya ya sanar da ku, ba ya aika saƙon da bai ƙare ba. Yawancin kayan aiki suna iya aika muku imel idan wani zagayen aiki ya lalace; ku kunna wannan.",
            "Sau ɗaya a mako, ku duba rajistar ayyuka: zagaye nawa aka yi, nawa suka lalace, da daftarin AI biyu ko uku. Ku ƙidaya mintunan da aka adana. Idan yana kawo aiki fiye da yadda yake adanawa, ku canja shi ko ku kashe shi."
          ],
          steps: ["Ku gwada da wuri marar komai, saƙo mai tsawo sosai da saƙo na ban mamaki.", "Ku kunna sanarwar lalacewa.", "Ku tabbata lalacewa tana tsayar da zagayen maimakon aika wani abu.", "Kowane mako, ku duba zagaye, lalacewa da wasu daftarin AI.", "Ku riƙe shi, ku canja shi ko ku kashe shi bisa lokacin da aka adana."],
          words: [["Tsayawa lafiya (fail safely)", "idan wani abu ya lalace, a tsaya a sanar da mutum maimakon yin wani abu mai cutarwa."], ["Zagaye (run)", "lokaci ɗaya da sarrafa kai ya fara kuma ya bi matakansa."]],
          slides: [
            { title: "Sarrafa kai yana lalacewa", bullets: ["Manhajoji suna canjawa", "Ana canja sunayen tambayoyin fom", "AI yana ba da amsoshi masu ban mamaki"] },
            { title: "Ku gwada bayanai na ban mamaki", bullets: ["Wuri marar komai", "Saƙo mai tsawo sosai", "Wani harshe ko saƙo marar ladabi"] },
            { title: "Ku tsaya lafiya", bullets: ["Ya tsaya ya sanar da ku", "Kada ya taɓa aika saƙon da bai ƙare ba", "Ku kunna imel na sanarwar lalacewa"] },
            { title: "Duba na kowane mako", bullets: ["Zagaye da lalacewa a rajistar ayyuka", "Ku karanta wasu daftarin AI", "Ku ƙidaya mintunan da aka adana"] }
          ],
          tryIt: "Aikin ƙarshe: ku gwada sarrafa kanku da bayanai uku na ban mamaki, ku kunna sanarwar lalacewa, sannan ku rubuta bayaninku mai shafi ɗaya: zane, trigger da ayyuka, umarnin AI, matakin amincewa, sakamakon gwaji da duba na kowane mako.",
          youCanNow: "gina, kare, gwada da sa ido kan sarrafa kai na AI don kasuwancinku.",
          quickCheck: [
            { objective: "O6", q: "Mene ne gwaji da bayanai na ban mamaki?", options: ["Gwaji a ƙarshen mako kawai", "Gwaji da abokin cinikinku mafi kyau", "Gwaji da bayanai marasa saba, kamar wuri marar komai", "Gwaji da lambobin kati na gaske"], answer: 2, why: "Bayanai na ban mamaki suna nuna yadda sarrafa kai ke magance matsaloli." },
            { objective: "O6", q: "Dubanku na mako ya nuna zagaye biyar da suka lalace. Me za ku yi?", options: ["Ku yi watsi da su", "Ku kashe sanarwar lalacewa", "Ku ba sarrafa kan ƙarin dama", "Ku nemo dalilin, ku gyara, ku sake gwadawa"], answer: 3, why: "Sa ido don kama lalacewa da gyara ta ne." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Ƙara AI ku riƙe iko",
        questions: [
          { objective: "O4", q: "Ina ya kamata daftarin amsar AI ya tafi a sarrafa kanku na farko?", options: ["Zuwa gare ku don dubawa", "Kai tsaye ga abokin ciniki", "Zuwa kafofin sada zumunta", "Babu inda"], answer: 0, why: "Kuna duba daftari kafin abokan ciniki su gani." },
          { objective: "O4", q: "Wane bayani ne BAI kamata ya wuce ta matakin AI ba?", options: ["Jerin hidimominku", "Rubutun buƙatar", "Lokutan buɗewarku", "Lambar katin abokin ciniki"], answer: 3, why: "Lambobin kati da makamantan bayanai kada a taɓa aika su ga kayan aikin AI." },
          { objective: "O5", q: "Wane aiki ne koyaushe ya kamata ya buƙaci amincewarku?", options: ["Karanta imel", "Kashe kuɗi", "Rarraba buƙata", "Rubuta muku daftarin amsa"], answer: 1, why: "Kashe kuɗi aiki ne mai haɗari sosai." },
          { objective: "O6", q: "Mene ne ma'anar \"tsayawa lafiya\" (fail safely)?", options: ["Tsayawa da sanar da mutum idan wani abu ya lalace", "Ci gaba ko me ya faru", "Goge bayanan", "Aika imel ga kowane abokin ciniki"], answer: 0, why: "Tsayawa yana hana ayyuka masu cutarwa da ba su ƙare ba." },
          { objective: "O6", q: "Sarrafa kanku yana kawo gyare-gyare fiye da lokacin da yake adanawa. Me za ku yi?", options: ["Ku yi watsi da shi", "Ku ƙara matakan AI", "Ku canja shi ko ku kashe shi", "Ku ba shi ƙarin dama"], answer: 2, why: "Sarrafa kai ya kamata ya adana lokaci, ba ya ɓata shi ba." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Sarrafa Ayyuka da AI da Hanyoyin Aiki na Wakilan AI (Agentic)",
    questions: [
      { objective: "O1", q: "Sarrafa kai (automation) yana nufin:", options: ["Ɗaukar ƙarin mutane aiki", "Kwamfuta tana yin aikin da ake maimaitawa idan wani abu ya faru", "Rubuta kowane imel da hannu", "Kashe kwamfutarku"], answer: 1, why: "Wannan shi ne ainihin ma'anar." },
      { objective: "O1", q: "Mataki na farko kafin sarrafa wani abu da kansa shi ne:", options: ["Goge tsofaffin bayanai", "Sayen kayan aiki mafi tsada", "Ba wakili cikakkiyar dama", "Zana tsarin aikin a matsayin matakai"], answer: 3, why: "Abin da kuka fahimta ne kaɗai za ku iya sarrafawa da kansa." },
      { objective: "O1", q: "Tsarin aiki (workflow) shi ne:", options: ["Kalmar sirri", "Wani nau'in takardar lissafi", "Biyan kuɗi", "Matakan da aiki ke bi daga farko zuwa ƙarshe"], answer: 3, why: "Wannan ita ce ma'anarsa." },
      { objective: "O1", q: "Wane mataki ne ya fi sauƙin sarrafawa da kansa?", options: ["Yanke shawara ko za a ɗauki wani aiki", "Kwafar amsoshin fom cikin takardar lissafi", "Sa hannu a yarjejeniyar haya", "Zaɓar sunan kasuwanci"], answer: 1, why: "Kwafa aiki ne da ake maimaitawa kuma yana bin ƙa'ida." },
      { objective: "O2", q: "Trigger shi ne:", options: ["Samfurin AI", "Mataki na ƙarshe", "Abin da ke faruwa ya fara sarrafa kai", "Farashi"], answer: 2, why: "Triggers ne ke fara sarrafa kai." },
      { objective: "O2", q: "Wanne ne aiki (action)?", options: ["Ƙara layi a takardar lissafi", "Sabuwar amsar fom", "Sabuwar oda da aka biya", "Sabon imel ya iso"], answer: 0, why: "Sauran triggers ne." },
      { objective: "O3", q: "Zapier, Make da Microsoft Power Automate su ne:", options: ["Kafofin sada zumunta", "Bankuna", "Kayan aikin sarrafa kai marasa code", "Firintoci"], answer: 2, why: "Suna haɗa manhajoji ta hanyar triggers da actions." },
      { objective: "O3", q: "A ina ya kamata ku duba iyakokin tsarin kyauta na kayan aiki marar code?", options: ["A shafin farashinsa na kansa", "Ta hasashe", "A tsohon bidiyo", "Wajen abokin ciniki"], answer: 0, why: "Tsare-tsare da iyakoki suna canjawa." },
      { objective: "O3", q: "Kafin ku kunna sarrafa kai ya kamata ku:", options: ["Aika shi ga duk abokan ciniki", "Gwada shi da bayanan ƙirƙira", "Tsallake gwaji", "Cire sanarwa"], answer: 1, why: "Gwaji yana kama kurakurai lafiya." },
      { objective: "O4", q: "Aikin AI a cikin sarrafa kai zai iya:", options: ["Amincewa da kansa", "Sa hannu a kwangiloli", "Biyan harajinku", "Rarraba buƙata ko rubuta daftarin amsa"], answer: 3, why: "Karantawa, rarrabawa da rubuta daftari amfani ne masu kyau na AI." },
      { objective: "O4", q: "Umarnin AI mai kyau ya ƙunshi:", options: ["Dokoki kamar \"Ka yi amfani da bayanan da aka bayar kaɗai; kada ka taɓa faɗin farashi\"", "\"Ka yi duk abin da kake so\"", "Kalmar sirrinku", "Lambobin katin abokan ciniki"], answer: 0, why: "Dokoki suna rage kurakurai." },
      { objective: "O4", q: "Me yasa za ku duba sharuɗɗan bayanai na kayan aikin sarrafa kai?", options: ["Ba a buƙata ba", "Don canja tambarinku (logo)", "Don samun ragi", "Don sanin yadda ake ajiye da amfani da bayanan abokan ciniki da kuka aika"], answer: 3, why: "Bayanan abokan ciniki suna wucewa ta waɗannan kayan aiki." },
      { objective: "O5", q: "Wakilin AI shi ne:", options: ["Takardar lissafi", "Mutum mai sayarwa (wakilin tallace-tallace)", "Kayan aikin AI da ke ɗaukar matakai da yawa da kansa zuwa wata manufa", "Direban kai kaya"], answer: 2, why: "Wakilai suna tsarawa kuma suna aiki da kansu." },
      { objective: "O5", q: "Iyaka (guardrail) ita ce:", options: ["Wani nau'in trigger", "Ƙa'idar da ke hana ayyuka masu haɗari", "Layin intanet mai sauri", "Sabuwar manhaja"], answer: 1, why: "Iyakoki suna riƙe ku a matsayin masu iko." },
      { objective: "O5", q: "Wakili ya kamata ya sami amincewarku kafin ya:", options: ["Rubuta muku takarda", "Karanta imel", "Rarraba jeri", "Aika wani abu ga abokin ciniki"], answer: 3, why: "Aika saƙo ga abokan ciniki yana da haɗari sosai." },
      { objective: "O5", q: "Damar shiga nawa ya kamata wakili ya samu?", options: ["Bayanan shiga bankinku", "Duk abin da kuka mallaka", "Manhajoji da manyan fayilolin da yake buƙata kaɗai", "Duk fayilolin abokan ciniki"], answer: 2, why: "Ƙayyadaddiyar dama tana iyakance ɓarnar kurakurai." },
      { objective: "O5", q: "Lokacin ba wakili ƙarin 'yanci, ya kamata ku:", options: ["Fara ƙarami ku ƙara 'yanci bayan ya yi aiki da kyau", "Ba shi cikakken 'yanci a rana ta farko", "Kada ku taɓa duba rajistar ayyukansa", "Kashe sanarwa"], answer: 0, why: "Ana samun amincewa ta hanyar tarihin aiki mai kyau." },
      { objective: "O6", q: "Wane ne gwaji mai kyau da bayani na ban mamaki?", options: ["Saƙonni cikakku kaɗai", "Saƙo mai wuri marar komai", "Babu gwaji", "Lambar katin abokin cinikinku na gaske"], answer: 1, why: "Bayanai na ban mamaki suna nuna wuraren rauni." },
      { objective: "O6", q: "Idan wani zagayen sarrafa kai ya lalace, ya kamata ya:", options: ["Aika saƙon da bai ƙare ba", "Tsaya ya sanar da ku", "Goge takardar lissafinku", "Ci gaba da sake gwadawa har abada a ɓoye"], answer: 1, why: "Wannan shi ne tsayawa lafiya." },
      { objective: "O6", q: "A dubanku na kowane mako kuna duba:", options: ["Zagaye, lalacewa, wasu daftarin AI da mintunan da aka adana", "Tambarin kayan aikin kaɗai", "Babu komai", "Kalmomin sirrin masu gasa"], answer: 0, why: "Wannan yana nuna ko sarrafa kan yana aiki har yanzu kuma yana da amfani." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [0, 1, 4, 6, 8, 9, 13, 14, 17, 18]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Zanen tsarin aiki", objective: "O1", notYet: "Wasu matakai sun ɓace ko ba a yi musu alama ba.", meets: "Kowane mataki daga farko zuwa ƙarshe, da alamar kwafa, yanke shawara ko rubutu.", exceeds: "Yana rubuta tsawon lokacin da kowane mataki ke ɗauka da hannu a yau." },
      { name: "Trigger da ayyuka", objective: "O2", notYet: "Trigger ko ayyukan ba su da sarari.", meets: "Trigger ɗaya mai sarari da jerin ayyuka, da alamar matakin AI da amincewa.", exceeds: "An rubuta daidaita bayanai (field mapping) ga kowane yanki na bayani." },
      { name: "Sarrafa kai mai aiki", objective: "O3", notYet: "Ba ya aiki, ko an gwada shi da bayanan abokin ciniki na gaske.", meets: "Fom zuwa takardar lissafi tare da sanarwa yana aiki, an gwada shi da bayanan ƙirƙira.", exceeds: "Yana rubuta iyakokin tsarin kyauta da aka duba a shafin farashin kayan aikin da kansa." },
      { name: "Matakin AI da iyakoki", objective: "O5", notYet: "AI zai iya aika saƙo ga abokan ciniki ko yin matakai masu haɗari ba tare da amincewa ba.", meets: "Daftarin AI yana zuwa ga mai kasuwanci don amincewa; jerin iyakoki da abubuwa biyar masu buƙatar amincewa.", exceeds: "Umarnin AI yana da dokoki masu sarari, kuma an cire wuraren bayanan sirri daga matakin AI." },
      { name: "Gwaji da sa ido", objective: "O6", notYet: "Gwaje-gwaje ƙasa da uku, ko babu sanarwar lalacewa.", meets: "Gwaji uku da bayanai na ban mamaki, sanarwar lalacewa a kunne, kuma an rubuta duba na kowane mako.", exceeds: "Duba na mako ya haɗa da mintunan da aka adana da dokar lokacin da za a kashe shi." }
    ]
  },
  evaluation: {
    results: [
      "Masu kasuwanci da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu kasuwanci da sarrafa kansu ke aiki lafiya har yanzu bayan kwanaki 30 (binciken biyo baya)",
      "Mintunan da ake adanawa kowane mako a kan kwafa da amsoshi, kamar yadda masu kasuwanci suka faɗa",
      "Masu koyo da suka fara wani kwas na Koach Learn na 'yan kasuwa cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta mai kayan aikin fom kyauta, takardar lissafi da asusun imel",
      "Tsarin kyauta na kayan aiki marar code kamar Zapier, Make ko Microsoft Power Automate",
      "Bayanan gwaji na ƙirƙira, misali \"Test Customer\"",
      "Kusan minti 75 gaba ɗaya don darussa, gini, gwaji da bayani mai shafi ɗaya"
    ],
    facilitatorNotes: [
      "Ku gina misalin sarrafa kai ɗaya tare a gaban kowa kafin masu koyo su gina nasu.",
      "Ku duba iyakokin tsarin kyauta na yanzu a shafin farashin kowane kayan aiki kafin zaman.",
      "Kada ku bar masu koyo su haɗa asusun banki ko su aika wani abu ga abokan ciniki na gaske a lokacin kwas ɗin.",
      "Ku sa masu koyo su musanya jerin iyakokinsu, su nemi duk wani aiki mai haɗari da aka bari ba tare da amincewa ba.",
      "Ku ba da maki ga bayani mai shafi ɗaya da ma'aunin rubric, layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
