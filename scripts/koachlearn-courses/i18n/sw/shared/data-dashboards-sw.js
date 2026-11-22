"use strict";

// Koach Learn course (Swahili translation of shared/data-dashboards.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const PL300 = { name: "Microsoft Learn: Power BI Data Analyst Associate (mtihani PL-300)", url: "https://learn.microsoft.com/en-us/credentials/certifications/data-analyst-associate/" };
const DATAPLUS = { name: "CompTIA Data+ (mtihani DA0-002)", url: "https://www.comptia.org/certifications/data" };
const PBI_DESKTOP = { name: "Microsoft: Power BI Desktop (kupakua bure)", url: "https://www.microsoft.com/en-us/power-platform/products/power-bi/desktop" };
const DATA_STUDIO = { name: "Google Cloud: Msaada wa Data Studio (zamani Looker Studio)", url: "https://docs.cloud.google.com/looker/docs/studio" };
const DS_SHEETS = { name: "Google Cloud: Kuunganisha Data Studio na Google Sheets", url: "https://docs.cloud.google.com/looker/docs/studio/connect-to-google-sheets" };

module.exports = {
  id: "data-dashboards-sw",
  lang: "sw",
  translationOf: "data-dashboards",
  category: "Workforce Development",
  name: "Kutengeneza Dashibodi za Data (Power BI na Data Studio)",
  skills: "Kupanga dashibodi na namba zake muhimu, Kusafisha data kuwa jedwali nadhifu, Kuchagua chati inayofaa, Kutengeneza dashibodi ya ukurasa mmoja yenye vichujio, Kukagua na kushiriki dashibodi kwa usalama",
  outcome: "kupanga, kutengeneza, kukagua na kushiriki dashibodi ya ukurasa mmoja katika Power BI Desktop au Looker Studio (Data Studio) inayojibu swali moja la biashara lililo wazi kwa namba muhimu 3 hadi 5, chati zinazofaa na vichujio rahisi.",
  about: [
    "Biashara, mashirika yasiyo ya faida, hospitali na jeshi wote wanatumia dashibodi: skrini moja inayoonyesha namba ambazo watu wanahitaji ili kufanya uamuzi. Kuzitengeneza ni ujuzi muhimu kwa kazi za mchambuzi wa data, utoaji wa ripoti na uendeshaji. Kozi hii ni kwa wanaotafuta kazi, wanajeshi wastaafu, wamiliki wa biashara ndogo na yeyote aliyewahi kutumia spreadsheet (lahajedwali) na anataka hatua inayofuata.",
    "Utapanga dashibodi, utasafisha data ndogo ya mazoezi katika Google Sheets, utaipakia kwenye zana ya bure, utachagua chati zinazofaa, utaongeza kadi za namba muhimu na vichujio, utakagua kila namba na utaishiriki kwa usalama. Unaweza kutumia Power BI Desktop (programu ya bure ya Windows kutoka Microsoft) au Looker Studio, ambayo sasa Google inaiita Data Studio (bure kwenye kivinjari chochote cha wavuti).",
    "Kozi hii inakuandaa kwa kazi ya dashibodi na kwa sehemu za ripoti za mitihani miwili halisi: PL-300 ya Microsoft (Power BI Data Analyst Associate) na CompTIA Data+ (DA0-002). Haikupi cheti chochote kati ya hivyo. Angalia kurasa rasmi kwenye vyanzo ili ujue kila mtihani unahusu nini, jinsi ya kuupanga na unagharimu kiasi gani leo.",
    "Kila somo linachukua kama dakika tano, kisha kuna kazi ya \"Jaribu sasa\". Jaribio fupi la maswali 2 linafuata kila somo, jaribio la maarifa linamaliza kila sura, na mtihani wa maswali 20 unamaliza kozi. Data yote ya mazoezi ni ya kubuni."
  ],
  finalTask: "Tengeneza dashibodi ya ukurasa mmoja kwa ajili ya njia yako: tumia data ya mauzo ya mkate ya mazoezi kutoka kozi hii au data ndogo ya kubuni kutoka kazi unayoitaka (kwa mfano oda za ghala au ziara za kliniki). Andika swali la dashibodi na namba muhimu 3 hadi 5, safisha data kuwa jedwali nadhifu, tengeneza angalau kadi 3 za namba muhimu na chati 2 zinazofaa swali, ongeza kichujio cha tarehe na kichujio kingine kimoja, kagua jumla 3 dhidi ya data ya chanzo, kisha ishiriki au uihamishe pamoja na muhtasari wa sentensi 3 wa kile inachoonyesha. Ihifadhi kama kazi ya mfano (portfolio) unayoweza kuonyesha kwenye usaili wa kazi.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima wa aina mbalimbali: wanaotafuta kazi za data, ripoti au uendeshaji, wanajeshi wastaafu wanaohamia kazi za kiraia, wamiliki wa biashara ndogo, vijana, na watu wanaorudi nyumbani kutoka gerezani wanaojenga upya ujuzi wa kazi. Wengi wametumia spreadsheet; wachache wametengeneza dashibodi.",
    startingPoint: "Wanaweza kuingiza data kwenye spreadsheet, kuongeza jumla kwa SUM na kutengeneza chati rahisi (au wamesoma kozi \"Excel na Lahajedwali kwa Kazi\"). Hawajatumia Power BI wala Looker Studio. Baadhi hawana uhakika wa chati ipi itumike au kwa nini namba kwenye ripoti zinaweza kuwa si sahihi.",
    gap: "Waajiri wanataka watu wanaoweza kugeuza data ghafi kuwa ukurasa mmoja ulio wazi unaojibu swali la biashara na unaoweza kuaminiwa. Wanafunzi wanahitaji kupanga, kutengeneza, kukagua na kushiriki dashibodi, na kuonyesha moja kwenye usaili. Huu pia ni ujuzi wa ripoti unaopimwa katika PL-300 na CompTIA Data+.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; kila neno la data linaelezwa",
      "Vifaa: Power BI Desktop inahitaji kompyuta ya Windows; kwenye Mac, Chromebook au kompyuta ya maktaba, tumia Data Studio kwenye kivinjari",
      "Zana za bure tu: Google Sheets, Power BI Desktop, Data Studio (Looker Studio)",
      "Muda: masomo ya dakika 5 hadi 6 yanayoingia kati ya kazi na utafutaji wa kazi",
      "Faragha: data ya mazoezi ni ya kubuni; usipakie kamwe data halisi ya wateja, wagonjwa au wafanyakazi kwa mazoezi"
    ],
    prerequisites: "Matumizi ya msingi ya spreadsheet: kuingiza data, SUM, kupanga (sort) na chati rahisi. Kama hayo ni mapya kwako, soma kwanza kozi \"Excel na Lahajedwali kwa Kazi\"."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa hitaji la biashara kama \"Bidhaa zipi zinauzwa zaidi?\"", action: "kuandika swali la dashibodi la sentensi moja, kutaja hadhira na kuchagua namba muhimu 3 hadi 5 (KPI)", standard: "kila namba muhimu ikiwa na jina lake, jinsi inavyohesabiwa na kipindi chake cha muda" },
    { id: "O2", condition: "Ukipewa jedwali la mauzo la mazoezi lenye fujo", action: "kusafisha data kuwa jedwali nadhifu lenye safu mlalo moja kwa kila rekodi na safu wima moja kwa kila sehemu", standard: "bila vichwa vitupu, bila safu mlalo zinazojirudia na muundo mmoja kwa kila safu wima" },
    { id: "O3", condition: "Ukipewa swali kuhusu mwenendo, ulinganisho au sehemu ya jumla", action: "kuchagua na kutengeneza aina ya chati inayofaa swali katika Power BI Desktop au Data Studio", standard: "ukipata angalau chaguo 4 kati ya 5 za chati sahihi" },
    { id: "O4", condition: "Ukitumia data yako iliyosafishwa katika Power BI Desktop au Data Studio", action: "kutengeneza dashibodi ya ukurasa mmoja yenye kadi za namba muhimu, angalau chati 2, kichujio cha tarehe na kichujio kingine kimoja", standard: "ili mtazamaji aweze kujibu swali la dashibodi kwa chini ya dakika moja" },
    { id: "O5", condition: "Ukipewa dashibodi iliyokamilika na data yake ya chanzo", action: "kukagua angalau jumla 3 kwenye dashibodi dhidi ya data ya chanzo na kurekebisha zozote zisizolingana", standard: "kabla mtu mwingine yeyote hajaiona" },
    { id: "O6", condition: "Dashibodi yako ikiwa tayari", action: "kushiriki au kuhamisha dashibodi kwa ruhusa ya kutazama tu na kuandika muhtasari wa sentensi 3 wa kile inachoonyesha", standard: "bila kushiriki data yoyote ya binafsi" }
  ],
  chapters: [
    {
      name: "Sura 1: Kupanga dashibodi na kuandaa data",
      lessons: [
        {
          title: "Kuanza na swali na namba muhimu",
          objectives: ["O1"],
          minutes: 5,
          goal: "Andika swali la dashibodi, taja hadhira yake na uchague namba muhimu 3 hadi 5.",
          text: [
            "Dashibodi ni skrini moja ya namba na chati inayomsaidia mtu kufanya uamuzi. Dashibodi nzuri inaanza na swali, si na chati. Uliza: nani ataiangalia, na anahitaji kuamua nini?",
            "Mfano: mmiliki wa duka dogo la mikate anauliza, \"Bidhaa zipi na siku zipi zinaleta pesa nyingi zaidi kila mwezi?\" Hadhira ni mmiliki. Uamuzi ni nini aoke zaidi na lini apange wafanyakazi.",
            "Kisha chagua namba muhimu 3 hadi 5, zinazoitwa KPI. Kwa duka la mikate: jumla ya mauzo kwa dola, idadi ya bidhaa zilizouzwa, wastani wa mauzo kwa kila oda, na bidhaa inayouzwa zaidi. Andika jinsi kila moja inavyohesabiwa na kwa kipindi gani, kwa mfano \"Jumla ya mauzo = jumla ya safu wima ya Total, mwezi huu\".",
            "Namba nyingi mno zinaficha zile muhimu. Kama namba haisaidii kujibu swali, iache nje."
          ],
          steps: ["Taja hadhira: nani atatumia dashibodi?", "Andika swali kwa sentensi moja.", "Taja uamuzi ambao swali linawasaidia kufanya.", "Chagua namba muhimu 3 hadi 5 zinazolijibu.", "Kwa kila moja, andika jina lake, jinsi inavyohesabiwa na kipindi chake cha muda."],
          words: [["Dashibodi (dashboard)", "skrini moja ya namba muhimu na chati inayomsaidia mtu kufanya uamuzi."], ["KPI (key performance indicator, kiashiria kikuu cha utendaji)", "moja ya namba chache zinazoonyesha kama mambo yanaenda vizuri, kama jumla ya mauzo mwezi huu."], ["Hadhira", "watu watakaoangalia dashibodi."], ["Kipimo (metric)", "namba yoyote unayopima, kama bidhaa zilizouzwa au wastani wa mauzo."]],
          slides: [
            { title: "Anza na swali, si na chati", bullets: ["Nani ataiangalia?", "Anahitaji kuamua nini?", "Andika swali kwa sentensi moja"] },
            { title: "Mfano: duka dogo la mikate", bullets: ["Swali: bidhaa na siku zipi zinaleta pesa nyingi zaidi?", "Hadhira: mmiliki", "Uamuzi: aoke nini na apange wafanyakazi lini"] },
            { title: "Chagua namba muhimu 3 hadi 5 (KPI)", bullets: ["Jumla ya mauzo, bidhaa zilizouzwa, wastani wa mauzo, inayouzwa zaidi", "Andika jinsi kila moja inavyohesabiwa", "Andika kipindi cha muda: mwezi huu, wiki hii"] },
            { title: "Kidogo ni bora", bullets: ["Namba nyingi mno zinaficha zile muhimu", "Kama haijibu swali, iache nje"] }
          ],
          tryIt: "Chagua kazi unayoitaka (kwa mfano ghala, mapokezi ya kliniki, meneja wa duka au mfano wa duka la mikate). Kwenye karatasi, andika hadhira, swali la sentensi moja, uamuzi, na namba muhimu 3 hadi 5 pamoja na jinsi kila moja inavyohesabiwa na kipindi cha muda. Hifadhi ukurasa huu: ni mpango wa dashibodi yako ya mwisho.",
          youCanNow: "kuandika swali la dashibodi kwa hadhira halisi na kuchagua namba muhimu 3 hadi 5 zinazolijibu.",
          quickCheck: [
            { objective: "O1", q: "Unapaswa kufanya nini KWANZA unapotengeneza dashibodi?", options: ["Kuandika swali na ni kwa ajili ya nani", "Kuchagua rangi za chati", "Kuongeza kila chati ambayo zana inatoa", "Kuchagua aina ya herufi"], answer: 0, why: "Swali na hadhira ndivyo vinavyoamua namba na chati zipi ziwe kwenye ukurasa." },
            { objective: "O1", q: "Ipi ni namba muhimu bora kwa swali \"Bidhaa zipi zinaleta pesa nyingi zaidi kila mwezi?\"", options: ["Idadi ya wafanyakazi", "Anwani ya mtaa wa duka la mikate", "Jumla ya mauzo kwa dola kwa kila bidhaa, mwezi huu", "Hali ya hewa kila siku"], answer: 2, why: "Mauzo kwa kila bidhaa kwa mwezi yanajibu swali moja kwa moja." }
          ],
          sources: [PL300, DATAPLUS]
        },
        {
          title: "Kusafisha data kuwa jedwali nadhifu",
          objectives: ["O2"],
          minutes: 6,
          goal: "Safisha jedwali lenye fujo liwe jedwali nadhifu lenye safu mlalo moja kwa kila rekodi na safu wima moja kwa kila sehemu.",
          text: [
            "Zana za dashibodi zinafanya kazi vizuri zaidi na jedwali nadhifu: safu mlalo moja ya vichwa, safu mlalo moja kwa kila rekodi (kila mauzo, kila oda) na safu wima moja kwa kila sehemu (Date, Product, Units). Hakuna seli zilizounganishwa, hakuna safu mlalo tupu, hakuna jumla zilizoandikwa ndani ya data.",
            "Data yenye fujo inatoa namba zisizo sahihi. Matatizo ya kawaida: mauzo yale yale yameandikwa mara mbili (kujirudia), seli tupu, tarehe zilizoandikwa kwa njia tofauti (10/3/26 na Oct 3), namba zilizohifadhiwa kama maandishi (\"$4.50\" iliyoandikwa na nafasi), na tofauti za tahajia (\"Muffin\" na \"muffins\").",
            "Katika Google Sheets unaweza kurekebisha mengi ya haya: Data > Data cleanup > Remove duplicates, Format > Number kuweka tarehe na sarafu, na Edit > Find and replace kurekebisha tahajia. Hifadhi jedwali la asili na usafishe nakala, ili uweze kurudi nyuma kila wakati.",
            "Data ya mazoezi ya kozi hii (ya kubuni): safu wima Date, Product, Category, Units, Price, Total. Kwa mfano 10/1/2026, Muffin, Pastry, 12, 2.50, 30.00."
          ],
          steps: ["Tengeneza nakala ya jedwali na ufanyie kazi nakala hiyo.", "Hakikisha kuna safu mlalo moja tu ya vichwa yenye jina wazi katika kila safu wima.", "Ondoa safu mlalo tupu, seli zilizounganishwa na safu mlalo zozote za jumla ndani ya data.", "Ondoa safu mlalo zinazojirudia.", "Ipe kila safu wima muundo mmoja: tarehe kama tarehe, pesa kama sarafu, maandishi yaliyoandikwa kwa tahajia ile ile.", "Kagua safu mlalo moja kwa mkono: Units mara Price inapaswa kulingana na Total."],
          words: [["Jedwali nadhifu", "data yenye safu mlalo moja ya vichwa, safu mlalo moja kwa kila rekodi na safu wima moja kwa kila sehemu."], ["Rekodi", "safu mlalo moja ya data, kama mauzo moja."], ["Sehemu (field)", "safu wima moja ya data, kama Date au Product."], ["Kujirudia (duplicate)", "rekodi ile ile iliyoandikwa mara mbili."], ["Aina ya data", "aina ya thamani iliyo kwenye safu wima: namba, tarehe, sarafu au maandishi."]],
          slides: [
            { title: "Jedwali nadhifu", bullets: ["Safu mlalo moja ya vichwa", "Safu mlalo moja kwa kila rekodi, safu wima moja kwa kila sehemu", "Hakuna seli zilizounganishwa, safu tupu au jumla zilizoandikwa"] },
            { title: "Fujo za kawaida", bullets: ["Safu mlalo zinazojirudia", "Tarehe zilizoandikwa kwa njia tofauti", "Namba zilizohifadhiwa kama maandishi", "Tahajia tofauti za kitu kile kile"] },
            { title: "Marekebisho katika Google Sheets", bullets: ["Data > Data cleanup > Remove duplicates", "Format > Number kwa tarehe na sarafu", "Edit > Find and replace kwa tahajia"] },
            { title: "Fanya kazi kwa usalama", bullets: ["Safisha nakala, hifadhi ya asili", "Kagua safu mlalo moja kwa mkono: Units x Price = Total"] }
          ],
          tryIt: "Katika Google Sheets, andika safu mlalo 15 za mauzo ya kubuni ya duka la mikate (Date, Product, Category, Units, Price, Total) kwa wiki mbili. Kwa makusudi, ongeza safu mlalo 1 inayojirudia, safu mlalo 1 tupu, tarehe 1 iliyoandikwa kama maandishi (Oct 5) na tofauti 1 ya tahajia (\"muffins\"). Kisha tengeneza nakala na uisafishe kwa hatua hizi. Hesabu ni matatizo mangapi uliyorekebisha.",
          youCanNow: "kutambua na kurekebisha kujirudia, seli tupu, miundo mchanganyiko na tofauti za tahajia ili kupata jedwali nadhifu.",
          quickCheck: [
            { objective: "O2", q: "Jedwali lako linaonyesha \"Muffin\" na \"muffins\" kama bidhaa mbili. Unafanya nini?", options: ["Kuliacha; zana itakisia", "Kufuta safu zote za muffin", "Kuongeza tahajia ya tatu", "Kutumia Find and replace ili kila safu iseme \"Muffin\""], answer: 3, why: "Tahajia moja kwa kila bidhaa inamaanisha zana inazijumlisha pamoja kwa usahihi." },
            { objective: "O2", q: "Kipi kinaelezea jedwali nadhifu?", options: ["Seli za kichwa zilizounganishwa juu ya data", "Safu mlalo moja ya vichwa, safu mlalo moja kwa kila rekodi, safu wima moja kwa kila sehemu", "Safu mlalo ya jumla katikati ya data", "Safu mlalo mbili za vichwa zenye seli tupu"], answer: 1, why: "Zana za dashibodi zinasoma majedwali nadhifu kwa usahihi; seli zilizounganishwa na jumla zilizoandikwa zinazichanganya." }
          ],
          sources: [{ name: "Google Docs Editors Help: Kugawanya maandishi, kuondoa kujirudia au kupunguza nafasi", url: "https://support.google.com/docs/answer/6325535" }]
        },
        {
          title: "Kupakia data kwenye Power BI Desktop au Data Studio",
          objectives: ["O2"],
          minutes: 6,
          goal: "Pakia jedwali nadhifu kwenye Power BI Desktop au Data Studio na ukague aina ya data ya kila safu wima.",
          text: [
            "Chagua zana yako. Power BI Desktop ni bure kutoka Microsoft na inafanya kazi kwenye kompyuta ya Windows. Looker Studio, ambayo sasa Google inaiita Data Studio, ni bure na inafanya kazi kwenye kivinjari cha wavuti, kwa hiyo inafanya kazi kwenye Mac, Chromebook au kompyuta ya maktaba. Zote mbili zinatumika katika kazi halisi; ujuzi unahamia kutoka moja hadi nyingine.",
            "Power BI Desktop: ipakue tu kutoka tovuti rasmi ya Microsoft. Hifadhi jedwali lako safi kama faili ya Excel au CSV. Chagua Get data, chagua faili, na uangalie onyesho la awali. Chagua Transform data kama safu wima inahitaji kurekebishwa; hii inafungua Power Query Editor, ambapo unaweza kuweka aina ya data ya safu wima.",
            "Data Studio: ingia kwa akaunti ya Google, chagua Create, kisha Data source, chagua kiunganishi cha Google Sheets, chagua spreadsheet yako na karatasi ya kazi (worksheet), na uchague Connect. Utaona sehemu zako zimeorodheshwa pamoja na aina zao.",
            "Katika zana zote mbili, kagua kila safu wima: Date iwe tarehe, Units na Total ziwe namba, Product iwe maandishi. Namba iliyohifadhiwa kama maandishi haiwezi kujumlishwa. Sehemu unazohesabu au kujumlisha (Units, Total) mara nyingi zinaitwa measures au metrics; sehemu unazopanga kwa makundi (Product, Date) zinaitwa dimensions."
          ],
          steps: ["Chagua Power BI Desktop (Windows) au Data Studio (kivinjari chochote).", "Power BI: Get data, chagua faili yako ya Excel au CSV, angalia onyesho la awali, chagua Load au Transform data.", "Data Studio: Create, Data source, kiunganishi cha Google Sheets, chagua jedwali, Connect.", "Kagua aina ya kila safu wima: tarehe, namba, maandishi.", "Rekebisha aina yoyote isiyo sahihi kabla ya kutengeneza chati."],
          words: [["Power BI Desktop", "programu ya bure ya Microsoft kwa Windows inayotengeneza ripoti na dashibodi."], ["Data Studio (Looker Studio)", "zana ya bure ya Google kwenye kivinjari kwa ripoti na dashibodi; Google ilibadilisha jina la Looker Studio kuwa Data Studio."], ["Chanzo cha data (data source)", "faili au jedwali ambalo dashibodi inasoma data yake kutoka humo."], ["Power Query Editor", "sehemu ya Power BI ambapo unasafisha na kupanga data kabla ya kutengeneza michoro."], ["Dimension", "sehemu unayopanga kwa makundi, kama Product au Date."], ["Measure (metric)", "namba unayojumlisha, kuhesabu au kutafutia wastani, kama jumla ya mauzo."], ["Faili ya CSV", "faili ya maandishi ya kawaida yenye data ambayo thamani zake zimetenganishwa kwa koma."]],
          slides: [
            { title: "Zana mbili za bure", bullets: ["Power BI Desktop: bure, Windows", "Data Studio (zamani Looker Studio): bure, kivinjari chochote cha wavuti", "Ujuzi unahamia kutoka moja hadi nyingine"] },
            { title: "Power BI Desktop", bullets: ["Get data, chagua faili yako ya Excel au CSV", "Angalia onyesho la awali", "Transform data inafungua Power Query Editor"] },
            { title: "Data Studio", bullets: ["Create, kisha Data source", "Kiunganishi cha Google Sheets, chagua jedwali", "Connect, kisha kagua orodha ya sehemu"] },
            { title: "Kagua kila aina ya data", bullets: ["Tarehe kama tarehe, namba kama namba", "Measures: vitu unavyojumlisha, kama Total", "Dimensions: vitu unavyopanga kwa makundi, kama Product"] }
          ],
          tryIt: "Pakia jedwali lako safi la duka la mikate kwenye Power BI Desktop au Data Studio. Andika kila safu wima na aina yake ya data. Kama namba yoyote inaonekana kama maandishi, irekebishe kwenye zana au kwenye jedwali, kisha upakie tena. Kisha taja sehemu zipi ni dimensions na zipi ni measures.",
          youCanNow: "kupakia jedwali nadhifu kwenye Power BI Desktop au Data Studio na kuhakikisha kila safu wima ina aina sahihi ya data.",
          quickCheck: [
            { objective: "O2", q: "Safu wima yako ya Total imepakiwa kama maandishi. Nini kinatokea ukiiacha?", options: ["Zana haiwezi kujumlisha jumla kwa usahihi", "Hakuna; maandishi na namba zinafanya kazi sawa", "Dashibodi inapata rangi zaidi", "Faili inakuwa ndogo zaidi"], answer: 0, why: "Safu wima za namba tu ndizo zinazoweza kujumlishwa au kutafutiwa wastani." },
            { objective: "O2", q: "Una Chromebook tu. Unaweza kutumia zana ipi kwa kozi hii?", options: ["Power BI Desktop", "Hakuna zana itakayofanya kazi", "Data Studio kwenye kivinjari cha wavuti", "Karatasi tu"], answer: 2, why: "Data Studio inafanya kazi kwenye kivinjari; Power BI Desktop inahitaji Windows." }
          ],
          sources: [PBI_DESKTOP, DATA_STUDIO, DS_SHEETS]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kupanga dashibodi na kuandaa data",
        questions: [
          { objective: "O1", q: "Meneja wa duka anataka kujua ni siku ipi ya wiki inahitaji wafanyakazi zaidi. Namba muhimu ipi inasaidia zaidi?", options: ["Namba ya simu ya duka", "Idadi ya bidhaa kwenye orodha", "Idadi ya wateja kwa kila siku ya wiki", "Tarehe meneja alipoanza kazi"], answer: 2, why: "Wateja kwa kila siku wanaonyesha moja kwa moja siku zipi zina shughuli nyingi zaidi." },
          { objective: "O1", q: "Dashibodi ya ukurasa mmoja kwa kawaida inapaswa kuonyesha namba muhimu ngapi?", options: ["3 hadi 5", "1 tu", "Nyingi kadiri iwezekanavyo", "Angalau 20"], answer: 0, why: "Namba muhimu chache zinafanya zile muhimu zionekane kwa urahisi." },
          { objective: "O2", q: "Tatizo lipi lingefanya jumla ya mauzo iwe kubwa kupita kiasi?", options: ["Safu mlalo ya vichwa iliyo wazi", "Tarehe zenye muundo wa tarehe", "Tahajia moja kwa kila bidhaa", "Mauzo yale yale yameandikwa mara mbili"], answer: 3, why: "Safu mlalo inayojirudia inahesabu mauzo yale yale mara mbili." },
          { objective: "O2", q: "Kabla ya kusafisha jedwali, unapaswa kufanya nini?", options: ["Kufuta safu mlalo ya vichwa", "Kutengeneza nakala na kusafisha nakala hiyo", "Kuunganisha seli zote", "Kuandika jumla ndani ya data"], answer: 1, why: "Kuhifadhi la asili kunakuwezesha kurudi nyuma kama rekebisho likienda vibaya." },
          { objective: "O2", q: "Product na Date ni sehemu unazopanga kwa makundi. Zinaitwaje?", options: ["Measures", "Nywila", "Dimensions", "Vichujio"], answer: 2, why: "Dimensions ni sehemu unazopanga au kugawa kwa makundi; measures ni namba unazojumlisha au kutafutia wastani." }
        ]
      }
    },
    {
      name: "Sura 2: Kutengeneza, kukagua na kushiriki",
      lessons: [
        {
          title: "Kuchagua chati inayofaa",
          objectives: ["O3"],
          minutes: 6,
          goal: "Chagua na utengeneze chati inayofaa kila aina ya swali.",
          text: [
            "Linganisha chati na swali. Mabadiliko kwa muda (mauzo kwa siku au kwa mwezi) ni chati ya mstari. Ulinganisho kati ya makundi (mauzo kwa kila bidhaa) ni chati ya pau au ya nguzo, iliyopangwa kutoka kubwa hadi ndogo. Sehemu za jumla (sehemu ya mauzo kwa kila kundi) zinaweza kuwa chati ya duara au ya donati, lakini tu ikiwa na vipande vichache; chati ya pau mara nyingi iko wazi zaidi.",
            "Namba moja muhimu peke yake ni kadi (card) katika Power BI au scorecard katika Data Studio. Thamani kamili ambazo watu wanahitaji kuzitafuta ziwekwe kwenye jedwali. Ramani inasaidia tu pale mahali panapokuwa muhimu.",
            "Kutengeneza: katika Power BI Desktop, bofya mchoro kwenye kidirisha cha Visualizations, kisha buruta dimension (Product) na measure (Total) kwenye sehemu zake. Katika Data Studio, chagua Add a chart, chagua aina, kisha weka dimension na metric.",
            "Weka chati za kweli: chati za pau zianzie sifuri, kila chati iwe na kichwa wazi kinachosema inaonyesha nini (\"Mauzo kwa bidhaa, Oktoba\"), na tumia rangi moja isipokuwa rangi ina maana fulani."
          ],
          steps: ["Soma swali: linahusu muda, kulinganisha makundi, sehemu za jumla, au namba moja?", "Muda: chati ya mstari. Kulinganisha: chati ya pau, iliyopangwa. Sehemu: duara yenye vipande vichache, au pau. Namba moja: kadi au scorecard.", "Ongeza chati na uweke dimension na measure.", "Ipe kichwa kinachosema inaonyesha nini na kipindi cha muda.", "Hakikisha pau zinaanzia sifuri."],
          words: [["Chati ya mstari (line chart)", "chati inayoonyesha jinsi namba inavyobadilika kwa muda."], ["Chati ya pau (bar chart)", "chati ya pau zinazolinganisha makundi; chati za nguzo ni chati za pau zilizosimama."], ["Chati ya duara (pie chart)", "duara lililokatwa vipande linaloonyesha sehemu za jumla."], ["Kadi / scorecard", "kisanduku kinachoonyesha namba moja kubwa, kama jumla ya mauzo."], ["Visual (mchoro)", "neno la Power BI kwa chati, kadi, jedwali au ramani."]],
          slides: [
            { title: "Linganisha chati na swali", bullets: ["Kwa muda: chati ya mstari", "Kulinganisha makundi: chati ya pau, iliyopangwa", "Sehemu za jumla: vipande vichache, au pau", "Namba moja: kadi au scorecard"] },
            { title: "Itengeneze", bullets: ["Power BI: chagua visual, buruta sehemu ndani", "Data Studio: Add a chart, weka dimension na metric"] },
            { title: "Iweke ya kweli", bullets: ["Pau zinaanzia sifuri", "Kichwa kinasema inaonyesha nini na lini", "Rangi moja isipokuwa rangi ina maana"] }
          ],
          tryIt: "Ukitumia data yako ya duka la mikate, tengeneza chati tatu: (1) jumla ya mauzo kwa tarehe kama chati ya mstari, (2) jumla ya mauzo kwa bidhaa kama chati ya pau iliyopangwa kubwa kwanza, (3) jumla ya mauzo kama kadi moja au scorecard. Ipe kila moja kichwa kilicho wazi. Kisha andika sentensi moja kuhusu kile kila chati inakuambia.",
          youCanNow: "kuchagua chati ya mstari, pau, duara, kadi au jedwali kulingana na swali na kuitengeneza ikiwa na kichwa kilicho wazi.",
          quickCheck: [
            { objective: "O3", q: "Chati ipi inaonyesha vizuri zaidi jinsi mauzo yalivyobadilika kila siku mwezi huu?", options: ["Chati ya duara", "Ramani", "Kadi moja", "Chati ya mstari"], answer: 3, why: "Chati za mstari zinaonyesha mabadiliko kwa muda." },
            { objective: "O3", q: "Unataka kulinganisha mauzo ya bidhaa 8. Ipi iko wazi zaidi?", options: ["Chati ya duara yenye vipande 8", "Chati ya pau iliyopangwa kutoka kubwa hadi ndogo", "Ramani", "Jedwali la tarehe"], answer: 1, why: "Chati ya pau iliyopangwa inarahisisha kulinganisha; vipande 8 vya duara ni vigumu kusoma." }
          ],
          sources: [DATAPLUS, PL300]
        },
        {
          title: "Kupanga dashibodi kwa kadi na vichujio",
          objectives: ["O4"],
          minutes: 6,
          goal: "Tengeneza dashibodi ya ukurasa mmoja yenye kadi za namba muhimu, chati, kichujio cha tarehe na kichujio kingine kimoja.",
          text: [
            "Watu wanasoma skrini kuanzia juu kushoto. Weka kadi za namba muhimu katika mstari mmoja juu, chati muhimu zaidi chini yake, na maelezo zaidi chini kabisa. Ongeza kichwa cha ukurasa mzima na kipindi cha tarehe kinachohusika.",
            "Vichujio vinawaruhusu watazamaji kubadilisha wanachokiona. Katika Power BI vinaitwa slicers: ongeza visual ya Slicer na uweke Date ndani yake, kisha ongeza nyingine kwa Category. Katika Data Studio vinaitwa controls: chagua Add a control, chagua Date range control, kisha ongeza Drop-down list control kwa Category.",
            "Jaribu vichujio: chagua kundi moja na uhakikishe kila kadi na chati inabadilika. Kama moja haibadiliki, haijaunganishwa na data ile ile.",
            "Acha nafasi tupu, panga vitu kwa mstari, na uondoe chochote kisichosaidia kujibu swali. Kisha fanya jaribio la dakika moja: mwonyeshe rafiki ukurasa na umuulize swali la dashibodi. Anaweza kulijibu kwa chini ya dakika moja?"
          ],
          steps: ["Ongeza kichwa cha ukurasa na kipindi cha tarehe.", "Weka kadi 3 hadi 5 za namba muhimu katika mstari mmoja juu.", "Weka chati kuu chini ya kadi na chati nyingine chini zaidi.", "Ongeza kichujio cha tarehe (slicer au date range control).", "Ongeza kichujio kingine kimoja, kama Category.", "Jaribu: badilisha kila kichujio na uangalie kila kadi na chati ikibadilika.", "Fanya jaribio la dakika moja na mtu mwingine."],
          words: [["Mpangilio (layout)", "mahali kila kadi na chati inapokaa kwenye ukurasa."], ["Kichujio (filter)", "kidhibiti kinachomruhusu mtazamaji kuonyesha sehemu tu ya data, kama mwezi mmoja."], ["Slicer", "jina la Power BI kwa kichujio kilicho kwenye ukurasa."], ["Control", "jina la Data Studio kwa kichujio kilicho kwenye ukurasa, kama date range control."]],
          slides: [
            { title: "Mpangilio", bullets: ["Kadi za namba muhimu juu, kwa mstari", "Chati kuu chini yake, maelezo chini zaidi", "Kichwa cha ukurasa pamoja na kipindi cha tarehe"] },
            { title: "Vichujio", bullets: ["Power BI: visual ya Slicer kwa Date na Category", "Data Studio: Date range control na Drop-down list"] },
            { title: "Ijaribu", bullets: ["Badilisha kichujio: kila kitu kinabadilika?", "Ondoa chochote kisichosaidia", "Jaribio la dakika moja na rafiki"] }
          ],
          tryIt: "Weka chati zako tatu kutoka Somo la 4 kwenye ukurasa mmoja. Ongeza angalau kadi moja zaidi ya namba muhimu (kwa mfano bidhaa zilizouzwa au wastani wa mauzo), kichujio cha tarehe na kichujio cha Category. Panga kila kitu kwa mstari. Kisha muulize mtu swali lako la dashibodi na upime anachukua muda gani kulijibu kutoka kwenye ukurasa.",
          youCanNow: "kupanga dashibodi ya ukurasa mmoja yenye kadi za namba muhimu, chati na vichujio vinavyofanya kazi ambavyo mtu anaweza kusoma kwa chini ya dakika moja.",
          quickCheck: [
            { objective: "O4", q: "Kadi za namba muhimu kwa kawaida zinapaswa kukaa wapi?", options: ["Katika mstari mmoja juu", "Zimefichwa kwenye ukurasa wa pili", "Chini kabisa", "Ndani ya chati ya duara"], answer: 0, why: "Watu wanasoma kuanzia juu kushoto, kwa hiyo namba muhimu zinakuja kwanza." },
            { objective: "O4", q: "Unachagua kundi moja kwenye kichujio, lakini chati moja haibadiliki. Hiyo inamaanisha nini?", options: ["Dashibodi imekamilika", "Chati hiyo haijaunganishwa na data au kichujio kile kile", "Vichujio havibadilishi chati kamwe", "Unahitaji skrini kubwa zaidi"], answer: 1, why: "Kila kadi na chati inapaswa kuitikia; ile isiyoitikia inahitaji kurekebishwa." }
          ],
          sources: [PBI_DESKTOP, DATA_STUDIO]
        },
        {
          title: "Kukagua namba na kushiriki kwa usalama",
          objectives: ["O5", "O6"],
          minutes: 6,
          goal: "Kagua jumla 3 za dashibodi dhidi ya data ya chanzo, kisha ishiriki kwa kutazama tu pamoja na muhtasari mfupi.",
          text: [
            "Dashibodi ina manufaa tu kama inaweza kuaminiwa. Kabla mtu yeyote hajaiona, kagua angalau namba 3. Mfano: kadi inasema jumla ya mauzo ilikuwa $1,240. Kwenye jedwali lako, tumia SUM kwenye safu wima ya Total kwa tarehe zile zile. Zinalingana? Kisha kagua bidhaa moja na siku moja kwa njia ile ile.",
            "Kama namba hailingani, tafuta sababu za kawaida: kichujio bado kimewekwa, kujirudia kumerudi, safu wima ni maandishi badala ya namba, kipindi cha tarehe ni tofauti, au kadi inatumia Count badala ya Sum.",
            "Shiriki kwa usalama. Katika Data Studio, tumia kitufe cha Share na uwape watu ruhusa ya kutazama (view), si ya kuhariri (edit). Kwa Power BI Desktop, hamisha ukurasa kuwa PDF au hifadhi faili na umtumie mtu sahihi tu; kuchapisha mtandaoni kunaweza kuhitaji akaunti ya kazini au ya shule. Usiweke kamwe taarifa halisi za wateja, wagonjwa au wafanyakazi kwenye dashibodi ya mazoezi.",
            "Ongeza muhtasari wa sentensi 3: dashibodi inaonyesha nini, jambo muhimu zaidi uliloligundua, na hatua moja inayopendekezwa. Mfano: \"Hii inaonyesha mauzo ya duka la mikate kwa Oktoba. Muffin zilileta pesa nyingi zaidi, na Jumamosi zilikuwa siku zenye shughuli nyingi zaidi. Tunaweza kuoka muffin zaidi na kuongeza mfanyakazi mmoja siku za Jumamosi.\""
          ],
          steps: ["Ondoa vichujio vyote.", "Kagua namba 3 dhidi ya jedwali la chanzo: jumla, bidhaa moja na siku moja.", "Kama moja si sahihi, kagua vichujio, kujirudia, aina za data, tarehe, na Sum dhidi ya Count.", "Shiriki kwa ruhusa ya kutazama tu, au hamisha kuwa PDF.", "Andika muhtasari wa sentensi 3: inaonyesha nini, jambo kuu uliloligundua, hatua moja."],
          words: [["Kuthibitisha (validate)", "kukagua kuwa namba ni sahihi kwa kuilinganisha na chanzo."], ["Ruhusa ya kutazama tu (view-only)", "watu wanaweza kuangalia dashibodi lakini hawawezi kuibadilisha."], ["Kuhamisha (export)", "kuhifadhi nakala katika muundo mwingine, kama PDF."], ["Ufahamu (insight)", "jambo lenye manufaa uliloligundua linalomsaidia mtu kuamua la kufanya."]],
          slides: [
            { title: "Kagua kabla ya kushiriki", bullets: ["Ondoa vichujio", "Kagua namba 3 dhidi ya jedwali la chanzo", "Jumla, bidhaa moja, siku moja"] },
            { title: "Kama namba si sahihi", bullets: ["Kichujio bado kimewekwa", "Kujirudia au namba zilizo maandishi", "Tarehe tofauti, au Count badala ya Sum"] },
            { title: "Shiriki kwa usalama", bullets: ["Ruhusa ya kutazama tu, si kuhariri", "Au hamisha kuwa PDF", "Hakuna data halisi ya binafsi katika kazi ya mazoezi"] },
            { title: "Andika muhtasari wa sentensi 3", bullets: ["Inaonyesha nini", "Jambo kuu uliloligundua", "Hatua moja inayopendekezwa"] }
          ],
          tryIt: "Maliza kazi yako ya mwisho: kagua namba 3 kwenye dashibodi yako dhidi ya jedwali lako na uandike kila jozi. Rekebisha tofauti yoyote. Kisha ishiriki kwa kutazama tu (Data Studio) au hamisha PDF (Power BI), na uandike muhtasari wako wa sentensi 3. Jipime kwa rubriki kabla ya kusema umemaliza.",
          youCanNow: "kukagua namba za dashibodi dhidi ya chanzo chake, kuishiriki kwa usalama, na kueleza inachoonyesha kwa sentensi tatu.",
          quickCheck: [
            { objective: "O5", q: "Kadi yako inasema bidhaa 340 zimeuzwa, lakini SUM ya Units kwenye jedwali inasema 310. Unapaswa kukagua nini kwanza?", options: ["Rangi za chati", "Aina ya herufi ya kichwa cha ukurasa", "Kama kichujio kimewekwa au kujirudia kumerudi", "Mwangaza wa skrini"], answer: 2, why: "Vichujio na kujirudia ni sababu za kawaida za jumla zisizolingana." },
            { objective: "O6", q: "Meneja wako anahitaji tu kuangalia dashibodi. Unampa ruhusa gani?", options: ["Nywila yako", "Ruhusa ya kuhariri", "Ruhusa ya mmiliki", "Ruhusa ya kutazama tu"], answer: 3, why: "Kutazama tu kunamruhusu aione bila kuibadilisha kwa bahati mbaya." }
          ],
          sources: [DATA_STUDIO, DATAPLUS]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kutengeneza, kukagua na kushiriki",
        questions: [
          { objective: "O3", q: "Chati ipi inaonyesha namba MOJA kubwa, kama jumla ya mauzo mwezi huu?", options: ["Chati ya mstari", "Kadi au scorecard", "Ramani", "Jedwali la safu mlalo 100"], answer: 1, why: "Kadi (Power BI) au scorecard (Data Studio) inaonyesha namba moja muhimu." },
          { objective: "O3", q: "Pau za chati ya pau zinaanzia 900 badala ya 0. Tatizo ni nini?", options: ["Tofauti ndogo zinaonekana kubwa zaidi kuliko zilivyo", "Hakuna; inaonekana vizuri zaidi", "Rangi si sahihi", "Kichwa ni kirefu mno"], answer: 0, why: "Pau zisizoanzia sifuri zinakuza tofauti kupita kiasi." },
          { objective: "O4", q: "Katika Power BI, kichujio kilicho kwenye ukurasa kinaitwaje?", options: ["Kadi", "Chanzo", "Metric", "Slicer"], answer: 3, why: "Power BI inaita vichujio vya ukurasa slicers; Data Studio inaviita controls." },
          { objective: "O5", q: "Unapaswa kukagua namba ngapi dhidi ya chanzo kabla ya kushiriki?", options: ["Hakuna; zana iko sahihi kila wakati", "Kichwa cha ukurasa tu", "Angalau 3, kama jumla, bidhaa moja na siku moja", "Namba ambazo meneja wako anauliza tu"], answer: 2, why: "Kukagua namba kadhaa kunakamata makosa ya vichujio, kujirudia na aina za data." },
          { objective: "O6", q: "Sentensi ipi ni muhtasari bora wa kushiriki pamoja na dashibodi?", options: ["\"Hizi hapa ni chati kadhaa.\"", "\"Muffin zilileta pesa nyingi zaidi Oktoba, kwa hiyo tunaweza kuoka zaidi siku za Jumamosi.\"", "\"Nilitumia rangi nyingi.\"", "\"Iangalie mwenyewe.\""], answer: 1, why: "Muhtasari mzuri unataja jambo lililogunduliwa na hatua inayopendekezwa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kutengeneza Dashibodi za Data (Power BI na Data Studio)",
    questions: [
      { objective: "O1", q: "Dashibodi ni nini?", options: ["Orodha ya nywila", "Skrini moja ya namba muhimu na chati inayomsaidia mtu kuamua", "Aina ya fomula ya spreadsheet", "Mpangilio wa printa"], answer: 1, why: "Dashibodi inaweka namba muhimu za uamuzi kwenye skrini moja." },
      { objective: "O1", q: "Lipi ni swali la dashibodi lililo wazi?", options: ["\"Nionyeshe data.\"", "\"Ifanye ipendeze.\"", "\"Kila kitu kuhusu biashara.\"", "\"Bidhaa zipi zinaleta pesa nyingi zaidi kila mwezi?\""], answer: 3, why: "Ni swali moja mahususi ambalo dashibodi inaweza kulijibu." },
      { objective: "O1", q: "Kwa kila namba muhimu unaandika jina lake, jinsi inavyohesabiwa na:", options: ["Kipindi chake cha muda", "Rangi yake inayopendwa", "Bei ya zana", "Nywila yako"], answer: 0, why: "Namba muhimu inahitaji kipindi cha muda, kama mwezi huu, ili iwe na maana." },
      { objective: "O2", q: "Katika jedwali nadhifu, kila safu mlalo ni:", options: ["Chati", "Jumla", "Rekodi moja, kama mauzo moja", "Kichwa"], answer: 2, why: "Safu mlalo moja kwa kila rekodi na safu wima moja kwa kila sehemu ndiyo jedwali nadhifu." },
      { objective: "O2", q: "Tarehe kwenye jedwali lako zimeandikwa \"10/3/26\" na \"Oct 3\". Unafanya nini?", options: ["Kuziacha zote mbili", "Kufuta safu wima ya tarehe", "Kuongeza mtindo wa tatu", "Kuipa safu wima muundo ili kila tarehe iwe tarehe halisi kwa mtindo mmoja"], answer: 3, why: "Muundo mmoja wa tarehe unaiwezesha zana kupanga na kuchuja kwa tarehe kwa usahihi." },
      { objective: "O2", q: "Unapata Power BI Desktop wapi?", options: ["Tovuti rasmi ya Microsoft", "Kiungo kwenye ujumbe kutoka kwa mtu usiyemjua", "Tovuti yoyote ya kupakua bure", "Tangazo linalojitokeza (pop-up)"], answer: 0, why: "Pakua programu tu kutoka tovuti rasmi ya kampuni." },
      { objective: "O2", q: "Katika Data Studio, unaunganishaje Google Sheet?", options: ["Kutuma jedwali kwa Google kwa barua pepe", "Kutengeneza data source kwa kiunganishi cha Google Sheets", "Kulichapisha na kulichanganua (scan)", "Kuandika kila namba upya"], answer: 1, why: "Kiunganishi cha Google Sheets kinaunganisha jedwali kama chanzo cha data." },
      { objective: "O3", q: "Swali lipi linafaa chati ya mstari?", options: ["Mkate ni sehemu gani ya mauzo?", "Namba yetu ya simu ni ipi?", "Mauzo ya kila wiki yalibadilikaje kwa miezi 3?", "Duka lipi liko mji upi?"], answer: 2, why: "Chati za mstari zinaonyesha mabadiliko kwa muda." },
      { objective: "O3", q: "Swali lipi linafaa chati ya pau iliyopangwa?", options: ["Ni ipi kati ya bidhaa zetu 6 iliuzwa zaidi?", "Jumla ya mauzo leo ni kiasi gani?", "Duka linafunguliwa saa ngapi?", "Mauzo yalibadilikaje kila saa?"], answer: 0, why: "Chati za pau zinalinganisha makundi; kuzipanga kunafanya kubwa zaidi ionekane kwa urahisi." },
      { objective: "O3", q: "Chati ya duara ni chaguo linalofaa lini?", options: ["Kuonyesha mabadiliko kwa miezi 12", "Kuonyesha sehemu ya jumla ikiwa na vipande vichache tu", "Kulinganisha bidhaa 15", "Kuonyesha namba moja"], answer: 1, why: "Duara zinaonyesha sehemu za jumla na zinasomeka tu zikiwa na vipande vichache." },
      { objective: "O3", q: "Kichwa kizuri cha chati:", options: ["Kinasema \"Chati 1\"", "Kinaachwa wazi", "Kiko kwa herufi ndogo sana", "Kinasema inaonyesha nini na kipindi cha muda"], answer: 3, why: "\"Mauzo kwa bidhaa, Oktoba\" kinamwambia mtazamaji hasa anachokiona." },
      { objective: "O4", q: "Katika Data Studio, kichujio kilicho kwenye ukurasa kinaitwa:", options: ["Slicer", "Aina ya data", "Control", "Measure"], answer: 2, why: "Data Studio inaita vichujio vya ukurasa controls, kama date range control." },
      { objective: "O4", q: "Jaribio la dakika moja ni nini?", options: ["Kumuuliza mtu swali la dashibodi na kuona kama anaweza kulijibu kutoka kwenye ukurasa kwa chini ya dakika moja", "Kutengeneza dashibodi kwa dakika moja", "Kuonyesha ukurasa kwa sekunde moja", "Kuwasha upya kompyuta"], answer: 0, why: "Kama mtazamaji anaweza kujibu haraka, mpangilio unafanya kazi." },
      { objective: "O4", q: "Unabadilisha kichujio cha Category na kila kadi na chati inabadilika. Hii inaonyesha:", options: ["Data si sahihi", "Vichujio vinafanya kazi kwenye ukurasa mzima", "Dashibodi inahitaji kurasa zaidi", "Rangi zimeharibika"], answer: 1, why: "Kila kitu kubadilika pamoja kunamaanisha kichujio kimeunganishwa na michoro yote." },
      { objective: "O5", q: "Jumla ya dashibodi ni $1,240 na SUM kwenye jedwali kwa tarehe zile zile ni $1,240. Hii inamaanisha:", options: ["Jumla imekaguliwa na inalingana", "Dashibodi si sahihi", "Unapaswa kufuta jedwali", "Unahitaji zana mpya"], answer: 0, why: "Kulingana na chanzo ndiyo njia ya kuthibitisha namba." },
      { objective: "O5", q: "Kadi inaonyesha 52 wakati ulitarajia jumla ya mauzo ya $1,240. Sababu inayowezekana ni:", options: ["Kichwa cha ukurasa", "Rangi za pau", "Kadi imewekwa kwenye Count badala ya Sum", "Ukubwa wa herufi"], answer: 2, why: "Count inatoa idadi ya safu mlalo, si jumla ya thamani." },
      { objective: "O5", q: "Unapaswa kukagua namba lini?", options: ["Kamwe", "Baada tu ya bosi kugundua kosa", "Mara moja kwa mwaka tu", "Kabla mtu mwingine yeyote hajaiona dashibodi"], answer: 3, why: "Kukagua kwanza kunazuia namba zisizo sahihi kusababisha maamuzi yasiyo sahihi." },
      { objective: "O6", q: "Kipi KAMWE hakipaswi kuwekwa kwenye dashibodi ya mazoezi?", options: ["Mauzo ya kubuni ya duka la mikate", "Majina na namba za simu za wateja halisi", "Makundi ya bidhaa", "Tarehe"], answer: 1, why: "Data ya mazoezi inabaki ya kubuni; data halisi ya binafsi lazima ilindwe." },
      { objective: "O6", q: "Kozi hii inakupa nini?", options: ["Cheti cha PL-300", "Cheti cha CompTIA Data+", "Leseni ya udereva", "Maandalizi na dashibodi ya mfano (portfolio); mitihani inafanywa kando"], answer: 3, why: "Kozi inakuandaa; Microsoft na CompTIA wanatoa vyeti vyao baada ya mitihani yao wenyewe." },
      { objective: "O6", q: "Muhtasari mzuri wa sentensi 3 una kile dashibodi inachoonyesha, jambo kuu lililogunduliwa na:", options: ["Hatua moja inayopendekezwa", "Anwani ya nyumbani kwako", "Historia ya zana", "Orodha ya kila safu mlalo"], answer: 0, why: "Hatua inageuza jambo lililogunduliwa kuwa uamuzi." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 2, 3, 6, 7, 9, 11, 15, 17] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na uikague tena.",
    criteria: [
      { name: "Swali na namba muhimu", objective: "O1", notYet: "Hakuna swali lililo wazi, au namba zaidi ya 5 bila kipindi cha muda.", meets: "Swali la sentensi moja, hadhira imetajwa, namba muhimu 3 hadi 5 kila moja ikiwa na jinsi inavyohesabiwa na kipindi cha muda.", exceeds: "Pia anataja uamuzi ambao dashibodi inausaidia na kwa nini kila namba ni muhimu kwake." },
      { name: "Data nadhifu", objective: "O2", notYet: "Bado kuna kujirudia, safu mlalo tupu, miundo mchanganyiko ya tarehe au namba zilizohifadhiwa kama maandishi.", meets: "Safu mlalo moja ya vichwa, safu mlalo moja kwa kila rekodi, aina sahihi za data, hakuna kujirudia.", exceeds: "Anahifadhi jedwali la asili na maelezo mafupi ya kila rekebisho alilofanya." },
      { name: "Chati zinazofaa", objective: "O3", notYet: "Aina za chati hazifai maswali, au vichwa havipo.", meets: "Angalau chati 2 zinazofaa maswali yake, zenye vichwa vilivyo wazi; pau zinaanzia sifuri.", exceeds: "Anaweza kueleza kwa nini kila aina ya chati ilichaguliwa badala ya nyingine." },
      { name: "Mpangilio na vichujio", objective: "O4", notYet: "Kadi hazipo, au vichujio havibadilishi kila mchoro.", meets: "Kadi 3 au zaidi za namba muhimu juu, kichujio cha tarehe na kichujio kingine kimoja vinavyobadilisha kila kitu; inapita jaribio la dakika moja.", exceeds: "Mpangilio safi, uliopangwa kwa mstari bila kitu cha ziada; mtazamaji anajibu kwa muda mfupi chini ya dakika moja." },
      { name: "Namba zimekaguliwa", objective: "O5", notYet: "Hakuna namba zilizokaguliwa dhidi ya chanzo.", meets: "Namba 3 zimekaguliwa na kuandikwa; tofauti yoyote imerekebishwa.", exceeds: "Anaeleza sababu ya tofauti aliyoipata na jinsi alivyoirekebisha." },
      { name: "Imeshirikiwa kwa usalama pamoja na muhtasari", objective: "O6", notYet: "Imeshirikiwa kwa ruhusa ya kuhariri, ina data ya binafsi, au hakuna muhtasari.", meets: "Imeshirikiwa kwa kutazama tu au imehamishwa kuwa PDF, hakuna data ya binafsi, muhtasari wa sentensi 3 wenye jambo lililogunduliwa na hatua.", exceeds: "Muhtasari uko tayari kusomwa kwa sauti kwenye usaili wa kazi kama kazi ya mfano (portfolio)." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kutengeneza dashibodi inayofikia rubriki",
      "Wanafunzi wanaoongeza dashibodi kwenye CV, portfolio au wasifu wa LinkedIn ndani ya siku 30",
      "Wanafunzi wanaopanga au kufaulu PL-300 au CompTIA Data+, au kuanza kazi ya data au ripoti, ndani ya miezi 6 (utafiti wa ufuatiliaji)",
      "Wanafunzi wa biashara ndogo wanaotumia dashibodi kufanya uamuzi wa bidhaa za kuweka dukani, wafanyakazi au bei"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta yenye intaneti: Windows kwa Power BI Desktop, au kompyuta yoyote yenye kivinjari kwa Data Studio",
      "Akaunti ya bure ya Google (Google Sheets na Data Studio), na Power BI Desktop kutoka tovuti rasmi ya Microsoft kama unatumia Windows",
      "Data ya kubuni ya mauzo ya duka la mikate (wanafunzi wanaandika safu mlalo 15 au zaidi) au data nyingine ya kubuni ya fani yao",
      "Karatasi na kalamu kwa mpango wa dashibodi",
      "Jumla ya saa 2 hadi 3 hivi: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Kagua vifaa kwanza: wanafunzi wenye Mac, Chromebook au kompyuta za maktaba wanatumia Data Studio; wenye Windows wanaweza kuchagua zana yoyote.",
      "Toa jaribio la awali kabla ya Somo la 1 na ulinganishe na mtihani wa mwisho.",
      "Waambie wanafunzi wahifadhi ukurasa wao wa mpango wa Somo la 1; unaongoza kazi yote ya mwisho.",
      "Usitumie kamwe data halisi ya wateja, wagonjwa au wafanyakazi darasani. Wakumbushe wanajeshi wastaafu na wanaotafuta kazi watumie namba za kubuni pia katika kazi zao za mfano (portfolio).",
      "Pima dashibodi ya mwisho kwa rubriki na umwombe kila mwanafunzi aiwasilishe kwa sekunde 60, kama mazoezi ya usaili.",
      "Waelekeze wanafunzi kwenye kurasa rasmi za PL-300 na CompTIA Data+ kwa maudhui ya sasa ya mitihani, upangaji na gharama; usitaje bei kutoka kumbukumbu."
    ]
  }
};
