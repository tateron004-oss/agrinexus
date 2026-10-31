"use strict";

// Koach Learn course (Swahili translation of youth/youth-ai-creativity-learning.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "youth-ai-creativity-learning-sw",
  lang: "sw",
  translationOf: "youth-ai-creativity-learning",
  category: "Youth",
  name: "Zana za AI kwa Ubunifu na Kujifunza",
  skills: "Kubuni mawazo kwa AI, Kutengeneza muundo kwa Canva, Kujifunza ujuzi mpya na mwalimu wa AI, Kutengeneza maswali ya mazoezi, Kutoa sifa na kubaki halisi",
  outcome: "kutumia zana za AI za bure kubuni mawazo ya mradi wa ubunifu, kutengeneza muundo kwa kutumia wazo hilo, na kujifundisha ujuzi mpya ukiwa na mwenzi wa masomo wa AI, huku kazi ikibaki yako na ukitaja mahali AI ilipokusaidia.",
  about: [
    "Kozi hii ni ya vijana wa umri wa kama miaka 13 hadi 18 wanaopenda kutengeneza vitu (mabango, hadithi, midundo ya muziki, mawazo ya michezo, matangazo ya klabu) na wanaotaka kujifunza haraka zaidi.",
    "Utatumia AI kama mwenzi wa ubunifu na kama mwenzi wa masomo. Utabuni mawazo, utaunda bango, utajifunza kitu kipya hatua kwa hatua na utajipima mwenyewe. Pia utajifunza jinsi ya kubaki na sauti yako na kuwa mkweli kuhusu kazi ambayo AI ilifanya.",
    "Kabla ya kuanza: angalia sheria ya umri ya kila zana, fuata sheria za shule yako kuhusu AI, na zungumza na mzazi au mlezi kabla ya kufungua akaunti mpya. Kila somo linachukua kama dakika tano na linaishia na kazi ya \"Jaribu sasa\"."
  ],
  finalTask: "Tengeneza bango la klabu au tukio la shule, halisi au la kubuni. Tumia AI kubuni angalau mawazo matano, chagua moja na ulifanye kuwa lako, unda bango katika Canva au Google Slides, kisha ongeza ujumbe mdogo chini unaosema jinsi AI ilivyokusaidia.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Vijana wa umri wa kama miaka 13 hadi 18 wanaopenda kutengeneza vitu kama mabango, hadithi, midundo ya muziki, mawazo ya michezo na matangazo ya klabu, na wanaotaka kujifunza haraka zaidi.",
    startingPoint: "Wanatumia simu na kompyuta za shule, na huenda wamejaribu msaidizi wa mazungumzo (chat) au app ya kubuni. Wachache hutumia AI kwa makusudi kubuni mawazo, kusoma hatua kwa hatua au kujipima, na wengi hawana uhakika ni matumizi gani ya AI ni ya kweli na halali.",
    gap: "Vijana wanaweza kutumia AI kuondoka mahali walipokwama, kubuni haraka zaidi na kusoma kwa akili zaidi, lakini kuitumia kunakili kazi kunaruka kujifunza na kunaweza kuvunja sheria za shule. Wanahitaji kutumia AI kama mwenzi wa ubunifu na wa masomo huku wakibaki na sauti yao na kutaja msaada waliopata.",
    constraints: [
      "Mipaka ya umri: zana na vipengele vya picha vya AI vina sheria zao za umri; mzazi au mlezi anakubali akaunti mpya",
      "Sheria za shule kuhusu AI na picha zilizotengenezwa na AI zinatofautiana kati ya shule, darasa na shindano",
      "Vifaa: simu, kompyuta ya shule au kompyuta ya maktaba; mipango ya bure tu",
      "Faragha: hakuna taarifa binafsi katika prompt wala katika maelezo yanayobandikwa",
      "Masomo mafupi na maneno rahisi kwa viwango tofauti vya kusoma"
    ],
    prerequisites: "Kozi \"AI ni Nini? (kwa Vijana)\" ni mwanzo mzuri lakini si lazima."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa mradi wa ubunifu", action: "kutumia msaidizi wa AI kuorodhesha mawazo mengi tofauti, kisha kuyabadilisha au kuyaunganisha kuwa wazo lako mwenyewe", standard: "ukipata angalau mawazo matano na kufanya moja kuwa lako" },
    { id: "O2", condition: "Ukitumia zana ya bure ya kubuni kama Canva au Google Slides", action: "kutengeneza bango rahisi kutoka kwenye kiolezo, baada ya kuangalia sheria ya umri ya zana na mipangilio ya shule", standard: "likiwa na kichwa kimoja kikubwa na tarehe, saa na mahali vilivyo wazi" },
    { id: "O3", condition: "Kwa kazi yoyote ambayo AI ilisaidia", action: "kuandika ujumbe wa sifa unaosema AI ilifanya nini na wewe ulifanya nini, na kuongeza kitu ambacho ni wewe tu ungeweza kutengeneza", standard: "ukifuata sheria za darasa au shindano kuhusu AI na bila kutumia sanaa ya mtu mwingine bila ruhusa" },
    { id: "O4", condition: "Ukipewa ujuzi mdogo unaotaka kujifunza", action: "kuomba msaidizi wa AI akufundishe kwa hatua ndogo katika kiwango chako na akupime baada ya kila hatua", standard: "ukitaja ujuzi, kiwango chako na ombi la hatua moja kwa wakati" },
    { id: "O5", condition: "Ukipewa maelezo yako mwenyewe ya darasani", action: "kutengeneza maswali ya mazoezi au kadi za kukumbuka kwa AI, kuyajibu kwanza, na kukagua majibu", standard: "bila taarifa binafsi na kila jibu likikaguliwa kwa maelezo yako au kitabu cha kiada" },
    { id: "O6", condition: "Kabla na baada ya kutumia AI kwa kazi za shule", action: "kuamua kama matumizi ya AI yanakusaidia kujifunza au yanaruka kujifunza, kwa kutumia jaribio la kesho na sheria za mwalimu wako", standard: "ukimuuliza mwalimu wako kwanza kila unapokuwa huna uhakika" }
  ],
  chapters: [
    {
      name: "Sura 1: AI kama mwenzi wako wa ubunifu",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kubuni mawazo kwa AI",
          minutes: 5,
          goal: "Tumia msaidizi wa AI kupata mawazo mengi, kisha chagua bora na uliboreshe.",
          text: [
            "Kubuni mawazo (brainstorming) ni kutoa mawazo mengi haraka, bila kuyahukumu bado. Wasaidizi wa AI kama ChatGPT, Microsoft Copilot na Google Gemini ni hodari katika hili kwa sababu wanaweza kuorodhesha mawazo mengi kwa sekunde chache.",
            "Omba mawazo mengi na ya aina tofauti: \"Nipe mawazo 10 tofauti ya bango la klabu ya roboti ya shule yetu. Mengine ya kuchekesha, mengine ya kawaida na mengine ya kijasiri.\" Kisha wewe unachagua. Matokeo bora huja unapochanganya mawazo ya AI na yako mwenyewe.",
            "Chukulia mawazo ya AI kama mahali pa kuanzia. Yabadilishe, unganisha mawili, au tumia moja kuzaa kitu kipya. Hivyo wazo la mwisho linakuwa lako kweli."
          ],
          steps: ["Sema unatengeneza nini na ni kwa ajili ya nani.", "Omba mawazo mengi ya mitindo tofauti.", "Zungushia mawili au matatu unayopenda.", "Yabadilishe au yaunganishe kuwa wazo lako."],
          words: [["Kubuni mawazo (brainstorm)", "kutoa mawazo mengi haraka kabla ya kuchagua moja."]],
          slides: [
            { title: "Kubuni mawazo = mawazo mengi, haraka", bullets: ["Usihukumu mawazo bado", "AI inaweza kuorodhesha mawazo 10 kwa sekunde"] },
            { title: "Omba aina tofauti", bullets: ["Sema unatengeneza nini na kwa ajili ya nani", "Omba mawazo ya kuchekesha, ya kawaida na ya kijasiri"] },
            { title: "Lifanye kuwa lako", bullets: ["Chagua mawili au matatu unayopenda", "Yabadilishe au yaunganishe", "Ongeza ubunifu wako mwenyewe"] }
          ],
          tryIt: "Chagua mradi: bango la klabu, hadithi fupi, ngazi ya mchezo au wazo la wimbo. Mwombe msaidizi wa AI unayeruhusiwa kutumia mawazo 10 tofauti. Chagua mawili unayopenda zaidi na uandike jinsi ungeyabadilisha.",
          youCanNow: "kubuni mawazo kwa AI na kugeuza mawazo yake kuwa yako mwenyewe.",
          quickCheck: [
            { objective: "O1", q: "Sheria kuu wakati wa kubuni mawazo ni ipi?", options: ["Chagua wazo la kwanza", "Tumia mawazo ya AI tu", "Hukumu kila wazo papo hapo", "Toa mawazo mengi kabla ya kuyahukumu"], answer: 3, why: "Kubuni mawazo ni kutoa mawazo mengi haraka, bila kuyahukumu bado." },
            { objective: "O1", q: "AI imekupa mawazo 10 ya bango, na mawili yanakaribia unachotaka. Unafanya nini?", options: ["Nakili la kwanza kama lilivyo", "Yaunganishe au uyabadilishe na uongeze ubunifu wako", "Omba mengine 100 na usichague kamwe", "Acha kutengeneza bango"], answer: 1, why: "Kuchanganya mawazo ya AI na yako kunafanya wazo la mwisho kuwa lako kweli." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kubuni kwa zana za AI za bure",
          minutes: 5,
          goal: "Tengeneza bango rahisi au picha ya tangazo kwa zana ya bure ya kubuni.",
          text: [
            "Canva ni zana ya kubuni yenye mpango wa bure inayofanya kazi kwenye kivinjari cha wavuti au kwenye app. Baadhi ya shule huwapa wanafunzi nafasi ya kuitumia kupitia akaunti ya shule, kwa hiyo muulize mwalimu wako. Google Slides na Microsoft PowerPoint pia zinafaa kwa mabango rahisi.",
            "Anza na kiolezo (template, muundo uliokwisha tengenezwa), kisha badilisha maneno, rangi na picha. Baadhi ya zana zinaweza kutengeneza picha kutoka kwa maneno unayoandika. Vipengele hivi vya picha vya AI vinaweza kuwa na sheria zao za umri au kuzimwa kwenye akaunti za shule, kwa hiyo angalia kabla ya kuvitumia.",
            "Muundo mzuri ni rahisi: kichwa kimoja kikubwa, mistari michache mifupi, rangi zilizo wazi na rahisi kusoma, na taarifa muhimu kama tarehe, saa na mahali."
          ],
          steps: ["Fungua Canva, Google Slides au PowerPoint (tumia akaunti ya shule kama shule yako inakupa).", "Chagua kiolezo cha bango.", "Badilisha kichwa, maelezo na rangi.", "Ongeza au tengeneza picha moja.", "Hakikisha tarehe, saa na mahali ni rahisi kusoma."],
          words: [["Kiolezo (template)", "muundo uliokwisha tengenezwa ambao unaweza kuubadilisha."], ["Kitengeneza picha cha AI", "zana inayotengeneza picha kutoka kwa maneno unayoandika."]],
          slides: [
            { title: "Zana za bure za kubuni", bullets: ["Canva (mpango wa bure; uliza kama shule yako inakupa nafasi)", "Google Slides", "Microsoft PowerPoint"] },
            { title: "Anza na kiolezo", bullets: ["Badilisha maneno, rangi na picha", "Vipengele vya picha vya AI vinaweza kuwa na sheria zao za umri"] },
            { title: "Muundo rahisi hushinda", bullets: ["Kichwa kimoja kikubwa", "Mistari michache mifupi", "Rangi rahisi kusoma", "Tarehe, saa na mahali"] }
          ],
          tryIt: "Fungua zana ya bure ya kubuni na uchague kiolezo cha bango. Weka kichwa na tarehe, saa na mahali kwa wazo lako kutoka Somo la 1. Lihifadhi.",
          youCanNow: "kutengeneza bango rahisi kwa zana ya bure ya kubuni.",
          quickCheck: [
            { objective: "O2", q: "Ni nini kinachofanya bango kuwa rahisi kusoma?", options: ["Kichwa kimoja kikubwa, mistari michache mifupi na rangi zilizo wazi", "Maandishi mengi madogo", "Aina kumi tofauti za herufi", "Maandishi meusi juu ya rangi nyeusi"], answer: 0, why: "Muundo mzuri ni rahisi, wenye kichwa kikubwa na taarifa muhimu zinazoonekana kwa urahisi." },
            { objective: "O2", q: "Unataka kutumia kipengele cha picha cha AI katika zana ya kubuni kwenye akaunti yako ya shule. Unafanya nini kwanza?", options: ["Tumia akaunti ya rafiki", "Fungua akaunti mpya bila kumwambia mtu", "Angalia sheria yake ya umri na kama shule yako inaruhusu", "Acha bango"], answer: 2, why: "Vipengele vya picha vya AI vinaweza kuwa na sheria zao za umri au kuzimwa kwenye akaunti za shule." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kuweka kazi yako halisi na kutoa sifa",
          minutes: 4,
          goal: "Sema kwa ukweli jinsi AI ilivyosaidia na ubaki na sauti yako katika kazi.",
          text: [
            "Kama AI ilikusaidia kutengeneza kitu, sema hivyo. Ujumbe mfupi kama \"Mawazo yalibuniwa kwa Microsoft Copilot; muundo na maneno ni yangu\" ni wa kweli na unaonyesha unajua kutumia zana hiyo.",
            "Usitumie sanaa, muziki, nembo au wahusika wa watu wengine bila ruhusa, na usiombe AI inakili kazi ya msanii halisi kama ilivyo. Baadhi ya shule na mashindano hayaruhusu kabisa picha zilizotengenezwa na AI, kwa hiyo soma sheria.",
            "Sauti yako ni muhimu. Ongeza kitu ambacho ni wewe tu ungeweza kuongeza: utani wa ndani wa klabu yako, picha uliyopiga, mchoro, au maneno yako mwenyewe."
          ],
          steps: ["Andika AI ilifanya nini na wewe ulifanya nini.", "Ongeza ujumbe mfupi wa sifa.", "Soma sheria za shindano au darasa kuhusu AI.", "Ongeza kitu kimoja ambacho ni wewe tu ungeweza kutengeneza."],
          words: [["Sifa (credit)", "kusema nani au nini kilisaidia kutengeneza kitu."], ["Hakimiliki (copyright)", "sheria inayolinda kazi za ubunifu za watu, kama sanaa, muziki na maandishi."]],
          slides: [
            { title: "Sema jinsi AI ilivyosaidia", bullets: ["\"Mawazo yalibuniwa kwa AI; muundo ni wangu\"", "Ni ukweli na unaonyesha ujuzi"] },
            { title: "Heshimu wabunifu wengine", bullets: ["Usinakili sanaa, nembo au wahusika", "Baadhi ya mashindano yanakataza picha za AI: soma sheria"] },
            { title: "Ongeza sauti yako", bullets: ["Picha uliyopiga", "Mchoro au maneno yako mwenyewe", "Kitu ambacho ni wewe tu ungeweza kuongeza"] }
          ],
          tryIt: "Ongeza ujumbe wa sifa wa mstari mmoja kwenye bango ulilolianza. Kisha ongeza kitu kimoja ambacho ni wewe tu ungeweza kuongeza, kama picha yako mwenyewe au kauli mbiu yako.",
          youCanNow: "kutoa sifa ya kweli kwa msaada wa AI na kubaki na sauti yako katika kazi yako.",
          quickCheck: [
            { objective: "O3", q: "Kwa nini uongeze ujumbe wa sifa wakati AI ilisaidia?", options: ["Ili bango liwe refu zaidi", "Mashindano yanataka picha za AI", "Unaficha ulichofanya", "Ni ukweli na unaonyesha jinsi ulivyotumia zana"], answer: 3, why: "Ujumbe mfupi wa sifa unasema kwa ukweli AI ilifanya nini na wewe ulifanya nini." },
            { objective: "O3", q: "Bango lako linafanana sana na kila bango jingine la AI. Unaongezaje sauti yako?", options: ["Ongeza picha yako, mchoro, kauli mbiu au utani wa ndani wa klabu", "Omba AI inakili msanii maarufu kama alivyo", "Tumia nembo maarufu", "Ondoa jina lako"], answer: 0, why: "Kuongeza kitu ambacho ni wewe tu ungeweza kutengeneza kunaifanya kazi ibaki yako." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: AI kama mwenzi wako wa ubunifu",
        questions: [
          { objective: "O1", q: "Kubuni mawazo ni nini?", options: ["Kunakili kazi ya mtu", "Kutoa mawazo mengi kabla ya kuchagua", "Kurekebisha kompyuta iliyoharibika", "Kufuta faili za zamani"], answer: 1, why: "Kubuni mawazo ni kutoa mawazo mengi haraka, kisha kuchagua." },
          { objective: "O1", q: "Prompt ipi itakupa mawazo bora zaidi?", options: ["\"bango\"", "\"fanya\"", "\"mawazo\"", "\"Nipe mawazo 10 tofauti ya bango la klabu ya roboti: mengine ya kuchekesha, mengine ya kawaida\""], answer: 3, why: "Inasema nini, kwa ajili ya nani, mangapi na mitindo ipi." },
          { objective: "O2", q: "Kiolezo ni nini?", options: ["Muundo uliokwisha tengenezwa ambao unaweza kuubadilisha", "Nywila", "Aina ya virusi", "Sheria ya shule"], answer: 0, why: "Violezo vinakupa muundo wa kuanzia wa kuhariri." },
          { objective: "O3", q: "Shindano linasema hakuna picha zilizotengenezwa na AI. Wewe:", options: ["Unatumia moja hata hivyo", "Unaficha kwamba ulitumia AI", "Unafuata sheria na kutengeneza au kutumia picha yako mwenyewe", "Hausomi sheria"], answer: 2, why: "Kufuata sheria za shindano kunafanya kazi yako iwe ya kweli na iliyoruhusiwa." },
          { objective: "O3", q: "Ujumbe upi ni ujumbe mzuri wa sifa?", options: ["Hakuna kitu kabisa", "\"Nilitengeneza kila kitu\" wakati AI ilisaidia", "\"Mawazo yalibuniwa kwa AI; muundo na maneno ni yangu\"", "\"Imetengenezwa na roboti\""], answer: 2, why: "Unasema kwa ukweli AI ilifanya nini na wewe ulifanya nini." }
        ]
      }
    },
    {
      name: "Sura 2: AI kama mwenzi wako wa masomo",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kujifunza ujuzi mpya hatua kwa hatua",
          minutes: 5,
          goal: "Omba AI ikufundishe ujuzi mpya kwa hatua ndogo katika kiwango chako.",
          text: [
            "AI inaweza kuwa kama mwalimu mvumilivu. Iambie unachotaka kujifunza, unachojua tayari, na uiombe iende hatua moja kwa wakati. Kwa mfano: \"Nataka kujifunza kusoma tabu za gitaa. Sijui chochote bado. Nifundishe kwa hatua 5 ndogo na unisubiri baada ya kila moja.\"",
            "Iombe ikague kama umeelewa: \"Niulize swali moja kabla ya kuendelea.\" Kama kitu kinachanganya, sema: \"Nieleze kana kwamba nina miaka 12\" au \"Nipe mfano kutoka mpira wa kikapu.\"",
            "Tovuti za bure za kujifunza kama Khan Academy zina masomo na mazoezi unayoweza kutumia pamoja na msaidizi wa AI. Huenda shule yako ina zana zilizoidhinishwa, kwa hiyo muulize mwalimu wako zipi za kutumia."
          ],
          steps: ["Taja ujuzi na kiwango chako.", "Omba hatua ndogo, moja kwa wakati.", "Iombe ikupime kabla ya kuendelea.", "Omba mifano kutoka vitu unavyopenda."],
          words: [["Mwalimu binafsi (tutor)", "mtu (au zana) anayekusaidia kujifunza ana kwa ana."]],
          slides: [
            { title: "AI kama mwalimu binafsi", bullets: ["Sema unachotaka kujifunza", "Sema unachojua tayari", "Omba hatua moja kwa wakati"] },
            { title: "Ifanye ikupime", bullets: ["\"Niulize swali moja kabla ya kuendelea\"", "\"Nieleze kana kwamba nina miaka 12\""] },
            { title: "Tumia mifano unayopenda", bullets: ["Michezo, gemu, muziki", "Muulize mwalimu wako kuhusu zana zilizoidhinishwa"] }
          ],
          tryIt: "Chagua ujuzi mdogo unaotaka kujifunza wiki hii (kodi moja ya gitaa, njia ya hesabu, mbinu ya kuchora, neno katika lugha mpya). Mwombe msaidizi wa AI akufundishe kwa hatua ndogo na akupime baada ya kila moja.",
          youCanNow: "kutumia AI kama mwalimu binafsi wa hatua kwa hatua katika kiwango chako.",
          quickCheck: [
            { objective: "O4", q: "Prompt ya kujifunza ujuzi mpya inapaswa kuwa na nini?", options: ["Neno \"nifundishe\" tu", "Ujuzi, kiwango chako na ombi la kwenda hatua moja kwa wakati", "Nywila yako", "Jibu unalotaka"], answer: 1, why: "Kuiambia AI ujuzi, kiwango chako na iende hatua kwa hatua kunaifanya iwe kama mwalimu mvumilivu." },
            { objective: "O4", q: "Maelezo ya AI kuhusu njia ya hesabu yanakuchanganya. Unatuma nini?", options: ["Hakuna; funga app", "\"Fanya kazi yangu ya nyumbani.\"", "\"Nieleze kana kwamba nina miaka 12, kwa mfano kutoka mpira wa kikapu.\"", "Swali lile lile tena"], answer: 2, why: "Kuomba maneno rahisi zaidi au mfano unaoupenda kunakusaidia kuelewa." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kutengeneza maswali ya mazoezi na kadi za kukumbuka",
          minutes: 5,
          goal: "Geuza maelezo yako kuwa maswali ya mazoezi na ujipime.",
          text: [
            "Kujipima mwenyewe ni mojawapo ya njia bora za kukumbuka mambo. AI inaweza kugeuza maelezo yako mwenyewe kuwa maswali ya jaribio kwa sekunde chache.",
            "Bandika au andika maelezo yako ya darasani (bila taarifa binafsi) na uombe: \"Tengeneza maswali 8 ya mazoezi kutoka kwa maelezo haya. Usionyeshe majibu mpaka nijibu.\" Kisha yajibu wewe mwenyewe kabla ya kuangalia.",
            "Unaweza pia kuomba kadi za kukumbuka (flashcards): neno upande mmoja, maana yake upande mwingine. Zana za bure kama Google Docs au kadi za karatasi zinafaa. Kagua majibu kwa maelezo yako au kitabu cha kiada, kwa sababu AI bado inaweza kukosea."
          ],
          steps: ["Kusanya maelezo yako ya mada moja.", "Omba AI maswali ya mazoezi, majibu yakiwa yamefichwa.", "Yajibu wewe mwenyewe kwanza.", "Kagua majibu kwa maelezo yako au kitabu cha kiada."],
          words: [["Kadi ya kukumbuka (flashcard)", "kadi yenye swali au neno upande mmoja na jibu upande mwingine."], ["Kujipima", "kujiuliza maswali mwenyewe ili kukusaidia kukumbuka."]],
          slides: [
            { title: "Jipime ili ukumbuke", bullets: ["Kujiuliza ni bora kuliko kusoma tena", "AI inaweza kutengeneza maswali kutoka kwa maelezo yako"] },
            { title: "Omba kwa njia sahihi", bullets: ["\"Tengeneza maswali 8 kutoka kwa maelezo haya\"", "\"Ficha majibu mpaka nijibu\""] },
            { title: "Kagua majibu", bullets: ["Tumia maelezo yako au kitabu cha kiada", "AI bado inaweza kukosea"] }
          ],
          tryIt: "Andika maelezo ya darasa moja wiki hii. Omba AI maswali 5 ya mazoezi, majibu yakiwa yamefichwa. Yajibu, kisha jikague kwa maelezo yako.",
          youCanNow: "kugeuza maelezo kuwa maswali ya mazoezi na kujipima mwenyewe.",
          quickCheck: [
            { objective: "O5", q: "Kwa nini uombe AI ifiche majibu inapotengeneza maswali ya mazoezi?", options: ["Ili kuokoa karatasi", "Ili AI ijisahihishe yenyewe", "Kwa sababu majibu ni siri", "Ili ujibu kwanza na ujipime kweli"], answer: 3, why: "Kujipima kabla ya kuona jibu kunakusaidia kukumbuka." },
            { objective: "O5", q: "Jibu la AI kwa swali moja la mazoezi halilingani na maelezo yako. Unafanya nini?", options: ["Kagua maelezo yako au kitabu cha kiada na uviamini", "Iamini AI kila wakati", "Futa maelezo yako", "Ruka mada hiyo"], answer: 0, why: "AI bado inaweza kukosea, kwa hiyo kagua kwa maelezo yako au kitabu cha kiada." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kutumia AI kujifunza, si kuruka kujifunza",
          minutes: 4,
          goal: "Amua lini msaada wa AI ni kujifunza na lini ni kuruka kazi.",
          text: [
            "Kuna tofauti kati ya AI kukusaidia kujifunza na AI kukufanyia kazi. Ukiiomba ikueleze, ikupime au ikupe maoni, unajifunza. Ukiiomba iandike insha yako au itatue kazi yako ya nyumbani ili uinakili, unaruka kujifunza, na huenda ukavunja sheria za shule.",
            "Jaribio zuri: baada ya kutumia AI, je, ungeweza kufanya kazi hiyo peke yako kesho? Kama ndiyo, AI ilikusaidia kujifunza. Kama hapana, jaribu tena kwa njia inayokufanya wewe ufikiri.",
            "Fuata sheria za mwalimu wako kila wakati. Kama huna uhakika kama kitu kinaruhusiwa, uliza kabla ya kutumia AI, na uwe tayari kusema jinsi ulivyoitumia."
          ],
          steps: ["Omba AI ikueleze, ikupime au ikupe maoni, si ikufanyie kazi.", "Jiulize: je, ningeweza kufanya hili peke yangu kesho?", "Fuata sheria za mwalimu wako kuhusu AI.", "Uwe tayari kusema jinsi ulivyotumia AI."],
          words: [["Maoni (feedback)", "maelezo yanayokusaidia kuboresha kazi yako mwenyewe."]],
          slides: [
            { title: "Kujifunza au kuruka", bullets: ["Kujifunza: kueleza, kupima, maoni", "Kuruka: AI inaandika, wewe unanakili"] },
            { title: "Jaribio la kesho", bullets: ["Je, ungeweza kuifanya peke yako kesho?", "Kama hapana, fanya sehemu kubwa zaidi ya kufikiri"] },
            { title: "Fuata sheria", bullets: ["Muulize mwalimu wako ukiwa huna uhakika", "Uwe tayari kusema jinsi ulivyotumia AI"] }
          ],
          tryIt: "Kazi ya mwisho: tengeneza bango la klabu au tukio lako. Buni angalau mawazo matano kwa AI, fanya moja kuwa lako, liunde katika Canva au Google Slides, na ongeza ujumbe wa sifa unaosema jinsi AI ilivyosaidia.",
          youCanNow: "kutumia AI kwa ubunifu na kujifunza kwa njia ya kweli inayoufanya ujuzi ubaki wako.",
          quickCheck: [
            { objective: "O6", q: "Lipi ni kutumia AI kujifunza?", options: ["Kunakili insha ya AI", "Kuomba AI ikueleze hatua uliyoikosa, kisha kuijaribu mwenyewe", "Kuifanya AI itatue kila swali la kazi ya nyumbani", "Kubandika majibu ya AI katika mtihani"], answer: 1, why: "Maelezo, maswali ya kujipima na maoni yanakusaidia kujifunza; kunakili kunaruka kujifunza." },
            { objective: "O6", q: "Baada ya AI kukusaidia, usingeweza kufanya kazi hiyo peke yako kesho. Unafanya nini?", options: ["Wasilisha kazi ya AI", "Acha kutumia AI milele", "Jaribu tena ili ufanye sehemu kubwa zaidi ya kufikiri", "Ficha kwamba ulitumia AI"], answer: 2, why: "Jaribio la kesho linaonyesha AI ndiyo iliyofikiri, kwa hiyo irudie kwa njia inayokufanya ujifunze." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: AI kama mwenzi wako wa masomo",
        questions: [
          { objective: "O4", q: "Prompt ipi inaifanya AI iwe kama mwalimu mzuri?", options: ["\"Nifundishe tabu za gitaa kwa hatua 5 ndogo na unipime baada ya kila moja\"", "\"Fanya kazi yangu ya nyumbani\"", "\"Jibu kila kitu\"", "\"tabu\""], answer: 0, why: "Inaweka kiwango, hatua ndogo na ukaguzi." },
          { objective: "O5", q: "Kwa nini kujipima ni muhimu?", options: ["Kunapoteza muda", "Walimu wanakukataza", "Kunafuta maelezo", "Kunakusaidia kukumbuka"], answer: 3, why: "Kujipima ni mojawapo ya njia bora za kukumbuka." },
          { objective: "O5", q: "AI ilitengeneza maswali ya mazoezi kutoka kwa maelezo yako. Kabla ya kuamini majibu unapaswa:", options: ["Kuyashiriki mtandaoni", "Kuyakagua kwa maelezo yako au kitabu cha kiada", "Kufuta maelezo yako", "Kumuuliza mgeni"], answer: 1, why: "AI bado inaweza kukosea, kwa hiyo kagua." },
          { objective: "O6", q: "Matumizi gani ya AI ni kuruka kujifunza?", options: ["Kuiomba iandike insha yako ili uinakili", "Kuiomba ikueleze hatua", "Kuiomba ikupime", "Kuomba maoni kuhusu rasimu yako"], answer: 0, why: "Kunakili kazi ya AI kunamaanisha unaruka kujifunza na huenda ukavunja sheria." },
          { objective: "O6", q: "\"Jaribio la kesho\" ni nini?", options: ["Kufanya kazi ya nyumbani kesho", "Kufanya mtihani kesho", "Kujiuliza kama ungeweza kufanya kazi hiyo peke yako kesho", "Kuzima AI kesho"], answer: 2, why: "Kama ungeweza kuifanya peke yako, AI ilikusaidia kujifunza." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Zana za AI kwa Ubunifu na Kujifunza",
    questions: [
      { objective: "O1", q: "Unapobuni mawazo kwa AI, kwanza unapaswa:", options: ["Kuhukumu kila wazo", "Kuomba mawazo mengi tofauti", "Kuchagua la kwanza", "Kuacha baada ya wazo moja"], answer: 1, why: "Kubuni mawazo ni kuhusu mawazo mengi kwanza." },
      { objective: "O1", q: "Njia bora ya kufanya wazo la AI kuwa lako ni:", options: ["Kulinakili kama lilivyo", "Kumwomba rafiki achague", "Kutotumia kamwe mawazo ya AI", "Kubadilisha au kuunganisha mawazo na kuongeza ubunifu wako"], answer: 3, why: "Kubadilisha na kuchanganya mawazo kunafanya matokeo kuwa yako." },
      { objective: "O1", q: "Kuomba mawazo ya \"kuchekesha, kawaida na kijasiri\" kunakupa:", options: ["Virusi", "Mawazo machache zaidi", "Nywila", "Aina tofauti"], answer: 3, why: "Mitindo tofauti inakupa mengi zaidi ya kuchagua." },
      { objective: "O2", q: "Canva ni:", options: ["Mashine ya michezo ya video", "Zana ya kubuni yenye mpango wa bure", "Sheria ya shule", "App ya muziki tu"], answer: 1, why: "Canva ni zana ya kubuni yenye mpango wa bure." },
      { objective: "O2", q: "Kabla ya kutumia kipengele cha picha cha AI unapaswa:", options: ["Kupakia picha ya rafiki", "Kushiriki nywila yako", "Kuangalia sheria yake ya umri na mipangilio ya shule yako", "Kupuuza sheria zote"], answer: 2, why: "Vipengele vya picha vya AI vinaweza kuwa na sheria zao za umri." },
      { objective: "O2", q: "Bango zuri lina:", options: ["Kichwa kimoja kikubwa na tarehe, saa na mahali vilivyo wazi", "Maandishi mengi madogo sana", "Kila rangi kwa wakati mmoja", "Hakuna maelezo"], answer: 0, why: "Muundo rahisi ndio rahisi zaidi kusoma." },
      { objective: "O3", q: "Sifa ya kweli kwa msaada wa AI inaonekana hivi:", options: ["Kuficha kwamba ulitumia AI", "\"Mawazo yalibuniwa kwa AI; muundo ni wangu\"", "Kusema roboti ilifanya kila kitu", "Hakuna kitu"], answer: 1, why: "Inasema ukweli kuhusu nani alifanya nini." },
      { objective: "O3", q: "Unataka kutumia mhusika maarufu wa katuni kwenye bango. Unapaswa:", options: ["Kumtumia bila kuuliza", "Kuomba AI imnakili kama alivyo", "Kuondoa ujumbe wa sifa", "Kutengeneza picha yako mwenyewe badala yake, au kupata ruhusa"], answer: 3, why: "Wahusika na sanaa vinalindwa na hakimiliki." },
      { objective: "O3", q: "Hakimiliki inalinda:", options: ["Kazi za ubunifu za watu kama sanaa na muziki", "Betri ya simu yako", "Chakula cha mchana cha shule", "Wi-Fi"], answer: 0, why: "Hakimiliki inalinda kazi za wabunifu." },
      { objective: "O4", q: "Ili kujifunza ujuzi mpya kwa AI, unapaswa kuiambia:", options: ["Hakuna kitu", "Nywila yako", "Ujuzi, kiwango chako, na iende hatua moja kwa wakati", "Iruke hadi mwisho"], answer: 2, why: "Kiwango na hatua ndogo vinaifanya AI iwe mwalimu mzuri." },
      { objective: "O4", q: "Kama maelezo ya AI yanachanganya, swali zuri la kufuatilia ni:", options: ["\"Achana nalo\"", "\"Nipe alama yangu\"", "\"Nieleze kana kwamba nina miaka 12\"", "\"Niandikie mtihani wangu\""], answer: 2, why: "Kuomba maneno rahisi zaidi kunakusaidia kuelewa." },
      { objective: "O4", q: "Nani anaweza kukuambia zana zipi za AI zimeidhinishwa kwa shule?", options: ["Mwalimu wako", "Tangazo linalojitokeza ghafla", "Mgeni mtandaoni", "Hakuna mtu"], answer: 0, why: "Walimu wanajua zana zilizoidhinishwa na sheria za shule." },
      { objective: "O5", q: "Unapaswa kuacha nini unapobandika maelezo kwenye AI?", options: ["Maneno ya mada", "Tarehe muhimu za mada", "Msamiati", "Taarifa binafsi kama anwani yako"], answer: 3, why: "Usiweke kamwe taarifa binafsi katika zana za AI." },
      { objective: "O5", q: "Kwa nini uombe AI ifiche majibu ya maswali ya mazoezi?", options: ["Ili kuokoa karatasi", "Ili ujibu kwanza na ujipime kweli", "Inatakiwa na sheria", "Ili kumdanganya mwalimu wako"], answer: 1, why: "Kujibu kwanza ndiko kujipima kweli." },
      { objective: "O5", q: "Kadi ya kukumbuka ina:", options: ["Swali au neno upande mmoja na jibu upande mwingine", "Picha tu", "Nywila", "Noti za muziki tu"], answer: 0, why: "Hivyo ndivyo kadi za kukumbuka zinavyofanya kazi." },
      { objective: "O5", q: "Baada ya AI kutengeneza majibu ya mazoezi unapaswa:", options: ["Kuyaamini kabisa", "Kuyaweka mtandaoni", "Kuyakagua kwa maelezo au kitabu cha kiada", "Kuyafuta"], answer: 2, why: "Majibu ya AI yanaweza kuwa si sahihi." },
      { objective: "O6", q: "Lipi ni kutumia AI kujifunza?", options: ["Kunakili insha ya AI", "Kuomba AI maoni kuhusu rasimu yako mwenyewe", "Kuifanya AI ifanye jaribio lako", "Kubandika majibu ya AI ya kazi ya nyumbani"], answer: 1, why: "Maoni kuhusu kazi yako mwenyewe yanakusaidia kuboresha." },
      { objective: "O6", q: "Huna uhakika kama AI inaruhusiwa kwa mradi. Unapaswa:", options: ["Kuitumia na kutumaini", "Kuitumia kwa siri", "Kuiuliza AI kama inaruhusiwa", "Kumuuliza mwalimu wako kwanza"], answer: 3, why: "Mwalimu wako ndiye anayeamua sheria za darasa." },
      { objective: "O2", q: "Kabla ya kufungua akaunti mpya kwenye app ya ubunifu, unapaswa:", options: ["Kutumia umri wa uongo", "Kuipa nywila yako ya shule", "Kuruka masharti", "Kuzungumza na mzazi au mlezi na kuangalia sheria ya umri"], answer: 3, why: "Sheria za umri na ruhusa ya mzazi au mlezi zinakuja kwanza." },
      { objective: "O6", q: "Baada ya kutumia AI, usingeweza kufanya kazi hiyo peke yako kesho. Hiyo inamaanisha:", options: ["Ulijifunza kila kitu", "AI ndiyo iliyofikiri; jaribu tena ili wewe ufikiri zaidi", "AI imeharibika", "Unapaswa kuacha shule"], answer: 1, why: "Jaribio la kesho linaonyesha kama ulijifunza." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      1,
      3,
      6,
      7,
      9,
      13,
      15,
      16,
      19
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Kubuni mawazo",
        objective: "O1",
        notYet: "Mawazo pungufu ya matano, au wazo la kwanza la AI lilitumiwa kama lilivyo.",
        meets: "Angalau mawazo matano, na moja likabadilishwa au kuunganishwa kuwa lako.",
        exceeds: "Anaweza kuonyesha mawazo yapi yaliunganishwa na kwa nini hilo lilichaguliwa."
      },
      {
        name: "Muundo wa bango",
        objective: "O2",
        notYet: "Kichwa au tarehe, saa na mahali havipo au ni vigumu kusoma.",
        meets: "Kichwa kimoja kikubwa, mistari michache mifupi, rangi zilizo wazi, na tarehe, saa na mahali rahisi kusoma.",
        exceeds: "Muundo unafaa klabu au tukio, na mwanafunzi mwenzake anaweza kulisoma kutoka upande mwingine wa chumba."
      },
      {
        name: "Sauti yake mwenyewe",
        objective: "O3",
        notYet: "Hakuna kitu kwenye bango ambacho ni cha mwanafunzi mwenyewe, au linatumia sanaa au nembo ya mtu mwingine.",
        meets: "Lina kitu kimoja ambacho ni mwanafunzi tu angeweza kuongeza, kama picha, mchoro au kauli mbiu.",
        exceeds: "Maneno na machaguo mengi ni wazi kuwa ya mwanafunzi mwenyewe."
      },
      {
        name: "Ujumbe wa sifa",
        objective: "O3",
        notYet: "Hakuna ujumbe, au unaficha jinsi AI ilivyosaidia.",
        meets: "Ujumbe mfupi unasema AI ilifanya nini na mwanafunzi alifanya nini.",
        exceeds: "Ujumbe una maelezo kamili, kama zana ipi ilibuni mawazo."
      },
      {
        name: "Alifuata sheria",
        objective: "O6",
        notYet: "Alitumia zana au kipengele kinyume na sheria yake ya umri, sheria za shule au sheria za shindano.",
        meets: "Kila zana na kipengele kilichotumika kinaruhusiwa kwa umri na shule ya mwanafunzi.",
        exceeds: "Anaweza kueleza sheria zipi alizokagua na wapi."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaoripoti kutumia AI kujipima au kujifunza ujuzi katika utafiti wa kufuatilia wa siku 30",
      "Mabango au miradi iliyotengenezwa katika kozi ambayo kweli inatumiwa na klabu, tukio au darasa",
      "Wanafunzi wanaoanza kozi nyingine ya Koach Learn ya vijana ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu, kompyuta ya shule au kompyuta ya maktaba yenye intaneti",
      "Msaidizi wa AI wa bure ambao mwanafunzi anaruhusiwa kutumia, na Canva, Google Slides au PowerPoint",
      "Maelezo ya darasani ya somo moja kwa masomo ya kujifunza",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Angalia sheria za umri za kila zana na kipengele cha picha cha AI kabla ya darasa, na tumia akaunti za shule pale shule inapozitoa.",
      "Eleza sheria za AI za shule au programu yako mwanzoni, ikiwa ni pamoja na kama picha zilizotengenezwa na AI zinaruhusiwa.",
      "Wakumbushe wanafunzi wasibandike taarifa binafsi wanapogeuza maelezo kuwa maswali ya mazoezi.",
      "Fanyeni maonyesho mafupi ya mabango ambapo wanafunzi wanaeleza ujumbe wao wa sifa na sehemu ambayo ni yao wenyewe.",
      "Pima bango kwa rubriki na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
