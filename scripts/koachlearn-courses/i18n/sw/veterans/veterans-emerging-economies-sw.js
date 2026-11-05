"use strict";

// Koach Learn course (Swahili translation of veterans/veterans-emerging-economies.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "veterans-emerging-economies-sw",
  lang: "sw",
  translationOf: "veterans-emerging-economies",
  category: "Veterans (military)",
  name: "Ujasiriamali katika Uchumi Unaoibukia",
  skills: "Kueleza uchumi unaoibukia ni nini, Kugeuza ujuzi wa kijeshi kuwa wazo la biashara, Kutafiti soko kwa AI na miongozo rasmi, Kuandika mfumo wa biashara wa ukurasa mmoja, Kupanga gharama na hatari, Kupata msaada rasmi wa biashara",
  outcome: "kuandika mfumo wa biashara wa ukurasa mmoja kwa biashara ndogo iliyo ndani ya, au inayouza kwa, uchumi unaoibukia, uliojengwa juu ya ujuzi wako wa kijeshi, pamoja na mpango wa utafiti unaokagua soko na sheria kwenye vyanzo rasmi.",
  about: [
    "Kozi hii ni kwa wastaafu wa jeshi (veterans) wanaotaka kujua kuhusu kuanzisha biashara katika uchumi unaokua haraka, kama nchi za Afrika, Asia ya Kusini na Kusini-Mashariki au Amerika ya Kusini, au kuhusu kuwauzia wateja wa huko kutoka Marekani. Wastaafu wengi tayari wanazijua nchi hizi kutokana na kazi za kijeshi huko, na wanaelewa usafirishaji na ugavi, ulinzi, mafunzo na kufanya kazi na tamaduni mbalimbali.",
    "Utajifunza kinachofanya uchumi unaoibukia kuwa tofauti, utageuza ujuzi wako wa kijeshi kuwa wazo la biashara linalotatua tatizo halisi, utatafiti soko kwa msaidizi wa AI wa bure na miongozo rasmi ya serikali, na utaandika mfumo wa biashara wa ukurasa mmoja. Utapanga pesa, hatari na sheria, na utapata msaada rasmi wa bure kama Boots to Business ya SBA.",
    "Kozi hii inakufundisha kupanga na kujaribu wazo; si ushauri wa kisheria, wa kodi wala wa uwekezaji. Kagua sheria kwenye vyanzo rasmi na kwa wataalamu wa ndani wenye sifa. Kila somo linachukua kama dakika tano. Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Andika mfumo wa biashara wa ukurasa mmoja kwa wazo moja la biashara katika uchumi unaoibukia uliotajwa kwa jina: mteja, tatizo, suluhisho lako na jinsi ujuzi wako wa kijeshi unavyofaa, jinsi utakavyowafikia wateja, jinsi utakavyopata pesa, gharama zako kuu na hatari zako tatu kubwa. Ongeza mpango wa utafiti unaotaja vyanzo rasmi utakavyokagua (Country Commercial Guide ya nchi hiyo na ofisi yake ya kusajili biashara) na programu moja ya msaada rasmi wa bure utakayowasiliana nayo.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wastaafu wa jeshi wanaotaka kujua kuhusu kuanzisha biashara katika uchumi unaokua haraka (Afrika, Asia ya Kusini na Kusini-Mashariki, Amerika ya Kusini) au kuwauzia wateja wa huko kutoka Marekani. Wengi wanayajua maeneo haya kutokana na kazi za kijeshi huko.",
    startingPoint: "Wanaleta uzoefu wa usafirishaji na ugavi, ulinzi, mafunzo na tamaduni mbalimbali, na wanaweza kutumia kompyuta au simu janja. Wengi hawajawahi kuandika mfumo wa biashara wala kutafiti soko la nchi nyingine na sheria zake.",
    gap: "Mawazo ya biashara yaliyojengwa juu ya kubahatisha yanaweza kumaliza akiba haraka, na masoko ya nchi nyingine yana sheria, hatari na sheria za kupambana na rushwa zao wenyewe. Wanafunzi wanahitaji kugeuza ujuzi wa kijeshi kuwa wazo la biashara lililo wazi, kuandika mfumo wa ukurasa mmoja, na kupanga kukagua soko na sheria kwenye vyanzo rasmi kabla ya kutumia pesa.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; hakuna ujuzi wa biashara unaotarajiwa",
      "Vifaa: kompyuta au simu janja yenye intaneti na msaidizi wa AI wa bure",
      "Ukweli unaobadilika (hatua za usajili, kodi, leseni, sarafu) unakaguliwa kwenye vyanzo rasmi kama Country Commercial Guides za trade.gov na ofisi ya usajili wa biashara ya nchi husika",
      "Mipaka ya kisheria: hakuna rushwa ya aina yoyote (sheria ya Marekani ya FCPA); maswali ya mikataba, kodi na usajili yanaenda kwa wakili au mhasibu wa ndani mwenye sifa",
      "Muda: masomo ya kama dakika 5; kozi hii inapanga biashara, haianzishi biashara"
    ],
    prerequisites: "Hakuna. Wanafunzi ambao ni wapya kwa wasaidizi wa AI wanaweza kuanza na kozi \"Utangulizi wa AI na Kazi za Baadaye\"."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Kwa uchumi mmoja unaoibukia unaouchagua", action: "kueleza uchumi unaoibukia ni nini na kutaja fursa mbili na changamoto mbili huko", standard: "ukiweka alama kila ukweli unaohitaji kukaguliwa" },
    { id: "O2", condition: "Ukitumia ujuzi wako wa kijeshi", action: "kuandika wazo la biashara la sentensi moja linalounganisha ujuzi mmoja na tatizo halisi la eneo hilo", standard: "ukitaja huduma, mteja, mahali na jinsi wanavyolipa" },
    { id: "O3", condition: "Kwa wazo lako la biashara", action: "kupanga utafiti wa soko kwa AI na kukagua ukweli muhimu katika Country Commercial Guide rasmi na ofisi ya usajili wa biashara", standard: "ukijibu angalau maswali mawili ya utafiti kutoka vyanzo rasmi" },
    { id: "O4", condition: "Ukitumia wazo lako la sentensi moja", action: "kuandika mfumo wa biashara wa ukurasa mmoja kwa msaada wa AI", standard: "wenye sehemu zote saba na kila kubahatisha kikiwa na alama \"ya kujaribu\"" },
    { id: "O5", condition: "Kwa mfumo wako wa biashara", action: "kuorodhesha gharama zako za kuanzia na hatari zako tatu kubwa pamoja na njia moja ya kupunguza kila moja", standard: "kwa bei kutoka nukuu halisi na bila mpango wowote unaotegemea rushwa" },
    { id: "O6", condition: "Kabla ya kutumia pesa halisi", action: "kupanga jaribio dogo la gharama nafuu la wazo lako na kuchagua programu moja ya msaada rasmi ya kuwasiliana nayo", standard: "ukitaja jina la programu na tarehe ya kuwasiliana nayo" }
  ],
  chapters: [
    {
      name: "Sura 1: Kupata fursa",
      lessons: [
        {
          objectives: ["O1"],
          title: "Uchumi unaoibukia ni nini",
          minutes: 5,
          goal: "Eleza uchumi unaoibukia ni nini na utaje fursa mbili na changamoto mbili.",
          text: [
            "Uchumi unaoibukia ni wa nchi ambayo uchumi wake unakua na kubadilika haraka, ukihama kutoka zaidi kilimo au malighafi kuelekea viwanda, huduma na teknolojia zaidi. Mifano inayotajwa mara nyingi ni Kenya, Nigeria, Ghana, India, Vietnam, Indonesia na Brazil.",
            "Fursa: watu wengi vijana na idadi inayoongezeka; ukuaji wa haraka wa simu na intaneti; pesa za simu, kama M-Pesa nchini Kenya, zinazowawezesha watu kulipa kwa simu; na mapengo halisi katika huduma kama umeme, usafiri, hifadhi ya baridi, mafunzo na ulinzi.",
            "Changamoto: sheria zinazobadilika, makaratasi yanayochelewa, kupanda na kushuka kwa sarafu, barabara au umeme dhaifu katika baadhi ya maeneo, na hatari ya rushwa. Mafanikio yanategemea washirika wa ndani, uvumilivu na kukagua ukweli kwenye vyanzo rasmi."
          ],
          words: [["Uchumi unaoibukia", "nchi ambayo uchumi wake unakua na kubadilika haraka."], ["Pesa za simu", "njia ya kutuma, kupokea na kuweka pesa kwenye simu, mara nyingi bila akaunti ya benki."], ["Kupanda na kushuka kwa sarafu", "thamani ya pesa ya nchi inapopanda au kushuka ikilinganishwa na sarafu nyingine."]],
          slides: [
            { title: "Uchumi unaoibukia", bullets: ["Unakua na kubadilika haraka", "Mifano: Kenya, Nigeria, Ghana, India, Vietnam, Brazil"] },
            { title: "Fursa", bullets: ["Watu wengi vijana, idadi inaongezeka", "Simu na pesa za simu zinakua haraka", "Mapengo katika umeme, usafiri, hifadhi, mafunzo"] },
            { title: "Changamoto", bullets: ["Sheria zinazobadilika na makaratasi yanayochelewa", "Kupanda na kushuka kwa sarafu", "Hatari ya rushwa: washirika wa ndani na ukweli ni muhimu"] }
          ],
          tryIt: "Chagua uchumi mmoja unaoibukia unaoujua au unaotaka kuujua. Uliza msaidizi wa AI: \"Kwa maneno rahisi, taja mahitaji matatu yanayokua na changamoto tatu za biashara nchini [nchi].\" Weka alama kila ukweli utakaohitaji kukagua.",
          youCanNow: "kueleza uchumi unaoibukia ni nini na kutaja fursa na changamoto zake.",
          quickCheck: [
            { objective: "O1", q: "Ni nini kinachofanya nchi kuwa na uchumi unaoibukia?", options: ["Haina biashara bado", "Uchumi wake unakua na kubadilika haraka", "Inauza mafuta tu", "Ina sheria zile zile kama Marekani"], answer: 1, why: "Uchumi unaoibukia unakua na kubadilika haraka, na hilo linaleta fursa na changamoto." },
            { objective: "O1", q: "AI inaorodhesha changamoto tatu za biashara katika nchi uliyochagua. Unafanya nini?", options: ["Kuzichukulia kama ukweli uliothibitishwa", "Kufuta jibu", "Kuchagua nchi nyingine mara moja", "Kuweka alama kila ukweli utakaohitaji kukagua kwenye chanzo rasmi"], answer: 3, why: "Majibu ya AI kuhusu nchi nyingine yanaweza kuwa si sahihi au ya zamani, kwa hiyo unaweka alama ukweli wa kukagua." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kugeuza ujuzi wa kijeshi kuwa wazo la biashara",
          minutes: 5,
          goal: "Unganisha ujuzi mmoja wa kijeshi na tatizo halisi la eneo hilo, kisha uandike wazo la biashara la sentensi moja.",
          text: [
            "Mawazo bora yanatatua tatizo halisi ambalo watu watalipa ili litatuliwe. Anza na unachojua kufanya. Ujuzi wa kijeshi unaofaa masoko yanayoibukia ni pamoja na usafirishaji na ugavi (kusafirisha na kuhifadhi bidhaa), matengenezo ya umeme na jenereta, kutengeneza magari na vifaa, kupanga ulinzi, mawasiliano na IT, mafunzo ya msaada wa matibabu, na kufundisha na kuwafunza watu.",
            "Kisha unganisha ujuzi na tatizo. Mfano: NCO (afisa asiye na kamisheni) wa zamani wa usafirishaji wa Jeshi la Nchi Kavu anaona kwamba wakulima wadogo wanapoteza mazao kabla hayajafika sokoni. Wazo: \"Huduma ya pamoja ya hifadhi ya baridi na kuchukua mazao kwa wakulima wadogo karibu na Nakuru, inayolipwa kwa kila kreti kwa pesa za simu.\"",
            "Uliza AI ikusaidie kutoa mawazo, lakini wewe ndiye unayechagua. Prompt: \"Nilikuwa fundi umeme wa Jeshi la Wanamaji kwa miaka 8. Orodhesha mawazo 10 ya biashara ndogo nchini Ghana yanayotumia ujuzi huu kutatua tatizo la eneo hilo. Mstari mmoja kila moja.\" Chagua lile unaloweza kujaribu kwa gharama ndogo."
          ],
          steps: ["Orodhesha ujuzi tatu wa kijeshi ulio hodari nao.", "Orodhesha matatizo matatu halisi katika nchi uliyochagua.", "Uliza AI itoe mawazo yanayoviunganisha.", "Chagua wazo moja unaloweza kujaribu kwa gharama ndogo.", "Liandike kwa sentensi moja: huduma, mteja, mahali, jinsi wanavyolipa."],
          words: [["Wazo la biashara", "bidhaa au huduma inayotatua tatizo la mteja atakayelipa."], ["Mkulima mdogo", "mkulima mwenye shamba dogo, jambo la kawaida katika nchi nyingi zenye uchumi unaoibukia."]],
          slides: [
            { title: "Ujuzi wa kijeshi unaofaa", bullets: ["Usafirishaji, ugavi na hifadhi", "Umeme, jenereta, magari", "Ulinzi, mawasiliano, mafunzo"] },
            { title: "Ujuzi + tatizo halisi = wazo", bullets: ["NCO wa usafirishaji anaona wakulima wakipoteza mazao", "Wazo: hifadhi ya baridi ya pamoja, malipo kwa kila kreti"] },
            { title: "Liandike kwa sentensi moja", bullets: ["Huduma", "Mteja", "Mahali", "Jinsi wanavyolipa"] }
          ],
          tryIt: "Uliza msaidizi wa AI mawazo kumi ya biashara yanayotumia ujuzi wako wa kijeshi katika nchi uliyochagua. Chagua moja na uliandike kwa sentensi moja: huduma, mteja, mahali, jinsi wanavyolipa.",
          youCanNow: "kugeuza ujuzi wa kijeshi kuwa wazo la biashara la sentensi moja linalotatua tatizo la eneo hilo.",
          quickCheck: [
            { objective: "O2", q: "Ni nini kinachofanya wazo la biashara kuwa imara?", options: ["Linatatua tatizo halisi ambalo watu watalipa ili litatuliwe", "Linaiga kampuni kubwa zaidi", "Halihitaji wateja", "Linakusisimua wewe"], answer: 0, why: "Biashara inadumu inapotatua tatizo halisi ambalo wateja watalipia." },
            { objective: "O2", q: "AI inakupa mawazo kumi ya biashara. Unafanya nini?", options: ["Kuanzisha yote kumi", "Kuiacha AI ichague moja", "Kuchagua moja linalotumia ujuzi wako na kuliandika kwa sentensi moja", "Kuchagua lile lenye namba kubwa zaidi"], answer: 2, why: "Wewe unachagua wazo linalofaa ujuzi wako na kuliandika wazi: huduma, mteja, mahali, jinsi wanavyolipa." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kutafiti soko kwa AI na miongozo rasmi",
          minutes: 6,
          goal: "Tumia AI kupanga utafiti wa soko na ukague ukweli muhimu katika Country Commercial Guide rasmi.",
          text: [
            "AI inaweza kukusaidia kupanga utafiti na kuorodhesha maswali, lakini inaweza kukosea au kuwa na taarifa za zamani kuhusu masoko na sheria za nchi nyingine. Itumie kuandika rasimu; tumia vyanzo rasmi kukagua.",
            "International Trade Administration ya Wizara ya Biashara ya Marekani inachapisha Country Commercial Guides, zinazoandaliwa na wafanyakazi wa Ubalozi wa Marekani, zinazoeleza jinsi soko linavyofanya kazi, fursa, sheria na desturi za biashara. U.S. Commercial Service yake pia inasaidia biashara za Marekani zinazouza nje kwa utafiti wa soko na watu wa kuwasiliana nao.",
            "Ili kuanzisha kampuni ndani ya nchi yenyewe, tafuta ofisi yake rasmi ya usajili wa biashara. Nchini Kenya ni Business Registration Service (brs.go.ke); nchini Nigeria ni Corporate Affairs Commission (cac.gov.ng). Soma hatua na ada zao za sasa wewe mwenyewe, na zungumza na wateja watano wanaowezekana kabla ya kutumia pesa halisi."
          ],
          steps: ["Uliza AI: \"Ni maswali gani 10 ninayopaswa kujibu kabla ya kuanzisha [wazo] nchini [nchi]?\"", "Soma Country Commercial Guide ya nchi hiyo kwenye trade.gov.", "Tafuta ofisi rasmi ya usajili wa biashara ya nchi hiyo na usome hatua zake za sasa.", "Zungumza na wateja watano wanaowezekana kuhusu tatizo.", "Andika ulichothibitisha na kile ambacho bado hakijulikani."],
          words: [["Country Commercial Guide", "ripoti ya serikali ya Marekani kuhusu jinsi biashara inavyofanya kazi katika nchi nyingine."], ["Ofisi ya usajili wa biashara", "ofisi rasmi ya serikali ambapo kampuni na majina ya biashara yanasajiliwa."], ["Utafiti wa soko", "kujua wateja wako ni nani, wanahitaji nini na watalipa kiasi gani."]],
          slides: [
            { title: "AI inaandika rasimu, vyanzo rasmi vinakagua", bullets: ["AI: kupanga maswali na utafiti", "Miongozo rasmi: kuthibitisha ukweli"] },
            { title: "Country Commercial Guides", bullets: ["Kutoka International Trade Administration", "Zinaandaliwa na wafanyakazi wa Ubalozi wa Marekani", "Soko, sheria, fursa, desturi"] },
            { title: "Kuanzisha ndani ya nchi", bullets: ["Kenya: Business Registration Service", "Nigeria: Corporate Affairs Commission", "Soma hatua na ada za sasa wewe mwenyewe"] },
            { title: "Zungumza na wateja", bullets: ["Mazungumzo matano halisi kwanza", "Kabla ya kutumia pesa halisi"] }
          ],
          sources: [
            { name: "International Trade Administration: Country Commercial Guides", url: "https://www.trade.gov/country-commercial-guides" },
            { name: "International Trade Administration: Export solutions (U.S. Commercial Service)", url: "https://www.trade.gov/export-solutions" },
            { name: "Kenya Business Registration Service", url: "https://brs.go.ke/" },
            { name: "Nigeria Corporate Affairs Commission", url: "https://www.cac.gov.ng/" }
          ],
          tryIt: "Uliza msaidizi wa AI maswali kumi unayopaswa kujibu kabla ya kuanzisha wazo lako. Kisha fungua Country Commercial Guide ya nchi yako kwenye trade.gov na ujibu mawili kati yake kutoka humo.",
          youCanNow: "kupanga utafiti wa soko kwa AI na kukagua ukweli muhimu katika miongozo rasmi na ofisi za usajili.",
          quickCheck: [
            { objective: "O3", q: "Country Commercial Guide ni nini?", options: ["Mwongozo wa safari kwa watalii", "Mwongozo ulioandikwa na AI", "Orodha ya hoteli", "Mwongozo rasmi wa kufanya biashara katika nchi, kutoka International Trade Administration"], answer: 3, why: "Country Commercial Guides ni miongozo rasmi ya soko inayoandaliwa na wafanyakazi wa Ubalozi wa Marekani na kuchapishwa na ITA." },
            { objective: "O3", q: "AI inakuambia hatua za kusajili kampuni nchini Kenya. Unafanya nini?", options: ["Kuzifuata kama zilivyoandikwa", "Kuzikagua kwa Business Registration Service ya Kenya", "Kumuuliza rafiki mtandaoni", "Kuacha kusajili"], answer: 1, why: "Hatua za usajili zinatoka kwenye ofisi rasmi ya usajili ya nchi yenyewe." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kupata fursa",
        questions: [
          { objective: "O1", q: "Uchumi unaoibukia unaelezwa vizuri zaidi kama:", options: ["Nchi ambayo uchumi wake unakua na kubadilika haraka", "Nchi isiyo na biashara", "Nchi yoyote ya kisiwa", "Nchi isiyo na simu"], answer: 0, why: "Uchumi unaoibukia unakua na kubadilika haraka." },
          { objective: "O1", q: "Pesa za simu ni nini?", options: ["Pesa taslimu zinazowekwa garini", "Kutuma, kupokea na kuweka pesa kwenye simu", "Aina ya kadi ya mkopo", "Programu ya serikali ya Marekani"], answer: 1, why: "Huduma kama M-Pesa zinawawezesha watu kulipa kwa simu, mara nyingi bila akaunti ya benki." },
          { objective: "O2", q: "NCO wa zamani wa usafirishaji anataka wazo la biashara. Mahali bora pa kuanzia ni:", options: ["Chochote kinachovuma mtandaoni", "Wazo lenye bei kubwa zaidi", "Ujuzi alionao aliouunganisha na tatizo halisi la eneo hilo", "Kuiga wazo la rafiki"], answer: 2, why: "Mawazo mazuri yanatatua matatizo halisi ambayo watu watalipa ili yatatuliwe." },
          { objective: "O3", q: "Nani anaandaa Country Commercial Guides?", options: ["Kampuni ya AI", "Kikundi cha mitandao ya kijamii", "Magazeti ya ndani", "Wafanyakazi wa Ubalozi wa Marekani, zikichapishwa na International Trade Administration"], answer: 3, why: "International Trade Administration inazichapisha, na zinaandaliwa na wafanyakazi wa Ubalozi wa Marekani." },
          { objective: "O3", q: "Unakagua wapi hatua za kusajili kampuni nchini Nigeria?", options: ["Corporate Affairs Commission (CAC)", "Tangazo linalojitokeza ghafla (pop-up)", "Chatbot ya AI pekee", "Tovuti ya jimbo la Marekani"], answer: 0, why: "CAC ndiyo ofisi rasmi ya usajili wa kampuni nchini Nigeria." }
        ]
      }
    },
    {
      name: "Sura 2: Kupanga biashara",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuandika mfumo wa biashara wa ukurasa mmoja",
          minutes: 6,
          goal: "Andika mfumo wa biashara wa ukurasa mmoja kwa msaada wa AI.",
          text: [
            "Mfumo wa biashara wa ukurasa mmoja unajibu maswali muhimu kwenye ukurasa mmoja: Mteja ni nani? Ana tatizo gani? Suluhisho lako ni nini? Kwa nini wewe (ujuzi wako na ubora wako)? Utawafikiaje wateja? Utapataje pesa? Gharama zako kuu ni zipi?",
            "Ipe AI wazo lako la sentensi moja na maelezo yako, kisha uliza: \"Geuza hili kuwa mfumo wa biashara wa ukurasa mmoja wenye vichwa hivi: mteja, tatizo, suluhisho, kwa nini mimi, njia za kufikia wateja, mapato, gharama. Kila kimoja kiwe mistari miwili au mitatu.\"",
            "Lisome kwa makini. AI ikisema \"wakulima watalipa kwa furaha\", jiulize: je, kuna mkulima aliyeniambia hivyo? Badilisha makisio kwa uliyojifunza kutoka kwa wateja halisi, na weka alama \"ya kujaribu\" kwenye yaliyobaki."
          ],
          steps: ["Ipe AI wazo lako la sentensi moja na maelezo ya utafiti.", "Omba mfumo wa ukurasa mmoja wenye mteja, tatizo, suluhisho, kwa nini mimi, njia za kufikia wateja, mapato na gharama.", "Badilisha makisio kwa yale wateja halisi walikuambia.", "Weka alama \"ya kujaribu\" kwenye chochote kisichothibitishwa."],
          words: [["Mfumo wa biashara", "jinsi biashara inavyowaletea wateja thamani na kupata pesa."], ["Mapato", "pesa zinazoingia kutoka kwa wateja."], ["Njia ya kufikia wateja (channel)", "njia unayotumia kuwafikia na kuwauzia wateja."]],
          slides: [
            { title: "Ukurasa mmoja, maswali saba", bullets: ["Mteja na tatizo", "Suluhisho na kwa nini wewe", "Njia za kufikia wateja na mapato", "Gharama"] },
            { title: "Iache AI iandike rasimu", bullets: ["Toa wazo lako na maelezo yako", "Omba mistari miwili au mitatu kwa kila kichwa"] },
            { title: "Kisha lipinge", bullets: ["Je, kuna mteja halisi aliyesema hivyo?", "Badilisha makisio kwa ukweli", "Weka alama \"ya kujaribu\" kwenye yaliyobaki"] }
          ],
          tryIt: "Uliza msaidizi wa AI ageuze wazo lako la sentensi moja kuwa mfumo wa biashara wa ukurasa mmoja wenye vichwa saba. Weka alama \"ya kujaribu\" kwenye kila mstari ulio makisio.",
          youCanNow: "kuandika mfumo wa biashara wa ukurasa mmoja na kutenganisha ukweli na makisio.",
          quickCheck: [
            { objective: "O4", q: "Katika mfumo wa biashara, mapato ni nini?", options: ["Pesa unazotumia kwa vifaa", "Akiba yako yote", "Pesa zinazoingia kutoka kwa wateja", "Idadi ya wafanyakazi"], answer: 2, why: "Mapato ni pesa zinazoingia kutoka kwa wateja." },
            { objective: "O4", q: "Mfumo wako unasema wateja watalipa $20 kwa mwezi, lakini hakuna aliyekuambia hivyo. Unafanya nini?", options: ["Kuweka alama \"ya kujaribu\" na kuwauliza wateja halisi", "Kuipandisha hadi $40", "Kuiacha kama ukweli", "Kufuta sehemu ya mapato"], answer: 0, why: "Makisio yanabaki na alama \"ya kujaribu\" hadi wateja halisi wayathibitishe." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kupanga pesa, hatari na sheria",
          minutes: 5,
          goal: "Orodhesha gharama zako za kuanzia, hatari zako tatu kubwa na jinsi utakavyopunguza kila moja.",
          text: [
            "Orodhesha unachohitaji ili kuanza: vifaa, usafiri, mahali pa kazi, usajili na leseni, mshirika wa ndani au wafanyakazi, na pesa za kutosha kuendesha biashara kwa miezi kadhaa kabla mauzo hayajalipia gharama. Uliza AI orodha ya kukagua, kisha upate bei halisi huko huko. Usiamini bei zinazokisiwa na AI.",
            "Hatari za kawaida: kupanda na kushuka kwa sarafu (gharama na bei zako zikiwa katika sarafu tofauti), umeme au usafiri usioaminika, malipo yanayochelewa, washirika wasiotimiza ahadi, wizi, na sheria zinazobadilika. Kwa kila moja, andika jinsi utakavyoipunguza: kwa mfano, weka bei kwa sarafu ya ndani na uzikague kila robo mwaka, jenereta ya akiba, au makubaliano ya maandishi.",
            "Usitoe rushwa kamwe. Mbali na sheria za ndani, sheria ya Marekani ya Foreign Corrupt Practices Act inafanya kuwa uhalifu kwa watu wa Marekani kutoa au kulipa kitu chochote chenye thamani kwa afisa wa serikali ya nchi nyingine ili kupata au kubaki na biashara. Kwa mikataba, kodi na usajili, tumia wakili au mhasibu wa ndani mwenye sifa."
          ],
          steps: ["Uliza AI orodha ya kukagua ya gharama za kuanzia kwa wazo lako.", "Pata bei halisi za ndani kwa kila kitu.", "Orodhesha hatari zako tatu kubwa.", "Andika njia moja ya kupunguza kila hatari.", "Andika maswali yanayohitaji wakili au mhasibu wa ndani."],
          words: [["Gharama za kuanzia", "pesa unazohitaji kabla biashara haijapata pesa za kutosha kujilipia yenyewe."], ["Rushwa", "kitu chenye thamani kinachopewa afisa ili kupata faida isiyo ya haki; ni kinyume cha sheria."], ["Foreign Corrupt Practices Act", "sheria ya Marekani inayofanya kumhonga afisa wa nchi nyingine ili kupata biashara kuwa uhalifu."]],
          slides: [
            { title: "Gharama za kuanzia", bullets: ["Vifaa, usafiri, mahali pa kazi", "Usajili, leseni, wafanyakazi", "Gharama za miezi kadhaa kabla mauzo hayajazilipia"] },
            { title: "Hatari kubwa na suluhisho", bullets: ["Kupanda na kushuka kwa sarafu: kagua bei mara kwa mara", "Umeme au usafiri: kuwa na mbadala", "Washirika: makubaliano ya maandishi"] },
            { title: "Fuata sheria", bullets: ["Usitoe rushwa kamwe", "FCPA ya Marekani inafanya rushwa nje ya nchi kuwa uhalifu", "Tumia wakili au mhasibu wa ndani mwenye sifa"] }
          ],
          sources: [{ name: "U.S. Department of Justice: Foreign Corrupt Practices Act", url: "https://www.justice.gov/criminal/criminal-fraud/foreign-corrupt-practices-act" }],
          tryIt: "Uliza msaidizi wa AI orodha ya kukagua ya gharama za kuanzia kwa wazo lako. Kisha andika hatari zako tatu kubwa na njia moja ya kupunguza kila moja.",
          youCanNow: "kupanga gharama za kuanzia, kutaja hatari zako kubwa pamoja na suluhisho, na kujua mipaka ya kisheria usiyopaswa kuvuka.",
          quickCheck: [
            { objective: "O5", q: "Kipi ni gharama ya kuanzia?", options: ["Pesa ambazo wateja wanakulipa", "Ada za usajili na vifaa", "Namba ya simu ya mteja", "Sentensi ya wazo lako la biashara"], answer: 1, why: "Gharama za kuanzia ni pamoja na vifaa, usajili, wafanyakazi na gharama za kuendesha kwa miezi kadhaa." },
            { objective: "O5", q: "Karani anasema malipo madogo ya pesa taslimu yataharakisha leseni yako. Unafanya nini?", options: ["Kulipa kimya kimya", "Kulipa kupitia rafiki", "Kuahidi kulipa baadaye", "Kukataa, kwa sababu rushwa ni kinyume cha sheria, ikiwemo chini ya FCPA ya Marekani"], answer: 3, why: "Kumlipa afisa wa nchi nyingine ili kupata biashara ni uhalifu chini ya Foreign Corrupt Practices Act ya Marekani." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kujaribu wazo na kupata msaada rasmi",
          minutes: 5,
          goal: "Panga jaribio dogo la gharama nafuu la wazo lako na uchague programu moja ya msaada rasmi ya kuwasiliana nayo.",
          text: [
            "Kabla ya kuhamia nchi nyingine au kutumia akiba yako, jaribu kwa udogo. Fanya jaribio (pilot): wahudumie wateja kumi, uza bidhaa chache, au shirikiana na biashara moja ya ndani kwa mwezi mmoja. Fuatilia kile wateja wanacholipa, kinachokugharimu na kinachoharibika. AI inaweza kukusaidia kutengeneza jedwali rahisi la kufuatilia.",
            "Msaada rasmi wa bure: Boots to Business ya SBA ni kozi ya ujasiriamali inayotolewa kupitia Transition Assistance Program (TAP) kwa wanajeshi walio kazini, National Guard, Reserve na wenzi wa wanajeshi; Boots to Business Reboot inaipanua kwa wastaafu wa jeshi wa vipindi vyote. Veterans Business Outreach Centers zinatoa warsha, ushauri wa mentor na msaada wa mpango wa biashara. U.S. Commercial Service inasaidia biashara za Marekani zinazouza nje.",
            "Wapelekee mfumo wako wa ukurasa mmoja. Mentor aliyewahi kufanya biashara nje ya nchi anaweza kukuepusha na makosa ya gharama kubwa."
          ],
          steps: ["Panga jaribio dogo: wateja wangapi, kwa muda gani, utapima nini.", "Uliza AI ikutengenezee jedwali rahisi la kufuatilia: mauzo, gharama, matatizo.", "Chagua programu moja ya msaada rasmi.", "Wasiliana nayo na upeleke mfumo wako wa ukurasa mmoja."],
          words: [["Jaribio (pilot)", "jaribio dogo na fupi la wazo la biashara kabla ya kuingia kikamilifu."], ["Boots to Business", "kozi ya bure ya ujasiriamali ya SBA kwa wanajeshi, wastaafu wa jeshi na wenzi wa wanajeshi."], ["Veterans Business Outreach Center", "kituo kinachoungwa mkono na SBA kinachowapa wastaafu wa jeshi mafunzo ya biashara na ushauri wa mentor."]],
          slides: [
            { title: "Jaribu kwa udogo kwanza", bullets: ["Wateja kumi, bidhaa chache au mwezi mmoja", "Fuatilia mauzo, gharama na matatizo", "AI inaweza kutengeneza jedwali la kufuatilia"] },
            { title: "Msaada rasmi wa bure", bullets: ["SBA Boots to Business na Reboot", "Veterans Business Outreach Centers", "U.S. Commercial Service kwa kuuza nje"] },
            { title: "Peleka mfumo wako wa ukurasa mmoja", bullets: ["Omba mentor aliyewahi kufanya hivyo", "Jifunze kabla ya kutumia pesa nyingi"] }
          ],
          sources: [
            { name: "SBA: Boots to Business", url: "https://www.sba.gov/sba-learning-platform/boots-business" },
            { name: "SBA: Veteran-owned businesses (VBOCs, Boots to Business Reboot)", url: "https://www.sba.gov/business-guide/grow-your-business/veteran-owned-businesses" },
            { name: "International Trade Administration: Export solutions", url: "https://www.trade.gov/export-solutions" }
          ],
          tryIt: "Kazi ya mwisho: kamilisha mfumo wako wa biashara wa ukurasa mmoja wenye mteja, tatizo, suluhisho na jinsi ujuzi wa kijeshi unavyofaa, njia za kufikia wateja, mapato, gharama na hatari tatu kubwa. Ongeza mpango wa utafiti unaotaja Country Commercial Guide, ofisi ya usajili wa biashara ya nchi hiyo na programu moja ya msaada rasmi utakayowasiliana nayo.",
          youCanNow: "kupanga jaribio dogo la wazo lako la biashara na kupata msaada rasmi wa bure wa kulijenga.",
          quickCheck: [
            { objective: "O6", q: "Jaribio (pilot) ni nini?", options: ["Jaribio dogo na fupi la wazo lako", "Kuzindua kikamilifu katika kila mji", "Mkopo wa biashara", "Aina ya leseni"], answer: 0, why: "Jaribio linapima wazo lako kwa gharama ndogo kabla ya kutumia pesa halisi." },
            { objective: "O6", q: "Umemaliza mfumo wako wa ukurasa mmoja. Unaongeza msaada gani rasmi kwenye mpango wako?", options: ["Semina ya kulipia kutoka tangazo la mtandaoni", "Hakuna msaada, anza tu", "Boots to Business au programu nyingine rasmi ya bure", "Mtu usiyemjua anayeahidi faida za haraka"], answer: 2, why: "Programu rasmi za bure kama Boots to Business ya SBA zinawafundisha wastaafu wa jeshi kuanzisha biashara." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kupanga biashara",
        questions: [
          { objective: "O4", q: "Kipi ni sehemu ya mfumo wa biashara wa ukurasa mmoja?", options: ["Rangi unayoipenda", "Mteja, tatizo na jinsi unavyopata pesa", "Orodha ya tuzo zako za kijeshi", "Nywila yako ya benki"], answer: 1, why: "Mfumo unajibu nani, tatizo gani, suluhisho gani na jinsi unavyopata pesa." },
          { objective: "O4", q: "Mfumo wa AI unasema wateja \"watalipa kwa furaha\". Hakuna mteja aliyekuambia hivyo. Wewe:", options: ["Unaliacha kama ukweli", "Unafuta mfumo wote", "Unaweka alama \"ya kujaribu\" na kuwauliza wateja halisi", "Unaongeza bei mara mbili"], answer: 2, why: "Makisio lazima yajaribiwe kwa wateja halisi." },
          { objective: "O5", q: "Bei zako za kuanzia zinapaswa kutoka wapi?", options: ["Makisio ya AI", "Makisio ya rafiki", "Habari za mwaka jana", "Nukuu halisi kutoka kwa wauzaji wa ndani"], answer: 3, why: "Bei zinazokisiwa na AI zinaweza kuwa mbali sana na ukweli; pata bei halisi za ndani." },
          { objective: "O5", q: "Afisa anadokeza kwamba malipo yataharakisha leseni yako. Wewe:", options: ["Unakataa; rushwa ni kinyume cha sheria, ikiwemo chini ya FCPA ya Marekani", "Unalipa kiasi kidogo", "Unalipa kupitia rafiki", "Unauliza AI jinsi ya kuificha"], answer: 0, why: "FCPA inafanya kuwalipa maafisa wa nchi nyingine ili kupata biashara kuwa uhalifu kwa watu wa Marekani." },
          { objective: "O6", q: "Ni programu ipi ya bure ya SBA inayofundisha ujasiriamali kwa wanajeshi wanaomaliza utumishi?", options: ["VET TEC 2.0", "Boots to Business", "TRICARE", "The Military Crosswalk"], answer: 1, why: "Boots to Business ni kozi ya ujasiriamali ya SBA ndani ya TAP." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Ujasiriamali katika Uchumi Unaoibukia",
    questions: [
      { objective: "O1", q: "Ni fursa ipi ya kawaida katika uchumi unaoibukia?", options: ["Idadi ya watu inayopungua", "Ukuaji wa haraka wa simu na pesa za simu", "Hakuna haja ya huduma", "Sheria zisizobadilika kamwe"], answer: 1, why: "Ukuaji wa simu na pesa za simu unafungua njia mpya za kuwafikia wateja." },
      { objective: "O1", q: "Ni changamoto ipi ya kawaida katika uchumi unaoibukia?", options: ["Wateja wachache kila mahali", "Hakuna simu kabisa", "Kupanda na kushuka kwa sarafu na sheria zinazobadilika", "Hakuna vijana"], answer: 2, why: "Kupanda na kushuka kwa sarafu na sheria zinazobadilika ni hatari za kawaida." },
      { objective: "O1", q: "M-Pesa nchini Kenya ni mfano wa:", options: ["Wizi wa benki", "Ofisi ya usajili ya serikali", "Kikosi cha jeshi", "Pesa za simu"], answer: 3, why: "M-Pesa inawawezesha watu kulipa na kuweka pesa kwa simu." },
      { objective: "O2", q: "Wazo imara la biashara:", options: ["Linatatua tatizo halisi ambalo watu watalipa ili litatuliwe", "Linaiga chochote kinachovuma", "Halina wateja", "Halihitaji kujaribiwa"], answer: 0, why: "Wateja wanalipa ili kutatua matatizo halisi." },
      { objective: "O2", q: "Ni ujuzi upi wa kijeshi mara nyingi unafaa masoko yanayoibukia?", options: ["Hakuna hata mmoja", "Usafirishaji, ugavi na hifadhi", "Kuandamana tu", "Makaratasi tu"], answer: 1, why: "Kusafirisha na kuhifadhi bidhaa ni pengo la kawaida." },
      { objective: "O2", q: "Wazo la biashara la sentensi moja linapaswa kuwa na:", options: ["Cheo chako", "SSN yako", "Huduma, mteja, mahali na jinsi wanavyolipa", "Bei tu"], answer: 2, why: "Sehemu hizo nne zinafanya wazo liwe wazi." },
      { objective: "O2", q: "AI inapokutolea mawazo ya biashara, nani anachagua?", options: ["AI", "Mtu usiyemjua mtandaoni", "Wazo la kwanza kwenye orodha", "Wewe"], answer: 3, why: "AI inapendekeza; wewe unaamua kwa kuzingatia ujuzi wako na soko." },
      { objective: "O3", q: "Unapaswa kutumia AI kwa nini katika utafiti wa soko?", options: ["Kupanga maswali na kuandika rasimu, kisha kukagua ukweli kwenye vyanzo rasmi", "Majibu ya mwisho ya kisheria", "Bei kamili za ndani", "Kusajili kampuni yako"], answer: 0, why: "AI inaandika rasimu; vyanzo rasmi na wateja halisi vinathibitisha." },
      { objective: "O3", q: "Country Commercial Guides zinachapishwa na:", options: ["Blogu ya mtu binafsi", "International Trade Administration", "VA", "Kampuni ya AI"], answer: 1, why: "Zinatoka International Trade Administration ya Wizara ya Biashara ya Marekani." },
      { objective: "O3", q: "Ofisi rasmi ya Kenya ya kusajili biashara ni:", options: ["VA", "SBA", "Business Registration Service", "Corporate Affairs Commission"], answer: 2, why: "Business Registration Service ya Kenya inashughulikia usajili wa kampuni." },
      { objective: "O3", q: "Kabla ya kutumia pesa halisi, unapaswa kuzungumza na:", options: ["Hakuna mtu", "Familia tu", "AI tu", "Angalau wateja watano wanaowezekana"], answer: 3, why: "Wateja halisi wanakuambia kama tatizo na bei ni za kweli." },
      { objective: "O4", q: "Mapato ni:", options: ["Pesa zinazoingia kutoka kwa wateja", "Pesa unazotumia kwa kodi ya nyumba", "Aina ya mkopo", "Fomu ya kodi"], answer: 0, why: "Mapato ni pesa zinazotokana na mauzo." },
      { objective: "O4", q: "\"Njia ya kufikia wateja\" (channel) katika mfumo wa biashara ni:", options: ["Kituo cha televisheni", "Njia unayotumia kuwafikia na kuwauzia wateja", "Mto", "Akaunti ya benki"], answer: 1, why: "Njia za kufikia wateja ni jinsi wateja wanavyokupata na kununua kutoka kwako." },
      { objective: "O4", q: "Mistari katika mfumo wako ambayo hakuna mteja aliyeithibitisha inapaswa:", options: ["Kufutwa", "Kufanywa mikubwa zaidi", "Kuwekwa alama \"ya kujaribu\"", "Kuchukuliwa kama ukweli"], answer: 2, why: "Makisio yasiyothibitishwa yanahitaji kujaribiwa." },
      { objective: "O5", q: "Gharama za kuanzia ni pamoja na:", options: ["Mauzo ya kwanza tu", "Bili ya simu yako tu", "Hakuna; biashara ni bure", "Vifaa, usajili, wafanyakazi na gharama za kuendesha kwa miezi kadhaa"], answer: 3, why: "Unahitaji pesa za kuendesha hadi mauzo yalipie gharama." },
      { objective: "O5", q: "Njia moja ya kupunguza hatari ya sarafu ni:", options: ["Kukagua bei zako mara kwa mara", "Kupuuza viwango vya kubadilisha fedha", "Kuacha bei zote zisibadilike milele", "Kulipa kwa kadi za zawadi"], answer: 0, why: "Kukagua bei mara kwa mara kunakusaidia kwenda sambamba na kupanda na kushuka kwa sarafu." },
      { objective: "O5", q: "Foreign Corrupt Practices Act ya Marekani inafanya kuwa uhalifu:", options: ["Kuanzisha biashara nje ya nchi", "Kumlipa afisa wa nchi nyingine ili kupata au kubaki na biashara", "Kutumia pesa za simu", "Kuajiri wafanyakazi wa ndani"], answer: 1, why: "FCPA inakataza kuwahonga maafisa wa nchi nyingine ili kupata biashara." },
      { objective: "O5", q: "Kwa maswali ya mikataba, kodi na usajili unapaswa kutumia:", options: ["AI tu", "Kura ya maoni ya mitandao ya kijamii", "Wakili au mhasibu wa ndani mwenye sifa", "Kubahatisha"], answer: 2, why: "Sheria za kisheria na za kodi zinahitaji mtaalamu mwenye sifa." },
      { objective: "O6", q: "Jaribio (pilot) ni:", options: ["Kuhamia nchi nyingine na akiba yako", "Mkopo", "Fomu ya serikali", "Jaribio dogo na fupi la wazo lako"], answer: 3, why: "Jaribio linapima wazo kabla ya kuingia kikamilifu." },
      { objective: "O6", q: "Boots to Business Reboot inapanua kozi ya SBA kwa:", options: ["Wastaafu wa jeshi wa vipindi vyote", "Maafisa walio kazini tu", "Raia wa nchi nyingine tu", "Hakuna mtu"], answer: 0, why: "SBA inasema Reboot inapanua Boots to Business kwa wastaafu wa jeshi wa vipindi vyote." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [0, 1, 3, 5, 7, 8, 11, 13, 16, 18]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Mteja, tatizo na kufaa", objective: "O2", notYet: "Mteja au tatizo halieleweki, au ujuzi wa kijeshi haujaunganishwa.", meets: "Mteja aliyetajwa, tatizo halisi, suluhisho na jinsi ujuzi wa kijeshi unavyofaa.", exceeds: "Mwanafunzi anaweza kusema anajuaje kwamba tatizo ni la kweli." },
      { name: "Mfumo kamili wa biashara", objective: "O4", notYet: "Njia za kufikia wateja, mapato au gharama hazipo.", meets: "Sehemu zote saba kwenye ukurasa mmoja, na makisio yamewekwa alama \"ya kujaribu\".", exceeds: "Kila mstari wa \"ya kujaribu\" una njia ya kuujaribu." },
      { name: "Hatari", objective: "O5", notYet: "Hatari chini ya tatu, au hakuna njia ya kuzipunguza.", meets: "Hatari tatu kubwa, kila moja na njia moja ya kuipunguza, na hakuna mpango unaotegemea rushwa.", exceeds: "Hatari zinajumuisha sarafu na sheria, pamoja na mtaalamu aliyetajwa wa kumuuliza." },
      { name: "Mpango wa utafiti", objective: "O3", notYet: "Hakuna vyanzo rasmi vilivyotajwa.", meets: "Unataja Country Commercial Guide na ofisi ya usajili wa biashara ya nchi hiyo.", exceeds: "Unaonyesha maswali mawili ya utafiti yaliyokwisha kujibiwa kutoka vyanzo hivyo." },
      { name: "Msaada rasmi", objective: "O6", notYet: "Hakuna programu ya msaada iliyotajwa.", meets: "Programu moja ya msaada rasmi wa bure ambayo mwanafunzi atawasiliana nayo.", exceeds: "Inajumuisha tarehe ya kuwasiliana nayo na jaribio dogo la kufanya kwanza." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaozungumza na angalau wateja watano wanaowezekana ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi wanaojiandikisha katika Boots to Business au programu nyingine rasmi ndani ya siku 90",
      "Wanafunzi wanaofanya jaribio dogo au kusajili biashara ndani ya miezi 6"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta au simu janja yenye intaneti",
      "Msaidizi wa AI wa bure: ChatGPT, Microsoft Copilot au Google Gemini",
      "Country Commercial Guides za bure za trade.gov na tovuti ya ofisi ya usajili wa biashara ya nchi iliyochaguliwa",
      "Karatasi au hati kwa ajili ya mfumo wa biashara wa ukurasa mmoja",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Waache wanafunzi wachague nchi wanazozijua; weka pamoja wanafunzi waliochagua eneo moja ili wabadilishane vyanzo.",
      "Sisitiza kwamba kila ukweli kuhusu usajili, kodi au leseni unatoka kwenye chanzo rasmi, si kwa AI.",
      "Weka wazi kwamba rushwa si sehemu ya mpango wowote kamwe, na kwamba maswali ya mikataba na kodi yanaenda kwa wakili au mhasibu wa ndani mwenye sifa.",
      "Pima mfumo wa mwisho wa biashara kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati.",
      "Waelekeze wanafunzi kwenye Boots to Business ya SBA na Veterans Business Outreach Centers kwa hatua zinazofuata."
    ]
  }
};
