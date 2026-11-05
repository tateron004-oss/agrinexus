"use strict";

// Koach Learn course, Hausa (ha) translation of shared/azure-fundamentals.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const CERT = { name: "Microsoft Learn: Microsoft Certified: Azure Fundamentals (takardar shaida)", url: "https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/" };
const STUDY = { name: "Microsoft Learn: Jagorar karatu don jarabawar AZ-900", url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900" };
const FREE = { name: "Microsoft Azure: Hidimomi kyauta", url: "https://azure.microsoft.com/en-us/pricing/free-services" };
const CALC = { name: "Microsoft Azure: Na'urar lissafin farashi (pricing calculator)", url: "https://azure.microsoft.com/en-us/pricing/calculator/" };

module.exports = {
  id: "azure-fundamentals-ha",
  lang: "ha",
  translationOf: "azure-fundamentals",
  category: "Undeserved Community",
  name: "Tushen Microsoft Azure",
  skills: "Bayanin ra'ayoyin cloud, Bambance IaaS, PaaS da SaaS, Tsara albarkatun Azure, Daidaita buƙatu da manyan hidimomin Azure, Ƙiyasta da sarrafa kuɗin cloud, Shirin jarabawar AZ-900",
  outcome: "tsara ƙaramin tsarin Azure don wata buƙata ta gaske a cikin al'umma: zaɓar hidimomin da suka dace, bayyana yadda aka tsara su da kuma kare su, ƙiyasta kuɗin wata-wata da na'urar lissafin farashi ta Azure (pricing calculator), da shirya hanyarku zuwa takardar shaidar Azure Fundamentals (AZ-900).",
  about: [
    "Microsoft Azure yana ɗaya daga cikin manyan dandalin cloud a duniya, kuma ƙwarewar cloud tana buɗe ƙofofin aikin taimakon IT, help desk da ayyukan cloud. Wannan kwas farawa ne kyauta, da kalmomi masu sauƙi, ga sababbi a fasaha, masu sauya sana'a, da 'yan al'umma da ke son takardar shaida ta farko da aka sani.",
    "Za ku koyi ra'ayoyin da jarabawar Microsoft Azure Fundamentals (AZ-900) ke magana a kai: ra'ayoyin cloud, ginshiƙai da manyan hidimomin Azure, da yadda ake sarrafa Azure, kare shi da biyan kuɗinsa. Ba ku buƙatar asusun Azure: sassan aikin hannu suna amfani da kayan aikin Microsoft na jama'a kyauta, kamar na'urar lissafin farashi da gwajin atisaye kyauta.",
    "Kowane darasi yana ɗaukar kusan minti biyar kuma yana ƙarewa da aikin \"Gwada yanzu\". Gwajin ilimi yana rufe kowane babi, kuma jarabawa mai tambayoyi 20 tana rufe kwas ɗin. Wannan kwas yana taimaka muku shiryawa; ba jarabawar hukuma ba ne, kuma shafukan Microsoft ne ke da magana ta ƙarshe kan bayanan jarabawar."
  ],
  finalTask: "Ku rubuta shirin Azure mai shafi ɗaya don shafin intanet da ma'ajiyar fayiloli na wata ƙaramar ƙungiyar al'umma: ku faɗi nau'in hidima (IaaS, PaaS ko SaaS) da hidimomin Azure da za ku yi amfani da su, yanki (region) da resource group, yadda mutane za su shiga asusu lafiya, yadda za ku sarrafa kuɗi (kasafi, tags), da ƙiyasin kuɗin wata-wata daga na'urar lissafin farashi ta Azure. Sannan ku yi gwajin atisaye na AZ-900 kyauta na Microsoft, ku rubuta fannoni biyu da kuka fi rauni a ciki don ku karanta su a gaba.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya a al'ummomin da ba a ba su isasshen dama ba, waɗanda sababbi ne a fasaha ko suke sauya sana'a, da 'yan al'umma da ke son takardar shaida ta farko da aka sani. Da yawa suna neman aikin taimakon IT, help desk ko aikin cloud na farko.",
    startingPoint: "Suna iya amfani da kwamfuta da burauzar intanet, imel da manhajoji na yau da kullum. Ba su da ƙwarewa sosai, ko ba su da ita kwata-kwata, a sabobi (servers), hanyoyin sadarwa (networks) ko dandalin cloud, kuma ba a ɗauka suna da asusun Azure ba.",
    gap: "Ayyukan IT da cloud na farko sau da yawa suna neman tushen ilimin cloud da takardar shaida ta farko kamar AZ-900. Masu koyo suna buƙatar manyan ra'ayoyi da kalmomi, da al'adar tsarawa, kare da ƙiyasta farashin ƙaramin tsari, don su nemi aiki da ƙarfin gwiwa kuma su guji lissafin kuɗin cloud na ba-zata.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; ana bayanin kalmomin fasaha a karon farko",
      "Na'urori: kwamfuta ko tablet mai burauzar intanet; waya tana da wuya don na'urar lissafin farashi",
      "Kuɗi: ba a buƙatar asusun Azure ko katin biya; sassan aikin hannu suna amfani da kayan aikin Microsoft na jama'a kyauta",
      "Lokaci: darussa na minti 5, kusan minti 60 gaba ɗaya ban da gwajin atisaye",
      "Bayanan jarabawa da farashi suna canjawa; masu koyo suna duba shafukan Microsoft na hukuma"
    ],
    prerequisites: "Babu. Kwas ɗin \"Tushen Cloud Computing (Kwamfutar Gajimare)\" farawa ne mafi sauƙi ga masu koyo da ba su taɓa jin kalmar cloud ba."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku misali na yau da kullum kamar shafin intanet na bankin abinci mai cunkoso", action: "bayyana mene ne cloud computing da ambaton manyan amfaninsa da nau'o'in cloud", standard: "da kalmominku, tare da aƙalla amfani biyu daidai" },
    { id: "O2", condition: "Idan aka ba ku wata hidimar cloud", action: "rarraba ta cikin IaaS, PaaS ko SaaS da faɗin abin da mai bayarwa da abokin ciniki kowannensu ke karewa", standard: "kuna samun aƙalla 4 cikin 5 daidai" },
    { id: "O3", condition: "Don ƙaramin aikin Azure", action: "zaɓar yanki (region) da resource group da bayyana yadda suke shiga cikin subscription", standard: "tare da dalilin yankin da kuka zaɓa" },
    { id: "O4", condition: "Idan aka ba ku buƙata ta yau da kullum kamar shafin intanet, cikakkiyar sabar (server) ko ajiyar madadi (backup)", action: "daidaita buƙatar da babbar hidimar Azure da ta dace", standard: "kuna samun aƙalla 4 cikin 5 daidai" },
    { id: "O5", condition: "Don mutane da albarkatun da ke cikin shirinku", action: "jera yadda za ku kare shiga asusu da damar shiga, da tilasta ƙa'idoji da MFA, RBAC, tags, Azure Policy ko resource locks", standard: "kuna ambaton aƙalla uku daga cikin waɗannan kayan aiki da abin da kowanne ke yi" },
    { id: "O6", condition: "Ta amfani da na'urar lissafin farashi ta Azure kyauta da Microsoft Learn", action: "ƙiyasta kuɗin wata-wata na shirinku da rubuta shirin karatun AZ-900", standard: "tare da ƙiyasin jimilla da fannoni biyu da kuka fi rauni a jarabawar" }
  ],
  chapters: [
    {
      name: "Babi na 1: Ra'ayoyin cloud da ginshiƙan Azure",
      lessons: [
        {
          objectives: ["O1"],
          title: "Mene ne cloud, kuma me yasa ƙungiyoyi ke amfani da shi",
          minutes: 5,
          goal: "Bayyana cloud computing da manyan amfaninsa da misali na yau da kullum.",
          text: [
            "Cloud computing (lissafin girgije) yana nufin hayar ƙarfin kwamfuta, ma'ajiya da manhajoji ta intanet, maimakon sayen sabobinku (servers) da tafiyar da su da kanku. Microsoft Azure, Amazon Web Services da Google Cloud su ne manyan masu bayar da cloud.",
            "Yana kama da wutar lantarki: ba ku gina tashar wuta, kuna jona ne kawai ku biya abin da kuka yi amfani da shi. Ana kiran wannan tsarin biyan-abin-da-aka-yi-amfani-da-shi (consumption-based ko pay-as-you-go). Maimakon babban saye a farko (kuɗin jari, CapEx), kuna biyan kuɗin tafiyarwa (kuɗin gudanarwa, OpEx).",
            "Manyan amfani: faɗaɗawa (scalability: ƙara ƙarfi idan shafin rajista na bankin abinci ya cika da mutane, sannan a rage shi), samuwa koyaushe (high availability: yana ci gaba da aiki ko da na'ura ɗaya ta lalace), dogaro, kayan tsaro, da sauƙin gudanarwa. Akwai nau'o'in cloud uku: na jama'a (public: mai bayarwa da ake rabawa kamar Azure), na sirri (private: ƙungiya ɗaya kaɗai ke amfani da shi) da gauraye (hybrid: haɗin biyun)."
          ],
          words: [["Cloud computing", "hayar ƙarfin kwamfuta, ma'ajiya da manhajoji ta intanet."], ["Tsarin biyan-abin-da-aka-yi-amfani-da-shi (consumption-based)", "kuna biyan abin da kuka yi amfani da shi kaɗai."], ["CapEx / OpEx", "kuɗin jari babban saye ne a farko; kuɗin gudanarwa kuɗi ne da ake ci gaba da biya."], ["Faɗaɗawa (scalability)", "ƙara ko rage albarkatu yayin da buƙata ta canja."], ["Samuwa koyaushe (high availability)", "hidima tana ci gaba da aiki ko da wasu sassanta sun lalace."], ["Cloud gauraye (hybrid cloud)", "haɗin cloud na jama'a da tsarin sirri na ƙungiya."]],
          slides: [
            { title: "Cloud computing shi ne", bullets: ["Hayar kwamfuta ta intanet", "Kamar wutar lantarki: ku jona, ku biya abin da kuka yi amfani da shi", "Azure, AWS da Google Cloud su ne manyan uku"] },
            { title: "Biyan kuɗinsa", bullets: ["Consumption-based: ku biya abin da kuka yi amfani da shi", "CapEx: babban saye a farko", "OpEx: kuɗin tafiyarwa da ake ci gaba da biya"] },
            { title: "Manyan amfani", bullets: ["Faɗaɗawa da samuwa koyaushe", "Dogaro da kayan tsaro", "Sauƙin gudanarwa"] },
            { title: "Nau'o'in cloud uku", bullets: ["Na jama'a (public): mai bayarwa da ake rabawa", "Na sirri (private): ƙungiya ɗaya kaɗai", "Gauraye (hybrid): haɗin biyun"] }
          ],
          sources: [STUDY],
          tryIt: "Ku zaɓi wata ƙungiya a yankinku da kuka sani (coci, masallaci, asibiti, makaranta, bankin abinci ko ƙaramin shago). Ku rubuta hanyoyi biyu da za ta iya amfani da cloud, da wane amfani (faɗaɗawa, samuwa, biyan-abin-da-aka-yi-amfani-da-shi) kowanne ke ba ta.",
          youCanNow: "bayyana cloud computing, tsarin biyan-abin-da-aka-yi-amfani-da-shi, amfaninsa da nau'o'in cloud uku.",
          quickCheck: [
            { objective: "O1", q: "Mene ne OpEx a cloud computing?", options: ["Babban saye na sabobi a farko", "Kuɗin tafiyarwa da kuke biya yayin da kuke amfani da hidimar", "Wani nau'in virtual machine", "Gwaji kyauta da ba ya ƙarewa"], answer: 1, why: "Biyan-abin-da-aka-yi-amfani-da-shi yana mayar da babban saye a farko (CapEx) zuwa kuɗin gudanarwa da ake ci gaba da biya (OpEx)." },
            { objective: "O1", q: "Wani asibiti dole ya ajiye wasu bayanai a sabobinsa, amma yana son Azure don shafinsa na intanet. Wane nau'in cloud ya dace?", options: ["Na jama'a kaɗai", "Na sirri kaɗai", "Babu cloud kwata-kwata", "Gauraye (hybrid)"], answer: 3, why: "Cloud gauraye yana haɗa sabobin ƙungiya da cloud na jama'a kamar Azure." }
          ]
        },
        {
          objectives: ["O2"],
          title: "IaaS, PaaS, SaaS da wanda ke da alhakin kowane abu",
          minutes: 5,
          goal: "Rarraba hidima cikin IaaS, PaaS ko SaaS da faɗin wanda ke kula da me.",
          text: [
            "Hidimomin cloud iri uku ne. IaaS (infrastructure as a service, ginshiƙi a matsayin hidima): kuna hayar virtual machines (kwamfutoci na manhaja) da hanyoyin sadarwa, kuma ku ne ke kula da kusan komai a kansu, kamar hayar gida babu kayan ɗaki. PaaS (platform as a service, dandali a matsayin hidima): mai bayarwa ne ke tafiyar da sabobi da manhajojin tsari; ku kuna kawo manhajarku ko bayananku, kamar gida da kayan ɗaki. SaaS (software as a service, manhaja a matsayin hidima): kuna amfani da manhajar da aka gama kawai, kamar imel na Outlook ko Microsoft Teams, kamar ɗakin otal.",
            "Serverless (ba-sabar) wani nau'in PaaS ne inda lambar kwamfutarku (code) take aiki ne kawai idan wani abu ya tayar da ita, kuma kuna biya gwargwadon amfani, babu sabar da za ku kula da ita kwata-kwata (Azure Functions misali ne).",
            "Tsarin raba alhaki (shared responsibility model) yana faɗin wanda ke kare me. Mai bayarwa koyaushe yana tsare gine-ginen cibiyoyin bayanai (datacenters). Ku koyaushe kuna da alhakin bayananku, asusunku da wanda ke da damar shiga. A tsakani, yayin da kuke tafiya daga IaaS zuwa SaaS, mai bayarwa yana ƙara ɗaukar aiki."
          ],
          steps: ["Ku tambaya: shin mu ne muke kula da tsarin aiki (operating system)? Idan e, IaaS ne.", "Shin manhajarmu ko bayananmu kawai muke kawowa? To PaaS ne.", "Shin muna shiga ne kawai mu yi amfani da manhajar? To SaaS ne.", "Ku tuna: bayananku da asusunku koyaushe aikinku ne."],
          words: [["IaaS", "ginshiƙi a matsayin hidima: kuna hayar virtual machines kuma ku kula da su."], ["PaaS", "dandali a matsayin hidima: mai bayarwa yana tafiyar da dandalin; ku kuna kawo manhajarku."], ["SaaS", "manhaja a matsayin hidima: manhajar da aka shirya don amfani ta intanet."], ["Serverless (ba-sabar)", "code da ke aiki ne kawai idan an tayar da shi, babu sabar da za ku kula da ita."], ["Tsarin raba alhaki", "yadda ake raba ayyukan tsaro tsakanin mai bayar da cloud da ku."]],
          slides: [
            { title: "Nau'o'in hidima uku", bullets: ["IaaS: gida babu kayan ɗaki, ku ke kula da yawancin abubuwa", "PaaS: gida da kayan ɗaki, ku kawo manhajarku", "SaaS: ɗakin otal, ku yi amfani kawai"] },
            { title: "Serverless (ba-sabar)", bullets: ["Code yana aiki ne kawai idan an tayar da shi", "Biya gwargwadon amfani, babu sabar da za a kula da ita", "Misali: Azure Functions"] },
            { title: "Raba alhaki", bullets: ["Mai bayarwa: koyaushe ginin cibiyar bayanai", "Ku: koyaushe bayananku, asusu, damar shiga", "Daga IaaS zuwa SaaS: mai bayarwa yana ƙara yi"] }
          ],
          sources: [STUDY],
          tryIt: "Ku rarraba waɗannan cikin IaaS, PaaS ko SaaS: imel na Microsoft Outlook, Azure virtual machine, Azure App Service don shafin intanet, Microsoft Teams, Azure Functions. Sannan ku rubuta abu ɗaya da koyaushe ku ke da alhakinsa, ko wane iri ne.",
          youCanNow: "bambance IaaS, PaaS da SaaS da bayyana tsarin raba alhaki.",
          quickCheck: [
            { objective: "O2", q: "Wane nau'i ne yake kama da hayar gida da kayan ɗaki: mai bayarwa yana tafiyar da sabobi, ku kuma kuna kawo manhajarku?", options: ["PaaS", "IaaS", "SaaS", "Cloud na sirri"], answer: 0, why: "A PaaS mai bayarwa yana tafiyar da sabobi da manhajojin tsari; ku kuna kawo manhajarku ko bayananku." },
            { objective: "O2", q: "Ƙungiyarku mai zaman kanta (nonprofit) ta koma daga IaaS zuwa SaaS. Me zai faru da aikin tsaronta?", options: ["Yanzu dole ta tsare cibiyar bayanai", "Babu abin da zai canja kwata-kwata", "Mai bayarwa zai ƙara ɗaukar aiki, amma bayananku da asusunku har yanzu aikinku ne", "Mai bayarwa zai zama mai alhakin kalmomin sirrinku"], answer: 2, why: "Komawa zuwa SaaS yana mayar da ƙarin aiki ga mai bayarwa, amma bayananku da damar shiga koyaushe naku ne." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Yadda aka tsara Azure: yankuna, zones da resource groups",
          minutes: 6,
          goal: "Bayyana inda Azure ke aiki da yadda ake tsara albarkatu da nemo su a Azure portal.",
          text: [
            "Azure yana aiki a cibiyoyin bayanai (datacenters) a faɗin duniya, waɗanda aka haɗa su cikin yankuna (regions), kamar East US ko South Africa North. Kuna zaɓar yanki don kowane abu da kuka gina: kusa da masu amfani yawanci ya fi sauri, kuma wasu bayanai suna da ƙa'idoji kan ƙasar da dole su zauna a ciki. Yankuna da yawa suna da availability zones (zones na samuwa): cibiyoyin bayanai daban-daban masu nasu wutar lantarki da sanyaya, don idan ɗaya ya lalace, wani ya ci gaba da aiki. Ana kuma haɗa yankuna biyu-biyu da wani yanki a yanki ɗaya na ƙasa don farfaɗowa daga bala'i.",
            "Duk abin da kuka ƙirƙira (virtual machine, rumbun bayanai wato database, storage account) ana kiransa resource (albarka). Albarkatu suna shiga resource groups, wato manyan fayiloli (folders) na abubuwan da suke tare, kamar duk abin da ke na shafin intanet ɗaya. Resource groups suna cikin subscription, wato asusun biyan kuɗi. Manyan ƙungiyoyi suna haɗa subscriptions da management groups.",
            "Kuna gudanar da duk wannan a Azure portal, shafin intanet a portal.azure.com. Kuna kuma iya amfani da Azure Cloud Shell, Azure CLI ko Azure PowerShell don gudanar da shi ta hanyar rubuta umarni."
          ],
          steps: ["Ku zaɓi yanki kusa da masu amfani da ya cika duk ƙa'idojin bayanai.", "Ku yi amfani da availability zones idan dole hidimar ta ci gaba da aiki.", "Ku sa albarkatun da suke tare a resource group ɗaya.", "Ku san wane subscription ne ke biyan kuɗinsu.", "Ku gudanar da komai a Azure portal ko da kayan aikin rubuta umarni."],
          words: [["Yanki (region)", "wani wuri a duniya mai cibiyar bayanai ɗaya ko fiye ta Azure."], ["Availability zone", "cibiyar bayanai daban a cikin yanki mai nata wutar lantarki, sanyaya da hanyar sadarwa."], ["Resource (albarka)", "duk abin da kuka ƙirƙira a Azure, kamar virtual machine ko database."], ["Resource group", "babban fayil (folder) da ke ɗauke da albarkatun da suke tare."], ["Subscription", "asusun da ake ɗora kuɗin Azure a kansa."], ["Management group", "hanyar haɗa subscriptions da yawa ƙarƙashin ƙa'idoji ɗaya."], ["Azure portal", "shafin intanet don gudanar da Azure."]],
          slides: [
            { title: "Inda Azure ke aiki", bullets: ["Cibiyoyin bayanai da aka haɗa cikin yankuna", "Ku zaɓi yanki kusa da masu amfani da ƙa'idoji", "Availability zones: cibiyoyin bayanai daban-daban"] },
            { title: "Yadda aka tsara shi", bullets: ["Resource: abu ɗaya da kuka ƙirƙira", "Resource group: albarkatun da suke tare", "Subscription: biyan kuɗi", "Management group: subscriptions da yawa"] },
            { title: "Yadda kuke gudanar da shi", bullets: ["Azure portal a portal.azure.com", "Cloud Shell, Azure CLI, Azure PowerShell"] }
          ],
          sources: [STUDY],
          tryIt: "Ku tsara wa wata cibiyar al'umma da ke son shafin intanet da wurin ajiye fom ɗin rajista: ku sa wa resource group suna, ku jera albarkatu biyu da za su shiga ciki, ku zaɓi yanki kusa da ku. Ku rubuta dalili ɗaya na zaɓin yankinku.",
          youCanNow: "bayyana yankuna, availability zones, albarkatu, resource groups, subscriptions da management groups.",
          quickCheck: [
            { objective: "O3", q: "Mene ne resource group a Azure?", options: ["Ƙungiyar ma'aikatan Microsoft", "Wani nau'in virtual machine", "Asusun biyan kuɗi", "Babban fayil na albarkatun da suke tare, kamar shafin intanet ɗaya"], answer: 3, why: "Resource groups suna ɗauke da albarkatun da suke tare; subscription ne asusun biyan kuɗi." },
            { objective: "O3", q: "Masu amfani da ku suna South Africa, kuma dole bayanansu su zauna a ƙasar. Ta yaya za ku zaɓi yanki?", options: ["Ku zaɓi yanki mafi arha a ko'ina", "Ku zaɓi yanki kusa da masu amfani da ya cika ƙa'idojin bayanai", "Ku zaɓi yanki ba tare da tunani ba", "Ku yi amfani da kowane yanki a lokaci ɗaya"], answer: 1, why: "Ku zaɓi yanki kusa da masu amfani da kuma ya cika duk ƙa'idoji kan inda dole bayanai su zauna." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Ra'ayoyin cloud da ginshiƙan Azure",
        questions: [
          { objective: "O1", q: "Mene ne tsarin biyan-abin-da-aka-yi-amfani-da-shi (consumption-based)?", options: ["Kuna sayen duk sabobi a farko", "Komai kyauta ne koyaushe", "Kuna biyan abin da kuka yi amfani da shi kaɗai", "Kuna biyan farashi ɗaya har abada"], answer: 2, why: "Hidimomin cloud yawanci biya-gwargwadon-amfani ne." },
          { objective: "O1", q: "Shafin intanet na wani bankin abinci yana cika da mutane sosai sau ɗaya a wata. Wane amfanin cloud ne ya fi taimakawa?", options: ["Faɗaɗawa (scalability)", "Cloud na sirri", "CapEx", "SaaS"], answer: 0, why: "Faɗaɗawa tana ƙara albarkatu idan buƙata ta tashi, sannan ta rage su daga baya." },
          { objective: "O2", q: "Microsoft Teams da ake amfani da shi ta burauzar intanet misali ne na:", options: ["IaaS", "PaaS", "Yanki (region)", "SaaS"], answer: 3, why: "Manhaja ce da aka shirya don amfani, ana kawo ta ta intanet." },
          { objective: "O2", q: "A tsarin raba alhaki, mene ne aikinku KOYAUSHE?", options: ["Gina cibiyar bayanai", "Bayananku da wanda ke da damar shiga su", "Sanyaya sabobi", "Canja rumbun ajiya (hard drive) da ya lalace"], answer: 1, why: "Abokan ciniki koyaushe su ne masu bayanansu, asusunsu da damar shiga." },
          { objective: "O3", q: "Me ke ɗauke da albarkatun Azure da suke tare, kamar duk abin da ke na shafin intanet ɗaya?", options: ["Yanki (region)", "Resource group", "Availability zone", "Kalmar sirri"], answer: 1, why: "Resource groups suna tsara albarkatun da suke tare." }
        ]
      }
    },
    {
      name: "Babi na 2: Manyan hidimomi, kuɗi da takardar shaidarku",
      lessons: [
        {
          objectives: ["O4"],
          title: "Manyan hidimomin Azure: compute, networking, ma'ajiya da databases",
          minutes: 6,
          goal: "Daidaita buƙata ta yau da kullum da babbar hidimar Azure da ta dace.",
          text: [
            "Compute (ƙarfin sarrafawa) yana tafiyar da shirye-shiryenku. Azure Virtual Machines suna ba ku cikakkiyar kwamfuta a cloud (IaaS). Azure App Service yana ɗaukar shafukan intanet da manhajojin yanar gizo ba tare da kun kula da sabobi ba (PaaS). Containers suna ɗaure manhaja tare da duk abin da take buƙata don ta yi aiki iri ɗaya a ko'ina. Azure Functions yana tafiyar da ƙananan sassan code idan an tayar da su (serverless). Azure Virtual Desktop yana ba mutane tebur na Windows da za su iya shiga daga kowace na'ura.",
            "Networking (hanyoyin sadarwa) yana haɗa abubuwa. Azure virtual network ita ce hanyar sadarwarku ta sirri a cloud. VPN Gateway yana haɗa ta da ofishinku ta intanet; ExpressRoute haɗi ne na sirri da ba ya bi ta intanet na jama'a. Azure DNS yana mayar da sunaye zuwa adireshi.",
            "Ma'ajiya (storage) tana ajiye fayiloli da bayanai. Storage account yana ɗauke da Blob storage (hotuna, bidiyo, madadi), Azure Files (manyan fayiloli da ake rabawa), queues da tables. Matakan ma'ajiya (hot, cool, cold, archive) suna ƙara arha yayin da ba ku cika buɗe fayilolin ba. Zaɓuɓɓukan redundancy suna ajiye ƙarin kwafi don lalacewa kada ta rasa bayanai. Don databases, Azure yana da zaɓuɓɓuka da ake kula da su kamar Azure SQL Database da Azure Cosmos DB."
          ],
          steps: ["Kuna buƙatar shafin intanet? Ku duba Azure App Service.", "Kuna buƙatar cikakken iko kan sabar? Azure Virtual Machines.", "Kuna buƙatar code ya yi aiki idan wani abu ya faru? Azure Functions.", "Kuna buƙatar ajiye fayiloli ko madadi? Storage account da Blob storage.", "Fayilolin da ba a cika buɗewa ba? Ku yi amfani da mataki mafi sanyi kuma mafi arha."],
          words: [["Virtual machine (VM)", "kwamfuta da ke aiki a matsayin manhaja a cloud."], ["Azure App Service", "hidimar PaaS don ɗaukar shafukan intanet da manhajojin yanar gizo."], ["Container", "ɗauri na manhaja da duk abin da take buƙata don ta yi aiki."], ["Virtual network", "hanyar sadarwa ta sirri don albarkatunku na Azure."], ["Blob storage", "ma'ajiya don manyan fayiloli kamar hotuna, bidiyo da madadi."], ["Matakin ma'ajiya (storage tier)", "matakin farashi bisa yadda kuke yawan buɗe bayanan: hot, cool, cold ko archive."], ["Redundancy", "ajiye ƙarin kwafi don bayanai su tsira idan an sami lalacewa."]],
          slides: [
            { title: "Compute", bullets: ["Virtual Machines: cikakkiyar kwamfuta (IaaS)", "App Service: shafukan intanet (PaaS)", "Functions: code idan an tayar da shi", "Containers da Virtual Desktop"] },
            { title: "Networking", bullets: ["Virtual network: hanyar sadarwarku ta sirri a cloud", "VPN Gateway: haɗi da ofishinku", "ExpressRoute: haɗi na sirri", "Azure DNS: sunaye zuwa adireshi"] },
            { title: "Ma'ajiya da databases", bullets: ["Storage account: Blob, Files, queues, tables", "Matakai: hot, cool, cold, archive", "Redundancy yana ajiye ƙarin kwafi", "Azure SQL Database, Azure Cosmos DB"] }
          ],
          sources: [STUDY],
          tryIt: "Don cibiyar al'umma ta Darasi na 3, ku zaɓi hidima don kowace buƙata: shafin intanet na jama'a, wurin ajiye fom ɗin rajista da aka ɗauki hotonsu (scan), da tsofaffin hotuna da kusan ba a taɓa buɗewa ba. Ku rubuta wace hidima ce, kuma don hotunan, wane matakin ma'ajiya.",
          youCanNow: "daidaita buƙatu na yau da kullum da hidimomin Azure na compute, networking, ma'ajiya da databases.",
          quickCheck: [
            { objective: "O4", q: "Wace hidimar Azure ce ke tafiyar da ƙananan sassan code ne kawai idan wani abu ya tayar da su?", options: ["Azure Virtual Machines", "Azure DNS", "Azure Functions", "ExpressRoute"], answer: 2, why: "Azure Functions serverless ne: code yana aiki idan an tayar da shi, kuma kuna biya gwargwadon amfani." },
            { objective: "O4", q: "Wata cibiyar matasa tana buƙatar babban fayil da ake rabawa wanda duk ma'aikatanta za su iya buɗewa. Me za ku ba da shawara?", options: ["Azure Files a cikin storage account", "Azure Virtual Desktop", "VPN Gateway", "Azure SQL Database"], answer: 0, why: "Azure Files a cikin storage account yana ba da manyan fayiloli da ake rabawa." }
          ]
        },
        {
          objectives: ["O5","O6"],
          title: "Tsaro, gudanarwa da sarrafa kuɗi",
          minutes: 6,
          goal: "Ambaci kayan aikin Azure da ke kiyaye asusu, tilasta ƙa'idoji da hana lissafin kuɗi na ba-zata.",
          text: [
            "Shaida (identity): Microsoft Entra ID ita ce hidimar shiga asusu da kundin sunaye (directory) ta Azure. Ku kunna multifactor authentication (MFA, tabbatarwa ta hanyoyi da yawa), wadda ke neman shaida ta biyu kamar code a cikin manhaja, don kalmar sirri da aka sace kaɗai ba za ta isa ba. Single sign-on (SSO) yana bar mutane su yi amfani da asusu ɗaya don manhajoji da yawa. Role-based access control (RBAC, damar shiga bisa matsayi) yana ba kowane mutum damar shiga da aikinsa ke buƙata kaɗai. Zero Trust yana nufin kada ku taɓa ɗauka cewa wata buƙata tana lafiya; koyaushe ku tabbatar.",
            "Gudanarwa (governance): Azure Policy yana kafa ƙa'idoji, kamar \"a ƙirƙiri albarkatu a waɗannan yankuna kaɗai\". Resource locks (makullan albarkatu) suna hana a goge ko canja muhimman albarkatu bisa kuskure. Tags alamomi ne kamar department=youth ko project=website da ke taimaka muku rarrabawa da bin diddigin kuɗi. Microsoft Defender for Cloud yana duba tsarinku don neman matsalolin tsaro.",
            "Kuɗi: abin da kuke biya ya dogara da hidimar, girmanta, yankin, tsawon lokacin da take aiki da yawan bayanan da ke fita daga Azure. Na'urar lissafin farashi ta Azure kyauta tana ƙiyasta kuɗin wata-wata kafin ku gina komai. Cost Management yana bar ku kafa kasafi (budget) da faɗakarwa (alerts). Ƙa'ida mai sauƙi: ku goge abin da ba ku amfani da shi."
          ],
          steps: ["Ku kunna MFA ga kowane asusu.", "Ku ba mutane damar shiga da aikinsu ke buƙata kaɗai (RBAC).", "Ku ƙara tags ga kowace albarka.", "Ku yi amfani da Azure Policy da resource locks don muhimman ƙa'idoji.", "Ku fara ƙiyasta kuɗi a na'urar lissafin farashi, sannan ku kafa faɗakarwar kasafi."],
          words: [["Microsoft Entra ID", "hidimar Microsoft ta shiga asusu da kundin sunaye a cloud."], ["Multifactor authentication (MFA)", "shiga asusu da kalmar sirri tare da shaida ta biyu."], ["RBAC", "role-based access control: damar shiga bisa aikin mutum."], ["Zero Trust", "hanyar tsaro: kada a taɓa ɗauka amana, koyaushe a tabbatar."], ["Azure Policy", "kayan aiki da ke tilasta ƙa'idoji kan abin da za a iya ƙirƙira."], ["Resource lock (makullin albarka)", "yana hana a goge ko canja albarka bisa kuskure."], ["Tag", "alama a kan albarka da ake amfani da ita don rarraba ta da bin diddigin kuɗi."]],
          slides: [
            { title: "Shaida da damar shiga", bullets: ["Microsoft Entra ID don shiga asusu", "MFA: shaida ta biyu", "RBAC: damar shiga da aiki ke buƙata kaɗai", "Zero Trust: koyaushe ku tabbatar"] },
            { title: "Gudanarwa", bullets: ["Azure Policy: tilasta ƙa'idoji", "Resource locks: hana kurakurai", "Tags: rarrabawa da bin diddigin kuɗi", "Defender for Cloud: nemo wuraren rauni"] },
            { title: "Sarrafa kuɗi", bullets: ["Kuɗi ya dogara da hidima, girma, yanki da lokaci", "Na'urar lissafin farashi: ku fara ƙiyastawa", "Kasafi da faɗakarwa a Cost Management", "Ku goge abin da ba ku amfani da shi"] }
          ],
          sources: [STUDY, CALC],
          tryIt: "Ku rubuta ƙa'idojin tsaro da kuɗi uku don tsarin Azure na cibiyar al'umma, ɗaya don shiga asusu, ɗaya don damar shiga, ɗaya don kashe kuɗi. Misali: \"Kowane asusun ɗan sa-kai yana amfani da MFA.\" Sannan ku rubuta tags biyu da za ku sa a kan kowace albarka.",
          youCanNow: "bayyana yadda Azure ke kiyaye asusu, tilasta ƙa'idoji da riƙe kuɗi a ƙarƙashin iko.",
          quickCheck: [
            { objective: "O5", q: "Mene ne ma'anar Zero Trust?", options: ["A amince da kowace buƙata daga cikin ofis", "Koyaushe a tabbatar; kada a taɓa ɗauka cewa buƙata tana lafiya", "A kashe kalmomin sirri", "A amince da mai bayar da cloud kaɗai"], answer: 1, why: "Zero Trust yana nufin ana duba kowace buƙata maimakon a ɗauka tana lafiya." },
            { objective: "O5", q: "An sace kalmar sirrin wani ɗan sa-kai, amma ɓarawon bai iya shiga ba. Wace saitin ce ta fi yiwuwa ta hana shi?", options: ["Tag a kan albarkar", "Matakin ma'ajiya mafi sanyi", "Resource group", "Multifactor authentication (MFA)"], answer: 3, why: "MFA tana neman shaida ta biyu, don haka kalmar sirri da aka sace kaɗai ba ta isa ba." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ƙiyasta kuɗi da shirya hanyarku ta AZ-900",
          minutes: 6,
          goal: "Ƙiyasta kuɗin wata-wata a na'urar lissafin farashi da yin shirin karatu don AZ-900.",
          text: [
            "Na'urar lissafin farashi (pricing calculator) kyauta ce a shafin intanet na Microsoft. Kuna ƙara hidimomin da kuke shirin amfani da su, ku zaɓi yanki da zaɓuɓɓuka kamar girma da awanni, sai ta nuna ƙiyasin kuɗin wata-wata. Farashi yana canjawa kuma ya dogara da yanki, don haka koyaushe ku yi amfani da na'urar lissafi maimakon lambar da kuka karanta a wani wuri.",
            "Idan kuna son yin atisaye a cikin Azure da kansa, Microsoft yana bayar da asusu kyauta mai wasu hidimomi kyauta na watanni 12 da fiye da hidimomi 65 kyauta kowane wata har zuwa wasu adadi, ga sababbin abokan ciniki. Ku karanta sharuɗɗan yanzu a shafin hidimomi kyauta na Microsoft kafin ku yi rajista, ku kafa faɗakarwar kasafi, kuma ku goge albarkatun atisaye idan kun gama. Ɗalibai suna iya cancanta da wani tayin Azure for Students daban da imel na makaranta.",
            "Jarabawar takardar shaidar Microsoft Certified: Azure Fundamentals ita ce AZ-900. Jagorar karatu ta Microsoft ta jera fannoni uku: ra'ayoyin cloud (25-30%), tsarin gine-gine da hidimomin Azure (35-40%), da gudanarwa da mulkin Azure (30-35%). Kuna buƙatar maki 700 ko fiye don ku ci. Shafin jarabawar ya jera minti 45 don gwajin, kuma farashin ya dogara da ƙasar da kuke yin ta, don haka ku duba shi a can. Microsoft Learn yana da horo kyauta da gwajin atisaye kyauta."
          ],
          steps: ["Ku buɗe na'urar lissafin farashi ta Azure.", "Ku ƙara hidimomin da ke cikin shirinku, ku zaɓi yankinku da girma.", "Ku rubuta ƙiyasin jimillar kuɗin wata-wata.", "Ku buɗe shafin AZ-900 a Microsoft Learn ku yi gwajin atisaye kyauta.", "Ku jera fannoni biyu da kuka fi rauni a ciki da darussan Microsoft Learn kyauta na su."],
          words: [["Na'urar lissafin farashi (pricing calculator)", "kayan aikin Microsoft kyauta don ƙiyasta kuɗin Azure kafin ku gina."], ["AZ-900", "lambar jarabawar Microsoft Certified: Azure Fundamentals."], ["Gwajin atisaye (practice assessment)", "tambayoyin atisaye kyauta a Microsoft Learn da ke nuna shirinku."], ["Microsoft Learn", "shafin intanet na Microsoft na horo da takardar shaida kyauta."]],
          slides: [
            { title: "Ku ƙiyasta kafin ku gina", bullets: ["Na'urar lissafin farashi ta Azure kyauta", "Ku ƙara hidimomi, yanki da girma", "Farashi yana canjawa: koyaushe ku sake dubawa"] },
            { title: "Yin atisaye lafiya", bullets: ["Ku fara karanta sharuɗɗan asusu kyauta", "Ku kafa faɗakarwar kasafi", "Ku goge albarkatun atisaye idan kun gama"] },
            { title: "Jarabawar AZ-900", bullets: ["Ra'ayoyin cloud: 25-30%", "Tsarin gine-gine da hidimomi: 35-40%", "Gudanarwa da mulki: 30-35%", "Makin cin jarabawa: 700; farashi ya bambanta da ƙasa"] },
            { title: "Matakinku na gaba", bullets: ["Gwajin atisaye kyauta a Microsoft Learn", "Ku karanta fannoni biyu da kuka fi rauni a ciki"] }
          ],
          sources: [CALC, FREE, CERT, STUDY],
          tryIt: "Aikin ƙarshe: ku rubuta shirin Azure mai shafi ɗaya don shafin intanet da ma'ajiyar fayiloli na wata ƙungiyar al'umma (hidimomi da nau'i, yanki, resource group, shiga asusu lafiya, tags da kasafi), ku ƙara ƙiyasin wata-wata daga na'urar lissafin farashi, sannan ku yi gwajin atisaye na AZ-900 kyauta ku jera fannoni biyu da kuka fi rauni a ciki.",
          youCanNow: "tsarawa da ƙiyasta farashin ƙaramin tsarin Azure, da bin hanya a sarari zuwa takardar shaidar AZ-900.",
          quickCheck: [
            { objective: "O6", q: "Me yasa za ku yi amfani da na'urar lissafin farashi ta Azure maimakon farashin da kuka karanta a intanet?", options: ["Farashi yana canjawa kuma ya dogara da yanki, don haka na'urar lissafi tana ba da ƙiyasi na yanzu", "Na'urar lissafi tana mayar da Azure kyauta", "Farashin intanet koyaushe ya fi tsada", "Na'urar lissafi tana yi muku rajista da kanta"], answer: 0, why: "Farashi yana canjawa kuma ya bambanta da yanki, don haka ku ƙiyasta da na'urar lissafi bisa zaɓinku." },
            { objective: "O6", q: "Kun yi gwajin atisaye na AZ-900 kyauta. Mene ne mataki mafi kyau na gaba?", options: ["Ku yi rajistar jarabawar yau ba tare da karatu ba", "Ku sake yi har sai kun haddace amsoshin", "Ku jera fannoni biyu da kuka fi rauni a ciki ku nemo darussan Microsoft Learn kyauta na su", "Ku tsaya, domin makin atisaye ba shi da muhimmanci"], answer: 2, why: "Fannonin da kuka fi rauni suna nuna inda za ku karanta a gaba, kuma Microsoft Learn yana da darussa kyauta na kowanne." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Manyan hidimomi, kuɗi da takardar shaidarku",
        questions: [
          { objective: "O4", q: "Wace hidimar Azure ce ke ɗaukar shafin intanet ba tare da kun kula da sabobi ba?", options: ["Azure Virtual Machines", "ExpressRoute", "Resource locks", "Azure App Service"], answer: 3, why: "App Service hidimar PaaS ce ta ɗaukar shafukan intanet." },
          { objective: "O4", q: "Ana kusan ba a taɓa buɗe tsofaffin hotuna ba. Wane zaɓin ma'ajiya ne ke ajiye kuɗi?", options: ["Mataki mafi sanyi kamar cool, cold ko archive", "Matakin hot", "Babbar virtual machine", "Subscription na biyu"], answer: 0, why: "Matakai masu sanyi suna da arha don bayanan da ba ku cika buɗewa ba." },
          { objective: "O5", q: "Wane kayan aiki ne ke hana a goge muhimmiyar albarka bisa kuskure?", options: ["Tag", "Na'urar lissafin farashi", "Resource lock", "Yanki (region)"], answer: 2, why: "Makullai suna hana gogewa ko canji bisa kuskure." },
          { objective: "O5", q: "Me MFA ke ƙarawa ga shiga asusu?", options: ["Sunan mai amfani mafi tsawo", "Subscription kyauta", "Sabon yanki", "Shaida ta biyu, kamar code a cikin manhaja"], answer: 3, why: "MFA tana nufin kalmar sirri da aka sace kaɗai ba ta isa ba." },
          { objective: "O6", q: "A ina ya kamata ku samo farashin jarabawar AZ-900 na yanzu?", options: ["Hasashen aboki", "Tsohon rubutun blog", "Shafin jarabawa na hukuma na Microsoft don ƙasarku", "Kowane chatbot na AI"], answer: 2, why: "Farashin ya dogara da ƙasa, kuma shafin hukuma shi ne na yanzu." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Tushen Microsoft Azure",
    questions: [
      { objective: "O1", q: "Cloud computing yana nufin:", options: ["Ajiye fayiloli a kan USB kaɗai", "Hayar ƙarfin kwamfuta da hidimomi ta intanet", "Hasashen yanayi", "Sayen sabuwar kwamfutar tafi-da-gidanka"], answer: 1, why: "Cloud yana nufin amfani da kwamfutocin mai bayarwa ta intanet." },
      { objective: "O1", q: "Biyan kuɗi mai yawa a farko don sayen sabobi shi ne:", options: ["CapEx", "OpEx", "SaaS", "Serverless"], answer: 0, why: "Kuɗin jari saye ne a farko." },
      { objective: "O1", q: "Hidima tana ci gaba da aiki ko da na'ura ɗaya ta lalace. Wannan shi ne:", options: ["Tag", "Management group", "Samuwa koyaushe (high availability)", "CapEx"], answer: 2, why: "Samuwa koyaushe tana riƙe hidimomi a kan aiki duk da lalacewa." },
      { objective: "O1", q: "Wata ƙungiya tana amfani da sabobinta tare da Azure. Wannan shi ne:", options: ["Cloud gauraye (hybrid)", "Cloud na sirri kaɗai", "Cloud na jama'a kaɗai", "SaaS"], answer: 0, why: "Gauraye yana haɗa na sirri da na jama'a." },
      { objective: "O2", q: "Kuna hayar virtual machine kuma ku ke kula da tsarin aikinta (operating system). Wannan shi ne:", options: ["SaaS", "PaaS", "Yanki (region)", "IaaS"], answer: 3, why: "Kula da tsarin aiki a kan na'urorin haya IaaS ne." },
      { objective: "O2", q: "Code da ke aiki ne kawai idan an tayar da shi, babu sabar da za a kula da ita, ana kiransa:", options: ["Resource lock", "Serverless", "Ma'ajiyar archive", "VPN"], answer: 1, why: "Serverless yana aiki idan an buƙata; Azure Functions misali ne." },
      { objective: "O2", q: "Wane ne koyaushe ke tsare ginin cibiyar bayanai?", options: ["Abokin ciniki", "Mai bayar da cloud", "Bankin mai amfani", "Babu kowa"], answer: 1, why: "Tsaron ginin koyaushe aikin mai bayarwa ne." },
      { objective: "O3", q: "Yankin Azure (region) shi ne:", options: ["Asusun biyan kuɗi", "Wani nau'in database", "Ƙa'idar kalmar sirri", "Wani wuri a duniya mai cibiyar bayanai ɗaya ko fiye"], answer: 3, why: "Yankuna su ne inda cibiyoyin bayanai na Azure suke." },
      { objective: "O3", q: "Availability zones su ne:", options: ["Cibiyoyin bayanai daban-daban a cikin yanki masu nasu wutar lantarki da sanyaya", "Matakan farashin ma'ajiya", "Ƙungiyoyin masu amfani", "Ƙasashe"], answer: 0, why: "Zones suna kariya idan cibiyar bayanai ɗaya ta lalace." },
      { objective: "O3", q: "Wanne ne asusun biyan kuɗi da ke ɗauke da resource groups?", options: ["Tag", "Container", "Subscription", "Yanki (region)"], answer: 2, why: "Ana biyan kuɗin subscriptions kuma suna ɗauke da resource groups." },
      { objective: "O3", q: "A ina kuke gudanar da Azure a burauzar intanet?", options: ["Shagon manhajoji", "Matakin ma'ajiya", "ExpressRoute", "Azure portal"], answer: 3, why: "Azure portal shi ne shafin gudanarwa." },
      { objective: "O4", q: "Wace hidima ce ke ba ku cikakkiyar kwamfuta a cloud?", options: ["Azure DNS", "Azure Policy", "Azure Virtual Machines", "Tags"], answer: 2, why: "Virtual Machines compute ne na IaaS." },
      { objective: "O4", q: "Wanne ne haɗi na sirri zuwa Azure da ba ya amfani da intanet na jama'a?", options: ["VPN Gateway", "ExpressRoute", "Azure DNS", "Blob storage"], answer: 1, why: "ExpressRoute haɗi ne na sirri." },
      { objective: "O4", q: "A ina za ku ajiye madadi (backups) da bidiyo?", options: ["Blob storage a cikin storage account", "Azure Policy", "Management group", "Microsoft Entra ID"], answer: 0, why: "Blob storage yana ɗauke da manyan fayiloli." },
      { objective: "O5", q: "Wace ce hidimar shiga asusu da kundin sunaye ta Azure?", options: ["Azure Advisor", "Azure Functions", "Microsoft Entra ID", "Matakin archive"], answer: 2, why: "Entra ID yana gudanar da shaidu da shiga asusu." },
      { objective: "O5", q: "Wani ɗan sa-kai yana buƙatar karanta rahotanni ne kawai. Wane ra'ayi ne ke iyakance shi zuwa wannan?", options: ["Role-based access control (RBAC)", "Cloud gauraye", "Faɗaɗawa (scalability)", "Ma'ajiyar archive"], answer: 0, why: "RBAC yana ba da damar shiga da matsayi ke buƙata kaɗai." },
      { objective: "O5", q: "Kuna son hana kowa ƙirƙirar albarkatu a wajen yankinku. Wane kayan aiki?", options: ["Tags", "Na'urar lissafin farashi", "Container", "Azure Policy"], answer: 3, why: "Azure Policy yana tilasta ƙa'idoji kamar yankunan da aka yarda da su." },
      { objective: "O5", q: "Alamomi kamar project=website a kan albarkatu ana kiransu:", options: ["Locks", "Tags", "Zones", "Tiers"], answer: 1, why: "Tags suna rarraba albarkatu kuma suna taimakawa bin diddigin kuɗi." },
      { objective: "O6", q: "Kafin ku gina komai, ta yaya za ku ƙiyasta kuɗin wata-wata?", options: ["Ku yi hasashe", "Ku yi amfani da na'urar lissafin farashi ta Azure", "Ku jira lissafin kuɗi na farko", "Ku tambayi baƙo a intanet"], answer: 1, why: "Na'urar lissafi tana ƙiyasta kuɗi kafin ku gina." },
      { objective: "O6", q: "Wane maki kuke buƙata don cin AZ-900, a cewar jagorar karatu ta Microsoft?", options: ["500", "600", "700 ko fiye", "900 ko fiye"], answer: 2, why: "Jagorar karatu ta Microsoft ta ce ana buƙatar maki 700 ko fiye." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      3,
      4,
      6,
      7,
      9,
      11,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Nau'in hidima da hidimomi",
        objective: "O4",
        notYet: "Shirin bai ambaci hidimomin Azure ba, ko kuma ba su dace da shafin intanet da ma'ajiyar fayiloli ba.",
        meets: "Ya ambaci nau'in hidima (IaaS, PaaS ko SaaS) da hidimomin da suka dace, kamar App Service da storage account.",
        exceeds: "Ya faɗi dalilin da yasa kowace hidima ta fi wani zaɓi dacewa."
      },
      {
        name: "Yanki da tsari",
        objective: "O3",
        notYet: "Ba a ambaci yanki ko resource group ba.",
        meets: "Ya ambaci yanki tare da dalili, kuma ya sa albarkatun a resource group ɗaya.",
        exceeds: "Ya kuma ambaci subscription da ke biya, da ko ana buƙatar availability zones."
      },
      {
        name: "Shiga asusu lafiya da ƙa'idoji",
        objective: "O5",
        notYet: "Bai faɗi yadda mutane ke shiga asusu ko wanda zai iya yin me ba.",
        meets: "Yana amfani da MFA kuma yana ba kowane mutum damar shiga da yake buƙata kaɗai (RBAC).",
        exceeds: "Ya kuma ƙara tags, policy ko resource lock kuma ya faɗi abin da kowanne ke karewa."
      },
      {
        name: "Ƙiyasin kuɗi",
        objective: "O6",
        notYet: "Babu ƙiyasi, ko lambar da ba a ɗauko daga na'urar lissafin farashi ba.",
        meets: "Ya ba da ƙiyasin jimillar kuɗin wata-wata daga na'urar lissafin farashi da faɗakarwar kasafi.",
        exceeds: "Ya ambaci canji ɗaya da zai rage kuɗin, kamar matakin ma'ajiya mafi sanyi."
      },
      {
        name: "Shirin karatu",
        objective: "O6",
        notYet: "Ba a yi gwajin atisaye ba.",
        meets: "Ya yi gwajin atisaye kyauta kuma ya jera fannoni biyu da ya fi rauni a ciki.",
        exceeds: "Ya haɗa kowane fanni mai rauni da darasin Microsoft Learn kyauta da ranar da zai karanta shi."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka yi jarabawar AZ-900 ta hukuma cikin kwanaki 90, da adadin waɗanda suka ci",
      "Masu koyo da suka nemi ko suka fara aikin taimakon IT, help desk ko cloud, ko horon aiki (internship)",
      "Ƙungiyoyin al'umma da suka yi amfani da shirin wani mai koyo don mayar da shafin intanet ko fayiloli zuwa cloud"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta ko tablet mai burauzar intanet da intanet",
      "Na'urar lissafin farashi ta Azure kyauta ta Microsoft, da asusun Microsoft Learn kyauta don gwajin atisaye",
      "Samfurin shiri mai shafi ɗaya, ko takarda da alƙalami",
      "Kusan minti 60 don darussa, gwaje-gwaje da shirin, da kuma kusan minti 45 don gwajin atisaye"
    ],
    facilitatorNotes: [
      "Ku yi gwajin farko tare, sannan ku yi babi ɗaya a kowane zama; ku bi na'urar lissafin farashi tare a kan allon da kowa ke gani.",
      "Ba a buƙatar asusun Azure. Idan masu koyo suka zaɓi buɗe asusu kyauta, ku sa su karanta sharuɗɗan yanzu, su kafa faɗakarwar kasafi, kuma su goge albarkatun atisaye idan sun gama.",
      "Ku yi amfani da wata ƙungiya ta gaske a yanki, kamar bankin abinci ko cibiyar matasa, a matsayin misali don shirin mai shafi ɗaya.",
      "Ku tunatar da masu koyo cewa bayanan jarabawa da farashi suna canjawa; ku tura su zuwa shafin jarabawa na hukuma na Microsoft don ƙasarsu.",
      "Ku ba da maki ga shirin da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
