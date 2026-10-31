"use strict";

// Koach Learn course (Swahili translation of shared/welding-basics.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "welding-basics-sw",
  lang: "sw",
  translationOf: "welding-basics",
  category: "Workforce Development",
  name: "Misingi ya Uchomeleaji",
  skills: "Kulinganisha kazi na njia za uchomeleaji, Kusoma viungo, mikao na alama za uchomeleaji, Kutambua kasoro za kawaida za uchomeleaji, Kupanga usalama na kinga dhidi ya moto, Kupanga njia yako ya kupata cheti cha uchomeleaji",
  outcome: "kulinganisha kazi na njia sahihi ya uchomeleaji, kusoma aina za viungo, mikao na alama ya msingi ya uchomeleaji, kutambua kasoro za kawaida, kupanga vifaa vya kujikinga na kinga dhidi ya moto kwa kazi ya uchomeleaji, na kufuata mpango wenye tarehe wa kupata mafunzo na kufanya mtihani wa cheti cha mchomeleaji.",
  about: [
    "Wachomeleaji huunganisha vyuma kwa ajili ya majengo, madaraja, meli, mabomba ya mafuta na gesi, malori, mashine za shamba na viwanda. Wengi huanza kupitia shule ya ufundi, chuo cha jamii (community college), uanagenzi (apprenticeship), jeshi au mafunzo kazini. Kozi hii ni kwa yeyote anayefikiria njia hiyo: wanaotafuta kazi, vijana, watu wanaorudi nyumbani kutoka gerezani, maveterani, wahamiaji na watu wazima wanaorudi kusoma.",
    "Utajifunza njia kuu za kuchomelea na kukata vyuma, viungo na mikao wanayotumia wachomeleaji, jinsi ya kusoma alama ya msingi ya uchomeleaji kwenye mchoro, na jinsi ya kutofautisha uchomeleaji mzuri na mbaya. Kisha utajifunza jinsi wachomeleaji wanavyolinda macho, ngozi, mapafu na masikio, jinsi wanavyozuia moto, na jinsi cheti cha mchomeleaji kinavyopatikana.",
    "Kozi hii inakuandaa. Haikupi cheti wala leseni. Hutachomelea wala kukata chuma katika kozi hii: uchomeleaji unafundishwa tu katika karakana yenye msimamizi na vifaa sahihi vya kujikinga. Cheti cha mchomeleaji, kama AWS Certified Welder cha American Welding Society (AWS, Chama cha Uchomeleaji cha Marekani), kinapatikana kwa kufaulu mtihani wa vitendo katika kituo cha mtihani kilichoidhinishwa.",
    "Kila somo linachukua kama dakika tano, likiwa na kazi ya \"Jaribu sasa\" na maswali mawili mafupi. Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni. Kazi yako ya mwisho ni mpango wako mwenyewe wa kuanza uchomeleaji wenye tarehe halisi."
  ],
  finalTask: "Tengeneza mpango wako wa kuanza uchomeleaji: (1) chati ya njia inayolinganisha njia nne za kuchomelea au kukata na kazi halisi moja kwa kila njia; (2) karatasi ya kusoma yenye michoro ya aina tano za viungo, orodha ya mikao minne, na kasoro tano za uchomeleaji pamoja na sababu moja inayowezekana kwa kila moja; (3) orodha ya usalama kabla ya kuchomelea kwa kazi moja ya stick au MIG inayogusa macho, ngozi, mapafu, masikio, moto na mshtuko wa umeme; na (4) mpango wenye tarehe unaotaja programu mbili za mafunzo karibu nawe, njia na mkao utakaolenga kupata cheti, mahali unapoweza kufanya mtihani (AWS Accredited Test Facility), kile jimbo au jiji lako linachotaka (kutoka ukurasa rasmi), na tarehe kwa kila hatua.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima na vijana wanaotafuta kazi ya mikono: wanaotafuta kazi, watu wanaorudi nyumbani kutoka gerezani, vijana, maveterani, wahamiaji na watu wazima wanaorudi kusoma. Baadhi wamefanya kazi za karakana, shamba, magari au jeshi; wengi hawajawahi kuchomelea.",
    startingPoint: "Wanaweza kusoma maelekezo mafupi na kufanya hesabu za namba kamili. Wengi wanajua kwamba uchomeleaji unatumia joto na mwanga mkali kuunganisha vyuma, lakini hawawezi kutaja njia zake, kusoma alama ya uchomeleaji, kupima ubora wa uchomeleaji au kuorodhesha hatua za usalama.",
    gap: "Shule za uchomeleaji, programu za uanagenzi na waajiri wanataka watu wanaojua maneno ya msingi, wanaochukulia usalama kwa uzito na wanaojua mtihani wa cheti unauliza nini. Wanafunzi wanahitaji msingi huo na mpango wazi wenye tarehe ili wachague mafunzo mazuri, wasipoteze pesa na wafike tayari kujifunza karakanani.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi (kama darasa la 6 hadi 8); kila neno la ufundi linaelezwa",
      "Hakuna kuchomelea, kukata wala kusaga katika kozi hii: kazi ya mikono inahitaji karakana yenye msimamizi na vifaa sahihi vya kujikinga",
      "Vifaa: simu au kompyuta ya maktaba kwa kurasa rasmi na picha za uchomeleaji; karatasi na kalamu kwa michoro na mipango",
      "Muda: masomo ya dakika 5 hadi 6 yanayoingia kati ya kazi na miadi",
      "Sheria zinatofautiana kwa jimbo na jiji: wanafunzi wanakagua leseni kwenye ukurasa rasmi wa mahali wanapoishi"
    ],
    prerequisites: "Hakuna. Kozi \"Kuanza Kazi katika Fani za Ufundi\" inawasaidia wanafunzi kuchagua fani; kozi hii inaingia ndani zaidi katika uchomeleaji."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa maelezo ya kazi ya kuchomelea au kukata", action: "kulinganisha kazi hiyo na njia ya kawaida: stick, MIG, flux-cored, TIG, oxy-fuel au plasma", standard: "ukipata angalau 4 kati ya 5 sahihi" },
    { id: "O2", condition: "Ukipewa mchoro, picha au alama ya uchomeleaji", action: "kutaja aina ya kiungo, mkao wa uchomeleaji na sehemu za msingi za alama ya uchomeleaji", standard: "ukipata angalau 4 kati ya 5 sahihi" },
    { id: "O3", condition: "Ukipewa picha au maelezo ya uchomeleaji uliokamilika", action: "kutambua kasoro za kawaida za uchomeleaji na kutaja sababu inayowezekana ya kila moja", standard: "ukipata angalau 4 kati ya 5 sahihi" },
    { id: "O4", condition: "Ukipewa kazi ya uchomeleaji", action: "kuorodhesha vifaa vya kujikinga, upitishaji hewa na kinga dhidi ya moto ambavyo kazi hiyo inahitaji", standard: "ukigusa macho, ngozi, mapafu, masikio, mshtuko wa umeme na angalau kinga tatu dhidi ya moto" },
    { id: "O5", condition: "Ukitumia tovuti rasmi za eneo lako", action: "kuandika mpango wenye tarehe wa kupata mafunzo na kufanya mtihani wa cheti cha mchomeleaji", standard: "ukiwa na programu mbili halisi, mahali pa mtihani na tarehe kwa kila hatua" }
  ],
  chapters: [
    {
      name: "Sura 1: Jinsi uchomeleaji unavyofanya kazi",
      lessons: [
        {
          title: "Wachomeleaji hufanya nini, na njia kuu",
          objectives: ["O1"],
          minutes: 6,
          goal: "Linganisha kazi ya kuchomelea au kukata na njia sahihi ya kawaida.",
          text: [
            "Uchomeleaji unaunganisha vipande vya chuma kwa kuviyeyusha ili viungane na kuganda kuwa kipande kimoja. Uchomeleaji mwingi unatumia arc ya umeme, cheche ya moto mkali sana kati ya electrode na chuma. Mara nyingi chuma cha kujaza huongezwa, na kitu lazima kikinge chuma cha moto dhidi ya hewa ili uchomeleaji ubaki imara.",
            "Uchomeleaji wa stick (SMAW) unatumia fimbo iliyopakwa. Ni rahisi na unafanya kazi nje na kwenye upepo, kwa hiyo ni wa kawaida katika ujenzi, mabomba na matengenezo. Uchomeleaji wa MIG (GMAW) unapitisha waya kwenye bunduki pamoja na gesi ya kukinga; ni wa haraka na wa kawaida viwandani na kwenye gereji za magari. Uchomeleaji wa flux-cored (FCAW) unapitisha waya wenye flux ndani yake; unatumika kwa chuma kinene na baadhi ya kazi za nje. Uchomeleaji wa TIG (GTAW) unatumia electrode ya tungsten na fimbo tofauti ya kujaza; ni wa polepole lakini safi sana na sahihi, unatumika kwa chuma chembamba, chuma cha pua (stainless steel) na alumini.",
            "Wachomeleaji pia hukata chuma. Ukataji wa oxy-fuel unatumia mwali wa gesi ya mafuta na oksijeni, hasa kwa chuma cha kawaida (steel). Ukataji wa plasma unatumia arc ya umeme na mkondo wa gesi wa kasi na unaweza kukata vyuma vingi.",
            "Kwa kawaida waajiri hukupima katika njia na mkao maalum, kwa hiyo kujua majina haya kunakusaidia kusoma matangazo ya kazi na kuchagua mafunzo."
          ],
          words: [
            ["Arc", "cheche ya umeme yenye moto mkali sana kati ya electrode na chuma, inayoyeyusha chuma."],
            ["Electrode", "fimbo au waya unaobeba umeme kutengeneza arc; katika baadhi ya njia pia unakuwa chuma cha kujaza."],
            ["Chuma cha kujaza (filler metal)", "chuma cha ziada kinachoongezwa kujaza kiungo."],
            ["Kukinga (shielding)", "gesi au flux inayozuia hewa isifike kwenye uchomeleaji wa moto ili ubaki imara."],
            ["Stick (SMAW)", "shielded metal arc welding, inayotumia fimbo iliyopakwa flux."],
            ["MIG (GMAW)", "gas metal arc welding: waya unaopitishwa kwenye bunduki pamoja na gesi ya kukinga."],
            ["Flux-cored (FCAW)", "flux-cored arc welding: waya unaopitishwa wenye flux ndani yake."],
            ["TIG (GTAW)", "gas tungsten arc welding: electrode ya tungsten na fimbo tofauti ya kujaza; polepole na sahihi."]
          ],
          slides: [
            { title: "Uchomeleaji ni nini", bullets: ["Kuyeyusha chuma ili kiungane kuwa kipande kimoja", "Mwingi unatumia arc ya umeme", "Kukinga kunazuia hewa isifike kwenye uchomeleaji"] },
            { title: "Njia nne za kawaida", bullets: ["Stick (SMAW): rahisi, inafanya kazi nje", "MIG (GMAW): haraka, viwandani na gereji za magari", "Flux-cored (FCAW): chuma kinene, baadhi ya kazi za nje", "TIG (GTAW): polepole, safi, chuma chembamba na alumini"] },
            { title: "Kukata", bullets: ["Oxy-fuel: mwali, hasa chuma cha kawaida", "Plasma: arc na gesi ya kasi, vyuma vingi"] },
            { title: "Kwa nini majina ni muhimu", bullets: ["Matangazo ya kazi yanataja njia", "Mitihani ni ya njia na mkao maalum"] }
          ],
          tryIt: "Tafuta kwenye tovuti ya kazi neno \"welder\" (mchomeleaji) karibu nawe na usome matangazo matatu ya kazi. Kwa kila moja, andika njia inayotakiwa (stick, MIG, flux-cored au TIG), kile inachotengeneza au kurekebisha, na cheti chochote kinachotajwa. Kisha tengeneza chati ndogo: njia nne upande mmoja, na kazi moja halisi kando ya kila njia. Itunze: ni sehemu ya 1 ya kazi yako ya mwisho.",
          youCanNow: "kutaja njia kuu za kuchomelea na kukata na kulinganisha kila moja na aina ya kazi inayoifaa.",
          quickCheck: [
            { objective: "O1", q: "Kikundi lazima kirekebishe uzio wa chuma nje siku ya upepo kwa vifaa rahisi. Njia gani inafaa zaidi?", options: ["TIG", "Stick (SMAW)", "Ukataji wa plasma", "MIG yenye gesi ya kukinga"], answer: 1, why: "Uchomeleaji wa stick unatumia fimbo iliyopakwa na unafanya kazi nje na kwenye upepo, ambapo gesi ya kukinga ingepeperushwa." },
            { objective: "O1", q: "Karakana inahitaji uchomeleaji safi sana na sahihi kwenye alumini nyembamba. Njia gani inafaa zaidi?", options: ["Ukataji wa oxy-fuel", "Flux-cored", "Stick", "TIG (GTAW)"], answer: 3, why: "TIG ni ya polepole lakini safi sana na sahihi, na inatumika kwa chuma chembamba na alumini." }
          ]
        },
        {
          title: "Viungo, mikao na alama za uchomeleaji",
          objectives: ["O2"],
          minutes: 6,
          goal: "Taja aina ya kiungo na mkao wa uchomeleaji kwenye mchoro na usome sehemu za msingi za alama ya uchomeleaji.",
          text: [
            "Kuna viungo vitano vya msingi. Kiungo cha butt: vipande viwili ukingo kwa ukingo katika mstari. Kiungo cha tee: kipande kimoja kimesimama juu ya kingine kama herufi T. Kiungo cha lap: vipande viwili vinavyopishana juu ya kingine. Kiungo cha corner: vipande viwili vinavyokutana kwenye kona kama herufi L. Kiungo cha edge: vipande viwili kando kwa kando, vinavyochomelewa kwenye kingo zao.",
            "Kuna mikao minne ya uchomeleaji. Flat (bapa): unachomelea kutoka juu, rahisi zaidi. Horizontal (mlalo): uchomeleaji unaenda kando kwenye uso kama ukuta. Vertical (wima): uchomeleaji unaenda juu au chini. Overhead (juu ya kichwa): unachomelea kutoka chini, mgumu zaidi. Kwenye mitihani mikao hii ina namba 1 hadi 4, na G kwa groove weld na F kwa fillet weld; kwa mfano, 3G ni groove weld ya wima na 2F ni fillet weld ya mlalo.",
            "Groove weld inajaza pengo au mfereji ulioandaliwa, mara nyingi katika kiungo cha butt. Fillet weld inajaza kona ya kiungo cha tee, lap au corner na inaonekana kama pembetatu ukiitazama kwa upande.",
            "Michoro inatumia alama za uchomeleaji. Mshale unaelekeza kwenye kiungo. Alama ya uchomeleaji inakaa kwenye mstari bapa wa marejeo (reference line). Alama ikiwa chini ya mstari, uchomeleaji unaenda upande wa mshale; ikiwa juu ya mstari, unaenda upande mwingine. Pembetatu ndogo inamaanisha fillet weld, na namba iliyo kando yake kwa kawaida ni ukubwa wa uchomeleaji. Mkia ulio mwishoni unaweza kubeba maelezo ya ziada, kama njia ya kuchomelea."
          ],
          steps: [
            "Tafuta mshale: unaelekeza kwenye kiungo.",
            "Tazama mstari wa marejeo: alama chini = upande wa mshale, juu = upande mwingine.",
            "Soma alama: pembetatu inamaanisha fillet.",
            "Soma namba iliyo kando yake (ukubwa) na maelezo yoyote kwenye mkia."
          ],
          words: [
            ["Kiungo (joint)", "mahali vipande viwili vya chuma vinapokutana ili kuchomelewa."],
            ["Butt, tee, lap, corner, edge", "aina tano za msingi za viungo."],
            ["Groove weld", "uchomeleaji unaojaza pengo au mfereji ulioandaliwa kati ya vipande."],
            ["Fillet weld", "uchomeleaji kwenye kona, wenye umbo la pembetatu ukitazamwa kwa upande."],
            ["Mkao (position)", "upande unaochomelea: flat, horizontal, vertical au overhead (1 hadi 4)."],
            ["Alama ya uchomeleaji (weld symbol)", "msimbo wa mchoro wenye mshale, mstari wa marejeo na alama zinazomwambia mchomeleaji achomelee vipi."],
            ["Mstari wa marejeo (reference line)", "mstari bapa wa alama ya uchomeleaji; chini yake ni upande wa mshale, juu yake ni upande mwingine."]
          ],
          slides: [
            { title: "Viungo vitano vya msingi", bullets: ["Butt: ukingo kwa ukingo", "Tee: kama herufi T; Lap: vinapishana", "Corner: kama herufi L; Edge: kando kwa kando"] },
            { title: "Mikao minne", bullets: ["1 Flat (bapa), 2 Horizontal (mlalo)", "3 Vertical (wima), 4 Overhead (juu ya kichwa)", "G = groove, F = fillet (3G, 2F)"] },
            { title: "Groove au fillet", bullets: ["Groove: inajaza pengo, mara nyingi viungo vya butt", "Fillet: inajaza kona, umbo la pembetatu"] },
            { title: "Kusoma alama ya uchomeleaji", bullets: ["Mshale unaelekeza kwenye kiungo", "Chini ya mstari = upande wa mshale; juu = upande mwingine", "Pembetatu = fillet; namba = ukubwa; mkia = maelezo"] }
          ],
          tryIt: "Tumia vipande vya karatasi au vipande viwili vya kadibodi kutengeneza kila kimoja cha viungo vitano, na uchore kila kimoja pamoja na jina lake. Kando ya michoro, orodhesha mikao minne pamoja na namba zake. Kisha tafuta picha ya \"fillet weld symbol\" na uandike: uchomeleaji unaenda upande gani, na namba inamaanisha nini. Itunze michoro: ni sehemu ya 2 ya kazi yako ya mwisho.",
          youCanNow: "kutaja viungo vitano na mikao minne na kusoma sehemu za msingi za alama ya uchomeleaji.",
          quickCheck: [
            { objective: "O2", q: "Bamba moja limesimama wima katikati ya bamba jingine bapa, kama herufi T. Ni kiungo gani?", options: ["Kiungo cha tee", "Kiungo cha butt", "Kiungo cha lap", "Kiungo cha edge"], answer: 0, why: "Kiungo cha tee kina kipande kimoja kilichosimama juu ya kingine kama herufi T." },
            { objective: "O2", q: "Kwenye alama ya uchomeleaji, pembetatu iko chini ya mstari wa marejeo. Uchomeleaji unaenda wapi?", options: ["Upande mwingine", "Pande zote mbili", "Upande wa mshale", "Popote; ni maelezo tu"], answer: 2, why: "Alama iliyo chini ya mstari wa marejeo inamaanisha uchomeleaji unaenda upande wa mshale." }
          ]
        },
        {
          title: "Kutofautisha uchomeleaji mzuri na mbaya",
          objectives: ["O3"],
          minutes: 6,
          goal: "Tambua kasoro za kawaida za uchomeleaji kwenye picha au maelezo na utaje sababu inayowezekana ya kila moja.",
          text: [
            "Wachomeleaji na wakaguzi hukagua uchomeleaji kwanza kwa kuutazama. Uchomeleaji mzuri una umbo na upana ulio sawa, unachanganyika vizuri na vipande vyote viwili, na hauna matundu wala nyufa. Baadhi ya kazi pia hupima uchomeleaji kwa kuukunja au kwa vifaa maalum, na wakaguzi wa uchomeleaji wamefunzwa na wana vyeti kwa kazi hii.",
            "Kasoro za kawaida: Porosity ni matundu madogo au viputo, mara nyingi kutokana na chuma kichafu au gesi ya kukinga isiyotosha. Undercut ni mfereji ulioyeyushwa kwenye chuma kando ya ukingo wa uchomeleaji, mara nyingi kutokana na joto jingi mno au pembe isiyo sahihi. Incomplete fusion (muungano usiokamilika) inamaanisha uchomeleaji haukuyeyuka ndani ya chuma, mara nyingi kutokana na joto kidogo mno au kwenda haraka mno. Nyufa ni mistari ndani au kando ya uchomeleaji; ni hatari sana. Spatter nyingi (vitone vidogo vya chuma kuzunguka uchomeleaji) mara nyingi hutokana na mipangilio isiyo sahihi. Overlap ni chuma cha uchomeleaji kilichojikunja juu ya uso bila kuungana.",
            "Karakanani mwalimu wako atakufundisha jinsi ya kurekebisha kila sababu, kama kusafisha chuma kwanza, kubadilisha mipangilio, pembe au kasi ya kusogea, au kukagua gesi. Katika kozi hii unafanya mazoezi ya kutazama na kutaja."
          ],
          steps: [
            "Tazama umbo: je, upana na urefu wake viko sawa?",
            "Tazama kingo: je, unachanganyika, au kuna mfereji (undercut) au mkunjo (overlap)?",
            "Tazama uso: kuna matundu (porosity) au nyufa?",
            "Tazama kuzunguka: kuna spatter nyingi?",
            "Andika kasoro na sababu inayowezekana."
          ],
          words: [
            ["Kasoro (defect)", "dosari inayoweza kudhoofisha uchomeleaji au kuufanya ushindwe ukaguzi."],
            ["Porosity", "matundu madogo au viputo ndani ya uchomeleaji, mara nyingi kutokana na uchafu au ukingaji usiotosha."],
            ["Undercut", "mfereji ulioyeyushwa kwenye chuma kando ya ukingo wa uchomeleaji."],
            ["Incomplete fusion", "uchomeleaji haukuyeyuka ndani ya chuma cha msingi."],
            ["Spatter", "vitone vidogo vya chuma vinavyorushwa kuzunguka uchomeleaji."],
            ["Ukaguzi wa kuona (visual inspection)", "kukagua uchomeleaji kwa kuutazama kwa makini, mtihani wa kwanza wa kila uchomeleaji."]
          ],
          slides: [
            { title: "Uchomeleaji mzuri", bullets: ["Umbo na upana ulio sawa", "Unachanganyika vizuri na vipande vyote viwili", "Hakuna matundu, hakuna nyufa"] },
            { title: "Kasoro za kawaida", bullets: ["Porosity: matundu au viputo", "Undercut: mfereji kwenye ukingo", "Incomplete fusion; nyufa; spatter; overlap"] },
            { title: "Sababu zinazowezekana", bullets: ["Chuma kichafu au gesi isiyotosha: porosity", "Joto jingi mno au pembe isiyo sahihi: undercut", "Joto kidogo mno au haraka mno: hakuna muungano"] },
            { title: "Kagua kila uchomeleaji", bullets: ["Umbo, kingo, uso, kuzunguka", "Taja kasoro na sababu", "Kurekebisha kunafundishwa karakanani"] }
          ],
          tryIt: "Tafuta picha za \"weld porosity\", \"weld undercut\" na \"good MIG weld\" kutoka shule ya uchomeleaji au muuzaji wa vifaa. Kwa kila picha, andika unachokiona na utaje kasoro (au useme unaonekana mzuri). Kisha tengeneza orodha ya kasoro tano pamoja na sababu moja inayowezekana kwa kila moja. Itunze orodha: inaingia kwenye sehemu ya 2 ya kazi yako ya mwisho.",
          youCanNow: "kutambua kasoro za kawaida za uchomeleaji na kutaja sababu inayowezekana ya kila moja.",
          quickCheck: [
            { objective: "O3", q: "Uchomeleaji una matundu mengi madogo juu ya uso wake. Hii ni kasoro gani?", options: ["Undercut", "Overlap", "Porosity", "Spatter"], answer: 2, why: "Matundu madogo au viputo ndani ya uchomeleaji ni porosity." },
            { objective: "O3", q: "Kuna mfereji ulioyeyushwa kwenye chuma kando ya ukingo wa uchomeleaji. Sababu inayowezekana ni ipi?", options: ["Joto jingi mno au pembe isiyo sahihi", "Chuma kilikuwa safi mno", "Kofia ya kuchomelea ilikuwa nyeusi mno", "Uchomeleaji ulikuwa baridi mno kuguswa"], answer: 0, why: "Undercut mara nyingi hutokana na joto jingi mno au pembe mbaya." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Jinsi uchomeleaji unavyofanya kazi",
        questions: [
          { objective: "O1", q: "Njia gani inapitisha waya kwenye bunduki pamoja na gesi ya kukinga?", options: ["Stick (SMAW)", "MIG (GMAW)", "Ukataji wa oxy-fuel", "TIG (GTAW)"], answer: 1, why: "MIG (gas metal arc welding) inatumia waya unaopitishwa na gesi ya kukinga." },
          { objective: "O1", q: "Ni ipi njia ya kukata inayotumia arc ya umeme na mkondo wa gesi wa kasi?", options: ["Ukataji wa plasma", "Uchomeleaji wa stick", "Uchomeleaji wa TIG", "Brazing (kuunganisha kwa shaba)"], answer: 0, why: "Ukataji wa plasma unatumia arc na mkondo wa gesi wa kasi kukata vyuma vingi." },
          { objective: "O2", q: "Mabamba mawili yanapishana juu ya kingine na yanachomelewa. Hiki ni kiungo gani?", options: ["Kiungo cha butt", "Kiungo cha corner", "Kiungo cha tee", "Kiungo cha lap"], answer: 3, why: "Kiungo cha lap kinatengenezwa kwa vipande viwili vinavyopishana." },
          { objective: "O2", q: "Kwenye mtihani wa uchomeleaji, 3G inamaanisha nini?", options: ["Fillet weld ya bapa", "Fillet weld ya juu ya kichwa", "Groove weld ya wima", "Groove weld ya mlalo"], answer: 2, why: "Mkao 3 ni wima, na G inamaanisha groove weld." },
          { objective: "O3", q: "Uchomeleaji haukuyeyuka ndani ya chuma cha msingi. Kasoro hii inaitwaje?", options: ["Incomplete fusion", "Porosity", "Spatter", "Undercut"], answer: 0, why: "Incomplete fusion inamaanisha uchomeleaji haukuungana na chuma cha msingi." }
        ]
      }
    },
    {
      name: "Sura 2: Usalama na njia yako",
      lessons: [
        {
          title: "Kulinda macho, ngozi, mapafu na masikio yako",
          objectives: ["O4"],
          minutes: 6,
          goal: "Orodhesha vifaa vya kujikinga na upitishaji hewa ambavyo kazi ya uchomeleaji inahitaji.",
          text: [
            "Hatari za uchomeleaji ni pamoja na mwanga mkali sana, chuma cha moto sana na cheche, moshi na gesi, kelele na mshtuko wa umeme. Bureau of Labor Statistics (BLS, ofisi ya takwimu za kazi ya Marekani) inaorodhesha kofia za kuchomelea, kinga ya masikio, glavu zinazostahimili joto na nguo za kujikinga kama vifaa wanavyovaa wachomeleaji. Utajifunza kuchomelea tu katika karakana yenye msimamizi ukiwa na vifaa hivi.",
            "Macho na uso: arc inatoa mwanga, pamoja na miale ya ultraviolet, unaoweza kuunguza macho na ngozi yako, hata ukiutazama kwa sekunde tu. Sheria ya uchomeleaji ya OSHA (ofisi ya usalama kazini ya Marekani) inataka kofia au ngao ya mkono kwa uchomeleaji wa arc, yenye lenzi ya kuchuja iliyo nyeusi ya kutosha kwa njia hiyo; jedwali lake linaonyesha kiwango cha weusi (shade) kwa njia na ukubwa (kwa mfano, shade 12 kwa baadhi ya ukubwa wa kawaida wa electrode za stick). Vaa miwani ya usalama chini ya kofia, na uwalinde watu walio karibu kwa skrini.",
            "Ngozi: vaa nguo zinazostahimili moto zinazofunika mikono na miguu yako (si kitambaa cha sintetiki kinachoweza kuyeyuka), glavu za ngozi za kuchomelea, na buti za ngozi. Mapafu: moshi na gesi za uchomeleaji zinaweza kudhuru afya yako. Weka kichwa chako nje ya wingu la moshi, tumia upitishaji hewa au kifaa cha kuvuta moshi, na tumia kipumulio (respirator) mpango wa mwajiri wako unapokitaka. Mipako kama rangi na zinki kwenye chuma cha galvanized hutoa moshi wenye madhara zaidi. Masikio: kusaga na baadhi ya njia zina kelele, kwa hiyo tumia kinga ya masikio.",
            "Sheria ya uchomeleaji ya OSHA pia inasema oksijeni isitumike kamwe kupitisha hewa, kwa sababu inafanya moto uwake kwa kasi zaidi sana."
          ],
          steps: [
            "Macho: kofia yenye shade sahihi, miwani ya usalama chini yake, skrini kwa wengine.",
            "Ngozi: nguo zinazostahimili moto, glavu na buti za ngozi, hakuna sintetiki.",
            "Mapafu: upitishaji hewa au kuvuta moshi, kichwa nje ya wingu la moshi, kipumulio kikitakiwa.",
            "Masikio: kinga ya masikio kwa kusaga na kazi zenye kelele."
          ],
          words: [
            ["PPE", "vifaa vya kujikinga binafsi: kofia, miwani, glavu, nguo, buti, kinga ya masikio, kipumulio."],
            ["Shade ya kuchuja (filter shade)", "jinsi lenzi ya kuchomelea ilivyo nyeusi; namba kubwa ni nyeusi zaidi."],
            ["Miale ya ultraviolet (UV)", "mwanga usioonekana kutoka kwenye arc unaounguza macho na ngozi."],
            ["Moshi wa uchomeleaji (fumes)", "chembe ndogo sana za chuma na gesi kutoka kwenye uchomeleaji zinazoweza kudhuru mapafu na afya yako."],
            ["Wingu la moshi (fume plume)", "wingu la moshi linalopanda kutoka kwenye uchomeleaji."],
            ["Chuma cha galvanized", "chuma kilichopakwa zinki; kukichomelea kunatoa moshi wenye madhara."],
            ["Kinachostahimili moto (FR)", "kitambaa kilichotengenezwa kuzuia kushika moto."]
          ],
          slides: [
            { title: "Hatari za uchomeleaji", bullets: ["Mwanga mkali na miale ya UV", "Chuma cha moto na cheche", "Moshi na gesi; kelele; mshtuko wa umeme"] },
            { title: "Macho na uso", bullets: ["Kofia yenye shade sahihi ya kuchuja (jedwali la OSHA)", "Miwani ya usalama chini ya kofia", "Skrini zinawalinda watu walio karibu"] },
            { title: "Ngozi na mapafu", bullets: ["Nguo zinazostahimili moto, glavu za ngozi, buti", "Kichwa nje ya wingu la moshi; upitishaji hewa uwashwe", "Kipumulio kikitakiwa; jihadhari na mipako"] },
            { title: "Masikio na hewa", bullets: ["Kinga ya masikio kwa kusaga", "Usitumie kamwe oksijeni kupitisha hewa"] }
          ],
          sources: [
            { name: "OSHA: Uchomeleaji, ukataji na brazing, masharti ya jumla, 29 CFR 1910.252", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.252" },
            { name: "OSHA: Viwango vya uchomeleaji, ukataji na brazing", url: "https://www.osha.gov/welding-cutting-brazing/standards" },
            { name: "US Bureau of Labor Statistics: Welders, cutters, solderers and brazers (wachomeleaji)", url: "https://www.bls.gov/ooh/production/welders-cutters-solderers-and-brazers.htm" }
          ],
          tryIt: "Anza orodha yako ya usalama kabla ya kuchomelea kwa kazi hii: \"Kuchomelea kwa MIG vishikio vya chuma karakanani.\" Andika vichwa vinne: Macho, Ngozi, Mapafu, Masikio. Chini ya kila kimoja, orodhesha kifaa au hatua kutoka kwenye somo. Kisha ongeza mstari mmoja kuhusu cha kukagua ikiwa chuma kimepakwa rangi au ni galvanized. Itunze: itakuwa sehemu ya 3 ya kazi yako ya mwisho.",
          youCanNow: "kuorodhesha vifaa na upitishaji hewa vinavyolinda macho, ngozi, mapafu na masikio ya mchomeleaji.",
          quickCheck: [
            { objective: "O4", q: "Nguo zipi ni chaguo salama kwa uchomeleaji?", options: ["Suti ya michezo ya polyester", "Kaptula na fulana", "Koti la nailoni", "Nguo zinazostahimili moto zinazofunika mikono na miguu"], answer: 3, why: "Sintetiki zinaweza kuyeyuka juu ya ngozi; nguo zinazostahimili moto zinazokufunika zinakulinda dhidi ya cheche na miale ya UV." },
            { objective: "O4", q: "Unaona moshi ukipanda kutoka kwenye uchomeleaji. Unafanya nini na kichwa chako?", options: ["Unakisogeza karibu ili uone vizuri", "Unakiweka nje ya wingu la moshi na kutumia upitishaji hewa", "Unashika pumzi", "Unavua kofia"], answer: 1, why: "Kukaa nje ya wingu la moshi na kutumia upitishaji hewa kunapunguza moshi unaovuta." }
          ]
        },
        {
          title: "Moto, mshtuko wa umeme na kazi za moto",
          objectives: ["O4"],
          minutes: 6,
          goal: "Orodhesha kinga dhidi ya moto na mshtuko za kuchukua kabla, wakati na baada ya kuchomelea.",
          text: [
            "Cheche na slag ya moto zinaweza kuruka mbali na kuwasha moto mahali usipoweza kuona. Sheria ya uchomeleaji ya OSHA (29 CFR 1910.252) inasema kwamba pale inapowezekana, vitu vinavyoweza kuungua lazima vihamishwe angalau futi 35 kutoka kwenye kazi, au vifunikwe au vikingwe ikiwa haviwezi kuhamishwa. Uchomeleaji unafanywa tu mahali palipo salama dhidi ya moto, au palipofanywa salama, baada ya eneo kukaguliwa na mtu anayehusika; idhini hiyo inafaa zaidi kutolewa kama kibali cha maandishi, mara nyingi kinachoitwa hot work permit (kibali cha kazi ya moto).",
            "Moto unapoweza kuanza, kwa mfano kukiwa na vitu vinavyoungua ndani ya futi 35, fire watch inahitajika: mtu anayeangalia moto akiwa na kizima moto tayari. OSHA inasema fire watch lazima abaki angalau nusu saa baada ya uchomeleaji au ukataji kumalizika, kwa sababu vitu vinaweza kufuka moshi taratibu na kushika moto baadaye.",
            "Mshtuko wa umeme: arc inatumia mkondo wa umeme. Weka glavu na nguo zikiwa kavu, usisimame kwenye maji au ardhi yenye unyevu, kagua nyaya kama zimeharibika kabla ya kuzitumia, na usiguse kamwe electrode na chuma kwa wakati mmoja. Kwa mujibu wa BLS, mafunzo ya usalama wa umeme ya OSHA yanatakiwa kwa wachomeleaji.",
            "Mitungi ya gesi ya MIG, TIG na ukataji lazima ishughulikiwe kama mafunzo yako yanavyofundisha, isimame wima na ifungwe ili isiweze kuanguka. Nafasi finyu (confined spaces), kama matangi, zinahitaji mafunzo maalum, vibali na upitishaji hewa; usiingie kamwe ndani ya moja bila hivyo."
          ],
          steps: [
            "Kabla: pata kibali, hamisha vitu vinavyoungua futi 35 mbali au uvifunike, kuwa na kizima moto tayari.",
            "Weka fire watch moto unapoweza kuanza.",
            "Wakati wa kazi: baki mkavu, kagua nyaya, weka eneo wazi.",
            "Baada: fire watch abaki angalau dakika 30."
          ],
          words: [
            ["Kazi ya moto (hot work)", "kuchomelea, kukata, kusaga na kazi nyingine zinazotoa cheche au mwali."],
            ["Kibali cha kazi ya moto (hot work permit)", "idhini ya maandishi kwamba eneo lilikaguliwa na kufanywa salama dhidi ya moto kabla ya kazi ya moto."],
            ["Fire watch", "mtu aliyefunzwa anayeangalia moto wakati wa kazi ya moto na baada yake, akiwa na kizima moto tayari."],
            ["Slag", "ganda gumu linalobaki juu ya baadhi ya uchomeleaji, ambalo lina moto sana linapobanduka."],
            ["Nafasi finyu (confined space)", "nafasi kama tangi au shimo ambayo ni vigumu kuingia na kutoka; inahitaji mafunzo maalum na vibali."]
          ],
          slides: [
            { title: "Kabla ya kuchomelea", bullets: ["Kibali cha kazi ya moto: eneo limekaguliwa na ni salama", "Hamisha vitu vinavyoungua futi 35 mbali, au uvifunike", "Kizima moto tayari"] },
            { title: "Fire watch", bullets: ["Inahitajika moto unapoweza kuanza", "Anabaki angalau dakika 30 baada ya kazi"] },
            { title: "Mshtuko wa umeme", bullets: ["Weka glavu na nguo zikiwa kavu", "Usisimame kamwe kwenye maji", "Kagua nyaya kabla ya kuzitumia"] },
            { title: "Mitungi na nafasi finyu", bullets: ["Mitungi wima na imefungwa", "Nafasi finyu: mafunzo na vibali kwanza"] }
          ],
          sources: [
            { name: "OSHA: Uchomeleaji, ukataji na brazing, masharti ya jumla (kuzuia moto), 29 CFR 1910.252", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.252" },
            { name: "US Bureau of Labor Statistics: Welders, How to Become One (jinsi ya kuwa mchomeleaji)", url: "https://www.bls.gov/ooh/production/welders-cutters-solderers-and-brazers.htm#tab-4" }
          ],
          tryIt: "Maliza orodha yako ya usalama kabla ya kuchomelea. Ongeza vichwa vitatu vipya kwenye orodha ya Somo la 4: Moto kabla, Moto baada na Mshtuko. Chini yake andika: kibali, sheria ya futi 35, kizima moto, fire watch na muda anaobaki, na hatua tatu za kuzuia mshtuko. Soma orodha nzima kwa sauti kana kwamba unamweleza msaidizi mpya. Ni sehemu ya 3 ya kazi yako ya mwisho.",
          youCanNow: "kuorodhesha kinga dhidi ya moto na mshtuko za kuchukua kabla, wakati na baada ya kuchomelea.",
          quickCheck: [
            { objective: "O4", q: "Kwa mujibu wa OSHA, fire watch lazima abaki kwa muda gani baada ya uchomeleaji kumalizika?", options: ["Dakika 5", "Hakuna muda; anaweza kuondoka", "Angalau nusu saa", "Hadi saa ya chakula cha mchana"], answer: 2, why: "OSHA inataka fire watch kwa angalau nusu saa baada ya kazi, kwa sababu moto unaweza kuanza baadaye." },
            { objective: "O4", q: "Masanduku ya kadibodi yako futi 15 kutoka mahali utakapochomelea. Unafanya nini?", options: ["Unayahamisha angalau futi 35 mbali, au unayafunika au kuyakinga", "Unachomelea haraka zaidi", "Unayanyunyizia oksijeni", "Hakuna; futi 15 zinatosha"], answer: 0, why: "OSHA inasema vitu vinavyoweza kuungua vihamishwe angalau futi 35 mbali pale inapowezekana, au vifunikwe au vikingwe." }
          ]
        },
        {
          title: "Mafunzo, cheti na mpango wako",
          objectives: ["O5"],
          minutes: 6,
          goal: "Andika mpango wenye tarehe wa kupata mafunzo na kufanya mtihani wa cheti cha mchomeleaji.",
          text: [
            "Bureau of Labor Statistics inasema kwa kawaida waajiri wanataka cheti cha kuhitimu sekondari (high school diploma) au kinacholingana nacho pamoja na mafunzo ya ufundi na mafunzo kazini. Mafunzo yanapatikana katika madarasa ya ufundi ya sekondari, shule za ufundi stadi, vyuo vya jamii, shule binafsi za uchomeleaji na jeshi. Baadhi ya waajiri wanaendesha programu za uanagenzi, na hata wachomeleaji waliofunzwa kwa kawaida hupata miezi kadhaa ya mafunzo kazini. Kusoma ramani za michoro (blueprints), hesabu za karakana na misingi ya umeme kunasaidia.",
            "Waajiri wengi wanataka wachomeleaji wenye vyeti. AWS inaeleza AWS Certified Welder kuwa mlango wa kawaida zaidi wa kuanzia. Ni mtihani wa vitendo: unachomelea kwa njia, mkao na aina ya chuma maalum, na uchomeleaji wako unakaguliwa kwa kiwango fulani. Unaufanya katika AWS Accredited Test Facility (ATF, kituo cha mtihani kilichoidhinishwa na AWS), na AWS inasema huwezi kupata cheti cha uchomeleaji mtandaoni pekee. Baadhi ya vyeti vinahitaji kudumishwa au kupimwa upya, kwa hiyo kagua sheria za cheti chako kwenye tovuti ya AWS. Baadhi ya waajiri hulipia mafunzo na mtihani.",
            "Baadhi ya majimbo na majiji yanatoa leseni kwa wachomeleaji, na sheria zinatofautiana, kwa hiyo kagua ukurasa rasmi wa mahali unapofanya kazi. Kabla ya kulipia shule, uliza: Je, inakuandaa kwa mtihani wa AWS, na unaweza kufanya mtihani hapo? Ni wahitimu wangapi wanapata kazi za uchomeleaji? Maveterani wanaweza kuuliza VA (ofisi ya maveterani) kuhusu GI Bill. Ikiwa una rekodi ya uhalifu, waajiri wengi wa uchomeleaji huajiri watu wenye rekodi; uliza programu kuhusu uhusiano wake na waajiri."
          ],
          steps: [
            "Andika lengo lako, kwa mfano \"kazi ya mchomeleaji wa MIG katika karakana ya kutengeneza vyuma kufikia kiangazi\".",
            "Chagua njia na mkao utakaolenga kupata cheti kwanza, kulingana na matangazo ya kazi karibu nawe.",
            "Tafuta programu mbili za mafunzo (chuo cha jamii, shule ya uchomeleaji au uanagenzi) na tarehe zake za kuanza.",
            "Tafuta AWS Accredited Test Facility karibu nawe kwenye tovuti ya AWS.",
            "Kagua sheria za jimbo au jiji lako, na uongeze tarehe kwa kila hatua."
          ],
          words: [
            ["AWS", "American Welding Society (Chama cha Uchomeleaji cha Marekani), kinachoendesha programu ya Certified Welder na vyeti vingine vya uchomeleaji."],
            ["Certified Welder", "cheti cha AWS kinachopatikana kwa kufaulu mtihani wa vitendo wa uchomeleaji kwa njia, mkao na aina ya chuma iliyowekwa."],
            ["Accredited Test Facility (ATF)", "mahali palipoidhinishwa na AWS kutoa mitihani ya cheti cha mchomeleaji."],
            ["Mtihani wa vitendo (performance test)", "mtihani ambapo unafanya ujuzi wenyewe, hapa kuchomelea kipande cha mtihani ambacho kinakaguliwa baadaye."],
            ["Karakana ya kutengeneza vyuma (fabrication shop)", "karakana inayokata, kuunda na kuchomelea chuma kuwa vipuri na miundo."]
          ],
          slides: [
            { title: "Njia za kupata mafunzo", bullets: ["Chuo cha jamii au shule ya uchomeleaji", "Madarasa ya ufundi ya sekondari; jeshi", "Uanagenzi na mafunzo kazini"] },
            { title: "AWS Certified Welder", bullets: ["Mtihani wa vitendo: njia, mkao, aina ya chuma", "Katika AWS Accredited Test Facility", "Hakiwezi kupatikana mtandaoni pekee"] },
            { title: "Kabla ya kulipa", bullets: ["Je, inakuandaa kwa mtihani wa AWS?", "Ni wahitimu wangapi wanapata kazi za uchomeleaji?", "Kagua sheria za jimbo au jiji"] },
            { title: "Mpango wako", bullets: ["Lengo, njia na mkao", "Programu mbili na kituo cha mtihani", "Tarehe kwa kila hatua"] }
          ],
          sources: [
            { name: "American Welding Society: Vyeti (Certification)", url: "https://www.aws.org/certification/" },
            { name: "US Bureau of Labor Statistics: Welders, How to Become One (jinsi ya kuwa mchomeleaji)", url: "https://www.bls.gov/ooh/production/welders-cutters-solderers-and-brazers.htm#tab-4" },
            { name: "Apprenticeship.gov: Apprenticeship Job Finder (kutafuta uanagenzi)", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" },
            { name: "CareerOneStop: License finder (kutafuta leseni)", url: "https://www.careeronestop.org/Toolkit/Training/find-licenses.aspx" }
          ],
          tryIt: "Kazi ya mwisho: tengeneza mpango wako wa kuanza uchomeleaji. Weka pamoja chati yako ya njia (Somo la 1), karatasi yako ya kusoma yenye viungo, mikao na kasoro (Masomo ya 2 na 3) na orodha yako ya usalama (Masomo ya 4 na 5). Kisha andika mpango wako wenye tarehe: lengo lako, njia na mkao utakaolenga kupata cheti, programu mbili za mafunzo karibu nawe pamoja na tarehe za kuanza, AWS Accredited Test Facility moja, kile jimbo au jiji lako linachotaka (pamoja na anwani ya tovuti), na tarehe kwa kila hatua.",
          youCanNow: "kufuata mpango wako mwenyewe wenye tarehe wa kupata mafunzo na kufanya mtihani wa cheti cha mchomeleaji.",
          quickCheck: [
            { objective: "O5", q: "Unafanya wapi mtihani wa AWS Certified Welder?", options: ["Mtandaoni pekee ukiwa nyumbani", "Katika duka lolote la vifaa", "Katika AWS Accredited Test Facility", "Katika kozi hii"], answer: 2, why: "AWS inasema cheti kinapatikana kwa kufanya mtihani katika Accredited Test Facility, si mtandaoni pekee." },
            { objective: "O5", q: "Mtihani wa AWS Certified Welder ni wa aina gani?", options: ["Mtihani wa kuandika kwa kibodi", "Mtihani wa vitendo ambapo unachomelea kipande kinachokaguliwa", "Insha", "Mahojiano tu"], answer: 1, why: "Ni mtihani wa vitendo kwa njia, mkao na aina ya chuma maalum." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Usalama na njia yako",
        questions: [
          { objective: "O4", q: "Kwa nini usitazame kamwe arc hata kwa sekunde bila kinga ya macho?", options: ["Ni ukosefu wa adabu", "Mwanga wake, pamoja na miale ya UV, unaweza kuunguza macho yako", "Unadhoofisha uchomeleaji", "Unatumia gesi zaidi"], answer: 1, why: "Mwanga wa arc unaweza kuunguza macho yako hata ukiutazama kwa muda mfupi." },
          { objective: "O4", q: "Chuma utakachochomelea ni galvanized (kimepakwa zinki). Kwa nini hilo ni muhimu?", options: ["Kinatoa moshi wenye madhara zaidi, kwa hiyo upitishaji hewa na kinga sahihi ni muhimu zaidi", "Hakiwezi kuchomelewa kabisa", "Kinafanya uchomeleaji uwe imara zaidi", "Si muhimu"], answer: 0, why: "Mipako kama zinki hutoa moshi wenye madhara inapopashwa joto." },
          { objective: "O4", q: "Ni ipi njia salama ya kuepuka mshtuko wa umeme unapochomelea?", options: ["Kuchomelea ukiwa umesimama kwenye dimbwi la maji", "Kuvaa glavu zenye maji ili upoe", "Kutumia waya wenye ganda lililopasuka", "Kuweka glavu na nguo zikiwa kavu na kukagua nyaya kwanza"], answer: 3, why: "Vifaa vikavu na nyaya zisizoharibika vinazuia umeme kupita mwilini mwako." },
          { objective: "O5", q: "Swali gani linakusaidia zaidi kabla ya kulipia shule ya uchomeleaji?", options: ["Nembo yake ina rangi gani?", "Je, maegesho ni bure?", "Je, inakuandaa kwa mtihani wa AWS, na ni wahitimu wangapi wanapata kazi za uchomeleaji?", "Ukumbi wa mapokezi ni mkubwa kiasi gani?"], answer: 2, why: "Kama programu inaongoza kwenye cheti na kazi inakuambia kama inastahili pesa." },
          { objective: "O5", q: "Hatua ipi ya mpango imekamilika?", options: ["\"Kujifunza uchomeleaji\"", "\"Kupata cheti siku moja\"", "\"Kuangalia shule\"", "\"Kufanya mtihani wa AWS Certified Welder kwa MIG, mkao wa flat, katika ATF ya chuo kufikia Mei 20\""], answer: 3, why: "Inataja mtihani, njia na mkao, mahali na tarehe." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Misingi ya Uchomeleaji",
    questions: [
      { objective: "O1", q: "Uchomeleaji unafanya nini?", options: ["Unabandika chuma kwa utepe", "Unayeyusha chuma ili vipande viungane kuwa kimoja", "Unapaka chuma rangi", "Unakunja chuma kikiwa baridi"], answer: 1, why: "Uchomeleaji unayeyusha chuma ili vipande viungane na kuganda kuwa kimoja." },
      { objective: "O1", q: "Njia gani inatumia fimbo iliyopakwa flux na inafanya kazi vizuri nje?", options: ["Stick (SMAW)", "TIG (GTAW)", "MIG (GMAW)", "Ukataji wa plasma"], answer: 0, why: "Uchomeleaji wa stick unatumia fimbo iliyopakwa na hauhitaji gesi ya kukinga ambayo upepo ungeipeperusha." },
      { objective: "O1", q: "Njia gani inatumia electrode ya tungsten na fimbo tofauti ya kujaza?", options: ["Flux-cored", "Stick", "Ukataji wa oxy-fuel", "TIG (GTAW)"], answer: 3, why: "TIG inatumia electrode ya tungsten, na mchomeleaji anaongeza chuma cha kujaza kwa mkono." },
      { objective: "O1", q: "Kwa nini uchomeleaji unahitaji kukingwa?", options: ["Ili ung'ae", "Ili upoe haraka", "Ili kuzuia hewa ili uchomeleaji ubaki imara", "Ili uwe na kelele zaidi"], answer: 2, why: "Gesi au flux inazuia hewa isifike kwenye chuma cha moto." },
      { objective: "O2", q: "Vipande viwili vimelala ukingo kwa ukingo katika mstari ulionyooka. Ni kiungo gani?", options: ["Kiungo cha lap", "Kiungo cha butt", "Kiungo cha corner", "Kiungo cha tee"], answer: 1, why: "Kiungo cha butt ni vipande viwili vinavyokutana ukingo kwa ukingo." },
      { objective: "O2", q: "Mkao gani wa uchomeleaji kwa kawaida ni mgumu zaidi?", options: ["Flat (bapa)", "Horizontal (mlalo)", "Overhead (juu ya kichwa)", "Hakuna ulio mgumu zaidi"], answer: 2, why: "Uchomeleaji wa juu ya kichwa unafanywa kutoka chini dhidi ya nguvu ya uvutano." },
      { objective: "O2", q: "Kwenye alama ya uchomeleaji, pembetatu ndogo inamaanisha nini?", options: ["Fillet weld", "Groove weld", "Simamisha kazi", "Mkia"], answer: 0, why: "Pembetatu ni alama ya fillet weld." },
      { objective: "O2", q: "Alama ya uchomeleaji iko juu ya mstari wa marejeo. Uchomeleaji unaenda wapi?", options: ["Upande wa mshale", "Pande zote mbili", "Popote", "Upande mwingine"], answer: 3, why: "Juu ya mstari inamaanisha upande mwingine; chini inamaanisha upande wa mshale." },
      { objective: "O3", q: "Ni ipi inaeleza uchomeleaji mzuri?", options: ["Matundu mengi juu ya uso", "Mfereji kwenye kingo", "Upana na umbo ulio sawa, unaochanganyika na vipande vyote viwili", "Spatter nyingi kuuzunguka"], answer: 2, why: "Uchomeleaji mzuri uko sawa, unachanganyika na hauna matundu wala nyufa." },
      { objective: "O3", q: "Sababu inayowezekana ya porosity ni ipi?", options: ["Chuma kichafu au gesi ya kukinga isiyotosha", "Kofia nyeusi", "Chuma safi na kikavu", "Kuvaa glavu za ngozi"], answer: 0, why: "Uchafu na ukingaji usiotosha huacha gesi ikinaswa kama matundu." },
      { objective: "O3", q: "Kasoro gani ni mstari unaopita ndani au kando ya uchomeleaji na ni hatari sana?", options: ["Spatter", "Ufa", "Overlap", "Porosity"], answer: 1, why: "Nyufa zinaweza kufanya uchomeleaji ushindwe na ni kasoro hatari." },
      { objective: "O3", q: "Uchomeleaji haukuyeyuka ndani ya chuma cha msingi. Sababu inayowezekana ni ipi?", options: ["Joto jingi mno", "Kutumia kofia", "Kusafisha chuma", "Joto kidogo mno au kwenda haraka mno"], answer: 3, why: "Incomplete fusion mara nyingi hutokana na joto kidogo mno au kasi kubwa ya kusogea." },
      { objective: "O4", q: "OSHA inataka nini kwa kinga ya macho wakati wa uchomeleaji wa arc?", options: ["Miwani ya jua", "Kofia au ngao ya mkono yenye lenzi sahihi ya kuchuja", "Hakuna kitu ikiwa ni kazi ya haraka", "Barakoa ya vumbi"], answer: 1, why: "OSHA inataka kofia au ngao ya mkono yenye lenzi ya kuchuja kwa uchomeleaji wa arc." },
      { objective: "O4", q: "Ni nini kisichopaswa kamwe kutumika kupitisha hewa katika eneo la uchomeleaji?", options: ["Feni", "Kifaa cha kuvuta moshi", "Oksijeni", "Milango iliyo wazi"], answer: 2, why: "Oksijeni inafanya moto uwake kwa kasi zaidi sana; OSHA inasema isitumike kamwe kupitisha hewa." },
      { objective: "O4", q: "OSHA inasema vitu vinavyoweza kuungua vihamishwe umbali gani kutoka kwenye uchomeleaji, pale inapowezekana?", options: ["Angalau futi 35", "Futi 5", "Futi 10", "Hakuna haja ya kuvihamisha"], answer: 0, why: "Sheria ya OSHA inasema angalau futi 35, au vifunikwe au vikingwe." },
      { objective: "O4", q: "Fire watch ni nini?", options: ["Saa ya ukutani karakanani", "Kengele ya moshi", "Aina ya kofia", "Mtu anayeangalia moto wakati na baada ya kazi ya moto, akiwa na kizima moto"], answer: 3, why: "Fire watch anaangalia moto na anabaki angalau nusu saa baada ya kazi." },
      { objective: "O5", q: "Kozi hii:", options: ["Itakupa cheti cha AWS", "Itakupa leseni ya uchomeleaji", "Inakuandaa kwa mafunzo na mtihani; haikupi cheti", "Itakuruhusu kuchomelea nyumbani"], answer: 2, why: "Cheti kinapatikana kwa mtihani wa vitendo katika Accredited Test Facility." },
      { objective: "O5", q: "Je, unaweza kupata cheti cha uchomeleaji cha AWS mtandaoni pekee?", options: ["Hapana; unafanya mtihani ana kwa ana katika Accredited Test Facility", "Ndiyo, kwa video", "Ndiyo, kwa kusoma kitabu", "Ndiyo, kwa kufanya mtihani huu"], answer: 0, why: "AWS inasema cheti cha uchomeleaji hakiwezi kupatikana mtandaoni pekee." },
      { objective: "O5", q: "Nani anasema ni leseni gani, kama ipo, mchomeleaji anahitaji mahali unapofanya kazi?", options: ["Video ya uchomeleaji", "Jimbo au jiji, kwenye ukurasa wake rasmi", "Tangazo la kazi", "Marafiki zako"], answer: 1, why: "Baadhi ya majimbo na majiji yanatoa leseni kwa wachomeleaji; ukurasa rasmi una sheria." },
      { objective: "O5", q: "Nini kinakusaidia kuchagua njia ya kupata cheti kwanza?", options: ["Rangi unayoipenda", "Kofia ya bei rahisi zaidi", "Kubahatisha", "Njia zinazotajwa katika matangazo ya kazi karibu nawe"], answer: 3, why: "Matangazo ya kazi yanaonyesha njia ambazo waajiri wa eneo lako wanataka." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi alipata kiasi gani
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [1, 2, 4, 7, 9, 11, 12, 14, 17] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Chati ya njia", objective: "O1", notYet: "Njia chini ya nne, au kazi hazilingani na njia.", meets: "Njia nne, kila moja imelinganishwa na kazi halisi inayoifaa.", exceeds: "Pia inaeleza kwa nini kila njia inafaa, kwa maneno kama nje, chuma chembamba au kasi." },
      { name: "Viungo, mikao na alama", objective: "O2", notYet: "Viungo au mikao inakosekana au imepewa majina yasiyo sahihi.", meets: "Viungo vyote vitano vimechorwa na kutajwa, mikao minne imeorodheshwa pamoja na namba.", exceeds: "Pia inasoma alama ya uchomeleaji kwa usahihi: upande, aina na ukubwa." },
      { name: "Orodha ya kasoro", objective: "O3", notYet: "Kasoro chini ya tano, au sababu si sahihi.", meets: "Kasoro tano, kila moja na sababu inayowezekana.", exceeds: "Pia inataja jinsi karakana ingekagua kila kasoro." },
      { name: "Orodha ya usalama", objective: "O4", notYet: "Inakosa macho, ngozi, mapafu, masikio, moto au mshtuko.", meets: "Inagusa macho, ngozi, mapafu, masikio, mshtuko na angalau kinga tatu dhidi ya moto, pamoja na sheria ya futi 35 na fire watch.", exceeds: "Pia inagusa chuma kilichopakwa, mitungi na kibali cha kazi ya moto, na iko wazi vya kutosha kumweleza msaidizi mpya." },
      { name: "Mpango wenye tarehe kutoka vyanzo rasmi", objective: "O5", notYet: "Hatua hazina tarehe, au sheria zimetoka kwenye matangazo au machapisho.", meets: "Programu mbili halisi, AWS Accredited Test Facility moja, sheria za jimbo au jiji pamoja na anwani rasmi ya tovuti, na tarehe kwa kila hatua.", exceeds: "Pia inataja maswali yaliyoulizwa kwa kila programu na mpango mbadala, kama kazi ya msaidizi wa mchomeleaji wakati wa mafunzo." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (rubric)",
      "Wanafunzi wanaojiandikisha katika programu ya uchomeleaji au uanagenzi ndani ya siku 90",
      "Wanafunzi wanaofaulu mtihani wa cheti cha mchomeleaji ndani ya miezi 12 (wanavyoripoti wenyewe katika ufuatiliaji)",
      "Wanafunzi wanaoajiriwa kama wachomeleaji au wasaidizi wa wachomeleaji ndani ya miezi 6",
      "Programu washirika zinaripoti kwamba wanafunzi wapya wanafika wakijua maneno ya msingi na hatua za usalama"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye intaneti kwa kurasa za AWS, OSHA, BLS na jimbo na kwa picha za uchomeleaji",
      "Karatasi, kalamu, mkasi na vipande vya karatasi au kadibodi kwa mifano ya viungo",
      "Si lazima: sampuli za uchomeleaji (mzuri na mbaya) kutoka shule au karakana ya eneo lako za kutazama, si za kutengeneza",
      "Kama dakika 60 hadi 75 kwa jumla, katika vipindi vifupi: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Hakuna kuchomelea, kukata wala kusaga katika kozi hii. Kazi ya mikono ni ya karakana yenye msimamizi na PPE kamili.",
      "Ukiweza, leta sampuli za uchomeleaji au kofia na glavu zilizotumika ili wanafunzi wazitazame na kuzishika (vipande baridi na safi tu).",
      "Mwalike mwalimu wa uchomeleaji, AWS Accredited Test Facility au karakana ya eneo lako ya kutengeneza vyuma kuzungumza kuhusu wanachotafuta.",
      "Msaidie kila mwanafunzi kukagua sheria za jimbo au jiji lake mwenyewe; usitoe jibu moja kwa kikundi kizima.",
      "Kwa wanafunzi wenye rekodi au maveterani, waunganishe na huduma za kurudi katika jamii au za maveterani; usiahidi matokeo yoyote.",
      "Weka alama za kazi ya mwisho kwa rubric na utoe maoni kwa mstari mmoja wa Bado kwa wakati mmoja."
    ]
  }
};
