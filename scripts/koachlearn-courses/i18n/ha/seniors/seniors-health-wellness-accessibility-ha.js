"use strict";

// Koach Learn course, Hausa (ha) translation of seniors/seniors-health-wellness-accessibility.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "seniors-health-wellness-accessibility-ha",
  lang: "ha",
  translationOf: "seniors-health-wellness-accessibility",
  category: "Seniors and Technology",
  name: "Lafiya, Walwala da Sauƙin Amfani da Fasaha",
  skills: "Ƙara girman rubutu, Amfani da gilashin ƙara girma da karantawa da murya, Kunna rubutun magana (captions), Saita tunatarwar magani, Shirya tambayoyi ga likita da AI, Nemo bayanan lafiya amintattu",
  outcome: "saita wayarku ko tablet ɗinku don ya fi sauƙin gani da ji, saita tunatarwar shan magani ta kowace rana, da amfani da mataimakin AI don shirya jerin tambayoyi masu sarari don ganin likitanku na gaba.",
  about: [
    "Wannan kwas ɗin na manya ne da tsofaffi waɗanda ke son fasaha ta taimaka wa idanunsu, kunnuwansu da lafiyarsu, ba ta wahalar da su ba. Ba sai kun sayi wani sabon abu ba; yawancin waɗannan kayan aiki suna kan wayarku ko tablet ɗinku tuni.",
    "A Babi na 1 za ku ƙara girman rubutu, ku yi amfani da wayarku kamar gilashin ƙara girma, ku sa ta karanta rubutu da murya, kuma ku kunna rubutun magana (captions). A Babi na 2 za ku saita tunatarwar magani, ku yi amfani da AI don shirin ganin likita, kuma ku koyi inda za ku sami bayanan lafiya amintattu.",
    "Kowane darasi yana ɗaukar kusan minti biyar. Wani a iyali zai iya taimaka da saitunan a karon farko. Wannan kwas ɗin ba ya ba da shawarar likita: koyaushe ku bi umarnin likitanku da mai ba da magani (pharmacist). Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku sa wayarku ta fi sauƙin amfani ta hanyar canja saiti ɗaya na gani ko ji, ku saita tunatarwa ta kowace rana don wani magani ko ɗan gajeren tafiya da ƙafa, kuma ku yi amfani da mataimakin AI don mayar da damuwarku ta lafiya zuwa gajeren jerin tambayoyi masu sarari da za ku kai wajen ganin likitanku na gaba, ba tare da lambobin sirri a ciki ba.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Tsofaffi da ke kula da lafiyarsu da magungunansu da kansu, kuma wataƙila ganinsu ko jinsu ya canja. Da yawa suna ganin likita fiye da ɗaya kuma suna shan magunguna da dama.",
    startingPoint: "Suna da wayar zamani ko tablet kuma suna amfani da ita don kira da saƙon tes. Da yawa suna ganin rubutun ƙarami ne ko muryoyi suna da wuyar ji, kuma ba su taɓa duba saitunan sauƙin amfani, tunatarwa masu maimaituwa ko mataimakan AI ba.",
    gap: "Ƙananan rubutu da sautin da ke da wuyar ji suna sa mutane su bar wayoyin da za su iya taimaka musu su kasance cikin ƙoshin lafiya. Sa wayar ta fi sauƙin gani da ji, amfani da tunatarwa don magunguna, shirya tambayoyi masu sarari ga likita da tabbatar da bayanan lafiya a shafi amintacce suna taimakawa wajen dogaro da kai da ganin likita mafi kyau, ba tare da barin AI ta maye gurbin likita ba.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi, gajerun jimloli da manyan matakai masu sauƙi",
      "Na'urori: iPhone, wayoyin Android da tablet; sunayen menu sun bambanta, don haka masu koyo suna bincike a Settings",
      "Lokaci: kusan minti 5 a kowane darasi, a hankali",
      "Lafiya: AI don shiri ne, ba don gano cuta ba; magunguna suna bin umarnin likita da mai ba da magani",
      "Sirri: babu suna, ranar haihuwa ko lambobin inshora a cikin prompt na AI"
    ],
    prerequisites: "Babu."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Ta amfani da manhajar Settings a wayarku ko tablet ɗinku", action: "ƙara girma da kaurin rubutu da zuƙowa (zoom) don ganin allo da girma", standard: "har rubutun ya zama mai sauƙin karantawa" },
    { id: "O2", condition: "Idan kuna da ƙananan rubutu kamar takardar bayanin magani", action: "amfani da waya a matsayin gilashin ƙara girma da kunna karantawa da murya", standard: "ta yadda za ku iya karanta ko jin rubutun" },
    { id: "O3", condition: "Idan muryoyi a bidiyo ko kira suna da wuyar ji", action: "kunna rubutun magana (captions) da nemo saitunan ji na wayarku", standard: "ta yadda kalmomin za su bayyana a allo" },
    { id: "O4", condition: "Idan kuna da wani magani ko kyakkyawar ɗabi'a ta lafiya", action: "saita tunatarwa mai maimaituwa kowace rana a wayarku", standard: "a lokacin da likitanku ko mai ba da magani ya faɗa, kuma kun tabbatar cewa an saita ta" },
    { id: "O5", condition: "Kafin ku je ganin likita", action: "amfani da mataimakin AI don mayar da damuwarku zuwa gajeren jerin tambayoyi masu sarari", standard: "ba tare da lambobin sirri ba, kuma ba tare da canja magani saboda AI ba" },
    { id: "O6", condition: "Idan kun sami bayanan lafiya daga AI ko wani shafin intanet", action: "tabbatar da su a majiya amintacciya kamar MedlinePlus, likitanku ko mai ba ku magani", standard: "kafin ku yi aiki da su" }
  ],
  chapters: [
    {
      name: "Babi na 1: Sa na'urarku ta fi sauƙin gani da ji",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ƙara girman rubutu don ya fi sauƙin karantawa",
          minutes: 5,
          goal: "Ƙara girma da kaurin rubutun da ke wayarku ko tablet ɗinku.",
          text: [
            "Ƙananan rubutu yana ɗaya daga cikin dalilan da suka fi yawa da ke sa mutane su bar waya. Labari mai daɗi: kowace wayar zamani da tablet tana barin ku ƙara girman rubutu, kuma da yawa suna barin ku sa shi ya yi kauri (bold).",
            "Sunayen menu sun bambanta daga waya zuwa waya, don haka hanya mafi sauƙi ita ce bincike. Ku buɗe manhajar Settings (sau da yawa giya ce mai launin toka), ku taɓa akwatin bincike a sama, ku rubuta \"text size\" ko \"font size\". Ku taɓa sakamakon, ku ja sandar zuwa dama har rubutun ya yi muku daɗin karantawa. Ku kuma nemi maɓallin \"bold text\" a kusa.",
            "Wasu manhajoji kuma suna barin ku zuƙowa (zoom) ta hanyar ɗora yatsu biyu a kan allo ku buɗe su. Ku haɗa su wuri ɗaya don komawa yadda yake."
          ],
          steps: ["Ku buɗe manhajar Settings.", "Ku taɓa akwatin bincike a sama.", "Ku rubuta \"text size\" ko \"font size\".", "Ku ja sandar zuwa dama har rubutun ya yi muku daɗi.", "Ku kunna \"bold text\" idan kuna so."],
          words: [["Settings", "manhajar da kuke canja yadda wayarku take da yadda take aiki, yawanci hoton giya."], ["Font", "salo da girman haruffa a allo."], ["Zoom (zuƙowa)", "sa abin da ke kan allo ya yi girma."]],
          slides: [
            { title: "Ƙananan rubutu? Za ku iya gyara shi", bullets: ["Kowace waya da tablet na iya ƙara girman rubutu", "Da yawa na iya sa shi ya yi kauri (bold)"] },
            { title: "Ku yi bincike a Settings", bullets: ["Ku buɗe Settings (giya)", "Ku nemi \"text size\" ko \"font size\"", "Ku ja sandar zuwa dama"] },
            { title: "Zuƙowa da yatsu biyu", bullets: ["Ku buɗe yatsu biyu don ƙara girma", "Ku haɗa su wuri ɗaya don rage girma"] }
          ],
          tryIt: "Ku buɗe Settings, ku nemi \"text size\", sannan ku ƙara girman rubutunku mataki ɗaya ko biyu. Ku buɗe saƙonninku ko imel don ganin bambancin.",
          youCanNow: "ƙara girma da kaurin rubutun da ke na'urarku.",
          quickCheck: [
            { objective: "O1", q: "Me buɗe yatsu biyu a kan allo yake yi a manhajoji da yawa?", options: ["Yana ƙara girma (zoom)", "Yana kashe waya", "Yana yin kira", "Yana goge shafin"], answer: 0, why: "Buɗe yatsu biyu yana ƙara girma; haɗa su wuri ɗaya yana mayar da shi yadda yake." },
            { objective: "O1", q: "Ba ku iya nemo menu na girman rubutu a sabuwar wayarku ba. Me za ku yi?", options: ["Ku sayi sabuwar waya", "Ku haƙura", "Ku buɗe Settings, ku taɓa akwatin bincike ku rubuta \"text size\"", "Ku kashe waya ku sake kunna ta"], answer: 2, why: "Sunayen menu sun bambanta, don haka bincike a Settings ita ce hanya mafi sauƙi ta nemo saitin." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Wayarku a matsayin gilashin ƙara girma da mai karantawa",
          minutes: 5,
          goal: "Amfani da wayarku don ƙara girman ƙananan rubutu da kuma karanta rubutu da murya.",
          text: [
            "Kyamarar wayarku na iya aiki kamar gilashin ƙara girma don takardun magani, menu na abinci da rasit. iPhone yana da manhaja mai suna Magnifier. A wayoyin Android da yawa za ku iya amfani da zoom na manhajar Camera, ko ku nemi \"magnif\" a Settings.",
            "Waya kuma na iya karanta rubutu da murya. Ku nemi \"spoken content\" ko \"select to speak\" a Settings, ku kunna shi. Sannan za ku iya zaɓar rubutu ku zaɓi Speak. Google Lens da wasu mataimakan AI kuma na iya karanta shafin da kuka ɗauki hotonsa da murya.",
            "Ku kunna fitila (flashlight) idan haske bai isa ba, kuma ku riƙe waya a tsaye 'yan inci kaɗan sama da shafin."
          ],
          steps: ["Ku buɗe Magnifier, ko manhajar Camera ku ƙara girma.", "Ku riƙe waya 'yan inci kaɗan sama da ƙananan rubutun.", "Ku kunna haske idan ana buƙata.", "Don jin rubutu, ku nemi \"spoken content\" ko \"select to speak\" a Settings ku kunna shi.", "Ku zaɓi rubutu ku zaɓi Speak."],
          words: [["Magnifier (gilashin ƙara girma)", "kayan aiki da ke sa ƙananan abubuwa su yi girma a allonku."], ["Karantawa da murya", "lokacin da waya ke faɗin rubutattun kalmomi da babbar murya."]],
          slides: [
            { title: "Gilashin ƙara girma a aljihunku", bullets: ["Takardun magani, menu na abinci, rasit", "iPhone: manhajar Magnifier", "Android: zoom na Camera ko ku nemi \"magnif\""] },
            { title: "Bari waya ta karanta muku", bullets: ["Ku nemi \"spoken content\" ko \"select to speak\"", "Ku zaɓi rubutu, sannan ku zaɓi Speak"] },
            { title: "Shawarwari", bullets: ["Ku kunna haske a ɗaki mai duhu", "Ku riƙe waya a tsaye sama da shafin"] }
          ],
          tryIt: "Ku yi amfani da wayarku don ƙara girman ƙananan rubutun da ke kan takardar abinci ko ta magani. Sannan ku kunna saitin karantawa da murya ku sa wayarku ta karanta muku saƙo ɗaya.",
          youCanNow: "ƙara girman ƙananan rubutu da sa wayarku ta karanta rubutu da murya.",
          quickCheck: [
            { objective: "O2", q: "Don me manhajar Magnifier take a iPhone?", options: ["Ɗaukar hoton kai (selfie)", "Ƙara ƙarar kira", "Aika hotuna", "Amfani da kyamara kamar gilashin ƙara girma"], answer: 3, why: "Magnifier yana mayar da kyamara gilashin ƙara girma don ƙananan rubutu." },
            { objective: "O2", q: "Kuna son wayarku ta karanta muku dogon labari da murya. Me za ku nema a Settings?", options: ["\"Wallpaper\"", "\"Spoken content\" ko \"select to speak\"", "\"Battery\"", "\"Ringtone\""], answer: 1, why: "Kunna spoken content ko select to speak yana barin ku zaɓar rubutu ku zaɓi Speak." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Rubutun magana (captions) da taimakon ji",
          minutes: 5,
          goal: "Kunna rubutun magana (captions) don ku karanta abin da ake faɗa.",
          text: [
            "Idan muryoyi a bidiyo ko kira suna da wuyar ji, captions suna nuna kalmomin a allo yayin da ake faɗinsu.",
            "Wayoyi da yawa suna da wani abu da ke ƙara captions ga kusan kowane bidiyo ko sauti, mai suna Live Captions. Ku nemi \"caption\" a Settings don nemo shi ku kunna shi. A YouTube, ku taɓa maɓallin CC a kan bidiyo. Manhajojin kiran bidiyo da yawa ma suna da maɓallin captions.",
            "Wayoyi kuma na iya haɗuwa da na'urorin ji (hearing aids) na zamani da yawa ta Bluetooth. Ku nemi \"hearing\" a Settings don ganin abin da wayarku ke da shi, kuma ku tambayi ƙwararren mai kula da jinku waɗanne saituna suka dace da na'urorin jinku."
          ],
          steps: ["Ku buɗe Settings ku nemi \"caption\".", "Ku kunna Live Captions ko captions.", "A YouTube, ku taɓa CC a kan bidiyon.", "A kiran bidiyo, ku nemi maɓallin captions.", "Ku nemi \"hearing\" a Settings don zaɓuɓɓukan na'urar ji."],
          words: [["Captions (rubutun magana)", "kalmomin da ake nunawa a allo yayin da mutane ke magana."], ["Bluetooth", "hanyar haɗa wayarku da abubuwa kamar na'urorin ji ko lasifika ba tare da waya (igiya) ba."]],
          slides: [
            { title: "Ku karanta abin da ake faɗa", bullets: ["Captions suna nuna kalmomin magana a allo"] },
            { title: "Kunna captions", bullets: ["Ku nemi \"caption\" a Settings", "YouTube: ku taɓa CC", "Kiran bidiyo: ku nemi maɓallin captions"] },
            { title: "Na'urorin ji (hearing aids)", bullets: ["Da yawa suna haɗuwa ta Bluetooth", "Ku nemi \"hearing\" a Settings", "Ku tambayi ƙwararren mai kula da jinku"] }
          ],
          tryIt: "Ku nemi \"caption\" a Settings ku kunna captions, ko ku buɗe kowane bidiyon YouTube ku taɓa CC. Ku kalli minti ɗaya da captions.",
          youCanNow: "kunna captions a na'urarku da nemo saitunan ji.",
          quickCheck: [
            { objective: "O3", q: "Me Live Captions yake yi?", options: ["Yana ƙara captions ga kusan kowane bidiyo ko sauti a waya", "Yana naɗar kiranku", "Yana ɗaukar hotuna", "Yana ƙara ƙara"], answer: 0, why: "Live Captions yana nuna kalmomin bidiyo da sauti a allo." },
            { objective: "O3", q: "Kuna son haɗa na'urorin jinku da wayarku. Mene ne matakin farko mai kyau?", options: ["Kashe Bluetooth", "Sayen sababbin na'urorin ji", "Neman \"hearing\" a Settings da tambayar ƙwararren mai kula da jinku", "Kashe ƙarar kira"], answer: 2, why: "Settings yana nuna zaɓuɓɓukan ji, kuma ƙwararren mai kula da jinku ya san waɗanne suka dace da na'urorinku." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Sa na'urarku ta fi sauƙin gani da ji",
        questions: [
          { objective: "O1", q: "Sunayen menu sun bambanta tsakanin wayoyi. Mece ce hanya mafi sauƙi ta nemo saitin girman rubutu?", options: ["Sake kunna waya", "Sayen sabuwar waya", "Buɗe Settings ku nemi \"text size\"", "Kiran baƙo"], answer: 2, why: "Akwatin bincike a Settings yana nemo shi a kowace waya." },
          { objective: "O1", q: "Ta yaya ake ƙara girma (zoom) a allo da yawa?", options: ["Buɗe yatsu biyu a kan allo", "Girgiza waya", "Danna maɓallin kunnawa", "Juya waya"], answer: 0, why: "Buɗe yatsu biyu yana sa abubuwa su yi girma." },
          { objective: "O2", q: "Ba ku iya karanta ƙananan rubutun da ke kan kwalbar magani ba. Me zai iya taimaka?", options: ["Manhajar waƙa", "Na'urar lissafi (calculator)", "Agogo", "Gilashin ƙara girma na waya ko zoom na kyamara"], answer: 3, why: "Gilashin ƙara girma yana sa ƙananan rubutu ya yi girma." },
          { objective: "O3", q: "Mene ne captions?", options: ["Hotunan abinci", "Kalmomin da ake nunawa a allo yayin da mutane ke magana", "Wani irin ƙararrawa", "Lambobin waya"], answer: 1, why: "Captions suna taimakawa idan muryoyi suna da wuyar ji." },
          { objective: "O3", q: "A YouTube, wane maɓalli ke kunna captions?", options: ["Share", "CC", "Like", "Subscribe"], answer: 1, why: "CC yana nufin closed captions (rubutun magana)." }
        ]
      }
    },
    {
      name: "Babi na 2: Fasaha don lafiyarku",
      lessons: [
        {
          objectives: ["O4"],
          title: "Saita tunatarwar magani da ta lafiya",
          minutes: 5,
          goal: "Saita tunatarwa mai maimaituwa kowace rana don wani magani ko kyakkyawar ɗabi'a ta lafiya.",
          text: [
            "Tunatarwa ta kowace rana a wayarku na iya taimaka muku shan magunguna a kan lokaci, shan ruwa, ko yin ɗan gajeren tafiya da ƙafa.",
            "Hanya mafi sauƙi ita ce ku tambayi mataimakin murya na wayarku: \"Remind me to take my morning pill every day at 8 am.\" (Ka tunatar da ni in sha ƙwayar safe kowace rana da ƙarfe 8 na safe.) Kuna kuma iya buɗe manhajar Clock ko Reminders, ku ƙara ƙararrawa ko tunatarwa, ku zaɓi ta maimaita kowace rana.",
            "Tunatarwa tana taimaka muku tunawa ne kawai; ba ta faɗa muku abin da za ku sha ba. Koyaushe ku bi umarnin likitanku da mai ba ku magani, kuma ku tambayi mai ba da magani idan ba ku da tabbas game da lokaci. Wasu kantunan magani kuma suna ba da tunatarwar sake karɓar magani (refill) kyauta ta saƙon tes ko manhaja."
          ],
          steps: ["Ku tambayi mataimakin murya, ko ku buɗe manhajar Clock ko Reminders.", "Ku faɗi ko ku rubuta abin da za a tuna da lokacin.", "Ku zaɓi ta maimaita kowace rana.", "Ku tabbatar cewa an saita ta.", "Ku bi umarnin likitanku da mai ba ku magani."],
          words: [["Tunatarwa mai maimaituwa", "tunatarwa da ke dawowa kowace rana ko mako ba tare da sake saita ta ba."], ["Refill (sake karɓar magani)", "samun ƙarin maganin da kuke sha tuni."]],
          slides: [
            { title: "Tunatarwa ta kowace rana tana taimakawa", bullets: ["Shan magani a kan lokaci", "Shan ruwa", "Ɗan gajeren tafiya da ƙafa"] },
            { title: "Ku saita ɗaya", bullets: ["\"Remind me to take my pill every day at 8 am.\"", "Ko ku yi amfani da manhajar Clock ko Reminders", "Ku zaɓi \"every day\" (kowace rana)"] },
            { title: "Ku tuna", bullets: ["Tunatarwa ba ta faɗa muku abin da za ku sha ba", "Ku bi likitanku da mai ba ku magani", "Ku tambayi kantin magani game da tunatarwar refill"] }
          ],
          tryIt: "Ku saita tunatarwa ɗaya mai maimaituwa kowace rana don wani magani da kuke sha tuni, ko don kyakkyawar ɗabi'a kamar tafiya da ƙafa na minti 10.",
          youCanNow: "saita tunatarwa mai maimaituwa kowace rana don wani magani ko kyakkyawar ɗabi'a ta lafiya.",
          quickCheck: [
            { objective: "O4", q: "Me tunatarwa mai maimaituwa take yi?", options: ["Tana ƙara sau ɗaya kawai", "Tana faɗa muku wane magani za ku sha", "Tana yin odar refill ɗinku", "Tana dawowa kowace rana a lokacin da kuka zaɓa"], answer: 3, why: "Tunatarwa mai maimaituwa tana dawowa kowace rana; tana taimaka muku tunawa amma ba ta faɗa muku abin da za ku sha ba." },
            { objective: "O4", q: "Ba ku da tabbas ko za ku sha ƙwaya kafin ko bayan karin kumallo. Wa za ku tambaya?", options: ["Manhajar tunatarwa", "Mai ba ku magani (pharmacist)", "Aboki", "Shafin intanet mai sayar da bitamin"], answer: 1, why: "Ku bi umarnin likitanku da mai ba ku magani, kuma ku tambayi mai ba da magani game da lokaci." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Shirin ganin likita da AI",
          minutes: 5,
          goal: "Amfani da mataimakin AI don mayar da damuwarku zuwa jerin tambayoyi masu sarari ga likitanku.",
          text: [
            "Ganin likita na iya zama da gaggawa, kuma yana da sauƙi ku manta abin da kuka yi niyyar tambaya. Mataimakin AI zai iya taimaka muku tsara tunaninku kafin ku tafi.",
            "Ku bayyana damuwarku da kalmomi na gaba ɗaya, ba tare da sunanku, ranar haihuwarku ko lambobin inshora ba: \"Ina da duba lafiya mako mai zuwa. Na fi gajiya fiye da yadda na saba, gwiwoyina suna ciwo idan na hau matakala, kuma ina son tambaya game da maganin hawan jinina. Ka taimake ni in yi gajeren jerin tambayoyi masu sarari da zan tambayi likitana.\"",
            "AI don shiri ne, ba don gano cuta ba. Kada ku canja ko ku daina kowane magani saboda abin da AI ya faɗa. Ku kai jerinku wajen ganin likita, ku rubuta amsoshin likitan, ko ku zo da wani a iyali ya taimaka."
          ],
          steps: ["Ku rubuta damuwarku da kalmomi na gaba ɗaya, ba tare da lambobin sirri ba.", "Ku nemi AI ya yi gajeren jerin tambayoyi masu sarari.", "Ku sa tambaya mafi muhimmanci a farko.", "Ku kawo jerin, ku rubuta amsoshin.", "Kada ku taɓa canja magani saboda AI; ku tambayi likitanku."],
          words: [["Gano cuta (diagnose)", "yanke wace cuta ko matsala mutum yake da ita; ƙwararren likita ne kaɗai zai iya yin haka."]],
          slides: [
            { title: "Ganin likita yana da gaggawa", bullets: ["Yana da sauƙi a manta tambayoyi", "AI zai iya taimaka muku shiri"] },
            { title: "Ku nemi jerin tambayoyi", bullets: ["Ku bayyana damuwa da kalmomi na gaba ɗaya", "Babu suna, ranar haihuwa ko lambobin inshora", "Tambaya mafi muhimmanci a farko"] },
            { title: "Shiri, ba gano cuta ba", bullets: ["AI ba ya maye gurbin likitanku", "Kada ku taɓa canja magani saboda AI", "Ku rubuta amsoshin likita"] }
          ],
          tryIt: "Ku yi tunani game da ganin likitanku na gaba. Ku nemi mataimakin AI ya mayar da biyu ko uku daga cikin damuwarku zuwa gajeren jerin tambayoyi. Ku tabbatar cewa babu lambobin sirri a ciki, sannan ku ajiye ko ku buga shi.",
          youCanNow: "shirya jerin tambayoyi masu sarari ga likitanku da AI, lafiya.",
          quickCheck: [
            { objective: "O5", q: "Me AI yake da amfani a kai kafin ganin likita?", options: ["Gano cutarku", "Canja maganinku", "Tsara damuwarku zuwa tambayoyi masu sarari", "Shirya tiyata"], answer: 2, why: "AI don shirya tambayoyinku ne, ba don gano cuta ba." },
            { objective: "O5", q: "Kuna rubuta damuwarku don AI. Me za ku bari a waje?", options: ["Yadda kuke ji", "Sunanku, ranar haihuwarku da lambobin inshora", "Cewa kuna da duba lafiya mako mai zuwa", "Cewa gwiwoyinku suna ciwo"], answer: 1, why: "Ku bayyana damuwa da kalmomi na gaba ɗaya, ba tare da lambobin sirri ba." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Nemo bayanan lafiya amintattu",
          minutes: 5,
          goal: "Tabbatar da bayanan lafiya a majiya amintacciya kuma kyauta.",
          text: [
            "Bayanan lafiya a intanet sun bambanta daga masu kyau sosai zuwa masu haɗari. Mataimakan AI ma na iya yin kuskure game da lafiya. Don haka ku tabbatar da abin da kuka karanta a majiya amintacciya.",
            "MedlinePlus (medlineplus.gov) shafi ne na bayanan lafiya kyauta daga National Library of Medicine (Babban Ɗakin Karatun Magunguna), wani ɓangare na US National Institutes of Health (NIH, hukumar binciken lafiya ta Amurka). Ba shi da talla, kuma yana bayanin cututtuka, gwaje-gwaje da magunguna da kalmomi masu sauƙi. Ofishin likitanku da mai ba ku magani ma majiyoyi ne amintattu.",
            "Ku yi hattara da shafukan da ke sayar da magani mai warkarwa, suna alƙawarin sakamako na mu'ujiza, ko suna faɗa muku ku daina maganinku. Idan wani abu da kuka karanta ya dame ku, ku rubuta shi ku tambayi likitanku ko mai ba ku magani."
          ],
          steps: ["Ku lura da iƙirarin lafiya daga AI ko shafukan intanet.", "Ku duba su a medlineplus.gov.", "Ku tambayi likitanku ko mai ba ku magani game da duk abin da ya dame ku.", "Ku guji shafukan da ke sayar da magani mai warkarwa ko suna alƙawarin mu'ujiza."],
          words: [["Majiya amintacciya", "wuri mai inganci don samun bayani, kamar shafin lafiya na gwamnati ko likitanku."], ["MedlinePlus", "shafin intanet na bayanan lafiya kyauta kuma ba talla, daga US National Library of Medicine."]],
          slides: [
            { title: "Ba duk bayanan lafiya ne masu kyau ba", bullets: ["Shafukan intanet na iya yin kuskure", "AI ma na iya yin kuskure"] },
            { title: "MedlinePlus: medlineplus.gov", bullets: ["Kyauta kuma babu talla", "Daga National Library of Medicine", "Bayani da kalmomi masu sauƙi"] },
            { title: "Alamun gargaɗi", bullets: ["Sayar da magani mai warkarwa", "Alƙawarin mu'ujiza", "\"Ku daina maganinku\""] }
          ],
          sources: [{ name: "About MedlinePlus (National Library of Medicine)", url: "https://medlineplus.gov/about/general/aboutmedlineplus/" }],
          tryIt: "Aikin ƙarshe: ku canja saiti ɗaya don sa wayarku ta fi sauƙin gani ko ji, ku saita tunatarwa ta kowace rana don wani magani ko tafiya da ƙafa, kuma ku yi amfani da AI don yin gajeren jerin tambayoyi ba tare da lambobin sirri ba don ganin likitanku na gaba. Ku duba batu ɗaya daga jerinku a medlineplus.gov.",
          youCanNow: "sa na'urarku ta fi sauƙin amfani, ci gaba da ɗabi'un lafiya na kowace rana, shiri don ganin likita, da nemo bayanan lafiya amintattu.",
          quickCheck: [
            { objective: "O6", q: "Mene ne MedlinePlus?", options: ["Shagon da ke sayar da magani", "Manhajar lafiya da ake biya", "Mataimakin AI", "Shafin bayanan lafiya kyauta kuma ba talla daga National Library of Medicine"], answer: 3, why: "MedlinePlus yana bayanin cututtuka, gwaje-gwaje da magunguna da kalmomi masu sauƙi, ba tare da talla ba." },
            { objective: "O6", q: "Wani shafin intanet ya ce wani shayi zai warkar da hawan jininku kuma kuna iya daina maganinku. Me za ku yi?", options: ["Ku ɗauke shi a matsayin alamar gargaɗi, ku rubuta shi ku tambayi likitanku", "Ku daina maganinku ku gwada shayin", "Ku sayi na shekara guda", "Ku tura wa abokai"], answer: 0, why: "Shafukan da ke alƙawarin warkarwa ko suna cewa a daina magani alamun gargaɗi ne; ku tambayi likitanku ko mai ba ku magani." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Fasaha don lafiyarku",
        questions: [
          { objective: "O4", q: "Ta yaya za ku sa tunatarwa ta dawo kowace rana?", options: ["Ku goge manhajar", "Ku saita sau ɗaya ku yi fata", "Ku kashe waya", "Ku zaɓi ta maimaita kowace rana"], answer: 3, why: "Tunatarwa mai maimaituwa tana dawowa kowace rana." },
          { objective: "O4", q: "Shin tunatarwar waya tana faɗa muku wane magani za ku sha?", options: ["A'a, ku bi likitanku da mai ba ku magani", "E, koyaushe", "A ƙarshen mako kawai", "E, idan ƙararta ta yi ƙarfi"], answer: 0, why: "Tana taimaka muku tunawa ne kawai." },
          { objective: "O5", q: "Me ya kamata ku bari a waje idan kuna neman AI ya taimaka muku shirin ganin likita?", options: ["Damuwarku", "Kalmar \"likita\"", "Sunanku, ranar haihuwarku da lambobin inshora", "Ranar ganin likitan"], answer: 2, why: "Kada lambobin sirri su taɓa shiga AI." },
          { objective: "O5", q: "AI ya ce wataƙila ba ku buƙatar wani magani. Me za ku yi?", options: ["Ku daina shan sa", "Ku tambayi baƙo", "Ku ninka adadin da kuke sha", "Ku tambayi likitanku; kada ku taɓa canja magani saboda AI"], answer: 3, why: "Likitanku ne kaɗai ya kamata ya canja maganinku." },
          { objective: "O6", q: "Wanne ne shafin bayanan lafiya kyauta kuma ba talla daga gwamnatin Amurka?", options: ["Tallar da ke bayyana kwatsam (pop-up)", "Shafin da ke sayar da maganin mu'ujiza", "MedlinePlus", "Rubutu a kafar sada zumunta"], answer: 2, why: "MedlinePlus daga National Library of Medicine ne." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Lafiya, Walwala da Sauƙin Amfani da Fasaha",
    questions: [
      { objective: "O1", q: "Ana yawan nuna manhajar Settings da:", options: ["Kyamara", "Giya", "Waya", "Agogo"], answer: 1, why: "Settings yawanci yana amfani da hoton giya." },
      { objective: "O1", q: "Don nemo saitin girman rubutu da sauri, za ku:", options: ["Nemi \"text size\" a Settings", "Sake kunna waya", "Buɗe kyamara", "Kira bankinku"], answer: 0, why: "Bincike yana aiki a kowace waya." },
      { objective: "O1", q: "Jan sandar girman rubutu zuwa dama yana sa rubutu:", options: ["Ya yi girma", "Ya yi ƙanƙanta", "Ya ɓace", "Ya yi ja"], answer: 0, why: "Dama yana nufin girma." },
      { objective: "O1", q: "Haɗa yatsu biyu wuri ɗaya a kan allo:", options: ["Yana ƙara girma", "Yana rage girma", "Yana kashe waya", "Yana ɗaukar hoto"], answer: 1, why: "Haɗa su don rage girma; buɗe su don ƙara girma." },
      { objective: "O2", q: "Manhajar iPhone da ke mayar da kyamara gilashin ƙara girma ita ce:", options: ["Weather", "Calculator", "Magnifier", "Music"], answer: 2, why: "Magnifier yana ƙara girman ƙananan rubutu." },
      { objective: "O2", q: "A ɗaki mai duhu, ƙara girma yana aiki da kyau idan kun:", options: ["Girgiza waya", "Rufe kyamara", "Nisantar da waya", "Kunna haske"], answer: 3, why: "Haske yana taimaka wa kyamara ta gani sosai." },
      { objective: "O2", q: "Ana samun saitin sa waya ta karanta rubutu da murya ta neman wannan a Settings:", options: ["\"ringtone\"", "\"wallpaper\"", "\"spoken content\" ko \"select to speak\"", "\"battery\""], answer: 2, why: "Waɗannan ne sunayen da aka saba na saitin karantawa da murya." },
      { objective: "O3", q: "Captions su ne:", options: ["Kalmomi a allo yayin da mutane ke magana", "Hotuna", "Lambobin waya", "Kalmomin sirri (password)"], answer: 0, why: "Captions suna nuna kalmomin magana." },
      { objective: "O3", q: "Ana iya samun Live Captions ta neman wannan a Settings:", options: ["\"contacts\"", "\"camera\"", "\"clock\"", "\"caption\""], answer: 3, why: "Neman \"caption\" yana nemo saitunan captions." },
      { objective: "O3", q: "Na'urorin ji na zamani da yawa suna haɗuwa da waya ta amfani da:", options: ["Tsinken takarda (paper clip)", "Bluetooth", "Wayar gida mai igiya", "Caja"], answer: 1, why: "Bluetooth haɗi ne ba tare da igiya ba." },
      { objective: "O3", q: "Wa ya kamata ya taimaka muku zaɓar saitunan na'urar ji?", options: ["Tallar da ke bayyana kwatsam (pop-up)", "Ƙwararren mai kula da jinku", "Baƙo a intanet", "Babu kowa"], answer: 1, why: "Sun san na'urorin jinku da jinku." },
      { objective: "O4", q: "Wace bukata ta murya ke saita tunatarwar magani ta kowace rana?", options: ["\"Medicine?\"", "\"Pill.\"", "\"Hello.\"", "\"Remind me to take my pill every day at 8 am.\""], answer: 3, why: "Tana faɗin me, yaushe da sau nawa." },
      { objective: "O4", q: "Idan ba ku da tabbas lokacin da za ku sha wani magani, ku tambayi:", options: ["Mai ba ku magani (pharmacist)", "AI kaɗai", "Maƙwabci", "Tallar pop-up"], answer: 0, why: "Masu ba da magani ƙwararru ne a kan magunguna." },
      { objective: "O5", q: "AI yana da amfani kafin ganin likita don:", options: ["Canja maganinku", "Gano cutarku", "Tsara tambayoyinku", "Rubuta takardar magani"], answer: 2, why: "AI yana taimaka muku shiri, ba gano cuta ba." },
      { objective: "O5", q: "\"Gano cuta\" (diagnose) yana nufin:", options: ["Ƙara girman rubutu", "Rubuta jeri", "Saita tunatarwa", "Yanke wace cuta mutum yake da ita"], answer: 3, why: "Ƙwararren likita ne kaɗai zai iya gano cuta." },
      { objective: "O5", q: "Wanne BAI kamata ya kasance a cikin prompt ɗinku na AI game da lafiya ba?", options: ["\"Gwiwoyina suna ciwo\"", "\"Ina jin gajiya\"", "Lambar inshorarku", "\"Ina da duba lafiya mako mai zuwa\""], answer: 2, why: "Lambobin inshora na sirri ne." },
      { objective: "O5", q: "A wajen ganin likita, ɗabi'a mai kyau ita ce:", options: ["Barin jerinku a gida", "Rubuta amsoshin likita", "Rashin tambayar komai", "Dogaro da ƙwaƙwalwa kaɗai"], answer: 1, why: "Rubuta amsoshi yana taimaka muku tuna su." },
      { objective: "O6", q: "Wa ke gudanar da MedlinePlus?", options: ["National Library of Medicine", "Kamfanin ƙarin abinci (supplement)", "Shafin sada zumunta", "Kamfanin waya"], answer: 0, why: "Hidima ce ta NLM a ƙarƙashin NIH." },
      { objective: "O6", q: "Shafin intanet da ke alƙawarin maganin mu'ujiza:", options: ["Alamar gargaɗi ne", "Koyaushe amintacce ne", "Likitanku ne ke gudanar da shi", "Kula da lafiya kyauta ne"], answer: 0, why: "Iƙirarin mu'ujiza alamun gargaɗi ne." },
      { objective: "O6", q: "Wani abu da kuka karanta game da lafiyarku ya dame ku. Mene ne mataki mafi kyau?", options: ["Ku daina duk magani", "Ku rubuta shi ku tambayi likitanku ko mai ba ku magani", "Ku ƙi jin maganar likitanku", "Ku sayi kayan"], answer: 1, why: "Likitanku ko mai ba ku magani zai iya bayani lafiya." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [1, 4, 7, 11, 13, 15, 17, 18] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Ya fi sauƙin gani ko ji", objective: "O1", notYet: "Ba a canja wani saiti ba.", meets: "An canja saiti ɗaya na gani ko ji, kamar babban rubutu ko captions.", exceeds: "An canja saituna biyu ko fiye kuma mai koyo zai iya nuna wa wani yadda ake yi." },
      { name: "Tunatarwa ta kowace rana", objective: "O4", notYet: "Babu tunatarwa, ko ba ta maimaituwa.", meets: "Tunatarwa mai maimaituwa kowace rana don wani magani ko tafiya da ƙafa, kuma an tabbatar cewa an saita ta.", exceeds: "Lokacin ya dace da abin da likita ko mai ba da magani ya faɗa." },
      { name: "Tambayoyi masu sarari", objective: "O5", notYet: "Babu jeri, ko tambayoyin ba su da sarari.", meets: "Gajeren jerin tambayoyi masu sarari da aka yi da taimakon AI, mafi muhimmanci a farko.", exceeds: "Yana da wurin rubuta amsoshin likita." },
      { name: "An bar lambobin sirri a waje", objective: "O5", notYet: "Prompt ko jerin yana da suna, ranar haihuwa ko lambar inshora.", meets: "Babu lambobin sirri a cikin prompt ko jerin.", exceeds: "An bayyana damuwa da kalmomi na gaba ɗaya waɗanda har yanzu suke ba likita cikakken hoto." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da har yanzu suke amfani da tunatarwar magani ko ta lafiya a binciken biyo baya na kwanaki 30",
      "Masu koyo da suka kawo rubutaccen jerin tambayoyi wajen ganin likita cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka fara wani kwas na Seniors and Technology (Tsofaffi da Fasaha) cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Wayar zamani ko tablet mai intanet",
      "Mataimakin AI kyauta (ChatGPT, Microsoft Copilot ko Google Gemini)",
      "Wani abu mai ƙananan rubutu don atisaye, kamar menu na abinci ko kwalin magani maras komai",
      "Kusan minti 60 gaba ɗaya, a gajerun zama cikin natsuwa: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku haɗa masu koyo bisa irin wayarsu don saitunan da ke kan allo su yi daidai, kuma ku taimaki kowanne ya yi bincike a Settings.",
      "Kada ku taɓa ba da shawarar likita; ku tura tambayoyin magani da lafiya zuwa likitan mai koyo ko mai ba shi magani.",
      "Ku tunatar da masu koyo su bar sunaye, ranakun haihuwa da lambobin inshora a waje daga prompt na AI.",
      "Wasu masu koyo na iya jin kunya game da ganinsu ko jinsu; ku yi magana a hanya mai amfani kuma a sirrance.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
