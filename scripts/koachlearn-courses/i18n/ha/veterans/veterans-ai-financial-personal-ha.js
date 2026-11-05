"use strict";

// Koach Learn course, Hausa (ha) translation of veterans/veterans-ai-financial-personal.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "veterans-ai-financial-personal-ha",
  lang: "ha",
  translationOf: "veterans-ai-financial-personal",
  category: "Veterans (military)",
  name: "AI don Nasara a Harkar Kuɗi da Rayuwa",
  skills: "Amfani da AI lafiya don tambayoyin kuɗi, Yin kasafin kuɗi na wata a rayuwar farar hula, Shirin canjin albashi bayan aikin soja, Gane zambar kuɗi da ake yi wa tsofaffin sojoji, Saita manufofi da tsarin mako, Samun taimakon kuɗi na hukuma kyauta",
  outcome: "yin kasafin kuɗi mai sauƙi na wata a rayuwar farar hula da tsarin ayyukan mako tare da taimakon mataimakin AI, ta amfani da lambobin da aka tattara (rounded) ba tare da bayanan asusun sirri ba, da tabbatar da tambayoyin kuɗi a majiyar hukuma.",
  about: [
    "Wannan kwas ɗin na tsofaffin sojoji (veterans) ne da sojojin da ke barin aiki, waɗanda ke son su riƙe ragamar kuɗinsu da rayuwarsu ta yau da kullum bayan aikin soja. Albashi, gidaje da tsarin yau da kullum duk suna canjawa idan kun bar soja, kuma shiri yana sauƙaƙa wannan canji.",
    "Za ku yi amfani da mataimakin AI kyauta a matsayin mai taimakon shiri: don yin kasafin kuɗi, shirya don albashin da za ku rasa da wanda za ku samu, gane zamba, saita manufofi da gina tsarin mako. Za ku koyi ainihin abin da kada ku taɓa rubutawa AI, da inda za ku sami taimakon kuɗi na hukuma kyauta.",
    "Wannan kwas ɗin ba ya ba da shawarar zuba jari (investment). AI mai taimako ne, ba mai ba da shawarar kuɗi ba: koyaushe ku tabbatar da shawarwarin kuɗi da majiyar hukuma ko ƙwararren mai sana'a. Kowane darasi yana ɗaukar kusan minti biyar, akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku yi amfani da mataimakin AI don yin kasafin kuɗi na wata mai shafi ɗaya na rayuwar farar hula da lambobin da aka tattara (kuɗin shiga, abubuwan da dole ne, abubuwan da kuke so kawai, ajiya da biyan bashi), tare da layi ɗaya na canjin albashi bayan aikin soja, da tsarin mako mai lokutan manufa uku. Ku duba cewa babu lambobin asusu ko bayanan sirri a ciki, sannan ku rubuta tambayar kuɗi ɗaya da za ku kai wa majiyar hukuma ko mai ba da shawara.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Tsofaffin sojoji da sojojin da ke barin aiki da ke son riƙe ragamar kuɗinsu da rayuwarsu bayan aikin soja, sau da yawa tare da iyalai. Da yawa suna komawa daga albashin soja, alawus-alawus da tsayayyen tsari zuwa albashin farar hula da jadawalinsu na kansu.",
    startingPoint: "Suna iya amfani da wayar zamani ko kwamfuta da na'urar lissafi (calculator). Yawancinsu sun karɓi albashi amma ba su taɓa yin kasafin kuɗi na farar hula daga farko ba, kuma kaɗan ne suka yi amfani da mataimakin AI don shiri.",
    gap: "Albashi, kuɗin gida da tsarin yau da kullum suna canjawa idan aikin soja ya ƙare, kuma 'yan damfara suna nufar tsofaffin sojoji. Masu koyo suna buƙatar kasafin kuɗi mai sauƙi, tsarin mako da manufofi a sarari, da aka yi tare da mai taimakon AI ba tare da raba bayanan sirri ba, kuma suna buƙatar sanin inda za su kai tambayoyin kuɗi don samun taimako na hukuma kyauta.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; ba a tsammanin ilimin harkar kuɗi",
      "Na'urori: wayar zamani ko kwamfuta mai intanet, da na'urar lissafi",
      "Sirri: lambobin da aka tattara kawai; babu lambar asusu, kati, Social Security ko lambar fayil na VA a kowane prompt na AI",
      "Babu shawarar zuba jari: ana tabbatar da shawarwarin kuɗi da majiyar hukuma ko ƙwararren mai sana'a",
      "Lokaci: darussa na kusan minti 5 da suka dace da ganawar barin aiki, aiki da iyali"
    ],
    prerequisites: "Babu. Masu koyo da suke sababbi ga mataimakan AI za su iya fara ɗaukar kwas ɗin \"Gabatarwa ga AI da Makomar Ma'aikata\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan kuna da tambayar kuɗi", action: "tambayar mataimakin AI tambayar ta amfani da lambobin da aka tattara ba tare da bayanan sirri ba", standard: "ba tare da raba lambar asusu, kati ko ta shaida ba" },
    { id: "O2", condition: "Ta amfani da lambobinku da aka tattara", action: "yin teburin kasafin kuɗi na wata na farar hula tare da mataimakin AI, tare da layi na kuɗin da ke canjawa bayan aikin soja", standard: "da jimlolin da kuka duba da kanku a na'urar lissafi" },
    { id: "O3", condition: "Idan aka ba ku saƙo ko tayi game da kuɗi ko tallafi", action: "gane alamun gargaɗin zamba da zaɓar amsa mai aminci", standard: "ba tare da biyan komai ko raba code ko bayanan sirri ba" },
    { id: "O4", condition: "Don kuɗi da rayuwa bayan aikin soja", action: "rubuta manufofi uku masu lamba da kwanan wata, da raba ɗaya zuwa matakan mako tare da AI", standard: "kowace manufa ana iya aunawa kuma tana da kwanan wata" },
    { id: "O5", condition: "Ta amfani da manufofinku", action: "gina tsarin mako mai lokutan manufa uku, tare da duba kasafin kuɗi a kowane mako", standard: "kuma kuna dubawa da gyara shi kowane mako" },
    { id: "O6", condition: "Idan aka ba ku tambayar kuɗi", action: "zaɓar majiyar hukuma ko mai ba da shawara da ya dace, da rubuta tambayar", standard: "kuna tabbatar da amsoshin kuɗi na AI kafin ku yi aiki da su" }
  ],
  chapters: [
    {
      name: "Babi na 1: Kuɗi bayan aikin soja",
      lessons: [
        {
          objectives: ["O1"],
          title: "Amfani da AI lafiya don tambayoyin kuɗi",
          minutes: 4,
          goal: "Tambayi mataimakin AI tambayar kuɗi lafiya, ba tare da bayanan sirri ba.",
          text: [
            "Mataimakin AI zai iya bayanin kalmomin kuɗi, yin teburin kasafin kuɗi, kwatanta zaɓuɓɓukan da kuka ba shi, da mayar da jerin kuɗaɗen biya marasa tsari zuwa shiri. Mai taimako ne mai sauri kuma mai haƙuri.",
            "Shi ba mai ba da shawarar kuɗi ba ne. Bai san cikakken halin da kuke ciki ba, yana iya yin kuskure game da dokoki da lambobi, kuma bayaninsa yana iya zama tsoho. Ku yi amfani da shi don fahimta da tsarawa; ku tabbatar da shawarwari da majiyar hukuma ko ƙwararren mai ba da shawara.",
            "Kada ku taɓa rubuta lambar Social Security ɗinku, lambar DD-214 (takardar barin soja) ko lambar fayil na VA, lambobin banki ko kati, bayanan shiga asusu ko kalmomin sirri a AI. Ku yi amfani da lambobin da aka tattara a maimakon haka: \"kuɗin haya kusan $1,200\" shi ne kawai abin da yake buƙata."
          ],
          steps: ["Ku yanke abin da kuke so: bayani, tebur ko shiri.", "Ku yi amfani da lambobin da aka tattara, babu bayanan asusu.", "Ku yi tambayar.", "Ku yi alama a kan duk wata doka, kuɗin ruwa ko wa'adi don ku tabbatar a majiyar hukuma."],
          words: [["Kasafin kuɗi (budget)", "shiri na yadda kuɗinku ke shigowa da fita kowane wata."], ["Lambar da aka tattara (rounded number)", "lamba mai kusanci kuma mai sauƙi kamar $1,200, maimakon ainihin lambar da ke haɗe da asusu."]],
          slides: [
            { title: "AI zai iya taimaka muku", bullets: ["Bayanin kalmomin kuɗi", "Yin teburin kasafin kuɗi", "Mayar da jerin kuɗaɗen biya zuwa shiri"] },
            { title: "AI ba", bullets: ["Mai ba da shawarar kuɗi ba ne", "Koyaushe daidai yake ko sabo ba", "Shi ne mai yanke shawara ba: ku ne"] },
            { title: "Kada ku taɓa rubutawa", bullets: ["Lambar SSN, DD-214 ko fayil na VA", "Lambobin banki ko kati, bayanan shiga, kalmomin sirri", "Ku yi amfani da lambobin da aka tattara a maimakon haka"] }
          ],
          tryIt: "Ku tambayi mataimakin AI: \"Ka bayyana bambanci tsakanin abin da dole ne da abin da ake so kawai a kasafin kuɗi na wata, da misalai uku kowanne.\" Ku duba cewa prompt ɗinku ba shi da bayanan sirri kafin ku aika.",
          youCanNow: "tambayar mataimakin AI tambayoyin kuɗi lafiya, da sanin abin da za ku tabbatar a wani wuri.",
          quickCheck: [
            { objective: "O1", q: "Wace hanya ce mafi aminci don faɗa wa AI game da biyan kuɗin motarku?", options: ["Ku rubuta lambar asusun bashinku", "Ku ɗora hoton takardar bankinku", "Ku rubuta lambar katinku don ya duba", "\"Biyan mota kusan $350 a wata\""], answer: 3, why: "Lambar da aka tattara tana ba AI abin da yake buƙata ba tare da wani bayanin sirri ba." },
            { objective: "O1", q: "AI ya bayyana wata dokar kuɗi kuma ya ba da kuɗin ruwa (rate). Me za ku yi?", options: ["Ku yi amfani da shi nan take", "Ku tabbatar da dokar da kuɗin ruwan a majiyar hukuma", "Ku tambayi baƙo a intanet", "Ku ƙi duk amsoshin AI har abada"], answer: 1, why: "AI zai iya bayani, amma dole a tabbatar da dokoki da kuɗin ruwa a majiyar hukuma." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Yin kasafin kuɗi na wata na farar hula",
          minutes: 6,
          goal: "Yi teburin kasafin kuɗi na wata tare da mataimakin AI ta amfani da lambobin da aka tattara.",
          text: [
            "A lokacin da kuke cikin kakin soja, wataƙila an biya wasu kuɗaɗe ko an ba ku su a matsayin alawus, kamar alawus na gida da na abinci, da kiwon lafiya ta TRICARE (inshorar lafiya ta soja). Idan kun bar aikin soja, da yawa daga cikinsu suna canjawa ko su tsaya. Dole kasafin kuɗinku na farar hula ya biya su daga albashinku ko tallafinku. Ku tabbatar da albashinku na ƙarshe da tallafinku a ofishin kuɗi, DFAS (ofishin biyan albashin soja) ko VA, maimakon yin hasashe.",
            "Ku fara da rukunoni huɗu: kuɗin shiga (albashi, tallafi), abubuwan da dole ne (haya, wuta da ruwa, abinci, sufuri, inshora, lafiya), abubuwan da kuke so kawai (cin abinci a waje, biyan kuɗin manhajoji na wata), da ajiya da biyan bashi. Ku nemi AI ya yi teburin ya kuma haɗa jimlar kowane rukuni.",
            "Misalin prompt: \"Ka yi teburin kasafin kuɗi na wata. Kuɗin shiga kusan $3,800. Haya $1,200, wuta da ruwa $200, kayan abinci $450, biyan mota $350, man fetur $160, waya $70, inshora $150, cin abinci a waje $200, biyan kuɗin manhajoji $40. Ka nuna jimloli da abin da ya rage.\""
          ],
          steps: ["Ku jera kuɗin shigarku na wata da lambobin da aka tattara.", "Ku jera abubuwan da dole ne, abubuwan da kuke so kawai, ajiya da biyan bashi.", "Ku nemi AI ya yi tebur mai jimloli da abin da ya rage.", "Ku ƙara duk wani kuɗi da aka biya muku a aikin soja amma yanzu ba a biya.", "Ku duba lissafin da kanku da na'urar lissafi."],
          words: [["Alawus (allowance)", "kuɗin da ake biya a aikin soja don wani abu kamar gida ko abinci."], ["Abin da dole ne (need)", "kuɗin da dole ku biya don rayuwa da aiki, kamar haya."], ["Abin da ake so kawai (want)", "kuɗin da za ku iya ragewa, kamar cin abinci a waje."]],
          slides: [
            { title: "Abin da ke canjawa bayan aikin soja", bullets: ["Alawus kamar na gida da abinci suna iya tsayawa", "Inshorar lafiya tana iya canjawa", "Ku tabbatar da albashinku da tallafinku a hukumance"] },
            { title: "Rukunoni huɗu na kasafin kuɗi", bullets: ["Kuɗin shiga", "Abubuwan da dole ne", "Abubuwan da kuke so kawai", "Ajiya da biyan bashi"] },
            { title: "Ku bar AI ya yi teburin", bullets: ["Ku ba da lambobin da aka tattara", "Ku nemi jimloli da abin da ya rage", "Ku duba lissafin da kanku"] }
          ],
          tryIt: "Ku nemi mataimakin AI ya yi teburin kasafin kuɗinku na wata da lambobin da aka tattara. Ku ƙara layi ɗaya na kuɗin da aka biya muku lokacin da kuke aikin soja. Ku duba jimlolin da na'urar lissafi.",
          youCanNow: "yin teburin kasafin kuɗi na wata na farar hula da lambobin da aka tattara, da duba jimlolinsa.",
          quickCheck: [
            { objective: "O2", q: "Mene ne bambanci tsakanin abin da dole ne da abin da ake so kawai a kasafin kuɗi?", options: ["Abin da dole ne kuɗi ne da dole ku biya, kamar haya; abin da ake so kawai za ku iya ragewa", "Abin da dole ne shi ne duk abin da kuke so", "Abin da ake so kawai koyaushe ya fi tsada", "Babu bambanci"], answer: 0, why: "Abubuwan da dole ne kuɗi ne da dole a biya; abubuwan da ake so kawai zaɓi ne da za ku iya ragewa idan kuɗi ya yi ƙaranci." },
            { objective: "O2", q: "Teburin kasafin kuɗin AI ya ce jimlarku $2,950 ce, amma layukan suna kama da sun fi haka. Me za ku yi?", options: ["Ku amince da jimlar AI", "Ku goge teburin", "Ku haɗa layukan da kanku a na'urar lissafi ku gyara jimlar", "Ku tattara jimlar zuwa $3,000"], answer: 2, why: "AI yana iya yin kuskuren lissafi, don haka ku duba jimloli da kanku." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Gane zambar kuɗi da ake yi wa tsofaffin sojoji",
          minutes: 5,
          goal: "Gane alamun gargaɗin zambar kuɗi da sanin abin da za ku yi.",
          text: [
            "'Yan damfara suna nufar tsofaffin sojoji saboda tallafi da fansho. Tarkuna da aka saba gani sun haɗa da tayin \"sayen\" fanshonku ko tallafinku na gaba don dunƙulen kuɗi yanzu (pension advance), mutanen da ke karɓar kuɗi don shigar da buƙatar VA ko \"ƙara\" matakin naƙasarku (rating), tayin aiki na bogi, da kiran waya da ke yin kamar daga VA suke.",
            "Consumer Financial Protection Bureau (CFPB, hukumar Amurka mai kare masu amfani a harkar kuɗi) tana gargaɗin sojoji da tsofaffin sojoji game da pension advance kuma tana bayanin haƙƙoƙinku na kuɗi. Yanzu 'yan damfara ma suna amfani da AI, don rubuta saƙonnin da suke kama da na gaske har ma su kwaikwayi murya.",
            "Alamun gargaɗi: suna gaggauta ku, suna neman kuɗi tun kafin aiki, suna neman katin kyauta (gift card) ko tura kuɗi ta waya (wire transfer), ko suna neman code da aka turo wayarku. Ku tsaya, ku katse wayar, ku sake kira ta lambar da kuka samo da kanku a va.gov ko shafin hukuma. Kuna kuma iya liƙa saƙon da ake zargi a AI ku tambaya \"Mene ne alamun gargaɗi a cikin wannan?\", bayan kun cire bayananku na sirri."
          ],
          steps: ["Ku lura da matsi, kuɗi tun kafin aiki, katin kyauta, tura kuɗi ta waya ko neman code.", "Ku tsaya kuma kada ku biya ko ku raba komai.", "Ku nemo lambar hukuma da kanku ku sake kira.", "Ku cire bayanan sirri, sannan ku nemi AI ya nuna alamun gargaɗin.", "Ku kai rahoto idan kun rasa kuɗi."],
          words: [["Pension advance (gaban fansho)", "tayin biyan ku dunƙulen kuɗi yanzu don musanyar fanshonku ko tallafinku na gaba, sau da yawa da tsada sosai."], ["Zamba", "dabarar satar kuɗi ko bayanai."]],
          slides: [
            { title: "Tarkuna da aka saba gani", bullets: ["Tayin pension advance", "Kuɗin shigar ko \"ƙara\" buƙatar VA", "Tayin aiki na bogi da kiran VA na bogi"] },
            { title: "Alamun gargaɗi", bullets: ["Suna gaggauta ku", "Kuɗi tun kafin aiki, katin kyauta ko tura kuɗi ta waya", "Suna neman code da aka turo wayarku"] },
            { title: "Abin da za ku yi", bullets: ["Ku tsaya. Kada ku biya ko ku raba", "Ku sake kira ta lambar da kuka samo da kanku", "Ku nemi AI ya nuna alamun gargaɗi"] }
          ],
          sources: [{ name: "Consumer Financial Protection Bureau: Military financial lifecycle", url: "https://www.consumerfinance.gov/consumer-tools/military-financial-lifecycle/" }],
          tryIt: "Ku rubuta gajeren misalin tes na zamba da ke tayin \"ƙara matakin VA ɗinku idan kun biya kuɗi\". Ku nemi mataimakin AI ya jera alamun gargaɗinsa. Sannan ku rubuta abin da za ku yi idan kun sami irinsa.",
          youCanNow: "gane alamun gargaɗin zambar kuɗi da ake yi wa tsofaffin sojoji, da mayar da martani lafiya.",
          quickCheck: [
            { objective: "O3", q: "Wanne ne alamar gargaɗin zamba?", options: ["Wasiƙar da kuka nemi VA ya turo", "Takardar bankinku ta yau da kullum ta wata", "Matsin lambar biya da sauri, da katin kyauta ko kuɗi tun kafin aiki", "Fom kyauta a va.gov"], answer: 2, why: "Gaggauta ku da neman katin kyauta ko kuɗi tun kafin aiki alamun zamba ne da aka saba gani." },
            { objective: "O3", q: "Wani tes ya ce tallafinku zai tsaya sai dai idan kun aika code ɗin da kuka samu yanzu. Me za ku yi?", options: ["Ku aika code ɗin da sauri", "Ku mayar da amsa kuna tambayar ko su wane ne", "Ku aika rabin code ɗin", "Kada ku mayar da amsa; ku tuntuɓi VA ta lambar da kuka samo da kanku"], answer: 3, why: "Hukumomin gaske ba sa neman code ɗinku; ku tuntuɓe su ta lambar da kuka samo da kanku." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Kuɗi bayan aikin soja",
        questions: [
          { objective: "O1", q: "Me ya kamata ku rubuta a AI idan kuna neman taimakon kasafin kuɗi?", options: ["Lambar asusun bankinku", "\"Haya kusan $1,200\"", "Lambar Social Security ɗinku", "Kalmar sirrin bankinku ta intanet"], answer: 1, why: "Lambobin da aka tattara suna ba AI abin da yake buƙata ba tare da bayanan sirri ba." },
          { objective: "O1", q: "An fi amfani da AI a harkar kuɗi don:", options: ["Yanke shawarar ƙarshe a madadinku", "Zaɓar muku inda za ku zuba jari", "Bayani, tsarawa da yin shiri da za ku tabbatar daga baya", "Riƙe kalmomin sirrinku"], answer: 2, why: "AI yana taimaka muku fahimta da tsarawa; ku kuma tabbatar da shawarwari a majiyoyin hukuma." },
          { objective: "O2", q: "Me yasa kasafin kuɗi na farar hula yake buƙatar layukan da na soja ba lallai ba ne ya buƙata?", options: ["Fararen hula ba sa biyan haya", "Haraji ya fi ƙanƙanta", "Saboda AI ya faɗa", "Wasu alawus da kuɗaɗen da aka biya suna canjawa ko su tsaya bayan aikin soja"], answer: 3, why: "Kuɗaɗe kamar na gida wataƙila an biya su ko an ba da su a matsayin alawus a aikin soja." },
          { objective: "O3", q: "Wani yana tayin kuɗi yanzu don musanyar fanshonku na gaba. Wannan:", options: ["Pension advance ne, wanda CFPB ke gargaɗi game da shi", "Albashi ne na yau da kullum", "Tallafin VA ne", "Mayar da kuɗin haraji ne"], answer: 0, why: "CFPB tana gargaɗin sojoji da tsofaffin sojoji game da tayin pension advance." },
          { objective: "O3", q: "Wani mai kira ya ce daga VA yake kuma yana neman code ɗin da aka turo wayarku. Za ku:", options: ["Karanta masa code ɗin", "Katse wayar ku kira VA ta lambar da kuka samo da kanku", "Ba shi lambar SSN ɗinku a maimakon haka", "Aika katin kyauta"], answer: 1, why: "Ofisoshin gaske ba sa neman wannan code; ku sake kira ta lambar da kuka san gaskiya ce." }
        ]
      }
    },
    {
      name: "Babi na 2: Manufofi, tsarin yau da kullum da taimako na gaske",
      lessons: [
        {
          objectives: ["O4"],
          title: "Saita manufofin kuɗi da na rayuwa",
          minutes: 5,
          goal: "Rubuta manufofi uku a sarari masu lamba da kwanan wata, sannan ku raba ɗaya zuwa matakai tare da AI.",
          text: [
            "Manufa tana aiki idan tana a sarari, ana iya aunawa, kuma tana da kwanan wata: \"Ajiye $1,000 don gaggawa kafin 31 ga Maris\" ya fi \"ajiye ƙari\". Haka ma manufofin rayuwa: \"kammala kwas ɗin takardar shaidar ƙwarewata kafin Yuni\" ko \"yin gudu sau uku a mako\".",
            "Ku rubuta manufofi uku: manufar kuɗi ɗaya, manufar sana'a ko karatu ɗaya, da manufar lafiya ko iyali ɗaya. Sannan ku nemi AI ya raba ɗaya zuwa matakan mako: \"Ka raba wannan manufa zuwa matakan mako: ajiye $1,000 kafin 31 ga Maris. Zan iya rage kusan $60 a mako daga cin abinci a waje da biyan kuɗin manhajoji.\"",
            "Consumer Financial Protection Bureau tana da kayan aiki kyauta don sojoji, ciki har da takardar aikin saita manufa (worksheet). Ku yi amfani da ita tare da shirinku na AI."
          ],
          steps: ["Ku rubuta manufar kuɗi ɗaya, manufar sana'a ɗaya da manufar lafiya ko iyali ɗaya.", "Ku ba kowace lamba da kwanan wata.", "Ku nemi AI ya raba manufa ɗaya zuwa matakan mako.", "Ku sa mataki na farko a kalandarku."],
          words: [["Asusun gaggawa (emergency fund)", "kuɗin da aka ajiye don kuɗaɗen ba-zata kamar gyaran mota."], ["Ana iya aunawa (measurable)", "kuna iya ƙirga shi, don haka kuna sanin lokacin da ya cika."]],
          slides: [
            { title: "Manufar da ke aiki", bullets: ["A sarari", "Ana iya aunawa: lamba", "Kwanan wata"] },
            { title: "Manufofi uku", bullets: ["Kuɗi", "Sana'a ko karatu", "Lafiya ko iyali"] },
            { title: "Ku raba ta", bullets: ["Ku nemi AI matakan mako", "Ku sa mataki na ɗaya a kalandarku", "CFPB tana da takardar saita manufa kyauta"] }
          ],
          sources: [{ name: "Consumer Financial Protection Bureau: Military financial lifecycle (goal-setting worksheet)", url: "https://www.consumerfinance.gov/consumer-tools/military-financial-lifecycle/" }],
          tryIt: "Ku rubuta manufofinku uku masu lamba da kwanan wata. Ku nemi mataimakin AI ya raba manufarku ta kuɗi zuwa matakan mako.",
          youCanNow: "rubuta manufofi a sarari da raba ɗaya zuwa matakan mako tare da taimakon AI.",
          quickCheck: [
            { objective: "O4", q: "Me ke sa manufa ta zama a sarari?", options: ["Tana jin girma", "Tana da lamba da kwanan wata", "Ba ta da wa'adi", "Wani ne ya rubuta ta"], answer: 1, why: "Lamba da kwanan wata suna bar ku ga ko kun cimma manufar." },
            { objective: "O4", q: "Kuna son ajiye $600 cikin watanni 3. Me za ku ba AI don ya raba ta zuwa matakai?", options: ["Manufar, kwanan watan da abin da za ku iya sakawa a zahiri", "Bayanan shigar bankinku", "Kalmar \"ajiye\" kawai", "Lambar Social Security ɗinku"], answer: 0, why: "Manufar, kwanan wata da adadin da za a iya cimmawa suna bar AI ya yi matakan mako masu amfani." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Gina tsarin mako",
          minutes: 5,
          goal: "Gina tsarin mako mai lokutan manufa uku ta amfani da mataimakin AI.",
          text: [
            "Rayuwar soja tana tafiya bisa jadawali. Rayuwar farar hula sau da yawa ba haka ba ce, kuma tsofaffin sojoji da yawa suna cewa rasa wannan tsari yana ɗaya daga cikin abubuwa mafi wuya na barin aiki. Kuna iya gina naku.",
            "Ku ba AI lokutanku da ba sa canjawa da manufofinku: \"Ina aiki daga ƙarfe 8 zuwa 5 Litinin zuwa Juma'a. Manufofina: karatun takardar shaidar ƙwarewa awa 4 a mako, motsa jiki sau 3 a mako, duba kasafin kuɗina sau ɗaya a mako. Ka yi jadawalin mako mai sauƙi a matsayin tebur.\"",
            "Ku sa ya zama mai yiwuwa. Ku bar lokacin hutu da lokacin iyali. Ku duba tsarin kowace Lahadi ku gyara shi; shiri yana aiki har sai an fara aiki, sannan ku daidaita."
          ],
          steps: ["Ku jera lokutanku da ba sa canjawa: aiki, makaranta, iyali.", "Ku jera manufofinku uku daga Darasi na 4.", "Ku nemi AI teburin jadawalin mako.", "Ku ƙara lokacin hutu da lokacin iyali.", "Ku duba ku gyara shi kowane mako."],
          words: [["Tsarin yau da kullum (routine)", "abubuwan da kuke yi a lokuta na yau da kullum kowane mako."], ["Lokacin aiki (time block)", "ƙayyadadden lokaci a kalandarku don aiki ɗaya."]],
          slides: [
            { title: "Ku sake gina tsarinku", bullets: ["Rayuwar soja tana da jadawali", "Rayuwar farar hula sau da yawa ba ta da shi", "Kuna iya gina naku"] },
            { title: "Ku nemi AI teburin mako", bullets: ["Lokutanku da ba sa canjawa", "Lokutan manufa uku", "Lokacin hutu da na iyali"] },
            { title: "Ku duba kowane mako", bullets: ["Ku duba shi kowace Lahadi", "Ku gyara abin da bai yi aiki ba", "Ku daidaita, kamar a kowane shiri"] }
          ],
          tryIt: "Ku nemi mataimakin AI ya yi jadawalinku na mako mai lokutan manufa uku, tare da duba kasafin kuɗi sau ɗaya a mako. Ku sa shi a kalandar wayarku ko ku buga shi a takarda.",
          youCanNow: "gina tsarin mako mai yiwuwa da ke ba manufofinku lokaci.",
          quickCheck: [
            { objective: "O5", q: "Mene ne lokacin manufa a tsarin mako?", options: ["Mako marar shiri", "Tunatarwa don biyan ɗan damfara", "Jerin duk ayyukan da kuka taɓa yi", "Ƙayyadadden lokaci kowane mako don yin aiki kan manufa ɗaya"], answer: 3, why: "Lokacin manufa lokaci ne da kuka keɓe a rana ta yau da kullum don ciyar da manufa gaba." },
            { objective: "O5", q: "Kun tsallake lokutan manufa biyu a wannan makon saboda ganawa. Me za ku yi?", options: ["Ku duba tsarin ku mayar da lokutan zuwa lokacin da ya dace", "Ku haƙura da tsarin", "Ku ƙara lokuta biyar", "Kada ku sake saka ganawa har abada"], answer: 0, why: "Tsari yana aiki idan kuna duba shi kowane mako kuma kuna daidaita shi da rayuwa ta gaske." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Samun taimakon kuɗi na hukuma kyauta",
          minutes: 5,
          goal: "Zaɓi majiyar hukuma da ta dace don tambayar kuɗi kuma ku rubuta tambayar.",
          text: [
            "Wasu tambayoyin kuɗi suna buƙatar mutum ko amsar hukuma: tallafi da biyan kuɗin VA, bashi, haraji, matsalolin bashi a banki (credit), zaɓin ritaya, ko duk wani abu na shari'a. AI zai iya taimaka muku rubuta tambayar a sarari, amma kada ya zama amsar ƙarshe.",
            "Taimakon hukuma kyauta ya haɗa da: VA (va.gov) don tallafi da biyan kuɗin VA; Military OneSource, wanda ke ba da shawarar kuɗi kyauta ga sojoji da 'yan iyalansu da suka cancanta (ku duba jagorar cancantarsa don ganin ko har yanzu kun cancanta bayan barin aiki); da Consumer Financial Protection Bureau (consumerfinance.gov) don haƙƙoƙinku na kuɗi da ƙorafe-ƙorafe.",
            "Zuba jari da asusun ritaya shawarwari ne na kai. Wannan kwas ɗin ba ya ba da shawarar kowanne. Ku yi magana da ƙwararren mai sana'a amintacce, kuma ku yi hankali da duk wanda ya yi alƙawarin riba mai yawa da sauri."
          ],
          steps: ["Ku rubuta tambayar kuɗinku a jimla ɗaya ko biyu.", "Ku nemi AI ya taimaka ya sa ta a sarari, ba tare da bayanan sirri ba.", "Ku zaɓi majiyar da ta dace: VA, Military OneSource ko CFPB.", "Ku tuntuɓe su ta lambar waya ko shafin da kuka samo da kanku."],
          words: [["Shawarar kuɗi (financial counseling)", "taimako kyauta ko mai arha daga ƙwararren mai ba da shawara don shirya da gyara matsalolin kuɗi."], ["CFPB", "Consumer Financial Protection Bureau: hukumar Amurka da ke kare mutane a harkar kuɗi."]],
          slides: [
            { title: "Wasu tambayoyi suna buƙatar amsar hukuma", bullets: ["Tallafi da biyan kuɗin VA", "Bashi, haraji da matsalolin credit", "Tambayoyin ritaya da na shari'a"] },
            { title: "Taimakon hukuma kyauta", bullets: ["va.gov don tallafin VA", "Shawarar kuɗi ta Military OneSource", "consumerfinance.gov don haƙƙoƙin kuɗi"] },
            { title: "Babu shawarar zuba jari a nan", bullets: ["Zuba jari shawara ce ta kai", "Ku yi magana da ƙwararren mai sana'a", "Ku yi hankali da alƙawarin riba mai yawa da sauri"] }
          ],
          sources: [
            { name: "Military OneSource: Financial counseling", url: "https://www.militaryonesource.mil/benefits/financial-counseling/" },
            { name: "Consumer Financial Protection Bureau: Military financial lifecycle", url: "https://www.consumerfinance.gov/consumer-tools/military-financial-lifecycle/" },
            { name: "VA: Careers and employment (VA benefits and counseling)", url: "https://www.va.gov/careers-employment/" }
          ],
          tryIt: "Aikin ƙarshe: ku kammala shirinku mai shafi ɗaya: kasafin kuɗinku na wata daga Darasi na 2 tare da layin canjin albashi, tsarinku na mako mai lokutan manufa uku, da tambayar kuɗi ɗaya tare da majiyar hukuma da za ku kai mata. Ku duba cewa babu lambobin asusu ko bayanan sirri a ciki.",
          youCanNow: "zaɓar majiyar hukuma kyauta da ta dace don tambayar kuɗi, da kai mata tambaya a sarari.",
          quickCheck: [
            { objective: "O6", q: "Me yasa za ku rubuta tambayar kuɗinku kafin ku tuntuɓi majiyar hukuma?", options: ["Don ku saka ta a intanet", "Don ku tambayi wurin da ya dace a sarari ku sami amsa mai amfani", "Don AI ya amsa ta a maimakonsu", "Don kada ku taɓa buƙatar tambaya"], answer: 1, why: "Tambaya a rubuce kuma a sarari tana taimaka wa mai ba da shawara ko hukuma ta ba ku amsar da ta dace." },
            { objective: "O6", q: "Kuna da tambaya game da biyan kuɗin VA ɗinku. A ina za ku kai ta?", options: ["Ƙungiyar kafofin sada zumunta", "Mataimakin AI kaɗai", "VA a va.gov", "Mai kiran da ya yi tayin taimako"], answer: 2, why: "Tambayoyi game da biyan kuɗin VA ana kai su ga VA da kanta." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Manufofi, tsarin yau da kullum da taimako na gaske",
        questions: [
          { objective: "O4", q: "Wace ce manufa mafi kyau?", options: ["\"Ajiye ƙari\"", "\"Zama mafi kyau da kuɗi\"", "\"Ajiye $1,000 don gaggawa kafin 31 ga Maris\"", "\"Wata rana in sayi gida\""], answer: 2, why: "Tana a sarari, ana iya aunawa, kuma tana da kwanan wata." },
          { objective: "O5", q: "Tsofaffin sojoji da yawa suna kewar tsari bayan aikin soja. Me ke taimakawa?", options: ["Rashin yin shiri kwata-kwata", "Barin AI ya tafiyar da rayuwarku", "Yin aiki kowace awa", "Gina tsarin mako da duba shi"], answer: 3, why: "Tsari mai yiwuwa da kuke duba kowane mako yana dawo da tsari." },
          { objective: "O5", q: "Tsarinku na mako bai yi aiki a wannan makon ba. Za ku:", options: ["Duba shi ku gyara shi", "Haƙura da tsare-tsare", "Ƙara awowin aiki", "Goge kalandarku"], answer: 0, why: "Ana gyara shirye-shirye yayin da kuke koyon abin da ke aiki." },
          { objective: "O6", q: "Wace majiya ce ke ba da shawarar kuɗi kyauta ga sojoji?", options: ["Tallar da ke tasowa (pop-up)", "Military OneSource", "Kamfanin pension advance", "Kowane chatbot na AI"], answer: 1, why: "Military OneSource tana ba da shawarar kuɗi kyauta ga sojoji da 'yan iyalansu da suka cancanta." },
          { objective: "O6", q: "AI ya ba da shawarar wani takamaiman zuba jari. Me ya kamata ku yi?", options: ["Ku saya yanzu", "Ku faɗa wa abokai su saya", "Ku ɗauke shi a matsayin wanda ba a tabbatar ba ku yi magana da ƙwararren mai sana'a", "Ku saka duk ajiyarku a ciki"], answer: 2, why: "Zuba jari shawara ce ta kai; AI ba mai ba da shawarar kuɗi ba ne." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI don Nasara a Harkar Kuɗi da Rayuwa",
    questions: [
      { objective: "O1", q: "Mataimakin AI zai iya taimakawa a harkar kuɗi ta hanyar:", options: ["Riƙe kalmomin sirrinku", "Bayanin kalmomi da yin teburin kasafin kuɗi", "Tabbatar da samun riba", "Shigar da buƙatar VA a madadinku"], answer: 1, why: "Bayani da tsarawa ayyuka ne masu aminci da amfani ga AI." },
      { objective: "O1", q: "Wanne ne lafiya a rubuta a AI?", options: ["Lambar DD-214 ɗinku", "Lambar katinku", "Kalmar sirrinku", "\"Kayan abinci kusan $450 a wata\""], answer: 3, why: "Lambobin da aka tattara ba tare da bayanan asusu ba suna da aminci." },
      { objective: "O1", q: "Amsoshin kuɗi na AI game da dokoki da kuɗin ruwa ya kamata a:", options: ["Tabbatar da su a majiyar hukuma", "Amince da su saboda suna jin tabbaci", "Saka su a intanet", "Ƙi su gaba ɗaya"], answer: 0, why: "AI yana iya yin kuskure ko ya zama tsoho game da dokoki da kuɗin ruwa." },
      { objective: "O2", q: "Kasafin kuɗi shi ne:", options: ["Bashi", "Fom ɗin haraji", "Shiri na kuɗin da ke shigowa da fita kowane wata", "Asusun banki"], answer: 2, why: "Kasafin kuɗi yana shirya kuɗin shiga da kashewa." },
      { objective: "O2", q: "Wanne ne abin da dole ne?", options: ["Biyan kuɗin kallon bidiyo a intanet", "Haya", "Cin abinci a waje", "Sabon wasan bidiyo"], answer: 1, why: "Haya kuɗi ne da dole ku biya don rayuwa." },
      { objective: "O2", q: "Bayan barin aikin soja, waɗanne kuɗaɗe ne za ku iya biya da kanku yanzu?", options: ["Babu", "Tikitin sinima kawai", "Kyaututtuka kawai", "Kuɗaɗen da a da aka biya ko aka ba da su a matsayin alawus, kamar gida"], answer: 3, why: "Alawus da kuɗaɗen da aka biya suna iya canjawa ko su tsaya bayan aikin soja." },
      { objective: "O2", q: "A ina ya kamata ku tabbatar da albashinku na ƙarshe da tallafinku?", options: ["Ofishin kuɗinku, DFAS ko VA", "Rubutu a kafofin sada zumunta", "Hasashen AI", "Tes daga baƙo"], answer: 0, why: "Ofisoshin hukuma suna da ainihin lambobinku." },
      { objective: "O2", q: "Bayan AI ya yi teburin kasafin kuɗinku, ya kamata ku:", options: ["Amince da jimlolin", "Duba lissafin da kanku", "Tura shi ga baƙi", "Ƙara bayanan shigar bankinku"], answer: 1, why: "AI yana iya yin kuskuren lissafi; ku duba da na'urar lissafi." },
      { objective: "O3", q: "Tayin \"pension advance\" shi ne:", options: ["Shirin VA", "Mayar da kuɗin haraji", "Dunƙulen kuɗi yanzu don biyan kuɗinku na gaba, sau da yawa da tsada sosai", "Kuɗi kyauta"], answer: 2, why: "CFPB tana gargaɗi game da waɗannan tayin." },
      { objective: "O3", q: "Wani yana karɓar kuɗi tun kafin aiki don \"ƙara matakin VA ɗinku\". Wannan:", options: ["Abu ne na yau da kullum", "Dole ne", "Dokar VA ce", "Alamar gargaɗin zamba ce"], answer: 3, why: "Kuɗi tun kafin aiki da alƙawura alamun zamba ne da aka saba gani." },
      { objective: "O3", q: "Wani saƙo yana gaggauta ku ku biya da katin kyauta. Za ku:", options: ["Tsaya kuma kada ku biya", "Biya da sauri", "Raba lambar SSN ɗinku", "Ba su code"], answer: 0, why: "Gaggawa da katin kyauta alamun zamba ne da aka saba gani." },
      { objective: "O3", q: "Kafin ku liƙa saƙon da ake zargi a AI, ya kamata ku:", options: ["Ƙara lambar asusunku", "Cire bayananku na sirri", "Tura shi ga abokai", "Mayar wa mai aikawa da amsa"], answer: 1, why: "Ku cire bayanan sirri, sannan ku nemi AI ya gane alamun gargaɗi." },
      { objective: "O4", q: "Manufa mai kyau tana da:", options: ["Babu kwanan wata", "Babu lamba", "Lamba da kwanan wata", "Ji kawai"], answer: 2, why: "Manufofi a sarari, masu aunawa kuma masu kwanan wata suna cika." },
      { objective: "O4", q: "Wace hukuma ce ke ba da takardar saita manufa kyauta ga sojoji?", options: ["Kamfanin pension advance", "Mai sayar da mota", "Manhajar crypto", "Consumer Financial Protection Bureau"], answer: 3, why: "Shafin kuɗin soja na CFPB yana da hanyar haɗi zuwa takardar saita manufa." },
      { objective: "O4", q: "Idan kuna neman AI ya raba manufa zuwa matakai, ku haɗa da:", options: ["Manufar, kwanan watan da abin da za ku iya sakawa a zahiri", "Kalmar sirrin bankinku", "Lambar Social Security ɗinku", "Babu komai"], answer: 0, why: "Cikakkun bayanai a sarari suna kawo shiri mai yiwuwa." },
      { objective: "O5", q: "Tsarin mako ya kamata ya haɗa da:", options: ["Aiki kawai", "Lokutan manufa da lokacin hutu da na iyali", "Babu hutu", "Kallon allo kawai"], answer: 1, why: "Tsari mai yiwuwa yana daidaita manufofi da hutu." },
      { objective: "O5", q: "Sau nawa ya kamata ku duba tsarinku?", options: ["Ba kwata-kwata", "Sau ɗaya a shekara", "Kowane mako", "Sai abubuwa sun lalace kawai"], answer: 2, why: "Duba kowane mako yana bar ku gyara abin da ba ya aiki." },
      { objective: "O6", q: "Wane wuri ne ya dace don tambaya game da biyan kuɗin VA ɗinku?", options: ["Tallar da ke tasowa (pop-up)", "Wani dandalin intanet na kowa", "Chatbot na AI kaɗai", "VA a va.gov"], answer: 3, why: "VA ita ce majiyar hukuma don tallafin VA." },
      { objective: "O6", q: "Shin wannan kwas ɗin yana ba da shawarar zuba jari?", options: ["A'a; ku yi magana da ƙwararren mai sana'a", "E, crypto", "E, kowane hannun jari", "E, pension advance"], answer: 0, why: "Wannan kwas ɗin ba ya ba da shawarar zuba jari." },
      { objective: "O6", q: "Wani yana alƙawarin riba mai yawa da sauri daga zuba jari. Ya kamata ku:", options: ["Zuba jari nan take", "Yi hankali ku tabbatar da ƙwararren mai sana'a", "Ba shi bayanan shigar asusunku", "Ci bashi don zuba jari"], answer: 1, why: "Alƙawarin riba mai yawa da sauri alamar gargaɗi ce." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      1,
      3,
      5,
      9,
      10,
      12,
      15,
      17,
      18
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Kasafin kuɗi na wata",
        objective: "O2",
        notYet: "Kuɗin shiga, abubuwan da dole ne, abubuwan da ake so kawai, ajiya ko biyan bashi sun ɓace, ko jimlolin ba daidai ba ne.",
        meets: "Dukkan sassa biyar suna nan da lambobin da aka tattara, kuma an duba jimlolin a na'urar lissafi.",
        exceeds: "Mai koyo zai iya faɗin wane abin da ake so kawai zai fara ragewa idan kuɗi ya yi ƙaranci."
      },
      {
        name: "Layin canjin albashi",
        objective: "O2",
        notYet: "Babu layi na kuɗi ko albashin da ke canjawa bayan aikin soja.",
        meets: "Layi ɗaya yana nuna kuɗin da aka biya a aikin soja ko canjin albashi bayan aikin soja.",
        exceeds: "Mai koyo ya rubuta inda ya tabbatar da albashinsa na ƙarshe ko tallafinsa."
      },
      {
        name: "Tsarin mako",
        objective: "O5",
        notYet: "Tsarin yana da ƙasa da lokutan manufa uku, ko babu duba kasafin kuɗi.",
        meets: "Lokutan manufa uku, tare da duba kasafin kuɗi kowane mako, da lokacin hutu da na iyali.",
        exceeds: "Tsarin yana kan kalandar waya ko an buga shi, da ƙayyadadden ranar duba shi."
      },
      {
        name: "Babu bayanan sirri",
        objective: "O1",
        notYet: "Shirin ko wani prompt yana da lambar asusu, kati ko ta shaida.",
        meets: "Babu lambobin asusu ko bayanan sirri a ko'ina.",
        exceeds: "Mai koyo zai iya nuna prompts da lambobin da aka tattara da ya yi amfani da su."
      },
      {
        name: "Tambaya ga majiyar hukuma",
        objective: "O6",
        notYet: "Babu tambayar kuɗi, ko ba a ambaci majiya ba.",
        meets: "Tambayar kuɗi ɗaya a sarari, da majiyar hukuma ko mai ba da shawara da ya dace da ita.",
        exceeds: "Mai koyo ya yi alƙawari da wannan majiya ko ya tuntuɓe ta."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka ce har yanzu suna amfani da kasafin kuɗinsu da tsarinsu na mako bayan kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka tuntuɓi majiyar kuɗi ta hukuma kyauta, kamar Military OneSource ko VA, cikin kwanaki 30",
      "Masu koyo da suka ce sun gane kuma sun guji saƙon zamba ko tayin zamba"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Wayar zamani ko kwamfuta mai intanet, da na'urar lissafi",
      "Mataimakin AI kyauta: ChatGPT, Microsoft Copilot ko Google Gemini",
      "Takarda, manhajar rubutu ko spreadsheet (teburin lissafi) don kasafin kuɗi, da kalandar waya don tsarin mako",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Kafin kowane atisaye, ku nuna yadda ake tattara lambobi, ku kuma tunatar da masu koyo kada su taɓa rubuta lambobin asusu, kati, Social Security ko fayil na VA a AI.",
      "Kada ku ba da shawarar zuba jari; ku tura shawarwarin kuɗi zuwa Military OneSource, VA ko ƙwararren mai sana'a.",
      "Ku yi amfani da tes na zamba na ƙirƙira a aji; kada ku taɓa neman masu koyo su raba saƙonni na gaske masu bayanan sirri.",
      "Ku ba da maki ga shirin ƙarshe mai shafi ɗaya da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya.",
      "Mata ko mazaje ko 'yan iyali za su iya shiga darasin kasafin kuɗi idan mai koyo yana so."
    ]
  }
};
