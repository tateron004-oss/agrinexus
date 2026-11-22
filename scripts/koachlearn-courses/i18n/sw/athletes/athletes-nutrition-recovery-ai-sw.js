"use strict";

// Koach Learn course (Swahili translation of athletes/athletes-nutrition-recovery-ai.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.
// Elimu ya jumla tu: kila somo la afya linampeleka mwanafunzi kwa kocha, athletic trainer, daktari au mtaalamu wa lishe aliyesajiliwa. Hakuna dozi, malengo ya kalori wala ushauri wa kitabibu.

module.exports = {
  id: "athletes-nutrition-recovery-ai-sw",
  lang: "sw",
  translationOf: "athletes-nutrition-recovery-ai",
  category: "Athletes",
  name: "Lishe na Kupona kwa Msaada wa AI",
  skills: "Kupanga milo yenye uwiano kulingana na mazoezi, Kujenga utaratibu wa chakula na maji siku ya mechi, Kutumia AI kwa orodha ya mahitaji na mawazo ya milo, Kufuatilia tabia za usingizi na kupona, Kujua wakati wa kumwona mtaalamu",
  outcome: "kutumia msaidizi wa AI kupanga wiki moja ya milo rahisi yenye uwiano na utaratibu wa kupona kulingana na ratiba yako ya mazoezi, kisha kukagua mpango huo na mtaalamu wa lishe aliyesajiliwa, athletic trainer au daktari.",
  about: [
    "Kozi hii ni kwa wanamichezo na makocha wanaotaka kuelewa misingi ya kula, kunywa na kupona vizuri, na kutumia AI kurahisisha upangaji. Ni elimu ya jumla, si ushauri wa kitabibu wala wa lishe.",
    "Kila mwili ni tofauti. Umri wako, mchezo wako, afya yako na malengo yako hubadilisha unachohitaji. Ndiyo maana mpango utakaoujenga hapa ni rasimu ya kukagua na mtaalamu wa lishe aliyesajiliwa, athletic trainer wako au daktari wako.",
    "Kila somo linachukua kama dakika tano na lina kazi ya \"Jaribu sasa\". Jaribio la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Tumia msaidizi wa AI kuandika rasimu ya mpango wa wiki moja wa milo na kupona kulingana na ratiba yako halisi ya mazoezi na mechi: sahani zenye uwiano, utaratibu wa chakula na maji siku ya mechi, orodha ya mahitaji inayolingana na bajeti yako, na utaratibu wa usingizi. Ondoa taarifa zozote binafsi za afya, kisha onyesha mpango huo kwa mtaalamu wa lishe aliyesajiliwa, athletic trainer au daktari, na uubadilishe kulingana na wanachosema.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wanamichezo wa sekondari, chuo na klabu, na makocha wanaowasaidia, wanaotaka kula, kunywa na kupona vizuri na kutumia AI kurahisisha upangaji.",
    startingPoint: "Wanakula na kulala katikati ya ratiba yenye shughuli nyingi ya mazoezi, masomo na mechi, na wanatumia simu janja kila siku. Wengi wanaruka milo, wanakisia chakula na maji ya siku ya mechi, wanalala kidogo mno, na hawana uhakika ni lini maumivu ya misuli yanahitaji mtaalamu.",
    gap: "Chakula, maji na usingizi duni vinarudisha nyuma uchezaji na kuongeza hatari ya majeraha na magonjwa ya joto, na ushauri wa AI au wa mtandaoni kuhusu kalori na virutubisho (supplements) unaweza kuwa si salama. Mpango rahisi wa wiki uliokaguliwa na mtaalamu unawasaidia wanamichezo kupona na kubaki na afya.",
    constraints: [
      "Lugha rahisi, kama kiwango cha kusoma cha darasa la 7",
      "Elimu ya jumla tu, si ushauri wa kitabibu wala wa lishe; viwango kamili vinatoka kwa mtaalamu wa lishe aliyesajiliwa, athletic trainer au daktari",
      "Simu au kompyuta yenye msaidizi wa AI wa bure; mipango lazima ilingane na bajeti halisi ya chakula na jiko lililopo",
      "Kama dakika 60 kwa jumla",
      "Hakuna rekodi za matibabu, dawa wala taarifa binafsi za afya zinazowekwa kwenye AI; uzito na sura ya mwili ni mada nyeti"
    ],
    prerequisites: "Hakuna"
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukitumia vyakula unavyokula tayari", action: "kujenga sahani yenye uwiano yenye wanga, protini, na matunda na mboga", standard: "ikiwa na sehemu zote tatu kwenye sahani na chakula zaidi kimepangwa kwa siku za mazoezi magumu" },
    { id: "O2", condition: "Ukipewa saa ya kuanza mechi au mazoezi magumu", action: "kupanga utaratibu wa chakula na maji siku ya mechi kuanzia mlo wa kabla hadi kupona baadaye", standard: "ukiwa na mlo na kitafunio unavyovizoea, maji siku nzima, na kitafunio cha kupona chenye wanga na protini" },
    { id: "O3", condition: "Ukitumia msaidizi wa AI wa bure", action: "kutengeneza mawazo ya milo ya wiki moja na orodha ya mahitaji inayolingana na ratiba yako, bajeti yako na jiko lako", standard: "ukieleza mzio kwa maneno ya jumla na bila kuomba malengo ya kalori, mipango ya kupunguza uzito wala dozi za virutubisho" },
    { id: "O4", condition: "Ukipewa ratiba yako ya mazoezi na mechi", action: "kupanga utaratibu wa usingizi wenye saa ya kawaida ya kuamka, saa ya kulala na saa ya kuzima skrini", standard: "ukiandika utaratibu huo kwa wiki moja" },
    { id: "O5", condition: "Ukipewa maelezo ya maumivu ya misuli, maumivu makali au kugongwa kichwani", action: "kueleza kama ni maumivu ya kawaida ya misuli au ni ishara ya kusimama na kumwambia athletic trainer wako", standard: "ukipata sahihi kila hali yenye maumivu makali, uvimbe au dalili za kugongwa kichwani" },
    { id: "O6", condition: "Ukitumia ratiba yako na msaidizi wa AI", action: "kutengeneza mpango wa wiki moja wa milo na kupona na kuukagulisha kwa mtaalamu wa lishe, athletic trainer au daktari", standard: "taarifa binafsi za afya zikiwa zimeondolewa na mpango ukiwa umesasishwa kwa ushauri wao" }
  ],
  chapters: [
    {
      name: "Sura 1: Kula vizuri kwa ajili ya mazoezi",
      lessons: [
        {
          objectives: ["O1"],
          title: "Sahani ya mwanamichezo yenye uwiano",
          minutes: 5,
          goal: "Jenga sahani yenye uwiano kutoka kwa vyakula unavyokula tayari.",
          text: [
            "Chakula kinakupa nguvu ya kufanya mazoezi na vitu vya kujenga mwili ili kupona. Njia rahisi ya kufikiria mlo ni sahani yenye sehemu tatu kuu: wanga kwa nguvu (wali, tambi, mkate, viazi, matunda), protini ya kusaidia misuli kujirekebisha (mayai, maharagwe, samaki, kuku, mtindi), na matunda na mboga kwa vitamini na madini.",
            "Wanamichezo wanaofanya mazoezi magumu mara nyingi wanahitaji nguvu zaidi kuliko wasio wanamichezo, na siku ngumu zaidi kwa kawaida zinahitaji wanga zaidi. Kiasi unachohitaji kinategemea mwili wako, mchezo wako na mazoezi yako. Ndiyo maana mtaalamu wa lishe aliyesajiliwa ndiye mtu sahihi wa kukupa viwango vyako kamili.",
            "Kuruka milo au kuacha kabisa makundi ya vyakula ili uonekane kwa namna fulani kunaweza kudhuru uchezaji wako na afya yako. Ikiwa chakula, uzito au sura ya mwili vinakupa msongo, zungumza na mtu unayemwamini na athletic trainer wako au daktari wako."
          ],
          words: [["Wanga", "vyakula kama wali, mkate, tambi, viazi na matunda vinavyotoa nguvu haraka."], ["Protini", "vyakula kama mayai, maharagwe, samaki, nyama na mtindi vinavyosaidia mwili kurekebisha misuli."], ["Mtaalamu wa lishe aliyesajiliwa (registered dietitian, RD au RDN)", "mtaalamu wa chakula na lishe mwenye leseni."], ["Athletic trainer", "mtaalamu wa afya mwenye leseni anayewahudumia wanamichezo, kuzuia na kutibu majeraha."]],
          slides: [
            { title: "Sehemu tatu za sahani", bullets: ["Wanga: nguvu", "Protini: kujirekebisha", "Matunda na mboga: vitamini na madini"] },
            { title: "Siku ngumu, chakula zaidi", bullets: ["Siku za mazoezi mara nyingi zinahitaji nguvu zaidi", "Viwango kamili: muulize mtaalamu wa lishe aliyesajiliwa"] },
            { title: "Jihadhari na", bullets: ["Kuruka milo", "Kuacha makundi mazima ya vyakula", "Msongo kuhusu chakula au mwili: zungumza na mtu"] }
          ],
          sources: [{ name: "Academy of Nutrition and Dietetics: Tafuta mtaalamu wa lishe", url: "https://www.eatright.org/find-a-nutrition-expert" }],
          tryIt: "Andika ulichokula jana katika mlo mmoja. Weka alama kwenye wanga, protini, na tunda au mboga. Ungeongeza nini ili iwe sahani yenye uwiano?",
          youCanNow: "kujenga sahani yenye uwiano yenye wanga, protini, na matunda na mboga.",
          quickCheck: [
            { objective: "O1", q: "Kazi kuu ya protini kwenye sahani ya mwanamichezo ni ipi?", options: ["Nguvu ya haraka", "Kusaidia misuli kujirekebisha", "Kuongeza vitamini tu", "Kukufanya ubaki na baridi"], answer: 1, why: "Protini inatoa vitu ambavyo misuli inahitaji ili kujirekebisha." },
            { objective: "O1", q: "Kesho ni siku ya mazoezi magumu. Ni badiliko gani kwenye sahani yako lina maana?", options: ["Kuruka kifungua kinywa", "Kuacha wanga kabisa", "Kuongeza wanga zaidi kwa nguvu", "Kula mboga tu"], answer: 2, why: "Siku ngumu zaidi kwa kawaida zinahitaji wanga zaidi kwa nguvu." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Utaratibu wa chakula na maji siku ya mechi",
          minutes: 5,
          goal: "Panga unachokula na kunywa, na wakati gani, siku ya mechi au ya mazoezi magumu.",
          text: [
            "Muda ni muhimu. Wanamichezo wengi hula mlo wa kawaida wenye uwiano saa chache kabla ya mechi, na kitafunio kidogo chepesi karibu na muda wa kuanza, kama tunda au biskuti. Vyakula ulivyovizoea ndivyo bora siku ya mechi: usijaribu kitu kipya.",
            "Maji ni muhimu siku nzima, si wakati wa mechi tu. Beba chupa ya maji, kunywa mara kwa mara, na kunywa zaidi kwenye joto. Kiu, mkojo wenye rangi nzito, maumivu ya kichwa na misuli kukakamaa (cramps) vinaweza kuwa ishara unahitaji maji zaidi. Kuhisi kizunguzungu, kuchanganyikiwa au kuugua sana kwenye joto ni dharura: simama na umwambie kocha au athletic trainer wako mara moja.",
            "Baada ya mazoezi magumu, kula mlo au kitafunio chenye wanga na protini kunasaidia kupona. Athletic trainer wako au mtaalamu wa lishe anaweza kukuambia kinachofaa mwili wako na mchezo wako."
          ],
          steps: ["Andika saa ya kuanza mechi au mazoezi.", "Panga mlo wa kawaida wenye uwiano saa chache kabla.", "Panga kitafunio kidogo unachokizoea karibu na kuanza.", "Panga chupa yako ya maji kwa siku nzima.", "Panga mlo au kitafunio cha kupona baadaye."],
          words: [["Kunywa maji ya kutosha (hydration)", "kuweka maji ya kutosha mwilini mwako."], ["Mlo wa kupona", "chakula baada ya mazoezi kinachosaidia mwili kujaza nguvu tena na kujirekebisha."]],
          slides: [
            { title: "Kabla ya mechi", bullets: ["Mlo wenye uwiano saa chache kabla", "Kitafunio kidogo unachokizoea karibu na kuanza", "Hakuna kitu kipya siku ya mechi"] },
            { title: "Maji siku nzima", bullets: ["Beba chupa", "Zaidi kwenye joto", "Kizunguzungu au kuchanganyikiwa kwenye joto? Simama na uwaambie wasimamizi sasa"] },
            { title: "Baadaye", bullets: ["Wanga na protini", "Muulize athletic trainer wako kinachokufaa"] }
          ],
          tryIt: "Andika ratiba ya siku ya mechi kwa ajili ya mechi yako ijayo au mazoezi magumu: mlo, kitafunio, maji na chakula cha kupona, pamoja na saa zake.",
          youCanNow: "kupanga utaratibu rahisi wa chakula na maji siku ya mechi.",
          quickCheck: [
            { objective: "O2", q: "Wanamichezo wengi hula mlo wao wa kawaida wenye uwiano lini siku ya mechi?", options: ["Saa chache kabla ya mechi", "Mechi inapoanza tu", "Baada ya mechi tu", "Usiku uliopita tu"], answer: 0, why: "Mlo wa kawaida saa chache kabla na kitafunio kidogo karibu na kuanza ni utaratibu wa kawaida." },
            { objective: "O2", q: "Ni siku ya joto na una mazoezi marefu. Unapanga nini?", options: ["Kunywa tu kocha akisema", "Kuacha maji ili misuli isikakamae", "Kusubiri kunywa hadi mazoezi yaishe", "Kubeba chupa ya maji na kunywa mara kwa mara siku nzima, zaidi kwenye joto"], answer: 3, why: "Maji ni muhimu siku nzima, na unahitaji zaidi kwenye joto." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kutumia AI kwa mawazo ya milo na orodha ya mahitaji",
          minutes: 5,
          goal: "Tumia msaidizi wa AI kutengeneza mawazo ya milo ya wiki moja na orodha ya mahitaji kwa bajeti yako.",
          text: [
            "Wasaidizi wa AI ni hodari wa mawazo ya milo, mapishi na orodha za mahitaji. Wape ratiba yako, bajeti yako, jiko lako na vyakula unavyopenda. Mfano: \"Mimi ni mwanamichezo wa chuo, nina microwave chumbani na bajeti ya chakula ya $50 kwa wiki. Mazoezi ni saa 3-6 pm. Nipe milo rahisi yenye uwiano ya siku 7 na orodha ya mahitaji.\"",
            "Iambie kuhusu mzio wa chakula au sheria za chakula za dini au utamaduni kwa maneno ya jumla, ili mawazo yakufae. Usibandike rekodi za matibabu wala dawa.",
            "Usiiombe AI malengo ya kalori, mipango ya kupunguza uzito wala dozi za virutubisho. Hayo yanategemea afya yako, na majibu yanaweza kuwa si sahihi au si salama. Hiyo ni kazi ya mtaalamu wa lishe aliyesajiliwa au daktari."
          ],
          steps: ["Toa ratiba yako, bajeti yako na jiko lako.", "Sema vyakula unavyopenda na vyakula unavyoepuka.", "Omba mawazo ya milo yenye uwiano kwa siku 7.", "Omba orodha ya mahitaji iliyopangwa kwa sehemu za duka.", "Kagua bei kwenye duka lako na urekebishe."],
          words: [["Bajeti", "kiasi cha pesa unachopanga kutumia."], ["Mzio (allergy)", "mwili wako unapoitikia vibaya chakula fulani; unaweza kuwa hatari."]],
          slides: [
            { title: "Ipe AI maelezo", bullets: ["Ratiba na bajeti", "Jiko: chumba cha bweni, nyumbani, hakuna", "Vyakula unavyopenda na unavyoepuka"] },
            { title: "Omba", bullets: ["Mawazo ya milo yenye uwiano ya siku 7", "Orodha ya mahitaji kwa sehemu za duka"] },
            { title: "USIIOMBE AI", bullets: ["Malengo ya kalori au mipango ya kupunguza uzito", "Dozi za virutubisho", "Ushauri wa kitabibu"] }
          ],
          tryIt: "Muombe msaidizi wa AI milo rahisi yenye uwiano ya siku saba na orodha ya mahitaji kwa bajeti yako halisi na jiko lako. Kagua bei tatu kwenye duka lako.",
          youCanNow: "kutumia AI kupata mawazo ya milo na orodha ya mahitaji vinavyolingana na bajeti yako na ratiba yako.",
          quickCheck: [
            { objective: "O3", q: "Ni maelezo gani yanasaidia msaidizi wa AI kutoa mawazo ya milo yenye manufaa?", options: ["Rekodi zako za matibabu", "Ratiba yako, bajeti yako na jiko lako", "Dawa zako", "Lengo lako la uzito"], answer: 1, why: "Ratiba, bajeti na jiko vinafanya mawazo yalingane na maisha yako bila kutoa taarifa binafsi za afya." },
            { objective: "O3", q: "Unataka kujua hasa ni kalori ngapi ule ili kupunguza uzito. Unamuuliza nani?", options: ["Msaidizi wa AI", "Mchezaji mwenzako", "Mtaalamu wa lishe aliyesajiliwa au daktari", "Mshawishi wa mitandao ya kijamii"], answer: 2, why: "Malengo ya kalori yanategemea afya yako na ni kazi ya mtaalamu wa lishe au daktari." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kula vizuri kwa ajili ya mazoezi",
        questions: [
          { objective: "O1", q: "Kazi kuu ya wanga kwa wanamichezo ni ipi?", options: ["Kurekebisha misuli tu", "Vitamini tu", "Nguvu", "Hakuna"], answer: 2, why: "Wanga ndio chanzo kikuu cha nguvu ya haraka mwilini." },
          { objective: "O1", q: "Nani ni mtu sahihi wa kukupa viwango vyako kamili vya chakula?", options: ["Mtaalamu wa lishe aliyesajiliwa", "Msaidizi wa AI", "Mshawishi wa mitandao ya kijamii", "Mchezaji mwenzako"], answer: 0, why: "Wataalamu wa lishe waliosajiliwa wanatoa ushauri wa lishe wa mtu binafsi." },
          { objective: "O2", q: "Siku ya mechi, ni kitafunio gani bora?", options: ["Kinywaji kipya cha nguvu ambacho hujawahi kujaribu", "Hakuna chochote siku nzima", "Mlo mkubwa wenye mafuta mengi kabla tu ya mechi", "Kitafunio kidogo unachokizoea, kama tunda"], answer: 3, why: "Vyakula vyepesi unavyovizoea ndivyo salama zaidi siku ya mechi." },
          { objective: "O2", q: "Mchezaji mwenzako ana kizunguzungu na amechanganyikiwa mazoezini kwenye joto. Unafanya nini?", options: ["Kumwambia aendelee kujikaza", "Kumwambia kocha au athletic trainer mara moja", "Kusubiri mazoezi yaishe", "Kumpa kinywaji cha nguvu na kuondoka"], answer: 1, why: "Ishara hizo zinaweza kuwa dharura; wasimamizi lazima wachukue hatua sasa." },
          { objective: "O3", q: "Ni ombi gani HALIPASWI kupelekwa kwa msaidizi wa AI?", options: ["Orodha ya mahitaji kwa bajeti ya $50", "Dozi ya virutubisho kwa ajili yako", "Mawazo ya milo ya microwave", "Mapishi yenye maharagwe"], answer: 1, why: "Dozi zinategemea afya yako; muulize mtaalamu wa lishe au daktari." }
        ]
      }
    },
    {
      name: "Sura 2: Tabia za kupona",
      lessons: [
        {
          objectives: ["O4"],
          title: "Usingizi: chombo chako bora cha kupona",
          minutes: 5,
          goal: "Jenga utaratibu rahisi wa usingizi unaolingana na ratiba yako.",
          text: [
            "Usingizi ndio wakati mwili wako unajirekebisha na ubongo wako unahifadhi ulichofanyia mazoezi. Vijana kwa kawaida wanahitaji usingizi zaidi kuliko watu wazima, na wanamichezo wengi hawapati wa kutosha.",
            "Utaratibu wa usingizi unasaidia: saa ya kawaida ya kulala na ya kuamka, kuzima skrini kabla ya kulala, chumba chenye ubaridi na giza, na kafeini mapema mchana tu. AI inaweza kukusaidia kujenga mpango wa kulala unaozunguka mazoezi ya asubuhi sana au mechi za usiku.",
            "Ikiwa mara nyingi hupati usingizi, unakoroma kwa sauti kubwa, au unahisi umechoka sana hata baada ya kulala, zungumza na daktari wako."
          ],
          steps: ["Chagua saa ya kawaida ya kuamka.", "Hesabu kurudi nyuma hadi saa ya kulala inayokupa usingizi wa kutosha.", "Weka saa ya kuzima skrini kabla ya kulala.", "Kunywa kafeini mapema mchana tu.", "Andika saa zako za usingizi kwa wiki moja."],
          words: [["Utaratibu wa usingizi", "hatua zilezile kwa saa ileile kila usiku ili kukusaidia kupata usingizi."], ["Kafeini", "kichocheo kilicho kwenye kahawa, chai, soda na vinywaji vya nguvu ambacho kinaweza kukufanya ukose usingizi."]],
          slides: [
            { title: "Kwa nini usingizi ni muhimu", bullets: ["Mwili unajirekebisha", "Ubongo unahifadhi ujuzi", "Vijana wanahitaji zaidi kuliko watu wazima"] },
            { title: "Utaratibu rahisi", bullets: ["Saa ileile ya kulala na ya kuamka", "Zima skrini kabla ya kulala", "Chumba chenye ubaridi na giza", "Kafeini mapema tu"] },
            { title: "Mwone daktari wako ikiwa", bullets: ["Mara nyingi hupati usingizi", "Unakoroma kwa sauti kubwa", "Umechoka sana kila wakati"] }
          ],
          tryIt: "Muulize msaidizi wa AI: \"Nina mazoezi saa 6 am siku za wiki na mechi zinaisha saa 9 pm Ijumaa. Nisaidie kutengeneza utaratibu rahisi wa usingizi.\" Chagua saa yako ya kulala na uandike usingizi wako kwa usiku tatu zijazo.",
          youCanNow: "kujenga na kufuatilia utaratibu rahisi wa usingizi.",
          quickCheck: [
            { objective: "O4", q: "Ni kipi ni sehemu ya utaratibu mzuri wa usingizi?", options: ["Kafeini usiku sana", "Saa tofauti ya kulala kila usiku", "Chumba chenye mwanga mkali na joto", "Saa ya kawaida ya kulala na ya kuamka"], answer: 3, why: "Saa za kawaida, kuzima skrini, chumba chenye ubaridi na giza, na kafeini mapema vinasaidia usingizi." },
            { objective: "O4", q: "Mazoezi yanaanza saa 6 am. Unaweka saa yako ya kulala vipi?", options: ["Chagua saa ya kuamka, kisha hesabu kurudi nyuma hadi saa ya kulala inayokupa usingizi wa kutosha", "Lala wakati wowote ukimaliza na simu yako", "Lala kwa muda mrefu siku za mazoezi", "Usilale kabla ya mazoezi ya asubuhi sana"], answer: 0, why: "Kuhesabu kurudi nyuma kutoka saa ya kawaida ya kuamka kunaweka saa ya kulala yenye usingizi wa kutosha." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Siku za kupumzika, maumivu ya misuli na maumivu makali",
          minutes: 5,
          goal: "Tofautisha maumivu ya kawaida ya misuli ya mazoezi na maumivu yanayohitaji mtaalamu.",
          text: [
            "Siku za kupumzika ni sehemu ya mazoezi, si mapumziko kutoka kwa mazoezi. Kocha wako anazipanga ili mwili wako uzoee na upate nguvu zaidi.",
            "Maumivu ya kawaida ya misuli yanahisi kama uchovu hafifu wa misuli kwa ujumla siku moja au mbili baada ya mazoezi magumu, na yanapungua polepole. Maumivu makali, yaliyo kwenye kiungo au mfupa, yanayokufanya uchechemee, yanayoleta uvimbe, au yanayozidi kuwa mabaya ni tofauti: simama na umwambie athletic trainer wako.",
            "Majeraha ya kichwa yanahitaji uangalifu maalum. Ikiwa wewe au mchezaji mwenzako mmegongwa na mna maumivu ya kichwa, kizunguzungu, kuchanganyikiwa au mnahisi \"si sawa\", acheni kucheza na mwambieni kocha au athletic trainer. Mafunzo ya bure ya HEADS UP ya CDC (shirika la afya la serikali ya Marekani) yanaeleza dalili hizo."
          ],
          steps: ["Angalia inauma wapi na kwa namna gani.", "Hafifu, kwa ujumla na yanapungua: maumivu ya kawaida ya misuli.", "Makali, kwenye kiungo, uvimbe, kuchechemea au yanazidi: mwambie athletic trainer wako.", "Kugongwa kichwani kokote pamoja na dalili: simama na uwaambie wasimamizi."],
          words: [["Maumivu ya misuli (soreness)", "uchovu hafifu wa misuli baada ya mazoezi magumu unaopotea baada ya siku moja au mbili."], ["Mtikisiko wa ubongo (concussion)", "jeraha la ubongo kutokana na kugongwa au kutikiswa kwa nguvu kichwani au mwilini."]],
          slides: [
            { title: "Siku za kupumzika ni mazoezi", bullets: ["Mwili wako unazoea siku za kupumzika", "Fuata mpango anaoweka kocha wako"] },
            { title: "Maumivu ya misuli au maumivu makali", bullets: ["Maumivu ya misuli: hafifu, kwa ujumla, yanapungua", "Maumivu makali: kiungo, uvimbe, kuchechemea, yanazidi"] },
            { title: "Umegongwa kichwani?", bullets: ["Maumivu ya kichwa, kizunguzungu, kuchanganyikiwa, \"si sawa\"", "Acha kucheza na uwaambie wasimamizi", "Jifunze dalili: CDC HEADS UP"] }
          ],
          sources: [{ name: "CDC: Mafunzo ya HEADS UP kuhusu mtikisiko wa ubongo", url: "https://www.cdc.gov/heads-up/index.html" }],
          tryIt: "Andika orodha mbili: ishara za maumivu ya kawaida ya misuli na ishara za maumivu ya kuripoti. Kisha andika ni nani kwenye timu yako ungemwambia na ungempataje.",
          youCanNow: "kutofautisha maumivu ya kawaida ya misuli na maumivu yanayohitaji athletic trainer wako, na kujua la kufanya baada ya kugongwa kichwani.",
          quickCheck: [
            { objective: "O5", q: "Ni ipi ishara ya maumivu yanayohitaji athletic trainer wako?", options: ["Uchovu hafifu miguuni siku moja baada ya mazoezi magumu", "Maumivu makali kwenye kiungo yanayozidi kuwa mabaya", "Maumivu kidogo ya misuli yanayopotea baada ya siku mbili", "Kuhisi njaa baada ya mazoezi"], answer: 1, why: "Maumivu makali, ya kiungo au mfupa, uvimbe, kuchechemea au maumivu yanayozidi yanahitaji mtaalamu." },
            { objective: "O5", q: "Mchezaji mwenzako amegongwa kichwani na anasema ana kizunguzungu. Nini kinafuata?", options: ["Anaendelea kucheza akitaka", "Anapumzika kwa mchezo mmoja", "Anaacha kucheza na wewe unamwambia kocha au athletic trainer", "Anakunywa maji na kurudi uwanjani"], answer: 2, why: "Kugongwa kichwani pamoja na dalili kunamaanisha kuacha kucheza na kuwaambia wasimamizi." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kujenga mpango wako wa kupona",
          minutes: 5,
          goal: "Weka chakula, maji na usingizi katika mpango mmoja wa kupona wa wiki na uukague na mtaalamu.",
          text: [
            "Sasa viunganishe pamoja. Mpango wako wa wiki una milo inayozunguka mazoezi, utaratibu wa siku ya mechi, tabia ya kunywa maji na utaratibu wa usingizi.",
            "Muombe msaidizi wa AI aviunganishe: \"Hii ni ratiba yangu ya mazoezi na mechi, bajeti yangu na jiko langu. Tengeneza jedwali la wiki moja lenye milo, vitafunio, vikumbusho vya maji na saa za kulala.\" Kwanza ondoa taarifa zozote binafsi za afya.",
            "Kisha upeleke kwa mtaalamu wa lishe aliyesajiliwa, athletic trainer wako au daktari wako. Uliza: \"Je, huu unafaa mwili wangu na mchezo wangu? Ungebadilisha nini?\" Mpango wanaokusaidia kurekebisha ndio wa kufuata. Shule, timu au kituo cha afya cha wanafunzi kinaweza kukuunganisha na mmoja wao."
          ],
          steps: ["Kusanya taarifa za ratiba yako, bajeti yako na jiko lako.", "Iombe AI jedwali la wiki moja: milo, vitafunio, maji, saa za kulala.", "Ondoa taarifa binafsi za afya.", "Uonyeshe kwa mtaalamu wa lishe, athletic trainer au daktari.", "Usasishe kwa ushauri wao."],
          words: [["Mpango wa kupona", "utaratibu wako wa wiki wa chakula, maji, usingizi na kupumzika unaosaidia mwili wako kurudi katika hali nzuri."]],
          slides: [
            { title: "Mpango wako wa kupona", bullets: ["Milo inayozunguka mazoezi", "Utaratibu wa siku ya mechi", "Tabia ya kunywa maji", "Utaratibu wa usingizi"] },
            { title: "AI inaandika rasimu", bullets: ["Jedwali la wiki moja", "Hakuna taarifa binafsi za afya"] },
            { title: "Mtaalamu anaukagua", bullets: ["Mtaalamu wa lishe, athletic trainer au daktari", "\"Ungebadilisha nini?\"", "Fuata mpango uliorekebishwa"] }
          ],
          sources: [{ name: "Academy of Nutrition and Dietetics: Tafuta mtaalamu wa lishe", url: "https://www.eatright.org/find-a-nutrition-expert" }],
          tryIt: "Kazi ya mwisho: tumia msaidizi wa AI kuandika rasimu ya mpango wako wa wiki moja wa milo na kupona, ondoa taarifa binafsi za afya, na uuonyeshe kwa mtaalamu wa lishe, athletic trainer au daktari.",
          youCanNow: "kujenga mpango wa wiki wa chakula, maji na usingizi kwa AI na kuukagulisha kwa mtaalamu.",
          quickCheck: [
            { objective: "O6", q: "Nini kinaingia kwenye mpango wako wa kupona wa wiki moja?", options: ["Milo na vitafunio, vikumbusho vya maji na saa za kulala", "Mazoezi yako tu", "Ratiba yako ya mechi tu", "Orodha ya virutubisho"], answer: 0, why: "Mpango unaunganisha chakula, maji na usingizi kulingana na ratiba yako." },
            { objective: "O6", q: "Athletic trainer wako anapendekeza mabadiliko kwenye mpango ulioandikwa na AI. Unafanya nini?", options: ["Kubaki na toleo la AI", "Kuiomba AI ibishane naye", "Kutumia nusu ya kila mmoja", "Kusasisha mpango kwa ushauri wake na kufuata toleo hilo"], answer: 3, why: "Mpango ambao mtaalamu anakusaidia kurekebisha ndio wa kufuata." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Tabia za kupona",
        questions: [
          { objective: "O4", q: "Kwa nini usingizi ni muhimu kwa wanamichezo?", options: ["Si muhimu", "Unachukua nafasi ya mazoezi", "Kwa uzito tu", "Mwili unajirekebisha na ubongo unahifadhi ujuzi"], answer: 3, why: "Usingizi ndio wakati wa kujirekebisha na kujifunza." },
          { objective: "O4", q: "Ni kipi ni sehemu ya utaratibu mzuri wa usingizi?", options: ["Kuzima skrini kabla ya kulala", "Vinywaji vya nguvu usiku", "Saa tofauti ya kulala kila usiku", "Simu kitandani hadi upate usingizi"], answer: 0, why: "Kuzima skrini kabla ya kulala kunakusaidia kupata usingizi." },
          { objective: "O5", q: "Goti lako lina maumivu makali na uvimbe baada ya mazoezi. Unafanya nini?", options: ["Kupuuza", "Kuiomba AI tiba", "Kumwambia athletic trainer wako", "Kukimbia zaidi ili kulilegeza"], answer: 2, why: "Maumivu makali na uvimbe yanahitaji mtaalamu." },
          { objective: "O5", q: "Mchezaji mwenzako anahisi kizunguzungu na \"si sawa\" baada ya kugongwa kichwani. Nini kinapaswa kutokea?", options: ["Kuendelea kucheza", "Kupumzika kidogo na kurudi uwanjani", "Kuuliza app", "Kuacha kucheza na kuwaambia wasimamizi"], answer: 3, why: "Huenda ni mtikisiko wa ubongo: acha na umwambie kocha au athletic trainer." },
          { objective: "O6", q: "Nani anapaswa kukagua mpango wako wa kupona ulioandikwa na AI?", options: ["Sehemu yoyote ya maoni mtandaoni", "Mtaalamu wa lishe, athletic trainer au daktari", "AI tena", "Hakuna"], answer: 1, why: "Mtaalamu anaweza kufanya mpango ulingane na mwili wako na mchezo wako." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Lishe na Kupona kwa Msaada wa AI",
    questions: [
      { objective: "O1", q: "Ni chakula gani hasa ni protini?", options: ["Wali", "Matufaha", "Mayai", "Mkate"], answer: 2, why: "Mayai ni chakula cha protini." },
      { objective: "O1", q: "Sehemu tatu kuu za sahani yenye uwiano ni:", options: ["Wanga, protini, matunda na mboga", "Peremende, soda, chipsi", "Protini tu", "Mboga tu"], answer: 0, why: "Sehemu hizo tatu zinashughulikia nguvu, kujirekebisha na vitamini." },
      { objective: "O1", q: "Siku za mazoezi magumu kwa kawaida zinahitaji:", options: ["Chakula zaidi", "Kuruka milo", "Kutokunywa maji", "Vitafunio tu"], answer: 0, why: "Mazoezi zaidi kwa kawaida yanamaanisha nguvu zaidi inahitajika." },
      { objective: "O1", q: "Chakula au sura ya mwili vinakupa msongo. Unapaswa:", options: ["Kuacha kula", "Kuficha", "Kuzungumza na mtu unayemwamini na athletic trainer wako au daktari", "Kuiomba AI mpango wa kula (diet)"], answer: 2, why: "Wasiwasi huu unastahili msaada wa kweli." },
      { objective: "O2", q: "Siku ya mechi, jaribu:", options: ["Chakula kipya kabisa", "Vyakula ulivyovizoea", "Hakuna kitu siku nzima", "Kirutubisho kipya"], answer: 1, why: "Vyakula unavyovizoea ndivyo salama zaidi." },
      { objective: "O2", q: "Unapaswa kunywa maji lini?", options: ["Wakati wa mechi tu", "Kamwe kabla ya mechi", "Ukiambiwa tu", "Siku nzima, zaidi kwenye joto"], answer: 3, why: "Kunywa maji ya kutosha ni tabia ya siku nzima." },
      { objective: "O2", q: "Ni ipi inaweza kuwa ishara unahitaji maji zaidi?", options: ["Kuhisi umepumzika", "Kufikiri vizuri", "Mkojo wenye rangi nzito na maumivu ya kichwa", "Usingizi mzuri"], answer: 2, why: "Mkojo wenye rangi nzito, maumivu ya kichwa na misuli kukakamaa vinaweza kuonyesha maji ni kidogo mwilini." },
      { objective: "O2", q: "Baada ya mazoezi magumu, kitafunio cha kupona kina:", options: ["Maji tu", "Peremende tu", "Hakuna kitu", "Wanga na protini"], answer: 3, why: "Wanga unajaza nguvu tena; protini inasaidia kujirekebisha." },
      { objective: "O3", q: "Unapaswa kuipa AI nini ili upate mawazo ya milo yenye manufaa?", options: ["Ratiba yako, bajeti yako na jiko lako", "Rekodi zako za matibabu", "Nywila yako", "Kadi yako ya benki"], answer: 0, why: "Maelezo hayo yanafanya mawazo yalingane na maisha yako." },
      { objective: "O3", q: "Ni kipi HUPASWI kuiomba AI?", options: ["Mapishi ya microwave", "Lengo la kalori la kupunguza uzito", "Orodha ya mahitaji", "Mawazo ya milo yenye maharagwe"], answer: 1, why: "Malengo ya kalori yanategemea afya yako; muulize mtaalamu wa lishe." },
      { objective: "O3", q: "Unapaswa kuiambia AI kuhusu mzio wa chakula vipi?", options: ["Kwa kubandika faili lako la matibabu", "Kwa kuandika maelezo ya daktari wako", "Kwa maneno ya jumla, kama \"bila karanga\"", "Usiutaje"], answer: 2, why: "Maneno ya jumla yanaleta mawazo salama bila kutoa rekodi." },
      { objective: "O3", q: "Baada ya AI kutengeneza orodha ya mahitaji, unapaswa:", options: ["Kukagua bei kwenye duka lako", "Kuamini bei hizo", "Kununua kila kitu mara mbili", "Kuiweka mtandaoni"], answer: 0, why: "AI haiwezi kujua bei halisi za duka lako." },
      { objective: "O3", q: "Virutubisho (supplements) ni hatari kwa sababu:", options: ["Daima ni haramu kisheria", "Ni vya bure", "Makocha wanaviuza", "Havikaguliwi na FDA kabla ya kuuzwa na baadhi vina vitu vilivyopigwa marufuku"], answer: 3, why: "USADA (shirika la Marekani dhidi ya dawa za kuongeza nguvu michezoni) linaonya kuhusu virutubisho vichafu na vyenye lebo za uongo." },
      { objective: "O4", q: "Ni kipi kinakusaidia kupata usingizi?", options: ["Kafeini usiku sana", "Chumba chenye ubaridi na giza", "Kuperuzi simu kitandani", "Saa tofauti ya kulala kila usiku"], answer: 1, why: "Chumba chenye ubaridi na giza kinasaidia usingizi." },
      { objective: "O4", q: "Umechoka sana kila wakati hata baada ya kulala. Unapaswa:", options: ["Kunywa vinywaji vya nguvu zaidi", "Kuzungumza na daktari wako", "Kupuuza", "Kufanya mazoezi kwa nguvu zaidi"], answer: 1, why: "Uchovu usioisha ni sababu ya kumwona daktari." },
      { objective: "O5", q: "Siku za kupumzika ni:", options: ["Uvivu", "Zimekatazwa", "Kwa wachezaji walioumia tu", "Sehemu ya mazoezi"], answer: 3, why: "Mwili wako unazoea na kupata nguvu zaidi siku za kupumzika." },
      { objective: "O5", q: "Ni kipi kinasikika kama maumivu ya kawaida ya misuli?", options: ["Uchovu hafifu wa misuli unaopotea baada ya siku moja au mbili", "Maumivu makali ya kiungo", "Uvimbe na kuchechemea", "Maumivu yanayozidi kuwa mabaya"], answer: 0, why: "Maumivu ya kawaida ya misuli ni hafifu na yanapotea." },
      { objective: "O5", q: "Unaweza kujifunza dalili za mtikisiko wa ubongo bure wapi?", options: ["Picha yoyote ya utani mtandaoni (meme)", "Tangazo la kinywaji cha michezo", "CDC HEADS UP", "Hakuna mahali"], answer: 2, why: "CDC inatoa mafunzo ya bure ya HEADS UP." },
      { objective: "O6", q: "Kabla ya kubandika mpango wako kwenye AI, ondoa:", options: ["Saa za mazoezi", "Bajeti yako", "Vyakula unavyopenda zaidi", "Taarifa binafsi za afya"], answer: 3, why: "Taarifa za afya zinabaki kuwa siri." },
      { objective: "O6", q: "Mpango unaopaswa kufuata ni:", options: ["Rasimu ya kwanza ya AI", "Ule uliorekebishwa na mtaalamu wa lishe, athletic trainer au daktari", "Mpango wa mshawishi wa mitandao", "Mpango wa mpinzani wako"], answer: 1, why: "Mtaalamu anafanya mpango ukufae wewe." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi amepiga hatua kiasi gani
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [1, 4, 8, 9, 13, 16, 18, 19] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Milo yenye uwiano", objective: "O1", notYet: "Milo inaacha kundi zima la vyakula, au milo inakosekana karibu na mazoezi.", meets: "Kila mlo mkuu una wanga, protini, na matunda au mboga.", exceeds: "Chakula zaidi kimepangwa siku ngumu na milo inatumia vyakula ambavyo mwanamichezo tayari anavipenda." },
      { name: "Utaratibu wa siku ya mechi", objective: "O2", notYet: "Hakuna muda, hakuna mpango wa maji, au chakula kipya siku ya mechi.", meets: "Mlo unaozoeleka saa chache kabla, kitafunio kidogo karibu na kuanza, maji siku nzima na kitafunio cha kupona baadaye.", exceeds: "Una mpango wa joto na dalili za hatari zinazomaanisha kusimama na kuwaambia wasimamizi." },
      { name: "Orodha ya mahitaji kwa bajeti", objective: "O3", notYet: "Hakuna orodha ya mahitaji, au mpango unaiomba AI malengo ya kalori au dozi za virutubisho.", meets: "Orodha ya mahitaji inayolingana na bajeti na jiko vilivyotajwa, na mzio umeelezwa kwa maneno ya jumla.", exceeds: "Bei zimekaguliwa kwenye duka la mwanamichezo na orodha imerekebishwa." },
      { name: "Utaratibu wa usingizi", objective: "O4", notYet: "Hakuna saa ya kawaida ya kuamka wala ya kulala.", meets: "Saa ya kawaida ya kuamka, ya kulala na ya kuzima skrini zinazolingana na ratiba.", exceeds: "Saa za usingizi zimeandikwa kwa wiki moja na utaratibu umerekebishwa kulingana na mazoezi ya asubuhi sana au mechi za usiku." },
      { name: "Ukaguzi wa mtaalamu", objective: "O6", notYet: "Mpango haukuonyeshwa kwa mtaalamu, au una taarifa binafsi za afya.", meets: "Taarifa binafsi zimeondolewa, mpango umeonyeshwa kwa mtaalamu wa lishe, athletic trainer au daktari, na umesasishwa kwa ushauri wao.", exceeds: "Mwanamichezo anaandika kilichobadilishwa na kwa nini." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kazi ya mwisho na kupata Anafikia au Anazidi katika kila mstari wa rubriki",
      "Wanafunzi wanaoripoti kufuata mpango wao wa milo na usingizi uliokaguliwa siku 30 baadaye (utafiti wa kufuatilia)",
      "Wanafunzi wanaoripoti kuzungumza na mtaalamu wa lishe, athletic trainer au daktari kuhusu mpango wao",
      "Wanafunzi wanaoripoti kuwaambia wasimamizi kuhusu maumivu makali, dalili za ugonjwa wa joto au kugongwa kichwani badala ya kuendelea kucheza"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye intaneti",
      "Msaidizi wa AI wa bure (ChatGPT, Microsoft Copilot au Google Gemini)",
      "Ratiba yako ya mazoezi na mechi, bajeti ya chakula ya wiki na maelezo ya jiko lako",
      "Mawasiliano ya mtaalamu wa lishe aliyesajiliwa, athletic trainer, kituo cha afya cha wanafunzi au daktari",
      "Kama dakika 60, pamoja na muda wa kukutana na mtaalamu"
    ],
    facilitatorNotes: [
      "Sema wazi kwamba hii ni elimu ya jumla; usitoe ushauri wa mtu binafsi kuhusu kalori, uzito au virutubisho mbele ya kikundi.",
      "Kuwa mwangalifu na uzito na sura ya mwili: kamwe usiwapime uzito wala kuwalinganisha wanamichezo, na ujue umpeleke nani mtu akiwa na shida.",
      "Panga upatikanaji wa mtaalamu wa lishe aliyesajiliwa, athletic trainer au kituo cha afya cha wanafunzi kabla ya kazi ya mwisho ili kila mwanamichezo akaguliwe mpango wake.",
      "Pitieni dalili za ugonjwa wa joto na za kugongwa kichwani na kikundi kizima, na hakikisha wanamichezo wanajua wamwambie nani.",
      "Heshimu bajeti za chakula, mizio na sheria za chakula za utamaduni au dini unaposhiriki mifano ya milo."
    ]
  }
};
