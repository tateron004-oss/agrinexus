"use strict";

// Koach Learn course, Hausa (ha) translation of non-profits/nonprofit-intro-ai.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "nonprofit-intro-ai-ha",
  lang: "ha",
  translationOf: "nonprofit-intro-ai",
  category: "Non Profits",
  name: "Gabatarwa ga AI don Ƙungiyoyin Sa-kai",
  skills: "Bayyana AI ga ƙungiyarku, Rubuta prompt a sarari don ayyukan ƙungiya, Inganta daftari, Tabbatar da bayanai, Kiyaye sirrin masu bayarwa da waɗanda ake yi wa hidima",
  outcome: "amfani da mataimakin AI kyauta don rubuta daftarin wani rubutu na gaske na ƙungiyar sa-kai, kamar saƙon godiya ga masu aikin sa-kai ko sanarwar wani taro: yin tambaya a sarari, inganta daftarin, tabbatar da kowane bayani, da kiyaye bayanan masu bayarwa da waɗanda ake yi wa hidima daga cikinsa.",
  about: [
    "Wannan kwas ɗin na shugabanni, ma'aikata da masu aikin sa-kai ne a ƙungiyoyin sa-kai da na addini, waɗanda suka ji labarin AI amma ba su yi amfani da shi sosai ba, ko waɗanda suke son yin amfani da shi lafiya.",
    "Za ku koyi mene ne mataimakin AI, yadda ake buɗe shi kyauta, yadda ake neman rubuce-rubucen da ƙungiyarku ke buƙata kowane mako, yadda ake inganta daftarin da tabbatar da shi, da yadda ake kare mutanen da kuke yi wa hidima.",
    "Kowane darasi yana ɗaukar kusan minti biyar. Ku karanta darasin, ku kalli hotunan bayani (slides), sannan ku yi aikin \"Gwada yanzu\". Akwai ɗan gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku yi amfani da mataimakin AI kyauta don rubuta daftarin saƙon godiya ga masu aikin sa-kai da suka taimaka a wani taro na kwanan nan (tara abinci, ranar tsaftace gari ko liyafar coci). Ku yi amfani da prompt mai sassa uku, ku nemi gyara biyu, ku tabbatar da kowane bayani da kowace rana a cikin bayananku na ƙungiya, ku tabbata babu bayanan sirri na wani mai aikin sa-kai ko mai bayarwa a cikin prompt ɗin, sannan ku gyara saƙon ƙarshe don ya yi kama da muryar ƙungiyarku.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Shugabanni, ma'aikata da masu aikin sa-kai a ƙungiyoyin sa-kai da na addini, sau da yawa a ƙananan ƙungiyoyi da coci-coci, waɗanda suka ji labarin AI amma ba su yi amfani da shi sosai ba, ko waɗanda suke son yin amfani da shi lafiya.",
    startingPoint: "Suna amfani da imel, waya da kwamfuta a aikin yau da kullum, kuma suna rubuta saƙonnin godiya, sanarwa da wasiƙun labarai (newsletter) da hannu. Ba sa amfani da mataimakan AI sosai, ko kwata-kwata.",
    gap: "Ƙananan ƙungiyoyi suna kashe sa'o'i masu yawa wajen rubuce-rubucen da mataimakin AI zai iya rubuta daftarinsu cikin mintuna, amma amfani ba tare da kulawa ba yana iya yaɗa lambobin ƙarya ko bayyana bayanan masu bayarwa, masu aikin sa-kai da waɗanda ake yi wa hidima. Masu koyo suna buƙatar hanya mai sauƙi kuma amintacciya ta amfani da AI da ke rage lokaci kuma ke kiyaye amana.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli",
      "Na'urori: waya, kwamfutar ofis ko kwamfutar tafi-da-gidanka (laptop) ta ofishin coci da ake rabawa",
      "Lokaci: masu aikin sa-kai da ma'aikata ba su da lokaci mai yawa, don haka kowane darasi yana kusan minti 5",
      "Sirri: babu bayanan sirri na masu bayarwa, masu aikin sa-kai ko waɗanda ake yi wa hidima a cikin kayan AI; ku bi dokar sirri ta ƙungiya",
      "Ku yi amfani da kayan AI da ƙungiya ta amince da su kawai don bayanan aiki"
    ],
    prerequisites: "Babu."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku jerin ayyukan ƙungiyar sa-kai", action: "gane waɗanne ayyuka mataimakin AI zai iya taimakawa da su, da waɗanda ke buƙatar mutum ko majiya ta hukuma", standard: "kuna samun aƙalla 4 cikin 5 daidai" },
    { id: "O2", condition: "Ta amfani da waya ko kwamfuta", action: "buɗe mataimakin AI kyauta ko wanda aka amince da shi daga shafinsa ko manhajarsa na hukuma, sannan fita daga asusu (sign out) idan kun gama", standard: "ba tare da taimakon kowa ba" },
    { id: "O3", condition: "Idan kuna da wani rubutu na gaske na ƙungiyar sa-kai da za ku yi", action: "rubuta prompt mai sassa uku da ke faɗin abin da kuke buƙata, halin da ake ciki da tsarin amsar", standard: "da madadi (placeholder) a maimakon bayanan sirri" },
    { id: "O4", condition: "Idan daftarin farko bai dace ba", action: "neman canje-canje da tambayoyin biyo baya, ɗaya bayan ɗaya", standard: "har ya dace da muryar ƙungiyarku cikin ƙoƙari uku ko ƙasa da haka" },
    { id: "O5", condition: "Idan daftarin AI yana da lambobi, ranaku ko wasu iƙirari", action: "tabbatar da kowane bayani a cikin bayananku ko a majiyar hukuma", standard: "kafin ya kai ga masu bayarwa, masu aikin sa-kai ko jama'a" },
    { id: "O6", condition: "Idan kuna amfani da AI don aiki game da masu bayarwa, masu aikin sa-kai ko waɗanda ake yi wa hidima", action: "kiyaye bayanan sirri daga ciki ta amfani da madadi", standard: "ba tare da bayyana sunaye tare da gudummawa, adireshi, bayanan shari'ar mutum ko bayanan lafiya ko na shige da fice ba" }
  ],
  chapters: [
    {
      name: "Babi na 1: Abin da AI zai iya yi wa ƙungiyar sa-kai",
      lessons: [
        {
          objectives: ["O1"],
          title: "Mene ne mataimakin AI, da abin da ba shi ba",
          minutes: 4,
          goal: "Bayyana wa abokin aiki ko mai aikin sa-kai abin da mataimakin AI zai iya yi da wanda ba zai iya yi ba ga ƙungiyarku.",
          text: [
            "Mataimakin AI shiri ne na kwamfuta da kuke hira da shi da kalmomi na yau da kullum. Kuna rubuta buƙata, shi kuma yana rubuta amsa cikin daƙiƙoƙi. Sanannu masu sigar kyauta sun haɗa da ChatGPT, Microsoft Copilot da Google Gemini.",
            "Ga ƙungiyar sa-kai, yana da kyau wajen rubuta daftarin farko: saƙonnin godiya, labaran wasiƙar labarai, saƙonnin neman masu aikin sa-kai, ajandar taro, rubuce-rubuce a kafofin sada zumunta, da mayar da dogayen rahotanni zuwa gajerun taƙaitawa.",
            "Shi ba ma'aikaci ba ne, ba lauya ba ne, ba akanta ba ne, kuma ba jami'in tallafi (grant) ba ne. Bai san masu bayarwa naku, shirye-shiryenku ko al'ummarku ba, kuma yana iya yin kuskure ko da yana magana kamar ya tabbata. Koyaushe mutum a ƙungiyarku ne yake dubawa kuma yake yanke shawara."
          ],
          words: [["AI", "gajartawar artificial intelligence (basirar na'ura): shirye-shiryen kwamfuta da ke yin ayyukan da yawanci sai mutum, kamar rubutu ko taƙaitawa."], ["Mataimakin AI", "shirin AI da kuke hira da shi ta rubutu ko magana."], ["Daftarin farko", "sigar farawa da mutum zai duba sannan ya inganta."]],
          slides: [
            { title: "Mataimakin AI shi ne...", bullets: ["Shirin kwamfuta da kuke hira da shi", "Kuna tambaya da kalmomin yau da kullum", "Yana rubuta daftari cikin daƙiƙoƙi"] },
            { title: "Yana da kyau don daftarin farko na ƙungiya", bullets: ["Saƙonnin godiya da wasiƙun labarai", "Saƙonnin neman masu aikin sa-kai da ajandar taro", "Gajerun taƙaitawar dogayen rahotanni"] },
            { title: "Shi BA", bullets: ["Lauya, akanta ko jami'in tallafi ba ne", "Koyaushe daidai yake ba, ko da yana magana kamar ya tabbata", "Mai yanke shawara ba ne: ƙungiyarku ce"] }
          ],
          tryIt: "Ku rubuta abubuwa uku da ƙungiyarku ke rubutawa kowane wata (misali tunatarwa ga masu aikin sa-kai, godiya ga mai bayarwa da wasiƙar labarai). Ku zagaya wanda ya fi ɗaukar lokaci. Wannan shi ne aikinku na farko da AI.",
          youCanNow: "faɗin mene ne mataimakin AI, ambaci ayyuka uku na ƙungiyar sa-kai da zai iya taimakawa da su, da faɗin dalilin da yasa har yanzu mutum yake duba aikinsa.",
          quickCheck: [
            { objective: "O1", q: "Me mataimakin AI yake da kyau a kai ga ƙungiyar sa-kai?", options: ["Daftarin farko kamar saƙonnin godiya da labaran wasiƙar labarai", "Sanin masu bayarwa naku da kansu", "Yanke shawarwarin ƙarshe a madadin kwamitin gudanarwa", "Ba da shawarar shari'a da za ku dogara da ita"], answer: 0, why: "AI yana da kyau wajen daftarin farko; mutum a ƙungiyarku ne yake dubawa kuma yake yanke shawara." },
            { objective: "O1", q: "Wani mai aikin sa-kai ya ce: \"Mu bar AI ya zaɓi waɗanda za su sami kwalayen abinci na wannan wata.\" Me za ku ce?", options: ["Kyakkyawan tunani; AI ya san al'ummarmu", "A'a; AI zai iya rubuta daftari, amma mutane a ƙungiyarmu ne ke yanke shawara", "Sai dai idan AI yana magana kamar ya tabbata", "E, amma don sababbin iyalai kawai"], answer: 1, why: "AI bai san al'ummarku ba kuma yana iya yin kuskure; ƙungiyarku ce ke yanke shawara." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Buɗe mataimakin AI kyauta",
          minutes: 4,
          goal: "Buɗe mataimakin AI kyauta a waya ko kwamfuta kuma ku nemo inda ake rubutu.",
          text: [
            "Kuna iya amfani da mataimakin AI a wayar zamani ko a kowace kwamfuta mai intanet, har da kwamfutar ofis ko laptop na ofishin coci.",
            "A kwamfuta, ku buɗe burauzar intanet ku rubuta adireshin: chatgpt.com, copilot.microsoft.com ko gemini.google.com. A waya, ku saka manhajar hukuma daga shagon manhajoji, wadda ainihin kamfanin ya yi (OpenAI, Microsoft ko Google).",
            "Idan ƙungiyarku tana amfani da Microsoft 365 ko Google Workspace, ku tambayi mai kula da tsarin (administrator) wane kayan AI ne aka amince da shi. Asusun aiki yana iya samun ƙarin kariyar sirri da asusun kai ba shi da ita.",
            "A kwamfutar ofis da ake rabawa, kada ku bari burauzar ta ajiye kalmar sirrinku, kuma ku fita daga asusu idan kun gama."
          ],
          steps: ["Ku tambaya ko ƙungiyarku tana da kayan AI da aka amince da shi.", "Kwamfuta: ku rubuta adireshin shafin a burauzar. Waya: ku saka manhajar hukuma.", "Ku nemo akwatin saƙo kusa da ƙasan allo.", "A kwamfutar da ake rabawa, ku fita daga asusu ku rufe burauzar idan kun gama."],
          words: [["Burauzar intanet (web browser)", "shirin da kuke amfani da shi don ziyartar shafukan intanet, kamar Chrome, Edge ko Safari."], ["Mai kula da tsarin (administrator)", "mutumin da ke kula da asusun ƙungiyarku da saitunansu."]],
          slides: [
            { title: "Inda za ku yi amfani da shi", bullets: ["Kwamfutar ofis ko ta gida", "Manhajar waya daga shagon hukuma", "Kayan aikin da ƙungiyarku ta amince da shi"] },
            { title: "Adireshin shafuka", bullets: ["chatgpt.com", "copilot.microsoft.com", "gemini.google.com"] },
            { title: "Ku fara tambaya", bullets: ["Wane kayan AI ƙungiyarmu ta amince da shi?", "Asusun aiki yana iya kare bayanai fiye da haka"] },
            { title: "A kwamfutar da ake rabawa", bullets: ["Kada ku ajiye kalmar sirrinku", "Ku fita daga asusu ku rufe burauzar"] }
          ],
          tryIt: "Ku buɗe mataimakin AI kyauta ɗaya. Ku rubuta: Ina aikin sa-kai a wata ƙungiya kuma ina koyon amfani da AI. Waɗanne hanyoyi uku za ka iya taimaka mini a wannan makon? Ku karanta amsar.",
          youCanNow: "buɗe mataimakin AI kyauta, nemo inda ake rubutu, da tabbatar da wane kayan aiki ƙungiyarku ta amince da shi.",
          quickCheck: [
            { objective: "O2", q: "A ina ya kamata ku samo manhajar AI a waya?", options: ["Daga hanyar haɗi (link) a cikin tes daga baƙo", "Daga kowace manhaja mai suna mai kama da ita", "Daga shagon manhajoji, wadda ainihin kamfanin ya yi", "Daga tallar da ke tasowa (pop-up)"], answer: 2, why: "Ku saka manhajar hukuma da ainihin kamfanin ya yi, kamar OpenAI, Microsoft ko Google." },
            { objective: "O2", q: "Kun gama amfani da AI a laptop na ofishin coci. Me za ku yi?", options: ["Ku bar shi a buɗe don mutum na gaba", "Ku ajiye kalmar sirrinku a burauzar", "Ku kashe allon kawai", "Ku fita daga asusu ku rufe burauzar"], answer: 3, why: "A kwamfutar da ake rabawa, kada ku ajiye kalmar sirrinku, kuma ku fita daga asusu idan kun gama." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Neman rubutun ƙungiya da prompt mai sarari",
          minutes: 5,
          goal: "Rubuta prompt mai sassa uku da zai kawo daftari mai amfani tun farko.",
          text: [
            "Abin da kuke rubutawa ana kiransa prompt (umarni). Prompt mai kyau yana da sassa uku: abin da kuke buƙata, halin da ake ciki (ba tare da bayanan sirri ba), da yadda kuke son amsar.",
            "Misali: \"Ka rubuta gajeren imel na godiya ga masu aikin sa-kai 25 da suka taimaka a taron tara abinci na ranar Asabar. Mun yi wa iyalai 140 hidima. Ka yi amfani da sautin ƙauna, ƙasa da kalmomi 120, kuma ka ƙare da ranar taro na gaba: [rana].\"",
            "Prompt mai rauni kamar \"wasiƙar godiya\" yana sa mataimakin ya yi tsammani, don haka amsar ta zama gama-gari. Ku faɗa masa wanda zai karanta da sautin da ya dace da ƙungiyarku: na ƙauna, na hukuma, na farin ciki ko na addini."
          ],
          steps: ["Ku faɗi abin da kuke buƙata da wanda zai karanta.", "Ku ƙara halin da ake ciki: taro, lambobi, manufa. Babu sunaye ko bayanan sirri.", "Ku faɗi yadda kuke son sa: tsawo, sauti, tsari.", "Ku yi amfani da madadi kamar [rana] don duk abin da za ku cike da kanku."],
          words: [["Prompt (umarni)", "abin da kuke rubutawa ko faɗa wa mataimakin AI don neman wani abu."], ["Sauti (tone)", "yadda rubutu yake ji, kamar na ƙauna, na hukuma ko na farin ciki."], ["Madadi (placeholder)", "alama kamar [rana] da za ku canja da kanku daga baya."]],
          slides: [
            { title: "Sassa uku na prompt mai kyau", bullets: ["1. Abin da kuke buƙata da wanda zai karanta", "2. Halin da ake ciki, babu bayanan sirri", "3. Tsawo, sauti da tsari"] },
            { title: "Mai rauni da mai sarari", bullets: ["Mai rauni: \"wasiƙar godiya\"", "Mai sarari: imel na godiya ga masu aikin sa-kai 25 na tara abinci", "An yi wa iyalai 140 hidima, sautin ƙauna, ƙasa da kalmomi 120"] },
            { title: "Ku yi amfani da madadi", bullets: ["[rana], [suna], [adadi]", "Za ku cike su da kanku daga baya"] }
          ],
          tryIt: "Ku ɗauki aikin da kuka zagaya a Darasi na 1. Ku rubuta masa prompt mai sassa uku, da madadi don sunaye da ranaku, sannan ku aika. Ku ajiye amsar.",
          youCanNow: "rubuta prompt mai sarari mai sassa uku don aikin rubutu na ƙungiyar sa-kai.",
          quickCheck: [
            { objective: "O3", q: "Mene ne prompt?", options: ["Abin da kuke rubutawa mataimakin AI", "Amsar AI", "Kalmar sirrinku", "Fom ɗin neman tallafi"], answer: 0, why: "Abin da kuke rubutawa ana kiransa prompt." },
            { objective: "O3", q: "Kuna buƙatar takardar sanarwa (flyer) don liyafar coci. Wane prompt ne ya fi kyau?", options: ["\"takardar sanarwa\"", "\"Ka rubuta takardar sanarwa ta farin ciki don liyafar cocinmu a ranar [rana] ƙarfe 6 na yamma, kyauta ga iyalai, ƙasa da kalmomi 60.\"", "\"Ka yi wani abu mai kyau\"", "\"Liyafa\""], answer: 1, why: "Prompt mai kyau yana faɗin abin da kuke buƙata, halin da ake ciki da tsarin amsar." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Abin da AI zai iya yi wa ƙungiyar sa-kai",
        questions: [
          { objective: "O1", q: "Wane aiki ne ya dace da mataimakin AI a ƙungiyar sa-kai?", options: ["Rubuta daftarin imel na godiya ga masu aikin sa-kai", "Zaɓar iyalin da za ta sami abinci", "Sa hannu a kwangilar tallafi", "Amincewa da kasafin kuɗi"], answer: 0, why: "AI yana da kyau wajen daftarin farko; mutane ne ke yanke shawara kuma suke sa hannu." },
          { objective: "O1", q: "AI ya ba da amsa da ƙarfin gwiwa game da ranar ƙarshe ta neman tallafi. Me za ku yi?", options: ["Ku amince da ita", "Ku duba shafin hukuma na mai ba da tallafin", "Ku saka ta a kafofin sada zumunta", "Ku aika ta ga kwamitin gudanarwa a matsayin ta ƙarshe"], answer: 1, why: "AI yana iya yin kuskure ko da yana magana kamar ya tabbata; ku duba majiyar hukuma." },
          { objective: "O2", q: "Kafin ku yi amfani da AI da bayanan aiki, wa ya kamata ku tambaya?", options: ["Wani mai bayarwa", "Baƙo a intanet", "Mai kula da tsarin ƙungiyarku ko shugaba", "Babu kowa"], answer: 2, why: "Ƙungiyarku tana iya samun kayan aikin da aka amince da shi mai ƙarin kariyar sirri." },
          { objective: "O3", q: "Wane prompt ne ya fi sarari?", options: ["\"wasiƙa\"", "\"taimako da masu aikin sa-kai\"", "\"yi wasiƙar labarai\"", "\"Ka rubuta imel na godiya mai ƙauna na kalmomi 100 ga masu aikin sa-kai 25 na tara abinci da suka yi wa iyalai 140 hidima.\""], answer: 3, why: "Yana faɗin abin da ake buƙata, halin da ake ciki da tsarin amsar." },
          { objective: "O3", q: "Mene ne madadi (placeholder) a cikin prompt?", options: ["Alama kamar [rana] da za ku cike daga baya", "Kalmar sirri", "Cikakken sunan mai bayarwa", "Wani nau'in manhaja"], answer: 0, why: "Madadi yana kiyaye ainihin bayanai daga ciki kuma yana tunatar da ku abin da za ku cike." }
        ]
      }
    },
    {
      name: "Babi na 2: Amfani da AI lafiya da kyau",
      lessons: [
        {
          objectives: ["O4"],
          title: "Inganta daftarin",
          minutes: 4,
          goal: "Yi amfani da tambayoyin biyo baya don mayar da daftarin farko zuwa wanda ya dace da ƙungiyarku.",
          text: [
            "Amsar farko daftari ce. Mataimakin yana tuna hirar, don haka kuna iya neman ya canja abubuwa ɗaya bayan ɗaya.",
            "Tambayoyin biyo baya masu amfani: \"Ka gajarta shi.\" \"Ka sa ya fi jin ƙauna.\" \"Ka ƙara jimla ɗaya game da muhimmancin masu aikin sa-kai ga manufarmu.\" \"Ka rubuta shi a matakin karatun aji 6.\" \"Ka ba ni sigarsa a harshen Sifaniyanci.\"",
            "Sannan ku mai da shi naku. Ku ƙara ainihin sunaye da bayanai da kanku, bayan kun kwafo rubutun daga kayan AI, kuma ku karanta shi kamar ku ne mai aikin sa-kai ko mai bayarwa da zai karɓe shi."
          ],
          steps: ["Ku karanta daftarin farko.", "Ku zaɓi abu ɗaya da ya fi buƙatar canji.", "Ku nemi wannan canjin.", "Ku maimaita, sannan ku kwafo rubutun ku ƙara ainihin bayanai da kanku."],
          words: [["Tambayar biyo baya (follow-up)", "buƙata ta biyu da ke ginuwa kan amsar da kuka riga kuka samu."], ["Matakin karatu", "yadda rubutu yake da sauƙin karantawa; ƙaramin aji yana nufin ya fi sauƙi."]],
          slides: [
            { title: "Amsar farko daftari ce", bullets: ["Ku nemi canji ɗaya a lokaci ɗaya", "Yana tuna hira ɗaya"] },
            { title: "Tambayoyin biyo baya masu aiki", bullets: ["\"Ka gajarta shi.\"", "\"Ka sa ya fi jin ƙauna.\"", "\"Ka ƙara layi ɗaya game da manufarmu.\"", "\"Ka ba ni sigar Sifaniyanci.\""] },
            { title: "Ku mai da shi naku", bullets: ["Ku kwafo rubutun daga kayan AI", "Ku ƙara ainihin sunaye da bayanai da kanku", "Ku karanta shi kamar ku ne mai karɓa"] }
          ],
          tryIt: "Ku ɗauki daftarin da kuka ajiye daga Darasi na 3. Ku nemi canje-canje biyu, ɗaya bayan ɗaya. Sannan ku kwafi mafi kyawun sigar zuwa takarda (document) ku ƙara wani bayani na kanku ɗaya.",
          youCanNow: "inganta daftarin AI da tambayoyin biyo baya masu sarari, da kammala shi da muryar ƙungiyarku.",
          quickCheck: [
            { objective: "O4", q: "Me yasa kuke iya neman canje-canje ɗaya bayan ɗaya?", options: ["AI yana manta komai bayan kowane saƙo", "Canje-canje suna da kuɗi", "Mataimakin yana tuna hirar", "Canji ɗaya kawai ake yarda a rana"], answer: 2, why: "Mataimakin yana tuna hirar, don haka kuna iya neman canje-canje ɗaya bayan ɗaya." },
            { objective: "O4", q: "Daftarin yana da kyau amma yawancin masu karatunku masu jin Sifaniyanci ne. Me za ku nema?", options: ["\"Ka tsawaita shi.\"", "\"Ka ƙara bayanai.\"", "\"Ka yi amfani da manyan kalmomi.\"", "\"Ka ba ni sigarsa a harshen Sifaniyanci.\""], answer: 3, why: "Tambayar biyo baya tana iya neman sigar rubutun a wani harshe da al'ummarku ke ji." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Tabbatar da bayanai kafin ku aika",
          minutes: 5,
          goal: "Nemo kuma ku tabbatar da kowane bayani a daftarin AI kafin ya kai ga masu bayarwa, masu aikin sa-kai ko jama'a.",
          text: [
            "Mataimakan AI wani lokaci suna ƙirƙirar abubuwa: ranar da ba daidai ba, ƙididdiga da babu ita, ko dokar haraji da ta tsufa. Ana kiran wannan hallucination (hasashen ƙarya).",
            "Koyaushe ku tabbatar da lambobi, ranaku, sunaye, maganganun da aka ruwaito, ƙididdiga, bayanan haraji da na shari'a, da duk abin da ya shafi abin da gudummawa ke biya. Ku tabbatar da su a cikin bayananku, a majiyar hukuma (sau da yawa shafin .gov), ko wurin mutumin da ya sani.",
            "Kada ku taɓa barin AI ya ƙirƙiri lambobin tasiri. Idan daftarin ya ce \"mun yi wa iyalai 500 hidima\" amma bayananku sun ce 140, ku yi amfani da 140. Lambobi na gaskiya suna kiyaye amanar masu bayarwa."
          ],
          steps: ["Ku haskaka kowace lamba, rana, suna da iƙirari a daftarin.", "Ku tabbatar da kowanne a cikin bayananku ko a majiyar hukuma.", "Ku gyara ko ku cire duk abin da ba za ku iya tabbatarwa ba.", "Ku nemi mutum na biyu ya karanta duk abin da zai kai ga jama'a."],
          words: [["Hallucination (hasashen ƙarya)", "lokacin da AI ya rubuta abin da yake kama da gaskiya amma ƙirƙirarre ne."], ["Lambar tasiri", "ƙidayar abin da shirinku ya cimma, kamar iyalan da aka yi wa hidima."]],
          slides: [
            { title: "AI yana iya ƙirƙirar abubuwa", bullets: ["Ranaku da lambobi marasa daidai", "Ƙididdigar da babu ita", "Tsofaffin dokokin haraji ko na shari'a"] },
            { title: "Koyaushe ku tabbatar da", bullets: ["Lambobi, ranaku, sunaye, maganganun da aka ruwaito", "Bayanan haraji da na shari'a", "Abin da gudummawa ke biya"] },
            { title: "Lambobi na gaskiya", bullets: ["Ku yi amfani da bayananku", "Kada ku bar AI ya ƙirƙiri lambobin tasiri", "Mai karatu na biyu don rubutun jama'a"] }
          ],
          tryIt: "Ku tambayi mataimakin AI: \"Ka rubuta jimloli biyu game da buƙatar bankunan abinci a gundumata.\" Ku haskaka kowace lamba da ya bayar. Ku yi ƙoƙarin nemo kowacce a shafin hukuma. Ku cire duk wadda ba za ku iya tabbatarwa ba.",
          youCanNow: "gane bayanai a daftarin AI da tabbatar da su kafin ku aika.",
          quickCheck: [
            { objective: "O5", q: "Mene ne hallucination a AI?", options: ["Rubutun da yake kama da gaskiya amma ƙirƙirarre ne", "Kuskuren rubutun kalma", "Amsa mai jinkiri", "Amsa gajeriya sosai"], answer: 0, why: "AI wani lokaci yana ƙirƙirar rana, ƙididdiga ko doka; ana kiran wannan hallucination." },
            { objective: "O5", q: "Daftarin ya ce gudummawar $25 \"tana ciyar da iyali har wata ɗaya.\" Shirinku bai taɓa faɗin haka ba. Me za ku yi?", options: ["Ku bar shi; masu bayarwa suna son sa", "Ku cire shi ko ku maye gurbinsa da bayani daga bayananku", "Ku canja shi zuwa $20", "Ku tambayi AI ko gaskiya ne"], answer: 1, why: "Kada ku taɓa barin AI ya ƙirƙiri abin da gudummawa ke biya; ku duba bayananku." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kiyaye sirrin masu bayarwa, masu aikin sa-kai da waɗanda ake yi wa hidima",
          minutes: 5,
          goal: "Yi amfani da AI ba tare da saka bayanan sirri na masu bayarwa, masu aikin sa-kai ko mutanen da kuke yi wa hidima a ciki ba.",
          text: [
            "Mutane sun amince da ƙungiyarku da bayanansu. Kada ku liƙa waɗannan a kayan AI: sunayen masu bayarwa tare da yawan gudummawarsu, adireshin gida, lambobin waya, bayanan banki ko kati, bayanan shari'ar mutanen da kuke taimakawa (case notes), bayanan lafiya, matsayin shige da fice, ko bayanan yara.",
            "Har yanzu kuna iya samun taimako. Ku bayyana halin da ake ciki a gama-gari kuma ku yi amfani da madadi: \"Ka rubuta godiya ga [sunan mai bayarwa] don gudummawar [adadi] ga shirinmu na matasa.\" Ku cike ainihin bayanan bayan kun kwafo daftarin.",
            "Ku bi dokar sirri ta ƙungiyarku, kuma ku tambayi shugaba idan ba ku da tabbas. Idan kuna shakka, ku bar shi waje."
          ],
          steps: ["Kafin ku aika prompt, ku karanta shi don neman sunaye da bayanan sirri.", "Ku maye gurbin kowanne da madadi.", "Ku ƙara ainihin bayanai ne kawai bayan kun kwafo daftarin daga kayan AI.", "Ku bi dokar sirri ta ƙungiyarku."],
          words: [["Bayanan sirri", "bayanan da za su iya bayyana ko wane ne mutum ko su cutar da shi idan aka raba su, kamar adireshi ko yawan gudummawa."], ["Dokar sirri (privacy policy)", "dokokin ƙungiyarku a rubuce kan yadda ake kula da bayanan mutane."]],
          slides: [
            { title: "Kada ku taɓa liƙawa a AI", bullets: ["Sunayen masu bayarwa tare da yawan gudummawa", "Adireshi, lambobin waya, bayanan banki", "Bayanan shari'ar mutum, lafiya ko shige da fice"] },
            { title: "Ku yi amfani da madadi a maimakon haka", bullets: ["\"Ka gode wa [sunan mai bayarwa] don [adadi]\"", "Ku cike ainihin bayanai bayan kun kwafo"] },
            { title: "Idan kuna shakka", bullets: ["Ku bar shi waje", "Ku bi dokar sirrinku", "Ku tambayi shugaba"] }
          ],
          tryIt: "Aikin ƙarshe: ku rubuta daftarin saƙon godiya ga masu aikin sa-kai na wani taro na kwanan nan. Ku yi amfani da prompt mai sassa uku da madadi, ku nemi gyara biyu, ku tabbatar da kowane bayani a cikin bayananku, sannan ku gyara shi don ya yi kama da ƙungiyarku.",
          youCanNow: "amfani da AI don rubutun ƙungiyar sa-kai na gaske yayin da kuke kiyaye sirrin mutanen da kuke yi wa hidima.",
          quickCheck: [
            { objective: "O6", q: "Wanne ne lafiya a saka a prompt na AI?", options: ["Sunan mai bayarwa da yawan gudummawarsa", "Bayanan shari'ar wani da kuke taimakawa", "\"Ka gode wa [sunan mai bayarwa] don gudummawar [adadi] ga shirinmu na matasa.\"", "Makarantar wani yaro da adireshinsa"], answer: 2, why: "Madadi yana bar ku samun taimako ba tare da raba bayanan sirri ba." },
            { objective: "O6", q: "Ba ku da tabbas ko labarin wani mai aikin sa-kai ya yi sirri sosai don liƙawa a AI. Me za ku yi?", options: ["Ku liƙa shi; AI yana da sirri", "Ku liƙa rabinsa kawai", "Ku fara raba shi a kafofin sada zumunta", "Ku bar shi waje ku tambayi shugaba"], answer: 3, why: "Idan kuna shakka, ku bar shi waje, kuma ku tambayi shugaba." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Amfani da AI lafiya da kyau",
        questions: [
          { objective: "O4", q: "Daftarin ya yi tsari na hukuma sosai ga masu aikin sa-kai na cocinku. Me za ku yi?", options: ["Ku aika shi duk da haka", "Ku tambaya: \"Ka sa ya fi jin ƙauna kuma ya fi kusanci\"", "Ku goge kayan AI ɗin", "Ku nemi sigar da ta fi tsawo"], answer: 1, why: "Tambayar biyo baya mai sarari tana neman ainihin canjin da kuke buƙata." },
          { objective: "O5", q: "Daftarin AI ya ce kun yi wa iyalai 500 hidima. Bayananku sun ce 140. Wanne za ku yi amfani da shi?", options: ["500, ya fi daɗin ji", "Ku bar lambar ba ta bayyana ba da gangan", "140, daga bayananku", "Ku nemi AI ya zaɓa"], answer: 2, why: "Lambobi na gaskiya daga bayananku suna kiyaye amanar masu bayarwa." },
          { objective: "O6", q: "Wanne a cikin waɗannan BA za ku liƙa a kayan AI ba?", options: ["\"Ka gajarta shi\"", "Sunan taron tara abincinku", "Kalmar \"na gode\"", "Bayanan shari'ar wani da kuke taimakawa"], answer: 3, why: "Bayanan shari'ar mutum bayanan sirri ne na mutanen da kuke yi wa hidima." },
          { objective: "O6", q: "Ta yaya za ku gode wa wani mai bayarwa ba tare da raba bayanansa da AI ba?", options: ["Ku yi amfani da madadi kamar [sunan mai bayarwa] da [adadi]", "Ku liƙa cikakken bayaninsa", "Ku yi amfani da bayanan bankinsa", "Ku ƙyale godiyar"], answer: 0, why: "Madadi yana kawo muku daftari; ku ƙara ainihin bayanai daga baya." },
          { objective: "O5", q: "Mene ne hallucination a AI?", options: ["Wani salon zane", "Rubutun da yake kama da gaskiya amma ƙirƙirarre ne", "Saitin sirri", "Intanet mai jinkiri"], answer: 1, why: "AI yana iya ƙirƙirar bayanan da suke kama da na gaske, don haka kuke tabbatar da su." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Gabatarwa ga AI don Ƙungiyoyin Sa-kai",
    questions: [
      { objective: "O1", q: "Mafi kyawun bayanin mataimakin AI shi ne:", options: ["Mai aikin sa-kai", "Rumbun bayanan tallafi", "Shirin kwamfuta da kuke hira da shi da kalmomin yau da kullum", "Banki"], answer: 2, why: "Shiri ne da kuke rubuta masa ko magana da shi wanda ke rubuta amsoshi." },
      { objective: "O1", q: "Wane aikin ƙungiyar sa-kai ne AI ya fi ƙwarewa a kai?", options: ["Zaɓar waɗanda za su sami taimako", "Sa hannu a kwangiloli", "Amincewa da biyan albashi", "Rubuta daftarin farko na wasiƙar labarai"], answer: 3, why: "Daftarin farko ƙarfinsa ne; yanke shawara ya rage ga mutane." },
      { objective: "O1", q: "Wane ne ke yanke shawarar ƙarshe idan ƙungiyarku tana amfani da AI?", options: ["Mutane a ƙungiyarku", "AI", "Kamfanin manhajar", "Masu bayarwa"], answer: 0, why: "Koyaushe mutum ne ke dubawa kuma ke yanke shawara." },
      { objective: "O2", q: "Wanne ne adireshin shafin mataimakin AI kyauta?", options: ["donate-now.win", "gemini.google.com", "freegrants.xyz", "babu ɗaya daga cikinsu"], answer: 1, why: "gemini.google.com shi ne adireshin hukuma na Google don Gemini." },
      { objective: "O2", q: "Me yasa za ku tambayi wane kayan AI ne ƙungiyarku ta amince da shi?", options: ["Don samun rangwamen kofi", "Domin AI haramun ne", "Kayan aikin da aka amince da su na iya kare bayanai fiye da haka", "Ba shi da muhimmanci"], answer: 2, why: "Asusun aiki na iya zuwa da ƙarin kariyar sirri da dokoki." },
      { objective: "O2", q: "A kwamfutar ofis da ake rabawa, bayan amfani da AI ya kamata ku:", options: ["Ajiye kalmar sirrinku", "Bar ta a buɗe", "Rubuta kalmar sirrinku a takarda", "Fita daga asusu ku rufe burauzar"], answer: 3, why: "Fita daga asusu yana kare asusunku." },
      { objective: "O3", q: "Prompt mai kyau ya haɗa da:", options: ["Abin da kuke buƙata, halin da ake ciki da tsarin amsar", "Kalma ɗaya", "Bayanan bankin mai bayarwa", "Kalmar sirrinku"], answer: 0, why: "Waɗannan sassa uku suna kawo daftari mai amfani." },
      { objective: "O3", q: "Wane prompt ne zai kawo mafi kyawun tunatarwa ga masu aikin sa-kai?", options: ["\"tunatarwa\"", "\"Ka rubuta tes mai fara'a na kalmomi 80 da ke tunatar da masu aikin sa-kai tsaftace wurin shaƙatawa na ranar Asabar ƙarfe 9 na safe, kuma su zo da safar hannu.\"", "\"masu aikin sa-kai\"", "\"taimako\""], answer: 1, why: "Yana ba da buƙata, halin da ake ciki da tsari." },
      { objective: "O3", q: "Me [rana] a cikin prompt yake nufi?", options: ["Lambar sirri", "Ranar haihuwar mai bayarwa", "Madadi da za ku cike daga baya", "Kuskure"], answer: 2, why: "Madadi yana nuna bayanan da za ku ƙara da kanku." },
      { objective: "O4", q: "Daftarin farko ya yi tsawo sosai. Mataki mafi kyau na gaba shi ne:", options: ["Kafa sabuwar ƙungiya", "Aika shi duk da haka", "Ƙara wasu kalmomi", "Tambaya: \"Ka gajarta shi\""], answer: 3, why: "Tambayar biyo baya tana neman canjin." },
      { objective: "O4", q: "Yaushe ya kamata ku ƙara ainihin sunayen masu bayarwa a saƙon godiya?", options: ["Bayan kun kwafo daftarin daga kayan AI", "A cikin prompt na farko", "Kada ku taɓa gode wa masu bayarwa", "A cikin hirar AI kawai"], answer: 0, why: "Ƙara su a wajen kayan AI yana kiyaye sirrinsu." },
      { objective: "O4", q: "Wace tambayar biyo baya za ta iya taimaka muku isa ga ƙarin mutane a al'ummarku?", options: ["\"Ka ƙara kalmar sirrina.\"", "\"Ka ba ni sigar Sifaniyanci.\"", "\"Ka ƙirƙiri wata ƙididdiga.\"", "\"Ka goge hirar.\""], answer: 1, why: "Sigar da aka fassara tana isa ga ƙarin masu karatu; amma mai jin harshen sosai ya kamata ya duba ta." },
      { objective: "O5", q: "Me ya kamata ku tabbatar KOYAUSHE a daftarin AI?", options: ["Kalmar gaisuwa", "Salon rubutun haruffa (font)", "Lambobi, ranaku da iƙirari", "Babu komai"], answer: 2, why: "Lambobi, ranaku da iƙirari suna iya zama ƙirƙirarru." },
      { objective: "O5", q: "A ina za ku tabbatar da bayanin haraji ko na shari'a?", options: ["Wata hirar AI", "Sharhi a kafofin sada zumunta", "Ku yi tsammani", "Majiyar hukuma, sau da yawa shafin .gov, ko ƙwararre"], answer: 3, why: "Majiyoyin hukuma da ƙwararru amintattu ne." },
      { objective: "O5", q: "Me yasa dole lambobin tasiri su fito daga bayananku?", options: ["Lambobi na gaskiya suna kiyaye amanar masu bayarwa", "Lambobin AI koyaushe ƙanana ne", "Masu bayarwa ba sa karanta su", "Ya fi sauri"], answer: 0, why: "Lambobin ƙarya suna ruɗar masu bayarwa kuma suna lalata amana." },
      { objective: "O5", q: "Wa ya kamata ya karanta duk abin da zai kai ga jama'a?", options: ["Babu kowa", "Mutum na biyu a ƙungiyarku", "AI kawai", "Wani baƙo kawai"], answer: 1, why: "Mai karatu na biyu yana kama kurakurai." },
      { objective: "O6", q: "Wanne ne bayanin sirri da ya kamata ku kiyaye daga AI?", options: ["Sunan babban taron shekara-shekara naku", "Kalmar \"manufa\"", "Adireshin gidan wani mai aikin sa-kai", "Adireshin shafinku na jama'a"], answer: 2, why: "Adireshin gida bayanin sirri ne na mutum." },
      { objective: "O6", q: "Ba ku da tabbas ko wani abu ya yi sirri sosai ga AI. Ya kamata ku:", options: ["Liƙa shi duk da haka", "Saka shi a intanet", "Aika shi ta imel ga kamfanin AI", "Bar shi waje ku tambayi shugaba"], answer: 3, why: "Idan kuna shakka, ku bar shi waje." },
      { objective: "O6", q: "Waɗanne dokoki a rubuce ne ke jagorantar yadda ƙungiyarku ke kula da bayanan mutane?", options: ["Dokar sirri", "Jerin abinci", "Odar rigunan masu aikin sa-kai", "Taswirar wurin ajiye motoci"], answer: 0, why: "Dokar sirri tana tsara yadda ake kula da bayanan mutane." },
      { objective: "O6", q: "Bayanan lafiya ko na shige da fice na mutanen da kuke taimakawa ya kamata:", options: ["A liƙa su don samun amsoshi mafi kyau", "A kiyaye su daga kayan AI", "A raba su a wasiƙun labarai", "A yi amfani da su a matsayin misalai a intanet"], answer: 1, why: "Bayanai ne masu muhimmanci da za su iya cutar da mutumin idan aka raba su." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [0, 3, 6, 9, 12, 16]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Prompt mai sassa uku", objective: "O3", notYet: "Prompt ɗin ba shi da sarari, misali \"saƙon godiya\".", meets: "Prompt ɗin yana faɗin abin da ake buƙata, halin da ake ciki da tsarin amsar.", exceeds: "Yana kuma ambaton mai karatu da sautin da ya dace da ƙungiyar." },
      { name: "Gyara biyu", objective: "O4", notYet: "An yi amfani da daftarin farko kamar yadda yake.", meets: "An nemi canje-canje biyu, ɗaya bayan ɗaya, kuma saƙon ya inganta.", exceeds: "Za a iya faɗin abin da kowane canji ya gyara." },
      { name: "An tabbatar da bayanai", objective: "O5", notYet: "An yi amfani da lamba, rana ko iƙirari ba tare da tabbatarwa ba.", meets: "Kowane bayani da kowace rana sun yi daidai da bayanan ƙungiyar.", exceeds: "An rubuta inda aka tabbatar da kowane bayani." },
      { name: "An kiyaye sirri", objective: "O6", notYet: "Prompt ɗin yana da bayanan sirri na wani mai aikin sa-kai ko mai bayarwa.", meets: "Babu bayanan sirri a cikin prompt; an yi amfani da madadi.", exceeds: "An ƙara ainihin sunaye ne kawai bayan an kwafo daftarin daga kayan AI." },
      { name: "Yana kama da mu", objective: "O4", notYet: "Saƙon yana da gama-gari ko bai yi kama da ƙungiyar ba.", meets: "An gyara shi don ya ji ƙauna kuma ya yi kama da ƙungiyar.", exceeds: "Mutum na biyu a ƙungiyar ya karanta shi kuma ya yarda." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka ce sun yi amfani da AI don saƙo na gaske na ƙungiyar sa-kai cikin kwanaki 30 (binciken biyo baya)",
      "Ƙungiyoyin da suka ce sun rage lokaci wajen saƙonnin godiya, sanarwa ko wasiƙun labarai",
      "Masu koyo da suka fara wani kwas na Koach Learn na ƙungiyoyin sa-kai cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai intanet",
      "Mataimakin AI kyauta, ko wanda ƙungiyarku ta amince da shi: ChatGPT, Microsoft Copilot ko Google Gemini",
      "Bayanan ƙungiyarku na wani taro na kwanan nan, kamar yawan masu aikin sa-kai da iyalan da aka yi wa hidima",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku gudanar da shi a matsayin bita ga ma'aikata ko masu aikin sa-kai: ku yi gwajin farko tare, sannan babi ɗaya a kowane zama.",
      "Ku tambayi shugaban ƙungiyar wane kayan AI ne aka amince da shi kafin zaman.",
      "Ku yi amfani da madadi a duk atisaye; kada ku taɓa liƙa ainihin bayanan masu bayarwa, masu aikin sa-kai ko waɗanda ake yi wa hidima.",
      "Ku tabbata kowane mai koyo ya fita daga asusunsa a kwamfutocin da ake rabawa kafin ya tafi.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
