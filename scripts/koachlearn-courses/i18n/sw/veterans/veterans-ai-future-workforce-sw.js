"use strict";

// Koach Learn course (Swahili translation of veterans/veterans-ai-future-workforce.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "veterans-ai-future-workforce-sw",
  lang: "sw",
  translationOf: "veterans-ai-future-workforce",
  category: "Veterans (military)",
  name: "Utangulizi wa AI na Kazi za Baadaye",
  skills: "Kueleza AI ni nini, Kufungua msaidizi wa AI wa bure, Kuandika prompt iliyo wazi, Kugeuza kazi za kijeshi kuwa maneno ya kiraia, Kukagua majibu ya AI, Kulinda taarifa binafsi na nyeti",
  outcome: "kutumia msaidizi wa AI wa bure kugeuza moja ya kazi zako za kijeshi kuwa lugha ya kazi za kiraia, kukagua matokeo kwenye chanzo rasmi cha kazi, na kuzuia taarifa binafsi na nyeti zisiingie ndani yake.",
  about: [
    "Kozi hii ni kwa maveterani (wanajeshi wastaafu) na wanajeshi wanaojiandaa kuacha jeshi, wanaotaka kuelewa jinsi akili bandia (AI) inavyobadilisha kazi za kiraia, na jinsi ya kuitumia kwa faida yao. Huhitaji ujuzi wa teknolojia.",
    "Utajifunza AI ni nini, jinsi ya kufungua msaidizi wa AI wa bure, jinsi ya kumpa maelekezo yaliyo wazi (kama amri iliyo wazi: kazi, hali, kiwango), na jinsi ya kuzuia taarifa binafsi na nyeti zisiingie ndani yake. Kisha utaitumia kugeuza uzoefu wako wa kijeshi kuwa maneno ambayo waajiri wa kiraia wanaelewa, na kukagua matokeo.",
    "Kila somo linachukua kama dakika tano: soma, tazama slaidi, kisha fanya kazi ya \"Jaribu sasa\". Jaribio la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Chagua kazi moja uliyofanya jeshini. Tumia msaidizi wa AI kuiandika upya kama mistari mitatu ya CV ya kiraia, omba boresho moja, tafuta kazi yako ya kijeshi kwenye O*NET Military Crosswalk ili kukagua majina ya kazi za kiraia inayopendekeza, na ondoa taarifa yoyote binafsi au nyeti kabla ya kuhifadhi mistari hiyo.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Maveterani na wanajeshi wanaojiandaa kuacha jeshi wanaotafuta kazi za kiraia. Umri na vyeo vinatofautiana sana; wengi wana ujuzi mzuri wa kazi lakini wanaueleza kwa maneno ya kijeshi.",
    startingPoint: "Wamezoea amri, taratibu na viwango, na simu janja au kompyuta. Wametumia wasaidizi wa AI kidogo au hawajatumia kabisa, na bado hawajazoea kueleza kazi za kijeshi kwa maneno ya kiraia.",
    gap: "Waajiri wa kiraia husoma CV kwa lugha yao wenyewe, na zaidi na zaidi wanatarajia wafanyakazi watumie zana za AI. Wanafunzi wanahitaji kutumia msaidizi wa AI wa bure kwa usalama ili kugeuza huduma yao kuwa lugha ya kazi za kiraia na kukagua matokeo kwenye vyanzo rasmi vya kazi, ili uzoefu wao ueleweke na wasidanganywe na majibu yasiyo sahihi.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; hakuna ujuzi wa teknolojia unaodhaniwa",
      "Vifaa: simu janja au kompyuta yenye intaneti; baadhi wanatumia kompyuta za pamoja za kambi, maktaba au TAP",
      "Muda: masomo ya kama dakika 5 yanayoingia kati ya miadi ya mpito na kazi",
      "OPSEC na faragha: hakuna taarifa za siri, zilizodhibitiwa au za operesheni, na hakuna namba ya Social Security wala namba ya faili ya VA katika prompt yoyote",
      "Viwango vya mishahara na sheria za programu hubadilika, kwa hiyo wanafunzi hukagua vyanzo rasmi (O*NET, BLS, VA) kabla ya kuchukua hatua"
    ],
    prerequisites: "Hakuna."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa orodha ya kazi", action: "kueleza AI ni nini, kutaja njia inavyobadilisha kazi za kiraia na kutambua ujuzi ambao haiwezi kuuchukua nafasi", standard: "ukipata angalau 4 kati ya 5 sahihi" },
    { id: "O2", condition: "Ukitumia simu au kompyuta", action: "kufungua msaidizi wa AI wa bure na kuandika prompt yenye kazi, hali na kiwango", standard: "ili jibu la kwanza liwe na manufaa" },
    { id: "O3", condition: "Kabla ya kutuma prompt yoyote", action: "kuikagua kama ina taarifa binafsi au nyeti na kuiondoa au kuweka kishika-nafasi badala yake", standard: "bila kutoa namba binafsi wala taarifa za siri, zilizodhibitiwa au za operesheni" },
    { id: "O4", condition: "Ukipewa namba au jina la kazi yako ya kijeshi", action: "kutafuta kazi yako ya kijeshi kwenye O*NET Military Crosswalk na kuorodhesha kazi za kiraia zinazolingana", standard: "ukiwa na angalau majina matatu ya kazi za kiraia na kazi mbili kwa kila moja" },
    { id: "O5", condition: "Ukipewa kazi moja kutoka huduma yako", action: "kutumia msaidizi wa AI kuandika upya kazi hiyo kama mistari ya CV ya kiraia yenye ukubwa na matokeo", standard: "bila lugha ya mtaani ya kijeshi na kila dai likiwa kweli" },
    { id: "O6", condition: "Ukipewa jibu la AI kuhusu kazi, mishahara au programu", action: "kukagua jibu kwenye vyanzo rasmi na kuchagua ujuzi mmoja na programu moja kwa hatua yako inayofuata", standard: "kabla ya kulitumia" }
  ],
  chapters: [
    {
      name: "Sura 1: Misingi ya AI kwa jukumu lililo mbele",
      lessons: [
        {
          objectives: ["O1"],
          title: "AI ni nini na inavyobadilisha kazi",
          minutes: 4,
          goal: "Eleza kwa maneno yako mwenyewe AI ni nini na taja njia mbili inavyobadilisha kazi za kiraia.",
          text: [
            "AI, au akili bandia (artificial intelligence), ni programu za kompyuta zinazofanya kazi ambazo kwa kawaida zinahitaji mtu, kama kuandika, kufupisha, kupanga taarifa au kugundua mifumo. Msaidizi wa AI ni ule unaozungumza naye kwa maneno ya kawaida. Wanaojulikana walio bure ni pamoja na ChatGPT, Microsoft Copilot na Google Gemini.",
            "Katika kazi za kiraia, AI sasa inatumika kuandika rasimu za barua pepe na ripoti, kufupisha nyaraka ndefu, kupanga ratiba na njia, kujibu maswali ya wateja, na kutafuta matatizo katika data. Katika usafirishaji na ugavi inasaidia kutabiri mahitaji ya vifaa; katika matengenezo inasaidia kugundua vipuri vinavyoweza kuharibika; ofisini inaandika rasimu za kwanza.",
            "AI haichukui nafasi ya busara, uongozi wala uwajibikaji. Huo ni ujuzi uliojenga ukiwa jeshini. Waajiri wanataka watu wanaoweza kutumia AI kama zana na bado wakafanya uamuzi, wakakagua kazi na kuongoza timu."
          ],
          words: [["AI", "kifupi cha artificial intelligence (akili bandia): programu za kompyuta zinazofanya kazi ambazo kwa kawaida zinahitaji mtu."], ["Msaidizi wa AI", "programu ya AI unayozungumza nayo kwa kuandika au kuongea."]],
          slides: [
            { title: "AI ni...", bullets: ["Programu zinazoandika, kufupisha, kupanga na kugundua mifumo", "Wasaidizi unaozungumza nao: ChatGPT, Copilot, Gemini"] },
            { title: "Jinsi AI inavyobadilisha kazi", bullets: ["Kuandika rasimu za barua pepe na ripoti", "Kutabiri mahitaji ya vifaa na kupanga njia", "Kugundua vifaa vinavyoweza kuharibika"] },
            { title: "AI haichukui nafasi ya", bullets: ["Busara na uwajibikaji", "Uongozi", "Kukagua kazi: uamuzi bado ni wako"] }
          ],
          tryIt: "Andika kazi mbili kutoka kazi yako ya kijeshi na kazi mbili kutoka kazi ya kiraia unayoitaka. Karibu na kila moja, andika njia moja AI inavyoweza kusaidia.",
          youCanNow: "kueleza AI ni nini, kutaja njia inavyobadilisha kazi, na kusema ni ujuzi gani AI haiwezi kuuchukua nafasi.",
          quickCheck: [
            { objective: "O1", q: "AI ni hodari zaidi kwa kazi gani katika kazi ya kiraia?", options: ["Kuandika toleo la kwanza la ripoti", "Kuwajibika kwa uamuzi wa mwisho", "Kujenga imani na timu", "Kuongoza watu wakati wa dharura"], answer: 0, why: "AI inaweza kuandika rasimu na kupanga taarifa, lakini busara, imani na uongozi vinabaki kwa watu." },
            { objective: "O1", q: "Mfanyakazi mwenzako anasema AI itafanya ujuzi wako wa uongozi usiwe na maana. Unasema nini?", options: ["Kukubali na kuacha kutaja uongozi", "Kusema AI haichukui nafasi ya busara, uongozi wala uwajibikaji", "Kusema AI inatumika jeshini tu", "Kusema AI iko sahihi kila wakati, kwa hiyo watu wanaandika tu"], answer: 1, why: "AI inabadilisha kazi, lakini watu bado wanaongoza, wanaamua na wanawajibika." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kufungua msaidizi na kutoa amri iliyo wazi",
          minutes: 5,
          goal: "Fungua msaidizi wa AI wa bure na uandike prompt yenye kazi, hali na kiwango.",
          text: [
            "Kwenye simu, sakinisha app rasmi kutoka duka la apps (OpenAI kwa ChatGPT, Microsoft kwa Copilot, Google kwa Gemini). Kwenye kompyuta, andika chatgpt.com, copilot.microsoft.com au gemini.google.com kwenye kivinjari.",
            "Unachoandika kinaitwa prompt. Tayari unajua jinsi ya kutoa amri iliyo wazi. Tumia wazo hilo hilo: kazi (unachohitaji), hali (hali yako), na kiwango (jibu zuri linaonekanaje: urefu, muundo, mtindo).",
            "Mfano: \"Kazi: orodhesha kazi za kiraia zinazotumia ujuzi wa matengenezo ya magari. Hali: nilikuwa fundi wa magari madogo ya Jeshi la Nchi Kavu (Army) kwa miaka 6. Kiwango: majina 5 ya kazi, mstari mmoja kila moja, maneno rahisi.\""
          ],
          steps: ["Fungua app au tovuti rasmi.", "Andika kazi: unachohitaji.", "Ongeza hali: hali yako, bila taarifa binafsi.", "Ongeza kiwango: urefu, muundo na mtindo.", "Tuma na usome jibu."],
          words: [["Prompt", "unachoandika au kusema kwa msaidizi wa AI ili kuomba kitu."], ["Muundo", "umbo la jibu, kama orodha, jedwali au aya fupi."]],
          slides: [
            { title: "Mahali pa kuufungua", bullets: ["Simu: app rasmi kutoka duka la apps", "Kompyuta: chatgpt.com, copilot.microsoft.com, gemini.google.com"] },
            { title: "Prompt ni amri iliyo wazi", bullets: ["Kazi: unachohitaji", "Hali: hali yako", "Kiwango: jibu zuri linaonekanaje"] },
            { title: "Mfano", bullets: ["Kazi: kazi za kiraia zinazotumia ujuzi wa matengenezo ya magari", "Hali: miaka 6 kama fundi wa magari madogo", "Kiwango: majina 5, mstari mmoja kila moja, maneno rahisi"] }
          ],
          tryIt: "Fungua msaidizi wa AI wa bure. Andika prompt yenye kazi, hali na kiwango ukiomba majina matano ya kazi za kiraia zinazotumia ujuzi wa kazi yako ya kijeshi. Soma jibu.",
          youCanNow: "kufungua msaidizi wa AI wa bure na kuandika prompt yenye kazi, hali na kiwango.",
          quickCheck: [
            { objective: "O2", q: "Katika prompt ya amri iliyo wazi, kazi ni nini?", options: ["Taarifa zako binafsi", "Urefu wa jibu", "Unachotaka AI ifanye", "Jina la zana ya AI"], answer: 2, why: "Kazi ni jukumu unaloipa AI; hali na kiwango vinafuata." },
            { objective: "O2", q: "Unataka mawazo ya kazi za kiraia kutoka kwa msaidizi wa AI. Unatuma prompt ipi?", options: ["\"Kazi?\"", "\"Niambie kila kitu kuhusu kazi.\"", "\"Andika hadithi ya maisha yangu yote.\"", "\"Kazi: orodhesha kazi za kiraia. Hali: miaka 4 kama mtaalamu wa vifaa. Kiwango: majina 5, mstari mmoja kila moja.\""], answer: 3, why: "Prompt yenye kazi, hali na kiwango inaleta jibu la kwanza lenye manufaa." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kuzuia taarifa binafsi na nyeti",
          minutes: 5,
          goal: "Kagua prompt kama ina taarifa binafsi au nyeti na uiondoe kabla ya kuituma.",
          text: [
            "Wasaidizi wa AI wa umma wanaweza kuhifadhi unachoandika. Usiandike kamwe namba yako ya Social Security, namba zilizo kwenye DD-214 yako, namba za faili au madai ya VA, namba za benki au kadi, nywila, au taarifa za afya ambazo usingependa zienee.",
            "Nidhamu ile ile uliyotumia kwa usalama wa operesheni (OPSEC) inatumika. Usiandike taarifa za siri au zilizodhibitiwa, mahali vikosi vilipo, taarifa za operesheni, au chochote ulichoambiwa usishiriki. Eleza kazi yako kwa jumla: \"nilisimamia timu ya matengenezo ya watu 12\" ni sawa; majina ya vikosi na operesheni hayahitajiki.",
            "Ukihitaji namba katika hati, andika kishika-nafasi kama \"[namba yangu]\" na uijaze wewe mwenyewe baadaye, nje ya mtandao."
          ],
          steps: ["Soma prompt yako kabla ya kuituma.", "Ondoa namba binafsi, taarifa za akaunti na nywila.", "Ondoa taarifa za siri, zilizodhibitiwa au za operesheni maalum.", "Tumia kishika-nafasi kama \"[namba yangu]\" inapohitajika."],
          words: [["OPSEC", "usalama wa operesheni: kulinda taarifa ambazo adui angeweza kuzitumia."], ["Kishika-nafasi", "kitu cha kushika nafasi kama \"[namba yangu]\" ambacho unakibadilisha wewe mwenyewe baadaye."], ["DD-214", "hati inayorekodi huduma yako jeshini na kuachishwa kwako."]],
          slides: [
            { title: "Usiandike kamwe kwenye AI ya umma", bullets: ["Namba za Social Security, DD-214 au faili ya VA", "Namba za benki au kadi na nywila", "Taarifa binafsi za afya"] },
            { title: "OPSEC bado inatumika", bullets: ["Hakuna taarifa za siri au zilizodhibitiwa", "Hakuna mahali vikosi vilipo wala taarifa za operesheni", "Eleza kazi yako kwa jumla"] },
            { title: "Tumia kishika-nafasi", bullets: ["Andika \"[namba yangu]\" badala yake", "Ijaze wewe mwenyewe baadaye, nje ya mtandao"] }
          ],
          tryIt: "Andika prompt inayoeleza kazi yako ya mwisho ya kijeshi kwa namna unayoweza kumwonyesha mwajiri yeyote. Isome mstari kwa mstari na uondoe chochote binafsi au nyeti kabla ya kuituma.",
          youCanNow: "kukagua prompt kama ina taarifa binafsi na nyeti na kuziondoa kabla ya kuituma.",
          quickCheck: [
            { objective: "O3", q: "Unaandika barua ya maombi kwa AI na unahitaji namba yako ya simu ndani yake. Unafanya nini?", options: ["Kuandika namba halisi ili barua ikamilike", "Kuandika \"[simu yangu]\" na kuongeza namba halisi wewe mwenyewe baadaye", "Kuandika namba yako ya Social Security badala yake", "Kuiomba AI ikisie namba"], answer: 1, why: "Kishika-nafasi kinakupa msaada bila kuweka namba binafsi ndani ya AI." },
            { objective: "O3", q: "Taarifa ipi ni salama kuweka katika prompt ya AI ya umma?", options: ["\"Nilifundisha wanatimu wapya 8 ukaguzi wa usalama\"", "Tarehe na mahali kikosi chako kilipopelekwa", "Taarifa kutoka kikao cha siri", "Namba yako ya faili ya VA"], answer: 0, why: "Kazi za jumla zenye namba ni sawa; taarifa za operesheni na namba binafsi zinabaki nje." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Misingi ya AI kwa jukumu lililo mbele",
        questions: [
          { objective: "O1", q: "Kipi kinaeleza vizuri zaidi msaidizi wa AI?", options: ["Mwajiri anayesoma ujumbe wako", "Programu ya kompyuta unayozungumza nayo kwa maneno ya kawaida", "Ofisi ya serikali ya mafao", "Mtandao salama wa kijeshi"], answer: 1, why: "Msaidizi wa AI ni programu unayoiandikia au kuongea nayo, nayo inaandika majibu." },
          { objective: "O1", q: "Ni ujuzi gani AI HAICHUKUI nafasi yake kazini?", options: ["Kuandika rasimu ya barua pepe ya kwanza", "Kufupisha ripoti ndefu", "Busara na uwajibikaji kwa uamuzi", "Kupanga orodha"], answer: 2, why: "AI inaweza kuandika rasimu na kupanga, lakini mtu bado anafanya uamuzi na kuwajibika kwa matokeo." },
          { objective: "O2", q: "Katika prompt ya \"amri iliyo wazi\", hali ni nini?", options: ["Hali yako, bila taarifa binafsi", "Urefu na muundo wa jibu", "Jina la app", "Nywila yako"], answer: 0, why: "Hali inaeleza hali yako ili msaidizi aweze kulifanya jibu likufae." },
          { objective: "O3", q: "Taarifa ipi ni sawa kuandika kwa msaidizi wa AI wa umma?", options: ["Namba iliyo kwenye DD-214 yako", "Mahali kikosi chako kilipo sasa", "\"Nilisimamia timu ya matengenezo ya watu 12\"", "Namba ya dai lako la VA"], answer: 2, why: "Maelezo ya jumla ya kazi yako ni salama; namba na taarifa za operesheni si salama." },
          { objective: "O3", q: "Unahitaji namba yako ya faili ya VA katika barua unayoandika kwa AI. Unafanya nini?", options: ["Kuandika namba halisi", "Kuandika nusu yake", "Kuiomba AI iikisie", "Kuandika \"[namba yangu]\" na kuijaza wewe mwenyewe baadaye"], answer: 3, why: "Kishika-nafasi kinakuwezesha kupata msaada bila kushiriki namba binafsi." }
        ]
      }
    },
    {
      name: "Sura 2: Kugeuza huduma yako kuwa kazi ya kiraia",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kutafuta kazi za kiraia zinazolingana na huduma yako",
          minutes: 5,
          goal: "Tafuta kazi yako ya kijeshi kwenye O*NET Military Crosswalk na uorodheshe kazi za kiraia zinazolingana.",
          text: [
            "O*NET OnLine ya Wizara ya Kazi ya Marekani (U.S. Department of Labor) ina Military Crosswalk Search. Unachagua tawi lako (MOS ya Army au Marine Corps, rating ya Navy au Coast Guard, AFSC ya Air Force, SFSC ya Space Force), unaandika namba au jina la kazi yako, nayo inaonyesha kazi za kiraia zinazolingana.",
            "Kila kazi ya kiraia kwenye O*NET inaorodhesha majukumu, zana na ujuzi wake. Hiyo ndiyo lugha wanayotumia waajiri. Kisha unaweza kumwomba msaidizi wa AI aeleze kazi hizo kwa maneno rahisi, lakini orodha yenyewe inatoka kwenye chanzo rasmi.",
            "CareerOneStop, ambayo pia inafadhiliwa na Wizara ya Kazi, ina Veterans Job Matcher inayofanya ulinganisho unaofanana. Jaribu zote mbili na ulinganishe."
          ],
          steps: ["Nenda onetonline.org na ufungue Military Crosswalk Search.", "Chagua tawi lako.", "Andika namba yako (kwa mfano 88M au rating ya Navy) au jina la kazi.", "Fungua kazi mbili au tatu za kiraia zinazolingana na usome majukumu yake.", "Andika majina ya kazi yanayokuvutia."],
          words: [["MOS / rating / AFSC", "namba ya kazi yako ya kijeshi katika Army na Marines, Navy na Coast Guard, na Air Force."], ["Crosswalk", "zana inayolinganisha kazi ya kijeshi na kazi za kiraia."], ["O*NET", "hifadhidata ya Wizara ya Kazi ya kazi za kiraia na ujuzi zinazohitaji."]],
          slides: [
            { title: "O*NET Military Crosswalk", bullets: ["Inaendeshwa na Wizara ya Kazi ya Marekani", "Chagua tawi lako, andika namba au jina la kazi", "Ona kazi za kiraia zinazolingana"] },
            { title: "Soma majukumu ya kiraia", bullets: ["Kila kazi inaorodhesha majukumu, zana na ujuzi", "Hiyo ndiyo lugha wanayotumia waajiri"] },
            { title: "Jaribu pia", bullets: ["CareerOneStop Veterans Job Matcher", "Linganisha orodha zote mbili"] }
          ],
          sources: [{ name: "O*NET OnLine: Military Crosswalk Search", url: "https://www.onetonline.org/crosswalk/MOC" }, { name: "Wizara ya Kazi ya Marekani, VETS: Tafuta kazi", url: "https://www.dol.gov/agencies/vets/veterans/findajob" }],
          tryIt: "Tafuta MOS, rating au AFSC yako kwenye O*NET Military Crosswalk. Andika majina matatu ya kazi za kiraia inayopendekeza na majukumu mawili kutoka kila moja.",
          youCanNow: "kutumia O*NET Military Crosswalk kupata kazi za kiraia zinazolingana na kazi yako ya kijeshi.",
          quickCheck: [
            { objective: "O4", q: "Unaandika nini kwenye O*NET Military Crosswalk ili kupata kazi zinazolingana?", options: ["Namba yako ya Social Security", "Anwani ya nyumbani kwako", "Kampuni ya kiraia unayoipenda", "Namba au jina la kazi yako ya kijeshi"], answer: 3, why: "Crosswalk inatafuta kwa namba au jina la kazi ya kijeshi na kuonyesha kazi za kiraia zinazolingana." },
            { objective: "O4", q: "Crosswalk inaonyesha kazi kadhaa za kiraia kwa namba yako. Unafanya nini baadaye?", options: ["Kuchagua ya kwanza bila kusoma", "Kupuuza orodha na kumuuliza rafiki", "Kuandika majina matatu ya kazi na majukumu mawili kwa kila moja", "Kuifunga na kukisia jina la kazi"], answer: 2, why: "Kuandika majina na majukumu yake kunakupa maneno ya kiraia ya kutumia katika CV yako." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kuandika upya kazi ya kijeshi kwa maneno ya kiraia",
          minutes: 5,
          goal: "Tumia AI kuandika upya kazi moja ya kijeshi kama mstari wa CV ya kiraia wenye matokeo.",
          text: [
            "Mameneja wa kuajiri wa kiraia huenda hawajui platoon sergeant, PMCS au CONEX ni nini. Kazi yako ni kusema jambo lile lile kwa maneno yao: ulichofanya, ukubwa wake, na matokeo yake.",
            "Mpe AI kazi yako kwa maneno rahisi na kazi ya kiraia unayolenga. Mfano wa prompt: \"Andika upya hii kwa CV ya msimamizi wa ghala: nilisimamia chumba cha vifaa, bidhaa 300, nilitoa vifaa kwa wanajeshi 120, hakuna hasara katika hesabu 2 za mali. Nipe mistari 3 inayoanza na kitenzi chenye nguvu na yenye namba.\"",
            "Kisha iboreshe kwa maswali ya kufuatilia: \"Ondoa lugha ya mtaani ya kijeshi.\" \"Tumia maneno kutoka tangazo hili la kazi.\" \"Ifanye fupi zaidi.\" Jibu la kwanza ni rasimu; wewe ndiye mhariri."
          ],
          steps: ["Andika kazi kwa maneno rahisi: nini, ukubwa gani, matokeo gani.", "Taja kazi ya kiraia unayolenga.", "Omba mistari 3 yenye vitenzi vyenye nguvu na namba.", "Omba badiliko moja, kama \"ondoa lugha ya mtaani ya kijeshi\".", "Isome na uhakikishe kila neno ni kweli."],
          words: [["Mstari wa CV", "mstari mmoja mfupi kwenye CV unaoonyesha kitu ulichofanya na matokeo yake."], ["Kifupisho", "neno lililotengenezwa kwa herufi za kwanza, kama PMCS; raia mara nyingi hawajui vifupisho vya kijeshi."]],
          slides: [
            { title: "Sema kwa maneno yao", bullets: ["Ulichofanya", "Ukubwa wake: watu, pesa, vifaa", "Matokeo yake"] },
            { title: "Mfano wa prompt", bullets: ["\"Andika upya kwa CV ya msimamizi wa ghala\"", "Chumba cha vifaa, bidhaa 300, wanajeshi 120, hakuna hasara", "\"Mistari 3, vitenzi vyenye nguvu, namba\""] },
            { title: "Kisha hariri", bullets: ["\"Ondoa lugha ya mtaani ya kijeshi.\"", "\"Tumia maneno kutoka tangazo hili la kazi.\"", "Kagua kwamba kila neno ni kweli"] }
          ],
          tryIt: "Chagua kazi moja kutoka huduma yako. Mwombe msaidizi wa AI aiandike upya kama mistari mitatu ya CV ya kiraia kwa jina moja la kazi kutoka Somo la 4. Mwombe aondoe lugha ya mtaani ya kijeshi.",
          youCanNow: "kuandika upya kazi ya kijeshi kama mistari ya CV ya kiraia iliyo wazi, yenye namba na matokeo.",
          quickCheck: [
            { objective: "O5", q: "Mstari upi wa CV umeandikwa kwa mwajiri wa kiraia?", options: ["\"Niliongoza timu ya watu 10 iliyopunguza muda wa kutengeneza vifaa kwa 20%\"", "\"Served as NCOIC of the motor pool IAW SOP\"", "\"Nilifanya kazi mbalimbali nilizopewa\"", "\"Nilikuwa msimamizi wa vitu\""], answer: 0, why: "Unatumia maneno rahisi na unaonyesha ulichofanya, ukubwa wake na matokeo." },
            { objective: "O5", q: "Mstari wa AI bado unasema \"CONUS\" na \"PCS\". Unaomba nini baadaye?", options: ["\"Ongeza vifupisho zaidi.\"", "\"Ifanye ndefu zaidi.\"", "\"Ondoa lugha ya mtaani ya kijeshi na utumie maneno rahisi ya kiraia.\"", "\"Iandike kama shairi.\""], answer: 2, why: "Swali la kufuatilia linaloomba kuondoa lugha ya mtaani linageuza rasimu kuwa maneno ambayo msomaji wa kiraia anaelewa." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kukagua jibu na kupanga ujuzi wako unaofuata",
          minutes: 5,
          goal: "Kagua jibu la AI kwenye vyanzo rasmi na uchague ujuzi mmoja wa kujenga baadaye.",
          text: [
            "AI inaweza kubuni mambo: jina la kazi lisilofaa, cheti ambacho hakipo, au kiwango cha mshahara kisicho sahihi. Hii inaitwa hallucination (kubuni). Kagua majina ya kazi kwenye O*NET, na kagua mshahara na matarajio ya kazi kwenye Occupational Outlook Handbook ya Bureau of Labor Statistics (bls.gov/ooh).",
            "Hakikisha mistari yako ni ya kweli. Usiiruhusu kamwe AI ikuze cheo chako, namba zako au tuzo zako. Mwajiri anaweza kukagua, na imani ni ngumu kuirudisha.",
            "Kisha panga ujuzi mmoja wa kujenga. Msaada rasmi wa bure ni pamoja na programu ya VA ya Personalized Career Planning and Guidance (ushauri wa bure wa kazi kwa maveterani na wanajeshi wanaostahili) na Transition Assistance Program ya Wizara ya Kazi. Kwa mafunzo ya teknolojia ya juu, programu ya VA ya VET TEC 2.0 inalipia baadhi ya kozi za teknolojia zisizo za shahada kwa maveterani wanaostahili. Kagua masharti ya sasa ya kustahili kwenye va.gov."
          ],
          steps: ["Kagua kila jina la kazi kwenye O*NET.", "Kagua mshahara na matarajio kwenye Occupational Outlook Handbook.", "Hakikisha kila namba na kila dai katika mistari yako ni kweli.", "Chagua ujuzi mmoja wa kujenga na programu moja rasmi inayoweza kusaidia."],
          words: [["Hallucination", "AI inapoandika kitu kinachosikika kuwa kweli lakini kimebuniwa."], ["Occupational Outlook Handbook", "mwongozo wa bure wa Bureau of Labor Statistics kuhusu mishahara, ukuaji wa kazi na jinsi ya kuingia katika kila kazi."]],
          slides: [
            { title: "Kagua majibu ya AI", bullets: ["Majina ya kazi: O*NET", "Mshahara na matarajio: bls.gov/ooh", "Usikuze kamwe cheo, namba au tuzo"] },
            { title: "Msaada rasmi wa bure", bullets: ["VA Personalized Career Planning and Guidance", "DOL Transition Assistance Program (TAP)", "VA VET TEC 2.0 kwa mafunzo ya teknolojia ya juu"] },
            { title: "Hatua yako inayofuata", bullets: ["Chagua ujuzi mmoja wa kujenga", "Chagua programu moja inayoweza kusaidia", "Kagua masharti ya kustahili kwenye va.gov"] }
          ],
          sources: [
            { name: "Bureau of Labor Statistics: Occupational Outlook Handbook", url: "https://www.bls.gov/ooh/" },
            { name: "VA: Personalized Career Planning and Guidance", url: "https://www.va.gov/careers-employment/education-and-career-counseling/" },
            { name: "VA: VET TEC 2.0", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/vettec-high-tech-program/" },
            { name: "Wizara ya Kazi ya Marekani: Transition Assistance Program", url: "https://www.dol.gov/agencies/vets/programs/tap" }
          ],
          tryIt: "Kazi ya mwisho: chukua mistari yako mitatu kutoka Somo la 5. Kagua majina ya kazi kwenye O*NET Military Crosswalk, iombe AI boresho moja, ondoa taarifa yoyote binafsi au nyeti, na uhifadhi mistari ya mwisho.",
          youCanNow: "kukagua majibu ya AI kuhusu kazi kwenye vyanzo rasmi na kuchagua ujuzi mmoja na programu moja kwa hatua yako inayofuata.",
          quickCheck: [
            { objective: "O6", q: "Hallucination ya AI ni nini?", options: ["Jibu la AI ambalo liko sahihi kila wakati", "Zana mpya ya AI kwa maveterani", "Njia ya kufupisha prompt", "Kitu ambacho AI inaandika kinachosikika kuwa kweli lakini kimebuniwa"], answer: 3, why: "AI inaweza kubuni mambo na bado ikasikika na uhakika, kwa hiyo unakagua ukweli kwenye vyanzo rasmi." },
            { objective: "O6", q: "AI inakuambia wastani wa mshahara wa kazi ya kiraia. Unafanya nini kabla ya kuutumia?", options: ["Kuuweka kwenye CV yako", "Kuukagua kwenye Occupational Outlook Handbook ya Bureau of Labor Statistics", "Kuiuliza AI kama ina uhakika", "Kuwashirikisha marafiki kama ukweli"], answer: 1, why: "Viwango vya mishahara vinatoka vyanzo rasmi kama Occupational Outlook Handbook, si AI." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kugeuza huduma yako kuwa kazi ya kiraia",
        questions: [
          { objective: "O4", q: "O*NET Military Crosswalk inafanya nini?", options: ["Inalinganisha namba ya kazi yako ya kijeshi na kazi za kiraia", "Inawasilisha dai lako la VA", "Inatuma CV yako kwa waajiri", "Inalipia mafunzo"], answer: 0, why: "Unaingiza MOS, rating au AFSC yako nayo inaonyesha kazi za kiraia zinazolingana." },
          { objective: "O5", q: "Mstari upi wa CV ni bora kwa mwajiri wa kiraia?", options: ["\"Did PMCS on MTVs\"", "\"Nilitunza malori 40 kwa ukaguzi wa kinga; nilipunguza kuharibika kwa 30%\"", "\"Nilikuwa kwenye motor pool\"", "\"Hooah\""], answer: 1, why: "Unatumia maneno ya kiraia, namba na matokeo." },
          { objective: "O5", q: "Rasimu ya AI inaongeza tuzo ambayo hukuipata. Unafanya nini?", options: ["Kuiacha, inasikika vizuri", "Kuifanya tuzo iwe kubwa zaidi", "Kuiondoa; kila dai lazima liwe kweli", "Kumuuliza rafiki kama ni sawa"], answer: 2, why: "Madai yaliyokuzwa yanaweza kukaguliwa na yanaweza kukugharimu kazi." },
          { objective: "O6", q: "Unakagua wapi mshahara na matarajio ya kazi ya kiraia?", options: ["Chapisho la mitandao ya kijamii", "Jibu la kwanza la AI", "Tangazo linalojitokeza ghafla (pop-up)", "Occupational Outlook Handbook ya Bureau of Labor Statistics"], answer: 3, why: "Occupational Outlook Handbook ndiyo chanzo rasmi cha mishahara na matarajio." },
          { objective: "O6", q: "Ni programu gani ya VA inayotoa ushauri wa bure wa kazi kwa maveterani wanaostahili?", options: ["Personalized Career Planning and Guidance", "Military Crosswalk", "Google Gemini", "Occupational Outlook Handbook"], answer: 0, why: "VA inaorodhesha Personalized Career Planning and Guidance kama ushauri wa bure wa kazi na elimu." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Utangulizi wa AI na Kazi za Baadaye",
    questions: [
      { objective: "O1", q: "AI inaelezwa vizuri zaidi kama:", options: ["Programu za kompyuta zinazofanya kazi ambazo kwa kawaida zinahitaji mtu", "Tawi jipya la jeshi", "Aina ya simu", "Ubao wa kazi wa serikali"], answer: 0, why: "Programu za AI zinaandika, kufupisha, kupanga na kugundua mifumo." },
      { objective: "O1", q: "Ni njia ipi AI inatumika katika usafirishaji na ugavi wa kiraia?", options: ["Kusaini mikataba kwa niaba ya kampuni", "Kutabiri mahitaji ya vifaa", "Kuajiri mameneja", "Kuendesha kila lori"], answer: 1, why: "AI inasaidia kutabiri vifaa vitakavyohitajika." },
      { objective: "O1", q: "AI inapotumika kazini, nani anawajibika kwa uamuzi?", options: ["AI", "Kampuni ya programu", "Mtu anayeitumia", "Hakuna mtu"], answer: 2, why: "AI ni zana; mtu bado ndiye anayefanya uamuzi." },
      { objective: "O2", q: "Anwani ipi ya wavuti inafungua msaidizi wa AI wa bure?", options: ["vetjobs.win", "freecash.gift", "army.xyz", "gemini.google.com"], answer: 3, why: "gemini.google.com ni anwani rasmi ya Google ya Gemini." },
      { objective: "O2", q: "Katika prompt ya \"amri iliyo wazi\", kiwango ni:", options: ["Jibu zuri linaonekanaje: urefu, muundo, mtindo", "Cheo chako", "Nywila yako", "Duka la apps"], answer: 0, why: "Kiwango kinamwambia msaidizi jibu linapaswa kuonekanaje." },
      { objective: "O2", q: "Prompt ipi italeta jibu lenye manufaa zaidi?", options: ["\"kazi\"", "\"Kazi: kazi za kiraia zinazotumia ujuzi wangu. Hali: miaka 6 kama fundi wa magari. Kiwango: majina 5, mstari mmoja kila moja.\"", "\"nisaidie\"", "\"mambo ya kijeshi\""], answer: 1, why: "Inatoa kazi, hali na kiwango." },
      { objective: "O3", q: "Ni kipi USICHOPASWA KAMWE kuandika kwa msaidizi wa AI wa umma?", options: ["\"Ifanye fupi zaidi\"", "\"Niliongoza timu ya watu 8\"", "Namba yako ya Social Security", "\"Msimamizi wa ghala\""], answer: 2, why: "Namba za Social Security ni binafsi na hazipaswi kamwe kuingia kwenye AI ya umma." },
      { objective: "O3", q: "OPSEC katika mazungumzo ya AI ya kiraia inamaanisha:", options: ["Kushiriki taarifa za operesheni ili kupata majibu bora", "Kuandika mahali kikosi chako kilipo", "Kutumia cheo chako kama nywila", "Kuzuia taarifa za siri, zilizodhibitiwa na za operesheni"], answer: 3, why: "Nidhamu ile ile inalinda taarifa nyeti nje ya jeshi." },
      { objective: "O3", q: "Kishika-nafasi kama \"[namba yangu]\" kinakuwezesha:", options: ["Kupata msaada bila kuandika namba halisi", "Kuificha AI kutoka kwa mwajiri wako", "Kulipwa haraka zaidi", "Kuruka hatua ya kukagua"], answer: 0, why: "Unajaza namba halisi wewe mwenyewe baadaye, nje ya mtandao." },
      { objective: "O4", q: "O*NET Military Crosswalk inaendeshwa na:", options: ["Mwajiri binafsi", "Wizara ya Kazi ya Marekani", "Kikosi chako cha zamani", "Kampuni ya AI"], answer: 1, why: "O*NET OnLine ni tovuti ya Wizara ya Kazi." },
      { objective: "O4", q: "Katika Military Crosswalk, veterani wa Navy angetafuta kwa:", options: ["Msimbo wa posta", "Namba ya Social Security", "Namba ya rating au jina la kazi", "Tarehe ya kuachishwa"], answer: 2, why: "Unachagua tawi na kuandika rating yako au jina la kazi." },
      { objective: "O4", q: "Zana nyingine inayofadhiliwa na Wizara ya Kazi inayolinganisha kazi za kijeshi na kazi za kiraia ni:", options: ["Tovuti ya bahati nasibu", "App ya kadi ya mkopo", "Mchezo wa video", "Veterans Job Matcher ya CareerOneStop"], answer: 3, why: "Veterans Job Matcher ya CareerOneStop inaunganisha kazi za kijeshi na kazi za kiraia." },
      { objective: "O5", q: "Mstari mzuri wa CV ya kiraia una:", options: ["Ulichofanya, ukubwa wake na matokeo", "Vifupisho vya kijeshi tu", "Jukumu la kikosi chako", "Anwani ya nyumbani kwako"], answer: 0, why: "Waajiri wa kiraia wanatafuta kitendo, ukubwa na matokeo." },
      { objective: "O5", q: "Swali lipi la kufuatilia linasaidia kugeuza rasimu kwa ajili ya raia?", options: ["\"Ongeza vifupisho zaidi.\"", "\"Ondoa lugha ya mtaani ya kijeshi.\"", "\"Ongeza namba yangu ya DD-214.\"", "\"Buni tuzo.\""], answer: 1, why: "Kuondoa lugha ya mtaani kunafanya uzoefu wako ueleweke kwa wasomaji wa kiraia." },
      { objective: "O5", q: "Rasimu ya kwanza ya AI ya mistari yako ni:", options: ["Ya mwisho na kamili", "Kitu cha kutuma bila kusoma", "Rasimu unayohariri na kukagua", "Si sahihi kila wakati"], answer: 2, why: "Wewe ndiye mhariri; jibu la kwanza ni rasimu." },
      { objective: "O6", q: "AI inapoandika kitu kinachosikika kuwa kweli lakini kimebuniwa, inaitwa:", options: ["Taarifa fupi (briefing)", "Crosswalk", "Kishika-nafasi", "Hallucination"], answer: 3, why: "Hilo ndilo jina la kawaida la majibu ya AI yaliyobuniwa." },
      { objective: "O6", q: "Unapaswa kukagua mshahara wa kazi wapi kabla ya kuamini namba ya AI?", options: ["Occupational Outlook Handbook ya Bureau of Labor Statistics", "Ujumbe kutoka kwa mgeni", "Jibu la pili la AI", "Picha ya utani mtandaoni (meme)"], answer: 0, why: "Occupational Outlook Handbook inatoa viwango rasmi vya mishahara na matarajio." },
      { objective: "O6", q: "Programu ya VA ya VET TEC 2.0 inawasaidia maveterani wanaostahili kwa:", options: ["Mikopo ya nyumba", "Mafunzo ya teknolojia ya juu yasiyo ya shahada", "Huduma za afya", "Kutengeneza magari"], answer: 1, why: "VET TEC 2.0 inalipia baadhi ya programu za mafunzo ya teknolojia ya juu zisizo za shahada." },
      { objective: "O6", q: "Ni programu gani ya Wizara ya Kazi inayowasaidia wanajeshi kuhamia kazi za kiraia?", options: ["O*NET Crosswalk peke yake", "Google Gemini", "Transition Assistance Program (TAP)", "Kambi binafsi ya mafunzo"], answer: 2, why: "TAP inawapa wanajeshi wanaojiandaa kuacha jeshi taarifa, zana na mafunzo." },
      { objective: "O6", q: "Kabla ya kuhifadhi mistari yako ya mwisho ya CV, unapaswa:", options: ["Kuongeza namba yako ya benki", "Kukuza namba zako", "Kuruka ukaguzi", "Kukagua majina ya kazi, kuhakikisha kila dai ni kweli na kuondoa taarifa binafsi"], answer: 3, why: "Huo ndio ukaguzi kamili: sahihi, kweli na salama." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [0, 2, 5, 6, 9, 12, 16, 19]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Prompt iliyo wazi", objective: "O2", notYet: "Prompt haiko wazi, kwa mfano \"rekebisha CV yangu\".", meets: "Prompt ina kazi, hali na kiwango.", exceeds: "Pia inataja jina la kazi ya kiraia, na jibu la kwanza linakaribia kuwa tayari." },
      { name: "Maneno ya kiraia", objective: "O5", notYet: "Mistari bado inatumia lugha ya mtaani ya kijeshi au haina matokeo.", meets: "Mistari mitatu kwa maneno rahisi ya kiraia, kila mmoja ukiwa na ulichofanya na ukubwa au matokeo.", exceeds: "Mwanafunzi aliomba boresho moja na anaweza kusema lilirekebisha nini." },
      { name: "Majina ya kazi yamekaguliwa", objective: "O4", notYet: "Majina ya kazi yalinakiliwa kutoka AI bila kukaguliwa.", meets: "Majina ya kazi yalikaguliwa kwenye O*NET Military Crosswalk.", exceeds: "Mwanafunzi pia alikagua mshahara au matarajio kwenye Occupational Outlook Handbook." },
      { name: "Taarifa binafsi na nyeti zimeondolewa", objective: "O3", notYet: "Prompt au mistari ina namba binafsi au taarifa ya operesheni.", meets: "Hakuna namba binafsi wala taarifa za siri, zilizodhibitiwa au za operesheni.", exceeds: "Alitumia vishika-nafasi na anaweza kueleza kwa nini kila taarifa iliyoondolewa ilibidi iondoke." },
      { name: "Kila dai ni kweli", objective: "O6", notYet: "Mstari una dai, namba au tuzo isiyo ya kweli.", meets: "Kila dai na kila namba katika mistari ni kweli.", exceeds: "Mwanafunzi alitaja ujuzi mmoja na programu moja kwa hatua inayofuata." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaoripoti kutumia mistari yao mipya katika maombi ya kazi ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi wanaopata usaili au ofa ya kazi ya kiraia ndani ya siku 90",
      "Wanafunzi wanaoanza kozi nyingine ya Koach Learn ya maveterani au programu ya mafunzo ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu janja au kompyuta yenye intaneti",
      "Msaidizi wa AI wa bure: ChatGPT, Microsoft Copilot au Google Gemini",
      "Tovuti za bure za O*NET Military Crosswalk na Occupational Outlook Handbook ya Bureau of Labor Statistics",
      "Karatasi na kalamu, au app ya kuandika maelezo, kwa kazi ya \"Jaribu sasa\"",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Katika darasa la mpito au kituo cha maveterani: fanyeni jaribio la awali pamoja, kisha fanyeni sura moja kwa kila kipindi, na kazi za \"Jaribu sasa\" zifanywe papo hapo.",
      "Wakumbushe wanafunzi kuhusu OPSEC kabla ya prompt ya kwanza: hakuna taarifa za siri, zilizodhibitiwa au za operesheni, na hakuna namba binafsi.",
      "Waweke pamoja wanafunzi kutoka matawi tofauti ili waelezane mistari yao kwa maneno rahisi ya kiraia.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati.",
      "Waelekeze wanafunzi kwa TAP na ushauri wa kazi wa VA kwa msaada wa mtu mmoja mmoja baada ya kozi."
    ]
  }
};
