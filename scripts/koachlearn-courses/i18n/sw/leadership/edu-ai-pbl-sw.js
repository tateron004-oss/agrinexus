"use strict";

// Koach Learn course (Swahili translation of leadership/edu-ai-pbl.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "edu-ai-pbl-sw",
  lang: "sw",
  translationOf: "edu-ai-pbl",
  category: "Leadership Development",
  name: "AI na Kujifunza kwa Miradi",
  skills: "Kubuni mradi wenye swali kuu, Kupanga hatua za mradi na rubriki kwa msaada wa AI, Kufundisha wanafunzi kutafiti kwa AI kwa uwajibikaji, Kuweka kanuni za AI kwa kila hatua ya mradi, Kupima mchakato na ujifunzaji wa kila mwanafunzi, Kuendesha maonyesho ya hadhara",
  outcome: "kubuni kitengo cha kujifunza kwa miradi (PBL) kwa msaada wa AI, chenye swali kuu, hatua za mradi, rubriki na kazi halisi ya mwisho inayoonyeshwa hadharani, pamoja na kanuni za wazi za AI kwa kila hatua, daftari la AI la mwanafunzi, na vituo vya ukaguzi vinavyoonyesha ujifunzaji wa kila mwanafunzi.",
  about: [
    "Kozi hii ni kwa walimu, wakufunzi wa walimu na viongozi wa shule wanaotumia au wanaotaka kutumia kujifunza kwa miradi (PBL). Katika PBL, wanafunzi wanajifunza kwa kufanya kazi kwa muda juu ya swali halisi na kuonyesha kazi yao kwa hadhira halisi. AI inabadilisha jinsi wanafunzi wanavyotafiti, wanavyounda na wanavyoshirikiana; pia inafanya iwe rahisi kuruka ujifunzaji.",
    "Sura ya 1 inatumia AI kubuni mradi: swali kuu, uzinduzi, hatua za mradi na rubriki, na inafundisha wanafunzi kutafiti kwa AI kwa uwajibikaji. Sura ya 2 inasimamia mradi: kanuni za AI kwa kila hatua, zana za timu, vituo vya ukaguzi vinavyoonyesha ujifunzaji wa kila mmoja, na kazi ya hadharani yenye maelezo ya ukweli kuhusu matumizi ya AI.",
    "Tumia zana zilizoidhinishwa kwa chochote wanafunzi wanachofanya, na usiweke taarifa za wanafunzi katika zana ambazo hazijaidhinishwa. Jaribio la maarifa linafunga kila sura na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Buni kitengo cha PBL cha wiki mbili hadi nne: swali kuu, tukio la uzinduzi, hatua nne hadi sita za mradi kila moja na kiwango cha matumizi ya AI, rubriki ya kazi ya mwisho na ya mchakato, kituo cha ukaguzi cha kila mwanafunzi katika kila hatua, kiolezo cha daftari la AI la mwanafunzi, na mpango wa maonyesho ya hadhara yenye hadhira halisi. Mwonyeshe mwenzako akague, na urekebishe sehemu moja kutokana na maoni yake.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Walimu wa darasani, wakufunzi wa walimu na viongozi wa shule wanaoendesha au wanaotaka kuendesha vitengo vya kujifunza kwa miradi (PBL) na wanahitaji kupanga kwa ajili ya wanafunzi wenye zana za AI.",
    startingPoint: "Wanaweza kupanga vitengo na miradi ya vikundi na kutoa alama kwa kazi ya mwisho. Baadhi wameshaendesha mradi. Wachache wameweka kanuni za AI kwa kila hatua ya mradi au wameunda vituo vya ukaguzi vinavyoonyesha ujifunzaji wa kila mwanafunzi.",
    gap: "Mwanafunzi anaweza kuiomba AI jibu la swali kuu kwa sekunde chache, na kazi za timu zinaweza kuficha nani alijifunza nini. Walimu wanahitaji kubuni miradi ambamo uchunguzi unabaki halisi, matumizi ya AI ni wazi na ya ukweli katika kila hatua, na ujifunzaji wa kila mwanafunzi unaonekana.",
    constraints: [
      "Muda: masomo mafupi yanayoingia katika kipindi cha maandalizi; kitengo chenyewe kinachukua wiki mbili hadi nne",
      "Vifaa: kompyuta ya shule yenye msaidizi wa AI unaoruhusiwa na wilaya",
      "Faragha: majina na alama za wanafunzi haziingii katika zana ambazo wilaya haijaidhinisha",
      "Kanuni za shule kuhusu picha, majina, rekodi na kushiriki mtandaoni zinatumika kwenye maonyesho",
      "Viwango vya mtaala vinatoka kwenye chanzo rasmi, si kwa AI"
    ],
    prerequisites: "Hakuna. Walimu wapya kwa zana za AI wanaweza kutaka kuanza na kozi ya utangulizi wa AI."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa wazo la mradi", action: "kuorodhesha mambo ya msingi ya mradi imara na kuandika swali kuu ambalo AI haiwezi kulijibu kwa urahisi", standard: "kwa swali la mahali ulipo au la kibinafsi, lililo wazi" },
    { id: "O2", condition: "Ukipewa darasa lako, somo, viwango vya mtaala na urefu wa mradi", action: "kutumia AI kuandaa rasimu ya tukio la uzinduzi, hatua nne hadi sita za mradi na rubriki yenye sehemu mbili", standard: "zikiwa zimekaguliwa dhidi ya viwango vyako na kwa ratiba inayowezekana" },
    { id: "O3", condition: "Wanafunzi wanapotafiti mada ya mradi", action: "kufundisha utaratibu wa kuchunguza, kutafuta, kuthibitisha na kutaja chanzo, pamoja na daftari la utafiti", standard: "ili kila ukweli unaotumiwa uwe umekaguliwa dhidi ya chanzo halisi" },
    { id: "O4", condition: "Ukipewa hatua za mradi wako", action: "kuweka kiwango cha matumizi ya AI kwa kila hatua na kuwapa wanafunzi kiolezo cha daftari la AI", standard: "na sababu ambayo wanafunzi wanaielewa kwa kila kiwango" },
    { id: "O5", condition: "Ukipewa mradi wa timu", action: "kupanga kituo cha ukaguzi cha kila mwanafunzi katika kila hatua ya mradi", standard: "ili kila mwanafunzi aweze kueleza kazi ya timu na sehemu yake mwenyewe" },
    { id: "O6", condition: "Mradi unapoisha", action: "kupanga maonyesho ya hadhara yenye hadhira halisi, maelezo ya matumizi ya AI na tafakari ya mwanafunzi", standard: "ukifuata kanuni za shule yako kuhusu picha, majina na kushiriki mtandaoni" }
  ],
  chapters: [
    {
      name: "Sura 1: Kubuni mradi kwa msaada wa AI",
      lessons: [
        {
          objectives: ["O1"],
          title: "Mambo ya msingi ya PBL na nafasi ya AI ndani yake",
          minutes: 5,
          goal: "Taja mambo ya msingi ya mradi imara na mahali AI inaposaidia au inapodhuru.",
          text: [
            "Miradi imara ina mambo machache ya msingi yanayofanana: swali kuu lililo wazi na lenye maana kwa wanafunzi; uchunguzi unaoendelea kwa muda; kazi halisi inayohusiana na ulimwengu wa kweli; sauti na uchaguzi wa mwanafunzi; kukosoa na kurekebisha; na kazi ya hadharani inayoonyeshwa kwa hadhira zaidi ya mwalimu.",
            "AI inaweza kumsaidia mwalimu kubuni haya yote kwa haraka zaidi, na inaweza kuwasaidia wanafunzi kutoa mawazo, kutafiti, kuandika rasimu na kupata maoni. Pia inaweza kukatiza uchunguzi: mwanafunzi anaweza kuiomba AI jibu la swali kuu kwa sekunde chache.",
            "Kwa hiyo, buni ukilizingatia hilo. Swali kuu liwe la mahali ulipo au la kibinafsi kiasi kwamba AI haiwezi kulijibu kwa urahisi (\"Tunawezaje kupunguza chakula kinachotupwa katika mkahawa wa shule yetu?\" badala ya \"Nini husababisha chakula kutupwa?\"), na ujifunzaji uonekane katika mchakato, si katika kazi ya mwisho tu."
          ],
          words: [["Kujifunza kwa miradi (PBL)", "kujifunza kwa kufanya kazi kwa muda juu ya swali halisi na kuonyesha kazi kwa hadhira. PBL ni kifupi cha Kiingereza project-based learning."], ["Swali kuu", "swali lililo wazi linaloongoza mradi mzima (kwa Kiingereza driving question)."], ["Halisi", "kinachohusiana na watu, mahali na matatizo ya kweli."]],
          slides: [
            { title: "Mambo ya msingi ya PBL", bullets: ["Swali kuu; uchunguzi unaoendelea", "Kazi halisi; sauti na uchaguzi", "Kukosoa na kurekebisha; kazi ya hadharani"] },
            { title: "AI inaweza kusaidia au kukatiza", bullets: ["Inasaidia kubuni, kutoa mawazo, kutafiti, kuandika rasimu", "Inaweza kujibu swali la jumla kwa sekunde chache"] },
            { title: "Buni ukilizingatia hilo", bullets: ["Maswali makuu ya mahali ulipo au ya kibinafsi", "Ujifunzaji unaonekana katika mchakato"] }
          ],
          tryIt: "Iombe zana ya AI ijibu swali kuu ulilowahi kutumia au kuona. Kisha liandike upya swali hilo ili liwe la mahali ulipo au la kibinafsi kiasi kwamba AI haiwezi kulijibu kwa urahisi.",
          youCanNow: "kutaja mambo ya msingi ya PBL imara na kubuni maswali makuu ambayo AI haiwezi kuyakatiza.",
          quickCheck: [
            { objective: "O1", q: "Lipi ni moja ya mambo ya msingi ya PBL?", options: ["Karatasi ya mazoezi inayosahihishwa na mwalimu tu", "Mtihani mmoja tu mwishoni", "Kukosoa na kurekebisha", "Mada anayochagua mwalimu bila uchaguzi wa mwanafunzi"], answer: 2, why: "Miradi imara ina kukosoa na kurekebisha, pamoja na sauti, uchaguzi na kazi ya hadharani." },
            { objective: "O1", q: "Swali lako kuu ni \"Nini husababisha uchafuzi wa hewa?\" Ungelibadilishaje?", options: ["Lifanye la mahali ulipo, kama \"Tunawezaje kupunguza magari yanayowashwa yakisimama nje ya shule yetu?\"", "Lifupishe", "Ongeza ukweli zaidi ndani yake", "Iombe AI ilijibu kwanza"], answer: 0, why: "Swali la mahali ulipo au la kibinafsi linaizuia AI kulijibu kwa urahisi." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Maswali makuu, uzinduzi, hatua za mradi na rubriki",
          minutes: 6,
          goal: "Tumia AI kuandaa rasimu ya swali kuu, tukio la uzinduzi, hatua za mradi na rubriki.",
          text: [
            "Ipe AI darasa, somo, viwango vya mtaala (kutoka chanzo chako rasmi), urefu wa mradi, na hali ya jamii yako (kwa maneno ya jumla). Omba machaguo matano ya swali kuu, kisha chagua moja na ulirekebishe pamoja na wanafunzi ukiweza.",
            "Omba tukio la uzinduzi linaloamsha udadisi (mgeni, kitu cha ajabu, tatizo la mahali ulipo, ziara ya mahali fulani) na hatua nne hadi sita za mradi: utafiti, mpango, rasimu ya kwanza au mfano wa majaribio, kukosoa, kurekebisha, kazi ya mwisho. Omba maarifa yanayohitajika kwa kila hatua, ili uweze kupanga masomo mafupi.",
            "Omba rubriki yenye sehemu mbili: kazi ya mwisho (maudhui na ubora) na mchakato (ushirikiano, kurekebisha, matumizi ya ushahidi). Hakikisha kila kigezo cha rubriki kinalingana na viwango vyako na kwamba ratiba inawezekana; mara nyingi AI inajaza mambo mengi mno."
          ],
          steps: ["Toa darasa, somo, viwango, urefu na hali.", "Chagua swali kuu na ulirekebishe.", "Andaa rasimu ya tukio la uzinduzi na hatua 4-6 za mradi.", "Orodhesha maarifa yanayohitajika kwa kila hatua.", "Andaa rubriki ya kazi na ya mchakato; kagua viwango na ratiba."],
          words: [["Tukio la uzinduzi", "shughuli inayoanzisha mradi na kuamsha maswali."], ["Hatua ya mradi", "kituo ambapo sehemu ya mradi inatakiwa kukamilika (kwa Kiingereza milestone)."], ["Kukosoa", "maoni yenye mpangilio kuhusu kazi inayoendelea."]],
          slides: [
            { title: "Ipe AI hali yote", bullets: ["Darasa, somo, viwango vya mtaala", "Urefu wa mradi, hali ya jamii"] },
            { title: "Andaa muundo", bullets: ["Machaguo ya swali kuu", "Tukio la uzinduzi", "Hatua 4-6 za mradi na maarifa yanayohitajika"] },
            { title: "Rubriki yenye sehemu mbili", bullets: ["Kazi: maudhui na ubora", "Mchakato: ushirikiano, kurekebisha, ushahidi", "Kagua viwango na ratiba"] }
          ],
          tryIt: "Tumia AI kuandaa rasimu ya swali kuu, tukio la uzinduzi, hatua za mradi na rubriki yenye sehemu mbili kwa mradi unaoweza kuufundisha. Rekebisha ratiba ili ilingane na kalenda yako.",
          youCanNow: "kubuni muundo wa mradi kwa haraka kwa msaada wa AI na kuukagua dhidi ya viwango na muda.",
          quickCheck: [
            { objective: "O2", q: "Rubriki ya PBL inapaswa kupima sehemu zipi mbili?", options: ["Tahajia na unadhifu", "Kazi ya mwisho na mchakato", "Mahudhurio na kazi ya nyumbani", "Kasi na urefu"], answer: 1, why: "Kupima mchakato (ushirikiano, kurekebisha, ushahidi) pamoja na kazi kunatuza ujifunzaji." },
            { objective: "O2", q: "Ratiba ya mradi ya AI inaweka hatua nane ndani ya wiki mbili. Ungefanya nini?", options: ["Kuiacha, kwa kuwa AI iliipanga", "Kuongeza hatua zaidi", "Kuondoa rubriki ili kuokoa muda", "Kuipunguza iwe mpango unaowezekana, kama hatua nne hadi sita"], answer: 3, why: "Mara nyingi AI inajaza mambo mengi mno, kwa hiyo hakikisha ratiba inawezekana." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kutafiti kwa AI: tafuta, thibitisha, taja chanzo",
          minutes: 5,
          goal: "Fundisha wanafunzi utaratibu wa utafiti unaotumia AI bila kuiamini kwa upofu.",
          text: [
            "Katika miradi, wanafunzi wanatafiti. AI inaweza kuwasaidia kuelewa mada, kutunga maswali na kupata maneno ya kutafutia, lakini inaweza kubuni ukweli na vyanzo. Fundisha utaratibu wa hatua tatu: Chunguza kwa AI (\"Niulize maswali gani kuhusu chakula kinachotupwa shuleni?\" \"Nitafute kwa maneno gani?\"); Tafuta vyanzo halisi (injini za utafutaji, hifadhidata za maktaba, mahojiano, takwimu za mahali ulipo); Thibitisha na taja chanzo (kagua kila ukweli dhidi ya angalau chanzo kimoja halisi na utaje chanzo hicho, si AI).",
            "Vyanzo vya msingi ni nguvu ya PBL: wanafunzi wanaweza kuwahoji wafanyakazi wa mkahawa wa shule, kufanya utafiti wa maoni kwa wanafunzi wenzao (bila majina), na kupima chakula kinachotupwa wenyewe. AI haiwezi kuwafanyia hayo, na hilo linaweka uchunguzi kuwa halisi.",
            "Waambie wanafunzi waweke daftari la utafiti: swali, chanzo, walichojifunza, na jinsi walivyokithibitisha."
          ],
          steps: ["Chunguza: tumia AI kutunga maswali na maneno ya kutafutia.", "Tafuta vyanzo halisi: utafutaji, hifadhidata, mahojiano, takwimu za mahali ulipo.", "Thibitisha kila ukweli dhidi ya chanzo halisi.", "Taja chanzo halisi, si AI.", "Weka daftari la utafiti."],
          words: [["Chanzo cha msingi", "ushahidi wa moja kwa moja, kama mahojiano, utafiti wa maoni au kipimo."], ["Daftari la utafiti", "kumbukumbu ya maswali, vyanzo, matokeo na ukaguzi."]],
          slides: [
            { title: "Utaratibu wa utafiti wa hatua tatu", bullets: ["Chunguza kwa AI: maswali, maneno ya kutafutia", "Tafuta vyanzo halisi", "Thibitisha na utaje chanzo halisi"] },
            { title: "Vyanzo vya msingi", bullets: ["Mahojiano, utafiti wa maoni bila majina, vipimo", "AI haiwezi kuwafanyia hayo"] },
            { title: "Daftari la utafiti", bullets: ["Swali, chanzo, walichojifunza, jinsi walivyothibitisha"] }
          ],
          tryIt: "Andika utaratibu wa utafiti na kiolezo cha daftari la utafiti kwa mradi wako. Ujaribu mwenyewe kwa swali moja la utafiti kutoka kwenye mradi huo.",
          youCanNow: "kufundisha wanafunzi kutafiti kwa AI huku wakitegemea vyanzo halisi vilivyothibitishwa.",
          quickCheck: [
            { objective: "O3", q: "Wanafunzi wanapaswa kutaja nini kama chanzo katika mradi wao?", options: ["Chanzo halisi walichokikagua", "Zana ya AI", "Hakuna kitu, kama AI ilisaidia", "Jina la injini ya utafutaji"], answer: 0, why: "Utaratibu ni kuthibitisha kila ukweli dhidi ya chanzo halisi na kutaja chanzo hicho." },
            { objective: "O3", q: "Timu inataka kujua kiasi gani cha chakula mkahawa wao unatupa. Hatua ipi ni bora zaidi?", options: ["Kuiomba AI namba", "Kunakili namba kutoka tovuti yoyote", "Kupima chakula kinachotupwa wenyewe au kuwahoji wafanyakazi wa mkahawa", "Kukisia na kuendelea"], answer: 2, why: "Vyanzo vya msingi vinaweka uchunguzi kuwa halisi na AI haiwezi kuvikusanya kwa niaba ya wanafunzi." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kubuni mradi kwa msaada wa AI",
        questions: [
          { objective: "O1", q: "Swali kuu lipi ni gumu zaidi kwa AI kulijibu kwa urahisi?", options: ["Nini husababisha chakula kutupwa?", "Chakula kinachotupwa ni nini?", "Tunawezaje kupunguza chakula kinachotupwa katika mkahawa wetu?", "Nani aligundua mbolea ya mboji?"], answer: 2, why: "Maswali ya mahali ulipo yanahitaji uchunguzi wa wanafunzi wenyewe." },
          { objective: "O2", q: "Tukio la uzinduzi ni nini?", options: ["Shughuli inayoanzisha mradi na kuamsha maswali", "Wasilisho la mwisho", "Mtihani", "Fomu ya ruhusa ya ziara ya masomo"], answer: 0, why: "Linaleta udadisi mwanzoni." },
          { objective: "O2", q: "Rubriki ya PBL yenye sehemu mbili inapima:", options: ["Kazi ya mwisho tu", "Wasilisho tu", "Mahudhurio tu", "Kazi na mchakato"], answer: 3, why: "Mchakato unaonyesha ujifunzaji njiani." },
          { objective: "O3", q: "Wanafunzi wanapaswa kutaja kama chanzo:", options: ["Zana ya AI kama chanzo chao", "Chanzo halisi walichokithibitisha", "Hakuna kitu", "Wikipedia tu"], answer: 1, why: "AI si chanzo cha kuaminika; vyanzo halisi ndivyo." },
          { objective: "O3", q: "Kipi ni chanzo cha msingi?", options: ["Muhtasari wa AI", "Jibu la chatbot", "Muhtasari wa kitabu cha kiada", "Mahojiano na wafanyakazi wa mkahawa"], answer: 3, why: "Ushahidi wa moja kwa moja unaweka uchunguzi kuwa halisi." }
        ]
      }
    },
    {
      name: "Sura 2: Kusimamia na kupima mradi",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kanuni za AI kwa kila hatua na daftari la AI la mwanafunzi",
          minutes: 5,
          goal: "Weka kiwango cha matumizi ya AI kwa kila hatua ya mradi na daftari ambalo wanafunzi wanaliweka.",
          text: [
            "Kanuni moja ya AI kwa mradi mzima ni butu mno. Weka kiwango kwa kila hatua, ukitumia kipimo cha shule yako. Kwa mfano: kutoa mawazo, AI inaruhusiwa kwa mawazo; utafiti, AI kwa maswali na maneno ya kutafutia tu; rasimu ya kwanza, hakuna AI (wanafunzi wanaonyesha fikra zao wenyewe); kukosoa, maoni ya AI yanaruhusiwa pamoja na maoni ya wenzao; kazi ya mwisho, zana za AI zinaruhusiwa kwa usanifu na kung'arisha, zikielezwa wazi.",
            "Wanafunzi wanaweka daftari la AI: tarehe, zana, walichouliza, walichotumia, na walichobadilisha. Kila kumbukumbu inachukua dakika moja na inafanya matumizi ya AI yaonekane na yawe ya ukweli.",
            "Eleza sababu. Wanafunzi wanafuata kanuni wanazozielewa: \"Rasimu ya kwanza haina AI kwa sababu tunahitaji kuona fikra zako kabla mtu yeyote hajakusaidia.\""
          ],
          steps: ["Orodhesha hatua za mradi.", "Weka kiwango cha matumizi ya AI kwa kila moja.", "Andika sababu ya kila kiwango.", "Wape wanafunzi kiolezo cha daftari la AI.", "Kagua madaftari katika kila hatua."],
          words: [["Daftari la AI", "kumbukumbu ya mwanafunzi ya lini na jinsi alivyotumia AI."], ["Kueleza wazi", "kusema waziwazi jinsi AI ilivyotumika (kwa Kiingereza disclosure)."]],
          slides: [
            { title: "Kiwango kwa kila hatua", bullets: ["Kutoa mawazo: mawazo yanaruhusiwa", "Utafiti: maswali na maneno ya kutafutia", "Rasimu ya kwanza: hakuna AI", "Kazi ya mwisho: zana zinaruhusiwa, zikielezwa wazi"] },
            { title: "Daftari la AI", bullets: ["Tarehe, zana, walichouliza", "Walichotumia, walichobadilisha"] },
            { title: "Eleza sababu", bullets: ["\"Tunahitaji kuona fikra zako kwanza\""] }
          ],
          tryIt: "Andika kiwango cha matumizi ya AI na sababu ya mstari mmoja kwa kila hatua ya mradi wako, na utengeneze kiolezo cha ukurasa mmoja cha daftari la AI kwa wanafunzi.",
          youCanNow: "kuweka kanuni za AI zilizo wazi, hatua kwa hatua, kwa mradi na kufanya matumizi ya AI yaonekane.",
          quickCheck: [
            { objective: "O4", q: "Daftari la AI la mwanafunzi linarekodi nini?", options: ["Alama ya mwisho tu", "Tarehe, zana, kilichoulizwa, kilichotumiwa na kilichobadilishwa", "Nywila ya mwanafunzi", "Kila kipindi kilichukua muda gani"], answer: 1, why: "Daftari linafanya matumizi ya AI yaonekane na yawe ya ukweli, kumbukumbu moja fupi kwa wakati." },
            { objective: "O4", q: "Mwanafunzi anauliza kwa nini rasimu ya kwanza haina AI. Ungesema nini?", options: ["Kwa sababu AI hairuhusiwi kamwe", "Kwa sababu kanuni zinasema hivyo", "Kwa sababu AI ni ya polepole mno", "Kwa sababu tunahitaji kuona fikra zako kabla mtu yeyote hajakusaidia"], answer: 3, why: "Wanafunzi wanafuata kanuni wanazozielewa, kwa hiyo toa sababu." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Vituo vya ukaguzi vinavyoonyesha ujifunzaji wa kila mwanafunzi",
          minutes: 6,
          goal: "Panga vituo vya ukaguzi vinavyoonyesha kile kila mwanafunzi alichojifunza katika mradi wa timu.",
          text: [
            "Kazi za timu zinaweza kuficha nani alijifunza nini, na AI inafanya hilo kuwa rahisi zaidi. Ongeza vituo vya ukaguzi vya kila mwanafunzi katika kila hatua: swali fupi la kutoka darasani kuhusu maarifa ya hatua hiyo, mazungumzo ya dakika mbili, tafakari iliyoandikwa, au maelezo ya mwanafunzi mmoja kuhusu sehemu moja ya kazi ya timu.",
            "Tumia AI kukusaidia kujiandaa: maswali kwa kila kituo cha ukaguzi, maswali ya mazungumzo, na maswali ya tafakari (\"Ulibadilisha nini baada ya kukosolewa na kwa nini?\"). Usiweke majina na alama za wanafunzi katika zana ambazo hazijaidhinishwa unaporekodi matokeo.",
            "Tumia zana za timu vizuri: AI inaweza kusaidia timu kugawana kazi, kupanga ratiba na kutoa maoni kuhusu rasimu dhidi ya rubriki. Lakini kila mwanafunzi anapaswa kuweza kueleza kazi ya timu na mchango wake mwenyewe."
          ],
          steps: ["Ongeza kituo cha ukaguzi cha kila mwanafunzi katika kila hatua.", "Tumia AI kuandaa maswali ya ukaguzi, ya mazungumzo na ya tafakari.", "Rekodi matokeo katika daftari lako la alama au zana iliyoidhinishwa.", "Ruhusu timu zitumie AI kwa mipango na maoni ya rasimu kama inavyoruhusiwa.", "Kila mwanafunzi anaeleza kazi na sehemu yake."],
          words: [["Kituo cha ukaguzi", "ukaguzi mfupi wa ujifunzaji wa mwanafunzi mmoja wakati wa mradi."], ["Mazungumzo", "mazungumzo mafupi ya ana kwa ana kati ya mwalimu na mwanafunzi kuhusu kazi yake."], ["Tafakari", "kuandika au kuzungumza kuhusu ulichojifunza na jinsi ulivyojifunza."]],
          slides: [
            { title: "Kazi za timu zinaweza kuficha ujifunzaji", bullets: ["Ongeza vituo vya ukaguzi vya kila mwanafunzi", "Maswali ya kutoka darasani, mazungumzo, tafakari"] },
            { title: "AI inakusaidia kujiandaa", bullets: ["Maswali ya ukaguzi na ya mazungumzo", "Maswali ya tafakari", "Kumbukumbu zinabaki katika zana zilizoidhinishwa"] },
            { title: "Zana za timu, ushahidi wa kila mmoja", bullets: ["AI kwa mipango na maoni ya rasimu", "Kila mwanafunzi anaeleza kazi na sehemu yake"] }
          ],
          tryIt: "Tumia AI kuandaa kituo cha ukaguzi cha kila mwanafunzi kwa kila hatua ya mradi (swali moja la kutoka darasani, swali moja la mazungumzo au swali moja la tafakari).",
          youCanNow: "kupima ujifunzaji wa kila mwanafunzi ndani ya mradi wa timu.",
          quickCheck: [
            { objective: "O5", q: "Kipi ni kituo cha ukaguzi cha mwanafunzi mmoja?", options: ["Mazungumzo ya dakika mbili na mwanafunzi mmoja", "Bango la mwisho la timu", "Alama ya kikundi kwa mradi mzima", "Kura ya darasa"], answer: 0, why: "Vituo vya ukaguzi vya kila mwanafunzi vinaonyesha kile kila mmoja alichojifunza, si timu tu." },
            { objective: "O5", q: "Unarekodi matokeo ya ukaguzi kwa msaada wa AI. Ungefanya nini?", options: ["Kubandika majina na alama za wanafunzi katika zana yoyote ya AI", "Kuweka matokeo kwenye tovuti ya darasa", "Kutoweka majina na alama katika zana ambazo wilaya haijaidhinisha", "Kutorekodi matokeo"], answer: 2, why: "Majina na alama za wanafunzi haziingii katika zana ambazo hazijaidhinishwa." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kazi ya hadharani, maonyesho na tafakari",
          minutes: 6,
          goal: "Panga maonyesho halisi yenye maelezo ya ukweli kuhusu AI na tafakari ya wanafunzi.",
          text: [
            "Hadhira halisi inainua ubora wa kazi: familia, wanajamii, wataalamu wa mahali ulipo, bodi ya shule au biashara inayokabiliwa na tatizo hilo. Panga maonyesho mapema na uwaalike watu kwa ujumbe mfupi (AI inaweza kuuandaa).",
            "Waombe timu waweke maelezo ya matumizi ya AI pamoja na kazi yao (\"Tulitumia AI kutoa mawazo ya usanifu na kukagua sarufi; takwimu zote za utafiti tulizikusanya sisi wenyewe\"). Maelezo ya ukweli ni sehemu ya uadilifu wa kazi, na hadhira inayaheshimu.",
            "Walinde wanafunzi: fuata kanuni za shule yako kuhusu picha, majina na rekodi, na kuhusu kushiriki kazi mtandaoni. Malizia kwa tafakari: wanafunzi walijifunza nini kuhusu mada, kuhusu kazi ya timu, na kuhusu lini AI ilisaidia au ilizuia."
          ],
          steps: ["Chagua hadhira halisi na uwaalike mapema.", "Timu zinaweka maelezo ya matumizi ya AI kwenye kazi yao.", "Fuata kanuni za shule kuhusu picha, majina na kushiriki mtandaoni.", "Fanya maonyesho.", "Malizia kwa tafakari kuhusu ujifunzaji, kazi ya timu na AI."],
          words: [["Maonyesho", "tukio ambapo wanafunzi wanawasilisha kazi yao kwa hadhira."], ["Hadhira halisi", "watu wa kweli wanaojali kazi hiyo, zaidi ya mwalimu."]],
          slides: [
            { title: "Hadhira halisi", bullets: ["Familia, wataalamu, jamii, bodi ya shule", "Alika mapema"] },
            { title: "Maelezo ya AI kwenye kila kazi", bullets: ["AI ilifanya nini na wanafunzi walifanya nini", "Ukweli ni sehemu ya uadilifu"] },
            { title: "Linda na tafakari", bullets: ["Kanuni za shule kuhusu picha na majina", "Tafakari: mada, kazi ya timu, AI"] }
          ],
          tryIt: "Kazi ya mwisho: kusanya kitengo chako cha PBL (swali kuu, tukio la uzinduzi, hatua za mradi na viwango vya AI, rubriki ya kazi na ya mchakato, vituo vya ukaguzi vya kila mwanafunzi, daftari la AI la mwanafunzi, mpango wa maonyesho). Mwonyeshe mwenzako na urekebishe sehemu moja kutokana na maoni yake.",
          youCanNow: "kuongoza kujifunza kwa miradi ambapo AI inasaidia uchunguzi halisi na ujifunzaji wa kila mwanafunzi unaonekana.",
          quickCheck: [
            { objective: "O6", q: "Ipi ni hadhira halisi kwa mradi?", options: ["Mwalimu tu", "Wataalamu wa mahali ulipo au familia wanaojali tatizo hilo", "Chatbot ya AI", "Wanafunzi wa timu hiyo hiyo"], answer: 1, why: "Watu wa kweli wanaojali kazi wanainua ubora wake." },
            { objective: "O6", q: "Mwanafamilia kwenye maonyesho anataka kuweka picha za wanafunzi mtandaoni. Ungekagua nini?", options: ["Hakuna; ni tukio la hadhara", "Kama picha ziko wazi", "Kama AI inaweza kuzihariri", "Kanuni za shule yako kuhusu picha, majina na kushiriki mtandaoni"], answer: 3, why: "Walinde wanafunzi kwa kufuata kanuni za shule kuhusu picha na kushiriki." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kusimamia na kupima mradi",
        questions: [
          { objective: "O4", q: "Kwa nini uweke kiwango cha matumizi ya AI kwa kila hatua badala ya kimoja kwa mradi mzima?", options: ["AI inakihitaji", "Ni kifupi zaidi", "Hatua tofauti zinajenga ujuzi tofauti", "Ili kuwachanganya wanafunzi"], answer: 2, why: "Rasimu ya kwanza huenda isihitaji AI wakati kung'arisha kunaweza kuitumia." },
          { objective: "O4", q: "Daftari la AI la mwanafunzi linarekodi nini?", options: ["Tarehe, zana, kilichoulizwa, kilichotumiwa na kilichobadilishwa", "Alama", "Nywila", "Maelezo ya mwalimu"], answer: 0, why: "Linafanya matumizi ya AI yaonekane na yawe ya ukweli." },
          { objective: "O5", q: "Unawezaje kuona kile kila mwanafunzi alichojifunza katika mradi wa timu?", options: ["Kutoa alama kwa kazi ya timu tu", "Kuongeza vituo vya ukaguzi vya kila mwanafunzi katika kila hatua", "Kuiuliza AI", "Kutopima kabisa"], answer: 1, why: "Ukaguzi wa kila mmoja unaonyesha ujifunzaji wa kila mmoja." },
          { objective: "O6", q: "Maelezo ya AI ya timu yanapaswa kusema nini?", options: ["AI ilifanya nini na wanafunzi walifanya nini", "Hakuna kitu", "Bei ya zana tu", "Kwamba AI haipo"], answer: 0, why: "Maelezo ya ukweli ni sehemu ya uadilifu." },
          { objective: "O6", q: "Kabla ya kuweka kazi za wanafunzi mtandaoni baada ya maonyesho, kagua:", options: ["Maoni ya AI", "Hakuna kitu", "Aina ya herufi tu", "Kanuni za shule yako kuhusu picha, majina na kushiriki mtandaoni"], answer: 3, why: "Kanuni za faragha za wanafunzi zinatumika." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI na Kujifunza kwa Miradi",
    questions: [
      { objective: "O1", q: "PBL inamaanisha wanafunzi wanajifunza kwa:", options: ["Kusoma vitabu vya kiada tu", "Kufanya kazi kwa muda juu ya swali halisi na kuonyesha kazi", "Kufanya majaribio ya kila siku tu", "Kutazama video"], answer: 1, why: "Huo ndio msingi wa PBL." },
      { objective: "O1", q: "Swali kuu linapaswa kuwa:", options: ["La siri", "Linalojibiwa kwa neno moja", "Lililo wazi na lenye maana kwa wanafunzi", "Kutoka benki ya maswali ya mitihani"], answer: 2, why: "Linaongoza uchunguzi unaoendelea." },
      { objective: "O1", q: "Kufanya swali kuu liwe la mahali ulipo kunasaidia kwa sababu:", options: ["Halihitaji utafiti", "Ni fupi zaidi", "AI haiwezi kulijibu kwa urahisi", "Linaepuka viwango vya mtaala"], answer: 2, why: "Maswali ya mahali ulipo yanahitaji uchunguzi halisi." },
      { objective: "O1", q: "Lipi ni jambo la msingi la PBL?", options: ["Kazi ya hadharani kwa hadhira halisi", "Hakuna kurekebisha", "Hadhira ni mwalimu tu", "Hakuna uchaguzi wa mwanafunzi"], answer: 0, why: "Kazi za hadharani zinainua ubora." },
      { objective: "O2", q: "Hatua za mradi ni:", options: ["Viwango vya rubriki", "Alama", "Ziara za masomo", "Vituo ambapo sehemu za mradi zinatakiwa kukamilika"], answer: 3, why: "Zinaupa mradi muundo." },
      { objective: "O2", q: "Kwa kila hatua ya mradi, AI inaweza kuorodhesha:", options: ["Majina ya wanafunzi", "Maarifa inayohitaji, kwa kupanga masomo mafupi", "Alama", "Nywila"], answer: 1, why: "Hii inasaidia kupanga ufundishaji." },
      { objective: "O2", q: "Ratiba za miradi zinazoandaliwa na AI mara nyingi:", options: ["Zinaruka hatua", "Zinaacha muda mwingi mno", "Ni kamili kila wakati", "Zinajaza mambo mengi mno"], answer: 3, why: "Zikague dhidi ya kalenda yako." },
      { objective: "O3", q: "Hatua ya 1 ya utaratibu wa utafiti ni:", options: ["Kutaja AI kama chanzo", "Kunakili jibu la AI", "Kuchunguza kwa AI: maswali na maneno ya kutafutia", "Kuruka utafiti"], answer: 2, why: "AI inasaidia kuanza utafiti, si kuumaliza." },
      { objective: "O3", q: "Kila ukweli ambao wanafunzi wanatumia unapaswa kuwa:", options: ["Umethibitishwa dhidi ya chanzo halisi", "Umetoka kwa AI", "Haujathibitishwa", "Umebuniwa"], answer: 0, why: "AI inaweza kubuni ukweli." },
      { objective: "O3", q: "Utafiti wa maoni kwa wanafunzi wenzao bila majina ni:", options: ["Muhtasari wa AI", "Chanzo cha msingi", "Mapitio ya pili", "Hauruhusiwi"], answer: 1, why: "Wanafunzi wanakusanya ushahidi wa moja kwa moja." },
      { objective: "O3", q: "Daftari la utafiti linarekodi:", options: ["Swali, chanzo, walichojifunza na jinsi kilivyothibitishwa", "Nywila", "Alama", "Oda za chakula cha mchana"], answer: 0, why: "Linaandika kumbukumbu ya utafiti halisi." },
      { objective: "O4", q: "Kwa nini rasimu ya kwanza inaweza kuwa hatua isiyo na AI?", options: ["Kwa sababu rasimu hazina umuhimu", "AI ni haramu kisheria", "Ili kuokoa pesa", "Ili kuona fikra za wanafunzi wenyewe kabla ya msaada"], answer: 3, why: "Fikra kwanza, msaada baadaye." },
      { objective: "O4", q: "Kanuni ambazo wanafunzi wanazielewa ni:", options: ["Kanuni za siri", "Kanuni ambazo sababu zake zimeelezwa", "Kanuni zinazobadilika kila siku", "Kanuni kutoka kwa AI"], answer: 1, why: "Sababu zinajenga ukubali." },
      { objective: "O5", q: "Kituo cha ukaguzi cha mwanafunzi mmoja kinaweza kuwa:", options: ["Alama ya kikundi", "Kazi ya mwisho ya timu tu", "Mazungumzo ya dakika mbili", "Hakuna kitu"], answer: 2, why: "Kinaonyesha ujifunzaji wa mwanafunzi mmoja." },
      { objective: "O5", q: "Maswali ya tafakari yanawauliza wanafunzi:", options: ["Alama zao", "Nywila zao", "Walibadilisha nini na kwa nini", "Hakuna kitu"], answer: 2, why: "Tafakari inaimarisha ujifunzaji." },
      { objective: "O5", q: "Kila mwanafunzi katika timu anapaswa kuweza:", options: ["Kueleza kazi ya timu na sehemu yake", "Kuwasilisha slaidi yake tu", "Kukaa kimya", "Kuiacha AI ieleze"], answer: 0, why: "Uelewa wa pamoja ni sehemu ya ujifunzaji." },
      { objective: "O6", q: "Hadhira halisi ni:", options: ["Hakuna mtu", "Mwalimu tu", "Zana ya AI", "Watu wa kweli wanaojali kazi hiyo"], answer: 3, why: "Hadhira halisi inainua ubora." },
      { objective: "O6", q: "Maelezo ya AI kwenye kazi yanaonyesha:", options: ["Bei ya AI", "AI ilifanya nini na wanafunzi walifanya nini", "Alama za wanafunzi", "Hakuna kitu"], answer: 1, why: "Uwazi unajenga uaminifu." },
      { objective: "O6", q: "Picha za wanafunzi kwenye maonyesho zinapaswa kufuata:", options: ["Kanuni za muuzaji", "Hakuna kanuni", "Mitindo ya mitandao ya kijamii", "Kanuni za shule kuhusu picha na majina"], answer: 3, why: "Faragha ya wanafunzi ni muhimu." },
      { objective: "O6", q: "Tafakari ya mwisho inapaswa kugusia:", options: ["Zana ya AI tu", "Alama tu", "Mada, kazi ya timu na lini AI ilisaidia au ilizuia", "Hakuna kitu"], answer: 2, why: "Wanafunzi wanajifunza kwa kutafakari yote matatu." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [0, 2, 4, 7, 8, 11, 13, 15, 16, 17]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Swali kuu na uzinduzi", objective: "O1", notYet: "Swali limefungwa au AI inaweza kulijibu, au hakuna tukio la uzinduzi.", meets: "Swali kuu lililo wazi, la mahali ulipo au la kibinafsi, na tukio la uzinduzi linaloamsha maswali.", exceeds: "Wanafunzi walisaidia kuchagua au kurekebisha swali." },
      { name: "Hatua za mradi na rubriki", objective: "O2", notYet: "Hatua chini ya nne, au rubriki inapima kazi ya mwisho tu.", meets: "Hatua nne hadi sita katika ratiba inayowezekana na rubriki ya kazi na ya mchakato, inayolingana na viwango vya mtaala.", exceeds: "Kila hatua inataja maarifa inayohitaji na somo fupi la kuyafundisha." },
      { name: "Viwango vya AI na daftari", objective: "O4", notYet: "Kanuni moja ya AI kwa mradi mzima, au hakuna daftari la AI la mwanafunzi.", meets: "Kila hatua ina kiwango cha matumizi ya AI, na kuna kiolezo cha daftari la AI la mwanafunzi.", exceeds: "Kila kiwango kina sababu iliyoandikwa kwa ajili ya wanafunzi." },
      { name: "Vituo vya ukaguzi vya kila mwanafunzi", objective: "O5", notYet: "Kazi ya timu tu ndiyo inapimwa.", meets: "Kituo cha ukaguzi cha kila mwanafunzi katika kila hatua.", exceeds: "Vituo vya ukaguzi vinatofautiana (swali la kutoka darasani, mazungumzo, tafakari) na vinalingana na kila hatua." },
      { name: "Mpango wa maonyesho", objective: "O6", notYet: "Hakuna hadhira halisi, au hakuna maelezo ya AI.", meets: "Maonyesho ya hadhara yenye hadhira halisi, maelezo ya AI na tafakari, yakifuata kanuni za shule.", exceeds: "Inataja hadhira mahususi na jinsi watakavyoalikwa." },
      { name: "Maoni ya mwenzako", objective: "O2", notYet: "Mpango haukuonyeshwa kwa mwenzako.", meets: "Mwenzako alikagua mpango na sehemu moja ilirekebishwa.", exceeds: "Anaweza kusema nini kilibadilika na kwa nini ni bora zaidi." }
    ]
  },
  evaluation: {
    results: [
      "Walimu wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Walimu wanaoendesha kitengo cha PBL chenye viwango vya matumizi ya AI ndani ya muhula unaofuata (utafiti wa kufuatilia)",
      "Maonyesho yanayofanyika yakiwa na hadhira halisi ya jamii",
      "Walimu wanaochukua kozi nyingine ya Koach Learn ya AI kwa waelimishaji"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta yenye msaidizi wa AI unaoruhusiwa na wilaya yako",
      "Viwango vyako vya mtaala kutoka chanzo rasmi na kipimo cha matumizi ya AI cha shule yako, kama kipo",
      "Mwenzako wa kukagua mpango",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Iendesheni na timu za walimu wa darasa moja au somo moja: fanyeni jaribio la awali pamoja, kisha kila timu ibuni kitengo kimoja.",
      "Tengeni muda wa ukaguzi wa mwenzako mwishoni; ikiwezekana, waunganishe walimu kutoka timu tofauti.",
      "Wakumbushe washiriki kwamba majina na alama za wanafunzi haziingii katika zana za AI ambazo hazijaidhinishwa.",
      "Viongozi wa shule wathibitishe kanuni za picha za maonyesho na kushiriki mtandaoni kabla timu hazijapanga matukio yao.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
