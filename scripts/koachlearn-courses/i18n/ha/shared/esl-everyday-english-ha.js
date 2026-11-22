"use strict";

// Koach Learn course, Hausa (ha) translation of shared/esl-everyday-english.js. Translated from the English file.
// ESL course: every English phrase being taught stays in English inside double quotes; only the explanations are in Hausa.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "esl-everyday-english-ha",
  lang: "ha",
  translationOf: "esl-everyday-english",
  category: "Workforce Development",
  name: "Turanci don Rayuwar Yau da Kullum (ESL)",
  skills: "Gabatar da kanku, Neman mutum ya maimaita ko ya yi magana a hankali, Sayayya da biyan kuɗi, Magana da likita da tsara ganawa, Tambayar hanya",
  outcome: "amfani da gajerun jimlolin Turanci masu ladabi don gabatar da kanku, neman mutane su maimaita ko su yi magana a hankali, yin sayayya da biyan kuɗi, faɗa wa likita abin da ke damunku, tsara ganawa ta waya da tambayar hanya.",
  about: [
    "Wannan kwas ɗin na manya ne da ke koyon Turanci kuma suke son amfani da shi a rayuwar yau da kullum a Amurka: a shago, wajen likita, a waya, a makarantar ɗanku da kuma a kan titi.",
    "Kowane darasi yana ba ku gajerun jimloli da za ku faɗa, ɗan gajeren misalin hira, da atisaye da za ku iya yi da babbar murya a gida, ku kaɗai ko tare da abokin atisaye. Ba sai nahawunku ya cika ba. Kuna buƙatar jimlolin da ke aiki, da ƙarfin gwiwar amfani da su.",
    "Kowane darasi yana ɗaukar kusan minti biyar. Ku karanta darasin, ku karanta misalin hirar da babbar murya, sannan ku yi aikin \"Gwada yanzu\". Akwai gajerun tambayoyi biyu bayan kowane darasi, gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe.",
    "A ƙarshe za ku yi katin jimlolin Turancin Yau da Kullum naku, mai jimlolin da kuka fi buƙata, kuma za ku yi atisayensa da babbar murya."
  ],
  finalTask: "Ku yi katin jimlolin Turancin Yau da Kullum naku, ku yi atisayensa da babbar murya. A shafi ɗaya ku rubuta: (1) gabatarwa game da kanku mai jimloli 3 zuwa 4, (2) jimloli uku don neman mutum ya maimaita, ya yi a hankali ko ya faɗi haruffan kalma, (3) tambayoyi biyu don shagon da kuke zuwa, (4) gajeren rubutun abin da za ku faɗa a waya don tsara ganawa da likita, da (5) tambaya ɗaya don neman hanyar zuwa wurin da kuke yawan zuwa. Ku karanta dukan katin da babbar murya, ko ku yi wasan kwaikwayo da abokin atisaye, kuma ku naɗi muryarku idan za ku iya.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya da ke koyon Turanci a matsayin harshe na biyu a Amurka: baƙi da 'yan gudun hijira, masu neman aiki, iyaye, tsofaffi, da mutanen da ke dawowa gida daga gidan yari waɗanda Turanci ba harshensu na farko ba ne.",
    startingPoint: "Sun san wasu kalmomin Turanci kuma suna iya yin 'yan gaisuwa. Suna iya karanta gajerun jimloli masu sauƙi. Sau da yawa sun fi fahimtar abin da ake faɗa fiye da abin da za su iya faɗa, kuma suna jin tsoron magana da baƙi ko a waya.",
    gap: "Rayuwar yau da kullum tana buƙatar gajeren Turancin magana: haɗuwa da mutane, sayayya, likita, kiran waya da tambayar hanya. Idan ba su da 'yan jimloli a shirye da hanyar neman mutane su maimaita ko su yi a hankali, masu koyo suna guje wa irin waɗannan hirarraki, suna dogara ga wasu, ko su yi kuskuren fahimtar muhimman abubuwa kamar lokacin ganawa.",
    constraints: [
      "Matakin harshe: Turanci na farko zuwa ɗan sama da farko; kalmomin da aka fi amfani da su da gajerun jimloli",
      "Za a fassara kwas ɗin: jimlolin Turanci da ake koyarwa suna zama a Turanci, a cikin alamun ambato",
      "Na'urori: waya ko kwamfutar ɗakin karatu; ana iya yin atisaye da takarda da murya",
      "Lokaci: darussa na minti 4 zuwa 6 da suka dace da aiki da iyali",
      "Sirri: atisaye yana amfani da sunaye, lambobi da ranakun haihuwa na ƙage, ba lambobin sirri na gaske ba"
    ],
    prerequisites: "Suna iya karanta haruffa da kalmomi masu sauƙi a Turanci. Masu koyo da ba su iya karanta Turanci ba tukuna za su iya yin kwas ɗin tare da malami ko mai taimako da ke karanta musu da babbar murya."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan kun haɗu da sabon mutum", action: "gabatar da kanku a Turanci da sunanku, inda kuka fito da abin da kuke yi, sannan ku yi tambaya ɗaya", standard: "a cikin aƙalla gajerun jimloli uku" },
    { id: "O2", condition: "Idan ba ku fahimci abin da wani ya faɗa ba", action: "neman mutumin ya maimaita, ya yi magana a hankali ko ya faɗi haruffan kalma da jimlar Turanci mai ladabi", standard: "maimakon yin kamar kun fahimta" },
    { id: "O3", condition: "A cikin shago", action: "tambayar inda wani abu yake, tambayar farashi da faɗin yadda za ku biya", standard: "ta amfani da jimloli daga darasin" },
    { id: "O4", condition: "A ofishin likita ko a waya", action: "faɗin abin da ke damunku da tsara ganawa a rana da lokacin da suka dace da ku", standard: "kuna ba da sunanku, matsalar da lokacin, kuma kuna maimaita lokacin" },
    { id: "O5", condition: "Idan akwai wurin da kuke buƙatar zuwa", action: "tambayar hanya da maimaita bayanin hanyar don tabbatarwa", standard: "ta amfani da kalmomin hanya kamar left, right, straight da next to" }
  ],
  chapters: [
    {
      name: "Babi na 1: Haɗuwa da mutane da sayayya",
      lessons: [
        {
          title: "Gaisuwa da gabatar da kanku",
          objectives: ["O1"],
          minutes: 5,
          goal: "Gabatar da kanku a gajerun jimloli uku, sannan ku yi tambaya ɗaya.",
          text: [
            "Idan kun haɗu da sabon mutum, ku fara da gaisuwa: \"Hello.\" ko \"Hi.\" Da safe kuna iya cewa \"Good morning.\" Sannan ku faɗi sunanku: \"My name is Ana.\" ko \"I'm Ana.\"",
            "Ku ƙara inda kuka fito da abin da kuke yi: \"I'm from Guatemala.\" \"I work at a restaurant.\" \"I'm looking for a job.\" Sannan ku yi tambaya: \"What's your name?\" \"Where are you from?\" Idan sun amsa, ku ce \"Nice to meet you.\"",
            "Misalin hira. A: \"Hi, I'm Ana. What's your name?\" B: \"I'm Sam. Nice to meet you.\" A: \"Nice to meet you too. I'm from Guatemala. I work at a restaurant.\" B: \"Oh, which one?\"",
            "Ba ku buƙatar dogayen jimloli. Gajerun jimloli uku masu sarari gabatarwa ce mai ƙarfi. Ku yi murmushi, ku kalli mutumin, kuma ku yi magana kaɗan a hankali."
          ],
          steps: ["Ku gaishe: \"Hello.\" ko \"Good morning.\"", "Ku faɗi sunanku: \"My name is ...\" ko \"I'm ...\"", "Ku faɗi inda kuka fito: \"I'm from ...\"", "Ku faɗi abin da kuke yi: \"I work at ...\" ko \"I'm looking for a job.\"", "Ku yi tambaya ɗaya: \"What's your name?\" Sannan ku ce \"Nice to meet you.\""],
          words: [["\"I'm\"", "gajeriyar hanyar cewa \"I am\" (ni ne / ina)."], ["\"Nice to meet you\"", "jimla mai ladabi da kuke faɗa idan kun haɗu da wani a karon farko (na yi farin cikin haɗuwa da ku)."], ["Gabatar da kanku", "faɗa wa sabon mutum ko ku wane ne."]],
          slides: [
            { title: "Ku gaishe da mutumin", bullets: ["\"Hello.\" \"Hi.\"", "\"Good morning.\" \"Good afternoon.\""] },
            { title: "Gajerun jimloli uku", bullets: ["\"My name is Ana.\"", "\"I'm from Guatemala.\"", "\"I work at a restaurant.\""] },
            { title: "Ku yi tambaya", bullets: ["\"What's your name?\"", "\"Where are you from?\"", "Sannan: \"Nice to meet you.\""] },
            { title: "Shawarwari", bullets: ["Gajere kuma mai sarari yana da ƙarfi", "Ku yi murmushi ku kalli mutumin", "Ku yi magana kaɗan a hankali"] }
          ],
          sources: [{ name: "USA Learns: kwasa-kwasan Turanci kyauta ga manya (Sacramento County Office of Education)", url: "https://www.usalearns.org/" }],
          tryIt: "Ku rubuta gabatarwarku: sunanku, inda kuka fito da abin da kuke yi, a gajerun jimloli uku. Ku ƙara tambaya ɗaya da za ku yi. Ku karanta ta da babbar murya sau uku. Sannan ku faɗe ta ba tare da kallon takardar ba.",
          youCanNow: "gabatar da kanku a gajerun jimlolin Turanci uku, da yi wa sabon mutum tambaya.",
          quickCheck: [
            { objective: "O1", q: "Wani ya ce \"Nice to meet you.\" Mene ne amsa mai kyau?", options: ["\"Goodbye.\"", "\"Nice to meet you too.\"", "\"I don't know.\"", "\"How much is it?\""], answer: 1, why: "\"Nice to meet you too\" ita ce amsa mai ladabi idan kun haɗu da wani." },
            { objective: "O1", q: "Wace gabatarwa ce ke da suna, inda aka fito da abin da ake yi?", options: ["\"Hello. Hello. Hello.\"", "\"Where is the bus?\"", "\"I like pizza.\"", "\"I'm Ali. I'm from Somalia. I drive a truck.\""], answer: 3, why: "Tana ba da suna, ƙasa da aiki a gajerun jimloli uku." }
          ]
        },
        {
          title: "Neman mutum ya maimaita, ya yi a hankali ko ya faɗi haruffa",
          objectives: ["O2"],
          minutes: 5,
          goal: "Neman mutum ya maimaita, ya yi magana a hankali ko ya faɗi haruffan kalma da jimla mai ladabi.",
          text: [
            "Kowa yakan kasa jin wasu kalmomi wani lokaci, har ma waɗanda Turanci harshensu na asali ne. Abu ne na yau da kullum kuma mai ladabi a tambaya. Ya fi kyau sosai da cewa \"yes\" alhali ba ku fahimta ba.",
            "Jimloli masu amfani: \"Sorry, can you repeat that, please?\" \"Can you speak more slowly, please?\" \"How do you spell that?\" \"What does that word mean?\" \"Can you write it down, please?\"",
            "Don tabbatar da cewa kun fahimta, ku maimaita abin da aka faɗa: \"So, Tuesday at 3 o'clock?\" Idan sashe ɗaya kawai kuka rasa, ku tambayi game da wannan sashen: \"Sorry, what time?\"",
            "Misalin hira. A: \"Your pickup is at the side entrance at four fifteen.\" B: \"Sorry, can you speak more slowly, please?\" A: \"Side entrance. Four fifteen.\" B: \"So, the side door at 4:15?\" A: \"Yes, that's right.\""
          ],
          steps: ["Kada ku yi kamar kun fahimta.", "Ku ce \"Sorry,\" sannan ku nemi a maimaita, a yi a hankali, a faɗi haruffa ko a rubuta.", "Ku maimaita muhimmin sashen don tabbatarwa.", "Ku jira \"Yes, that's right.\""],
          words: [["\"Repeat\"", "sake faɗa."], ["\"Slowly\"", "a hankali, ba da sauri ba."], ["\"Spell\"", "faɗin haruffan kalma ɗaya bayan ɗaya."]],
          slides: [
            { title: "Tambaya abu ne na yau da kullum kuma mai ladabi", bullets: ["Kowa yakan kasa jin kalmomi wani lokaci", "Tambaya ta fi \"yes\" na kuskure"] },
            { title: "Jimlolin tambaya", bullets: ["\"Sorry, can you repeat that, please?\"", "\"Can you speak more slowly, please?\"", "\"How do you spell that?\"", "\"Can you write it down, please?\""] },
            { title: "Ku tabbatar da abin da kuka ji", bullets: ["Ku maimaita: \"So, Tuesday at 3 o'clock?\"", "Ku tambayi sashe ɗaya: \"Sorry, what time?\""] }
          ],
          tryIt: "Ku rubuta jimloli huɗu na neman taimako a ƙaramin kati, ku ajiye shi a aljihunku ko a wayarku. Ku karanta kowanne da babbar murya sau biyar. Sannan ku kunna tashar rediyo ta hira ko bidiyo, kuma duk lokacin da kuka kasa jin wani abu, ku faɗi ɗaya daga cikin jimlolin da babbar murya.",
          youCanNow: "neman mutum ya maimaita, ya yi a hankali, ya faɗi haruffa ko ya rubuta kalma, da maimaita abin da kuka ji don tabbatarwa.",
          quickCheck: [
            { objective: "O2", q: "Wani ma'aikaci yana magana da sauri sosai kuma ba ku ji ba. Me za ku ce?", options: ["\"Can you speak more slowly, please?\"", "\"Yes, yes.\"", "Babu komai; ku tafi kawai", "\"Goodbye.\""], answer: 0, why: "Neman mutumin ya yi magana a hankali yana da ladabi kuma yana ba ku bayanin." },
            { objective: "O2", q: "Nas ta faɗi sunan likitanku kuma ba za ku iya rubuta shi ba. Me za ku tambaya?", options: ["\"How much is it?\"", "\"Where are you from?\"", "\"How do you spell that?\"", "\"What time is it?\""], answer: 2, why: "\"How do you spell that?\" yana neman haruffan don ku iya rubuta sunan." }
          ]
        },
        {
          title: "Sayayya: neman kaya, farashi da biyan kuɗi",
          objectives: ["O3"],
          minutes: 5,
          goal: "Tambayar inda wani abu yake, tambayar farashi da faɗin yadda za ku biya.",
          text: [
            "Don neman wani abu, ku ce \"Excuse me\" sannan ku tambaya: \"Where can I find the rice?\" ko \"Do you have diapers?\" Ma'aikacin yana iya cewa \"Aisle 5\" (layin shago mai lamba) ko \"Sorry, we're out of it.\" (ya ƙare).",
            "Don tambayar farashi: \"How much is this?\" ko \"How much are these?\" idan abu fiye da ɗaya ne. A wurin biya, mai karɓar kuɗi yana iya tambaya: \"Cash or card?\" \"Do you want a bag?\" \"Do you want your receipt?\" Ku amsa: \"Card, please.\" \"No bag, thanks.\" \"Yes, please.\"",
            "Ku ajiye rasiɗinku. Don mayar da wani abu, ku ce: \"I'd like to return this, please. Here is my receipt.\" Kowane shago yana da nasa ƙa'idojin mayar da kaya, don haka kuna iya tambaya: \"What is your return policy?\"",
            "Misalin hira. A: \"Excuse me, where can I find the milk?\" B: \"In the back, next to the eggs.\" A: \"Thanks. How much is this?\" B: \"Three ninety-nine.\" A: \"Okay. Card, please.\""
          ],
          steps: ["Ku ce \"Excuse me\" don neman taimako.", "Ku tambaya \"Where can I find ...?\"", "Ku tambaya \"How much is this?\"", "A wurin biya ku amsa \"Cash or card?\" da \"Do you want a bag?\"", "Ku ajiye rasiɗin don mayar da kaya."],
          words: [["\"Aisle\"", "layi a cikin shago mai shiryayyu a gefe biyu. Ana faɗinsa kamar \"I'll\"."], ["\"Receipt\"", "takardar da ke nuna abin da kuka saya da abin da kuka biya (rasiɗi). Ba a faɗin harafin p."], ["\"Return\"", "mayar da abu shago don a dawo muku da kuɗinku."], ["\"Cashier\"", "ma'aikacin da ke karɓar kuɗinku a wurin biya."]],
          slides: [
            { title: "Neman kaya", bullets: ["\"Excuse me, where can I find the rice?\"", "\"Do you have diapers?\"", "Amsa: \"Aisle 5.\""] },
            { title: "Tambayar farashi", bullets: ["Abu ɗaya: \"How much is this?\"", "Fiye da ɗaya: \"How much are these?\""] },
            { title: "A wurin biya", bullets: ["\"Cash or card?\" - \"Card, please.\"", "\"Do you want a bag?\" - \"No bag, thanks.\"", "\"Do you want your receipt?\" - \"Yes, please.\""] },
            { title: "Mayar da kaya", bullets: ["Ku ajiye rasiɗinku", "\"I'd like to return this, please.\"", "\"What is your return policy?\""] }
          ],
          tryIt: "Ku yi wasan kwaikwayo da abokin atisaye, ko ku yi dukan sassan biyu da babbar murya: kuna cikin shagon kayan abinci. Ku tambayi inda abubuwa biyu suke, ku tambayi farashin ɗaya, ku amsa tambayoyi uku na mai karɓar kuɗi. Idan kun je sayayya a gaba, ku yi amfani da jimla ɗaya da gaske.",
          youCanNow: "tambayar inda wani abu yake a shago, tambayar farashi, amsa wa mai karɓar kuɗi da neman mayar da wani abu.",
          quickCheck: [
            { objective: "O3", q: "Kuna son sanin farashin riguna biyu. Me za ku tambaya?", options: ["\"Where are you from?\"", "\"Can you spell that?\"", "\"What time is it?\"", "\"How much are these?\""], answer: 3, why: "\"How much are these?\" yana tambayar farashin abu fiye da ɗaya." },
            { objective: "O3", q: "Mai karɓar kuɗi ta tambaya \"Cash or card?\" Me take son sani?", options: ["Yadda za ku biya", "Sunanku", "Inda kuke zama", "Ko kuna son jaka"], answer: 0, why: "\"Cash or card?\" yana tambayar yadda za ku biya (tsabar kuɗi ko kati)." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Haɗuwa da mutane da sayayya",
        questions: [
          { objective: "O1", q: "Wace ce jimla ta farko mai kyau idan kun haɗu da wani?", options: ["\"How much is this?\"", "\"Hi, my name is Rosa.\"", "\"Turn left.\"", "\"I have a fever.\""], answer: 1, why: "Gaisuwa da sunanku su ne farkon gabatarwa." },
          { objective: "O1", q: "Kun faɗi sunanku. Wace tambaya ce mai kyau da za ku yi?", options: ["\"Where is the milk?\"", "\"Cash or card?\"", "\"What's your name?\"", "\"Can I return this?\""], answer: 2, why: "Tambayar sunan ɗayan mutumin tana sa hirar ta ci gaba." },
          { objective: "O2", q: "Ba ku fahimci wani adireshi ba. Mene ne abu mafi kyau da za ku yi?", options: ["Ku ce \"yes\" ku yi tsammani", "Ku tambaya \"Can you write it down, please?\"", "Ku tafi", "Ku tambaya \"How much is it?\""], answer: 1, why: "Neman mutumin ya rubuta yana ba ku ainihin adireshin." },
          { objective: "O2", q: "Wani ya ce \"Your appointment is Friday at nine.\" Ta yaya za ku tabbatar kun ji daidai?", options: ["\"So, Friday at 9?\"", "\"Nice to meet you.\"", "\"Do you have a bag?\"", "\"I'm from Haiti.\""], answer: 0, why: "Maimaita ranar da lokacin yana bar mutumin ya tabbatar ko ya gyara." },
          { objective: "O3", q: "Kuna son mayar da takalman da ba su yi muku daidai ba. Me za ku ce?", options: ["\"Where are you from?\"", "\"How do you spell that?\"", "\"Turn right.\"", "\"I'd like to return this, please. Here is my receipt.\""], answer: 3, why: "Wannan jimla tana neman mayar da kayan kuma tana nuna rasiɗin." }
        ]
      }
    },
    {
      name: "Babi na 2: Likita, waya da zirga-zirga",
      lessons: [
        {
          title: "Wajen likita: faɗin abin da ke damunku",
          objectives: ["O4"],
          minutes: 5,
          goal: "Faɗa wa likita ko nas abin da ke damunku, inda ke ciwo da tsawon lokacin.",
          text: [
            "A teburin karɓar baƙi, ku ce: \"Hi, I have an appointment at 10 o'clock. My name is Ana Lopez.\" Suna iya tambayar ranar haihuwarku da katin inshorarku.",
            "Don faɗin abin da ke damunku: \"I have a headache.\" \"I have a fever.\" \"My stomach hurts.\" \"My back hurts.\" \"I feel dizzy.\" Sannan ku faɗi tsawon lokacin: \"It started two days ago.\" ko \"I've had it since Monday.\" Likitan yana iya tambaya: \"Does it hurt here?\" Ku amsa: \"Yes, there.\" ko \"No.\"",
            "Idan kuna buƙatar taimako da Turanci, kuna iya tambaya: \"Do you have an interpreter?\" Mai fassara (interpreter) mutum ne da ke taimaka muku magana da likita a harshenku. Ku nemi likitan ya rubuta umarnin: \"Can you write that down, please?\" Wannan kwas ɗin yana koyar da kalmomi ne kawai. Tambayoyi game da lafiyarku na likitanku ne ko nas.",
            "A lokacin gaggawa, kamar wahalar numfashi ko ciwon ƙirji, ku kira 911 ku ce: \"I need an ambulance.\" Sannan ku faɗi inda kuke."
          ],
          steps: ["A teburin karɓar baƙi: ku faɗi lokacin ganawarku da sunanku.", "Ku faɗi abin da ke damunku: \"I have a ...\" ko \"My ... hurts.\"", "Ku faɗi tsawon lokacin: \"for two days\" ko \"since Monday\".", "Ku nemi mai fassara ko umarni a rubuce idan kuna buƙata."],
          words: [["\"Appointment\"", "ganawa: rana da lokacin da aka tsara don ganin wani, kamar likita."], ["\"Fever\"", "zazzaɓi: lokacin da jikinku ya yi zafi sosai saboda rashin lafiya."], ["\"Interpreter\"", "mai fassara: mutumin da ke taimaka wa mutane biyu masu harsuna daban su yi magana."], ["\"Insurance card\"", "katin inshorar lafiya da ofishin ke neman gani."]],
          slides: [
            { title: "A teburin karɓar baƙi", bullets: ["\"I have an appointment at 10 o'clock.\"", "\"My name is Ana Lopez.\""] },
            { title: "Ku faɗi abin da ke damunku", bullets: ["\"I have a headache.\" \"I have a fever.\"", "\"My stomach hurts.\" \"My back hurts.\"", "\"I feel dizzy.\""] },
            { title: "Ku faɗi tsawon lokacin", bullets: ["\"for two days\"", "\"since Monday\""] },
            { title: "Neman taimako don fahimta", bullets: ["\"Do you have an interpreter?\"", "\"Can you write that down, please?\"", "Gaggawa: ku kira 911, \"I need an ambulance.\""] }
          ],
          tryIt: "Atisaye kawai, da matsalar ƙage: ku rubuta jimloli uku don likita, misali \"I have a sore throat. It started on Sunday. It hurts when I swallow.\" Ku karanta su da babbar murya. Sannan ku yi atisayen abin da za ku faɗa a teburin karɓar baƙi da sunan ƙage da lokacin ƙage.",
          youCanNow: "sanar da isowarku a teburin karɓar baƙi, faɗin abin da ke damunku da tsawon lokacin, da neman mai fassara ko umarni a rubuce.",
          quickCheck: [
            { objective: "O4", q: "Kanku yana ciwo tun jiya. Me za ku faɗa wa likita?", options: ["\"I've had a headache since yesterday.\"", "\"How much is this?\"", "\"Turn left.\"", "\"Cash, please.\""], answer: 0, why: "Tana faɗin matsalar da tsawon lokacin da ta ɗauka." },
            { objective: "O4", q: "Ba ku fahimci likitan sosai ba. Me za ku iya tambaya?", options: ["\"Where is aisle 5?\"", "\"Nice to meet you.\"", "\"Do you have a bag?\"", "\"Do you have an interpreter?\""], answer: 3, why: "Mai fassara yana taimaka muku da likitan ku fahimci juna." }
          ]
        },
        {
          title: "Kiran waya: tsara ganawa da kiran makaranta",
          objectives: ["O4", "O2"],
          minutes: 6,
          goal: "Tsara ganawa ta waya, sannan ku maimaita ranar da lokacin.",
          text: [
            "Kiran waya yana da wuya domin ba kwa ganin mutumin. Ku shirya kalmominku kafin ku kira, kuma ku ajiye alƙalami da takarda a shirye.",
            "Don tsara ganawa: \"Hi, my name is Ana Lopez. I'd like to make an appointment, please.\" Suna tambaya: \"What is it for?\" \"What day works for you?\" Ku amsa: \"I have a cough.\" \"Tuesday morning is good.\" Sannan ku maimaita: \"So, Tuesday the 12th at 9:30?\" Don canja ta: \"I need to change my appointment, please.\"",
            "Don kiran makarantar ɗanku idan ba shi da lafiya: \"Hi, this is Ana Lopez. My son, David Lopez, is sick today. He is in second grade. He will not come to school today.\"",
            "Idan kiran ya yi sauri sosai, ku yi amfani da jimlolinku daga Darasi na 2: \"Sorry, can you speak more slowly, please?\" \"Can you spell that?\" Idan sun faɗi lambar waya, ku maimaita ta rukuni-rukuni: \"5-5-5, 0-1-2-3?\""
          ],
          steps: ["Ku rubuta abin da za ku faɗa kafin ku kira.", "Ku faɗi sunanku da dalilin kiran.", "Ku amsa: don me ne, da wace rana da lokaci suka dace.", "Ku rubuta ranar da lokacin, sannan ku maimaita su.", "Ƙarshe: \"Thank you. Bye.\""],
          words: [["\"Make an appointment\"", "tsara rana da lokacin ganin wani."], ["\"Change\" / \"cancel\"", "mayar da ganawa zuwa sabon lokaci / soke ganawar."], ["\"What works for you?\"", "tambaya mai ma'anar \"wace rana ko lokaci ne ya dace da ku?\""]],
          slides: [
            { title: "Kafin ku kira", bullets: ["Ku rubuta abin da za ku faɗa", "Alƙalami da takarda a shirye"] },
            { title: "Tsara ganawa", bullets: ["\"I'd like to make an appointment, please.\"", "\"What day works for you?\" - \"Tuesday morning.\"", "Ku maimaita: \"So, Tuesday the 12th at 9:30?\""] },
            { title: "Kiran makaranta", bullets: ["\"My son, David Lopez, is sick today.\"", "\"He is in second grade.\"", "\"He will not come to school today.\""] },
            { title: "Idan ya yi sauri sosai", bullets: ["\"Can you speak more slowly, please?\"", "Ku maimaita lambobi rukuni-rukuni"] }
          ],
          tryIt: "Ku rubuta gajeren rubutun abin da za ku faɗa a waya don tsara ganawa da likita, da sunan ƙage da matsalar ƙage. Ku yi wasan kwaikwayo da abokin atisaye, ko ku faɗi dukan sassan biyu da babbar murya. Ku tabbata kun maimaita ranar da lokacin a ƙarshe.",
          youCanNow: "tsara ko canja ganawa ta waya, kiran makarantar ɗanku, da maimaita ranar da lokacin don tabbatarwa.",
          quickCheck: [
            { objective: "O4", q: "Ofishin ya ce \"What day works for you?\" Me suke so?", options: ["Adireshinku", "Aikinku", "Ranar da ta dace da ku", "Katin inshorarku"], answer: 2, why: "\"What day works for you?\" yana tambayar wace rana ce ta dace da ku." },
            { objective: "O2", q: "Ofishin ya faɗi lokacin ganawarku. Me za ku yi a gaba?", options: ["Ku katse wayar nan take", "Ku maimaita ranar da lokacin don tabbatarwa", "Ku ce \"Nice to meet you\"", "Ku tambaya \"How much are these?\""], answer: 1, why: "Maimaita ranar da lokacin yana tabbatar da cewa kun ji daidai." }
          ]
        },
        {
          title: "Tambayar hanya",
          objectives: ["O5"],
          minutes: 5,
          goal: "Tambayar hanyar zuwa wani wuri, sannan ku maimaita bayanin don tabbatarwa.",
          text: [
            "Ku fara da \"Excuse me.\" Sannan ku tambaya: \"How do I get to the library?\" ko \"Where is the bus stop?\" ko \"Is the post office near here?\"",
            "Kalmomin hanya: \"Go straight.\" \"Turn left.\" \"Turn right.\" \"It's on the corner.\" \"It's next to the bank.\" \"It's across from the park.\" \"Go two blocks.\" Block (bulok) shi ne sashen titi tsakanin kwanoni biyu (corners).",
            "Ku maimaita bayanin hanyar: \"So, go straight two blocks, then turn left?\" Mutumin zai ce \"Yes\" ko ya gyara. Idan ya yi yawa, ku tambaya: \"Can you show me on my phone?\" ko \"Can you point?\"",
            "Misalin hira. A: \"Excuse me, how do I get to the clinic?\" B: \"Go straight two blocks and turn right. It's next to the pharmacy.\" A: \"So, straight two blocks, turn right, next to the pharmacy?\" B: \"That's right.\" A: \"Thank you!\""
          ],
          steps: ["Ku ce \"Excuse me.\"", "Ku tambaya \"How do I get to ...?\" ko \"Where is ...?\"", "Ku saurari left, right, straight, blocks da next to.", "Ku maimaita bayanin hanyar.", "Ku ce \"Thank you!\""],
          words: [["\"Straight\"", "gaba sak, ba tare da juyawa ba."], ["\"Block\"", "sashen titi tsakanin kwanoni biyu."], ["\"Across from\"", "a ɗaya gefen titi daga wani abu."], ["\"Next to\"", "kusa da wani abu, a gefensa."]],
          slides: [
            { title: "Tambayar hanya", bullets: ["\"Excuse me, how do I get to the library?\"", "\"Where is the bus stop?\"", "\"Is the post office near here?\""] },
            { title: "Kalmomin hanya", bullets: ["\"Go straight.\" \"Turn left.\" \"Turn right.\"", "\"Go two blocks.\"", "\"Next to\" / \"across from\" / \"on the corner\""] },
            { title: "Ku tabbatar", bullets: ["\"So, straight two blocks, then left?\"", "\"Can you show me on my phone?\""] }
          ],
          sources: [{ name: "USA Learns: atisayen Turanci kyauta ga manya", url: "https://www.usalearns.org/" }],
          tryIt: "Aikin ƙarshe: ku yi katin jimlolin Turancin Yau da Kullum naku. Ku rubuta gabatarwarku, jimloli uku don neman mutum ya maimaita ko ya yi a hankali, tambayoyi biyu na shago, gajeren rubutun waya don ganawa da likita, da tambaya ɗaya don neman hanyar zuwa wurin da kuke yawan zuwa. Ku karanta dukan katin da babbar murya, ko ku yi wasan kwaikwayo da abokin atisaye, kuma ku naɗi muryarku idan za ku iya.",
          youCanNow: "tambayar hanya, fahimtar left, right, straight da next to, da maimaita bayanin hanyar don tabbatarwa.",
          quickCheck: [
            { objective: "O5", q: "Mutumin ya ce \"It's across from the park.\" Ina wurin yake?", options: ["A cikin wurin shaƙatawa (park)", "Nesa da wurin shaƙatawa", "A ɗaya gefen titi daga wurin shaƙatawa", "A bayanku"], answer: 2, why: "\"Across from\" yana nufin a ɗaya gefen titi." },
            { objective: "O5", q: "Wace tambaya ce ke neman hanya?", options: ["\"How much is this?\"", "\"How do I get to the bus station?\"", "\"Do you have an interpreter?\"", "\"What's your name?\""], answer: 1, why: "\"How do I get to ...?\" yana tambayar hanyar zuwa wani wuri." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Likita, waya da zirga-zirga",
        questions: [
          { objective: "O4", q: "Kun isa asibiti. Me za ku ce a teburin karɓar baƙi?", options: ["\"I have an appointment at 2 o'clock. My name is Li Wei.\"", "\"Turn right.\"", "\"Cash or card?\"", "\"Where are you from?\""], answer: 0, why: "Ku faɗi lokacin ganawarku da sunanku idan kun iso." },
          { objective: "O4", q: "Wace jimla ce ke faɗin tsawon lokacin da kuka yi ba ku da lafiya?", options: ["\"My stomach hurts.\"", "\"I feel dizzy.\"", "\"I have an appointment.\"", "\"I've had a fever since Monday.\""], answer: 3, why: "\"Since Monday\" yana faɗa wa likita tsawon lokacin." },
          { objective: "O4", q: "Ba za ku iya zuwa ganawarku ranar Juma'a ba. Me za ku ce a waya?", options: ["\"I need to change my appointment, please.\"", "\"Nice to meet you.\"", "\"Where is aisle 3?\"", "\"Go straight.\""], answer: 0, why: "Wannan jimla tana neman a mayar da ganawar zuwa sabon lokaci." },
          { objective: "O5", q: "Mene ne ma'anar \"Go two blocks\"?", options: ["Ku jira minti biyu", "Ku wuce kwanonin titi biyu", "Ku hau bas mai lamba biyu", "Ku juya sau biyu"], answer: 1, why: "Block shi ne sashen titi tsakanin kwanoni biyu." },
          { objective: "O5", q: "Wani ya ba ku bayanin hanya. Ta yaya za ku tabbatar kun fahimta?", options: ["Ku ce \"Okay\" ku tafi", "Ku tambaya \"How much is it?\"", "Ku maimaita bayanin hanyar", "Ku tambaya \"What's your name?\""], answer: 2, why: "Maimaita bayanin hanyar yana bar mutumin ya tabbatar ko ya gyara." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Turanci don Rayuwar Yau da Kullum (ESL)",
    questions: [
      { objective: "O1", q: "Wace ce hanya mafi kyau ta fara gabatarwa?", options: ["\"Hello, I'm Marco.\"", "\"How much is this?\"", "\"Turn left.\"", "\"My back hurts.\""], answer: 0, why: "Gaisuwa da sunanku su ne farkon gabatarwa." },
      { objective: "O1", q: "Mene ne ma'anar \"I'm\"?", options: ["I will", "I have", "I am", "I can"], answer: 2, why: "\"I'm\" gajeriyar hanyar cewa \"I am\" ce." },
      { objective: "O1", q: "Sabon abokin aiki ya ce \"I'm from Nigeria.\" Wace tambaya ce mai kyau da za ku yi?", options: ["\"Cash or card?\"", "\"Where is the bus stop?\"", "\"Can you spell that?\"", "\"How long have you been here?\""], answer: 3, why: "Tambaya ta abokantaka game da mutumin tana sa hirar ta ci gaba." },
      { objective: "O2", q: "Wani yana magana da sauri sosai. Me za ku ce?", options: ["\"Yes, yes, okay.\"", "\"Can you speak more slowly, please?\"", "\"Nice to meet you.\"", "\"Goodbye.\""], answer: 1, why: "Neman mutumin ya yi a hankali yana da ladabi kuma yana taimaka muku fahimta." },
      { objective: "O2", q: "Me yasa ya fi kyau ku tambaya da ku ce \"yes\" alhali ba ku fahimta ba?", options: ["Kuna iya rasa muhimmin bayani kamar lokaci ko wuri", "Tambaya rashin ladabi ce", "Mutane ba sa son tambayoyi", "Tsammani ya fi sauri"], answer: 0, why: "\"Yes\" na kuskure yana iya sa ku rasa lokaci, wuri ko umarni." },
      { objective: "O2", q: "Kuna buƙatar rubuta sunan titi da kuka ji. Me za ku tambaya?", options: ["\"How much is it?\"", "\"Do you want a bag?\"", "\"How do you spell that?\"", "\"What's your name?\""], answer: 2, why: "\"How do you spell that?\" yana neman haruffan." },
      { objective: "O3", q: "Ba ku ga burodi a shago ba. Me za ku tambayi ma'aikaci?", options: ["\"I have a fever.\"", "\"So, Tuesday at 3?\"", "\"Nice to meet you.\"", "\"Excuse me, where can I find the bread?\""], answer: 3, why: "\"Where can I find ...?\" yana tambayar inda abu yake." },
      { objective: "O3", q: "Mene ne receipt?", options: ["Takardar da ke nuna abin da kuka saya da abin da kuka biya", "Jakar sayayya", "Ma'aikacin shago", "Layi a cikin shago"], answer: 0, why: "Rasiɗi yana nuna abin da kuka saya; ku ajiye shi don mayar da kaya." },
      { objective: "O3", q: "Mai karɓar kuɗi ta tambaya \"Do you want a bag?\" Ba kwa son jaka. Me za ku ce?", options: ["\"Aisle 5.\"", "\"No bag, thanks.\"", "\"Turn right.\"", "\"I'm from Peru.\""], answer: 1, why: "\"No bag, thanks\" yana cewa a'a cikin ladabi." },
      { objective: "O4", q: "Wace jimla ce ke faɗa wa likita abin da ke damunku?", options: ["\"Go straight.\"", "\"How much are these?\"", "\"My stomach hurts.\"", "\"Nice to meet you.\""], answer: 2, why: "\"My stomach hurts\" yana faɗin matsalar." },
      { objective: "O4", q: "Wane ne interpreter?", options: ["Likitan yara", "Mutumin da ke taimaka wa mutane biyu masu harsuna daban su yi magana", "Wani nau'in magani", "Fom da kuke cikawa"], answer: 1, why: "Mai fassara yana taimaka muku da likita ku fahimci juna." },
      { objective: "O4", q: "Wani yana jin ciwon ƙirji da wahalar numfashi. Me za ku yi?", options: ["Ku kira 911 ku ce \"I need an ambulance.\"", "Ku tsara ganawa ta mako mai zuwa", "Ku je sayayya", "Ku tura wa aboki saƙon tes"], answer: 0, why: "Ciwon ƙirji da wahalar numfashi gaggawa ne: ku kira 911." },
      { objective: "O4", q: "Kuna kira don tsara ganawa. Mene ne abu na farko da za ku faɗa?", options: ["\"Turn left.\"", "\"How much is this?\"", "\"Do you want a bag?\"", "\"Hi, my name is Ana Lopez. I'd like to make an appointment, please.\""], answer: 3, why: "Ku faɗi sunanku da dalilin kiran." },
      { objective: "O4", q: "Ofishin ya ce \"Thursday at 4:15.\" Me za ku ce a gaba?", options: ["\"So, Thursday at 4:15?\"", "\"Where are you from?\"", "\"Cash, please.\"", "\"Go straight.\""], answer: 0, why: "Maimaita ranar da lokacin yana tabbatar da cewa kun ji daidai." },
      { objective: "O4", q: "'Yarku ba ta da lafiya kuma ba za ta je makaranta ba. Wa za ku kira, kuma me za ku faɗa?", options: ["Shago: \"Where is the milk?\"", "Makaranta: \"My daughter is sick today. She will not come to school.\"", "Kamfanin bas: \"Turn right.\"", "Babu kowa"], answer: 1, why: "Ku kira makarantar, ku faɗi sunan yarinyar, ku ce ba ta da lafiya yau." },
      { objective: "O5", q: "Mene ne ma'anar \"Turn right\"?", options: ["Ku daina tafiya", "Ku koma baya", "Ku juya zuwa hannun dama", "Ku tafi gaba sak"], answer: 2, why: "\"Turn right\" yana nufin ku juya zuwa hannun dama." },
      { objective: "O5", q: "Bankin yana \"next to\" kantin magani. Ina yake?", options: ["Nesa da kantin magani", "A cikin kantin magani", "A wani titi daban", "Daidai a gefen kantin magani"], answer: 3, why: "\"Next to\" yana nufin daidai a gefe." },
      { objective: "O5", q: "Bayanin hanyar ya yi tsawo kuma yana da ruɗani. Me za ku iya tambaya?", options: ["\"Can you show me on my phone?\"", "\"Do you want a bag?\"", "\"I have a headache.\"", "\"Nice to meet you.\""], answer: 0, why: "Taswira a wayarku ko nuna wurin da hannu yana sa bayanin hanyar ya fito fili." },
      { objective: "O2", q: "Lokacin kawai kuka rasa a cikin doguwar jimla. Wace ce tambaya mafi kyau?", options: ["\"Goodbye.\"", "\"Sorry, what time?\"", "\"How much are these?\"", "\"Where are you from?\""], answer: 1, why: "Tambaya game da sashe ɗaya da kuka rasa tana da sauri kuma a sarari." },
      { objective: "O1", q: "Wace gabatarwa ce a sarari kuma ta cika?", options: ["\"Me, me, job.\"", "\"Where is the bank?\"", "\"Hi, I'm Fatima. I'm from Syria. I'm a cook.\"", "\"Card, please.\""], answer: 2, why: "Tana ba da suna, ƙasa da aiki a gajerun jimloli." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 3, 5, 6, 9, 13, 15, 16] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku yi atisayen wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Gabatarwa", objective: "O1", notYet: "Ƙasa da jimloli uku, ko babu suna ko babu tambaya.", meets: "Yana faɗin suna, inda ya fito da abin da yake yi, kuma yana yin tambaya ɗaya.", exceeds: "Yana faɗinta da babbar murya ba tare da karantawa ba, kuma yana ƙara wani ƙarin bayani, kamar wata manufa." },
      { name: "Neman maimaitawa ko a yi a hankali", objective: "O2", notYet: "Babu jimloli, ko jimlolin ba su da ladabi.", meets: "Jimloli uku masu ladabi don a maimaita, a yi a hankali, a faɗi haruffa ko a rubuta.", exceeds: "Yana kuma nuna yadda ake maimaita abu don tabbatarwa, kamar \"So, Tuesday at 3?\"" },
      { name: "Tambayoyin shago", objective: "O3", notYet: "Babu tambayoyin shago, ko ba sa tambayar kaya ko farashi.", meets: "Tambayoyi biyu masu sarari, kamar inda kaya yake da farashinsa.", exceeds: "Yana kuma amsa tambayoyin mai karɓar kuɗi a wasan kwaikwayo." },
      { name: "Rubutun waya don ganawa", objective: "O4", notYet: "Babu suna, dalili ko rana da lokaci.", meets: "Yana ba da suna, dalili, rana da lokacin da suka dace, kuma yana maimaita lokacin.", exceeds: "Yana kuma nuna yadda ake canja ganawar ko neman mai fassara." },
      { name: "Tambayar hanya", objective: "O5", notYet: "Babu tambaya, ko tambayar ba ta ambaci wuri ba.", meets: "Tambaya mai sarari zuwa wuri na gaske, da jimlar da ke maimaita bayanin hanya.", exceeds: "Yana amfani da kalmomin hanya uku daidai a wasan kwaikwayo." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka ce sun yi kiran waya, tsara ganawa ko neman wani abu a shago da Turanci da kansu cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka fara kwas ɗin \"Turanci don Wurin Aiki (ESL)\" ko ajin Turanci na manya cikin kwanaki 30",
      "Abokan aiki sun ce an rage rasa ganawa saboda rashin fahimtar harshe"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta don kallon darussan, ko kwafin rubutun darasin da aka buga",
      "Takarda da alƙalami don katunan jimloli da rubutun waya",
      "Abokin atisaye don wasan kwaikwayo, ko waya don naɗar muryarku",
      "Kusan minti 60 zuwa 75 gaba ɗaya, a gajerun zama"
    ],
    facilitatorNotes: [
      "Ku fara karanta kowane misalin hira da babbar murya, sannan masu koyo su karanta shi bibbiyu, sannan su musanya matsayi.",
      "Fassarorin kwas ɗin suna barin jimlolin Turanci a Turanci; ku bayyana su a harshen masu koyo amma ku yi atisayensu a Turanci.",
      "Ku yi amfani da sunaye, ranakun haihuwa da lambobin waya na ƙage a dukan atisaye; kada ku taɓa karɓar bayanan sirri na gaske.",
      "Ku yaba wa ƙoƙari, ba nahawu mara kuskure ba. Manufar ita ce jimlolin da ke aiki da ƙarfin gwiwar amfani da su.",
      "Darasin likita yana koyar da kalmomi ne kawai; ku tura tambayoyin lafiya ga likita ko nas. Ku nuna wa masu koyo ajujuwan Turanci kyauta na manya na kusa (makarantun manya, ɗakunan karatu, kwalejojin al'umma) da atisaye kyauta kamar USA Learns."
    ]
  }
};
