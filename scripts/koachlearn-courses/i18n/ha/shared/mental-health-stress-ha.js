"use strict";

// Koach Learn course, Hausa (ha) translation of shared/mental-health-stress.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.
// Teaches coping skills and how and when to get help. It never diagnoses and never replaces a professional.

module.exports = {
  id: "mental-health-stress-ha",
  lang: "ha",
  translationOf: "mental-health-stress",
  category: "Seniors and Technology",
  name: "Lafiyar Ƙwaƙwalwa da Sarrafa Damuwa",
  skills: "Gane alamun damuwarku, Kwantar da jiki da numfashi da dawo da hankali, Gina al'adun barci da motsa jiki, Neman taimakon wani, Gane alamun haɗari da samun taimakon gaggawa, Rubuta tsarin jurewa naku",
  outcome: "gane alamun damuwarku tun da wuri, kwantar da jikinku cikin 'yan mintuna da numfashi da dawo da hankali, riƙe al'adun yau da kullum da ke kare yanayin zuciyarku, neman taimako, gane alamun haɗari a kanku ko a kan wani, da sanin ainihin wanda za ku kira, har da 988 a Amurka, idan abin ya yi tsanani.",
  about: [
    "Kowa yana jin damuwa (stress): iyaye masu bashin kuɗaɗe, manomin da ke jiran ruwan sama, ɗan wasa kafin babban wasa, tsohon soja da ya dawo gida, wanda ya fito daga gidan yari yana neman aiki, kaka da ke kula da mijinta ko matarta, mai kasuwanci a watan da kasuwa ta yi sanyi. Damuwa abu ne na yau da kullum. Amma damuwa mai yawa na dogon lokaci tana iya cutar da barcinku, jikinku, aikinku da mutanen da ke kusa da ku.",
    "Wannan kwas ɗin yana koyar da ƙwarewar da za ku iya amfani da ita yau: yadda ake gane damuwa da wuri, kwantar da jiki da sauri, gina al'adun da ke kare ku, magana da wani, da gane alamun da ke nuna lokaci ya yi na neman ƙarin taimako. Ba ya gano cuta (ba ya yin diagnosis), kuma ba ya maye gurbin likita, mai ba da shawara (counselor) ko masanin kula da lafiyar ƙwaƙwalwa (therapist). Yana taimaka muku sanin lokacin da yadda za ku same su.",
    "Idan kuna cikin haɗari yanzu ko kuna tunanin kashe kanku: a Amurka, ku kira ko ku tura tes zuwa 988 (layin taimakon 988 Suicide and Crisis Lifeline). Tsofaffin sojoji da sojoji masu aiki za su iya kiran 988 su danna 1. A wajen Amurka, ku kira layin taimakon gaggawa na ƙasarku ko lambar gaggawa. Ba sai kun gama wannan kwas ɗin tukuna ba.",
    "Kowane darasi yana ɗaukar kusan minti biyar. Ku karanta darasin, ku kalli hotunan bayani (slides), sannan ku yi aikin \"Gwada yanzu\". Akwai ɗan gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku rubuta tsarin jurewa naku a shafi ɗaya: alamun damuwarku na farko guda uku, ƙwarewar kwantar da hankali guda biyu da kuka gwada, al'adun yau da kullum guda biyu da za ku riƙe, mutane biyu da za ku iya magana da su (da yadda za ku same su), wuri ɗaya na samun taimakon ƙwararru, da lambobin gaggawa na inda kuke zaune (988 a Amurka, 988 sannan a danna 1 ga tsofaffin sojoji). Ku ajiye shi a wayarku da kuma a takarda.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya da matasa manya na kowane irin asali da ke jin damuwa: iyaye, tsofaffi da masu kula da marasa lafiya, manoma, 'yan wasa, tsofaffin sojoji, mutanen da ke dawowa gida daga gidan yari, da masu ƙananan kasuwanci.",
    startingPoint: "Sun san yadda damuwa take ji, kuma suna da nasu hanyoyin jurewa, wasu masu amfani wasu ba haka ba. Da yawa ba su taɓa sanya suna ga alamun damuwarsu na farko ba, ba su gwada wata ƙwarewar kwantar da hankali ba, ko ba su ajiye lambobin gaggawa ba.",
    gap: "Damuwa mai yawa na dogon lokaci tana cutar da barci, lafiya, aiki da dangantaka, kuma wasu mutane ba su san alamun da ke nuna lokaci ya yi na neman ƙarin taimako ba. Masu koyo suna buƙatar ƙwarewa masu sauƙi don gane damuwa da kwantar da ita, neman taimako da samun taimakon gaggawa da sauri, a rubuce cikin tsarin da za su iya amfani da shi.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli",
      "Ba gano cuta ko magani ba ne; kwas ɗin yana nuna hanyar zuwa likitoci, masu ba da shawara da layukan gaggawa",
      "Tsaro da farko: ana ba da lambobin gaggawa (988 a Amurka, 988 sannan a danna 1 ga tsofaffin sojoji, ko layin gaggawa na gida) kafin kowane darasi",
      "Sirri: masu koyo suna ajiye rubutun damuwarsu da tsarinsu a wurinsu, sai dai idan sun zaɓi su raba",
      "Lokaci: darussa na kusan minti biyar; wasu masu koyo suna iya kasancewa cikin damuwa mai tsanani"
    ],
    prerequisites: "Babu."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Bayan rubuta damuwarku na kwana ɗaya", action: "sanya suna ga alamun damuwarku na farko guda uku a jikinku, tunaninku, ji a zuciyarku ko ayyukanku", standard: "kowace alama a rubuce da kalmominku" },
    { id: "O2", condition: "Idan kuna jin damuwa tana ƙaruwa", action: "amfani da numfashin akwati (box breathing) da dawo da hankali na 5-4-3-2-1 don kwantar da jikinku", standard: "kuna auna damuwarku daga 0 zuwa 10 kafin da bayan" },
    { id: "O3", condition: "Don mako mai zuwa", action: "zaɓar ƙananan al'adun yau da kullum guda biyu na barci, motsa jiki, abinci ko mutane, da shirya lokacin da za ku yi su", standard: "da lokaci ko tunatarwa ga kowanne" },
    { id: "O4", condition: "Tare da mutumin da kuka amince da shi", action: "fara magana da ke faɗin abin da ke faruwa da abin da kuke buƙata", standard: "da jimlolinku na farko guda biyu" },
    { id: "O5", condition: "Idan aka ga alamun matsananciyar wahala a kanku ko a kan wani", action: "gane alamun haɗarin kashe kai da tuntuɓar taimakon gaggawa da ya dace", standard: "da lambobin gaggawa a ajiye a wayarku, da kalmomin yin tambaya kai tsaye a shirye" },
    { id: "O6", condition: "Ta amfani da abin da kuka gwada a wannan kwas ɗin", action: "rubuta tsarin jurewa naku a shafi ɗaya", standard: "da dukkan sassa shida, a ajiye a wayarku da kuma a takarda" }
  ],
  chapters: [
    {
      name: "Babi na 1: Gane damuwa da kwantar da ita",
      lessons: [
        {
          objectives: ["O1"],
          title: "Gane alamun damuwarku",
          minutes: 5,
          goal: "Sanya suna ga alamomi uku na farko da ke nuna damuwa tana ƙaruwa a cikinku.",
          text: [
            "Damuwa ƙararrawar jikinku ce. Tana hanzarta bugun zuciyarku da numfashinku don ku iya fuskantar ƙalubale. Ɗan damuwa kaɗan yana iya taimaka muku ku mai da hankali kafin jarabawa, wasa ko hirar neman aiki. Matsalar ita ce idan ƙararrawar ta ci gaba da kara na kwanaki ko makonni.",
            "Damuwa tana bayyana a wurare huɗu. A jikinku: kafaɗu sun yi tauri, ciwon kai, ciwon ciki, zuciya tana bugawa da sauri. A tunaninku: damuwar da ke ta maimaituwa, wahalar mai da hankali, tsammanin mafi muni. A ji a zuciyarku: saurin fushi, baƙin ciki, rashin jin komai ko rashin natsuwa. A ayyukanku: barci da yawa ko kaɗan, canjin cin abinci, ƙara shan giya ko taba, janyewa daga mutane.",
            "Alamun kowa sun bambanta. Koci yana iya lura cewa yana yi wa 'yan wasansa tsawa. Kaka yana iya lura cewa ba ta iya barci. Idan kun san alamunku na farko, za ku iya ɗaukar mataki kafin damuwa ta yi girma."
          ],
          steps: ["Ku tuna lokaci na ƙarshe da kuka ji damuwa sosai.", "Ku tambayi kanku: me na ji a jikina, me na yi tunani, me na ji a zuciyata, me na yi?", "Ku rubuta alamomin farko da kuka lura da su.", "Ku zaɓi guda uku mafi muhimmanci. Waɗannan su ne fitilun gargaɗinku na farko."],
          words: [["Damuwa (stress)", "yadda jiki da hankali suke amsawa ga matsi ko ƙalubale."], ["Alama", "abin da ke nuna muku cewa wani abu yana faruwa, kamar fitilar gargaɗi a mota."]],
          slides: [
            { title: "Damuwa ƙararrawar jikinku ce", bullets: ["Ɗan kaɗan yana iya taimaka muku ku mai da hankali", "Mai yawa, na dogon lokaci, tana gajiyar da ku"] },
            { title: "Inda damuwa take bayyana", bullets: ["Jiki: kafaɗu masu tauri, ciwon kai, zuciya mai sauri", "Tunani: damuwa mai maimaituwa, wahalar mai da hankali", "Zuciya: saurin fushi, baƙin ciki, rashin natsuwa", "Ayyuka: barci, abinci, shan giya, janyewa daga mutane"] },
            { title: "Ku san alamunku na farko", bullets: ["Na kowa sun bambanta", "Ku gane su da wuri, ku ɗauki mataki da wuri", "Ku zaɓi guda uku mafi muhimmanci"] }
          ],
          tryIt: "Ku yi gajeren rubutun damuwa na kwana ɗaya. Sau uku a yau (safe, rana, dare), ku rubuta: matakin damuwa daga 0 zuwa 10, da abu ɗaya da kuka lura da shi a jikinku, tunaninku, zuciyarku ko ayyukanku. Ku zagaye alamunku guda uku mafi muhimmanci.",
          youCanNow: "sanya suna ga alamun damuwarku na farko a jikinku, tunaninku, zuciyarku da ayyukanku.",
          quickCheck: [
            { objective: "O1", q: "Wace ce alamar damuwa a jikinku?", options: ["Kafaɗu masu tauri ko matse haƙora", "Jin hutawa bayan barci", "Dariya da aboki", "Jin daɗin abinci"], answer: 0, why: "Tsokoki masu tauri alamar damuwa ce ta farko da aka saba gani a jiki." },
            { objective: "O1", q: "Kun lura cewa kuna yi wa iyalinku tsawa kusan kowace yamma a wannan makon. Me za ku yi?", options: ["Ku ƙyale shi; kowa yana yi", "Ku rubuta shi a rubutun damuwarku a matsayin alama mai yiwuwa", "Ku daina magana da iyalinku", "Ku jira har ya yi muni"], answer: 1, why: "Lura da alamomi da rubuta su yana taimaka muku ku ɗauki mataki kafin damuwa ta yi girma." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kwantar da jiki da sauri: numfashi da dawo da hankali",
          minutes: 5,
          goal: "Yi amfani da numfashi a hankali da atisayen dawo da hankali don natsuwa cikin 'yan mintuna.",
          text: [
            "Idan damuwa ta zo, numfashi a hankali yana gaya wa jikinku cewa babu haɗari, don ya rage ƙararrawar. Hanya ɗaya mai sauƙi ita ce numfashin akwati (box breathing): ku shaƙa iska kuna ƙirga 4, ku riƙe na 4, ku fitar na 4, ku riƙe na 4. Ku maimaita sau huɗu. Idan riƙewa ta yi wuya, ku sa fitar da iska ya fi shaƙa tsawo kawai, misali shaƙa na 4 da fitarwa na 6.",
            "Dawo da hankali (grounding) yana dawo da tunaninku zuwa yanzu idan damuwa ta yi gaba. Ku gwada 5-4-3-2-1: ku faɗi abubuwa 5 da kuke gani, 4 da za ku iya taɓawa, 3 da kuke ji, 2 da kuke shaƙa ƙamshinsu da 1 da kuke ɗanɗanawa. Kuna iya yin sa a ko'ina: a bas, kafin taro, a ɗakin canja kaya na 'yan wasa, a ɗakin jira.",
            "Waɗannan ƙwarewa suna aiki mafi kyau idan an yi atisaye. Ku gwada su lokacin da kuke cikin natsuwa, don su kasance a shirye idan kuna buƙatarsu. Manhajojin waya na kyauta za su iya yi muku jagora, amma ba kwa buƙatar kowace manhaja. Idan atisayen numfashi ya sa ku jiri, ku tsaya ku yi numfashi kamar yadda kuka saba."
          ],
          steps: ["Ku lura da alamar damuwa.", "Numfashin akwati: shaƙa 4, riƙe 4, fitar 4, riƙe 4. Ku maimaita sau huɗu.", "Idan damuwa ta ci gaba da gudu: ku yi dawo da hankali na 5-4-3-2-1.", "Ku sake auna matakin damuwarku daga 0 zuwa 10."],
          words: [["Numfashin akwati (box breathing)", "shaƙa iska, riƙewa, fitarwa da riƙewa, kowanne da ƙirga iri ɗaya, yawanci 4."], ["Dawo da hankali (grounding)", "amfani da gaɓoɓin ji (gani, taɓawa, ji, ƙamshi, ɗanɗano) don dawo da hankalinku zuwa wannan lokaci."]],
          slides: [
            { title: "Numfashin akwati", bullets: ["Shaƙa iska na 4", "Riƙe na 4", "Fitar na 4, riƙe na 4", "Maimaita sau huɗu"] },
            { title: "Hanya mafi sauƙi", bullets: ["Ku sa fitar da iska ya fi shaƙa tsawo", "Shaƙa na 4, fitar na 6", "Jiri? Ku tsaya ku yi numfashi kamar yadda kuka saba"] },
            { title: "Dawo da hankali na 5-4-3-2-1", bullets: ["Abubuwa 5 da kuke gani, 4 da za ku iya taɓawa", "3 da kuke ji, 2 da kuke ji ƙamshinsu, 1 da kuke ɗanɗanawa", "Yana aiki a ko'ina: bas, ɗakin canja kaya, ɗakin jira"] },
            { title: "Ku yi atisaye lokacin natsuwa", bullets: ["Sai ya kasance a shirye idan kuna buƙata", "Ba a buƙatar manhaja"] }
          ],
          sources: [{ name: "National Institute of Mental Health: I'm So Stressed Out! fact sheet", url: "https://www.nimh.nih.gov/health/publications/so-stressed-out-fact-sheet" }],
          tryIt: "Ku auna damuwarku daga 0 zuwa 10. Ku yi zagaye huɗu na numfashin akwati, sannan zagaye ɗaya na dawo da hankali na 5-4-3-2-1. Ku sake auna damuwarku ku rubuta lambobin biyu.",
          youCanNow: "kwantar da jikinku cikin 'yan mintuna da numfashi a hankali, da dawo da hankalinku da atisayen dawo da hankali.",
          quickCheck: [
            { objective: "O2", q: "Me dawo da hankali na 5-4-3-2-1 yake taimaka muku ku yi?", options: ["Yin barci nan take", "Ƙirga kuɗinku", "Dawo da hankalinku zuwa yanzu ta amfani da gaɓoɓin ji", "Tuna lambar wayarku"], answer: 2, why: "Dawo da hankali yana amfani da gaɓoɓin ji guda biyar don dawo da hankalinku zuwa wannan lokaci." },
            { objective: "O2", q: "Kuna jin zuciyarku tana bugawa da sauri kafin wani kiran waya mai wuya. Me za ku yi?", options: ["Ku riƙe numfashinku iyakar yadda za ku iya", "Ku yi 'yan zagaye na numfashin akwati, sannan ku yi kiran", "Ku sha kofi kofuna uku", "Ku soke dukkan kira na wannan makon"], answer: 1, why: "Numfashin akwati a hankali yana iya kwantar da jikinku cikin 'yan mintuna." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Al'adun yau da kullum masu kare ku: barci, motsa jiki, abinci da mutane",
          minutes: 5,
          goal: "Zaɓi ƙananan al'adun yau da kullum guda biyu da ke sauƙaƙa sarrafa damuwa.",
          text: [
            "Numfashi yana taimakawa a lokacin. Al'adu suna taimakawa kowace rana. CDC (hukumar kula da lafiyar jama'a ta Amurka) ta ce yawancin manya suna buƙatar barci na awa 7 ko fiye a dare, matasa masu shekaru 13 zuwa 17 kuma suna buƙatar awa 8 zuwa 10. Al'adun barci masu kyau: ku kwanta ku tashi a lokaci ɗaya, ku sa ɗakin ya yi duhu, shiru da sanyi, ku ajiye wayoyi da allo kusan minti 30 kafin barci, ku rage shan kafeyin (caffeine) da yamma da shan giya kusa da lokacin barci.",
            "Motsa jiki yana rage damuwa. CDC ta ce manya suna buƙatar kusan minti 150 na motsa jiki matsakaici a mako, kamar minti 30 a kwana 5, tare da atisayen ƙarfafa tsoka a kwana 2. Tafiya da sauri ma tana ƙirguwa. 'Yan wasa: kwanakin hutu da barci ma suna cikin atisaye. Cin abinci a lokaci-lokaci da shan isasshen ruwa suna daidaita yanayin zuciyarku.",
            "Mutane suna kare ku. Lokaci tare da wanda ke sa ku ji daɗi, ko da ɗan gajeren kira ne, yana rage damuwa. Rubuta abubuwan da ke zuciyarku a littafi da rage kallon labarai da kafofin sada zumunta (social media) idan suna ɓata muku rai suna taimakawa. Ku fara da ƙarami: al'ada ɗaya da za ku iya riƙewa ta fi biyar da za ku bari."
          ],
          steps: ["Ku duba rubutun damuwarku daga Darasi na 1.", "Ku zaɓi al'adu biyu: ɗaya na barci ko motsa jiki, ɗaya na mutane ko hutu.", "Ku sa kowanne ya zama ƙarami kuma a fili (\"tafiya minti 15 bayan abincin rana\").", "Ku yi su na mako ɗaya ku lura da bambancin."],
          words: [["Al'ada (habit)", "abin da kuke yi akai-akai har ya zama kamar ba sai kun yi tunani ba."], ["Motsa jiki matsakaici", "motsin da ke sa ku yi numfashi da ƙarfi amma har yanzu kuna iya magana, kamar tafiya da sauri."]],
          slides: [
            { title: "Barci", bullets: ["Manya: awa 7 ko fiye; matasa 13-17: awa 8 zuwa 10", "Lokacin kwanciya da tashi iri ɗaya", "Ajiye wayoyi da allo kusan minti 30 kafin barci"] },
            { title: "Motsa jiki", bullets: ["Manya: kusan minti 150 a mako", "Misali: minti 30 a kwana 5", "Tafiya da sauri ma tana ƙirguwa"] },
            { title: "Abinci, ruwa da mutane", bullets: ["Abinci a lokaci-lokaci da isasshen ruwa", "Ku yi magana da wanda ke ƙarfafa ku", "Ku ɗan huta daga labarai masu ɓata rai"] },
            { title: "Ku fara da ƙarami", bullets: ["Ku zaɓi al'adu biyu", "Ku sa su zama a fili", "Ku gwada su na mako ɗaya"] }
          ],
          sources: [
            { name: "CDC: About Sleep", url: "https://www.cdc.gov/sleep/about/index.html" },
            { name: "CDC: Adult Activity guidelines", url: "https://www.cdc.gov/physical-activity-basics/guidelines/adults.html" }
          ],
          tryIt: "Ku rubuta ƙananan al'adu biyu na wannan makon, ɗaya na barci ko motsa jiki da ɗaya na mutane ko hutu, tare da lokacin da za ku yi su. Ku saita tunatarwa a waya ko ku rubuta su a kalandarku.",
          youCanNow: "zaɓar da tsara ƙananan al'adun yau da kullum na barci, motsa jiki da zumunci da ke kare ku daga damuwa.",
          quickCheck: [
            { objective: "O3", q: "Wane burin al'ada ne ya fi sauƙin riƙewa?", options: ["\"Zama mai lafiya\"", "\"Kada in sake jin damuwa\"", "\"Motsa jiki awa biyu kowace rana daga yau\"", "\"Kiran 'yar uwata ranar Lahadi da yamma\""], answer: 3, why: "Ƙananan al'adu a fili masu lokaci sun fi sauƙin riƙewa." },
            { objective: "O3", q: "Sau da yawa kuna duba wayarku a gado har dare ya yi. Wace ƙaramar al'ada za ku gwada?", options: ["Ajiye wayar kusan minti 30 kafin barci", "Ƙara amfani da wayar don ku gaji", "Barci da talabijin a kunne", "Ƙara jinkirin kwanciya a ranakun aiki"], answer: 0, why: "Ajiye allo kafin barci shawarar barci ce da aka koyar a wannan darasi." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Gane damuwa da kwantar da ita",
        questions: [
          { objective: "O1", q: "Wace ce alamar damuwa ta farko a ayyukanku?", options: ["Yin barci ƙasa da yadda kuka saba sosai", "Jin rana a fuskarku", "Cin abincin rana kamar yadda kuka saba", "Dariya ga barkwanci"], answer: 0, why: "Canje-canje a barci, cin abinci, shan giya ko janyewa daga mutane alamun damuwa ne a ayyukanku." },
          { objective: "O2", q: "Mene ne numfashin akwati?", options: ["Numfashi cikin jakar takarda", "Riƙe numfashi iyakar yadda za ku iya", "Shaƙa, riƙewa, fitarwa da riƙewa, kowanne kusan ƙirga 4", "Numfashi da sauri don farkawa"], answer: 2, why: "Numfashin akwati yana amfani da ƙirga huɗu iri ɗaya don rage saurin jikinku." },
          { objective: "O2", q: "Tunaninku yana gudu kafin hirar neman aiki. Wace ƙwarewar dawo da hankali ta dace?", options: ["Duba kafofin sada zumunta", "Faɗin abubuwa 5 da kuke gani, 4 da za ku iya taɓawa, 3 da kuke ji, 2 da kuke ji ƙamshinsu, 1 da kuke ɗanɗanawa", "Shan kofi uku", "Tuna dukkan kurakuran da suka gabata"], answer: 1, why: "5-4-3-2-1 yana dawo da hankalinku zuwa yanzu." },
          { objective: "O3", q: "A cewar CDC, barci nawa yawancin manya suke buƙata?", options: ["Awa 4", "Awa 5", "Awa 6", "Awa 7 ko fiye"], answer: 3, why: "CDC ta ce manya suna buƙatar awa 7 ko fiye a dare." },
          { objective: "O3", q: "Wane burin al'ada ne ya fi sauƙin riƙewa?", options: ["\"Zama mai lafiya\"", "\"Kada in sake jin damuwa\"", "\"Gudun marathon mako mai zuwa\"", "\"Tafiya minti 15 bayan abincin rana a ranakun aiki\""], answer: 3, why: "Ƙananan al'adu a fili sun fi sauƙin farawa da riƙewa." }
        ]
      }
    },
    {
      name: "Babi na 2: Samun taimako da taimakon wasu",
      lessons: [
        {
          objectives: ["O4"],
          title: "Magana da wani da neman taimako",
          minutes: 5,
          goal: "Fara magana don neman taimakon mutumin da kuka amince da shi.",
          text: [
            "Mutane da yawa suna daɗewa kafin su yi magana saboda suna jin rauni, kunya, ko ba sa son su zama nauyi ga wani. Neman taimako ƙwarewa ce, ba rauni ba ne. Koci, sojoji, manoma da masu kasuwanci duk suna dogara da ƙungiya.",
            "Waɗanda za ku iya magana da su: aboki ko ɗan iyali, shugaban addini, koci, jagora (mentor) ko mai tallafa muku (sponsor), mai kula da shari'arku (case manager) ko mai ba da shawara ga masu dawowa gida, malami ko mai ba da shawara a makaranta, likitanku, ko mai ba da shawara (counselor) ko masanin lafiyar ƙwaƙwalwa (therapist). Likitanku zai iya duba ko akwai dalilin lafiya ya kuma taimaka muku samun kulawar lafiyar ƙwaƙwalwa. A Amurka, layin SAMHSA National Helpline (1-800-662-4357) layi ne na kyauta, na sirri, awa 24 kowace rana, na tura mutane zuwa taimako kan lafiyar ƙwaƙwalwa da shan miyagun ƙwayoyi; yana haɗa ku da wuraren magani da ƙungiyoyin tallafi na gida amma shi kansa ba ya ba da shawara (counseling). Tsofaffin sojoji kuma za su iya tambayar ƙungiyar lafiyarsu ta VA.",
            "Yadda ake farawa: ku zaɓi lokacin natsuwa, ku faɗa a sauƙaƙe, ku faɗi abin da kuke buƙata. Misali: \"Na daɗe ina cikin damuwa sosai kuma ba na barci. Zan iya yin magana da kai na 'yan mintuna? Ina buƙatar ka saurare ni ne kawai.\" Mataimakin AI (chatbot) zai iya taimaka muku gwada kalmomin, amma shi ba mai ba da shawara ba ne. Kada ku rubuta bayanan sirri a cikinsa, kuma a lokacin gaggawa, ku nemi mutum na gaske."
          ],
          steps: ["Ku zaɓi mutum ɗaya da kuka amince da shi.", "Ku zaɓi lokaci da wuri na natsuwa.", "Ku faɗi abin da ke faruwa cikin jimla ɗaya ko biyu.", "Ku faɗi abin da kuke buƙata: sauraro, shawara, taimako da wani aiki, ko taimakon nemo ƙwararre."],
          words: [["Mai ba da shawara (counselor) ko therapist", "ƙwararre da aka horar da ke taimakon mutane kan damuwa, ji a zuciya da lafiyar ƙwaƙwalwa."], ["Turawa (referral)", "nuna ko tura mutum zuwa ga hidima ko ƙwararren da ya dace."], ["Na sirri (confidential)", "ana ɓoye shi, ba a faɗa wa wasu ba."]],
          slides: [
            { title: "Neman taimako ƙwarewa ce", bullets: ["Ba rauni ba ne", "Ƙungiya ce ke cin nasara: koci, sojoji, iyali, ƙungiyoyin manoma"] },
            { title: "Mutanen da za ku iya magana da su", bullets: ["Aboki, iyali, shugaban addini, koci, jagora", "Mai kula da shari'a, malami, mai ba da shawara a makaranta", "Likitanku, mai ba da shawara ko therapist"] },
            { title: "Samun kulawa a Amurka", bullets: ["Layin SAMHSA: 1-800-662-4357, kyauta, awa 24 kowace rana", "Yana tura ku zuwa wuraren magani da ƙungiyoyin tallafi na gida", "Tsofaffin sojoji: ku tambayi ƙungiyar lafiyarku ta VA"] },
            { title: "Yadda ake farawa", bullets: ["Lokacin natsuwa, kalmomi masu sauƙi", "\"Na daɗe ina cikin damuwa sosai. Za mu iya magana?\"", "Ku faɗi abin da kuke buƙata"] }
          ],
          sources: [{ name: "SAMHSA National Helpline", url: "https://www.samhsa.gov/find-help/helplines/national-helpline" }],
          tryIt: "Ku rubuta jimloli biyu na farko da za ku faɗa wa mutum ɗaya da kuka amince da shi game da damuwarku, har da abin da kuke buƙata daga gare shi. Idan kun shirya, ku aika saƙon ko ku yi maganar a wannan makon.",
          youCanNow: "zaɓar mutumin da za ku yi magana da shi, fara magana da kalmomi masu sauƙi, da faɗin irin taimakon da kuke buƙata.",
          quickCheck: [
            { objective: "O4", q: "Wace jimla ce mai kyau ta farko yayin neman taimako?", options: ["\"Ka bar shi, ba komai ba ne.\"", "\"Ba ka taɓa taimaka mini ba.\"", "\"Na daɗe ina cikin damuwa sosai, kuma ina son mu yi magana na 'yan mintuna.\"", "\"Ka gyara mini matsalolina.\""], answer: 2, why: "Faɗin abin da ke faruwa da abin da kuke buƙata a sauƙaƙe yana buɗe ƙofar samun taimako." },
            { objective: "O4", q: "Kuna jin damuwa kuma kuna amfani da mataimakin AI (chatbot) da dare. Me za ku yi idan kun fara jin ba ku cikin aminci?", options: ["Ku ci gaba da magana da chatbot ɗin kaɗai", "Ku nemi mutum na gaske, kamar 988 a Amurka ko layin gaggawa na gida", "Ku kashe wayarku ku jira", "Ku nemi ƙarin bayanai game da damuwa"], answer: 1, why: "Chatbot zai iya taimakawa wajen gwada kalmomi, amma a lokacin gaggawa ku nemi mutum na gaske." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Alamun haɗari da samun taimakon gaggawa",
          minutes: 6,
          goal: "Gane manyan alamun haɗari a kanku ko a kan wani, da sanin wanda za ku kira.",
          text: [
            "Wani lokaci damuwa tana komawa abu mafi tsanani. Cibiyar National Institute of Mental Health (NIMH, hukumar binciken lafiyar ƙwaƙwalwa ta Amurka) ta lissafa alamun haɗarin kashe kai, ciki har da: magana game da son mutuwa, jin rashin bege ko kamar an kama mutum a tarko, jin kamar mutum nauyi ne ga wasu, neman hanyoyin mutuwa, ba da muhimman kayayyaki ko yin bankwana, janyewa daga mutane, ƙara shan giya ko ƙwayoyi, sauye-sauyen yanayin zuciya masu yawa, da manyan canje-canje a barci ko cin abinci. Alamun da suka sabunta ko suke ƙara muni suna buƙatar taimako da sauri.",
            "Idan kun ga alamomi a kan wani: ku tambaye shi kai tsaye cikin natsuwa, \"Kana tunanin kashe kanka?\" Yin wannan tambayar ba ya sa tunanin a kansa. Ku saurare shi ba tare da yanke masa hukunci ba, ku zauna tare da shi, ku taimaka masa ya sami taimako. Idan wani yana cikin haɗari nan take, ku kira lambar gaggawa (911 a Amurka).",
            "Taimakon gaggawa a Amurka: ku kira ko ku tura tes zuwa 988, ko ku yi hira a 988lifeline.org, don layin 988 Suicide and Crisis Lifeline. Kyauta ne, na sirri, kuma a buɗe yake awa 24 kowace rana, da tes da hira cikin harshen Sifaniyanci. Tsofaffin sojoji, sojoji masu aiki da iyalansu: ku kira 988 ku danna 1, ko ku tura tes zuwa 838255, don layin Veterans Crisis Line; ba sai kun yi rajista da kulawar VA ba. A wajen Amurka, ku kira layin gaggawa na ƙasarku ko lambar gaggawa; ku ajiye ta a wayarku yau.",
            "Ku kuma nemi taimako (daga likitanku ko mai ba da shawara) idan damuwa ko tsoro ba ya tafiya, yana hana ku gudanar da rayuwar yau da kullum, ko yana sa ku guji abubuwan da dole ku yi."
          ],
          steps: ["Ku lura da alamar haɗarin.", "Ku tambaya kai tsaye ku saurara ba tare da yanke hukunci ba.", "Ku zauna tare da mutumin; kada ku bar shi shi kaɗai idan yana cikin haɗari.", "Ku kira ko ku tura tes zuwa 988 tare (tsofaffin sojoji: 988 sannan a danna 1), ko layin gaggawa na gida.", "Haɗari nan take: ku kira 911 ko lambar gaggawarku."],
          words: [["Matsananciyar wahala (crisis)", "lokacin da lafiya ko ƙarfin jurewar wani yake cikin babban haɗari."], ["988 Lifeline", "layin 988 Suicide and Crisis Lifeline na Amurka: ku kira ko ku tura tes zuwa 988 don taimako kyauta, na sirri, a kowane lokaci."]],
          slides: [
            { title: "Alamun haɗari", bullets: ["Magana game da son mutuwa, ko zama nauyi ga wasu", "Jin rashin bege ko kamar an kama mutum a tarko", "Ba da kayayyaki, yin bankwana", "Janyewa daga mutane, ƙara shan giya ko ƙwayoyi"] },
            { title: "Idan kun ga alamomi a kan wani", bullets: ["Ku tambaya kai tsaye cikin natsuwa", "Ku saurara ba tare da yanke hukunci ba", "Ku zauna tare da shi ku haɗa shi da taimako"] },
            { title: "Taimakon gaggawa a Amurka", bullets: ["Ku kira ko ku tura tes zuwa 988, ko hira a 988lifeline.org", "Kyauta, na sirri, awa 24 kowace rana", "Tsofaffin sojoji: 988 sannan a danna 1, ko tes zuwa 838255"] },
            { title: "A wajen Amurka da lokacin gaggawa", bullets: ["Ku ajiye layin gaggawa ko lambar gaggawa ta ƙasarku yanzu", "Haɗari nan take: ku kira 911 ko lambar gaggawarku"] }
          ],
          sources: [
            { name: "988 Suicide and Crisis Lifeline", url: "https://988lifeline.org/" },
            { name: "Veterans Crisis Line", url: "https://www.veteranscrisisline.net/" },
            { name: "National Institute of Mental Health: Warning Signs of Suicide", url: "https://www.nimh.nih.gov/health/publications/warning-signs-of-suicide" }
          ],
          tryIt: "Ku ajiye lambobin gaggawa na inda kuke zaune a wayarku yanzu: a Amurka, 988 (da 988 sannan a danna 1 ga tsofaffin sojoji); a wajen Amurka, layin gaggawa na gida da lambar gaggawa. Sannan ku rubuta ainihin kalmomin da za ku yi amfani da su don tambayar aboki ko yana tunanin kashe kansa.",
          youCanNow: "gane manyan alamun haɗari, tambayar wani kai tsaye, da haɗa shi ko kanku da taimakon gaggawa.",
          quickCheck: [
            { objective: "O5", q: "Wace ce alamar haɗarin kashe kai?", options: ["Shirya bikin ranar haihuwa", "Jin gajiya bayan aiki", "Magana game da zama nauyi ga wasu ko son mutuwa", "Shagaltuwa da sabon aiki"], answer: 2, why: "Magana game da zama nauyi ko son mutuwa babbar alamar haɗari ce." },
            { objective: "O5", q: "Wani abokinku tsohon soja ya gaya muku yana da shirin kashe kansa. Me za ku yi?", options: ["Ku canja batun", "Ku yi alƙawarin ɓoye shi", "Ku bar shi shi kaɗai ya huta", "Ku zauna tare da shi ku kira 988 ku danna 1, ko 911 idan yana cikin haɗari nan take"], answer: 3, why: "Ku zauna tare da shi ku haɗa shi da taimakon gaggawa nan take." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Rubuta tsarin jurewa naku",
          minutes: 5,
          goal: "Rubuta tsari na shafi ɗaya da ke gaya muku abin da za ku yi idan damuwa ta ƙaru.",
          text: [
            "Idan kuna cikin damuwa sosai, yana da wuya ku yi tunani a sarari. Tsarin jurewa gajeren shafi ne da kuke rubutawa lokacin da kuke cikin natsuwa, don ku san abin da za ku yi idan abubuwa sun yi wuya.",
            "Tsarinku yana da sassa shida: alamun damuwarku na farko, ƙwarewar kwantar da hankalinku, al'adunku na yau da kullum, mutanen da za ku iya magana da su, taimakon ƙwararru, da lambobin gaggawa. Ku sa shi gajere kuma da kalmominku.",
            "Ku ajiye tsarin inda za ku iya kai masa: a takarda a walat ko jakarku, da kuma a wayarku. Ku raba shi da mutum ɗaya da kuka amince da shi. Ku sake duba shi bayan 'yan watanni, bayan babban canji kamar sabon aiki, ƙaura, ƙarshen kakar wasa ko dawowa gida."
          ],
          steps: ["Ku rubuta alamun damuwarku na farko guda uku mafi muhimmanci.", "Ku rubuta ƙwarewar kwantar da hankali guda biyu da kuka gwada.", "Ku rubuta al'adun yau da kullum guda biyu da za ku riƙe.", "Ku rubuta mutane biyu da za ku iya magana da su, da yadda za ku same su.", "Ku rubuta wuri ɗaya na taimakon ƙwararru, da lambobin gaggawarku."],
          words: [["Tsarin jurewa (coping plan)", "gajeren tsari a rubuce na abin da za ku yi da wanda za ku kira idan damuwa ta ƙaru."]],
          slides: [
            { title: "Me yasa za a rubuta tsari", bullets: ["Damuwa tana sa tunani ya yi wuya", "Ku rubuta shi lokacin da kuke cikin natsuwa"] },
            { title: "Sassa shida", bullets: ["Alamomi, ƙwarewar kwantar da hankali, al'adun yau da kullum", "Mutane, taimakon ƙwararru, lambobin gaggawa"] },
            { title: "Ku ajiye shi kusa", bullets: ["Kwafi a takarda da kwafi a waya", "Ku raba shi da mutum ɗaya da kuka amince da shi", "Ku sabunta shi bayan manyan canje-canje"] }
          ],
          tryIt: "Aikin ƙarshe: ku rubuta tsarin jurewa naku na shafi ɗaya da dukkan sassa shida, har da 988 (da 988 sannan a danna 1 ga tsofaffin sojoji) ko layin gaggawa na gida. Ku ajiye kwafi a wayarku ku riƙe ɗaya a takarda.",
          youCanNow: "rubuta da amfani da tsarin jurewa naku da ke gaya muku ainihin abin da za ku yi da wanda za ku kira idan damuwa ta ƙaru.",
          quickCheck: [
            { objective: "O6", q: "Wane sashe na tsarin jurewa ne ke zuwa farko don taimaka muku ku ɗauki mataki da wuri?", options: ["Alamun damuwarku na farko", "Abincin da kuka fi so", "Jadawalin aikinku", "Kuɗin da ke asusunku"], answer: 0, why: "Sanin alamunku yana gaya muku lokacin amfani da sauran tsarin." },
            { objective: "O6", q: "Tsarin jurewa naku ya kammala. Me za ku yi da shi?", options: ["Ku jefar da shi bayan karanta shi sau ɗaya", "Ku ajiye shi a takarda da a wayarku, ku raba shi da wanda kuka amince da shi", "Ku saka shi a intanet a fili", "Ku ɓoye shi don kada kowa ya taɓa ganinsa"], answer: 1, why: "Ajiye tsarin kusa da raba shi yana nufin zai kasance a wurin idan kuna buƙata." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Samun taimako da taimakon wasu",
        questions: [
          { objective: "O4", q: "Mece ce hanya mafi kyau ta fara neman taimakon aboki?", options: ["Ku jira har abubuwa sun yi muni sosai", "Ku faɗi abin da ke faruwa a sauƙaƙe da abin da kuke buƙata daga gare shi", "Ku saka shi a intanet ba tare da gaya masa ba", "Ku yi ishara kawai ku yi fatan zai gane"], answer: 1, why: "Kalmomi masu sauƙi da buƙata a sarari suna taimaka wa ɗayan ya taimake ku." },
          { objective: "O5", q: "Wani abokin aiki ya ce yana jin kamar nauyi ne ga wasu kuma yana ta ba da kayayyakinsa. Me ya kamata ku yi?", options: ["Ku canja batun", "Ku ce masa ya yi farin ciki", "Ku tambaye shi kai tsaye ko yana tunanin kashe kansa, ku zauna tare da shi, ku haɗa shi da taimako", "Ku jira wata ɗaya ku ga ko zai wuce"], answer: 2, why: "Waɗannan alamun haɗari ne. Tambaya kai tsaye da haɗa shi da taimako na iya ceton rai." },
          { objective: "O5", q: "A Amurka, ta yaya za ku sami layin 988 Suicide and Crisis Lifeline?", options: ["Ta imel kaɗai", "Ku kira ko ku tura tes zuwa 988, ko hira a 988lifeline.org", "Ziyartar ofishi da kanku", "Kiran 411"], answer: 1, why: "Ana samun 988 ta kira, tes ko hira ta intanet, kyauta kuma awa 24 kowace rana." },
          { objective: "O5", q: "Ta yaya tsohon soja zai sami layin Veterans Crisis Line?", options: ["Ya kira 988 ya danna 1", "Ta ziyartar ofishin VA kaɗai", "Sai idan ya yi rajista da kulawar lafiya ta VA", "Ta tura wasiƙa"], answer: 0, why: "Tsofaffin sojoji suna kiran 988 su danna 1 (ko tes zuwa 838255); ba a buƙatar rajista." },
          { objective: "O6", q: "Wanne ne ya dace a cikin tsarin jurewa?", options: ["Kalmar sirrin bankinku", "Jerin mutanen da kuke fushi da su", "Babu komai; tsari ba ya taimakawa", "Lambobin gaggawarku da mutane biyu da za ku iya magana da su"], answer: 3, why: "Tsarin jurewa yana ƙunshe da alamunku, ƙwarewa, al'adu, mutane, taimakon ƙwararru da lambobin gaggawa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Lafiyar Ƙwaƙwalwa da Sarrafa Damuwa",
    questions: [
      { objective: "O1", q: "Mafi kyawun bayanin damuwa shi ne:", options: ["Koyaushe alamar rauni ce", "Ƙararrawar da jiki da hankali suke yi ga matsi", "Abin da manya kaɗai suke ji", "Cutar da likita kaɗai zai iya gani"], answer: 1, why: "Damuwa amsa ce ta yau da kullum; tana zama matsala idan ta daɗe ko ta yi ƙarfi sosai." },
      { objective: "O1", q: "Wace ce alamar damuwa a tunaninku?", options: ["Damuwar da ke ta maimaituwa", "Ciwon tsoka bayan motsa jiki", "Jin ƙoshi bayan abincin rana", "Ranar da rana take haske"], answer: 0, why: "Damuwa mai maimaituwa da wahalar mai da hankali alamun tunani ne." },
      { objective: "O1", q: "Me yasa za ku koyi alamun damuwarku na farko?", options: ["Don ku ɓoye su", "Don ku ɗauki mataki kafin damuwa ta yi girma", "Don kada ku taɓa jin damuwa", "Don ku gano cutarku da kanku"], answer: 1, why: "Gane alamomi da wuri yana ba ku damar amfani da ƙwarewarku da wuri." },
      { objective: "O2", q: "Ƙirgar numfashin akwati yawanci ita ce:", options: ["Shaƙa 1, fitar 1", "Shaƙa 10, riƙe 30", "Shaƙa 4, riƙe 4, fitar 4, riƙe 4", "Da sauri iyakar yadda za a iya"], answer: 2, why: "Ƙirga huɗu iri ɗaya suna rage saurin numfashinku su kwantar da jikinku." },
      { objective: "O2", q: "Atisayen numfashi yana sa ku jiri. Me ya kamata ku yi?", options: ["Ku ƙara saurin numfashi", "Ku ƙara tsawon riƙe numfashi", "Ku ci gaba ko ta halin ƙaƙa", "Ku tsaya ku yi numfashi kamar yadda kuka saba"], answer: 3, why: "Idan kuna jin jiri, ku tsaya ku yi numfashi kamar yadda kuka saba." },
      { objective: "O2", q: "Dawo da hankali na 5-4-3-2-1 yana amfani da:", options: ["Gaɓoɓin ji guda biyar", "Manhajoji biyar", "Abokai biyar", "Gudu na minti biyar"], answer: 0, why: "Kuna faɗin abubuwan da kuke gani, taɓawa, ji, ji ƙamshinsu da ɗanɗanawa." },
      { objective: "O2", q: "Yaushe ne lokaci mafi kyau na yin atisayen ƙwarewar kwantar da hankali?", options: ["Lokacin gaggawa kaɗai", "Ba a taɓa; suna aiki ba tare da atisaye ba", "Lokacin da kuke cikin natsuwa, don su kasance a shirye daga baya", "Da manhaja ta biya kaɗai"], answer: 2, why: "Atisaye yana sa ƙwarewar ta kasance a shirye idan kuna buƙatarta." },
      { objective: "O3", q: "CDC ta ce matasa masu shekaru 13 zuwa 17 suna buƙatar barci kusan nawa?", options: ["Awa 8 zuwa 10", "Awa 5 zuwa 6", "Awa 4", "Awa 12 zuwa 14"], answer: 0, why: "CDC ta lissafa awa 8 zuwa 10 ga matasa masu shekaru 13 zuwa 17." },
      { objective: "O3", q: "Wace ce shawarar barci ta CDC?", options: ["Shan kofi da daddare", "Canja lokacin kwanciya kowane dare", "Barci da fitilu masu haske a kunne", "Ajiye wayoyi da allo kusan minti 30 kafin barci"], answer: 3, why: "Ajiye allo kafin barci yana taimaka muku ku yi barci." },
      { objective: "O3", q: "Kusan motsa jiki matsakaici nawa CDC ta ba da shawara ga manya kowane mako?", options: ["Minti 10", "Minti 150", "Minti 1,000", "Babu"], answer: 1, why: "Manya suna buƙatar kusan minti 150 na motsa jiki matsakaici a mako, tare da atisayen ƙarfi a kwana 2." },
      { objective: "O4", q: "Neman taimako:", options: ["Alama ce cewa kun gaza", "Na mutanen da ba su da abokai ne kaɗai", "Ƙwarewa ce da mutane masu ƙarfi da ƙungiyoyi suke amfani da ita", "Abu ne da ya kamata a guje masa"], answer: 2, why: "Neman taimako ƙwarewa ce, ba rauni ba ne." },
      { objective: "O4", q: "Me layin SAMHSA National Helpline yake yi?", options: ["Yana tura mutane kyauta, a sirri, zuwa wuraren magani da tallafi na gida", "Yana tura 'yan sanda gidanku", "Yana rubuta takardar magani", "Yana karɓar kuɗi a kowane kira"], answer: 0, why: "Layi ne na kyauta, awa 24, na tura mutane zuwa taimako; shi kansa ba ya ba da shawara (counseling)." },
      { objective: "O4", q: "Idan kuna amfani da mataimakin AI (chatbot) lokacin da kuke cikin damuwa, wanne ne ya fi aminci?", options: ["Ku gaya masa cikakken sunanku, adireshinku da lambar katin shaidarku", "Ku yi amfani da shi don gwada kalmomin magana, ku nemi mutum na gaske a lokacin gaggawa", "Ku ɗauke shi a matsayin therapist ɗinku maimakon ganin kowa", "Ku bi duk shawarar lafiya da ya bayar ba tare da tabbatarwa ba"], answer: 1, why: "AI zai iya taimaka muku ku shirya, amma shi ba mai ba da shawara ba ne; gaggawa tana buƙatar mutum na gaske." },
      { objective: "O5", q: "Wace ce alamar haɗarin kashe kai?", options: ["Shirya bikin ranar haihuwa", "Fara sabon abin sha'awa", "Yin bankwana da ba da muhimman kayayyaki", "Yin barci mai kyau"], answer: 2, why: "Ba da kayayyaki da yin bankwana alamun haɗari ne da NIMH ta lissafa." },
      { objective: "O5", q: "Shin tambayar wani kai tsaye game da kashe kai tana sa tunanin a kansa?", options: ["Eh, koyaushe", "Ga matasa kaɗai", "Ta waya kaɗai", "A'a; tambaya cikin natsuwa tana buɗe ƙofar taimako"], answer: 3, why: "Tambaya kai tsaye cikin natsuwa tana taimaka wa mutum ya yi magana ya sami taimako." },
      { objective: "O5", q: "Wani yana cikin haɗari nan take a Amurka. Me za ku yi?", options: ["Ku saka shi a intanet", "Ku kira 911", "Ku jira har gobe", "Ku tura masa hanyar haɗi zuwa wannan kwas ɗin"], answer: 1, why: "Haɗari nan take yana buƙatar hidimomin gaggawa: 911 a Amurka." },
      { objective: "O5", q: "Kuna zaune a wajen Amurka kuma aboki yana cikin matsananciyar wahala. Me za ku yi?", options: ["Ku kira layin gaggawa na ƙasarku ko lambar gaggawa", "Ku tura tes zuwa 988 daga ƙasar waje ku jira", "Ku ƙyale shi", "Ku nemi AI ya kula da shi"], answer: 0, why: "988 layin Amurka ne; a wajen Amurka ku yi amfani da layin gaggawa na gida ko lambar gaggawa." },
      { objective: "O6", q: "Yaushe ya kamata ku ga likita ko mai ba da shawara game da damuwa, ko da babu gaggawa?", options: ["Ba a taɓa ba", "Sai idan aboki ya gaya muku", "Sau ɗaya a shekara kaɗai", "Idan damuwa ba ta tafiya ko tana hana ku gudanar da rayuwar yau da kullum"], answer: 3, why: "Damuwar da ke daɗewa ko ke hana rayuwar yau da kullum alama ce ta neman taimako." },
      { objective: "O6", q: "A ina ya kamata ku ajiye tsarin jurewa naku?", options: ["A ɓoye inda ba za ku iya samunsa ba", "A kanku kaɗai, ba a rubuce ba", "A takarda da a wayarku, kuma a raba shi da wanda kuka amince da shi", "A rubutun kafar sada zumunta a fili"], answer: 2, why: "Kwafin da ake iya kaiwa da sauƙi suna taimakawa idan damuwa ta sa tunani ya yi wuya." },
      { objective: "O6", q: "Wane sashe na tsarin ne ke gaya muku wanda za ku kira lokacin gaggawa?", options: ["Al'adun yau da kullum", "Ƙwarewar kwantar da hankali", "Alamun damuwa", "Lambobin gaggawa"], answer: 3, why: "Lambobin gaggawa kamar 988, ko layin gaggawa na gida, suna cikin kowane tsari." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [1, 3, 6, 8, 10, 13, 15, 17, 18] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Alamomin farko", objective: "O1", notYet: "Alamomi ƙasa da uku, ko sun yi gama-gari sosai, kamar \"damuwa\".", meets: "Alamomin farko guda uku na mai koyo da kalmominsa.", exceeds: "Alamomin sun fito ne daga rubutun damuwa na gaske, kuma sun shafi jiki, tunani ko ayyuka." },
      { name: "Ƙwarewar kwantar da hankali", objective: "O2", notYet: "An lissafa ƙwarewar kwantar da hankali amma ba a gwada su ba.", meets: "An gwada ƙwarewa biyu, da auna damuwa kafin da bayan.", exceeds: "Ya rubuta lokaci da wurin da kowace ƙwarewa ta fi yi masa aiki." },
      { name: "Al'adun yau da kullum", objective: "O3", notYet: "Al'adun ba su da sarari ko ba su da lokaci.", meets: "Ƙananan al'adu biyu da lokaci ko tunatarwa ga kowanne.", exceeds: "An gwada al'adun aƙalla 'yan kwanaki." },
      { name: "Mutanen tallafi da taimako", objective: "O4", notYet: "Babu mutanen da aka lissafa, ko babu hanyar samunsu.", meets: "Mutane biyu da yadda za a same su, da wuri ɗaya na samun taimakon ƙwararru.", exceeds: "Mai koyo ya riga ya yi magana da ɗaya daga cikinsu." },
      { name: "Lambobin gaggawa", objective: "O5", notYet: "Babu lambobin gaggawa, ko ba su dace da inda yake zaune ba.", meets: "988 (da 988 sannan a danna 1 ga tsofaffin sojoji) ko layin gaggawa na gida da lambar gaggawa suna cikin tsarin kuma an ajiye su a waya.", exceeds: "Ya kuma san kalmomin tambayar aboki kai tsaye game da kashe kai." },
      { name: "An ajiye tsarin kusa", objective: "O6", notYet: "Tsarin ya rasa wasu sassa ko ba a ajiye shi ba.", meets: "Dukkan sassa shida a shafi ɗaya, a ajiye a takarda da a waya.", exceeds: "An raba shi da mutumin da aka amince da shi." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka ce sun yi amfani da ƙwarewar kwantar da hankali ko tsarin jurewarsu cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da ke da lambobin gaggawa a ajiye a wayarsu bayan kwanaki 30",
      "Masu koyo da suka tuntuɓi mutumin tallafi ko ƙwararre cikin kwanaki 30",
      "Masu koyo da suka fara wani kwas na ƙwarewar rayuwa na Koach Learn cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya don ajiye lambobin gaggawa da tsarin",
      "Takarda da alƙalami don rubutun damuwa da tsarin jurewa",
      "Wuri mai shiru don atisayen numfashi",
      "Kusan minti 60 gaba ɗaya, tare da kwana ɗaya don rubutun damuwa"
    ],
    facilitatorNotes: [
      "Ku ba da lambobin gaggawa a farkon kowane zama: 988 a Amurka (988 sannan a danna 1 ga tsofaffin sojoji) ko layin gaggawa na gida da lambar gaggawa.",
      "Ku shirya abin da za a yi idan mai koyo yana cikin damuwa mai tsanani: ku san layin gaggawa na gida da wanda zai iya taimakawa a wurin, kuma kada ku taɓa barin mutumin da ke cikin haɗari shi kaɗai.",
      "Kada ku nemi masu koyo su karanta rubutun damuwarsu ko tsarinsu da babbar murya; raba su zaɓi ne koyaushe.",
      "Ku tunatar da masu koyo cewa wannan kwas ɗin ba ya gano cuta ko ba da magani; ku ƙarfafa su su ga likita ko mai ba da shawara idan damuwa ba ta tafiya.",
      "Ku yi atisayen numfashi da dawo da hankali tare, kuma ku gaya wa masu koyo su tsaya su yi numfashi kamar yadda suka saba idan suna jin jiri."
    ]
  }
};
