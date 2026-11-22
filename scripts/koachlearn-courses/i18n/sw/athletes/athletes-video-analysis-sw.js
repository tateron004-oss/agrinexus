"use strict";

// Koach Learn course (Swahili translation of athletes/athletes-video-analysis.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "athletes-video-analysis-sw",
  lang: "sw",
  translationOf: "athletes-video-analysis",
  category: "Athletes",
  name: "Uchambuzi wa Video na Akili ya Mchezo",
  skills: "Kurekodi video ya mchezo na mazoezi inayofaa, Kutazama video ukiwa na swali moja, Kuweka lebo kwa michezo katika jedwali, Kutumia AI kufupisha michezo yenye lebo, Kugeuza video kuwa lengo moja la mazoezi",
  outcome: "kurekodi mchezo au mazoezi, kuweka lebo kwa angalau michezo 20 katika jedwali ukiwa na swali lililo wazi, kutumia msaidizi wa AI kufupisha mifumo inayojirudia, na kuigeuza kuwa lengo moja la mazoezi mlilokubaliana na kocha wako.",
  about: [
    "Kozi hii ni ya wanamichezo na makocha wanaotaka kujifunza kutoka kwa video bila programu ghali. Utatumia kamera ya simu, jedwali la bure (spreadsheet) na msaidizi wa AI wa bure.",
    "Kutazama video ya mchezo ni ujuzi. Watu wengi hutazama matukio makubwa tu. Utajifunza kutazama ukiwa na swali, kuweka lebo kwa kinachotokea, kupata mifumo inayojirudia, na kuigeuza kuwa kitu cha kufanyia mazoezi.",
    "Kila somo linachukua kama dakika tano na lina kazi ya \"Jaribu sasa\". Jaribio la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Rekodi mchezo mmoja au mazoezi (kwa ruhusa), chagua swali moja, weka lebo kwa angalau michezo 20 katika Google Sheet, mwombe msaidizi wa AI afupishe mifumo kutoka kwa lebo zako, na uandike lengo moja la mazoezi. Lipitie pamoja na kocha wako.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wanamichezo wa shule za sekondari, vyuo na vilabu, pamoja na makocha, wanaotaka kujifunza kutoka kwa video za michezo na mazoezi bila programu ghali.",
    startingPoint: "Wanaweza kurekodi video kwa simu na wameshatazama video za michezo, mara nyingi kwa ajili ya matukio makubwa. Wachache wamewahi kurekodi kwa mpango, kuweka lebo kwa michezo, kuhesabu mifumo katika jedwali, au kukagua muhtasari wa AI dhidi ya hesabu zao wenyewe.",
    gap: "Kutazama video bila swali kunaonyesha zaidi matukio makubwa na makosa makubwa, kwa hiyo mazoezi hayabadiliki. Kuweka lebo na kuhesabu kunageuza video kuwa ushahidi unaoleta lengo moja wazi la mazoezi na mazungumzo bora na kocha.",
    constraints: [
      "Lugha rahisi, kama kiwango cha kusoma cha darasa la 7",
      "Kamera ya simu, Google Sheets ya bure na msaidizi wa AI wa bure; hakuna programu ya kulipia inayohitajika",
      "Kama dakika 60 za masomo pamoja na muda wa kurekodi na kuweka lebo kwa mchezo mmoja au mazoezi",
      "Sheria za timu, shule na ligi kuhusu kurekodi; video za michezo ya vijana zinaonyesha watoto wa watu wengine",
      "Majina ya wachezaji wengine na taarifa zao binafsi hazitiwi katika zana za AI"
    ],
    prerequisites: "Hakuna. Kozi \"AI Tools for Athletes\" (Zana za AI kwa Wanamichezo) inasaidia kama hujawahi kutumia Google Sheets."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukitumia simu kwenye mchezo au mazoezi", action: "kurekodi video inayofaa kutoka mahali pa juu na katikati, ukiona uwanja kwa upana na bila kutikisika", standard: "kwa ruhusa ya kocha wako kabla ya kurekodi na kabla ya kushiriki video" },
    { id: "O2", condition: "Kabla ya kutazama video ya mchezo au mazoezi", action: "kuandika swali moja finyu na kutazama mara mbili, ukisimamisha kwenye michezo inayolijibu", standard: "kwa swali moja kila unapotazama na maelezo mafupi kwa kila mchezo unaohusika" },
    { id: "O3", condition: "Ukitumia Google Sheets na video yako", action: "kuweka lebo kwa michezo kwa safu za Mchezo #, Muda, Hali, Kilichotokea, Matokeo na Maelezo", standard: "ukiweka lebo kwa angalau michezo 20 kwa maneno yale yale ya lebo kila mara" },
    { id: "O4", condition: "Ukiwa na angalau michezo 20 yenye lebo", action: "kuhesabu lebo zako kwa kupanga (sort), kuchuja (filter) au COUNTIF na kuandika mifumo miwili mikuu pamoja na namba", standard: "na mfumo wowote unaotokana na michezo michache tu ukiwekewa alama \"tazama zaidi\"" },
    { id: "O5", condition: "Ukitumia msaidizi wa AI wa bure na jedwali lako la lebo", action: "kuomba muhtasari wa mifumo mikuu pamoja na hesabu na kuukagua dhidi ya hesabu zako mwenyewe", standard: "majina ya wachezaji wengine na taarifa binafsi zikiwa zimeondolewa na kila hesabu ikilingana na jedwali lako" },
    { id: "O6", condition: "Ukiwa na mfumo wako wenye nguvu zaidi", action: "kuandika lengo moja la mazoezi na kulipeleka kwa kocha wako pamoja na namba, nyakati za video na swali", standard: "lengo likiwa limekubaliwa na kocha wako na mpango wa kurekodi tena na kuweka lebo tena baadaye" }
  ],
  chapters: [
    {
      name: "Sura 1: Kupata video nzuri",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kurekodi video unayoweza kuitumia kweli",
          minutes: 5,
          goal: "Andaa simu kurekodi video inayofaa ya mchezo au mazoezi.",
          text: [
            "Video nzuri inaanza na mahali pazuri pa kamera. Rekodi ukiwa juu ukiweza, kama juu kabisa ya viti vya watazamaji, ili uone mchezo wote na nafasi kati ya wachezaji. Shika simu kwa ubavu (landscape) na uishike bila kutikisika kwa kutumia tripodi au kwa kuiegemeza kwenye kitu.",
            "Fuata mpira, lakini acha sehemu ya kutosha ya uwanja ionekane ili uone wanachofanya wachezaji wasio na mpira. Usikuze picha (zoom) karibu sana.",
            "Pata ruhusa. Timu yako, shule au ligi inaweza kuwa na sheria kuhusu kurekodi, na watoto wa watu wengine huonekana katika video za michezo ya vijana. Muulize kocha wako kabla ya kurekodi na kabla ya kushiriki chochote."
          ],
          steps: ["Muombe kocha wako ruhusa ya kurekodi.", "Tafuta mahali pa juu na katikati.", "Geuza simu kwa ubavu na uishike imara.", "Acha uwanja uonekane kwa upana; fuata mpira.", "Kagua chaji ya betri na nafasi ya kuhifadhi kabla ya mchezo."],
          words: [["Landscape", "kushika simu kwa ubavu, ili video iwe pana."], ["Tripodi", "kisimamo chenye miguu mitatu kinachoshika kamera bila kutikisika."]],
          slides: [
            { title: "Mahali pa kamera", bullets: ["Juu na katikati ukiweza", "Ona mchezo wote na nafasi kati ya wachezaji"] },
            { title: "Kuandaa kamera", bullets: ["Simu kwa ubavu", "Bila kutikisika: tripodi au iegemeze", "Ona kwa upana; fuata mpira"] },
            { title: "Kabla ya kurekodi", bullets: ["Muulize kocha wako", "Kagua betri na nafasi ya kuhifadhi", "Uliza kabla ya kushiriki"] }
          ],
          tryIt: "Katika mazoezi yako yajayo, kocha akikubali, rekodi dakika tano kutoka mahali pa juu kabisa unapoweza kupata. Itazame tena: unaweza kumwona kila mtu anayehusika katika kila mchezo?",
          youCanNow: "kuandaa simu kurekodi video inayofaa ya mchezo au mazoezi, kwa ruhusa.",
          quickCheck: [
            { objective: "O1", q: "Kwa nini uone uwanja kwa upana badala ya kukuza picha karibu?", options: ["Video pana inatumia nafasi kidogo", "Picha za karibu ni kinyume na sheria", "Ili uone wanachofanya wachezaji wasio na mpira", "Kukuza picha kunamaliza betri"], answer: 2, why: "Mwonekano mpana unaonyesha nafasi kati ya wachezaji na wachezaji walio mbali na mpira." },
            { objective: "O1", q: "Unataka kurekodi mchezo wa vijana wa dada yako mdogo na kuuweka mtandaoni. Unafanya nini kwanza?", options: ["Uweke mtandaoni na uuondoe mtu akilalamika", "Muulize kocha kuhusu sheria kabla ya kurekodi na kushiriki", "Rekodi timu nyingine tu", "Ficha uso wako mwenyewe"], answer: 1, why: "Timu na ligi zinaweza kuwa na sheria za kurekodi, na video inaonyesha watoto wa watu wengine." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kutazama video ukiwa na swali",
          minutes: 5,
          goal: "Chagua swali moja lililo wazi kabla ya kutazama video.",
          text: [
            "Ukitazama video bila mpango, utaona zaidi matukio makubwa na makosa yako mabaya zaidi. Makocha hutazama wakiwa na swali.",
            "Maswali mazuri ni finyu: \"Napoteza mpira wapi?\" \"Narudi kujihami kwa kasi gani?\" \"Mipangilio ipi ya kupokea serve inapoteza pointi?\" \"Timu nyingine inafanya nini kwenye third down?\"",
            "Chagua swali moja kila unapotazama. Tazama mara moja kwa kasi ya kawaida ili uone picha kubwa, kisha tazama tena na usimamishe kwenye kila mchezo unaojibu swali lako."
          ],
          steps: ["Andika swali moja finyu.", "Tazama mara moja kwa kasi ya kawaida.", "Tazama tena na usimamishe kwenye kila mchezo unaohusu swali lako.", "Andika maelezo mafupi kwa kila mchezo."],
          words: [["Kusoma video", "kutazama video ya michezo au mazoezi ili kujifunza na kuboresha."], ["Akili ya mchezo", "kuelewa kwa nini michezo inatokea, si tu kilichotokea."]],
          slides: [
            { title: "Bila mpango = matukio makubwa tu", bullets: ["Unaona michezo mikubwa na makosa makubwa", "Unakosa mifumo inayojirudia"] },
            { title: "Maswali finyu", bullets: ["\"Napoteza mpira wapi?\"", "\"Narudi kujihami kwa kasi gani?\"", "\"Wanafanya nini kwenye third down?\""] },
            { title: "Kutazama mara mbili", bullets: ["1. Kasi ya kawaida: picha kubwa", "2. Simamisha kwenye michezo inayojibu swali lako"] }
          ],
          tryIt: "Andika maswali matatu yanayowezekana kwa mchezo wako na nafasi yako. Chagua moja na utazame dakika tano za video ukiwa nalo, ukiandika maelezo kila linapojitokeza.",
          youCanNow: "kutazama video ukiwa na swali moja lililo wazi na kuandika maelezo kuhusu michezo inayolijibu.",
          quickCheck: [
            { objective: "O2", q: "Lipi ni swali finyu la video?", options: ["Narudi kujihami kwa kasi gani?", "Tulicheza vizuri?", "Ulikuwa msimu mzuri?", "Nani ni mchezaji bora?"], answer: 0, why: "Maswali finyu yanaelekeza kwenye michezo maalum unayoweza kusimamisha na kuandikia maelezo." },
            { objective: "O2", q: "Una maswali mawili kuhusu video yako. Unafanya nini?", options: ["Jibu yote mawili kwa kutazama mara moja", "Acha swali la pili", "Iombe AI iitazame badala yako", "Tazama ukiwa na swali moja kwa wakati"], answer: 3, why: "Chagua swali moja kila unapotazama." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kuweka lebo kwa michezo katika jedwali",
          minutes: 6,
          goal: "Weka lebo kwa michezo katika Google Sheets ili mifumo iweze kuhesabiwa.",
          text: [
            "Kuweka lebo ni kuandika maneno machache yale yale kwa kila mchezo. Kunageuza video kuwa data unayoweza kuhesabu.",
            "Tengeneza safu: Mchezo #, Muda katika video, Hali (kwa mfano \"shambulizi la haraka\" au \"2nd and long\"), Kilichotokea, Matokeo (zuri, la kati au baya), na Maelezo. Tumia maneno yale yale kila mara, ili \"kupoteza mpira\" iwe \"kupoteza mpira\" kila mara, si wakati mwingine \"mpira ulipotea\".",
            "Apps za video za timu kama Hudl huweka lebo kwa michezo katika shule nyingi; kama timu yako inatumia moja, muulize kocha wako jinsi ya kutumia lebo zake. Jedwali linamfaa kila mtu, bure."
          ],
          steps: ["Fungua Google Sheets.", "Safu: Mchezo #, Muda, Hali, Kilichotokea, Matokeo, Maelezo.", "Chagua orodha fupi ya maneno ya lebo na uyashikilie.", "Simamisha video na ujaze mstari mmoja kwa kila mchezo.", "Weka lebo kwa angalau michezo 20."],
          words: [["Lebo", "jina fupi unalolipa kila mchezo, kama \"kupoteza mpira\" au \"shambulizi la haraka\"."], ["Muda wa video (timestamp)", "muda katika video ambapo mchezo unaanza, kama 12:45."]],
          slides: [
            { title: "Lebo = video kuwa data", bullets: ["Maneno yale yale kwa kila mchezo", "Sasa unaweza kuhesabu mifumo"] },
            { title: "Safu zako", bullets: ["Mchezo #, Muda, Hali", "Kilichotokea, Matokeo, Maelezo"] },
            { title: "Sheria za lebo", bullets: ["Orodha fupi ya maneno ya lebo", "Neno lile lile kila mara", "Angalau michezo 20"] }
          ],
          tryIt: "Andaa jedwali lako la lebo na uweke lebo kwa michezo 10 kutoka kwa video yako ukitumia swali lako kutoka Somo la 2.",
          youCanNow: "kuweka lebo kwa michezo katika jedwali kwa maneno yanayofanana na nyakati za video.",
          quickCheck: [
            { objective: "O3", q: "Safu ipi inaonyesha kama mchezo ulienda vizuri?", options: ["Mchezo #", "Muda", "Matokeo", "Hali"], answer: 2, why: "Matokeo ni zuri, la kati au baya." },
            { objective: "O3", q: "Uliandika \"mpira ulipotea\" kwa michezo fulani na \"kupoteza mpira\" kwa mingine. Unafanya nini?", options: ["Zibadilishe zote ziwe neno moja, kama \"kupoteza mpira\"", "Ziache; haijalishi", "Futa michezo hiyo", "Ongeza neno la tatu"], answer: 0, why: "Kutumia neno lile lile kila mara kunaweka hesabu zako sahihi." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kupata video nzuri",
        questions: [
          { objective: "O1", q: "Mahali gani ni bora kwa kamera kurekodi mchezo?", options: ["Chini nyuma ya goli tu", "Ndani ya begi lako", "Juu na katikati", "Karibu sana na uso wa mchezaji mmoja"], answer: 2, why: "Juu na katikati kunaonyesha mchezo wote na nafasi kati ya wachezaji." },
          { objective: "O1", q: "Kabla ya kurekodi mazoezi, unapaswa:", options: ["Kumwomba kocha wako ruhusa", "Kuyaweka mtandaoni moja kwa moja", "Kurekodi chumba cha kubadilishia nguo cha timu nyingine", "Kushika simu wima"], answer: 0, why: "Timu na shule mara nyingi zina sheria za kurekodi." },
          { objective: "O2", q: "Lipi ni swali zuri la kusoma video?", options: ["\"Ulikuwa mchezo mzuri?\"", "\"Kwa nini sisi ni wabaya?\"", "\"Nani ana viatu bora?\"", "\"Napoteza mpira wapi?\""], answer: 3, why: "Maswali finyu yanakuelekeza kwenye mifumo unayoweza kurekebisha." },
          { objective: "O3", q: "Kuweka lebo kunafanya nini?", options: ["Kunafuta michezo mibaya", "Kunageuza video kuwa data unayoweza kuhesabu", "Kunaongeza muziki", "Kunafupisha video"], answer: 1, why: "Maneno yanayofanana yanakuruhusu kuhesabu mifumo." },
          { objective: "O3", q: "Kwa nini utumie neno lile lile la lebo kila mara?", options: ["Ili iwe ndefu", "Ili hesabu ziwe sahihi", "Inaonekana vizuri", "Hakuna sababu"], answer: 1, why: "Maneno tofauti kwa kitu kimoja yanaharibu hesabu zako." }
        ]
      }
    },
    {
      name: "Sura 2: Kupata mifumo na kuitumia",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuhesabu mifumo katika lebo zako",
          minutes: 5,
          goal: "Hesabu lebo zako na upate mifumo mikuu.",
          text: [
            "Ukiwa na michezo 20 au zaidi yenye lebo, hesabu ni mara ngapi kila hali na kila matokeo yanajitokeza. Katika Google Sheets unaweza kupanga kwa safu (sort), kutumia kichujio (filter), au kutumia fomula ya COUNTIF kuhesabu lebo.",
            "Tafuta mifumo, si mchezo mmoja mmoja: \"Mara 7 kati ya 9 nilizopoteza mpira zilitokea nilipopiga chenga kushoto nikibanwa\" ni mfumo. Pasi moja mbaya si mfumo.",
            "Namba ndogo zinaweza kukudanganya. Kama kitu kilitokea mara mbili tu, tazama video zaidi kabla ya kuamua kwamba ni mfumo halisi."
          ],
          steps: ["Panga au chuja kwa Matokeo.", "Hesabu kila Hali kwa matokeo mabaya.", "Andika mifumo miwili mikuu kama sentensi zenye namba.", "Weka alama \"tazama zaidi\" kwa mfumo wowote wenye michezo michache."],
          words: [["Mfumo", "kitu kinachotokea tena na tena katika hali zinazofanana."], ["COUNTIF", "fomula ya jedwali inayohesabu visanduku vinavyolingana na neno au namba."]],
          slides: [
            { title: "Hesabu lebo zako", bullets: ["Panga au chuja kwa Matokeo", "COUNTIF inahesabu lebo"] },
            { title: "Mfumo dhidi ya mchezo mmoja", bullets: ["Mfumo: mara 7 kati ya 9 za kupoteza mpira ukienda kushoto", "Si mfumo: pasi moja mbaya"] },
            { title: "Kuwa makini na namba ndogo", bullets: ["Mara mbili tu? Tazama video zaidi kwanza"] }
          ],
          tryIt: "Maliza kuweka lebo kwa michezo 20. Hesabu matokeo yako kwa kila hali na uandike mifumo yako miwili mikuu kama sentensi zenye namba.",
          youCanNow: "kuhesabu lebo na kueleza mifumo kwa namba.",
          quickCheck: [
            { objective: "O4", q: "Lipi kati ya haya ni mfumo?", options: ["Pasi moja mbaya katika kipindi cha pili", "Mara 5 kati ya 6 nilizokosa kufunga zilikuwa baada ya kupiga chenga", "Matokeo ya mwisho ya mchezo", "Mchezo bora wa siku"], answer: 1, why: "Mfumo unajirudia na una namba; mchezo mmoja si mfumo." },
            { objective: "O4", q: "Mfumo unaowezekana unaonekana katika michezo miwili tu. Unafanya nini?", options: ["Jenga mazoezi yote juu yake", "Puuza lebo zako zote", "Iambie timu kwamba ni tatizo lako kubwa zaidi", "Weka alama \"tazama zaidi\" na urekodi zaidi kwanza"], answer: 3, why: "Namba ndogo zinaweza kukudanganya, kwa hiyo tazama video zaidi kabla ya kuamua." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kutumia AI kufupisha maelezo yako ya video",
          minutes: 5,
          goal: "Muombe msaidizi wa AI afupishe michezo yenye lebo na ukague muhtasari wake.",
          text: [
            "Unaweza kunakili jedwali lako la lebo (bila majina ya wachezaji isipokuwa lako, na bila taarifa binafsi) kwenye msaidizi wa AI na kuuliza: \"Hii ni michezo yangu yenye lebo. Fupisha mifumo mitatu mikuu pamoja na hesabu, na unipendekezee swali moja la kumuuliza kocha wangu.\"",
            "AI ni hodari wa kuona mifumo katika majedwali ya maandishi, lakini inaweza kuhesabu vibaya au kubuni mambo. Linganisha hesabu zake na zako kutoka somo lililopita. Zikitofautiana, amini jedwali lako na urekebishe prompt (ombi lako kwa AI).",
            "Baadhi ya zana za AI zinaweza kutazama picha au video, lakini zinaweza kusoma vibaya matukio ya haraka ya michezo. Tumia lebo zako mwenyewe kama chanzo kikuu na AI kama msaidizi."
          ],
          steps: ["Nakili jedwali lako la lebo, ukiondoa majina ya wachezaji wengine na taarifa binafsi.", "Omba mifumo mitatu mikuu pamoja na hesabu.", "Linganisha na hesabu zako mwenyewe.", "Rekebisha makosa yoyote; jedwali lako ndilo sahihi."],
          words: [["Muhtasari", "toleo fupi linalobaki na mambo makuu."]],
          slides: [
            { title: "Muombe AI afupishe", bullets: ["Bandika jedwali lako la lebo", "\"Mifumo mitatu mikuu pamoja na hesabu\"", "\"Swali moja kwa kocha wangu\""] },
            { title: "Ikague", bullets: ["AI inaweza kuhesabu vibaya au kubuni", "Linganisha na hesabu zako", "Jedwali lako ndilo sahihi"] },
            { title: "Faragha", bullets: ["Bila majina ya wachezaji wengine", "Bila taarifa binafsi"] }
          ],
          tryIt: "Bandika michezo yako 20 yenye lebo kwenye msaidizi wa AI na uombe mifumo mitatu mikuu pamoja na hesabu. Kagua kila hesabu dhidi ya jedwali lako.",
          youCanNow: "kutumia AI kufupisha lebo za video na kukagua muhtasari dhidi ya hesabu zako mwenyewe.",
          quickCheck: [
            { objective: "O5", q: "Nini kinaweza kwenda vibaya AI ikifupisha jedwali lako la lebo?", options: ["Inaweza kuhesabu vibaya au kubuni mambo", "Inafuta jedwali lako kila mara", "Inaweka video hadharani", "Hakuna kinachoweza kwenda vibaya"], answer: 0, why: "AI inaweza kuona mifumo lakini inaweza kuhesabu vibaya, kwa hiyo ikague dhidi ya hesabu zako." },
            { objective: "O5", q: "Jedwali lako la lebo lina majina ya wachezaji wenzako. Unafanya nini kabla ya kulibandika kwenye AI?", options: ["Libandike kama lilivyo", "Ongeza namba zao za simu", "Ondoa majina ya wachezaji wengine na taarifa binafsi", "Waombe wachezaji wenzako walibandike wao"], answer: 2, why: "Majina ya wachezaji wengine na taarifa binafsi zisiingie katika zana za AI." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kugeuza video kuwa lengo la mazoezi",
          minutes: 5,
          goal: "Geuza mfumo wako mkuu kuwa lengo moja la mazoezi mlilokubaliana na kocha wako.",
          text: [
            "Video inasaidia tu ikibadilisha mazoezi. Chukua mfumo wako wenye nguvu zaidi na uugeuze kuwa lengo moja: \"Linda mpira ninapobanwa upande wangu wa kushoto\" au \"Rudi kujihami ndani ya sekunde tatu baada ya kupoteza mpira.\"",
            "Mpelekee kocha wako mfumo, namba na nyakati mbili au tatu za video zinazouonyesha. Uliza: \"Zoezi gani lingesaidia hili?\" Makocha hupenda wanamichezo wanaokuja na ushahidi na swali.",
            "Rekodi tena baada ya wiki chache na uweke lebo tena kwa swali lile lile ili uone kama mfumo umebadilika. Hiyo ndiyo akili ya mchezo: kujifunza, kufanya mazoezi na kukagua."
          ],
          steps: ["Chagua mfumo wako wenye nguvu zaidi.", "Andika lengo moja la mazoezi.", "Chagua nyakati mbili au tatu za video zinazouonyesha.", "Muombe kocha wako zoezi.", "Rekodi tena na uweke lebo tena baada ya wiki chache."],
          words: [["Lengo la mazoezi", "kitu kimoja maalum unachokifanyia kazi katika mazoezi."], ["Ushahidi", "ukweli unaoonyesha kwamba kitu ni kweli, kama hesabu na nyakati za video."]],
          slides: [
            { title: "Video lazima ibadilishe mazoezi", bullets: ["Mfumo wenye nguvu zaidi -> lengo moja"] },
            { title: "Mpelekee kocha wako", bullets: ["Mfumo na namba", "Nyakati mbili au tatu za video", "\"Zoezi gani lingesaidia?\""] },
            { title: "Kamilisha mzunguko", bullets: ["Rekodi tena baada ya wiki chache", "Weka lebo tena kwa swali lile lile", "Je, mfumo umebadilika?"] }
          ],
          tryIt: "Kazi ya mwisho: ukiwa na michezo yako 20 yenye lebo na muhtasari wa AI, andika lengo moja la mazoezi na uchague nyakati mbili za video. Mwonyeshe kocha wako na umwombe zoezi.",
          youCanNow: "kugeuza mifumo ya video kuwa lengo la mazoezi na kukagua baadaye kama kumekuwa na maendeleo.",
          quickCheck: [
            { objective: "O6", q: "Nini kinafanya lengo zuri la mazoezi?", options: ["\"Cheza vizuri zaidi\"", "Orodha ya kila kosa", "Badiliko moja maalum kutoka kwa mfumo wako wenye nguvu zaidi", "Chochote AI inachopendekeza"], answer: 2, why: "Lengo moja kutoka kwa mfumo wako wenye nguvu zaidi hubadilisha mazoezi." },
            { objective: "O6", q: "Kocha wako anapendekeza zoezi kwa lengo lako. Unakaguaje kama lilifanya kazi?", options: ["Muulize mchezaji mwenzako", "Rekodi tena baada ya wiki chache na uweke lebo tena kwa swali lile lile", "Amini hisia zako", "Iulize AI kama lilifanya kazi"], answer: 1, why: "Kurekodi tena na kuweka lebo tena kunaonyesha kama mfumo umebadilika." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kupata mifumo na kuitumia",
        questions: [
          { objective: "O4", q: "Lipi ni mfumo?", options: ["Pasi moja mbaya", "Dunk moja nzuri sana", "Matokeo ya mwisho", "Mara 7 kati ya 9 za kupoteza mpira zilitokea nikipiga chenga kushoto nikibanwa"], answer: 3, why: "Mfumo unajirudia katika michezo mingi inayofanana." },
          { objective: "O4", q: "COUNTIF inafanya nini?", options: ["Inahesabu visanduku vinavyolingana na lebo", "Inacheza video", "Inafuta mistari", "Inaongeza rangi"], answer: 0, why: "COUNTIF inahesabu visanduku vinavyolingana." },
          { objective: "O5", q: "Hesabu ya AI ya kupoteza mpira inatofautiana na jedwali lako. Unaamini nini?", options: ["AI", "Ile iliyo kubwa zaidi", "Jedwali lako, kisha rekebisha prompt", "Hakuna kati ya hizo"], answer: 2, why: "Lebo zako mwenyewe ndizo chanzo kikuu; AI inaweza kuhesabu vibaya." },
          { objective: "O5", q: "Kabla ya kubandika lebo kwenye AI, ondoa:", options: ["Nyakati za video", "Matokeo", "Hali", "Majina ya wachezaji wengine na taarifa binafsi"], answer: 3, why: "Linda faragha ya watu wengine." },
          { objective: "O6", q: "Unapaswa kumpelekea kocha wako nini?", options: ["Malalamiko tu", "Mfumo, namba na nyakati za video, pamoja na swali", "Video nzima bila maelezo", "Insha iliyoandikwa na AI"], answer: 1, why: "Ushahidi na swali hufanya mazungumzo yawe na manufaa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Uchambuzi wa Video na Akili ya Mchezo",
    questions: [
      { objective: "O1", q: "Kushika simu kwa ubavu unaporekodi kunaitwa:", options: ["Portrait", "Selfie", "Landscape", "Zoom"], answer: 2, why: "Landscape inatoa mwonekano mpana." },
      { objective: "O1", q: "Kwa nini urekodi ukiwa juu?", options: ["Ili uone mchezo wote na nafasi kati ya wachezaji", "Ili ujifiche", "Kwa sauti bora", "Ni sheria"], answer: 0, why: "Kuwa juu kunaonyesha kila mtu anayehusika." },
      { objective: "O1", q: "Nini kinashika kamera bila kutikisika?", options: ["Tripodi au kuiegemeza", "Kukimbia nayo", "Kukuza picha", "Kuitikisa"], answer: 0, why: "Video isiyotikisika ni rahisi kuisoma." },
      { objective: "O1", q: "Video za michezo ya vijana mara nyingi zinaonyesha watoto wengine. Kwa hiyo unapaswa:", options: ["Kuiweka popote", "Kutoficha chochote", "Kuuliza kabla ya kurekodi na kushiriki", "Kuiuza"], answer: 2, why: "Timu na familia zina sheria za faragha." },
      { objective: "O2", q: "Kutazama video bila mpango kwa kawaida kunamaanisha unaona:", options: ["Kila mfumo", "Matukio makubwa na makosa makubwa tu", "Hakuna kitu", "Maelezo ya kocha"], answer: 1, why: "Bila swali unakosa mifumo." },
      { objective: "O2", q: "Maswali mangapi kila unapotazama?", options: ["Kumi", "Hakuna", "Mengi iwezekanavyo", "Moja"], answer: 3, why: "Swali moja finyu linakufanya ubaki kwenye lengo." },
      { objective: "O2", q: "Unapotazama mara ya pili, wewe:", options: ["Unaharakisha kila kitu", "Unazima sauti", "Unasimamisha kwenye michezo inayojibu swali lako", "Unaruka kutazama"], answer: 2, why: "Kusimamisha kunakuruhusu kuandika maelezo ya kina." },
      { objective: "O2", q: "Akili ya mchezo inamaanisha kuelewa:", options: ["Matokeo tu", "Takwimu tu", "Ratiba", "Kwa nini michezo inatokea"], answer: 3, why: "Inahusu kwa nini, si tu nini." },
      { objective: "O3", q: "Muda wa video (timestamp) ni:", options: ["Muda katika video ambapo mchezo unaanza", "Tarehe ya mchezo", "Muhuri kwenye tiketi", "Filimbi ya mwisho"], answer: 0, why: "Nyakati za video zinakusaidia kupata mchezo haraka." },
      { objective: "O3", q: "Ipi ni safu ya lebo?", options: ["Wimbo unaoupenda", "Hali", "Hali ya hewa ya kesho", "Nywila yako"], answer: 1, why: "Hali ni lebo muhimu." },
      { objective: "O3", q: "Unapaswa kuweka lebo kwa angalau michezo mingapi?", options: ["1", "3", "20", "500"], answer: 2, why: "Ishirini inatosha kuona mifumo." },
      { objective: "O3", q: "Kama timu yako inatumia app ya video kama Hudl, unapaswa:", options: ["Kumuuliza kocha wako jinsi ya kutumia lebo zake", "Kuipuuza", "Kuifuta", "Kuweka taarifa za kuingia mtandaoni"], answer: 0, why: "Tumia kile timu yako inachotumia, kwa njia anayotaka kocha wako." },
      { objective: "O4", q: "Kitu kilitokea mara mbili tu. Unapaswa:", options: ["Kukiita mfumo mkubwa", "Kumwambia kila mtu", "Kubadilisha nafasi", "Kutazama video zaidi kwanza"], answer: 3, why: "Namba ndogo zinaweza kukudanganya." },
      { objective: "O4", q: "Ili kupata mifumo yako mikuu katika Sheets, unaweza:", options: ["Kuchapisha", "Kupanga, kuchuja au kutumia COUNTIF", "Kubadilisha herufi", "Kuongeza picha"], answer: 1, why: "Zana hizo zinahesabu na kupanga lebo kwa makundi." },
      { objective: "O5", q: "Unapaswa kuiomba AI ifanye nini na lebo zako?", options: ["Ichague timu yako", "Ifupishe mifumo mikuu pamoja na hesabu", "Iziweke mtandaoni", "Impe kocha wako alama"], answer: 1, why: "Kufupisha ni moja ya uwezo mkubwa wa AI." },
      { objective: "O5", q: "Zana za AI zinazosoma video moja kwa moja zinaweza:", options: ["Kutokosea kamwe", "Kuchukua nafasi ya makocha", "Kuwa za lazima", "Kusoma vibaya matukio ya haraka ya michezo"], answer: 3, why: "Tumia lebo zako mwenyewe kama chanzo kikuu." },
      { objective: "O6", q: "Lengo zuri la mazoezi ni:", options: ["\"Linda mpira ninapobanwa upande wangu wa kushoto\"", "\"Kuwa bora\"", "\"Shinda\"", "\"Jitahidi\""], answer: 0, why: "Ni maalum na linaweza kufanyiwa mazoezi." },
      { objective: "O6", q: "Swali lipi kwa kocha wako ni bora zaidi?", options: ["\"Kwa nini sichezi zaidi?\"", "\"Je, video zinachosha?\"", "\"Hizi ni klipu 3 za mfumo huu. Zoezi gani lingesaidia?\"", "\"Naweza kuruka mazoezi?\""], answer: 2, why: "Ushahidi pamoja na swali huleta jibu lenye manufaa." },
      { objective: "O6", q: "Unajuaje kama lengo lako la mazoezi lilifanya kazi?", options: ["Kubahatisha", "Kumuuliza shabiki", "Kuangalia mitandao ya kijamii", "Kurekodi tena na kuweka lebo tena kwa swali lile lile baadaye"], answer: 3, why: "Kuweka lebo tena kunaonyesha kama mfumo umebadilika." },
      { objective: "O6", q: "Video inasaidia tu ikiwa:", options: ["Inatazamwa na watu wengi", "Inabadilisha unachofanyia mazoezi", "Ni ndefu", "Ina muziki"], answer: 1, why: "Lengo ni mazoezi bora na kucheza vizuri zaidi." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      1,
      3,
      5,
      9,
      12,
      14,
      16
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Video na ruhusa",
        objective: "O1",
        notYet: "Alirekodi bila ruhusa, au video inatikisika sana au iko karibu mno kuona mchezo.",
        meets: "Ruhusa imetolewa, video ya landscape kutoka mahali pa juu, kwa upana na bila kutikisika.",
        exceeds: "Betri na nafasi ya kuhifadhi zilikaguliwa na mchezo wote au mazoezi yote yalirekodiwa bila mapengo."
      },
      {
        name: "Jedwali la lebo",
        objective: "O3",
        notYet: "Chini ya michezo 20, safu zinakosekana, au maneno ya lebo yanabadilika.",
        meets: "Angalau michezo 20 ina lebo katika safu zote sita kwa maneno yale yale ya lebo kila mara.",
        exceeds: "Kila mstari una muda wa video na maelezo mafupi yanayohusiana na swali."
      },
      {
        name: "Mifumo na ukaguzi wa AI",
        objective: "O5",
        notYet: "Hakuna hesabu, au muhtasari wa AI unatumiwa bila kukaguliwa.",
        meets: "Mifumo mikuu imeandikwa pamoja na hesabu na hesabu za AI zimekaguliwa dhidi ya jedwali, majina yakiwa yameondolewa.",
        exceeds: "Tofauti zimepatikana na prompt imerekebishwa; mifumo yenye namba ndogo imewekewa alama \"tazama zaidi\"."
      },
      {
        name: "Lengo la mazoezi",
        objective: "O6",
        notYet: "Hakuna lengo, au halieleweki.",
        meets: "Lengo moja maalum kutoka kwa mfumo wenye nguvu zaidi, limepitiwa na kocha kwa kutumia namba na nyakati za video.",
        exceeds: "Zoezi limekubaliwa na tarehe imepangwa ya kurekodi tena na kuweka lebo tena kwa swali lile lile."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kazi ya mwisho na kupata Anafikia au Anazidi katika kila mstari wa rubriki",
      "Wanafunzi wanaoripoti kurekodi tena na kuweka lebo tena kwa swali lile lile ndani ya siku 30 (utafiti wa kufuatilia)",
      "Makocha wanaoripoti kwamba zoezi au lengo la mazoezi lilibadilika kwa sababu ya ushahidi wa video wa mwanamichezo",
      "Wanafunzi wanaochukua kozi nyingine ya Athletes (Wanamichezo), kama \"AI kwa Michezo ya Timu\""
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu yenye kamera, yenye chaji, na nafasi ya kuhifadhi",
      "Tripodi au njia ya kuiegemeza simu (si lazima)",
      "Akaunti ya Google ya bure kwa Google Sheets",
      "Msaidizi wa AI wa bure (ChatGPT, Microsoft Copilot au Google Gemini)",
      "Kama dakika 60 za masomo pamoja na dakika 60 hadi 90 za kurekodi na kuweka lebo"
    ],
    facilitatorNotes: [
      "Hakikisha sheria za timu, shule na ligi kuhusu kurekodi kabla mtu yeyote hajarekodi, hasa katika michezo ya vijana wenye umri mdogo.",
      "Kubalianeni na wanamichezo mahali video zinapohifadhiwa na kwamba haziwekwi hadharani bila ruhusa.",
      "Mpe kila mtu orodha ile ile ya maneno ya lebo katika kipindi cha timu ili hesabu ziweze kulinganishwa.",
      "Onyesha jinsi ya kuondoa majina ya wachezaji wengine kabla ya kubandika kwenye AI, na wanamichezo wakague hesabu za AI dhidi ya jedwali lao.",
      "Panga mapitio mafupi na kocha ili kila mwanamichezo aweze kuwasilisha mfumo wake, nyakati za video na swali lake."
    ]
  }
};
