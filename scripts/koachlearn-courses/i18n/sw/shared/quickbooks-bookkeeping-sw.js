"use strict";

// Koach Learn course (Swahili translation of shared/quickbooks-bookkeeping.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const CERTIPORT = { name: "Certiport (Pearson VUE): vyeti vya Intuit, pamoja na QuickBooks Certified User na Intuit Certified Bookkeeping Professional", url: "https://certiport.pearsonvue.com/Certifications/QuickBooks/Certified-User/Overview" };
const ACADEMY = { name: "Intuit Academy (tovuti ya mafunzo na vyeti ya Intuit)", url: "https://academy.intuit.com/" };
const TESTDRIVE = { name: "Msaada wa Intuit QuickBooks: Test drive na kufanya mazoezi kwa QuickBooks Online", url: "https://quickbooks.intuit.com/learn-support/en-us/help-article/small-business-processes/test-drive-quickbooks-online/L9C12ODlA_US_en_US" };
const PROADVISOR = { name: "Mafunzo na cheti cha QuickBooks ProAdvisor (kwa wahasibu)", url: "https://quickbooks.intuit.com/accountants/training-certification/" };

module.exports = {
  id: "quickbooks-bookkeeping-sw",
  lang: "sw",
  translationOf: "quickbooks-bookkeeping",
  category: "Workforce Development",
  name: "Utunzaji wa Hesabu kwa QuickBooks",
  skills: "Kuandaa orodha ya akaunti, Kurekodi ankara na malipo, Kuingiza bili na matumizi, Kulinganisha akaunti ya benki, Kusoma ripoti kuu, Kupanga kupata cheti cha QuickBooks",
  outcome: "kutunza hesabu za biashara ndogo katika QuickBooks Online kwa mwezi mmoja: kupanga pesa katika akaunti sahihi, kurekodi mauzo, malipo, bili na matumizi, kulinganisha benki na rekodi zako, kuendesha ripoti kuu, na kufuata mpango wa kupata cheti cha QuickBooks.",
  about: [
    "Karibu kila biashara ndogo, kanisa na shirika lisilo la faida linahitaji mtu wa kutunza hesabu zake, na mengi yanatumia QuickBooks. Kutunza hesabu kunaweza kuwa kazi ya muda wote, kazi ya muda mfupi unayofanya nyumbani, au biashara ya pembeni inayohudumia wateja kadhaa. Kozi hii ni kwa wanaotafuta kazi, wafanyakazi wa ofisi wanaotaka nafasi bora, wamiliki wa biashara ndogo na wanaojitolea katika mashirika yasiyo ya faida.",
    "Utafanya mazoezi ya kazi halisi: orodha ya akaunti, ankara na malipo ya wateja, bili na matumizi, bank feed, ulinganisho wa benki, ripoti ya faida na hasara na mizania, na orodha ya kukagua ya mwisho wa mwezi. Unafanya mazoezi katika test drive ya QuickBooks Online ya Intuit, kampuni ya mfano unayoweza kufungua kwenye kivinjari ambapo hakuna unachofanya kinachohifadhiwa, au kwenye karatasi kama huna kompyuta.",
    "Kozi hii inakuandaa kwa kazi ya kutunza hesabu na kwa vyeti vya Intuit kama QuickBooks Certified User na Intuit Certified Bookkeeping Professional, ambavyo mitihani yake inasimamiwa na Certiport. Haitoi cheti chochote; unakipata kwa kufaulu mtihani rasmi. Angalia kurasa rasmi kwa maelezo na ada za sasa.",
    "Kama tayari ulisoma \"Misingi ya Kutunza Hesabu\", hii ni hatua inayofuata. Kila somo linachukua kama dakika tano, lina kazi ya \"Jaribu sasa\" na jaribio fupi la maswali mawili. Kuna jaribio la maarifa baada ya kila sura, mtihani wa maswali 20 mwishoni, na kazi ya mwisho unayoweza kumwonyesha mwajiri au mteja."
  ],
  finalTask: "Tengeneza kifurushi chako cha mwisho wa mwezi cha QuickBooks kwa biashara ya mfano (kampuni ya usafi, gari la chakula au shirika dogo lisilo la faida): (1) orodha ya akaunti yenye angalau akaunti 12, kila moja ikiwa imewekwa alama ya mapato, matumizi, mali, dhima au mtaji; (2) kumbukumbu ya angalau miamala 10 uliyoingiza katika test drive ya QuickBooks Online au kwenye karatasi (angalau ankara 3, malipo 2 ya wateja na bili au matumizi 4), kila mmoja na tarehe yake, mteja au muuzaji, akaunti na kiasi; (3) ulinganisho wa benki wa mwezi unaoishia na tofauti ya sifuri, au maelezo yaliyoandikwa ya kile ambacho bado hakilingani na kwa nini; (4) muhtasari wa aya moja wa faida na hasara ya mwezi; na (5) mpango wa siku 60 wa cheti wenye tarehe: cheti kipi cha Intuit utajiandaa kwacho, lini utaangalia ukurasa wake rasmi, na lini utafanya mitihani ya mazoezi.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima na vijana wanaotaka kazi ya ofisi au ya kutunza hesabu: wanaotafuta kazi, wafanyakazi wa ofisi na maduka wanaotaka kupanda cheo, watu wanaorudi nyumbani kutoka gerezani, wahamiaji wenye uzoefu wa biashara, wamiliki wa biashara ndogo wanaotunza hesabu zao wenyewe, na wanaojitolea katika mashirika yasiyo ya faida wanaoshughulikia pesa.",
    startingPoint: "Wanaweza kutumia kivinjari cha wavuti na kufanya hesabu za kila siku kwa kikokotoo. Baadhi wameshatunza kumbukumbu za pesa kwenye karatasi au spreadsheet. Wengi hawajawahi kutumia QuickBooks wala kusikia kuhusu orodha ya akaunti, ulinganisho wa benki au mizania.",
    gap: "Waajiri na wateja wanataka watunza hesabu wanaojua tayari jinsi QuickBooks inavyorekodi mauzo, bili na shughuli za benki, na wanaoweza kufanya hesabu zilingane na benki kila mwezi. Bila hilo, makosa madogo yanajilimbikiza na kuleta kodi zisizo sahihi, bili zilizosahaulika na ankara zisizolipwa. Kujifunza hatua na ripoti, na kuwa na mpango wa kupata cheti cha Intuit, kunamfanya mwanafunzi aajiriwe kwa urahisi zaidi na aweze kuhudumia wateja wake mwenyewe.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi (kama darasa la 7 hadi 8); kila neno la uhasibu linaelezwa",
      "Vifaa: kompyuta au tableti yenye kivinjari cha wavuti kwa test drive; kila zoezi linafanyika pia kwenye karatasi",
      "Gharama: test drive inafunguka kwenye kivinjari bila kununua QuickBooks; haihifadhi mabadiliko, kwa hiyo wanafunzi wanaandika maelezo",
      "QuickBooks inabadilisha skrini zake mara kwa mara, kwa hiyo kozi inafundisha vitendo na majina ya ripoti, si njia kamili za menyu",
      "Faragha: mazoezi yanatumia kampuni ya mfano au namba za kubuni, kamwe si taarifa halisi za kuingia benki wala namba za akaunti",
      "Sheria za kodi zinabadilika na zinatofautiana kwa mahali: masomo yanaelekeza kwa irs.gov au mtaalamu wa kodi na hayatoi ushauri wa kodi"
    ],
    prerequisites: "Hakuna, lakini \"Misingi ya Kutunza Hesabu\" au \"Excel na Spreadsheets\" inawasaidia wanafunzi ambao hawajawahi kufuatilia pesa zinazoingia na kutoka."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa tangazo la kazi ya kutunza hesabu au ombi la mteja", action: "kuorodhesha kazi kuu za mtunza hesabu wa QuickBooks na kutaja cheti cha Intuit kinachofaa kazi hiyo", standard: "ukitaja angalau kazi nne na ukurasa rasmi ambapo cheti kinaangaliwa" },
    { id: "O2", condition: "Ukipewa orodha ya shughuli za pesa za biashara ndogo", action: "kupanga kila kipengele katika aina sahihi ya akaunti katika orodha ya akaunti", standard: "ukiweka angalau vipengele 9 kati ya 10 katika aina sahihi ya akaunti" },
    { id: "O3", condition: "Ukipewa mauzo, mteja na malipo", action: "kurekodi ankara au risiti ya mauzo na malipo ya mteja katika QuickBooks", standard: "kwa mteja, tarehe, kiasi na akaunti ya mapato sahihi, na bila ankara kubaki wazi baada ya kulipwa" },
    { id: "O4", condition: "Ukipewa bili, risiti na muuzaji", action: "kuingiza bili, matumizi na malipo ya bili katika QuickBooks", standard: "kwa muuzaji, tarehe, kiasi na akaunti ya matumizi sahihi, na risiti ikiwa imeambatishwa au imeandikwa" },
    { id: "O5", condition: "Ukipewa shughuli za benki za mwezi mmoja na taarifa ya benki", action: "kuoanisha bank feed na kulinganisha akaunti ya benki", standard: "ukimaliza na tofauti ya sifuri, au maelezo yaliyoandikwa ya kile ambacho bado hakilingani" },
    { id: "O6", condition: "Mwishoni mwa mwezi", action: "kuendesha na kueleza ripoti ya faida na hasara, mizania na ripoti ya ankara zilizo wazi", standard: "ukisema faida au hasara ya mwezi na nani bado anadaiwa pesa" }
  ],
  chapters: [
    {
      name: "Sura 1: Kuanza na kurekodi mauzo",
      lessons: [
        {
          title: "Kazi ya mtunza hesabu wa QuickBooks na njia ya kuifikia",
          objectives: ["O1"],
          minutes: 5,
          goal: "Orodhesha kazi kuu za mtunza hesabu wa QuickBooks na utaje cheti kinachoweza kukusaidia kuajiriwa.",
          text: [
            "Mtunza hesabu anarekodi pesa za biashara ili mmiliki ajue kila wakati hali yake. Katika QuickBooks hilo linamaanisha: kutuma ankara na kurekodi malipo ya wateja, kuingiza bili na matumizi, kupitia bank feed, kulinganisha benki kila mwezi, kuendesha ripoti, na kutunza risiti. Watunza hesabu wanafanya kazi kwa kampuni moja, kwa kampuni ya uhasibu, au kwa wateja wadogo kadhaa kama biashara yao wenyewe. Makanisa na mashirika yasiyo ya faida yanawahitaji pia.",
            "QuickBooks Online ni toleo la Intuit la wavuti, linalotumiwa kwenye kivinjari. QuickBooks Desktop inasakinishwa kwenye kompyuta. Wateja wengi wapya wa biashara ndogo wanatumia QuickBooks Online, kwa hiyo kozi hii inaitumia, lakini mawazo ni yale yale katika zote mbili.",
            "Vyeti viwili vya Intuit vinafaa kozi hii. QuickBooks Certified User inaonyesha unaweza kutumia QuickBooks. Intuit Certified Bookkeeping Professional inaonyesha unajua misingi ya kutunza hesabu. Mitihani yote miwili inasimamiwa na Certiport, biashara ya Pearson VUE, na Intuit Academy inatoa mafunzo. Wahasibu wanaweza pia kupata cheti cha QuickBooks ProAdvisor. Kozi hii inakuandaa; haitoi cheti chochote. Ada, masharti na maelezo ya mitihani yanabadilika, kwa hiyo angalia kurasa rasmi.",
            "Mtunza hesabu si mtayarishaji wa kodi wala mhasibu aliyesajiliwa (CPA). Wewe unaweka kumbukumbu safi; maswali ya kodi yanaenda kwa mtaalamu wa kodi au irs.gov."
          ],
          words: [["Mtunza hesabu", "mtu anayerekodi pesa zinazoingia na kutoka katika biashara na kuhakikisha kumbukumbu ni sahihi."], ["QuickBooks Online", "programu ya Intuit ya kutunza hesabu inayoendeshwa kwenye kivinjari cha wavuti."], ["Cheti", "hati inayoonyesha umefaulu mtihani rasmi."], ["Certiport", "kampuni ya Pearson VUE inayosimamia mitihani ya vyeti ya Intuit."], ["CPA", "certified public accountant: mhasibu mwenye leseni anayeweza kufanya kazi ambazo mtunza hesabu hawezi, kama ukaguzi wa hesabu (audit)."]],
          slides: [
            { title: "Mtunza hesabu wa QuickBooks anafanya nini", bullets: ["Ankara na malipo ya wateja", "Bili na matumizi", "Bank feed na ulinganisho wa kila mwezi", "Ripoti na risiti"] },
            { title: "Watunza hesabu wanafanya kazi wapi", bullets: ["Kampuni moja au kampuni ya uhasibu", "Wateja wadogo kadhaa, kama biashara yako mwenyewe", "Makanisa na mashirika yasiyo ya faida"] },
            { title: "Vyeti vinavyoweza kusaidia", bullets: ["QuickBooks Certified User", "Intuit Certified Bookkeeping Professional", "Mitihani inasimamiwa na Certiport; angalia ukurasa rasmi"] },
            { title: "Jua nafasi yako", bullets: ["Wewe unaweka kumbukumbu safi", "Maswali ya kodi yanaenda kwa mtaalamu wa kodi au irs.gov", "Kozi hii inakuandaa; mtihani ndio unaotoa cheti"] }
          ],
          sources: [CERTIPORT, ACADEMY, PROADVISOR],
          tryIt: "Tafuta tangazo moja la kazi ya kutunza hesabu mtandaoni (tafuta \"bookkeeper QuickBooks\" kwenye tovuti ya kazi). Andika kazi nne zilizoorodheshwa na kama linaomba cheti cha QuickBooks. Kisha fungua ukurasa wa Certiport katika vyanzo na uandike majina ya vyeti viwili vya Intuit vinavyofaa.",
          youCanNow: "kuorodhesha kile mtunza hesabu wa QuickBooks anachofanya na kutaja cheti kinachofaa kazi hiyo.",
          quickCheck: [
            { objective: "O1", q: "Kazi ipi ni sehemu ya kazi ya kila mwezi ya mtunza hesabu?", options: ["Kusaini ripoti ya kodi ya kampuni kama CPA", "Kulinganisha akaunti ya benki", "Kukagua hesabu za kampuni nyingine", "Kutoa ushauri wa uwekezaji"], answer: 1, why: "Kulinganisha benki kila mwezi ni kazi ya msingi ya kutunza hesabu." },
            { objective: "O1", q: "Nani anasimamia mtihani wa QuickBooks Certified User?", options: ["IRS", "Ofisi ya kazi ya jimbo lako", "Mtumiaji yeyote wa QuickBooks", "Certiport, kwa niaba ya Intuit"], answer: 3, why: "Certiport, biashara ya Pearson VUE, inasimamia mitihani ya vyeti ya Intuit." }
          ]
        },
        {
          title: "Orodha ya akaunti na maingizo ya pande mbili",
          objectives: ["O2"],
          minutes: 6,
          goal: "Panga shughuli za pesa za biashara katika aina tano za akaunti.",
          text: [
            "Orodha ya akaunti (chart of accounts) ni orodha ya kila mahali pesa zinaweza kupangwa katika QuickBooks. Kila akaunti iko katika moja ya aina tano. Mapato: pesa zilizopatwa, kama mauzo au michango. Matumizi: gharama za kuendesha biashara, kama vifaa, kodi ya pango na mafuta. Mali: vitu ambavyo biashara inamiliki au inadai, kama akaunti ya benki, vifaa na pesa ambazo wateja bado wanadaiwa. Dhima: pesa ambazo biashara inadaiwa, kama mkopo, kadi ya mkopo au bili ambazo bado hazijalipwa. Mtaji: sehemu ya mmiliki, pamoja na pesa ambazo mmiliki aliweka au alitoa.",
            "Kila ingizo linagusa angalau akaunti mbili. Hii inaitwa utunzaji wa hesabu wa pande mbili (double-entry). Unapotuma ankara ya $200, mapato yanaongezeka na pesa ambazo wateja wanakudai (accounts receivable) zinaongezeka. Mteja akilipa, accounts receivable inapungua na benki inaongezeka. QuickBooks inakufanyia upande wa pili unapotumia fomu sahihi, ndiyo maana kuchagua fomu na akaunti sahihi ni muhimu.",
            "QuickBooks inaipa kila kampuni mpya orodha ya akaunti ya kuanzia kulingana na aina ya biashara. Mtunza hesabu anaisafisha: anaongeza akaunti ambazo biashara inazitumia kweli, anabadilisha majina yasiyo wazi, na anatumia majina yale yale kila mwezi. Shirika lisilo la faida linaweza kuongeza akaunti kama Michango, Ruzuku na Vifaa vya programu.",
            "Katika test drive, tafuta \"chart of accounts\" ili kufungua orodha na kuona aina ya kila akaunti."
          ],
          steps: ["Fungua orodha ya akaunti (itafute kama huwezi kuipata).", "Soma aina ya kila akaunti: mapato, matumizi, mali, dhima au mtaji.", "Ongeza akaunti ambazo biashara inazitumia kweli.", "Badilisha majina ya akaunti yasiyo wazi ili mtu yeyote ayaelewe.", "Tumia akaunti ile ile kila wakati kwa aina ile ile ya pesa."],
          words: [["Orodha ya akaunti", "orodha ya kila akaunti ambayo pesa zinaweza kupangwa ndani yake (chart of accounts)."], ["Mali", "kitu ambacho biashara inamiliki au inadai, kama pesa benki au vifaa (asset)."], ["Dhima", "pesa ambazo biashara inadaiwa, kama mkopo au bili isiyolipwa (liability)."], ["Mtaji", "sehemu ya mmiliki katika biashara (equity)."], ["Accounts receivable (A/R)", "pesa ambazo wateja wanadaiwa na biashara."], ["Accounts payable (A/P)", "pesa ambazo biashara inadaiwa na wauzaji kwa bili ambazo bado hazijalipwa."], ["Double-entry", "kila ingizo linabadilisha angalau akaunti mbili ili hesabu zibaki sawa."]],
          slides: [
            { title: "Aina tano za akaunti", bullets: ["Mapato na matumizi", "Mali na dhima", "Mtaji: sehemu ya mmiliki"] },
            { title: "Kila ingizo lina pande mbili", bullets: ["Ankara: mapato juu, A/R juu", "Malipo: A/R chini, benki juu", "Fomu sahihi inaifanya QuickBooks ifanye pande zote mbili"] },
            { title: "Safisha orodha", bullets: ["Ongeza akaunti ambazo biashara inatumia", "Badilisha majina yasiyo wazi", "Akaunti ile ile kwa aina ile ile ya pesa"] },
            { title: "Mfano wa shirika lisilo la faida", bullets: ["Mapato: Michango, Ruzuku", "Matumizi: Vifaa vya programu, Kodi ya pango"] }
          ],
          tryIt: "Kwenye karatasi, tengeneza safu mbili: Kipengele na Aina ya akaunti. Panga vipengele hivi kumi: vifaa vya usafi, pesa katika akaunti ya benki ya biashara, mteja anayedaiwa $150, mkopo wa lori, mauzo ya huduma za usafi, mmiliki kuweka $500 kuanzisha biashara, kodi ya pango, deni la kadi ya mkopo, ruzuku iliyotolewa (kwa shirika lisilo la faida), na mashine mpya ya kufyonza vumbi. Kisha fungua orodha ya akaunti katika test drive na ulinganishe jinsi kampuni ya mfano inavyopanga vitu vinavyofanana.",
          youCanNow: "kupanga shughuli za pesa katika akaunti za mapato, matumizi, mali, dhima na mtaji.",
          quickCheck: [
            { objective: "O2", q: "Biashara inadaiwa $3,000 ya mkopo wa lori. Mkopo huo ni aina gani ya akaunti?", options: ["Dhima", "Mapato", "Matumizi", "Mtaji"], answer: 0, why: "Pesa ambazo biashara inadaiwa ni dhima." },
            { objective: "O2", q: "Pesa ambazo wateja bado wanadaiwa na biashara zinafuatiliwa katika:", options: ["Accounts payable", "Matumizi ya kodi ya pango", "Accounts receivable", "Mtaji wa mmiliki"], answer: 2, why: "Accounts receivable (A/R) ni pesa ambazo wateja wanadaiwa." }
          ]
        },
        {
          title: "Ankara, risiti za mauzo na malipo ya wateja",
          objectives: ["O3"],
          minutes: 6,
          goal: "Rekodi ankara, risiti ya mauzo na malipo ya mteja katika QuickBooks.",
          text: [
            "Tumia ankara (invoice) mteja anapolipa baadaye. Ankara inaonyesha mteja, tarehe, bidhaa au huduma, kiasi na tarehe ya mwisho ya kulipa. Tumia risiti ya mauzo (sales receipt) mteja anapolipa wakati wa mauzo, kama mauzo ya gari la chakula. Zote mbili zinarekodi mapato; ankara peke yake ndiyo inayounda pesa zinazodaiwa (accounts receivable).",
            "Ankara ikilipwa, rekodi malipo dhidi ya ankara hiyo. Usiunde mauzo mapya, la sivyo mapato yatahesabiwa mara mbili. Kisha QuickBooks inaweka alama kwamba ankara imelipwa. Mteja akilipa kwa pesa taslimu au hundi, QuickBooks inaweza kushikilia malipo hadi urekodi kuweka pesa benki (deposit), ili kuweka huko kulingane na kile benki inachoonyesha.",
            "Andaa kila mteja mara moja kwa jina na mawasiliano yake, na andaa kila bidhaa au huduma mara moja kwa bei yake na akaunti ya mapato. Kisha kila ankara inatumia akaunti zile zile.",
            "Katika QuickBooks Online, fomu mpya kama ankara, risiti za mauzo na malipo zinaanzia kwenye kitufe cha New (+). Katika test drive hakuna kinachohifadhiwa, kwa hiyo andika ulichoingiza."
          ],
          steps: ["Chagua fomu: ankara (atalipa baadaye) au risiti ya mauzo (amelipa sasa).", "Chagua mteja, au ongeza mpya.", "Ingiza tarehe, bidhaa au huduma, kiasi na tarehe ya mwisho ya kulipa.", "Hifadhi fomu.", "Mteja akilipa ankara, rekodi malipo dhidi ya ankara hiyo.", "Rekodi kuweka pesa benki kama QuickBooks inashikilia malipo ili yawekwe baadaye.", "Hakikisha ankara sasa inaonyesha imelipwa."],
          words: [["Ankara", "bili unayomtumia mteja atakayelipa baadaye (invoice)."], ["Risiti ya mauzo", "kumbukumbu ya mauzo yaliyolipwa wakati wa mauzo (sales receipt)."], ["Malipo ya mteja", "kumbukumbu kwamba mteja amelipa ankara."], ["Kuweka pesa benki", "pesa zilizowekwa benki, ambazo zinapaswa kulingana na taarifa ya benki (deposit)."]],
          slides: [
            { title: "Ankara au risiti ya mauzo?", bullets: ["Ankara: mteja analipa baadaye", "Risiti ya mauzo: amelipa wakati wa mauzo", "Ankara peke yake inaunda A/R"] },
            { title: "Rekodi malipo dhidi ya ankara", bullets: ["Usiunde mauzo ya pili kwa ajili yake kamwe", "La sivyo mapato yanahesabiwa mara mbili", "Kisha ankara inaonyesha imelipwa"] },
            { title: "Andaa mara moja, tumia kila wakati", bullets: ["Wateja na mawasiliano yao", "Bidhaa na huduma pamoja na bei na akaunti ya mapato"] },
            { title: "Kuweka pesa kunalingana na benki", bullets: ["Pesa taslimu na hundi zinaweza kusubiri kuwekwa benki", "Rekodi kuweka pesa ili kulingane na taarifa ya benki"] }
          ],
          sources: [TESTDRIVE],
          tryIt: "Fungua test drive ya QuickBooks Online (kiungo kiko katika vyanzo; ifungue katika dirisha la faragha la kivinjari). Unda ankara ya $250 ya huduma za bustani kwa mteja wa mfano, ya kulipwa ndani ya siku 30. Kisha pokea malipo ya ankara hiyo na uhakikishe ankara inaonyesha imelipwa. Andika mteja, tarehe, kiasi na akaunti ya mapato kwenye karatasi, kwa sababu test drive haihifadhi. Huna kompyuta? Chora ankara na malipo kwenye karatasi.",
          youCanNow: "kurekodi ankara, risiti ya mauzo na malipo ya mteja ili mapato yahesabiwe mara moja tu.",
          quickCheck: [
            { objective: "O3", q: "Mteja wa gari la chakula analipa dirishani. Unatumia fomu ipi?", options: ["Ankara", "Bili", "Agizo la ununuzi", "Risiti ya mauzo"], answer: 3, why: "Risiti ya mauzo inarekodi mauzo yaliyolipwa wakati wa mauzo." },
            { objective: "O3", q: "Mteja analipa ankara ya $250. Unarekodi nini?", options: ["Risiti mpya ya mauzo ya $250", "Malipo dhidi ya ankara hiyo", "Bili ya $250", "Hakuna; QuickBooks inajua"], answer: 1, why: "Kurekodi malipo dhidi ya ankara kunaifunga bila kuhesabu mapato mara mbili." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kuanza na kurekodi mauzo",
        questions: [
          { objective: "O1", q: "Kauli ipi kuhusu kozi hii ni kweli?", options: ["Inakuandaa; mtihani rasmi ndio unaotoa cheti", "Inatoa cheti cha QuickBooks Certified User", "Inakufanya CPA", "Inachukua nafasi ya mtayarishaji wa kodi"], answer: 0, why: "Kozi inakuandaa; Certiport inasimamia mtihani unaotoa cheti." },
          { objective: "O2", q: "Kodi ya pango inayolipwa kwa duka ni aina gani ya akaunti?", options: ["Mali", "Dhima", "Matumizi", "Mapato"], answer: 2, why: "Kodi ya pango ni gharama ya kuendesha biashara, kwa hiyo ni matumizi." },
          { objective: "O2", q: "Mmiliki anaweka $500 za pesa zake mwenyewe katika biashara. Hizo zinaenda:", options: ["Mapato ya mauzo", "Mtaji", "Accounts payable", "Matumizi ya vifaa"], answer: 1, why: "Pesa ambazo mmiliki anaweka ni sehemu ya mtaji wa mmiliki, si mapato." },
          { objective: "O3", q: "Mteja wa usafi atalipa baada ya siku 30. Unaunda fomu ipi?", options: ["Risiti ya mauzo", "Bili", "Kuweka pesa benki", "Ankara"], answer: 3, why: "Ankara ni kwa mteja anayelipa baadaye." },
          { objective: "O3", q: "Mtunza hesabu aliunda mauzo mapya kwa malipo ya mteja badala ya kurekodi malipo dhidi ya ankara. Nini kinaharibika?", options: ["Mapato yanahesabiwa mara mbili na ankara inabaki wazi", "Hakuna kinachoharibika", "Salio la benki linashuka", "Mteja anatozwa ada"], answer: 0, why: "Ankara na mauzo mapya vyote vinahesabiwa kama mapato, na ankara bado inaonekana haijalipwa." }
        ]
      }
    },
    {
      name: "Sura 2: Bili, benki na mwisho wa mwezi",
      lessons: [
        {
          title: "Bili, matumizi na wauzaji",
          objectives: ["O4"],
          minutes: 6,
          goal: "Ingiza bili, matumizi na malipo ya bili kwa muuzaji na akaunti sahihi.",
          text: [
            "Muuzaji (vendor) ni yeyote ambaye biashara inanunua kutoka kwake: duka la vifaa, mwenye nyumba, kampuni ya simu. Andaa kila muuzaji mara moja.",
            "Tumia bili (bill) biashara itakapolipa baadaye, kama ankara ya msambazaji ya kulipwa ndani ya siku 30. Bili inaenda katika accounts payable. Unapoilipa, rekodi malipo ya bili dhidi ya bili hiyo ili isihesabiwe mara mbili. Tumia matumizi (expense) biashara inapolipa papo hapo, kama ununuzi kwa kadi katika duka la vifaa.",
            "Chagua akaunti ya matumizi inayolingana na kilichonunuliwa: Vifaa, Mafuta, Kodi ya pango, Simu. Ambatisha picha ya risiti katika QuickBooks, au andika namba ya risiti katika maelezo (memo). Risiti zinathibitisha kila matumizi mtu akiuliza baadaye.",
            "Kama biashara inalipa wakandarasi, chukua Form W-9 kutoka kwa kila mmoja kabla ya kulipa na uwaweke alama kama wakandarasi, kwa sababu baadhi ya biashara lazima ziwasilishe ripoti za taarifa kuhusu wao. Sheria na viwango vya pesa vinabadilika, kwa hiyo angalia irs.gov au mtaalamu wa kodi."
          ],
          steps: ["Chagua muuzaji, au ongeza mpya.", "Chagua bili (kulipa baadaye) au matumizi (imelipwa sasa).", "Ingiza tarehe, kiasi na akaunti ya matumizi inayolingana.", "Ambatisha risiti au andika namba yake.", "Unapolipa bili, rekodi malipo ya bili dhidi ya bili hiyo.", "Hakikisha bili sasa inaonyesha imelipwa."],
          words: [["Muuzaji", "mtu au biashara ambayo biashara inanunua kutoka kwake (vendor)."], ["Bili", "kumbukumbu ya kitu ambacho biashara italipia baadaye (bill)."], ["Matumizi", "kumbukumbu ya kitu ambacho biashara ililipia papo hapo (expense)."], ["Malipo ya bili", "kumbukumbu kwamba bili imelipwa (bill payment)."], ["Form W-9", "fomu ya IRS ambayo mkandarasi anaijaza kwa jina lake na namba yake ya kodi kwa ajili ya kumbukumbu za biashara."]],
          slides: [
            { title: "Bili au matumizi?", bullets: ["Bili: kulipa baadaye, inaenda A/P", "Matumizi: imelipwa papo hapo", "Lipa bili kwa malipo ya bili, si kwa matumizi mapya"] },
            { title: "Chagua akaunti sahihi", bullets: ["Vifaa, Mafuta, Kodi ya pango, Simu", "Akaunti ile ile kila wakati"] },
            { title: "Ushahidi kwa kila matumizi", bullets: ["Ambatisha picha ya risiti", "Au andika namba ya risiti katika memo"] },
            { title: "Kulipa wakandarasi", bullets: ["Pata Form W-9 kabla ya kulipa", "Waweke alama kama wakandarasi", "Angalia irs.gov kwa sheria za sasa za kuwasilisha"] }
          ],
          sources: [{ name: "IRS: Kuhusu Form W-9", url: "https://www.irs.gov/forms-pubs/about-form-w-9" }, TESTDRIVE],
          tryIt: "Katika test drive au kwenye karatasi, ingiza vitu vitatu: bili ya vifaa ya $120 ya kulipwa ndani ya siku 30, ununuzi wa mafuta wa $45 uliolipwa kwa kadi leo, na malipo ya bili ya $120 wiki mbili baadaye. Kwa kila kimoja, andika muuzaji, fomu uliyotumia, akaunti na kiasi. Kisha eleza kwa sentensi moja kwa nini malipo ya bili si matumizi mapya.",
          youCanNow: "kuingiza bili, matumizi na malipo ya bili kwa muuzaji, akaunti na risiti sahihi.",
          quickCheck: [
            { objective: "O4", q: "Msambazaji anatuma bili ya kulipwa ndani ya siku 30. Unaingiza nini leo?", options: ["Matumizi", "Bili", "Ankara", "Risiti ya mauzo"], answer: 1, why: "Bili inarekodi kitu ambacho biashara italipa baadaye." },
            { objective: "O4", q: "Unalipa bili hiyo wiki mbili baadaye. Unarekodi nini?", options: ["Matumizi mapya ya kiasi kile kile", "Kuweka pesa benki", "Malipo ya bili dhidi ya bili hiyo", "Hakuna"], answer: 2, why: "Malipo ya bili yanafunga bili bila kuhesabu gharama mara mbili." }
          ]
        },
        {
          title: "Bank feed na ulinganisho wa benki",
          objectives: ["O5"],
          minutes: 6,
          goal: "Oanisha mistari ya bank feed na maingizo na ulinganishe akaunti ya benki hadi tofauti iwe sifuri.",
          text: [
            "QuickBooks inaweza kuunganishwa na benki ya biashara na kupakua miamala yake. Hiyo ndiyo bank feed. Kila mstari uliopakuliwa unasubiri uupitie. Kama tayari uliuingiza, uoanishe (match) na ingizo hilo. Kama bado, uongeze kwa mlipwaji na akaunti sahihi. Usiongeze kamwe mstari ambao tayari umeingizwa, la sivyo utahesabiwa mara mbili. Mmiliki wa biashara ndiye anayeunganisha benki; mtunza hesabu haombi kamwe nywila ya benki ya mmiliki.",
            "Ulinganisho wa benki (bank reconciliation) unathibitisha kwamba QuickBooks inakubaliana na taarifa ya benki. Mara moja kwa mwezi, chukua taarifa, ingiza salio lake la mwisho na tarehe, na weka tiki kwa kila pesa zilizowekwa na kila malipo katika QuickBooks yaliyo kwenye taarifa. Tofauti ikiwa sifuri, maliza ulinganisho.",
            "Kama tofauti si sifuri, tafuta sababu za kawaida: ada ya benki au riba ambayo haijaingizwa, ingizo lililoandikwa kwa kiasi kisicho sahihi, ingizo lililorudiwa, au ingizo katika mwezi usio sahihi. Hundi ambazo bado hazijapita benki zinabaki bila tiki; zitapita mwezi ujao.",
            "Usilazimishe kamwe ulinganisho ufike sifuri kwa kubuni ingizo. Kama huwezi kupata tatizo, andika maelezo na umuulize mmiliki au mhasibu."
          ],
          steps: ["Pitia kila mstari mpya wa bank feed.", "Uoanishe na ingizo lililopo, au uongeze kwa mlipwaji na akaunti sahihi.", "Pata taarifa ya benki ya mwezi.", "Anza ulinganisho na uingize tarehe ya mwisho na salio la mwisho la taarifa.", "Weka tiki kwa kila ingizo linaloonekana kwenye taarifa.", "Tafuta na urekebishe chochote kinachozuia tofauti kuwa sifuri.", "Maliza tofauti ikiwa sifuri, au andika maelezo na uombe msaada."],
          words: [["Bank feed", "miamala ya benki ambayo QuickBooks inakupakulia uipitie."], ["Kuoanisha", "kuunganisha mstari wa benki uliopakuliwa na ingizo lililoko tayari katika QuickBooks (match)."], ["Kulinganisha", "kukagua kwamba kumbukumbu zako zinakubaliana na taarifa ya benki, mstari kwa mstari (reconcile)."], ["Tofauti", "pengo kati ya QuickBooks na taarifa ya benki wakati wa ulinganisho; inapaswa kuwa sifuri."], ["Hundi ambayo haijapita", "hundi uliyoandika ambayo benki bado haijalipa."]],
          slides: [
            { title: "Pitia bank feed", bullets: ["Tayari imeingizwa? Ioanishe", "Haijaingizwa? Iongeze kwa akaunti sahihi", "Usiongeze mstari mara mbili kamwe"] },
            { title: "Linganisha mara moja kwa mwezi", bullets: ["Ingiza tarehe ya mwisho na salio la mwisho la taarifa", "Weka tiki kwa kila mstari ulio kwenye taarifa", "Maliza tofauti ikiwa sifuri"] },
            { title: "Hesabu zisipolingana", bullets: ["Ada au riba iliyokosekana", "Kiasi kisicho sahihi, kurudiwa au mwezi usio sahihi", "Hundi ambazo hazijapita zinasubiri mwezi ujao"] },
            { title: "Kuwa mwaminifu na salama", bullets: ["Usilazimishe kamwe kwa ingizo la kubuni", "Andika maelezo na uombe msaada", "Usiombe kamwe nywila ya benki ya mmiliki"] }
          ],
          sources: [TESTDRIVE],
          tryIt: "Tengeneza taarifa ya mazoezi kwenye karatasi: salio la kuanzia $1,000; pesa zilizowekwa $250 na $400; malipo $120, $45 na $60; ada ya benki $5; salio la mwisho $1,420. Kumbukumbu zako zina kila mstari isipokuwa ada ya benki, pamoja na hundi ya $75 ambayo haijapita. Weka tiki kwa mistari inayolingana, tafuta kinachozuia tofauti kuwa sifuri, na uandike ungeingiza nini. Katika test drive, fungua ukurasa wa benki na uangalie jinsi mistari iliyopakuliwa inavyosubiri kuoanishwa au kuongezwa.",
          youCanNow: "kuoanisha bank feed na kulinganisha akaunti ya benki hadi tofauti iwe sifuri, au kuandika kile ambacho bado hakilingani.",
          quickCheck: [
            { objective: "O5", q: "Mstari wa bank feed ni malipo ambayo tayari uliyaingiza kama malipo ya bili. Unafanya nini?", options: ["Kuuoanisha na malipo hayo ya bili", "Kuuongeza kama matumizi mapya", "Kufuta bili", "Kuupuuza milele"], answer: 0, why: "Kuoanisha kunaunganisha mstari wa benki na ingizo lako bila kulihesabu mara mbili." },
            { objective: "O5", q: "Ulinganisho wako una tofauti ya $5, na taarifa inaonyesha ada ya benki ya $5. Hatua bora ni ipi?", options: ["Kubuni ingizo la kiasi chochote", "Kuruka ulinganisho mwezi huu", "Kubadilisha salio la taarifa", "Kuingiza ada ya benki ya $5 kama matumizi"], answer: 3, why: "Ada ya benki iliyokosekana ni sababu ya kawaida; kuiingiza kunarekebisha tofauti kwa uaminifu." }
          ]
        },
        {
          title: "Ripoti na kufunga mwezi",
          objectives: ["O6"],
          minutes: 6,
          goal: "Endesha na ueleze ripoti ya faida na hasara, mizania na ripoti ya ankara zilizo wazi.",
          text: [
            "Ripoti ya faida na hasara (P&L) inaonyesha mapato ukitoa matumizi kwa kipindi fulani, kama mwezi mmoja. Kama mapato ni makubwa zaidi, biashara ilipata faida; kama matumizi ni makubwa zaidi, ilipata hasara. Mizania (balance sheet) inaonyesha, katika tarehe moja, kile biashara inacho (mali), kile inachodaiwa (dhima) na sehemu ya mmiliki (mtaji).",
            "Ripoti ya umri wa accounts receivable (A/R aging) inaonyesha wateja gani bado wanadaiwa pesa na wamechelewa kiasi gani. Ripoti ya umri wa accounts payable (A/P aging) inaonyesha bili gani biashara bado inadaiwa. Ripoti hizi mbili zinamwambia mmiliki ampigie nani simu na alipe nini kinachofuata.",
            "Kufunga mwezi (month-end close) ni orodha ya kukagua ambayo mtunza hesabu anaifuata kila mwezi: mauzo, malipo, bili na matumizi yote yameingizwa; bank feed imepitiwa; kila akaunti ya benki na ya kadi ya mkopo imelinganishwa; risiti zimeambatishwa; ripoti zimeendeshwa na kutumwa kwa mmiliki pamoja na ujumbe mfupi. Mashirika yasiyo ya faida yanaweza pia kuendesha ripoti kwa kila programu au ruzuku.",
            "Endesha ripoti kutoka eneo la Reports; tafuta ripoti kwa jina lake. Ripoti ni nzuri tu kama maingizo yaliyo nyuma yake, kwa hiyo linganisha kwanza."
          ],
          steps: ["Maliza kuingiza mauzo, malipo, bili na matumizi ya mwezi.", "Pitia bank feed na ulinganishe kila akaunti ya benki na ya kadi.", "Endesha ripoti ya faida na hasara ya mwezi.", "Endesha mizania ya siku ya mwisho ya mwezi.", "Endesha ripoti ya umri wa accounts receivable.", "Mwandikie mmiliki ujumbe mfupi: faida au hasara, nani anadaiwa pesa na bili zinazokaribia kulipwa."],
          words: [["Faida na hasara (P&L)", "ripoti ya mapato ukitoa matumizi kwa kipindi fulani; pia inaitwa taarifa ya mapato (income statement)."], ["Mizania", "ripoti ya mali, dhima na mtaji katika tarehe moja (balance sheet)."], ["Ripoti ya umri", "ripoti ya pesa zinazodaiwa, zilizopangwa kwa idadi ya siku zilizochelewa (aging report)."], ["Kufunga mwezi", "orodha ya kukagua inayomaliza hesabu za mwezi (month-end close)."]],
          slides: [
            { title: "Faida na hasara", bullets: ["Mapato ukitoa matumizi kwa kipindi fulani", "Faida au hasara ya mwezi"] },
            { title: "Mizania", bullets: ["Katika tarehe moja", "Mali, dhima na mtaji"] },
            { title: "Nani anadaiwa nini", bullets: ["A/R aging: wateja wanaodaiwa na biashara", "A/P aging: bili ambazo biashara inadaiwa"] },
            { title: "Orodha ya kufunga mwezi", bullets: ["Kila kitu kimeingizwa, bank feed imepitiwa", "Kila akaunti ya benki na kadi imelinganishwa", "Ripoti zimeendeshwa, ujumbe mfupi kwa mmiliki"] }
          ],
          sources: [TESTDRIVE],
          tryIt: "Katika test drive, endesha ripoti ya faida na hasara ya mwezi uliopita na ripoti ya umri wa accounts receivable. Andika sentensi tatu kwa mmiliki: jumla ya mapato na jumla ya matumizi ya mwezi, kama kulikuwa na faida au hasara, na mteja gani anadaiwa zaidi. Huna kompyuta? Tumia kazi yako ya masomo yaliyotangulia na uandike ujumbe huo huo kwenye karatasi.",
          youCanNow: "kuendesha ripoti kuu, kumweleza mmiliki ripoti hizo na kufunga mwezi.",
          quickCheck: [
            { objective: "O6", q: "Ripoti ipi inaonyesha kama biashara ilipata pesa mwezi uliopita?", options: ["Mizania", "Faida na hasara", "Orodha ya wauzaji", "Orodha ya akaunti"], answer: 1, why: "Ripoti ya faida na hasara inaonyesha mapato ukitoa matumizi kwa kipindi fulani." },
            { objective: "O6", q: "Mmiliki anauliza wateja gani wamechelewa kulipa. Unaendesha ripoti ipi?", options: ["Accounts payable aging", "Faida na hasara", "Accounts receivable aging", "Mizania"], answer: 2, why: "Ripoti ya A/R aging inaorodhesha wateja wanaodaiwa pesa na wamechelewa kiasi gani." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Bili, benki na mwisho wa mwezi",
        questions: [
          { objective: "O4", q: "Ulilipa $45 za mafuta kwa kadi ya biashara leo. Fomu ipi inafaa?", options: ["Bili", "Ankara", "Matumizi", "Risiti ya mauzo"], answer: 2, why: "Matumizi yanarekodi kitu kilicholipiwa papo hapo." },
          { objective: "O4", q: "Kabla ya kumlipa mkandarasi mpya, mtunza hesabu makini:", options: ["Anachukua Form W-9 na anaangalia irs.gov kwa sheria za kuwasilisha", "Analipa pesa taslimu bila kumbukumbu", "Anarekodi malipo kama mapato", "Anaomba nywila ya benki ya mkandarasi"], answer: 0, why: "W-9 inaipa biashara taarifa za mkandarasi kwa kumbukumbu na ripoti zake." },
          { objective: "O5", q: "Ulinganisho haufiki sifuri na huwezi kupata sababu. Unafanya nini?", options: ["Kuongeza ingizo la kubuni ili kulazimisha", "Kufuta maingizo ya zamani", "Kubadilisha salio la taarifa", "Kuandika maelezo na kumuuliza mmiliki au mhasibu"], answer: 3, why: "Kulazimisha kunaficha tatizo halisi; maelezo na swali vinaweka hesabu kuwa za kweli." },
          { objective: "O5", q: "Hundi ya $75 uliyoandika haiko kwenye taarifa ya mwezi huu. Katika ulinganisho wewe:", options: ["Unafuta hundi", "Unaiacha bila tiki; inapaswa kupita baadaye", "Unaiingiza tena", "Unaiweka alama kama mapato"], answer: 1, why: "Hundi ambayo haijapita inabaki bila tiki hadi ionekane kwenye taarifa." },
          { objective: "O6", q: "Mizania inaonyesha:", options: ["Mali, dhima na mtaji katika tarehe moja", "Mauzo ya mwezi uliopita tu", "Namba ya simu ya kila mteja", "Mistari ya bank feed"], answer: 0, why: "Mizania ni picha ya mali, dhima na mtaji katika tarehe moja." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Utunzaji wa Hesabu kwa QuickBooks",
    questions: [
      { objective: "O1", q: "Ipi ni kazi kuu ya mtunza hesabu wa QuickBooks?", options: ["Kutoa ushauri wa kisheria", "Kurekodi ankara, bili na shughuli za benki", "Kusaini ukaguzi wa hesabu kama CPA", "Kuchagua uwekezaji kwa mmiliki"], answer: 1, why: "Kurekodi mauzo, bili na shughuli za benki kwa usahihi ndio msingi wa kazi hii." },
      { objective: "O1", q: "Uangalie wapi maelezo na ada za sasa za mtihani wa QuickBooks Certified User?", options: ["Chapisho la mitandao ya kijamii", "Maelezo ya zamani ya rafiki", "Jukwaa lolote la mtandaoni", "Ukurasa rasmi wa Certiport wa vyeti vya Intuit"], answer: 3, why: "Ada na maelezo ya mitihani yanabadilika, kwa hiyo ukurasa rasmi ndio mahali pa kuangalia." },
      { objective: "O1", q: "Mteja anauliza jinsi ya kupunguza kodi zake. Kama mtunza hesabu wewe:", options: ["Unampeleka kwa mtaalamu wa kodi au irs.gov", "Unakisia jibu", "Unabadilisha namba zake", "Unamwambia kodi si lazima"], answer: 0, why: "Mtunza hesabu anatunza kumbukumbu; ushauri wa kodi unatoka kwa mtaalamu wa kodi au IRS." },
      { objective: "O2", q: "Mashine mpya ya kufyonza vumbi ambayo biashara ya usafi inamiliki ni aina gani ya akaunti?", options: ["Mapato", "Matumizi", "Mali", "Dhima"], answer: 2, why: "Vifaa ambavyo biashara inamiliki ni mali." },
      { objective: "O2", q: "Deni kwenye kadi ya mkopo ya biashara ni:", options: ["Dhima", "Mali", "Mapato", "Mtaji"], answer: 0, why: "Pesa ambazo biashara inadaiwa kwenye kadi ni dhima." },
      { objective: "O2", q: "Utunzaji wa hesabu wa pande mbili (double-entry) unamaanisha nini?", options: ["Unaandika kila ingizo mara mbili", "Watu wawili lazima waidhinishe kila ingizo", "Mapato peke yake ndiyo yanarekodiwa", "Kila ingizo linabadilisha angalau akaunti mbili"], answer: 3, why: "Kila ingizo lina pande mbili, jambo linaloweka hesabu sawa." },
      { objective: "O3", q: "Mtunza hesabu anatumia ankara lini?", options: ["Mteja alipolipa wakati wa mauzo", "Mteja atakapolipa baadaye", "Biashara inaponunua vifaa", "Benki inapotoza ada"], answer: 1, why: "Ankara ni kwa mteja anayelipa baadaye." },
      { objective: "O3", q: "Kutuma ankara ya $200 kunaongeza mapato na:", options: ["Accounts payable", "Salio la benki", "Accounts receivable", "Matumizi ya kodi ya pango"], answer: 2, why: "Ankara inaunda pesa ambazo mteja anadaiwa: accounts receivable." },
      { objective: "O3", q: "Mteja analipa ankara iliyo wazi kwa hundi. Unarekodi nini?", options: ["Malipo dhidi ya ankara hiyo, kisha kuweka pesa benki", "Risiti mpya ya mauzo", "Bili", "Ankara mpya"], answer: 0, why: "Kurekodi malipo dhidi ya ankara kunaifunga, na kuweka pesa kunalingana na benki." },
      { objective: "O4", q: "Muuzaji ni nani?", options: ["Mteja anayedaiwa pesa", "Mmiliki wa biashara", "Mstari wa bank feed", "Biashara unayonunua kutoka kwake, kama duka la vifaa"], answer: 3, why: "Muuzaji ni yeyote ambaye biashara inanunua kutoka kwake." },
      { objective: "O4", q: "Bili ya msambazaji ni ya kulipwa ndani ya siku 30. Ikiingizwa, inaenda katika:", options: ["Accounts receivable", "Accounts payable", "Mapato ya mauzo", "Mtaji wa mmiliki"], answer: 1, why: "Bili zisizolipwa ni pesa ambazo biashara inadaiwa: accounts payable." },
      { objective: "O4", q: "Nini kinathibitisha kila matumizi mtu akiuliza baadaye?", options: ["Kukisia kiasi", "Namba ya simu ya muuzaji", "Risiti iliyoambatishwa au namba yake iliyoandikwa", "Kumbukumbu ya akilini ya mmiliki"], answer: 2, why: "Risiti ndizo ushahidi nyuma ya kila matumizi." },
      { objective: "O5", q: "Bank feed ni nini?", options: ["Miamala ya benki ambayo QuickBooks inakupakulia uipitie", "Ada ambayo benki inatoza", "Orodha ya wateja", "Nywila ya benki ya mmiliki"], answer: 0, why: "Bank feed inaleta mistari ya benki ili uioanishe au uiongeze." },
      { objective: "O5", q: "Ulinganisho umekamilika wakati:", options: ["Umeweka tiki kwa nusu ya mistari", "Mmiliki ameridhika", "Mwezi umeisha", "Tofauti ni sifuri"], answer: 3, why: "Tofauti ya sifuri inaonyesha QuickBooks inakubaliana na taarifa." },
      { objective: "O5", q: "Mstari wa benki uliopakuliwa tayari umeingizwa katika QuickBooks. Kuuongeza tena kungefanya:", options: ["Kurekebisha ulinganisho", "Kuuhesabu mara mbili", "Kufunga mwezi", "Kumlipa muuzaji"], answer: 1, why: "Kuongeza tena mstari ulioingizwa kunaunda nakala mbili; uoanishe badala yake." },
      { objective: "O6", q: "Mapato yalikuwa $4,000 na matumizi $3,100 kwa mwezi. Ripoti ya faida na hasara inaonyesha:", options: ["Hasara ya $900", "Faida ya $7,100", "Faida ya $900", "Hakuna mabadiliko"], answer: 2, why: "Mapato ukitoa matumizi: $4,000 ukitoa $3,100 ni faida ya $900." },
      { objective: "O6", q: "Kabla ya kuendesha ripoti za mwisho wa mwezi, mtunza hesabu anapaswa kwanza:", options: ["Kulinganisha kila akaunti ya benki na ya kadi", "Kufuta ankara za zamani", "Kutuma ripoti bila kukagua", "Kubadilisha orodha ya akaunti"], answer: 0, why: "Ripoti ni nzuri tu kama maingizo yaliyo nyuma yake, kwa hiyo linganisha kwanza." },
      { objective: "O6", q: "Ripoti ipi inaonyesha bili gani biashara bado inadaiwa?", options: ["Faida na hasara", "Accounts receivable aging", "Orodha ya akaunti", "Accounts payable aging"], answer: 3, why: "Ripoti ya A/P aging inaorodhesha bili zisizolipwa na zimekaa wazi kwa muda gani." },
      { objective: "O2", q: "Kwa nini mtunza hesabu atumie akaunti ile ile kila wakati kwa aina ile ile ya gharama?", options: ["QuickBooks inatoza kwa akaunti mpya", "Ili ripoti zilinganishwe mwezi kwa mwezi kwa usahihi", "Kwa sababu majina ya akaunti hayawezi kubadilishwa", "Ili bank feed isimame"], answer: 1, why: "Akaunti zisizobadilika zinafanya ripoti ziwe sahihi na ziweze kulinganishwa." },
      { objective: "O5", q: "Mteja anakupa nywila yake ya benki ya mtandaoni ili uunganishe bank feed. Unafanya nini?", options: ["Unaipokea na kuihifadhi katika maelezo", "Unajitumia kwa ujumbe mfupi", "Unakataa; mmiliki anaunganisha benki au anakupa ufikiaji wako mwenyewe wa mtumiaji", "Unaiweka katika folda ya pamoja"], answer: 2, why: "Watunza hesabu hawachukui kamwe nywila ya benki ya mmiliki; mmiliki anaunganisha benki au anakuongeza kama mtumiaji." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi amepiga hatua kiasi gani
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 3, 5, 6, 9, 12, 13, 15, 17] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Orodha ya akaunti", objective: "O2", notYet: "Akaunti chini ya 12, au kadhaa zimewekwa aina isiyo sahihi.", meets: "Angalau akaunti 12, kila moja na aina sahihi, zenye majina yaliyo wazi.", exceeds: "Pia anaeleza kwa nini kila akaunti inahitajika kwa biashara hii, pamoja na akaunti za shirika lisilo la faida au za sekta husika." },
      { name: "Mauzo na malipo", objective: "O3", notYet: "Malipo yalirekodiwa kama mauzo mapya, au ankara inakosa mteja, tarehe au kiasi.", meets: "Angalau ankara 3 na malipo 2, kila moja na mteja, tarehe, kiasi na akaunti ya mapato; ankara zilizolipwa zinaonyesha zimelipwa.", exceeds: "Pia anarekodi kuweka pesa benki kwa kila malipo na anaandika ankara zipi bado ziko wazi." },
      { name: "Bili na matumizi", objective: "O4", notYet: "Bili ililipwa kwa matumizi mapya, au maingizo hayana akaunti wala risiti.", meets: "Angalau bili au matumizi 4 yenye muuzaji, tarehe, kiasi, akaunti na risiti iliyoandikwa.", exceeds: "Pia anaonyesha malipo ya bili na mkandarasi aliyeandaliwa pamoja na maelezo ya W-9." },
      { name: "Ulinganisho wa benki", objective: "O5", notYet: "Hakuna ulinganisho, au ulilazimishwa kufika sifuri kwa ingizo la kubuni.", meets: "Ulinganisho unaishia na tofauti ya sifuri, au una maelezo ya kweli ya kile ambacho bado hakilingani.", exceeds: "Pia anaorodhesha kilichosababisha kila tofauti (ada, kosa la kuandika, kurudiwa, hundi ambayo haijapita) na jinsi ilivyorekebishwa." },
      { name: "Muhtasari wa ripoti", objective: "O6", notYet: "Muhtasari unakosa faida au hasara, au namba hazilingani na maingizo.", meets: "Unataja jumla ya mapato, jumla ya matumizi na faida au hasara, na nani bado anadaiwa pesa.", exceeds: "Pia unataja bili zinazokaribia kulipwa na jambo moja ambalo mmiliki anaweza kulifanyia kazi." },
      { name: "Mpango wa cheti", objective: "O1", notYet: "Hakuna cheti kilichotajwa, au hakuna tarehe.", meets: "Unataja cheti cha Intuit, ukurasa rasmi wa kuangalia na tarehe za kuuangalia na za mitihani ya mazoezi.", exceeds: "Pia unaorodhesha waajiri au wateja watatu wa kuwasiliana nao na tarehe ya kuwasiliana na kila mmoja." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaofanya mtihani wa cheti cha Intuit QuickBooks au wa kutunza hesabu ndani ya siku 90 (utafiti wa kufuatilia)",
      "Wanafunzi wanaopata kazi ya kutunza hesabu, nafasi ya ofisi inayotumia QuickBooks au mteja anayelipa wa kutunza hesabu ndani ya miezi 6",
      "Wamiliki wa biashara ndogo na mashirika yasiyo ya faida katika kozi wanaolinganisha hesabu zao wenyewe kila mwezi (ufuatiliaji wa siku 30)"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta au tableti yenye kivinjari cha wavuti kwa test drive ya bure ya QuickBooks Online (iliyofunguliwa katika dirisha la faragha); skrini ya simu ni ndogo mno kwa mazoezi mengi",
      "Karatasi, kalamu na kikokotoo kwa maelezo ya \"Jaribu sasa\", kwa sababu test drive haihifadhi",
      "Nakala zilizochapishwa za taarifa ya benki ya mazoezi na orodha ya miamala kwa vikundi visivyo na kompyuta",
      "Kama dakika 75 hadi 90 kwa jumla, katika vipindi vifupi: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Katika maabara au darasa: fanyeni jaribio la awali pamoja, kisha fanyeni sura moja kwa kila kipindi huku test drive ikiwa wazi kwenye kila skrini.",
      "Test drive inajirudisha mwanzo na haihifadhi; wakumbushe wanafunzi kuandika kila ingizo kwa ajili ya kazi ya mwisho.",
      "Skrini na majina ya menyu yanabadilika; mwanafunzi asipoweza kupata kitu, mwonyeshe kisanduku cha kutafuta badala ya njia maalum ya menyu.",
      "Usiwaruhusu kamwe wanafunzi kuandika taarifa halisi za kuingia benki, namba za akaunti au data za wateja katika mazoezi; tumia kampuni ya mfano au namba za kubuni.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati.",
      "Kabla wanafunzi hawajapanga kupata cheti, waache wafungue wenyewe kurasa rasmi za Certiport na Intuit Academy ili kuangalia ada na masharti ya sasa."
    ]
  }
};
