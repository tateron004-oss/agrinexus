"use strict";

// Koach Learn course (Swahili translation of leadership/edu-student-ai-literacy.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "edu-student-ai-literacy-sw",
  lang: "sw",
  translationOf: "edu-student-ai-literacy",
  category: "Leadership Development",
  name: "AI kwa Viongozi wa Shule na Elimu 5: Ujifunzaji wa Wanafunzi na Ujuzi wa AI",
  skills: "Kueleza ujuzi wa AI kwa wanafunzi, Kufundisha somo la vitendo la ujuzi wa AI, Kutumia AI kama mshirika wa kujifunza, Kuweka viwango vya matumizi ya AI darasani, Kufundisha wanafunzi kueleza walivyotumia AI, Kuwaweka wanafunzi salama",
  outcome: "kuwafundisha wanafunzi kuielewa AI, kuihoji na kuitumia kwa uwajibikaji: kufundisha somo la dakika 30 la ujuzi wa AI, kuweka viwango vilivyo wazi vya matumizi ya AI kwa kazi za darasani, kuwafundisha wanafunzi kueleza walivyotumia AI, na kueleza kanuni za usalama kwa wanafunzi na familia.",
  about: [
    "Kozi hii ni kwa walimu, wakutubi na wataalamu wa vyombo vya habari vya shule, washauri, makocha na viongozi wa shule wanaoongoza jinsi wanafunzi wanavyojifunza kwa AI na kuhusu AI. Wanafunzi tayari wanatumia AI; ujuzi wa AI unawasaidia kuitumia kujifunza, si kukwepa kujifunza.",
    "Sura ya 1 inaeleza ujuzi wa AI, inakupa somo la vitendo la kuufundisha, na inaonyesha jinsi ya kutumia AI kama mshirika wa kujifunza anayeuliza maswali badala ya kutoa majibu. Sura ya 2 inaweka kanuni za darasani: viwango vya matumizi ya AI kwa kazi, kueleza matumizi, usalama na faragha, na mpango wa shule nzima.",
    "Matumizi ya mwanafunzi ya zana yoyote ya AI yanategemea idhini ya wilaya yako ya shule, kanuni za umri za zana hiyo na, kwa watoto walio chini ya miaka 13, COPPA (sheria ya Marekani inayolinda faragha ya watoto mtandaoni). Jaribio la maarifa linamaliza kila sura na mtihani wa maswali 20 unamaliza kozi. Hii ni kozi ya 5 kati ya 8 katika AI kwa Viongozi wa Shule na Elimu."
  ],
  finalTask: "Andaa kifurushi cha ujuzi wa AI kwa wanafunzi wa darasa moja: mpango wa somo la dakika 30 ambapo wanafunzi wanajaribu zana ya AI (au wanatazama mwalimu akionyesha), wanagundua kosa na wanajadili upendeleo; kipimo cha viwango vitano vya matumizi ya AI darasani chenye mfano wa kazi katika kila kiwango; muundo wa mstari mmoja ambao wanafunzi watatumia kueleza matumizi yao ya AI; na barua ya nusu ukurasa kwa familia inayoeleza wanafunzi watajifunza nini na kanuni za usalama.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Walimu, wakutubi na wataalamu wa vyombo vya habari vya shule, washauri, makocha na viongozi wa shule katika shule za Marekani wanaoongoza jinsi wanafunzi wanavyojifunza kwa AI na kuhusu AI.",
    startingPoint: "Wanajua misingi ya AI, kanuni za faragha za wanafunzi na jinsi ya kukagua zana kutoka kozi zilizotangulia. Wanafunzi katika shule yao tayari wanatumia AI, lakini hakuna njia moja ya pamoja ya kufundisha ujuzi wa AI, kuweka kanuni kwa kazi za darasani au kuwaomba wanafunzi waeleze walivyotumia AI.",
    gap: "Bila ujuzi wa AI, wanafunzi wanatumia AI kukwepa kujifunza, wanaamini majibu yasiyo sahihi au yenye upendeleo na wanatoa taarifa binafsi. Waelimishaji wanahitaji kuwafundisha wanafunzi kuielewa na kuihoji AI, kuweka viwango vilivyo wazi vya matumizi na kueleza matumizi, na kueleza kanuni za usalama kwa wanafunzi na familia.",
    constraints: [
      "Matumizi ya mwanafunzi ya zana yoyote ya AI yanategemea idhini ya wilaya, kanuni za umri za zana hiyo na, kwa watoto walio chini ya miaka 13, COPPA",
      "Wanafunzi wadogo wanaweza kujifunza kupitia mwalimu akionyesha na shughuli zisizotumia vifaa, bila akaunti",
      "Wanafunzi kamwe hawaipi AI majina yao kamili, anwani wala nywila",
      "Zana za AI zinabadilika, kwa hiyo maswali ya somo yaliyoandaliwa yanajaribiwa muda mfupi kabla ya kufundisha",
      "Muda: masomo mafupi yanayoingia katika siku ya shule, pamoja na somo la dakika 30 kwa wanafunzi"
    ],
    prerequisites: "Inapendekezwa kozi \"AI kwa Viongozi wa Shule na Elimu 2: Zana za AI kwa Waelimishaji\"."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Kwa darasa moja unalohudumia", action: "kueleza ujuzi minne wa AI wa wanafunzi kwa maneno ambayo wanafunzi wanaelewa", standard: "ukiwa na mfano mmoja kwa kila ujuzi" },
    { id: "O2", condition: "Ukitumia zana iliyoidhinishwa au mwalimu akionyesha", action: "kupanga somo la dakika 30 ambapo wanafunzi wanajaribu AI, wanagundua kosa na wanajadili upendeleo", standard: "ukiwa na maswali matano yaliyoandaliwa na kujaribiwa mapema, likiwemo moja ambalo AI inakosea" },
    { id: "O3", condition: "Kuhusu mada unayofundisha", action: "kuandika prompt za mshirika wa kujifunza zinazoifanya AI iulize maswali badala ya kutoa majibu", standard: "na kueleza kwa nini zinamsaidia mwanafunzi kujifunza zaidi kuliko prompt ya mashine ya majibu" },
    { id: "O4", condition: "Ukipewa kazi zako zijazo za darasani", action: "kuipa kila kazi kiwango kwenye kipimo cha viwango vitano vya matumizi ya AI", standard: "pamoja na sababu inayohusiana na lengo la kujifunza" },
    { id: "O5", condition: "Wanafunzi wanapotumia AI kwenye kazi inayoruhusiwa", action: "kufundisha muundo wa mstari mmoja wa kueleza matumizi ya AI", standard: "unaotaja zana, ilichofanya, tarehe na alichofanya mwanafunzi" },
    { id: "O6", condition: "Kwa wanafunzi na familia", action: "kueleza kanuni za usalama wa AI kwa wanafunzi na kupanga ujuzi wa AI katika madarasa yote", standard: "katika barua ya nusu ukurasa kwa familia inayotaja zana zinazotumika, kwa nini, na kanuni za usalama" }
  ],
  chapters: [
    {
      name: "Sura 1: Kuwafundisha wanafunzi kuhusu AI",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ujuzi wa AI unamaanisha nini kwa wanafunzi",
          minutes: 5,
          goal: "Eleza ujuzi wa AI kama stadi nne za wanafunzi unazoweza kufundisha.",
          text: [
            "Ujuzi wa AI ni kujua vya kutosha kuhusu AI ili kuitumia vizuri, kuihoji na kufanya maamuzi mazuri kuihusu. Kwa wanafunzi, unakuja kwenye stadi nne. Kuelewa: AI inatabiri majibu yanayowezekana kutokana na mifumo (patterns); haifikiri wala haijui kama mtu. Kuhoji: AI inaweza kukosea, kubuni mambo au kuwa na upendeleo, kwa hiyo ikague.",
            "Kutumia: uliza maswali yaliyo wazi, tumia AI kujifunza (nieleze, niulize maswali, nipe maoni) badala ya kukwepa kujifunza, na fuata kanuni za darasa. Kuamua: fikiria faragha, haki na uaminifu, kama nini cha kutoa, kazi ni ya nani, na lini usitumie AI kabisa.",
            "Darasa lina maana. Wanafunzi wadogo wanaweza kujifunza mawazo haya kwa mwalimu akionyesha na kwa shughuli zisizotumia vifaa, bila akaunti. Wanafunzi wakubwa wanaweza kutumia zana zilizoidhinishwa wenyewe chini ya kanuni zilizo wazi."
          ],
          words: [["Ujuzi wa AI", "kujua vya kutosha kuhusu AI ili kuitumia vizuri, kuihoji na kufanya maamuzi mazuri (kwa Kiingereza: AI literacy)."], ["Shughuli isiyotumia vifaa", "somo kuhusu teknolojia lisilotumia kifaa chochote (kwa Kiingereza: unplugged activity)."]],
          slides: [
            { title: "Stadi nne za wanafunzi", bullets: ["Kuelewa: AI inatabiri kutokana na mifumo", "Kuhoji: inaweza kukosea au kuwa na upendeleo", "Itumie kujifunza; amua kwa busara"] },
            { title: "Itumie kujifunza, si kukwepa", bullets: ["\"Nieleze kwa njia nyingine\"", "\"Niulize maswali\"", "\"Nipe maoni kuhusu rasimu yangu\""] },
            { title: "Kulingana na darasa", bullets: ["Wadogo: mwalimu akionyesha, bila vifaa", "Wakubwa: zana zilizoidhinishwa, kanuni wazi"] }
          ],
          tryIt: "Andika stadi nne za ujuzi wa AI kwa maneno ambayo wanafunzi wako wangeelewa, kwa darasa moja unalohudumia, ukiwa na mfano mmoja kwa kila moja.",
          youCanNow: "kueleza ujuzi wa AI kama stadi nne za wanafunzi zinazoweza kufundishwa.",
          quickCheck: [
            { objective: "O1", q: "Ujuzi wa AI ni nini?", options: ["Kujua jinsi ya kutengeneza programu za AI", "Kujua vya kutosha kuhusu AI ili kuitumia vizuri, kuihoji na kuchagua kwa busara", "Kusoma vitabu kuhusu roboti", "Kuandika kwa kasi"], answer: 1, why: "Ujuzi wa AI ni kuhusu kutumia AI vizuri na kuihoji, si kuhusu kuandika programu." },
            { objective: "O1", q: "Wanafunzi wako wa darasa la pili hawana akaunti za AI. Ungefundishaje ujuzi wa AI?", options: ["Kusubiri hadi sekondari", "Kuwaambia wajisajili kwa akaunti ya mzazi", "Kutumia mwalimu akionyesha na shughuli zisizotumia vifaa", "Kuruka mada hii"], answer: 2, why: "Mwalimu akionyesha na shughuli zisizotumia vifaa vinafundisha ujuzi wa AI bila akaunti za wanafunzi." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Somo la vitendo la ujuzi wa AI",
          minutes: 6,
          goal: "Panga somo la dakika 30 ambapo wanafunzi wanajaribu AI na kugundua makosa yake.",
          text: [
            "Wanafunzi wanajifunza mipaka ya AI vizuri zaidi kwa kuiona. Muundo: kivutio (dakika 5): uliza \"Je, AI iko sahihi kila wakati?\" na wapige kura. Uchunguzi (dakika 15): wawili wawili, au kupitia mwalimu akionyesha, uliza zana ya AI maswali uliyoandaa, likiwemo moja ambalo inakosea au inabuni (chanzo bandia, swali gumu la hesabu kwa maneno, ukweli wa eneo lenu).",
            "Kukagua ukweli (dakika 5): wanafunzi wanalinganisha majibu na kitabu cha kiada, tovuti inayoaminika au mwalimu. Kujadili upendeleo (dakika 5): iombe zana imweleze \"mwanasayansi\" au \"muuguzi\" mara kadhaa na mtazame mifumo inayojirudia; zungumzeni mifumo hiyo inatoka wapi.",
            "Malizia kwa tiketi ya kutoka: \"Taja jambo moja ambalo AI ni nzuri kwalo na sababu moja ya kuikagua.\" Jaribu maswali yako uliyoandaa kabla ya darasa, kwa sababu zana za AI zinabadilika na zinaweza kurekebisha au kuleta makosa."
          ],
          steps: ["Kivutio: kura ya \"Je, AI iko sahihi kila wakati?\"", "Uchunguzi: maswali yaliyoandaliwa, likiwemo moja inalokosea.", "Kagua ukweli kwa vyanzo vinavyoaminika.", "Jadili upendeleo kwa jaribio la kumweleza mtu.", "Tiketi ya kutoka; jaribu maswali yako kabla ya darasa."],
          words: [["Kukagua ukweli", "kulinganisha dai na chanzo kinachoaminika (kwa Kiingereza: fact-check)."], ["Upendeleo", "mfumo usio wa haki, kama kueleza kazi fulani kila wakati kama ya aina moja tu ya watu (kwa Kiingereza: bias)."]],
          slides: [
            { title: "Somo la dakika 30", bullets: ["Kivutio: je, AI iko sahihi kila wakati?", "Uchunguzi: maswali yaliyoandaliwa", "Kagua ukweli, jadili upendeleo, tiketi ya kutoka"] },
            { title: "Onyesha kosa halisi", bullets: ["Chanzo bandia au swali gumu la hesabu kwa maneno", "Ukweli wa eneo lenu ambao huenda haujui", "Jaribu maswali yako kabla ya darasa"] },
            { title: "Gundua upendeleo", bullets: ["Iombe imweleze \"mwanasayansi\" mara kadhaa", "Tazama mifumo; jadilini inatoka wapi"] }
          ],
          tryIt: "Andaa maswali matano kwa somo, likiwemo angalau moja ambalo AI inakosea. Yajaribu katika zana iliyoidhinishwa na uandike majibu utakayotumia.",
          youCanNow: "kupanga somo la vitendo linalowafundisha wanafunzi kuihoji AI.",
          quickCheck: [
            { objective: "O2", q: "Katika somo la vitendo, wanafunzi wanalinganisha majibu ya AI na nini?", options: ["Kitabu cha kiada, tovuti inayoaminika au mwalimu", "Zana nyingine ya AI", "Kisio la mwanafunzi mwenzao", "Hakuna; wanaamini jibu la kwanza"], answer: 0, why: "Vyanzo vinavyoaminika vinawawezesha wanafunzi kugundua makosa ya AI wenyewe." },
            { objective: "O2", q: "Swali ulilolianda kuonyesha kosa la AI sasa linapata jibu sahihi. Unafanya nini?", options: ["Kuwaambia wanafunzi kuwa AI haikosei kamwe", "Kulitumia hata hivyo na kujifanya lilikosewa", "Kufuta somo", "Kujaribu maswali mengine hadi upate moja ambalo AI inakosea, na kuandika majibu"], answer: 3, why: "Zana za AI zinabadilika, kwa hiyo jaribu maswali muda mfupi kabla ya somo." }
          ]
        },
        {
          objectives: ["O3"],
          title: "AI kama mshirika wa kujifunza, si mashine ya majibu",
          minutes: 5,
          goal: "Wafundishe wanafunzi prompt zinazoifanya AI iwasaidie kufikiri.",
          text: [
            "Zana ile ile inaweza kumfikiria mwanafunzi au kumsaidia kufikiri. Tofauti ni prompt. Mashine ya majibu: \"Niandikie aya yangu kuhusu sababu za Vita vya Wenyewe kwa Wenyewe vya Marekani.\" Mshirika wa kujifunza: \"Niulize maswali yanisaidie kugundua sababu, moja baada ya jingine, na usinipe jibu.\"",
            "Fundisha prompt tatu za mshirika wa kujifunza: \"Nieleze hili kwa njia nyingine, kwa mfano\"; \"Niulize maswali kuhusu hili na uniambie nilikosea wapi\"; \"Hii ni rasimu yangu. Nipe mambo mawili mazuri na jambo moja la kuboresha, lakini usiiandike upya.\"",
            "Baadhi ya zana za elimu zimetengenezwa kufundisha kwa njia hii. Kwa zana yoyote, wanafunzi wanapaswa kukagua ukweli, na kazi wanayowasilisha iwe fikra zao wenyewe, kama kiwango cha matumizi ya AI cha darasa kinavyoruhusu."
          ],
          steps: ["Onyesha prompt ya mashine ya majibu na matokeo yake.", "Onyesha prompt ya mshirika wa kujifunza na matokeo yake.", "Fundisha prompt tatu za mshirika wa kujifunza.", "Wanafunzi wafanye mazoezi kuhusu mada ya leo.", "Kumbusha: kagua ukweli; wasilisha fikra zako mwenyewe."],
          words: [["Prompt ya mshirika wa kujifunza", "prompt inayoiomba AI ikusaidie kufikiri badala ya kukufanyia kazi."], ["Maswali ya Kisokrati", "kufundisha kwa kuuliza maswali yanayomwongoza mwanafunzi kufikia jibu kwa kufikiri mwenyewe (kwa Kiingereza: Socratic questioning)."]],
          slides: [
            { title: "Zana ile ile, prompt tofauti", bullets: ["Mashine ya majibu: \"Niandikie aya yangu\"", "Mshirika wa kujifunza: \"Niulize maswali, usiniambie\""] },
            { title: "Prompt tatu za mshirika wa kujifunza", bullets: ["\"Nieleze kwa njia nyingine, kwa mfano\"", "\"Niulize maswali na uniambie nilikosea wapi\"", "\"Mazuri mawili, rekebisho moja, bila kuandika upya\""] },
            { title: "Bado ni kazi ya mwanafunzi", bullets: ["Kagua ukweli", "Wasilisha fikra zako mwenyewe"] }
          ],
          tryIt: "Jaribu prompt ya mashine ya majibu na prompt ya mshirika wa kujifunza kuhusu mada unayofundisha. Andika ipi ingemsaidia mwanafunzi kujifunza zaidi na kwa nini.",
          youCanNow: "kuwafundisha wanafunzi kutumia AI kusaidia fikra zao, si kuzichukua nafasi.",
          quickCheck: [
            { objective: "O3", q: "Prompt ya mashine ya majibu ni nini?", options: ["Prompt inayoiomba AI ikuulize maswali", "Prompt inayoiomba AI ikufanyie kazi", "Prompt inayoomba vidokezo", "Prompt inayoiomba AI ieleze makosa yako"], answer: 1, why: "Prompt za mashine ya majibu zinaruka kufikiri ambako kazi inajenga." },
            { objective: "O3", q: "Mwanafunzi anataka msaada wa AI kujiandaa kwa mtihani. Ungefundisha prompt ipi?", options: ["\"Nipe majibu yote.\"", "\"Niandikie maelezo yangu.\"", "\"Nifanyie kazi yangu ya nyumbani.\"", "\"Niulize swali moja baada ya jingine na uniambie nilikosea wapi.\""], answer: 3, why: "Prompt ya mshirika wa kujifunza inamfanya mwanafunzi aendelee kufikiri." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kuwafundisha wanafunzi kuhusu AI",
        questions: [
          { objective: "O1", q: "Ipi ni mojawapo ya stadi nne za ujuzi wa AI kwa wanafunzi?", options: ["Kukariri majina ya kampuni za AI", "Kuandika kwa kasi zaidi", "Kuhoji: AI inaweza kukosea au kuwa na upendeleo", "Kuepuka teknolojia yote"], answer: 2, why: "Kuihoji AI ni kiini cha ujuzi wa AI." },
          { objective: "O1", q: "Wanafunzi wadogo wanawezaje kujifunza ujuzi wa AI bila akaunti?", options: ["Mwalimu akionyesha na shughuli zisizotumia vifaa", "Hawawezi", "Kwa kutumia nywila ya mzazi", "Kujisajili kwa umri bandia"], answer: 0, why: "Maonyesho ya mwalimu na masomo yasiyotumia vifaa yanafundisha mawazo haya kwa usalama." },
          { objective: "O2", q: "Kwa nini ujaribu maswali uliyoandaa kabla ya somo?", options: ["Ili kulirefusha", "Ni sheria", "Wanafunzi wanapenda hivyo", "Zana za AI zinabadilika na zinaweza kurekebisha au kuleta makosa"], answer: 3, why: "Kosa ulilopanga huenda lisionekane tena." },
          { objective: "O3", q: "Ipi ni prompt ya mshirika wa kujifunza?", options: ["\"Niandikie insha yangu.\"", "\"Niulize maswali moja baada ya jingine; usinipe jibu.\"", "\"Nifanyie kazi yangu ya nyumbani.\"", "\"Nipe majibu.\""], answer: 1, why: "Inasaidia kufikiri badala ya kuchukua nafasi yake." },
          { objective: "O2", q: "Kuiomba AI imweleze \"muuguzi\" mara kadhaa kunawasaidia wanafunzi kuona:", options: ["Tahajia", "Gharama", "Kasi", "Upendeleo katika mifumo"], answer: 3, why: "Mifumo inayojirudia inaweza kuonyesha upendeleo." }
        ]
      }
    },
    {
      name: "Sura 2: Kanuni, usalama na mpango wa shule nzima",
      lessons: [
        {
          objectives: ["O4"],
          title: "Viwango vya matumizi ya AI kwa kazi za darasani",
          minutes: 6,
          goal: "Weka kipimo cha viwango vitano vya matumizi ya AI na uzipe kazi viwango hivyo.",
          text: [
            "Wanafunzi wanahitaji kujua, kwa kila kazi, matumizi gani ya AI yanaruhusiwa. Kipimo rahisi cha viwango vitano: Kiwango 0, hakuna AI. Kiwango 1, AI kwa mawazo tu (kuchangia mawazo, kisha fanya kazi mwenyewe). Kiwango 2, AI kwa maoni (kuhusu rasimu yako mwenyewe; wewe unafanya mabadiliko). Kiwango 3, AI kama mshiriki (unaweza kutumia sehemu zilizotengenezwa na AI, zikiwa zimewekwa alama na kuelezwa). Kiwango 4, uchunguzi wa AI (kutumia AI ndilo lengo la kazi).",
            "Ipe kila kazi kiwango chake, na ueleze kwa nini: kazi ya kiwango 0 inaweza kujenga stadi ambayo wanafunzi lazima wawe nayo wenyewe, kama kuandika aya kwa muda maalum au kufanya hesabu kichwani. Kazi ya kiwango 2 inajenga stadi za kurekebisha kazi.",
            "Tumieni kipimo kimoja katika shule nzima ili wanafunzi wasikutane na kanuni tofauti katika kila darasa. Kuna matoleo kadhaa yaliyochapishwa ya vipimo vya tathmini ya AI; rekebisheni kimoja au andikeni chenu pamoja na walimu wenzenu."
          ],
          steps: ["Kubalianeni kipimo cha viwango vitano na walimu.", "Ipe kila kazi kiwango chake.", "Eleza kwa nini kiwango hicho kinafaa lengo la kujifunza.", "Bandika kipimo darasani na mtandaoni.", "Tumieni kipimo kimoja katika shule nzima."],
          words: [["Kiwango cha matumizi ya AI", "alama inayowaambia wanafunzi kiasi gani cha AI wanaweza kutumia kwenye kazi."], ["Mshiriki", "mtu (au kitu) anayefanya kazi pamoja nawe."]],
          slides: [
            { title: "Viwango vitano vya matumizi ya AI", bullets: ["0 Hakuna AI; 1 Mawazo tu", "2 Maoni kuhusu rasimu yako", "3 Mshiriki, zikiwa na alama na maelezo", "4 Uchunguzi wa AI"] },
            { title: "Ipe kila kazi kiwango", bullets: ["Taja kiwango", "Eleza kwa nini kinafaa lengo la kujifunza"] },
            { title: "Kipimo kimoja, shule nzima", bullets: ["Kanuni zile zile katika kila darasa", "Rekebisheni kipimo kilichochapishwa pamoja na walimu"] }
          ],
          tryIt: "Andika kipimo cha viwango vitano kwa maneno ambayo wanafunzi wanaelewa. Kisha zipe kazi tano zako zijazo kiwango, kila moja na sababu ya mstari mmoja.",
          youCanNow: "kuwaambia wanafunzi waziwazi kiasi gani cha AI wanaweza kutumia kwenye kila kazi, na kwa nini.",
          quickCheck: [
            { objective: "O4", q: "Kiwango 0 kwenye kipimo cha matumizi ya AI kinamaanisha nini?", options: ["Hakuna AI inayoweza kutumika", "Matumizi yoyote ya AI yanaruhusiwa", "AI inaweza kuandika rasimu ya kwanza", "AI inaweza kusahihisha kazi"], answer: 0, why: "Kiwango 0 ni kwa kazi ambazo wanafunzi lazima waonyeshe fikra zao wenyewe bila AI." },
            { objective: "O4", q: "Lengo la kazi ni kufanya mazoezi ya kuandika rasimu ya kwanza peke yao. Kiwango kipi kinafaa?", options: ["Kiwango cha mshiriki, AI ikiandika sehemu", "Hakuna kiwango; wanafunzi waamue", "Kiwango cha chini kama hakuna AI, na sababu inayohusiana na lengo hilo", "Kiwango cha juu kabisa, ili wanafunzi wajifunze zana"], answer: 2, why: "Kiwango kinapaswa kufaa lengo la kujifunza, pamoja na sababu ambayo wanafunzi wanaweza kuiona." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kueleza jinsi ulivyotumia AI",
          minutes: 5,
          goal: "Wafundishe wanafunzi njia rahisi ya kueleza na kutaja matumizi ya AI.",
          text: [
            "Uaminifu kuhusu AI ni stadi. AI inaporuhusiwa, wanafunzi wanapaswa kueleza jinsi walivyoitumia. Maelezo ya mstari mmoja yanafaa kwa kazi nyingi: \"Nilitumia [zana] ku[fanya nini] tarehe [tarehe]. Mimi [nilichofanya nayo].\" Kwa mfano: \"Nilitumia Gemini kuniuliza maswali ya msamiati tarehe 3 Machi. Niliandika majibu yote mwenyewe.\"",
            "Kwa kazi za utafiti, wanafunzi wakubwa wanaweza kufuata mtindo wa kunukuu vyanzo ambao shule yako inatumia; miongozo ya mitindo kama MLA na APA inachapisha maelekezo ya kunukuu zana za AI kwenye tovuti zao wenyewe. AI si chanzo cha kuaminika cha ukweli, kwa hiyo wanafunzi bado lazima watafute na kunukuu chanzo cha asili.",
            "Chukulia maelezo ya kweli kama jambo zuri. Wanafunzi wanaoeleza walichofanya na AI wanajifunza uadilifu; usiadhibu maelezo ya kweli ya matumizi yanayoruhusiwa."
          ],
          steps: ["Fundisha maelezo ya mstari mmoja.", "Yaonyeshe kwenye kazi yako mwenyewe uliyosaidiwa na AI.", "Kwa utafiti, tumia maelekezo ya mtindo wa kunukuu wa shule yako.", "Dai vyanzo vya asili kwa ukweli.", "Sifu maelezo ya kweli."],
          words: [["Maelezo ya matumizi", "kusema waziwazi jinsi ulivyotumia AI (kwa Kiingereza: disclosure)."], ["Kunukuu chanzo", "maelezo yanayomwambia msomaji taarifa ilitoka wapi (kwa Kiingereza: citation)."]],
          slides: [
            { title: "Maelezo ya mstari mmoja", bullets: ["\"Nilitumia [zana] ku[fanya nini] tarehe [tarehe].\"", "\"Mimi [nilichofanya nayo].\""] },
            { title: "Kazi za utafiti", bullets: ["Tumia mtindo wa kunukuu wa shule yako", "AI si chanzo cha ukweli", "Tafuta na unukuu chanzo cha asili"] },
            { title: "Tuza uaminifu", bullets: ["Uonyeshe wewe mwenyewe", "Usiadhibu kamwe maelezo ya kweli ya matumizi yanayoruhusiwa"] }
          ],
          tryIt: "Andika mstari wa maelezo kwa kitu ulichotumia AI kufanya wiki hii. Kisha andika maelekezo utakayowapa wanafunzi kuhusu kueleza matumizi ya AI.",
          youCanNow: "kuwafundisha wanafunzi kueleza na kunukuu matumizi ya AI kwa uaminifu.",
          quickCheck: [
            { objective: "O5", q: "Maelezo ya mstari mmoja ya AI yanapaswa kuwa na nini?", options: ["Neno \"AI\" tu", "Zana, ilichofanya, tarehe na alichofanya mwanafunzi", "Nywila ya mwanafunzi", "Alama ya mtihani"], answer: 1, why: "Mstari kamili unaonyesha hasa jinsi AI ilivyotumika." },
            { objective: "O5", q: "Mwanafunzi anaeleza kwa uaminifu matumizi ya AI yanayoruhusiwa katika kazi yake. Ungejibuje?", options: ["Kuchukulia maelezo hayo kama jambo zuri", "Kupunguza alama yake", "Kuripoti kama udanganyifu", "Kupuuza"], answer: 0, why: "Maelezo ya kweli ndiyo tabia unayoitaka, kwa hiyo yanapaswa kukaribishwa." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kuwaweka wanafunzi salama, na kupanga kwa shule nzima",
          minutes: 6,
          goal: "Fundisha kanuni za usalama kwa wanafunzi na upange ujuzi wa AI katika madarasa yote.",
          text: [
            "Wafundishe wanafunzi kanuni nne za usalama. Usitoe taarifa binafsi (jina kamili, anwani, shule, picha, nywila) kwa zana za AI. Tumia tu zana ambazo shule imeidhinisha, chini ya kanuni za umri katika masharti ya zana hiyo. AI inaweza kutengeneza picha, sauti na video bandia (deepfakes): kuwa makini na unachoamini na usitengeneze kamwe bandia za watu halisi. Ongea na mtu mzima unayemwamini ikiwa mazungumzo na AI yanakuudhi, si salama au yanaomba siri.",
            "Kwa watoto walio chini ya miaka 13, COPPA inahusu huduma za mtandaoni; FTC (Tume ya Biashara ya Shirikisho ya Marekani) inasema shule inaweza kutoa idhini kwa niaba ya wazazi tu pale huduma inapokusanya taarifa kwa matumizi na manufaa ya shule, bila lengo jingine la kibiashara. Wilaya yako inaamua zana zipi wanafunzi wanaweza kutumia; waambie familia ni zipi na kwa nini.",
            "Panga ujuzi wa AI kwa makundi ya madarasa, ili kila mwaka ujenge juu ya uliotangulia: madarasa ya mwanzo yanajifunza AI ni nini kupitia maonyesho; madarasa ya juu ya msingi yanafanya mazoezi ya kuhoji na kukagua ukweli; sekondari ya chini inaongeza upendeleo, kueleza matumizi na matumizi ya mshirika wa kujifunza; sekondari ya juu inaongeza maadili, kazi za baadaye na kutengeneza kwa uwajibikaji. Shirikisha familia mpango huu."
          ],
          steps: ["Fundisha kanuni nne za usalama.", "Thibitisha zana zilizoidhinishwa na kanuni za umri; kwa walio chini ya miaka 13, idhini ya COPPA.", "Waambie familia zana zipi zinatumika na kwa nini.", "Panga stadi za ujuzi wa AI kwa makundi ya madarasa.", "Shirikisha familia mpango huu."],
          words: [["Deepfake", "picha, sauti au video bandia iliyotengenezwa na AI ili ionekane halisi."], ["Kundi la madarasa", "madarasa kadhaa pamoja, kama K-2 au 6-8 (kwa Kiingereza: grade band)."]],
          slides: [
            { title: "Kanuni nne za usalama kwa wanafunzi", bullets: ["Hakuna taarifa binafsi", "Zana zilizoidhinishwa tu, chini ya kanuni za umri", "Jihadhari na deepfakes; usiwaige watu halisi kamwe", "Mwambie mtu mzima unayemwamini"] },
            { title: "Chini ya miaka 13: COPPA", bullets: ["Idhini ya shule kwa matumizi ya shule tu", "Hakuna lengo jingine la kibiashara", "Waambie familia zana zipi na kwa nini"] },
            { title: "Mpango kwa makundi ya madarasa", bullets: ["Mwanzo: AI ni nini", "Juu ya msingi: kuhoji na kukagua", "Sekondari: upendeleo, kueleza matumizi, maadili"] }
          ],
          sources: [{ name: "FTC: Complying with COPPA, Frequently Asked Questions (Kufuata COPPA, Maswali Yanayoulizwa Mara kwa Mara)", url: "https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions" }],
          tryIt: "Kazi ya mwisho: kusanya kifurushi chako cha ujuzi wa AI kwa wanafunzi wa darasa moja: mpango wa somo la dakika 30, kipimo cha viwango vitano vya matumizi ya AI chenye mfano wa kazi katika kila kiwango, muundo wa maelezo wa mstari mmoja, na barua ya nusu ukurasa kwa familia yenye kanuni za usalama.",
          youCanNow: "kuongoza ujuzi wa AI wa wanafunzi kwa somo, viwango vilivyo wazi vya matumizi, maelezo ya kweli na kanuni za usalama ambazo familia zinaelewa.",
          quickCheck: [
            { objective: "O6", q: "Deepfake ni nini?", options: ["Faili ya kompyuta iliyoharibika", "Nywila imara", "Picha, sauti au video bandia iliyotengenezwa na AI", "Aina ya injini ya utafutaji"], answer: 2, why: "Deepfakes ni bandia zilizotengenezwa na AI, ndiyo maana wanafunzi kamwe hawatengenezi bandia za watu halisi." },
            { objective: "O6", q: "Mwanafunzi anasema mazungumzo na AI yalimuudhi. Alipaswa kuwa amefundishwa kufanya nini?", options: ["Kuendelea kuongea hadi yaishe", "Kufuta app na kunyamaza", "Kuandika habari hiyo mtandaoni", "Kumwambia mtu mzima anayemwamini"], answer: 3, why: "Kumwambia mtu mzima unayemwamini ni mojawapo ya kanuni za usalama kwa wanafunzi." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kanuni, usalama na mpango wa shule nzima",
        questions: [
          { objective: "O4", q: "Katika kazi ya Kiwango 2 (maoni), wanafunzi wanaweza:", options: ["Kuiacha AI iandike kazi yote", "Kutotumia AI kabisa", "Kupata maoni ya AI kuhusu rasimu yao wenyewe na kufanya mabadiliko wenyewe", "Kunakili maandishi ya AI bila kuyawekea alama"], answer: 2, why: "Kiwango 2 ni maoni kuhusu kazi ya mwanafunzi mwenyewe." },
          { objective: "O4", q: "Kwa nini mtumie kipimo kimoja cha matumizi ya AI katika shule nzima?", options: ["Wanafunzi wanakutana na kanuni zile zile katika kila darasa", "Ni nafuu zaidi", "Kinapiga marufuku AI", "Wauzaji wanakidai"], answer: 0, why: "Kanuni zinazofanana zinazuia mkanganyiko." },
          { objective: "O5", q: "Mwanafunzi anaeleza kwa uaminifu matumizi ya AI yanayoruhusiwa. Unapaswa:", options: ["Kupunguza alama", "Kuchukulia maelezo hayo kama jambo zuri", "Kumripoti", "Kupuuza"], answer: 1, why: "Maelezo ya kweli ni uadilifu kwa vitendo." },
          { objective: "O6", q: "Ipi ni mojawapo ya kanuni nne za usalama kwa wanafunzi?", options: ["Usitengeneze kamwe bandia za watu halisi", "Toa anwani yako ili upate majibu bora", "Tumia app yoyote unayoipata", "Weka siri mazungumzo yanayokuudhi"], answer: 0, why: "Deepfakes za watu halisi zinaweza kusababisha madhara." },
          { objective: "O6", q: "Kwa wanafunzi walio chini ya miaka 13, sheria ipi inahusu huduma za mtandaoni?", options: ["Hakuna", "Sheria ya barabarani", "Hakimiliki tu", "COPPA"], answer: 3, why: "COPPA inawalinda watoto walio chini ya miaka 13 mtandaoni." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI kwa Viongozi wa Shule na Elimu 5: Ujifunzaji wa Wanafunzi na Ujuzi wa AI",
    questions: [
      { objective: "O1", q: "Ujuzi wa AI unamaanisha:", options: ["Kuweza kutengeneza AI", "Kujua vya kutosha kuhusu AI ili kuitumia vizuri, kuihoji na kuchagua kwa busara", "Kutotumia AI kamwe", "Kuandika kwa kasi"], answer: 1, why: "Ni kuelewa pamoja na busara." },
      { objective: "O1", q: "Wanafunzi wanapaswa kuelewa kuwa AI:", options: ["Inajua kila kitu", "Inafikiri kama mtu", "Inatabiri majibu yanayowezekana kutokana na mifumo", "Haikosei kamwe"], answer: 2, why: "Hilo linaeleza uwezo wake na makosa yake." },
      { objective: "O1", q: "Shughuli isiyotumia vifaa:", options: ["Ni umeme kukatika", "Inahitaji kompyuta mpakato", "Inafundisha kuhusu teknolojia bila vifaa", "Ni video"], answer: 2, why: "Inafaa kwa wanafunzi wadogo." },
      { objective: "O2", q: "Katika somo la vitendo, wanafunzi wanakagua majibu ya AI kwa kulinganisha na:", options: ["Kitabu cha kiada, tovuti inayoaminika au mwalimu", "AI nyingine tu", "Kisio la rafiki", "Hakuna"], answer: 0, why: "Vyanzo vinavyoaminika vinaonyesha makosa." },
      { objective: "O2", q: "Swali zuri lililoandaliwa kwa somo ni lile ambalo:", options: ["Ni refu sana", "Kila mtu analijua", "Halina jibu", "AI inakosea au inabuni jibu"], answer: 3, why: "Kuona kosa kunafundisha tabia ya kukagua." },
      { objective: "O2", q: "Jaribio la kumweleza mtu linawasaidia wanafunzi kuona:", options: ["Makosa ya tahajia", "Upendeleo", "Bei", "Kasi"], answer: 1, why: "Mifumo inaonyesha upendeleo." },
      { objective: "O3", q: "\"Niulize maswali na uniambie nilikosea wapi\" ni:", options: ["Nywila", "Udanganyifu", "Prompt ya mashine ya majibu", "Prompt ya mshirika wa kujifunza"], answer: 3, why: "Inasaidia kujifunza." },
      { objective: "O3", q: "\"Niandikie aya yangu\" inaifanya AI kuwa:", options: ["Mkaguzi wa ukweli", "Mkufunzi", "Mashine ya majibu", "Mwalimu"], answer: 2, why: "Inachukua nafasi ya fikra za mwanafunzi." },
      { objective: "O4", q: "Kiwango 0 kwenye kipimo cha matumizi ya AI kinamaanisha:", options: ["Hakuna AI", "AI kwa kila kitu", "Maoni tu", "Mawazo tu"], answer: 0, why: "Baadhi ya stadi lazima zijengwe peke yako." },
      { objective: "O4", q: "Kiwango 3 (mshiriki) kinawataka wanafunzi:", options: ["Kuficha matumizi ya AI", "Kuweka alama na kueleza sehemu zilizotengenezwa na AI", "Kutotumia AI", "Kuiacha AI isahihishe"], answer: 1, why: "Uwazi ndio sharti." },
      { objective: "O4", q: "Kiwango cha AI cha kila kazi kinapaswa kuja na:", options: ["Sababu inayohusiana na lengo la kujifunza", "Bei", "Nywila", "Bila maelezo yoyote"], answer: 0, why: "Wanafunzi hufuata kanuni wanazozielewa." },
      { objective: "O5", q: "Maelezo ya mstari mmoja ya AI yanajumuisha:", options: ["Hakuna kitu", "Anwani ya mwanafunzi", "Bei ya zana", "Zana, ilichofanya, tarehe, na alichofanya mwanafunzi"], answer: 3, why: "Yanafanya matumizi ya AI yawe wazi." },
      { objective: "O5", q: "Kwa utafiti, ukweli unapaswa kunukuliwa kutoka:", options: ["Mazungumzo na AI tu", "Chanzo cha asili", "Kumbukumbu", "Uvumi"], answer: 1, why: "AI si chanzo cha kuaminika cha ukweli." },
      { objective: "O5", q: "Maelekezo ya kunukuu AI kwa mtindo wa MLA au APA yanapatikana:", options: ["Hakuna mahali", "Katika jibu la AI tu", "Kwenye tovuti za miongozo hiyo ya mitindo yenyewe", "Kwenye mitandao ya kijamii"], answer: 2, why: "Miongozo ya mitindo inachapisha maelekezo yake yenyewe." },
      { objective: "O6", q: "Wanafunzi hawapaswi kamwe kuipa AI:", options: ["Mada ya mazoezi", "Swali la hesabu", "Jina lao kamili, anwani na nywila", "Neno la msamiati"], answer: 2, why: "Taarifa binafsi zinabaki siri." },
      { objective: "O6", q: "Deepfake ni:", options: ["Picha, sauti au video bandia iliyotengenezwa na AI", "Bwawa refu la kuogelea", "Insha ndefu", "Nywila salama"], answer: 0, why: "AI inaweza kutengeneza bandia zinazoonekana halisi." },
      { objective: "O6", q: "Mazungumzo na AI yakianza kuudhi, wanafunzi wanapaswa:", options: ["Kutoa taarifa binafsi", "Kuyaweka siri", "Kuendelea kuongea", "Kumwambia mtu mzima wanayemwamini"], answer: 3, why: "Watu wazima wanaweza kusaidia kuwaweka wanafunzi salama." },
      { objective: "O6", q: "Umri wa chini kwa zana za AI unapatikana katika:", options: ["Kumbukumbu ya mwenzako", "Masharti ya sasa ya kila zana yenyewe", "Orodha ya chakula ya shule", "Kitabu cha kiada cha mwaka 2010"], answer: 1, why: "Kila zana inaweka na kusasisha kanuni zake yenyewe." },
      { objective: "O6", q: "Mpango wa makundi ya madarasa unamaanisha:", options: ["Sekondari ya juu tu inajifunza AI", "Somo moja kwa umri wote", "Hakuna mpango", "Stadi za ujuzi wa AI zinazojengwa mwaka baada ya mwaka"], answer: 3, why: "Stadi zinapaswa kujengwa katika madarasa yote." },
      { objective: "O6", q: "Familia zinapaswa kuambiwa:", options: ["Baada ya matatizo tu", "Hakuna kitu", "Zana zipi za AI zinatumika, kwa nini, na kanuni za usalama", "Bei za zana tu"], answer: 2, why: "Uwazi unajenga imani na uungwaji mkono." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi amepiga hatua kiasi gani
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 3, 5, 6, 8, 10, 11, 14, 16, 19] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Somo la vitendo", objective: "O2", notYet: "Wanafunzi hawajaribu AI, hawagundui kosa wala hawajadili upendeleo.", meets: "Mpango wa dakika 30 ambapo wanafunzi wanajaribu zana ya AI au wanatazama maonyesho, wanagundua kosa na wanajadili upendeleo.", exceeds: "Maswali yaliyoandaliwa yalijaribiwa mapema na yanafaa darasa hilo." },
      { name: "Kipimo cha matumizi ya AI", objective: "O4", notYet: "Viwango vichache kuliko vitano, au viwango visivyo na mifano ya kazi.", meets: "Kipimo cha viwango vitano chenye mfano wa kazi katika kila kiwango.", exceeds: "Kila mfano una sababu inayohusiana na lengo la kujifunza." },
      { name: "Muundo wa maelezo ya matumizi", objective: "O5", notYet: "Hakuna muundo wa maelezo, au unakosa sehemu muhimu.", meets: "Muundo wa mstari mmoja ambao wanafunzi watatumia kueleza jinsi walivyotumia AI.", exceeds: "Unajumuisha zana, ilichofanya, tarehe na alichofanya mwanafunzi, pamoja na mfano." },
      { name: "Barua kwa familia na usalama", objective: "O6", notYet: "Hakuna barua kwa familia, au kanuni za usalama hazipo.", meets: "Barua ya nusu ukurasa inayoeleza wanafunzi watajifunza nini na kanuni za usalama.", exceeds: "Pia inasema zana zipi zinatumika na kwa nini, kwa maneno rahisi kwa familia." },
      { name: "Stadi za ujuzi zinazoeleweka na wanafunzi", objective: "O1", notYet: "Kifurushi hakiwafundishi wanafunzi kuihoji AI.", meets: "Somo linawafundisha wanafunzi kuwa AI inaweza kukosea au kuwa na upendeleo na jinsi ya kuikagua.", exceeds: "Kinatumia prompt za mshirika wa kujifunza ili AI iwasaidie wanafunzi kufikiri." }
    ]
  },
  evaluation: {
    results: [
      "Waelimishaji wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Madarasa yanayofundisha somo la dakika 30 la ujuzi wa AI ndani ya siku 30 (utafiti wa kufuatilia)",
      "Shule zinazotumia kipimo kimoja cha pamoja cha matumizi ya AI kwenye kazi (utafiti wa kufuatilia)",
      "Familia zinazopokea barua kuhusu matumizi ya AI ya wanafunzi na usalama"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta yenye intaneti na zana ya AI iliyoidhinishwa na wilaya kwa matumizi ya wanafunzi au kwa maonyesho",
      "Orodha ya kazi zijazo za darasa moja",
      "Karatasi kwa shughuli zisizotumia vifaa na wanafunzi wadogo",
      "Kama dakika 60 kwa jumla, pamoja na somo la dakika 30 kwa wanafunzi"
    ],
    facilitatorNotes: [
      "Fanyeni jaribio la awali pamoja, kisha endesheni somo la vitendo huku walimu wakiwa kama wanafunzi.",
      "Kagua zana zilizoidhinishwa na wilaya na kanuni za umri za kila zana kabla mwanafunzi yeyote hajaitumia; tumia maonyesho ya mwalimu kwa watoto walio chini ya miaka 13 inapohitajika.",
      "Kubalianeni kipimo kimoja cha matumizi ya AI katika shule nzima ili wanafunzi wakutane na kanuni zile zile.",
      "Wakumbushe walimu kukaribisha maelezo ya kweli ya matumizi badala ya kuyaadhibu.",
      "Pima kazi ya mwisho kwa rubriki, na kagua barua kwa familia kuona kama ina maneno rahisi."
    ]
  }
};
