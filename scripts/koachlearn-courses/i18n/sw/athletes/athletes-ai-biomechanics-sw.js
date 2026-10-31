"use strict";

// Koach Learn course (Swahili translation of athletes/athletes-ai-biomechanics.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.
// General education only: technique and injury questions go to the coach, athletic trainer, physical therapist or doctor.

module.exports = {
  id: "athletes-ai-biomechanics-sw",
  lang: "sw",
  translationOf: "athletes-ai-biomechanics",
  category: "Athletes",
  name: "Biomekaniki kwa AI",
  skills: "Kueleza maneno ya msingi ya biomekaniki, Kurekodi mwendo kwa ajili ya uchambuzi, Kugawa ujuzi katika hatua, Kutumia zana za kukadiria mkao na kutazama picha moja moja, Kulinganisha mbinu ya kabla na baada pamoja na kocha wako",
  outcome: "kurekodi mwendo mmoja wa mchezo kutoka pembe sahihi, kuugawa katika hatua, kutazama video picha moja moja (na, ukipenda, zana ya bure ya kukadiria mkao) ili kueleza jambo moja la mbinu, na kuandaa ulinganisho wa kabla na baada wa kupitia pamoja na kocha wako.",
  about: [
    "Biomekaniki ni somo la jinsi mwili unavyosogea. Kozi hii ni ya wanamichezo na makocha wanaotaka kuelewa mbinu vizuri zaidi kwa kutumia kamera ya simu na zana za AI, katika michezo kama kukimbia mbio fupi, kuruka, kurusha, kupiga mpira golini, kupiga kwa bat au raketi, na kupiga teke.",
    "Utajifunza maneno machache muhimu, kurekodi mwendo vizuri, kuugawa katika hatua, na kutumia mwendo wa polepole (slow motion), kutazama picha moja moja na zana za AI za mkao ili uone kinachotokea. Kisha utalinganisha kabla na baada pamoja na kocha wako.",
    "Haya ni mafunzo ya jumla. Mabadiliko ya mbinu yanapaswa kutoka kwa kocha wako, na maswali kuhusu maumivu, jeraha au kurudi mchezoni yaende kwa mtaalamu wa majeraha ya michezo (athletic trainer), mtaalamu wa tiba ya viungo au daktari. Kila somo linachukua kama dakika tano na lina kazi ya \"Jaribu sasa\". Jaribio la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Chagua mwendo mmoja wa mchezo wako. Urekodi kutoka ubavuni na kutoka mbele, ugawe katika hatua, tazama picha moja moja ili ueleze jambo moja la mbinu kwa picha za skrini, kubaliana na kocha wako juu ya agizo fupi moja, lifanyie mazoezi, na urekodi tena baada ya wiki mbili ili kulinganisha kabla na baada bega kwa bega.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wanamichezo na makocha wa michezo kama mbio fupi, kuruka, kurusha, kupiga mpira golini, kupiga kwa bat au raketi, na kupiga teke, wanaotaka kuona mbinu kwa uwazi zaidi kwa kutumia kamera ya simu na zana za bure za AI.",
    startingPoint: "Wanaweza kurekodi video kwa simu na kuitazama tena. Wengi hawajawahi kurekodi kwa ajili ya uchambuzi, kugawa ujuzi katika hatua, au kutumia zana ya kukadiria mkao.",
    gap: "Mbinu ni ngumu kuiona kwa kasi kamili, na video iliyorekodiwa vibaya au namba za programu zinazoaminiwa kupita kiasi huleta hitimisho lisilo sahihi. Wanafunzi wanahitaji kurekodi vizuri, kueleza jambo moja kwa ushahidi na kukagua mabadiliko pamoja na kocha wao, ili muda wa mazoezi uende kwenye marekebisho sahihi.",
    constraints: [
      "Maneno rahisi; maneno machache ya kitaalamu yanaelezwa yanapotumika mara ya kwanza",
      "Vifaa: simu yenye slow motion; programu ya bure ya mkao si lazima",
      "Muda: kama dakika tano kwa kila somo pamoja na kurekodi wakati wa mazoezi",
      "Ruhusa inahitajika kabla ya kuwarekodi wachezaji wenzako au watoto, na programu za mkao zinahitaji ukaguzi wa faragha",
      "Mafunzo ya jumla tu: mabadiliko ya mbinu yanatoka kwa kocha, na maumivu au jeraha yanaenda kwa athletic trainer, mtaalamu wa tiba ya viungo au daktari"
    ],
    prerequisites: "Hakuna. Wanafunzi ambao hawajawahi kutumia wasaidizi wa AI wanaweza kuanza na kozi ya utangulizi ya AI."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukiwa na mwendo kutoka mchezo wako mwenyewe", action: "kueleza maneno ya msingi ya biomekaniki kama mnyororo wa nguvu, upeo wa mwendo na kitovu cha uzito", standard: "ukitoa mfano sahihi kwa kila neno" },
    { id: "O2", condition: "Ukitumia simu wakati wa mazoezi", action: "kurekodi mwendo kutoka ubavuni na kutoka mbele, kwa sehemu za kamera zilizowekwa alama na slow motion", standard: "kwa angalau marudio matatu kwa kila upande na ruhusa ya kila anayerekodiwa" },
    { id: "O3", condition: "Ukiwa na mwendo wako uliorekodiwa", action: "kugawa ujuzi katika hatua na kuchukua picha muhimu yenye lebo kwa kila hatua", standard: "hatua zikiwa zimethibitishwa na kocha wako" },
    { id: "O4", condition: "Ukiwa na zana ya kukadiria mkao au matokeo yake", action: "kueleza kile ambacho ukadiriaji wa mkao unaonyesha na kutaja vitu vinavyoweza kuufanya ukosee", standard: "ukichukulia pembe zake kama makadirio, si vipimo vya maabara" },
    { id: "O5", condition: "Ukiwa na picha zako muhimu", action: "kueleza jambo moja la mbinu kwa maneno yasiyohukumu pamoja na picha za skrini na kuligeuza kuwa swali kwa kocha wako", standard: "ukifanyia kazi jambo moja tu kwa wakati mmoja" },
    { id: "O6", condition: "Baada ya kufanyia mazoezi agizo la kocha kwa takriban wiki mbili", action: "kuandaa ulinganisho wa kabla na baada bega kwa bega, uliorekodiwa kwa njia ile ile", standard: "ukisimama na kutafuta msaada kama mabadiliko yanaleta maumivu" }
  ],
  chapters: [
    {
      name: "Sura 1: Kuona mwendo",
      lessons: [
        {
          objectives: ["O1"],
          title: "Biomekaniki kwa maneno rahisi",
          minutes: 5,
          goal: "Eleza maneno matano ya msingi ya biomekaniki kwa mfano kutoka mchezo wako.",
          text: [
            "Biomekaniki inaangalia jinsi nguvu na mikao ya mwili inavyoleta mwendo. Makocha huitumia kufanya mbinu iwe bora zaidi na kupunguza hatari ya kuumia.",
            "Maneno matano yenye msaada: Pembe ya kiungo (pembe kwenye goti, nyonga au kiwiko). Upeo wa mwendo (umbali ambao kiungo kinasogea). Kitovu cha uzito (sehemu ya mwili wako inayoshika usawa). Mnyororo wa nguvu (jinsi nguvu inavyopita kutoka ardhini kupitia miguu, nyonga, kiwiliwili na mikono). Nguvu ya mrejesho wa ardhi (msukumo ambao ardhi inakurudishia unapoisukuma).",
            "Mfano: katika kurusha mpira huku ukiruka (jump shot), nguvu inaanzia miguuni, inapita nyongani na kiwiliwilini, na inamalizikia kwenye mkono na kifundo cha mkono. Huo ndio mnyororo wa nguvu. Msaidizi wa AI anaweza kueleza neno lolote kwa mfano kutoka mchezo wako."
          ],
          words: [["Biomekaniki", "somo la jinsi nguvu na mikao ya mwili inavyoleta mwendo."], ["Mnyororo wa nguvu (kinetic chain)", "jinsi nguvu inavyopita kutoka sehemu moja ya mwili hadi nyingine, kama miguu hadi nyonga hadi mikono."], ["Kitovu cha uzito (center of mass)", "sehemu ya mwili wako inayoshika usawa."]],
          slides: [
            { title: "Biomekaniki", bullets: ["Jinsi nguvu na mikao inavyoleta mwendo", "Mbinu bora zaidi", "Hatari ndogo ya kuumia"] },
            { title: "Maneno matano muhimu", bullets: ["Pembe ya kiungo, upeo wa mwendo", "Kitovu cha uzito", "Mnyororo wa nguvu, nguvu ya mrejesho wa ardhi"] },
            { title: "Mfano wa jump shot", bullets: ["Miguu -> nyonga -> kiwiliwili -> mkono -> kifundo", "Huo ndio mnyororo wa nguvu"] }
          ],
          tryIt: "Chagua mwendo mmoja wa mchezo wako. Mwombe msaidizi wa AI akueleze mnyororo wa nguvu ndani yake kwa maneno rahisi. Uandike kwa maneno yako mwenyewe katika sentensi tatu.",
          youCanNow: "kueleza maneno ya msingi ya biomekaniki kwa mfano kutoka mchezo wako.",
          quickCheck: [
            { objective: "O1", q: "Upeo wa mwendo unaeleza nini?", options: ["Umbali ambao kiungo kinasogea", "Kasi unayokimbia", "Uzito wako", "Muda unaofanya mazoezi"], answer: 0, why: "Upeo wa mwendo ni umbali ambao kiungo kinaweza kusogea." },
            { objective: "O1", q: "Unataka kueleza mnyororo wa nguvu katika jump shot yako. Utaeleza nini?", options: ["Kukunja kifundo cha mkono tu", "Jinsi nguvu inavyopita kutoka miguuni juu kupitia mwili hadi kwenye mpira", "Rangi ya mpira", "Kelele za mashabiki"], answer: 1, why: "Mnyororo wa nguvu ni jinsi nguvu inavyopita kutoka sehemu moja ya mwili hadi nyingine." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kurekodi mwendo kwa ajili ya uchambuzi",
          minutes: 5,
          goal: "Rekodi mwendo kutoka pembe sahihi ili uweze kuchambuliwa.",
          text: [
            "Uchambuzi unahitaji video nzuri. Rekodi kutoka ubavuni (kuona pembe za viungo mbele na nyuma) na kutoka mbele au nyuma (kuona magoti yakiingia ndani, nyonga ikishuka au mikono ikivukana). Weka kamera kama usawa wa nyonga, bila kutikisika, na mbali kiasi cha kuona mwili wote.",
            "Tumia slow motion ya simu yako na mwanga mzuri. Vaa nguo zinazoonyesha umbo la mwili wako, na weka alama za utepe sakafuni ili urekodi kutoka sehemu ile ile wakati ujao.",
            "Rekodi marudio kadhaa, si moja tu, na urekodi ukiwa umeshapasha mwili joto. Pata ruhusa kabla ya kuwarekodi wengine, na ufuate sheria za timu yako."
          ],
          steps: ["Weka simu usawa wa nyonga kwenye tripodi au kisimamo.", "Rekodi kutoka ubavuni.", "Rekodi kutoka mbele au nyuma.", "Tumia slow motion na mwanga mzuri.", "Weka alama sehemu ya kamera na ya mwanamichezo kwa wakati ujao.", "Rekodi marudio matatu hadi matano."],
          words: [["Mwonekano wa ubavuni (sagittal view)", "kuona kutoka upande, kunaonyesha mwendo wa mbele na nyuma."], ["Mwonekano wa mbele (frontal view)", "kuona kutoka mbele au nyuma, kunaonyesha mwendo wa upande hadi upande."]],
          slides: [
            { title: "Pembe mbili", bullets: ["Ubavuni: pembe za viungo", "Mbele au nyuma: magoti, nyonga, mikono"] },
            { title: "Kuandaa kamera", bullets: ["Usawa wa nyonga, bila kutikisika", "Mwili wote uonekane", "Slow motion, mwanga mzuri"] },
            { title: "Inayoweza kurudiwa", bullets: ["Weka alama sehemu ya kamera na ya mwanamichezo", "Marudio matatu hadi matano baada ya kupasha joto"] }
          ],
          tryIt: "Rekodi mwendo mmoja kutoka ubavuni na kutoka mbele, marudio matatu kila upande, simu ikiwa usawa wa nyonga na slow motion ikiwa imewashwa. Weka alama kwenye sehemu hizo.",
          youCanNow: "kurekodi mwendo vizuri kwa ajili ya uchambuzi wa biomekaniki.",
          quickCheck: [
            { objective: "O2", q: "Mwonekano wa ubavuni unaonyesha nini vizuri zaidi?", options: ["Magoti yakiingia ndani", "Watazamaji", "Mwendo wa mbele na nyuma na pembe za viungo", "Chapa ya viatu vyako"], answer: 2, why: "Mwonekano wa ubavuni unaonyesha wazi mwendo wa mbele na nyuma na pembe za viungo." },
            { objective: "O2", q: "Unataka kurekodi mwanzo wa mbio wa mchezaji mwenzako. Unafanya nini kwanza?", options: ["Rekodi bila kuuliza", "Weka mtandaoni mara moja", "Kuza picha (zoom) ukiwa mbali", "Muombe ruhusa"], answer: 3, why: "Daima pata ruhusa kabla ya kuwarekodi watu wengine." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kugawa ujuzi katika hatua",
          minutes: 5,
          goal: "Gawa mwendo wako katika hatua na upate mikao muhimu.",
          text: [
            "Ujuzi mwingi wa michezo una hatua. Kurusha: kujiandaa, hatua ya mguu, kurudisha mkono nyuma, kuongeza kasi, kuachia, kumalizia. Kuanza mbio: kukaa tayari, kusukuma, kusonga mbele kwa nguvu, kunyooka. Kuruka: kukaribia, kukanyaga, kuruka juu, kuwa hewani, kutua.",
            "Kwa kila hatua, kuna mikao muhimu ambayo makocha huiangalia: mahali mguu unapotua, pembe ya goti wakati wa kuruka juu, pembe ya kiwiliwili wakati wa kuachia. Kocha wako anaweza kukuambia ipi ni muhimu zaidi kwako.",
            "Tazama picha moja moja katika programu ya video ya simu yako au zana ya bure ya video. Simamisha kwenye picha muhimu ya kila hatua na upige picha ya skrini. Mwombe msaidizi wa AI aorodheshe hatua za kawaida za ujuzi wako, kisha zithibitishe na kocha wako."
          ],
          steps: ["Muulize AI hatua za kawaida za ujuzi wako.", "Thibitisha hatua hizo na kocha wako.", "Pitia video yako picha moja moja.", "Piga picha ya skrini ya picha muhimu ya kila hatua.", "Weka lebo kwenye kila picha ya skrini."],
          words: [["Hatua (phase)", "sehemu moja ya mwendo, kama kujiandaa au kuachia."], ["Mkao muhimu", "mkao muhimu wa mwili katika wakati fulani."], ["Picha moja moja (frame by frame)", "kupitia video picha moja baada ya nyingine."]],
          slides: [
            { title: "Ujuzi una hatua", bullets: ["Kurusha: kujiandaa hadi kumalizia", "Kuanza mbio: kukaa tayari hadi kunyooka", "Kuruka: kukaribia hadi kutua"] },
            { title: "Mikao muhimu", bullets: ["Mguu unapotua", "Pembe ya goti wakati wa kuruka juu", "Pembe ya kiwiliwili wakati wa kuachia"] },
            { title: "Picha moja moja", bullets: ["Simamisha kwenye kila picha muhimu", "Piga picha ya skrini na uweke lebo", "Thibitisha hatua na kocha wako"] }
          ],
          tryIt: "Gawa mwendo wako uliorekodiwa katika hatua. Piga picha ya skrini na uweke lebo kwenye picha moja muhimu kwa kila hatua.",
          youCanNow: "kugawa ujuzi katika hatua na kunasa mikao yake muhimu.",
          quickCheck: [
            { objective: "O3", q: "Picha muhimu (key frame) ni nini?", options: ["Picha moja inayoonyesha mkao muhimu katika hatua", "Sekunde ya kwanza ya video yoyote", "Kichujio cha video", "Mpango wa mazoezi"], answer: 0, why: "Picha muhimu inanasa mkao muhimu wa hatua." },
            { objective: "O3", q: "AI inapendekeza hatua nne za kurusha kwako. Unafanya nini baadaye?", options: ["Zitumie bila kukagua", "Zithibitishe na kocha wako", "Futa video yako", "Ongeza hatua kumi zaidi"], answer: 1, why: "Kocha wako anathibitisha hatua na mikao muhimu ya mchezo wako." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kuona mwendo",
        questions: [
          { objective: "O1", q: "Mnyororo wa nguvu ni nini?", options: ["Kipuri cha baiskeli", "Mashine ya kunyanyua uzito", "Jinsi nguvu inavyopita kutoka sehemu moja ya mwili hadi nyingine", "Aina ya kiatu"], answer: 2, why: "Nguvu inapita miguu hadi nyonga hadi kiwiliwili hadi mikono." },
          { objective: "O2", q: "Mwonekano upi wa kamera unaonyesha vizuri magoti yakiingia ndani?", options: ["Kutoka mbele au nyuma", "Ubavuni tu", "Kutoka juu tu", "Picha ya karibu ya uso"], answer: 0, why: "Mwendo wa upande hadi upande unaonekana vizuri kutoka mbele au nyuma." },
          { objective: "O2", q: "Kamera iwe katika urefu gani?", options: ["Sakafuni", "Juu ya kichwa chako", "Popote", "Kama usawa wa nyonga"], answer: 3, why: "Usawa wa nyonga unapunguza upotoshaji wa umbo la mwili." },
          { objective: "O2", q: "Kwa nini urekodi marudio kadhaa?", options: ["Kujaza nafasi ya kuhifadhi", "Rudio moja huenda lisiwe la kawaida", "Ni sheria", "Kuifanya video iwe ndefu"], answer: 1, why: "Marudio kadhaa yanaonyesha mtindo wako halisi." },
          { objective: "O3", q: "Nani akuthibitishie hatua na mikao muhimu?", options: ["Video yoyote ya mtandaoni", "Kocha wako", "Shabiki", "Hakuna"], answer: 1, why: "Kocha wako anajua kilicho muhimu kwa mbinu yako." }
        ]
      }
    },
    {
      name: "Sura 2: Zana za AI na mabadiliko ya kweli",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kukadiria mkao: AI inayopata viungo vyako",
          minutes: 5,
          goal: "Eleza kile ambacho ukadiriaji wa mkao unafanya na mipaka yake.",
          text: [
            "Ukadiriaji wa mkao (pose estimation) ni AI inayopata sehemu za mwili, kama mabega, viwiko, nyonga, magoti na vifundo vya miguu, katika picha au video na kuziunganisha kuwa mchoro wa vijiti. Programu nyingine kisha hukadiria pembe za viungo.",
            "Zana hizi zinasaidia kuona mikao na kulinganisha marudio, lakini zinakosea: nguo zilizolegea, mwendo wa kasi, ukungu, mwanga hafifu, watu wengine kwenye picha au sehemu ya mwili iliyofichwa nyuma ya nyingine vinaweza kuzichanganya. Pembe kutoka video ya 2D ya simu ni makadirio, si vipimo vya maabara.",
            "Ukijaribu programu ya mkao, kagua sera yake ya faragha, kwa sababu video ya mwili wako ni taarifa binafsi. Kwa watoto, mzazi anapaswa kukubali. Daima linganisha mchoro wa vijiti na video halisi kabla ya kuamini namba yoyote."
          ],
          steps: ["Chagua kipande cha video chenye mwanga mzuri na kilicho wazi.", "Ukitumia programu ya mkao, kagua sera yake ya faragha kwanza.", "Endesha kipande hicho na uangalie mchoro wa vijiti.", "Kagua kama unalingana na mwili halisi katika kila picha muhimu.", "Chukulia pembe kama makadirio."],
          words: [["Ukadiriaji wa mkao (pose estimation)", "AI inayopata sehemu za mwili kwenye video na kuchora mchoro wa vijiti."], ["Video ya 2D", "video bapa kutoka kamera moja; haiwezi kupima kina kikamilifu."]],
          slides: [
            { title: "Ukadiriaji wa mkao", bullets: ["AI inapata mabega, nyonga, magoti, vifundo vya miguu", "Inachora mchoro wa vijiti", "Programu nyingine hukadiria pembe"] },
            { title: "Mipaka", bullets: ["Ukungu, nguo zilizolegea, mwanga hafifu", "Sehemu za mwili zilizofichwa", "Pembe za 2D ni makadirio"] },
            { title: "Itumie kwa usalama", bullets: ["Kagua sera ya faragha", "Watoto: mzazi akubali", "Linganisha na video halisi"] }
          ],
          tryIt: "Mwombe msaidizi wa AI akueleze jinsi ukadiriaji wa mkao unavyofanya kazi na njia tatu unazoweza kukosea. Kisha angalia picha zako muhimu na uandike mahali ambapo zana ya mkao ingeweza kupata shida.",
          youCanNow: "kueleza kile ambacho ukadiriaji wa mkao unafanya na kwa nini namba zake zinahitaji kukaguliwa.",
          quickCheck: [
            { objective: "O4", q: "Zana ya kukadiria mkao inachora nini kwenye video?", options: ["Grafu ya mapigo ya moyo", "Ramani ya hali ya hewa", "Mchoro wa vijiti kwenye viungo vya mwili", "Alama za mchezo"], answer: 2, why: "Ukadiriaji wa mkao unapata sehemu za mwili na kuziunganisha kama mchoro wa vijiti." },
            { objective: "O4", q: "Programu ya mkao inasema pembe ya goti lako ni nyuzi 143 katika kipande cha video chenye ukungu. Unafanya nini?", options: ["Iamini kama ilivyo", "Ishiriki kama matokeo ya maabara", "Badilisha mbinu yako mara moja", "Ichukulie kama makadirio na ukague picha mwenyewe"], answer: 3, why: "Ukungu na video ya simu moja hufanya pembe kuwa makadirio, si vipimo." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kueleza jambo moja la mbinu",
          minutes: 5,
          goal: "Eleza jambo moja la mbinu kwa uwazi ukitumia picha zako za skrini.",
          text: [
            "Chagua jambo moja la kuangalia, si kumi. Kwa mfano: \"Wakati wa kuruka juu, goti la mguu wangu wa kushoto linakunjika kidogo sana kuliko la kulia.\" au \"Wakati wa kuachia, kiwiko changu kiko chini ya bega.\"",
            "Lieleze kwa ushahidi: hatua, picha ya skrini, na unachokiona ukilinganisha na rudio jingine au na mfano ambao kocha wako anakupa. Msaidizi wa AI anaweza kukusaidia kuandika maelezo wazi yasiyohukumu: \"Nisaidie kueleza ninachokiona katika picha hizi mbili muhimu kwa maneno rahisi yasiyohukumu.\" Usiiombe ikupe utambuzi wa ugonjwa au tiba ya maumivu.",
            "Lipeleke kwa kocha wako kama swali: \"Nimeona hiki. Je, ni kitu tunachopaswa kukifanyia kazi? Nitumie agizo gani?\""
          ],
          steps: ["Chagua jambo moja la mbinu.", "Chagua picha za skrini zinazolionyesha.", "Andika maelezo yasiyohukumu pamoja na hatua.", "Muulize kocha wako kama ni muhimu na utumie agizo gani."],
          words: [["Agizo fupi (cue)", "maelekezo mafupi yanayokusaidia kubadilisha mwendo, kama \"kifua juu\"."], ["Maelezo yasiyohukumu", "kueleza unachokiona bila kuhukumu wala kutambua ugonjwa."]],
          slides: [
            { title: "Jambo moja, si kumi", bullets: ["Mfano: goti la kushoto linakunjika kidogo wakati wa kuruka juu"] },
            { title: "Onyesha ushahidi", bullets: ["Hatua na picha ya skrini", "Ukilinganisha na rudio jingine au mfano", "Maneno yasiyohukumu; bila utambuzi wa ugonjwa"] },
            { title: "Muulize kocha wako", bullets: ["\"Tukifanyie kazi hiki?\"", "\"Nitumie agizo gani?\""] }
          ],
          tryIt: "Andika jambo moja la mbinu katika sentensi mbili zisizohukumu pamoja na hatua na picha za skrini. Tumia AI kuliweka wazi zaidi, kisha lipeleke kwa kocha wako.",
          youCanNow: "kueleza jambo moja la mbinu kwa ushahidi na kuligeuza kuwa swali kwa kocha wako.",
          quickCheck: [
            { objective: "O5", q: "Maelezo ya mbinu yasiyohukumu ni yapi?", options: ["Kusema unachokiona bila kutambua ugonjwa", "Kutaja jeraha", "Kusema mwanamichezo ni mbaya", "Kubahatisha chanzo cha maumivu"], answer: 0, why: "Maelezo yasiyohukumu yanaeleza kinachoonekana na kuacha utambuzi nje." },
            { objective: "O5", q: "Unaona mambo matatu unayotaka kurekebisha. Unampelekea kocha wako nini?", options: ["Yote matatu kwa pamoja", "Jambo moja pamoja na hatua yake na picha za skrini", "Hakuna kitu hadi msimu uishe", "Mpango mpya wa mazoezi kutoka kwa AI"], answer: 1, why: "Kufanyia kazi jambo moja la mbinu kwa wakati mmoja hufanya mabadiliko yawe wazi zaidi." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kabla na baada: je, imebadilika?",
          minutes: 5,
          goal: "Andaa ulinganisho wa bega kwa bega ili uone kama mbinu imebadilika.",
          text: [
            "Baada ya kufanyia mazoezi agizo la kocha wako kwa wiki chache, rekodi tena kutoka sehemu zile zile zenye alama, pembe zile zile, mwanga ule ule. Weka picha muhimu za kabla na baada bega kwa bega katika slaidi au mpangilio wa Canva (programu ya bure ya kubuni picha).",
            "Angalia mkao ule ule muhimu katika kila moja. Je, mabadiliko yapo? Yapo katika kila rudio au katika baadhi tu? Mabadiliko yanahitaji marudio mengi; maendeleo madogo bado ni maendeleo.",
            "Kama mabadiliko yanaleta maumivu, au mwendo unauma, simama na umwambie athletic trainer wako, mtaalamu wa tiba ya viungo au daktari. Mazoezi ya mbinu hayapaswi kamwe kuendelea huku ukiumia."
          ],
          steps: ["Rekodi tena kutoka sehemu na pembe zile zile.", "Chagua picha muhimu zile zile.", "Weka kabla na baada bega kwa bega.", "Andika kilichobadilika na katika marudio mangapi.", "Pitia pamoja na kocha wako; ripoti maumivu yoyote."],
          words: [["Bega kwa bega (side-by-side)", "picha au video mbili zilizowekwa kando kwa kando ili kulinganisha."], ["Mtaalamu wa tiba ya viungo (physical therapist)", "mtaalamu mwenye leseni anayesaidia watu kurudisha uwezo wa kusogea baada ya jeraha."]],
          slides: [
            { title: "Mpangilio ule ule", bullets: ["Sehemu zile zile zenye alama", "Pembe na mwanga ule ule"] },
            { title: "Linganisha", bullets: ["Picha muhimu ile ile, bega kwa bega", "Kila rudio au baadhi tu?", "Maendeleo madogo yanahesabika"] },
            { title: "Usalama", bullets: ["Maumivu? Simama", "Mwambie athletic trainer, mtaalamu wa tiba ya viungo au daktari"] }
          ],
          tryIt: "Kazi ya mwisho: fanyia mazoezi agizo la kocha wako, rekodi tena baada ya wiki mbili kutoka sehemu zile zile, na uandae ulinganisho wa kabla na baada bega kwa bega wa kupitia pamoja na kocha wako.",
          youCanNow: "kulinganisha mbinu ya kabla na baada kwa haki na kujua wakati wa kusimama kwa sababu ya maumivu.",
          quickCheck: [
            { objective: "O6", q: "Nini kinafanya ulinganisho wa kabla na baada uwe wa haki?", options: ["Kurekodi kutoka pembe mpya kila mara", "Kutumia mwanga tofauti", "Kurekodi kutoka sehemu, pembe na mwanga ule ule", "Kutumia rudio bora tu"], answer: 2, why: "Mbinu pekee ndiyo inapaswa kubadilika kati ya video hizo mbili." },
            { objective: "O6", q: "Agizo jipya linaanza kuumiza bega lako. Unafanya nini?", options: ["Endelea huku ukiumia", "Iombe AI ikutambulie tatizo", "Lifanyie mazoezi mara mbili zaidi", "Simama na umwambie athletic trainer, mtaalamu wa tiba ya viungo au daktari"], answer: 3, why: "Maumivu ni sababu ya kusimama na kumwona mtaalamu aliyefunzwa." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Zana za AI na mabadiliko ya kweli",
        questions: [
          { objective: "O4", q: "Ukadiriaji wa mkao unafanya nini?", options: ["Unatambua majeraha", "Unaandika mipango ya mazoezi", "Unahesabu wafuasi", "Unapata sehemu za mwili kwenye video na kuchora mchoro wa vijiti"], answer: 3, why: "Unatafuta mahali viungo vilipo katika picha." },
          { objective: "O4", q: "Kipi kinaweza kufanya zana ya mkao ikosee?", options: ["Ukungu na nguo zilizolegea", "Mwanga mzuri", "Nguo za kubana", "Mandharinyuma safi"], answer: 0, why: "Ukungu na nguo zilizolegea huficha mahali viungo vilipo." },
          { objective: "O4", q: "Pembe kutoka video ya simu moja ni:", options: ["Kamili kabisa", "Utambuzi wa kitabibu", "Makadirio, si vipimo vya maabara", "Hazina faida"], answer: 2, why: "Video ya 2D haiwezi kupima kina kikamilifu." },
          { objective: "O5", q: "Uiombe AI nini unapoeleza mbinu yako?", options: ["Ikutambulie maumivu ya goti", "Ikuandikie tiba", "Ipingane na kocha wako", "Ikusaidie kueleza unachokiona kwa maneno yasiyohukumu"], answer: 3, why: "Utambuzi na tiba ni kazi ya wataalamu." },
          { objective: "O6", q: "Mbinu mpya inaleta maumivu. Wewe:", options: ["Unaendelea huku ukiumia", "Unasimama na kumwambia athletic trainer, mtaalamu wa tiba ya viungo au daktari", "Unapuuza", "Unaiomba AI dawa za maumivu"], answer: 1, why: "Usiendelee kamwe huku ukiumia." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Biomekaniki kwa AI",
    questions: [
      { objective: "O1", q: "Biomekaniki inasoma:", options: ["Fedha za timu", "Mitandao ya kijamii", "Jinsi nguvu na mikao ya mwili inavyoleta mwendo", "Usanifu wa viwanja"], answer: 2, why: "Ni sayansi ya mwendo." },
      { objective: "O1", q: "Upeo wa mwendo ni:", options: ["Umbali ambao kiungo kinasogea", "Umbali unaokimbia", "Ubao wa matokeo", "Aina ya zoezi"], answer: 0, why: "Unaeleza mwendo wa kiungo." },
      { objective: "O1", q: "Kitovu cha uzito ni:", options: ["Sehemu ya mwili wako inayoshika usawa", "Katikati ya uwanja", "Ukumbi wa mazoezi", "Msuli"], answer: 0, why: "Ni mahali uzito wako unaposawazika." },
      { objective: "O1", q: "Nguvu ya mrejesho wa ardhi ni:", options: ["Upepo", "Adhabu", "Msukumo ambao ardhi inakurudishia", "Sheria ya timu"], answer: 2, why: "Unaisukuma ardhi, nayo inakusukuma tena." },
      { objective: "O1", q: "Katika jump shot, nguvu inaanzia:", options: ["Kifundo cha mkono", "Miguuni", "Machoni", "Kwenye mpira"], answer: 1, why: "Mnyororo wa nguvu unaanzia ardhini kwenda juu." },
      { objective: "O2", q: "Mwonekano wa ubavuni unaonyesha:", options: ["Uso tu", "Hakuna kitu cha maana", "Watazamaji tu", "Mwendo wa mbele na nyuma na pembe za viungo"], answer: 3, why: "Huo ndio mwonekano wa ubavuni (sagittal)." },
      { objective: "O2", q: "Kwa nini uweke alama sehemu za kamera sakafuni?", options: ["Kwa mapambo", "Ni sheria", "Ili urekodi kwa njia ile ile wakati ujao", "Kuwachanganya wengine"], answer: 2, why: "Mpangilio ule ule unaleta ulinganisho wa haki." },
      { objective: "O2", q: "Slow motion inakusaidia:", options: ["Kuokoa betri", "Kuficha makosa", "Kuongeza muziki", "Kuona mienendo ya kasi kwa uwazi"], answer: 3, why: "Inaonyesha maelezo madogo." },
      { objective: "O2", q: "Kabla ya kuwarekodi wachezaji wenzako unapaswa:", options: ["Kupata ruhusa", "Kuweka mtandaoni kwanza", "Kurekodi kwa siri", "Kuacha"], answer: 0, why: "Heshimu faragha na sheria za timu." },
      { objective: "O3", q: "Hatua ni:", options: ["Kipindi cha mchezo", "Sehemu moja ya mwendo", "Timu", "Simu"], answer: 1, why: "Ujuzi hugawanyika katika hatua." },
      { objective: "O3", q: "Ipi ni hatua ya kurusha?", options: ["Mapumziko ya nusu", "Muda wa kusimamisha mchezo", "Kuachia", "Mzunguko wa kupoza mwili"], answer: 2, why: "Kuachia ni hatua ya kurusha." },
      { objective: "O3", q: "Kutazama picha moja moja maana yake ni:", options: ["Kupitia video picha moja baada ya nyingine", "Kutazama kwa kasi mara mbili", "Kuruka hadi mwisho", "Kufuta picha"], answer: 0, why: "Kunakuwezesha kupata mikao muhimu." },
      { objective: "O3", q: "AI inaorodhesha hatua za ujuzi wako. Baadaye wewe:", options: ["Unaziamini kabisa", "Unaziweka mtandaoni", "Unampuuza kocha wako", "Unazithibitisha na kocha wako"], answer: 3, why: "Makocha wanathibitisha kilicho muhimu." },
      { objective: "O4", q: "Ukadiriaji wa mkao unachora:", options: ["Nembo", "Mchoro wa vijiti kwenye mwili wako", "Ramani", "Chati ya wafuasi"], answer: 1, why: "Unaunganisha sehemu za mwili zilizopatikana." },
      { objective: "O4", q: "Kabla ya kutumia programu ya mkao, kagua:", options: ["Rangi yake", "Sera yake ya faragha", "Nembo yake", "Hakuna kitu"], answer: 1, why: "Video ya mwili ni taarifa binafsi." },
      { objective: "O5", q: "Unapaswa kufanyia kazi mambo mangapi ya mbinu kwa wakati mmoja?", options: ["Moja", "Kumi", "Yote", "Hakuna"], answer: 0, why: "Lengo moja ni rahisi zaidi kubadilisha." },
      { objective: "O5", q: "Agizo fupi (cue) ni:", options: ["Maelekezo mafupi ya kubadilisha mwendo", "Fimbo ya mchezo wa pool", "Alama za mchezo", "Programu ya video"], answer: 0, why: "Maagizo mafupi yanaongoza mabadiliko ya mbinu." },
      { objective: "O5", q: "Maelezo yasiyohukumu:", options: ["Yanahukumu kwa ukali", "Yanatambua majeraha", "Yanaeleza unachokiona bila kutambua ugonjwa", "Yanapuuza ushahidi"], answer: 2, why: "Baki kwenye unachokiona." },
      { objective: "O6", q: "Video za kabla na baada zinapaswa kutumia:", options: ["Pembe tofauti kila mara", "Mpangilio wowote", "Hakuna video", "Sehemu, pembe na mwanga ule ule"], answer: 3, why: "Mpangilio ule ule unaleta ulinganisho wa haki." },
      { objective: "O6", q: "Nani huwasaidia watu kurudisha uwezo wa kusogea baada ya jeraha?", options: ["Shabiki", "Mtaalamu wa tiba ya viungo", "Programu ya AI", "Mwamuzi"], answer: 1, why: "Wataalamu wa tiba ya viungo wana leseni ya kazi hii." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      3,
      5,
      8,
      9,
      11,
      13,
      15,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Kurekodi",
        objective: "O2",
        notYet: "Upande mmoja tu, au kamera ilisogea au ilikuwa juu sana au chini sana.",
        meets: "Mwonekano wa ubavuni na wa mbele kwa usawa wa nyonga kutoka sehemu zenye alama, marudio matatu kila upande.",
        exceeds: "Pia anaandika sehemu, mpangilio wa slow motion na mwanga ili mtu yeyote aweze kurudia."
      },
      {
        name: "Hatua na picha muhimu",
        objective: "O3",
        notYet: "Hatua hazipo au hazina lebo.",
        meets: "Kila hatua ina picha muhimu yenye lebo, iliyothibitishwa na kocha.",
        exceeds: "Picha muhimu kutoka marudio kadhaa zinaonyesha mkao ule ule kila mara."
      },
      {
        name: "Jambo la mbinu",
        objective: "O5",
        notYet: "Mambo kadhaa kwa pamoja, au maneno yanayotambua ugonjwa au kuhukumu.",
        meets: "Jambo moja katika sentensi mbili zisizohukumu pamoja na hatua yake na picha za skrini.",
        exceeds: "Pia ameligeuza kuwa swali wazi ambalo kocha alijibu kwa agizo fupi moja."
      },
      {
        name: "Matumizi ya zana",
        objective: "O4",
        notYet: "Namba za programu zinachukuliwa kama vipimo kamili.",
        meets: "Pembe yoyote ya zana ya mkao inaitwa makadirio na inakaguliwa dhidi ya picha.",
        exceeds: "Anaweza kutaja kitu katika kipande cha video kinachoweza kuifanya zana ikosee."
      },
      {
        name: "Kabla na baada",
        objective: "O6",
        notYet: "Video ya pili ilirekodiwa tofauti, au hakuna ulinganisho uliofanywa.",
        meets: "Ulinganisho wa bega kwa bega kutoka sehemu, pembe na mwanga ule ule.",
        exceeds: "Pia anaandika kilichobadilika, kisichobadilika, na maumivu yoyote yaliyoripotiwa kwa mtu sahihi."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanamichezo wanaomaliza kozi na kufaulu kazi ya mwisho (rubriki)",
      "Wanamichezo wanaomwonyesha kocha ulinganisho wao wa kabla na baada ndani ya siku 30 (utafiti wa kufuatilia)",
      "Makocha wanaoripoti mazungumzo ya mbinu yaliyo wazi zaidi na wanamichezo waliosoma kozi",
      "Wanafunzi wanaoanza kozi nyingine ya Koach Learn ya wanamichezo ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu yenye kamera na slow motion",
      "Utepe au koni za kuweka alama sehemu za kamera",
      "Msaidizi wa AI wa bure; programu ya bure ya kukadiria mkao si lazima",
      "Kama dakika 60 kwa masomo, majaribio na mtihani, pamoja na vipindi viwili vya kurekodi vilivyotenganishwa kwa wiki mbili"
    ],
    facilitatorNotes: [
      "Endesha kurekodi kama zoezi la kikundi: mwanamichezo mmoja anasogea, mmoja anarekodi, mmoja anakagua urefu na sehemu ya kamera.",
      "Pata ruhusa ya maandishi kabla ya kuwarekodi watoto, na video zao zisiwekwe kwenye programu za umma.",
      "Kocha athibitishe hatua na maagizo mafupi; kozi hii haichukui nafasi ya ukocha.",
      "Mwanamichezo yeyote anayeripoti maumivu anasimamisha zoezi na anapelekwa kwa athletic trainer, mtaalamu wa tiba ya viungo au daktari.",
      "Pima ulinganisho wa mwisho kwa rubriki, mstari mmoja wa Bado kwa wakati mmoja."
    ]
  }
};
