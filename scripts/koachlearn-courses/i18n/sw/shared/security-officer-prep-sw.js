"use strict";

// Koach Learn course (Swahili translation of shared/security-officer-prep.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const BSIS_GUARD = { name: "California BSIS: Walinzi wa usalama (maombi, mtaala wa mafunzo, kitabu cha Power to Arrest)", url: "https://www.bsis.ca.gov/industries/guard.shtml" };
const BSIS_FACT = { name: "California BSIS: Karatasi ya taarifa ya usajili wa mlinzi wa usalama", url: "https://www.bsis.ca.gov/forms_pubs/guard_fact.pdf" };
const BSIS_TRAIN = { name: "California BSIS: Mtaala wa mafunzo ya mlinzi wa usalama (kozi na saa)", url: "https://www.bsis.ca.gov/industries/g_train.shtml" };
const BSIS_POA = { name: "California BSIS: Kitabu cha mafunzo ya Power to Arrest (mamlaka ya kukamata)", url: "https://www.bsis.ca.gov/forms_pubs/poa.pdf" };
const BSIS_VERIFY = { name: "California Department of Consumer Affairs: Hakiki leseni", url: "https://search.dca.ca.gov/" };
const NY_DOS = { name: "New York Department of State: Leseni za walinzi wa usalama", url: "https://dos.ny.gov/security-guard" };
const TX_DPS = { name: "Texas Department of Public Safety: Private Security Program (mpango wa usalama binafsi)", url: "https://www.dps.texas.gov/section/private-security" };
const FL_FDACS = { name: "Florida Department of Agriculture and Consumer Services: Division of Licensing (mlinzi wa Class D)", url: "https://www.fdacs.gov/Business-Services/Private-Investigative-Recovery-and-Security-Licensing" };
const BLS_GUARDS = { name: "U.S. Bureau of Labor Statistics: Walinzi wa usalama (jinsi ya kuwa mmoja)", url: "https://www.bls.gov/ooh/protective-service/security-guards.htm" };

module.exports = {
  id: "security-officer-prep-sw",
  lang: "sw",
  translationOf: "security-officer-prep",
  category: "Workforce Development",
  name: "Maandalizi ya Kazi ya Mlinzi wa Usalama (Guard Card)",
  skills: "Kupata kanuni za guard card za jimbo lako, Kufanya doria na kudhibiti mlango kwa maagizo ya kituo, Kutazama na kuripoti ndani ya mamlaka yako, Kutuliza ugomvi na kushughulikia dharura, Kuandika ripoti ya tukio iliyo wazi, Kupanga leseni yako na utafutaji wa kazi",
  outcome: "kupata masharti ya guard card ya jimbo lako na kuandika hatua za kuipata, kufuata maagizo ya kituo wakati wa doria na mlangoni, kuchagua hatua ya kutazama na kuripoti iliyo ndani ya mamlaka ya mlinzi, kuandika ripoti ya tukio iliyo wazi na ya ukweli, na kutengeneza mpango wenye tarehe wa kupata leseni na kuajiriwa.",
  about: [
    "Walinzi wa usalama hulinda watu na mali katika ofisi, maduka, hospitali, shule, maghala, matukio na majengo ya makazi. Kazi nyingi hazihitaji shahada ya chuo, na waajiri huajiri mwaka mzima. Kozi hii ni kwa wanaotafuta kazi, watu wanaorudi nyumbani kutoka gerezani, wanajeshi wastaafu (veterans) na vijana wanaotaka kuanza kazi hii.",
    "Utajifunza kile mlinzi wa usalama anachofanya na asichofanya, jinsi guard card ya jimbo inavyofanya kazi, jinsi ya kufanya doria na kudhibiti mlango kwa maagizo ya kituo, jinsi ya kubaki mtulivu na salama kunapokuwa na ugomvi au dharura, na jinsi ya kuandika ripoti ya tukio ambayo msimamizi, wakili au polisi anaweza kuiamini.",
    "Muhimu: kozi hii inakuandaa; haikupi leseni. Katika majimbo mengi ya Marekani (US), ofisi ya serikali ya jimbo ndiyo inatoa leseni kwa walinzi wa usalama, na lazima uwe na umri wa angalau miaka 18, upite ukaguzi wa historia ya uhalifu na umalize mafunzo yanayotakiwa na jimbo kwa shule au mwajiri aliyeidhinishwa. Kanuni zinatofautiana kwa kila jimbo, kwa hiyo utatafuta ukurasa rasmi wa jimbo lako. California ni mfano wetu kwa sababu tulikagua kanuni zake kwenye ukurasa rasmi.",
    "Kila somo linachukua kama dakika tano na linaisha na kazi ya \"Jaribu sasa\" kwenye karatasi au kwenye app ya bure ya kuandika. Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Tengeneza kifurushi chako cha utayari wa guard card: masharti ya jimbo lako yameandikwa kama hatua pamoja na ukurasa rasmi, orodha ya kukagua doria na mlango kwa kituo kimoja cha mazoezi, ripoti moja kamili ya tukio la mazoezi, kadi ndogo ya mfukoni yenye hatua zako za kutazama na kuripoti na za dharura, na mpango wenye tarehe wa kumaliza mafunzo, kuomba leseni na kuajiriwa, pamoja na mstari wa ukweli kwenye CV (wasifu wa kazi).",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima wa miaka 18 na zaidi wanaotafuta kazi ya mlinzi wa usalama asiye na silaha: wanaotafuta kazi, watu wanaorudi nyumbani kutoka gerezani, wanajeshi wastaafu na vijana. Baadhi wana uzoefu wa polisi wa kijeshi, magereza au kuzuia wizi madukani; wengi ni wapya katika kazi hii.",
    startingPoint: "Wanaweza kusoma fomu fupi, kufuata maelekezo na kutumia simu. Wachache wanajua jinsi leseni za walinzi zinavyofanya kazi katika jimbo lao, mipaka ya kisheria ya mlinzi ni ipi, au jinsi ya kuandika ripoti ya ukweli. Baadhi wanaiona kazi hii kama kazi ya polisi.",
    gap: "Usalama ni sekta kubwa inayoajiri na yenye njia ya haraka ya kuingia, lakini watu hupoteza kazi na huumia wanapovuka mamlaka yao, wanapotumia nguvu wasiyopaswa kutumia, au wanapoandika ripoti zisizo wazi. Wanafunzi wanahitaji picha ya kweli ya hatua za leseni katika jimbo lao, tabia za kutazama na kuripoti ambazo waajiri wanazitaka, na ujuzi wa kuandika ripoti iliyo wazi, ili wapate leseni, waajiriwe na wadumu kazini.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; kila neno maalum linaelezwa",
      "Leseni ni kwa kila jimbo: kozi inafundisha mtindo wa jumla na jinsi ya kupata ukurasa rasmi, na California kama mfano uliokaguliwa",
      "Kazi bila silaha tu: bunduki, virungu, gesi ya machozi na silaha nyingine zinahitaji vibali tofauti na mafunzo ya ana kwa ana",
      "Ujuzi wa vitendo kama huduma ya kwanza, CPR na mbinu za kujihami hujifunzwa ana kwa ana na mkufunzi aliyehitimu",
      "Ukaguzi wa historia ya uhalifu: wanafunzi wenye rekodi wanaambiwa wajibu kwa ukweli na wakague kanuni za jimbo lao au mpango wa msaada wa kisheria kwa wanaorudi katika jamii",
      "Vifaa: simu au kompyuta ya maktaba kwa kurasa za jimbo; karatasi kwa orodha za kukagua na ripoti"
    ],
    prerequisites: "Hakuna. Kozi \"Ubora katika Huduma kwa Wateja\" na \"CV, LinkedIn na Usaili wa Kazi\" ni wenzi wazuri wa kozi hii."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukitumia ukurasa rasmi wa leseni wa jimbo lako", action: "kuorodhesha hatua za kupata guard card katika jimbo lako", standard: "ukitaja ofisi inayotoa leseni, kanuni ya umri, ukaguzi wa historia na mafunzo yanayotakiwa kabla na baada ya kupata leseni" },
    { id: "O2", condition: "Ukipewa maagizo ya kituo", action: "kufanya doria na ukaguzi wa kudhibiti mlango", standard: "ukishughulikia kila kipengele cha maagizo ya kituo na kuandika ulichoona na ulichofanya pamoja na saa" },
    { id: "O3", condition: "Ukipewa hali ya ugomvi, wizi au dharura", action: "kuchagua hatua ya kutazama na kuripoti iliyo ndani ya mamlaka ya mlinzi", standard: "ukipata angalau hali 4 kati ya 5 sahihi, na simu za dharura zikipigwa kwanza" },
    { id: "O4", condition: "Baada ya kutazama au kusoma kuhusu tukio", action: "kuandika ripoti ya tukio ya ukweli", standard: "ikijibu nani, nini, lini, wapi na vipi, kwa ukweli na si maoni, kwa mpangilio wa wakati" },
    { id: "O5", condition: "Ukitumia kanuni za jimbo lako na matangazo ya kazi ya eneo lako", action: "kuandika mpango wenye tarehe wa kupata leseni na kuajiriwa", standard: "wenye tarehe za mafunzo, alama za vidole, maombi ya leseni na maombi ya kazi, na mstari wa ukweli kwenye CV" }
  ],
  chapters: [
    {
      name: "Sura 1: Kazi, guard card na kituo",
      lessons: [
        {
          title: "Mlinzi wa usalama anafanya nini, na hafanyi nini",
          objectives: ["O3"],
          minutes: 5,
          goal: "Eleza kazi kuu za mlinzi wa usalama na mipaka ya mamlaka ya mlinzi.",
          text: [
            "Mlinzi wa usalama hulinda watu na mali. Kazi ya kila siku ni kuonekana, kutazama, kudhibiti nani anaingia, kufanya doria, kusaidia watu, kujibu kengele za tahadhari na kuandika kinachotokea. Kuonekana na kuwa macho kunazuia matatizo mengi kabla hayajaanza.",
            "Mlinzi wa usalama si polisi. Katika majimbo mengi mlinzi ana mamlaka ya kukamata sawa na mtu yeyote binafsi, na si zaidi. Waajiri wengi huwaambia walinzi \"tazama na uripoti\" (observe and report): tazama kwa makini, mpigie polisi au msimamizi simu, na uandike, badala ya kuwakimbiza au kuwakamata watu kwa mikono.",
            "Kanuni za mwajiri wako (maagizo ya kituo, post orders) zinaweza kuwa kali kuliko sheria. Maagizo ya kituo yakisema \"usimzuie mtu\", humzuii, hata kama sheria ingeruhusu. Kuvuka maagizo yako kunaweza kukufanya ufukuzwe kazi, ushtakiwe mahakamani au uumie.",
            "Huduma kwa wateja ni nusu ya kazi. Unaelekeza njia, unasaidia wageni waliopotea na unabaki na adabu kwa watu waliokasirika. Walinzi walio watulivu, wanaofika kwa wakati na wanaoandika ripoti vizuri ndio wanaopandishwa cheo."
          ],
          words: [["Mlinzi wa usalama (security officer)", "mtu anayelipwa kulinda watu na mali; pia huitwa security guard."], ["Tazama na uripoti (observe and report)", "tazama, omba msaada na uandike, bila kujihusisha kwa nguvu ya mwili."], ["Maagizo ya kituo (post orders)", "maelekezo yaliyoandikwa kwa eneo moja la kazi: nini cha kukagua, lini, na nini cha kufanya."], ["Kumzuia mtu (detain)", "kumzuia mtu asiondoke. Walinzi wafanye hivyo tu kama sheria na maagizo yao ya kituo yanaruhusu."], ["Kuzuia mapema (deter)", "kuzuia tatizo kabla halijaanza, kwa mfano kwa kuonekana."]],
          slides: [
            { title: "Kazi ya kila siku", bullets: ["Onekana na uwe macho", "Dhibiti nani anaingia na fanya doria", "Saidia watu na jibu kengele za tahadhari", "Andika kinachotokea"] },
            { title: "Si polisi", bullets: ["Kwa kawaida mamlaka ya kukamata sawa na mtu yeyote binafsi", "Waajiri wengi: tazama na uripoti", "Mpigie polisi simu; usikimbize wala usikamate kwa mikono"] },
            { title: "Maagizo ya kituo kwanza", bullets: ["Yanaweza kuwa makali kuliko sheria", "Yakisema usimzuie mtu, humzuii"] },
            { title: "Kinachokupandisha cheo", bullets: ["Huduma kwa wateja yenye utulivu na adabu", "Kufika kwa wakati, kila zamu", "Ripoti zilizo wazi na za ukweli"] }
          ],
          sources: [BLS_GUARDS, BSIS_POA],
          tryIt: "Chora safu mbili kwenye karatasi: \"Mlinzi anafanya\" na \"Mlinzi hafanyi\". Weka kila kimoja kati ya hivi kwenye safu yake: kufanya doria kwenye maegesho ya magari, kupekua begi la mtu kwa nguvu, kumwelekeza mgeni njia, kumkimbiza mwizi wa dukani hadi barabarani, kupiga 911 kwa sababu ya ugomvi, kuandika ripoti, kumfunga mtu pingu wakati maagizo ya kituo yanasema tazama na uripoti. Kisha andika sentensi moja kueleza kwa nini.",
          youCanNow: "kueleza mlinzi wa usalama anafanya nini na mipaka ya mamlaka ya mlinzi.",
          quickCheck: [
            { objective: "O3", q: "Waajiri wengi wanamaanisha nini wanaposema \"tazama na uripoti\"?", options: ["Mkimbize yeyote anayekimbia", "Tazama, omba msaada na uandike", "Pekua mabegi ya kila mtu", "Kamata watu kwa kuvunja kanuni yoyote"], answer: 1, why: "Tazama na uripoti maana yake unatazama, unampigia polisi au msimamizi, na unaandika, bila kujihusisha kwa nguvu ya mwili." },
            { objective: "O3", q: "Sheria inaweza kuruhusu mtu binafsi kukamata, lakini maagizo yako ya kituo yanasema \"usimzuie mtu\". Unafanya nini?", options: ["Unamzuia hata hivyo", "Unamuuliza mshukiwa anapendelea nini", "Unafuata maagizo ya kituo: tazama, piga simu na uripoti", "Unaacha kituo chako"], answer: 2, why: "Maagizo ya kituo yanaweza kuwa makali kuliko sheria, na lazima uyafuate." }
          ]
        },
        {
          title: "Kupata guard card yako: jinsi leseni za jimbo zinavyofanya kazi",
          objectives: ["O1"],
          minutes: 6,
          goal: "Pata ofisi ya leseni ya jimbo lako na uorodheshe hatua za kupata guard card.",
          text: [
            "Majimbo mengi hutoa leseni kwa walinzi wa usalama kupitia ofisi ya serikali ya jimbo. Mtindo wa kawaida: uwe na umri wa angalau miaka 18, upite ukaguzi wa historia ya uhalifu kwa alama za vidole, na umalize mafunzo kwa shule au mwajiri aliyeidhinishwa. Majimbo mengi pia yanataka mafunzo kila mwaka. Majina yanatofautiana: \"guard card\", \"registration\" (usajili) au \"Class D license\".",
            "California ni mfano wetu uliokaguliwa. Ofisi ni Bureau of Security and Investigative Services (BSIS). Lazima uwe na umri wa angalau miaka 18, upite ukaguzi wa historia wa Department of Justice na FBI kupitia alama za vidole za Live Scan, na umalize mafunzo ya Power to Arrest (mamlaka ya kukamata) kabla usajili haujatolewa. Kisha unamaliza saa 32 za mafunzo ya ujuzi wa mlinzi wa usalama ndani ya miezi 6 ya kwanza, na saa 8 za mafunzo endelevu kila mwaka. Unaomba mtandaoni kwenye BreEZe au kwa posta, na unabeba kadi yako ukiwa kazini.",
            "Majimbo mengine yana ofisi zao, kwa mfano New York Department of State, Private Security Program ya Texas Department of Public Safety, na Division of Licensing ya Florida Department of Agriculture and Consumer Services. Tafuta ukurasa rasmi wa jimbo lako kwa saa za mafunzo, ada na fomu za sasa. Usiamini tangazo la mafunzo kuhusu kanuni.",
            "Kama una rekodi ya uhalifu: kila jimbo linaamua rekodi zipi zina uzito. Jibu kila swali kwa ukweli, kwa sababu jibu la uongo lenyewe linaweza kusababisha ombi likataliwe. Mpango wa kusaidia wanaorudi katika jamii au ofisi ya msaada wa kisheria inaweza kukusaidia kusoma kanuni za jimbo lako."
          ],
          steps: ["Tafuta ofisi ya leseni ya walinzi wa usalama ya jimbo lako na ufungue ukurasa rasmi wa .gov.", "Andika: umri wa chini, hatua za ukaguzi wa historia na alama za vidole.", "Andika mafunzo yanayotakiwa kabla ya kupata leseni na baada yake (miezi ya kwanza, kila mwaka).", "Tafuta fomu ya maombi (mtandaoni au karatasi) na ukurasa wa ada; usikisie ada.", "Andika jinsi ya kuhuisha leseni na inadumu muda gani."],
          words: [["Guard card", "jina la kila siku la leseni au usajili wa mlinzi wa usalama wa jimbo."], ["BSIS", "Bureau of Security and Investigative Services ya California, inayosajili walinzi katika California."], ["Live Scan", "uchukuaji wa alama za vidole kwa njia ya kielektroniki unaotumika kwa ukaguzi wa historia katika California na majimbo mengine."], ["Ukaguzi wa historia (background check)", "utafutaji wa rekodi za uhalifu, mara nyingi na jimbo na FBI, kabla leseni haijatolewa."], ["Mafunzo endelevu (continuing training)", "mafunzo unayopaswa kuendelea kufanya baada ya kupata leseni, mara nyingi kila mwaka."]],
          slides: [
            { title: "Mtindo wa kawaida", bullets: ["Umri wa angalau miaka 18", "Ukaguzi wa historia kwa alama za vidole", "Mafunzo yaliyoidhinishwa; majimbo mengi pia kila mwaka"] },
            { title: "Mfano wa California (BSIS)", bullets: ["Mafunzo ya Power to Arrest kabla kadi haijatolewa", "Saa 32 za mafunzo ya ujuzi ndani ya miezi 6", "Saa 8 za mafunzo endelevu kila mwaka"] },
            { title: "Majimbo mengine", bullets: ["NY: Department of State", "TX: DPS Private Security Program", "FL: FDACS Division of Licensing (Class D)", "Kagua ukurasa rasmi, si tangazo"] },
            { title: "Kama una rekodi", bullets: ["Kila jimbo linaamua rekodi zipi zina uzito", "Jibu kila swali kwa ukweli", "Uliza mpango wa wanaorudi katika jamii au wa msaada wa kisheria"] }
          ],
          sources: [BSIS_FACT, BSIS_TRAIN, NY_DOS, TX_DPS, FL_FDACS, BLS_GUARDS],
          tryIt: "Fungua ukurasa rasmi wa leseni wa jimbo lako (au karatasi ya taarifa ya BSIS ya California kama unafanya mazoezi). Kwenye karatasi, andika hatua za guard card za jimbo lako kwa mpangilio: ofisi, umri, ukaguzi wa historia, mafunzo kabla ya kadi, mafunzo baada yake, jinsi ya kuomba, na anwani ya ukurasa.",
          youCanNow: "kupata ofisi ya leseni ya jimbo lako na kuorodhesha hatua za kupata guard card.",
          quickCheck: [
            { objective: "O1", q: "Katika California, ni mafunzo gani lazima yamalizwe kabla usajili wa mlinzi haujatolewa?", options: ["Mafunzo ya bunduki", "Mafunzo ya Power to Arrest", "Mafunzo ya kirungu", "Hakuna mafunzo kabisa"], answer: 1, why: "BSIS inasema mafunzo ya Power to Arrest lazima yamalizwe kabla usajili haujatolewa." },
            { objective: "O1", q: "Tangazo la mafunzo linasema jimbo lako linataka darasa la mtandaoni la saa 2 tu. Unafanya nini?", options: ["Unaamini tangazo", "Unamuuliza rafiki", "Unalipa na kutumaini", "Unakagua ukurasa rasmi wa ofisi ya jimbo"], answer: 3, why: "Kanuni hubadilika na zinatofautiana kwa kila jimbo; ukurasa rasmi wa ofisi ndio pekee wa kuaminika." }
          ]
        },
        {
          title: "Maagizo ya kituo, doria na udhibiti wa mlango",
          objectives: ["O2"],
          minutes: 5,
          goal: "Fanya doria na ukaguzi wa mlango kwa kufuata maagizo ya kituo yaliyoandikwa.",
          text: [
            "Kila eneo la kazi lina maagizo ya kituo. Yanakuambia saa zako za kazi, wapi pa kufanya doria na mara ngapi, milango ipi ya kukagua, nani anaruhusiwa kuingia, ufanye nini kengele ikilia, na umpigie nani simu. Yasome mwanzoni mwa kila zamu, na muulize msimamizi wako kuhusu chochote kisicho wazi.",
            "Wakati wa doria, badilisha nyakati zako ili mtu yeyote asiweze kutabiri utapita lini. Tumia hisia zako: tafuta milango iliyo wazi, kufuli zilizovunjika, maji yanayovuja, moshi, milango ya dharura ya moto iliyozibwa, taa zilizozimika na watu walio mahali wasipopaswa kuwa. Andika kila ukaguzi kwenye daftari la shughuli za kila siku pamoja na saa.",
            "Udhibiti wa mlango maana yake ni kwamba watu sahihi tu ndio wanaingia. Kagua beji au vitambulisho kama maagizo ya kituo yanavyosema, sajili wageni wanapoingia na wanapotoka, toa pasi za wageni, na usimruhusu mtu yeyote akufuate kupitia mlango uliofungwa (tailgating). Kuwa na adabu na msimamo: \"Samahani, nahitaji kuona beji yako.\"",
            "Tumia redio au simu yako kama eneo linavyoelekeza: ujumbe mfupi, wazi, pamoja na mahali ulipo. Zamu inapobadilika, mwambie mlinzi anayefuata kilicho wazi na umkabidhi daftari."
          ],
          steps: ["Soma maagizo ya kituo na daftari la zamu iliyopita.", "Kagua redio au simu yako na funguo.", "Fanya doria kwenye kila sehemu iliyo kwenye maagizo ya kituo, kwa nyakati zinazobadilika.", "Mlangoni: kagua kitambulisho au beji, sajili wageni, zuia tailgating.", "Andika kila ukaguzi na chochote kisicho cha kawaida pamoja na saa.", "Mpe taarifa mlinzi anayefuata zamu inapobadilika."],
          words: [["Doria (patrol)", "kutembea au kuendesha gari kuzunguka eneo kwa njia maalum ili kutafuta matatizo."], ["Udhibiti wa mlango (access control)", "kuhakikisha watu na magari yanayoruhusiwa tu ndiyo yanaingia."], ["Tailgating", "mtu kumfuata mtu anayeruhusiwa kupitia mlango uliofungwa bila kuonyesha kitambulisho."], ["Daftari la shughuli za kila siku (daily activity log)", "rekodi iliyoandikwa na mlinzi ya kila ukaguzi na tukio wakati wa zamu, pamoja na saa."]],
          slides: [
            { title: "Mwanzo wa zamu", bullets: ["Soma maagizo ya kituo na daftari la mwisho", "Kagua redio, simu na funguo", "Uliza kuhusu chochote kisicho wazi"] },
            { title: "Wakati wa doria", bullets: ["Badilisha nyakati zako", "Milango, kufuli, uvujaji, moshi, milango ya dharura, taa", "Andika kila ukaguzi pamoja na saa"] },
            { title: "Mlangoni", bullets: ["Kagua beji au vitambulisho kama maagizo yanavyosema", "Sajili wageni wanapoingia na wanapotoka", "Zuia tailgating: kwa adabu na msimamo"] },
            { title: "Mwisho wa zamu", bullets: ["Mpe taarifa mlinzi anayefuata", "Mkabidhi daftari"] }
          ],
          sources: [BSIS_TRAIN, BLS_GUARDS],
          tryIt: "Chagua kituo cha mazoezi: jengo lako la makazi, maktaba au duka unalolijua. Andika mistari mitano ya maagizo ya kituo kwa ajili yake (saa, sehemu za doria, kanuni ya mlangoni, nani wa kumpigia simu). Kisha andika daftari la shughuli la saa moja kwa kituo hicho lenye angalau maingizo manne yenye saa, pamoja na tatizo moja ulilokuta na ulichofanya.",
          youCanNow: "kufanya doria na ukaguzi wa mlango kwa maagizo ya kituo yaliyoandikwa na kuyaandika kwenye daftari.",
          quickCheck: [
            { objective: "O2", q: "Kwa nini ubadilishe nyakati za doria zako?", options: ["Ili mtu yeyote asiweze kutabiri utapita lini", "Ili umalize mapema", "Kwa sababu redio inasema hivyo", "Ili uruke baadhi ya ukaguzi"], answer: 0, why: "Doria zinazotabirika ni rahisi kwa mhalifu kuzikwepa; nyakati zinazobadilika huzuia matatizo." },
            { objective: "O2", q: "Mtu asiye na beji anaingia akimfuata mfanyakazi nyuma kabisa. Hii inaitwaje?", options: ["Doria", "Tailgating", "Kutazama", "Kuandika daftari"], answer: 1, why: "Tailgating ni kumfuata mtu kupitia mlango unaodhibitiwa bila kuonyesha kitambulisho." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kazi, guard card na kituo",
        questions: [
          { objective: "O3", q: "Katika majimbo mengi, mamlaka ya mlinzi wa usalama ya kukamata yanalinganaje na ya mtu binafsi?", options: ["Ni makubwa zaidi, kama ya polisi", "Hayapo kabisa katika hali zote", "Ni wikendi tu", "Ni karibu sawa na ya mtu yeyote binafsi"], answer: 3, why: "Katika majimbo mengi mlinzi ana mamlaka ya kukamata ya mtu binafsi, si zaidi." },
          { objective: "O1", q: "Kipi ni sehemu ya mtindo wa kawaida wa guard card katika majimbo mengi?", options: ["Shahada ya chuo", "Kumiliki gari", "Ukaguzi wa historia kwa alama za vidole", "Kibali cha bunduki"], answer: 2, why: "Majimbo mengi yanataka ukaguzi wa historia kwa alama za vidole, umri wa miaka 18 na mafunzo yaliyoidhinishwa." },
          { objective: "O1", q: "Katika California, mlinzi lazima amalize mafunzo endelevu ya saa ngapi kila mwaka?", options: ["Saa 8", "Hakuna mafunzo", "Saa 40", "Saa 1"], answer: 0, why: "BSIS inataka saa 8 za mafunzo endelevu kila mwaka." },
          { objective: "O2", q: "Unapata wapi milango ipi ya kukagua na nani wa kumpigia simu katika eneo lako la kazi?", options: ["Kwenye tangazo la mafunzo", "Kwenye maagizo ya kituo", "Kutoka kwa mgeni", "Kwenye mitandao ya kijamii"], answer: 1, why: "Maagizo ya kituo ni maelekezo yaliyoandikwa kwa eneo hilo." },
          { objective: "O2", q: "Wakati wa doria unakuta mlango wa dharura ya moto umezibwa na maboksi. Unafanya nini?", options: ["Unapuuza; si kazi yako", "Unaacha ujumbe juu ya maboksi", "Unasubiri zamu inayofuata", "Unaripoti na kuandika kwenye daftari pamoja na saa, kama maagizo ya kituo yanavyosema"], answer: 3, why: "Mlango wa dharura uliozibwa ni hatari ya usalama ya kuripoti na kuandika mara moja." }
        ]
      }
    },
    {
      name: "Sura 2: Ugomvi, dharura, ripoti na kuajiriwa",
      lessons: [
        {
          title: "Kutuliza ugomvi, matumizi ya nguvu na dharura",
          objectives: ["O3"],
          minutes: 6,
          goal: "Chagua jibu tulivu na salama kwa ugomvi, wizi au dharura.",
          text: [
            "Ugomvi mwingi unaweza kutulizwa kwa maneno. Kaa umbali salama, simama kwa pembe, weka mikono yako wazi na ionekane, na ongea polepole na kwa sauti ya chini. Sikiliza, tumia jina la mtu kama unalijua, na mpe chaguo: \"Unaweza kusubiri hapa au naweza kumpigia meneja wako simu.\" Usibishane, usimguse wala usimzibie njia.",
            "Matumizi ya nguvu ni sehemu nzito zaidi ya kazi. Majimbo huyafundisha katika mafunzo yao (California inataka kozi za Appropriate Use of Force na Power to Arrest). Kanuni ya kukumbuka: nguvu ile tu ambayo sheria na maagizo yako ya kituo yanaruhusu, wakati inapohitajika tu, na uache mara moja isipohitajika tena. Walinzi wengi wasio na silaha huambiwa warudi nyuma na wampigie polisi simu badala yake.",
            "Wizi: tazama, kumbuka maelezo ya mtu, mpigie polisi au msimamizi wako simu kama maagizo yako yanavyosema, na usimkimbize hadi barabarani au kwenye maegesho ya magari. Usalama wako na wa wengine ni muhimu kuliko bidhaa.",
            "Dharura: kwa moto, dharura za kiafya, mapigano au silaha, piga 911 (au namba ya dharura ya eneo lako) kwanza, kisha fuata mpango wa dharura wa eneo: waonye watu, waelekeze kwenye milango ya kutokea, wapokee waokoaji na uwaambie ulichoona. Huduma ya kwanza na CPR hujifunzwa na kuthibitishwa ana kwa ana na mkufunzi aliyehitimu, kwa mfano kutoka American Red Cross au American Heart Association."
          ],
          steps: ["Kagua: kuna mtu yeyote aliye hatarini? Kama ndiyo, piga 911 kwanza.", "Kaa umbali salama na uwe na njia ya kutoka.", "Ongea kwa utulivu; sikiliza; toa chaguo.", "Kama hali haitulii, rudi nyuma na mpigie polisi au msimamizi wako simu.", "Fuata mpango wa dharura wa eneo; waongoze watu nje; wapokee waokoaji.", "Andika kilichotokea mara tu itakapokuwa salama."],
          words: [["Kutuliza hali (de-escalation)", "kutumia maneno na lugha ya mwili ya utulivu kupunguza hasira ya mtu."], ["Matumizi ya nguvu (use of force)", "kitendo chochote cha mwili cha kumdhibiti mtu; walinzi wanaweza kutumia tu kile ambacho sheria na maagizo yao yanaruhusu."], ["Mpango wa dharura", "hatua zilizoandikwa za eneo kwa moto, matukio ya kiafya, silaha na kuwaondoa watu."], ["Kuwaondoa watu (evacuation)", "kuwatoa watu wote nje ya jengo kwa usalama."]],
          slides: [
            { title: "Tuliza kwa maneno", bullets: ["Umbali salama, mikono wazi, simama kwa pembe", "Ongea polepole; sikiliza; toa chaguo", "Usibishane, usiguse wala usimzibie mtu njia"] },
            { title: "Matumizi ya nguvu", bullets: ["Kile tu sheria na maagizo yako yanaruhusu", "Inapohitajika tu; acha isipohitajika", "Walinzi wengi wasio na silaha: rudi nyuma na piga simu"] },
            { title: "Wizi", bullets: ["Tazama na kumbuka maelezo ya mtu", "Mpigie polisi au msimamizi wako simu", "Usikimbize; watu ni muhimu kuliko bidhaa"] },
            { title: "Dharura", bullets: ["Piga 911 (au namba ya eneo lako) kwanza", "Fuata mpango wa dharura; waongoze watu nje", "Wapokee waokoaji na uwaambie ulichoona"] }
          ],
          sources: [BSIS_TRAIN, BSIS_POA],
          tryIt: "Fanya mazoezi na rafiki au mbele ya kioo. Hali: mgeni anapiga kelele kwenye meza ya mapokezi kwa sababu hawezi kupanda juu bila beji. Sema kwa sauti sentensi tatu za utulivu, pamoja na chaguo moja unalompa. Kisha andika wakati ambao ungerudi nyuma na kumpigia msimamizi wako au polisi simu.",
          youCanNow: "kuchagua jibu tulivu na salama kwa ugomvi, wizi au dharura, ukibaki ndani ya mamlaka yako.",
          quickCheck: [
            { objective: "O3", q: "Mtu anaanguka kwenye ukumbi wa mapokezi na hapumui kawaida. Unafanya nini kwanza?", options: ["Unaandika ripoti", "Unampigia msimamizi wako simu na kusubiri", "Unapiga 911, kisha unafuata mpango wa dharura", "Unatafuta kitambulisho chake"], answer: 2, why: "Katika dharura ya kiafya unapiga 911 (au namba ya eneo lako) kwanza." },
            { objective: "O3", q: "Mwizi wa dukani anakimbia hadi kwenye maegesho ya magari na bidhaa. Maagizo yako yanasema tazama na uripoti. Unafanya nini?", options: ["Unaandika maelezo yake na upande alioelekea na kupiga simu kama maagizo yako yanavyosema", "Unamkimbiza katikati ya magari", "Unanyakua begi lake", "Unazuia gari lake kwa gari lako"], answer: 0, why: "Unabaki salama, unakusanya ukweli na kupiga simu; bidhaa hazina thamani kuliko maisha." }
          ]
        },
        {
          title: "Tazama, eleza na uandike ripoti ya tukio",
          objectives: ["O4"],
          minutes: 6,
          goal: "Andika ripoti ya tukio ya ukweli inayojibu nani, nini, lini, wapi na vipi.",
          text: [
            "Ripoti yako inaweza kusomwa na msimamizi wako, mteja wa kampuni, kampuni ya bima, polisi au mahakama, wakati mwingine miezi kadhaa baadaye. Ripoti nzuri inamwezesha mtu asiyekujua kuona hasa kilichotokea. Walinzi wengi hupoteza kuaminika kwa sababu ripoti zao si wazi.",
            "Andika ukweli, si maoni. Si \"alikuwa amelewa\" bali \"alinukia pombe, alikuwa akiyumba na maneno yake hayakuwa wazi\". Si \"jamaa wa kushukiwa\" bali \"mwanamume wa takriban miaka 30, urefu wa kama futi 6, koti jekundu lenye kofia, begi jeusi la mgongoni, alizunguka magari yaliyoegeshwa na akajaribu vishikio vya milango miwili\".",
            "Jibu nani, nini, lini, wapi na vipi, kwa mpangilio wa wakati. Andika tarehe na saa kamili, mahali hasa, watu waliohusika na mashahidi, ulichoona na kusikia wewe mwenyewe, ulichofanya, na nani ulimpigia simu na lini. Andika maneno halisi ambayo watu walisema ndani ya alama za kunukuu.",
            "Iandike mara tu itakapokuwa salama, wakati bado unakumbuka. Tumia nafsi ya kwanza (\"Niliona\"), sentensi fupi na majina sahihi. Usikisie, usiongeze wala usiache kitu. Ukikosea, sahihisha kwa njia anayoelekeza mwajiri wako; kamwe usibadilishe ripoti baadaye ili ionekane bora."
          ],
          steps: ["Tarehe, saa na mahali hasa.", "Nani: wewe, watu waliohusika, mashahidi (majina na maelezo yao).", "Kilichotokea, kwa mpangilio wa wakati, pamoja na ulichoona na kusikia wewe mwenyewe.", "Ulichofanya na nani ulimpigia simu, pamoja na saa.", "Maneno halisi ndani ya alama za kunukuu; ukweli, si maoni.", "Isome tena; isaini kama mwajiri wako anavyotaka."],
          words: [["Ripoti ya tukio (incident report)", "rekodi iliyoandikwa ya ukweli kuhusu tukio kama wizi, kuumia, mapigano au kengele ya tahadhari."], ["Shahidi", "mtu aliyeona au kusikia kilichotokea."], ["Ukweli (fact)", "kitu ulichoona, kusikia au kupima wewe mwenyewe."], ["Maoni (opinion)", "unachofikiri au kukisia, kama \"alionekana mwenye hatia\"."]],
          slides: [
            { title: "Nani anasoma ripoti yako?", bullets: ["Msimamizi, mteja, kampuni ya bima, polisi, mahakama", "Lazima ieleweke kwa mtu asiyekujua, miezi baadaye"] },
            { title: "Ukweli, si maoni", bullets: ["Si \"amelewa\": alinukia pombe, aliyumba, maneno hayakuwa wazi", "Eleza watu: umri, urefu, nguo, begi"] },
            { title: "Nani, nini, lini, wapi, vipi", bullets: ["Tarehe, saa kamili, mahali hasa", "Watu na mashahidi", "Ulichoona, ulichofanya na nani ulimpigia simu"] },
            { title: "Iandike vizuri", bullets: ["Mara tu itakapokuwa salama", "Nafsi ya kwanza, sentensi fupi, maneno halisi", "Kamwe usiibadilishe baadaye ili ionekane bora"] }
          ],
          sources: [BSIS_TRAIN],
          tryIt: "Tazama tukio lolote la hadharani la dakika 2 (barabara yenye watu wengi, mlango wa duka au video fupi bila sauti). Kisha andika ripoti ya tukio ya mazoezi: tarehe, saa, mahali, watu walioelezwa kwa ukweli, kilichotokea kwa mpangilio wa wakati, na ungefanya nini na ungempigia nani simu. Pigia mstari maneno yoyote ya maoni na uyaandike upya kama ukweli.",
          youCanNow: "kuandika ripoti ya tukio ya ukweli inayojibu nani, nini, lini, wapi na vipi.",
          quickCheck: [
            { objective: "O4", q: "Sentensi ipi inafaa katika ripoti ya tukio?", options: ["Mwanamume huyo alionekana kama mwizi.", "Ni wazi alikuwa amelewa.", "Saa 3:42 usiku (9:42 p.m.) mwanamume mwenye koti jekundu alijaribu vishikio vya milango ya magari mawili katika Safu C.", "Kitu kibaya kilikuwa kinaendelea."], answer: 2, why: "Inatoa saa, mahali, maelezo ya mtu na kitendo kama ukweli, si maoni." },
            { objective: "O4", q: "Unapaswa kuandika ripoti lini?", options: ["Wiki ijayo", "Mara tu itakapokuwa salama, wakati bado unakumbuka", "Ikiwa polisi wataomba tu", "Baada ya kuongea na kila mtu ili mkubaliane hadithi moja"], answer: 1, why: "Kuandika mapema kunafanya maelezo yabaki sahihi." }
          ]
        },
        {
          title: "Mpango wako wa guard card na kuajiriwa",
          objectives: ["O5", "O1"],
          minutes: 5,
          goal: "Andika mpango wenye tarehe wa kumaliza mafunzo, kuomba guard card na kuajiriwa.",
          text: [
            "Geuza hatua za jimbo lako kuwa tarehe. Kwa mfano: wiki ya 1, tafuta shule ya mafunzo iliyoidhinishwa au mwajiri anayefundisha walinzi wapya; wiki ya 2, maliza mafunzo yanayotakiwa kabla ya kadi; wiki ya 3, chukua alama za vidole na uombe; kisha omba kazi wakati ofisi inashughulikia ombi lako. Katika California, BSIS inasema utarajie kama wiki 4 hadi 6 za kushughulikia ombi, na inaweza kuchukua muda zaidi.",
            "Kampuni nyingi za usalama huajiri watu na kuwasaidia kupitia mafunzo. Tafuta kwenye tovuti za matangazo ya kazi, kwenye American Job Center au kituo cha ajira cha eneo lako, na kwenye tovuti za kampuni. Hakikisha shule ya mafunzo imeidhinishwa na jimbo lako (California inakuruhusu kuhakiki leseni mtandaoni). Jihadhari na yeyote anayeahidi leseni \"iliyohakikishwa\".",
            "CV yako: kuwa mkweli. Kabla hujapata leseni, andika \"Nimemaliza kozi ya maandalizi ya mlinzi wa usalama; ombi la guard card linashughulikiwa\". Taja ujuzi: kuandika ripoti, huduma kwa wateja, doria, kubaki mtulivu chini ya shinikizo. Wanajeshi wastaafu: elezeni kazi ya polisi wa kijeshi, ulinzi au zamu za ulinzi kwa maneno ya kila siku.",
            "Fanya mazoezi ya majibu ya usaili: \"Ungemshughulikiaje mgeni aliyekasirika?\" na \"Ungefanya nini ukiona wizi?\" Tumia ulichojifunza: baki mtulivu, tazama na uripoti, omba msaada, andika kilichotokea."
          ],
          steps: ["Nakili hatua za guard card za jimbo lako kutoka Somo la 2.", "Weka tarehe karibu na kila hatua.", "Orodhesha waajiri watatu au shule zilizoidhinishwa karibu nawe.", "Andika mstari wa ukweli wa CV na ujuzi mitatu.", "Fanya mazoezi ya majibu mawili ya usaili kwa sauti."],
          words: [["Shule iliyoidhinishwa (approved school)", "mtoa mafunzo ambaye jimbo lako linamruhusu kutoa mafunzo yanayotakiwa kwa walinzi."], ["American Job Center", "ofisi ya umma ya bure nchini Marekani inayosaidia kutafuta kazi na mafunzo."], ["Muda wa kushughulikia ombi (processing time)", "muda ambao ofisi inachukua kukagua ombi lako na ukaguzi wa historia."]],
          slides: [
            { title: "Hatua ziwe tarehe", bullets: ["Tafuta mafunzo; maliza yanayotakiwa kabla ya kadi", "Alama za vidole na ombi", "Omba kazi wakati unasubiri"] },
            { title: "Wapi pa kutafuta", bullets: ["Kampuni za usalama zinazofundisha walinzi wapya", "American Job Centers na vituo vya ajira", "Hakikisha shule imeidhinishwa na jimbo"] },
            { title: "CV ya ukweli", bullets: ["\"Ombi la guard card linashughulikiwa\" hadi itakapotolewa", "Kuandika ripoti, huduma kwa wateja, doria, utulivu"] },
            { title: "Mazoezi ya usaili", bullets: ["Mgeni aliyekasirika: maneno ya utulivu, toa chaguo", "Wizi: tazama, piga simu, andika kilichotokea"] }
          ],
          sources: [BSIS_FACT, BSIS_VERIFY, BLS_GUARDS],
          tryIt: "Tengeneza mpango wako wa guard card kwenye ukurasa mmoja: kila hatua kutoka ukurasa wa jimbo lako pamoja na tarehe, waajiri watatu au shule zilizoidhinishwa za eneo lako, mstari wa ukweli wa CV, na majibu yako kwa maswali mawili ya usaili. Uweke pamoja na orodha yako ya kukagua na ripoti ya mazoezi: hicho ndicho kifurushi chako cha utayari.",
          youCanNow: "kuandika mpango wenye tarehe wa kupata guard card yako na kazi, pamoja na mstari wa ukweli wa CV.",
          quickCheck: [
            { objective: "O5", q: "Umemaliza kozi hii lakini guard card yako bado haijatolewa. Mstari upi wa CV ni wa ukweli?", options: ["\"Mlinzi wa usalama mwenye leseni\"", "\"Nimemaliza kozi ya maandalizi ya mlinzi wa usalama; ombi la guard card linashughulikiwa\"", "\"Mlinzi mwenye silaha\"", "\"Mkufunzi aliyethibitishwa na jimbo\""], answer: 1, why: "Unasema hasa ulichofanya bila kudai leseni usiyokuwa nayo." },
            { objective: "O1", q: "Unawezaje kuhakiki kwamba shule ya mafunzo au leseni ni halali katika California?", options: ["Kuamini tangazo la shule", "Kuuliza kwenye mitandao ya kijamii", "Kutumia huduma ya jimbo ya kuhakiki leseni mtandaoni", "Kuangalia nembo yao"], answer: 2, why: "Department of Consumer Affairs ya California inakuruhusu kuhakiki leseni mtandaoni." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Ugomvi, dharura, ripoti na kuajiriwa",
        questions: [
          { objective: "O3", q: "Mgeni aliyekasirika anapiga kelele. Hatua ipi ni bora ya kwanza?", options: ["Kupiga kelele pia ili asikilize", "Kusimama karibu sana naye", "Kumshika mkono", "Kukaa umbali salama na kuongea polepole kwa utulivu"], answer: 3, why: "Umbali na maneno ya utulivu hupunguza hasira na kukuweka salama." },
          { objective: "O3", q: "Unanusa moshi na kuona moto katika chumba cha kuhifadhia vitu. Nini kinakuja kwanza?", options: ["Kupiga 911 (au namba ya eneo lako) na kuanza mpango wa dharura wa eneo", "Kuandika ripoti", "Kumaliza doria yako", "Kupiga picha kwa ajili ya mitandao ya kijamii"], answer: 0, why: "Katika dharura unapiga 911 kwanza, kisha unafuata mpango wa dharura." },
          { objective: "O4", q: "Kipi ni ukweli, si maoni?", options: ["Alionekana mwenye hatia", "Alikuwa mwendawazimu", "Alisema, \"Nipishe njia\"", "Walikuwa na nia mbaya"], answer: 2, why: "Maneno halisi uliyosikia ni ukweli; mengine ni maoni." },
          { objective: "O4", q: "Unagundua kosa katika ripoti ya jana baada ya msimamizi wako kuisoma. Unafanya nini?", options: ["Kuiandika upya kimyakimya ili ionekane bora", "Kuisahihisha wazi kwa njia anayoelekeza mwajiri wako", "Kuitupa", "Kumwomba mfanyakazi mwenzako aisaini"], answer: 1, why: "Masahihisho hufanywa wazi kwa njia ya mwajiri; kubadilisha ripoti kwa siri kunaharibu imani." },
          { objective: "O5", q: "Mpango wa guard card unapaswa kuwa na nini?", options: ["Tarehe za mafunzo, alama za vidole, ombi la leseni na maombi ya kazi", "Kazi unayotaka tu", "Ahadi ya leseni iliyohakikishwa", "Hakuna kitu hadi uajiriwe"], answer: 0, why: "Mpango wenye tarehe unageuza hatua za jimbo lako kuwa vitendo unavyoweza kumaliza." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Maandalizi ya Kazi ya Mlinzi wa Usalama (Guard Card)",
    questions: [
      { objective: "O3", q: "Mlinzi wa usalama hasa anafanya nini?", options: ["Kukamata watu kwa kuvunja kanuni yoyote", "Kulinda watu na mali kwa kuonekana, kutazama na kuripoti", "Kuchunguza uhalifu mahakamani", "Kuandika faini za barabarani"], answer: 1, why: "Kiini cha kazi ni ulinzi unaoonekana, kutazama na kuripoti." },
      { objective: "O3", q: "Maagizo yako ya kituo ni makali kuliko sheria. Unafuata yapi?", options: ["Sheria tu", "Chochote unachohisi ni sahihi", "Ombi la mgeni", "Maagizo ya kituo"], answer: 3, why: "Waajiri wanaweza kuweka kanuni kali zaidi, na lazima ufuate maagizo yako ya kituo." },
      { objective: "O1", q: "Nani anatoa guard card katika majimbo mengi?", options: ["Ofisi ya serikali ya jimbo", "Shule yoyote ya mafunzo", "Duka kubwa la eneo lako", "FBI"], answer: 0, why: "Ofisi ya jimbo inatoa leseni kwa walinzi; shule zinatoa mafunzo tu." },
      { objective: "O1", q: "Katika California, saa ngapi za mafunzo ya ujuzi wa mlinzi wa usalama lazima zimalizwe ndani ya miezi 6 ya kwanza?", options: ["Saa 8", "Saa 4", "Saa 32", "Saa 100"], answer: 2, why: "BSIS inataka saa 32 za mafunzo ya ujuzi ndani ya miezi 6 ya kwanza." },
      { objective: "O1", q: "Umri wa chini kwa usajili wa mlinzi katika California ni upi?", options: ["16", "21", "25", "18"], answer: 3, why: "BSIS inasema waombaji lazima wawe na umri wa angalau miaka 18." },
      { objective: "O1", q: "Una rekodi ya uhalifu na unajaza fomu ya ombi la guard card. Unapaswa kufanya nini?", options: ["Kujibu kila swali kwa ukweli na kukagua kanuni za jimbo lako", "Kuacha rekodi nje", "Kutumia jina la rafiki", "Kukata tamaa bila kukagua"], answer: 0, why: "Majibu ya uongo yanaweza kusababisha ombi likataliwe; kila jimbo linaamua rekodi zipi zina uzito." },
      { objective: "O2", q: "Maagizo ya kituo yana nini?", options: ["Faida za kampuni", "Maelekezo ya eneo: saa, sehemu za doria, kanuni za kuingia, nani wa kumpigia simu", "Ratiba yako binafsi ya wiki", "Orodha ya washukiwa"], answer: 1, why: "Maagizo ya kituo ni maelekezo yaliyoandikwa kwa eneo maalum." },
      { objective: "O2", q: "Kila ingizo la daftari la shughuli za kila siku linapaswa kuwa na nini?", options: ["Maoni yako kuhusu wafanyakazi wenzako", "Matatizo tu, bila saa", "Saa na ulichokagua au kuona", "Hakuna kitu hadi mwisho wa zamu"], answer: 2, why: "Daftari linarekodi kila ukaguzi na tukio pamoja na saa." },
      { objective: "O2", q: "Mgeni asiye na beji anasema, \"Niko pamoja naye,\" na anaingia nyuma ya mfanyakazi. Unafanya nini?", options: ["Unamruhusu; anaonekana mwema", "Unampigia kelele", "Unaacha kituo chako ili umfuate", "Unamzuia kwa adabu na kukagua kitambulisho kama maagizo ya kituo yanavyosema"], answer: 3, why: "Kuzuia tailgating kwa adabu na msimamo ndicho kiini cha udhibiti wa mlango." },
      { objective: "O2", q: "Kwa nini umwambie mlinzi anayefuata kilichotokea zamu inapobadilika?", options: ["Ili ajue kilicho wazi na nini cha kuangalia", "Ili umalize zamu yako mapema", "Haihitajiki", "Ili mpeane umbea"], answer: 0, why: "Makabidhiano mazuri yanaweka eneo likilindwa bila mapengo." },
      { objective: "O3", q: "Kipi kinasaidia kumtuliza mtu aliyekasirika?", options: ["Kusimama uso kwa uso naye kwa karibu", "Kuongea polepole na kumpa chaguo", "Kumnyooshea kidole", "Kuziba mlango wa kutokea"], answer: 1, why: "Maneno ya utulivu na chaguo hupunguza mvutano; kuziba njia na kunyooshea kidole huuongeza." },
      { objective: "O3", q: "Mlinzi anaweza kutumia nguvu lini?", options: ["Kila mtu anapokosa adabu", "Ili kurudisha kitu chochote", "Tu kama sheria na maagizo ya kituo yanavyoruhusu, na inapohitajika tu", "Kila msimamizi asipoangalia"], answer: 2, why: "Nguvu inawekewa mipaka na sheria na maagizo ya kituo, na inaacha isipohitajika tena." },
      { objective: "O3", q: "Unaona mapigano yenye silaha kwenye maegesho ya magari. Unafanya nini kwanza?", options: ["Kuingilia kati na kuwatenganisha", "Kupiga 911 kutoka mahali salama", "Kuandika ripoti kwanza", "Kurekodi video kwa ajili ya mitandao ya kijamii"], answer: 1, why: "Silaha maana yake ni kupiga 911 kwanza, kutoka mahali salama." },
      { objective: "O4", q: "Nani anaweza kusoma ripoti yako ya tukio?", options: ["Wewe tu", "Hakuna mtu", "Familia yako tu", "Msimamizi, mteja, kampuni ya bima, polisi au mahakama"], answer: 3, why: "Ripoti zinaweza kutumiwa na watu wengi, wakati mwingine miezi baadaye." },
      { objective: "O4", q: "Maelezo yapi ni bora kwa mtu katika ripoti?", options: ["Mwanamke, takriban miaka 40, urefu wa kama futi 5 na inchi 5, koti la bluu, begi la kijivu la mgongoni", "Mtu wa kutiliwa shaka", "Mtu wa ajabu", "Mkorofi"], answer: 0, why: "Umri, urefu na nguo ni ukweli unaowasaidia wengine kumtambua mtu." },
      { objective: "O4", q: "Ripoti lazima ijibu maswali gani?", options: ["Kwa nini mtu huyo ni mbaya", "Maoni yako kuhusu mteja", "Nani, nini, lini, wapi na vipi", "Kile polisi walichosema tu"], answer: 2, why: "Nani, nini, lini, wapi na vipi hufanya ripoti kamili ya ukweli." },
      { objective: "O4", q: "Unaandikaje kile mtu alichosema?", options: ["Kukifupisha kwa maoni yako", "Kukiacha nje", "Kukifanya kisikike kizito zaidi", "Kuandika maneno yake halisi ndani ya alama za kunukuu"], answer: 3, why: "Manukuu halisi ni ukweli ambao wengine wanaweza kuutegemea." },
      { objective: "O5", q: "Mstari upi wa CV ni wa ukweli kabla leseni yako haijatolewa?", options: ["\"Ombi la guard card linashughulikiwa\"", "\"Mtaalamu wa usalama mwenye leseni\"", "\"Mlinzi mwenye silaha\"", "\"Afisa wa polisi\""], answer: 0, why: "Unaeleza hali yako halisi bila kudai leseni." },
      { objective: "O5", q: "Shule inaahidi leseni ya mlinzi \"iliyohakikishwa\" kwa siku moja. Unapaswa kufanya nini?", options: ["Kulipa mara moja", "Kukagua ukurasa wa ofisi ya jimbo na kama shule imeidhinishwa", "Kuwatumia namba yako ya Social Security kwa ujumbe mfupi", "Kuwaambia marafiki zako wajiandikishe"], answer: 1, why: "Jimbo pekee ndilo linatoa leseni; kagua ukurasa rasmi na uidhinishaji wa shule." },
      { objective: "O5", q: "Wakati ofisi inashughulikia ombi lako, hatua ipi ya busara iko katika mpango wako?", options: ["Kutofanya chochote", "Kuacha kusoma", "Kuomba kazi na kufanya mazoezi ya majibu ya usaili", "Kuanza kufanya kazi bila leseni"], answer: 2, why: "Kutumia muda wa kusubiri kuomba kazi na kufanya mazoezi kunakufanya uajiriwe haraka zaidi." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 3, 5, 6, 8, 11, 12, 15, 17, 18] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ukague tena.",
    criteria: [
      { name: "Hatua za guard card za jimbo", objective: "O1", notYet: "Ofisi, ukaguzi wa historia au mafunzo yanakosekana, au anatumia tangazo la mafunzo badala ya ukurasa rasmi.", meets: "Anaorodhesha ofisi, umri, ukaguzi wa historia, mafunzo kabla na baada ya leseni, jinsi ya kuomba, na anwani ya ukurasa rasmi.", exceeds: "Anaongeza kanuni za kuhuisha leseni na jinsi ya kuhakiki shule au leseni." },
      { name: "Orodha ya kukagua doria na mlango", objective: "O2", notYet: "Sehemu za doria, kanuni ya mlangoni au daftari vinakosekana.", meets: "Inashughulikia kila kipengele cha maagizo ya kituo cha mazoezi na ina daftari lenye saa na angalau maingizo manne.", exceeds: "Anaongeza makabidhiano ya zamu na mpango wa kushughulikia tailgating." },
      { name: "Kadi ya mfukoni ya kutazama na kuripoti", objective: "O3", notYet: "Ina kukimbiza, nguvu kupita maagizo, au haina hatua ya kupiga 911 kwanza.", meets: "Inaonyesha maneno ya utulivu, wakati wa kurudi nyuma na kupiga simu, kutokimbiza, na 911 kwanza katika dharura.", exceeds: "Inaongeza hatua za mpango wa dharura wa eneo na cha kuwaambia waokoaji." },
      { name: "Ripoti ya tukio ya mazoezi", objective: "O4", notYet: "Si wazi, ina maoni, au inakosa saa au mahali.", meets: "Inajibu nani, nini, lini, wapi na vipi kwa mpangilio wa wakati, kwa ukweli na manukuu halisi.", exceeds: "Maelezo yana undani wa kutosha kwa mtu asiyejua kuwatambua watu na mahali." },
      { name: "Mpango wenye tarehe na mstari wa CV", objective: "O5", notYet: "Hakuna tarehe, au anadai leseni ambayo bado hana.", meets: "Tarehe kwa kila hatua, waajiri watatu au shule zilizoidhinishwa za eneo lake, mstari wa ukweli wa CV.", exceeds: "Ina majibu yaliyofanyiwa mazoezi kwa maswali mawili ya usaili." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kifurushi cha utayari kinachofikia rubriki",
      "Wanafunzi wanaoomba guard card ya jimbo ndani ya siku 60 (utafiti wa kufuatilia)",
      "Wanafunzi wanaopata guard card na kuajiriwa kama walinzi wa usalama (ufuatiliaji na ripoti za washirika)",
      "Waajiri washirika wanaripoti walinzi wapya ambao ripoti zao za tukio hazihitaji kuandikwa upya katika siku 90 za kwanza"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye intaneti kwa ukurasa wa leseni wa jimbo",
      "Karatasi na kalamu, au app ya bure ya kuandika, kwa orodha ya kukagua, daftari, ripoti na mpango",
      "Si lazima: nakala iliyochapishwa ya karatasi ya taarifa ya jimbo lako na mfano wa maagizo ya kituo",
      "Kama dakika 60 kwa jumla"
    ],
    facilitatorNotes: [
      "Sema mapema na mara kwa mara: kozi hii inawaandaa wanafunzi; ofisi ya jimbo ndiyo inatoa leseni, baada ya mafunzo yaliyoidhinishwa.",
      "Kabla ya darasa, fungua ukurasa rasmi wa jimbo lako na ulete saa za mafunzo, ada na fomu za sasa; kanuni hubadilika.",
      "Usifundishe kumzuia mtu kwa nguvu ya mwili, kufunga pingu au silaha katika kozi hii; hayo yanahitaji mafunzo yaliyoidhinishwa ya ana kwa ana.",
      "Kwa wanafunzi wenye rekodi, iweke siri na uwaelekeze kwenye kanuni za jimbo na mpango wa msaada wa kisheria kwa wanaorudi katika jamii; kamwe usiahidi kwamba ombi litakubaliwa.",
      "Tumia michezo ya kuigiza kwa kutuliza hali pamoja na neno la kusimamisha lililo wazi, na upime kifurushi cha utayari kwa rubriki mstari mmoja baada ya mwingine."
    ]
  }
};
