"use strict";

// Koach Learn course, Hausa (ha) translation of underserved/underserved-ai-future-opportunities.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "underserved-ai-future-opportunities-ha",
  lang: "ha",
  translationOf: "underserved-ai-future-opportunities",
  category: "Undeserved Community",
  name: "AI da Damarmakin Gaba",
  skills: "Gane inda AI ke canja aiki, Binciken aikin da ke ƙaruwa, Tabbatar da bayanan aiki a shafukan hukuma, Nemo horo kyauta, Yin tsarin koyo",
  outcome: "zaɓar aiki ɗaya da ke ƙaruwa da kuke sha'awa, bincika shi da mataimakin AI kyauta da shafin hukuma na Amurka game da makomar ayyuka, da rubuta tsari mai sauƙi na matakai uku don fara koyonsa da horo kyauta kusa da ku.",
  about: [
    "AI yana canja ayyuka da yawa: a shaguna, ofisoshi, rumbunan ajiyar kaya, asibitoci, makarantu da kuma a gida. Wannan yana iya ba da tsoro. Wannan kwas ɗin yana nuna muku yadda za ku mayar da wannan canji dama gare ku da iyalinku.",
    "Za ku koyi inda AI ke bayyana a wurin aiki, yadda ake amfani da mataimakin AI kyauta don binciken ayyuka, yadda ake tabbatar da abin da ya faɗa a shafukan hukuma, da yadda ake nemo horo kyauta ta ɗakin karatu, kwalejin al'umma (community college) ko American Job Center.",
    "Kuna iya yin kowane darasi a waya ko a kwamfutar ɗakin karatu kyauta. Kowane darasi yana ɗaukar kusan minti biyar kuma yana ƙarewa da aikin \"Gwada yanzu\". Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku rubuta tsari mai shafi ɗaya don aiki ɗaya da ke ƙaruwa: mene ne aikin, nawa ake biya da yadda yake ƙaruwa da sauri (an tabbatar a Occupational Outlook Handbook na hukuma), ƙwarewa biyu da kuke buƙata, da matakai uku da za ku ɗauka cikin wata mai zuwa ta amfani da horo kyauta kusa da ku.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya da matasa a al'ummomin da ba a kula da su sosai ba, waɗanda ke aiki a shaguna, ofisoshi, rumbunan kaya, kiwon lafiya, wuraren abinci ko a gida, ko waɗanda ke neman aiki, kuma suna damuwa game da yadda AI zai canja ayyukansu.",
    startingPoint: "Sun san aikinsu sosai kuma suna amfani da waya. Sun ji cewa AI yana canja ayyuka amma ba su san waɗanne ayyuka ne ke ƙaruwa ba, inda za a sami bayanan aiki na hukuma, ko inda za a sami horo kyauta.",
    gap: "AI yana canja ayyuka da yawa a wurin aiki, kuma mutanen da ba su da tsari suna iya kasancewa a baya. Masu koyo suna buƙatar nemo ayyukan da ke ƙaruwa da bayanan hukuma, yin amfani da AI don bincika su, nemo horo kyauta, da yin ƙananan matakai masu rana, tare da guje wa tayin aiki da horo na bogi.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli (kusan aji 6)",
      "Na'urori: wayar zamani ko kwamfutar ɗakin karatu",
      "Kuɗi: shafukan hukuma kyauta da horo kyauta ko mai araha kaɗai",
      "AI yana iya yin kuskure game da albashi, lasisi da horo: masu koyo suna tabbatarwa a bls.gov/ooh da shafukan hukuma na jiha",
      "Haɗarin sirri da zamba: babu lambar Social Security, lambobin banki ko kalmomin sirri a AI ko shafukan aiki"
    ],
    prerequisites: "Babu. Masu koyo da ba su saba da mataimakan AI ba za su iya fara ɗaukar kwas ɗin \"Introduction to AI and Digital Empowerment\" (Gabatarwa ga AI da Ƙarfafawa a Fasahar Zamani)."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku wani aiki da ku ko iyalinku kuka sani", action: "gane ayyukan da AI zai iya taimakawa da su da ayyukan da har yanzu mutum ke buƙatar yi", standard: "kuna ambaton aƙalla biyu na kowanne" },
    { id: "O2", condition: "Ta amfani da Occupational Outlook Handbook a bls.gov/ooh", action: "nemo aiki da ke ƙaruwa da rubuta matsakaicin albashinsa, horonsa da makomarsa", standard: "daga shafin da ake amfani da shi yanzu" },
    { id: "O3", condition: "Ta amfani da mataimakin AI kyauta", action: "yin tambayoyi masu sarari game da aikin yau da kullum da ƙwarewar wani aiki, sannan tabbatar da bayanan albashi, lasisi da horo a shafukan hukuma", standard: "ba tare da bayanan sirri a cikin prompt ba" },
    { id: "O4", condition: "Idan aka ba ku ƙwarewar da wani aiki ke buƙata", action: "nemo wurare biyu kyauta ko masu araha kusa da ku don koyon su", standard: "kuna rubuta sunan kowanne, lambar wayarsa da lokutan aikinsa" },
    { id: "O5", condition: "Idan kuna da burin aiki", action: "yin tsari mai shafi ɗaya mai ƙananan matakai uku da rana ga kowanne", standard: "kowane mataki ana iya yinsa cikin mako ɗaya ko biyu kuma ya dace da lokacinku da iyalinku" },
    { id: "O6", condition: "Idan aka ba ku tayin aiki ko horo", action: "duba shi don alamun zamba da kiyaye lambobin sirri daga ciki", standard: "kafin ku biya, ku sa hannu ko ku raba wani abu" }
  ],
  chapters: [
    {
      name: "Babi na 1: Yadda AI ke canja aiki",
      lessons: [
        {
          objectives: ["O1"],
          title: "Inda AI ke bayyana a wurin aiki a yau",
          minutes: 4,
          goal: "Ambaci hanyoyi uku da ake riga ake amfani da AI a ayyukan da ke kewaye da ku.",
          text: [
            "AI shiri ne na kwamfuta da zai iya yin ayyukan da yawanci sai mutum, kamar rubutu, rarrabawa, amsa tambayoyi ko gane tsari. Wataƙila kuna ganinsa kowace rana.",
            "A shago, AI yana taimakawa wajen yanke yawan kayan da za a yi oda. A cibiyar kira (call center), chatbot yana amsa tambayoyi masu sauƙi kafin mutum ya karɓa. A asibiti, shiri yana taimakawa wajen rubuta bayanan ganawa da likita. A rumbun kaya, na'urorin karanta lamba (scanner) da robobi suna taimakawa wajen bin diddigin kwalaye.",
            "A yawancin ayyuka, AI ba ya maye gurbin dukan aikin. Yana karɓe wasu ayyuka, kuma mutane suna yin sauran: magana da abokan ciniki, warware matsaloli, gyara abubuwa, kula da wasu da yanke shawara."
          ],
          words: [["AI", "gajartawar artificial intelligence (basirar na'ura): shirin kwamfuta da ke yin ayyukan da yawanci sai mutum."], ["Ɗawainiya (task)", "wani yanki na aiki, kamar amsa waya ko ƙirga kaya."]],
          slides: [
            { title: "AI ya riga ya fara aiki", bullets: ["Shaguna: yin odar kaya", "Cibiyoyin kira: chatbot yana amsa tambayoyi masu sauƙi", "Asibitoci: taimako wajen rubuta bayanai", "Rumbunan kaya: bin diddigin kwalaye"] },
            { title: "AI yana karɓar ɗawainiya, ba dukan aiki ba", bullets: ["Shirin kwamfuta yana yin wasu ɗawainiya", "Mutane suna yin sauran"] },
            { title: "Abin da mutane har yanzu suka fi iyawa", bullets: ["Magana da kula da mutane", "Warware sababbin matsaloli", "Gyara abubuwa da yanke shawara"] }
          ],
          tryIt: "Ku yi tunanin wani aiki da ku ko wani a iyalinku ya taɓa yi. Ku rubuta ɗawainiya biyu da AI zai iya taimakawa da su, da biyu da har yanzu mutum ke buƙatar yi.",
          youCanNow: "ambaci hanyoyin da ake amfani da AI a wurin aiki da bayyana dalilin da yasa har yanzu ake buƙatar mutane.",
          quickCheck: [
            { objective: "O1", q: "Mene ne AI?", options: ["Shirin kwamfuta da ke yin ayyukan da yawanci sai mutum", "Wani sabon nau'in waya", "Shirin aiki na gwamnati", "Robot da ke yin kowane aiki"], answer: 0, why: "AI shiri ne da zai iya rubutu, rarrabawa, amsa tambayoyi ko gane tsari." },
            { objective: "O1", q: "A asibiti, shiri yana rubuta bayanan ganawa. Wace ɗawainiya ce mutum har yanzu yake yi?", options: ["Rubuta kowace kalma ta bayanan", "Ta'aziyya da kula da majiyyaci", "Ƙirga bayanan", "Babu; shirin yana yin komai"], answer: 1, why: "AI yana karɓar wasu ɗawainiya, amma mutane har yanzu suna kula da wasu kuma suna yanke shawara." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ayyukan da ke ƙaruwa da ƙwarewar da suke buƙata",
          minutes: 5,
          goal: "Nemo aiki da ke ƙaruwa da albashinsa a Occupational Outlook Handbook na hukuma.",
          text: [
            "Wasu ayyuka suna ƙaruwa saboda fasaha, wasu kuma suna ƙaruwa saboda mutane koyaushe za su buƙace su, kamar kiwon lafiya, sana'o'in hannu da kula da yara da tsofaffi.",
            "Hukumar Ƙididdigar Ma'aikata ta Amurka (U.S. Bureau of Labor Statistics) tana gudanar da shafin intanet kyauta mai suna Occupational Outlook Handbook a bls.gov/ooh. Ga ɗaruruwan ayyuka, yana faɗa muku mene ne aikin, albashin da aka saba, horon da ake buƙata da yadda ake sa ran aikin zai ƙaru da sauri.",
            "Misali, Handbook ɗin yana sa ran ayyukan kwamfuta da fasahar bayanai gaba ɗaya za su ƙaru fiye da matsakaici daga 2025 zuwa 2035. Ana sabunta lambobi irin waɗannan, don haka koyaushe ku karanta shafin na yanzu da kanku."
          ],
          steps: ["Ku je bls.gov/ooh a waya ko kwamfutar ɗakin karatu.", "Ku zaɓi rukunin ayyuka, kamar Healthcare (kiwon lafiya) ko Computer and Information Technology (kwamfuta da fasahar bayanai).", "Ku danna aiki ɗaya.", "Ku rubuta albashin, horon da ake buƙata da makomar aikin."],
          words: [["Makomar aiki (job outlook)", "yadda ake sa ran yawan ayyuka zai ƙaru ko ya ragu da sauri."], ["Matsakaicin albashi (median pay)", "albashin tsakiya: rabin ma'aikata suna samun fiye da shi, rabi kuma ƙasa da shi."]],
          sources: [{ name: "U.S. Bureau of Labor Statistics: Occupational Outlook Handbook, Computer and Information Technology", url: "https://www.bls.gov/ooh/computer-and-information-technology/home.htm" }],
          slides: [
            { title: "Ayyukan da ke ƙaruwa", bullets: ["Kiwon lafiya da kula da mutane", "Sana'o'in hannu", "Kwamfuta da fasaha"] },
            { title: "Jagoran ayyukanku kyauta: bls.gov/ooh", bullets: ["Mene ne aikin", "Albashin da aka saba da horon da ake buƙata", "Yadda aikin ke ƙaruwa da sauri"] },
            { title: "Yadda ake amfani da shi", bullets: ["Ku zaɓi rukunin ayyuka", "Ku danna aiki ɗaya", "Ku rubuta albashi, horo da makoma"] }
          ],
          tryIt: "Ku buɗe bls.gov/ooh, ku zaɓi aiki ɗaya da kuke sha'awa, sannan ku rubuta matsakaicin albashinsa, horon da yake buƙata da makomarsa.",
          youCanNow: "duba kowane aiki a Occupational Outlook Handbook na hukuma da karanta albashinsa, horonsa da makomarsa.",
          quickCheck: [
            { objective: "O2", q: "Wane ne ke gudanar da Occupational Outlook Handbook?", options: ["Wani shafin aiki mai zaman kansa", "Kamfanin labarai", "Hukumar Ƙididdigar Ma'aikata ta Amurka (Bureau of Labor Statistics)", "Kwalejin al'umma"], answer: 2, why: "Hukumar Ƙididdigar Ma'aikata ta Amurka ce ke gudanar da Handbook ɗin a bls.gov/ooh." },
            { objective: "O2", q: "Aboki ya faɗa muku albashin wani aiki daga shafin da ya ajiye shekaru da suka wuce. Me za ku yi?", options: ["Ku yi amfani da lambarsa", "Ku yi tsammanin lamba mafi girma", "Ku tambayi AI ya tabbatar", "Ku karanta shafin na yanzu a bls.gov/ooh"], answer: 3, why: "Ana sabunta lambobin albashi da makoma, don haka ku karanta shafin na yanzu da kanku." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Amfani da AI don binciken aiki",
          minutes: 5,
          goal: "Yi wa mataimakin AI kyauta tambayoyi masu sarari game da aiki, sannan ku tabbatar da amsoshin.",
          text: [
            "Mataimakin AI kyauta kamar ChatGPT, Microsoft Copilot ko Google Gemini zai iya bayyana aiki da kalmomi masu sauƙi, ya jera ƙwarewar da yake buƙata, kuma ya ba da shawarar tambayoyin da za ku yi wa mutanen da ke yin aikin.",
            "Ku faɗa masa halin da kuke ciki ba tare da bayanan sirri ba. Misali: \"Na yi shekaru 3 ina aiki a wurin abinci mai sauri (fast food), kuma ina son taimakon mutane. Ka bayyana abin da mataimakin likita (medical assistant) yake yi a rana ta yau da kullum, da kalmomi masu sauƙi.\"",
            "AI yana iya yin kuskure game da albashi, lasisi da horo. Ku tabbatar da waɗannan bayanai a bls.gov/ooh ko shafin hukuma na jiharku kafin ku yi tsare-tsare."
          ],
          steps: ["Ku buɗe mataimakin AI kyauta.", "Ku faɗa masa aikin da ɗan bayani game da ƙwarewarku.", "Ku tambayi yadda rana ta yau da kullum take da ƙwarewar da ake buƙata.", "Ku tabbatar da albashi da horo a bls.gov/ooh."],
          words: [["Prompt (umarni)", "abin da kuke rubutawa ko faɗa wa mataimakin AI."], ["Lasisi (license)", "izinin hukuma daga jiha don yin wasu ayyuka."]],
          slides: [
            { title: "AI zai iya taimaka muku bincike", bullets: ["Bayyana aiki da kalmomi masu sauƙi", "Jera ƙwarewar da ake buƙata", "Ba da shawarar tambayoyin da za a yi wa ma'aikata"] },
            { title: "Prompt mai kyau", bullets: ["Aikin da kuke son koyo game da shi", "Ɗan bayani game da ƙwarewarku", "Yadda kuke son amsar: kalmomi masu sauƙi, jeri"] },
            { title: "Koyaushe ku tabbatar", bullets: ["Albashi, lasisi da horo suna iya zama ba daidai ba", "Ku tabbatar a bls.gov/ooh ko shafin jiharku"] }
          ],
          tryIt: "Ku nemi mataimakin AI ya bayyana rana ta yau da kullum a aikin da kuka zaɓa da manyan ƙwarewa biyar da yake buƙata. Ku kwatanta bayani ɗaya da abin da bls.gov/ooh ya ce.",
          youCanNow: "amfani da AI don koyo game da aiki da tabbatar da bayanansa a shafin hukuma.",
          quickCheck: [
            { objective: "O3", q: "Waɗanne bayanai daga AI ne dole ku tabbatar a shafukan hukuma?", options: ["Albashi, lasisi da horo", "Yadda ake rubuta sunan aikin", "Ma'anar kalmar \"aiki\"", "Sunan AI ɗin"], answer: 0, why: "AI yana iya yin kuskure game da albashi, lasisi da horo, don haka ku tabbatar da su." },
            { objective: "O3", q: "Kuna son AI ya bayyana aikin mai kula da rumbun kaya (warehouse supervisor). Me za ku haɗa?", options: ["Lambar Social Security ɗinku", "Ƙwarewarku da abin da kuke so, ba tare da bayanan sirri ba", "Bayanan bankinku", "Babu komai game da ku"], answer: 1, why: "Ƙwarewarku tana taimaka wa AI ya bayyana muku aikin; bayanan sirri kuma suna zama a waje." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Yadda AI ke canja aiki",
        questions: [
          { objective: "O1", q: "A yawancin ayyuka, me AI yake yi?", options: ["Yana maye gurbin kowane ma'aikaci", "Yana karɓe wasu ɗawainiya yayin da mutane ke yin sauran", "Ba ya yin komai", "Yana yanke dukan shawarwari"], answer: 1, why: "AI yawanci yana yin wasu ɗawainiya; mutane har yanzu suna yin sassan da ke buƙatar hankali da kulawa." },
          { objective: "O2", q: "Wane shafin hukuma kyauta ne ke nuna albashin aiki, horonsa da makomarsa?", options: ["Shafin kafofin sada zumunta", "Tallar da ke tasowa (pop-up)", "Occupational Outlook Handbook a bls.gov/ooh", "Hanyar haɗi a cikin saƙon tes"], answer: 2, why: "Hukumar Ƙididdigar Ma'aikata ce ke gudanar da Occupational Outlook Handbook." },
          { objective: "O2", q: "Mene ne ma'anar \"matsakaicin albashi\" (median pay)?", options: ["Albashi mafi girma", "Albashi mafi ƙanƙanta", "Albashi bayan haraji", "Albashin tsakiya: rabi suna samun fiye, rabi ƙasa"], answer: 3, why: "Matsakaici (median) shi ne lambar tsakiya." },
          { objective: "O3", q: "AI ya faɗa muku cewa wani aiki ba ya buƙatar lasisi a jiharku. Me za ku yi?", options: ["Ku tabbatar a shafin hukuma na jiharku ko bls.gov/ooh", "Ku yarda da shi", "Ku bar aikinku yau", "Ku faɗa wa kowa"], answer: 0, why: "AI yana iya yin kuskure game da lasisi; shafukan hukuma su ne majiyar da za a amince da ita." },
          { objective: "O3", q: "Wane prompt ne ya fi kyau don binciken aiki?", options: ["\"ayyuka\"", "\"Na yi shekaru 3 a wurin abinci mai sauri kuma ina son taimakon mutane. Ka bayyana abin da mataimakin likita yake yi a rana, da kalmomi masu sauƙi.\"", "\"Ga lambar Social Security ɗina\"", "\"kuɗi\""], answer: 1, why: "Yana ambaton aikin, yana ba da ƙwarewarku kuma yana faɗin yadda kuke son amsar." }
        ]
      }
    },
    {
      name: "Babi na 2: Shirin mataki na gaba",
      lessons: [
        {
          objectives: ["O4"],
          title: "Nemo horo kyauta kusa da ku",
          minutes: 5,
          goal: "Nemo wurare biyu kyauta ko masu araha don koyon ƙwarewar aikinku.",
          text: [
            "Ba sai kuna da kuɗi masu yawa ba kafin ku fara koyo. Ɗakunan karatu na jama'a sau da yawa suna ba da azuzuwan kwamfuta kyauta da koyo ta intanet kyauta. Kwalejojin al'umma suna ba da takardun shaidar ƙwarewa (certificate) masu araha, kuma ɗalibai da yawa suna samun tallafin karatu (financial aid).",
            "Ana gudanar da American Job Centers tare da Ma'aikatar Ƙwadago ta Amurka (U.S. Department of Labor). Suna taimakawa wajen neman aiki, tura mutane zuwa ayyuka da horo. Wasu hidimomi suna da sharuɗɗan cancanta, don haka ku tambayi cibiyar da ke kusa da ku abin da kuka cancanta. Ku nemo ɗaya da CareerOneStop American Job Center Finder ko ku kira 1-877-US-2JOBS.",
            "Ku tambayi mataimakin AI kyauta: \"Waɗanne hanyoyi kyauta zan iya koyon ƙwarewar farko ta aikin mataimakin likita?\" Sannan ku tabbatar da kowane ra'ayi da ɗakin karatu, kwalejin ko cibiyar aikin da kanta."
          ],
          steps: ["Ku tambayi ɗakin karatunku waɗanne azuzuwa kyauta da koyo ta intanet yake bayarwa.", "Ku duba kwalejin al'umma mafi kusa da shirye-shiryen certificate ɗinta.", "Ku nemo American Job Center mafi kusa da ku da CareerOneStop finder.", "Ku rubuta wurare biyu, lambobin wayarsu da lokutan aikinsu."],
          words: [["Certificate (takardar shaidar ƙwarewa)", "gajeren shirin horo da ke tabbatar da cewa kun koyi wata ƙwarewar aiki."], ["American Job Center", "ofishi a yankinku, da ake gudanarwa tare da Ma'aikatar Ƙwadago ta Amurka, da ke taimaka wa mutane samun aiki da horo."]],
          sources: [{ name: "U.S. Department of Labor: American Job Centers", url: "https://www.dol.gov/agencies/eta/american-job-centers" }, { name: "CareerOneStop: American Job Center Finder", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" }],
          slides: [
            { title: "Wuraren koyo kyauta ko masu araha", bullets: ["Azuzuwan ɗakin karatu na jama'a da koyo ta intanet", "Certificate na kwalejin al'umma", "American Job Centers"] },
            { title: "American Job Centers", bullets: ["Taimako wajen neman aiki da horo", "Wasu hidimomi suna da sharuɗɗan cancanta", "Nemo ɗaya: CareerOneStop finder ko 1-877-US-2JOBS"] },
            { title: "Ku yi amfani da AI, sannan ku kira", bullets: ["Ku tambayi AI hanyoyin koyo kyauta", "Ku tabbatar da kowane ra'ayi da wurin da kansa"] }
          ],
          tryIt: "Ku nemo wurare biyu kusa da ku inda za ku iya koyon ƙwarewar aikinku. Ku rubuta sunan kowanne, lambar wayarsa da lokutan aikinsa.",
          youCanNow: "nemo horo kyauta ko mai araha kusa da ku don aikin da kuke so.",
          quickCheck: [
            { objective: "O4", q: "Me kwalejojin al'umma sukan bayar?", options: ["Motoci kyauta", "Digiri na shekaru huɗu kaɗai", "Certificate masu araha, da tallafin karatu ga ɗalibai da yawa", "Aiki mai albashi tun ranar farko"], answer: 2, why: "Kwalejojin al'umma suna ba da certificate masu araha, kuma ɗalibai da yawa suna cancantar tallafi." },
            { objective: "O4", q: "Ba ku tabbata ko kun cancanci horo a American Job Center ba. Me za ku yi?", options: ["Ku ɗauka ba ku cancanta ba", "Ku biya wani shafi don ku sani", "Ku ƙyale horon", "Ku tambayi cibiyar da ke kusa da ku abin da kuka cancanta"], answer: 3, why: "Wasu hidimomi suna da sharuɗɗan cancanta, don haka ku tambayi cibiyar kai tsaye." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Mayar da buri ƙananan matakai",
          minutes: 4,
          goal: "Raba burin aiki zuwa ƙananan matakai uku masu rana.",
          text: [
            "Babban buri kamar \"samun aiki mafi kyau\" yana iya yi kamar ya yi girma sosai. Ƙananan matakai masu rana suna sa ya zama na gaske.",
            "Mataki mai kyau abu ne da za ku iya gamawa cikin mako ɗaya ko biyu: \"Kiran ɗakin karatu ranar Talata don yin rajistar ajin kwamfuta.\" \"Magana da mutum ɗaya da ke aiki a matsayin mataimakin likita kafin ranar 15 ga wata.\"",
            "Kuna iya neman mataimakin AI ya taimaka: \"Ka taimake ni in raba burina na zama mataimakin likita zuwa ƙananan matakai uku na wata mai zuwa. Zan iya ba da awa 3 a mako.\" Sannan ku canja tsarin don ya dace da rayuwarku, iyalinku da jadawalinku."
          ],
          steps: ["Ku rubuta burinku a jimla ɗaya.", "Ku nemi AI ya raba shi zuwa ƙananan matakai uku.", "Ku ba kowane mataki rana.", "Ku canja tsarin don ya dace da lokacinku da iyalinku."],
          words: [["Buri (goal)", "abin da kuke son kaiwa."], ["Wa'adi (deadline)", "ranar da kuke shirin gama wani mataki."]],
          slides: [
            { title: "Manyan buri suna buƙatar ƙananan matakai", bullets: ["\"Samun aiki mafi kyau\" ya yi girma sosai", "Ƙananan matakai suna sa ya zama na gaske"] },
            { title: "Mataki mai kyau", bullets: ["Za ku iya gama shi cikin mako ɗaya ko biyu", "Yana da rana", "Misali: kiran ɗakin karatu ranar Talata"] },
            { title: "Ku bari AI ya taimaka, sannan ku gyara", bullets: ["Ku faɗa masa burinku da lokacinku", "Ku canja tsarin don ya dace da rayuwarku"] }
          ],
          tryIt: "Ku rubuta burin aikinku a jimla ɗaya. Ku nemi mataimakin AI ya raba shi zuwa matakai uku na wata mai zuwa, sannan ku ƙara rana ga kowane mataki.",
          youCanNow: "mayar da burin aiki ƙananan matakai uku masu rana.",
          quickCheck: [
            { objective: "O5", q: "Wane ne ƙaramin mataki da za ku iya gamawa cikin mako ɗaya ko biyu?", options: ["Magana da mataimakin likita ɗaya kafin ranar 15", "Zama nas", "Samun aiki mafi kyau", "Canja sana'a wata rana"], answer: 0, why: "Ƙaramin mataki yana da takamaiman abu, ana iya yinsa nan ba da jimawa ba, kuma yana da rana." },
            { objective: "O5", q: "Tsarin AI ya ce ku yi karatu awa 10 a mako, amma kuna da awa 3. Me za ku yi?", options: ["Ku bi shi duk da haka", "Ku canja tsarin don ya dace da lokacinku", "Ku haƙura", "Ku nemi AI ya yi karatu a madadinku"], answer: 1, why: "Ku canja tsarin don ya dace da rayuwarku, iyalinku da jadawalinku." }
          ]
        },
        {
          objectives: ["O6","O5"],
          title: "Tsarinku, da kiyaye kanku yayin da kuke nema",
          minutes: 5,
          goal: "Kammala tsarinku mai shafi ɗaya da gane tayin aiki da horo na bogi.",
          text: [
            "Ku haɗa komai a shafi ɗaya: aikin, albashinsa da makomarsa daga bls.gov/ooh, ƙwarewa biyu da kuke buƙata, wurare biyu na koyo, da matakai uku masu rana. Ku ajiye shi a wayarku ko ku buga shi a ɗakin karatu.",
            "Ku yi hankali. 'Yan damfara suna saka ayyukan bogi da horo na bogi. Alamun gargaɗi: suna neman ku biya kuɗi don samun aikin, suna neman lambar bankinku ko ta Social Security kafin hira, suna alƙawarin albashi mai yawa don aiki kaɗan, ko suna gaggauta ku.",
            "Kada ku taɓa rubuta lambar Social Security ɗinku, bayanan bankinku ko kalmomin sirri a mataimakin AI. Ku tabbatar da kowane shirin horo da ɗakin karatunku, cibiyar aiki ko shafin hukuma na makarantar kafin ku biya ko ku sa hannu a kowane abu."
          ],
          steps: ["Ku rubuta aikin, albashi da makoma.", "Ku ƙara ƙwarewa biyu da wurare biyu na koyo.", "Ku ƙara matakanku uku masu rana.", "Ku duba kowane tayi don alamun zamba kafin ku raba wani abu."],
          words: [["Zamba (scam)", "dabarar satar kuɗi ko bayanai."]],
          slides: [
            { title: "Tsarinku mai shafi ɗaya", bullets: ["Aiki, albashi da makoma (daga bls.gov/ooh)", "Ƙwarewa biyu da wurare biyu na koyo", "Matakai uku masu rana"] },
            { title: "Alamun gargaɗin aikin bogi", bullets: ["Dole ku biya don samun aikin", "Suna neman lambar banki ko SSN kafin hira", "Albashi mai yawa don aiki kaɗan, ko gaggauta ku"] },
            { title: "Ku kiyaye kanku", bullets: ["Babu lambobin sirri a AI", "Ku tabbatar da horo a ɗakin karatu ko cibiyar aiki", "Ku duba kafin ku biya ko ku sa hannu"] }
          ],
          tryIt: "Aikin ƙarshe: ku rubuta tsarinku mai shafi ɗaya da aikin, albashi da makoma, ƙwarewa biyu, wurare biyu na koyo da matakai uku masu rana. Ku duba shi don kowane bayanin sirri kafin ku raba shi.",
          youCanNow: "yin tsari na gaske da aka tabbatar don aiki da ke ƙaruwa, da guje wa zambar aiki da aka saba gani.",
          quickCheck: [
            { objective: "O6", q: "Wace ce alamar gargaɗin aikin bogi?", options: ["Hira a ofishin kamfanin", "Tallar aiki a shafin kamfanin da kansa", "Gaggauta ku ku biya kafin a ɗauke ku aiki", "Aikin da American Job Center ɗinku ya jera"], answer: 2, why: "Masu ɗaukar aiki na gaske ba sa neman ku biya don samun aiki ko su gaggauta ku." },
            { objective: "O6", q: "Wata makarantar horo ta intanet tana neman biya yau don \"aiki da aka tabbatar\". Me za ku yi?", options: ["Ku biya yau don ku riƙe gurbinku", "Ku aika lambar bankinku", "Ku fara raba shi da abokai", "Ku tabbatar da shi a shafin hukuma na makarantar, ɗakin karatunku ko cibiyar aiki"], answer: 3, why: "Ku tabbatar da kowane shirin horo da majiyoyin amintattu kafin ku biya ko ku sa hannu." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Shirin mataki na gaba",
        questions: [
          { objective: "O4", q: "A ina kuke yawan samun azuzuwan kwamfuta kyauta?", options: ["Tallar da ke tasowa (pop-up)", "Saƙon tes daga baƙo", "Ɗakin karatu na jama'a", "Shagon katin kyauta (gift card)"], answer: 2, why: "Ɗakunan karatu na jama'a da yawa suna ba da azuzuwa kyauta da koyo ta intanet." },
          { objective: "O4", q: "Mene ne American Job Center?", options: ["Ofishi a yankinku da ke taimakawa da aiki da horo", "Shago", "Banki", "Manhajar kafofin sada zumunta"], answer: 0, why: "Ana gudanar da American Job Centers tare da Ma'aikatar Ƙwadago ta Amurka don taimaka wa masu neman aiki." },
          { objective: "O5", q: "Wane ne ƙaramin mataki mai kyau?", options: ["\"Zama mai arziki\"", "\"Koyon abubuwa wata rana\"", "\"Samun kowane aiki\"", "\"Kiran ɗakin karatu ranar Talata don rajistar ajin kwamfuta\""], answer: 3, why: "Ƙarami ne, a sarari yake kuma yana da rana." },
          { objective: "O6", q: "Tallar aiki tana neman ku biya $100 don a ɗauke ku. Wannan:", options: ["Abu ne na yau da kullum", "Alamar gargaɗin zamba ce", "Kyakkyawar dama ce", "Dokar gwamnati ce"], answer: 1, why: "Masu ɗaukar aiki na gaske ba sa karɓar kuɗi daga gare ku don ba ku aiki." },
          { objective: "O6", q: "AI ya ba da shawarar wani shirin horo. Kafin ku biya, ya kamata ku:", options: ["Tabbatar da shi a shafin hukuma na makarantar, ɗakin karatunku ko cibiyar aiki", "Biya nan take", "Ba AI lambar bankinku", "Ƙyale duk horo"], answer: 0, why: "Ku tabbatar da kowane shiri da majiya amintacciya kafin ku biya." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI da Damarmakin Gaba",
    questions: [
      { objective: "O1", q: "Mafi kyawun bayanin AI shi ne:", options: ["Wani nau'in waya", "Shirin kwamfuta da ke yin ayyukan da yawanci sai mutum", "Ofishin gwamnati", "Sunan matsayin aiki"], answer: 1, why: "AI shiri ne da ke rubutu, rarrabawa, amsawa ko gane tsari." },
      { objective: "O1", q: "Wanne ne misalin AI a wurin aiki?", options: ["Chatbot da ke amsa tambayoyi masu sauƙi na abokan ciniki", "Na'urar ɗaure takardu (stapler)", "Kalandar takarda", "Tsintsiya"], answer: 0, why: "Chatbot AI ne da ke amsa tambayoyi masu sauƙi." },
      { objective: "O1", q: "Wace ɗawainiyar aiki ce mutum har yanzu ya fi iyawa?", options: ["Ƙirga abubuwa iri ɗaya akai-akai", "Rarraba imel bisa rana", "Ta'aziyyar majiyyaci da ke cikin damuwa", "Kwafa lambobi zuwa tebur"], answer: 2, why: "Kula da mutane yana buƙatar ɗan adam." },
      { objective: "O2", q: "Mene ne Occupational Outlook Handbook?", options: ["Jagoran gwamnatin Amurka kyauta game da ayyuka, albashi da horo", "Mujalla da ake biya", "Shafin kafofin sada zumunta", "Manhajar banki"], answer: 0, why: "Hukumar Ƙididdigar Ma'aikata ce ke gudanar da shi a bls.gov/ooh." },
      { objective: "O2", q: "\"Makomar aiki\" (job outlook) tana faɗa muku:", options: ["Tufafin da ake sawa a aikin", "Yadda ake sa ran yawan ayyuka zai ƙaru ko ya ragu da sauri", "Sunan shugaba", "Adireshin aikin"], answer: 1, why: "Makoma tana magana game da ƙaruwar da ake sa rai." },
      { objective: "O2", q: "Me yasa za ku karanta shafin na yanzu maimakon amincewa da tsohuwar lamba?", options: ["Tsofaffin lambobi koyaushe daidai suke", "Shafuka ba sa canjawa", "Ana sabunta lambobin albashi da makoma a kan lokaci", "Ba shi da muhimmanci"], answer: 2, why: "Lambobin ayyuka suna canjawa, don haka ku karanta sabon shafin hukuma." },
      { objective: "O3", q: "Wane prompt ne zai kawo amsa mafi amfani game da aiki?", options: ["\"aiki\"", "\"taimako\"", "\"abubuwa game da aiki\"", "\"Ina son gyara abubuwa kuma na yi shekaru 2 a aikin gyare-gyare. Ka bayyana abin da ma'aikacin HVAC (na'urar sanyaya da dumama ɗaki) yake yi, da kalmomi masu sauƙi.\""], answer: 3, why: "Yana ba da aikin, ƙwarewarku da tsarin amsa." },
      { objective: "O3", q: "AI ya ba ku lambar albashin wani aiki. Ya kamata ku:", options: ["Tabbatar da ita a bls.gov/ooh", "Yarda da ita gaba ɗaya", "Saka ta a intanet", "Ƙyale duk wani albashi"], answer: 0, why: "AI yana iya yin kuskure; ku tabbatar da albashi a shafin hukuma." },
      { objective: "O3", q: "Mene ne lasisi?", options: ["Manhajar waya", "Izinin hukuma daga jiha don yin wasu ayyuka", "Tallar aiki", "Wani nau'in takardar bayanin aiki (CV)"], answer: 1, why: "Wasu ayyuka suna buƙatar lasisin jiha." },
      { objective: "O4", q: "Wane ne wuri mai araha don samun certificate na aiki?", options: ["Tallar da ke tasowa (pop-up)", "Kwalejin al'umma", "Baƙo a intanet", "Shagon katin kyauta"], answer: 1, why: "Kwalejojin al'umma suna ba da certificate masu araha, kuma tallafi yana iya taimakawa." },
      { objective: "O4", q: "Ta yaya za ku nemo American Job Center?", options: ["Ku tambayi ɗan damfara", "Ku yi tsammani", "Ku yi amfani da CareerOneStop finder ko ku kira 1-877-US-2JOBS", "Ta wasiƙa kaɗai"], answer: 2, why: "Waɗannan su ne hanyoyin hukuma da Ma'aikatar Ƙwadago ta jera." },
      { objective: "O4", q: "Wasu hidimomin American Job Center suna da:", options: ["Sharuɗɗan cancanta, don haka ku tambayi abin da kuka cancanta", "Kalmar sirri ta ɓoye", "Katin kyauta da ake buƙata", "Babu ma'aikata kwata-kwata"], answer: 0, why: "Ma'aikatar Ƙwadago ta ce wasu hidimomi suna da sharuɗɗan cancanta." },
      { objective: "O5", q: "Me yasa za a raba babban buri zuwa ƙananan matakai?", options: ["Yana sa burin ya ɓace", "Yana sa burin ya zama na gaske kuma mai yiwuwa", "Doka ce ta buƙace shi", "Yana kashe kuɗi"], answer: 1, why: "Ƙananan matakai masu rana sun fi sauƙin farawa da gamawa." },
      { objective: "O5", q: "Mataki mai kyau ya haɗa da:", options: ["Babu rana", "Abin da za ku iya gamawa cikin mako ɗaya ko biyu, mai rana", "Aikin shekaru goma", "Fata kawai"], answer: 1, why: "Ƙananan matakai masu rana suna sa ku ci gaba." },
      { objective: "O5", q: "Bayan AI ya yi muku tsari, ya kamata ku:", options: ["Bi shi daidai ko ta yaya", "Goge shi", "Canja shi don ya dace da lokacinku da iyalinku", "Raba lambar bankinku"], answer: 2, why: "Ku ne kuka fi sanin rayuwarku; ku gyara tsarin." },
      { objective: "O5", q: "Tsarinku mai shafi ɗaya ya kamata ya haɗa da:", options: ["Kalmomin sirrinku", "Lambar bankinku", "Lambar Social Security ɗinku", "Aikin, albashinsa da makomarsa, ƙwarewa, wuraren koyo da matakai masu rana"], answer: 3, why: "Waɗannan sassa suna sa tsarin ya cika kuma ya zama lafiya." },
      { objective: "O6", q: "Tayin aiki yana neman lambar Social Security ɗinku kafin kowace hira. Wannan:", options: ["Alamar gargaɗi ce", "Abu ne na yau da kullum a kowane aiki", "Lada ce", "AI ne ya buƙace shi"], answer: 0, why: "Neman lambobin sirri da wuri alamar zamba ce." },
      { objective: "O6", q: "Wanne ne kada ku taɓa rubutawa mataimakin AI?", options: ["\"Ka sauƙaƙa shi\"", "\"Waɗanne ƙwarewa mai dafa abinci yake buƙata?\"", "Lambar asusun bankinku", "\"Ka ba ni matakai uku\""], answer: 2, why: "Bayanan banki bayanai ne na sirri." },
      { objective: "O6", q: "\"Albashi mai yawa don aiki kaɗan, fara yau!\" mafi yiwuwa:", options: ["Aikin gwamnati ne", "Alamar gargaɗin zamba ce", "Ajin ɗakin karatu ne", "Certificate ne"], answer: 1, why: "Alƙawuran da suka yi kyau fiye da gaskiya alamar zamba ce da aka saba gani." },
      { objective: "O6", q: "Kafin ku biya kuɗin shirin horo, ku tabbatar da shi da:", options: ["Tallar da ke tasowa (pop-up)", "Mutumin da ke sayar da shi kaɗai", "Babu kowa", "Shafin hukuma na makarantar, ɗakin karatunku ko cibiyar aiki"], answer: 3, why: "Majiyoyi amintattu masu zaman kansu suna taimaka muku guje wa shirye-shiryen bogi." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 2, 3, 4, 7, 10, 12, 15, 16, 18] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Bayanan aiki", objective: "O2", notYet: "Babu albashi ko makoma, ko ba daga bls.gov/ooh suka fito ba.", meets: "Aikin, mene ne shi, albashinsa da makomarsa, an tabbatar a shafin bls.gov/ooh na yanzu.", exceeds: "Yana kuma jera horon da aikin ke buƙata." },
      { name: "Ƙwarewa", objective: "O3", notYet: "Babu ƙwarewa, ko ƙwarewar da ba ta dace da aikin ba.", meets: "Ƙwarewa biyu da aikin ke buƙata.", exceeds: "Yana nuna wace ƙwarewa mai koyo ya riga yake da ita daga aikin da ya yi a baya." },
      { name: "Wuraren koyo", objective: "O4", notYet: "Ƙasa da wurare biyu, ko babu bayanan tuntuɓa.", meets: "Wurare biyu kyauta ko masu araha da suna, waya da lokutan aiki.", exceeds: "Yana nuna abin da kowane wuri ke bayarwa da duk wani sharaɗin cancanta da za a tambaya." },
      { name: "Matakai uku masu rana", objective: "O5", notYet: "Matakan ba su da sarari ko ba su da rana.", meets: "Ƙananan matakai uku na wata mai zuwa, kowanne da rana.", exceeds: "Sun dace da ainihin lokacin mai koyo da jadawalin iyalinsa." },
      { name: "Lafiya a raba", objective: "O6", notYet: "Tsarin yana da lambar sirri, ko ba a duba wani tayin horo ba.", meets: "Babu lambobin sirri, kuma an duba tayi don alamun gargaɗi.", exceeds: "Zai iya ambaton alamun gargaɗin da ya nema." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka kammala aƙalla mataki ɗaya na tsarinsu cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka yi rajistar horo kyauta ko mai araha cikin kwanaki 90",
      "Masu koyo da suka sami aiki ko ƙarin matsayi a fannin da suka zaɓa cikin watanni 12"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Wayar zamani mai intanet, ko kwamfutar ɗakin karatu",
      "Mataimakin AI kyauta: Microsoft Copilot, ChatGPT ko Google Gemini",
      "Occupational Outlook Handbook a bls.gov/ooh",
      "Takarda ko rubutu a waya don tsarin mai shafi ɗaya",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku buɗe bls.gov/ooh tare a kan na'urar majigi (projector) ku bi aiki ɗaya mataki-mataki kafin masu koyo su zaɓi nasu.",
      "Ku kawo jerin ɗakunan karatu, kwalejojin al'umma da American Job Center mafi kusa a yankinku.",
      "Ku tunatar da masu koyo su tabbatar da bayanan albashi da lasisi a shafukan hukuma, ba daga AI kaɗai ba.",
      "Ku sake duba alamun gargaɗin ayyuka da horo na bogi; kada ku taɓa neman masu koyo su raba lambobin sirri.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
