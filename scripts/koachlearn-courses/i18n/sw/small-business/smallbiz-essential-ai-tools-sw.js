"use strict";

// Koach Learn course (Swahili translation of small-business/smallbiz-essential-ai-tools.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "smallbiz-essential-ai-tools-sw",
  lang: "sw",
  translationOf: "smallbiz-essential-ai-tools",
  category: "Small Business",
  name: "Zana Muhimu za AI kwa Biashara Ndogo",
  skills: "Kuchagua zana sahihi ya AI kwa kazi, Kutumia msaidizi wa mazungumzo kwa maandishi ya biashara, Kutengeneza michoro kwa Canva, Kutumia AI katika nyaraka na lahajedwali, Kujenga seti ya kwanza ya zana za AI",
  outcome: "kuchagua zana sahihi ya AI ya bure kwa kazi ya biashara na kuitumia: msaidizi wa mazungumzo kwa maandishi, Canva kwa tangazo au chapisho, na zana ya nyaraka au lahajedwali kwa orodha ya bei au jedwali rahisi la mauzo, kisha kuziweka pamoja katika seti ya kwanza ya zana utakazotumia kweli kila wiki.",
  about: [
    "Kozi hii ni kwa wamiliki wa biashara ndogo wanaotaka seti fupi ya zana zinazofaa badala ya kukimbizana na kila app mpya. Mifano yetu inatoka maduka, migahawa, saluni, huduma za usafi na za ukarabati, na magari ya kuuza chakula.",
    "Utajifunza aina za zana za AI zilizopo, utajaribu msaidizi wa mazungumzo, zana ya kubuni michoro na msaada wa AI ndani ya nyaraka na lahajedwali, na utamaliza na seti yako mwenyewe ya zana: zana ipi kwa kazi ipi, na kitu gani hutakiweka ndani yake kamwe.",
    "Bei, majina ya mipango na huduma hubadilika mara kwa mara. Tunaeleza cha kufanya badala ya majina kamili ya menyu; kagua tovuti rasmi ya kila zana kuona mpango wake wa bure wa sasa. Kila somo linachukua kama dakika tano, lina kazi ya \"Jaribu sasa\", kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Jenga seti yako ya kwanza ya zana za AI: jedwali la ukurasa mmoja lenye zana tatu hadi tano utakazotumia, kazi ambayo kila moja inafanya katika biashara yako, kama unatumia mpango wa bure, na kanuni moja ya usalama kwa kila moja. Kisha thibitisha kwamba inafanya kazi kwa kutengeneza kitu kimoja halisi kwa kila zana: ujumbe kwa mteja (msaidizi wa mazungumzo), tangazo au chapisho (Canva), na orodha ya bei au jedwali la mauzo (Docs/Word au Sheets/Excel).",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wamiliki wa biashara ndogo wanaotaka seti fupi ya zana za AI zinazofaa badala ya kukimbizana na kila app mpya: maduka, migahawa, saluni, huduma za usafi na za ukarabati, na magari ya kuuza chakula.",
    startingPoint: "Wanatumia simu au kompyuta kwa ujumbe wa biashara na huenda wamejaribu msaidizi mmoja wa mazungumzo wa AI. Wana uzoefu mdogo wa zana za kubuni michoro, wasaidizi wa AI ndani ya nyaraka, au lahajedwali zenye fomula.",
    gap: "Wamiliki wanapoteza muda na pesa wakijaribu apps nyingi au wakilipia mipango ya juu wasiyoihitaji, na huenda wakaweka taarifa za wateja katika zana isiyofaa. Wanahitaji seti ndogo ya zana za bure, kila moja ikiwa na kazi wazi na kanuni ya usalama, ambazo watazitumia kweli kila wiki.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi",
      "Vifaa: simu janja au kompyuta; lahajedwali ni rahisi zaidi kwenye kompyuta",
      "Muda: masomo ya kama dakika 5 yanayoingia katika siku ya kazi yenye shughuli nyingi",
      "Bei, majina ya mipango na huduma hubadilika; kagua tovuti rasmi ya kila zana kuona mpango wake wa bure wa sasa",
      "Faragha: hakuna namba za kadi za wateja, nywila wala majina katika zana za AI"
    ],
    prerequisites: "Kozi \"Utangulizi wa AI kwa Biashara Ndogo\" inasaidia lakini si lazima."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa aina kuu za zana za AI", action: "kulinganisha kila aina ya zana na kazi katika biashara yako", standard: "ukiwa na kazi moja kwa kila moja ya aina nne" },
    { id: "O2", condition: "Ukitumia msaidizi wa mazungumzo wa bure", action: "kutengeneza vitu vitatu tofauti vya biashara katika mazungumzo mamoja", standard: "ukitoa taarifa za biashara yako mara moja mwanzoni na kukagua kila namba" },
    { id: "O3", condition: "Ukitumia kiolezo cha Canva", action: "kutengeneza tangazo au chapisho la mitandao ya kijamii kwa ofa au tukio halisi", standard: "lenye ujumbe mmoja mkuu, jinsi ya kukufikia, kila neno limekaguliwa na picha tu ulizo na haki ya kuzitumia" },
    { id: "O4", condition: "Ukipewa maelezo ya haraka na Google Docs au Microsoft Word", action: "kugeuza maelezo hayo kuwa hati safi ya biashara kwa msaada wa AI", standard: "ikiwa imehifadhiwa katika hati yako, na maneno ya kisheria yamekaguliwa na mtaalamu au chanzo rasmi" },
    { id: "O5", condition: "Ukitumia Google Sheets au Microsoft Excel", action: "kujenga jedwali la mauzo au la bidhaa ulizo nazo na kupata msaada wa AI kulisoma", standard: "lenye angalau safu 10, fomula ya SUM kwa jumla na jibu la AI limethibitishwa ndani ya jedwali" },
    { id: "O6", condition: "Ukipewa zana ulizojaribu", action: "kutengeneza jedwali la seti ya kwanza ya zana tatu hadi tano zenye kazi na kanuni ya usalama kwa kila moja", standard: "likiorodhesha zana, kazi, mpango na kanuni ya usalama, ukitumia mipango ya bure kabla ya kulipa" }
  ],
  chapters: [
    {
      name: "Sura 1: Aina kuu za zana za AI",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ramani ya zana za AI kwa biashara ndogo",
          minutes: 5,
          goal: "Taja aina kuu za zana za AI na ulinganishe kila moja na kazi ya biashara.",
          text: [
            "Huhitaji apps nyingi. Biashara ndogo nyingi zinapata faida kubwa zaidi kutoka aina nne za zana.",
            "Wasaidizi wa mazungumzo (ChatGPT, Microsoft Copilot, Google Gemini) wanaandika na kueleza: majibu, maelezo ya bidhaa, mipango, orodha za kukagua. Zana za kubuni michoro (Canva na nyingine) zinatengeneza matangazo, machapisho ya mitandao ya kijamii, menyu na nembo, na nyingi sasa zina huduma za AI za kusaidia maandishi na picha. Zana za ofisi (Google Docs na Sheets, Microsoft Word na Excel) zinahifadhi nyaraka na namba zako, na kampuni zote mbili zinaongeza wasaidizi wa AI ndani yake kwenye baadhi ya mipango. Zana zilizo ndani ya apps nyingine, kama mfumo wako wa mauzo (POS), wa kupanga miadi au wa barua pepe, huenda pia zikawa na huduma za AI.",
            "Anza na zana moja kwa kila kazi. Ijue vizuri kabla ya kuongeza nyingine."
          ],
          words: [["Msaidizi wa mazungumzo", "zana ya AI unayoongea nayo kwenye kisanduku cha mazungumzo, kama ChatGPT, Copilot au Gemini."], ["Zana ya kubuni michoro", "app ya kutengeneza michoro kama matangazo na machapisho, kama Canva."], ["Mfumo wa mauzo (POS)", "kifupi cha point-of-sale: mfumo unaotumia kurekodi mauzo."]],
          slides: [
            { title: "Aina nne za zana", bullets: ["Wasaidizi wa mazungumzo: wanaandika na kueleza", "Zana za kubuni: matangazo, machapisho, menyu", "Zana za ofisi: nyaraka na namba", "AI ndani ya apps unazotumia tayari"] },
            { title: "Mifano", bullets: ["ChatGPT, Copilot, Gemini", "Canva", "Google Docs na Sheets; Word na Excel"] },
            { title: "Iweke rahisi", bullets: ["Zana moja kwa kila kazi", "Ijue vizuri kwanza", "Ongeza nyingine tu unapoihitaji"] }
          ],
          tryIt: "Andika aina nne za zana upande mmoja wa ukurasa. Karibu na kila moja, andika kazi moja katika biashara yako ambayo ingeweza kufanya mwezi huu.",
          youCanNow: "kutaja aina kuu za zana za AI na kulinganisha kila moja na kazi katika biashara yako.",
          quickCheck: [
            { objective: "O1", q: "ChatGPT, Copilot na Gemini ni zana za aina gani?", options: ["Zana za kubuni michoro", "Lahajedwali", "Wasaidizi wa mazungumzo", "Apps za kupanga miadi"], answer: 2, why: "Ni wasaidizi wa mazungumzo unaoongea nao kupata rasimu na majibu." },
            { objective: "O1", q: "Unataka kubuni ubao mpya wa menyu. Ungechagua zana ya aina gani?", options: ["Zana ya kubuni michoro kama Canva", "Lahajedwali", "App ya kupanga miadi", "Kikokotoo"], answer: 0, why: "Zana za kubuni zina violezo vilivyotengenezwa kwa menyu na matangazo." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kupata faida kubwa kutoka msaidizi wa mazungumzo",
          minutes: 5,
          goal: "Tumia msaidizi wa mazungumzo kutengeneza vitu vitatu tofauti vya biashara katika mazungumzo mamoja.",
          text: [
            "Msaidizi wa mazungumzo ndiye zana yako inayoweza kufanya mambo mengi zaidi. Anaweza kuandika, kuandika upya, kufupisha, kutafsiri na kupanga. Mfungue kwenye app ya simu au kwenye chatgpt.com, copilot.microsoft.com au gemini.google.com.",
            "Mpe taarifa za biashara yako mara moja mwanzoni mwa mazungumzo: \"Nina kinyozi chenye viti viwili huko Long Beach. Mtindo wetu ni wa kirafiki na wa mtaani. Bei: kunyoa $30, kunyoa na ndevu $40.\" Kisha omba vitu kadhaa kimoja baada ya kingine: ubao wa bei, kiolezo cha ujumbe wa kukumbusha, jibu kwa maoni ya mteja.",
            "Omba machaguo na majedwali yanaposaidia: \"Nipe matoleo matatu\" au \"Weka hii katika jedwali.\" Kagua kila wakati namba anazorudia kwako."
          ],
          steps: ["Fungua msaidizi wa mazungumzo.", "Toa taarifa za biashara yako mara moja mwanzoni.", "Omba kitu cha 1, kisha cha 2, kisha cha 3.", "Omba machaguo au jedwali pale linaposaidia.", "Kagua kila namba kabla ya kuitumia."],
          words: [["Kufupisha", "kutengeneza toleo fupi la kitu kirefu."], ["Kiolezo", "muundo uliotayarishwa ambao unaujaza kila mara."]],
          slides: [
            { title: "Msaidizi anayeweza mengi", bullets: ["Kuandika, kuandika upya, kufupisha, kutafsiri, kupanga", "App ya simu au kivinjari cha wavuti"] },
            { title: "Muandae mara moja kwa kila mazungumzo", bullets: ["Aina ya biashara yako na mji", "Mtindo wako na bei zako", "Kisha omba kitu kimoja baada ya kingine"] },
            { title: "Maombi yenye manufaa", bullets: ["\"Nipe matoleo matatu.\"", "\"Weka hii katika jedwali.\"", "Kagua kila namba anayorudia"] }
          ],
          tryIt: "Katika mazungumzo mamoja, toa taarifa za biashara yako, kisha omba: ubao wa bei, kiolezo cha ujumbe wa kukumbusha chenye \"[jina la mteja]\", na jibu la shukrani kwa maoni mazuri ya mteja.",
          youCanNow: "kutumia mazungumzo mamoja kutengeneza vitu kadhaa vya biashara kutokana na taarifa zako mwenyewe.",
          quickCheck: [
            { objective: "O2", q: "Unapaswa kutoa taarifa za biashara yako lini katika mazungumzo?", options: ["Kamwe", "Tena katika kila ombi", "Mwishoni tu", "Mara moja mwanzoni"], answer: 3, why: "Kutoa taarifa mara moja mwanzoni kunaruhusu kila jibu katika mazungumzo hayo kuzitumia." },
            { objective: "O2", q: "Msaidizi ametengeneza ubao wako wa bei lakini bei moja inaonekana si sahihi. Ungefanya nini?", options: ["Kuuchapisha hivyo hivyo", "Kukagua kila namba ukilinganisha na bei zako halisi na kuirekebisha", "Kuomba muundo mpya", "Kuondoa bei zote"], answer: 1, why: "AI inaweza kurudia namba vibaya, kwa hiyo unakagua kila moja." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kutengeneza tangazo au chapisho la mitandao ya kijamii kwa Canva",
          minutes: 5,
          goal: "Tengeneza tangazo rahisi au chapisho la mitandao ya kijamii ukitumia zana ya bure ya kubuni michoro.",
          text: [
            "Canva ni zana ya kubuni michoro inayofanya kazi kwenye kivinjari cha wavuti na kama app ya simu. Ina mpango wa bure na maelfu ya violezo vilivyotayarishwa kwa matangazo, menyu, machapisho ya mitandao ya kijamii na kadi za biashara. Kagua canva.com kuona mpango wa bure una nini leo.",
            "Anza na kiolezo, si ukurasa mtupu. Tafuta unachohitaji (\"restaurant flyer\", \"salon Instagram post\"), chagua kimoja, kisha badilisha maneno, rangi na picha ziwe zako. Tumia maandishi kutoka kwa msaidizi wako wa mazungumzo.",
            "Tumia picha zako mwenyewe au zile ambazo zana inakuruhusu kutumia. Liweke rahisi: ujumbe mmoja mkuu, maneno makubwa yanayosomeka, jina la biashara yako na jinsi ya kukufikia. Kagua tahajia ya anwani yako na namba yako ya simu."
          ],
          steps: ["Fungua Canva na utafute kiolezo.", "Badilisha maneno yawe ujumbe wako.", "Weka picha na rangi zako.", "Ongeza jina lako, anwani na jinsi ya kukufikia.", "Kagua kila neno, kisha pakua au shiriki."],
          words: [["Kiolezo", "muundo uliotayarishwa unaoubadilisha ili uwe wako."], ["Mpango wa bure", "toleo la zana unaloweza kutumia bila kulipa, kwa kawaida likiwa na mipaka fulani."]],
          slides: [
            { title: "Canva", bullets: ["Kivinjari na app ya simu", "Mpango wa bure wenye violezo vingi", "Kagua canva.com kuona huduma za bure za leo"] },
            { title: "Anza na kiolezo", bullets: ["Tafuta \"restaurant flyer\" au \"salon post\"", "Badilisha maneno, rangi na picha", "Tumia maandishi kutoka kwa msaidizi wako wa mazungumzo"] },
            { title: "Liweke wazi", bullets: ["Ujumbe mmoja mkuu, maneno makubwa", "Jina, anwani, jinsi ya kukufikia", "Kagua kila neno kabla ya kushiriki"] }
          ],
          tryIt: "Tengeneza tangazo au chapisho kwa ofa au tukio moja halisi katika biashara yako ukitumia kiolezo cha Canva. Kagua kila neno na ulihifadhi.",
          youCanNow: "kutengeneza tangazo au chapisho la mitandao ya kijamii lililo wazi kutoka kiolezo kwa zana ya bure ya kubuni michoro.",
          quickCheck: [
            { objective: "O3", q: "Tangazo lililo wazi lina nini?", options: ["Ujumbe mmoja mkuu na jinsi ya kukufikia", "Maandishi mengi kadri yanavyotosha", "Kila bidhaa unayouza", "Hakuna mawasiliano"], answer: 0, why: "Ujumbe mmoja mkuu na mawasiliano vinafanya tangazo liwe rahisi kufuata." },
            { objective: "O3", q: "Unapata picha nzuri sana mtandaoni kwa tangazo lako. Ungefanya nini?", options: ["Kuitumia kwa sababu iko mtandaoni", "Kuikata ili mtu asigundue", "Kutumia picha yako mwenyewe au ile uliyo na haki ya kuitumia", "Kuiomba AI iinakili"], answer: 2, why: "Unaweza kutumia tu picha ulizopiga mwenyewe au ulizo na haki ya kuzitumia." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Aina kuu za zana za AI",
        questions: [
          { objective: "O1", q: "Zana ya aina gani ni bora zaidi kwa kuandika jibu kwa mteja?", options: ["Printa ya risiti", "Msaidizi wa mazungumzo", "Kisomaji cha msimbo pau (barcode)", "Kikokotoo"], answer: 1, why: "Wasaidizi wa mazungumzo wanaandika na kuandika upya maandishi." },
          { objective: "O1", q: "Zana ipi inajulikana kwa violezo vya matangazo na machapisho ya mitandao ya kijamii?", options: ["Kikokotoo", "Mfumo wa mauzo (POS)", "Excel peke yake", "Canva"], answer: 3, why: "Canva ni zana ya kubuni michoro yenye violezo." },
          { objective: "O1", q: "Njia nzuri ya kuanza kutumia zana za AI ni ipi?", options: ["Zana moja kwa kila kazi, uijue vizuri", "Kusakinisha apps ishirini kwa wakati mmoja", "Kulipia kila mpango", "Kuepuka zana zote"], answer: 0, why: "Anza kwa urahisi na uijue zana moja vizuri." },
          { objective: "O2", q: "Ulimpa msaidizi wa mazungumzo bei zako. Unakagua nini katika ubao wake wa bei?", options: ["Hakuna", "Rangi tu", "Kila namba anayorudia", "Kichwa tu"], answer: 2, why: "AI inaweza kurudia namba vibaya." },
          { objective: "O3", q: "Unapotengeneza tangazo katika Canva, unapaswa kuanza na:", options: ["Ukurasa mtupu kila mara", "Tangazo la mshindani", "Kiolezo unachobadilisha kiwe chako", "Picha usiyo na haki ya kuitumia"], answer: 2, why: "Violezo vinaokoa muda; unavibadilisha viwe vyako." }
        ]
      }
    },
    {
      name: "Sura 2: AI katika zana zako za ofisi za kila siku, na seti yako ya zana",
      lessons: [
        {
          objectives: ["O4"],
          title: "Msaada wa AI katika nyaraka: Google Docs na Microsoft Word",
          minutes: 5,
          goal: "Geuza maelezo ya haraka kuwa hati safi ya biashara.",
          text: [
            "Biashara nyingi zinaweka orodha za bei, sera na barua katika Google Docs au Microsoft Word. Zote mbili ni bure kutumia kwenye kivinjari cha wavuti ukiwa na akaunti ya Google au Microsoft. Google na Microsoft zinaongeza wasaidizi wa AI (Gemini na Copilot) ndani yake kwenye baadhi ya mipango; unachoona kinategemea akaunti yako.",
            "Kama app yako ya nyaraka ina msaidizi wa AI, unaweza kumwomba aandike rasimu au aandike upya moja kwa moja kwenye ukurasa. Kama haina, andika rasimu kwa msaidizi wa mazungumzo na ubandike maandishi. Kwa njia yoyote, hati ndiyo mahali unapoweka toleo la mwisho lililokaguliwa.",
            "Kazi nzuri za nyaraka: sera ya kughairi, orodha ya kukagua ya wafanyakazi wakati wa kufungua, orodha ya bei, barua kwa mwenye nyumba yako. Kwa sera na kitu chochote cha kisheria, mtaalamu au chanzo rasmi kikague."
          ],
          steps: ["Andika maelezo ya haraka ya unachotaka.", "Mwombe msaidizi wa AI (ndani ya hati au msaidizi wa mazungumzo) ayageuze kuwa hati safi.", "Ibandike au iweke katika Docs au Word.", "Kagua ukweli na urekebishe maneno.", "Ihifadhi kwa jina lililo wazi."],
          words: [["Google Docs", "programu ya bure ya Google ya kuandika nyaraka, kwenye kivinjari cha wavuti."], ["Microsoft Word", "programu ya Microsoft ya kuandika nyaraka, bure kwenye wavuti ukiwa na akaunti ya Microsoft."], ["Sera", "kanuni iliyoandikwa ya biashara yako, kama jinsi kughairi kunavyofanya kazi."]],
          slides: [
            { title: "Nyaraka zako", bullets: ["Google Docs au Microsoft Word", "Bure kwenye kivinjari ukiwa na akaunti", "Wasaidizi wa AI kwenye baadhi ya mipango"] },
            { title: "Njia mbili za kutumia AI hapa", bullets: ["Tumia msaidizi wa AI ndani ya hati, kama unaye", "Au andika rasimu kwa msaidizi wa mazungumzo na uibandike"] },
            { title: "Kazi nzuri za nyaraka", bullets: ["Sera ya kughairi", "Orodha ya kukagua wakati wa kufungua na orodha ya bei", "Mtaalamu akague maneno ya kisheria"] }
          ],
          tryIt: "Andika mistari mitano ya haraka kuhusu sera yako ya kughairi au ya kuchelewa. Tumia AI kuigeuza kuwa sera iliyo wazi na ya adabu, na uihifadhi katika Docs au Word.",
          youCanNow: "kugeuza maelezo ya haraka kuwa hati safi ya biashara ukitumia AI na zana ya ofisi.",
          quickCheck: [
            { objective: "O4", q: "Toleo la mwisho lililokaguliwa la sera ya biashara linapaswa kukaa wapi?", options: ["Ndani ya mazungumzo ya AI tu", "Katika hati yako ndani ya Docs au Word", "Kwenye karatasi ndogo ya kubandika", "Katika ujumbe uliojitumia mwenyewe"], answer: 1, why: "Hati yako inaweka toleo lililokaguliwa salama na rahisi kushiriki." },
            { objective: "O4", q: "AI imegeuza maelezo yako kuwa sera ya kurudisha pesa yenye maneno ya kisheria. Ungefanya nini?", options: ["Kuiweka bila kuisoma", "Kufuta maneno ya kisheria", "Kuiuliza AI kama ni halali", "Mtaalamu au chanzo rasmi kikague maneno hayo"], answer: 3, why: "Maneno ya kisheria yanapaswa kukaguliwa na mtaalamu au chanzo rasmi." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Msaada wa AI katika lahajedwali: Sheets na Excel",
          minutes: 5,
          goal: "Jenga jedwali rahisi la mauzo au la bidhaa ulizo nazo na upate msaada wa AI kulisoma.",
          text: [
            "Lahajedwali (spreadsheet) ni gridi ya safu na safuwima kwa ajili ya namba. Google Sheets na Microsoft Excel ndizo zinazotumika sana. Jedwali rahisi, kama Tarehe, Bidhaa, Idadi, Bei, Jumla, tayari linakuambia mengi.",
            "AI inaweza kusaidia kwa njia mbili. Inaweza kukuambia jinsi ya kufanya kitu (\"Ninajumlishaje safuwima E katika Google Sheets?\"), na kwenye baadhi ya mipango inaweza kufanya kazi ndani ya jedwali. Unaweza pia kubandika jedwali dogo lisilo na taarifa binafsi kwa msaidizi wa mazungumzo na kuuliza, \"Bidhaa ipi iliuzwa zaidi?\"",
            "Kagua hesabu. AI ni hodari zaidi wa kueleza kuliko kukokotoa, kwa hiyo acha lahajedwali ifanye jumla kwa fomula ya SUM, na utumie AI kueleza au kupendekeza cha kuangalia."
          ],
          steps: ["Tengeneza safuwima: Tarehe, Bidhaa, Idadi, Bei, Jumla.", "Ingiza mauzo ya wiki moja.", "Uliza AI jinsi ya kuongeza jumla ya SUM, na uifanye.", "Uliza AI bidhaa ipi iliuzwa zaidi, kisha uthibitishe ndani ya jedwali."],
          words: [["Lahajedwali", "gridi ya safu na safuwima kwa ajili ya namba, kama Google Sheets au Excel."], ["Fomula", "agizo ndani ya kisanduku linalokokotoa, kama =SUM(E2:E20)."]],
          slides: [
            { title: "Jedwali rahisi la mauzo", bullets: ["Tarehe, Bidhaa, Idadi, Bei, Jumla", "Google Sheets au Microsoft Excel"] },
            { title: "Jinsi AI inavyosaidia", bullets: ["Inaeleza jinsi: \"Ninajumlishaje safuwima E?\"", "Inafanya kazi ndani ya jedwali kwenye baadhi ya mipango", "Inasoma jedwali dogo lisilo na taarifa binafsi"] },
            { title: "Acha jedwali lifanye hesabu", bullets: ["Tumia fomula ya SUM kwa jumla", "AI inaeleza; jedwali linakokotoa", "Thibitisha AI inachosema katika data yako"] }
          ],
          tryIt: "Tengeneza jedwali la mauzo au la bidhaa ulizo nazo lenye angalau safu 10. Tumia fomula ya SUM kwa jumla, na uliza AI bidhaa ipi iliuzwa zaidi. Thibitisha jibu ndani ya jedwali lako.",
          youCanNow: "kujenga jedwali rahisi la mauzo na kutumia AI kukusaidia kulisoma, huku lahajedwali ikifanya hesabu.",
          quickCheck: [
            { objective: "O5", q: "=SUM(E2:E20) ni nini?", options: ["Fomula inayojumlisha safuwima", "Jina la faili", "Prompt ya mazungumzo", "Nywila"], answer: 0, why: "SUM ni fomula ya lahajedwali inayojumlisha namba." },
            { objective: "O5", q: "AI inasema bidhaa iliyouzwa zaidi mwezi uliopita ilikuwa kahawa. Ungefanya nini?", options: ["Kuagiza kahawa zaidi mara moja", "Kuiuliza AI tena hadi ikubali", "Kuthibitisha ndani ya jedwali lako", "Kufuta jedwali la mauzo"], answer: 2, why: "Unathibitisha jinsi AI ilivyosoma data yako ndani ya jedwali lenyewe." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kujenga seti yako ya kwanza ya zana za AI",
          minutes: 5,
          goal: "Chagua zana tatu hadi tano, mpe kila moja kazi, na uweke kanuni ya usalama kwa kila moja.",
          text: [
            "Seti yako ya zana ni orodha fupi: zana, kazi yake, mpango gani, na kanuni. Kwa mfano: ChatGPT (bure) kwa majibu na maelezo ya bidhaa; Canva (bure) kwa matangazo; Google Sheets kwa mauzo ya kila wiki; Google Docs kwa sera.",
            "Kabla ya kulipia mpango wowote wa juu, tumia mpango wa bure kwa mwezi mmoja na uandike usichoweza kufanya. Lipia tu huduma unayoihitaji kweli, na ukague bei kwenye tovuti rasmi.",
            "Kanuni za usalama zinaenda na kila zana: hakuna namba za kadi za wateja, nywila wala taarifa binafsi; kagua kila ukweli kabla wateja hawajauona; tumia tu picha na maneno uliyo na haki ya kuyatumia."
          ],
          steps: ["Orodhesha zana tatu hadi tano.", "Andika kazi moja kwa kila moja.", "Andika \"bure\" au mpango unaoulipia.", "Andika kanuni moja ya usalama kwa kila moja.", "Tengeneza kitu kimoja halisi kwa kila zana."],
          words: [["Seti ya zana", "orodha fupi ya zana unazotumia na kazi ya kila moja."], ["Mpango wa juu", "mpango wa kulipia wenye huduma zaidi (upgrade)."]],
          slides: [
            { title: "Jedwali la seti yako ya zana", bullets: ["Zana | Kazi | Mpango | Kanuni ya usalama", "Zana tatu hadi tano zinatosha"] },
            { title: "Kabla ya kulipa", bullets: ["Tumia mpango wa bure kwa mwezi mmoja", "Andika usichoweza kufanya", "Kagua bei kwenye tovuti rasmi"] },
            { title: "Kanuni kwa kila zana", bullets: ["Hakuna namba za kadi, nywila wala taarifa binafsi", "Kagua ukweli kabla wateja hawajauona", "Tumia tu picha ulizo na haki ya kuzitumia"] }
          ],
          tryIt: "Kazi ya mwisho: tengeneza jedwali la seti yako ya zana, kisha tengeneza kitu kimoja halisi kwa kila zana: ujumbe kwa mteja, tangazo au chapisho, na orodha ya bei au jedwali la mauzo.",
          youCanNow: "kuchagua, kupanga na kutumia kwa usalama seti ndogo ya zana za AI kwa biashara yako.",
          quickCheck: [
            { objective: "O6", q: "Jedwali la seti yako ya zana linaorodhesha nini?", options: ["Kila app kwenye simu yako", "Zana, kazi, mpango na kanuni ya usalama", "Bei za zana tu", "Majina ya wateja wako"], answer: 1, why: "Kila mstari unasema zana ipi, kazi yake, mpango wake na kanuni yake ya usalama." },
            { objective: "O6", q: "Zana inatoa mpango wa juu wa kulipia. Ungeulipia lini?", options: ["Mara moja, ili kuwa salama", "Kamwe, kwa hali yoyote", "Rafiki akiununua", "Unapohitaji huduma ambayo mpango wa bure hauna"], answer: 3, why: "Lipa tu wakati mpango wa bure unakosa kitu unachokihitaji kweli." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Zana za ofisi na seti yako ya zana",
        questions: [
          { objective: "O4", q: "App yako ya nyaraka haina msaidizi wa AI. Unaweza kufanya nini?", options: ["Kuandika rasimu kwa msaidizi wa mazungumzo na kuibandika", "Kukata tamaa", "Kununua kompyuta mpya", "Kuiandika katika Excel"], answer: 0, why: "Rasimu ya msaidizi wa mazungumzo inaweza kubandikwa katika hati yoyote." },
          { objective: "O4", q: "Nani anapaswa kukagua maneno ya sera ya kisheria?", options: ["AI peke yake", "Hakuna mtu", "Mteja", "Mtaalamu au chanzo rasmi"], answer: 3, why: "Maneno ya kisheria yanahitaji kukaguliwa na mtaalamu." },
          { objective: "O5", q: "Nini kinapaswa kufanya jumla katika jedwali lako la mauzo?", options: ["Kisio la AI", "Fomula ya SUM ndani ya lahajedwali", "Hesabu ya kichwani", "Chapisho la mitandao ya kijamii"], answer: 1, why: "Lahajedwali zinakokotoa kwa uhakika; AI inaeleza." },
          { objective: "O6", q: "Kabla ya kulipia mpango wa juu wa AI, unapaswa:", options: ["Kutumia mpango wa bure kwa muda na kuandika kinachokosekana", "Kulipa mara moja", "Kuuliza tangazo linalojitokeza ghafla (pop-up)", "Kununua kila mpango"], answer: 0, why: "Lipia tu unachokihitaji kweli." },
          { objective: "O6", q: "Ipi ni kanuni ya usalama kwa kila zana?", options: ["Kubandika namba za kadi ili kuokoa muda", "Kuipa zana nywila yako", "Kutoweka kamwe namba za kadi za wateja au nywila ndani yake", "Kutumia picha yoyote ya mtandaoni"], answer: 2, why: "Taarifa binafsi zinabaki nje ya zana za AI." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Zana Muhimu za AI kwa Biashara Ndogo",
    questions: [
      { objective: "O1", q: "ChatGPT, Copilot na Gemini ni mifano ya:", options: ["Mashine za kupokea pesa", "Wasaidizi wa mazungumzo", "Apps za kusafirisha bidhaa", "Benki"], answer: 1, why: "Ni wasaidizi wa mazungumzo wa AI." },
      { objective: "O1", q: "Aina ipi ya zana ni bora zaidi kwa kubuni menyu?", options: ["Kipimajoto", "Kikokotoo", "App ya benki", "Zana ya kubuni michoro kama Canva"], answer: 3, why: "Zana za kubuni zinatengeneza menyu na matangazo." },
      { objective: "O1", q: "Huduma za AI zinaweza pia kuonekana ndani ya:", options: ["Mahali pengine popote hapana", "Vitu vya kuchezea tu", "Printa tu", "Apps unazotumia tayari, kama mifumo ya kupanga miadi au ya mauzo (POS)"], answer: 3, why: "Apps nyingi za biashara zinaongeza huduma za AI." },
      { objective: "O2", q: "Katika mazungumzo, unatoa taarifa za biashara yako lini?", options: ["Kamwe", "Mara moja mwanzoni", "Mwishoni tu", "Katika kila neno"], answer: 1, why: "Kuziweka mara moja kunakuwezesha kuomba vitu kadhaa." },
      { objective: "O2", q: "\"Nipe matoleo matatu\" kinakusaidia:", options: ["Kulipa kodi kidogo", "Kufuta mazungumzo", "Kuchagua chaguo bora", "Kushiriki nywila"], answer: 2, why: "Machaguo yanakuruhusu kuchagua." },
      { objective: "O2", q: "Kiolezo cha ujumbe wa kukumbusha kinapaswa kutumia:", options: ["\"[jina la mteja]\" kama kishika-nafasi", "Namba ya kadi ya mteja", "Nywila yako", "Anwani ya mteja halisi"], answer: 0, why: "Vishika-nafasi vinazuia taarifa binafsi zisiingie." },
      { objective: "O3", q: "Unakagua wapi mpango wa bure wa Canva una nini leo?", options: ["Kwa kukisia", "Makala ya zamani ya blogu", "canva.com", "Kwa mshindani"], answer: 2, why: "Tovuti rasmi ina taarifa za sasa za mipango." },
      { objective: "O3", q: "Tangazo lililo wazi lina:", options: ["Ujumbe mmoja mkuu na jinsi ya kukufikia", "Ujumbe kumi", "Maandishi madogo sana", "Hakuna jina la biashara"], answer: 0, why: "Rahisi na linalosomeka linafanya kazi vizuri zaidi." },
      { objective: "O3", q: "Unapaswa kutumia picha zipi?", options: ["Picha yoyote ya mtandaoni", "Zako mwenyewe au ulizo na haki ya kuzitumia", "Za mshindani", "Picha za kubahatisha za mitandao ya kijamii"], answer: 1, why: "Tumia tu picha ulizo na haki nazo." },
      { objective: "O4", q: "Google Docs na Microsoft Word ni:", options: ["Zana za kubuni michoro tu", "Kampuni za simu", "Apps za malipo", "Zana za nyaraka"], answer: 3, why: "Ni programu za kuandika nyaraka." },
      { objective: "O4", q: "Toleo la mwisho lililokaguliwa la sera linapaswa kukaa wapi?", options: ["Katika hati yako (Docs au Word)", "Ndani ya mazungumzo ya AI tu", "Kwenye karatasi ndogo ya kubandika", "Popote hapana"], answer: 0, why: "Nyaraka zinaweka toleo la mwisho unaloweza kushiriki na kusasisha." },
      { objective: "O4", q: "Kazi nzuri ya nyaraka kwa msaada wa AI ni:", options: ["Kuchagua wakili", "Kusaini mkataba kwa niaba yako", "Kuwasilisha kodi", "Orodha ya kukagua wakati wa kufungua"], answer: 3, why: "Orodha za kukagua ni maandishi yenye hatari ndogo." },
      { objective: "O5", q: "Lahajedwali ni:", options: ["Msaidizi wa mazungumzo", "Kiolezo cha kubuni", "Gridi ya safu na safuwima kwa ajili ya namba", "Benki"], answer: 2, why: "Sheets na Excel zinapanga namba." },
      { objective: "O5", q: "=SUM(E2:E20) ni mfano wa:", options: ["Prompt", "Fomula", "Kiolezo", "Nywila"], answer: 1, why: "Fomula zinakokotoa ndani ya visanduku." },
      { objective: "O5", q: "AI inasema bidhaa yako inayouzwa zaidi ni tacos. Unapaswa:", options: ["Kuwaambia wateja", "Kudhani ni sahihi", "Kufuta jedwali", "Kuthibitisha ndani ya jedwali lako"], answer: 3, why: "Kagua jinsi AI ilivyosoma ukilinganisha na data yako." },
      { objective: "O5", q: "Kabla ya kubandika jedwali kwa msaidizi wa mazungumzo, ondoa:", options: ["Majina ya bidhaa", "Tarehe", "Majina ya wateja na namba za kadi", "Jumla"], answer: 2, why: "Taarifa binafsi zinabaki nje." },
      { objective: "O6", q: "Seti ya kwanza ya zana inapaswa kuwa na zana ngapi?", options: ["Tatu hadi tano", "Hamsini", "Hakuna", "Mia moja"], answer: 0, why: "Orodha fupi unayoitumia kweli." },
      { objective: "O6", q: "Jedwali la seti yako ya zana linaorodhesha:", options: ["Nywila", "Zana, kazi, mpango na kanuni ya usalama", "Namba za kadi za wateja", "Bei tu"], answer: 1, why: "Safuwima hizo nne zinaliweka likiwa na manufaa na salama." },
      { objective: "O6", q: "Unapaswa kulipia mpango wa juu lini?", options: ["Kila mara siku ya kwanza", "Unapohitaji huduma ambayo mpango wa bure hauna", "Tangazo linaposema hivyo", "Bila kukagua bei kamwe"], answer: 1, why: "Lipia tu mahitaji halisi, baada ya kukagua bei." },
      { objective: "O6", q: "Kanuni ipi inahusu kila zana ya AI?", options: ["Kagua ukweli kabla wateja hawajauona", "Shiriki nywila ili kuokoa muda", "Nakili picha yoyote", "Amini kila namba"], answer: 0, why: "Kukagua ukweli kunalinda biashara yako." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      3,
      5,
      7,
      9,
      10,
      12,
      14,
      16,
      19
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Jedwali la seti ya zana",
        objective: "O6",
        notYet: "Zana chini ya tatu, au kazi, mpango au kanuni ya usalama inakosekana.",
        meets: "Zana tatu hadi tano, kila moja ikiwa na kazi, mpango na kanuni ya usalama.",
        exceeds: "Anaandika wakati ambapo angefikiria kulipia mpango wa juu."
      },
      {
        name: "Ujumbe kwa mteja",
        objective: "O2",
        notYet: "Hakuna ujumbe, au una taarifa za mteja halisi au ukweli usio sahihi.",
        meets: "Ujumbe kwa mteja uliokaguliwa, uliotengenezwa kwa msaidizi wa mazungumzo, ukitumia vishika-nafasi.",
        exceeds: "Mmiliki alilinganisha matoleo zaidi ya moja na akachagua bora zaidi."
      },
      {
        name: "Tangazo au chapisho",
        objective: "O3",
        notYet: "Hakuna tangazo, au lina makosa au picha bila haki ya kuzitumia.",
        meets: "Tangazo au chapisho lenye ujumbe mmoja mkuu na mawasiliano, kila neno limekaguliwa.",
        exceeds: "Linatumia picha za mmiliki mwenyewe na liko tayari kuwekwa mtandaoni au kuchapishwa."
      },
      {
        name: "Orodha ya bei au jedwali la mauzo",
        objective: "O5",
        notYet: "Hakuna jedwali, au jumla ziliandikwa kwa mkono.",
        meets: "Orodha ya bei katika Docs au Word, au jedwali la mauzo lenye fomula ya SUM.",
        exceeds: "Jinsi AI ilivyosoma jedwali ilithibitishwa ndani ya jedwali."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wamiliki wanaotumia angalau zana mbili za seti yao kila wiki (utafiti wa kufuatilia wa siku 30)",
      "Wamiliki wanaoripoti kuokoa muda au pesa kwa kutumia mipango ya bure (utafiti wa kufuatilia)",
      "Wamiliki wanaoanza kozi nyingine ya Koach Learn ya biashara ndogo ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta au simu janja yenye intaneti (kompyuta ni rahisi zaidi kwa lahajedwali)",
      "Akaunti za bure za msaidizi wa mazungumzo, Canva na Google Docs na Sheets au Microsoft Word na Excel",
      "Taarifa halisi za biashara: bei, ofa au tukio, na namba za mauzo au za bidhaa za wiki chache",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Majina ya mipango na huduma hubadilika; fungueni pamoja tovuti rasmi ya kila zana kuona mpango wake wa bure wa sasa.",
      "Wamiliki watumie majina ya wateja ya kubuni na wasitumie namba za kadi katika majedwali na ujumbe wa mazoezi.",
      "Lahajedwali ni mpya kwa wamiliki wengi; onyesha fomula moja ya SUM moja kwa moja kabla ya kazi ya Somo la 5.",
      "Peleka maneno ya kisheria katika sera kwa mtaalamu au chanzo rasmi, kama SCORE au Small Business Development Center (vituo vya Marekani vya ushauri wa bure kwa biashara ndogo).",
      "Pima seti ya zana na vitu vilivyotengenezwa kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
