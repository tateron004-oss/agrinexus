"use strict";

// Koach Learn course, Hausa (ha) translation of athletes/athletes-ai-digital-marketing.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "athletes-ai-digital-marketing-ha",
  lang: "ha",
  translationOf: "athletes-ai-digital-marketing",
  category: "Athletes",
  name: "Dabarun Tallata Kai ta Intanet da AI ga 'Yan Wasa",
  skills: "Sanya burin tallata kai, Gane masu sauraronku, Zaɓar hanyoyin isa gare su, Tsara shirin makonni 4 da AI, Auna sakamako da gyarawa",
  outcome: "amfani da mataimakin AI don ginawa da gudanar da shirin tallata kanku ta intanet mai sauƙi na makonni 4 a matsayinku na ɗan wasa: buri ɗaya, rukunin masu sauraro ɗaya, hanyoyi biyu, shirin wallafawa na kowane mako, da lambobi uku da kuke bibiya.",
  about: [
    "Wannan kwas ɗin na 'yan wasa ne na makarantar sakandare, na jami'a da waɗanda ke farkon sana'arsu, waɗanda ke son ƙara yawan masu bibiyarsu da gangan, don neman shiga ƙungiyar jami'a (recruiting), damar NIL, sansanin horo (camp) ko sana'a ta gaba, da kuma masu horarwa da ke taimakonsu.",
    "Tallata kai (marketing) yana nufin sa mutanen da suka dace su san ku, su so ku, su kuma amince da ku. Za ku sanya buri, ku zaɓi masu sauraronku da hanyoyinku, ku yi amfani da AI don tsara shirin makonni 4, ku kuma koyi waɗanne lambobi za ku kalla.",
    "Kowane darasi yana ɗaukar kusan minti biyar, tare da aikin \"Gwada yanzu\". Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin. Dokokin NIL sun bambanta bisa makaranta, jiha da mataki, don haka ku tambayi ofishin bin ƙa'idoji (compliance office) na makarantarku ko ƙungiyar wasanni ta jiharku kafin kowace yarjejeniya da ake biyan kuɗi."
  ],
  finalTask: "Ku rubuta shirin tallata kai na makonni 4 a shafi ɗaya: buri ɗaya na SMART, bayanin masu sauraronku, hanyoyi biyu, shirin wallafawa na kowane mako da kuka tsara da AI, da lambobi uku da za ku bibiya. Ku gudanar da mako na farko, ku rubuta lambobin, sannan ku rubuta canji ɗaya don mako na biyu.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "'Yan wasa na makarantar sakandare, na jami'a da waɗanda ke farkon sana'arsu, waɗanda ke son ƙara yawan masu bibiyarsu da gangan, don neman shiga ƙungiyar jami'a, damar NIL, sansanin horo ko sana'a ta gaba, da masu horarwa da ke taimakonsu.",
    startingPoint: "Suna amfani da kafofin sada zumunta (social media) kowace rana kuma suna wallafa abubuwa lokaci-lokaci, yawanci ba tare da shiri ba. Kaɗan ne ke da rubutaccen buri, sanannun masu sauraro, shirin wallafawa ko lambobin da suke bibiya, kuma da yawa ba su da tabbas game da dokokin bayyana kyauta ko wallafar da aka biya.",
    gap: "Wallafawa ba tare da buri ko masu sauraro ba da wuya ya kawo amsa daga masu horarwa, masu yin rajista ko sha'awar kamfanoni, kuma wallafar ƙarya ko wadda ba a bayyana an biya ta ba tana iya lalata amincewa ta kuma karya dokokin talla. Shiri mai sauƙi na makonni huɗu, da wallafa ta gaskiya da lambobin da ake bibiya, yana mayar da kafofin sada zumunta zuwa damammaki na gaske.",
    constraints: [
      "Kalmomi masu sauƙi, kusan matakin karatu na aji 7",
      "Waya mai manhajojin sada zumunta da mataimakin AI kyauta; kayan aiki na kyauta kaɗai",
      "Kusan minti 60 na darussa, da makonni huɗu na wallafawa tare da makaranta da horo",
      "Dokokin shekaru na kowace manhaja; 'yan wasa ƙasa da shekara 18 su sa iyaye ko masu kula da su",
      "Dokokin bayyanawa na FTC, dokokin NIL na makaranta da NCAA ko ƙungiyar wasa, da tsaron kai: babu wurin da kuke a yanzu ko bayanan gida"
    ],
    prerequisites: "Babu"
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan kun san abin da kuke so a makonni huɗu masu zuwa", action: "rubuta buri ɗaya na tallata kai na SMART", standard: "da dukkan sassa biyar na SMART, har da lamba da kwanan wata" },
    { id: "O2", condition: "Idan kun san rukunin da kuke son isa gare shi", action: "rubuta gajeren bayanin masu sauraro: su wane ne, me suke damuwa da shi, a ina suke ɓata lokaci a intanet, da me ke sa su ɗauki mataki", standard: "an tabbatar da shi da mutane biyu ko uku na gaske daga wannan rukunin" },
    { id: "O3", condition: "Idan kuna da bayanin masu sauraronku", action: "zaɓar hanyoyi biyu da masu sauraronku sun riga suna ɓata lokaci a cikinsu", standard: "da dalili ga kowacce, kuma an duba dokokin shekaru da saitunan sirri" },
    { id: "O4", condition: "Ta amfani da mataimakin AI kyauta", action: "ƙirƙirar shirin wallafawa na makonni 4 mai ra'ayi, tsari da kira zuwa mataki ga kowace wallafa", standard: "an gyara shi ya dace da jadawalinku, kuma babu wurin da kuke a yanzu, gida ko jadawalin makaranta da aka bayyana" },
    { id: "O5", condition: "Idan kuna da rubutun wallafa (caption) da AI ya tsara", action: "sake rubuta shi a matsayin wallafa ta gaskiya da muryarku, da bayyanawa a sarari idan wani kamfani ya ba ku wani abu", standard: "babu iƙirarin da ba za ku iya tabbatarwa ba, kuma bayyanawar tana da sauƙin gani tare da wallafar" },
    { id: "O6", condition: "Bayan kowane mako na wallafawa", action: "rubuta lambobi uku da ke da alaƙa da burinku da zaɓar canji ɗaya don mako na gaba", standard: "an rubuta su kowane mako a takardar lissafi (sheet), kuma ku ne kuka yanke canjin" }
  ],
  chapters: [
    {
      name: "Babi na 1: Buri, masu sauraro da hanyoyi",
      lessons: [
        {
          objectives: ["O1"],
          title: "Sanya burin tallata kai",
          minutes: 5,
          goal: "Rubuta buri ɗaya na tallata kai na SMART don makonni huɗu masu zuwa.",
          text: [
            "Tallata kai ba tare da buri ba wallafawa ce kawai. Ku yanke abin da kuke so a makonni huɗu masu zuwa: masu horarwa na jami'a su lura da ku, cike sansanin horo na yara, gina masu bibiya da kamfani zai damu da su, ko gina masu bibiya don sana'arku ta gaba.",
            "Ku sa ya zama SMART: Specific (takamaimai), Measurable (ana iya aunawa), Achievable (ana iya cimmawa), Relevant (yana da muhimmanci gare ku) da Time-bound (yana da ƙayyadadden lokaci). \"Samun mutane 15 da suka yi rajista a horon harbin ƙwallo na bazara kyauta kafin 30 ga Yuni\" SMART ne. \"Zama shahararre\" ba SMART ba ne.",
            "Mataimakin AI zai iya taimakawa a ƙara masa sarari: \"Ni ɗan wasan ƙwallon kwando ne a makarantar sakandare. Ka taimake ni in mayar da 'sa ƙarin masu horarwa na jami'a su gan ni' zuwa burin SMART na makonni 4 masu zuwa.\""
          ],
          steps: ["Ku zaɓi abin da kuke so cikin makonni 4.", "Ku ƙara lamba.", "Ku ƙara kwanan wata.", "Ku duba cewa zai yiwu kuma yana da muhimmanci gare ku."],
          words: [["Tallata kai (marketing)", "sa mutanen da suka dace su san ku, su so ku, su kuma amince da ku ko da abin da kuke bayarwa."], ["Burin SMART", "Specific, Measurable, Achievable, Relevant da Time-bound: takamaimai, ana iya aunawa, ana iya cimmawa, yana da muhimmanci, kuma yana da ƙayyadadden lokaci."]],
          slides: [
            { title: "Babu buri = wallafawa kawai", bullets: ["Shiga ƙungiyar jami'a? Sansanin horo? Masu bibiya? Sana'a?"] },
            { title: "SMART", bullets: ["Takamaimai, ana iya aunawa, ana iya cimmawa", "Yana da muhimmanci, yana da ƙayyadadden lokaci"] },
            { title: "Misali", bullets: ["\"Mutane 15 su yi rajista a horona kyauta kafin 30 ga Yuni\"", "Ba: \"zama shahararre\" ba"] }
          ],
          tryIt: "Ku rubuta burin tallata kai ɗaya na makonni huɗu masu zuwa. Ku nemi mataimakin AI ya sa shi ya zama SMART, sannan ku gyara shi don ya zama gaskiya kuma mai yiwuwa a gare ku.",
          youCanNow: "rubuta burin tallata kai na SMART.",
          quickCheck: [
            { objective: "O1", q: "Me harafin M a cikin SMART yake nufi?", options: ["Measurable (ana iya aunawa)", "Marketing (tallata kai)", "Monthly (kowane wata)", "Meaningful (mai ma'ana)"], answer: 0, why: "SMART yana nufin Specific, Measurable, Achievable, Relevant da Time-bound." },
            { objective: "O1", q: "Burinku shi ne \"sa ƙarin masu horarwa su lura da ni\". Me za ku ƙara don ya zama SMART?", options: ["Ƙarin hashtag", "Yawan masu bibiya mafi girma", "Lamba da kwanan wata, kamar amsa 5 daga masu horarwa kafin 1 ga Maris", "Sabon hoton bayanin martaba"], answer: 2, why: "Burin SMART yana da lamba da kwanan wata da za ku iya dubawa." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Sanin masu sauraronku",
          minutes: 5,
          goal: "Bayyana mutanen da kuke son isa gare su a gajeren bayani ɗaya.",
          text: [
            "Masu sauraronku su ne takamaiman rukunin da kuke son isa gare shi. Mai horarwa na jami'a, mahaifin ko mahaifiyar yaro ɗan shekara 10 da ke son sansanin horo, mai ƙaramin kasuwanci na yankinku, da mai son wasanku, kowanne yana son abu daban.",
            "Ku rubuta gajeren bayanin masu sauraro: su wane ne, me suke damuwa da shi, a ina suke ɓata lokaci a intanet, da me zai sa su ɗauki mataki. Misali: \"Iyayen yaran yankin nan masu shekaru 8 zuwa 12, suna da aiki sosai, suna damuwa da horo mai aminci da daɗi, suna amfani da rukunonin Facebook da Instagram, suna yin rajista idan sun ga ra'ayoyin mutane na gaske.\"",
            "AI zai iya taimaka muku ku tattaro ra'ayoyi kan abin da masu sauraronku ke damuwa da shi. Sannan ku tabbatar ta hanyar tambayar mutane biyu ko uku na gaske daga wannan rukunin."
          ],
          steps: ["Ku faɗi sunan rukunin.", "Ku rubuta abin da suke damuwa da shi.", "Ku rubuta inda suke ɓata lokaci a intanet.", "Ku rubuta abin da ke sa su ɗauki mataki.", "Ku tabbatar da shi da mutane biyu ko uku na gaske."],
          words: [["Masu sauraro (audience)", "takamaiman mutanen da kuke son isa gare su."], ["Bayanin masu sauraro", "gajeren bayani na su wane ne da abin da suke so."]],
          slides: [
            { title: "Masu sauraro daban-daban", bullets: ["Masu horarwa na jami'a", "Iyayen yaran sansanin horo", "Kasuwancin yankinku", "Masu son wasanku"] },
            { title: "Bayanin masu sauraro", bullets: ["Su wane ne", "Me suke damuwa da shi", "A ina suke a intanet", "Me ke sa su ɗauki mataki"] },
            { title: "Ku tabbatar", bullets: ["Ku nemi AI ya tattaro ra'ayoyi", "Sannan ku tambayi mutane 2-3 na gaske"] }
          ],
          tryIt: "Ku rubuta bayanin masu sauraro don burinku. Ku tambayi mataimakin AI: \"Me kuma waɗannan masu sauraro za su iya damuwa da shi?\" Ku ƙara ra'ayi ɗaya, sannan ku tambayi mutum ɗaya na gaske daga wannan rukunin ko daidai ne.",
          youCanNow: "rubuta gajeren bayanin masu sauraro don burinku.",
          quickCheck: [
            { objective: "O2", q: "Wanne ne ya dace a cikin bayanin masu sauraro?", options: ["Waƙar da kuka fi so", "Lambar rigarku", "Jadawalin horonku", "Inda masu sauraro ke ɓata lokaci a intanet"], answer: 3, why: "Bayanin yana faɗin su wane ne, me suke damuwa da shi, inda suke ɓata lokaci da me ke sa su ɗauki mataki." },
            { objective: "O2", q: "Mataimakin AI ya tattaro abin da iyayen yaran sansanin horo ke damuwa da shi. Me za ku yi a gaba?", options: ["Ku tambayi iyaye biyu ko uku na gaske ko daidai ne", "Ku wallafa shi kamar gaskiya ce", "Ku sake tambayar AI har ya yarda da ku", "Ku tsallake bayanin"], answer: 0, why: "Ku tabbatar da ra'ayoyin AI da mutane na gaske daga wannan rukunin." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Zaɓar hanyoyinku",
          minutes: 5,
          goal: "Zaɓi hanyoyi biyu da masu sauraronku sun riga suna ɓata lokaci a cikinsu.",
          text: [
            "Hanya (channel) ita ce wurin da kuke isa ga mutane: Instagram, TikTok, YouTube, X, LinkedIn, rukunonin Facebook, imel, shafin intanet, ko ido da ido a wasanni da taruka na al'umma.",
            "Ku zaɓi hanyoyi biyu kawai don farawa, bisa masu sauraronku, ba bisa abin da ke tashe ba. Masu horarwa na jami'a sau da yawa suna kallon bidiyon manyan lokutan wasa (highlights) da bayanan neman shiga ƙungiya (recruiting profiles), da imel. Iyayen yaran sansanin horo suna iya amfani da rukunonin Facebook da takardun talla na yankin. Kamfanoni suna duba yadda masu bibiyarku ke mu'amala da ku.",
            "Ku duba dokokin shekaru na kowace manhaja, ku kuma saita asusunku ta yadda ku ne ke iko da wanda zai iya tuntuɓarku. Idan ba ku kai shekara 18 ba, ku sa iyaye ko mai kula da ku."
          ],
          steps: ["Ku jera inda masu sauraronku ke ɓata lokaci.", "Ku zaɓi biyu da suka fi dacewa.", "Ku duba dokokin shekaru da saitunan sirri.", "Ku rubuta dalilin da yasa kuka zaɓi kowace hanya."],
          words: [["Hanya (channel)", "wurin da kuke isa ga masu sauraronku, kamar manhajar sada zumunta ko imel."], ["Mu'amala (engagement)", "yadda mutane ke hulɗa da wallafarku: like, sharhi, rabawa, ajiyewa."]],
          slides: [
            { title: "Hanyoyi", bullets: ["Manhajojin sada zumunta: Instagram, TikTok, YouTube, X, LinkedIn", "Imel da shafin intanet", "Ido da ido a wasanni da taruka"] },
            { title: "Ku zaɓi biyu", bullets: ["Inda masu sauraronku suke tun tuni", "Ba abin da ke tashe kawai ba"] },
            { title: "Ku kasance lafiya", bullets: ["Ku duba dokokin shekaru", "Ku riƙe iko da wanda zai tuntuɓe ku", "Ƙasa da shekara 18: ku sa iyaye"] }
          ],
          tryIt: "Ku zaɓi hanyoyinku biyu, ku rubuta jimla ɗaya ga kowacce da ke bayanin dalilin da yasa masu sauraronku suke can. Ku duba saitunan sirri na kowane asusu.",
          youCanNow: "zaɓar hanyoyi biyu da suka dace da masu sauraronku da saita su lafiya.",
          quickCheck: [
            { objective: "O3", q: "Mene ne hanya (channel)?", options: ["Shirin horonku", "Wurin da kuke isa ga mutane, kamar Instagram, imel ko shafin intanet", "Wani nau'in kyamara", "Yawan masu bibiya"], answer: 1, why: "Hanyoyi su ne wuraren da kuke isa ga masu sauraronku." },
            { objective: "O3", q: "Wata sabuwar manhaja tana tashe, amma masu sauraronku, iyayen yaran sansanin horo, suna rukunonin Facebook. Me za ku yi?", options: ["Ku yi amfani da manhajar da ke tashe kawai", "Ku shiga sababbin manhajoji biyar", "Ku zaɓi hanyoyin da masu sauraronku suke tun tuni, kamar rukunonin Facebook", "Ku daina wallafawa"], answer: 2, why: "Ku zaɓi hanyoyi bisa masu sauraro, ba bisa abin da ke tashe ba." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Buri, masu sauraro da hanyoyi",
        questions: [
          { objective: "O1", q: "Wanne ne burin SMART?", options: ["Zama shahararre", "Ƙara wallafawa", "Mutane 15 su yi rajista a horona kyauta kafin 30 ga Yuni", "Zama alama (brand)"], answer: 2, why: "Takamaimai ne, ana iya auna shi, kuma yana da kwanan wata." },
          { objective: "O2", q: "Mene ne masu sauraro?", options: ["Takamaiman mutanen da kuke son isa gare su", "Kowa da kowa a intanet", "Abokan wasanku kawai", "Wani nau'in wallafa"], answer: 0, why: "Tallata kai yana aiki mafi kyau idan an nufi takamaiman rukuni." },
          { objective: "O2", q: "Ta yaya za ku tabbatar da bayanin masu sauraronku?", options: ["Ku amince da AI gaba ɗaya", "Ku yi tsammani", "Ku wallafa ku yi fata", "Ku tambayi mutane biyu ko uku na gaske daga wannan rukunin"], answer: 3, why: "Mutane na gaske suna faɗa muku ko tsammaninku daidai ne." },
          { objective: "O3", q: "Hanyoyi nawa ya kamata ku fara da su?", options: ["Kowace manhaja", "Biyu", "Goma", "Babu ko ɗaya"], answer: 1, why: "Hanyoyi biyu da aka yi su da kyau sun fi masu yawa da aka yi su ba daidai ba." },
          { objective: "O3", q: "Kuna da shekara 16 kuma kuna fara asusun da kowa zai gani. Ya kamata ku:", options: ["Raba adireshinku", "Sa iyaye ko mai kula da ku, ku duba dokokin shekaru", "Bar kowa ya tura muku saƙo", "Yi ƙarya game da shekarunku"], answer: 1, why: "Tsaro da dokokin shekaru su ne farko." }
        ]
      }
    },
    {
      name: "Babi na 2: Tsarawa, gudanarwa da aunawa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Tsara shirin makonni 4 da AI",
          minutes: 6,
          goal: "Yi amfani da mataimakin AI don tsara shirin wallafawa na makonni 4, ku kuma gyara shi.",
          text: [
            "Ku ba mataimakin AI burinku, bayanin masu sauraronku da hanyoyinku, ku tambaye shi: \"Ka yi shirin makonni 4 mai wallafa 3 a kowane mako a waɗannan hanyoyi biyu. Ga kowace wallafa ka ba da ra'ayin, tsarin (hoto, gajeren bidiyo, story, imel) da kira zuwa mataki. Ka sa shi a tebur.\"",
            "Kira zuwa mataki (call to action) yana faɗa wa mutane abin da za su yi a gaba: \"Ku yi rajista ta hanyar haɗin (link)\", \"Ku kalli cikakken bidiyon manyan lokutana\", \"Ku tura min imel don bayanin sansanin horo\". Kowace wallafa da ke tallafa wa burinku ya kamata ta kasance da guda.",
            "Ku gyara shirin ya dace da jadawalin horonku da na makaranta. Kada ku taɓa tsara wallafa da ke nuna ainihin wurin da kuke a lokacin, gidanku, ko jadawalin makarantarku ga baƙi."
          ],
          steps: ["Ku liƙa burinku, bayanin masu sauraronku da hanyoyinku.", "Ku nemi tebur na makonni 4: ra'ayi, tsari, kira zuwa mataki.", "Ku gyara shi ya dace da jadawalinku.", "Ku cire duk abin da ke bayyana wurin da kuke a yanzu ko gidanku."],
          words: [["Kira zuwa mataki (call to action)", "mataki na gaba a sarari da kuke neman mutane su ɗauka."], ["Shirin wallafawa (content plan)", "jadawalin abin da za ku wallafa da lokacin da za ku wallafa."]],
          slides: [
            { title: "Ku ba AI", bullets: ["Burinku na SMART", "Bayanin masu sauraronku", "Hanyoyinku biyu"] },
            { title: "Ku nemi tebur", bullets: ["Wallafa 3 a kowane mako na makonni 4", "Ra'ayi, tsari, kira zuwa mataki"] },
            { title: "Sannan ku gyara", bullets: ["Ya dace da jadawalin horo da makaranta", "Babu wurin da kuke a yanzu ko bayanan gida"] }
          ],
          tryIt: "Ku nemi mataimakin AI shirinku na makonni 4 a tebur. Ku gyara aƙalla layuka uku don su dace da jadawalinku na gaske da muryarku.",
          youCanNow: "tsarawa da gyara shirin tallata kai na makonni 4 da AI.",
          quickCheck: [
            { objective: "O4", q: "Waɗanne abubuwa uku ya kamata kowace wallafa a teburin shirinku ta kasance da su?", options: ["Ra'ayi, tsari da kira zuwa mataki", "Like, rabawa da ajiyewa", "Wuri, lokaci da adireshi", "Hashtag kawai"], answer: 0, why: "Darasin yana neman ra'ayi, tsari da kira zuwa mataki ga kowace wallafa." },
            { objective: "O4", q: "Shirin AI yana da story da ke nuna ku kuna fita daga gidanku kowace safiya. Me za ku yi?", options: ["Ku bar shi; yana nuna yadda kuke yini", "Ku wallafa shi bayan kwana ɗaya", "Ku cire shi domin yana bayyana gidanku da jadawalinku", "Ku ƙara adireshinku a ciki"], answer: 2, why: "Kada ku taɓa tsara wallafa da ke nuna gidanku ko wurin da kuke a yanzu ga baƙi." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Rubuta wallafa da ke kama da ku, da gaskiya",
          minutes: 5,
          goal: "Mayar da ra'ayoyin shiri zuwa wallafa ta gaskiya da muryarku, tare da bayyanawa inda ake buƙata.",
          text: [
            "AI zai iya rubuta daftarin farko na rubutun wallafa (caption), amma mutane suna bibiyar 'yan wasa ne saboda su na gaske ne. Ku nemi AI zaɓuɓɓuka uku, sannan ku sake rubuta mafi kyau da kalmominku. Ku karanta shi da babbar murya: shin yana kama da ku?",
            "Ku yi gaskiya. Kada ku yi amfani da ƙididdigar wasa ta ƙarya, masu bibiya na bogi ko iƙirarin da ba za ku iya tabbatarwa ba. Masu horarwa, kamfanoni da masoya suna dubawa.",
            "Idan wani kasuwanci ya ba ku kuɗi, kaya kyauta ko wani amfani don ku wallafa, FTC (hukumar Amurka da ke aiwatar da dokar talla) ta ce dole ku bayyana hakan a sarari, misali \"Ad\" (talla) ko \"Na gode wa [kamfani] don kayan wasa kyauta\", tare da wallafar kai tsaye, ba a ɓoye cikin hashtag ba. A bidiyo, ku faɗa ku kuma nuna shi a kan allo. 'Yan wasan jami'a suna iya buƙatar su kai rahoton yarjejeniyoyi; ku tambayi ofishin bin ƙa'idoji."
          ],
          steps: ["Ku nemi AI zaɓuɓɓukan rubutun wallafa guda uku.", "Ku sake rubuta mafi kyau da kalmominku.", "Ku cire duk iƙirarin da ba za ku iya tabbatarwa ba.", "Idan akwai wani amfani daga kamfani, ku ƙara bayyanawa a sarari.", "Ku karanta shi da babbar murya kafin ku wallafa."],
          words: [["Rubutun wallafa (caption)", "rubutun da ke tare da wallafa."], ["Bayyanawa (disclosure)", "bayani a sarari cewa an biya ku ko an ba ku wani abu don ku wallafa."]],
          slides: [
            { title: "AI ya tsara, ku ku kammala", bullets: ["Ku nemi zaɓuɓɓuka uku", "Ku sake rubutawa da kalmominku", "Ku karanta da babbar murya"] },
            { title: "Ku yi gaskiya", bullets: ["Babu ƙididdigar ƙarya ko masu bibiya na bogi", "Babu iƙirarin da ba za ku iya tabbatarwa ba"] },
            { title: "Kuɗi ko kaya kyauta?", bullets: ["Ku faɗa a sarari: \"Ad\" ko \"Na gode [kamfani] don kayan wasa kyauta\"", "Tare da wallafar, ba a ɓoye cikin hashtag ba", "A bidiyo: ku faɗa ku kuma nuna"] }
          ],
          sources: [
            { name: "FTC: Disclosures 101 for Social Media Influencers (bayyanawa ga masu tasiri a kafofin sada zumunta)", url: "https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers" },
            { name: "NCAA: Name, Image and Likeness (suna, hoto da kamanni)", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" }
          ],
          tryIt: "Ku ɗauki ra'ayin wallafa ɗaya daga shirinku. Ku nemi AI zaɓuɓɓukan rubutun wallafa guda uku, ku sake rubuta ɗaya da muryarku, ku karanta shi da babbar murya. Idan akwai wani kamfani a ciki, ku ƙara bayyanawa a sarari.",
          youCanNow: "rubuta wallafa ta gaskiya da muryarku da bayyana alaƙa da kamfanoni a sarari.",
          quickCheck: [
            { objective: "O5", q: "Wace hukumar Amurka ce ke aiwatar da dokar bayyana wallafar da aka biya ko aka ba da kyauta?", options: ["NCAA", "FTC", "FDA", "Sashen wasanni na makarantarku"], answer: 1, why: "FTC ce ke aiwatar da dokar talla a Amurka." },
            { objective: "O5", q: "Wani wurin motsa jiki (gym) na yankinku ya ba ku wata ɗaya kyauta don ku wallafa game da shi. A ina za ku sa bayyanawar?", options: ["A ƙarshen hashtag 30", "A sharhi bayan mako ɗaya", "Babu inda, domin ba kuɗi ba ne", "Tare da wallafar kai tsaye, mai sauƙin gani"], answer: 3, why: "Kowane amfani yana da ƙima, kuma dole bayyanawar ta kasance a sarari tare da wallafar." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Aunawa da gyarawa",
          minutes: 5,
          goal: "Bibiyi lambobi uku kowane mako ku kuma yi canji ɗaya bisa su.",
          text: [
            "Ku zaɓi lambobi uku da ke da alaƙa da burinku. Don horo: danna hanyar haɗi, masu yin rajista da sharhi masu tambaya. Don neman shiga ƙungiyar jami'a: kallon bayanin martabarku, kallon bidiyon manyan lokutanku da amsa daga masu horarwa. Yawan masu bibiya shi kaɗai yana iya ruɗarwa.",
            "Yawancin manhajojin sada zumunta suna nuna waɗannan lambobi a sashen insights ko analytics (ƙididdiga) na asusun ƙwararru ko na masu ƙirƙirar abun ciki (creator). Ku rubuta su a takardar lissafi sau ɗaya a mako.",
            "Kowane mako, ku tambaya: me ya fi aiki, kuma me zan canja? Kuna iya liƙa lambobinku na mako a mataimakin AI ku nemi shawara ɗaya, sannan ku yanke shawara da kanku."
          ],
          steps: ["Ku zaɓi lambobi uku da ke da alaƙa da burinku.", "Ku rubuta su kowane mako a takardar lissafi.", "Ku nemo wallafarku mafi kyau da mafi rauni.", "Ku yi canji ɗaya don mako na gaba."],
          words: [["Ƙididdiga (analytics)", "lambobin da ke nuna yadda wallafarku da shafukanku ke tafiya."], ["Lambar burgewa (vanity metric)", "lambar da ke kama da kyau amma ba ta nuna ci gaba zuwa burinku ba."]],
          slides: [
            { title: "Lambobi uku da ke da alaƙa da burinku", bullets: ["Horo: dannawa, rajista, tambayoyi", "Neman shiga ƙungiya: kallo, amsa daga masu horarwa"] },
            { title: "Al'adar kowane mako", bullets: ["Ku rubuta lambobi a takardar lissafi", "Wallafa mafi kyau da mafi rauni", "Canji ɗaya don mako na gaba"] },
            { title: "Ku yi hankali", bullets: ["Masu bibiya kaɗai suna iya ruɗarwa", "AI yana ba da shawara; ku ne kuke yanke shawara"] }
          ],
          tryIt: "Aikin ƙarshe: ku sa burinku, masu sauraronku, hanyoyinku, shirin da AI ya tsara da lambobi uku a shafi ɗaya. Ku gudanar da mako na farko, ku rubuta lambobin, sannan ku rubuta canji ɗaya don mako na biyu.",
          youCanNow: "auna tallata kanku da lambobi uku masu ma'ana da gyarawa kowane mako.",
          quickCheck: [
            { objective: "O6", q: "Me yasa yawan masu bibiya shi kaɗai zai iya ruɗar ku?", options: ["Ba zai nuna ko mutane suna ɗaukar matakin da burinku ke buƙata ba", "Koyaushe na bogi ne", "Manhajoji suna ɓoye shi", "Yana canjawa a hankali sosai"], answer: 0, why: "Ku zaɓi lambobin da ke da alaƙa da burinku, kamar rajista ko amsa daga masu horarwa." },
            { objective: "O6", q: "Mako na farko ya nuna bidiyonku sun sami dannawa fiye da hotunanku sosai. Me za ku yi?", options: ["Ku canja komai lokaci ɗaya", "Ku yi watsi da lambobin", "Ku yi canji ɗaya, kamar ƙarin gajerun bidiyo a mako na gaba", "Ku goge hotunanku"], answer: 2, why: "Ku yi canji ɗaya kowane mako bisa lambobinku." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Tsarawa, gudanarwa da aunawa",
        questions: [
          { objective: "O4", q: "Mene ne kira zuwa mataki?", options: ["Kiran waya ga mai horar da ku", "Wani nau'in hashtag", "Hukunci a wasa", "Mataki na gaba a sarari da kuke neman mutane su ɗauka"], answer: 3, why: "Yana faɗa wa masu sauraronku abin da za su yi a gaba." },
          { objective: "O4", q: "Wane bayani ya kamata shirinku ya guje wa?", options: ["Wurin da kuke a yanzu ko gidanku", "Wasanku", "Manyan lokutan wasanku", "Hanyar haɗin rajistar sansanin horonku"], answer: 0, why: "Wurin da kuke a yanzu da bayanan gida suna iya jefa ku cikin haɗari." },
          { objective: "O5", q: "Wani shagon takalma ya ba ku takalma kyauta don ku wallafa. Me ya kamata wallafarku ta ƙunsa?", options: ["Babu wani ƙari", "Hashtag ɓoyayye a ƙarshe", "Bayyanawa a sarari kamar \"Na gode [shago] don takalma kyauta\"", "Ra'ayi na bogi"], answer: 2, why: "FTC ta ce kaya kyauta ma suna da ƙima kuma dole a bayyana su a sarari." },
          { objective: "O6", q: "Wanne ne ya fi yiwuwa ya zama lambar burgewa ga burin horo?", options: ["Masu yin rajista", "Danna hanyar haɗi", "Tambayoyi game da horon", "Yawan masu bibiya shi kaɗai"], answer: 3, why: "Masu bibiya ba sa nuna ci gaba zuwa rajista." },
          { objective: "O6", q: "Bayan mako na farko, mataki mafi kyau na gaba shi ne:", options: ["Daina", "Yin canji ɗaya bisa lambobinku", "Canja komai", "Sayen masu bibiya"], answer: 1, why: "Canji ɗaya a lokaci ɗaya yana nuna abin da ke aiki." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Dabarun Tallata Kai ta Intanet da AI ga 'Yan Wasa",
    questions: [
      { objective: "O1", q: "Tallata kai yana nufin:", options: ["Wallafawa ba tare da tsari ba", "Sayen masu bibiya", "Sa mutanen da suka dace su san ku, su so ku, su amince da ku", "Sayar da kaya kawai"], answer: 2, why: "Yana game da mutanen da suka dace da amincewa." },
      { objective: "O1", q: "Me harafin T a cikin SMART yake nufi?", options: ["Time-bound (yana da ƙayyadadden lokaci)", "Trendy (mai tashe)", "Total (jimla)", "Team (ƙungiya)"], answer: 0, why: "Burin SMART yana da lokacin ƙarewa." },
      { objective: "O1", q: "Wane buri BA SMART ba ne?", options: ["Zama shahararre", "Samun amsa 10 daga masu horarwa kafin 1 ga Maris", "Sayar da gurbi 30 na sansanin horo kafin 15 ga Mayu", "Samun kallo 200 na bidiyon manyan lokuta kafin Juma'a"], answer: 0, why: "\"Zama shahararre\" ba shi da lamba ko kwanan wata." },
      { objective: "O2", q: "Bayanin masu sauraro ya haɗa da:", options: ["Kalmomin sirrinsu", "Ƙididdigar wasanku kawai", "Su wane ne da abin da suke damuwa da shi", "Ƙididdigar abokin hamayyarku"], answer: 2, why: "Yana bayyana mutanen da kuke son isa gare su." },
      { objective: "O2", q: "Iyayen yaran sansanin horo suna iya ɓata lokaci a:", options: ["Wasannin bidiyo kawai", "Rukunonin Facebook da wuraren yankinsu", "LinkedIn kawai", "Babu inda a intanet"], answer: 1, why: "Ku zaɓi hanyoyin da waɗannan masu sauraro suke." },
      { objective: "O3", q: "Ta yaya ya kamata ku zaɓi hanyoyi?", options: ["Duk abin da ke tashe", "Inda masu sauraronku suke ɓata lokaci tun tuni", "Dukkansu", "Ba tare da tsari ba"], answer: 1, why: "Ku je inda masu sauraronku suke." },
      { objective: "O3", q: "Mu'amala (engagement) tana nufin:", options: ["Yin aure", "Masu bibiya kawai", "Yadda mutane ke hulɗa: like, sharhi, rabawa, ajiyewa", "Talla"], answer: 2, why: "Mu'amala tana nuna sha'awa ta gaske." },
      { objective: "O4", q: "Me ya kamata ku ba AI don ya tsara shirinku?", options: ["Kalmar sirrinku", "Adireshin gidanku", "Bayanan bankinku", "Buri, bayanin masu sauraro da hanyoyi"], answer: 3, why: "Waɗannan suna sa shirin ya dace da burinku." },
      { objective: "O4", q: "Teburin shiri mai kyau ya haɗa da:", options: ["Ra'ayi, tsari da kira zuwa mataki", "Hashtag kawai", "Kwanakin wata kawai", "Makinku na makaranta"], answer: 0, why: "Kowace wallafa tana buƙatar ra'ayi, tsari da mataki na gaba." },
      { objective: "O4", q: "Wanne ne kira zuwa mataki?", options: ["\"Rana mai kyau\"", "\"Ku yi rajista ta hanyar haɗin\"", "\"Lol\"", "\"Wasan ya yi daɗi\""], answer: 1, why: "Yana faɗa wa mutane abin da za su yi a gaba." },
      { objective: "O5", q: "AI ya rubuta rubutun wallafa. Ya kamata ku:", options: ["Wallafa shi ba tare da karantawa ba", "Kwafi na wani", "Sake rubuta shi da muryarku", "Ƙara ƙididdigar ƙarya"], answer: 2, why: "Mutane suna bibiyar ku saboda ku na gaske ne." },
      { objective: "O5", q: "Wanne ne kada ku taɓa wallafawa?", options: ["Ƙididdigar ƙarya", "Manyan lokutan wasanku", "Godiya ga mai horar da ku", "Bayanin sansanin horonku"], answer: 0, why: "Gaskiya tana da muhimmanci; mutane suna dubawa." },
      { objective: "O5", q: "A ina ya kamata bayyanawa ta kasance?", options: ["A ɓoye cikin hashtag masu yawa", "A bayanin martabarku (bio) kawai", "Babu inda", "Tare da wallafar, mai sauƙin gani"], answer: 3, why: "FTC ta ce bayyanawa dole ta kasance mai wuyar rasa gani." },
      { objective: "O5", q: "A bidiyon da kamfani ya ɗauki nauyi, bayyanawa ya kamata ta kasance:", options: ["A cikin bayanin bidiyo kawai", "An faɗa an kuma nuna a kan allo", "Ba a sa ba", "A cikin sharhi"], answer: 1, why: "Bayyanawa a bidiyo ya kamata ta kasance cikin bidiyon da kansa." },
      { objective: "O5", q: "Wa ya kamata ɗan wasan jami'a ya tambaya game da rahoton NIL?", options: ["Wani mai son wasa da ba a sani ba", "Ofishin bin ƙa'idoji (compliance office)", "AI kawai", "Babu kowa"], answer: 1, why: "Dokoki sun bambanta bisa makaranta da mataki." },
      { objective: "O6", q: "A ina kuke yawan samun lambobin wallafa?", options: ["A manhajar yanayi", "A kalandarku", "Babu inda", "A sashen insights ko analytics na manhajar"], answer: 3, why: "Asusun ƙwararru ko na masu ƙirƙira suna nuna ƙididdiga." },
      { objective: "O6", q: "Don burin neman shiga ƙungiyar jami'a, wace lamba ce ta fi muhimmanci?", options: ["Amsa daga masu horarwa", "Like barkatai", "Yawan emoji", "Launin bayanin martaba"], answer: 0, why: "Amsa daga masu horarwa tana nuna ci gaba na gaske." },
      { objective: "O6", q: "Sau nawa ya kamata ku rubuta lambobinku?", options: ["Sau ɗaya a shekara", "Ba taɓa ba", "Kowane mako", "Kowane minti"], answer: 2, why: "Kowane mako yana ba ku damar gyarawa a kan lokaci." },
      { objective: "O6", q: "AI ya ba da shawarar canji. Wa ke yanke shawara?", options: ["AI", "Masu bibiyarku", "Babu kowa", "Ku"], answer: 3, why: "AI yana ba da shawara; ku ne kuke yanke shawara." },
      { objective: "O6", q: "Canje-canje nawa ya kamata ku yi kowane mako?", options: ["Goma", "Ɗaya", "Komai", "Babu ko ɗaya har abada"], answer: 1, why: "Canji ɗaya a lokaci ɗaya yana nuna abin da ya yi aiki." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [1, 3, 5, 8, 10, 12, 16, 19] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Burin SMART", objective: "O1", notYet: "Burin bai da sarari, ko ba shi da lamba ko kwanan wata.", meets: "Buri ɗaya mai dukkan sassa biyar na SMART don makonni huɗu masu zuwa.", exceeds: "Burin yana da alaƙa a sarari da neman shiga ƙungiya, NIL, sansanin horo ko matakin sana'a, kuma zai yiwu bisa jadawalin ɗan wasan." },
      { name: "Masu sauraro da hanyoyi", objective: "O3", notYet: "Babu bayanin masu sauraro, ko an zaɓi hanyoyi bisa abin da ke tashe maimakon masu sauraro.", meets: "Gajeren bayanin masu sauraro da hanyoyi biyu da aka zaɓa saboda masu sauraro suna can, kuma an duba dokokin shekaru da sirri.", exceeds: "An tabbatar da bayanin da mutane na gaske, kuma dalilan kowace hanya suna ambaton abin da suka faɗa." },
      { name: "Shirin wallafawa na makonni 4", objective: "O4", notYet: "Wallafa ba su da tsari ko kira zuwa mataki, ko shirin yana bayyana wuri ko gida.", meets: "Tebur na makonni 4 mai ra'ayi, tsari da kira zuwa mataki ga kowace wallafa, an gyara shi ya dace da jadawali kuma yana da aminci.", exceeds: "Kowane kira zuwa mataki yana nufin burin, kuma shirin ya daidaita tsakanin hanyoyin biyu." },
      { name: "Wallafa ta gaskiya", objective: "O5", notYet: "Rubutun wallafa yana kama da rubutun AI da aka kwafo, yana da iƙirarin da ba a tabbatar ba, ko babu bayyanawar da ake buƙata.", meets: "Wallafa da muryar ɗan wasan, babu iƙirarin da ba a tabbatar ba, da bayyanawa a sarari ga kowane amfani daga kamfani.", exceeds: "An faɗi an kuma nuna bayyanawa a bidiyo, kuma an duba rahoton NIL da ofishin bin ƙa'idoji inda ake buƙata." },
      { name: "Bibiya da canji", objective: "O6", notYet: "Lambobi ƙasa da uku, ko ba a rubuta canji don mako na biyu ba.", meets: "An rubuta lambobi uku masu alaƙa da buri na mako na farko da canji ɗaya don mako na biyu.", exceeds: "An ambaci wallafa mafi kyau da mafi rauni tare da lambobin da ke bayanin canjin." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala shirin, suka gudanar da mako na farko, kuma suka sami \"Ya cika\" ko \"Ya wuce\" a kowane layi na rubric",
      "Masu koyo da suka ce sun cimma burinsu na SMART kafin kwanan watansa (binciken biyo baya)",
      "Masu koyo da suka ba da rahoton sakamako na zahiri: amsa daga masu horarwa, rajistar sansanin horo ko tattaunawa da kamfani",
      "Masu koyo da har yanzu suke rubuta lambobinsu kowane mako bayan kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya mai manhajojin sada zumunta guda biyu da aka zaɓa",
      "Mataimakin AI kyauta (ChatGPT, Microsoft Copilot ko Google Gemini)",
      "Takardar lissafi kyauta (Google Sheets) don lambobin kowane mako",
      "Jadawalin horonku da na makaranta",
      "Kusan minti 60 na darussa, da kusan minti 30 a kowane mako na makonni huɗu"
    ],
    facilitatorNotes: [
      "Ga 'yan wasa ƙasa da shekara 18, ku sa iyaye ko masu kula da su kafin asusu ya zama na kowa ko a tuntuɓi kamfanoni.",
      "Ku duba saitunan tsaro tare a matsayin rukuni: wa zai iya tura saƙo, ya yi tag, ya ga wuri; kada a taɓa raba wurin da ake a yanzu, gida ko jadawalin makaranta.",
      "Ku gayyaci ofishin bin ƙa'idoji ko wakilin ƙungiyar wasa don dokokin rahoton NIL kafin 'yan wasa su karɓi kowace yarjejeniya.",
      "Ku duba kowane daftari don iƙirari na gaskiya da bayyanawa a sarari kafin a wallafa shi.",
      "Ku yi ɗan taron duba kowane mako don 'yan wasa su raba lambobinsu da canjinsu ɗaya."
    ]
  }
};
