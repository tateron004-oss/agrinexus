"use strict";

// Koach Learn course (Swahili translation of athletes/athletes-ai-tools.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "athletes-ai-tools-sw",
  lang: "sw",
  translationOf: "athletes-ai-tools",
  category: "Athletes",
  name: "Zana za AI kwa Wanamichezo",
  skills: "Kuchagua zana sahihi ya AI kwa kazi, Kutumia msaidizi wa AI kupanga, Kutengeneza picha kwa Canva, Kufuatilia takwimu kwa Google Sheets, Kupima faragha na gharama ya zana",
  outcome: "kuchagua na kutumia zana tatu za AI za bure kwa kazi halisi ya mwanamichezo: mpangaji, zana ya usanifu na jedwali la takwimu, na kupima kama app mpya ni salama na inafaa kabla ya kujisajili.",
  about: [
    "Kozi hii ni kwa wanamichezo na makocha wanaosikia mara kwa mara kuhusu apps za AI na wanataka kujua zipi zinasaidia kweli, na jinsi ya kuzitumia.",
    "Utajenga seti ndogo ya zana za bure: msaidizi wa AI wa kupanga na kuandika, zana ya usanifu ya kutengeneza picha, na jedwali (spreadsheet) la kufuatilia namba zako. Pia utajifunza ukaguzi wa haraka wa app yoyote mpya kabla ya kuipa taarifa zako au pesa zako.",
    "Kila somo linachukua kama dakika tano na lina kazi ya vitendo ya \"Jaribu sasa\". Jaribio la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Jenga seti yako ya zana za mwanamichezo: tumia msaidizi wa AI kupanga wiki ijayo, tengeneza picha moja ya siku ya mechi kwa Canva, na andaa Google Sheet inayofuatilia takwimu moja kwa vipindi vitano. Kisha fanya ukaguzi wa app wa maswali matano kwa app moja mpya ya michezo na uandike kama ungeitumia.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wanamichezo wa sekondari, chuo na vilabu, pamoja na makocha wanaofanya kazi nao, wanaosikia kuhusu apps za AI na wanataka kujua zipi zinasaidia kweli.",
    startingPoint: "Wanatumia simu janja kila siku kwa ujumbe, mitandao ya kijamii na video. Wengi wamejaribu msaidizi wa AI mara moja au mbili, lakini wachache wanatumia kwa makusudi zana ya usanifu, jedwali au ukaguzi wa faragha.",
    gap: "Wanamichezo wanauziwa apps nyingi zinazoahidi matokeo, na mara nyingi wanatoa taarifa za mwili au pesa bila kukagua. Seti ndogo ya zana za bure ikitumiwa vizuri inaokoa muda katika kupanga, kuweka machapisho na kufuatilia, na ukaguzi wa haraka wa app unalinda taarifa zao, pesa zao na ustahiki wao wa kushiriki mashindano.",
    constraints: [
      "Lugha rahisi, kama kiwango cha kusoma cha darasa la 7",
      "Simu au kompyuta yenye intaneti; matoleo ya bure ya zana tu",
      "Kama dakika 60 kwa jumla, katika masomo mafupi yanayoingia kati ya mazoezi na darasa",
      "Sheria za shule, ligi na kocha kuhusu nembo, mabadiliko ya mazoezi na ushauri wa afya zinatangulia",
      "Taarifa za mwili, afya na mahali ulipo ni za faragha na zitolewe tu kwa hiari"
    ],
    prerequisites: "Hakuna"
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa orodha ya kazi za kawaida za mwanamichezo au kocha", action: "kutambua aina ya zana inayofaa kila kazi: msaidizi wa AI, zana ya usanifu, jedwali au kifuatiliaji", standard: "ukipata angalau kazi 4 kati ya 5 sahihi" },
    { id: "O2", condition: "Ukitumia msaidizi wa AI wa bure na ratiba yako halisi", action: "kutengeneza mpango wa wiki katika jedwali na kuuboresha kwa maombi ya kufuatilia", standard: "ukiwa na kila muda maalum ndani yake na mazoezi aliyoweka kocha bila kubadilishwa" },
    { id: "O3", condition: "Ukitumia kiolezo cha bure cha Canva", action: "kutengeneza picha ya siku ya mechi inayoonyesha nani, lini na wapi pamoja na picha moja yenye nguvu", standard: "inayosomeka kwenye simu ndani ya sekunde mbili na inayotumia tu picha na nembo ulizo na ruhusa kuzitumia" },
    { id: "O4", condition: "Ukitumia Google Sheets", action: "kuandaa jedwali linalofuatilia takwimu moja kwa tarehe na kuchora chati ya mwenendo", standard: "ukiwa na angalau vipindi vitatu vimeingizwa, takwimu ikipimwa kwa njia ileile kila mara, na jedwali likishirikiwa tu na watu unaowachagua" },
    { id: "O5", condition: "Ukipewa app mpya ya michezo au ya AI", action: "kukagua mtengenezaji wake, taarifa, gharama, kufaa kwa timu na ahadi zake kwa ukaguzi wa app wa maswali matano", standard: "ukijibu maswali yote matano na kuandika uamuzi ulio wazi: niitumie, niijaribu kwa tahadhari, au niiache" },
    { id: "O6", condition: "Kwa wiki moja halisi", action: "kupanga utaratibu wa wiki unaotumia mpangaji wako, zana ya usanifu na jedwali la takwimu pamoja", standard: "kila zana ikipewa siku au wakati maalum na taarifa za timu zikishirikiwa tu na wafanyakazi wanaozihitaji" }
  ],
  chapters: [
    {
      name: "Sura 1: Seti yako ya zana za AI za bure",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kulinganisha zana na kazi",
          minutes: 4,
          goal: "Panga kazi za kawaida za mwanamichezo kulingana na aina sahihi ya zana.",
          text: [
            "Kuna mamia ya apps za AI, lakini nyingi zinaingia katika aina chache. Wasaidizi wa AI (ChatGPT, Microsoft Copilot, Google Gemini) wanaandika, wanaeleza na wanapanga. Zana za usanifu (kama Canva) zinatengeneza picha na video fupi. Majedwali (Google Sheets, Microsoft Excel) yanahifadhi namba zako na kuzichora kwa chati. Vifuatiliaji vya mazoezi ya mwili na apps za video za timu vinakusanya taarifa kutoka mwilini mwako au kutoka mechi zako.",
            "Anza na kazi, si na app. \"Nahitaji mpango wa wiki\" inaelekeza kwa msaidizi. \"Nahitaji chapisho la siku ya mechi\" inaelekeza kwa zana ya usanifu. \"Nataka kuona kama muda wangu wa mbio fupi unaboreka\" inaelekeza kwa jedwali.",
            "Matoleo ya bure kwa kawaida yanatosha kuanza. Jifunze vizuri zana moja ya kila aina kabla ya kuongeza nyingine."
          ],
          words: [["Msaidizi wa AI", "programu ya AI unayozungumza nayo ili ikuandikie, ikueleze au ikupangie."], ["Jedwali (spreadsheet)", "gridi ya safu na safuwima ya kuhifadhi namba na kuzichora kwa chati."]],
          slides: [
            { title: "Aina nne za zana", bullets: ["Msaidizi wa AI: kuandika, kueleza, kupanga", "Zana ya usanifu: picha na video fupi", "Jedwali: kufuatilia namba na kuzichora kwa chati", "Vifuatiliaji na apps za video: kukusanya taarifa"] },
            { title: "Anza na kazi", bullets: ["Mpango wa wiki -> msaidizi", "Chapisho la siku ya mechi -> zana ya usanifu", "Je, muda wangu unaboreka? -> jedwali"] },
            { title: "Iweke rahisi", bullets: ["Matoleo ya bure yanatosha kuanza", "Jifunze vizuri zana moja ya kila aina"] }
          ],
          tryIt: "Orodhesha kazi tano unazofanya kila wiki kama mwanamichezo au kocha (kwa mfano kupanga mazoezi, kuweka machapisho kwenye mitandao ya kijamii, kufuatilia takwimu). Kando ya kila moja, andika aina ya zana inayofaa.",
          youCanNow: "kulinganisha kazi ya mwanamichezo na aina sahihi ya zana ya AI.",
          quickCheck: [
            { objective: "O1", q: "Ni aina gani ya zana inayohifadhi namba zako na kuzigeuza kuwa chati?", options: ["Msaidizi wa AI", "Jedwali", "Zana ya usanifu", "Kifuatiliaji cha mazoezi"], answer: 1, why: "Majedwali kama Google Sheets na Excel yanahifadhi namba na kuzichora kwa chati." },
            { objective: "O1", q: "Mwenzako wa timu anataka kujaribu apps tano mpya wiki hii. Ungependekeza nini?", options: ["Pakua zote tano leo", "Lipia ile ya bei ghali zaidi", "Anza na kazi, kisha jifunze vizuri zana moja ya bure ya aina hiyo", "Epuka zana zote"], answer: 2, why: "Somo linasema anza na kazi, kisha jifunze vizuri zana moja ya kila aina kwanza." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Msaidizi wa AI kama mpangaji wako",
          minutes: 5,
          goal: "Tumia msaidizi wa AI kugeuza ratiba yako kuwa mpango wa wiki ulio wazi.",
          text: [
            "Msaidizi wa AI ni hodari wa kugeuza orodha iliyochanganyika kuwa mpango. Mpe mazoezi yako, mechi, madarasa na zamu za kazi, na umwombe mpango wa wiki katika jedwali.",
            "Kuwa mahususi: \"Mimi ni mchezaji wa voliboli wa chuo. Mazoezi ni saa 2-5 mchana (2-5 pm) Jumatatu hadi Ijumaa, mechi Jumamosi. Madarasa ni saa 9-12. Tengeneza jedwali la wiki lenye muda wa kusoma, milo na kulala.\" Kisha liboreshe kwa maombi ya kufuatilia kama \"Ongeza dakika 30 za kutazama video za mechi Jumatano.\"",
            "Msaidizi anapanga; kocha wako anaweka mazoezi. Usimwombe abadilishe mazoezi aliyoandika kocha wako, na kagua jambo lolote kuhusu afya au mapumziko na mkufunzi wako wa afya ya wanamichezo (athletic trainer)."
          ],
          steps: ["Orodhesha muda wako maalum: mazoezi, mechi, madarasa, kazi.", "Omba mpango wa wiki katika jedwali.", "Omba badiliko moja kwa wakati.", "Nakili mpango wa mwisho kwenye kalenda au maelezo yako."],
          words: [["Ombi la kufuatilia", "ombi la pili linalobadilisha jibu au kujenga juu yake."]],
          slides: [
            { title: "Mpe muda wako maalum", bullets: ["Mazoezi na mechi", "Madarasa na zamu za kazi", "Siku za safari"] },
            { title: "Omba jedwali", bullets: ["Muda wa kusoma, milo, kulala", "Kisha badiliko moja kwa wakati"] },
            { title: "Nani anaamua nini", bullets: ["AI inapanga wiki yako", "Kocha anaweka mazoezi", "Athletic trainer kwa afya na mapumziko"] }
          ],
          tryIt: "Andika muda wako halisi maalum wa wiki ijayo kwenye msaidizi wa AI na uombe mpango wa wiki katika jedwali. Omba uboreshaji mmoja.",
          youCanNow: "kugeuza ratiba yako kuwa mpango wa wiki kwa msaidizi wa AI.",
          quickCheck: [
            { objective: "O2", q: "Nini kinafanya ombi la kupanga kwa msaidizi wa AI lifanye kazi vizuri?", options: ["Kuwa mahususi kuhusu mchezo wako na muda wako maalum", "Kuliweka kuwa neno moja", "Kumwomba aandike upya mazoezi ya kocha wako", "Kuacha madarasa yako nje"], answer: 0, why: "Maelezo mahususi ya ratiba yako yanaleta mpango unaofaa wiki yako halisi." },
            { objective: "O2", q: "Mpango wako unahitaji dakika 30 za kutazama video za mechi Jumatano. Unafanya nini?", options: ["Anza mazungumzo mapya kabisa", "Futa mpango wote", "Mwombe athletic trainer wako auandike", "Mwombe msaidizi badiliko hilo moja kama ombi la kufuatilia"], answer: 3, why: "Maombi ya kufuatilia yanayoomba badiliko moja kwa wakati yanaboresha mpango." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kutengeneza picha ya siku ya mechi kwa Canva",
          minutes: 5,
          goal: "Tengeneza picha rahisi ya siku ya mechi kwa kutumia kiolezo cha bure.",
          text: [
            "Canva ni zana ya usanifu ya bure kwenye wavuti na kama app. Ina violezo vilivyo tayari kwa machapisho ya mitandao ya kijamii, vipeperushi na stories, na ina vipengele vya AI vinavyoweza kupendekeza maandishi au picha.",
            "Picha safi ya siku ya mechi ina mambo manne: nani anacheza, lini, wapi, na picha moja yenye nguvu. Tumia rangi za timu yako, maandishi makubwa yanayosomeka, na usiongeze zaidi.",
            "Tumia tu picha ulizopiga mwenyewe au ulizo na ruhusa kuzitumia. Shule nyingi zina sheria kuhusu kutumia nembo na majina ya shule, kwa hiyo uliza idara ya michezo kabla ya kuweka picha yenye nembo rasmi."
          ],
          steps: ["Fungua Canva na utafute violezo kwa \"game day\".", "Chagua kiolezo chenye ukubwa unaofaa jukwaa unalotumia.", "Badilisha maandishi: mpinzani, tarehe, saa, mahali.", "Weka picha yako mwenyewe na rangi za timu yako.", "Ipakue na uikague kwenye simu yako kabla ya kuiweka mtandaoni."],
          words: [["Kiolezo (template)", "usanifu uliotayarishwa unaoubadilisha ili uwe wako."], ["Ruhusa", "kukubaliwa na mwenye picha, nembo au jina kuvitumia."]],
          slides: [
            { title: "Canva kwa mstari mmoja", bullets: ["Zana ya usanifu ya bure yenye violezo tayari", "Kwenye wavuti na app ya simu"] },
            { title: "Picha safi ya siku ya mechi", bullets: ["Nani, lini, wapi", "Picha moja yenye nguvu", "Rangi za timu, maandishi makubwa"] },
            { title: "Baki ndani ya sheria", bullets: ["Tumia picha zako au zile unazoruhusiwa kutumia", "Uliza kabla ya kutumia nembo za shule"] }
          ],
          tryIt: "Tengeneza picha ya siku ya mechi kwa Canva kwa ajili ya mechi au mazoezi yako yajayo. Ikague kwenye simu yako: je, unaweza kusoma saa na mahali ndani ya sekunde mbili?",
          youCanNow: "kutengeneza picha safi ya siku ya mechi kutoka kwa kiolezo na kutumia picha na nembo kwa njia sahihi.",
          quickCheck: [
            { objective: "O3", q: "Canva ni nini?", options: ["Zana ya usanifu ya bure yenye violezo vya machapisho na vipeperushi", "Jedwali la takwimu", "Kifuatiliaji cha mazoezi", "Sheria ya shule kuhusu nembo"], answer: 0, why: "Canva ni zana ya usanifu ya bure kwenye wavuti na kama app, yenye violezo vilivyo tayari." },
            { objective: "O3", q: "Umemaliza picha yako. Ufanye nini kabla ya kuiweka mtandaoni?", options: ["Ongeza maandishi na rangi zaidi", "Iweke mara moja", "Ipakue na uikague kwenye simu yako", "Weka picha uliyoipata mtandaoni"], answer: 2, why: "Kukagua kwenye simu kunaonyesha kama saa na mahali vinasomeka haraka." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Seti yako ya zana za AI za bure",
        questions: [
          { objective: "O1", q: "Unataka kuona kama muda wako wa mbio fupi unaboreka. Ni aina gani ya zana inafaa zaidi?", options: ["Zana ya usanifu", "App ya muziki", "Jedwali", "Kichujio cha picha"], answer: 2, why: "Majedwali yanahifadhi namba na kuzichora kwa chati kadiri muda unavyopita." },
          { objective: "O1", q: "Unapaswa kuanza na nini unapochagua zana?", options: ["Kazi unayohitaji kufanywa", "App inayopendwa zaidi", "App ya bei ghali zaidi", "Chochote anachopendekeza mtu usiyemjua"], answer: 0, why: "Anza na kazi, kisha chagua aina ya zana inayoifaa." },
          { objective: "O2", q: "Msaidizi wa AI anapendekeza kubadilisha mazoezi aliyoandika kocha wako. Unafanya nini?", options: ["Fuata AI", "Kosa mazoezi", "Weka chapisho kuhusu jambo hilo", "Baki na mazoezi ya kocha na umuulize kocha ukiwa na maswali"], answer: 3, why: "AI inapanga wiki yako; kocha wako anaweka mazoezi." },
          { objective: "O3", q: "Ni mambo gani manne yanayofaa kuwa kwenye picha ya siku ya mechi?", options: ["Nywila yako, anwani, simu, barua pepe", "Nani, lini, wapi, picha moja yenye nguvu", "Picha kumi na aina tano za herufi", "Nembo tu"], answer: 1, why: "Maelezo yaliyo wazi na picha moja yenye nguvu yanafanya picha isomeke." },
          { objective: "O3", q: "Unataka kutumia nembo ya shule yako kwenye chapisho. Ufanye nini kwanza?", options: ["Inakili kutoka kwenye tovuti", "Uliza idara ya michezo", "Badilisha rangi", "Itumie na utumaini mema"], answer: 1, why: "Shule nyingi zina sheria kuhusu nembo zao, kwa hiyo uliza kwanza." }
        ]
      }
    },
    {
      name: "Sura 2: Kufuatilia, kupima na kujenga seti yako",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kufuatilia takwimu moja kwa Google Sheets",
          minutes: 5,
          goal: "Andaa jedwali linalofuatilia takwimu moja na kuionyesha kama chati.",
          text: [
            "Chagua takwimu moja yenye maana kwako na unayoweza kuipima kwa njia ileile kila mara: mipira ya adhabu (free throws) uliyofunga kati ya 20, muda wa yadi 40, muda wa maili moja, au usahihi wa serve.",
            "Katika Google Sheets, tengeneza safuwima mbili: Tarehe na takwimu yako. Ongeza safu baada ya kila kipindi. Ukiwa na safu chache, chagua safuwima zote mbili na uweke chati ili uone mwenendo.",
            "Unaweza kumwomba msaidizi wa AI akueleze hatua za jedwali au fomula, kama jinsi ya kupata wastani wako. Weka jedwali kuwa la faragha isipokuwa ukiamua kulishiriki na kocha wako."
          ],
          steps: ["Fungua Google Sheets na uanzishe jedwali tupu.", "Andika \"Date\" (Tarehe) katika A1 na takwimu yako katika B1.", "Ongeza safu moja baada ya kila kipindi.", "Chagua safuwima zote mbili na uweke chati.", "Lishiriki na kocha wako tu ikiwa unataka maoni."],
          words: [["Mwenendo", "mwelekeo ambao namba zako zinaenda kadiri muda unavyopita: juu, chini au sawa."], ["Fomula", "agizo fupi ndani ya kisanduku linalofanya hesabu, kama wastani."]],
          slides: [
            { title: "Chagua takwimu moja", bullets: ["Inayopimwa kwa njia ileile kila mara", "Mifano: free throws kati ya 20, muda wa maili moja"] },
            { title: "Andaa jedwali", bullets: ["Safuwima A: Tarehe", "Safuwima B: takwimu yako", "Safu moja kwa kila kipindi"] },
            { title: "Ona mwenendo", bullets: ["Chagua safuwima zote mbili na uweke chati", "Omba AI ikueleze fomula ukikwama"] }
          ],
          tryIt: "Andaa Google Sheet kwa takwimu moja. Ingiza angalau vipindi vitatu vilivyopita (au namba za mazoezi) na uweke chati.",
          youCanNow: "kufuatilia takwimu moja katika jedwali na kuichora kwa chati ili uone mwenendo wako.",
          quickCheck: [
            { objective: "O4", q: "Jedwali lako la takwimu linaanza na safuwima zipi mbili?", options: ["Jina na timu", "Mpinzani na matokeo", "Kocha na nafasi", "Tarehe na takwimu yako"], answer: 3, why: "Tarehe katika safuwima A na takwimu katika safuwima B vinakuwezesha kuona mwenendo kadiri muda unavyopita." },
            { objective: "O4", q: "Unataka maoni kuhusu jedwali lako la takwimu. Unafanya nini?", options: ["Weka kiungo hadharani", "Lishiriki na kocha wako tu", "Litume kwa timu nyingine", "Lichapishe kwa ukuta wa chumba cha kubadilishia nguo"], answer: 1, why: "Weka jedwali kuwa la faragha na ulishiriki tu na watu unaowachagua, kama kocha wako." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ukaguzi wa app wa maswali matano",
          minutes: 5,
          goal: "Pima app mpya ya michezo au ya AI kabla ya kuipa taarifa au pesa.",
          text: [
            "Apps mpya zinaahidi kukufanya uwe na kasi zaidi, kukupatia nafasi ya kusajiliwa na timu ya chuo (recruited) au kuongeza wafuasi wako. Kabla ya kujisajili, fanya ukaguzi wa haraka wa maswali matano.",
            "1. Nani anaitengeneza, na je, iko kwenye duka rasmi la apps? 2. Inakusanya taarifa gani, na je, unaweza kuzifuta? (Soma muhtasari wa sera ya faragha.) 3. Inagharimu kiasi gani baada ya kipindi cha majaribio cha bure? 4. Je, kocha wako au shule yako tayari inatumia kitu kinachofanana? 5. Je, inaahidi matokeo yanayoonekana mazuri mno kuwa kweli, kama ufadhili wa masomo (scholarship) uliohakikishwa?",
            "Taarifa za mwili na afya, kama mapigo ya moyo, usingizi na mahali ulipo, ni za faragha. Zishiriki tu na apps unazoziamini, na uzime kushiriki mahali ulipo ambako huhitaji."
          ],
          steps: ["Angalia nani anaitengeneza na kwamba iko kwenye duka rasmi.", "Soma inakusanya taarifa gani na jinsi ya kuzifuta.", "Tafuta bei baada ya kipindi chochote cha majaribio cha bure.", "Muulize kocha wako timu tayari inatumia nini.", "Achana na matokeo yaliyohakikishwa."],
          words: [["Sera ya faragha", "maelezo ya app kuhusu taarifa inazokusanya na inachofanya nazo."], ["Kipindi cha majaribio cha bure (free trial)", "muda mfupi wa bure kabla app haijaanza kukutoza pesa."]],
          slides: [
            { title: "Kabla ya kujisajili", bullets: ["Nani anaitengeneza? Duka rasmi?", "Inakusanya taarifa gani?", "Inagharimu kiasi gani baada ya majaribio?"] },
            { title: "Maswali mawili zaidi", bullets: ["Je, timu yangu tayari inatumia kitu?", "Je, inaahidi mno?"] },
            { title: "Linda taarifa za mwili", bullets: ["Mapigo ya moyo, usingizi, mahali ulipo ni faragha", "Zima kushiriki mahali ambako huhitaji"] }
          ],
          tryIt: "Chagua app moja ya michezo au ya AI uliyoiona ikitangazwa. Jibu maswali matano kuihusu katika maelezo na uamue: niitumie, niijaribu kwa tahadhari, au niiache.",
          youCanNow: "kukagua mtengenezaji, taarifa, gharama na ahadi za app mpya kabla ya kujisajili.",
          quickCheck: [
            { objective: "O5", q: "Lipi kati ya haya ni mojawapo ya maswali ya ukaguzi wa app?", options: ["Nembo ina rangi gani?", "Inaonyesha matangazo mangapi?", "Inagharimu kiasi gani baada ya kipindi cha majaribio cha bure?", "Je, ina hali ya giza (dark mode)?"], answer: 2, why: "Bei baada ya majaribio ni swali la 3 la ukaguzi wa maswali matano." },
            { objective: "O5", q: "App ya mazoezi inaomba kushiriki mahali ulipo wakati wote, lakini haihitaji. Unafanya nini?", options: ["Zima kushiriki mahali ulipo", "Ruhusu ili app ifanye kazi haraka zaidi", "Shiriki mapigo ya moyo yako pia", "Ipe nywila yako"], answer: 0, why: "Mahali ulipo ni taarifa za faragha, kwa hiyo zima kushiriki ambako huhitaji." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kuunganisha seti yako ya zana",
          minutes: 5,
          goal: "Tumia zana zote tatu pamoja kwa wiki moja halisi.",
          text: [
            "Seti yako ya zana inafanya kazi vizuri zaidi kama utaratibu wa kila wiki. Jumapili: tumia msaidizi wako wa AI kupanga wiki. Kabla ya mechi: tengeneza picha. Baada ya kila kipindi: ongeza takwimu yako kwenye jedwali.",
            "Andika orodha fupi ya zana zako na kazi ya kila moja, ili usiwe unajaribu apps mpya kila wiki. Ongeza zana mpya tu ukiwa na kazi ambayo seti yako haiwezi kufanya.",
            "Makocha wanaweza kutumia seti hiyohiyo kwa timu: mpango wa wiki kwa wafanyakazi, picha moja kwa kila mechi, na jedwali la pamoja la takwimu za timu. Shiriki majedwali ya timu tu na wafanyakazi wanaoyahitaji."
          ],
          steps: ["Andika orodha ya zana zako: mpangaji, usanifu, jedwali.", "Jumapili: panga wiki kwa msaidizi.", "Wiki ya mechi: tengeneza picha moja.", "Baada ya kila kipindi: ongeza takwimu yako.", "Pitia chati pamoja na kocha wako kila baada ya wiki chache."],
          words: [["Utaratibu", "hatua unazorudia wakati uleule kila wiki."], ["Seti ya zana", "kundi dogo la zana unazotumia tena na tena."]],
          slides: [
            { title: "Utaratibu wako wa wiki", bullets: ["Jumapili: panga wiki", "Wiki ya mechi: picha moja", "Baada ya kila kipindi: ongeza takwimu yako"] },
            { title: "Weka seti ndogo", bullets: ["Andika kazi ya kila zana", "Ongeza zana kwa kazi mpya tu"] },
            { title: "Kwa makocha", bullets: ["Mpango wa wiki wa wafanyakazi", "Picha moja kwa kila mechi", "Jedwali la pamoja la takwimu kwa wafanyakazi tu"] }
          ],
          tryIt: "Kazi ya mwisho: panga wiki ijayo kwa msaidizi wa AI, tengeneza picha moja ya siku ya mechi kwa Canva, andaa jedwali linalofuatilia takwimu moja, na fanya ukaguzi wa maswali matano kwa app moja mpya.",
          youCanNow: "kutumia kundi dogo la zana za AI za bure pamoja kama utaratibu wa kila wiki.",
          quickCheck: [
            { objective: "O6", q: "Katika utaratibu wa wiki, unaongeza takwimu yako kwenye jedwali lini?", options: ["Mara moja kwa msimu", "Kabla ya mechi tu", "Ukiweka rekodi tu", "Baada ya kila kipindi"], answer: 3, why: "Kuongeza takwimu baada ya kila kipindi kunafanya mwenendo ukamilike." },
            { objective: "O6", q: "Una kazi ambayo seti yako ya sasa haiwezi kufanya. Unafanya nini?", options: ["Jaribu app mpya kila wiki hata hivyo", "Ongeza zana moja mpya kwa kazi hiyo na uifanyie ukaguzi wa app", "Achana na kazi hiyo", "Badilisha seti yako yote"], answer: 1, why: "Ongeza zana mpya tu ukiwa na kazi ambayo seti yako haiwezi kufanya, na uikague kwanza." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kufuatilia, kupima na kujenga seti yako",
        questions: [
          { objective: "O4", q: "Nini kinafanya takwimu ifae kufuatiliwa?", options: ["Njia ya kuipima inabadilika kila wiki", "Kocha wako tu ndiye anayeweza kuiona", "Ni makisio", "Unaweza kuipima kwa njia ileile kila mara"], answer: 3, why: "Kupima kwa njia ileile kunaufanya mwenendo uwe na maana." },
          { objective: "O4", q: "Katika jedwali lako, nini kinaingia katika safuwima A?", options: ["Tarehe", "Nywila yako", "Jina la mpinzani wako", "Anwani ya nyumbani kwako"], answer: 0, why: "Tarehe katika safuwima A na takwimu katika safuwima B vinakuwezesha kuchora chati ya mwenendo." },
          { objective: "O5", q: "App inaahidi ufadhili wa masomo uliohakikishwa ukilipa. Ukaguzi wa app unasema nini?", options: ["Lipa mara moja", "Shiriki mahali ulipo", "Inaahidi mno, kwa hiyo achana nayo", "Ipe msimbo wako wa kuingia"], answer: 2, why: "Matokeo yaliyohakikishwa ni ishara ya hatari." },
          { objective: "O5", q: "Ipi ni taarifa ya faragha ya mwili?", options: ["Rangi ya jezi yako", "Jina la timu yako", "Zoezi unalolipenda", "Mapigo ya moyo na usingizi wako"], answer: 3, why: "Mapigo ya moyo, usingizi na mahali ulipo ni taarifa za faragha." },
          { objective: "O6", q: "Unapaswa kuongeza zana mpya kwenye seti yako lini?", options: ["Kila wiki", "Ukiwa na kazi ambayo seti yako haiwezi kufanya", "Rafiki anapoweka chapisho kuhusu moja", "Kamwe"], answer: 1, why: "Seti ndogo unayoijua vizuri ni bora kuliko apps nyingi unazozitumia kwa shida." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Zana za AI kwa Wanamichezo",
    questions: [
      { objective: "O1", q: "Ni aina gani ya zana inayoandika, kueleza na kupanga?", options: ["Saa ya kupima muda", "Jedwali tu", "Msaidizi wa AI", "Kamera"], answer: 2, why: "Wasaidizi wa AI kama ChatGPT, Copilot na Gemini wanaandika na kupanga." },
      { objective: "O1", q: "Ipi ni zana ya usanifu ya bure yenye violezo?", options: ["Canva", "Kikokotoo", "Ubao wa matokeo", "Kitabu cha mbinu za mchezo"], answer: 0, why: "Canva ina violezo vya bure vya machapisho na vipeperushi." },
      { objective: "O1", q: "\"Nahitaji chapisho la siku ya mechi\" inaelekeza kwa:", options: ["Zana ya usanifu", "Jedwali", "Kifuatiliaji cha mazoezi", "Kipima mapigo ya moyo"], answer: 0, why: "Picha ni kazi ya zana ya usanifu." },
      { objective: "O1", q: "Unapaswa kujifunza zana ngapi za kila aina kwanza?", options: ["Tano", "Nyingi kadiri iwezekanavyo", "Moja, vizuri", "Hakuna"], answer: 2, why: "Kujifunza vizuri zana moja ya kila aina ndiyo njia ya haraka zaidi ya kuanza." },
      { objective: "O2", q: "Unapaswa kumpa msaidizi wa AI nini ili atengeneze mpango wa wiki?", options: ["Nywila yako", "Muda wako maalum: mazoezi, mechi, madarasa", "Rekodi zako za matibabu", "Namba yako ya benki"], answer: 1, why: "Muda maalum unamwezesha kujenga mpango kuzunguka wiki yako." },
      { objective: "O2", q: "Nani anaweka mazoezi yako?", options: ["AI", "Tangazo", "App yoyote", "Kocha wako"], answer: 3, why: "Msaidizi anapanga; kocha anaweka mazoezi." },
      { objective: "O2", q: "Njia bora ya kuboresha mpango wa AI ni:", options: ["Kukubali ule wa kwanza", "Kuandika nywila yako", "Badiliko moja kwa wakati", "Kuanzisha ugomvi nayo"], answer: 2, why: "Badiliko moja lililo wazi kwa wakati linaiweka kwenye njia sahihi." },
      { objective: "O3", q: "Picha ya siku ya mechi inayosomeka ina:", options: ["Maandishi madogo sana na picha kumi", "Emoji tu", "Namba yako ya simu", "Nani, lini, wapi na picha moja yenye nguvu"], answer: 3, why: "Maelezo yaliyo wazi na picha moja ni rahisi kusoma haraka." },
      { objective: "O3", q: "Ni picha zipi unaweza kutumia kwenye picha yako ya mechi?", options: ["Picha zako mwenyewe au zile ulizo na ruhusa kuzitumia", "Picha yoyote ya mtandaoni", "Picha kutoka ukurasa wa mpinzani", "Picha za watu usiowajua"], answer: 0, why: "Tumia picha unazomiliki au ulizo na ruhusa kuzitumia." },
      { objective: "O3", q: "Kabla ya kutumia nembo ya shule yako, unapaswa:", options: ["Kuichora upya", "Kuuliza idara ya michezo", "Kuitumia hata hivyo", "Kuinunua mtandaoni"], answer: 1, why: "Shule mara nyingi zina sheria kuhusu nembo." },
      { objective: "O4", q: "Ni takwimu gani rahisi kufuatilia kwa njia ileile kila mara?", options: ["Ulivyojisikia kuhusu safari ya basi", "Mashabiki walichofikiri", "Free throws ulizofunga kati ya 20", "Hali ya moyo wa mpinzani wako"], answer: 2, why: "Jaribio lisilobadilika kama mipira uliyofunga kati ya 20 ni la uthabiti." },
      { objective: "O4", q: "Unaonaje mwenendo wako katika Google Sheets?", options: ["Chagua safuwima na uweke chati", "Lichapishe", "Futa safu za zamani", "Litume kwa barua pepe kwa mtu usiyemjua"], answer: 0, why: "Chati inaonyesha mwelekeo wa namba zako." },
      { objective: "O4", q: "Umekwama kwenye fomula ya wastani wako. Hatua nzuri ni:", options: ["Kuacha kufuatilia", "Kukisia namba", "Kushiriki nywila yako", "Kumwomba msaidizi wa AI akueleze fomula"], answer: 3, why: "Wasaidizi wa AI wanaeleza vizuri hatua za jedwali." },
      { objective: "O4", q: "Nani anapaswa kuona jedwali lako binafsi la takwimu?", options: ["Kila mtu mtandaoni", "Watu unaowachagua tu, kama kocha wako", "Timu pinzani", "Watu usiowajua"], answer: 1, why: "Liweke kuwa la faragha na ulishiriki tu kwa hiari." },
      { objective: "O5", q: "Sera ya faragha inakuambia nini?", options: ["Rangi za app", "Taarifa ambazo app inakusanya na inachofanya nazo", "Mazoezi yako", "Matokeo ya mechi"], answer: 1, why: "Inaeleza jinsi app inavyoshughulikia taarifa zako." },
      { objective: "O5", q: "Kabla ya kipindi cha majaribio cha bure, unapaswa kukagua:", options: ["Nembo ya app", "App ya mpinzani wako", "Hakuna kitu", "Bei baada ya majaribio kuisha"], answer: 3, why: "Apps nyingi zinaanza kutoza pesa baada ya majaribio." },
      { objective: "O5", q: "Ni ahadi ipi ya app ambayo ni ishara ya hatari?", options: ["\"Ufadhili wa masomo uliohakikishwa\"", "\"Fuatilia mbio zako\"", "\"Tengeneza picha\"", "\"Violezo vya bure\""], answer: 0, why: "Hakuna anayeweza kuhakikisha ufadhili wa masomo." },
      { objective: "O5", q: "Kushiriki mahali ulipo ambako huhitaji kunapaswa:", options: ["Kushirikiwa na kila mtu", "Kuwekwa mtandaoni", "Kuzimwa", "Kuachwa wazi milele"], answer: 2, why: "Mahali ulipo ni taarifa za faragha; zishiriki tu inapohitajika." },
      { objective: "O6", q: "Katika utaratibu wa wiki, unapanga wiki lini?", options: ["Baada ya msimu", "Kamwe", "Wakati wa mechi", "Jumapili, kwa msaidizi wako wa AI"], answer: 3, why: "Kupanga mwanzoni mwa wiki kunaandaa kila kitu kingine." },
      { objective: "O6", q: "Kocha anashiriki jedwali la takwimu za timu. Nani anapaswa kulifikia?", options: ["Yeyote mwenye kiungo mtandaoni", "Wafanyakazi wanaolihitaji tu", "Makocha wa timu pinzani", "Mashabiki"], answer: 1, why: "Taarifa za timu zinapaswa kwenda tu kwa watu wanaozihitaji." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      4,
      7,
      10,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Mpango wa wiki",
        objective: "O2",
        notYet: "Mpango unakosa muda maalum, au unabadilisha mazoezi ya kocha.",
        meets: "Jedwali la wiki lenye muda wote maalum, kusoma, milo na kulala, lililoboreshwa kwa angalau ombi moja la kufuatilia.",
        exceeds: "Mpango umenakiliwa kwenye kalenda na maswali ya afya au mapumziko yameandikwa kwa ajili ya athletic trainer."
      },
      {
        name: "Picha ya siku ya mechi",
        objective: "O3",
        notYet: "Nani, lini au wapi inakosekana, ni vigumu kusoma kwenye simu, au inatumia picha au nembo bila ruhusa.",
        meets: "Inaonyesha nani, lini, wapi na picha moja yenye nguvu, inasomeka kwenye simu ndani ya sekunde mbili, ikiwa na picha zilizoruhusiwa tu.",
        exceeds: "Inatumia rangi za timu, ina ukubwa unaofaa jukwaa sahihi, na matumizi ya nembo yalikubaliwa na idara ya michezo."
      },
      {
        name: "Jedwali la takwimu",
        objective: "O4",
        notYet: "Hakuna tarehe, vipindi chini ya vitatu, au hakuna chati.",
        meets: "Safuwima za tarehe na takwimu, angalau vipindi vitatu vilivyopimwa kwa njia ileile, na chati ya mwenendo.",
        exceeds: "Vipindi vitano vimeingizwa, wastani umeongezwa, na jedwali limeshirikiwa na kocha tu kwa ajili ya maoni."
      },
      {
        name: "Ukaguzi wa app",
        objective: "O5",
        notYet: "Baadhi ya maswali matano hayajajibiwa au hakuna uamuzi.",
        meets: "Maswali yote matano yamejibiwa na kuna uamuzi ulio wazi: niitumie, niijaribu kwa tahadhari, au niiache.",
        exceeds: "Uamuzi unatoa sababu kutoka kwenye sera ya faragha na bei, na kushiriki taarifa kusikohitajika kumezimwa."
      },
      {
        name: "Utaratibu wa zana",
        objective: "O6",
        notYet: "Hakuna orodha ya zana, au hakuna wakati maalum kwa kila zana.",
        meets: "Orodha ya zana iliyoandikwa yenye siku au wakati maalum wa kupanga, picha na takwimu.",
        exceeds: "Utaratibu una mapitio ya kawaida ya chati pamoja na kocha na kanuni ya lini kuongeza zana mpya."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kazi ya mwisho na kupata Anafikia au Anazidi katika kila mstari wa rubriki",
      "Wanafunzi ambao bado wanatumia mpango wa wiki na jedwali la takwimu siku 30 baadaye (utafiti wa kufuatilia)",
      "Wanafunzi wanaoripoti kuacha au kufuta app, au kuzima kushiriki taarifa, baada ya kufanya ukaguzi wa app",
      "Wanafunzi wanaochukua kozi inayofuata ya Wanamichezo, kama AI kwa Mazoezi na Utendaji"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye intaneti",
      "Msaidizi wa AI wa bure (ChatGPT, Microsoft Copilot au Google Gemini)",
      "Akaunti ya bure ya Canva",
      "Akaunti ya bure ya Google kwa ajili ya Google Sheets",
      "Ratiba yako ya wiki ijayo na takwimu moja unayoweza kupima",
      "Kama dakika 60, zilizogawanywa katika siku chache"
    ],
    facilitatorNotes: [
      "Ifanye kama kipindi cha timu: kila mtu atumie zana zilezile tatu za bure ili wanamichezo wasaidiane.",
      "Wakumbushe wanamichezo kwamba msaidizi anapanga wiki lakini kocha anaweka mazoezi; maswali ya afya na mapumziko yapelekwe kwa athletic trainer.",
      "Kagua sheria za shule au ligi kuhusu nembo na machapisho ya wanamichezo kabla ya somo la picha.",
      "Usikusanye wewe mwenyewe taarifa za mwili au afya za wanamichezo; majedwali ya takwimu yanabaki ya faragha isipokuwa mwanamichezo akiamua kuyashiriki.",
      "Waambie wanamichezo waanze jedwali la takwimu mapema ili wawe na vipindi vitatu hadi vitano kufikia kazi ya mwisho."
    ]
  }
};
