"use strict";

// Koach Learn course (Swahili translation of shared/it-support-fundamentals.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const A_PLUS = { name: "Cheti cha CompTIA A+ (ukurasa rasmi)", url: "https://www.comptia.org/en-us/certifications/a/" };
const CORE1 = { name: "Maelezo ya mtihani wa CompTIA A+ Core 1 (220-1201)", url: "https://www.comptia.org/en-us/certifications/a/core-1-v15/" };
const CORE2 = { name: "Maelezo ya mtihani wa CompTIA A+ Core 2 (220-1202)", url: "https://www.comptia.org/en-us/certifications/a/core-2-v15/" };
const BLS = { name: "US Bureau of Labor Statistics (Ofisi ya Takwimu za Kazi ya Marekani): Wataalamu wa Msaada wa Kompyuta", url: "https://www.bls.gov/ooh/computer-and-information-technology/computer-support-specialists.htm" };

module.exports = {
  id: "it-support-fundamentals-sw",
  lang: "sw",
  translationOf: "it-support-fundamentals",
  category: "Workforce Development",
  name: "Misingi ya Msaada wa TEHAMA (Maandalizi ya CompTIA A+)",
  skills: "Kutaja vifaa vya kompyuta, Kukagua muunganisho wa mtandao, Kutumia zana za mfumo wa uendeshaji, Kutatua matatizo hatua kwa hatua, Kuandika tiketi za help desk, Kupanga mitihani ya A+",
  outcome: "kufanya kazi kama fundi wa help desk anayeanza: kutaja sehemu za kompyuta, kukagua muunganisho wa mtandao kwa ipconfig na ping, kutumia zana zilizomo ndani ya mfumo, kutatua tatizo kwa njia ya hatua sita, kuandika tiketi iliyo wazi, na kufuata mpango wako wa kusoma wenye tarehe kwa mitihani miwili ya CompTIA A+.",
  about: [
    "Msaada wa TEHAMA (IT support, pia huitwa help desk au desktop support) ni kazi ya kwanza inayojulikana sana katika teknolojia. Mafundi wa msaada huwasaidia watu kompyuta, printa, simu au mtandao unapoacha kufanya kazi. Cheti cha mwanzo kinachojulikana zaidi kwa kazi hii ni CompTIA A+.",
    "Kozi hii inakuandaa kwa A+. Haikupi cheti. Ili kupata A+ lazima ufaulu mitihani miwili, Core 1 na Core 2, kwenye kituo cha mitihani au mtandaoni. Angalia ukurasa rasmi wa CompTIA kwa mitihani ya sasa, bei na njia za kufanya mtihani kabla ya kujisajili.",
    "Utafanya mazoezi kwenye kompyuta yako mwenyewe kwa zana za bure zilizomo ndani yake. Huhitaji kufungua kompyuta wala kununua chochote. Kila somo linachukua kama dakika tano na linaisha kwa kazi ya \"Jaribu sasa\" na maswali mawili mafupi. Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni.",
    "Kozi hii ni ya yeyote anayeanza: wanaotafuta kazi, maveterani, vijana, watu wanaorudi nyumbani kutoka gerezani, wahamiaji na watu wazima wanaobadilisha kazi."
  ],
  finalTask: "Tengeneza kifurushi chako cha kuanza msaada wa TEHAMA: (1) tiketi ya mazoezi ya help desk kwa tatizo halisi au la kubuni, iliyoandikwa na hatua zote sita za kutatua matatizo na sehemu za tiketi kutoka Somo la 6; (2) maelezo ya ukurasa mmoja kuhusu kompyuta yako: mfumo wake wa uendeshaji na toleo, nafasi iliyo wazi ya kuhifadhi, anwani ya IP, default gateway na kama ping ilifanya kazi; na (3) mpango wako wa kusoma na mtihani wa A+ wenye tarehe lengwa ya Core 1 na ya Core 2, maeneo (domains) ya kila mtihani pamoja na uzito wake, na saa utakazosoma kila wiki.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima na vijana wanaotafuta kazi ya kwanza katika teknolojia: wanaotafuta kazi, maveterani, watu wanaorudi nyumbani kutoka gerezani, wahamiaji na wanaobadilisha kazi. Wengi wanatumia simu na kompyuta kila siku lakini hawajawahi kuitengeneza moja wala kufanya kazi ya TEHAMA.",
    startingPoint: "Wanaweza kutumia kivinjari cha wavuti, barua pepe na apps za kawaida. Wengi hawajawahi kutumia command prompt, kuangalia ndani ya mipangilio ya mfumo, wala kuandika tiketi ya msaada. Wachache wanajua mitihani ya A+ inahusu nini.",
    gap: "Kazi za help desk zinahitaji ujuzi wa msingi wa vifaa, mtandao, mfumo wa uendeshaji na kutatua matatizo, na mara nyingi CompTIA A+. Wanafunzi wanahitaji picha wazi ya kazi hiyo, mazoezi ya mikono kwa zana halisi, na mpango wenye tarehe ili wafanye kweli mitihani yote miwili.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; kila neno la kiufundi linaelezwa",
      "Vifaa: kompyuta moja ya Windows au Mac (kompyuta ya maktaba inafaa kwa kazi nyingi, lakini baadhi ya amri zinaweza kuzuiwa huko)",
      "Hakuna kufungua kompyuta wala power supply; vifaa vinajifunzwa kwa picha au kwa kifaa cha zamani kilichozimwa na kuchomolewa tu",
      "Muda: masomo ya dakika 4 hadi 6 yanayoingia kati ya kazi na miadi",
      "Sheria za mitihani, bei na matoleo hubadilika: wanafunzi wanaangalia comptia.org kabla ya kujisajili"
    ],
    prerequisites: "Kuweza kutumia kompyuta, kipanya (mouse) na kibodi. Kama hilo ni jipya, chukua kwanza \"Ujuzi wa Msingi wa Kompyuta\". \"Utangulizi wa Usalama wa Mtandao\" ni kozi nzuri ya kuandamana nayo."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa picha au orodha ya sehemu za kompyuta", action: "kutambua kila sehemu kuu ya kifaa na kusema inafanya nini", standard: "ukipata angalau 8 kati ya 10 sahihi" },
    { id: "O2", condition: "Ukitumia kompyuta yako mwenyewe ya Windows au Mac", action: "kuendesha ipconfig (au kuangalia mipangilio ya mtandao) na ping ili kuandika anwani ya IP na default gateway na kujaribu muunganisho", standard: "bila msaada, na kusema anwani ya 169.254 inamaanisha nini" },
    { id: "O3", condition: "Ukitumia kompyuta yako mwenyewe", action: "kutafuta toleo la mfumo wa uendeshaji, nafasi iliyo wazi, programu zinazoendeshwa na hali ya masasisho kwa zana zilizomo ndani", standard: "kwa chini ya dakika 10" },
    { id: "O4", condition: "Ukipewa tatizo la kompyuta kutoka kwa mtumiaji", action: "kutumia njia ya CompTIA ya hatua sita za kutatua matatizo na kuandika kila hatua", standard: "hatua zote sita zikiwa katika mpangilio sahihi" },
    { id: "O5", condition: "Ukipokea simu au ujumbe kutoka kwa mtumiaji mwenye tatizo", action: "kuandika tiketi ya help desk na jibu fupi la adabu kwa mtumiaji", standard: "kila sehemu ya tiketi ikiwa imejazwa na bila lawama wala maneno magumu ya kiufundi katika jibu" },
    { id: "O6", condition: "Ukitumia kurasa rasmi za mitihani ya CompTIA A+", action: "kuandika mpango wa kusoma na mtihani wenye tarehe lengwa za Core 1 na Core 2", standard: "unaojumuisha kila eneo la mtihani na uzito wake na muda wa kusoma kila wiki" }
  ],
  chapters: [
    {
      name: "Sura 1: Kazi, vifaa na mtandao",
      lessons: [
        {
          title: "Kazi ya help desk na mitihani miwili ya A+",
          objectives: ["O6"],
          minutes: 5,
          goal: "Orodhesha mitihani miwili ya A+, namba zake na mada kuu ambazo kila mmoja unashughulikia.",
          text: [
            "Fundi wa msaada anajibu simu, ujumbe wa chat na tiketi, anaweka kompyuta na akaunti, anatatua matatizo ya kawaida, na anajua lini kumpa fundi mkuu tatizo gumu. Majina ya kazi ni pamoja na help desk technician, IT support specialist, desktop support na field technician.",
            "CompTIA A+ ni cheti cha kuingia kinachojulikana sana kwa kazi hii. Kinatolewa na CompTIA, si na kozi hii. Lazima ufaulu mitihani miwili. Core 1 (220-1201) inahusu vifaa vya mkononi, mitandao, vifaa (hardware), virtualization na wingu (cloud), na kutatua matatizo ya vifaa na mtandao. Core 2 (220-1202) inahusu mifumo ya uendeshaji, usalama, kutatua matatizo ya programu na taratibu za kazi. Unaweza kuifanya kwa mpangilio wowote.",
            "Tulipoangalia Oktoba 2026, kila mtihani ulikuwa na hadi maswali 90 kwa dakika 90, yenye maswali ya kuchagua jibu, ya kuburuta na kuweka (drag-and-drop) na ya utendaji (performance-based: kazi ndogo za mikono). CompTIA inapendekeza kama miezi 12 ya uzoefu wa mikono, lakini hili ni pendekezo tu. Mitihani, bei na matoleo hubadilika, kwa hiyo angalia kila mara kurasa rasmi kabla ya kujisajili.",
            "Kila mtihani unaorodhesha maeneo (domains, yaani mada) pamoja na uzito, yaani sehemu ya mtihani ambayo mada hiyo inachukua. Muda wako wa kusoma ufuate uzito huo."
          ],
          steps: ["Fungua ukurasa rasmi wa CompTIA A+.", "Fungua kurasa za mitihani ya Core 1 na Core 2.", "Andika namba ya kila mtihani na maeneo yake pamoja na uzito wake.", "Tafuta bei ya sasa na njia za kufanya mtihani (kituo cha mitihani au mtandaoni) kwenye tovuti rasmi."],
          words: [["Help desk", "timu ambayo watu huwasiliana nayo teknolojia yao isipofanya kazi."], ["Cheti (certification)", "sifa unayopata kwa kufaulu mtihani, inayoonyesha una ujuzi fulani."], ["Eneo (domain)", "mada ya mtihani. Uzito wake ni sehemu ya maswali yanayoihusu."], ["Swali la utendaji (performance-based)", "kazi ya mtihani ambapo unafanya kitu, kama kulinganisha mipangilio au kurekebisha usanidi, badala ya kuchagua jibu moja."]],
          slides: [
            { title: "Fundi wa msaada anafanya nini", bullets: ["Anajibu simu, ujumbe wa chat na tiketi", "Anaweka kompyuta, printa na akaunti", "Anatatua matatizo ya kawaida; magumu anayapeleka mbele"] },
            { title: "CompTIA A+ = mitihani miwili", bullets: ["Core 1 (220-1201): vifaa, mtandao, vifaa vya mkononi, wingu, kutatua matatizo", "Core 2 (220-1202): mifumo ya uendeshaji, usalama, programu, taratibu", "Faulu yote miwili, kwa mpangilio wowote"] },
            { title: "Muundo wa mtihani (uliangaliwa Okt 2026)", bullets: ["Hadi maswali 90, dakika 90 kila mmoja", "Kuchagua jibu, kuburuta na kuweka, maswali ya utendaji", "Angalia comptia.org kwa maelezo ya sasa na bei"] },
            { title: "Kozi hii inakuandaa", bullets: ["Haitoi A+", "CompTIA inaitoa ukifaulu mitihani yote miwili"] }
          ],
          sources: [A_PLUS, CORE1, CORE2, BLS],
          tryIt: "Fungua kurasa rasmi za Core 1 na Core 2. Kwenye karatasi, chora safu mbili, moja kwa kila mtihani. Andika namba ya mtihani, kisha kila eneo na uzito wake. Zungushia duara eneo kubwa zaidi katika kila mtihani: hapo ndipo utatumia muda mwingi zaidi wa kusoma.",
          youCanNow: "kutaja mitihani miwili ya A+, namba zake na maeneo yake makuu, na kupata maelezo ya sasa kwenye ukurasa rasmi.",
          quickCheck: [
            { objective: "O6", q: "Lazima ufaulu mitihani mingapi ili kupata CompTIA A+?", options: ["Mmoja", "Miwili: Core 1 na Core 2", "Mitatu", "Hakuna; kozi hii inakupa cheti"], answer: 1, why: "A+ inahitaji Core 1 na Core 2; kozi inakuandaa tu." },
            { objective: "O6", q: "Uangalie wapi bei ya sasa ya A+ na toleo la mtihani?", options: ["Ujumbe kwenye jukwaa (forum) wa mwaka jana", "Rafiki aliyefaulu mwaka 2019", "Tovuti rasmi ya CompTIA", "Video yoyote kuhusu A+"], answer: 2, why: "Bei na matoleo ya mitihani hubadilika; ukurasa rasmi ndio chanzo pekee cha kuaminika." }
          ]
        },
        {
          title: "Ndani ya kompyuta: sehemu kuu za vifaa",
          objectives: ["O1"],
          minutes: 6,
          goal: "Tambua sehemu kuu za vifaa vya kompyuta na useme kila moja inafanya nini.",
          text: [
            "Vifaa (hardware) ni sehemu unazoweza kugusa. Motherboard ni bodi kuu ambayo kila kitu kinachomekwa ndani yake. CPU (processor) inafanya kazi ya kufikiri. RAM (kumbukumbu) inashika kile unachofanyia kazi sasa hivi na inafutika umeme ukikatika. Hifadhi (storage) inatunza mafaili yako umeme ukiwa umezimwa: SSD (solid-state drive, ya haraka, haina sehemu zinazosogea) au HDD (hard disk drive, ya polepole zaidi, ina diski zinazozunguka).",
            "Power supply (PSU) inageuza umeme wa ukutani kuwa umeme ambao sehemu zinatumia. Kadi ya picha (GPU) inachora picha kwenye skrini; kompyuta nyingi zina picha zilizojengwa ndani ya CPU. Milango (ports) ya nje ni pamoja na USB (USB-A na USB-C ndogo inayoweza kuchomekwa upande wowote), HDMI na DisplayPort kwa skrini, na Ethernet kwa mtandao wa waya.",
            "Dalili ya kawaida kwenye help desk: kompyuta ya polepole yenye programu nyingi zilizofunguliwa inaweza kuhitaji RAM zaidi; kompyuta inayochukua muda mrefu kuwaka inaweza kuwa na hard drive iliyokaribia kujaa au ya zamani.",
            "Usalama kwanza: huhitaji kufungua kompyuta katika kozi hii. Fundi huzima kompyuta na kuichomoa kila mara kabla ya kuifungua, huvaa mkanda wa mkono wa kuzuia umeme tuli (anti-static wrist strap), na kamwe hafungui power supply wala betri iliyovimba."
          ],
          words: [["Vifaa (hardware)", "sehemu za kompyuta unazoweza kugusa."], ["CPU", "processor; sehemu inayoendesha programu na kufanya hesabu."], ["RAM", "kumbukumbu ya muda mfupi inayoshika programu na mafaili yaliyofunguliwa; inafutika umeme ukizimwa."], ["SSD / HDD", "hifadhi zinazotunza mafaili umeme ukizimwa. SSD ni ya haraka zaidi na haina sehemu zinazosogea."], ["Motherboard", "bodi kuu ya saketi inayounganisha sehemu zote."], ["ESD", "electrostatic discharge: mshtuko mdogo wa umeme tuli unaoweza kuharibu sehemu za kompyuta."]],
          slides: [
            { title: "Sehemu za msingi", bullets: ["Motherboard: inaunganisha kila kitu", "CPU: inafanya kazi ya kufikiri", "RAM: kumbukumbu ya muda mfupi, inafutika umeme ukizimwa", "SSD au HDD: inatunza mafaili yako"] },
            { title: "Sehemu zaidi na milango", bullets: ["Power supply (PSU) na kadi ya picha (GPU)", "USB-A, USB-C, HDMI, DisplayPort, Ethernet"] },
            { title: "Dalili kazini", bullets: ["Polepole na programu nyingi zimefunguliwa: labda RAM ni ndogo", "Inawaka polepole: drive imejaa au ni ya zamani"] },
            { title: "Usalama", bullets: ["Zima na uchomoe kabla ya kufungua", "Mkanda wa mkono wa kuzuia umeme tuli", "Kamwe usifungue power supply wala betri iliyovimba"] }
          ],
          tryIt: "Angalia kompyuta yako kwa nje tu. Orodhesha kila mlango (port) unaouona na uutaje (USB-A, USB-C, HDMI, Ethernet, headphone). Kisha, kwenye Windows fungua Settings > System > About, au kwenye Mac fungua Apple menu > About This Mac, na uandike processor yako na kiasi cha RAM (kumbukumbu) ambacho kompyuta inacho.",
          youCanNow: "kutaja sehemu kuu za kompyuta, kusema kila moja inafanya nini, na kupata processor na kumbukumbu ya kompyuta yako mwenyewe.",
          quickCheck: [
            { objective: "O1", q: "Sehemu ipi inatunza mafaili yako kompyuta ikizimwa?", options: ["RAM", "CPU", "Power supply", "SSD au hard drive"], answer: 3, why: "Hifadhi (SSD au HDD) inatunza mafaili; RAM inafutika umeme ukikatika." },
            { objective: "O1", q: "Kabla ya kufungua kompyuta ya mezani, fundi anafanya nini kwanza?", options: ["Kuizima na kuichomoa", "Kufungua power supply", "Kutoa betri ikiwa inafanya kazi", "Kunyunyizia maji ili kuipoza"], answer: 0, why: "Zima na uchomoe kwanza; hii inakulinda wewe na sehemu za kompyuta." }
          ]
        },
        {
          title: "Misingi ya mtandao: anwani za IP, ipconfig na ping",
          objectives: ["O2"],
          minutes: 6,
          goal: "Kagua muunganisho wa mtandao wa kompyuta kwa ipconfig na ping na uandike matokeo.",
          text: [
            "Kila kifaa kwenye mtandao kinapata anwani ya IP, kama anwani ya mtaa kwa ajili ya data. Nyumbani mara nyingi inaonekana kama 192.168.x.x au 10.x.x.x. Router yako inatoa anwani hizi yenyewe kwa huduma inayoitwa DHCP. Default gateway ni anwani ya router: mlango kutoka mtandao wako wa nyumbani kwenda intaneti.",
            "Kompyuta ya Windows ikionyesha anwani inayoanza na 169.254, haikuweza kupata anwani kutoka DHCP. Hiyo ni dalili kubwa: kagua waya au Wi-Fi, kisha router.",
            "Zana mbili ambazo kila fundi anatumia: ipconfig inaonyesha anwani yako ya IP na default gateway (kwenye Windows, fungua Command Prompt na uandike ipconfig). ping inatuma ujumbe mdogo wa majaribio kwa kifaa kingine na kuonyesha kama kinajibu. Ping default gateway kwanza; ikifanya kazi, ping tovuti kama comptia.org.",
            "Fanya mazoezi haya kwenye kompyuta na mtandao wako mwenyewe tu. Baadhi ya kompyuta za maktaba au za kazini zinazuia command prompt; ikiwa hivyo, tumia mipangilio ya mtandao kupata anwani yako ya IP badala yake."
          ],
          steps: ["Windows: bonyeza kitufe cha Windows, andika cmd na ufungue Command Prompt. Mac: fungua Terminal.", "Windows: andika ipconfig na ubonyeze Enter. Andika anwani ya IPv4 na default gateway. Mac: tafuta anwani ya IP na router katika System Settings > Network.", "Andika ping ikifuatiwa na anwani ya gateway yako, kwa mfano ping 192.168.1.1, na ubonyeze Enter.", "Kwenye Mac, bonyeza Control na C ili kusimamisha ping.", "Soma matokeo: majibu (replies) yanamaanisha muunganisho unafanya kazi; \"timed out\" au \"unreachable\" inamaanisha haufanyi kazi."],
          words: [["Anwani ya IP", "namba inayotambulisha kifaa kwenye mtandao."], ["DHCP", "huduma, mara nyingi ndani ya router, inayovipa vifaa anwani zao za IP yenyewe."], ["Default gateway", "anwani ya router; njia ya kutoka mtandao wako kwenda intaneti."], ["ipconfig", "amri ya Windows inayoonyesha mipangilio yako ya mtandao."], ["ping", "amri inayojaribu kama kifaa kingine kinajibu kupitia mtandao."], ["Router", "kisanduku kinachounganisha mtandao wako wa nyumbani na intaneti."]],
          slides: [
            { title: "Anwani kwenye mtandao", bullets: ["Kila kifaa kinapata anwani ya IP", "Anwani za nyumbani: mara nyingi 192.168.x.x au 10.x.x.x", "DHCP inazitoa; router ndiyo gateway"] },
            { title: "Dalili ya 169.254", bullets: ["Windows inaonyesha 169.254.x.x", "Haikuweza kupata anwani kutoka DHCP", "Kagua waya au Wi-Fi, kisha router"] },
            { title: "Zana mbili", bullets: ["ipconfig: inaonyesha anwani yako na gateway", "ping: inajaribu kama kifaa kingine kinajibu", "Ping gateway kwanza, kisha tovuti"] },
            { title: "Fanya mazoezi kwa usalama", bullets: ["Kwenye kompyuta na mtandao wako mwenyewe tu", "Amri imezuiwa? Tumia mipangilio ya mtandao"] }
          ],
          sources: [CORE1],
          tryIt: "Kwenye kompyuta yako mwenyewe, fuata hatua. Andika anwani yako ya IP na default gateway, kisha ping gateway na ping comptia.org. Andika \"inafanya kazi\" au \"haifanyi kazi\" kwa kila moja. Tunza maelezo haya kwa kazi yako ya mwisho.",
          youCanNow: "kupata anwani yako ya IP na default gateway, kujaribu muunganisho kwa ping, na kusema anwani ya 169.254 inamaanisha nini.",
          quickCheck: [
            { objective: "O2", q: "Laptop ya Windows inaonyesha anwani ya IP 169.254.20.5. Hii inakuambia nini?", options: ["Intaneti ina kasi sana", "Haikupata anwani kutoka DHCP", "Laptop ina virusi", "Skrini inahitaji kubadilishwa"], answer: 1, why: "Anwani ya 169.254 inamaanisha kifaa hakikuweza kufikia DHCP, kwa hiyo kagua muunganisho na router." },
            { objective: "O2", q: "Amri ipi inaonyesha anwani ya IP na default gateway ya kompyuta ya Windows?", options: ["ping", "print", "ipconfig", "shutdown"], answer: 2, why: "ipconfig inaonyesha mipangilio yako ya mtandao; ping inajaribu muunganisho." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kazi, vifaa na mtandao",
        questions: [
          { objective: "O6", q: "Mtihani upi unahusu mifumo ya uendeshaji na usalama?", options: ["Core 1 (220-1201)", "Core 2 (220-1202)", "Yote miwili inahusu vifaa tu", "Hakuna"], answer: 1, why: "Core 2 inahusu mifumo ya uendeshaji, usalama, kutatua matatizo ya programu na taratibu za kazi." },
          { objective: "O1", q: "Mtumiaji anasema kompyuta inakuwa polepole programu nyingi zikiwa zimefunguliwa. Sehemu ipi huenda ndiyo chanzo?", options: ["RAM haitoshi", "Mlango wa HDMI", "Kibodi", "Waya wa skrini"], answer: 0, why: "RAM inashika programu zilizofunguliwa; ikiwa ndogo, kompyuta inakuwa polepole nyingi zikifunguliwa." },
          { objective: "O1", q: "Sehemu ipi inafanya kazi kuu ya kufikiri na kuendesha programu?", options: ["Power supply", "Mlango wa Ethernet", "Hard drive", "CPU"], answer: 3, why: "CPU (processor) inaendesha programu na kufanya hesabu." },
          { objective: "O2", q: "Default gateway ni nini?", options: ["Tovuti yenye kasi zaidi", "Aina ya waya", "Anwani ya router, njia ya kutoka kwenda intaneti", "Nywila ya kompyuta"], answer: 2, why: "Default gateway ni router inayounganisha mtandao wako na intaneti." },
          { objective: "O2", q: "Unapiga ping gateway yako na unapata majibu, lakini ping kwa tovuti inashindwa. Tatizo huenda liko wapi?", options: ["Kati ya router na intaneti", "Katika RAM ya kompyuta", "Katika kibodi", "Katika skrini"], answer: 0, why: "Kompyuta inafikia router, kwa hiyo tatizo liko baada ya router: muunganisho wa intaneti." }
        ]
      }
    },
    {
      name: "Sura 2: Mifumo, kutatua matatizo na mpango wako",
      lessons: [
        {
          title: "Zana za mfumo wa uendeshaji unazotumia kila siku",
          objectives: ["O3"],
          minutes: 5,
          goal: "Pata toleo la mfumo, nafasi iliyo wazi, programu zinazoendeshwa na hali ya masasisho kwenye kompyuta yako mwenyewe.",
          text: [
            "Mfumo wa uendeshaji (operating system, OS) ni programu kuu inayoendesha kompyuta: Windows, macOS, Linux, au kwenye simu Android na iOS. A+ Core 2 inatarajia uweze kutafuta njia yako ndani ya mifumo hii.",
            "Kwenye Windows: Settings > System > About inaonyesha toleo. Settings > System > Storage inaonyesha nafasi iliyo wazi. Task Manager (bonyeza Ctrl + Shift + Esc) inaonyesha programu zinazoendeshwa na jinsi CPU na kumbukumbu zinavyofanya kazi kwa nguvu; unaweza kufunga programu iliyokwama hapo. Settings > Windows Update inaonyesha kama kuna masasisho yanayosubiri.",
            "Kwenye Mac: Apple menu > About This Mac inaonyesha toleo. Activity Monitor (itafute kwa Spotlight) inaonyesha programu zinazoendeshwa. System Settings > General > Software Update inaonyesha masasisho. Hifadhi iko chini ya System Settings > General > Storage.",
            "Tabia nzuri za usalama ni sehemu ya kazi: sakinisha masasisho, acha antivirus iliyomo ndani ikiwa imewashwa (Microsoft Defender kwenye Windows), tumia akaunti ya kawaida (si ya admin) kwa kazi za kila siku, na funga skrini unapoondoka (kitufe cha Windows + L kwenye Windows)."
          ],
          steps: ["Pata jina na toleo la OS.", "Pata kiasi cha nafasi iliyo wazi ya kuhifadhi.", "Fungua Task Manager au Activity Monitor na upate programu inayotumia kumbukumbu nyingi zaidi.", "Angalia kama kuna masasisho.", "Funga skrini yako, kisha uifungue tena."],
          words: [["Mfumo wa uendeshaji (OS)", "programu kuu inayoendesha kompyuta au simu, kama Windows au macOS."], ["Task Manager", "zana ya Windows inayoonyesha programu zinazoendeshwa na kukuruhusu kufunga iliyokwama."], ["Activity Monitor", "zana ya Mac inayoonyesha programu zinazoendeshwa."], ["Akaunti ya admin", "akaunti inayoweza kusakinisha programu na kubadilisha mipangilio. Kazi za kila siku zitumie akaunti ya kawaida."]],
          slides: [
            { title: "Jua mfumo wa uendeshaji", bullets: ["Windows, macOS, Linux; Android na iOS kwenye simu", "Core 2 inapima yote haya"] },
            { title: "Zana za Windows", bullets: ["Settings > System > About: toleo", "Settings > System > Storage: nafasi iliyo wazi", "Ctrl + Shift + Esc: Task Manager", "Settings > Windows Update"] },
            { title: "Zana za Mac", bullets: ["Apple menu > About This Mac", "Activity Monitor", "System Settings > General > Software Update"] },
            { title: "Tabia za usalama", bullets: ["Sakinisha masasisho; acha antivirus ikiwa imewashwa", "Kazi za kila siku kwa akaunti ya kawaida", "Funga skrini unapoondoka"] }
          ],
          sources: [CORE2],
          tryIt: "Kwenye kompyuta yako mwenyewe, andika: jina na toleo la OS, nafasi iliyo wazi, programu inayotumia kumbukumbu nyingi zaidi sasa hivi, na kama kuna masasisho yanayosubiri. Ongeza haya kwenye maelezo yako ya mtandao kutoka Somo la 3. Sasa una sehemu kubwa ya sehemu ya 2 ya kazi yako ya mwisho.",
          youCanNow: "kutumia zana zilizomo ndani kukagua toleo la kompyuta, hifadhi, programu zinazoendeshwa na masasisho.",
          quickCheck: [
            { objective: "O3", q: "Programu imekwama kwenye Windows. Zana ipi inakuruhusu kuifunga?", options: ["Task Manager", "Paint", "Recycle Bin", "Kikokotoo (calculator)"], answer: 0, why: "Task Manager inaonyesha programu zinazoendeshwa na inaweza kufunga iliyokwama." },
            { objective: "O3", q: "Tabia ipi ni salama zaidi kwa kazi za kila siku?", options: ["Kutumia akaunti ya admin kila mara", "Kuzima masasisho", "Kutumia akaunti ya kawaida na kuacha masasisho yakiwa yamewashwa", "Kuzima antivirus ili kuongeza kasi"], answer: 2, why: "Akaunti ya kawaida na masasisho ya sasa yanapunguza madhara kitu kikienda vibaya." }
          ]
        },
        {
          title: "Njia ya hatua sita za kutatua matatizo",
          objectives: ["O4"],
          minutes: 6,
          goal: "Tumia hatua sita za CompTIA za kutatua matatizo kwa tatizo, kwa mpangilio.",
          text: [
            "Mafundi wazuri hawabahatishi. Wanafuata njia. Malengo ya A+ yanatumia hatua sita: 1. Tambua tatizo. 2. Weka nadharia ya chanzo kinachowezekana (shuku mambo yaliyo wazi). 3. Jaribu nadharia ili kupata chanzo. 4. Panga hatua na utekeleze marekebisho. 5. Hakikisha mfumo wote unafanya kazi na, ikisaidia, chukua hatua kuzuia lisitokee tena. 6. Andika ulichogundua, ulichofanya na matokeo.",
            "Hatua ya 1 inamaanisha kumuuliza mtumiaji maswali: Nini kilitokea? Lilianza lini? Kuna kitu kilichobadilika? Kuna ujumbe wa kosa (error)? Hifadhi nakala (back up) ya data muhimu kabla ya kubadilisha chochote.",
            "Hatua ya 2 inamaanisha kuanza na vyanzo rahisi: Imechomekwa? Wi-Fi imewashwa? Imewashwa upya (restart)? Nadharia yako ya kwanza ikiwa si sahihi, weka mpya na ujaribu tena, au peleka juu (escalate, yaani mpe fundi mkuu).",
            "Mfano: printa haichapishi. Nadharia: iko offline. Jaribio: skrini ya printa inaonyesha karatasi imekwama. Marekebisho: toa karatasi iliyokwama kwa usalama. Hakikisha: chapisha ukurasa wa majaribio. Andika: \"Karatasi ilikwama kwenye tray 2, imetolewa, ukurasa wa majaribio umechapishwa.\""
          ],
          steps: ["Tambua tatizo: uliza maswali, hifadhi nakala ya data.", "Weka nadharia ya chanzo kinachowezekana: anza na yaliyo wazi.", "Jaribu nadharia. Si sahihi? Weka nadharia mpya au peleka juu.", "Panga na utekeleze marekebisho.", "Hakikisha inafanya kazi na uzuie lisijirudie ukiweza.", "Andika ulichogundua, ulichofanya na matokeo."],
          words: [["Kutatua matatizo (troubleshooting)", "kutafuta na kurekebisha chanzo cha tatizo hatua kwa hatua."], ["Nadharia ya chanzo kinachowezekana", "kisio lako bora la kinachosababisha tatizo."], ["Kupeleka juu (escalate)", "kumpa tatizo mtu mwenye ujuzi au ruhusa zaidi."], ["Kuandika (document)", "kuandika ulichogundua na ulichofanya, mara nyingi ndani ya tiketi."]],
          slides: [
            { title: "Hatua sita", bullets: ["1 Tambua  2 Nadharia  3 Jaribu", "4 Panga na rekebisha  5 Hakikisha  6 Andika"] },
            { title: "Hatua ya 1: tambua", bullets: ["Nini kilitokea? Lini? Nini kilibadilika?", "Kuna ujumbe wa kosa?", "Hifadhi nakala ya data kabla ya mabadiliko"] },
            { title: "Hatua ya 2 na 3", bullets: ["Shuku yaliyo wazi: umeme, waya, kuwasha upya", "Nadharia si sahihi? Jaribu mpya au peleka juu"] },
            { title: "Hatua ya 4 hadi 6", bullets: ["Irekebishe, kisha kagua mfumo wote", "Zuia isijirudie ukiweza", "Andika kila kitu"] }
          ],
          sources: [CORE1],
          tryIt: "Chagua tatizo halisi uliloliwahi kupata (laptop ya polepole, hakuna Wi-Fi, simu isiyochaji) au tumia: \"Mtumiaji hawezi kuunganisha na Wi-Fi baada ya kuhamia meza nyingine.\" Andika hatua zote sita kwa tatizo hilo kwenye karatasi, pamoja na utakachouliza, kukagua na kuandika katika kila hatua.",
          youCanNow: "kushughulikia tatizo kwa hatua sita za kutatua matatizo na kuandika kila moja.",
          quickCheck: [
            { objective: "O4", q: "Hatua ya KWANZA ya kutatua matatizo ni ipi?", options: ["Kubadilisha hard drive", "Kuandika marekebisho", "Kutambua tatizo", "Kuhakikisha mfumo wote unafanya kazi"], answer: 2, why: "Lazima uelewe tatizo kabla ya kukisia chanzo." },
            { objective: "O4", q: "Umerekebisha tatizo. Nini kinakuja kabla ya kuliandika?", options: ["Kuhakikisha mfumo wote unafanya kazi", "Kufunga tiketi bila kumwambia mtumiaji", "Kuweka nadharia mpya", "Kuhifadhi nakala ya data kwa mara ya kwanza"], answer: 0, why: "Hatua ya 5 ni kuhakikisha kila kitu kinafanya kazi; hatua ya 6 ni kuandika." }
          ]
        },
        {
          title: "Tiketi, kuongea na watumiaji, na mpango wako wa kusoma A+",
          objectives: ["O5", "O6"],
          minutes: 6,
          goal: "Andika tiketi kamili ya help desk na mpango wa kusoma na mtihani wa A+ wenye tarehe.",
          text: [
            "Tiketi ni kumbukumbu ya tatizo moja. Tiketi nzuri ina: jina la mtumiaji na jinsi ya kumfikia (kazini halisi, kutoka mfumo wa kampuni), kifaa, muhtasari mfupi, maelezo na ujumbe wowote wa kosa, kipaumbele (uharaka wake), hatua zilizochukuliwa, na matokeo. Iandike ili fundi mwingine aweze kuichukua na kuielewa.",
            "Jinsi unavyoongea ni muhimu kama marekebisho yenyewe. Sikiliza bila kukatiza, rudia tatizo kwa maneno yako, tumia maneno rahisi, usimlaumu mtumiaji kamwe, mpe muda utakaompa habari mpya, na thibitisha naye kwamba limerekebishwa kabla ya kufunga tiketi. Weka taarifa zake kwa siri.",
            "Sasa panga mitihani yako. Tumia uzito wa maeneo ulioandika katika Somo la 1. Chagua tarehe lengwa kwa kila mtihani. Tumia wiki nyingi zaidi kwa maeneo makubwa. Tumia mazoezi ya bure: hati ya bure ya malengo ya mtihani ya CompTIA, kompyuta yako mwenyewe, na majaribio ya maarifa hapa. Watu wengi husoma saa 5 hadi 10 kwa wiki; chagua kinachofaa maisha yako na ukiandike.",
            "Kabla ya kujisajili, angalia ukurasa rasmi kwa bei ya sasa, programu zozote za punguzo na njia za kufanya mtihani. Vituo vya ajira (workforce centers), programu za maveterani na programu za kurudi katika jamii wakati mwingine husaidia gharama za mitihani, kwa hiyo uliza kituo chako."
          ],
          steps: ["Tiketi: jaza mtumiaji, kifaa, muhtasari, maelezo, kipaumbele, hatua zilizochukuliwa na matokeo.", "Jibu: mshukuru, sema ulichogundua kwa maneno rahisi, sema nini kitafuata na lini.", "Mpango: andika tarehe lengwa ya Core 1 na Core 2.", "Orodhesha kila eneo na uzito wake na wiki utakazolipa.", "Andika saa zako za kusoma kila wiki na mahali utakaposomea.", "Angalia ukurasa rasmi kwa bei na njia za kufanya mtihani; uliza programu ya karibu kuhusu msaada wa gharama."],
          words: [["Tiketi", "kumbukumbu iliyoandikwa ya ombi moja la msaada, tangu mwanzo hadi mwisho."], ["Kipaumbele (priority)", "uharaka wa tiketi, mara nyingi chini, wastani, juu au muhimu sana (critical)."], ["Mpango wa kusoma", "ratiba iliyoandikwa ya utakachosoma, lini, na tarehe ya mtihani wako."]],
          slides: [
            { title: "Tiketi kamili", bullets: ["Mtumiaji, kifaa, muhtasari, maelezo, ujumbe wa kosa", "Kipaumbele, hatua zilizochukuliwa, matokeo", "Fundi mwingine anaweza kuiendeleza"] },
            { title: "Kuongea na watumiaji", bullets: ["Sikiliza na urudie tatizo kwa maneno yako", "Maneno rahisi, bila lawama", "Sema lini utampa habari; thibitisha marekebisho"] },
            { title: "Mpango wako wa A+", bullets: ["Tarehe lengwa ya Core 1 na ya Core 2", "Wiki zaidi kwa maeneo makubwa", "Saa za kila wiki zimeandikwa"] },
            { title: "Kabla ya kujisajili", bullets: ["Angalia comptia.org kwa bei na njia za mtihani", "Uliza programu za ajira, maveterani au kurudi katika jamii kuhusu msaada"] }
          ],
          sources: [A_PLUS, CORE1, CORE2],
          tryIt: "Kazi ya mwisho: andika tiketi ya tatizo lako la Somo la 5 ikiwa na kila sehemu na hatua sita, pamoja na jibu la sentensi mbili kwa mtumiaji. Weka maelezo ya kompyuta yako kutoka Somo la 3 na 4 kwenye ukurasa mmoja. Kisha andika mpango wako wa kusoma na mtihani wa A+: tarehe lengwa za Core 1 na Core 2, kila eneo na uzito wake, na saa zako za kila wiki.",
          youCanNow: "kuandika tiketi ya msaada iliyo wazi, kumjibu mtumiaji kwa adabu, na kufuata mpango wako wenye tarehe kuelekea mitihani yote miwili ya A+.",
          quickCheck: [
            { objective: "O5", q: "Muhtasari upi wa tiketi una manufaa zaidi?", options: ["\"Imeharibika.\"", "\"Mtumiaji hajui kompyuta.\"", "\"Msaada!!\"", "\"Laptop haiwezi kuunganisha na Wi-Fi ya ofisi tangu kuhamia meza 14; kosa: no internet.\""], answer: 3, why: "Unataja kifaa, tatizo, lilipoanza na kosa, bila lawama." },
            { objective: "O6", q: "Core 1 ina eneo lenye uzito wa 28% na jingine la 11%. Upange vipi?", options: ["Yape yote muda sawa", "Lipe eneo la 28% muda zaidi wa kusoma", "Ruka eneo la 28%", "Soma eneo la 11% tu"], answer: 1, why: "Uzito mkubwa unamaanisha maswali zaidi, kwa hiyo unastahili muda zaidi wa kusoma." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Mifumo, kutatua matatizo na mpango wako",
        questions: [
          { objective: "O3", q: "Unapata wapi toleo la Windows?", options: ["Task Manager > Startup", "Recycle Bin", "Settings > System > About", "Menyu ya printa"], answer: 2, why: "Settings > System > About inaonyesha aina na toleo la Windows." },
          { objective: "O4", q: "Skrini (monitor) ni nyeusi. Nadharia ipi uijaribu kwanza?", options: ["Motherboard imeharibika", "Waya wa umeme au wa video umelegea", "Mfumo wa uendeshaji unahitaji kusakinishwa upya", "CPU ni ya polepole sana"], answer: 1, why: "Shuku yaliyo wazi: waya na umeme ndivyo vyanzo vya kawaida zaidi na rahisi zaidi kukagua." },
          { objective: "O4", q: "Nadharia yako ya kwanza inageuka kuwa si sahihi. Unafanya nini?", options: ["Weka nadharia mpya na uijaribu, au peleka juu", "Funga tiketi", "Mwambie mtumiaji haiwezi kurekebishwa", "Badilisha kompyuta"], answer: 0, why: "Njia inarudi nyuma: nadharia mpya, au kupeleka juu ukikwama." },
          { objective: "O5", q: "Mtumiaji amekasirika kwamba laptop yake iliharibika kabla ya tarehe ya mwisho ya kazi. Jibu la kwanza bora ni lipi?", options: ["\"Lazima wewe ndiye uliyeiharibu.\"", "\"Hilo si tatizo langu.\"", "Tumia maneno ya kiufundi ili akuamini", "Sikiliza, rudia tatizo kwa maneno yako, na sema utakachofanya baadaye"], answer: 3, why: "Kusikiliza, kuthibitisha na kuweka hatua inayofuata iliyo wazi kunamtuliza mtumiaji na kukupa ukweli." },
          { objective: "O6", q: "Kipi ni sehemu ya mpango kamili wa kusoma A+?", options: ["Tarehe lengwa za mitihani yote miwili na saa za kusoma kila wiki", "Jina la cheti tu", "Orodha ya kompyuta unazozipenda", "Namba yako ya Social Security"], answer: 0, why: "Tarehe, maeneo na saa za kila wiki zinageuza lengo kuwa mpango unaoweza kuufuata." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Misingi ya Msaada wa TEHAMA (Maandalizi ya CompTIA A+)",
    questions: [
      { objective: "O6", q: "Nani anatoa cheti cha A+?", options: ["Kozi hii", "CompTIA, ukifaulu mitihani yote miwili", "Kampuni yako ya intaneti", "Mwajiri yeyote"], answer: 1, why: "CompTIA inatoa A+; kozi inakuandaa." },
      { objective: "O6", q: "Namba ya mtihani 220-1201 ni ya:", options: ["Security+", "A+ Core 2", "A+ Core 1", "Network+"], answer: 2, why: "220-1201 ni Core 1; 220-1202 ni Core 2." },
      { objective: "O6", q: "Swali la utendaji (performance-based) linakuomba:", options: ["Ufanye kazi ndogo ya mikono", "Uandike insha", "Uongee na mtu", "Ulete kompyuta yako mwenyewe"], answer: 0, why: "Maswali ya utendaji yanakufanya ufanye kitu, kama kuweka au kurekebisha mipangilio." },
      { objective: "O1", q: "Sehemu ipi ni kumbukumbu ya muda mfupi inayofutika umeme ukizimwa?", options: ["SSD", "HDD", "Power supply", "RAM"], answer: 3, why: "RAM inashika kazi iliyofunguliwa tu wakati kompyuta imewashwa." },
      { objective: "O1", q: "Kipi ni kweli kuhusu SSD ukilinganisha na HDD?", options: ["Ina diski zinazozunguka", "Kwa kawaida ni ya haraka zaidi na haina sehemu zinazosogea", "Inahifadhi muziki tu", "Ni aina ya skrini"], answer: 1, why: "SSD zinatumia chipu zisizo na sehemu zinazosogea, kwa hiyo ni za haraka zaidi." },
      { objective: "O1", q: "Mlango upi unaunganisha kompyuta na mtandao wa waya?", options: ["Ethernet", "HDMI", "Tundu la headphone", "USB-C kwa kuchaji tu"], answer: 0, why: "Ethernet ni mlango wa mtandao wa waya; HDMI ni kwa skrini." },
      { objective: "O1", q: "Fundi HATAKIWI KAMWE kufungua kipi?", options: ["Kasha la kompyuta ya mezani, baada ya kuichomoa", "Menyu ya mipangilio ya laptop", "Power supply", "Tiketi"], answer: 2, why: "Power supply zinashika umeme hatari uliohifadhiwa na hubadilishwa, hazifunguliwi." },
      { objective: "O2", q: "DHCP inafanya nini?", options: ["Inachapisha hati", "Inatoa anwani za IP yenyewe", "Inazuia virusi", "Inachaji betri"], answer: 1, why: "DHCP, mara nyingi ndani ya router, inavipa vifaa anwani zao za IP." },
      { objective: "O2", q: "Amri ipi inajaribu kama kifaa kingine kinajibu kupitia mtandao?", options: ["ipconfig", "dir", "cls", "ping"], answer: 3, why: "ping inatuma ujumbe wa majaribio na kuonyesha kama majibu yanarudi." },
      { objective: "O2", q: "Anwani ipi ina uwezekano mkubwa wa kuwa anwani ya kawaida ya mtandao wa nyumbani?", options: ["192.168.1.25", "169.254.10.3", "999.1.1.1", "www.home"], answer: 0, why: "192.168.x.x ni kundi la kawaida la nyumbani; 169.254 inamaanisha DHCP ilishindwa, na 999 si halali." },
      { objective: "O3", q: "Vitufe vipi vinafungua Task Manager kwenye Windows?", options: ["Ctrl + P", "Ctrl + Shift + Esc", "Alt + Tab", "Windows + L"], answer: 1, why: "Ctrl + Shift + Esc inafungua Task Manager; Windows + L inafunga skrini." },
      { objective: "O3", q: "Kwenye Mac, zana ipi inaonyesha programu zinazoendeshwa?", options: ["Activity Monitor", "Notes", "Photos", "Calendar"], answer: 0, why: "Activity Monitor ni toleo la Mac la Task Manager." },
      { objective: "O3", q: "Unaondoka mezani kwako kazini. Unafanya nini?", options: ["Kuacha skrini wazi", "Kuzima antivirus", "Kufunga skrini", "Kuingia kama admin"], answer: 2, why: "Kufunga skrini kunazuia wengine kutumia akaunti yako." },
      { objective: "O4", q: "Panga hizi kwa mpangilio: Jaribu nadharia, Tambua tatizo, Weka nadharia.", options: ["Nadharia, Tambua, Jaribu", "Jaribu, Nadharia, Tambua", "Tambua, Jaribu, Nadharia", "Tambua, Nadharia, Jaribu"], answer: 3, why: "Tambua tatizo, weka nadharia, kisha uijaribu." },
      { objective: "O4", q: "Ufanye nini kabla ya kufanya mabadiliko kwenye kompyuta ya mtumiaji?", options: ["Hifadhi nakala ya data muhimu", "Futa mafaili ya zamani", "Badilisha nywila yake", "Sakinisha mfumo upya"], answer: 0, why: "Kuhifadhi nakala kwanza kunalinda data ya mtumiaji marekebisho yakienda vibaya." },
      { objective: "O4", q: "Hatua ya MWISHO ya njia ya kutatua matatizo ni ipi?", options: ["Kujaribu nadharia", "Kuandika ulichogundua, ulichofanya na matokeo", "Kutambua tatizo", "Kuwasha kompyuta upya"], answer: 1, why: "Hatua ya 6 ni kuandika, ili wengine wajifunze na kumbukumbu iwe kamili." },
      { objective: "O5", q: "Kipi kinafaa kuwa ndani ya tiketi ya help desk?", options: ["Maoni yako kuhusu mtumiaji", "Utani kuhusu tatizo", "Hatua zilizochukuliwa na matokeo", "Taarifa za benki za mtumiaji"], answer: 2, why: "Hatua na matokeo yanamwezesha fundi yeyote kufuatilia kilichotokea." },
      { objective: "O5", q: "Ufunge tiketi lini?", options: ["Mara tu unapoanza kazi", "Baada ya mtumiaji kuthibitisha kwamba limerekebishwa", "Mtumiaji akiacha kujibu kwa saa moja", "Kabla ya kujaribu marekebisho"], answer: 1, why: "Kuthibitisha na mtumiaji kunahakikisha tatizo limetatuliwa kweli." },
      { objective: "O5", q: "Jibu lipi ni bora kwa mtumiaji?", options: ["\"DHCP lease yako ilishindwa, ni wazi.\"", "\"Umekosea tena.\"", "\"Muulize mtu mwingine.\"", "\"Laptop yako haikuweza kupata anwani ya mtandao. Nimeiweka upya na sasa inafanya kazi. Tafadhali piga simu likitokea tena.\""], answer: 3, why: "Linatumia maneno rahisi, halina lawama, na linamwambia mtumiaji afanye nini baadaye." },
      { objective: "O6", q: "Uangalie wapi bei za sasa za A+ na njia za kufanya mtihani kabla ya kujisajili?", options: ["Tovuti rasmi ya CompTIA", "Maoni kwenye mitandao ya kijamii", "Kitabu cha zamani", "Tangazo linalojitokeza (pop-up)"], answer: 0, why: "Tovuti rasmi pekee ndiyo yenye bei, matoleo na njia za sasa." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [1, 3, 5, 8, 9, 10, 13, 16, 18] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Maelezo ya kompyuta", objective: "O3", notYet: "Toleo la OS, nafasi iliyo wazi au masasisho havipo.", meets: "Inaorodhesha OS na toleo, nafasi iliyo wazi, programu inayotumia kumbukumbu nyingi zaidi na hali ya masasisho.", exceeds: "Pia inaorodhesha processor na RAM na inasema zinamaanisha nini kwa kasi." },
      { name: "Ukaguzi wa mtandao", objective: "O2", notYet: "Hakuna anwani ya IP wala gateway, au ping haikujaribiwa.", meets: "Inaandika anwani ya IP na gateway na matokeo ya ping kwa gateway na kwa tovuti.", exceeds: "Inaeleza matokeo yangemaanisha nini kama ping moja ingeshindwa, pamoja na anwani ya 169.254." },
      { name: "Hatua za kutatua matatizo", objective: "O4", notYet: "Hatua hazipo au haziko kwa mpangilio, au marekebisho ni kubahatisha.", meets: "Hatua zote sita kwa mpangilio, pamoja na kilichoulizwa, kilichojaribiwa na kilichofanywa.", exceeds: "Inajumuisha nadharia ya pili au mahali pa kupeleka juu na njia ya kuzuia lisijirudie." },
      { name: "Tiketi na jibu", objective: "O5", notYet: "Tiketi haiko wazi au jibu linamlaumu mtumiaji au linatumia maneno magumu ya kiufundi.", meets: "Kila sehemu ya tiketi imejazwa; jibu ni la adabu, rahisi na linasema nini kitafuata.", exceeds: "Mtu mwingine anaweza kufuata tiketi bila kuuliza swali lolote." },
      { name: "Mpango wa kusoma na mtihani", objective: "O6", notYet: "Hakuna tarehe, au maeneo hayapo.", meets: "Tarehe lengwa za Core 1 na Core 2, kila eneo na uzito wake, saa za kila wiki.", exceeds: "Mpango unatoa wiki zaidi kwa maeneo yenye uzito mkubwa na unataja mahali pa kuangalia bei na kupata msaada wa gharama." },
      { name: "Maneno ya vifaa", objective: "O1", notYet: "Sehemu za vifaa zimetajwa vibaya katika maelezo au tiketi.", meets: "Sehemu na milango imetajwa kwa usahihi.", exceeds: "Inaunganisha dalili na sehemu inayowezekana, kwa mfano polepole programu nyingi zikiwa zimefunguliwa na RAM ndogo." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaojisajili au kufaulu A+ Core 1 au Core 2 ndani ya miezi 6 (utafiti wa kufuatilia)",
      "Wanafunzi wanaoomba au kuanza kazi ya msaada wa TEHAMA, help desk au fundi ndani ya miezi 6",
      "Programu washirika (vituo vya ajira, huduma za maveterani na za kurudi katika jamii) zinaripoti wanafunzi wanaoingia katika mafunzo au kazi za TEHAMA"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta moja ya Windows au Mac yenye intaneti (yako au ya maktaba; command prompt inaweza kuzuiwa kwenye baadhi ya kompyuta za pamoja)",
      "Karatasi na kalamu, au hati, kwa maelezo, tiketi na mpango",
      "Kurasa rasmi za CompTIA A+ Core 1 na Core 2",
      "Kama dakika 90 kwa jumla, katika vipindi vifupi, pamoja na muda wa kuendelea kusoma kwa ajili ya mitihani"
    ],
    facilitatorNotes: [
      "Fanyeni jaribio la awali pamoja; tumia matokeo kuamua masomo yapi yanahitaji muda zaidi.",
      "Kama una kompyuta ya zamani iliyochomolewa, onyesha sehemu kasha likiwa wazi; wanafunzi wasifungue vifaa wenyewe isipokuwa wamefunzwa na wanasimamiwa.",
      "Katika maabara, hakikisha command prompt inafanya kazi kabla ya Somo la 3, au onyesha ukurasa wa mipangilio ya mtandao badala yake.",
      "Waweke wanafunzi wawili wawili waigize mtumiaji na fundi kwa Somo la 6, kisha wabadilishane.",
      "Wakumbushe wanafunzi kwamba kozi hii inawaandaa na haitoi A+; wasaidie kupata programu za karibu zinazosaidia gharama za mitihani.",
      "Pima kazi ya mwisho kwa rubriki na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
