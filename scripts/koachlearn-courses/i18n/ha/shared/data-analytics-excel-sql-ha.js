"use strict";

// Koach Learn course, Hausa (ha) translation of shared/data-analytics-excel-sql.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.
// SQL, spreadsheet formulas and menu names stay exactly as in the English.

const DATAPLUS = { name: "CompTIA Data+ (DA0-002): shafin hukuma", url: "https://www.comptia.org/en-us/certifications/data/" };
const SQLITE_ONLINE = { name: "SQLite Online (editan SQL a burauzar intanet)", url: "https://sqliteonline.com/" };
const DB_BROWSER = { name: "DB Browser for SQLite (shirin kwamfuta kyauta, open-source)", url: "https://sqlitebrowser.org/" };

module.exports = {
  id: "data-analytics-excel-sql-ha",
  lang: "ha",
  translationOf: "data-analytics-excel-sql",
  category: "Workforce Development",
  name: "Nazarin Bayanai da Spreadsheet da SQL",
  skills: "Yin tambaya kan bayanai, Tsabtace bayanai, Pivot table da COUNTIFS/SUMIFS, Rubuta tambayoyin SQL, Haɗa rukuni da haɗa teburori, Bayar da rahoton sakamako",
  outcome: "aiki kamar mai nazarin bayanai (data analyst) na matakin farko: mayar da buƙatar kasuwanci zuwa tambaya a sarari, tsabtace spreadsheet mai cike da kurakurai, taƙaita shi da pivot table da SUMIFS, amsa tambayoyi da SQL (SELECT, WHERE, ORDER BY, GROUP BY da JOIN), da rubuta gajerun sakamako na gaskiya da za ku iya nuna wa mai ɗaukar aiki.",
  about: [
    "Masu nazarin bayanai suna mayar da layukan lambobi zuwa amsoshin da mutane za su iya aiki da su: wane shago ne ya fi sayarwa, wane shiri ne ya fi taimakon mutane, ina kuɗi ke tafiya. Kusan kowane irin mai ɗaukar aiki yana buƙatar wannan, daga shaguna da asibitoci zuwa ofisoshin birni da ƙungiyoyin agaji.",
    "Za ku yi amfani da kayan aiki biyu da masu nazari ke amfani da su kullum: spreadsheet (Google Sheets kyauta ne, ko Excel) da SQL, harshen yin tambayoyi ga rumbun bayanai (database). Za ku yi atisayen SQL kyauta a burauzar intanet ɗinku. Duk bayanan atisaye ƙirƙirarru ne kuma ƙanana, don haka kuna iya duba kowace amsa da hannu.",
    "Idan kuna son takardar shaida (credential), CompTIA Data+ ɗaya ce ta masu nazarin bayanai na matakin farko. Wannan kwas yana taimaka muku shiryawa kuma yana gina ƙwarewar da take ƙunshe, amma ba ya ba da Data+ ko wata takardar shaida; ku duba shafin hukuma don jarabawar yanzu, farashi da hanyoyin zana ta.",
    "Yana da kyau ku san spreadsheet na farko tukuna (kwas ɗin \"Excel da Spreadsheet don Aiki\"). Kowane darasi yana ɗaukar kusan minti biyar, yana ƙarewa da aikin \"Gwada yanzu\" da tambayoyi biyu, kuma akwai gwajin ilimi bayan kowane babi da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku yi aikin nazari mai shafi ɗaya don tarin ayyukanku (portfolio): (1) tambaya a sarari game da bayanan sayarwa na atisaye (ko ƙaramin bayanai na jama'a da kuka zaɓa); (2) bayanan da aka tsabtace a Google Sheets ko Excel, da shafin Revenue (kuɗin shiga) da pivot table da ke amsa tambayar; (3) aƙalla tambayoyin SQL biyu da kuka gudanar, ɗaya da WHERE da ORDER BY, ɗaya kuma da GROUP BY, tare da sakamakonsu; (4) sakamako uku a jimloli masu sauƙi masu lambobi, iyaka ɗaya ta bayanan, da mataki ɗaya na gaba da kuke ba da shawara; da (5) layi ɗaya na takardar bayanin aiki (résumé) da ke bayyana aikin.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Masu neman aiki, matasa, tsofaffin sojoji (veterans) da masu canja sana'a da ke neman ayyukan bayanai na farko (mai nazarin bayanai, mataimakin rahoto, mai nazarin ayyuka ko kasuwanci), ko masu son ƙwarewar bayanai a aikinsu na yanzu. Asalinsu ya bambanta; da yawa sun yi amfani da spreadsheet amma ba su taɓa amfani da SQL ba.",
    startingPoint: "Suna iya shigar da bayanai, amfani da SUM da AVERAGE da jera abubuwa a spreadsheet. Ba su taɓa tsabtace bayanai masu kurakurai, gina pivot table ko rubuta query ba. Kaɗan ne suka san yadda masu nazari ke gabatar da sakamako.",
    gap: "Ayyukan bayanai na farko suna neman nazari da spreadsheet da SQL na farko, da bayyana sakamako a sarari. Masu koyo suna buƙatar atisaye na hannu kan bayanai masu kama da na gaske masu kurakurai, da kayan aiki kyauta, da ƙaramin aiki da za su iya nuna wa mai ɗaukar aiki.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; an bayyana kowace kalma ta musamman",
      "Na'urori: kwamfuta mai burauzar intanet; allon waya ya yi ƙanƙanta don atisayen SQL",
      "Kayan aiki kyauta kaɗai: Google Sheets (ko Excel idan suna da shi) da editan SQL kyauta a burauzar",
      "Bayanan atisaye ƙirƙirarru ne; kada a taɓa saka bayanan abokan ciniki, marasa lafiya ko na mai ɗaukar aiki na gaske a kayan aikin intanet",
      "Lokaci: darussa na minti 4 zuwa 6; aikin ƙarshe yana ɗaukar ƙarin awa ɗaya ko biyu"
    ],
    prerequisites: "Ƙwarewar spreadsheet na farko. Kwas ɗin \"Excel da Spreadsheet don Aiki\" yana koyar da su."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan manaja ya ba ku wata buƙatar kasuwanci", action: "rubuta tambayar bayanai a sarari wadda za a iya auna ta, da jera bayanan da ake buƙata don amsa ta", standard: "da wane ko mene, abin aunawa da lokaci" },
    { id: "O2", condition: "Idan an ba ku spreadsheet mai kurakurai", action: "tsabtace bayanan ta hanyar cire maimaitattun layuka, cire ƙarin sarari da daidaita sunaye da tsari", standard: "ba tare da sauran maimaitattun layuka ko sunaye marasa daidaito ba" },
    { id: "O3", condition: "Idan kuna da bayanai masu tsabta a Google Sheets ko Excel", action: "gina pivot table da dabarar SUMIFS ko COUNTIFS da ke amsa tambayar", standard: "da jimlolin da suka yi daidai da binciken hannu" },
    { id: "O4", condition: "Ta amfani da editan SQL kyauta da teburin atisaye", action: "rubuta tambayoyin SELECT da WHERE da ORDER BY da ke kawo layukan da aka nema", standard: "suna kawo ainihin layukan da suka dace a jerin da ya dace" },
    { id: "O5", condition: "Ta amfani da teburori biyu na atisaye", action: "rubuta tambayoyin da ke amfani da GROUP BY tare da SUM, COUNT ko AVG, da JOIN tsakanin teburorin", standard: "da sakamakon da ya yi daidai da binciken hannu" },
    { id: "O6", condition: "Idan kuna da sakamakon nazarinku", action: "rubuta sakamako uku masu lambobi, iyaka ɗaya ta bayanan da mataki ɗaya na gaba", standard: "a jimloli masu sauƙi da manaja zai iya aiki da su" }
  ],
  chapters: [
    {
      name: "Babi na 1: Nazari a spreadsheet",
      lessons: [
        {
          title: "Aikin mai nazari: daga buƙata zuwa tambaya a sarari",
          objectives: ["O1"],
          minutes: 5,
          goal: "Rubuta tambayar bayanai a sarari wadda za a iya auna ta daga buƙatar manaja.",
          text: [
            "Masu nazari suna bin hanya mai sauƙi: yin tambaya a sarari, samun bayanai, tsabtace su, nazarin su, da bayyana ma'anarsu. Yawancin aikin yana farawa daga tambayar. Buƙata marar sarari tana kawo amsa marar sarari.",
            "Manaja ya ce, \"Yaya sayarwa take tafiya?\" Wannan buƙata ce, ba tambaya ba. Tambaya a sarari tana ambaton wane ko mene, abin aunawa da lokaci: \"Wane ne a cikin shagunanmu uku ya fi samun kuɗin shiga daga 1 zuwa 4 ga Oktoba?\" Yanzu kun san bayanan da kuke buƙata: ranaku, shaguna, yawan kaya da farashi.",
            "Tambayoyi masu kyau ana iya auna su (za ku iya amsa su da lamba), suna da takamaimai, kuma suna da amfani (amsar tana taimaka wa wani ya yanke shawara). Ku rubuta bayanan da kuke buƙata kafin ku buɗe kowane fayil.",
            "Ayyukan da ke amfani da waɗannan ƙwarewa sun haɗa da mai nazarin bayanai, mai nazarin rahoto, mai nazarin ayyuka da mai nazarin kasuwanci. Idan kuna son takardar shaida, CompTIA Data+ (jarabawa DA0-002 lokacin da muka duba a Oktoba 2026) tana ƙunshe da ra'ayoyin bayanai, shirya bayanai, nazari, zane-zane da rahoto, da kula da bayanai. Ku duba shafin hukuma don bayanan yanzu."
          ],
          steps: ["Ku rubuta buƙatar manajan da kalmominsa.", "Ku mayar da ita tambaya mai wane ko mene, abin aunawa da lokaci.", "Ku duba: lamba za ta iya amsa ta?", "Ku jera shafukan (columns) bayanan da kuke buƙata."],
          words: [["Mai nazarin bayanai (data analyst)", "mutumin da ke mayar da bayanai zuwa amsoshin da mutane za su iya amfani da su."], ["Za a iya auna shi (measurable)", "za a iya amsa shi da lamba ko ƙidaya."], ["Dataset (tarin bayanai)", "rukunin bayanai, sau da yawa tebur mai layuka da shafuka."], ["Revenue (kuɗin shiga)", "kuɗin da ke shigowa daga sayarwa: yawan kaya sau farashi."]],
          slides: [
            { title: "Hanyar mai nazari", bullets: ["Tambaya, samun bayanai, tsabtacewa, nazari, bayyanawa", "Tana farawa daga tambaya a sarari"] },
            { title: "Buƙata da tambaya", bullets: ["Buƙata: \"Yaya sayarwa take tafiya?\"", "Tambaya: \"Wane shago ne ya fi samun kuɗin shiga, 1 zuwa 4 ga Oktoba?\""] },
            { title: "Tambaya a sarari tana da", bullets: ["Wane ko mene", "Abin aunawa", "Lokaci"] },
            { title: "Takardar shaida da za ku shirya mata", bullets: ["CompTIA Data+ (DA0-002, an duba Oktoba 2026)", "Wannan kwas yana shiryawa; CompTIA ce ke ba da ita", "Ku duba comptia.org don bayanan yanzu"] }
          ],
          sources: [DATAPLUS],
          tryIt: "Ku mayar da kowace buƙata zuwa tambaya a sarari, ku jera bayanan da ake buƙata: (a) \"Shin ma'ajiyar abinci ta agaji (food pantry) ta fi cika kwanan nan?\" (b) \"Wane kaya ya kamata mu ƙara oda?\" Ku rubuta kowace da wane ko mene, abin aunawa da lokaci.",
          youCanNow: "mayar da buƙata marar sarari zuwa tambaya a sarari wadda za a iya auna ta, da jera bayanan da take buƙata.",
          quickCheck: [
            { objective: "O1", q: "Wace ce tambayar bayanai mafi sarari?", options: ["\"Yaya kasuwanci?\"", "\"Faɗa mini game da sayarwa.\"", "\"Abubuwa suna da kyau?\"", "\"Wane kaya ne aka fi sayar da yawansa a Satumba a shagon North?\""], answer: 3, why: "Tana ambaton mene (kaya), abin aunawa (yawa), wuri da lokaci." },
            { objective: "O1", q: "Tambayarku ita ce \"Wane shago ne ya fi samun kuɗin shiga a makon jiya?\" Wane bayani kuke buƙata?", options: ["Shago, rana, yawa da farashin kowace sayarwa", "Sunayen shaguna kawai", "Adireshin gidajen ma'aikata", "Yanayin iska"], answer: 0, why: "Kuɗin shiga yana buƙatar yawa da farashi; shago da rana suna raba shi bisa wuri da lokaci." }
          ]
        },
        {
          title: "Tsabtace bayanai masu kurakurai a spreadsheet",
          objectives: ["O2"],
          minutes: 6,
          goal: "Tsabtace tebur mai kurakurai ta hanyar cire maimaitattun layuka, cire sarari da gyara sunaye.",
          text: [
            "Bayanan gaske suna da kurakurai. Ana iya rubuta shago ɗaya a matsayin \"North\", \"north\" da \" North\" (da sarari). Ana iya shigar da sayarwa ɗaya sau biyu. Ranaku na iya zama da tsari daban-daban. Idan ba ku tsabtace su ba, jimlolinku za su yi kuskure, domin spreadsheet yana ɗaukar \"North\" da \"north \" a matsayin shaguna biyu daban.",
            "A Google Sheets, ku zaɓi bayananku ku yi amfani da Data > Data cleanup > Remove duplicates, da Data > Data cleanup > Trim whitespace. A Excel, ku yi amfani da Data > Remove Duplicates, da dabarar TRIM don cire ƙarin sarari. Ku yi amfani da Find and replace don gyara sunaye, misali ku canja \"north\" zuwa \"North\".",
            "Ku sa kowane shafi (column) ya zama iri ɗaya: ranaku a matsayin ranaku, lambobi a matsayin lambobi (ba tare da rubuta \"$\" ba), rubutu da rubutun kalma ɗaya kowane lokaci. Sannan ku ƙara duk shafin da kuke buƙata, kamar Revenue = Qty sau Price (misali =D2*E2).",
            "Koyaushe ku ajiye kwafin ainihin bayanai (raw data) a shafinsa (tab) na daban, ku tsabtace kwafi. Ku rubuta kowane canji da kuka yi, don wani ya iya amincewa da aikinku ya maimaita shi."
          ],
          steps: ["Ku kwafi ainihin bayanai zuwa sabon tab mai suna Clean.", "Ku cire maimaitattun layuka.", "Ku cire ƙarin sarari.", "Ku gyara sunaye da Find and replace don kowane suna ya zama da rubutu ɗaya.", "Ku sa kowane shafi ya zama iri ɗaya: ranaku, lambobi ko rubutu.", "Ku ƙara shafukan lissafi, kamar Revenue = Qty * Price.", "Ku rubuta gajeren jerin canje-canjen da kuka yi."],
          words: [["Tsabtace bayanai (data cleaning)", "gyara kurakurai, maimaitawa da shigarwa marasa daidaito don sakamako ya yi daidai."], ["Maimaitacce (duplicate)", "layin da ya bayyana fiye da sau ɗaya bisa kuskure."], ["Whitespace (ƙarin sarari)", "ƙarin sarari kafin ko bayan rubutu da ba a iya gani cikin sauƙi."], ["Raw data (ainihin bayanai)", "bayanan kamar yadda kuka karɓe su, kafin kowane canji."]],
          slides: [
            { title: "Me yasa za a tsabtace?", bullets: ["Ana ƙidaya \"North\", \"north\" da \" North\" a matsayin daban-daban", "Maimaitattun layuka suna ƙidaya sayarwa sau biyu", "Bayanai masu kurakurai suna kawo jimloli marasa daidai"] },
            { title: "Kayan tsabtacewa", bullets: ["Sheets: Data > Data cleanup > Remove duplicates", "Sheets: Data > Data cleanup > Trim whitespace", "Excel: Remove Duplicates da TRIM", "Find and replace don gyara sunaye"] },
            { title: "Iri ɗaya a kowane shafi", bullets: ["Ranaku a matsayin ranaku, lambobi a matsayin lambobi", "Ku ƙara Revenue = Qty * Price"] },
            { title: "Kyawawan halaye", bullets: ["Ku ajiye ainihin bayanai a tab nasu", "Ku rubuta kowane canji"] }
          ],
          tryIt: "A Google Sheets, ku rubuta wannan teburin atisaye da kanun Date, Store, Item, Qty, Price: 2026-10-01, North, Coffee, 3, 2.50 / 2026-10-01, South, Bagel, 5, 1.75 / 2026-10-02, north , Bagel, 2, 1.75 / 2026-10-02, East, Coffee, 6, 2.50 / 2026-10-02, East, Coffee, 6, 2.50 / 2026-10-03, South, Coffee, 4, 2.50 / 2026-10-03, North, Juice, 1, 3.00 / 2026-10-04, East, Bagel, 8, 1.75 / 2026-10-04, South, Juice, 2, 3.00. Ku kwafe shi zuwa tab mai suna Clean, ku cire maimaitaccen layin East, ku gyara \"north \" zuwa \"North\", ku ƙara shafin Revenue. Ya kamata ku sami layuka 8.",
          youCanNow: "tsabtace tebur mai kurakurai don kowace jimla da kuka gina a kansa ta yi daidai.",
          quickCheck: [
            { objective: "O2", q: "Jimlar \"North\" ta yi ƙasa sosai. Wasu layuka suna cewa \"north \" da sarari. Me za ku yi?", options: ["Ku goge waɗannan layukan", "Ku cire sararin ku sa sunan ya zama \"North\" ko'ina", "Ku ƙyale shi", "Ku ƙara girman rubutun"], answer: 1, why: "Cire sarari da gyara sunaye suna sa dukkan layukan North su ƙidayu tare." },
            { objective: "O2", q: "Kafin tsabtacewa, me ya kamata ku yi da ainihin bayanai?", options: ["Ku goge su", "Ku aika su ta imel ga kowa", "Ku ajiye kwafi a tab nasu ku tsabtace kwafi", "Ku buga su a takarda"], answer: 2, why: "Ajiye ainihin bayanai yana ba ku damar duba ko sake yin aikinku." }
          ]
        },
        {
          title: "Taƙaitawa da pivot table, SUMIFS da COUNTIFS",
          objectives: ["O3"],
          minutes: 6,
          goal: "Gina pivot table da dabarar SUMIFS da ke amsa tambayarku.",
          text: [
            "Pivot table yana taƙaita babban tebur cikin daƙiƙoƙi: misali, jimlar kuɗin shiga na kowane shago. A Google Sheets, ku zaɓi bayananku masu tsabta ku zaɓi Insert > Pivot table. A Excel, ku zaɓi Insert > PivotTable. Ku saka Store a ƙarƙashin Rows da Revenue a ƙarƙashin Values, an taƙaita ta SUM.",
            "Da bayanan atisaye da aka tsabtace, pivot ɗin ya kamata ya nuna East 29.00, South 24.75 da North 14.00. Don haka East ne ya fi samun kuɗin shiga daga 1 zuwa 4 ga Oktoba.",
            "Dabaru (formulas) suna iya amsa tambaya ɗaya a lokaci ɗaya. SUMIFS yana tara lambobin da suka dace da wata ƙa'ida: =SUMIFS(F:F, B:B, \"South\") yana tara shafin Revenue (F) inda shafin Store (B) ya ce South, sakamakon 24.75. COUNTIFS yana ƙidaya layukan da suka dace: =COUNTIFS(C:C, \"Coffee\") yana ƙidaya sayarwar Coffee, sakamakon 3. AVERAGEIFS yana aiki haka don matsakaici (average).",
            "Koyaushe ku duba lamba ɗaya da hannu. Idan pivot ɗin da binciken hannunku ba su yi daidai ba, wataƙila bayanan har yanzu suna buƙatar tsabtacewa."
          ],
          steps: ["Ku zaɓi bayanai masu tsabta, har da kanun.", "Ku saka pivot table a sabon shafi.", "Ku saka rukunin (Store) a Rows.", "Ku saka abin aunawa (Revenue) a Values, an taƙaita ta SUM.", "Ku jera shi daga mafi girma zuwa mafi ƙanƙanta.", "Ku duba jimla ɗaya da hannu ko da SUMIFS."],
          words: [["Pivot table", "kayan aikin da ke haɗa rukuni da taƙaita tebur, misali jimloli bisa shago."], ["SUMIFS", "dabarar da ke tara lambobin da suka dace da ƙa'ida ɗaya ko fiye."], ["COUNTIFS", "dabarar da ke ƙidaya layukan da suka dace da ƙa'ida ɗaya ko fiye."], ["Abin aunawa (measure)", "lambar da kuke tarawa ko kuke neman matsakaicinta, kamar kuɗin shiga."]],
          slides: [
            { title: "Pivot table", bullets: ["Sheets: Insert > Pivot table", "Excel: Insert > PivotTable", "Rows: Store; Values: SUM na Revenue"] },
            { title: "Amsar atisaye", bullets: ["East 29.00, South 24.75, North 14.00", "East ne ya fi samun kuɗin shiga, 1 zuwa 4 ga Oktoba"] },
            { title: "Dabaru masu ƙa'idoji", bullets: ["=SUMIFS(F:F, B:B, \"South\") yana ba da 24.75", "=COUNTIFS(C:C, \"Coffee\") yana ba da 3", "AVERAGEIFS don matsakaici"] },
            { title: "Ku duba da hannu", bullets: ["Ku tara rukuni ɗaya da kanku", "Ba su yi daidai ba? Ku sake tsabtace bayanan"] }
          ],
          tryIt: "Ta amfani da bayanan atisayenku masu tsabta, ku gina pivot table na kuɗin shiga bisa shago ku jera shi. Sannan ku rubuta SUMIFS na East da COUNTIFS na Bagel. Ku duba: East ya kamata ya zama 29.00, Bagel kuma ya ƙidaya layuka 3. Ku yi pivot na biyu na Qty bisa Item.",
          youCanNow: "taƙaita tebur da pivot table, da duba shi da SUMIFS da COUNTIFS.",
          quickCheck: [
            { objective: "O3", q: "A pivot table na kuɗin shiga bisa shago, ina Store yake tafiya?", options: ["Rows", "Values", "Filters kawai", "Ba a amfani da shi"], answer: 0, why: "Rukunin da kuke haɗawa da shi yana tafiya a Rows; lambar da kuke tarawa tana tafiya a Values." },
            { objective: "O3", q: "Wace dabara ce ke tara Revenue (shafi F) na shagon North kaɗai (shafi B)?", options: ["=SUM(F:F)", "=COUNTIFS(B:B, \"North\")", "=AVERAGE(B:B)", "=SUMIFS(F:F, B:B, \"North\")"], answer: 3, why: "SUMIFS yana tara kewayon tarawa (F) inda kewayon ƙa'ida (B) ya yi daidai da North." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Nazari a spreadsheet",
        questions: [
          { objective: "O1", q: "Wanne ne buƙata, ba tambaya a sarari ba tukuna?", options: ["\"Yaya muke tafiya?\"", "\"Wane shago ne ya fi samun kuɗin shiga a Oktoba?\"", "\"Sayarwar Coffee nawa aka yi ranar 2 ga Oktoba?\"", "\"Mene ne matsakaicin girman oda a makon jiya?\""], answer: 0, why: "Ba shi da abin aunawa ko lokaci, don haka lamba ba za ta iya amsa shi ba tukuna." },
          { objective: "O2", q: "An shigar da sayarwa sau biyu. Me zai faru idan ba ku cire maimaicin ba?", options: ["Babu abin da zai canja", "Jimlar za ta ƙidaya wannan sayarwa sau biyu", "Spreadsheet zai gyara shi", "Sayarwar za ta ɓace"], answer: 1, why: "Maimaitattun layuka suna ƙidaya sau biyu, don haka jimloli suna fitowa sun yi yawa." },
          { objective: "O2", q: "Wane menu na Google Sheets ne ke cire ƙarin sarari?", options: ["Insert > Chart", "Format > Theme", "Data > Data cleanup > Trim whitespace", "File > Print"], answer: 2, why: "Trim whitespace yana cire sarari kafin da bayan rubutu." },
          { objective: "O3", q: "Me =COUNTIFS(C:C, \"Juice\") yake kawowa a bayanan atisaye masu tsabta?", options: ["1", "3", "8", "2"], answer: 3, why: "Juice yana cikin layuka biyu (North ranar 3 ga Oktoba da South ranar 4 ga Oktoba)." },
          { objective: "O3", q: "Jimlar pivot ɗinku ta South ba ta yi daidai da binciken hannunku ba. Mene ne dalili mafi yiwuwa?", options: ["Bayanan har yanzu suna da maimaici ko suna marar daidaito", "Pivot table ba ya iya tarawa", "Kuna buƙatar babban allo", "Binciken hannu koyaushe kuskure ne"], answer: 0, why: "Rashin daidaito yawanci yana nuna bayanan da har yanzu suke buƙatar tsabtacewa." }
        ]
      }
    },
    {
      name: "Babi na 2: SQL da bayyana sakamako",
      lessons: [
        {
          title: "Tambayoyinku na farko na SQL: SELECT, WHERE da ORDER BY",
          objectives: ["O4"],
          minutes: 6,
          goal: "Rubuta tambayoyin SELECT da WHERE da ORDER BY a editan SQL kyauta.",
          text: [
            "Manyan ƙungiyoyi suna ajiye bayanai a rumbun bayanai (database), ba a spreadsheet ba. SQL (ana yawan furta shi \"sequel\") shi ne harshen yin tambayoyi ga rumbun bayanai. Query tambaya ɗaya ce. SQL yana kama da Turanci mai sauƙi, kuma kusan kowane aikin bayanai yana amfani da shi.",
            "Kuna iya yin atisaye kyauta a burauzar ku a SQLite Online (sqliteonline.com): ku rubuta SQL a editan ku danna Run. Yana iya ba da ƙarin abubuwa na kuɗi; ba kwa buƙatar su. DB Browser for SQLite zaɓi ne kyauta na kwamfuta (open-source). Ku yi amfani da bayanan atisaye kaɗai a kayan aikin intanet, kada ku taɓa amfani da bayanan abokan ciniki na gaske.",
            "Ku ƙirƙiri teburin atisaye ta hanyar gudanar da: CREATE TABLE sales (id INTEGER, sale_date TEXT, store TEXT, item TEXT, qty INTEGER, price REAL); sannan INSERT INTO sales VALUES (1,'2026-10-01','North','Coffee',3,2.50),(2,'2026-10-01','South','Bagel',5,1.75),(3,'2026-10-02','North','Bagel',2,1.75),(4,'2026-10-02','East','Coffee',6,2.50),(5,'2026-10-03','South','Coffee',4,2.50),(6,'2026-10-03','North','Juice',1,3.00),(7,'2026-10-04','East','Bagel',8,1.75),(8,'2026-10-04','South','Juice',2,3.00);",
            "Yanzu ku tambaya. SELECT * FROM sales; yana nuna kowane layi. SELECT item, qty FROM sales WHERE store = 'North'; yana nuna kayan North kaɗai. SELECT * FROM sales WHERE qty >= 4 ORDER BY qty DESC; yana nuna manyan sayarwa huɗu, mafi girma da farko (8, 6, 5, 4). Rubutu yana cikin alamar ambato guda (' '); lambobi ba sa ciki."
          ],
          steps: ["Ku buɗe editan SQL kyauta a burauzar ku.", "Ku gudanar da layin CREATE TABLE, sannan layin INSERT.", "Ku gudanar da SELECT * FROM sales; don ganin dukkan layuka 8.", "Ku ƙara WHERE don ajiye layukan da kuke so kaɗai.", "Ku ƙara ORDER BY don jerawa; ku ƙara DESC don mafi girma da farko.", "Ku duba sakamakon ta hanyar kallon layukan da kanku."],
          words: [["Rumbun bayanai (database)", "ma'ajiyar bayanai mai tsari, wadda ake ajiye ta a teburori."], ["SQL", "Structured Query Language: harshen yin tambayoyi ga rumbun bayanai."], ["Query", "tambaya ɗaya da aka rubuta da SQL."], ["SELECT / FROM", "SELECT yana ambaton shafukan da kuke so; FROM yana ambaton teburin."], ["WHERE", "yana ajiye layukan da suka dace da ƙa'ida kaɗai."], ["ORDER BY", "yana jera sakamako; DESC yana nufin mafi girma da farko."]],
          slides: [
            { title: "SQL a kalmomi masu sauƙi", bullets: ["Harshen yin tambayoyi ga rumbun bayanai", "Tambaya ɗaya = query ɗaya", "Kusan kowane aikin bayanai yana amfani da shi"] },
            { title: "Atisaye kyauta", bullets: ["SQLite Online a burauzar ku: ku rubuta, sannan Run", "DB Browser for SQLite a kwamfutarku", "Bayanan atisaye kaɗai"] },
            { title: "Tambayoyi uku", bullets: ["SELECT * FROM sales;", "SELECT item, qty FROM sales WHERE store = 'North';", "... WHERE qty >= 4 ORDER BY qty DESC;"] },
            { title: "Ƙa'idojin da za ku tuna", bullets: ["Rubutu a cikin alamar ambato guda: 'North'", "Lambobi ba tare da alamar ambato ba", "Ku ƙare kowace query da ;"] }
          ],
          sources: [SQLITE_ONLINE, DB_BROWSER],
          tryIt: "Ku ƙirƙiri teburin sales ku gudanar da tambayoyin uku. Sannan ku rubuta naku: dukkan sayarwar Coffee, an jera bisa qty daga mafi girma zuwa mafi ƙanƙanta. Ya kamata ku sami layuka 3: qty 6, 4 da 3. Ku ajiye kowace query da sakamakonta don aikinku na ƙarshe.",
          youCanNow: "ƙirƙirar teburin atisaye da rubuta tambayoyin SQL da ke tace da jera layuka.",
          quickCheck: [
            { objective: "O4", q: "Wace query ce ke nuna sayarwar shagon South kaɗai?", options: ["SELECT * FROM sales ORDER BY store;", "SELECT * FROM sales WHERE store = 'South';", "SELECT South FROM sales;", "SELECT * WHERE sales = South;"], answer: 1, why: "WHERE store = 'South' yana ajiye layukan wannan shago kaɗai." },
            { objective: "O4", q: "Me DESC yake yi a ORDER BY qty DESC?", options: ["Yana goge shafin", "Yana bayyana teburin", "Yana jerawa daga mafi girma zuwa mafi ƙanƙanta", "Yana ajiye layi ɗaya kawai"], answer: 2, why: "DESC yana nufin daga sama zuwa ƙasa: mafi girma da farko." }
          ]
        },
        {
          title: "Jimloli da GROUP BY, da haɗa teburori biyu",
          objectives: ["O5"],
          minutes: 6,
          goal: "Rubuta query ta GROUP BY da SUM, da JOIN tsakanin teburori biyu.",
          text: [
            "GROUP BY yana yin a SQL abin da pivot table ke yi a spreadsheet. SELECT store, SUM(qty * price) AS revenue FROM sales GROUP BY store ORDER BY revenue DESC; yana ba da East 29.0, South 24.75, North 14.0, daidai da pivot ɗinku. AS yana ba sabon shafin suna.",
            "Wasu ayyukan taƙaitawa: COUNT(*) yana ƙidaya layuka, AVG(qty) yana ba da matsakaici, MIN da MAX suna ba da mafi ƙanƙanta da mafi girma. SELECT item, SUM(qty) FROM sales GROUP BY item; yana ba da Bagel 15, Coffee 13, Juice 3.",
            "Sau da yawa ana raba bayanai a teburori daban-daban. Tebur na biyu zai iya ɗauke da birnin kowane shago: CREATE TABLE stores (store TEXT, city TEXT); INSERT INTO stores VALUES ('North','Fresno'),('South','Bakersfield'),('East','Modesto'); JOIN yana haɗa layukan da wani shafi ya yi daidai a teburorin biyu.",
            "SELECT sales.item, sales.qty, stores.city FROM sales JOIN stores ON sales.store = stores.store; yana nuna kowace sayarwa da birninta. Idan an rubuta sunan shago daban a teburorin biyu, JOIN ɗin zai tsallake shi, wanda wani dalili ne na tsabtace bayanai da farko."
          ],
          steps: ["Ku zaɓi shafin da za ku haɗa rukuni da shi (store, item, date).", "Ku zaɓi taƙaitawa: SUM, COUNT, AVG, MIN ko MAX.", "Ku rubuta SELECT column, SUM(...) AS name FROM table GROUP BY column;", "Ku ƙara ORDER BY don jera rukunonin.", "Don JOIN, ku ambaci teburorin biyu da shafin da ya yi daidai bayan ON.", "Ku kwatanta sakamakon da pivot table ɗinku."],
          words: [["GROUP BY", "yana haɗa layukan da ke da daraja ɗaya don ku tara ko ku ƙidaya kowane rukuni."], ["Aikin taƙaitawa (aggregate function)", "taƙaitawa kamar SUM, COUNT, AVG, MIN ko MAX."], ["AS", "yana ba shafin sakamako suna."], ["JOIN", "yana haɗa layuka daga teburori biyu da ke da shafi mai daraja ɗaya."], ["Key (maɓalli)", "shafin da ake amfani da shi don haɗa layuka tsakanin teburori."]],
          slides: [
            { title: "GROUP BY = pivot a SQL", bullets: ["SELECT store, SUM(qty * price) AS revenue", "FROM sales GROUP BY store ORDER BY revenue DESC;", "East 29.0, South 24.75, North 14.0"] },
            { title: "Ayyukan taƙaitawa", bullets: ["COUNT(*), SUM, AVG, MIN, MAX", "Yawan kaya bisa item: Bagel 15, Coffee 13, Juice 3"] },
            { title: "Haɗa teburori biyu", bullets: ["Teburin stores: store da city", "JOIN stores ON sales.store = stores.store", "Yanzu kowace sayarwa tana nuna birninta"] },
            { title: "Maɓallai masu tsabta suna da muhimmanci", bullets: ["Rubutu daban-daban: JOIN yana tsallake layuka", "Ku tsabtace da farko, sannan ku haɗa"] }
          ],
          sources: [SQLITE_ONLINE],
          tryIt: "Ku gudanar da query ta GROUP BY ta kuɗin shiga ku duba ta yi daidai da pivot table ɗinku. Ku rubuta query da ke ƙidaya sayarwa a kowane shago (COUNT(*)); ya kamata ku sami 3, 3 da 2. Sannan ku ƙirƙiri teburin stores ku gudanar da JOIN. Ku ajiye kowace query da sakamakonta.",
          youCanNow: "tara da ƙidaya rukunoni da GROUP BY, da haɗa teburori biyu da JOIN.",
          quickCheck: [
            { objective: "O5", q: "Wace query ce ke ba da jimlar yawan kayan da aka sayar na kowane item?", options: ["SELECT item, SUM(qty) FROM sales GROUP BY item;", "SELECT * FROM sales;", "SELECT item FROM sales WHERE qty = SUM;", "SELECT SUM(item) FROM sales;"], answer: 0, why: "GROUP BY item yana yin rukuni ɗaya ga kowane item, SUM(qty) kuma yana tara kowanne." },
            { objective: "O5", q: "JOIN tsakanin sales da stores yana tsallake layukan North. Mene ne dalili mafi yiwuwa?", options: ["SQL ba ya iya haɗa rubutu", "Layukan sun yi yawa", "An rubuta sunan shagon daban a teburorin biyu", "JOIN yana aiki ranar Litinin kaɗai"], answer: 2, why: "JOIN yana haɗa daraja iri ɗaya daidai; rubutu daban-daban ba sa haɗuwa." }
          ]
        },
        {
          title: "Mayar da sakamako zuwa bayanan binciken, da aikinku",
          objectives: ["O6"],
          minutes: 6,
          goal: "Rubuta sakamako uku masu lambobi, iyaka ɗaya da mataki ɗaya na gaba.",
          text: [
            "Lambobi kaɗai ba sa taimakon manaja. Sakamako (finding) jimla ɗaya ce da ke faɗin abin da bayanan suka nuna, tare da lambar: \"East ne ya fi samun kuɗin shiga daga 1 zuwa 4 ga Oktoba: $29.00, fiye da ninki biyu na $14.00 na North.\"",
            "Ku faɗi gaskiya game da iyakoki. Bayanan atisaye sun ƙunshi kwanaki 4 da sayarwa 8 kawai, don haka ba za su iya faɗa muku game da shekara guda ba. Tafiya tare (correlation) ba dalili ba ce: idan Coffee ya fi sayuwa a rana mai sanyi, bayanan kaɗai ba su tabbatar da cewa sanyin ne ya jawo shi ba. Ku faɗi abin da bayanan ba za su iya faɗa ba.",
            "Ku ƙare da mataki na gaba da wani zai iya aiki da shi: \"Ku tattara sayarwar wata guda cikakke kafin ku yanke shawarar inda za ku ƙara tura kaya.\" Ku ajiye shi a shafi ɗaya, da zane (chart) ko tebur ɗaya mai sarari daga pivot ɗinku.",
            "A ƙarshe, ku mayar da aikin zuwa layin résumé: \"Cleaned and analyzed sales data in Google Sheets and SQL (GROUP BY, JOIN); found the top store by revenue and reported findings.\" (Na tsabtace da nazarin bayanan sayarwa a Google Sheets da SQL; na gano shagon da ya fi kuɗin shiga na bayar da rahoto.) Wannan yana nuna wa mai ɗaukar aiki abin da za ku iya yi. Ku yi amfani da bayanai ƙirƙirarru ko na jama'a kaɗai a portfolio, kada ku taɓa amfani da bayanan sirri na mai ɗaukar aiki."
          ],
          steps: ["Ku rubuta tambayar a sama.", "Ku ƙara tebur ko zane ɗaya daga pivot ɗinku.", "Ku rubuta sakamako uku, kowanne da lamba.", "Ku rubuta iyaka ɗaya: abin da bayanan ba za su iya faɗa ba.", "Ku rubuta mataki ɗaya na gaba.", "Ku ƙara tambayoyin SQL ɗinku da sakamakonsu.", "Ku rubuta layin résumé ɗaya game da aikin."],
          words: [["Sakamako (finding)", "jimla ɗaya da ke faɗin abin da bayanan suka nuna, tare da lamba."], ["Iyaka (limitation)", "abin da bayanan ba za su iya faɗa ba, ko dalilin yin hankali da su."], ["Tafiya tare (correlation)", "abubuwa biyu suna canjawa tare; ba ya tabbatar da cewa ɗaya ne ya jawo ɗayan."], ["Portfolio (tarin ayyuka)", "rukunin samfuran aikinku da kuke nuna wa masu ɗaukar aiki."]],
          slides: [
            { title: "Sakamako mai kyau", bullets: ["Jimla ɗaya, lamba ɗaya", "\"East ne ya fi kuɗin shiga: $29.00, ninki biyu na $14.00 na North.\""] },
            { title: "Ku faɗi gaskiya game da iyakoki", bullets: ["Kwanaki 4 da sayarwa 8 kawai", "Tafiya tare ba dalili ba ce"] },
            { title: "Shafi ɗaya", bullets: ["Tambaya, zane ko tebur ɗaya", "Sakamako uku, iyaka ɗaya, mataki ɗaya na gaba", "Tambayoyin SQL ɗinku da sakamakonsu"] },
            { title: "Ku nuna shi", bullets: ["Ku rubuta layin résumé ɗaya", "Ku yi amfani da bayanai ƙirƙirarru ko na jama'a kaɗai"] }
          ],
          sources: [DATAPLUS],
          tryIt: "Aikin ƙarshe: ku gina aikinku mai shafi ɗaya da tambayar, bayanai masu tsabta da pivot, aƙalla tambayoyin SQL biyu da sakamakonsu, sakamako uku masu lambobi, iyaka ɗaya, mataki ɗaya na gaba, da layin résumé ɗaya. Ku karanta shi da babbar murya: manaja mai yawan aiki zai iya aiki da shi cikin minti ɗaya?",
          youCanNow: "mayar da nazari zuwa sakamako masu sarari na gaskiya, da aikin da za ku iya nuna wa mai ɗaukar aiki.",
          quickCheck: [
            { objective: "O6", q: "Wanne ne sakamako mafi kyau?", options: ["\"An yi sayarwa.\"", "\"Bayanan suna da ban sha'awa.\"", "\"South ya sayar da kayan abinci da abin sha 11 ya samu $24.75, na biyu cikin shaguna uku.\"", "\"Lambobi sun hau sun sauka.\""], answer: 2, why: "Yana faɗin abin da ya faru, da lambobi da kwatance." },
            { objective: "O6", q: "Juice ya fi sayuwa a rana mafi zafi a bayananku. Me za ku iya faɗa da gaskiya?", options: ["Yanayin zafi yana jawo sayarwar juice", "Juice da ranaku masu zafi sun tafi tare a nan, amma wannan ba ya tabbatar da dalili", "Juice koyaushe zai fi sayuwa a lokacin zafi", "Bayanan ba daidai ba ne"], answer: 1, why: "Tafiya tare ba dalili ba ce; ƙaramin bayanai ba zai iya tabbatar da dalili ba." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: SQL da bayyana sakamako",
        questions: [
          { objective: "O4", q: "Me SELECT * FROM sales; yake yi?", options: ["Yana goge teburin sales", "Yana nuna kowane shafi da layi a teburin sales", "Yana ƙidaya layuka", "Yana jera teburin"], answer: 1, why: "* yana nufin dukkan shafuka, kuma ba tare da WHERE ba ana kawo kowane layi." },
          { objective: "O4", q: "Wanne aka rubuta daidai?", options: ["SELECT * FROM sales WHERE item = 'Bagel';", "SELECT * FROM sales WHERE item = Bagel", "FROM sales SELECT Bagel;", "SELECT Bagel WHERE sales;"], answer: 0, why: "Rubutu yana cikin alamar ambato guda, kuma jerin shi ne SELECT, FROM, WHERE." },
          { objective: "O5", q: "Wane sashe na SQL ne ke yin aikin Rows na pivot table?", options: ["ORDER BY", "WHERE", "FROM", "GROUP BY"], answer: 3, why: "GROUP BY yana yin rukuni ɗaya ga kowace daraja, kamar layuka a pivot table." },
          { objective: "O5", q: "Me COUNT(*) yake kawowa ga kowane shago a bayanan atisaye?", options: ["Jimlar kuɗin shiga", "Matsakaicin farashi", "Yawan layukan sayarwa", "Birnin"], answer: 2, why: "COUNT(*) yana ƙidaya layuka a kowane rukuni." },
          { objective: "O6", q: "Wanne ne ya dace a sashen iyakoki na rahotonku?", options: ["\"Bayanan sun ƙunshi kwanaki 4 kawai, don haka ba za su iya nuna tsarin shekara ba.\"", "\"East shi ne shago mafi kyau har abada.\"", "\"SQL yana da wuya.\"", "\"Ina son coffee.\""], answer: 0, why: "Iyaka tana faɗa wa mai karatu abin da bayanan ba za su iya nunawa ba." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Nazarin Bayanai da Spreadsheet da SQL",
    questions: [
      { objective: "O1", q: "Tambayar bayanai a sarari tana ƙunshe da:", options: ["Batu kawai", "Wane ko mene, abin aunawa da lokaci", "Zane (chart)", "Kalmar sirri"], answer: 1, why: "Waɗannan sassa uku suna sa a iya amsa ta da lamba." },
      { objective: "O1", q: "Mene ne mataki na farko a hanyar mai nazari?", options: ["Yin zane", "Rubuta SQL", "Yin tambaya a sarari", "Bayyana sakamako"], answer: 2, why: "Tambayar ce ke yanke bayanan da kuke buƙata da yadda za ku yi nazari." },
      { objective: "O1", q: "Wace takardar shaida ta CompTIA ce aka yi don masu nazarin bayanai na matakin farko?", options: ["Data+", "A+", "Security+", "Network+"], answer: 0, why: "CompTIA Data+ tana ƙunshe da ra'ayoyin bayanai, shiryawa, nazari, zane-zane da kula da bayanai." },
      { objective: "O2", q: "Me yasa \"North\" da \"north \" suke jawo matsala?", options: ["Suna ƙara girman fayil", "Spreadsheet ba ya iya karanta ƙananan haruffa", "Suna canja rubutun haruffa (font)", "Ana ƙidaya su a matsayin shaguna biyu daban"], answer: 3, why: "Rubutu daban-daban yana raba rukuni ɗaya zuwa biyu, don haka jimloli suna kuskure." },
      { objective: "O2", q: "Wane kayan aikin Excel ne ke cire maimaitattun layuka?", options: ["Insert > Chart", "Data > Remove Duplicates", "View > Zoom", "File > Save As"], answer: 1, why: "Remove Duplicates yana goge layukan da suka bayyana fiye da sau ɗaya." },
      { objective: "O2", q: "Wace ce kyakkyawar al'adar tsabtacewa?", options: ["Tsabtace kwafin bayanai guda ɗaya tilo", "Ajiye ainihin bayanai da rubuta kowane canji", "Goge duk layin da ya yi kama da baƙo", "Rubuta alamar $ a cikin ƙwayoyin lambobi"], answer: 1, why: "Ajiye ainihin bayanai da jerin canje-canje suna sa a iya duba aikinku." },
      { objective: "O3", q: "A pivot table, ina lambar da kuke tarawa take tafiya?", options: ["Values", "Rows", "Taken", "Filters kawai"], answer: 0, why: "Values yana ɗauke da abin aunawa, an taƙaita ta SUM, COUNT ko AVERAGE." },
      { objective: "O3", q: "Me COUNTIFS yake yi?", options: ["Yana tara lambobi", "Yana nemo matsakaici", "Yana ƙidaya layukan da suka dace da ƙa'ida ɗaya ko fiye", "Yana jera shafi"], answer: 2, why: "COUNTIFS yana ƙidaya layukan da suka cika ƙa'idojin da kuka ba shi." },
      { objective: "O3", q: "A bayanan atisaye masu tsabta, wane shago ne ya fi samun kuɗin shiga?", options: ["North", "South", "Dukkansu daidai suke", "East"], answer: 3, why: "East yana da 29.00, South 24.75, North kuma 14.00." },
      { objective: "O4", q: "Don me ake amfani da SQL?", options: ["Zana hotuna", "Yin tambayoyi ga rumbun bayanai", "Aika imel", "Yin slides"], answer: 1, why: "SQL shi ne harshen yin tambayoyi ga rumbun bayanai." },
      { objective: "O4", q: "Wanne ne ke ajiye layukan da qty ya kai 4 ko fiye kaɗai?", options: ["ORDER BY qty", "GROUP BY qty", "WHERE qty >= 4", "SELECT qty"], answer: 2, why: "WHERE yana tace layuka bisa ƙa'ida." },
      { objective: "O4", q: "Don jera sakamako mafi girma da farko, kuna rubuta:", options: ["ORDER BY qty DESC", "ORDER BY qty ASC", "WHERE qty BIG", "SORT qty"], answer: 0, why: "DESC yana jerawa daga mafi girma zuwa mafi ƙanƙanta." },
      { objective: "O4", q: "Wane bayani ne ba shi da haɗari a saka a kayan atisayen SQL na intanet?", options: ["Jerin abokan cinikin mai ɗaukar aikinku", "Bayanan marasa lafiya", "Bayanan atisaye ƙirƙirarru", "Takardun bankinku"], answer: 2, why: "Ku yi amfani da bayanan atisaye ko na jama'a kaɗai a kayan aikin intanet." },
      { objective: "O5", q: "SELECT store, SUM(qty * price) FROM sales GROUP BY store; yana kawo:", options: ["Kowace sayarwa", "Jimlar kuɗin shiga na kowane shago", "Yawan shaguna", "Birnin kowane shago"], answer: 1, why: "GROUP BY store tare da SUM yana ba da jimlar kuɗin shiga ɗaya ga kowane shago." },
      { objective: "O5", q: "Wane aiki ne ke ba da matsakaici?", options: ["COUNT", "MAX", "SUM", "AVG"], answer: 3, why: "AVG yana kawo matsakaicin shafi." },
      { objective: "O5", q: "JOIN yana haɗa layuka daga teburori biyu ta hanyar:", options: ["Shafi mai daraja iri ɗaya a dukkansu biyu", "Launin layi", "Girman teburin", "Jerin haruffa kawai"], answer: 0, why: "JOIN ... ON yana haɗa layukan da shafin maɓalli ya yi daidai." },
      { objective: "O6", q: "Sakamako ya kamata ya ƙunshi:", options: ["Zane kawai ba tare da kalmomi ba", "Lamba da ma'anarta", "Kowane layin bayanai", "Ra'ayinku ba tare da bayanai ba"], answer: 1, why: "Sakamako mai sarari yana faɗin abin da ya faru da lamba." },
      { objective: "O6", q: "Bayananku sun ƙunshi mako ɗaya. Wanne ne na gaskiya?", options: ["\"Wannan ya tabbatar da tsarin shekara.\"", "\"Wannan ba zai taɓa canjawa ba.\"", "\"Bayanan cikakku ne.\"", "\"Wannan mako ne kawai; muna buƙatar ƙarin bayanai don ganin tsari.\""], answer: 3, why: "Ambaton iyakar yana hana masu karatu yanke shawarar da ba daidai ba." },
      { objective: "O6", q: "Wane layin résumé ne ya fi nuna wannan aiki?", options: ["\"Na iya kwamfuta.\"", "\"Cleaned and analyzed sales data in Google Sheets and SQL (GROUP BY, JOIN) and reported findings.\"", "\"Na san bayanai kaɗan.\"", "\"Na yi amfani da intanet.\""], answer: 1, why: "Yana ambaton kayan aiki, ƙwarewa da sakamakon." },
      { objective: "O6", q: "Me ya kamata ya ƙare rahotonku mai shafi ɗaya?", options: ["Mataki na gaba a sarari da wani zai iya aiki da shi", "Dogon jerin ainihin bayanai", "Kalmar sirrinku", "Babu komai"], answer: 0, why: "Mataki na gaba yana mayar da sakamako zuwa aiki." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 3, 6, 8, 9, 10, 13, 15, 16] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Tambaya a sarari", objective: "O1", notYet: "Tambayar ba ta da sarari ko ba za a iya amsa ta da lamba ba.", meets: "Tambayar tana ambaton wane ko mene, abin aunawa da lokaci.", exceeds: "Tana kuma faɗin wanda zai yi amfani da amsar da shawarar da za ta taimaka." },
      { name: "Bayanai masu tsabta", objective: "O2", notYet: "Akwai sauran maimaitattun layuka ko sunaye marasa daidaito, ko ainihin bayanai sun ɓace.", meets: "Babu maimaici, sunaye da iri sun daidaita, an ajiye ainihin bayanai, an jera canje-canje.", exceeds: "Jerin canje-canjen yana da sarari ta yadda wani zai iya maimaita tsabtacewar." },
      { name: "Pivot da dabaru", objective: "O3", notYet: "Babu pivot, ko jimloli ba su yi daidai da binciken hannu ba.", meets: "Pivot yana amsa tambayar, kuma SUMIFS ko COUNTIFS ya yi daidai da shi.", exceeds: "Pivot ko dabara ta biyu tana ƙara kwatance mai amfani." },
      { name: "Tambayoyin tacewa", objective: "O4", notYet: "Babu query mai aiki, ko tana kawo layukan da ba daidai ba.", meets: "Query mai WHERE da ORDER BY tana kawo ainihin layukan da suka dace.", exceeds: "An rubuta tambayoyin da kyau, kuma kowace tana da bayani na layi ɗaya kan abin da take amsawa." },
      { name: "Haɗa rukuni da haɗa teburori", objective: "O5", notYet: "Babu query ta GROUP BY, ko jimlolinta ba daidai ba ne.", meets: "Query ta GROUP BY da SUM, COUNT ko AVG ta yi daidai da pivot.", exceeds: "Tana kuma da JOIN mai aiki, kuma tana bayyana shafin da ake haɗawa da shi." },
      { name: "Sakamako da layin résumé", objective: "O6", notYet: "Sakamakon ba su da lambobi, ko babu iyaka ko mataki na gaba.", meets: "Sakamako uku masu lambobi, iyaka ɗaya, mataki ɗaya na gaba da layin résumé ɗaya.", exceeds: "Manaja zai iya aiki da shi cikin minti ɗaya, kuma zanen ko teburin yana da lakabi a sarari." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka ƙara aikin a résumé ko portfolio cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka nemi ko suka fara aikin bayanai, rahoto ko nazari, ko suka yi amfani da waɗannan ƙwarewa a wurin aiki, cikin watanni 6",
      "Masu koyo da suka yi rajista ko suka ci CompTIA Data+ ko wata takardar shaidar bayanai cikin watanni 6"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta mai burauzar intanet (allon waya ya yi ƙanƙanta don atisayen SQL)",
      "Asusun Google kyauta don Google Sheets, ko Excel idan akwai",
      "Editan SQL kyauta: SQLite Online a burauzar, ko DB Browser for SQLite da aka saka",
      "Kusan minti 90 don darussan, da awa 1 zuwa 2 don aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Kafin zaman, ku buɗe editan SQL a kwamfutocin ɗakin atisaye ku duba yana buɗewa; wasu hanyoyin sadarwa (networks) suna toshe wasu shafuka.",
      "Ku ba masu koyo teburin atisaye a matsayin fayil ko takarda da aka buga don rage lokacin rubutu; rubutun da kansa ma atisaye ne mai kyau.",
      "Ku haɗa masu koyo bibbiyu don Darasi na 4 da na 5: ɗaya yana rubuta query, ɗayan yana duba sakamakon da hannu, sannan su musanya.",
      "Ku jaddada ƙa'idar sirri: bayanai ƙirƙirarru ko na jama'a kaɗai a kayan aikin intanet da portfolio.",
      "Idan masu koyo suna son takardar shaida, ku nuna musu shafin hukuma na CompTIA Data+; wannan kwas yana shiryawa amma ba ya ba da ita.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
