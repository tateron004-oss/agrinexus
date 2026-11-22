"use strict";

// Koach Learn course (Swahili translation of youth/youth-coding-with-ai.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "youth-coding-with-ai-sw",
  lang: "sw",
  translationOf: "youth-coding-with-ai",
  category: "Youth",
  name: "Utangulizi wa Kuandika Programu kwa Msaada wa AI",
  skills: "Kuendesha Python kwenye daftari la bure mtandaoni, Kutumia vigeu na input, Kufanya maamuzi kwa if, Kurudia kwa loops, Kuomba AI ieleze na irekebishe msimbo",
  outcome: "kuandika na kuendesha mchezo mdogo wa maswali (quiz) kwa Python kwenye daftari la bure mtandaoni, ukitumia msaidizi wa AI kueleza msimbo na kusaidia kurekebisha makosa, na kueleza kila mstari wa programu yako unafanya nini.",
  about: [
    "Kozi hii ni kwa vijana ambao hawajawahi kuandika programu, au walijaribu mara moja wakakwama. Huhitaji kuwa hodari wa hesabu. Unahitaji hamu ya kujifunza na kama dakika tano kwa kila somo.",
    "Utaandika msimbo halisi wa Python katika Google Colab, daftari la bure linalofanya kazi ndani ya kivinjari cha wavuti, kwa hiyo unaweza kutumia kompyuta ya shule au ya maktaba. Utajifunza matofali ya msingi ya msimbo, kisha utajifunza kutumia msaidizi wa AI kama mwalimu mvumilivu: kueleza msimbo, kupata makosa na kupendekeza mawazo, huku wewe ukibaki ndiye unayeelewa na kuandika programu.",
    "Kabla ya kujisajili kwenye zana yoyote, angalia sheria za shule yako kuhusu AI na umri wa chini wa zana hiyo, na umhusishe mzazi au mlezi. Kila somo linaishia na kazi ya \"Jaribu sasa\". Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Tengeneza mchezo wa maswali kwa Python katika Google Colab wenye angalau maswali 5 kuhusu jambo unalopenda (mchezo wa video, mchezo wa michezo, bendi, somo la shule). Lazima uulize jina la mchezaji, uulize maswali, uhesabu alama, na uchapishe ujumbe wa mwisho. Tumia msaidizi wa AI kueleza au kurekebisha angalau sehemu moja, kisha andika maelezo (comment) juu ya kila sehemu yanayosema kwa maneno yako mwenyewe inafanya nini.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Vijana ambao hawajawahi kuandika programu, au walijaribu mara moja wakakwama, pamoja na wale wasiojiona kuwa hodari wa hesabu.",
    startingPoint: "Wanatumia simu, apps na michezo kila siku na wanaweza kutumia kivinjari cha wavuti. Hawajawahi kuandika wala kuendesha programu, na huenda wameona AI ikiandika msimbo bila kujua jinsi unavyofanya kazi.",
    gap: "Kuandika programu kunafungua milango ya kazi za teknolojia na kunaifanya AI isiwe ya ajabu, lakini kunakili msimbo wa AI hakufundishi chochote na kunavunja sheria za shule katika madarasa mengi. Vijana wanahitaji kuandika na kuendesha Python halisi wao wenyewe, wakitumia AI kama mwalimu wa kueleza msimbo na kurekebisha makosa.",
    constraints: [
      "Mipaka ya umri: Colab inahitaji akaunti ya Google na zana za AI zina umri wa chini; mzazi au mlezi anahusishwa kwa walio chini ya miaka 18",
      "Sheria za shule kuhusu AI zinatofautiana; kazi zinazopewa alama huenda zisiruhusu AI",
      "Vifaa: kompyuta ya shule, maktaba au nyumbani yenye kivinjari cha wavuti; hakuna cha kusakinisha",
      "Faragha: hakuna nywila, anwani, vitambulisho wala namba za simu zinazobandikwa kwenye zana za AI",
      "Wanaoanza: maneno rahisi, kila neno la kitaalamu linaelezwa, kama dakika tano kwa kila somo"
    ],
    prerequisites: "Hakuna. Kozi \"AI ni Nini? (kwa Vijana)\" ni nzuri kuanza nayo."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Kwa maneno yako mwenyewe", action: "kueleza msimbo na programu ni nini, na jinsi ya kutumia AI kama mwalimu badala ya mtu anayekuandikia kazi, ndani ya sheria za shule yako", standard: "ukipata angalau 4 kati ya 5 sahihi" },
    { id: "O2", condition: "Ukitumia akaunti ya Google unayoruhusiwa kutumia", action: "kufungua daftari la Google Colab na kuendesha msimbo wa Python unaochapisha maandishi", standard: "bila msaada, matokeo yakionekana chini ya kisanduku" },
    { id: "O3", condition: "Ukipewa mchezo wa swali moja wa kutengeneza", action: "kuandika Python inayotumia kigeu, input, if na else, na loop", standard: "ili ifanye kazi vizuri kwa jibu sahihi na kwa jibu lisilo sahihi" },
    { id: "O4", condition: "Ukipewa mistari michache ya msimbo", action: "kumwomba msaidizi wa AI aeleze msimbo mstari kwa mstari, kisha kubadilisha kitu kimoja, kutabiri matokeo na kuuendesha", standard: "bila kubandika taarifa zozote binafsi" },
    { id: "O5", condition: "Ukipewa ujumbe wa kosa wa Python", action: "kupata mstari wenye tatizo, kurekebisha kosa kwa msaada wa AI ikihitajika, na kuendesha marekebisho wewe mwenyewe", standard: "hadi programu iende bila makosa" },
    { id: "O6", condition: "Ukianzia mpango ulioandikwa kama maelezo (comments)", action: "kutengeneza mchezo wa maswali 5 kipande kimoja baada ya kingine na kusema jinsi ulivyotumia AI", standard: "ukiwa na jina la mchezaji, alama, ujumbe wa mwisho na maelezo juu ya kila sehemu kwa maneno yako mwenyewe" }
  ],
  chapters: [
    {
      name: "Sura 1: Mistari yako ya kwanza ya msimbo",
      lessons: [
        {
          objectives: ["O1"],
          title: "Msimbo ni nini, na AI inaingia wapi",
          minutes: 4,
          goal: "Eleza programu ni nini na jinsi msaidizi wa AI anavyoweza kukusaidia kujifunza kuandika programu.",
          text: [
            "Msimbo (code) ni orodha ya maagizo ambayo kompyuta inayafuata hasa kama yalivyo, kwa mpangilio. Programu ni kundi la maagizo hayo linalofanya kazi fulani, kama mchezo, app au kikokotoo. Python ni lugha maarufu ya kuandika programu kwa sababu maneno yake yanafanana sana na Kiingereza.",
            "Wasaidizi wa AI kama ChatGPT, Microsoft Copilot na Google Gemini wanaweza kuandika na kueleza msimbo. Hilo ni la manufaa, lakini ukinakili msimbo usioulewa, hujifunzi chochote na huwezi kuurekebisha unapoharibika. Katika kozi hii, AI ni mwalimu wako, si mtu anayekuandikia kazi.",
            "Shule zina sheria tofauti kuhusu AI. Madarasa mengine yanairuhusu kwa mazoezi lakini si kwa kazi zinazopewa alama. Kila wakati angalia sheria za mwalimu wako, na useme ulipotumia AI. Zana nyingi za AI pia zina umri wa chini, kwa hiyo soma masharti ya zana hiyo na umwulize mzazi au mlezi kabla ya kujisajili."
          ],
          words: [["Msimbo (code)", "maagizo yaliyoandikwa ili kompyuta iyafuate."], ["Programu", "kundi la maagizo linalofanya kazi fulani."], ["Python", "lugha maarufu ya kuandika programu iliyo rahisi kusoma."]],
          slides: [
            { title: "Msimbo ni maagizo", bullets: ["Kompyuta inayafuata hasa kama yalivyo, kwa mpangilio", "Programu ni msimbo unaofanya kazi fulani", "Python inasomeka kama Kiingereza"] },
            { title: "AI ni mwalimu wako", bullets: ["Inaweza kueleza msimbo mstari kwa mstari", "Inaweza kusaidia kupata makosa", "Usinakili msimbo usioulewa"] },
            { title: "Kabla ya kuanza", bullets: ["Angalia sheria za shule yako kuhusu AI", "Angalia umri wa chini wa zana", "Mwulize mzazi au mlezi kabla ya kujisajili"] }
          ],
          tryIt: "Andika programu moja ndogo ambayo ungependa kutengeneza siku moja, kama mchezo wa maswali kuhusu mchezo wako unaoupenda au kikokotoo cha bakshishi kwa kazi yako ya kwanza. Kisha andika sentensi moja kuhusu jinsi AI inavyoweza kukusaidia kujifunza bila kukufanyia kazi.",
          youCanNow: "kusema msimbo na programu ni nini, na kueleza jinsi ya kutumia AI kama mwalimu badala ya njia ya mkato.",
          quickCheck: [
            { objective: "O1", q: "Kwa nini Python ni lugha maarufu ya kwanza ya kuandika programu?", options: ["Inafanya kazi kwenye simu tu", "Haihitaji kompyuta", "Maneno yake yanafanana sana na Kiingereza", "Inajiandika yenyewe"], answer: 2, why: "Maneno ya Python yanafanana sana na Kiingereza, na hilo linaifanya iwe rahisi kusoma." },
            { objective: "O1", q: "Rafiki anasema, \"Iache AI iandike programu yako yote, kisha uikabidhi.\" Unasema nini?", options: ["Nitatumia AI kama mwalimu na nitaandika msimbo mwenyewe, nikifuata sheria za mwalimu wangu", "Wazo zuri; hakuna atakayejua", "Ikiwa tu inaonekana ngumu", "Nitainakili lakini nibadilishe majina"], answer: 0, why: "Kunakili msimbo usioulewa hakufundishi chochote na kunaweza kuvunja sheria za shule." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kuendesha msimbo wako wa kwanza wa Python katika Google Colab",
          minutes: 5,
          goal: "Fungua daftari la bure la Colab na uendeshe mstari mmoja wa Python.",
          text: [
            "Google Colab ni daftari la bure linaloendesha Python ndani ya kivinjari chako cha wavuti. Huhitaji kusakinisha chochote. Unahitaji akaunti ya Google. Angalia sheria zake za umri, na kama una umri chini ya miaka 18 mwulize mzazi au mlezi kwanza; akaunti ya Google ya shule inaweza kufanya kazi kama shule yako inaruhusu Colab.",
            "Daftari limeundwa kwa visanduku (cells). Kisanduku cha msimbo ni sanduku unapoandika Python. Unabonyeza kitufe cha kucheza (play) kando ya kisanduku (au Shift na Enter) kuuendesha, na matokeo yanaonekana chini yake.",
            "Amri ya kwanza ambayo waandishi wengi wa programu hujifunza ni print. Inaonyesha maneno kwenye skrini. Maandishi yanakaa ndani ya alama za nukuu, hivi: print(\"Hello, I am learning Python\")."
          ],
          steps: ["Fungua kivinjari cha wavuti na uende colab.research.google.com.", "Ingia (sign in) kwa akaunti ya Google unayoruhusiwa kutumia.", "Tengeneza daftari jipya (new notebook).", "Bofya ndani ya kisanduku cha kwanza cha msimbo na uandike: print(\"Hello, I am learning Python\")", "Bonyeza kitufe cha kucheza au Shift na Enter. Soma matokeo chini ya kisanduku."],
          words: [["Daftari (notebook)", "ukurasa unapoandika na kuendesha msimbo katika masanduku madogo yanayoitwa visanduku."], ["Kisanduku (cell)", "sanduku moja ndani ya daftari unapoandika msimbo."], ["Matokeo (output)", "kile programu inachoonyesha baada ya kuendeshwa."]],
          slides: [
            { title: "Google Colab", bullets: ["Python ya bure ndani ya kivinjari chako cha wavuti", "Hakuna cha kusakinisha", "Inahitaji akaunti ya Google unayoruhusiwa kutumia"] },
            { title: "Madaftari na visanduku", bullets: ["Andika msimbo ndani ya kisanduku", "Bonyeza play au Shift + Enter", "Matokeo yanaonekana chini"] },
            { title: "Amri yako ya kwanza", bullets: ["print(\"Hello, I am learning Python\")", "Maandishi yanakaa ndani ya alama za nukuu", "print inayaonyesha kwenye skrini"] }
          ],
          tryIt: "Katika daftari jipya la Colab, chapisha mistari mitatu: jina lako la kwanza, wimbo au mchezo unaoupenda, na lengo moja la kozi hii. Endesha kisanduku na uhakikishe mistari yote mitatu inaonekana.",
          youCanNow: "kufungua daftari la Colab, kuandika Python ndani ya kisanduku, kuiendesha, na kusoma matokeo.",
          quickCheck: [
            { objective: "O2", q: "Katika Python, print inafanya nini?", options: ["Inatuma msimbo wako kwa printa", "Inaonyesha maneno au thamani kwenye skrini", "Inafuta kisanduku", "Inahifadhi daftari"], answer: 1, why: "print inaonyesha maandishi au thamani chini ya kisanduku kinapoendeshwa." },
            { objective: "O2", q: "Una miaka 14 na unataka kutumia Colab nyumbani. Unafanya nini kwanza?", options: ["Kutengeneza akaunti kwa umri wa uongo", "Kutumia akaunti ya mtu usiyemjua", "Kuacha Colab", "Kuangalia sheria za umri na kumwuliza mzazi au mlezi, au kutumia akaunti ya shule inayoruhusiwa"], answer: 3, why: "Colab inahitaji akaunti ya Google; angalia sheria zake na umhusishe mzazi au mlezi kama una umri chini ya miaka 18." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Vigeu, input, if na loops",
          minutes: 6,
          goal: "Tumia kigeu, uliza input, fanya uamuzi kwa if, na rudia kwa loop.",
          text: [
            "Kigeu (variable) ni sanduku lenye jina linalohifadhi thamani. score = 0 inatengeneza sanduku linaloitwa score na kuweka 0 ndani yake. Baadaye, score = score + 1 inaongeza alama moja.",
            "input inamwomba mchezaji aandike kitu: name = input(\"What is your name? \"). Kauli ya if inafanya uamuzi: if answer == \"Paris\": print(\"Correct!\") else: print(\"Not quite\"). Alama mbili za sawa zina maana \"ni sawa na\". Mistari iliyo chini ya if na else inasukumwa ndani kwa nafasi; hii inaitwa indentation, na Python inaihitaji.",
            "Loop inarudia msimbo. for i in range(3): print(\"Go team!\") inachapisha shangwe hiyo mara tatu. Mawazo haya manne, vigeu, input, if na loops, yanatosha kutengeneza mchezo wa maswali."
          ],
          steps: ["Tengeneza kigeu: score = 0", "Uliza input: name = input(\"What is your name? \")", "Fanya uamuzi kwa if na else, ukisukuma ndani mistari iliyo chini ya kila mmoja.", "Rudia kitu kwa: for i in range(3):"],
          words: [["Kigeu (variable)", "sanduku lenye jina linalohifadhi thamani."], ["Input", "kitu ambacho mtumiaji anaandika wakati programu inaendelea."], ["Kauli ya if (if statement)", "msimbo unaoendeshwa tu wakati jambo fulani ni kweli."], ["Loop", "msimbo unaojirudia."], ["Indentation", "nafasi mwanzoni mwa mstari zinazoonyesha mistari ipi inakaa pamoja."]],
          slides: [
            { title: "Vigeu vinahifadhi thamani", bullets: ["score = 0", "score = score + 1 inaongeza alama moja"] },
            { title: "Input na if", bullets: ["name = input(\"What is your name? \")", "if answer == \"Paris\": kisha chapisha Correct", "== ina maana \"ni sawa na\""] },
            { title: "Loops zinarudia", bullets: ["for i in range(3): inarudia mara 3", "Sukuma ndani (indent) mistari iliyo ndani ya loop"] },
            { title: "Matofali manne ya msingi", bullets: ["Vigeu, input, if, loops", "Yanatosha kutengeneza mchezo wa maswali"] }
          ],
          tryIt: "Andika mchezo wa swali moja: uliza jina la mchezaji, uliza swali moja kuhusu somo au mchezo unaoupenda, na utumie if na else kuchapisha \"Correct\" au \"Not quite\". Uendeshe mara mbili, mara moja kwa jibu sahihi na mara moja kwa jibu lisilo sahihi.",
          youCanNow: "kutumia kigeu, input, kauli ya if na loop katika programu ndogo ya Python.",
          quickCheck: [
            { objective: "O3", q: "Indentation ni nini katika Python?", options: ["Aina ya kosa", "Nafasi zinazosukuma mistari ndani chini ya if, else au loop", "Mstari wa maelezo (comment)", "Kitufe cha kucheza"], answer: 1, why: "Indentation inaonyesha mistari ipi iko chini ya if, else au loop, na Python inaihitaji." },
            { objective: "O3", q: "Unataka mchezo uongeze alama kwa jibu sahihi. Unaandika mstari gani chini ya if?", options: ["score = score + 1", "print(score)", "score == 1", "input(score)"], answer: 0, why: "score = score + 1 inaongeza alama moja kwenye thamani iliyohifadhiwa katika score." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Mistari yako ya kwanza ya msimbo",
        questions: [
          { objective: "O1", q: "Programu ni nini?", options: ["Kundi la maagizo linalofanya kazi fulani", "Aina ya kibodi", "Anwani ya tovuti", "Mashine ya michezo ya video"], answer: 0, why: "Programu ni msimbo, kundi la maagizo, linalofanya kazi fulani." },
          { objective: "O1", q: "Darasa lako linaruhusu AI kwa mazoezi lakini si kwa kazi ya nyumbani inayopewa alama. Unafanya nini?", options: ["Kutumia AI kwa kazi ya nyumbani hata hivyo", "Kutumia AI kufanya mazoezi na kufanya kazi ya alama mwenyewe", "Kutoandika programu tena kamwe", "Kumwomba rafiki akutumie AI"], answer: 1, why: "Kufuata sheria za mwalimu wako ni sehemu ya kutumia AI kwa uaminifu." },
          { objective: "O2", q: "Katika Colab, unaendeshaje kisanduku cha msimbo?", options: ["Kufunga kivinjari", "Kuchapisha ukurasa kwa printa", "Kubonyeza kitufe cha kucheza au Shift na Enter", "Kuwasha upya kompyuta"], answer: 2, why: "Kitufe cha kucheza au Shift na Enter kinaendesha kisanduku." },
          { objective: "O3", q: "score = score + 1 inafanya nini?", options: ["Inafuta alama", "Inachapisha neno score", "Inamwomba mchezaji alama", "Inaongeza moja kwenye thamani iliyohifadhiwa katika score"], answer: 3, why: "Inachukua alama ya sasa na kuongeza moja." },
          { objective: "O3", q: "for i in range(3): inafanya nini?", options: ["Inarudia msimbo uliosukumwa ndani mara 3", "Inauliza maswali 3", "Inatengeneza vigeu 3", "Inasimamisha programu"], answer: 0, why: "Loop ya for yenye range(3) inarudia msimbo ulio ndani yake mara tatu." }
        ]
      }
    },
    {
      name: "Sura 2: Kuandika programu na msaidizi wa AI",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuomba AI ieleze msimbo",
          minutes: 5,
          goal: "Mwombe msaidizi wa AI aeleze kipande cha msimbo mstari kwa mstari, na uhakikishe unakielewa.",
          text: [
            "Bandika mistari michache ya msimbo kwenye msaidizi wa AI na uulize: \"Nieleze msimbo huu wa Python mstari kwa mstari kwa mtu anayeanza. Tumia maneno rahisi.\" Maelezo mazuri yanakuambia kila mstari unafanya nini na kwa nini.",
            "Kisha pima uelewa wako. Badilisha kitu kimoja katika msimbo, kisia kitakachotokea, na uuendeshe. Kama ulikisia sawa, unauelewa. Kama sivyo, iulize AI: \"Nilibadilisha hiki na nilitarajia kile. Kwa nini ilifanya kitu kingine?\"",
            "Usibandike taarifa binafsi kwenye zana ya AI: hakuna nywila, anwani ya nyumbani, namba ya kitambulisho cha shule wala namba za simu. Msimbo wa mradi wa darasani hauhitaji chochote kati ya hivyo."
          ],
          steps: ["Nakili mistari 3 hadi 10 ya msimbo.", "Uliza: \"Nieleze msimbo huu wa Python mstari kwa mstari kwa mtu anayeanza.\"", "Badilisha kitu kimoja na ukisie kitakachotokea.", "Uendeshe na ulinganishe. Uliza swali la kufuatilia kama ulikisia vibaya."],
          words: [["Kueleza mstari kwa mstari", "kupitia msimbo mstari mmoja baada ya mwingine na kusema kila mmoja unafanya nini."]],
          slides: [
            { title: "Omba maelezo", bullets: ["Bandika mistari michache", "\"Nieleze huu mstari kwa mstari kwa mtu anayeanza\"", "Omba maneno rahisi"] },
            { title: "Pima uelewa wako", bullets: ["Badilisha kitu kimoja", "Kisia kitakachotokea", "Uendeshe na ulinganishe"] },
            { title: "Usiweke taarifa binafsi", bullets: ["Hakuna nywila wala namba za kitambulisho cha shule", "Hakuna anwani ya nyumbani wala namba ya simu"] }
          ],
          tryIt: "Bandika mchezo wako wa swali moja kutoka Somo la 3 kwenye msaidizi wa AI na uiombe ieleze kila mstari. Kisha badilisha jibu sahihi liwe jipya, kisia kitakachotokea, na uuendeshe.",
          youCanNow: "kupata maelezo wazi ya msimbo mstari kwa mstari kutoka kwa AI na kupima kwamba kweli unauelewa.",
          quickCheck: [
            { objective: "O4", q: "Nini kinafanya maelezo ya AI kuhusu msimbo yawe mazuri?", options: ["Ni marefu kadiri iwezekanavyo", "Yanatoa jibu tu", "Yanasema kila mstari unafanya nini na kwa nini", "Yanaandika upya kila kitu"], answer: 2, why: "Maelezo mazuri yanasema kila mstari unafanya nini na kwa nini, kwa maneno rahisi." },
            { objective: "O4", q: "Ulibadilisha mstari, ukakisia matokeo, na programu ikafanya kitu kingine. Nini kinafuata?", options: ["Kufuta programu", "Kuiuliza AI: \"Nilibadilisha hiki na nilitarajia kile. Kwa nini ilifanya kitu kingine?\"", "Kukisia tena bila kuiendesha", "Kubandika nywila yako ili AI ikague"], answer: 1, why: "Swali la kufuatilia linaloeleza ulichotarajia linakusaidia kuelewa msimbo." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kupata na kurekebisha makosa kwa msaada wa AI",
          minutes: 5,
          goal: "Soma ujumbe wa kosa na utumie AI kusaidia kurekebisha bug.",
          text: [
            "Bug ni kosa katika msimbo. Python inaposhindwa kuendesha mstari, inaonyesha ujumbe wa kosa. Mstari wa mwisho wa ujumbe kwa kawaida unataja tatizo, kama SyntaxError (kitu kimeandikwa vibaya) au IndentationError (nafasi mwanzoni mwa mstari si sahihi). Pia unaonyesha namba ya mstari.",
            "Kwanza jaribu mwenyewe: angalia mstari huo kama kuna alama ya nukuu, bano, nukta mbili (:) au nafasi inayokosekana. Ukikwama, bandika msimbo na ujumbe kamili wa kosa kwenye msaidizi wa AI na uulize: \"Kosa hili lina maana gani, na nalirekebishaje? Eleza kwa nini.\"",
            "AI inaweza kukosea kuhusu msimbo pia. Endesha toleo lililorekebishwa wewe mwenyewe. Kama kosa linabadilika au linabaki, iambie AI hasa kilichotokea."
          ],
          steps: ["Soma mstari wa mwisho wa ujumbe wa kosa na namba ya mstari.", "Angalia mstari huo kama kuna alama za nukuu, mabano, nukta mbili au nafasi zinazokosekana.", "Ukikwama, bandika msimbo na ujumbe kamili wa kosa kwenye msaidizi wa AI.", "Uliza una maana gani na kwa nini marekebisho yanafanya kazi.", "Endesha marekebisho wewe mwenyewe na uhakikishe yanafanya kazi."],
          words: [["Bug", "kosa katika msimbo."], ["Ujumbe wa kosa (error message)", "maelezo ya Python yanayosema nini kilienda vibaya na kwenye mstari gani."], ["Debugging", "kutafuta na kurekebisha bugs."]],
          slides: [
            { title: "Bugs zinampata kila mtu", bullets: ["Ujumbe wa kosa ni dalili, si kushindwa", "Soma mstari wa mwisho na namba ya mstari"] },
            { title: "Jaribu mwenyewe kwanza", bullets: ["Alama ya nukuu au bano inakosekana?", "Nukta mbili (:) zinakosekana baada ya if au for?", "Nafasi zisizo sahihi mwanzoni mwa mstari?"] },
            { title: "Kisha uliza AI", bullets: ["Bandika msimbo na ujumbe kamili wa kosa", "Uliza una maana gani na kwa nini marekebisho yanafanya kazi", "Endesha marekebisho wewe mwenyewe"] }
          ],
          tryIt: "Katika mchezo wako, futa kwa makusudi nukta mbili (:) baada ya mstari wa if na uuendeshe. Soma kosa. Mwombe msaidizi wa AI alieleze, lirekebishe, na uendeshe programu tena.",
          youCanNow: "kusoma ujumbe wa kosa wa Python, kutafuta tatizo, na kutumia AI kuelewa na kurekebisha bug.",
          quickCheck: [
            { objective: "O5", q: "SyntaxError kwa kawaida ina maana gani?", options: ["Kompyuta imeharibika", "Intaneti haipo", "Jibu lako lilikuwa si sahihi", "Kitu kimeandikwa vibaya, kama alama ya nukuu au nukta mbili inayokosekana"], answer: 3, why: "SyntaxError ina maana Python haiwezi kusoma kitu ulichoandika." },
            { objective: "O5", q: "Python inaonyesha kosa kwenye mstari wa 4. Unaangalia nini kwanza?", options: ["Mstari wa 4, kama kuna alama ya nukuu, bano, nukta mbili au nafasi inayokosekana", "Mstari wa 1 tu", "Kasi ya intaneti yako", "Hakuna; washa upya kompyuta"], answer: 0, why: "Ujumbe unaonyesha namba ya mstari; kagua mstari huo wewe mwenyewe kwanza." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kutengeneza mchezo wako wa maswali",
          minutes: 6,
          goal: "Panga na utengeneze mchezo wa maswali 5 ukiwa na AI kama msaidizi.",
          text: [
            "Programu kubwa zinajengwa kwa vipande vidogo. Panga kwanza: programu inasema nini mwanzoni, inauliza nini, inahesabuje alama, na inasema nini mwishoni. Andika mpango kama maelezo mafupi (comments). Maelezo yanaanza na # na Python inayapuuza.",
            "Jenga kipande kimoja kwa wakati na uendeshe programu baada ya kila kipande. Ukitaka wazo, uliza AI: \"Ningewezaje kufanya mchezo wangu umwambie mchezaji alama zake kati ya 5?\" Kisha uandike mwenyewe na uiombe AI iukague.",
            "Unapofanya kazi, mwache rafiki au mwanafamilia aucheze. Angalia mahali anapochanganyikiwa, na uuboreshe. Ukiukabidhi shuleni, sema jinsi ulivyotumia AI."
          ],
          steps: ["Andika mpango kama maelezo ya #: makaribisho, maswali, alama, mwisho.", "Andika msimbo wa makaribisho na uulize jina la mchezaji. Uendeshe.", "Ongeza swali moja lenye if na else linalobadilisha alama. Uendeshe.", "Ongeza maswali mengine manne. Uendeshe.", "Chapisha alama za mwisho na ujumbe. Mwache mtu aucheze."],
          words: [["Maelezo (comment)", "kidokezo ndani ya msimbo kinachoanza na # na ambacho Python inakipuuza."], ["Mpango", "orodha fupi ya kile programu yako itafanya, kwa mpangilio."]],
          slides: [
            { title: "Panga kwa maelezo (comments)", bullets: ["# welcome", "# ask 5 questions", "# keep score", "# final message"] },
            { title: "Jenga kwa vipande vidogo", bullets: ["Ongeza kipande kimoja", "Kiendeshe", "Kirekebishe, kisha ongeza kinachofuata"] },
            { title: "AI kama msaidizi", bullets: ["Omba mawazo, kisha uandike mwenyewe", "Omba AI ikague msimbo wako", "Sema jinsi ulivyotumia AI katika kazi ya shule"] },
            { title: "Jaribu na mchezaji halisi", bullets: ["Mwache rafiki aucheze", "Angalia mahali anapochanganyikiwa", "Uboreshe"] }
          ],
          tryIt: "Kazi ya mwisho: tengeneza mchezo wa maswali kwa Python katika Colab wenye angalau maswali 5 kuhusu jambo unalopenda. Uliza jina la mchezaji, hesabu alama, chapisha ujumbe wa mwisho, tumia AI kueleza au kurekebisha sehemu moja, na uandike maelezo juu ya kila sehemu kwa maneno yako mwenyewe.",
          youCanNow: "kupanga, kutengeneza, kujaribu na kueleza programu ndogo ya Python, ukitumia AI kama msaidizi na si mbadala wako.",
          quickCheck: [
            { objective: "O6", q: "Maelezo (comment) ni nini katika Python?", options: ["Mstari unaochapisha maandishi", "Aina ya loop", "Mstari unaoanza na # ambao Python inaupuuza", "Ujumbe wa kosa"], answer: 2, why: "Maelezo yanaanza na # na ni vidokezo kwa watu, si maagizo kwa Python." },
            { objective: "O6", q: "Umemaliza mchezo wa maswali. Hatua nzuri inayofuata ni ipi?", options: ["Kutouendesha kamwe", "Kufuta maelezo", "Kuiomba AI iuandike upya wote", "Kumwacha rafiki aucheze na kuangalia mahali anapochanganyikiwa"], answer: 3, why: "Kumtazama mtu akicheza kunakuonyesha cha kuboresha." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kuandika programu na msaidizi wa AI",
        questions: [
          { objective: "O4", q: "Ni njia gani nzuri ya kuuliza AI kuhusu msimbo usioulewa?", options: ["\"Nifanyie kazi yangu ya nyumbani\"", "\"Nieleze msimbo huu wa Python mstari kwa mstari kwa mtu anayeanza\"", "\"Msimbo\"", "\"Uifanye ndefu zaidi\""], answer: 1, why: "Ombi wazi la maelezo ya mstari kwa mstari linakusaidia kujifunza." },
          { objective: "O4", q: "Unawezaje kuhakikisha kwamba kweli unaelewa msimbo fulani?", options: ["Badilisha kitu kimoja, kisia matokeo, kisha uuendeshe", "Uusome mara moja haraka", "Uufute", "Uombe AI iseme unauelewa"], answer: 0, why: "Kutabiri na kujaribu kunaonyesha kama kweli unaelewa." },
          { objective: "O5", q: "Python inaonyesha ujumbe wa kosa. Unaangalia wapi kwanza?", options: ["Neno la kwanza kwenye skrini", "Sehemu ya anwani ya kivinjari", "Mstari wa mwisho wa ujumbe na namba ya mstari", "Kibodi"], answer: 2, why: "Mstari wa mwisho unataja tatizo na namba ya mstari inaonyesha mahali lilipo." },
          { objective: "O5", q: "AI inakupa marekebisho ya bug yako. Nini kinafuata?", options: ["Kudhani yanafanya kazi", "Kuikabidhi bila kuiendesha", "Kufuta programu yako", "Kuyaendesha wewe mwenyewe na kuhakikisha yanafanya kazi"], answer: 3, why: "AI inaweza kukosea, kwa hiyo unajaribu marekebisho wewe mwenyewe." },
          { objective: "O6", q: "Katika Python, mstari unaoanza na # unafanya nini?", options: ["Ni maelezo (comment) ambayo Python inayapuuza", "Unachapisha alama ya reli (hashtag)", "Unasimamisha programu", "Unatengeneza loop"], answer: 0, why: "Mistari inayoanza na # ni maelezo kwa watu, si maagizo." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Utangulizi wa Kuandika Programu kwa Msaada wa AI",
    questions: [
      { objective: "O1", q: "Msimbo unaelezwa vizuri zaidi kama:", options: ["Maagizo ambayo kompyuta inayafuata hasa kama yalivyo", "Nywila ya siri", "Aina ya muziki", "Alama ya shule"], answer: 0, why: "Msimbo ni orodha ya maagizo kwa kompyuta." },
      { objective: "O1", q: "Kwa nini kunakili msimbo wa AI usioulewa ni tatizo?", options: ["Kila mara ni mfupi mno", "Hujifunzi chochote na huwezi kuurekebisha unapoharibika", "Kompyuta haziwezi kuendesha msimbo wa AI", "Unagharimu pesa"], answer: 1, why: "Kuelewa ndiyo ujuzi; msimbo ulionakiliwa unakuacha umekwama." },
      { objective: "O1", q: "Kabla ya kujisajili kwenye zana ya AI ukiwa kijana, unapaswa:", options: ["Kutumia tarehe ya kuzaliwa ya uongo", "Kuwapa marafiki nywila yako", "Kuangalia umri wa chini wa zana na kumwuliza mzazi au mlezi", "Kutosoma chochote"], answer: 2, why: "Mipaka ya umri na kuhusika kwa mzazi kunakuweka salama na ndani ya sheria." },
      { objective: "O2", q: "Google Colab inakuwezesha:", options: ["Kutazama video tu", "Kununua michezo", "Kutuma ujumbe mfupi", "Kuendesha Python ndani ya kivinjari cha wavuti bila kusakinisha chochote"], answer: 3, why: "Colab ni daftari la bure mtandaoni la kuendesha Python." },
      { objective: "O2", q: "Katika daftari, kisanduku (cell) ni:", options: ["Sanduku unapoandika na kuendesha msimbo", "Betri ya simu", "Aina ya kosa", "Loop"], answer: 0, why: "Madaftari yameundwa kwa visanduku vinavyobeba msimbo." },
      { objective: "O2", q: "Mstari upi unaonyesha maneno kwenye skrini katika Python?", options: ["show Hello", "print(\"Hello\")", "say = Hello", "run Hello"], answer: 1, why: "print pamoja na maandishi ndani ya alama za nukuu inaonyesha maandishi hayo." },
      { objective: "O3", q: "Kigeu (variable) ni:", options: ["Ujumbe wa kosa", "Aina ya tovuti", "Sanduku lenye jina linalohifadhi thamani", "Loop isiyoisha kamwe"], answer: 2, why: "Vigeu vinahifadhi thamani chini ya jina, kama score." },
      { objective: "O3", q: "Mstari upi unamwomba mchezaji aandike jina lake?", options: ["name = 0", "print(name)", "for name in range(3):", "name = input(\"What is your name? \")"], answer: 3, why: "input inamwomba mtumiaji aandike kitu." },
      { objective: "O3", q: "Katika Python, == ina maana:", options: ["Ni sawa na", "Jumlisha", "Hifadhi thamani", "Anza maelezo (comment)"], answer: 0, why: "Alama mbili za sawa zinalinganisha thamani mbili." },
      { objective: "O3", q: "Kwa nini Python inajali indentation?", options: ["Inafanya msimbo uwe na rangi", "Inaonyesha mistari ipi iko chini ya if au loop", "Inaokoa betri", "Ni pambo tu"], answer: 1, why: "Mistari iliyosukumwa ndani ni ya if, else au loop iliyo juu yake." },
      { objective: "O3", q: "Unataka kushangilia \"Go team!\" mara 5. Kipi ni bora?", options: ["Kauli ya if", "Maelezo (comment)", "Loop ya for yenye range(5)", "Kigeu kinachoitwa team"], answer: 2, why: "Loop inarudia msimbo idadi fulani ya mara." },
      { objective: "O4", q: "Kipi ni salama kubandika kwenye msaidizi wa AI?", options: ["Nywila yako ya shule", "Anwani yako ya nyumbani", "Namba yako ya simu", "Mistari kumi ya msimbo wa mchezo wa maswali"], answer: 3, why: "Msimbo wa mradi hauna taarifa binafsi ndani yake." },
      { objective: "O4", q: "Baada ya AI kueleza msimbo wako, njia nzuri ya kupima uelewa wako ni:", options: ["Kubadilisha kitu kimoja, kutabiri, na kuuendesha", "Kufunga daftari", "Kuomba maelezo marefu zaidi tu", "Kuunakili kwenye daftari jingine bila kubadilisha"], answer: 0, why: "Kutabiri na kujaribu kunathibitisha kwamba unauelewa." },
      { objective: "O5", q: "Bug ni:", options: ["Kipengele kizuri", "Kosa katika msimbo", "Aina ya loop", "Daftari"], answer: 1, why: "Bugs ni makosa; debugging inayarekebisha." },
      { objective: "O5", q: "IndentationError kwa kawaida ina maana:", options: ["Intaneti yako haipo", "Unahitaji kompyuta mpya", "Nafasi mwanzoni mwa mstari si sahihi", "Programu ilifanya kazi"], answer: 2, why: "Inaonyesha nafasi zisizo sahihi mwanzoni mwa mstari." },
      { objective: "O5", q: "Umekwama kwenye kosa. Unapaswa kubandika nini kwenye msaidizi wa AI?", options: ["Neno error tu", "Nywila yako", "Hakuna; kata tamaa", "Msimbo na ujumbe kamili wa kosa"], answer: 3, why: "Msimbo na ujumbe kamili wa kosa vinaipa AI kile inachohitaji kueleza tatizo." },
      { objective: "O5", q: "AI inapendekeza marekebisho lakini kosa linabadilika. Unapaswa:", options: ["Kuiambia AI hasa kilichotokea sasa", "Kukata tamaa", "Kuikabidhi hata hivyo", "Kufuta Python"], answer: 0, why: "Maswali ya kufuatilia yaliyo wazi yanakusaidia wewe na AI kupata tatizo halisi." },
      { objective: "O6", q: "Hatua bora ya kwanza unapotengeneza programu kubwa zaidi ni ipi?", options: ["Kuandika kila kitu kwa mara moja", "Kuandika mpango mfupi kama maelezo (comments)", "Kuiomba AI iandike yote", "Kuruka kujaribu"], answer: 1, why: "Mpango unagawa programu katika vipande vidogo." },
      { objective: "O6", q: "Kwa nini uendeshe programu yako baada ya kuongeza kila kipande kidogo?", options: ["Inafanya msimbo uwe mrefu zaidi", "Python inalazimisha", "Unapata makosa mapema, yakiwa rahisi kurekebisha", "Inahifadhi faili"], answer: 2, why: "Hatua ndogo zinafanya bugs ziwe rahisi kupata." },
      { objective: "O6", q: "Ulitumia AI kusaidia katika mradi wa shule wa kuandika programu. Unapaswa kufanya nini?", options: ["Kuificha", "Kusema yote ni kazi yako mwenyewe", "Kufuta mradi", "Kusema jinsi ulivyotumia AI, ukifuata sheria za mwalimu wako"], answer: 3, why: "Kuwa mkweli kuhusu matumizi ya AI ni sehemu ya kufuata sheria za shule." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 1, 3, 5, 6, 8, 11, 12, 14, 17] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Programu inaendeshwa", objective: "O2", notYet: "Programu haiendeshwi katika Colab, au inasimama kwa kosa.", meets: "Programu inaendeshwa kuanzia mwanzo hadi mwisho katika Colab.", exceeds: "Pia inashughulikia mchezaji anayeandika jibu kwa namna tofauti, kama kwa herufi kubwa." },
      { name: "Matofali ya msingi", objective: "O3", notYet: "Inakosa input, if na else, au kigeu cha alama.", meets: "Inauliza jina la mchezaji, inatumia if na else kwa angalau maswali 5, na inahifadhi alama katika kigeu.", exceeds: "Pia inatumia loop kurudia sehemu ya mchezo." },
      { name: "Imejengwa kwa vipande", objective: "O6", notYet: "Hakuna mpango wala ujumbe wa mwisho.", meets: "Mpango katika maelezo (comments), maswali matano na ujumbe wa mwisho wenye alama.", exceeds: "Rafiki aliucheza, na mwanafunzi aliboresha sehemu moja kutokana na alichokiona." },
      { name: "AI kama mwalimu", objective: "O4", notYet: "AI iliandika programu, au matumizi ya AI hayajasemwa.", meets: "AI ilieleza au ilisaidia kurekebisha angalau sehemu moja, na mwanafunzi anasema ilitumikaje.", exceeds: "Mwanafunzi anaweza kuonyesha badiliko alilotabiri na kulijaribu baada ya maelezo ya AI." },
      { name: "Maelezo kwa maneno yake mwenyewe", objective: "O5", notYet: "Maelezo hayapo au yamenakiliwa kutoka AI.", meets: "Maelezo juu ya kila sehemu yanasema kwa maneno ya mwanafunzi mwenyewe inafanya nini.", exceeds: "Pia anataja bug moja aliyoirekebisha na jinsi alivyofanya." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (rubric)",
      "Wanafunzi wanaotengeneza programu ya pili wao wenyewe ndani ya siku 30 (utafiti wa ufuatiliaji)",
      "Wanafunzi wanaojiunga na klabu, darasa au kambi ya kuandika programu ndani ya siku 90",
      "Wanafunzi wanaoanza kozi nyingine ya Koach Learn ya kuandika programu au ya AI ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta yenye kivinjari cha wavuti na intaneti (shule, maktaba au nyumbani)",
      "Google Colab, pamoja na akaunti ya Google ambayo mwanafunzi anaruhusiwa kutumia",
      "Msaidizi wa AI wa bure ambao mwanafunzi anaruhusiwa kutumia",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Angalia sheria za umri za Colab na za zana za AI pamoja na mipangilio ya akaunti za shule kabla ya darasa; kuwa na akaunti ya maonyesho tayari kwa wanafunzi wasioweza kujisajili.",
      "Andika msimbo moja kwa moja kwenye projekta kwa Masomo ya 2 na 3 ili wanaoanza waweze kunakili kila hatua.",
      "Weka kwa makusudi nukta mbili (:) au alama ya nukuu inayokosekana ili kila mwanafunzi afanye mazoezi ya kusoma ujumbe wa kosa.",
      "Wakumbushe wanafunzi wasibandike kamwe taarifa binafsi kwenye zana za AI; msimbo wa mchezo wa maswali hauhitaji chochote kati ya hizo.",
      "Fanyeni ubadilishanaji wa michezo ya maswali ambapo wanafunzi wanacheza michezo ya wenzao, kisha waipime kwa rubric."
    ]
  }
};
