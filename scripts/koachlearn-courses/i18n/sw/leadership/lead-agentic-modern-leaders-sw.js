"use strict";

// Koach Learn course (Swahili translation of leadership/lead-agentic-modern-leaders.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "lead-agentic-modern-leaders-sw",
  lang: "sw",
  translationOf: "lead-agentic-modern-leaders",
  category: "Leadership Development",
  name: "Uongozi katika Zama za AI Tendaji 2: AI kwa Viongozi wa Kisasa na Zana za AI kwa Viongozi",
  skills: "Kugeuza maelezo ya mkutano kuwa orodha ya kazi, Kuandaa rasimu ya waraka wa uamuzi wenye machaguo na hatari, Kuandika mawasiliano wazi kwa timu, Kujiandaa kwa mazungumzo magumu, Kuchagua zana zilizoidhinishwa, Kuandika mwongozo wa ukurasa mmoja wa matumizi ya AI kwa timu",
  outcome: "kutumia zana za AI katika kazi yako ya uongozi: kugeuza maelezo ya mkutano kuwa orodha ya kazi, kuandaa rasimu ya waraka wa uamuzi wenye machaguo na hatari, na kuandaa ujumbe kwa timu, pamoja na kuandika mwongozo wa ukurasa mmoja wa matumizi ya AI ambao timu yako inaweza kuufuata.",
  about: [
    "Kozi hii ni kwa mameneja, wasimamizi, viongozi wa timu, na wamiliki wa biashara ndogo na mashirika yasiyo ya faida waliomaliza kozi ya 1 au wanaoelewa tayari misingi ya AI. Inahusu kazi yako mwenyewe kama kiongozi: mikutano, maamuzi, mawasiliano na watu.",
    "Sura ya 1 inajenga njia tatu za kazi za AI unazoweza kurudia kila wiki: maelezo ya mkutano hadi orodha ya kazi, waraka wa uamuzi, na mawasiliano kwa timu. Sura ya 2 inahusu sehemu ngumu zaidi: kutumia AI kujiandaa kwa mazungumzo na watu bila kuikabidhi mazungumzo hayo, kuchagua zana kwa busara, na kuandika mwongozo rahisi wa matumizi ya AI kwa timu yako.",
    "Unaweza kutumia msaidizi wowote unaojulikana: ChatGPT, Microsoft Copilot, Google Gemini au Claude. Shirika lako likiwa limeidhinisha zana fulani, tumia hiyo. Jaribio la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Jenga kifurushi chako cha AI cha kiongozi: hifadhi prompt tatu zilizojaribiwa unazoweza kutumia tena (maelezo ya mkutano hadi orodha ya kazi, waraka wa uamuzi wenye machaguo na hatari, ujumbe wa taarifa kwa timu), kila moja ikiwa imetumika mara moja kwenye kazi halisi bila taarifa za siri; na uandike mwongozo wa ukurasa mmoja wa matumizi ya AI kwa timu yako unaosema zana zipi zimeidhinishwa, nini kisiingizwe kamwe, nini lazima kikaguliwe na mtu, na nani wa kuuliza.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Mameneja, wasimamizi, viongozi wa timu, na wamiliki wa biashara ndogo na mashirika yasiyo ya faida waliomaliza kozi ya 1 au wanaoelewa tayari misingi ya AI.",
    startingPoint: "Wanaweza kueleza AI zalishi (generative AI) na AI tendaji (agentic AI) na kutaja hatari kuu kwa timu yao. Wanatumia AI mara kwa mara, lakini si katika njia za kazi zinazorudiwa kwa mikutano, maamuzi, mawasiliano na kazi zinazohusu watu.",
    gap: "Viongozi hutumia sehemu kubwa ya wiki yao kwenye maelezo, maamuzi na ujumbe. Prompt zilizojaribiwa na zinazoweza kutumiwa tena zinaokoa muda, lakini tu kama viongozi wanaacha busara, mazungumzo na watu na taarifa binafsi mikononi mwa binadamu, na wanaipa timu yao mwongozo wazi wa kufuata.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi, bila kudhani mwanafunzi ana ujuzi wa kiufundi",
      "Vifaa: simu au kompyuta yenye msaidizi wa AI; tumia zana ambayo shirika lako limeidhinisha",
      "Faragha: ondoa taarifa binafsi na za siri kabla ya kubandika chochote kwenye AI",
      "Sera za rasilimali watu (HR), za kisheria na za shirika zinahusu maamuzi kuhusu watu na ujumbe nyeti",
      "Muda: masomo mafupi yenye kazi moja inayotumia kazi halisi"
    ],
    prerequisites: "\"Uongozi katika Zama za AI Tendaji 1: Kuielewa AI\", au uelewa wa msingi wa AI."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa maelezo ghafi ya mkutano halisi bila taarifa binafsi", action: "kutumia prompt inayotumika tena kugeuza maelezo kuwa maamuzi, kazi zenye wahusika na tarehe, na maswali yaliyobaki", standard: "ukikagua orodha kuona kama kuna kitu kilichobuniwa au kinachokosekana" },
    { id: "O2", condition: "Ukipewa uamuzi halisi unaokukabili", action: "kuandaa rasimu ya waraka wa uamuzi wenye machaguo, hatari na maswali ya kufuatilia, kisha kuandika pendekezo wewe mwenyewe", standard: "bila kamwe kutoa \"AI ilipendekeza\" kama sababu" },
    { id: "O3", condition: "Ukipewa vipengele vitatu vya taarifa kwa timu", action: "kuandaa na kurekebisha ujumbe kwa timu kulingana na sauti, urefu na wasomaji", standard: "ukiusoma kwa sauti kabla ya kuutuma" },
    { id: "O4", condition: "Kabla ya mazungumzo magumu na mtu", action: "kuandaa sentensi ya kufungua na maswali kwa kutumia AI ukitoa maelezo ya jumla tu", standard: "bila majina wala taarifa binafsi, huku mazungumzo na uamuzi vikibaki kwako" },
    { id: "O5", condition: "Ukipewa zana ya AI ambayo timu yako inatumia au inaitaka", action: "kuilinganisha kwa data, ufikiaji na masharti ya mpango ukitumia kurasa za mtoa huduma mwenyewe", standard: "ukimaliza kwa uamuzi wa mstari mmoja: idhinisha, idhinisha kwa mipaka, au bado" },
    { id: "O6", condition: "Kwa ajili ya timu yako", action: "kuandika mwongozo wa ukurasa mmoja wa matumizi ya AI na kuhifadhi prompt zako zilizojaribiwa mahali pamoja", standard: "ukigusia zana zilizoidhinishwa, kisichoingizwa kamwe, cha kukagua, kuweka wazi na nani wa kuuliza" }
  ],
  chapters: [
    {
      name: "Sura 1: Njia tatu za kazi za AI kwa viongozi",
      lessons: [
        {
          objectives: ["O1"],
          title: "Maelezo ya mkutano hadi orodha ya kazi",
          minutes: 5,
          goal: "Geuza maelezo ghafi ya mkutano kuwa orodha wazi ya kazi yenye wahusika na tarehe.",
          text: [
            "Mara nyingi mikutano huishia kwenye kumbukumbu zisizo wazi kuliko kazi zilizo wazi. AI ni hodari wa kupanga maelezo ghafi. Bandika maelezo yako (baada ya kuondoa taarifa binafsi au za siri) na uombe orodha ya maamuzi, kazi zenye mhusika na tarehe ya mwisho, na maswali yaliyobaki.",
            "Prompt unayoweza kutumia tena: \"Kutoka kwenye maelezo haya ya mkutano, orodhesha: 1) maamuzi yaliyofanywa, 2) kazi kama jedwali lenye kazi, mhusika, tarehe ya mwisho, 3) maswali yaliyobaki. Mhusika au tarehe ikikosekana, andika HAIPO. Usiongeze chochote kisichokuwa kwenye maelezo.\" Sentensi ya mwisho ni muhimu: inazuia zana isibuni kazi.",
            "Apps nyingi za mikutano sasa zinatoa maelezo au muhtasari wa AI. Kabla ya kuziwasha, kagua sera ya shirika lako na uwaambie washiriki, kwa sababu kurekodi watu na kuandika maneno yao kunaleta maswali ya ridhaa na faragha."
          ],
          steps: ["Ondoa taarifa binafsi au za siri kwenye maelezo.", "Bandika maelezo pamoja na prompt inayotumika tena.", "Kagua kila kazi ukilinganisha na kumbukumbu yako na maelezo.", "Jaza chochote kilichoandikwa HAIPO.", "Tuma orodha kwa waliohudhuria siku hiyo hiyo."],
          words: [["Kazi ya kufuatilia (action item)", "kazi iliyokubaliwa kwenye mkutano, yenye mhusika na tarehe ya mwisho."], ["Prompt inayotumika tena", "prompt unayoihifadhi na kuitumia tena kwa aina ile ile ya kazi."]],
          slides: [
            { title: "Maelezo hadi kazi", bullets: ["Maamuzi yaliyofanywa", "Kazi: kazi, mhusika, tarehe ya mwisho", "Maswali yaliyobaki"] },
            { title: "Zuia kazi zilizobuniwa", bullets: ["\"Ikikosekana, andika HAIPO\"", "\"Usiongeze chochote kisichokuwa kwenye maelezo\""] },
            { title: "Virekodi vya mikutano vya AI", bullets: ["Kagua sera ya shirika lako kwanza", "Waambie washiriki kabla ya kurekodi"] }
          ],
          tryIt: "Chukua maelezo ya mkutano wa hivi karibuni, ondoa taarifa binafsi, tumia prompt inayotumika tena, na ukague matokeo. Hesabu chochote ilichokosea au ilichobuni.",
          youCanNow: "kugeuza maelezo ya mkutano kuwa orodha ya kazi iliyokaguliwa yenye wahusika na tarehe.",
          quickCheck: [
            { objective: "O1", q: "Prompt nzuri ya maelezo ya mkutano inapaswa kuiomba AI iorodheshe nini?", options: ["Nani aliongea zaidi", "Maamuzi, kazi zenye wahusika na tarehe, na maswali yaliyobaki", "Muhtasari wa kila sentensi", "Mawazo ya vitafunio vya mkutano ujao"], answer: 1, why: "Maamuzi, kazi zenye wahusika na maswali yaliyobaki ndivyo timu inavyohitaji baada ya mkutano." },
            { objective: "O1", q: "Orodha ya kazi ina kazi ambayo hakuna aliyeitaja kwenye mkutano. Utafanya nini?", options: ["Kuiacha, kwa kuwa ni wazo zuri", "Kujipa kazi hiyo kimya kimya", "Kuiondoa na kuongeza \"Usiongeze chochote kisichokuwa kwenye maelezo\" kwenye prompt", "Kuiomba AI ieleze kwa nini"], answer: 2, why: "Kazi zilizobuniwa zinaleta mkanganyiko; kanuni hiyo kwenye prompt inazuia zana isiziongeze." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Waraka wa uamuzi: machaguo, hatari na pendekezo",
          minutes: 6,
          goal: "Tumia AI kuandaa rasimu ya waraka wa uamuzi unaolinganisha machaguo kwa haki.",
          text: [
            "Viongozi hufanya maamuzi chini ya shinikizo la muda. AI inaweza kukusaidia kufikiri kwa upana zaidi, si kuamua badala yako. Ipe uamuzi, ukweli ulio nao, mipaka yako (bajeti, muda, watu) na uombe machaguo matatu, kila moja likiwa na faida, hatari, gharama, na kile ambacho ungehitaji kuamini ili liwe chaguo bora.",
            "Kisha ihoji: \"Hoja yenye nguvu zaidi dhidi ya chaguo ninalopendelea ni ipi?\" na \"Ni taarifa gani ninazokosa?\" Maswali haya mawili ya kufuatilia ndipo AI inapoongeza thamani zaidi, kwa sababu yanafichua mambo ambayo hukuyaona.",
            "Wewe ndiye unayeandika pendekezo. Kagua kila namba, ongeza kile unachokijua wewe tu (watu wako, historia yenu, maadili yenu) na uumiliki uamuzi. Waraka haupaswi kamwe kusema \"AI ilipendekeza\" kama sababu."
          ],
          steps: ["Eleza uamuzi, ukweli na mipaka (bila taarifa za siri).", "Omba machaguo matatu yenye faida, hatari na gharama.", "Omba hoja yenye nguvu zaidi dhidi ya chaguo unalopenda.", "Uliza ni taarifa gani zinakosekana.", "Kagua namba na uandike pendekezo wewe mwenyewe."],
          words: [["Waraka wa uamuzi", "hati fupi inayoeleza uamuzi, machaguo na pendekezo."], ["Kona isiyoonekana (blind spot)", "jambo muhimu ambalo hujaliona."]],
          slides: [
            { title: "AI inapanua fikra, wewe unaamua", bullets: ["Toa uamuzi, ukweli, mipaka", "Omba machaguo matatu: faida, hatari, gharama"] },
            { title: "Maswali mawili yenye nguvu ya kufuatilia", bullets: ["\"Hoja yenye nguvu zaidi dhidi ya chaguo ninalopenda?\"", "\"Ni taarifa gani ninazokosa?\""] },
            { title: "Uamuzi ni wako", bullets: ["Kagua kila namba", "Ongeza unachokijua wewe tu", "Kamwe usitumie \"AI ilipendekeza\" kama sababu"] }
          ],
          tryIt: "Chagua uamuzi halisi unaokukabili (kwa mfano, ratiba mpya, msambazaji au tukio). Tumia prompt ya waraka wa uamuzi na maswali yote mawili ya kufuatilia, kisha andika pendekezo la aya moja kwa maneno yako mwenyewe.",
          youCanNow: "kutumia AI kupanua uamuzi na kuandika waraka ambao ni wako.",
          quickCheck: [
            { objective: "O2", q: "Kazi bora ya AI katika waraka wa uamuzi ni ipi?", options: ["Kufanya uamuzi wa mwisho", "Kuchagua chaguo ambalo timu inapendelea", "Kusaini waraka", "Kupanua machaguo yako na kufichua mambo ambayo hukuyaona"], answer: 3, why: "AI inakusaidia kuona machaguo na hatari zaidi; kiongozi ndiye anayeamua." },
            { objective: "O2", q: "Una chaguo unalopendelea. Utatuma swali gani la kufuatilia?", options: ["\"Hoja yenye nguvu zaidi dhidi ya chaguo ninalopendelea ni ipi?\"", "\"Niambie chaguo langu ndilo bora.\"", "\"Ufupishe waraka.\"", "\"Nichagulie.\""], answer: 0, why: "Kuomba hoja yenye nguvu zaidi ya upande wa pili kunapima chaguo lako kwa haki." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Mawasiliano wazi kwa timu",
          minutes: 5,
          goal: "Andaa na urekebishe ujumbe kwa timu kulingana na sauti, urefu na wasomaji.",
          text: [
            "Matatizo mengi ya uongozi ni matatizo ya mawasiliano. AI inakusaidia kuandaa haraka rasimu ya taarifa kwa timu, tangazo au ujumbe wa shukrani, kisha kuirekebisha: \"fupi zaidi\", \"kwa upole zaidi\", \"kwa wafanyakazi wapya\", \"lugha rahisi kwa wasomaji ambao si lugha yao ya kwanza\".",
            "Ipe hoja zako kuu kama vipengele na wasomaji wako, na uombe rasimu kwa sauti yako. Bandika ujumbe wa zamani ulioandika na useme \"fuata sauti hii\" ili usikike kama wewe.",
            "Usome kwa sauti kabla ya kuutuma. Ondoa chochote ambacho usingekisema ana kwa ana. Kwa habari nyeti kama kupunguza wafanyakazi, mabadiliko ya sera au matukio ya usalama, AI inaweza kukusaidia kuipanga, lakini HR au wanasheria wanapaswa kukagua maneno ya mwisho, na unapaswa kutoa habari muhimu ana kwa ana inapowezekana."
          ],
          steps: ["Andika hoja zako kuu kama vipengele.", "Taja wasomaji na sauti.", "Omba rasimu; toa ujumbe wa zamani ili ifuate sauti yako.", "Rekebisha kwa maswali moja au mawili ya kufuatilia.", "Usome kwa sauti; omba ukaguzi kwa habari nyeti."],
          words: [["Sauti (tone)", "jinsi ujumbe unavyohisiwa: wa upole, rasmi, wa haraka, wa utulivu."], ["Wasomaji", "watu watakaosoma ujumbe."]],
          slides: [
            { title: "Andaa haraka, kisha rekebisha", bullets: ["Hoja kuu kama vipengele", "Wasomaji na sauti", "\"Fupi zaidi\", \"kwa upole zaidi\", \"lugha rahisi\""] },
            { title: "Sikika kama wewe", bullets: ["Bandika ujumbe wa zamani ulioandika", "\"Fuata sauti hii\""] },
            { title: "Kabla ya kutuma", bullets: ["Usome kwa sauti", "Habari nyeti: ukaguzi wa HR au wanasheria", "Toa habari kubwa ana kwa ana"] }
          ],
          tryIt: "Andika vipengele vitatu vya taarifa halisi kwa timu. Tumia AI kuandaa rasimu, omba marekebisho moja, usome kwa sauti na uutume (au uuhifadhi ili uutume baadaye).",
          youCanNow: "kuandaa na kurekebisha ujumbe kwa timu kwa kutumia AI huku ukibaki na sauti yako mwenyewe.",
          quickCheck: [
            { objective: "O3", q: "Unaifanyaje rasimu ya AI isikike kama wewe?", options: ["Kuiomba itumie lugha rasmi", "Kubandika ujumbe wa zamani ulioandika na kusema \"fuata sauti hii\"", "Kuituma bila kuisoma", "Kutumia alama nyingi zaidi za mshangao"], answer: 1, why: "Mfano wa maandishi yako mwenyewe unaionyesha zana sauti yako." },
            { objective: "O3", q: "Taarifa ya AI kwa timu ni ndefu mara mbili ya unavyohitaji. Utafanya nini?", options: ["Kuituma hivyo hivyo", "Kuanza mazungumzo mapya na zana nyingine", "Kufuta nusu ya pili", "Kuomba marekebisho moja, kama \"ifupishe kuwa sentensi tano fupi\", kisha kuisoma kwa sauti"], answer: 3, why: "Swali moja la kufuatilia lililo wazi linarekebisha urefu, na kusoma kwa sauti kunakamata usichoweza kusema." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Njia tatu za kazi za AI kwa viongozi",
        questions: [
          { objective: "O1", q: "Kwa nini uongeze \"Usiongeze chochote kisichokuwa kwenye maelezo\" kwenye prompt ya mkutano?", options: ["Inaficha wahusika", "Inarefusha orodha", "Inazuia zana isibuni kazi", "Inatakiwa na sheria"], answer: 2, why: "AI inaweza kujaza mapengo kwa mambo yaliyobuniwa." },
          { objective: "O1", q: "Kabla ya kuwasha kirekodi cha mikutano cha AI, unapaswa:", options: ["Kukagua sera na kuwaambia washiriki", "Kurekodi kwa siri", "Kumwambia bosi tu", "Kuzima maikrofoni"], answer: 0, why: "Kurekodi watu kunaleta maswali ya ridhaa na faragha." },
          { objective: "O2", q: "Swali lipi la kufuatilia linaongeza thamani zaidi kwenye waraka wa uamuzi?", options: ["\"Urefushe.\"", "\"Ongeza emoji.\"", "\"Tumia maneno makubwa zaidi.\"", "\"Hoja yenye nguvu zaidi dhidi ya chaguo ninalopendelea ni ipi?\""], answer: 3, why: "Linafichua mambo ambayo hukuyaona." },
          { objective: "O2", q: "Nani anaandika pendekezo katika waraka wa uamuzi?", options: ["AI", "Wewe, kiongozi", "Msambazaji", "Hakuna mtu"], answer: 1, why: "Viongozi wanamiliki maamuzi; AI inapanua fikra tu." },
          { objective: "O3", q: "Lazima utangaze mabadiliko ya sera yanayohusu mishahara. Njia bora ni ipi?", options: ["Kutuma kwa barua pepe rasimu ya AI isiyokaguliwa", "Kuiacha AI itoe tangazo", "Kuacha kutangaza", "Kutumia AI kulipanga, kupata ukaguzi wa HR, na kulitoa ana kwa ana"], answer: 3, why: "Habari nyeti zinahitaji kukaguliwa na kutolewa na binadamu." }
        ]
      }
    },
    {
      name: "Sura 2: Watu, zana na miongozo ya timu",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kujiandaa kwa mazungumzo na watu bila kuikabidhi AI",
          minutes: 5,
          goal: "Tumia AI kujiandaa kwa mazungumzo magumu huku ukizuia taarifa binafsi.",
          text: [
            "Mazungumzo ya maoni, migogoro na utendaji kazi ndipo viongozi wanapotaka msaada zaidi, na ndipo AI ilipo hatari zaidi. Taarifa binafsi kuhusu mfanyakazi ni siri; usibandike majina, afya, kumbukumbu za nidhamu au alama za utendaji kwenye zana za AI za umma.",
            "Bado unaweza kujiandaa. Eleza hali kwa maneno ya jumla (\"mwanatimu mara nyingi anachelewa kumaliza kazi kwa wakati, anapendwa na wenzake, na hivi karibuni alipata mabadiliko ya kifamilia\") na uombe: sentensi ya kufungua, maswali ya kuelewa upande wake, na njia za kukubaliana hatua zinazofuata. Iombe icheze nafasi ya mtu huyo ili ufanye mazoezi.",
            "Kamwe usiiache AI iamue kuhusu kuajiri, nidhamu, mishahara au kufukuza kazi, na kamwe usitume maoni yaliyoandikwa na AI ambayo hujayaandika upya kwa maneno yako. Watu wanatambua, na unachopoteza ni uaminifu."
          ],
          steps: ["Eleza hali kwa jumla, bila majina wala taarifa binafsi.", "Omba sentensi ya kufungua, maswali na machaguo ya hatua zinazofuata.", "Fanya mazoezi kwa kuigiza.", "Andika maelezo yako kwa maneno yako mwenyewe.", "Acha maamuzi kuhusu watu yabaki kwa watu."],
          words: [["Kuigiza (role-play)", "kufanya mazoezi ya mazungumzo na mtu (au AI) anayecheza nafasi ya mtu mwingine."], ["Siri", "taarifa ambayo lazima ilindwe na kushirikishwa tu na wanaoihitaji."]],
          slides: [
            { title: "Zuia taarifa binafsi", bullets: ["Hakuna majina, afya wala kumbukumbu za nidhamu", "Hakuna alama za utendaji kwenye zana za AI za umma"] },
            { title: "Jiandae kwa maneno ya jumla", bullets: ["Omba sentensi ya kufungua na maswali mazuri", "Omba machaguo ya hatua zinazofuata", "Fanya mazoezi kwa kuigiza"] },
            { title: "Mipaka usiyovuka", bullets: ["AI haiamui kuajiri, mishahara wala nidhamu", "Andika upya maoni kwa maneno yako"] }
          ],
          tryIt: "Fikiria mazungumzo unayohitaji kufanya. Yaeleze kwa maneno ya jumla bila majina, omba sentensi ya kufungua na maswali matatu, kisha uyaigize mara moja.",
          youCanNow: "kujiandaa kwa mazungumzo magumu kwa kutumia AI huku ukilinda faragha ya watu na uaminifu wako.",
          quickCheck: [
            { objective: "O4", q: "Unaweza kuweka nini kwenye zana ya AI ya umma unapojiandaa kwa mazungumzo ya utendaji kazi?", options: ["Jina la mfanyakazi na historia ya tathmini zake", "Maelezo ya jumla bila majina wala taarifa binafsi", "Maelezo yake ya kitabibu, ili uwe mwangalifu", "Faili lake lote la mfanyakazi"], answer: 1, why: "Maelezo ya jumla tu ndiyo yanazuia taarifa binafsi za mtu zisiingie kwenye zana." },
            { objective: "O4", q: "AI inapendekeza hasa cha kusema na uamuzi wa kufanya kuhusu mfanyakazi. Unafanya nini?", options: ["Kutumia wazo lake la sentensi ya kufungua kama mazoezi, na kufanya uamuzi wewe mwenyewe", "Kusoma maandishi yake neno kwa neno", "Kuiacha AI itume ujumbe", "Kunakili uamuzi wake kwenye kumbukumbu za HR"], answer: 0, why: "AI inaweza kukusaidia kujiandaa, lakini mazungumzo na uamuzi vinabaki kwako." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kuchagua na kutumia zana za AI kwa busara",
          minutes: 5,
          goal: "Linganisha zana za AI kwa maswali yanayohusu timu yako.",
          text: [
            "Kuna zana nyingi za AI: wasaidizi wa jumla (ChatGPT, Microsoft Copilot, Google Gemini, Claude), wasaidizi ndani ya zana unazotumia tayari (Microsoft 365, Google Workspace, Canva, apps za mikutano), na vipengele vya mawakala (agents) vinavyoweza kuchukua hatua. Vipengele na bei hubadilika mara kwa mara.",
            "Uliza maswali matano kabla timu yako haijaanza kutumia zana moja. Data: je, inahifadhi au inajifunzia kutokana na tunachoandika, na tunaweza kuzima hilo? Ufikiaji: inaweza kusoma au kufanya nini katika mifumo yetu? Idhini: je, shirika letu au idara ya TEHAMA (IT) imeiidhinisha? Usahihi: inaweza kuonyesha vyanzo? Gharama: inagharimu kiasi gani kwa kila mtu, sasa na wakati wa kuhuisha mkataba?",
            "Tafuta majibu kwenye kurasa za faragha na bei za mtoa huduma mwenyewe na kwenye mkataba wako, si kwenye matangazo. Mipango ya biashara na ya elimu mara nyingi ina masharti ya data tofauti na mipango ya bure ya binafsi; soma masharti ya mpango ambao ungetumia kweli."
          ],
          steps: ["Orodhesha zana ambazo timu yako inatumia au inazitaka.", "Kagua data: uhifadhi na kujifunzia kutokana na unachoandika.", "Kagua ufikiaji: inaweza kusoma au kufanya nini.", "Kagua idhini, usahihi na gharama.", "Tumia kurasa za mtoa huduma mwenyewe na mkataba wako."],
          words: [["Masharti ya data", "kanuni za jinsi mtoa huduma anavyohifadhi na kutumia unachoandika."], ["Msaidizi uliojengwa ndani", "kipengele cha AI ndani ya zana unayotumia tayari, kama programu ya kuandika nyaraka."]],
          slides: [
            { title: "Aina za zana za AI", bullets: ["Wasaidizi wa jumla", "Wasaidizi ndani ya zana unazotumia tayari", "Vipengele vya mawakala vinavyochukua hatua"] },
            { title: "Maswali matano", bullets: ["Data: inahifadhiwa au inajifunzia?", "Ufikiaji: inaweza kusoma au kufanya nini?", "Idhini, usahihi, gharama"] },
            { title: "Mahali pa kupata majibu", bullets: ["Kurasa za faragha na bei za mtoa huduma", "Mkataba wako", "Masharti yanatofautiana kwa mpango: kagua wako"] }
          ],
          tryIt: "Chagua zana moja ya AI ambayo timu yako inatumia au inaitaka. Jibu maswali matano ukitumia kurasa za mtoa huduma mwenyewe. Andika uamuzi wa mstari mmoja: idhinisha, idhinisha kwa mipaka, au bado.",
          youCanNow: "kupima zana ya AI kwa data, ufikiaji, idhini, usahihi na gharama.",
          quickCheck: [
            { objective: "O5", q: "Swali la \"ufikiaji\" kuhusu zana ya AI linauliza nini?", options: ["Inagharimu kiasi gani", "Inajibu kwa kasi gani", "Inaweza kusoma au kufanya nini katika mifumo yako", "Inazungumza lugha zipi"], answer: 2, why: "Ufikiaji unakuambia zana ingeweza kuona au kubadilisha nini jambo likienda vibaya." },
            { objective: "O5", q: "Timu yako inatumia mpango wa bure wa binafsi na unataka kujua kama unajifunzia kutokana na data yako. Unaangalia wapi?", options: ["Makala ya habari ya mwaka jana", "Masharti ya faragha ya mtoa huduma mwenyewe kwa mpango huo", "Kukisia kwa mfanyakazi mwenzako", "Jibu la AI yenyewe kwenye mazungumzo"], answer: 1, why: "Mipango ya bure na ya biashara inaweza kuwa na masharti tofauti ya data, na kurasa za mtoa huduma ndizo chanzo." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kuandika mwongozo wa ukurasa mmoja wa matumizi ya AI kwa timu",
          minutes: 6,
          goal: "Andika mwongozo mfupi wa matumizi ya AI ambao timu yako inaweza kuufuata.",
          text: [
            "Mwongozo wa ukurasa mmoja ni bora kuliko sera ndefu ambayo hakuna anayeisoma. Unajibu maswali matano: Tunaweza kutumia zana zipi? Nini kisiingizwe kamwe? Nini lazima kikaguliwe na mtu kabla ya kutoka? Tunasema lini kwamba AI ilisaidia? Tunamuuliza nani?",
            "Uandike kwa maneno rahisi yenye mifano kutoka kazi ya timu yako: \"Kamwe usibandike majina, anwani au taarifa za malipo za wateja.\" \"Mtu anakagua kila ukweli, namba na nukuu.\" \"Mwambie mteja kama anazungumza na AI.\" Shirika lako likiwa na sera rasmi, mwongozo wako lazima uendane nayo; kagua na HR, IT au wanasheria.",
            "Tumia AI kuandaa rasimu kutoka kwenye maelezo yako, kisha uihariri kwa makini. Uushiriki, uiulize timu nini hakiko wazi, na uukague upya kila baada ya miezi michache, kwa sababu zana na hatari zinaendelea kubadilika."
          ],
          steps: ["Jibu maswali matano kwa maelezo ya vipengele.", "Tumia AI kuandaa ukurasa mmoja kutoka kwenye maelezo yako.", "Ongeza mifano halisi kutoka kazi ya timu yako.", "Hakikisha unaendana na sera yoyote ya shirika.", "Uushiriki, uliza nini hakiko wazi, weka tarehe ya kuukagua."],
          words: [["Mwongozo wa matumizi ya AI", "kanuni fupi za jinsi timu inavyotumia zana za AI."], ["Kuweka wazi (disclosure)", "kuwaambia watu kwamba AI ilisaidia kutengeneza kitu au kwamba wanazungumza na AI."]],
          slides: [
            { title: "Maswali matano, ukurasa mmoja", bullets: ["Zana zipi?", "Nini kisiingizwe kamwe?", "Nini lazima kikaguliwe na mtu?", "Tunaweka wazi lini? Tunamuuliza nani?"] },
            { title: "Maneno rahisi, mifano halisi", bullets: ["\"Kamwe usibandike taarifa za malipo za wateja\"", "\"Mtu anakagua kila ukweli na namba\""] },
            { title: "Uweke hai", bullets: ["Uendane na sera yoyote rasmi", "Uliza timu nini hakiko wazi", "Ukague kila baada ya miezi michache"] }
          ],
          tryIt: "Kazi ya mwisho: hifadhi prompt zako tatu zilizojaribiwa (kazi za mkutano, waraka wa uamuzi, taarifa kwa timu) katika hati moja, na uongeze mwongozo wako wa ukurasa mmoja wa matumizi ya AI kwa timu wenye zana, kisichoingizwa kamwe, cha lazima kukagua, kuweka wazi na nani wa kuuliza. Mshirikishe mfanyakazi mwenzako mmoja akupe maoni.",
          youCanNow: "kuongoza matumizi ya kila siku ya AI katika timu yako kwa kifurushi kilichojaribiwa na mwongozo wazi wa ukurasa mmoja.",
          quickCheck: [
            { objective: "O6", q: "Kuweka wazi (disclosure) kunamaanisha nini katika mwongozo wa AI wa timu?", options: ["Kuishirikisha IT nywila zako", "Kuorodhesha kila zana ya AI iliyowahi kutengenezwa", "Kuchapisha prompt zako mtandaoni", "Kuwaambia watu AI iliposaidia au wanapozungumza na AI"], answer: 3, why: "Kuweka wazi kunawajulisha watu mahali AI ilipotumika." },
            { objective: "O6", q: "Shirika lako lina sera rasmi ya AI. Mwongozo wako wa ukurasa mmoja wa timu unapaswa kuhusianaje nayo?", options: ["Kuendana nayo na kuielekeza", "Kuibadilisha kwa kanuni rahisi zaidi", "Kuipuuza, kwa kuwa timu ni tofauti", "Kuinakili neno kwa neno, yote"], answer: 0, why: "Mwongozo wa timu unaongeza maelezo ya vitendo lakini lazima ubaki ndani ya sera ya shirika." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Watu, zana na miongozo ya timu",
        questions: [
          { objective: "O4", q: "Unapojiandaa kwa mazungumzo ya utendaji kazi, unaweza kuweka nini kwenye zana ya AI ya umma?", options: ["Jina la mfanyakazi na alama yake", "Barua yake ya daktari", "Maelezo ya jumla bila majina wala taarifa binafsi", "Faili lake la nidhamu"], answer: 2, why: "Eleza hali kwa jumla; zuia taarifa binafsi." },
          { objective: "O4", q: "Uamuzi upi haupaswi kamwe kufanywa na AI?", options: ["Kumchukulia mfanyakazi hatua za nidhamu", "Kuchagua muda wa mkutano", "Kuchagua mtindo wa herufi", "Kupanga vipengele vya ajenda"], answer: 0, why: "Maamuzi kuhusu watu yanabaki kwa watu." },
          { objective: "O5", q: "Unapaswa kukagua wapi kama zana inajifunzia kutokana na data yako?", options: ["Tangazo la zana hiyo", "Masharti ya faragha ya mtoa huduma mwenyewe kwa mpango wako", "Maoni ya rafiki", "Nembo ya zana"], answer: 1, why: "Masharti rasmi ya mpango unaoutumia kweli ndiyo chanzo." },
          { objective: "O6", q: "Faida kuu ya mwongozo wa AI wa ukurasa mmoja ni ipi?", options: ["Watu wanausoma na kuufuata kweli", "Unagusia kila hali inayowezekana", "Hauhitaji kusasishwa kamwe", "Unachukua nafasi ya sera zote"], answer: 0, why: "Miongozo mifupi na rahisi hutumiwa." },
          { objective: "O6", q: "Unapaswa kukagua mwongozo wa AI wa timu yako mara ngapi?", options: ["Kamwe", "Kila baada ya miaka kumi", "Baada ya janga tu", "Kila baada ya miezi michache, kadri zana na hatari zinavyobadilika"], answer: 3, why: "Zana za AI hubadilika haraka." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Uongozi katika Zama za AI Tendaji 2: AI kwa Viongozi wa Kisasa na Zana za AI kwa Viongozi",
    questions: [
      { objective: "O1", q: "Prompt nzuri ya maelezo ya mkutano inaomba:", options: ["Shairi", "Maamuzi, kazi zenye wahusika na tarehe, maswali yaliyobaki", "Mishahara ya kila mtu", "Ajenda mpya tu"], answer: 1, why: "Mpangilio huo unageuza maelezo kuwa vitendo." },
      { objective: "O1", q: "AI ikiorodhesha kazi isiyo na mhusika, prompt inapaswa kuifanya iandike:", options: ["Jina lako", "Jina lolote la kubahatisha", "HAIPO", "Hakuna kitu"], answer: 2, why: "Kuweka alama kwenye mapengo kunazuia wahusika waliobuniwa." },
      { objective: "O1", q: "Kabla ya kubandika maelezo kwenye AI unapaswa:", options: ["Kuongeza nywila", "Kuongeza majina zaidi", "Kuondoa taarifa binafsi au za siri", "Kuyatafsiri"], answer: 2, why: "Taarifa binafsi zinabaki nje ya zana za umma." },
      { objective: "O2", q: "Katika waraka wa uamuzi, kazi bora ya AI ni:", options: ["Kupanua machaguo yako na kufichua mambo ambayo hukuyaona", "Kufanya uamuzi", "Kusaini waraka", "Kuchukua nafasi ya timu yako"], answer: 0, why: "Wewe unaamua; AI inakusaidia kufikiri kwa upana zaidi." },
      { objective: "O2", q: "\"Ni taarifa gani ninazokosa?\" ni:", options: ["Amri ya kupanga muundo", "Kupoteza muda", "Hatari ya faragha", "Swali la kufuatilia lenye manufaa linalofichua mambo ambayo hukuyaona"], answer: 3, why: "Linafichua mapengo katika fikra zako." },
      { objective: "O2", q: "Waraka haupaswi kamwe kutoa sababu ipi?", options: ["\"Inaendana na bajeti yetu\"", "\"AI ilipendekeza\"", "\"Inafikia tarehe ya mwisho\"", "\"Timu yetu inaweza kuitekeleza\""], answer: 1, why: "Viongozi wanamiliki sababu zao." },
      { objective: "O3", q: "Ili rasimu ya AI isikike kama wewe:", options: ["Tumia zana nyingine", "Tumia alama nyingi zaidi za mshangao", "Omba maneno marefu zaidi", "Bandika ujumbe wa zamani na useme \"fuata sauti hii\""], answer: 3, why: "Mifano ya maandishi yako inaongoza sauti." },
      { objective: "O3", q: "Kusoma ujumbe kwa sauti kabla ya kuutuma kunakusaidia:", options: ["Kuongeza maneno ya kitaalamu", "Kuurefusha", "Kuondoa usichoweza kusema ana kwa ana", "Kuruka ukaguzi"], answer: 2, why: "Sikio lako linakamata sauti isiyofaa." },
      { objective: "O3", q: "Kwa habari za kupunguza wafanyakazi, AI inaweza kukusaidia:", options: ["Kupanga ujumbe, ukikaguliwa na HR au wanasheria", "Kuutuma bila ukaguzi", "Kuamua nani anapunguzwa", "Kuepuka kuwaambia watu"], answer: 0, why: "Habari nyeti zinahitaji ukaguzi wa binadamu." },
      { objective: "O4", q: "Taarifa ipi haipaswi kamwe kuingia kwenye zana ya AI ya umma?", options: ["Ajenda ya kawaida ya mkutano", "Taarifa za afya za mfanyakazi", "Tarehe za matukio ya umma", "Jina la timu yako"], answer: 1, why: "Taarifa za afya ni siri." },
      { objective: "O4", q: "Kuigiza na AI kunakusaidia:", options: ["Kufanya mazoezi ya mazungumzo magumu", "Kuruka mazungumzo", "Kumrekodi mfanyakazi", "Kuamua mishahara"], answer: 0, why: "Mazoezi yanajenga kujiamini bila kushiriki taarifa binafsi." },
      { objective: "O4", q: "Maoni yaliyoandikwa na AI yanapaswa:", options: ["Kufichwa kwa mfanyakazi", "Kutumwa kama yalivyo", "Kuwekwa hadharani", "Kuandikwa upya kwa maneno yako mwenyewe"], answer: 3, why: "Watu wanatambua, na uaminifu ni muhimu." },
      { objective: "O5", q: "Kipi ni msaidizi uliojengwa ndani?", options: ["Daftari la karatasi", "Kipengele cha AI ndani ya programu yako ya kuandika nyaraka", "Simu ya mezani", "Printa"], answer: 1, why: "Zana nyingi zinazojulikana sasa zina vipengele vya AI." },
      { objective: "O5", q: "Swali la \"data\" kuhusu zana linauliza:", options: ["Je, ni maarufu?", "Ina rangi gani?", "Je, inahifadhi au inajifunzia kutokana na tunachoandika?", "Ina vitufe vingapi?"], answer: 2, why: "Masharti ya data yanaamua nini ni salama kuandika." },
      { objective: "O5", q: "Swali la \"ufikiaji\" linauliza:", options: ["Je, ofisi iko wazi?", "Je, wafanyakazi wanaweza kuingia kwenye intaneti?", "Inaweza kusoma au kufanya nini katika mifumo yetu?", "Nani ana ufunguo wa mlango?"], answer: 2, why: "Vipengele vya mawakala vinaweza kuchukua hatua katika mifumo yako." },
      { objective: "O5", q: "Mipango ya bure ya binafsi na mipango ya biashara:", options: ["Inaweza kuwa na masharti tofauti ya data", "Daima ina masharti yale yale", "Haihifadhi data kamwe", "Daima ni ya bure"], answer: 0, why: "Soma masharti ya mpango utakaoutumia." },
      { objective: "O6", q: "Mwongozo wa AI wa ukurasa mmoja unajibu:", options: ["Nani ni msimamizi tu", "Kila swali la kisheria", "Bei tu", "Zana zipi, kisichoingizwa kamwe, cha kukagua, kuweka wazi, nani wa kuuliza"], answer: 3, why: "Maswali matano rahisi yanagusia matumizi ya kila siku." },
      { objective: "O6", q: "Kuweka wazi kunamaanisha:", options: ["Kuficha matumizi ya AI", "Kuwaambia watu AI ilisaidia au kwamba wanazungumza na AI", "Kufuta kumbukumbu", "Kushirikisha nywila"], answer: 1, why: "Uwazi kuhusu AI unajenga uaminifu." },
      { objective: "O6", q: "Shirika lako likiwa na sera rasmi ya AI, mwongozo wa timu yako lazima:", options: ["Upingane nayo", "Uichukue nafasi yake", "Uipuuze", "Uendane nayo"], answer: 3, why: "Miongozo ya timu inafanya kazi ndani ya sera ya shirika." },
      { objective: "O6", q: "Kifurushi chako cha AI cha kiongozi kinahifadhiwa vizuri zaidi kama:", options: ["Nywila za watu wengine", "Prompt za kubahatisha unazosahau", "Prompt zilizojaribiwa zinazotumika tena, zilizohifadhiwa mahali pamoja", "Orodha ya kila zana ya AI"], answer: 2, why: "Prompt zilizohifadhiwa na kujaribiwa zinafanya tabia nzuri ziweze kurudiwa." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi amepiga hatua kiasi gani
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 2, 3, 5, 6, 9, 11, 13, 16, 19] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Prompt ya kazi za mkutano", objective: "O1", notYet: "Hakuna prompt iliyohifadhiwa, au haikujaribiwa kwenye maelezo halisi.", meets: "Prompt iliyohifadhiwa inayogeuza maelezo kuwa kazi zenye wahusika na tarehe, iliyotumika mara moja bila taarifa za siri.", exceeds: "Prompt inaweka alama kwa wahusika wanaokosekana na inakataza kazi zilizobuniwa." },
      { name: "Prompt ya waraka wa uamuzi", objective: "O2", notYet: "Hakuna prompt iliyohifadhiwa, au AI ndiyo iliyotoa pendekezo.", meets: "Prompt iliyohifadhiwa ya machaguo na hatari, iliyotumika mara moja, na pendekezo likaandikwa na kiongozi.", exceeds: "Ina maswali ya kufuatilia yanayopima chaguo linalopendelewa." },
      { name: "Prompt ya taarifa kwa timu", objective: "O3", notYet: "Hakuna prompt iliyohifadhiwa, au ujumbe haukukaguliwa.", meets: "Prompt iliyohifadhiwa ya taarifa kwa timu, iliyotumika mara moja na kurekebishwa kwa sauti au urefu.", exceeds: "Ina mfano wa maandishi ya kiongozi mwenyewe ili kufuata sauti yake." },
      { name: "Mwongozo wa AI wa ukurasa mmoja", objective: "O6", notYet: "Unakosa zana zilizoidhinishwa, kisichoingizwa kamwe, cha lazima kukagua au nani wa kuuliza.", meets: "Ukurasa mmoja unaogusia zana zilizoidhinishwa, kisichoingizwa kamwe, kile mtu lazima akague na nani wa kuuliza.", exceeds: "Pia unagusia kuweka wazi na ulishirikishwa kwa mfanyakazi mwenzako ili atoe maoni." },
      { name: "Taarifa binafsi zimezuiwa", objective: "O4", notYet: "Prompt au mfano una majina au taarifa binafsi.", meets: "Hakuna taarifa binafsi au za siri katika prompt yoyote iliyohifadhiwa wala mfano wowote.", exceeds: "Prompt zinatumia vishika-nafasi kama [mwanatimu] ili ziwe salama kutumia tena." }
    ]
  },
  evaluation: {
    results: [
      "Viongozi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Timu zenye mwongozo wa ukurasa mmoja wa matumizi ya AI ndani ya siku 30 (utafiti wa kufuatilia)",
      "Viongozi wanaoripoti kuokoa muda kila wiki kwa prompt zao zinazotumika tena (utafiti wa kufuatilia)",
      "Viongozi wanaoendelea na kozi ya 3 ya Uongozi katika Zama za AI Tendaji"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye msaidizi wa AI; tumia ule ambao shirika lako limeidhinisha",
      "Maelezo ya mkutano wa hivi karibuni, uamuzi halisi na taarifa kwa timu, bila taarifa za siri",
      "Hati ya kuhifadhi prompt na mwongozo wa matumizi ya AI",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Fanyeni jaribio la awali pamoja, kisha tumieni prompt ya maelezo ya mkutano moja kwa moja kwenye maelezo ya kubuni kabla viongozi hawajatumia yao wenyewe.",
      "Wakumbushe viongozi kufuata sera ya AI ya shirika lao na kuwahusisha HR au wanasheria katika maamuzi kuhusu watu na habari nyeti.",
      "Waweke viongozi wawili wawili waigize mazungumzo magumu wakitumia maelezo ya jumla tu.",
      "Waache viongozi wabadilishane rasimu za miongozo ya AI na kila mmoja atoe maoni moja.",
      "Pima kazi ya mwisho kwa rubriki, na hakikisha hakuna prompt iliyohifadhiwa yenye taarifa binafsi."
    ]
  }
};
