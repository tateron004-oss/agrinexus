"use strict";

// Koach Learn course (Swahili translation of shared/safe-labor-migration.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "safe-labor-migration-sw",
  lang: "sw",
  translationOf: "safe-labor-migration",
  category: "Workforce Development",
  name: "Kuhamia Nchi Nyingine kwa Kazi kwa Usalama",
  skills: "Kupata taarifa rasmi za uhamiaji, Kukagua leseni ya wakala wa ajira, Kutambua mawakala bandia, Kusoma ofa ya kazi na mkataba, Kutambua usafirishaji haramu wa binadamu na kupata msaada, Kuandaa orodha ya usalama wa uhamiaji",
  outcome: "kupanga safari ya kwenda kufanya kazi nje ya nchi kwa njia halali: kukagua kama wakala ana leseni, kukataa kazi yoyote inayokutaka ulipe ili uipate, kusoma mkataba kabla ya kusaini, kujua dalili za usafirishaji haramu wa binadamu na mahali pa kupata msaada, na kubeba orodha yako ya usalama wa uhamiaji.",
  about: [
    "Kila mwaka mamilioni ya watu husafiri kwenda nchi nyingine kufanya kazi: wauguzi kutoka Ufilipino na Nigeria, madereva na wajenzi kutoka India na Kenya, wafanyakazi wa mashambani kutoka Mexico, walezi kutoka Ghana na Colombia, wafanyakazi wa maduka na hoteli kutoka Morocco, Misri na Senegal. Wengi wao wanapata kazi ya haki. Baadhi wanadanganywa na mawakala bandia, wanalipa ada kubwa, wanapoteza pasipoti zao au wanaishia katika kazi ya kulazimishwa.",
    "Kozi hii inakufundisha jinsi ya kujilinda kabla ya kuondoka na baada ya kufika. Utajifunza jinsi ya kupata taarifa rasmi kuhusu njia halali, jinsi ya kukagua kama wakala wa ajira ana leseni, dalili za hatari za kazi bandia, kile ambacho ofa ya kazi na mkataba wa haki lazima viseme, dalili za usafirishaji haramu wa binadamu na mahali pa kupata msaada.",
    "Kozi hii haitoi ushauri wa kisheria wala wa viza, na haikutafutii kazi. Sheria ni tofauti katika kila nchi na zinabadilika, kwa hiyo kila somo linakuonyesha mahali pa kukagua ukurasa rasmi wa serikali yako na wa nchi unayotaka kufanyia kazi.",
    "Kila somo linachukua kama dakika tano. Fanya kazi ya \"Jaribu sasa\" kwenye karatasi au simu. Kuna jaribio fupi baada ya kila somo na kila sura, na mtihani wa maswali 20 mwishoni. Mwishoni utakuwa na orodha yako mwenyewe ya usalama wa uhamiaji."
  ],
  finalTask: "Andaa orodha yako mwenyewe ya usalama wa uhamiaji kwenye karatasi au simu kwa kazi moja halisi ya nje ya nchi unayoifikiria (au ofa ya kazi ya mazoezi). Lazima iwe na: kurasa rasmi za serikali na za ubalozi utakazotumia; jina la wakala na jinsi ulivyokagua leseni yake; orodha ya gharama na nani anazilipa; maelezo ya kazi unayohitaji kwa maandishi kabla ya kusaini; dalili za hatari zitakazokufanya usimame; na mpango wa msaada wenye nakala za nyaraka zako, mtu unayemwamini nyumbani, na namba za ubalozi na za msaada ulizozitafuta mwenyewe.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Vijana na watu wazima wanaofikiria kufanya kazi nje ya nchi, hasa Afrika, Asia na Amerika ya Kusini (kwa mfano Kenya, Nigeria, Ghana, Senegal, Morocco, Misri, India, Ufilipino, Mexico na Colombia), pamoja na familia zao na wafanyakazi wa jamii wanaowashauri. Wengi wamesikia kuhusu kazi kutoka kwa marafiki, mitandao ya kijamii au mawakala wa mtaani. Kozi hii imetafsiriwa katika lugha nyingi.",
    startingPoint: "Wanaweza kutumia simu ya kawaida na apps za ujumbe. Wanamjua mtu aliyewahi kufanya kazi nje ya nchi. Ni mara chache wamesoma mkataba wa ajira, na hawajui kwamba mawakala lazima wawe na leseni au kwamba wafanyakazi hawapaswi kulipa ada za kuajiriwa.",
    gap: "Wanafunzi wanahitaji kutofautisha ofa ya kazi halali na ya haki na ulaghai au mtego wa usafirishaji haramu wa binadamu kabla ya kulipa pesa, kukabidhi pasipoti au kusafiri. Bila ujuzi huu watu wanapoteza akiba, wanaingia kwenye madeni na wanaweza kuishia katika kazi ya kulazimishwa mbali na msaada.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi, kwa wasomaji wa lugha ya pili na kwa tafsiri",
      "Vifaa: simu janja ya kawaida au kompyuta ya pamoja; baadhi ya kazi ni za karatasi",
      "Sheria ni tofauti kila nchi na zinabadilika mara kwa mara: kozi inaelekeza kwenye kurasa rasmi na haitoi ushauri wa kisheria wala wa viza",
      "Usalama: hakuna namba halisi za pasipoti, kitambulisho au benki katika zoezi lolote; wanafunzi walio hatarini wanaambiwa wapigie huduma za dharura za eneo lao kwanza",
      "Baadhi ya wanafunzi huenda tayari wako katika hali ngumu nje ya nchi; kozi inatoa njia za msaada bila kulaumu"
    ],
    prerequisites: "Hakuna. Wanafunzi ambao ni wapya kwenye intaneti wanaweza kuanza na kozi \"Misingi ya Intaneti\"."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa nchi unayotaka kufanyia kazi", action: "kupata kurasa rasmi za serikali na za ubalozi kuhusu viza za kazi na njia halali", standard: "na kutofautisha ukurasa rasmi na ukurasa wa wakala au wa mtu usiyemjua" },
    { id: "O2", condition: "Ukipewa jina la wakala wa ajira", action: "kukagua kama wakala ana leseni kutoka mamlaka ya kazi au ya uhamiaji ya nchi yako", standard: "kabla ya kulipa chochote au kukabidhi nyaraka" },
    { id: "O3", condition: "Ukipewa tangazo la kazi au ujumbe wa wakala", action: "kuorodhesha dalili za hatari za wakala bandia au ulaghai wa kazi", standard: "ukipata angalau dalili 3 kati ya 4 katika tangazo la mazoezi" },
    { id: "O4", condition: "Ukipewa ofa ya kazi au mkataba", action: "kukagua kwamba mwajiri, kazi, mshahara, saa, mahali, gharama na masharti ya kurudi nyumbani yameandikwa", standard: "na kuorodhesha kila kitu kinachokosekana au kilichobadilishwa kabla ya kusaini" },
    { id: "O5", condition: "Ukipewa hadithi kuhusu mfanyakazi aliye nje ya nchi", action: "kutambua dalili za usafirishaji haramu wa binadamu au kazi ya kulazimishwa na kutaja mahali pa kupata msaada", standard: "ukitaja angalau dalili 3 na mahali 2 pa kupata msaada" },
    { id: "O6", condition: "Kabla ya kuondoka nyumbani", action: "kuandika orodha ya usalama wa uhamiaji yenye nakala za nyaraka, watu wa kuwasiliana nao na namba za msaada", standard: "inayogusa kila sehemu ya rubriki ya kozi" }
  ],
  chapters: [
    {
      name: "Sura 1: Kuchagua njia salama na halali",
      lessons: [
        {
          title: "Njia halali na mahali pa kupata taarifa rasmi",
          objectives: ["O1"],
          minutes: 5,
          goal: "Pata kurasa rasmi kuhusu kufanya kazi kihalali katika nchi unayotaka kwenda.",
          text: [
            "Njia halali inamaanisha unasafiri ukiwa na viza au kibali sahihi cha kazi kwa kazi hiyo, kilichotolewa na serikali ya nchi utakayofanyia kazi. Kufanya kazi kwa viza ya utalii, au kuvuka mpaka kwa msaada wa mvushaji haramu, kunakuweka katika hatari kubwa: unaweza kukamatwa, kurudishwa nyumbani, au kunaswa na watu wanaojua unaogopa polisi.",
            "Ni serikali tu zinazoamua kuhusu viza na vibali vya kazi. Taarifa za kuaminika zinatoka kwenye tovuti rasmi ya uhamiaji ya nchi unayotaka kufanyia kazi, ubalozi au ubalozi mdogo wake katika nchi yako, na wizara ya kazi au ya uhamiaji ya nchi yako. Nchi nyingi wanazotoka wafanyakazi pia zina ofisi zinazowasaidia wafanyakazi wahamiaji, kwa mfano Department of Migrant Workers (Idara ya Wafanyakazi Wahamiaji) ya Ufilipino na tovuti ya eMigrate ya Wizara ya Mambo ya Nje ya India.",
            "Mawakala, kurasa za mitandao ya kijamii, chaneli za video na marafiki wanaweza kukusaidia kuanza, lakini si rasmi. Kagua kila jambo wanalokuambia kwenye ukurasa wa serikali. Kozi hii haitoi ushauri wa kisheria wala wa viza; kama hali yako ni ngumu, uliza ubalozi au wakili mwenye leseni.",
            "Uvushaji haramu na usafirishaji haramu wa binadamu ni vitu tofauti. Uvushaji haramu ni kumlipa mtu akuvushe mpaka kinyume cha sheria. Usafirishaji haramu wa binadamu ni pale mtu anapoajiri au kumhamisha mtu kwa nguvu, uongo au unyanyasaji ili amtumie vibaya. Wavushaji haramu wanaweza kugeuka kuwa wasafirishaji haramu wa binadamu, na hiyo ni sababu nyingine ya kutumia njia halali tu."
          ],
          steps: ["Andika jina la nchi na aina ya kazi.", "Tafuta tovuti rasmi ya uhamiaji au viza ya nchi hiyo na ubalozi wake katika nchi yako.", "Kagua anwani: serikali kwa kawaida hutumia mwisho rasmi kama .gov, .gov.ph au .go.ke; tafuta nembo ya serikali na ukurasa wa mawasiliano.", "Tafuta ukurasa kuhusu viza za kazi au vibali vya kazi na uandike kile unachosema unahitaji.", "Tafuta ukurasa wa wizara ya kazi au ya uhamiaji ya nchi yako kwa watu wanaofanya kazi nje ya nchi."],
          words: [["Njia halali", "njia ya kusafiri na kufanya kazi ambayo serikali zinaruhusu, ukiwa na viza au kibali sahihi."], ["Kibali cha kazi", "ruhusa rasmi ya kufanya kazi ya kulipwa katika nchi."], ["Ubalozi au ubalozi mdogo", "ofisi ya nchi yako katika nchi nyingine, au ofisi ya nchi nyingine katika nchi yako, inayoshughulikia viza na kuwasaidia raia."], ["Uvushaji haramu", "kumlipa mtu akuvushe mpaka kinyume cha sheria."], ["Usafirishaji haramu wa binadamu", "kumwajiri au kumhamisha mtu kwa nguvu, uongo au unyanyasaji ili kumtumia vibaya."]],
          slides: [
            { title: "Njia halali", bullets: ["Viza au kibali sahihi cha kazi kwa kazi hiyo", "Kimetolewa na serikali ya nchi utakayofanyia kazi", "Hakuna kazi kwa viza ya utalii, hakuna wavushaji haramu"] },
            { title: "Taarifa rasmi zinatoka wapi", bullets: ["Tovuti ya uhamiaji ya nchi unayokwenda", "Ubalozi au ubalozi mdogo wake katika nchi yako", "Wizara ya kazi au ya uhamiaji ya nchi yako"] },
            { title: "Si rasmi", bullets: ["Mawakala, kurasa za mitandao ya kijamii na chaneli za video", "Hadithi za marafiki", "Kagua kila jambo kwenye ukurasa wa serikali"] },
            { title: "Uvushaji haramu si usafirishaji haramu wa binadamu", bullets: ["Uvushaji haramu: kulipa ili kuvuka mpaka kinyume cha sheria", "Usafirishaji haramu wa binadamu: nguvu, uongo au unyanyasaji ili kumtumia mtu vibaya", "Wavushaji haramu wanaweza kugeuka wasafirishaji haramu"] }
          ],
          sources: [
            { name: "UNODC: Usafirishaji haramu wa binadamu na uvushaji haramu wa wahamiaji (Education for Justice)", url: "https://www.unodc.org/e4j/en/secondary/human-trafficking-and-migrant-smuggling.html" },
            { name: "Ufilipino: Department of Migrant Workers (DMW)", url: "https://dmw.gov.ph/" },
            { name: "Wizara ya Mambo ya Nje ya India: eMigrate", url: "https://emigrate.gov.in/" }
          ],
          tryIt: "Chagua nchi moja ambayo huenda ungetaka kufanyia kazi. Kwenye simu au kompyuta, tafuta (1) ukurasa wake rasmi wa uhamiaji au wa viza ya kazi na (2) ubalozi au ubalozi mdogo wake katika nchi yako. Andika anwani zote mbili kwenye karatasi na jambo moja ambalo kila ukurasa unasema unahitaji.",
          youCanNow: "kupata kurasa rasmi za serikali na za ubalozi kuhusu kufanya kazi katika nchi nyingine na kuzitofautisha na kurasa za mawakala.",
          quickCheck: [
            { objective: "O1", q: "Nani anaamua kama utapata viza ya kazi ya nchi nyingine?", options: ["Wakala wa ajira", "Serikali ya nchi hiyo", "Chaneli maarufu ya video kuhusu kazi za nje", "Mwajiri wako mtarajiwa peke yake"], answer: 1, why: "Ni serikali ya nchi unayokwenda tu inayotoa viza na vibali vya kazi." },
            { objective: "O1", q: "Rafiki anasema unaweza kufanya kazi huko kwa viza ya utalii. Unafanya nini?", options: ["Kwenda, kwa sababu rafiki yako alifanya hivyo", "Kumlipa wakala aipange haraka", "Kukagua kwanza ukurasa rasmi wa uhamiaji au ubalozi", "Kuuliza kwenye mitandao ya kijamii"], answer: 2, why: "Kufanya kazi kwa viza isiyo sahihi kunaweza kukufanya ukamatwe au unaswe; ukurasa rasmi unakuambia kilicho halali." }
          ]
        },
        {
          title: "Kukagua kama wakala wa ajira ana leseni",
          objectives: ["O2"],
          minutes: 5,
          goal: "Kagua leseni ya wakala kwenye orodha rasmi ya serikali yako.",
          text: [
            "Katika nchi nyingi, mawakala wanaopeleka wafanyakazi nje ya nchi lazima wawe na leseni kutoka serikalini. Leseni inamaanisha serikali inawajua ni akina nani na inaweza kushughulikia malalamiko. Wakala asiye na leseni hana mtu anayemkagua.",
            "Mifano: Ufilipino, Department of Migrant Workers (DMW) inakuruhusu kuhakiki hali ya wakala wa ajira mtandaoni. India, tovuti ya eMigrate inaorodhesha mawakala wa ajira waliosajiliwa, na wakala anapaswa kuonyesha cheti halali cha usajili. Kenya, National Employment Authority (NEA, Mamlaka ya Taifa ya Ajira) inatunza orodha ya mawakala binafsi wa ajira waliosajiliwa. Katika nchi nyingine, uliza wizara ya kazi, huduma ya ajira ya umma, au ofisi ya IOM utumie orodha ipi.",
            "Kagua jina kamili na namba ya leseni. Baadhi ya mawakala bandia wanaiga jina la wakala halisi, au wanatumia leseni iliyokwisha muda au iliyofutwa. Kagua tena karibu na siku ya kulipa au kusaini, kwa sababu leseni zinaweza kusimamishwa. Pia kagua kwamba agizo la kazi au nafasi ya kazi imeidhinishwa pale nchi yako inapohitaji hivyo."
          ],
          steps: ["Mwombe wakala jina lake kamili la kisheria, anwani na namba ya leseni, kwa maandishi.", "Fungua orodha rasmi ya serikali yako (si kiungo ambacho wakala anakutumia).", "Tafuta jina na namba ya leseni na ukague kama vinalingana.", "Kagua kama leseni ni halali leo na haijasimamishwa wala kufutwa.", "Kama wakala hayuko kwenye orodha, simama na umripoti kwa mamlaka."],
          words: [["Wakala wa ajira", "biashara inayowatafutia waajiri wafanyakazi, wakati mwingine katika nchi nyingine."], ["Leseni", "ruhusa rasmi kutoka serikalini ya kufanya aina fulani ya biashara."], ["Agizo la kazi", "ombi rasmi la mwajiri la kupata wafanyakazi, ambalo baadhi ya nchi lazima ziidhinishe."], ["IOM", "International Organization for Migration (Shirika la Kimataifa la Uhamiaji), shirika la Umoja wa Mataifa linaloshughulikia uhamiaji."]],
          slides: [
            { title: "Kwa nini leseni ni muhimu", bullets: ["Serikali inamjua wakala ni nani", "Unaweza kulalamika jambo likienda vibaya", "Mawakala wasio na leseni hawana mtu anayewakagua"] },
            { title: "Mahali pa kukagua (mifano)", bullets: ["Ufilipino: ukaguzi wa hali ya wakala wa DMW", "India: orodha ya eMigrate ya mawakala waliosajiliwa", "Kenya: orodha ya National Employment Authority"] },
            { title: "Jinsi ya kukagua", bullets: ["Pata jina kamili na namba ya leseni kwa maandishi", "Tumia orodha rasmi, si kiungo cha wakala", "Jina na namba lazima vilingane na viwe halali leo"] },
            { title: "Hayuko kwenye orodha?", bullets: ["Simama: usilipe wala usikabidhi nyaraka", "Mripoti kwa mamlaka ya kazi au ya uhamiaji"] }
          ],
          sources: [
            { name: "Ufilipino DMW: mawakala wa ajira", url: "https://dmw.gov.ph/archives/poea/services/recruiters.html" },
            { name: "Wizara ya Mambo ya Nje ya India: maswali ya kawaida ya watu wanaotaka kuhamia nje", url: "https://www.mea.gov.in/issues-of-intending-emigrants.htm" },
            { name: "Kenya: National Employment Authority", url: "https://www.nea.go.ke/" },
            { name: "IOM IRIS: Uajiri wa kimaadili", url: "https://iris.iom.int/" }
          ],
          tryIt: "Tafuta orodha rasmi ya nchi yako ya mawakala wa ajira wenye leseni (au ofisi inayoitunza). Andika anwani ya tovuti. Kisha tafuta wakala mmoja uliyewahi kumsikia, au wakala yeyote kwenye orodha, na uandike jina lake, namba ya leseni na kama leseni ni halali.",
          youCanNow: "kupata orodha rasmi ya nchi yako ya mawakala wenye leseni na kukagua jina, namba na hali ya wakala mmoja.",
          quickCheck: [
            { objective: "O2", q: "Wakala anakutumia kiungo cha ukurasa unaosema wakala ana leseni. Ukaguzi salama zaidi ni upi?", options: ["Kuamini kiungo kwa sababu kinaonekana rasmi", "Kumwomba wakala akutumie picha ya skrini", "Kuhesabu maoni mazuri kwenye mitandao ya kijamii", "Kufungua mwenyewe orodha rasmi ya serikali yako na kutafuta jina na namba"], answer: 3, why: "Mawakala bandia wanaweza kutengeneza kurasa bandia; kwenda mwenyewe kwenye orodha rasmi ndio ukaguzi halisi." },
            { objective: "O2", q: "Jina la wakala linalingana na orodha rasmi lakini namba ya leseni ni tofauti. Hii inaashiria nini?", options: ["Huenda mtu anaiga jina la wakala halisi", "Hakuna kitu; namba si muhimu", "Wakala ni salama zaidi", "Unapaswa kulipa haraka zaidi"], answer: 0, why: "Mawakala bandia wanaiga majina halisi; jina na namba vyote lazima vilingane na leseni halali." }
          ]
        },
        {
          title: "Kutambua mawakala bandia na ulaghai wa kazi",
          objectives: ["O3"],
          minutes: 5,
          goal: "Orodhesha dalili za hatari katika tangazo la kazi au ujumbe wa wakala.",
          text: [
            "Uajiri wa haki una kanuni moja rahisi unayoweza kukumbuka: wafanyakazi hawapaswi kulipa ili kupata kazi. Miongozo ya International Labour Organization (ILO) kuhusu uajiri wa haki inasema hakuna ada za kuajiriwa wala gharama zinazohusiana zinazopaswa kutozwa kwa wafanyakazi au watafuta kazi. Mwajiri ndiye analipa. Hii inaitwa kanuni ya mwajiri analipa. Baadhi ya nchi bado zinaruhusu ada fulani kisheria, kwa hiyo mtu yeyote akikuomba pesa, kagua kwanza sheria rasmi za nchi yako.",
            "Dalili za hatari zinazojulikana: lazima ulipe wakala ada ya kupangiwa kazi, ya mafunzo, ya uchunguzi wa afya au ya viza kabla ya kuona mkataba; mshahara ni mkubwa mno kuliko kawaida kwa kazi hiyo; ofa inakuja kupitia mitandao ya kijamii au ujumbe tu bila anwani ya kampuni; wanakuharakisha uamue leo; wanakuambia usafiri kwa viza ya utalii; wanataka kushika pasipoti yako; au kazi, mwajiri au nchi vinaendelea kubadilika.",
            "Dalili nyingine: unaambiwa uwadanganye maafisa uwanja wa ndege, ukope pesa kutoka kwa wakala, au uifiche ofa hiyo kwa familia yako. Mwajiri halisi anaweza kukaguliwa: ana anwani halisi, tovuti, na agizo la kazi au mkataba unaoweza kuusoma kabla ya kulipa au kusafiri."
          ],
          steps: ["Soma tangazo au ujumbe polepole.", "Zungushia mstari ombi lolote la pesa, la pasipoti yako au la kuficha siri.", "Kagua kama mshahara na kazi vina maana.", "Kagua kampuni na wakala kwenye kurasa rasmi.", "Ukiona dalili ya hatari, simama na uulize mamlaka au mshauri unayemwamini."],
          words: [["Ada ya kuajiriwa", "pesa anayotozwa mfanyakazi ili apate kazi au apangiwe kazi."], ["Kanuni ya mwajiri analipa", "kanuni kwamba mwajiri, si mfanyakazi, ndiye analipa gharama za kuajiri."], ["ILO", "International Labour Organization (Shirika la Kazi Duniani), shirika la Umoja wa Mataifa linaloshughulikia kazi na haki za wafanyakazi."]],
          slides: [
            { title: "Kumbuka kanuni moja", bullets: ["Wafanyakazi hawapaswi kulipa ili kupata kazi", "Mwajiri ndiye analipa gharama za kuajiri", "Umeombwa pesa? Kagua kwanza sheria rasmi"] },
            { title: "Dalili za hatari", bullets: ["Ada kwa wakala kabla ya mkataba", "Mshahara mkubwa mno kuliko kawaida", "Kuharakishwa: amua leo", "Viza ya utalii kwa ajili ya kazi"] },
            { title: "Dalili zaidi za hatari", bullets: ["Wanataka kushika pasipoti yako", "Kazi, mwajiri au nchi vinaendelea kubadilika", "Danganya uwanja wa ndege, kopa kwa wakala, ficha siri"] },
            { title: "Ofa halisi inaweza kukaguliwa", bullets: ["Anwani halisi ya kampuni na tovuti", "Wakala mwenye leseni", "Mkataba unaousoma kabla ya kulipa au kusafiri"] }
          ],
          sources: [
            { name: "ILO: Kanuni za jumla na miongozo ya utekelezaji kwa uajiri wa haki, na maana ya ada za kuajiriwa na gharama zinazohusiana", url: "https://www.ilo.org/publications/general-principles-and-operational-guidelines-fair-recruitment-and" },
            { name: "IOM IRIS: Uajiri wa kimaadili (kanuni ya mwajiri analipa)", url: "https://iris.iom.int/" }
          ],
          tryIt: "Soma tangazo hili la mazoezi: Kazi za hoteli Dubai! Mshahara mara 3 ya kawaida. Hakuna uzoefu unaohitajika. Tuma dola 500 kwa ajili ya viza leo, nafasi 5 tu zimebaki. WhatsApp tu. Andika kila dalili ya hatari unayoiona (ziko angalau nne).",
          youCanNow: "kuorodhesha dalili za hatari za wakala bandia au ulaghai wa kazi katika tangazo au ujumbe.",
          quickCheck: [
            { objective: "O3", q: "Wakala anakuomba ulipe ada ya kupangiwa kazi kabla ya kuona mkataba. Hii ni nini?", options: ["Kawaida kwa kila kazi ya nje ya nchi", "Ishara kwamba kazi ni nzuri sana", "Dalili ya hatari; wafanyakazi hawapaswi kulipa ili kupata kazi", "Kodi ya serikali"], answer: 2, why: "Miongozo ya ILO ya uajiri wa haki inasema wafanyakazi wasitozwe ada za kuajiriwa; kulipa kabla ya mkataba ni dalili kuu ya ulaghai." },
            { objective: "O3", q: "Ujumbe upi una dalili NYINGI zaidi za hatari?", options: ["Hii ni anwani yetu na namba ya leseni; soma mkataba kwanza", "Lipa leo, ficha siri hii, na usafiri kwa viza ya utalii", "Tafadhali tuma CV yako kwa ajili ya usaili", "Mwajiri analipia tiketi yako ya ndege; ona mkataba ulioambatishwa"], answer: 1, why: "Kuharakishwa, kuficha siri na viza ya utalii kwa ajili ya kazi zote ni dalili za hatari." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kuchagua njia salama na halali",
        questions: [
          { objective: "O1", q: "Mahali papi pa kuaminika zaidi pa kukagua sheria za viza ya kazi?", options: ["Ukurasa wa mitandao ya kijamii wa wakala", "Video ya mtu aliyewahi kwenda nje ya nchi", "Ushauri wa rafiki", "Tovuti rasmi ya uhamiaji ya nchi unayokwenda au ubalozi wake"], answer: 3, why: "Ni serikali tu inayoamua kuhusu viza, kwa hiyo kurasa zake rasmi ndizo chanzo cha kuaminika." },
          { objective: "O1", q: "Kuna tofauti gani kati ya uvushaji haramu na usafirishaji haramu wa binadamu?", options: ["Uvushaji haramu ni kulipa ili kuvuka mpaka kinyume cha sheria; usafirishaji haramu wa binadamu unatumia nguvu, uongo au unyanyasaji ili kumtumia mtu vibaya", "Vinamaanisha kitu kimoja", "Uvushaji haramu ni halali", "Usafirishaji haramu wa binadamu hutokea mipakani tu"], answer: 0, why: "Usafirishaji haramu wa binadamu ni kuhusu kumtumia mtu vibaya; uvushaji haramu ni kuhusu kuvuka mpaka kinyume cha sheria." },
          { objective: "O2", q: "Unapaswa kukagua wapi kama wakala ana leseni?", options: ["Kwenye tovuti ya wakala mwenyewe tu", "Kwenye orodha rasmi ya serikali yako ya mawakala wenye leseni", "Kwa kuwauliza watafuta kazi wengine kwenye kikundi cha mazungumzo", "Kwa kuangalia samani za ofisi ya wakala"], answer: 1, why: "Orodha rasmi ya mamlaka ya kazi au ya uhamiaji inaonyesha kama leseni ni halisi na halali." },
          { objective: "O2", q: "Wakala hayuko kwenye orodha rasmi. Unafanya nini?", options: ["Kulipa amana ndogo zaidi", "Kuwapa nakala ya pasipoti yako waishike", "Kusimama, na kumripoti kwa mamlaka ya kazi au ya uhamiaji", "Kuwaomba watengeneze tovuti nzuri zaidi"], answer: 2, why: "Wakala asiye na leseni hana mtu anayemkagua; simama na uripoti." },
          { objective: "O3", q: "Kanuni ya mwajiri analipa inamaanisha nini?", options: ["Mfanyakazi analipa nusu", "Serikali inalipa ada za mfanyakazi", "Wakala anaamua nani alipe", "Mwajiri, si mfanyakazi, ndiye analipa gharama za kuajiri"], answer: 3, why: "Katika uajiri wa haki, gharama za kuajiri zinalipwa na mwajiri, si na wafanyakazi." }
        ]
      }
    },
    {
      name: "Sura 2: Kujilinda kabla na baada ya kuondoka",
      lessons: [
        {
          title: "Kusoma ofa ya kazi na mkataba",
          objectives: ["O4"],
          minutes: 6,
          goal: "Kagua ofa ya kazi uone kama ina maelezo yote yanayohitajika kwa maandishi.",
          text: [
            "Kazi ya haki inakuja na ofa au mkataba ulioandikwa unaoweza kuusoma, kwa lugha unayoielewa, kabla ya kulipa chochote, kusaini au kusafiri. Omba nakala unayoweza kubaki nayo. Usipoelewa neno, mwombe wakala, ofisi ya kazi au mtu unayemwamini akueleze.",
            "Kagua kwamba unataja: mwajiri na anwani yake; kazi na shughuli zake kuu; mahali utakapofanyia kazi; mshahara, unalipwa mara ngapi na kwa njia gani; saa za kazi, siku za mapumziko na saa za ziada; muda wa mkataba; makazi na chakula, na kama vinakatwa kwenye mshahara wako; nani analipia tiketi ya ndege, viza, uchunguzi wa afya na gharama za kuajiri; na jinsi unavyoweza kumaliza mkataba na kurudi nyumbani.",
            "Kubadilishiwa mkataba ni hila inayojulikana: unasaini mkataba mmoja nyumbani na unapewa mwingine tofauti na mbaya zaidi unapofika. Hifadhi picha ya kila ukurasa unaosaini. Kama mkataba unaopewa nje ya nchi ni tofauti, usiusaini kwa haraka; wasiliana na ubalozi wako au ofisi ya kazi."
          ],
          steps: ["Pata ofa au mkataba kamili kwa maandishi na ubaki na nakala.", "Tumia orodha ya kukagua: mwajiri, kazi, mahali, mshahara, saa, siku za mapumziko, muda, makazi, gharama, kurudi nyumbani.", "Weka alama kwenye chochote kinachokosekana au kilicho tofauti na ulichoambiwa.", "Omba majibu kwa maandishi kabla ya kusaini.", "Piga picha kila ukurasa unaosaini na uzihifadhi mahali salama."],
          words: [["Mkataba", "makubaliano yaliyoandikwa kati yako na mwajiri kuhusu kazi."], ["Saa za ziada", "kazi zaidi ya saa zako za kawaida, ambayo inapaswa kulipwa."], ["Makato", "pesa inayotolewa kwenye mshahara wako, kwa mfano kwa ajili ya makazi."], ["Kubadilishiwa mkataba", "pale mkataba unaopewa nje ya nchi unapokuwa tofauti na mbaya zaidi kuliko ule uliousaini nyumbani."]],
          slides: [
            { title: "Kabla ya kulipa, kusaini au kusafiri", bullets: ["Pata ofa kwa maandishi", "Kwa lugha unayoielewa", "Baki na nakala yako mwenyewe"] },
            { title: "Lazima useme", bullets: ["Mwajiri, kazi, mahali pa kazi", "Mshahara, saa, siku za mapumziko, saa za ziada", "Muda wa mkataba, makazi, makato"] },
            { title: "Na lazima useme", bullets: ["Nani analipia ndege, viza, uchunguzi wa afya na gharama za kuajiri", "Jinsi ya kumaliza mkataba na kurudi nyumbani"] },
            { title: "Jihadhari na kubadilishiwa mkataba", bullets: ["Piga picha kila ukurasa unaosaini", "Mkataba tofauti nje ya nchi? Usiharakishe", "Wasiliana na ubalozi wako au ofisi ya kazi"] }
          ],
          sources: [
            { name: "ILO: Kanuni za jumla na miongozo ya utekelezaji kwa uajiri wa haki", url: "https://www.ilo.org/publications/general-principles-and-operational-guidelines-fair-recruitment-and" }
          ],
          tryIt: "Andika kwenye karatasi orodha ya vitu kumi vya kukagua katika mkataba kutoka somo hili. Kisha soma ofa ya mazoezi (ibuni mwenyewe, au tumia ofa halisi ukiwa umefunika namba zako binafsi) na uweke tiki kwa kila kitu kilichoandikwa. Zungushia mstari kila kitu kinachokosekana.",
          youCanNow: "kukagua ofa ya kazi au mkataba uone kama una maelezo yote yanayohitajika na kuorodhesha chochote kinachokosekana kabla ya kusaini.",
          quickCheck: [
            { objective: "O4", q: "Unapaswa kusoma mkataba kamili lini?", options: ["Baada ya kufika katika nchi mpya", "Kabla ya kulipa, kusaini au kusafiri", "Tu kama kuna tatizo", "Wakala anakusomea"], answer: 1, why: "Unahitaji kujua masharti kabla ya kutoa pesa, kusaini au kuondoka nyumbani." },
            { objective: "O4", q: "Kwenye kazi mpya unapewa mkataba tofauti wenye mshahara mdogo zaidi. Hii inaitwaje?", options: ["Kupandishwa cheo", "Marekebisho ya kawaida", "Kubadilishiwa mkataba", "Bonasi"], answer: 2, why: "Kuweka mkataba mbaya zaidi baada ya kufika kunaitwa kubadilishiwa mkataba, unyanyasaji unaojulikana." }
          ]
        },
        {
          title: "Kujua dalili za usafirishaji haramu wa binadamu na kazi ya kulazimishwa",
          objectives: ["O5"],
          minutes: 5,
          goal: "Taja dalili za usafirishaji haramu wa binadamu na mahali pa kupata msaada.",
          text: [
            "Umoja wa Mataifa unaeleza usafirishaji haramu wa binadamu kwa sehemu tatu: kitendo (kumwajiri, kumhamisha, kumshikilia au kumpokea mtu), njia (nguvu, vitisho, uongo, matumizi mabaya ya mamlaka au ya hali dhaifu ya mtu) na lengo (kumtumia vibaya, kama kazi ya kulazimishwa au unyonyaji wa kingono). Kwa watoto walio chini ya miaka 18, hakuna haja ya nguvu wala uongo ili iwe usafirishaji haramu wa binadamu.",
            "Dalili za kuangalia: pasipoti au kitambulisho chako kinachukuliwa na kushikiliwa na mwajiri au wakala; una deni linaloendelea kuongezeka na huwezi kuondoka hadi ulilipe; hulipwi, au unalipwa kidogo sana kuliko ulivyoahidiwa; huwezi kuondoka kazini au kwenye makazi kwa uhuru; unatishiwa, au unaambiwa polisi watakukamata; unafanya kazi saa nyingi sana bila siku za mapumziko; umetengwa na familia na simu.",
            "Msaada upo. Wasiliana na ubalozi au ubalozi mdogo wa nchi yako, ofisi ya kazi au polisi katika nchi uliyopo, ofisi ya IOM, au chama cha wafanyakazi unachokiamini. Nchi nyingi zina namba za simu za msaada (hotlines) kwa wafanyakazi wahamiaji na waathiriwa wa usafirishaji haramu wa binadamu: tafuta namba rasmi sasa na uihifadhi. Kama wewe au mtu mwingine yuko hatarini sasa hivi, piga kwanza namba ya dharura ya eneo hilo."
          ],
          words: [["Kazi ya kulazimishwa", "kazi ambayo mtu analazimishwa kuifanya kwa vitisho au adhabu na hakukubali kwa hiari."], ["Utumwa wa deni", "kulazimishwa kufanya kazi ili kulipa deni ambalo halionekani kuisha."], ["Kumtumia mtu vibaya", "kumtumia mtu isivyo haki kwa faida ya mtu mwingine."]],
          slides: [
            { title: "Usafirishaji haramu wa binadamu una sehemu tatu", bullets: ["Kitendo: kumwajiri, kumhamisha, kumshikilia au kumpokea mtu", "Njia: nguvu, vitisho, uongo, matumizi mabaya ya mamlaka", "Lengo: kumtumia vibaya, kama kazi ya kulazimishwa"] },
            { title: "Dalili za kuangalia", bullets: ["Pasipoti au kitambulisho kimechukuliwa na kushikiliwa", "Deni linaloendelea kuongezeka", "Hakuna mshahara au ni kidogo sana kuliko ulivyoahidiwa"] },
            { title: "Dalili zaidi", bullets: ["Huna uhuru wa kuondoka kazini au kwenye makazi", "Vitisho, au kuambiwa polisi watakukamata", "Kutengwa na familia na simu"] },
            { title: "Mahali pa kupata msaada", bullets: ["Hatari sasa: kwanza namba ya dharura ya eneo hilo", "Ubalozi au ubalozi mdogo wako, ofisi ya kazi, polisi", "Ofisi ya IOM, vyama vya wafanyakazi, namba rasmi za msaada"] }
          ],
          sources: [
            { name: "UNODC: Maswali ya kawaida kuhusu usafirishaji haramu wa binadamu", url: "https://www.unodc.org/unodc/en/human-trafficking/faqs.html" },
            { name: "UNODC Education for Justice: kosa la usafirishaji haramu wa binadamu", url: "https://www.unodc.org/e4j/en/tip-and-som/module-6/key-issues/crime-of-trafficking-in-persons.html" },
            { name: "IOM: Shirika la Kimataifa la Uhamiaji", url: "https://www.iom.int/" }
          ],
          tryIt: "Soma hadithi hii ya mazoezi: Amina alikwenda nje ya nchi kusafisha nyumba. Alipofika, wakala alishika pasipoti yake akisema ni kuitunza salama. Anaambiwa anadaiwa dola 2,000 za safari yake, na deni hilo linaongezeka kila mwezi. Anafanya kazi saa 14 kwa siku bila siku ya mapumziko na anaambiwa polisi watamkamata akiondoka. Andika kila dalili ya usafirishaji haramu wa binadamu au kazi ya kulazimishwa, na mahali pawili ambapo Amina angeweza kupata msaada.",
          youCanNow: "kutambua dalili za usafirishaji haramu wa binadamu na kazi ya kulazimishwa na kutaja mahali ambapo mfanyakazi anaweza kupata msaada.",
          quickCheck: [
            { objective: "O5", q: "Mwajiri wako nje ya nchi anasema lazima ashike pasipoti yako. Hii ni nini?", options: ["Dalili ya hatari ya kazi ya kulazimishwa au usafirishaji haramu wa binadamu", "Huduma ya kawaida ya kuitunza salama", "Sharti la kisheria kila mahali", "Ishara ya mwajiri mzuri"], answer: 0, why: "Kuchukua na kushika pasipoti ya mfanyakazi ni dalili inayojulikana ya kazi ya kulazimishwa na usafirishaji haramu wa binadamu." },
            { objective: "O5", q: "Mfanyakazi yuko hatarini sasa hivi. Hatua ya kwanza ni ipi?", options: ["Kuandika kuhusu jambo hilo kwenye mitandao ya kijamii", "Kusubiri hadi mkataba uishe", "Kupiga namba ya dharura ya eneo hilo", "Kumlipa mwajiri deni"], answer: 2, why: "Katika hatari ya papo hapo, namba ya dharura ya eneo hilo inakuja kwanza; kisha ubalozi na msaada mwingine." }
          ]
        },
        {
          title: "Orodha yako ya usalama wa uhamiaji",
          objectives: ["O6"],
          minutes: 6,
          goal: "Andika mpango wa usalama wenye nyaraka zako, watu wa kuwasiliana nao na namba za msaada kabla ya kuondoka.",
          text: [
            "Kabla ya kuondoka, weka mpango. Baki na pasipoti na nyaraka zako mwenyewe. Tengeneza nakala: nakala ya karatasi nyumbani kwa mtu unayemwamini, na picha mahali salama unapoweza kupafungua kutoka simu yoyote, kama barua pepe yako mwenyewe. Usiweke picha za pasipoti yako mtandaoni.",
            "Andika watu wa kuwasiliana nao: mtu unayemwamini nyumbani anayetarajia kusikia kutoka kwako siku zilizopangwa; majina kamili, anwani na namba za simu za mwajiri na wakala; ubalozi au ubalozi mdogo wa nchi yako katika nchi unayokwenda; na namba rasmi za msaada ulizozitafuta kwenye kurasa za serikali. Kubalianeni na mtu unayemwamini neno la siri linalomaanisha nahitaji msaada.",
            "Weka kumbukumbu rahisi ya kazi yako: tarehe na saa unazofanya kazi na kiasi unacholipwa. Hifadhi picha za mkataba wako. Jambo likienda vibaya, kumbukumbu hizi zinasaidia ubalozi, ofisi ya kazi au wakili kukusaidia. Kisha weka haya yote, pamoja na ukaguzi wa masomo yaliyotangulia, katika orodha moja: hiyo ndiyo kazi yako ya mwisho."
          ],
          steps: ["Orodhesha kurasa rasmi ulizotumia (uhamiaji, ubalozi, wizara yako ya kazi).", "Andika jina la wakala, namba ya leseni na jinsi ulivyoikagua.", "Orodhesha kila gharama na nani anailipa.", "Weka tiki kwenye orodha ya kukagua mkataba.", "Andika dalili za hatari zitakazokufanya usimame.", "Andika mpango wako wa msaada: nakala za nyaraka, mtu unayemwamini, siku za kuwasiliana, neno la siri, namba za ubalozi na za msaada ulizozitafuta mwenyewe."],
          words: [["Mtu unayemwamini", "mtu wa nyumbani anayejua mipango yako na anayetarajia kusikia kutoka kwako."], ["Kuwasiliana kwa ratiba", "ujumbe au simu iliyopangwa ya kusema uko salama."], ["Neno la siri", "neno mnalokubaliana ambalo kwa siri linamaanisha nahitaji msaada."]],
          slides: [
            { title: "Tunza nyaraka zako", bullets: ["Pasipoti yako inabaki kwako", "Nakala ya karatasi nyumbani kwa mtu unayemwamini", "Picha mahali salama, usiiweke mtandaoni kamwe"] },
            { title: "Watu wa kuwasiliana nao", bullets: ["Mtu unayemwamini nyumbani, siku za kuwasiliana, neno la siri", "Majina na anwani za mwajiri na wakala", "Ubalozi na namba rasmi za msaada ulizozitafuta"] },
            { title: "Weka kumbukumbu", bullets: ["Tarehe na saa unazofanya kazi", "Kiasi unacholipwa", "Picha za mkataba wako"] },
            { title: "Orodha yako", bullets: ["Kurasa rasmi na ukaguzi wa leseni ya wakala", "Gharama na nani analipa, maelezo ya mkataba", "Dalili za hatari na mpango wako wa msaada"] }
          ],
          sources: [
            { name: "IOM: Shirika la Kimataifa la Uhamiaji", url: "https://www.iom.int/" },
            { name: "Ufilipino: Department of Migrant Workers (mfano wa ofisi ya wafanyakazi wahamiaji)", url: "https://dmw.gov.ph/" }
          ],
          tryIt: "Kazi ya mwisho: andaa orodha yako ya usalama wa uhamiaji kwa kazi moja halisi au ya mazoezi nje ya nchi. Weka kurasa rasmi, ukaguzi wa leseni ya wakala, gharama na nani anazilipa, maelezo ya mkataba, dalili zako za kusimama na mpango wako wa msaada. Tumia nafasi tupu kama [namba ya pasipoti] badala ya namba halisi.",
          youCanNow: "kuandika orodha ya usalama wa uhamiaji inayoweka tayari nyaraka zako, watu wa kuwasiliana nao na namba za msaada kabla ya kuondoka.",
          quickCheck: [
            { objective: "O6", q: "Pasipoti yako inapaswa kuwa wapi unapofanya kazi nje ya nchi?", options: ["Kwa wakala", "Kwa mwajiri", "Kwa rafiki uliyekutana naye safarini", "Kwako, na nakala zikiwa nyumbani"], answer: 3, why: "Baki na pasipoti yako mwenyewe; nakala kwa mtu unayemwamini zinasaidia ikipotea au ikichukuliwa." },
            { objective: "O6", q: "Kwa nini mkubaliane neno la siri na mtu unayemwamini nyumbani?", options: ["Ili kupata punguzo la bei ya simu", "Ili uweze kuomba msaada bila wengine kujua", "Ili kufungua simu yako", "Ili kupata viza haraka zaidi"], answer: 1, why: "Neno la siri linakuwezesha kuashiria hatari hata kama kuna mtu anayesikiliza." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kujilinda kabla na baada ya kuondoka",
        questions: [
          { objective: "O4", q: "Kitu kipi LAZIMA kiwe kwa maandishi kabla ya kusaini?", options: ["Nani analipia tiketi ya ndege, viza na gharama za kuajiri", "Mji anaoupenda wakala", "Rangi ya sare yako", "Mipango yako ya likizo"], answer: 0, why: "Gharama na nani anazilipa vinakulinda dhidi ya ada zilizofichwa na madeni." },
          { objective: "O4", q: "Ofa haisemi utafanya kazi saa ngapi. Unafanya nini?", options: ["Kusaini; saa si muhimu", "Kukisia saa", "Kuomba saa ziandikwe kabla ya kusaini", "Kusubiri uone baada ya kufika"], answer: 2, why: "Masharti yanayokosekana yanapaswa kujibiwa kwa maandishi kabla ya kujifunga." },
          { objective: "O5", q: "Kipi ni dalili ya utumwa wa deni?", options: ["Unapata hati ya mshahara kila mwezi", "Deni linaloendelea kuongezeka na huwezi kuondoka hadi ulilipe", "Una siku ya mapumziko kila wiki", "Unaweza kupiga simu kwa familia yako"], answer: 1, why: "Deni linaloongezeka linalokuzuia kuondoka ni utumwa wa deni, aina ya kazi ya kulazimishwa." },
          { objective: "O5", q: "Mfanyakazi mhamiaji aliye na shida anaweza kupata msaada wapi?", options: ["Kwa wakala aliyechukua pasipoti", "Kwa mtu asiyejulikana mtandaoni anayeomba ada", "Kwa mwajiri asiyemlipa", "Ubalozi au ubalozi mdogo wa nchi yake"], answer: 3, why: "Ubalozi au ubalozi mdogo unawasaidia raia wake walio nje ya nchi, pamoja na ofisi ya kazi, polisi, IOM na namba za msaada." },
          { objective: "O6", q: "Unapaswa kupata wapi namba za msaada kwa ajili ya mpango wako?", options: ["Kwenye kurasa rasmi za serikali au za ubalozi ulizozitafuta mwenyewe", "Kwenye ujumbe wa wakala", "Kwenye maoni ya mitandao ya kijamii", "Huzihitaji"], answer: 0, why: "Namba kutoka kurasa rasmi ni halisi; tapeli anaweza kukutumia namba bandia za msaada." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kuhamia Nchi Nyingine kwa Kazi kwa Usalama",
    questions: [
      { objective: "O1", q: "Njia halali ya kufanya kazi nje ya nchi ni ipi?", options: ["Kusafiri kwa viza ya utalii na kutafuta kazi huko", "Kumlipa mvushaji haramu akuvushe mpaka", "Kufanya kazi ukiwa na viza au kibali sahihi cha kazi kutoka serikali ya nchi unayokwenda", "Kutumia pasipoti ya rafiki"], answer: 2, why: "Njia halali inatumia viza au kibali ambacho serikali ya nchi unayokwenda inatoa kwa kazi hiyo." },
      { objective: "O1", q: "Chanzo kipi ni rasmi?", options: ["Tovuti ya ubalozi wa nchi unayokwenda", "Video ya wakala", "Kikundi cha mazungumzo kuhusu kazi", "Bango kwenye kituo cha basi"], answer: 0, why: "Balozi na tovuti za uhamiaji zinaendeshwa na serikali." },
      { objective: "O1", q: "Kwa nini uvushaji haramu unaweza kuwa hatari kwa mfanyakazi?", options: ["Daima ni rahisi zaidi kwa bei", "Wavushaji haramu wanaweza kugeuka wasafirishaji haramu wa binadamu, na huna ulinzi wa kisheria", "Unakupa kibali cha kazi", "Balozi zinaupendelea"], answer: 1, why: "Bila hali halali ni rahisi kutishiwa, na wavushaji haramu wanaweza kukutumia vibaya." },
      { objective: "O2", q: "Kwa nini leseni ya wakala wa ajira ni muhimu?", options: ["Inafanya kazi ilipe zaidi", "Inamaanisha kazi imehakikishwa", "Inamruhusu wakala atoze ada yoyote", "Serikali inamjua wakala na inaweza kushughulikia malalamiko"], answer: 3, why: "Leseni inamweka wakala chini ya sheria za serikali na mfumo wa malalamiko." },
      { objective: "O2", q: "Ufilipino, ofisi ipi inakuruhusu kuhakiki hali ya wakala wa ajira?", options: ["Department of Migrant Workers (DMW)", "Ukurasa binafsi wa mitandao ya kijamii", "Shirika la ndege", "Benki yoyote"], answer: 0, why: "DMW inatoa leseni kwa mawakala na ina huduma ya kukagua hali ya wakala mtandaoni." },
      { objective: "O2", q: "Vitu vipi viwili vinapaswa kulingana kwenye orodha rasmi?", options: ["Simu na barua pepe ya wakala", "Nembo na rangi za wakala", "Jina kamili la wakala na namba ya leseni", "Ukubwa wa ofisi na idadi ya wafanyakazi"], answer: 2, why: "Mawakala bandia wanaiga majina halisi, kwa hiyo jina na namba ya leseni vyote lazima vilingane na leseni halali." },
      { objective: "O3", q: "Kwa mujibu wa miongozo ya ILO ya uajiri wa haki, nani anapaswa kulipa ada za kuajiri?", options: ["Mfanyakazi", "Familia ya mfanyakazi", "Mwajiri, si mfanyakazi", "Kijiji cha mfanyakazi"], answer: 2, why: "Miongozo inasema wafanyakazi wasitozwe ada za kuajiriwa wala gharama zinazohusiana: mwajiri ndiye analipa." },
      { objective: "O3", q: "Kipi ni dalili ya hatari ya kazi bandia?", options: ["Mkataba ulioandikwa kabla ya kulipa", "Wakala mwenye leseni na anwani", "Mshahara wa kawaida kwa kazi hiyo", "Mshahara mkubwa mno kuliko kawaida bila uzoefu wowote"], answer: 3, why: "Ofa zinazoonekana nzuri mno kuwa kweli ni njia inayojulikana ya kuwanasa watu." },
      { objective: "O3", q: "Wakala anasema uifiche kazi hii kwa familia yako. Hii inaashiria nini?", options: ["Dalili ya hatari; kazi za haki hazihitaji kufichwa", "Kanuni ya kawaida ya kampuni", "Ishara ya mshahara mkubwa", "Sharti la viza"], answer: 0, why: "Kuficha siri kunakutenga na watu ambao wangeweza kukuonya au kukusaidia." },
      { objective: "O3", q: "Unaambiwa useme wewe ni mtalii uwanja wa ndege. Unafanya nini?", options: ["Kufanya hivyo; kila mtu hufanya", "Kusimama: hii ni dalili ya hatari ya njia isiyo halali na isiyo salama", "Kuomba mshahara mkubwa zaidi", "Kudanganya lakini kubeba pesa za ziada"], answer: 1, why: "Kuambiwa uwadanganye maafisa kunamaanisha njia si halali na unaweza kunaswa." },
      { objective: "O4", q: "Kipi ni kitu ambacho mkataba wa haki lazima useme?", options: ["Umri wa wakala", "Dini yako", "Mshahara na jinsi unavyolipwa", "Jina lako la mitandao ya kijamii"], answer: 2, why: "Mshahara, saa, mahali, gharama na masharti ya kurudi nyumbani lazima viandikwe." },
      { objective: "O4", q: "Kwa nini upige picha kila ukurasa unaosaini?", options: ["Ili kuuweka mtandaoni", "Ili kuthibitisha ulichokubali kama mkataba utabadilishwa baadaye", "Ili kuwaonyesha marafiki zako", "Kwa sababu wakala anaomba"], answer: 1, why: "Picha zinakulinda dhidi ya kubadilishiwa mkataba." },
      { objective: "O4", q: "Mkataba uko katika lugha usiyoweza kusoma. Hatua bora ni ipi?", options: ["Kuuomba katika lugha unayoielewa, au mtu unayemwamini akueleze, kabla ya kusaini", "Kusaini haraka", "Kumwomba wakala asaini kwa niaba yako", "Kuupuuza"], answer: 0, why: "Unapaswa kuelewa kila sharti kabla ya kusaini." },
      { objective: "O5", q: "Kipi ni moja ya sehemu tatu za usafirishaji haramu wa binadamu katika maana ya Umoja wa Mataifa?", options: ["Tiketi ya ndege", "Tangazo la kazi", "Viza", "Kumtumia mtu vibaya kama lengo"], answer: 3, why: "Usafirishaji haramu wa binadamu una kitendo, njia na lengo: kumtumia mtu vibaya." },
      { objective: "O5", q: "Kipi ni dalili ya kazi ya kulazimishwa?", options: ["Kulipwa kwa wakati", "Kuambiwa polisi watakukamata ukiondoka", "Kuwa na siku ya mapumziko", "Kubaki na pasipoti yako mwenyewe"], answer: 1, why: "Vitisho vya kumzuia mfanyakazi kuondoka ni dalili ya kazi ya kulazimishwa." },
      { objective: "O5", q: "Kwa mtoto aliye chini ya miaka 18, kipi ni kweli kuhusu usafirishaji haramu wa binadamu?", options: ["Ni usafirishaji haramu tu kama nguvu imetumika", "Watoto hawawezi kusafirishwa kiharamu", "Hakuna haja ya nguvu wala uongo ili iwe usafirishaji haramu wa binadamu", "Wazazi tu ndio wanaoweza kuripoti"], answer: 2, why: "Chini ya Itifaki ya Umoja wa Mataifa, kumwajiri au kumhamisha mtoto ili kumtumia vibaya ni usafirishaji haramu wa binadamu hata bila nguvu wala uongo." },
      { objective: "O5", q: "Mahali papi pa kupata msaada ukiwa nje ya nchi?", options: ["Ofisi ya IOM", "Mwajiri anayeshika pasipoti yako", "Mkopeshaji wa riba kubwa haramu", "Wakala asiye na leseni"], answer: 0, why: "IOM, balozi, ofisi za kazi, polisi na namba rasmi za msaada zinaweza kusaidia." },
      { objective: "O6", q: "Uweke nini katika mpango wako wa msaada?", options: ["Nyimbo unazozipenda tu", "Namba ya siri (PIN) ya benki yako", "Pasipoti yako uliyompa wakala", "Mtu unayemwamini, siku za kuwasiliana, neno la siri na namba rasmi za msaada"], answer: 3, why: "Hivi vinahakikisha mtu anagundua kama uko kwenye shida na kwamba unajua umpigie nani." },
      { objective: "O6", q: "Unapaswa kuweka nakala ya pasipoti yako wapi?", options: ["Kuiweka kwenye mitandao ya kijamii", "Kwa mtu unayemwamini nyumbani na mahali salama unapoweza kupafungua", "Kwa wakala tu", "Hakuna mahali popote"], answer: 1, why: "Nakala kwa mtu unayemwamini na mahali salama binafsi zinasaidia kama pasipoti yako imepotea au imechukuliwa." },
      { objective: "O6", q: "Kwa nini uweke kumbukumbu ya saa zako na mshahara ukiwa nje ya nchi?", options: ["Ili kujionyesha", "Mwajiri anaiomba", "Inasaidia ubalozi au ofisi ya kazi kukusaidia jambo likienda vibaya", "Inahitajika kwa viza ya utalii"], answer: 2, why: "Kumbukumbu ni ushahidi wa kazi uliyofanya na kiasi ulicholipwa." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi amepiga hatua kiasi gani
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 3, 6, 8, 10, 13, 15, 17] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Taarifa rasmi", objective: "O1", notYet: "Anatumia ukurasa wa wakala, wa rafiki au wa mitandao ya kijamii tu.", meets: "Anaorodhesha ukurasa rasmi wa uhamiaji wa nchi anayokwenda na ubalozi wake katika nchi yake.", exceeds: "Pia anaorodhesha ukurasa wa wizara ya kazi au ya uhamiaji ya nchi yake na kile kila ukurasa unachosema anahitaji." },
      { name: "Wakala amekaguliwa", objective: "O2", notYet: "Hakuna ukaguzi wa wakala, au ukaguzi ulitumia kiungo kutoka kwa wakala.", meets: "Jina la wakala na namba ya leseni vimekaguliwa kwenye orodha rasmi na ni halali leo.", exceeds: "Pia amekagua kwamba agizo la kazi au nafasi ya kazi imeidhinishwa pale nchi yake inapohitaji hivyo." },
      { name: "Gharama na dalili za hatari", objective: "O3", notYet: "Gharama hazijaorodheshwa, au ada kwa mfanyakazi imekubaliwa bila swali.", meets: "Kila gharama imeorodheshwa pamoja na nani analipa, na angalau dalili nne za kusimama zimeandikwa.", exceeds: "Amekagua sheria rasmi kuhusu ada katika nchi yake na ameandika alikagua wapi." },
      { name: "Maelezo ya mkataba", objective: "O4", notYet: "Chini ya vitu sita kati ya kumi vya mkataba vimekaguliwa.", meets: "Vitu vyote kumi vya mkataba vimeorodheshwa na vinavyokosekana vimewekewa alama.", exceeds: "Ameandika maswali ya kuuliza kwa maandishi kwa kila kitu kinachokosekana." },
      { name: "Mpango wa msaada", objective: "O5", notYet: "Hakuna namba za msaada, au namba zimechukuliwa kutoka kwa wakala.", meets: "Ubalozi na angalau namba moja rasmi ya msaada, zilizotafutwa kwenye kurasa rasmi, pamoja na namba ya dharura ya eneo hilo.", exceeds: "Pia anataja ofisi ya IOM au chama cha wafanyakazi karibu na mahali pa kazi." },
      { name: "Nyaraka na watu wa kuwasiliana nao", objective: "O6", notYet: "Hakuna nakala za nyaraka wala mtu anayemwamini.", meets: "Nakala za nyaraka ziko nyumbani na mahali salama, kuna mtu anayemwamini na siku za kuwasiliana.", exceeds: "Pia kuna neno la siri na mpango wa kuandika saa na mshahara." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaoripoti kukagua leseni ya wakala kabla ya kulipa au kusaini (ufuatiliaji wa siku 30)",
      "Wanafunzi wanaoripoti kukataa au kuripoti ofa ya kazi iliyowataka walipe ada au wakabidhi pasipoti",
      "Mashirika washirika yanaripoti wanafunzi wachache wanaopoteza pesa kwa mawakala bandia"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye intaneti kwa ajili ya kutafuta kurasa rasmi",
      "Karatasi na kalamu kwa orodha za kukagua na hadithi za mazoezi",
      "Anwani za mamlaka ya kazi au ya uhamiaji ya nchi yako na orodha ya mawakala (mwezeshaji anaweza kuzitafuta mapema)",
      "Kama dakika 60 hadi 75 kwa jumla, katika vipindi vifupi"
    ],
    facilitatorNotes: [
      "Kabla ya kipindi, tafuta orodha rasmi ya nchi yako ya mawakala wenye leseni, ofisi ya wafanyakazi wahamiaji na namba rasmi za msaada, na ukague kama bado ni za sasa.",
      "Usitoe ushauri wa viza wala wa kisheria; waelekeze wanafunzi kwenye ubalozi, ukurasa rasmi wa uhamiaji au wakili mwenye leseni.",
      "Usiwaombe wanafunzi kamwe kushiriki namba halisi za pasipoti, kitambulisho au benki; tumia nafasi tupu kama [namba ya pasipoti].",
      "Baadhi ya wanafunzi au familia zao huenda walidanganywa au kutumiwa vibaya. Ongea bila kulaumu na shiriki huduma za msaada za eneo lako kwa faragha.",
      "Mwanafunzi akisema yeye au mtu mwingine yuko hatarini sasa, msaidie kupiga kwanza namba ya dharura ya eneo hilo."
    ]
  }
};
