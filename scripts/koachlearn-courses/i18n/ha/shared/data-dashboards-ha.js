"use strict";

// Koach Learn course, Hausa (ha) translation of shared/data-dashboards.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const PL300 = { name: "Microsoft Learn: Power BI Data Analyst Associate (jarabawar PL-300)", url: "https://learn.microsoft.com/en-us/credentials/certifications/data-analyst-associate/" };
const DATAPLUS = { name: "CompTIA Data+ (jarabawar DA0-002)", url: "https://www.comptia.org/certifications/data" };
const PBI_DESKTOP = { name: "Microsoft: Power BI Desktop (saukewa kyauta)", url: "https://www.microsoft.com/en-us/power-platform/products/power-bi/desktop" };
const DATA_STUDIO = { name: "Google Cloud: taimakon Data Studio (tsohon Looker Studio)", url: "https://docs.cloud.google.com/looker/docs/studio" };
const DS_SHEETS = { name: "Google Cloud: Haɗa Data Studio da Google Sheets", url: "https://docs.cloud.google.com/looker/docs/studio/connect-to-google-sheets" };

module.exports = {
  id: "data-dashboards-ha",
  lang: "ha",
  translationOf: "data-dashboards",
  category: "Workforce Development",
  name: "Gina Dashboard na Bayanai (Power BI da Data Studio)",
  skills: "Tsara dashboard da manyan lambobinsa, Tsaftace bayanai zuwa tebur mai tsari, Zaɓar jadawalin da ya dace, Gina dashboard mai shafi ɗaya da matattara (filters), Dubawa da raba dashboard lafiya",
  outcome: "tsara, gina, dubawa da raba dashboard mai shafi ɗaya a Power BI Desktop ko Looker Studio (Data Studio) da ke amsa tambayar kasuwanci ɗaya a sarari, da manyan lambobi 3 zuwa 5, jadawalai masu dacewa da matattara masu sauƙi.",
  about: [
    "Kamfanoni, ƙungiyoyin agaji, asibitoci da sojoji duk suna amfani da dashboard: allo ɗaya da ke nuna lambobin da mutane ke buƙata don yanke shawara. Gina su babbar ƙwarewa ce a ayyukan nazarin bayanai (data analyst), rahoto da gudanarwa. Wannan kwas ɗin na masu neman aiki ne, tsoffin sojoji, masu ƙananan kasuwanci, da duk wanda ya taɓa amfani da spreadsheet (takardar lissafi) kuma yake son mataki na gaba.",
    "Za ku tsara dashboard, ku tsaftace ƙananan bayanan atisaye a Google Sheets, ku saka su a kayan aiki kyauta, ku zaɓi jadawalai masu dacewa, ku ƙara katunan manyan lambobi da matattara, ku duba kowace lamba, sannan ku raba shi lafiya. Kuna iya amfani da Power BI Desktop (shirin Windows kyauta daga Microsoft) ko Looker Studio, wanda Google yanzu ke kira Data Studio (kyauta a kowace burauzar intanet).",
    "Wannan kwas ɗin yana shirya ku don aikin dashboard da kuma sassan rahoto na jarabawoyi biyu na gaske: PL-300 na Microsoft (Power BI Data Analyst Associate) da CompTIA Data+ (DA0-002). Ba ya ba ku ko ɗaya daga cikin takardun shaidar. Ku duba shafukan hukuma a cikin majiyoyi don sanin abin da kowace jarabawa ta ƙunsa, yadda ake tsara ranar ta, da kuɗinta a yau.",
    "Kowane darasi yana ɗaukar kusan minti biyar, sannan aikin \"Gwada yanzu\". Akwai ɗan gwaji mai tambayoyi 2 bayan kowane darasi, gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin. Duk bayanan atisaye ƙirƙirarru ne."
  ],
  finalTask: "Ku gina dashboard mai shafi ɗaya don hanyarku: ku yi amfani da bayanan sayar da gidan burodi na atisaye daga wannan kwas ɗin, ko ƙananan bayanan ƙirƙira daga aikin da kuke so (misali odar rumbun kaya ko ziyarar asibiti). Ku rubuta tambayar dashboard da manyan lambobi 3 zuwa 5, ku tsaftace bayanan zuwa tebur mai tsari, ku gina aƙalla katunan manyan lambobi 3 da jadawalai 2 da suka dace da tambayar, ku ƙara matattarar kwanan wata da wata matattara ɗaya, ku duba jimloli 3 da bayanan asali, sannan ku raba shi ko ku fitar da shi tare da taƙaitawa mai jimloli 3 na abin da yake nunawa. Ku ajiye shi a matsayin aikin nuni (portfolio) da za ku iya nunawa a hirar neman aiki.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya iri-iri: masu neman aiki a fannin bayanai, rahoto ko gudanarwa, tsoffin sojoji da ke komawa ayyukan farar hula, masu ƙananan kasuwanci, matasa, da mutanen da ke dawowa gida daga gidan yari kuma suke sake gina ƙwarewar aiki. Da yawa sun taɓa amfani da spreadsheet; kaɗan ne suka taɓa gina dashboard.",
    startingPoint: "Suna iya shigar da bayanai a spreadsheet, ƙara jimla da SUM, da yin jadawali mai sauƙi (ko sun ɗauki kwas ɗin \"Excel da Spreadsheet don Aiki\"). Ba su taɓa amfani da Power BI ko Looker Studio ba. Wasu ba su da tabbas kan wane jadawali za su yi amfani da shi, ko dalilin da yasa lambobi a rahoto ke iya zama ba daidai ba.",
    gap: "Masu ɗaukar aiki suna son mutanen da za su iya mayar da bayanai danye zuwa shafi ɗaya a sarari da ke amsa tambayar kasuwanci kuma za a iya amincewa da shi. Masu koyo suna buƙatar tsara, tsaftacewa, gina, dubawa da raba dashboard, da nuna ɗaya a hirar neman aiki. Wannan ita ce ƙwarewar rahoto da ake gwadawa a PL-300 da CompTIA Data+.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; ana bayanin kowace kalmar bayanai",
      "Na'urori: Power BI Desktop yana buƙatar kwamfutar Windows; a Mac, Chromebook ko kwamfutar ɗakin karatu, ku yi amfani da Data Studio a burauza",
      "Kayan aiki kyauta kaɗai: Google Sheets, Power BI Desktop, Data Studio (Looker Studio)",
      "Lokaci: darussa na minti 5 zuwa 6 da suka dace da aiki da neman aiki",
      "Sirri: bayanan atisaye ƙirƙirarru ne; kada ku taɓa saka bayanan gaske na kwastomomi, marasa lafiya ko ma'aikata don atisaye"
    ],
    prerequisites: "Amfani da spreadsheet na farko: shigar da bayanai, SUM, jerawa (sort) da jadawali mai sauƙi. Idan wannan sabon abu ne, ku fara ɗaukar \"Excel da Spreadsheet don Aiki\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku buƙatar kasuwanci kamar \"Waɗanne kayayyaki ne suka fi sayuwa?\"", action: "rubuta tambayar dashboard mai jimla ɗaya, ambaci masu kallo, da zaɓar manyan lambobi 3 zuwa 5 (KPIs)", standard: "tare da sunan kowace babbar lamba, yadda ake lissafa ta da lokacinta" },
    { id: "O2", condition: "Idan aka ba ku takardar sayarwa ta atisaye mai rikitarwa", action: "tsaftace bayanan zuwa tebur mai tsari mai layi ɗaya ga kowane rikodi da shafi ɗaya ga kowane fili", standard: "ba tare da kanun shafi marasa suna ba, ba layuka masu maimaitawa ba, kuma tsari ɗaya ga kowane shafi" },
    { id: "O3", condition: "Idan aka ba ku tambaya game da canji a kan lokaci, kwatantawa, ko kaso na jimla", action: "zaɓa da gina nau'in jadawalin da ya dace da tambayar a Power BI Desktop ko Data Studio", standard: "kuna samun aƙalla zaɓin jadawali 4 cikin 5 daidai" },
    { id: "O4", condition: "Ta amfani da bayananku da aka tsaftace a Power BI Desktop ko Data Studio", action: "gina dashboard mai shafi ɗaya da katunan manyan lambobi, aƙalla jadawalai 2, matattarar kwanan wata da wata matattara ɗaya", standard: "ta yadda mai kallo zai iya amsa tambayar dashboard cikin ƙasa da minti ɗaya" },
    { id: "O5", condition: "Idan aka ba ku dashboard da aka gama da bayanansa na asali", action: "duba aƙalla jimloli 3 a dashboard da bayanan asali da gyara duk wanda bai yi daidai ba", standard: "kafin kowa ya gan shi" },
    { id: "O6", condition: "Idan dashboard ɗinku ya shirya", action: "raba ko fitar da dashboard ɗin da izinin kallo kaɗai da rubuta taƙaitawa mai jimloli 3 na abin da yake nunawa", standard: "ba tare da raba wani bayanin sirri ba" }
  ],
  chapters: [
    {
      name: "Babi na 1: Tsara dashboard da shirya bayanai",
      lessons: [
        {
          title: "Farawa da tambaya da manyan lambobi",
          objectives: ["O1"],
          minutes: 5,
          goal: "Rubuta tambayar dashboard, ambaci masu kallonsa, da zaɓar manyan lambobi 3 zuwa 5.",
          text: [
            "Dashboard allo ɗaya ne na lambobi da jadawalai da ke taimaka wa wani ya yanke shawara. Mai kyau yana farawa da tambaya, ba da jadawali ba. Ku tambaya: wa zai kalli wannan, kuma me yake buƙatar yanke shawara a kai?",
            "Misali: mai ƙaramin gidan burodi ya tambaya, \"Waɗanne kayayyaki da waɗanne ranaku ne suka fi kawo kuɗi a kowane wata?\" Masu kallo su ne mai gidan. Shawarar ita ce me za a ƙara gasawa da yaushe za a sa ma'aikata aiki.",
            "Sannan, ku zaɓi manyan lambobi 3 zuwa 5, waɗanda ake kira KPIs. Ga gidan burodi: jimlar sayarwa a dala, adadin kayan da aka sayar, matsakaicin sayarwa a kowace oda, da kayan da ya fi sayuwa. Ku rubuta yadda ake lissafa kowanne da kuma na wane lokaci, misali \"Jimlar sayarwa = jimlar shafin Total, wannan watan\".",
            "Lambobi masu yawa suna ɓoye masu muhimmanci. Idan wata lamba ba ta taimaka wajen amsa tambayar ba, ku bar ta."
          ],
          steps: ["Ku ambaci masu kallo: wa zai yi amfani da dashboard ɗin?", "Ku rubuta tambayar a jimla ɗaya.", "Ku ambaci shawarar da yake taimaka musu su yanke.", "Ku zaɓi manyan lambobi 3 zuwa 5 da ke amsa ta.", "Ga kowanne, ku rubuta sunansa, yadda ake lissafa shi da lokacinsa."],
          words: [["Dashboard", "allo ɗaya na manyan lambobi da jadawalai da ke taimaka wa wani ya yanke shawara."], ["KPI (key performance indicator)", "ɗaya daga cikin ƴan lambobin da ke nuna ko abubuwa suna tafiya lafiya, kamar jimlar sayarwa a wannan watan."], ["Masu kallo (audience)", "mutanen da za su kalli dashboard ɗin."], ["Metric (ma'auni)", "duk wata lamba da kuke aunawa, kamar kayan da aka sayar ko matsakaicin sayarwa."]],
          slides: [
            { title: "Ku fara da tambaya, ba da jadawali ba", bullets: ["Wa zai kalle shi?", "Me suke buƙatar yanke shawara a kai?", "Ku rubuta tambayar a jimla ɗaya"] },
            { title: "Misali: ƙaramin gidan burodi", bullets: ["Tambaya: waɗanne kayayyaki da ranaku ne suka fi kawo kuɗi?", "Masu kallo: mai gidan", "Shawara: me za a gasa da yaushe za a sa ma'aikata"] },
            { title: "Ku zaɓi manyan lambobi 3 zuwa 5 (KPIs)", bullets: ["Jimlar sayarwa, kayan da aka sayar, matsakaicin sayarwa, wanda ya fi sayuwa", "Ku rubuta yadda ake lissafa kowanne", "Ku rubuta lokacin: wannan watan, wannan makon"] },
            { title: "Ƙaranci ya fi", bullets: ["Lambobi masu yawa suna ɓoye masu muhimmanci", "Idan ba ta amsa tambayar ba, ku bar ta"] }
          ],
          tryIt: "Ku zaɓi aikin da kuke so (misali rumbun kaya, teburin karɓar baƙi a asibiti, manajan shago, ko misalin gidan burodi). A takarda, ku rubuta masu kallo, tambayar mai jimla ɗaya, shawarar, da manyan lambobi 3 zuwa 5 tare da yadda ake lissafa kowanne da lokacinsa. Ku ajiye wannan shafi: shi ne tsarin dashboard ɗinku na ƙarshe.",
          youCanNow: "rubuta tambayar dashboard don masu kallo na gaske da zaɓar manyan lambobi 3 zuwa 5 da ke amsa ta.",
          quickCheck: [
            { objective: "O1", q: "Me ya kamata ku FARA yi idan za ku gina dashboard?", options: ["Ku rubuta tambayar da wanda za a yi masa", "Ku zaɓi launukan jadawalai", "Ku ƙara kowane jadawali da kayan aikin ke da shi", "Ku zaɓi nau'in rubutu (font)"], answer: 0, why: "Tambaya da masu kallo ne ke yanke waɗanne lambobi da jadawalai za su kasance a shafin." },
            { objective: "O1", q: "Wace ce babbar lamba mafi kyau don \"Waɗanne kayayyaki ne suka fi kawo kuɗi a kowane wata?\"", options: ["Adadin ma'aikata", "Adireshin titin gidan burodi", "Jimlar sayarwa a dala bisa kowane kaya, wannan watan", "Yanayin kowace rana"], answer: 2, why: "Sayarwa bisa kowane kaya na watan tana amsa tambayar kai tsaye." }
          ],
          sources: [PL300, DATAPLUS]
        },
        {
          title: "Tsaftace bayanai zuwa tebur mai tsari",
          objectives: ["O2"],
          minutes: 6,
          goal: "Tsaftace takarda mai rikitarwa zuwa tebur mai tsari mai layi ɗaya ga kowane rikodi da shafi ɗaya ga kowane fili.",
          text: [
            "Kayan aikin dashboard suna aiki mafi kyau da tebur mai tsari: layin kanun shafi ɗaya, layi ɗaya ga kowane rikodi (kowace sayarwa, kowace oda) da shafi ɗaya ga kowane fili (Date, Product, Units). Babu ƙwayoyin da aka haɗa (merged cells), babu layuka marasa komai, babu jimlolin da aka rubuta a cikin bayanan.",
            "Bayanai masu rikitarwa suna ba da lambobi marasa daidai. Matsaloli da aka saba: sayarwa ɗaya da aka rubuta sau biyu (maimaici), ƙwayoyi marasa komai, kwanakin wata da aka rubuta ta hanyoyi daban-daban (10/3/26 da Oct 3), lambobin da aka ajiye a matsayin rubutu (\"$4.50\" da aka rubuta da sarari), da bambancin rubutun kalma (\"Muffin\" da \"muffins\").",
            "A Google Sheets kuna iya gyara yawancin waɗannan: Data > Data cleanup > Remove duplicates, Format > Number don saita kwanan wata da kuɗi, da Edit > Find and replace don gyara rubutun kalmomi. Ku ajiye takardar asali ku tsaftace kwafinta, don ku iya komawa koyaushe.",
            "Bayanan atisaye na wannan kwas (ƙirƙirarru): shafuka Date, Product, Category, Units, Price, Total. Misali 10/1/2026, Muffin, Pastry, 12, 2.50, 30.00."
          ],
          steps: ["Ku yi kwafin takardar ku yi aiki a kan kwafin.", "Ku tabbata akwai layin kanun shafi ɗaya kacal da suna a sarari a kowane shafi.", "Ku cire layuka marasa komai, ƙwayoyin da aka haɗa da duk layukan jimla a cikin bayanan.", "Ku cire layuka masu maimaitawa.", "Ku ba kowane shafi tsari ɗaya: kwanan wata a matsayin kwanan wata, kuɗi a matsayin kuɗi, rubutu da aka rubuta iri ɗaya.", "Ku duba layi ɗaya da hannu: Units sau Price ya kamata ya yi daidai da Total."],
          words: [["Tebur mai tsari (tidy table)", "bayanai masu layin kanun shafi ɗaya, layi ɗaya ga kowane rikodi da shafi ɗaya ga kowane fili."], ["Rikodi (record)", "layi ɗaya na bayanai, kamar sayarwa ɗaya."], ["Fili (field)", "shafi ɗaya na bayanai, kamar Date ko Product."], ["Maimaici (duplicate)", "rikodi ɗaya da aka rubuta sau biyu."], ["Nau'in bayanai (data type)", "irin abin da shafi ke ɗauke da shi: lamba, kwanan wata, kuɗi ko rubutu."]],
          slides: [
            { title: "Tebur mai tsari", bullets: ["Layin kanun shafi ɗaya", "Layi ɗaya ga kowane rikodi, shafi ɗaya ga kowane fili", "Babu ƙwayoyin da aka haɗa, layuka marasa komai ko jimlolin da aka rubuta"] },
            { title: "Rikice-rikice da aka saba", bullets: ["Layuka masu maimaitawa", "Kwanakin wata da aka rubuta ta hanyoyi daban-daban", "Lambobin da aka ajiye a matsayin rubutu", "Rubutu daban-daban na abu ɗaya"] },
            { title: "Gyare-gyare a Google Sheets", bullets: ["Data > Data cleanup > Remove duplicates", "Format > Number don kwanan wata da kuɗi", "Edit > Find and replace don rubutun kalmomi"] },
            { title: "Ku yi aiki lafiya", bullets: ["Ku tsaftace kwafi, ku ajiye na asali", "Ku duba layi ɗaya da hannu: Units x Price = Total"] }
          ],
          tryIt: "A Google Sheets, ku rubuta layuka 15 na sayarwar gidan burodi ƙirƙirarru (Date, Product, Category, Units, Price, Total) a cikin makonni biyu. Da gangan, ku ƙara layi 1 mai maimaitawa, layi 1 marar komai, kwanan wata 1 da aka rubuta a matsayin rubutu (Oct 5) da bambancin rubutu 1 (\"muffins\"). Sannan ku yi kwafi ku tsaftace shi da matakan. Ku ƙirga matsaloli nawa kuka gyara.",
          youCanNow: "gano da gyara maimaici, ƙwayoyi marasa komai, tsare-tsare masu gauraye da bambancin rubutu don yin tebur mai tsari.",
          quickCheck: [
            { objective: "O2", q: "Takardarku tana nuna \"Muffin\" da \"muffins\" a matsayin kayayyaki biyu. Me za ku yi?", options: ["Ku bar shi; kayan aikin zai yi hasashe", "Ku goge duk layukan muffin", "Ku ƙara rubutu na uku", "Ku yi amfani da Find and replace don kowane layi ya ce \"Muffin\""], answer: 3, why: "Rubutu ɗaya ga kowane kaya yana sa kayan aikin ya haɗa su daidai." },
            { objective: "O2", q: "Wanne ne yake bayanin tebur mai tsari?", options: ["Ƙwayoyin take da aka haɗa a kan bayanan", "Layin kanun shafi ɗaya, layi ɗaya ga kowane rikodi, shafi ɗaya ga kowane fili", "Layin jimla a tsakiyar bayanan", "Layukan kanun shafi biyu masu ƙwayoyi marasa komai"], answer: 1, why: "Kayan aikin dashboard suna karanta tebura masu tsari daidai; ƙwayoyin da aka haɗa da jimlolin da aka rubuta suna rikita su." }
          ],
          sources: [{ name: "Google Docs Editors Help: Split text, remove duplicates, or trim whitespace", url: "https://support.google.com/docs/answer/6325535" }]
        },
        {
          title: "Saka bayanai a Power BI Desktop ko Data Studio",
          objectives: ["O2"],
          minutes: 6,
          goal: "Saka tebur mai tsari a Power BI Desktop ko Data Studio da duba nau'in bayanan kowane shafi.",
          text: [
            "Ku zaɓi kayan aikinku. Power BI Desktop kyauta ne daga Microsoft kuma yana aiki a kwamfutar Windows. Looker Studio, wanda Google yanzu ke kira Data Studio, kyauta ne kuma yana aiki a burauzar intanet, don haka yana aiki a Mac, Chromebook ko kwamfutar ɗakin karatu. Ana amfani da duka biyun a ayyuka na gaske; ƙwarewar tana tafiya daga ɗaya zuwa ɗayan.",
            "Power BI Desktop: ku sauke shi daga shafin hukuma na Microsoft kaɗai. Ku ajiye takardarku mai tsabta a matsayin fayil na Excel ko CSV. Ku zaɓi Get data, ku zaɓi fayil ɗin, ku kalli samfoti (preview). Ku zaɓi Transform data idan wani shafi yana buƙatar gyara; wannan yana buɗe Power Query Editor, inda za ku iya saita nau'in bayanan shafi.",
            "Data Studio: ku shiga da asusun Google, ku zaɓi Create, sannan Data source, ku zaɓi mahaɗin (connector) Google Sheets, ku zaɓi spreadsheet ɗinku da takardar aiki (worksheet), sannan ku zaɓi Connect. Za ku ga filayenku a jere tare da nau'insu.",
            "A duka kayan aikin biyu, ku duba kowane shafi: Date ya kamata ya zama kwanan wata, Units da Total ya kamata su zama lambobi, Product ya kamata ya zama rubutu. Lambar da aka ajiye a matsayin rubutu ba za a iya haɗa ta ba. Filayen da kuke ƙirgawa ko haɗawa (Units, Total) ana yawan kiran su measures ko metrics; filayen da kuke rarrabawa da su (Product, Date) ana kiran su dimensions."
          ],
          steps: ["Ku zaɓi Power BI Desktop (Windows) ko Data Studio (kowace burauza).", "Power BI: Get data, ku zaɓi fayil ɗin Excel ko CSV, ku kalli samfoti, ku zaɓi Load ko Transform data.", "Data Studio: Create, Data source, mahaɗin Google Sheets, ku zaɓi takardar, Connect.", "Ku duba nau'in kowane shafi: kwanan wata, lambobi, rubutu.", "Ku gyara duk nau'in da ba daidai ba kafin ku gina jadawalai."],
          words: [["Power BI Desktop", "shirin Microsoft kyauta na Windows da ke gina rahotanni da dashboards."], ["Data Studio (Looker Studio)", "kayan aikin Google kyauta a burauza don rahotanni da dashboards; Google ya canja sunan Looker Studio zuwa Data Studio."], ["Data source (tushen bayanai)", "fayil ko takardar da dashboard ke karanta bayanansa daga ciki."], ["Power Query Editor", "ɓangaren Power BI inda kuke tsaftacewa da tsara bayanai kafin gina hotuna (visuals)."], ["Dimension", "filin da kuke rarrabawa da shi, kamar Product ko Date."], ["Measure (metric)", "lambar da kuke haɗawa, ƙirgawa ko samun matsakaicinta, kamar jimlar sayarwa."], ["Fayil na CSV", "fayil na rubutu kawai mai bayanai da aka raba ƙimominsu da waƙafi."]],
          slides: [
            { title: "Kayan aiki kyauta guda biyu", bullets: ["Power BI Desktop: kyauta, Windows", "Data Studio (tsohon Looker Studio): kyauta, kowace burauzar intanet", "Ƙwarewar tana tafiya daga ɗaya zuwa ɗayan"] },
            { title: "Power BI Desktop", bullets: ["Get data, ku zaɓi fayil ɗin Excel ko CSV", "Ku duba samfoti", "Transform data yana buɗe Power Query Editor"] },
            { title: "Data Studio", bullets: ["Create, sannan Data source", "Mahaɗin Google Sheets, ku zaɓi takardar", "Connect, sannan ku duba jerin filaye"] },
            { title: "Ku duba kowane nau'in bayanai", bullets: ["Kwanan wata a matsayin kwanan wata, lambobi a matsayin lambobi", "Measures: abubuwan da kuke haɗawa, kamar Total", "Dimensions: abubuwan da kuke rarrabawa da su, kamar Product"] }
          ],
          tryIt: "Ku saka takardar gidan burodi da kuka tsaftace a Power BI Desktop ko Data Studio. Ku rubuta kowane shafi da nau'in bayanansa. Idan wata lamba ta bayyana a matsayin rubutu, ku gyara ta a kayan aikin ko a takardar, sannan ku sake saka ta. Sannan ku faɗi waɗanne filaye ne dimensions da waɗanne ne measures.",
          youCanNow: "saka tebur mai tsari a Power BI Desktop ko Data Studio da tabbatar kowane shafi yana da nau'in bayanai daidai.",
          quickCheck: [
            { objective: "O2", q: "Shafin Total ɗinku ya shigo a matsayin rubutu. Me zai faru idan kun bar shi?", options: ["Kayan aikin ba zai iya haɗa jimlolin daidai ba", "Babu komai; rubutu da lambobi iri ɗaya suke aiki", "Dashboard ɗin zai sami ƙarin launuka", "Fayil ɗin zai yi ƙanƙanta"], answer: 0, why: "Shafukan lambobi ne kaɗai za a iya haɗawa ko samun matsakaicinsu." },
            { objective: "O2", q: "Chromebook ne kawai kuke da shi. Wane kayan aiki za ku iya amfani da shi a wannan kwas?", options: ["Power BI Desktop", "Babu kayan aikin da zai yi aiki", "Data Studio a burauzar intanet", "Takarda kawai"], answer: 2, why: "Data Studio yana aiki a burauza; Power BI Desktop yana buƙatar Windows." }
          ],
          sources: [PBI_DESKTOP, DATA_STUDIO, DS_SHEETS]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Tsara dashboard da shirya bayanai",
        questions: [
          { objective: "O1", q: "Manajan shago yana son sanin wace ranar mako ce ke buƙatar ƙarin ma'aikata. Wace babbar lamba ce ta fi taimakawa?", options: ["Lambar wayar shagon", "Adadin kayayyaki a cikin kundin kaya", "Adadin kwastomomi bisa kowace ranar mako", "Ranar da manajan ya fara aiki"], answer: 2, why: "Kwastomomi bisa kowace rana suna nuna kai tsaye waɗanne ranaku ne suka fi cunkoso." },
          { objective: "O1", q: "Manyan lambobi nawa ne dashboard mai shafi ɗaya ke yawan nunawa?", options: ["3 zuwa 5", "1 kawai", "Gwargwadon iko", "Aƙalla 20"], answer: 0, why: "Ƴan manyan lambobi suna sa masu muhimmanci su zama masu sauƙin gani." },
          { objective: "O2", q: "Wace matsala ce za ta sa jimlar sayarwa ta yi yawa fiye da kima?", options: ["Layin kanun shafi a sarari", "Kwanan wata da aka tsara a matsayin kwanan wata", "Rubutu ɗaya ga kowane kaya", "Sayarwa ɗaya da aka rubuta sau biyu"], answer: 3, why: "Layi mai maimaitawa yana ƙirga sayarwa ɗaya sau biyu." },
          { objective: "O2", q: "Kafin ku tsaftace takarda, me ya kamata ku yi?", options: ["Ku goge layin kanun shafi", "Ku yi kwafi ku tsaftace kwafin", "Ku haɗa dukkan ƙwayoyin", "Ku rubuta jimloli a cikin bayanan"], answer: 1, why: "Ajiye na asali yana ba ku damar komawa idan gyara ya lalace." },
          { objective: "O2", q: "Product da Date filaye ne da kuke rarrabawa da su. Me ake kiran su?", options: ["Measures", "Kalmomin sirri", "Dimensions", "Matattara (filters)"], answer: 2, why: "Dimensions filaye ne da kuke rarrabawa ko yankawa da su; measures lambobi ne da kuke haɗawa ko samun matsakaicinsu." }
        ]
      }
    },
    {
      name: "Babi na 2: Gini, dubawa da rabawa",
      lessons: [
        {
          title: "Zaɓar jadawalin da ya dace",
          objectives: ["O3"],
          minutes: 6,
          goal: "Zaɓa da gina jadawalin da ya dace da kowane irin tambaya.",
          text: [
            "Ku daidaita jadawali da tambaya. Canji a kan lokaci (sayarwa bisa kowace rana ko wata) jadawalin layi ne (line chart). Kwatanta tsakanin ƙungiyoyi (sayarwa bisa kowane kaya) jadawalin sanduna ne (bar ko column chart), an jera shi daga mafi girma zuwa mafi ƙanƙanta. Sassan jimla (kason sayarwa bisa rukuni) na iya zama jadawalin pie ko donut, amma da ƴan yankuna kaɗai; jadawalin sanduna sau da yawa ya fi sarari.",
            "Babbar lamba ɗaya ita kaɗai kati ne (card) a Power BI ko scorecard a Data Studio. Ainihin ƙimomin da mutane ke buƙatar dubawa suna shiga tebur. Taswira (map) tana taimakawa ne kawai idan wuri yana da muhimmanci.",
            "Don gini: a Power BI Desktop, ku danna wani hoto (visual) a Visualizations pane, sannan ku ja dimension (Product) da measure (Total) zuwa filayensa. A Data Studio, ku zaɓi Add a chart, ku zaɓi nau'in, sannan ku saita dimension da metric.",
            "Ku sa jadawalai su zama na gaskiya: jadawalin sanduna yana farawa daga sifili, kowane jadawali yana da take a sarari da ke faɗin abin da yake nunawa (\"Sayarwa bisa kowane kaya, Oktoba\"), kuma ku yi amfani da launi ɗaya sai dai idan launi yana da ma'ana."
          ],
          steps: ["Ku karanta tambayar: game da lokaci ce, kwatanta ƙungiyoyi, sassan jimla, ko lamba ɗaya?", "Lokaci: jadawalin layi. Kwatantawa: jadawalin sanduna, an jera shi. Sassa: pie mai ƴan yankuna, ko sanduna. Lamba ɗaya: card ko scorecard.", "Ku ƙara jadawalin ku saita dimension da measure.", "Ku ba shi take da ke faɗin abin da yake nunawa da lokacin.", "Ku duba cewa sanduna suna farawa daga sifili."],
          words: [["Jadawalin layi (line chart)", "jadawalin da ke nuna yadda lamba ke canjawa a kan lokaci."], ["Jadawalin sanduna (bar chart)", "jadawalin sanduna da ke kwatanta ƙungiyoyi; column chart jadawalin sanduna ne a tsaye."], ["Jadawalin pie (pie chart)", "da'ira da aka yanka zuwa yankuna da ke nuna sassan jimla."], ["Card / scorecard", "akwati da ke nuna babbar lamba ɗaya, kamar jimlar sayarwa."], ["Visual (hoto)", "kalmar Power BI don jadawali, kati, tebur ko taswira."]],
          slides: [
            { title: "Ku daidaita jadawali da tambaya", bullets: ["A kan lokaci: jadawalin layi", "Kwatanta ƙungiyoyi: jadawalin sanduna, an jera", "Sassan jimla: ƴan yankuna, ko sanduna", "Lamba ɗaya: card ko scorecard"] },
            { title: "Ku gina shi", bullets: ["Power BI: ku zaɓi visual, ku ja filaye ciki", "Data Studio: Add a chart, ku saita dimension da metric"] },
            { title: "Ku sa shi ya zama na gaskiya", bullets: ["Sanduna suna farawa daga sifili", "Take yana faɗin abin da yake nunawa da yaushe", "Launi ɗaya sai dai idan launi yana da ma'ana"] }
          ],
          tryIt: "Da bayanan gidan burodinku, ku gina jadawalai uku: (1) jimlar sayarwa bisa kwanan wata a matsayin jadawalin layi, (2) jimlar sayarwa bisa kowane kaya a matsayin jadawalin sanduna da aka jera mafi girma a farko, (3) jimlar sayarwa a matsayin card ko scorecard ɗaya. Ku ba kowanne take a sarari. Sannan ku rubuta jimla ɗaya da kowane jadawali ke faɗa muku.",
          youCanNow: "zaɓar jadawalin layi, sanduna, pie, card ko tebur da ya dace da tambaya da gina shi da take a sarari.",
          quickCheck: [
            { objective: "O3", q: "Wane jadawali ne ya fi nuna yadda sayarwa ta canja kowace rana a wannan watan?", options: ["Jadawalin pie", "Taswira", "Card ɗaya", "Jadawalin layi"], answer: 3, why: "Jadawalin layi yana nuna canji a kan lokaci." },
            { objective: "O3", q: "Kuna son kwatanta sayarwa a tsakanin kayayyaki 8. Wanne ne ya fi sarari?", options: ["Jadawalin pie mai yankuna 8", "Jadawalin sanduna da aka jera daga mafi girma zuwa mafi ƙanƙanta", "Taswira", "Teburin kwanakin wata"], answer: 1, why: "Jadawalin sanduna da aka jera yana sa kwatantawa ta zama mai sauƙi; yankunan pie 8 suna da wuyar karantawa." }
          ],
          sources: [DATAPLUS, PL300]
        },
        {
          title: "Tsara dashboard da katuna da matattara",
          objectives: ["O4"],
          minutes: 6,
          goal: "Gina dashboard mai shafi ɗaya da katunan manyan lambobi, jadawalai, matattarar kwanan wata da wata matattara ɗaya.",
          text: [
            "Mutane suna karanta allo daga sama a hagu. Ku sa katunan manyan lambobi a jere a sama, jadawali mafi muhimmanci a ƙarƙashinsu, da cikakkun bayanai a ƙasa. Ku ƙara take ga dukkan shafin da lokacin da ya ƙunsa.",
            "Matattara suna bar masu kallo su canja abin da suke gani. A Power BI ana kiran su slicers: ku ƙara Slicer visual ku sa Date a ciki, sannan ku ƙara wani don Category. A Data Studio ana kiran su controls: ku zaɓi Add a control, ku zaɓi Date range control, sannan ku ƙara Drop-down list control don Category.",
            "Ku gwada matattara: ku zaɓi rukuni ɗaya ku tabbata kowane kati da jadawali ya canja. Idan ɗaya bai canja ba, ba a haɗa shi da bayanai iri ɗaya ba.",
            "Ku bar sarari, ku daidaita abubuwa a layi, ku cire duk abin da bai taimaka wajen amsa tambayar ba. Sannan ku yi gwajin minti ɗaya: ku nuna shafin ga aboki ku yi masa tambayar dashboard. Zai iya amsa ta cikin ƙasa da minti ɗaya?"
          ],
          steps: ["Ku ƙara take na shafi da lokacin da ya ƙunsa.", "Ku sa katunan manyan lambobi 3 zuwa 5 a jere a sama.", "Ku sa babban jadawali a ƙarƙashin katunan, sauran jadawalai a ƙasa.", "Ku ƙara matattarar kwanan wata (slicer ko date range control).", "Ku ƙara wata matattara ɗaya, kamar Category.", "Gwaji: ku canja kowace matattara ku kalli kowane kati da jadawali suna canjawa.", "Ku yi gwajin minti ɗaya da wani mutum."],
          words: [["Tsari (layout)", "inda kowane kati da jadawali yake a shafin."], ["Matattara (filter)", "abin sarrafawa da ke bar mai kallo ya nuna wani ɓangare na bayanai kawai, kamar wata ɗaya."], ["Slicer", "sunan Power BI don matattara a shafin."], ["Control", "sunan Data Studio don matattara a shafin, kamar date range control."]],
          slides: [
            { title: "Tsari", bullets: ["Katunan manyan lambobi a jere a sama", "Babban jadawali a ƙarƙashinsu, cikakkun bayanai a ƙasa", "Take na shafi tare da lokacin da ya ƙunsa"] },
            { title: "Matattara", bullets: ["Power BI: Slicer visual don Date da Category", "Data Studio: Date range control da Drop-down list"] },
            { title: "Ku gwada shi", bullets: ["Ku canja matattara: komai yana canjawa?", "Ku cire duk abin da bai taimaka ba", "Gwajin minti ɗaya da aboki"] }
          ],
          tryIt: "Ku sa jadawalanku uku daga Darasi na 4 a shafi ɗaya. Ku ƙara aƙalla ƙarin katin babbar lamba ɗaya (misali kayan da aka sayar ko matsakaicin sayarwa), matattarar kwanan wata da matattarar Category. Ku daidaita komai a layi. Sannan ku yi wa wani tambayar dashboard ɗinku ku auna tsawon lokacin da ya ɗauka kafin ya amsa daga shafin.",
          youCanNow: "tsara dashboard mai shafi ɗaya da katunan manyan lambobi, jadawalai da matattara masu aiki da wani zai iya karantawa cikin ƙasa da minti ɗaya.",
          quickCheck: [
            { objective: "O4", q: "A ina ya kamata katunan manyan lambobi su kasance yawanci?", options: ["A jere a sama", "A ɓoye a shafi na biyu", "A can ƙasa", "A cikin jadawalin pie"], answer: 0, why: "Mutane suna karantawa daga sama a hagu, don haka manyan lambobi suke farko." },
            { objective: "O4", q: "Kun zaɓi rukuni ɗaya a matattara, amma jadawali ɗaya bai canja ba. Me hakan ke nufi?", options: ["Dashboard ɗin ya gama", "Ba a haɗa wannan jadawalin da bayanai ko matattara iri ɗaya ba", "Matattara ba sa taɓa canja jadawalai", "Kuna buƙatar allo mafi girma"], answer: 1, why: "Kowane kati da jadawali ya kamata su amsa; wanda bai amsa ba yana buƙatar gyara." }
          ],
          sources: [PBI_DESKTOP, DATA_STUDIO]
        },
        {
          title: "Duba lambobi da rabawa lafiya",
          objectives: ["O5", "O6"],
          minutes: 6,
          goal: "Duba jimloli 3 na dashboard da bayanan asali, sannan raba shi da izinin kallo kaɗai tare da gajeriyar taƙaitawa.",
          text: [
            "Dashboard yana da amfani ne kawai idan za a iya amincewa da shi. Kafin kowa ya gan shi, ku duba aƙalla lambobi 3. Misali: katin yana cewa jimlar sayarwa ta kai $1,240. A takardarku, ku yi amfani da SUM a shafin Total na kwanakin wata iri ɗaya. Sun yi daidai? Sannan ku duba kaya ɗaya da rana ɗaya ta hanya ɗaya.",
            "Idan lamba ba ta yi daidai ba, ku nemi dalilai da aka saba: wata matattara har yanzu tana kunne, maimaici ya dawo, wani shafi rubutu ne maimakon lamba, lokacin ya bambanta, ko katin yana amfani da Count maimakon Sum.",
            "Ku raba lafiya. A Data Studio, ku yi amfani da maɓallin Share ku ba mutane izinin kallo (view), ba izinin gyara (edit) ba. Da Power BI Desktop, ku fitar da shafin zuwa PDF ko ku ajiye fayil ɗin ku aika shi ga mutumin da ya dace kaɗai; wallafa shi a intanet na iya buƙatar asusun aiki ko na makaranta. Kada ku taɓa sa bayanan gaske na kwastomomi, marasa lafiya ko ma'aikata a dashboard na atisaye.",
            "Ku ƙara taƙaitawa mai jimloli 3: abin da dashboard ɗin yake nunawa, binciken mafi muhimmanci, da mataki ɗaya da ake ba da shawara. Misali: \"Wannan yana nuna sayarwar gidan burodi na Oktoba. Muffins sun fi kawo kuɗi, kuma Asabar ce ranar da ta fi cunkoso. Za mu iya ƙara gasa muffins mu ƙara ma'aikaci ɗaya a ranakun Asabar.\""
          ],
          steps: ["Ku share dukkan matattara.", "Ku duba lambobi 3 da takardar asali: jimlar, kaya ɗaya da rana ɗaya.", "Idan ɗaya ba daidai ba ne, ku duba matattara, maimaici, nau'in bayanai, kwanakin wata, da Sum ko Count.", "Ku raba da izinin kallo kaɗai, ko ku fitar zuwa PDF.", "Ku rubuta taƙaitawa mai jimloli 3: abin da yake nunawa, babban bincike, mataki ɗaya."],
          words: [["Tabbatarwa (validate)", "duba cewa lamba daidai ce ta hanyar kwatanta ta da tushenta."], ["Izinin kallo kaɗai (view-only access)", "mutane za su iya kallon dashboard ɗin amma ba za su iya canja shi ba."], ["Fitarwa (export)", "ajiye kwafi a wani tsari, kamar PDF."], ["Bincike mai amfani (insight)", "abin da aka gano mai amfani da ke taimaka wa wani ya yanke shawarar abin da zai yi."]],
          slides: [
            { title: "Ku duba kafin ku raba", bullets: ["Ku share matattara", "Ku duba lambobi 3 da takardar asali", "Jimla, kaya ɗaya, rana ɗaya"] },
            { title: "Idan lamba ba daidai ba ce", bullets: ["Wata matattara har yanzu tana kunne", "Maimaici ko lambobi a matsayin rubutu", "Kwanakin wata daban, ko Count maimakon Sum"] },
            { title: "Ku raba lafiya", bullets: ["Izinin kallo kaɗai, ba na gyara ba", "Ko ku fitar zuwa PDF", "Babu bayanan sirri na gaske a aikin atisaye"] },
            { title: "Ku rubuta taƙaitawa mai jimloli 3", bullets: ["Abin da yake nunawa", "Babban bincike", "Mataki ɗaya da ake ba da shawara"] }
          ],
          tryIt: "Ku kammala aikinku na ƙarshe: ku duba lambobi 3 a dashboard ɗinku da takardarku ku rubuta kowane biyu. Ku gyara duk wanda bai yi daidai ba. Sannan ku raba shi da izinin kallo kaɗai (Data Studio) ko ku fitar da PDF (Power BI), ku rubuta taƙaitawarku mai jimloli 3. Ku ba kanku maki da ma'aunin rubric kafin ku ce kun gama.",
          youCanNow: "duba lambobin dashboard da tushensu, raba shi lafiya, da bayanin abin da yake nunawa a cikin jimloli uku.",
          quickCheck: [
            { objective: "O5", q: "Katinku yana cewa an sayar da kaya 340, amma SUM na Units a takardar yana cewa 310. Me za ku fara dubawa?", options: ["Launukan jadawali", "Nau'in rubutun take na shafi", "Ko wata matattara tana kunne ko maimaici ya dawo", "Hasken allo"], answer: 2, why: "Matattara da maimaici dalilai ne da aka saba na jimlolin da ba su yi daidai ba." },
            { objective: "O6", q: "Manajanku yana buƙatar kallon dashboard ɗin ne kawai. Wane izini za ku ba shi?", options: ["Kalmar sirrinku", "Izinin gyara", "Izinin mallaka", "Izinin kallo kaɗai"], answer: 3, why: "Izinin kallo kaɗai yana bar shi ya gan shi ba tare da ya canja shi bisa kuskure ba." }
          ],
          sources: [DATA_STUDIO, DATAPLUS]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Gini, dubawa da rabawa",
        questions: [
          { objective: "O3", q: "Wane jadawali ne ke nuna babbar lamba ƊAYA, kamar jimlar sayarwa a wannan watan?", options: ["Jadawalin layi", "Card ko scorecard", "Taswira", "Tebur mai layuka 100"], answer: 1, why: "Card (Power BI) ko scorecard (Data Studio) yana nuna babbar lamba ɗaya." },
          { objective: "O3", q: "Sandunan jadawalin sanduna suna farawa daga 900 maimakon 0. Mece ce matsalar?", options: ["Ƙananan bambance-bambance suna kama da sun fi girma sosai fiye da yadda suke", "Babu; ya fi kyau a gani", "Launukan ba daidai ba ne", "Take ya yi tsawo sosai"], answer: 0, why: "Sandunan da ba sa farawa daga sifili suna ƙara girman bambance-bambance." },
          { objective: "O4", q: "A Power BI, me ake kira matattara a shafi?", options: ["Card", "Source", "Metric", "Slicer"], answer: 3, why: "Power BI yana kiran matattarar shafi slicers; Data Studio yana kiran su controls." },
          { objective: "O5", q: "Lambobi nawa ya kamata ku duba da tushensu kafin ku raba?", options: ["Babu; kayan aikin koyaushe daidai yake", "Take na shafi kawai", "Aƙalla 3, kamar jimla, kaya ɗaya da rana ɗaya", "Lambobin da manajanku ya tambaya kawai"], answer: 2, why: "Duba lambobi da yawa yana kama kurakuran matattara, maimaici da nau'in bayanai." },
          { objective: "O6", q: "Wace ce jimlar taƙaitawa mafi kyau don raba tare da dashboard?", options: ["\"Ga wasu jadawalai.\"", "\"Muffins sun fi kawo kuɗi a Oktoba, don haka za mu iya ƙara gasa su a ranakun Asabar.\"", "\"Na yi amfani da launuka da yawa.\"", "\"Ku kalle shi da kanku.\""], answer: 1, why: "Taƙaitawa mai kyau tana faɗin binciken da mataki da ake ba da shawara." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Gina Dashboard na Bayanai (Power BI da Data Studio)",
    questions: [
      { objective: "O1", q: "Mene ne dashboard?", options: ["Jerin kalmomin sirri", "Allo ɗaya na manyan lambobi da jadawalai da ke taimaka wa wani ya yanke shawara", "Wani nau'in dabarar lissafi (formula) ta spreadsheet", "Saitin firinta"], answer: 1, why: "Dashboard yana sa manyan lambobin wata shawara a allo ɗaya." },
      { objective: "O1", q: "Wace ce tambayar dashboard a sarari?", options: ["\"Nuna mini bayanai.\"", "\"Sa shi ya yi kyau.\"", "\"Komai game da kasuwancin.\"", "\"Waɗanne kayayyaki ne suka fi kawo kuɗi a kowane wata?\""], answer: 3, why: "Tambaya ɗaya ce takamaimai da dashboard zai iya amsawa." },
      { objective: "O1", q: "Ga kowace babbar lamba kuna rubuta sunanta, yadda ake lissafa ta da:", options: ["Lokacinta", "Launin da ta fi so", "Farashin kayan aikin", "Kalmar sirrinku"], answer: 0, why: "Babbar lamba tana buƙatar lokaci, kamar wannan watan, don ta sami ma'ana." },
      { objective: "O2", q: "A tebur mai tsari, kowane layi shi ne:", options: ["Jadawali", "Jimla", "Rikodi ɗaya, kamar sayarwa ɗaya", "Take"], answer: 2, why: "Layi ɗaya ga kowane rikodi da shafi ɗaya ga kowane fili shi ne tebur mai tsari." },
      { objective: "O2", q: "An rubuta kwanakin wata a takardarku a matsayin \"10/3/26\" da \"Oct 3\". Me za ku yi?", options: ["Ku bar duka biyun", "Ku goge shafin kwanan wata", "Ku ƙara salo na uku", "Ku tsara shafin ta yadda kowane kwanan wata zai zama kwanan wata na gaske a salo ɗaya"], answer: 3, why: "Tsarin kwanan wata ɗaya yana bar kayan aikin ya rarraba da tace bisa kwanan wata daidai." },
      { objective: "O2", q: "A ina kuke samun Power BI Desktop?", options: ["Shafin intanet na hukuma na Microsoft", "Hanyar haɗi a cikin tes daga baƙo", "Kowane shafin saukewa kyauta", "Tallar da ke tasowa (pop-up)"], answer: 0, why: "Ku sauke manhaja daga shafin hukuma na kamfanin kaɗai." },
      { objective: "O2", q: "A Data Studio, yaya kuke haɗa Google Sheet?", options: ["Ku aika takardar ga Google ta imel", "Ku ƙirƙiri data source da mahaɗin Google Sheets", "Ku buga ta ku ɗauki hotonta (scan)", "Ku sake rubuta kowace lamba"], answer: 1, why: "Mahaɗin Google Sheets yana haɗa takardar a matsayin data source." },
      { objective: "O3", q: "Wace tambaya ce ta dace da jadawalin layi?", options: ["Wane kaso na sayarwa ne burodi?", "Mece ce lambar wayarmu?", "Yaya sayarwar mako-mako ta canja a cikin watanni 3?", "Wane shago ne yake a wane gari?"], answer: 2, why: "Jadawalin layi yana nuna canji a kan lokaci." },
      { objective: "O3", q: "Wace tambaya ce ta dace da jadawalin sanduna da aka jera?", options: ["Wanne a cikin kayayyakinmu 6 ne ya fi sayuwa?", "Mece ce jimlar sayarwa yau?", "Ƙarfe nawa shagon yake buɗewa?", "Yaya sayarwa ta canja kowace sa'a?"], answer: 0, why: "Jadawalin sanduna yana kwatanta ƙungiyoyi; jerawa yana sa mafi girma ya zama mai sauƙin gani." },
      { objective: "O3", q: "Yaushe jadawalin pie zaɓi ne mai ma'ana?", options: ["Don nuna canji a cikin watanni 12", "Don nuna kason jimla da ƴan yankuna kaɗai", "Don kwatanta kayayyaki 15", "Don nuna lamba ɗaya"], answer: 1, why: "Pie yana nuna sassan jimla kuma ana iya karanta shi ne kawai da ƴan yankuna." },
      { objective: "O3", q: "Take mai kyau na jadawali:", options: ["Yana cewa \"Chart 1\"", "An bar shi babu komai", "Yana cikin ƙaramin rubutu sosai", "Yana faɗin abin da yake nunawa da lokacin"], answer: 3, why: "\"Sayarwa bisa kowane kaya, Oktoba\" yana faɗa wa mai kallo daidai abin da yake gani." },
      { objective: "O4", q: "A Data Studio, ana kiran matattara a shafi:", options: ["Slicer", "Data type", "Control", "Measure"], answer: 2, why: "Data Studio yana kiran matattarar shafi controls, kamar date range control." },
      { objective: "O4", q: "Mene ne gwajin minti ɗaya?", options: ["Ku yi wa wani tambayar dashboard ku gani ko zai iya amsa ta daga shafin cikin ƙasa da minti ɗaya", "Ku gina dashboard ɗin cikin minti ɗaya", "Ku nuna shafin na daƙiƙa ɗaya", "Ku sake kunna kwamfutar"], answer: 0, why: "Idan mai kallo zai iya amsawa da sauri, tsarin yana aiki." },
      { objective: "O4", q: "Kun canja matattarar Category kuma kowane kati da jadawali ya sabunta. Wannan yana nuna:", options: ["Bayanan ba daidai ba ne", "Matattara suna aiki a dukkan shafin", "Dashboard ɗin yana buƙatar ƙarin shafuka", "Launukan sun lalace"], answer: 1, why: "Komai yana canjawa tare yana nufin an haɗa matattarar da dukkan hotunan (visuals)." },
      { objective: "O5", q: "Jimlar dashboard ita ce $1,240 kuma SUM a takardar na kwanakin wata iri ɗaya shi ne $1,240. Wannan yana nufin:", options: ["An duba jimlar kuma ta yi daidai", "Dashboard ɗin ba daidai ba ne", "Ya kamata ku goge takardar", "Kuna buƙatar sabon kayan aiki"], answer: 0, why: "Yin daidai da tushe ita ce hanyar tabbatar da lamba." },
      { objective: "O5", q: "Wani kati yana nuna 52 alhali kuna tsammanin jimlar sayarwa ta $1,240. Dalili mai yiwuwa shi ne:", options: ["Take na shafi", "Launukan sanduna", "An saita katin a Count maimakon Sum", "Girman rubutu"], answer: 2, why: "Count yana ba da adadin layuka, ba jimlar ƙimomin ba." },
      { objective: "O5", q: "Yaushe ya kamata ku duba lambobi?", options: ["Ba a taɓa ba", "Sai bayan shugaba ya gano kuskure", "Sau ɗaya a shekara kawai", "Kafin kowa ya ga dashboard ɗin"], answer: 3, why: "Dubawa da farko yana hana lambobi marasa daidai su kai ga shawarwari marasa daidai." },
      { objective: "O6", q: "Wanne ne kada ya TAƁA shiga dashboard na atisaye?", options: ["Sayarwar gidan burodi ƙirƙirarra", "Sunaye da lambobin waya na kwastomomi na gaske", "Rukunan kayayyaki", "Kwanakin wata"], answer: 1, why: "Bayanan atisaye suna zama ƙirƙirarru; dole a kare bayanan sirri na gaske." },
      { objective: "O6", q: "Me wannan kwas ɗin yake ba ku?", options: ["Takardar shaidar PL-300", "Takardar shaidar CompTIA Data+", "Lasisin tuƙi", "Shiri da dashboard na aikin nuni (portfolio); ana yin jarabawoyin daban"], answer: 3, why: "Kwas ɗin yana shirya ku; Microsoft da CompTIA suna ba da takardun shaidarsu bayan jarabawoyinsu." },
      { objective: "O6", q: "Taƙaitawa mai kyau mai jimloli 3 ta haɗa da abin da dashboard ke nunawa, babban bincike da:", options: ["Mataki ɗaya da ake ba da shawara", "Adireshin gidanku", "Tarihin kayan aikin", "Jerin kowane layi"], answer: 0, why: "Mataki yana mayar da binciken zuwa shawara." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 2, 3, 6, 7, 9, 11, 15, 17] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake dubawa.",
    criteria: [
      { name: "Tambaya da manyan lambobi", objective: "O1", notYet: "Babu tambaya a sarari, ko lambobi fiye da 5 ba tare da lokaci ba.", meets: "Tambaya mai jimla ɗaya, an ambaci masu kallo, manyan lambobi 3 zuwa 5 kowanne da yadda ake lissafa shi da lokaci.", exceeds: "Yana kuma ambaton shawarar da dashboard ke taimakawa da dalilin da yasa kowace lamba take da muhimmanci gare ta." },
      { name: "Bayanai masu tsari", objective: "O2", notYet: "Maimaici, layuka marasa komai, kwanakin wata masu gauraye ko lambobi a matsayin rubutu sun rage.", meets: "Layin kanun shafi ɗaya, layi ɗaya ga kowane rikodi, nau'in bayanai daidai, babu maimaici.", exceeds: "Yana ajiye takardar asali da gajeren rubutu na kowane gyara da aka yi." },
      { name: "Jadawalai masu dacewa", objective: "O3", notYet: "Nau'in jadawalai bai dace da tambayoyin ba, ko babu take.", meets: "Aƙalla jadawalai 2 da suka dace da tambayoyinsu, da take a sarari; sanduna suna farawa daga sifili.", exceeds: "Zai iya bayyana dalilin zaɓar kowane nau'in jadawali maimakon wani." },
      { name: "Tsari da matattara", objective: "O4", notYet: "Babu katuna, ko matattara ba sa sabunta kowane hoto (visual).", meets: "Katunan manyan lambobi 3 ko fiye a sama, matattarar kwanan wata da wata matattara ɗaya da ke sabunta komai; ya ci gwajin minti ɗaya.", exceeds: "Tsari mai tsabta, a daidaitacce, ba ƙarin abu; mai kallo yana amsawa cikin ƙasa da minti ɗaya sosai." },
      { name: "An duba lambobi", objective: "O5", notYet: "Ba a duba wata lamba da tushenta ba.", meets: "An duba lambobi 3 an rubuta su; an gyara duk wanda bai yi daidai ba.", exceeds: "Yana bayyana dalilin rashin daidaiton da ya gano da yadda ya gyara shi." },
      { name: "An raba lafiya tare da taƙaitawa", objective: "O6", notYet: "An raba da izinin gyara, yana ɗauke da bayanan sirri, ko babu taƙaitawa.", meets: "An raba da izinin kallo kaɗai ko an fitar zuwa PDF, babu bayanan sirri, taƙaitawa mai jimloli 3 da bincike da mataki.", exceeds: "Taƙaitawar a shirye take a karanta ta da babbar murya a hirar neman aiki a matsayin aikin nuni (portfolio)." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka gina dashboard da ya cika ma'aunin rubric",
      "Masu koyo da suka ƙara dashboard ɗin a takardar bayanin aiki (CV), aikin nuni (portfolio) ko shafin LinkedIn cikin kwanaki 30",
      "Masu koyo da suka tsara ranar jarabawa ko suka ci PL-300 ko CompTIA Data+, ko suka fara aikin bayanai ko rahoto, cikin watanni 6 (binciken biyo baya)",
      "Masu ƙananan kasuwanci da suka yi amfani da dashboard don yanke shawara kan kaya, ma'aikata ko farashi"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta mai intanet: Windows don Power BI Desktop, ko kowace kwamfuta mai burauza don Data Studio",
      "Asusun Google kyauta (Google Sheets da Data Studio), da Power BI Desktop daga shafin hukuma na Microsoft idan ana amfani da Windows",
      "Bayanan sayarwar gidan burodi ƙirƙirarru (masu koyo suna rubuta layuka 15 ko fiye) ko wasu bayanai ƙirƙirarru na fannin su",
      "Takarda da alƙalami don tsarin dashboard",
      "Kusan awa 2 zuwa 3 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku fara duba na'urori: masu koyo da ke amfani da Mac, Chromebook ko kwamfutocin ɗakin karatu suna amfani da Data Studio; masu amfani da Windows za su iya zaɓar kowane kayan aiki.",
      "Ku ba da gwajin farko kafin Darasi na 1, ku kwatanta shi da jarabawar ƙarshe.",
      "Ku sa masu koyo su ajiye shafin tsarinsu na Darasi na 1; shi ne jagorar dukkan aikin ƙarshe.",
      "Kada ku taɓa amfani da bayanan gaske na kwastomomi, marasa lafiya ko ma'aikata a aji. Ku tunatar da tsoffin sojoji da masu neman aiki su yi amfani da lambobi ƙirƙirarru a ayyukan nuni (portfolio) ma.",
      "Ku ba da maki ga dashboard na ƙarshe da ma'aunin rubric, kuma ku sa kowane mai koyo ya gabatar da shi cikin daƙiƙa 60, a matsayin atisayen hirar neman aiki.",
      "Ku nuna wa masu koyo shafukan hukuma na PL-300 da CompTIA Data+ don abin da jarabawar ta ƙunsa a yanzu, tsara rana da kuɗi; kada ku faɗi farashi daga ƙwaƙwalwa."
    ]
  }
};
