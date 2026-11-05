"use strict";

// Koach Learn course (Swahili translation of youth/youth-college-or-trade.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "youth-college-or-trade-sw",
  lang: "sw",
  translationOf: "youth-college-or-trade",
  category: "Youth",
  name: "Kuchagua Chuo, Ufundi au Kazi Baada ya Shule",
  skills: "Kujua mambo unayopenda na mahitaji yako, Kulinganisha njia za chuo, Kulinganisha ufundi, uanagenzi, jeshi na kazi, Kuomba msaada wa kifedha, Kuepuka mitego ya madeni na ulaghai, Kuandika mpango wa miaka miwili",
  outcome: "kulinganisha chuo, ufundi, jeshi na kazi kwa pamoja, kujua jinsi ya kulipia chaguo lako bila kuingia katika mitego ya madeni au ulaghai, na kuandika mpango wa miaka miwili wenye mpango mbadala.",
  about: [
    "Baada ya sekondari hakuna njia moja tu iliyo sahihi. Wengine wanaenda chuo kikuu cha miaka minne, wengine wanaanza chuo cha jamii (community college), wengine wanajifunza ufundi kupitia uanagenzi, wengine wanajiunga na jeshi, na wengine wanaanza kazi moja kwa moja na kuendelea kujifunza kazini. Wengi huchanganya njia hizi kwa muda.",
    "Katika kozi hii utaangalia unachopenda na unachohitaji, utalinganisha njia kuu kwa maswali yale yale, utajifunza jinsi FAFSA na misaada mingine ya kifedha inavyofanya kazi, utatambua mitego ya madeni na ulaghai, na utaandika mpango wako wa miaka miwili wenye mpango mbadala.",
    "Sheria za pesa, tarehe na programu hubadilika kila mwaka. Kila somo linakuonyesha mahali pa kukagua habari za sasa, na unapaswa kujadili mpango wako na mshauri wa shule, mzazi au mtu mzima mwingine unayemwamini.",
    "Kila somo linachukua kama dakika tano na linaisha na kazi unayoifanya papo hapo. Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Andika mpango wa miaka miwili wa ukurasa mmoja: njia yako kuu na mpango mbadala, ulinganisho wa angalau njia mbili kwa maswali yale yale matano (gharama, muda, malipo wakati unajifunza, kazi zinazowezekana, unachohitaji ili kukubaliwa), jinsi utakavyolipia, utakachofanya kila miezi sita, na watu watakaokusaidia.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wanafunzi wa sekondari na waliohitimu hivi karibuni nchini Marekani wanaoamua watakachofanya baada ya shule, pamoja na wazazi, washauri na walezi wanaowasaidia.",
    startingPoint: "Wanajua baadhi ya mambo wanayopenda na wamesikia kuhusu chuo, ufundi au jeshi kutoka kwa marafiki na familia. Wachache wamelinganisha njia kwa maswali yale yale, wameangalia bei halisi (net price), wamejaza FAFSA au wamejifunza kutambua ulaghai wa misaada.",
    gap: "Kuchagua njia kwa kusikia tu kunaweza kuleta deni kwa programu isiyokufaa, kukosa tarehe za mwisho za misaada au kupoteza pesa kwa walaghai. Kulinganisha chaguo kwa maswali yale yale, kuelewa msaada wa kifedha, na kuandika mpango wa miaka miwili wenye mpango mbadala kunawasaidia vijana kuanza njia inayowafaa na wanayoweza kuilipia.",
    constraints: [
      "Sheria za pesa, tarehe za misaada na programu hubadilika kila mwaka; wanafunzi wanakagua studentaid.gov, apprenticeship.gov na tovuti rasmi za vyuo",
      "Hakuna ushauri wa kifedha: wanafunzi wanajadili mipango na mshauri, mzazi au mtu mzima wanayemwamini",
      "Faragha na ulaghai: usishiriki kamwe FSA ID, namba za benki au kadi, na usilipe kamwe ili kujaza FAFSA",
      "Vifaa: simu, au kompyuta ya shule au maktaba yenye intaneti",
      "Masomo mafupi na maneno rahisi; wanafunzi wengi watakuwa wa kwanza katika familia yao kufanya maamuzi haya"
    ],
    prerequisites: "Hakuna. Kozi \"AI na Kuchunguza Taaluma\" ni kozi nzuri ya kuanza nayo."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Kabla ya kulinganisha vyuo au kazi", action: "kuorodhesha mambo unayopenda, uwezo wako, jinsi unavyojifunza na mahitaji yako ya pesa, na kuchagua njia zinazokufaa zaidi kwa sasa", standard: "ukizungushia duara njia mbili au tatu kati ya njia kuu tano" },
    { id: "O2", condition: "Ukitumia tovuti za vyuo na vikokotoo vya bei halisi", action: "kulinganisha chuo cha jamii na chuo kikuu cha miaka minne kwa maswali yale yale matano", standard: "kila swali likiwa na jibu au alama ya kuuliza" },
    { id: "O3", condition: "Ukitumia apprenticeship.gov na vyanzo rasmi", action: "kulinganisha uanagenzi, jeshi au kazi yenye mafunzo kwa maswali yale yale matano", standard: "ukiuliza kuhusu idadi ya wanaomaliza, wanaopata kazi na ithibati kabla ya kusaini chochote" },
    { id: "O4", condition: "Ukitumia studentaid.gov", action: "kueleza aina nne za msaada wa kifedha na kupanga lini na pamoja na nani utajaza FAFSA", standard: "tarehe ya kufunguliwa ya mwaka huu na tarehe za mwisho zikiwa zimeandikwa, bila kulipa ada yoyote" },
    { id: "O5", condition: "Ukipewa ofa za misaada na za ufadhili wa masomo", action: "kupanga kila ofa kuwa pesa ya bure, pesa ya kufanyia kazi au mkopo, kuhesabu kiasi kinachobaki kulipa, na kutambua dalili za ulaghai", standard: "ukipata kiasi sahihi na kutaja mahali pa kuripoti ulaghai" },
    { id: "O6", condition: "Ukitumia ulinganisho wako na mpango wako wa misaada", action: "kuandika mpango wa miaka miwili wenye njia kuu, mpango mbadala, hatua za kila miezi sita, jinsi utakavyolipa na nani atakusaidia", standard: "kila sehemu ikiwemo na tarehe ya kuupitia" }
  ],
  chapters: [
    {
      name: "Sura 1: Kulinganisha njia zako",
      lessons: [
        {
          objectives: ["O1"],
          title: "Jijue kabla ya kuchagua",
          minutes: 5,
          goal: "Andika mambo unayopenda, uwezo wako, jinsi unavyojifunza na mahitaji yako ya pesa ili uweze kupima kila njia.",
          text: [
            "Kabla ya kulinganisha vyuo au kazi, jiangalie wewe mwenyewe. Njia bora inafaa kile unachofurahia, kile unachoweza vizuri, jinsi unavyopenda kujifunza, na unachohitaji sasa hivi.",
            "Jiulize: Ni masomo au shughuli gani zinazonifanya nisahau muda? Je, ninajifunza vizuri kwa kusoma na kuandika, au kwa kufanya kazi kwa mikono? Je, ninahitaji kupata pesa hivi karibuni, kusaidia familia yangu au kujilipia mwenyewe? Je, nataka kukaa karibu na nyumbani au kuhama?",
            "Kuna njia kuu tano: chuo kikuu cha miaka minne, chuo cha jamii, chuo cha ufundi au uanagenzi, jeshi, na kuanza kazi. Hakuna iliyo bora kwa kila mtu. Njia nzuri kwa rafiki yako huenda isikufae wewe.",
            "Msaidizi wa AI anaweza kukusaidia kubuni mawazo ya kazi zinazolingana na majibu yako. Chukua mawazo yake kama orodha ya kuanzia, kisha kagua ukweli na mshauri na tovuti rasmi."
          ],
          steps: ["Andika vitu vitatu unavyofurahia na vitu vitatu unavyoweza vizuri.", "Andika jinsi unavyojifunza vizuri: kwa kusoma, kusikiliza au kufanya.", "Andika mahitaji yako ya pesa: je, unahitaji kupata pesa hivi karibuni?", "Andika unapotaka kuishi kwa miaka miwili ijayo.", "Orodhesha njia tano na uzungushie duara mbili au tatu zinazokufaa zaidi kwa sasa."],
          words: [["Jambo unalopenda", "kitu unachofurahia kufanya au kujifunza."], ["Uwezo", "kitu unachokifanya vizuri."], ["Njia", "mwelekeo unaouchukua baada ya shule kuelekea kazi yako ya baadaye."]],
          slides: [
            { title: "Anza na wewe", bullets: ["Unachofurahia", "Unachoweza vizuri", "Jinsi unavyojifunza na unachohitaji"] },
            { title: "Maswali ya kujiuliza", bullets: ["Nini kinanifanya nisahau muda?", "Kazi ya mikono au kusoma na kuandika?", "Je, ninahitaji kupata pesa hivi karibuni?"] },
            { title: "Njia kuu tano", bullets: ["Chuo kikuu cha miaka minne au chuo cha jamii", "Chuo cha ufundi au uanagenzi", "Jeshi au kuanza kazi"] },
            { title: "Kutumia AI kubuni mawazo", bullets: ["Omba kazi zinazolingana na majibu yako", "Ichukue kama orodha ya kuanzia", "Kagua ukweli na mshauri"] }
          ],
          tryIt: "Jibu maswali manne ya somo hili kwenye karatasi. Kisha muulize msaidizi wa AI: Haya ni mambo ninayopenda na uwezo wangu. Nipendekezee kazi tano na mafunzo ambayo kila moja inahitaji. Zungushia duara njia mbili au tatu zinazokufaa zaidi.",
          youCanNow: "kueleza mambo unayopenda, uwezo wako, jinsi unavyojifunza na mahitaji yako ya pesa, na kuchagua njia zinazostahili kulinganishwa.",
          quickCheck: [
            { objective: "O1", q: "Katika kozi hii, ni zipi njia kuu tano baada ya sekondari?", options: ["Chuo na kazi tu", "Chuo, mwaka wa mapumziko, kusafiri, michezo na muziki", "Kozi za mtandaoni tu", "Chuo kikuu cha miaka minne, chuo cha jamii, chuo cha ufundi au uanagenzi, jeshi, na kazi"], answer: 3, why: "Kozi inalinganisha njia hizi tano, na watu wengi huzichanganya kwa muda." },
            { objective: "O1", q: "Unahitaji kupata pesa hivi karibuni ili kusaidia familia yako. Hilo linaathirije chaguo lako?", options: ["Halina maana", "Angalia kwa makini njia ambazo unapata pesa wakati unajifunza, kama uanagenzi au kazi yenye mafunzo", "Chuo kikuu cha miaka minne tu ndicho kinawezekana", "Subiri miaka michache kabla ya kuamua"], answer: 1, why: "Mahitaji yako ya pesa ni sehemu ya kinachofanya njia ikufae." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Chuo cha jamii na chuo kikuu cha miaka minne",
          minutes: 5,
          goal: "Linganisha chuo cha jamii na chuo kikuu cha miaka minne kwa maswali yale yale matano.",
          text: [
            "Chuo cha jamii (community college) ni chuo cha umma cha miaka miwili kilicho karibu na nyumbani. Kinatoa vyeti (mara nyingi mwaka mmoja au chini), stashahada za associate (kama miaka miwili), na madarasa unayoweza kuhamishia chuo kikuu cha miaka minne. Kwa kawaida gharama yake ni ndogo sana na unaweza kuishi nyumbani.",
            "Chuo kikuu cha miaka minne kinatoa shahada za kwanza (bachelor's). Baadhi ya kazi, kama ualimu, uuguzi wenye shahada ya kwanza, uhandisi na uhasibu, kwa kawaida zinahitaji shahada hiyo. Gharama hutofautiana sana kati ya vyuo vya umma na vya binafsi, na kati ya kuishi nyumbani na kuishi bweni.",
            "Tumia maswali yale yale matano kwa kila chaguo: Itagharimu kiasi gani kwa jumla, baada ya msaada? Itachukua muda gani? Je, naweza kupata pesa wakati najifunza? Waliohitimu wanapata kazi gani, na wanapata mshahara kiasi gani? Nahitaji nini ili kukubaliwa?",
            "Njia ya busara kwa wanafunzi wengi ni kuanza chuo cha jamii kisha kuhamia chuo kikuu. Uliza chuo cha jamii ni vyuo vikuu vipi vya miaka minne vinakubali alama zake (credits) kabla ya kujiandikisha kwa madarasa."
          ],
          steps: ["Chagua chuo kimoja cha jamii na chuo kikuu kimoja cha miaka minne ili kulinganisha.", "Tafuta gharama ya jumla ya kila mwaka ya kila chuo na kikokotoo chake cha bei halisi.", "Andika muda wa kumaliza, kazi wanazopata waliohitimu na unachohitaji ili kukubaliwa.", "Muulize mshauri kuhusu makubaliano ya kuhamisha alama.", "Weka majibu kando kwa kando katika jedwali."],
          words: [["Cheti", "programu fupi inayokufundisha kwa kazi moja maalum."], ["Stashahada ya associate", "stashahada ambayo kwa kawaida inachukua kama miaka miwili."], ["Shahada ya kwanza (bachelor's)", "shahada ambayo kwa kawaida inachukua kama miaka minne."], ["Kuhamisha (transfer)", "kupeleka alama zako za chuo kwenye chuo kingine."], ["Bei halisi (net price)", "gharama ya chuo baada ya ruzuku na ufadhili wa masomo kuondolewa."]],
          slides: [
            { title: "Chuo cha jamii", bullets: ["Karibu na nyumbani, gharama ndogo", "Vyeti na stashahada za associate", "Alama unazoweza kuhamisha"] },
            { title: "Chuo kikuu cha miaka minne", bullets: ["Shahada za kwanza (bachelor's)", "Zinahitajika kwa baadhi ya kazi", "Gharama hutofautiana sana kati ya vyuo"] },
            { title: "Maswali matano kwa kila chaguo", bullets: ["Gharama ya jumla baada ya msaada? Muda gani?", "Pesa wakati unajifunza?", "Kazi na mshahara baadaye? Unahitaji nini kukubaliwa?"] },
            { title: "Anza karibu, kisha hamia", bullets: ["Huokoa pesa kwa wanafunzi wengi", "Kwanza kagua vyuo vipi vinakubali alama"] }
          ],
          tryIt: "Tengeneza jedwali lenye maswali matano upande wa kushoto na vyuo viwili juu: chuo kimoja cha jamii na chuo kikuu kimoja cha miaka minne. Jaza unachoweza kupata kwenye tovuti zao na weka alama kwa unachohitaji bado kuuliza.",
          youCanNow: "kulinganisha chuo cha jamii na chuo kikuu cha miaka minne kwa maswali yale yale matano na kuona njia ya kuanza karibu kisha kuhamia.",
          quickCheck: [
            { objective: "O2", q: "Kikokotoo cha bei halisi kinaonyesha nini?", options: ["Makadirio ya gharama ya chuo baada ya ruzuku na ufadhili wa masomo", "Matokeo ya mpira wa chuo", "Alama zako za mitihani", "Idadi ya wanafunzi wanaoishi bweni"], answer: 0, why: "Bei halisi ni gharama ya chuo baada ya ruzuku na ufadhili wa masomo." },
            { objective: "O2", q: "Unalinganisha vyuo viwili lakini unaangalia bei iliyoandikwa tu. Unakosa nini?", options: ["Hakuna; bei ndiyo kitu pekee muhimu", "Rangi za chuo", "Maswali mengine: muda, kupata pesa wakati unajifunza, kazi na mshahara, na unachohitaji ili kukubaliwa", "Idadi ya majengo"], answer: 2, why: "Tumia maswali yale yale matano kwa kila chaguo." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ufundi, uanagenzi, jeshi na kazi",
          minutes: 6,
          goal: "Linganisha uanagenzi, jeshi na kazi yenye mafunzo kwa maswali yale yale matano.",
          text: [
            "Registered Apprenticeship (uanagenzi uliosajiliwa) ni kazi ambayo unalipwa wakati unajifunza ufundi stadi au kazi kutoka kwa wafanyakazi wenye uzoefu, pamoja na madarasa kando. Ufundi ni pamoja na fundi umeme, fundi bomba, seremala na mchomeleaji, na kuna uanagenzi katika afya, teknolojia ya habari (IT) na zaidi. Tafuta kwenye Apprenticeship Job Finder kwenye apprenticeship.gov.",
            "Vyuo vya ufundi vinafundisha ujuzi kwa miezi badala ya miaka, lakini kwa kawaida unalipa. Kabla ya kusaini, uliza ni wanafunzi wangapi wanamaliza, wangapi wanapata kazi katika fani hiyo, na kama chuo kina ithibati. Jihadhari na wauzaji wanaokulazimisha.",
            "Jeshi linatoa mafunzo ya kazi, mshahara na mafao ya elimu, kwa ahadi ya kutumikia kwa miaka kadhaa. Unafanya mtihani unaoitwa ASVAB, unaosaidia kuamua kazi zipi unazostahili. Ongea na waandikishaji (recruiters) kutoka tawi zaidi ya moja la jeshi, soma kila kitu kabla ya kusaini, na kagua tovuti rasmi ya tawi hilo.",
            "Kuanza kazi moja kwa moja pia ni njia halisi. Tafuta waajiri wanaokufundisha, wanaopandisha vyeo wafanyakazi wao, au wanaosaidia kulipia masomo baadaye. Tumia maswali yale yale matano kulinganisha njia hizi na chuo."
          ],
          steps: ["Tafuta programu karibu nawe kwenye Apprenticeship Job Finder ya apprenticeship.gov.", "Kwa chuo chochote cha ufundi, uliza kuhusu idadi ya wanaomaliza, wanaopata kazi na ithibati.", "Kama unafikiria jeshi, ongea na tawi zaidi ya moja na usome kabla ya kusaini.", "Kwa kazi, tafuta mafunzo, kupandishwa cheo na msaada wa ada.", "Jibu maswali matano kwa kila chaguo."],
          words: [["Registered Apprenticeship", "kazi yenye malipo na mafunzo yaliyopangwa inayoleta cheti kinachotambulika."], ["Ufundi", "kazi ya ujuzi unayojifunza kwa mafunzo, kama fundi umeme au mchomeleaji."], ["Ithibati (accredited)", "kukaguliwa na kuidhinishwa na chombo rasmi kinachokagua vyuo."], ["ASVAB", "mtihani unaotumika kuona kazi zipi za jeshi unazostahili."]],
          slides: [
            { title: "Uanagenzi", bullets: ["Kazi yenye malipo wakati unajifunza ufundi", "Fundi umeme, fundi bomba, afya, IT na zaidi", "Tafuta kwenye apprenticeship.gov"] },
            { title: "Vyuo vya ufundi", bullets: ["Miezi, si miaka, lakini kwa kawaida unalipa", "Uliza: wanaomaliza, wanaopata kazi, ithibati", "Ondoka ukilazimishwa na muuzaji"] },
            { title: "Jeshi", bullets: ["Mafunzo, mshahara na mafao ya elimu", "Miaka kadhaa ya kutumikia; mtihani wa ASVAB", "Ongea na tawi zaidi ya moja; soma kabla ya kusaini"] },
            { title: "Kuanza kazi", bullets: ["Tafuta mafunzo na kupandishwa cheo", "Baadhi ya waajiri husaidia kulipia masomo baadaye"] }
          ],
          sources: [
            { name: "Apprenticeship.gov: Apprenticeship Job Finder", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" },
            { name: "Apprenticeship.gov", url: "https://www.apprenticeship.gov/" }
          ],
          tryIt: "Tafuta uanagenzi mmoja karibu nawe kwenye apprenticeship.gov na kazi moja inayotoa mafunzo. Viongeze kwenye jedwali lako la somo lililopita na ujibu maswali matano kwa kila kimoja.",
          youCanNow: "kulinganisha uanagenzi, vyuo vya ufundi, jeshi na kazi kwa maswali yale yale matano uliyotumia kwa chuo.",
          quickCheck: [
            { objective: "O3", q: "Nini kinafanya Registered Apprenticeship kuwa tofauti na chuo cha ufundi?", options: ["Unalipwa wakati unajifunza kazini", "Haina madarasa", "Daima inagharimu zaidi", "Inafundisha kompyuta tu"], answer: 0, why: "Katika uanagenzi unapata mshahara wakati unajifunza kutoka kwa wafanyakazi wenye uzoefu." },
            { objective: "O3", q: "Mwandikishaji wa jeshi anataka usaini leo. Unafanya nini?", options: ["Unasaini ili usipoteze nafasi", "Unamwomba rafiki asaini kwa niaba yako", "Unaruka kusoma mkataba", "Unaongea na tawi zaidi ya moja, unakagua tovuti rasmi na unasoma kabla ya kusaini"], answer: 3, why: "Soma kila kitu na linganisha matawi kabla ya kujifunga kwa miaka kadhaa ya kutumikia." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kulinganisha njia zako",
        questions: [
          { objective: "O1", q: "Unapaswa kuangalia nini kwanza kabla ya kulinganisha vyuo au kazi?", options: ["Marafiki zako wanafanya nini", "Mambo unayopenda, uwezo wako, jinsi unavyojifunza na mahitaji yako", "Chuo chenye timu bora ya michezo", "Chaguo la bei rahisi zaidi tu"], answer: 1, why: "Njia bora inakufaa wewe, kwa hiyo anza kwa kujijua." },
          { objective: "O2", q: "Kipi kwa kawaida ni kweli kuhusu chuo cha jamii?", options: ["Kinagharimu zaidi sana kuliko chuo kikuu cha binafsi", "Kinatoa shahada za miaka minne tu", "Huwezi kamwe kuhamia chuo kingine", "Kiko karibu na nyumbani na kwa kawaida kinagharimu kidogo"], answer: 3, why: "Vyuo vya jamii viko karibu na kwa kawaida ni rahisi zaidi sana." },
          { objective: "O2", q: "Unataka kuanza chuo cha jamii na kuhamia baadaye. Ukague nini kwanza?", options: ["Vyuo vikuu vipi vya miaka minne vinakubali alama zake", "Orodha ya vyakula vya mgahawa", "Ukubwa wa eneo la kuegesha magari", "Hakuna; alama zote huhamishwa daima"], answer: 0, why: "Kukagua makubaliano ya kuhamisha kwanza kunazuia alama zako zisipotee bure." },
          { objective: "O3", q: "Registered Apprenticeship ni nini?", options: ["Mafunzo kazini bila malipo", "Kazi yenye malipo ambapo unajifunza ufundi stadi kwa mafunzo", "Mchezo wa video", "Shahada ya miaka minne"], answer: 1, why: "Wanagenzi wanalipwa wakati wanajifunza kutoka kwa wafanyakazi wenye uzoefu." },
          { objective: "O3", q: "Muuzaji wa chuo cha ufundi anasema lazima usaini leo. Unafanya nini?", options: ["Unasaini mara moja", "Unampa kadi yako ya benki", "Unauliza kuhusu wanaomaliza, wanaopata kazi na ithibati, na unachukua muda kuamua", "Unakopa kiasi kikubwa iwezekanavyo"], answer: 2, why: "Kulazimishwa kusaini leo ni dalili ya hatari; vyuo vizuri vinakupa ukweli na muda." }
        ]
      }
    },
    {
      name: "Sura 2: Kulipia na kupanga",
      lessons: [
        {
          objectives: ["O4"],
          title: "FAFSA na msaada wa kifedha",
          minutes: 6,
          goal: "Eleza aina za msaada wa kifedha na ujiandae kujaza FAFSA bure kwenye studentaid.gov.",
          text: [
            "Msaada wa kifedha ni pesa ya kusaidia kulipia chuo kikuu, chuo cha jamii na vyuo vingi vya ufundi. Una aina nne: ruzuku na ufadhili wa masomo (scholarships) (huzirudishi), work-study (kazi ya muda mfupi), na mikopo (unairudisha pamoja na riba).",
            "FAFSA (Free Application for Federal Student Aid) ni fomu inayofungua mlango wa msaada wa serikali kuu (federal), na majimbo mengi na vyuo vingi huitumia kwa misaada yao pia. Ni bure na unaijaza kwenye studentaid.gov. Utahitaji akaunti ya StudentAid.gov, na huenda mzazi au mchangiaji mwingine ambaye taarifa zake ziko kwenye fomu akahitaji pia.",
            "FAFSA mpya hufunguliwa kila mwaka kwa mwaka wa masomo unaofuata. Kagua studentaid.gov kwa tarehe inayofunguliwa na kagua tarehe za mwisho za jimbo lako na za vyuo; baadhi ya misaada huisha mapema, kwa hiyo jaza mapema iwezekanavyo.",
            "Usimlipe mtu yeyote kamwe ili akujazie FAFSA, na usimpe mtu yeyote kamwe jina la mtumiaji na nywila yako ya StudentAid.gov (FSA ID yako), hata mshauri wa kulipwa. Mshauri wa shule yako au ofisi ya msaada wa kifedha ya chuo inaweza kukusaidia bure."
          ],
          steps: ["Nenda studentaid.gov (kagua anwani kwa makini).", "Fungua akaunti yako ya StudentAid.gov; huenda mzazi au mchangiaji akahitaji moja pia.", "Kusanya kile fomu inachoomba, kama taarifa za kodi.", "Tafuta tarehe ya kufunguliwa FAFSA ya mwaka huu na tarehe za mwisho za jimbo lako na chuo.", "Ijaze mapema, au kwa msaada wa bure wa mshauri; usiilipe kamwe kampuni kuifanya."],
          words: [["FAFSA", "Free Application for Federal Student Aid: fomu ya bure ya kuomba msaada wa serikali kuu kwa wanafunzi."], ["Ruzuku (grant)", "pesa ya masomo ambayo huirudishi."], ["Work-study", "kazi ya muda mfupi inayosaidia kulipia masomo."], ["Mkopo", "pesa uliyokopa ambayo lazima uirudishe, kwa kawaida pamoja na riba."], ["FSA ID", "jina lako la mtumiaji na nywila ya StudentAid.gov; usiishiriki kamwe."]],
          slides: [
            { title: "Aina nne za msaada", bullets: ["Ruzuku na ufadhili wa masomo: hazirudishwi", "Work-study: kazi ya muda mfupi", "Mikopo: unairudisha pamoja na riba"] },
            { title: "FAFSA", bullets: ["Bure, kwenye studentaid.gov", "Inafungua msaada wa serikali kuu, jimbo na vyuo", "Huenda mzazi au mchangiaji akahitaji akaunti pia"] },
            { title: "Wakati", bullets: ["FAFSA mpya hufunguliwa kila mwaka", "Kagua tarehe kwenye studentaid.gov", "Jaza mapema: baadhi ya misaada huisha"] },
            { title: "Kaa salama", bullets: ["Usimlipe mtu yeyote kamwe ili akujazie", "Usishiriki FSA ID yako kamwe", "Washauri wanasaidia bure"] }
          ],
          sources: [
            { name: "Federal Student Aid: Apply for aid with the FAFSA", url: "https://studentaid.gov/h/apply-for-aid/fafsa" },
            { name: "FTC: How to avoid scholarship and financial aid scams", url: "https://consumer.ftc.gov/articles/how-avoid-scholarship-and-financial-aid-scams" }
          ],
          tryIt: "Nenda studentaid.gov na utafute tarehe ya kufunguliwa FAFSA ya mwaka huu. Kisha tafuta tarehe ya mwisho ya msaada wa kifedha ya chuo kimoja na ya jimbo lako. Andika tarehe zote mbili, na uandike nani atakusaidia kujaza fomu.",
          youCanNow: "kueleza ruzuku, ufadhili wa masomo, work-study na mikopo, na kujiandaa kujaza FAFSA ya bure kwa usalama na kwa wakati.",
          quickCheck: [
            { objective: "O4", q: "Ni aina zipi za msaada ambazo huzirudishi?", options: ["Mikopo", "Ruzuku na ufadhili wa masomo", "Kadi za mkopo", "Mikopo ya binafsi"], answer: 1, why: "Ruzuku na ufadhili wa masomo ni pesa ya bure; mikopo hurudishwa pamoja na riba." },
            { objective: "O4", q: "Tovuti inayoishia na .com inajitolea kukujazia FAFSA kwa ada. Unafanya nini?", options: ["Unalipa; inaokoa muda", "Unawapa FSA ID yako", "Unajaza bure kwenye studentaid.gov au kwa msaada wa mshauri", "Unaacha FAFSA"], answer: 2, why: "FAFSA ni bure kwenye studentaid.gov; usilipe kamwe ili kuijaza wala usishiriki FSA ID yako." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kuepuka mitego ya madeni na ulaghai",
          minutes: 5,
          goal: "Linganisha ofa za misaada na utambue dalili za mitego ya madeni na ulaghai.",
          text: [
            "Deni si baya kila wakati, lakini deni kubwa mno linaweza kukufuata kwa miaka. Kopa tu kile unachohitaji baada ya ruzuku na ufadhili wa masomo. Consumer Financial Protection Bureau (ofisi ya serikali ya Marekani inayolinda wateja wa huduma za fedha) inasema tumia mikopo ya wanafunzi ya serikali kuu kabla ya ile ya binafsi, kwa sababu mikopo ya serikali kuu kwa kawaida ina kinga zaidi.",
            "Unapopata ofa za misaada, kagua kila mstari: je, ni ruzuku, ufadhili wa masomo, work-study au mkopo? Baadhi ya ofa huvichanganya ili mikopo ionekane kama pesa ya bure. Linganisha gharama inayobaki katika kila chuo, si ukubwa wa ofa tu.",
            "Dalili za ulaghai, kutoka Federal Trade Commission (FTC): ufadhili wa masomo \"uliohakikishwa\"; ada ya kuomba au ya kushikilia ufadhili; kuomba namba yako ya benki au kadi; kukuambia umeshinda shindano ambalo hukuwahi kuingia; na kukulazimisha ulipe sasa hivi. Ufadhili halisi wa masomo haukutozi ada ya kuomba.",
            "Jihadhari na vyuo vinavyokulazimisha kujiandikisha na kukopa haraka, vinavyoahidi kazi visivyoweza kuthibitisha, au visivyokuambia idadi yao ya wanaohitimu na wanaopata kazi. Ukitapeliwa, ripoti kwenye ReportFraud.ftc.gov."
          ],
          steps: ["Panga kila ofa ya msaada kuwa ruzuku, ufadhili wa masomo, work-study na mikopo.", "Hesabu kiasi kinachobaki kulipa katika kila chuo.", "Tumia mikopo ya serikali kuu kabla ya mikopo ya binafsi, na kopa tu kile unachohitaji.", "Kagua kila ofa ya ufadhili wa masomo dhidi ya dalili za ulaghai.", "Ripoti ulaghai kwenye ReportFraud.ftc.gov."],
          words: [["Riba", "pesa ya ziada unayolipa kwa sababu ya kukopa."], ["Mkopo wa mwanafunzi wa serikali kuu", "mkopo kutoka serikali ya Marekani wenye kinga zilizowekwa."], ["Mkopo wa binafsi", "mkopo kutoka benki au kampuni, mara nyingi wenye kinga chache."], ["Mtego wa deni", "deni linalokua haraka kuliko unavyoweza kulilipa."]],
          slides: [
            { title: "Kopa kwa makini", bullets: ["Kile tu unachohitaji baada ya pesa ya bure", "Mikopo ya serikali kuu kabla ya ya binafsi"] },
            { title: "Soma kila ofa ya msaada", bullets: ["Ruzuku, ufadhili, work-study au mkopo?", "Mikopo inaweza kuonekana kama pesa ya bure", "Linganisha kiasi kinachobaki kulipa"] },
            { title: "Dalili za ulaghai", bullets: ["Ufadhili \"uliohakikishwa\" au ada ya kuomba", "Wanaomba namba yako ya benki au kadi", "Umeshinda shindano ambalo hukuingia; lipa sasa"] },
            { title: "Vyuo vinavyolazimisha", bullets: ["Saini na kopa haraka", "Ahadi za kazi wasizoweza kuthibitisha", "Ripoti ulaghai kwenye ReportFraud.ftc.gov"] }
          ],
          sources: [
            { name: "Consumer Financial Protection Bureau: Student loans", url: "https://www.consumerfinance.gov/consumer-tools/student-loans/" },
            { name: "FTC: How to avoid scholarship and financial aid scams", url: "https://consumer.ftc.gov/articles/how-avoid-scholarship-and-financial-aid-scams" }
          ],
          tryIt: "Angalia ofa hii ya mfano: ruzuku ya $3,000, ufadhili wa masomo wa $2,000, work-study ya $2,500, mkopo wa $5,500, kwa chuo kinachogharimu $14,000 kwa mwaka. Andika kiasi kilicho pesa ya bure, kiasi lazima ukifanyie kazi au ukirudishe, na kiasi kinachobaki bado kulipa. (Bure: $5,000. Kufanyia kazi: $2,500. Mkopo: $5,500. Kinachobaki: $1,000.)",
          youCanNow: "kusoma ofa ya msaada mstari kwa mstari, kukopa kwa makini, na kutambua ulaghai wa msaada wa kifedha na vyuo vinavyolazimisha.",
          quickCheck: [
            { objective: "O5", q: "Kwa nini usome kila mstari wa ofa ya msaada?", options: ["Baadhi ya ofa huchanganya mikopo ili ionekane kama pesa ya bure", "Ofa za misaada daima ni ruzuku tupu", "Ili kupata nembo ya chuo", "Mistari haina maana"], answer: 0, why: "Kupanga ruzuku, ufadhili wa masomo, work-study na mikopo kunaonyesha utakacholipa kweli." },
            { objective: "O5", q: "Barua pepe inasema umeshinda ufadhili wa masomo ambao hukuwahi kuomba na inaomba namba yako ya benki. Hiyo ni nini?", options: ["Tuzo halisi", "Dalili ya ulaghai; usitoe namba yako ya benki", "Fomu ya kawaida ya benki", "Hatua ya FAFSA"], answer: 1, why: "Mashindano ambayo hukuingia na maombi ya namba za benki ni dalili za ulaghai." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kuandika mpango wako wa miaka miwili",
          minutes: 6,
          goal: "Andika mpango wa miaka miwili wenye njia kuu, mpango mbadala, pesa na hatua muhimu.",
          text: [
            "Mpango unageuza chaguo lako kuwa hatua. Miaka miwili ni muda wa kutosha kupiga hatua halisi, na ni mfupi kiasi cha kuuona vizuri.",
            "Chagua njia kuu na mpango mbadala. Kwa mfano: njia kuu, uanagenzi wa fundi umeme; mpango mbadala, cheti cha mwaka mmoja katika chuo cha jamii huku ukifanya kazi. Mpango mbadala unakufanya uendelee kusonga mbele kama njia kuu imecheleweshwa.",
            "Gawanya miaka miwili katika hatua za miezi sita, kila moja na hatua muhimu moja au mbili: kuomba, kufanya mtihani, kumaliza darasa, kuweka akiba kiasi fulani, kupata kazi ya kwanza katika fani. Andika jinsi utakavyolipia kila hatua na nani atakusaidia, kama mshauri, mzazi, kocha, mlezi au bosi.",
            "Angalia mpango wako kila baada ya miezi michache. Mipango hubadilika, na hiyo ni sawa. Kuusasisha ni sehemu ya ujuzi huu."
          ],
          steps: ["Andika njia yako kuu na mpango mbadala.", "Nakili ulinganisho wako wa maswali matano kwa njia zote mbili.", "Gawanya miaka miwili katika hatua nne za miezi sita, kila moja na hatua muhimu moja au mbili.", "Andika jinsi utakavyolipia kila hatua.", "Orodhesha watu watakaokusaidia.", "Weka tarehe ya kuupitia mpango kila baada ya miezi michache."],
          words: [["Hatua muhimu", "hatua iliyo wazi inayoonyesha maendeleo, kama kumaliza darasa."], ["Mpango mbadala", "njia ya pili unayoweza kutumia kama ya kwanza imecheleweshwa."]],
          slides: [
            { title: "Kwa nini miaka miwili", bullets: ["Muda wa kutosha kwa maendeleo halisi", "Mfupi kiasi cha kuuona vizuri"] },
            { title: "Njia kuu na mpango mbadala", bullets: ["Kuu: njia unayoitaka zaidi", "Mbadala: inakuweka ukisonga mbele ikichelewa"] },
            { title: "Hatua za miezi sita", bullets: ["Hatua muhimu moja au mbili kila moja", "Jinsi utakavyolipa", "Nani atakusaidia"] },
            { title: "Uweke hai", bullets: ["Upitie kila baada ya miezi michache", "Ubadilishe maisha yanapobadilika"] }
          ],
          tryIt: "Kazi ya mwisho: andika mpango wako wa miaka miwili wa ukurasa mmoja wenye njia kuu na mpango mbadala, ulinganisho wako wa maswali matano wa angalau njia mbili, jinsi utakavyolipa, hatua zako muhimu za kila miezi sita na watu watakaokusaidia. Mwonyeshe mshauri au mtu mzima unayemwamini.",
          youCanNow: "kuandika mpango wa miaka miwili wenye njia kuu, mpango mbadala, hatua muhimu, njia ya kulipa na watu wa kukusaidia, na kuusasisha maisha yanapobadilika.",
          quickCheck: [
            { objective: "O6", q: "Hatua muhimu katika mpango wa miaka miwili ni nini?", options: ["Tamanio lolote tu", "Njia yako mbadala", "Orodha ya watu", "Hatua iliyo wazi yenye wakati, kama kumaliza darasa kufikia Juni"], answer: 3, why: "Hatua muhimu zinagawanya mpango katika hatua za miezi sita unazoweza kukagua." },
            { objective: "O6", q: "Njia yako kuu imecheleweshwa kwa miezi sita. Mpango mzuri unakusaidia kufanya nini?", options: ["Kukata tamaa", "Kusubiri bila kufanya chochote", "Kuhamia njia yako mbadala na kuendelea kupiga hatua", "Kuanza upya bila mpango"], answer: 2, why: "Mpango mbadala unakufanya uendelee kusonga mbele kama njia kuu imecheleweshwa." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kulipia na kupanga",
        questions: [
          { objective: "O4", q: "Ni aina gani ya msaada lazima uirudishe?", options: ["Ruzuku", "Ufadhili wa masomo", "Malipo ya work-study", "Mkopo"], answer: 3, why: "Mikopo lazima irudishwe pamoja na riba; ruzuku na ufadhili wa masomo hazirudishwi." },
          { objective: "O4", q: "Inagharimu kiasi gani kujaza FAFSA kwenye studentaid.gov?", options: ["Hakuna; ni bure", "$25", "$100", "Inategemea chuo chako"], answer: 0, why: "FAFSA ni bure; usimlipe mtu yeyote kamwe ili akujazie." },
          { objective: "O4", q: "Kampuni inajitolea kukujazia FAFSA ukiwapa FSA ID yako. Unafanya nini?", options: ["Unawapa", "Unakataa na kumwomba mshauri wa shule msaada wa bure", "Unawatumia kwa ujumbe mfupi", "Unaiweka mtandaoni"], answer: 1, why: "Usishiriki FSA ID yako kamwe; washauri wanasaidia bure." },
          { objective: "O5", q: "Kipi ni dalili ya ulaghai wa ufadhili wa masomo?", options: ["Fomu ya kuomba ya bure", "Swali la insha", "Tuzo \"iliyohakikishwa\" ukilipa ada", "Tarehe ya mwisho"], answer: 2, why: "Ufadhili halisi wa masomo hautozi ada wala kuhakikisha tuzo." },
          { objective: "O6", q: "Kwa nini mpango wa miaka miwili unahitaji mpango mbadala?", options: ["Ili uendelee kusonga mbele kama njia kuu imecheleweshwa", "Kwa sababu sheria inautaka", "Ili kuwavutia marafiki", "Hauhitaji"], answer: 0, why: "Mpango mbadala unakufanya uendelee kupiga hatua mipango inapobadilika." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kuchagua Chuo, Ufundi au Kazi Baada ya Shule",
    questions: [
      { objective: "O1", q: "Ni njia ipi iliyo sahihi kwa kila mtu baada ya sekondari?", options: ["Chuo kikuu cha miaka minne", "Hakuna njia moja tu iliyo sahihi; inategemea wewe", "Jeshi", "Kuanza kazi mara moja"], answer: 1, why: "Njia bora inafaa mambo unayopenda, uwezo wako na mahitaji yako." },
      { objective: "O1", q: "Unajifunza vizuri kwa kufanya kazi kwa mikono. Ni njia ipi inaweza kukufaa?", options: ["Mihadhara ya mtandaoni tu", "Hakuna inayofaa", "Uanagenzi katika ufundi", "Kusoma vitabu siku nzima"], answer: 2, why: "Uanagenzi unafundisha ujuzi kupitia kazi ya mikono." },
      { objective: "O1", q: "Unapaswa kutumiaje msaidizi wa AI unapochagua njia?", options: ["Umwache akuamulie", "Uamini kila namba anayokupa", "Usimtumie kamwe", "Umtumie kubuni mawazo, kisha ukague ukweli na mshauri na tovuti rasmi"], answer: 3, why: "AI inaweza kupendekeza mawazo, lakini ukweli unahitaji kukaguliwa." },
      { objective: "O2", q: "Stashahada ya associate kwa kawaida inachukua kama:", options: ["Miaka miwili", "Miezi sita", "Miaka minane", "Wiki moja"], answer: 0, why: "Stashahada za associate kwa kawaida zinachukua kama miaka miwili." },
      { objective: "O2", q: "Bei halisi (net price) ni nini?", options: ["Gharama ya kompyuta mpakato", "Gharama ya chuo baada ya ruzuku na ufadhili wa masomo", "Gharama ya darasa moja", "Kodi"], answer: 1, why: "Bei halisi ni gharama baada ya msaada wa bure kuondolewa." },
      { objective: "O2", q: "Ni kazi zipi kwa kawaida zinahitaji shahada ya kwanza (bachelor's)?", options: ["Hakuna", "Michezo tu", "Ualimu na uhandisi", "Kuuza dukani tu"], answer: 2, why: "Ualimu na uhandisi kwa kawaida zinahitaji shahada ya kwanza." },
      { objective: "O2", q: "Lipi ni mojawapo ya maswali matano ya kuuliza kuhusu kila njia?", options: ["Je, marafiki zangu wanaenda huko?", "Je, nembo ni nzuri?", "Je, iko kwenye TV?", "Itachukua muda gani?"], answer: 3, why: "Muda wa kumaliza ni mojawapo ya maswali matano ya kulinganisha." },
      { objective: "O3", q: "Unaweza kutafuta uanagenzi wapi?", options: ["Apprenticeship Job Finder ya apprenticeship.gov", "Chapisho lolote kwenye mitandao ya kijamii", "Ujumbe kutoka kwa mtu usiyemjua", "Hakuna mahali"], answer: 0, why: "Apprenticeship.gov ina kitafuta kazi rasmi." },
      { objective: "O3", q: "Kabla ya kusaini na chuo cha ufundi, uliza:", options: ["Jengo lina rangi gani", "Ni wanafunzi wangapi wanamaliza na kupata kazi katika fani", "Kama kina bwawa la kuogelea", "Hakuna kitu"], answer: 1, why: "Idadi ya wanaomaliza na wanaopata kazi inaonyesha kama chuo kinatimiza ahadi." },
      { objective: "O3", q: "ASVAB ni:", options: ["Mkopo wa chuo", "Chuo cha ufundi", "Mtihani unaosaidia kuamua kazi zipi za jeshi unazostahili", "Fomu ya kodi"], answer: 2, why: "ASVAB inatumiwa na jeshi kuwapangia watu kazi zinazowafaa." },
      { objective: "O3", q: "Hatua ya busara kama unafikiria jeshi ni:", options: ["Kusaini karatasi ya kwanza unayoiona", "Kuruka kusoma mkataba", "Kuongea na rafiki mmoja tu", "Kuongea na waandikishaji kutoka tawi zaidi ya moja na kusoma kabla ya kusaini"], answer: 3, why: "Kulinganisha matawi na kusoma kwa makini kunakulinda." },
      { objective: "O3", q: "Kuanza kazi moja kwa moja kunaweza kuwa njia nzuri wakati mwajiri:", options: ["Anatoa mafunzo na kusaidia kulipia masomo", "Hamfundishi mtu yeyote kamwe", "Analipa kwa kadi za zawadi", "Hana nafasi za kupanda cheo baadaye"], answer: 0, why: "Mafunzo, kupandishwa cheo na msaada wa ada hufanya kazi kuwa njia halisi." },
      { objective: "O4", q: "Ni msaada upi ulio kazi ya muda mfupi inayosaidia kulipia masomo?", options: ["Ruzuku", "Work-study", "Mkopo", "Ufadhili wa masomo"], answer: 1, why: "Work-study inakulipa kwa kazi ya muda mfupi." },
      { objective: "O4", q: "Unajaza FAFSA wapi?", options: ["fafsa-help.win", "Tovuti ya kulipia", "studentaid.gov", "App ya benki yako"], answer: 2, why: "FAFSA rasmi na ya bure iko kwenye studentaid.gov." },
      { objective: "O4", q: "Kwa nini ujaze FAFSA mapema iwezekanavyo?", options: ["Fomu za kuchelewa hupata pesa zaidi", "Inafunguliwa siku moja tu", "Hakuna sababu", "Baadhi ya misaada huisha, na majimbo na vyuo vina tarehe za mwisho"], answer: 3, why: "Kujaza mapema kunakusaidia kupata msaada kabla haujaisha." },
      { objective: "O5", q: "Ni mikopo ipi kwa kawaida unapaswa kutumia kwanza?", options: ["Mikopo ya wanafunzi ya serikali kuu", "Mikopo ya binafsi", "Kadi za mkopo", "Mikopo ya siku ya mshahara (payday loans)"], answer: 0, why: "Mikopo ya serikali kuu kwa kawaida ina kinga zaidi kuliko ya binafsi." },
      { objective: "O5", q: "Ofa ya msaada inaorodhesha mkopo wa $5,500 pamoja na ruzuku. Mkopo huo ni:", options: ["Pesa ya bure", "Pesa lazima uirudishe", "Ufadhili wa masomo", "Zawadi"], answer: 1, why: "Mikopo lazima irudishwe hata inapoorodheshwa kando ya ruzuku." },
      { objective: "O5", q: "Unaripoti ulaghai wa msaada wa kifedha wapi?", options: ["Mgahawa wa chuo", "Maoni kwenye mitandao ya kijamii", "ReportFraud.ftc.gov", "Hakuna mahali"], answer: 2, why: "FTC inakusanya ripoti za ulaghai kwenye ReportFraud.ftc.gov." },
      { objective: "O6", q: "Ipi ni hatua muhimu nzuri katika mpango wa miaka miwili?", options: ["Kuwa maarufu", "Kujisikia vizuri siku moja", "Kuwa tajiri", "Kumaliza darasa la kwanza la cheti kufikia Juni"], answer: 3, why: "Hatua muhimu ni hatua iliyo wazi unayoweza kuikagua." },
      { objective: "O6", q: "Unapaswa kuangalia mpango wako mara ngapi?", options: ["Kila baada ya miezi michache", "Kamwe", "Mara moja tu", "Ukishindwa tu"], answer: 0, why: "Kuupitia mara kwa mara kunakuruhusu kuusasisha maisha yanapobadilika." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 1, 4, 6, 7, 9, 12, 13, 15, 18] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Njia kuu na mpango mbadala", objective: "O1", notYet: "Njia moja tu, au njia haihusiani na mambo anayopenda mwanafunzi na mahitaji yake.", meets: "Njia kuu na mpango mbadala vinavyofaa mambo anayopenda mwanafunzi, uwezo wake na mahitaji yake ya pesa.", exceeds: "Anaeleza kwa nini mpango mbadala bado unamsogeza kuelekea lengo lake." },
      { name: "Ulinganisho wa maswali matano", objective: "O2", notYet: "Chini ya njia mbili zimelinganishwa, au maswali yamerukwa.", meets: "Angalau njia mbili zimelinganishwa kwa gharama, muda, malipo wakati wa kujifunza, kazi zinazowezekana na unachohitaji ili kukubaliwa.", exceeds: "Anatumia bei halisi au malipo ya uanagenzi kutoka vyanzo rasmi na anaandika kila jibu lilitoka wapi." },
      { name: "Jinsi ya kulipa", objective: "O4", notYet: "Hakuna mpango wa pesa, au unategemea mikopo isiyojulikana.", meets: "Anasema jinsi kila hatua itakavyolipiwa, pamoja na tarehe ya FAFSA na tarehe za mwisho kama msaada unahitajika.", exceeds: "Anaonyesha ruzuku na ufadhili wa masomo kwanza, mikopo mwisho, na kiasi kinachobaki kulipa." },
      { name: "Salama dhidi ya ulaghai", objective: "O5", notYet: "Anapanga kulipia msaada wa FAFSA au ufadhili wa masomo \"uliohakikishwa\".", meets: "Hakuna msaada wa FAFSA wa kulipia, hakuna FSA ID iliyoshirikiwa, na hakuna ofa zenye dalili za ulaghai.", exceeds: "Anataja mahali pa kuripoti ulaghai na nani wa kumwomba msaada wa bure." },
      { name: "Hatua muhimu na wasaidizi", objective: "O6", notYet: "Hakuna hatua za miezi sita au hakuna wasaidizi waliotajwa.", meets: "Hatua nne za miezi sita zenye hatua muhimu, watu watakaosaidia, na tarehe ya kuupitia.", exceeds: "Umeonyeshwa kwa mshauri au mtu mzima anayeaminika, na maoni yao yameandikwa." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaojaza FAFSA kwa wakati au wanaoomba uanagenzi au programu ndani ya mwaka wa masomo",
      "Wanafunzi waliojiandikisha chuo, programu ya ufundi, uanagenzi, jeshi au kazi yenye mafunzo miezi sita baada ya kozi",
      "Wanafunzi wanaoripoti kuepuka ulaghai wa ufadhili wa masomo au msaada katika utafiti wa kufuatilia"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu, au kompyuta ya shule au maktaba yenye intaneti",
      "Tovuti rasmi: studentaid.gov, apprenticeship.gov na vikokotoo vya bei halisi vya vyuo",
      "Karatasi au hati ya kompyuta kwa jedwali la ulinganisho na mpango wa miaka miwili",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Shirikiana na mshauri wa shule na mwalike apitie mipango ya wanafunzi.",
      "Waambie wanafunzi watafute tarehe ya kufunguliwa FAFSA ya mwaka huu na tarehe za mwisho darasani, kwa sababu hubadilika kila mwaka.",
      "Usiwaombe wanafunzi kamwe kushiriki kipato cha familia, FSA ID au taarifa za benki mbele ya kikundi; fanyeni mazoezi kwa ofa ya msaada ya mfano ya kozi.",
      "Alika wazungumzaji kutoka chuo cha jamii, programu ya uanagenzi na mwajiri wa eneo lako ili njia zote zionyeshwe kwa haki.",
      "Pima mpango wa miaka miwili kwa rubriki na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
