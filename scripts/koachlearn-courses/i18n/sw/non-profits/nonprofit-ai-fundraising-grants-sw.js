"use strict";

// Koach Learn course (Swahili translation of non-profits/nonprofit-ai-fundraising-grants.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "nonprofit-ai-fundraising-grants-sw",
  lang: "sw",
  translationOf: "nonprofit-ai-fundraising-grants",
  category: "Non Profits",
  name: "AI kwa Kuchangisha Fedha na Kuandika Maombi ya Ruzuku",
  skills: "Kutafuta nafasi za ruzuku, Kusoma miongozo ya wafadhili, Kuandika rasimu ya maelezo ya hitaji kwa AI, Kuandika maombi kwa wachangiaji kwa AI, Kukagua na kubinafsisha kila rasimu",
  outcome: "kutafuta ruzuku inayofaa programu yako, kutumia AI kuandika rasimu ya maelezo ya hitaji na maelezo ya programu yanayofuata miongozo ya mfadhili, na kuandika barua pepe ya kuomba michango, ukikagua kila ukweli na kuweka taarifa za wachangiaji kuwa siri.",
  about: [
    "Kozi hii ni kwa viongozi wa mashirika yasiyo ya faida na ya kidini, wafanyakazi wa uchangishaji fedha na watu wa kujitolea wanaochangisha fedha na kuandika maombi ya ruzuku, mara nyingi wakiwa na muda mfupi na timu ndogo.",
    "Utajifunza wapi pa kupata ruzuku, jinsi ya kusoma miongozo ya mfadhili, jinsi ya kutumia AI kuandika rasimu za sehemu za kawaida za maombi ya ruzuku na maombi kwa wachangiaji, na jinsi ya kukagua na kubinafsisha kila rasimu ili iwe ya kweli na isikike kama wewe.",
    "Kila somo linachukua kama dakika tano na linaishia na kazi ya vitendo. AI inaandika rasimu; wewe unaamua, unakagua na unasaini. Kuna jaribio la maarifa mwishoni mwa kila sura na mtihani wa maswali 20 mwishoni mwa kozi."
  ],
  finalTask: "Chagua nafasi moja halisi ya ruzuku inayofaa programu unayoendesha. Ukitumia AI, andika rasimu ya maelezo ya hitaji (kama maneno 250) na maelezo ya programu yanayofuata miongozo ya mfadhili, ukitumia ukweli kutoka kwenye kumbukumbu zako na vyanzo ulivyokagua tu. Kisha andika rasimu ya barua pepe ya maneno 150 ya kuomba michango kwa programu hiyo hiyo, yenye vishika-nafasi badala ya taarifa za wachangiaji, na uhariri zote mbili ili zisikike kama shirika lako.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Viongozi wa mashirika yasiyo ya faida na ya kidini, wafanyakazi wa uchangishaji fedha na watu wa kujitolea wanaochangisha fedha na kuandika maombi ya ruzuku, mara nyingi wakiwa na muda mfupi na timu ndogo.",
    startingPoint: "Wanazijua vizuri programu zao na jamii yao, na wameshaandika maombi ya michango au maombi madogo ya ruzuku. Wengi hawana muda mwingi wa kutafiti na kuandika, na wachache wametumia AI kwa ruzuku.",
    gap: "Tarehe za mwisho za ruzuku na maombi ya michango zinachukua saa ambazo timu ndogo haina, na kiambatisho kimoja kilichosahaulika au dai moja la uongo linaweza kugharimu fedha na imani ya mfadhili. Wanafunzi wanahitaji kutumia AI kutafuta ruzuku zinazofaa, kusoma miongozo na kuandika rasimu haraka zaidi, huku kila ukweli ukiwa sahihi na taarifa za wachangiaji zikibaki siri.",
    constraints: [
      "Ukweli: kila namba inatoka kwenye kumbukumbu au chanzo kilichokaguliwa; AI haibuni kamwe matokeo, washirika au uidhinishaji",
      "Faragha: orodha za wachangiaji, majina na historia za michango hazitiwi katika zana za AI",
      "Ruzuku za serikali kuu ya Marekani zinahitaji usajili wa SAM.gov, ambao ni bure na unachukua muda",
      "Kauli za kodi na za kisheria zinakaguliwa na mhasibu au mwongozo rasmi wa IRS",
      "Muda: wafanyakazi na watu wa kujitolea wana shughuli nyingi, kwa hiyo kila somo ni kama dakika 5"
    ],
    prerequisites: "Kozi \"Utangulizi wa AI kwa Mashirika Yasiyo ya Kiserikali\", au uzoefu fulani wa kutumia msaidizi wa AI."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa moja ya programu zako", action: "kutafuta angalau nafasi mbili za ruzuku zinazoifaa, ukitumia Grants.gov, Candid au wafadhili wa eneo lako", standard: "ukiwa umekagua masharti ya kustahiki katika kila tangazo" },
    { id: "O2", condition: "Ukipewa miongozo ya wazi ya mfadhili", action: "kutengeneza orodha ya kukagua ya kila sehemu, kikomo, kiambatisho na tarehe ya mwisho kwa msaada wa AI", standard: "ikiwa imekaguliwa mstari kwa mstari dhidi ya hati ya mfadhili mwenyewe" },
    { id: "O3", condition: "Ukipewa ukweli wako mwenyewe na vyanzo ulivyokagua", action: "kuandika rasimu ya maelezo ya hitaji na maelezo ya programu kwa AI", standard: "kila namba ikitoka kwenye kumbukumbu zako au chanzo ulichokagua" },
    { id: "O4", condition: "Kwa programu moja", action: "kuandika barua pepe fupi ya kuomba michango yenye hadithi moja, kile mchango unachofanya na ombi moja lililo wazi", standard: "ikiwa na vishika-nafasi badala ya taarifa za wachangiaji" },
    { id: "O5", condition: "Ukipewa aina tofauti za wachangiaji", action: "kutengeneza violezo vya shukrani vyenye vishika-nafasi ambavyo unavibinafsisha mwenyewe", standard: "majina na kiasi vikiongezwa tu katika hifadhidata yako ya wachangiaji au mail merge" },
    { id: "O6", condition: "Kabla ombi la ruzuku au la michango halijatumwa", action: "kukagua kila namba, dai, ruhusa ya hadithi na kikomo cha maneno", standard: "bila matokeo, washirika au uidhinishaji uliobuniwa" }
  ],
  chapters: [
    {
      name: "Sura 1: Ruzuku kwa msaada wa AI",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kutafuta ruzuku zinazofaa dhamira yako",
          minutes: 5,
          goal: "Tafuta angalau nafasi mbili za ruzuku zinazofaa moja ya programu zako.",
          text: [
            "Ruzuku zinatoka sehemu tatu kuu: serikali (serikali kuu, ya jimbo na ya mtaa), taasisi za hisani za binafsi na za familia (foundations), na makampuni. Ruzuku za serikali kuu ya Marekani zimeorodheshwa kwenye Grants.gov. Kila moja ina tangazo la nafasi ya ufadhili, au NOFO, lenye sehemu inayosema nani anastahili.",
            "Ili kuomba ruzuku za serikali kuu, shirika lako lazima kwanza lijisajili kama taasisi kwenye SAM.gov, ambayo inakupa Unique Entity ID (UEI). Grants.gov inasema usajili ni bure. Unaweza kuchukua muda, kwa hiyo anza mapema, na usimlipe kamwe kampuni inayosema itakusajili kwa ada.",
            "Kwa taasisi za hisani, Candid (candid.org) inakuruhusu kutafuta mashirika yasiyo ya faida na wafadhili; baadhi ya huduma zinahitaji mpango wa kulipia, na maktaba nyingi za umma zinatoa nafasi ya kuitumia. Pia angalia taasisi ya hisani ya jamii yako (community foundation), biashara za eneo lako na dhehebu lako au mtandao wako wa kidini."
          ],
          steps: ["Chagua programu moja inayohitaji fedha.", "Tafuta kwenye Grants.gov nafasi za serikali kuu katika eneo hilo.", "Tafuta kwenye Candid na kwenye taasisi ya hisani ya jamii yako wafadhili wa eneo lako.", "Soma sehemu ya kustahiki ya kila nafasi.", "Andika mbili zinazofaa, pamoja na tarehe zao za mwisho."],
          words: [["Ruzuku (grant)", "fedha zinazotolewa kwa kusudi fulani ambazo hazilipwi tena."], ["NOFO", "notice of funding opportunity (tangazo la nafasi ya ufadhili): maelezo rasmi ya ruzuku ya serikali kuu ya Marekani na masharti yake."], ["UEI", "Unique Entity ID: namba ambayo SAM.gov inalipa shirika lako kwa ajili ya ufadhili wa serikali kuu."]],
          slides: [
            { title: "Ruzuku zinatoka wapi", bullets: ["Serikali: kuu, ya jimbo, ya mtaa", "Taasisi za hisani (foundations)", "Makampuni na mitandao ya kidini"] },
            { title: "Ruzuku za serikali kuu", bullets: ["Zimeorodheshwa kwenye Grants.gov", "Soma sehemu ya kustahiki ya NOFO", "Jisajili kwanza kwenye SAM.gov: ni bure"] },
            { title: "Taasisi za hisani", bullets: ["Tafuta kwenye Candid (candid.org)", "Uliza maktaba yako kuhusu kuitumia", "Angalia taasisi ya hisani ya jamii yako"] }
          ],
          sources: [
            { name: "Grants.gov: kustahiki kwa ruzuku", url: "https://www.grants.gov/learn-grants/grant-eligibility" },
            { name: "Grants.gov: usajili wa waombaji", url: "https://www.grants.gov/applicants/applicant-registration" },
            { name: "SAM.gov", url: "https://sam.gov/" },
            { name: "Candid", url: "https://candid.org/" }
          ],
          tryIt: "Chagua moja ya programu zako. Tafuta nafasi mbili za ruzuku zinazoifaa, moja ya serikali kuu au ya jimbo na moja ya taasisi ya hisani au ya eneo lako. Andika jina la kila mfadhili, tarehe ya mwisho na masharti ya kustahiki katika mstari mmoja.",
          youCanNow: "kutafuta nafasi za ruzuku zinazofaa dhamira yako na kujua usajili unaohitajika kwa ruzuku za serikali kuu.",
          quickCheck: [
            { objective: "O1", q: "Vyanzo vitatu vikuu vya ruzuku ni vipi?", options: ["Serikali, taasisi za hisani na makampuni", "Benki, kadi za mkopo na mikopo", "Wachangiaji, watu wa kujitolea na wajumbe wa bodi", "Shule, hospitali na mahakama"], answer: 0, why: "Ruzuku zinatoka serikalini, taasisi za hisani za binafsi na za familia, na makampuni." },
            { objective: "O1", q: "Unataka kutafuta taasisi za hisani kwenye Candid lakini huwezi kulipia mpango. Unaweza kujaribu nini?", options: ["Kuachana na taasisi za hisani", "Kuuliza maktaba yako ya umma, kwa kuwa nyingi zinatoa nafasi ya kuitumia", "Kumlipa mtu usiyemjua akupe orodha", "Kuiomba AI iorodheshe kila taasisi ya hisani"], answer: 1, why: "Maktaba nyingi za umma zinatoa nafasi ya kutumia huduma za kulipia za Candid." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kusoma miongozo ya mfadhili kwa msaada wa AI",
          minutes: 5,
          goal: "Geuza miongozo ya mfadhili kuwa orodha ya kukagua ya kile unachopaswa kuwasilisha.",
          text: [
            "Kila mfadhili anasema anachotaka: sehemu, vikomo vya maneno, muundo wa bajeti, viambatisho na tarehe za mwisho. Ukikosa kimoja, unaweza kuondolewa kabla mtu yeyote hajasoma kazi yako.",
            "Miongozo ni ya wazi kwa umma, kwa hiyo unaweza kuibandika kwenye msaidizi wa AI na kuuliza: \"Geuza miongozo hii ya ruzuku kuwa orodha ya kukagua: kila sehemu, kikomo chake cha maneno au kurasa, kila kiambatisho, na kila tarehe ya mwisho.\"",
            "Kisha linganisha orodha hiyo na hati asili. AI inaweza kuacha kipengele au kubadilisha tarehe. Hati ya mfadhili mwenyewe ndiyo inayoshinda kila wakati."
          ],
          steps: ["Nakili miongozo ya wazi ya mfadhili.", "Iombe AI orodha ya kukagua ya sehemu, vikomo, viambatisho na tarehe za mwisho.", "Linganisha orodha hiyo mstari kwa mstari na hati asili.", "Rekebisha chochote kilichokosekana au kisicho sahihi."],
          words: [["Miongozo (guidelines)", "masharti ya mfadhili kuhusu nini cha kuwasilisha na jinsi gani."], ["Kiambatisho", "hati ya ziada unayotuma pamoja na ombi, kama bajeti au barua ya IRS."]],
          slides: [
            { title: "Wafadhili wanakuambia wanachotaka", bullets: ["Sehemu na vikomo vya maneno", "Muundo wa bajeti na viambatisho", "Tarehe za mwisho"] },
            { title: "Iombe AI orodha ya kukagua", bullets: ["Bandika miongozo ya wazi", "Sehemu, vikomo, viambatisho, tarehe za mwisho"] },
            { title: "Ikague", bullets: ["Linganisha mstari kwa mstari", "Hati ya mfadhili inashinda kila wakati"] }
          ],
          tryIt: "Chukua miongozo ya moja ya nafasi zako mbili. Muombe msaidizi wa AI orodha ya kukagua, kisha uilinganishe na hati asili na urekebishe makosa yoyote.",
          youCanNow: "kugeuza miongozo ya mfadhili kuwa orodha sahihi ya kukagua ya vitu vya kuwasilisha.",
          quickCheck: [
            { objective: "O2", q: "Kwa nini unaweza kubandika miongozo ya mfadhili kwenye msaidizi wa AI?", options: ["Kwa sababu zana za AI ni za siri kila wakati", "Kwa sababu mfadhili alisema hivyo", "Kwa sababu miongozo ni ya wazi kwa umma", "Kwa sababu AI itawasilisha kwa niaba yako"], answer: 2, why: "Miongozo ni ya wazi kwa umma, kwa hiyo kuibandika hakutoi kitu chochote cha siri." },
            { objective: "O2", q: "Orodha ya AI inasema tarehe ya mwisho ni Machi 15, lakini miongozo inasema Machi 1. Unafanya nini?", options: ["Unatumia Machi 15", "Unachagua tarehe ya katikati", "Unaiuliza AI tena hadi ikubali", "Unatumia Machi 1, kutoka kwenye hati ya mfadhili"], answer: 3, why: "AI inaweza kubadilisha tarehe; hati ya mfadhili mwenyewe inashinda kila wakati." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kuandika rasimu ya maelezo ya hitaji na maelezo ya programu",
          minutes: 6,
          goal: "Tumia AI kuandika rasimu ya maelezo ya hitaji na maelezo ya programu kutokana na ukweli wako mwenyewe.",
          text: [
            "Maelezo ya hitaji (statement of need) yanasema tatizo gani unashughulikia, nani ameathirika, na kwa nini sasa. Maelezo ya programu (program description) yanasema utafanya nini, kwa ajili ya nani, na nini kitabadilika.",
            "Ipe AI ukweli wako, si ukurasa mtupu: \"Ukitumia ukweli huu tu, andika rasimu ya maelezo ya hitaji ya maneno 250 kwa ombi la ruzuku kwa [aina ya mfadhili]: [ukweli wako na takwimu zenye vyanzo]. Usiongeze takwimu yoyote ambayo sikukupa.\"",
            "Kisha hariri kwa makini. Ongeza hadithi halisi (kwa ruhusa, bila taarifa za kumtambulisha mtu), tumia maneno na vipaumbele vya mfadhili, na hakikisha kila namba inatoka kwenye kumbukumbu zako au chanzo ulichokagua. Wafadhili wengi huuliza kama AI ilitumika; jibu kwa ukweli."
          ],
          steps: ["Kusanya ukweli wako: unaowahudumia, namba, matokeo, takwimu zenye vyanzo.", "Iombe AI iandike rasimu kwa kutumia ukweli huo tu, ndani ya kikomo cha maneno.", "Ongeza hadithi halisi kwa ruhusa na bila taarifa za kumtambulisha mtu.", "Fuata vipaumbele na maneno ya mfadhili.", "Hakikisha kila namba inatoka kwenye kumbukumbu au chanzo."],
          words: [["Maelezo ya hitaji", "sehemu ya ombi la ruzuku inayoeleza tatizo na kwa nini ni muhimu sasa."], ["Maelezo ya programu", "sehemu inayoeleza utafanya nini na nini kitabadilika."], ["Matokeo (outcome)", "badiliko katika maisha ya watu ambalo programu yako inalenga."]],
          slides: [
            { title: "Sehemu mbili kuu", bullets: ["Hitaji: tatizo, nani, kwa nini sasa", "Programu: unafanya nini, kwa ajili ya nani, nini kinabadilika"] },
            { title: "Ipe AI ukweli wako", bullets: ["\"Ukitumia ukweli huu tu...\"", "\"Usiongeze takwimu ambazo sikukupa\"", "Baki ndani ya kikomo cha maneno"] },
            { title: "Hariri kwa makini", bullets: ["Ongeza hadithi halisi kwa ruhusa", "Tumia vipaumbele vya mfadhili", "Fuatilia chanzo cha kila namba"] },
            { title: "Kuwa mkweli", bullets: ["Jibu kwa ukweli ukiulizwa kuhusu matumizi ya AI"] }
          ],
          tryIt: "Kusanya mambo matano ya kweli kuhusu programu moja. Iombe AI iandike rasimu ya maelezo ya hitaji ya maneno 250 kwa kutumia ukweli huo tu. Weka alama kwenye kila namba na uthibitishe ilikotoka.",
          youCanNow: "kuandika kwa AI rasimu ya maelezo ya hitaji ya ombi la ruzuku kutokana na ukweli wako mwenyewe uliokaguliwa.",
          quickCheck: [
            { objective: "O3", q: "Maelezo ya programu yanasema nini?", options: ["Utafanya nini, kwa ajili ya nani, na nini kitabadilika", "Anwani za nyumbani za wajumbe wa bodi yako", "Orodha yako ya wachangiaji", "Jumla ya bajeti tu"], answer: 0, why: "Maelezo ya programu yanasema utafanya nini, kwa ajili ya nani na nini kitabadilika." },
            { objective: "O3", q: "Unataka kuongeza hadithi ya familia moja katika maelezo yako ya hitaji. Unafanya nini?", options: ["Kutumia majina yao kamili ili ionekane halisi", "Kupata ruhusa na kuondoa taarifa za kuwatambulisha", "Kuiacha AI ibuni hadithi", "Kunakili hadithi kutoka kikundi kingine"], answer: 1, why: "Hadithi halisi inahitaji ruhusa na isiwe na taarifa za kumtambulisha mtu." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Ruzuku kwa msaada wa AI",
        questions: [
          { objective: "O1", q: "Nafasi za ruzuku za serikali kuu ya Marekani zimeorodheshwa wapi?", options: ["Grants.gov", "Kikundi cha mitandao ya kijamii", "Folda ya barua taka (spam) ya barua pepe yako", "Kitabu cha namba za simu"], answer: 0, why: "Grants.gov inaorodhesha nafasi za ufadhili za serikali kuu." },
          { objective: "O1", q: "Kampuni inajitolea kukusajili kwenye SAM.gov kwa ada. Unajua nini?", options: ["Lazima uilipe", "Usajili wa SAM.gov ni bure, kwa hiyo jisajili mwenyewe", "SAM.gov si lazima", "Makampuni tu ndiyo yanayoweza kujisajili"], answer: 1, why: "Grants.gov inasema usajili ni bure." },
          { objective: "O2", q: "Orodha ya AI imeacha kiambatisho kilichopo kwenye miongozo. Kipi ni sahihi?", options: ["Orodha ya kukagua", "Hakuna kati yao", "Miongozo ya mfadhili", "Kile kilicho kifupi zaidi"], answer: 2, why: "Hati ya mfadhili mwenyewe inashinda kila wakati." },
          { objective: "O3", q: "Prompt ipi inakulinda dhidi ya takwimu za kubuni?", options: ["\"Andika maelezo ya hitaji.\"", "\"Yafanye yavutie.\"", "\"Ongeza namba zenye nguvu.\"", "\"Ukitumia ukweli huu tu, andika rasimu... Usiongeze takwimu ambazo sikukupa.\""], answer: 3, why: "Kuifunga AI kwenye ukweli wako kunazuia namba za kubuni." },
          { objective: "O3", q: "Maelezo ya hitaji yanaeleza nini?", options: ["Tatizo, nani ameathirika na kwa nini sasa", "Majina ya wajumbe wa bodi yako", "Saa zako za kazi ofisini", "Orodha ya wachangiaji"], answer: 0, why: "Hilo ndilo kusudi la sehemu ya hitaji." }
        ]
      }
    },
    {
      name: "Sura 2: Wachangiaji kwa msaada wa AI",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuandika ombi la michango kwa AI",
          minutes: 5,
          goal: "Andika rasimu ya barua pepe fupi ya kuomba michango kwa programu moja.",
          text: [
            "Ombi zuri la michango ni fupi na mahususi: mtu mmoja au hitaji moja, kile mchango unachofanya, na ombi moja lililo wazi. \"$50 inalipia wiki moja ya masomo ya ziada baada ya shule\" inafanya kazi vizuri kuliko \"tafadhali saidia kazi yetu\", lakini tu kama namba hiyo ni ya kweli.",
            "Prompt: \"Andika barua pepe ya maneno 150 ya kuomba michango kwa programu yetu ya masomo ya ziada baada ya shule. Simulia hadithi fupi kuhusu [mwanafunzi, bila jina], sema [kiasi] kinalipia nini, na umalizie kwa ombi moja lililo wazi na kiungo: [kiungo cha kuchangia]. Sauti ya upole na yenye matumaini.\"",
            "Usitie orodha za wachangiaji, majina na historia za michango katika zana ya AI. Tumia hifadhidata yako ya wachangiaji au programu yako ya barua pepe kuongeza majina baada ya rasimu kukamilika."
          ],
          steps: ["Chagua programu moja na ukweli mmoja wa kweli wa \"kile mchango unachofanya\".", "Iombe AI ombi fupi lenye hadithi, ukweli wa mchango na ombi moja.", "Kagua kila kiasi dhidi ya bajeti yako.", "Ongeza majina kupitia hifadhidata yako ya wachangiaji, si zana ya AI."],
          words: [["Ombi la michango (appeal)", "ujumbe unaowaomba watu wachangie."], ["Wito wa kuchukua hatua (call to action)", "kitu kimoja kilicho wazi unachomwomba msomaji afanye, kama \"Changia leo\"."]],
          slides: [
            { title: "Ombi zuri la michango", bullets: ["Hadithi moja au hitaji moja", "Kile mchango unachofanya: namba za kweli tu", "Ombi moja lililo wazi"] },
            { title: "Prompt", bullets: ["Maneno 150, ya upole na yenye matumaini", "Hadithi bila majina", "Vishika-nafasi [kiasi] na [kiungo cha kuchangia]"] },
            { title: "Linda faragha ya wachangiaji", bullets: ["Hakuna orodha za wachangiaji katika AI", "Ongeza majina katika hifadhidata yako ya wachangiaji"] }
          ],
          tryIt: "Andika kwa AI rasimu ya barua pepe ya maneno 150 ya kuomba michango kwa programu moja. Hakikisha kutoka kwenye bajeti yako kwamba kiasi cha \"kile mchango unachofanya\" ni cha kweli.",
          youCanNow: "kuandika kwa AI rasimu ya ombi fupi na la kweli la michango.",
          quickCheck: [
            { objective: "O4", q: "Ombi zuri la michango linapaswa kuwa na maombi mangapi?", options: ["Matano", "Hakuna", "Ombi moja lililo wazi", "Moja kwa kila programu"], answer: 2, why: "Ombi zuri lina mtu mmoja au hitaji moja, kile mchango unachofanya na ombi moja lililo wazi." },
            { objective: "O4", q: "Unataka AI iandike ombi kwa wachangiaji wako wakubwa kwa majina yao. Unafanya nini?", options: ["Kubandika orodha yako ya wachangiaji kwenye AI", "Kubandika majina na historia za michango", "Kuacha kuandika ombi", "Kuandika rasimu yenye vishika-nafasi, kisha kuongeza majina katika hifadhidata yako ya wachangiaji"], answer: 3, why: "Usitie orodha za wachangiaji katika AI; ongeza majina katika hifadhidata yako baada ya rasimu kukamilika." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kubinafsisha shukrani na taarifa za maendeleo",
          minutes: 4,
          goal: "Tumia AI kutengeneza violezo vya shukrani na vya taarifa ambavyo unavibinafsisha mwenyewe.",
          text: [
            "Wachangiaji wanaoshukuriwa haraka na kuambiwa mchango wao ulifanya nini wana uwezekano mkubwa zaidi wa kuchangia tena. AI inaweza kukusaidia kuandika violezo kwa wachangiaji tofauti: wanaochangia kwa mara ya kwanza, wanaochangia kila mwezi, watu wa kujitolea ambao pia wanachangia, na waumini waliochangia sadaka maalum.",
            "Uliza: \"Andika violezo vitatu vifupi vya shukrani: mchangiaji wa mara ya kwanza, mchangiaji wa kila mwezi, na mchangiaji mkubwa. Kila kimoja chini ya maneno 100, cha upole, chenye vishika-nafasi [jina], [kiasi] na [programu] na sentensi moja ya matokeo.\"",
            "Jaza majina na kiasi katika hifadhidata yako ya wachangiaji au mail merge. Ongeza mstari ulioandikwa kwa mkono unapoweza. Watu wanatambua wakati hakuna binadamu aliyehusika."
          ],
          steps: ["Orodhesha aina za wachangiaji unaowashukuru.", "Iombe AI kiolezo kwa kila aina, chenye vishika-nafasi.", "Ongeza sentensi moja ya kweli ya matokeo kwa kila kimoja.", "Binafsisha katika hifadhidata yako ya wachangiaji na uongeze mstari wako binafsi."],
          words: [["Kiolezo (template)", "rasimu inayoweza kutumika tena yenye nafasi za kujaza."], ["Mail merge", "zana inayojaza majina na taarifa katika barua kwa watu wengi."], ["Kuwabakiza wachangiaji (donor retention)", "kuwafanya wachangiaji waendelee kuchangia mwaka baada ya mwaka."]],
          slides: [
            { title: "Shukuru haraka, onyesha matokeo", bullets: ["Wachangiaji wanaoshukuriwa huchangia tena", "Sema mchango ulifanya nini"] },
            { title: "Violezo kwa aina ya mchangiaji", bullets: ["Mara ya kwanza, kila mwezi, mkubwa", "Chini ya maneno 100 vyenye vishika-nafasi"] },
            { title: "Ifanye iwe binafsi", bullets: ["Jaza kupitia hifadhidata yako ya wachangiaji", "Ongeza mstari ulioandikwa kwa mkono"] }
          ],
          tryIt: "Iombe AI violezo vitatu vya shukrani kwa aina tatu za wachangiaji. Ongeza sentensi moja ya kweli ya matokeo kwa kila kimoja.",
          youCanNow: "kutengeneza violezo vya shukrani kwa AI na kuvibinafsisha kwa usalama.",
          quickCheck: [
            { objective: "O5", q: "Ni wachangiaji gani wana uwezekano mkubwa zaidi wa kuchangia tena?", options: ["Wachangiaji wanaoshukuriwa haraka na kuambiwa mchango wao ulifanya nini", "Wachangiaji wasiopata jibu kamwe", "Wachangiaji wanaopata barua ile ile kama kila mtu", "Wachangiaji wanaoshukuriwa mwaka mmoja baadaye"], answer: 0, why: "Shukrani ya haraka na taarifa ya kile mchango ulichofanya huwafanya wachangiaji wachangie tena." },
            { objective: "O5", q: "Una kiolezo cha shukrani tayari kwa mchangiaji wa kila mwezi. Nini kinakifanya kionekane cha kibinadamu?", options: ["Kukituma mara mbili", "Kuongeza mstari ulioandikwa kwa mkono unapoweza", "Kutumia herufi kubwa zaidi", "Kuondoa sentensi ya matokeo"], answer: 1, why: "Watu wanatambua wakati hakuna binadamu aliyehusika; mstari ulioandikwa kwa mkono unasaidia." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kukagua, kuhariri na kubaki mkweli",
          minutes: 5,
          goal: "Fanya ukaguzi wa mwisho wa rasimu yoyote ya ruzuku au ya ombi la michango kabla haijatumwa.",
          text: [
            "Kabla kitu chochote hakijaenda kwa mfadhili au mchangiaji, fanya ukaguzi wa mwisho. Kila namba inatoka kwenye kumbukumbu. Kila dai ni la kweli. Kila hadithi ina ruhusa. Vikomo vya maneno vimefuatwa. Inasikika kama shirika lako, si kama roboti.",
            "Usiiache kamwe AI ibuni matokeo, washirika au uidhinishaji. Mfadhili anayegundua dai moja la uongo huenda asikuamini tena kamwe.",
            "Isome kwa sauti, na umwombe mfanyakazi mwenzako mmoja anayeijua programu aisome. Kwa kauli za kisheria au za kodi, kama mchango upi unapunguzwa kwenye kodi, kagua na mhasibu wako au mwongozo rasmi wa IRS."
          ],
          steps: ["Fuatilia kila namba hadi kwenye kumbukumbu au chanzo.", "Thibitisha kila hadithi ina ruhusa na haina taarifa za kumtambulisha mtu.", "Kagua vikomo vya maneno na sehemu zinazohitajika.", "Isome kwa sauti.", "Mwombe mfanyakazi mwenzako anayeijua programu aipitie."],
          words: [["Uidhinishaji (endorsement)", "kauli ya wazi ya kuunga mkono kutoka kwa mtu au kikundi."], ["Tax-deductible", "mchango ambao mchangiaji anaweza kuutoa kwenye kipato kinachotozwa kodi chini ya sheria za kodi."]],
          slides: [
            { title: "Ukaguzi wa mwisho", bullets: ["Kila namba inatoka kwenye kumbukumbu", "Kila hadithi ina ruhusa", "Vikomo vya maneno vimefuatwa"] },
            { title: "Usibuni kamwe", bullets: ["Matokeo", "Washirika", "Uidhinishaji"] },
            { title: "Hatua za mwisho", bullets: ["Isome kwa sauti", "Mfanyakazi mwenzako aipitie", "Kauli za kodi: kagua na mhasibu au IRS"] }
          ],
          sources: [
            { name: "IRS: Michango ya hisani", url: "https://www.irs.gov/charities-non-profits/charitable-contributions" }
          ],
          tryIt: "Kazi ya mwisho: kwa nafasi moja halisi ya ruzuku, kamilisha maelezo yako ya hitaji na maelezo ya programu yanayofuata miongozo, na ukamilishe ombi la michango la maneno 150 kwa programu hiyo hiyo. Fanya ukaguzi wa mwisho kwa yote mawili.",
          youCanNow: "kutoa kwa msaada wa AI sehemu za ombi la ruzuku na maombi ya michango yaliyo ya kweli na yaliyokaguliwa.",
          quickCheck: [
            { objective: "O6", q: "Njia nzuri ya kugundua rasimu inayosikika kama roboti ni ipi?", options: ["Kuirefusha", "Kuongeza takwimu zaidi", "Kuisoma kwa sauti", "Kuituma mara moja"], answer: 2, why: "Isome kwa sauti na umwombe mfanyakazi mwenzako anayeijua programu aisome." },
            { objective: "O6", q: "Rasimu yako ya ruzuku inasema mliwahudumia vijana 300, lakini hakuna kumbukumbu inayoonyesha hivyo. Unafanya nini?", options: ["Kuiacha; inasikika vizuri", "Kuipunguza kuwa 250", "Kuiuliza AI ilipata wapi namba hiyo", "Kuiondoa au kutumia namba kutoka kwenye kumbukumbu zako"], answer: 3, why: "Kila namba lazima itoke kwenye kumbukumbu au chanzo." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Wachangiaji kwa msaada wa AI",
        questions: [
          { objective: "O4", q: "Mstari upi wa ombi ni wenye nguvu zaidi, kama ni wa kweli?", options: ["\"Tafadhali saidia kazi yetu.\"", "\"$50 inalipia wiki moja ya masomo ya ziada baada ya shule.\"", "\"Tunahitaji fedha.\"", "\"Changia kama unaweza.\""], answer: 1, why: "Matokeo mahususi na ya kweli yanawasaidia wachangiaji kuona mchango wao unafanya nini." },
          { objective: "O5", q: "Unaongeza wapi majina ya wachangiaji kwenye barua za shukrani?", options: ["Kubandika orodha ya wachangiaji kwenye AI", "Kwenye mitandao ya kijamii", "Katika hifadhidata yako ya wachangiaji au mail merge", "Hakuna mahali"], answer: 2, why: "Kuweka taarifa za wachangiaji katika mfumo wako mwenyewe kunalinda faragha." },
          { objective: "O6", q: "AI inaongeza mshirika ambaye hamfanyi kazi naye. Unafanya nini?", options: ["Kumwacha, inasikika vizuri", "Kumuuliza mshirika baadaye", "Kupunguza ukubwa wake", "Kumwondoa"], answer: 3, why: "Usiiache kamwe AI ibuni washirika au uidhinishaji." },
          { objective: "O6", q: "Rasimu inasema michango inapunguzwa kwenye kodi (tax-deductible). Unakagua wapi?", options: ["Kwa mhasibu au mwongozo rasmi wa IRS", "Katika mazungumzo mengine ya AI", "Kwa mchangiaji", "Hakuna mahali"], answer: 0, why: "Kauli za kodi zinahitaji chanzo rasmi au mtaalamu." },
          { objective: "O6", q: "Kwa nini umwombe mfanyakazi mwenzako anayeijua programu asome rasimu?", options: ["Ili kugawana lawama", "Anaweza kugundua taarifa za uongo au zilizokosekana", "Ili kuirefusha", "Haina manufaa"], answer: 1, why: "Mtu anayeijua programu anaona makosa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI kwa Kuchangisha Fedha na Kuandika Maombi ya Ruzuku",
    questions: [
      { objective: "O1", q: "Ruzuku ni:", options: ["Mkopo", "Bili ya kodi", "Fedha kwa kusudi fulani ambazo hazilipwi tena", "Orodha ya wachangiaji"], answer: 2, why: "Ruzuku hazilipwi tena." },
      { objective: "O1", q: "NOFO ni kifupi cha:", options: ["New office for operations", "Nonprofit open forum", "Notice of financial obligation", "Notice of funding opportunity"], answer: 3, why: "NOFO inaeleza ruzuku ya serikali kuu na masharti yake." },
      { objective: "O1", q: "Kabla ya kuomba ruzuku ya serikali kuu, shirika lako lazima:", options: ["Lijisajili kama taasisi kwenye SAM.gov", "Linunue leseni maalum", "Liajiri mshawishi (lobbyist)", "Liilipe Grants.gov ada"], answer: 0, why: "Grants.gov inahitaji usajili wa SAM.gov kwanza." },
      { objective: "O1", q: "SAM.gov inalipa shirika lako:", options: ["Kompyuta ya bure", "Unique Entity ID (UEI)", "Tuzo ya ruzuku", "Marejesho ya kodi"], answer: 1, why: "UEI inalitambulisha shirika lako kwa ufadhili wa serikali kuu." },
      { objective: "O1", q: "Ni mahali gani pazuri pa kutafuta wafadhili wa taasisi za hisani?", options: ["App ya hali ya hewa", "Tovuti ya manunuzi", "Candid", "Mchezo"], answer: 2, why: "Candid inaorodhesha mashirika yasiyo ya faida na wafadhili." },
      { objective: "O1", q: "Katika NOFO, unapata wapi nani anaruhusiwa kuomba?", options: ["Kwenye nembo", "Chini ya ukurasa", "Kwenye rangi ya jalada", "Katika sehemu ya kustahiki"], answer: 3, why: "Kila NOFO ina sehemu ya kustahiki." },
      { objective: "O2", q: "Kwa nini ugeuze miongozo kuwa orodha ya kukagua?", options: ["Kukosa kitu kimoja kunaweza kukuondoa", "Wafadhili wanapenda orodha", "Inarefusha ombi la ruzuku", "Inatakiwa na sheria"], answer: 0, why: "Orodha ya kukagua inakusaidia kuwasilisha kila kitu." },
      { objective: "O2", q: "Orodha ya AI na miongozo ya mfadhili havikubaliani. Amini:", options: ["AI", "Miongozo ya mfadhili", "Kile kilicho rahisi zaidi", "Hakuna kati yao, bahatisha"], answer: 1, why: "Hati ya mfadhili mwenyewe inashinda." },
      { objective: "O3", q: "Njia bora ya kuanza maelezo ya hitaji kwa AI ni:", options: ["Kuiomba ibuni namba zenye nguvu", "Kutoipa kitu", "Kuipa ukweli wako na kuiambia isiongeze takwimu", "Kubandika mafaili ya wateja"], answer: 2, why: "Ukweli wako unaifanya rasimu iwe ya kweli." },
      { objective: "O3", q: "Maelezo ya programu yanaeleza:", options: ["Namba yako ya kodi tu", "Hali ya hewa", "Nani yuko kwenye bodi", "Utafanya nini, kwa ajili ya nani, na nini kitabadilika"], answer: 3, why: "Hiyo ndiyo kazi yake katika ombi la ruzuku." },
      { objective: "O3", q: "Unataka kuweka hadithi ya mteja. Unahitaji:", options: ["Ruhusa na kutokuwa na taarifa za kumtambulisha", "Jina lake kamili na anwani", "Hakuna kitu", "Picha ya kitambulisho chake"], answer: 0, why: "Hadithi zinahitaji ridhaa na faragha." },
      { objective: "O3", q: "Mfadhili anauliza kama AI ilitumika. Unapaswa:", options: ["Kusema hapana", "Kujibu kwa ukweli", "Kupuuza swali", "Kuiomba AI ijibu"], answer: 1, why: "Ukweli unalinda imani." },
      { objective: "O4", q: "Ombi lenye nguvu la michango lina:", options: ["Maombi kumi", "Hakuna ombi", "Hadithi moja, kile mchango unachofanya, na ombi moja lililo wazi", "Ripoti ndefu ya mwaka"], answer: 2, why: "Fupi na mahususi inafanya kazi vizuri zaidi." },
      { objective: "O4", q: "Wito wa kuchukua hatua (call to action) ni nini?", options: ["Simu", "Taarifa ya kisheria", "Kura ya bodi", "Kitu kimoja kilicho wazi unachomwomba msomaji afanye"], answer: 3, why: "Kama \"Changia leo\"." },
      { objective: "O4", q: "Kipi hakipaswi KAMWE kutiwa katika zana ya AI?", options: ["Orodha yako ya wachangiaji yenye historia za michango", "\"Ifanye iwe ya upole zaidi\"", "Jina la wazi la programu", "Kikomo cha maneno"], answer: 0, why: "Taarifa za wachangiaji ni siri." },
      { objective: "O5", q: "Kwa nini utengeneze violezo vya shukrani kwa kila aina ya mchangiaji?", options: ["Ili kuokoa karatasi", "Wachangiaji tofauti wanahitaji ujumbe tofauti", "Wachangiaji wanataka hivyo", "AI haiwezi kuandika kimoja"], answer: 1, why: "Wachangiaji wa mara ya kwanza na wa kila mwezi wana uhusiano tofauti na shirika." },
      { objective: "O5", q: "Mail merge ni:", options: ["Kuungana kwa mashirika mawili yasiyo ya faida", "Ada ya posta", "Zana inayojaza majina katika barua kwa watu wengi", "Modeli ya AI"], answer: 2, why: "Inabinafsisha barua nje ya zana ya AI." },
      { objective: "O5", q: "Nini kinaifanya shukrani ionekane ya kibinadamu?", options: ["Vishika-nafasi zaidi", "Kiolezo kirefu zaidi", "Kuituma kwa kuchelewa", "Mstari binafsi ulioandikwa kwa mkono"], answer: 3, why: "Watu wanagundua mguso halisi wa binadamu." },
      { objective: "O6", q: "Katika ukaguzi wa mwisho, kila namba lazima:", options: ["Itoke kwenye kumbukumbu au chanzo", "Ikadiriwe juu", "Iwe kubwa", "Itoke kwa AI"], answer: 0, why: "Namba za kweli zinalinda imani." },
      { objective: "O6", q: "Mfadhili akigundua dai moja la uongo:", options: ["Hakuna kinachotokea", "Huenda asikuamini tena kamwe", "Anatoa zaidi", "Ni jambo la kawaida"], answer: 1, why: "Imani ni ngumu kujenga upya." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi amepiga hatua kiasi gani
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [2, 6, 8, 12, 15, 18] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Ruzuku inayofaa", objective: "O1", notYet: "Ruzuku haifai programu, au masharti ya kustahiki hayakukaguliwa.", meets: "Nafasi moja halisi inayofaa programu, na masharti ya kustahiki yamekaguliwa.", exceeds: "Anataja nafasi ya pili na tarehe ya mwisho ya kila moja." },
      { name: "Inafuata miongozo", objective: "O2", notYet: "Sehemu, kikomo au kiambatisho kinachohitajika kimekosekana.", meets: "Rasimu zinafuata orodha ya kukagua ya mfadhili, sehemu zake na vikomo vya maneno.", exceeds: "Orodha ya kukagua ilikaguliwa mstari kwa mstari dhidi ya hati ya mfadhili." },
      { name: "Hitaji na programu kutokana na ukweli", objective: "O3", notYet: "Takwimu au matokeo hayawezi kufuatiliwa hadi kumbukumbu au chanzo.", meets: "Maelezo ya hitaji ya kama maneno 250 na maelezo ya programu yanayotumia ukweli uliokaguliwa tu.", exceeds: "Inatumia maneno na vipaumbele vya mfadhili na ina hadithi iliyopata ruhusa." },
      { name: "Ombi la michango", objective: "O4", notYet: "Hakuna ombi lililo wazi, au taarifa za wachangiaji zimo kwenye prompt.", meets: "Kama maneno 150 yenye hadithi moja, kile mchango unachofanya na ombi moja lililo wazi, kwa kutumia vishika-nafasi.", exceeds: "Kiasi na kile kinacholipia vinatoka kwenye gharama halisi za programu." },
      { name: "Ya kweli na kwa sauti yetu", objective: "O6", notYet: "Bado kuna matokeo, mshirika au uidhinishaji uliobuniwa.", meets: "Kila dai ni la kweli na vipande vyote viwili vinasikika kama shirika.", exceeds: "Mfanyakazi mwenzake anayeijua programu ameisoma na kuikubali." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Maombi ya ruzuku yaliyowasilishwa ndani ya siku 90 (utafiti wa kufuatilia)",
      "Ruzuku zilizotolewa na fedha za michango zilizopatikana, kama zilivyoripotiwa na mashirika",
      "Wanafunzi wanaoanza kozi nyingine ya Koach Learn ya mashirika yasiyo ya faida ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta yenye intaneti",
      "Msaidizi wa AI wa bure",
      "Ukweli na kumbukumbu za programu yako, na miongozo ya wazi ya mfadhili mmoja",
      "Kama dakika 60 kwa jumla, pamoja na muda wa kuhariri rasimu"
    ],
    facilitatorNotes: [
      "Waombe wanafunzi walete nafasi moja halisi ya ruzuku na namba za programu yao kwenye kipindi.",
      "Wakumbushe wanafunzi wasibandike kamwe orodha za wachangiaji, majina au historia za michango katika zana za AI.",
      "Waonye wanafunzi kuhusu makampuni yanayotoza ada ili kuwasajili kwenye SAM.gov; usajili ni bure.",
      "Waweke wanafunzi wawili wawili wasomeane rasimu kwa sauti na wafuatilie chanzo cha kila namba.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
