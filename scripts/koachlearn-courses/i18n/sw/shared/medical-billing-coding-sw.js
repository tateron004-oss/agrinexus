"use strict";

// Koach Learn course (Swahili translation of shared/medical-billing-coding.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.
// US-specific course: US agencies, codes, forms and certifications keep their English names.

module.exports = {
  id: "medical-billing-coding-sw",
  lang: "sw",
  translationOf: "medical-billing-coding",
  category: "Workforce Development",
  name: "Misingi ya Kutoza Bili na Kuweka Misimbo ya Matibabu",
  skills: "Kuchagua cheti cha kutoza bili na kuweka misimbo, Kufuata mzunguko wa bili, Kuchagua seti sahihi ya misimbo, Kutafuta msimbo kwa njia sahihi, Kujaza dai la mazoezi, Kulinda faragha ya mgonjwa (HIPAA)",
  outcome: "kugeuza ziara ya kubuni kwa daktari kuwa dai kamili la mazoezi: kuchagua misimbo sahihi ya utambuzi na ya huduma, kujaza visanduku vikuu vya fomu ya dai, kulikagua kabla halijatumwa, na kuweka taarifa za mgonjwa kuwa siri.",
  about: [
    "Watoza bili na waweka misimbo wa matibabu (medical billers and coders) hugeuza ziara kwa daktari kuwa misimbo na dai (claim), ili ofisi ya daktari ilipwe na kampuni ya bima. Kazi nyingi hizi zinafanywa ofisini, na baadhi zinafanywa ukiwa nyumbani (remote). Kozi hii ni hatua ya kwanza kwa wanaotafuta kazi, wanajeshi wastaafu, watu wanaorudi nyumbani kutoka gerezani na watu wazima wanaobadilisha kazi.",
    "Utajifunza kazi hii ni nini, vyeti gani waajiri wanaomba (kama CBCS kutoka NHA, CPC kutoka AAPC na CCA kutoka AHIMA), jinsi bili inavyosafiri kutoka kumpokea mgonjwa hadi malipo, seti tatu kuu za misimbo, jinsi ya kutafuta msimbo kwa njia sahihi, jinsi ya kujaza dai la mazoezi, na jinsi ya kulinda faragha ya mgonjwa chini ya sheria ya HIPAA.",
    "Kozi hii inakuandaa. Haikupi cheti. Kila cheti kina sheria zake, mafunzo, ada na mtihani wake, kwa hiyo utavikagua kwenye ukurasa rasmi. Wagonjwa na ziara zote katika kozi hii ni za kubuni, na misimbo ni ya mazoezi tu: misimbo inabadilika kila mwaka, kwa hiyo mweka misimbo halisi hutumia kitabu cha misimbo cha sasa kila wakati.",
    "Kila somo linachukua kama dakika tano na linaisha kwa kazi ya \"Jaribu sasa\" kwenye karatasi au kwenye spreadsheet ya bure. Kuna jaribio fupi baada ya kila somo, jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Geuza ziara ya kubuni katika Somo la 6 kuwa dai kamili la mazoezi: andika msimbo wa utambuzi na misimbo ya huduma, jaza visanduku vikuu vya fomu ya dai ya mazoezi ya 1500 (kwenye karatasi au spreadsheet), likague kwa orodha yako ya ukaguzi kabla ya kutuma, na uandike mpango wa ukurasa mmoja unaotaja cheti utakacholenga, mahali utakaposomea na tarehe unayolenga ya mtihani.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima wanaotafuta kazi ya kudumu ya ofisini katika huduma za afya: wanaotafuta kazi, wanajeshi wastaafu, watu wanaorudi nyumbani kutoka gerezani, vijana, wahamiaji na watu wazima wanaorudi kusoma. Wengi hawajawahi kufanya kazi katika ofisi ya matibabu. Baadhi wanataka kazi ya kufanyia nyumbani.",
    startingPoint: "Wanaweza kusoma na kuandika Kiingereza cha kila siku na kutumia simu au kompyuta ya maktaba. Wengi hawajui maneno ya matibabu, seti za misimbo, maneno ya bima wala jinsi dai linavyolipwa.",
    gap: "Kazi za kutoza bili na kuweka misimbo zinaomba cheti na ujuzi wa msingi tangu siku ya kwanza: kujua mzunguko wa bili, kuchagua seti sahihi ya misimbo, kutafuta misimbo kwa uangalifu, kujaza dai na kuweka taarifa za afya kuwa siri. Wanafunzi wanahitaji ramani wazi ya kazi na vyeti, na mazoezi ya kila hatua, kabla ya kulipia programu ya mafunzo au mtihani.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; kila neno la matibabu na la bima linaelezwa",
      "Vifaa: simu au kompyuta ya maktaba; karatasi inafaa kwa kila kazi",
      "Vitabu vya misimbo na baadhi ya zana za misimbo zinagharimu pesa; kozi inatumia zana rasmi za bure na mifano ya kubuni",
      "Misimbo inabadilika kila mwaka: kila msimbo unaoonyeshwa ni wa mazoezi tu",
      "Faragha: hakuna taarifa halisi ya mgonjwa inayotumika popote katika kozi",
      "Baadhi ya vyeti vinauliza kuhusu historia ya mtu; wanafunzi wanakagua sheria za kila programu wenyewe"
    ],
    prerequisites: "Hakuna. Kozi za \"Excel and Spreadsheets\" na \"Health Literacy\" zinasaidia lakini hazihitajiki."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukitumia kurasa rasmi za NHA, AAPC na AHIMA", action: "kulinganisha vyeti vitatu vya kutoza bili na kuweka misimbo na kuandika mpango wa kusoma na wa mtihani wenye tarehe", standard: "masharti yakiwa yamekaguliwa kwenye ukurasa rasmi, si kwa kubahatisha" },
    { id: "O2", condition: "Ukipewa hatua za ziara kwa daktari zisizo kwa mpangilio", action: "kupanga hatua za mzunguko wa bili kwa mpangilio, kutoka kupanga miadi hadi malipo", standard: "bila kukosa hatua yoyote" },
    { id: "O3", condition: "Ukipewa sehemu tano za ziara ya kubuni", action: "kulinganisha kila sehemu na seti sahihi ya misimbo: ICD-10-CM kwa utambuzi, CPT kwa huduma ya daktari, HCPCS Level II kwa vifaa", standard: "ukipata angalau 4 kati ya 5 sahihi" },
    { id: "O4", condition: "Ukipewa utambuzi kutoka kwa maelezo ya ziara ya kubuni", action: "kutafuta msimbo wa utambuzi kwa kupata neno kwenye faharasa na kisha kuuthibitisha kwenye orodha ya misimbo", standard: "kila mara, bila kuweka msimbo kutoka faharasa peke yake" },
    { id: "O5", condition: "Ukipewa ziara ya kubuni na fomu tupu ya dai la mazoezi", action: "kujaza visanduku vikuu vya dai na kupata sababu ya dai la mazoezi kukataliwa", standard: "mgonjwa, bima, misimbo na gharama vikilingana na ziara" },
    { id: "O6", condition: "Katika hali za mazoezi kazini", action: "kushiriki taarifa za mgonjwa na watu wanaozihitaji tu, na kiwango cha chini tu wanachohitaji", standard: "katika kila hali, kwa kufuata HIPAA" }
  ],
  chapters: [
    {
      name: "Sura 1: Kazi, vyeti na misimbo",
      lessons: [
        {
          title: "Kazi hii na vyeti ambavyo waajiri wanaomba",
          objectives: ["O1"],
          minutes: 5,
          goal: "Linganisha vyeti vitatu vya kutoza bili na kuweka misimbo na uchague kimoja cha kulenga.",
          text: [
            "Mweka misimbo wa matibabu (medical coder) husoma maelezo ya daktari na kugeuza utambuzi na huduma kuwa misimbo. Mtoza bili wa matibabu (medical biller) hutumia misimbo hiyo kutuma dai kwa kampuni ya bima na hulifuatilia hadi lilipwe. Katika ofisi ndogo mara nyingi mtu mmoja hufanya kazi zote mbili.",
            "Waajiri mara nyingi huomba cheti. Vitatu vinavyojulikana: Certified Billing and Coding Specialist (CBCS) kutoka NHA, National Healthcareer Association; Certified Professional Coder (CPC) kutoka AAPC; na Certified Coding Associate (CCA) kutoka AHIMA, American Health Information Management Association.",
            "Kila kimoja kina sheria zake. Kwa mfano, CBCS ya NHA inaomba cheti cha kumaliza sekondari (high school diploma) au GED pamoja na programu ya mafunzo au uzoefu wa kazi unaosimamiwa. Ada, sheria za mtihani na masharti hubadilika, kwa hiyo soma ukurasa rasmi wa kila kimoja kabla ya kulipia chochote. Kozi hii inakuandaa; haikupi cheti.",
            "Jihadhari na programu zinazoahidi kazi au cheti kwa siku chache. Uliza shule yoyote inakuandaa kwa mtihani wa cheti gani, na ukague mtihani huo kwenye ukurasa rasmi."
          ],
          steps: ["Fungua ukurasa rasmi wa CBCS (nhanow.com), CPC (aapc.com) na CCA (ahima.org).", "Kwa kila kimoja, andika nani anakitoa, unahitaji nini kabla ya mtihani, na unafanyaje mtihani.", "Angalia matangazo ya kazi karibu nawe na uhesabu cheti kipi kinaombwa zaidi.", "Chagua kimoja cha kulenga, na uandike mwezi unaolenga kufanya mtihani."],
          words: [["Mweka misimbo wa matibabu (medical coder)", "mtu anayegeuza maelezo ya daktari kuwa misimbo ya kawaida."], ["Mtoza bili wa matibabu (medical biller)", "mtu anayetuma madai kwa kampuni za bima na kuyafuatilia hadi yalipwe."], ["Cheti (certification)", "uthibitisho kutoka shirika la mitihani kwamba ulifaulu mtihani wake; pia huitwa credential."], ["Dai (claim)", "bili inayotumwa kwa kampuni ya bima kuiomba ilipie ziara."]],
          slides: [
            { title: "Mweka misimbo na mtoza bili", bullets: ["Mweka misimbo: hugeuza maelezo ya daktari kuwa misimbo", "Mtoza bili: hutuma dai na hulifuatilia hadi lilipwe", "Ofisi ndogo: mara nyingi mtu mmoja hufanya zote"] },
            { title: "Vyeti vitatu vinavyojulikana", bullets: ["CBCS kutoka NHA", "CPC kutoka AAPC", "CCA kutoka AHIMA"] },
            { title: "Kagua kabla ya kulipa", bullets: ["Sheria, ada na mitihani hubadilika", "Soma kila ukurasa rasmi", "Kozi hii inakuandaa; si cheti"] },
            { title: "Chagua njia yako", bullets: ["Hesabu kile matangazo ya kazi ya karibu yanaomba", "Chagua cheti kimoja", "Andika mwezi unaolenga wa mtihani"] }
          ],
          sources: [
            { name: "NHA: Certified Billing and Coding Specialist (CBCS)", url: "https://www.nhanow.com/certifications/billing-coding" },
            { name: "AAPC: Certified Professional Coder (CPC)", url: "https://www.aapc.com/certifications/cpc" },
            { name: "AHIMA: Certified Coding Associate (CCA)", url: "https://www.ahima.org/certification-careers/certifications-overview/cca/" }
          ],
          tryIt: "Tengeneza jedwali la safu tatu kwenye karatasi au spreadsheet: CBCS, CPC, CCA. Kwa kila kimoja, andika nani anakitoa na unahitaji nini kabla ya mtihani, kutoka ukurasa rasmi. Kisha angalia matangazo matano ya kazi ya karibu nawe na uzungushie duara cheti utakacholenga.",
          youCanNow: "kusema watoza bili na waweka misimbo hufanya nini, kutaja vyeti vitatu na nani anavitoa, na kuchagua kimoja cha kulenga.",
          quickCheck: [
            { objective: "O1", q: "Nani anatoa cheti cha CPC?", options: ["Ofisi ya daktari unayofanyia kazi", "AAPC", "Ofisi ya magari ya jimbo lako", "Shule yoyote ya mtandaoni"], answer: 1, why: "Certified Professional Coder (CPC) ni cheti cha AAPC." },
            { objective: "O1", q: "Tovuti inasema unaweza kuwa mweka misimbo mwenye cheti kwa siku tatu kwa ada ndogo. Unafanya nini kwanza?", options: ["Lipa haraka kabla bei haijapanda", "Waambie waajiri una cheti", "Kagua sheria za mtihani halisi kwenye ukurasa rasmi", "Ruka mafunzo; tovuti inatosha"], answer: 2, why: "Shirika linalotoa cheti tu ndilo linaloweza kukuambia sheria zake halisi na mtihani wake." }
          ]
        },
        {
          title: "Jinsi bili inavyosafiri: mzunguko wa bili",
          objectives: ["O2"],
          minutes: 5,
          goal: "Panga hatua za mzunguko wa bili kwa mpangilio, kutoka kupanga miadi hadi malipo.",
          text: [
            "Mzunguko wa bili (billing cycle), pia huitwa mzunguko wa mapato (revenue cycle), ni njia kutoka wakati mgonjwa anapanga miadi hadi wakati ofisi inapolipwa yote.",
            "Hatua kuu: 1) Panga miadi na ukague bima. 2) Mpokee mgonjwa: thibitisha jina lake, tarehe ya kuzaliwa na kadi ya bima. 3) Daktari anamwona mgonjwa na anaandika maelezo. 4) Mweka misimbo anageuza maelezo kuwa misimbo. 5) Mtoza bili anatengeneza dai na kulikagua. 6) Dai linatumwa kwa kampuni ya bima. 7) Kampuni ya bima inalipa, inalipa sehemu, au inalikataa, na inatuma maelezo. 8) Ofisi inamtoza mgonjwa anachodaiwa, kama copay, na inafuatilia chochote ambacho hakijalipwa.",
            "Makosa ya mwanzo wa mzunguko husababisha matatizo baadaye. Namba ya bima isiyo sahihi wakati wa kumpokea mgonjwa inaweza kufanya dai likataliwe wiki kadhaa baadaye. Ndiyo sababu kumpokea mgonjwa kwa uangalifu ni muhimu kama kuweka misimbo kwa uangalifu."
          ],
          steps: ["Panga miadi na ukague bima.", "Mpokee mgonjwa na uthibitishe taarifa zake.", "Daktari anamwona mgonjwa na anaandika maelezo.", "Weka misimbo ya ziara.", "Tengeneza dai na ulikague.", "Tuma dai.", "Soma malipo au kukataliwa.", "Mtoze mgonjwa sehemu yake na ufuatilie."],
          words: [["Mzunguko wa bili (mzunguko wa mapato)", "hatua zote kutoka kupanga ziara hadi kulipwa yote."], ["Copay", "kiasi kilichowekwa ambacho mgonjwa analipa kwa ziara."], ["Deductible", "kiasi ambacho mgonjwa analipa kila mwaka kabla bima haijaanza kulipia huduma nyingi."], ["Mlipaji (payer)", "kampuni ya bima au programu ya serikali inayolipa dai."], ["Kukataliwa (denial)", "mlipaji anapokataa kulipa dai."]],
          slides: [
            { title: "Kutoka miadi hadi malipo", bullets: ["Huitwa mzunguko wa bili au mzunguko wa mapato", "Kila hatua inaathiri kulipwa"] },
            { title: "Mwanzo wa mzunguko", bullets: ["1. Panga miadi na ukague bima", "2. Mpokee mgonjwa: jina, tarehe ya kuzaliwa, kadi ya bima", "3. Daktari anamwona mgonjwa na anaandika maelezo"] },
            { title: "Katikati ya mzunguko", bullets: ["4. Weka misimbo ya ziara", "5. Tengeneza dai na ulikague", "6. Litume kwa mlipaji"] },
            { title: "Mwisho wa mzunguko", bullets: ["7. Mlipaji analipa, analipa sehemu au anakataa", "8. Mtoze mgonjwa sehemu yake na ufuatilie", "Makosa ya mwanzo husababisha kukataliwa baadaye"] }
          ],
          tryIt: "Andika hatua nane za mzunguko wa bili kwenye vipande vinane vya karatasi. Vichanganye, kisha virudishe kwa mpangilio bila kuangalia. Karibu na kila hatua, andika kosa moja linaloweza kutokea hapo, kwa mfano jina lililoandikwa vibaya wakati wa kumpokea mgonjwa.",
          youCanNow: "kuorodhesha hatua za mzunguko wa bili kwa mpangilio na kusema jinsi kosa la mwanzo linavyoweza kusababisha dai kukataliwa baadaye.",
          quickCheck: [
            { objective: "O2", q: "Ni hatua gani inayokuja mara baada ya mweka misimbo kugeuza maelezo kuwa misimbo?", options: ["Kupanga miadi", "Kumpokea mgonjwa", "Mlipaji anatuma malipo", "Mtoza bili anatengeneza dai na kulikagua"], answer: 3, why: "Kuweka misimbo kunakuja kwanza; kisha mtoza bili anatengeneza dai kutokana na misimbo hiyo na kulikagua." },
            { objective: "O2", q: "Wakati wa kumpokea mgonjwa, namba ya bima yake inaandikwa vibaya. Nini kina uwezekano mkubwa wa kutokea?", options: ["Dai linaweza kukataliwa baadaye", "Hakuna; mweka misimbo ataona", "Daktari analipwa haraka zaidi", "Copay ya mgonjwa inashuka"], answer: 0, why: "Mlipaji analinganisha dai na kumbukumbu za wanachama wake; namba isiyo sahihi mara nyingi husababisha kukataliwa." }
          ]
        },
        {
          title: "Seti tatu za misimbo",
          objectives: ["O3"],
          minutes: 6,
          goal: "Linganisha kila sehemu ya ziara na seti sahihi ya misimbo.",
          text: [
            "Dai linajibu maswali mawili: kwa nini mgonjwa alikuja, na ofisi ilifanya nini? Seti tofauti za misimbo zinajibu kila swali.",
            "Misimbo ya ICD-10-CM inasema KWA NINI: utambuzi, dalili au ishara. Inaanza na herufi, kisha namba, na inaweza kuwa na nukta, kwa mfano I10 kwa shinikizo la damu la juu lisilo na sababu inayojulikana (mfano wa mazoezi). Nchini Marekani, National Center for Health Statistics (NCHS) ya CDC ndiyo inayotunza ICD-10-CM.",
            "Misimbo ya CPT inasema NINI daktari au mtaalamu mwingine alifanya: ziara ya ofisini, kipimo cha maabara, utaratibu wa matibabu. Ina tarakimu tano, kwa mfano 36415 kwa kutoa damu kutoka kwenye mshipa (mfano wa mazoezi). American Medical Association (AMA) inamiliki na kusasisha CPT. CMS inaita CPT \"HCPCS Level I\".",
            "Misimbo ya HCPCS Level II inahusu vitu ambavyo CPT haihusu, kama vifaa vya matumizi, vifaa vya matibabu na safari za ambulensi. Ina herufi moja na tarakimu nne. CMS (Centers for Medicare & Medicaid Services) inaitunza. Seti zote za misimbo zinasasishwa kila mwaka, kwa hiyo tumia kitabu au zana ya sasa kila wakati."
          ],
          words: [["Utambuzi (diagnosis)", "tatizo la afya ambalo daktari analigundua au analitibu."], ["ICD-10-CM", "seti ya misimbo ya utambuzi nchini Marekani."], ["CPT", "seti ya misimbo ya tarakimu tano ya AMA kwa huduma na taratibu za matibabu; pia huitwa HCPCS Level I."], ["HCPCS Level II", "seti ya misimbo ya CMS kwa vifaa vya matumizi, vifaa vya matibabu na vitu vingine ambavyo CPT haihusu; herufi moja na tarakimu nne."], ["CMS", "Centers for Medicare & Medicaid Services, shirika la serikali kuu ya Marekani linaloendesha Medicare na kufanya kazi na majimbo kuhusu Medicaid."]],
          slides: [
            { title: "Maswali mawili ambayo kila dai linajibu", bullets: ["KWA NINI mgonjwa alikuja? (utambuzi)", "Ofisi ilifanya NINI? (huduma au kitu)"] },
            { title: "ICD-10-CM: kwa nini", bullets: ["Utambuzi, dalili na ishara", "Herufi + namba, mara nyingi nukta: I10", "Nchini Marekani inatunzwa na NCHS ya CDC"] },
            { title: "CPT: nini kilifanyika", bullets: ["Huduma za madaktari na wataalamu wengine", "Tarakimu tano: 36415 (mfano wa mazoezi)", "Inamilikiwa na AMA; pia huitwa HCPCS Level I"] },
            { title: "HCPCS Level II: vitu na ziada", bullets: ["Vifaa vya matumizi, vifaa vya matibabu, safari za ambulensi", "Herufi moja + tarakimu nne", "Inatunzwa na CMS; seti zote hubadilika kila mwaka"] }
          ],
          sources: [
            { name: "CDC NCHS: ICD-10-CM", url: "https://www.cdc.gov/nchs/icd/icd-10-cm/index.html" },
            { name: "CMS: HCPCS (Level I ni CPT, Level II inatunzwa na CMS)", url: "https://www.cms.gov/medicare/coding-billing/healthcare-common-procedure-system" }
          ],
          tryIt: "Mazoezi tu. Kwa ziara hii ya kubuni, andika seti ya misimbo kwa kila sehemu: (1) maumivu ya koo, (2) ziara ya ofisini na daktari, (3) kipimo cha haraka cha strep, (4) shinikizo la damu la juu, (5) jozi ya magongo ambayo mgonjwa anaenda nayo nyumbani. Majibu: 1 na 4 ni ICD-10-CM, 2 na 3 ni CPT, 5 ni HCPCS Level II.",
          youCanNow: "kusema seti ipi ya misimbo inajibu kwa nini mgonjwa alikuja na ipi inajibu nini kilifanyika, na kulinganisha sehemu za ziara na ICD-10-CM, CPT au HCPCS Level II.",
          quickCheck: [
            { objective: "O3", q: "Unatumia seti gani ya misimbo kwa utambuzi wa mgonjwa?", options: ["CPT", "HCPCS Level II", "ICD-10-CM", "Msimbo wa posta (zip code)"], answer: 2, why: "Misimbo ya ICD-10-CM inasema kwa nini mgonjwa alikuja: utambuzi, dalili au ishara." },
            { objective: "O3", q: "Mgonjwa anaenda nyumbani na kitembezi (walker). Seti gani ya misimbo kwa kawaida inahusu kitembezi hicho?", options: ["HCPCS Level II", "ICD-10-CM", "CPT", "Hakuna msimbo unaohitajika"], answer: 0, why: "Vifaa vya matibabu na vya matumizi ambavyo CPT haihusu vinatumia misimbo ya HCPCS Level II." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kazi, vyeti na misimbo",
        questions: [
          { objective: "O1", q: "NHA inatoa cheti gani cha kutoza bili na kuweka misimbo?", options: ["CPC", "CCA", "CDL", "CBCS"], answer: 3, why: "Cheti cha NHA cha kutoza bili na kuweka misimbo ni Certified Billing and Coding Specialist (CBCS)." },
          { objective: "O2", q: "Mzunguko wa bili ni nini?", options: ["Hatua kutoka kupanga ziara hadi kulipwa yote", "Baiskeli ya wafanyakazi wa ofisini", "Ratiba ya kila siku ya daktari", "Mpangilio wa misimbo kwenye dai"], answer: 0, why: "Mzunguko wa bili (wa mapato) unaanzia kupanga miadi hadi malipo ya mwisho." },
          { objective: "O2", q: "Mlipaji analipa sehemu ya dai. Kwa kawaida hatua inayofuata ni ipi?", options: ["Futa dai", "Mtoze mgonjwa sehemu yake na ufuatilie", "Badilisha utambuzi", "Panga ziara mpya"], answer: 1, why: "Baada ya sehemu ya mlipaji, ofisi inamtoza mgonjwa sehemu yake, kama copay au deductible." },
          { objective: "O3", q: "Upi ni muundo wa msimbo wa CPT?", options: ["Herufi moja na tarakimu nne", "Herufi, namba na nukta", "Tarakimu tano", "Neno la herufi kumi"], answer: 2, why: "Misimbo ya CPT ina tarakimu tano; ICD-10-CM inaanza na herufi na HCPCS Level II ni herufi pamoja na tarakimu nne." },
          { objective: "O3", q: "Nani anatunza ICD-10-CM nchini Marekani?", options: ["National Center for Health Statistics ya CDC", "American Medical Association", "Kila ofisi ya daktari", "Mwajiri wa mgonjwa"], answer: 0, why: "NCHS ya CDC inatunza toleo la Marekani la ICD-10, linaloitwa ICD-10-CM." }
        ]
      }
    },
    {
      name: "Sura 2: Misimbo, madai na faragha",
      lessons: [
        {
          title: "Kutafuta msimbo kwa njia sahihi",
          objectives: ["O4"],
          minutes: 5,
          goal: "Tafuta msimbo wa utambuzi kwenye faharasa na uuthibitishe kwenye orodha ya misimbo.",
          text: [
            "ICD-10-CM ina sehemu mbili kuu. Faharasa ya alfabeti (alphabetic index) inaorodhesha hali za ugonjwa kwa majina, kama faharasa ya kitabu. Orodha ya jedwali (tabular list) inaonyesha kila msimbo kwa mpangilio, na maelezo ya lini uutumie na lini usiutumie.",
            "Kanuni ambayo waweka misimbo hufuata: tafuta neno kuu kwenye faharasa kwanza, kisha kila mara thibitisha msimbo kwenye orodha ya jedwali. Usiweke msimbo kutoka faharasa peke yake, kwa sababu orodha ya jedwali inaweza kusema uongeze herufi au utumie msimbo mwingine.",
            "Tafuta hali ya ugonjwa, si sehemu ya mwili. Kwa \"acute sore throat\" (maumivu makali ya koo), neno kuu ni pharyngitis (neno la kitabibu la koo linalouma na kuvimba). Kisha soma maelezo kwenye orodha ya jedwali kabla ya kuchagua msimbo. CPT nayo ina faharasa yake na orodha ya misimbo, na inafanya kazi kwa njia hiyo hiyo.",
            "Mazoezi ya bure: ICD-10-CM Browser Tool ya CDC inakuruhusu kutafuta seti ya misimbo mtandaoni. Katika kazi halisi, unatumia kitabu cha misimbo cha sasa au zana ambayo mwajiri wako analipia, pamoja na maelezo ya daktari, kamwe si kubahatisha."
          ],
          steps: ["Soma maelezo ya daktari na upate utambuzi.", "Tafuta neno kuu la hali ya ugonjwa kwenye faharasa ya alfabeti.", "Andika msimbo ambao faharasa inaonyesha.", "Nenda kwenye msimbo huo kwenye orodha ya jedwali.", "Soma maelezo: \"includes\", \"excludes\", na kama herufi zaidi zinahitajika.", "Chagua msimbo unaolingana kabisa na maelezo."],
          words: [["Faharasa ya alfabeti (alphabetic index)", "sehemu ya kitabu cha misimbo inayoorodhesha hali za ugonjwa kwa majina, A hadi Z."], ["Orodha ya jedwali (tabular list)", "sehemu ya kitabu cha misimbo inayoorodhesha kila msimbo kwa mpangilio, na kanuni za kuutumia."], ["Neno kuu (main term)", "neno la hali ya ugonjwa unalotafuta kwanza, si sehemu ya mwili."], ["Usahihi (specificity)", "jinsi msimbo ulivyo kamili; waweka misimbo hutumia msimbo kamili zaidi unaoungwa mkono na maelezo ya daktari."]],
          slides: [
            { title: "Sehemu mbili za kitabu cha misimbo", bullets: ["Faharasa ya alfabeti: hali za ugonjwa A hadi Z", "Orodha ya jedwali: kila msimbo kwa mpangilio, na kanuni"] },
            { title: "Kanuni ya hatua mbili", bullets: ["1. Tafuta neno kuu kwenye faharasa", "2. Thibitisha msimbo kwenye orodha ya jedwali", "Usiweke msimbo kutoka faharasa peke yake"] },
            { title: "Tafuta hali ya ugonjwa", bullets: ["Neno kuu = hali ya ugonjwa, si sehemu ya mwili", "Soma maelezo ya \"includes\" na \"excludes\"", "Tumia msimbo kamili zaidi unaoungwa mkono na maelezo"] },
            { title: "Fanya mazoezi bure", bullets: ["ICD-10-CM Browser Tool ya CDC", "Kazini: kitabu cha sasa au zana ya mwajiri", "Weka msimbo kutoka maelezo ya daktari, kamwe si kubahatisha"] }
          ],
          sources: [
            { name: "CDC NCHS: ICD-10-CM na ICD-10-CM Browser Tool", url: "https://www.cdc.gov/nchs/icd/icd-10-cm/index.html" }
          ],
          tryIt: "Mazoezi tu. Fungua ICD-10-CM Browser Tool ya CDC kutoka kiungo cha chanzo. Tafuta utambuzi huu wa kubuni: \"acute pharyngitis\", \"essential hypertension\" na \"type 2 diabetes without complications\". Kwa kila mmoja, andika neno kuu ulilotafuta, msimbo uliopata na maelezo moja uliyosoma kabla ya kuuchagua.",
          youCanNow: "kutafuta msimbo wa utambuzi kwa hatua mbili, faharasa kisha orodha ya jedwali, na kusema kwa nini hauishii kwenye faharasa kamwe.",
          quickCheck: [
            { objective: "O4", q: "Umepata msimbo kwenye faharasa ya alfabeti. Unafanya nini baadaye?", options: ["Uweke kwenye dai mara moja", "Uuthibitishe kwenye orodha ya jedwali na usome maelezo yake", "Muulize mgonjwa kama unaonekana sawa", "Chagua msimbo mfupi zaidi ulio karibu"], answer: 1, why: "Orodha ya jedwali ina kanuni na inaweza kuhitaji herufi za ziada; usiweke msimbo kutoka faharasa peke yake." },
            { objective: "O4", q: "Maelezo yanasema \"acute bronchitis\". Neno kuu la kutafuta ni lipi?", options: ["Acute", "Kifua", "Mapafu", "Bronchitis"], answer: 3, why: "Unatafuta hali ya ugonjwa (bronchitis), kisha unatafuta \"acute\" chini yake." }
          ]
        },
        {
          title: "Kujaza dai na kurekebisha kukataliwa",
          objectives: ["O5"],
          minutes: 6,
          goal: "Jaza visanduku vikuu vya dai la mazoezi la 1500 na upate kwa nini dai lilikataliwa.",
          text: [
            "Ofisi za madaktari hutoza bili kwa fomu ya dai ya 1500, inayotunzwa na National Uniform Claim Committee (NUCC). Toleo la karatasi linalotumika ni fomu ya 02/12. Madai mengi leo yanatumwa kwa njia ya kielektroniki, lakini dai la kielektroniki lina taarifa zile zile, kwa hiyo kujifunza fomu ya karatasi kunakufundisha taarifa hizo.",
            "Visanduku vikuu vya kujua (mazoezi): Kisanduku 1a, namba ya kitambulisho ya mwenye bima kutoka kadi ya bima. Kisanduku 2, jina la mgonjwa. Kisanduku 21, misimbo ya utambuzi, yenye herufi A, B, C na kuendelea. Kisanduku 24, mistari ya huduma: tarehe ya huduma (24A), msimbo wa CPT au HCPCS (24D), kiashiria cha utambuzi kinachounganisha huduma na herufi ya utambuzi katika Kisanduku 21 (24E) na gharama (24F). Kisanduku 33, mtoa huduma anayetoza bili.",
            "Kabla dai halijatumwa, likague: mgonjwa na kitambulisho sahihi, kila huduma ina kiashiria cha utambuzi, misimbo ni ya sasa, tarehe na gharama zinalingana na ziara. Kupata makosa sasa ni rahisi kuliko kurekebisha kukataliwa baadaye.",
            "Dai linapokataliwa, mlipaji anatuma remittance (maelezo ya malipo) yenye sababu. Sababu za kawaida: kitambulisho au jina si sahihi, msimbo unakosekana au si halali, huduma haihusiki na bima, idhini ya awali inakosekana, dai limerudiwa, au limetumwa kwa kuchelewa. Tafuta sababu, irekebishe, na ulitume tena au ukate rufaa kwa kufuata kanuni za mlipaji."
          ],
          steps: ["Nakili kitambulisho cha mwenye bima (1a) na jina la mgonjwa (2) kama yalivyo kutoka kadi ya kubuni.", "Andika misimbo ya utambuzi katika Kisanduku 21 kama A, B, C.", "Kwenye kila mstari wa huduma katika Kisanduku 24, andika tarehe, msimbo wa CPT au HCPCS, kiashiria cha utambuzi na gharama.", "Jaza mtoa huduma anayetoza bili (33).", "Kagua dai kwa orodha yako ya ukaguzi kabla ya kutuma.", "Likirudi limekataliwa, soma sababu, rekebisha chanzo na ulitume tena kwa kufuata kanuni za mlipaji."],
          words: [["Fomu ya dai ya 1500", "fomu ya kawaida ya karatasi ya madai kwa ofisi za madaktari, inayotunzwa na NUCC."], ["Kiashiria cha utambuzi (diagnosis pointer)", "herufi kwenye mstari wa huduma (A, B, C) inayouunganisha na utambuzi katika Kisanduku 21."], ["Remittance (EOB au ERA)", "maelezo ya mlipaji kuhusu alicholipa au alichokataa, na kwa nini."], ["Idhini ya awali (prior authorization)", "ruhusa kutoka kwa mlipaji kabla baadhi ya huduma hazijafanywa."], ["Dai safi (clean claim)", "dai lisilo na makosa, ili liweze kulipwa mara ya kwanza."]],
          slides: [
            { title: "Fomu ya dai ya 1500", bullets: ["Inatunzwa na NUCC; toleo la karatasi 02/12", "Madai ya kielektroniki yana taarifa zile zile"] },
            { title: "Visanduku vikuu (mazoezi)", bullets: ["1a: kitambulisho cha mwenye bima  •  2: jina la mgonjwa", "21: misimbo ya utambuzi A, B, C...", "24: tarehe, msimbo, kiashiria, gharama  •  33: mtoa huduma anayetoza bili"] },
            { title: "Kagua kabla ya kutuma", bullets: ["Mgonjwa na kitambulisho sahihi", "Kila mstari wa huduma una kiashiria", "Misimbo ya sasa; tarehe na gharama zinalingana"] },
            { title: "Sababu za kawaida za kukataliwa", bullets: ["Kitambulisho au jina si sahihi; msimbo unakosekana au si halali", "Haihusiki na bima; hakuna idhini ya awali", "Limerudiwa au limechelewa: rekebisha, kisha tuma tena"] }
          ],
          sources: [
            { name: "NUCC: Fomu ya dai ya 1500", url: "https://www.nucc.org/index.php/1500-claim-form-mainmenu-35" }
          ],
          tryIt: "Mazoezi tu. Mgonjwa wa kubuni: Sam Rivera, kitambulisho cha bima ABC123456. Ziara siku utakayochagua: ziara ya ofisini (99213) kwa maumivu ya koo (J02.9) pamoja na kipimo cha haraka cha strep (87880), gharama $100 na $25 (za kubuni). Kwenye karatasi au spreadsheet, jaza Visanduku 1a, 2, 21, 24 (mistari miwili) na 33 (\"Practice Clinic\"). Kisha dai linarudi: \"invalid member ID\". Andika ungekagua nini na ungerekebisha nini.",
          youCanNow: "kujaza visanduku vikuu vya dai la mazoezi, kulikagua kabla halijatumwa, na kupata na kurekebisha sababu ya kukataliwa.",
          quickCheck: [
            { objective: "O5", q: "Misimbo ya utambuzi inaandikwa wapi kwenye fomu ya 1500?", options: ["Kisanduku 2", "Kisanduku 33", "Kisanduku 21", "Kisanduku 1a"], answer: 2, why: "Kisanduku 21 kinabeba misimbo ya utambuzi, yenye herufi A, B, C na kuendelea." },
            { objective: "O5", q: "Dai linakataliwa kwa \"service requires prior authorization\". Nini kilikosekana?", options: ["Idhini ya mlipaji kabla ya huduma", "Jina la kati la mgonjwa", "Nakala ya pili ya dai", "Saini ya daktari kwenye faili la karatasi"], answer: 0, why: "Idhini ya awali ni ruhusa ya mlipaji kabla ya baadhi ya huduma; bila hiyo dai linakataliwa." }
          ]
        },
        {
          title: "Kulinda faragha ya mgonjwa, na dai lako la mazoezi",
          objectives: ["O6"],
          minutes: 5,
          goal: "Shiriki taarifa za mgonjwa na watu wanaozihitaji tu, na kile tu wanachohitaji.",
          text: [
            "Watoza bili na waweka misimbo huona taarifa za siri za afya kila siku: majina, tarehe za kuzaliwa, utambuzi, namba za bima. HIPAA ni sheria ya serikali kuu ya Marekani inayozilinda. Kanuni yake ya Faragha (Privacy Rule) inahusu mipango ya bima ya afya, ofisi nyingi za madaktari na hospitali, na kampuni zinazofanya kazi kwa niaba yao, kama kampuni za kutoza bili.",
            "Taarifa za afya zinazolindwa (PHI) ni taarifa yoyote ya afya inayoweza kumtambulisha mtu. Kanuni ya \"kiwango cha chini kinachohitajika\" (minimum necessary) inamaanisha unatumia na kushiriki kile tu kinachohitajika kwa kazi. Mlipaji anaweza kuhitaji msimbo wa utambuzi kwenye dai; mfanyakazi mwenzako katika chumba cha mapumziko hahitaji kuusikia.",
            "Tabia za kila siku: funga skrini yako unapoondoka, usizungumze kuhusu wagonjwa hadharani, thibitisha utambulisho wa yeyote anayepiga simu, tuma madai kupitia mifumo iliyoidhinishwa tu, na usitume PHI kwa barua pepe au ujumbe kutoka akaunti yako binafsi. Ukiona kosa la faragha, mwambie msimamizi wako au afisa wa faragha mara moja.",
            "Sasa unganisha yote katika kazi yako ya mwisho: dai kamili la mazoezi na mpango wako wa cheti."
          ],
          steps: ["Kabla ya kushiriki, jiulize: je, mtu huyu ana sababu ya kikazi ya kujua?", "Shiriki kiwango cha chini tu anachohitaji.", "Thibitisha nani anapiga simu kabla ya kutoa chochote.", "Funga skrini yako na utumie mifumo iliyoidhinishwa tu.", "Ripoti makosa ya faragha kwa msimamizi wako au afisa wa faragha."],
          words: [["HIPAA", "sheria ya serikali kuu ya Marekani inayolinda faragha na usalama wa taarifa za afya."], ["PHI", "protected health information (taarifa za afya zinazolindwa): taarifa za afya zinazoweza kumtambulisha mtu."], ["Kiwango cha chini kinachohitajika (minimum necessary)", "wazo la HIPAA la kutumia au kushiriki taarifa zinazohitajika kwa kazi hiyo tu."], ["Afisa wa faragha (privacy officer)", "mtu kazini anayesimamia kanuni za faragha na ripoti."]],
          slides: [
            { title: "HIPAA inalinda wagonjwa", bullets: ["Sheria ya Marekani ya faragha ya taarifa za afya", "Inahusu mipango ya bima, madaktari wengi na kampuni zao za kutoza bili"] },
            { title: "Kiwango cha chini kinachohitajika", bullets: ["Shiriki na wanaohitaji kwa kazi tu", "Shiriki kile tu wanachohitaji"] },
            { title: "Tabia za kila siku", bullets: ["Funga skrini yako", "Usizungumze kuhusu wagonjwa hadharani", "Thibitisha nani anapiga simu", "Mifumo iliyoidhinishwa tu, kamwe si barua pepe binafsi"] },
            { title: "Kazi ya mwisho", bullets: ["Kamilisha dai la mazoezi", "Likague kwa orodha yako ya ukaguzi kabla ya kutuma", "Andika mpango wako wa cheti wenye tarehe"] }
          ],
          sources: [
            { name: "HHS: HIPAA kwa wataalamu (Privacy Rule)", url: "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html" }
          ],
          tryIt: "Kazi ya mwisho, mazoezi tu. Ziara ya kubuni: Ana Lee, kitambulisho cha bima XYZ987654, anamwona daktari (99213) kwa shinikizo la damu la juu (I10) na anatolewa damu kutoka kwenye mshipa (36415); gharama za kubuni $100 na $15. Jaza dai la mazoezi la 1500 (Visanduku 1a, 2, 21, 24, 33), likague kwa orodha ya ukaguzi kabla ya kutuma utakayoiandika mwenyewe, na uongeze mpango wa ukurasa mmoja: cheti chako, mahali utakaposomea, na tarehe unayolenga ya mtihani. Usitumie taarifa halisi ya mgonjwa yeyote.",
          youCanNow: "kulinda taarifa za mgonjwa kwa kanuni ya kiwango cha chini kinachohitajika na kugeuza ziara ya kubuni kuwa dai kamili la mazoezi lililokaguliwa.",
          quickCheck: [
            { objective: "O6", q: "Mpigaji simu anasema ni dada wa mgonjwa na anauliza utambuzi wake. Unafanya nini?", options: ["Msomee utambuzi ili umsaidie", "Mtumie kwa ujumbe baadaye", "Mwambie msimbo wa utambuzi tu", "Fuata kanuni za ofisi yako kuthibitisha nani anaruhusiwa kupata taarifa; usishiriki"], answer: 3, why: "HIPAA inaweka mipaka ya nani anaweza kupata PHI; unafuata kanuni za ofisi yako na hushiriki chochote hadi uthibitishe." },
            { objective: "O6", q: "\"Kiwango cha chini kinachohitajika\" (minimum necessary) kinamaanisha nini?", options: ["Shiriki taarifa zinazohitajika kwa kazi hiyo tu", "Fanya kazi saa chache zaidi iwezekanavyo", "Weka utambuzi mmoja tu kwa kila dai", "Toza bei ya chini kabisa"], answer: 0, why: "Chini ya HIPAA unatumia na kushiriki taarifa zinazohitajika kwa kazi tu." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Misimbo, madai na faragha",
        questions: [
          { objective: "O4", q: "Kwa nini waweka misimbo hawaweki msimbo kutoka faharasa ya alfabeti peke yake?", options: ["Faharasa imepitwa na wakati kila mara", "Faharasa haina misimbo ndani yake", "Orodha ya jedwali ina kanuni na inaweza kuhitaji herufi zaidi", "Walipaji hawakubali misimbo ya faharasa"], answer: 2, why: "Maelezo ya orodha ya jedwali yanaweza kubadilisha msimbo au kuhitaji herufi za ziada." },
          { objective: "O5", q: "Kiashiria cha utambuzi katika Kisanduku 24E kinafanya nini?", options: ["Kinaonyesha anwani ya mlipaji", "Kinaunganisha mstari wa huduma na utambuzi katika Kisanduku 21", "Kinaonyesha nyumbani kwa mgonjwa", "Kinaorodhesha leseni ya daktari"], answer: 1, why: "Herufi ya kiashiria inaunganisha kila huduma na utambuzi unaoieleza." },
          { objective: "O5", q: "Dai linakataliwa kama \"duplicate\" (limerudiwa). Hatua bora ya kwanza ni ipi?", options: ["Kagua kama dai hilo hilo lilishatumwa au kulipwa", "Litume mara tatu zaidi", "Badilisha misimbo ili lionekane tofauti", "Mtoze mgonjwa kila kitu"], answer: 0, why: "Kukataliwa kwa sababu ya kurudiwa kunamaanisha mlipaji tayari analo; kagua hali yake badala ya kulituma tena." },
          { objective: "O6", q: "Unahitaji kuondoka mezani kwako huku dai likiwa kwenye skrini. Unafanya nini?", options: ["Liache wazi; utarudi haraka", "Muombe mgeni aliangalie", "Geuza skrini ielekee ukutani", "Funga skrini yako"], answer: 3, why: "Kufunga skrini yako kunazuia PHI isionekane na watu wasiopaswa kuiona." },
          { objective: "O6", q: "Ipi ni taarifa za afya zinazolindwa (PHI)?", options: ["Fomu tupu ya dai", "Saa za kufungua ofisi", "Jina la mgonjwa pamoja na utambuzi wake", "Jina la kitabu cha misimbo"], answer: 2, why: "Taarifa za afya zinazoweza kumtambulisha mtu ni PHI." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Misingi ya Kutoza Bili na Kuweka Misimbo ya Matibabu",
    questions: [
      { objective: "O1", q: "Mweka misimbo wa matibabu hufanya nini?", options: ["Hugeuza maelezo ya daktari kuwa misimbo ya kawaida", "Huwatoa wagonjwa damu", "Huuza mipango ya bima", "Hutengeneza kompyuta za ofisi"], answer: 0, why: "Waweka misimbo hugeuza utambuzi na huduma kutoka kwenye maelezo kuwa misimbo." },
      { objective: "O1", q: "Unapaswa kukagua masharti na ada za sasa za cheti wapi?", options: ["Chapisho la mitandao ya kijamii", "Rafiki aliyekifanya miaka iliyopita", "Ukurasa rasmi wa shirika linalotoa cheti", "Tangazo lolote la mafunzo"], answer: 2, why: "Sheria na ada hubadilika; ukurasa rasmi una zile za sasa." },
      { objective: "O1", q: "Jozi ipi ni sahihi?", options: ["CPC kutoka NHA", "CBCS kutoka AHIMA", "CCA kutoka AAPC", "CCA kutoka AHIMA"], answer: 3, why: "CCA ni ya AHIMA; CPC ni ya AAPC; CBCS ni ya NHA." },
      { objective: "O1", q: "Kozi hii inakupa nini?", options: ["Leseni ya kuweka misimbo", "Maandalizi ya mtihani wa cheti", "Kazi ya uhakika", "Cheti cha CPC"], answer: 1, why: "Kozi inakuandaa; vyeti vinapatikana tu kwa kufaulu mtihani rasmi." },
      { objective: "O2", q: "Ipi ni hatua ya kwanza ya mzunguko wa bili?", options: ["Panga miadi na ukague bima", "Tuma dai", "Mtoze mgonjwa", "Weka misimbo ya ziara"], answer: 0, why: "Mzunguko unaanza ziara inapopangwa na bima inapokaguliwa." },
      { objective: "O2", q: "Hatua ipi inakuja mara kabla ya kutuma dai?", options: ["Kumpokea mgonjwa", "Kutengeneza dai na kulikagua", "Kupanga miadi", "Malipo ya mlipaji"], answer: 1, why: "Mtoza bili anatengeneza dai na kulikagua, kisha analituma." },
      { objective: "O2", q: "Copay ni nini?", options: ["Nakala ya dai", "Malipo kutoka kwa mlipaji kwenda kwa daktari", "Kiasi kilichowekwa ambacho mgonjwa analipa kwa ziara", "Kosa la kuweka misimbo"], answer: 2, why: "Copay ni kiasi kilichowekwa ambacho mgonjwa analipa." },
      { objective: "O3", q: "Mgonjwa anakuja akiwa na kikohozi. Seti gani ya misimbo inaeleza kikohozi?", options: ["CPT", "HCPCS Level II", "Hakuna", "ICD-10-CM"], answer: 3, why: "Dalili, ishara na utambuzi zinatumia ICD-10-CM." },
      { objective: "O3", q: "Nani anamiliki na kusasisha seti ya misimbo ya CPT?", options: ["American Medical Association", "Mwajiri wa mgonjwa", "Kila jimbo", "NUCC"], answer: 0, why: "AMA inamiliki CPT; CMS inaiita HCPCS Level I." },
      { objective: "O3", q: "Msimbo upi unaonekana kama msimbo wa HCPCS Level II?", options: ["99213", "I10", "E0100 (mfano wa mazoezi)", "36415"], answer: 2, why: "Misimbo ya HCPCS Level II ni herufi moja ikifuatwa na tarakimu nne." },
      { objective: "O3", q: "Seti za misimbo hubadilika mara ngapi?", options: ["Kamwe", "Kila mwaka", "Kila miaka 50", "Pale tu daktari anapoomba"], answer: 1, why: "Seti za misimbo zinasasishwa kila mwaka, kwa hiyo waweka misimbo hutumia kitabu au zana ya sasa." },
      { objective: "O4", q: "Katika kitabu cha misimbo, sehemu ipi inaorodhesha hali za ugonjwa kutoka A hadi Z?", options: ["Faharasa ya alfabeti", "Orodha ya jedwali", "Fomu ya dai", "Remittance"], answer: 0, why: "Faharasa ya alfabeti inaorodhesha hali za ugonjwa kwa majina." },
      { objective: "O4", q: "Daktari anaandika \"chronic sinusitis\". Unatafuta nini kwanza?", options: ["Chronic", "Pua", "Sinusitis", "Kichwa"], answer: 2, why: "Tafuta hali ya ugonjwa (sinusitis), kisha neno \"chronic\" chini yake." },
      { objective: "O4", q: "Ni zana ipi rasmi ya bure ya kufanya mazoezi ya kutafuta misimbo ya ICD-10-CM?", options: ["Jukwaa lolote la mtandaoni la misimbo", "Jaribio la mitandao ya kijamii", "Fomu ya dai ya 1500", "ICD-10-CM Browser Tool ya CDC"], answer: 3, why: "NCHS ya CDC inatoa ICD-10-CM Browser Tool ya bure." },
      { objective: "O5", q: "Namba ya kitambulisho ya mwenye bima inaandikwa wapi kwenye fomu ya 1500?", options: ["Kisanduku 21", "Kisanduku 1a", "Kisanduku 24F", "Kisanduku 33"], answer: 1, why: "Kisanduku 1a kinabeba namba ya kitambulisho ya mwenye bima kutoka kadi ya bima." },
      { objective: "O5", q: "Nani anatunza fomu ya dai ya 1500?", options: ["National Uniform Claim Committee (NUCC)", "Mgonjwa", "AMA", "Kila daktari"], answer: 0, why: "NUCC ndiyo inayotunza fomu ya dai ya 1500." },
      { objective: "O5", q: "\"Dai safi\" (clean claim) ni nini?", options: ["Dai lililochapishwa kwenye karatasi mpya", "Dai lisilo na gharama", "Dai lisilo na makosa linaloweza kulipwa mara ya kwanza", "Dai lililotumwa kwa barua pepe"], answer: 2, why: "Dai safi halina makosa, kwa hiyo mlipaji anaweza kulilipa mara ya kwanza." },
      { objective: "O5", q: "Remittance (EOB au ERA) inakuambia nini?", options: ["Anwani ya nyumbani ya mgonjwa", "Ratiba ya kesho", "Namba ya leseni ya daktari", "Mlipaji alilipa nini au alikataa nini, na kwa nini"], answer: 3, why: "Remittance inaeleza malipo au kukataliwa na inatoa sababu." },
      { objective: "O6", q: "Mfanyakazi mwenzako akiwa mapumzikoni anauliza mgonjwa uliyemwekea misimbo ana tatizo gani. Unafanya nini?", options: ["Mwambie; naye anafanya kazi hapa", "Usishiriki; hana sababu ya kikazi ya kujua", "Mnong'oneze kimya kimya", "Mwonyeshe dai"], answer: 1, why: "Chini ya kanuni ya kiwango cha chini kinachohitajika, PHI inaenda kwa wanaoihitaji kwa kazi yao tu." },
      { objective: "O6", q: "Tabia ipi inalinda PHI?", options: ["Kutuma madai kwa barua pepe kutoka akaunti yako binafsi", "Kuzungumza kuhusu wagonjwa ndani ya basi", "Kutumia mifumo ya kazi iliyoidhinishwa tu kutuma madai", "Kuacha madai kwenye mashine ya kuchapisha"], answer: 2, why: "Mifumo iliyoidhinishwa inalinda PHI; barua pepe binafsi na mazungumzo ya hadharani hayalindi." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 3, 4, 7, 9, 11, 14, 17, 18] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Mpango wa cheti", objective: "O1", notYet: "Hakuna cheti kilichotajwa, au masharti yalibahatishwa badala ya kukaguliwa.", meets: "Anataja cheti kimoja na nani anakitoa, pamoja na masharti na tarehe inayolengwa ya mtihani kutoka ukurasa rasmi.", exceeds: "Pia anaorodhesha programu ya mafunzo, tarehe za kusoma kila wiki na kile ambacho matangazo ya kazi ya karibu yanaomba." },
      { name: "Seti sahihi za misimbo", objective: "O3", notYet: "Utambuzi umewekewa msimbo wa CPT, au huduma imewekewa msimbo wa ICD-10-CM.", meets: "Utambuzi unatumia ICD-10-CM na kila huduma inatumia CPT.", exceeds: "Anaweza kueleza kwa nini kila msimbo ni wa seti yake." },
      { name: "Misimbo imetafutwa kwa njia sahihi", objective: "O4", notYet: "Misimbo imenakiliwa bila kukaguliwa, au imechukuliwa kutoka faharasa peke yake.", meets: "Kila utambuzi ulipatikana kwenye faharasa na kuthibitishwa kwenye orodha ya jedwali (au zana ya CDC).", exceeds: "Anaandika neno kuu alilotafuta na kanuni moja aliyosoma kwa kila msimbo." },
      { name: "Visanduku vya dai vimejazwa", objective: "O5", notYet: "Visanduku vinakosekana, au kitambulisho, misimbo au gharama hazilingani na ziara.", meets: "Visanduku 1a, 2, 21, 24 na 33 vimejazwa na vinalingana na ziara; kila mstari wa huduma una kiashiria.", exceeds: "Ana orodha ya ukaguzi iliyoandikwa kabla ya kutuma inayopata angalau kosa moja lililowekwa kwa makusudi." },
      { name: "Mzunguko wa bili na ufuatiliaji", objective: "O2", notYet: "Hawezi kusema kinachotokea baada ya dai kutumwa.", meets: "Anasema hatua kutoka kutuma hadi malipo, na la kufanya dai likikataliwa.", exceeds: "Anataja sababu mbili za kukataliwa na marekebisho ya kila moja." },
      { name: "Faragha imelindwa", objective: "O6", notYet: "Anatumia taarifa halisi ya mgonjwa, au anashiriki PHI na mtu asiyeihitaji.", meets: "Anatumia taarifa za kubuni tu na anaweka dai kuwa siri.", exceeds: "Anaorodhesha tabia tatu za kila siku zinazolinda PHI kazini." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaojiunga na programu ya mafunzo ya kutoza bili na kuweka misimbo au kujiandikisha kwa mtihani wa cheti ndani ya siku 90",
      "Wanafunzi wanaofaulu mtihani wa CBCS, CPC au CCA (kwa ripoti yao wenyewe)",
      "Wanafunzi wanaoajiriwa katika kazi za kutoza bili, kuweka misimbo, mapokezi au usajili wa wagonjwa ndani ya miezi 6"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye intaneti kwa kurasa rasmi za vyeti na ICD-10-CM Browser Tool ya CDC",
      "Karatasi na kalamu, au spreadsheet ya bure (Google Sheets au Excel), kwa dai la mazoezi",
      "Mpangilio wa fomu ya dai ya mazoezi ya 1500 uliochapishwa au kuchorwa (visanduku 1a, 2, 21, 24, 33)",
      "Kama dakika 75 kwa jumla, katika vipindi vifupi"
    ],
    facilitatorNotes: [
      "Sisitiza kwamba misimbo yote katika kozi ni mifano ya mazoezi; hakikisha wanafunzi wanajua misimbo inabadilika kila mwaka.",
      "Usitumie kamwe kumbukumbu halisi za wagonjwa au kadi halisi za bima darasani; tumia wagonjwa wa kubuni tu.",
      "Leta nakala zilizochapishwa za matangazo ya kazi ya karibu ili wanafunzi waone vyeti gani waajiri wanaomba.",
      "Weka kosa moja kwa makusudi (kitambulisho kisicho sahihi au kiashiria kinachokosekana) katika dai la mfano na uache vikundi vilipate.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati.",
      "Wanafunzi wenye rekodi ya uhalifu: waambie waulize kila shirika la vyeti na programu ya mafunzo kuhusu sheria zake, na wakague masharti ya kazi katika jimbo lao."
    ]
  }
};
