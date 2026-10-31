"use strict";

// Koach Learn course (Swahili translation of shared/electrical-basics.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "electrical-basics-sw",
  lang: "sw",
  translationOf: "electrical-basics",
  category: "Workforce Development",
  name: "Misingi ya Kazi ya Ufundi Umeme",
  skills: "Kutumia sheria ya Ohm na fomula ya nguvu, Kusoma mchoro rahisi wa saketi, Kufuata lockout/tagout na kupima kabla ya kugusa, Kusoma tepu ya kupimia na multimeter, Kupanga njia yako ya kuingia mafunzo ya uanagenzi wa umeme",
  outcome: "kufanya hesabu za msingi za umeme, kusoma saketi rahisi, kueleza hatua za usalama zinazowaweka mafundi umeme hai, kupima vipimo kwa usahihi, na kufuata mpango wenye tarehe wa kuomba nafasi ya uanagenzi wa umeme na kuelekea kupata leseni.",
  about: [
    "Mafundi umeme huweka nyaya za umeme katika nyumba, ofisi, viwanda, mifumo ya nishati ya jua na vituo vya kuchaji magari. Wengi hujifunza kazi hii katika uanagenzi (apprenticeship) wa kulipwa, na majimbo mengi ya Marekani yanatoa leseni kwa mafundi umeme. Kozi hii ni hatua ya kwanza: ni kwa watafuta kazi, wanajeshi wastaafu, vijana, watu wanaorudi nyumbani kutoka gerezani, wahamiaji na watu wazima wanaorudi kusoma wanaotaka kuingia uanagenzi wakiwa tayari.",
    "Utajifunza volti, ampea, ohm na wati ni nini, na kufanya hesabu kwa sheria ya Ohm. Utasoma mchoro rahisi wa saketi na kujifunza kwa nini nyumba zinawekwa nyaya jinsi zilivyo. Kisha utajifunza hatua za usalama ambazo kila fundi umeme anafuata, zana na ujuzi wa kupima ambao wanagenzi hutumia siku ya kwanza, na jinsi ya kuomba nafasi ya uanagenzi.",
    "Kozi hii inakuandaa. Haikupi leseni wala cheti, na haikuombi kamwe kufanya kazi kwenye umeme unaowaka (live). Kazi ya umeme ni hatari na inaweza kuua. Kuweka nyaya halisi kunafundishwa tu katika programu yenye msimamizi, ukiwa na vifaa sahihi vya kujikinga. Leseni zinatoka kwa jimbo au jiji lako.",
    "Kila somo linachukua kama dakika tano, likiwa na kazi ya \"Jaribu sasa\" na maswali mawili mafupi. Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni. Kazi yako ya mwisho ni kifurushi chako mwenyewe cha kuanzia kazi ya umeme, chenye mpango wenye tarehe."
  ],
  finalTask: "Tengeneza kifurushi chako cha kuanzia kazi ya umeme: (1) maswali matano ya sheria ya Ohm au ya nguvu unayoandika mwenyewe, yaliyotatuliwa na hatua zikionyeshwa; (2) mchoro wa saketi rahisi sambamba (parallel) wenye chanzo cha umeme, breaker, swichi, mizigo miwili, waya wa hot, neutral na ground, vyote vikiwa na majina; (3) hatua sita za lockout/tagout zimeandikwa kwa mpangilio kwenye kadi; (4) vipimo vitano vya vitu nyumbani kwa tepu ya kupimia hadi 1/16 inchi iliyo karibu; na (5) mpango wenye tarehe wa kuomba nafasi katika programu mbili za uanagenzi wa umeme, pamoja na masharti ya leseni ya jimbo lako kutoka ukurasa rasmi.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima wanaotaka kazi ya ufundi bila shahada ya miaka minne: watafuta kazi, wanajeshi wastaafu, vijana, watu wanaorudi nyumbani kutoka gerezani, wahamiaji na watu wazima wanaorudi kusoma. Baadhi wamefanya kazi za mikono au za kijeshi; wengi hawana mafunzo rasmi ya umeme.",
    startingPoint: "Wanaweza kufanya hesabu za namba kamili na baadhi ya sehemu (fractions), na wanajua kwamba umeme unaweza kuwa hatari. Wengi bado hawawezi kueleza volti, ampea au ohm, kutumia sheria ya Ohm, kusoma mchoro wa saketi au kueleza lockout/tagout.",
    gap: "Programu za uanagenzi mara nyingi hupima hesabu na kusoma, na hutafuta waombaji wanaojua maneno ya msingi na wanaochukulia usalama kwa uzito. Wanafunzi wanahitaji hesabu za msingi, maneno, tabia za usalama na mpango wazi wa kuomba, ili waingie na wabaki salama.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi (kama darasa la 6 hadi 8); kila neno la ufundi linaelezwa",
      "Hakuna kazi kwenye umeme unaowaka: mazoezi pekee ya mita ni kwenye betri ya kawaida ya nyumbani",
      "Vifaa: simu au kompyuta ya maktaba kwa kurasa rasmi; karatasi, kalamu, kikokotoo na tepu ya kupimia",
      "Muda: masomo ya dakika 5 hadi 6 yanayoingia kati ya kazi na miadi",
      "Leseni zinatofautiana kwa jimbo na jiji: wanafunzi wanakagua ukurasa rasmi wa mahali wanapoishi"
    ],
    prerequisites: "Hesabu za namba kamili na sehemu rahisi. Kozi \"Kuanza Kazi katika Ufundi Stadi\" inawasaidia wanafunzi kuchagua ufundi; kozi hii inaingia ndani zaidi katika ufundi umeme."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa thamani za kubuni za saketi", action: "kukokotoa volti, ampea, ohm au wati kwa kutumia sheria ya Ohm na fomula ya nguvu", standard: "ukipata angalau maswali 4 kati ya 5 ya mazoezi sahihi, hatua zikionyeshwa" },
    { id: "O2", condition: "Ukipewa mchoro rahisi wa saketi", action: "kutaja kila sehemu ya saketi na kusema kama mizigo imeunganishwa kwa mfululizo (series) au sambamba (parallel)", standard: "kila sehemu ikitajwa kwa usahihi" },
    { id: "O3", condition: "Ukipewa kazi ambapo kifaa lazima kifanyiwe kazi", action: "kuorodhesha hatua za lockout/tagout kwa mpangilio na kutaja hatari kuu za umeme na kinga zake", standard: "hatua zote sita zikiwa kwa mpangilio sahihi na angalau hatari tatu zikilinganishwa na kinga yake" },
    { id: "O4", condition: "Ukitumia tepu ya kupimia na, kama unayo, multimeter kwenye betri ya nyumbani", action: "kusoma vipimo hadi 1/16 inchi iliyo karibu na kusoma volti za betri", standard: "ukipata angalau vipimo 4 kati ya 5 sahihi" },
    { id: "O5", condition: "Ukitumia tovuti rasmi za jimbo lako", action: "kuandika mpango wenye tarehe wa kuomba nafasi ya uanagenzi wa umeme na kuelekea kupata leseni", standard: "ukiwa na programu mbili halisi, masharti yake na tarehe kwa kila hatua" }
  ],
  chapters: [
    {
      name: "Sura 1: Jinsi umeme unavyofanya kazi",
      lessons: [
        {
          title: "Volti, ampea, ohm na wati",
          objectives: ["O1"],
          minutes: 5,
          goal: "Eleza volti, ampea, ohm na wati kwa maneno yako mwenyewe, ukitoa mfano wa kila moja.",
          text: [
            "Umeme ni mtiririko wa chembe ndogo sana zenye chaji (elektroni) ndani ya waya. Maneno manne yanaueleza, na utayatumia kila siku katika kazi hii.",
            "Volteji (volti, V) ni msukumo. Mkondo (ampea, A) ni kiasi cha umeme kinachotiririka. Ukinzani (ohm, Ω) ni jinsi kitu kinavyozuia umeme kutiririka. Nguvu (wati, W) ni kiasi cha kazi ambayo umeme unafanya, kama kupasha joto, kuwasha taa au kuzungusha mota.",
            "Mpira wa kumwagilia bustani unasaidia kuelewa: shinikizo la maji ni kama volti, kiasi cha maji kinachotiririka ni kama ampea, na mkunjo au mdomo mwembamba ni kama ukinzani. Msukumo zaidi au ukinzani mdogo inamaanisha mtiririko zaidi.",
            "Katika nyumba za Marekani, soketi nyingi zinatumia kama volti 120, na vifaa vikubwa kama mashine za kukausha nguo na majiko vinatumia kama volti 240. Betri zinatoa mkondo mdogo na thabiti unaoenda upande mmoja (DC); nyumba zinatumia mkondo unaobadilika (AC), unaobadili mwelekeo mara nyingi kwa sekunde."
          ],
          words: [
            ["Volti (V)", "msukumo wa umeme, pia huitwa volteji."],
            ["Ampea (A)", "kiasi cha mkondo wa umeme unaotiririka, pia huitwa mkondo."],
            ["Ohm (Ω)", "ukinzani: jinsi kitu kinavyozuia mtiririko."],
            ["Wati (W)", "nguvu: kiasi cha kazi ambayo umeme unafanya."],
            ["AC na DC", "mkondo unaobadilika (AC, nyumba na majengo) unabadili mwelekeo; mkondo mnyoofu (DC, betri) unaenda upande mmoja."],
            ["Kipitisha umeme (conductor)", "kitu kinachoruhusu umeme kupita kwa urahisi, kama waya wa shaba."]
          ],
          slides: [
            { title: "Maneno manne unayotumia kila siku", bullets: ["Volti: msukumo", "Ampea: mtiririko", "Ohm: ukinzani", "Wati: kazi inayofanyika"] },
            { title: "Picha ya mpira wa maji", bullets: ["Shinikizo la maji = volti", "Maji yanayotiririka = ampea", "Mkunjo au mdomo mwembamba = ukinzani"] },
            { title: "Katika majengo ya Marekani", bullets: ["Soketi nyingi: kama volti 120", "Mashine za kukausha nguo na majiko: kama volti 240", "Nyumba zinatumia AC; betri zinatoa DC"] }
          ],
          tryIt: "Kwenye karatasi, andika maneno manne (volti, ampea, ohm, wati). Kando ya kila moja, andika maana yake kwa maneno yako na mfano mmoja kutoka nyumbani. Kwa mfano: wati, \"maikrowevu yangu inasema wati 1,000 kwenye lebo yake\". Angalia lebo kwenye taa, chaja ya simu au kifaa (kikiwa kimechomolewa, na lebo tu) na unakili volti, ampea au wati zilizoandikwa.",
          youCanNow: "kueleza volti, ampea, ohm na wati na kuzipata kwenye lebo ya kifaa.",
          quickCheck: [
            { objective: "O1", q: "Neno lipi linamaanisha kiasi cha mkondo wa umeme unaotiririka?", options: ["Volti", "Ohm", "Ampea", "Wati"], answer: 2, why: "Ampea (mkondo) zinapima kiasi cha umeme kinachotiririka." },
            { objective: "O1", q: "Katika picha ya mpira wa kumwagilia bustani, nini ni kama ukinzani?", options: ["Mkunjo au mdomo mwembamba", "Shinikizo la maji", "Kiasi cha maji", "Rangi ya mpira"], answer: 0, why: "Mkunjo unazuia mtiririko, kama ukinzani unavyozuia mkondo." }
          ]
        },
        {
          title: "Sheria ya Ohm na hesabu za nguvu",
          objectives: ["O1"],
          minutes: 6,
          goal: "Kokotoa volti, ampea, ohm au wati kwa kutumia sheria ya Ohm na fomula ya nguvu.",
          text: [
            "Sheria ya Ohm inaunganisha msukumo, mtiririko na ukinzani: volti = ampea × ohm, inaandikwa V = I × R (I ni mkondo). Ukijua mbili kati ya hizo, unaweza kupata ya tatu: I = V ÷ R na R = V ÷ I.",
            "Fomula ya nguvu: wati = volti × ampea, inaandikwa P = V × I. Pia unaweza kupata ampea kutoka wati: I = P ÷ V.",
            "Mifano iliyotatuliwa (mazoezi tu, namba za kubuni): Betri ya volti 12 imeunganishwa na mzigo wa ohm 4. Ampea = 12 ÷ 4 = ampea 3. Saketi ya volti 120 inabeba ampea 15. Wati = 120 × 15 = wati 1,800. Hita ya chumba ya wati 1,500 kwenye volti 120 inavuta 1,500 ÷ 120 = ampea 12.5.",
            "Kwa nini ni muhimu: kila saketi ina breaker iliyopimwa kwa idadi fulani ya ampea. Vitu vingi vikiwaka kwa wakati mmoja na kuvuta ampea zaidi ya zile saketi imekusudiwa, saketi inazidiwa (overload) na breaker inakata. Mafundi umeme hufanya hesabu hizi ili kuchagua ukubwa wa waya na breaker kwa usalama, wakifuata kanuni za umeme (electrical code)."
          ],
          steps: [
            "Andika unachojua na unachohitaji kupata.",
            "Chagua fomula: V = I × R, I = V ÷ R, R = V ÷ I, au P = V × I.",
            "Weka namba na ufanye hesabu.",
            "Andika kipimo (V, A, Ω au W) na ujiulize: je, jibu lina mantiki?"
          ],
          words: [
            ["Sheria ya Ohm", "kanuni kwamba volti = ampea × ohm (V = I × R)."],
            ["Fomula ya nguvu", "wati = volti × ampea (P = V × I)."],
            ["Mzigo (load)", "kitu chochote kinachotumia umeme, kama taa, hita au mota."],
            ["Breaker", "swichi ya usalama kwenye paneli inayozima saketi mkondo ukizidi."],
            ["Kuzidiwa (overload)", "saketi inapobeba mkondo zaidi ya ule iliokusudiwa."]
          ],
          slides: [
            { title: "Sheria ya Ohm", bullets: ["V = I × R", "I = V ÷ R", "R = V ÷ I"] },
            { title: "Nguvu", bullets: ["P = V × I (wati = volti × ampea)", "I = P ÷ V"] },
            { title: "Mifano iliyotatuliwa (mazoezi tu)", bullets: ["12 V ÷ 4 Ω = 3 A", "120 V × 15 A = 1,800 W", "1,500 W ÷ 120 V = 12.5 A"] },
            { title: "Kwa nini mafundi umeme hufanya hesabu hizi", bullets: ["Breaker zinapimwa kwa ampea", "Ampea nyingi = kuzidiwa, breaker inakata", "Hesabu zinasaidia kuchagua waya na breaker kwa kanuni"] }
          ],
          tryIt: "Mazoezi tu. Tatua na uonyeshe hatua zako: (1) volti 9 na ohm 3: ampea ngapi? (2) ampea 2 na ohm 6: volti ngapi? (3) volti 120 na ampea 10: wati ngapi? (4) Maikrowevu ya wati 600 kwenye volti 120: ampea ngapi? (5) volti 24 na ampea 4: ohm ngapi? Majibu: 3 A; 12 V; 1,200 W; 5 A; 6 Ω. Kisha andika swali moja lako mwenyewe na ulitatue: ni mwanzo wa sehemu ya 1 ya kazi yako ya mwisho.",
          youCanNow: "kutumia sheria ya Ohm na fomula ya nguvu kupata volti, ampea, ohm au wati.",
          quickCheck: [
            { objective: "O1", q: "Mazoezi tu: volti 12 kwenye mzigo wa ohm 3. Ampea ngapi zinatiririka?", options: ["Ampea 36", "Ampea 9", "Ampea 15", "Ampea 4"], answer: 3, why: "I = V ÷ R, kwa hiyo 12 ÷ 3 = ampea 4." },
            { objective: "O1", q: "Mazoezi tu: saketi ya volti 120 inabeba ampea 5. Hizo ni wati ngapi?", options: ["Wati 24", "Wati 600", "Wati 125", "Wati 115"], answer: 1, why: "P = V × I, kwa hiyo 120 × 5 = wati 600." }
          ]
        },
        {
          title: "Saketi na jinsi ya kusoma mchoro rahisi",
          objectives: ["O2"],
          minutes: 6,
          goal: "Taja sehemu za saketi rahisi na utofautishe mfululizo (series) na sambamba (parallel) kwenye mchoro.",
          text: [
            "Saketi ni mzunguko kamili. Ina chanzo cha umeme, vipitisha umeme (nyaya), mzigo, njia ya kuidhibiti (swichi) na kinga (breaker au fyuzi). Mzunguko ukikatika, hakuna kinachotiririka.",
            "Katika saketi ya mfululizo (series), mizigo iko kwenye mstari mmoja, kwa hiyo mkondo unapita katika kila mmoja kwa zamu; mmoja ukizima, yote inazima. Katika saketi sambamba (parallel), kila mzigo una njia yake, kwa hiyo kila mmoja unapata volteji kamili na mmoja unaweza kuzima wakati mingine inaendelea kuwaka. Soketi na taa za nyumbani zinaunganishwa sambamba.",
            "Nyaya nyingi za majengo ya Marekani zina aina tatu za waya. Waya wa hot unapeleka mkondo kwenye mzigo (mara nyingi mweusi au mwekundu). Neutral unaurudisha (kwa kawaida mweupe). Ground (shaba tupu au kijani) unatoa njia salama kitu kikienda vibaya. Mafundi umeme bado hupima kila waya, kwa sababu rangi zinaweza kuwa si sahihi katika kazi ya zamani au mbovu.",
            "Kinga mbili maalum: GFCI (ground-fault circuit interrupter) inakata umeme haraka mkondo ukivuja, kwa mfano kupitia mtu, na inatumika karibu na maji kama jikoni, bafuni na nje. AFCI (arc-fault circuit interrupter) inakata umeme inapohisi cheche (arcing) zinazoweza kuanzisha moto. Shoti (short circuit) hutokea mkondo unapochukua njia rahisi isiyopangwa; inaweza kusababisha cheche na moto, na breaker inapaswa kukata."
          ],
          steps: [
            "Tafuta chanzo cha umeme (betri au paneli).",
            "Fuata waya kutoka chanzo kupitia breaker au fyuzi na swichi.",
            "Tafuta kila mzigo na uone kama uko kwenye mstari mmoja (series) au kwenye tawi lake (parallel).",
            "Fuata njia kurudi kwenye chanzo."
          ],
          words: [
            ["Saketi", "mzunguko kamili ambao umeme unapita ndani yake."],
            ["Saketi ya mfululizo (series)", "mizigo kwenye mstari mmoja; mkondo unapita katika kila mmoja kwa zamu."],
            ["Saketi sambamba (parallel)", "kila mzigo kwenye tawi lake; kila mmoja unapata volteji kamili."],
            ["Hot, neutral na ground", "hot unapeleka mkondo kwenye mzigo, neutral unaurudisha, ground ni njia ya usalama."],
            ["GFCI", "ground-fault circuit interrupter: inakata umeme haraka mkondo ukivuja, kuwalinda watu dhidi ya shoti ya umeme."],
            ["AFCI", "arc-fault circuit interrupter: inakata umeme inapohisi cheche zinazoweza kusababisha moto."],
            ["Shoti (short circuit)", "mkondo unapochukua njia rahisi isiyopangwa; inaweza kusababisha cheche na moto."]
          ],
          slides: [
            { title: "Sehemu za kila saketi", bullets: ["Chanzo, nyaya, mzigo", "Udhibiti: swichi", "Kinga: breaker au fyuzi"] },
            { title: "Mfululizo dhidi ya sambamba", bullets: ["Mfululizo: mstari mmoja, mmoja ukizima = yote inazima", "Sambamba: tawi lake, kila mmoja volteji kamili", "Nyumbani: sambamba"] },
            { title: "Hot, neutral, ground", bullets: ["Hot: mara nyingi mweusi au mwekundu", "Neutral: kwa kawaida mweupe", "Ground: shaba tupu au kijani", "Pima kila wakati; rangi zinaweza kuwa si sahihi"] },
            { title: "Kinga ya ziada", bullets: ["GFCI: inalinda watu karibu na maji", "AFCI: inasaidia kuzuia moto wa cheche", "Shoti: breaker inapaswa kukata"] }
          ],
          tryIt: "Kwenye karatasi, chora betri, swichi na balbu mbili kwa mfululizo (series). Kisha chora vitu hivyo hivyo sambamba (parallel). Weka majina ya chanzo, swichi na mizigo kwenye michoro yote miwili, na uandike kinachotokea katika kila mchoro balbu moja ikiungua. Kisha chora saketi ya nyumbani: paneli, breaker, swichi na taa mbili sambamba, ukiweka majina ya hot, neutral na ground. Uutunze: ni sehemu ya 2 ya kazi yako ya mwisho.",
          youCanNow: "kutaja sehemu za saketi rahisi na kutofautisha mfululizo na sambamba kwenye mchoro.",
          quickCheck: [
            { objective: "O2", q: "Balbu mbili zimeunganishwa ili moja ikiungua, nyingine inaendelea kuwaka. Zimeunganishwaje?", options: ["Kwa mfululizo (series)", "Sambamba (parallel)", "Bila swichi", "Kinyume"], answer: 1, why: "Katika sambamba kila balbu ina njia yake, kwa hiyo moja inaweza kuzima na nyingine ikaendelea kuwaka." },
            { objective: "O2", q: "Kifaa kipi kinawalinda watu dhidi ya shoti ya umeme karibu na sinki la jikoni?", options: ["AFCI", "Swichi ya taa", "Dimmer", "GFCI"], answer: 3, why: "GFCI inakata umeme haraka mkondo ukivuja, kama kupitia mtu aliye karibu na maji." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Jinsi umeme unavyofanya kazi",
        questions: [
          { objective: "O1", q: "Neno lipi linamaanisha msukumo wa umeme?", options: ["Volti", "Ampea", "Ohm", "Wati"], answer: 0, why: "Volteji ni msukumo unaosogeza mkondo ndani ya saketi." },
          { objective: "O1", q: "Mazoezi tu: ampea 2 zinapita kwenye mzigo wa ohm 10. Volteji ni ngapi?", options: ["Volti 5", "Volti 12", "Volti 20", "Volti 8"], answer: 2, why: "V = I × R, kwa hiyo 2 × 10 = volti 20." },
          { objective: "O1", q: "Mazoezi tu: kikausha nywele cha wati 1,200 kinatumia volti 120. Kinavuta ampea ngapi?", options: ["Ampea 10", "Ampea 100", "Ampea 1,320", "Ampea 12"], answer: 0, why: "I = P ÷ V, kwa hiyo 1,200 ÷ 120 = ampea 10." },
          { objective: "O2", q: "Sehemu ipi ya saketi inaizima mkondo ukizidi?", options: ["Mzigo", "Waya wa neutral", "Kifuniko cha swichi", "Breaker au fyuzi"], answer: 3, why: "Breaker na fyuzi zinalinda saketi kwa kusimamisha mkondo unapokuwa mkubwa mno." },
          { objective: "O2", q: "Katika nyaya nyingi za majengo ya Marekani, waya upi kwa kawaida ni mweupe?", options: ["Waya wa hot", "Waya wa neutral", "Waya wa ground", "Hakuna; rangi hazitumiki kamwe"], answer: 1, why: "Neutral kwa kawaida ni mweupe, lakini mafundi umeme bado hupima, kwa sababu rangi zinaweza kuwa si sahihi." }
        ]
      }
    },
    {
      name: "Sura 2: Usalama, zana na njia yako",
      lessons: [
        {
          title: "Usalama wa umeme: lockout/tagout na kupima kabla ya kugusa",
          objectives: ["O3"],
          minutes: 6,
          goal: "Orodhesha hatua sita za lockout/tagout kwa mpangilio na utaje hatari kuu za umeme.",
          text: [
            "Umeme unaweza kuua. Hatari za umeme ni pamoja na shoti ya umeme, kifo kwa umeme, kuungua, arc flash (mlipuko wa ghafla wa joto na mwanga kutokana na hitilafu ya umeme), moto na kuanguka baada ya shoti. OSHA inaorodhesha visababishi vya kawaida vya majeraha ya umeme, ikiwemo kugusa nyaya za umeme za juu, kukosa kinga ya ground-fault, njia ya ground iliyokatika, kutumia vifaa vibaya, na kutumia vibaya nyaya za kurefusha (extension cords).",
            "Njia salama zaidi ya kufanya kazi ni umeme ukiwa umezimwa na kufungwa (locked out). Kanuni ya OSHA ya lockout/tagout (29 CFR 1910.147) inaweka mpangilio kwa wafanyakazi walioidhinishwa na waliofunzwa: 1. Jiandae: jua nishati iliyopo na jinsi ya kuidhibiti. 2. Zima kifaa. 3. Kitenge: fungua disconnect au breaker. 4. Weka kufuli lako na kibandiko (tag) chako. 5. Achilia au zuia nishati iliyohifadhiwa (kama capacitor zenye chaji au springi). 6. Hakikisha: pima kwamba kimezimwa kweli kabla ya kuanza.",
            "Pima kabla ya kugusa: tumia kipimaji au mita ambayo kwanza unaikagua kwenye chanzo unachojua kina umeme, kisha pima saketi, kisha kagua kipimaji tena. Ni wafanyakazi waliofunzwa na wenye sifa tu wanaofanya hivi, kama sehemu ya programu ya mwajiri.",
            "Tabia nyingine: tumia ngazi zisizopitisha umeme (za fiberglass) karibu na umeme, kaa mbali sana na nyaya za umeme za juu, tumia kinga ya GFCI kwa zana za umeme, usifanye kazi kamwe kwenye vifaa vya umeme mahali penye unyevu, na vaa miwani ya usalama, glavu na PPE nyingine ambayo mwajiri wako anataka."
          ],
          steps: [
            "Jiandae: jua nishati na jinsi ya kuidhibiti.",
            "Zima kifaa.",
            "Kitenge na chanzo cha umeme.",
            "Weka kufuli lako na kibandiko chako.",
            "Achilia au zuia nishati iliyohifadhiwa.",
            "Hakikisha kimezimwa: pima kabla ya kugusa."
          ],
          words: [
            ["Kifo kwa umeme (electrocution)", "kifo kinachosababishwa na shoti ya umeme."],
            ["Arc flash", "mlipuko wa ghafla wa joto, mwanga na msukumo kutokana na hitilafu ya umeme."],
            ["Lockout/tagout", "kuzima na kufunga kwa kufuli chanzo cha nishati, pamoja na kibandiko, ili mtu yeyote asiweze kukiwasha wakati wa kazi."],
            ["Nishati iliyohifadhiwa", "nishati inayobaki baada ya umeme kuzimwa, kama ndani ya capacitor au springi."],
            ["Mfanyakazi mwenye sifa (qualified)", "mtu aliyefunzwa kujua hatari na kufanya kazi maalum ya umeme kwa usalama."],
            ["OSHA", "Occupational Safety and Health Administration ya Marekani, inayoweka kanuni za usalama kazini."]
          ],
          slides: [
            { title: "Umeme unaweza kuua", bullets: ["Shoti, kifo kwa umeme, kuungua", "Arc flash na moto", "Kuanguka baada ya shoti"] },
            { title: "Lockout/tagout: hatua sita", bullets: ["1. Jiandae  2. Zima  3. Tenga", "4. Kufuli na kibandiko  5. Achilia nishati iliyohifadhiwa", "6. Hakikisha: pima kabla ya kugusa"] },
            { title: "Pima kabla ya kugusa", bullets: ["Kagua kipimaji kwenye chanzo kinachojulikana kina umeme", "Pima saketi", "Kagua kipimaji tena"] },
            { title: "Tabia za kila siku", bullets: ["Ngazi za fiberglass karibu na umeme", "Kaa mbali na nyaya za umeme za juu", "GFCI kwa zana za umeme; usifanye kazi mahali penye unyevu"] }
          ],
          sources: [
            { name: "OSHA: Usalama wa umeme (Electrical safety)", url: "https://www.osha.gov/electrical" },
            { name: "OSHA: Kudhibiti nishati hatari (lockout/tagout), 29 CFR 1910.147", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.147" }
          ],
          tryIt: "Kwenye kadi ndogo, andika hatua sita za lockout/tagout kwa mpangilio bila kuangalia. Zilinganishe na somo na urekebishe makosa yoyote. Nyuma ya kadi, andika hatari tatu za umeme na kinga ya kila moja (kwa mfano: nyaya za umeme za juu, kaa mbali sana na upigie simu kampuni ya umeme). Itunze kadi: ni sehemu ya 3 ya kazi yako ya mwisho.",
          youCanNow: "kuorodhesha hatua sita za lockout/tagout kwa mpangilio na kulinganisha hatari za umeme na kinga sahihi.",
          quickCheck: [
            { objective: "O3", q: "Hatua ya mwisho ya lockout/tagout kabla kazi haijaanza ni ipi?", options: ["Kuhakikisha kifaa kimezimwa kwa kupima", "Kuweka kufuli lako", "Kumwambia mteja", "Kuzima kifaa"], answer: 0, why: "Baada ya kufunga na kuachilia nishati iliyohifadhiwa, unahakikisha kimezimwa kweli kabla ya kugusa chochote." },
            { objective: "O3", q: "Ngazi ipi ni chaguo sahihi karibu na vifaa vya umeme?", options: ["Ya alumini", "Ngazi yoyote", "Ya fiberglass", "Ngazi ya mbao iliyolowa"], answer: 2, why: "Fiberglass haipitishi umeme kama chuma kinavyopitisha." }
          ]
        },
        {
          title: "Zana, kupima na kanuni za umeme",
          objectives: ["O4"],
          minutes: 6,
          goal: "Soma tepu ya kupimia hadi 1/16 inchi iliyo karibu na usome volti za betri kwenye multimeter.",
          text: [
            "Wanagenzi wanatumia zana za mkono kama koleo za lineman, vikata-ganda la waya (wire strippers), bisibisi zenye kinga, kipimo cha usawa (level) na tepu ya kupimia, na zana za kupima kama kipimaji cha volteji na multimeter. Mwajiri au programu yako inakufundisha zana za kununua na jinsi ya kutumia kila moja kwa usalama.",
            "Kusoma tepu ya kupimia: kila inchi imegawanywa katika alama ndogo 16. Alama ndefu zaidi ni nusu inchi, kisha robo, kisha sehemu ya nane (1/8), kisha sehemu ya kumi na sita (1/16). Hesabu alama ndogo baada ya inchi kamili ya mwisho na upunguze sehemu: inchi 5 na alama 6 ni 5 6/16, ambayo ni inchi 5 3/8. Pima mara mbili, kata mara moja.",
            "Multimeter inapima volti, ampea na ohm. Fanya mazoezi tu kwenye betri ya kawaida ya AA: weka kitufe kwenye DC volts, gusa waya mwekundu kwenye upande wa + na waya mweusi kwenye upande wa -, na usome skrini. Betri mpya ya AA inaonyesha kama volti 1.5. Usifanye mazoezi kamwe kwenye soketi au nyaya zozote za nyumbani.",
            "Mafundi umeme wanafuata National Electrical Code (NEC), pia huitwa NFPA 70, inayoweka viwango salama vya nyaya na vifaa. Majimbo na majiji yanaipitisha, wakati mwingine na mabadiliko yao, na mitihani ya leseni inahusu kanuni hizi na kanuni za mahali hapo. Utajifunza kutumia kitabu cha kanuni katika uanagenzi wako."
          ],
          steps: [
            "Tepu: tafuta inchi kamili ya mwisho.",
            "Hesabu alama za 1/16 zilizo baada yake.",
            "Punguza sehemu: 8/16 = 1/2, 4/16 = 1/4, 2/16 = 1/8.",
            "Mita (betri tu): weka DC volts, mwekundu kwa +, mweusi kwa -, soma skrini."
          ],
          words: [
            ["Multimeter", "mita inayopima volti, ampea na ohm."],
            ["Kipimaji cha volteji", "zana inayoonyesha kama kuna volteji."],
            ["Leads", "waya mwekundu na mweusi wenye ncha za kupimia zinazounganisha mita na kitu unachopima."],
            ["NEC (NFPA 70)", "National Electrical Code: viwango salama vya nyaya, vinavyopitishwa na majimbo na majiji."],
            ["Kupunguza sehemu", "kuiandika kwa namba ndogo kabisa, kama 6/16 = 3/8."]
          ],
          slides: [
            { title: "Zana za kuanzia", bullets: ["Koleo za lineman, vikata-ganda la waya", "Bisibisi zenye kinga, level, tepu", "Kipimaji cha volteji na multimeter"] },
            { title: "Kusoma tepu ya kupimia", bullets: ["Alama 16 kwa kila inchi", "Hesabu alama baada ya inchi kamili", "5 6/16 = inchi 5 3/8"] },
            { title: "Mazoezi ya multimeter: betri tu", bullets: ["Kitufe kwenye DC volts", "Mwekundu kwa +, mweusi kwa -", "Betri mpya ya AA: kama volti 1.5", "Usifanye mazoezi kwenye soketi au nyaya"] },
            { title: "Kanuni za umeme", bullets: ["NEC, pia huitwa NFPA 70", "Majimbo na majiji yanaipitisha", "Mitihani ya leseni inahusu kanuni hizi"] }
          ],
          sources: [
            { name: "NFPA: NFPA 70, National Electrical Code", url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70" },
            { name: "US Bureau of Labor Statistics: Mafundi umeme (Electricians)", url: "https://www.bls.gov/ooh/construction-and-extraction/electricians.htm" }
          ],
          tryIt: "Pima vitu vitano nyumbani kwa tepu ya kupimia (mlango, kitabu, meza, dirisha, boksi) hadi 1/16 inchi iliyo karibu, na uandike kila kipimo kwa sehemu iliyopunguzwa. Kisha fanya mazoezi: 3 na 12/16 = ? 7 na 2/16 = ? 10 na 8/16 = ? (Majibu: 3 3/4, 7 1/8, 10 1/2.) Kama una multimeter, soma volti za betri ya AA na uziandike. Tunza vipimo vyako: ni sehemu ya 4 ya kazi yako ya mwisho.",
          youCanNow: "kusoma tepu ya kupimia hadi 1/16 inchi iliyo karibu na kusoma volti za betri kwa multimeter.",
          quickCheck: [
            { objective: "O4", q: "Ubao unapima inchi 4 na alama 12 za 1/16. Hiyo ni nini kwa sehemu iliyopunguzwa?", options: ["Inchi 4 1/2", "Inchi 4 3/4", "Inchi 4 12", "Inchi 4 1/4"], answer: 1, why: "12/16 inapunguzwa kuwa 3/4, kwa hiyo ni inchi 4 3/4." },
            { objective: "O4", q: "Ni wapi salama kufanya mazoezi kwa multimeter katika kozi hii?", options: ["Kwenye soketi ya ukutani", "Kwenye paneli ya breaker", "Kwenye swichi ya taa", "Kwenye betri ya AA"], answer: 3, why: "Betri ya nyumbani ina volteji ndogo na ni salama; soketi na nyaya ni kwa kazi ya waliofunzwa yenye msimamizi." }
          ]
        },
        {
          title: "Uanagenzi, leseni na mpango wako",
          objectives: ["O5"],
          minutes: 6,
          goal: "Andika mpango wenye tarehe wa kuomba nafasi ya uanagenzi wa umeme na kuelekea kupata leseni.",
          text: [
            "Bureau of Labor Statistics (BLS, ofisi ya takwimu za kazi ya Marekani) inasema mafundi umeme wengi hujifunza kupitia uanagenzi wa miaka 4 au 5. Kila mwaka kwa kawaida una kama saa 2,000 za mafunzo kazini yanayolipwa pamoja na madarasa ya nadharia ya umeme, kusoma ramani za ujenzi (blueprints) na usalama. Cheti cha kumaliza sekondari (high school diploma) au kinacholingana nacho (kama GED) kinahitajika, na baadhi ya watu husoma chuo cha ufundi kwanza.",
            "Majimbo mengi yanataka mafundi umeme wafaulu mtihani na wawe na leseni. Mtihani unahusu National Electrical Code na kanuni za jimbo na za mahali hapo. Baadhi ya maeneo pia yanataka elimu endelevu ili kuendelea kuwa na leseni. Vyeo kama apprentice, journeyman na master vinatofautiana kwa jimbo, kwa hiyo kagua bodi ya leseni za umeme ya jimbo lako au ya mahali hapo.",
            "Programu za uanagenzi zinaendeshwa na vyama vya wafanyakazi (unions), vikundi vya wakandarasi na waajiri. Nyingi zinaomba diploma au GED, kitambulisho, wakati mwingine leseni ya udereva, mtihani wa hesabu na kusoma, na mahojiano, na baadhi zinapokea maombi wakati fulani tu. Tafuta programu kwenye apprenticeship.gov na katika American Job Centers na vyuo vya jamii (community colleges). Wanajeshi wastaafu wanaweza kuuliza VA kuhusu GI Bill; kama una rekodi ya uhalifu, uliza programu na bodi ya leseni jinsi wanavyoikagua.",
            "Mpango wako unageuza haya kuwa hatua zenye tarehe: nini cha kusoma, programu zipi za kuomba, zinafunguliwa lini, na bodi ya leseni inataka nini."
          ],
          steps: [
            "Andika lengo lako, kwa mfano \"kuanza uanagenzi wa umeme kufikia msimu wa vuli ujao\".",
            "Tafuta programu mbili karibu nawe; andika kila moja inaomba nini na maombi yanafunguliwa lini.",
            "Tafuta bodi ya leseni ya jimbo au jiji lako na uandike inataka nini (pamoja na anwani ya tovuti).",
            "Kusanya nyaraka: diploma au GED, kitambulisho, leseni ya udereva kama inahitajika.",
            "Ongeza tarehe za kusoma hesabu na kusoma, na tarehe kwa kila ombi."
          ],
          words: [
            ["Uanagenzi (apprenticeship)", "kazi ya kulipwa ambapo unajifunza kutoka kwa mafundi umeme wenye uzoefu, pamoja na madarasa."],
            ["Journeyman", "katika majimbo mengi, fundi umeme aliyemaliza uanagenzi na kufaulu mtihani wa leseni; vyeo vinatofautiana."],
            ["Bodi ya leseni", "ofisi ya jimbo au jiji inayotoa leseni za umeme."],
            ["Elimu endelevu", "kozi fupi ambazo baadhi ya leseni zinataka ili kuendelea kujua kanuni na usalama mpya."],
            ["American Job Center", "kituo cha bure cha mahali hapo cha msaada wa kutafuta kazi na mafunzo, kinachofadhiliwa na US Department of Labor (Wizara ya Kazi ya Marekani)."]
          ],
          slides: [
            { title: "Jinsi mafundi umeme wengi wanavyojifunza", bullets: ["Uanagenzi wa miaka 4 au 5 (BLS)", "Kama saa 2,000 za kulipwa kwa mwaka pamoja na madarasa", "Diploma au GED inahitajika"] },
            { title: "Leseni", bullets: ["Majimbo mengi yanataka mtihani na leseni", "Mtihani unahusu NEC na kanuni za mahali hapo", "Kagua bodi ya jimbo au jiji lako"] },
            { title: "Kuingia", bullets: ["Programu za unions, wakandarasi na waajiri", "Mara nyingi: mtihani wa hesabu na kusoma, mahojiano", "Baadhi zinapokea maombi wakati fulani tu"] },
            { title: "Mpango wako", bullets: ["Programu mbili na masharti yake", "Kanuni za leseni kutoka bodi rasmi", "Tarehe kwa kila hatua"] }
          ],
          sources: [
            { name: "US Bureau of Labor Statistics: Mafundi umeme, jinsi ya kuwa mmoja (How to Become One)", url: "https://www.bls.gov/ooh/construction-and-extraction/electricians.htm#tab-4" },
            { name: "Apprenticeship.gov: Apprenticeship Job Finder (kitafuta nafasi za uanagenzi)", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" },
            { name: "CareerOneStop: License finder (kitafuta leseni)", url: "https://www.careeronestop.org/Toolkit/Training/find-licenses.aspx" }
          ],
          tryIt: "Kazi ya mwisho: tengeneza kifurushi chako cha kuanzia kazi ya umeme. Weka pamoja maswali yako matano ya sheria ya Ohm (Somo la 2), mchoro wako wa saketi wenye majina (Somo la 3), kadi yako ya lockout/tagout (Somo la 4) na vipimo vyako vitano vya tepu (Somo la 5). Kisha andika mpango wako wenye tarehe: lengo lako, programu mbili za uanagenzi karibu nawe na kila moja inaomba nini na inapokea maombi lini, jimbo au jiji lako linataka nini kwa leseni (pamoja na anwani ya tovuti), na tarehe kwa kila hatua.",
          youCanNow: "kufuata mpango wako mwenyewe wenye tarehe wa kuomba nafasi ya uanagenzi wa umeme na kuelekea kupata leseni.",
          quickCheck: [
            { objective: "O5", q: "Kulingana na BLS, mafundi umeme wengi hujifunza kazi hii vipi?", options: ["Darasa la mtandaoni la wiki moja", "Kutazama video nyumbani", "Uanagenzi wa kulipwa wa miaka 4 au 5", "Shahada ya chuo ya miaka minne tu"], answer: 2, why: "Mafundi umeme wengi hujifunza katika uanagenzi wa miaka 4 au 5 unaochanganya kazi ya kulipwa na madarasa." },
            { objective: "O5", q: "Unapata wapi habari ya jimbo lako linataka nini kwa leseni ya umeme?", options: ["Bodi ya leseni za umeme ya jimbo lako au ya mahali hapo", "Kikundi cha mitandao ya kijamii", "Duka la zana", "Kozi hii"], answer: 0, why: "Kanuni za leseni zinatofautiana kwa jimbo na jiji, kwa hiyo bodi rasmi ndiyo chanzo." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Usalama, zana na njia yako",
        questions: [
          { objective: "O3", q: "Hatua ipi ya lockout/tagout inakuja mara baada ya kutenga kifaa?", options: ["Kuhakikisha kwa kupima", "Kuweka kufuli lako na kibandiko chako", "Kuachilia nishati iliyohifadhiwa", "Kujiandaa"], answer: 1, why: "Mpangilio ni kujiandaa, kuzima, kutenga, kufuli na kibandiko, kuachilia nishati iliyohifadhiwa, kuhakikisha." },
          { objective: "O3", q: "Kwa nini wafanyakazi wanaachilia au kuzuia nishati iliyohifadhiwa baada ya kufunga?", options: ["Ili kuokoa umeme", "Ili kufuli litoshee", "Ili kumaliza haraka", "Kwa sababu sehemu kama capacitor bado zinaweza kutoa shoti baada ya umeme kuzimwa"], answer: 3, why: "Nishati iliyohifadhiwa bado inaweza kukudhuru baada ya umeme kuzimwa." },
          { objective: "O3", q: "OSHA inaorodhesha kisababishi cha kawaida cha majeraha ya umeme. Ni kipi?", options: ["Kugusa nyaya za umeme za juu", "Kuvaa miwani ya usalama", "Kutumia ngazi ya fiberglass", "Kusoma kitabu cha kanuni"], answer: 0, why: "Kugusa nyaya za umeme za juu ni mojawapo ya visababishi vya kawaida ambavyo OSHA inaorodhesha." },
          { objective: "O4", q: "9/16 inchi jumlisha 7/16 inchi ni ngapi?", options: ["1/2 inchi", "Inchi 16", "Inchi 1", "Inchi 2"], answer: 2, why: "9/16 + 7/16 = 16/16, ambayo ni inchi 1." },
          { objective: "O5", q: "Hatua ipi ya mpango imekamilika?", options: ["\"Kuwa fundi umeme\"", "\"Kuomba siku moja\"", "\"Kuangalia programu\"", "\"Kuomba programu ya uanagenzi ya kaunti kabla ya tarehe ya mwisho ya Machi 1, nikiwa na GED na kitambulisho changu\""], answer: 3, why: "Inataja programu, tarehe ya mwisho na vitu vya kuleta." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Misingi ya Kazi ya Ufundi Umeme",
    questions: [
      { objective: "O1", q: "Neno lipi linamaanisha kiasi cha kazi ambayo umeme unafanya?", options: ["Wati", "Ohm", "Ampea", "Volti"], answer: 0, why: "Wati zinapima nguvu: kazi inayofanyika, kama joto au mwanga." },
      { objective: "O1", q: "Sheria ya Ohm inasema:", options: ["P = V + I", "V = I × R", "R = V × I", "I = V × R"], answer: 1, why: "Volti ni sawa na ampea mara ohm." },
      { objective: "O1", q: "Mazoezi tu: volti 120 na ampea 20. Wati ngapi?", options: ["Wati 140", "Wati 6", "Wati 2,400", "Wati 100"], answer: 2, why: "P = V × I, kwa hiyo 120 × 20 = wati 2,400." },
      { objective: "O1", q: "Mazoezi tu: volti 24 kwenye mzigo wa ohm 6. Ampea ngapi?", options: ["Ampea 144", "Ampea 18", "Ampea 30", "Ampea 4"], answer: 3, why: "I = V ÷ R, kwa hiyo 24 ÷ 6 = ampea 4." },
      { objective: "O1", q: "Nini kinatokea saketi inapovuta ampea zaidi ya ile iliyokusudiwa?", options: ["Volteji inaongezeka mara mbili", "Inazidiwa na breaker inapaswa kukata", "Nyaya zinapoa zaidi", "Hakuna kitu"], answer: 1, why: "Mkondo mwingi mno ni kuzidiwa; breaker inakata ili kulinda nyaya." },
      { objective: "O2", q: "Katika saketi ya mfululizo yenye balbu tatu, moja inaungua. Nini kinatokea?", options: ["Zote zinazima", "Hiyo moja tu inazima", "Nyingine zinaongeza mwanga", "Breaker inakuwa kubwa zaidi"], answer: 0, why: "Katika mfululizo kuna njia moja tu, kwa hiyo kukatika kunasimamisha mkondo kwa zote." },
      { objective: "O2", q: "Soketi za nyumbani kwa kawaida zinaunganishwaje?", options: ["Kwa mfululizo", "Bila breaker", "Sambamba", "Bila neutral"], answer: 2, why: "Kuunganisha sambamba kunaipa kila soketi volteji kamili na njia yake." },
      { objective: "O2", q: "Waya upi unatoa njia salama kitu kikienda vibaya?", options: ["Waya wa hot", "Waya wa neutral", "Waya wa swichi (switch leg)", "Waya wa ground"], answer: 3, why: "Ground (shaba tupu au kijani) ni njia ya usalama." },
      { objective: "O2", q: "Kifaa kipi kinakata umeme kinapohisi cheche zinazoweza kuanzisha moto?", options: ["GFCI", "AFCI", "Dimmer", "Plagi"], answer: 1, why: "Arc-fault circuit interrupter (AFCI) inasaidia kuzuia moto wa cheche." },
      { objective: "O3", q: "Hatua ya kwanza ya lockout/tagout ni ipi?", options: ["Jiandae: jua nishati na jinsi ya kuidhibiti", "Weka kufuli lako", "Hakikisha kwa kupima", "Zima"], answer: 0, why: "Unaanza kwa kujua nishati iliyopo na jinsi ya kuidhibiti." },
      { objective: "O3", q: "Unapopima kabla ya kugusa, kwa nini unakagua kipimaji kwanza kwenye chanzo kinachojulikana kina umeme?", options: ["Ili kukipasha joto", "Ili kuchaji betri yake", "Ili kuthibitisha kipimaji kinafanya kazi, ili kipimo cha \"hakuna volteji\" kiaminike", "Haihitajiki"], answer: 2, why: "Kipimaji kibovu kinaweza kuonyesha kwa uongo kwamba hakuna volteji." },
      { objective: "O3", q: "Kipi ni mlipuko wa ghafla wa joto na mwanga kutokana na hitilafu ya umeme?", options: ["Ground", "Mzigo", "Breaker", "Arc flash"], answer: 3, why: "Arc flash ni mlipuko hatari unaosababishwa na hitilafu ya umeme." },
      { objective: "O3", q: "Katika kozi hii, ni lini unaweza kufanya kazi kwenye nyaya zenye umeme unaowaka?", options: ["Kamwe; nyaya halisi zinafundishwa katika mafunzo yenye msimamizi", "Baada ya Somo la 2", "Breaker ikiwa imewashwa", "Wikendi"], answer: 0, why: "Kozi hii haifanyi kazi kwenye umeme unaowaka; hiyo ni ya programu yenye msimamizi na PPE." },
      { objective: "O4", q: "Tepu ya kupimia inasoma inchi 6 na alama 4 za 1/16. Hiyo ni nini kwa sehemu iliyopunguzwa?", options: ["Inchi 6 1/2", "Inchi 6 1/4", "Inchi 6 4", "Inchi 6 1/8"], answer: 1, why: "4/16 inapunguzwa kuwa 1/4." },
      { objective: "O4", q: "Betri mpya ya AA kwa kawaida inasoma ngapi kwenye multimeter iliyowekwa DC volts?", options: ["Kama volti 120", "Kama volti 12", "Kama volti 1.5", "Kama volti 240"], answer: 2, why: "Betri mpya ya AA ni kama volti 1.5." },
      { objective: "O4", q: "National Electrical Code pia inaitwaje?", options: ["OSHA 10", "EPA 608", "NFPA 70", "GFCI"], answer: 2, why: "NEC inachapishwa kama NFPA 70." },
      { objective: "O5", q: "Kozi hii:", options: ["Itakupa leseni ya umeme", "Inakuandaa kuomba; haikupi leseni wala cheti", "Inahesabiwa kama saa zako za uanagenzi", "Inakuruhusu kuweka nyaya katika nyumba"], answer: 1, why: "Leseni zinatoka kwa jimbo au jiji lako, na mafunzo halisi yanatoka katika uanagenzi." },
      { objective: "O5", q: "Tovuti ipi ya bure inakusaidia kupata programu za uanagenzi karibu nawe?", options: ["Tangazo linalojitokeza (pop-up)", "Sehemu ya maoni", "Kipeperushi cha duka la zana", "apprenticeship.gov"], answer: 3, why: "Apprenticeship.gov ina Apprenticeship Job Finder ya US Department of Labor." },
      { objective: "O5", q: "Mitihani ya leseni ya mafundi umeme kwa kawaida inahusu nini?", options: ["National Electrical Code na kanuni za jimbo na za mahali hapo", "Kutengeneza magari", "Ufundi bomba tu", "Kasi ya kuandika kwa kompyuta"], answer: 0, why: "BLS inasema mitihani ya leseni inahusu NEC na kanuni za jimbo na za mahali hapo." },
      { objective: "O5", q: "Baadhi ya programu zinapokea maombi wakati fulani tu. Mpango wako unapaswa kuwa na nini?", options: ["Hakuna; nenda tu", "Kubahatisha", "Nembo ya programu tu", "Tarehe ambazo maombi yanafunguliwa na kufungwa"], answer: 3, why: "Kuandika tarehe za maombi kunakuzuia kukosa nafasi." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi alipata kiasi gani
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [1, 2, 5, 7, 9, 11, 13, 15, 16, 19] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Maswali ya sheria ya Ohm na ya nguvu", objective: "O1", notYet: "Chini ya maswali 4 kati ya 5 sahihi, au hatua hazijaonyeshwa.", meets: "Angalau 4 kati ya 5 sahihi, kila moja na fomula, hatua na kipimo.", exceeds: "Yote 5 sahihi, yakitumia fomula zote nne, pamoja na ukaguzi kwamba kila jibu lina mantiki." },
      { name: "Mchoro wa saketi", objective: "O2", notYet: "Sehemu zinakosekana au mizigo haiko sambamba.", meets: "Chanzo, breaker, swichi, mizigo miwili sambamba, hot, neutral na ground vyote vina majina.", exceeds: "Pia unaonyesha mahali GFCI ingewekwa na kueleza kwa nini." },
      { name: "Kadi ya lockout/tagout", objective: "O3", notYet: "Hatua zinakosekana au haziko kwa mpangilio.", meets: "Hatua zote sita kwa mpangilio, pamoja na hatari tatu zilizolinganishwa na kinga.", exceeds: "Pia inaeleza kupima kabla ya kugusa kwa ukaguzi wa live-dead-live (ina umeme, haina, ina umeme)." },
      { name: "Vipimo", objective: "O4", notYet: "Vipimo si sahihi au sehemu hazijapunguzwa.", meets: "Angalau vipimo 4 kati ya 5 sahihi hadi 1/16 inchi iliyo karibu, kwa sehemu iliyopunguzwa.", exceeds: "Vyote vitano sahihi, pamoja na kipimo cha betri mita ikiwa imewekwa sawasawa." },
      { name: "Mpango wenye tarehe kutoka vyanzo rasmi", objective: "O5", notYet: "Hatua hazina tarehe, au kanuni zinatoka kwenye matangazo au machapisho.", meets: "Programu mbili halisi zenye masharti na tarehe za maombi, kanuni za leseni pamoja na anwani rasmi ya tovuti, na tarehe kwa kila hatua.", exceeds: "Pia una ratiba ya kujisomea kwa mtihani wa kuingia na mpango mbadala, kama kazi ya msaidizi wa fundi umeme." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaoomba uanagenzi wa umeme au maandalizi ya uanagenzi (pre-apprenticeship) ndani ya siku 90",
      "Wanafunzi wanaokubaliwa katika uanagenzi au kuajiriwa kama msaidizi wa fundi umeme ndani ya miezi 6",
      "Programu washirika zinaripoti kwamba waombaji wanafaulu mtihani wa hesabu wa kuingia na wanafika wakijua hatua za msingi za usalama"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye intaneti kwa kurasa za BLS, OSHA, apprenticeship.gov na bodi za leseni za jimbo",
      "Karatasi, kalamu, kadi ndogo, kikokotoo na tepu ya kupimia",
      "Si lazima: multimeter ya kawaida na betri ya AA (mazoezi ya betri tu)",
      "Kama dakika 60 hadi 75 kwa jumla, katika vipindi vifupi: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Hakuna kazi yoyote kwenye umeme unaowaka. Mazoezi pekee ya mita ni kwenye betri ya nyumbani; usiwaruhusu kamwe wanafunzi kupima soketi au paneli.",
      "Fanyeni hesabu pamoja ubaoni kwanza, kisha wanafunzi waandike maswali yao ya mazoezi na kubadilishana.",
      "Mwalike mratibu wa uanagenzi au fundi umeme mwenye leseni aeleze mchakato wa kuomba na mtihani wa kuingia.",
      "Msaidie kila mwanafunzi kupata ukurasa wa leseni wa jimbo au jiji lake; kanuni zinatofautiana, kwa hiyo usitoe jibu moja kwa kikundi chote.",
      "Kwa wanafunzi wenye rekodi za uhalifu au wanajeshi wastaafu, waunganishe na huduma za kurudi katika jamii au za wanajeshi wastaafu; usiahidi matokeo yoyote kutoka kwa programu au bodi ya leseni.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
