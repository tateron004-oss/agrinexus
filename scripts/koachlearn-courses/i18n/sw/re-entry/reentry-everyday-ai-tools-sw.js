"use strict";

// Koach Learn course (Swahili translation of re-entry/reentry-everyday-ai-tools.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "reentry-everyday-ai-tools-sw",
  lang: "sw",
  translationOf: "reentry-everyday-ai-tools",
  category: "Re-Entry",
  name: "Zana za AI za Kila Siku",
  skills: "Kuweka vikumbusho kwa sauti, Kupata maelekezo ya usafiri wa umma, Kusoma na kutafsiri kwa kamera, Kupata msaada wa karibu, Kuandika ujumbe wa kila siku kwa AI, Kutengeneza orodha ya hati",
  outcome: "kutumia zana za AI za bure kwenye simu janja kufika kwenye miadi kwa wakati: kupata maelekezo ya basi au treni, kuweka kikumbusho, kutengeneza orodha ya vitu vya kubeba, na kuandika ujumbe mfupi ukichelewa.",
  about: [
    "Kozi hii ni kwa watu wanaorudi nyumbani wanaotaka kutumia simu janja kushughulikia maisha ya kila siku: miadi, kusafiri, kusoma fomu, kupata msaada na kuwasiliana na watu.",
    "Utatumia zana ambazo ni za bure na tayari ziko kwenye simu nyingi: msaidizi wa sauti, ramani, zana za kamera za kusoma maandishi, na msaidizi wa AI kama ChatGPT, Microsoft Copilot au Google Gemini. Kila mfano unatoka maisha halisi baada ya kutoka gerezani: usaili wa kazi, ofisi za vitambulisho, miadi ya makazi na familia.",
    "Kila somo linachukua kama dakika tano. Soma somo, tazama slaidi, kisha fanya kazi ya \"Jaribu sasa\". Kuna jaribio la maarifa mwishoni mwa kila sura na mtihani wa maswali 20 mwishoni mwa kozi. Huhitaji kamwe kuandika namba ya kesi, namba ya kitambulisho au taarifa yoyote binafsi kufanya kazi hizi."
  ],
  finalTask: "Panga jinsi ya kufika kwenye miadi halisi (usaili wa kazi, ofisi ya vitambulisho au ziara ya makazi): pata maelekezo ya usafiri wa umma au ya kutembea, weka kikumbusho cha wakati wa kuondoka, omba AI orodha ya vitu vya kubeba, na uiombe AI ikusaidie kuandika ujumbe mfupi wa adabu wa kutuma ukichelewa.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima wanaorudi nyumbani kutoka gerezani (kurudi katika jamii) walio na simu janja na wanaohitaji kushughulikia miadi, safari, fomu na ujumbe wao wenyewe. Wengi walikuwa mbali wakati simu na zana za AI zilibadilika.",
    startingPoint: "Wanaweza kupiga simu na kutuma ujumbe mfupi. Wanatumia kidogo wasaidizi wa sauti, ramani, zana za kamera za kusoma au wasaidizi wa AI. Baadhi hawajiamini katika kusoma au katika teknolojia.",
    gap: "Kukosa usaili wa kazi, miadi ya kitambulisho au ziara ya makazi kunaweza kurudisha nyuma mpango mzima wa kurudi katika jamii. Wanafunzi wanahitaji kutumia zana za bure za simu kufika mahali kwa wakati, kusoma karatasi zilizochapishwa, kupata msaada wa karibu na kutuma ujumbe wa adabu, bila kutoa taarifa binafsi.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi (kama darasa la 5 hadi 6)",
      "Vifaa: simu janja, wakati mwingine yenye data kidogo au ya mtindo wa zamani",
      "Muda: masomo ya kama dakika 5 yanayoingia kati ya miadi na kazi",
      "Masharti ya baadhi ya parole au probation yanazuia matumizi ya intaneti; kila mwanafunzi anafuata masharti yake",
      "Faragha: hakuna namba za kesi, namba za vitambulisho wala taarifa nyingine binafsi katika zana yoyote ya AI au kikumbusho"
    ],
    prerequisites: "Kozi \"Utangulizi wa AI na Kujiamini katika Teknolojia\" inasaidia lakini si lazima."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukitumia msaidizi wa sauti wa simu yako", action: "kuweka kikumbusho cha miadi na kikumbusho cha pili cha wakati wa kuondoka", standard: "kwa sauti, kwa kichwa cha jumla bila taarifa binafsi" },
    { id: "O2", condition: "Ukipewa anwani ya mahali halisi", action: "kupata maelekezo ya basi, treni au kutembea kwenye app ya ramani na kujua wakati wa kuondoka", standard: "ukiweka muda wa kufika dakika 10 hadi 15 mapema" },
    { id: "O3", condition: "Ukipewa tangazo lililochapishwa, bango au tangazo la kazi", action: "kutumia kamera ya simu yako kusoma, kunakili au kutafsiri maandishi yake", standard: "ukinakili namba ya simu au anwani kwenye maelezo (note) au kwenye anwani za simu bila kuiandika upya" },
    { id: "O4", condition: "Ukitumia msaidizi wa AI na 211", action: "kupata huduma ya karibu ya makazi, chakula, kazi au usafiri", standard: "ukiwa umeandika programu moja na maelezo yake yamethibitishwa kupitia 211 au tovuti rasmi" },
    { id: "O5", condition: "Ukipewa hali halisi ya kila siku", action: "kuandika ujumbe mfupi wa adabu kwa msaada wa AI", standard: "ulio wa kweli, usio na taarifa binafsi na unaosikika kama wewe" },
    { id: "O6", condition: "Ukipewa miadi halisi", action: "kutengeneza orodha ya vitu vya kubeba kwa msaada wa AI na kuithibitisha na ofisi", standard: "ikiorodhesha majina ya hati tu, na kukaguliwa kwenye tovuti rasmi au kwa simu" }
  ],
  chapters: [
    {
      name: "Sura 1: Simu yako kama msaidizi",
      lessons: [
        {
          objectives: ["O1"],
          title: "Vikumbusho na kengele kwa sauti",
          minutes: 5,
          goal: "Weka kikumbusho cha miadi kwa kuongea na simu yako.",
          text: [
            "Kukosa miadi kunaweza kukugharimu usaili wa kazi, nafasi ya makazi au kuripoti (check-in). Simu yako inaweza kukukumbusha.",
            "Simu nyingi zina msaidizi wa sauti: Siri kwenye iPhone, na Google Assistant au Gemini kwenye Android. Uamshe kwa kusema \"Hey Siri\" au \"Hey Google\", au kwa kubonyeza na kushikilia kitufe cha pembeni au cha nyumbani. Kisha sema: \"Nikumbushe usaili wangu katika Fresh Foods Jumanne saa 3 asubuhi (9 am).\" \"Weka kengele saa 12 na nusu asubuhi (6:30 am) kesho.\"",
            "Weka vikumbusho viwili kwa kila jambo muhimu: kimoja siku moja kabla, na kimoja wakati wa kuondoka. Vichwa vya vikumbusho viwe vya jumla; huhitaji kuweka taarifa binafsi ndani yake."
          ],
          steps: ["Amsha msaidizi wa sauti.", "Sema jambo gani, siku na saa.", "Ongeza kikumbusho cha pili cha wakati wa kuondoka.", "Angalia skrini kuhakikisha kimewekwa."],
          words: [["Msaidizi wa sauti", "msaidizi aliye ndani ya simu yako anayefanya kazi rahisi unapoongea."], ["Kikumbusho", "ujumbe ambao simu yako inakuonyesha kwa saa unayochagua."]],
          slides: [
            { title: "Simu yako inaweza kukukumbusha", bullets: ["Usaili, ofisi ya vitambulisho, ziara za makazi", "Siri, Google Assistant au Gemini"] },
            { title: "Sema hivi", bullets: ["\"Nikumbushe usaili wangu Jumanne saa 3 asubuhi (9 am).\"", "\"Weka kengele saa 12 na nusu asubuhi (6:30 am) kesho.\""] },
            { title: "Vikumbusho viwili kwa mambo makubwa", bullets: ["Kimoja siku moja kabla", "Kimoja wakati wa kuondoka", "Vichwa viwe vya jumla"] }
          ],
          tryIt: "Weka kwa sauti kikumbusho cha miadi halisi, au ya mazoezi, na kikumbusho cha pili cha wakati unaohitaji kuondoka.",
          youCanNow: "kuweka vikumbusho vya miadi na kengele kwa sauti.",
          quickCheck: [
            { objective: "O1", q: "Kichwa kipi kinafaa kwa kikumbusho cha usaili wa kazi?", options: ["Jina lako kamili na tarehe ya kuzaliwa", "Usaili saa 3 asubuhi (9 am)", "Namba yako ya kesi", "Anwani ya nyumbani kwako"], answer: 1, why: "Vichwa vya vikumbusho viwe vya jumla, bila taarifa binafsi." },
            { objective: "O1", q: "Usaili wako ni kesho saa 3 asubuhi (9 am) na basi linachukua dakika 40. Ungefanya nini?", options: ["Kuweka kikumbusho kimoja cha saa 3 asubuhi (9 am)", "Kutumaini utakumbuka asubuhi", "Kuweka kikumbusho cha leo usiku na kimoja cha wakati wa kuondoka", "Kuandika mkononi"], answer: 2, why: "Vikumbusho viwili, siku moja kabla na wakati wa kuondoka, vinakusaidia kufika kwa wakati." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kusafiri kwa ramani na usafiri wa umma",
          minutes: 6,
          goal: "Pata maelekezo ya basi, treni au kutembea na ujue wakati wa kuondoka.",
          text: [
            "Apps za ramani kama Google Maps na Apple Maps zinaonyesha jinsi ya kufika popote kwa basi, treni, kutembea au gari, na muda utakaochukua.",
            "Fungua app ya ramani, andika anwani kwenye kisanduku cha kutafuta, na ubonyeze Directions (Maelekezo). Chagua alama ya basi au treni kwa usafiri wa umma, au alama ya mtu anayetembea. Utaona basi la kupanda, mahali pa kulipanda na saa linapofika. Unaweza pia kuweka saa unayohitaji kufika, na app inakuonyesha wakati wa kuondoka.",
            "Panga kufika dakika 10 hadi 15 mapema. Mabasi yanaweza kuchelewa. Hifadhi anwani unazotembelea mara nyingi, kama nyumbani au kazini, ili ziwe karibu kwa kubonyeza mara moja. Baadhi ya mashirika ya usafiri wa umma pia yana apps zao zenye saa halisi za mabasi."
          ],
          steps: ["Fungua app yako ya ramani.", "Andika anwani na ubonyeze Directions (Maelekezo).", "Chagua usafiri wa umma (basi au treni) au kutembea.", "Weka saa ya kufika uone wakati wa kuondoka.", "Panga kufika dakika 10 hadi 15 mapema."],
          words: [["Usafiri wa umma (transit)", "usafiri wa watu wote kama mabasi na treni."], ["Saa ya kufika", "wakati unaohitaji kuwa umefika."]],
          slides: [
            { title: "Ramani zinajua njia", bullets: ["Google Maps au Apple Maps", "Basi, treni, kutembea au gari"] },
            { title: "Pata maelekezo", bullets: ["Andika anwani, bonyeza Directions (Maelekezo)", "Chagua usafiri wa umma au kutembea", "Ona basi lipi na saa ngapi"] },
            { title: "Fika kwa wakati", bullets: ["Weka saa yako ya kufika", "Fika dakika 10 hadi 15 mapema", "Hifadhi anwani unazotumia mara nyingi"] }
          ],
          tryIt: "Pata maelekezo ya usafiri wa umma au ya kutembea kwenda mahali halisi unapohitaji kwenda, kama American Job Center (kituo cha ajira), DMV (ofisi ya leseni na vitambulisho) au maktaba. Weka saa ya kufika na uandike wakati unaopaswa kuondoka.",
          youCanNow: "kupata maelekezo ya usafiri wa umma na ya kutembea na kujua wakati wa kuondoka.",
          quickCheck: [
            { objective: "O2", q: "Kuweka saa yako ya kufika kwenye app ya ramani kunakuonyesha nini?", options: ["Wakati unaohitaji kuondoka", "Nauli ya basi ni kiasi gani", "Nani mwingine anaenda", "Hali ya hewa ya kesho"], answer: 0, why: "Ukiweka saa ya kufika, app inahesabu wakati unaohitaji kuondoka." },
            { objective: "O2", q: "Unahitaji kufika DMV kwa basi kwa miadi ya saa 4 asubuhi (10 am). Ungefanya nini?", options: ["Kuondoka saa 4 asubuhi (10 am)", "Kupata maelekezo ya usafiri wa umma na kuweka saa ya kufika kama saa 3:45 asubuhi (9:45 am)", "Kuchagua njia ya kutembea tu", "Kumuuliza mtu usiyemjua kituoni"], answer: 1, why: "Maelekezo ya usafiri wa umma pamoja na saa ya kufika mapema yanakusaidia kufika dakika 10 hadi 15 mapema." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kusoma na kutafsiri kwa kamera yako",
          minutes: 5,
          goal: "Tumia kamera ya simu yako kusoma, kunakili au kutafsiri maandishi yaliyochapishwa.",
          text: [
            "Kamera ya simu yako inaweza kusoma maneno yaliyochapishwa. Kwa Google Lens (ndani ya app ya Google na kwenye simu nyingi za Android) au kipengele cha maandishi cha kamera ya iPhone, unaweza kuelekeza kamera kwenye tangazo, bango au fomu na kunakili maandishi, kuyatafuta au kuyatafsiri.",
            "Fungua kamera au Google Lens na uielekeze kwenye maneno. Bonyeza kitufe cha maandishi au maandishi yaliyoangaziwa, kisha chagua Copy (Nakili), Listen (Sikiliza), Translate (Tafsiri) au Search (Tafuta). Hii inasaidia kunakili namba ya simu kutoka kwenye tangazo au kusoma maelekezo yaliyo katika lugha nyingine.",
            "Usichanganue (scan) hati zenye namba binafsi kwenye zana za AI, kama kadi yako ya Social Security au karatasi za mahakama. Tumia zana hizi kwa vitu vya umma kama matangazo, mabango na matangazo ya kazi."
          ],
          steps: ["Fungua kamera au Google Lens.", "Elekeza kwenye maneno yaliyochapishwa.", "Bonyeza kitufe cha maandishi au maneno yaliyoangaziwa.", "Chagua Copy, Listen, Translate au Search.", "Usichanganue hati binafsi."],
          words: [["Google Lens", "zana ya bure ya Google inayotumia kamera yako kusoma, kutafsiri na kutafuta inachokiona."], ["Kutafsiri", "kubadilisha maneno kutoka lugha moja kwenda nyingine."]],
          slides: [
            { title: "Kamera inaweza kusoma", bullets: ["Google Lens au kamera ya iPhone", "Matangazo, mabango, matangazo ya kazi"] },
            { title: "Unachoweza kufanya", bullets: ["Kunakili namba ya simu", "Kusikia maneno yakisomwa kwa sauti", "Kutafsiri au kutafuta"] },
            { title: "Tumia kwa vitu vya umma tu", bullets: ["Usichanganue kadi za Social Security", "Usichanganue karatasi za mahakama wala fomu binafsi"] }
          ],
          tryIt: "Elekeza kamera yako au Google Lens kwenye tangazo, bango au tangazo la kazi. Nakili namba ya simu au anwani kutoka humo kwenye maelezo (note) au kwenye anwani zako za simu.",
          youCanNow: "kutumia kamera yako kunakili, kusikiliza au kutafsiri maandishi yaliyochapishwa.",
          quickCheck: [
            { objective: "O3", q: "Zana ya maandishi ya kamera ya simu yako inaweza kufanya nini na tangazo la kazi lililochapishwa?", options: ["Kukuombea kazi", "Kuchapisha nakala mpya", "Kumpigia mwajiri yenyewe", "Kusoma, kunakili au kutafsiri maandishi"], answer: 3, why: "Zana ya maandishi ya kamera inaweza kusoma, kunakili na kutafsiri maneno yaliyochapishwa." },
            { objective: "O3", q: "Unataka kuchanganua karatasi yenye namba yako ya Social Security kwenye zana ya AI. Ungefanya nini?", options: ["Kuichanganua ili AI iieleze", "Kutoichanganua; namba binafsi hazipaswi kuingia kwenye zana za AI", "Kuchanganua nusu yake tu", "Kuiweka mtandaoni ili upate msaada"], answer: 1, why: "Namba binafsi kama namba yako ya Social Security hazipaswi kamwe kuingia kwenye zana za AI." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Simu yako kama msaidizi",
        questions: [
          { objective: "O1", q: "Njia bora ya kutokosa usaili wa kazi ni ipi?", options: ["Kuandika mkononi", "Kutumaini utakumbuka", "Kuweka kikumbusho siku moja kabla na kimoja cha wakati wa kuondoka", "Kumwomba mtu usiyemjua akukumbushe"], answer: 2, why: "Vikumbusho viwili vinashughulikia kupanga na kuondoka kwa wakati." },
          { objective: "O2", q: "Kwenye app ya ramani, chaguo lipi linaonyesha njia za basi na treni?", options: ["Transit (usafiri wa umma)", "Satellite (setilaiti)", "Traffic (msongamano)", "Settings (mipangilio)"], answer: 0, why: "Transit inaonyesha usafiri wa umma." },
          { objective: "O2", q: "Unapaswa kupanga kufika kwenye miadi mapema kiasi gani?", options: ["Saa moja baadaye", "Kwa wakati kamili", "Dakika 5 baadaye", "Dakika 10 hadi 15 mapema"], answer: 3, why: "Mabasi yanaweza kuchelewa; kufika mapema ni salama zaidi." },
          { objective: "O3", q: "Google Lens inaweza kufanya nini na tangazo?", options: ["Kuchapisha pesa", "Kunakili, kusoma kwa sauti au kutafsiri maandishi yake", "Kupigia familia yako", "Kusaini fomu kwa niaba yako"], answer: 1, why: "Lens inasoma maandishi ambayo kamera inayaona." },
          { objective: "O3", q: "Kipi HUPASWI kuchanganua kwenye zana ya AI?", options: ["Tangazo la kazi", "Kadi yako ya Social Security", "Bango la barabarani", "Ratiba ya mabasi"], answer: 1, why: "Hati binafsi zisiingie kwenye zana za AI." }
        ]
      }
    },
    {
      name: "Sura 2: Kumaliza mambo",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kupata msaada wa karibu",
          minutes: 5,
          goal: "Pata huduma za karibu za makazi, chakula, kazi au usafiri.",
          text: [
            "Msaada upo, lakini kuupata kunaweza kuwa vigumu. 211 ni huduma inayopatikana kote Marekani inayokuunganisha na msaada wa karibu kwa makazi, chakula, usafiri, huduma za afya na mengine. Piga 211, au tafuta 211 ya eneo lako kwenye 211.org. Simu ni za siri na unaweza kutotaja jina lako.",
            "Msaidizi wa AI anaweza kukusaidia kujiandaa: \"Nimerudi nyumbani hivi karibuni na ninaishi Columbus, Ohio. Ni aina gani za huduma za karibu zinazoweza kusaidia kwa makazi, chakula na mafunzo ya kazi? Niulize maswali gani nikipiga 211?\"",
            "AI inaweza kutaja programu zilizofungwa au kutoa namba za simu zisizo sahihi. Kila mara thibitisha na 211, tovuti rasmi ya programu, au msimamizi wako wa kesi wa kurudi katika jamii kabla ya kwenda."
          ],
          steps: ["Uliza AI aina za msaada za kutafuta na cha kuuliza.", "Piga 211 au tafuta kwenye 211.org.", "Andika programu, namba za simu na saa za kazi.", "Thibitisha kwenye tovuti rasmi au kwa simu kabla ya kwenda."],
          words: [["211", "namba ya simu na tovuti inayokuunganisha na msaada wa karibu."], ["Msimamizi wa kesi (case manager)", "mtu anayekusaidia kupanga na kupata huduma."]],
          slides: [
            { title: "Msaada upo", bullets: ["Makazi, chakula, usafiri, huduma za afya", "Piga 211 au tembelea 211.org", "Ni siri; unaweza kutotaja jina lako"] },
            { title: "Jiandae kwa AI", bullets: ["Aina gani za msaada za kutafuta", "Maswali gani ya kuuliza"] },
            { title: "Thibitisha kabla ya kwenda", bullets: ["AI inaweza kutaja programu zilizofungwa", "Kagua na 211 au tovuti rasmi", "Muulize msimamizi wako wa kesi"] }
          ],
          sources: [{ name: "211: About us (Kuhusu sisi)", url: "https://www.211.org/about-us" }],
          tryIt: "Uliza msaidizi wa AI ni aina gani za huduma za karibu zinazoweza kukusaidia sasa hivi na cha kuuliza ukipiga simu. Kisha tafuta 211 ya eneo lako kwenye 211.org na uandike programu moja ya kuwasiliana nayo.",
          youCanNow: "kupata msaada wa karibu na kuuthibitisha kabla ya kwenda.",
          quickCheck: [
            { objective: "O4", q: "211 inaweza kukusaidia kupata nini?", options: ["Msaada wa dharura wa polisi tu", "Nafasi za kazi katika kampuni kubwa tu", "Msaada wa karibu kwa makazi, chakula na mengine", "Rekodi yako ya uhalifu"], answer: 2, why: "211 inaunganisha watu na huduma za karibu kama msaada wa makazi na chakula." },
            { objective: "O4", q: "Msaidizi wa AI anakupa namba ya simu ya benki ya chakula. Ungefanya nini?", options: ["Kuthibitisha namba na 211 au tovuti rasmi", "Kwenda huko mara moja", "Kuwapa marafiki bila kukagua", "Kuuliza AI kama ina uhakika"], answer: 0, why: "AI inaweza kukosea, kwa hiyo unathibitisha maelezo na 211 au chanzo rasmi." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kuandika ujumbe wa kila siku kwa AI",
          minutes: 5,
          goal: "Tumia AI kuandika ujumbe mfupi wa adabu kwa hali halisi.",
          text: [
            "Hali nyingi za kila siku zinahitaji ujumbe: kumwambia mwajiri utachelewa, kumuuliza mwenye nyumba kuhusu nyumba ya kupanga, kumshukuru mtu kwa usaili, au kuwasiliana na familia.",
            "Iambie AI ujumbe ni wa nani, unahitaji kusema nini, na unapaswa kusikika vipi: \"Niandikie ujumbe mfupi wa adabu kwa meneja wa kuajiri. Basi langu limechelewa dakika 10 kwa usaili wangu wa saa 3 asubuhi (9 am). Samahani, na bado ninaipenda kazi hii sana.\"",
            "Usome kwa sauti na ubadilishe chochote kisichosikika kama wewe. Uwe mfupi na wa kweli. Huhitaji kueleza historia yako katika ujumbe wa kila siku."
          ],
          steps: ["Sema ni wa nani.", "Sema unahitaji kusema nini.", "Sema unapaswa kusikika vipi: wa adabu, mfupi, wa kirafiki.", "Usome kwa sauti na uufanye usikike kama wewe."],
          words: [["Wa adabu", "wa heshima na wa upole."], ["Rasimu", "toleo la kwanza unaloweza kubadilisha."]],
          slides: [
            { title: "Ujumbe wa kila siku", bullets: ["Unachelewa", "Kuuliza kuhusu nyumba ya kupanga", "Kumshukuru aliyekufanyia usaili"] },
            { title: "Iambie AI mambo matatu", bullets: ["Ni wa nani", "Unahitaji kusema nini", "Usikike vipi"] },
            { title: "Ufanye uwe wako", bullets: ["Usome kwa sauti", "Mfupi na wa kweli", "Huhitaji kueleza historia yako"] }
          ],
          tryIt: "Muombe msaidizi wa AI akuandikie ujumbe mfupi wa adabu unaomwambia aliyekuitia usaili kwamba basi lako limechelewa. Badilisha jambo moja ili usikike kama wewe.",
          youCanNow: "kuandika ujumbe wa kila siku ulio wazi na wa adabu kwa msaada wa AI.",
          quickCheck: [
            { objective: "O5", q: "Nini kinafanya ujumbe wa kila siku uwe mzuri?", options: ["Mrefu na wenye maelezo mengi ya historia yako", "Mfupi, wa adabu na wa kweli", "Umeandikwa kwa herufi kubwa zote", "Umetumwa bila kusomwa kwanza"], answer: 1, why: "Ujumbe mfupi, wa adabu na wa kweli ni rahisi kusoma na una heshima." },
            { objective: "O5", q: "AI imeandika ujumbe wa kuchelewa wenye maneno ambayo hungeyasema kamwe. Ungefanya nini?", options: ["Kuutuma hivyo hivyo", "Kuiomba AI iurefushe", "Kuufuta na kutotuma chochote", "Kubadilisha maneno ili usikike kama wewe, kisha kuutuma"], answer: 3, why: "Unasoma rasimu za AI na kuzibadilisha ili zisikike kama wewe." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Orodha za kukagua kwa miadi na hati",
          minutes: 5,
          goal: "Omba AI orodha ya vitu vya kubeba, kisha uithibitishe na ofisi.",
          text: [
            "Kufika bila karatasi sahihi kunaweza kumaanisha safari ya pili. Omba AI orodha ya kukagua: \"Ninaenda DMV ya jimbo langu kupata kitambulisho cha jimbo (state ID). Kwa kawaida watu wanahitaji kubeba hati gani? Tengeneza orodha fupi ya kukagua.\"",
            "Kisha thibitisha na ofisi yenyewe. Sheria zinatofautiana kati ya majimbo na zinabadilika baada ya muda, kwa hiyo tovuti rasmi (mara nyingi inaishia na .gov) au simu ndiyo neno la mwisho. Programu yako ya kurudi katika jamii au msimamizi wako wa kesi anaweza pia kukusaidia kupata hati kama cheti cha kuzaliwa.",
            "Hifadhi orodha kwenye maelezo (notes) ya simu yako au kwenye karatasi. Usiandike kamwe namba zako halisi za kitambulisho, namba za kesi au namba ya Social Security kwenye AI; orodha inahitaji majina ya hati tu."
          ],
          steps: ["Uliza AI kinachohitajika kwa kawaida.", "Omba orodha fupi ya kukagua.", "Thibitisha kwenye tovuti rasmi ya ofisi au kwa simu.", "Kusanya karatasi na uziweke alama moja moja.", "Usiandike kamwe namba zako halisi kwenye AI."],
          words: [["Orodha ya kukagua", "orodha ya vitu unavyoviwekea alama kimoja kimoja."], ["Kitambulisho cha jimbo (state ID)", "kadi rasmi ya kitambulisho yenye picha kutoka jimbo lako, kwa watu wasioendesha gari."]],
          slides: [
            { title: "Epuka safari ya pili", bullets: ["Omba AI orodha ya kukagua", "\"Watu kwa kawaida hubeba nini kupata kitambulisho cha jimbo (state ID)?\""] },
            { title: "Thibitisha na ofisi", bullets: ["Sheria zinatofautiana kati ya majimbo", "Tovuti rasmi, mara nyingi .gov, au piga simu", "Muombe msimamizi wako wa kesi msaada"] },
            { title: "Linda namba zako", bullets: ["Orodha inahitaji majina ya hati tu", "Usiandike kamwe namba za kitambulisho au za kesi kwenye AI"] }
          ],
          tryIt: "Kazi ya mwisho: chagua miadi halisi. Pata maelekezo ya usafiri wa umma au ya kutembea, weka kikumbusho cha wakati wa kuondoka, omba AI orodha ya vitu vya kubeba (kisha uithibitishe kwenye tovuti rasmi), na uiombe AI ikusaidie kuandika ujumbe mfupi wa kutuma ukichelewa.",
          youCanNow: "kutumia zana za AI za kila siku kupanga, kujiandaa na kufika kwenye miadi kwa wakati.",
          quickCheck: [
            { objective: "O6", q: "Orodha ya hati inapaswa kuorodhesha nini?", options: ["Majina ya hati unazohitaji", "Namba zako za kitambulisho na za Social Security", "Nywila zako", "Anwani ya nyumbani ya afisa wako wa parole"], answer: 0, why: "Orodha inahitaji majina ya hati, si namba zako binafsi." },
            { objective: "O6", q: "Orodha ya AI ya kwenda kupata kitambulisho cha jimbo inaonekana imekamilika. Ungefanya nini baadaye?", options: ["Kuiamini na kwenda", "Kutobeba kitu cha ziada", "Kuthibitisha orodha kwenye tovuti rasmi ya ofisi au kwa simu", "Kumuuliza rafiki alibeba nini miaka iliyopita"], answer: 2, why: "Ofisi ndiyo yenye neno la mwisho kuhusu cha kubeba." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kumaliza mambo",
        questions: [
          { objective: "O4", q: "Namba gani inakuunganisha na msaada wa karibu kwa makazi, chakula na mengine?", options: ["611", "411", "311 kila mahali", "211"], answer: 3, why: "211 inaunganisha watu na huduma za karibu." },
          { objective: "O4", q: "AI inakupa namba ya simu ya programu. Unafanya nini?", options: ["Kuithibitisha na 211 au tovuti rasmi", "Kuiamini kabisa", "Kuiweka mtandaoni", "Kuipa AI namba yako ya kesi"], answer: 0, why: "AI inaweza kutaja programu zilizofungwa au namba zisizo sahihi." },
          { objective: "O5", q: "Prompt ipi italeta ujumbe mzuri wa \"ninachelewa\"?", options: ["\"nimechelewa\"", "\"ujumbe\"", "\"Niandikie ujumbe mfupi wa adabu kwa meneja wa kuajiri. Basi langu limechelewa dakika 10 kwa usaili wangu wa saa 3 asubuhi (9 am).\"", "\"basi\""], answer: 2, why: "Inasema ni wa nani, nini, na usikike vipi." },
          { objective: "O5", q: "Je, unahitaji kueleza historia yako katika ujumbe wa kila siku?", options: ["Kwa barua pepe tu", "Ndiyo, kila mara", "Kwa wenye nyumba tu", "Hapana; uwe mfupi na wa kweli"], answer: 3, why: "Ujumbe wa kila siku unahitaji jambo kuu tu." },
          { objective: "O6", q: "Nani ana neno la mwisho kuhusu hati za kubeba?", options: ["Rafiki", "AI", "Ofisi yenyewe", "Chapisho la mitandao ya kijamii"], answer: 2, why: "Sheria zinatofautiana kati ya majimbo; ofisi ndiyo inaamua." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Zana za AI za Kila Siku",
    questions: [
      { objective: "O1", q: "Siri na Google Assistant ni:", options: ["Tovuti za kazi", "Wasaidizi wa sauti kwenye simu", "Kampuni za mabasi", "Benki"], answer: 1, why: "Zinafanya kazi rahisi unapoongea." },
      { objective: "O1", q: "Ombi lipi la sauti linaweka kikumbusho chenye manufaa?", options: ["\"Nikumbushe usaili wangu Jumanne saa 3 asubuhi (9 am).\"", "\"Usaili.\"", "\"Jumanne.\"", "\"Habari.\""], answer: 0, why: "Linasema jambo gani, siku na saa." },
      { objective: "O1", q: "Kwa miadi muhimu, weka:", options: ["Vikumbusho viwili: siku moja kabla na wakati wa kuondoka", "Hakuna", "Kimoja mwezi mmoja baadaye", "Kengele kumi ovyo"], answer: 0, why: "Vikumbusho viwili vinashughulikia kupanga na kuondoka." },
      { objective: "O1", q: "Vichwa vya vikumbusho vinapaswa kuwa:", options: ["Vimejaa namba za vitambulisho", "Vya jumla, bila taarifa binafsi", "Namba yako ya kesi", "Nywila yako"], answer: 1, why: "Huhitaji taarifa binafsi katika vikumbusho." },
      { objective: "O2", q: "Kwenye app ya ramani, baada ya kuandika anwani unabonyeza:", options: ["Kamera", "Futa", "Directions (Maelekezo)", "Shiriki nywila"], answer: 2, why: "Directions inaonyesha jinsi ya kufika huko." },
      { objective: "O2", q: "\"Transit\" (usafiri wa umma) maana yake ni:", options: ["Kusafiri kwa ndege", "Kutembea tu", "Teksi tu", "Mabasi na treni"], answer: 3, why: "Transit ni usafiri wa umma." },
      { objective: "O2", q: "Kuweka saa yako ya kufika kwenye app ya ramani kunaonyesha:", options: ["Namba yako ya kitambulisho", "Salio lako la benki", "Wakati unaohitaji kuondoka", "Hali ya hewa tu"], answer: 2, why: "Inahesabu kurudi nyuma kutoka saa yako ya kufika." },
      { objective: "O2", q: "Kuhifadhi anwani unazotumia mara nyingi kunazifanya:", options: ["Ziwe karibu kwa kubonyeza mara moja", "Ziwe namba binafsi", "Zipotee", "Ziwe ghali"], answer: 0, why: "Mahali palipohifadhiwa ni rahisi kufikia haraka." },
      { objective: "O3", q: "Google Lens inaweza:", options: ["Kumpigia afisa wako wa parole", "Kuchukua nafasi ya kitambulisho chako", "Kulipa kodi ya nyumba yako", "Kusoma, kunakili na kutafsiri maandishi yaliyochapishwa"], answer: 3, why: "Lens inasoma kile ambacho kamera inakiona." },
      { objective: "O3", q: "Matumizi mazuri ya zana ya maandishi ya kamera ni:", options: ["Kuchanganua kadi yako ya Social Security kwenye AI", "Kunakili namba ya simu kutoka kwenye tangazo la kazi", "Kuchanganua karatasi za mahakama kwenye AI", "Kupiga picha kadi yako ya benki kwa ajili ya AI"], answer: 1, why: "Maandishi ya umma tu; hati binafsi zisiingie." },
      { objective: "O4", q: "Simu za 211 ni:", options: ["Zinarekodiwa kwa ajili ya umma", "Za siri, na unaweza kutotaja jina lako", "Kwa dharura tu", "Kwa biashara tu"], answer: 1, why: "Simu za 211 ni za siri." },
      { objective: "O4", q: "AI inaweza kusaidia kabla ya kupiga 211 kwa:", options: ["Kukuhakikishia kitanda", "Kujua historia ya kesi yako", "Kukusajili yenyewe", "Kupendekeza aina za msaada za kuulizia"], answer: 3, why: "Inakusaidia kuandaa maswali." },
      { objective: "O4", q: "Msimamizi wa kesi (case manager) ni:", options: ["Mtu anayekusaidia kupanga na kupata huduma", "App ya simu", "Dereva wa basi", "Tovuti"], answer: 0, why: "Wasimamizi wa kesi wanasaidia na mipango ya kurudi katika jamii." },
      { objective: "O5", q: "AI inapokuandikia ujumbe, unapaswa:", options: ["Kuongeza namba yako ya Social Security", "Kuutuma bila kuusoma", "Kuusoma kwa sauti na kuufanya usikike kama wewe", "Kuufanya mrefu sana"], answer: 2, why: "Ujumbe wako unapaswa kusikika kama wewe." },
      { objective: "O5", q: "Ujumbe mzuri wa kila siku ni:", options: ["Umejaa taarifa binafsi", "Mrefu na umejaa visingizio", "Usio na adabu", "Mfupi, wa adabu na wa kweli"], answer: 3, why: "Mfupi na wa kweli unafanya kazi vizuri zaidi." },
      { objective: "O5", q: "\"Rasimu\" ni:", options: ["Pasi ya basi", "Nakala ya mwisho", "Toleo la kwanza unaloweza kubadilisha", "Kitambulisho"], answer: 2, why: "Unaboresha rasimu kabla ya kutuma." },
      { objective: "O6", q: "Kabla ya kwenda kupata kitambulisho cha jimbo, unapaswa:", options: ["Kuamini AI tu", "Kuthibitisha orodha ya hati kwenye tovuti rasmi au kwa simu", "Kutobeba kitu", "Kumuuliza mtu usiyemjua"], answer: 1, why: "Sheria zinatofautiana kati ya majimbo." },
      { objective: "O6", q: "Tovuti rasmi za serikali ya Marekani mara nyingi zinaishia na:", options: [".gov", ".win", ".gift", ".xyz"], answer: 0, why: ".gov inatumiwa na ofisi za serikali." },
      { objective: "O6", q: "Orodha ya hati inahitaji nini?", options: ["Majina ya hati, si namba zako", "Namba zako halisi za kitambulisho", "Namba yako ya kesi", "Namba yako ya Social Security"], answer: 0, why: "Majina ya hati yanatosha." },
      { objective: "O6", q: "Kitambulisho cha jimbo (state ID) ni:", options: ["Tiketi ya basi", "Kadi rasmi ya kitambulisho yenye picha kutoka jimbo lako", "Kadi ya maktaba", "App ya simu"], answer: 1, why: "Ni kitambulisho rasmi chenye picha kwa wasioendesha gari na wengine." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [1, 3, 4, 6, 8, 10, 13, 16, 18] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Maelekezo", objective: "O2", notYet: "Hakuna maelekezo, au hajui wakati wa kuondoka.", meets: "Maelekezo ya usafiri wa umma au ya kutembea yenye saa ya kufika mapema, na wakati wa kuondoka umeandikwa.", exceeds: "Pia ana njia mbadala au anwani imehifadhiwa kwa kubonyeza mara moja." },
      { name: "Kikumbusho cha kuondoka", objective: "O1", notYet: "Hakuna kikumbusho, au kikumbusho chenye taarifa binafsi kwenye kichwa.", meets: "Kikumbusho kimewekwa cha wakati wa kuondoka, chenye kichwa cha jumla.", exceeds: "Pia aliweka kikumbusho siku moja kabla." },
      { name: "Orodha imethibitishwa", objective: "O6", notYet: "Hakuna orodha, au orodha yenye namba binafsi, au haijathibitishwa.", meets: "Orodha ya majina ya hati, imethibitishwa kwenye tovuti rasmi au kwa simu.", exceeds: "Anaweza kusema alithibitisha wapi na nini kilibadilika kutoka orodha ya AI." },
      { name: "Ujumbe wa kuchelewa", objective: "O5", notYet: "Hakuna ujumbe, au ujumbe mrefu, usio na adabu au wenye taarifa binafsi.", meets: "Ujumbe mfupi, wa adabu na wa kweli, tayari kutumwa.", exceeds: "Mwanafunzi alibadilisha baadhi ya maneno ili usikike kama yeye." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaoripoti kufika kwenye miadi kwa wakati wakitumia zana hizi ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi wanaowasiliana na huduma ya karibu waliyoipata kupitia 211 ndani ya siku 30",
      "Washirika wa kurudi katika jamii wanaripoti miadi michache iliyokosekana"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu janja yenye intaneti na app ya ramani",
      "Msaidizi wa AI wa bure: Microsoft Copilot, ChatGPT au Google Gemini",
      "Tangazo lililochapishwa au tangazo la kazi la kufanyia mazoezi kwa kamera",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Waombe wanafunzi walete miadi halisi inayokuja ili kazi ya mwisho iwe na manufaa mara moja.",
      "Usiwaombe wanafunzi kamwe kuandika au kuchanganua namba halisi za kitambulisho, za kesi au za Social Security; tumia majina ya hati tu.",
      "Pitieni 211.org pamoja ili kila mmoja apate 211 ya eneo lake.",
      "Wakumbushe wanafunzi walio kwenye parole au probation kufuata masharti yoyote kuhusu matumizi ya intaneti au simu.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
