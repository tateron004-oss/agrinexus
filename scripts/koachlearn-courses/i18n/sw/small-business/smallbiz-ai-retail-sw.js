"use strict";

// Koach Learn course (Swahili translation of small-business/smallbiz-ai-retail.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const FTC_ADS = { name: "FTC: Misingi ya matangazo na masoko", url: "https://www.ftc.gov/business-guidance/advertising-marketing" };

module.exports = {
  id: "smallbiz-ai-retail-sw",
  lang: "sw",
  translationOf: "smallbiz-ai-retail",
  category: "Small Business",
  name: "AI kwa Biashara za Rejareja",
  skills: "Kuandika maelezo ya bidhaa, Kutengeneza vibao vya rafu, Kufuatilia stoki kwenye spreadsheet, Kuweka viwango vya kuagiza tena, Kusoma mwenendo wa mauzo, Kupanga ofa ya msimu",
  outcome: "kuendesha upande wa makaratasi wa duka dogo kwa msaada wa AI: kuandika maelezo ya kweli ya bidhaa na vibao vya rafu, kuweka jedwali la stoki lenye viwango vya kuagiza tena, kutambua bidhaa zinazouzwa zaidi na zinazouzwa polepole, na kupanga ofa moja ya msimu kutokana na namba zako mwenyewe.",
  about: [
    "Kozi hii ni kwa wamiliki na wafanyakazi wa biashara ndogo za rejareja: maduka ya nguo, maduka ya mtaani, maduka ya vifaa vya urembo, maduka ya zawadi, maduka ya mitumba, na watu wanaouza mtandaoni au sokoni. Wanafunzi wetu wengi ni wamiliki kutoka jamii za wachache wanaoendesha duka pamoja na timu ndogo.",
    "Utatumia msaidizi wa AI wa bure na spreadsheet (Google Sheets au Excel) kuandika kuhusu bidhaa zako, kufuatilia stoki ili bidhaa zisiishe mara kwa mara, kuona kinachouzwa, na kupanga ofa kwa kutegemea ukweli badala ya kukisia.",
    "Kila somo linachukua kama dakika tano na lina kazi ya \"Jaribu sasa\". Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Tengeneza kifurushi cha zana za rejareja kwa duka lako: maelezo matano ya kweli ya bidhaa, vibao vitatu vya rafu, jedwali la stoki lenye angalau bidhaa 15 pamoja na viwango vya kuagiza tena na alama ya kuagiza tena, maelezo mafupi kuhusu bidhaa zako tatu zinazouzwa zaidi na tatu zinazouzwa kidogo zaidi, na mpango wa ukurasa mmoja wa ofa moja ya msimu wenye bidhaa, bei, tarehe na jinsi utakavyoipima.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wamiliki na wafanyakazi wa biashara ndogo za rejareja: maduka ya nguo, maduka ya mtaani, maduka ya vifaa vya urembo, maduka ya zawadi, maduka ya mitumba, na watu wanaouza mtandaoni au sokoni. Wengi ni wamiliki kutoka jamii za wachache wanaoendesha duka pamoja na timu ndogo.",
    startingPoint: "Wanazijua vizuri bidhaa na wateja wao, na wanatumia mashine ya malipo au POS. Wanatumia kidogo spreadsheet kwa stoki au ripoti za mauzo, au AI kwa kuandika, na mara nyingi ofa zinapangwa kwa kukisia.",
    gap: "Maduka hupoteza pesa bidhaa zinazouzwa zaidi zinapoisha, yanaposhika stoki nyingi inayouzwa polepole, yanapoweka bei zisizo sahihi au yanapoendesha ofa zisizoleta faida. Wamiliki wanahitaji kutumia AI na spreadsheet kuandika maelezo ya kweli ya bidhaa, kufuatilia stoki, kusoma mauzo na kupanga ofa kutokana na namba zao wenyewe, huku wakilinda taarifa za duka.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi",
      "Vifaa: kompyuta ni bora kwa spreadsheet; simu inafaa kwa kuandika na kwa vibao",
      "Muda: masomo ya kama dakika 5 yanayoingia kati ya saa za kufungua duka",
      "Sheria: kanuni ya FTC ya ukweli katika matangazo kwa madai kuhusu bidhaa, na bei kwenye vibao lazima zilingane na mashine ya malipo",
      "Faragha na usalama: hakuna nywila za wasambazaji wala taarifa za wateja ndani ya AI; jumla za bidhaa tu"
    ],
    prerequisites: "Kozi \"Zana Muhimu za AI kwa Biashara Ndogo\" inasaidia wanafunzi ambao ni wapya katika spreadsheet."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa ukweli kutoka kwenye lebo au ankara ya bidhaa", action: "kuandika maelezo mafupi na ya kweli ya bidhaa kwa msaada wa AI", standard: "kila dai likiwa limekaguliwa dhidi ya lebo na bila chochote usichoweza kuthibitisha" },
    { id: "O2", condition: "Ukitumia msaidizi wa AI", action: "kutengeneza vibao vya rafu na matangazo ya duka yaliyo wazi", standard: "bei zikilingana na mashine ya malipo, ofa zikiwa na tarehe halisi za kumalizika, na tafsiri zikiwa zimekaguliwa na mtu anayeijua lugha vizuri" },
    { id: "O3", condition: "Ukitumia Google Sheets au Excel", action: "kutengeneza jedwali la stoki lenye viwango vya kuagiza tena na alama ya kuagiza tena", standard: "likiwa na angalau bidhaa 15, viwango sahihi vya kuagiza tena na fomula iliyojaribiwa" },
    { id: "O4", condition: "Ukipewa mauzo ya wiki 4 hadi 8 kwa kila bidhaa", action: "kutambua bidhaa zako zinazouzwa zaidi na zinazouzwa kidogo zaidi kwa msaada wa AI", standard: "ukitaja 3 za juu na 3 za chini na kuthibitisha mwenendo wowote wa AI katika namba zako mwenyewe" },
    { id: "O5", condition: "Ukipewa namba zako za mauzo na stoki", action: "kupanga ofa ya msimu", standard: "ikiwa na bidhaa, bei, faida kwa kila mauzo, tarehe na stoki ya kutosha, ukiamua wewe mwenyewe" },
    { id: "O6", condition: "Ukipewa ofa na taarifa za duka lako", action: "kupima matokeo ya ofa na kulinda taarifa za duka", standard: "ukilinganisha na wiki zile zile za kabla, ukikagua hesabu za AI, na ukiweka nywila nje ya AI" }
  ],
  chapters: [
    {
      name: "Sura 1: Bidhaa, vibao na stoki",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kuandika maelezo ya bidhaa yanayouza, kwa ukweli",
          minutes: 5,
          goal: "Andika maelezo mafupi na ya kweli ya bidhaa kwa msaada wa AI.",
          text: [
            "Maelezo ya bidhaa yanamwambia mnunuzi bidhaa ni nini, ni ya nani, na kwa nini aitake. Yanafaa kwenye lebo ya rafu, tovuti yako, soko la mtandaoni au chapisho la mitandao ya kijamii.",
            "Mpe AI ukweli: \"Andika maelezo ya maneno 40 ya krimu ya mwili ya shea butter ya oz 12, isiyo na harufu, iliyotengenezwa Ghana, kwa ngozi kavu. Sauti ya ukarimu. Taja ukubwa.\" AI inafanya maneno yawe ya kirafiki; wewe unatoa ukweli.",
            "Kagua kila ukweli: ukubwa, malighafi, mahali ilipotengenezwa, maelekezo ya utunzaji. Ondoa madai usiyoweza kuthibitisha, kama \"inatibu ukurutu\" au \"bora zaidi mjini\". FTC (mamlaka ya biashara ya Marekani) inasema madai ya matangazo lazima yawe ya kweli na yawe na ushahidi."
          ],
          steps: ["Andika ukweli wa bidhaa: jina, ukubwa, malighafi, inakotoka, ni ya nani.", "Muombe AI maelezo mafupi kwa sauti yako.", "Kagua kila ukweli dhidi ya lebo au ankara.", "Ondoa madai usiyoweza kuthibitisha."],
          words: [["Maelezo ya bidhaa", "maandishi mafupi yanayowaambia wanunuzi bidhaa ni nini na kwa nini waitake."], ["Dai", "kauli ya ukweli kuhusu bidhaa, kama kile inachofanya."]],
          slides: [
            { title: "Nini, nani na kwa nini", bullets: ["Ni nini", "Ni ya nani", "Kwa nini waitake"] },
            { title: "Wewe unatoa ukweli", bullets: ["Jina, ukubwa, malighafi, inakotoka", "AI inafanya maneno yawe ya kirafiki"] },
            { title: "Baki mkweli", bullets: ["Kagua dhidi ya lebo au ankara", "Hakuna madai ya afya au ya \"bora zaidi\" usiyoweza kuthibitisha", "FTC: madai lazima yawe ya kweli na yawe na ushahidi"] }
          ],
          sources: [FTC_ADS],
          tryIt: "Chagua bidhaa tano dukani kwako. Andika ukweli wa kila moja, muombe AI maelezo ya maneno 30 hadi 50, na kagua kila moja dhidi ya lebo.",
          youCanNow: "kuandika maelezo ya kweli ya bidhaa kwa msaada wa AI.",
          quickCheck: [
            { objective: "O1", q: "Unakagua wapi ukweli ulio katika maelezo ya bidhaa?", options: ["Kwenye lebo au ankara", "Kwenye tovuti ya mshindani", "Chochote AI ilichoandika", "Kwenye makisio ya mteja"], answer: 0, why: "Lebo au ankara ina ukweli halisi wa bidhaa." },
            { objective: "O1", q: "AI inaandika kwamba shampuu \"inazuia nywele kunyonyoka\", lakini lebo haisemi hivyo. Utafanya nini?", options: ["Kuliacha ili uuze zaidi", "Kuongeza alama ya kuuliza", "Kuliondoa isipokuwa kama unaweza kulithibitisha", "Kuliandika kwa herufi ndogo zaidi"], answer: 2, why: "Madai lazima yawe ya kweli na yawe na ushahidi." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Vibao vya rafu, kadi za bei na matangazo ya duka",
          minutes: 4,
          goal: "Tengeneza vibao vya rafu na matangazo ya duka yaliyo wazi kwa haraka.",
          text: [
            "Vibao vinajibu maswali kabla wanunuzi hawajauliza: bei, ofa, bidhaa mpya, sera ya kurudisha bidhaa, \"tuulize kuhusu...\". Vibao vilivyo wazi vinaokoa muda wa wafanyakazi.",
            "Muombe AI maneno mafupi: \"Andika vibao vitano vya rafu kwa duka langu la vifaa vya urembo: nywele mpya za kusuka zimefika, nunua 2 upate 1 bure kwa edge control hadi Mei 31, sera yetu ya kurudisha bidhaa ni siku 14 ukiwa na risiti. Chini ya maneno 12 kila kimoja.\" Kisha visanifu kwenye Canva au kwenye hati na uvichapishe.",
            "Bei kwenye vibao lazima zilingane na mashine ya malipo. Vibao vya ofa vinahitaji tarehe halisi ya kumalizika na masharti yoyote. Kama unahudumia wateja wanaozungumza lugha nyingine, muombe AI tafsiri, kisha mtu anayeijua lugha hiyo vizuri aikague."
          ],
          steps: ["Orodhesha vibao unavyohitaji.", "Muombe AI maneno mafupi.", "Visanifu na uvichapishe.", "Kagua kwamba kila bei inalingana na mashine ya malipo.", "Mtu anayeijua lugha vizuri akague tafsiri yoyote."],
          words: [["Kibao cha rafu", "kibao kidogo kwenye rafu kinachoonyesha bei, ofa au taarifa."], ["Sera ya kurudisha bidhaa", "kanuni zako kuhusu lini wateja wanaweza kurudisha bidhaa."]],
          slides: [
            { title: "Vibao vinaokoa muda wa wafanyakazi", bullets: ["Bei, ofa na bidhaa mpya", "Sera ya kurudisha bidhaa na \"tuulize kuhusu\""] },
            { title: "AI inaandika, wewe unasanifu", bullets: ["Omba maneno mafupi, chini ya maneno 12", "Sanifu kwenye Canva au kwenye hati"] },
            { title: "Kagua kabla ya kukitundika", bullets: ["Bei inalingana na mashine ya malipo", "Tarehe ya mwisho wa ofa na masharti", "Tafsiri zimekaguliwa na mtu anayeijua lugha vizuri"] }
          ],
          tryIt: "Muombe AI vibao vitatu vya rafu kwa duka lako. Kagua kila bei dhidi ya mashine yako ya malipo, kisha uvitengeneze na uvichapishe au uvihifadhi.",
          youCanNow: "kutengeneza vibao vya rafu na matangazo ya duka yaliyo wazi na sahihi kwa msaada wa AI.",
          quickCheck: [
            { objective: "O2", q: "Kibao cha ofa kinapaswa kuonyesha nini?", options: ["Neno OFA peke yake", "Tarehe halisi ya kumalizika na masharti yoyote", "Namba ya simu ya mmiliki", "Kila bidhaa iliyo dukani"], answer: 1, why: "Kibao cha ofa kinahitaji tarehe halisi ya kumalizika na masharti yoyote ili kiwe cha kweli." },
            { objective: "O2", q: "AI imetafsiri kibao chako cha rafu kwa Kihispania. Utafanya nini kabla ya kukichapisha?", options: ["Kukichapisha mara moja", "Kuiomba AI ijikague yenyewe", "Kuondoa Kiingereza", "Mtu anayeijua lugha vizuri akikague"], answer: 3, why: "Mtu anayeijua lugha vizuri anaweza kugundua makosa ya tafsiri." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kuweka jedwali la stoki lenye viwango vya kuagiza tena",
          minutes: 6,
          goal: "Tengeneza spreadsheet ya stoki inayoonyesha cha kuagiza tena.",
          text: [
            "Bidhaa yako inayouzwa zaidi ikiisha unapoteza mauzo; stoki nyingi inayouzwa polepole inafunga pesa. Jedwali rahisi la stoki linasaidia. Safu: Bidhaa, Msambazaji, Iliyopo, Inayouzwa kwa wiki, Siku za kufika, Kiwango cha kuagiza, Agiza tena?",
            "Kiwango cha kuagiza tena ni wakati wa kuagiza upya. Kanuni rahisi: inayouzwa kwa wiki x wiki za kufika + ziada kidogo (stoki ya akiba). Ukiuza 10 kwa wiki, inachukua wiki 1 kufika, na unaweka 5 za ziada, agiza tena ukifika 15.",
            "Muombe AI msaada wa fomula: \"Kwenye Google Sheets, andika fomula inayoonyesha REORDER wakati safu C ni ndogo kuliko au sawa na safu F.\" Jibu la kawaida ni =IF(C2<=F2,\"REORDER\",\"\"). Ijaribu kwenye mistari michache kuhakikisha inafanya kazi."
          ],
          steps: ["Tengeneza safu saba.", "Jaza bidhaa zako 15 za juu.", "Kokotoa kiwango cha kuagiza tena kwa kila moja: mauzo ya wiki x wiki za kufika + stoki ya akiba.", "Muombe AI fomula ya IF ya kuonyesha cha kuagiza tena.", "Ijaribu kwenye mistari michache, na usasishe Iliyopo kila wiki."],
          words: [["Stoki (bidhaa zilizopo)", "bidhaa ulizonazo tayari kuuza."], ["Kiwango cha kuagiza tena", "kiasi kilichobaki ambacho ukifika unaagiza zaidi."], ["Stoki ya akiba", "bidhaa za ziada zinazowekwa endapo mauzo yataongezeka ghafla au mzigo utachelewa."]],
          slides: [
            { title: "Kwa nini kufuatilia stoki", bullets: ["Bidhaa ikiisha unapoteza mauzo", "Stoki nyingi inayouzwa polepole inafunga pesa"] },
            { title: "Safu za jedwali la stoki", bullets: ["Bidhaa, Msambazaji, Iliyopo", "Inayouzwa kwa wiki, Siku za kufika", "Kiwango cha kuagiza, Agiza tena?"] },
            { title: "Kiwango cha kuagiza tena", bullets: ["Mauzo ya wiki x wiki za kufika + stoki ya akiba", "Mfano: 10 x 1 + 5 = agiza tena ukifika 15"] },
            { title: "Jedwali likuonyeshe", bullets: ["=IF(C2<=F2,\"REORDER\",\"\")", "Jaribu kwenye mistari michache", "Sasisha Iliyopo kila wiki"] }
          ],
          tryIt: "Tengeneza jedwali lako la stoki lenye angalau bidhaa 15, kokotoa viwango vya kuagiza tena, na ongeza fomula ya IF inayoonyesha REORDER. Ijaribu kwa kubadilisha namba moja ya Iliyopo.",
          youCanNow: "kuweka jedwali la stoki linalokuambia wakati wa kuagiza tena.",
          quickCheck: [
            { objective: "O3", q: "Stoki ya akiba ni nini?", options: ["Stoki inayowekwa kwenye chumba kilichofungwa", "Bidhaa ambazo haziuzwi kamwe", "Bidhaa za ziada endapo mauzo yataongezeka ghafla au mzigo utachelewa", "Stoki unayoirudisha kwa msambazaji"], answer: 2, why: "Stoki ya akiba inashughulikia mambo ya kushtukiza katika mauzo au usafirishaji." },
            { objective: "O3", q: "AI imeandika fomula ya alama yako ya kuagiza tena. Utafanya nini baadaye?", options: ["Kuijaribu kwenye mistari michache kwa kubadilisha namba ya Iliyopo", "Kuiamini kwa kila bidhaa", "Kufuta fomula", "Kuinakili kwenye kila jedwali bila kukagua"], answer: 0, why: "Kujaribu fomula kwenye mistari michache kunaonyesha kama inafanya kazi." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Bidhaa, vibao na stoki",
        questions: [
          { objective: "O1", q: "Nani anatoa ukweli katika maelezo ya bidhaa?", options: ["Makisio ya AI", "Wewe, kutoka kwenye lebo au ankara", "Mshindani", "Maoni ya mteja"], answer: 1, why: "AI inaandika maneno; wewe unatoa ukweli uliokaguliwa." },
          { objective: "O1", q: "AI inaandika kwamba krimu yako ya mwili \"inatibu ukurutu\". Unafanya nini?", options: ["Kuongeza \"imehakikishwa\"", "Kuliacha", "Kuliandika kwa herufi kubwa zaidi", "Kuliondoa isipokuwa kama unaweza kulithibitisha"], answer: 3, why: "FTC inataka ushahidi kwa madai." },
          { objective: "O2", q: "Kibao cha ofa lazima kionyeshe:", options: ["Tarehe halisi ya kumalizika na masharti yoyote", "Kisionyeshe bei", "Nywila yako", "Bei ya zamani ya uongo"], answer: 0, why: "Vibao vya ofa vya kweli vina tarehe na masharti." },
          { objective: "O3", q: "Unauza 8 kwa wiki, mzigo unachukua wiki 2 kufika, stoki ya akiba ni 4. Kiwango cha kuagiza tena ni kipi?", options: ["8", "12", "14", "20"], answer: 3, why: "8 x 2 + 4 = 20." },
          { objective: "O3", q: "=IF(C2<=F2,\"REORDER\",\"\") inafanya nini?", options: ["Inajumlisha mauzo", "Inafuta mstari", "Inaonyesha REORDER wakati bidhaa iliyopo iko sawa na au chini ya kiwango cha kuagiza tena", "Inatuma oda kwa msambazaji"], answer: 2, why: "Inaonyesha bidhaa zinazohitaji kuagizwa tena." }
        ]
      }
    },
    {
      name: "Sura 2: Kusoma mauzo na kupanga ofa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kupata bidhaa zinazouzwa zaidi na zinazouzwa polepole",
          minutes: 5,
          goal: "Tumia ripoti ya mauzo na msaada wa AI kupata bidhaa za juu na za chini kwa mauzo.",
          text: [
            "Mifumo mingi ya mauzo (POS) inaweza kutoa ripoti ya mauzo kwa kila bidhaa kama faili unalofungua kwenye spreadsheet. Kama yako haiwezi, hesabu rahisi ya kila wiki kwa kila bidhaa inafaa.",
            "Panga kwa idadi iliyouzwa na kwa thamani ya mauzo kwa dola. Bidhaa zako zinazouzwa zaidi zinastahili nafasi nzuri kwenye rafu na zisiishe kamwe. Bidhaa zinazouzwa polepole zinaweza kuhitaji mahali bora, kifurushi, punguzo la bei au kuachwa.",
            "Unaweza kubandika jumla za bidhaa (bila taarifa za wateja) kwenye msaidizi wa AI: \"Hii ni mauzo ya wiki 8 kwa kila bidhaa ya duka langu la zawadi. Bidhaa gani zinapanda, zinashuka au ni za msimu? Niulize maswali gani?\" Chukulia majibu kama mawazo na uyathibitishe kwenye ripoti yako."
          ],
          steps: ["Toa ripoti ya mauzo kwa kila bidhaa au hesabu kwa mkono.", "Panga kwa idadi na kwa dola.", "Weka alama kwenye 3 zako za juu na 3 za chini.", "Muombe AI mwenendo ukitumia jumla za bidhaa tu.", "Thibitisha kila mwenendo kwenye ripoti yako."],
          words: [["POS", "point of sale (mahali pa mauzo): mfumo unaorekodi mauzo."], ["Kutoa (export)", "kuhifadhi taarifa kutoka kwenye mfumo kama faili unaloweza kufungua mahali pengine."], ["Punguzo la bei", "bei ya chini ili kuuza stoki inayouzwa polepole."]],
          slides: [
            { title: "Pata namba", bullets: ["Toa ripoti ya mauzo kwa kila bidhaa kutoka kwenye POS yako", "Au hesabu mauzo kwa kila bidhaa kila wiki"] },
            { title: "Panga kwa njia mbili", bullets: ["Kwa idadi iliyouzwa", "Kwa mauzo kwa dola", "Weka alama 3 za juu na 3 za chini"] },
            { title: "AI kwa mwenendo", bullets: ["Jumla za bidhaa tu, bila taarifa za wateja", "Zinapanda, zinashuka, ni za msimu?", "Thibitisha kwenye ripoti yako"] }
          ],
          tryIt: "Pata mauzo ya wiki 4 hadi 8 kwa kila bidhaa. Tafuta 3 zako za juu na 3 za chini, kisha muulize AI ni mwenendo gani inaouona na uthibitishe mmoja.",
          youCanNow: "kupata bidhaa zako zinazouzwa zaidi na zinazouzwa polepole na kukagua mawazo ya AI dhidi ya namba zako mwenyewe.",
          quickCheck: [
            { objective: "O4", q: "POS ni kifupi cha nini?", options: ["Bei kwenye rafu", "Point of sale (mahali pa mauzo)", "Jedwali la oda za bidhaa", "Faida au mauzo"], answer: 1, why: "POS maana yake ni point of sale, mfumo unaorekodi mauzo yako." },
            { objective: "O4", q: "Unataka AI ikusaidie kusoma mauzo yako. Utabandika nini?", options: ["Majina ya wateja na namba za kadi", "Nywila yako ya msambazaji", "Taarifa zako zote za kuingia kwenye POS", "Jumla za bidhaa tu"], answer: 3, why: "Jumla za bidhaa zinatosha, na taarifa za siri zinabaki nje ya AI." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kupanga ofa ya msimu kutokana na namba zako",
          minutes: 5,
          goal: "Panga ofa yenye bidhaa, bei, tarehe na ukaguzi wa faida.",
          text: [
            "Rejareja inaenda kwa misimu: kurudi shuleni, sikukuu, mahafali, kiangazi, sherehe za mtaani na sherehe za kitamaduni zilizo muhimu kwa wateja wako. Panga ofa mwezi mmoja kabla.",
            "Tumia namba zako: tangaza bidhaa zinazouzwa vizuri katika msimu huo, au weka bidhaa inayouzwa polepole pamoja na inayouzwa zaidi katika kifurushi. Muombe AI mawazo: \"Bidhaa yangu inayouzwa zaidi ni nywele za kusuka; inayouzwa polepole ni kofia za satin za kulalia. Nipe mawazo matatu ya vifurushi vya kurudi shuleni yanayobaki na faida.\"",
            "Kagua hesabu: bei, gharama, faida kwa kila mauzo, na ni ngapi unahitaji kuuza. Andika tarehe na masharti, na agiza stoki ya kutosha ukitumia jedwali lako la kuagiza tena."
          ],
          steps: ["Chagua msimu au tukio.", "Chagua bidhaa kutoka kwenye ripoti yako ya mauzo.", "Muombe AI mawazo ya ofa au vifurushi.", "Kagua faida kwa kila mauzo kwenye karatasi.", "Weka tarehe, masharti na agiza stoki."],
          words: [["Ofa", "punguzo au mpango maalum kwa muda uliowekwa."], ["Kifurushi", "bidhaa mbili au zaidi zinazouzwa pamoja kwa bei moja."]],
          slides: [
            { title: "Panga mwezi mmoja kabla", bullets: ["Kurudi shuleni, sikukuu, mahafali", "Sherehe za mtaani na sherehe za kitamaduni"] },
            { title: "Tumia namba zako", bullets: ["Tangaza bidhaa zinazouzwa zaidi katika msimu", "Weka inayouzwa polepole pamoja na inayouzwa zaidi"] },
            { title: "Kagua kabla ya kuanza", bullets: ["Bei, gharama na faida kwa kila mauzo", "Tarehe na masharti", "Stoki ya kutosha imeagizwa"] }
          ],
          tryIt: "Panga ofa moja kwa msimu ujao: bidhaa, bei, faida kwa kila mauzo, tarehe na kiasi cha stoki unachohitaji.",
          youCanNow: "kupanga ofa ya msimu kwa kutegemea namba zako mwenyewe za mauzo.",
          quickCheck: [
            { objective: "O5", q: "Kifurushi ni nini?", options: ["Bidhaa zinazouzwa pamoja kwa bei moja", "Sanduku la bidhaa zilizorudishwa", "Mzigo kutoka kwa msambazaji", "Aina ya kibao"], answer: 0, why: "Kifurushi kinaweka bidhaa pamoja kwa bei moja, mara nyingi inayouzwa polepole pamoja na inayouzwa zaidi." },
            { objective: "O5", q: "Unapanga ofa ya sikukuu. Utakagua nini kabla ya kuianza?", options: ["Jinsi kibao kinavyoonekana tu", "Bei ya mshindani", "Faida kwa kila mauzo na kama una stoki ya kutosha", "Kama AI inalipenda wazo"], answer: 2, why: "Ofa lazima ilete faida na iwe na stoki ya kutosha nyuma yake." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kupima ofa na kulinda duka lako",
          minutes: 5,
          goal: "Pima matokeo ya ofa na linda taarifa za duka.",
          text: [
            "Amua utakavyopima kabla ya kuanza: idadi ya bidhaa za ofa zilizouzwa, jumla ya mauzo katika tarehe hizo ukilinganisha na wiki zile zile za kabla, na faida. Msimbo wa ofa au kitufe tofauti cha POS kwa kifurushi kinarahisisha ufuatiliaji.",
            "Baadaye, muombe AI ikusaidie kuandika muhtasari mfupi kutokana na namba zako: kilichofanya kazi, kisichofanya kazi, na cha kujaribu wakati ujao. Kagua hesabu zake dhidi ya jedwali lako.",
            "Linda taarifa za duka: usibandike majina ya wateja, namba za kadi, nywila za wasambazaji au taarifa za wafanyakazi kwenye zana za AI. Jihadhari na ankara za uongo za wasambazaji na maombi ya malipo ya \"haraka\"; mpigie msambazaji kwa namba unayoijua."
          ],
          steps: ["Chagua vipimo vyako kabla ya ofa.", "Ongeza msimbo au kitufe cha POS ili kuifuatilia.", "Linganisha na wiki zile zile za kabla.", "Muombe AI msaada wa kufupisha, na kagua hesabu.", "Weka taarifa za wateja na wasambazaji nje ya AI."],
          words: [["Kipindi cha kulinganisha", "muda wa zamani unaolinganisha nao matokeo, kama wiki zile zile mwezi uliopita."], ["Msimbo wa ofa", "msimbo unaofuatilia nani alitumia ofa."]],
          slides: [
            { title: "Amua vipimo kwanza", bullets: ["Idadi ya bidhaa za ofa", "Mauzo dhidi ya wiki zile zile za kabla", "Faida"] },
            { title: "Rahisisha ufuatiliaji", bullets: ["Msimbo wa ofa au kitufe cha POS kwa kifurushi", "AI inasaidia kuandika muhtasari; wewe unakagua hesabu"] },
            { title: "Linda duka lako", bullets: ["Hakuna taarifa za wateja, kadi, wasambazaji au wafanyakazi ndani ya AI", "Kuhusu ankara, piga simu kwa wasambazaji kwa namba unazozijua"] }
          ],
          tryIt: "Kazi ya mwisho: unganisha kifurushi chako cha zana za rejareja: maelezo matano ya bidhaa, vibao vitatu vya rafu, jedwali lako la stoki lenye alama za kuagiza tena, bidhaa zako za juu na za chini, na mpango wako wa ofa pamoja na jinsi utakavyoipima.",
          youCanNow: "kuendesha na kupima ofa na kutumia AI kwa usalama katika makaratasi yote ya duka lako.",
          quickCheck: [
            { objective: "O6", q: "Unapimaje ofa?", options: ["Kwa jinsi duka lilivyoonekana na shughuli nyingi", "Kwa kulinganisha na wiki zile zile za kabla", "Kwa kuhesabu vibao vilivyochapishwa", "Kwa kuiomba AI ikisie"], answer: 1, why: "Kulinganisha na wiki zile zile za kabla kunaonyesha badiliko halisi." },
            { objective: "O6", q: "Barua pepe inasema msambazaji wako ana akaunti mpya ya benki na lazima ulipe leo. Utafanya nini?", options: ["Kulipa mara moja", "Kujibu kwa taarifa zako za kuingia benki", "Kuituma kwa wateja", "Kumpigia msambazaji kwa namba unayoijua tayari"], answer: 3, why: "Kupiga namba unayoijua kunakagua ombi la malipo la haraka kwa usalama." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kusoma mauzo na kupanga ofa",
        questions: [
          { objective: "O4", q: "POS yako haiwezi kutoa ripoti. Unaweza kufanya nini?", options: ["Kuweka hesabu rahisi ya kila wiki kwa kila bidhaa", "Kukisia", "Kumuuliza mshindani", "Kuacha kufuatilia"], answer: 0, why: "Hesabu ya mkono bado inaonyesha mwenendo." },
          { objective: "O4", q: "Nini kinaweza kusaidia bidhaa inayouzwa polepole?", options: ["Kuagiza zaidi", "Kuificha", "Kupandisha bei yake sana", "Kifurushi pamoja na bidhaa inayouzwa zaidi"], answer: 3, why: "Vifurushi vinaweza kuuza stoki inayokwenda polepole." },
          { objective: "O5", q: "Kabla ya kuanza kifurushi unapaswa kukagua:", options: ["Rangi tu", "Faida kwa kila mauzo", "Nyota yako", "Hakuna kitu"], answer: 1, why: "Ofa lazima bado zilete pesa." },
          { objective: "O6", q: "Unafuatiliaje ofa kwa urahisi?", options: ["Msimbo wa ofa au kitufe cha POS kwa ajili yake", "Kwa kumbukumbu", "Kuiomba AI ikisie", "Kuhesabu magari ya wateja"], answer: 0, why: "Misimbo na vitufe vinarekodi kila mauzo." },
          { objective: "O6", q: "Barua pepe inasema msambazaji wako amebadilisha taarifa za benki na ulipe leo. Wewe:", options: ["Unajibu kwa nywila yako", "Unalipa sasa", "Unampigia msambazaji kwa namba unayoijua", "Unaituma kwa wateja"], answer: 2, why: "Ankara za uongo za wasambazaji ni ulaghai wa kawaida." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI kwa Biashara za Rejareja",
    questions: [
      { objective: "O1", q: "Maelezo ya bidhaa yanajibu:", options: ["Nywila yako", "Ni nini, ni ya nani, kwa nini waitake", "Benki ya msambazaji", "Hakuna kitu"], answer: 1, why: "Sehemu hizo tatu zinawasaidia wanunuzi kuamua." },
      { objective: "O1", q: "Unakagua wapi ukweli wa bidhaa?", options: ["Kwa mshindani", "Kwa AI", "Kwenye chapisho la mitandao ya kijamii", "Kwenye lebo au ankara"], answer: 3, why: "Lebo na ankara zina ukweli halisi." },
      { objective: "O1", q: "FTC inasema madai ya matangazo lazima yawe:", options: ["Kwa herufi kubwa", "Ya kusisimua", "Mafupi", "Ya kweli na yenye ushahidi"], answer: 3, why: "Hicho ndicho kiwango cha FTC." },
      { objective: "O2", q: "Bei kwenye vibao vya rafu lazima:", options: ["Zizungushwe juu", "Zilingane na mashine ya malipo", "Zifichwe", "Zibadilike kila siku"], answer: 1, why: "Bei zisizolingana zinawakasirisha wateja." },
      { objective: "O2", q: "Kibao kilichotafsiriwa kinapaswa kukaguliwa na:", options: ["Mchapishaji", "Hakuna mtu", "Mtu anayeijua lugha vizuri", "Tovuti yoyote tu"], answer: 2, why: "Tafsiri za AI zinaweza kuwa na makosa." },
      { objective: "O2", q: "Kibao kizuri cha rafu ni:", options: ["Chini ya maneno kama 12", "Ukurasa mzima", "Kitupu", "Kwa herufi ndogo sana"], answer: 0, why: "Vibao vifupi vinasomwa haraka." },
      { objective: "O3", q: "Stoki ya akiba ni nini?", options: ["Bima", "Sefu iliyofungwa", "Bidhaa za ziada endapo mauzo yataongezeka ghafla au mzigo utachelewa", "Bidhaa zilizoisha muda wake"], answer: 2, why: "Inakulinda bidhaa zisiishe." },
      { objective: "O3", q: "Unauza 5 kwa wiki, mzigo wiki 2, stoki ya akiba 5. Kiwango cha kuagiza tena?", options: ["7", "10", "15", "25"], answer: 2, why: "5 x 2 + 5 = 15." },
      { objective: "O3", q: "AI ikishaandika fomula ya spreadsheet unapaswa:", options: ["Kuiamini", "Kuijaribu kwenye mistari michache", "Kuifuta", "Kuichapisha"], answer: 1, why: "Fomula zinaweza kuwa na makosa." },
      { objective: "O3", q: "Kwa nini kufuatilia stoki?", options: ["Kuwachanganya wafanyakazi", "Kwa kujifurahisha", "Kwa sababu AI inasema hivyo", "Bidhaa zisiishe mara kwa mara na kuepuka stoki nyingi inayouzwa polepole"], answer: 3, why: "Yote mawili yanakugharimu pesa." },
      { objective: "O4", q: "POS ni kifupi cha:", options: ["Point of sale (mahali pa mauzo)", "Bei ya huduma", "Risiti ya posta", "Jedwali la oda za bidhaa"], answer: 0, why: "Inarekodi mauzo." },
      { objective: "O4", q: "Kupanga kwa mauzo kwa dola kunaonyesha:", options: ["Saa za wafanyakazi", "Zipi ni nzito zaidi", "Zipi ni mpya zaidi", "Bidhaa zipi zinaleta pesa nyingi zaidi"], answer: 3, why: "Dola zinaonyesha mapato kwa kila bidhaa." },
      { objective: "O4", q: "Unapobandika mauzo kwenye AI, weka:", options: ["Namba za kadi", "Majina ya wateja", "Jumla za bidhaa tu", "Nywila za wasambazaji"], answer: 2, why: "Hakuna taarifa za siri." },
      { objective: "O5", q: "Unapaswa kupanga ofa ya msimu lini?", options: ["Siku hiyo hiyo", "Kama mwezi mmoja kabla", "Baada ya msimu", "Kamwe"], answer: 1, why: "Muda wa kuagiza stoki na kutengeneza vibao." },
      { objective: "O5", q: "Kifurushi ni nini?", options: ["Bidhaa iliyovunjika", "Kodi", "Mkopo", "Bidhaa zinazouzwa pamoja kwa bei moja"], answer: 3, why: "Vifurushi vinaunganisha bidhaa." },
      { objective: "O5", q: "Kabla ya ofa, tumia jedwali lako la kuagiza tena ili:", options: ["Kuficha bei", "Kufuta bidhaa", "Kuhakikisha una stoki ya kutosha", "Kuwalipa wafanyakazi"], answer: 2, why: "Bidhaa zikiisha zinaharibu ofa." },
      { objective: "O6", q: "Pima ofa kwa kulinganisha na:", options: ["Wiki zile zile za kabla", "Makisio ya mshindani", "Hakuna kitu", "Mwaka ujao"], answer: 0, why: "Kipindi cha kulinganisha kinaonyesha badiliko." },
      { objective: "O6", q: "AI ikiandika muhtasari wa ofa yako, wewe:", options: ["Unaamini kila namba", "Unakagua hesabu zake dhidi ya jedwali lako", "Huusomi", "Unauchapisha bila kuusoma"], answer: 1, why: "AI inaweza kukosea katika hesabu." },
      { objective: "O6", q: "Kipi kisiingie kamwe kwenye zana ya AI?", options: ["Majina ya bidhaa", "Nywila za akaunti za wasambazaji", "Jumla za kila wiki", "Majina ya misimu"], answer: 1, why: "Nywila ni siri." },
      { objective: "O5", q: "Uamuzi upi kozi hii inakuachia wewe, si AI?", options: ["Bidhaa zipi za kutangaza na kwa bei gani", "Jinsi maneno ya maelezo ya picha yanavyoandikwa", "Mawazo ya vifurushi", "Maneno ya kibao"], answer: 0, why: "AI inapendekeza; wewe unaamua kwa namba zako." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 1, 3, 6, 7, 10, 12, 13, 14, 16] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Maelezo ya bidhaa", objective: "O1", notYet: "Chini ya matano, au dai ambalo halipo kwenye lebo.", meets: "Maelezo matano mafupi na ya kweli yaliyokaguliwa dhidi ya lebo.", exceeds: "Kila moja linasema bidhaa ni nini, ni ya nani na kwa nini waitake." },
      { name: "Vibao vya rafu", objective: "O2", notYet: "Chini ya vitatu, au bei isiyolingana na mashine ya malipo.", meets: "Vibao vitatu vilivyo wazi vyenye bei zinazolingana na mashine ya malipo.", exceeds: "Vibao vya ofa vinaonyesha tarehe ya kumalizika na masharti; tafsiri zilikaguliwa." },
      { name: "Jedwali la stoki", objective: "O3", notYet: "Chini ya bidhaa 15, au hakuna alama ya kuagiza tena inayofanya kazi.", meets: "Bidhaa 15 au zaidi zenye viwango vya kuagiza tena na alama ya REORDER iliyojaribiwa.", exceeds: "Viwango vya kuagiza tena vina stoki ya akiba kwa kila bidhaa." },
      { name: "Bidhaa zinazouzwa zaidi na polepole", objective: "O4", notYet: "Hakuna orodha ya juu au ya chini, au imetokana na kukisia.", meets: "3 za juu na 3 za chini kutoka kwenye namba halisi za mauzo.", exceeds: "Mwenendo mmoja wa AI umethibitishwa katika namba, pamoja na wazo kwa bidhaa inayouzwa polepole." },
      { name: "Mpango wa ofa", objective: "O5", notYet: "Unakosa bidhaa, bei, tarehe au ukaguzi wa faida.", meets: "Bidhaa, bei, faida kwa kila mauzo, tarehe na stoki inayohitajika.", exceeds: "Unasema utakavyopimwa dhidi ya wiki zile zile za kabla." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wamiliki wanaosasisha jedwali lao la stoki kila wiki (utafiti wa kufuatilia baada ya siku 30)",
      "Wamiliki wanaoripoti kwamba bidhaa zinazouzwa zaidi ziliisha mara chache ndani ya siku 60",
      "Wamiliki wanaoendesha ofa ya msimu na kuripoti matokeo yake yaliyopimwa"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta yenye Google Sheets au Excel (simu inafaa kwa maelezo na vibao)",
      "Msaidizi wa AI wa bure: Microsoft Copilot, ChatGPT au Google Gemini",
      "Lebo au ankara za bidhaa, na mauzo ya wiki 4 hadi 8 kwa kila bidhaa kutoka kwenye mashine ya malipo au hesabu ya mkono",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Waombe wamiliki walete lebo au ankara za bidhaa na ripoti ya mauzo au hesabu ya kila wiki.",
      "Fanyeni mfano mmoja wa kiwango cha kuagiza tena pamoja ubaoni kabla wamiliki hawajatengeneza majedwali yao.",
      "Kamwe usibandike nywila za wasambazaji, majina ya wateja au taarifa za kadi kwenye AI; jumla za bidhaa zinatosha.",
      "Wakumbushe wamiliki kwamba wao, si AI, ndio wanaoamua bidhaa zipi za kutangaza na kwa bei gani.",
      "Pima kifurushi cha zana za rejareja kwa rubriki, na toa maoni kwa mstari mmoja wa Bado kwa wakati mmoja."
    ]
  }
};
