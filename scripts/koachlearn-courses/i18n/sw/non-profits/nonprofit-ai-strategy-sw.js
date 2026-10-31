"use strict";

// Koach Learn course (Swahili translation of non-profits/nonprofit-ai-strategy.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "nonprofit-ai-strategy-sw",
  lang: "sw",
  translationOf: "nonprofit-ai-strategy",
  category: "Non Profits",
  name: "Kujenga Mkakati wa AI kwa Shirika Lako Lisilo la Faida",
  skills: "Kupata kazi zinazofaa AI, Kupanga mawazo kwa thamani na hatari, Kuandika sera ya matumizi ya AI, Kupanga majaribio madogo, Kupima matokeo na kuripoti kwa bodi",
  outcome: "kuandika mpango wa AI wa ukurasa mmoja kwa shirika lako lisilo la faida unaotaja kazi tatu ambazo AI itasaidia, sheria ambazo wafanyakazi na wajitolea lazima wafuate, majaribio ya siku 30 yenye msimamizi mmoja, na jinsi utakavyopima kama yalifanikiwa.",
  about: [
    "Kozi hii ni kwa wakurugenzi watendaji, wachungaji, wajumbe wa bodi, wasimamizi wa programu na viongozi wa wajitolea wanaotaka kutumia AI kwa makusudi, si kwa bahati.",
    "Utaona muda wa timu yako unakwenda wapi, utachagua kazi ambazo AI inasaidia zaidi kwa hatari ndogo zaidi, utaandika sheria rahisi zinazolinda wafadhili na watu mnaowahudumia, na utapanga jaribio dogo unaloweza kuripoti kwa bodi yako.",
    "Kila somo linachukua kama dakika tano na linaisha kwa kazi inayojenga sehemu moja ya mpango wako. Kufikia Somo la 6 utakuwa na mpango kamili wa AI wa ukurasa mmoja. Jaribio la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Andika mpango wa AI wa ukurasa mmoja kwa shirika lako wenye sehemu tano: (1) dhamira yenu kwa sentensi moja, (2) kazi tatu ambazo AI itasaidia, zilizopangwa kwa thamani na hatari, (3) angalau sheria tano za kutumia AI, pamoja na sheria za faragha, (4) majaribio ya siku 30 yenye msimamizi mmoja, zana moja na tarehe ya kuanza, na (5) vipimo viwili utakavyoripoti kwa bodi yako.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wakurugenzi watendaji, wachungaji, wajumbe wa bodi, wasimamizi wa programu na viongozi wa wajitolea wa mashirika yasiyo ya faida na ya kidini wanaotaka kutumia AI kwa makusudi, si kwa bahati.",
    startingPoint: "Wanaongoza timu na wanaijua vizuri dhamira na programu zao. Baadhi ya wafanyakazi na wajitolea tayari wanatumia zana za AI wenyewe, lakini shirika halina mpango wala sheria za pamoja.",
    gap: "Bila mpango, matumizi ya AI yametawanyika: yanaweza kuweka hatarini taarifa za wafadhili au za wateja, au kukosa kazi ambazo AI ingesaidia dhamira zaidi. Viongozi wanahitaji mpango wa ukurasa mmoja unaochagua kazi sahihi, unaoweka sheria, unaojaribu kwa usalama na unaoripoti matokeo kwa bodi.",
    constraints: [
      "Bajeti ndogo: pendelea AI iliyo tayari ndani ya zana ambazo shirika linazo",
      "Viongozi wana muda mfupi, kwa hiyo kila somo ni kama dakika 5",
      "Faragha: taarifa za wafadhili, wajitolea na wateja haziingii kwenye AI; sheria za ziada zinaweza kuhusu taarifa za afya, za watoto au za kisheria",
      "AI kamwe haiamui nani anapata huduma, nani anaajiriwa au nani anakataliwa",
      "Idhini na usimamizi wa bodi"
    ],
    prerequisites: "Kozi \"Utangulizi wa AI kwa Mashirika Yasiyo ya Faida\", au uzoefu fulani wa kutumia msaidizi wa AI."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa dhamira ya shirika lako", action: "kueleza bodi au uongozi wako kwa nini shirika lako linahitaji mpango rahisi wa AI", standard: "ukianza na dhamira, si na zana" },
    { id: "O2", condition: "Baada ya kuuliza wafanyakazi na wajitolea ni nini kinachokula wiki yao", action: "kuorodhesha kazi zenu zinazojirudia na kutambua zipi AI inaweza kusaidia na zipi zinabaki kwa watu", standard: "kila uamuzi kuhusu watu ukibaki kwa watu" },
    { id: "O3", condition: "Ukipewa orodha yako ya kazi zinazofaa AI", action: "kuipa kila kazi alama kutoka 1 hadi 3 kwa thamani na hatari na kuchagua tatu za juu", standard: "kazi zenye thamani kubwa na hatari ndogo zikiwa kwanza" },
    { id: "O4", condition: "Kwa wafanyakazi na wajitolea wako", action: "kuandika angalau sheria tano zilizo wazi za kutumia AI, pamoja na sheria za faragha", standard: "fupi kiasi cha kutosha ukurasa mmoja na rahisi kwa mjitolea mpya" },
    { id: "O5", condition: "Ukipewa moja ya kazi zako tatu za juu", action: "kupanga majaribio ya siku 30 yenye zana moja, msimamizi mmoja, tarehe ya kuanza na kipimo cha mwanzo", standard: "kipimo cha mwanzo kikiwa kimepimwa kabla ya kuanza" },
    { id: "O6", condition: "Mwishoni mwa majaribio", action: "kulinganisha vipimo viwili na kipimo cha mwanzo na kuandika taarifa ya sentensi tano kwa bodi", standard: "yenye uamuzi wazi wa kuendelea, kubadilisha au kusimamisha" }
  ],
  chapters: [
    {
      name: "Sura 1: Kuchagua mahali AI inaposaidia",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kwa nini shirika lisilo la faida linahitaji mpango wa AI",
          minutes: 4,
          goal: "Eleza bodi au uongozi wako kwa nini shirika lako linahitaji mpango rahisi wa AI.",
          text: [
            "Huenda wafanyakazi na wajitolea wako tayari wanatumia zana za AI wenyewe, bila sheria za pamoja. Hilo linaweza kuokoa muda, lakini pia linaweza kuweka hatarini taarifa za wafadhili au za wateja, au kutoa maandishi yasiyosikika kama ninyi.",
            "Mpango wa AI ni hati fupi inayosema AI ni ya nini katika shirika lenu, si ya nini, nani anaamua, na mtakaguaje kwamba inasaidia dhamira yenu.",
            "Mpango mzuri unaanza na dhamira, si na zana. Swali si \"Tununue AI ipi?\" bali \"Timu yetu inapoteza muda wapi ambao ungeweza kurudi kwa watu tunaowahudumia?\""
          ],
          words: [["Mpango wa AI", "hati fupi inayosema jinsi shirika lako litakavyotumia na halitatumia AI."], ["Dhamira", "lengo ambalo shirika lako lipo kulitimiza."], ["Mdau", "yeyote anayeguswa na kazi yenu: wateja, wafadhili, wajitolea, wafanyakazi, bodi."]],
          slides: [
            { title: "Kwa nini kupanga?", bullets: ["Huenda watu tayari wanatumia AI bila sheria", "Faragha na uaminifu viko hatarini", "Mpango unageuza matumizi yaliyotawanyika kuwa msaada halisi"] },
            { title: "Mpango wa AI unasema", bullets: ["AI ni ya nini, na si ya nini", "Nani anaamua", "Mtakaguaje kwamba inasaidia"] },
            { title: "Anza na dhamira", bullets: ["Si \"Zana ipi?\"", "Bali \"Tunapoteza muda wapi?\"", "Rudisha muda huo kwa watu mnaowahudumia"] }
          ],
          tryIt: "Andika dhamira yenu kwa sentensi moja juu ya ukurasa mtupu wenye kichwa \"Mpango Wetu wa AI\". Chini yake, andika sentensi moja kuhusu kwa nini shirika lenu linahitaji mpango sasa.",
          youCanNow: "kueleza kwa nini shirika lisilo la faida linahitaji mpango wa AI na kuuanza kutoka kwa dhamira yenu.",
          quickCheck: [
            { objective: "O1", q: "Mpango wa AI unasema nini?", options: ["AI ni ya nini, si ya nini, nani anaamua na mtakaguaje kwamba inasaidia", "Kampuni ipi ya AI ya kuwekeza", "Nywila ya kila mfanyakazi", "Bei ya zana za AI tu"], answer: 0, why: "Mpango unasema AI ni ya nini na si ya nini, nani anaamua na mnakaguaje kwamba inasaidia dhamira." },
            { objective: "O1", q: "Mjumbe wa bodi anauliza, \"Tununue AI ipi?\" Unajibuje?", options: ["Nunueni inayojulikana zaidi", "Tuanze kwa kuuliza timu yetu inapoteza muda wapi ambao ungerudi kwa watu tunaowahudumia", "Nunueni kila zana tuone", "Tusubiri mashirika mengine yaamue"], answer: 1, why: "Mpango mzuri unaanza na dhamira, si na zana." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kuona muda wa timu yako unakwenda wapi",
          minutes: 5,
          goal: "Orodhesha kazi za shirika lako zinazojirudia na utambue zile ambazo AI inaweza kusaidia.",
          text: [
            "AI inasaidia zaidi kazi zinazojirudia, zenye maandishi mengi au upangaji mwingi, na zinazofuata mtindo mmoja. Mifano: vikumbusho vya kila wiki kwa wajitolea, barua za shukrani kwa wafadhili, rasimu za jarida, kumbukumbu za mikutano, muhtasari wa ripoti za ruzuku, na kujibu maswali yale yale kutoka kwa umma.",
            "AI haipaswi kufanya maamuzi kuhusu watu: nani anapata huduma, nani anaajiriwa, au nani anakataliwa. Maamuzi hayo yanahitaji busara ya mtu, haki na kujali.",
            "Waulize watu watatu au wanne katika timu yako, pamoja na mjitolea mmoja, ni kazi gani zinazokula wiki yao. Utashangaa utakachojifunza."
          ],
          steps: ["Orodhesha kazi kumi ambazo timu yako inafanya kila wiki au kila mwezi.", "Kando ya kila moja, andika takriban inachukua saa ngapi.", "Weka alama kwenye kazi zinazojirudia na zenye kuandika, kupanga au kufupisha.", "Futa kwa mstari kazi zinazoamua jambo kuhusu mtu."],
          words: [["Kazi inayojirudia", "kazi inayofanywa kwa njia ile ile tena na tena, kama vikumbusho vya kila wiki."], ["Busara ya mtu", "maamuzi ambayo mtu anafanya kwa kujali, kwa haki na kwa kuielewa hali."]],
          slides: [
            { title: "Kazi zinazofaa AI", bullets: ["Zinajirudia mara nyingi", "Kuandika, kupanga au kufupisha kwingi", "Zinafuata mtindo mmoja"] },
            { title: "Mifano ya mashirika yasiyo ya faida", bullets: ["Vikumbusho kwa wajitolea na shukrani kwa wafadhili", "Rasimu za jarida na kumbukumbu za mikutano", "Majibu ya maswali ya kawaida ya umma"] },
            { title: "Ziache kwa watu", bullets: ["Nani anapata huduma", "Nani anaajiriwa au anakataliwa", "Chochote kinachohitaji kujali na haki"] }
          ],
          tryIt: "Tengeneza orodha ya kazi kumi pamoja na saa zake kwa shirika lako. Weka alama kwenye zinazofaa AI na futa yoyote inayoamua kuhusu watu.",
          youCanNow: "kuona kazi za timu yako zinazojirudia na kuchagua kazi zinazofaa AI.",
          quickCheck: [
            { objective: "O2", q: "AI inasaidia zaidi aina gani ya kazi?", options: ["Maamuzi kuhusu nani anapata huduma", "Uchaguzi wa kuajiri", "Kazi zinazojirudia, zenye kuandika au kupanga, na zinazofuata mtindo", "Mazungumzo ya huduma ya kichungaji"], answer: 2, why: "AI inasaidia zaidi kazi za kuandika na kupanga zinazojirudia na kufuata mtindo." },
            { objective: "O2", q: "Mtu anapendekeza kutumia AI kuamua familia zipi zijiunge na programu ya chakula. Unasema nini?", options: ["Ndiyo, ni haraka zaidi", "Ndiyo, kama AI itajieleza", "Kwa familia mpya tu", "Hapana; maamuzi kuhusu watu yanahitaji busara ya mtu"], answer: 3, why: "AI haipaswi kufanya maamuzi kuhusu nani anapata huduma." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kupanga mawazo kwa thamani na hatari",
          minutes: 5,
          goal: "Panga mawazo yako ya AI na uchague matatu ya juu ya kuanza nayo.",
          text: [
            "Kwa kila kazi inayofaa AI, uliza maswali mawili. Thamani: tutapata muda au ubora kiasi gani? Hatari: nini kinaweza kwenda vibaya, na kingekuwa kibaya kiasi gani?",
            "Kazi zenye hatari ndogo na thamani kubwa zinakuja kwanza, kwa mfano kuandika rasimu za vikumbusho kwa wajitolea kutokana na taarifa za tukio zilizo wazi kwa umma. Kazi zenye hatari kubwa, kama chochote chenye kumbukumbu za kesi za wateja au taarifa za afya, zinasubiri hadi muwe na sheria imara na zana iliyoidhinishwa na salama, au zinaachwa nje ya orodha.",
            "Ipe kila kazi alama kutoka 1 (chini) hadi 3 (juu). Anza na thamani kubwa na hatari ndogo. Kazi tatu nzuri ni bora kuliko kumi zilizofanywa nusu."
          ],
          steps: ["Ipe kila kazi alama ya thamani kutoka 1 hadi 3.", "Ipe kila kazi alama ya hatari kutoka 1 hadi 3.", "Panga: thamani kubwa na hatari ndogo kwanza.", "Chagua tatu zako za juu."],
          words: [["Thamani", "muda, pesa au ubora kiasi gani badiliko lingeleta."], ["Hatari", "nini kinaweza kwenda vibaya na kingeleta madhara kiasi gani."]],
          slides: [
            { title: "Maswali mawili kwa kila kazi", bullets: ["Thamani: tunapata nini?", "Hatari: nini kinaweza kwenda vibaya?"] },
            { title: "Alama 1 hadi 3", bullets: ["Thamani kubwa + hatari ndogo = anza hapa", "Hatari kubwa = subiri sheria au iache"] },
            { title: "Mifano", bullets: ["Hatari ndogo: vikumbusho kwa wajitolea kutoka taarifa za tukio za umma", "Hatari kubwa: chochote chenye kumbukumbu za kesi za wateja"] },
            { title: "Chagua tatu", bullets: ["Tatu zilizofanywa vizuri ni bora kuliko kumi nusu"] }
          ],
          tryIt: "Zipe kazi ulizowekea alama alama za thamani na hatari. Andika tatu zako za juu chini ya kichwa \"Mahali AI itasaidia\" katika mpango wako.",
          youCanNow: "kupanga mawazo ya AI kwa thamani na hatari na kuchagua matatu ya kuanza nayo.",
          quickCheck: [
            { objective: "O3", q: "Katika somo hili, unatumia kipimo gani kutoa alama za thamani na hatari?", options: ["1 (chini) hadi 3 (juu)", "1 hadi 100", "Ndiyo au hapana tu", "A hadi F"], answer: 0, why: "Ipe kila moja alama kutoka 1 (chini) hadi 3 (juu)." },
            { objective: "O3", q: "Una mawazo kumi ya AI. Unafanya nini?", options: ["Kuanza yote kumi kwa wakati mmoja", "Kuchagua kama matatu yenye thamani kubwa na hatari ndogo", "Kuchagua matatu yenye hatari kubwa zaidi", "Kumwacha kila mfanyakazi achague moja"], answer: 1, why: "Kazi tatu nzuri ni bora kuliko kumi zilizofanywa nusu." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kuchagua mahali AI inaposaidia",
        questions: [
          { objective: "O1", q: "Mpango wa AI wa shirika lisilo la faida unapaswa kuanzia wapi?", options: ["Dhamira", "Zana mpya zaidi", "Bei ya chini zaidi", "Tovuti ya mshindani"], answer: 0, why: "Mpango unaanza na dhamira na mahali ambapo muda ungeweza kurudi kwa watu mnaowahudumia." },
          { objective: "O2", q: "Kazi ipi inafaa AI zaidi?", options: ["Kuamua nani anapata msaada wa chakula", "Kuandika rasimu za vikumbusho vya kila wiki kwa wajitolea", "Kuchagua wafanyakazi wa kuajiri", "Kumkataa mteja"], answer: 1, why: "Kazi za kuandika zinazojirudia zinafaa AI; maamuzi kuhusu watu yanabaki kwa watu." },
          { objective: "O3", q: "Kazi ina alama ya thamani kubwa na hatari ndogo. Unafanya nini?", options: ["Kuiacha", "Kusubiri miaka mitano", "Kuiweka karibu na juu ya orodha yako", "Kuipa bodi iiandike"], answer: 2, why: "Kazi zenye thamani kubwa na hatari ndogo zinakuja kwanza." },
          { objective: "O3", q: "Kazi inahusu taarifa za afya za wateja. Unapaswa kuipangaje?", options: ["Hatari ndogo kabisa", "Ifanye kwanza", "Iweke wazi kwa umma", "Hatari kubwa: subiri sheria imara na zana salama, au iache"], answer: 3, why: "Taarifa nyeti za wateja ni hatari kubwa." },
          { objective: "O2", q: "Kwa nini kuwauliza wajitolea na wafanyakazi ni nini kinachokula wiki yao?", options: ["Kupata kazi halisi zinazojirudia", "Kumtafuta wa kulaumiwa", "Kupunguza wajitolea", "Inatakiwa na sheria"], answer: 0, why: "Watu wanaofanya kazi wanajua muda unakwenda wapi." }
        ]
      }
    },
    {
      name: "Sura 2: Sheria, majaribio na matokeo",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuandika sheria rahisi za AI",
          minutes: 5,
          goal: "Andika angalau sheria tano zilizo wazi za jinsi wafanyakazi na wajitolea wako wanavyotumia AI.",
          text: [
            "Sheria zinafanya AI iwe salama kutumia. Ziwe fupi kiasi cha kutosha ukurasa mmoja na rahisi kiasi kwamba mjitolea mpya anaweza kuzifuata.",
            "Sheria kuu ambazo mashirika mengi yasiyo ya faida yanahitaji: tumia zana zilizoidhinishwa tu; kamwe usibandike taarifa binafsi za wafadhili, wajitolea au wateja; mtu anakagua kila kitu kabla hakijatumwa au kuchapishwa; kagua kila ukweli na kila namba; kuwa mkweli kwamba AI ilisaidia pale inapohusika; na AI kamwe haiamui nani anapata huduma.",
            "Mashirika ya kidini yanaweza kuongeza sheria kwamba mahubiri, maombi au huduma ya kichungaji yanabaki kuwa ya mtu binafsi. Muulize wakili au kampuni yenu ya bima kama mnashughulikia taarifa za afya, za watoto au za kisheria, kwa sababu sheria za ziada zinaweza kuhusika."
          ],
          steps: ["Orodhesha zana za AI zilizoidhinishwa.", "Andika sheria ya faragha: nini kamwe hakiingii kwenye AI.", "Andika sheria ya ukaguzi: nani anakagua kabla chochote hakijatoka.", "Andika sheria ya maamuzi: AI kamwe haiamui kuhusu watu.", "Ongeza sheria zozote ambazo dhamira yenu inahitaji."],
          words: [["Sera ya matumizi ya AI", "sheria zilizoandikwa za jinsi watu katika shirika lenu wanavyoweza kutumia AI."], ["Zana iliyoidhinishwa", "zana ya AI ambayo viongozi wenu wameikagua na kuiruhusu."]],
          slides: [
            { title: "Sheria ziwe fupi", bullets: ["Ukurasa mmoja", "Rahisi kwa mjitolea mpya"] },
            { title: "Sheria kuu", bullets: ["Zana zilizoidhinishwa tu", "Hakuna taarifa binafsi za wafadhili au wateja", "Mtu anakagua kabla hakijatoka", "Kagua kila ukweli na kila namba"] },
            { title: "Sheria zaidi", bullets: ["AI kamwe haiamui nani anapata huduma", "Kuwa mkweli AI iliposaidia", "Ongeza sheria ambazo dhamira yenu inahitaji"] },
            { title: "Pata ushauri", bullets: ["Taarifa za afya, za watoto au za kisheria: uliza wakili au kampuni ya bima"] }
          ],
          tryIt: "Andika angalau sheria tano chini ya kichwa \"Sheria zetu za AI\" katika mpango wako. Msomee mjitolea mmoja na umuulize kama kuna kitu kisicho wazi.",
          youCanNow: "kuandika sera rahisi ya matumizi ya AI ambayo timu yako inaweza kuifuata.",
          quickCheck: [
            { objective: "O4", q: "Sheria zenu za AI zinapaswa kuwa ndefu kiasi gani?", options: ["Angalau kurasa 20", "Za kusemwa tu, kamwe hazijaandikwa", "Fupi kiasi cha kutosha ukurasa mmoja", "Ndefu kama katiba ya shirika"], answer: 2, why: "Sheria ziwe fupi kiasi cha kutosha ukurasa mmoja na rahisi kwa mjitolea mpya." },
            { objective: "O4", q: "Kanisa lenu linataka sheria kuhusu maombi na mahubiri. Inaweza kusema nini?", options: ["AI inaandika mahubiri yote", "AI inachagua nani anatembelewa kwa maombi", "Hakuna; makanisa hayahitaji sheria", "Mahubiri, maombi na huduma ya kichungaji yanabaki kuwa ya mtu binafsi"], answer: 3, why: "Mashirika ya kidini yanaweza kuongeza sheria kwamba haya yanabaki kuwa ya mtu binafsi." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kupanga majaribio ya siku 30",
          minutes: 5,
          goal: "Panga jaribio dogo la AI la siku 30 kwa kazi moja na msimamizi mmoja.",
          text: [
            "Majaribio (pilot) ni jaribio dogo kabla ya kubadilisha kila kitu. Chagua moja ya kazi zako tatu za juu, zana moja, mtu mmoja wa kusimamia, na siku 30.",
            "Kabla ya kuanza, pima jinsi mambo yanavyofanya kazi leo. Kama vikumbusho kwa wajitolea vinachukua saa 3 kwa wiki, liandike hilo. Huo ndio mwanzo wako, yaani kipimo cha mwanzo (baseline).",
            "Andika maelezo wakati wa majaribio: muda uliotumika, matatizo, na watu walichosema. Ikiwezekana, tumia zana ambayo shirika lenu tayari linayo, kama AI iliyo ndani ya Microsoft 365 au Google Workspace, ili msiongeze gharama."
          ],
          steps: ["Chagua kazi moja kati ya tatu zako za juu.", "Chagua zana moja iliyoidhinishwa na msimamizi mmoja.", "Andika kipimo cha mwanzo: inachukua muda gani leo.", "Weka tarehe ya kuanza na tarehe ya kumaliza siku 30 baadaye.", "Andika maelezo mafupi kila wiki."],
          words: [["Majaribio (pilot)", "jaribio dogo na la muda mfupi kabla ya badiliko kubwa zaidi."], ["Kipimo cha mwanzo (baseline)", "jinsi kitu kinavyofanya kazi leo, kikipimwa kabla ya kukibadilisha."], ["Msimamizi", "mtu mmoja anayewajibika kwa majaribio."]],
          slides: [
            { title: "Majaribio ni jaribio dogo", bullets: ["Kazi moja, zana moja, msimamizi mmoja", "Siku 30"] },
            { title: "Pima kwanza", bullets: ["Kipimo cha mwanzo: inachukua muda gani leo", "Mfano: vikumbusho vinachukua saa 3 kwa wiki"] },
            { title: "Wakati wa majaribio", bullets: ["Andika muda uliotumika", "Andika matatizo", "Andika watu walichosema"] }
          ],
          tryIt: "Chini ya \"Majaribio yetu ya siku 30\", andika kazi, zana, msimamizi, tarehe ya kuanza, tarehe ya kumaliza na kipimo cha mwanzo.",
          youCanNow: "kupanga majaribio ya AI ya siku 30 yenye msimamizi wazi na kipimo cha mwanzo.",
          quickCheck: [
            { objective: "O5", q: "Unaandika maelezo gani wakati wa majaribio?", options: ["Muda uliotumika, matatizo na watu walichosema", "Tarehe ya kuanza tu", "Kiasi cha michango ya wafadhili", "Hakuna kitu hadi mwisho"], answer: 0, why: "Andika maelezo ya muda uliotumika, matatizo na watu walichosema." },
            { objective: "O5", q: "Unataka kuanza majaribio ya rasimu za jarida wiki ijayo. Unafanya nini kwanza?", options: ["Kununua zana mpya ya AI", "Kuandika jarida linachukua muda gani leo", "Kuanza bila kumwambia mtu", "Kupanga kazi tano kwa wakati mmoja"], answer: 1, why: "Pima kwanza jinsi mambo yanavyofanya kazi leo; huo ndio kipimo chako cha mwanzo." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kupima matokeo na kuripoti kwa bodi yako",
          minutes: 5,
          goal: "Chagua vipimo viwili na uripoti matokeo ya majaribio katika taarifa fupi kwa bodi.",
          text: [
            "Chagua vipimo viwili: kimoja cha muda au gharama (saa zilizookolewa kwa wiki) na kimoja cha ubora (makosa machache, wajitolea wengi zaidi kujiandikisha, majibu ya haraka zaidi kwa umma, au wasomaji walichosema).",
            "Mwishoni, linganisha na kipimo chako cha mwanzo. Kisha amua: kuendelea, kubadilisha, au kusimamisha. Kusimamisha ni matokeo mazuri pia; mmejifunza kitu kwa gharama ndogo.",
            "Ripoti kwa bodi yako kwa sentensi tano: mlijaribu nini, nini kilibadilika, matatizo yoyote, kama sheria zilifuatwa, na mnapendekeza nini baadaye. Bodi zinajali dhamira, pesa, hatari na uaminifu."
          ],
          steps: ["Chagua kipimo kimoja cha muda na kimoja cha ubora.", "Linganisha mwisho wa majaribio na kipimo chako cha mwanzo.", "Amua: kuendelea, kubadilisha au kusimamisha.", "Andika taarifa ya sentensi tano kwa bodi."],
          words: [["Kipimo", "namba au ishara unayofuatilia kuona kama kitu kilifanikiwa."], ["Bodi", "kundi la watu wanaoongoza shirika lisilo la faida na kusimamia viongozi wake."]],
          slides: [
            { title: "Vipimo viwili", bullets: ["Muda: saa zilizookolewa kila wiki", "Ubora: makosa, usajili, majibu, maoni"] },
            { title: "Amua", bullets: ["Endelea nalo", "Libadilishe", "Lisimamishe: bado ni matokeo yenye manufaa"] },
            { title: "Taarifa ya sentensi tano kwa bodi", bullets: ["Tulijaribu nini na nini kilibadilika", "Matatizo na kama sheria zilifuatwa", "Tunapendekeza nini baadaye"] }
          ],
          tryIt: "Kazi ya mwisho: maliza mpango wako wa AI wa ukurasa mmoja. Ongeza vipimo viwili, kisha weka pamoja sehemu zote tano: dhamira, kazi tatu, sheria, majaribio ya siku 30 na vipimo utakavyoripoti kwa bodi yako.",
          youCanNow: "kuandika mpango kamili wa AI wa ukurasa mmoja na kuripoti matokeo kwa bodi yako.",
          quickCheck: [
            { objective: "O6", q: "Kipi ni kipimo cha muda au gharama?", options: ["Wasomaji walichosema", "Makosa machache", "Saa zilizookolewa kwa wiki", "Wajitolea wengi zaidi kujiandikisha"], answer: 2, why: "Saa zilizookolewa kwa wiki zinapima muda; vingine vinapima ubora." },
            { objective: "O6", q: "Majaribio yaliokoa muda lakini wafanyakazi walivunja sheria ya faragha mara moja. Nini kinaingia kwenye taarifa kwa bodi?", options: ["Muda uliookolewa tu", "Hakuna; lilikuwa kosa dogo", "Ombi la pesa zaidi tu", "Matokeo, tatizo, kama sheria zilifuatwa na mnapendekeza nini baadaye"], answer: 3, why: "Taarifa inahusu mlichojaribu, kilichobadilika, matatizo, sheria kufuatwa na hatua zinazofuata." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Sheria, majaribio na matokeo",
        questions: [
          { objective: "O4", q: "Ipi ni sheria kuu ya AI kwa shirika lisilo la faida?", options: ["Bandika mafaili ya wateja ili kupata majibu bora", "Mtu anakagua kila kitu kabla hakijatoka", "AI inachagua nani anapata huduma", "Zana yoyote inafaa"], answer: 1, why: "Ukaguzi wa mtu unalinda ubora na uaminifu." },
          { objective: "O5", q: "Kipimo cha mwanzo (baseline) ni nini?", options: ["Alama ya mwisho", "Aina ya AI", "Jinsi kazi inavyofanyika leo, kabla ya badiliko", "Bajeti ya bodi"], answer: 2, why: "Mnalinganisha matokeo na kipimo cha mwanzo." },
          { objective: "O5", q: "Majaribio ya kwanza yanapaswa kuwa makubwa kiasi gani?", options: ["Kila kazi kwa wakati mmoja", "Bila kikomo cha muda", "Bodi nzima", "Kazi moja, zana moja, msimamizi mmoja, siku 30"], answer: 3, why: "Jaribio dogo linakufundisha kwa gharama ndogo na kwa usalama." },
          { objective: "O6", q: "Majaribio hayakuokoa muda. Uamuzi mzuri ni upi?", options: ["Kuyasimamisha au kuyabadilisha; mmejifunza kitu", "Kuficha matokeo", "Kumlazimisha kila mtu kuyatumia", "Kuwalaumu wajitolea"], answer: 0, why: "Kusimamisha ni matokeo mazuri na ya kweli." },
          { objective: "O4", q: "Shirika lenu linashughulikia taarifa za watoto. Mnapaswa kuongeza nini?", options: ["Hakuna", "Ushauri kutoka kwa wakili au kampuni ya bima kuhusu sheria za ziada", "Kuzibandika kwenye AI", "Kuziweka wazi kwa umma"], answer: 1, why: "Sheria za ziada zinaweza kuhusu taarifa za watoto, za afya na za kisheria." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kujenga Mkakati wa AI kwa Shirika Lako Lisilo la Faida",
    questions: [
      { objective: "O1", q: "Mpango wa AI kwa shirika lisilo la faida ni:", options: ["Ununuzi wa programu", "Tukio la kuchangisha fedha", "Hati fupi kuhusu jinsi mtakavyotumia na hamtatumia AI", "Orodha ya wafadhili"], answer: 2, why: "Unaweka lengo, sheria na ukaguzi wa matumizi ya AI." },
      { objective: "O1", q: "Swali bora la kwanza kwa mpango wa AI ni:", options: ["Zana ipi inajulikana zaidi?", "Tunawezaje kuwaondoa wajitolea?", "Mashirika mengine yanalipa kiasi gani?", "Timu yetu inapoteza muda wapi ambao tungeweza kuurudisha kwa dhamira yetu?"], answer: 3, why: "Anza na dhamira na muda, si na zana." },
      { objective: "O1", q: "Kwa nini kutokuwa na mpango wa AI ni hatari?", options: ["Watu wanaweza kutumia AI bila sheria za faragha", "AI ni haramu", "Wafadhili wanalazimisha AI", "Si hatari"], answer: 0, why: "Matumizi yasiyopangwa yanaweza kufichua taarifa binafsi." },
      { objective: "O2", q: "Kazi ipi inafaa AI?", options: ["Kuamua nani afukuzwe kwenye nyumba", "Kufupisha ripoti ndefu ya ruzuku", "Kuajiri mchungaji mpya", "Kusaini mkataba wa kupangisha"], answer: 1, why: "Kufupisha ni kazi ya mtindo; nyingine ni maamuzi ya watu." },
      { objective: "O2", q: "Kipi kinapaswa kubaki kwa watu?", options: ["Kuandika rasimu za vikumbusho", "Kupanga muundo wa jarida", "Kuamua nani anapata huduma", "Kuorodhesha mada za mkutano"], answer: 2, why: "Maamuzi kuhusu watu yanahitaji busara ya mtu." },
      { objective: "O2", q: "Unapoangalia muda unakwenda wapi, unapaswa:", options: ["Kukisia kazi moja", "Kuiuliza bodi tu", "Kuwaruka wajitolea", "Kuorodhesha kazi na saa zinazochukua"], answer: 3, why: "Saa zinaonyesha mahali AI ingeweza kusaidia zaidi." },
      { objective: "O3", q: "Unatumia jozi ipi ya alama kupanga mawazo?", options: ["Thamani na hatari", "Rangi na ukubwa", "Bei na chapa", "Umri na urefu"], answer: 0, why: "Thamani kubwa na hatari ndogo zinakuja kwanza." },
      { objective: "O3", q: "Unapaswa kuanza na kazi ngapi?", options: ["Kila kazi", "Kama tatu", "Hakuna", "Hamsini"], answer: 1, why: "Tatu zilizofanywa vizuri ni bora kuliko kumi nusu." },
      { objective: "O3", q: "Kazi ipi ina hatari ndogo zaidi?", options: ["Kufupisha kumbukumbu za kesi za wateja", "Kuchambua taarifa za benki za wafadhili", "Vikumbusho kwa wajitolea kutoka taarifa za tukio za umma", "Kuandika ushauri wa kitabibu"], answer: 2, why: "Inatumia taarifa za umma tu." },
      { objective: "O4", q: "Sera ya matumizi ya AI inapaswa kuwa:", options: ["Ya kurasa hamsini", "Ya siri", "Imeandikwa kwa lugha ya kisheria tu", "Fupi na rahisi kwa mjitolea mpya"], answer: 3, why: "Sheria rahisi zinafuatwa." },
      { objective: "O4", q: "Ipi ni sheria ya faragha?", options: ["Kamwe usibandike taarifa binafsi za wafadhili au wateja kwenye AI", "Tumia zana yoyote unayopenda", "Shirikianeni nywila ili kuokoa muda", "Chapisheni hadithi za wateja pamoja na majina yao"], answer: 0, why: "Kulinda taarifa binafsi kunadumisha uaminifu." },
      { objective: "O4", q: "\"Zana iliyoidhinishwa\" maana yake nini?", options: ["Zana yoyote ya bure", "Zana ambayo viongozi wenu waliikagua na kuiruhusu", "Zana yenye matangazo", "Zana ambayo mfadhili anaipenda"], answer: 1, why: "Viongozi wanakagua usalama wa zana zilizoidhinishwa." },
      { objective: "O5", q: "Majaribio (pilot) ni:", options: ["Kuanzisha kila mahali kwa ukamilifu", "Ruzuku", "Jaribio dogo na la muda mfupi kabla ya badiliko kubwa zaidi", "Uchaguzi wa bodi"], answer: 2, why: "Majaribio yanajaribu kwanza kwa gharama ndogo." },
      { objective: "O5", q: "Kwa nini kupima kipimo cha mwanzo kabla ya majaribio?", options: ["Kupunguza kasi ya mambo", "Kwa sababu wafadhili wanauliza", "Hakihitajiki", "Ili uweze kulinganisha matokeo baadaye"], answer: 3, why: "Bila kipimo cha mwanzo huwezi kujua kama ilisaidia." },
      { objective: "O5", q: "Kila majaribio yanahitaji:", options: ["Msimamizi mmoja anayewajibika", "Bila mtu wa kusimamia", "Kila mfanyakazi kusimamia", "AI peke yake"], answer: 0, why: "Msimamizi mmoja anayaweka kwenye njia sahihi." },
      { objective: "O5", q: "Kwa nini kutumia AI iliyo tayari ndani ya zana mlizonazo, kama Microsoft 365 au Google Workspace?", options: ["Ni kamilifu kila wakati", "Inaweza kuepusha kuongeza gharama", "Inashiriki taarifa na wafadhili", "Inatakiwa"], answer: 1, why: "Kutumia mlicho nacho tayari kunapunguza gharama." },
      { objective: "O6", q: "Kipi ni kipimo cha ubora?", options: ["Rangi ya nembo ya zana", "Idadi ya apps za AI zilizosakinishwa", "Wajitolea wengi zaidi kujiandikisha baada ya vikumbusho", "Urefu wa sera"], answer: 2, why: "Vipimo vya ubora vinaonyesha kama kazi ilikuwa bora zaidi." },
      { objective: "O6", q: "Baada ya majaribio, chaguo zako tatu ni:", options: ["Kuficha, kupuuza au kukana", "Kununua zana zaidi", "Kumfukuza msimamizi", "Kuendelea, kubadilisha au kusimamisha"], answer: 3, why: "Amua kwa kutegemea vipimo." },
      { objective: "O6", q: "Taarifa nzuri kwa bodi ni:", options: ["Kama sentensi tano zilizo wazi kuhusu matokeo, hatari na hatua zinazofuata", "Ripoti ya kiufundi ya kurasa 40", "Hakuna kitu", "Gharama ya zana tu"], answer: 0, why: "Bodi zinahitaji picha fupi na iliyo wazi." },
      { objective: "O6", q: "Bodi zinajali zaidi:", options: ["AI ipi ina nembo bora", "Dhamira, pesa, hatari na uaminifu", "Prompts ngapi ziliandikwa", "Likes za mitandao ya kijamii tu"], answer: 1, why: "Haya ndiyo majukumu makuu ya bodi." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      1,
      4,
      6,
      10,
      12,
      17
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Dhamira kwanza",
        objective: "O1",
        notYet: "Hakuna sentensi ya dhamira, au mpango unaanza na zana.",
        meets: "Dhamira kwa sentensi moja inafungua mpango.",
        exceeds: "Kila kazi iliyochaguliwa inasema jinsi inavyorudisha muda kwa dhamira."
      },
      {
        name: "Kazi tatu zilizopangwa",
        objective: "O3",
        notYet: "Kazi hazijapangwa, au kazi yenye hatari kubwa iko ya kwanza.",
        meets: "Kazi tatu zenye alama za thamani na hatari, thamani kubwa na hatari ndogo kwanza.",
        exceeds: "Inataja kazi zipi ziliachwa nje na kwa nini."
      },
      {
        name: "Sheria za AI zilizo wazi",
        objective: "O4",
        notYet: "Sheria chini ya tano, au hakuna sheria ya faragha.",
        meets: "Angalau sheria tano fupi, pamoja na faragha, zana zilizoidhinishwa na ukaguzi wa mtu.",
        exceeds: "Inaongeza sheria kwa hatari maalum za shirika, kama taarifa za watoto."
      },
      {
        name: "Majaribio ya siku 30",
        objective: "O5",
        notYet: "Hakuna msimamizi, zana au tarehe ya kuanza.",
        meets: "Kazi moja, zana moja, msimamizi mmoja, tarehe ya kuanza na kipimo cha mwanzo kilichopimwa.",
        exceeds: "Inatumia zana ambayo shirika tayari linayo, pamoja na maelezo kuhusu gharama."
      },
      {
        name: "Vipimo kwa bodi",
        objective: "O6",
        notYet: "Hakuna vipimo, au vipimo haviwezi kulinganishwa na kipimo cha mwanzo.",
        meets: "Kipimo kimoja cha muda au gharama na kipimo kimoja cha ubora.",
        exceeds: "Inajumuisha rasimu ya taarifa ya sentensi tano kwa bodi."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Mashirika ambayo bodi yao inaidhinisha mpango wa AI ulioandikwa ndani ya siku 60 (utafiti wa kufuatilia)",
      "Mashirika yanayomaliza majaribio ya siku 30 na kuripoti saa zilizookolewa",
      "Wanafunzi wanaoanza kozi nyingine ya Koach Learn ya mashirika yasiyo ya faida ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta yenye intaneti na programu ya kuandika",
      "Taarifa ya dhamira yenu na orodha ya kazi za kila wiki za timu",
      "Msaidizi wa AI wa bure au ule ambao shirika lenu tayari linao, kwa kuandika rasimu",
      "Kama dakika 60 kwa jumla, pamoja na muda wa kuzungumza na wafanyakazi na wajitolea"
    ],
    facilitatorNotes: [
      "Inafanya kazi vizuri zaidi viongozi wawili au watatu wa shirika moja wakiandika mpango mmoja pamoja.",
      "Kabla ya kipindi, waombe wanafunzi wakusanye kutoka kwa wafanyakazi na mjitolea mmoja ni nini kinachokula wiki ya timu yao.",
      "Waelekeze wanafunzi kwa wakili au kampuni ya bima wanaposhughulikia taarifa za afya, za watoto au za kisheria.",
      "Waache wanafunzi wajizoeze kusoma kwa sauti taarifa ya sentensi tano kwa bodi.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati mmoja."
    ]
  }
};
