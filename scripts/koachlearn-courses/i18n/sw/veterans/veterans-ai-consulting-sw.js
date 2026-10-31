"use strict";

// Koach Learn course (Swahili translation of veterans/veterans-ai-consulting.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "veterans-ai-consulting-sw",
  lang: "sw",
  translationOf: "veterans-ai-consulting",
  category: "Veterans (military)",
  name: "Fursa za Ushauri wa Kitaalamu kwa Kutumia AI",
  skills: "Kugeuza utaalamu kuwa huduma ya ushauri, Kupata msaada wa bure wa biashara kwa maveterani, Kuandika ujumbe wa kuwafikia wateja, Kuandika pendekezo kwa AI, Kulinda taarifa za mteja",
  outcome: "kugeuza utaalamu wako wa jeshi kuwa huduma ya ushauri iliyo wazi na kuandika pendekezo la ukurasa mmoja kwa mteja kwa msaada wa msaidizi wa AI, ukijua wapi pa kupata msaada rasmi wa bure wa kuanzisha biashara.",
  about: [
    "Mshauri (consultant) analipwa ili kutatua tatizo maalum la mteja. Maveterani wana ujuzi ambao biashara ndogo nyingi, mashirika yasiyo ya faida na wakandarasi hawana: kupanga, usalama, usafirishaji na ugavi (logistics), mafunzo, ulinzi na kuongoza timu. Sasa zana za AI zinawasaidia washauri kutafiti, kuandika na kukamilisha kazi haraka zaidi.",
    "Katika kozi hii utachagua huduma kulingana na unachokijua, utajifunza wapi maveterani wanapata msaada rasmi wa bure wa biashara, utaandika ujumbe wako wa kwanza wa kuwafikia wateja, na utatumia msaidizi wa AI kuandaa rasimu ya pendekezo la ukurasa mmoja. Pia utajifunza kanuni zinazolinda taarifa za mteja.",
    "Kila somo linachukua kama dakika tano. Jaribio la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi. Kozi hii haitoi ushauri wa kisheria wala wa kodi: kwa kuanzisha biashara, tumia ofisi rasmi zilizotajwa hapa au mtaalamu mwenye sifa."
  ],
  finalTask: "Andika pendekezo la ushauri la ukurasa mmoja kwa mteja wa hapa kwenu, wa kubuni au halisi: tatizo, utakachofanya, atakachopata, ratiba, bei yako (umeiweka wewe, si AI), na jinsi utakavyolinda taarifa zake. Andaa rasimu kwa msaidizi wa AI, kisha uihariri ili kila dai liwe la kweli, na uandike ofisi moja rasmi ya biashara ya bure utakayowasiliana nayo baadaye.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Maveterani wanaotaka kupata pesa kama washauri, wakitumia ujuzi kama kupanga, usalama, usafirishaji na ugavi, mafunzo, ulinzi na kuongoza timu, kwa biashara ndogo, mashirika yasiyo ya faida na wakandarasi.",
    startingPoint: "Wana utaalamu mkubwa na uzoefu wa kutoa taarifa fupi (briefing) na kuandika amri, na wanaweza kutumia kompyuta. Wengi hawajafafanua huduma ya ushauri, hawajawasiliana na wateja, hawajaweka bei ya kazi wala kuandika pendekezo, na wachache wametumia AI kwa maandishi ya biashara.",
    gap: "Utaalamu unalipa tu unapotolewa wazi kwa mteja anayeuhitaji. Wanafunzi wanahitaji kugeuza ujuzi wao kuwa huduma iliyo wazi, kuwafikia wateja wa kwanza kwa uaminifu, kuandaa pendekezo kwa AI ambalo wanaliwekea bei na kulikagua wenyewe, kulinda taarifa za mteja, na kutumia msaada rasmi wa bure wa biashara.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; hakuna ujuzi wa biashara unaodhaniwa",
      "Vifaa: kompyuta au simu janja yenye intaneti na msaidizi wa AI wa bure",
      "Faragha: hakuna taarifa za siri za mteja katika zana za AI za umma isipokuwa mteja amekubali na zana imeidhinishwa; vishika-nafasi katika mazoezi",
      "Uaminifu: kila dai katika ujumbe na mapendekezo lazima liwe la kweli; mwanafunzi, si AI, ndiye anayeweka bei",
      "Leseni, kodi na usajili: ofisi ya biashara ya jimbo, irs.gov au mshauri wa VBOC"
    ],
    prerequisites: "Hakuna. Kozi \"AI kwa Tija na Uongozi\" ni kozi saidizi yenye manufaa."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa mifano ya kazi za ushauri", action: "kueleza mshauri anafanya nini na njia tatu ambazo AI inawasaidia washauri", standard: "ukitaja angalau matatizo mawili ya wateja yanayolingana na ujuzi wako wa jeshi" },
    { id: "O2", condition: "Ukitumia utaalamu wako wa jeshi", action: "kuandika huduma yako kwa sentensi moja inayotaja unayemsaidia, tatizo na matokeo", standard: "ukiwa umeijaribu kwa kumuuliza angalau mtu mmoja katika fani hiyo" },
    { id: "O3", condition: "Unapopanga biashara yako", action: "kutambua msaada rasmi wa bure wa biashara kwa maveterani ulio karibu nawe na kile kila ofisi inachofanya", standard: "ukiwa na mawasiliano ya Veterans Business Outreach Center iliyo karibu zaidi na swali moja la kuuliza" },
    { id: "O4", condition: "Kwa huduma yako", action: "kuandika ujumbe mfupi na wa kweli wa kumwomba mteja mtarajiwa simu ya dakika 15", standard: "kila dai likiwa la kweli na ukiwa na watu watatu wa kuwatumia" },
    { id: "O5", condition: "Ukipewa huduma yako na tatizo la mteja", action: "kuandaa rasimu ya pendekezo la ukurasa mmoja kwa AI na kulihariri hadi liwe sahihi", standard: "likiwa na wigo wa kazi ulio wazi, ratiba na bei uliyoiweka mwenyewe" },
    { id: "O6", condition: "Unapotumia AI kwenye kazi ya mteja", action: "kuandika kanuni zinazolinda taarifa za mteja na kukagua kazi ya AI kabla ya kuikabidhi", standard: "ukiwa na sentensi ya matumizi ya AI katika pendekezo na bila data ya mteja katika zana za umma bila ruhusa" }
  ],
  chapters: [
    {
      name: "Sura 1: Kujenga huduma yako ya ushauri",
      lessons: [
        {
          objectives: ["O1"],
          title: "Washauri wanafanya nini na AI inaingia wapi",
          minutes: 4,
          goal: "Eleza mshauri anafanya nini na njia tatu ambazo AI inamsaidia.",
          text: [
            "Mshauri ni mtaalamu wa nje ambaye mteja anamwajiri kwa kazi maalum, kwa muda maalum. Mifano: kuanzisha mpango wa usalama kwa kampuni ya ujenzi, kuandaa mpango wa mafunzo kwa wanaojitolea wa shirika lisilo la faida, au kupanga mpangilio wa ghala.",
            "AI inawasaidia washauri kutafiti jambo haraka, kuandaa rasimu za nyaraka kama mapendekezo na ripoti, na kugeuza maelezo kuwa orodha za kukagua au slaidi. Haichukui nafasi ya uzoefu wako: wateja wanalipia busara yako.",
            "Ushauri wa AI pia unajumuisha kusaidia mashirika madogo kuanza kutumia zana za AI kwa usalama, kwa mfano kuandika sera rahisi ya matumizi ya AI au kuwafundisha wafanyakazi. Tabia zako za jeshi za taratibu za kawaida na mafunzo yaliyo wazi zinafaa sana hapa."
          ],
          words: [["Mshauri (consultant)", "mtaalamu wa nje anayelipwa kutatua tatizo maalum la mteja."], ["Mteja", "mtu au shirika linalolipia huduma yako."], ["Kazi ya kukabidhi (deliverable)", "kitu unachokabidhi mwishoni, kama mpango, ripoti au mafunzo."]],
          slides: [
            { title: "Mshauri ni...", bullets: ["Mtaalamu wa nje", "Anaajiriwa kwa kazi maalum, kwa muda maalum", "Analipwa kwa busara na matokeo"] },
            { title: "Jinsi AI inavyosaidia", bullets: ["Utafiti wa haraka", "Kuandaa rasimu za mapendekezo na ripoti", "Kugeuza maelezo kuwa orodha za kukagua au slaidi"] },
            { title: "Kazi za ushauri wa AI", bullets: ["Kusaidia vikundi vidogo kutumia AI kwa usalama", "Kuandika sera rahisi za matumizi ya AI", "Kuwafundisha wafanyakazi"] }
          ],
          tryIt: "Muulize msaidizi wa AI: \"Ni matatizo gani ambayo biashara ndogo zilizo karibu nami mara nyingi huajiri washauri kuyatatua?\" Zungushia mawili yanayolingana na ulichofanya jeshini.",
          youCanNow: "kueleza mshauri anafanya nini na jinsi AI inavyosaidia kazi hiyo.",
          quickCheck: [
            { objective: "O1", q: "Kazi ya kukabidhi (deliverable) ni nini?", options: ["Unachokabidhi mwishoni, kama mpango au ripoti", "Malipo ya mteja", "Kadi yako ya biashara", "Simu ya kwanza"], answer: 0, why: "Kazi ya kukabidhi ni kazi iliyokamilika ambayo mteja anaipokea." },
            { objective: "O1", q: "AI inakupa orodha ya matatizo ambayo biashara ndogo huajiri washauri kuyatatua. Unafanya nini?", options: ["Unajitolea kuyatatua yote", "Unapuuza orodha", "Unazungushia yale yanayolingana na ulichofanya jeshini", "Unachagua linalolipa zaidi, hata kama huna ujuzi nalo"], answer: 2, why: "Huduma yako inapaswa kulinganisha matatizo halisi na ujuzi ulio nao tayari." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kugeuza utaalamu wako kuwa huduma",
          minutes: 5,
          goal: "Andika huduma yako kwa sentensi moja: unayemsaidia, tatizo na matokeo.",
          text: [
            "Huduma iliyo wazi ina sehemu tatu: unamsaidia nani, unatatua tatizo gani, na wanapata matokeo gani. Kwa mfano: \"Ninasaidia kampuni ndogo za ujenzi kuandaa mpango wa usalama ulioandikwa ili zifaulu ukaguzi na kupunguza majeraha.\"",
            "Anza na kile ulichofanya mara nyingi na vizuri ukiwa jeshini, kisha tafuta makundi ya kiraia yenye tatizo hilo hilo. Aliyekuwa NCO wa usafirishaji na ugavi anaweza kusaidia wasambazaji wadogo kupanga bidhaa zao. Aliyekuwa mkufunzi anaweza kusaidia mashirika yasiyo ya faida kuwapokea na kuwaandaa wanaojitolea.",
            "Tumia msaidizi wa AI kutafuta mawazo, kisha jaribu huduma yako kwa kuwauliza watu wawili au watatu halisi katika fani hiyo: \"Je, hili ni tatizo ambalo ungelipa ili litatuliwe?\""
          ],
          steps: ["Orodhesha mambo matatu uliyofanya mara nyingi na vizuri jeshini.", "Muulize msaidizi wa AI: \"Ni biashara gani za kiraia zenye tatizo hili?\"", "Andika: \"Ninasaidia [nani] [kutatua nini] ili [matokeo].\"", "Waulize watu wawili au watatu katika fani hiyo kama wangelipia."],
          words: [["Huduma (offer)", "maelezo yaliyo wazi ya unayemsaidia, kwa jambo gani, na matokeo."], ["Kundi maalum (niche)", "kundi dogo na mahususi la wateja unaolilenga."]],
          slides: [
            { title: "Sehemu tatu za huduma", bullets: ["Unayemsaidia", "Tatizo unalotatua", "Matokeo wanayopata"] },
            { title: "Anza na kazi yako ya jeshi", bullets: ["Ulichofanya mara nyingi na vizuri", "Ni raia gani wenye tatizo hilo hilo?"] },
            { title: "Ijaribu kwa watu halisi", bullets: ["\"Je, hili ni tatizo ambalo ungelipa ili litatuliwe?\"", "Waulize watu wawili au watatu katika fani hiyo"] }
          ],
          tryIt: "Andika huduma yako kwa sentensi moja ukitumia \"Ninasaidia [nani] [kutatua nini] ili [matokeo].\" Muombe msaidizi wa AI aifanye iwe wazi zaidi, kisha umsomee mtu mmoja katika fani hiyo.",
          youCanNow: "kuandika huduma ya ushauri iliyo wazi kulingana na utaalamu wako wa jeshi.",
          quickCheck: [
            { objective: "O2", q: "Kundi maalum (niche) ni nini?", options: ["Kila mteja anayewezekana", "Aina ya mkataba", "Mpango wa bure wa serikali", "Kundi dogo na mahususi la wateja unaolilenga"], answer: 3, why: "Kundi maalum ni kundi mahususi unalolihudumia, na linaifanya huduma yako iwe wazi." },
            { objective: "O2", q: "Uliandika \"Ninasaidia biashara na mambo fulani.\" Unafanya nini?", options: ["Unaitumia kama ilivyo", "Unaiandika upya kama \"Ninasaidia [nani] [kutatua nini] ili [matokeo]\"", "Unairefusha kwa maneno mengi ya kuvutia", "Unaondoa matokeo"], answer: 1, why: "Huduma iliyo wazi inataja unayemsaidia, tatizo na matokeo." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Msaada rasmi wa bure kwa maveterani wenye biashara",
          minutes: 5,
          goal: "Tafuta msaada wa bure wa biashara kwa maveterani ulio karibu nawe na ujue kila ofisi inafanya nini.",
          text: [
            "Shirika la Marekani la Biashara Ndogo (SBA) linaendesha Boots to Business, sehemu ya Transition Assistance Program (mpango wa jeshi wa kusaidia kuhamia maisha ya kiraia), na Boots to Business Reboot kwa maveterani wa vipindi vyote. Veterans Business Outreach Centers (VBOCs) zinatoa warsha za mpango wa biashara, ushauri wa karibu (mentoring) na mafunzo.",
            "Ukitaka mikataba ya serikali, SBA inathibitisha biashara ndogo zinazomilikiwa na maveterani na zile zinazomilikiwa na maveterani wenye ulemavu uliotokana na huduma, kupitia mpango wake wa Veteran Small Business Certification, unaoitwa VetCert, kwenye certifications.sba.gov. Tulipokagua mwezi Oktoba 2026, VA ilisema biashara zinazofanya kazi na VA lazima ziwe zimesajiliwa kupitia SBA.",
            "VA pia inaorodhesha mafunzo ya ujasiriamali kama njia moja ya kutumia baadhi ya mafao ya GI Bill. Majina ya biashara, leseni na kodi zinapangwa na jimbo lako na IRS, kwa hiyo kagua ofisi ya biashara ya jimbo lako na irs.gov, au muulize mshauri wa VBOC."
          ],
          steps: ["Fungua ukurasa wa SBA wa biashara zinazomilikiwa na maveterani.", "Tafuta Veterans Business Outreach Center iliyo karibu nawe zaidi.", "Angalia tarehe za Boots to Business au Reboot.", "Ukitaka kazi za serikali, soma kuhusu VetCert kwenye certifications.sba.gov.", "Kagua ofisi ya biashara ya jimbo lako kuhusu leseni na usajili."],
          words: [["SBA", "U.S. Small Business Administration, shirika la serikali kuu ya Marekani linalosaidia biashara ndogo."], ["VBOC", "Veterans Business Outreach Center: vituo vinavyofadhiliwa na SBA vinavyosaidia maveterani wenye biashara."], ["VetCert", "uthibitisho wa SBA kwa biashara ndogo zinazomilikiwa na maveterani na maveterani wenye ulemavu uliotokana na huduma."]],
          slides: [
            { title: "Msaada wa bure wa SBA kwa maveterani", bullets: ["Boots to Business (sehemu ya TAP)", "Boots to Business Reboot, kipindi chochote", "Veterans Business Outreach Centers"] },
            { title: "Mikataba ya serikali", bullets: ["VetCert kwenye certifications.sba.gov", "Kwa biashara za maveterani na za maveterani wenye ulemavu wa huduma", "Kufanya kazi na VA kunahitaji usajili wa SBA"] },
            { title: "Kanuni za kuanzisha biashara", bullets: ["Majina, leseni na kodi: jimbo lako na IRS", "Muulize mshauri wa VBOC", "Usitegemee AI peke yake kwa ushauri wa kisheria au wa kodi"] }
          ],
          sources: [
            { name: "SBA: Biashara zinazomilikiwa na maveterani", url: "https://www.sba.gov/business-guide/grow-your-business/veteran-owned-businesses" },
            { name: "SBA: Msaada wa mikataba kwa maveterani (VetCert)", url: "https://www.sba.gov/federal-contracting/contracting-assistance-programs/veteran-contracting-assistance-programs" },
            { name: "VA: Msaada kwa biashara ndogo zinazomilikiwa na maveterani", url: "https://www.va.gov/careers-employment/veteran-owned-business-support/" },
            { name: "VA: Jinsi ya kutumia mafao yako ya GI Bill", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/" }
          ],
          tryIt: "Tafuta Veterans Business Outreach Center iliyo karibu nawe zaidi kwenye sba.gov. Andika jina lake, jinsi ya kuwasiliana nayo, na swali moja utakalouliza kuhusu kuanzisha biashara ya ushauri.",
          youCanNow: "kupata msaada rasmi wa bure wa kuanzisha biashara ya ushauri inayomilikiwa na veterani.",
          quickCheck: [
            { objective: "O3", q: "Veterans Business Outreach Center inatoa nini?", options: ["Mikopo bila makaratasi", "Matangazo ya kulipia kwa biashara yako", "Msaada wa bure wa mpango wa biashara na ushauri wa karibu kwa maveterani", "Mteja wa kwanza aliyehakikishwa"], answer: 2, why: "VBOC zinawapa maveterani msaada wa bure wa kupanga biashara na ushauri wa karibu." },
            { objective: "O3", q: "Una swali kuhusu leseni ya biashara unayohitaji. Unalipeleka wapi?", options: ["Ofisi ya biashara ya jimbo lako, irs.gov au mshauri wa VBOC", "Kwa msaidizi wa AI peke yake", "Kikundi cha mitandao ya kijamii", "Kwa mshindani wako"], answer: 0, why: "Maswali ya leseni na kodi yanaenda kwa ofisi rasmi au washauri, si kwa AI." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kujenga huduma yako ya ushauri",
        questions: [
          { objective: "O1", q: "Mshauri ni nani?", options: ["Mkaguzi wa serikali", "Mfanyakazi wa kudumu wa maisha yote", "Mtaalamu wa nje anayelipwa kutatua tatizo maalum", "Muuzaji wa bidhaa moja"], answer: 2, why: "Washauri wanaajiriwa kwa kazi maalum na kwa muda maalum." },
          { objective: "O1", q: "Wateja wanamlipa mshauri hasa kwa nini?", options: ["Busara yake na matokeo", "Usajili wake wa AI", "Sare yake", "Kasi yake ya kuandika"], answer: 0, why: "AI inasaidia, lakini wateja wanalipia utaalamu." },
          { objective: "O2", q: "Ipi ni huduma iliyo wazi?", options: ["\"Nipigie.\"", "\"Ninafanya mambo fulani.\"", "\"Mimi ni veterani.\"", "\"Ninasaidia kampuni ndogo za ujenzi kuandaa mpango wa usalama ili zifaulu ukaguzi.\""], answer: 3, why: "Inataja nani, tatizo na matokeo." },
          { objective: "O2", q: "Unajaribuje kama huduma yako ni ya kweli?", options: ["Unauliza AI peke yake", "Unawauliza watu katika fani hiyo kama wangelipa ili tatizo litatuliwe", "Unakisia", "Unachapisha kadi za biashara kwanza"], answer: 1, why: "Wanunuzi halisi wanakuambia kama tatizo linastahili kulipiwa." },
          { objective: "O3", q: "Maveterani wanaweza kupata wapi msaada wa bure wa mpango wa biashara na ushauri wa karibu?", options: ["Kwa muuzaji wa magari", "Veterans Business Outreach Center", "Tangazo la mitandao ya kijamii", "Kikundi cha sarafu za kidijitali (crypto)"], answer: 1, why: "VBOC ni vituo vinavyofadhiliwa na SBA kwa maveterani wenye biashara." }
        ]
      }
    },
    {
      name: "Sura 2: Kupata kazi na kuifanya",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuandika ujumbe wako wa kwanza wa kuwafikia wateja",
          minutes: 5,
          goal: "Andika ujumbe mfupi na wa kweli wa kumwomba mteja mtarajiwa simu ya dakika 15.",
          text: [
            "Wateja wako wa kwanza mara nyingi wanatoka kwa watu wanaokujua tayari: viongozi wako wa zamani, vikundi vya maveterani, vikundi vya biashara vya hapa kwenu na mashirika yasiyo ya faida unayojitolea.",
            "Ujumbe mzuri wa kuwafikia wateja ni mfupi: wewe ni nani, tatizo unalosaidia, ushahidi mmoja (matokeo kutoka jeshini au kazi ya zamani), na ombi dogo, kama simu ya dakika 15.",
            "AI inaweza kuandaa rasimu, lakini uifanye isikike kama wewe na uondoe chochote kisicho cha kweli. Usidai kamwe cheti, kibali cha usalama (clearance) au matokeo usiyo nayo."
          ],
          steps: ["Orodhesha watu au vikundi kumi wanaokujua au walio katika fani yako.", "Muombe msaidizi wa AI ujumbe wa sentensi 5: wewe ni nani, tatizo, ushahidi mmoja, simu ya dakika 15.", "Uhariri ili usikike kama wewe.", "Hakikisha kila dai ni la kweli.", "Watumie watu watatu."],
          words: [["Kuwafikia wateja (outreach)", "kuwasiliana na wateja watarajiwa ili kuanzisha mazungumzo."], ["Ushahidi", "matokeo halisi yanayoonyesha kuwa unaweza kufanya kazi hiyo."]],
          slides: [
            { title: "Anza na watu wanaokujua", bullets: ["Viongozi wa zamani na vikundi vya maveterani", "Vikundi vya biashara vya hapa kwenu", "Mashirika yasiyo ya faida unayojitolea"] },
            { title: "Ujumbe mfupi", bullets: ["Wewe ni nani na tatizo unalotatua", "Ushahidi mmoja wa kweli", "Ombi dogo: simu ya dakika 15"] },
            { title: "Uwe mkweli", bullets: ["Ufanye usikike kama wewe", "Hakuna madai usiyoweza kuthibitisha"] }
          ],
          tryIt: "Muombe msaidizi wa AI aandae rasimu ya ujumbe wa sentensi tano wa kuwafikia wateja kwa huduma yako. Uhariri ili usikike kama wewe na kila dai liwe la kweli, kisha andika majina ya watu watatu utakaowatumia.",
          youCanNow: "kuandika ujumbe wa kweli wa kuwafikia wateja unaomwomba mteja mtarajiwa simu fupi.",
          quickCheck: [
            { objective: "O4", q: "Ombi dogo zuri katika ujumbe wa kuwafikia wateja ni lipi?", options: ["Kusaini mkataba wa mwaka mmoja leo", "Simu ya dakika 15", "Kulipa amana sasa", "Kutoa rekodi zao za fedha"], answer: 1, why: "Ombi dogo na rahisi kama simu fupi linafanya \"ndiyo\" ya kwanza iwe rahisi zaidi." },
            { objective: "O4", q: "Rasimu ya AI inasema una \"uzoefu wa miaka 20 wa ushauri\". Huna hata mmoja. Unafanya nini?", options: ["Unaiacha; inasikika vizuri", "Unaibadilisha kuwa miaka 10", "Unaituma kwa watu wengi zaidi", "Unaiondoa na kutaja uzoefu wako halisi wa jeshi"], answer: 3, why: "Kila dai lazima liwe la kweli; uzoefu wako halisi ndio ushahidi wako." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kuandika pendekezo kwa msaada wa AI",
          minutes: 6,
          goal: "Andaa rasimu ya pendekezo la ukurasa mmoja kwa AI na ulihariri hadi liwe sahihi.",
          text: [
            "Pendekezo ni mpango wako wa kutatua tatizo la mteja. Linafanya kazi kama amri ya operesheni: hali (tatizo), dhamira (utakachofanya), utekelezaji (hatua na ratiba), na atakachopata mteja (kazi za kukabidhi).",
            "Mpe AI maelezo yako kutoka kwenye simu na mteja, bila data binafsi ya mteja, na uombe pendekezo la ukurasa mmoja lenye vichwa hivyo. Kisha hariri kwa makini: ondoa kila kitu kisicho wazi, rekebisha tarehe, na uweke wigo wa kazi wazi ili kazi isiendelee kukua.",
            "Wewe ndiye unayeweka bei, si AI. Fikiria saa zako, gharama zako na thamani ya matokeo kwa mteja. Muulize mshauri wa VBOC au washauri wengine katika fani yako ni bei gani ya kawaida."
          ],
          steps: ["Andika maelezo yako kutoka kwenye mazungumzo na mteja (bila data binafsi).", "Muombe msaidizi wa AI pendekezo la ukurasa mmoja: tatizo, nitakachofanya, ratiba, kazi za kukabidhi, bei.", "Weka wigo wa kazi bayana: kilichomo na kisichomo.", "Ongeza bei yako mwenyewe.", "Lisome kama mteja: kuna kitu kisicho wazi?"],
          words: [["Pendekezo (proposal)", "mpango ulioandikwa na bei ya kutatua tatizo la mteja."], ["Wigo wa kazi (scope)", "kazi ipi hasa imejumuishwa na ipi haijajumuishwa."], ["Kukua kwa wigo (scope creep)", "kazi inapoendelea kukua kupita kile kilichokubaliwa."]],
          slides: [
            { title: "Pendekezo = amri ya operesheni", bullets: ["Hali: tatizo", "Dhamira: utakachofanya", "Utekelezaji: hatua na ratiba", "Kazi za kukabidhi: watakachopata"] },
            { title: "AI inaandaa rasimu, wewe unahariri", bullets: ["Weka maelezo, bila data binafsi ya mteja", "Ondoa maneno yasiyo wazi, rekebisha tarehe", "Wigo wa kazi ulio wazi unazuia kukua kwa wigo"] },
            { title: "Wewe unaweka bei", bullets: ["Saa zako na gharama zako", "Thamani ya matokeo", "Muulize mshauri wa VBOC bei ya kawaida"] }
          ],
          tryIt: "Tumia huduma yako na mteja wa kubuni. Muombe msaidizi wa AI pendekezo la ukurasa mmoja lenye vichwa vitano, kisha hariri wigo wa kazi na uongeze bei yako mwenyewe.",
          youCanNow: "kuandaa na kuhariri pendekezo la ushauri la ukurasa mmoja lililo wazi kwa msaada wa AI.",
          quickCheck: [
            { objective: "O5", q: "Wigo wa kazi (scope) katika pendekezo una maana gani?", options: ["Kazi ipi hasa imejumuishwa na ipi haijajumuishwa", "Anwani ya mteja", "Aina ya herufi unayotumia", "Bei yako ya kila saa peke yake"], answer: 0, why: "Wigo wa kazi unaweka mipaka iliyo wazi kwa kazi, na hilo linazuia kukua kwa wigo." },
            { objective: "O5", q: "AI inapendekeza bei ya pendekezo lako. Unafanya nini?", options: ["Unatumia bei ya AI", "Unaacha bei nje", "Unaweka bei yako mwenyewe kulingana na saa zako, gharama na thamani", "Unamwomba mteja achague bei yoyote"], answer: 2, why: "Wewe unaweka bei; AI haijui gharama zako wala thamani yako." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kukabidhi kazi na kumlinda mteja",
          minutes: 5,
          goal: "Weka kanuni za kutumia AI kwenye kazi ya mteja zinazolinda taarifa za mteja.",
          text: [
            "Wateja wanakuamini na taarifa zao: majina ya wafanyakazi, pesa, mipango na matatizo. Usibandike taarifa binafsi au za siri za mteja katika zana ya AI ya umma isipokuwa mteja amekubali na zana imeidhinishwa kwa ajili hiyo.",
            "Kagua kila kitu ambacho AI imetoa kabla mteja hajakiona: ukweli, namba, majina na sheria. Wewe ndiye unayewajibika kwa kazi, si AI.",
            "Kuwa wazi kuhusu jinsi unavyotumia AI. Sentensi rahisi katika pendekezo lako inatosha: \"Ninatumia zana za AI kuandaa rasimu za nyaraka; ninakagua kazi yote na sizipi taarifa zako binafsi.\""
          ],
          steps: ["Usiweke data binafsi ya mteja katika zana za AI za umma.", "Tumia vishika-nafasi kama [jina la mteja] unapoandaa rasimu.", "Kagua kila ukweli, namba na sheria kabla ya kukabidhi.", "Ongeza sentensi moja katika pendekezo lako kuhusu jinsi unavyotumia AI."],
          words: [["Siri", "taarifa ambazo mteja anataka zibaki faragha."], ["Zana iliyoidhinishwa", "zana ya AI ambayo mteja amekubali uitumie na taarifa zake."]],
          slides: [
            { title: "Linda taarifa za mteja", bullets: ["Hakuna data binafsi ya mteja katika zana za AI za umma", "Tumia vishika-nafasi kama [jina la mteja]"] },
            { title: "Kazi ni jukumu lako", bullets: ["Kagua ukweli, namba, majina na sheria", "AI haiwajibiki; wewe unawajibika"] },
            { title: "Kuwa wazi kuhusu AI", bullets: ["Sema katika pendekezo jinsi unavyoitumia", "\"Ninakagua kazi yote na ninalinda data yako\""] }
          ],
          tryIt: "Kazi ya mwisho: maliza pendekezo lako la ukurasa mmoja. Ongeza sentensi yako ya matumizi ya AI, hakikisha kila dai ni la kweli, na andika jina la ofisi rasmi ya biashara ya bure utakayowasiliana nayo baadaye.",
          youCanNow: "kutoa huduma ya ushauri kulingana na utaalamu wako wa jeshi, kuandika pendekezo kwa AI, na kulinda taarifa za mteja wako.",
          quickCheck: [
            { objective: "O6", q: "Kishika-nafasi kama [jina la mteja] kinafanya nini?", options: ["Kinaficha jina lako mwenyewe", "Kinarefusha pendekezo", "Kinatuma pendekezo moja kwa moja", "Kinakuwezesha kuandaa rasimu kwa AI bila kutoa taarifa binafsi"], answer: 3, why: "Vishika-nafasi vinazuia taarifa za mteja zisiingie kwenye AI unapoandaa rasimu." },
            { objective: "O6", q: "Mteja anakutumia mipango ya siri na unataka msaada wa AI. Unafanya nini kwanza?", options: ["Unaibandika katika AI yoyote ya umma", "Unahakikisha mteja amekubali na zana imeidhinishwa kwa ajili hiyo", "Unaiweka mtandaoni ili upate maoni", "Unampa mteja mwingine"], answer: 1, why: "Taarifa za siri za mteja zinaingia kwenye zana ya AI tu kwa idhini ya mteja na kwa zana iliyoidhinishwa." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kupata kazi na kuifanya",
        questions: [
          { objective: "O4", q: "Wateja wa kwanza wa ushauri mara nyingi wanatoka wapi?", options: ["Hakuna mahali", "Matangazo yanayojitokeza ovyo", "Simu kwa watu usiowajua peke yake", "Watu na vikundi wanaokujua tayari"], answer: 3, why: "Kuaminiwa na watu wanaokujua kunafungua milango haraka zaidi." },
          { objective: "O4", q: "Ombi dogo zuri katika ujumbe wa kuwafikia wateja ni lipi?", options: ["Simu ya dakika 15", "Mkataba wa mwaka mmoja", "Taarifa zao za benki", "Malipo makubwa ya mapema"], answer: 0, why: "Simu fupi ni rahisi kuikubali." },
          { objective: "O5", q: "Nani anapaswa kuweka bei yako?", options: ["Tovuti yoyote", "AI", "Wewe, kulingana na saa, gharama na thamani", "Mteja peke yake"], answer: 2, why: "Kuweka bei ni uamuzi wako wa biashara." },
          { objective: "O5", q: "Kukua kwa wigo (scope creep) ni nini?", options: ["Kukabidhi kazi haraka", "Aina ya AI", "Fomu ya kisheria", "Kazi inapoendelea kukua kupita kile kilichokubaliwa"], answer: 3, why: "Wigo wa kazi ulio wazi unazuia kazi isikue bila malipo." },
          { objective: "O6", q: "Je, unaweza kubandika mipango ya siri ya mteja katika zana ya AI ya umma?", options: ["Ndiyo, kama inaokoa muda", "Kila wakati", "Tu kama mteja amekubali na zana imeidhinishwa kwa ajili hiyo", "Ndiyo, kama utaifuta baadaye"], answer: 2, why: "Taarifa za mteja zinahitaji idhini yake na zana iliyoidhinishwa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Fursa za Ushauri wa Kitaalamu kwa Kutumia AI",
    questions: [
      { objective: "O1", q: "Kazi ya kukabidhi (deliverable) ni:", options: ["Gari lako", "Unachokabidhi mwishoni, kama mpango au ripoti", "Namba ya ankara yako", "Zana ya AI"], answer: 1, why: "Kazi za kukabidhi ni matokeo ambayo mteja anayapokea." },
      { objective: "O1", q: "Ipi ni njia ambayo AI inawasaidia washauri?", options: ["Kuandaa rasimu za mapendekezo na ripoti", "Kuchukua nafasi ya busara yote", "Kusaini mikataba", "Kuwa na kibali cha usalama"], answer: 0, why: "AI inaharakisha kuandaa rasimu; wewe bado ndiye unayeamua." },
      { objective: "O1", q: "Ushauri wa AI unaweza kujumuisha:", options: ["Kuuza data za wateja", "Kudukua washindani", "Kusaidia kikundi kidogo kuandika sera rahisi ya matumizi ya AI", "Kuhakikisha faida"], answer: 2, why: "Kuanza kutumia AI kwa usalama ni hitaji halisi la ushauri." },
      { objective: "O2", q: "Sehemu tatu za huduma ni:", options: ["Unayemsaidia, tatizo, na matokeo", "Nembo, rangi na aina ya herufi", "Cheo, kikosi na kambi", "Bei, kodi na ada"], answer: 0, why: "Hizi zinaifanya huduma iwe wazi kwa mnunuzi." },
      { objective: "O2", q: "Kundi maalum (niche) ni:", options: ["App ya AI", "Aina ya kodi", "Beji ya jeshi", "Kundi dogo na mahususi la wateja unaolilenga"], answer: 3, why: "Kulenga kundi moja kunafanya huduma yako iwe rahisi kuuza." },
      { objective: "O2", q: "Aliyekuwa mkufunzi anaweza kujitolea:", options: ["Kurusha ndege bila leseni", "Kusaidia mashirika yasiyo ya faida kuwapokea na kuwaandaa wanaojitolea", "Kutoa ushauri wa kisheria", "Kuuza sarafu za kidijitali (crypto)"], answer: 1, why: "Ujuzi wa kufundisha unahamishika moja kwa moja." },
      { objective: "O3", q: "Boots to Business inaendeshwa na:", options: ["Benki binafsi", "SBA, kama sehemu ya Transition Assistance Program", "Mtandao wa kijamii", "IRS"], answer: 1, why: "SBA inaiendesha ndani ya TAP." },
      { objective: "O3", q: "Boots to Business Reboot ni kwa ajili ya:", options: ["Wanafunzi peke yao", "Maafisa walio kazini peke yao", "Raia peke yao", "Maveterani wa vipindi vyote, pamoja na Guard na Reserve"], answer: 3, why: "SBA inasema Reboot inawahudumia maveterani wa vipindi vyote." },
      { objective: "O3", q: "VetCert ni:", options: ["Uthibitisho wa SBA kwa biashara ndogo zinazomilikiwa na maveterani na maveterani wenye ulemavu uliotokana na huduma", "Fomu ya kodi", "Ubao wa nafasi za kazi", "Malipo ya GI Bill"], answer: 0, why: "SBA inaendesha VetCert kwa mikataba ya serikali." },
      { objective: "O3", q: "Unaomba VetCert wapi?", options: ["Mazungumzo yoyote ya AI", "Kiungo kilichotumwa kwa ujumbe mfupi", "certifications.sba.gov", "Ukurasa wa mitandao ya kijamii"], answer: 2, why: "Tovuti ya uthibitisho ya SBA ndiyo inayoshughulikia maombi." },
      { objective: "O3", q: "Maswali kuhusu leseni za biashara na kodi ni bora kupelekwa:", options: ["Hakuna mtu", "Kwenye mazungumzo ya AI peke yake", "Kwenye jukwaa lolote la mtandaoni", "Ofisi ya biashara ya jimbo lako, irs.gov au mshauri wa VBOC"], answer: 3, why: "Ofisi rasmi na washauri wanatoa kanuni za sasa." },
      { objective: "O4", q: "Ujumbe mzuri wa kuwafikia wateja una:", options: ["Namba yako ya Social Security", "Hadithi nzima ya maisha yako", "Wewe ni nani, tatizo, ushahidi mmoja na ombi dogo", "Dai la kulipwa"], answer: 2, why: "Ujumbe mfupi na mahususi unajibiwa." },
      { objective: "O4", q: "Rasimu ya AI inasema una cheti usicho nacho. Unapaswa:", options: ["Kukiacha", "Kukiondoa", "Kuongeza vingine viwili", "Kumwomba mteja asikague"], answer: 1, why: "Kila dai lazima liwe la kweli." },
      { objective: "O5", q: "Pendekezo linafanana na hati gani ya jeshi?", options: ["Amri ya operesheni", "Fomu ya likizo", "Ukaguzi wa sare", "Hati ya mshahara"], answer: 0, why: "Zote zinaeleza hali, dhamira na utekelezaji." },
      { objective: "O5", q: "Wigo wa kazi (scope) katika pendekezo una maana:", options: ["Bei peke yake", "Darubini ya bunduki", "Kazi ipi hasa imejumuishwa na ipi haijajumuishwa", "Anwani ya mteja"], answer: 2, why: "Wigo wa kazi ulio wazi unazuia migogoro." },
      { objective: "O5", q: "Unapoiomba AI iandae pendekezo, ipe:", options: ["Maelezo yako bila data binafsi ya mteja", "Taarifa za benki za mteja", "Anwani za nyumbani za wafanyakazi", "Nywila"], answer: 0, why: "Usiweke data binafsi ya mteja." },
      { objective: "O6", q: "Nani anawajibika kwa makosa katika kazi ya mteja iliyoandaliwa na AI?", options: ["Mteja", "Kampuni ya AI", "Hakuna", "Wewe"], answer: 3, why: "Wewe ndiye unayekabidhi kazi, kwa hiyo ni jukumu lako." },
      { objective: "O6", q: "Unapaswa kukagua nini kabla ya kukabidhi kazi iliyoandaliwa na AI?", options: ["Aina ya herufi peke yake", "Ukweli, namba, majina na sheria", "Hakuna kitu", "Tahajia peke yake"], answer: 1, why: "AI inaweza kukosea kuhusu ukweli." },
      { objective: "O6", q: "Unapaswa kuwaambiaje wateja kuhusu matumizi ya AI?", options: ["Kuficha", "Sentensi iliyo wazi katika pendekezo kuhusu jinsi unavyoitumia na unavyolinda data yao", "Kusema AI ilifanya kila kitu", "Kutotaja kamwe"], answer: 1, why: "Uwazi unajenga uaminifu." },
      { objective: "O6", q: "Kishika-nafasi kama [jina la mteja] kinakusaidia:", options: ["Kupata cheti", "Kutoza ankara haraka zaidi", "Kuruka pendekezo", "Kuandaa rasimu kwa AI bila kutoa taarifa binafsi"], answer: 3, why: "Vishika-nafasi vinazuia majina halisi yasiingie katika zana za AI." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [0, 3, 6, 8, 11, 12, 14, 16, 19]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Tatizo na huduma", objective: "O2", notYet: "Tatizo la mteja au utakachofanya hakiko wazi.", meets: "Linataja tatizo la mteja na utakachofanya, kulingana na huduma yako.", exceeds: "Linatumia maneno ya mteja mwenyewe kuelezea tatizo." },
      { name: "Wigo wa kazi, kazi za kukabidhi na ratiba", objective: "O5", notYet: "Hakuna wigo wa kazi, kazi za kukabidhi wala ratiba iliyo wazi.", meets: "Wigo wa kazi ulio wazi (kilichojumuishwa na kisichojumuishwa), atakachopata mteja na ratiba.", exceeds: "Linasema mabadiliko ya wigo wa kazi yatashughulikiwa vipi." },
      { name: "Bei yako", objective: "O5", notYet: "Hakuna bei, au bei ya AI imetumika kama ilivyo.", meets: "Bei iliyowekwa na mwanafunzi.", exceeds: "Mwanafunzi anaweza kueleza bei kutokana na saa, gharama na thamani." },
      { name: "Taarifa za mteja zimelindwa", objective: "O6", notYet: "Hakuna sentensi ya matumizi ya AI, au taarifa za mteja zimebandikwa katika AI ya umma.", meets: "Sentensi iliyo wazi kuhusu jinsi AI inavyotumika na jinsi taarifa za mteja zinavyolindwa.", exceeds: "Vishika-nafasi vilitumika katika rasimu zote za AI." },
      { name: "Madai ya kweli na hatua inayofuata", objective: "O3", notYet: "Dai moja si la kweli, au hakuna ofisi iliyotajwa.", meets: "Kila dai ni la kweli, na ofisi moja rasmi ya biashara ya bure imeorodheshwa kama mawasiliano yanayofuata.", exceeds: "Mwanafunzi ana swali tayari kwa ofisi hiyo." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaotuma angalau jumbe tatu za kuwafikia wateja ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi wanaowasiliana na VBOC au kujiunga na Boots to Business ndani ya siku 60",
      "Wanafunzi wanaopata mteja wao wa kwanza wa ushauri anayelipa ndani ya miezi 6"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta au simu janja yenye intaneti",
      "Msaidizi wa AI wa bure: ChatGPT, Microsoft Copilot au Google Gemini",
      "Tovuti ya bure ya sba.gov ili kutafuta Veterans Business Outreach Center",
      "Programu ya kuandika maandishi kwa ajili ya pendekezo la ukurasa mmoja",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Waache wanafunzi wajizoeze kusema huduma yao ya sentensi moja kwa sauti na mwenzao, na waiboreshe mara moja.",
      "Tumieni wateja wa kubuni darasani, na mlazimishe matumizi ya vishika-nafasi kwa taarifa zozote za mteja.",
      "Usipendekeze bei; mwombe kila mwanafunzi aeleze jinsi alivyoweka bei yake.",
      "Mwalike mshauri wa VBOC au SBA kwenye kipindi cha mwisho ili ajibu maswali ya kuanzisha biashara.",
      "Pima pendekezo kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
