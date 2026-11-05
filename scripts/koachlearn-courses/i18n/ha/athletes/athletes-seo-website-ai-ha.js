"use strict";

// Koach Learn course, Hausa (ha) translation of athletes/athletes-seo-website-ai.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "athletes-seo-website-ai-ha",
  lang: "ha",
  translationOf: "athletes-seo-website-ai",
  category: "Athletes",
  name: "SEO da Gina Shafin Intanet ɗinku da AI",
  skills: "Tsara shafin intanet mai shafi ɗaya na ɗan wasa, Rubuta kalmomin shafi da taimakon AI, Gina shafi kyauta a Google Sites, Tushen SEO: taken shafi, kanun bayanai, bayanin shafi da alt text, Duba shafinku a Google",
  outcome: "gina da wallafa shafin intanet na ɗan wasa mai shafi ɗaya kyauta da Google Sites, wanda aka rubuta da taimakon AI, mai take a sarari, kanun bayanai, alt text na hotuna da hanyar tuntuɓa, don masu horarwa da kamfanoni su same ku kuma su fahimce ku.",
  about: [
    "Wannan kwas ɗin na 'yan wasa ne da ke son wuri ɗaya a intanet da suke da iko a kai, inda masu horarwa (coaches), masu ɗaukar 'yan wasa, kamfanoni da masoya za su ga ko su wane ne, da kuma masu horarwa da ke taimaka musu.",
    "Kafofin sada zumunta (social media) suna canjawa kuma suna da hayaniya. Shafin intanet mai sauƙi yana ba ku shafi mai tsabta da labarinku, ƙididdigarku (stats), bidiyon bajintarku (highlights) da yadda ake tuntuɓarku. SEO, wato search engine optimization, yana taimaka wa mutane su same shi a Google.",
    "Kowane darasi yana ɗaukar kusan minti biyar, tare da aikin \"Gwada yanzu\". Za ku tsara, ku rubuta, ku gina, kuma ku wallafa shafi ɗaya kyauta. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku wallafa shafin intanet na ɗan wasa mai shafi ɗaya a Google Sites wanda yake da: taken shafi mai sunanku da wasanku, sashen About (Game da ni) da aka rubuta da AI kuma ku kuka gyara, sashen ƙididdiga da bidiyon bajinta, hanyar tuntuɓa da ba ta bayyana bayananku na sirri ba, alt text na hotuna, da hanyar haɗi (link) zuwa shafin daga ɗaya daga cikin bayanan martabarku na social media. Sannan ku nemi sunanku da wasanku a Google, ku rubuta abin da ya bayyana.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "'Yan wasa na makarantar sakandare, na jami'a da waɗanda ke farkon sana'arsu, da ke son wuri ɗaya a intanet da suke da iko a kai, inda masu horarwa, masu ɗaukar 'yan wasa, kamfanoni da masoya za su ga ko su wane ne, da masu horarwa da ke taimaka musu.",
    startingPoint: "Suna amfani da social media da wayar zamani kowace rana, kuma wataƙila suna da bayanin martaba na ɗaukar 'yan wasa (recruiting profile) ko bidiyon bajinta. Kaɗan ne suka taɓa gina shafin intanet, kuma yawancinsu ba su taɓa jin labarin taken shafi, alt text ko sauran tushen SEO ba.",
    gap: "Shafukan social media suna da wuyar karantawa ga masu horarwa da kamfanoni, kuma suna iya canjawa ko su ɓace. Shafi mai sauƙi kuma mai aminci da injunan bincike (search engines) suke fahimta yana ba 'yan wasa shafi ɗaya a sarari da ke taimaka wa mutanen da suka dace su same su kuma su tuntuɓe su.",
    constraints: [
      "Kalmomi masu sauƙi, kusan matakin karatu na aji 8",
      "Kwamfuta ko waya, asusun Google kyauta, Google Sites da mataimakin AI kyauta",
      "Kusan minti 60 gaba ɗaya",
      "Babu bayanan sirri a shafin; 'yan wasa da ba su kai shekara 18 ba suna sa iyaye ko mai horarwa a matsayin wanda za a tuntuɓa",
      "Izinin amfani da hotuna da dokokin tambarin (logo) makaranta; sakamakon bincike yana iya ɗaukar lokaci kafin ya bayyana"
    ],
    prerequisites: "Babu. Kwas ɗin \"Gina Suna (Brand) a Kafofin Sada Zumunta ga 'Yan Wasa\" yana taimaka muku ku rubuta bayanin alamarku (brand statement) tukuna."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Kafin ku gina shafinku", action: "zaɓar manyan masu karatunku da jera abin da suke buƙata a sassa huɗu", standard: "tare da About, Stats ko Services, Highlights da Contact da suka dace da waɗannan masu karatu" },
    { id: "O2", condition: "Ta amfani da bayananku na gaskiya da mataimakin AI", action: "rubuta sashen About da zaɓar hanyar tuntuɓa mai aminci", standard: "an tabbatar da kowane bayani, babu abin da ba gaskiya ba, da muryarku, kuma babu adireshin gida, lambar waya, cikakkiyar ranar haihuwa ko jadawali" },
    { id: "O3", condition: "Don shafinku mai shafi ɗaya", action: "rubuta taken shafi, kanun sassa, gajeren bayanin shafi da alt text na hotuna da ke taimaka wa bincike", standard: "sunanku da wasanku suna cikin taken, akwai alt text a kowane hoto, kuma babu cushe kalmomin bincike (keyword stuffing)" },
    { id: "O4", condition: "Ta amfani da Google Sites", action: "gina shafi ɗaya mai sassa huɗu, hotuna, bidiyon bajinta da aka saka (embed) da maɓallin tuntuɓa", standard: "kuna amfani da hotunan da kuke da izinin amfani da su kaɗai, kuma kuna bin dokokin tambarin makarantarku" },
    { id: "O5", condition: "Idan shafinku ya shirya", action: "wallafa shi, gwada shi a waya da raba hanyar haɗinsa a bayanan martabarku (bio)", standard: "kowane link, maɓalli da bidiyo yana aiki, kuma mai horarwa ko iyaye sun duba shafin" },
    { id: "O6", condition: "Bayan wallafawa", action: "tsara yadda za ku riƙa sabunta shafin da duba yadda shafinku yake bayyana a bincike", standard: "tare da tunatarwar sabuntawa bayan kowace kakar wasa, da rubutun abin da ya bayyana idan kun nemi sunanku da wasanku" }
  ],
  chapters: [
    {
      name: "Babi na 1: Tsarawa da rubuta shafinku",
      lessons: [
        {
          objectives: ["O1"],
          title: "Me yasa ɗan wasa yake buƙatar shafin intanet mai sauƙi",
          minutes: 4,
          goal: "Yanke shawarar wa shafinku yake, da abin da dole ya nuna.",
          text: [
            "Shafin intanet shafi ne da ku kuke da iko a kai. Manhajojin sada zumunta suna iya canja dokoki ko su rasa asusunku; shafinku kuma yana nan yadda yake. Kuma ya fi sauƙi ga mai horarwa ko kamfani ya karanta fiye da gungura shafin social media.",
            "Ku yanke shawarar wa shafin yake. Shafin ɗaukar 'yan wasa (recruiting) yana buƙatar ƙididdiga, sakamakon karatu, bidiyon bajinta da shaidar masu horarwa. Shafin da ya fi mayar da hankali kan kamfanoni yana buƙatar masu bibiyarku, haɗin gwiwar da kuka yi a baya da kundin bayananku ga kafofin watsa labarai (media kit). Shafin horarwa ko sansanin wasa (camp) yana buƙatar ayyukanku, jadawali da hanyar yin rajista.",
            "A farko ku bar shi shafi ɗaya, mai sassa: About, Stats ko Services, Highlights, da Contact."
          ],
          steps: ["Ku zaɓi manyan masu karatunku: masu horarwa, kamfanoni ko abokan ciniki.", "Ku jera abin da suke buƙatar gani.", "Ku haɗa su cikin sassa huɗu: About, Stats ko Services, Highlights, Contact."],
          words: [["Shafin intanet (website)", "shafuka a intanet a wani adireshi da kuke rabawa, kamar link."], ["Sashe (section)", "wani ɓangare na shafi, mai nasa kanun bayani."]],
          slides: [
            { title: "Me yasa shafin intanet", bullets: ["Shafi ne da ku kuke da iko a kai", "Ya fi sauƙin karantawa fiye da social media"] },
            { title: "Wa yake?", bullets: ["Masu horarwa: ƙididdiga, karatu, bidiyon bajinta", "Kamfanoni: masu bibiya, haɗin gwiwa", "Abokan ciniki: ayyuka da rajista"] },
            { title: "Ku fara da shafi ɗaya", bullets: ["About", "Stats ko Services", "Highlights", "Contact"] }
          ],
          tryIt: "Ku rubuta manyan masu karatun shafinku, sannan ku jera abin da suke buƙatar gani a ƙarƙashin kanun sassa huɗu.",
          youCanNow: "tsara shafin ɗan wasa mai shafi ɗaya don masu karatu a sarari.",
          quickCheck: [
            { objective: "O1", q: "Me ya kamata shafin ɗan wasa da ya mayar da hankali kan kamfanoni ya nuna?", options: ["Jadawalin darussanku kawai", "Masu bibiyarku, haɗin gwiwar da kuka yi a baya da media kit ɗinku", "Adireshin gidanku", "Kowane sakamakon wasa tun kuna yara"], answer: 1, why: "Kamfanoni suna son ganin masu bibiyarku, haɗin gwiwarku da media kit ɗinku." },
            { objective: "O1", q: "Kuna horar da sansanin koyon wasa na yara kuma kuna son shafi dominsa. Waɗanne sassa ne suka dace?", options: ["About, Services, Highlights da Contact mai rajista", "Hotuna kawai", "Ƙididdigarku kawai", "Jerin abokan hamayya"], answer: 0, why: "Shafin horarwa ko sansani yana buƙatar ayyuka, jadawali da rajista." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Rubuta shafinku da AI",
          minutes: 5,
          goal: "Yi amfani da mataimakin AI don rubuta daftarin sashen About da kalmomin sassa, sannan ku gyara shi.",
          text: [
            "Ku ba mataimakin AI bayananku ku nemi daftari: \"I'm a 2027 graduate, 6'1\" outside hitter, 3.6 GPA, team captain, want to study engineering. Write a 100-word About section for my recruiting website in first person, friendly and confident.\" (Ma'ana: zan gama makaranta a 2027, tsayina 6'1\", ina wasan outside hitter, GPA 3.6, kyaftin ɗin ƙungiya, ina son karanta injiniyanci. Ka rubuta sashen About mai kalmomi 100 don shafin ɗaukar 'yan wasa, da \"ni\", cikin fara'a da ƙarfin gwiwa.)",
            "Ku tabbatar da kowane bayani. AI yana iya ƙara abubuwan da ba gaskiya ba, kamar kyaututtukan da ba ku ci ba. Ku cire duk abin da ba za ku iya tabbatarwa ba, ku rubuta shi da kalmominku.",
            "Ku bar bayanan sirri daga shafin: babu adireshin gida, lambar waya, cikakkiyar ranar haihuwa ko jadawalin makaranta. Don tuntuɓa, ku yi amfani da wani imel na daban da kuka buɗe don wasanni, ko fom ɗin tuntuɓa (contact form), kuma idan ba ku kai shekara 18 ba, ku sa iyaye ko mai horarwa a matsayin wanda za a tuntuɓa."
          ],
          steps: ["Ku jera bayananku na gaskiya.", "Ku nemi AI ya rubuta gajeren daftarin sashen About.", "Ku tabbatar da kowane bayani, ku cire duk abin da ba gaskiya ba.", "Ku sake rubuta shi da muryarku.", "Ku zaɓi hanyar tuntuɓa mai aminci."],
          words: [["Mutum na farko (first person)", "rubutu da \"ni\" da \"nawa\"."], ["Fom ɗin tuntuɓa (contact form)", "akwati a shafi inda masu ziyara suke aiko muku da saƙo ba tare da ganin imel ɗinku ba."]],
          slides: [
            { title: "Ku ba AI bayananku", bullets: ["Shekarar gama makaranta, matsayi, tsayi", "Sakamakon karatu, shugabanci, burinku", "Ku nemi kalmomi 100, da \"ni\""] },
            { title: "Ku tabbatar da kowane bayani", bullets: ["AI yana iya ƙirƙirar kyaututtuka", "Ku cire abin da ba za ku iya tabbatarwa ba", "Ku yi amfani da muryarku"] },
            { title: "Tuntuɓa mai aminci", bullets: ["Imel na wasanni na daban ko fom", "Babu adireshi, waya ko ranar haihuwa", "Ƙasa da shekara 18: ku ƙara iyaye ko mai horarwa"] }
          ],
          tryIt: "Ku yi amfani da mataimakin AI don rubuta daftarin sashen About ɗinku. Ku tabbatar da kowane bayani, ku gyara shi da muryarku, kuma ku buɗe imel na wasanni na daban idan ba ku da shi.",
          youCanNow: "rubuta kalmomin shafin intanet na gaskiya da taimakon AI da zaɓar hanyar tuntuɓa mai aminci.",
          quickCheck: [
            { objective: "O2", q: "Wane bayani ne ya kamata ya kasance a waje da shafinku?", options: ["Wasanku da matsayinku", "Shekarar da za ku gama makaranta", "Adireshin gidanku", "Link ɗin bidiyon bajintarku"], answer: 2, why: "Ku bar adireshin gida, lambar waya, cikakkiyar ranar haihuwa da jadawali daga shafin." },
            { objective: "O2", q: "Daftarin AI ya ce kun samu lambar yabo ta \"all-state\" (mafi kyau a jiha), amma ba ku samu ba. Me za ku yi?", options: ["Ku bar shi; babu mai dubawa", "Ku canja shi zuwa \"kusan all-state\"", "Ku nemi AI ya ƙara kyaututtuka", "Ku cire shi ku rubuta bayanan gaskiya kawai"], answer: 3, why: "Ku tabbatar da kowane bayani, ku cire duk abin da ba za ku iya tabbatarwa ba." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Tushen SEO: taimaka wa Google ya fahimci shafinku",
          minutes: 5,
          goal: "Rubuta taken shafi, kanun bayanai, gajeren bayanin shafi da alt text na hotuna da ke taimaka wa bincike.",
          text: [
            "SEO, wato search engine optimization, yana nufin sa shafinku ya zama mai sauƙin fahimta ga injunan bincike kamar Google, don mutanen da suka dace su same shi.",
            "Jagorar Google da kanta, SEO Starter Guide, tana ba da shawarar wasu tushe: taken shafi a sarari kuma na musamman (misali \"Jordan Lee | Volleyball Outside Hitter, Class of 2027\"), kanun bayanai da ke tsara shafin, kalmomi masu amfani kuma na zamani da aka rubuta don mutane, gajeren bayanin shafi, da gajeren alt text mai bayani a kan hotuna.",
            "Ku rubuta don mutane da farko. Kada ku cushe kalmomin bincike; ku yi amfani da kalmomin da mai horarwa ko kamfani zai rubuta kawai, kamar sunanku, wasanku, matsayinku, shekarar gama makaranta da garinku ko yankinku."
          ],
          steps: ["Ku rubuta taken shafi mai sunanku, wasanku da matsayinku ko aikinku.", "Ku yi amfani da kanun bayani a kowane sashe.", "Ku rubuta bayanin shafin a jimla ɗaya ko biyu.", "Ku ƙara gajeren alt text a kowane hoto.", "Ku yi amfani da kalmomin da masu karatunku za su nema."],
          words: [["SEO", "search engine optimization: taimaka wa injunan bincike su fahimci shafinku don mutane su same shi."], ["Alt text", "gajeren bayanin hoto a rubuce, wanda injunan bincike da shirye-shiryen karanta allo (screen readers) ke amfani da shi."], ["Kalmar bincike (keyword)", "kalma ko jimla da mutane suke rubutawa a injin bincike."]],
          slides: [
            { title: "SEO a layi ɗaya", bullets: ["Ku taimaka wa Google ya fahimci shafinku", "Don mutanen da suka dace su same shi"] },
            { title: "Tushen Google", bullets: ["Taken shafi a sarari kuma na musamman", "Kanun bayani a kowane sashe", "Gajeren bayani da kalmomi masu amfani", "Alt text a kan hotuna"] },
            { title: "Ku rubuta don mutane", bullets: ["Suna, wasa, matsayi, shekarar gamawa, yanki", "Babu cushe kalmomin bincike"] }
          ],
          sources: [{ name: "Google Search Central: SEO Starter Guide", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" }],
          tryIt: "Ku rubuta taken shafinku, kanun sassa huɗu, bayanin shafi a jimla ɗaya, da alt text na hotuna biyu da kuke shirin amfani da su.",
          youCanNow: "rubuta taken shafi, kanun bayanai, bayanin shafi da alt text da ke taimaka wa mutane su sami shafinku.",
          quickCheck: [
            { objective: "O3", q: "Me SEO yake taimakawa da shi?", options: ["Taimaka wa injunan bincike su fahimci shafinku don mutanen da suka dace su same shi", "Sa shafinku ya buɗe hotuna da sauri", "Ɓoye shafinku daga Google", "Biyan kuɗin talla"], answer: 0, why: "SEO yana nufin sa shafinku ya zama mai sauƙin fahimta ga injunan bincike." },
            { objective: "O3", q: "Kuna ƙara hotonku kuna tsallake shinge a tseren hurdles. Wane alt text za ku rubuta?", options: ["\"IMG_4432\"", "\"photo\"", "\"Sam Ortiz yana tsallake shinge a gasar gundumar\"", "\"hurdles hurdles hurdles track track\""], answer: 2, why: "Alt text gajeren layi ne mai bayanin hoton, ba tare da cushe kalmomin bincike ba." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Tsarawa da rubuta shafinku",
        questions: [
          { objective: "O1", q: "Me yasa za ku sami shafin intanet naku?", options: ["Social media ya saɓa wa doka", "Masu horarwa suna karanta takarda kawai", "Shafi ne da kuke da iko a kai kuma yana da sauƙin karantawa", "Yana maye gurbin atisaye"], answer: 2, why: "Shafinku yana nan yadda yake kuma yana da sauƙi ga masu horarwa da kamfanoni su duba." },
          { objective: "O2", q: "AI ya ƙara kyautar da ba ku ci ba a sashen About ɗinku. Me za ku yi?", options: ["Ku cire ta", "Ku bar ta", "Ku ƙara wasu kyaututtuka", "Ku ɓoye ta da ƙananan haruffa"], answer: 0, why: "Ku sa bayanan gaskiya da za ku iya tabbatarwa kawai." },
          { objective: "O2", q: "Wace hanyar tuntuɓa ce mai aminci ga wanda bai kai shekara 18 ba?", options: ["Lambar wayar gida", "Adireshin gida", "Jadawalin darussa", "Imel na wasanni ko fom, tare da iyaye ko mai horarwa a matsayin wanda za a tuntuɓa"], answer: 3, why: "Yana bar mutane su tuntuɓe ku ba tare da bayyana bayanan sirri ba." },
          { objective: "O3", q: "Wane ne taken shafi mai ƙarfi?", options: ["\"Home\"", "\"Jordan Lee | Volleyball Outside Hitter, Class of 2027\"", "\"Welcome!!!\"", "\"Page 1\""], answer: 1, why: "Yana faɗa wa mutane da Google ainihin abin da shafin yake." },
          { objective: "O3", q: "Mene ne alt text?", options: ["Kalmar sirri ta ɓoye", "Gajeren bayanin hoto", "Wani shafin intanet na biyu", "Hashtag"], answer: 1, why: "Alt text yana bayanin hotuna ga injunan bincike da shirye-shiryen karanta allo." }
        ]
      }
    },
    {
      name: "Babi na 2: Gini da wallafawa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Gina shafinku a Google Sites",
          minutes: 6,
          goal: "Gina shafinku mai shafi ɗaya a Google Sites.",
          text: [
            "Google Sites kayan gina shafin intanet ne kyauta daga Google. Kuna buƙatar asusun Google. Ku buɗe sites.google.com, ku fara sabon shafi babu komai (blank) ko samfuri (template), sannan ku ƙara sassanku.",
            "Ku yi amfani da kayan ginin don ƙara akwatunan rubutu, hotuna, kanun bayanai da maɓallai, da kuma saka (embed) bidiyon bajintarku na YouTube. Ku zaɓi salo mai sauƙi da launukan ƙungiyarku da rubutu mai sauƙin karantawa. Ku yi amfani da hotunan da ku kuka ɗauka ko kuke da izinin amfani da su kaɗai, kuma ku bi dokokin makarantarku game da tambari (logo).",
            "Ku bar shi a tsabtace: shafi ɗaya, sassa huɗu, manyan haruffa masu sauƙin karantawa, da maɓalli ɗaya a sarari don tuntuɓarku ko kallon bidiyon bajinta."
          ],
          steps: ["Ku je sites.google.com ku shiga asusunku.", "Ku fara shafi babu komai ko samfuri.", "Ku ƙara taken shafinku da sassa huɗu masu kanun bayani.", "Ku liƙa kalmominku da kuka gyara.", "Ku ƙara hotuna masu alt text, ku saka bidiyon bajintarku.", "Ku ƙara maɓallin tuntuɓa ɗaya ko link na fom."],
          words: [["Samfuri (template)", "tsarin shafi da aka riga aka shirya, ku kuma ku cike shi."], ["Saka (embed)", "nuna bidiyo ko wani abu daga wani shafi a cikin shafinku."]],
          slides: [
            { title: "Google Sites", bullets: ["Kayan gina shafin intanet kyauta", "Yana buƙatar asusun Google", "sites.google.com"] },
            { title: "Ku ƙara abubuwanku", bullets: ["Take da sassa huɗu", "Hotuna masu alt text", "Bidiyon bajinta da aka saka (embed)"] },
            { title: "Ku bar shi a tsabtace", bullets: ["Rubutu mai sauƙin karantawa, launukan ƙungiya", "Maɓalli ɗaya a sarari", "Hotunanku; ku bi dokokin tambari"] }
          ],
          tryIt: "Ku gina shafinku a Google Sites da takenku, sassa huɗu, aƙalla hoto ɗaya mai alt text, da bidiyon bajintarku ko wurin ajiye shi na wucin gadi.",
          youCanNow: "gina shafin intanet na ɗan wasa mai shafi ɗaya kuma a tsabtace a Google Sites.",
          quickCheck: [
            { objective: "O4", q: "Ina za ku je don fara shafi a Google Sites?", options: ["sites.google.com", "Shafin intanet na makarantarku", "Manhajar social media", "Search Console"], answer: 0, why: "Ku buɗe sites.google.com ku shiga da asusun Google." },
            { objective: "O4", q: "Kuna son bidiyon bajintarku a shafinku. Me za ku yi?", options: ["Ku liƙa hoton allo (screenshot) na bidiyon", "Ku bayyana shi da kalmomi kawai", "Ku aika shi ga masu ziyara ta imel", "Ku saka (embed) bidiyonku na YouTube a shafin"], answer: 3, why: "Google Sites yana iya saka bidiyon bajinta na YouTube." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Wallafawa da duba shafinku",
          minutes: 5,
          goal: "Wallafa shafinku, gwada shi a waya, da raba link ɗinsa.",
          text: [
            "Idan shafinku ya shirya, ku danna maɓallin wallafawa (publish) ku zaɓi adireshin shafinku a intanet. Ku zaɓi gajeren adireshi mai sunanku da wasanku.",
            "Ku gwada shi a waya, domin yawancin masu horarwa da masoya za su buɗe shi a waya. Ku duba cewa kowane link da maɓalli yana aiki, bidiyon yana kunnawa, kuma rubutun yana da sauƙin karantawa. Ku nemi mai horarwa ko iyaye su duba shi su ma.",
            "Ku raba link ɗin a bayanan martabarku (bio) na social media, a ƙarshen imel ɗinku (email signature) da kuma a bayanan martabarku na ɗaukar 'yan wasa. Idan kun canja bayanan tuntuɓarku, ku sabunta shafin nan take."
          ],
          steps: ["Ku danna publish ku zaɓi gajeren adireshin intanet.", "Ku buɗe shi a waya.", "Ku gwada kowane link, maɓalli da bidiyo.", "Ku nemi mai horarwa ko iyaye su duba shi.", "Ku ƙara link ɗin a bio ɗinku da ƙarshen imel ɗinku."],
          words: [["Wallafawa (publish)", "sa shafinku ya fito a intanet don kowa ya gani."], ["URL", "adireshin intanet, kamar link ɗin da kuke rabawa."]],
          slides: [
            { title: "Wallafawa", bullets: ["Ku zaɓi gajeren adireshi mai sunanku da wasanku"] },
            { title: "Ku gwada a waya", bullets: ["Link da maɓallai suna aiki?", "Bidiyo yana kunnawa?", "Rubutu yana da sauƙin karantawa?"] },
            { title: "Ku raba shi", bullets: ["Bio na social media", "Ƙarshen imel (email signature)", "Bayanan martaba na ɗaukar 'yan wasa"] }
          ],
          tryIt: "Ku wallafa shafinku, ku gwada shi a waya, ku nemi babban mutum ɗaya ya duba shi, sannan ku ƙara link ɗin a bayanin martabarku ɗaya na social media.",
          youCanNow: "wallafawa, gwadawa da raba shafin intanet ɗinku na ɗan wasa.",
          quickCheck: [
            { objective: "O5", q: "Wane ne adireshin shafi mai kyau?", options: ["Dogon jerin lambobi", "Gajere, mai sunanku da wasanku", "Lambar wayarku", "Sunan makarantarku kawai"], answer: 1, why: "Ku zaɓi gajeren adireshi mai sunanku da wasanku." },
            { objective: "O5", q: "Kun canja imel ɗinku na wasanni. Me za ku yi da shafinku?", options: ["Ku bar shi; babu mai karantawa", "Ku goge shafin", "Ku sabunta bayanan tuntuɓa nan take", "Ku jira har kakar wasa ta gaba"], answer: 2, why: "Idan bayanan tuntuɓarku sun canja, ku sabunta shafin nan take." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Sabunta shafin da duba bincike",
          minutes: 5,
          goal: "Tsara yadda za ku riƙa sabuntawa, da ganin yadda shafinku yake bayyana a bincike.",
          text: [
            "Injunan bincike da masu ziyara duka suna son shafukan da aka sabunta. Ku sabunta ƙididdigarku, bidiyon bajinta da jadawalinku bayan kowace kakar wasa ko babban taron wasa, kuma ku canja kwanan wata a sashen About ɗinku.",
            "Sababbin shafuka suna iya ɗaukar lokaci kafin su bayyana a sakamakon bincike. Ku nemi sunanku tare da wasanku a Google ku ga abin da ya bayyana. Google yana da wani kayan aiki kyauta mai suna Search Console da masu shafuka za su iya amfani da shi don ganin yadda shafinsu yake tafiya a bincike; jagorar SEO Starter Guide tana bayaninsa.",
            "Bayan 'yan watanni, ku tambayi mataimakin AI: \"Ga kalmomin shafina. Ka ba ni hanyoyi uku na sa shi ya fi sarari ga masu horarwa na jami'a.\" Sannan ku yanke shawarar abin da za ku canja."
          ],
          steps: ["Ku sa tunatarwa don sabuntawa bayan kowace kakar wasa.", "Ku nemi sunanku tare da wasanku, ku rubuta abin da ya bayyana.", "Ku karanta game da Search Console a jagorar Google.", "Ku nemi AI ya ba da shawarwari uku na sa shafin ya fi sarari, ku zaɓi abin da za ku yi amfani da shi."],
          words: [["Search Console", "kayan aikin Google kyauta da ke nuna wa masu shafuka yadda shafinsu yake bayyana a Google Search."], ["Sakamakon bincike (search results)", "jerin shafukan da injin bincike yake nunawa don wani bincike."]],
          slides: [
            { title: "Ku riƙa sabuntawa", bullets: ["Ku sabunta ƙididdiga da bidiyon bajinta kowace kakar wasa", "Ku canja kwanan wata a sashen About"] },
            { title: "Ku duba bincike", bullets: ["Sababbin shafuka suna iya ɗaukar lokaci kafin su bayyana", "Ku nemi sunanku tare da wasanku", "Search Console na masu shafuka ne"] },
            { title: "Ku inganta da AI", bullets: ["Ku nemi shawarwari uku na sa shi ya fi sarari", "Ku ne ke yanke abin da za a canja"] }
          ],
          sources: [{ name: "Google Search Central: SEO Starter Guide", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" }],
          tryIt: "Aikin ƙarshe: ku tabbata shafinku da kuka wallafa yana da take a sarari, kalmomin About da aka rubuta da taimakon AI kuma kuka gyara, ƙididdiga da bidiyon bajinta, hanyar tuntuɓa mai aminci, alt text na hotuna da link zuwa gare shi daga social media. Ku nemi sunanku da wasanku a Google ku rubuta abin da ya bayyana.",
          youCanNow: "riƙa sabunta shafinku da duba yadda yake bayyana a bincike.",
          quickCheck: [
            { objective: "O6", q: "Mene ne Google Search Console?", options: ["Kayan aikin Google kyauta da ke nuna yadda shafinku yake tafiya a bincike", "Sabis ɗin talla na kuɗi", "Kayan gina shafin intanet", "Manhajar social media"], answer: 0, why: "Search Console yana bar masu shafuka su ga yadda shafinsu yake tafiya a bincike." },
            { objective: "O6", q: "Kakar wasanku ta ƙare yanzu. Me tsarin sabuntawarku ya ce ku yi?", options: ["Babu komai har ku gama makaranta", "Ku goge tsofaffin bidiyon bajinta kawai", "Ku canja adireshin shafinku", "Ku sabunta ƙididdigarku, bidiyon bajinta da kwanan wata a sashen About"], answer: 3, why: "Ku sabunta bayan kowace kakar wasa ko babban taro don shafin ya kasance na zamani." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Gini da wallafawa",
        questions: [
          { objective: "O4", q: "Me kuke buƙata don amfani da Google Sites?", options: ["Tsarin biyan kuɗi", "Digirin rubuta code", "Sabar (server)", "Asusun Google"], answer: 3, why: "Google Sites kyauta ne idan kuna da asusun Google." },
          { objective: "O4", q: "Waɗanne hotuna ne za ku iya sakawa a shafinku?", options: ["Hotunan da ku kuka ɗauka ko kuke da izinin amfani da su", "Duk hoton da kuka samu a intanet", "Hotunan sauran 'yan wasa", "Tambarin makaranta ba tare da neman izini ba"], answer: 0, why: "Ku yi amfani da hotunan da naku ne ko aka ba ku izini kawai." },
          { objective: "O5", q: "Me yasa za ku gwada shafinku a waya?", options: ["An hana amfani da waya", "Yana da muni a kwamfuta", "Yawancin masu ziyara za su buɗe shi a waya", "Babu dalili"], answer: 2, why: "Masu horarwa da masoya sau da yawa suna buɗe link a waya." },
          { objective: "O6", q: "Shafinku bai bayyana a Google ranar da kuka wallafa shi ba. Me yasa haka zai iya faruwa?", options: ["Ya lalace har abada", "Google ya hana 'yan wasa", "Dole ku biya", "Sababbin shafuka suna iya ɗaukar lokaci kafin su bayyana"], answer: 3, why: "Injunan bincike suna buƙatar lokaci don su gano sababbin shafuka." },
          { objective: "O6", q: "Yaushe ya kamata ku sabunta ƙididdigarku da bidiyon bajinta?", options: ["Ba har abada", "Bayan kowace kakar wasa ko babban taro", "Sau ɗaya a kowace shekara goma", "Sai mai horarwa ya yi korafi kawai"], answer: 1, why: "Sababbin bayanai suna taimaka wa masu ziyara da bincike." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: SEO da Gina Shafin Intanet ɗinku da AI",
    questions: [
      { objective: "O3", q: "SEO gajartawar:", options: ["Social everyday output", "Sports event organizer", "Search engine optimization", "Site editing online"], answer: 2, why: "Yana nufin taimaka wa injunan bincike su fahimci shafinku." },
      { objective: "O1", q: "Shafin ɗaukar 'yan wasa ya kamata ya nuna:", options: ["Ƙididdiga, sakamakon karatu, bidiyon bajinta", "Adireshin gidanku", "Kalmar sirrinku", "Gulmar abokan hamayya"], answer: 0, why: "Abin da masu horarwa suke buƙata ke nan." },
      { objective: "O1", q: "Shafuka nawa ya kamata ku fara da su?", options: ["Ɗaya", "Ashirin", "Babu ko ɗaya", "Ɗari"], answer: 0, why: "Shafi ɗaya a sarari ya isa don farawa." },
      { objective: "O1", q: "Wane sashe ne ke taimaka wa mutane su tuntuɓe ku?", options: ["Zanen ƙasan shafi", "Launukan salo", "Contact", "Nau'in haruffa (fonts)"], answer: 2, why: "Contact yana faɗa wa mutane yadda za su tuntuɓe ku." },
      { objective: "O2", q: "Idan AI ya rubuta daftarin sashen About ɗinku, dole ku:", options: ["Wallafa shi ba tare da karantawa ba", "Tabbatar da kowane bayani", "Ƙara wasu kyaututtuka", "Tsawaita shi"], answer: 1, why: "AI yana iya ƙirƙirar bayanai." },
      { objective: "O2", q: "Wanne ne BAI kamata ya kasance a shafinku ba?", options: ["Matsayinku", "Bidiyon bajintarku", "Shekarar gama makarantarku", "Cikakkiyar ranar haihuwarku da adireshin gidanku"], answer: 3, why: "Waɗannan bayanan sirri ne." },
      { objective: "O2", q: "Fom ɗin tuntuɓa yana bar mutane su:", options: ["Ga kalmar sirrinku", "Gyara shafinku", "Aiko muku da saƙo ba tare da ganin imel ɗinku ba", "Biya ku"], answer: 2, why: "Yana kare adireshin imel ɗinku." },
      { objective: "O3", q: "Me ke taimaka wa Google ya fahimci shafinku?", options: ["Manyan haruffa duka", "Rubutun da aka ɓoye", "Babu kalmomi ko kaɗan", "Taken shafi a sarari da kanun bayanai"], answer: 3, why: "Jagorar Google tana ba da shawarar take da kanun bayanai a sarari." },
      { objective: "O3", q: "Cushe kalmomin bincike (keyword stuffing) yana nufin:", options: ["Maimaita kalmomin bincike ta hanyar da ba ta dace ba", "Rubutu don mutane", "Ƙara alt text", "Amfani da kanun bayanai"], answer: 0, why: "Ku rubuta don mutane, ba cushe kalmomin bincike ba." },
      { objective: "O3", q: "Alt text mai kyau na hoton wasa shi ne:", options: ["\"IMG_2034\"", "\"Jordan Lee yana buga ƙwallo da ƙarfi a wasan kusa da na ƙarshe na jiha\"", "\"photo\"", "Babu komai"], answer: 1, why: "Gajere ne kuma yana bayani." },
      { objective: "O3", q: "Bayanin shafi ya kamata ya zama:", options: ["Cikakkiyar maƙala", "Jerin kalmomin sirri", "Jimla ɗaya ko biyu game da shafin", "Babu komai"], answer: 2, why: "Gajerun bayanai suna iya bayyana a sakamakon bincike." },
      { objective: "O4", q: "Google Sites shi ne:", options: ["Kayan gina shafin intanet kyauta", "Manhaja ta biyan kuɗi kawai", "Dandalin sada zumunta", "Wasan bidiyo"], answer: 0, why: "Kayan ginin Google ne kyauta." },
      { objective: "O4", q: "Don nuna bidiyon bajintarku a shafinku, kuna:", options: ["Bayyana shi kawai", "Aika shi ga masu ziyara ta imel", "Buga shi a takarda", "Saka shi (embed)"], answer: 3, why: "Sakawa (embed) yana kunna shi a shafinku." },
      { objective: "O4", q: "Kafin ku yi amfani da tambarin makarantarku ya kamata ku:", options: ["Sake zana shi", "Bi dokokin makarantarku game da tambari", "Yi watsi da dokoki", "Sayar da shi"], answer: 1, why: "Makarantu ne ke da iko kan tambarinsu." },
      { objective: "O5", q: "Adireshin shafi mai kyau shi ne:", options: ["Lambobi barkatai", "Gajere, mai sunanku da wasanku", "Mai tsawo sosai", "Kalmar sirrinku"], answer: 1, why: "Yana da sauƙin tunawa da rabawa." },
      { objective: "O5", q: "Bayan wallafawa, wa ya kamata ya duba shafinku?", options: ["Babu kowa", "Baƙo a intanet", "Abokin hamayya", "Mai horarwa ko iyaye"], answer: 3, why: "Ido na biyu yana kama kurakurai." },
      { objective: "O5", q: "A ina ya kamata ku raba link ɗin shafinku?", options: ["A bio, ƙarshen imel da bayanan martaba na ɗaukar 'yan wasa", "Babu ko'ina", "A takarda kawai", "A saƙonnin banza (spam)"], answer: 0, why: "A can ne masu horarwa da kamfanoni suke dubawa." },
      { objective: "O6", q: "Search Console shi ne:", options: ["Na'urar wasan bidiyo", "Talla ta kuɗi", "Kayan aikin Google kyauta da ke nuna yadda shafinku yake bayyana a bincike", "Manhajar sada zumunta"], answer: 2, why: "Masu shafuka suna amfani da shi don duba yadda shafinsu yake tafiya a bincike." },
      { objective: "O6", q: "Yaya za ku duba yadda shafinku yake bayyana a bincike?", options: ["Ku nemi AI ya yi hasashe", "Ku duba yanayi", "Ku sake kunna wayarku", "Ku nemi sunanku tare da wasanku"], answer: 3, why: "Bincike yana nuna abin da wasu suke gani." },
      { objective: "O6", q: "AI ya ba da shawarar canje-canje uku ga shafinku. Ku:", options: ["Dole ku yi amfani da duka", "Ku yanke wanda za ku yi amfani da shi", "Kada ku yi amfani da ko ɗaya", "Ku goge shafinku"], answer: 1, why: "AI yana ba da shawara; ku ne ke yanke shawara." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      1,
      4,
      7,
      9,
      11,
      14,
      17
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Taken shafi da tushen SEO",
        objective: "O3",
        notYet: "Taken ba shi da sunanku ko wasanku, ko hotuna ba su da alt text.",
        meets: "Take mai suna da wasa, kanun bayani a kowane sashe, gajeren bayanin shafi da alt text a kowane hoto.",
        exceeds: "Yana amfani da kalmomin da masu karatu za su nema, kamar matsayi, shekarar gama makaranta da yanki, ba tare da cushe su ba."
      },
      {
        name: "Sashen About",
        objective: "O2",
        notYet: "Yana da bayanan da ba gaskiya ba, ko yana kama da rubutun AI da aka kwafa.",
        meets: "Kowane bayani gaskiya ne kuma an tabbatar da shi, an rubuta shi da muryar ɗan wasan.",
        exceeds: "An daidaita shi da manyan masu karatu, kamar karatu da hali ga masu horarwa na jami'a."
      },
      {
        name: "Ƙididdiga da bidiyon bajinta",
        objective: "O4",
        notYet: "Babu su, sun tsufa, ko an yi amfani da hotuna ba tare da izini ba.",
        meets: "Ƙididdiga na yanzu da bidiyon bajinta da aka saka (embed), da hotunan da aka ba da izini kawai, kuma an bi dokokin tambarin makaranta.",
        exceeds: "Yana da kwanan watan da aka sabunta ƙididdiga na ƙarshe, da gajeren bayani a ƙarƙashin kowane bidiyon bajinta."
      },
      {
        name: "Tuntuɓa mai aminci",
        objective: "O2",
        notYet: "Yana nuna adireshin gida, lambar waya ta sirri ko cikakkiyar ranar haihuwa.",
        meets: "Imel na wasanni ko fom ɗin tuntuɓa, tare da iyaye ko mai horarwa a matsayin wanda za a tuntuɓa ga waɗanda ba su kai shekara 18 ba.",
        exceeds: "An gwada maɓallin tuntuɓa, kuma amsoshi suna zuwa asusun da ake dubawa akai-akai."
      },
      {
        name: "An wallafa, an haɗa, an duba",
        objective: "O5",
        notYet: "Ba a wallafa ba, links sun lalace, ko ba a haɗa shi daga bayanin martaba ba.",
        meets: "An wallafa shi a gajeren adireshi, an gwada shi a waya, mai horarwa ko iyaye sun duba shi, kuma an haɗa shi daga bayanin martaba ɗaya na social media.",
        exceeds: "An rubuta sakamakon bincike na suna da wasa, kuma an sa tunatarwar sabuntawa."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka wallafa shafinsu kuma suka sami \"Ya cika\" ko \"Ya wuce\" a kowane layin rubric",
      "Masu koyo da shafinsu ya bayyana idan sun nemi sunansu da wasansu a binciken biyo baya na kwanaki 30",
      "Masu koyo da suka ce mai horarwa, mai ɗaukar 'yan wasa ko kamfani ya tuntuɓe su ta shafinsu",
      "Masu koyo da suka sabunta shafinsu bayan kakar wasa ta gaba ko babban taro"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta (ita ce mafi sauƙi) ko waya mai intanet",
      "Asusun Google kyauta don Google Sites",
      "Mataimakin AI kyauta (ChatGPT, Microsoft Copilot ko Google Gemini)",
      "Ƙididdigarku, link na bidiyon bajinta da hotunan da kuke da izinin amfani da su",
      "Kusan minti 60"
    ],
    facilitatorNotes: [
      "Ku taimaka wa 'yan wasa su buɗe imel na wasanni na daban ko fom ɗin tuntuɓa don bayanansu na sirri su kasance a ɓoye.",
      "Ga waɗanda ba su kai shekara 18 ba, ku sa iyaye ko mai kula da su su duba shafin kafin a wallafa shi kuma a sa su a matsayin waɗanda za a tuntuɓa.",
      "Ku duba dokokin makaranta game da tambari da hotuna kafin darasin gini.",
      "Ku sa 'yan wasa su musanya wayoyi su gwada shafukan juna don neman links da suka lalace da sauƙin karantawa.",
      "Ku tunatar da masu koyo cewa sababbin shafuka suna iya ɗaukar lokaci kafin su bayyana a bincike; ku sake dubawa a binciken biyo baya na kwanaki 30."
    ]
  }
};
