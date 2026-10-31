"use strict";

// Koach Learn course (Swahili translation of shared/cdl-prep.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.
// Course stays about the US: CDL class and endorsement letters, 49 CFR rule numbers and FMCSA names are kept as written.

const CFR_CLASSES = { name: "49 CFR 383.91: Makundi ya magari ya kibiashara (nakala ya sheria ya shirikisho kwenye Cornell LII)", url: "https://www.law.cornell.edu/cfr/text/49/383.91" };
const CFR_ENDORSE = { name: "49 CFR 383.153: Herufi za idhini za ziada (endorsements) kwenye CDL na CLP", url: "https://www.law.cornell.edu/cfr/text/49/383.153" };
const CFR_CLP = { name: "49 CFR 383.25: Kibali cha mwanafunzi wa udereva wa kibiashara (CLP)", url: "https://www.law.cornell.edu/cfr/text/49/383.25" };
const CFR_ELDT = { name: "49 CFR 380.603: Nani lazima amalize mafunzo ya madereva wanaoanza", url: "https://www.law.cornell.edu/cfr/text/49/380.603" };
const TPR = { name: "FMCSA Training Provider Registry (orodha rasmi ya watoa mafunzo ya ELDT)", url: "https://tpr.fmcsa.dot.gov/" };
const FMCSA_CDL = { name: "FMCSA: Commercial Driver's License (kurasa rasmi za shirikisho kuhusu CDL)", url: "https://www.fmcsa.dot.gov/registration/commercial-drivers-license" };
const CFR_AGE = { name: "49 CFR 391.11: Sifa za dereva (umri, Kiingereza, afya)", url: "https://www.law.cornell.edu/cfr/text/49/391.11" };
const CFR_MED = { name: "49 CFR 391.45: Lini madereva lazima wachunguzwe afya", url: "https://www.law.cornell.edu/cfr/text/49/391.45" };
const CFR_SKILLS = { name: "49 CFR 383.113: Mtihani wa ujuzi wa CDL unahusu nini", url: "https://www.law.cornell.edu/cfr/text/49/383.113" };
const CFR_INSPECT = { name: "49 CFR 396.13: Ukaguzi wa dereva kabla ya kuendesha", url: "https://www.law.cornell.edu/cfr/text/49/396.13" };
const FMCSA_HOS = { name: "FMCSA: Sheria za saa za huduma (hours of service)", url: "https://www.fmcsa.dot.gov/regulations/hours-of-service" };
const CFR_MIL = { name: "49 CFR 383.77: Msamaha wa mtihani wa ujuzi kwa madereva wa jeshi", url: "https://www.law.cornell.edu/cfr/text/49/383.77" };
const BLS_TRUCK = { name: "U.S. Bureau of Labor Statistics (ofisi ya takwimu za kazi ya Marekani): Madereva wa malori makubwa na malori yenye trela", url: "https://www.bls.gov/ooh/transportation-and-material-moving/heavy-and-tractor-trailer-truck-drivers.htm" };

module.exports = {
  id: "cdl-prep-sw",
  lang: "sw",
  translationOf: "cdl-prep",
  category: "Workforce Development",
  name: "Maandalizi ya Leseni ya Udereva wa Kibiashara (CDL)",
  skills: "Kuchagua daraja sahihi la CDL na idhini za ziada, Kupanga hatua kutoka kibali hadi leseni, Kusoma mwongozo wa CDL wa jimbo, Kufanya ukaguzi wa kabla ya safari, Kufanya maamuzi salama ya kuendesha",
  outcome: "kuchagua daraja la CDL na idhini za ziada ambazo kazi unayolenga inahitaji, kuorodhesha kila hatua kutoka kibali cha mwanafunzi hadi leseni, kujiandaa kwa mitihani ya maandishi ya jimbo kwa kutumia mwongozo rasmi, kueleza kwa sauti ukaguzi wa kabla ya safari, na kugeuza yote kuwa mpango wa kusoma na wa mitihani ya CDL wenye tarehe.",
  about: [
    "Kozi hii ni kwa yeyote anayetaka kazi ya kuendesha lori au basi: wanaotafuta kazi, wanajeshi wastaafu (veterans), vijana, watu wanaorudi nyumbani kutoka gerezani na watu wazima wanaobadilisha kazi. Huhitaji uzoefu wowote wa kuendesha zaidi ya leseni ya kawaida.",
    "Utajifunza ni leseni gani ya udereva wa kibiashara (CDL) unayohitaji, hatua za kuipata, jinsi ya kujiandaa kwa mitihani ya maandishi, jinsi ya kufanya ukaguzi wa kabla ya safari unaoanza mtihani wa kuendesha, na tabia salama za kuendesha ambazo wakaguzi wanatafuta.",
    "Kozi hii inakuandaa tu. Haikupi leseni wala kibali. Sheria za shirikisho zinatoka FMCSA (Federal Motor Carrier Safety Administration, shirika la Marekani la usalama wa magari ya kibiashara), mitihani inatolewa na ofisi ya leseni za udereva ya jimbo lako, na madereva wengi wapya lazima pia wamalize mafunzo ya madereva wanaoanza kwa mtoa mafunzo aliyesajiliwa. Kila somo linakuambia mahali pa kukagua sheria rasmi.",
    "Kila somo linachukua kama dakika tano, pamoja na kazi ya \"Jaribu sasa\". Jaribio fupi la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi. Mwishoni utatengeneza mpango wako mwenyewe wa kusoma na wa mitihani ya CDL wenye tarehe halisi."
  ],
  finalTask: "Tengeneza mpango wako wa ukurasa mmoja wa kusoma na wa mitihani ya CDL: kazi unayotaka, daraja la CDL na idhini zozote za ziada inazohitaji, hatua kutoka uchunguzi wa afya hadi mtihani wa ujuzi kwa mpangilio na tarehe lengwa kwa kila moja, watoa mafunzo watatu waliosajiliwa uliowapata kwenye Training Provider Registry, sehemu za mwongozo wa jimbo utakazosoma kila wiki, na orodha ya ukaguzi wa kabla ya safari iliyoandikwa kwa aina ya gari utakayofanyia mtihani.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima wanaolenga kazi yao ya kwanza ya kuendesha lori au basi: wanaotafuta kazi, wanajeshi wastaafu na wanajeshi wanaoondoka jeshini, vijana, watu wanaorudi nyumbani kutoka gerezani na wanaobadilisha kazi. Wengi wana leseni ya kawaida ya udereva lakini hawana uzoefu wa kuendesha magari ya kibiashara.",
    startingPoint: "Wanaweza kuendesha gari dogo na kusoma mwongozo rahisi. Wengi hawajui madaraja ya CDL, hatua za kibali, sheria ya mafunzo wala ukaguzi wa kabla ya safari ni nini. Baadhi wameambiwa mambo yasiyo sahihi na marafiki au na matangazo.",
    gap: "Kazi za udereva zinalipa mshahara wa kudumu na zina nafasi nyingi, lakini watu wanapoteza muda na pesa wanapochagua daraja lisilo sahihi, wanapojiandikisha na shule ya mafunzo isiyosajiliwa, au wanapofika kwenye mitihani bila kujiandaa. Wanafunzi wanahitaji picha sahihi ya njia hii na mpango wanaoweza kuufuata, kabla hawajalipia mafunzo.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; kila neno la kitaalamu linaelezwa",
      "Vifaa: simu au kompyuta ya maktaba ya kusoma mwongozo wa CDL wa jimbo na orodha rasmi ya watoa mafunzo",
      "Sheria zinatofautiana kwa kila jimbo: kozi inaelekeza kwenye mwongozo na ofisi ya jimbo kwa ada, fomu na kupanga mitihani",
      "Hakuna kuendesha halisi katika kozi hii; ujuzi wa kuendesha unatoka kwa mtoa mafunzo aliyesajiliwa",
      "Baadhi ya wanafunzi wana rekodi za uhalifu au hali za kiafya: wanakagua kama wanastahili na jimbo na mchunguzi wa afya, si na kozi hii"
    ],
    prerequisites: "Leseni halali ya kawaida ya udereva, au mpango wa kuipata kwanza. Kusoma Kiingereza cha msingi, kwa sababu sheria za shirikisho zinataka madereva wasome na kuzungumza Kiingereza vya kutosha kwa kazi."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa maelezo ya kazi ya udereva", action: "kutambua daraja la CDL (A, B au C) na idhini zozote za ziada ambazo kazi hiyo inahitaji", standard: "ukipata angalau maelezo 4 kati ya 5 sahihi" },
    { id: "O2", condition: "Ukitumia vyanzo rasmi vya FMCSA na vya jimbo", action: "kuorodhesha hatua kutoka uchunguzi wa afya hadi mtihani wa ujuzi wa CDL kwa mpangilio sahihi", standard: "bila kuacha hatua yoyote, pamoja na muda wa kusubiri na sheria ya mafunzo" },
    { id: "O3", condition: "Ukitumia mwongozo wa bure wa CDL wa jimbo lako", action: "kupanga ratiba ya kusoma kwa mitihani ya maandishi unayohitaji na kupata alama katika seti ya maswali ya mazoezi", standard: "ukifikia angalau 8 kati ya 10 katika maswali ya mazoezi kabla ya kupanga mtihani" },
    { id: "O4", condition: "Ukiwa umesimama karibu na lori au ukitumia picha ya lori", action: "kutaja kila sehemu unayokagua katika ukaguzi wa kabla ya safari na kusema unakagua nini kwake", standard: "ukigusa maeneo yote makuu kwa mpangilio bila kuruka eneo lolote" },
    { id: "O5", condition: "Ukipewa hali fulani ya uendeshaji", action: "kuchagua hatua salama kuhusu nafasi, mwendo, kurudi nyuma na hali ya mwili ya dereva", standard: "ukipata angalau hali 4 kati ya 5 sahihi" }
  ],
  chapters: [
    {
      name: "Sura 1: Njia ya kupata CDL",
      lessons: [
        {
          title: "Madaraja ya CDL na idhini za ziada: unahitaji ipi?",
          objectives: ["O1"],
          minutes: 5,
          goal: "Linganisha kazi ya udereva na daraja la CDL na idhini za ziada inazohitaji.",
          text: [
            "Leseni ya udereva wa kibiashara (CDL) inakuruhusu kuendesha magari makubwa au maalum kwa kazi. Kuna madaraja matatu, kulingana na gari.",
            "Daraja A (Class A) ni kwa magari yaliyounganishwa, kama kichwa cha lori kinachovuta trela, wakati uzito ulioruhusiwa wa jumla ni pauni 26,001 au zaidi na trela inayovutwa imeruhusiwa zaidi ya pauni 10,000. Daraja B ni kwa gari moja kubwa lenye uzito ulioruhusiwa wa pauni 26,001 au zaidi, kama lori la kumwaga mchanga (dump truck), lori la sanduku au basi la jiji; linaweza kuvuta trela ndogo ya pauni 10,000 au chini. Daraja C ni kwa magari madogo zaidi yanayobeba watu 16 au zaidi (pamoja na dereva) au yanayobeba vifaa hatari vinavyohitaji mabango ya onyo (placards).",
            "Idhini za ziada (endorsements) ni herufi za ziada kwenye leseni yako kwa kazi maalum. T: trela mbili au tatu. P: abiria. N: magari ya tangi. H: vifaa hatari. X: tangi pamoja na vifaa hatari. S: basi la shule. Kila moja inahitaji mtihani wake, na idhini ya H pia inahitaji ukaguzi wa usalama wa historia yako.",
            "Anza na kazi unayotaka. Soma matangazo halisi ya kazi karibu nawe na utafute daraja na idhini za ziada wanazoomba."
          ],
          steps: ["Chagua kazi unayotaka, kama safari ndefu, kusambaza mizigo mjini, basi au lori la kumwaga mchanga.", "Jiulize: linavuta trela kubwa? Kwa kawaida hiyo ni Daraja A.", "Ni lori moja kubwa au basi? Kwa kawaida hiyo ni Daraja B.", "Linabeba abiria, vimiminika kwenye tangi, trela mbili au vifaa hatari? Ongeza idhini ya ziada."],
          words: [["CDL", "commercial driver's license (leseni ya udereva wa kibiashara): leseni inayohitajika kuendesha magari makubwa au maalum kwa kazi."], ["Gari lililounganishwa", "lori linalovuta trela, kama kichwa cha lori na trela (tractor-trailer)."], ["Uzito ulioruhusiwa", "uzito wa juu kabisa ambao gari limejengwa kubeba likiwa limejaa, unaowekwa na mtengenezaji (mara nyingi huitwa GVWR)."], ["Idhini ya ziada (endorsement)", "ruhusa ya ziada kwenye CDL yako kwa kazi maalum, kama kubeba abiria au tangi."], ["Vifaa hatari (hazmat)", "bidhaa zinazoweza kuumiza watu au mali, kama mafuta au kemikali, zinazohitaji mabango ya onyo yanayoitwa placards."]],
          slides: [
            { title: "Madaraja matatu ya CDL", bullets: ["Daraja A: lori linalovuta trela nzito (tractor-trailer)", "Daraja B: lori moja zito au basi (lori la kumwaga mchanga, basi la jiji)", "Daraja C: gari dogo zaidi lenye watu 16+ au vifaa hatari vyenye mabango ya onyo"] },
            { title: "Idhini za ziada: herufi za ziada", bullets: ["T trela mbili/tatu, P abiria, N tangi", "H vifaa hatari, X tangi pamoja na vifaa hatari, S basi la shule", "Kila moja inahitaji mtihani wake"] },
            { title: "Anza na kazi", bullets: ["Soma matangazo matatu halisi ya kazi karibu nawe", "Andika daraja na idhini za ziada wanazoomba", "Hiyo ndiyo leseni unayolenga"] }
          ],
          sources: [CFR_CLASSES, CFR_ENDORSE, FMCSA_CDL],
          tryIt: "Tafuta matangazo matatu halisi ya kazi za udereva karibu nawe (kwenye tovuti ya kazi au tovuti ya kampuni yenyewe). Kwa kila moja, andika kazi, daraja la CDL linaloombwa na idhini zozote za ziada. Zungushia duara kazi unayoitaka zaidi.",
          youCanNow: "kulinganisha kazi ya udereva na Daraja A, B au C na kutaja idhini za ziada inazohitaji.",
          quickCheck: [
            { objective: "O1", q: "Kazi ni kuendesha kichwa cha lori kinachovuta trela ya futi 53. Kwa kawaida ni daraja gani?", options: ["Daraja C", "Daraja B", "Daraja A", "Haihitaji CDL"], answer: 2, why: "Kichwa cha lori kinachovuta trela nzito ni gari lililounganishwa, yaani Daraja A." },
            { objective: "O1", q: "Unaongeza idhini gani ya ziada ili kuendesha basi la shule?", options: ["S", "T", "N", "X"], answer: 0, why: "S ni idhini ya basi la shule; idhini ya abiria P pia inahitajika kwa mabasi." }
          ]
        },
        {
          title: "Hatua kutoka kibali hadi leseni",
          objectives: ["O2"],
          minutes: 6,
          goal: "Orodhesha hatua za kupata CDL kwa mpangilio na nani anashughulikia kila moja.",
          text: [
            "Madereva wengi wapya wanafuata hatua zilezile. Sheria za shirikisho zinatoka FMCSA; ofisi ya leseni za udereva ya jimbo lako inaendesha mitihani na kuweka ada na fomu.",
            "Kwanza, uchunguzi wa afya (mara nyingi huitwa DOT physical) kutoka kwa mchunguzi wa afya aliyethibitishwa. Madereva wengi lazima waupite tena angalau kila miezi 24. Pili, faulu mitihani ya maandishi ya jimbo ili upate kibali cha mwanafunzi wa udereva wa kibiashara (CLP). Sheria za shirikisho zinasema mwenye CLP lazima awe na umri wa angalau miaka 18 na lazima asubiri angalau siku 14 kabla ya mtihani wa ujuzi. Unapofanya mazoezi kwenye barabara za umma, mwenye CDL ya daraja sahihi lazima akae kando yako.",
            "Tangu Februari 7, 2022, watu wengi wanaopata CDL yao ya kwanza ya Daraja A au B, au idhini yao ya kwanza ya P, S au H, lazima wamalize mafunzo ya madereva wanaoanza (ELDT) kwa mtoa mafunzo aliye kwenye Training Provider Registry ya FMCSA kabla ya mtihani. Kisha unafanya mtihani wa ujuzi wa jimbo: ukaguzi wa kabla ya safari, udhibiti wa msingi wa gari na kuendesha barabarani.",
            "Umri: ili kuendesha kuvuka mipaka ya majimbo lazima uwe na angalau miaka 21. Baadhi ya majimbo yanaruhusu madereva wa miaka 18 hadi 20 kuendesha ndani ya jimbo tu. Kagua sheria za jimbo lako."
          ],
          steps: ["Uchunguzi wa afya kwa mchunguzi wa afya aliyethibitishwa.", "Soma mwongozo wa CDL wa jimbo na ufaulu mitihani ya maandishi.", "Pata kibali chako cha mwanafunzi wa udereva wa kibiashara (CLP).", "Maliza mafunzo ya madereva wanaoanza kwa mtoa mafunzo aliyesajiliwa, kama yanakuhusu.", "Fanya mazoezi ukiwa na mwenye CDL anayestahili kando yako; subiri angalau siku 14.", "Fanya mtihani wa ujuzi: ukaguzi wa kabla ya safari, udhibiti wa msingi, kuendesha barabarani."],
          words: [["FMCSA", "Federal Motor Carrier Safety Administration, shirika la Marekani linaloweka sheria za malori na mabasi."], ["CLP", "commercial learner's permit (kibali cha mwanafunzi): kinakuruhusu kufanya mazoezi ya kuendesha gari la kibiashara ukiwa na mwenye CDL anayestahili kando yako."], ["ELDT", "entry-level driver training: mafunzo ya shirikisho ambayo madereva wengi wapya wa CDL lazima wamalize kabla ya mtihani."], ["Training Provider Registry", "orodha rasmi ya FMCSA ya shule na waajiri walioruhusiwa kutoa ELDT."], ["Mchunguzi wa afya", "mtaalamu wa afya aliyethibitishwa kufanya uchunguzi wa DOT kwa madereva wa kibiashara."]],
          slides: [
            { title: "Nani anafanya nini", bullets: ["FMCSA: sheria za shirikisho", "Jimbo lako: mitihani, ada na fomu", "Mtoa mafunzo aliyesajiliwa: mafunzo yanayotakiwa"] },
            { title: "Hatua kwa mpangilio", bullets: ["Uchunguzi wa afya, kisha mitihani ya maandishi, kisha CLP", "Mafunzo ya madereva wanaoanza kama yanakuhusu", "Subiri angalau siku 14, kisha mtihani wa ujuzi"] },
            { title: "Sheria za kukumbuka", bullets: ["CLP: angalau miaka 18, mwenye CDL kando yako", "Kuvuka mipaka ya majimbo: angalau miaka 21", "Mtoa mafunzo lazima awe kwenye orodha ya FMCSA"] }
          ],
          sources: [CFR_CLP, CFR_ELDT, TPR, CFR_AGE, CFR_MED, CFR_SKILLS],
          tryIt: "Tafuta ukurasa wa CDL wa jimbo lako (tafuta jina la jimbo lako pamoja na \"CDL\" na ufungue tovuti ya .gov). Andika hatua sita kwa mpangilio na, kando ya kila moja, jimbo lako linasema nini kuihusu: fomu, mahali pa kwenda na ada zilizoorodheshwa.",
          youCanNow: "kuorodhesha hatua kutoka uchunguzi wa afya hadi mtihani wa ujuzi kwa mpangilio na kusema nani anashughulikia kila moja.",
          quickCheck: [
            { objective: "O2", q: "Umepata CLP yako sasa hivi. Chini ya sheria za shirikisho, unaweza kufanya mtihani wa ujuzi baada ya muda gani?", options: ["Siku hiyohiyo", "Siku inayofuata", "Baada ya miezi 6", "Baada ya angalau siku 14"], answer: 3, why: "Sheria za shirikisho zinasema mwenye CLP lazima asubiri angalau siku 14 kabla ya mtihani wa ujuzi." },
            { objective: "O2", q: "Unapata wapi shule inayoweza kutoa mafunzo yanayotakiwa ya madereva wanaoanza?", options: ["Tangazo lolote kwenye mitandao ya kijamii", "Training Provider Registry ya FMCSA", "Rafiki anayeendesha malori", "Duka la kuuza magari"], answer: 1, why: "Ni watoa mafunzo walio kwenye Training Provider Registry ya FMCSA tu wanaoweza kutoa mafunzo yanayotakiwa." }
          ]
        },
        {
          title: "Kujiandaa kwa mitihani ya maandishi",
          objectives: ["O3"],
          minutes: 5,
          goal: "Panga ratiba ya kusoma ukitumia mwongozo wa CDL wa jimbo lako na upate alama katika seti ya mazoezi.",
          text: [
            "Kila jimbo lina mwongozo wa bure wa CDL kwenye tovuti yake ya leseni za udereva. Mitihani ya maandishi inatoka humo, kwa hiyo ndicho kitabu bora zaidi cha kusoma unachoweza kuwa nacho.",
            "Madereva wengi wapya wanafanya mtihani wa General Knowledge (maarifa ya jumla). Wengi pia wanafanya Air Brakes (breki za hewa, kwa sababu malori mengi makubwa yanazitumia) na Combination Vehicles (magari yaliyounganishwa, kwa Daraja A). Kila idhini ya ziada ina mtihani wake. Mwongozo wa jimbo lako unaonyesha sehemu zipi zinaenda na mtihani upi.",
            "Soma sehemu moja kwa wakati. Isome, funga mwongozo, kisha andika mambo matatu uliyojifunza. Kisha tumia maswali ya mazoezi yaliyo kwenye mwongozo au kwenye tovuti ya jimbo lako. Lenga kupata angalau 8 kati ya 10 sahihi kabla ya kupanga mtihani halisi.",
            "Kuwa mwangalifu na programu na tovuti za kulipia zinazoahidi \"maswali halisi ya mtihani\". Mazoezi ya bure kutoka jimbo lako yanatosha kwa watu wengi."
          ],
          steps: ["Pakua mwongozo wa CDL wa jimbo lako kutoka tovuti rasmi ya .gov.", "Weka alama kwenye sehemu unazohitaji: General Knowledge pamoja na zile za daraja lako na idhini zako za ziada.", "Panga sehemu moja kwa kila kipindi cha kusoma, dakika 20 hadi 30.", "Baada ya kila sehemu, andika mambo matatu uliyojifunza bila kuangalia.", "Fanya maswali ya mazoezi hadi upate angalau 8 kati ya 10 sahihi."],
          words: [["Mtihani wa maandishi (knowledge test)", "mtihani wa maandishi (mara nyingi kwenye kompyuta) unaoufaulu ili kupata CLP yako."], ["Breki za hewa (air brakes)", "breki zinazofanya kazi kwa hewa iliyobanwa, zinazotumika kwenye malori na mabasi mengi mazito."], ["Mwongozo wa CDL", "kitabu rasmi cha jimbo lako cha kujiandaa kwa mitihani ya CDL."]],
          slides: [
            { title: "Kitabu chako cha kusoma ni bure", bullets: ["Kila jimbo lina mwongozo wa CDL kwenye tovuti yake ya .gov", "Mitihani ya maandishi inatoka humo"] },
            { title: "Mitihani gani?", bullets: ["General Knowledge kwa kila mtu", "Air Brakes na Combination Vehicles kwa wengi wa Daraja A", "Mtihani mmoja kwa kila idhini ya ziada"] },
            { title: "Jinsi ya kusoma", bullets: ["Sehemu moja kwa kila kipindi", "Funga kitabu na uandike mambo matatu uliyojifunza", "Fanya mazoezi hadi upate 8 kati ya 10"] }
          ],
          sources: [FMCSA_CDL],
          tryIt: "Pakua mwongozo wa CDL wa jimbo lako. Soma sehemu ya kwanza ya General Knowledge kuhusu ukaguzi wa gari. Ufunge na uandike mambo matatu unayokumbuka. Kisha andika maswali matano ya mazoezi yako mwenyewe pamoja na majibu, na ubadilishane na mwenzako wa kusoma au uyakague kwa mwongozo.",
          youCanNow: "kupata mwongozo wa CDL wa jimbo lako, kuchagua sehemu unazohitaji, na kuzisoma kwa vipindi vifupi hadi upate 8 kati ya 10.",
          quickCheck: [
            { objective: "O3", q: "Kitabu gani bora cha bure cha kujiandaa kwa mitihani ya maandishi ya CDL?", options: ["Programu ya kulipia yenye \"majibu halisi ya mtihani\"", "Video kutoka kwa mtu usiyemjua mtandaoni", "Mwongozo rasmi wa CDL wa jimbo lako", "Kitabu cha madereva wa magari madogo"], answer: 2, why: "Mitihani ya maandishi inatoka kwenye mwongozo rasmi wa CDL wa jimbo lako." },
            { objective: "O3", q: "Unataka Daraja A kwa tractor-trailer zenye breki za hewa. Kwa kawaida unahitaji mitihani gani?", options: ["School Bus tu", "Passenger tu", "Hazardous Materials tu", "General Knowledge, Air Brakes na Combination Vehicles"], answer: 3, why: "Madereva wengi wa Daraja A wa tractor-trailer wanafanya General Knowledge, Air Brakes na Combination Vehicles." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Njia ya kupata CDL",
        questions: [
          { objective: "O1", q: "Kazi ni kuendesha lori moja la kumwaga mchanga lenye uzito ulioruhusiwa wa pauni 33,000. Kwa kawaida ni daraja gani?", options: ["Daraja B", "Daraja A", "Daraja C", "Leseni ya kawaida ya gari"], answer: 0, why: "Gari moja zito lenye uzito ulioruhusiwa wa pauni 26,001 au zaidi ni Daraja B." },
          { objective: "O1", q: "Idhini gani ya ziada inakuruhusu kuvuta trela mbili au tatu?", options: ["P", "S", "T", "N"], answer: 2, why: "T ni idhini ya trela mbili na tatu." },
          { objective: "O2", q: "Hatua gani kwa kawaida huja kwanza katika njia ya CDL?", options: ["Mtihani wa ujuzi barabarani", "Uchunguzi wa afya na mitihani ya maandishi ya CLP", "Kununua lori", "Kupata idhini ya H"], answer: 1, why: "Unafaulu uchunguzi wa afya na mitihani ya maandishi ili kupata CLP kabla ya kufanya mafunzo na mtihani barabarani." },
          { objective: "O2", q: "Unapofanya mazoezi na CLP kwenye barabara za umma, nani lazima awe nawe?", options: ["Hakuna mtu", "Rafiki yeyote mwenye leseni ya gari dogo", "Mtu wa familia", "Mwenye CDL ya daraja sahihi, kando yako"], answer: 3, why: "Mwenye CDL anayestahili kwa gari hilo lazima akae kando yako na kukusimamia." },
          { objective: "O3", q: "Unapata 5 kati ya 10 katika maswali ya mazoezi ya Air Brakes. Ufanye nini?", options: ["Panga mtihani halisi leo", "Ruka Air Brakes", "Lipia programu yenye majibu ya mtihani", "Soma sehemu hiyo tena na ufanye mazoezi hadi ufikie 8 kati ya 10"], answer: 3, why: "Fanya mazoezi hadi upate alama nzuri kabla ya kupanga mtihani halisi." }
        ]
      }
    },
    {
      name: "Sura 2: Ujuzi na mpango wako",
      lessons: [
        {
          title: "Ukaguzi wa kabla ya safari",
          objectives: ["O4"],
          minutes: 6,
          goal: "Taja kila eneo la ukaguzi wa kabla ya safari na unachokagua hapo.",
          text: [
            "Mtihani wa ujuzi unaanza na ukaguzi wa kabla ya safari (pre-trip inspection). Unazunguka gari, unaonyesha kila sehemu kwa kidole, na unasema kwa sauti unachokagua. Sheria za shirikisho pia zinasema kila dereva lazima ahakikishe gari ni salama kabla ya kuliendesha, kwa hiyo hii ni tabia ya kazi yako yote.",
            "Fuata mpangilio uleule kila mara, ili usiruke sehemu yoyote. Mpangilio wa kawaida ni: chumba cha injini, kibini (cab) na kuwasha injini, usukani, suspension (springi na vifaa vya kubeba uzito), breki, magurudumu na matairi, pande na nyuma pamoja na taa, na eneo la kuunganisha kwenye gari lililounganishwa. Kwenye magari yenye breki za hewa pia unakagua vipimo na maonyo ya breki za hewa.",
            "Kwa kila sehemu, sema kinachoifanya iwe salama: \"Imefungwa imara, haijapasuka wala kupinda, haivuji.\" Mwongozo wa jimbo lako una orodha kamili kwa aina ya gari lako. Mtoa mafunzo wako atakuonyesha kwenye lori halisi.",
            "Ukipata kasoro, lori halisogei hadi irekebishwe. Iripoti na uiandike."
          ],
          steps: ["Tumia orodha ya ukaguzi kutoka mwongozo wa jimbo lako kwa aina ya gari lako.", "Anza na chumba cha injini, kisha kibini, kisha zunguka lori kwa mpangilio uleule kila mara.", "Onyesha kila sehemu kwa kidole na useme unachokagua: imefungwa, haijaharibika, haivuji.", "Kagua taa, viakisi mwanga na matairi kila upande.", "Andika na uripoti kasoro yoyote; usiendeshe hadi irekebishwe."],
          words: [["Ukaguzi wa kabla ya safari (pre-trip inspection)", "ukaguzi wa usalama ambao dereva anaufanya kwenye gari kabla ya kuliendesha."], ["Kasoro", "sehemu iliyovunjika, iliyochakaa au inayokosekana inayofanya gari lisiwe salama."], ["Eneo la kuunganisha (coupling)", "sehemu zinazounganisha kichwa cha lori na trela, kama fifth wheel na kingpin."], ["Fifth wheel", "bamba bapa la duara kwenye kichwa cha lori ambalo trela hujifunga juu yake."]],
          slides: [
            { title: "Kwa nini ukaguzi wa kabla ya safari ni muhimu", bullets: ["Mtihani wa ujuzi unaanza nao", "Sheria inasema kagua kabla ya kuendesha", "Kasoro maana yake huendeshi"] },
            { title: "Mpangilio uleule kila mara", bullets: ["Chumba cha injini, kisha kibini na kuwasha", "Usukani, suspension, breki, magurudumu", "Pande, nyuma, taa, eneo la kuunganisha"] },
            { title: "Sema unachokagua", bullets: ["Imefungwa imara", "Haijapasuka, haijapinda wala kuchakaa", "Haivuji"] }
          ],
          sources: [CFR_SKILLS, CFR_INSPECT],
          tryIt: "Ukitumia sehemu ya ukaguzi ya mwongozo wa CDL wa jimbo lako, andika orodha ya ukaguzi wa kabla ya safari kwa gari unalopanga kulifanyia mtihani. Kisha fanya mazoezi ya kuisema kwa sauti ukitumia gari dogo, picha ya lori au lori la kuchezea: onyesha kila eneo kwa kidole na useme unachokagua.",
          youCanNow: "kupitia ukaguzi wa kabla ya safari kwa mpangilio na kusema unachokagua kwenye kila sehemu.",
          quickCheck: [
            { objective: "O4", q: "Kwa nini unakagua kwa mpangilio uleule kila mara?", options: ["Ili usiruke sehemu yoyote", "Kwa sababu ni haraka zaidi kuruka sehemu", "Kwa sababu mkaguzi anachagua mpangilio", "Haijalishi"], answer: 0, why: "Mpangilio maalum unamaanisha hakuna eneo linalorukwa." },
            { objective: "O4", q: "Wakati wa ukaguzi wa kabla ya safari unapata bomba la breki lililopasuka. Ufanye nini?", options: ["Endesha polepole hadi kituo kinachofuata", "Libandike kwa tepu na uende", "Liripoti, liandike na usiendeshe hadi lirekebishwe", "Lipuuze kama breki bado zinafanya kazi"], answer: 2, why: "Kasoro ya usalama maana yake gari halisogei hadi lirekebishwe." }
          ]
        },
        {
          title: "Udhibiti wa msingi na tabia salama za kuendesha",
          objectives: ["O5"],
          minutes: 5,
          goal: "Chagua hatua salama katika hali za kawaida za kuendesha lori.",
          text: [
            "Baada ya ukaguzi wa kabla ya safari, mtihani wa ujuzi unakagua udhibiti wa msingi wa gari (kwenda mbele na kurudi nyuma, kurudi nyuma kwa mstari ulionyooka na kwenye kona, na kugeuka) na kuendesha barabarani.",
            "Wakaguzi wanatafuta tabia salama. Acha nafasi kubwa ya usalama kuzunguka gari: malori yanahitaji nafasi kubwa zaidi sana ya kusimama kuliko magari madogo. Punguza mwendo kwenye mvua, theluji, kona, maeneo ya ujenzi wa barabara na msongamano mkubwa, hata chini ya kikomo cha mwendo. Angalia mbali mbele na uangalie vioo vyako mara kwa mara. Geuka kulia kwa uangalifu ukipanua kona ili trela isigonge ukingo wa barabara au gari.",
            "Rudi nyuma kidogo iwezekanavyo. Kama huna uhakika kilicho nyuma yako, shuka uangalie. Madereva wengi wanakumbuka G.O.A.L.: Get Out And Look (shuka uangalie).",
            "Lazima pia uwe katika hali nzuri ya kuendesha. Sheria za shirikisho za saa za huduma (hours of service) zinaweka kikomo cha muda unaoweza kuendesha na kufanya kazi kabla ya kupumzika, na madereva wanapimwa dawa za kulevya na pombe. Usiendeshe kamwe ukiwa umechoka, mgonjwa au umelewa."
          ],
          steps: ["Acha nafasi kubwa mbele yako; iongeze katika hali mbaya ya hewa.", "Weka mwendo kulingana na barabara, hali ya hewa na mzigo, si kibao tu.", "Angalia vioo vyako kila baada ya sekunde chache na kabla ya kila kubadilisha njia.", "Kabla ya kurudi nyuma: Get Out And Look, kisha rudi nyuma polepole.", "Simama upumzike unapochoka; fuata sheria za saa za huduma."],
          words: [["Nafasi ya usalama (space cushion)", "nafasi tupu unayoiacha kuzunguka gari lako ili uwe na nafasi ya kusimama au kukwepa."], ["Off-tracking", "magurudumu ya nyuma ya gari refu yanapopita njia fupi kuliko magurudumu ya mbele wakati wa kugeuka."], ["Saa za huduma (hours of service)", "sheria za FMCSA kuhusu muda ambao dereva anaweza kuendesha na kufanya kazi kabla ya kupumzika."]],
          slides: [
            { title: "Mtihani wa ujuzi unakagua nini", bullets: ["Ukaguzi wa kabla ya safari", "Udhibiti wa msingi: kurudi nyuma, kugeuka, kusimama", "Kuendesha barabarani"] },
            { title: "Nafasi na mwendo", bullets: ["Malori yanahitaji nafasi kubwa zaidi sana ya kusimama", "Punguza mwendo kwa hali ya hewa, kona na maeneo ya ujenzi", "Angalia mbali mbele; angalia vioo mara kwa mara"] },
            { title: "Kurudi nyuma: G.O.A.L.", bullets: ["Get Out And Look: shuka uangalie", "Rudi nyuma polepole, kidogo iwezekanavyo"] },
            { title: "Kuwa katika hali nzuri ya kuendesha", bullets: ["Fuata sheria za saa za huduma", "Usiendeshe kamwe ukiwa umechoka, mgonjwa au umelewa"] }
          ],
          sources: [CFR_SKILLS, FMCSA_HOS],
          tryIt: "Andika hali tano kutoka sehemu ya uendeshaji salama ya mwongozo wa jimbo lako (kwa mfano mvua usiku, eneo la ujenzi wa barabara, kurudi nyuma kwenye gati la kupakia mizigo). Kwa kila moja, andika hatua salama kwa sentensi moja. Mwombe mwenzako wa kusoma akuulize maswali kuzihusu.",
          youCanNow: "kuchagua hatua salama kuhusu nafasi, mwendo, kurudi nyuma na hali nzuri ya kuendesha.",
          quickCheck: [
            { objective: "O5", q: "Unarudi nyuma kwenye gati la kupakia mizigo na huoni kona moja. Ufanye nini?", options: ["Rudi nyuma haraka zaidi ili umalize", "Shuka uangalie kabla ya kuendelea kurudi nyuma", "Piga honi na uendelee", "Tumia redio tu"], answer: 1, why: "G.O.A.L.: Get Out And Look (shuka uangalie) wakati huna uhakika kilicho nyuma yako." },
            { objective: "O5", q: "Mvua kubwa inaanza kunyesha kwenye barabara kuu. Uamuzi salama ni upi?", options: ["Endelea na mwendo na nafasi ileile", "Fuata gari la mbele kwa karibu zaidi ili uone taa zake", "Ongeza mwendo ili utoke kwenye mvua", "Punguza mwendo na uongeze nafasi kati yako na gari la mbele"], answer: 3, why: "Barabara zenye maji zinahitaji umbali mrefu zaidi wa kusimama, kwa hiyo punguza mwendo na uache nafasi zaidi." }
          ]
        },
        {
          title: "Kuchagua mafunzo na kutengeneza mpango wako wa CDL",
          objectives: ["O2", "O3"],
          minutes: 5,
          goal: "Andika mpango wa CDL wenye tarehe pamoja na watoa mafunzo waliosajiliwa unaoweza kuwasiliana nao.",
          text: [
            "Kabla ya kulipia au kujiandikisha kwa mafunzo yoyote, hakikisha shule au mwajiri yuko kwenye Training Provider Registry ya FMCSA. Unaweza kutafuta kwenye orodha hiyo kwa mahali.",
            "Baadhi ya kampuni za malori zinalipia mafunzo ukikubali kuziendeshea kwa muda fulani. Soma mkataba kwa makini: nini kitatokea ukiondoka mapema? Utalazimika kurudisha gharama za mafunzo? Uliza kabla ya kusaini.",
            "Wanajeshi wastaafu: kama uliendesha magari mazito ya jeshi, uliza jimbo lako kuhusu msamaha wa mtihani wa ujuzi kwa wanajeshi; FMCSA inaruhusu majimbo kuutoa kwa wanajeshi wanaostahili na wastaafu wa karibuni. Kama una rekodi ya uhalifu, piga simu ofisi ya leseni ya jimbo na uwaulize waajiri mapema kuhusu sheria zao za kuajiri; idhini ya vifaa hatari pia inahitaji ukaguzi wa usalama.",
            "Sasa geuza yote kuwa mpango. Mpango wenye tarehe una uwezekano mkubwa zaidi wa kutimia kuliko tamaa tu."
          ],
          steps: ["Andika kazi unayotaka na daraja pamoja na idhini za ziada inazohitaji.", "Tafuta kwenye Training Provider Registry na uorodheshe watoa mafunzo watatu karibu nawe.", "Piga simu au tembelea; uliza kuhusu ratiba, gharama kamili, mkataba na msaada wa kupata kazi.", "Weka tarehe lengwa kando ya kila hatua, kutoka uchunguzi wa afya hadi mtihani wa ujuzi.", "Panga sehemu za mwongozo utakazosoma kila wiki."],
          words: [["Mkataba wa mafunzo", "makubaliano kwamba kampuni inalipia mafunzo yako ukiifanyia kazi kwa muda fulani."], ["Msamaha wa mtihani wa ujuzi", "chaguo ambalo baadhi ya majimbo yanatoa la kuruka mtihani wa ujuzi wa CDL kwa madereva wa jeshi wanaostahili."]],
          slides: [
            { title: "Kagua kabla ya kulipa", bullets: ["Mtoa mafunzo yuko kwenye Training Provider Registry ya FMCSA?", "Tafuta kwenye orodha hiyo kwa mahali"] },
            { title: "Mafunzo yanayolipiwa na kampuni", bullets: ["Soma mkataba", "Ukiondoka mapema itakuwaje? Utarudisha gharama?"] },
            { title: "Uliza mapema", bullets: ["Wanajeshi wastaafu: uliza kuhusu msamaha wa mtihani wa ujuzi kwa wanajeshi", "Ukiwa na rekodi ya uhalifu: uliza jimbo na waajiri mapema"] },
            { title: "Panga kwa tarehe", bullets: ["Kila hatua inapata tarehe lengwa", "Sehemu za kusoma kila wiki", "Watoa mafunzo watatu wa kupigia simu"] }
          ],
          sources: [TPR, CFR_MIL, CFR_ELDT, BLS_TRUCK],
          tryIt: "Tafuta kwenye Training Provider Registry watoa mafunzo watatu karibu nawe. Andika majina yao, jinsi ya kuwasiliana nao, na maswali matatu utakayomwuliza kila mmoja. Kisha weka tarehe lengwa kando ya kila hatua ya njia yako ya CDL.",
          youCanNow: "kukagua kama mtoa mafunzo amesajiliwa na kuandika mpango wa CDL wenye tarehe kwa kila hatua.",
          quickCheck: [
            { objective: "O2", q: "Shule inasema inatoa mafunzo ya CDL lakini haiko kwenye Training Provider Registry. Ufanye nini?", options: ["Jiandikishe haraka kabla bei haijapanda", "Lipa pesa taslimu ili iwe rahisi zaidi", "Chagua mtoa mafunzo aliye kwenye orodha hiyo", "Mwombe rafiki aikague baadaye"], answer: 2, why: "Mafunzo yanayohesabika kwa madereva wengi wapya lazima yatoke kwa mtoa mafunzo aliye kwenye orodha ya FMCSA." },
            { objective: "O3", q: "Mpango upi una uwezekano mkubwa zaidi wa kufanikiwa?", options: ["\"Nitapata CDL yangu siku moja.\"", "\"Uchunguzi wa afya kabla ya Mei 3, mitihani ya maandishi kabla ya Mei 24, kusoma sehemu moja ya mwongozo kila wiki.\"", "\"Nitasoma nikipata muda.\"", "\"Nitafanya mtihani tu nione kitakachotokea.\""], answer: 1, why: "Mpango wenye tarehe na hatua za kusoma kila wiki unageuza lengo kuwa vitendo." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Ujuzi na mpango wako",
        questions: [
          { objective: "O4", q: "Mtihani wa ujuzi wa CDL unaanza na nini?", options: ["Ukaguzi wa kabla ya safari", "Kuendesha barabarani", "Kurudi nyuma kwenye kona", "Insha ya maandishi"], answer: 0, why: "Mtihani wa ujuzi unaanza na ukaguzi wa kabla ya safari." },
          { objective: "O4", q: "Wakati wa ukaguzi wa kabla ya safari, unasema nini kuhusu kila sehemu?", options: ["Jina lake tu", "Bei yake", "Unachokagua: imefungwa imara, haijaharibika, haivuji", "Hakuna; unaangalia tu"], answer: 2, why: "Unaonyesha kila sehemu kwa kidole na kusema kinachoifanya iwe salama." },
          { objective: "O5", q: "Kwa nini malori yanaacha nafasi kubwa zaidi kuliko magari madogo?", options: ["Ili kuokoa mafuta tu", "Yanahitaji nafasi kubwa zaidi sana ya kusimama", "Ni mazoea tu", "Ili madereva wengine wapite"], answer: 1, why: "Magari mazito yanachukua muda mrefu zaidi sana kusimama, kwa hiyo yanahitaji nafasi kubwa zaidi ya usalama." },
          { objective: "O5", q: "Unasikia usingizi sana saa mbili baada ya kuanza safari. Hatua salama ni ipi?", options: ["Fungua dirisha na uendelee", "Kunywa kahawa zaidi na uongeze mwendo", "Ongeza sauti ya redio", "Simama mahali salama upumzike"], answer: 3, why: "Usiendeshe kamwe ukiwa umechoka; simama mahali salama upumzike, na ufuate sheria za saa za huduma." },
          { objective: "O2", q: "Kampuni inatoa mafunzo ya CDL ya bure ukiiendeshea kwa mwaka mmoja. Unafanya nini kwanza?", options: ["Soma mkataba na uulize nini kitatokea ukiondoka mapema", "Saini mara moja", "Waambie utaamua baada ya mafunzo", "Puuza mkataba"], answer: 0, why: "Mafunzo yanayolipiwa na kampuni mara nyingi yana sharti la kurudisha gharama, kwa hiyo soma na uulize kabla ya kusaini." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Maandalizi ya Leseni ya Udereva wa Kibiashara (CDL)",
    questions: [
      { objective: "O1", q: "Kazi ya kuendesha basi la jiji linalobeba abiria 40. Daraja na idhini ya ziada gani vina uwezekano mkubwa zaidi?", options: ["Daraja C na T", "Daraja A na H", "Daraja B na P", "Haihitaji CDL"], answer: 2, why: "Basi moja zito kwa kawaida ni Daraja B, na kubeba abiria kunahitaji idhini ya P." },
      { objective: "O1", q: "Idhini ya H inaruhusu nini?", options: ["Kusafirisha vifaa hatari", "Kuendesha basi la shule", "Kuvuta trela mbili", "Kuendesha gari la tangi tu"], answer: 0, why: "H ni idhini ya vifaa hatari; pia inahitaji ukaguzi wa usalama wa historia yako." },
      { objective: "O1", q: "Gari gani kwa kawaida ni Daraja A?", options: ["Gari dogo la abiria 15", "Lori moja la sanduku lenye uzito ulioruhusiwa wa pauni 30,000", "Pickup", "Kichwa cha lori kinachovuta trela yenye uzito ulioruhusiwa wa zaidi ya pauni 10,000"], answer: 3, why: "Gari lililounganishwa lenye uzito ulioruhusiwa wa pauni 26,001 au zaidi, na trela ya zaidi ya pauni 10,000, ni Daraja A." },
      { objective: "O1", q: "Unataka kusafirisha mafuta kwenye tangi linalobeba vifaa hatari vyenye mabango ya onyo. Idhini gani inahusu yote mawili?", options: ["S", "X", "P", "T"], answer: 1, why: "X inaunganisha idhini ya gari la tangi na idhini ya vifaa hatari." },
      { objective: "O2", q: "Nani anaweka sheria za shirikisho kwa madereva wa kibiashara?", options: ["FMCSA", "IRS (ofisi ya kodi)", "OSHA (usalama kazini)", "Shule yako ya mafunzo"], answer: 0, why: "FMCSA, Federal Motor Carrier Safety Administration, inaweka sheria za shirikisho." },
      { objective: "O2", q: "Nani anatoa mitihani ya maandishi na ya ujuzi ya CDL?", options: ["FMCSA huko Washington, D.C.", "Kampuni yoyote ya malori", "Mahakama ya shirikisho", "Ofisi ya leseni za udereva ya jimbo lako au wakaguzi walioidhinishwa nayo"], answer: 3, why: "Jimbo linaendesha mitihani na kuweka ada na fomu." },
      { objective: "O2", q: "Chini ya sheria za shirikisho, umri wa chini kabisa wa kuendesha gari la kibiashara kuvuka mipaka ya majimbo ni upi?", options: ["16", "18", "21", "25"], answer: 2, why: "Madereva lazima wawe na angalau miaka 21 ili kuendesha magari ya kibiashara kuvuka mipaka ya majimbo." },
      { objective: "O2", q: "Mpangilio upi ni sahihi?", options: ["Mtihani wa ujuzi, kisha CLP, kisha uchunguzi wa afya", "Uchunguzi wa afya na mitihani ya maandishi, CLP, mafunzo, kisha mtihani wa ujuzi", "Mafunzo, mtihani wa ujuzi, kisha mitihani ya maandishi", "CLP, mtihani wa ujuzi siku hiyohiyo, kisha mafunzo"], answer: 1, why: "Uchunguzi wa afya na mitihani ya maandishi vinaleta CLP; mafunzo na kusubiri siku 14 vinakuja kabla ya mtihani wa ujuzi." },
      { objective: "O2", q: "Madereva wengi lazima wapite uchunguzi wa afya wa DOT tena mara ngapi?", options: ["Angalau kila miezi 24", "Mara moja tu maishani", "Kila miaka 10", "Kamwe baada ya umri wa miaka 30"], answer: 0, why: "Madereva wengi lazima wachunguzwe tena na kuthibitishwa angalau kila miezi 24; baadhi wanahitaji mara nyingi zaidi." },
      { objective: "O3", q: "Maswali ya mitihani ya maandishi ya CDL yanatoka wapi?", options: ["Makala za habari", "Mwongozo wa CDL wa jimbo lako", "Mitandao ya kijamii", "Redio ya lori"], answer: 1, why: "Mitihani ya maandishi inategemea mwongozo rasmi wa CDL wa jimbo." },
      { objective: "O3", q: "Ratiba nzuri ya kujiandaa kwa mitihani ya maandishi ni ipi?", options: ["Soma mwongozo wote usiku wa kabla ya mtihani", "Tazama video tu", "Kariri majibu kutoka programu ya kulipia", "Sehemu moja ya mwongozo kwa kila kipindi, kisha andika mambo matatu uliyojifunza na ufanye maswali ya mazoezi"], answer: 3, why: "Vipindi vifupi, kukumbuka kwa kuandika na maswali ya mazoezi vinakusaidia kukumbuka." },
      { objective: "O3", q: "Uko tayari kupanga mtihani wa maandishi lini?", options: ["Ukishasoma ukurasa wa jina la kitabu", "Unapopata angalau 8 kati ya 10 katika maswali ya mazoezi", "Rafiki akisema uko tayari", "Mara tu unapopata mwongozo"], answer: 1, why: "Kupata alama nzuri katika maswali ya mazoezi ni ishara nzuri kwamba uko tayari." },
      { objective: "O4", q: "Ukaguzi wa kabla ya safari ni nini?", options: ["Ukaguzi wa usalama wa gari kabla ya kuliendesha", "Kipimo cha macho yako", "Kuangalia hali ya hewa", "Kukagua mshahara wako"], answer: 0, why: "Ni ukaguzi ambao dereva anaufanya kuhakikisha gari ni salama kabla ya kuendesha." },
      { objective: "O4", q: "Njia nzuri ya kueleza sehemu moja katika ukaguzi wako wa kabla ya safari ni ipi?", options: ["\"Hilo ni tairi.\"", "\"Inaonekana sawa, nadhani.\"", "\"Imefungwa imara, haijapasuka wala kupinda, haivuji.\"", "\"Nitaikagua baadaye.\""], answer: 2, why: "Unataja sehemu na kusema hasa kinachoifanya iwe salama." },
      { objective: "O4", q: "Kwenye tractor-trailer, eneo gani linaunganisha kichwa cha lori na trela?", options: ["Vioo", "Eneo la kuunganisha, kama fifth wheel", "Tangi la mafuta", "Redio"], answer: 1, why: "Eneo la kuunganisha, pamoja na fifth wheel na kingpin, ndilo linashikilia trela kwenye kichwa cha lori." },
      { objective: "O5", q: "G.O.A.L. inamaanisha nini unaporudi nyuma?", options: ["Go On And Leave", "Get Over All Lanes", "Gas Off At Lights", "Get Out And Look"], answer: 3, why: "Get Out And Look (shuka uangalie): kagua kilicho nyuma yako kabla ya kurudi nyuma." },
      { objective: "O5", q: "Unaendesha kupitia eneo la ujenzi wa barabara. Unafanya nini?", options: ["Punguza mwendo na uache nafasi zaidi", "Endelea na mwendo wa barabara kuu", "Badilisha njia mara kwa mara", "Fuata gari la mbele kwa karibu"], answer: 0, why: "Maeneo ya ujenzi yana wafanyakazi, njia nyembamba na vituo vya ghafla, kwa hiyo punguza mwendo na uache nafasi." },
      { objective: "O5", q: "Sheria za saa za huduma zinafanya nini?", options: ["Zinaweka mshahara wako", "Zinaweka kikomo cha muda unaoendesha na kufanya kazi kabla ya kupumzika", "Zinakuambia barabara za kutumia", "Zinaamua tarehe ya mtihani wako"], answer: 1, why: "Sheria za saa za huduma zinaweka kikomo cha muda wa kuendesha na kufanya kazi ili madereva wasichoke kupita kiasi." },
      { objective: "O5", q: "Unageuka kulia ukiwa na lori refu. Hatari ni ipi?", options: ["Trela inaweza kukata kona na kugonga ukingo wa barabara au gari", "Injini itazima", "Vioo vitakunjika", "Hakuna hatari"], answer: 0, why: "Off-tracking maana yake magurudumu ya nyuma yanapita njia fupi zaidi, kwa hiyo trela inaweza kugonga kilicho ndani ya kona." },
      { objective: "O4", q: "Katika ukaguzi wa kabla ya safari unakuta taa moja haifanyi kazi. Unafanya nini?", options: ["Endesha usiku hata hivyo", "Ipuuze kama ni mchana", "Iripoti na uirekebishe kabla ya kuendesha", "Ifunike kwa tepu"], answer: 2, why: "Kasoro inaripotiwa na kurekebishwa kabla gari halijasogea." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi amepiga hatua kiasi gani
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 2, 5, 7, 9, 12, 13, 15, 17] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ukague mpango wako tena.",
    criteria: [
      { name: "Leseni sahihi", objective: "O1", notYet: "Daraja au idhini za ziada haziendani na kazi, au hazipo.", meets: "Daraja na kila idhini ya ziada vinaendana na kazi lengwa na tangazo halisi la kazi.", exceeds: "Pia anataja kazi ya pili ambayo leseni hiyohiyo ingefungua, au idhini ya ziada ya kuongeza baadaye." },
      { name: "Hatua kwa mpangilio", objective: "O2", notYet: "Hatua zinakosekana au haziko kwa mpangilio, au sheria ya mafunzo au kusubiri siku 14 vimeachwa.", meets: "Hatua zote ziko kwa mpangilio na kila moja ina tarehe lengwa, pamoja na uchunguzi wa afya, CLP, mafunzo na kusubiri siku 14.", exceeds: "Kila hatua pia inataja ofisi au tovuti inayoishughulikia." },
      { name: "Mafunzo yaliyosajiliwa", objective: "O2", notYet: "Hakuna watoa mafunzo, au watoa mafunzo hawajakaguliwa kwenye orodha.", meets: "Watoa mafunzo watatu kutoka Training Provider Registry pamoja na njia za kuwasiliana nao.", exceeds: "Inajumuisha majibu ya maswali yaliyoulizwa: gharama, ratiba, masharti ya mkataba." },
      { name: "Mpango wa kusoma", objective: "O3", notYet: "Hakuna mpango wa kusoma, au hautumii mwongozo wa jimbo.", meets: "Sehemu za kila wiki za mwongozo wa jimbo kwa kila mtihani unaohitajika, pamoja na lengo la alama za mazoezi.", exceeds: "Inajumuisha alama za mazoezi ambazo tayari amezifikia." },
      { name: "Orodha ya ukaguzi wa kabla ya safari", objective: "O4", notYet: "Orodha inaruka maeneo makuu au haiko kwa mpangilio maalum.", meets: "Inagusa kila eneo kuu kwa mpangilio maalum, pamoja na kinachokaguliwa kwenye kila sehemu.", exceeds: "Mwanafunzi anaweza kuisema kwa sauti, akionyesha sehemu kwa kidole, bila kusoma." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na mpango wa CDL unaofikia rubriki",
      "Wanafunzi wanaofaulu mitihani ya maandishi ya jimbo na kupata CLP ndani ya siku 90 (utafiti wa kufuatilia)",
      "Wanafunzi wanaojiandikisha na mtoa mafunzo aliye kwenye Training Provider Registry",
      "Wanafunzi wanaopata CDL na kuanza kazi ya udereva (ripoti za washirika na za kufuatilia)"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye intaneti ya kufungua mwongozo wa CDL wa jimbo na Training Provider Registry ya FMCSA",
      "Mwongozo wa CDL wa jimbo lako (bure kwenye tovuti ya .gov ya jimbo)",
      "Karatasi, kalamu na kalenda kwa ajili ya mpango",
      "Si lazima: picha au mfano wa lori, au gari dogo, kwa mazoezi ya kueleza ukaguzi wa kabla ya safari",
      "Kama dakika 60 hadi 75 kwa jumla, pamoja na muda wa kusoma kila wiki"
    ],
    facilitatorNotes: [
      "Katika kikundi, chapisha orodha ya ukaguzi ya jimbo na waache wanafunzi wafanye mazoezi ya kueleza ukaguzi wawili wawili.",
      "Usipendekeze shule au kampuni maalum; waonyeshe wanafunzi jinsi ya kukagua Training Provider Registry na kulinganisha.",
      "Wakumbushe wanafunzi kwamba sheria, ada na fomu za majimbo zinatofautiana; kagua tovuti ya .gov ya jimbo kila mara.",
      "Kwa wanajeshi wastaafu, waelekeze kwenye ukurasa wa jimbo wa msamaha wa mtihani wa ujuzi kwa wanajeshi; kwa wanafunzi wenye rekodi za uhalifu, waunganishe na mshauri wa kurudi katika jamii au wa ajira.",
      "Pima mpango wa mwisho kwa rubriki na umsaidie mwanafunzi kurekebisha mstari mmoja wa Bado kwa wakati."
    ]
  }
};
