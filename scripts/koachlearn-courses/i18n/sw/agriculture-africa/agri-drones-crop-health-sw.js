"use strict";

// Koach Learn course (Swahili translation of agriculture-africa/agri-drones-crop-health.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.
// QGIS tool names (Raster Calculator) are kept in English, as in the QGIS menus most learners will see.

const FAO_EO = { name: "FAO GIEWS: Uangalizi wa Dunia kutoka angani (NDVI na viashiria vya uoto)", url: "https://www.fao.org/giews/earthobservation/index.jsp" };
const FAO_FAMEWS = { name: "FAO: app ya simu ya kusaidia mapambano dhidi ya viwavijeshi vamizi (Fall Armyworm) barani Afrika (FAMEWS)", url: "https://www.fao.org/newsroom/detail/FAO-launches-mobile-application-to-support-fight-against-Fall-Armyworm-in-Africa/en" };
const ODM = { name: "OpenDroneMap (programu ya bure, ya chanzo huria, ya kutengeneza ramani kwa droni)", url: "https://www.opendronemap.org/" };
const QGIS = { name: "QGIS (programu ya GIS ya bure, ya chanzo huria)", url: "https://qgis.org/" };

module.exports = {
  id: "agri-drones-crop-health-sw",
  lang: "sw",
  translationOf: "agri-drones-crop-health",
  category: "Agriculture (Africa)",
  name: "Droni kwa Ufuatiliaji wa Kilimo 3: Afya ya Mazao, Wadudu na Uchakataji wa Data",
  skills: "Kusoma ramani ya NDVI ya afya ya mazao, Kutambua mapema dalili za wadudu, magonjwa na mfadhaiko wa mimea, Kuhakiki shambani maeneo yenye matatizo, Kuunganisha picha za droni kuwa ramani, Kutengeneza ramani ya kiashiria katika QGIS, Kuandika ripoti ya hatua za shambani",
  outcome: "kugeuza picha za droni za shamba kuwa ramani ya afya ya mazao, kupata maeneo yenye matatizo, kuyahakiki shambani, na kuandika ripoti fupi ya hatua ambayo mkulima anaweza kuitumia.",
  about: [
    "Hii ni Kozi ya 3 ya mfululizo wa ufuatiliaji kwa droni, kwa maafisa ugani, wataalamu wa kilimo, mameneja wa mashamba na vijana wanaotoa huduma za droni nchini Kenya, Nigeria na kote Afrika. Unapaswa kujua jinsi ya kupiga picha za droni zinazopishana (Kozi ya 2), au kuwa na picha za kufanyia kazi; kuna seti za data za mfano za bure mtandaoni.",
    "Sura ya 1 inakufundisha kusoma ramani za afya ya mazao na kutambua maumbo yanayotokana na matatizo ya mapema ya wadudu, magonjwa, maji na virutubisho kwenye mahindi, mihogo, maharage, chai na kahawa, na jinsi ya kuyahakiki shambani. Sura ya 2 inakufundisha kuunganisha picha kuwa ramani kwa programu ya bure, kutengeneza ramani ya NDVI katika QGIS, na kuandika ripoti inayoleta hatua.",
    "Ramani ya droni haichukui kamwe nafasi ya macho ya mkulima wala uchunguzi wa afisa ugani. Inaonyesha mahali pa kuangalia kwanza, ili muda na pesa chache ziende mahali sahihi. Kila somo linachukua kama dakika tano pamoja na kazi ya mazoezi; jaribio la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Ukitumia ramani ya droni ya shamba halisi au seti ya data ya mfano ya bure: tengeneza ramani ya NDVI au ya rangi, weka alama angalau maeneo matatu yenye matatizo, andika mpango wa kuhakiki shambani (cha kuangalia katika kila eneo), na umwandikie mkulima ripoti ya hatua ya ukurasa mmoja yenye picha ya ramani, kilichopatikana au kinachoshukiwa, hatua inayopendekezwa kwa kila eneo, na nani wa kuwasiliana naye ili kuthibitisha.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Maafisa ugani, wataalamu wa kilimo, mameneja wa mashamba na vijana wanaotoa huduma za droni nchini Kenya, Nigeria na kote Afrika wanaosoma Kozi ya 3 ya mfululizo wa ufuatiliaji kwa droni, wakifanya kazi na mazao kama mahindi, mihogo, maharage, chai na kahawa.",
    startingPoint: "Wanafunzi wanaweza kupiga picha za droni zinazopishana (Kozi ya 2) au wana seti ya data ya mfano. Wachache wameunganisha picha kuwa ramani, wametengeneza ramani ya NDVI katika QGIS, wamesoma maumbo ya ramani kwa wadudu, magonjwa na mfadhaiko, wamehakiki maeneo shambani, au wameandika ripoti ambayo mkulima anaifanyia kazi.",
    gap: "Picha za droni zina manufaa tu zinapogeuka kuwa ramani, maeneo dhaifu yanahakikiwa kwa miguu, na mkulima anapata hatua iliyo wazi ya kufuata. Bila hayo, matatizo yanagunduliwa kwa kuchelewa, matibabu yanabahatishwa na pesa zinapotea. Kugeuza picha kuwa ripoti ya hatua iliyohakikiwa kunapeleka muda na pesa chache mahali sahihi.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi; kila neno la ramani na la GIS linaelezwa",
      "Vifaa: kompyuta inayoweza kuendesha QGIS na OpenDroneMap za bure, na simu yenye GPS kwa ukaguzi shambani",
      "Data: seti ya data ya droni halisi au seti ya mfano ya bure; uchakataji unaweza kuchukua saa moja au zaidi",
      "Ramani ya droni haichukui kamwe nafasi ya macho ya mkulima wala uchunguzi wa mtaalamu; hakuna ushauri wa dawa za kuua wadudu kutoka kwenye ramani",
      "Data na ramani za wakulima zinashirikiwa tu kwa ruhusa yao"
    ],
    prerequisites: "\"Droni kwa Ufuatiliaji wa Kilimo 2: Kurusha Droni, Kupiga Picha na Vihisio\", au seti ya picha za droni zinazopishana za kufanyia kazi."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa ramani ya NDVI au ya rangi ya afya ya mazao", action: "kusoma ufunguo wa ramani na kupata maeneo dhaifu na yenye nguvu", standard: "ukilinganisha tofauti ndani ya shamba na ramani za awali" },
    { id: "O2", condition: "Ukipewa maumbo kwenye ramani ya shamba", action: "kueleza kila umbo linaweza kuashiria nini, kama wadudu, magonjwa, maji, mashine au virutubisho", standard: "ukichukulia kila umbo kama dalili ya kuthibitisha, si uchunguzi kamili" },
    { id: "O3", condition: "Kwa kila eneo lenye tatizo kwenye ramani", action: "kuandika mpango wa kuhakiki shambani na kurekodi unachokipata mahali hapo", standard: "ukiwa na namba ya eneo, mahali (coordinates), ulichokiona, chanzo kinachowezekana, una uhakika kiasi gani na picha" },
    { id: "O4", condition: "Ukipewa seti ya picha za droni zinazopishana", action: "kuziunganisha kuwa orthomosaic kwa programu ya bure na kuikagua kama ina mapengo au ukungu", standard: "picha zikiwa zimepewa jina, zimehifadhiwa nakala na matokeo yamekaguliwa" },
    { id: "O5", condition: "Ukitumia QGIS na orthomosaic ya multispectral", action: "kukokotoa na kupaka rangi ramani ya NDVI ikionyesha mpaka wa shamba na pointi za ukaguzi shambani", standard: "ukitumia fomula (NIR - Red) / (NIR + Red)" },
    { id: "O6", condition: "Baada ya kuhakiki shambani", action: "kuandika ripoti ya hatua za shambani ya ukurasa mmoja kwa ajili ya mkulima", standard: "yenye picha ya ramani, matokeo, hatua inayofuata kwa kila eneo na nani wa kuwasiliana naye, na bila ushauri wa dawa za kuua wadudu kutoka kwenye ramani" }
  ],
  chapters: [
    {
      name: "Sura 1: Kusoma afya ya mazao",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kusoma ramani ya NDVI ya afya ya mazao",
          minutes: 5,
          goal: "Soma ramani ya NDVI ukitumia kipimo chake cha rangi, na upate maeneo dhaifu na yenye nguvu.",
          text: [
            "NDVI (Normalized Difference Vegetation Index, yaani kiashiria cha uoto) inalinganisha mwanga wa karibu na infraredi (NIR) na mwanga mwekundu unaoakisiwa na mimea. Thamani zake ni kuanzia -1 hadi +1. FAO inaeleza kwamba thamani za juu chanya zinaashiria uoto mnene na wenye afya, na thamani za chini au hasi zinaashiria uoto mchache, udongo mtupu au maji.",
            "Kwenye ramani ya NDVI ya droni, kila pikseli (kinukta kidogo cha picha) inapata rangi kutoka kwenye kipimo, mara nyingi nyekundu kwa thamani za chini hadi kijani kwa za juu. Soma ufunguo wa ramani kila wakati: rangi zinalinganishwa ndani ya ramani hiyo tu. Shamba lenye rangi nyekundu kote mwanzoni mwa msimu linaweza kuwa tu na mimea midogo na udongo mtupu.",
            "Tafuta tofauti ndani ya shamba, si rangi peke yake. Sehemu ya chini katika shamba la mahindi lililo sawa kote inafaa kutembelewa. Linganisha na ramani za awali za shamba hilo hilo: sehemu inayokua wiki baada ya wiki ni muhimu zaidi kuliko ile inayobaki ile ile."
          ],
          steps: ["Soma ufunguo: rangi ipi ni ya chini na ipi ni ya juu?", "Andika zao na hatua ya ukuaji wake: mazao machanga yanaonyesha udongo zaidi.", "Tafuta sehemu zinazotofautiana na sehemu nyingine ya shamba.", "Linganisha na ramani ya awali: je, sehemu hiyo ni mpya au inakua?", "Weka alama maeneo ya kutembelea."],
          words: [["NDVI", "kiashiria cha uoto kuanzia -1 hadi +1; juu zaidi kwa kawaida inamaanisha mimea ya kijani iliyo minene na yenye afya zaidi."], ["Ufunguo wa ramani (legend)", "maelezo yanayoonyesha kila rangi kwenye ramani inamaanisha nini."], ["Hatua ya ukuaji", "zao limekua kiasi gani, tangu mche hadi mavuno."]],
          slides: [
            { title: "NDVI kwa sentensi moja", bullets: ["Inalinganisha mwanga wa karibu na infraredi na mwanga mwekundu", "Kuanzia -1 hadi +1", "Juu = kijani mnene, chenye afya; chini = uoto mchache, udongo au maji"] },
            { title: "Soma ufunguo kwanza", bullets: ["Rangi zinalinganishwa ndani ya ramani hiyo", "Mazao machanga yanaonyesha udongo zaidi"] },
            { title: "Tafuta tofauti", bullets: ["Sehemu zinazotofautiana na nyingine", "Sehemu mpya au zinazokua ni muhimu zaidi", "Weka alama maeneo ya kutembelea"] }
          ],
          sources: [FAO_EO],
          tryIt: "Tafuta ramani ya NDVI ya mfano mtandaoni (tafuta ramani ya NDVI ya shamba la mahindi) au tumia yako mwenyewe. Soma ufunguo, weka alama maeneo mawili dhaifu na eneo moja lenye nguvu, na uandike zao linaweza kuwa katika hatua gani ya ukuaji.",
          youCanNow: "kusoma ufunguo wa ramani ya NDVI na kupata maeneo dhaifu na yenye nguvu yanayofaa kutembelewa.",
          quickCheck: [
            { objective: "O1", q: "Thamani ya juu chanya ya NDVI inaashiria nini?", options: ["Udongo mtupu", "Maji", "Droni iliyoharibika", "Uoto mnene na wenye afya"], answer: 3, why: "Thamani za juu chanya za NDVI zinaashiria uoto mnene na wenye afya; thamani za chini zinaashiria uoto mchache, udongo au maji." },
            { objective: "O1", q: "Shamba la mahindi ni la kijani sawa kote isipokuwa sehemu moja ya chini. Unafanya nini?", options: ["Unaweka alama sehemu hiyo ili uitembelee na kuilinganisha na ramani za awali", "Unaipuuza kwa sababu sehemu kubwa ya shamba ni kijani", "Unanyunyizia dawa shamba zima", "Unafuta ramani"], answer: 0, why: "Sehemu ya chini katika shamba lililo sawa kote inafaa kutembelewa, na ramani za awali zinaonyesha kama inakua." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kutambua mapema dalili za wadudu, magonjwa na mfadhaiko",
          minutes: 6,
          goal: "Tambua maumbo kwenye ramani yanayoashiria wadudu, magonjwa, au matatizo ya maji au virutubisho.",
          text: [
            "Matatizo tofauti yanaacha maumbo tofauti kwenye ramani. Sehemu zinazoanza ndogo na kusambaa nje kwa wiki kadhaa zinaweza kuashiria wadudu au magonjwa, kama viwavijeshi vamizi kwenye mahindi au magonjwa ya virusi kwenye mihogo. Matatizo kando ya upande mmoja yanaweza kutoka shamba la jirani, barabara au upepo. Mistari iliyonyooka kwa kawaida inafuata watu au mashine: mstari ulioachwa bila mbolea, bomba la umwagiliaji lililoziba, au hitilafu ya mashine ya kupanda.",
            "Pembe na mabonde ya chini yenye unyevu yanaashiria maji kutuama; sehemu za juu, zenye mchanga au za mteremko zinaashiria upungufu wa maji, hasa kwenye picha za joto (thermal) mchana. Rangi ya njano iliyo sawa kote shambani inaweza kuashiria upungufu wa virutubisho kama naitrojeni, lakini pia ukame.",
            "Umbo ni dalili, si uchunguzi kamili. Kutoka angani wadudu na magonjwa yanafanana, na matibabu yake ni tofauti sana. Viwavijeshi vamizi vinavyoonekana vinaweza kurekodiwa kwa app ya FAMEWS ya FAO mahali inapotumika; thibitisha mdudu au ugonjwa wowote unaoshukiwa kwa afisa ugani au kliniki ya mimea kabla ya kuchukua hatua."
          ],
          words: [["Umbo (pattern)", "sura na msambao wa tatizo kwenye ramani: sehemu, ukingo, mstari, sehemu ya chini."], ["Viwavijeshi vamizi (fall armyworm)", "mdudu kiwavi anayekula mahindi na mazao mengine; alienea kote Afrika kuanzia 2016."], ["Kliniki ya mimea", "mahali ambapo wataalamu waliofunzwa huchunguza matatizo ya mimea yanayoletwa na wakulima."]],
          slides: [
            { title: "Maumbo yanasimulia hadithi", bullets: ["Sehemu zinazosambaa: wadudu au magonjwa?", "Upande mmoja: jirani, barabara au upepo?", "Mistari iliyonyooka: mashine, mbolea au umwagiliaji"] },
            { title: "Maji na virutubisho", bullets: ["Mabonde ya chini yenye unyevu: maji kutuama", "Miteremko ya juu yenye mchanga: upungufu wa maji", "Njano sawa kote: virutubisho au ukame"] },
            { title: "Dalili, si uchunguzi kamili", bullets: ["Kutoka angani wadudu na magonjwa yanafanana", "Matibabu ni tofauti sana", "Thibitisha kwa afisa ugani au kliniki ya mimea"] }
          ],
          sources: [FAO_FAMEWS],
          tryIt: "Chora michoro midogo minne ya shamba: mmoja wenye sehemu inayosambaa, mmoja wenye tatizo kando ya upande mmoja, mmoja wenye mistari, na mmoja wenye pembe ya chini yenye unyevu. Chini ya kila mmoja, andika vyanzo viwili vinavyowezekana.",
          youCanNow: "kutambua maumbo ya kawaida ya matatizo kwenye ramani ya mazao na kuorodhesha vyanzo vinavyowezekana vya kukagua.",
          quickCheck: [
            { objective: "O2", q: "Sehemu inayoanza ndogo na kusambaa nje kwa wiki kadhaa inaweza kuashiria nini?", options: ["Hitilafu ya mashine ya kupanda", "Wadudu au magonjwa", "Barabara", "Mtaro ulioziba tu"], answer: 1, why: "Sehemu zinazosambaa nje kwa wiki kadhaa zinaweza kuashiria wadudu au magonjwa kama viwavijeshi vamizi au virusi vya mihogo." },
            { objective: "O2", q: "Ramani inaonyesha zao dhaifu katika sehemu ya juu yenye mchanga ya shamba mchana wenye joto. Unashuku nini kwanza?", options: ["Maji kutuama", "Mbolea nyingi mno", "Upungufu wa maji", "Mstari wa kupanda ulioachwa"], answer: 2, why: "Sehemu za juu, zenye mchanga au za mteremko mara nyingi zinaonyesha upungufu wa maji, hasa kwenye picha za joto za mchana." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kuhakiki shambani: kukagua maeneo kwa miguu",
          minutes: 5,
          goal: "Tembelea kila eneo lenye tatizo ukiwa na mpango, na urekodi unachokipata.",
          text: [
            "Kuhakiki shambani (ground-truthing) maana yake ni kwenda mahali hasa palipo kwenye ramani na kukagua kilichopo kwa kweli. Weka ramani kwenye simu yako yenye GPS (app nyingi za bure za ramani na za GIS zinaweza kuonyesha ulipo kwenye ramani ya droni), au andika mahali (coordinates) pa kila eneo.",
            "Katika kila eneo, angalia mimea, majani (juu na chini yake), mashina na mizizi, udongo na unyevu, na wadudu. Linganisha na mimea yenye afya mita chache kutoka hapo katika eneo lenye nguvu. Piga picha zilizo wazi na uandike maelezo mafupi.",
            "Rekodi matokeo kwa njia ile ile kila wakati: namba ya eneo, mahali (coordinates), zao na hatua yake, ulichokiona, chanzo kinachowezekana, una uhakika kiasi gani, na namba za picha. Kumbukumbu nzuri zinarahisisha kusoma ramani inayofuata, na zinamsaidia mtaalamu anayethibitisha chanzo."
          ],
          steps: ["Lipe kila eneo namba na uandike mahali (coordinates) pake.", "Tembea hadi hapo ukitumia ramani yenye GPS kwenye simu yako.", "Kagua mimea, majani, mashina, mizizi, udongo, unyevu na wadudu.", "Linganisha na sehemu yenye afya iliyo karibu.", "Rekodi eneo, mahali, ulichokiona, chanzo kinachowezekana, uhakika, namba za picha."],
          words: [["Kuhakiki shambani (ground-truthing)", "kukagua ardhini kile ambacho ramani au picha inaonyesha."], ["Mahali (coordinates)", "namba za latitudo na longitudo zinazotaja mahali hasa."]],
          slides: [
            { title: "Nenda mahali hasa", bullets: ["Ramani yenye GPS kwenye simu yako", "Au andika mahali (coordinates) pa kila eneo"] },
            { title: "Angalia kwa makini", bullets: ["Majani juu na chini, mashina, mizizi", "Udongo na unyevu, wadudu", "Linganisha na sehemu yenye afya iliyo karibu"] },
            { title: "Rekodi kwa njia ile ile kila wakati", bullets: ["Eneo, mahali, zao na hatua yake", "Ulichokiona, chanzo kinachowezekana, uhakika", "Namba za picha"] }
          ],
          tryIt: "Tengeneza fomu ya kuhakiki shambani (kwenye karatasi au kwenye spreadsheet ya simu) yenye safu hizi: eneo, mahali (coordinates), zao na hatua, nilichokiona, chanzo kinachowezekana, uhakika, picha. Jaza mstari mmoja kwa eneo halisi au la mfano.",
          youCanNow: "kupanga na kufanya ziara ya kuhakiki shambani na kurekodi matokeo katika fomu iliyo wazi.",
          quickCheck: [
            { objective: "O3", q: "Ukiwa shambani, unawezaje kupata mahali hasa pa eneo lililo kwenye ramani?", options: ["Kubahatisha kutokana na rangi ya zao", "Kumuuliza jirani", "Kuweka ramani kwenye simu yenye GPS, au kuandika mahali (coordinates) pa eneo hilo", "Kutembea hadi mimea ionekane mibaya"], answer: 2, why: "Simu inayoonyesha ulipo kwenye ramani ya droni, au mahali (coordinates) pa eneo, inakufikisha mahali hasa." },
            { objective: "O3", q: "Unafika eneo la 2 na kukuta mahindi yaliyonyauka. Unarekodi nini?", options: ["\"Mimea mibaya\" tu", "Hakuna; utakumbuka", "Picha bila maelezo", "Namba ya eneo, mahali, hatua ya zao, ulichokiona, chanzo kinachowezekana, una uhakika kiasi gani na namba za picha"], answer: 3, why: "Kurekodi taarifa zile zile kila wakati kunafanya kumbukumbu ziweze kulinganishwa na kunamsaidia mtaalamu kuthibitisha chanzo." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kusoma afya ya mazao",
        questions: [
          { objective: "O1", q: "Ramani ya NDVI ya shamba ni nyekundu kwa sehemu kubwa mwanzoni mwa msimu. Sababu inayowezekana zaidi ni:", options: ["Droni iliharibika", "Mimea midogo na udongo mtupu mwingi", "Kila kitu kimekufa", "Mvua ilinyesha"], answer: 1, why: "Mazao machanga yanafunika ardhi kidogo, kwa hiyo udongo unashusha thamani." },
          { objective: "O1", q: "Ni sehemu ipi unapaswa kuitembelea kwanza?", options: ["Sehemu iliyo sawa na mwezi uliopita", "Eneo la kijani lenye nguvu zaidi", "Sehemu ya chini iliyokua tangu ramani iliyopita", "Ukingo wa shamba wenye nyasi"], answer: 2, why: "Sehemu inayokua inaashiria tatizo linaloendelea na kusambaa." },
          { objective: "O2", q: "Mistari iliyonyooka ya zao dhaifu shambani kwa kawaida inaashiria:", options: ["Mashine, mbolea au mabomba ya umwagiliaji", "Virusi vinavyosambaa kutoka mmea mmoja", "Upepo kutoka upande mmoja", "Hakuna kitu"], answer: 0, why: "Mistari iliyonyooka inafuata jinsi watu na mashine wanavyolima shamba." },
          { objective: "O2", q: "Ramani ya droni inaashiria sana ugonjwa. Kabla ya kunyunyizia dawa, unapaswa:", options: ["Kunyunyizia kemikali kali zaidi", "Kuweka ramani mtandaoni", "Kunyunyizia shamba lote", "Kuthibitisha chanzo kwa afisa ugani au kliniki ya mimea"], answer: 3, why: "Kutoka angani wadudu na magonjwa yanafanana, na yanahitaji matibabu tofauti." },
          { objective: "O3", q: "Kwa nini ulinganishe eneo dhaifu na mimea yenye afya mita chache kutoka hapo?", options: ["Kuona kilicho tofauti", "Kuokoa betri", "Kwa sababu sheria inasema hivyo", "Kupata mtandao bora wa simu"], answer: 0, why: "Kulinganisha upande kwa upande kunaonyesha kasoro ya mimea dhaifu." }
        ]
      }
    },
    {
      name: "Sura 2: Kuchakata data ya droni",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuunganisha picha kuwa ramani",
          minutes: 6,
          goal: "Geuza seti ya picha za droni zinazopishana kuwa ramani moja ya orthomosaic.",
          text: [
            "Programu ya kuunganisha picha inalinganisha vitu vinavyoonekana katika picha zinazopishana, inakokotoa kila picha ilipigwa wapi, na inatengeneza picha moja sahihi kama ramani inayoitwa orthomosaic. Inaweza pia kutengeneza modeli ya mwinuko (urefu wa ardhi na wa zao).",
            "Kuna chaguo za bure. OpenDroneMap ni programu ya bure ya chanzo huria, na sehemu yake ya WebODM inakuwezesha kupakia picha kupitia kivinjari cha wavuti kwenye kompyuta yako mwenyewe. Pia kuna huduma za mtandaoni (cloud) za kulipia na app za kampuni inayotengeneza droni; kagua bei zao za sasa na mahali wanapohifadhi data yako.",
            "Uchakataji unahitaji kompyuta yenye nguvu ya kutosha na muda: picha mia chache zinaweza kuchukua saa moja au zaidi. Nakili picha kutoka kwenye droni hadi folda yenye jina la shamba, kipande cha shamba na tarehe, hifadhi nakala, kisha uchakate. Kagua matokeo: mapengo, sehemu zenye ukungu au mistari iliyopinda inamaanisha upishanaji au picha zilikuwa duni."
          ],
          steps: ["Nakili picha hadi folda yenye jina shamba_kipande_tarehe (kwa mfano Kitale_Block3_2026-11-04).", "Hifadhi nakala ya folda.", "Fungua programu ya kuunganisha picha na uanzishe kazi mpya.", "Ongeza picha na uanze kuchakata.", "Kagua orthomosaic kama ina mapengo, ukungu na mistari iliyopinda.", "Itoe (export) kama GeoTIFF (picha ya ramani yenye mahali ndani yake)."],
          words: [["Orthomosaic", "picha moja kubwa, sahihi kama ramani, iliyounganishwa kutoka picha nyingi zinazopishana."], ["GeoTIFF", "faili la picha linalobeba mahali lilipo duniani, ili programu ya ramani iweze kuliweka mahali sahihi."], ["Modeli ya mwinuko", "ramani ya urefu wa ardhi au wa uso wa zao."]],
          slides: [
            { title: "Picha kuwa ramani", bullets: ["Programu inalinganisha picha zinazopishana", "Inatengeneza orthomosaic moja", "Inaweza pia kutengeneza modeli ya mwinuko"] },
            { title: "Zana za bure na za kulipia", bullets: ["OpenDroneMap / WebODM: bure, chanzo huria", "Huduma za cloud za kulipia na app za kampuni za droni", "Kagua bei na mahali data yako inahifadhiwa"] },
            { title: "Tabia nzuri", bullets: ["Folda yenye jina shamba_kipande_tarehe", "Hifadhi nakala kabla ya kuchakata", "Kagua mapengo, ukungu, mistari iliyopinda", "Toa (export) kama GeoTIFF"] }
          ],
          sources: [ODM],
          tryIt: "Pakua seti ya data ya droni ya mfano ya bure (OpenDroneMap ina viungo vya seti za mfano) au tumia picha zako mwenyewe. Ipe folda jina na uhifadhi nakala, na kama kompyuta yako inaweza, ichakate kuwa orthomosaic. Kama haiwezi, andika kila hatua ambayo ungefuata.",
          youCanNow: "kupanga picha za droni na kuziunganisha kuwa ramani ya orthomosaic kwa programu ya bure.",
          quickCheck: [
            { objective: "O4", q: "Mbali na orthomosaic, programu ya kuunganisha picha inaweza kutengeneza nini kingine?", options: ["Modeli ya mwinuko ya urefu wa ardhi na wa zao", "Lebo ya dawa ya kuua wadudu", "Utabiri wa hali ya hewa", "Kipimo cha udongo"], answer: 0, why: "Programu ya kuunganisha picha inaweza pia kutengeneza modeli ya mwinuko inayoonyesha urefu wa ardhi na wa zao." },
            { objective: "O4", q: "Umetoka kutua na picha 400. Unafanya nini kabla ya kuchakata?", options: ["Unafuta zenye ukungu kwenye droni tu", "Unazinakili hadi folda yenye jina la shamba, kipande na tarehe, na unahifadhi nakala", "Unazichakata moja kwa moja kutoka kadi ya droni", "Unamtumia mkulima kwa barua pepe"], answer: 1, why: "Kuipa folda jina na kuhifadhi nakala ya picha kabla ya kuchakata kunalinda data." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kutengeneza ramani ya NDVI katika QGIS",
          minutes: 6,
          goal: "Kokotoa na upake rangi ramani ya NDVI kutoka orthomosaic ya multispectral katika QGIS.",
          text: [
            "QGIS ni programu ya GIS ya bure, ya chanzo huria, inayotumiwa na serikali, vyuo vikuu na mashirika yasiyo ya kiserikali kote Afrika. Inaweza kufungua GeoTIFF yako na kufanya hesabu kwenye bendi zake.",
            "Kama orthomosaic yako ina bendi ya mwekundu na ya karibu na infraredi, tumia Raster Calculator kukokotoa NDVI = (NIR - Red) / (NIR + Red). Kisha paka rangi matokeo kwa mfululizo wa rangi (kwa mfano nyekundu hadi kijani) na weka kiwango ili tofauti ndani ya shamba zionekane wazi.",
            "Una kamera ya rangi tu? Bado unaweza kutengeneza kiashiria cha takriban cha ukijani kutoka bendi za mwekundu, kijani na buluu, lakini hakiaminiki kama NDVI; kichukulie kama mwongozo tu. Ongeza mpaka wa shamba na pointi zako za kuhakiki shambani kama tabaka, ili ramani ionyeshe maeneo yalipo hasa."
          ],
          steps: ["Fungua QGIS na uongeze GeoTIFF ya orthomosaic yako.", "Kagua bendi ipi ni ya mwekundu na ipi ni ya karibu na infraredi.", "Fungua Raster Calculator na uandike (NIR - Red) / (NIR + Red) ukitumia bendi hizo.", "Paka rangi tabaka jipya kwa mfululizo wa rangi kutoka nyekundu hadi kijani.", "Ongeza mpaka wa shamba na pointi za kuhakiki shambani.", "Toa (export) picha ya ramani kwa ajili ya ripoti yako."],
          words: [["GIS", "geographic information system (mfumo wa taarifa za kijiografia): programu ya kutengeneza na kuchambua ramani."], ["Bendi", "tabaka moja la mwanga katika picha, kama mwekundu, kijani, buluu au karibu na infraredi."], ["Raster", "picha iliyoundwa kwa pikseli, kila moja ikiwa na thamani, kama ramani ya droni."], ["Tabaka (layer)", "seti moja ya data ya ramani, kama mpaka wa shamba au pointi, inayoonyeshwa juu ya nyingine."]],
          slides: [
            { title: "QGIS", bullets: ["Programu ya GIS ya bure, ya chanzo huria", "Inafungua GeoTIFF yako", "Inafanya hesabu kwenye bendi za picha"] },
            { title: "Fomula ya NDVI", bullets: ["NDVI = (NIR - Red) / (NIR + Red)", "Tumia Raster Calculator", "Paka rangi kutoka nyekundu hadi kijani"] },
            { title: "Una kamera ya rangi tu?", bullets: ["Kiashiria cha takriban cha ukijani kutoka bendi za RGB", "Hakiaminiki kama NDVI: ni mwongozo tu"] },
            { title: "Kamilisha ramani", bullets: ["Ongeza mpaka wa shamba na pointi za maeneo", "Toa picha kwa ajili ya ripoti"] }
          ],
          sources: [QGIS, FAO_EO],
          tryIt: "Sakinisha QGIS (bure) na ufungue orthomosaic yako au picha ya multispectral ya mfano. Kokotoa NDVI kwa Raster Calculator, ipake rangi, na uweke alama maeneo matatu kama pointi.",
          youCanNow: "kutengeneza ramani ya NDVI yenye rangi katika QGIS na kuongeza maeneo na mipaka ya shamba juu yake.",
          quickCheck: [
            { objective: "O5", q: "Raster Calculator ya QGIS inaweza kufanya nini?", options: ["Kuunganisha picha", "Kurusha droni", "Kutuma ripoti", "Kufanya hesabu kwenye bendi za picha, kama kukokotoa NDVI"], answer: 3, why: "Raster Calculator inafanya hesabu kwenye bendi, kama (NIR - Red) / (NIR + Red)." },
            { objective: "O5", q: "Ramani yako ya NDVI inaonekana kuwa ya rangi moja kote. Unabadilisha nini?", options: ["Kurusha droni tena usiku", "Kufuta bendi ya karibu na infraredi", "Kuweka kiwango cha mfululizo wa rangi ili tofauti ndani ya shamba zionekane", "Kutumia shamba jingine"], answer: 2, why: "Kupaka rangi kwa mfululizo wa rangi na kuweka kiwango kunafanya tofauti ndani ya shamba zionekane." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kuandika ripoti ya hatua za shambani",
          minutes: 5,
          goal: "Andika ripoti ya ukurasa mmoja inayomwambia mkulima kilichopatikana na cha kufanya baadaye.",
          text: [
            "Ramani peke yake haimsaidii mkulima mwenye shughuli nyingi. Ripoti fupi inaigeuza kuwa hatua. Iwe ukurasa mmoja, kwa maneno rahisi, katika lugha anayopendelea mkulima. Wakulima wengi wataisoma kwenye simu janja ya kawaida, kwa hiyo picha na mistari michache inafaa zaidi kuliko hati ndefu.",
            "Weka: shamba, kipande cha shamba, tarehe na hatua ya zao; picha ya ramani yenye maeneo yaliyopewa namba; kwa kila eneo, ulichokiona shambani, chanzo kinachowezekana na una uhakika kiasi gani; hatua inayofuata (kwa mfano: panda tena mahali palipo wazi, safisha mtaro, omba kliniki ya mimea ithibitishe ugonjwa, kagua bomba la umwagiliaji); na nani wa kuwasiliana naye.",
            "Usipendekeze kamwe dawa ya kuua wadudu wala kipimo chake kutokana na ramani ya droni. Mwelekeze mkulima kwa afisa ugani, agrovet au kliniki ya mimea kwa ushauri wowote wa kemikali, na kwa lebo kwa matumizi salama. Kubalianeni lini droni irushwe tena ili kuona kama hatua ilifanya kazi."
          ],
          steps: ["Kichwa: shamba, kipande, tarehe, zao na hatua yake.", "Picha ya ramani yenye maeneo yaliyopewa namba.", "Kwa kila eneo: ulichokiona, chanzo kinachowezekana, uhakika.", "Hatua inayofuata kwa kila eneo na nani wa kuwasiliana naye.", "Tarehe ya safari inayofuata ya droni ili kukagua matokeo."],
          words: [["Ripoti ya hatua", "ripoti fupi inayosema kilichopatikana na cha kufanya."], ["Agrovet", "duka linalouza pembejeo za kilimo kama mbegu, mbolea na dawa za mifugo, mara nyingi pamoja na ushauri."]],
          slides: [
            { title: "Ramani haitoshi", bullets: ["Ukurasa mmoja, maneno rahisi", "Lugha anayopendelea mkulima", "Picha pamoja na mistari michache"] },
            { title: "Kinachowekwa ndani", bullets: ["Shamba, kipande, tarehe, hatua ya zao", "Ramani yenye maeneo yaliyopewa namba", "Kilichopatikana, chanzo kinachowezekana, uhakika, hatua inayofuata"] },
            { title: "Kuwa salama na mkweli", bullets: ["Hakuna dawa wala kipimo kutokana na ramani", "Mpeleke kwa afisa ugani, agrovet au kliniki ya mimea", "Kubalianeni lini kurusha droni tena"] }
          ],
          tryIt: "Kazi ya mwisho: ukitumia ramani yako na fomu yako ya kuhakiki shambani, mwandikie mkulima ripoti ya hatua ya ukurasa mmoja: kichwa, picha ya ramani yenye angalau maeneo matatu yaliyopewa namba, kilichopatikana na chanzo kinachowezekana kwa kila eneo, hatua inayofuata, watu wa kuwasiliana nao na tarehe ya safari inayofuata ya droni.",
          youCanNow: "kugeuza data ya droni kuwa ripoti ya hatua ya ukurasa mmoja iliyo wazi ambayo mkulima anaweza kuitumia.",
          quickCheck: [
            { objective: "O6", q: "Ripoti ya hatua za shambani inapaswa kuwa ndefu kiasi gani?", options: ["Kurasa kumi", "Ukurasa mmoja", "Ramani tu bila maneno", "Ndefu kadiri inavyowezekana"], answer: 1, why: "Ripoti ya ukurasa mmoja kwa maneno rahisi, yenye ramani na hatua zinazofuata, ndiyo mkulima mwenye shughuli nyingi anaweza kuitumia." },
            { objective: "O6", q: "Ramani yako na ukaguzi shambani vinaashiria ugonjwa katika eneo la 3. Unaandika hatua gani inayofuata?", options: ["Omba kliniki ya mimea au afisa ugani athibitishe ugonjwa", "Nyunyizia dawa kali ya kuvu kwa kipimo mara mbili", "Ng'oa shamba lote", "Subiri mwaka mmoja"], answer: 0, why: "Usipendekeze kamwe dawa wala kipimo kutokana na ramani; mpeleke mkulima kwa mtaalamu athibitishe kwanza." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kuchakata data ya droni",
        questions: [
          { objective: "O4", q: "Orthomosaic ni nini?", options: ["Picha moja tu", "Aina ya droni", "Picha moja sahihi kama ramani iliyounganishwa kutoka picha nyingi", "Mdudu"], answer: 2, why: "Programu ya kuunganisha picha inatengeneza ramani moja kutoka picha zinazopishana." },
          { objective: "O4", q: "Ramani yako iliyounganishwa ina mapengo na mistari iliyopinda. Chanzo kinachowezekana zaidi ni:", options: ["Upishanaji mdogo mno au picha duni", "Betri nyingi mno", "Simu ya mkulima", "Jua kali mno kwenye skrini"], answer: 0, why: "Kuunganisha picha kunahitaji picha nyingi zilizo wazi na zinazopishana." },
          { objective: "O5", q: "Fomula ya NDVI ni ipi?", options: ["(Red + Blue) / 2", "NIR x Red", "Green - Blue", "(NIR - Red) / (NIR + Red)"], answer: 3, why: "NDVI inalinganisha mwanga wa karibu na infraredi na mwanga mwekundu." },
          { objective: "O5", q: "QGIS ni nini?", options: ["Droni ya kulipia", "Programu ya GIS ya bure, ya chanzo huria, ya ramani", "Dawa ya kuua wadudu", "Mtandao wa simu"], answer: 1, why: "QGIS ni programu ya bure inayotumiwa kutengeneza na kuchambua ramani." },
          { objective: "O6", q: "Kuhusu ripoti yako, mkulima anauliza anyunyizie dawa gani katika eneo la 2. Unapaswa:", options: ["Kubahatisha moja kutokana na ramani", "Kumpeleka kwa afisa ugani, agrovet au kliniki ya mimea, na kwa lebo", "Kumwambia anyunyizie mara mbili", "Kunyamaza"], answer: 1, why: "Ushauri wa kemikali unahitaji uchunguzi uliothibitishwa na ushauri wa mtaalamu aliyehitimu." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Droni kwa Ufuatiliaji wa Kilimo 3: Afya ya Mazao, Wadudu na Uchakataji wa Data",
    questions: [
      { objective: "O1", q: "Thamani za NDVI ni kuanzia:", options: ["-100 hadi 0", "-1 hadi +1", "0 hadi 100", "1 hadi 10"], answer: 1, why: "NDVI ni uwiano kati ya -1 na +1." },
      { objective: "O1", q: "Kwenye ramani ya NDVI, kitu cha kwanza kusoma ni:", options: ["Ukubwa wa faili", "Ufunguo wa ramani", "Jina la droni", "Hali ya hewa"], answer: 1, why: "Ufunguo unasema rangi zipi zinamaanisha thamani za chini na za juu." },
      { objective: "O1", q: "Sehemu moja imebaki ile ile katika ramani tatu. Sehemu mpya inasambaa. Ipi ni muhimu zaidi?", options: ["Sehemu ya zamani", "Hakuna kati yao", "Sehemu inayosambaa", "Zote zina uharaka sawa"], answer: 2, why: "Sehemu inayosambaa inaashiria tatizo linaloendelea." },
      { objective: "O2", q: "Zao dhaifu kando ya upande mmoja karibu na shamba la jirani linaweza kutokana na:", options: ["Upishanaji mwingi mno", "Ufunguo wa ramani", "Betri ya droni", "Wadudu au dawa inayopeperushwa kutoka upande huo"], answer: 3, why: "Maumbo ya ukingoni mara nyingi yanaashiria kitu kinachotoka nje ya shamba." },
      { objective: "O2", q: "Mabonde ya chini yenye unyevu na zao dhaifu yanaonyesha zaidi:", options: ["Maji kutuama", "Jua kali mno", "Mavuno mazuri", "Kamera iliyoharibika"], answer: 0, why: "Maji yanakusanyika kwenye mabonde na kudhuru mizizi." },
      { objective: "O2", q: "Umbo kwenye ramani ya droni ni:", options: ["Uchunguzi kamili wa mwisho", "Dalili inayohitaji kukaguliwa shambani", "Daima ni wadudu", "Daima ni ugonjwa"], answer: 1, why: "Maumbo yanaonyesha mahali pa kuangalia; ukaguzi shambani unapata chanzo." },
      { objective: "O2", q: "App ya FAMEWS ya FAO ilitengenezwa kurekodi:", options: ["Kiasi cha mvua", "Bei za soko", "Viwavijeshi vamizi vinavyoonekana", "Safari za droni"], answer: 2, why: "FAMEWS ni Mfumo wa FAO wa Ufuatiliaji na Tahadhari ya Mapema wa Viwavijeshi Vamizi." },
      { objective: "O3", q: "Kuhakiki shambani (ground-truthing) maana yake ni:", options: ["Kurusha droni chini zaidi", "Kununua programu mpya", "Kusafisha lenzi", "Kukagua ardhini kile ambacho ramani inaonyesha"], answer: 3, why: "Unatembelea mahali hapo kuona kilichopo kwa kweli." },
      { objective: "O3", q: "Wakati wa ukaguzi shambani unapaswa kuangalia:", options: ["Majani juu na chini, mashina, mizizi, udongo na wadudu", "Juu ya jani moja tu", "Anga tu", "Droni tu"], answer: 0, why: "Ukaguzi kamili unapata wadudu, magonjwa na matatizo ya udongo." },
      { objective: "O3", q: "Kwa nini urekodi matokeo kwa njia ile ile kila wakati?", options: ["Droni inalazimisha hivyo", "Inafanya kumbukumbu ziweze kulinganishwa na inawasaidia wataalamu", "Kupitisha muda", "Inafanya picha ziwe wazi zaidi"], answer: 1, why: "Kumbukumbu zinazofanana zinasaidia kulinganisha na kuthibitisha vyanzo." },
      { objective: "O3", q: "Mahali (coordinates) ni:", options: ["Rangi kwenye ramani", "Kasi ya droni", "Namba za latitudo na longitudo za mahali hasa", "Aina ya zao"], answer: 2, why: "Zinakuwezesha kulipata tena eneo hilo hasa." },
      { objective: "O4", q: "OpenDroneMap ni:", options: ["Chapa ya droni", "Dawa ya kuua wadudu", "Setilaiti", "Programu ya bure, ya chanzo huria, ya kuunganisha picha za droni"], answer: 3, why: "OpenDroneMap na WebODM zinageuza picha kuwa ramani bure." },
      { objective: "O4", q: "Kabla ya kuchakata picha unapaswa:", options: ["Kuipa folda jina na kuhifadhi nakala", "Kufuta nusu ya picha", "Kubadilisha jina la kila picha kwa mkono", "Kuzima kompyuta"], answer: 0, why: "Jina zuri na nakala ya akiba vinazuia data kupotea." },
      { objective: "O5", q: "GeoTIFF ni:", options: ["Aina ya video", "Picha inayobeba mahali ilipo duniani", "Kipuri cha droni", "Ujumbe mfupi wa simu"], answer: 1, why: "Programu ya ramani inatumia mahali kulikomo ndani yake kuiweka mahali sahihi." },
      { objective: "O5", q: "Katika QGIS, NDVI inakokotolewa kwa:", options: ["Zana ya kuchapisha", "Kitufe cha barua pepe", "Raster Calculator", "Kidhibiti cha sauti"], answer: 2, why: "Raster Calculator inafanya hesabu kwenye bendi za picha." },
      { objective: "O5", q: "Ukiwa na kamera ya rangi tu, kiashiria cha ukijani ni:", options: ["Sawa kabisa na NDVI", "Hakiwezekani", "Bora kuliko NDVI", "Mwongozo wa takriban, usioaminika kama NDVI"], answer: 3, why: "Viashiria vya RGB havina mwanga wa karibu na infraredi, kwa hiyo ni mwongozo wa takriban tu." },
      { objective: "O5", q: "Tabaka (layer) katika GIS ni:", options: ["Seti moja ya data ya ramani inayoonyeshwa juu ya nyingine", "Betri ya droni", "Ugonjwa wa zao", "Hati ya kisheria"], answer: 0, why: "Mipaka, pointi na picha kila moja ni tabaka." },
      { objective: "O6", q: "Ripoti nzuri ya hatua za shambani ni:", options: ["Kurasa ishirini za namba", "Ukurasa mmoja, maneno rahisi, yenye ramani na hatua zinazofuata", "Picha ghafi tu", "Fomula ya NDVI tu"], answer: 1, why: "Wakulima wenye shughuli nyingi wanahitaji mpango mfupi ulio wazi." },
      { objective: "O6", q: "Kipi HAKIPASWI kuwa katika ripoti yako?", options: ["Tarehe na hatua ya zao", "Maeneo yaliyopewa namba", "Dawa ya kuua wadudu na kipimo chake vilivyochaguliwa kutokana na ramani peke yake", "Nani wa kuwasiliana naye"], answer: 2, why: "Ushauri wa kemikali unahitaji uchunguzi uliothibitishwa kutoka chanzo chenye sifa." },
      { objective: "O6", q: "Kwa nini mkubaliane tarehe ya safari inayofuata ya droni?", options: ["Kumaliza betri", "Kwa sababu sheria inataka kila wiki", "Kuuza safari zaidi", "Kuona kama hatua ilifanya kazi"], answer: 3, why: "Ramani ya ufuatiliaji inaonyesha kama tatizo limetatuliwa." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [0, 1, 3, 5, 7, 8, 11, 14, 17, 18]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo ya kazi na uikague tena.",
    criteria: [
      { name: "Ramani ya afya ya mazao", objective: "O5", notYet: "Hakuna ramani, au haina ufunguo wala mpaka.", meets: "Ramani ya NDVI au ya rangi yenye ufunguo, kiwango cha rangi kinachoonyesha tofauti, na mpaka wa shamba.", exceeds: "Inataja fomula ya NDVI au kiashiria kilichotumika na mipaka yake." },
      { name: "Maeneo yenye matatizo", objective: "O1", notYet: "Chini ya maeneo matatu, au maeneo yamechaguliwa kwa rangi peke yake.", meets: "Angalau maeneo matatu yenye matatizo yaliyopewa namba, kutokana na tofauti ndani ya shamba.", exceeds: "Inalinganisha maeneo na ramani ya awali ya shamba hilo hilo." },
      { name: "Mpango wa kuhakiki shambani", objective: "O3", notYet: "Hakuna mpango, au \"nenda ukaangalie\" tu.", meets: "Kwa kila eneo, cha kuangalia, pamoja na mahali (coordinates) na jinsi matokeo yatakavyorekodiwa.", exceeds: "Inataja vyanzo vinavyowezekana vya kukagua katika kila eneo kutokana na umbo lake kwenye ramani." },
      { name: "Ripoti ya hatua", objective: "O6", notYet: "Ndefu kuliko ukurasa mmoja, au haina hatua zinazofuata.", meets: "Ukurasa mmoja wenye ramani, matokeo, chanzo kinachowezekana, uhakika, hatua inayofuata kwa kila eneo na nani wa kuwasiliana naye.", exceeds: "Imeandikwa katika lugha ya mkulima na inakubaliana lini kurusha droni tena." },
      { name: "Ushauri salama", objective: "O2", notYet: "Inapendekeza dawa ya kuua wadudu au kipimo kutokana na ramani.", meets: "Inachukulia maumbo kama dalili na inapeleka maswali ya kemikali kwa afisa ugani, agrovet au kliniki ya mimea.", exceeds: "Inamweleza mkulima kwa nini umbo hilo linahitaji kuthibitishwa." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kupata Anafikia au Anazidi katika kila mstari wa rubriki",
      "Wanafunzi wanaoripoti kumpa mkulima ripoti ya hatua za shambani ndani ya siku 60 (utafiti wa kufuatilia)",
      "Wakulima wanaoripoti kuchukua hatua kutokana na ripoti na kushauriana na mtaalamu kabla ya kunyunyizia dawa",
      "Wanafunzi wanaoendelea na Kozi ya 4 ya mfululizo wa droni"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta yenye QGIS na OpenDroneMap (WebODM) za bure zilizosakinishwa",
      "Seti ya data ya droni kutoka shamba halisi, au seti ya mfano ya bure",
      "Simu yenye GPS na app ya ramani kwa ukaguzi shambani",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi, pamoja na muda wa kuchakata na wa kuandika ripoti"
    ],
    facilitatorNotes: [
      "Fanyeni jaribio la awali pamoja, kisha chakata seti moja ya data ya mfano ya pamoja kabla ya darasa, kwa sababu kuunganisha picha kunaweza kuchukua saa moja au zaidi.",
      "Fanya hatua ya NDVI moja kwa moja katika QGIS ili wanafunzi waone Raster Calculator na mfululizo wa rangi.",
      "Ikiwezekana, tembeeni shamba halisi ili mhakiki maeneo mawili pamoja.",
      "Usiwaruhusu kamwe wanafunzi kupendekeza dawa ya kuua wadudu au kipimo kutokana na ramani; mlete afisa ugani au kliniki ya mimea kwa uchunguzi.",
      "Pima ripoti kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
