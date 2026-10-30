"use strict";

// Koach Learn course (Swahili translation of shared/telemedicine-portal.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "telemedicine-portal-sw",
  lang: "sw",
  translationOf: "telemedicine-portal",
  category: "Seniors and Technology",
  name: "Kutumia Tiba kwa Video na Tovuti ya Mgonjwa",
  skills: "Kuingia kwenye tovuti ya mgonjwa, Kusoma majibu ya vipimo na maelezo ya ziara, Kutuma ujumbe kwa timu yako ya matibabu, Kuomba dawa zaidi na miadi, Kujiunga na ziara ya video",
  outcome: "kuingia kwenye tovuti yako ya mgonjwa, kupata majibu ya vipimo na maelezo ya ziara, kutuma ujumbe ulio wazi kwa timu yako ya matibabu, kuomba dawa zaidi au miadi, na kujiunga na ziara ya video ukiwa umejiandaa na maswali yako.",
  about: [
    "Kliniki na hospitali nyingi sasa zina tovuti ya mgonjwa (patient portal): tovuti au app salama ambapo unaona taarifa zako za afya na kuzungumza na timu yako ya matibabu. Nyingi pia zinatoa ziara za video, zinazoitwa pia telemedicine au telehealth, ili umwone daktari au muuguzi bila kusafiri.",
    "Kozi hii inakuonyesha jinsi ya kuingia kwenye tovuti yako, kusoma majibu, kutuma ujumbe, kuomba dawa zaidi na miadi, na kujiandaa na kujiunga na ziara ya video.",
    "Kila somo linachukua kama dakika tano. Soma somo, tazama slaidi, kisha fanya kazi ya \"Jaribu sasa\". Kuna jaribio fupi la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni. Kozi hii inafundisha jinsi ya kutumia zana hizi; kwa maswali kuhusu afya yako mwenyewe, muulize daktari, muuguzi au mfamasia wako kila wakati. Katika dharura, piga 911, si tovuti."
  ],
  finalTask: "Ingia kwenye tovuti yako ya mgonjwa. Tafuta jibu moja la kipimo au muhtasari wa ziara, kisha andika (na utume, ikiwa una swali la kweli) ujumbe mfupi na ulio wazi kwa timu yako ya matibabu wenye swali lako. Tafuta mahali pa kuomba dawa zaidi au miadi. Mwisho, andika orodha ya maswali matatu na dawa unazotumia sasa kwa ziara yako ijayo, na utafute mahali kwenye tovuti au barua pepe ambapo kiungo cha ziara ya video kitaonekana.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wagonjwa na walezi wanaotumia kliniki, hospitali au mipango ya bima ya afya nchini Marekani: wazee, watu wenye magonjwa ya muda mrefu, walezi wanaomsaidia ndugu, watu wanaorudi katika jamii, na yeyote ambaye kliniki yake sasa inatuma majibu na viungo vya ziara mtandaoni.",
    startingPoint: "Wanaweza kutumia simu au kompyuta kufungua apps na tovuti na kuandika ujumbe mfupi. Wengi wamepewa msimbo wa kuamilisha tovuti lakini hawajawahi kuingia, wanaogopa majibu wanayoyaona mtandaoni, na hawajawahi kujiunga na ziara ya video.",
    gap: "Kliniki sasa zinatoa majibu, maelezo ya ziara, dawa zaidi, miadi na ziara za video kupitia tovuti za wagonjwa. Wagonjwa wasioweza kuzitumia wanasubiri muda mrefu zaidi, wanakosa majibu na ujumbe, wanaishiwa na dawa au wanakosa ziara za video, na baadhi wanatuma taarifa za siri za afya kwa njia zisizo salama.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; maneno kama kiwango cha kawaida, msimbo wa kuamilisha na eCheck-in yanaelezwa",
      "Vifaa: simu, tableti au kompyuta yenye kamera na maikrofoni kwa ziara za video",
      "Muda: kama dakika 5 kwa somo, kama dakika 60 kwa jumla",
      "Si ushauri wa kitabibu: maswali ya afya yanaenda kwa daktari, muuguzi au mfamasia wa mwanafunzi mwenyewe; dharura zinaenda 911",
      "Faragha: wanafunzi hawaandiki kamwe jina lao, tarehe ya kuzaliwa au namba za rekodi kwenye zana ya AI, na hawatumi taarifa za afya kwa barua pepe ya kawaida au SMS"
    ],
    prerequisites: "Hakuna. Kozi \"Barua Pepe na Mawasiliano Mtandaoni\" inawasaidia wanafunzi ambao bado hawana akaunti ya barua pepe."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa msimbo wa kuamilisha au kiungo rasmi cha kujiandikisha cha kliniki yako", action: "kufungua akaunti yako ya tovuti ya mgonjwa na kuingia kwa usalama", standard: "ukitumia tovuti au app rasmi, nywila usiyoitumia mahali pengine, na uthibitishaji wa hatua mbili ikiwa unatolewa" },
    { id: "O2", condition: "Ndani ya tovuti yako ya mgonjwa", action: "kupata jibu la kipimo na muhtasari wa ziara na kuandika swali lolote kuhusu hayo", standard: "ukisoma jibu pamoja na kiwango chake cha kawaida na kupeleka maswali kwa timu yako ya matibabu badala ya kubahatisha" },
    { id: "O3", condition: "Ukiwa na swali la afya lisilo la dharura", action: "kuandika ujumbe mfupi na ulio wazi kwenye tovuti kwa timu yako ya matibabu", standard: "wenye swali lako na maelezo yanayosaidia, na jambo lolote la dharura likipelekwa 911 badala yake" },
    { id: "O4", condition: "Ndani ya tovuti yako ya mgonjwa", action: "kuomba dawa zaidi na kupata mahali pa kupanga au kubadilisha miadi", standard: "ukiomba dawa siku chache kabla hazijaisha na ukipiga simu kliniki tovuti isipoweza kufanya hivyo" },
    { id: "O5", condition: "Siku moja kabla ya ziara ya video", action: "kuandaa kifaa chako, mahali pako, maswali yako na orodha ya dawa", standard: "kifaa kikiwa na chaji, kamera na maikrofoni zikiwa zimejaribiwa, na orodha iliyoandikwa ikiwa tayari" },
    { id: "O6", condition: "Siku ya ziara ya video", action: "kujiunga kwa wakati, kuongea kwa uwazi na kurudia mpango kabla ya kukata simu", standard: "ukijiunga dakika 10 hadi 15 mapema na kukagua muhtasari wa ziara baadaye" }
  ],
  chapters: [
    {
      name: "Sura 1: Tovuti yako ya mgonjwa",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kuingia kwenye tovuti yako ya mgonjwa",
          minutes: 5,
          goal: "Fungua akaunti yako ya tovuti na uingie kwa usalama.",
          text: [
            "Tovuti ya mgonjwa ni tovuti au app salama kutoka kliniki, hospitali au mpango wako wa bima ya afya. Inayojulikana sana ni MyChart, inayotumiwa na mifumo mingi ya afya, lakini tovuti ya kliniki yako inaweza kuwa na jina jingine. Uliza dawati la mapokezi wanatumia tovuti ipi.",
            "Ili kujiunga, kwa kawaida unahitaji msimbo wa kuamilisha kutoka kliniki (umechapishwa kwenye muhtasari wa ziara au umetumwa kwa SMS au barua pepe), au unajiandikisha kwa jina lako, tarehe ya kuzaliwa na msimbo unaotumwa kwenye simu yako. Tumia kiungo kilicho kwenye tovuti rasmi ya kliniki yako au app rasmi kutoka duka la apps.",
            "Chagua nywila imara usiyoitumia mahali pengine popote, na uwashe uthibitishaji wa hatua mbili ikiwa unatolewa. Usiingie kwenye kompyuta ya pamoja isipokuwa utatoka (sign out) na kufunga kivinjari baadaye."
          ],
          steps: ["Uliza kliniki yako inatumia tovuti ipi.", "Pata msimbo wa kuamilisha au kiungo cha kujiandikisha kutoka kliniki.", "Tumia tovuti rasmi ya kliniki au app rasmi.", "Tengeneza nywila imara ya kipekee.", "Washa uthibitishaji wa hatua mbili ikiwa unatolewa.", "Kwenye kompyuta ya pamoja: toka na ufunge kivinjari."],
          words: [["Tovuti ya mgonjwa (patient portal)", "tovuti au app salama ambapo unaona taarifa zako za afya na kuwasiliana na timu yako ya matibabu."], ["Msimbo wa kuamilisha (activation code)", "msimbo wa mara moja kutoka kliniki yako unaounganisha akaunti yako ya tovuti na rekodi zako."], ["Timu ya matibabu", "daktari wako, wauguzi na wafanyakazi wengine wanaoshughulikia afya yako."]],
          slides: [
            { title: "Tovuti ya mgonjwa ni nini", bullets: ["Tovuti au app salama kutoka kliniki au mpango wako", "MyChart inajulikana sana; uliza kliniki yako ni ipi"] },
            { title: "Kujiandikisha", bullets: ["Msimbo wa kuamilisha kutoka kliniki", "Tovuti au app rasmi tu"] },
            { title: "Iweke salama", bullets: ["Nywila imara ya kipekee", "Uthibitishaji wa hatua mbili", "Toka kwenye kompyuta za pamoja"] }
          ],
          tryIt: "Tafuta tovuti ya mgonjwa ya kliniki yako kupitia tovuti yake rasmi au uliza dawati la mapokezi. Fungua akaunti yako au uingie, kisha toka na uingie tena ili uhakikishe unaweza kufanya hivyo peke yako.",
          youCanNow: "kupata tovuti ya mgonjwa ya kliniki yako, kufungua akaunti yako na kuingia kwa usalama.",
          quickCheck: [
            { objective: "O1", q: "Nani anaweza kukuambia kliniki yako inatumia tovuti ipi ya mgonjwa?", options: ["Tangazo kwenye injini ya utafutaji", "Mgeni mtandaoni", "Benki yako", "Dawati la mapokezi la kliniki"], answer: 3, why: "Uliza dawati la mapokezi kliniki inatumia tovuti ipi." },
            { objective: "O1", q: "Uliingia kwenye tovuti yako kwenye kompyuta ya maktaba. Utafanya nini ukimaliza?", options: ["Kuacha ukurasa wazi kwa ajili ya baadaye", "Kutoka na kufunga kivinjari", "Kuhifadhi nywila yako kwenye kivinjari", "Kuandika nywila yako mezani"], answer: 1, why: "Kwenye kompyuta ya pamoja, toka na ufunge kivinjari baadaye." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kusoma majibu ya vipimo na maelezo ya ziara",
          minutes: 5,
          goal: "Pata jibu la kipimo na muhtasari wa ziara kwenye tovuti yako.",
          text: [
            "Tovuti zina sehemu kama Test Results (majibu ya vipimo), Visits au Appointments (ziara au miadi), Medications (dawa) na Health Summary (muhtasari wa afya). Majibu mara nyingi yanaonyesha namba yako karibu na kiwango cha kawaida (reference range). Jibu lililo nje ya kiwango mara nyingi linawekewa alama, lakini si kila wakati maana yake kuna tatizo.",
            "Unaweza kuona jibu kabla daktari wako hajazungumza nawe kuhusu jibu hilo. Usiogope, na usibahatishe. Andika swali lako na uiulize timu yako ya matibabu. Zana ya AI inaweza kusaidia kueleza neno la kitabibu kwa lugha rahisi, lakini usiandike kamwe jina lako, tarehe ya kuzaliwa au namba za rekodi ndani yake, na ukague jibu lake na timu yako ya matibabu.",
            "HealthIT.gov (tovuti ya serikali ya Marekani) inaeleza kwamba, chini ya Kanuni ya Faragha ya HIPAA, una haki ya kuona na kupata nakala ya rekodi yako ya afya, pamoja na nakala za kielektroniki, hata kama hujalipa bili zako za matibabu."
          ],
          steps: ["Fungua Test Results au Results.", "Gusa jibu ili uone namba yako na kiwango cha kawaida.", "Fungua Visits ili usome muhtasari wa ziara yako.", "Andika neno au jibu lolote usilolielewa.", "Iulize timu yako ya matibabu; usibahatishe."],
          words: [["Kiwango cha kawaida (reference range)", "kiwango cha kawaida cha majibu kwa watu wenye afya njema."], ["Muhtasari wa ziara (visit summary)", "maelezo kutoka miadi yako, kama mpango wako na dawa zako."], ["HIPAA", "sheria ya Marekani inayolinda taarifa zako za afya na kukupa haki ya kuona rekodi zako."]],
          slides: [
            { title: "Sehemu za tovuti", bullets: ["Test Results (majibu ya vipimo)", "Visits au Appointments (ziara au miadi)", "Medications (dawa)", "Health Summary (muhtasari wa afya)"] },
            { title: "Kusoma jibu", bullets: ["Namba yako karibu na kiwango cha kawaida", "Nje ya kiwango si tatizo kila wakati", "Uliza; usibahatishe"] },
            { title: "Kutumia AI kueleza maneno", bullets: ["Sawa kwa neno la kitabibu kwa lugha rahisi", "Usiandike kamwe jina, tarehe ya kuzaliwa au namba za rekodi", "Kagua na timu yako ya matibabu"] },
            { title: "Haki yako ya kupata rekodi zako", bullets: ["Kuona na kupata nakala, pamoja na nakala za kielektroniki", "Hata kama una bili za matibabu ambazo hujalipa"] }
          ],
          sources: [{ name: "HealthIT.gov: Jinsi ya kupata rekodi yako ya afya", url: "https://www.healthit.gov/how-to-get-your-health-record/" }],
          tryIt: "Kwenye tovuti yako, fungua jibu moja la kipimo au muhtasari wa ziara. Andika neno moja au namba moja ambayo ungependa uelezwe, ili uiulize timu yako ya matibabu.",
          youCanNow: "kupata na kusoma jibu la kipimo na muhtasari wa ziara, na kujua wakati wa kuiuliza timu yako ya matibabu.",
          quickCheck: [
            { objective: "O2", q: "Jibu lililo nje ya kiwango cha kawaida lina maana gani?", options: ["Si tatizo kila wakati; iulize timu yako ya matibabu", "Hakika una ugonjwa mbaya", "Kipimo kilifanywa vibaya", "Unapaswa kuacha dawa zako zote"], answer: 0, why: "Jibu lenye alama si kila wakati lina maana kuna tatizo; iulize timu yako ya matibabu." },
            { objective: "O2", q: "Daktari wako bado hajaona majibu yako mapya na una wasiwasi. Utafanya nini?", options: ["Kubahatisha maana yake kutoka kwenye jukwaa la mtandaoni", "Kuandika jina lako na namba ya rekodi kwenye zana ya AI", "Kuandika swali lako na kuiuliza timu yako ya matibabu", "Kubadilisha dawa zako mwenyewe"], answer: 2, why: "Usiogope wala usibahatishe; andika swali lako na uiulize timu yako ya matibabu." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kutuma ujumbe kwa timu yako ya matibabu",
          minutes: 5,
          goal: "Tuma ujumbe mfupi na ulio wazi kwa timu yako ya matibabu kupitia tovuti.",
          text: [
            "Tovuti nyingi zina sehemu ya Messages (ujumbe) kwa maswali yasiyo ya dharura, kama swali kuhusu dawa, fomu au jibu la kipimo. Majibu yanaweza kuchukua siku moja au zaidi, kwa hiyo usitumie ujumbe kwa jambo lolote la dharura. Katika dharura, piga 911.",
            "Ujumbe mzuri ni mfupi. Sema ni kwa nani, swali lako, na maelezo yoyote yanayosaidia: lilianza lini, umejaribu nini, na unahitaji nini. Kwa mfano: \"Tangu Jumatatu nasikia kizunguzungu baada ya kumeza kidonge changu kipya cha shinikizo la damu asubuhi. Je, nikimeze usiku badala yake?\"",
            "Baadhi ya kliniki zinaweza kuitoza bima yako kwa ujumbe unaohitaji ushauri wa kitabibu. Uliza kliniki yako ikiwa huna uhakika. Ujumbe ndani ya tovuti ni salama; usitume taarifa za afya kwa barua pepe ya kawaida au SMS badala yake."
          ],
          steps: ["Fungua Messages na uchague New message (ujumbe mpya).", "Chagua ni kwa nani au mada.", "Andika swali lako, lilianza lini na unahitaji nini.", "Usome mara moja na utume.", "Angalia tovuti au barua pepe yako kwa jibu.", "Ni haraka? Piga simu kliniki. Dharura? Piga 911."],
          words: [["Ujumbe salama (secure message)", "ujumbe wa faragha unaotumwa ndani ya tovuti."], ["Lisilo la dharura", "linaweza kusubiri jibu kwa siku moja au mbili bila hatari."]],
          slides: [
            { title: "Ujumbe ni kwa maswali yasiyo ya dharura", bullets: ["Dawa, fomu, majibu ya vipimo", "Majibu yanaweza kuchukua siku moja au zaidi", "Dharura: piga 911"] },
            { title: "Ujumbe ulio wazi", bullets: ["Ni kwa nani na swali lako", "Lilianza lini na umejaribu nini", "Unahitaji nini"] },
            { title: "Ni vizuri kujua", bullets: ["Baadhi ya kliniki zinaweza kutoza kwa ujumbe wa ushauri", "Tumia tovuti, si barua pepe ya kawaida au SMS"] }
          ],
          tryIt: "Fungua Messages kwenye tovuti yako na uandike rasimu ya ujumbe mfupi ukitumia sehemu hizo tatu. Ikiwa una swali la kweli lisilo la dharura, ulitume; kama huna, futa rasimu.",
          youCanNow: "kuandika na kutuma ujumbe ulio wazi usio wa dharura kwa timu yako ya matibabu, na kujua wakati wa kupiga simu badala yake.",
          quickCheck: [
            { objective: "O3", q: "Kwa nini ujumbe wa tovuti haupaswi kutumiwa kwa matatizo ya dharura?", options: ["Ujumbe si salama", "Ujumbe husomwa na roboti kila wakati", "Majibu yanaweza kuchukua siku moja au zaidi", "Ujumbe unagharimu pesa kila mara"], answer: 2, why: "Majibu yanaweza kuchukua siku moja au zaidi, kwa hiyo dharura zinahitaji 911." },
            { objective: "O3", q: "Una swali kuhusu fomu uliyopewa na kliniki yako. Utafanya nini?", options: ["Kutuma ujumbe mfupi kwenye tovuti ukisema ni fomu gani na unahitaji nini", "Kutuma taarifa zako za afya kwa barua pepe ya kawaida", "Kupiga 911", "Kuweka swali kwenye mitandao ya kijamii"], answer: 0, why: "Maswali yasiyo ya dharura yanaenda katika ujumbe mfupi na ulio wazi kwenye tovuti." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Tovuti yako ya mgonjwa",
        questions: [
          { objective: "O1", q: "Tovuti ya mgonjwa ni nini?", options: ["App ya mitandao ya kijamii", "Tovuti au app salama ya kuona taarifa zako za afya na kuwasiliana na timu yako ya matibabu", "Duka la dawa", "Ofisi ya serikali ya misaada"], answer: 1, why: "Tovuti hizi zinakupa njia salama ya kupata rekodi zako na timu yako ya matibabu." },
          { objective: "O1", q: "Unapaswa kupata wapi kiungo cha kujiandikisha kwenye tovuti yako?", options: ["SMS kutoka kwa mgeni", "Tangazo la utafutaji", "Tovuti rasmi ya kliniki yako au dawati la mapokezi", "Chapisho kwenye mitandao ya kijamii"], answer: 2, why: "Vyanzo rasmi vinakuweka mbali na tovuti bandia." },
          { objective: "O2", q: "Jibu la kipimo liko nje ya kiwango cha kawaida na daktari wako bado hajapiga simu. Unafanya nini?", options: ["Kuandika swali lako na kuiuliza timu yako ya matibabu", "Kuogopa sana", "Kuacha dawa zako zote", "Kuliweka kwenye mitandao ya kijamii"], answer: 0, why: "Jibu lenye alama si tatizo kila wakati; iulize timu yako ya matibabu." },
          { objective: "O2", q: "Unataka zana ya AI ikueleze neno la kitabibu. Unapaswa kuacha nini nje?", options: ["Neno la kitabibu", "Maneno \"eleza kwa urahisi\"", "Ombi la mfano", "Jina lako, tarehe ya kuzaliwa na namba za rekodi"], answer: 3, why: "Usiweke kamwe taarifa za siri zinazokutambulisha kiafya kwenye zana za AI." },
          { objective: "O3", q: "Ghafla unasikia maumivu ya kifua. Unafanya nini?", options: ["Kutuma ujumbe kwenye tovuti", "Kupiga 911", "Kusubiri ziara ya video wiki ijayo", "Kusoma majibu yako ya zamani"], answer: 1, why: "Tovuti ni kwa maswali yasiyo ya dharura; dharura zinahitaji 911." }
        ]
      }
    },
    {
      name: "Sura 2: Dawa zaidi, miadi na ziara za video",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuomba dawa zaidi na kupanga miadi",
          minutes: 4,
          goal: "Omba dawa zaidi na upate mahali pa kupanga au kubadilisha miadi.",
          text: [
            "Katika sehemu ya Medications, tovuti nyingi zinaonyesha kitufe cha Request refill (omba dawa zaidi) karibu na kila dawa. Chagua dawa na duka lako la dawa, kisha utume. Omba siku chache kabla dawa hazijaisha, kwa sababu kliniki na duka la dawa wanahitaji muda.",
            "Katika sehemu ya Appointments au Visits, mara nyingi unaweza kuona ziara zijazo, kupanga aina fulani za ziara, kughairi, au kuingia kwenye orodha ya kusubiri. Baadhi ya miadi lazima ipangwe kwa simu; tovuti itakuambia hivyo.",
            "Duka lako la dawa linaweza kuwa na app yake inayokuambia dawa zako zikiwa tayari. Kitu kisipofanya kazi kwenye tovuti, piga simu kliniki; hilo ni sawa kila wakati."
          ],
          steps: ["Fungua Medications.", "Gusa Request refill karibu na dawa.", "Chagua duka lako la dawa na utume.", "Omba siku chache kabla dawa hazijaisha.", "Fungua Appointments ili kuona, kupanga, kubadilisha au kughairi ziara."],
          words: [["Dawa zaidi (refill)", "kiasi kingine cha dawa unayotumia tayari."], ["Orodha ya kusubiri (waitlist)", "orodha inayokupa muda wa mapema zaidi mtu akighairi."]],
          slides: [
            { title: "Dawa zaidi", bullets: ["Sehemu ya Medications", "Request refill, chagua duka la dawa, tuma", "Omba siku chache kabla dawa hazijaisha"] },
            { title: "Miadi", bullets: ["Ona ziara zijazo", "Panga, badilisha au ghairi baadhi ya ziara", "Baadhi bado zinahitaji simu"] },
            { title: "Isipofanya kazi", bullets: ["Piga simu kliniki", "Hilo ni sawa kila wakati"] }
          ],
          tryIt: "Fungua sehemu ya Medications kwenye tovuti yako na upate kitufe cha kuomba dawa zaidi (tuma ombi tu ikiwa unahitaji). Kisha fungua Appointments na upate ziara yako ijayo au mahali pa kupanga moja.",
          youCanNow: "kuomba dawa zaidi na kupata, kupanga au kubadilisha miadi kwenye tovuti yako.",
          quickCheck: [
            { objective: "O4", q: "Tovuti nyingi zinaonyesha wapi kitufe cha Request refill?", options: ["Katika sehemu ya Test Results", "Karibu na kila dawa katika sehemu ya Medications", "Katika sanduku la Messages", "Kwenye ukurasa wa kuingia"], answer: 1, why: "Tovuti nyingi zinaweka kitufe cha dawa zaidi karibu na kila dawa." },
            { objective: "O4", q: "Kitufe cha dawa zaidi kwenye tovuti hakifanyi kazi kwa dawa yako moja. Utafanya nini?", options: ["Kuacha kutumia dawa hiyo", "Kusubiri hadi iishe", "Kuagiza dawa kutoka tangazo la tovuti", "Kupiga simu kliniki"], answer: 3, why: "Kitu kisipofanya kazi kwenye tovuti, kupiga simu kliniki ni sawa kila wakati." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kujiandaa kwa ziara ya video",
          minutes: 5,
          goal: "Andaa kifaa chako, mahali pako na maswali yako kabla ya ziara ya video.",
          text: [
            "Ziara ya video (inayoitwa pia telemedicine au telehealth) inakuwezesha kumwona daktari, muuguzi au mshauri kwenye simu, tableti au kompyuta yako. Inafaa kwa ziara nyingi za ufuatiliaji, ukaguzi wa dawa, ziara za afya ya akili na matatizo madogo. Baadhi ya matatizo bado yanahitaji uchunguzi wa ana kwa ana, na timu yako ya matibabu itakuambia.",
            "Jiandae siku moja kabla: chaji kifaa chako, hakikisha app ya tovuti au app ya video imesakinishwa, na ujaribu kamera na maikrofoni yako. Tovuti nyingi zina kitufe cha kujaribu au eCheck-in unayoweza kufanya mapema.",
            "Tafuta mahali tulivu, pa faragha na penye mwanga mzuri. Andika maswali yako, dalili zako na zilianza lini, na orodha ya dawa zako. Weka karibu miwani yako, chupa za vidonge na, ikisaidia, kipimo cha shinikizo la damu au kipimajoto. Mwanafamilia au mlezi anaweza kujiunga kukusaidia ukipenda."
          ],
          steps: ["Chaji kifaa chako na uhakikishe app imesakinishwa.", "Jaribu kamera na maikrofoni.", "Fanya eCheck-in yoyote kwenye tovuti.", "Chagua mahali tulivu, pa faragha na penye mwanga mzuri.", "Andika maswali yako, dalili na dawa.", "Weka chupa za vidonge na miwani karibu."],
          words: [["Telemedicine au telehealth", "kuonana na timu yako ya matibabu kwa video au simu badala ya ana kwa ana."], ["eCheck-in", "kujaza fomu kwenye tovuti kabla ya ziara yako."]],
          slides: [
            { title: "Ziara ya video ni nini", bullets: ["Kuiona timu yako ya matibabu kwenye skrini", "Inafaa kwa ufuatiliaji, ukaguzi wa dawa, ushauri nasaha", "Baadhi ya matatizo bado yanahitaji ziara ya ana kwa ana"] },
            { title: "Siku moja kabla", bullets: ["Chaji kifaa chako", "Jaribu kamera na maikrofoni", "Fanya eCheck-in"] },
            { title: "Kuwa na tayari", bullets: ["Mahali tulivu, pa faragha, penye mwanga mzuri", "Maswali, dalili na orodha ya dawa", "Chupa za vidonge na miwani karibu"] }
          ],
          tryIt: "Andika orodha kwa ziara yako ijayo: maswali matatu, dalili zako na zilianza lini, na kila dawa unayotumia pamoja na kipimo chake. Iweke pamoja na kifaa chako.",
          youCanNow: "kuandaa kifaa chako, mahali pako na maswali yako kwa ziara ya video.",
          quickCheck: [
            { objective: "O5", q: "Ni aina gani ya ziara mara nyingi inafaa kwa video?", options: ["Ukaguzi wa dawa au ziara ya ufuatiliaji", "Dharura", "Ziara inayohitaji uchunguzi wa ana kwa ana", "Upasuaji"], answer: 0, why: "Ziara za video zinafaa kwa ziara nyingi za ufuatiliaji, ukaguzi wa dawa na ushauri nasaha." },
            { objective: "O5", q: "Ziara yako ya video ni kesho na huna uhakika kamera yako inafanya kazi. Utafanya nini leo?", options: ["Kusubiri uone wakati wa ziara", "Kughairi ziara", "Kujaribu kamera na maikrofoni, ukitumia kitufe cha kujaribu cha tovuti ikiwa kipo", "Kuiomba kliniki ije nyumbani kwako"], answer: 2, why: "Kujaribu siku moja kabla kunakupa muda wa kurekebisha tatizo." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kujiunga na kumaliza ziara ya video",
          minutes: 5,
          goal: "Jiunge na ziara ya video kwa wakati, ongea kwa uwazi na ujue hatua zinazofuata.",
          text: [
            "Jiunge dakika 10 hadi 15 mapema. Fungua miadi kwenye tovuti yako na uguse kitufe cha kuanza ziara ya video, au tumia kiungo ulichotumiwa na kliniki. Ruhusu kamera na maikrofoni unapoombwa. Huenda ukasubiri katika chumba cha kusubiri cha mtandaoni hadi mtaalamu wa afya ajiunge.",
            "Wakati wa ziara, tazama skrini, ongea kwa uwazi na utumie orodha yako. Sauti au video ikikatika, tulia; kwa kawaida mtaalamu wa afya atakupigia tena, kwa hiyo weka simu yako karibu. Ni sawa kuwaomba warudie au waeleze jambo kwa urahisi.",
            "Kabla ya kukata simu, rudia mpango: \"Kwa hiyo nitameza kidonge kipya usiku, na nirudi baada ya wiki mbili?\" Baadaye, angalia tovuti kwa muhtasari wa ziara na dawa mpya au vipimo vipya vyovyote."
          ],
          steps: ["Jiunge dakika 10 hadi 15 mapema kutoka tovuti au kiungo cha kliniki.", "Ruhusu kamera na maikrofoni.", "Subiri katika chumba cha kusubiri cha mtandaoni.", "Tumia orodha yako; waombe waeleze kwa urahisi ikihitajika.", "Rudia mpango kabla ya kukata simu.", "Soma muhtasari wa ziara kwenye tovuti baadaye."],
          words: [["Chumba cha kusubiri cha mtandaoni (virtual waiting room)", "skrini ambapo unasubiri hadi mtaalamu wa afya ajiunge."], ["Mtaalamu wa afya (clinician)", "daktari, muuguzi, msaidizi wa daktari (physician assistant) au mshauri anayekutibu."]],
          slides: [
            { title: "Kujiunga", bullets: ["Dakika 10 hadi 15 mapema", "Kutoka tovuti au kiungo cha kliniki", "Ruhusu kamera na maikrofoni"] },
            { title: "Wakati wa ziara", bullets: ["Tumia orodha yako", "Waombe waeleze kwa urahisi", "Simu imekatika? Weka simu yako karibu"] },
            { title: "Kabla ya kukata simu", bullets: ["Rudia mpango", "Uliza lini urudi tena"] },
            { title: "Baadaye", bullets: ["Soma muhtasari wa ziara kwenye tovuti", "Angalia dawa mpya na vipimo vipya"] }
          ],
          tryIt: "Mazoezi ya kazi ya mwisho: kwenye tovuti yako, fungua miadi ijayo au iliyopita na upate mahali kitufe au kiungo cha ziara ya video kinapoonekana. Kisha fanya kazi ya mwisho: jibu la kipimo, ujumbe, dawa zaidi na miadi, na orodha yako ya ziara.",
          youCanNow: "kujiunga na ziara ya video kwa wakati, kupitia orodha yako, kuthibitisha mpango na kupata muhtasari baadaye.",
          quickCheck: [
            { objective: "O6", q: "Kwa kawaida unaweza kuanza ziara ya video kutoka wapi?", options: ["Kutoka kiungo kwenye SMS isiyojulikana", "Kutoka miadi kwenye tovuti yako, au kiungo ulichotumiwa na kliniki", "Kutoka tangazo la injini ya utafutaji", "Kutoka app ya benki yako"], answer: 1, why: "Fungua miadi kwenye tovuti yako au tumia kiungo cha kliniki." },
            { objective: "O6", q: "Daktari anaeleza mpango mpya haraka karibu na mwisho wa ziara. Utafanya nini?", options: ["Kukata simu na kubahatisha baadaye", "Kumuuliza jirani daktari alimaanisha nini", "Kunyamaza ili kuokoa muda", "Kumwomba aeleze kwa urahisi, kisha kurudia mpango"], answer: 3, why: "Kurudia mpango kunahakikisha umeelewa hatua zinazofuata." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Dawa zaidi, miadi na ziara za video",
        questions: [
          { objective: "O4", q: "Ni wakati gani bora wa kuomba dawa zaidi?", options: ["Baada ya dawa kuisha kwa wiki moja", "Siku chache kabla dawa hazijaisha", "Wakati wa ziara ya video tu", "Kamwe kupitia tovuti"], answer: 1, why: "Kliniki na duka la dawa wanahitaji muda wa kulishughulikia." },
          { objective: "O4", q: "Tovuti inasema aina fulani ya miadi lazima ipangwe kwa simu. Unafanya nini?", options: ["Kukata tamaa", "Kutuma ujumbe kumi", "Kupiga simu kliniki", "Kupanga na daktari mwingine mtandaoni"], answer: 2, why: "Baadhi ya ziara zinaweza kupangwa kwa simu tu." },
          { objective: "O5", q: "Unapaswa kufanya nini siku moja kabla ya ziara ya video?", options: ["Kuchaji kifaa chako na kujaribu kamera na maikrofoni", "Kufuta app", "Kubadilisha nywila yako", "Hakuna kitu"], answer: 0, why: "Kujaribu mapema kunazuia matatizo wakati wa ziara." },
          { objective: "O6", q: "Unapaswa kujiunga na ziara ya video mapema kiasi gani?", options: ["Dakika 30 kwa kuchelewa", "Saa ileile kamili", "Wakati tu wanapopiga simu", "Dakika 10 hadi 15 mapema"], answer: 3, why: "Kujiunga mapema kunaacha muda wa kujiandikisha na matatizo ya teknolojia." },
          { objective: "O6", q: "Kwa nini urudie mpango kabla ya kukata simu?", options: ["Ili ziara iwe ndefu zaidi", "Kuhakikisha umeelewa cha kufanya baadaye", "Inahitajika ili kurudishiwa pesa", "Kujaribu maikrofoni"], answer: 1, why: "Kurudia mpango kunagundua kutoelewana." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kutumia Tiba kwa Video na Tovuti ya Mgonjwa",
    questions: [
      { objective: "O1", q: "Tovuti ya mgonjwa inayojulikana, inayotumiwa na mifumo mingi ya afya, ni:", options: ["MyChart", "TikTok", "DoorDash", "Netflix"], answer: 0, why: "MyChart inatumika sana; kliniki yako inaweza kutumia nyingine." },
      { objective: "O1", q: "Msimbo wa kuamilisha unatoka kwa:", options: ["Rafiki wa mitandao ya kijamii", "Kliniki yako", "Tangazo linalojitokeza (pop-up)", "Tovuti yoyote"], answer: 1, why: "Kliniki zinatoa misimbo ya kuamilisha ili kuunganisha akaunti yako." },
      { objective: "O1", q: "Kwenye kompyuta ya maktaba baada ya kutumia tovuti yako, unapaswa:", options: ["Kuiacha ukiwa umeingia", "Kuhifadhi nywila yako", "Kutoka na kufunga kivinjari", "Kuandika nywila yako kwenye karatasi"], answer: 2, why: "Hii inamzuia mtu anayefuata kuingia kwenye rekodi zako za afya." },
      { objective: "O1", q: "Kipi kinaongeza ulinzi zaidi kwa akaunti yako ya tovuti?", options: ["Nywila fupi", "Kumpa rafiki nywila yako", "Kutumia nywila ileile kila mahali", "Uthibitishaji wa hatua mbili"], answer: 3, why: "Uthibitishaji wa hatua mbili unahitaji msimbo kutoka simu yako." },
      { objective: "O2", q: "Kiwango cha kawaida (reference range) ni:", options: ["Kiwango cha kawaida cha majibu kwa watu wenye afya njema", "Anwani ya kliniki yako", "Namba yako ya bima", "Aina ya dawa"], answer: 0, why: "Majibu yanalinganishwa na kiwango cha kawaida." },
      { objective: "O2", q: "Jibu limewekewa alama kuwa nje ya kiwango. Hii inamaanisha:", options: ["Lazima uende chumba cha dharura", "Kila wakati inamaanisha ugonjwa mbaya", "Si tatizo kila wakati; iulize timu yako ya matibabu", "Maabara ilikosea"], answer: 2, why: "Majibu yenye alama yanahitaji maelezo ya timu yako ya matibabu." },
      { objective: "O2", q: "Kulingana na HealthIT.gov, Kanuni ya Faragha ya HIPAA inakupa haki ya:", options: ["Dawa za bure", "Kuchagua mshahara wa daktari wako", "Kuona na kupata nakala ya rekodi yako ya afya", "Kutolipa bili zote"], answer: 2, why: "Una haki ya kuona na kupata nakala ya rekodi yako." },
      { objective: "O2", q: "Je, mtoa huduma anaweza kukataa kukupa rekodi zako kwa sababu una bili za matibabu ambazo hujalipa?", options: ["Ndiyo, kila wakati", "Wikendi tu", "Kwa nakala za karatasi tu", "Hapana; HealthIT.gov inasema unaweza kuzipata hata ukiwa na bili ambazo hujalipa"], answer: 3, why: "Bili ambazo hujalipa haziondoi haki yako ya kupata rekodi zako." },
      { objective: "O3", q: "Ujumbe wa tovuti unafaa zaidi kwa:", options: ["Dharura", "Maswali yasiyo ya dharura", "Kutuma pesa", "Kuzungumza na wageni"], answer: 1, why: "Majibu yanaweza kuchukua siku moja au zaidi." },
      { objective: "O3", q: "Ujumbe upi wa tovuti uko wazi zaidi?", options: ["\"msaada\"", "\"?\"", "\"nipigie\"", "\"Tangu Jumatatu nasikia kizunguzungu baada ya kidonge changu kipya cha asubuhi. Je, nikimeze usiku?\""], answer: 3, why: "Unasema nini, tangu lini, na unahitaji nini." },
      { objective: "O3", q: "Baadhi ya kliniki zinaweza kuitoza bima kwa:", options: ["Kuingia kwenye tovuti", "Kusoma majibu", "Ujumbe unaohitaji ushauri wa kitabibu", "Kubadilisha nywila yako"], answer: 2, why: "Uliza kliniki yako ikiwa huna uhakika kuhusu malipo ya ujumbe." },
      { objective: "O4", q: "Kwa kawaida unaomba dawa zaidi wapi kwenye tovuti?", options: ["Sehemu ya Medications", "Ukurasa wa Settings (mipangilio)", "Taka za Messages", "Skrini ya kuingia"], answer: 0, why: "Vitufe vya dawa zaidi viko karibu na dawa zako." },
      { objective: "O4", q: "Orodha ya kusubiri inakuwezesha:", options: ["Kubadilisha maelezo ya daktari wako", "Kutolipa", "Kuona majibu ya wagonjwa wengine", "Kupata muda wa mapema zaidi mtu akighairi"], answer: 3, why: "Orodha za kusubiri zinakupa nafasi zilizoghairiwa." },
      { objective: "O5", q: "Ziara za video zinafaa kwa:", options: ["Kila tatizo, kila wakati", "Mifupa iliyovunjika inayohitaji x-ray", "Ziara nyingi za ufuatiliaji, ukaguzi wa dawa na ushauri nasaha", "Dharura"], answer: 2, why: "Baadhi ya matatizo bado yanahitaji huduma ya ana kwa ana." },
      { objective: "O5", q: "eCheck-in ni:", options: ["Dawa zaidi", "Hundi ya benki", "Mchezo wa video", "Kujaza fomu kwenye tovuti kabla ya ziara yako"], answer: 3, why: "Inaokoa muda mwanzoni mwa ziara yako." },
      { objective: "O5", q: "Unapaswa kuwa na nini tayari kwa ziara ya video?", options: ["Maswali yako na orodha ya dawa", "Muziki wa sauti kubwa", "Mahali pa umma penye watu wengi", "Hakuna kitu"], answer: 0, why: "Orodha inakusaidia kutumia ziara vizuri." },
      { objective: "O6", q: "Chumba cha kusubiri cha mtandaoni ni:", options: ["Chumba halisi kliniki", "Mazungumzo na wagonjwa wengine", "Skrini ambapo unasubiri hadi mtaalamu wa afya ajiunge", "Aina ya bili"], answer: 2, why: "Unasubiri hapo hadi ziara ianze." },
      { objective: "O6", q: "Video inakatika wakati wa ziara yako. Unafanya nini?", options: ["Kuacha kutafuta matibabu", "Kupanga ziara mpya mwaka ujao", "Kuandika kuhusu hilo mtandaoni", "Kutulia na kuweka simu yako karibu ili upigiwe tena"], answer: 3, why: "Wataalamu wa afya mara nyingi hupiga simu tena video isipofanya kazi." },
      { objective: "O6", q: "Baada ya ziara ya video, unaweza kukagua mpango wapi?", options: ["Chapisho kwenye mitandao ya kijamii", "Duka la apps", "Muhtasari wa ziara kwenye tovuti yako", "SMS ya mgeni"], answer: 2, why: "Muhtasari unaorodhesha mpango, dawa zilizoandikwa na vipimo." },
      { objective: "O6", q: "Unapaswa kumuuliza nani maswali kuhusu afya yako mwenyewe?", options: ["Tovuti yoyote tu", "Zana ya AI peke yake", "Maoni kwenye mitandao ya kijamii", "Daktari, muuguzi au mfamasia wako"], answer: 3, why: "Timu yako ya matibabu inajua historia ya afya yako." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      2,
      5,
      6,
      8,
      9,
      11,
      14,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Kuingia kwa usalama",
        objective: "O1",
        notYet: "Hawezi kuingia, au aliingia kupitia kiungo kisicho rasmi.",
        meets: "Anaingia kupitia tovuti au app rasmi ya kliniki kwa nywila asiyoitumia mahali pengine.",
        exceeds: "Pia anawasha uthibitishaji wa hatua mbili ikiwa tovuti inautoa."
      },
      {
        name: "Kupata jibu au muhtasari",
        objective: "O2",
        notYet: "Hawezi kupata jibu la kipimo au muhtasari wa ziara.",
        meets: "Anapata jibu moja la kipimo au muhtasari wa ziara na kuandika swali lolote kuhusu hilo.",
        exceeds: "Pia anasoma jibu pamoja na kiwango chake cha kawaida bila kubahatisha maana yake."
      },
      {
        name: "Ujumbe ulio wazi",
        objective: "O3",
        notYet: "Ujumbe hauko wazi, ni mrefu, au ni kuhusu jambo la dharura.",
        meets: "Ujumbe mfupi wenye swali na maelezo yanayosaidia, kwa hitaji lisilo la dharura.",
        exceeds: "Unataja lilianza lini, nini kilijaribiwa na nini kinahitajika."
      },
      {
        name: "Dawa zaidi na miadi",
        objective: "O4",
        notYet: "Hawezi kupata mahali pa kuomba dawa zaidi au miadi.",
        meets: "Anapata mahali pa kuomba dawa zaidi na sehemu ya miadi.",
        exceeds: "Pia anajua ni miadi ipi lazima ipangwe kwa simu."
      },
      {
        name: "Tayari kwa ziara ya video",
        objective: "O5",
        notYet: "Hana orodha ya maswali wala orodha ya dawa, au hawezi kusema kiungo cha video kitaonekana wapi.",
        meets: "Maswali matatu na orodha ya dawa za sasa, na anajua kiungo cha video kitaonekana wapi.",
        exceeds: "Pia anajaribu kamera na maikrofoni au anakamilisha eCheck-in mapema."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kupata Anafikia au Anazidi katika kila mstari wa rubriki ya kazi ya mwisho",
      "Wanafunzi wanaoripoti kuingia kwenye tovuti yao wenyewe siku 30 baadaye (utafiti wa kufuatilia)",
      "Wanafunzi wanaoripoti kuomba dawa zaidi au miadi, au kutuma ujumbe, kupitia tovuti",
      "Wanafunzi wanaoripoti kujiunga na ziara ya video kwa wakati bila msaada"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu, tableti au kompyuta yenye kamera na maikrofoni",
      "Msimbo wa kuamilisha wa kliniki au kiungo rasmi cha kujiandikisha (uliza dawati la mapokezi)",
      "Karatasi na kalamu kwa orodha ya maswali na ya dawa",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi"
    ],
    facilitatorNotes: [
      "Usiangalie, usisome kwa sauti wala usiandike kamwe taarifa za afya za mwanafunzi; wanafunzi wanafanya hatua za tovuti kwa faragha kwenye skrini zao wenyewe.",
      "Wanafunzi wasio na akaunti ya tovuti wanaweza kufanya mazoezi kwa toleo la majaribio (demo) la tovuti au picha za skrini, na kupata msimbo wa kuamilisha kutoka kliniki yao kabla ya kipindi kijacho.",
      "Sema wazi kwamba kozi hii si ushauri wa kitabibu: maswali kuhusu majibu au dawa yanaenda kwa timu ya matibabu ya mwanafunzi mwenyewe, na dharura zinaenda 911.",
      "Fanyeni simu ya video ya mazoezi darasani ili wanafunzi wajaribu kuruhusu kamera na maikrofoni na kupata kitufe cha kunyamazisha sauti (mute).",
      "Walezi wanaweza kuhudhuria pamoja na mgonjwa; wakumbushe kwamba baadhi ya tovuti zinatoa ruhusa ya mwakilishi (proxy access) ambayo kliniki lazima iiweke."
    ]
  }
};
