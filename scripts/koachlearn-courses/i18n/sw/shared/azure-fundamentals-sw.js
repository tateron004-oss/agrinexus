"use strict";

// Koach Learn course (Swahili translation of shared/azure-fundamentals.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const CERT = { name: "Microsoft Learn: Microsoft Certified: Azure Fundamentals", url: "https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/" };
const STUDY = { name: "Microsoft Learn: Mwongozo wa kujisomea wa Mtihani AZ-900", url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900" };
const FREE = { name: "Microsoft Azure: Huduma za bure", url: "https://azure.microsoft.com/en-us/pricing/free-services" };
const CALC = { name: "Microsoft Azure: Kikokotoo cha bei (pricing calculator)", url: "https://azure.microsoft.com/en-us/pricing/calculator/" };

module.exports = {
  id: "azure-fundamentals-sw",
  lang: "sw",
  translationOf: "azure-fundamentals",
  category: "Undeserved Community",
  name: "Misingi ya Microsoft Azure",
  skills: "Kueleza dhana za wingu (cloud), Kutofautisha IaaS, PaaS na SaaS, Kupanga rasilimali za Azure, Kulinganisha mahitaji na huduma kuu za Azure, Kukadiria na kudhibiti gharama za wingu, Kujiandaa kwa mtihani wa AZ-900",
  outcome: "kupanga mfumo mdogo wa Azure kwa hitaji halisi la jamii: kuchagua huduma sahihi, kueleza jinsi zinavyopangwa na kulindwa, kukadiria gharama ya kila mwezi kwa kikokotoo cha bei cha Azure, na kuchora njia yako mwenyewe ya kupata cheti cha Azure Fundamentals (AZ-900).",
  about: [
    "Microsoft Azure ni mojawapo ya majukwaa makubwa zaidi ya wingu (cloud) duniani, na ujuzi wa wingu unafungua milango ya kazi za IT support, help desk na kazi za wingu. Kozi hii ni mwanzo wa bure, kwa maneno rahisi, kwa watu walio wapya katika teknolojia, wanaobadilisha kazi, na wanajamii wanaotaka cheti cha kwanza kinachotambulika.",
    "Utajifunza mawazo ambayo mtihani wa Microsoft Azure Fundamentals (AZ-900) unashughulikia: dhana za wingu, misingi na huduma kuu za Azure, na jinsi Azure inavyosimamiwa, kulindwa na kulipiwa. Huhitaji akaunti ya Azure: sehemu za mazoezi zinatumia zana za bure za umma za Microsoft, kama kikokotoo cha bei na jaribio la mazoezi la bure.",
    "Kila somo linachukua kama dakika tano na linaisha kwa kazi ya \"Jaribu sasa\". Jaribio la maarifa linamaliza kila sura na mtihani wa maswali 20 unamaliza kozi. Kozi hii inakusaidia kujiandaa; si mtihani rasmi, na kurasa za Microsoft zenyewe ndizo zenye neno la mwisho kuhusu mtihani."
  ],
  finalTask: "Andika mpango wa Azure wa ukurasa mmoja kwa tovuti na hifadhi ya faili za shirika dogo la jamii: taja aina ya huduma (IaaS, PaaS au SaaS) na huduma za Azure utakazotumia, eneo (region) na kikundi cha rasilimali (resource group), jinsi watu watakavyoingia kwa usalama, jinsi utakavyodhibiti gharama (bajeti, tags), na gharama ya kila mwezi inayokadiriwa kutoka kikokotoo cha bei cha Azure. Kisha fanya jaribio la mazoezi la bure la AZ-900 la Microsoft na uorodheshe maeneo yako mawili dhaifu zaidi ya kusoma baadaye.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima katika jamii zisizohudumiwa vya kutosha walio wapya katika teknolojia au wanaobadilisha kazi, pamoja na wanajamii wanaotaka cheti cha kwanza kinachotambulika. Wengi wanalenga kazi za IT support, help desk au kazi za mwanzo za wingu.",
    startingPoint: "Wanaweza kutumia kompyuta na kivinjari cha wavuti, barua pepe na programu (apps) za kila siku. Wana uzoefu mdogo au hawana kabisa wa seva, mitandao au majukwaa ya wingu, na hatudhanii kuwa wana akaunti ya Azure.",
    gap: "Kazi za mwanzo za IT na wingu mara nyingi zinaomba misingi ya wingu na cheti cha kwanza kama AZ-900. Wanafunzi wanahitaji mawazo makuu na maneno, na tabia ya kupanga, kulinda na kukadiria bei ya mfumo mdogo, ili waombe kazi kwa kujiamini na waepuke bili za wingu zisizotarajiwa.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; maneno ya kiufundi yanaelezwa mara ya kwanza",
      "Vifaa: kompyuta au tableti yenye kivinjari cha wavuti; simu ni ngumu kwa kikokotoo cha bei",
      "Gharama: hakuna haja ya akaunti ya Azure wala kadi ya malipo; sehemu za mazoezi zinatumia zana za bure za umma za Microsoft",
      "Muda: masomo ya dakika 5, kama dakika 60 kwa jumla pamoja na jaribio la mazoezi",
      "Maelezo ya mtihani na bei hubadilika; wanafunzi wanakagua kurasa rasmi za Microsoft"
    ],
    prerequisites: "Hakuna. \"Misingi ya Kompyuta ya Wingu (Cloud Computing)\" ni mwanzo rahisi zaidi kwa wanafunzi ambao hawajawahi kusikia neno wingu (cloud)."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa mfano wa kila siku kama tovuti ya benki ya chakula yenye watu wengi", action: "kueleza kompyuta ya wingu ni nini na kutaja faida zake kuu na aina za wingu", standard: "kwa maneno yako mwenyewe, na angalau faida mbili sahihi" },
    { id: "O2", condition: "Ukipewa huduma ya wingu", action: "kuipanga kama IaaS, PaaS au SaaS na kusema mtoa huduma na mteja kila mmoja analinda nini", standard: "ukipata angalau 4 kati ya 5 sahihi" },
    { id: "O3", condition: "Kwa mradi mdogo wa Azure", action: "kuchagua eneo (region) na kikundi cha rasilimali (resource group) na kueleza vinavyoingia ndani ya usajili (subscription)", standard: "na sababu ya eneo unalochagua" },
    { id: "O4", condition: "Ukipewa hitaji la kawaida kama tovuti, seva kamili au nakala za akiba (backups)", action: "kulinganisha hitaji hilo na huduma kuu sahihi ya Azure", standard: "ukipata angalau 4 kati ya 5 sahihi" },
    { id: "O5", condition: "Kwa watu na rasilimali katika mpango wako", action: "kuorodhesha jinsi utakavyolinda kuingia na ruhusa, na kusimamia sheria kwa MFA, RBAC, tags, Azure Policy au resource locks", standard: "ukitaja angalau zana tatu kati ya hizi na kazi ya kila moja" },
    { id: "O6", condition: "Ukitumia kikokotoo cha bei cha bure cha Azure na Microsoft Learn", action: "kukadiria gharama ya kila mwezi ya mpango wako na kuandika mpango wa kusoma wa AZ-900", standard: "na jumla inayokadiriwa na maeneo yako mawili dhaifu zaidi ya mtihani" }
  ],
  chapters: [
    {
      name: "Sura 1: Dhana za wingu na misingi ya Azure",
      lessons: [
        {
          objectives: ["O1"],
          title: "Wingu ni nini na kwa nini mashirika yanalitumia",
          minutes: 5,
          goal: "Eleza kompyuta ya wingu na faida zake kuu kwa mfano wa kila siku.",
          text: [
            "Kompyuta ya wingu (cloud computing) ni kukodi nguvu ya kompyuta, hifadhi na programu kupitia intaneti badala ya kununua na kuendesha seva zako mwenyewe. Microsoft Azure, Amazon Web Services na Google Cloud ndio watoa huduma wakubwa zaidi wa wingu.",
            "Ni kama umeme: hujengi kituo cha umeme, unachomeka tu na kulipia unachotumia. Hii inaitwa mfumo wa kulipia kwa matumizi (consumption-based au pay-as-you-go). Badala ya ununuzi mkubwa wa mwanzo (gharama ya mtaji, CapEx), unalipa gharama ya uendeshaji inayoendelea (OpEx).",
            "Faida kuu: uwezo wa kukua (scalability: kuongeza nguvu ukurasa wa kujiandikisha wa benki ya chakula unapojaa watu, kisha kuipunguza), upatikanaji wa juu (high availability: huduma inaendelea mashine moja ikiharibika), kutegemewa, zana za usalama, na usimamizi rahisi. Kuna aina tatu za wingu: wa umma (public, mtoa huduma wa pamoja kama Azure), binafsi (private, unatumiwa na shirika moja tu) na mseto (hybrid, mchanganyiko wa yote mawili)."
          ],
          words: [["Kompyuta ya wingu (cloud computing)", "kukodi nguvu ya kompyuta, hifadhi na programu kupitia intaneti."], ["Mfumo wa kulipia kwa matumizi", "unalipa tu kile unachotumia."], ["CapEx / OpEx", "gharama ya mtaji ni ununuzi mkubwa wa mwanzo; gharama ya uendeshaji ni gharama inayoendelea."], ["Scalability (uwezo wa kukua)", "kuongeza au kupunguza rasilimali kadiri mahitaji yanavyobadilika."], ["High availability (upatikanaji wa juu)", "huduma inaendelea kufanya kazi hata sehemu zake zikiharibika."], ["Wingu mseto (hybrid cloud)", "mchanganyiko wa wingu wa umma na mifumo binafsi ya shirika lenyewe."]],
          slides: [
            { title: "Kompyuta ya wingu ni", bullets: ["Kukodi kompyuta kupitia intaneti", "Kama umeme: unachomeka, unalipia matumizi", "Azure, AWS na Google Cloud ndio watatu wakubwa"] },
            { title: "Kulipia", bullets: ["Kwa matumizi: unalipia unachotumia", "CapEx: ununuzi mkubwa wa mwanzo", "OpEx: gharama ya uendeshaji inayoendelea"] },
            { title: "Faida kuu", bullets: ["Uwezo wa kukua na upatikanaji wa juu", "Kutegemewa na zana za usalama", "Usimamizi rahisi"] },
            { title: "Aina tatu za wingu", bullets: ["Wa umma: mtoa huduma wa pamoja", "Binafsi: shirika moja tu", "Mseto: mchanganyiko wa yote mawili"] }
          ],
          sources: [STUDY],
          tryIt: "Chagua shirika la karibu unalolijua (kanisa, msikiti, kliniki, shule, benki ya chakula au duka dogo). Andika njia mbili linazoweza kutumia wingu na faida ipi (uwezo wa kukua, upatikanaji, kulipia kwa matumizi) kila moja inalipa.",
          youCanNow: "kueleza kompyuta ya wingu, mfumo wa kulipia kwa matumizi, faida zake na aina tatu za wingu.",
          quickCheck: [
            { objective: "O1", q: "OpEx ni nini katika kompyuta ya wingu?", options: ["Ununuzi mkubwa wa mwanzo wa seva", "Gharama inayoendelea unayolipa unapotumia huduma", "Aina ya mashine pepe (virtual machine)", "Jaribio la bure lisiloisha kamwe"], answer: 1, why: "Kulipia kwa matumizi kunageuza ununuzi mkubwa wa mwanzo (CapEx) kuwa gharama ya uendeshaji inayoendelea (OpEx)." },
            { objective: "O1", q: "Kliniki lazima iweke baadhi ya data kwenye seva zake yenyewe lakini inataka Azure kwa tovuti yake. Aina ipi ya wingu inafaa?", options: ["Wa umma tu", "Binafsi tu", "Hakuna wingu kabisa", "Mseto (hybrid)"], answer: 3, why: "Wingu mseto unachanganya seva za shirika lenyewe na wingu wa umma kama Azure." }
          ]
        },
        {
          objectives: ["O2"],
          title: "IaaS, PaaS, SaaS na nani anawajibika kwa nini",
          minutes: 5,
          goal: "Panga huduma kama IaaS, PaaS au SaaS na useme nani anashughulikia nini.",
          text: [
            "Huduma za wingu ziko za aina tatu. IaaS (infrastructure as a service, miundombinu kama huduma): unakodi mashine pepe na mitandao na unasimamia karibu kila kitu juu yake mwenyewe, kama kukodi nyumba tupu. PaaS (platform as a service, jukwaa kama huduma): mtoa huduma anaendesha seva na programu za mfumo; wewe unaleta app yako au data yako, kama nyumba yenye samani. SaaS (software as a service, programu kama huduma): unatumia tu programu iliyokamilika, kama barua pepe ya Outlook au Microsoft Teams, kama chumba cha hoteli.",
            "Serverless (bila seva) ni aina ya PaaS ambapo msimbo wako unaendeshwa tu kitu kinapouanzisha na unalipia kwa matumizi, bila seva yoyote ya kusimamia (Azure Functions ni mfano).",
            "Mfumo wa uwajibikaji wa pamoja (shared responsibility model) unasema nani analinda nini. Mtoa huduma kila wakati analinda vituo vya data (datacenters) vyenyewe. Wewe kila wakati unawajibika kwa data yako, akaunti zako na nani ana ruhusa. Katikati, kadiri unavyosogea kutoka IaaS kwenda SaaS, ndivyo mtoa huduma anavyoshughulikia zaidi."
          ],
          steps: ["Uliza: je, tunasimamia mfumo wa uendeshaji (operating system)? Kama ndiyo, ni IaaS.", "Je, tunaleta app yetu au data yetu tu? Basi ni PaaS.", "Je, tunaingia tu na kutumia programu? Basi ni SaaS.", "Kumbuka: data yako na akaunti zako ni kazi yako kila wakati."],
          words: [["IaaS", "miundombinu kama huduma: unakodi mashine pepe na kuzisimamia."], ["PaaS", "jukwaa kama huduma: mtoa huduma anaendesha jukwaa; wewe unaleta app yako."], ["SaaS", "programu kama huduma: programu iliyo tayari kutumika kupitia intaneti."], ["Serverless (bila seva)", "msimbo unaoendeshwa tu unapoanzishwa, bila seva ya wewe kusimamia."], ["Mfumo wa uwajibikaji wa pamoja", "jinsi kazi za usalama zinavyogawanywa kati ya mtoa huduma wa wingu na wewe."]],
          slides: [
            { title: "Aina tatu za huduma", bullets: ["IaaS: nyumba tupu, unasimamia mengi", "PaaS: yenye samani, unaleta app yako", "SaaS: chumba cha hoteli, unatumia tu"] },
            { title: "Serverless (bila seva)", bullets: ["Msimbo unaendeshwa tu unapoanzishwa", "Unalipia kwa matumizi, hakuna seva ya kusimamia", "Mfano: Azure Functions"] },
            { title: "Uwajibikaji wa pamoja", bullets: ["Mtoa huduma: kila wakati kituo cha data chenyewe", "Wewe: kila wakati data yako, akaunti, ruhusa", "Kutoka IaaS hadi SaaS: mtoa huduma anafanya zaidi"] }
          ],
          sources: [STUDY],
          tryIt: "Panga hizi kama IaaS, PaaS au SaaS: barua pepe ya Microsoft Outlook, mashine pepe ya Azure, Azure App Service kwa tovuti, Microsoft Teams, Azure Functions. Kisha andika kitu kimoja unachowajibika nacho kila wakati, bila kujali aina.",
          youCanNow: "kutofautisha IaaS, PaaS na SaaS na kueleza mfumo wa uwajibikaji wa pamoja.",
          quickCheck: [
            { objective: "O2", q: "Aina ipi ni kama kukodi nyumba yenye samani: mtoa huduma anaendesha seva na wewe unaleta app yako?", options: ["PaaS", "IaaS", "SaaS", "Wingu binafsi"], answer: 0, why: "Katika PaaS mtoa huduma anaendesha seva na programu za mfumo; wewe unaleta app yako au data yako." },
            { objective: "O2", q: "Shirika lako lisilo la faida linahama kutoka IaaS kwenda SaaS. Nini kinatokea kwa kazi yake ya usalama?", options: ["Sasa lazima lilinde kituo cha data", "Hakuna kinachobadilika kabisa", "Mtoa huduma anashughulikia zaidi, lakini data yako na akaunti zako bado ni kazi yako", "Mtoa huduma anakuwa na jukumu la nywila zako"], answer: 2, why: "Kusogea kuelekea SaaS kunahamisha kazi zaidi kwa mtoa huduma, lakini data yako na ruhusa zinabaki kuwa zako kila wakati." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Jinsi Azure inavyopangwa: maeneo, zones na resource groups",
          minutes: 6,
          goal: "Eleza Azure inafanya kazi wapi na jinsi rasilimali zinavyopangwa na kupatikana katika Azure portal.",
          text: [
            "Azure inafanya kazi katika vituo vya data duniani kote vilivyowekwa katika maeneo (regions), kama East US au South Africa North. Unachagua eneo kwa kila kitu unachojenga: karibu na watumiaji wako kwa kawaida ni haraka zaidi, na baadhi ya data ina sheria kuhusu nchi ambayo lazima ibaki. Maeneo mengi yana availability zones: vituo vya data tofauti vyenye umeme na mfumo wa kupoza wao wenyewe, kwa hiyo kimoja kikiharibika, kingine kinaendelea. Maeneo pia yameunganishwa na eneo jingine katika jiografia ile ile kwa ajili ya kurejesha huduma baada ya maafa.",
            "Kila kitu unachounda (mashine pepe, hifadhidata, akaunti ya hifadhi) ni rasilimali (resource). Rasilimali zinawekwa katika vikundi vya rasilimali (resource groups), kama folda za vitu vinavyoenda pamoja, kama kila kitu cha tovuti moja. Vikundi vya rasilimali viko ndani ya usajili (subscription), ambao ndio akaunti ya malipo. Mashirika makubwa yanaweka usajili kadhaa pamoja kwa management groups.",
            "Unasimamia yote haya katika Azure portal, tovuti iliyoko portal.azure.com. Unaweza pia kutumia Azure Cloud Shell, Azure CLI au Azure PowerShell kuisimamia kwa kuandika amri."
          ],
          steps: ["Chagua eneo karibu na watumiaji wako linalotimiza sheria zozote za data.", "Tumia availability zones huduma inapopaswa kuendelea kufanya kazi.", "Weka rasilimali zinazohusiana katika kikundi kimoja cha rasilimali.", "Jua usajili upi unazilipia.", "Simamia yote katika Azure portal au kwa zana za kuandika amri."],
          words: [["Eneo (region)", "sehemu ya kijiografia yenye kituo kimoja au zaidi cha data cha Azure."], ["Availability zone", "kituo cha data tofauti ndani ya eneo chenye umeme, mfumo wa kupoza na mtandao wake."], ["Rasilimali (resource)", "kitu chochote unachounda katika Azure, kama mashine pepe au hifadhidata."], ["Kikundi cha rasilimali (resource group)", "folda inayoshika rasilimali zinazohusiana."], ["Usajili (subscription)", "akaunti ambayo gharama za Azure zinatozwa."], ["Management group", "njia ya kuweka usajili kadhaa pamoja chini ya sheria za pamoja."], ["Azure portal", "tovuti ya kusimamia Azure."]],
          slides: [
            { title: "Azure inafanya kazi wapi", bullets: ["Vituo vya data vilivyowekwa katika maeneo", "Chagua eneo karibu na watumiaji na sheria zako", "Availability zones: vituo vya data tofauti"] },
            { title: "Jinsi inavyopangwa", bullets: ["Rasilimali: kitu kimoja unachounda", "Kikundi cha rasilimali: rasilimali zinazohusiana", "Usajili: malipo", "Management group: usajili mwingi"] },
            { title: "Jinsi unavyoisimamia", bullets: ["Azure portal kwenye portal.azure.com", "Cloud Shell, Azure CLI, Azure PowerShell"] }
          ],
          sources: [STUDY],
          tryIt: "Panga muundo wa kituo cha jamii kinachotaka tovuti na mahali pa kuhifadhi fomu za kujiandikisha: lipe jina kikundi cha rasilimali, orodhesha rasilimali mbili zinazoingia ndani yake, na uchague eneo karibu nawe. Andika sababu moja ya eneo ulilochagua.",
          youCanNow: "kueleza maeneo, availability zones, rasilimali, vikundi vya rasilimali, usajili na management groups.",
          quickCheck: [
            { objective: "O3", q: "Kikundi cha rasilimali (resource group) ni nini katika Azure?", options: ["Timu ya wafanyakazi wa Microsoft", "Aina ya mashine pepe", "Akaunti ya malipo", "Folda ya rasilimali zinazoenda pamoja, kama tovuti moja"], answer: 3, why: "Vikundi vya rasilimali vinashika rasilimali zinazohusiana; usajili ndio akaunti ya malipo." },
            { objective: "O3", q: "Watumiaji wako wako Afrika Kusini na data yao lazima ibaki nchini. Unachaguaje eneo?", options: ["Chagua eneo la bei nafuu zaidi popote", "Chagua eneo karibu na watumiaji wako linalotimiza sheria za data", "Chagua eneo lolote bila mpango", "Tumia kila eneo kwa wakati mmoja"], answer: 1, why: "Chagua eneo karibu na watumiaji ambalo pia linatimiza sheria zozote kuhusu mahali data inapopaswa kubaki." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Dhana za wingu na misingi ya Azure",
        questions: [
          { objective: "O1", q: "Mfumo wa kulipia kwa matumizi ni nini?", options: ["Unanunua seva zote mwanzoni", "Kila kitu ni bure kila wakati", "Unalipia tu kile unachotumia", "Unalipa bei moja isiyobadilika milele"], answer: 2, why: "Huduma za wingu kwa kawaida ni za kulipia kwa matumizi." },
          { objective: "O1", q: "Tovuti ya benki ya chakula inajaa watu sana mara moja kwa mwezi. Faida ipi ya wingu inasaidia zaidi?", options: ["Uwezo wa kukua (scalability)", "Wingu binafsi", "CapEx", "SaaS"], answer: 0, why: "Uwezo wa kukua unaongeza rasilimali mahitaji yanapopanda na kuziondoa baadaye." },
          { objective: "O2", q: "Microsoft Teams inayotumiwa kupitia kivinjari cha wavuti ni mfano wa:", options: ["IaaS", "PaaS", "Eneo (region)", "SaaS"], answer: 3, why: "Ni programu iliyo tayari kutumika inayoletwa kupitia intaneti." },
          { objective: "O2", q: "Chini ya mfumo wa uwajibikaji wa pamoja, nini ni kazi yako KILA WAKATI?", options: ["Kujenga kituo cha data", "Data yako na nani ana ruhusa ya kuifikia", "Kupoza seva", "Kubadilisha diski ngumu zilizoharibika"], answer: 1, why: "Wateja kila wakati wanamiliki data yao, akaunti na ruhusa." },
          { objective: "O3", q: "Nini kinashika rasilimali za Azure zinazohusiana, kama kila kitu cha tovuti moja?", options: ["Eneo (region)", "Kikundi cha rasilimali (resource group)", "Availability zone", "Nywila"], answer: 1, why: "Vikundi vya rasilimali vinapanga rasilimali zinazoenda pamoja." }
        ]
      }
    },
    {
      name: "Sura 2: Huduma kuu, gharama na cheti chako",
      lessons: [
        {
          objectives: ["O4"],
          title: "Huduma kuu za Azure: kompyuta, mtandao, hifadhi na hifadhidata",
          minutes: 6,
          goal: "Linganisha hitaji la kawaida na huduma kuu sahihi ya Azure.",
          text: [
            "Huduma za kompyuta (compute) zinaendesha programu zako. Azure Virtual Machines zinakupa kompyuta kamili katika wingu (IaaS). Azure App Service inaweka tovuti na web apps bila kusimamia seva (PaaS). Containers zinafunga app pamoja na kila kitu inachohitaji ili ifanye kazi vile vile popote. Azure Functions inaendesha vipande vidogo vya msimbo vinapoanzishwa (serverless). Azure Virtual Desktop inawapa watu desktop ya Windows wanayoweza kuifikia kutoka kifaa chochote.",
            "Mtandao (networking) unaunganisha vitu. Azure virtual network ni mtandao wako binafsi katika wingu. VPN Gateway inauunganisha na ofisi yako kupitia intaneti; ExpressRoute ni muunganisho binafsi usiopita kwenye intaneti ya umma. Azure DNS inageuza majina kuwa anwani.",
            "Hifadhi (storage) inatunza faili na data. Akaunti ya hifadhi (storage account) inashika Blob storage (picha, video, nakala za akiba), Azure Files (folda za pamoja), queues na tables. Viwango vya hifadhi (hot, cool, cold, archive) vinagharimu kidogo kadiri unavyofungua faili mara chache. Chaguo za redundancy zinatunza nakala za ziada ili hitilafu isipoteze data. Kwa hifadhidata (databases), Azure ina chaguo zinazosimamiwa kama Azure SQL Database na Azure Cosmos DB."
          ],
          steps: ["Unahitaji tovuti? Angalia Azure App Service.", "Unahitaji udhibiti kamili wa seva? Azure Virtual Machines.", "Unahitaji msimbo uendeshwe tukio linapotokea? Azure Functions.", "Unahitaji kuhifadhi faili au nakala za akiba? Akaunti ya hifadhi yenye Blob storage.", "Faili zinazofunguliwa mara chache? Tumia kiwango baridi zaidi, cha bei nafuu."],
          words: [["Mashine pepe (virtual machine, VM)", "kompyuta inayoendeshwa kama programu katika wingu."], ["Azure App Service", "huduma ya PaaS ya kuweka tovuti na web apps."], ["Container", "kifurushi cha app na kila kitu inachohitaji ili ifanye kazi."], ["Virtual network", "mtandao binafsi wa rasilimali zako za Azure."], ["Blob storage", "hifadhi ya faili kubwa kama picha, video na nakala za akiba."], ["Kiwango cha hifadhi (storage tier)", "kiwango cha bei kinachotegemea mara ngapi unafungua data: hot, cool, cold au archive."], ["Redundancy", "kutunza nakala za ziada ili data isipotee hitilafu ikitokea."]],
          slides: [
            { title: "Kompyuta (compute)", bullets: ["Virtual Machines: kompyuta kamili (IaaS)", "App Service: tovuti (PaaS)", "Functions: msimbo unapoanzishwa", "Containers na Virtual Desktop"] },
            { title: "Mtandao (networking)", bullets: ["Virtual network: mtandao wako binafsi wa wingu", "VPN Gateway: kuunganisha na ofisi yako", "ExpressRoute: muunganisho binafsi", "Azure DNS: majina kuwa anwani"] },
            { title: "Hifadhi na hifadhidata", bullets: ["Akaunti ya hifadhi: Blob, Files, queues, tables", "Viwango: hot, cool, cold, archive", "Redundancy inatunza nakala za ziada", "Azure SQL Database, Azure Cosmos DB"] }
          ],
          sources: [STUDY],
          tryIt: "Kwa kituo cha jamii cha Somo la 3, chagua huduma kwa kila hitaji: tovuti ya umma, mahali pa kutunza fomu za kujiandikisha zilizoskaniwa, na picha za zamani ambazo karibu hazifunguliwi kamwe. Andika huduma ipi na, kwa picha, kiwango kipi cha hifadhi.",
          youCanNow: "kulinganisha mahitaji ya kawaida na huduma za Azure za kompyuta, mtandao, hifadhi na hifadhidata.",
          quickCheck: [
            { objective: "O4", q: "Huduma ipi ya Azure inaendesha vipande vidogo vya msimbo tu kitu kinapovianzisha?", options: ["Azure Virtual Machines", "Azure DNS", "Azure Functions", "ExpressRoute"], answer: 2, why: "Azure Functions ni serverless: msimbo unaendeshwa unapoanzishwa, na unalipia kwa matumizi." },
            { objective: "O4", q: "Kituo cha vijana kinahitaji folda ya pamoja ambayo wafanyakazi wote wanaweza kuifungua. Ungependekeza nini?", options: ["Azure Files katika akaunti ya hifadhi", "Azure Virtual Desktop", "VPN Gateway", "Azure SQL Database"], answer: 0, why: "Azure Files katika akaunti ya hifadhi inatoa folda za pamoja." }
          ]
        },
        {
          objectives: ["O5","O6"],
          title: "Usalama, usimamizi wa sheria na kudhibiti gharama",
          minutes: 6,
          goal: "Taja zana za Azure zinazolinda akaunti, zinazosimamia sheria na zinazozuia bili zisizotarajiwa.",
          text: [
            "Utambulisho: Microsoft Entra ID ni huduma ya Azure ya kuingia (sign-in) na orodha ya watumiaji. Washa uthibitishaji wa hatua nyingi (MFA), unaoomba uthibitisho wa pili kama msimbo katika app, ili nywila iliyoibwa isitoshe. Single sign-on (SSO) inawaruhusu watu kutumia akaunti moja kwa apps nyingi. Role-based access control (RBAC) inampa kila mtu ruhusa tu zinazohitajika kwa kazi yake. Zero Trust inamaanisha usidhanie kamwe kuwa ombi ni salama; thibitisha kila wakati.",
            "Usimamizi wa sheria (governance): Azure Policy inaweka sheria, kama \"unda rasilimali katika maeneo haya tu\". Resource locks zinazuia rasilimali muhimu zisifutwe au kubadilishwa kwa bahati mbaya. Tags ni lebo kama department=youth au project=website zinazokusaidia kupanga na kufuatilia gharama. Microsoft Defender for Cloud inakagua mfumo wako kutafuta matatizo ya usalama.",
            "Gharama: unacholipa kinategemea huduma, ukubwa wake, eneo, muda inaofanya kazi na kiasi cha data kinachotoka Azure. Kikokotoo cha bei cha bure cha Azure kinakadiria gharama ya kila mwezi kabla hujajenga chochote. Cost Management inakuruhusu kuweka bajeti na tahadhari (alerts). Kanuni rahisi: futa usichotumia."
          ],
          steps: ["Washa MFA kwa kila akaunti.", "Wape watu ruhusa tu zinazohitajika kwa kazi yao (RBAC).", "Weka tags kwa kila rasilimali.", "Tumia Azure Policy na resource locks kwa sheria muhimu.", "Kadiria gharama kwanza katika kikokotoo cha bei, kisha weka tahadhari ya bajeti."],
          words: [["Microsoft Entra ID", "huduma ya Microsoft ya wingu ya kuingia na orodha ya watumiaji."], ["Uthibitishaji wa hatua nyingi (MFA)", "kuingia kwa nywila pamoja na uthibitisho wa pili."], ["RBAC", "role-based access control: ruhusa kulingana na kazi ya mtu."], ["Zero Trust", "njia ya usalama: usidhanie kuaminika kamwe, thibitisha kila wakati."], ["Azure Policy", "zana inayosimamia sheria kuhusu kinachoweza kuundwa."], ["Resource lock", "inazuia rasilimali isifutwe au kubadilishwa kwa makosa."], ["Tag", "lebo kwenye rasilimali inayotumiwa kuipanga na kufuatilia gharama."]],
          slides: [
            { title: "Utambulisho na ruhusa", bullets: ["Microsoft Entra ID kwa kuingia", "MFA: uthibitisho wa pili", "RBAC: ruhusa tu zinazohitajika kwa kazi", "Zero Trust: thibitisha kila wakati"] },
            { title: "Usimamizi wa sheria", bullets: ["Azure Policy: kusimamia sheria", "Resource locks: kuzuia ajali", "Tags: kupanga na kufuatilia gharama", "Defender for Cloud: kupata udhaifu"] },
            { title: "Kudhibiti gharama", bullets: ["Gharama inategemea huduma, ukubwa, eneo na muda", "Kikokotoo cha bei: kadiria kwanza", "Bajeti na tahadhari katika Cost Management", "Futa usichotumia"] }
          ],
          sources: [STUDY, CALC],
          tryIt: "Andika sheria tatu za usalama na gharama kwa mfumo wa Azure wa kituo cha jamii, moja moja kwa kuingia, ruhusa na matumizi ya pesa. Mfano: \"Kila akaunti ya mtu wa kujitolea inatumia MFA.\" Kisha andika tags mbili ambazo ungeweka kwa kila rasilimali.",
          youCanNow: "kueleza jinsi Azure inavyolinda akaunti, inavyosimamia sheria na inavyodhibiti gharama.",
          quickCheck: [
            { objective: "O5", q: "Zero Trust inamaanisha nini?", options: ["Kuamini kila ombi kutoka ndani ya ofisi", "Thibitisha kila wakati; usidhanie kamwe kuwa ombi ni salama", "Kuzima nywila", "Kumwamini mtoa huduma wa wingu tu"], answer: 1, why: "Zero Trust inamaanisha kila ombi linakaguliwa badala ya kudhaniwa kuwa salama." },
            { objective: "O5", q: "Nywila ya mtu wa kujitolea iliibwa, lakini mwizi hakuweza kuingia. Mpangilio upi huenda ulimzuia?", options: ["Tag kwenye rasilimali", "Kiwango baridi zaidi cha hifadhi", "Kikundi cha rasilimali", "Uthibitishaji wa hatua nyingi (MFA)"], answer: 3, why: "MFA inaomba uthibitisho wa pili, kwa hiyo nywila iliyoibwa peke yake haitoshi." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kukadiria gharama na kupanga njia yako ya AZ-900",
          minutes: 6,
          goal: "Kadiria gharama ya kila mwezi katika kikokotoo cha bei na utengeneze mpango wa kusoma wa AZ-900.",
          text: [
            "Kikokotoo cha bei ni bure kwenye tovuti ya Microsoft. Unaongeza huduma unazopanga kutumia, unachagua eneo na chaguo kama ukubwa na saa, nacho kinaonyesha gharama ya kila mwezi inayokadiriwa. Bei hubadilika na zinategemea eneo, kwa hiyo tumia kikokotoo kila wakati badala ya namba uliyoisoma mahali fulani.",
            "Ukitaka kufanya mazoezi ndani ya Azure yenyewe, Microsoft inatoa akaunti ya bure yenye baadhi ya huduma za bure kwa miezi 12 na zaidi ya huduma 65 za bure kila mwezi hadi viwango vilivyowekwa, kwa wateja wapya. Soma masharti ya sasa kwenye ukurasa wa huduma za bure wa Microsoft kabla ya kujiandikisha, weka tahadhari ya bajeti, na ufute rasilimali za mazoezi ukimaliza. Wanafunzi wa shule au chuo wanaweza kustahili ofa tofauti ya Azure for Students kwa barua pepe ya chuo.",
            "Mtihani wa cheti cha Microsoft Certified: Azure Fundamentals ni AZ-900. Mwongozo wa kujisomea wa Microsoft unaorodhesha maeneo matatu: dhana za wingu (25-30%), muundo na huduma za Azure (35-40%), na usimamizi na sheria za Azure (30-35%). Unahitaji alama 700 au zaidi kufaulu. Ukurasa wa mtihani unaonyesha dakika 45 kwa tathmini, na bei inategemea nchi unayoufanyia, kwa hiyo ikague hapo. Microsoft Learn ina mafunzo ya bure na jaribio la mazoezi la bure."
          ],
          steps: ["Fungua kikokotoo cha bei cha Azure.", "Ongeza huduma za mpango wako, chagua eneo lako na ukubwa.", "Andika jumla ya kila mwezi inayokadiriwa.", "Fungua ukurasa wa AZ-900 kwenye Microsoft Learn na ufanye jaribio la mazoezi la bure.", "Orodhesha maeneo yako mawili dhaifu zaidi na moduli za bure za Microsoft Learn kwa ajili yake."],
          words: [["Kikokotoo cha bei (pricing calculator)", "zana ya bure ya Microsoft ya kukadiria gharama za Azure kabla ya kujenga."], ["AZ-900", "msimbo wa mtihani wa Microsoft Certified: Azure Fundamentals."], ["Jaribio la mazoezi (practice assessment)", "maswali ya mazoezi ya bure kwenye Microsoft Learn yanayoonyesha kama uko tayari."], ["Microsoft Learn", "tovuti ya Microsoft ya mafunzo na vyeti vya bure."]],
          slides: [
            { title: "Kadiria kabla ya kujenga", bullets: ["Kikokotoo cha bei cha bure cha Azure", "Ongeza huduma, eneo na ukubwa", "Bei hubadilika: kagua tena kila wakati"] },
            { title: "Kufanya mazoezi kwa usalama", bullets: ["Soma masharti ya akaunti ya bure kwanza", "Weka tahadhari ya bajeti", "Futa rasilimali za mazoezi ukimaliza"] },
            { title: "Mtihani wa AZ-900", bullets: ["Dhana za wingu: 25-30%", "Muundo na huduma: 35-40%", "Usimamizi na sheria: 30-35%", "Alama ya kufaulu: 700; bei inatofautiana kwa nchi"] },
            { title: "Hatua yako inayofuata", bullets: ["Jaribio la mazoezi la bure kwenye Microsoft Learn", "Soma maeneo yako mawili dhaifu zaidi"] }
          ],
          sources: [CALC, FREE, CERT, STUDY],
          tryIt: "Kazi ya mwisho: andika mpango wa Azure wa ukurasa mmoja kwa tovuti na hifadhi ya faili za shirika la jamii (huduma na aina, eneo, kikundi cha rasilimali, kuingia kwa usalama, tags na bajeti), ongeza makadirio ya kila mwezi kutoka kikokotoo cha bei, kisha fanya jaribio la mazoezi la bure la AZ-900 na uorodheshe maeneo yako mawili dhaifu zaidi.",
          youCanNow: "kupanga na kukadiria bei ya mfumo mdogo wa Azure na kufuata njia iliyo wazi kuelekea cheti cha AZ-900.",
          quickCheck: [
            { objective: "O6", q: "Kwa nini utumie kikokotoo cha bei cha Azure badala ya bei uliyoisoma mtandaoni?", options: ["Bei hubadilika na zinategemea eneo, kwa hiyo kikokotoo kinatoa makadirio ya sasa", "Kikokotoo kinafanya Azure iwe bure", "Bei za mtandaoni ziko juu zaidi kila wakati", "Kikokotoo kinakusajili moja kwa moja"], answer: 0, why: "Bei hubadilika na zinatofautiana kwa eneo, kwa hiyo kadiria kwa kikokotoo kwa chaguo zako mwenyewe." },
            { objective: "O6", q: "Umefanya jaribio la mazoezi la bure la AZ-900. Hatua bora inayofuata ni ipi?", options: ["Kujiandikisha kwa mtihani leo bila kusoma", "Kulirudia hadi ukariri majibu", "Kuorodhesha maeneo yako mawili dhaifu zaidi na kutafuta moduli za bure za Microsoft Learn kwa ajili yake", "Kuacha, kwa sababu alama za mazoezi hazina maana"], answer: 2, why: "Maeneo yako dhaifu zaidi yanaonyesha mahali pa kusoma baadaye, na Microsoft Learn ina moduli za bure kwa kila moja." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Huduma kuu, gharama na cheti chako",
        questions: [
          { objective: "O4", q: "Huduma ipi ya Azure inaweka tovuti bila wewe kusimamia seva?", options: ["Azure Virtual Machines", "ExpressRoute", "Resource locks", "Azure App Service"], answer: 3, why: "App Service ni huduma ya PaaS ya kuweka tovuti." },
          { objective: "O4", q: "Picha za zamani karibu hazifunguliwi kamwe. Chaguo lipi la hifadhi linaokoa pesa?", options: ["Kiwango baridi zaidi kama cool, cold au archive", "Kiwango cha hot", "Mashine pepe kubwa zaidi", "Usajili wa pili"], answer: 0, why: "Viwango baridi zaidi vinagharimu kidogo kwa data unayoifungua mara chache." },
          { objective: "O5", q: "Zana ipi inazuia rasilimali muhimu isifutwe kwa makosa?", options: ["Tag", "Kikokotoo cha bei", "Resource lock", "Eneo (region)"], answer: 2, why: "Locks zinazuia kufuta au kubadilisha kwa bahati mbaya." },
          { objective: "O5", q: "MFA inaongeza nini katika kuingia?", options: ["Jina refu zaidi la mtumiaji", "Usajili wa bure", "Eneo jipya", "Uthibitisho wa pili, kama msimbo katika app"], answer: 3, why: "MFA inamaanisha nywila iliyoibwa peke yake haitoshi." },
          { objective: "O6", q: "Unapaswa kupata bei ya sasa ya mtihani wa AZ-900 wapi?", options: ["Makisio ya rafiki", "Makala ya zamani ya blogu", "Ukurasa rasmi wa mtihani wa Microsoft kwa nchi yako", "Chatbot yoyote ya AI"], answer: 2, why: "Bei inategemea nchi, na ukurasa rasmi ndio wa sasa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Misingi ya Microsoft Azure",
    questions: [
      { objective: "O1", q: "Kompyuta ya wingu inamaanisha:", options: ["Kuhifadhi faili kwenye USB stick tu", "Kukodi nguvu ya kompyuta na huduma kupitia intaneti", "Utabiri wa hali ya hewa", "Kununua kompyuta mpakato mpya"], answer: 1, why: "Wingu ni kutumia kompyuta za mtoa huduma kupitia intaneti." },
      { objective: "O1", q: "Kulipa kiasi kikubwa mwanzoni kununua seva ni:", options: ["CapEx", "OpEx", "SaaS", "Serverless"], answer: 0, why: "Gharama ya mtaji ni ununuzi wa mwanzo." },
      { objective: "O1", q: "Huduma inaendelea kufanya kazi hata mashine moja ikiharibika. Hii ni:", options: ["Tag", "Management group", "Upatikanaji wa juu (high availability)", "CapEx"], answer: 2, why: "Upatikanaji wa juu unaweka huduma hai wakati wa hitilafu." },
      { objective: "O1", q: "Shirika linatumia seva zake lenyewe pamoja na Azure. Huo ni:", options: ["Wingu mseto (hybrid cloud)", "Wingu binafsi tu", "Wingu wa umma tu", "SaaS"], answer: 0, why: "Mseto unachanganya binafsi na wa umma." },
      { objective: "O2", q: "Unakodi mashine pepe na unasimamia mfumo wake wa uendeshaji. Hiyo ni:", options: ["SaaS", "PaaS", "Eneo (region)", "IaaS"], answer: 3, why: "Kusimamia mfumo wa uendeshaji kwenye mashine zilizokodiwa ni IaaS." },
      { objective: "O2", q: "Msimbo unaoendeshwa tu unapoanzishwa, bila seva ya kusimamia, unaitwa:", options: ["Resource lock", "Serverless", "Archive storage", "VPN"], answer: 1, why: "Serverless inaendeshwa inapohitajika; Azure Functions ni mfano." },
      { objective: "O2", q: "Nani kila wakati analinda kituo cha data chenyewe?", options: ["Mteja", "Mtoa huduma wa wingu", "Benki ya mtumiaji", "Hakuna mtu"], answer: 1, why: "Ulinzi wa kituo chenyewe ni kazi ya mtoa huduma kila wakati." },
      { objective: "O3", q: "Eneo (region) la Azure ni:", options: ["Akaunti ya malipo", "Aina ya hifadhidata", "Sheria ya nywila", "Sehemu ya kijiografia yenye kituo kimoja au zaidi cha data"], answer: 3, why: "Maeneo ndipo vituo vya data vya Azure vilipo." },
      { objective: "O3", q: "Availability zones ni:", options: ["Vituo vya data tofauti ndani ya eneo vyenye umeme na mfumo wa kupoza wao wenyewe", "Viwango vya bei vya hifadhi", "Vikundi vya watumiaji", "Nchi"], answer: 0, why: "Zones zinalinda dhidi ya kituo kimoja cha data kuharibika." },
      { objective: "O3", q: "Ipi ni akaunti ya malipo inayoshika vikundi vya rasilimali?", options: ["Tag", "Container", "Usajili (subscription)", "Eneo (region)"], answer: 2, why: "Usajili ndio unaotozwa na una vikundi vya rasilimali ndani yake." },
      { objective: "O3", q: "Unasimamia Azure wapi katika kivinjari cha wavuti?", options: ["Duka la apps", "Kiwango cha hifadhi", "ExpressRoute", "Azure portal"], answer: 3, why: "Azure portal ndiyo tovuti ya usimamizi." },
      { objective: "O4", q: "Huduma ipi inakupa kompyuta kamili katika wingu?", options: ["Azure DNS", "Azure Policy", "Azure Virtual Machines", "Tags"], answer: 2, why: "Virtual Machines ni kompyuta ya IaaS." },
      { objective: "O4", q: "Ipi ni muunganisho binafsi na Azure usiotumia intaneti ya umma?", options: ["VPN Gateway", "ExpressRoute", "Azure DNS", "Blob storage"], answer: 1, why: "ExpressRoute ni muunganisho binafsi." },
      { objective: "O4", q: "Ungehifadhi nakala za akiba na video wapi?", options: ["Blob storage katika akaunti ya hifadhi", "Azure Policy", "Management group", "Microsoft Entra ID"], answer: 0, why: "Blob storage inashika faili kubwa." },
      { objective: "O5", q: "Ipi ni huduma ya Azure ya kuingia na orodha ya watumiaji?", options: ["Azure Advisor", "Azure Functions", "Microsoft Entra ID", "Kiwango cha archive"], answer: 2, why: "Entra ID inasimamia utambulisho na kuingia." },
      { objective: "O5", q: "Mtu wa kujitolea anahitaji kusoma ripoti tu. Wazo lipi linamwekea kikomo hicho?", options: ["Role-based access control (RBAC)", "Wingu mseto", "Uwezo wa kukua", "Archive storage"], answer: 0, why: "RBAC inatoa ruhusa tu zinazohitajika kwa kazi." },
      { objective: "O5", q: "Unataka kumzuia mtu yeyote kuunda rasilimali nje ya eneo lako. Zana ipi?", options: ["Tags", "Kikokotoo cha bei", "Container", "Azure Policy"], answer: 3, why: "Azure Policy inasimamia sheria kama maeneo yanayoruhusiwa." },
      { objective: "O5", q: "Lebo kama project=website kwenye rasilimali zinaitwa:", options: ["Locks", "Tags", "Zones", "Tiers"], answer: 1, why: "Tags zinapanga rasilimali na kusaidia kufuatilia gharama." },
      { objective: "O6", q: "Kabla ya kujenga chochote, unakadiriaje gharama ya kila mwezi?", options: ["Kubahatisha", "Kutumia kikokotoo cha bei cha Azure", "Kusubiri bili ya kwanza", "Kumuuliza mgeni mtandaoni"], answer: 1, why: "Kikokotoo kinakadiria gharama kabla ya kujenga." },
      { objective: "O6", q: "Unahitaji alama gani kufaulu AZ-900, kwa mujibu wa mwongozo wa kujisomea wa Microsoft?", options: ["500", "600", "700 au zaidi", "900 au zaidi"], answer: 2, why: "Mwongozo wa kujisomea wa Microsoft unasema alama 700 au zaidi inahitajika." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [0, 3, 4, 6, 7, 9, 11, 13, 15, 18]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Aina ya huduma na huduma", objective: "O4", notYet: "Mpango hautaji huduma yoyote ya Azure, au huduma hazifai tovuti na hifadhi ya faili.", meets: "Unataja aina ya huduma (IaaS, PaaS au SaaS) na huduma zinazofaa, kama App Service na akaunti ya hifadhi.", exceeds: "Unaeleza kwa nini kila huduma inafaa kuliko chaguo jingine." },
      { name: "Eneo na mpangilio", objective: "O3", notYet: "Hakuna eneo wala kikundi cha rasilimali kilichotajwa.", meets: "Unataja eneo pamoja na sababu na kuweka rasilimali katika kikundi kimoja cha rasilimali.", exceeds: "Pia unataja usajili unaolipa na kama availability zones zinahitajika." },
      { name: "Kuingia kwa usalama na sheria", objective: "O5", notYet: "Hausemi jinsi watu wanavyoingia au nani anaweza kufanya nini.", meets: "Unatumia MFA na kumpa kila mtu ruhusa anazohitaji tu (RBAC).", exceeds: "Pia unaongeza tags, policy au resource lock na kusema kila moja inalinda nini." },
      { name: "Makadirio ya gharama", objective: "O6", notYet: "Hakuna makadirio, au namba haikutoka kwenye kikokotoo cha bei.", meets: "Unatoa jumla ya kila mwezi inayokadiriwa kutoka kikokotoo cha bei na tahadhari ya bajeti.", exceeds: "Unataja badiliko moja ambalo lingepunguza gharama, kama kiwango baridi zaidi cha hifadhi." },
      { name: "Mpango wa kusoma", objective: "O6", notYet: "Jaribio la mazoezi halikufanywa.", meets: "Alifanya jaribio la mazoezi la bure na kuorodhesha maeneo mawili dhaifu zaidi.", exceeds: "Aliunganisha kila eneo dhaifu na moduli ya bure ya Microsoft Learn na tarehe ya kuisoma." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaofanya mtihani rasmi wa AZ-900 ndani ya siku 90, na wangapi wanafaulu",
      "Wanafunzi wanaoomba au kuanza kazi au mafunzo kazini ya IT support, help desk au wingu",
      "Mashirika ya jamii yanayotumia mpango wa mwanafunzi kuhamisha tovuti au faili kwenda wingu"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta au tableti yenye kivinjari cha wavuti na intaneti",
      "Kikokotoo cha bei cha bure cha Azure cha Microsoft na akaunti ya bure ya Microsoft Learn kwa jaribio la mazoezi",
      "Kiolezo cha mpango wa ukurasa mmoja, au karatasi na kalamu",
      "Kama dakika 60 kwa masomo, majaribio na mpango, pamoja na kama dakika 45 kwa jaribio la mazoezi"
    ],
    facilitatorNotes: [
      "Fanyeni jaribio la awali pamoja, kisha fanyeni sura moja kwa kila kipindi; pitieni kikokotoo cha bei kwenye skrini ya pamoja.",
      "Hakuna haja ya akaunti ya Azure. Wanafunzi wakichagua kufungua akaunti ya bure, wasome masharti ya sasa, waweke tahadhari ya bajeti na wafute rasilimali za mazoezi wakimaliza.",
      "Tumia shirika halisi la karibu, kama benki ya chakula au kituo cha vijana, kama mfano wa mpango wa ukurasa mmoja.",
      "Wakumbushe wanafunzi kuwa maelezo ya mtihani na bei hubadilika; waelekeze kwenye ukurasa rasmi wa mtihani wa Microsoft kwa nchi yao.",
      "Pima mpango kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
