"use strict";

// Koach Learn course (Swahili translation of shared/data-analytics-excel-sql.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const DATAPLUS = { name: "CompTIA Data+ (DA0-002) official page", url: "https://www.comptia.org/en-us/certifications/data/" };
const SQLITE_ONLINE = { name: "SQLite Online (SQL editor in the browser)", url: "https://sqliteonline.com/" };
const DB_BROWSER = { name: "DB Browser for SQLite (open-source desktop tool)", url: "https://sqlitebrowser.org/" };

module.exports = {
  id: "data-analytics-excel-sql-sw",
  lang: "sw",
  translationOf: "data-analytics-excel-sql",
  category: "Workforce Development",
  name: "Uchambuzi wa Data kwa Spreadsheet na SQL",
  skills: "Kuuliza swali la data, Kusafisha data, Pivot table na COUNTIFS/SUMIFS, Kuandika query za SQL, Kupanga vikundi na kuunganisha jedwali, Kuripoti matokeo",
  outcome: "kufanya kazi kama mchambuzi wa data anayeanza: kugeuza hitaji la biashara kuwa swali lililo wazi, kusafisha spreadsheet iliyochanganyika, kuifupisha kwa pivot table na SUMIFS, kujibu maswali kwa SQL (SELECT, WHERE, ORDER BY, GROUP BY na JOIN), na kuandika matokeo mafupi ya kweli unayoweza kumwonyesha mwajiri.",
  about: [
    "Wachambuzi wa data hugeuza safu za namba kuwa majibu ambayo watu wanaweza kuyatumia: duka gani linauza zaidi, mpango gani unasaidia watu wengi zaidi, pesa zinakwenda wapi. Karibu kila aina ya mwajiri anahitaji hili, kuanzia maduka na hospitali hadi ofisi za jiji na mashirika yasiyo ya faida.",
    "Utatumia zana mbili ambazo wachambuzi hutumia kila siku: spreadsheet (Google Sheets, ya bure, au Excel) na SQL, lugha ya kuuliza maswali kwa hifadhidata (database). Utafanya mazoezi ya SQL bure kwenye kivinjari chako. Data yote ya mazoezi ni ya kubuni na ni ndogo, kwa hiyo unaweza kukagua kila jibu kwa mkono.",
    "Ukitaka cheti, CompTIA Data+ ni kimoja kwa wachambuzi wa data wanaoanza. Kozi hii inakusaidia kujiandaa na inajenga ujuzi unaohusika, lakini haitoi Data+ wala cheti chochote; angalia ukurasa rasmi kwa mtihani wa sasa, bei na njia za kufanya mtihani.",
    "Inasaidia kujua spreadsheet za msingi kwanza (\"Excel na Lahajedwali kwa Kazi\"). Kila somo linachukua kama dakika tano, linaisha na kazi ya \"Jaribu sasa\" na maswali mawili mafupi, na kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Tengeneza mradi wa uchambuzi wa ukurasa mmoja kwa ajili ya portfolio yako: (1) swali lililo wazi kuhusu data ya mauzo ya mazoezi (au data ndogo ya umma utakayochagua); (2) data iliyosafishwa katika Google Sheets au Excel, yenye safu ya Revenue (mapato) na pivot table inayolijibu; (3) angalau query mbili za SQL ulizoendesha, moja yenye WHERE na ORDER BY na nyingine yenye GROUP BY, pamoja na matokeo yake; (4) matokeo matatu kwa sentensi rahisi zenye namba, kikomo kimoja cha data, na hatua moja inayofuata unayopendekeza; na (5) mstari mmoja wa CV unaoeleza mradi.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watafuta kazi, vijana wazima, maveterani na watu wanaobadilisha kazi wanaolenga kazi za mwanzo za data (mchambuzi wa data, msaidizi wa ripoti, mchambuzi wa shughuli au wa biashara) au wanaotaka ujuzi wa data katika kazi yao ya sasa. Wanatoka katika mazingira tofauti; wengi wametumia spreadsheet lakini hawajawahi kutumia SQL.",
    startingPoint: "Wanaweza kuingiza data, kutumia SUM na AVERAGE na kupanga (sort) katika spreadsheet. Hawajawahi kusafisha data iliyochanganyika, kutengeneza pivot table au kuandika query. Wachache wanajua jinsi wachambuzi wanavyowasilisha matokeo.",
    gap: "Kazi za mwanzo za data zinahitaji uchambuzi kwa spreadsheet na SQL ya msingi, pamoja na kueleza matokeo kwa uwazi. Wanafunzi wanahitaji mazoezi ya vitendo kwenye data halisi iliyochanganyika kwa zana za bure, na mradi mdogo wanaoweza kumwonyesha mwajiri.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; kila neno la kitaalamu linaelezwa",
      "Vifaa: kompyuta yenye kivinjari cha wavuti; simu ni ndogo mno kwa mazoezi ya SQL",
      "Zana za bure tu: Google Sheets (au Excel kama wanayo) na kihariri cha SQL cha bure kwenye kivinjari",
      "Data ya mazoezi ni ya kubuni; usiweke kamwe data halisi ya wateja, wagonjwa au mwajiri katika zana za mtandaoni",
      "Muda: masomo ya dakika 4 hadi 6; mradi unachukua saa moja au mbili zaidi"
    ],
    prerequisites: "Ujuzi wa msingi wa spreadsheet. Kozi \"Excel na Lahajedwali kwa Kazi\" inaufundisha."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa hitaji la biashara kutoka kwa meneja", action: "kuandika swali la data lililo wazi linaloweza kupimwa na kuorodhesha data inayohitajika kulijibu", standard: "likiwa na nani au nini, kipimo na kipindi cha muda" },
    { id: "O2", condition: "Ukipewa spreadsheet iliyochanganyika", action: "kusafisha data kwa kuondoa nakala zinazojirudia, kuondoa nafasi za ziada na kufanya majina na miundo yalingane", standard: "bila kubaki nakala zinazojirudia wala majina yasiyolingana" },
    { id: "O3", condition: "Ukipewa data safi katika Google Sheets au Excel", action: "kutengeneza pivot table na fomula ya SUMIFS au COUNTIFS zinazojibu swali", standard: "zikiwa na jumla zinazolingana na ukaguzi wa mkono" },
    { id: "O4", condition: "Ukitumia kihariri cha SQL cha bure na jedwali la mazoezi", action: "kuandika query za SELECT zenye WHERE na ORDER BY zinazorudisha safu zilizoombwa", standard: "zikirudisha safu sahihi kabisa kwa mpangilio sahihi" },
    { id: "O5", condition: "Ukitumia jedwali mbili za mazoezi", action: "kuandika query zinazotumia GROUP BY pamoja na SUM, COUNT au AVG, na JOIN kati ya jedwali hizo", standard: "zikiwa na matokeo yanayolingana na ukaguzi wa mkono" },
    { id: "O6", condition: "Ukipewa matokeo ya uchambuzi wako", action: "kuandika matokeo matatu yenye namba, kikomo kimoja cha data na hatua moja inayofuata", standard: "kwa sentensi rahisi ambazo meneja anaweza kuzifanyia kazi" }
  ],
  chapters: [
    {
      name: "Sura 1: Uchambuzi kwa spreadsheet",
      lessons: [
        {
          title: "Kazi ya mchambuzi: kutoka hitaji hadi swali lililo wazi",
          objectives: ["O1"],
          minutes: 5,
          goal: "Andika swali la data lililo wazi na linaloweza kupimwa kutokana na ombi la meneja.",
          text: [
            "Wachambuzi hufuata njia rahisi: uliza swali lililo wazi, pata data, isafishe, ichambue, na shiriki maana yake. Kazi kubwa inaanza na swali. Ombi lisilo wazi linaleta jibu lisilo wazi.",
            "Meneja anasema, \"Mauzo yanaendaje?\" Hilo ni hitaji, si swali. Swali lililo wazi linataja nani au nini, kipimo na kipindi cha muda: \"Duka lipi kati ya maduka yetu matatu lilikuwa na mapato makubwa zaidi kuanzia 1 hadi 4 Oktoba?\" Sasa unajua data unayohitaji: tarehe, maduka, idadi na bei.",
            "Maswali mazuri yanaweza kupimwa (unaweza kujibu kwa namba), ni mahususi, na yana manufaa (jibu linamsaidia mtu kuamua jambo). Andika data unayohitaji kabla ya kufungua faili lolote.",
            "Kazi zinazotumia ujuzi huu ni pamoja na mchambuzi wa data, mchambuzi wa ripoti, mchambuzi wa shughuli na mchambuzi wa biashara. Ukitaka cheti, CompTIA Data+ (mtihani DA0-002 tulipokagua Oktoba 2026) kinashughulikia dhana za data, kuandaa data, uchambuzi, kuonyesha data kwa picha na ripoti, na usimamizi wa data. Angalia ukurasa rasmi kwa taarifa za sasa."
          ],
          steps: ["Andika hitaji la meneja kwa maneno yake.", "Ligeuze kuwa swali lenye nani au nini, kipimo na kipindi cha muda.", "Kagua: je, namba inaweza kulijibu?", "Orodhesha safu (columns) za data unazohitaji."],
          words: [["Mchambuzi wa data", "mtu anayegeuza data kuwa majibu ambayo watu wanaweza kuyatumia."], ["Inayoweza kupimwa", "inaweza kujibiwa kwa namba au hesabu."], ["Dataset", "seti ya data, mara nyingi jedwali lenye safu za mlalo (rows) na safu wima (columns)."], ["Revenue (mapato)", "pesa zinazoingia kutokana na mauzo: idadi mara bei."]],
          slides: [
            { title: "Njia ya mchambuzi", bullets: ["Uliza, pata data, safisha, chambua, shiriki", "Inaanza na swali lililo wazi"] },
            { title: "Hitaji dhidi ya swali", bullets: ["Hitaji: \"Mauzo yanaendaje?\"", "Swali: \"Duka lipi lilikuwa na mapato makubwa zaidi, 1 hadi 4 Oktoba?\""] },
            { title: "Swali lililo wazi lina", bullets: ["Nani au nini", "Kipimo", "Kipindi cha muda"] },
            { title: "Cheti cha kujiandaa nacho", bullets: ["CompTIA Data+ (DA0-002, kimekaguliwa Okt 2026)", "Kozi hii inakuandaa; CompTIA ndiye anayetoa cheti", "Angalia comptia.org kwa taarifa za sasa"] }
          ],
          sources: [DATAPLUS],
          tryIt: "Geuza kila hitaji kuwa swali lililo wazi na uorodheshe data inayohitajika: (a) \"Je, benki ya chakula ina watu wengi zaidi siku hizi?\" (b) \"Tuagize zaidi bidhaa gani?\" Andika kila moja likiwa na nani au nini, kipimo na kipindi cha muda.",
          youCanNow: "kugeuza ombi lisilo wazi kuwa swali lililo wazi linaloweza kupimwa na kuorodhesha data linayohitaji.",
          quickCheck: [
            { objective: "O1", q: "Lipi ni swali la data lililo wazi zaidi?", options: ["\"Biashara inaendaje?\"", "\"Niambie kuhusu mauzo.\"", "\"Mambo ni mazuri?\"", "\"Bidhaa gani iliuza vipande vingi zaidi mwezi Septemba katika duka la North?\""], answer: 3, why: "Linataja nini (bidhaa), kipimo (vipande), mahali na kipindi cha muda." },
            { objective: "O1", q: "Swali lako ni \"Duka lipi lilikuwa na mapato makubwa zaidi wiki iliyopita?\" Unahitaji data gani?", options: ["Duka, tarehe, idadi na bei kwa kila mauzo", "Majina ya maduka tu", "Anwani za nyumbani za wafanyakazi", "Hali ya hewa"], answer: 0, why: "Mapato yanahitaji idadi na bei; duka na tarehe vinayapanga kwa mahali na muda." }
          ]
        },
        {
          title: "Kusafisha data iliyochanganyika katika spreadsheet",
          objectives: ["O2"],
          minutes: 6,
          goal: "Safisha jedwali lililochanganyika kwa kuondoa nakala zinazojirudia, nafasi za ziada na kurekebisha majina.",
          text: [
            "Data halisi huwa imechanganyika. Duka moja linaweza kuandikwa \"North\", \"north\" na \" North\" (likiwa na nafasi). Mauzo moja yanaweza kuingizwa mara mbili. Tarehe zinaweza kuwa katika miundo tofauti. Usipoisafisha, jumla zako zitakuwa si sahihi, kwa sababu spreadsheet inahesabu \"North\" na \"north \" kama maduka mawili tofauti.",
            "Katika Google Sheets, chagua data yako na utumie Data > Data cleanup > Remove duplicates, na Data > Data cleanup > Trim whitespace. Katika Excel, tumia Data > Remove Duplicates, na fomula ya TRIM kuondoa nafasi za ziada. Tumia Find and replace kurekebisha majina, kwa mfano kubadilisha \"north\" kuwa \"North\".",
            "Fanya kila safu wima iwe ya aina moja: tarehe kama tarehe, namba kama namba (bila kuandika \"$\"), maandishi yenye tahajia ileile kila mara. Kisha ongeza safu yoyote unayohitaji, kama Revenue = Qty mara Price (kwa mfano =D2*E2).",
            "Kila mara weka nakala ya data ghafi kwenye tab yake na usafishe nakala nyingine. Andika kila badiliko ulilofanya, ili mtu mwingine aweze kuiamini kazi yako na kuirudia."
          ],
          steps: ["Nakili data ghafi kwenye tab mpya inayoitwa Clean.", "Ondoa safu zinazojirudia.", "Ondoa nafasi za ziada.", "Rekebisha majina kwa Find and replace ili kila jina liandikwe namna moja.", "Fanya kila safu wima iwe ya aina moja: tarehe, namba au maandishi.", "Ongeza safu za hesabu, kama Revenue = Qty * Price.", "Andika orodha fupi ya mabadiliko uliyofanya."],
          words: [["Kusafisha data", "kurekebisha makosa, nakala zinazojirudia na maingizo yasiyolingana ili matokeo yawe sahihi."], ["Duplicate (nakala inayojirudia)", "safu inayoonekana zaidi ya mara moja kwa makosa."], ["Whitespace (nafasi tupu)", "nafasi za ziada kabla au baada ya maandishi ambazo huwezi kuziona kwa urahisi."], ["Data ghafi (raw data)", "data jinsi ulivyoipokea hasa, kabla ya mabadiliko yoyote."]],
          slides: [
            { title: "Kwa nini kusafisha?", bullets: ["\"North\", \"north\" na \" North\" zinahesabiwa kama tofauti", "Safu zinazojirudia zinahesabu mauzo mara mbili", "Data iliyochanganyika inatoa jumla zisizo sahihi"] },
            { title: "Zana za kusafisha", bullets: ["Sheets: Data > Data cleanup > Remove duplicates", "Sheets: Data > Data cleanup > Trim whitespace", "Excel: Remove Duplicates na TRIM", "Find and replace kurekebisha majina"] },
            { title: "Aina moja kwa kila safu wima", bullets: ["Tarehe kama tarehe, namba kama namba", "Ongeza Revenue = Qty * Price"] },
            { title: "Tabia nzuri", bullets: ["Weka data ghafi kwenye tab yake", "Andika kila badiliko"] }
          ],
          tryIt: "Katika Google Sheets, andika jedwali hili la mazoezi lenye vichwa Date, Store, Item, Qty, Price: 2026-10-01, North, Coffee, 3, 2.50 / 2026-10-01, South, Bagel, 5, 1.75 / 2026-10-02, north , Bagel, 2, 1.75 / 2026-10-02, East, Coffee, 6, 2.50 / 2026-10-02, East, Coffee, 6, 2.50 / 2026-10-03, South, Coffee, 4, 2.50 / 2026-10-03, North, Juice, 1, 3.00 / 2026-10-04, East, Bagel, 8, 1.75 / 2026-10-04, South, Juice, 2, 3.00. Linakili kwenye tab ya Clean, ondoa safu ya East inayojirudia, badilisha \"north \" kuwa \"North\", na uongeze safu ya Revenue. Unapaswa kuwa na safu 8.",
          youCanNow: "kusafisha jedwali lililochanganyika ili kila jumla unayojenga juu yake iwe sahihi.",
          quickCheck: [
            { objective: "O2", q: "Jumla ya \"North\" inaonekana ndogo mno. Baadhi ya safu zinasema \"north \" yenye nafasi. Unafanya nini?", options: ["Kufuta safu hizo", "Kuondoa nafasi na kufanya jina liwe \"North\" kila mahali", "Kupuuza", "Kukuza herufi"], answer: 1, why: "Kuondoa nafasi na kurekebisha majina kunafanya safu zote za North zihesabiwe pamoja." },
            { objective: "O2", q: "Kabla ya kusafisha, unapaswa kufanya nini na data ghafi?", options: ["Kuifuta", "Kumtumia kila mtu kwa barua pepe", "Kuweka nakala kwenye tab yake na kusafisha nakala nyingine", "Kuichapisha"], answer: 2, why: "Kuweka data ghafi kunakuruhusu kukagua au kurudia kazi yako." }
          ]
        },
        {
          title: "Kufupisha kwa pivot table, SUMIFS na COUNTIFS",
          objectives: ["O3"],
          minutes: 6,
          goal: "Tengeneza pivot table na fomula ya SUMIFS zinazojibu swali lako.",
          text: [
            "Pivot table inafupisha jedwali kubwa kwa sekunde chache: kwa mfano, mapato yote kwa kila duka. Katika Google Sheets, chagua data yako safi na uchague Insert > Pivot table. Katika Excel, chagua Insert > PivotTable. Weka Store chini ya Rows na Revenue chini ya Values, ikifupishwa kwa SUM.",
            "Kwa data ya mazoezi iliyosafishwa, pivot inapaswa kuonyesha East 29.00, South 24.75 na North 14.00. Kwa hiyo East ilikuwa na mapato makubwa zaidi kuanzia 1 hadi 4 Oktoba.",
            "Fomula zinaweza kujibu swali moja kwa wakati. SUMIFS inajumlisha namba zinazolingana na sharti: =SUMIFS(F:F, B:B, \"South\") inajumlisha safu ya Revenue (F) pale safu ya Store (B) inaposema South, na kutoa 24.75. COUNTIFS inahesabu safu zinazolingana: =COUNTIFS(C:C, \"Coffee\") inahesabu mauzo ya Coffee, na kutoa 3. AVERAGEIFS inafanya kazi vivyo hivyo kwa wastani.",
            "Kila mara kagua namba moja kwa mkono. Pivot na ukaguzi wako wa mkono visipolingana, huenda data bado inahitaji kusafishwa."
          ],
          steps: ["Chagua data safi, pamoja na vichwa.", "Weka pivot table kwenye sheet mpya.", "Weka kundi (Store) katika Rows.", "Weka kipimo (Revenue) katika Values, kikifupishwa kwa SUM.", "Ipange kutoka kubwa hadi ndogo.", "Kagua jumla moja kwa mkono au kwa SUMIFS."],
          words: [["Pivot table", "zana inayopanga vikundi na kufupisha jedwali, kwa mfano jumla kwa kila duka."], ["SUMIFS", "fomula inayojumlisha namba zinazolingana na sharti moja au zaidi."], ["COUNTIFS", "fomula inayohesabu safu zinazolingana na sharti moja au zaidi."], ["Kipimo", "namba unayoijumlisha au kuitafutia wastani, kama mapato."]],
          slides: [
            { title: "Pivot table", bullets: ["Sheets: Insert > Pivot table", "Excel: Insert > PivotTable", "Rows: Store; Values: SUM ya Revenue"] },
            { title: "Jibu la mazoezi", bullets: ["East 29.00, South 24.75, North 14.00", "East ilikuwa na mapato makubwa zaidi, 1 hadi 4 Oktoba"] },
            { title: "Fomula zenye masharti", bullets: ["=SUMIFS(F:F, B:B, \"South\") inatoa 24.75", "=COUNTIFS(C:C, \"Coffee\") inatoa 3", "AVERAGEIFS kwa wastani"] },
            { title: "Kagua kwa mkono", bullets: ["Jumlisha kundi moja wewe mwenyewe", "Hazilingani? Safisha data tena"] }
          ],
          tryIt: "Ukitumia data yako safi ya mazoezi, tengeneza pivot table ya mapato kwa kila duka na uipange. Kisha andika SUMIFS kwa East na COUNTIFS kwa Bagel. Kagua: East inapaswa kuwa 29.00 na Bagel inapaswa kuhesabu safu 3. Tengeneza pivot ya pili ya Qty kwa kila Item.",
          youCanNow: "kufupisha jedwali kwa pivot table na kulikagua kwa SUMIFS na COUNTIFS.",
          quickCheck: [
            { objective: "O3", q: "Katika pivot table ya mapato kwa kila duka, Store inawekwa wapi?", options: ["Rows", "Values", "Filters peke yake", "Haitumiki"], answer: 0, why: "Kundi unalopangia linakwenda Rows; namba unayojumlisha inakwenda Values." },
            { objective: "O3", q: "Fomula ipi inajumlisha Revenue (safu F) kwa duka la North tu (safu B)?", options: ["=SUM(F:F)", "=COUNTIFS(B:B, \"North\")", "=AVERAGE(B:B)", "=SUMIFS(F:F, B:B, \"North\")"], answer: 3, why: "SUMIFS inajumlisha eneo la jumla (F) pale eneo la sharti (B) linapolingana na North." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Uchambuzi kwa spreadsheet",
        questions: [
          { objective: "O1", q: "Lipi ni hitaji, bado si swali lililo wazi?", options: ["\"Tunaendeleaje?\"", "\"Duka lipi lilikuwa na mapato makubwa zaidi mwezi Oktoba?\"", "\"Kulikuwa na mauzo mangapi ya Coffee tarehe 2 Oktoba?\"", "\"Ukubwa wa wastani wa oda ulikuwa upi wiki iliyopita?\""], answer: 0, why: "Halina kipimo wala kipindi cha muda, kwa hiyo namba haiwezi kulijibu bado." },
          { objective: "O2", q: "Mauzo moja yaliingizwa mara mbili. Nini kinatokea usipoondoa nakala hiyo?", options: ["Hakuna kinachobadilika", "Jumla inahesabu mauzo hayo mara mbili", "Spreadsheet inarekebisha yenyewe", "Mauzo hayo yanapotea"], answer: 1, why: "Nakala zinazojirudia zinahesabu mara mbili, kwa hiyo jumla zinakuwa kubwa mno." },
          { objective: "O2", q: "Menyu ipi ya Google Sheets inaondoa nafasi za ziada?", options: ["Insert > Chart", "Format > Theme", "Data > Data cleanup > Trim whitespace", "File > Print"], answer: 2, why: "Trim whitespace inaondoa nafasi kabla na baada ya maandishi." },
          { objective: "O3", q: "=COUNTIFS(C:C, \"Juice\") inarudisha nini kwa data safi ya mazoezi?", options: ["1", "3", "8", "2"], answer: 3, why: "Juice inaonekana katika safu mbili (North tarehe 3 Oktoba na South tarehe 4 Oktoba)." },
          { objective: "O3", q: "Jumla ya pivot yako kwa South hailingani na ukaguzi wako wa mkono. Sababu inayowezekana zaidi ni ipi?", options: ["Data bado ina nakala inayojirudia au jina lisilolingana", "Pivot table haziwezi kujumlisha", "Unahitaji skrini kubwa zaidi", "Ukaguzi wa mkono ni makosa kila mara"], answer: 0, why: "Kutolingana kwa kawaida kunaonyesha data ambayo bado inahitaji kusafishwa." }
        ]
      }
    },
    {
      name: "Sura 2: SQL na kushiriki matokeo",
      lessons: [
        {
          title: "Query zako za kwanza za SQL: SELECT, WHERE na ORDER BY",
          objectives: ["O4"],
          minutes: 6,
          goal: "Andika query za SELECT zenye WHERE na ORDER BY katika kihariri cha SQL cha bure.",
          text: [
            "Mashirika makubwa huweka data katika hifadhidata (databases), si spreadsheet. SQL (mara nyingi hutamkwa \"sequel\") ni lugha ya kuuliza hifadhidata maswali. Query ni swali moja. SQL inafanana na Kiingereza cha kawaida, na inatumiwa karibu katika kila kazi ya data.",
            "Unaweza kufanya mazoezi bure kwenye kivinjari chako katika SQLite Online (sqliteonline.com): andika SQL katika kihariri na ubonyeze Run. Inaweza kutoa vitu vya ziada vya kulipia; huvihitaji. DB Browser for SQLite ni chaguo la bure la open-source la kusakinisha kwenye kompyuta. Tumia data ya mazoezi tu katika zana za mtandaoni, kamwe si data halisi ya wateja.",
            "Tengeneza jedwali la mazoezi kwa kuendesha: CREATE TABLE sales (id INTEGER, sale_date TEXT, store TEXT, item TEXT, qty INTEGER, price REAL); kisha INSERT INTO sales VALUES (1,'2026-10-01','North','Coffee',3,2.50),(2,'2026-10-01','South','Bagel',5,1.75),(3,'2026-10-02','North','Bagel',2,1.75),(4,'2026-10-02','East','Coffee',6,2.50),(5,'2026-10-03','South','Coffee',4,2.50),(6,'2026-10-03','North','Juice',1,3.00),(7,'2026-10-04','East','Bagel',8,1.75),(8,'2026-10-04','South','Juice',2,3.00);",
            "Sasa uliza. SELECT * FROM sales; inaonyesha kila safu. SELECT item, qty FROM sales WHERE store = 'North'; inaonyesha bidhaa za North tu. SELECT * FROM sales WHERE qty >= 4 ORDER BY qty DESC; inaonyesha mauzo manne makubwa zaidi, kubwa kwanza (8, 6, 5, 4). Maandishi yanawekwa katika alama za nukuu moja; namba haziwekwi."
          ],
          steps: ["Fungua kihariri cha SQL cha bure kwenye kivinjari chako.", "Endesha mstari wa CREATE TABLE, kisha mstari wa INSERT.", "Endesha SELECT * FROM sales; kuona safu zote 8.", "Ongeza WHERE kubakiza safu unazotaka tu.", "Ongeza ORDER BY kupanga; ongeza DESC kwa kubwa kwanza.", "Kagua matokeo kwa kuangalia safu wewe mwenyewe."],
          words: [["Hifadhidata (database)", "ghala lililopangwa la data, linalowekwa katika jedwali."], ["SQL", "Structured Query Language: lugha ya kuuliza hifadhidata maswali."], ["Query", "swali moja lililoandikwa kwa SQL."], ["SELECT / FROM", "SELECT inataja safu wima unazotaka; FROM inataja jedwali."], ["WHERE", "inabakiza safu zinazolingana na sharti tu."], ["ORDER BY", "inapanga matokeo; DESC maana yake kubwa kwanza."]],
          slides: [
            { title: "SQL kwa maneno rahisi", bullets: ["Lugha ya kuuliza hifadhidata maswali", "Swali moja = query moja", "Inatumiwa karibu katika kila kazi ya data"] },
            { title: "Fanya mazoezi bure", bullets: ["SQLite Online kwenye kivinjari: andika, kisha Run", "DB Browser for SQLite kwenye kompyuta yako", "Data ya mazoezi tu"] },
            { title: "Query tatu", bullets: ["SELECT * FROM sales;", "SELECT item, qty FROM sales WHERE store = 'North';", "... WHERE qty >= 4 ORDER BY qty DESC;"] },
            { title: "Kanuni za kukumbuka", bullets: ["Maandishi katika nukuu moja: 'North'", "Namba bila nukuu", "Maliza kila query kwa ;"] }
          ],
          sources: [SQLITE_ONLINE, DB_BROWSER],
          tryIt: "Tengeneza jedwali la sales na uendeshe query hizo tatu. Kisha andika yako mwenyewe: mauzo yote ya Coffee, yakipangwa kwa qty kutoka kubwa hadi ndogo. Unapaswa kupata safu 3: qty 6, 4 na 3. Hifadhi kila query na matokeo yake kwa kazi yako ya mwisho.",
          youCanNow: "kutengeneza jedwali la mazoezi na kuandika query za SQL zinazochuja na kupanga safu.",
          quickCheck: [
            { objective: "O4", q: "Query ipi inaonyesha mauzo ya duka la South tu?", options: ["SELECT * FROM sales ORDER BY store;", "SELECT * FROM sales WHERE store = 'South';", "SELECT South FROM sales;", "SELECT * WHERE sales = South;"], answer: 1, why: "WHERE store = 'South' inabakiza safu za duka hilo tu." },
            { objective: "O4", q: "DESC inafanya nini katika ORDER BY qty DESC?", options: ["Inafuta safu wima", "Inaeleza jedwali", "Inapanga kutoka kubwa hadi ndogo", "Inabakiza safu moja tu"], answer: 2, why: "DESC maana yake kushuka: kubwa kwanza." }
          ]
        },
        {
          title: "Jumla kwa GROUP BY, na kuunganisha jedwali mbili",
          objectives: ["O5"],
          minutes: 6,
          goal: "Andika query ya GROUP BY yenye SUM na JOIN kati ya jedwali mbili.",
          text: [
            "GROUP BY inafanya katika SQL kile ambacho pivot table inafanya katika spreadsheet. SELECT store, SUM(qty * price) AS revenue FROM sales GROUP BY store ORDER BY revenue DESC; inatoa East 29.0, South 24.75, North 14.0, sawa na pivot yako. AS inaipa safu wima mpya jina.",
            "Fomula nyingine za kufupisha: COUNT(*) inahesabu safu, AVG(qty) inatoa wastani, MIN na MAX zinatoa ndogo zaidi na kubwa zaidi. SELECT item, SUM(qty) FROM sales GROUP BY item; inatoa Bagel 15, Coffee 13, Juice 3.",
            "Mara nyingi data imegawanywa katika jedwali kadhaa. Jedwali la pili linaweza kuwa na jiji la kila duka: CREATE TABLE stores (store TEXT, city TEXT); INSERT INTO stores VALUES ('North','Fresno'),('South','Bakersfield'),('East','Modesto'); JOIN inaoanisha safu pale safu wima fulani inapokuwa sawa katika jedwali zote mbili.",
            "SELECT sales.item, sales.qty, stores.city FROM sales JOIN stores ON sales.store = stores.store; inaonyesha kila mauzo pamoja na jiji lake. Jina la duka likiandikwa tofauti katika jedwali hizo mbili, JOIN italikosa, na hiyo ni sababu nyingine ya kusafisha data kwanza."
          ],
          steps: ["Chagua safu wima ya kupangia vikundi (store, item, date).", "Chagua ufupisho: SUM, COUNT, AVG, MIN au MAX.", "Andika SELECT column, SUM(...) AS name FROM table GROUP BY column;", "Ongeza ORDER BY kupanga vikundi kwa ngazi.", "Kwa JOIN, taja jedwali zote mbili na safu wima inayolingana baada ya ON.", "Linganisha matokeo na pivot table yako."],
          words: [["GROUP BY", "inaweka pamoja safu zenye thamani moja ili uweze kujumlisha au kuhesabu kila kundi."], ["Aggregate function (fomula ya kufupisha)", "ufupisho kama SUM, COUNT, AVG, MIN au MAX."], ["AS", "inaipa safu wima ya matokeo jina."], ["JOIN", "inaunganisha safu kutoka jedwali mbili zenye safu wima inayolingana."], ["Key (ufunguo)", "safu wima inayotumika kuoanisha safu kati ya jedwali."]],
          slides: [
            { title: "GROUP BY = pivot katika SQL", bullets: ["SELECT store, SUM(qty * price) AS revenue", "FROM sales GROUP BY store ORDER BY revenue DESC;", "East 29.0, South 24.75, North 14.0"] },
            { title: "Fomula za kufupisha", bullets: ["COUNT(*), SUM, AVG, MIN, MAX", "Vipande kwa kila bidhaa: Bagel 15, Coffee 13, Juice 3"] },
            { title: "Kuunganisha jedwali mbili", bullets: ["Jedwali la stores: store na city", "JOIN stores ON sales.store = stores.store", "Sasa kila mauzo yanaonyesha jiji lake"] },
            { title: "Funguo safi ni muhimu", bullets: ["Tahajia tofauti: JOIN inakosa safu", "Safisha kwanza, kisha unganisha"] }
          ],
          sources: [SQLITE_ONLINE],
          tryIt: "Endesha query ya mapato yenye GROUP BY na ukague kama inalingana na pivot table yako. Andika query inayohesabu mauzo katika kila duka (COUNT(*)); unapaswa kupata 3, 3 na 2. Kisha tengeneza jedwali la stores na uendeshe JOIN. Hifadhi kila query na matokeo yake.",
          youCanNow: "kujumlisha na kuhesabu vikundi kwa GROUP BY na kuunganisha jedwali mbili kwa JOIN.",
          quickCheck: [
            { objective: "O5", q: "Query ipi inatoa jumla ya vipande vilivyouzwa kwa kila bidhaa?", options: ["SELECT item, SUM(qty) FROM sales GROUP BY item;", "SELECT * FROM sales;", "SELECT item FROM sales WHERE qty = SUM;", "SELECT SUM(item) FROM sales;"], answer: 0, why: "GROUP BY item inatengeneza kundi moja kwa kila bidhaa, na SUM(qty) inajumlisha kila moja." },
            { objective: "O5", q: "JOIN kati ya sales na stores inakosa safu za North. Sababu inayowezekana zaidi ni ipi?", options: ["SQL haiwezi kuunganisha maandishi", "Kuna safu nyingi mno", "Jina la duka limeandikwa tofauti katika jedwali hizo mbili", "JOIN inafanya kazi Jumatatu tu"], answer: 2, why: "JOIN inaoanisha thamani zinazofanana kabisa; tahajia tofauti hazioani." }
          ]
        },
        {
          title: "Kugeuza matokeo kuwa hitimisho, na mradi wako",
          objectives: ["O6"],
          minutes: 6,
          goal: "Andika matokeo matatu yenye namba, kikomo kimoja na hatua moja inayofuata.",
          text: [
            "Namba peke yake hazimsaidii meneja. Tokeo (finding) ni sentensi moja inayosema data inaonyesha nini, pamoja na namba: \"East ilikuwa na mapato makubwa zaidi kuanzia 1 hadi 4 Oktoba: $29.00, zaidi ya mara mbili ya $14.00 za North.\"",
            "Kuwa mkweli kuhusu vikomo. Data ya mazoezi inahusu siku 4 tu na mauzo 8, kwa hiyo haiwezi kukuambia kuhusu mwaka mzima. Kwenda pamoja si kusababisha: kama Coffee iliuzwa zaidi siku ya baridi, data peke yake haithibitishi kwamba hali ya hewa ndiyo iliyosababisha. Sema kile ambacho data haiwezi kukuambia.",
            "Maliza kwa hatua inayofuata ambayo mtu anaweza kuifanyia kazi: \"Kusanya mauzo ya mwezi mzima kabla ya kuamua wapi kupeleka bidhaa zaidi.\" Ifanye iwe ukurasa mmoja, yenye chati au jedwali moja lililo wazi kutoka kwenye pivot yako.",
            "Mwisho, geuza mradi kuwa mstari wa CV: \"Nilisafisha na kuchambua data ya mauzo katika Google Sheets na SQL (GROUP BY, JOIN); nilipata duka linaloongoza kwa mapato na kuripoti matokeo.\" Hili linamwonyesha mwajiri unachoweza kufanya. Tumia data ya kubuni au ya umma tu katika portfolio, kamwe si data binafsi ya mwajiri."
          ],
          steps: ["Andika swali juu kabisa.", "Ongeza jedwali au chati moja kutoka kwenye pivot yako.", "Andika matokeo matatu, kila moja likiwa na namba.", "Andika kikomo kimoja: kile ambacho data haiwezi kukuambia.", "Andika hatua moja inayofuata.", "Ongeza query zako za SQL na matokeo yake.", "Andika mstari mmoja wa CV kuhusu mradi."],
          words: [["Tokeo (finding)", "sentensi moja inayoeleza data inaonyesha nini, pamoja na namba."], ["Kikomo (limitation)", "kitu ambacho data haiwezi kukuambia, au sababu ya kuwa mwangalifu nayo."], ["Correlation (kwenda pamoja)", "vitu viwili vinavyobadilika pamoja; haithibitishi kwamba kimoja kinasababisha kingine."], ["Portfolio", "mkusanyiko wa mifano ya kazi zako unaowaonyesha waajiri."]],
          slides: [
            { title: "Tokeo zuri", bullets: ["Sentensi moja, namba moja", "\"East ilikuwa na mapato makubwa zaidi: $29.00, mara mbili ya $14.00 za North.\""] },
            { title: "Kuwa mkweli kuhusu vikomo", bullets: ["Siku 4 tu na mauzo 8", "Kwenda pamoja si kusababisha"] },
            { title: "Ukurasa mmoja", bullets: ["Swali, chati au jedwali moja", "Matokeo matatu, kikomo kimoja, hatua moja inayofuata", "Query zako za SQL na matokeo yake"] },
            { title: "Uonyeshe", bullets: ["Andika mstari mmoja wa CV", "Tumia data ya kubuni au ya umma tu"] }
          ],
          sources: [DATAPLUS],
          tryIt: "Kazi ya mwisho: tengeneza mradi wako wa ukurasa mmoja wenye swali, data iliyosafishwa na pivot, angalau query mbili za SQL pamoja na matokeo, matokeo matatu yenye namba, kikomo kimoja, hatua moja inayofuata, na mstari mmoja wa CV. Usome kwa sauti: je, meneja mwenye shughuli nyingi angeweza kuufanyia kazi ndani ya dakika moja?",
          youCanNow: "kugeuza uchambuzi kuwa matokeo yaliyo wazi na ya kweli na mradi unaoweza kumwonyesha mwajiri.",
          quickCheck: [
            { objective: "O6", q: "Lipi ni tokeo bora zaidi?", options: ["\"Mauzo yalitokea.\"", "\"Data inavutia.\"", "\"South iliuza vipande 11 vya chakula na vinywaji na kupata $24.75, ya pili kati ya maduka matatu.\"", "\"Namba zilipanda na kushuka.\""], answer: 2, why: "Linaeleza kilichotokea, pamoja na namba na ulinganisho." },
            { objective: "O6", q: "Juice iliuzwa zaidi siku yenye joto zaidi katika data yako. Unaweza kusema nini kwa ukweli?", options: ["Hali ya joto inasababisha mauzo ya juice", "Juice na siku za joto zilikwenda pamoja hapa, lakini hili halithibitishi sababu", "Juice itauzwa zaidi kila wakati wa kiangazi", "Data si sahihi"], answer: 1, why: "Kwenda pamoja si kusababisha; data ndogo haiwezi kuthibitisha kwa nini." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: SQL na kushiriki matokeo",
        questions: [
          { objective: "O4", q: "SELECT * FROM sales; inafanya nini?", options: ["Inafuta jedwali la sales", "Inaonyesha kila safu wima na kila safu katika jedwali la sales", "Inahesabu safu", "Inapanga jedwali"], answer: 1, why: "* maana yake safu wima zote, na bila WHERE kila safu inarudishwa." },
          { objective: "O4", q: "Lipi limeandikwa kwa usahihi?", options: ["SELECT * FROM sales WHERE item = 'Bagel';", "SELECT * FROM sales WHERE item = Bagel", "FROM sales SELECT Bagel;", "SELECT Bagel WHERE sales;"], answer: 0, why: "Thamani za maandishi zinawekwa katika nukuu moja, na mpangilio ni SELECT, FROM, WHERE." },
          { objective: "O5", q: "Sehemu ipi ya SQL inafanya kazi sawa na Rows ya pivot table?", options: ["ORDER BY", "WHERE", "FROM", "GROUP BY"], answer: 3, why: "GROUP BY inatengeneza kundi moja kwa kila thamani, kama safu katika pivot table." },
          { objective: "O5", q: "COUNT(*) inarudisha nini kwa kila duka katika data ya mazoezi?", options: ["Jumla ya mapato", "Bei ya wastani", "Idadi ya safu za mauzo", "Jiji"], answer: 2, why: "COUNT(*) inahesabu safu katika kila kundi." },
          { objective: "O6", q: "Lipi linafaa katika sehemu ya vikomo ya ripoti yako?", options: ["\"Data inahusu siku 4 tu, kwa hiyo haiwezi kuonyesha mwelekeo wa mwaka.\"", "\"East ni duka bora milele.\"", "\"SQL ni ngumu.\"", "\"Napenda kahawa.\""], answer: 0, why: "Kikomo kinamwambia msomaji kile ambacho data haiwezi kuonyesha." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Uchambuzi wa Data kwa Spreadsheet na SQL",
    questions: [
      { objective: "O1", q: "Swali la data lililo wazi lina:", options: ["Mada tu", "Nani au nini, kipimo na kipindi cha muda", "Chati", "Nywila"], answer: 1, why: "Sehemu hizo tatu zinalifanya liweze kujibiwa kwa namba." },
      { objective: "O1", q: "Hatua ya kwanza katika njia ya mchambuzi ni ipi?", options: ["Kutengeneza chati", "Kuandika SQL", "Kuuliza swali lililo wazi", "Kushiriki matokeo"], answer: 2, why: "Swali linaamua data unayohitaji na jinsi ya kuichambua." },
      { objective: "O1", q: "Cheti kipi cha CompTIA kinawalenga wachambuzi wa data wanaoanza?", options: ["Data+", "A+", "Security+", "Network+"], answer: 0, why: "CompTIA Data+ kinashughulikia dhana za data, kuandaa, kuchambua, kuonyesha kwa picha na usimamizi." },
      { objective: "O2", q: "Kwa nini \"North\" na \"north \" zinaleta tatizo?", options: ["Zinafanya faili kuwa kubwa", "Spreadsheet haziwezi kusoma herufi ndogo", "Zinabadilisha herufi", "Zinahesabiwa kama maduka mawili tofauti"], answer: 3, why: "Tahajia tofauti zinagawa kundi moja kuwa mawili, kwa hiyo jumla zinakuwa si sahihi." },
      { objective: "O2", q: "Zana ipi ya Excel inaondoa safu zinazojirudia?", options: ["Insert > Chart", "Data > Remove Duplicates", "View > Zoom", "File > Save As"], answer: 1, why: "Remove Duplicates inafuta safu zinazoonekana zaidi ya mara moja." },
      { objective: "O2", q: "Ipi ni tabia nzuri ya kusafisha?", options: ["Kusafisha nakala pekee ya data", "Kuweka data ghafi na kuandika kila badiliko", "Kufuta safu yoyote inayoonekana ya ajabu", "Kuandika alama za $ katika visanduku vya namba"], answer: 1, why: "Kuweka data ghafi na orodha ya mabadiliko kunafanya kazi yako iweze kukaguliwa." },
      { objective: "O3", q: "Katika pivot table, namba unayoijumlisha inakwenda wapi?", options: ["Values", "Rows", "Kichwa", "Filters peke yake"], answer: 0, why: "Values inabeba kipimo, kikifupishwa kwa SUM, COUNT au AVERAGE." },
      { objective: "O3", q: "COUNTIFS inafanya nini?", options: ["Inajumlisha namba", "Inatafuta wastani", "Inahesabu safu zinazolingana na sharti moja au zaidi", "Inapanga safu wima"], answer: 2, why: "COUNTIFS inahesabu safu zinazotimiza masharti unayoipa." },
      { objective: "O3", q: "Katika data safi ya mazoezi, duka lipi lilikuwa na mapato makubwa zaidi?", options: ["North", "South", "Yote yalikuwa sawa", "East"], answer: 3, why: "East ilikuwa na 29.00, South 24.75 na North 14.00." },
      { objective: "O4", q: "SQL inatumika kwa nini?", options: ["Kuchora picha", "Kuuliza hifadhidata maswali", "Kutuma barua pepe", "Kutengeneza slaidi"], answer: 1, why: "SQL ni lugha ya kuuliza hifadhidata." },
      { objective: "O4", q: "Ipi inabakiza safu ambazo qty ni 4 au zaidi tu?", options: ["ORDER BY qty", "GROUP BY qty", "WHERE qty >= 4", "SELECT qty"], answer: 2, why: "WHERE inachuja safu kwa sharti." },
      { objective: "O4", q: "Kupanga matokeo kubwa zaidi kwanza, unaandika:", options: ["ORDER BY qty DESC", "ORDER BY qty ASC", "WHERE qty BIG", "SORT qty"], answer: 0, why: "DESC inapanga kutoka kubwa hadi ndogo." },
      { objective: "O4", q: "Data ipi ni salama kuweka katika zana ya mtandaoni ya mazoezi ya SQL?", options: ["Orodha ya wateja wa mwajiri wako", "Rekodi za wagonjwa", "Data ya mazoezi ya kubuni", "Taarifa zako za benki"], answer: 2, why: "Tumia data ya mazoezi au ya umma tu katika zana za mtandaoni." },
      { objective: "O5", q: "SELECT store, SUM(qty * price) FROM sales GROUP BY store; inarudisha:", options: ["Kila mauzo", "Jumla ya mapato kwa kila duka", "Idadi ya maduka", "Jiji la kila duka"], answer: 1, why: "GROUP BY store pamoja na SUM inatoa jumla moja ya mapato kwa kila duka." },
      { objective: "O5", q: "Fomula ipi inatoa wastani?", options: ["COUNT", "MAX", "SUM", "AVG"], answer: 3, why: "AVG inarudisha wastani wa safu wima." },
      { objective: "O5", q: "JOIN inaoanisha safu kutoka jedwali mbili kwa:", options: ["Safu wima yenye thamani zilezile katika zote mbili", "Rangi ya safu", "Ukubwa wa jedwali", "Mpangilio wa alfabeti tu"], answer: 0, why: "JOIN ... ON inaoanisha safu pale safu wima ya ufunguo inapokuwa sawa." },
      { objective: "O6", q: "Tokeo linapaswa kuwa na:", options: ["Chati tu bila maneno", "Namba na maana yake", "Kila safu ya data", "Maoni yako bila data"], answer: 1, why: "Tokeo lililo wazi linaeleza kilichotokea kwa namba." },
      { objective: "O6", q: "Data yako inahusu wiki moja. Lipi ni la kweli?", options: ["\"Hili linathibitisha mwelekeo wa mwaka.\"", "\"Hili halitabadilika kamwe.\"", "\"Data ni kamilifu.\"", "\"Wiki hii tu; tunahitaji data zaidi kuona mwelekeo.\""], answer: 3, why: "Kutaja kikomo kunawazuia wasomaji kufikia hitimisho lisilo sahihi." },
      { objective: "O6", q: "Mstari upi wa CV unaonyesha mradi huu vizuri zaidi?", options: ["\"Ninaweza kutumia kompyuta.\"", "\"Nilisafisha na kuchambua data ya mauzo katika Google Sheets na SQL (GROUP BY, JOIN) na kuripoti matokeo.\"", "\"Najua data kidogo.\"", "\"Nimetumia intaneti.\""], answer: 1, why: "Unataja zana, ujuzi na matokeo." },
      { objective: "O6", q: "Ripoti yako ya ukurasa mmoja inapaswa kuishia na nini?", options: ["Hatua inayofuata iliyo wazi ambayo mtu anaweza kuifanyia kazi", "Orodha ndefu ya data ghafi", "Nywila yako", "Hakuna kitu"], answer: 0, why: "Hatua inayofuata inageuza matokeo kuwa vitendo." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 3, 6, 8, 9, 10, 13, 15, 16] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Swali lililo wazi", objective: "O1", notYet: "Swali halieleweki au haliwezi kujibiwa kwa namba.", meets: "Swali linataja nani au nini, kipimo na kipindi cha muda.", exceeds: "Pia linasema nani atatumia jibu na linasaidia uamuzi gani." },
      { name: "Data safi", objective: "O2", notYet: "Nakala zinazojirudia au majina yasiyolingana bado yapo, au data ghafi ilipotea.", meets: "Hakuna nakala zinazojirudia, majina na aina zinalingana, data ghafi imehifadhiwa, mabadiliko yameorodheshwa.", exceeds: "Orodha ya mabadiliko iko wazi kiasi kwamba mtu mwingine anaweza kurudia usafishaji." },
      { name: "Pivot na fomula", objective: "O3", notYet: "Hakuna pivot, au jumla hazilingani na ukaguzi wa mkono.", meets: "Pivot inajibu swali na SUMIFS au COUNTIFS inalingana nayo.", exceeds: "Pivot au fomula ya pili inaongeza ulinganisho wenye manufaa." },
      { name: "Query za kuchuja", objective: "O4", notYet: "Hakuna query inayofanya kazi, au inarudisha safu zisizo sahihi.", meets: "Query yenye WHERE na ORDER BY inarudisha safu sahihi kabisa.", exceeds: "Query zimeandikwa kwa unadhifu na kila moja ina maelezo ya mstari mmoja kuhusu inachojibu." },
      { name: "Vikundi na kuunganisha", objective: "O5", notYet: "Hakuna query ya GROUP BY, au jumla zake si sahihi.", meets: "Query ya GROUP BY yenye SUM, COUNT au AVG inalingana na pivot.", exceeds: "Pia ina JOIN inayofanya kazi na inaeleza safu wima inayooanisha." },
      { name: "Matokeo na mstari wa CV", objective: "O6", notYet: "Matokeo hayana namba, au hakuna kikomo wala hatua inayofuata.", meets: "Matokeo matatu yenye namba, kikomo kimoja, hatua moja inayofuata na mstari mmoja wa CV.", exceeds: "Meneja angeweza kuifanyia kazi ndani ya dakika moja, na chati au jedwali lina maandishi yaliyo wazi." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaoongeza mradi kwenye CV au portfolio ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi wanaoomba au kuanza kazi ya data, ripoti au uchambuzi, au wanaotumia ujuzi huu kazini, ndani ya miezi 6",
      "Wanafunzi wanaojiandikisha au kufaulu CompTIA Data+ au cheti kingine cha data ndani ya miezi 6"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta yenye kivinjari cha wavuti (skrini ya simu ni ndogo mno kwa mazoezi ya SQL)",
      "Akaunti ya Google ya bure kwa Google Sheets, au Excel kama inapatikana",
      "Kihariri cha SQL cha bure: SQLite Online kwenye kivinjari, au DB Browser for SQLite iliyosakinishwa",
      "Kama dakika 90 kwa masomo, pamoja na saa 1 hadi 2 kwa mradi wa mwisho"
    ],
    facilitatorNotes: [
      "Kabla ya kipindi, fungua kihariri cha SQL kwenye kompyuta za maabara na ukague kama kinafunguka; baadhi ya mitandao inazuia tovuti.",
      "Wape wanafunzi jedwali la mazoezi kama faili au karatasi iliyochapishwa ili kuokoa muda wa kuandika; kuandika chenyewe pia ni mazoezi mazuri.",
      "Wapange wanafunzi wawili wawili kwa Masomo 4 na 5: mmoja anaandika query, mwingine anakagua matokeo kwa mkono, kisha wanabadilishana.",
      "Sisitiza kanuni ya faragha: data ya kubuni au ya umma tu katika zana za mtandaoni na portfolio.",
      "Wanafunzi wakitaka cheti, waelekeze kwenye ukurasa rasmi wa CompTIA Data+; kozi hii inaandaa lakini haitoi cheti.",
      "Pima mradi wa mwisho kwa rubriki na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
