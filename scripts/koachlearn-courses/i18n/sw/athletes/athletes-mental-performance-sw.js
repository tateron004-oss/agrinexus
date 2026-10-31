"use strict";

// Koach Learn course (Swahili translation of athletes/athletes-mental-performance.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.
// General education only: points to coaches, athletic trainers, school counselors, licensed mental health professionals and the 988 Lifeline. No therapy or diagnosis.

module.exports = {
  id: "athletes-mental-performance-sw",
  lang: "sw",
  translationOf: "athletes-mental-performance",
  category: "Athletes",
  name: "Utendaji wa Kiakili na Umakini",
  skills: "Kupumua kwa mraba ili kutuliza wasiwasi, Kuandika maneno ya ishara na maneno ya kujiambia, Kujenga utaratibu wa kabla ya mchezo, Kujirudisha baada ya kosa, Kujua lini na wapi pa kupata msaada",
  outcome: "kujenga na kutumia utaratibu ulioandikwa wa kabla ya mchezo wenye zoezi la kupumua, maneno ya ishara na mpango wa kujirudisha baada ya kosa, na kujua hasa nani wa kumwendea wakati msongo ni zaidi ya wasiwasi wa kawaida.",
  about: [
    "Kozi hii ni kwa wanamichezo wanaopata wasiwasi, wanaopoteza umakini au wanaoshindwa kurudi haraka baada ya makosa, na kwa makocha wanaotaka kufundisha ujuzi rahisi wa kiakili. Huu ni ujuzi wa jumla wa utendaji, si tiba.",
    "Utafanya mazoezi ya ujuzi unaotumiwa na wanamichezo wa kila ngazi: kupumua polepole, maneno mazuri ya kujiambia, taratibu na njia za haraka za kujirudisha. Utatumia msaidizi wa AI kukusaidia kuandika utaratibu wako, na utajifunza wakati gani wa kuongea na mtu halisi.",
    "Kila somo linachukua kama dakika tano na lina kazi ya \"Jaribu sasa\". Kuna jaribio la maarifa mwishoni mwa kila sura, na mtihani wa maswali 20 mwishoni mwa kozi. Ukijisikia hauko salama au huna tumaini, piga simu au tuma ujumbe kwa 988 nchini Marekani, au ongea na mtu mzima unayemwamini mara moja."
  ],
  finalTask: "Andika kadi ya ukurasa mmoja ya utaratibu wa kabla ya mchezo: ratiba ya muda kabla ya mchezo wako, zoezi la kupumua kwa mraba, maneno matatu ya ishara, na hatua tatu za kujirudisha baada ya kosa. Tumia msaidizi wa AI kukusaidia kuchagua maneno, ifanyie mazoezi katika vipindi viwili vya mazoezi, kisha mwonyeshe kocha wako na uirekebishe.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wanamichezo wa sekondari, chuo na vilabu wanaopata wasiwasi, wanaopoteza umakini au wanaoshindwa kurudi haraka baada ya makosa, na makocha wanaotaka kufundisha ujuzi rahisi wa kiakili.",
    startingPoint: "Wanashindana mara kwa mara na wanapata wasiwasi siku ya mchezo. Wengi hawana utaratibu ulioandikwa, wanajiambia maneno hasi bila kutambua, na hawana uhakika wamwendee nani wakati msongo ni zaidi ya wasiwasi wa kawaida.",
    gap: "Wasiwasi usiodhibitiwa na kuendelea kuwaza makosa kunapunguza utendaji wa wanamichezo, na msongo mkubwa unaweza kupita bila kutambuliwa. Ujuzi rahisi unaofanyiwa mazoezi unawasaidia kufanya vizuri chini ya shinikizo, na kujua lini na wapi pa kupata msaada halisi kunaweza kulinda afya na maisha yao.",
    constraints: [
      "Lugha rahisi, kama kiwango cha kusoma cha darasa la 7",
      "Ujuzi wa jumla wa utendaji tu, si tiba wala mbadala wa mshauri",
      "Simu au kompyuta yenye msaidizi wa AI wa bure, au karatasi",
      "Kama dakika 60 za masomo pamoja na mazoezi katika vipindi viwili vya mazoezi ya timu",
      "Afya ya akili ni jambo la faragha na nyeti; huduma za dharura (988, 911) ni za Marekani"
    ],
    prerequisites: "Hakuna"
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukikumbuka mchezo mkubwa wa hivi karibuni", action: "kueleza dalili zako za mwilini na mawazo ya wasiwasi na yanapoanza", standard: "ukitaja angalau dalili mbili za mwilini na wazo moja" },
    { id: "O2", condition: "Kabla au wakati wa mazoezi", action: "kuonyesha kupumua kwa mraba kwa raundi nne", standard: "ukitumia hesabu sawa za nne, au kupumua polepole bila kusimamisha pumzi kama kuisimamisha si rahisi kwako" },
    { id: "O3", condition: "Ukipewa wazo hasi unalolipata mara nyingi", action: "kuandika maneno matatu ya ishara yanayouambia mwili wako cha kufanya", standard: "kila neno la ishara likiwa na maneno moja hadi matatu na kuhusu jambo unalolidhibiti" },
    { id: "O4", condition: "Ukitumia ratiba yako ya siku ya mchezo", action: "kuandika utaratibu wa kabla ya mchezo kuanzia usiku uliotangulia hadi filimbi ya kwanza", standard: "ukiwa na hatua unazozidhibiti tu, zoezi la kupumua, maneno yako ya ishara, na muda uliokaguliwa na kocha wako" },
    { id: "O5", condition: "Baada ya kosa wakati wa mchezo au mazoezi", action: "kutumia hatua tatu za kujirudisha: achilia, tulia na rudisha umakini", standard: "ukimaliza hatua zote tatu kabla ya mchezo unaofuata na kuacha kuchambua kosa hadi baada ya mchezo" },
    { id: "O6", condition: "Ukipewa dalili kwamba msongo ni zaidi ya wasiwasi wa kawaida", action: "kutambua dalili za hatari na kutaja nani wa kuwasiliana naye, pamoja na 988 na 911", standard: "ukitaja angalau watu wawili unaowaamini na namba sahihi kwa hali ya hatari na kwa dharura" }
  ],
  chapters: [
    {
      name: "Sura 1: Utulivu na umakini",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kuelewa wasiwasi wa siku ya mchezo",
          minutes: 4,
          goal: "Tambua dalili zako za wasiwasi na uzione kama nguvu unayoweza kuidhibiti.",
          text: [
            "Kabla ya mchezo mkubwa, moyo wako unadunda haraka, mikono yako inaweza kutoa jasho na tumbo lako linaweza kuhisi kama kuna vipepeo. Huu ni mwili wako ukijiandaa kufanya kazi. Kidogo kinasaidia; kingi mno kinaweza kukufanya ukakamae au uharakishe mambo.",
            "Kila mtu anahisi hivi, hata wanamichezo wa kulipwa. Ujuzi si kuufanya wasiwasi upotee, bali ni kuutambua na kuushusha hadi kiwango kinachokusaidia.",
            "Anza kwa kutambua. Unahisi nini mwilini, mawazo gani yanakuja, na yanaanza lini? Kuyaandika kunarahisisha kuyadhibiti."
          ],
          words: [["Wasiwasi", "jinsi mwili unavyoitikia kwa kawaida kabla ya jambo muhimu: moyo kudunda haraka, mikono yenye jasho, vipepeo tumboni."], ["Kiwango cha msisimko", "jinsi unavyohisi umechangamka, kuanzia mtulivu sana hadi mwenye hamasa kupita kiasi."]],
          slides: [
            { title: "Wasiwasi ni jambo la kawaida", bullets: ["Moyo kudunda haraka, mikono yenye jasho, vipepeo tumboni", "Mwili wako unajiandaa", "Wanamichezo wa kulipwa wanahisi pia"] },
            { title: "Ujuzi wenyewe", bullets: ["Si kukosa wasiwasi kabisa", "Kiwango kinachokufaa wewe"] },
            { title: "Anza kwa kutambua", bullets: ["Ninahisi nini mwilini?", "Mawazo gani yanakuja?", "Yanaanza lini?"] }
          ],
          tryIt: "Fikiria mchezo wako mkubwa wa mwisho. Andika dalili tatu za mwilini na mawazo mawili uliyokuwa nayo kabla haujaanza, na yalianza lini.",
          youCanNow: "kutambua dalili zako za wasiwasi na kuzieleza.",
          quickCheck: [
            { objective: "O1", q: "Kuhisi vipepeo tumboni kabla ya mchezo ni nini?", options: ["Ishara kwamba hupaswi kucheza", "Ishara kwamba wewe ni dhaifu", "Mwili wako ukijiandaa kufanya kazi", "Ishara kwamba unaumwa"], answer: 2, why: "Dalili hizi za mwilini ni mwili wako ukijiandaa; ujuzi ni kuzidhibiti." },
            { objective: "O1", q: "Unataka kuanza kudhibiti wasiwasi wako. Unafanya nini kwanza?", options: ["Kuandika unachohisi, unachowaza na kinapoanza", "Kujaribu kuufanya wasiwasi upotee", "Kuupuuza kabisa", "Kuruka mazoezi ya kupasha mwili"], answer: 0, why: "Kutambua na kuandika kunarahisisha kudhibiti wasiwasi." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kupumua kwa mraba: kutulia kwa sekunde 60",
          minutes: 5,
          goal: "Tumia kupumua kwa mraba kutuliza mwili wako kwa kama dakika moja.",
          text: [
            "Kupumua polepole ni mojawapo ya njia za haraka zaidi za kutuliza mwili. Kupumua kwa mraba ni rahisi: vuta pumzi ukihesabu hadi nne, ishikilie kwa nne, toa pumzi kwa nne, shikilia kwa nne. Rudia mara nne.",
            "Unaweza kufanya hivyo ukiwa benchi, kwenye mstari wa kurusha bure kwa hesabu fupi zaidi, kwenye chumba cha kubadilishia nguo au kabla ya mtihani. Lifanyie mazoezi ukiwa mtulivu ili lifanye kazi ukiwa na wasiwasi.",
            "Kama kushikilia pumzi si rahisi kwako, ruka kushikilia na vuta pumzi polepole tu, kisha itoe polepole zaidi. Acha ukihisi kizunguzungu."
          ],
          steps: ["Vuta pumzi kupitia pua ukihesabu 4.", "Shikilia kwa 4.", "Toa pumzi polepole kwa 4.", "Shikilia kwa 4.", "Rudia raundi 4."],
          words: [["Kupumua kwa mraba", "kuvuta pumzi, kuishikilia, kuitoa na kushikilia kwa hesabu sawa, kama pande nne za mraba (box breathing)."]],
          slides: [
            { title: "Kupumua kwa mraba", bullets: ["Vuta 4", "Shikilia 4", "Toa 4", "Shikilia 4"] },
            { title: "Mahali pa kulitumia", bullets: ["Benchi au chumba cha kubadilishia nguo", "Kabla ya kurusha bure au kupiga serve", "Kabla ya mtihani"] },
            { title: "Vidokezo", bullets: ["Fanya mazoezi ukiwa mtulivu", "Ruka kushikilia kama si rahisi", "Acha ukihisi kizunguzungu"] }
          ],
          tryIt: "Fanya raundi nne za kupumua kwa mraba sasa hivi. Pima jinsi ulivyokakamaa kutoka 1 hadi 10 kabla na baada.",
          youCanNow: "kutumia kupumua kwa mraba kutuliza mwili wako kwa kama dakika moja.",
          quickCheck: [
            { objective: "O2", q: "Somo linapendekeza raundi ngapi za kupumua kwa mraba?", options: ["Moja", "Kumi", "Nne", "Ishirini"], answer: 2, why: "Vuta 4, shikilia 4, toa 4, shikilia 4, na rudia mara nne." },
            { objective: "O2", q: "Unahisi kizunguzungu wakati wa kupumua kwa mraba. Unafanya nini?", options: ["Kushikilia pumzi muda mrefu zaidi", "Kuacha", "Kupumua haraka zaidi", "Kuendelea kwa raundi kumi zaidi"], answer: 1, why: "Somo linasema acha ukihisi kizunguzungu." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Maneno ya ishara na maneno ya kujiambia",
          minutes: 5,
          goal: "Andika maneno matatu ya ishara na ugeuze maneno hasi ya kujiambia kuwa maelekezo yanayofaa.",
          text: [
            "Maneno ya kujiambia ni yale unayojiambia kichwani. \"Usikose\" inaweka picha ya kukosa akilini mwako. \"Achia kwa ulaini, malizia\" inauambia mwili wako cha kufanya.",
            "Maneno ya ishara ni neno moja hadi matatu yanayoelekeza umakini wako: \"macho juu\", \"miguu haraka\", \"mchezo ujao\", \"imara na wima\". Chagua maneno kuhusu unachokidhibiti, si kuhusu matokeo.",
            "Msaidizi wa AI anaweza kusaidia. Jaribu: \"Mimi ni mpiga serve wa voliboli. Nikiwa na wasiwasi nawaza 'usipige serve kwenye neti'. Nipe maneno matano mafupi ya ishara yanayoniambia cha kufanya badala yake.\" Chagua yale yanayokufaa wewe."
          ],
          steps: ["Andika wazo hasi unalolipata mara nyingi.", "Jiulize: nataka mwili wangu ufanye nini badala yake?", "Ligeuze kuwa maneno 1-3.", "Chagua maneno matatu ya ishara na ufanye mazoezi ya kuyasema."],
          words: [["Maneno ya kujiambia", "maneno unayojiambia kichwani (self-talk)."], ["Neno la ishara", "neno au kifungu kifupi kinachoelekeza umakini wako kwa cha kufanya (cue word)."]],
          slides: [
            { title: "Maneno ya kujiambia yanaongoza vitendo", bullets: ["\"Usikose\" -> picha ya kukosa", "\"Achia kwa ulaini\" -> inakuambia cha kufanya"] },
            { title: "Maneno mazuri ya ishara", bullets: ["Maneno 1-3", "Kuhusu unachokidhibiti", "\"Macho juu\" \"Miguu haraka\" \"Mchezo ujao\""] },
            { title: "AI inaweza kusaidia", bullets: ["Ipe wazo lako hasi", "Omba maneno 5 mafupi ya \"fanya hivi\"", "Baki na yale yanayokufaa"] }
          ],
          tryIt: "Andika wazo moja hasi unalolipata kwenye michezo. Tumia msaidizi wa AI kupata maneno matano ya ishara yanayokuambia cha kufanya badala yake. Chagua matatu bora.",
          youCanNow: "kuandika maneno ya ishara na kugeuza maneno hasi ya kujiambia kuwa maelekezo yanayofaa.",
          quickCheck: [
            { objective: "O3", q: "Neno la ishara ni nini?", options: ["Hotuba ndefu kabla ya mchezo", "Neno kuhusu matokeo", "Neno analosema mpinzani wako", "Neno moja hadi matatu yanayoelekeza umakini wako"], answer: 3, why: "Maneno ya ishara ni vifungu vifupi kama \"macho juu\" vinavyoelekeza umakini wako." },
            { objective: "O3", q: "Kabla ya penalti mara nyingi unawaza \"usikose\". Unalibadilisha kuwa nini?", options: ["\"Usikose tena\"", "\"Piga kwa ulaini, malizia\"", "\"Tutashindwa nikikosa\"", "\"Natumaini itaingia\""], answer: 1, why: "Maneno mazuri ya kujiambia yanauambia mwili cha kufanya, si cha kuepuka." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Utulivu na umakini",
        questions: [
          { objective: "O1", q: "Kabla ya mchezo mkubwa moyo wako unadunda haraka. Hii inamaanisha:", options: ["Una tatizo", "Unapaswa kuacha", "Mwili wako unajiandaa kufanya kazi", "Hauko vizuri vya kutosha"], answer: 2, why: "Wasiwasi ni jinsi mwili unavyoitikia kwa kawaida kabla ya nyakati muhimu." },
          { objective: "O1", q: "Lengo kuhusu wasiwasi ni lipi?", options: ["Kuushusha hadi kiwango kinachokusaidia", "Kuufanya upotee kabisa", "Kuupuuza kila wakati", "Kuuongeza"], answer: 0, why: "Wasiwasi kidogo unasaidia; ujuzi ni kudhibiti kiwango chake." },
          { objective: "O2", q: "Hesabu za kupumua kwa mraba ni zipi?", options: ["Vuta 1, toa 10", "Vuta 10, shikilia 10", "Pumzi za haraka tu", "Vuta 4, shikilia 4, toa 4, shikilia 4"], answer: 3, why: "Hesabu sawa kama pande za mraba." },
          { objective: "O3", q: "Lipi ni neno la ishara linalofaa?", options: ["\"Usiharibu\"", "\"Miguu haraka\"", "\"Usikose\"", "\"Mimi hushindwa kila wakati\""], answer: 1, why: "Linauambia mwili wako cha kufanya." },
          { objective: "O2", q: "Unapaswa kufanya mazoezi ya kupumua kwa mraba lini?", options: ["Kwenye mchezo mkubwa zaidi tu", "Ukiwa mtulivu, ili lifanye kazi ukiwa na wasiwasi", "Kamwe", "Usiku tu"], answer: 1, why: "Kufanya mazoezi ukiwa mtulivu kunaufanya ujuzi uwe tayari chini ya shinikizo." }
        ]
      }
    },
    {
      name: "Sura 2: Taratibu, kujirudisha na msaada",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kujenga utaratibu wa kabla ya mchezo",
          minutes: 5,
          goal: "Andika utaratibu wa kabla ya mchezo wenye nyakati na hatua unazozidhibiti.",
          text: [
            "Utaratibu ni hatua unazozifanya kwa njia ileile kabla ya kila mchezo. Unaipa akili yako kitu kinachojulikana cha kushikilia, ili ujisikie tayari bila kujali mpinzani ni nani.",
            "Utaratibu rahisi: usiku uliotangulia (pakia begi, utaratibu wa kulala), mlo wa siku ya mchezo, kufika, kupasha mwili, dakika moja ya kupumua, maneno yako ya ishara, na kulenga kazi yako ya kwanza mchezoni.",
            "Hatua ziwe kuhusu mambo unayoyadhibiti. Imani za bahati ni sawa kwa kujifurahisha, lakini utaratibu unapaswa kufanya kazi hata ukisahau soksi zako za bahati. Kagua muda pamoja na kocha wako ili uendane na mazoezi ya timu ya kupasha mwili."
          ],
          steps: ["Orodhesha unachofanya kuanzia usiku uliotangulia hadi filimbi ya kwanza.", "Ongeza zoezi la kupumua na maneno yako ya ishara.", "Taja kazi yako ya kwanza mchezoni.", "Baki na hatua unazozidhibiti tu.", "Hakikisha unaendana na mazoezi ya timu yako ya kupasha mwili."],
          words: [["Utaratibu", "hatua unazorudia kwa njia ileile kila wakati."], ["Kinachodhibitika", "jambo unaloweza kuchagua au kubadilisha mwenyewe, kama juhudi au maandalizi."]],
          slides: [
            { title: "Kwa nini taratibu zinafanya kazi", bullets: ["Kitu kinachojulikana cha kushikilia", "Tayari dhidi ya mpinzani yeyote"] },
            { title: "Utaratibu rahisi", bullets: ["Usiku uliotangulia: pakia begi, lala", "Mlo wa siku ya mchezo na kufika", "Kupasha mwili, kupumua, maneno ya ishara", "Kazi ya kwanza mchezoni"] },
            { title: "Iwe kitu unachokidhibiti", bullets: ["Inafanya kazi bila soksi za bahati", "Inaendana na mazoezi ya timu ya kupasha mwili"] }
          ],
          tryIt: "Mwombe msaidizi wa AI ageuze orodha yako ya hatua za kabla ya mchezo kuwa ratiba safi kuanzia usiku uliotangulia hadi filimbi ya kwanza. Ihariri ili ilingane na siku yako halisi ya mchezo.",
          youCanNow: "kuandika utaratibu wa kabla ya mchezo uliojengwa juu ya hatua unazozidhibiti.",
          quickCheck: [
            { objective: "O4", q: "Utaratibu wa kabla ya mchezo ni nini?", options: ["Hatua unazozifanya kwa njia ileile kabla ya kila mchezo", "Mpango mpya kwa kila mpinzani", "Orodha ya hirizi za bahati", "Mpango wa mchezo wa kocha"], answer: 0, why: "Utaratibu ni hatua zilezile kila mchezo, zinazoipa akili yako kitu kinachojulikana." },
            { objective: "O4", q: "Utaratibu wako unategemea kuvaa shati moja la bahati. Unafanya nini?", options: ["Kuongeza imani zaidi za bahati", "Kutocheza ukisahau shati", "Kuhakikisha utaratibu unafanya kazi kwa hatua unazozidhibiti", "Kumwomba kocha alete shati la ziada"], answer: 2, why: "Hatua ziwe kuhusu mambo unayoyadhibiti ili utaratibu ufanye kazi vyovyote vile." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kujirudisha baada ya kosa",
          minutes: 5,
          goal: "Tumia hatua tatu za kujirudisha ili kusonga mbele baada ya kosa wakati wa mchezo.",
          text: [
            "Kila mwanamichezo hufanya makosa. Kinachojalisha ni jinsi unavyohamia haraka kwenye mchezo unaofuata. Kuendelea kuwaza kosa mara nyingi kunasababisha kosa lingine.",
            "Hatua tatu za kujirudisha: 1. Achilia: kitendo cha mwili kinachosema \"imekwisha\", kama kufuta mikono, kugusa kiatu chako au kutoa pumzi. 2. Tulia: pumzi moja ya polepole. 3. Rudisha umakini: sema neno lako la ishara kwa mchezo unaofuata.",
            "Baada ya mchezo, si wakati wa mchezo, angalia tena kosa ili ujifunze kutoka kwalo pamoja na kocha wako au kwa video. Wakati huo huo, kazi pekee ni mchezo unaofuata."
          ],
          steps: ["Achilia: kitendo kimoja cha mwili kinachomaanisha \"imekwisha\".", "Tulia: pumzi moja ya polepole.", "Rudisha umakini: sema neno lako la ishara la mchezo unaofuata.", "Jifunza kutoka kwalo baada ya mchezo, si wakati wa mchezo."],
          words: [["Kujirudisha", "utaratibu wa haraka wa kusafisha akili na kujiandaa kwa wakati unaofuata (reset)."], ["Fikra ya mchezo unaofuata", "kulenga kinachokuja, si kilichotokea sasa hivi."]],
          slides: [
            { title: "Makosa hutokea", bullets: ["Kuendelea kuwaza kunasababisha kosa lingine", "Kasi ya kujirudisha ni muhimu"] },
            { title: "Hatua tatu za kujirudisha", bullets: ["1. Achilia: kitendo cha mwili cha \"imekwisha\"", "2. Tulia: pumzi moja ya polepole", "3. Rudisha umakini: neno la ishara la mchezo ujao"] },
            { title: "Jifunze baadaye", bullets: ["Chambua baada ya mchezo", "Pamoja na kocha wako au kwa video"] }
          ],
          tryIt: "Chagua kitendo chako cha kuachilia na neno lako la ishara la mchezo unaofuata. Kwenye mazoezi yako yajayo, tumia hatua tatu za kujirudisha baada ya kila kosa na uhesabu ulizitumia mara ngapi.",
          youCanNow: "kutumia hatua tatu za kujirudisha ili kusonga mbele haraka baada ya kosa.",
          quickCheck: [
            { objective: "O5", q: "Hatua ya kuachilia katika kujirudisha baada ya kosa ni ipi?", options: ["Kubishana na mwamuzi", "Kurudia kosa kichwani", "Kuwaambia wachezaji wenzako nini kiliharibika", "Kitendo cha mwili kinachosema \"imekwisha\""], answer: 3, why: "Kuachilia ni kitendo cha mwili kama kufuta mikono au kugusa kiatu chako." },
            { objective: "O5", q: "Umeangusha pasi sasa hivi. Kazi yako sasa ni ipi?", options: ["Kuwaza kwa nini ilitokea", "Kuachilia, kuvuta pumzi moja ya polepole na kusema neno lako la ishara la mchezo unaofuata", "Kuangalia marudio", "Kuomba kutoka uwanjani"], answer: 1, why: "Wakati huo huo, kazi pekee ni mchezo unaofuata; jifunze kutoka kwalo baada ya mchezo." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ikiwa ni zaidi ya wasiwasi: kupata msaada",
          minutes: 5,
          goal: "Tambua dalili kwamba msongo unahitaji msaada halisi na utaje nani wa kuwasiliana naye.",
          text: [
            "Ujuzi wa kiakili unasaidia kwa shinikizo la kawaida. Lakini wakati mwingine msongo ni mkubwa zaidi: unajisikia huzuni siku nyingi, unapoteza hamu ya vitu ulivyopenda, huwezi kulala au kula, huna tumaini, au unawaza kujidhuru. Huo si udhaifu, na si kitu ambacho zoezi la kupumua au chatbot ya AI inaweza kurekebisha.",
            "Mwendee mtu halisi: mzazi au mtu mzima unayemwamini, kocha wako, mkufunzi wa afya ya wanamichezo (athletic trainer), mshauri wa shule, daktari wa timu au mtaalamu wa afya ya akili mwenye leseni. Shule na vyuo vingi vinatoa ushauri wa bure.",
            "Kama wewe au mtu unayemjua yuko katika hali ya hatari au anawaza kujiua nchini Marekani, piga simu au tuma ujumbe kwa 988 au zungumza kwa maandishi kwenye 988lifeline.org. Ni bure na iko wazi saa 24, siku 7. Katika dharura, piga 911."
          ],
          steps: ["Tambua dalili kwamba ni zaidi ya wasiwasi.", "Mwambie mtu mzima unayemwamini, kocha, athletic trainer au mshauri.", "Tafuta huduma ya ushauri ya shule yako.", "Katika hali ya hatari: piga simu au tuma ujumbe kwa 988. Katika dharura: 911."],
          words: [["Mtaalamu wa afya ya akili mwenye leseni", "mshauri, mwanasaikolojia au mtaalamu wa tiba aliyefunzwa na mwenye leseni."], ["988 Lifeline", "huduma ya bure ya Marekani ya kuzuia kujiua na hali za hatari (Suicide and Crisis Lifeline): piga simu, tuma ujumbe au zungumza kwa maandishi saa 24, siku 7."]],
          slides: [
            { title: "Ni zaidi ya wasiwasi ikiwa", bullets: ["Huzuni siku nyingi", "Umepoteza hamu, huwezi kulala au kula", "Huna tumaini au unawaza kujidhuru"] },
            { title: "Ongea na mtu halisi", bullets: ["Mtu mzima unayemwamini, kocha, athletic trainer", "Mshauri wa shule au daktari wa timu", "Mtaalamu wa afya ya akili mwenye leseni"] },
            { title: "Katika hali ya hatari", bullets: ["Piga simu au tuma ujumbe kwa 988 (Marekani), bure, saa 24/7", "Zungumza kwa maandishi kwenye 988lifeline.org", "Dharura: 911"] }
          ],
          sources: [{ name: "988 Suicide and Crisis Lifeline", url: "https://988lifeline.org/" }],
          tryIt: "Kazi ya mwisho: andika kadi yako ya ukurasa mmoja ya utaratibu wa kabla ya mchezo yenye zoezi lako la kupumua, maneno matatu ya ishara na hatua tatu za kujirudisha baada ya kosa. Chini kabisa, andika majina ya watu wawili unaoweza kuongea nao na jinsi ya kufikia huduma ya ushauri ya shule yako. Mwonyeshe kocha wako kadi hiyo.",
          youCanNow: "kutumia utaratibu wako wa utendaji wa kiakili na kujua lini na wapi pa kupata msaada halisi.",
          quickCheck: [
            { objective: "O6", q: "Lipi ni dalili kwamba msongo unahitaji msaada halisi?", options: ["Kukosa tumaini siku nyingi", "Wasiwasi kabla ya mchezo mkubwa", "Moyo kudunda haraka kwenye mstari wa kuanzia", "Mikono yenye jasho kwenye mstari wa kurusha bure"], answer: 0, why: "Kujisikia huzuni au kukosa tumaini siku nyingi ni zaidi ya wasiwasi wa kawaida." },
            { objective: "O6", q: "Rafiki anakutumia ujumbe kwamba anawaza kujiua. Nchini Marekani, unafanya nini?", options: ["Kulifanya siri", "Kumwambia ajaribu kupumua kwa mraba", "Kuuliza chatbot ya AI cha kufanya", "Kumwambia mtu mzima unayemwamini mara moja na kumpa 988, au kupiga 911 kama yuko hatarini sasa hivi"], answer: 3, why: "Mtu halisi lazima asaidie; 988 ni namba ya hali za hatari na 911 ni kwa dharura." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Taratibu, kujirudisha na msaada",
        questions: [
          { objective: "O4", q: "Kwa nini wanamichezo wanatumia taratibu za kabla ya mchezo?", options: ["Ili kuruka kupasha mwili", "Ili kuwavutia mashabiki", "Ili kumkwepa kocha", "Ili kuipa akili kitu kinachojulikana na kujisikia tayari"], answer: 3, why: "Taratibu zinatengeneza njia inayojulikana ya kujisikia tayari." },
          { objective: "O4", q: "Hatua ipi ya utaratibu unaidhibiti?", options: ["Dakika yako moja ya kupumua", "Maamuzi ya mwamuzi", "Hali ya hewa", "Wachezaji wa timu nyingine"], answer: 0, why: "Wewe unachagua kufanya zoezi lako la kupumua." },
          { objective: "O5", q: "Hatua ya 1 ya kujirudisha baada ya kosa ni ipi?", options: ["Kubishana na mwamuzi", "Kulirudia kichwani", "Achilia: kitendo cha mwili kinachomaanisha \"imekwisha\"", "Kuondoka mchezoni"], answer: 2, why: "Kuachilia kwa kitendo cha mwili kunakusaidia kuliacha kosa." },
          { objective: "O5", q: "Unapaswa kuchambua kosa lini?", options: ["Katikati ya mchezo unaofuata", "Kamwe", "Kocha anapoongea", "Baada ya mchezo, pamoja na kocha wako au kwa video"], answer: 3, why: "Wakati wa mchezo, kazi pekee ni mchezo unaofuata." },
          { objective: "O6", q: "Mchezaji mwenzako anakuambia hana tumaini na anaongelea kujidhuru. Unafanya nini?", options: ["Kumwambia afanye kupumua kwa mraba", "Kumwambia mtu mzima unayemwamini mara moja na kumpa 988 Lifeline", "Kulifanya siri", "Kumwambia aulize chatbot"], answer: 1, why: "Hili linahitaji watu halisi na msaada wa hali ya hatari sasa hivi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Utendaji wa Kiakili na Umakini",
    questions: [
      { objective: "O1", q: "Mikono yenye jasho kabla ya mchezo ni:", options: ["Ishara ya kuacha", "Hatari kila wakati", "Dalili ya kawaida ya wasiwasi", "Kuvunja sheria"], answer: 2, why: "Ni mwili wako ukijiandaa." },
      { objective: "O1", q: "Je, wanamichezo wa kulipwa wanahisi wasiwasi?", options: ["Ndiyo, wanaudhibiti", "Kamwe", "Wachezaji wapya tu", "Kwenye mazoezi tu"], answer: 0, why: "Kila mtu anahisi wasiwasi; wanamichezo wa kulipwa wanaudhibiti." },
      { objective: "O1", q: "Hatua ya kwanza ya kudhibiti wasiwasi ni:", options: ["Kutambua unachohisi na unachowaza", "Kuupuuza", "Kupiga kelele", "Kutocheza"], answer: 0, why: "Huwezi kudhibiti usichokitambua." },
      { objective: "O2", q: "Kupumua kwa mraba kuna sehemu ngapi zilizo sawa?", options: ["Mbili", "Tatu", "Nne", "Tano"], answer: 2, why: "Vuta, shikilia, toa, shikilia." },
      { objective: "O2", q: "Kama kushikilia pumzi kunakusumbua, unaweza:", options: ["Kushikilia muda mrefu zaidi", "Kuruka kushikilia na kutoa pumzi polepole", "Kuacha kupumua", "Kupumua haraka sana"], answer: 1, why: "Kupumua polepole bila kushikilia bado kunakutuliza." },
      { objective: "O3", q: "Maneno ya kujiambia ni:", options: ["Kuongea na mwamuzi", "Wimbo wa timu", "Chapisho mtandaoni", "Unachojiambia kichwani"], answer: 3, why: "Ni sauti yako ya ndani." },
      { objective: "O3", q: "Maneno yapi ya kujiambia yanasaidia zaidi?", options: ["\"Usikose\"", "\"Mimi hushindwa kila wakati\"", "\"Achia kwa ulaini, malizia\"", "\"Hakuna tumaini\""], answer: 2, why: "Yanauambia mwili wako cha kufanya." },
      { objective: "O3", q: "Maneno mazuri ya ishara yanalenga:", options: ["Matokeo", "Umati wa watazamaji", "Timu nyingine", "Unachokidhibiti"], answer: 3, why: "Dhibiti unachoweza kudhibiti." },
      { objective: "O3", q: "AI inawezaje kusaidia na maneno ya ishara?", options: ["Inaweza kupendekeza vifungu vifupi vya \"fanya hivi\" unavyochagua", "Inaweza kukuchezea", "Inaweza kugundua ugonjwa wa wasiwasi", "Haiwezi kusaidia kabisa"], answer: 0, why: "AI ni hodari wa kuchagua maneno; wewe unachagua yanayokufaa." },
      { objective: "O4", q: "Utaratibu wa kabla ya mchezo unapaswa kufanya kazi hata kama:", options: ["Mmeshinda", "Umesahau soksi zako za bahati", "Kocha ameondoka", "Mvua inanyesha"], answer: 1, why: "Umejengwa juu ya hatua unazozidhibiti, si bahati." },
      { objective: "O4", q: "Unapaswa kukagua muda wa utaratibu wako na nani?", options: ["Mpinzani wako", "Mtu usiyemjua mtandaoni", "Kocha wako", "Hakuna mtu"], answer: 2, why: "Lazima uendane na mazoezi ya timu ya kupasha mwili." },
      { objective: "O5", q: "Fikra ya mchezo unaofuata ni nini?", options: ["Kulenga kinachokuja, si kilichotokea", "Kurudia makosa kichwani", "Kuwalaumu wachezaji wenzako", "Kuangalia ubao wa matokeo"], answer: 0, why: "Mchezo unaofuata ndio pekee unaoweza kuubadilisha." },
      { objective: "O5", q: "Hatua ya 2 ya kujirudisha baada ya kosa ni ipi?", options: ["Kubishana", "Kuondoka uwanjani", "Kuangalia mitandao ya kijamii", "Pumzi moja ya polepole"], answer: 3, why: "Achilia, tulia kwa pumzi, rudisha umakini." },
      { objective: "O5", q: "Hatua ya 3 ya kujirudisha baada ya kosa ni ipi?", options: ["Kupiga kelele", "Kurudisha umakini kwa neno lako la ishara la mchezo unaofuata", "Kurudia kosa", "Kuangalia umati"], answer: 1, why: "Neno la ishara linakuelekeza kwenye kazi inayofuata." },
      { objective: "O6", q: "Lipi ni dalili kwamba msongo ni zaidi ya wasiwasi?", options: ["Vipepeo tumboni kabla ya mchezo", "Kujisikia huzuni siku nyingi na kupoteza hamu", "Kuwa na hamasa", "Moyo kudunda haraka kabla ya mchezo kuanza"], answer: 1, why: "Huzuni ya muda mrefu inahitaji msaada halisi." },
      { objective: "O6", q: "Je, chatbot ya AI inaweza kuchukua nafasi ya mshauri?", options: ["Ndiyo", "Wikendi tu", "Kwa wanamichezo tu", "Hapana, ongea na mtu halisi"], answer: 3, why: "Msongo mkubwa unahitaji mtu aliyefunzwa." },
      { objective: "O6", q: "Unaweza kuongea na nani kuhusu msongo mkubwa?", options: ["Mtu mzima unayemwamini, kocha, athletic trainer au mshauri wa shule", "Wewe mwenyewe tu", "Hakuna mtu", "Wapinzani"], answer: 0, why: "Watu hawa wanaweza kusaidia au kukuunganisha na msaada." },
      { objective: "O6", q: "Nchini Marekani, namba ya hali za hatari ni:", options: ["411", "311", "988", "0"], answer: 2, why: "Piga simu au tuma ujumbe kwa 988 kwa Suicide and Crisis Lifeline." },
      { objective: "O6", q: "988 Lifeline iko wazi lini?", options: ["Siku za kazi tu", "Usiku tu", "Wakati wa msimu tu", "Saa 24/7"], answer: 3, why: "Ni bure na iko wazi saa 24 kwa siku, kila siku." },
      { objective: "O6", q: "Katika dharura ambapo mtu yuko hatarini sasa hivi, unapiga:", options: ["Kocha wako tu", "911", "Rafiki baadaye", "Hakuna mtu"], answer: 1, why: "911 ni kwa dharura zinazotokea sasa hivi." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [2, 3, 6, 9, 12, 14, 17]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Ratiba ya kabla ya mchezo", objective: "O4", notYet: "Hatua hazina nyakati, au zinategemea mambo ambayo mwanamichezo hayadhibiti.", meets: "Ratiba kuanzia usiku uliotangulia hadi filimbi ya kwanza yenye hatua zinazodhibitika tu, iliyokaguliwa na kocha.", exceeds: "Inataja kazi ya kwanza ya mwanamichezo mchezoni na inaendana kabisa na mazoezi ya timu ya kupasha mwili." },
      { name: "Zoezi la kupumua", objective: "O2", notYet: "Hakuna zoezi la kupumua, au hesabu hazieleweki.", meets: "Kupumua kwa mraba (au kupumua polepole bila kushikilia) kumeandikwa kwenye kadi mahali maalum na kumefanyiwa mazoezi katika vipindi viwili vya mazoezi.", exceeds: "Kuna toleo fupi zaidi kwa nyakati za mchezoni kama kwenye mstari wa kurusha bure." },
      { name: "Maneno ya ishara", objective: "O3", notYet: "Maneno ya ishara ni chini ya matatu, au ni kuhusu matokeo au cha kuepuka.", meets: "Maneno matatu ya ishara, kila moja la maneno moja hadi matatu, kuhusu kile mwanamichezo anachokidhibiti.", exceeds: "Kila neno la ishara linachukua nafasi ya wazo hasi lililotajwa ambalo mwanamichezo hulipata mara nyingi." },
      { name: "Kujirudisha baada ya kosa", objective: "O5", notYet: "Hatua moja au zaidi kati ya zile tatu haipo.", meets: "Achilia, tulia na rudisha umakini zimeandikwa pamoja na kitendo na neno la ishara la mwanamichezo mwenyewe.", exceeds: "Mwanamichezo anaripoti kuzitumia kwenye mazoezi na anaandika cha kuchambua baada ya mchezo." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kadi ya utaratibu na kupata Anafikia au Anazidi katika kila mstari wa rubriki",
      "Wanafunzi wanaoripoti bado kutumia utaratibu wao na hatua za kujirudisha baada ya kosa siku 30 baadaye (utafiti wa kufuatilia)",
      "Wanafunzi wanaoweza kutaja nani wa kuwasiliana naye na 988 Lifeline katika ufuatiliaji",
      "Makocha wanaoripoti kuongeza zoezi la timu la kupumua au la kujirudisha baada ya kosa kwenye mazoezi"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Karatasi au kidokezo kwenye simu kwa kadi ya utaratibu",
      "Msaidizi wa AI wa bure (ChatGPT, Microsoft Copilot au Google Gemini), si lazima",
      "Muda wa mchezo wako ujao na mpango wa timu wa kupasha mwili",
      "Mawasiliano ya mshauri wa shule yako au athletic trainer",
      "Kama dakika 60, pamoja na mazoezi katika vipindi viwili vya mazoezi ya timu"
    ],
    facilitatorNotes: [
      "Sema wazi kwamba huu ni ujuzi wa utendaji, si tiba; usijaribu kuwapa wanamichezo ushauri nasaha katika kikundi.",
      "Kabla ya Somo la 6, tafuta huduma ya ushauri ya shule yako na uitoe pamoja na 988 na 911.",
      "Mwanamichezo akisema yuko katika hali ya hatari au anawaza kujidhuru, kaa naye na umlete mtu mzima unayemwamini au mtaalamu mara moja.",
      "Fanyeni mazoezi ya kupumua kwa mraba pamoja mkiwa watulivu; waambie wanamichezo waruke kushikilia pumzi au waache wakihisi kizunguzungu.",
      "Kadi za utaratibu ziwe za faragha isipokuwa mwanamichezo akichagua kumwonyesha kocha."
    ]
  }
};
