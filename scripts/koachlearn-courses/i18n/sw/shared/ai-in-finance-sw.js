"use strict";

// Koach Learn course (Swahili translation of shared/ai-in-finance.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "ai-in-finance-sw",
  lang: "sw",
  translationOf: "ai-in-finance",
  category: "Small Business",
  name: "AI katika Fedha",
  skills: "Kulinda taarifa za fedha unapotumia AI, Kupanga mapato na matumizi katika makundi, Kutengeneza bajeti ya mwezi, Kulinganisha bajeti na hali halisi, Kutabiri mtiririko wa pesa, Kueleza namba",
  outcome: "kutumia msaidizi wa AI na spreadsheet kupanga mapato na matumizi ya mwezi mmoja, kutengeneza bajeti na kuilinganisha na kilichotokea kweli, kutengeneza utabiri wa mtiririko wa pesa wa wiki 13, na kueleza matokeo kwa maneno rahisi, bila kushiriki taarifa za fedha za siri.",
  about: [
    "Maswali ya pesa yanawanyima usingizi wamiliki wa biashara na viongozi wa mashirika yasiyo ya faida: Tutaweza kulipa mishahara? Pesa zilienda wapi? Tunaweza kumudu mfanyakazi mpya au programu mpya? Zana za AI zinaweza kukusaidia kupanga namba, kutengeneza spreadsheet na kueleza maana yake.",
    "Kozi hii ni kwa wamiliki wa biashara ndogo, wakurugenzi wa mashirika yasiyo ya faida, waweka hazina na wanaojifunza kutunza vitabu vya hesabu. Mifano ni pamoja na gari la kuuza chakula, kampuni ya usafi, shirika la michezo ya vijana na huduma ya chakula ya kanisa.",
    "Utatumia zana za bure kama Google Sheets au Excel pamoja na ChatGPT, Microsoft Copilot au Google Gemini. Utafanya mazoezi kwa namba za mfano au namba zilizosafishwa, kamwe si namba za akaunti. Kila somo ni kama dakika tano na lina kazi ya \"Jaribu sasa\", kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni. Kozi hii si ushauri wa kodi, wa kisheria wala wa uwekezaji; kwa hayo, muone mtaalamu mwenye leseni na tembelea irs.gov."
  ],
  finalTask: "Ukitumia miamala ya mwezi mmoja, halisi au ya mfano, ambayo namba zote za akaunti na majina yameondolewa, tengeneza spreadsheet inayopanga mapato na matumizi katika makundi, jedwali la bajeti dhidi ya hali halisi lenye tofauti tatu kubwa zaidi zimeelezwa, na utabiri wa mtiririko wa pesa wa wiki 13 wenye wiki ya chini kabisa imewekwa alama. Kisha andika taarifa fupi ya pesa ya sentensi tano kwa maneno rahisi kwa mmiliki, mshirika au bodi.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wamiliki wa biashara ndogo, watunza vitabu vya hesabu, mameneja wa ofisi na waweka hazina au wafanyakazi wa mashirika yasiyo ya faida wanaoshughulikia pesa lakini si wahasibu waliosomea.",
    startingPoint: "Wanaweza kusoma taarifa ya benki na kutumia simu au kompyuta; baadhi wanatunza kumbukumbu katika spreadsheet au app ya kutunza hesabu. Wachache wanatengeneza bajeti, utabiri wa mtiririko wa pesa au fomula, na wengi hawajawahi kutumia AI kwa kazi za pesa kwa usalama.",
    gap: "Mashirika mengi madogo yanagundua matatizo ya pesa taslimu kwa kuchelewa, hayaoni malipo yaliyorudiwa au ulaghai, na yanapata shida kueleza namba zao kwa washirika au bodi. Wanafunzi wanahitaji kutumia AI na spreadsheet kupanga, kupanga mipango, kutabiri na kueleza pesa, huku wakizuia taarifa za fedha za siri zisiingie kwenye zana za AI na wakikagua kila namba.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi; maneno ya pesa yanaelezwa mara ya kwanza yanapotumika",
      "Vifaa: kompyuta ni bora kwa spreadsheet; simu ni ngumu kwa kazi hii",
      "Faragha: hakuna namba za akaunti, za routing, za kadi, za Social Security au za utambulisho wa kodi, nywila wala majina ya watu katika zana za AI",
      "Hakuna ushauri wa kodi, mishahara, sheria wala uwekezaji: hakikisha kupitia irs.gov, ofisi ya kodi ya jimbo au mtaalamu mwenye leseni",
      "Muda: masomo ya dakika 5, kama dakika 60 kwa jumla pamoja na muda wa kutengeneza spreadsheet"
    ],
    prerequisites: "Hakuna. Mazoezi ya msingi ya spreadsheet (kuandika ndani ya visanduku, SUM rahisi) yanasaidia."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa miamala ya mwezi mmoja iliyotolewa kutoka benki", action: "kuandaa data kwa ajili ya AI kwa kuondoa namba za akaunti na kubadilisha majina kwa lebo", standard: "bila taarifa yoyote ya fedha ya siri kubaki, na hesabu za AI zikiwa zimekaguliwa katika spreadsheet" },
    { id: "O2", condition: "Ukipewa miamala yako iliyosafishwa na orodha ya makundi", action: "kuweka kila muamala katika kundi lake na kujumlisha kila kundi kwa SUMIF", standard: "ili jumla za makundi zilingane na jumla kuu" },
    { id: "O3", condition: "Ukipewa bajeti ya mwezi na jumla halisi", action: "kutengeneza jedwali la bajeti dhidi ya hali halisi lenye tofauti na asilimia ya tofauti", standard: "na tofauti tatu kubwa zaidi zimeelezwa kwa sentensi moja kila moja" },
    { id: "O4", condition: "Ukipewa pesa taslimu za leo na pesa zinazotarajiwa kuingia na kutoka", action: "kutengeneza utabiri wa mtiririko wa pesa wa wiki 13 na kuweka alama kwenye wiki ya chini kabisa", standard: "na pesa za mwisho za kila wiki zikihamishiwa wiki inayofuata" },
    { id: "O5", condition: "Ukipewa miamala ya mwezi iliyosafishwa na maombi ya malipo", action: "kutambua malipo yanayoweza kuwa yamerudiwa, matumizi yasiyo ya kawaida na ulaghai wa malipo", standard: "ukithibitisha badiliko lolote la taarifa za benki kwa kupiga simu kwa namba unayoijua tayari" },
    { id: "O6", condition: "Ukipewa matokeo ya spreadsheet yako", action: "kuandika taarifa ya pesa ya sentensi tano kwa maneno rahisi na kupanga muda wa kutunza kumbukumbu", standard: "na kila namba ikiwa imekaguliwa dhidi ya spreadsheet" }
  ],
  chapters: [
    {
      name: "Sura 1: Kupanga pesa",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kutumia AI na pesa kwa usalama",
          minutes: 5,
          goal: "Andaa data ya fedha ili upate msaada wa AI bila kufichua taarifa za siri.",
          text: [
            "Wasaidizi wa AI ni hodari wa fomula za spreadsheet, kupanga, kutafuta mifumo na kueleza maneno kama \"accrual\" (kurekodi pesa wakati inapostahili, si inapolipwa) au \"gross margin\" (faida ghafi). Si wahasibu, wanaweza kukosea hesabu, na hawajui sheria za kodi za hali yako hasa.",
            "Usibandike kamwe namba za benki au kadi, namba za routing, nywila, namba za Social Security au za utambulisho wa kodi, wala majina ya wateja, wafadhili au wafanyakazi katika zana ya AI ya jumla. Badala yake, toa miamala kwenda spreadsheet, futa safu hizo, na ubadilishe majina kwa lebo za jumla kama \"Customer A\" au \"Supplier 1\".",
            "Kagua hesabu za AI kwa spreadsheet yenyewe. Muombe AI fomula, kisha acha spreadsheet ifanye hesabu, na ukague baadhi ya jumla kwa mkono. Kwa maswali ya kodi, mishahara na sheria, hakikisha kupitia irs.gov, ofisi ya kodi ya jimbo lako au mhasibu mwenye leseni."
          ],
          steps: ["Toa miamala kutoka benki au zana yako ya hesabu kwenda spreadsheet.", "Futa namba za akaunti na namba zozote za utambulisho.", "Badilisha majina ya watu kwa lebo kama \"Customer A\".", "Tumia AI kwa fomula na maelezo, si kwa majibu ya mwisho ya kodi.", "Kagua hesabu za AI kwa spreadsheet."],
          words: [["Kutoa (export)", "kuhifadhi taarifa kutoka programu moja kwenda faili ambalo programu nyingine inaweza kufungua."], ["Muamala", "mwendo mmoja wa pesa kuingia au kutoka, kama mauzo au bili iliyolipwa."]],
          slides: [
            { title: "AI ni hodari wa", bullets: ["Fomula za spreadsheet na kupanga", "Kutafuta mifumo", "Kueleza maneno ya pesa"] },
            { title: "Usibandike kamwe kwa AI", bullets: ["Namba za benki, kadi au routing", "Nywila, SSN, namba za utambulisho wa kodi", "Majina ya wateja, wafadhili au wafanyakazi"] },
            { title: "Safisha, kisha kagua", bullets: ["Futa namba, weka lebo kwa majina", "Acha spreadsheet ifanye hesabu", "Maswali ya kodi: irs.gov au mhasibu"] }
          ],
          tryIt: "Toa au andika miamala 20 ya mwezi halisi au wa mfano katika spreadsheet. Ondoa kila namba ya akaunti na ubadilishe majina kwa lebo.",
          youCanNow: "kuandaa data ya pesa kwa msaada wa AI bila kufichua taarifa za siri.",
          quickCheck: [
            { objective: "O1", q: "Ni safu gani unapaswa kufuta kabla ya kubandika miamala katika zana ya AI?", options: ["Tarehe", "Kiasi", "Maelezo ya ununuzi", "Namba ya akaunti"], answer: 3, why: "Namba za akaunti ni za siri na hazipaswi kamwe kuingia katika zana ya AI ya jumla." },
            { objective: "O1", q: "Miamala yako ina mteja anayeitwa \"Maria Lopez\". Unafanya nini kabla ya kuomba msaada wa AI?", options: ["Acha jina; AI inalitunza kwa siri", "Libadilishe kwa lebo kama \"Customer A\"", "Ongeza pia namba yake ya simu", "Futa muamala wote"], answer: 1, why: "Kubadilisha majina kwa lebo kunalinda faragha na AI bado inasaidia." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kupanga mapato na matumizi katika makundi",
          minutes: 5,
          goal: "Tumia AI kupendekeza makundi na spreadsheet kujumlisha kila kundi.",
          text: [
            "Makundi yanageuza orodha ndefu ya miamala kuwa picha. Makundi ya kawaida ya biashara: mauzo, gharama za bidhaa (viungo, vifaa vya kutengeneza bidhaa), kodi ya pango, mishahara, matangazo, programu za kompyuta, gari na mafuta, bima na ada. Mashirika yasiyo ya faida mara nyingi yanaongeza michango, ruzuku, gharama za programu na gharama za kuchangisha pesa.",
            "Bandika safu zilizosafishwa za maelezo na kiasi katika msaidizi wa AI na uulize: \"Suggest a category for each line from this list: [your categories]. Return a table.\" (Pendekeza kundi kwa kila mstari kutoka orodha hii, nipe jedwali.) Kisha nakili jedwali kurudi kwenye sheet yako na urekebishe yale aliyokosea.",
            "Muombe AI fomula ya kujumlisha kila kundi. Katika Google Sheets na Excel, SUMIF inajumlisha kiasi kinacholingana na lebo, kwa mfano =SUMIF(C:C, \"Rent\", D:D)."
          ],
          steps: ["Andika orodha yako ya makundi.", "Muombe AI apendekeze kundi kwa kila muamala uliosafishwa.", "Bandika makundi katika sheet yako na urekebishe makosa.", "Tumia SUMIF kujumlisha kila kundi.", "Hakikisha jumla za makundi zinalingana na jumla kuu."],
          words: [["Kundi (category)", "kikundi cha miamala inayofanana, kama kodi ya pango au matangazo."], ["SUMIF", "fomula ya spreadsheet inayojumlisha kiasi kinachotimiza sharti fulani."], ["Gharama za bidhaa", "unachotumia kutengeneza au kununua bidhaa unazouza."]],
          slides: [
            { title: "Makundi ya kawaida", bullets: ["Mauzo, gharama za bidhaa, kodi ya pango, mishahara", "Matangazo, programu, mafuta, bima", "Mashirika yasiyo ya faida: michango, ruzuku, programu"] },
            { title: "AI apendekeze, wewe urekebishe", bullets: ["Bandika maelezo na kiasi vilivyosafishwa", "Omba kundi kutoka orodha yako", "Rekebisha yale aliyokosea"] },
            { title: "Jumlisha kwa SUMIF", bullets: ["=SUMIF(C:C, \"Rent\", D:D)", "Jumla za makundi lazima zilingane na jumla kuu"] }
          ],
          tryIt: "Muombe AI apendekeze makundi kwa miamala yako 20 iliyosafishwa, yarekebishe, na ujumlishe kila kundi kwa SUMIF. Hakikisha jumla zinalingana na jumla kuu.",
          youCanNow: "kupanga miamala katika makundi na kuyajumlisha kwa fomula ya spreadsheet.",
          quickCheck: [
            { objective: "O2", q: "SUMIF inafanya nini katika spreadsheet?", options: ["Inajumlisha kiasi kinacholingana na lebo", "Inapanga mistari kwa tarehe", "Inafuta visanduku vitupu", "Inahesabu idadi ya safu"], answer: 0, why: "SUMIF inajumlisha kiasi ambacho lebo yake inalingana, kama mistari yote ya Rent." },
            { objective: "O2", q: "Jumla za makundi yako ni $4,800, lakini jumla kuu ni $5,000. Unafanya nini?", options: ["Puuza tofauti", "Badilisha jumla kuu kuwa $4,800", "Tafuta miamala isiyo na kundi au yenye lebo isiyo sahihi", "Muombe AI afanye namba zilingane"], answer: 2, why: "Jumla za makundi zinapaswa kulingana na jumla kuu, kwa hiyo tafuta mistari iliyokosekana au yenye lebo isiyo sahihi." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kutengeneza bajeti na kuilinganisha na hali halisi",
          minutes: 6,
          goal: "Tengeneza bajeti ya mwezi na jedwali la bajeti dhidi ya hali halisi linaloonyesha ulipotofautiana.",
          text: [
            "Bajeti ni mpango wako wa pesa kuingia na kutoka kwa kipindi fulani. Bajeti dhidi ya hali halisi inalinganisha mpango na kilichotokea kweli. Tofauti kati yao inaitwa variance (tofauti).",
            "Weka safu: kundi, bajeti, halisi, tofauti (halisi kutoa bajeti) na asilimia ya tofauti. Muulize AI: \"Give me Google Sheets formulas for variance and percent variance.\" (Nipe fomula za tofauti na asilimia ya tofauti.) Kisha tafuta tofauti kubwa zaidi, kwa dola na kwa asilimia.",
            "Eleza kila tofauti kubwa kwa sentensi moja. \"Mafuta yalizidi bajeti kwa $300 kwa sababu tuliongeza njia ya pili ya kusafirisha.\" AI inaweza kukusaidia kupanga maneno ya maelezo, lakini ni wewe tu unayejua sababu halisi."
          ],
          steps: ["Orodhesha makundi na kiasi cha bajeti kwa kila moja.", "Leta jumla halisi kutoka Somo la 2.", "Ongeza tofauti = halisi kutoa bajeti.", "Ongeza asilimia ya tofauti = tofauti kugawanya kwa bajeti.", "Eleza tofauti tatu kubwa zaidi kwa sentensi moja kila moja."],
          words: [["Bajeti", "mpango wa pesa zinazoingia na zinazotoka."], ["Tofauti (variance)", "tofauti kati ya bajeti na kilichotokea kweli."]],
          slides: [
            { title: "Bajeti dhidi ya hali halisi", bullets: ["Bajeti: mpango", "Halisi: kilichotokea", "Tofauti: kinachotofautiana"] },
            { title: "Tengeneza jedwali", bullets: ["Kundi, bajeti, halisi", "Tofauti na asilimia ya tofauti"] },
            { title: "Eleza zile kubwa", bullets: ["Tofauti tatu kubwa zaidi", "Sentensi moja kila moja yenye sababu halisi"] }
          ],
          tryIt: "Tengeneza jedwali la bajeti dhidi ya hali halisi kwa mwezi wako lenye tofauti na asilimia ya tofauti. Eleza tofauti tatu kubwa zaidi kwa sentensi moja kila moja.",
          youCanNow: "kutengeneza bajeti, kuilinganisha na matokeo halisi na kueleza tofauti.",
          quickCheck: [
            { objective: "O3", q: "Katika bajeti dhidi ya hali halisi, tofauti inahesabiwaje katika kozi hii?", options: ["Bajeti kuongeza halisi", "Bajeti kugawanya kwa halisi", "Halisi kutoa bajeti", "Halisi kuzidisha bajeti"], answer: 2, why: "Tofauti ni halisi kutoa bajeti." },
            { objective: "O3", q: "Vifaa vilizidi bajeti kwa $200. AI inapendekeza \"bei zilipanda\", lakini unajua ulinunua zaidi kwa ajili ya tukio. Unaandika nini?", options: ["Sababu halisi: vifaa vya ziada vilinunuliwa kwa ajili ya tukio", "Sababu ya AI, kwa kuwa inasikika vizuri", "Hakuna sababu kabisa", "Kwamba bajeti ilikuwa na kosa"], answer: 0, why: "Ni wewe tu unayejua sababu halisi; AI inaweza kusaidia maneno, si ukweli." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kupanga pesa",
        questions: [
          { objective: "O1", q: "Ni kipi hupaswi KAMWE kubandika katika zana ya AI ya jumla?", options: ["Orodha ya makundi", "Jedwali la kiasi lililosafishwa", "Namba zako za akaunti ya benki na za routing", "Swali kuhusu maana ya \"variance\""], answer: 2, why: "Namba za akaunti ni taarifa za fedha za siri." },
          { objective: "O1", q: "AI inatoa jumla inayoonekana si sahihi. Unapaswa kufanya nini?", options: ["Acha spreadsheet ifanye hesabu na ukague kwa mkono", "Iamini AI", "Futa data", "Ipeleke kwa bodi"], answer: 0, why: "AI inaweza kukosea hesabu; spreadsheet na ukaguzi wa mkono vinathibitisha." },
          { objective: "O2", q: "=SUMIF(C:C, \"Rent\", D:D) inafanya nini?", options: ["Inafuta mistari ya kodi ya pango", "Inahesabu wateja", "Inapanga kwa tarehe", "Inajumlisha kiasi katika safu D pale safu C inaposema Rent"], answer: 3, why: "SUMIF inajumlisha kiasi kinachotimiza sharti." },
          { objective: "O3", q: "Bajeti ya mafuta ilikuwa $500; halisi ilikuwa $800. Tofauti ni ipi?", options: ["$1,300", "$300 juu ya bajeti", "$300 chini ya bajeti", "$500"], answer: 1, why: "Halisi kutoa bajeti = 800 - 500 = 300 juu ya bajeti." },
          { objective: "O3", q: "Nani anapaswa kueleza kwa nini tofauti ilitokea?", options: ["AI peke yake", "Wewe, ukitumia kilichotokea kweli", "Hakuna mtu", "Tovuti yoyote tu"], answer: 1, why: "Ni wewe tu unayejua sababu halisi za namba." }
        ]
      }
    },
    {
      name: "Sura 2: Kupanga mipango na kueleza",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kutabiri mtiririko wa pesa kwa wiki 13 zijazo",
          minutes: 6,
          goal: "Tengeneza utabiri wa mtiririko wa pesa wa wiki 13 na upate wiki ambayo pesa ni chache zaidi.",
          text: [
            "Faida na pesa taslimu si kitu kimoja. Unaweza kuwa na faida kwenye karatasi na bado ukaishiwa na pesa taslimu kama wateja wanalipa kwa kuchelewa au bili kubwa inafika. Utabiri wa mtiririko wa pesa unaonyesha lini pesa zinaingia na lini zinatoka, wiki baada ya wiki.",
            "Utabiri wa wiki 13 (kama miezi mitatu) ni zana ya kawaida. Mistari: pesa za mwanzo, pesa zinazoingia (mauzo, malipo, michango, ruzuku), pesa zinazotoka (mishahara, kodi ya pango, wasambazaji, marejesho ya mkopo), na pesa za mwisho. Pesa za mwisho za kila wiki zinakuwa pesa za mwanzo za wiki inayofuata.",
            "Muombe AI atengeneze kiolezo: \"Make a 13-week cash flow forecast table for Google Sheets with formulas where each week's ending cash becomes the next week's starting cash.\" (Tengeneza jedwali la utabiri wa wiki 13 lenye fomula.) Jaza namba unazotarajia, kisha tafuta wiki ya chini kabisa. Hapo ndipo unaweza kuhitaji kuahirisha ununuzi, kufuatilia malipo au kupanga mkopo wa akiba (line of credit)."
          ],
          steps: ["Muombe AI kiolezo cha mtiririko wa pesa wa wiki 13 chenye fomula.", "Weka salio la pesa la leo kama pesa za mwanzo za wiki 1.", "Weka pesa zinazotarajiwa kuingia na kutoka kwa kila wiki.", "Hakikisha pesa za mwisho zinahamia wiki inayofuata.", "Weka alama kwenye wiki ya chini kabisa na uipangie."],
          words: [["Mtiririko wa pesa (cash flow)", "muda ambao pesa zinaingia na kutoka."], ["Utabiri (forecast)", "makadirio bora ya namba za baadaye."], ["Mkopo wa akiba (line of credit)", "kiasi kilichowekwa ambacho benki inakuruhusu kukopa unapohitaji."]],
          slides: [
            { title: "Faida si pesa taslimu", bullets: ["Malipo yanayochelewa na bili kubwa", "Unaweza kuishiwa pesa hata ukiwa na faida"] },
            { title: "Mistari ya utabiri wa wiki 13", bullets: ["Pesa za mwanzo", "Pesa zinazoingia na pesa zinazotoka", "Pesa za mwisho zinahamia wiki inayofuata"] },
            { title: "Tafuta wiki ya chini kabisa", bullets: ["Ahirisha ununuzi", "Fuatilia malipo", "Panga mkopo mapema"] }
          ],
          tryIt: "Tengeneza utabiri wa mtiririko wa pesa wa wiki 13 kwa msaada wa AI. Jaza namba halisi au za mfano na uweke alama kwenye wiki ya chini kabisa pamoja na hatua moja utakayochukua.",
          youCanNow: "kutengeneza utabiri wa mtiririko wa pesa wa wiki 13 na kupanga kwa ajili ya wiki ngumu zaidi.",
          quickCheck: [
            { objective: "O4", q: "Utabiri wa mtiririko wa pesa unaonyesha nini?", options: ["Faida yako ya mwaka jana", "Lini pesa zinaingia na kutoka, wiki baada ya wiki", "Alama yako ya mikopo", "Bili yako ya kodi"], answer: 1, why: "Utabiri wa mtiririko wa pesa unaonyesha pesa kuingia na kutoka wiki baada ya wiki." },
            { objective: "O4", q: "Utabiri wako unaonyesha pesa chini ya sifuri katika wiki 7. Unaweza kufanya nini?", options: ["Hakuna kitu; ni utabiri tu", "Ficha wiki 7 kwa bodi", "Tumia zaidi katika wiki 6", "Ahirisha ununuzi, fuatilia malipo au panga mkopo wa akiba"], answer: 3, why: "Wiki ya chini kabisa ndiyo unayopanga mapema ili kuziba pengo." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kutambua matatizo na udanganyifu kwa AI",
          minutes: 5,
          goal: "Tumia AI na ukaguzi rahisi kutambua matumizi yasiyo ya kawaida, malipo yaliyorudiwa na ulaghai.",
          text: [
            "AI na spreadsheet zinaweza kuonyesha mambo ambayo mtu mwenye shughuli nyingi anayakosa: malipo yaliyorudiwa, usajili wa kulipia uliousahau, ongezeko la ghafla katika kundi, au msambazaji usiyemtambua.",
            "Uliza: \"Look at this cleaned table. List possible duplicates, unusual amounts and categories that changed a lot from last month.\" (Angalia jedwali hili lililosafishwa na uorodheshe malipo yanayoweza kuwa yamerudiwa, kiasi kisicho cha kawaida na makundi yaliyobadilika sana tangu mwezi uliopita.) Kisha chunguza kila kitu wewe mwenyewe.",
            "Kuwa macho na ulaghai unaolenga biashara na mashirika yasiyo ya faida: ankara za uongo, barua pepe zinazokuomba ubadilishe taarifa za benki za msambazaji, na maombi ya haraka ya malipo yanayoonekana kutoka kwa bosi. Thibitisha kila wakati kwa kupiga simu kwa namba unayoijua tayari. Ripoti udanganyifu kwenye ReportFraud.ftc.gov (tovuti ya FTC, tume ya biashara ya Marekani)."
          ],
          steps: ["Muombe AI aorodheshe malipo yanayoweza kuwa yamerudiwa na kiasi kisicho cha kawaida.", "Linganisha makundi na mwezi uliopita.", "Chunguza kila kilichoonyeshwa wewe mwenyewe.", "Thibitisha badiliko lolote la taarifa za benki kwa kupiga namba unayoijua.", "Ripoti udanganyifu kwa FTC."],
          words: [["Malipo yaliyorudiwa", "kulipa bili ile ile mara mbili."], ["Ankara (invoice)", "bili inayoomba malipo."], ["Udanganyifu wa malipo", "kumdanganya mtu atume pesa mahali pasipo sahihi."]],
          slides: [
            { title: "Kile AI inachoweza kuonyesha", bullets: ["Malipo yaliyorudiwa", "Usajili wa kulipia uliosahaulika", "Ongezeko la ghafla au wasambazaji wasiojulikana"] },
            { title: "Ulaghai dhidi ya biashara", bullets: ["Ankara za uongo", "\"Tafadhali badilisha taarifa zetu za benki\"", "Maombi ya haraka yanayoonekana kutoka kwa bosi"] },
            { title: "Linda pesa", bullets: ["Piga simu kwa namba unayoijua tayari", "Chunguza kila kilichoonyeshwa", "Ripoti kwenye ReportFraud.ftc.gov"] }
          ],
          sources: [{ name: "FTC (tume ya biashara ya Marekani): ReportFraud.ftc.gov", url: "https://reportfraud.ftc.gov/" }, { name: "FTC: Jinsi ya kutambua na kuepuka ulaghai wa phishing", url: "https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams" }],
          tryIt: "Muombe AI apitie miamala yako iliyosafishwa kutafuta malipo yaliyorudiwa na kiasi kisicho cha kawaida. Chunguza kila kilichoonyeshwa na uandike ulichogundua.",
          youCanNow: "kutumia AI na ukaguzi rahisi kutambua matumizi yasiyo ya kawaida na ulaghai wa malipo.",
          quickCheck: [
            { objective: "O5", q: "Ni upi ulaghai wa kawaida unaolenga biashara na mashirika yasiyo ya faida?", options: ["Mteja kulipa kwa wakati", "Malipo ya kila mwezi ya kodi ya pango", "Taarifa ya benki kufika kwa posta", "Barua pepe inayokuomba ubadilishe taarifa za benki za msambazaji"], answer: 3, why: "Maombi ya kubadilisha taarifa za benki za msambazaji ni ulaghai wa kawaida." },
            { objective: "O5", q: "AI inaonyesha malipo mawili sawa kwa msambazaji mmoja siku moja. Unafanya nini?", options: ["Kudhani AI iko sahihi na kufuta yote mawili", "Kuchunguza wewe mwenyewe, kwa mfano kwa kukagua ankara", "Kupuuza", "Kumlipa msambazaji mara ya tatu"], answer: 1, why: "AI inaonyesha matatizo yanayowezekana; wewe unachunguza kila moja mwenyewe." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kueleza namba na kutunza kumbukumbu vizuri",
          minutes: 5,
          goal: "Andika taarifa ya pesa kwa maneno rahisi na ujue muda wa kutunza kumbukumbu.",
          text: [
            "Wamiliki, washirika na bodi wanahitaji taarifa fupi na wazi, si spreadsheet kubwa sana. Taarifa nzuri ina sentensi tano: kiasi kilichoingia, kiasi kilichotoka, tofauti kubwa zaidi na sababu yake, hali ya pesa taslimu kutoka utabiri wako, na uamuzi au hatua moja inayohitajika.",
            "Muombe AI ageuze namba zako kuwa rasimu, kisha kagua kila namba dhidi ya spreadsheet. Ondoa chochote ambacho AI iliongeza ambacho si kweli.",
            "Tunza kumbukumbu. IRS (mamlaka ya kodi ya Marekani) inasema utunze kumbukumbu zinazothibitisha mapato na makato hadi muda wa ukomo (period of limitations) wa ritani hiyo uishe, kwa kawaida miaka 3, muda mrefu zaidi katika hali fulani, na angalau miaka 4 kwa kumbukumbu za kodi za ajira. Angalia irs.gov au muulize mhasibu kuhusu hali yako."
          ],
          steps: ["Andika sentensi tano: kilichoingia, kilichotoka, tofauti kubwa zaidi, hali ya pesa taslimu, uamuzi unaohitajika.", "Muombe AI apange maneno vizuri.", "Kagua kila namba dhidi ya spreadsheet.", "Hifadhi spreadsheet na risiti katika folda salama yenye nakala ya akiba.", "Angalia irs.gov kujua muda wa kuzitunza."],
          words: [["Bodi", "kikundi kinachosimamia shirika lisilo la faida au kampuni."], ["Muda wa ukomo (period of limitations)", "muda ambao IRS inao kukagua au kubadilisha ritani ya kodi."]],
          slides: [
            { title: "Taarifa ya sentensi tano", bullets: ["Pesa zilizoingia na pesa zilizotoka", "Tofauti kubwa zaidi na sababu yake", "Hali ya pesa taslimu na uamuzi unaohitajika"] },
            { title: "AI inaandika rasimu, wewe unathibitisha", bullets: ["Kagua kila namba", "Ondoa chochote kisicho kweli"] },
            { title: "Tunza kumbukumbu (IRS)", bullets: ["Kwa kawaida miaka 3; zaidi katika hali fulani", "Angalau miaka 4 kwa kumbukumbu za kodi za ajira", "Angalia irs.gov au muulize mhasibu"] }
          ],
          sources: [{ name: "IRS: Nitunze kumbukumbu kwa muda gani?", url: "https://www.irs.gov/businesses/small-businesses-self-employed/how-long-should-i-keep-records" }],
          tryIt: "Kazi ya mwisho: andika taarifa ya pesa ya sentensi tano kutoka mwezi wako uliopangwa katika makundi, jedwali la bajeti dhidi ya hali halisi na utabiri wa wiki 13. Kagua kila namba, kisha hifadhi faili zote katika folda yenye nakala ya akiba.",
          youCanNow: "kupanga, kupangia mipango na kueleza pesa za shirika kwa msaada wa AI huku ukilinda data.",
          quickCheck: [
            { objective: "O6", q: "Ni kipi kinafaa kuwa katika taarifa ya pesa ya sentensi tano?", options: ["Hali ya pesa taslimu kutoka utabiri wako", "Kila muamala wa mwezi", "Namba za akaunti za benki", "Anwani za nyumbani za wafanyakazi"], answer: 0, why: "Taarifa inaeleza kilichoingia, kilichotoka, tofauti kubwa zaidi, hali ya pesa taslimu na uamuzi unaohitajika." },
            { objective: "O6", q: "Rasimu ya AI inasema mapato yalipanda 20%, lakini sheet yako inaonyesha 12%. Unafanya nini?", options: ["Ituma; inakaribia", "Izungushe kuwa 15%", "Irekebishe ilingane na spreadsheet kabla ya kutuma", "Ondoa namba zote"], answer: 2, why: "Kagua kila namba dhidi ya spreadsheet na uondoe chochote kisicho kweli." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kupanga mipango na kueleza",
        questions: [
          { objective: "O4", q: "Kwa nini biashara yenye faida bado inaweza kuishiwa pesa taslimu?", options: ["Faida daima ni sawa na pesa taslimu", "Benki zinashikilia faida zote", "Haiwezi kutokea", "Malipo yanaingia kwa kuchelewa wakati bili zinafika"], answer: 3, why: "Muda wa pesa kuingia na kutoka ni muhimu." },
          { objective: "O4", q: "Katika utabiri wa mtiririko wa pesa, pesa za mwanzo za wiki ijayo ni sawa na:", options: ["Pesa za mwisho za wiki hii", "Faida ya mwaka jana", "Bajeti", "Sifuri"], answer: 0, why: "Kila wiki inahamishia salio wiki inayofuata." },
          { objective: "O5", q: "Barua pepe kutoka kwa msambazaji inakuomba utume malipo yajayo kwenye akaunti mpya ya benki. Unafanya nini?", options: ["Ubadilishe mara moja", "Ujibu kwa taarifa zako za kuingia benki", "Umpigie msambazaji kwa namba unayoijua tayari ili kuthibitisha", "Uipeleke kwa wafanyakazi wote"], answer: 2, why: "Maombi ya kubadilisha taarifa za benki ni udanganyifu wa kawaida." },
          { objective: "O6", q: "IRS inasema muda wa kawaida wa kutunza kumbukumbu zinazothibitisha ritani ni upi?", options: ["Wiki moja", "Usizitunze kamwe", "Miaka 50 hasa", "Kwa kawaida miaka 3, zaidi katika hali fulani"], answer: 3, why: "Mwongozo wa IRS unatoa miaka 3 kama muda wa kawaida, pamoja na vighairi." },
          { objective: "O6", q: "AI inaandika rasimu ya taarifa ya pesa kwa bodi. Lazima ufanye nini kabla ya kuituma?", options: ["Ituma bila kuisoma", "Ongeza namba za ziada ili ionekane vizuri", "Kagua kila namba dhidi ya spreadsheet", "Futa spreadsheet"], answer: 2, why: "AI inaweza kukosea namba; wewe unathibitisha." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI katika Fedha",
    questions: [
      { objective: "O1", q: "AI ni hodari wa nini katika kazi za fedha?", options: ["Kutoa maamuzi ya mwisho ya kodi", "Kuandika fomula za spreadsheet na kueleza maneno", "Kuhakikisha faida ya uwekezaji", "Kusaini nyaraka za benki"], answer: 1, why: "AI inasaidia fomula na maelezo, si majibu ya mwisho ya kodi au sheria." },
      { objective: "O1", q: "Kabla ya kubandika miamala kwa AI, unapaswa:", options: ["Kuondoa namba za akaunti na kubadilisha majina kwa lebo", "Kuongeza nywila yako", "Kuweka namba za simu za wafadhili", "Kuongeza namba za Social Security"], answer: 0, why: "Data iliyosafishwa inalinda faragha." },
      { objective: "O1", q: "\"Customer A\" badala ya jina halisi ni:", options: ["Kosa la kuandika", "Kundi", "Lebo inayolinda faragha", "Tofauti"], answer: 2, why: "Lebo zinaficha majina ya siri." },
      { objective: "O1", q: "Unapaswa kuthibitisha swali la kodi wapi?", options: ["irs.gov, ofisi ya kodi ya jimbo lako au mhasibu mwenye leseni", "Chapisho la mitandao ya kijamii", "Mazungumzo na AI peke yake", "Kubahatisha kwa rafiki"], answer: 0, why: "Vyanzo rasmi na wataalamu wanatoa majibu ya kodi ya kuaminika." },
      { objective: "O2", q: "Ni lipi kundi la kawaida la mapato kwa shirika lisilo la faida?", options: ["Gharama za bidhaa", "Mafuta", "Kodi ya pango", "Ruzuku"], answer: 3, why: "Ruzuku na michango ni mapato ya shirika lisilo la faida." },
      { objective: "O2", q: "Muamala ni nini?", options: ["Aina ya bajeti", "Mwendo mmoja wa pesa kuingia au kutoka", "Fomu ya kodi", "Nywila ya benki"], answer: 1, why: "Kila mauzo au malipo ni muamala." },
      { objective: "O2", q: "Baada ya AI kupendekeza makundi, unapaswa:", options: ["Kuyakubali yote", "Kurekebisha yale aliyokosea", "Kufuta sheet", "Kuyatuma kwa wateja kwa barua pepe"], answer: 1, why: "Mapendekezo ya AI yanahitaji kukaguliwa." },
      { objective: "O2", q: "Jumla za makundi zinapaswa:", options: ["Kuwa kubwa kuliko jumla kuu", "Kuwa za kubahatisha", "Kuachwa tupu", "Kulingana na jumla kuu"], answer: 3, why: "Ukaguzi huu unakamata mistari iliyokosekana au iliyohesabiwa mara mbili." },
      { objective: "O3", q: "Bajeti ni:", options: ["Mpango wa pesa kuingia na kutoka", "Akaunti ya benki", "Ritani ya kodi", "Mkopo"], answer: 0, why: "Ni mpango wa pesa kwa kipindi fulani." },
      { objective: "O3", q: "Bajeti ya matangazo $1,000; halisi $700. Tofauti ni:", options: ["$300 juu ya bajeti", "$1,700", "$300 chini ya bajeti", "$700"], answer: 2, why: "700 - 1,000 = -300, kwa hiyo $300 chini ya bajeti." },
      { objective: "O3", q: "Kwa nini ueleze kila tofauti kubwa?", options: ["Ili ripoti iwe ndefu zaidi", "Haihitajiki kamwe", "Ili kuficha makosa", "Ili wanaofanya maamuzi wajue kilichotokea na kwa nini"], answer: 3, why: "Maelezo yanageuza namba kuwa maamuzi." },
      { objective: "O4", q: "Utabiri wa mtiririko wa pesa wa kozi hii unahusu wiki ngapi?", options: ["2", "13", "52", "100"], answer: 1, why: "Utabiri wa wiki 13 unahusu kama miezi mitatu." },
      { objective: "O4", q: "Wiki ya chini kabisa katika utabiri wako inakuambia:", options: ["Faida yako yote", "Lini pesa taslimu zitakuwa chache zaidi, ili upange", "Bili yako ya kodi", "Hakuna kitu cha manufaa"], answer: 1, why: "Inaonyesha lini uchukue hatua mapema." },
      { objective: "O4", q: "Mkopo wa akiba (line of credit) ni:", options: ["Kiasi kilichowekwa ambacho benki inakuruhusu kukopa unapohitaji", "Mstari wa spreadsheet", "Aina ya mchango", "Makato ya kodi"], answer: 0, why: "Unaweza kuziba mapengo mafupi ya pesa taslimu." },
      { objective: "O5", q: "AI inaweza kusaidia kuonyesha nini katika miamala yako?", options: ["Ushindi wako wa bahati nasibu ujao", "Kodi kamili unayodaiwa", "Malipo yanayoweza kuwa yamerudiwa", "Nywila za wateja"], answer: 2, why: "AI inaweza kutambua mifumo kama malipo yaliyorudiwa." },
      { objective: "O5", q: "Barua pepe ya haraka inayoonekana kutoka kwa bosi wako inaomba uhamisho wa pesa (wire) leo. Unapaswa:", options: ["Kuthibitisha kwa simu kwa namba unayoijua tayari", "Kutuma mara moja", "Kujibu kwa taarifa za benki", "Kumpuuza bosi milele"], answer: 0, why: "Maombi ya haraka ya malipo ni ulaghai wa kawaida." },
      { objective: "O5", q: "Unaweza kuripoti udanganyifu wapi nchini Marekani?", options: ["Jukwaa lolote la mtandaoni", "Barua pepe ya tapeli", "Hakuna mahali", "ReportFraud.ftc.gov"], answer: 3, why: "FTC inakusanya ripoti za udanganyifu." },
      { objective: "O6", q: "Taarifa nzuri ya pesa kwa bodi ni:", options: ["Spreadsheet ghafi peke yake", "Sentensi tano zilizo wazi zenye namba muhimu na uamuzi", "Ripoti ya kurasa 40", "Bila namba kabisa"], answer: 1, why: "Fupi na wazi inasaidia watu kuamua." },
      { objective: "O6", q: "Kwa mujibu wa IRS, kumbukumbu za kodi za ajira zinapaswa kutunzwa kwa angalau:", options: ["Mwezi 1", "Miaka 4", "Mwaka 1", "Hakuna muda"], answer: 1, why: "IRS inasema angalau miaka 4 kwa kumbukumbu za kodi za ajira." },
      { objective: "O1", q: "Kozi hii inatoa ushauri wa uwekezaji.", options: ["Kweli: nunua kile AI inachopendekeza", "Kweli: wekeza pesa za ruzuku kila wakati", "Kweli: AI inachagua hisa", "Si kweli: muone mtaalamu mwenye leseni kwa hilo"], answer: 3, why: "Kozi inafundisha usimamizi wa pesa, si ushauri wa uwekezaji." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [1, 3, 6, 7, 9, 11, 12, 15, 17, 18]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Taarifa za siri zimeondolewa", objective: "O1", notYet: "Data bado ina namba za akaunti, namba za utambulisho au majina halisi.", meets: "Namba zote za akaunti na za utambulisho zimeondolewa na majina yamebadilishwa kwa lebo.", exceeds: "Anaweza kuonyesha jinsi hesabu za AI zilivyokaguliwa katika spreadsheet." },
      { name: "Makundi na jumla", objective: "O2", notYet: "Miamala haijapangwa, au jumla hazilingani na jumla kuu.", meets: "Kila muamala una kundi, SUMIF inajumlisha kila moja, na zinalingana na jumla kuu.", exceeds: "Makundi ambayo AI ilikosea yaligunduliwa na kurekebishwa, pamoja na maelezo ya yapi." },
      { name: "Bajeti dhidi ya hali halisi", objective: "O3", notYet: "Hakuna safu ya tofauti, au tofauti kubwa hazijaelezwa.", meets: "Tofauti na asilimia ya tofauti kwa kila kundi, na tatu kubwa zaidi zimeelezwa kwa sentensi moja kila moja.", exceeds: "Kila maelezo yanasema kitakachofanywa kuhusu jambo hilo mwezi ujao." },
      { name: "Utabiri wa wiki 13", objective: "O4", notYet: "Pesa za mwisho hazihamii wiki inayofuata, au wiki ya chini kabisa haijawekwa alama.", meets: "Wiki 13 zenye pesa zinazoingia, zinazotoka na pesa za mwisho zikihamishwa, na wiki ya chini kabisa imewekwa alama.", exceeds: "Ina mpango kwa ajili ya wiki ya chini kabisa." },
      { name: "Taarifa ya pesa", objective: "O6", notYet: "Haipo, ni ndefu kuliko inavyohitajika, au ina namba zisizolingana na sheet.", meets: "Sentensi tano: kilichoingia, kilichotoka, tofauti kubwa zaidi, hali ya pesa taslimu na uamuzi, zote zikilingana na sheet.", exceeds: "Iko wazi kiasi kwamba mtu asiye na ujuzi wa fedha anaielewa, na inasema kumbukumbu zinatunzwa wapi." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Mashirika yanayosasisha jedwali la bajeti dhidi ya hali halisi na utabiri wa wiki 13 kila mwezi kwa miezi mitatu (utafiti wa kufuatilia)",
      "Malipo yaliyorudiwa, usajili uliosahaulika au ulaghai uliogunduliwa na kuzuiwa ndani ya siku 60",
      "Wamiliki au bodi wanaoripoti kupata taarifa ya pesa ya kila mwezi iliyo wazi"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta yenye Google Sheets au Excel",
      "Msaidizi wa AI wa bure (ChatGPT, Microsoft Copilot au Google Gemini)",
      "Miamala ya mwezi mmoja iliyotolewa kutoka benki au zana ya hesabu, au data ya mfano ya kozi",
      "Kama dakika 60 kwa masomo na majaribio, pamoja na muda wa kutengeneza spreadsheet"
    ],
    facilitatorNotes: [
      "Fanyeni jaribio la awali pamoja, kisha fanyeni sura moja kwa kila kipindi; tengenezeni fomula za SUMIF na za utabiri kwenye skrini ya pamoja.",
      "Toa mwezi wa mfano wa miamala ya kubuni kwa wanafunzi wasiotaka kutumia data halisi.",
      "Hakikisha kila mwanafunzi ameondoa namba za akaunti na majina kabla ya kubandika chochote kwa AI.",
      "Usitoe ushauri wa kodi, mishahara, sheria wala uwekezaji; peleka maswali hayo kwa irs.gov, ofisi ya kodi ya jimbo au mtaalamu mwenye leseni.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
