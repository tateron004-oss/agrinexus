"use strict";

// Koach Learn course (Swahili translation of veterans/veterans-ai-financial-personal.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "veterans-ai-financial-personal-sw",
  lang: "sw",
  translationOf: "veterans-ai-financial-personal",
  category: "Veterans (military)",
  name: "AI kwa Mafanikio ya Kifedha na Maisha Binafsi",
  skills: "Kutumia AI kwa usalama katika maswali ya pesa, Kutengeneza bajeti ya kiraia ya kila mwezi, Kupanga mabadiliko ya mshahara baada ya utumishi, Kutambua ulaghai wa pesa unaowalenga maveterani, Kuweka malengo na ratiba ya kila wiki, Kupata msaada rasmi wa bure kuhusu pesa",
  outcome: "kutengeneza bajeti rahisi ya kiraia ya kila mwezi na ratiba ya kila wiki kwa msaada wa msaidizi wa AI, ukitumia namba za makadirio bila maelezo ya akaunti zako, na kukagua maswali ya pesa kwa chanzo rasmi.",
  about: [
    "Kozi hii ni kwa maveterani (wanajeshi wastaafu) na wanajeshi wanaoondoka jeshini wanaotaka kusimamia pesa na maisha ya kila siku baada ya utumishi. Mshahara, makazi na ratiba vyote hubadilika unapoondoka jeshini, na mpango hufanya mabadiliko hayo kuwa rahisi.",
    "Utatumia msaidizi wa AI wa bure kama msaidizi wa kupanga: kutengeneza bajeti, kupanga mshahara utakaopoteza na utakaopata, kutambua ulaghai, kuweka malengo na kutengeneza ratiba ya kila wiki. Utajifunza hasa kile usichopaswa kamwe kuandika kwa AI, na mahali pa kupata msaada rasmi wa bure kuhusu pesa.",
    "Kozi hii haitoi ushauri wa uwekezaji. AI ni msaidizi, si mshauri wa fedha: kagua kila uamuzi wa pesa na chanzo rasmi au mtaalamu aliyehitimu. Kila somo linachukua kama dakika tano, kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Tumia msaidizi wa AI kutengeneza bajeti ya kiraia ya kila mwezi ya ukurasa mmoja kwa namba za makadirio (mapato, mahitaji, matakwa, akiba na malipo ya madeni), pamoja na mstari mmoja wa mabadiliko ya mshahara baada ya utumishi, na ratiba ya kila wiki yenye vipindi vitatu vya malengo. Hakikisha haina namba za akaunti wala taarifa binafsi, na andika swali moja la pesa utakalopeleka kwa chanzo rasmi au mshauri.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Maveterani na wanajeshi wanaoondoka jeshini wanaosimamia pesa na maisha ya kila siku baada ya utumishi, mara nyingi wakiwa na familia. Wengi wanahama kutoka mshahara wa jeshi, posho na ratiba iliyopangwa kwenda kwenye mshahara wa kiraia na ratiba yao wenyewe.",
    startingPoint: "Wanaweza kutumia simu janja au kompyuta na kikokotoo. Wengi wamewahi kupokea mshahara lakini hawajawahi kutengeneza bajeti ya kiraia kuanzia mwanzo, na wachache wametumia msaidizi wa AI kupanga mambo.",
    gap: "Mshahara, gharama za makazi na mpangilio wa kila siku hubadilika utumishi unapoisha, na maveterani hulengwa na ulaghai wa pesa. Wanafunzi wanahitaji bajeti rahisi, ratiba ya kila wiki na malengo yaliyo wazi, vilivyotengenezwa kwa msaidizi wa AI bila kutoa taarifa binafsi, na wanahitaji kujua mahali pa kupeleka maswali ya pesa ili kupata msaada rasmi wa bure.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; hakuna ujuzi wa fedha unaohitajika",
      "Vifaa: simu janja au kompyuta yenye intaneti, pamoja na kikokotoo",
      "Faragha: namba za makadirio tu; hakuna namba ya akaunti, kadi, Social Security au faili la VA katika prompt yoyote ya AI",
      "Hakuna ushauri wa uwekezaji: maamuzi ya pesa yanakaguliwa na chanzo rasmi au mtaalamu aliyehitimu",
      "Muda: masomo ya kama dakika 5 yanayoingia kati ya miadi ya kuondoka jeshini, kazi na familia"
    ],
    prerequisites: "Hakuna. Wanafunzi wapya kwa wasaidizi wa AI wanaweza kwanza kuchukua kozi \"Utangulizi wa AI na Nguvu Kazi ya Baadaye\"."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Unapokuwa na swali la pesa", action: "kumuuliza msaidizi wa AI swali hilo kwa namba za makadirio bila taarifa binafsi", standard: "bila kutoa namba ya akaunti, kadi wala kitambulisho" },
    { id: "O2", condition: "Ukitumia namba zako mwenyewe za makadirio", action: "kutengeneza jedwali la bajeti ya kiraia ya kila mwezi pamoja na msaidizi wa AI, likiwa na mstari wa gharama inayobadilika baada ya utumishi", standard: "na jumla ulizozikagua mwenyewe kwa kikokotoo" },
    { id: "O3", condition: "Ukipewa ujumbe au ofa kuhusu pesa au mafao", action: "kutambua dalili za hatari za ulaghai na kuchagua jibu salama", standard: "bila kulipa chochote wala kutoa misimbo au taarifa binafsi" },
    { id: "O4", condition: "Kwa pesa na maisha baada ya utumishi", action: "kuandika malengo matatu yenye namba na tarehe na kugawa moja kuwa hatua za kila wiki kwa msaada wa AI", standard: "kila lengo likiwa linapimika na lina tarehe" },
    { id: "O5", condition: "Ukitumia malengo yako", action: "kutengeneza ratiba ya kila wiki yenye vipindi vitatu vya malengo, pamoja na ukaguzi wa bajeti wa kila wiki", standard: "na kuikagua na kuirekebisha kila wiki" },
    { id: "O6", condition: "Ukipewa swali la pesa", action: "kuchagua chanzo rasmi au mshauri sahihi na kuandika swali hilo", standard: "ukikagua majibu ya pesa ya AI kabla ya kuyatumia" }
  ],
  chapters: [
    {
      name: "Sura 1: Pesa baada ya utumishi",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kutumia AI kwa usalama katika maswali ya pesa",
          minutes: 4,
          goal: "Muulize msaidizi wa AI swali la pesa kwa usalama, bila taarifa binafsi.",
          text: [
            "Msaidizi wa AI anaweza kueleza maneno ya pesa, kutengeneza jedwali la bajeti, kulinganisha chaguo unazompa, na kugeuza orodha iliyochanganyika ya bili kuwa mpango. Ni msaidizi wa haraka na mvumilivu.",
            "Si mshauri wa fedha. Hajui hali yako yote, anaweza kukosea kuhusu sheria na namba, na taarifa zake zinaweza kuwa za zamani. Mtumie kuelewa na kupanga; kagua maamuzi na chanzo rasmi au mshauri aliyehitimu.",
            "Usiandike kamwe kwa AI namba yako ya Social Security, namba za DD-214 (cheti cha kuachishwa jeshi) au faili la VA, namba za benki au kadi, majina ya kuingia kwenye akaunti au nywila. Tumia namba za makadirio badala yake: \"kodi ya nyumba kama $1,200\" ndiyo yote anayohitaji."
          ],
          steps: ["Amua unachotaka: maelezo, jedwali au mpango.", "Tumia namba za makadirio, bila maelezo ya akaunti.", "Uliza swali.", "Weka alama kwenye sheria, kiwango au tarehe ya mwisho yoyote ya kukagua na chanzo rasmi."],
          words: [["Bajeti", "mpango wa jinsi pesa zako zinavyoingia na kutoka kila mwezi."], ["Namba ya makadirio", "namba rahisi iliyo karibu, kama $1,200, badala ya kiasi kamili kinachohusiana na akaunti."]],
          slides: [
            { title: "AI inaweza kukusaidia", bullets: ["Kueleza maneno ya pesa", "Kutengeneza jedwali la bajeti", "Kugeuza orodha ya bili kuwa mpango"] },
            { title: "AI si", bullets: ["Mshauri wa fedha", "Sahihi kila wakati wala ya kisasa kila wakati", "Mwenye kuamua: mwenye kuamua ni wewe"] },
            { title: "Usiandike kamwe", bullets: ["Namba za SSN, DD-214 au faili la VA", "Namba za benki au kadi, majina ya kuingia, nywila", "Tumia namba za makadirio badala yake"] }
          ],
          tryIt: "Muulize msaidizi wa AI: \"Eleza tofauti kati ya hitaji na takwa katika bajeti ya kila mwezi, na mifano mitatu ya kila moja.\" Hakikisha prompt yako haina taarifa binafsi kabla ya kuituma.",
          youCanNow: "kumuuliza msaidizi wa AI maswali ya pesa kwa usalama na kujua cha kukagua mahali pengine.",
          quickCheck: [
            { objective: "O1", q: "Njia salama zaidi ya kumweleza AI kuhusu malipo ya gari lako ni ipi?", options: ["Kuandika namba ya akaunti ya mkopo wako", "Kupakia picha ya taarifa yako ya benki", "Kuandika namba ya kadi yako ili aikague", "\"Malipo ya gari kama $350 kwa mwezi\""], answer: 3, why: "Namba ya makadirio inampa AI anachohitaji bila taarifa yoyote binafsi." },
            { objective: "O1", q: "AI inaeleza sheria ya pesa na kutoa kiwango. Unafanya nini?", options: ["Kuitumia mara moja", "Kukagua sheria na kiwango hicho na chanzo rasmi", "Kumuuliza mtu usiyemjua mtandaoni", "Kupuuza majibu yote ya AI milele"], answer: 1, why: "AI inaweza kueleza, lakini sheria na viwango lazima vikaguliwe na chanzo rasmi." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kutengeneza bajeti ya kiraia ya kila mwezi",
          minutes: 6,
          goal: "Tengeneza jedwali la bajeti ya kila mwezi pamoja na msaidizi wa AI kwa namba za makadirio.",
          text: [
            "Ukiwa jeshini, baadhi ya gharama huenda zililipiwa au zililipwa kama posho, kama posho za makazi na chakula, na huduma za afya kupitia TRICARE (bima ya afya ya jeshi). Unapoondoka jeshini, nyingi kati ya hizi hubadilika au husimama. Bajeti yako ya kiraia lazima izilipie kutoka kwa mshahara au mafao yako. Kagua mshahara wako wa mwisho na mafao yako na ofisi yako ya fedha, DFAS (ofisi ya malipo ya jeshi) au VA badala ya kubahatisha.",
            "Anza na makundi manne: mapato (mshahara, mafao), mahitaji (kodi ya nyumba, umeme na maji, chakula, usafiri, bima, afya), matakwa (kula hotelini, usajili wa huduma) na akiba na malipo ya madeni. Mwombe AI atengeneze jedwali na ajumlishe kila kundi.",
            "Mfano wa prompt: \"Tengeneza jedwali la bajeti ya kila mwezi. Mapato kama $3,800. Kodi ya nyumba $1,200, umeme na maji $200, vyakula $450, malipo ya gari $350, mafuta $160, simu $70, bima $150, kula hotelini $200, usajili wa huduma $40. Onyesha jumla na kinachobaki.\""
          ],
          steps: ["Orodhesha mapato yako ya kila mwezi kwa namba za makadirio.", "Orodhesha mahitaji, matakwa, akiba na malipo ya madeni.", "Mwombe AI atengeneze jedwali lenye jumla na kinachobaki.", "Ongeza gharama zozote zilizolipiwa jeshini na sasa hazilipiwi.", "Kagua hesabu mwenyewe kwa kikokotoo."],
          words: [["Posho", "pesa inayolipwa jeshini kwa gharama kama makazi au chakula."], ["Hitaji", "gharama unayolazimika kulipa ili kuishi na kufanya kazi, kama kodi ya nyumba."], ["Takwa", "gharama unayoweza kupunguza, kama kula hotelini."]],
          slides: [
            { title: "Kinachobadilika baada ya utumishi", bullets: ["Posho kama za makazi na chakula zinaweza kusimama", "Bima ya afya inaweza kubadilika", "Kagua mshahara na mafao yako kwa njia rasmi"] },
            { title: "Makundi manne ya bajeti", bullets: ["Mapato", "Mahitaji", "Matakwa", "Akiba na malipo ya madeni"] },
            { title: "Mwache AI atengeneze jedwali", bullets: ["Toa namba za makadirio", "Omba jumla na kinachobaki", "Kagua hesabu mwenyewe"] }
          ],
          tryIt: "Mwombe msaidizi wa AI atengeneze jedwali la bajeti yako ya kila mwezi kwa namba za makadirio. Ongeza mstari mmoja wa gharama iliyolipiwa ulipokuwa jeshini. Kagua jumla kwa kikokotoo.",
          youCanNow: "kutengeneza jedwali la bajeti ya kiraia ya kila mwezi kwa namba za makadirio na kukagua jumla zake.",
          quickCheck: [
            { objective: "O2", q: "Kuna tofauti gani kati ya hitaji na takwa katika bajeti?", options: ["Hitaji ni kitu unacholazimika kulipa, kama kodi ya nyumba; takwa ni kitu unachoweza kupunguza", "Hitaji ni kitu chochote unachokipenda", "Takwa ni ghali zaidi kila wakati", "Hakuna tofauti"], answer: 0, why: "Mahitaji ni gharama za lazima; matakwa ni machaguo unayoweza kupunguza pesa zikiwa chache." },
            { objective: "O2", q: "Jedwali la bajeti la AI linasema jumla yako ni $2,950, lakini mistari inaonekana kuwa zaidi. Unafanya nini?", options: ["Kuamini jumla ya AI", "Kufuta jedwali", "Kujumlisha mistari mwenyewe kwa kikokotoo na kurekebisha jumla", "Kupandisha jumla hadi $3,000"], answer: 2, why: "AI inaweza kukosea hesabu, kwa hiyo unakagua jumla mwenyewe." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kutambua ulaghai wa pesa unaowalenga maveterani",
          minutes: 5,
          goal: "Tambua dalili za hatari za ulaghai wa pesa na ujue la kufanya.",
          text: [
            "Walaghai huwalenga maveterani kwa sababu ya mafao na pensheni. Mitego ya kawaida ni ofa za \"kununua\" pensheni yako ya baadaye au malipo ya mafao kwa pesa nyingi kwa mkupuo sasa (pension advance), watu wanaotoza pesa ili kuwasilisha madai ya VA au \"kuongeza\" kiwango chako cha ulemavu, ofa za kazi za uongo, na simu zinazojifanya kutoka VA.",
            "Consumer Financial Protection Bureau (CFPB, ofisi ya Marekani inayowalinda watu katika mambo ya pesa) inawaonya wanajeshi na maveterani kuhusu pension advance na inaeleza haki zako za pesa. Walaghai sasa wanatumia AI pia, kuandika ujumbe unaoonekana halisi na hata kuiga sauti.",
            "Dalili za hatari: wanakuharakisha, wanaomba ada ya kulipa kwanza, wanaomba kadi za zawadi au uhamisho wa pesa (wire transfer), au wanaomba msimbo uliotumwa kwenye simu yako. Simama, kata simu, na piga tena kwa namba uliyoitafuta mwenyewe kwenye va.gov au tovuti rasmi. Unaweza pia kubandika ujumbe wenye shaka kwenye AI na kuuliza \"Kuna dalili gani za hatari katika huu?\", baada ya kuondoa taarifa zako binafsi."
          ],
          steps: ["Angalia shinikizo, ada za kulipa kwanza, kadi za zawadi, uhamisho wa pesa au maombi ya msimbo.", "Simama na usilipe wala usitoe chochote.", "Tafuta namba rasmi mwenyewe na upige tena.", "Ondoa taarifa binafsi, kisha mwombe AI aonyeshe dalili za hatari.", "Ripoti ikiwa umepoteza pesa."],
          words: [["Pension advance", "ofa ya kukulipa pesa kwa mkupuo sasa kwa kubadilishana na pensheni yako ya baadaye au malipo ya mafao, mara nyingi kwa gharama kubwa sana."], ["Ulaghai", "hila ya kuiba pesa au taarifa."]],
          slides: [
            { title: "Mitego ya kawaida", bullets: ["Ofa za pension advance", "Ada za kuwasilisha au \"kuongeza\" dai la VA", "Ofa za kazi za uongo na simu za uongo za VA"] },
            { title: "Dalili za hatari", bullets: ["Wanakuharakisha", "Ada ya kulipa kwanza, kadi za zawadi au wire transfer", "Wanaomba msimbo uliotumwa kwenye simu yako"] },
            { title: "La kufanya", bullets: ["Simama. Usilipe wala usitoe chochote", "Piga tena kwa namba uliyoitafuta mwenyewe", "Mwombe AI aonyeshe dalili za hatari"] }
          ],
          sources: [{ name: "Consumer Financial Protection Bureau: Military financial lifecycle", url: "https://www.consumerfinance.gov/consumer-tools/military-financial-lifecycle/" }],
          tryIt: "Andika mfano mfupi wa ujumbe wa ulaghai unaoahidi \"kuongeza kiwango chako cha VA kwa ada\". Mwombe msaidizi wa AI aorodheshe dalili zake za hatari. Kisha andika ungefanya nini ukiupokea.",
          youCanNow: "kutambua dalili za hatari za ulaghai wa pesa unaowalenga maveterani na kujibu kwa usalama.",
          quickCheck: [
            { objective: "O3", q: "Kipi ni dalili ya hatari ya ulaghai?", options: ["Barua uliyoiomba VA ikutumie", "Taarifa ya kawaida ya kila mwezi ya benki yako", "Shinikizo la kulipa haraka, kwa kadi za zawadi au ada ya kulipa kwanza", "Fomu ya bure kwenye va.gov"], answer: 2, why: "Kukuharakisha na kuomba kadi za zawadi au ada ya kulipa kwanza ni dalili za kawaida za ulaghai." },
            { objective: "O3", q: "Ujumbe unasema mafao yako yatasimama usipotuma msimbo uliotumiwa sasa hivi. Unafanya nini?", options: ["Kutuma msimbo haraka", "Kujibu ukiuliza wao ni nani", "Kutuma nusu ya msimbo", "Usijibu; wasiliana na VA kwa namba uliyoitafuta mwenyewe"], answer: 3, why: "Ofisi halisi haziombi misimbo yako; unawasiliana nazo kwa namba uliyoitafuta mwenyewe." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Pesa baada ya utumishi",
        questions: [
          { objective: "O1", q: "Unapaswa kuandika nini kwa AI unapoomba msaada wa bajeti?", options: ["Namba ya akaunti yako ya benki", "\"Kodi ya nyumba kama $1,200\"", "Namba yako ya Social Security", "Nywila ya benki yako ya mtandaoni"], answer: 1, why: "Namba za makadirio zinampa AI anachohitaji bila taarifa binafsi." },
          { objective: "O1", q: "Katika mambo ya pesa, AI inatumika vizuri zaidi:", options: ["Kukufanyia maamuzi ya mwisho", "Kukuchagulia uwekezaji", "Kueleza, kupanga na kutengeneza mpango ambao kisha unaukagua", "Kuhifadhi nywila zako"], answer: 2, why: "AI inakusaidia kuelewa na kupanga; unakagua maamuzi na vyanzo rasmi." },
          { objective: "O2", q: "Kwa nini bajeti ya kiraia inahitaji mistari ambayo bajeti ya jeshi huenda haikuwa nayo?", options: ["Raia hawalipi kodi ya nyumba", "Kodi za serikali ni ndogo zaidi", "AI inasema hivyo", "Baadhi ya posho na gharama zilizolipiwa hubadilika au husimama baada ya utumishi"], answer: 3, why: "Gharama kama makazi huenda zililipiwa au zililipwa kama posho jeshini." },
          { objective: "O3", q: "Mtu anakupa pesa sasa kwa ajili ya malipo yako ya pensheni ya baadaye. Hii ni:", options: ["Pension advance, ambayo CFPB inaonya kuihusu", "Mshahara wa kawaida", "Mafao ya VA", "Marejesho ya kodi"], answer: 0, why: "CFPB inawaonya wanajeshi na maveterani kuhusu ofa za pension advance." },
          { objective: "O3", q: "Mpigaji simu anasema anatoka VA na anaomba msimbo uliotumwa kwenye simu yako. Wewe:", options: ["Unamsomea msimbo", "Unakata simu na kuipigia VA kwa namba uliyoitafuta mwenyewe", "Unampa SSN yako badala yake", "Unamtumia kadi ya zawadi"], answer: 1, why: "Ofisi halisi haziombi msimbo huo; piga tena kwa namba unayoijua kuwa halisi." }
        ]
      }
    },
    {
      name: "Sura 2: Malengo, ratiba na msaada halisi",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuweka malengo ya pesa na ya maisha",
          minutes: 5,
          goal: "Andika malengo matatu yaliyo wazi yenye namba na tarehe, na ugawe moja kuwa hatua kwa msaada wa AI.",
          text: [
            "Lengo hufanya kazi likiwa mahususi, linapimika na lina tarehe: \"Kuweka akiba ya $1,000 kwa dharura kufikia 31 Machi\" ni bora kuliko \"kuweka akiba zaidi\". Ndivyo ilivyo kwa malengo ya maisha: \"kumaliza kozi yangu ya cheti kufikia Juni\" au \"kukimbia mara tatu kwa wiki\".",
            "Andika malengo matatu: moja la pesa, moja la kazi au masomo, na moja la afya au familia. Kisha mwombe AI agawe moja kuwa hatua za kila wiki: \"Gawa lengo hili kuwa hatua za kila wiki: kuweka akiba ya $1,000 kufikia 31 Machi. Ninaweza kupunguza kama $60 kwa wiki kutoka kula hotelini na usajili wa huduma.\"",
            "Consumer Financial Protection Bureau ina zana za bure kwa wanajeshi, pamoja na karatasi ya kazi ya kuweka malengo. Itumie pamoja na mpango wako wa AI."
          ],
          steps: ["Andika lengo moja la pesa, moja la kazi na moja la afya au familia.", "Lipe kila moja namba na tarehe.", "Mwombe AI agawe lengo moja kuwa hatua za kila wiki.", "Weka hatua ya kwanza kwenye kalenda yako."],
          words: [["Akiba ya dharura", "pesa iliyowekwa kwa gharama za ghafla kama matengenezo ya gari."], ["Linapimika", "unaweza kulihesabu, kwa hiyo unajua limekamilika lini."]],
          slides: [
            { title: "Lengo linalofanya kazi", bullets: ["Mahususi", "Linapimika: lina namba", "Lina tarehe"] },
            { title: "Malengo matatu", bullets: ["Pesa", "Kazi au masomo", "Afya au familia"] },
            { title: "Ligawe", bullets: ["Mwombe AI hatua za kila wiki", "Weka hatua ya kwanza kwenye kalenda yako", "CFPB ina karatasi ya bure ya kuweka malengo"] }
          ],
          sources: [{ name: "Consumer Financial Protection Bureau: Military financial lifecycle (goal-setting worksheet)", url: "https://www.consumerfinance.gov/consumer-tools/military-financial-lifecycle/" }],
          tryIt: "Andika malengo yako matatu yenye namba na tarehe. Mwombe msaidizi wa AI agawe lengo lako la pesa kuwa hatua za kila wiki.",
          youCanNow: "kuandika malengo yaliyo wazi na kugawa moja kuwa hatua za kila wiki kwa msaada wa AI.",
          quickCheck: [
            { objective: "O4", q: "Nini hufanya lengo liwe wazi?", options: ["Linasikika kubwa", "Lina namba na tarehe", "Halina tarehe ya mwisho", "Mtu mwingine aliliandika"], answer: 1, why: "Namba na tarehe zinakuwezesha kuona kama umefikia lengo." },
            { objective: "O4", q: "Unataka kuweka akiba ya $600 katika miezi 3. Unampa AI nini ili aligawe kuwa hatua?", options: ["Lengo, tarehe na kiasi unachoweza kweli kukitenga kwa ajili yake", "Jina na nywila ya benki yako", "Neno \"akiba\" tu", "Namba yako ya Social Security"], answer: 0, why: "Lengo, tarehe na kiasi kinachowezekana vinamwezesha AI kutengeneza hatua za kila wiki zenye manufaa." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kutengeneza ratiba ya kila wiki",
          minutes: 5,
          goal: "Tengeneza ratiba ya kila wiki yenye vipindi vitatu vya malengo ukitumia msaidizi wa AI.",
          text: [
            "Maisha ya jeshi yalienda kwa ratiba. Maisha ya kiraia mara nyingi hayaendi hivyo, na maveterani wengi husema kupoteza mpangilio huo ni moja ya sehemu ngumu zaidi za kuondoka jeshini. Unaweza kutengeneza wako mwenyewe.",
            "Mpe AI nyakati zako zisizobadilika na malengo yako: \"Ninafanya kazi saa 8 hadi 5 Jumatatu hadi Ijumaa. Malengo yangu: kusomea cheti changu saa 4 kwa wiki, kufanya mazoezi mara 3 kwa wiki, kukagua bajeti yangu mara moja kwa wiki. Tengeneza ratiba rahisi ya kila wiki kama jedwali.\"",
            "Ifanye iwezekane. Acha muda wa mapumziko na muda wa familia. Kagua ratiba kila Jumapili na uirekebishe; mpango ni mpango hadi pale unapokutana na hali halisi, na wewe unajirekebisha."
          ],
          steps: ["Orodhesha nyakati zako zisizobadilika: kazi, shule, familia.", "Orodhesha malengo yako matatu kutoka Somo la 4.", "Mwombe AI jedwali la ratiba ya kila wiki.", "Ongeza muda wa mapumziko na muda wa familia.", "Ikague na uirekebishe kila wiki."],
          words: [["Ratiba", "mambo unayofanya kwa nyakati za kawaida kila wiki."], ["Kipindi cha muda", "muda uliowekwa kwenye kalenda yako kwa kazi moja."]],
          slides: [
            { title: "Jenga upya mpangilio wako", bullets: ["Maisha ya jeshi yalikuwa na ratiba", "Maisha ya kiraia mara nyingi hayana", "Unaweza kutengeneza yako mwenyewe"] },
            { title: "Mwombe AI jedwali la kila wiki", bullets: ["Nyakati zako zisizobadilika", "Vipindi vyako vitatu vya malengo", "Muda wa mapumziko na wa familia"] },
            { title: "Kagua kila wiki", bullets: ["Ikague kila Jumapili", "Rekebisha kisichofanya kazi", "Jirekebishe, kama katika mpango wowote"] }
          ],
          tryIt: "Mwombe msaidizi wa AI atengeneze ratiba yako ya kila wiki yenye vipindi vitatu vya malengo, pamoja na ukaguzi mmoja wa bajeti wa kila wiki. Iweke kwenye kalenda ya simu yako au uichapishe.",
          youCanNow: "kutengeneza ratiba ya kila wiki inayowezekana inayotenga muda kwa malengo yako.",
          quickCheck: [
            { objective: "O5", q: "Kipindi cha lengo katika ratiba ya kila wiki ni nini?", options: ["Wiki isiyo na mipango", "Kikumbusho cha kumlipa mlaghai", "Orodha ya kila kazi uliyowahi kufanya", "Muda uliowekwa kila wiki kufanyia kazi lengo moja"], answer: 3, why: "Kipindi cha lengo ni muda unaoutenga siku ya kawaida ili kusogeza lengo mbele." },
            { objective: "O5", q: "Uliruka vipindi viwili vya malengo wiki hii kwa sababu ya miadi. Unafanya nini?", options: ["Kukagua ratiba na kuhamisha vipindi kwenye nyakati zinazofaa", "Kuacha ratiba", "Kuongeza vipindi vitano zaidi", "Kutopanga miadi tena kamwe"], answer: 0, why: "Ratiba hufanya kazi unapoikagua kila wiki na kuirekebisha kulingana na maisha halisi." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kupata msaada rasmi wa bure kuhusu pesa",
          minutes: 5,
          goal: "Chagua chanzo rasmi sahihi kwa swali la pesa na uandike swali hilo.",
          text: [
            "Baadhi ya maswali ya pesa yanahitaji mtu au jibu rasmi: mafao na malipo ya VA, madeni, kodi za serikali, matatizo ya mkopo, machaguo ya kustaafu, au jambo lolote la kisheria. AI inaweza kukusaidia kuandika swali kwa uwazi, lakini haipaswi kuwa jibu la mwisho.",
            "Msaada rasmi wa bure ni pamoja na: VA (va.gov) kwa mafao na malipo ya VA; Military OneSource, inayotoa ushauri wa fedha wa bure kwa wanajeshi na wanafamilia wanaostahili (angalia mwongozo wake wa kustahili ili kujua kama bado unastahili baada ya kuondoka jeshini); na Consumer Financial Protection Bureau (consumerfinance.gov) kwa haki zako za pesa na malalamiko.",
            "Uwekezaji na akaunti za kustaafu ni maamuzi binafsi. Kozi hii haipendekezi yoyote. Ongea na mtaalamu aliyehitimu na anayeaminika, na uwe mwangalifu na mtu yeyote anayeahidi faida kubwa na za haraka."
          ],
          steps: ["Andika swali lako la pesa kwa sentensi moja au mbili.", "Mwombe AI akusaidie kulifanya liwe wazi, bila taarifa binafsi.", "Chagua chanzo sahihi: VA, Military OneSource au CFPB.", "Wasiliana nao kwa namba au tovuti uliyoitafuta mwenyewe."],
          words: [["Ushauri wa fedha", "msaada wa bure au wa gharama ndogo kutoka kwa mshauri aliyefunzwa ili kupanga na kutatua matatizo ya pesa."], ["CFPB", "Consumer Financial Protection Bureau: ofisi ya serikali ya Marekani inayowalinda watu katika mambo ya pesa."]],
          slides: [
            { title: "Maswali mengine yanahitaji jibu rasmi", bullets: ["Mafao na malipo ya VA", "Madeni, kodi za serikali na matatizo ya mkopo", "Maswali ya kustaafu na ya kisheria"] },
            { title: "Msaada rasmi wa bure", bullets: ["va.gov kwa mafao ya VA", "Ushauri wa fedha wa Military OneSource", "consumerfinance.gov kwa haki za pesa"] },
            { title: "Hakuna ushauri wa uwekezaji hapa", bullets: ["Uwekezaji ni uamuzi binafsi", "Ongea na mtaalamu aliyehitimu", "Jihadhari na ahadi kubwa za haraka"] }
          ],
          sources: [
            { name: "Military OneSource: Financial counseling", url: "https://www.militaryonesource.mil/benefits/financial-counseling/" },
            { name: "Consumer Financial Protection Bureau: Military financial lifecycle", url: "https://www.consumerfinance.gov/consumer-tools/military-financial-lifecycle/" },
            { name: "VA: Careers and employment (VA benefits and counseling)", url: "https://www.va.gov/careers-employment/" }
          ],
          tryIt: "Kazi ya mwisho: maliza mpango wako wa ukurasa mmoja: bajeti yako ya kila mwezi kutoka Somo la 2 yenye mstari wa mabadiliko ya mshahara, ratiba yako ya kila wiki yenye vipindi vitatu vya malengo, na swali moja la pesa pamoja na chanzo rasmi utakachokipelekea. Hakikisha hauna namba za akaunti wala taarifa binafsi.",
          youCanNow: "kuchagua chanzo rasmi sahihi cha bure kwa swali la pesa na kukipelekea swali lililo wazi.",
          quickCheck: [
            { objective: "O6", q: "Kwa nini uandike swali lako la pesa kabla ya kuwasiliana na chanzo rasmi?", options: ["Ili uweze kuliweka mtandaoni", "Ili uulize mahali sahihi kwa uwazi na upate jibu lenye manufaa", "Ili AI ilijibu badala yake", "Ili usihitaji kuuliza kamwe"], answer: 1, why: "Swali lililoandikwa kwa uwazi linamsaidia mshauri au ofisi kukupa jibu sahihi." },
            { objective: "O6", q: "Una swali kuhusu malipo yako ya VA. Unalipeleka wapi?", options: ["Kundi la mitandao ya kijamii", "Kwa msaidizi wa AI tu", "Kwa VA kupitia va.gov", "Kwa mpigaji simu aliyejitolea kusaidia"], answer: 2, why: "Maswali kuhusu malipo ya VA yanapelekwa kwa VA yenyewe." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Malengo, ratiba na msaada halisi",
        questions: [
          { objective: "O4", q: "Lengo lipi ni bora zaidi?", options: ["\"Kuweka akiba zaidi\"", "\"Kuwa bora katika pesa\"", "\"Kuweka akiba ya $1,000 kwa dharura kufikia 31 Machi\"", "\"Siku moja kununua nyumba\""], answer: 2, why: "Ni mahususi, linapimika na lina tarehe." },
          { objective: "O5", q: "Maveterani wengi hukosa mpangilio baada ya utumishi. Nini husaidia?", options: ["Kutopanga kamwe", "Kuiacha AI iendeshe maisha yako", "Kufanya kazi kila saa", "Kutengeneza ratiba ya kila wiki na kuikagua"], answer: 3, why: "Ratiba inayowezekana unayoikagua kila wiki inarudisha mpangilio." },
          { objective: "O5", q: "Ratiba yako ya kila wiki haikufanya kazi wiki hii. Wewe:", options: ["Unaikagua na kuirekebisha", "Unaacha ratiba", "Unaongeza saa zaidi za kazi", "Unafuta kalenda yako"], answer: 0, why: "Mipango hurekebishwa unapojifunza kinachofanya kazi." },
          { objective: "O6", q: "Chanzo kipi kinatoa ushauri wa fedha wa bure kwa wanajeshi?", options: ["Tangazo linalojitokeza ghafla (pop-up)", "Military OneSource", "Kampuni ya pension advance", "Chatbot yoyote ya AI"], answer: 1, why: "Military OneSource inatoa ushauri wa fedha wa bure kwa wanajeshi na wanafamilia wanaostahili." },
          { objective: "O6", q: "AI inapendekeza uwekezaji fulani. Unapaswa kufanya nini?", options: ["Kuununua sasa", "Kuwaambia marafiki wanunue", "Kuuchukulia kama haujakaguliwa na kuongea na mtaalamu aliyehitimu", "Kuweka akiba yako yote humo"], answer: 2, why: "Uwekezaji ni uamuzi binafsi; AI si mshauri wa fedha." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI kwa Mafanikio ya Kifedha na Maisha Binafsi",
    questions: [
      { objective: "O1", q: "Msaidizi wa AI anaweza kusaidia katika pesa kwa:", options: ["Kuhifadhi nywila zako", "Kueleza maneno na kutengeneza jedwali la bajeti", "Kuhakikisha faida", "Kukuwasilishia dai lako la VA"], answer: 1, why: "Kueleza na kupanga ni kazi salama na zenye manufaa kwa AI." },
      { objective: "O1", q: "Kipi ni salama kuandika kwa AI?", options: ["Namba yako ya DD-214", "Namba ya kadi yako", "Nywila yako", "\"Vyakula kama $450 kwa mwezi\""], answer: 3, why: "Namba za makadirio bila maelezo ya akaunti ni salama." },
      { objective: "O1", q: "Majibu ya pesa ya AI kuhusu sheria na viwango yanapaswa:", options: ["Kukaguliwa na chanzo rasmi", "Kuaminiwa kwa sababu yanasikika na uhakika", "Kuwekwa mtandaoni", "Kupuuzwa kabisa"], answer: 0, why: "AI inaweza kukosea au kuwa na taarifa za zamani kuhusu sheria na viwango." },
      { objective: "O2", q: "Bajeti ni:", options: ["Mkopo", "Fomu ya kodi", "Mpango wa pesa zinazoingia na kutoka kila mwezi", "Akaunti ya benki"], answer: 2, why: "Bajeti inapanga mapato na matumizi." },
      { objective: "O2", q: "Kipi ni hitaji?", options: ["Usajili wa kutazama video mtandaoni", "Kodi ya nyumba", "Kula hotelini", "Mchezo mpya wa video"], answer: 1, why: "Kodi ya nyumba ni gharama unayolazimika kulipa ili kuishi." },
      { objective: "O2", q: "Baada ya kuondoka jeshini, ni gharama zipi huenda sasa ukazilipa mwenyewe?", options: ["Hakuna", "Tiketi za sinema tu", "Zawadi tu", "Gharama zilizolipiwa zamani au zilizolipwa kama posho, kama makazi"], answer: 3, why: "Posho na gharama zilizolipiwa zinaweza kubadilika au kusimama baada ya utumishi." },
      { objective: "O2", q: "Unapaswa kuthibitisha mshahara wako wa mwisho na mafao yako wapi?", options: ["Ofisi yako ya fedha, DFAS au VA", "Chapisho la mitandao ya kijamii", "Kubahatisha kwa AI", "Ujumbe kutoka kwa mtu usiyemjua"], answer: 0, why: "Ofisi rasmi zina namba zako halisi." },
      { objective: "O2", q: "Baada ya AI kutengeneza jedwali la bajeti yako, unapaswa:", options: ["Kuamini jumla", "Kukagua hesabu mwenyewe", "Kulituma kwa watu usiowajua", "Kuongeza jina na nywila ya benki yako"], answer: 1, why: "AI inaweza kukosea hesabu; kagua kwa kikokotoo." },
      { objective: "O3", q: "Ofa ya \"pension advance\" ni:", options: ["Mpango wa VA", "Marejesho ya kodi", "Pesa kwa mkupuo sasa kwa ajili ya malipo yako ya baadaye, mara nyingi kwa gharama kubwa sana", "Pesa za bure"], answer: 2, why: "CFPB inaonya kuhusu ofa hizi." },
      { objective: "O3", q: "Mtu anatoza ada ya kulipa kwanza ili \"kuongeza kiwango chako cha VA\". Hii ni:", options: ["Kawaida", "Lazima", "Sheria ya VA", "Dalili ya hatari ya ulaghai"], answer: 3, why: "Ada za kulipa kwanza na ahadi ni dalili za kawaida za ulaghai." },
      { objective: "O3", q: "Ujumbe unakuharakisha ulipe kwa kadi za zawadi. Wewe:", options: ["Unasimama na hulipi", "Unalipa haraka", "Unatoa SSN yako", "Unawapa msimbo"], answer: 0, why: "Kuharakishwa na kadi za zawadi ni dalili za kawaida za ulaghai." },
      { objective: "O3", q: "Kabla ya kubandika ujumbe wenye shaka kwenye AI, unapaswa:", options: ["Kuongeza namba ya akaunti yako", "Kuondoa taarifa zako binafsi", "Kuwatumia marafiki", "Kumjibu aliyeutuma"], answer: 1, why: "Ondoa taarifa binafsi, kisha mwombe AI atambue dalili za hatari." },
      { objective: "O4", q: "Lengo zuri lina:", options: ["Halina tarehe", "Halina namba", "Namba na tarehe", "Hisia tu"], answer: 2, why: "Malengo mahususi, yanayopimika na yenye tarehe hutimizwa." },
      { objective: "O4", q: "Ofisi ipi inatoa karatasi ya bure ya kuweka malengo kwa wanajeshi?", options: ["Kampuni ya pension advance", "Muuzaji wa magari", "App ya crypto", "Consumer Financial Protection Bureau"], answer: 3, why: "Ukurasa wa pesa za jeshi wa CFPB una kiungo cha karatasi ya kuweka malengo." },
      { objective: "O4", q: "Unapomwomba AI agawe lengo kuwa hatua, jumuisha:", options: ["Lengo, tarehe na kiasi unachoweza kweli kukitenga kwa ajili yake", "Nywila ya benki yako", "Namba yako ya Social Security", "Hakuna kitu"], answer: 0, why: "Maelezo yaliyo wazi huleta mpango unaowezekana." },
      { objective: "O5", q: "Ratiba ya kila wiki inapaswa kuwa na:", options: ["Kazi tu", "Vipindi vya malengo pamoja na muda wa mapumziko na wa familia", "Hakuna mapumziko", "Muda wa skrini tu"], answer: 1, why: "Ratiba inayowezekana inasawazisha malengo na mapumziko." },
      { objective: "O5", q: "Unapaswa kukagua ratiba yako mara ngapi?", options: ["Kamwe", "Mara moja kwa mwaka", "Kila wiki", "Mambo yanapoharibika tu"], answer: 2, why: "Ukaguzi wa kila wiki unakuwezesha kurekebisha kisichofanya kazi." },
      { objective: "O6", q: "Mahali sahihi kwa swali kuhusu malipo yako ya VA ni wapi?", options: ["Tangazo linalojitokeza ghafla (pop-up)", "Jukwaa lolote la mtandaoni", "Chatbot ya AI tu", "VA kupitia va.gov"], answer: 3, why: "VA ndiyo chanzo rasmi cha mafao ya VA." },
      { objective: "O6", q: "Je, kozi hii inapendekeza uwekezaji?", options: ["Hapana; ongea na mtaalamu aliyehitimu", "Ndiyo, crypto", "Ndiyo, hisa yoyote", "Ndiyo, pension advance"], answer: 0, why: "Kozi hii haitoi ushauri wa uwekezaji." },
      { objective: "O6", q: "Mtu anaahidi faida kubwa na za haraka za uwekezaji. Unapaswa:", options: ["Kuwekeza mara moja", "Kuwa mwangalifu na kukagua na mtaalamu aliyehitimu", "Kumpa jina na nywila ya akaunti yako", "Kukopa pesa ili kuwekeza"], answer: 1, why: "Ahadi kubwa za haraka ni dalili ya hatari." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi amepiga hatua kiasi gani
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [1, 3, 5, 9, 10, 12, 15, 17, 18] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Bajeti ya kila mwezi", objective: "O2", notYet: "Mapato, mahitaji, matakwa, akiba au malipo ya madeni hayapo, au jumla si sahihi.", meets: "Sehemu zote tano zipo kwa namba za makadirio, na jumla zilikaguliwa kwa kikokotoo.", exceeds: "Mwanafunzi anaweza kusema ni takwa lipi angepunguza kwanza pesa zikiwa chache." },
      { name: "Mstari wa mabadiliko ya mshahara", objective: "O2", notYet: "Hakuna mstari wa gharama au mshahara unaobadilika baada ya utumishi.", meets: "Mstari mmoja unaonyesha gharama iliyolipiwa jeshini au mabadiliko ya mshahara baada ya utumishi.", exceeds: "Mwanafunzi ameandika mahali alipothibitisha mshahara wake wa mwisho au mafao." },
      { name: "Ratiba ya kila wiki", objective: "O5", notYet: "Ratiba ina vipindi vya malengo chini ya vitatu au haina ukaguzi wa bajeti.", meets: "Vipindi vitatu vya malengo, pamoja na ukaguzi wa bajeti wa kila wiki, na muda wa mapumziko na wa familia.", exceeds: "Ratiba iko kwenye kalenda ya simu au imechapishwa, na siku maalum ya kuikagua." },
      { name: "Hakuna taarifa binafsi", objective: "O1", notYet: "Mpango au prompt ina namba ya akaunti, kadi au kitambulisho.", meets: "Hakuna namba za akaunti wala taarifa binafsi mahali popote.", exceeds: "Mwanafunzi anaweza kuonyesha prompt za makadirio alizotumia." },
      { name: "Swali kwa chanzo rasmi", objective: "O6", notYet: "Hakuna swali la pesa, au hakuna chanzo kilichotajwa.", meets: "Swali moja la pesa lililo wazi na chanzo rasmi au mshauri sahihi kwa swali hilo.", exceeds: "Mwanafunzi amepanga miadi au amewasiliana na chanzo hicho." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaoripoti bado kutumia bajeti yao na ratiba ya kila wiki siku 30 baadaye (utafiti wa kufuatilia)",
      "Wanafunzi wanaowasiliana na chanzo rasmi cha bure cha pesa, kama Military OneSource au VA, ndani ya siku 30",
      "Wanafunzi wanaoripoti kutambua na kuepuka ujumbe au ofa ya ulaghai"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu janja au kompyuta yenye intaneti, na kikokotoo",
      "Msaidizi wa AI wa bure: ChatGPT, Microsoft Copilot au Google Gemini",
      "Karatasi, app ya maelezo au spreadsheet (lahajedwali) kwa bajeti, na kalenda ya simu kwa ratiba",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Kabla ya zoezi lolote, onyesha jinsi ya kutumia namba za makadirio na uwakumbushe wanafunzi wasiandike kamwe namba za akaunti, kadi, Social Security au faili la VA kwa AI.",
      "Usitoe ushauri wa uwekezaji; peleka maamuzi ya pesa kwa Military OneSource, VA au mtaalamu aliyehitimu.",
      "Tumia ujumbe wa ulaghai wa kubuni darasani; usiwaombe kamwe wanafunzi kushiriki ujumbe halisi wenye taarifa binafsi.",
      "Pima mpango wa mwisho wa ukurasa mmoja kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati.",
      "Wenzi wa ndoa au wanafamilia wanaweza kujiunga na somo la bajeti mwanafunzi akitaka."
    ]
  }
};
