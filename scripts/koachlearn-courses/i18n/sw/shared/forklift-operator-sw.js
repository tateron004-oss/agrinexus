"use strict";

// Koach Learn course (Swahili translation of shared/forklift-operator.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const OSHA_178 = { name: "OSHA 29 CFR 1910.178: Magari ya viwandani yanayoendeshwa kwa nguvu (sheria ya shirikisho kuhusu forklift)", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.178" };
const OSHA_ETOOL = { name: "OSHA eTool: Magari ya viwandani yanayoendeshwa kwa nguvu (Forklift)", url: "https://www.osha.gov/etools/powered-industrial-trucks" };
const OSHA_TYPES = { name: "OSHA eTool: Aina za forklift (Daraja I hadi VII)", url: "https://www.osha.gov/etools/powered-industrial-trucks/types-fundamentals/types" };
const OSHA_PARTS = { name: "OSHA eTool: Sehemu za forklift", url: "https://www.osha.gov/etools/powered-industrial-trucks/types-fundamentals/parts" };
const OSHA_PREOP = { name: "OSHA eTool: Ukaguzi kabla ya kuendesha", url: "https://www.osha.gov/etools/powered-industrial-trucks/operating-forklift/pre-operation" };
const OSHA_LOAD = { name: "OSHA eTool: Kushughulikia mizigo", url: "https://www.osha.gov/etools/powered-industrial-trucks/operating-forklift/load-handling" };
const OSHA_TRAVEL = { name: "OSHA eTool: Kusafiri na kugeuka", url: "https://www.osha.gov/etools/powered-industrial-trucks/operating-forklift/traveling-maneuvering" };
const OSHA_DOCKS = { name: "OSHA eTool: Gati za kupakia mizigo", url: "https://www.osha.gov/etools/powered-industrial-trucks/workplace/loading-docks" };
const OSHA_TRAINING = { name: "OSHA eTool: Mafunzo ya waendeshaji", url: "https://www.osha.gov/etools/powered-industrial-trucks/training" };
const AGE_RULE = { name: "29 CFR 570.58: Wafanyakazi walio chini ya miaka 18 hawaruhusiwi kuendesha forklift (kanuni ya Idara ya Kazi ya Marekani, nakala ya Cornell LII)", url: "https://www.law.cornell.edu/cfr/text/29/570.58" };

module.exports = {
  id: "forklift-operator-sw",
  lang: "sw",
  translationOf: "forklift-operator",
  category: "Workforce Development",
  name: "Misingi ya Kuendesha Forklift",
  skills: "Kujua aina na sehemu za forklift, Kufanya ukaguzi kabla ya zamu, Kusoma bamba la data, Kushughulikia mizigo kwa usalama, Kuendesha kwa usalama karibu na watu na gati",
  outcome: "kutaja aina kuu za forklift na sehemu zake, kufanya ukaguzi kamili kabla ya zamu na kuondoa kazini forklift isiyo salama, kuamua kama mzigo ni salama kuinuliwa kwa kutumia bamba la data, kuchagua kitendo salama unapoendesha, kupanga mizigo juu, kufanya kazi gatini na kuegesha, na kupanga jinsi ya kupata mafunzo na tathmini kutoka kwa mwajiri.",
  about: [
    "Waendeshaji wa forklift husogeza bidhaa katika maghala, maduka, viwanda, mashamba na maeneo ya ujenzi. Kozi hii ni kwa wanaotafuta kazi, watu wanaorudi nyumbani kutoka gerezani, wanajeshi wastaafu (veterans) na yeyote anayetaka kuanza kazi hiyo.",
    "Utajifunza aina na sehemu za forklift, ukaguzi wa kila siku, jinsi ya kusoma bamba la data na kupima mzigo, sheria za kuendesha karibu na watu, njia za mteremko na gati za kupakia mizigo, na jinsi ya kuegesha kwa usalama.",
    "Muhimu: kozi hii inakuandaa lakini haikupi cheti. Chini ya sheria ya forklift ya OSHA (29 CFR 1910.178), mwajiri wako lazima akufundishe, akutazame ukiendesha forklift yake mahali pake pa kazi, na akutathmini kabla hujaendesha peke yako. Kozi ya mtandaoni au kadi pekee haitoshi. Lazima uwe na umri wa angalau miaka 18. Usiendeshe forklift kwa mazoezi hadi uwe katika mafunzo yanayosimamiwa.",
    "Kila somo linachukua kama dakika tano na linaishia na kazi ya \"Jaribu sasa\" kwenye karatasi. Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Tengeneza kifurushi cha kujiandaa kuendesha forklift: orodha ya ukaguzi kabla ya zamu kwa aina moja ya forklift, maamuzi matatu ya mizigo kutoka kwa mabamba ya data ya mazoezi pamoja na sababu ya kila moja, kadi ndogo ya mfukoni yenye hatua za kuegesha na za gati, na mpango wa kupata mafunzo na tathmini ya mwajiri pamoja na mstari wa kweli wa CV.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima wanaotafuta kazi za ghala, usambazaji, stoo ya duka au kiwanda: wanaotafuta kazi, watu wanaorudi nyumbani kutoka gerezani, wanajeshi wastaafu na vijana wenye umri wa miaka 18 na zaidi. Baadhi wameshawahi kuendesha forklift bila mafunzo rasmi; wengi hawajawahi.",
    startingPoint: "Wanaweza kuendesha gari au baiskeli na kufuata orodha ya kukagua. Wana ujuzi mdogo kuhusu sehemu za forklift, uthabiti, uwezo wa kubeba mzigo au sheria za OSHA. Baadhi wanaamini kwamba kadi ya mtandaoni pekee inawapa cheti.",
    gap: "Forklift zinahusika katika majeraha mengi makubwa ya maghalani, kama forklift kupinduka, watu kugongwa na kuanguka kutoka gatini. Waajiri lazima wamfundishe na kumtathmini kila mwendeshaji, na wanaajiri watu ambao tayari wanajua ukaguzi, sheria za mizigo na tabia za usalama. Wanafunzi wanahitaji ujuzi huo, na picha ya kweli ya jinsi cheti kinavyopatikana, ili wawe tayari kwa mafunzo ya mwajiri na wasilipe pesa kwa \"cheti cha papo hapo\" cha kupotosha.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; kila neno la kitaalamu linaelezwa",
      "Hakuna kuendesha forklift katika kozi hii: mazoezi ya mikono yanafanyika tu katika mafunzo ya mwajiri yanayosimamiwa",
      "Wanafunzi lazima wawe na umri wa angalau miaka 18 ili kuendesha forklift kazini",
      "Vifaa: simu au kompyuta ya maktaba kwa kurasa za OSHA; karatasi kwa orodha za kukagua",
      "Sheria hapa ni za OSHA ya shirikisho; baadhi ya majimbo yana mipango yao ya OSHA yenye sheria zilizo kali kwa kiwango sawa au zaidi"
    ],
    prerequisites: "Hakuna. Kozi \"Misingi ya Usalama Kazini (OSHA)\" ni kozi saidizi yenye manufaa."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa picha au maelezo ya forklift", action: "kutambua aina ya forklift na kuonyesha sehemu zake kuu", standard: "ukitaja angalau sehemu 6 na kazi ya kila moja" },
    { id: "O2", condition: "Ukitumia orodha ya ukaguzi", action: "kukamilisha ukaguzi kabla ya zamu na kuamua kama forklift inaweza kutumika", standard: "ukikagua kila kipengele na kuondoa kazini forklift yoyote isiyo salama" },
    { id: "O3", condition: "Ukipewa bamba la data na maelezo ya mzigo", action: "kuamua kama mzigo ni salama kuinuliwa na kueleza kwa nini", standard: "ukipata sahihi angalau maamuzi 4 kati ya 5 ya mizigo" },
    { id: "O4", condition: "Ukipewa hali ya kuendesha, kupanga mizigo juu, gati au kuegesha", action: "kuchagua kitendo salama kwa mujibu wa sheria za OSHA", standard: "ukipata sahihi angalau hali 4 kati ya 5" },
    { id: "O5", condition: "Ukitumia kile OSHA inachowataka waajiri", action: "kuandika mpango wa kupata mafunzo na tathmini, na mstari wa kweli wa CV", standard: "unaotaja wajibu wa mwajiri na usiodai cheti ambacho huna" }
  ],
  chapters: [
    {
      name: "Sura 1: Kazi, forklift na ukaguzi wa kila siku",
      lessons: [
        {
          title: "Kazi ya forklift na sheria ya mafunzo ya OSHA",
          objectives: ["O5"],
          minutes: 5,
          goal: "Eleza nani anamfundisha na kumthibitisha mwendeshaji wa forklift, na lini mafunzo ya kurudia yanahitajika.",
          text: [
            "OSHA inaziita forklift \"powered industrial trucks\" (magari ya viwandani yanayoendeshwa kwa nguvu). Sheria yake, 29 CFR 1910.178, inasema mwajiri lazima ahakikishe kila mwendeshaji ana uwezo. Hiyo inamaanisha mafunzo (darasani na mazoezi ya mikono chini ya mkufunzi mwenye sifa) na tathmini ya wewe ukiendesha mahali halisi pa kazi.",
            "Kisha mwajiri anathibitisha kwamba ulifundishwa na kutathminiwa. Rekodi inaonyesha jina lako, tarehe za mafunzo na tathmini, na nani alizifanya. Tathmini yako lazima irudiwe angalau mara moja kila miaka mitatu.",
            "Pia unapata mafunzo ya kurudia ukionekana ukiendesha bila usalama, ukipata ajali au karibu-ajali, ukipata tathmini mbaya, ukihamishiwa aina nyingine ya forklift, au mahali pa kazi pakibadilika kwa njia inayogusa usalama.",
            "Sheria za kazi za shirikisho haziruhusu mtu yeyote aliye chini ya miaka 18 kuendesha forklift kazini. Na kozi ya mtandaoni au kadi ya pochi pekee haikufanyi uwe na cheti: ni mafunzo na tathmini ya mwajiri wako tu yanayofanya hivyo."
          ],
          words: [["OSHA", "Occupational Safety and Health Administration, ofisi ya serikali ya Marekani inayoshughulikia usalama kazini."], ["Powered industrial truck", "jina la OSHA kwa forklift na mashine kama hizo zinazoinua na kusogeza mizigo."], ["Tathmini", "mtu mwenye sifa anakutazama ukiendesha mahali pa kazi ili kuamua kama uko salama."], ["Mafunzo ya kurudia", "mafunzo ya ziada ya kurekebisha tatizo au kukuandaa kwa forklift mpya au mahali papya pa kazi."], ["Karibu-ajali", "tukio ambalo hakuna aliyeumia lakini mtu angeweza kuumia."]],
          slides: [
            { title: "Nani anakupa cheti?", bullets: ["Mwajiri wako, si tovuti", "Mafunzo: darasani pamoja na mazoezi ya mikono chini ya mkufunzi", "Tathmini: wewe ukiendesha mahali halisi pa kazi"] },
            { title: "Rekodi", bullets: ["Jina lako", "Tarehe za mafunzo na tathmini", "Nani alikufundisha na kukutathmini"] },
            { title: "Lini unafundishwa tena", bullets: ["Angalau kila miaka mitatu: tathmini mpya", "Baada ya ajali, karibu-ajali au kuendesha bila usalama", "Aina mpya ya forklift au mahali pa kazi palipobadilika"] },
            { title: "Kabla hujaanza", bullets: ["Lazima uwe na umri wa angalau miaka 18", "Hakuna kuendesha kwa mazoezi bila mkufunzi"] }
          ],
          sources: [OSHA_178, OSHA_TRAINING, AGE_RULE],
          tryIt: "Kwenye karatasi, andika sentensi tatu kwa maneno yako mwenyewe: nani anamfundisha na kumtathmini mwendeshaji wa forklift, tathmini inarudiwa mara ngapi, na matukio mawili yanayomaanisha unahitaji mafunzo ya kurudia.",
          youCanNow: "kueleza nani anamfundisha na kumthibitisha mwendeshaji wa forklift, unatathminiwa mara ngapi, na lini unahitaji mafunzo ya kurudia.",
          quickCheck: [
            { objective: "O5", q: "Nani lazima akufundishe na kukutathmini kabla hujaendesha forklift kazini?", options: ["Tovuti yoyote inayouza kadi", "Mwajiri wako, mahali pako pa kazi", "Rafiki anayeendesha forklift", "Hakuna mtu"], answer: 1, why: "Sheria ya OSHA inampa mwajiri wajibu wa mafunzo na tathmini, mahali halisi pa kazi." },
            { objective: "O5", q: "Unagonga rafu kwa forklift yako. Hakuna aliyeumia. Kipi ni kweli?", options: ["Hakuna kinachohitaji kufanyika", "Unapoteza kazi moja kwa moja", "Lazima ununue kadi mpya mtandaoni", "Ni sababu ya mafunzo ya kurudia"], answer: 3, why: "Ajali au karibu-ajali ni moja ya sababu za OSHA za mafunzo ya kurudia." }
          ]
        },
        {
          title: "Aina na sehemu za forklift",
          objectives: ["O1"],
          minutes: 5,
          goal: "Tambua aina ya forklift na utaje sehemu zake kuu.",
          text: [
            "OSHA inagawa forklift katika madaraja saba. Daraja I: forklift za umeme unazokaa juu yake. Daraja II: forklift za umeme za njia nyembamba. Daraja III: forklift za umeme za mkono, pamoja na pallet jack unazotembea nyuma yake. Daraja IV na V: forklift za injini, zenye matairi magumu kwa sakafu laini za ndani (IV) au matairi ya hewa kwa nje (V). Daraja VI: matrekta ya kuvuta. Daraja VII: forklift za ardhi isiyo sawa kwa maeneo ya ujenzi na mashamba.",
            "Forklift nyingi za aina ya counterbalance zina sehemu kuu zilezile. Uma (forks) zinainua mzigo. Uma zinaning'inia kwenye carriage, inayopanda na kushuka kwenye mlingoti (mast). Kiegemeo cha mzigo (load backrest) kinazuia mzigo usianguke nyuma kuelekea kwako. Kinga ya juu (overhead guard) inakulinda dhidi ya vitu vinavyoanguka. Uzito wa kusawazisha (counterweight) ulio nyuma unasawazisha mzigo.",
            "Kwenye kiti una usukani, kidhibiti cha mwelekeo (mbele na nyuma), levers za kuinua na kuinamisha, honi, breki na mkanda wa kiti. Bamba la data (pia huitwa capacity plate au nameplate) linakuambia forklift inaweza kuinua kiasi gani."
          ],
          words: [["Mlingoti (mast)", "fremu iliyosimama ambayo uma hupanda na kushuka juu yake."], ["Carriage", "bamba lililo kwenye mlingoti linaloshika uma."], ["Kiegemeo cha mzigo (load backrest)", "fremu juu ya uma inayozuia mzigo usianguke nyuma kuelekea kwa mwendeshaji."], ["Kinga ya juu (overhead guard)", "fremu ya paa inayomlinda mwendeshaji dhidi ya vitu vinavyoanguka."], ["Uzito wa kusawazisha (counterweight)", "uzito mzito nyuma ya forklift unaosawazisha mzigo."], ["Bamba la data", "bamba lililo kwenye forklift linaloonyesha modeli yake na kiasi inachoweza kuinua."]],
          slides: [
            { title: "Madaraja saba", bullets: ["I, II, III: za umeme (za kukaa, njia nyembamba, za mkono)", "IV, V: za injini kwa ndani au nje", "VI: matrekta ya kuvuta; VII: ardhi isiyo sawa"] },
            { title: "Sehemu za kuinua", bullets: ["Uma kwenye carriage", "Carriage inasogea kwenye mlingoti", "Kiegemeo cha mzigo kinazuia mzigo usikuangukie"] },
            { title: "Sehemu za kulinda", bullets: ["Kinga ya juu juu ya kichwa chako", "Uzito wa kusawazisha nyuma", "Mkanda wa kiti, honi na taa"] },
            { title: "Bamba la data", bullets: ["Linaonyesha modeli ya forklift", "Linaonyesha inaweza kuinua kiasi gani", "Lazima liwepo na lisomeke"] }
          ],
          sources: [OSHA_TYPES, OSHA_PARTS],
          tryIt: "Chora picha rahisi ya ubavuni ya forklift ya kukaa (masanduku na mistari yanatosha). Weka majina ya angalau sehemu sita: uma, carriage, mlingoti, kiegemeo cha mzigo, kinga ya juu, uzito wa kusawazisha. Kando ya kila moja, andika mstari mmoja kuhusu kazi yake.",
          youCanNow: "kusema forklift iko katika daraja gani na kutaja sehemu zake kuu na kazi zake.",
          quickCheck: [
            { objective: "O1", q: "Sehemu ipi inazuia mzigo usianguke nyuma kuelekea kwa mwendeshaji?", options: ["Kiegemeo cha mzigo", "Uzito wa kusawazisha", "Matairi", "Honi"], answer: 0, why: "Kiegemeo cha mzigo kiko juu ya uma na kinazuia mzigo usianguke kuelekea kwako." },
            { objective: "O1", q: "Forklift iliyotengenezwa kwa ardhi isiyo sawa katika eneo la ujenzi iko katika daraja gani?", options: ["Daraja I", "Daraja III", "Daraja VII", "Daraja IV"], answer: 2, why: "Daraja VII ni forklift za ardhi isiyo sawa kwa nje." }
          ]
        },
        {
          title: "Ukaguzi kabla ya zamu",
          objectives: ["O2"],
          minutes: 6,
          goal: "Kamilisha orodha ya ukaguzi kabla ya zamu na uamue kama forklift ni salama kutumika.",
          text: [
            "OSHA inataka kila forklift ikaguliwe kabla ya kutumika, angalau mara moja kwa siku; kama forklift zinafanya kazi mchana na usiku, baada ya kila zamu. Kama kuna kitu chochote kinachoifanya isiwe salama, inaondolewa kazini hadi irekebishwe.",
            "Anza ufunguo ukiwa umezimwa. Angalia viwango vya vimiminika na kama kuna uvujaji, nyufa na mipira au minyororo ya mlingoti iliyoharibika (usiweke mikono yako ndani ya mlingoti kamwe). Kagua matairi, uma, kiegemeo cha mzigo, kinga ya juu, na kwamba bamba la data na stika za tahadhari zipo na zinasomeka. Kagua mkanda wa kiti.",
            "Forklift za umeme: angalia nyaya, viunganishi na kishikio cha betri. Forklift za gesi (propane): hakikisha tangi limefungwa vizuri, valvu ya usalama inaelekea juu na hakuna uvujaji.",
            "Kisha, forklift ikiwa inawaka, jaribu breki, usukani, mbele na nyuma, kuinua, kushusha, kuinamisha, honi, taa na kengele ya kurudi nyuma. Kama kuna kasoro: usiitumie forklift, iwekee lebo au iripoti, iandike kwenye orodha na umwambie msimamizi wako. Ni watu waliofunzwa na walioidhinishwa tu wanaofanya matengenezo."
          ],
          steps: ["Ufunguo umezimwa: vimiminika, uvujaji, mipira na minyororo (angalia, usiingize mkono).", "Matairi, uma, kiegemeo cha mzigo, kinga ya juu.", "Bamba la data na stika za tahadhari zipo na zinasomeka; mkanda wa kiti unafanya kazi.", "Ufunguo umewashwa: breki, usukani, mbele na nyuma.", "Kuinua, kushusha, kuinamisha, honi, taa, kengele ya kurudi nyuma.", "Saini orodha; ripoti na weka lebo kwenye kasoro yoyote na usiitumie forklift."],
          words: [["Ukaguzi kabla ya zamu", "ukaguzi wa forklift kabla ya kutumika katika zamu."], ["Imeondolewa kazini", "isitumike hadi irekebishwe, kwa kawaida inawekewa lebo."], ["Minyororo ya mlingoti", "minyororo inayoinua carriage na uma juu ya mlingoti."]],
          slides: [
            { title: "Lini kukagua", bullets: ["Kabla ya kutumia, angalau kila siku", "Baada ya kila zamu kama forklift zinafanya kazi mchana na usiku"] },
            { title: "Ufunguo umezimwa", bullets: ["Vimiminika, uvujaji, mipira, minyororo: angalia, usiingize mkono", "Matairi, uma, kiegemeo, kinga ya juu", "Bamba la data, stika, mkanda wa kiti"] },
            { title: "Ufunguo umewashwa", bullets: ["Breki, usukani, mbele na nyuma", "Kuinua, kushusha, kuinamisha", "Honi, taa, kengele ya kurudi nyuma"] },
            { title: "Umepata tatizo?", bullets: ["Usiitumie forklift", "Iwekee lebo, liandike, mwambie msimamizi wako", "Ni watu walioidhinishwa tu wanaoirekebisha"] }
          ],
          sources: [OSHA_PREOP, OSHA_178],
          tryIt: "Andika orodha yako mwenyewe ya ukaguzi kabla ya zamu yenye safu mbili, \"Ufunguo umezimwa\" na \"Ufunguo umewashwa\", ukitumia ukurasa wa OSHA wa ukaguzi kabla ya kuendesha. Kisha soma kisa hiki cha mazoezi: honi haifanyi kazi na uma mmoja una ufa. Andika utakachofanya, hatua kwa hatua.",
          youCanNow: "kukamilisha orodha ya ukaguzi kabla ya zamu na kuondoa kazini forklift isiyo salama.",
          quickCheck: [
            { objective: "O2", q: "Forklift lazima ikaguliwe mara ngapi kabla ya kutumika?", options: ["Mara moja kwa mwezi", "Mara moja kwa mwaka", "Ikiharibika tu", "Angalau kila siku, kabla ya kutumika"], answer: 3, why: "OSHA inataka ukaguzi kabla ya kutumika, angalau kila siku, na baada ya kila zamu kama inatumika mchana na usiku." },
            { objective: "O2", q: "Wakati wa ukaguzi wako, breki zinaonekana dhaifu. Unafanya nini?", options: ["Uitumie kwa uangalifu leo", "Uripoti, uiwekee lebo ya kuondolewa kazini na usiitumie", "Urekebishe breki mwenyewe", "Umwambie mfanyakazi mwenzako aitumie"], answer: 1, why: "Forklift isiyo salama inaondolewa kazini na kuripotiwa; ni watu walioidhinishwa tu wanaoirekebisha." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kazi, forklift na ukaguzi wa kila siku",
        questions: [
          { objective: "O5", q: "Ulisoma kozi ya forklift mtandaoni na ukapata kadi. Sasa unaweza kuendesha forklift yoyote katika kazi mpya?", options: ["Hapana; mwajiri lazima akufundishe na akutathmini kwa forklift yake na mahali pake", "Ndiyo, kadi ndiyo unachohitaji tu", "Ndiyo, kama kadi imewekwa plastiki", "Wikendi tu"], answer: 0, why: "OSHA inamtaka mwajiri amfundishe na kumtathmini kila mwendeshaji mahali pa kazi." },
          { objective: "O5", q: "Tathmini ya mwendeshaji lazima irudiwe angalau mara ngapi?", options: ["Kila mwezi", "Kila miaka kumi", "Mara moja kila miaka mitatu", "Kamwe"], answer: 2, why: "OSHA inasema tathmini ya kila mwendeshaji inafanywa angalau mara moja kila miaka mitatu." },
          { objective: "O1", q: "Uzito wa kusawazisha (counterweight) unafanya nini?", options: ["Unainua uma", "Unashika honi", "Unalinda kichwa chako", "Unasawazisha mzigo ulio mbele"], answer: 3, why: "Uzito mzito wa kusawazisha ulio nyuma unasawazisha uzito ulio kwenye uma." },
          { objective: "O1", q: "Unapata wapi kiasi ambacho forklift inaweza kuinua?", options: ["Kwenye matairi", "Kwenye bamba la data", "Kwenye honi", "Kwenye kiti"], answer: 1, why: "Bamba la data linaonyesha uwezo wa forklift wa kuinua." },
          { objective: "O2", q: "Ukaguzi upi unafanywa forklift ikiwa inawaka?", options: ["Kujaribu breki, usukani, kuinua na kuinamisha", "Kuangalia matairi", "Kusoma stika", "Kukagua viwango vya vimiminika"], answer: 0, why: "Breki, usukani, kuinua na kuinamisha ni ukaguzi wa utendaji unaofanywa forklift ikiwa inawaka." }
        ]
      }
    },
    {
      name: "Sura 2: Mizigo, kuendesha na kupata kazi",
      lessons: [
        {
          title: "Kusoma bamba la data na kupima mzigo",
          objectives: ["O3"],
          minutes: 6,
          goal: "Amua kama mzigo ni salama kuinuliwa ukitumia bamba la data na kitovu cha mzigo.",
          text: [
            "Bamba la data linaonyesha uzito wa juu kabisa ambao forklift inaweza kuinua kwa kitovu fulani cha mzigo (load center). Kitovu cha mzigo ni umbali kutoka sehemu ya mbele ya uma hadi katikati (kitovu cha uzito) ya mzigo. Forklift nyingi zimepimwa kwa kitovu cha mzigo cha inchi 24 (24-inch). Kama katikati ya mzigo iko mbali zaidi ya hapo, au forklift ina kifaa cha ziada (attachment), uwezo salama ni mdogo zaidi: angalia bamba na umuulize msimamizi wako.",
            "Forklift inasawazika kama bembea ya mbao (seesaw) juu ya magurudumu yake ya mbele. Mzigo kwenye uma uko upande mmoja; forklift na uzito wa kusawazisha viko upande mwingine. Uzito mwingi mno, mzigo ulio mbali mno, au mzigo ulioinuliwa na kuinamishwa mbele unaweza kuipindua forklift mbele. Kugeuka kwa kasi mno kunaweza kuipindua ubavuni.",
            "Inua mizigo iliyo imara tu na iliyo ndani ya uwezo. Weka mzigo katikati ya uma na uingize uma chini yake angalau theluthi mbili ya urefu wa mzigo. Inua kidogo, inamisha mlingoti nyuma kidogo ili mzigo uegemee kiegemeo, na uuweke chini."
          ],
          steps: ["Jua uzito wa mzigo (lebo, karatasi au uliza).", "Soma bamba la data: uwezo na kitovu cha mzigo.", "Katikati ya mzigo iko ndani ya kitovu cha mzigo? Uzito uko chini ya uwezo?", "Mzigo ni imara, umefungwa na haujaharibika?", "Kama ndiyo: uweke katikati, uma angalau theluthi mbili chini, inua kidogo, inamisha nyuma. Kama hapana au huna uhakika: simama na uulize."],
          words: [["Uwezo (capacity)", "uzito wa juu kabisa ambao forklift inaweza kuinua kwa usalama, unaoonyeshwa kwenye bamba la data."], ["Kitovu cha mzigo (load center)", "umbali kutoka mbele ya uma hadi katikati ya mzigo."], ["Kitovu cha uzito", "sehemu ambapo uzito wa kitu umesawazika."], ["Kupinduka", "forklift inapoanguka mbele au ubavuni."], ["lb", "pauni, kipimo cha uzito cha Marekani (lb 1 ni kama kilo 0.45)."]],
          slides: [
            { title: "Bamba la data linakuambia", bullets: ["Uwezo: kiasi cha juu forklift inachoweza kuinua", "Kwa kitovu cha mzigo, mara nyingi inchi 24", "Mzigo ulio mbali zaidi = inaweza kuinua kidogo"] },
            { title: "Kama bembea ya mbao", bullets: ["Magurudumu ya mbele ndiyo egemeo", "Mzigo upande mmoja, uzito wa kusawazisha upande mwingine", "Mzito mno au mbali mno: inapinduka"] },
            { title: "Uinue vizuri", bullets: ["Mzigo imara, ndani ya uwezo", "Katikati, uma theluthi mbili chini", "Inua kidogo, inamisha nyuma, uweke chini"] },
            { title: "Huna uhakika? Simama uulize", bullets: ["Uzito usiojulikana", "Mzigo ulioharibika au unaoegemea", "Vifaa vya ziada vinabadilisha uwezo"] }
          ],
          sources: [OSHA_LOAD, OSHA_178],
          tryIt: "Mazoezi tu, namba za kubuni. Bamba la forklift linasema 4,000 lb kwa kitovu cha mzigo cha inchi 24. Amua ndiyo au hapana, pamoja na sababu: (1) paleti ya 3,200 lb, katikati na imefungwa; (2) sanduku la 4,600 lb; (3) mzigo wa 2,500 lb unaoegemea na uliochanika; (4) mzigo wa 3,000 lb ambao katikati yake iko mbali kupita inchi 24. Andika utakachofanya kwa kila mmoja.",
          youCanNow: "kusoma bamba la data na kuamua kama mzigo ni salama kuinuliwa, na kusema kwa nini.",
          quickCheck: [
            { objective: "O3", q: "Bamba linasema 5,000 lb kwa inchi 24. Mzigo ni 5,800 lb. Unafanya nini?", options: ["Uuinue polepole", "Umweke mtu nyuma kama uzito wa ziada", "Usiuinue; mwambie msimamizi wako", "Uuinue juu ili usawazike"], answer: 2, why: "Usiinue kamwe zaidi ya uwezo uliopimwa; kubeba watu wa ziada hakuruhusiwi kamwe." },
            { objective: "O3", q: "Uma zinapaswa kuingia chini ya mzigo kiasi gani?", options: ["Ncha tu", "Angalau theluthi mbili ya urefu wa mzigo", "Hadi kwenye paleti inayofuata nyuma yake", "Haijalishi"], answer: 1, why: "Mwongozo wa OSHA ni angalau theluthi mbili ya urefu wa mzigo, bila kugonga mizigo iliyo nyuma yake." }
          ]
        },
        {
          title: "Kuendesha, gati na kuegesha kwa usalama",
          objectives: ["O4"],
          minutes: 6,
          goal: "Chagua kitendo salama unapoendesha, ukiwa gatini na unapoegesha.",
          text: [
            "Safiri mzigo ukiwa chini na umeinamishwa nyuma, kamwe usiwe umeinuliwa au kuinamishwa mbele. Endesha kwa kasi inayokuwezesha kusimama salama, na upunguze kasi kwenye sakafu zenye maji, kwenye kona na kwenye njia panda za ndani (cross aisles). Piga honi kwenye njia panda na kona usizoona upande wa pili. Tazama unakoenda. Kama mzigo unazuia unachokiona, endesha kurudi nyuma. Kaa kama urefu wa forklift tatu nyuma ya forklift nyingine.",
            "Watu: hakuna anayesimama wala kupita chini ya uma zilizoinuliwa, zikiwa na mzigo au tupu. Hakuna kubeba watu isipokuwa forklift ina mahali salama kwao na wameruhusiwa. Usiendeshe kamwe kuelekea mtu aliyesimama mbele ya ukuta au rafu.",
            "Njia za mteremko: nenda polepole. Ukiwa na mzigo, weka mzigo upande wa juu wa mteremko: endesha mbele unapopanda na kurudi nyuma unaposhuka. Usigeuke kamwe kwenye mteremko. Gati: kabla ya kuingia ndani ya trela, breki za trela lazima ziwe zimefungwa na magurudumu yake ya nyuma yamewekewa kabari; kagua sakafu ya trela kama ina mapengo au sehemu dhaifu; kaa mbali na ukingo wa gati.",
            "Kuegesha: ukiiacha forklift (au uko futi 25 au zaidi mbali nayo, au huioni), shusha uma hadi chini kabisa, weka vidhibiti katika neutral, izime na ufunge breki; zuia magurudumu ukiwa kwenye mteremko. Kama forklift ya kukaa inaanza kupinduka: usiruke. Baki kitini ukiwa umefunga mkanda, shika usukani, kaza miguu na uegemee upande ulio kinyume na inakoangukia."
          ],
          steps: ["Mzigo chini, umeinamishwa nyuma; honi kwenye njia panda; tazama unakoendesha.", "Mzigo unazuia unachokiona: endesha kurudi nyuma.", "Mteremko: mzigo upande wa juu, usigeuke kwenye mteremko.", "Gati: breki za trela zimefungwa, magurudumu yamewekewa kabari, sakafu imekaguliwa.", "Kuegesha: uma chini, neutral, imezimwa, breki imefungwa.", "Inapinduka: baki ndani, mkanda umefungwa, shika, egemea upande wa pili."],
          words: [["Njia panda ya ndani (cross aisle)", "mahali ambapo njia mbili ndani ya ghala zinakutana, kama makutano ya barabara."], ["Kabari ya gurudumu (wheel chock)", "kipande cha kuzuia kinachowekwa dhidi ya gurudumu ili trela isiweze kusogea."], ["Ukingo wa gati", "ukingo wa gati la kupakia ambapo sakafu inaishia na kuna kina."], ["Imeachwa bila mtu", "imeachwa peke yake: uko futi 25 au zaidi mbali na forklift, au huioni."], ["Futi (feet)", "kipimo cha urefu cha Marekani; futi 25 ni kama mita 7.6."]],
          slides: [
            { title: "Kuendesha", bullets: ["Mzigo chini na umeinamishwa nyuma", "Honi kwenye njia panda na kona zisizoonekana", "Huoni mbele kwa sababu ya mzigo? Endesha kurudi nyuma"] },
            { title: "Watu", bullets: ["Hakuna mtu chini ya uma zilizoinuliwa", "Hakuna kubeba watu", "Usimbane mtu kamwe dhidi ya ukuta au rafu"] },
            { title: "Mteremko na gati", bullets: ["Mzigo upande wa juu; usigeuke kwenye mteremko", "Breki za trela zimefungwa na magurudumu yamewekewa kabari", "Kagua sakafu ya trela; kaa mbali na ukingo"] },
            { title: "Kuegesha na kupinduka", bullets: ["Uma chini, neutral, imezimwa, breki imefungwa", "Inapinduka: baki ndani, mkanda umefungwa, egemea upande wa pili"] }
          ],
          sources: [OSHA_TRAVEL, OSHA_DOCKS, OSHA_178],
          tryIt: "Tengeneza kadi ya mfukoni yenye orodha mbili: \"Kabla sijaingia ndani ya trela\" na \"Ninapoegesha\". Kisha jibu kisa hiki cha mazoezi kwa maandishi: umebeba mzigo mrefu unaozuia unachokiona na lazima ushuke mteremko. Unafanya nini?",
          youCanNow: "kuchagua kitendo salama unapoendesha, ukiwa gatini, kwenye mteremko, unapoegesha na kama forklift inaanza kupinduka.",
          quickCheck: [
            { objective: "O4", q: "Mfanyakazi mwenzako anataka kusimama chini ya uma zako zilizoinuliwa ili kurekebisha lebo. Unasema nini?", options: ["\"Endelea, fanya haraka.\"", "\"Kama uma ziko tupu tu.\"", "\"Kama umevaa kofia ngumu tu.\"", "\"Hapana. Hakuna anayepita chini ya uma zilizoinuliwa. Nitazishusha kwanza.\""], answer: 3, why: "OSHA inakataza mtu yeyote kusimama au kupita chini ya uma zilizoinuliwa, zikiwa na mzigo au tupu." },
            { objective: "O4", q: "Forklift yako ya kukaa inaanza kupinduka. Unafanya nini?", options: ["Baki kitini, mkanda umefungwa, shika usukani na uegemee upande wa pili", "Ruka nje haraka", "Shika mlingoti", "Inua uma"], answer: 0, why: "Kwenye forklift ya kukaa, kubaki ndani ukiwa umefunga mkanda ndiyo njia ya kuepuka kubanwa." }
          ]
        },
        {
          title: "Kupata mafunzo na kuajiriwa kama mwendeshaji wa forklift",
          objectives: ["O5"],
          minutes: 5,
          goal: "Andika mpango wa kupata mafunzo na tathmini, na mstari wa kweli wa CV.",
          text: [
            "Waajiri wengi wa maghala, usambazaji na maduka huajiri watu kwa kazi za jumla za ghala kisha huwafundisha kuendesha forklift. Baadhi ya mawakala wa ajira, vituo vya ajira na vyuo vya jamii (community colleges) pia hutoa mafunzo ya forklift yenye mazoezi ya mikono. Uliza kama yanajumuisha kuendesha chini ya mkufunzi na tathmini ya vitendo.",
            "Kumbuka: popote unapofundishwa, kila mwajiri mpya lazima ahakikishe umefundishwa na kutathminiwa kwa forklift zake na mahali pake pa kazi kabla hujaendesha peke yako. Mafunzo ya awali yanasaidia, na huenda mwajiri asihitaji kurudia mada ulizojifunza tayari na ukatathminiwa.",
            "Kwenye CV yako, kuwa mkweli. Kama umemaliza kozi hii, andika kwamba umekamilisha mafunzo ya maarifa ya usalama wa forklift. Kama mwajiri alikufundisha na kukutathmini, andika aina za forklift na mwaka. Usiandike kamwe \"certified\" (una cheti) kama huna.",
            "Kwenye usaili, zungumzia ukaguzi kabla ya zamu, bamba la data na usalama wa watembea kwa miguu. Waajiri wanataka waendeshaji ambao kwanza ni waangalifu, kisha wepesi."
          ],
          steps: ["Orodhesha waajiri au programu tatu za karibu zinazofundisha waendeshaji wa forklift (maeneo ya kazi, kituo cha ajira, chuo cha jamii).", "Uliza kila mmoja: yanajumuisha kuendesha chini ya usimamizi na tathmini?", "Andika mstari wa kweli wa CV kwa ulichofanya hadi sasa.", "Fanya mazoezi ya jibu la sekunde 30: \"Unakaaje salama kwenye forklift?\""],
          words: [["Wakala wa ajira (staffing agency)", "kampuni inayowatafutia wafanyakazi kazi katika biashara nyingine."], ["Kituo cha ajira (workforce center)", "ofisi ya umma (mara nyingi huitwa American Job Center) inayowasaidia watu kupata kazi na mafunzo."]],
          slides: [
            { title: "Mafunzo yanafanyika wapi", bullets: ["Waajiri wanaoajiri kisha kufundisha", "Vituo vya ajira na vyuo vya jamii", "Uliza: kuendesha chini ya usimamizi na tathmini?"] },
            { title: "Kila mwajiri anakutathmini", bullets: ["Kwa forklift zake na mahali pake pa kazi", "Kabla hujaendesha peke yako"] },
            { title: "Kuwa mkweli kwenye CV yako", bullets: ["Kozi: mafunzo ya maarifa ya usalama wa forklift", "Umefundishwa na mwajiri: aina za forklift na mwaka", "Usidai kamwe \"certified\" kama huna cheti"] }
          ],
          sources: [OSHA_178, OSHA_TRAINING],
          tryIt: "Andika mpango wako: mahali patatu panapoweza kukufundisha, swali utakalouliza kila mahali, mstari mmoja wa kweli wa CV, na jibu lako la sekunde 30 kwa \"Unakaaje salama kwenye forklift?\" Soma jibu hilo kwa sauti.",
          youCanNow: "kuandika mpango wa kupata mafunzo na tathmini ya forklift na kueleza mafunzo yako kwa ukweli kwenye CV.",
          quickCheck: [
            { objective: "O5", q: "Umemaliza kozi hii lakini hakuna mwajiri aliyekutathmini. Mstari upi wa CV ni wa kweli?", options: ["\"Mwendeshaji wa forklift mwenye cheti, madaraja yote\"", "\"Nimekamilisha mafunzo ya maarifa ya usalama wa forklift (Koach Learn), 2026\"", "\"Dereva wa forklift mwenye leseni ya OSHA\"", "\"Mtaalamu wa forklift, miaka 10\""], answer: 1, why: "Unasema hasa ulichofanya, bila kudai cheti ambacho huna." },
            { objective: "O5", q: "Unapaswa kuuliza nini programu ya mafunzo ya forklift?", options: ["Kama inajumuisha kuendesha chini ya usimamizi na tathmini ya vitendo", "Kama inatoa kadi nzuri", "Kama unaweza kuruka sehemu ya mazoezi ya mikono", "Kama ndiyo ya bei rahisi zaidi mtandaoni"], answer: 0, why: "Mafunzo ya OSHA yanajumuisha mazoezi ya mikono na tathmini, kwa hiyo hakikisha programu inayo." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Mizigo, kuendesha na kupata kazi",
        questions: [
          { objective: "O3", q: "Kitovu cha mzigo ni nini?", options: ["Katikati ya ghala", "Katikati ya usukani", "Umbali kutoka sehemu ya mbele ya uma hadi katikati ya mzigo", "Urefu wa mlingoti"], answer: 2, why: "Kitovu cha mzigo kinapimwa kutoka sehemu ya mbele ya uma hadi kitovu cha uzito cha mzigo." },
          { objective: "O3", q: "Mzigo unaegemea na kifuniko chake kimechanika. Unafanya nini?", options: ["Uuinue haraka", "Uuinue juu ili uone", "Uusukume kwa uma", "Usiuinue; uripoti ili urekebishwe au upangwe upya"], answer: 3, why: "Mizigo iliyo imara na iliyopangwa kwa usalama tu ndiyo inayopaswa kushughulikiwa." },
          { objective: "O4", q: "Mzigo wako unazuia unachokiona mbele. Unasafiri vipi?", options: ["Kurudi nyuma, ukitazama unakoenda", "Mbele, mzigo ukiwa umeinuliwa", "Mbele, kwa kasi zaidi", "Mfanyakazi mwenzako akiwa amepanda juu ya uma"], answer: 0, why: "Kama mzigo unazuia unachokiona, safiri mzigo ukiwa nyuma yako (kurudi nyuma)." },
          { objective: "O4", q: "Kabla ya kuingia ndani ya trela ya lori gatini, nini lazima kifanyike?", options: ["Hakuna", "Kufungua madirisha ya nyuma ya trela", "Kufunga breki za trela, kuweka kabari kwenye magurudumu yake na kukagua sakafu", "Kupiga honi mara tatu"], answer: 2, why: "OSHA inataka breki zifungwe, magurudumu yawekewe kabari, na sakafu ya trela ikaguliwe kabla ya kuingia." },
          { objective: "O5", q: "Unahamia kazi inayotumia aina nyingine ya forklift. Kipi ni kweli?", options: ["Unahitaji mafunzo na tathmini kwa aina hiyo mpya", "Kadi yako ya zamani inashughulikia kila kitu", "Unaweza kujifunza peke yako baada ya saa za kazi", "Hakuna kinachobadilika"], answer: 0, why: "Aina nyingine ya forklift ni sababu ya mafunzo na tathmini kwa forklift hiyo." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Misingi ya Kuendesha Forklift",
    questions: [
      { objective: "O5", q: "Chini ya sheria ya OSHA, nani anathibitisha kwamba mwendeshaji wa forklift alifundishwa na kutathminiwa?", options: ["Mwendeshaji", "Tovuti", "Mwajiri", "Mtengenezaji wa forklift"], answer: 2, why: "Mwajiri anathibitisha mafunzo na tathmini ya mwendeshaji." },
      { objective: "O5", q: "Umri wa chini kabisa wa kuendesha forklift kazini ni upi?", options: ["16", "18", "14", "21"], answer: 1, why: "Sheria za kazi za shirikisho zinakataza wafanyakazi walio chini ya miaka 18 kuendesha forklift." },
      { objective: "O5", q: "Kipi ni sababu ya mafunzo ya kurudia?", options: ["Karibu-ajali na mtembea kwa miguu", "Sare mpya", "Nyongeza ya mshahara", "Sikukuu"], answer: 0, why: "Ajali au karibu-ajali ni moja ya sababu za OSHA za mafunzo ya kurudia." },
      { objective: "O1", q: "Kinga ya juu (overhead guard) inafanya nini?", options: ["Inashika mzigo", "Inasawazisha forklift", "Inaongoza forklift", "Inamlinda mwendeshaji dhidi ya vitu vinavyoanguka"], answer: 3, why: "Kinga ya juu inamkinga mwendeshaji dhidi ya vitu vinavyoanguka kutoka juu." },
      { objective: "O1", q: "Uma zinaning'inia kwenye sehemu ipi?", options: ["Uzito wa kusawazisha", "Carriage", "Matairi", "Kiti"], answer: 1, why: "Uma zinaning'inia kwenye carriage, inayopanda na kushuka kwenye mlingoti." },
      { objective: "O1", q: "Pallet jack ya umeme unayotembea nyuma yake iko katika daraja gani?", options: ["Daraja VII", "Daraja V", "Daraja III", "Daraja VI"], answer: 2, why: "Daraja III linajumuisha forklift za umeme za mkono, pamoja na zile unazotembea nyuma yake." },
      { objective: "O2", q: "Forklift lazima ikaguliwe lini?", options: ["Kabla ya kutumika, angalau kila siku", "Mara moja kwa mwaka", "Baada ya ajali tu", "Ikiwa mpya tu"], answer: 0, why: "OSHA inataka ukaguzi kabla ya kutumika, angalau kila siku." },
      { objective: "O2", q: "Kwa nini usiweke mikono yako ndani ya mlingoti kukagua minyororo?", options: ["Ni mchafu", "Si sehemu ya ukaguzi", "Msimamizi ndiye anafanya hivyo", "Mlingoti unaweza kusogea na kuiponda mikono yako"], answer: 3, why: "Sehemu za mlingoti zinazosogea zinaweza kuponda mikono; mwongozo wa OSHA ni kuangalia, au kutumia fimbo kukagua jinsi minyororo ilivyokazwa." },
      { objective: "O2", q: "Bamba la data halipo kwenye forklift. Unafanya nini?", options: ["Ubashiri uwezo", "Uripoti; bamba lazima liwepo na lisomeke", "Utumie picha ya simu ya bamba la forklift nyingine", "Upuuze"], answer: 1, why: "Mabamba ya majina na alama lazima zibaki mahali pake na zisomeke; ripoti kabla ya kutumia." },
      { objective: "O2", q: "Nani anaweza kurekebisha forklift?", options: ["Watu waliofunzwa na walioidhinishwa tu", "Mwendeshaji yeyote", "Yeyote mwenye vifaa", "Mfanyakazi mpya kabisa"], answer: 0, why: "Ni watu walioidhinishwa na waliofunzwa tu wanaopaswa kufanya matengenezo." },
      { objective: "O3", q: "Bamba linasema 3,000 lb kwa inchi 24. Mzigo upi unaweza kuuinua (mazoezi tu)?", options: ["Sanduku la 3,500 lb", "Mzigo wa 3,000 lb ambao katikati yake iko inchi 40 mbele", "Mzigo wa 1,000 lb uliochanika na unaoegemea", "Paleti ya 2,400 lb iliyofungwa, katikati"], answer: 3, why: "Uko chini ya uwezo, ni imara na uko katikati ndani ya kitovu cha mzigo kilichopimwa." },
      { objective: "O3", q: "Nini kinatokea katikati ya mzigo ikiwa mbali zaidi ya kitovu cha mzigo kilichopimwa?", options: ["Forklift inaweza kuinua zaidi", "Uwezo salama unapungua", "Hakuna kinachobadilika", "Forklift inaenda kwa kasi zaidi"], answer: 1, why: "Kitovu cha mzigo kilicho mbali zaidi kinaifanya forklift isiwe imara, kwa hiyo inaweza kuinua kidogo." },
      { objective: "O3", q: "Baada ya kuinua mzigo kidogo, unafanya nini kabla ya kusafiri?", options: ["Kuinamisha mlingoti nyuma kidogo ili mzigo uegemee kiegemeo", "Kuuinamisha mbele", "Kuuinua juu kadiri unavyoweza", "Kumwacha mtu auushike"], answer: 0, why: "Kuinamisha nyuma kidogo kunatuliza mzigo dhidi ya kiegemeo." },
      { objective: "O4", q: "Unapaswa kubeba mzigo vipi unapoendesha?", options: ["Juu, ili uone", "Umeinamishwa mbele", "Chini na umeinamishwa nyuma", "Mtu akiushika"], answer: 2, why: "Mzigo ulio chini na umeinamishwa nyuma unaiweka forklift imara; usisafiri kamwe mzigo ukiwa juu au umeinamishwa mbele." },
      { objective: "O4", q: "Unafika kwenye njia panda ambapo huwezi kuona upande wa pili wa kona. Unafanya nini?", options: ["Kuongeza kasi upite haraka", "Kupunguza kasi na kupiga honi", "Kuinua uma", "Kufumba macho na kwenda"], answer: 1, why: "OSHA inasema punguza kasi na upige honi mahali usipoweza kuona." },
      { objective: "O4", q: "Unashusha forklift yenye mzigo kwenye mteremko. Kwa njia ipi?", options: ["Mbele, mzigo ukiwa mbele", "Kwa ubavu", "Kugeuka katikati ya mteremko", "Kurudi nyuma, ili mzigo ubaki upande wa juu"], answer: 3, why: "Weka mzigo upande wa juu: mbele unapopanda, kurudi nyuma unaposhuka, na usigeuke kamwe kwenye mteremko." },
      { objective: "O4", q: "Unaiacha forklift yako kwenda mapumzikoni. Lazima ufanye nini?", options: ["Kushusha uma, kuweka neutral, kuizima na kufunga breki", "Kuiacha ikiwaka ili iwe tayari", "Kuacha uma juu", "Kumwomba mfanyakazi mwenzako aiangalie"], answer: 0, why: "Forklift iliyoachwa bila mtu ina uma chini, vidhibiti katika neutral, imezimwa na breki imefungwa." },
      { objective: "O4", q: "Unapaswa kukaa umbali gani nyuma ya forklift nyingine?", options: ["Futi moja", "Karibu kadiri iwezekanavyo", "Kama urefu wa forklift tatu", "Haijalishi"], answer: 2, why: "OSHA inaomba umbali wa kama urefu wa forklift tatu kati ya forklift." },
      { objective: "O5", q: "Tovuti inasema video yake ya mtandaoni inakufanya \"OSHA certified\" kwa dakika 20. Kipi ni kweli?", options: ["Inachukua nafasi ya mafunzo ya mwajiri", "OSHA inauza kadi hiyo", "Inatosha kwa kila kazi", "Mafunzo ya mikono na tathmini ya mwajiri bado yanahitajika"], answer: 3, why: "Ni mafunzo na tathmini ya mwajiri mahali pa kazi tu yanayotimiza sheria ya OSHA." },
      { objective: "O1", q: "Bamba la data linaonyesha nini?", options: ["Modeli ya forklift na kiasi inachoweza kuinua", "Jina la mwendeshaji", "Anwani ya ghala", "Bei ya mafuta"], answer: 0, why: "Bamba la data linaonyesha modeli na taarifa za uwezo." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 3, 6, 8, 10, 11, 13, 15, 18] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ukague tena.",
    criteria: [
      { name: "Orodha ya ukaguzi", objective: "O2", notYet: "Inakosa ukaguzi wa ufunguo umezimwa au umewashwa, au haina hatua kwa forklift isiyo salama.", meets: "Inajumuisha kila kipengele cha ufunguo umezimwa na umewashwa kwa aina ya forklift iliyochaguliwa na inasema la kufanya kukiwa na kasoro.", exceeds: "Inaongeza ukaguzi wa ziada kwa forklift za umeme au za gesi (propane)." },
      { name: "Sehemu zimetajwa", objective: "O1", notYet: "Sehemu zilizotajwa ni chini ya sita, au kazi zake si sahihi.", meets: "Angalau sehemu sita zimetajwa na kazi ya kila moja, pamoja na daraja la forklift.", exceeds: "Anaeleza jinsi uzito wa kusawazisha na kiegemeo cha mzigo vinavyomweka mwendeshaji salama." },
      { name: "Maamuzi ya mizigo", objective: "O3", notYet: "Mzigo uliozidi uwezo au usio imara umewekwa alama ya salama.", meets: "Maamuzi yote matatu ya mizigo ni sahihi, kila moja na sababu inayotumia bamba la data.", exceeds: "Anataja lini kumuuliza msimamizi, kama uzito usiojulikana au kifaa cha ziada." },
      { name: "Kadi ya kuendesha, gati na kuegesha", objective: "O4", notYet: "Inakosa ukaguzi wa gati au hatua moja ya kuegesha.", meets: "Inaorodhesha hatua za gati (breki, kabari, sakafu) na hatua zote nne za kuegesha.", exceeds: "Inaongeza sheria za mteremko, watembea kwa miguu na kupinduka." },
      { name: "Mpango wa mafunzo na mstari wa CV", objective: "O5", notYet: "Anadai kuwa na cheti, au anasema mafunzo ya mwajiri hayahitajiki.", meets: "Anataja mahali patatu pa kufundishwa, anasema mwajiri lazima amtathmini, na anatoa mstari wa kweli wa CV.", exceeds: "Anajumuisha jibu la usalama la sekunde 30 alilolifanyia mazoezi kwa ajili ya usaili." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kifurushi cha kujiandaa kinachofikia rubriki",
      "Wanafunzi wanaoanza mafunzo ya forklift ya mwajiri au ya programu ndani ya siku 60 (utafiti wa ufuatiliaji)",
      "Wanafunzi walioajiriwa katika kazi za ghala au forklift (ripoti za washirika na za ufuatiliaji)",
      "Waajiri washirika wanaripoti wafanyakazi wapya wanaofaulu tathmini yao ya vitendo mara ya kwanza"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye intaneti kwa kurasa za OSHA eTool",
      "Karatasi na kalamu kwa mchoro, orodha ya ukaguzi na kadi ya mfukoni",
      "Si lazima: picha zilizochapishwa za forklift na mfano wa bamba la data",
      "Kama dakika 60 kwa jumla"
    ],
    facilitatorNotes: [
      "Weka wazi mapema: kozi hii haimpi mtu yeyote cheti; mwajiri ndiye anayefundisha na kutathmini.",
      "Usiwaruhusu wanafunzi kufanya mazoezi kwenye forklift halisi kama sehemu ya kozi hii. Kama programu yako ina forklift ya mafunzo, mazoezi ya mikono yanafanyika tu na mkufunzi mwenye sifa.",
      "Tumia mabamba ya data yaliyochapishwa yenye namba za kubuni kwa mazoezi ya mizigo.",
      "Waangalie wanafunzi walio chini ya miaka 18; wanaweza kusoma kozi lakini hawawezi kuendesha forklift kazini.",
      "Pima kifurushi cha kujiandaa kwa rubriki na upitie mstari mmoja wa Bado kwa wakati mmoja."
    ]
  }
};
