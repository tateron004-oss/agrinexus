"use strict";

// Koach Learn course (Swahili translation of entrepreneurs/entrepreneurs-ai-products-services.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "entrepreneurs-ai-products-services-sw",
  lang: "sw",
  translationOf: "entrepreneurs-ai-products-services",
  category: "Entrepreneurs",
  name: "Kujenga Bidhaa na Huduma Zinazotumia AI",
  skills: "Kupata tatizo linalofaa kutatuliwa, Kusanifu huduma inayosaidiwa na AI, Kuandika prompt ya maelekezo inayotumika tena, Kujaribu na wateja halisi, Kuweka bei na kuieleza kwa uaminifu",
  outcome: "kusanifu bidhaa au huduma ndogo inayosaidiwa na AI kwa tatizo halisi la mteja, kujenga toleo rahisi linalofanya kazi kwa zana ya AI ya bure na prompt ya maelekezo inayotumika tena, kuijaribu na watu watatu, na kuieleza na kuiwekea bei kwa uaminifu.",
  about: [
    "Biashara nyingi mpya sasa zinatumia AI kutoa huduma kwa haraka zaidi au kwa gharama ndogo: msaada wa CV, vifurushi vya mitandao ya kijamii kwa maduka ya mtaani, kutafsiri menyu, kupanga hesabu za biashara, mipango ya milo, mipango ya masomo na mengine. Kozi hii inakuonyesha jinsi ya kujenga huduma kama hiyo kwa njia sahihi.",
    "Utaanza na tatizo halisi la mteja, utasanifu mahali AI inasaidia na mahali mtu anakagua, utajenga toleo rahisi kwa msaidizi wa AI wa bure na prompt ya maelekezo inayotumika tena, utaijaribu na watu halisi, kisha utaiwekea bei na kuieleza bila kuahidi zaidi ya uwezo wake.",
    "Kila somo linachukua kama dakika tano na linaisha na kazi ya vitendo. Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni. Huhitaji kuandika programu (coding)."
  ],
  finalTask: "Tengeneza karatasi ya ukurasa mmoja ya bidhaa kwa huduma yako inayosaidiwa na AI: tatizo la mteja, kile mteja anachopata, hatua (ukionyesha zipi ni za AI na zipi ni ukaguzi wa mtu), prompt yako ya maelekezo inayotumika tena, matokeo ya majaribio na watu watatu, bei yako na jinsi ulivyoipata, na maelezo ya kweli yasiyo na madai usiyoweza kuthibitisha.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wamiliki wapya na wa zamani wa biashara ndogo wanaotaka kutoa huduma inayotumia AI ili kufanya kazi haraka zaidi au kwa gharama ndogo, kama msaada wa CV, vifurushi vya mitandao ya kijamii, kutafsiri menyu au mipango ya masomo.",
    startingPoint: "Wanatumia msaidizi wa AI kwa maandishi yao wenyewe. Wengi hawajasanifu huduma inayotumia AI, hawajaandika prompt ya maelekezo inayotumika tena, hawajajaribu na wateja halisi wala kuweka bei ya kazi inayosaidiwa na AI.",
    gap: "Huduma nyingi za AI zinaanza na zana badala ya tatizo halisi, zinaruka ukaguzi wa mtu, zinawekewa bei bila kuhesabu muda wa kukagua, na zinaahidi zaidi ya kile AI inachofanya. Wamiliki wanahitaji kujenga huduma ndogo, iliyojaribiwa na kuelezwa kwa uaminifu, ili wateja walipe, wapate matokeo mazuri na waiamini.",
    constraints: [
      "Hakuna haja ya kuandika programu; maneno rahisi kote",
      "Vifaa: kompyuta yenye msaidizi wa AI wa bure na spreadsheet (jedwali la hesabu)",
      "Muda: kama dakika tano kwa kila somo, pamoja na kujaribu na watu halisi",
      "Madai kuhusu bidhaa lazima yawe ya kweli na yawe na ushahidi (FTC); maswali ya kodi yanaenda kwa vyanzo rasmi au kwa mhasibu",
      "Taarifa binafsi za wanaojaribu na za wateja zibaki nje ya AI inapowezekana"
    ],
    prerequisites: "Kozi \"Utangulizi wa AI kwa Wajasiriamali\", au matumizi ya kawaida ya msaidizi wa AI kwa maandishi ya biashara."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa matatizo matano ya wateja unayoweza kutatua", action: "kuchagua tatizo moja halisi, linalotokea mara kwa mara na linaloumiza, kwa ajili ya huduma inayosaidiwa na AI", standard: "baada ya kumuuliza angalau mtu mmoja halisi jinsi anavyolishughulikia leo" },
    { id: "O2", condition: "Ukipewa tatizo ulilochagua", action: "kuchora huduma kama hatua zenye namba zilizowekwa alama AI, mtu au zana, pamoja na vinavyoingia na kinachotolewa", standard: "ukiwa na ukaguzi wa mtu kabla ya kitu chochote kutolewa" },
    { id: "O3", condition: "Ukitumia msaidizi wa AI wa bure", action: "kuandika prompt ya maelekezo inayotumika tena yenye jukumu, sheria, muundo wa jibu na nafasi za kujaza", standard: "ikitoa matokeo yanayofanana kwa wateja wawili wa kubuni" },
    { id: "O4", condition: "Ukiwa na hadi watu watatu halisi", action: "kuendesha huduma yako, kupima muda wa kila hatua na kuandika maoni yao kwa maneno yao wenyewe", standard: "ukiandika angalau badiliko moja na kujaribu tena" },
    { id: "O5", condition: "Ukipewa gharama zako na maoni ya wanaojaribu", action: "kuhesabu bei ya kifurushi kwenye spreadsheet", standard: "ikilipa gharama zote, pamoja na muda wa kukagua, na kubakiza faida" },
    { id: "O6", condition: "Kwa huduma yako iliyokamilika", action: "kuandika maelezo ya bidhaa yanayosema kwa uaminifu kile AI inachofanya na kile mtu anachokagua", standard: "bila madai usiyoweza kuthibitisha" }
  ],
  chapters: [
    {
      name: "Sura 1: Kusanifu bidhaa",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kuanza na tatizo, si na AI",
          minutes: 5,
          goal: "Chagua tatizo halisi la mteja ambalo huduma inayosaidiwa na AI inaweza kutatua.",
          text: [
            "Kosa linalofanywa mara nyingi ni kuanza na \"Nataka kuuza kitu chenye AI\". Badala yake anza na tatizo ambalo watu tayari wanalipa kulitatua, au wanalilalamikia mara kwa mara: \"Migahawa midogo haina muda wa kuweka machapisho kwenye mitandao ya kijamii.\" \"Wanaotafuta kazi hawajui jinsi ya kueleza ujuzi wao.\"",
            "Matatizo mazuri yanatokea mara kwa mara, yanaumiza na ni mahususi. Uliza: Nani ana tatizo hili? Analitatua vipi sasa? Linamgharimu pesa au muda kiasi gani? Je, angenilipa nimtatulie kwa haraka zaidi au vizuri zaidi?",
            "AI inaweza kukusaidia kutafuta mawazo na kuyapanga, lakini zungumza na angalau watu watatu halisi wenye tatizo hilo kabla ya kujenga chochote."
          ],
          steps: ["Orodhesha matatizo matano uliyoona watu au biashara wakihangaika nayo.", "Omba AI ikusaidie kupima kila moja: mara ngapi, linaumiza kiasi gani, wanalitatua vipi sasa.", "Chagua lililo juu.", "Zungumza na watu watatu wenye tatizo hilo na uwaulize wanalishughulikia vipi leo."],
          words: [["Tatizo linalofaa kutatuliwa", "tatizo linalotokea mara kwa mara, linaloumiza na mahususi, ambalo watu tayari wanatumia pesa au muda juu yake."]],
          slides: [
            { title: "Anza na tatizo", bullets: ["Si \"Nataka kuuza AI\"", "Tatizo ambalo watu hulipa kulitatua au hulilalamikia"] },
            { title: "Matatizo mazuri ni", bullets: ["Yanayotokea mara kwa mara", "Yanayoumiza", "Mahususi"] },
            { title: "Uliza maswali manne", bullets: ["Nani analo?", "Wanalitatua vipi sasa?", "Linawagharimu nini?", "Je, wangekulipa?"] },
            { title: "Zungumza na watu halisi", bullets: ["Angalau watatu, kabla ya kujenga"] }
          ],
          tryIt: "Orodhesha matatizo matano, tumia AI ikusaidie kuyapima, chagua moja, na umuulize angalau mtu mmoja halisi mwenye tatizo hilo jinsi anavyolishughulikia leo.",
          youCanNow: "kuchagua tatizo halisi la mteja la kujengea huduma inayosaidiwa na AI.",
          quickCheck: [
            { objective: "O1", q: "Ni nini kinachofanya tatizo la mteja lifae kujengewa huduma?", options: ["Linatokea mara kwa mara, linaumiza na ni mahususi", "Ni kitu ambacho AI inajulikana nacho", "Ni wewe tu unayelo", "Linatokea mara moja kila miaka kumi"], answer: 0, why: "Matatizo yanayotokea mara kwa mara, yanayoumiza na mahususi ndiyo ambayo watu hulipa kuyatatua." },
            { objective: "O1", q: "Una wazo zuri lakini hujazungumza na mtu yeyote mwenye tatizo hilo. Unafanya nini kinachofuata?", options: ["Kuanza kujenga mara moja", "Kuuliza watu halisi wanavyolishughulikia leo", "Kuweka bei", "Kununua matangazo"], answer: 1, why: "Kuzungumza na watu halisi kwanza kunakuambia kama tatizo ni la kweli." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kusanifu mahali AI inasaidia na mahali wewe unakagua",
          minutes: 5,
          goal: "Chora huduma yako kama hatua, ukionyesha zipi ni za AI na zipi ni za mtu.",
          text: [
            "Huduma inayosaidiwa na AI ni mfululizo wa hatua. Mfano, kifurushi cha mitandao ya kijamii kwa mgahawa: 1) kupokea picha na vyakula maalum vya wiki kutoka kwa mmiliki (mtu), 2) kuandika rasimu ya maelezo ya machapisho (AI), 3) kukagua ukweli, bei na mtindo wa maneno (mtu), 4) kutengeneza picha kwenye Canva (kwa msaada wa AI), 5) kutuma ili zikubaliwe (mtu), 6) kupanga ratiba ya machapisho (zana).",
            "Weka mtu kila hatua ambapo kosa linaweza kumdhuru mteja: ukweli, bei, afya, mambo ya kisheria au ya pesa, na chochote kinachochapishwa kwa jina la mteja. Huyu \"mtu katika mzunguko\" (human in the loop) ndiye mteja anayemlipia: kasi kutoka kwa AI, busara kutoka kwako.",
            "Andika kinachoingia mwanzoni (unachohitaji kutoka kwa mteja) na kinachotoka mwishoni (hasa kile anachopata)."
          ],
          steps: ["Andika unachohitaji kutoka kwa mteja mwanzoni.", "Orodhesha kila hatua ya kutoa huduma.", "Weka alama kwa kila hatua: AI, mtu, au zana.", "Ongeza ukaguzi wa mtu kabla ya kitu chochote kwenda kwa mteja.", "Andika hasa kile mteja anachopata mwishoni."],
          words: [["Mtu katika mzunguko (human in the loop)", "mtu anakagua au anakubali kazi ya AI kabla haijatumika."], ["Kinachotolewa (deliverable)", "kitu kilichokamilika ambacho mteja anapokea."]],
          slides: [
            { title: "Huduma ni mfululizo wa hatua", bullets: ["Vinavyoingia kutoka kwa mteja", "Hatua za AI, hatua za mtu, hatua za zana", "Kinachotolewa mwishoni"] },
            { title: "Mfano: machapisho ya mgahawa", bullets: ["Mmiliki anatuma picha na vyakula maalum", "AI inaandika rasimu ya maelezo; wewe unakagua ukweli", "Picha za Canva; mmiliki anakubali"] },
            { title: "Mtu katika mzunguko", bullets: ["Kagua ukweli, bei, afya, sheria, pesa", "Kagua chochote kinachotoka kwa jina la mteja", "AI kwa kasi, wewe kwa busara"] }
          ],
          tryIt: "Chora huduma yako kama hatua zenye namba. Weka alama kwa kila moja: AI, mtu au zana, na ongeza ukaguzi wa mtu kabla ya kutoa. Andika vinavyoingia na kinachotolewa.",
          youCanNow: "kusanifu huduma inayosaidiwa na AI yenye ukaguzi wa mtu ulio wazi.",
          quickCheck: [
            { objective: "O2", q: "Kinachotolewa (deliverable) ni nini?", options: ["Zana ya AI unayotumia", "Bei", "Kitu kilichokamilika ambacho mteja anapokea", "Prompt yako ya maelekezo"], answer: 2, why: "Kinachotolewa ni kile mteja anachopata mwishoni." },
            { objective: "O2", q: "Ramani ya huduma yako inapeleka bei za menyu zilizoandikwa na AI moja kwa moja kwa mteja. Unaongeza nini?", options: ["Hakuna kitu", "AI ya pili ikague ya kwanza", "Zana yenye kasi zaidi", "Ukaguzi wa mtu kabla ya kutoa"], answer: 3, why: "Mtu anakagua ukweli na bei kabla ya kitu chochote kutoka." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kuandika prompt ya maelekezo inayotumika tena",
          minutes: 6,
          goal: "Andika prompt moja ya maelekezo unayoweza kuitumia tena kwa kila mteja.",
          text: [
            "Ili kutoa ubora ule ule kila mara, andika prompt moja ya maelekezo yenye maelezo kamili na uitumie tena. Iwe na: jukumu (\"Unanisaidia kuandika machapisho ya mitandao ya kijamii kwa migahawa midogo\"), sheria (mtindo wa maneno, urefu, kisichopaswa kufanywa kamwe), muundo wa jibu, na nafasi ya kujaza taarifa za kila mteja.",
            "Mfano wa sheria: \"Usibuni kamwe bei au vyakula vya menyu. Tumia tu vyakula maalum ninavyokupa. Weka alama [CHECK] kwenye chochote usichokuwa na uhakika nacho.\" Sheria kama hizi zinafanya makosa ya AI yaonekane kwa urahisi.",
            "Wasaidizi wengi wanakuruhusu kuhifadhi maelekezo yako maalum au kutengeneza msaidizi aliyehifadhiwa mwenye maelekezo yako; angalia kwenye mipangilio (settings) au kurasa za msaada za zana hiyo. Kama yako haiwezi, weka prompt kwenye hati (document) na uibandike kila mara."
          ],
          steps: ["Andika jukumu.", "Andika sheria, pamoja na kile AI isichopaswa kufanya kamwe.", "Eleza muundo wa jibu.", "Ongeza [nafasi] za taarifa za kila mteja.", "Ijaribu kwa wateja wawili wa kubuni na ubane sheria."],
          words: [["Prompt ya maelekezo", "prompt yenye maelezo kamili, inayotumika tena, inayoweka jukumu la AI, sheria na muundo wa jibu."], ["Nafasi (slot)", "sehemu iliyowekwa alama katika prompt ambapo unabandika taarifa za kila mteja."]],
          slides: [
            { title: "Prompt moja, ubora ule ule", bullets: ["Jukumu", "Sheria", "Muundo wa jibu", "[Nafasi] za taarifa za mteja"] },
            { title: "Sheria zinazonasa makosa", bullets: ["\"Usibuni kamwe bei au vyakula vya menyu.\"", "\"Tumia tu taarifa ninazokupa.\"", "\"Weka alama [CHECK] kwenye chochote usichokuwa na uhakika nacho.\""] },
            { title: "Ihifadhi", bullets: ["Wasaidizi wengine huhifadhi maelekezo maalum", "Au iweke kwenye hati na uibandike"] }
          ],
          tryIt: "Andika prompt yako ya maelekezo yenye jukumu, sheria, muundo na nafasi. Iendeshe kwa taarifa za wateja wawili wa kubuni na uboreshe sheria pale jibu lilipokosea.",
          youCanNow: "kuandika prompt ya maelekezo inayotumika tena inayotoa matokeo yanayofanana kwa kila mteja.",
          quickCheck: [
            { objective: "O3", q: "Nafasi (slot) katika prompt ya maelekezo ni nini?", options: ["Sehemu tupu unayojaza taarifa za kila mteja", "Sheria kuhusu mtindo wa maneno", "Mpango wa malipo", "Jina la AI"], answer: 0, why: "Nafasi zinakuwezesha kutumia prompt moja kwa kila mteja." },
            { objective: "O3", q: "Prompt yako inaendelea kubuni saa za kufungua biashara. Unabadilisha nini?", options: ["Hakuna; rekebisha kwa mkono kila mara", "Ongeza sheria: usibuni kamwe saa; weka [CHECK] kwenye usichojua", "Tumia jukumu refu zaidi", "Ondoa sehemu ya muundo"], answer: 1, why: "Sheria zilizo wazi zinazuia makosa ya AI yanayojirudia." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kusanifu bidhaa",
        questions: [
          { objective: "O1", q: "Ni wapi mahali pazuri pa kuanzia huduma inayotumia AI?", options: ["Zana mpya kabisa ya AI", "Tatizo halisi ambalo watu tayari wanalipa kulitatua", "Jina zuri", "Nembo (logo)"], answer: 1, why: "Bidhaa zinazotatua matatizo halisi yanayoumiza ndizo zinazouzika." },
          { objective: "O1", q: "Unapaswa kuzungumza na watu halisi wangapi kabla ya kujenga?", options: ["AI tu", "Hakuna", "Wewe mwenyewe tu", "Angalau watatu"], answer: 3, why: "Mazungumzo halisi yanathibitisha kwamba tatizo ni la kweli." },
          { objective: "O2", q: "Mtu anapaswa kukagua kazi ya AI wapi?", options: ["Kabla ya chochote chenye ukweli, bei au jina la mteja kutoka", "Popote pale si lazima", "Mwanzoni kabisa tu", "Mteja akilalamika tu"], answer: 0, why: "Ukaguzi wa mtu unanasa makosa kabla hayajamdhuru mteja." },
          { objective: "O3", q: "Sheria ipi inafaa katika prompt ya maelekezo ya machapisho ya mgahawa?", options: ["\"Tumia bei yoyote unayopenda.\"", "\"Buni vyakula maalum ikihitajika.\"", "\"Usibuni kamwe bei au vyakula vya menyu.\"", "\"Ruka taarifa za mmiliki.\""], answer: 2, why: "Sheria zinazozuia ukweli wa kubuni zinapunguza makosa." },
          { objective: "O2", q: "Kinachotolewa (deliverable) ni nini?", options: ["Mfumo wa AI", "Lori la kusafirisha mizigo", "Kitu kilichokamilika ambacho mteja anapokea", "Fomu ya kodi"], answer: 2, why: "Ni hasa kile mteja anachopata mwishoni." }
        ]
      }
    },
    {
      name: "Sura 2: Kujaribu, kuweka bei na kuzindua",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kujaribu na watu watatu halisi",
          minutes: 5,
          goal: "Endesha huduma yako kwa watu watatu na ujifunze cha kurekebisha.",
          text: [
            "Kabla ya kuuza kwa watu wengi, endesha huduma nzima kwa watu watatu halisi, bure au kwa bei ya majaribio. Angalia: mahali AI ilipokosea, mahali ulipotumia muda mwingi zaidi, na kile mteja alichopenda au asichoelewa.",
            "Muulize kila anayejaribu maswali matatu: \"Nini kilikuwa na manufaa zaidi?\" \"Nini kilichanganya au kilikuwa si sahihi?\" \"Je, ungelipia hii, na kiasi gani?\" Andika maneno yao hasa.",
            "Pima muda wa kila hatua. Kama ukaguzi wa mtu unachukua muda mrefu kuliko kufanya kazi kwa mkono, badilisha prompt ya maelekezo au hatua. Rekebisha matatizo makubwa zaidi, kisha jaribu tena."
          ],
          steps: ["Tafuta watu watatu wenye tatizo hilo.", "Endesha huduma nzima kwa kila mmoja.", "Pima muda wa kila hatua na uandike kila kosa la AI.", "Uliza maswali matatu na uandike majibu yao.", "Rekebisha matatizo makubwa zaidi na usasishe prompt yako."],
          words: [["Anayejaribu (tester)", "mtu halisi anayejaribu bidhaa yako mapema na kutoa maoni ya kweli."], ["Maoni (feedback)", "kile watu wanachokuambia kuhusu kilichofanya kazi na kisichofanya kazi."]],
          slides: [
            { title: "Jaribu kabla ya kuuza", bullets: ["Watu watatu halisi", "Bure au kwa bei ya majaribio", "Endesha huduma nzima"] },
            { title: "Angalia", bullets: ["Makosa ya AI", "Hatua zinazochukua muda mwingi zaidi", "Kile wateja walichopenda au wasichoelewa"] },
            { title: "Uliza maswali matatu", bullets: ["Nini kilikuwa na manufaa zaidi?", "Nini kilichanganya au kilikuwa si sahihi?", "Je, ungelipia, na kiasi gani?"] }
          ],
          tryIt: "Endesha huduma yako kwa angalau mtu mmoja halisi (watatu ukiweza). Pima muda wa kila hatua, andika makosa ya AI, uliza maswali matatu na uandike badiliko moja utakalofanya.",
          youCanNow: "kujaribu huduma inayosaidiwa na AI na watu halisi na kuiboresha kutokana na maoni yao.",
          quickCheck: [
            { objective: "O4", q: "Unapaswa kuandika nini wanaojaribu wanapotoa maoni?", options: ["Maoni mazuri tu", "Muhtasari wako mwenyewe", "Maneno yao hasa", "Hakuna; kumbuka tu"], answer: 2, why: "Maneno yao hasa yanaonyesha kile wateja wanachothamini na wanachohofia kweli." },
            { objective: "O4", q: "Wanaojaribu wawili wanasema matokeo yalichukua muda mrefu sana. Unafanya nini?", options: ["Kuwapuuza", "Kupandisha bei", "Kusimamisha huduma", "Kutafuta hatua inayochelewa, kuibadilisha na kujaribu tena"], answer: 3, why: "Majaribio ni ya kutafuta na kurekebisha matatizo, kisha kujaribu tena." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kuweka bei ya huduma yako inayosaidiwa na AI",
          minutes: 5,
          goal: "Weka bei inayolipa gharama zako na muda wako na inayolingana na kile wateja watalipa.",
          text: [
            "Jumlisha gharama zako kwa kila mteja: muda wako (pamoja na kukagua kazi ya AI), usajili wa zana unaogawanywa kwa wateja wote, na gharama nyingine zozote. Kisha linganisha na kile wateja wanacholipa sasa kwa njia nyingine za kutatua tatizo, na kile wanaojaribu walisema wangelipa.",
            "Usiweke bei kwa kuangalia tu jinsi AI inavyoifanya iwe haraka. Wateja wanalipia matokeo na busara yako, si dakika zako. Kifurushi (\"machapisho 12 kwa mwezi\") mara nyingi ni rahisi kuuza kuliko malipo kwa saa.",
            "Acha AI ikusaidie na hesabu na mawazo ya vifurushi, lakini kagua kila namba wewe mwenyewe kwenye spreadsheet. Kwa kodi na usajili wa biashara, angalia vyanzo rasmi kama irs.gov na ofisi ya biashara ya jimbo lako, au mhasibu."
          ],
          steps: ["Orodhesha gharama zako kwa kila mteja, pamoja na muda wa kukagua.", "Tafuta kile wateja wanacholipa sasa kwa njia nyingine.", "Andika kile wanaojaribu walisema wangelipa.", "Chagua kifurushi na bei, na ukague hesabu wewe mwenyewe.", "Hakikisha bei inalipa gharama zako na kubakiza kitu."],
          words: [["Kifurushi (package)", "kazi iliyopangwa kwa bei iliyopangwa, kama machapisho 12 kwa mwezi."], ["Faida", "kinachobaki baada ya kulipa gharama zako zote."]],
          slides: [
            { title: "Jumlisha gharama zako", bullets: ["Muda wako, pamoja na kukagua kazi ya AI", "Usajili wa zana unaogawanywa kwa wateja", "Gharama nyingine"] },
            { title: "Angalia soko", bullets: ["Kile wateja wanacholipa kwa njia nyingine", "Kile wanaojaribu walisema wangelipa"] },
            { title: "Weka bei ya matokeo", bullets: ["Wateja wanalipia matokeo na busara", "Vifurushi ni rahisi kuuza", "Kagua hesabu wewe mwenyewe"] }
          ],
          sources: [{ name: "IRS: Self-Employed Individuals Tax Center", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" }],
          tryIt: "Hesabu gharama yako kwa kila mteja kwenye spreadsheet, linganisha na kile wanaojaribu walisema, na uweke bei ya kifurushi inayobakiza faida.",
          youCanNow: "kuweka bei ya huduma inayosaidiwa na AI inayolipa gharama zako na inayolingana na soko.",
          quickCheck: [
            { objective: "O5", q: "Faida ni nini?", options: ["Kinachobaki baada ya kulipa gharama zote", "Jumla wanayolipa wateja", "Gharama ya zana ya AI", "Muda unaookoa"], answer: 0, why: "Faida ni pesa inayobaki baada ya kila gharama kulipwa." },
            { objective: "O5", q: "Bei yako inalipa zana ya AI lakini si saa unayotumia kukagua. Unafanya nini?", options: ["Kubaki na bei hiyo", "Kuongeza muda wako wa kukagua kwenye gharama na kuweka bei upya", "Kuacha kukagua", "Kuwatoza zaidi wateja wapya tu"], answer: 1, why: "Muda wa kukagua ni gharama halisi ambayo bei lazima ilipe." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kuieleza kwa uaminifu",
          minutes: 5,
          goal: "Andika maelezo ya bidhaa yanayosema ukweli kuhusu kile AI inachofanya.",
          text: [
            "Wateja wanakuamini zaidi unapokuwa wazi kuhusu jinsi huduma inavyofanya kazi: \"Tunatumia AI kuandika rasimu, na mtu anakagua kila chapisho kabla halijatoka.\" Usijifanye kwamba AI inafanya zaidi ya inavyofanya, au kwamba mtu anafanya kazi wakati AI ndiyo inayoifanya.",
            "FTC (tume ya biashara ya serikali ya Marekani) inasimamia sheria za ukweli katika matangazo dhidi ya madai ya AI yanayopotosha. Mwaka 2026 ilikamilisha amri dhidi ya kampuni zilizodai kwamba huduma ya masoko ya AI ilisikiliza mazungumzo ya watu kupitia vifaa janja wakati haikufanya hivyo. Madai kuhusu kile AI yako inachofanya, usahihi wake, au matokeo watakayopata wateja lazima yawe ya kweli na yawe na ushahidi.",
            "Epuka \"imehakikishwa\", \"sahihi 100%\" na \"inachukua nafasi ya wakili/daktari/mhasibu\". Zungumza na wakili kama huna uhakika kama dai linaruhusiwa."
          ],
          steps: ["Andika kile mteja anachopata kwa maneno rahisi.", "Sema kwa uaminifu mahali AI inatumika na mahali mtu anakagua.", "Ondoa dai lolote usiloweza kuthibitisha kwa ushahidi.", "Iombe AI ikague: \"Nionyeshe dai lolote linaloweza kupotosha.\"", "Uliza wakili kama huna uhakika."],
          words: [["Dai linalopotosha", "kauli inayowapa watu wazo lisilo la kweli, hata kama kila neno ni la kweli kwa maana ya maneno."], ["Ushahidi", "majaribio, matokeo au kumbukumbu zinazothibitisha dai."]],
          slides: [
            { title: "Kuwa wazi jinsi inavyofanya kazi", bullets: ["\"AI inaandika rasimu, mtu anakagua kila chapisho\"", "Usikuze kile AI inachofanya"] },
            { title: "FTC na madai ya AI", bullets: ["Sheria za ukweli katika matangazo zinahusu AI", "Amri za 2026 kuhusu madai ya uongo ya masoko ya AI", "Madai yanahitaji ushahidi"] },
            { title: "Epuka", bullets: ["\"Imehakikishwa\" au \"sahihi 100%\"", "\"Inachukua nafasi ya wakili, daktari au mhasibu\"", "Huna uhakika? Uliza wakili"] }
          ],
          sources: [{ name: "FTC: Advertising and Marketing Basics", url: "https://www.ftc.gov/business-guidance/advertising-marketing/advertising-marketing-basics" }, { name: "FTC: Orders against Cox Media Group and two other firms over AI marketing claims (2026)", url: "https://www.ftc.gov/news-events/news/press-releases/2026/08/ftc-finalizes-orders-cox-media-group-two-other-firms-settling-charges-they-deceived-customers-about" }],
          tryIt: "Kazi ya mwisho: andika maelezo yako ya kweli ya bidhaa, kisha tengeneza karatasi yako ya ukurasa mmoja ya bidhaa: tatizo, kinachotolewa, hatua (AI na mtu), prompt ya maelekezo, matokeo ya majaribio, bei na maelezo.",
          youCanNow: "kusanifu, kujaribu, kuwekea bei na kueleza kwa uaminifu bidhaa au huduma inayosaidiwa na AI.",
          quickCheck: [
            { objective: "O6", q: "Dai lipi la bidhaa ni la kweli?", options: ["\"Sahihi 100%, imehakikishwa\"", "\"Inajiendesha kabisa, hakuna mtu anayehitajika\" wakati mtu anakagua kila kitu", "\"AI inaandika rasimu, na mtu anakagua kila kitu kabla ya kutoa\"", "\"Bora kuliko mtaalamu yeyote\""], answer: 2, why: "Linasema ukweli kuhusu kile AI na watu kila mmoja anachofanya." },
            { objective: "O6", q: "Huna uhakika kama dai kwenye ukurasa wako wa mauzo linaruhusiwa. Unafanya nini?", options: ["Kuliacha na kuona kitakachotokea", "Kulifanya kubwa zaidi", "Kuiomba AI ilikubali", "Kuliondoa au kuuliza wakili"], answer: 3, why: "Ukiwa na shaka, liache au pata ushauri wa kisheria." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kujaribu, kuweka bei na kuzindua",
        questions: [
          { objective: "O4", q: "Ni swali gani unapaswa kuwauliza wanaojaribu?", options: ["\"Je, ungelipia hii, na kiasi gani?\"", "\"Nywila yako ya benki ni ipi?\"", "\"Unaweza kuniandikia maoni mazuri ili upate punguzo?\"", "\"Unapenda AI?\""], answer: 0, why: "Linakuambia kama kuna soko na bei halisi." },
          { objective: "O4", q: "Ukaguzi wa mtu unachukua muda mrefu kuliko kufanya kazi kwa mkono. Unapaswa kufanya nini?", options: ["Kuacha kujaribu", "Kuondoa ukaguzi wote", "Kutoza kidogo", "Kubadilisha prompt ya maelekezo au hatua"], answer: 3, why: "Boresha utaratibu ili AI iokoe muda kweli." },
          { objective: "O5", q: "Unapoweka bei, ni gharama gani watu husahau mara nyingi?", options: ["Rangi ya nembo", "Muda wa kukagua kazi ya AI", "Kodi ya nyumba ya mteja", "Faida za kampuni ya AI"], answer: 1, why: "Muda wa kukagua ni kazi halisi na lazima uwekwe kwenye bei." },
          { objective: "O6", q: "Maelezo yapi ni ya kweli?", options: ["\"AI inaandika rasimu, na mtu anakagua kila chapisho kabla halijatoka.\"", "\"AI sahihi 100%, imehakikishwa.\"", "\"Inachukua nafasi ya mhasibu wako.\"", "\"Imetengenezwa kwa mkono na timu yetu\" wakati AI ndiyo inafanya"], answer: 0, why: "Yanasema kwa ukweli kile AI inachofanya na kile mtu anachofanya." },
          { objective: "O6", q: "Sheria za FTC kuhusu madai ya AI zinasema madai lazima yawe:", options: ["Mafupi", "Ya kusisimua", "Ya kweli na yenye ushahidi", "Yamekubaliwa na zana ya AI"], answer: 2, why: "Ukweli katika matangazo unahusu madai ya AI pia." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kujenga Bidhaa na Huduma Zinazotumia AI",
    questions: [
      { objective: "O1", q: "Kosa linalofanywa mara nyingi unapojenga bidhaa ya AI ni:", options: ["Kuzungumza na wateja", "Kuanza na AI badala ya tatizo la mteja", "Kujaribu", "Kuweka bei"], answer: 1, why: "Anza na tatizo, si na zana." },
      { objective: "O1", q: "Matatizo mazuri ya kutatua ni:", options: ["Yale ambayo hakuna anayelipia", "Adimu na yasiyo wazi", "Yako peke yako", "Yanayotokea mara kwa mara, yanayoumiza na mahususi"], answer: 3, why: "Matatizo hayo ndiyo yanayoleta mahitaji." },
      { objective: "O1", q: "Swali \"Wanalitatua vipi sasa?\" linakusaidia kujua:", options: ["Hakuna kitu cha maana", "Nywila yao", "Umri wao", "Unashindana na nini na kinawagharimu kiasi gani"], answer: 3, why: "Njia wanazotumia sasa zinaonyesha thamani ya huduma yako." },
      { objective: "O2", q: "Katika mfano wa mgahawa, nani anakagua bei kwenye maelezo ya machapisho?", options: ["Hakuna mtu", "Mtu", "AI inajikagua yenyewe", "Wateja wa mteja"], answer: 1, why: "Bei ni ukweli unaohitaji ukaguzi wa mtu." },
      { objective: "O2", q: "\"Mtu katika mzunguko\" (human in the loop) maana yake ni:", options: ["Duara kwenye chati", "AI inachukua nafasi ya watu wote", "Mtu anakagua au anakubali kazi ya AI kabla haijatumika", "Namba ya simu ya huduma kwa wateja"], answer: 2, why: "Hiyo ndiyo maana yake." },
      { objective: "O2", q: "Vinavyoingia katika ramani ya huduma yako ni:", options: ["Unachohitaji kutoka kwa mteja mwanzoni", "Bidhaa ya mwisho", "Faida yako", "Kampuni ya AI"], answer: 0, why: "Vinavyoingia huja mwanzoni; kinachotolewa hutoka mwishoni." },
      { objective: "O3", q: "Prompt ya maelekezo ina:", options: ["Taarifa za benki yako", "Salamu tu", "Jukumu, sheria, muundo wa jibu na nafasi", "Swali la kubahatisha"], answer: 2, why: "Sehemu hizo zinafanya matokeo yafanane kila mara." },
      { objective: "O3", q: "Kwa nini uongeze \"Weka alama [CHECK] kwenye chochote usichokuwa na uhakika nacho\"?", options: ["Inafanya makosa ya AI yaonekane kwa urahisi", "Inafanya maandishi kuwa marefu", "Inatakiwa na sheria", "Inaficha makosa"], answer: 0, why: "Alama zinakuonyesha mahali pa kuangalia." },
      { objective: "O3", q: "Kama zana yako ya AI haiwezi kuhifadhi maelekezo, unaweza:", options: ["Kukata tamaa", "Kuweka prompt kwenye hati na kuibandika kila mara", "Kuiandika upya kwa kumbukumbu kwa namna tofauti kila mara", "Kununua zana tano"], answer: 1, why: "Hati iliyohifadhiwa inaifanya ifanane kila mara." },
      { objective: "O4", q: "Kujaribu na watu watatu halisi kunakusaidia kupata:", options: ["Hakuna kitu", "Nywila zao", "Nembo mpya", "Makosa ya AI, hatua zinazochelewa na kile wateja wanachothamini"], answer: 3, why: "Majaribio yanaonyesha cha kurekebisha kabla ya kuuza." },
      { objective: "O4", q: "Wanaojaribu wanapotoa maoni, unapaswa:", options: ["Kuandika maneno yao hasa", "Kubishana nao", "Kuyapuuza", "Kuwaomba waweke maoni ya uongo"], answer: 0, why: "Maneno yao hasa yanaonyesha kile ambacho ni muhimu kwao kweli." },
      { objective: "O4", q: "Baada ya kurekebisha matatizo yaliyopatikana katika majaribio, unapaswa:", options: ["Kupandisha bei mara kumi", "Kutobadilisha kitu tena kamwe", "Kufuta prompt", "Kujaribu tena"], answer: 3, why: "Kujaribu tena kunathibitisha kwamba marekebisho yamefanya kazi." },
      { objective: "O5", q: "Kwa kawaida wateja wanalipia:", options: ["Usajili wa zana zako", "Dakika ambazo AI inakuokolea", "Matokeo na busara yako", "Nembo yako"], answer: 2, why: "Weka bei ya matokeo, si ya muda tu." },
      { objective: "O5", q: "Bei ya kifurushi ni:", options: ["Ada ya kusafirisha", "Kazi iliyopangwa kwa bei iliyopangwa", "Msimbo wa punguzo", "Kodi"], answer: 1, why: "Vifurushi ni rahisi kwa wateja kuelewa." },
      { objective: "O5", q: "Nani anapaswa kukagua hesabu za bei?", options: ["Mshindani wako", "AI tu", "Hakuna mtu", "Wewe, kwenye spreadsheet"], answer: 3, why: "Hesabu za AI zinaweza kuwa si sahihi." },
      { objective: "O5", q: "Faida ni:", options: ["Bili ya zana zako", "Pesa yote wanayolipa wateja", "Kinachobaki baada ya kulipa gharama zote", "Bei yako"], answer: 2, why: "Faida = mapato kutoa gharama." },
      { objective: "O5", q: "Kwa maswali ya kodi kuhusu huduma yako mpya, angalia:", options: ["Vyanzo rasmi kama irs.gov au mhasibu", "Mazungumzo na AI tu", "Maoni kwenye mitandao ya kijamii", "Mteja wako"], answer: 0, why: "Vyanzo rasmi na wataalamu ni wa kuaminika." },
      { objective: "O6", q: "Ni dai gani unapaswa kuepuka?", options: ["\"Mtu anakagua kila chapisho\"", "\"Sahihi 100%, imehakikishwa\"", "\"Machapisho 12 kwa mwezi\"", "\"Unakubali wewe kabla ya kuchapisha\""], answer: 1, why: "Madai ya uhakika kamili ni magumu kuthibitisha." },
      { objective: "O6", q: "Mwaka 2026 FTC ilikamilisha amri dhidi ya kampuni ambazo:", options: ["Zilitumia spreadsheet", "Zilitoa madai ya uongo kuhusu kile huduma yao ya masoko ya AI ilichofanya", "Ziliajiri wabunifu", "Zililipa kodi kwa wakati"], answer: 1, why: "Zilidai kwamba AI ilisikiliza mazungumzo wakati haikufanya hivyo." },
      { objective: "O6", q: "Kama huna uhakika kama dai la matangazo linaruhusiwa, unapaswa:", options: ["Kuzungumza na wakili", "Kulitumia hata hivyo", "Kuuliza AI na kuchapisha chochote itakachosema", "Kulifanya kubwa zaidi"], answer: 0, why: "Wakili anaweza kukushauri kuhusu hali yako." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 1, 4, 5, 6, 9, 12, 15, 17] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Tatizo la mteja", objective: "O1", notYet: "Tatizo halieleweki au halijakaguliwa na mtu halisi.", meets: "Tatizo moja mahususi na kile mteja anachopata, vimekaguliwa na watu halisi.", exceeds: "Inaonyesha jinsi wanavyolitatua sasa na linawagharimu nini." },
      { name: "Hatua na ukaguzi wa mtu", objective: "O2", notYet: "Hatua hazina alama, au hakuna kinachokaguliwa kabla ya kutoa.", meets: "Hatua zenye namba zenye alama AI, mtu au zana, na ukaguzi wa mtu kabla ya kutoa.", exceeds: "Inasema hasa kile mtu anachokagua katika kila sehemu ya ukaguzi." },
      { name: "Prompt ya maelekezo", objective: "O3", notYet: "Haina sheria au nafasi, au matokeo yanatofautiana sana.", meets: "Jukumu, sheria, muundo na nafasi, ikitoa matokeo yanayofanana.", exceeds: "Inatumia alama [CHECK] na ina sheria zilizoongezwa kutokana na makosa ya majaribio." },
      { name: "Matokeo ya majaribio", objective: "O4", notYet: "Hakuna mtu halisi aliyeijaribu, au hakuna badiliko lililofanywa.", meets: "Matokeo ya majaribio na watu halisi, maneno yao wenyewe na angalau badiliko moja.", exceeds: "Watu watatu waliijaribu na jaribio la pili lilionyesha badiliko lilifanya kazi." },
      { name: "Bei na maelezo", objective: "O6", notYet: "Bei inapuuza muda wa kukagua, au maelezo yanaahidi zaidi ya uwezo.", meets: "Bei ya kifurushi inayolipa gharama zote na kubakiza faida, na maelezo ya kweli.", exceeds: "Inaonyesha hesabu za spreadsheet na inasema wazi kile AI inachofanya na kile mtu anachofanya." }
    ]
  },
  evaluation: {
    results: [
      "Wamiliki wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wamiliki wanaouza huduma yao inayosaidiwa na AI kwa mteja wa kwanza anayelipa ndani ya siku 30 (utafiti wa kufuatilia)",
      "Kuridhika kwa wateja au oda za kurudia zinazoripotiwa na wamiliki",
      "Wanafunzi wanaoanza kozi nyingine ya Koach Learn ya wajasiriamali ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta yenye msaidizi wa AI wa bure",
      "Spreadsheet ya kupima muda na kuweka bei",
      "Nafasi ya kuwafikia hadi watu watatu halisi wenye tatizo hilo",
      "Kama dakika 60 hadi 75 kwa masomo na majaribio ya maarifa, pamoja na muda wa majaribio na watu halisi"
    ],
    facilitatorNotes: [
      "Waache wanafunzi waeleze tatizo walilochagua mbele ya kikundi kabla ya kujenga, na wenzao waulize linatokea mara ngapi.",
      "Waweke wanafunzi wawili wawili wawe wateja wa majaribio wa kila mmoja kama ni vigumu kupata wanaojaribu halisi, kisha wafuatilie na mtu halisi.",
      "Wakumbushe wanafunzi wasibandike taarifa binafsi za wanaojaribu kwenye AI pale wanapoweza kutumia vishika-nafasi.",
      "Kagua kila maelezo ya bidhaa kutafuta madai yasiyoweza kuthibitishwa; peleka maswali ya kodi na ya kisheria kwa mtaalamu anayefaa.",
      "Pima karatasi ya bidhaa kwa rubriki, mstari mmoja wa Bado kwa wakati."
    ]
  }
};
