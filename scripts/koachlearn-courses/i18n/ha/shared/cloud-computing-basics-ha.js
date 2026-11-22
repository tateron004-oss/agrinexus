"use strict";

// Koach Learn course, Hausa (ha) translation of shared/cloud-computing-basics.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "cloud-computing-basics-ha",
  lang: "ha",
  translationOf: "cloud-computing-basics",
  category: "Youth",
  name: "Tushen Cloud Computing (Kwamfutar Gajimare)",
  skills: "Bayanin mene ne cloud, Bambance SaaS, PaaS da IaaS, Ajiye fayiloli da daidaita su a cloud, Raba fayiloli lafiya, Kiyaye asusun cloud",
  outcome: "bayanin mene ne cloud computing da manyan nau'o'in hidimarsa guda uku, sannan ku yi amfani da hidimar ajiya ta cloud kyauta don ajiye fayiloli, tsara su da raba su lafiya, tare da asusunku a kiyaye da tabbatarwa mataki biyu.",
  about: [
    "Duk lokacin da kuke kallon bidiyo ta intanet, kuke ajiye hoto a Google Photos ko iCloud, ko kuke aiki a Google Doc tare da abokin makaranta, kuna amfani da cloud computing. Kamfanoni suna gudanar da shafukan intanet, manhajoji (apps) da AI a kansa, kuma ana neman ƙwarewar cloud a ayyuka da yawa.",
    "Wannan kwas ɗin yana bayanin mene ne cloud da kalmomi masu sauƙi, manyan nau'o'in hidimomin cloud, da su wane ne manyan kamfanonin da ke bayar da shi. Sannan za ku yi amfani da hidimar ajiya ta cloud kyauta don ajiye fayiloli, tsara su da raba su lafiya, kamar yadda ƙungiyoyi a makaranta da wurin aiki suke yi.",
    "Kowane darasi yana ɗaukar kusan minti biyar. Ku karanta darasin, ku kalli hotunan bayani (slides), sannan ku yi aikin \"Gwada yanzu\". Akwai ɗan gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe. Idan kuna son ci gaba, kwas ɗin \"Tushen Microsoft Azure\" yana ginuwa kan wannan."
  ],
  finalTask: "A Google Drive ko Microsoft OneDrive: ku ƙirƙiri folda mai suna \"Career Documents\", ku ɗora ko ku ƙirƙiri fayiloli biyu a cikinta (misali takardar bayanin aiki (résumé) da jerin masu shaida), ku raba fayil ɗaya da aboki ko wani a iyali don kallo kawai (view-only), ku duba wa ke da damar shiga, sannan ku cire damarsa. Ku tabbata tabbatarwa mataki biyu a kunne take a asusun. A ƙarshe, ku rubuta jimloli uku da ke bayanin cloud, ku kuma ambaci misali ɗaya na SaaS, ɗaya na PaaS da ɗaya na IaaS.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Matasa (masu shekaru 13 zuwa 19 da matasa manya) a makaranta, shirye-shiryen horo ko ayyukan farko. Suna amfani da manhajojin cloud kowace rana amma ba su cika tunanin yadda cloud ke aiki ba, ko yadda ake tsara fayiloli da raba su da gangan.",
    startingPoint: "Suna iya amfani da wayar zamani (smartphone), kallon bidiyo ta intanet, amfani da imel da manhajojin sada zumunta, kuma wataƙila suna da asusun Google ko Microsoft. Kaɗan ne suka tsara foldoji, suka saita izinin rabawa, ko suka kunna tabbatarwa mataki biyu.",
    gap: "Makaranta, horon aiki (internship) da ayyuka suna sa ran mutane su ajiye, tsara da raba fayiloli a cloud, kuma su san kalmomin cloud na asali da ake amfani da su a ayyukan fasaha. Ba tare da waɗannan ƙwarewar ba, masu koyo suna rasa aikinsu, suna raba fayilolin sirri fiye da kima, kuma suna barin asusunsu a buɗe ga zamba ta saƙo (phishing) da satar kalmar sirri.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli (kusan aji 7 zuwa 8)",
      "Na'urori: waya ko kwamfutar makaranta ko ta ɗakin karatu da ake rabawa; na'ura ta biyu ba dole ba ce",
      "Lokaci: darussa na minti 5 da suka dace da lokacin makaranta ko aiki",
      "Sirri: babu lambar Social Security ta gaske, bayanan banki ko kalmomin sirri a fayilolin atisaye",
      "Wasu masu koyo 'yan ƙasa da shekara 18 suna iya buƙatar asusun iyaye ko na makaranta don amfani da hidimomin Google ko Microsoft"
    ],
    prerequisites: "Babu. Masu koyo da ba su saba da asusun imel ba za su iya fara buɗe asusun Google ko Microsoft kyauta tare da babba ko mai taimako a shirin."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku jerin manhajojin yau da kullum da misalin ƙaramin kasuwanci", action: "bayanin mene ne cloud computing da ambaton manyan amfaninsa da haɗarinsa", standard: "da kalmominku, tare da aƙalla amfani biyu da haɗari ɗaya" },
    { id: "O2", condition: "Idan aka ba ku hidimomin cloud guda shida", action: "rarraba kowanne zuwa SaaS, PaaS ko IaaS da faɗin abin da ke hannunku a kowanne", standard: "kuna samun aƙalla 5 cikin 6 daidai" },
    { id: "O3", condition: "Ta amfani da Google Drive ko OneDrive", action: "ƙirƙirar folda, ƙara fayiloli biyu da ba su sunaye masu sarari", standard: "ba tare da taimako ba, ta yadda wani zai iya samun kowane fayil ta sunansa" },
    { id: "O4", condition: "Idan aka ba ku fayil da mutumin da za ku raba shi da shi", action: "raba fayil ɗin da mafi ƙarancin damar da ake buƙata, duba wa ke da damar shiga da cire damar", standard: "ba tare da barin wani fayil a buɗe ga mutanen da ba sa buƙatarsa ba" },
    { id: "O5", condition: "A asusunku na Google ko Microsoft", action: "kunna tabbatarwa mataki biyu, duba na'urorin da suka shiga asusun da gane saƙon zamba (phishing)", standard: "kafin a gama aikin ƙarshe" }
  ],
  chapters: [
    {
      name: "Babi na 1: Mene ne cloud",
      lessons: [
        {
          objectives: ["O1"],
          title: "Cloud da kalmomi masu sauƙi",
          minutes: 4,
          goal: "Bayyana da kalmominku mene ne cloud computing.",
          text: [
            "\"Cloud\" (gajimare) yana nufin kwamfutoci a manyan gine-gine da ake kira cibiyoyin bayanai (data centers) waɗanda kuke amfani da su ta intanet. Maimakon ku ajiye komai a wayarku ko kwamfutarku, fayilolinku, manhajojinku da ƙarfin kwamfuta suna kan waɗannan kwamfutoci, kuma kuna kai musu daga kowace na'ura.",
            "Ku yi tunanin wutar lantarki. Ba ku gina tashar wuta a gida; kuna haɗawa kawai kuna biyan abin da kuka yi amfani da shi. Cloud computing yana aiki haka: kamfani ne ke mallakar kwamfutocin, kuma mutane da kasuwanci suna amfani da abin da suke buƙata, a lokacin da suke buƙata.",
            "Misalan yau da kullum: imel na Gmail da Outlook, Google Drive, OneDrive, iCloud da Dropbox don fayiloli, Netflix da Spotify don kallo da sauraro ta intanet, da mataimakan AI kamar ChatGPT ko Copilot, waɗanda ke aiki a kan kwamfutocin cloud."
          ],
          words: [["Cloud computing", "amfani da kwamfutoci, ajiya da shirye-shirye ta intanet maimakon a na'urarku."], ["Cibiyar bayanai (data center)", "babban gini cike da kwamfutoci masu gudanar da hidimomin cloud."], ["Server", "kwamfuta mai ƙarfi da ke bayar da hidima ga sauran kwamfutoci ta hanyar sadarwa."]],
          slides: [
            { title: "Mene ne cloud", bullets: ["Kwamfutoci a cibiyoyin bayanai", "Kuna amfani da su ta intanet", "Daga kowace na'ura"] },
            { title: "Kamar wutar lantarki", bullets: ["Ba ku gina tashar wuta", "Kuna haɗawa kuna biyan abin da kuka yi amfani da shi"] },
            { title: "Kun riga kuna amfani da shi", bullets: ["Gmail, Outlook", "Google Drive, OneDrive, iCloud, Dropbox", "Netflix, Spotify, mataimakan AI"] }
          ],
          tryIt: "Ku rubuta manhajoji ko shafukan intanet guda biyar da kuka yi amfani da su a wannan makon. Kusa da kowanne, ku rubuta \"cloud\" idan kayanku suna ajiye ko suna aiki a kwamfutocin kamfanin, ba a na'urarku kaɗai ba.",
          youCanNow: "bayanin cloud computing da kalmominku da nuna hidimomin cloud da kuke riga kuna amfani da su.",
          quickCheck: [
            { objective: "O1", q: "Ina fayilolinku suke idan kun ajiye su a cloud?", options: ["A kwamfutoci a cibiyar bayanai da kuke kai musu ta intanet", "A katin ajiya na wayarku kaɗai", "A faifan da kuke aika wa kamfanin ta gidan waya", "A cikin saƙonnin tes na wayarku"], answer: 0, why: "Cloud kwamfutoci ne a cibiyoyin bayanai da kuke amfani da su ta intanet daga kowace na'ura." },
            { objective: "O1", q: "Aboki ya tambaye ku me yasa cloud yake kamar wutar lantarki. Me za ku ce?", options: ["Duka biyun suna daina aiki da dare", "Duka biyun suna buƙatar waya zuwa gidanku", "Kuna amfani da abin da kuke buƙata ba tare da mallakar kwamfutocin ba, kamar wuta ba tare da tashar wuta ba", "Duka biyun kyauta ne ga kowa"], answer: 2, why: "Darasin ya kwatanta cloud da haɗawa da biyan wuta ba tare da gina tashar wuta ba." }
          ]
        },
        {
          objectives: ["O1"],
          title: "Me yasa mutane da kasuwanci suke amfani da cloud",
          minutes: 5,
          goal: "Ambaci manyan amfani da haɗarin cloud.",
          text: [
            "Amfani: kuna iya kai wa fayilolinku daga kowace na'ura; ɓacewar waya ba ta nufin ɓacewar hotuna; ƙungiya za ta iya aiki a takarda ɗaya a lokaci ɗaya; kuma kasuwanci zai iya farawa ƙarami ya girma, yana biyan ƙarin ƙarfin kwamfuta kawai idan yana buƙata, maimakon sayen servers masu tsada.",
            "Haɗari: kuna buƙatar intanet; idan wani ya saci kalmar sirrinku, zai iya kai wa fayilolinku daga ko'ina; shirye-shiryen kyauta suna da iyakar ajiya; kuma kamfani ne ke riƙe da bayananku, don haka ya kamata ku san saitunan sirrinsa.",
            "Manyan kamfanonin cloud na kasuwanci sun haɗa da Amazon Web Services (AWS), Microsoft Azure da Google Cloud. Ga mutane na yau da kullum, Google, Microsoft, Apple da Dropbox suna bayar da ajiyar cloud kyauta tare da ƙari na kuɗi. Ku duba shafin kowane kamfani don ganin yawan ajiyar kyauta na yanzu."
          ],
          words: [["Scalability (sassaucin girma)", "ikon ƙara ko rage ƙarfin kwamfuta yadda ake buƙata."], ["Mai bayar da hidima (provider)", "kamfanin da ke gudanar da hidimar cloud."], ["Iyakar ajiya", "mafi yawan bayanan da shirinku ya bar ku ajiye."]],
          slides: [
            { title: "Amfani", bullets: ["Fayilolinku a kowace na'ura", "Ɓacewar waya ba ta nufin ɓacewar hotuna", "Ƙungiya tana aiki a fayil ɗaya", "Kasuwanci yana girma ba tare da sayen servers ba"] },
            { title: "Haɗari", bullets: ["Yana buƙatar intanet", "Kalmar sirri da aka sata tana buɗe komai", "Shirye-shiryen kyauta suna da iyaka"] },
            { title: "Manyan kamfanoni", bullets: ["Kasuwanci: AWS, Microsoft Azure, Google Cloud", "Yau da kullum: Google, Microsoft, Apple, Dropbox"] }
          ],
          tryIt: "Ku yi tunanin ƙaramin kasuwanci da kuka sani, kamar shagon aski, motar sayar da abinci ko ofishin coci. Ku rubuta hanyoyi biyu da cloud zai iya taimaka masa da haɗari ɗaya da ya kamata ya shirya masa.",
          youCanNow: "ambaton manyan amfani da haɗarin cloud da manyan kamfanonin cloud.",
          quickCheck: [
            { objective: "O1", q: "Wanne ne amfanin ajiye hotunanku a cloud?", options: ["Ba za ku taɓa buƙatar intanet ba", "Ɓacewar waya ba ta nufin ɓacewar hotuna", "Shirye-shiryen kyauta ba su da iyakar ajiya", "Babu kamfanin da ke riƙe da bayananku"], answer: 1, why: "Kwafin cloud yana nan lafiya a kwamfutocin kamfanin ko da waya ta ɓace." },
            { objective: "O1", q: "Mai motar sayar da abinci yana son mayar da bayanansa zuwa cloud. Wane haɗari ya kamata ya fara shiryawa?", options: ["Cloud yana ƙara girman fayiloli", "Cloud yana aiki a na'ura ɗaya kawai", "Ba za a iya raba fayilolin cloud da ma'aikata ba", "Wanda ke da kalmar sirri da aka sata zai iya kai wa fayilolin daga ko'ina"], answer: 3, why: "Kalmar sirri da aka sata tana buɗe fayilolin cloud daga ko'ina, don haka kiyaye asusu yana da muhimmanci." }
          ]
        },
        {
          objectives: ["O2"],
          title: "SaaS, PaaS da IaaS: nau'o'in hidima guda uku",
          minutes: 5,
          goal: "Rarraba hidimomin cloud zuwa SaaS, PaaS da IaaS.",
          text: [
            "Hidimomin cloud suna da manyan nau'o'i uku, gwargwadon yawan abin da kamfanin yake yi muku. Ku yi amfani da misalin pizza: kuna iya sayen pizza da aka gama, ku yi hayar kicin tare da kayan haɗi, ko ku yi hayar murhu (oven) kawai.",
            "SaaS (Software as a Service, shiri a matsayin hidima): shirin da aka gama da kuke amfani da shi a burauza ko manhaja, kamar Gmail, Google Docs, Microsoft 365 ko Zoom. Kamfanin ne ke gudanar da komai. PaaS (Platform as a Service, dandali a matsayin hidima): dandali da aka shirya inda masu haɓaka shirye-shirye (developers) suke ginawa da gudanar da manhajojinsu ba tare da kula da servers ba, kamar Google App Engine ko Azure App Service. IaaS (Infrastructure as a Service, ababen more rayuwa a matsayin hidima): kwamfutoci na kama-da-wane (virtual), ajiya da hanyoyin sadarwa da kuke saitawa da kanku, kamar Amazon EC2 ko Azure Virtual Machines.",
            "A kowane nau'i, tsaro abin rabawa ne. Kamfanin yana kare cibiyoyin bayanansa; ku kuma koyaushe kuna da alhakin kalmar sirrinku, wanda kuke raba wa abubuwa, da abin da kuke ɗorawa."
          ],
          steps: ["Ku tambaya: shin ina amfani da shirin da aka gama kawai? Wannan SaaS ne.", "Shin ina gina manhajata a kan dandali da aka shirya? Wannan PaaS ne.", "Shin ina saita kwamfutocina na kama-da-wane? Wannan IaaS ne.", "A dukkan ukun, ku kiyaye asusunku da bayananku."],
          words: [["SaaS", "Software as a Service: shirin da aka gama da kuke amfani da shi ta intanet."], ["PaaS", "Platform as a Service: dandali da aka shirya don ginawa da gudanar da manhajojinku."], ["IaaS", "Infrastructure as a Service: kwamfutoci na kama-da-wane, ajiya da hanyoyin sadarwa da kuke haya kuke kula da su."], ["Rabon alhaki (shared responsibility)", "kamfanin yana kare cloud; ku kuma kuna kare asusunku da bayananku da ke cikinsa."]],
          slides: [
            { title: "Nau'o'in hidima guda uku", bullets: ["SaaS: pizza da aka gama", "PaaS: kicin na haya tare da kayan haɗi", "IaaS: murhu kawai"] },
            { title: "Misalai", bullets: ["SaaS: Gmail, Google Docs, Microsoft 365, Zoom", "PaaS: Google App Engine, Azure App Service", "IaaS: Amazon EC2, Azure Virtual Machines"] },
            { title: "Rabon alhaki", bullets: ["Kamfani: yana kare cibiyoyin bayanai", "Ku: kalmar sirrinku, rabawa da abin da kuke ɗorawa"] }
          ],
          tryIt: "Ku rarraba waɗannan zuwa SaaS, PaaS ko IaaS: Gmail, Azure Virtual Machines, Google App Engine, Zoom, Amazon EC2, Microsoft 365. Ku duba amsoshinku da misalan da ke wannan darasi.",
          youCanNow: "rarraba hidimomin cloud zuwa SaaS, PaaS da IaaS da bayanin rabon alhaki.",
          quickCheck: [
            { objective: "O2", q: "Google App Engine yana bar masu haɓaka shirye-shirye su gudanar da manhajojinsu ba tare da kula da servers ba. Wane nau'i ne?", options: ["SaaS", "IaaS", "PaaS", "Ba ɗaya daga cikin nau'o'in uku ba"], answer: 2, why: "Dandali da aka shirya inda masu haɓaka shirye-shirye suke ginawa da gudanar da manhajoji shi ne Platform as a Service." },
            { objective: "O2", q: "Makarantarku tana amfani da Microsoft 365, wanda SaaS ne. Me ya rage a hannunku?", options: ["Kare kalmar sirrinku da zaɓar wanda kuke raba wa abubuwa", "Gadin ginin cibiyar bayanai", "Gyara servers na kamfanin", "Babu komai; SaaS yana nufin kamfanin yana yin komai"], answer: 0, why: "Tsaro abin rabawa ne: kamfanin yana gudanar da hidimar, amma kalmar sirrinku da rabawa koyaushe naku ne." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Mene ne cloud",
        questions: [
          { objective: "O1", q: "Me \"cloud\" yake nufi?", options: ["Yanayi", "Kwamfutoci a cibiyoyin bayanai da kuke amfani da su ta intanet", "Wani nau'in murfin waya", "Rumbun ajiya na kwamfutarku kaɗai"], answer: 1, why: "Hidimomin cloud suna aiki a kwamfutoci masu nisa da ake kai musu ta intanet." },
          { objective: "O1", q: "Wanne ne haɗarin cloud?", options: ["Kuna iya kai wa fayiloli daga kowace na'ura", "Ƙungiyoyi suna iya raba takardu", "Kalmar sirri da aka sata za ta iya buɗe fayilolinku daga ko'ina", "Ɓacewar waya ba ta nufin ɓacewar hotuna"], answer: 2, why: "Kiyaye asusu yana da muhimmanci domin ana iya kai wa cloud daga ko'ina." },
          { objective: "O2", q: "Gmail da Zoom misalai ne na:", options: ["IaaS", "PaaS", "Cibiyoyin bayanai", "SaaS"], answer: 3, why: "Shirye-shirye ne da aka gama da ake amfani da su ta intanet." },
          { objective: "O2", q: "Wani kamfani yana hayar kwamfutoci na kama-da-wane yana saita su da kansa. Wannan:", options: ["IaaS ne", "SaaS ne", "Burauza ce", "Kalmar sirri ce"], answer: 0, why: "Hayar kwamfutoci na kama-da-wane da kuke kula da su shi ne Infrastructure as a Service." },
          { objective: "O2", q: "A rabon alhaki, wa ke kare kalmar sirrinku?", options: ["Mai gadin cibiyar bayanai", "Ku", "Intanet", "Babu kowa"], answer: 1, why: "Asusunku da abin da kuke rabawa koyaushe aikinku ne." }
        ]
      }
    },
    {
      name: "Babi na 2: Amfani da cloud da kanku",
      lessons: [
        {
          objectives: ["O3"],
          title: "Ajiye da tsara fayiloli a ajiyar cloud",
          minutes: 5,
          goal: "Ɗora, ƙirƙira da tsara fayiloli a Google Drive ko OneDrive.",
          text: [
            "Google Drive yana zuwa tare da asusun Google kyauta, OneDrive kuma yana zuwa tare da asusun Microsoft kyauta. Duka biyun suna aiki a burauzar intanet (drive.google.com ko onedrive.com) da kuma a matsayin manhajojin waya daga shagon manhajoji na hukuma.",
            "Ku yi amfani da maɓallin New don ƙirƙirar folda ko takarda, ko Upload don ƙara fayil daga na'urarku. Ku ba fayiloli sunaye masu sarari, kamar \"Resume - Jordan Lee - 2026\", don ku same su daga baya. Ku sa fayilolin da suke da alaƙa a cikin folda ɗaya.",
            "Daidaitawa (sync) tana sa fayil ya kasance iri ɗaya a kowace na'ura: idan kun canja shi a kwamfutarku, sabon sigar zai bayyana a wayarku. Hidimomin cloud da yawa kuma suna ajiye tsofaffin sigogi, don ku iya komawa idan kun yi kuskure."
          ],
          steps: ["Ku shiga a drive.google.com ko onedrive.com (ko ku buɗe manhajar).", "Ku danna New ku zaɓi Folder; ku ba ta suna mai sarari.", "Ku buɗe foldar; ku danna New don ƙirƙirar takarda, ko Upload don ƙara fayil.", "Ku canja sunayen fayiloli zuwa sunaye masu sarari.", "Ku buɗe fayil ɗin a wata na'ura don ganin yana daidaita."],
          words: [["Upload (ɗorawa)", "kwafa fayil daga na'urarku zuwa cloud."], ["Sync (daidaitawa)", "sa fayiloli su kasance iri ɗaya a dukkan na'urorinku kai tsaye."], ["Tarihin sigogi (version history)", "tsofaffin kwafin fayil da aka ajiye da za ku iya komawa gare su."]],
          slides: [
            { title: "Ajiyar cloud kyauta", bullets: ["Google Drive tare da asusun Google", "OneDrive tare da asusun Microsoft", "Burauza ko manhaja ta hukuma"] },
            { title: "Tsarawa", bullets: ["New: folda ko takarda", "Upload: ƙara fayil", "Sunaye masu sarari da foldoji"] },
            { title: "Daidaitawa da sigogi", bullets: ["Fayil iri ɗaya a kowace na'ura", "Komawa ga tsohon siga idan ana buƙata"] }
          ],
          tryIt: "A Google Drive ko OneDrive, ku ƙirƙiri folda mai suna \"Career Documents\". Ku ƙirƙiri ko ku ɗora fayiloli biyu a cikinta ku ba su sunaye masu sarari. Sannan ku buɗe foldar a na'ura ta biyu idan kuna da ita.",
          youCanNow: "ɗorawa, ƙirƙira, ba da suna da tsara fayiloli a ajiyar cloud, da sanin cewa suna daidaita a dukkan na'urori.",
          quickCheck: [
            { objective: "O3", q: "Me \"sync\" (daidaitawa) yake yi wa fayil a OneDrive?", options: ["Yana goge tsohon kwafi kowane dare", "Yana sa sigar fayil ɗin ta kasance iri ɗaya a dukkan na'urorinku", "Yana aika fayil ɗin ga kowa a cikin lambobinku", "Yana mayar da fayil ɗin PDF"], answer: 1, why: "Daidaitawa tana sa fayil ya kasance iri ɗaya a kowace na'ura da kuke amfani da ita." },
            { objective: "O3", q: "Kun ajiye wasiƙar neman aiki da suna \"doc1\". Me za ku yi don ku same ta daga baya?", options: ["Ku bar ta; bincike zai yi tsammani", "Ku yi sabuwar folda ga kowane fayil", "Ku sake ɗora ta da suna ɗaya", "Ku canja sunanta zuwa mai sarari, kamar \"Cover Letter - Jordan Lee - 2026\""], answer: 3, why: "Sunaye masu sarari suna sa a sami fayiloli cikin sauƙi daga baya." }
          ]
        },
        {
          objectives: ["O4"],
          title: "Raba fayiloli lafiya",
          minutes: 5,
          goal: "Raba fayil da mutumin da ya dace da matakin damar da ya dace, da cire damar.",
          text: [
            "Fayilolin cloud suna da sauƙin rabawa, wanda yake da amfani kuma yake da haɗari. Ku danna Share a kan fayil ku ƙara adireshin imel na mutum, ko ku kwafi hanyar haɗi (link). Ku zaɓi abin da za su iya yi: kallo (view), sharhi (comment) ko gyara (edit).",
            "Ku ba da mafi ƙarancin damar da ake buƙata. Takardar bayanin aiki ga mai ɗaukar aiki: kallo kawai. Aikin ƙungiya: gyara ga 'yan ƙungiyarku. Ku yi hankali da hanyar haɗi da aka saita ta yadda \"anyone with the link\" (kowa mai hanyar haɗin) zai iya buɗe fayil ɗin; duk wanda ya sami hanyar haɗin zai iya ganinsa, ko da an tura shi gaba.",
            "Ku duba wa ke da damar shiga daga allon Share ko Manage access, ku cire mutane idan aiki ya ƙare. Kada ku taɓa sa fayiloli masu lambobin Social Security, bayanan banki ko kalmomin sirri a foldar da ake rabawa."
          ],
          steps: ["Ku zaɓi fayil ɗin ku danna Share.", "Ku ƙara imel na mutumin, ko ku kwafi hanyar haɗi.", "Ku zaɓi View, Comment ko Edit; ku zaɓi mafi ƙanƙanta da yake buƙata.", "Ku guji \"anyone with the link\" don fayilolin sirri.", "Daga baya, ku buɗe Share ko Manage access ku cire mutanen da ba sa buƙata kuma."],
          words: [["Matakin izini", "abin da wani zai iya yi da fayil ɗinku: kallo, sharhi ko gyara."], ["Mafi ƙarancin dama (least access)", "ba mutane damar da suke buƙata da gaske kawai."]],
          slides: [
            { title: "Yadda ake rabawa", bullets: ["Ku danna Share", "Ku ƙara imel ko ku kwafi hanyar haɗi", "Ku zaɓi View, Comment ko Edit"] },
            { title: "Mafi ƙarancin dama", bullets: ["Takardar bayanin aiki ga mai ɗaukar aiki: kallo kawai", "Aikin ƙungiya: gyara ga 'yan ƙungiya", "Ku yi hankali da \"anyone with the link\""] },
            { title: "Tsaftacewa", bullets: ["Ku duba Manage access", "Ku cire mutane idan aiki ya ƙare", "Babu lambobin sirri a foldojin da ake rabawa"] }
          ],
          tryIt: "Ku raba fayil ɗaya daga foldar \"Career Documents\" da aboki ko wani a iyali don kallo kawai. Ku ce su buɗe shi. Sannan ku buɗe Manage access ku cire su.",
          youCanNow: "raba fayil na cloud da matakin izinin da ya dace da cire damar idan ba a buƙata kuma.",
          quickCheck: [
            { objective: "O4", q: "Wane saitin rabawa ne yake ba da mafi ƙarancin dama?", options: ["Edit", "Comment", "View", "Owner"], answer: 2, why: "View yana bar mutane su buɗe fayil ɗin amma ba su canja shi ba, wannan shi ne mafi ƙarancin dama." },
            { objective: "O4", q: "Aikin ƙungiyarku ya ƙare kuma abokan aji huɗu har yanzu suna da damar gyara. Me za ku yi?", options: ["Ku buɗe Manage access ku cire mutanen da ba sa buƙata kuma", "Ku canja hanyar haɗin zuwa \"anyone with the link\"", "Ku goge asusunku gaba ɗaya", "Ku bar shi idan wata rana za su buƙata"], answer: 0, why: "Ku cire dama idan aiki ya ƙare don waɗanda ke buƙatar fayil ɗin kawai su iya kai masa." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kiyaye asusunku na cloud",
          minutes: 5,
          goal: "Kunna tabbatarwa mataki biyu da duba tsaron asusunku.",
          text: [
            "Asusunku na cloud yana riƙe da fayilolinku, imel da hotunanku, don haka ana kai masa hari. Mataki mafi muhimmanci shi ne tabbatarwa mataki biyu (two-step verification, ana kuma kiransa two-factor ko multi-factor authentication): bayan kalmar sirrinku, kuna kuma tabbatarwa da wayarku. Ɓarawon da ke da kalmar sirrinku kawai ba zai iya shiga ba.",
            "Ku yi amfani da kalmar sirri mai tsawo wadda ba ku amfani da ita a wani wuri, zai fi kyau a ajiye ta a manajan kalmomin sirri (password manager). Google da Microsoft duka suna da shafin binciken tsaro (security check-up) a saitunan asusunku da ke nuna na'urorin da suka shiga, ayyukan kwanan nan da hanyoyin dawo da asusu.",
            "Ku yi hankali da phishing (zamba ta saƙo): imel na bogi da ke cewa \"your storage is full\" (ajiyarku ta cika) ko \"someone shared a file with you\" (wani ya raba muku fayil) da ke kai ku shafin shiga na bogi. Ku je drive.google.com ko onedrive.com da kanku maimakon danna hanyar haɗi. Ku tuna rabon alhaki: kamfanin yana kare cibiyoyin bayanansa; ku kuma kuna kare asusunku."
          ],
          steps: ["Ku buɗe saitunan tsaro na asusunku na Google ko Microsoft.", "Ku kunna tabbatarwa mataki biyu.", "Ku duba cewa lambar waya da imel na dawo da asusu daidai ne.", "Ku duba na'urorin da suka shiga ku cire duk wadda ba ku sani ba.", "Ku je shafukan cloud da kanku maimakon danna hanyoyin haɗi a imel."],
          words: [["Tabbatarwa mataki biyu", "dubawa ta biyu, kamar code ko taɓawa a wayarku, bayan kalmar sirrinku."], ["Manajan kalmomin sirri (password manager)", "manhajar da ke ƙirƙira da ajiye kalmomin sirri masu ƙarfi a madadinku."], ["Phishing (zamba ta saƙo)", "saƙon bogi da ke ƙoƙarin yaudarar ku ku bayar da kalmar sirrinku."]],
          slides: [
            { title: "Ana kai wa asusunku hari", bullets: ["Yana riƙe da fayiloli, imel da hotuna", "Ku kunna tabbatarwa mataki biyu"] },
            { title: "Binciken tsaro", bullets: ["Kalmar sirri mai tsawo, ta musamman", "Lambar waya da imel na dawo da asusu daidai", "Ku cire na'urorin da ba ku sani ba"] },
            { title: "Ku yi hankali da phishing", bullets: ["\"Your storage is full\" (ajiyarku ta cika)", "\"Someone shared a file with you\" (wani ya raba muku fayil)", "Ku je shafin da kanku"] }
          ],
          tryIt: "Atisayen aikin ƙarshe: ku buɗe saitunan tsaro na asusunku na Google ko Microsoft, ku kunna tabbatarwa mataki biyu, ku duba na'urorin da suka shiga. Sannan ku gama aikin ƙarshe da foldar \"Career Documents\".",
          youCanNow: "kare asusunku na cloud da tabbatarwa mataki biyu, binciken tsaro da sanin alamun phishing.",
          quickCheck: [
            { objective: "O5", q: "Mene ne tabbatarwa mataki biyu?", options: ["Rubuta kalmar sirrinku sau biyu", "Samun asusun imel biyu daban-daban", "Ajiye kalmar sirrinku a wurare biyu", "Dubawa ta biyu, sau da yawa a wayarku, bayan kalmar sirrinku"], answer: 3, why: "Bayan kalmar sirri, kuna kuma tabbatarwa da wayarku, don haka ɓarawon da ke da kalmar sirri kawai ba zai iya shiga ba." },
            { objective: "O5", q: "Kun ga wayar da ba ku sani ba a cikin na'urorin da suka shiga asusunku. Me za ku yi?", options: ["Ku yi watsi da ita; wataƙila ba komai", "Ku cire ta ku canja kalmar sirrinku", "Ku raba kalmar sirrinku da ita", "Ku kashe tabbatarwa mataki biyu"], answer: 1, why: "Cire na'urorin da ba a sani ba a binciken tsaro yana hana baƙi shiga asusunku." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Amfani da cloud da kanku",
        questions: [
          { objective: "O3", q: "Me \"sync\" (daidaitawa) yake nufi?", options: ["Goge fayil", "Sa fayiloli su kasance iri ɗaya a dukkan na'urorinku", "Buga fayil a takarda", "Raba fayil da baƙi"], answer: 1, why: "Daidaitawa tana sabunta fayiloli a duk inda kuka shiga." },
          { objective: "O4", q: "Kuna raba takardar bayanin aikinku da mai ɗaukar aiki. Wane izini ne ya fi dacewa?", options: ["Edit", "Owner", "Kallo kawai (view only)", "Kowa mai hanyar haɗin zai iya gyarawa"], answer: 2, why: "Ku ba da mafi ƙarancin damar da ake buƙata; karanta ta kawai suke buƙata." },
          { objective: "O4", q: "Wani aikin ƙungiya ya ƙare a watan da ya gabata. Me ya kamata ku yi da foldar da ake rabawa?", options: ["Ku cire mutanen da ba sa buƙatar dama kuma", "Ku buɗe ta ga kowa", "Ku ƙara wasu mutane", "Ku raba hanyar haɗin a kafofin sada zumunta"], answer: 0, why: "Cire tsohuwar dama yana kiyaye sirrin fayilolinku." },
          { objective: "O5", q: "Wani imel ya ce \"Your storage is full, sign in here\" (ajiyarku ta cika, ku shiga nan). Me za ku yi?", options: ["Ku danna ku shiga", "Ku amsa da kalmar sirrinku", "Ku tura shi ga abokai", "Ku je drive.google.com ko onedrive.com da kanku"], answer: 3, why: "Wannan yana iya zama phishing; ku je ainihin shafin da kanku." },
          { objective: "O5", q: "Mene ne mataki mafi muhimmanci don kare asusun cloud?", options: ["Gajeriyar kalmar sirri", "Tabbatarwa mataki biyu", "Raba kalmar sirrinku da aboki", "Kashe daidaitawa (sync)"], answer: 1, why: "Ɓarawon da ke da kalmar sirrinku kawai har yanzu ba zai iya shiga ba." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Tushen Cloud Computing (Kwamfutar Gajimare)",
    questions: [
      { objective: "O1", q: "Cibiyar bayanai (data center) ita ce:", options: ["Gini cike da kwamfutoci masu gudanar da hidimomin cloud", "Shagon sayar da waya", "Ɗakin kwamfuta na makaranta", "Wani nau'in manhaja"], answer: 0, why: "Hidimomin cloud suna aiki a cibiyoyin bayanai." },
      { objective: "O1", q: "Cloud computing yana kama da wutar lantarki domin:", options: ["Koyaushe kyauta ne", "Kuna amfani da abin da kuke buƙata ba tare da mallakar tashar wuta ba", "Yana aiki da dare kawai", "Ba ya buƙatar intanet"], answer: 1, why: "Kuna amfani da biyan abin da kuke buƙata, kamar hidimar jama'a." },
      { objective: "O1", q: "Wace ce hidimar cloud da wataƙila kuke amfani da ita kowace rana?", options: ["Littafin rubutu na takarda", "Na'urar lissafi marar intanet", "Google Drive", "Fitilar tebur"], answer: 2, why: "Google Drive yana ajiye fayiloli a kwamfutocin cloud." },
      { objective: "O1", q: "Amfanin cloud ga kasuwanci shi ne:", options: ["Dole ku fara sayen servers masu tsada", "Ba ya taɓa buƙatar intanet", "Ba a buƙatar kalmomin sirri", "Kuna iya girma ku biya ƙarin ƙarfin kwamfuta kawai idan ana buƙata"], answer: 3, why: "Ana kiran wannan scalability (sassaucin girma)." },
      { objective: "O1", q: "Wanne ne babban kamfanin cloud na kasuwanci?", options: ["Microsoft Azure", "Gidan burodi na unguwa", "Kamfanin firinta", "Burauzar intanet"], answer: 0, why: "AWS, Azure da Google Cloud su ne mafi girma." },
      { objective: "O1", q: "Wanne ne haɗari na gaske na amfani da cloud?", options: ["Fayiloli a kowace na'ura", "Ƙungiyoyi suna raba takardu", "Buƙatar intanet", "Ajiyar kwafi kai tsaye (backup)"], answer: 2, why: "Ba tare da intanet ba, wataƙila ba za ku kai wa fayilolinku ba." },
      { objective: "O2", q: "SaaS yana nufin:", options: ["Storage as a Server", "Software as a Service", "Security and a System", "Sync and a Screen"], answer: 1, why: "SaaS shirin da aka gama ne da ake amfani da shi ta intanet." },
      { objective: "O2", q: "Microsoft 365 misali ne na:", options: ["IaaS", "PaaS", "SaaS", "Cibiyar bayanai"], answer: 2, why: "Shiri ne da aka gama da kuke amfani da shi ta intanet." },
      { objective: "O2", q: "Wani mai haɓaka shirye-shirye yana gudanar da manhajarsa a Azure App Service ba tare da kula da servers ba. Wannan:", options: ["SaaS ne", "PaaS ne", "IaaS ne", "Manajan kalmomin sirri ne"], answer: 1, why: "Dandali da aka shirya don manhajojinku shi ne PaaS." },
      { objective: "O2", q: "Kwamfutoci na kama-da-wane na Amazon EC2 misali ne na:", options: ["SaaS", "PaaS", "Burauza", "IaaS"], answer: 3, why: "Hayar kwamfutoci na kama-da-wane da kuke kula da su shi ne IaaS." },
      { objective: "O2", q: "A rabon alhaki, kamfanin yana kare:", options: ["Cibiyoyin bayanansa", "Kalmar sirrinku", "Wanda kuke raba wa fayiloli", "Abin da kuka zaɓi ɗorawa"], answer: 0, why: "Ku har yanzu kuna kare asusunku da bayananku." },
      { objective: "O3", q: "Wane sunan fayil ne ya fi sarari?", options: ["\"doc1\"", "\"stuff\"", "\"Resume - Jordan Lee - 2026\"", "\"new new final\""], answer: 2, why: "Sunaye masu sarari suna sa a sami fayiloli cikin sauƙi." },
      { objective: "O3", q: "Don ƙara fayil daga na'urarku zuwa cloud, kuna:", options: ["Goge shi", "Ɗora shi (upload)", "Buga shi a takarda", "Aika shi ta imel ga baƙo"], answer: 1, why: "Ɗorawa tana kwafa shi zuwa ajiyar cloud." },
      { objective: "O3", q: "Tarihin sigogi (version history) yana bar ku:", options: ["Komawa ga tsohon kwafin fayil", "Ganin fayilolin wasu mutane", "Samun ƙarin ajiya kyauta", "Canja kalmar sirrinku"], answer: 0, why: "Yana ajiye tsofaffin sigogin da aka ajiye." },
      { objective: "O4", q: "Rabawa ta \"anyone with the link\" tana nufin:", options: ["Ku kaɗai ne za ku iya buɗe shi", "Lambobinku kawai ne za su iya buɗe shi", "Babu wanda zai iya buɗe shi", "Duk wanda ya sami hanyar haɗin zai iya buɗe shi, ko da an tura shi gaba"], answer: 3, why: "Hanyoyin haɗi suna iya yin nisa fiye da yadda kuka nufa." },
      { objective: "O4", q: "Ra'ayin mafi ƙarancin dama yana nufin:", options: ["Ba kowa damar gyara", "Ba mutane damar da suke buƙata kawai", "Kada ku taɓa raba komai", "Raba komai ga jama'a"], answer: 1, why: "Ƙarancin dama yana nufin ƙarancin haɗari." },
      { objective: "O4", q: "Wanne ne bai kamata ya taɓa shiga foldar cloud da ake rabawa ba?", options: ["Tsarin aikin ƙungiya", "Jadawalin aji", "Fayil mai lambar Social Security ɗinku", "Hoton ƙungiya"], answer: 2, why: "Lambobin sirri ba su kamata su kasance a foldojin da ake rabawa ba." },
      { objective: "O5", q: "Tabbatarwa mataki biyu tana nufin:", options: ["Rubuta kalmar sirrinku sau biyu", "Dubawa ta biyu a wayarku bayan kalmar sirrinku", "Asusu biyu", "Foldoji biyu"], answer: 1, why: "Tana hana ɓarayin da ke da kalmar sirrinku kawai." },
      { objective: "O5", q: "A binciken tsaro ya kamata ku:", options: ["Cire na'urorin da suka shiga waɗanda ba ku sani ba", "Kashe lambar wayar dawo da asusu", "Raba kalmar sirrinku", "Goge dukkan fayilolinku"], answer: 0, why: "Na'urorin da ba a sani ba suna iya nufin wani ya shiga asusunku." },
      { objective: "O5", q: "Wani imel ya ce \"Someone shared a file with you\" (wani ya raba muku fayil) daga wanda ba ku sani ba. Mataki mafi aminci shi ne:", options: ["Danna ku shiga a shafin da ya buɗe", "Amsa da kalmar sirrinku", "Tura shi ga kowa", "Zuwa shafin ajiyar cloud ɗinku da kanku don dubawa"], answer: 3, why: "Imel na rabawa na bogi suna kai ku shafukan shiga na bogi." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      3,
      6,
      9,
      11,
      13,
      14,
      16,
      17,
      19
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Folda da fayiloli",
        objective: "O3",
        notYet: "Babu foldar \"Career Documents\", ko fayilolin suna da sunaye marasa sarari kamar \"doc1\".",
        meets: "Foldar tana da fayiloli biyu masu sunaye masu sarari.",
        exceeds: "An kuma buɗe fayilolin a na'ura ta biyu don nuna suna daidaita."
      },
      {
        name: "Rabawa lafiya",
        objective: "O4",
        notYet: "An raba fayil ɗin da damar gyara ko a matsayin \"anyone with the link\", ko ba a taɓa cire damar ba.",
        meets: "An raba fayil ɗaya don kallo kawai, an duba wa ke da dama, sannan aka cire ta.",
        exceeds: "Zai iya bayyana dalilin da yasa kallo kawai shi ne mafi ƙarancin damar da ake buƙata."
      },
      {
        name: "An kare asusu",
        objective: "O5",
        notYet: "Tabbatarwa mataki biyu a kashe take.",
        meets: "Tabbatarwa mataki biyu a kunne take kuma an duba na'urorin da suka shiga.",
        exceeds: "An kuma duba lambar waya da imel na dawo da asusu, kuma mai koyo zai iya ambaci alamar gargaɗin phishing ɗaya."
      },
      {
        name: "An bayyana cloud",
        objective: "O1",
        notYet: "Jimloli ukun ba su nan ko ba su faɗi mene ne cloud ba.",
        meets: "Jimloli uku masu sarari sun faɗi mene ne cloud kuma sun ba da amfani ɗaya da haɗari ɗaya.",
        exceeds: "Jimlolin sun kuma yi amfani da kwatanci na yau da kullum, kamar wutar lantarki."
      },
      {
        name: "Nau'o'in hidima",
        objective: "O2",
        notYet: "Ɗaya ko fiye daga cikin misalan SaaS, PaaS da IaaS ba daidai ba ne ko ba su nan.",
        meets: "Misali ɗaya daidai na kowanne: SaaS, PaaS da IaaS.",
        exceeds: "Ya kuma faɗi abin da ya rage a hannun mai amfani a rabon alhaki."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka ce tabbatarwa mataki biyu a kunne take a babban asusunsu bayan kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka yi amfani da ajiyar cloud don takardun makaranta, aiki ko shiri cikin kwanaki 30",
      "Masu koyo da suka fara kwas ɗin \"Tushen Microsoft Azure\" ko wani kwas na fasaha cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Wayar zamani ko kwamfuta mai intanet; na'ura ta biyu tana taimakawa amma ba dole ba ce",
      "Asusun Google kyauta (Google Drive) ko asusun Microsoft (OneDrive)",
      "Wayar da za ta iya karɓar code ko saƙon tabbatarwa don tabbatarwa mataki biyu",
      "Takarda da alƙalami don rubutun \"Gwada yanzu\"",
      "Kusan minti 60 gaba ɗaya, a gajerun zama: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku yi gwajin farko tare, sannan ku yi babi ɗaya a kowane zama, kuna yin ayyukan \"Gwada yanzu\" a lokacin.",
      "Ku yi amfani da fayilolin atisaye kawai (takardar bayanin aiki ta misali ko jerin masu shaida da sunaye na ƙirƙira); kada ku taɓa amfani da lambobin shaida, bayanan banki ko kalmomin sirri na gaske.",
      "Ku haɗa masu koyo bibbiyu don su raba fayil da juna don kallo kawai, sannan su cire damar a lokacin darasin.",
      "A kwamfutocin da ake rabawa, ku tabbata masu koyo sun fita daga asusu sun rufe burauzar kafin su tafi.",
      "Ga masu koyo 'yan ƙasa da shekara 18, ku bi dokokin makaranta ko shirin game da asusun kansu; ana iya amfani da asusun makaranta idan ya yarda da rabawa."
    ]
  }
};
