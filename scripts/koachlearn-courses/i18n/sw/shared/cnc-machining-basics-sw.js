"use strict";

// Koach Learn course (Swahili translation of shared/cnc-machining-basics.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "cnc-machining-basics-sw",
  lang: "sw",
  translationOf: "cnc-machining-basics",
  category: "Workforce Development",
  name: "Misingi ya Uchongaji kwa Mashine za CNC",
  skills: "Kutaja mashine za CNC na mihimili yake, Kusoma vipimo na uvumilivu kwenye mchoro, Kusoma G-code na M-code za msingi, Kupanga hatua za maandalizi salama na kipande cha kwanza, Kutambua hatari za karakana na jinsi ya kuzidhibiti, Kupanga njia yako ya mafunzo na vyeti vya uchongaji",
  outcome: "kutaja mashine kuu za CNC na mihimili yake, kusoma vipimo na uvumilivu kwenye mchoro rahisi wa kipande, kusoma programu fupi ya G-code na kuchora njia ya kifaa kwenye karatasi ya grafu, kupanga kwa mpangilio sahihi hatua za maandalizi salama na kipande cha kwanza, kutaja njia za kudhibiti hatari za kawaida za karakana, na kufuata mpango wenye tarehe wa kupata mafunzo na cheti cha uchongaji.",
  about: [
    "Wachongaji na waendeshaji wa mashine za CNC hutengeneza vipande vya chuma na plastiki vilivyomo ndani ya magari, ndege, mitambo ya shamba, vifaa vya matibabu na mashine za kila kiwanda. Wengi huanza kama waendeshaji wa mashine na kupanda hadi kazi za maandalizi, uandishi wa programu na ukaguzi. Kozi hii ni kwa yeyote anayefikiria njia hiyo: wanaotafuta kazi, vijana, wanajeshi wastaafu, watu wanaorudi nyumbani kutoka gerezani, wahamiaji na watu wazima wanaorudi kusoma.",
    "Utajifunza mashine za CNC zinafanya nini na mihimili yake inavyosogea, jinsi ya kusoma ukubwa na uvumilivu kwenye mchoro wa kipande, jinsi ya kusoma programu fupi ya CNC mstari kwa mstari, na mpangilio wa maandalizi salama na kipande cha kwanza. Kisha utajifunza hatari za karakana na jinsi wachongaji wanavyozidhibiti, na jinsi mafunzo na vyeti vinavyofanya kazi.",
    "Kozi hii inakuandaa. Haikupi cheti wala leseni, na hutaendesha mashine ndani yake. Kuendesha mashine ya kusaga (mill) au lathe kunafundishwa tu katika karakana inayosimamiwa na mwalimu mwenye sifa. Vyeti vya uchongaji, kama vile vya National Institute for Metalworking Skills (NIMS, taasisi ya Marekani ya ujuzi wa kufanya kazi na chuma), kwa kawaida vinahitaji mtihani wa maandishi na ukaguzi wa vitendo.",
    "Kila somo linachukua kama dakika tano, likiwa na kazi ya \"Jaribu sasa\" kwenye karatasi au kompyuta na maswali mawili mafupi. Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni. Kazi yako ya mwisho ni mpango wako mwenyewe wa kuanza CNC wenye tarehe halisi."
  ],
  finalTask: "Tengeneza mpango wako wa kuanza CNC: (1) mchoro wa ukurasa mmoja wa mashine ya kusaga (mill) na lathe, mihimili X, Y na Z ikiwa imewekwa alama; (2) karatasi ya kusoma mchoro kwa kipande cha mazoezi, ikionyesha mipaka ya ukubwa iliyokokotolewa kwa vipimo vitatu vyenye uvumilivu; (3) programu fupi ya mazoezi (mistari 8 hadi 12) inayokata mraba au mfereji rahisi, kila mstari ukielezwa kwa maneno yako mwenyewe na njia ya kifaa ikichorwa kwenye karatasi ya grafu; (4) orodha ya kukagua maandalizi na usalama kwa kipande cha kwanza inayohusu vizuizi (guards), kinga ya macho, mavazi, vibanzi, kipozaji, ushikaji wa kipande, offsets, jaribio kavu (dry run) na ukaguzi wa kipande cha kwanza; na (5) mpango wenye tarehe unaotaja programu mbili za mafunzo au uanagenzi karibu nawe, cheti cha NIMS utakacholenga (kutoka tovuti rasmi), na tarehe ya kila hatua.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Vijana na watu wazima wanaotafuta kazi ya mikono katika viwanda: wanaotafuta kazi, wanafunzi wa sekondari na waliohitimu, wanajeshi wastaafu, watu wanaorudi nyumbani kutoka gerezani, wahamiaji na watu wazima wanaorudi kusoma. Baadhi wamesoma ufundi shuleni, au wamefanya kazi ya magari, mashamba au matengenezo jeshini; wengi hawajawahi kuendesha mashine ya CNC.",
    startingPoint: "Wanaweza kusoma maelekezo mafupi, kusoma utepe wa kupimia na kufanya hesabu za namba kamili na desimali. Wengi wanajua kuwa viwanda vinatumia mashine zinazoendeshwa na kompyuta, lakini hawawezi kutaja mashine au mihimili, kusoma uvumilivu, kusoma mstari wa G-code, wala kuorodhesha hatua za maandalizi salama.",
    gap: "Waajiri, wadhamini wa uanagenzi na programu za uchongaji wanataka watu wanaojua maneno ya msingi, wanaoweza kusoma mchoro na programu rahisi, na wanaozingatia usalama. Wanafunzi wanahitaji msingi huo na mpango wenye tarehe, ili wachague mafunzo mazuri, wasipoteze pesa na wafike tayari kujifunza kwenye mashine.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi (kama darasa la 6 hadi 8); kila neno la karakana linaelezwa",
      "Hakuna kazi ya mashine katika kozi hii: kuendesha mill au lathe kunahitaji karakana inayosimamiwa na mwalimu mwenye sifa",
      "Vifaa: simu au kompyuta ya maktaba kwa kurasa rasmi; karatasi ya grafu, penseli na rula kwa michoro na njia za kifaa",
      "Hesabu: desimali hadi nafasi tatu (elfu moja ya inchi) na milimita rahisi; mifano iliyotatuliwa inatolewa",
      "Muda: masomo ya dakika 5 hadi 6 yanayoingia kati ya shule, kazi na miadi",
      "G-code hutofautiana kulingana na kidhibiti cha mashine: wanafunzi wanafuata mwongozo wa mashine wanayojifunzia"
    ],
    prerequisites: "Hakuna. Kozi \"Hesabu za Kila Siku\" inasaidia kwa desimali; kozi \"Kuanza Kazi katika Ufundi Stadi\" inawasaidia wanafunzi kuchagua fani, na kozi hii inaingia ndani zaidi katika uchongaji."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa picha au maelezo ya mashine za karakana na vipande", action: "kutaja mashine ya CNC inayotengeneza kila kipande na kuonyesha mihimili yake ya X, Y na Z", standard: "ukipata angalau 4 kati ya 5 sahihi" },
    { id: "O2", condition: "Ukipewa mchoro rahisi wa kipande wenye vipimo vyenye uvumilivu", action: "kuandika ukubwa mdogo kabisa na mkubwa kabisa unaoruhusiwa kwa kila kipimo na kuamua kama kipande kilichopimwa kinafaulu", standard: "bila makosa ya hesabu katika vipimo 3" },
    { id: "O3", condition: "Ukipewa programu fupi ya CNC yenye mistari 8 hadi 12", action: "kueleza kila mstari wa G-code na M-code unafanya nini na kuchora njia ya kifaa kwenye karatasi ya grafu", standard: "misogeo na sehemu za kuanzia na kumalizia zikiwa sahihi" },
    { id: "O4", condition: "Ukipewa hatua za maandalizi na kipande cha kwanza zikiwa zimechanganywa", action: "kupanga hatua za maandalizi salama na kipande cha kwanza kwa mpangilio sahihi", standard: "jaribio kavu na ukaguzi wa kipande cha kwanza vikiwa kabla ya uzalishaji" },
    { id: "O5", condition: "Ukipewa hatari tano za kawaida za karakana ya mashine", action: "kutaja njia ya kudhibiti kila hatari: kizuizi, vifaa vya kujikinga, tabia salama au lockout", standard: "ukitaja njia sahihi kwa zote tano" },
    { id: "O6", condition: "Ukitumia kurasa rasmi za mafunzo, uanagenzi na NIMS", action: "kuandika mpango wenye tarehe wa kupata mafunzo na cheti cha uchongaji", standard: "wenye programu mbili, cheti kimoja na tarehe ya kila hatua" }
  ],
  chapters: [
    {
      name: "Sura 1: Mashine, michoro na programu",
      lessons: [
        {
          title: "Mashine za CNC zinafanya nini na zinavyosogea",
          objectives: ["O1"],
          minutes: 5,
          goal: "Taja mashine kuu za CNC na uonyeshe mihimili yake ya X, Y na Z.",
          text: [
            "CNC maana yake ni computer numerical control (udhibiti wa namba kwa kompyuta). Mashine ya CNC inafuata programu kusogeza kifaa cha kukata au kipande kwenye njia sahihi kabisa. Uchongaji (machining) maana yake ni kukata na kuondoa sehemu ya kitu, kwa vibanzi, hadi kipande kiwe na umbo na ukubwa sahihi.",
            "Mashine ya kusaga ya CNC (mill, au machining center) inashikilia kipande kikiwa kimetulia juu ya meza huku kifaa kinachozunguka kikikikata. Inatengeneza nyuso bapa, mashimo ya ndani (pockets), mifereji na matundu, kama bano au bamba la injini. Lathe ya CNC (au turning center) inazungusha kipande huku kifaa kilichotulia kikikikata. Inatengeneza vipande vya duara, kama ekseli, pini na bushi. Karakana pia hutumia router za CNC kwa mbao na plastiki, na mashine za CNC za kukata kwa plasma na leza kwa mabati.",
            "Kila upande ambao mashine inaweza kusogea ni mhimili (axis). Kwenye mill ya kawaida iliyosimama wima, X inasogea kushoto na kulia, Y inasogea kukuelekea na kwenda mbali nawe, na Z inasogea juu na chini pamoja na spindle. Kwenye lathe, Z inafuata urefu wa kipande kinachozunguka na X inakatiza kipande, na hiyo ndiyo inayoweka kipenyo. Mashine kubwa huongeza mihimili ya kuzunguka, kwa hiyo mashine ya \"mihimili 5\" (5-axis) inaweza pia kuinamisha na kuzungusha kipande."
          ],
          words: [["CNC", "computer numerical control: mashine inayofuata programu ya namba na misimbo."], ["Mill", "mashine ya kusaga: kifaa kinachozunguka kinakata kipande kilichoshikwa juu ya meza."], ["Lathe", "mashine ambayo kipande kinazunguka na kifaa kilichotulia kinakikata; inatengeneza vipande vya duara."], ["Spindle", "sehemu ya mashine inayozungusha kifaa (kwenye mill) au kipande (kwenye lathe)."], ["Mhimili (axis)", "upande mmoja ambao mashine inaweza kusogea, kama X, Y au Z."]],
          slides: [
            { title: "CNC = computer numerical control", bullets: ["Programu inasogeza kifaa au kipande kwenye njia sahihi kabisa", "Uchongaji unaondoa sehemu ya kitu kwa vibanzi"] },
            { title: "Mill na lathe", bullets: ["Mill: kipande kimetulia, kifaa kinazunguka: nyuso, pockets, mifereji, matundu", "Lathe: kipande kinazunguka, kifaa kimetulia: ekseli, pini, bushi"] },
            { title: "Mihimili ya mill iliyosimama wima", bullets: ["X: kushoto na kulia", "Y: kukuelekea na kwenda mbali nawe", "Z: juu na chini pamoja na spindle"] },
            { title: "Mihimili ya lathe", bullets: ["Z: kwa urefu wa kipande", "X: kukatiza kipande; inaweka kipenyo", "Mashine za mihimili 5 zinaongeza kuinamisha na kuzungusha"] }
          ],
          tryIt: "Tafuta vipande vitatu vya chuma au plastiki nyumbani (bolti, bawaba ya mlango, kifuniko cha kalamu, kipande cha baiskeli). Kwa kila kimoja, andika \"mill\" au \"lathe\" na kwa nini. Kisha chora mill iliyosimama wima kama sanduku lenye spindle juu, na uweke alama X, Y na Z kwa mishale.",
          youCanNow: "kusema mill ya CNC na lathe ya CNC zinatengeneza nini na kuonyesha mihimili ya X, Y na Z kwenye kila moja.",
          quickCheck: [
            { objective: "O1", q: "Karakana inahitaji pini 500 za duara za chuma cha pua. Mashine ipi inafaa zaidi?", options: ["Mashine ya CNC ya kukata kwa plasma", "Lathe ya CNC", "Router ya CNC ya mbao", "Mashine ya kukunja mabati"], answer: 1, why: "Lathe inazungusha kipande, kwa hiyo inatengeneza vipande vya duara kama pini na ekseli." },
            { objective: "O1", q: "Kwenye mill ya kawaida iliyosimama wima, mhimili upi unasogeza spindle juu na chini?", options: ["X", "Y", "A", "Z"], answer: 3, why: "Kwenye mill iliyosimama wima, Z ni mhimili wa spindle wa juu na chini." }
          ]
        },
        {
          title: "Kusoma mchoro: vipimo na uvumilivu",
          objectives: ["O2"],
          minutes: 6,
          goal: "Andika ukubwa mdogo kabisa na mkubwa kabisa unaoruhusiwa kwa kipimo chenye uvumilivu na uamue kama kipande kinafaulu.",
          text: [
            "Mchoro (print, pia huitwa blueprint au drawing) unaonyesha kipande kutoka pande tofauti na unatoa kila ukubwa unaohitaji. Kila ukubwa ni kipimo (dimension). Karakana za Marekani mara nyingi hutumia inchi zilizoandikwa hadi nafasi tatu au nne za desimali; karakana nyingi hutumia milimita. Kisanduku cha kichwa (title block), kwenye kona ya mchoro, kinaonyesha jina la kipande, malighafi, vipimo vinavyotumika na uvumilivu wa jumla.",
            "Hakuna kipande kinachoweza kutengenezwa bila kasoro hata kidogo, kwa hiyo mchoro unasema ukubwa unaweza kupotoka kiasi gani. Ruhusa hiyo ni uvumilivu (tolerance). \"1.000 ±0.005\" maana yake ukubwa unaweza kuwa kutoka inchi 0.995 hadi 1.005. Namba hizi mbili ni mipaka. Kama kipimo hakina uvumilivu ulioandikwa kando yake, uvumilivu wa jumla ulio kwenye kisanduku cha kichwa unatumika.",
            "Wachongaji hukagua ukubwa kwa vifaa vya kupimia. Kalipa (calipers) hupima haraka ukubwa wa nje, wa ndani na wa kina. Mikromita (micrometer) hupima kwa usahihi zaidi katika masafa madogo. Vifaa hutunzwa vikiwa safi na hukaguliwa dhidi ya kipimo kinachojulikana, kwa sababu kifaa kichafu au kilichoanguka kinaweza kutoa kipimo kisicho sahihi."
          ],
          steps: ["Tafuta kipimo na kipimo chake cha urefu (inchi au mm) kwenye mchoro.", "Tafuta uvumilivu wake kando yake, au uvumilivu wa jumla kwenye kisanduku cha kichwa.", "Toa uvumilivu kupata ukubwa mdogo kabisa; ongeza uvumilivu kupata ukubwa mkubwa kabisa.", "Linganisha ukubwa uliopimwa: kama uko kati ya mipaka, kipimo kinafaulu."],
          words: [["Mchoro (print)", "picha ya kipande yenye ukubwa wake wote; pia huitwa blueprint."], ["Kipimo (dimension)", "ukubwa unaoonyeshwa kwenye mchoro, kama urefu, upana au kipenyo cha tundu."], ["Uvumilivu (tolerance)", "kiasi ambacho ukubwa unaweza kupotoka na bado ukawa mzuri, kama ±0.005."], ["Mipaka (limits)", "ukubwa mdogo kabisa na mkubwa kabisa unaoruhusiwa."], ["Kisanduku cha kichwa (title block)", "kisanduku kwenye mchoro chenye jina la kipande, malighafi, vipimo vinavyotumika na uvumilivu wa jumla."], ["Kalipa / mikromita", "vifaa vya kupimia; mikromita ni sahihi zaidi katika masafa madogo."]],
          slides: [
            { title: "Mchoro unatoa kila ukubwa", bullets: ["Kila ukubwa ni kipimo (dimension)", "Inchi (mara nyingi desimali 3 au 4) au milimita", "Kisanduku cha kichwa: kipande, malighafi, vipimo, uvumilivu wa jumla"] },
            { title: "Uvumilivu = kosa linaloruhusiwa", bullets: ["1.000 ±0.005 maana yake 0.995 hadi 1.005", "Hakuna uvumilivu ulioandikwa? Tumia ule wa kisanduku cha kichwa"] },
            { title: "Kokotoa mipaka", bullets: ["Mdogo kabisa = ukubwa toa uvumilivu", "Mkubwa kabisa = ukubwa jumlisha uvumilivu", "Kati ya mipaka = kinafaulu"] },
            { title: "Vifaa vya kupimia", bullets: ["Kalipa: ukubwa wa nje, ndani na kina kwa haraka", "Mikromita: sahihi zaidi katika masafa madogo", "Tunza vifaa vikiwa safi na vimekaguliwa"] }
          ],
          tryIt: "Mazoezi tu. Kokotoa mipaka ya: (a) 2.500 ±0.010, (b) 0.750 ±0.002, (c) 25.0 ±0.1 mm. Kisha amua: kipande kilichopimwa 0.753 kwa (b), kinafaulu? (Majibu: a 2.490 hadi 2.510; b 0.748 hadi 0.752; c 24.9 hadi 25.1 mm; 0.753 ni kikubwa mno, kwa hiyo kinashindwa.)",
          youCanNow: "kutafuta kipimo na uvumilivu wake kwenye mchoro, kukokotoa mipaka yake, na kuamua kama kipande kilichopimwa kinafaulu.",
          quickCheck: [
            { objective: "O2", q: "Mchoro unasema 1.250 ±0.003. Mipaka ni ipi?", options: ["1.247 hadi 1.253", "1.250 hadi 1.253", "1.220 hadi 1.280", "1.247 hadi 1.250"], answer: 0, why: "Toa 0.003 kupata ukubwa mdogo kabisa na ongeza 0.003 kupata mkubwa kabisa." },
            { objective: "O2", q: "Kipimo hakina uvumilivu ulioandikwa kando yake. Unaangalia wapi?", options: ["Uliza mashine", "Kisia ±0.1", "Uvumilivu wa jumla kwenye kisanduku cha kichwa", "Uvumilivu wowote unafaa"], answer: 2, why: "Kisanduku cha kichwa kinatoa uvumilivu wa jumla kwa vipimo visivyo na uvumilivu wao wenyewe." }
          ]
        },
        {
          title: "Kusoma programu fupi ya CNC",
          objectives: ["O3"],
          minutes: 6,
          goal: "Eleza kila mstari wa programu fupi ya G-code unafanya nini na uchore njia ya kifaa.",
          text: [
            "Mashine nyingi za CNC husoma programu iliyoandikwa kwa G-code. Kila mstari, unaoitwa block, unatoa amri moja au chache. G-code mara nyingi zinaiambia mashine jinsi ya kusogea. M-code zinawasha na kuzima kazi za mashine. Herufi zenye namba zinatoa maelezo: X, Y na Z ni nafasi, F ni kasi ya kulisha (feed rate: kasi ya kifaa kinapokata), S ni kasi ya spindle, na T inachagua kifaa.",
            "Misimbo ya kawaida kwenye mashine nyingi: G00 ni msogeo wa haraka (rapid: kwa kasi, bila kukata). G01 ni msogeo wa kukata kwa mstari ulionyooka kwa kasi ya kulisha. G02 na G03 hukata matao, kwa mwelekeo wa saa na kinyume cha saa. G20 huweka inchi na G21 huweka milimita. G90 maana yake nafasi zinapimwa kutoka sehemu ya sifuri ya kipande (absolute). M03 huwasha spindle kwa mwelekeo wa saa, M05 huisimamisha, M08 huwasha kipozaji (coolant), M09 hukizima, na M30 humaliza programu.",
            "Misimbo inaweza kutofautiana kutoka kidhibiti kimoja cha mashine hadi kingine, kwa hiyo mchongaji daima hukagua mwongozo wa mashine iliyo mbele yake. Karakana nyingi huandika programu kwa programu ya kompyuta ya CAM, lakini wachongaji bado husoma misimbo ili kunasa makosa kabla kifaa hakijasogea. Kitazamaji cha G-code cha bure kwenye kivinjari kinaweza kuchora njia ya programu, lakini karatasi ya grafu inafaa vilevile kwa mazoezi."
          ],
          steps: ["Soma mistari ya kwanza: vipimo (G20 au G21) na hali ya absolute (G90).", "Tafuta kifaa (T), kasi ya spindle (S) na kuwasha spindle (M03).", "Kwa kila msogeo, andika msimbo (G00 au G01) na nafasi ya X, Y na Z.", "Weka kila nukta ya X na Y kwenye karatasi ya grafu na uziunganishe kwa mpangilio: mstari wa vistari kwa rapid, mstari kamili kwa kukata.", "Tafuta mwisho: kusimamisha spindle (M05), kuzima kipozaji (M09) na mwisho wa programu (M30)."],
          words: [["G-code", "misimbo, mingi ikiwa ya misogeo, ambayo mashine ya CNC husoma."], ["M-code", "misimbo inayowasha au kuzima kazi za mashine, kama spindle au kipozaji."], ["Block", "mstari mmoja wa programu ya CNC."], ["Kasi ya kulisha (F)", "kasi ambayo kifaa kinasogea kinapokata."], ["Kasi ya spindle (S)", "kasi ambayo spindle inazunguka, kwa mizunguko kwa dakika."], ["Njia ya kifaa (toolpath)", "njia ambayo kifaa kinafuata."], ["CAM", "programu ya kompyuta inayogeuza modeli ya 3D kuwa programu ya CNC."]],
          slides: [
            { title: "Programu ni orodha ya blocks", bullets: ["G-code: mara nyingi misogeo", "M-code: kuwasha na kuzima kazi za mashine", "X, Y, Z nafasi; F kulisha; S kasi; T kifaa"] },
            { title: "G-code za kawaida", bullets: ["G00 msogeo wa haraka, bila kukata", "G01 msogeo wa kukata kwa mstari ulionyooka", "G02 / G03 matao, mwelekeo wa saa / kinyume cha saa", "G20 inchi, G21 mm, G90 absolute"] },
            { title: "M-code za kawaida", bullets: ["M03 spindle inawaka kwa mwelekeo wa saa, M05 spindle inasimama", "M08 kipozaji kinawaka, M09 kipozaji kinazimwa", "M30 mwisho wa programu"] },
            { title: "Isome, kisha uichore", bullets: ["Weka kila nukta ya X na Y kwenye karatasi ya grafu", "Mstari wa vistari = rapid, mstari kamili = kukata", "Misimbo hutofautiana kwa kidhibiti: kagua mwongozo wa mashine"] }
          ],
          tryIt: "Mazoezi tu, kwenye karatasi ya grafu (mraba 1 = inchi 0.1). Eleza kila mstari, kisha uuchore: G20 G90 / T1 M06 / S1500 M03 / G00 X0 Y0 / G00 Z0.1 / G01 Z-0.05 F5.0 / G01 X1.0 / G01 Y1.0 / G01 X0 / G01 Y0 / G00 Z1.0 / M05 / M30. Unapaswa kupata mraba wa inchi 1 uliokatwa kwa kina cha inchi 0.05.",
          youCanNow: "kusoma programu fupi ya CNC mstari kwa mstari na kuchora njia ambayo kifaa kitafuata.",
          quickCheck: [
            { objective: "O3", q: "G01 X2.0 F10.0 inaiambia mashine ifanye nini?", options: ["Msogeo wa haraka hadi X2.0 bila kukata", "Kusimamisha spindle", "Kuwasha kipozaji", "Kukata kwa mstari ulionyooka hadi X2.0 kwa kasi ya kulisha 10"], answer: 3, why: "G01 ni msogeo wa kukata kwa mstari ulionyooka, na F inaweka kasi ya kulisha." },
            { objective: "O3", q: "Msimbo upi kwa kawaida huanzisha spindle kuzunguka kwa mwelekeo wa saa?", options: ["M30", "M03", "G00", "M09"], answer: 1, why: "M03 ni kuwasha spindle kwa mwelekeo wa saa kwenye vidhibiti vingi; M30 humaliza programu na M09 huzima kipozaji." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Mashine, michoro na programu",
        questions: [
          { objective: "O1", q: "Kipande ni bamba bapa la alumini lenye pocket na matundu manne. Mashine ipi inafaa zaidi?", options: ["Lathe ya CNC", "Mill ya CNC", "Utepe wa kupimia", "Mashine ya kutoboa tu"], answer: 1, why: "Mill inatengeneza nyuso bapa, pockets na matundu kwenye kipande kilichotulia juu ya meza." },
          { objective: "O1", q: "Kwenye lathe, mhimili upi unafuata urefu wa kipande kinachozunguka?", options: ["Z", "X", "Y", "B"], answer: 0, why: "Kwenye lathe, Z inafuata urefu wa kipande na X inakikatiza, ikiweka kipenyo." },
          { objective: "O2", q: "Ekseli lazima iwe 0.500 ±0.001. Inapima 0.4995. Inafaulu?", options: ["Hapana, ni ndogo mno", "Hapana, ukubwa wowote chini ya 0.500 unashindwa", "Ndiyo, iko kati ya 0.499 na 0.501", "Huwezi kujua"], answer: 2, why: "Mipaka ni 0.499 hadi 0.501, na 0.4995 iko kati yake." },
          { objective: "O3", q: "Mstari wa programu unasema G00 Z1.0. Nini kinatokea?", options: ["Kifaa kinakata chini inchi 1", "Kipozaji kinawaka", "Programu inaisha", "Kifaa kinasogea haraka, bila kukata, hadi Z1.0"], answer: 3, why: "G00 ni msogeo wa haraka; hapa inainua kifaa mbali hadi Z1.0." },
          { objective: "O3", q: "Mashine yako ya mafunzo inatumia msimbo ambao hujawahi kuuona. Unafanya nini?", options: ["Kisia kutoka mashine nyingine", "Kagua mwongozo wa kidhibiti cha mashine hiyo", "Futa mstari huo", "Iendeshe na uangalie"], answer: 1, why: "Misimbo hutofautiana kwa kidhibiti, kwa hiyo mwongozo wa mashine yenyewe ndio chanzo." }
        ]
      }
    },
    {
      name: "Sura 2: Maandalizi, usalama na njia yako",
      lessons: [
        {
          title: "Kuandaa mashine na kutengeneza kipande cha kwanza",
          objectives: ["O4"],
          minutes: 6,
          goal: "Panga hatua za maandalizi salama na kipande cha kwanza kwa mpangilio sahihi.",
          text: [
            "Kabla karakana haijatengeneza vipande vingi, mtu huandaa mashine (setup) na kuthibitisha programu. Waendeshaji wapya mara nyingi huanza kwa kupakia vipande na kukagua ukubwa, kisha hujifunza kuandaa mashine chini ya mchongaji kiongozi.",
            "Maandalizi maana yake: soma mchoro na karatasi ya maandalizi (setup sheet), safisha meza au chuck, shika kipande kwa nguvu (ushikaji wa kipande, kama vise au chuck), pakia vifaa sahihi, na weka offsets. Work offset inaiambia mashine sehemu ya sifuri ya kipande iko wapi. Tool offset inaiambia kila kifaa kina urefu gani, ili ncha yake ifike mahali sahihi.",
            "Kisha programu inathibitishwa polepole. Jaribio kavu (dry run) linasogeza mashine kifaa kikiwa juu ya kipande kwa usalama. Single block inaendesha mstari mmoja kwa wakati. Kitufe cha feed override kinapunguza kasi ya misogeo, na mwendeshaji anaweka mkono karibu na feed hold au kitufe cha kusimamisha dharura. Baada ya kipande cha kwanza kukatwa, kinapimwa dhidi ya kila kipimo kwenye mchoro. Huu ni ukaguzi wa kipande cha kwanza (first-article inspection). Ni pale tu kinapofaulu ndipo vipande vya uzalishaji vinaanza."
          ],
          steps: ["Soma mchoro, karatasi ya maandalizi na programu.", "Safisha meza, vise au chuck na ushike kipande kwa nguvu.", "Pakia vifaa vilivyoorodheshwa kwenye karatasi ya maandalizi.", "Weka work offset na tool offsets.", "Fanya jaribio kavu juu ya kipande, kisha endesha single block feed override ikiwa imepunguzwa.", "Pima kipande cha kwanza dhidi ya kila kipimo (ukaguzi wa kipande cha kwanza).", "Anza uzalishaji tu baada ya kipande cha kwanza kufaulu; endelea kukagua vipande unapoendelea."],
          words: [["Karatasi ya maandalizi (setup sheet)", "karatasi inayoorodhesha vifaa, ushikaji wa kipande na offsets kwa kazi fulani."], ["Ushikaji wa kipande (workholding)", "kinachoshika kipande kikatulia, kama vise, klampu au chuck."], ["Work offset", "mpangilio unaoiambia mashine sehemu ya sifuri ya kipande iko wapi."], ["Tool offset", "mpangilio wa urefu (na ukubwa) wa kila kifaa, ili ncha ifike mahali sahihi."], ["Jaribio kavu (dry run)", "kuendesha programu kifaa kikiwa mbali na kipande kwa usalama."], ["Ukaguzi wa kipande cha kwanza", "first-article inspection: kupima kipande cha kwanza dhidi ya mchoro wote kabla ya kutengeneza vingine."]],
          slides: [
            { title: "Jiandae", bullets: ["Soma mchoro, karatasi ya maandalizi na programu", "Safisha na ushike kipande kwa nguvu", "Pakia vifaa sahihi"] },
            { title: "Weka offsets", bullets: ["Work offset: sifuri ya kipande iko wapi", "Tool offsets: kila kifaa kina urefu gani"] },
            { title: "Ithibitishe polepole", bullets: ["Jaribio kavu kifaa kikiwa mbali na kipande", "Single block, feed override imepunguzwa", "Mkono karibu na feed hold au kusimamisha dharura"] },
            { title: "Kipande cha kwanza kwanza", bullets: ["Pima kila kipimo kwenye mchoro", "Uzalishaji unaanza tu kikifaulu", "Endelea kukagua vipande wakati wa kazi"] }
          ],
          tryIt: "Andika kila moja ya hizi kwenye kipande cha karatasi, zichanganye, kisha zipange kwa mpangilio: weka tool offsets; ukaguzi wa kipande cha kwanza; safisha na ushike kipande; jaribio kavu; soma mchoro na karatasi ya maandalizi; endesha single block; weka work offset; pakia vifaa; anza uzalishaji. Linganisha mpangilio wako na hatua za somo hili.",
          youCanNow: "kupanga hatua za maandalizi na kipande cha kwanza kwa mpangilio na kusema kwa nini jaribio kavu na ukaguzi wa kipande cha kwanza huja kabla ya uzalishaji.",
          quickCheck: [
            { objective: "O4", q: "Mpangilio upi unaiambia mashine sehemu ya sifuri ya kipande iko wapi?", options: ["Kasi ya kulisha", "Tool offset", "Work offset", "Kasi ya spindle"], answer: 2, why: "Work offset inaonyesha sifuri ya kipande; tool offsets zinaweka urefu wa kila kifaa." },
            { objective: "O4", q: "Kipande cha kwanza kimekatwa. Nini kinakuja kabla ya kuendesha kazi iliyobaki?", options: ["Kukipima dhidi ya kila kipimo kwenye mchoro", "Kugeuza feed override hadi juu kabisa", "Kuondoa vizuizi ili kuona vizuri", "Kufuta programu"], answer: 0, why: "Ukaguzi wa kipande cha kwanza unathibitisha maandalizi na programu kabla ya uzalishaji." }
          ]
        },
        {
          title: "Kuwa salama katika karakana ya mashine",
          objectives: ["O5"],
          minutes: 5,
          goal: "Taja njia ya kudhibiti kila hatari ya kawaida ya karakana ya mashine.",
          text: [
            "Mashine zinaweza kusababisha vidole au mikono kupondwa, kukatika viungo, kuungua na upofu. Hatari kuu ni spindle, chuck na kifaa vinavyozunguka, vibanzi vinavyoruka, vibanzi na kingo zenye ncha kali na moto, kipozaji kwenye ngozi, vipande vizito na kelele. Sheria za OSHA (shirika la usalama kazini la Marekani) za vizuizi vya mashine (29 CFR 1910.212) zinadai vizuizi vinavyowalinda wafanyakazi dhidi ya hatari hizi.",
            "Tabia za karakana: vaa miwani ya usalama yenye kinga za pembeni wakati wote, na kinga ya masikio mahali penye kelele. Weka milango na vizuizi vya mashine vimefungwa inapofanya kazi, na usiingize mkono kamwe hadi spindle isimame kabisa. Karakana nyingi haziruhusu glavu, mikono mipana ya nguo, vito wala nywele ndefu zilizolegea karibu na spindle inayozunguka, kwa sababu vinaweza kunaswa na kukuvuta ndani. Ondoa vibanzi kwa ndoano ya vibanzi au brashi, kamwe si kwa mikono yako, na usipulize vibanzi kamwe kuelekea kwako au kwa wengine. Osha kipozaji kwenye ngozi yako na usome karatasi ya taarifa za usalama (SDS).",
            "Mashine inaposafishwa, kurekebishwa au kuhudumiwa, umeme wake huzimwa na kufungwa kwa kufuli ili mtu yeyote asiweze kuiwasha. Hii ni lockout/tagout, inayoshughulikiwa na sheria ya OSHA kuhusu nishati hatari (29 CFR 1910.147), na ni wafanyakazi waliofunzwa na walioidhinishwa tu wanaoifanya. Usalama wa vitendo hufundishwa karakanani na mwalimu mwenye sifa; fuata sheria za karakana yako kila wakati."
          ],
          steps: ["Vaa miwani ya usalama yenye kinga za pembeni, na kinga ya masikio inapohitajika.", "Ondoa glavu, vito na mikono mipana ya nguo; funga nywele ndefu nyuma.", "Hakikisha vizuizi na milango vipo na vimefungwa.", "Subiri spindle isimame kabisa kabla ya kufungua mlango au kuingiza mkono.", "Ondoa vibanzi kwa ndoano ya vibanzi au brashi, si kwa mikono yako.", "Kwa usafishaji au matengenezo, fuata hatua za lockout/tagout za karakana."],
          words: [["Kizuizi (guard)", "kifuniko au mlango unaozuia mikono na vibanzi visifike kwenye sehemu zinazosogea."], ["Vibanzi (chips)", "vipande vidogo vilivyojikunja vya chuma au plastiki ambavyo kifaa hukata; mara nyingi vina ncha kali na ni moto."], ["Kipozaji (coolant)", "kimiminika kinachopoza kifaa na kipande na kuondoa vibanzi."], ["SDS", "safety data sheet: karatasi inayoorodhesha hatari za bidhaa na jinsi ya kujikinga."], ["Lockout/tagout", "kuzima na kufunga kwa kufuli umeme wa mashine ili mtu asiweze kuiwasha wakati wa huduma."]],
          slides: [
            { title: "Hatari za mashine", bullets: ["Spindle, chuck na kifaa vinavyozunguka", "Vibanzi vinavyoruka, vyenye ncha kali na moto", "Kipozaji kwenye ngozi, vipande vizito, kelele"] },
            { title: "Jilinde", bullets: ["Miwani ya usalama yenye kinga za pembeni, daima", "Kinga ya masikio mahali penye kelele", "Hakuna glavu, vito wala mikono mipana karibu na spindle; funga nywele"] },
            { title: "Tabia salama", bullets: ["Vizuizi na milango vimefungwa mashine ikifanya kazi", "Subiri isimame kabisa kabla ya kuingiza mkono", "Ndoano ya vibanzi au brashi, kamwe si mikono yako"] },
            { title: "Huduma = lockout/tagout", bullets: ["Umeme umezimwa na kufungwa kabla ya kusafisha au kurekebisha", "OSHA 29 CFR 1910.147; wafanyakazi waliofunzwa tu", "Fuata sheria za karakana yako kila wakati"] }
          ],
          sources: [
            { name: "OSHA: Viwango vya vizuizi vya mashine (Machine Guarding)", url: "https://www.osha.gov/machine-guarding/standards" },
            { name: "OSHA: Udhibiti wa nishati hatari (Lockout/Tagout)", url: "https://www.osha.gov/control-hazardous-energy" }
          ],
          tryIt: "Tengeneza jedwali la safu mbili kwenye karatasi: Hatari na Udhibiti. Jaza mistari mitano: spindle inayozunguka, vibanzi vinavyoruka, vibanzi vyenye ncha kali na moto, kipozaji kwenye ngozi, mashine inayorekebishwa. Andika njia moja ya kudhibiti kwa kila moja, kisha zilinganishe na somo hili.",
          youCanNow: "kutaja hatari kuu za karakana ya mashine na njia ya kudhibiti kila moja.",
          quickCheck: [
            { objective: "O5", q: "Rundo la vibanzi vya moto linaongezeka karibu na vise. Unaliondoaje?", options: ["Vipangusa kwa mkono wako", "Vipulize kwa hewa kuelekea mfanyakazi mwenzako", "Ingiza mkono spindle ikizunguka", "Subiri isimame kabisa, kisha tumia ndoano ya vibanzi au brashi"], answer: 3, why: "Vibanzi vina ncha kali na ni moto; ndoano ya vibanzi au brashi inalinda mikono yako." },
            { objective: "O5", q: "Mashine inahitaji matengenezo ndani yake. Nini lazima kitokee kwanza?", options: ["Punguza feed override", "Umeme wake unazimwa na kufungwa (lockout) na mfanyakazi aliyeidhinishwa", "Fungua mlango ikiwa inafanya kazi", "Vaa glavu"], answer: 1, why: "Lockout/tagout inazuia mtu yeyote kuwasha mashine wakati wa huduma." }
          ]
        },
        {
          title: "Mafunzo, vyeti na mpango wako wa CNC",
          objectives: ["O6"],
          minutes: 6,
          goal: "Andika mpango wenye tarehe wa kupata mafunzo na cheti cha uchongaji.",
          text: [
            "Wachongaji wengi hujifunza kazini, mara nyingi wakianza kama waendeshaji wa mashine. Vyuo vya jamii (community colleges) na shule za ufundi hutoa vyeti na stashahada za miaka miwili zinazofundisha kusoma michoro na kuandika na kuendesha programu za CNC. Uanagenzi uliosajiliwa (registered apprenticeship) unachanganya kazi yenye malipo na madarasa na kwa kawaida huchukua miaka kadhaa. Tafuta mmoja kwa Apprenticeship Job Finder kwenye apprenticeship.gov. Wanajeshi wastaafu wanaweza kuuliza kuhusu kutumia mafao yao ya elimu, na vijana wanaweza kuuliza kuhusu programu za shule yao au kituo cha ajira.",
            "Vyeti vinamwonyesha mwajiri unachoweza kufanya. National Institute for Metalworking Skills (NIMS) huweka viwango na vyeti kwa nafasi za kazi za uchongaji. Vyeti vingi vya NIMS vina sehemu mbili: mtihani wa maarifa ya nafasi hiyo, na ukaguzi wa vitendo, kama kuchonga kipande kufuata mchoro. Kagua majina na masharti ya sasa ya vyeti kwenye nims-skills.org. Baadhi ya waajiri pia huthamini vyeti vya CNC au CAD/CAM kutoka shule au kutoka kwa mtengenezaji wa mashine.",
            "Kozi hii inakuandaa; haikupi cheti. Kuwa mwangalifu na programu yoyote inayoahidi kazi au cheti haraka kwa ada kubwa. Uliza shule kuhusu muda wa karakana kwenye mashine halisi, vyeti gani inakuandaa kupata, na wahitimu wangapi wanaajiriwa."
          ],
          steps: ["Chagua lengo la kwanza: kazi ya mwendeshaji, programu ya shule au uanagenzi.", "Tafuta programu mbili karibu nawe: chuo cha jamii au shule ya ufundi, na uanagenzi kwenye apprenticeship.gov.", "Tafuta cheti cha NIMS cha nafasi ya kazi unayotaka kwenye nims-skills.org.", "Uliza kila programu kuhusu muda kwenye mashine, vyeti, gharama na kupatiwa kazi.", "Andika tarehe ya kila hatua: kuomba, kuanza, kufanya mazoezi, kufanya mtihani."],
          words: [["Uanagenzi (apprenticeship)", "kazi yenye malipo pamoja na mafunzo kazini na madarasa, mara nyingi kwa miaka kadhaa."], ["Cheti (credential)", "uthibitisho, kama cheti, kwamba ulifaulu mtihani wa ujuzi wako."], ["NIMS", "National Institute for Metalworking Skills, taasisi inayoweka viwango na vyeti vya uchongaji."], ["Ukaguzi wa vitendo (performance check)", "mtihani wa mikono ambapo unafanya kazi yenyewe, kama kuchonga kipande kufuata mchoro."]],
          slides: [
            { title: "Njia za kuingia", bullets: ["Anza kama mwendeshaji wa mashine na ujifunze kazini", "Cheti cha chuo cha jamii au shule ya ufundi", "Uanagenzi uliosajiliwa: kazi yenye malipo pamoja na madarasa"] },
            { title: "Vyeti", bullets: ["NIMS: viwango na vyeti vya uchongaji", "Kwa kawaida mtihani pamoja na ukaguzi wa vitendo", "Kagua majina na hatua za sasa kwenye nims-skills.org"] },
            { title: "Chagua programu kwa busara", bullets: ["Uliza kuhusu muda kwenye mashine halisi", "Uliza inakuandaa kwa vyeti gani", "Kuwa mwangalifu na ahadi za haraka na za gharama kubwa"] },
            { title: "Mpango wako wenye tarehe", bullets: ["Programu mbili, cheti kimoja", "Tarehe ya kuomba, kuanza, kufanya mazoezi na mtihani"] }
          ],
          tryIt: "Kazi ya mwisho: tengeneza mpango wako wa kuanza CNC. Chora mill na lathe pamoja na mihimili yake, kokotoa mipaka ya ukubwa mitatu yenye uvumilivu, andika na ueleze programu fupi ya mraba au mfereji na uichore, andika orodha yako ya kukagua maandalizi na usalama, na andika mpango wenye tarehe wenye programu mbili karibu nawe na cheti kimoja cha NIMS kutoka tovuti rasmi.",
          youCanNow: "kutafuta mafunzo ya uchongaji karibu nawe, kutaja cheti utakacholenga, na kufuata mpango wenye tarehe wa kufika huko.",
          quickCheck: [
            { objective: "O6", q: "Unaweza kutafuta wapi uanagenzi uliosajiliwa nchini Marekani?", options: ["Tangazo la kazi linalodai ada ili kuomba", "Chapisho la mitandao ya kijamii", "Apprenticeship Job Finder kwenye apprenticeship.gov", "Ujumbe kutoka kwa mtu usiyemjua"], answer: 2, why: "Apprenticeship.gov ni tovuti rasmi ya Wizara ya Kazi ya Marekani yenye kitafutaji cha kazi." },
            { objective: "O6", q: "Vyeti vingi vya NIMS vinajumuisha nini?", options: ["Mtihani na ukaguzi wa vitendo", "Video ya mtandaoni tu", "Ada tu", "Barua kutoka kwa rafiki"], answer: 0, why: "NIMS inaeleza mtihani wa maarifa ya nafasi hiyo pamoja na tathmini ya utendaji." }
          ],
          sources: [
            { name: "NIMS: Utoaji wa vyeti (Credentialing)", url: "https://www.nims-skills.org/credentialing" },
            { name: "Apprenticeship.gov (Wizara ya Kazi ya Marekani)", url: "https://www.apprenticeship.gov/" },
            { name: "BLS Occupational Outlook Handbook: Wachongaji na watengenezaji wa vifaa na dai (Machinists and Tool and Die Makers)", url: "https://www.bls.gov/ooh/production/machinists-and-tool-and-die-makers.htm" }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Maandalizi, usalama na njia yako",
        questions: [
          { objective: "O4", q: "Kwa nini ufanye jaribio kavu kabla ya kukata kipande cha kwanza?", options: ["Kupata makosa ya programu kifaa kikiwa mbali na kipande kwa usalama", "Kuifanya mashine iwe na kasi zaidi", "Kuruka ukaguzi wa kipande cha kwanza", "Kupasha kipozaji moto"], answer: 0, why: "Jaribio kavu linaonyesha misogeo bila kukata, kwa hiyo makosa yanagunduliwa kwa usalama." },
          { objective: "O4", q: "Hatua ipi inakuja mara baada ya kushika kipande na kupakia vifaa?", options: ["Kuanza uzalishaji", "Ukaguzi wa kipande cha kwanza", "Kuweka work offset na tool offsets", "Kusafirisha vipande"], answer: 2, why: "Offsets lazima ziwekwe kabla programu haijathibitishwa na kipande cha kwanza kukatwa." },
          { objective: "O5", q: "Kwa nini karakana nyingi zinakataza glavu karibu na spindle inayozunguka?", options: ["Zinafanya mikono yako iwe baridi", "Zinaweza kunaswa na kuvuta mkono wako ndani", "Zina gharama kubwa mno", "Zinaficha michoro yako ya ngozi"], answer: 1, why: "Spindle au kifaa kinachozunguka kinaweza kunasa glavu na kuvuta mkono ndani." },
          { objective: "O5", q: "Kinga ipi unavaa wakati wote katika karakana ya mashine?", options: ["Kofia ngumu tu", "Glavu", "Viatu vya wazi (sandali)", "Miwani ya usalama yenye kinga za pembeni"], answer: 3, why: "Vibanzi vinavyoruka vinaweza kukupofusha, kwa hiyo kinga ya macho huvaliwa wakati wote." },
          { objective: "O6", q: "Shule inaahidi kazi ya CNC ndani ya wiki moja kwa ada kubwa. Unafanya nini?", options: ["Uliza kuhusu muda kwenye mashine, vyeti na kuajiriwa, na ulinganishe na programu nyingine", "Lipa mara moja", "Wape taarifa za kuingia benki yako", "Saini bila kusoma"], answer: 0, why: "Kukagua kile programu inachotoa kweli kunalinda muda wako na pesa zako." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Misingi ya Uchongaji kwa Mashine za CNC",
    questions: [
      { objective: "O1", q: "CNC inasimama badala ya nini?", options: ["Central number cutting", "Computer numerical control", "Cut now carefully", "Cold nickel coating"], answer: 1, why: "CNC maana yake ni computer numerical control (udhibiti wa namba kwa kompyuta)." },
      { objective: "O1", q: "Kipande kipi kina uwezekano mkubwa wa kutengenezwa kwenye lathe ya CNC?", options: ["Bano bapa lenye mifereji", "Sanduku la bati", "Ekseli ya duara", "Bango la mbao"], answer: 2, why: "Lathe inazungusha kipande, kwa hiyo inatengeneza vipande vya duara kama ekseli." },
      { objective: "O1", q: "Kwenye mill iliyosimama wima, mhimili upi unasogea kukuelekea na kwenda mbali nawe?", options: ["Y", "Z", "X", "C"], answer: 0, why: "Kwenye mill iliyosimama wima, Y inasogea kumwelekea mwendeshaji na kwenda mbali naye." },
      { objective: "O2", q: "Uvumilivu (tolerance) ni nini?", options: ["Malighafi ya kipande", "Kasi ya mashine", "Kiasi ambacho ukubwa unaweza kupotoka na bado ukawa mzuri", "Jina la kipande"], answer: 2, why: "Uvumilivu ni kosa linaloruhusiwa kwenye ukubwa." },
      { objective: "O2", q: "Mchoro unasema 3.000 ±0.005. Ukubwa upi uliopimwa unashindwa?", options: ["2.996", "3.004", "3.000", "3.006"], answer: 3, why: "Mipaka ni 2.995 hadi 3.005, kwa hiyo 3.006 ni kikubwa mno." },
      { objective: "O2", q: "Unapata wapi vipimo vinavyotumika na uvumilivu wa jumla kwenye mchoro?", options: ["Ndani ya programu", "Kwenye kisanduku cha kichwa", "Kwenye mlango wa mashine", "Kwenye karatasi ya maandalizi tu"], answer: 1, why: "Kisanduku cha kichwa kinaorodhesha kipande, malighafi, vipimo vinavyotumika na uvumilivu wa jumla." },
      { objective: "O2", q: "Kifaa kipi hupima kwa usahihi zaidi katika masafa madogo?", options: ["Mikromita", "Utepe wa kupimia", "Rula", "Ndoano ya vibanzi"], answer: 0, why: "Mikromita ni sahihi zaidi kuliko kalipa au rula katika masafa yake madogo." },
      { objective: "O3", q: "Msimbo upi kwa kawaida ni msogeo wa haraka, bila kukata?", options: ["G01", "G02", "M08", "G00"], answer: 3, why: "G00 ni msogeo wa haraka wa kuweka nafasi." },
      { objective: "O3", q: "Katika programu ya CNC, herufi F inaweka nini?", options: ["Namba ya kifaa", "Kasi ya kulisha wakati wa kukata", "Kasi ya spindle", "Jina la faili"], answer: 1, why: "F ni kasi ya kulisha; S ni kasi ya spindle na T ni kifaa." },
      { objective: "O3", q: "Programu inaanza na G21. Hiyo inaweka nini?", options: ["Inchi", "Kipozaji kinawaka", "Milimita", "Mwisho wa programu"], answer: 2, why: "G21 inaweka milimita; G20 inaweka inchi." },
      { objective: "O3", q: "Msimbo upi kwa kawaida humaliza programu?", options: ["M30", "M03", "G01", "G90"], answer: 0, why: "M30 humaliza programu kwenye vidhibiti vingi." },
      { objective: "O4", q: "Tool offset inaiambia mashine nini?", options: ["Sehemu ya sifuri ya kipande iko wapi", "Ikate kwa kasi gani", "Itumie kipozaji kipi", "Kila kifaa kina urefu gani, ili ncha ifike mahali sahihi"], answer: 3, why: "Tool offsets zinaweka urefu wa kila kifaa; work offset inaweka sifuri ya kipande." },
      { objective: "O4", q: "Unapothibitisha programu mpya, ni njia ipi salama ya kuiendesha?", options: ["Kasi kamili mlango ukiwa wazi", "Single block feed override ikiwa imepunguzwa", "Kuruka jaribio kavu", "Kuiacha mashine inapofanya kazi"], answer: 1, why: "Single block na feed override ya chini vinakuwezesha kusimamisha kabla ya kosa." },
      { objective: "O4", q: "Ukaguzi wa kipande cha kwanza ni nini?", options: ["Kusoma ukurasa wa kwanza wa mwongozo", "Kusafisha kibanzi cha kwanza", "Kupima kipande cha kwanza dhidi ya kila kipimo kwenye mchoro", "Kupakia kifaa cha kwanza"], answer: 2, why: "Kipande cha kwanza kinapimwa kikamilifu kabla uzalishaji haujaanza." },
      { objective: "O5", q: "Spindle inapunguza kasi lakini haijasimama. Unafanya nini?", options: ["Subiri hadi isimame kabisa kabla ya kufungua mlango", "Ingiza mkono kuchukua kipande", "Isimamishe kwa mkono wako", "Fungua mlango uangalie kwa karibu"], answer: 0, why: "Usiingize mkono kamwe hadi spindle isimame kabisa." },
      { objective: "O5", q: "Sheria ipi ya OSHA inashughulikia lockout/tagout ya nishati hatari?", options: ["29 CFR 1910.212", "29 CFR 1910.178", "29 CFR 1910.215", "29 CFR 1910.147"], answer: 3, why: "29 CFR 1910.147 ni sheria ya OSHA ya udhibiti wa nishati hatari (lockout/tagout)." },
      { objective: "O5", q: "Kipozaji kimekuingia mikononi. Unafanya nini?", options: ["Kipuuze", "Kioshe na ukague SDS kuhusu kujikinga", "Kipangusie kwenye shati lako", "Ongeza kipozaji zaidi"], answer: 1, why: "Kipozaji kinaweza kuwasha ngozi; kioshe na ufuate SDS." },
      { objective: "O6", q: "Kozi hii inakupa nini?", options: ["Cheti cha NIMS", "Leseni ya jimbo", "Maandalizi ya mafunzo na mtihani wa cheti", "Kazi ya uhakika"], answer: 2, why: "Kozi inakuandaa; vyeti hupatikana kwa kufaulu mitihani kama ile ya NIMS na ukaguzi wa vitendo." },
      { objective: "O6", q: "Unakagua wapi majina na masharti ya sasa ya vyeti vya NIMS?", options: ["Chapisho la mitandao ya kijamii", "nims-skills.org", "Maoni chini ya video", "Tangazo lolote la kazi"], answer: 1, why: "Tovuti rasmi ya NIMS ina vyeti na masharti ya sasa." },
      { objective: "O6", q: "Nini kinafaa kuwa ndani ya mpango mzuri wa kuanza CNC?", options: ["Programu mbili, cheti kimoja na tarehe ya kila hatua", "Tamaa tu ya kufanya kazi kiwandani", "Ada iliyolipwa kwa mtu usiyemjua", "Hakuna tarehe, ili ubaki huru"], answer: 0, why: "Mpango wenye programu zilizotajwa, cheti na tarehe unageuza lengo kuwa hatua." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi amepiga hatua kiasi gani
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [1, 2, 4, 5, 7, 9, 11, 14, 15, 17] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Mashine na mihimili", objective: "O1", notYet: "Mchoro unachanganya mill na lathe, au mihimili haipo au si sahihi.", meets: "Mill na lathe zimechorwa, X, Y na Z zikiwa na alama sahihi.", exceeds: "Pia anataja kipande ambacho kila mashine hutengeneza na mahali ambapo mashine ya mihimili 5 inaongeza msogeo." },
      { name: "Kusoma mchoro", objective: "O2", notYet: "Mpaka mmoja au zaidi si sahihi, au uamuzi wa kufaulu/kushindwa si sahihi.", meets: "Vipimo vyote vitatu vina mipaka sahihi na uamuzi sahihi wa kufaulu/kushindwa.", exceeds: "Pia anaonyesha mfano wa milimita na anasema angepima kila ukubwa kwa kifaa kipi." },
      { name: "Programu na njia ya kifaa", objective: "O3", notYet: "Mistari haijaelezwa, au njia iliyochorwa hailingani na misimbo.", meets: "Kila mstari umeelezwa na njia iliyochorwa inalingana na misimbo, rapids na mikato zikiwa na alama.", exceeds: "Pia anagundua na kurekebisha kosa moja lililowekwa kwenye programu na mwenzake au mwalimu." },
      { name: "Orodha ya maandalizi na usalama", objective: "O5", notYet: "Orodha inaacha vizuizi, kinga ya macho, mavazi au vibanzi.", meets: "Inahusu vizuizi, kinga ya macho na masikio, mavazi, vibanzi, kipozaji na lockout kwa huduma.", exceeds: "Pia inaeleza kwa nini kila kipengele ni muhimu kwa mstari mmoja mfupi." },
      { name: "Mpangilio wa maandalizi", objective: "O4", notYet: "Uzalishaji unaanza kabla ya jaribio kavu au ukaguzi wa kipande cha kwanza.", meets: "Hatua ziko kwa mpangilio, offsets, jaribio kavu na ukaguzi wa kipande cha kwanza vikiwa kabla ya uzalishaji.", exceeds: "Pia anaongeza ukaguzi wakati wa kazi." },
      { name: "Mpango wenye tarehe", objective: "O6", notYet: "Hakuna programu halisi, hakuna cheti, au hakuna tarehe.", meets: "Programu mbili halisi karibu na mwanafunzi, cheti kimoja cha NIMS kutoka tovuti rasmi na tarehe ya kila hatua.", exceeds: "Pia anaorodhesha maswali aliyouliza kila programu na majibu yake." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaoomba programu ya uchongaji, uanagenzi au kazi ya mwendeshaji ndani ya siku 90",
      "Wanafunzi wanaopata cheti cha NIMS au cheti kingine cha uchongaji ndani ya mwaka mmoja",
      "Wanafunzi wanaoajiriwa kama waendeshaji wa mashine, waendeshaji wa CNC au wanagenzi, na ripoti za waajiri washirika kuhusu utayari wa waajiriwa wapya"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta ya maktaba kwa kurasa rasmi (nims-skills.org, apprenticeship.gov)",
      "Karatasi ya grafu, penseli, rula na kikokotoo",
      "Hiari: kitazamaji cha G-code cha bure kwenye kivinjari ili kukagua njia za kifaa zilizochorwa",
      "Hiari, pamoja na mwalimu: kalipa na mikromita kwa mazoezi ya kusoma vipimo kwenye vipande vya mfano",
      "Kama dakika 75 kwa jumla, katika vipindi vifupi: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Fanyeni jaribio la awali pamoja, kisha fanyeni sura moja kwa kila kipindi, na kazi za \"Jaribu sasa\" zifanywe papo hapo.",
      "Hakuna kazi ya mashine katika kozi hii. Ukiiendesha karakanani, wanafunzi wanaangalia tu na hawagusi mashine isipokuwa mwalimu mwenye sifa anasimamia, vizuizi vyote na vifaa vya usalama vikiwa mahali pake.",
      "Wakumbushe wanafunzi kuwa G-code hutofautiana kwa kidhibiti; kama programu yako inatumia mashine fulani, wagawie orodha ya misimbo yake.",
      "Kwa kazi ya njia ya kifaa, weka kosa moja katika programu fupi (M05 inayokosekana au thamani ya X isiyo sahihi) na waache wenzao walitafute.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati.",
      "Mwalike mchongaji wa eneo lako, mdhamini wa uanagenzi au mwalimu wa chuo cha jamii kuzungumza kuhusu kazi halisi na mafunzo katika eneo lako."
    ]
  }
};
