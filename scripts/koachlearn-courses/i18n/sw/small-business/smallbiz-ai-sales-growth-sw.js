"use strict";

// Koach Learn course (Swahili translation of small-business/smallbiz-ai-sales-growth.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const CAN_SPAM = { name: "FTC: CAN-SPAM Act, mwongozo wa kufuata sheria kwa biashara", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" };

module.exports = {
  id: "smallbiz-ai-sales-growth-sw",
  lang: "sw",
  translationOf: "smallbiz-ai-sales-growth",
  category: "Small Business",
  name: "AI kwa Mauzo na Kukuza Biashara",
  skills: "Kueleza mteja wako bora, Kuandika ofa iliyo wazi, Kuweka orodha rahisi ya wateja, Kuandika ujumbe wa kufuatilia, Kusoma namba za mauzo, Kupanga kampeni ya mauzo ya siku 30",
  outcome: "kutumia AI kupanga na kuendesha kampeni ya mauzo ya siku 30 kwa biashara yako: kueleza mteja wako bora, kuandika ofa moja iliyo wazi, kuweka orodha rahisi ya wateja, kuandika mfululizo wa ujumbe wa kufuatilia unaofuata sheria za barua pepe, na kufuatilia matokeo kwenye spreadsheet (jedwali la kompyuta).",
  about: [
    "Kozi hii ni kwa wamiliki wa biashara ndogo wanaotaka mauzo zaidi kutoka kwa wateja walio nao tayari na wale walio karibu: maduka, migahawa, saluni, huduma za usafi na matengenezo, wapishi wa sherehe na magari ya kuuza chakula. Wanafunzi wetu wengi ni wamiliki wa biashara kutoka jamii za wachache wanaokua bila bajeti kubwa ya matangazo.",
    "Utatumia msaidizi wa AI wa bure kufikiria nani ananunua kutoka kwako, kuunda ofa yenye maana, kufuatilia wateja waliokubali kupokea ujumbe wako, na kusoma namba zako mwenyewe kuona kinachofanya kazi. AI inakusaidia kuandika na kufikiri; busara yako na uhusiano wako na wateja ndivyo vinavyouza.",
    "Kila somo linachukua kama dakika tano na lina kazi ya \"Jaribu sasa\". Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni. Kazi hizo zinajengana hadi kuwa mpango wa mauzo wa siku 30."
  ],
  finalTask: "Andika mpango wa mauzo wa siku 30 wa ukurasa mmoja: mteja wako bora kwa sentensi tatu, ofa moja yenye bei wazi na tarehe ya mwisho, mahali orodha yako ya wateja ilipo na jinsi watu walivyojiunga nayo, mfululizo wa ujumbe mitatu wa kufuatilia (wenye anwani yako na mstari wa kujiondoa kwenye kila barua pepe ya matangazo), na jedwali la kufuatilia lenye namba utakazokagua kila wiki.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wamiliki wa biashara ndogo wanaotaka mauzo zaidi kutoka kwa wateja wa sasa na walio karibu: maduka, migahawa, saluni, huduma za usafi na matengenezo, wapishi wa sherehe na magari ya kuuza chakula. Wengi ni wamiliki kutoka jamii za wachache wanaokua bila bajeti kubwa ya matangazo.",
    startingPoint: "Wanawajua vizuri wateja wao wa kawaida na bidhaa zao. Wanatumia kidogo ofa zilizoandikwa, orodha za wateja zenye ruhusa, ujumbe wa kufuatilia kwa barua pepe au SMS, ufuatiliaji wa mauzo au AI kwa kupanga.",
    gap: "Bila mpango, kampeni za mauzo zinakuwa za kubahatisha, punguzo linaweza kumaliza faida, na ujumbe wa matangazo unaweza kuvunja sheria za barua pepe na SMS. Wamiliki wanahitaji mpango rahisi wa siku 30 uliojengwa kwa msaada wa AI unaolenga wateja sahihi, unatoa ofa yenye faida, unafuatilia wateja kwa njia halali na unapima kinachofanya kazi.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi",
      "Vifaa: simu janja au kompyuta; spreadsheet ni rahisi zaidi kwenye kompyuta",
      "Muda: masomo ya kama dakika 5 yanayoingia katika siku ya kazi yenye shughuli nyingi",
      "Sheria: CAN-SPAM kwa barua pepe za matangazo, na sheria tofauti za serikali kuu ya Marekani kwa SMS za matangazo",
      "Faragha: orodha za wateja zinalindwa na haziwekwi kwenye zana za AI"
    ],
    prerequisites: "Kozi \"Utangulizi wa AI kwa Biashara Ndogo\" inasaidia lakini si lazima."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukitumia unachoona kwa wateja wako bora", action: "kuandika maelezo mafupi na mahususi ya mteja wako bora kwa msaada wa AI", standard: "kwa sentensi tatu zinazosema ni nani, wanahitaji nini na kwa nini wanakuchagua" },
    { id: "O2", condition: "Ukipewa mawazo ya ofa kutoka AI", action: "kuunda ofa moja iliyo wazi na ya kweli", standard: "yenye bidhaa, bei, sababu ya kununua sasa na tarehe ya mwisho, na faida iliyohesabiwa kwenye karatasi" },
    { id: "O3", condition: "Ukitumia spreadsheet", action: "kuweka orodha ya wateja inayorekodi ruhusa ya kuwasiliana nao", standard: "yenye safu ya makubaliano na tarehe, njia ya kujiandikisha, na bila taarifa halisi za wateja ndani ya AI" },
    { id: "O4", condition: "Ukizingatia CAN-SPAM na sheria za SMS", action: "kuandika mfululizo wa ujumbe mitatu wa kufuatilia kwa msaada wa AI", standard: "wenye anwani ya posta na mstari wa kujiondoa kwenye kila barua pepe ya matangazo, na SMS kwa ruhusa ya wazi tu" },
    { id: "O5", condition: "Ukipewa namba za mauzo za wiki nne", action: "kufuatilia namba zako za mauzo kwenye jedwali na kukagua mifumo ambayo AI inaona", standard: "kwa fomula za jumla, bila majina ya wateja, na angalau mfumo mmoja umethibitishwa kwenye jedwali" },
    { id: "O6", condition: "Ukiwa na mteja wako, ofa, orodha, ujumbe wa kufuatilia na ufuatiliaji", action: "kuandika mpango wa mauzo wa siku 30 wa ukurasa mmoja", standard: "unaoendana na saa zako halisi, wenye namba za kukagua kila wiki na tathmini ya siku ya 30" }
  ],
  chapters: [
    {
      name: "Sura 1: Nani ananunua na unatoa nini",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kueleza mteja wako bora",
          minutes: 5,
          goal: "Andika maelezo mafupi na mahususi ya mteja unayemtaka zaidi.",
          text: [
            "Huwezi kumuuzia kila mtu vizuri. Fikiria wateja wako bora: wale wanaorudi, wanaonunua vizuri na wanaoleta marafiki. Wanafanana kwa nini?",
            "Andika sentensi tatu: ni nani, wanahitaji nini, na nini kinawafanya wakuchague. Mfano kwa mgahawa wa chakula cha Afrika Magharibi: \"Wafanyakazi wa ofisini walio ndani ya maili mbili wanaotaka chakula cha mchana cha kushibisha chini ya $15. Wana shughuli nyingi na wanaagiza kwa simu. Wanatuchagua kwa sababu ya sahani kubwa na kuchukua chakula haraka.\"",
            "AI inaweza kukusaidia kufikiri: \"Haya ndiyo ninayojua kuhusu wateja wangu bora. Nijiulize maswali gani ili niwaeleze vizuri zaidi?\" Tumia unachoona dukani kwako, si makisio kuhusu makundi ya watu."
          ],
          steps: ["Wafikirie wateja wako watano bora.", "Andika wanachofanana.", "Andika sentensi tatu: ni nani, wanahitaji nini, kwa nini wewe.", "Iombe AI maswali ya kuboresha maelezo hayo."],
          words: [["Mteja bora", "aina ya mteja anayefaa zaidi biashara yako."], ["Mteja anayerudi", "mtu anayenunua kutoka kwako zaidi ya mara moja."]],
          slides: [
            { title: "Si kila mtu", bullets: ["Fikiria wateja wako bora", "Nani anarudi, ananunua vizuri, analeta marafiki?"] },
            { title: "Sentensi tatu", bullets: ["Ni nani", "Wanahitaji nini", "Kwa nini wanakuchagua"] },
            { title: "Mfano: mgahawa wa chakula cha mchana", bullets: ["Wafanyakazi wa ofisini ndani ya maili mbili", "Wanataka chakula cha mchana cha kushibisha chini ya $15", "Wanatuchagua kwa sahani kubwa na kuchukua chakula haraka"] }
          ],
          tryIt: "Andika mteja wako bora kwa sentensi tatu. Muombe msaidizi wa AI maswali matano ya kuboresha maelezo hayo, yajibu, kisha andika upya sentensi zako tatu.",
          youCanNow: "kueleza mteja unayemtaka zaidi kwa sentensi tatu zilizo wazi.",
          quickCheck: [
            { objective: "O1", q: "Maelezo ya mteja wako bora yanapaswa kutoka wapi?", options: ["Unachoona kwa wateja wako bora halisi", "Makisio kuhusu kila mtu mjini", "Chochote AI inachosema kwanza", "Tovuti ya mshindani wako"], answer: 0, why: "Wateja wako bora halisi wanakuonyesha nani wa kumtafuta." },
            { objective: "O1", q: "Maelezo yako yanasema \"kila mtu anayependa chakula\". Utafanya nini?", options: ["Kuyaacha kwa sababu yanajumuisha watu wengi zaidi", "Kuiomba AI maswali ya kuboresha na kuyafanya mahususi", "Kuyafuta maelezo", "Kunakili maelezo ya kampuni kubwa"], answer: 1, why: "Maelezo mahususi yanakusaidia kuwafikia watu sahihi." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kuandika ofa yenye maana",
          minutes: 5,
          goal: "Unda ofa moja iliyo wazi na ya kweli yenye bei, sababu ya kununua sasa na tarehe ya mwisho.",
          text: [
            "Ofa ni unachouza, kwa bei gani, na kwa nini mtu anunue sasa. Ofa nzuri ni rahisi: \"Mlo wa mchana: wali, mchuzi na kinywaji, $13, siku za kazi saa 5 asubuhi hadi saa 8 mchana (11 to 2), hadi June 30.\"",
            "Iombe AI ikupe mawazo, kisha wewe uchague: \"Ninaendesha huduma ya kusafisha magari inayohamia kwa mteja. Mteja wangu bora ni wazazi wenye shughuli nyingi. Nipe mawazo matano ya ofa kwa majira ya machipuko yanayobakiza faida yangu.\" Kagua hesabu wewe mwenyewe: punguzo linalopoteza pesa kwa kila mauzo si ukuaji.",
            "Kuwa mkweli. Sema bei halisi, tarehe halisi ya mwisho na masharti yoyote. Usiite \"punguzo\" ikiwa ni bei yako ya kawaida."
          ],
          steps: ["Iombe AI mawazo matano ya ofa kwa mteja wako bora.", "Chagua moja na uhesabu gharama na faida yako.", "Iandike ikiwa na bidhaa, bei, sababu ya kununua sasa na tarehe ya mwisho.", "Hakikisha ni ya kweli na iko wazi."],
          words: [["Ofa", "unachouza, bei, na sababu ya kununua sasa."], ["Faida", "pesa inayobaki baada ya kulipa gharama zako."], ["Kiwango cha faida (margin)", "sehemu ya bei ambayo ni faida."]],
          slides: [
            { title: "Ofa iliyo wazi ina", bullets: ["Unachouza", "Bei", "Sababu ya kununua sasa na tarehe ya mwisho"] },
            { title: "AI inatoa mawazo, wewe unachagua", bullets: ["Omba mawazo matano kwa mteja wako bora", "Kagua hesabu: bakiza faida"] },
            { title: "Kuwa mkweli", bullets: ["Bei halisi, tarehe halisi ya mwisho, masharti halisi", "\"Punguzo\" lazima liwe chini ya bei yako ya kawaida"] }
          ],
          tryIt: "Iombe AI mawazo matano ya ofa kwa mteja wako bora. Chagua moja, hesabu gharama na faida yako kwenye karatasi, na uandike ofa kwa sentensi moja yenye tarehe ya mwisho.",
          youCanNow: "kuandika ofa iliyo wazi na ya kweli ambayo bado inaleta faida.",
          quickCheck: [
            { objective: "O2", q: "Ofa iliyo wazi ina nini?", options: ["Punguzo kubwa tu", "Orodha ndefu ya bidhaa", "Bidhaa, bei, sababu ya kununua sasa na tarehe ya mwisho", "Ahadi kwamba haiishi kamwe"], answer: 2, why: "Sehemu hizi zinaifanya ofa iwe rahisi kuelewa na kuchukua hatua." },
            { objective: "O2", q: "AI inapendekeza nusu bei kwa kila kitu kwa mwezi mzima. Utafanya nini kwanza?", options: ["Kuiweka mtandaoni leo", "Kuifanya punguzo la 70%", "Kuwauliza wateja kama wanaipenda", "Kuhesabu kwenye karatasi kama bado unapata faida"], answer: 3, why: "Ofa lazima ibakize pesa baada ya gharama." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kuanzisha orodha rahisi ya wateja",
          minutes: 5,
          goal: "Weka orodha rahisi ya wateja kwenye spreadsheet, yenye ruhusa ya kuwasiliana nao.",
          text: [
            "Orodha yako ya wateja ndiyo chombo chako cha mauzo chenye thamani kubwa zaidi. Inaweza kuwa spreadsheet yenye safu kama Jina la kwanza, Njia ya kuwasiliana (barua pepe au simu), Amekubali kupokea ujumbe (ndiyo/hapana na tarehe), Ziara ya mwisho, Alichonunua, na Maelezo.",
            "Ongeza tu watu waliokupa taarifa zao na wakakubali kupokea ujumbe wako: karatasi ya kujiandikisha kaunta, msimbo wa QR unaoelekeza kwenye fomu, au kisanduku cha kuweka alama kwenye zana yako ya kuweka miadi. Andika lini na jinsi walivyokubali.",
            "Iweke orodha kuwa siri na salama: nywila kwenye faili au akaunti, na iwe ya wafanyakazi wanaoihitaji tu. Usibandike orodha kwenye zana za AI. Ukitaka msaada wa AI, eleza safu au tumia mistari ya mfano ya kubuni."
          ],
          steps: ["Tengeneza spreadsheet yenye safu zilizotajwa hapo juu.", "Ongeza njia ya kujiandikisha: karatasi ya kaunta, fomu ya QR au kisanduku cha miadi.", "Rekodi lini na jinsi kila mtu alivyokubali.", "Linda faili na liweke mbali na zana za AI."],
          words: [["Orodha ya wateja", "rekodi ya wateja waliokubali kupokea ujumbe wako."], ["Opt in (kujiunga)", "mtu anapokubali kupokea ujumbe wako."], ["CRM", "customer relationship management (usimamizi wa uhusiano na wateja): programu au jedwali la kufuatilia wateja."]],
          slides: [
            { title: "Chombo chako cha mauzo chenye thamani zaidi", bullets: ["Spreadsheet rahisi inatosha", "Jina, mawasiliano, amekubali (tarehe), ziara ya mwisho, maelezo"] },
            { title: "Ruhusa kwanza", bullets: ["Karatasi ya kaunta, fomu ya QR au kisanduku cha miadi", "Rekodi lini na jinsi walivyokubali"] },
            { title: "Iweke salama", bullets: ["Nywila kwenye faili au akaunti", "Shiriki na wafanyakazi wanaoihitaji tu", "Usibandike orodha kwenye zana za AI kamwe"] }
          ],
          tryIt: "Tengeneza jedwali la orodha yako ya wateja lenye safu sita. Ongeza mistari mitatu ya mfano ya kubuni, kisha andika jinsi wateja halisi watakavyojiandikisha (karatasi ya kaunta, fomu ya QR au kisanduku cha miadi).",
          youCanNow: "kuweka orodha ya siri ya wateja yenye rekodi ya ruhusa ya kuwasiliana nao.",
          quickCheck: [
            { objective: "O3", q: "Nani anafaa kuwa kwenye orodha yako ya wateja?", options: ["Watu waliokubali kupokea ujumbe wako", "Mtu yeyote ambaye unaweza kupata namba yake", "Wateja wa washindani wako", "Kila mtu kwenye kitabu cha simu"], answer: 0, why: "Ni watu waliosema ndiyo kupokea ujumbe wako tu wanaoingia kwenye orodha." },
            { objective: "O3", q: "Unataka AI ikusaidie kuunda jedwali la orodha ya wateja. Utashiriki nini?", options: ["Orodha yako kamili halisi ya wateja", "Namba za simu za wateja", "Majina ya safu au mistari ya mfano ya kubuni", "Nywila ya jedwali lako"], answer: 2, why: "Majina ya safu au mistari ya mfano yanakupa msaada bila kushiriki taarifa halisi za wateja." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Nani ananunua na unatoa nini",
        questions: [
          { objective: "O1", q: "Mteja bora ni nini?", options: ["Mtu yeyote mwenye pesa", "Aina ya mteja anayefaa zaidi biashara yako", "Watu wanaolalamika tu", "Wateja wa mshindani wako"], answer: 1, why: "Inaeleza nani unamtaka zaidi." },
          { objective: "O2", q: "Ipi ni ofa iliyo wazi?", options: ["\"Bei nzuri sana!\"", "\"Vitu vya bei rahisi\"", "\"Njoo siku moja\"", "\"Mlo wa mchana: wali, mchuzi na kinywaji, $13, siku za kazi 11-2, hadi June 30\""], answer: 3, why: "Inasema bidhaa, bei, lini na tarehe ya mwisho." },
          { objective: "O2", q: "AI inapendekeza punguzo la 60%. Unakagua nini kwanza?", options: ["Kama bado unapata faida", "Kama linasikika la kusisimua", "Hakuna kitu", "Aina ya herufi"], answer: 0, why: "Punguzo linalopoteza pesa si ukuaji." },
          { objective: "O3", q: "Nani anafaa kuwa kwenye orodha yako ya wateja?", options: ["Mtu yeyote ambaye unapata namba yake", "Wateja wa washindani", "Watu waliokubali kupokea ujumbe wako", "Namba za simu za kubahatisha"], answer: 2, why: "Ruhusa inakuja kwanza." },
          { objective: "O3", q: "Unataka msaada wa AI kupanga orodha yako ya wateja. Unashiriki nini?", options: ["Orodha kamili yenye namba za simu", "Namba za kadi za wateja", "Majina ya safu au mistari ya mfano ya kubuni", "Nywila ya faili lako"], answer: 2, why: "Taarifa halisi za wateja zinakaa nje ya zana za AI." }
        ]
      }
    },
    {
      name: "Sura 2: Kufuatilia wateja na kukua",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuandika ujumbe wa kufuatilia unaofuata sheria",
          minutes: 6,
          goal: "Andika mfululizo wa ujumbe mitatu wa kufuatilia na uhakikishe barua pepe za matangazo zinafuata CAN-SPAM.",
          text: [
            "Mauzo mengi yanatokana na kufuatilia. Mfululizo rahisi: (1) asante baada ya ziara, (2) ukumbusho au ushauri wiki moja baadaye, (3) ofa yako pamoja na tarehe yake ya mwisho. Iulize AI: \"Andika barua pepe tatu fupi za kufuatilia kwa saluni yangu kwa sauti ya biashara yangu. Tumia [jina la kwanza].\"",
            "Barua pepe za matangazo nchini Marekani lazima zifuate sheria ya CAN-SPAM. Mwongozo wa FTC (Tume ya Biashara ya Shirikisho) unasema: tumia mstari wa From (mtumaji) na wa kichwa (subject) wa kweli, weka wazi kuwa ni tangazo, weka anwani halali ya posta, toa njia wazi ya kujiondoa, na heshimu maombi ya kujiondoa ndani ya siku 10 za kazi.",
            "SMS za matangazo zina sheria zake za serikali kuu (TCPA, inayosimamiwa na FCC, Tume ya Mawasiliano ya Shirikisho), na kwa kawaida zinahitaji ruhusa ya wazi ya mteja. Kabla ya kutuma SMS za matangazo, kagua sheria kwenye fcc.gov au muulize mtaalamu, na tumia zana ya SMS inayoshughulikia watu wanaojiondoa."
          ],
          steps: ["Panga ujumbe mitatu: asante, ukumbusho au ushauri, ofa.", "Iombe AI iandike rasimu zenye nafasi ya [jina la kwanza].", "Ongeza anwani yako ya posta na mstari wa kujiondoa kwenye barua pepe za matangazo.", "Heshimu maombi ya kujiondoa haraka.", "Kagua sheria za SMS kabla ya kutuma SMS za matangazo."],
          words: [["Mfululizo wa kufuatilia", "ujumbe uliopangwa unaotumwa baada ya ziara ya mteja au kujiandikisha kwake."], ["CAN-SPAM", "sheria ya Marekani yenye kanuni za barua pepe za kibiashara."], ["Unsubscribe (kujiondoa)", "njia ya watu kuacha kupokea ujumbe wako."]],
          slides: [
            { title: "Mfululizo wa ujumbe mitatu", bullets: ["1. Asante baada ya ziara", "2. Ukumbusho au ushauri wiki moja baadaye", "3. Ofa yako yenye tarehe ya mwisho"] },
            { title: "Misingi ya CAN-SPAM (FTC)", bullets: ["Mistari ya From na kichwa iwe ya kweli; sema ni tangazo", "Anwani halali ya posta", "Njia wazi ya kujiondoa, inayoheshimiwa ndani ya siku 10 za kazi"] },
            { title: "SMS za matangazo", bullets: ["Sheria tofauti za serikali kuu (TCPA, FCC)", "Pata ruhusa ya wazi kwanza", "Kagua fcc.gov au muulize mtaalamu"] }
          ],
          sources: [CAN_SPAM],
          tryIt: "Iombe AI iandike rasimu ya mfululizo wako wa ujumbe mitatu wa kufuatilia ukitumia [jina la kwanza]. Ongeza anwani yako ya posta na mstari wa kujiondoa kwenye barua pepe ya ofa.",
          youCanNow: "kuandika mfululizo wa ujumbe wa kufuatilia na kuhakikisha barua pepe za matangazo zinatimiza misingi ya CAN-SPAM.",
          quickCheck: [
            { objective: "O4", q: "Kila barua pepe ya matangazo nchini Marekani lazima iwe na nini chini ya CAN-SPAM?", options: ["Kuponi", "Anwani halali ya posta na njia ya kujiondoa", "Picha", "Jina kamili la mteja"], answer: 1, why: "CAN-SPAM inataka anwani ya posta na njia ya kujiondoa." },
            { objective: "O4", q: "Unataka kutuma SMS za matangazo kuhusu ofa yako. Utafanya nini kwanza?", options: ["Kutuma SMS kwa kila mtu kwenye simu yako", "Kutuma SMS usiku wa manane", "Kutumia orodha ya namba uliyonunua", "Kupata ruhusa ya wazi na kukagua sheria za serikali kuu za SMS"], answer: 3, why: "SMS za matangazo zina sheria zake za serikali kuu na zinahitaji ruhusa ya wazi." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kusoma namba zako za mauzo kwa msaada wa AI",
          minutes: 5,
          goal: "Fuatilia namba chache za mauzo kila wiki na utumie AI kusaidia kuona mifumo.",
          text: [
            "Unahitaji namba chache tu: mauzo kwa siku, idadi ya wateja, wastani wa mauzo (mauzo ukigawanya kwa wateja), bidhaa zinazouzwa zaidi, na watu wangapi walitumia ofa yako.",
            "Ziweke kwenye spreadsheet kwa wiki. Acha spreadsheet ifanye hesabu. Kisha unaweza kubandika jumla za kila wiki (bila majina ya wateja) kwa msaidizi wa AI na kuuliza: \"Hizi ni namba za wiki 6 za duka langu la mikate. Unaona mifumo gani? Nikague nini?\"",
            "Chukulia mawazo ya AI kama maswali, si majibu. Ikisema \"Jumamosi ni siku za mauzo madogo\", angalia jedwali lako mwenyewe kuthibitisha, na fikiria kwa nini: hali ya hewa, tukio fulani, mabadiliko ya wafanyakazi."
          ],
          steps: ["Fuatilia mauzo, wateja, wastani wa mauzo, bidhaa zinazouzwa zaidi na matumizi ya ofa kila wiki.", "Acha fomula zifanye jumla.", "Bandika jumla za kila wiki (bila majina) kwa AI na uombe mifumo.", "Thibitisha kila mfumo kwenye jedwali lako."],
          words: [["Wastani wa mauzo", "jumla ya mauzo ukigawanya kwa idadi ya wateja."], ["Mfumo (pattern)", "kitu kinachotokea tena na tena katika namba zako."]],
          slides: [
            { title: "Namba tano za kufuatilia", bullets: ["Mauzo kwa siku na wateja", "Wastani wa mauzo", "Bidhaa zinazouzwa zaidi na matumizi ya ofa"] },
            { title: "AI kama jicho la pili", bullets: ["Bandika jumla za wiki, si majina", "Uliza: \"Unaona mifumo gani?\""] },
            { title: "Thibitisha kabla ya kuchukua hatua", bullets: ["Mawazo ya AI ni maswali", "Kagua jedwali lako mwenyewe", "Uliza kwa nini: hali ya hewa, matukio, wafanyakazi"] }
          ],
          tryIt: "Tengeneza jedwali la kufuatilia kila wiki lenye namba tano. Jaza namba za mfano au halisi za wiki nne na uiulize AI inaona mifumo gani. Thibitisha mmoja kwenye jedwali lako.",
          youCanNow: "kufuatilia namba muhimu za mauzo na kutumia AI kusaidia kuona mifumo ambayo kisha unaithibitisha.",
          quickCheck: [
            { objective: "O5", q: "Unahesabuje wastani wa mauzo?", options: ["Mauzo ukigawanya kwa idadi ya wateja", "Wateja ukigawanya kwa siku", "Faida mara mbili", "Idadi ya bidhaa zilizouzwa"], answer: 0, why: "Wastani wa mauzo ni jumla ya mauzo ukigawanya kwa idadi ya wateja." },
            { objective: "O5", q: "Unataka AI iangalie jedwali lako la mauzo la kila wiki. Utafanya nini kwanza?", options: ["Kuongeza majina ya wateja ili ijue zaidi", "Kulibandika kama lilivyo", "Kuondoa majina ya wateja kabla ya kubandika", "Kuongeza namba za kadi za wateja"], answer: 2, why: "Majina ya wateja yanakaa nje ya zana za AI." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Mpango wako wa mauzo wa siku 30",
          minutes: 5,
          goal: "Weka mteja wako, ofa, orodha, ujumbe wa kufuatilia na ufuatiliaji katika mpango mmoja wa siku 30.",
          text: [
            "Mpango unageuza mawazo kuwa vitendo. Wiki 1: weka orodha yako ya wateja na njia ya kujiandikisha. Wiki 2: zindua ofa yako na tuma ujumbe wa asante. Wiki 3: tuma ukumbusho na weka ofa mtandaoni. Wiki 4: tuma wito wa mwisho kabla ya tarehe ya mwisho, kisha kagua namba zako.",
            "Iombe AI igeuze maelezo yako kuwa kalenda yenye kazi za kila wiki. Uweke uwe wa kweli kulingana na saa zako.",
            "Mwishoni, linganisha namba zako na za mwezi uliopita. Endelea na kilichofanya kazi, acha kisichofanya kazi, na panga siku 30 zinazofuata."
          ],
          steps: ["Kusanya mteja wako bora, ofa, mpangilio wa orodha, ujumbe wa kufuatilia na jedwali la kufuatilia.", "Iombe AI itengeneze kalenda ya kazi ya wiki nne.", "Linganisha kazi na saa zako halisi.", "Kagua matokeo siku ya 30."],
          words: [["Mpango wa mauzo", "mpango ulioandikwa wa utakachofanya ili kuuza zaidi, na lini."], ["Tathmini", "kuangalia nyuma matokeo ili kuamua cha kuendelea nacho au cha kubadilisha."]],
          slides: [
            { title: "Wiki nne", bullets: ["Wiki 1: orodha na kujiandikisha", "Wiki 2: zindua ofa, tuma asante", "Wiki 3: ukumbusho; Wiki 4: wito wa mwisho na tathmini"] },
            { title: "AI inatengeneza kalenda", bullets: ["Bandika maelezo yako", "Omba kazi za kila wiki", "Ilinganishe na saa zako"] },
            { title: "Siku ya 30", bullets: ["Linganisha na mwezi uliopita", "Endelea na kilichofanya kazi", "Panga siku 30 zinazofuata"] }
          ],
          tryIt: "Kazi ya mwisho: andika mpango wako wa mauzo wa siku 30 wa ukurasa mmoja wenye mteja bora, ofa, orodha, mfululizo wa ujumbe mitatu na jedwali la kufuatilia. Iombe AI iugeuze kuwa kalenda ya kazi za kila wiki.",
          youCanNow: "kupanga, kuendesha na kutathmini kampeni ya mauzo ya siku 30 kwa biashara yako.",
          quickCheck: [
            { objective: "O6", q: "Wiki 1 ya mpango wa siku 30 ni ya nini?", options: ["Kutuma ujumbe wote kwa mara moja", "Kuweka orodha na njia ya kujiandikisha", "Kumaliza ofa", "Kulinganisha matokeo"], answer: 1, why: "Wiki ya kwanza inaweka orodha na jinsi watu wanavyojiunga nayo." },
            { objective: "O6", q: "Mpango wako wa siku 30 unahitaji saa nyingi kuliko ulizo nazo. Utafanya nini?", options: ["Kuuacha ulivyo na kufanya kazi usiku kucha", "Kuacha mpango", "Kuiomba AI ifanye mauzo", "Kuupunguza ulingane na saa zako halisi"], answer: 3, why: "Mpango unaolingana na saa zako ni mpango unaoweza kuutekeleza kweli." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kufuatilia wateja na kukua",
        questions: [
          { objective: "O4", q: "Kipi kinapaswa kuwa kwenye kila barua pepe ya matangazo nchini Marekani chini ya CAN-SPAM?", options: ["Anwani halali ya posta na njia ya kujiondoa", "Namba ya kadi ya mteja", "Kichwa cha uongo", "Bila jina la mtumaji"], answer: 0, why: "FTC inataja vyote viwili kuwa ni lazima." },
          { objective: "O4", q: "Kwa mujibu wa mwongozo wa FTC, lazima uheshimu ombi la kujiondoa ndani ya muda gani?", options: ["Ikiwa tu wamepiga simu", "Ndani ya mwaka mmoja", "Kamwe", "Ndani ya siku 10 za kazi"], answer: 3, why: "FTC inasema ndani ya siku 10 za kazi." },
          { objective: "O4", q: "Kabla ya kutuma SMS za matangazo unapaswa:", options: ["Kutuma SMS kwa kila namba uliyo nayo", "Kupata ruhusa ya wazi na kukagua sheria za serikali kuu za SMS", "Kununua orodha", "Kuficha jina la biashara yako"], answer: 1, why: "SMS za matangazo zina sheria tofauti za serikali kuu na zinahitaji ruhusa." },
          { objective: "O5", q: "Unahesabuje wastani wa mauzo?", options: ["Mauzo ukigawanya kwa idadi ya wateja", "Mauzo mara wateja", "Faida ukiondoa kodi ya pango", "Wateja ukigawanya kwa siku"], answer: 0, why: "Wastani wa mauzo = jumla ya mauzo / wateja." },
          { objective: "O5", q: "AI inasema Jumanne zako zina mauzo madogo. Unafanya nini?", options: ["Kufunga Jumanne mara moja", "Kupuuza namba", "Kuthibitisha kwenye namba zako mwenyewe na kufikiria kwa nini", "Kumuuliza mshindani"], answer: 2, why: "Mifumo ya AI ni maswali ya kukagua." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI kwa Mauzo na Kukuza Biashara",
    questions: [
      { objective: "O1", q: "Maelezo ya mteja wako bora yanapaswa kuwa:", options: ["\"Kila mtu\"", "Mahususi: ni nani, wanahitaji nini, kwa nini wewe", "Yaliyotokana na makisio kuhusu makundi", "Marefu sana"], answer: 1, why: "Maelezo mahususi yanaongoza ofa bora zaidi." },
      { objective: "O1", q: "Maelezo ya mteja wako bora yanapaswa kutoka wapi?", options: ["AI tu", "Dhana potofu kuhusu watu", "Tovuti yoyote", "Unachoona kwa wateja wako bora halisi"], answer: 3, why: "Tumia unachoona kweli, si makisio." },
      { objective: "O1", q: "AI inawezaje kusaidia kueleza mteja wako bora?", options: ["Haiwezi kusaidia", "Kwa kusoma akaunti yako ya benki", "Kwa kuwapigia wateja simu", "Kwa kukuuliza maswali ya kuboresha"], answer: 3, why: "AI inaweza kupendekeza maswali ya kufikiria." },
      { objective: "O2", q: "Ofa iliyo wazi ina:", options: ["Picha tu", "Bidhaa, bei, sababu ya kununua sasa na tarehe ya mwisho", "Bila bei", "Msimbo wa siri"], answer: 1, why: "Sehemu zote nne zinaifanya iwe wazi." },
      { objective: "O2", q: "Faida ni nini?", options: ["Punguzo", "Pesa zote zinazoingia", "Pesa inayobaki baada ya gharama", "Mkopo"], answer: 2, why: "Faida ni mapato ukiondoa gharama." },
      { objective: "O2", q: "Kuita bei yako ya kawaida \"punguzo\" ni:", options: ["Kupotosha", "Werevu", "Lazima", "Sawa kila siku"], answer: 0, why: "Ofa lazima ziwe za kweli." },
      { objective: "O3", q: "Safu ipi inasaidia kuthibitisha kuwa mteja alikubali kupokea ujumbe?", options: ["Namba ya kadi", "Rangi anayoipenda", "Amekubali kupokea ujumbe (ndiyo/hapana na tarehe)", "Nywila"], answer: 2, why: "Kurekodi ruhusa ni muhimu." },
      { objective: "O3", q: "Njia nzuri ya kukusanya watu wanaojiandikisha ni:", options: ["Msimbo wa QR unaoelekeza kwenye fomu ya kujiandikisha", "Kunakili namba kutoka kwenye risiti bila kuuliza", "Kununua orodha", "Kubahatisha barua pepe"], answer: 0, why: "Watu wanachagua wenyewe kujiunga." },
      { objective: "O3", q: "Orodha yako ya wateja inapaswa:", options: ["Kuwekwa mtandaoni", "Kulindwa na kukaa nje ya zana za AI", "Kushirikiwa na mtu yeyote", "Kubandikwa kwenye mazungumzo"], answer: 1, why: "Taarifa za wateja ni siri." },
      { objective: "O4", q: "Mfululizo rahisi wa kufuatilia unaanza na:", options: ["Hakuna kitu", "Kumshinikiza mteja anunue", "Lalamiko", "Asante baada ya ziara"], answer: 3, why: "Kushukuru kwanza kunajenga uhusiano." },
      { objective: "O4", q: "Chini ya CAN-SPAM, barua pepe ya matangazo lazima:", options: ["Iweke wazi kuwa ni tangazo", "Imfiche mtumaji", "Itumie kichwa cha uongo", "Isiwe na anwani"], answer: 0, why: "FTC inataka matangazo yatambulishwe." },
      { objective: "O4", q: "Mwongozo wa CAN-SPAM unatolewa na ofisi ipi?", options: ["IRS", "DMV", "Ofisi ya posta", "FTC"], answer: 3, why: "FTC inachapisha mwongozo wa kufuata sheria." },
      { objective: "O4", q: "SMS za matangazo zinasimamiwa na:", options: ["CAN-SPAM tu", "Hakuna sheria kabisa", "Sheria tofauti za serikali kuu (TCPA) zinazosimamiwa na FCC", "Sheria za maegesho za jimbo tu"], answer: 2, why: "SMS zina sheria zake." },
      { objective: "O5", q: "Ipi ni mojawapo ya namba tano za kufuatilia?", options: ["Wimbo unaoupenda", "Wastani wa mauzo", "Kodi ya pango ya mshindani", "Nywila yako"], answer: 1, why: "Wastani wa mauzo unaonyesha kila mteja anatumia kiasi gani." },
      { objective: "O5", q: "Nini kinapaswa kufanya jumla kwenye jedwali lako la kufuatilia?", options: ["Wateja", "Makisio ya AI", "Kumbukumbu", "Fomula za spreadsheet"], answer: 3, why: "Fomula zinahesabu kwa uhakika." },
      { objective: "O5", q: "Kabla ya kubandika namba kwenye AI, ondoa:", options: ["Jumla", "Tarehe za wiki", "Majina ya wateja", "Majina ya bidhaa"], answer: 2, why: "Majina ni siri." },
      { objective: "O6", q: "Wiki 1 ya mpango wa siku 30 ni ya:", options: ["Kuweka orodha na njia ya kujiandikisha", "Kufunga biashara", "Kupandisha bei zote", "Kuwafukuza wafanyakazi"], answer: 0, why: "Orodha inakuja kwanza." },
      { objective: "O6", q: "Kwa nini ulinganishe mpango na saa zako halisi?", options: ["Ili uwe mrefu zaidi", "Ili uweze kuutekeleza kweli", "Haijalishi", "Ili AI ifurahi"], answer: 1, why: "Mipango ya kweli inatekelezwa." },
      { objective: "O6", q: "Siku ya 30 unapaswa:", options: ["Kusahau namba", "Kulinganisha matokeo na kuendelea na kilichofanya kazi", "Kuanza upya bila kuangalia", "Kufuta orodha"], answer: 1, why: "Tathmini inaongoza siku 30 zinazofuata." },
      { objective: "O6", q: "Katika kozi hii, nani anafanya mauzo?", options: ["Wewe na uhusiano wako na wateja, AI ikiwa msaidizi", "AI peke yake", "Hakuna mtu", "Roboti inayojifanya kuwa wewe"], answer: 0, why: "AI inakusaidia kuandika na kufikiri; wewe ndiye unayeuza." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi amepiga hatua kiasi gani
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 3, 4, 6, 8, 9, 10, 13, 15, 18] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Mteja bora", objective: "O1", notYet: "Hayako wazi, kwa mfano \"kila mtu\".", meets: "Sentensi tatu mahususi: ni nani, wanahitaji nini na kwa nini wewe.", exceeds: "Yametokana na wateja bora halisi na kuboreshwa kwa maswali ya AI." },
      { name: "Ofa", objective: "O2", notYet: "Haina bei au tarehe ya mwisho, au inapoteza pesa.", meets: "Ofa moja iliyo wazi na ya kweli yenye bei, sababu ya kununua sasa na tarehe ya mwisho.", exceeds: "Faida imehesabiwa na kuandikwa kando yake." },
      { name: "Orodha ya wateja", objective: "O3", notYet: "Haina safu ya ruhusa, au haina njia ya kujiandikisha.", meets: "Inasema orodha iko wapi na watu walijiunga vipi, na ruhusa imerekodiwa.", exceeds: "Inaeleza jinsi orodha inavyolindwa na kuwekwa nje ya zana za AI." },
      { name: "Mfululizo wa kufuatilia", objective: "O4", notYet: "Ujumbe chini ya mitatu, au barua pepe ya matangazo haina anwani au mstari wa kujiondoa.", meets: "Ujumbe mitatu, wenye anwani na mstari wa kujiondoa kwenye barua pepe ya matangazo.", exceeds: "Inaeleza ruhusa na sheria zinazohitajika kabla ya SMS yoyote ya matangazo." },
      { name: "Jedwali la kufuatilia", objective: "O5", notYet: "Hakuna jedwali au hakuna namba za kila wiki.", meets: "Jedwali lenye namba za kukagua kila wiki, likitumia fomula.", exceeds: "Lina tathmini ya siku ya 30 ili kuendelea na kilichofanya kazi." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wamiliki wanaoendesha kampeni yao ya mauzo ya siku 30 (utafiti wa kufuatilia baada ya siku 30)",
      "Wamiliki wanaoripoti mauzo zaidi au wateja wengi zaidi wanaorudi baada ya siku 30, kutoka jedwali lao la kufuatilia",
      "Wamiliki wanaokuza orodha ya wateja yenye ruhusa ndani ya siku 60"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta au simu janja yenye intaneti",
      "Msaidizi wa AI wa bure na spreadsheet ya bure (Google Sheets au Microsoft Excel)",
      "Karatasi na kalamu kuhesabu gharama na faida",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Tumia mistari ya mfano ya kubuni katika orodha za mazoezi; usibandike kamwe orodha halisi za wateja kwenye AI.",
      "Fungueni mwongozo wa CAN-SPAM wa FTC pamoja na onyesha kuwa SMS zina sheria tofauti.",
      "Pitia mfano mmoja wa gharama na faida kwenye karatasi kabla wamiliki hawajaweka ofa yao.",
      "Wahimize wamiliki kulinganisha mpango wao wa siku 30 na saa zao halisi za kila wiki.",
      "Pima mpango kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
