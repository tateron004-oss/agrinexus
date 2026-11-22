"use strict";

// Koach Learn course (Swahili translation of africa-life/afr-selling-online.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const WA_BUSINESS = { name: "WhatsApp Business: app ya WhatsApp Business (wasifu wa biashara, kuonyesha bidhaa na bei, ujumbe wa kukaribisha na wa kutokuwepo)", url: "https://whatsappbusiness.com/products/business-app/" };
const NDPC = { name: "Tume ya Ulinzi wa Data ya Nigeria (NDPC): Sheria ya Ulinzi wa Data ya Nigeria 2023", url: "https://ndpc.gov.ng/" };
const ODPC = { name: "Ofisi ya Kamishna wa Ulinzi wa Data, Kenya (ODPC; Sheria ya Ulinzi wa Data, 2019)", url: "https://www.odpc.go.ke/" };
const CBK_FRAUD = { name: "Benki Kuu ya Kenya (Central Bank of Kenya): usalama dhidi ya ulaghai", url: "https://www.centralbank.go.ke/fraud-safety/" };
const CBN_CP = { name: "Benki Kuu ya Nigeria (Central Bank of Nigeria): ulinzi wa watumiaji", url: "https://www.cbn.gov.ng/Documents/ConsumerProtection.html" };

module.exports = {
  id: "afr-selling-online-sw",
  lang: "sw",
  translationOf: "afr-selling-online",
  category: "Africa: Life and Work",
  name: "Kuuza Mtandaoni Afrika (WhatsApp Business, Masoko ya Mtandaoni na Mitandao ya Kijamii)",
  skills: "Kuchagua mahali pa kuuza mtandaoni, Kuweka WhatsApp Business, Kupiga picha za bidhaa na kuandika matangazo, Kujibu wateja na kukamilisha mauzo, Kukagua malipo na kuepuka arifa bandia, Kupeleka bidhaa na kudumisha imani ya wateja",
  outcome: "kupokea oda za bidhaa zako kwa simu: kuweka wasifu wa WhatsApp Business na orodha ya bidhaa, kuandika matangazo yanayouza, kujibu wateja na kuthibitisha oda, kukagua kwamba pesa zimefika kweli kabla ya kutuma bidhaa, na kupeleka bidhaa kwa njia inayowarudisha wateja.",
  about: [
    "Wateja wengi sasa wanawapata wauzaji kwenye WhatsApp, Facebook, Instagram, TikTok na masoko ya mtandaoni kama Jumia na Jiji. Kozi hii ni ya wafanyabiashara, mafundi, wapishi wa nyumbani, washonaji, wakulima na wenye maduka madogo nchini Kenya, Nigeria, Ghana, Senegal, Côte d'Ivoire, Morocco na kote Afrika wanaotaka kuuza nje ya mtaa wao.",
    "Utachagua mahali pa kuuza, utaweka wasifu wa WhatsApp Business na orodha ya bidhaa, utapiga picha nzuri kwa simu ya kawaida, utaandika matangazo yenye bei iliyo wazi, utajibu wateja haraka, utathibitisha oda kwa maandishi, utakagua malipo kwenye app yako mwenyewe ya pesa kwa simu au ya benki, na utapanga usafirishaji na urudishaji wa bidhaa.",
    "Kila somo linachukua kama dakika tano na linaisha na kazi ya \"Jaribu sasa\" kwa biashara yako mwenyewe. Linafanya kazi kwenye simu ya kawaida ya Android na linatumia data kidogo. Bei na kiasi cha pesa katika kozi hii ni mifano tu, si bei au ada halisi."
  ],
  finalTask: "Andaa mpango wa ukurasa mmoja wa duka lako la mtandaoni: utauza wapi na kwa nini, maandishi ya wasifu wako wa WhatsApp Business, matangazo matatu ya bidhaa (maelezo ya picha, jina, bei kwa sarafu yako, maelezo na usafirishaji), ujumbe uliohifadhiwa wa kuthibitisha oda, kanuni yako ya kukagua malipo, na sera yako ya usafirishaji na urudishaji.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wafanyabiashara, wauzaji wa sokoni, mafundi, wapishi wa nyumbani, washonaji, wasusi, wakulima na wenye maduka madogo katika miji na vijiji kote Afrika (Kenya, Nigeria, Ghana, Afrika Magharibi na ya Kati inayozungumza Kifaransa, Afrika Kaskazini). Wengi ni wanawake na vijana; wengi tayari wanazungumza na wateja kwenye WhatsApp.",
    startingPoint: "Wanaweza kutumia WhatsApp kuzungumza na kutuma picha, na wanaweza kupokea pesa kwa simu. Wachache wana wasifu wa biashara, orodha ya bidhaa, bei zilizo wazi mtandaoni, uthibitisho wa oda kwa maandishi au kanuni ya kukagua malipo. Baadhi wamewahi kudanganywa na ujumbe bandia wa malipo.",
    gap: "Wateja wanatafuta na kuagiza kwa simu zao, lakini wauzaji wengi wadogo wanapoteza mauzo kwa sababu ya kujibu polepole, bei zisizo wazi na picha mbaya, na wanapoteza pesa na bidhaa kwa arifa bandia za malipo. Wanafunzi wanahitaji njia rahisi na salama ya kuonyesha bidhaa, kupokea oda, kukagua malipo na kupeleka bidhaa, ili kuuza mtandaoni kuongeze mapato badala ya hatari.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; wanafunzi wengi wanatumia Kiingereza kama lugha ya pili (kozi pia inapatikana kwa Kifaransa na Kiarabu)",
      "Vifaa: simu ya kawaida ya Android, mara nyingi inayotumiwa na watu kadhaa; data ni ghali, kwa hiyo picha na video ni ndogo",
      "Pesa: bajeti ndogo au hakuna kabisa ya matangazo ya kulipia; zana za bure kwanza",
      "Kanuni na ada: vipengele vya apps, kamisheni za masoko ya mtandaoni na kanuni za ulinzi wa data zinabadilika kwa kila nchi; wanafunzi wanakagua app, ukurasa wa wauzaji wa soko hilo au mdhibiti wa kitaifa",
      "Usalama: hatari kubwa ya ulaghai; usitoe kamwe PIN, nywila au msimbo wa mara moja"
    ],
    prerequisites: "Uwezo wa kutuma ujumbe na picha kwenye WhatsApp. Inasaidia: kozi \"Kutumia Pesa kwa Simu kwa Usalama\" katika kundi hili."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa bidhaa zako, wateja wako na njia mbili au tatu za mtandaoni", action: "kuchagua mahali pa kuuza mtandaoni na kuandika sababu", standard: "ukitaja gharama, juhudi na wanaonunua huko kwa kila njia" },
    { id: "O2", condition: "Ukitumia simu yenye app ya WhatsApp Business", action: "kuweka wasifu wa biashara na orodha ya bidhaa zenye bei", standard: "ukiwa na jina, maelezo mafupi, saa za kazi, eneo unalohudumia na angalau bidhaa tatu" },
    { id: "O3", condition: "Ukipewa moja ya bidhaa zako", action: "kupiga picha iliyo wazi na kuandika tangazo lenye jina, bei, maelezo na usafirishaji", standard: "ili mteja aweze kuagiza bila kuuliza swali la msingi" },
    { id: "O4", condition: "Mteja anapotuma swali au oda", action: "kujibu kwa adabu na kuthibitisha oda kwa maandishi", standard: "ndani ya saa zako za kazi, ukitaja bidhaa, idadi, bei, usafirishaji na malipo katika ujumbe mmoja" },
    { id: "O5", condition: "Kabla ya kutuma bidhaa zilizolipwa kwa pesa kwa simu au uhamisho wa benki", action: "kukagua kwenye app yako mwenyewe au ujumbe rasmi wa mtoa huduma kwamba pesa zimefika", standard: "bila kuamini kamwe picha ya skrini, ujumbe uliotumwa tena au mpigaji simu, na bila kutoa PIN kamwe" },
    { id: "O6", condition: "Unapopeleka oda", action: "kuandika na kufuata sera ya usafirishaji na urudishaji inayolinda imani na data ya wateja", standard: "ukitaja maeneo ya usafirishaji, gharama, muda na urudishaji, na ukiweka namba za wateja siri" }
  ],
  chapters: [
    {
      name: "Sura 1: Kufungua duka lako mtandaoni",
      lessons: [
        {
          title: "Kuchagua mahali pa kuuza mtandaoni",
          objectives: ["O1"],
          minutes: 5,
          goal: "Chagua mahali pamoja au mawili pa kuuza mtandaoni panapofaa bidhaa na wateja wako.",
          text: [
            "Huhitaji kuwa kila mahali. Chagua mahali wateja wako walipo tayari, na mahali unapoweza kujibu ujumbe kwa wakati. Kuuza mtandaoni ni kama kufungua meza ya pili sokoni: inafanya kazi tu ikiwa kuna mtu wa kuhudumia.",
            "Apps za kuzungumza kama WhatsApp zinafaa kwa wateja wa kawaida na majirani. Mitandao ya kijamii kama Facebook, Instagram na TikTok inasaidia watu wapya kukugundua kupitia picha na video fupi. Masoko ya mtandaoni kama Jumia, Jiji, Kilimall na Konga tayari yana wanunuzi wengi wanaotafuta, lakini yana kanuni, na baadhi huchukua kamisheni (sehemu ya kila mauzo) au hutoza pesa kwa matangazo ya kulipia.",
            "Kwa kila njia, andika mambo matatu: nani hununua huko, inagharimu nini (data, kamisheni, matangazo, usafirishaji) na inachukua muda gani kila siku. Mfano: Ama wa Kumasi anauza shanga. Anatumia WhatsApp kwa wateja wake wa kawaida na anaongeza Instagram kuwafikia wanunuzi wapya wa Accra. Fundi viatu wa Dakar anaweza kuanza na WhatsApp na Facebook, kisha kuongeza soko la mtandaoni baadaye.",
            "Kabla ya kujiunga na soko la mtandaoni, soma ukurasa wake wa wauzaji: linatoza nini, linakulipaje, lini, na nini kinatokea bidhaa zikirudishwa. Mambo haya yanabadilika, kwa hiyo kagua kwenye tovuti ya soko lenyewe, si kwenye ujumbe uliotumwa tena."
          ],
          steps: ["Orodhesha mahali wateja wako tayari wanazungumza, wanaangalia na wananunua.", "Kwa kila njia, andika nani hununua huko, gharama na muda unaochukua.", "Chagua njia moja kuu na, zaidi sana, njia moja zaidi.", "Kwa soko la mtandaoni, soma ukurasa wake wa wauzaji kuhusu ada, malipo na urudishaji."],
          words: [["Njia (channel)", "mahali unapouza au kuzungumza na wateja, kama WhatsApp, Facebook au soko la mtandaoni."], ["Soko la mtandaoni (marketplace)", "tovuti au app ambapo wauzaji wengi huweka bidhaa na wanunuzi hutafuta, kama Jumia au Jiji."], ["Kamisheni", "sehemu ya kila mauzo ambayo soko la mtandaoni huchukua kama ada yake."]],
          slides: [
            { title: "Uza mahali wateja wako walipo", bullets: ["Mahali tu unapoweza kujibu ujumbe", "Mtandaoni ni meza ya pili sokoni: lazima mtu ahudumie"] },
            { title: "Aina tatu za njia", bullets: ["Apps za kuzungumza: WhatsApp kwa wateja wa kawaida", "Mitandao ya kijamii: Facebook, Instagram, TikTok ili ugunduliwe", "Masoko ya mtandaoni: Jumia, Jiji, Kilimall, Konga"] },
            { title: "Linganisha kila njia", bullets: ["Nani hununua huko", "Inagharimu nini: data, kamisheni, matangazo, usafirishaji", "Inachukua muda gani kila siku"] },
            { title: "Anza kidogo", bullets: ["Njia moja kuu, zaidi sana moja zaidi", "Soma kwanza ukurasa wa wauzaji wa soko lenyewe"] }
          ],
          tryIt: "Chora jedwali dogo lenye njia zako mbili au tatu unazoweza kutumia. Kwa kila moja, andika nani hununua huko, inagharimu nini na inachukua muda gani. Zungushia duara ile utakayoanza nayo.",
          youCanNow: "kulinganisha njia za mtandaoni kwa gharama, juhudi na wateja, na kuchagua mahali pa kuanzia.",
          quickCheck: [
            { objective: "O1", q: "Unaweza kujibu ujumbe kwa saa moja kwa siku. Mwanzo bora ni upi?", options: ["Kufungua akaunti kwenye apps sita kwa mara moja", "Kuanza na njia moja kuu unayoweza kuimudu", "Kuweka tangazo mara moja na kutojibu kamwe", "Kulipia matangazo kabla ya kuwa na orodha ya bidhaa"], answer: 1, why: "Njia inafanya kazi tu ikiwa unawajibu wateja, kwa hiyo anza na unachoweza kumudu." },
            { objective: "O1", q: "Unakagua wapi soko la mtandaoni linawatoza wauzaji nini?", options: ["Ujumbe wa WhatsApp uliotumwa tena", "Makisio ya rafiki", "Ukurasa wa wauzaji wa soko lenyewe", "Maoni chini ya video"], answer: 2, why: "Ada na kanuni zinabadilika, na ukurasa wa soko lenyewe tu ndio wa kuaminika." }
          ]
        },
        {
          title: "Kuweka WhatsApp Business: wasifu na orodha ya bidhaa",
          objectives: ["O2"],
          minutes: 6,
          goal: "Weka wasifu wa WhatsApp Business na orodha ya bidhaa zenye bei.",
          text: [
            "WhatsApp Business ni app tofauti na WhatsApp ya kawaida, iliyotengenezwa na kampuni ile ile kwa ajili ya biashara ndogo. Ipate kutoka duka rasmi la apps tu (Google Play kwenye Android). Inakuwezesha kuonyesha wasifu wa biashara, kuonyesha bidhaa zako na bei zake, na kutuma ujumbe wa kukaribisha na wa kutokuwepo.",
            "Wasifu wako wa biashara ni bango la duka lako. Jaza jina la biashara yako, maelezo mafupi ya unachouza, eneo au anwani yako, saa zako za kazi, na jinsi wateja wanavyoweza kulipa. Tumia nembo iliyo wazi au picha ya meza yako sokoni au ya bidhaa yako bora.",
            "Kisha ongeza bidhaa zako kwenye orodha ya bidhaa (katika matoleo mengi app inaiita catalogue): picha, jina, bei kwa sarafu yako na maelezo mafupi. Wateja wanaweza kuipitia na kukutumia bidhaa ndani ya mazungumzo. Mfano: Wanjiku wa Nakuru anaongeza \"Viatu vya shanga vya Kimaasai, saizi 37-41, KES 1,200\" (bei ya mfano).",
            "Menyu zinatofautiana kati ya simu na matoleo. Usipopata mpangilio fulani, fungua mipangilio (settings) ya app na utafute zana za biashara (business tools). Unaweza pia kuweka ujumbe mfupi wa kukaribisha wateja wapya na ujumbe wa kutokuwepo kwa wakati umefunga."
          ],
          steps: ["Sakinisha WhatsApp Business kutoka duka rasmi la apps.", "Jaza wasifu wa biashara: jina, maelezo, eneo, saa za kazi, njia za malipo.", "Ongeza nembo au picha iliyo wazi.", "Ongeza angalau bidhaa tatu zenye picha, jina, bei na maelezo mafupi.", "Weka ujumbe wa kukaribisha na ujumbe wa kutokuwepo."],
          words: [["Wasifu wa biashara", "ukurasa unaoonyesha wateja jina la biashara yako, maelezo, saa za kazi na mahali ulipo."], ["Orodha ya bidhaa (catalogue)", "orodha ya bidhaa zako zenye picha na bei ambayo wateja wanaweza kuipitia ndani ya app."], ["Ujumbe wa kutokuwepo", "jibu linalotumwa lenyewe wakati umefunga."]],
          slides: [
            { title: "WhatsApp Business", bullets: ["App ya bure kwa biashara ndogo", "Sakinisha kutoka duka rasmi la apps tu", "Wasifu, orodha ya bidhaa, ujumbe wa kukaribisha na wa kutokuwepo"] },
            { title: "Wasifu wako ni bango la duka lako", bullets: ["Jina la biashara na unachouza", "Eneo au anwani na saa za kazi", "Jinsi wateja wanavyoweza kulipa", "Nembo au picha iliyo wazi"] },
            { title: "Orodha yako ya bidhaa", bullets: ["Picha, jina, bei kwa sarafu yako", "Maelezo mafupi: saizi, rangi, idadi", "Angalau bidhaa tatu kuanzia"] },
            { title: "Ujumbe unaojituma wenyewe", bullets: ["Wa kukaribisha wateja wapya", "Wa kutokuwepo wakati umefunga", "Menyu zinatofautiana: tazama settings, business tools"] }
          ],
          tryIt: "Sakinisha WhatsApp Business (au ifungue kama unayo). Jaza wasifu wako na uongeze bidhaa tatu zenye picha, jina, bei na mstari mmoja wa maelezo. Mwombe rafiki auangalie na akuambie jambo moja lisilo wazi.",
          youCanNow: "kuweka wasifu wa WhatsApp Business na orodha ya bidhaa ambayo wateja wanaweza kuipitia.",
          quickCheck: [
            { objective: "O2", q: "Taarifa ipi inafaa kuwa kwenye wasifu wako wa biashara?", options: ["PIN yako ya pesa kwa simu", "Saa zako za kazi", "Namba za simu za wateja wako", "Nywila yako"], answer: 1, why: "Saa za kazi zinawaambia wateja utajibu lini; PIN, nywila na namba za wateja zinabaki siri." },
            { objective: "O2", q: "Bidhaa kwenye orodha yako ina picha lakini haina bei. Unaongeza nini?", options: ["Hakuna; wateja wanapenda kuuliza", "Anwani ya nyumbani kwako", "Hadithi ndefu kuhusu duka", "Bei kwa sarafu yako"], answer: 3, why: "Bei iliyo wazi inaokoa muda na inazuia wateja kuondoka bila kuuliza." }
          ],
          sources: [WA_BUSINESS]
        },
        {
          title: "Picha na matangazo yanayouza",
          objectives: ["O3"],
          minutes: 5,
          goal: "Piga picha iliyo wazi ya bidhaa na uandike tangazo ambalo mteja anaweza kuagiza kutoka kwake.",
          text: [
            "Mteja wa mtandaoni hawezi kugusa bidhaa yako, kwa hiyo picha na maneno lazima vifanye kazi hiyo. Piga picha mchana karibu na dirisha au nje kivulini. Tumia mandharinyuma ya rangi moja kama kitambaa au ukuta. Futa lenzi ya kamera. Onyesha bidhaa nzima, kisha picha moja ya karibu, na kitu kinachoonyesha ukubwa, kama mkono.",
            "Tangazo zuri linajibu maswali ya mteja kabla hajauliza: jina lililo wazi (ni nini), bei kwa sarafu yako, saizi, rangi, idadi au uzito, imetengenezwa kwa nini, na unapeleka vipi na wapi. Mfano: \"Krimu ya mwili ya siagi ya shea, chupa ya g 250, bila harufu, GHS 60. Usafirishaji Tamale leo; miji mingine kwa kifurushi cha basi.\" (bei ya mfano).",
            "Kuwa mkweli. Onyesha bidhaa halisi, si picha kutoka intaneti, na sema kama rangi zinaweza kutofautiana. Picha za kweli zinamaanisha bidhaa chache kurudishwa na imani zaidi. Weka faili ndogo ili kuokoa data: picha moja iliyo wazi ni bora kuliko kumi zilizofifia."
          ],
          steps: ["Safisha bidhaa na lenzi ya kamera.", "Tumia mwanga wa mchana na mandharinyuma ya rangi moja.", "Piga picha moja nzima, moja ya karibu na moja inayoonyesha ukubwa.", "Andika jina, bei, saizi au uzito, malighafi, na usafirishaji.", "Lisome kama mteja: unaweza kuagiza bila kuuliza swali?"],
          words: [["Tangazo (listing)", "picha na maneno yanayoonyesha bidhaa moja inayouzwa."], ["Picha ya karibu (close-up)", "picha iliyopigwa karibu na bidhaa ili kuonyesha undani wake."]],
          slides: [
            { title: "Picha ambazo wateja wanaziamini", bullets: ["Mwanga wa mchana, mandharinyuma ya rangi moja, lenzi safi", "Bidhaa nzima, picha ya karibu, na kitu cha kuonyesha ukubwa", "Bidhaa yako halisi, kamwe si picha ya intaneti"] },
            { title: "Tangazo linalojibu maswali", bullets: ["Jina: ni nini", "Bei kwa sarafu yako", "Saizi, rangi, uzito, malighafi", "Unapeleka vipi na wapi"] },
            { title: "Okoa data, jenga imani", bullets: ["Picha moja iliyo wazi ni bora kuliko kumi zilizofifia", "Sema kama rangi zinatofautiana", "Matangazo ya kweli = bidhaa chache kurudishwa"] }
          ],
          tryIt: "Chagua bidhaa moja. Piga picha tatu (nzima, ya karibu, ya ukubwa) mchana kwenye mandharinyuma ya rangi moja. Andika tangazo lenye jina, bei, maelezo na usafirishaji. Lisome kama mteja na urekebishe chochote ambacho ungelazimika kuuliza.",
          youCanNow: "kupiga picha zilizo wazi za bidhaa kwa simu ya kawaida na kuandika tangazo ambalo wateja wanaweza kuagiza kutoka kwake.",
          quickCheck: [
            { objective: "O3", q: "Mwanga bora wa kupiga picha ya bidhaa uko wapi?", options: ["Mwanga wa mchana karibu na dirisha au kivulini", "Chumba chenye giza ukitumia flash", "Chini ya taa ya rangi", "Nje usiku"], answer: 0, why: "Mwanga laini wa mchana unaonyesha rangi halisi na undani bila vivuli vikali." },
            { objective: "O3", q: "Tangazo lipi linamwezesha mteja kuagiza bila kuuliza?", options: ["\"Mkoba mzuri. DM.\"", "\"Mkoba unauzwa\"", "\"Mkoba wa ngozi\"", "\"Mkoba wa mkono wa ngozi, kahawia, sm 30 x 25, NGN 18,000, usafirishaji Lagos kwa siku 2\""], answer: 3, why: "Linataja ni nini, saizi, bei na usafirishaji, kwa hiyo mteja anaweza kuamua." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kufungua duka lako mtandaoni",
        questions: [
          { objective: "O1", q: "Unalinganisha mambo gani matatu kwa kila njia ya mtandaoni?", options: ["Nani hununua huko, inagharimu nini, na inachukua muda gani", "Nembo yake, rangi yake na umri wake", "Marafiki wangapi wanaitumia kuzungumza", "Kama ni mpya tu"], answer: 0, why: "Wateja, gharama na muda vinaamua kama njia itakuletea pesa." },
          { objective: "O1", q: "Soko la mtandaoni linachukua sehemu ya kila mauzo. Hiyo inaitwaje?", options: ["Amana", "Marejesho ya pesa", "Kamisheni", "Salamu"], answer: 2, why: "Kamisheni ni sehemu ya kila mauzo ambayo soko la mtandaoni huchukua kama ada yake." },
          { objective: "O2", q: "Unapaswa kupata app ya WhatsApp Business wapi?", options: ["Kiungo kutoka namba usiyoijua", "Duka rasmi la apps", "Faili unalotumiwa na mtu usiyemjua", "Tangazo linalojitokeza ghafla (pop-up)"], answer: 1, why: "Duka rasmi la apps linazuia apps bandia na programu hasidi zisiingie kwenye simu yako." },
          { objective: "O2", q: "Unafunga saa 1 usiku (7 pm). Nini kinawasaidia wateja wanaotuma ujumbe usiku?", options: ["Kuzima simu yako milele", "Kufuta ujumbe wao", "Kujibu kwa PIN yako", "Ujumbe wa kutokuwepo unaosema utajibu lini"], answer: 3, why: "Ujumbe wa kutokuwepo unawaambia wateja umewaona na utajibu lini." },
          { objective: "O3", q: "Bidhaa yako ina rangi zinazoonekana tofauti kwenye skrini. Unaandika nini?", options: ["Hakuna", "\"Rangi zinaweza kutofautiana kidogo na picha\"", "\"Hakuna kurudisha kamwe\"", "Kutumia picha nzuri zaidi kutoka intaneti"], answer: 1, why: "Kuwa mkweli kuhusu rangi kunazuia malalamiko na kunajenga imani." }
        ]
      }
    },
    {
      name: "Sura 2: Kuuza, kulipwa na kupeleka bidhaa",
      lessons: [
        {
          title: "Kujibu wateja na kukamilisha mauzo",
          objectives: ["O4"],
          minutes: 5,
          goal: "Mjibu mteja na uthibitishe oda katika ujumbe mmoja ulio wazi.",
          text: [
            "Mtandaoni, muuzaji anayejibu kwanza na kwa uwazi mara nyingi ndiye anayepata mauzo. Jibu ndani ya saa zako za kazi, msalimu mteja, na ujibu swali lake hasa. Usipojua, sema utapata jibu lini.",
            "Hifadhi majibu mafupi unayotuma mara kwa mara, kama orodha yako ya bei, maeneo ya usafirishaji na njia za malipo. WhatsApp Business inakuwezesha kuhifadhi majibu na kuyatumia tena; menyu zinatofautiana, kwa hiyo tazama kwenye zana za biashara. Hii inaokoa kuandika na inafanya majibu yako yawe sawa kila wakati.",
            "Mteja akiwa tayari, thibitisha oda katika ujumbe mmoja: bidhaa, idadi, bei, mahali pa kupeleka na gharama yake, siku ya kupeleka, na jinsi atakavyolipa. Mwombe ajibu \"Ndiyo\" kuthibitisha. Mfano kutoka Abidjan: \"Bonjour Awa. Oda: magauni 2 ya kitenge (wax), saizi M, 15,000 XOF kila moja = 30,000 XOF. Kupeleka Cocody Jumamosi, 1,000 XOF. Malipo kwa pesa kwa simu kabla ya kupeleka. Jibu OUI kuthibitisha.\" (bei za mfano).",
            "Kuwa na adabu, hata mteja anapopatana sana bei au ni mkorofi. Usitume matusi kamwe wala kuweka ujumbe wa mteja hadharani."
          ],
          steps: ["Msalimu mteja na ujibu swali lake hasa.", "Tumia jibu lililohifadhiwa kwa orodha ya bei, usafirishaji na malipo.", "Thibitisha: bidhaa, idadi, bei, mahali pa kupeleka, gharama na siku, njia ya malipo.", "Mwombe mteja ajibu \"Ndiyo\" kabla hujaandaa oda."],
          words: [["Jibu lililohifadhiwa (quick reply)", "ujumbe unaouhifadhi kwenye app na kuutuma tena kwa kugusa mara chache."], ["Uthibitisho wa oda", "ujumbe mmoja unaoorodhesha kila kitu mteja alichokubali kununua na jinsi kitakavyolipwa na kupelekwa."]],
          slides: [
            { title: "Majibu ya haraka na wazi yanashinda mauzo", bullets: ["Jibu ndani ya saa zako za kazi", "Salimu na ujibu swali lenyewe", "Hujui? Sema utapata jibu lini"] },
            { title: "Hifadhi majibu unayotuma mara kwa mara", bullets: ["Orodha ya bei", "Maeneo ya usafirishaji na gharama", "Njia za malipo"] },
            { title: "Thibitisha kila oda kwa maandishi", bullets: ["Bidhaa, idadi na bei", "Mahali pa kupeleka, gharama na siku", "Njia ya malipo", "Mteja anajibu \"Ndiyo\" kuthibitisha"] }
          ],
          tryIt: "Andika na uhifadhi ujumbe wa kuthibitisha oda kwa biashara yako wenye nafasi za bidhaa, idadi, bei, usafirishaji na malipo. Kisha ujaze kwa oda moja ya kujifanya.",
          youCanNow: "kujibu wateja kwa uwazi na kuthibitisha kila oda katika ujumbe mmoja wa maandishi.",
          quickCheck: [
            { objective: "O4", q: "Uthibitisho upi wa oda umekamilika?", options: ["\"Sawa, inakuja.\"", "\"Mikoba 2, KES 1,500 kila mmoja = KES 3,000. Kupeleka mjini Kisumu Ijumaa, KES 200. Lipa kwa M-Pesa. Jibu NDIYO.\"", "\"Tuma pesa.\"", "\"Asante kwa kuzungumza!\""], answer: 1, why: "Unaorodhesha bidhaa, idadi, bei, usafirishaji na malipo, na unamwomba mteja athibitishe." },
            { objective: "O4", q: "Kwa nini uhifadhi majibu unayotuma mara kwa mara?", options: ["Ili majibu yawe ya haraka na sawa kila wakati", "Ili mteja alipe zaidi", "Ili usisome ujumbe kamwe", "Ili uweze kusambaza namba za wateja"], answer: 0, why: "Majibu yaliyohifadhiwa yanaokoa kuandika na yanaweka bei na kanuni zako sawa." }
          ]
        },
        {
          title: "Kulipwa kwa usalama: zuia arifa bandia za malipo",
          objectives: ["O5"],
          minutes: 6,
          goal: "Kagua kwamba malipo yamefika kweli kabla ya kukabidhi bidhaa.",
          text: [
            "Wauzaji wengi wa mtandaoni hulipwa kwa pesa kwa simu (M-Pesa, MTN MoMo, Orange Money, Wave) au uhamisho wa benki, au pesa taslimu wakati wa kupokea bidhaa. Walaghai wanajua hili. Hila ya kawaida ni arifa bandia ya malipo: ujumbe mfupi, picha ya skrini au ujumbe uliotumwa tena unaoonekana kama malipo lakini hakuna pesa zilizofika.",
            "Kanuni yako: bidhaa zinatoka tu pesa zinapoonekana kwenye akaunti yako mwenyewe. Fungua app yako mwenyewe ya pesa kwa simu au ya benki, au piga msimbo rasmi wa mtoa huduma wako, na ukague salio au muamala. Picha ya skrini kutoka kwa mteja si ushahidi. Ujumbe kutoka namba ya kawaida ya simu si ushahidi.",
            "Hila nyingine: \"Nimekutumia pesa kwa makosa, tafadhali nirudishie.\" Usitume chochote. Kagua salio lako mwenyewe; kama kweli kuna malipo yaliyotumwa kwa makosa, mtoa huduma wako anaweza kuyarudisha kupitia utaratibu wake mwenyewe. Mtoa huduma halisi haombi kamwe PIN yako, nywila yako au msimbo wa mara moja. Usivitoe kamwe, hata kwa mtu anayesema anatoka kampuni hiyo.",
            "Kwa malipo ya pesa taslimu wakati wa kupokea, hesabu pesa kabla ya kukabidhi kifurushi, na zijue noti za sarafu yako. Kila benki kuu inatoa tahadhari kuhusu ulaghai, kwa mfano Benki Kuu ya Kenya na Benki Kuu ya Nigeria."
          ],
          steps: ["Kubalianeni njia ya malipo katika uthibitisho wa oda.", "Mteja akisema amelipa, fungua app yako mwenyewe au piga msimbo rasmi wa mtoa huduma wako.", "Kagua kiasi na mtumaji kwenye salio au taarifa ya akaunti yako.", "Hapo tu ndipo ukabidhi au utume bidhaa.", "Puuza maombi ya \"nirudishie pesa zangu za makosa\"; acha mtoa huduma ashughulikie urejeshaji."],
          words: [["Arifa bandia ya malipo", "ujumbe mfupi, picha ya skrini au ujumbe uliotengenezwa kuonekana kama malipo wakati hakuna pesa zilizotumwa."], ["PIN", "namba yako ya siri ya pesa kwa simu au ya benki. Ni wewe tu unayepaswa kuijua."], ["Urejeshaji (reversal)", "malipo yanaporudishwa; urejeshaji halisi unafanywa na mtoa huduma wako, si kwa wewe kumtumia pesa mtu usiyemjua."]],
          slides: [
            { title: "Hila ya malipo bandia", bullets: ["Ujumbe au picha ya skrini inayoonekana kama pesa zimefika", "Hakuna pesa kwenye akaunti yako", "Mlaghai anaondoka na bidhaa zako"] },
            { title: "Kanuni yako", bullets: ["Bidhaa zinatoka tu pesa zikiwa kwenye akaunti YAKO", "Kagua kwenye app yako mwenyewe au msimbo rasmi", "Picha ya skrini si ushahidi"] },
            { title: "\"Nimekutumia kwa makosa\"", bullets: ["Usirudishe chochote wewe mwenyewe", "Kagua salio lako mwenyewe", "Urejeshaji halisi unapitia mtoa huduma wako"] },
            { title: "Usitoe kamwe", bullets: ["PIN au nywila yako", "Msimbo wa mara moja", "Mtoa huduma halisi haviombi kamwe"] }
          ],
          tryIt: "Andika kanuni yako ya malipo kwenye karatasi na uibandike karibu na mahali unapofunga oda. Kisha jizoeze: fungua app yako mwenyewe ya pesa kwa simu au ya benki na utafute mahali unapoona muamala wako wa mwisho.",
          youCanNow: "kukagua kwamba pesa zimefika kweli kwenye akaunti yako mwenyewe kabla ya kutuma bidhaa, na kukataa hila za malipo bandia na za urejeshaji.",
          quickCheck: [
            { objective: "O5", q: "Mteja anakutumia picha ya skrini ya malipo. Unafanya nini?", options: ["Kutuma bidhaa mara moja", "Kuomba picha kubwa zaidi", "Kukagua pesa kwenye app yako mwenyewe au msimbo rasmi", "Kumtumia PIN yako akague"], answer: 2, why: "Akaunti yako mwenyewe tu inaonyesha kama pesa zimefika kweli; picha za skrini zinaweza kughushiwa." },
            { objective: "O5", q: "Mtu anasema amekutumia pesa kwa makosa na anaomba umrudishie. Kipi ni salama zaidi?", options: ["Kumrudishia mara moja", "Kukagua salio lako mwenyewe na kuacha mtoa huduma ashughulikie urejeshaji wowote", "Kumpa PIN yako ili azichukue", "Kumtumia mara mbili ili kuwa mwema"], answer: 1, why: "Hii ni hila ya kawaida; malipo halisi ya makosa yanarudishwa kupitia mtoa huduma." }
          ],
          sources: [CBK_FRAUD, CBN_CP]
        },
        {
          title: "Usafirishaji, urudishaji na kudumisha imani ya wateja",
          objectives: ["O6"],
          minutes: 5,
          goal: "Andika sera ya usafirishaji na urudishaji na uweke taarifa za wateja siri.",
          text: [
            "Wateja wanarudi usafirishaji unapoaminika. Andika maeneo unayopeleka, gharama kwa kila eneo, muda unaochukua na jinsi unavyotuma: kwa mkono, mwendesha pikipiki (boda boda au okada), huduma ya vifurushi vya basi au kampuni ya usafirishaji (courier). Funga bidhaa vizuri na umtumie mteja ujumbe kifurushi kinapoondoka, ukitaja jina la mwendesha pikipiki au namba ya kifurushi.",
            "Sera ya urudishaji inasema nini kinatokea kitu kikiwa na kasoro: kwa mfano, \"Saizi si sahihi? Tuambie ndani ya siku 2 na tutaibadilisha ikiwa haijatumika.\" Iwe fupi na ya haki, na uifuate kila wakati. Nchini Morocco, muuzaji wa Casablanca anaweza kusema: kubadilisha ndani ya siku 3, mteja analipia usafirishaji wa kurudisha isipokuwa bidhaa ina kasoro.",
            "Namba za simu, anwani na oda za wateja ni siri. Usizisambaze, usiziweke mtandaoni, wala usiwaongeze watu kwenye vikundi au orodha za utangazaji (broadcast lists) bila kuwauliza. Nchi nyingi zina sheria za ulinzi wa data, kwa mfano Sheria ya Ulinzi wa Data ya Kenya na Sheria ya Ulinzi wa Data ya Nigeria 2023. Usipokuwa na uhakika ni kanuni ipi inahusika, kagua kwenye ofisi ya kitaifa ya ulinzi wa data.",
            "Baada ya kupeleka, uliza kama kila kitu kiko sawa na umkaribishe mteja atoe maoni au picha unayoweza kuisambaza, kwa ruhusa yake."
          ],
          steps: ["Andika maeneo ya usafirishaji, gharama, muda na jinsi unavyotuma.", "Funga vizuri na utume ujumbe kifurushi kinapoondoka.", "Andika sera fupi na ya haki ya urudishaji na uifuate.", "Weka namba na anwani za wateja siri; uliza kabla ya kumwongeza mtu kwenye orodha.", "Omba maoni baada ya kupeleka."],
          words: [["Sera ya urudishaji", "kanuni yako ya nini kinatokea mteja anapotaka kurudisha au kubadilisha bidhaa."], ["Orodha ya utangazaji (broadcast list)", "orodha kwenye WhatsApp ya kutuma ujumbe mmoja kwa watu wengi; ni wale tu waliohifadhi namba yako wanaoupokea."], ["Data binafsi", "taarifa kuhusu mtu, kama jina lake, namba yake ya simu au anwani yake."]],
          slides: [
            { title: "Usafirishaji unaoaminika", bullets: ["Maeneo, gharama, muda na jinsi unavyotuma", "Funga vizuri", "Mtumie mteja ujumbe kinapoondoka"] },
            { title: "Sera fupi na ya haki ya urudishaji", bullets: ["Nini kinaweza kurudishwa na lini", "Nani analipia usafirishaji wa kurudisha", "Ifuate kila wakati"] },
            { title: "Data ya wateja ni siri", bullets: ["Usisambaze wala kuweka mtandaoni namba na anwani", "Uliza kabla ya kumwongeza mtu kwenye orodha", "Kagua ofisi ya kitaifa ya ulinzi wa data"] }
          ],
          tryIt: "Kazi ya mwisho: andaa mpango wako wa ukurasa mmoja wa duka la mtandaoni: unauza wapi na kwa nini, maandishi ya wasifu wako, matangazo matatu, uthibitisho wako wa oda uliohifadhiwa, kanuni yako ya malipo, na sera yako ya usafirishaji na urudishaji.",
          youCanNow: "kupeleka bidhaa kwa uhakika, kushughulikia urudishaji kwa haki na kuweka taarifa za wateja wako siri.",
          quickCheck: [
            { objective: "O6", q: "Sera ya usafirishaji inapaswa kuwa na nini?", options: ["PIN yako", "Anwani za wateja wako", "Maeneo ya usafirishaji, gharama, muda na jinsi unavyotuma", "Neno \"haraka\" tu"], answer: 2, why: "Maeneo, gharama, muda na njia vinawaambia wateja hasa watarajie nini." },
            { objective: "O6", q: "Unataka kutuma orodha ya bei kila wiki kwa wateja. Kipi ni sahihi?", options: ["Kuweka namba zao zote kwenye kikundi cha wazi", "Kumuuzia mfanyabiashara mwingine namba zao", "Kuongeza watu usiowajua kutoka orodha uliyonunua", "Kuwauliza wateja kwanza na kuweka namba zao siri"], answer: 3, why: "Namba za wateja ni data binafsi; uliza kabla ya kuwatumia ujumbe kwa wingi." }
          ],
          sources: [ODPC, NDPC]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kuuza, kulipwa na kupeleka bidhaa",
        questions: [
          { objective: "O4", q: "Mteja anauliza swali ambalo huwezi kulijibu sasa. Unajibu nini?", options: ["Hakuna", "Kusema utapata jibu lini na utamrudia", "Kumwambia aende kwingine", "Kutuma ujumbe mrefu wa sauti kuhusu jambo jingine"], answer: 1, why: "Kutaja wakati wa kujibu kunamshika mteja na kunajenga imani." },
          { objective: "O4", q: "Mteja anafanya nini baada ya uthibitisho wako wa oda?", options: ["Anakutumia PIN yake", "Hakuna", "Anajibu \"Ndiyo\" kuthibitisha", "Analipa mara mbili"], answer: 2, why: "\"Ndiyo\" ya maandishi inaonyesha nyote mmekubaliana oda ile ile." },
          { objective: "O5", q: "Bidhaa za oda iliyolipwa kwa pesa kwa simu zinaweza kutoka dukani lini?", options: ["Unapoona pesa kwenye akaunti yako mwenyewe", "Mteja anapotuma picha ya skrini", "Mtu anapopiga simu kusema zimetumwa", "Mteja anapoahidi"], answer: 0, why: "Pesa kwenye akaunti yako mwenyewe tu ndizo ushahidi wa malipo." },
          { objective: "O5", q: "Mpigaji simu anasema anatoka kampuni yako ya pesa kwa simu na anahitaji PIN yako. Kipi ni kweli?", options: ["Wafanyakazi halisi wanaweza kuiomba", "Mpe nusu yake", "Itume kwa ujumbe mfupi badala yake", "Mtoa huduma halisi haombi kamwe PIN yako; kata simu"], answer: 3, why: "Watoa huduma halisi hawaombi kamwe PIN yako; yeyote anayeiomba ni mlaghai." },
          { objective: "O6", q: "Mteja anapokea saizi isiyo sahihi. Nini kinasaidia zaidi?", options: ["Kupuuza ujumbe", "Sera ya urudishaji iliyo wazi unayoifuata kila wakati", "Kumlaumu mwendesha pikipiki", "Kuweka ujumbe wa mteja mtandaoni"], answer: 1, why: "Sera ya haki, inayofuatwa kila wakati, inatatua matatizo na inawabakiza wateja." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kuuza Mtandaoni Afrika (WhatsApp Business, Masoko ya Mtandaoni na Mitandao ya Kijamii)",
    questions: [
      { objective: "O1", q: "Muuzaji mdogo anapaswa kuanza kuuza mtandaoni wapi?", options: ["Kila mahali kwa mara moja", "Mahali wateja walipo tayari, na mahali muuzaji anapoweza kumudu", "Mahali tu matangazo yalipo ghali zaidi", "Mahali ambapo hakuna mtu mwingine anayeuza chochote"], answer: 1, why: "Njia inafanya kazi tu ikiwa wateja wako huko na unawajibu." },
      { objective: "O1", q: "Kipi ni soko la mtandaoni?", options: ["Jiji", "Ujumbe wa kukaribisha", "PIN yako", "Orodha ya utangazaji"], answer: 0, why: "Jiji, Jumia, Kilimall na Konga ni masoko ya mtandaoni ambapo wanunuzi wanatafuta kwa wauzaji wengi." },
      { objective: "O1", q: "Mitandao ya kijamii kama Instagram na TikTok hasa inakusaidia:", options: ["Kuficha bidhaa zako", "Kukagua malipo", "Kugunduliwa na wateja wapya kupitia picha na video", "Kuepuka kujibu ujumbe"], answer: 2, why: "Mitandao ya kijamii inafaa kwa kupatikana na watu ambao bado hawakujui." },
      { objective: "O2", q: "WhatsApp Business ni:", options: ["Benki", "Soko la mtandaoni linalochukua kamisheni", "Tangazo la kulipia", "App tofauti kwa biashara ndogo yenye wasifu na orodha ya bidhaa"], answer: 3, why: "Inaongeza wasifu wa biashara, bidhaa zenye bei na ujumbe unaojituma wenyewe." },
      { objective: "O2", q: "Kipi kinafaa kuwa kwenye wasifu wako wa biashara?", options: ["Saa zako za kazi na eneo unalohudumia", "Nywila yako", "Anwani za wateja wako", "Msimbo wako wa mara moja"], answer: 0, why: "Saa za kazi na eneo vinawaambia wateja unahudumia lini na wapi." },
      { objective: "O2", q: "Kila bidhaa kwenye orodha yako inapaswa kuwa na:", options: ["Picha tu", "Picha, jina, bei na maelezo mafupi", "PIN yako ya benki", "Bila bei, ili wateja waulize"], answer: 1, why: "Picha, jina, bei na maelezo vinawawezesha wateja kuchagua bila kusubiri." },
      { objective: "O3", q: "Mandharinyuma bora ya picha ya bidhaa ni:", options: ["Mtaa wenye shughuli nyingi", "Meza iliyochafuka", "Kitambaa au ukuta wa rangi moja", "Kona yenye giza"], answer: 2, why: "Mandharinyuma ya rangi moja yanaweka macho kwenye bidhaa." },
      { objective: "O3", q: "Kwa nini uonyeshe mkono au sarafu karibu na bidhaa?", options: ["Kuonyesha ukubwa wake", "Kuficha bidhaa", "Kufanya faili liwe kubwa zaidi", "Wateja wanapenda mikono"], answer: 0, why: "Kitu kinachojulikana ndani ya picha kinaonyesha bidhaa ni kubwa kiasi gani." },
      { objective: "O3", q: "Je, ni sawa kutumia picha nzuri zaidi ya bidhaa ile ile kutoka intaneti?", options: ["Ndiyo, kila wakati", "Ndiyo, ikiwa ina mwanga zaidi", "Kwa bidhaa za bei ghali tu", "Hapana; onyesha bidhaa yako halisi ili wateja wapate wanachokiona"], answer: 3, why: "Picha za kweli zinazuia malalamiko na bidhaa kurudishwa." },
      { objective: "O4", q: "Uthibitisho wa oda unaorodhesha:", options: ["Bei tu", "Bidhaa, idadi, bei, usafirishaji na malipo", "PIN na nywila yako", "Majina ya wateja wengine"], answer: 1, why: "Maelezo yote katika ujumbe mmoja yanazuia kutoelewana." },
      { objective: "O4", q: "Mteja anapatana sana bei na ni mkorofi. Unafanya nini?", options: ["Kumtukana pia", "Kuweka ujumbe wake hadharani", "Kubaki na adabu na kumpa bei yako bora", "Kuwazuia wateja wote"], answer: 2, why: "Kubaki na adabu kunalinda jina lako, hata kama mauzo haya hayatafanyika." },
      { objective: "O4", q: "Jibu lililohifadhiwa (quick reply) linafaa zaidi kwa:", options: ["Orodha yako ya bei na maeneo ya usafirishaji", "PIN yako", "Anwani ya mteja", "Umbea"], answer: 0, why: "Ujumbe unaotuma mara kwa mara unaweza kuhifadhiwa na kutumwa kwa kugusa mara chache." },
      { objective: "O5", q: "Ujumbe mfupi kutoka namba ya kawaida ya simu unasema \"Umepokea GHS 500\". Wewe:", options: ["Unatuma bidhaa", "Unashukuru na kutuma bidhaa", "Unawatumia marafiki ujumbe huo", "Unakagua kwanza salio lako mwenyewe la pesa kwa simu"], answer: 3, why: "Arifa bandia zinatoka namba za kawaida; akaunti yako mwenyewe tu ndiyo ushahidi." },
      { objective: "O5", q: "Nani anapaswa kujua PIN yako ya pesa kwa simu?", options: ["Wewe tu", "Mteja", "Mwendesha pikipiki wa usafirishaji", "Yeyote kutoka kampuni anayepiga simu"], answer: 0, why: "PIN ni siri; mtoa huduma halisi haiombi kamwe." },
      { objective: "O5", q: "Ujumbe wa \"malipo ya makosa\" unakuomba urudishe pesa. Hatua salama zaidi ni:", options: ["Kurudisha haraka", "Kurudisha mara mbili", "Kukagua salio lako mwenyewe na kuacha mtoa huduma ashughulikie urejeshaji wowote", "Kumpa PIN yako"], answer: 2, why: "Urejeshaji halisi unapitia mtoa huduma, si kwa wewe kumtumia pesa mtu usiyemjua." },
      { objective: "O5", q: "Kwa malipo ya pesa taslimu wakati wa kupokea, mwendesha pikipiki anapaswa:", options: ["Kukabidhi kifurushi kwanza", "Kuhesabu pesa kabla ya kukabidhi kifurushi", "Kukubali ahadi ya kulipa baadaye", "Kupiga picha ya PIN ya mteja"], answer: 1, why: "Kuhesabu kwanza kunamaanisha bidhaa zinatoka tu malipo yakiwa mkononi." },
      { objective: "O6", q: "Ujumbe mzuri wa usafirishaji kwa mteja unasema:", options: ["Hakuna mpaka kifike", "Kifurushi kimeondoka, pamoja na jina la mwendesha pikipiki au namba ya kifurushi", "Anwani za wateja wengine", "PIN yako"], answer: 1, why: "Kuwaambia wateja kimeondoka, na kwa njia gani, kunajenga imani." },
      { objective: "O6", q: "Namba za simu na anwani za wateja ni:", options: ["Za kusambaza bure", "Kitu cha kuuza", "Data binafsi unayoiweka siri", "Za kuweka hadharani"], answer: 2, why: "Ni data binafsi; nchi nyingi zinazilinda kwa sheria." },
      { objective: "O6", q: "Sera ya urudishaji inapaswa kuwa:", options: ["Ndefu na ya siri", "Tofauti kwa kila mteja", "Isiyoandikwa kamwe", "Fupi, ya haki na inayofuatwa kila wakati"], answer: 3, why: "Sera iliyo wazi na ya haki unayoifuata kila wakati inadumisha imani ya wateja." },
      { objective: "O6", q: "Unakagua wapi kanuni za ulinzi wa data katika nchi yako?", options: ["Ofisi yako ya kitaifa ya ulinzi wa data", "Uvumi kwenye mitandao ya kijamii", "Maoni ya mteja", "Tangazo la soko la mtandaoni"], answer: 0, why: "Ofisi ya kitaifa, kama ODPC ya Kenya au NDPC ya Nigeria, inachapisha kanuni hizo." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi amepiga hatua kiasi gani
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 3, 5, 7, 9, 12, 14, 17] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Mahali pa kuuza", objective: "O1", notYet: "Hakuna njia iliyochaguliwa, au njia nyingi bila sababu.", meets: "Njia moja au mbili zimechaguliwa, na nani hununua huko, gharama na muda kwa kila moja.", exceeds: "Pia inasema nini kingekufanya uongeze au uache njia baada ya miezi mitatu." },
      { name: "Wasifu na orodha ya bidhaa", objective: "O2", notYet: "Wasifu hauna jina, saa za kazi au eneo, au bidhaa ni chini ya tatu.", meets: "Wasifu wenye jina, maelezo, eneo, saa za kazi na malipo, pamoja na angalau bidhaa tatu zenye bei.", exceeds: "Rafiki au mteja aliupitia na jambo moja lisilo wazi likarekebishwa." },
      { name: "Matangazo", objective: "O3", notYet: "Picha zilizofifia au za kuazima, au hakuna bei wala usafirishaji.", meets: "Matangazo matatu yenye picha halisi zilizo wazi, jina, bei kwa sarafu ya nchini, maelezo na usafirishaji.", exceeds: "Kila tangazo lina picha ya karibu na picha ya ukubwa, na maelezo ya kweli kama tofauti ya rangi." },
      { name: "Uthibitisho wa oda", objective: "O4", notYet: "Hakuna uthibitisho uliohifadhiwa, au maelezo yanakosekana.", meets: "Ujumbe uliohifadhiwa wenye bidhaa, idadi, bei, mahali pa kupeleka, gharama na siku, malipo, na ombi la kujibu Ndiyo.", exceeds: "Pia majibu yaliyohifadhiwa ya bei, usafirishaji na malipo." },
      { name: "Kanuni ya malipo", objective: "O5", notYet: "Bidhaa zinaweza kutoka kwa picha ya skrini au ahadi, au PIN inatolewa.", meets: "Kanuni iliyoandikwa: bidhaa zinatoka tu pesa zikionekana kwenye akaunti yako mwenyewe; usitoe kamwe PIN wala msimbo.", exceeds: "Pia inashughulikia maombi ya malipo ya makosa na kuhesabu pesa taslimu wakati wa kupokea." },
      { name: "Usafirishaji, urudishaji na data", objective: "O6", notYet: "Hakuna maelezo ya usafirishaji wala kanuni ya urudishaji, au data ya wateja inasambazwa.", meets: "Maeneo ya usafirishaji, gharama, muda na njia, sera fupi ya urudishaji, na ahadi ya kuweka data ya wateja siri.", exceeds: "Wateja wanaulizwa kabla ya kuongezwa kwenye orodha yoyote, na maoni yanaombwa baada ya kupeleka." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaoripoti oda yao ya kwanza au zaidi ya mtandaoni ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi wanaoripoti kutopoteza chochote kwa arifa bandia za malipo ndani ya siku 30 baada ya kozi",
      "Wanafunzi wanaoripoti mauzo ya juu zaidi kwa mwezi baada ya miezi mitatu (ufuatiliaji wa programu)"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu ya Android yenye WhatsApp Business iliyosakinishwa kutoka duka rasmi la apps",
      "Bidhaa tatu (au picha zake) za kuweka kwenye orodha",
      "Karatasi na kalamu kwa jedwali la njia, sera na kanuni ya malipo",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi"
    ],
    facilitatorNotes: [
      "Katika kikundi, fanyeni jaribio la awali pamoja, kisha fanyeni sura moja kwa kila kipindi, huku wanafunzi wakiweka wasifu wao papo hapo na kusaidiana.",
      "Fanyeni somo la picha nje kwenye mwanga wa mchana; wanafunzi wabadilishane simu na kukagua matangazo ya wenzao.",
      "Igizeni arifa bandia ya malipo na simu ya \"malipo ya makosa\". Usiwaombe kamwe wanafunzi waonyeshe PIN, salio au taarifa ya akaunti halisi.",
      "Wakumbushe wanafunzi kwamba menyu za apps, ada za masoko ya mtandaoni na kanuni za data zinabadilika, na kwamba wakague app, ukurasa wa wauzaji wa soko au mdhibiti wa kitaifa.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
