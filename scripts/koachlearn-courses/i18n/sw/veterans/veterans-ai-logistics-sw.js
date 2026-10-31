"use strict";

// Koach Learn course (Swahili translation of veterans/veterans-ai-logistics.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "veterans-ai-logistics-sw",
  lang: "sw",
  translationOf: "veterans-ai-logistics",
  category: "Veterans (military)",
  name: "AI kwa Usafirishaji na Uendeshaji",
  skills: "Kuzungumza lugha ya kiraia ya mnyororo wa ugavi, Kujua AI inafaa wapi katika usafirishaji, Kutengeneza jedwali la kuagiza tena bidhaa, Kuandaa ratiba ya usambazaji kwa AI, Kuwasilisha mpango wa uendeshaji",
  outcome: "kutengeneza jedwali rahisi la kuagiza tena bidhaa na ratiba ya usambazaji kwa msaada wa msaidizi wa AI na spreadsheet ya bure, kukagua hesabu wewe mwenyewe, na kuwasilisha mpango kwa maneno ya kiraia ya usafirishaji.",
  about: [
    "Kama ulisafirisha watu, vipuri, mafuta, chakula au magari jeshini, tayari ulifanya kazi ya usafirishaji na ugavi (logistics). Maghala ya kiraia, kampuni za malori, hospitali na maduka ya mtandaoni zinahitaji ujuzi huo huo, na sasa zinatumia zana za AI kupanga.",
    "Katika kozi hii utajifunza maneno ya kiraia ya kazi uliyoifanya, utaona AI inafaa wapi katika usafirishaji leo, na utatengeneza zana mbili halisi: jedwali la kuagiza tena bidhaa na ratiba ya usambazaji. Utamaliza kwa kuwasilisha mpango, kama ulivyomweleza kamanda, lakini kwa maneno ya kiraia.",
    "Kila somo linachukua kama dakika tano. Unahitaji spreadsheet ya bure (Google Sheets au Microsoft Excel kwenye wavuti) na msaidizi wa AI wa bure kama ChatGPT, Microsoft Copilot au Google Gemini. Kuna jaribio la maarifa mwishoni mwa kila sura na mtihani wa maswali 20 mwishoni mwa kozi."
  ],
  finalTask: "Andaa muhtasari wa uendeshaji wa ukurasa mmoja kwa biashara ndogo ya kubuni (kwa mfano benki ya chakula au duka la vipuri): jedwali la bidhaa lenye kiwango cha kuagiza tena kwa bidhaa tano, ratiba ya usambazaji ya wiki moja iliyoandaliwa kwa AI na kukaguliwa na wewe, hatari tatu pamoja na mpango mbadala kwa kila moja, na mistari miwili ya CV inayoeleza kazi yako ya usafirishaji jeshini kwa maneno ya kiraia.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wanajeshi wastaafu (veterans) na wanajeshi wanaoondoka jeshini ambao walisafirisha watu, vipuri, mafuta, chakula au magari wakiwa kazini, na wanataka kazi ya kiraia katika maghala, malori, hospitali, benki za chakula au maduka ya mtandaoni.",
    startingPoint: "Wanaijua vizuri kazi ya ugavi, usafiri na matengenezo, na wanaweza kutumia simu au kompyuta. Wengi wanatumia maneno ya kijeshi, hawajawahi kutengeneza jedwali la kuagiza tena katika spreadsheet ya bure, na hawajatumia AI kupanga ratiba au kusoma data.",
    gap: "Waajiri wa kiraia wa usafirishaji wanatumia maneno yao wenyewe na zana za AI za kupanga, na wanahitaji watu wanaoweza kukagua mipango ya AI dhidi ya mipaka halisi. Wanafunzi wanahitaji kuzungumza lugha ya kiraia ya mnyororo wa ugavi, kutengeneza na kukagua jedwali la kuagiza tena na ratiba kwa msaada wa AI, na kuwasilisha mpango kwa uwazi.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; hatua za spreadsheet zinaonyeshwa moja moja",
      "Vifaa: kompyuta ni bora kwa spreadsheet; zana ya bure kama Google Sheets au Microsoft Excel mtandaoni",
      "Faragha: biashara za kubuni tu; hakuna majina ya wateja wala anwani za nyumbani katika zana za AI za umma",
      "Kukagua hesabu: wanafunzi wanakagua fomula na muda wa AI kwa mkono, kwa kikokotoo na app ya ramani",
      "Muda: masomo ya kama dakika 5 pamoja na mazoezi ya spreadsheet"
    ],
    prerequisites: "Hakuna. Mazoezi ya msingi ya spreadsheet yanasaidia lakini hayahitajiki."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa kazi za usafirishaji kutoka huduma yako jeshini", action: "kutafsiri maneno ya kijeshi ya usafirishaji kuwa maneno ya kiraia wanayotumia waajiri", standard: "ukitafsiri maneno matano na kutaja vyeo viwili vya kazi za kiraia vinavyolingana" },
    { id: "O2", condition: "Ukipewa mifano ya AI katika maghala na malori", action: "kueleza njia nne AI inavyotumika katika usafirishaji na uamuzi ambao mtu bado anaufanya kwa kila moja", standard: "ukitaja jambo moja ambalo mtu lazima alikague kwa kila moja" },
    { id: "O3", condition: "Ukipewa matumizi ya kila siku, muda wa kusubiri na akiba ya tahadhari kwa bidhaa tano", action: "kutengeneza spreadsheet inayohesabu wakati wa kuagiza tena kila bidhaa", standard: "ukikagua mstari mmoja kwa mkono kwa kikokotoo" },
    { id: "O4", condition: "Ukipewa vituo, saa, magari na madereva", action: "kutumia msaidizi wa AI kuandaa ratiba ya usambazaji ya wiki moja na kuikagua dhidi ya mipaka halisi", standard: "ukirekebisha kila tatizo unalolipata kwa app ya ramani na saa za vituo" },
    { id: "O5", condition: "Ukipewa jedwali dogo la data ya usambazaji", action: "kutumia AI kutafuta mifumo inayojirudia na kuthibitisha mmoja wewe mwenyewe kwa kichujio cha spreadsheet", standard: "na kuandika chanzo, suluhisho na jinsi utakavyolipima" },
    { id: "O6", condition: "Ukitumia jedwali lako, ratiba yako na hatari zako", action: "kuwasilisha mpango wa uendeshaji kwa maneno ya kiraia na kuandika mistari miwili ya CV kuhusu kazi yako ya usafirishaji", standard: "ukiwa na hali, mpango, hatari tatu na mpango mbadala kwa kila moja" }
  ],
  chapters: [
    {
      name: "Sura 1: Kutoka usafirishaji wa kijeshi hadi mnyororo wa ugavi wa kiraia",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kuzungumza lugha ya kiraia ya mnyororo wa ugavi",
          minutes: 5,
          goal: "Tafsiri maneno matano ya kijeshi ya usafirishaji kuwa maneno ya kiraia wanayotumia waajiri.",
          text: [
            "Mnyororo wa ugavi (supply chain) ni kila hatua inayofikisha bidhaa kutoka inapotengenezwa hadi kwa mtu anayeitumia. Usafirishaji na ugavi (logistics) ni sehemu ya kupanga na kusafirisha katika mnyororo huo.",
            "Maneno mengi ya kijeshi yana pacha wa kiraia. Stoo ya vifaa au ghala ni usimamizi wa bidhaa (inventory management). Msafara (convoy) ni usafiri au usafirishaji wa mizigo (freight). Karakana ya magari (motor pool) ni matengenezo ya magari ya kampuni (fleet maintenance). Upangaji wa ugavi wa Class I hadi IX ni upangaji wa mahitaji (demand planning). Safari ya mwisho hadi kwa mtumiaji inaitwa \"last-mile delivery\".",
            "My Next Move for Veterans (mynextmove.org/vets), tovuti ya Wizara ya Kazi ya Marekani (U.S. Department of Labor), inakuruhusu kuandika kazi yako ya kijeshi na kuona kazi za kiraia zinazofanana, kama mtaalamu wa usafirishaji (logistician), msimamizi wa ghala au mratibu wa safari (dispatcher)."
          ],
          steps: ["Orodhesha kazi tano za usafirishaji ulizofanya jeshini.", "Uliza msaidizi wa AI: \"Tafsiri kazi hizi za kijeshi za usafirishaji kuwa maneno ya kiraia ya mnyororo wa ugavi.\"", "Tafuta kazi yako ya kijeshi kwenye mynextmove.org/vets.", "Andika vyeo vya kazi za kiraia vinavyofaa zaidi."],
          words: [["Mnyororo wa ugavi (supply chain)", "kila hatua kutoka kutengeneza bidhaa hadi kwa mtu anayeitumia."], ["Bidhaa za akiba (inventory)", "vitu ambavyo biashara inavihifadhi stoo."], ["Last-mile delivery", "safari ya mwisho inayomfikishia mteja bidhaa."], ["3PL", "third-party logistics: kampuni inayokodiwa kuhifadhi na kusafirisha bidhaa za biashara nyingine."]],
          slides: [
            { title: "Mnyororo wa ugavi na usafirishaji", bullets: ["Mnyororo wa ugavi: kila hatua hadi kwa mtumiaji", "Usafirishaji (logistics): sehemu ya kupanga na kusafirisha"] },
            { title: "Kutoka kijeshi hadi kiraia", bullets: ["Stoo ya vifaa = usimamizi wa bidhaa (inventory management)", "Msafara = usafiri au usafirishaji wa mizigo (freight)", "Karakana ya magari = matengenezo ya magari (fleet maintenance)", "Upangaji wa ugavi = upangaji wa mahitaji (demand planning)"] },
            { title: "Tafuta kazi zinazolingana", bullets: ["mynextmove.org/vets (Wizara ya Kazi ya Marekani)", "Logistician, msimamizi wa ghala, dispatcher"] }
          ],
          sources: [{ name: "My Next Move for Veterans (Wizara ya Kazi ya Marekani)", url: "https://www.mynextmove.org/vets/" }],
          tryIt: "Andika kazi tano za usafirishaji kutoka huduma yako jeshini. Muulize msaidizi wa AI azitafsiri kwa maneno ya kiraia, kisha tafuta kazi yako ya kijeshi kwenye mynextmove.org/vets na uandike vyeo viwili vya kazi vinavyolingana.",
          youCanNow: "kueleza kazi yako ya usafirishaji jeshini kwa maneno wanayotumia waajiri wa kiraia.",
          quickCheck: [
            { objective: "O1", q: "Mnyororo wa ugavi ni nini?", options: ["Malori ambayo kampuni inamiliki tu", "Kila hatua kutoka kutengeneza bidhaa hadi kwa mtu anayeitumia", "Mlango wa mbele wa ghala", "Orodha ya namba za simu za wasambazaji"], answer: 1, why: "Mnyororo wa ugavi unahusu kila hatua kuanzia uzalishaji hadi kwa mtumiaji wa mwisho." },
            { objective: "O1", q: "CV yako inasema \"Niliongoza motor pool\". Utatumia maneno gani ya kiraia?", options: ["Iache kama \"motor pool\"", "\"Niliendesha magari\"", "\"Nilifanya mambo ya magari\"", "\"Nilisimamia matengenezo ya magari ya kampuni (fleet maintenance)\""], answer: 3, why: "Motor pool ya kijeshi inakaribiana zaidi na matengenezo ya magari ya kampuni (fleet maintenance)." }
          ]
        },
        {
          objectives: ["O2"],
          title: "AI inafaa wapi katika usafirishaji",
          minutes: 4,
          goal: "Taja njia nne AI inavyotumika katika usafirishaji na maamuzi ambayo watu bado wanayafanya.",
          text: [
            "Kampuni zinatumia AI kutabiri mahitaji (kukisia kiasi cha bidhaa watu watakachohitaji), kupanga njia zinazookoa mafuta na muda, kugundua mapema mizigo itakayochelewa, na kujibu maswali ya wateja kuhusu usambazaji.",
            "AI inajua tu data inayopewa. Kama data ni ya zamani, si sahihi au haipo, mpango nao utakuwa si sahihi. Dhoruba, barabara iliyofungwa au msongamano wa sikukuu huenda visiwe kwenye data.",
            "Watu bado ndio wanaofanya maamuzi: kukagua kama mpango una maana, kushughulikia mambo yasiyoenda kama ilivyopangwa, kuwalinda madereva na wafanyakazi, na kuongea na wateja. Uamuzi huo ndio hasa ambao usafirishaji wa kijeshi ulikufundisha."
          ],
          words: [["Utabiri (forecast)", "makisio ya makini kuhusu kitakachotokea, kama kiasi cha bidhaa utakachohitaji."], ["Route optimization", "kutafuta mpangilio na njia bora ya kusambaza bidhaa."], ["Jambo la kipekee (exception)", "kitu kisichoenda kama ilivyopangwa, kama lori lililochelewa."]],
          slides: [
            { title: "AI katika usafirishaji", bullets: ["Kutabiri mahitaji", "Kupanga njia", "Kugundua mizigo itakayochelewa", "Kujibu maswali kuhusu usambazaji"] },
            { title: "Udhaifu wa AI", bullets: ["Inajua tu data inayopewa", "Data ya zamani au isiyokamilika = mpango usio sahihi", "Dhoruba na barabara zilizofungwa huenda zisiwemo"] },
            { title: "Watu bado ndio wanaoamua", bullets: ["Je, mpango una maana?", "Kushughulikia mambo ya kipekee", "Usalama na wateja"] }
          ],
          tryIt: "Uliza msaidizi wa AI: \"Maghala na kampuni za malori zinatumiaje AI leo? Nipe mifano minne kwa maneno rahisi.\" Kando ya kila mfano, andika jambo moja ambalo mtu bado lazima alikague.",
          youCanNow: "kueleza AI inasaidia wapi katika usafirishaji na wapi uamuzi wa binadamu bado unahitajika.",
          quickCheck: [
            { objective: "O2", q: "Kutabiri mahitaji (demand forecasting) ni nini?", options: ["Kuagiza kila kitu kwa wakati mmoja", "Kuhesabu bidhaa mwishoni mwa mwaka", "Makisio ya makini ya kiasi kitakachohitajika", "Taarifa ya hali ya hewa kwa madereva"], answer: 2, why: "Kutabiri mahitaji ni kukadiria kiasi kitakachohitajika, na mara nyingi AI inasaidia kufanya hivyo." },
            { objective: "O2", q: "Mpango wa njia wa AI unapeleka lori kwenye barabara iliyofungwa asubuhi hii. Nani anaurekebisha?", options: ["Mtu anayejua barabara imefungwa", "AI itajirekebisha yenyewe baadaye", "Mteja", "Hakuna; fuata mpango"], answer: 0, why: "AI inajua tu data iliyonayo, kwa hiyo watu ndio wanaoshughulikia mambo ya kipekee kama barabara zilizofungwa." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kutengeneza jedwali la kuagiza tena bidhaa",
          minutes: 6,
          goal: "Tengeneza spreadsheet inayoonyesha wakati wa kuagiza tena kila bidhaa.",
          text: [
            "Kiwango cha kuagiza tena (reorder point) ni kiasi cha bidhaa kinachokuambia uagize zaidi kabla hazijaisha. Fomula rahisi ni: matumizi ya kila siku mara muda wa kusubiri (siku za kupata mzigo), jumlisha akiba ya tahadhari (ziada kwa mambo usiyoyatarajia).",
            "Mfano: benki ya chakula inatumia makopo 20 ya maharagwe kwa siku, mzigo unachukua siku 5 kufika, na inaweka 40 za ziada. Kiwango cha kuagiza tena = 20 x 5 + 40 = 140. Bidhaa zikishuka hadi 140, agiza zaidi.",
            "Msaidizi wa AI anaweza kukusaidia kupanga safu na fomula ya spreadsheet. Kila mara jaribu fomula kwenye mstari mmoja kwa mkono ili uhakikishe ni sahihi."
          ],
          steps: ["Fungua Google Sheet au Excel tupu.", "Tengeneza safu: Bidhaa, Zilizopo, Matumizi ya siku, Muda wa kusubiri (siku), Akiba ya tahadhari, Kiwango cha kuagiza tena, Agiza sasa?", "Muulize msaidizi wa AI fomula ya Kiwango cha kuagiza tena na ya safu ya \"Agiza sasa?\" yenye ndiyo/hapana.", "Ongeza bidhaa tano zenye namba za kubuni.", "Kagua mstari mmoja kwa mkono kwa kikokotoo."],
          words: [["Kiwango cha kuagiza tena (reorder point)", "kiasi cha bidhaa kinachokuambia uagize zaidi."], ["Muda wa kusubiri (lead time)", "siku ngapi zinachukua kwa oda kufika."], ["Akiba ya tahadhari (safety stock)", "bidhaa za ziada zinazowekwa kwa mambo usiyoyatarajia."], ["Fomula", "hesabu ambayo spreadsheet inakufanyia."]],
          slides: [
            { title: "Kiwango cha kuagiza tena", bullets: ["Matumizi ya siku x muda wa kusubiri + akiba ya tahadhari", "Bidhaa zikifika kiwango hicho, agiza zaidi"] },
            { title: "Mfano: maharagwe ya benki ya chakula", bullets: ["20 kwa siku x siku 5 + 40 za ziada = 140", "Makopo yakifika 140, weka oda"] },
            { title: "Litengeneze kwa msaada wa AI", bullets: ["Muulize AI fomula za safu", "Ongeza bidhaa tano", "Kagua mstari mmoja kwa mkono"] }
          ],
          tryIt: "Tengeneza jedwali la kuagiza tena lenye bidhaa tano. Muulize msaidizi wa AI fomula, kisha kagua mstari mmoja kwa kikokotoo na urekebishe chochote kisicho sahihi.",
          youCanNow: "kutengeneza spreadsheet inayoonyesha wakati kila bidhaa inahitaji kuagizwa tena.",
          quickCheck: [
            { objective: "O3", q: "Akiba ya tahadhari (safety stock) ni nini?", options: ["Bidhaa zilizovunjika", "Bidhaa zinazouzwa kwa punguzo", "Bidhaa zilizofungiwa kwenye kasha", "Bidhaa za ziada zinazowekwa kwa mambo usiyoyatarajia"], answer: 3, why: "Akiba ya tahadhari inafidia mambo usiyoyatarajia kama mzigo uliochelewa au mahitaji ya ziada." },
            { objective: "O3", q: "Matumizi ya siku 5, muda wa kusubiri siku 6, akiba ya tahadhari 10. Kiwango cha kuagiza tena ni kipi?", options: ["21", "40", "60", "11"], answer: 1, why: "Matumizi ya siku mara muda wa kusubiri (5 x 6 = 30) jumlisha akiba ya tahadhari (10) ni 40." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kutoka usafirishaji wa kijeshi hadi mnyororo wa ugavi wa kiraia",
        questions: [
          { objective: "O1", q: "Msafara wa kijeshi (convoy) unakaribiana zaidi na neno gani la kiraia?", options: ["Mishahara", "Masoko", "Usafiri au usafirishaji wa mizigo", "Rasilimali watu"], answer: 2, why: "Kusafirisha bidhaa kwa gari ni usafiri au usafirishaji wa mizigo (freight)." },
          { objective: "O1", q: "Last-mile delivery ni nini?", options: ["Safari ya mwisho hadi kwa mteja", "Maili ya kwanza ya safari", "Mashindano ya kukimbia", "Kiwanda"], answer: 0, why: "Ni sehemu ya mwisho ya safari hadi kwa mtu anayetumia bidhaa." },
          { objective: "O2", q: "Kwa nini mpango wa njia wa AI unaweza kuwa si sahihi?", options: ["Malori hayaharibiki kamwe", "AI iko sahihi kila wakati", "Ramani hazibadiliki kamwe", "AI inajua tu data inayopewa"], answer: 3, why: "Data isiyokamilika au ya zamani inaleta mipango isiyo sahihi." },
          { objective: "O3", q: "Matumizi ya siku 10, muda wa kusubiri siku 4, akiba ya tahadhari 20. Kiwango cha kuagiza tena ni kipi?", options: ["14", "34", "40", "60"], answer: 3, why: "10 x 4 + 20 = 60." },
          { objective: "O3", q: "Baada ya AI kukuandikia fomula ya spreadsheet, unapaswa:", options: ["Usiiangalie kamwe", "Kukagua mstari mmoja kwa mkono", "Kufuta jedwali", "Kulishiriki bila kukagua"], answer: 1, why: "Kukagua kwa mkono kunathibitisha kwamba fomula ni sahihi." }
        ]
      }
    },
    {
      name: "Sura 2: Kupanga na kuwasilisha uendeshaji",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuandaa ratiba ya usambazaji kwa AI",
          minutes: 5,
          goal: "Tumia msaidizi wa AI kuandaa ratiba ya usambazaji ya wiki moja na uikague dhidi ya mipaka halisi.",
          text: [
            "Ratiba ya usambazaji inasema nani anaenda wapi, lini, akiwa na nini. AI inaweza kuandaa moja haraka ukiipa ukweli: vituo, saa za kufungua, idadi ya magari na madereva, saa za kazi za madereva, na kila kituo kinahitaji nini.",
            "Kisha unaikagua kama mpango wa msafara. Je, muda wa safari unawezekana kwenye ramani halisi? Je, madereva wanapata mapumziko? Je, kuna kituo kinachopelekewa mzigo wakati kimefungwa?",
            "Tumia data ya kubuni au data salama ya biashara tu. Usibandike majina ya wateja, anwani za nyumbani wala chochote ambacho mwajiri wako hajakiruhusu kwa zana za AI."
          ],
          steps: ["Orodhesha vituo, saa, magari, madereva na kila kituo kinahitaji nini.", "Uliza msaidizi wa AI: \"Tengeneza ratiba ya usambazaji ya wiki moja kama jedwali kwa mipaka hii.\"", "Kagua muda wa safari kwenye app ya ramani.", "Kagua mapumziko, saa za kufungua na nafasi katika magari.", "Rekebisha ratiba na uihifadhi karibu na jedwali lako la bidhaa."],
          words: [["Ratiba ya usambazaji", "mpango wa nani anapeleka nini, wapi na lini."], ["Kizuizi (constraint)", "mpaka ambao mpango lazima uufuate, kama saa za kufungua au saa za kazi za madereva."]],
          slides: [
            { title: "Ipe AI ukweli", bullets: ["Vituo na saa za kufungua", "Magari na madereva", "Kila kituo kinahitaji nini"] },
            { title: "Ikague kama mpango wa msafara", bullets: ["Muda halisi wa safari kwenye ramani", "Mapumziko ya madereva", "Hakuna mzigo kwa vituo vilivyofungwa"] },
            { title: "Linda data", bullets: ["Data ya kubuni au iliyoruhusiwa tu", "Hakuna majina ya wateja wala anwani za nyumbani"] }
          ],
          tryIt: "Kwa benki ya chakula ya kubuni yenye vituo vitatu vya kugawa chakula na gari dogo moja (van), muulize msaidizi wa AI ratiba ya usambazaji ya wiki moja kama jedwali. Iikague kwenye app ya ramani na urekebishe tatizo moja unalolipata.",
          youCanNow: "kuandaa ratiba ya usambazaji kwa AI na kuikagua dhidi ya mipaka ya maisha halisi.",
          quickCheck: [
            { objective: "O4", q: "Kizuizi (constraint) katika ratiba ya usambazaji ni nini?", options: ["Mpaka ambao mpango lazima uufuate, kama saa za kufungua", "Bonasi kwa madereva", "Kituo cha ziada", "Aina ya lori"], answer: 0, why: "Vizuizi ni mipaka kama saa, magari na madereva ambayo ratiba lazima iiheshimu." },
            { objective: "O4", q: "Ratiba ya AI inasema safari ya maili 40 inachukua dakika 15. Unafanya nini?", options: ["Uiamini", "Kuondoa kituo", "Kukagua muda kwenye app ya ramani na kurekebisha ratiba", "Kumwambia dereva aendeshe kwa kasi zaidi"], answer: 2, why: "Unakagua muda wa safari wa AI kwenye app ya ramani na kurekebisha chochote kisichowezekana." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kugundua matatizo katika data ya uendeshaji",
          minutes: 5,
          goal: "Tumia AI kufupisha jedwali dogo la data na uthibitishe wewe mwenyewe inachokipata.",
          text: [
            "Timu za uendeshaji zinaangalia data kila siku: mizigo iliyochelewa, bidhaa zinazopungua, bidhaa zilizoharibika. AI inaweza kufupisha jedwali na kuonyesha mifumo inayojirudia, kama \"Mizigo ya Jumanne ndiyo inachelewa mara nyingi zaidi.\"",
            "Chukulia matokeo ya AI kama taarifa za kiintelijensia (intel): zina manufaa, lakini thibitisha kabla ya kuchukua hatua. Panga au chuja spreadsheet wewe mwenyewe uone kama mfumo huo ni wa kweli.",
            "Ukipata tatizo la kweli, andika unachofikiri ndicho chanzo, suluhisho, na jinsi utakavyojua kwamba suluhisho limefanya kazi."
          ],
          steps: ["Tengeneza jedwali dogo: tarehe, kituo, kwa wakati (ndiyo/hapana), sababu kama limechelewa.", "Uliza msaidizi wa AI: \"Unaona mifumo gani inayojirudia katika jedwali hili?\"", "Panga au chuja jedwali wewe mwenyewe ili kuthibitisha.", "Andika: tatizo, chanzo kinachowezekana, suluhisho, jinsi utakavyolipima."],
          words: [["Mfumo unaojirudia (pattern)", "kitu kinachotokea tena na tena katika data."], ["Kichujio (filter)", "zana ya spreadsheet inayoonyesha mistari unayoichagua tu."]],
          slides: [
            { title: "AI inaweza kufupisha data", bullets: ["Mizigo iliyochelewa, bidhaa chache, uharibifu", "Inaonyesha mifumo inayojirudia"] },
            { title: "Ichukulie kama intel", bullets: ["Ina manufaa, lakini thibitisha kabla ya kuchukua hatua", "Panga au chuja jedwali wewe mwenyewe"] },
            { title: "Andika suluhisho", bullets: ["Tatizo na chanzo kinachowezekana", "Suluhisho", "Jinsi utakavyolipima"] }
          ],
          tryIt: "Tengeneza jedwali la usambazaji la mistari 10 lenye baadhi ya mizigo iliyochelewa. Muulize msaidizi wa AI mifumo inayojirudia, kisha chuja jedwali wewe mwenyewe kuthibitisha mmoja, na uandike suluhisho.",
          youCanNow: "kutumia AI kupata mfumo unaojirudia katika data ya uendeshaji na kuuthibitisha kabla ya kuchukua hatua.",
          quickCheck: [
            { objective: "O5", q: "Kichujio cha spreadsheet kinafanya nini?", options: ["Kinafuta mistari milele", "Kinaonyesha mistari unayoichagua tu", "Kinafanya namba ziwe kubwa zaidi", "Kinatuma jedwali kwa barua pepe"], answer: 1, why: "Kichujio kinaficha mistari usiyoihitaji ili ukague mfumo wewe mwenyewe." },
            { objective: "O5", q: "AI inasema mizigo mingi iliyochelewa inatoka kwa dereva mmoja. Unafanya nini?", options: ["Kumwambia dereva mara moja", "Kupuuza", "Kufuta mistari ya dereva huyo", "Kuchuja data wewe mwenyewe kuthibitisha kabla ya kuchukua hatua"], answer: 3, why: "Chukulia matokeo ya AI kama intel: yana manufaa, lakini thibitisha kabla ya kuchukua hatua." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kuwasilisha mpango na kutafuta kazi",
          minutes: 5,
          goal: "Wasilisha mpango wa uendeshaji kwa maneno ya kiraia na uuunganishe na hatua yako inayofuata ya kazi.",
          text: [
            "Mameneja wa kiraia wanapenda muhtasari mfupi (brief), kama makamanda: hali ilivyo, mpango, hatari na mipango mbadala, na unachohitaji kutoka kwao. Tumia maneno ya kiraia: \"inventory\", \"ratiba ya usambazaji\", \"kiwango cha kufika kwa wakati\".",
            "Geuza huduma yako jeshini kuwa mistari ya CV yenye namba, kwa mfano: \"Nilisimamia bidhaa 1,200 zenye thamani ya $2 milioni bila hasara yoyote katika ukaguzi.\" Tumia namba unazoweza kuzithibitisha tu.",
            "Kwa msaada wa kazi, Veterans' Employment and Training Service (VETS) ya Wizara ya Kazi ya Marekani inaendesha Transition Assistance Program (TAP) na inaonyesha nafasi za uanagenzi (apprenticeship). Kama una GI Bill, faida ya VA ya mafunzo kazini na uanagenzi inaweza kulipa kiasi cha kila mwezi wakati unafunzwa na mwajiri aliyeidhinishwa. Kagua kurasa rasmi kujua nani anastahili."
          ],
          steps: ["Andika muhtasari: hali, mpango, hatari, mipango mbadala, unachohitaji.", "Tumia maneno ya kiraia kote.", "Andika mistari miwili ya CV yenye namba halisi.", "Kagua dol.gov/agencies/vets na ukurasa wa va.gov wa mafunzo kazini kwa hatua zinazofuata."],
          words: [["Muhtasari (brief)", "maelezo mafupi ya mdomo au ya maandishi ya mpango kwa mtu anayefanya uamuzi."], ["Kiwango cha kufika kwa wakati (on-time rate)", "sehemu ya mizigo inayofika wakati ulioahidiwa."]],
          slides: [
            { title: "Wasilisha kama ulivyofanya jeshini", bullets: ["Hali, mpango, hatari, mipango mbadala", "Unachohitaji kutoka kwao", "Kwa maneno ya kiraia"] },
            { title: "Mistari ya CV yenye namba", bullets: ["\"Nilisimamia bidhaa 1,200 za thamani ya $2M, bila hasara\"", "Namba unazoweza kuzithibitisha tu"] },
            { title: "Msaada rasmi", bullets: ["DOL VETS: TAP na uanagenzi", "VA mafunzo kazini (GI Bill)", "Kagua nani anastahili kwenye kurasa rasmi"] }
          ],
          sources: [
            { name: "Wizara ya Kazi ya Marekani, Veterans' Employment and Training Service", url: "https://www.dol.gov/agencies/vets" },
            { name: "VA: Mafunzo kazini na uanagenzi (On-the-job training and apprenticeships)", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/on-the-job-training-apprenticeships/" }
          ],
          tryIt: "Kazi ya mwisho: weka jedwali lako la kuagiza tena, ratiba ya usambazaji uliyoikagua, hatari tatu pamoja na mipango mbadala, na mistari miwili ya CV katika muhtasari wa uendeshaji wa ukurasa mmoja.",
          youCanNow: "kupanga bidhaa na usambazaji kwa msaada wa AI, kukagua mpango wewe mwenyewe, na kuuwasilisha kwa maneno ya kiraia.",
          quickCheck: [
            { objective: "O6", q: "Muhtasari mzuri wa uendeshaji una nini?", options: ["Habari njema tu", "Hadithi ndefu ya kazi yako", "Hali, mpango, hatari na mipango mbadala", "Kila mstari wa spreadsheet yako"], answer: 2, why: "Muhtasari unatoa hali, mpango na hatari pamoja na mipango mbadala, kwa ufupi na uwazi." },
            { objective: "O6", q: "Mstari upi wa CV unaeleza vizuri zaidi kazi ya usafirishaji jeshini kwa mwajiri wa kiraia?", options: ["\"Nilisimamia bidhaa 800 zenye thamani ya $1M bila hasara katika ukaguzi.\"", "\"Nilikuwa S4 shop NCOIC.\"", "\"Nilifanya supply.\"", "\"Nilishughulikia CL IX.\""], answer: 0, why: "Unatumia maneno ya kiraia, ukubwa wa kazi na matokeo." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kupanga na kuwasilisha uendeshaji",
        questions: [
          { objective: "O4", q: "Unapaswa kuipa AI nini ili iandae ratiba ya usambazaji?", options: ["Taarifa za kuingia benki yako", "Neno \"ratiba\" tu", "Anwani za nyumbani za wateja", "Vituo, saa, magari, madereva na mahitaji"], answer: 3, why: "Mipaka halisi inaiwezesha AI kuandaa mpango unaotumika." },
          { objective: "O4", q: "Ratiba ya AI inapeleka van kwenye kituo wakati kimefungwa. Unapaswa:", options: ["Kurekebisha ratiba", "Kuiacha hivyo hivyo", "Kumfukuza dereva kazi", "Kufunga biashara"], answer: 0, why: "Kukagua dhidi ya mipaka ni kazi yako." },
          { objective: "O5", q: "AI inasema Jumanne ndiyo inachelewa mara nyingi zaidi. Nini kinafuata?", options: ["Kupuuza", "Kufuta Jumanne", "Kuchuja data wewe mwenyewe kuthibitisha", "Kuiweka mtandaoni"], answer: 2, why: "Thibitisha kabla ya kuchukua hatua, kama kukagua intel." },
          { objective: "O6", q: "Muhtasari mzuri wa uendeshaji una:", options: ["Hakuna mpango", "Utani tu", "Misimbo ya kijeshi tu", "Hali, mpango, hatari na mipango mbadala"], answer: 3, why: "Hivyo ndivyo wanavyohitaji wanaofanya maamuzi." },
          { objective: "O6", q: "Faida ipi ya VA inaweza kulipa kiasi cha kila mwezi wakati unafunzwa na mwajiri aliyeidhinishwa?", options: ["Bima ya maisha", "Mkopo wa nyumba", "Mafunzo kazini na uanagenzi", "Faida ya mazishi"], answer: 2, why: "va.gov inaeleza malipo ya kila mwezi wakati wa mafunzo kazini (OJT) au uanagenzi ulioidhinishwa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI kwa Usafirishaji na Uendeshaji",
    questions: [
      { objective: "O1", q: "Mnyororo wa ugavi ni:", options: ["Mnyororo kwenye lori", "Kila hatua kutoka kutengeneza bidhaa hadi kwa mtu anayeitumia", "Aina ya mkataba", "Mlango wa ghala"], answer: 1, why: "Unahusu njia yote hadi kwa mtumiaji." },
      { objective: "O1", q: "Motor pool ya kijeshi inakaribiana zaidi na:", options: ["Matengenezo ya magari ya kampuni (fleet maintenance)", "Uhasibu", "Masoko", "Sheria"], answer: 0, why: "Zote mbili zinatunza magari." },
      { objective: "O1", q: "3PL ni nini?", options: ["Cheo cha kijeshi", "Aina ya lori", "Kampuni inayokodiwa kuhifadhi na kusafirisha bidhaa za biashara nyingine", "Spreadsheet"], answer: 2, why: "Kampuni za third-party logistics zinashughulikia uhifadhi na usafirishaji." },
      { objective: "O1", q: "Tovuti ipi ya bure inalinganisha kazi za kijeshi na kazi za kiraia?", options: ["My Next Move for Veterans", "App ya muziki", "Tovuti ya manunuzi", "Mchezo"], answer: 0, why: "mynextmove.org/vets inaendeshwa kwa ajili ya Wizara ya Kazi ya Marekani." },
      { objective: "O2", q: "Kutabiri mahitaji kunamaanisha:", options: ["Kuajiri madereva", "Kusambaza haraka zaidi", "Kupaka malori rangi", "Makisio ya makini ya kiasi kitakachohitajika"], answer: 3, why: "Utabiri unakadiria mahitaji ya baadaye." },
      { objective: "O2", q: "Kipanga njia cha AI kinaweza kukosa nini?", options: ["Idadi ya vituo uliyokipa", "Barabara iliyofungwa asubuhi hii", "Ramani", "Neno \"njia\""], answer: 1, why: "Matukio mapya huenda yasiwe kwenye data yake." },
      { objective: "O2", q: "Nani anashughulikia mambo ya kipekee kama lori lililochelewa?", options: ["Hakuna", "Watu", "AI peke yake", "Mteja"], answer: 1, why: "Uamuzi wa binadamu unashughulikia mambo ya kipekee." },
      { objective: "O3", q: "Muda wa kusubiri (lead time) ni:", options: ["Saa ambazo duka liko wazi", "Muda dereva anaongoza msafara", "Wakati wa chakula cha mchana", "Siku zinazochukua kwa oda kufika"], answer: 3, why: "Muda wa kusubiri ni muda wa kungoja mzigo." },
      { objective: "O3", q: "Akiba ya tahadhari ni:", options: ["Bidhaa za ziada zinazowekwa kwa mambo usiyoyatarajia", "Bidhaa zilizofungiwa", "Bidhaa zilizoharibika", "Bidhaa zilizouzwa leo"], answer: 0, why: "Inafidia mahitaji au ucheleweshaji usiotarajiwa." },
      { objective: "O3", q: "Matumizi ya siku 20, muda wa kusubiri 5, akiba ya tahadhari 40. Kiwango cha kuagiza tena?", options: ["25", "65", "100", "140"], answer: 3, why: "20 x 5 + 40 = 140." },
      { objective: "O3", q: "Unajuaje kwamba fomula iliyoandikwa na AI ni sahihi?", options: ["Kuifuta", "Kuiamini", "Kuuliza AI nyingine tu", "Kukagua mstari mmoja kwa mkono"], answer: 3, why: "Kukagua kwa mkono kunathibitisha hesabu." },
      { objective: "O4", q: "Kizuizi katika ratiba ni:", options: ["Mzigo", "Aina ya lori", "Mpaka ambao mpango lazima uufuate", "Mteja"], answer: 2, why: "Saa za kufungua na saa za kazi za madereva ni vizuizi." },
      { objective: "O4", q: "Unakaguaje muda wa safari wa AI?", options: ["Kukisia", "Kulinganisha na app ya ramani", "Kumwambia dereva afanye haraka", "Kuupuuza"], answer: 1, why: "App ya ramani inatoa muda unaowezekana." },
      { objective: "O4", q: "Kipi HAKIPASWI kuwekwa katika zana ya AI ya umma?", options: ["Majina ya wateja na anwani za nyumbani", "Vituo vya kubuni", "Saa za kufungua za duka la kubuni", "Idadi ya van"], answer: 0, why: "Taarifa za wateja ni za siri." },
      { objective: "O5", q: "Matokeo ya AI katika data yanapaswa kuchukuliwa kama:", options: ["Utani", "Amri unazopaswa kufuata", "Intel: yana manufaa lakini thibitisha kabla ya kuchukua hatua", "Ukweli wa mwisho"], answer: 2, why: "Kuthibitisha kunazuia kuchukua hatua kwa kosa." },
      { objective: "O5", q: "Kichujio cha spreadsheet kinakuwezesha:", options: ["Kuonyesha mistari unayoichagua tu", "Kufuta jedwali", "Kuchapisha haraka", "Kubadilisha herufi"], answer: 0, why: "Vichujio vinakusaidia kukagua mifumo inayojirudia." },
      { objective: "O5", q: "Baada ya kupata tatizo la kweli, andika:", options: ["Nywila mpya", "Nani wa kulaumiwa tu", "Hakuna kitu", "Chanzo, suluhisho, na jinsi utakavyolipima"], answer: 3, why: "Suluhisho linalopimwa linathibitisha kwamba limefanya kazi." },
      { objective: "O5", q: "Kiwango cha kufika kwa wakati (on-time rate) kinamaanisha:", options: ["Kasi ya dereva", "Sehemu ya mizigo inayofika wakati ulioahidiwa", "Gharama ya mafuta", "Idadi ya malori"], answer: 1, why: "Kinapima ahadi zilizotimizwa." },
      { objective: "O6", q: "Mstari upi wa CV una nguvu zaidi?", options: ["\"Nilifanya mambo ya supply.\"", "\"Nilisimamia bidhaa 1,200 zenye thamani ya $2M bila hasara katika ukaguzi.\"", "\"Nilifanya kazi kwa bidii.\"", "\"Jeshi.\""], answer: 1, why: "Namba na matokeo vinaonyesha mchango wako." },
      { objective: "O6", q: "Idara ya DOL inayoendesha programu za ajira za wanajeshi wastaafu, pamoja na TAP, ni:", options: ["EPA", "IRS", "FAA", "VETS"], answer: 3, why: "Veterans' Employment and Training Service inaendesha TAP kwa niaba ya DOL." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 1, 5, 9, 10, 12, 14, 16, 18] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Jedwali la kuagiza tena", objective: "O3", notYet: "Bidhaa chini ya tano, au viwango vya kuagiza tena si sahihi.", meets: "Bidhaa tano zenye viwango sahihi vya kuagiza tena, na mstari mmoja umekaguliwa kwa mkono.", exceeds: "Jedwali linaonyesha bidhaa zilizofika au kushuka chini ya kiwango cha kuagiza tena." },
      { name: "Ratiba ya usambazaji iliyokaguliwa", objective: "O4", notYet: "Ratiba ya AI ilitumika bila kukaguliwa, au inavunja mpaka fulani.", meets: "Ratiba ya wiki moja inayoheshimu saa za vituo, magari na madereva, na muda wa safari umekaguliwa kwenye app ya ramani.", exceeds: "Mwanafunzi anataja tatizo alilolipata na jinsi alivyolirekebisha." },
      { name: "Hatari na mipango mbadala", objective: "O6", notYet: "Hatari chini ya tatu, au hatari zisizo na mpango mbadala.", meets: "Hatari tatu, kila moja na mpango mbadala.", exceeds: "Kila mpango mbadala unasema nani anachukua hatua na lini." },
      { name: "Mistari ya CV ya kiraia", objective: "O1", notYet: "Mistari inatumia maneno ya kijeshi au haina matokeo.", meets: "Mistari miwili kwa maneno ya kiraia ya usafirishaji, yenye ukubwa wa kazi au matokeo.", exceeds: "Mistari inalingana na cheo cha kazi ya kiraia kutoka My Next Move for Veterans." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaoomba kazi ya kiraia ya usafirishaji, ghala au usafiri ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi wanaopata kazi ya usafirishaji, uanagenzi au nafasi ya mafunzo kazini ndani ya siku 90",
      "Benki za chakula au biashara ndogo washirika zinazotumia jedwali la kuagiza tena au ratiba ya mwanafunzi"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta yenye intaneti",
      "Spreadsheet ya bure: Google Sheets au Microsoft Excel mtandaoni",
      "Msaidizi wa AI wa bure: ChatGPT, Microsoft Copilot au Google Gemini, na app ya ramani",
      "Kikokotoo",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Mpe kila mwanafunzi benki ya chakula au duka la vipuri lile lile la kubuni ili walinganishe majedwali na ratiba zao.",
      "Pitia hesabu moja ya kiwango cha kuagiza tena ubaoni kabla wanafunzi hawajatengeneza majedwali yao.",
      "Tumia vituo na data ya kubuni tu; usiweke kamwe majina halisi ya wateja wala anwani za nyumbani katika AI ya umma.",
      "Waambie wanafunzi wawasilishe mpango wao kwa sauti ndani ya dakika mbili, kama wangemweleza meneja wa kiraia.",
      "Pima muhtasari wa uendeshaji kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
