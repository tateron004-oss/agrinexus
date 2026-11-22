"use strict";

// Koach Learn course, Hausa (ha) translation of shared/home-health-aide.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "home-health-aide-ha",
  lang: "ha",
  translationOf: "home-health-aide",
  category: "Workforce Development",
  name: "Ƙwarewar Mai Kula da Marasa Lafiya a Gida (Home Health Aide)",
  skills: "Sanin aikin mai kula a gida da hanyar shiga shi, Duba lafiyar gida, Bin tsarin kulawa cikin mutunci, Rubuta bayanin ziyara da faɗin canje-canje, Kiyaye sirri da iyakoki",
  outcome: "bayyana abin da mai kula da marasa lafiya a gida (home health aide) yake yi da yadda ake samun horo a jiharku, da haɗa kayan atisayen ziyara: jerin duba lafiyar gida, jerin ayyukan tsarin kulawa da bayanin ziyara na gaskiya.",
  about: [
    "Masu kula da marasa lafiya a gida (home health aides) suna taimaka wa mutane su zauna lafiya a gidansu: tsofaffi, masu nakasa da waɗanda ke murmurewa bayan sun fito asibiti. Suna taimakawa da wanka, sa tufafi, abinci da motsi, kuma suna lura da canje-canje su faɗa wa nas (nurse).",
    "Wannan kwas yana shirya ku don horo da kuma aikin. Ba ya ba ku takardar shaida. Masu kula da ke aiki a kamfanonin kula a gida ko na hospice da Medicare (inshorar lafiya ta gwamnatin Amurka) ke biya dole su gama horo na hukuma su ci jarabawa, kuma jihohi da yawa suna ƙara nasu ƙa'idoji. Za ku koyi inda za ku duba na jiharku.",
    "Za ku yi atisayen tunanin da aikin yake buƙata: duba lafiyar gida, bin tsarin kulawa, rubuta abin da kuka gani, da kiyaye bayanan majiyyaci da kuɗinsa. Aikin hannu kamar ɗaga majiyyaci daga wuri zuwa wuri ana koyon sa ne ƙarƙashin kulawar nas, ba a kan mutum na gaske a gida ba.",
    "Wannan hanya ce mai kyau ga masu dawowa gida daga gidan yari ma. Ƙa'idoji game da binciken tarihi (background check) sun bambanta daga jiha zuwa jiha da daga kamfani zuwa kamfani, don haka kwas ɗin yana nuna muku yadda za ku tambaya."
  ],
  finalTask: "Ku yi kayan atisayen ziyara don majiyyaci na ƙirƙira (atisaye kawai): jerin duba lafiyar gida mai shafi ɗaya, jerin ayyukan tsarin kulawa da za ku yi a ziyara ɗaya bisa tsari, bayanin ziyara na gaskiya mai canji ɗaya da za ku faɗa, da sunan shafin hukuma na jiharku game da ƙa'idojin masu kula a gida.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya da ke neman aikin kulawa mai ɗorewa: masu neman aiki, masu dawowa gida daga gidan yari, baƙi 'yan ci-rani, masu kula da 'yan iyali da ke son a biya su kan ƙwarewar da suke da ita, da manya da ke komawa aiki.",
    startingPoint: "Da yawa sun taɓa kula da wani a iyalinsu. Kaɗan ne suka san bambancin mai kula da marasa lafiya a gida (home health aide) da mai taimakon kai (personal care aide), ƙa'idojin horo, ko yadda ake rubuta bayanin ziyara.",
    gap: "Kamfanoni suna buƙatar masu kula da suka sami horo, da ke bin tsarin kulawa, da ke zama lafiya a gidan majiyyaci, da ke faɗin canje-canje, kuma da ke kiyaye sirri. Masu koyo suna buƙatar sanin hanyar horo da waɗannan ɗabi'u don a ɗauke su aiki kuma su kiyaye lafiyar majiyyata.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli (kusan aji 6 zuwa 7)",
      "Na'urori: waya ko kwamfutar ɗakin karatu; kowane aiki yana yiwuwa a takarda",
      "Ƙa'idojin horo da jarabawa suna fitowa daga dokar tarayya, jiha da kamfani; kwas ɗin yana nuna shafukan hukuma kuma ba ya faɗin awoyi ko kuɗaɗe",
      "Babu shawarar magani ko faɗin yawan magani; babu atisayen hannu a kan majiyyata na gaske a gida",
      "Wasu masu koyo suna da tarihin shari'a; ƙa'idojin binciken tarihi sun bambanta daga jiha zuwa jiha da daga kamfani zuwa kamfani"
    ],
    prerequisites: "Babu. Kwas ɗin \"Kula da Mara Lafiya: Kula da Wanda Kuke So\" da \"Health Literacy\" (Fahimtar Bayanan Lafiya) suna da amfani amma ba dole ba ne."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Ta amfani da shafin hukuma na jiharku da tallar aiki ta wani kamfani", action: "bayyana abin da mai kula da marasa lafiya a gida yake yi da matakan samun horo a jiharku", standard: "kuna ambaton horon, jarabawa ko gwajin ƙwarewa, da shafin da kuka duba" },
    { id: "O2", condition: "Idan aka ba ku hoto ko bayanin gidan majiyyaci", action: "jera haɗurran da ke ciki da abin da za ku yi game da kowanne", standard: "kuna gano aƙalla haɗurra 4, har da ɗaya game da lafiyarku" },
    { id: "O3", condition: "Idan aka ba ku tsarin kulawa na majiyyaci na ƙirƙira", action: "jera ayyukan ziyara bisa tsari da yin kowanne ta hanyar da ke kiyaye mutuncin majiyyaci da zaɓinsa", standard: "ba tare da fita daga tsarin kulawa ba" },
    { id: "O4", condition: "Idan kun lura da wani canji a ziyara", action: "rubuta bayanin ziyara na gaskiya da zaɓar ko za ku kira nas ko 911", standard: "tare da lokaci, abin da kuka gani ko kuka ji, da wanda kuka faɗa wa" },
    { id: "O5", condition: "Idan aka ba ku wani hali game da sirri, kuɗi, kyauta ko yiwuwar cin zarafi", action: "zaɓar matakin da ke kare majiyyaci kuma ke bin ƙa'idoji", standard: "kuna samun aƙalla 4 cikin 5 daidai" }
  ],
  chapters: [
    {
      name: "Babi na 1: Aikin da gidan",
      lessons: [
        {
          title: "Abin da mai kula a gida yake yi da yadda ake samun horo",
          objectives: ["O1"],
          minutes: 5,
          goal: "Bayyana aikin mai kula da marasa lafiya a gida da jera matakan samun horo a jiharku.",
          text: [
            "Masu kula da marasa lafiya a gida (home health aides) da masu taimakon kai (personal care aides) dukansu suna taimaka wa mutane a gida da ayyukan yau da kullum kamar wanka, sa tufafi, abinci da wanki. Masu kula da marasa lafiya a gida suna iya yin wasu ayyukan lafiya masu sauƙi, kamar duba bugun zuciya, zafin jiki da numfashi, gwargwadon jihar. Nas ko wasu ma'aikatan lafiya ne ke kula da su.",
            "Masu taimakon kai yawanci suna ba da taimako ba na lafiya ba, kamar zama tare da mutum, tsaftacewa, girki da tuƙi. Tallolin aiki sau da yawa suna amfani da sunayen biyu, don haka ku karanta ayyukan.",
            "Kamfanonin kula a gida da na hospice da Medicare ke biya dole su bi ƙa'idojin tarayya game da masu kula da su. Ofishin Ƙididdigar Ma'aikata na Amurka (US Bureau of Labor Statistics) ya ce masu kula a waɗannan kamfanoni dole su gama horo na hukuma su ci jarabawa ta bai ɗaya. Wasu jihohi kuma suna buƙatar lasisi ko takardar shaida, binciken tarihi ko jarabawar ƙwarewa.",
            "Wannan kwas yana shirya ku. Horonku da jarabawarku suna fitowa daga kamfani ko shirin da aka amince da shi. Don duba ƙa'idojin jiharku, ku je hukumar lafiya ko ma'aikatar lafiya ta jiharku. Kamfanoni da yawa suna horar da sababbin masu kula, wani lokaci kyauta, don haka ku tambaya."
          ],
          steps: ["Ku nemi sunan jiharku tare da \"home health aide training requirements\" (ƙa'idojin horon mai kula a gida) ku buɗe shafin ma'aikatar lafiya ta jihar.", "Ku rubuta ƙa'idojin horo, jarabawa da binciken tarihi.", "Ku duba tallolin aiki biyu daga kamfanonin kula a gida kusa da ku ku jera ayyukan da buƙatun.", "Ku tambayi kowane kamfani ko yana horar da sababbin masu kula."],
          words: [["Mai kula da marasa lafiya a gida (HHA)", "mai kula da ya sami horo, da ke ba da kulawar kai da wasu ayyukan lafiya masu sauƙi a gidan majiyyaci, ƙarƙashin kulawar nas."], ["Mai taimakon kai (personal care aide)", "mai taimako da ke ba da taimako ba na lafiya ba a gida, kamar tsaftacewa, girki da zama tare da mutum."], ["Kamfani (agency)", "kamfanin da ke tura masu kula da nas zuwa gidajen majiyyata."], ["Jarabawar ƙwarewa", "jarabawar da ke duba ko kun san ƙwarewar aikin kuma kuna iya yin ta."]],
          slides: [
            { title: "Nau'o'i biyu na masu kula", bullets: ["Mai kula a gida: kulawar kai da wasu ayyukan lafiya masu sauƙi", "Mai taimakon kai: taimako ba na lafiya ba", "Ku karanta ayyukan a kowace tallar aiki"] },
            { title: "Wane ne ke kula da su", bullets: ["Masu kula a gida suna aiki ƙarƙashin nas", "Nas ne ke rubuta tsarin kulawa", "Ku bi shi ku faɗi canje-canje"] },
            { title: "Ƙa'idojin horo", bullets: ["Kamfanonin da Medicare ke biya: horo na hukuma da jarabawa", "Jihohi suna iya ƙara lasisi, jarabawa ko binciken tarihi", "Ku duba shafin ma'aikatar lafiya ta jiharku"] },
            { title: "Wannan kwas yana shirya ku", bullets: ["Ba ya ba ku takardar shaida", "Kamfanoni da yawa suna horar da sababbin masu kula", "Ku tambaya kafin ku biya"] }
          ],
          sources: [
            { name: "US Bureau of Labor Statistics: Home Health and Personal Care Aides", url: "https://www.bls.gov/ooh/healthcare/home-health-aides-and-personal-care-aides.htm" },
            { name: "CareerOneStop: Find an American Job Center", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" }
          ],
          tryIt: "Ku nemo shafin hukuma na jiharku game da ƙa'idojin masu kula a gida. Sannan ku nemo tallar aiki ɗaya ta kamfanin kula a gida kusa da ku. A takarda, ku rubuta ƙa'idar horo daga shafin jihar, ayyuka uku daga tallar aikin, da tambaya ɗaya da za ku yi wa kamfanin.",
          youCanNow: "bayyana abin da mai kula da marasa lafiya a gida yake yi da nemo ƙa'idojin horo na jiharku a shafin hukuma.",
          quickCheck: [
            { objective: "O1", q: "Wane ne ke kula da mai kula da marasa lafiya a gida?", options: ["Maƙwabcin majiyyaci", "Babu kowa", "Nas ko wasu ma'aikatan lafiya", "Abokan mai kulan"], answer: 2, why: "Nas ko wasu ma'aikatan lafiya ne ke kula da masu kula a gida." },
            { objective: "O1", q: "A ina za ku duba ƙa'idojin horon masu kula a gida a jiharku?", options: ["Hukumar lafiya ko ma'aikatar lafiya ta jiharku", "Tallar intanet", "Sharhi a kafar sada zumunta", "Saƙon tes da ake yaɗawa"], answer: 0, why: "Shafin lafiya na hukuma na jihar ne ke kafawa da bayyana ƙa'idojin." }
          ]
        },
        {
          title: "Duba lafiyar gidan majiyyaci",
          objectives: ["O2"],
          minutes: 5,
          goal: "Jera haɗurran da ke cikin gida da abin da za a yi game da kowanne.",
          text: [
            "Gida ba asibiti ba ne. Kowane gida ya bambanta, don haka ku duba ko'ina duk lokacin da kuka isa. Faɗuwa tana ɗaya daga cikin manyan haɗurra ga tsofaffi. MedlinePlus (shafin bayanan lafiya na gwamnatin Amurka) ya lissafa hanyoyin rage haɗarin: cire abubuwan da ke sa tuntuɓe, sa ƙarafan riƙo a matakala da cikin bahon wanka ko shawa, da duba idanu.",
            "Ku nemi kafet da ba a kafa shi da kyau ba, wayoyin wuta da suka ratsa ƙasa, kaya a kan matakala, haske marar ƙarfi, ƙasan banɗaki mai danshi, da abubuwan da majiyyaci sai ya miƙa hannu sama sosai don ya kai gare su. Ku faɗa wa mai kula da ku (supervisor) haɗurran da ba za ku iya gyarawa ba, kuma kada ku taɓa matsar da kayan ɗaki ko zubar da wani abu ba tare da tambayar majiyyaci ba.",
            "Ƙwayoyin cuta suna da muhimmanci a gida ma. Ku wanke hannuwanku kafin kulawa da bayanta, ku sa safar hannu idan za ku iya taɓa ruwan jiki, kuma ku wanke hannuwanku nan take bayan kun cire safar hannu. Ku yi amfani da sabulu da ruwa idan hannuwanku suna da datti a fili.",
            "Ku kiyaye lafiyarku. Ku san adireshin da lambar wayar kamfaninku. Ku nemi a kulle dabbobin gida idan suna sa ku damuwa. Idan kun taɓa jin ba ku da lafiya, ku fita ku kira mai kula da ku. Ba a sa ran ku zauna cikin haɗari ba."
          ],
          steps: ["Ku duba ko'ina idan kun isa: ƙasa, matakala, haske, banɗaki.", "Ku gyara ƙananan haɗurra da izinin majiyyaci, kamar wayar wuta da ta ratsa hanya.", "Ku rubuta ku faɗi haɗurran da ba za ku iya gyarawa ba.", "Idan ba ku jin lafiya, ku fita ku kira mai kula da ku."],
          words: [["Haɗari", "abin da zai iya sa rauni, kamar kafet da ba a kafa shi da kyau ba."], ["Haɗarin faɗuwa", "yadda ake iya yiwuwa mutum ya faɗi."], ["Ƙarfen riƙo (grab bar)", "ƙarfe mai ƙarfi da aka kafa a bango don riƙewa, sau da yawa kusa da bayan gida ko bahon wanka."]],
          slides: [
            { title: "Ku duba ko'ina a kowace ziyara", bullets: ["Ƙasa: kafet, wayoyin wuta, kaya", "Matakala da haske", "Banɗaki: ƙasa mai danshi, babu ƙarafan riƙo"] },
            { title: "Rage haɗarin faɗuwa", bullets: ["Cire abubuwan da ke sa tuntuɓe, da izinin majiyyaci", "Ƙarafan riƙo a matakala da cikin bahon wanka ko shawa", "Ku faɗi abin da ba za ku iya gyarawa ba"] },
            { title: "Ƙwayoyin cuta a gida", bullets: ["Wanke hannu kafin kulawa da bayanta", "Safar hannu don ruwan jiki", "Wanke hannu bayan cire safar hannu"] },
            { title: "Lafiyarku", bullets: ["Ku san adireshin da lambar kamfanin", "Ku nemi a kulle dabbobin gida", "Ba ku jin lafiya? Ku fita ku kira mai kula da ku"] }
          ],
          sources: [
            { name: "MedlinePlus: Falls", url: "https://medlineplus.gov/falls.html" },
            { name: "CDC: Clinical Safety: Hand Hygiene for Healthcare Workers", url: "https://www.cdc.gov/clean-hands/hcp/clinical-safety/index.html" }
          ],
          tryIt: "Ku zagaya gidanku kamar ku mai kula da marasa lafiya a gida ne. Ku jera aƙalla haɗurra huɗu da kuka gani (misali kafet da ba a kafa shi da kyau ba ko hanya mai duhu), abin da za ku yi game da kowanne, da abu ɗaya da za ku yi don kiyaye lafiyarku.",
          youCanNow: "duba gida don neman haɗurra, gyara su ko faɗin su, da kiyaye lafiyarku a ziyara.",
          quickCheck: [
            { objective: "O2", q: "Kun ga wayar fitila ta ratsa hanyar zuwa banɗaki. Me za ku yi?", options: ["Ku yi watsi da ita", "Da izinin majiyyaci, ku matsar da ita daga hanya", "Ku yanke wayar", "Ku zubar da fitilar"], answer: 1, why: "Matsar da abin da ke sa tuntuɓe da izinin majiyyaci yana rage haɗarin faɗuwa." },
            { objective: "O2", q: "Wani baƙo a gidan majiyyaci yana yin barazana kuma ba ku jin lafiya. Me za ku yi?", options: ["Ku zauna ku gama dukkan ayyuka tukuna", "Ku yi gardama da baƙon", "Ku ɓoye a banɗaki", "Ku fita ku kira mai kula da ku"], answer: 3, why: "Lafiyarku ce ta farko; ku fita ku kira mai kula da ku." }
          ]
        },
        {
          title: "Bin tsarin kulawa cikin mutunci",
          objectives: ["O3"],
          minutes: 5,
          goal: "Jera ayyukan tsarin kulawa na ziyara bisa tsari da yin su ta hanyar da ke girmama majiyyaci.",
          text: [
            "Nas ne ke rubuta tsarin kulawa (care plan) don kowane majiyyaci. Yana faɗin abin da za ku yi a kowace ziyara: misali taimako da shawa, taimako da sa tufafi, dafa abincin rana, ɗan tafiya, da wanki. Ku yi abin da tsarin ya faɗa. Idan majiyyaci ya nemi wani abu da ba ya cikin tsarin, ku kira mai kula da ku.",
            "Masu kula ba sa canja tsarin kulawa kuma ba sa ba da shawarar lafiya. Gwargwadon jihar da tsarin, kuna iya tunatar da majiyyaci cewa lokacin maganinsa ya yi, amma ba ku ne ke yanke yawan magani ko canja magunguna ba. Tambayoyi game da magunguna suna zuwa ga nas.",
            "Mutunci yana nufin ɗaukar majiyyaci a matsayin babba da ke da iko kan rayuwarsa. Ku ƙwanƙwasa ƙofa, ku gaishe shi da sunan da yake so, ku bayyana abin da za ku yi ku tambaya kafin ku fara. Ku ba da zaɓi, kamar wace riga zai sa. Ku bar shi ya yi abin da zai iya da kansa, ko da zai ɗauki lokaci. Ku rufe jikinsa yayin wanka.",
            "Ayyukan hannu kamar ɗaga majiyyaci daga wuri zuwa wuri da yi wa wanda ba zai iya tsayawa ba wanka ana koyon su kuma ana duba su a horonku, ƙarƙashin kulawar nas."
          ],
          steps: ["Ku karanta tsarin kulawa kafin ku fara.", "Ku gaishe da majiyyaci, ku bayyana tsarin yau ku tambayi abin da yake so.", "Ku yi ayyukan bisa tsari mai ma'ana, misali wanka kafin sa tufafi, da abinci a kan lokaci.", "Ku bar majiyyaci ya yi abin da zai iya ku ba da zaɓi.", "Ku kira mai kula da ku game da duk abin da ba ya cikin tsarin."],
          words: [["Tsarin kulawa (care plan)", "jerin da nas ya rubuta na kulawar da majiyyaci zai samu da yadda za a yi ta."], ["Mutunci", "girmama mutum, a matsayin babba da ke yanke nasa zaɓi."], ["Iyakar aiki (scope)", "ayyukan da aka horar da ku kuma aka ba ku izinin yi a aikinku."]],
          slides: [
            { title: "Tsarin kulawa shi ne jagoranku", bullets: ["Nas ne ya rubuta shi", "Ku yi abin da ya faɗa", "Ba ya cikin tsarin? Ku kira mai kula da ku"] },
            { title: "Ku tsaya a matsayinku", bullets: ["Babu shawarar lafiya", "Babu canja magunguna ko yawan magani", "Tambayoyin magani suna zuwa ga nas"] },
            { title: "Mutunci", bullets: ["Ƙwanƙwasa, gaisuwa, bayani, tambaya", "Ku ba da zaɓi", "Ku bar shi ya yi abin da zai iya", "Ku rufe jikinsa"] }
          ],
          tryIt: "Atisaye kawai, majiyyaciya ta ƙirƙira: tsarin kulawar Mrs. Okafor yana cewa \"wanki, taimako da shawa, taimako da sa tufafi, abincin rana ƙarfe 12 na rana, tafiyar minti 10 bayan abincin rana\". Kun isa ƙarfe 10:30. Ku rubuta ayyukan bisa tsarin da za ku yi su, da hanya ɗaya da za ku ba ta zaɓi a kowanne.",
          youCanNow: "bin tsarin kulawa bisa tsari mai ma'ana, tsayawa a matsayinku da girmama mutunci da zaɓin majiyyaci.",
          quickCheck: [
            { objective: "O3", q: "Majiyyaci ya nemi ku share magudanar ruwan rufin gidansa, wanda ba ya cikin tsarin kulawa. Me za ku yi?", options: ["Ku yi don ku nuna kirki", "Ku kira mai kula da ku game da buƙatar", "Ku ƙi da rashin ladabi", "Ku nemi aboki ya yi don kuɗi"], answer: 1, why: "Ayyukan da ba sa cikin tsarin kulawa suna zuwa ga mai kula da ku." },
            { objective: "O3", q: "Majiyyaci yana son ya ɗaura maɓallan rigarsa da kansa amma yana jinkiri. Me za ku yi?", options: ["Ku yi masa don ku rage lokaci", "Ku ce masa ya yi sauri", "Ku bar shi ya yi, ku taimaka idan ya nema kawai", "Ku bar rigar"], answer: 2, why: "Barin majiyyata su yi abin da za su iya yana kiyaye mutuncinsu da 'yancinsu." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Aikin da gidan",
        questions: [
          { objective: "O1", q: "Mene ne babban bambanci tsakanin mai kula da marasa lafiya a gida da mai taimakon kai?", options: ["Mai kula a gida yana iya yin wasu ayyukan lafiya masu sauƙi ƙarƙashin nas", "Mai taimakon kai yana yin tiyata", "Babu bambanci ko kaɗan", "Mai kula a gida ba ya taɓa taimakawa da wanka"], answer: 0, why: "Masu kula a gida suna iya duba alamun rayuwa (vital signs) da ayyuka makamantansu, gwargwadon jihar; masu taimakon kai yawanci suna ba da taimako ba na lafiya ba." },
          { objective: "O2", q: "Wanne ne haɗarin faɗuwa?", options: ["Ƙaramar fitilar dare a hanya", "Ƙarfen riƙo a matakala", "Ƙarfen riƙo kusa da bahon wanka", "Kafet da ba a kafa shi ba a saman matakala"], answer: 3, why: "Kafet da ba a kafa shi ba yana iya sa tuntuɓe; sauran suna rage haɗarin." },
          { objective: "O2", q: "Kun ga haɗarin da ba za ku iya gyarawa ba, kamar karyayyen ƙarfen riƙon matakala. Me za ku yi?", options: ["Ku gyara shi da tef", "Ku rubuta shi ku faɗa wa mai kula da ku", "Kada ku ce komai", "Ku ce wa majiyyaci ya daina amfani da matakala har abada"], answer: 1, why: "Ana faɗin haɗurran da ba za ku iya gyarawa ba don kamfanin ya ɗauki mataki." },
          { objective: "O3", q: "Majiyyaci ya tambaya nawa zai sha daga wani magani. Me za ku ce?", options: ["Ku faɗi abin da kuke tsammani", "Ku ce ya ninka shi", "Ku ce za ku tambayi nas", "Ku nema a intanet ku yanke masa shawara"], answer: 2, why: "Masu kula ba sa ba da shawarar magani ko yawan magani; nas ne ke amsa tambayoyin magani." },
          { objective: "O3", q: "Wane ne ke rubuta tsarin kulawar majiyyaci?", options: ["Nas", "Mai kula", "Maƙwabcin majiyyaci", "Babu kowa"], answer: 0, why: "Nas ne ke rubuta tsarin kulawa; mai kula yana bin sa." }
        ]
      }
    },
    {
      name: "Babi na 2: Faɗin canje-canje, sirri da kayan ziyararku",
      lessons: [
        {
          title: "Lura da canje-canje da rubuta bayanin ziyara",
          objectives: ["O4"],
          minutes: 5,
          goal: "Rubuta bayanin ziyara na gaskiya da zaɓar ko za a kira nas ko 911.",
          text: [
            "Wataƙila ku kaɗai ne za ku ga majiyyaci a yau. Ku lura da canje-canje: rage ci ko sha, sabon ciwo, sabon gyambo ko rauni, ƙarin ruɗewa, wahalar numfashi, faɗuwa, ko canjin yanayin zuciya.",
            "Ku rubuta bayanin ziyararku da gaskiya: abin da kuka yi, abin da kuka gani da kuka ji, da lokaci. Ku yi amfani da kalmomin majiyyaci a cikin alamun zance. \"11:00. Na taimaka da shawa. Wuri ja a diddigen dama, girman kwabo. Majiyyaci ya ce, 'Diddigena yana ciwo.'\" bayani ne mai kyau. \"Kamar ba shi da daɗi\" ba shi da kyau.",
            "Ku kira mai kula da ku ko nas game da kowane canji. Ku fara kiran 911 don gaggawa: wahalar numfashi, ciwon ƙirji, mutumin da ba ya farkawa, zubar jini mai yawa, ko alamun shanyewar ɓarin jiki (stroke). Sannan ku kira kamfaninku.",
            "Kamfaninku zai faɗa muku yadda yake son a rubuta bayanai, a takarda ko a manhaja (app). Kada ku taɓa rubuta bayanan sirri a wani wuri daban, kamar wurin rubutu na wayarku."
          ],
          steps: ["Ku lura da canjin.", "Gaggawa ce? Ku fara kiran 911, sannan kamfaninku.", "Ba gaggawa ba ce? Ku kira nas ko mai kula da ku.", "Ku rubuta gaskiyar, lokacin, kalmomin majiyyaci da wanda kuka faɗa wa."],
          words: [["Bayanin ziyara", "rubutun da mai kula yake yi game da kowace ziyara."], ["Gaggawa", "haɗari mai tsanani na ba zato ga rai ko lafiya da ke buƙatar 911."], ["Gyambon kwanciya (pressure sore)", "fatar da ta lalace saboda zama a matsayi ɗaya na dogon lokaci; sau da yawa tana farawa a matsayin wuri ja a kan ƙashi."]],
          slides: [
            { title: "Ku lura da canje-canje", bullets: ["Rage ci ko sha", "Sabon ciwo, gyambo ko rauni", "Ƙarin ruɗewa, faɗuwa, ko wahalar numfashi"] },
            { title: "Ku rubuta gaskiya", bullets: ["Abin da kuka yi, kuka gani da kuka ji", "Lokaci da kalmomin majiyyaci", "Ba: \"Kamar ba shi da daɗi\""] },
            { title: "Wa za ku kira", bullets: ["Gaggawa: 911 da farko, sannan kamfaninku", "Kowane canji dabam: nas ko mai kula da ku", "Ku rubuta wanda kuka faɗa wa"] }
          ],
          sources: [{ name: "MedlinePlus: Pressure Sores", url: "https://medlineplus.gov/pressuresores.html" }],
          tryIt: "Atisaye kawai, majiyyaci na ƙirƙira: \"Mr. Diaz yawanci yana cin dukan abincin ransa. Yau ya ci loma biyu kawai, ya ce 'Ba na jin daɗin ci,' kuma idon sawunsa na hagu ya fi kumbura fiye da makon jiya.\" Ku rubuta bayanin ziyara mai layi uku ku yanke: kiran nas, ko kiran 911? Ku rubuta dalili.",
          youCanNow: "rubuta bayanin ziyara na gaskiya da zaɓar ko canji yana buƙatar nas ko 911.",
          quickCheck: [
            { objective: "O4", q: "Majiyyacinku ya sami wahalar numfashi farat ɗaya. Me za ku fara yi?", options: ["Ku rubuta bayani", "Ku kira 911", "Ku jira ku ga ko zai wuce", "Ku tura wa aboki tes"], answer: 1, why: "Wahalar numfashi gaggawa ce; ku fara kiran 911, sannan kamfanin." },
            { objective: "O4", q: "Wane bayanin ziyara ne ya fi kyau?", options: ["\"Majiyyaci ya yi wani iri yau.\"", "\"Komai lafiya ina tsammani.\"", "\"Wataƙila rana ce mara daɗi.\"", "\"1:15. Ya ci loma 2 na abincin rana. Ya ce, 'Ba na jin yunwa.'\""], answer: 3, why: "Yana ba da lokaci, abin da aka auna da kalmomin majiyyaci." }
          ]
        },
        {
          title: "Sirri, kuɗi da iyakoki",
          objectives: ["O5"],
          minutes: 5,
          goal: "Zaɓar matakin da ke kare sirrin majiyyaci, kuɗinsa da lafiyarsa.",
          text: [
            "Bayanan lafiyar majiyyaci sirri ne. HIPAA, wata dokar tarayya ta Amurka, tana kare su. Ku raba su da ƙungiyar kulawarku kaɗai. Kada ku yi magana game da majiyyata da abokai, kada ku saka wani abu game da su a intanet, kuma kada ku ɗauki hoto a gidansu.",
            "Ku kafa iyakoki a sarari game da kuɗi da kyaututtuka. Kada ku taɓa aron kuɗi, ba da rance, karɓar kyauta mai daraja ko amfani da katin majiyyaci, sai dai idan ƙa'idojin kamfaninku da tsarin kulawa sun ba da izinin aiki kamar sayayya da rasidi. Ku bi ƙa'idojin kamfaninku daidai, ku ajiye rasidai.",
            "Tsofaffi da masu nakasa suna iya fuskantar cin zarafi, sakaci da satar kuɗi, wani lokaci daga mutanen da ke kusa da su. Alamun gargaɗi sun haɗa da raunuka da babu wanda zai iya bayyana su, rashin tsafta, gyambon kwanciya, tsoro ko janyewa, da canje-canje na ba zato a kuɗi.",
            "Idan kuna zargin cin zarafi, ku faɗa wa mai kula da ku nan take. Kuna kuma iya tuntuɓar Adult Protective Services (ofishin kare manya) a jiharku. Idan majiyyaci yana cikin haɗari yanzu, ku kira 911. Wasu jihohi suna buƙatar masu kula su faɗi irin wannan; kamfaninku zai faɗa muku yadda."
          ],
          steps: ["Ku raba bayanan majiyyaci da ƙungiyar kulawa kaɗai.", "Ku bi ƙa'idojin kamfani game da kuɗi, ku ajiye rasidai, ku ƙi kyaututtuka masu daraja.", "Ku lura da alamun cin zarafi, sakaci ko satar kuɗi.", "Ku faɗi damuwarku ga mai kula da ku, ko Adult Protective Services; ku kira 911 idan akwai haɗari."],
          words: [["HIPAA", "dokar tarayya ta Amurka da ke kare sirrin bayanan lafiya."], ["Iyaka", "ƙayyadadden layi a sarari kan abin da kuke yi a dangantakar aiki."], ["Cin moriyar kuɗi (financial exploitation)", "ɗauka ko amfani da kuɗin wani ko kayansa ba bisa ka'ida ba."], ["Adult Protective Services (APS)", "ofishin jiha ko gunduma da ke bincike kan cin zarafi da sakacin tsofaffi ko masu nakasa."]],
          slides: [
            { title: "Sirri", bullets: ["Ku raba da ƙungiyar kulawa kaɗai", "Babu magana, saka a intanet ko hoto", "HIPAA tana kare bayanan lafiya"] },
            { title: "Kuɗi da kyaututtuka", bullets: ["Babu aro, rance ko kyauta mai daraja", "Sayayya sai idan tsarin ya ba da izini, da rasidi", "Ku bi ƙa'idojin kamfani daidai"] },
            { title: "Alamun cin zarafi", bullets: ["Raunuka da babu wanda zai iya bayyana su", "Rashin tsafta ko gyambon kwanciya", "Tsoro, janyewa ko canjin kuɗi na ba zato"] },
            { title: "Ku faɗi shi", bullets: ["Ku faɗa wa mai kula da ku nan take", "Adult Protective Services", "Haɗari yanzu: 911"] }
          ],
          sources: [
            { name: "MedlinePlus: Elder Abuse", url: "https://medlineplus.gov/elderabuse.html" },
            { name: "Eldercare Locator (ACL)", url: "https://eldercare.acl.gov/" }
          ],
          tryIt: "Ku karanta waɗannan halaye uku na ƙirƙira ku rubuta abin da za ku yi: 1) Majiyyaci ya ba ku $200 \"saboda kirkinku.\" 2) Ɗan'uwan majiyyaci ya nemi lambar sirrin katin bankin majiyyaci (PIN). 3) Abokinku ya tambaya wane shahararren mutum kuke kula da shi. Sannan ku rubuta jimla ɗaya ta iyaka da za ku iya faɗa cikin ladabi.",
          youCanNow: "kare sirrin majiyyaci, kuɗinsa da lafiyarsa da faɗin damuwa ga mutumin da ya dace.",
          quickCheck: [
            { objective: "O5", q: "Majiyyaci ya ba ku agogo mai tsada a matsayin godiya. Me za ku yi?", options: ["Ku ƙi cikin ladabi ku faɗa wa mai kula da ku", "Ku karɓa a ɓoye", "Ku sayar ku raba kuɗin", "Ku nemi kuɗi a maimakonsa"], answer: 0, why: "Kyauta mai daraja ta ƙetare iyaka; ku ƙi cikin ladabi ku bi ƙa'idojin kamfani." },
            { objective: "O5", q: "Kun lura kuɗin majiyyaci yana ɓacewa duk lokacin da wani ɗan'uwansa ya ziyarta. Me za ku yi?", options: ["Ku tunkari ɗan'uwan", "Ku yi watsi, maganar iyali ce", "Ku faɗa wa mai kula da ku", "Ku ɓoye walat ɗin majiyyaci a jakarku"], answer: 2, why: "Ana faɗin yiwuwar cin moriyar kuɗi ga mai kula da ku ko Adult Protective Services." }
          ]
        },
        {
          title: "Kayan atisayen ziyararku da matakai na gaba",
          objectives: ["O2", "O3", "O4", "O1"],
          minutes: 6,
          goal: "Haɗa kayan atisayen ziyara don majiyyaci na ƙirƙira da tsara matakinku na gaba zuwa horo.",
          text: [
            "Yanzu za ku haɗa kwas ɗin gaba ɗaya. Kayan ziyara (visit kit) shi ne abin da mai kula da ya shirya yake ɗauka a kansa da a takarda: ɗan duba lafiyar gida, ayyukan tsarin kulawa bisa tsari, da bayanin ziyara a sarari.",
            "Ku yi amfani da majiyyaci na ƙirƙira, misali \"Mr. Johnson, shekara 78, yana zaune shi kaɗai, yana amfani da sandar tafiya mai ƙafafu (walker), tsarin kulawa: taimako da shawa, sa tufafi, dafa karin kumallo, ɗan tafiya, wanki.\" Kada ku taɓa amfani da sunan mutum na gaske ko bayanansa don atisaye.",
            "Sannan ku ɗauki mataki ɗaya na gaske zuwa aikin. Ku nemo kamfanin kula a gida ko shirin da aka amince da shi kusa da ku da ke horar da sababbin masu kula. Ku tambaya game da horo, jarabawa, binciken tarihi, albashi lokacin horo da jadawali. American Job Center (cibiyar aiki ta Amurka) zai iya taimaka muku nemo horo da biyan kuɗinsa.",
            "A takardar bayanin aikinku (résumé), ku jera kulawar da kuka taɓa yi, kamar kula da wani a iyali, da kalmomi masu sauƙi: \"Na taimaka wa wani a iyalina da abinci, wanka da ganawa da likita na shekara 2.\""
          ],
          steps: ["Ku rubuta jerin duba lafiyar gida mai aƙalla abubuwa 6.", "Ku jera ayyukan tsarin kulawa na majiyyacin ƙirƙira bisa tsarin da za ku yi su.", "Ku rubuta bayanin ziyara na gaskiya mai canji ɗaya da za ku faɗa, da wanda za ku faɗa wa.", "Ku rubuta shafin hukuma na jiharku da kamfani ko shiri ɗaya da za ku tuntuɓa a wannan makon."],
          words: [["Kayan ziyara (visit kit)", "jerin dubawarku, jerin ayyukanku da tsarin bayaninku don kowace ziyara."], ["Shirin da aka amince da shi", "shirin horo da jiharku ko kamfanin da aka tabbatar ke karɓa."]],
          slides: [
            { title: "Kayan ziyararku", bullets: ["Jerin duba lafiyar gida", "Ayyukan tsarin kulawa bisa tsari", "Bayanin ziyara na gaskiya"] },
            { title: "Atisaye kawai", bullets: ["Ku yi amfani da majiyyaci na ƙirƙira", "Kada ku taɓa amfani da sunaye ko bayanai na gaske"] },
            { title: "Matakinku na gaske na gaba", bullets: ["Ku nemo kamfani ko shirin da ke horar da masu kula", "Ku tambaya game da horo, jarabawa, binciken tarihi da albashi", "American Job Center zai iya taimakawa"] },
            { title: "Layin résumé", bullets: ["Ku jera kulawar iyali da kalmomi masu sauƙi", "Ku faɗi abin da kuka yi da tsawon lokacin"] }
          ],
          sources: [{ name: "US Bureau of Labor Statistics: Home Health and Personal Care Aides (How to Become One)", url: "https://www.bls.gov/ooh/healthcare/home-health-aides-and-personal-care-aides.htm#tab-4" }],
          tryIt: "Aikin ƙarshe: ku yi kayan atisayen ziyararku don majiyyaci na ƙirƙira: jerin duba lafiyar gida, ayyukan tsarin kulawa bisa tsari, bayanin ziyara na gaskiya mai canji ɗaya da za ku faɗa da wanda za ku faɗa wa, da shafin hukuma na jiharku tare da kamfani ko shiri ɗaya da za ku tuntuɓa.",
          youCanNow: "haɗa kayan atisayen ziyara da ɗaukar mataki na gaske na gaba zuwa horon mai kula da marasa lafiya a gida.",
          quickCheck: [
            { objective: "O1", q: "Wace tambaya ce mai kyau da za ku yi wa kamfanin kula a gida?", options: ["\"Zan iya tsallake horon?\"", "\"Kuna horar da sababbin masu kula, kuma akwai jarabawa?\"", "\"Zan iya ba da magunguna yadda nake so?\"", "\"Zan iya kawo abokaina gidajen majiyyata?\""], answer: 1, why: "Tambaya game da horo da jarabawa tana nuna muku ainihin hanyar a wannan kamfanin." },
            { objective: "O3", q: "Tsarin kulawarku na ƙirƙira yana cewa shawa, sa tufafi da karin kumallo. Wane tsari ne ya fi ma'ana?", options: ["Shawa, sa tufafi, sannan karin kumallo", "Karin kumallo a cikin shawa", "Sa tufafi, shawa, sannan sake sa tufafi", "Tsallake shawa"], answer: 0, why: "Wanka kafin sa tufafi, sannan abinci, tsari ne mai ma'ana don waɗannan ayyuka." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Faɗin canje-canje, sirri da kayan ziyararku",
        questions: [
          { objective: "O4", q: "Wane canji ne ya kamata ku faɗa wa nas?", options: ["Majiyyaci ya kalli talabijin", "Majiyyaci ya sa riga shuɗiya", "Sabon wuri ja a diddigen majiyyaci", "Majiyyaci ya sami baƙo"], answer: 2, why: "Sabon wuri ja yana iya zama farkon gyambon kwanciya kuma dole a faɗe shi." },
          { objective: "O4", q: "Majiyyacinku ba ya farkawa. Me za ku fara yi?", options: ["Ku kira 911", "Ku bar shi ya yi barci", "Ku rubuta bayani ku tafi", "Ku kira abokinsa"], answer: 0, why: "Mutumin da ba ya farkawa gaggawa ce; ku fara kiran 911." },
          { objective: "O5", q: "Wani maƙwabci ya tambaya me ke damun majiyyacinku. Me za ku ce?", options: ["Ku faɗa masa ciwon", "Ku nuna masa bayanan ziyara", "Ku ce ba za ku iya raba bayanai game da majiyyata ba", "Ku saka labari a intanet"], answer: 2, why: "Bayanan lafiyar majiyyaci sirri ne kuma suna zuwa ga ƙungiyar kulawa kaɗai." },
          { objective: "O5", q: "Wane ne ke bincike kan cin zarafi ko sakacin tsofaffi ko masu nakasa?", options: ["Gidan waya", "Adult Protective Services", "Ma'aikacin banki", "Wurin motsa jikin majiyyaci"], answer: 1, why: "Adult Protective Services ne ke bincike kan cin zarafi da sakaci; ku kira 911 don haɗari na nan take." },
          { objective: "O5", q: "Majiyyaci ya nemi aron $50 daga gare ku. Me za ku yi?", options: ["Ku ba shi rance a ɓoye", "Ku ba shi rance ku karɓi riba", "Ku ba shi katinku", "Ku ƙi cikin ladabi ku faɗa wa mai kula da ku"], answer: 3, why: "Ba da rance ya ƙetare iyakar aiki; ku bi ƙa'idojin kamfani." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Ƙwarewar Mai Kula da Marasa Lafiya a Gida",
    questions: [
      { objective: "O1", q: "A ina mai kula da marasa lafiya a gida yake yawan aiki?", options: ["A gidajen majiyyata", "A ɗakunan tiyata kawai", "A banki", "A ɗakin gwajin kantin magani"], answer: 0, why: "Masu kula a gida suna taimaka wa mutane a gidajensu." },
      { objective: "O1", q: "Me wannan kwas yake yi?", options: ["Yana ba ku takardar shaidar mai kula", "Yana maye gurbin horon kamfaninku", "Yana shirya ku don horo da aikin", "Yana ba ku lasisin jiha"], answer: 2, why: "Kwas ɗin yana shirya ku; horo da jarabawa suna fitowa daga kamfani ko shirin da aka amince da shi." },
      { objective: "O1", q: "Masu kula a kamfanonin da Medicare ke biya dole su:", options: ["Sami digirin aikin nas", "Gama horo na hukuma su ci jarabawa", "Yi aiki ba tare da wani horo ba", "Yi aiki da dare kawai"], answer: 1, why: "BLS ya ce masu kula a kamfanonin da aka tabbatar dole su gama horo na hukuma su ci jarabawa ta bai ɗaya." },
      { objective: "O1", q: "Don sanin ƙa'idojin jiharku game da masu kula a gida, ku duba:", options: ["Sharhi a ƙarƙashin bidiyo", "Saƙon tes da ake yaɗawa", "Shawarar baƙo", "Hukumar lafiya ko ma'aikatar lafiya ta jiharku"], answer: 3, why: "Shafin lafiya na hukuma na jihar ne ke bayyana ƙa'idojinta." },
      { objective: "O2", q: "Wace ce hanya mafi kyau don rage haɗarin faɗuwa a gida?", options: ["Cire abubuwan da ke sa tuntuɓe da izinin majiyyaci", "Ƙara kafet", "Kashe fitilun hanya", "Saka abubuwa a kan dogayen shiryayye"], answer: 0, why: "Cire abubuwan da ke sa tuntuɓe yana ɗaya daga cikin manyan hanyoyin hana faɗuwa." },
      { objective: "O2", q: "Yaushe ya kamata ku wanke hannuwanku a ziyara?", options: ["Sai lokacin da za ku tafi kawai", "Kafin kulawa da bayanta, da bayan cire safar hannu", "Sai idan majiyyaci ya nema kawai", "Ba sai ba, safar hannu ta isa"], answer: 1, why: "Ku wanke hannu kafin kulawa da bayanta da nan take bayan cire safar hannu." },
      { objective: "O2", q: "Ba ku jin lafiya a gidan majiyyaci. Me za ku yi?", options: ["Ku zauna har ziyarar ta ƙare", "Ku kulle kanku a ɗaki", "Ku fita ku kira mai kula da ku", "Ku saka labari a intanet"], answer: 2, why: "Lafiyarku ce ta farko; ku fita ku kira mai kula da ku." },
      { objective: "O2", q: "Wanne ne ke taimakawa hana faɗuwa a banɗaki?", options: ["Ƙasa mai danshi", "Tabarmar wanka da ba a kafa ta ba", "Haske marar ƙarfi", "Ƙarafan riƙo a cikin bahon wanka ko shawa"], answer: 3, why: "Ƙarafan riƙo a cikin bahon wanka ko shawa suna taimakawa hana faɗuwa." },
      { objective: "O3", q: "Majiyyaci ya nemi wani aiki da ba ya cikin tsarin kulawa. Ku:", options: ["Kira mai kula da ku", "Yi shi duk da haka", "Ƙi ku tafi", "Tambayi wani majiyyaci"], answer: 0, why: "Canje-canje ga tsarin suna wucewa ta hannun mai kula da ku." },
      { objective: "O3", q: "Wanne ne ke nuna girmama mutuncin majiyyaci?", options: ["Yanke masa duk shawara", "Ba da zaɓi, kamar wace riga zai sa", "Magana game da shi kamar ba ya nan", "Barin jikinsa a buɗe lokacin wanka"], answer: 1, why: "Ba da zaɓi yana ɗaukar majiyyaci a matsayin babba da ke da iko kan rayuwarsa." },
      { objective: "O3", q: "Wane ne ke amsa tambayoyi game da magungunan majiyyaci?", options: ["Mai kula", "Maƙwabcin majiyyaci", "Nas", "Dandalin tattaunawa a intanet"], answer: 2, why: "Masu kula ba sa ba da shawarar magani; nas ne ke amsa tambayoyin magani." },
      { objective: "O3", q: "Kafin ku fara kulawa, me za ku yi?", options: ["Ku fara ba tare da magana ba", "Ku karanta tsarin kulawa, ku gaishe da majiyyaci ku bayyana", "Ku sake shirya kayan ɗaki", "Ku canja tsarin kulawa"], answer: 1, why: "Karanta tsarin, gaisuwa da bayani su ne na farko." },
      { objective: "O4", q: "Wanne ne gaggawa da ke buƙatar fara kiran 911?", options: ["Majiyyaci yana son ɗan abin ci", "Majiyyaci ya gaji da zama", "Wankin ya yi jinkiri", "Ciwon ƙirji ko wahalar numfashi"], answer: 3, why: "Ciwon ƙirji da wahalar numfashi suna buƙatar fara kiran 911, sannan kamfanin." },
      { objective: "O4", q: "Bayanin ziyara mai kyau ya haɗa da:", options: ["Lokaci, abin da kuka gani da kalmomin majiyyaci", "Ra'ayinku game da iyalin majiyyaci", "Hasashe game da abin da ke damunsa", "Bayanan sirri a wayarku"], answer: 0, why: "Bayanai gaskiya ne tare da lokaci da kalmomin majiyyaci." },
      { objective: "O4", q: "Majiyyaci yana cin abinci ƙasa da yadda ya saba sosai a wannan makon. Ku:", options: ["Kada ku ce komai", "Faɗa wa nas ku rubuta a bayaninku", "Tilasta masa ya cinye komai", "Zubar da abincinsa"], answer: 1, why: "Ana faɗin canjin ci kuma ana rubuta shi." },
      { objective: "O4", q: "Bayan kun kira 911 don gaggawa, ku kuma:", options: ["Koma gida", "Goge bayananku", "Kira kamfaninku", "Jira kwana ɗaya kafin ku faɗa wa kowa"], answer: 2, why: "Bayan 911, ku kira kamfaninku don nas da mai kula su sani." },
      { objective: "O5", q: "Wace doka ce ke kare bayanan lafiyar majiyyata?", options: ["HIPAA", "Iyakar gudun mota", "Dokar mafi ƙarancin albashi", "Dokar haƙƙin mallaka"], answer: 0, why: "HIPAA tana kare sirrin bayanan lafiya." },
      { objective: "O5", q: "Wanne ne alamar gargaɗin cin moriyar kuɗi?", options: ["Majiyyaci ya biya kuɗi a kan lokaci", "Majiyyaci ya sayi kayan abinci", "Majiyyaci yana da katin ɗakin karatu", "Canje-canje na ba zato da ba a bayyana su ba a kuɗin majiyyaci"], answer: 3, why: "Canje-canje na ba zato a kuɗi suna iya nufin wani yana ɗaukar kuɗin majiyyaci." },
      { objective: "O5", q: "Ɗaukar hoton majiyyaci a gidansa don rabawa da abokai:", options: ["Ba laifi idan yana farin ciki", "Matsalar sirri ce; kada ku yi", "Kamfani ne ya buƙata", "Ba laifi idan kun ɓoye gidan"], answer: 1, why: "Hotuna da saka labari game da majiyyata suna keta sirrinsu." },
      { objective: "O5", q: "Kuna zargin wani a iyalin majiyyaci yana sakaci da shi. Ku:", options: ["Faɗa wa maƙwabtan majiyyaci", "Jira har ya ƙara muni", "Faɗa wa mai kula da ku ko Adult Protective Services", "Kada ku yi komai domin maganar iyali ce"], answer: 2, why: "Ana faɗin zargin sakaci; ku kira 911 idan akwai haɗari yanzu." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [1, 2, 4, 6, 9, 10, 13, 17, 19] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake dubawa.",
    criteria: [
      { name: "Jerin duba lafiyar gida", objective: "O2", notYet: "Abubuwa ƙasa da 4, ko babu abu game da lafiyar mai kula.", meets: "Aƙalla abubuwa 6 da suka shafi ƙasa, matakala, haske, banɗaki, ƙwayoyin cuta da lafiyar mai kula.", exceeds: "Yana faɗin abin da za a yi game da kowane abu: gyara da izinin majiyyaci, ko faɗi." },
      { name: "Ayyukan tsarin kulawa", objective: "O3", notYet: "Ayyuka sun ɓace, ba su cikin tsari mai ma'ana, ko suna wajen tsarin.", meets: "Dukkan ayyukan tsarin bisa tsari mai ma'ana, tare da hanya ɗaya ta ba da zaɓi.", exceeds: "Yana nuna ayyukan da majiyyaci zai iya yin wani sashe da kansa." },
      { name: "Bayanin ziyara", objective: "O4", notYet: "Bayanin yana da hasashe ko ra'ayi, ko babu lokaci.", meets: "Gaskiya, lokaci, kalmomin majiyyaci da wanda aka faɗa wa.", exceeds: "Ya faɗi daidai ko canjin yana buƙatar nas ko 911, da dalili." },
      { name: "An kiyaye sirri", objective: "O5", notYet: "Kayan suna amfani da sunan mutum na gaske ko bayanan sirri.", meets: "Yana amfani da majiyyaci na ƙirƙira kuma babu bayanan sirri.", exceeds: "Ya ƙara jimla ɗaya ta iyaka game da kuɗi ko kyauta." },
      { name: "Mataki na gaba", objective: "O1", notYet: "Babu shafin hukuma ko kamfani da aka jera.", meets: "Ya jera shafin hukuma na jihar da kamfani ko shiri ɗaya da za a tuntuɓa.", exceeds: "Ya jera tambayoyin da za a yi game da horo, jarabawa, binciken tarihi da albashi." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka tuntuɓi kamfanin kula a gida ko shirin horo da aka amince da shi cikin kwanaki 30",
      "Masu koyo da suka gama horon mai kula a gida suka ci jarabawar ƙwarewa",
      "Masu koyo da aka ɗauka aiki a matsayin masu kula a gida ko masu taimakon kai cikin watanni 6 (binciken biyo baya)",
      "Kamfanonin abokan aiki sun ce sababbin masu kula suna faɗin canje-canje kuma suna bin tsarin kulawa tun makonninsu na farko"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai intanet don nemo shafin ma'aikatar lafiya ta jiha da kamfanonin yanki",
      "Takarda da alƙalami don jerin dubawa, jerin ayyuka da bayanin ziyara",
      "Gidanku don zagayen duba lafiya",
      "Kusan minti 60 gaba ɗaya, a gajerun zama"
    ],
    facilitatorNotes: [
      "Kafin kwas ɗin, ku nemo ƙa'idojin jiharku game da masu kula a gida da kamfanonin yanki biyu da ke horar da sababbin masu kula, ku raba su.",
      "Ku yi amfani da majiyyata na ƙirƙira kawai; ku tunatar da masu koyo kada su taɓa amfani da sunan mutum na gaske ko bayanansa a atisaye.",
      "Kada ku bar masu koyo su yi atisayen ɗaga majiyyaci ko wanka a kan junansu ba tare da malami da ya sami horo ba.",
      "Ku faɗi a sarari cewa kwas ɗin yana shirya masu koyo kuma ba ya ba su takardar shaida; ƙa'idoji suna fitowa daga dokar tarayya, jiha da kamfani.",
      "Ga masu koyo da ke da tarihin shari'a, ku nuna musu ƙa'idojin jiha da mai ba da shawara na masu dawowa gida ko na taimakon shari'a kafin su nema."
    ]
  }
};
