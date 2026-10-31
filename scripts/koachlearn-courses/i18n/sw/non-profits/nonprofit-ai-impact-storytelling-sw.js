"use strict";

// Koach Learn course (Swahili translation of non-profits/nonprofit-ai-impact-storytelling.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "nonprofit-ai-impact-storytelling-sw",
  lang: "sw",
  translationOf: "nonprofit-ai-impact-storytelling",
  category: "Non Profits",
  name: "AI kwa Kusimulia Hadithi za Matokeo ya Kijamii",
  skills: "Kupata ridhaa ya taarifa kamili, Kukusanya hadithi kwa heshima, Kupanga hadithi kwa muundo rahisi, Kuongeza namba za kweli, Kutumia AI kuandika na kurekebisha hadithi, Kukagua hadithi kwa ukweli na heshima",
  outcome: "kupata ridhaa ya maandishi kutoka kwa mtu ambaye mpango wako unamhudumia, kupanga hadithi yake kwa muundo rahisi na namba moja ya kweli, kutumia msaidizi wa AI kuandika rasimu na kuirekebisha kwa jarida, chapisho la mitandao ya kijamii na ripoti ya ruzuku, na kuikagua kwa ukweli na heshima kabla ya kuishiriki.",
  about: [
    "Kozi hii ni kwa wafanyakazi, wajitolea na viongozi wa mashirika yasiyo ya kiserikali na ya kidini wanaoshiriki na wafadhili, watoa ruzuku, wanachama na umma tofauti ambayo kazi yao inaleta.",
    "Hadithi zinawasukuma watu kutoa na kusaidia, lakini ni mali ya watu waliomo ndani yake. Utajifunza kuomba ruhusa ipasavyo, kusimulia hadithi kwa heshima, kuiunga mkono kwa namba za kweli, na kutumia AI (kama ChatGPT, Microsoft Copilot au Google Gemini) kuandika na kurekebisha hadithi bila kuweka taarifa binafsi za mtu yeyote ndani ya AI.",
    "Kila somo linachukua kama dakika tano. Soma somo, tazama slaidi, kisha fanya kazi ya \"Jaribu sasa\". Kuna jaribio fupi la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Chukua hadithi moja halisi ya mpango wako (yenye ridhaa ya maandishi) au hadithi ya mazoezi iliyobuniwa kabisa. Andika ukweli wake kwa muundo wa Kabla, Hatua ya mabadiliko, Baada, na uongeze namba moja ya kweli ya mpango. Tumia AI pamoja na vishika-nafasi kuandika rasimu ya hadithi ya jarida ya maneno 150, chapisho la mitandao ya kijamii la maneno 40 na aya ya ripoti ya ruzuku ya maneno 100. Kagua zote tatu kwa fomu ya ridhaa na orodha ya kukagua heshima, na urekebishe chochote kisichopita.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wafanyakazi, wajitolea na viongozi wa mashirika yasiyo ya kiserikali na ya kidini wanaoshiriki na wafadhili, watoa ruzuku, wanachama na umma tofauti ambayo kazi yao inaleta.",
    startingPoint: "Wanasikia hadithi zenye nguvu kutoka kwa watu wanaowahudumia na wanashiriki baadhi katika majarida au machapisho. Wengi hawana utaratibu wa ridhaa ya maandishi na hawajafikiria kuhusu heshima katika maneno au hatari za kutumia AI na hadithi halisi.",
    gap: "Hadithi zinawagusa wafadhili na watoa ruzuku, lakini hadithi inayoshirikiwa bila ridhaa, yenye maneno ya kuhurumia au yenye mambo ya kubuni inaweza kumuumiza mtu huyo na kuharibu uaminifu wa shirika. Wanafunzi wanahitaji utaratibu salama kuanzia ridhaa hadi ukaguzi wa mwisho, wakitumia AI kuandika na kurekebisha hadithi bila kumfichua mtu yeyote.",
    constraints: [
      "Ridhaa ya maandishi yenye taarifa kamili kabla ya kutumia hadithi, picha au maneno ya mtu yeyote; wazazi au walezi kwa watoto",
      "Baadhi ya hadithi hazipaswi kusimuliwa hata kukiwa na ridhaa, kama za walionusurika na unyanyasaji au watu walio katika kesi za uhamiaji",
      "Faragha: hakuna majina kamili, anwani, taarifa za afya au maelezo ya kesi katika zana za AI",
      "Picha zilizotengenezwa na AI zinawekewa alama na kamwe hazichukui nafasi ya wateja halisi",
      "Muda: kama dakika 60 kwa jumla, katika masomo ya dakika 5"
    ],
    prerequisites: "Kozi \"Utangulizi wa AI kwa Mashirika Yasiyo ya Kiserikali\", au uzoefu fulani wa kutumia msaidizi wa AI."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Kabla ya kutumia hadithi, picha au maneno ya mtu yeyote", action: "kuomba na kurekodi ridhaa ya maandishi yenye taarifa kamili, ikiwemo mahali itakaposhirikiwa na jinsi anavyotaka kutajwa", standard: "mtu huyo akiwa ameambiwa kwamba anaweza kukataa au kubadili mawazo bila kupoteza msaada" },
    { id: "O2", condition: "Ukipewa rasimu ya hadithi", action: "kuiandika upya ili mtu huyo awe shujaa, kwa maneno yanayomtanguliza mtu na bila maneno ya kuhurumia", standard: "ukiacha mambo yanayoweza kumtambulisha au kumwaibisha" },
    { id: "O3", condition: "Ukipewa maelezo ya hadithi", action: "kupanga hadithi kama Kabla, Hatua ya mabadiliko, Baada na kuongeza namba moja ya kweli ya mpango", standard: "namba ikitoka katika kumbukumbu zako mwenyewe zilizokaguliwa" },
    { id: "O4", condition: "Ukipewa maelezo yako ya hadithi", action: "kuandika prompt ya AI yenye vishika-nafasi na mambo ya jumla ili kupata rasimu", standard: "bila jina kamili, anwani, taarifa za afya au maelezo ya kesi katika prompt" },
    { id: "O5", condition: "Ukipewa rasimu moja ya hadithi", action: "kuirekebisha kuwa hadithi ya jarida, chapisho la mitandao ya kijamii na aya ya ripoti ya ruzuku", standard: "ukitumia kila toleo tu mahali ambapo fomu ya ridhaa inaruhusu" },
    { id: "O6", condition: "Kabla hadithi haijatolewa", action: "kuikagua kwa ukweli, ridhaa, heshima na namba na kurekebisha chochote kisichopita", standard: "kila jambo likilingana na maelezo yako na fomu ya ridhaa" }
  ],
  chapters: [
    {
      name: "Sura 1: Hadithi zinazowaheshimu watu",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ridhaa kwanza",
          minutes: 5,
          goal: "Omba na urekodi ridhaa yenye taarifa kamili kabla ya kutumia hadithi, picha au maneno ya mtu yeyote.",
          text: [
            "Hadithi ya mtu ni yake. Kabla ya kuishiriki, omba ridhaa yenye taarifa kamili: mtu aelewe utashiriki nini, wapi (jarida, tovuti, mitandao ya kijamii, ripoti za ruzuku), kwa muda gani, na kwamba anaweza kukataa au kubadili mawazo bila kupoteza msaada wowote.",
            "Pata ridhaa kwa maandishi kwa fomu rahisi, na kwa watoto pata ridhaa ya mzazi au mlezi. Mwache mtu achague: jina halisi, jina la kwanza tu, au jina lililobadilishwa; picha au bila picha. Andika alichokubali na ukiweke pamoja na hadithi.",
            "Baadhi ya hadithi hazipaswi kusimuliwa hata kukiwa na ridhaa ikiwa kuzishiriki kunaweza kumweka mtu hatarini, kwa mfano walionusurika na unyanyasaji, watu walio katika kesi za uhamiaji au watu wanaopona uraibu. Ukiwa na shaka, muulize mkurugenzi wako. Shirika lako linaweza kuwa na fomu yake ya ridhaa; itumie. Muulize wakili au chama chako mwavuli ikiwa unahitaji fomu ikaguliwe."
          ],
          steps: ["Eleza utashiriki nini, wapi na kwa muda gani.", "Weka wazi kwamba anaweza kukataa bila kupoteza msaada wowote.", "Mwache achague jina, picha na mambo ya kushiriki.", "Pata sahihi (ya mzazi au mlezi kwa watoto).", "Weka fomu pamoja na hadithi na uheshimu akibadili mawazo."],
          words: [["Ridhaa yenye taarifa kamili", "\"ndiyo\" iliyo wazi inayotolewa na mtu anayeelewa hasa jinsi hadithi yake itakavyotumika."], ["Mlezi", "mtu mzima aliye na wajibu wa kisheria kwa mtoto."]],
          slides: [
            { title: "Hadithi ni yao", bullets: ["Omba kabla ya kushiriki", "Kukataa hakuathiri kamwe msaada wao"] },
            { title: "Ridhaa yenye taarifa kamili inahusu", bullets: ["Utashiriki nini", "Wapi na kwa muda gani", "Uchaguzi wa jina na picha", "Haki ya kubadili mawazo"] },
            { title: "Ipate kwa maandishi", bullets: ["Fomu rahisi yenye sahihi", "Mzazi au mlezi kwa watoto", "Iweke pamoja na hadithi"] },
            { title: "Wakati wa kutoshiriki", bullets: ["Ikiwa kushiriki kunaweza kuwaweka hatarini", "Ukiwa na shaka, muulize mkurugenzi wako"] }
          ],
          tryIt: "Andika orodha ya kukagua ya mistari mitano kuhusu ridhaa kwa shirika lako inayohusu nini, wapi, kwa muda gani, uchaguzi wa jina na picha, na haki ya kukataa. Ilinganishe na fomu yoyote ambayo shirika lako tayari linatumia.",
          youCanNow: "kuomba na kurekodi ridhaa yenye taarifa kamili kabla ya kushiriki hadithi ya mtu.",
          quickCheck: [
            { objective: "O1", q: "Mtu anapaswa kupewa uchaguzi gani wa jina?", options: ["Jina halisi, jina la kwanza tu, au jina lililobadilishwa", "Jina lake kamili la kisheria tu", "Picha tu bila jina", "Chochote wafanyakazi wanachopenda"], answer: 0, why: "Mwache mtu achague jinsi atakavyotajwa, na kama picha itatumika." },
            { objective: "O1", q: "Mwanamke aliyenusurika na unyanyasaji anataka kushiriki hadithi yake, lakini kuishiriki kunaweza kumweka hatarini. Unafanya nini?", options: ["Ishiriki, kwa kuwa alikubali", "Muulize mkurugenzi wako, kwa sababu baadhi ya hadithi hazipaswi kusimuliwa hata kukiwa na ridhaa", "Ishiriki pamoja na jina lake kamili", "Iweke kwenye mitandao ya kijamii tu"], answer: 1, why: "Baadhi ya hadithi hazipaswi kusimuliwa hata kukiwa na ridhaa ikiwa kuzishiriki kunaweza kumweka mtu hatarini." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kusimulia hadithi kwa heshima",
          minutes: 5,
          goal: "Andika upya hadithi ili mtu awe shujaa, si mhanga.",
          text: [
            "Heshima ina maana ya kuwaonyesha watu kama watu wenye uwezo, wenye nguvu na uchaguzi wao wenyewe, si kama wahanga wasio na msaada. Mtu ndiye shujaa wa hadithi; shirika lako ni msaidizi.",
            "Tumia maneno yanayomtanguliza mtu (\"mwanaume anayeishi bila makazi\", si \"mwanaume asiye na makao\"). Epuka maneno ya kuhurumia kama \"maskini\", \"anayeteseka\" au \"aliyevunjika\". Usitie chumvi. Tumia maneno yake mwenyewe katika alama za nukuu ikiwa alikubali.",
            "Acha mambo yasiyohitajika ambayo yanaweza kumtambulisha au kumwaibisha: anwani kamili, taarifa za afya, matatizo ya kisheria, majina ya shule za watoto."
          ],
          steps: ["Mfanye mtu kuwa mhusika mkuu wa hadithi.", "Tumia maneno yanayomtanguliza mtu.", "Ondoa maneno ya kuhurumia na kutia chumvi.", "Ondoa mambo yasiyohitajika.", "Tumia maneno yake mwenyewe ikiwa alikubali."],
          words: [["Heshima", "kuwaonyesha watu kwa staha, kama watu wenye uwezo na nguvu zao wenyewe."], ["Lugha inayomtanguliza mtu", "kumtaja mtu kabla ya hali yake, kama \"mwanamke anayeishi bila makazi\"."]],
          slides: [
            { title: "Mtu ndiye shujaa", bullets: ["Yeye anatenda na kuchagua", "Shirika lako linasaidia"] },
            { title: "Maneno yana uzito", bullets: ["Mtu kwanza: \"mwanaume anayeishi bila makazi\"", "Hakuna maneno ya kuhurumia: maskini, anayeteseka, aliyevunjika", "Hakuna kutia chumvi"] },
            { title: "Acha nje", bullets: ["Anwani kamili", "Taarifa za afya na za kisheria", "Majina ya shule za watoto"] }
          ],
          tryIt: "Andika upya sentensi hii kwa heshima: \"Maria maskini, aliyevunjika, hakuwa na makao wala msaada hadi tulipomwokoa.\" Mfanye Maria kuwa shujaa na uondoe maneno ya kuhurumia.",
          youCanNow: "kuandika kuhusu watu unaowahudumia kwa heshima na staha.",
          quickCheck: [
            { objective: "O2", q: "Katika hadithi yenye heshima, shirika lako lina nafasi gani?", options: ["Shujaa", "Mhanga", "Msaidizi", "Mwamuzi"], answer: 2, why: "Mtu ndiye shujaa; shirika lako ni msaidizi." },
            { objective: "O2", q: "Rasimu inasema \"Bi. [Jina] maskini alikuwa anateseka.\" Unafanya nini?", options: ["Iache; inawagusa wafadhili", "Ongeza maneno zaidi ya kuhurumia", "Ifanye ndefu zaidi", "Ondoa maneno ya kuhurumia na uonyeshe nguvu na uchaguzi wake"], answer: 3, why: "Epuka maneno ya kuhurumia kama \"maskini\" na \"anayeteseka\"; waonyeshe watu kama wenye uwezo." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Muundo rahisi wa hadithi pamoja na namba moja ya kweli",
          minutes: 5,
          goal: "Panga hadithi kama Kabla, Hatua ya mabadiliko, Baada, na uongeze namba moja ya kweli ya mpango.",
          text: [
            "Muundo rahisi unafanya hadithi iwe rahisi kufuata. Kabla: maisha yalikuwaje na mtu alitaka nini. Hatua ya mabadiliko: alifanya nini, kwa msaada wa mpango wako. Baada: nini kilibadilika, kwa mambo yanayoonekana.",
            "Kisha ongeza namba moja ya kweli kuonyesha kwamba hadithi ni sehemu ya jambo kubwa zaidi: \"Maria ni mmoja wa wazazi 84 waliomaliza mpango wetu wa mafunzo ya kazi mwaka huu.\" Tumia namba kutoka kumbukumbu zako mwenyewe, na usizipandishe wala kukisia.",
            "Hadithi ya mtu mmoja inawafanya watu wajali; namba inaonyesha ukubwa wa matokeo yako. Watoa ruzuku wanataka vyote viwili."
          ],
          steps: ["Andika Kabla: maisha na lengo.", "Andika Hatua ya mabadiliko: alichofanya kwa msaada wako.", "Andika Baada: badiliko linaloonekana.", "Ongeza namba moja ya kweli kutoka kumbukumbu zako.", "Kagua namba na mtu anayetunza takwimu zenu."],
          words: [["Matokeo (impact)", "badiliko halisi ambalo kazi yako inaleta katika maisha ya watu."], ["Tokeo linalopimika (outcome)", "matokeo yanayoweza kupimwa, kama \"wazazi 84 walimaliza mafunzo\"."]],
          slides: [
            { title: "Kabla, Hatua ya mabadiliko, Baada", bullets: ["Kabla: maisha na lengo", "Hatua ya mabadiliko: alichofanya, msaada wako", "Baada: badiliko linaloonekana"] },
            { title: "Ongeza namba moja ya kweli", bullets: ["Kutoka kumbukumbu zako mwenyewe", "Bila kupandisha wala kukisia"] },
            { title: "Kwa nini vyote viwili", bullets: ["Hadithi inawafanya watu wajali", "Namba inaonyesha ukubwa wa matokeo"] }
          ],
          tryIt: "Ukitumia hadithi yenye ridhaa au hadithi ya mazoezi iliyobuniwa, andika mistari mitatu mifupi (Kabla, Hatua ya mabadiliko, Baada) na namba moja ya kweli kutoka mpango wako.",
          youCanNow: "kupanga hadithi kwa muundo ulio wazi na kuiunga mkono kwa namba ya kweli.",
          quickCheck: [
            { objective: "O3", q: "Nini kinaingia katika Hatua ya mabadiliko?", options: ["Alichofanya mtu, kwa msaada wa mpango wako", "Anwani ya mtu", "Bajeti yako", "Orodha ya wafadhili"], answer: 0, why: "Hatua ya mabadiliko ni alichofanya, kwa msaada wa mpango wako." },
            { objective: "O3", q: "Unadhani watu kama 90 walimaliza mpango, lakini kumbukumbu zako zinasema 84. Unatumia ipi?", options: ["Kama 90, kupandisha", "84, kutoka kumbukumbu zako", "100, ili isikike kubwa", "Hakuna namba kabisa"], answer: 1, why: "Tumia namba kutoka kumbukumbu zako mwenyewe; usipandishe wala kukisia." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Hadithi zinazowaheshimu watu",
        questions: [
          { objective: "O1", q: "Lazima uwe na nini kabla ya kushiriki hadithi ya mteja?", options: ["Picha nzuri", "Idhini ya mfadhili", "Ridhaa yake yenye taarifa kamili", "Rasimu ya AI"], answer: 2, why: "Hadithi ni mali ya mtu huyo; lazima akubali kwanza." },
          { objective: "O1", q: "Mteja anakataa hadithi yake ishirikiwe. Nini kinatokea kwa msaada wake?", options: ["Hakuna kinachobadilika; bado anapata msaada", "Unasimama", "Unapunguzwa", "Lazima alipe"], answer: 0, why: "Ridhaa lazima itolewe kwa hiari; kukataa hakuathiri kamwe msaada." },
          { objective: "O2", q: "Ipi ni lugha inayomtanguliza mtu?", options: ["\"mwanaume asiye na makao\"", "\"wasio na makao\"", "\"mwanaume maskini aliyevunjika\"", "\"mwanaume anayeishi bila makazi\""], answer: 3, why: "Inamtaja mtu kabla ya hali yake." },
          { objective: "O3", q: "Katika muundo wa Kabla, Hatua ya mabadiliko, Baada, nini kinaingia katika Baada?", options: ["Jina la mfadhili", "Badiliko linaloonekana", "Anwani ya shirika", "Bajeti"], answer: 1, why: "Baada inaonyesha nini kilibadilika." },
          { objective: "O3", q: "Namba ipi ni sahihi kutumia?", options: ["Makisio yanayosikika makubwa", "Namba kutoka kumbukumbu zako mwenyewe, iliyokaguliwa", "Namba iliyopandishwa", "Namba iliyobuniwa na AI"], answer: 1, why: "Namba za kweli zinatoka katika kumbukumbu zako mwenyewe zilizokaguliwa." }
        ]
      }
    },
    {
      name: "Sura 2: Kuandika na kushiriki hadithi kwa AI",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuandika rasimu ya hadithi kwa AI, kwa usalama",
          minutes: 5,
          goal: "Tumia AI kugeuza maelezo yako ya hadithi kuwa rasimu bila kushiriki taarifa binafsi.",
          text: [
            "AI inaweza kugeuza maelezo yako ya Kabla, Hatua ya mabadiliko, Baada kuwa rasimu laini kwa sekunde chache. Lakini kamwe usibandike jina kamili, anwani, taarifa za afya au maelezo ya kesi ya mtu halisi katika zana ya AI. Zana nyingi za AI zinaweza kuhifadhi unachoandika.",
            "Tumia vishika-nafasi na mambo ya jumla: \"Andika hadithi ya jarida ya maneno 150. [Jina], mzazi anayelea peke yake, alitaka kazi ya kudumu. Alimaliza mafunzo yetu ya kazi ya wiki 10 na sasa anafanya kazi kama msaidizi wa ofisi ya matibabu. Wazazi 84 walimaliza mpango mwaka huu. Lugha ya upole, yenye heshima, inayomtanguliza mtu, bila maneno ya kuhurumia.\"",
            "Ukishapata rasimu, weka mambo halisi wewe mwenyewe, lakini yale tu ambayo mtu alikubali kwenye fomu ya ridhaa."
          ],
          steps: ["Anza na maelezo yako yaliyopangwa.", "Badilisha majina na taarifa binafsi kwa vishika-nafasi.", "Omba urefu, sauti na lugha inayomtanguliza mtu.", "Omba badiliko moja au mawili.", "Ongeza wewe mwenyewe mambo halisi yaliyokubaliwa tu."],
          words: [["Kishika-nafasi", "neno la muda kama [Jina] ambalo unalibadilisha baadaye."], ["Rasimu", "toleo la kwanza utakalolikagua na kuliboresha."]],
          slides: [
            { title: "Usibandike kamwe katika AI", bullets: ["Majina kamili na anwani", "Taarifa za afya au maelezo ya kesi", "Taarifa za watoto"] },
            { title: "Prompt salama ya hadithi", bullets: ["Vishika-nafasi kama [Jina]", "Maelezo yako ya Kabla, Hatua ya mabadiliko, Baada", "Urefu, sauti, maneno yanayomtanguliza mtu"] },
            { title: "Baada ya rasimu", bullets: ["Ongeza tu mambo aliyokubali", "Kagua kwa fomu ya ridhaa"] }
          ],
          tryIt: "Geuza maelezo yako kutoka Somo la 3 kuwa prompt salama yenye vishika-nafasi na uombe AI hadithi ya jarida ya maneno 150. Omba badiliko moja, kisha ongeza mambo yaliyokubaliwa tu.",
          youCanNow: "kuandika rasimu ya hadithi ya matokeo kwa AI huku ukilinda faragha ya mtu.",
          quickCheck: [
            { objective: "O4", q: "Kwa nini usiweke majina halisi na maelezo ya kesi katika zana za AI?", options: ["AI haiwezi kusoma majina", "Inafanya rasimu ziwe ndefu", "Zana nyingi za AI zinaweza kuhifadhi unachoandika", "AI inaandika kwa herufi kubwa tu"], answer: 2, why: "Zana nyingi za AI zinaweza kuhifadhi unachoandika." },
            { objective: "O4", q: "Mtu alikubali jina lake la kwanza lishirikiwe lakini si kazi yake. Unaongeza nini kwenye rasimu ya AI?", options: ["Jina lake kamili na kazi yake", "Anwani yake", "Hakuna kitu kabisa", "Jina lake la kwanza tu"], answer: 3, why: "Ongeza tu mambo halisi ambayo mtu alikubali kwenye fomu ya ridhaa." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kurekebisha hadithi moja kwa hadhira tofauti",
          minutes: 5,
          goal: "Geuza hadithi moja kuwa makala ya jarida, chapisho la mitandao ya kijamii na aya ya ripoti ya ruzuku.",
          text: [
            "Wasomaji tofauti wanahitaji matoleo tofauti. Wafadhili wanaosoma jarida wanataka ukarimu wa moyo na njia ya kusaidia. Mitandao ya kijamii inahitaji maneno machache na hatua moja iliyo wazi. Ripoti ya ruzuku inahitaji ukweli, matokeo yanayopimika na jinsi pesa ya mtoa ruzuku ilivyosaidia.",
            "Iombe AI irekebishe rasimu: \"Geuza hadithi hii kuwa chapisho la mitandao ya kijamii la maneno 40 lenye mwito mmoja wa kuchukua hatua, na aya ya ripoti ya ruzuku ya maneno 100 inayotaja matokeo na namba.\" Tumia hadithi tu mahali ambapo mtu alikubali.",
            "Picha zilizotengenezwa na AI hazipaswi kamwe kujifanya kuwa watu halisi unaowahudumia. Ukitumia picha iliyotengenezwa na AI, iwekee alama, na usiitumie kuchukua nafasi ya mteja halisi."
          ],
          steps: ["Kagua fomu ya ridhaa uone unaweza kushiriki wapi.", "Iombe AI toleo fupi la mitandao ya kijamii lenye hatua moja.", "Iombe AI toleo la ripoti ya ruzuku lenye matokeo na namba.", "Linganisha matoleo kwa ukweli.", "Weka alama kwenye picha yoyote iliyotengenezwa na AI."],
          words: [["Hadhira", "watu watakaosoma au kuona unachoshiriki."], ["Ripoti ya ruzuku", "ripoti kwa mtoa ruzuku inayoonyesha pesa yake ilifanya nini."]],
          slides: [
            { title: "Hadithi moja, matoleo matatu", bullets: ["Jarida: la upole, njia ya kusaidia", "Mitandao ya kijamii: fupi, hatua moja", "Ripoti ya ruzuku: ukweli na matokeo"] },
            { title: "Mahali walipokubali tu", bullets: ["Kagua fomu ya ridhaa kwanza", "Ndiyo kwa tovuti si ndiyo kwa mitandao ya kijamii"] },
            { title: "Picha za AI", bullets: ["Zisijifanye kamwe kuonyesha wateja halisi", "Weka alama kwenye picha za AI"] }
          ],
          tryIt: "Iombe AI irekebishe hadithi yako ya jarida kuwa chapisho la mitandao ya kijamii la maneno 40 na aya ya ripoti ya ruzuku ya maneno 100. Hakikisha kila mahali panaruhusiwa kwenye fomu ya ridhaa.",
          youCanNow: "kurekebisha hadithi moja kwa wafadhili, mitandao ya kijamii na watoa ruzuku.",
          quickCheck: [
            { objective: "O5", q: "Wafadhili wanaosoma jarida wanataka nini?", options: ["Ukarimu wa moyo na njia ya kusaidia", "Jedwali la bajeti", "Lugha ya kisheria", "Namba tu"], answer: 0, why: "Wafadhili wa jarida wanataka ukarimu wa moyo na njia ya kusaidia." },
            { objective: "O5", q: "Huna picha ya mtu halisi, kwa hiyo AI inatengeneza picha ya familia inayotabasamu. Unaitumiaje?", options: ["Sema ni familia uliyoihudumia", "Iwekee alama kwamba imetengenezwa na AI na usiionyeshe kama mteja halisi", "Itumie bila alama yoyote", "Weka jina la mtu chini yake"], answer: 1, why: "Picha zilizotengenezwa na AI lazima ziwekewe alama na kamwe zisichukue nafasi ya mteja halisi." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kukagua hadithi kabla haijatolewa",
          minutes: 5,
          goal: "Tumia orodha fupi ya kukagua kugundua makosa, mambo ya kubuni na matatizo ya heshima.",
          text: [
            "Wakati mwingine AI inaongeza mambo yasiyo ya kweli: mtoto wa ziada, cheo cha kazi ambacho mtu hakuwahi kuwa nacho, nukuu ambayo hakuwahi kusema. Haya yanaweza kumuumiza mtu huyo na kuharibu uaminifu wa shirika lako.",
            "Kabla ya kushiriki, kagua: Ukweli (kila jambo ni la kweli na liko katika maelezo yako?), Ridhaa (kila jambo na kila mahali vinaruhusiwa?), Heshima (mtu ndiye shujaa, kwa maneno yanayomtanguliza mtu?), na Namba (namba inatoka katika kumbukumbu zako?). Ikiwezekana, mwache mtu asome hadithi yake kabla haijatolewa.",
            "Weka nakala ya toleo la mwisho pamoja na fomu ya ridhaa, na uondoe hadithi ikiwa mtu ataomba."
          ],
          steps: ["Ukweli: linganisha kila jambo na maelezo yako; ondoa chochote AI ilichoongeza.", "Ridhaa: kagua kila jambo na kila mahali kwa fomu.", "Heshima: shujaa, maneno yanayomtanguliza mtu, bila kuhurumia.", "Namba: thibitisha kutoka kumbukumbu zako.", "Mwache mtu aisome ikiwezekana, kisha iweke pamoja na fomu ya ridhaa."],
          words: [["Kubuni (fabrication)", "jambo lililotungwa linaloonyeshwa kama la kweli."], ["Orodha ya kukagua", "orodha ya ukaguzi unaopitia kila wakati."]],
          slides: [
            { title: "AI inaweza kuongeza mambo yasiyo ya kweli", bullets: ["Watu au matukio ya ziada", "Vyeo vya kazi au nukuu ambazo hazikusemwa"] },
            { title: "Ukaguzi minne", bullets: ["Ukweli", "Ridhaa", "Heshima", "Namba"] },
            { title: "Maliza vizuri", bullets: ["Mwache mtu aisome ikiwezekana", "Iweke pamoja na fomu ya ridhaa", "Iondoe akiomba"] }
          ],
          tryIt: "Kazi ya mwisho: pitisha matoleo yako matatu (jarida, chapisho la mitandao ya kijamii, aya ya ruzuku) katika ukaguzi minne. Rekebisha chochote kisichopita na uandike ulichobadilisha.",
          youCanNow: "kukagua hadithi za matokeo kwa ukweli, ridhaa, heshima na namba za kweli kabla ya kuzishiriki.",
          quickCheck: [
            { objective: "O6", q: "Ipi ni mojawapo ya ukaguzi minne kabla ya kushiriki?", options: ["Urefu", "Aina ya herufi", "Ridhaa", "Rangi"], answer: 2, why: "Ukaguzi minne ni Ukweli, Ridhaa, Heshima na Namba." },
            { objective: "O6", q: "Familia inakuomba uondoe hadithi yao mwezi mmoja baada ya kuchapishwa. Unafanya nini?", options: ["Iache; walitia sahihi fomu", "Waombe walipe ili iondolewe", "Badilisha neno moja", "Ondoa hadithi"], answer: 3, why: "Ondoa hadithi ikiwa mtu ataomba." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kuandika na kushiriki hadithi kwa AI",
        questions: [
          { objective: "O4", q: "Nini ni salama kuweka katika prompt ya AI ya hadithi?", options: ["Maelezo ya kesi ya mteja", "Anwani ya nyumbani kwake", "Kumbukumbu zake za matibabu", "Vishika-nafasi na mambo ya jumla"], answer: 3, why: "Vishika-nafasi vinazuia taarifa binafsi zisiingie katika AI." },
          { objective: "O5", q: "Fomu ya ridhaa inaruhusu tovuti lakini si mitandao ya kijamii. Unafanya nini?", options: ["Tumia hadithi kwenye tovuti tu", "Ichapishe kwenye mitandao ya kijamii hata hivyo", "Iulize AI", "Badilisha jina na uichapishe kila mahali"], answer: 0, why: "Shiriki tu mahali ambapo mtu alikubali." },
          { objective: "O6", q: "AI iliongeza nukuu ambayo mtu hakuwahi kusema. Unafanya nini?", options: ["Iache, inasikika vizuri", "Ongeza nukuu zaidi", "Iondoe", "Muulize mfadhili"], answer: 2, why: "Mambo ya kubuni yanavunja uaminifu na lazima yaondolewe." },
          { objective: "O5", q: "Toleo lipi linahitaji matokeo na jinsi pesa ya mtoa ruzuku ilivyosaidia?", options: ["Chapisho la mitandao ya kijamii", "Tangazo la tukio", "Kadi ya shukrani", "Ripoti ya ruzuku"], answer: 3, why: "Watoa ruzuku wanataka matokeo yanayohusiana na msaada wao." },
          { objective: "O5", q: "Picha iliyotengenezwa na AI inapaswa kutumikaje?", options: ["Ionyeshwe kama mteja halisi", "Ifichwe nyuma ya picha nyingine", "Iwekewe alama, na isichukue kamwe nafasi ya mteja halisi", "Itumike kama ridhaa"], answer: 2, why: "Picha za AI hazipaswi kujifanya kuonyesha watu halisi unaowahudumia." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI kwa Kusimulia Hadithi za Matokeo ya Kijamii",
    questions: [
      { objective: "O1", q: "Hadithi ya mteja ni mali ya nani?", options: ["Shirika", "Mteja", "Mfadhili", "Zana ya AI"], answer: 1, why: "Ni maisha yake na hadithi yake." },
      { objective: "O1", q: "Ridhaa yenye taarifa kamili ina maana mtu anaelewa:", options: ["Utashiriki nini, wapi na kwa muda gani", "Kwamba picha itapigwa tu", "Hakuna kitu; sahihi inatosha", "Bajeti ya shirika"], answer: 0, why: "Ridhaa ina taarifa kamili tu pale mtu anapojua jinsi itakavyotumika." },
      { objective: "O1", q: "Kwa hadithi ya mtoto, nani anatoa ridhaa?", options: ["Mwalimu wa mtoto", "Mjitolea", "Mzazi au mlezi", "Hakuna mtu"], answer: 2, why: "Mzazi au mlezi lazima akubali kwa niaba ya mtoto." },
      { objective: "O1", q: "Mtu aliyekubali mwezi uliopita sasa anakuomba uondoe hadithi yake. Wewe:", options: ["Unaiondoa", "Unakataa", "Unamwomba alipe", "Unaifupisha"], answer: 0, why: "Watu wanaweza kubadili mawazo." },
      { objective: "O1", q: "Ni lini hadithi inaweza kutoshirikiwa hata kukiwa na ridhaa?", options: ["Ikiwa ni fupi mno", "Ikiwa ni siku ya Jumatatu", "Kamwe", "Ikiwa kushiriki kunaweza kumweka mtu hatarini"], answer: 3, why: "Usalama unatangulia hadithi nzuri." },
      { objective: "O2", q: "Katika hadithi yenye heshima, shujaa ni:", options: ["Shirika", "Mtu unayemhudumia", "Mfadhili", "AI"], answer: 1, why: "Mtu anatenda na kuchagua; wewe unasaidia." },
      { objective: "O2", q: "Neno lipi unapaswa kuliepuka?", options: ["\"alimaliza\"", "\"aliyevunjika\"", "\"alichagua\"", "\"alianza\""], answer: 1, why: "\"Aliyevunjika\" ni neno la kuhurumia." },
      { objective: "O2", q: "Jambo lipi kwa kawaida linapaswa kuachwa nje?", options: ["Badiliko linaloonekana", "Mpango aliojiunga nao", "Lengo lake", "Anwani yake kamili"], answer: 3, why: "Anwani zinaweza kuwatambulisha watu au kuwaweka hatarini." },
      { objective: "O3", q: "Sehemu tatu za muundo wa hadithi ni:", options: ["Kabla, Hatua ya mabadiliko, Baada", "Kichwa, Nembo, Ombi", "Jina, Anwani, Simu", "Tatizo, Bei, Faida"], answer: 0, why: "Muundo huu rahisi ni rahisi kufuata." },
      { objective: "O3", q: "Kwa nini uongeze namba moja ya kweli?", options: ["Kuifanya ndefu zaidi", "Kwa sababu AI inaihitaji", "Kuonyesha kwamba hadithi ni sehemu ya matokeo makubwa zaidi", "Kuchukua nafasi ya ridhaa"], answer: 2, why: "Namba inaonyesha ukubwa wa matokeo yako." },
      { objective: "O3", q: "Namba ya mpango wako inapaswa kutoka wapi?", options: ["Makisio", "AI", "Tovuti ya mshindani", "Kumbukumbu zako mwenyewe zilizokaguliwa"], answer: 3, why: "Namba za kweli zinatoka katika kumbukumbu zako." },
      { objective: "O4", q: "Prompt ipi ni salama?", options: ["\"Maria Lopez, 123 Main St, aligunduliwa kuwa na...\"", "\"Haya ni maelezo ya kesi yake...\"", "\"[Jina], mzazi anayelea peke yake, alimaliza mafunzo yetu na sasa anafanya kazi katika ofisi ya matibabu.\"", "\"Hii ni shule ya mtoto wake...\""], answer: 2, why: "Inatumia kishika-nafasi na haina taarifa binafsi." },
      { objective: "O4", q: "Baada ya rasimu ya AI, unaongeza mambo gani halisi?", options: ["Mambo yote unayoyajua", "Yale tu ambayo mtu alikubali", "Namba yake ya simu", "Chochote AI inachopendekeza"], answer: 1, why: "Fomu ya ridhaa inaweka mipaka ya unachoshiriki." },
      { objective: "O5", q: "Toleo la mitandao ya kijamii linapaswa kuwa:", options: ["Fupi lenye hatua moja iliyo wazi", "Refu kama ripoti ya ruzuku", "Lililojaa maelezo ya kesi", "Bila ombi lolote"], answer: 0, why: "Machapisho mafupi yenye hatua moja yanafanya kazi vizuri zaidi." },
      { objective: "O5", q: "Toleo la ripoti ya ruzuku linazingatia:", options: ["Vichekesho", "Maneno ya kuhurumia", "Ukweli, matokeo na jinsi pesa ilivyosaidia", "Anwani ya mtu"], answer: 2, why: "Watoa ruzuku wanahitaji matokeo." },
      { objective: "O5", q: "Kabla ya kuchapisha hadithi kwenye mitandao ya kijamii, kagua:", options: ["Kwamba fomu ya ridhaa inaruhusu mitandao ya kijamii", "Tahajia tu", "Hali ya hewa", "Orodha ya wafadhili"], answer: 0, why: "Ridhaa inahusu kila mahali peke yake." },
      { objective: "O5", q: "Picha iliyotengenezwa na AI ya familia inayotabasamu imeandikwa \"familia tuliyoihudumia\". Hii ni:", options: ["Sawa", "Inahitajika", "Bora kuliko picha halisi", "Ya kupotosha; iwekee alama na usiionyeshe kama mteja halisi"], answer: 3, why: "Picha za AI hazipaswi kujifanya kuwa wateja halisi." },
      { objective: "O6", q: "Ipi ni mojawapo ya ukaguzi minne?", options: ["Kasi", "Ukweli", "Bei", "Aina ya herufi"], answer: 1, why: "Ukweli, Ridhaa, Heshima na Namba ndizo ukaguzi minne." },
      { objective: "O6", q: "AI iliandika kwamba mteja \"ana watoto watatu\" lakini maelezo yako yanasema mmoja. Wewe:", options: ["Unaiacha", "Unairekebisha ilingane na maelezo yako", "Unaiuliza AI tena na kuiamini", "Unaondoa ridhaa ya mteja"], answer: 1, why: "Kila jambo lazima lilingane na maelezo yako." },
      { objective: "O6", q: "Unaweka hadithi ya mwisho wapi?", options: ["Katika mazungumzo ya AI tu", "Hakuna mahali popote", "Kwenye hifadhi ya umma", "Pamoja na fomu ya ridhaa yenye sahihi"], answer: 3, why: "Kuziweka pamoja kunaonyesha kilichokubaliwa." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      1,
      5,
      8,
      11,
      14,
      17
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Ridhaa",
        objective: "O1",
        notYet: "Hakuna ridhaa ya maandishi kwa hadithi halisi, au jambo limetumika ambalo halikukubaliwa.",
        meets: "Ridhaa ya maandishi, au hadithi ya mazoezi iliyobuniwa kabisa, pamoja na jina na mahali vilivyorekodiwa.",
        exceeds: "Mtu alisoma hadithi yake kabla haijatolewa."
      },
      {
        name: "Muundo na namba",
        objective: "O3",
        notYet: "Sehemu ya hadithi inakosekana, au namba imekisiwa.",
        meets: "Kabla, Hatua ya mabadiliko na Baada, pamoja na namba moja kutoka kumbukumbu zilizokaguliwa.",
        exceeds: "Sehemu ya Baada inaonyesha badiliko linaloonekana kwa maneno ya mtu mwenyewe, kwa ruhusa yake."
      },
      {
        name: "Prompt salama ya AI",
        objective: "O4",
        notYet: "Prompt ina jina kamili, anwani, taarifa za afya au maelezo ya kesi.",
        meets: "Prompt inatumia vishika-nafasi na mambo ya jumla tu.",
        exceeds: "Inaiomba AI lugha inayomtanguliza mtu na bila maneno ya kuhurumia."
      },
      {
        name: "Matoleo matatu",
        objective: "O5",
        notYet: "Toleo moja linakosekana au limetumika mahali ambapo ridhaa hairuhusu.",
        meets: "Jarida la kama maneno 150, chapisho la mitandao ya kijamii la maneno 40 na aya ya ruzuku ya maneno 100, kila moja mahali ambapo ridhaa inaruhusu.",
        exceeds: "Kila toleo linafaa wasomaji wake: ukarimu wa moyo, hatua moja, au matokeo na ufadhili."
      },
      {
        name: "Ukaguzi wa mwisho",
        objective: "O6",
        notYet: "Bado kuna jambo lisilo la kweli, neno la kuhurumia au namba isiyokaguliwa.",
        meets: "Matoleo yote matatu yanapita Ukweli, Ridhaa, Heshima na Namba.",
        exceeds: "Anaorodhesha kilichorekebishwa na anaweka nakala ya mwisho pamoja na fomu ya ridhaa."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kupita kazi ya mwisho (rubriki)",
      "Mashirika yanayoanza kutumia fomu ya maandishi ya ridhaa ya hadithi ndani ya siku 60 (utafiti wa ufuatiliaji)",
      "Hadithi zinazoshirikiwa katika majarida, machapisho au ripoti za ruzuku zikiwa na ridhaa iliyohifadhiwa",
      "Wanafunzi wanaoanza kozi nyingine ya Koach Learn ya mashirika yasiyo ya kiserikali ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye intaneti",
      "Msaidizi wa AI wa bure",
      "Fomu ya ridhaa ya shirika lako, au fomu rahisi ya mfano",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Tumia hadithi za mazoezi zilizobuniwa kabisa darasani isipokuwa hadithi halisi zina ridhaa ya maandishi.",
      "Fanyeni zoezi la kikundi la kuandika upya maneno ya kuhurumia kuwa lugha inayomtanguliza mtu.",
      "Leta fomu ya ridhaa ya shirika ili wanafunzi walinganishe kila toleo na kilichokubaliwa.",
      "Wakumbushe wanafunzi wamuulize mkurugenzi wao kabla ya kusimulia hadithi za watu ambao wanaweza kuwekwa hatarini.",
      "Tathmini kazi ya mwisho kwa rubriki, na utoe maoni kuhusu mstari mmoja wa Bado kwa wakati mmoja."
    ]
  }
};
