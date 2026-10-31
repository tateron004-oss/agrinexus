"use strict";

// Koach Learn course (Swahili translation of agriculture-africa/agri-drones-data-precision.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const FAO_EO = { name: "FAO GIEWS: Uchunguzi wa Dunia kutoka angani (NDVI na viashiria vya mimea)", url: "https://www.fao.org/giews/earthobservation/index.jsp" };
const QGIS = { name: "QGIS (programu ya GIS ya bure na huria)", url: "https://qgis.org/" };
const ODM = { name: "OpenDroneMap (programu ya bure na huria ya kutengeneza ramani za droni)", url: "https://www.opendronemap.org/" };
const FAO_ITU_DRONES = { name: "FAO na ITU: E-agriculture in Action: Droni kwa Kilimo (2018)", url: "https://www.itu.int/pub/D-STR-E_AGRICULT.02-2018" };
const FAO_WHO_AERIAL = { name: "FAO na WHO: Mwongozo wa kunyunyizia viuatilifu kutoka angani (2024)", url: "https://www.who.int/publications/i/item/9789240076785" };

module.exports = {
  id: "agri-drones-data-precision-sw",
  lang: "sw",
  translationOf: "agri-drones-data-precision",
  category: "Agriculture (Africa)",
  name: "Droni za Kilimo: Uchambuzi wa Data na Kilimo cha Usahihi",
  skills: "Kukagua usahihi wa ramani ya droni, Kuchagua kiashiria sahihi cha mimea, Kufanya takwimu za kanda na kuhesabu mimea katika QGIS, Kutengeneza ramani ya maagizo, Kupiga hesabu kama kilimo cha usahihi kinalipa, Kuwaeleza wakulima matokeo",
  outcome: "kugeuza data ya droni kuwa uchambuzi uliokaguliwa na sahihi wenye takwimu za kanda na ramani ya maagizo, kupiga hesabu kama kuchukua hatua kunalipa, na kutoa matokeo kwa namna ambayo mkulima au meneja wa shamba kubwa anaweza kuyatumia.",
  about: [
    "Kozi hii ni kwa wachambuzi wa data za droni, wataalamu wa kilimo (agronomists), maafisa ugani, mameneja wa biashara za kilimo na mashamba makubwa, na biashara za huduma za droni nchini Kenya, Nigeria na kote Afrika. Unapaswa tayari kuweza kuunganisha picha kuwa ramani ya droni na kutengeneza ramani ya msingi ya NDVI (angalia mfululizo wa ufuatiliaji, Kozi ya 3).",
    "Sura ya 1 ni uchambuzi: kuhakikisha ramani ni sahihi vya kutosha kuitumia, kuchagua kati ya viashiria vya mimea, na kupima kanda na kuhesabu mimea au miti katika QGIS. Sura ya 2 ni kilimo cha usahihi: kutengeneza ramani ya maagizo kutokana na uchambuzi wako, kukagua faida kwa bajeti rahisi ya sehemu, na kuwasilisha matokeo ili wakulima wachukue hatua.",
    "Mifano inatumia mahindi na maharagwe, chai, kahawa, parachichi na muhogo. Viwango vya mbolea na mbegu katika kozi hii ni vya mfano tu: viwango halisi vinatoka kwenye vipimo vya udongo, utafiti wa eneo lako na mapendekezo ya ugani. Kila sura inafungwa kwa jaribio la maarifa, na kozi inafungwa kwa mtihani wa maswali 20."
  ],
  finalTask: "Ukitumia data ya droni ya shamba halisi au sampuli ya bure: eleza usahihi wa ramani na jinsi ulivyoukagua; chagua kiashiria cha mimea na ueleze sababu; gawa shamba katika kanda na uripoti takwimu za kanda (eneo na wastani wa kiashiria) na idadi ya mimea au miti; tengeneza ramani ya maagizo yenye kiwango au kazi kwa kila kanda (ukitumia viwango vinavyopendekezwa katika eneo lako); piga hesabu ya bajeti rahisi ya sehemu inayoonyesha kama inalipa; na andika ukurasa mmoja wa matokeo kwa mkulima kwa lugha rahisi.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wachambuzi wa data za droni, wataalamu wa kilimo, maafisa ugani, mameneja wa biashara za kilimo na mashamba makubwa, na biashara za huduma za droni nchini Kenya, Nigeria na kote Afrika, wanaofanya kazi na mazao kama mahindi na maharagwe, chai, kahawa, parachichi na muhogo.",
    startingPoint: "Wanafunzi tayari wanaweza kuunganisha picha kuwa ramani ya droni na kutengeneza ramani ya msingi ya NDVI. Ni wachache wanaokagua usahihi wa mahali wa ramani, wanaochagua kiashiria kulingana na zao na hatua ya ukuaji, wanaogeuza ramani kuwa takwimu za kanda, wanaotengeneza ramani ya maagizo, wanaopima kama inalipa, au wanaowasilisha matokeo ili mkulima achukue hatua.",
    gap: "Ramani za rangi pekee mara chache hubadilisha kinachofanyika shambani, na ramani zisizo sahihi au kiashiria kisichofaa kinaweza kuwapeleka wafanyakazi na pembejeo mahali pasipofaa. Kugeuza data ya droni kuwa namba zilizokaguliwa, maagizo yanayotekelezeka na bajeti ya sehemu ya kweli kunawasaidia wakulima na mashamba makubwa kutumia pembejeo mahali zinapolipa, na kuiamini huduma ya droni.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi; kila kiashiria na neno la ramani linaelezwa",
      "Vifaa: kompyuta ndogo (laptop) yenye QGIS ya bure na data ya droni au sampuli ya bure",
      "Viwango ni vya mfano: viwango halisi vya mbolea na mbegu vinatoka kwenye vipimo vya udongo, utafiti wa eneo lako na ugani",
      "Kunyunyizia au kusambaza kwa droni kunahitaji vibali vya usafiri wa anga na vya viuatilifu",
      "Data za wakulima ni siri na zinashirikiwa tu kwa ruhusa yao"
    ],
    prerequisites: "\"Droni za Ufuatiliaji wa Kilimo 3: Afya ya Mazao, Wadudu na Uchakataji wa Data\" (kuunganisha ramani na kutengeneza ramani ya NDVI)."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa ramani ya droni iliyounganishwa na ripoti yake ya uchakataji", action: "kukagua usahihi wa mahali na ubora wa picha wa ramani na kuripoti kosa", standard: "ukitumia vituo vya kukagua au njia iliyotajwa, kabla ya uchambuzi wowote" },
    { id: "O2", condition: "Ukipewa zao, hatua yake ya ukuaji na kamera iliyotumika", action: "kuchagua kiashiria cha mimea na kueleza kwa nini kinafaa", standard: "na kukithibitisha kwa ramani ya rangi halisi na shambani" },
    { id: "O3", condition: "Ukitumia QGIS na ramani ya kiashiria", action: "kutengeneza kanda na kuripoti eneo na wastani wa kiashiria wa kila kanda, na kuhesabu mimea au miti", standard: "idadi zikiwa zimekaguliwa kwenye sampuli shambani na kosa likiripotiwa" },
    { id: "O4", condition: "Ukipewa kanda na sababu zake zilizothibitishwa shambani", action: "kutengeneza ramani ya maagizo yenye kiwango au kazi kwa kila kanda", standard: "ukitumia viwango viwili hadi vinne kutoka kwenye vipimo vya udongo au mapendekezo ya eneo lako" },
    { id: "O5", condition: "Kwa hatua ya usahihi inayopendekezwa", action: "kupiga hesabu ya bajeti ya sehemu yenye hali ya tahadhari na hali inayotarajiwa", standard: "ukihesabu tu kinachobadilika, na kusema kwa uaminifu kama hailipi" },
    { id: "O6", condition: "Kwa mkulima au meneja wa shamba kubwa", action: "kuandika matokeo mafupi yanayoanza na hatua ya kuchukua, kwa lugha yao na vipimo vyao", standard: "ukionyesha una uhakika kiasi gani na nini kilikaguliwa shambani" }
  ],
  chapters: [
    {
      name: "Sura 1: Uchambuzi wa data",
      lessons: [
        {
          objectives: ["O1"],
          title: "Je, ramani ni sahihi vya kutosha kuitumia?",
          minutes: 6,
          goal: "Kagua usahihi wa mahali na ubora wa picha wa ramani ya droni kabla ya kuichambua.",
          text: [
            "Kabla hujawatuma wafanyakazi kwenye kanda, unahitaji kuamini kwamba ramani inaweka vitu mahali sahihi. GNSS ya kawaida ya droni (mfumo wa kutambua mahali kwa satelaiti, kama GPS) inaweza kuweka ramani mita chache pembeni. Hilo ni sawa kwa kutafuta kona yenye maji, lakini si kwa kuongoza kazi kwenye mstari mmoja mmoja au kulinganisha ramani za tarehe tofauti.",
            "Njia tatu za kuboresha na kukagua usahihi: vituo vya udhibiti ardhini (GCPs), yaani alama zilizowekwa ardhini ambazo unapima mahali pake kwa kipokezi sahihi cha GNSS na kuzitumia katika uchakataji; droni zenye RTK au PPK, zinazorekebisha mahali wakati wa safari au baada yake; na vituo vya kukagua, yaani alama za ziada zilizopimwa ambazo hazitumiki katika uchakataji, bali kupima ramani ya mwisho. Ripoti kosa ulilopima.",
            "Kagua pia ubora: ripoti ya uchakataji (picha ngapi zilitumika, maonyo yoyote), undani halisi wa picha (GSD), ukungu, mashimo na makosa ya kuunganisha. Kwa ramani utakazolinganisha kwa muda, tumia njia ileile kila mara na hakikisha zinalingana zikiwekwa juu ya nyingine."
          ],
          steps: ["Soma ripoti ya uchakataji: picha zilizotumika, maonyo, GSD.", "Tafuta ukungu, mashimo na makosa ya kuunganisha.", "Pima kosa la mahali kwenye vituo vya kukagua (au linganisha na vitu vinavyojulikana).", "Amua kama usahihi unafaa uamuzi unaotaka kufanya.", "Kwa ramani za tarehe tofauti, kagua kwamba zinalingana."],
          words: [["Kituo cha udhibiti ardhini (GCP)", "alama iliyowekwa ardhini yenye mahali palipopimwa kwa usahihi, inayotumika kurekebisha mahali pa ramani."], ["RTK / PPK", "njia zinazorekebisha mahali pa droni wakati wa safari (RTK) au baada yake (PPK) kwa usahihi mkubwa."], ["Kituo cha kukagua", "alama iliyopimwa inayotumika tu kupima usahihi wa ramani."], ["Ripoti ya uchakataji", "muhtasari ambao programu ya kuunganisha picha inatoa kuhusu ubora wa ramani."]],
          slides: [
            { title: "Amini kwanza, kisha tenda", bullets: ["GNSS ya kawaida: mita chache pembeni", "Inafaa kwa kanda, si kwa mstari mmoja mmoja", "Ramani za tarehe tofauti lazima zilingane"] },
            { title: "Boresha usahihi", bullets: ["Vituo vya udhibiti ardhini (GCPs)", "Droni zenye RTK au PPK", "Vituo vya kukagua kupima matokeo"] },
            { title: "Kagua ubora", bullets: ["Ripoti ya uchakataji na maonyo", "GSD halisi, ukungu, mashimo", "Njia ileile kila tarehe"] }
          ],
          sources: [ODM],
          tryIt: "Fungua ripoti ya uchakataji ya ramani uliyotengeneza (au ripoti ya sampuli ya data). Andika idadi ya picha zilizotumika, GSD, maonyo yoyote, na uamue kama ramani ni sahihi vya kutosha (a) kutafuta maeneo yenye maji, (b) kuongoza upandaji upya wa mstari mmoja mmoja.",
          youCanNow: "kukagua usahihi na ubora wa ramani ya droni na kuamua kama inafaa uamuzi.",
          quickCheck: [
            { objective: "O1", q: "Vituo vya kukagua vinatumika kwa nini?", options: ["Kupima usahihi wa ramani ya mwisho, kwa sababu havitumiki katika uchakataji", "Kutua droni kwa usalama", "Kuchaji betri shambani", "Kuonyesha mahali wafanyakazi wanaanzia"], answer: 0, why: "Vituo vya kukagua ni alama za ziada zilizopimwa ambazo haziingii kwenye uchakataji, ili uweze kupima kosa halisi la ramani." },
            { objective: "O1", q: "Utalinganisha ramani ya mwezi huu na ya mwezi uliopita ili kuongoza kazi kwenye mstari mmoja mmoja. Unakagua nini kwanza?", options: ["Rangi tu", "Afya ya betri ya droni", "Kwamba ramani zote mbili ni sahihi na zinalingana zikiwekwa juu ya nyingine", "Hakuna; GNSS ya kawaida inatosha daima"], answer: 2, why: "GNSS ya kawaida inaweza kuwa mita chache pembeni, kwa hiyo ramani za mistari au za muda lazima ziwe sahihi na zilingane." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kuchagua kiashiria sahihi cha mimea",
          minutes: 6,
          goal: "Chagua kiashiria cha mimea kinachofaa zao, hatua ya ukuaji na kamera.",
          text: [
            "NDVI = (NIR - Red) / (NIR + Red) ndicho kiashiria kinachojulikana zaidi; FAO inakitumia kutoka kwenye satelaiti kufuatilia mimea kote Afrika. Lakini NDVI hujaa (saturation) katika majani mengi yenye afya, kama mahindi yaliyokomaa, chai au kahawa: thamani zinakusanyika karibu na juu na tofauti ndogo zinapotea.",
            "NDRE inatumia bendi ya red-edge badala ya nyekundu: (NIR - RedEdge) / (NIR + RedEdge). Inabaki kuwa nyeti katika majani mengi na mara nyingi inaonyesha tofauti za nitrojeni na klorofili baadaye katika msimu. Ukiwa na kamera ya rangi tu, viashiria kama VARI, (Green - Red) / (Green + Red - Blue), au Excess Green, 2 x Green - Red - Blue, vinatenganisha mimea ya kijani na udongo na kuonyesha nguvu ya ukuaji kwa ujumla; vinafaa kwa idadi ya mimea na magugu, lakini havitegemewi sana kwa msongo wa mimea.",
            "Chagua kulingana na swali: mwanzo wa msimu, idadi ya mimea na magugu, kiashiria cha RGB au NDVI; katikati ya msimu kwa mazao yasiyofunga, NDVI; majani mengi na nitrojeni, NDRE. Chochote utakachochagua, tazama pia ramani ya rangi halisi, na thibitisha shambani."
          ],
          words: [["Kujaa (saturation)", "kiashiria kinapoacha kubadilika ingawa mimea bado inatofautiana, kama NDVI inavyofanya katika majani mengi."], ["Red edge", "bendi nyembamba ya mwanga kati ya nyekundu na karibu-infraredi (NIR), nyeti kwa klorofili."], ["NDRE", "Normalized Difference Red Edge, kiashiria ambacho ni nyeti zaidi kuliko NDVI katika majani mengi."], ["VARI", "Visible Atmospherically Resistant Index, kiashiria cha mimea kinachotumia bendi za RGB pekee."]],
          slides: [
            { title: "NDVI na kikomo chake", bullets: ["(NIR - Red) / (NIR + Red)", "Kinatumika sana, hata na FAO", "Hujaa katika majani mengi"] },
            { title: "Viashiria vingine", bullets: ["NDRE: (NIR - RedEdge) / (NIR + RedEdge)", "VARI: (G - R) / (G + R - B)", "Excess Green: 2G - R - B"] },
            { title: "Chagua kulingana na swali", bullets: ["Idadi ya mimea na magugu: kiashiria cha RGB au NDVI", "Mazao yasiyofunga katikati ya msimu: NDVI", "Majani mengi na nitrojeni: NDRE"] }
          ],
          sources: [FAO_EO, QGIS],
          tryIt: "Kwa kila hali chagua kiashiria na uandike kwa nini: (a) kuhesabu mimea ya mahindi ya wiki 3 kwa droni ya RGB, (b) tofauti za nitrojeni katika chai iliyofunga kwa droni ya multispectral (yenye bendi nyingi), (c) nguvu ya ukuaji wa muhogo katikati ya msimu kwa droni ya multispectral.",
          youCanNow: "kuchagua kiashiria cha mimea kinachofaa zao, hatua yake ya ukuaji na kamera.",
          quickCheck: [
            { objective: "O2", q: "Kwa nini NDVI inaweza kukosa tofauti ndogo katika mahindi yaliyokomaa, chai au kahawa?", options: ["Inafanya kazi usiku tu", "Hujaa katika majani mengi yenye afya", "Inahitaji kamera ya joto", "Inapuuza bendi ya karibu-infraredi"], answer: 1, why: "Katika majani mengi yenye afya, thamani za NDVI zinakusanyika karibu na juu, kwa hiyo tofauti ndogo zinapotea." },
            { objective: "O2", q: "Una kamera ya RGB tu na unataka kuona idadi ya mimea mwanzoni mwa msimu. Unachagua kiashiria gani?", options: ["NDRE", "Kiashiria cha joto", "Hakuna; RGB haiwezi kusaidia", "Kiashiria cha RGB kama VARI au Excess Green"], answer: 3, why: "Viashiria vya RGB vinatenganisha mimea ya kijani na udongo na vinafaa kwa idadi ya mimea na magugu mwanzoni mwa msimu." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Takwimu za kanda na kuhesabu katika QGIS",
          minutes: 6,
          goal: "Pima eneo na wastani wa kiashiria wa kila kanda, na hesabu mimea au miti.",
          text: [
            "Uchambuzi unageuza ramani ya rangi kuwa namba ambazo watu wanaweza kuzitumia. Kwanza, tengeneza kanda: gawa ramani ya kiashiria katika madaraja (kwa mfano chini, kati, juu), kisha yageuze kuwa poligoni na uondoe vipande vidogo sana; au chora kanda kwa mkono ukitumia ujuzi wa mkulima. Piga hesabu ya eneo la kila kanda.",
            "Kisha tumia Zonal Statistics ya QGIS kupiga hesabu, kwa kila kanda, wastani, kiwango cha chini, kiwango cha juu na mtawanyiko wa kiashiria. Linganisha kanda, na linganisha kanda zilezile kwa tarehe tofauti. Jedwali kama Kanda A: ha 3.2, wastani wa NDVI 0.71; Kanda C: ha 0.8, wastani wa NDVI 0.48 ni rahisi zaidi kutumia kuliko picha.",
            "Kuhesabu: kwa mazao ya miti (parachichi, embe, kahawa), vilele vya miti mara nyingi vinaonekana wazi kwenye ramani za RGB zenye undani mkubwa na vinaweza kuhesabiwa kwa mkono kwa kuweka nukta, au kwa plugins na scripts. Kwa mazao ya mistari, hesabu katika vipande vya sampuli kisha zidisha kwa eneo lote. Kagua daima sampuli ya idadi shambani na uripoti kosa."
          ],
          steps: ["Gawa ramani ya kiashiria katika madaraja machache, au chora kanda pamoja na mkulima.", "Geuza madaraja kuwa poligoni; ondoa vipande vidogo sana; piga hesabu ya eneo.", "Endesha Zonal Statistics kupata wastani, chini, juu na mtawanyiko kwa kila kanda.", "Hesabu miti au mimea (nukta, plugin au vipande vya sampuli).", "Kagua idadi shambani na uripoti kosa."],
          words: [["Takwimu za kanda (zonal statistics)", "namba (kama wastani) zinazohesabiwa kwa pikseli zilizo ndani ya kila kanda."], ["Poligoni", "umbo lililofungwa kwenye ramani, kama kanda au mpaka wa shamba."], ["Kugawa katika madaraja", "kuweka thamani za pikseli katika makundi machache, kama chini, kati na juu."]],
          slides: [
            { title: "Kutoka rangi hadi namba", bullets: ["Gawa ramani ya kiashiria katika madaraja", "Geuza kuwa poligoni za kanda, ondoa vipande vidogo", "Piga hesabu ya eneo la kila kanda"] },
            { title: "Zonal Statistics", bullets: ["Wastani, chini, juu, mtawanyiko kwa kila kanda", "Linganisha kanda na tarehe", "Kanda A: ha 3.2, wastani wa NDVI 0.71"] },
            { title: "Kuhesabu", bullets: ["Vilele vya miti kwenye ramani za RGB zenye undani", "Mazao ya mistari: vipande vya sampuli, kisha zidisha", "Kagua shambani na uripoti kosa"] }
          ],
          sources: [QGIS],
          tryIt: "Katika QGIS ukitumia ramani yako au sampuli: chora au gawa kanda tatu, piga hesabu ya maeneo yake, endesha Zonal Statistics kwenye kiashiria, na utengeneze jedwali la kanda, eneo na wastani. Kama ni zao la miti, hesabu miti katika kanda moja.",
          youCanNow: "kupima kanda na kuhesabu mimea au miti katika QGIS na kuonyesha matokeo kwa jedwali.",
          quickCheck: [
            { objective: "O3", q: "Jedwali la takwimu za kanda linakupa nini?", options: ["Picha nzuri zaidi", "Muda wa safari ya droni", "Ankara ya mteja", "Namba kama eneo na wastani wa kiashiria wa kila kanda"], answer: 3, why: "Takwimu za kanda zinageuza ramani ya rangi kuwa namba ambazo watu wanaweza kuzitumia." },
            { objective: "O3", q: "Programu yako imehesabu miti 1,240 ya parachichi. Unafanya nini kabla ya kuripoti?", options: ["Kuizungusha kuwa 1,000", "Kukagua sampuli ya idadi shambani na kuripoti kosa", "Kuongeza 10% kwa tahadhari", "Kuiripoti bila kukagua"], answer: 1, why: "Idadi zinakaguliwa kwenye sampuli shambani na kosa linaripotiwa." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Uchambuzi wa data",
        questions: [
          { objective: "O1", q: "Kituo cha kukagua kinatumika kwa nini?", options: ["Kurekebisha ramani wakati wa uchakataji", "Kupima usahihi wa ramani ya mwisho", "Kuchaji betri", "Kutua droni"], answer: 1, why: "Vituo vya kukagua vinapimwa lakini havitumiki katika uchakataji, kwa hiyo vinapima matokeo." },
          { objective: "O1", q: "Ramani iko takriban mita 3 pembeni. Ni sahihi vya kutosha:", options: ["Kuongoza upandaji upya wa mstari mmoja mmoja", "Kupima mmea mmoja mmoja", "Kutafuta kona yenye maji shambani", "Hakuna kitu kabisa"], answer: 2, why: "Kosa la mita chache ni sawa kwa vitu vikubwa, si kwa mistari." },
          { objective: "O2", q: "Kwa nini NDVI inaweza kuonyesha tofauti ndogo katika chai iliyokomaa yenye majani mengi?", options: ["NDVI hujaa katika majani mengi", "Chai haina majani", "Droni ilikuwa chini mno", "NDVI inafanya kazi kwenye udongo tu"], answer: 0, why: "Thamani zinakusanyika karibu na juu katika mimea mingi." },
          { objective: "O2", q: "Kiashiria gani kinaweza kuhesabiwa kwa kamera ya RGB pekee?", options: ["NDRE", "NDVI", "Hakuna", "VARI"], answer: 3, why: "VARI inatumia bendi za kijani, nyekundu na bluu pekee." },
          { objective: "O3", q: "Zonal Statistics ya QGIS inakupa:", options: ["Utabiri wa hali ya hewa", "Namba kama wastani wa kiashiria kwa kila kanda", "Leseni ya rubani", "Bei za mbegu"], answer: 1, why: "Inafupisha thamani za pikseli ndani ya kila kanda." }
        ]
      }
    },
    {
      name: "Sura 2: Kilimo cha usahihi",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kutengeneza ramani ya maagizo",
          minutes: 6,
          goal: "Geuza kanda kuwa ramani ya maagizo yenye kiwango au kazi kwa kila kanda.",
          text: [
            "Ramani ya maagizo inaiambia mashine au mfanyakazi la kufanya katika kila kanda. Anza na sababu, si rangi: tumia ukaguzi wa shambani na, inapowezekana, vipimo vya udongo kujua kwa nini kila kanda ni tofauti. Kisha chagua hatua kwa kila kanda: mbolea zaidi au kidogo, kiwango tofauti cha mbegu, kupanda upya, kuondoa maji, kupalilia, au kutobadilisha kitu.",
            "Viwango vinatoka kwenye elimu ya kilimo, si kwenye droni. Tumia matokeo ya vipimo vya udongo na mapendekezo ya taasisi ya utafiti ya taifa lako au huduma ya ugani kwa zao na eneo hilo. Ramani inasema tu kila kiwango kinaenda wapi. Weka idadi ya viwango kuwa ndogo (viwili hadi vinne) ili iwe rahisi kutekeleza.",
            "Kwa mashine, toa kanda kama shapefile au aina ya faili ambayo kidhibiti cha mashine kinakubali. Kwa kuweka kwa mkono, chapisha au shiriki ramani rahisi ya kanda yenye maagizo ya kila kanda kwa gramu kwa kila shimo la kupanda au mifuko kwa kila kanda, na weka alama za kanda shambani. Maagizo ya kunyunyizia au kusambaza yanayotekelezwa kwa droni yanahitaji vibali vya usafiri wa anga na vya viuatilifu vinavyotakiwa na nchi yako."
          ],
          steps: ["Thibitisha sababu katika kila kanda (ukaguzi wa shambani, vipimo vya udongo).", "Chagua hatua kwa kila kanda.", "Chukua viwango kutoka kwenye vipimo vya udongo na mapendekezo ya eneo lako.", "Weka viwango viwili hadi vinne.", "Toa faili kwa ajili ya mashine, au tengeneza ramani ya kanda iliyochapishwa yenye maagizo kwa wafanyakazi."],
          words: [["Ramani ya maagizo", "ramani inayoiambia mashine au mfanyakazi kiasi cha kuweka, au la kufanya, katika kila kanda."], ["Shapefile", "aina ya faili ya GIS inayotumika sana kwa kanda na mipaka."], ["Kipimo cha udongo", "uchunguzi wa maabara wa virutubisho na asidi ya udongo."]],
          slides: [
            { title: "Anza na sababu", bullets: ["Kagua kila kanda shambani", "Vipimo vya udongo inapowezekana", "Kisha chagua hatua"] },
            { title: "Viwango vinatoka kwenye elimu ya kilimo", bullets: ["Vipimo vya udongo na mapendekezo ya eneo lako", "Ramani inasema wapi, si kiasi gani", "Viwango viwili hadi vinne"] },
            { title: "Ifikishe", bullets: ["Mashine: shapefile au aina ya faili ya kidhibiti", "Kazi ya mkono: ramani iliyochapishwa, gramu kwa kila shimo", "Kunyunyizia au kusambaza kwa droni: vibali vinahitajika"] }
          ],
          sources: [FAO_WHO_AERIAL, QGIS],
          tryIt: "Ukitumia kanda zako tatu kutoka Somo la 3, andika jedwali la maagizo: kanda, eneo, sababu inayowezekana, hatua, kiwango (andika \"kutoka mapendekezo ya eneo\" kama huna), na jinsi wafanyakazi watakavyoipata kanda.",
          youCanNow: "kutengeneza ramani ya maagizo inayotekelezeka yenye kiwango au kazi kwa kila kanda.",
          quickCheck: [
            { objective: "O4", q: "Ramani ya maagizo inaonyesha nini?", options: ["Rangi za NDVI tu", "Mpaka wa shamba", "Cha kuweka au cha kufanya katika kila kanda", "Njia za safari ya droni"], answer: 2, why: "Ramani ya maagizo inaiambia mashine au mfanyakazi la kufanya katika kila kanda." },
            { objective: "O4", q: "Kanda moja inaonekana dhaifu kwenye ramani. Unafanya nini kabla ya kuchagua hatua?", options: ["Kutafuta sababu kwa ukaguzi wa shambani na, inapowezekana, kipimo cha udongo", "Kuweka mbolea mara mbili pale", "Kuipanda upya mara moja", "Kuipuuza"], answer: 0, why: "Anza na sababu, si rangi; hatua inategemea kwa nini kanda ni tofauti." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Je, inalipa? Bajeti rahisi ya sehemu",
          minutes: 6,
          goal: "Piga hesabu kama hatua ya usahihi inalipa kwa kutumia bajeti ya sehemu.",
          text: [
            "Bajeti ya sehemu inalinganisha tu kinachobadilika. Upande mmoja: mapato ya ziada (mavuno zaidi yanayouzwa) na pesa zinazookolewa (mbolea kidogo mahali ilipokuwa ikipotea bure). Upande mwingine: gharama za ziada (huduma ya droni, pembejeo zaidi katika baadhi ya kanda, nguvu kazi) na mapato yanayopotea. Upande wa kwanza ukiwa mkubwa zaidi, badiliko linalipa.",
            "Mfano wenye namba za mfano kwa shilingi za Kenya (KSh): shamba la mahindi la hekta 4 linalipa KSh 6,000 kwa kutengeneza ramani. Maagizo yanahamisha mifuko 2 ya mbolea kutoka kanda ya hekta 1 iliyojaa maji, ambapo ilikuwa ikipotea, hadi kanda ya kawaida ya hekta 2, kwa hiyo hakuna mbolea ya ziada inayonunuliwa, na mkulima anatarajia mifuko 5 ya ziada ya mahindi kutoka kanda hiyo. Faida: mifuko 5 x bei ya eneo lako kwa mfuko. Gharama: KSh 6,000 kwa ramani + nguvu kazi ya kuchimba mfereji kwa mkono. Tumia bei halisi za eneo lako na makadirio ya mavuno ya tahadhari.",
            "Onyesha kiwango cha juu na cha chini, kwa sababu mavuno na bei hubadilika: hali ya tahadhari na hali inayotarajiwa. Hesabu pia faida ambazo ni vigumu kuziwekea bei, kama kupata onyo mapema la viwavijeshi vamizi (fall armyworm). Kuwa mwaminifu kama namba hazilipi kwa shamba dogo; chama cha ushirika au huduma ya pamoja inaweza kubadilisha jibu."
          ],
          steps: ["Orodhesha mapato ya ziada na pesa zinazookolewa.", "Orodhesha gharama za ziada na mapato yanayopotea.", "Tumia bei za eneo lako na makadirio ya mavuno ya tahadhari.", "Piga hesabu ya hali ya tahadhari na hali inayotarajiwa.", "Andika jibu kwa uaminifu, pamoja na kinachoweza kulibadilisha."],
          words: [["Bajeti ya sehemu", "ulinganisho rahisi wa gharama na faida zinazobadilika tu unapobadilisha jambo moja."], ["Kurudisha gharama (break-even)", "hali ambapo faida za ziada ni sawa kabisa na gharama za ziada."]],
          slides: [
            { title: "Kinachobadilika tu", bullets: ["Jumlisha: mapato ya ziada, pesa zilizookolewa", "Toa: gharama za ziada, mapato yaliyopotea", "Jumlisha kubwa kuliko toa = inalipa"] },
            { title: "Tumia namba halisi", bullets: ["Bei za eneo lako kwa mfuko au kilo", "Makadirio ya mavuno ya tahadhari", "Huduma, pembejeo, nguvu kazi"] },
            { title: "Kuwa mwaminifu", bullets: ["Hali ya tahadhari na hali inayotarajiwa", "Hesabu faida zisizo rahisi kuwekea bei", "Shamba dogo? Huduma ya pamoja inaweza kusaidia"] }
          ],
          tryIt: "Fanya bajeti ya sehemu ya mfano huo ukitumia bei halisi kutoka soko la eneo lako (bei ya mahindi kwa mfuko, bei ya mbolea kwa mfuko, nguvu kazi kwa siku). Piga hesabu ya hali ya tahadhari (mifuko 3 ya ziada) na hali inayotarajiwa (mifuko 5 ya ziada). Je, inalipa?",
          youCanNow: "kutumia bajeti ya sehemu kuonyesha kama hatua ya usahihi inalipa.",
          quickCheck: [
            { objective: "O5", q: "Katika bajeti ya sehemu, kipi ni gharama?", options: ["Ada ya huduma ya kutengeneza ramani kwa droni", "Mavuno ya ziada yaliyouzwa", "Pesa za mbolea zilizookolewa", "Bei ya juu zaidi ya mavuno"], answer: 0, why: "Gharama za ziada kama huduma ya droni na nguvu kazi zinaenda upande wa gharama." },
            { objective: "O5", q: "Hali yako inayotarajiwa inalipa, lakini hali ya tahadhari inapata hasara. Unamwambia mkulima nini?", options: ["Hali inayotarajiwa tu", "Kwamba inalipa daima", "Hali zote mbili kwa uaminifu, pamoja na kinachosababisha tofauti", "Hakuna chochote kuhusu pesa"], answer: 2, why: "Mavuno na bei hubadilika, kwa hiyo unaonyesha kiwango cha juu na cha chini na unakuwa mwaminifu namba zinapokaribiana." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kuwasilisha matokeo ili wakulima wachukue hatua",
          minutes: 5,
          goal: "Wasilisha matokeo ya uchambuzi kwa namna fupi na wazi ambayo mkulima atafanyia kazi.",
          text: [
            "Uchambuzi bora kabisa unapotea bure kama mkulima haelewi au haumwamini. Anza na jibu na hatua: \"Kanda C (kona ya chini karibu na barabara, takriban ekari 2) imejaa maji. Chimba mfereji kabla ya kuweka mbolea ya juu. Usiweke mbolea pale msimu huu.\" Kisha onyesha ramani yenye kanda kwa rangi rahisi na alama za mahali zinazojulikana.",
            "Tumia njia na lugha ambayo mkulima anatumia: ukurasa uliochapishwa, picha na ujumbe mfupi kwenye WhatsApp au SMS, au ujumbe wa sauti kwa Kiswahili, Kihausa, Kiyoruba, Kiigbo au lugha nyingine ya eneo hilo. Tumia vipimo vya eneo hilo (ekari, mifuko, madebe) pamoja na hekta na kilo. Weka namba chache.",
            "Onyesha una uhakika kiasi gani, na nini kilithibitishwa shambani. Jitolee kutembea shambani pamoja. Kubalianeni nini kitakaguliwa wakati ujao, na andika kile mkulima alichofanya, ili uchambuzi unaofuata uonyeshe kama kilifanya kazi. Weka data za wakulima kuwa siri na uzishiriki tu kwa ruhusa yao."
          ],
          steps: ["Andika jibu na hatua kwanza, kanda kwa kanda.", "Onyesha ramani rahisi yenye alama za mahali.", "Tumia njia, lugha na vipimo vya mkulima.", "Sema una uhakika kiasi gani na nini kilithibitishwa.", "Kubalianeni ufuatiliaji na andika kile mkulima alichofanya."],
          words: [["Alama ya mahali", "kitu ambacho watu wanakijua, kama barabara, mti, stoo au mto, kinachotumika kupata mahali."], ["Ufuatiliaji", "ukaguzi wa baadaye kuona kama hatua ilifanya kazi."]],
          slides: [
            { title: "Jibu na hatua kwanza", bullets: ["Kanda C, kona ya chini karibu na barabara", "Chimba mfereji kabla ya mbolea ya juu", "Kisha ramani"] },
            { title: "Njia yao, lugha yao", bullets: ["Ukurasa uliochapishwa, WhatsApp, SMS, ujumbe wa sauti", "Kiswahili, Kihausa, Kiyoruba, Kiigbo na nyinginezo", "Ekari, mifuko, madebe pamoja na hekta"] },
            { title: "Jenga uaminifu", bullets: ["Sema una uhakika kiasi gani", "Tembeeni shambani pamoja", "Kubalianeni ufuatiliaji; weka data siri"] }
          ],
          sources: [FAO_ITU_DRONES],
          tryIt: "Kazi ya mwisho: kamilisha uchambuzi wako na uandike ukurasa mmoja wa matokeo kwa mkulima: usahihi na jinsi ulivyokaguliwa, kiashiria na kwa nini, jedwali la kanda na idadi, ramani ya maagizo, bajeti ya sehemu, na hatua kwa lugha rahisi pamoja na tarehe ya ufuatiliaji.",
          youCanNow: "kuwasilisha uchambuzi wa droni kama hatua zilizo wazi na za kuaminika ambazo mkulima anaweza kufuata.",
          quickCheck: [
            { objective: "O6", q: "Matokeo kwa mkulima yanapaswa kuanza vipi?", options: ["Kwa fomula ya kiashiria", "Kwa jibu na hatua ya kuchukua", "Kwa aina ya droni", "Kwa jedwali refu"], answer: 1, why: "Kuanza na jibu na hatua kunamsaidia mkulima kuchukua hatua." },
            { objective: "O6", q: "Mkulima anasoma Kiswahili na anatumia WhatsApp. Unatumaje matokeo?", options: ["PDF ndefu ya Kiingereza kwa barua pepe", "Faili ghafi la data", "Hakuna; waambie ofisi ya shamba tu", "Picha ya ramani ya kanda pamoja na ujumbe mfupi au ujumbe wa sauti kwa Kiswahili"], answer: 3, why: "Tumia njia na lugha ambayo mkulima anatumia, kwa namba chache na vipimo vya eneo hilo." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kilimo cha usahihi",
        questions: [
          { objective: "O4", q: "Viwango vya mbolea katika ramani ya maagizo vinapaswa kutoka wapi?", options: ["Rangi ya ramani ya droni pekee", "Vipimo vya udongo na mapendekezo ya kilimo ya eneo lako", "Kubahatisha", "Mtengenezaji wa droni"], answer: 1, why: "Ramani inaonyesha wapi; elimu ya kilimo inaamua kiasi gani." },
          { objective: "O4", q: "Ni viwango vingapi vinavyotekelezeka katika ramani nyingi za maagizo?", options: ["Viwili hadi vinne", "Hamsini", "Kimoja kwa kila mmea", "Hakuna"], answer: 0, why: "Viwango vichache ni rahisi kwa wafanyakazi na mashine kutekeleza." },
          { objective: "O5", q: "Bajeti ya sehemu inalinganisha:", options: ["Gharama zote za shamba kwa miaka kumi", "Gharama na faida zinazobadilika tu", "Bei ya droni tu", "Bei za mazao tu"], answer: 1, why: "Inaangalia kile ambacho badiliko linaongeza au kuondoa." },
          { objective: "O6", q: "Ni sentensi ipi bora ya kuanzia matokeo kwa mkulima?", options: ["Wastani wa NDRE wa poligoni 3 ulikuwa 0.31", "Ripoti ya uchakataji ilikuwa na picha 412", "Tulitumia QGIS 3", "Kanda C karibu na barabara imejaa maji: chimba mfereji kabla ya mbolea ya juu"], answer: 3, why: "Anza na jibu na hatua kwa maneno yanayojulikana." },
          { objective: "O5", q: "Bajeti ya sehemu inaonyesha badiliko halilipi kwa shamba la ekari 1. Unapaswa:", options: ["Kubadilisha namba", "Kuficha matokeo", "Kusema hivyo kwa uaminifu na kufikiria huduma ya pamoja au ya chama cha ushirika", "Kuongeza bei mara mbili"], answer: 2, why: "Matokeo ya kweli yanajenga uaminifu; kushirikiana kunaweza kubadilisha hesabu ya faida." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Droni za Kilimo: Uchambuzi wa Data na Kilimo cha Usahihi",
    questions: [
      { objective: "O1", q: "GNSS ya kawaida ya droni kwa kawaida inaweka ramani:", options: ["Kikamilifu", "Mita chache pembeni", "Kilomita pembeni", "Juu chini"], answer: 1, why: "Bila marekebisho, kosa la mahali ni mita chache." },
      { objective: "O1", q: "Vituo vya udhibiti ardhini ni:", options: ["Betri za droni", "Wafanyakazi wa shamba", "Alama zilizowekwa ardhini zenye mahali palipopimwa kwa usahihi", "Aina ya kiashiria"], answer: 2, why: "GCPs zinarekebisha mahali pa ramani wakati wa uchakataji." },
      { objective: "O1", q: "RTK na PPK ni:", options: ["Njia zinazorekebisha mahali pa droni kwa usahihi mkubwa", "Magonjwa ya mazao", "Aina za mbolea", "Chapa za kamera"], answer: 0, why: "Zinarekebisha mahali pa GNSS wakati wa safari au baada yake." },
      { objective: "O1", q: "Kwa nini ramani za tarehe tofauti lazima zilingane?", options: ["Kwa ajili ya rangi", "Kuokoa nafasi ya kuhifadhi", "Programu inazitaka", "Kulinganisha mahali palepale kwa muda"], answer: 3, why: "Ramani zisizolingana zinaonyesha mabadiliko ya uongo." },
      { objective: "O1", q: "Ripoti ya uchakataji inakuambia:", options: ["Bei za mazao", "Picha zilizotumika, maonyo na GSD", "Jina la mkulima", "Hali ya hewa"], answer: 1, why: "Inafupisha ubora wa ramani iliyounganishwa." },
      { objective: "O2", q: "NDVI kujaa (saturation) maana yake ni:", options: ["Kiashiria kinaacha kuonyesha tofauti katika majani mengi", "Kamera imelowa", "Betri imejaa", "Ramani ina mashimo"], answer: 0, why: "Thamani zinakusanyika karibu na juu katika mimea mingi." },
      { objective: "O2", q: "NDRE inatumia bendi gani badala ya nyekundu?", options: ["Bluu", "Joto", "Red edge", "Kijani"], answer: 2, why: "NDRE = (NIR - RedEdge) / (NIR + RedEdge)." },
      { objective: "O2", q: "Excess Green (2G - R - B) inafaa kwa:", options: ["Kupima pH ya udongo", "Kutabiri hali ya hewa", "Kuhesabu pesa", "Kutenganisha mimea ya kijani na udongo katika picha za RGB"], answer: 3, why: "Inaonyesha wazi mimea ya kijani dhidi ya udongo." },
      { objective: "O2", q: "Kwa tofauti za nitrojeni katika kahawa yenye majani mengi, chagua:", options: ["Excess Green", "NDRE", "Hakuna kiashiria", "Joto pekee"], answer: 1, why: "NDRE inabaki kuwa nyeti mahali ambapo NDVI hujaa." },
      { objective: "O2", q: "Kiashiria chochote utakachotumia, unapaswa pia:", options: ["Kutazama ramani ya rangi halisi na kuthibitisha shambani", "Kufuta picha ghafi", "Kumpuuza mkulima", "Kutumia tarehe moja tu milele"], answer: 0, why: "Viashiria ni dalili; ukaguzi wa shambani unathibitisha." },
      { objective: "O3", q: "Kugeuza pikseli zilizogawanywa kuwa kanda kunatengeneza:", options: ["Betri", "Nukta tu", "Poligoni", "Video"], answer: 2, why: "Kanda ni maumbo ya poligoni yenye maeneo." },
      { objective: "O3", q: "Kwa nini uondoe vipande vidogo sana kutoka kwenye kanda?", options: ["Kubadilisha zao", "Kwa ajili ya rangi", "Kutumia nafasi zaidi ya kuhifadhi", "Wafanyakazi hawawezi kushughulikia vipande vidogo sana"], answer: 3, why: "Kanda zinazotekelezeka ni kubwa vya kutosha kuzihudumia." },
      { objective: "O3", q: "Idadi ya miti kutoka kwenye ramani ya droni inapaswa:", options: ["Kukaguliwa kwenye sampuli shambani, na kosa kuripotiwa", "Kuaminiwa bila kukaguliwa", "Kuzidishwa mara mbili", "Kufichwa"], answer: 0, why: "Ukaguzi wa shambani unaonyesha idadi ni sahihi kiasi gani." },
      { objective: "O4", q: "Ramani ya maagizo inasema:", options: ["Droni ipi ya kununua", "Cha kuweka au cha kufanya katika kila kanda", "Hali ya hewa", "Mapato ya mkulima"], answer: 1, why: "Inaongoza wafanyakazi au mashine kanda kwa kanda." },
      { objective: "O4", q: "Kabla ya kuchagua hatua kwa kanda dhaifu, unapaswa:", options: ["Kuinyunyizia", "Kuweka mbolea ya kiwango cha juu kabisa", "Kuthibitisha sababu kwa ukaguzi wa shambani na vipimo vya udongo", "Kuiondoa kwenye ramani"], answer: 2, why: "Hatua lazima irekebishe sababu halisi." },
      { objective: "O4", q: "Kwa kuweka kwa mkono, maagizo yanatolewa vizuri zaidi kama:", options: ["Shapefile tu", "Orodha ya thamani za pikseli", "Jedwali la mahali (coordinates) tu", "Ramani rahisi ya kanda yenye gramu kwa kila shimo au mifuko kwa kila kanda"], answer: 3, why: "Wafanyakazi wanahitaji maagizo rahisi yanayotekelezeka." },
      { objective: "O5", q: "Katika bajeti ya sehemu, pesa zilizookolewa kwenye mbolea zinahesabiwa kama:", options: ["Faida", "Gharama", "Hakuna kitu", "Mapato yaliyopotea"], answer: 0, why: "Akiba iko upande wa faida." },
      { objective: "O5", q: "Kwa nini upige hesabu ya hali ya tahadhari na hali inayotarajiwa?", options: ["Kumchanganya mkulima", "Kwa sababu mavuno na bei hubadilika", "Sheria inataka hivyo", "Kutumia karatasi zaidi"], answer: 1, why: "Kiwango cha juu na cha chini kinaonyesha hatari kwa uaminifu." },
      { objective: "O6", q: "Vipimo gani vinawasaidia wakulima wadogo wengi kuelewa matokeo?", options: ["Kilomita za mraba tu", "Pikseli tu", "Ekari, mifuko na madebe pamoja na hekta", "Namba za kisayansi tu"], answer: 2, why: "Vipimo vinavyojulikana vinafanya matokeo yatumike." },
      { objective: "O6", q: "Kwa nini uandike kile mkulima alichofanya baada ya ushauri wako?", options: ["Kuuza data zao", "Kujaza fomu", "Haina faida", "Ili uchambuzi unaofuata uonyeshe kama kilifanya kazi"], answer: 3, why: "Ufuatiliaji unakamilisha mzunguko na kuboresha ushauri." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      1,
      5,
      8,
      10,
      12,
      13,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo ya uchambuzi na uikague tena.",
    criteria: [
      {
        name: "Usahihi wa ramani",
        objective: "O1",
        notYet: "Usahihi haujatajwa, au ubora haujakaguliwa.",
        meets: "Usahihi wa ramani na jinsi ulivyokaguliwa vimetajwa, na ubora wa picha umekaguliwa kwenye ripoti ya uchakataji.",
        exceeds: "Anatumia vituo vya kukagua na kuripoti kosa lililopimwa."
      },
      {
        name: "Uchaguzi wa kiashiria",
        objective: "O2",
        notYet: "Kiashiria hakijaelezwa sababu, au hakifai zao au kamera.",
        meets: "Kiashiria kinafaa zao, hatua ya ukuaji na kamera, pamoja na sababu fupi.",
        exceeds: "Analinganisha viashiria viwili na kuonyesha kwa nini kimoja kilichaguliwa."
      },
      {
        name: "Kanda na idadi",
        objective: "O3",
        notYet: "Hakuna takwimu za kanda, au idadi hazijakaguliwa.",
        meets: "Eneo na wastani wa kiashiria wa kila kanda, na idadi ya mimea au miti iliyokaguliwa kwenye sampuli shambani.",
        exceeds: "Analinganisha kanda zilezile kwa tarehe mbili."
      },
      {
        name: "Ramani ya maagizo",
        objective: "O4",
        notYet: "Viwango vimebahatishwa au viwango ni vingi mno.",
        meets: "Viwango au kazi mbili hadi nne kwa kanda, kutoka mapendekezo ya eneo, vinavyohusiana na sababu zilizothibitishwa shambani.",
        exceeds: "Imetolewa katika aina ya faili ambayo mashine au wafanyakazi wanaweza kutumia."
      },
      {
        name: "Bajeti ya sehemu",
        objective: "O5",
        notYet: "Hakuna bajeti, au inahesabu vitu visivyobadilika.",
        meets: "Bajeti ya sehemu yenye hali ya tahadhari na hali inayotarajiwa ikitumia bei za eneo hilo.",
        exceeds: "Inataja faida ambazo ni vigumu kuziwekea bei na wakati huduma ya pamoja ingesaidia."
      },
      {
        name: "Matokeo kwa mkulima",
        objective: "O6",
        notYet: "Ni marefu kuliko ukurasa mmoja au yanaanza na maelezo ya kiufundi.",
        meets: "Ukurasa mmoja unaoanza na hatua, kwa lugha rahisi na vipimo vya eneo hilo, ukionyesha uhakika kiasi gani.",
        exceeds: "Yameandaliwa kwa lugha na njia ya mkulima mwenyewe, na ukaguzi wa ufuatiliaji umekubaliwa."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kupata Anafikia au Anazidi katika kila mstari wa rubriki wa uchambuzi",
      "Wanafunzi wanaoripoti kumpa mkulima au shamba kubwa ramani ya maagizo au ripoti ya kanda ndani ya siku 60 (utafiti wa kufuatilia)",
      "Wakulima au mashamba makubwa yanayoripoti kuchukua hatua kutokana na matokeo ya droni na kuandika matokeo yake",
      "Wanafunzi wanaochukua kozi nyingine ya droni au kilimo cha usahihi"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta ndogo (laptop) yenye QGIS ya bure iliyosakinishwa",
      "Data ya droni kutoka shamba halisi, au sampuli ya data ya bure",
      "Viwango vinavyopendekezwa katika eneo hilo kutoka ugani au utafiti, na bei za pembejeo na mazao za eneo hilo",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi, pamoja na muda wa kukamilisha uchambuzi na matokeo kwa mkulima"
    ],
    facilitatorNotes: [
      "Fanyeni jaribio la awali pamoja, kisha fanyeni hatua ya takwimu za kanda moja kwa moja katika QGIS kwa sampuli ya data ya pamoja.",
      "Usitoe viwango vya mbolea au mbegu wewe mwenyewe; leta viwango kutoka ugani au utafiti kwa zao la eneo hilo.",
      "Wakumbushe wanafunzi kwamba maagizo ya kunyunyizia au kusambaza kwa droni yanahitaji vibali vya usafiri wa anga na vya viuatilifu.",
      "Tumia tu data za shamba ambazo mkulima amekubali kushiriki, na ondoa majina katika mifano ya darasani.",
      "Pima uchambuzi kwa rubriki na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
