"use strict";

// Koach Learn course (Swahili translation of shared/ride-and-food-apps.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "ride-and-food-apps-sw",
  lang: "sw",
  translationOf: "ride-and-food-apps",
  category: "Seniors and Technology",
  name: "Kuagiza Usafiri au Chakula kwa Apps (Uber, Lyft, DoorDash)",
  skills: "Kuweka app ya usafiri au ya kuletewa bidhaa, Kuomba usafiri, Kuhakikisha ni gari sahihi, Kuagiza chakula au mahitaji ya nyumbani yaletwe, Kukagua bei, bakshishi na risiti",
  outcome: "kuweka app ya usafiri au ya kuletewa bidhaa, kuona bei kabla ya kuagiza, kuomba usafiri na kuhakikisha ni gari sahihi kabla ya kuingia, kuagiza chakula au mahitaji ya nyumbani yaletwe mlangoni kwako, na kukagua risiti baadaye.",
  about: [
    "Apps za usafiri kama Uber na Lyft zinatuma dereva aje akuchukue. Apps za kuletewa bidhaa kama DoorDash, Uber Eats na Instacart zinakuletea chakula au mahitaji ya nyumbani mlangoni. Zinasaidia usipoendesha gari, usipoweza kufika dukani, au unapohitaji usafiri kwenda kwa daktari au kwenye mahojiano ya kazi.",
    "Kozi hii inakuonyesha jinsi ya kuweka apps hizi, kuona bei kabla ya kukubali, kuingia kwenye gari sahihi kwa usalama, kuagiza chakula, na kukagua ulicholipa.",
    "Kila somo linachukua kama dakika tano. Soma somo, tazama slaidi, kisha fanya kazi ya \"Jaribu sasa\". Kuna jaribio fupi la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni. Menyu za apps hubadilika mara kwa mara, kwa hiyo tunaeleza la kufanya badala ya jina la kila kitufe."
  ],
  finalTask: "Katika app ya usafiri, andika mahali halisi pa kuchukuliwa na unakokwenda (kwa mfano nyumbani kwako hadi kliniki au maktaba), soma bei na muda wa gari kufika, na utafute zana za usalama (kushiriki safari yako, kitufe cha dharura, PIN ya safari) bila kuagiza isipokuwa unahitaji usafiri huo. Kisha katika app ya kuletewa bidhaa, tengeneza oda ndogo, kagua jumla ya bidhaa, ada, bakshishi na anwani ya kuletewa kwenye skrini ya malipo (checkout), na ueleze kila mstari unamaanisha nini.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima wanaohitaji usafiri kwenda kwenye miadi, kazini au kwenye shughuli zao, au wanaohitaji chakula na mahitaji ya nyumbani yaletwe: wazee ambao hawaendeshi tena gari, watu wenye ulemavu, walezi, watu wanaorudi katika jamii na yeyote ambaye ni mgeni kwa apps za usafiri na za kuletewa bidhaa.",
    startingPoint: "Wanaweza kutumia simu janja kufungua apps na kuandika anwani, na huenda wana kadi ya benki (debit) au kadi ya mkopo (credit). Wengi hawajawahi kuagiza usafiri au bidhaa kwenye app, hawana uhakika jinsi bei, ada na bakshishi zinavyofanya kazi, au hawajui ukaguzi wa usalama kabla ya kuingia kwenye gari.",
    gap: "Apps za usafiri na za kuletewa bidhaa zinaweza kumaanisha kufika kliniki au kazini kwa wakati na kupata chakula bila kusafiri, lakini watu wasiojua hatua wanaweza kulipa zaidi sana ya walivyotarajia, kuingia kwenye gari lisilo sahihi, au kudanganywa na walaghai wanaojifanya huduma kwa wateja ya app.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; maneno kama alama ya mahali pa kuchukuliwa, ada ya huduma na bidhaa mbadala yanaelezwa",
      "Vifaa: simu janja yenye huduma ya mahali (location) imewashwa na app rasmi",
      "Muda: kama dakika 5 kwa somo, kama dakika 60 kwa jumla",
      "Pesa: hakuna usafiri wala oda inayohitaji kuagizwa kwa ajili ya kozi; bei na ada hubadilika kulingana na app, wakati na mji",
      "Umri na usalama: masharti ya Uber yanahitaji mtu mzima au akaunti ya kijana iliyowekwa na mzazi; wanafunzi hawampi kamwe mtu anayepiga simu au kutuma ujumbe nywila au misimbo"
    ],
    prerequisites: "Kozi \"Kutumia Simu Janja na Tableti\", au uwezo wa kusakinisha app kutoka duka rasmi la apps."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukitumia duka rasmi la apps", action: "kusakinisha app ya usafiri, kufungua akaunti na kuongeza njia ya malipo kwa usalama", standard: "ukiwa umekagua jina la mtengenezaji na ukiandika taarifa za kadi ndani ya app tu" },
    { id: "O2", condition: "Ukipewa mahali pa kuchukuliwa na unakokwenda", action: "kuandika vyote viwili kwenye app ya usafiri na kusoma bei na muda wa kufika kabla ya kuthibitisha", standard: "ukiwa umekagua mahali pa kuchukuliwa kwenye ramani na kusoma bei kabla ya kuagiza" },
    { id: "O3", condition: "Gari ulilolioagiza linapofika", action: "kukagua namba ya gari, gari lenyewe na dereva dhidi ya app na kupata zana za usalama", standard: "bila kuingia kamwe kwenye gari lisilolingana, na ukipata Share My Trip, kitufe cha dharura na PIN" },
    { id: "O4", condition: "Ukitumia app ya kuletewa bidhaa", action: "kuandika anwani yako ya kuletewa pamoja na maelezo na kutengeneza oda kwenye kikapu", standard: "ukiwa na anwani kamili, maelezo yenye msaada na chaguo kwa bidhaa zilizoisha" },
    { id: "O5", condition: "Ukipewa skrini ya malipo (checkout)", action: "kueleza kila mstari, pamoja na jumla ya bidhaa, ada, bakshishi na jumla kuu, kabla ya kulipa", standard: "ukitaja kila malipo kwa usahihi na kulinganisha jumla na bajeti yako" },
    { id: "O6", condition: "Baada ya safari au bidhaa kuletwa", action: "kukagua risiti, kupata msaada kwa tatizo ndani ya app na kukataa huduma bandia", standard: "ukitumia Msaada (Help) ndani ya app tu na bila kutoa kamwe nywila au msimbo" }
  ],
  chapters: [
    {
      name: "Sura 1: Kupata usafiri",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kuweka app ya usafiri",
          minutes: 5,
          goal: "Sakinisha app ya usafiri, fungua akaunti na uongeze njia ya malipo kwa usalama.",
          text: [
            "Uber na Lyft ni apps za usafiri zinazojulikana zaidi nchini Marekani. Dereva anatumia gari lake mwenyewe kukupeleka unakotaka kwenda, na unalipa kupitia app.",
            "Sakinisha app kutoka duka rasmi la apps tu (Google Play au App Store) na uhakikishe mtengenezaji (developer) ni Uber au Lyft. Jisajili kwa namba yako ya simu na barua pepe. Masharti ya Uber yanasema lazima uwe na miaka 18 au zaidi kuwa na akaunti yako mwenyewe; vijana wa miaka 13 hadi 17 wanaweza kusafiri tu kupitia akaunti ya kijana iliyowekwa na mzazi au mlezi. Kagua masharti ya app yenyewe kwa sheria za sasa.",
            "Ongeza njia ya malipo ndani ya app, kama kadi ya benki (debit) au kadi ya mkopo (credit). Iandike ndani ya app tu, kamwe si kwenye ujumbe mfupi au barua pepe. Ongeza nyumbani kwako kama mahali palipohifadhiwa ili uweze kupachagua haraka baadaye."
          ],
          steps: ["Fungua duka rasmi la apps na utafute Uber au Lyft.", "Kagua jina la mtengenezaji, kisha sakinisha.", "Jisajili kwa namba yako ya simu na barua pepe.", "Ongeza njia ya malipo ndani ya sehemu ya malipo au pochi (wallet) ya app.", "Hifadhi anwani ya nyumbani kwako kama mahali palipohifadhiwa."],
          words: [["App ya usafiri", "app inayotuma dereva mwenye gari lake mwenyewe aje akuchukue."], ["Njia ya malipo", "kadi au akaunti ambayo app inakata pesa."], ["Mahali palipohifadhiwa", "anwani ambayo app inaikumbuka, kama nyumbani."]],
          slides: [
            { title: "Apps za usafiri zinafanya nini", bullets: ["Dereva anakuchukua kwa gari lake", "Unalipa kupitia app", "Zinazojulikana zaidi Marekani: Uber na Lyft"] },
            { title: "Weka kwa usalama", bullets: ["Duka rasmi la apps tu", "Kagua jina la mtengenezaji", "Uber: miaka 18+ kwa akaunti yako; akaunti za vijana miaka 13-17"] },
            { title: "Ongeza malipo", bullets: ["Ndani ya app tu", "Kamwe si kwa ujumbe mfupi au barua pepe", "Hifadhi anwani ya nyumbani kwako"] }
          ],
          sources: [{ name: "Uber: Masharti ya Matumizi ya Marekani (umri na akaunti za vijana)", url: "https://www.uber.com/legal/en/document/?name=general-terms-of-use&country=united-states&lang=en" }],
          tryIt: "Sakinisha Uber au Lyft kutoka duka rasmi la apps, fungua akaunti yako, na uhifadhi anwani ya nyumbani kwako. Unaweza kusubiri kuongeza kadi hadi utakapohitaji usafiri.",
          youCanNow: "kusakinisha app ya usafiri kwa usalama, kufungua akaunti na kuhifadhi anwani ya nyumbani kwako.",
          quickCheck: [
            { objective: "O1", q: "Katika app ya usafiri, nani anaendesha gari?", options: ["Dereva wa basi la mji", "Wewe", "Dereva anayetumia gari lake mwenyewe", "Kampuni ya teksi tu"], answer: 2, why: "Dereva anatumia gari lake mwenyewe kukupeleka, na unalipa kupitia app." },
            { objective: "O1", q: "Ujumbe mfupi unakuomba ujibu kwa namba ya kadi yako ili kumaliza kuweka akaunti yako ya usafiri. Ungefanya nini?", options: ["Kujibu kwa namba ya kadi", "Kuupuuza na kuongeza kadi ndani ya app rasmi tu", "Kutuma namba ya kadi kwa barua pepe badala yake", "Kupiga namba iliyo kwenye ujumbe na kuisoma kwa sauti"], answer: 1, why: "Andika taarifa za kadi yako ndani ya app tu, kamwe si kwenye ujumbe mfupi au barua pepe." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kuomba usafiri na kuona bei kwanza",
          minutes: 5,
          goal: "Andika mahali pa kuchukuliwa na unakokwenda, na usome bei kabla ya kuthibitisha.",
          text: [
            "Fungua app na uandike unakotaka kwenda kwenye kisanduku cha \"Where to?\" (Unakwenda wapi?). Kagua mahali pa kuchukuliwa: app inatumia mahali ulipo, lakini unaweza kusogeza alama (pin) au kuandika anwani ili dereva akupate.",
            "App inaonyesha machaguo ya usafiri, kuanzia safari za bei nafuu za kushirikiana au za kawaida hadi magari makubwa au mazuri zaidi, kila moja na bei na muda wa kufika. Bei inaweza kuwa juu zaidi wakati wa watu wengi, kama saa za msongamano au baada ya tukio kubwa.",
            "Chagua usafiri, kagua bei na njia ya malipo, na uthibitishe. Kisha app inaonyesha jina la dereva, picha, gari na namba ya gari, na ramani ya gari likija kwako."
          ],
          steps: ["Andika unakokwenda kwenye kisanduku cha \"Where to?\".", "Kagua mahali pa kuchukuliwa; sogeza alama ikihitajika.", "Linganisha machaguo ya usafiri: bei na muda wa kufika.", "Kagua njia ya malipo.", "Thibitisha tu bei ikiwa sawa.", "Tazama ramani kuona gari lako."],
          words: [["Mahali pa kuchukuliwa", "mahali ambapo dereva atakukuta."], ["Unakokwenda", "mahali unapotaka kwenda."], ["Bei za wakati wa watu wengi", "bei za juu zaidi watu wengi wanapotaka usafiri kwa wakati mmoja."]],
          slides: [
            { title: "Unakwenda wapi?", bullets: ["Andika unakokwenda", "Kagua mahali pa kuchukuliwa kwenye ramani"] },
            { title: "Ona bei kwanza", bullets: ["Kila chaguo la usafiri linaonyesha bei na muda", "Bei zinaweza kupanda wakati wa watu wengi"] },
            { title: "Thibitisha", bullets: ["Kagua bei na malipo", "Kisha ona dereva, gari na namba ya gari"] }
          ],
          tryIt: "Fungua app ya usafiri na uandike mahali halisi unakotaka kwenda, kama kliniki, maktaba au kituo cha ajira. Soma machaguo mawili ya usafiri na bei zake. Funga app bila kuagiza isipokuwa unahitaji usafiri huo.",
          youCanNow: "kuomba usafiri na kusoma bei na muda wa kufika kabla ya kukubali.",
          quickCheck: [
            { objective: "O2", q: "App inakuonyesha nini baada ya kuthibitisha usafiri?", options: ["Jina la dereva, picha, gari na namba ya gari", "Salio lako la benki", "Orodha ya mikahawa", "Nywila yako"], answer: 0, why: "Baada ya kuthibitisha, app inaonyesha dereva, gari na namba ya gari, na ramani." },
            { objective: "O2", q: "App imeweka alama ya mahali pa kuchukuliwa ng'ambo ya barabara yenye magari mengi kutoka ulipo. Ungefanya nini?", options: ["Kuagiza hivyo hivyo na kukimbia kuvuka barabara", "Kufuta akaunti yako", "Kuchagua gari la bei ghali zaidi", "Kusogeza alama au kuandika anwani ili dereva akupate"], answer: 3, why: "Unaweza kusogeza alama au kuandika anwani ili mahali pa kuchukuliwa pawe sahihi." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kuingia kwenye gari sahihi, kwa usalama",
          minutes: 5,
          goal: "Kagua gari, namba ya gari na dereva kabla ya kuingia, na utumie zana za usalama.",
          text: [
            "Kabla ya kuingia, kagua mambo matatu dhidi ya app: namba ya gari, aina na rangi ya gari, na jina na picha ya dereva. Uliza \"Umekuja kumchukua nani?\" na umwache dereva ataje jina lako. Kitu chochote kisipolingana, usiingie.",
            "Uber ina PIN ya hiari ya tarakimu nne: unamwambia dereva PIN, na safari inaweza kuanza tu kwa PIN sahihi. Share My Trip ya Uber inawaruhusu familia au marafiki unaowaamini kufuatilia safari yako moja kwa moja, na kitufe chake cha dharura ndani ya app kinawasiliana na 911 (namba ya dharura ya Marekani) na kuonyesha mahali ulipo na taarifa za gari. Lyft ina zana zake za usalama; zitafute kwenye ukurasa wake wa usalama au ndani ya app.",
            "Subiri ndani hadi app ionyeshe kuwa gari limefika, na usiingie kwenye gari linalokupa usafiri bila kuagizwa kwenye app."
          ],
          steps: ["Subiri ndani hadi app iseme gari limefika.", "Kagua namba ya gari, gari na picha ya dereva.", "Uliza \"Umekuja kumchukua nani?\"", "Tumia PIN kama umeiwasha.", "Shiriki safari yako na mwanafamilia au rafiki.", "Jua kitufe cha dharura kiko wapi."],
          words: [["Namba ya gari", "kibao cha namba kwenye gari; hakikisha inalingana na app."], ["Share My Trip", "zana ya Uber inayowaruhusu watu unaowachagua kufuatilia safari yako moja kwa moja."], ["PIN", "msimbo mfupi wa namba unaomwambia dereva ili safari ianze."]],
          slides: [
            { title: "Kagua kabla ya kuingia", bullets: ["Namba ya gari", "Aina na rangi ya gari", "Jina na picha ya dereva"] },
            { title: "Uliza, usiseme", bullets: ["\"Umekuja kumchukua nani?\"", "Mwache dereva ataje jina lako", "Hakulingani? Usiingie"] },
            { title: "Zana za usalama (Uber)", bullets: ["PIN ya hiari ya safari yenye tarakimu nne", "Share My Trip kwa watu unaowaamini", "Kitufe cha dharura kinaunganisha na 911"] },
            { title: "Lyft na nyingine", bullets: ["Zina zana zao za usalama", "Zitafute ndani ya app au ukurasa wa usalama"] }
          ],
          sources: [{ name: "Uber: Usalama wa abiria", url: "https://www.uber.com/us/en/ride/safety/" }],
          tryIt: "Fungua sehemu ya usalama ya app yako ya usafiri. Tafuta jinsi ya kushiriki safari na kitufe cha dharura kiko wapi. Kama app yako ina PIN ya safari, iwashe.",
          youCanNow: "kuhakikisha una gari na dereva sahihi, na kutumia zana za usalama za app.",
          quickCheck: [
            { objective: "O3", q: "Share My Trip ya Uber inafanya nini?", options: ["Inagawa bei na mtu usiyemjua", "Inawaruhusu familia au marafiki unaowaamini kufuatilia safari yako moja kwa moja", "Inaweka safari yako kwenye mitandao ya kijamii", "Inampa dereva nywila yako"], answer: 1, why: "Share My Trip inawaruhusu watu unaowaamini kufuatilia safari yako moja kwa moja." },
            { objective: "O3", q: "Dereva anasema \"Wewe ni Maria?\" na wewe ni Maria. Ungefanya nini badala ya kusema ndiyo?", options: ["Kuingia mara moja", "Kumwambia dereva PIN yako kabla ya kukagua chochote", "Kuuliza \"Umekuja kumchukua nani?\" na kumwacha dereva ataje jina lako", "Kumpa dereva simu yako"], answer: 2, why: "Kumwacha dereva ataje jina lako kunaonyesha kuwa kweli alitumwa kwa ajili yako." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kupata usafiri",
        questions: [
          { objective: "O1", q: "Unapaswa kupata app ya Uber au Lyft wapi?", options: ["Kiungo kwenye ujumbe mfupi", "Tovuti yoyote", "Duka rasmi la apps", "Tangazo linalojitokeza (pop-up)"], answer: 2, why: "Maduka rasmi yana apps halisi." },
          { objective: "O2", q: "Unaweza kuona bei ya usafiri lini?", options: ["Kabla ya kuthibitisha usafiri", "Baada ya safari tu", "Kwenye taarifa ya benki tu", "Kamwe"], answer: 0, why: "App inaonyesha bei ya kila chaguo la usafiri kabla ya kukubali." },
          { objective: "O2", q: "Kwa nini usafiri unaweza kugharimu zaidi Ijumaa jioni?", options: ["App imeharibika", "Bei za wakati wa watu wengi, watu wengi wanapotaka usafiri", "Simu yako ni ya zamani", "Usafiri ni bure siku za Ijumaa"], answer: 1, why: "Bei zinaweza kupanda mahitaji yakiwa makubwa." },
          { objective: "O3", q: "Gari linasimama lakini namba ya gari hailingani na app. Unafanya nini?", options: ["Kuingia hivyo hivyo", "Kuingia na kuuliza baadaye", "Kumlipa dereva pesa taslimu", "Kutoingia"], answer: 3, why: "Kutolingana kunamaanisha huenda si usafiri wako." },
          { objective: "O3", q: "Njia salama zaidi ya kumkagua dereva ni ipi?", options: ["Kusema \"Umekuja kwa ajili ya Maria?\"", "Kuuliza \"Umekuja kumchukua nani?\"", "Kumwonyesha kitambulisho chako", "Kumwambia PIN yako kwanza"], answer: 1, why: "Kumwacha dereva ataje jina lako kunathibitisha kuwa ni dereva wako." }
        ]
      }
    },
    {
      name: "Sura 2: Kuagiza chakula na mahitaji ya nyumbani",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuagiza chakula au mahitaji ya nyumbani yaletwe",
          minutes: 5,
          goal: "Tafuta mkahawa au duka kwenye app ya kuletewa bidhaa na utengeneze oda.",
          text: [
            "Apps za kuletewa bidhaa kama DoorDash, Uber Eats na Instacart zinakuruhusu kuagiza kutoka mikahawa na maduka ya karibu. Mtu wa kuleta bidhaa, ambaye wakati mwingine anaitwa Dasher au shopper (mnunuzi), anachukua oda yako na kukuletea.",
            "Sakinisha kutoka duka rasmi la apps na uandike anwani yako ya kuletewa kwa uangalifu, pamoja na namba ya nyumba (apartment) au ya geti na maelezo kwa dereva, kama \"mlango wa bluu, gonga kengele\".",
            "Pitia au tafuta mkahawa au duka, gusa bidhaa ili uziongeze kwenye kikapu chako (cart), na uchague machaguo kama ukubwa. Kwa mahitaji ya nyumbani, kwa kawaida unaweza kuchagua mnunuzi afanye nini bidhaa ikiwa imeisha: aibadilishe kwa kitu kinachofanana, au akurudishie pesa."
          ],
          steps: ["Sakinisha app ya kuletewa bidhaa kutoka duka rasmi.", "Andika anwani yako kamili ya kuletewa na maelezo kwa dereva.", "Tafuta mkahawa au duka.", "Gusa bidhaa ili uziongeze kwenye kikapu chako.", "Kwa mahitaji ya nyumbani, chagua la kufanya bidhaa ikiwa imeisha."],
          words: [["App ya kuletewa bidhaa", "app inayokuletea chakula au bidhaa kutoka biashara za karibu mlangoni kwako."], ["Kikapu (cart)", "orodha ya bidhaa unazopanga kununua."], ["Bidhaa mbadala", "bidhaa inayofanana ambayo mnunuzi anachagua yako ikiwa imeisha."]],
          slides: [
            { title: "Apps za kuletewa bidhaa", bullets: ["DoorDash, Uber Eats, Instacart na nyingine", "Dereva au mnunuzi anakuletea oda yako"] },
            { title: "Anwani yako", bullets: ["Anwani kamili na namba ya nyumba au ya geti", "Maelezo kama \"mlango wa bluu, gonga kengele\""] },
            { title: "Tengeneza oda", bullets: ["Tafuta mkahawa au duka", "Ongeza bidhaa kwenye kikapu chako", "Chagua kitakachofanyika bidhaa ikiwa imeisha"] }
          ],
          tryIt: "Fungua app ya kuletewa bidhaa (isakinishe kutoka duka rasmi kama inahitajika). Andika anwani yako pamoja na maelezo kwa dereva, kisha ongeza bidhaa mbili kwenye kikapu. Usitume oda bado.",
          youCanNow: "kutafuta mkahawa au duka kwenye app ya kuletewa bidhaa na kutengeneza oda kwa anwani yako.",
          quickCheck: [
            { objective: "O4", q: "Katika app ya kuletewa bidhaa, nani anakuletea oda yako?", options: ["Mmiliki wa mkahawa tu", "Posta", "Hakuna; lazima uichukue mwenyewe", "Mtu wa kuleta bidhaa, ambaye wakati mwingine anaitwa Dasher au shopper"], answer: 3, why: "Mtu wa kuleta bidhaa anachukua oda yako na kukuletea." },
            { objective: "O4", q: "Unaishi katika nyumba namba 4B nyuma ya geti. Ungefanya nini unapoandika anwani yako?", options: ["Kuongeza namba ya nyumba, taarifa za geti na maelezo kwa dereva", "Kuandika jina la mtaa tu", "Kuacha anwani wazi", "Kutumia anwani ya jirani"], answer: 0, why: "Namba za nyumba na geti na maelezo vinamsaidia dereva akupate." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kuelewa skrini ya malipo: ada, bakshishi na jumla",
          minutes: 5,
          goal: "Soma skrini ya malipo na ujue kila malipo ni ya nini kabla ya kulipa.",
          text: [
            "Bei iliyo kwenye menyu si gharama yote. Skrini ya malipo (checkout) inaorodhesha jumla ya bidhaa pamoja na malipo ya ziada, yanayoweza kujumuisha ada ya kuleta, ada ya huduma, wakati mwingine ada ya oda ndogo, kodi, na bakshishi kwa dereva.",
            "Ada hubadilika kulingana na app, wakati, umbali na mji, na baadhi ya apps zina uanachama wa kulipia unaopunguza ada. Kwa hiyo soma skrini ya malipo kila wakati na uangalie jumla kabla ya kugusa Place order (Tuma oda).",
            "Bakshishi inaenda kwa dereva au mnunuzi. Wewe unachagua kiasi, na apps nyingi zinakuruhusu kukibadilisha baada ya kuletewa. Jumla ikiwa zaidi ya ulivyopanga, ondoa bidhaa moja au chagua kwenda kuchukua mwenyewe (pickup) badala ya kuletewa kama app inatoa hivyo."
          ],
          steps: ["Fungua kikapu chako na uende kwenye malipo (checkout).", "Soma kila mstari: bidhaa, ada ya kuleta, ada ya huduma, kodi, bakshishi.", "Kagua anwani ya kuletewa na njia ya malipo.", "Angalia jumla.", "Badilisha oda au bakshishi ikihitajika, kisha gusa Place order."],
          words: [["Ada ya kuleta", "malipo ya kukuletea oda."], ["Ada ya huduma", "malipo ambayo app inaongeza kwa kutumia huduma yake."], ["Bakshishi", "pesa unazochagua kumpa dereva au mnunuzi."]],
          slides: [
            { title: "Bei ya menyu si jumla", bullets: ["Jumla ya bidhaa", "Ada ya kuleta na ada ya huduma", "Kodi na bakshishi"] },
            { title: "Ada hubadilika", bullets: ["Kulingana na app, wakati, umbali na mji", "Soma skrini ya malipo kila wakati"] },
            { title: "Kabla ya kugusa Place order", bullets: ["Kagua anwani na malipo", "Angalia jumla", "Ni nyingi mno? Ondoa bidhaa au chagua kwenda kuchukua"] }
          ],
          tryIt: "Peleka kikapu kutoka somo lililopita hadi skrini ya malipo. Andika jumla ya bidhaa, kila ada, bakshishi na jumla ya mwisho. Kisha amua kama utatuma oda au utafunga app.",
          youCanNow: "kusoma skrini ya malipo ya oda ya kuletewa na kujua gharama kamili kabla ya kulipa.",
          quickCheck: [
            { objective: "O5", q: "Nani anapokea bakshishi kwenye oda ya kuletewa?", options: ["Kampuni ya app", "Dereva au mnunuzi", "Mji", "Mwenye jengo la mkahawa"], answer: 1, why: "Bakshishi inaenda kwa dereva au mnunuzi." },
            { objective: "O5", q: "Bidhaa za menyu yako zinafikia kiasi kidogo, lakini jumla ni kubwa zaidi sana. Ungefanya nini kabla ya kutuma oda?", options: ["Kugusa Place order bila kuangalia", "Kuongeza bidhaa zaidi ili iwe na thamani", "Kusoma kila mstari kwenye skrini ya malipo kuona ada, kodi na bakshishi", "Kufunga app na kulipa kwa kadi ya zawadi"], answer: 2, why: "Skrini ya malipo inaorodhesha kila ada, kodi na bakshishi vinavyounda jumla." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Risiti, matatizo na kukaa salama",
          minutes: 4,
          goal: "Kagua risiti, pata msaada kwa oda isiyo sahihi na epuka ulaghai wa apps.",
          text: [
            "Baada ya safari au bidhaa kuletwa, app inatuma risiti kwenye barua pepe yako na kuihifadhi ndani ya app chini ya safari au oda zako. Hakikisha malipo yanalingana na mlichokubaliana.",
            "Kitu kikiwa si sawa, kama bidhaa iliyokosekana, chakula kilichopoa au malipo yasiyo sahihi, tumia sehemu ya Help au Support (Msaada) ndani ya app na uchague oda hiyo. Ripoti matatizo mapema baada ya kutokea.",
            "Walaghai hujifanya kuwa huduma kwa wateja ya app. Msaada halisi uko ndani ya app. Usipige namba ya msaada kutoka tangazo la utafutaji, na kamwe usimpe mtu anayekupigia simu au kukutumia ujumbe nywila yako au msimbo uliotumwa kwenye simu yako. Lipa ndani ya app tu, si kwa pesa taslimu wala kadi za zawadi kwa mtu anayeziomba."
          ],
          steps: ["Fungua safari au oda zako ndani ya app.", "Hakikisha risiti inalingana na mlichokubaliana.", "Kwa tatizo, nenda kwenye Help ndani ya app na uchague oda.", "Kamwe usimpe anayepiga simu nywila au msimbo wa simu.", "Lipa ndani ya app tu."],
          words: [["Risiti", "kumbukumbu ya ulicholipa na ulicholipia."], ["Msaada (Support)", "sehemu ya msaada ya app kwa matatizo."]],
          slides: [
            { title: "Kagua risiti", bullets: ["Kwenye barua pepe yako na ndani ya app", "Inalingana na mlichokubaliana?"] },
            { title: "Kuna tatizo?", bullets: ["Help au Support ndani ya app", "Chagua oda", "Liripoti mapema"] },
            { title: "Epuka ulaghai wa msaada", bullets: ["Msaada halisi uko ndani ya app", "Kamwe usitoe nywila au msimbo wa simu", "Lipa ndani ya app tu"] }
          ],
          tryIt: "Mazoezi ya kazi ya mwisho: fungua sehemu ya safari au oda ya app yako ya usafiri au ya kuletewa bidhaa na utafute sehemu ya Help. Kisha fanya kazi ya mwisho: angalia bei ya usafiri na utafute zana za usalama, na usome skrini kamili ya malipo ya oda ya kuletewa.",
          youCanNow: "kukagua risiti, kupata msaada kwa tatizo ndani ya app, na kuepuka ulaghai wa msaada bandia.",
          quickCheck: [
            { objective: "O6", q: "Unaweza kupata risiti ya oda ya kuletewa wapi?", options: ["Kwenye barua pepe yako na ndani ya app chini ya oda zako", "Kwa dereva tu", "Kwenye injini ya utafutaji", "Hakuna mahali; apps hazitoi risiti"], answer: 0, why: "App inatuma risiti kwa barua pepe na kuihifadhi chini ya safari au oda zako." },
            { objective: "O6", q: "Chakula chako hakikufika kamwe na unatafuta mtandaoni namba ya msaada ya app. Tangazo linaonyesha namba ya simu. Ungefanya nini?", options: ["Kupiga namba kutoka tangazo", "Kumpa anayepiga simu nywila yako", "Kumlipa mtu usiyemjua kwa kadi za zawadi ili urudishiwe pesa", "Kuruka tangazo na kutumia Help ndani ya app"], answer: 3, why: "Msaada halisi uko ndani ya app; namba za msaada kwenye matangazo ya utafutaji zinaweza kuwa za walaghai." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kuagiza chakula na mahitaji ya nyumbani",
        questions: [
          { objective: "O4", q: "Kwa nini uongeze maelezo kama \"mlango wa bluu, gonga kengele\" kwenye anwani yako?", options: ["Yanapunguza bei", "Yanamsaidia dereva akupate", "Yanatakiwa na sheria", "Yanaficha anwani yako"], answer: 1, why: "Maelezo yaliyo wazi yanamsaidia dereva kuleta kwenye mlango sahihi." },
          { objective: "O4", q: "Bidhaa mbadala katika oda ya mahitaji ya nyumbani ni nini?", options: ["Bidhaa inayofanana yako ikiwa imeisha", "Kuponi", "Ada ya kuleta", "Bakshishi"], answer: 0, why: "Wanunuzi wanaweza kubadilisha bidhaa iliyoisha kwa inayofanana nayo." },
          { objective: "O5", q: "Skrini ipi inaonyesha gharama kamili ya oda ya kuletewa?", options: ["Menyu", "Skrini ya mwanzo", "Skrini ya malipo (checkout)", "Duka la apps"], answer: 2, why: "Skrini ya malipo inaorodhesha bidhaa, ada, kodi, bakshishi na jumla." },
          { objective: "O6", q: "Chakula chako kinafika kikiwa kimekosa bidhaa moja. Unafanya nini?", options: ["Kupiga namba kutoka tangazo la utafutaji", "Kuweka nywila yako mtandaoni", "Kupuuza", "Kutumia Help ndani ya app na kuchagua oda"], answer: 3, why: "Msaada halisi uko ndani ya app." },
          { objective: "O6", q: "Mtu anakutumia ujumbe akisema ni msaada wa DoorDash na anahitaji msimbo uliotumwa kwenye simu yako. Unafanya nini?", options: ["Usiutoe; msaada halisi uko ndani ya app", "Kutuma msimbo", "Kutuma nywila yako", "Kumlipa kwa kadi ya zawadi"], answer: 0, why: "Kamwe usimpe msimbo wa simu mtu anayewasiliana nawe." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kuagiza Usafiri au Chakula kwa Apps (Uber, Lyft, DoorDash)",
    questions: [
      { objective: "O1", q: "App ya usafiri kama Uber au Lyft inafanya nini?", options: ["Inatuma dereva mwenye gari lake mwenyewe aje akuchukue", "Inauza magari", "Inaleta barua za posta", "Inakodisha baiskeli tu"], answer: 0, why: "Apps za usafiri zinakuunganisha na dereva." },
      { objective: "O1", q: "Unaposakinisha app ya usafiri, kagua:", options: ["Rangi ya ikoni", "Kwamba mtengenezaji ni kampuni halisi", "Salio lako la benki", "Hali ya hewa"], answer: 1, why: "Apps bandia zinanakili majina halisi." },
      { objective: "O1", q: "Chini ya masharti ya Uber ya Marekani, vijana wa miaka 13 hadi 17 wanaweza kusafiri:", options: ["Kwa akaunti yao wenyewe ya mtu mzima", "Kamwe", "Kupitia akaunti ya kijana iliyowekwa na mzazi au mlezi", "Usiku tu"], answer: 2, why: "Masharti ya Uber yanaruhusu akaunti za vijana wa miaka 13-17 pamoja na mzazi au mlezi." },
      { objective: "O1", q: "Unapaswa kuandika taarifa za kadi yako kwa app ya usafiri wapi?", options: ["Kwenye ujumbe mfupi kwa dereva", "Kwenye barua pepe", "Kwenye mitandao ya kijamii", "Ndani ya app tu"], answer: 3, why: "Malipo yanawekwa ndani ya app tu." },
      { objective: "O2", q: "Kisanduku cha \"Where to?\" ni cha:", options: ["Unakokwenda", "Nywila yako", "Bakshishi", "Namba yako ya benki"], answer: 0, why: "Unaandika unakotaka kwenda." },
      { objective: "O2", q: "Kwa nini ukague mahali pa kuchukuliwa kwenye ramani?", options: ["Kubadilisha bei", "Haihitajiki", "Kuchagua rangi ya gari", "Ili dereva akupate"], answer: 3, why: "Mahali sahihi pa kuchukuliwa panazuia kukosana na gari." },
      { objective: "O2", q: "Bei za usafiri zinaweza kuwa juu zaidi:", options: ["Kamwe", "Siku yako ya kuzaliwa tu", "Wakati wa watu wengi kama saa za msongamano", "Unapotumia Wi-Fi"], answer: 2, why: "Mahitaji makubwa yanaweza kupandisha bei." },
      { objective: "O3", q: "Unapaswa kukagua nini kabla ya kuingia kwenye gari?", options: ["Kituo cha redio", "Hali ya hewa", "Namba ya gari, gari na picha ya dereva", "Anwani ya nyumbani ya dereva"], answer: 2, why: "Hivi lazima vilingane na app." },
      { objective: "O3", q: "PIN ya safari ya Uber inafanya kazi kwa:", options: ["Kumlipa dereva", "Kupiga 911", "Kufungua simu yako", "Wewe kumwambia dereva msimbo ili safari ianze"], answer: 3, why: "Safari inaanza tu kwa PIN sahihi." },
      { objective: "O3", q: "Share My Trip inakuwezesha:", options: ["Kugawa nauli na watu usiowajua", "Kubadilisha dereva", "Kuwaacha watu unaowaamini wafuatilie safari yako moja kwa moja", "Kurudishiwa pesa"], answer: 2, why: "Watu unaowaamini wanaweza kuona hali ya safari yako." },
      { objective: "O3", q: "Kitufe cha dharura ndani ya app ya Uber:", options: ["Kinampa dereva alama", "Kinafuta safari bure", "Kinapiga simu benki yako", "Kinawasiliana na 911 na kuonyesha mahali ulipo na taarifa za gari"], answer: 3, why: "Kinakuunganisha na 911 pamoja na taarifa za safari." },
      { objective: "O3", q: "Gari ambalo hukuliagiza linakupa usafiri nje ya ukumbi. Unapaswa:", options: ["Kuingia; ni haraka zaidi", "Kulipa pesa taslimu", "Kukataa; safiri tu kwa gari lililoagizwa kwenye app", "Kumpa PIN yako"], answer: 2, why: "Magari yaliyoagizwa na yanayolingana tu ndiyo salama." },
      { objective: "O4", q: "App ipi ni hasa ya kuletewa mahitaji ya nyumbani?", options: ["Lyft", "Kikokotoo", "App ya hali ya hewa", "Instacart"], answer: 3, why: "Instacart inaleta mahitaji ya nyumbani." },
      { objective: "O4", q: "\"Kikapu\" (cart) katika app ya kuletewa bidhaa ni:", options: ["Gari", "Risiti", "Orodha ya bidhaa unazopanga kununua", "Ada"], answer: 2, why: "Kikapu chako kinashika bidhaa kabla ya malipo." },
      { objective: "O5", q: "Lipi kwa kawaida ni malipo ya ziada kwenye oda ya kuletewa?", options: ["Ada ya huduma", "Zawadi ya bure", "Alama yako", "Anwani yako"], answer: 0, why: "Ada za huduma na za kuleta zinaongezwa wakati wa malipo." },
      { objective: "O5", q: "Bakshishi kwenye oda ya kuletewa inaenda kwa:", options: ["Duka la apps", "Serikali", "Benki", "Dereva au mnunuzi"], answer: 3, why: "Bakshishi ni kwa mtu anayeleta." },
      { objective: "O5", q: "Jumla kwenye skrini ya malipo ni zaidi ya ulivyopanga. Hatua nzuri ni:", options: ["Kulipa hivyo hivyo bila kusoma", "Kumpa mtu usiyemjua kadi yako", "Kuondoa bidhaa au kuchagua kwenda kuchukua kama inatolewa", "Kuacha anwani ya uongo"], answer: 2, why: "Kubadilisha oda kunapunguza jumla." },
      { objective: "O6", q: "Unaweza kupata risiti baada ya safari wapi?", options: ["Kwenye barua pepe yako na sehemu ya safari ya app", "Kwa dereva tu", "Hakuna mahali", "Kwenye duka la apps"], answer: 0, why: "Apps zinahifadhi risiti na kuzituma kwa barua pepe." },
      { objective: "O6", q: "Msaada halisi kwa oda isiyo sahihi uko wapi?", options: ["Namba ya simu kutoka tangazo la utafutaji", "Maoni kwenye mitandao ya kijamii", "Ujumbe wa mtu usiyemjua", "Help au Support ndani ya app"], answer: 3, why: "Msaada halisi uko ndani ya app." },
      { objective: "O6", q: "Mtu anasema ni msaada wa app na anaomba nywila yako. Wewe:", options: ["Unaitoa", "Unatoa nusu", "Kamwe huitoi", "Unaituma kwa ujumbe baadaye"], answer: 2, why: "Msaada halisi hauhitaji kamwe nywila yako." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [0, 3, 5, 6, 7, 11, 13, 14, 16, 18]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Bei kabla ya kuagiza", objective: "O2", notYet: "Mahali pa kuchukuliwa au unakokwenda si sahihi, au bei na muda wa kufika havikusomwa.", meets: "Mahali halisi pa kuchukuliwa na unakokwenda vimeandikwa, na bei na muda wa kufika vimesomwa kabla ya kuagiza chochote.", exceeds: "Pia analinganisha machaguo mawili ya usafiri na anasema kwa nini bei inaweza kuwa juu zaidi wakati wa watu wengi." },
      { name: "Zana za usalama", objective: "O3", notYet: "Hawezi kupata zana za usalama.", meets: "Anapata Share My Trip, kitufe cha dharura na PIN ya safari (au zana za usalama za app yenyewe).", exceeds: "Pia anaeleza ukaguzi mitatu kabla ya kuingia kwenye gari." },
      { name: "Oda ya kuletewa", objective: "O4", notYet: "Kikapu ni tupu au anwani ya kuletewa haijakamilika.", meets: "Oda ndogo kwenye kikapu pamoja na anwani kamili ya kuletewa.", exceeds: "Anaongeza maelezo yenye msaada kwa dereva na chaguo kwa bidhaa zilizoisha." },
      { name: "Kusoma skrini ya malipo", objective: "O5", notYet: "Hawezi kusema ada, bakshishi au jumla ni kiasi gani.", meets: "Anaeleza jumla ya bidhaa, kila ada, bakshishi, anwani ya kuletewa na jumla kuu.", exceeds: "Pia anataja njia moja ya kupunguza jumla, kama kuondoa bidhaa au kuchagua kwenda kuchukua." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kupata Anafikia au Anazidi katika kila mstari wa rubriki wa kazi ya mwisho",
      "Wanafunzi wanaoripoti kufika kwenye miadi, kazini au kwenye shughuli kwa app ya usafiri wao wenyewe ndani ya siku 30 baada ya kozi (utafiti wa kufuatilia)",
      "Wanafunzi wanaoripoti kukagua bei na ada kabla ya kuagiza na kubaki ndani ya bajeti yao",
      "Wanafunzi wanaoripoti kukataa simu au ujumbe bandia wa msaada"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu janja yenye huduma ya mahali (location) imewashwa na intaneti",
      "App ya usafiri (Uber au Lyft) na app ya kuletewa bidhaa (DoorDash, Uber Eats au Instacart) kutoka duka rasmi",
      "Mahali halisi pa kuchukuliwa na unakokwenda, kama nyumbani hadi kliniki au maktaba",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi; hakuna kuagiza wala kulipa kunakohitajika"
    ],
    facilitatorNotes: [
      "Waambie wanafunzi wasiguse Confirm au Place order darasani isipokuwa kweli wanahitaji usafiri au chakula; kazi inasimama kabla ya kuagiza.",
      "Huenda wanafunzi wakahitaji kadi ili kumaliza kujisajili; waache waamue kama wataiongeza, na kamwe usiombe kuona taarifa za kadi.",
      "Fanyeni mazoezi ya ukaguzi wa \"Umekuja kumchukua nani?\" kama igizo, wanafunzi wawili wakiwa abiria na dereva.",
      "Bei na ada hubadilika kulingana na mji na wakati wa siku, kwa hiyo angalieni skrini halisi za malipo badala ya kutaja viwango.",
      "Kwa wanafunzi wasioweza kutumia kadi au simu janja, taja huduma za usafiri za karibu kwa watu wenye ulemavu (paratransit) au programu za usafiri kwa wazee ambazo shirika lako linazijua."
    ]
  }
};
