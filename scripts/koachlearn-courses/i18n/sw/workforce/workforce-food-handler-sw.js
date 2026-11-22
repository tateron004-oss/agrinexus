"use strict";

// Koach Learn course (Swahili translation of workforce/workforce-food-handler.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.
// Temperatures and US rules (FDA Food Code, California HSC 113948) are kept exactly as in the English course.

module.exports = {
  id: "workforce-food-handler-sw",
  lang: "sw",
  translationOf: "workforce-food-handler",
  category: "Workforce Development",
  name: "Mhudumu wa Chakula na Maandalizi ya Mtihani wa ServSafe",
  skills: "Kunawa mikono kwa njia sahihi, Kuzuia uchafuzi mtambuka, Kuweka chakula nje ya eneo la hatari la joto, Kupika kwa joto salama, Kushughulikia vizio (allergens), Kusafisha na kuua vijidudu",
  outcome: "kushughulikia chakula kwa usalama katika zamu ya mgahawa au huduma ya chakula: kunawa mikono ipasavyo, kuzuia uchafuzi mtambuka, kuweka chakula nje ya eneo la hatari la joto, kupika na kuhifadhi chakula kwa joto salama, kuwalinda wageni wenye mzio, na kusafisha na kuua vijidudu kwenye sehemu ya kazi, na kuwa tayari kufanya mtihani wa mhudumu wa chakula.",
  about: [
    "Kozi hii ni kwa yeyote anayefanya kazi na chakula au anayetaka kufanya hivyo: wafanyakazi wa migahawa na vyakula vya haraka, wafanyakazi wa jikoni za kantini na shule, wapishi wa sherehe, wafanyakazi wa magari ya chakula, wa mikate na wa deli, na watu wanaojiandaa kwa kadi ya mhudumu wa chakula au mtihani wa ServSafe (mtihani unaojulikana wa usalama wa chakula nchini Marekani).",
    "Utajifunza ujuzi wa msingi wa usalama wa chakula ambao kila mtihani wa mhudumu wa chakula unauliza: kunawa mikono na usafi binafsi, uchafuzi mtambuka, kudhibiti muda na joto, joto la kupika, vizio, na tofauti kati ya kusafisha na kuua vijidudu. Maswali ya mazoezi ni yetu wenyewe, yameandikwa kukusaidia kufikiri kama mtihani; hayakunakiliwa kutoka mtihani wowote halisi.",
    "Kila somo linachukua kama dakika tano. Soma somo, tazama slaidi, kisha fanya kazi ya \"Jaribu sasa\". Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni. Sheria za kadi ya mhudumu wa chakula zinawekwa na majimbo na kaunti, na kanuni za chakula hubadilishwa mara kwa mara, kwa hiyo uliza idara ya afya ya eneo lako kuhusu sheria za mahali unapofanya kazi."
  ],
  finalTask: "Andika \"Orodha ya Zamu Salama\" ya ukurasa mmoja kwa jikoni halisi au ya mazoezi: lini na jinsi ya kunawa mikono, jinsi ya kuhifadhi chakula kibichi na chakula kilicho tayari kuliwa ili kuzuia uchafuzi mtambuka, joto la kuhifadhi baridi, la kuhifadhi moto na la kupika utakalokagua kwa kipimajoto, hatua za kupoza, utakachofanya mgeni akisema ana mzio, hatua za kusafisha na kuua vijidudu kwenye meza ya maandalizi, na dalili za ugonjwa unazopaswa kuripoti. Kisha tafuta sheria ya kadi ya mhudumu wa chakula ya jimbo au kaunti yako na uiandike juu kabisa.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wafanyakazi wapya na wa sasa wa chakula na watafuta kazi: wafanyakazi wa migahawa na vyakula vya haraka, wafanyakazi wa jikoni za kantini na shule, wapishi wa sherehe, wafanyakazi wa magari ya chakula, wa mikate na wa deli, na watu wanaojiandaa kwa kadi ya mhudumu wa chakula au mtihani wa ServSafe.",
    startingPoint: "Wanaweza kupika au kuandaa chakula nyumbani na huenda wamefanya zamu jikoni, lakini hawajajifunza sheria za huduma ya chakula kuhusu kunawa mikono, mpangilio wa kuhifadhi, joto la kuhifadhi na la kupika, vizio na kuua vijidudu.",
    gap: "Waajiri wengi na idara za afya zinahitaji kadi ya mhudumu wa chakula muda mfupi baada ya kuajiriwa, na kosa moja la joto, uchafuzi mtambuka au mzio linaweza kuwafanya wageni waugue. Wanafunzi wanahitaji tabia hizi na namba hizi ili kuajiriwa, kufaulu mtihani na kuwaweka wageni salama.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi (kama darasa la 6)",
      "Vifaa: simu au kompyuta ya pamoja; kipimajoto cha chakula kinasaidia lakini si lazima",
      "Muda: masomo ya kama dakika tano yanayoingia kati ya zamu",
      "Sheria zinatofautiana kwa jimbo na kaunti, na namba za huduma ya chakula zinatofautiana na ushauri wa kupika nyumbani; wanafunzi wanauliza idara ya afya ya eneo lao",
      "Elimu ya jumla tu: haichukui nafasi ya kozi iliyoidhinishwa ya mhudumu wa chakula wala cheti cha meneja"
    ],
    prerequisites: "Hakuna."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Wakati wa zamu jikoni", action: "kunawa mikono kwa njia sahihi kwa nyakati sahihi na kutogusa chakula kilicho tayari kuliwa kwa mikono mitupu", standard: "ukisugua kwa angalau sekunde 20 na ukitaja angalau nyakati sita za kunawa" },
    { id: "O2", condition: "Ukipewa vyakula vibichi na vilivyo tayari kuliwa vya kuhifadhi au kuandaa", action: "kuvihifadhi na kuviandaa ili vijidudu visienee", standard: "ukiweka kila kitu kwenye rafu sahihi ya friji na ukitumia vifaa tofauti au vilivyouawa vijidudu" },
    { id: "O3", condition: "Mgeni akiwa na mzio wa chakula au sehemu ikihitaji kusafishwa", action: "kufuata hatua za mzio na kusafisha na kuua vijidudu kwenye sehemu kwa mpangilio sahihi", standard: "kila hatua kwa mpangilio wake na bila kubahatisha viungo" },
    { id: "O4", condition: "Ukipewa chakula cha TCS cha baridi na cha moto na kipimajoto", action: "kukagua joto la kuhifadhi na kuyeyusha barafu ya chakula kwa usalama", standard: "baridi kwa 41°F au chini na moto kwa 135°F au juu, kila mara" },
    { id: "O5", condition: "Unapopika, kupasha moto tena au kupoza chakula", action: "kuchagua joto na muda salama kwa kila chakula na kupanga kupoza haraka", standard: "kulingana na namba za FDA Food Code zinazofundishwa katika kozi" },
    { id: "O6", condition: "Kabla na wakati wa kazi katika huduma ya chakula", action: "kutambua dalili za ugonjwa unazopaswa kuripoti na kupata sheria ya kadi ya mhudumu wa chakula mahali unapofanya kazi", standard: "ukitaja dalili hizo, na muda wa mwisho, muda wa kadi na kozi zinazokubalika kutoka idara yako ya afya" }
  ],
  chapters: [
    {
      name: "Sura 1: Mikono safi na chakula safi",
      lessons: [
        {
          objectives: ["O1","O6"],
          title: "Kunawa mikono na usafi binafsi",
          minutes: 5,
          goal: "Nawa mikono kwa njia sahihi kwa nyakati sahihi na fuata sheria za msingi za usafi.",
          text: [
            "Mikono inaeneza magonjwa yanayotokana na chakula kuliko karibu kitu kingine chochote. Inawe kwenye sinki la kunawia mikono (kamwe si sinki la kuandalia chakula wala la vyombo) kwa maji ya uvuguvugu yanayotiririka na sabuni. Sugua mikono, katikati ya vidole, chini ya kucha na hadi kwenye vifundo kwa angalau sekunde 20, suuza, na kausha kwa taulo la karatasi la kutumia mara moja au mashine ya kukausha mikono. Tumia taulo kufunga bomba kama sinki lina vishikio.",
            "Nawa unapoanza kazi, baada ya kutumia choo, baada ya kugusa nyama mbichi, kuku au samaki, baada ya kugusa uso wako, nywele, simu au takataka, baada ya kula, kunywa, kuvuta sigara au kukohoa, baada ya kusafisha, na kabla ya kuvaa glavu. Glavu hazichukui nafasi ya kunawa mikono, na unazibadilisha zinapochanika, unapobadilisha kazi, na baada ya kushika chakula kibichi.",
            "Usiguse chakula kilicho tayari kuliwa (chakula ambacho hakitapikwa tena, kama saladi, mkate au baga iliyopikwa) kwa mikono mitupu. Tumia glavu, koleo, karatasi ya deli au vyombo.",
            "Usafi binafsi: vaa nguo safi na kifuniko cha nywele, weka kucha fupi na safi, na funika vidonda kwa bendeji na glavu. Mwambie meneja wako ukiwa unatapika, unaharisha, una ngozi au macho ya njano (homa ya manjano), au koo linauma pamoja na homa, au ukigunduliwa kuwa na magonjwa fulani kama norovirus, hepatitis A au salmonella. Huenda ukahitaji kubaki nyumbani au mbali na chakula."
          ],
          steps: ["Tumia sinki la kunawia mikono tu.", "Lowesha mikono kwa maji ya uvuguvugu yanayotiririka na weka sabuni.", "Sugua mikono, vidole, kucha na vifundo kwa angalau sekunde 20.", "Suuza, na kausha kwa taulo la karatasi au mashine ya kukausha mikono.", "Funga bomba kwa kutumia taulo.", "Vaa glavu mpya ukishika chakula kilicho tayari kuliwa."],
          words: [["Ugonjwa unaotokana na chakula", "ugonjwa unaosababishwa na kula chakula chenye vijidudu au sumu ndani yake."], ["Chakula kilicho tayari kuliwa", "chakula kitakacholiwa bila kupikwa tena, kama saladi, mkate au baga iliyopikwa."], ["Homa ya manjano (jaundice)", "ngozi au macho kugeuka njano, dalili ya magonjwa kama hepatitis A."]],
          slides: [
            { title: "Nawa kwa njia sahihi", bullets: ["Sinki la kunawia mikono tu", "Maji ya uvuguvugu na sabuni", "Sugua angalau sekunde 20; kausha kwa taulo la karatasi"] },
            { title: "Lini kunawa", bullets: ["Mwanzo wa zamu na baada ya choo", "Baada ya nyama mbichi, takataka, uso wako au simu", "Kabla ya kuvaa glavu"] },
            { title: "Mikono mitupu isiguse chakula kilicho tayari kuliwa", bullets: ["Tumia glavu, koleo, karatasi ya deli au vyombo", "Badilisha glavu zikichanika au ukibadilisha kazi"] },
            { title: "Usafi na ugonjwa", bullets: ["Nguo safi, kifuniko cha nywele, kucha fupi", "Funika vidonda kwa bendeji na glavu", "Ripoti kutapika, kuharisha, homa ya manjano, koo kuuma pamoja na homa"] }
          ],
          sources: [
            { name: "FDA: Kushughulikia chakula kwa usalama (kunawa mikono kwa angalau sekunde 20)", url: "https://www.fda.gov/food/buy-store-serve-safe-food/safe-food-handling" },
            { name: "FDA: Food Code 2022 (kanuni ya chakula)", url: "https://www.fda.gov/food/fda-food-code/food-code-2022" }
          ],
          tryIt: "Nawa mikono kikamilifu huku ukijipima muda: angalau sekunde 20 za kusugua. Kisha andika nyakati sita wakati wa zamu jikoni unapopaswa kunawa mikono.",
          youCanNow: "kunawa mikono ipasavyo, kujua lini kunawa, kuepuka kugusa chakula kilicho tayari kuliwa kwa mikono mitupu, na kujua dalili zipi za kuripoti.",
          quickCheck: [
            { objective: "O1", q: "Chakula kilicho tayari kuliwa ni nini?", options: ["Chakula ambacho hakitapikwa tena, kama saladi au mkate", "Kuku mbichi anayesubiri kupikwa", "Chakula kilichogandishwa kwenye friza", "Chakula chochote kilichofungwa kwenye pakiti"], answer: 0, why: "Chakula kilicho tayari kuliwa hakitapikwa tena, kwa hiyo kisiguswe kwa mikono mitupu." },
            { objective: "O1", q: "Umetoka kutupa takataka na sasa unahitaji kutengeneza sandwichi. Unafanya nini kwanza?", options: ["Kuvaa glavu mara moja", "Kunawa mikono, kisha kuvaa glavu mpya", "Kupangusa mikono kwenye aproni yako", "Kutumia kitakasa mikono tu"], answer: 1, why: "Glavu hazichukui nafasi ya kunawa; unanawa baada ya kugusa takataka na kabla ya kuvaa glavu." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kuzuia uchafuzi mtambuka",
          minutes: 5,
          goal: "Hifadhi na andaa chakula ili vijidudu na vizio visihame kutoka chakula au sehemu moja hadi nyingine.",
          text: [
            "Uchafuzi mtambuka ni pale vijidudu vinapohama kutoka kitu kimoja hadi kingine: kutoka kuku mbichi hadi saladi, kutoka ubao chafu wa kukatia hadi mkate, au kutoka mikono yako hadi sandwichi.",
            "Tenganisha chakula kibichi na chakula kilicho tayari kuliwa. Tumia mbao za kukatia, visu na vyombo tofauti kwa nyama mbichi na kwa mboga, matunda au chakula kilichopikwa; jikoni nyingi zinatumia mbao zenye rangi tofauti. Ikibidi utumie sehemu ileile, isafishe na uue vijidudu kati ya kazi.",
            "Hifadhi chakula kwa njia sahihi kwenye friji. Weka chakula kilicho tayari kuliwa kwenye rafu za juu. Hifadhi vyakula vibichi vya wanyama chini yake, kwa mpangilio wa joto lao la kupika: vipande vizima vya nyama na samaki juu ya nyama ya kusaga, na kuku chini kabisa, ili majimaji yasidondokee vyakula vinavyohitaji kupikwa kidogo. Funika chakula na weka lebo yenye jina na tarehe.",
            "Tabia nyingine: kamwe usirudishe chakula kilichopikwa kwenye sahani au trei iliyobeba nyama mbichi; weka kemikali mbali na chakula na chini yake; na tumia kijiko safi cha barafu, si glasi wala mkono wako, kuchota barafu."
          ],
          steps: ["Tumia mbao na visu tofauti kwa nyama mbichi na chakula kilicho tayari kuliwa.", "Safisha na ua vijidudu kwenye sehemu kati ya kazi.", "Hifadhi chakula kilicho tayari kuliwa juu kwenye friji.", "Hifadhi nyama mbichi chini: vipande vizima na samaki, kisha nyama ya kusaga, kisha kuku chini kabisa.", "Funika na weka lebo yenye jina na tarehe kwenye chakula kilichohifadhiwa.", "Weka kemikali mbali na chakula na chini yake."],
          words: [["Uchafuzi mtambuka", "vijidudu au vizio vinapohama kutoka chakula, sehemu au mkono mmoja hadi chakula kingine."], ["Mbao zenye rangi tofauti", "mbao za kukatia za rangi mbalimbali kwa vyakula mbalimbali, ili kuvitenganisha."]],
          slides: [
            { title: "Uchafuzi mtambuka ni nini", bullets: ["Vijidudu vinahama kutoka kitu kimoja hadi kingine", "Kuku mbichi hadi saladi; ubao chafu hadi mkate"] },
            { title: "Tenganisha kibichi na kilicho tayari kuliwa", bullets: ["Mbao, visu na vyombo tofauti", "Safisha na ua vijidudu kati ya kazi"] },
            { title: "Kuhifadhi kwenye friji, juu hadi chini", bullets: ["Chakula kilicho tayari kuliwa juu", "Vipande vizima vya nyama na samaki, kisha nyama ya kusaga", "Kuku kwenye rafu ya chini kabisa"] },
            { title: "Tabia nyingine", bullets: ["Kamwe usitumie tena sahani ya nyama mbichi kwa chakula kilichopikwa", "Kemikali mbali na chakula na chini yake", "Tumia kijiko cha barafu"] }
          ],
          sources: [
            { name: "FDA: Kushughulikia chakula kwa usalama (tenganisha chakula kibichi na kilicho tayari kuliwa)", url: "https://www.fda.gov/food/buy-store-serve-safe-food/safe-food-handling" }
          ],
          tryIt: "Chora friji yenye rafu nne. Weka vitu hivi kwenye rafu sahihi: trei ya mapaja ya kuku mbichi, chombo cha saladi iliyokatwa, nyama mbichi ya ng'ombe ya kusaga, na vipande vibichi vya samaki aina ya salmon. Andika sentensi moja ukieleza kwa nini mpangilio ni muhimu.",
          youCanNow: "kuhifadhi na kuandaa chakula ili vijidudu visienee kati ya vyakula vibichi na vilivyo tayari kuliwa.",
          quickCheck: [
            { objective: "O2", q: "Uchafuzi mtambuka ni nini?", options: ["Kupika chakula muda mrefu mno", "Kuhifadhi chakula kwenye friza", "Vijidudu kuhama kutoka chakula au sehemu moja hadi nyingine", "Kuchanganya michuzi miwili"], answer: 2, why: "Uchafuzi mtambuka ni pale vijidudu vinapohama kutoka kitu kimoja, kama kuku mbichi, hadi kingine." },
            { objective: "O2", q: "Unahitaji barafu kwa vinywaji. Unatumia nini kuichota?", options: ["Glasi ya kunywea", "Mkono wako safi", "Kikombe kutoka kwenye kichanja cha vyombo", "Kijiko safi cha barafu"], answer: 3, why: "Kijiko safi kinazuia mikono na vipande vya glasi visiingie kwenye barafu." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Vizio, na kusafisha dhidi ya kuua vijidudu",
          minutes: 5,
          goal: "Mhudumie mgeni mwenye mzio wa chakula kwa usalama na safisha na ua vijidudu kwenye sehemu ipasavyo.",
          text: [
            "Mzio wa chakula unaweza kuua. FDA inataja vizio tisa vikuu vya chakula: maziwa, mayai, samaki, viumbe wa baharini wenye magamba (kama kamba na kaa), karanga za miti, njugu (karanga), ngano, soya na ufuta. Ufuta uliongezwa tarehe 1 Januari 2023.",
            "Mgeni akisema ana mzio, lichukulie kwa uzito. Mwambie meneja au mpishi mkuu. Kagua mapishi na lebo za kila kiungo. Nawa mikono, badilisha glavu, na tumia vifaa na sehemu safi zilizouawa vijidudu kutengeneza chakula. Kitenge na chakula kingine na kipeleke peke yake. Kama huna uhakika kwamba chakula ni salama, sema hivyo; kamwe usibahatishe. Mgeni akionyesha dalili za mzio, kama kushindwa kupumua au kuvimba, piga 911 (namba ya dharura nchini Marekani).",
            "Kusafisha na kuua vijidudu ni vitu tofauti. Kusafisha kunaondoa chakula, uchafu na mafuta unayoweza kuona. Kuua vijidudu kunapunguza vijidudu hadi kiwango salama. Lazima usafishe kwanza; dawa ya kuua vijidudu haifanyi kazi vizuri kwenye sehemu chafu.",
            "Kusafisha na kuua vijidudu kwenye meza ya maandalizi: kwangua chakula, osha kwa sabuni na maji, suuza, weka dawa ya kuua vijidudu kwa nguvu sahihi (kagua kwa vipande vya kupimia ambavyo jikoni yako inatumia na maelekezo ya lebo), iache kwa muda wa kugusana ulioandikwa kwenye lebo, na iache ikauke yenyewe hewani. Usiipanguse kwa taulo. Vyombo kwenye sinki la sehemu tatu vinafuata mpangilio uleule: osha, suuza, ua vijidudu, acha vikauke hewani."
          ],
          steps: ["Mzio: mwambie meneja au mpishi mkuu na kagua kila kiungo.", "Nawa mikono, badilisha glavu, tumia vifaa safi vilivyouawa vijidudu.", "Tenga oda ya mzio na ipeleke peke yake.", "Sehemu ya kazi: kwangua, osha, suuza.", "Ua vijidudu kwa nguvu sahihi (vipande vya kupimia) kwa muda wa kugusana ulio kwenye lebo.", "Acha ikauke hewani; usipanguse kwa taulo."],
          words: [["Kizio (allergen)", "chakula kinachoweza kusababisha mwitikio hatari wa kinga ya mwili kwa baadhi ya watu."], ["Kuua vijidudu (sanitizing)", "kupunguza vijidudu kwenye sehemu safi hadi kiwango salama kwa joto au kwa kemikali."], ["Muda wa kugusana", "muda ambao dawa ya kuua vijidudu inapaswa kubaki imelowanisha sehemu ili ifanye kazi."], ["Vipande vya kupimia (test strips)", "vipande vya karatasi vinavyoonyesha kama mchanganyiko wa dawa ya kuua vijidudu una nguvu sahihi."]],
          slides: [
            { title: "Vizio tisa vikuu (FDA)", bullets: ["Maziwa, mayai, samaki, viumbe wa baharini wenye magamba", "Karanga za miti, njugu, ngano, soya", "Ufuta (uliongezwa 1 Januari 2023)"] },
            { title: "Mgeni ana mzio", bullets: ["Mwambie meneja au mpishi mkuu; kagua kila lebo", "Mikono safi, glavu mpya, vifaa vilivyouawa vijidudu", "Kamwe usibahatishe; piga 911 kwa mwitikio wa mzio"] },
            { title: "Kusafisha dhidi ya kuua vijidudu", bullets: ["Kusafisha kunaondoa uchafu unaouona", "Kuua vijidudu kunapunguza vijidudu hadi kiwango salama", "Safisha kwanza kila mara"] },
            { title: "Safisha na ua vijidudu kwenye meza", bullets: ["Kwangua, osha, suuza", "Ua vijidudu kwa nguvu sahihi kwa muda wa kugusana", "Acha ikauke hewani; bila taulo"] }
          ],
          sources: [
            { name: "FDA: Mizio ya chakula (vizio tisa vikuu vya chakula)", url: "https://www.fda.gov/food/nutrition-food-labeling-and-critical-foods/food-allergies" }
          ],
          tryIt: "Chagua chakula cha menyu unachokijua, kama cheeseburger au chakula cha kukaanga haraka (stir-fry). Orodhesha vizio vipi kati ya vile tisa vikuu ambavyo huenda kina. Kisha andika hatua sita utakazofuata kusafisha na kuua vijidudu kwenye meza ya maandalizi baada ya kukitengeneza.",
          youCanNow: "kushughulikia oda ya mzio kwa usalama na kusafisha na kuua vijidudu kwenye sehemu kwa mpangilio sahihi.",
          quickCheck: [
            { objective: "O3", q: "Kwa nini lazima usafishe sehemu kabla ya kuua vijidudu?", options: ["Dawa ya kuua vijidudu haifanyi kazi vizuri kwenye sehemu chafu", "Kusafisha kunaifanya dawa inukie vizuri zaidi", "Kuua vijidudu kunaondoa mafuta peke yake", "Kusafisha kunahitajika mara moja tu kwa wiki"], answer: 0, why: "Dawa ya kuua vijidudu inahitaji sehemu safi ili kupunguza vijidudu hadi kiwango salama." },
            { objective: "O3", q: "Mgeni anauliza kama chakula kina ufuta na huna uhakika. Unasema nini?", options: ["\"Kitakuwa sawa tu.\"", "\"Sina uhakika; ngoja nikague na mpishi mkuu na lebo.\"", "\"Ondoa tu ufuta mwenyewe.\"", "\"Hakuna mtu mwenye mzio wa ufuta.\""], answer: 1, why: "Kamwe usibahatishe kuhusu vizio; kagua mapishi na lebo pamoja na mpishi mkuu au meneja." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Mikono safi na chakula safi",
        questions: [
          { objective: "O1", q: "Unapaswa kusugua mikono kwa muda gani unaponawa?", options: ["Sekunde 3", "Angalau sekunde 20", "Hadi ionekane safi tu", "Dakika 2 kwenye sinki la vyombo"], answer: 1, why: "Kusugua kwa angalau sekunde 20 kunaondoa vijidudu; tumia sinki la kunawia mikono." },
          { objective: "O1", q: "Mpishi anahitaji kuweka saladi juu ya baga iliyopikwa. Atumie nini?", options: ["Mikono mitupu, iliyonawa kwanza", "Glavu zilezile alizotumia kwa nyama mbichi za baga", "Glavu safi, koleo au chombo", "Aproni yake"], answer: 2, why: "Chakula kilicho tayari kuliwa hakipaswi kuguswa kwa mikono mitupu." },
          { objective: "O2", q: "Rafu ipi ni sahihi kwa kuku mbichi kwenye friji?", options: ["Rafu ya chini kabisa", "Rafu ya juu", "Juu ya saladi", "Karibu na mkate"], answer: 0, why: "Kuku anahitaji joto la juu zaidi la kupika, kwa hiyo anakaa chini ambapo majimaji yake hayawezi kudondokea chakula kingine." },
          { objective: "O3", q: "Mgeni anasema ana mzio wa ufuta. Unafanya nini kwanza?", options: ["Kumwambia ufuta si kizio", "Kuokota mbegu za ufuta kwenye mkate", "Kubahatisha kwamba chakula ni sawa", "Kumwambia meneja au mpishi mkuu na kukagua kila kiungo"], answer: 3, why: "Mizio lazima ichukuliwe kwa uzito na ikaguliwe, kamwe isibahatishwe." },
          { objective: "O3", q: "Mpangilio sahihi wa kushughulikia meza ya maandalizi ni upi?", options: ["Ua vijidudu, kisha osha", "Kwangua, osha, suuza, ua vijidudu, acha ikauke hewani", "Panguse kwa taulo kavu tu", "Suuza, kisha kausha kwa taulo"], answer: 1, why: "Dawa ya kuua vijidudu inafanya kazi tu kwenye sehemu iliyosafishwa na kusuuzwa kwanza." }
        ]
      }
    },
    {
      name: "Sura 2: Muda na joto",
      lessons: [
        {
          objectives: ["O4"],
          title: "Eneo la hatari la joto",
          minutes: 5,
          goal: "Weka chakula cha baridi kikiwa baridi na cha moto kikiwa moto, na kagua joto kwa kipimajoto.",
          text: [
            "Vijidudu vinazaliana haraka zaidi kati ya 41°F na 135°F. Kiwango hiki kinaitwa eneo la hatari la joto. Katika huduma ya chakula, FDA Food Code (kanuni ya chakula ya FDA) inasema hifadhi chakula cha baridi kwa 41°F au chini na chakula cha moto kwa 135°F au juu. (Ushauri wa kupika nyumbani kutoka FDA na USDA unatumia 40°F na 140°F; kazini, fuata kanuni ambayo idara yako ya afya inatumia.)",
            "Vyakula vinavyohitaji udhibiti huu vinaitwa vyakula vya TCS (time/temperature control for safety, yaani udhibiti wa muda na joto kwa usalama): nyama, kuku, samaki, mayai, maziwa na bidhaa zake, wali uliopikwa, maharagwe na viazi vilivyopikwa, matikiti yaliyokatwa, nyanya zilizokatwa, mboga za majani zilizokatwa, tofu na chipukizi, miongoni mwa vingine.",
            "Tumia kipimajoto cha chakula kilicho safi na kilichouawa vijidudu. Weka ncha yake kwenye sehemu nene zaidi ya chakula, bila kugusa mfupa wala sufuria. Kagua joto la kuhifadhi kwa ratiba, kwa mfano kila saa 2, na liandike kwenye daftari la kumbukumbu. Rekebisha kipimajoto (calibrate) jinsi jikoni yako inavyokufundisha.",
            "Yeyusha barafu ya chakula kwa usalama: ndani ya friji, chini ya maji baridi yanayotiririka, kwenye microwave kama kitapikwa mara moja, au kama sehemu ya kupika. Kamwe usiyeyushe chakula juu ya kaunta."
          ],
          steps: ["Safisha na ua vijidudu kwenye kipimajoto.", "Weka ncha kwenye sehemu nene zaidi ya chakula.", "Chakula cha baridi: 41°F au chini. Chakula cha moto: 135°F au juu.", "Andika kipimo na saa kwenye daftari la kumbukumbu.", "Chakula kikiwa kwenye eneo la hatari, mwambie meneja wako."],
          words: [["Eneo la hatari la joto", "41°F hadi 135°F katika huduma ya chakula: kiwango ambapo vijidudu vinazaliana haraka zaidi."], ["Chakula cha TCS", "chakula kinachohitaji udhibiti wa muda na joto ili kibaki salama, kama nyama, maziwa, wali uliopikwa na tikiti lililokatwa."], ["Kurekebisha (calibrate)", "kukagua na kurekebisha kipimajoto ili kisome sahihi."]],
          slides: [
            { title: "Eneo la hatari", bullets: ["41°F hadi 135°F (FDA Food Code)", "Chakula cha baridi: 41°F au chini", "Chakula cha moto: 135°F au juu"] },
            { title: "Vyakula vya TCS", bullets: ["Nyama, kuku, samaki, mayai, maziwa", "Wali, maharagwe na viazi vilivyopikwa", "Matikiti, nyanya na mboga za majani zilizokatwa"] },
            { title: "Tumia kipimajoto", bullets: ["Safi na kilichouawa vijidudu", "Sehemu nene zaidi, bila kugusa mfupa wala sufuria", "Kagua na andika kwa ratiba"] },
            { title: "Yeyusha barafu kwa usalama", bullets: ["Ndani ya friji au chini ya maji baridi yanayotiririka", "Kwenye microwave kama kitapikwa mara moja", "Kamwe si juu ya kaunta"] }
          ],
          sources: [
            { name: "FDA: Joto muhimu kwa usalama wa mayai katika huduma ya chakula (41°F kuhifadhi baridi, 135°F kuhifadhi moto)", url: "https://www.fda.gov/food/retail-food-industryregulatory-assistance-training/key-temperatures-egg-safety-food-service-operations-and-retail-food-stores" },
            { name: "FDA: Food Code 2022 (kanuni ya chakula)", url: "https://www.fda.gov/food/fda-food-code/food-code-2022" }
          ],
          tryIt: "Tumia kipimajoto cha chakula nyumbani au kazini kukagua joto ndani ya friji yako (kiweke kwenye glasi ya maji ndani ya friji kwa dakika chache) na la chakula kimoja cha moto. Andika kama kila kimoja ni salama kwa kuhifadhi katika huduma ya chakula.",
          youCanNow: "kutaja eneo la hatari la joto, kuweka chakula cha TCS nje yake, na kukagua joto ipasavyo.",
          quickCheck: [
            { objective: "O4", q: "Chakula cha TCS kina maana gani?", options: ["Chakula kinachoandaliwa baridi kila mara", "Chakula kinachokuja kwenye kopo", "Chakula kinachohitaji udhibiti wa muda na joto kwa usalama", "Chakula kinachouzwa madukani tu"], answer: 2, why: "Chakula cha TCS kinahitaji udhibiti wa muda na joto kwa sababu vijidudu vinaweza kuzaliana ndani yake." },
            { objective: "O4", q: "Sufuria ya maharagwe inayohifadhiwa moto inasoma 120°F katika ukaguzi wa saa 2. Unafanya nini?", options: ["Kuandika na kuendelea kuhudumia", "Kuongeza maharagwe zaidi juu", "Kuzima kipasha-joto", "Kumwambia meneja wako, kwa sababu iko kwenye eneo la hatari"], answer: 3, why: "Chakula cha moto lazima kibaki kwa 135°F au juu, kwa hiyo kipimo cha 120°F kiko kwenye eneo la hatari." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Joto la kupika, kupasha moto tena na kupoza",
          minutes: 6,
          goal: "Pika, pasha moto tena na poza chakula kwa joto salama la FDA Food Code.",
          text: [
            "Kupika hadi joto sahihi la ndani kunaua vijidudu. Joto kuu la kupika la FDA Food Code kwa huduma ya chakula ni: kuku (kuku, bata mzinga) na vyakula vilivyojazwa: 165°F kwa chini ya sekunde 1 (papo hapo). Nyama ya kusaga kama ya hamburger, na mayai yatakayohifadhiwa kwa baadaye: 155°F kwa sekunde 17. Vipande vizima vya nyama ya ng'ombe na nguruwe, samaki, na mayai yanayopikwa kuhudumiwa mara moja: 145°F kwa sekunde 15.",
            "Kupasha moto tena: chakula kilichopikwa ulichokipoza na utakachohifadhi moto lazima kipashwe moto tena hadi 165°F kwa sekunde 15 ndani ya saa 2. Chakula kinachopikwa kwenye microwave kinapaswa kufikia 165°F, kikorogwe na kufunikwa, na kiachwe kwa dakika 2.",
            "Kupoza: chakula kilichopikwa lazima kipoe kutoka 135°F hadi 70°F ndani ya saa 2, na kutoka 135°F hadi 41°F ndani ya saa 6 kwa jumla. Poza haraka kwa kugawa chakula kwenye sufuria zisizo na kina, kutumia beseni la maji ya barafu au fimbo ya barafu, na kukoroga. Kamwe usiache sufuria kubwa ipoe juu ya kaunta.",
            "Idara ya afya ya eneo lako inaweza kutumia toleo jipya zaidi au la zamani zaidi la Food Code, na ushauri wa kupika nyumbani ni tofauti (kwa mfano 160°F kwa nyama ya ng'ombe ya kusaga nyumbani). Kwa mtihani au kazi, jifunze namba ambazo kozi yako na idara yako ya afya zinatumia."
          ],
          steps: ["Kagua sehemu nene zaidi kwa kipimajoto.", "Kuku na vyakula vilivyojazwa: 165°F.", "Nyama ya kusaga na mayai ya kuhifadhi kwa baadaye: 155°F kwa sekunde 17.", "Vipande vizima, samaki, mayai ya kuhudumia mara moja: 145°F kwa sekunde 15.", "Pasha moto tena kwa kuhifadhi moto: 165°F kwa sekunde 15 ndani ya saa 2.", "Poza: 135°F hadi 70°F ndani ya saa 2, hadi 41°F ndani ya saa 6 kwa jumla."],
          words: [["Joto la ndani", "joto katika sehemu nene zaidi ya chakula, linalopimwa kwa kipimajoto."], ["Fimbo ya barafu (ice wand)", "kasia ya plastiki iliyofungwa, iliyojazwa barafu au maji na kugandishwa, inayotumiwa kukoroga na kupoza chakula haraka."], ["Kupoza kwa hatua mbili", "kupoza chakula kilichopikwa hadi 70°F ndani ya saa 2, kisha hadi 41°F ndani ya saa 6 kwa jumla."]],
          slides: [
            { title: "Joto la kupika (Food Code)", bullets: ["Kuku na vyakula vilivyojazwa: 165°F, papo hapo", "Nyama ya kusaga: 155°F kwa sekunde 17", "Vipande vizima, samaki: 145°F kwa sekunde 15"] },
            { title: "Kupasha moto tena kwa kuhifadhi moto", bullets: ["165°F kwa sekunde 15", "Ndani ya saa 2"] },
            { title: "Kupoza kwa hatua mbili", bullets: ["135°F hadi 70°F ndani ya saa 2", "Hadi 41°F ndani ya saa 6 kwa jumla", "Sufuria zisizo na kina, beseni la barafu, fimbo ya barafu, kukoroga"] },
            { title: "Jua namba zako", bullets: ["Idara za afya zinaweza kutumia matoleo tofauti ya Food Code", "Ushauri wa nyumbani ni tofauti: 160°F kwa nyama ya ng'ombe ya kusaga", "Jifunza kozi yako na kaunti yako zinatumia nini"] }
          ],
          sources: [
            { name: "FDA: Taratibu za kusawazisha maafisa wa ukaguzi wa usalama wa chakula (joto la kupika, kupasha moto tena na kupoza la Food Code)", url: "https://www.fda.gov/media/155354/download" },
            { name: "FDA: Joto muhimu kwa usalama wa mayai katika huduma ya chakula", url: "https://www.fda.gov/food/retail-food-industryregulatory-assistance-training/key-temperatures-egg-safety-food-service-operations-and-retail-food-stores" }
          ],
          tryIt: "Tengeneza kadi ya mfukoni yenye joto la kupika, kupasha moto tena, kuhifadhi na kupoza kutoka somo hili. Kisha panga jinsi utakavyopoza haraka sufuria nzima ya chili (mchuzi wa nyama na maharagwe), hatua kwa hatua.",
          youCanNow: "kupika, kupasha moto tena, kuhifadhi na kupoza chakula kwa joto salama la Food Code na kulikagua kwa kipimajoto.",
          quickCheck: [
            { objective: "O5", q: "Joto la kupika katika huduma ya chakula kwa kipande kizima cha nyama ya ng'ombe au nguruwe ni lipi?", options: ["145°F kwa sekunde 15", "120°F kwa dakika 1", "155°F kwa sekunde 17", "165°F kwa sekunde 15"], answer: 0, why: "Vipande vizima vya nyama ya ng'ombe na nguruwe vinafikia 145°F kwa sekunde 15 chini ya FDA Food Code." },
            { objective: "O5", q: "Sufuria kubwa iliyojaa wali lazima ipozwe. Hatua bora ya kwanza ni ipi?", options: ["Kuacha sufuria juu ya kaunta usiku kucha", "Kuweka sufuria ya moto moja kwa moja kwenye friji ikiwa na mfuniko", "Kugawa wali kwenye sufuria zisizo na kina", "Kuifunika kwa taulo"], answer: 2, why: "Sufuria zisizo na kina zinaruhusu chakula kupoa na kupita eneo la hatari haraka vya kutosha." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kupata kadi yako ya mhudumu wa chakula na kufaulu mtihani",
          minutes: 5,
          goal: "Tafuta sheria ya kadi ya mhudumu wa chakula ya eneo lako na jiandae kwa mtihani.",
          text: [
            "Sheria za kadi ya mhudumu wa chakula zinatofautiana kwa jimbo na kaunti. Majimbo mengine yanataka kadi kwa wafanyakazi wengi wa chakula; mengine yanaziachia kaunti au miji; mengine hayana sheria ya jumla. Idara ya afya ya eneo lako au ofisi ya afya ya mazingira itakuambia kinachohusika mahali unapofanya kazi.",
            "Mfano: California. Chini ya California Health and Safety Code kifungu 113948, wahudumu wa chakula lazima wapate kadi ya mhudumu wa chakula ya California ndani ya siku 30 baada ya kuajiriwa na kituo cha chakula. Kadi inadumu miaka mitatu, na kozi lazima itoke kwa mtoa mafunzo aliyeidhinishwa na American National Standards Institute (ANSI). Baadhi ya maeneo yamesamehewa, kama maduka fulani ya vyakula na kantini za shule, kwa hiyo uliza kaunti yako.",
            "Kadi ya mhudumu wa chakula ni tofauti na cheti cha meneja wa chakula (kama mtihani wa ServSafe Manager). Kozi za mhudumu wa chakula ni fupi na zinafundisha mambo ya msingi yaliyo katika kozi hii. Cheti cha meneja ni kirefu zaidi, kinaingia ndani zaidi, na kwa kawaida kinahitajika kwa mtu anayesimamia.",
            "Kujiandaa: chukua kozi iliyoidhinishwa, pitia kila mada katika kozi hii, tumia kadi ya mfukoni uliyotengeneza, na fanya mazoezi kwa maswali unayoandika mwenyewe au yanayokuja na kozi yako. Soma kila swali kwa makini: maneno kama \"kwanza\", \"bora\" na \"kamwe\" ni muhimu."
          ],
          steps: ["Tafuta jina la jimbo au kaunti yako pamoja na \"food handler card\" na upate ukurasa wa idara ya afya (mara nyingi unaishia na .gov).", "Andika muda wa mwisho baada ya kuajiriwa, kadi inadumu muda gani, na kozi zipi zinakubalika.", "Chagua kozi iliyoidhinishwa kutoka orodha ambayo idara yako ya afya inaonyesha.", "Pitia kunawa mikono, uchafuzi mtambuka, joto, vizio na kusafisha.", "Chukua kozi na mtihani, na weka nakala ya kadi yako."],
          words: [["Kadi ya mhudumu wa chakula (food handler card)", "uthibitisho kwamba umemaliza kozi ya msingi ya usalama wa chakula; inahitajika kwa wafanyakazi wa chakula katika baadhi ya majimbo na kaunti."], ["ANSI", "American National Standards Institute, taasisi inayoidhinisha watoa mafunzo ya usalama wa chakula nchini Marekani."], ["Cheti cha meneja wa chakula", "sifa ya juu zaidi ya usalama wa chakula, kwa kawaida kwa mtu anayesimamia jikoni."]],
          slides: [
            { title: "Sheria zinatofautiana kwa mahali", bullets: ["Majimbo mengine yanataka kadi; mengine yanaziachia kaunti", "Idara ya afya ya eneo lako inajua"] },
            { title: "Mfano: California", bullets: ["Kadi ndani ya siku 30 baada ya kuajiriwa", "Inadumu miaka mitatu", "Kozi kutoka kwa mtoa mafunzo aliyeidhinishwa na ANSI"] },
            { title: "Kadi ya mhudumu dhidi ya cheti cha meneja", bullets: ["Mhudumu: fupi, mambo ya msingi", "Meneja: ndefu zaidi, kwa mtu anayesimamia"] },
            { title: "Jiandae kwa mtihani", bullets: ["Chukua kozi iliyoidhinishwa", "Tumia kadi yako ya mfukoni ya joto", "Angalia maneno kama kwanza, bora, kamwe"] }
          ],
          sources: [
            { name: "Kaunti ya Sonoma, California: Kadi ya mhudumu wa chakula (siku 30, miaka mitatu, ANSI)", url: "https://sonomacounty.gov/Health/Environmental-Health/Food-Program/Food-Handler-Card/" },
            { name: "Idara ya Afya ya Umma ya California (CDPH): Mafunzo ya usalama wa chakula cha rejareja (HSC 113948)", url: "https://www.cdph.ca.gov/Programs/CEH/DFDCS/CDPH%20Document%20Library/FDB/FoodSafetyProgram/RetailFood/RetailFoodSafetyTraining.pdf" }
          ],
          tryIt: "Kazi ya mwisho: andika Orodha yako ya Zamu Salama (kunawa mikono, kuhifadhi, joto, kupoza, hatua za mzio, hatua za kusafisha na kuua vijidudu, dalili za ugonjwa za kuripoti). Kisha tafuta sheria ya kadi ya mhudumu wa chakula ya jimbo au kaunti yako na uandike juu kabisa muda wa mwisho, kadi inadumu muda gani na kozi zipi zinakubalika.",
          youCanNow: "kupata sheria ya kadi ya mhudumu wa chakula mahali unapofanya kazi, kuchagua kozi inayokubalika, na kujiandaa kwa mtihani.",
          quickCheck: [
            { objective: "O6", q: "Kuna tofauti gani kati ya kadi ya mhudumu wa chakula na cheti cha meneja wa chakula?", options: ["Ni kitu kimoja", "Kadi ya mhudumu inafundisha mambo ya msingi; cheti cha meneja kinaingia ndani zaidi kwa mtu anayesimamia", "Kadi ya mhudumu ni kwa mameneja tu", "Cheti cha meneja ni kifupi zaidi"], answer: 1, why: "Kozi za mhudumu wa chakula zinafundisha mambo ya msingi; cheti cha meneja ni kirefu zaidi na kwa kawaida kinahitajika kwa mtu anayesimamia." },
            { objective: "O6", q: "Unaanza kazi mpya jikoni wiki ijayo. Unapataje sheria ya kadi yako ya mhudumu wa chakula?", options: ["Kumuuliza rafiki wa jimbo lingine", "Kudhani hakuna sheria", "Kununua kozi ya kwanza unayoiona mtandaoni", "Kuangalia ukurasa wa idara ya afya ya jimbo au kaunti yako"], answer: 3, why: "Sheria zinatofautiana kwa jimbo na kaunti, kwa hiyo idara ya afya ya eneo lako ndiyo chanzo." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Muda na joto",
        questions: [
          { objective: "O4", q: "Katika huduma ya chakula, eneo la hatari la joto chini ya FDA Food Code ni lipi?", options: ["0°F hadi 32°F", "41°F hadi 135°F", "165°F hadi 212°F", "70°F hadi 80°F tu"], answer: 1, why: "Vijidudu vinazaliana haraka zaidi kati ya 41°F na 135°F." },
          { objective: "O5", q: "Joto la chini kabisa la kupika kuku katika huduma ya chakula ni lipi?", options: ["145°F", "135°F", "155°F", "165°F"], answer: 3, why: "Kuku lazima afikie 165°F." },
          { objective: "O5", q: "Sufuria kubwa ya supu lazima ipozwe. Njia salama zaidi ni ipi?", options: ["Kuigawa kwenye sufuria zisizo na kina na kutumia beseni la maji ya barafu", "Kuiacha juu ya kaunta usiku kucha", "Kuweka sufuria nzima ya moto ndani kabisa ya friji ikiwa na mfuniko", "Kuongeza maji ya moto"], answer: 0, why: "Sufuria zisizo na kina na barafu zinapoza chakula na kukipitisha eneo la hatari haraka." },
          { objective: "O5", q: "Chakula kilichopikwa lazima kipoe kutoka 135°F hadi 70°F ndani ya:", options: ["Saa 6", "Saa 12", "Saa 2", "Saa 24"], answer: 2, why: "Hatua ya kwanza ya kupoza ni 135°F hadi 70°F ndani ya saa 2." },
          { objective: "O6", q: "California, mhudumu mpya wa chakula lazima apate kadi ya mhudumu wa chakula ndani ya:", options: ["Siku 30 baada ya kuajiriwa", "Mwaka mmoja", "Kabla ya umri wa miaka 21", "Haihitajiki kamwe"], answer: 0, why: "Sheria ya California ni siku 30 baada ya kuajiriwa; kadi inadumu miaka mitatu." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Mhudumu wa Chakula na Maandalizi ya Mtihani wa ServSafe",
    questions: [
      { objective: "O1", q: "Wahudumu wa chakula wanapaswa kunawa mikono wapi?", options: ["Sinki la kuandalia chakula", "Sinki la vyombo", "Sinki la kunawia mikono", "Sinki lolote lililo tupu"], answer: 2, why: "Tumia sinki la kunawia mikono tu, ili chakula na vyombo visichafuliwe." },
      { objective: "O1", q: "Ni lini lazima unawe mikono kabla ya kuvaa glavu?", options: ["Kamwe; glavu zinatosha", "Kila mara", "Mara moja tu kwa siku", "Baada ya chakula cha mchana tu"], answer: 1, why: "Glavu hazichukui nafasi ya kunawa mikono." },
      { objective: "O6", q: "Mpishi anaharisha na alitapika asubuhi hii. Afanye nini?", options: ["Amwambie meneja kabla ya kufanya kazi na chakula", "Afanye kazi lakini avae glavu mbili", "Anywe maji na aendelee kupika", "Asiseme chochote"], answer: 0, why: "Dalili hizi lazima ziripotiwe; huenda mfanyakazi akahitaji kukaa mbali na chakula." },
      { objective: "O2", q: "Kipi ni chakula kilicho tayari kuliwa?", options: ["Nyama mbichi ya ng'ombe ya kusaga", "Kuku mbichi", "Kamba wabichi", "Nyanya iliyokatwa vipande kwa sandwichi"], answer: 3, why: "Italiwa bila kupikwa tena, kwa hiyo isiguswe kwa mikono mitupu." },
      { objective: "O1", q: "Una kidonda kidogo kidoleni. Unapaswa:", options: ["Kukipuuza", "Kukifunika kwa bendeji na kuvaa glavu", "Kuvaa bendeji tu", "Kwenda nyumbani kwa wiki moja"], answer: 1, why: "Bendeji pamoja na glavu vinakiweka kidonda mbali na chakula." },
      { objective: "O2", q: "Kipi ni uchafuzi mtambuka?", options: ["Kupika kuku hadi 165°F", "Kunawa mikono kwa sekunde 20", "Kukata kuku mbichi, kisha saladi, kwenye ubao uleule ambao haujauawa vijidudu", "Kuweka lebo ya tarehe kwenye chakula"], answer: 2, why: "Vijidudu vinahama kutoka kuku mbichi hadi saladi." },
      { objective: "O2", q: "Kwenye friji, nini kinakaa kwenye rafu ya JUU?", options: ["Chakula kilicho tayari kuliwa kama matunda yaliyokatwa", "Kuku mbichi", "Nyama mbichi ya ng'ombe ya kusaga", "Kemikali"], answer: 0, why: "Chakula kilicho tayari kuliwa kinakaa juu ya vyakula vibichi ili kisidondokewe na kitu." },
      { objective: "O2", q: "Kemikali za kusafishia zinapaswa kuhifadhiwa wapi?", options: ["Kwenye rafu juu ya chakula", "Karibu na meza ya saladi", "Kwenye vyombo vitupu vya chakula", "Mbali na chakula na chini yake"], answer: 3, why: "Kuhifadhi kemikali mbali na chini kunazuia zisidondoke au kumwagika kwenye chakula." },
      { objective: "O3", q: "FDA inaorodhesha vizio vikuu vya chakula vingapi?", options: ["Vitano", "Tisa", "Kumi na mbili", "Vitatu"], answer: 1, why: "Maziwa, mayai, samaki, viumbe wa baharini wenye magamba, karanga za miti, njugu, ngano, soya na ufuta." },
      { objective: "O3", q: "Mgeni mwenye mzio wa njugu anaagiza chakula. Hatua ipi ni KOSA?", options: ["Kumwambia mpishi mkuu", "Kukagua lebo ya kila kiungo", "Kutumia vifaa safi vilivyouawa vijidudu", "Kukwangua njugu kutoka chakula kilichokamilika na kukihudumia"], answer: 3, why: "Kuondoa kizio hakufanyi chakula kuwa salama; tengeneza kipya kwa vifaa safi." },
      { objective: "O3", q: "Kuna tofauti gani kati ya kusafisha na kuua vijidudu?", options: ["Kusafisha kunaondoa uchafu; kuua vijidudu kunapunguza vijidudu hadi kiwango salama", "Ni kitu kimoja", "Kuua vijidudu kunaondoa uchafu; kusafisha kunaua vijidudu", "Kusafisha ni kwa sakafu tu"], answer: 0, why: "Unasafisha kwanza, kisha unaua vijidudu." },
      { objective: "O3", q: "Baada ya kuua vijidudu kwenye ubao wa kukatia, unapaswa:", options: ["Kuukausha kwa taulo", "Kusuuza dawa mara moja", "Kuuacha ukauke hewani", "Kuuweka moja kwa moja chini ya nyama mbichi"], answer: 2, why: "Kukausha hewani kunaruhusu dawa ifanye kazi kwa muda wake wa kugusana bila kuongeza vijidudu kutoka taulo." },
      { objective: "O3", q: "Unajuaje kama mchanganyiko wa dawa ya kuua vijidudu una nguvu sahihi?", options: ["Kwa harufu yake", "Kuukagua kwa vipande vya kupimia ambavyo jikoni yako inatumia", "Kwa rangi yake", "Kuongeza zaidi ili kuwa salama"], answer: 1, why: "Vipande vya kupimia vinaonyesha nguvu; dhaifu mno haitafanya kazi, kali mno inaweza kuwa si salama." },
      { objective: "O4", q: "Katika huduma ya chakula, chakula cha TCS cha baridi kinapaswa kuhifadhiwa kwa joto gani au chini?", options: ["50°F", "60°F", "45°F", "41°F"], answer: 3, why: "Food Code inasema kuhifadhi baridi ni 41°F au chini." },
      { objective: "O4", q: "Chakula cha TCS cha moto kwenye bufee lazima kihifadhiwe kwa:", options: ["135°F au juu", "100°F au juu", "120°F au juu", "Joto la chumba"], answer: 0, why: "Kuhifadhi moto ni 135°F au juu chini ya Food Code." },
      { objective: "O4", q: "Njia ipi ni salama ya kuyeyusha barafu ya kuku aliyegandishwa?", options: ["Juu ya kaunta usiku kucha", "Ndani ya friji", "Kwenye maji ya uvuguvugu juu ya kaunta", "Juani"], answer: 1, why: "Kuyeyusha ndani ya friji kunakiweka nje ya eneo la hatari." },
      { objective: "O5", q: "Vipande vya nyama ya ng'ombe ya kusaga (baga) katika mgahawa lazima vifikie:", options: ["135°F", "145°F kwa sekunde 15", "155°F kwa sekunde 17", "100°F"], answer: 2, why: "Food Code inaweka 155°F kwa sekunde 17 kwa nyama ya kusaga." },
      { objective: "O5", q: "Kipande cha nyama ya nguruwe au kipande cha samaki aina ya salmon lazima kifikie:", options: ["165°F kwa sekunde 15", "120°F", "100°F", "145°F kwa sekunde 15"], answer: 3, why: "Vipande vizima na samaki ni 145°F kwa sekunde 15." },
      { objective: "O5", q: "Chili iliyobaki iliyopozwa jana itawekwa kwenye chombo cha kuhifadhi moto. Ipashe moto tena hadi:", options: ["165°F kwa sekunde 15 ndani ya saa 2", "135°F kwa saa 6", "100°F", "Hadi ipate uvuguvugu tu"], answer: 0, why: "Chakula kilichopikwa na kupozwa hapo hapo kinapashwa moto tena hadi 165°F kwa sekunde 15 ndani ya saa 2 kwa kuhifadhi moto." },
      { objective: "O6", q: "Unapata wapi sheria ya kadi ya mhudumu wa chakula ya eneo lako?", options: ["Ujumbe kwenye mitandao ya kijamii", "Makisio ya mfanyakazi mwenzako", "Idara ya afya ya jimbo au kaunti yako", "Tovuti yoyote ya mitihani"], answer: 2, why: "Sheria zinatofautiana kwa jimbo na kaunti, kwa hiyo idara ya afya ya eneo lako ndiyo chanzo rasmi." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi amepiga hatua kiasi gani
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [0, 2, 5, 8, 10, 13, 16, 18, 19]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Kunawa mikono", objective: "O1", notYet: "Hatua au nyakati za kunawa mikono hazipo au si sahihi.", meets: "Anaorodhesha hatua zote za kunawa mikono na angalau nyakati sita za kunawa.", exceeds: "Pia anasema lini kubadilisha glavu na jinsi ya kushika chakula kilicho tayari kuliwa." },
      { name: "Kuhifadhi na uchafuzi mtambuka", objective: "O2", notYet: "Chakula kibichi kimehifadhiwa juu ya chakula kilicho tayari kuliwa, au hakuna vifaa tofauti.", meets: "Anaonyesha mpangilio sahihi wa rafu na mbao na visu tofauti au vilivyouawa vijidudu.", exceeds: "Pia anataja kuweka lebo yenye jina na tarehe na kuhifadhi kemikali chini ya chakula." },
      { name: "Hatua za mzio na kuua vijidudu", objective: "O3", notYet: "Hatua za mzio au mpangilio wa kusafisha na kuua vijidudu haupo.", meets: "Anaorodhesha hatua za mzio na mpangilio: kwangua, osha, suuza, ua vijidudu, acha ikauke hewani.", exceeds: "Anataja vipande vya kupimia na muda wa kugusana ulio kwenye lebo ya dawa." },
      { name: "Joto la kuhifadhi", objective: "O4", notYet: "Joto la kuhifadhi halipo au si sahihi.", meets: "Baridi kwa 41°F au chini na moto kwa 135°F au juu, likikaguliwa kwa kipimajoto.", exceeds: "Anaongeza ratiba ya ukaguzi na daftari la kumbukumbu." },
      { name: "Kupika na kupoza", objective: "O5", notYet: "Namba za kupika au kupoza hazipo au si sahihi.", meets: "Anatoa joto sahihi la kupika na mipaka yote miwili ya muda wa kupoza.", exceeds: "Anaongeza sheria ya kupasha moto tena na jinsi ya kupoza chakula haraka." },
      { name: "Ugonjwa na sheria ya kadi ya eneo", objective: "O6", notYet: "Hakuna dalili za ugonjwa zilizoorodheshwa, au hakuna sheria ya kadi juu.", meets: "Anaorodhesha dalili za kuripoti na muda wa mwisho wa kadi wa eneo, muda wake na kozi zinazokubalika.", exceeds: "Anataja ukurasa wa idara ya afya ambapo sheria ilipatikana." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaopata kadi ya mhudumu wa chakula kutoka kozi iliyoidhinishwa ndani ya siku 60",
      "Wanafunzi wanaopata au kubaki na kazi ya huduma ya chakula ndani ya siku 90 (utafiti wa kufuatilia)",
      "Waajiri washirika wanaripoti makosa machache ya usalama wa chakula katika ukaguzi wa afya au ukaguzi wa zamu"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta ya kusoma masomo",
      "Sinki lenye sabuni kwa mazoezi ya kunawa mikono",
      "Kipimajoto cha chakula (si lazima lakini kinasaidia)",
      "Karatasi na kalamu kwa kadi ya mfukoni na Orodha ya Zamu Salama",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Onyesha kunawa mikono moja kwa moja na pimeni sekunde 20 pamoja.",
      "Tumia picha au vyombo vitupu kwa zoezi la rafu za friji; hakuna chakula kibichi kinachohitajika.",
      "Wakumbushe wanafunzi kwamba namba za kupika nyumbani ni tofauti na namba za huduma ya chakula, na kanuni ya idara yao ya afya ndiyo inayohesabika.",
      "Msaidie kila mwanafunzi kutafuta sheria ya kadi ya jimbo au kaunti yake; inatofautiana kutoka mahali hadi mahali.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
