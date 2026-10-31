"use strict";

// Koach Learn course (Swahili translation of seniors/seniors-medicare-basics.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.
// US-specific course: Medicare, CMS, SHIP, Social Security and all US names, phone numbers and dates are kept as in the English.

module.exports = {
  id: "seniors-medicare-basics-sw",
  lang: "sw",
  translationOf: "seniors-medicare-basics",
  category: "Seniors and Technology",
  name: "Misingi ya Medicare",
  skills: "Kujua Sehemu A, B, C na D, Kulinganisha Original Medicare na Medicare Advantage, Kulinda namba yako ya Medicare, Kujua kipindi chako cha kujiandikisha, Kukagua mpango wako kila msimu wa vuli, Kupata msaada wa bure kutoka SHIP",
  outcome: "kueleza Sehemu A, B, C na D zinalipia nini, kujua kipindi chako mwenyewe cha kujiandikisha, kuorodhesha unachohitaji ili kulinganisha mipango, na kupata msaada wa bure usio na upendeleo kutoka State Health Insurance Assistance Program (SHIP) ya jimbo lako au 1-800-MEDICARE.",
  about: [
    "Kozi hii ni kwa watu wanaokaribia kutimiza miaka 65, watu ambao tayari wako kwenye Medicare na wanaiona inachanganya, na wanafamilia wanaomsaidia mzazi au babu au bibi kuhusu bima ya afya.",
    "Utajifunza kila sehemu ya Medicare inalipia nini, tofauti kati ya Original Medicare na Medicare Advantage, wakati unaweza kujiandikisha au kufanya mabadiliko, jinsi ya kulinda namba yako ya Medicare dhidi ya walaghai, na mahali pa kupata msaada wa bure kutoka kwa mtu halisi.",
    "Kila somo linachukua kama dakika tano na linaishia na kazi ya \"Jaribu sasa\". Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni. Sheria, tarehe na gharama za Medicare hubadilika. Zihakikishe kila mara kwenye medicare.gov, kwa kupiga 1-800-MEDICARE, au kwa mshauri wa SHIP wa eneo lako, na umuulize daktari au mfamasia wako kuhusu matibabu yako mwenyewe."
  ],
  finalTask: "Tengeneza mpango wako wa Medicare wa ukurasa mmoja: kipindi chako cha kujiandikisha (miezi ya Initial Enrollment Period yako, au tarehe za Open Enrollment za mwaka huu kama tayari una Medicare), sehemu ulizonazo au unazohitaji, orodha ya madaktari wako, dawa zako na duka lako la dawa, maswali matatu unayotaka yajibiwe, na msaada wa bure utakaotumia (SHIP ya eneo lako, medicare.gov na 1-800-MEDICARE). Kisha wasiliana na SHIP yako au tumia zana ya kulinganisha mipango kwenye medicare.gov.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu walioko Marekani wanaokaribia kutimiza miaka 65 au ambao tayari wako kwenye Medicare, na wanafamilia wanaowasaidia. Wengi wanachanganyikiwa na sehemu, tarehe za mwisho na wingi wa simu za mauzo na matangazo kila msimu wa vuli.",
    startingPoint: "Wanajua kwamba Medicare ipo na huenda tayari wana kadi. Wengi hawawezi kueleza Sehemu A hadi D, hawajui kipindi chao cha kujiandikisha, na hawajatumia zana ya kulinganisha mipango ya medicare.gov wala kusikia kuhusu SHIP.",
    gap: "Kukosa kipindi cha kujiandikisha kunaweza kuleta adhabu ya kuchelewa ya maisha yote, na mpango usiofaa unaweza kuacha nje madaktari au dawa za mtu. Kujua sehemu, tarehe zao, jinsi ya kulinganisha mipango na mahali pa kupata msaada wa bure usio na upendeleo kunalinda afya na pesa zao na kuwaepusha na ulaghai wa Medicare.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi, sentensi fupi na hatua kubwa na rahisi",
      "Vifaa: simu ya kupiga, na kompyuta au tableti kwa medicare.gov ikiwa ipo",
      "Muda: kama dakika 5 kwa kila somo, bila haraka",
      "Gharama na baadhi ya sheria hubadilika kila mwaka; wanafunzi wanakagua kiasi cha sasa kwenye medicare.gov, ssa.gov au SHIP",
      "Kozi haipendekezi mpango wowote; namba za Medicare haziandikwi kamwe ndani ya AI wala kupewa wanaopiga simu"
    ],
    prerequisites: "Hakuna."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa sehemu nne za Medicare", action: "kueleza Sehemu A, B, C na D zinalipia nini na njia mbili kuu za kupata bima", standard: "ukipata angalau maswali 4 kati ya 5 sahihi" },
    { id: "O2", condition: "Mtu anapokuomba namba yako ya Medicare au taarifa inaonyesha huduma ambayo hukuwahi kupata", action: "kutambua ulaghai wa Medicare na kuuripoti kwa 1-800-MEDICARE", standard: "ukitoa namba yako kwa madaktari wako, duka lako la dawa na mpango wako tu" },
    { id: "O3", condition: "Ukipewa mwezi unaotimiza miaka 65 na bima yako ya kazini", action: "kujua Initial Enrollment Period yako na kama Special Enrollment Period inaweza kukuhusu", standard: "ukiwa na mwezi sahihi wa kuanza na wa kumaliza, uliohakikishwa kwenye ssa.gov, medicare.gov au SHIP" },
    { id: "O4", condition: "Ukipewa madaktari wako, dawa zako na duka lako la dawa", action: "kulinganisha mipango kwenye medicare.gov au kwa msaada wa SHIP wakati wa Open Enrollment", standard: "ukiangalia gharama ya mwaka mzima na kuhakikisha madaktari wako wako kwenye mtandao wa mpango" },
    { id: "O5", condition: "Unapokuwa na maswali kuhusu Medicare", action: "kuwasiliana na SHIP ya eneo lako au 1-800-MEDICARE ukiwa na maswali na orodha zako tayari", standard: "ukiandika tarehe, jina la mtu na jibu" }
  ],
  chapters: [
    {
      name: "Sura 1: Sehemu za Medicare",
      lessons: [
        {
          objectives: ["O1"],
          title: "Medicare ni kwa ajili ya nani, na Sehemu A na B",
          minutes: 5,
          goal: "Sema ni nani anaweza kupata Medicare na Sehemu A na B zinalipia nini.",
          text: [
            "Medicare ni bima ya afya ya serikali ya Marekani kwa watu wa miaka 65 au zaidi, watu walio chini ya miaka 65 wenye ulemavu fulani, na watu wa umri wowote wenye End-Stage Renal Disease (figo kushindwa kufanya kazi kabisa). Inaendeshwa na Centers for Medicare & Medicaid Services (CMS).",
            "Medicare ina sehemu, zenye majina ya herufi. Sehemu A (Part A) ni bima ya hospitali. Inasaidia kulipia matibabu unapolazwa hospitalini, pia huduma ya hospice (huduma ya faraja kwa wagonjwa walio mwisho wa maisha) na baadhi ya huduma za afya nyumbani.",
            "Sehemu B (Part B) ni bima ya matibabu. Inasaidia kulipia kumwona daktari, huduma ya wagonjwa wa nje (unarudi nyumbani siku hiyo hiyo), vipimo vingi na huduma za kinga kama baadhi ya uchunguzi na chanjo.",
            "Sehemu A na Sehemu B pamoja zinaitwa Original Medicare. Watu wengi hawalipi premium (ada ya kila mwezi) ya Sehemu A ikiwa wao au mwenzi wao walifanya kazi na kulipa kodi ya Medicare kwa muda wa kutosha. Watu wengi hulipa premium ya kila mwezi ya Sehemu B. Premium na deductible hubadilika kila mwaka, kwa hiyo tafuta kiasi cha mwaka huu kwenye medicare.gov au uliza SHIP."
          ],
          words: [["Medicare", "mpango wa bima ya afya wa serikali ya Marekani kwa watu wa miaka 65 na zaidi na baadhi ya vijana wenye ulemavu."], ["Premium", "kiasi unacholipa kila mwezi ili uwe na bima."], ["Deductible", "kiasi unacholipa kwa matibabu kabla bima haijaanza kulipa."], ["Outpatient (mgonjwa wa nje)", "huduma ambayo unarudi nyumbani siku hiyo hiyo, kama kumwona daktari."]],
          slides: [
            { title: "Medicare ni kwa ajili ya nani", bullets: ["Watu wa miaka 65 au zaidi", "Baadhi ya watu chini ya miaka 65 wenye ulemavu", "Watu ambao figo zao zimeshindwa kabisa"] },
            { title: "Sehemu A: bima ya hospitali", bullets: ["Kukaa hospitalini unapolazwa", "Hospice na baadhi ya huduma za afya nyumbani"] },
            { title: "Sehemu B: bima ya matibabu", bullets: ["Kumwona daktari na huduma ya wagonjwa wa nje", "Vipimo vingi na huduma za kinga"] },
            { title: "A + B = Original Medicare", bullets: ["Wengi hawalipi premium ya Sehemu A", "Wengi hulipa premium ya kila mwezi ya Sehemu B", "Gharama za mwaka huu: medicare.gov au SHIP"] }
          ],
          sources: [{ name: "CMS: Medicare (Sehemu A, B na D, nani anastahili)", url: "https://www.cms.gov/about-cms/what-we-do/medicare" }],
          tryIt: "Andika aina mbili za matibabu ambazo wewe au mwanafamilia mlitumia mwaka uliopita, kama kulazwa hospitalini, uchunguzi wa afya au kipimo cha damu. Kando ya kila moja, andika kama iko chini ya Sehemu A au Sehemu B.",
          youCanNow: "kusema Medicare ni kwa ajili ya nani na kupanga matibabu ya kila siku katika Sehemu A au Sehemu B.",
          quickCheck: [
            { objective: "O1", q: "Original Medicare ni nini?", options: ["Sehemu A na Sehemu B pamoja", "Sehemu D peke yake", "Mpango wa Medicare Advantage", "Bima ya Medigap"], answer: 0, why: "Sehemu A (hospitali) na Sehemu B (matibabu) pamoja zinaitwa Original Medicare." },
            { objective: "O1", q: "Jirani yako amelazwa hospitalini kwa siku tatu. Ni sehemu gani hasa inasaidia kulipia kukaa hospitalini?", options: ["Sehemu D", "Sehemu B", "Sehemu A", "Hakuna kati yake"], answer: 2, why: "Sehemu A ni bima ya hospitali kwa matibabu unapolazwa." }
          ]
        },
        {
          objectives: ["O1","O4"],
          title: "Sehemu C na D: Medicare Advantage na mipango ya dawa",
          minutes: 5,
          goal: "Eleza tofauti kati ya Original Medicare na mpango wa Medicare Advantage, na Sehemu D inalipia nini.",
          text: [
            "Sehemu C (Part C) ni Medicare Advantage. Hii ni mipango kutoka kampuni binafsi za bima zilizoidhinishwa na Medicare. Mpango wa Medicare Advantage unakupa faida zote za Sehemu A na Sehemu B katika mpango mmoja, na mingi pia inajumuisha bima ya dawa. Mingi ina mitandao (networks): orodha za madaktari na hospitali unazotarajiwa kutumia.",
            "Sehemu D (Part D) ni bima ya dawa za kuandikiwa na daktari. Inapatikana kwa kila mtu mwenye Medicare kupitia mipango binafsi iliyoidhinishwa na Medicare. Watu wenye Original Medicare kwa kawaida huongeza mpango tofauti wa dawa wa Sehemu D.",
            "Kwa hiyo kuna njia mbili kuu. Njia ya kwanza: Original Medicare (A na B), mara nyingi pamoja na mpango tofauti wa dawa wa Sehemu D, na baadhi ya watu pia hununua bima ya Medicare Supplement Insurance (Medigap) kusaidia gharama ambazo Original Medicare hailipi. Njia ya pili: mpango wa Medicare Advantage (Sehemu C) unaounganisha A, B na kwa kawaida D.",
            "Hakuna njia iliyo bora kwa kila mtu. Inategemea madaktari wako, dawa zako, mahali unapoishi na unaposafiri, na bajeti yako. Hicho ndicho hasa mshauri wa SHIP wa bure anakusaidia kulinganisha."
          ],
          words: [["Medicare Advantage (Sehemu C)", "mpango kutoka kampuni binafsi, ulioidhinishwa na Medicare, unaojumuisha Sehemu A na Sehemu B na mara nyingi bima ya dawa."], ["Sehemu D", "bima ya Medicare ya dawa za kuandikiwa na daktari, inayotolewa kupitia mipango binafsi."], ["Network (mtandao)", "madaktari, hospitali na maduka ya dawa ambayo mpango unashirikiana nayo."], ["Medigap", "Medicare Supplement Insurance: bima binafsi inayosaidia kulipa gharama ambazo Original Medicare hailipi."]],
          slides: [
            { title: "Sehemu C: Medicare Advantage", bullets: ["Mipango binafsi iliyoidhinishwa na Medicare", "Inajumuisha A na B, mingi inajumuisha dawa", "Mara nyingi hutumia mtandao wa madaktari"] },
            { title: "Sehemu D: dawa za kuandikiwa", bullets: ["Inapatikana kwa kila mtu mwenye Medicare", "Kupitia mipango binafsi", "Mara nyingi huongezwa kwenye Original Medicare"] },
            { title: "Njia mbili kuu", bullets: ["Original Medicare + Sehemu D (+ Medigap kwa baadhi)", "Au mpango wa Medicare Advantage"] },
            { title: "Ipi ni bora kwako?", bullets: ["Madaktari wako na dawa zako", "Mahali unapoishi na unaposafiri", "Bajeti yako: omba SHIP ikusaidie kulinganisha"] }
          ],
          sources: [{ name: "CMS: Mipango ya Medicare Advantage na Sehemu D", url: "https://www.cms.gov/medicare/enrollment-renewal/health-plans" }],
          tryIt: "Orodhesha kila daktari unayemwona na kila dawa unayotumia, pamoja na kipimo chake, na duka la dawa unalotumia. Omba mwanafamilia akusaidie ukipenda. Hifadhi orodha hii: ndiyo unayohitaji kulinganisha mipango.",
          youCanNow: "kueleza Sehemu C na D, kueleza njia mbili kuu za Medicare, na kutengeneza orodha unayohitaji kulinganisha mipango.",
          quickCheck: [
            { objective: "O1", q: "Mpango wa Sehemu D ni nini?", options: ["Bima ya hospitali", "Bima ya dawa za kuandikiwa kutoka mpango binafsi ulioidhinishwa na Medicare", "Mpango wa meno", "Pensheni ya serikali"], answer: 1, why: "Sehemu D ni bima ya dawa za kuandikiwa kupitia mipango binafsi iliyoidhinishwa na Medicare." },
            { objective: "O1", q: "Rafiki anasema njia moja, Original Medicare au Medicare Advantage, ni bora kwa kila mtu. Unasema nini?", options: ["Kukubali na kuichagua hiyo", "Kuchagua premium ya bei nafuu kila mara", "Kuchagua chochote anachopendekeza mtu wa mauzo kwa simu", "Inategemea madaktari wako, dawa zako, mahali unapoishi na bajeti yako"], answer: 3, why: "Hakuna njia iliyo bora kwa kila mtu; mshauri wa SHIP wa bure anakusaidia kulinganisha." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kulinda kadi na namba yako ya Medicare",
          minutes: 4,
          goal: "Tambua ulaghai wa Medicare na ujue umwambie nani.",
          text: [
            "Kadi yako ya Medicare ya rangi nyekundu, nyeupe na buluu ina namba ya Medicare. Itunze kama kadi ya benki ya mkopo (credit card). Waonyeshe madaktari wako, duka lako la dawa na mpango wako, na uiweke mahali salama.",
            "Walaghai hupiga simu, hutuma ujumbe au hugonga mlango wakijifanya wanatoka Medicare. Wanaweza kukupa kifaa cha kushikilia mwili (brace), kifaa cha kupima au kadi mpya \"bure\", au kusema faida zako zitasimama usipowapa namba yako. Mwakilishi halisi wa Medicare hatakupigia simu ghafla kukuomba namba yako ya Medicare au taarifa za benki.",
            "Kagua taarifa zako. Original Medicare hutuma Medicare Summary Notice, na mipango hutuma Explanation of Benefits. Tafuta huduma ambayo hukuwahi kupata. Ukiona kitu kisicho sahihi, au mtu anayepiga simu akiomba namba yako, ripoti kwa 1-800-MEDICARE.",
            "Mjukuu au rafiki akikusaidia mtandaoni, kaa naye, tumia tovuti rasmi ya medicare.gov peke yake, na usiandike kamwe namba yako ya Medicare ndani ya chatbot au tovuti uliyoifikia kutoka kwenye ujumbe mfupi."
          ],
          steps: ["Weka kadi yako salama na utoe namba kwa madaktari wako, duka lako la dawa na mpango wako tu.", "Kata simu zisizotarajiwa zinazoomba namba yako.", "Soma kila Medicare Summary Notice au Explanation of Benefits.", "Ripoti kitu chochote kisicho sahihi kwa 1-800-MEDICARE."],
          words: [["Medicare Summary Notice", "taarifa kutoka Original Medicare inayoorodhesha huduma zilizotozwa kwa namba yako."], ["Explanation of Benefits", "taarifa kutoka mpango inayoonyesha kilichotozwa na kile mpango ulicholipa."], ["Ulaghai", "hila ya kuiba pesa au taarifa binafsi."]],
          slides: [
            { title: "Itunze kadi yako kama kadi ya benki", bullets: ["Waonyeshe madaktari wako, duka la dawa na mpango wako", "Iweke mahali salama"] },
            { title: "Dalili za ulaghai", bullets: ["Brace, vifaa vya kupima au kadi mpya \"bure\"", "\"Faida zako zitasimama\"", "Simu zisizotarajiwa zinazoomba namba yako"] },
            { title: "Kagua taarifa zako", bullets: ["Medicare Summary Notice au Explanation of Benefits", "Tafuta huduma ambayo hukuwahi kupata", "Ripoti matatizo kwa 1-800-MEDICARE"] }
          ],
          sources: [{ name: "Medicare.gov: Ripoti udanganyifu (hakikisha hatua za sasa hapa)", url: "https://www.medicare.gov/fraud" }],
          tryIt: "Tafuta Medicare Summary Notice au Explanation of Benefits yako ya karibuni (au omba mwanafamilia akusaidie kuitafuta). Kagua mistari mitatu: je, kila mmoja ni huduma uliyoipata kweli?",
          youCanNow: "kulinda namba yako ya Medicare, kusoma taarifa zako kutafuta matatizo, na kujua mahali pa kuripoti ulaghai.",
          quickCheck: [
            { objective: "O2", q: "Medicare Summary Notice ni nini?", options: ["Bili unayopaswa kulipa mara moja", "Tangazo la mpango mpya", "Taarifa kutoka Original Medicare inayoorodhesha huduma zilizotozwa Medicare", "Kadi mpya ya Medicare"], answer: 2, why: "Kagua Medicare Summary Notice au Explanation of Benefits yako kutafuta huduma ambayo hukuwahi kupata." },
            { objective: "O2", q: "Ujumbe mfupi unasema faida zako za Medicare zitasimama usipojibu na namba yako ya Medicare. Unafanya nini?", options: ["Usijibu, na uripoti kwa 1-800-MEDICARE", "Jibu haraka ili faida zako zisisimame", "Tuma nusu ya namba", "Uwatumie marafiki"], answer: 0, why: "Medicare haitakutafuta ghafla kuomba namba yako; ripoti." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Sehemu za Medicare",
        questions: [
          { objective: "O1", q: "Ni sehemu gani ya Medicare ni bima ya hospitali?", options: ["Sehemu D", "Sehemu A", "Sehemu B", "Medigap"], answer: 1, why: "Sehemu A inasaidia kulipia kukaa hospitalini, hospice na baadhi ya huduma za afya nyumbani." },
          { objective: "O1", q: "Bibi yako ana uchunguzi wa afya kwa daktari. Ni sehemu gani kwa kawaida husaidia kulipa?", options: ["Sehemu A", "Sehemu D", "Sehemu B", "Hakuna"], answer: 2, why: "Sehemu B inalipia kumwona daktari na huduma ya wagonjwa wa nje." },
          { objective: "O1", q: "Medicare Advantage ni nini?", options: ["Mpango binafsi ulioidhinishwa na Medicare unaojumuisha Sehemu A na B", "Simu ya bure", "Malipo ya Social Security", "Aina ya hospitali"], answer: 0, why: "Mipango ya Sehemu C ni mipango binafsi inayounganisha A, B na kwa kawaida bima ya dawa." },
          { objective: "O1", q: "Unapaswa kupata wapi premium ya Sehemu B ya mwaka huu?", options: ["Ujumbe mfupi kutoka kwa mtu usiyemjua", "Gazeti la mwaka jana", "Kubahatisha kwa jirani", "Medicare.gov au mshauri wako wa SHIP"], answer: 3, why: "Premium hubadilika kila mwaka; kagua kwenye chanzo rasmi." },
          { objective: "O2", q: "Mtu anapiga simu akisema anatoka Medicare na anahitaji namba yako ya Medicare ili akutumie brace ya bure. Unafanya nini?", options: ["Kumpa namba", "Kukata simu na kuripoti kwa 1-800-MEDICARE", "Kumpa namba yako ya benki badala yake", "Kumpigia tena kwa namba aliyokupa"], answer: 1, why: "Medicare haipigi simu ghafla kuomba namba yako; huu ni ulaghai wa kawaida." }
        ]
      }
    },
    {
      name: "Sura 2: Kujiandikisha kwa wakati na kupata msaada",
      lessons: [
        {
          objectives: ["O3"],
          title: "Kujua kipindi chako cha kujiandikisha",
          minutes: 6,
          goal: "Jua Initial Enrollment Period yako mwenyewe na kinachotokea ukiikosa.",
          text: [
            "Nafasi yako ya kwanza ya kujiandikisha ni Initial Enrollment Period (kipindi cha kwanza cha kujiandikisha). Ni miezi 7: kinaanza miezi 3 kabla ya mwezi unaotimiza miaka 65, kinajumuisha mwezi wako wa kuzaliwa, na kinaisha miezi 3 baadaye. Mfano kutoka CMS: ukitimiza miaka 65 mwezi Juni, kipindi chako ni Machi hadi Septemba.",
            "Ikiwa tayari unapokea faida za Social Security unapotimiza miaka 65, kwa kawaida unaandikishwa katika Sehemu A na B moja kwa moja. Ikiwa sivyo, unajiandikisha kupitia Social Security. Kagua ssa.gov au piga simu Social Security kuhakikisha jinsi hii inavyokuhusu.",
            "Ikiwa wewe au mwenzi wako bado mnafanya kazi na mna bima ya afya kupitia kazi hiyo, huenda ukaweza kusubiri. CMS inasema unaweza kujiandikisha ukiwa bado na bima hiyo, au ndani ya miezi 8 baada ya kazi au bima hiyo kuisha, kile kinachotangulia. Hii ni Special Enrollment Period. Uliza ofisi ya faida za wafanyakazi ya mwajiri wako na SHIP kabla ya kuamua kusubiri.",
            "Ukikosa kipindi chako na hustahili Special Enrollment Period, unaweza kujiandikisha katika General Enrollment Period, Januari 1 hadi Machi 31 kila mwaka, na bima inaanza mwezi unaofuata baada ya kujiandikisha. Lakini huenda ukalipa adhabu ya kuchelewa kwa muda wote utakaokuwa na Sehemu B: CMS inasema premium inaweza kupanda 10% kwa kila kipindi kamili cha miezi 12 ambacho ungeweza kuwa na Sehemu B lakini hukuwa nayo. Pia kunaweza kuwa na adhabu kwa kukaa bila bima ya dawa; uliza SHIP au kagua medicare.gov."
          ],
          steps: ["Andika mwezi unaotimiza miaka 65.", "Hesabu miezi 3 nyuma na miezi 3 mbele: hicho ndicho kipindi chako cha miezi 7.", "Ikiwa una bima ya afya ya kazini, uliza mwajiri wako na SHIP kama unaweza kusubiri.", "Weka mwezi wa kwanza wa kipindi chako kwenye kalenda yako.", "Hakikisha maelezo kwenye ssa.gov, medicare.gov au kwa SHIP."],
          words: [["Initial Enrollment Period", "kipindi chako cha kwanza cha miezi 7 cha kujiandikisha Medicare, karibu na siku yako ya kutimiza miaka 65."], ["Special Enrollment Period", "nafasi ya kujiandikisha nje ya vipindi vya kawaida kwa sababu ya hali ya maisha, kama kupoteza bima ya kazini."], ["General Enrollment Period", "Januari 1 hadi Machi 31 kila mwaka, kwa watu waliokosa kipindi chao cha kwanza."], ["Adhabu ya kujiandikisha kuchelewa", "premium ya juu zaidi unayolipa kwa kujiandikisha kwa kuchelewa."]],
          slides: [
            { title: "Initial Enrollment Period: miezi 7", bullets: ["Miezi 3 kabla ya mwezi unaotimiza miaka 65", "Mwezi wako wa kuzaliwa", "Miezi 3 baadaye"] },
            { title: "Mfano", bullets: ["Unatimiza miaka 65 mwezi Juni", "Kipindi: Machi hadi Septemba"] },
            { title: "Bado unafanya kazi na una bima ya kazini?", bullets: ["Huenda ukaweza kusubiri", "Jiandikishe ndani ya miezi 8 baada ya kuisha", "Uliza mwajiri wako na SHIP kwanza"] },
            { title: "Umekikosa?", bullets: ["General Enrollment: Januari 1 hadi Machi 31", "Adhabu ya Sehemu B: hadi 10% kwa kila mwaka kamili wa kuchelewa", "Hakikisha kwenye medicare.gov au kwa SHIP"] }
          ],
          sources: [
            { name: "CMS: Original Medicare (Sehemu A na B), kustahili na kujiandikisha", url: "https://www.cms.gov/medicare/enrollment-renewal/original-part-a-b" },
            { name: "Social Security: Jiandikishe kwa Medicare", url: "https://www.ssa.gov/medicare/sign-up" }
          ],
          tryIt: "Tafuta Initial Enrollment Period yako au ya mwanafamilia: andika mwezi wa kuzaliwa, kisha mwezi wa kwanza na wa mwisho wa kipindi cha miezi 7. Ikiwa mtu huyo tayari yuko kwenye Medicare, andika tarehe za General Enrollment Period badala yake.",
          youCanNow: "kujua Initial Enrollment Period, kujua wakati unaweza kusubiri, na kujua gharama ya kujiandikisha kwa kuchelewa.",
          quickCheck: [
            { objective: "O3", q: "Initial Enrollment Period ni nini?", options: ["Kipindi chako cha miezi 7: miezi 3 kabla ya mwezi unaotimiza miaka 65, mwezi huo, na miezi 3 baadaye", "Open Enrollment ya msimu wa vuli", "Wakati wowote unaotaka", "Wiki moja baada ya siku yako ya kuzaliwa"], answer: 0, why: "Ni miezi 7, na mwezi unaotimiza miaka 65 uko katikati." },
            { objective: "O3", q: "Unatimiza miaka 65 mwezi Oktoba na huna bima ya kazini. Kipindi chako ni miezi ipi?", options: ["Oktoba peke yake", "Januari hadi Machi", "Oktoba 15 hadi Desemba 7", "Julai hadi Januari"], answer: 3, why: "Hesabu miezi 3 nyuma (Julai) na miezi 3 mbele (Januari)." }
          ]
        },
        {
          objectives: ["O4"],
          title: "Kukagua bima yako kila msimu wa vuli",
          minutes: 5,
          goal: "Tumia kipindi cha Open Enrollment cha msimu wa vuli kuangalia kama mpango wako bado unakufaa.",
          text: [
            "Mipango hubadilika kila mwaka: gharama, dawa zinazolipiwa na madaktari walio kwenye mtandao. Kila msimu wa vuli, Medicare ina kipindi cha Open Enrollment kuanzia Oktoba 15 hadi Desemba 7. Wakati huu unaweza kubadilisha mpango wako wa Medicare Advantage au mpango wa dawa wa Sehemu D, au kuhama kati ya Original Medicare na Medicare Advantage. Mabadiliko yanaanza Januari 1. Ukiridhika na bima yako, huhitaji kufanya chochote.",
            "Kabla ya Open Enrollment, mipango hutuma Annual Notice of Change (taarifa ya mwaka ya mabadiliko). Isome kuona mabadiliko ya premium yako, dawa zako na madaktari wako.",
            "Kulinganisha mipango, tumia zana ya kulinganisha mipango kwenye medicare.gov. Ingiza dawa zako na duka lako la dawa kutoka kwenye orodha uliyotengeneza katika Somo la 2. Angalia gharama ya mwaka mzima, si premium ya kila mwezi peke yake, na hakikisha madaktari wako wako kwenye mtandao.",
            "Jihadhari na simu za mauzo zenye kulazimisha na matangazo wakati wa msimu wa vuli. Hakuna mtu anayepaswa kukulazimisha kubadilisha. Mshauri wa SHIP ni bure na hauzi mipango. Watu wenye Medicare Advantage wanaweza kuwa na nafasi nyingine ya kubadilisha mipango mapema mwakani; kagua tarehe kwenye medicare.gov."
          ],
          steps: ["Soma Annual Notice of Change ya mpango wako inapofika.", "Chukua orodha yako ya madaktari, dawa na duka la dawa.", "Kati ya Oktoba 15 na Desemba 7, linganisha mipango kwenye medicare.gov au kwa SHIP.", "Angalia gharama ya mwaka mzima na kwamba madaktari wako wako kwenye mtandao.", "Ukibadilisha, andika mpango mpya na namba ya uthibitisho."],
          words: [["Open Enrollment", "Oktoba 15 hadi Desemba 7 kila mwaka, wakati watu wenye Medicare wanaweza kubadilisha mipango ya mwaka unaofuata."], ["Annual Notice of Change", "barua kutoka kwa mpango wako kila msimu wa vuli inayoorodhesha kitakachobadilika mwaka ujao."], ["Formulary", "orodha ya dawa ambazo mpango unalipia."]],
          slides: [
            { title: "Mipango hubadilika kila mwaka", bullets: ["Gharama, dawa zinazolipiwa, mitandao ya madaktari", "Soma Annual Notice of Change yako"] },
            { title: "Open Enrollment", bullets: ["Oktoba 15 hadi Desemba 7", "Badilisha mipango; mpango mpya unaanza Januari 1", "Umeridhika? Huhitaji kufanya chochote"] },
            { title: "Linganisha kwa njia sahihi", bullets: ["Ingiza dawa zako na duka lako la dawa", "Angalia gharama ya mwaka mzima", "Hakikisha madaktari wako wako kwenye mtandao"] },
            { title: "Bila shinikizo", bullets: ["Puuza simu za mauzo zenye kulazimisha", "SHIP ni bure na haiuzi mipango"] }
          ],
          sources: [
            { name: "CMS: Vifaa vya kuelimisha kuhusu Open Enrollment ya Medicare", url: "https://www.cms.gov/outreach-and-education/reach-out/find-tools-to-help-you-help-others/open-enrollment-outreach-and-media-materials" },
            { name: "Medicare.gov: Tafuta na linganisha mipango", url: "https://www.medicare.gov/plan-compare/" }
          ],
          tryIt: "Andika tarehe za Open Enrollment za mwaka huu kwenye kalenda yako. Kisha tafuta Annual Notice of Change ya mpango wako (au omba mwanafamilia akusaidie) na uandike jambo moja linalobadilika mwaka ujao. Ikiwa bado hauko kwenye Medicare, andika maswali ambayo ungeuliza kuhusu mpango.",
          youCanNow: "kutumia kipindi cha Open Enrollment cha msimu wa vuli kukagua mpango wako na kulinganisha chaguo kwa kutumia dawa zako na madaktari wako.",
          quickCheck: [
            { objective: "O4", q: "Annual Notice of Change ni nini?", options: ["Barua kutoka kwa mpango wako inayoorodhesha mabadiliko ya mwaka ujao", "Adhabu ya Medicare", "Kadi mpya", "Fomu ya kodi"], answer: 0, why: "Mipango huituma kabla ya Open Enrollment ili ukague mabadiliko ya gharama, dawa na madaktari." },
            { objective: "O4", q: "Mipango miwili ya dawa inaonekana mizuri. Mmoja una premium ya chini ya kila mwezi. Unalinganisha nini?", options: ["Premium ya kila mwezi peke yake", "Gharama ya mwaka mzima kwa dawa zako na duka lako la dawa", "Mpango unaokupigia simu mara nyingi zaidi", "Nembo"], answer: 1, why: "Angalia gharama ya mwaka mzima, si premium ya kila mwezi peke yake." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kupata msaada wa bure kutoka SHIP na Medicare",
          minutes: 5,
          goal: "Wasiliana na msaada wa Medicare wa bure usio na upendeleo, ukiwa umejiandaa na maswali yako.",
          text: [
            "Huhitaji kuelewa Medicare peke yako. Kila jimbo lina State Health Insurance Assistance Program, au SHIP. SHIP inatoa ushauri wa Medicare wa ana kwa ana katika eneo lako bila gharama kwako. Washauri hawana upendeleo: hawauzi bima. Wanaweza kukusaidia kulinganisha gharama za mipango, kukagua bima yako, kuangalia mitandao na kueleza chaguo zako. Tafuta yako kwenye shiphelp.org.",
            "Msaada wa Medicare yenyewe: tovuti rasmi medicare.gov, na namba ya simu 1-800-MEDICARE (1-800-633-4227), ambayo CMS inasema iko wazi saa 24 kwa siku, siku 7 kwa wiki. Kwa maswali ya kujiandikisha kwa Sehemu A na B, wasiliana na Social Security kwenye ssa.gov.",
            "Jiandae kabla ya kupiga simu: kuwa na kadi yako ya Medicare karibu (usimsomee namba mtu yeyote aliyekupigia), orodha yako ya madaktari na dawa, barua za mpango wako, na maswali yako yaliyoandikwa. Andika maelezo: tarehe, jina la mtu na alichosema.",
            "Mwanafamilia anaweza kujiunga na simu kwa ruhusa yako. Ukimwomba msaidizi wa AI akueleze barua ya Medicare, ondoa jina lako, namba yako ya Medicare na taarifa nyingine binafsi kwanza, na bado hakikisha jibu kwa SHIP au medicare.gov."
          ],
          steps: ["Nenda shiphelp.org na uchague jimbo lako kupata SHIP ya eneo lako.", "Andika maswali yako na ukusanye orodha yako ya madaktari na dawa.", "Piga simu SHIP, au 1-800-MEDICARE, au tumia medicare.gov.", "Andika maelezo: tarehe, jina na jibu.", "Weka tarehe ya mwisho inayofuata kwenye kalenda yako."],
          words: [["SHIP", "State Health Insurance Assistance Program: ushauri wa Medicare wa bure, usio na upendeleo, katika eneo lako."], ["Bila upendeleo", "hajaribu kukuuzia kitu chochote wala kukusukuma kwenye chaguo moja."]],
          slides: [
            { title: "SHIP: msaada wa bure wa eneo lako", bullets: ["Ushauri wa Medicare wa ana kwa ana", "Bila gharama, haiuzi bima", "Tafuta yako kwenye shiphelp.org"] },
            { title: "Msaada wa Medicare yenyewe", bullets: ["medicare.gov", "1-800-MEDICARE (1-800-633-4227), saa 24 kila siku", "Maswali ya kujiandikisha: ssa.gov"] },
            { title: "Kabla ya kupiga simu", bullets: ["Orodha yako ya madaktari na dawa", "Barua za mpango wako", "Maswali yaliyoandikwa"] },
            { title: "Wakati wa simu", bullets: ["Andika maelezo: tarehe, jina, jibu", "Mwanafamilia anaweza kujiunga", "Weka tarehe ya mwisho inayofuata kwenye kalenda"] }
          ],
          sources: [
            { name: "SHIP: State Health Insurance Assistance Programs", url: "https://www.shiphelp.org/" },
            { name: "Medicare.gov: Ongea na mtu (hakikisha saa za simu hapa)", url: "https://www.medicare.gov/talk-to-someone" }
          ],
          tryIt: "Kazi ya mwisho: tengeneza mpango wako wa Medicare wa ukurasa mmoja wenye kipindi chako cha kujiandikisha, sehemu ulizonazo au unazohitaji, madaktari wako, dawa zako na duka lako la dawa, maswali matatu, na namba ya simu ya SHIP yako kutoka shiphelp.org. Kisha piga simu SHIP yako kupanga kikao cha ushauri, au tumia zana ya kulinganisha mipango kwenye medicare.gov ukiwa na orodha yako ya dawa.",
          youCanNow: "kupata na kuwasiliana na msaada wa bure wa Medicare na kuja ukiwa umejiandaa na mpango wako na maswali yako.",
          quickCheck: [
            { objective: "O5", q: "SHIP ni nini?", options: ["Kampuni ya bima", "Mpango wa Medicare Advantage", "Mpango wa ushauri wa Medicare wa bure, usio na upendeleo, katika kila jimbo", "Kituo cha simu za mauzo"], answer: 2, why: "SHIP inatoa ushauri wa Medicare wa ana kwa ana bure na haiuzi bima." },
            { objective: "O5", q: "Unakaribia kupiga simu SHIP. Unakuwa na nini tayari?", options: ["Hakuna; wanajua kila kitu kukuhusu", "Kadi yako ya benki", "Maswali yako, orodha yako ya madaktari na dawa, na barua za mpango wako", "Namba yako ya Social Security ili uisome kwa sauti kwanza"], answer: 2, why: "Andaa maswali yako, orodha na barua zako, na uandike maelezo wakati wa simu." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kujiandikisha kwa wakati na kupata msaada",
        questions: [
          { objective: "O3", q: "Unatimiza miaka 65 mwezi Juni. Initial Enrollment Period yako ni lini?", options: ["Juni peke yake", "Januari hadi Machi", "Oktoba 15 hadi Desemba 7", "Machi hadi Septemba"], answer: 3, why: "Kinaanza miezi 3 kabla ya mwezi wako wa kuzaliwa na kuisha miezi 3 baadaye." },
          { objective: "O3", q: "Nini kinaweza kutokea ukijiandikisha Sehemu B kwa kuchelewa bila Special Enrollment Period?", options: ["Huenda ukalipa premium ya juu zaidi kwa muda wote utakaokuwa na Sehemu B", "Hakuna chochote", "Unarudishiwa pesa", "Hutaweza kupata Medicare kamwe"], answer: 0, why: "CMS inasema premium ya Sehemu B inaweza kupanda 10% kwa kila miezi 12 kamili uliyochelewa." },
          { objective: "O4", q: "Open Enrollment ya Medicare ya msimu wa vuli ni lini?", options: ["Januari 1 hadi Machi 31", "Mwezi wako wa kuzaliwa", "Oktoba 15 hadi Desemba 7", "Siku yoyote unayotaka"], answer: 2, why: "Kila msimu wa vuli, watu wenye Medicare wanaweza kubadilisha mipango kuanzia Oktoba 15 hadi Desemba 7." },
          { objective: "O4", q: "Njia bora ya kulinganisha mipango ya dawa ni ipi?", options: ["Kuchagua premium ya chini kabisa ya kila mwezi peke yake", "Kuingiza dawa zako na duka lako la dawa na kuangalia gharama ya mwaka mzima", "Kuchagua mpango anaopendekeza mtu aliyekupigia simu", "Kuchagua mpango wenye tangazo zuri zaidi"], answer: 1, why: "Gharama ya mwaka mzima kwa dawa zako mwenyewe inaonyesha bei halisi." },
          { objective: "O5", q: "Kipi ni kweli kuhusu SHIP?", options: ["Inauza mipango ya bima", "Inatoza ada kwa kila simu", "Inatoa ushauri wa Medicare wa bure, usio na upendeleo", "Inasaidia watu walio chini ya miaka 65 tu"], answer: 2, why: "Ushauri wa SHIP ni wa bure, wa eneo lako na hauna upendeleo." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Misingi ya Medicare",
    questions: [
      { objective: "O1", q: "Nani anaweza kupata Medicare?", options: ["Watu walio chini ya miaka 30 tu", "Watu wa miaka 65 au zaidi, na baadhi ya vijana wenye ulemavu au figo zilizoshindwa kufanya kazi", "Wanajeshi wastaafu tu", "Watu wanaoishi nje ya nchi tu"], answer: 1, why: "Medicare inawahudumia watu wa miaka 65+, baadhi ya watu wenye ulemavu na watu wenye End-Stage Renal Disease." },
      { objective: "O1", q: "Sehemu B hasa inalipia:", options: ["Kukaa hospitalini", "Dawa za kuandikiwa tu", "Kusafisha meno tu", "Kumwona daktari na huduma ya wagonjwa wa nje"], answer: 3, why: "Sehemu B ni bima ya matibabu kwa madaktari na huduma ya wagonjwa wa nje." },
      { objective: "O1", q: "Original Medicare ni:", options: ["Sehemu A na Sehemu B", "Sehemu C peke yake", "Sehemu D peke yake", "Mpango binafsi"], answer: 0, why: "Original Medicare inamaanisha Sehemu A na B pamoja." },
      { objective: "O1", q: "Watu wengi hulipa premium ya kila mwezi kwa:", options: ["Hakuna kitu", "Sehemu A peke yake", "Sehemu B", "Kadi yao ya Medicare"], answer: 2, why: "Watu wengi hawalipi premium ya Sehemu A lakini hulipa ya Sehemu B." },
      { objective: "O1", q: "Sehemu D inalipia:", options: ["Dawa za kuandikiwa na daktari", "Kukaa hospitalini", "Miwani tu", "Makazi"], answer: 0, why: "Sehemu D ni bima ya Medicare ya dawa za kuandikiwa." },
      { objective: "O1", q: "Mpango wa Medicare Advantage kwa kawaida:", options: ["Unalipia dawa tu", "Unajumuisha Sehemu A na B na mara nyingi bima ya dawa", "Unaendeshwa na benki yako", "Unachukua nafasi ya Social Security"], answer: 1, why: "Mipango ya Sehemu C inaunganisha A, B na kwa kawaida D." },
      { objective: "O4", q: "Mtandao (network) wa mpango ni nini?", options: ["Tovuti yake", "Namba yake ya simu", "Madaktari, hospitali na maduka ya dawa unaoshirikiana nayo", "Bili yake ya kila mwezi"], answer: 2, why: "Mipango mingi inatarajia utumie mtandao wake." },
      { objective: "O4", q: "Unapaswa kuwa na nini tayari ili kulinganisha mipango?", options: ["PIN ya benki yako", "Tangazo la gazetini", "Hakuna kitu", "Orodha ya madaktari wako, dawa zako na duka lako la dawa"], answer: 3, why: "Madaktari na dawa zako mwenyewe ndizo zinazoamua mpango upi unakufaa." },
      { objective: "O2", q: "Mtu anayepiga simu anakupa kifaa cha kupima bure ukimpa namba yako ya Medicare. Huu ni:", options: ["Huduma ya kawaida ya Medicare", "Huenda ni ulaghai", "Kujaza dawa tena duka la dawa", "Mshauri wa SHIP"], answer: 1, why: "Medicare haipigi simu ghafla kuomba namba yako; zawadi za bure ni hila ya kawaida." },
      { objective: "O2", q: "Medicare Summary Notice yako inaorodhesha kiti cha magurudumu ambacho hukuwahi kupata. Unapaswa:", options: ["Kuripoti kwa 1-800-MEDICARE", "Kupuuza", "Kukilipia", "Kutupa taarifa hiyo"], answer: 0, why: "Huduma ambayo hukuwahi kupata inaweza kuwa udanganyifu; ripoti." },
      { objective: "O3", q: "Initial Enrollment Period ni ya muda gani?", options: ["Wiki 1", "Mwezi 1", "Mwaka 1", "Miezi 7"], answer: 3, why: "Miezi 3 kabla, mwezi wa kuzaliwa na miezi 3 baadaye." },
      { objective: "O3", q: "Unapokea faida za Social Security kabla ya miaka 65. Kwa kawaida wewe:", options: ["Hustahili kamwe", "Unatozwa adhabu", "Unaandikishwa katika Sehemu A na B moja kwa moja", "Unahamishiwa Sehemu D peke yake"], answer: 2, why: "Watu ambao tayari wako kwenye Social Security kwa kawaida huandikishwa moja kwa moja; hakikisha kwenye ssa.gov." },
      { objective: "O3", q: "Una miaka 66 na bado una bima ya afya kutoka kazi yako ya sasa. Unapaswa kufanya nini kabla ya kuamua kusubiri Sehemu B?", options: ["Hakuna; kusubiri ni sawa kila mara", "Kufuta bima yako ya kazini", "Kuuliza ofisi ya faida za wafanyakazi ya mwajiri wako na SHIP", "Kumuuliza mtu wa mauzo kwa simu"], answer: 2, why: "Special Enrollment Period inaweza kukuhusu, lakini kagua hali yako kwanza." },
      { objective: "O3", q: "General Enrollment Period ni:", options: ["Januari 1 hadi Machi 31", "Oktoba 15 hadi Desemba 7", "Siku yako ya kuzaliwa tu", "Juni hadi Agosti"], answer: 0, why: "CMS imeweka General Enrollment Period kuwa Januari 1 hadi Machi 31 kila mwaka." },
      { objective: "O3", q: "Adhabu ya kuchelewa ya Sehemu B inaweza kupandisha premium kwa:", options: ["1% mara moja", "50% kwa mwezi mmoja", "Hakuna kitu", "10% kwa kila miezi 12 kamili ambayo ungeweza kuwa na Sehemu B lakini hukuwa nayo"], answer: 3, why: "CMS inasema adhabu ni hadi 10% kwa kila kipindi kamili cha miezi 12, kwa muda wote utakaokuwa na Sehemu B." },
      { objective: "O4", q: "Wakati wa Open Enrollment ya msimu wa vuli unaweza:", options: ["Kubadilisha namba yako ya Social Security", "Kubadilisha mpango wako wa Medicare Advantage au wa dawa kwa mwaka ujao", "Kupata pesa taslimu kutoka Medicare", "Kufuta Medicare tu"], answer: 1, why: "Oktoba 15 hadi Desemba 7 ndipo unaweza kubadilisha mipango kuanzia Januari 1." },
      { objective: "O4", q: "Kila msimu wa vuli mpango wako hutuma barua inayoorodhesha mabadiliko ya mwaka ujao. Ni:", options: ["Annual Notice of Change", "Kadi ya siku ya kuzaliwa", "Ritani ya kodi", "Ripoti ya mikopo"], answer: 0, why: "Soma Annual Notice of Change kabla ya Open Enrollment." },
      { objective: "O5", q: "Unapata wapi SHIP ya eneo lako?", options: ["Tangazo linalojitokeza ghafla kwenye skrini", "Kiungo kwenye ujumbe mfupi", "shiphelp.org", "Wakala yeyote wa bima"], answer: 2, why: "shiphelp.org inaorodhesha SHIP ya kila jimbo." },
      { objective: "O5", q: "Unataka kumwomba msaidizi wa AI akueleze barua ya Medicare. Kwanza unapaswa:", options: ["Kubandika namba yako ya Medicare", "Kuongeza taarifa za benki yako", "Kutuma picha ya kadi yako", "Kuondoa jina lako, namba yako ya Medicare na taarifa nyingine binafsi"], answer: 3, why: "Usishiriki kamwe namba binafsi na zana za AI; kisha hakikisha kwa SHIP au medicare.gov." },
      { objective: "O5", q: "Unapopiga simu SHIP au 1-800-MEDICARE, tabia nzuri ni:", options: ["Kukata simu haraka", "Kuandika maelezo: tarehe, jina na jibu", "Kumsomea namba yako mtu yeyote aliyekupigia", "Kusahau maswali yako"], answer: 1, why: "Maelezo yanakusaidia kukumbuka na kufuatilia." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      1,
      4,
      7,
      8,
      10,
      14,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Kipindi cha kujiandikisha",
        objective: "O3",
        notYet: "Hakuna kipindi, au miezi au tarehe si sahihi.",
        meets: "Miezi sahihi ya Initial Enrollment Period, au tarehe za Open Enrollment za mwaka huu ikiwa tayari yuko kwenye Medicare.",
        exceeds: "Anaandika kama Special Enrollment Period inaweza kuhusika na mahali ilipohakikishwa."
      },
      {
        name: "Sehemu ulizonazo au unazohitaji",
        objective: "O1",
        notYet: "Sehemu hazipo au zimechanganywa.",
        meets: "Anaorodhesha sehemu alizonazo au anazohitaji na kila moja inalipia nini.",
        exceeds: "Anataja njia anayoiangalia (Original Medicare au Medicare Advantage), na kwa nini."
      },
      {
        name: "Tayari kulinganisha",
        objective: "O4",
        notYet: "Hakuna orodha ya madaktari, dawa au duka la dawa.",
        meets: "Orodha ya madaktari, dawa na duka la dawa, tayari kwa zana ya kulinganisha mipango.",
        exceeds: "Alitumia zana au SHIP kulinganisha gharama ya mwaka mzima na mitandao."
      },
      {
        name: "Msaada wa bure na maswali",
        objective: "O5",
        notYet: "Hakuna maswali, au hakuna msaada wa bure ulioorodheshwa.",
        meets: "Maswali matatu yaliyo wazi na msaada wa bure atakaotumia: SHIP ya eneo lake, medicare.gov na 1-800-MEDICARE.",
        exceeds: "Aliwasiliana na SHIP au alitumia medicare.gov, na aliandika tarehe, jina na jibu."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (rubriki)",
      "Wanafunzi wanaowasiliana na SHIP yao au kutumia zana ya kulinganisha mipango ya medicare.gov ndani ya siku 30 (utafiti wa ufuatiliaji)",
      "Wanafunzi wanaojiandikisha ndani ya kipindi chao na kuepuka adhabu ya kuchelewa",
      "Wanafunzi wanaoripoti ulaghai wa Medicare wanaoushuku au tozo isiyo sahihi kwa 1-800-MEDICARE"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Karatasi na kalamu kwa mpango wa Medicare wa ukurasa mmoja",
      "Orodha ya madaktari, dawa na duka la dawa la mwanafunzi",
      "Simu, na kompyuta au tableti yenye intaneti kwa medicare.gov na shiphelp.org ikiwa ipo",
      "Kama dakika 60 kwa jumla, katika vikao vifupi bila haraka: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Usipendekeze mpango wala kutoa ushauri wa bima; waelekeze wanafunzi kwa SHIP ya eneo lao, ambayo ni ya bure na haina upendeleo.",
      "Kagua premium za mwaka huu na maelezo ya Open Enrollment kwenye medicare.gov kabla ya kila kikao.",
      "Usiwaombe kamwe wanafunzi watoe namba yao ya Medicare; tumia kadi ya mfano kwa mazoezi.",
      "Mwalike mshauri wa SHIP wa eneo lako kwenye kikao ikiwezekana, hasa kabla ya Oktoba 15.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati mmoja."
    ]
  }
};
