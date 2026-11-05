"use strict";

// Koach Learn course, Hausa (ha) translation of workforce/workforce-essential-ai-tools.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "workforce-essential-ai-tools-ha",
  lang: "ha",
  translationOf: "workforce-essential-ai-tools",
  category: "Workforce Development",
  name: "Muhimman Kayan AI a Wurin Aiki",
  skills: "Bin dokar AI ta wurin aikinku, Amfani da mataimakin hira don rubutun aiki, Amfani da AI a cikin Microsoft 365 ko Google Workspace, Taƙaita takardu da tarurruka, Samun taimako da spreadsheet, Duba aikin AI kafin ku raba shi",
  outcome: "amfani da kayan AI da wurin aikinku ya amince da su don gama aikin yau da kullum da sauri: rubuta da gyara saƙon aiki, taƙaita doguwar takarda ko bayanan taro, samun taimako da spreadsheet, da duba kowane sakamako kafin ku raba shi, ba tare da saka bayanan sirri a inda bai dace ba.",
  about: [
    "Wannan kwas na ma'aikata ne da masu neman aiki da ke son ƙwarewar AI mai amfani a aiki: ma'aikatan ofis da gudanarwa, shugabannin shago da rumbun kaya, masu taimako a fannin lafiya, masu hidimar abokan ciniki, da duk wanda ke rubuta imel, karanta dokoki ko amfani da spreadsheet a aiki.",
    "Za ku fara da doka mafi muhimmanci, wato dokar AI ta wurin aikinku, sannan ku yi atisaye da mataimakan hira (ChatGPT, Microsoft Copilot, Google Gemini) da taimakon AI da ke cikin Microsoft 365 da Google Workspace a wasu tsare-tsare. Za ku taƙaita, ku rubuta daftari, ku yi nazari, kuma koyaushe ku duba.",
    "Abubuwan da kuke gani sun dogara ne ga lasisi da saitunan wurin aikinku, don haka muna bayyana abin da za ku yi maimakon ainihin sunayen maɓallai. Kowane darasi yana ɗaukar kusan minti biyar. Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku kammala jerin ayyukan AI na wurin aiki da kayan da wurin aikinku ya amince da su kaɗai (ko kayan kyauta da bayanan ƙirƙira idan kuna neman aiki): (1) ku rubuta muhimman dokoki uku na dokar AI ta wurin aikinku, ko dokoki uku da za ku bi; (2) ku mayar da bayanan da aka rubuta a hanzari zuwa imel na aiki mai sarari; (3) ku taƙaita doguwar takarda zuwa maki biyar da ayyukan yi uku; (4) ku sami taimakon AI don saka formula a spreadsheet; da (5) ku nuna abin da kuka duba a kowanne kafin ku raba shi.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Ma'aikata da masu neman aiki da ke son ƙwarewar AI mai amfani a aiki: ma'aikatan ofis da gudanarwa, shugabannin shago da rumbun kaya, masu taimako a fannin lafiya, masu hidimar abokan ciniki, da duk wanda ke rubuta imel, karanta dokoki ko amfani da spreadsheet a aiki.",
    startingPoint: "Suna amfani da imel, takardu da wani lokaci spreadsheet a aiki, a kwamfuta ko waya. Da yawa sun ga kayan AI amma ba su yi amfani da su don aiki ba, kuma wataƙila ba su san dokar AI ta wurin aikinsu ba.",
    gap: "Masu ɗaukar aiki suna ƙara sa ran ma'aikata su yi amfani da kayan AI da aka amince da su don rage lokaci, kuma kuskure ko fitar da bayanan sirri na iya jawo rasa aiki. Masu koyo suna buƙatar amfani da kayan da wurin aikinsu ya amince da su don rubutu, taƙaitawa da spreadsheet, da duba kowane sakamako kafin su raba shi.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli",
      "Na'urori: kwamfuta ce mafi kyau don takardu da spreadsheet; kayan sun dogara ga abin da mai ɗaukar aiki ya amince da shi",
      "Doka da sirri: dokar AI ta mai ɗaukar aiki ita ce farko; babu bayanan sirri na abokan ciniki ko na ma'aikata a cikin kayan AI; masu neman aiki suna amfani da kayan kyauta da bayanan ƙirƙira",
      "Abubuwan AI da ke cikin Microsoft 365 da Google Workspace sun dogara ga tsari da saitunan mai ɗaukar aiki",
      "Lokaci: darussa na kusan minti 5 da suka dace da ranar aiki"
    ],
    prerequisites: "Babu. Kwas ɗin \"AI and the New Workforce\" (AI da Sabon Tsarin Aiki) zai taimaka a tare da wannan."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Kafin ku yi amfani da AI a aiki", action: "nemo dokar AI ta wurin aikinku da rubuta muhimman dokokinta uku, ko dokoki uku na kariya idan babu ita", standard: "ba tare da saka bayanan sirri na abokan ciniki ko na ma'aikata a cikin kayan AI ba" },
    { id: "O2", condition: "Idan aka ba ku bayanan saƙon aiki da aka rubuta a hanzari", action: "rubuta imel na aiki mai sarari da mataimakin hira, ta amfani da prompt mai manufa, mai karatu, muhimman maki da salo", standard: "an duba kowane bayani, kuma imel ɗin yana kama da ku" },
    { id: "O3", condition: "A cikin manhajojin ofis da kuke amfani da su", action: "nemo da amfani da mataimakin AI da ke ciki, ko mataimakin hira da aka amince da shi idan asusunku ba shi da shi", standard: "ta amfani da rubutu marar sirri kaɗai a duk kayan da wurin aikinku bai amince da shi ba" },
    { id: "O4", condition: "Idan aka ba ku doguwar takarda ko bayanan taro", action: "taƙaita ta zuwa muhimman maki biyar da ayyukan yi uku tare da masu yin su", standard: "an duba da ainihin takardar" },
    { id: "O5", condition: "Idan aka ba ku ƙaramin spreadsheet", action: "amfani da AI don rubuta da bayanin formula, sannan gwada ta", standard: "da amsar da kuka lissafa da hannu" },
    { id: "O6", condition: "Kafin ku raba duk wani sakamakon AI", action: "duba shi don bayanai, dacewa, kariya da majiya", standard: "kuma ku ɗauki alhakin sigar ƙarshe" }
  ],
  chapters: [
    {
      name: "Babi na 1: Dokoki da kayan farko",
      lessons: [
        {
          objectives: ["O1"],
          title: "Dokar AI ta wurin aikinku ita ce farko",
          minutes: 5,
          goal: "Nemo da bin dokokin wurin aikinku game da kayan AI.",
          text: [
            "Masu ɗaukar aiki da yawa suna da dokoki game da kayan AI: waɗanne kayan aka amince da su, waɗanne bayanai za a iya sakawa a ciki, da lokacin da dole ku faɗi cewa kun yi amfani da AI. Karya waɗannan dokoki na iya jawo muku matsala, ko da kun yi niyya mai kyau.",
            "Ku duba littafin ma'aikata, intranet ko shafukan IT, ko ku tambayi manajanku ko IT: \"Waɗanne kayan AI aka bar mu mu yi amfani da su, kuma waɗanne bayanai zan iya sakawa a ciki?\" Wasu masu ɗaukar aiki suna ba da sigar kasuwanci ta wani kayan, kamar Microsoft Copilot da asusun aiki, wadda take da kariyar bayanai fiye da asusun kyauta na kanku.",
            "Idan babu doka, ku bi dokokin kariya: babu bayanan abokan ciniki ko marasa lafiya, babu bayanan sirri na ma'aikata, babu kalmomin sirri (password), babu tsare-tsare na sirri ko lambobin kuɗi a asusun AI na kanku. Ku duba kowane bayani kafin ku raba shi."
          ],
          steps: ["Ku nemi \"AI\" a littafin ma'aikata ko intranet.", "Ku tambayi manajanku ko IT waɗanne kayan aka amince da su.", "Ku tambayi waɗanne bayanai aka yarda a saka.", "Idan babu doka, ku bi dokokin kariya."],
          words: [["Dokar AI (AI policy)", "dokokin mai ɗaukar aiki game da amfani da kayan AI a aiki."], ["Kayan da aka amince da shi", "kayan da mai ɗaukar aikinku ya yarda a yi amfani da shi don aiki."], ["Na sirri (confidential)", "bayanan da aka yi don mutanen cikin kamfanin kaɗai."]],
          slides: [
            { title: "Dokoki su ne farko", bullets: ["Waɗanne kayan aka amince da su", "Waɗanne bayanai za a iya sakawa", "Lokacin da za ku faɗi cewa kun yi amfani da AI"] },
            { title: "Inda za ku same su", bullets: ["Littafin ma'aikata ko intranet", "Ku tambayi manajanku ko IT", "Asusun aiki na iya samun ƙarin kariya"] },
            { title: "Dokokin kariya", bullets: ["Babu bayanan abokan ciniki, marasa lafiya ko ma'aikata", "Babu kalmomin sirri ko tsare-tsare na sirri", "Ku duba kowane bayani kafin ku raba shi"] }
          ],
          tryIt: "Ku nemo dokar AI ta wurin aikinku, ko ku tambaya game da ita. Ku rubuta dokoki uku mafi muhimmanci. Idan kuna neman aiki, ku rubuta dokokin kariya uku da za ku bi.",
          youCanNow: "nemo da bin dokokin kayan AI a wurin aikinku.",
          quickCheck: [
            { objective: "O1", q: "A ina kuke yawan samun dokar AI ta wurin aikinku?", options: ["A shafin sada zumunta", "A littafin ma'aikata ko intranet, ko ta tambayar manajanku ko IT", "A tallace-tallacen kayan AI", "Babu inda; babu irin waɗannan dokoki"], answer: 1, why: "Dokoki yawanci suna cikin littafin ma'aikata ko intranet, kuma manajanku ko IT za su iya faɗa muku." },
            { objective: "O1", q: "Wurin aikinku ba shi da dokar AI, kuma kuna son taimako wajen amsa ƙorafin abokin ciniki. Me za ku yi?", options: ["Ku saka sunan abokin ciniki, adireshinsa da tarihin odarsa", "Ku yi amfani da AI da duk bayanan da kuke so", "Kada ku sake rubuta amsa", "Ku bar bayanan sirri na abokin ciniki a waje, ku bi dokar kariya"], answer: 3, why: "Idan babu doka, dokar kariya ita ce a bar bayanan sirri na abokan ciniki da na ma'aikata a waje." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Mataimakin hira don rubutun aiki na yau da kullum",
          minutes: 5,
          goal: "Mayar da bayanan hanzari zuwa saƙon aiki mai sarari da mataimakin hira.",
          text: [
            "Mataimakan hira kamar ChatGPT, Microsoft Copilot da Google Gemini suna mayar da bayanan da aka rubuta a hanzari zuwa rubutu mai sarari. Ku yi amfani da wanda wurin aikinku ya yarda da shi.",
            "Prompt (umarni) mai kyau na aiki yana faɗin manufa, mai karatu, muhimman maki da salo: \"Rubuta gajeren imel ga ƙungiyata. Manufa: an rufe wurin sauke kaya ranar Alhamis don gyara. A yi amfani da dock B maimakon haka. Kaya suna isowa ƙarfe 7-11 na safe. Salo: mai sarari da abokantaka. Ƙasa da kalmomi 100.\"",
            "Sannan ku nemi canje-canje (\"ka gajarta\", \"ka ƙara ladabi\", \"ka ƙara jeri\"), ku duba kowane bayani, kuma ku sa ya yi kama da ku kafin ku aika."
          ],
          steps: ["Ku rubuta bayananku a hanzari.", "Ku rubuta prompt mai manufa, mai karatu, muhimman maki da salo.", "Ku nemi canji ɗaya a lokaci ɗaya.", "Ku duba sunaye, ranaku, lokuta da lambobi.", "Ku gyara ya yi kama da ku, sannan ku aika."],
          words: [["Prompt (umarni)", "abin da kuke rubutawa don neman wani abu daga kayan AI."], ["Salo (tone)", "yadda rubutu yake sauti: na abokantaka, na ladabi, mai ƙarfi."]],
          slides: [
            { title: "Bayanan hanzari su shiga, saƙo mai sarari ya fito", bullets: ["ChatGPT, Copilot ko Gemini", "Ku yi amfani da kayan da wurin aikinku ya yarda da shi"] },
            { title: "Prompt mai kyau na aiki", bullets: ["Manufa da mai karatu", "Muhimman maki", "Salo da tsawo"] },
            { title: "Kafin ku aika", bullets: ["Ku nemi canje-canje ɗaya bayan ɗaya", "Ku duba sunaye, ranaku, lokuta, lambobi", "Ku sa ya yi kama da ku"] }
          ],
          tryIt: "Ku rubuta bayanai a hanzari don saƙon aiki na gaske ko na misali. Ku yi amfani da mataimakin hira don mayar da su imel mai sarari, ku nemi canji ɗaya, sannan ku duba kowane bayani.",
          youCanNow: "mayar da bayanan hanzari zuwa saƙon aiki mai sarari da mataimakin hira.",
          quickCheck: [
            { objective: "O2", q: "Me \"ga manajana, salo na abokantaka\" yake saitawa a cikin prompt?", options: ["Mai karatu da salo", "Tsawo", "Wa'adin lokaci", "Nau'in fayil"], answer: 0, why: "Faɗin mai karatu da salo yana taimaka wa AI ya rubuta irin saƙon da ya dace." },
            { objective: "O2", q: "Daftarin imel na AI ya ce taron ranar Alhamis ne, amma bayananku sun ce Laraba. Me za ku yi?", options: ["Ku aika; wataƙila AI ne ya yi daidai", "Ku goge bayananku", "Ku gyara ranar kafin ku aika", "Ku saka ranaku biyun"], answer: 2, why: "Kuna duba kowane bayani da bayananku kafin ku aika." }
          ]
        },
        {
          objectives: ["O3"],
          title: "AI a cikin Microsoft 365 da Google Workspace",
          minutes: 5,
          goal: "Nemo da amfani da mataimakin AI a manhajojin ofis da kuke amfani da su, idan asusunku yana da shi.",
          text: [
            "Microsoft yana saka Copilot a manhajoji kamar Word, Outlook, Excel, PowerPoint da Teams, kuma Google yana saka Gemini a Gmail, Docs, Sheets da Meet. Ko kuna da su ya dogara ga tsari da saitunan mai ɗaukar aikinku.",
            "Idan kuna da su, AI zai iya aiki a kan abin da yake buɗe: \"Taƙaita wannan takarda\", \"Rubuta amsa ga wannan imel\", \"Ba da shawarar formula don wannan layin tsaye (column)\". Ku nemi alamar AI ko akwatin AI a manhajar, ko ku tambayi IT yadda ake kunna shi.",
            "Idan ba ku da shi, har yanzu kuna iya kwafar rubutu marar sirri zuwa mataimakin hira da aka amince da shi, sannan ku mayar da sakamakon. Ko ta yaya, ku ne ke da sigar ƙarshe, kuma ku ne ke duba ta."
          ],
          steps: ["Ku buɗe Word, Outlook, Docs ko Gmail da asusun aikinku.", "Ku nemi alamar AI ko akwatin AI, ko ku tambayi IT.", "Ku nemi ya taƙaita ko ya rubuta daftari daga fayil ɗin da ke buɗe.", "Idan babu shi, ku yi amfani da mataimakin hira da aka amince da shi da rubutu marar sirri.", "Ku duba ku gyara sakamakon."],
          words: [["Microsoft 365", "rukunin manhajojin aiki na Microsoft: Word, Excel, Outlook, Teams da sauransu."], ["Google Workspace", "rukunin manhajojin aiki na Google: Gmail, Docs, Sheets, Meet da sauransu."]],
          slides: [
            { title: "AI a cikin manhajojin ofis", bullets: ["Microsoft: Copilot a Word, Outlook, Excel, Teams", "Google: Gemini a Gmail, Docs, Sheets, Meet", "Ya dogara ga tsarin mai ɗaukar aikinku"] },
            { title: "Yana aiki a kan abin da ke buɗe", bullets: ["\"Taƙaita wannan takarda\"", "\"Rubuta amsa ga wannan imel\"", "Ku nemi alamar AI ko ku tambayi IT"] },
            { title: "Babu AI a ciki?", bullets: ["Ku yi amfani da mataimakin hira da aka amince da shi", "Rubutu marar sirri kaɗai", "Ku ne ke duba sigar ƙarshe"] }
          ],
          tryIt: "Ku buɗe takardar aiki ko imel (ko na misali). Ku yi amfani da mataimakin AI da ke ciki idan kuna da shi, ko mataimakin hira da aka amince da shi idan babu, don rubuta amsa ko taƙaitawa. Ku duba shi.",
          youCanNow: "amfani da mataimakin AI a manhajojin ofis ɗinku, ko wata hanya mai aminci, don rubuta daftari da taƙaitawa.",
          quickCheck: [
            { objective: "O3", q: "Mene ne Copilot a Word ko Outlook?", options: ["Ƙari kyauta da kowa yake da shi", "Formula ta spreadsheet", "Ƙwayar cutar kwamfuta (virus)", "Mataimakin AI da ke cikin Microsoft 365, a wasu tsare-tsare"], answer: 3, why: "Copilot yana cikin manhajojin Microsoft 365, ya danganta da tsari da saitunan mai ɗaukar aiki." },
            { objective: "O3", q: "Ba ku ga alamar AI a manhajar ofis ɗinku ba. Me za ku yi?", options: ["Ku saka duk wani ƙarin AI da kuka gani", "Ku tambayi IT, ko ku yi amfani da mataimakin hira da aka amince da shi da rubutu marar sirri", "Ku saka fayiloli na sirri a asusun AI na kanku", "Ku daina amfani da AI"], answer: 1, why: "IT zai iya faɗa muku abin da ake da shi, kuma mataimakin da aka amince da shi yana aiki da rubutu marar sirri." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Dokoki da kayan farko",
        questions: [
          { objective: "O1", q: "Kafin ku yi amfani da AI a aiki, ya kamata ku fara:", options: ["Saka bayanan abokan ciniki", "Sanin dokar AI ta mai ɗaukar aikinku", "Raba kalmar sirrinku", "Amfani da kowace manhaja da kuka gani"], answer: 1, why: "Dokoki suna faɗin abin da aka yarda da shi." },
          { objective: "O1", q: "Babu doka. Wace dokar kariya ya kamata ku bi?", options: ["Ku ƙyale duba bayanai", "Ku saka komai", "Ku raba kalmomin sirri", "Babu bayanan sirri na abokan ciniki ko ma'aikata a kayan AI"], answer: 3, why: "Bayanan sirri suna zama a waje." },
          { objective: "O2", q: "Prompt mai kyau na aiki ya ƙunshi:", options: ["Manufa, mai karatu, muhimman maki da salo", "Kalma ɗaya kawai", "Kalmar sirrinku", "Adireshin abokin ciniki"], answer: 0, why: "Waɗannan sassa suna kawo daftari mai amfani." },
          { objective: "O3", q: "Copilot a cikin Word ko Outlook yana samuwa:", options: ["Ba ya samuwa ko kaɗan", "Ga kowa kai tsaye", "Ya danganta da tsari da saitunan mai ɗaukar aikinku", "A waya kaɗai"], answer: 2, why: "Samun sa ya dogara ga lasisi da saituna." },
          { objective: "O6", q: "Wane ne ke da sigar ƙarshe ta aikin da AI ya rubuta?", options: ["IT", "AI", "Ku", "Babu kowa"], answer: 2, why: "Ku ne ke da alhakin abin da kuka aika." }
        ]
      }
    },
    {
      name: "Babi na 2: Taƙaitawa, spreadsheet da dubawa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Taƙaita takardu da tarurruka",
          minutes: 5,
          goal: "Mayar da doguwar takarda ko bayanan taro zuwa muhimman maki da ayyukan yi.",
          text: [
            "Taƙaitawa tana rage wa kowa lokaci. Ku nemi takamaiman tsari: \"Taƙaita wannan doka a maki biyar don sabon ma'aikaci, sannan ka jera ayyukan yi uku.\" Ko don bayanan taro: \"Jera shawarwarin da aka yanke, ayyukan yi tare da masu yin su da ranakun ƙarewa, da tambayoyin da ba a amsa ba.\"",
            "Wasu kayan taro na iya rubuta abin da aka faɗa (transcribe) da taƙaita tarurruka idan mai ɗaukar aikinku ya kunna haka. Kowa a cikin taron ya kamata ya san cewa ana naɗa shi ko ana rubuta shi; ku bi dokokin wurin aikinku.",
            "Taƙaitawa na iya barin wani abu mai muhimmanci ko ta yi kuskure a wani bayani. Ku duba muhimman bayanai da ainihin takardar, musamman lambobi, ranaku, sunaye da wanda ya yarda zai yi me."
          ],
          steps: ["Ku saka ko buɗe takardar (idan an yarda).", "Ku nemi maki, shawarwarin da aka yanke da ayyukan yi tare da masu yin su da ranaku.", "Ku kwatanta muhimman bayanai da ainihin takardar.", "Ku gyara duk abin da ya ɓace ko ba daidai ba kafin ku raba."],
          words: [["Taƙaitawa (summary)", "gajeriyar siga da ke riƙe da muhimman maki."], ["Aikin yi (action item)", "aikin da wani ya yarda zai yi, zai fi kyau tare da mai yin sa da ranar ƙarewa."], ["Transcribe", "mayar da magana zuwa rubutu."]],
          slides: [
            { title: "Ku nemi tsari", bullets: ["Maki biyar don sabon ma'aikaci", "Shawarwari, ayyukan yi, tambayoyin da ba a amsa ba", "Masu yin su da ranakun ƙarewa"] },
            { title: "Kayan taro", bullets: ["Wasu suna rubuta da taƙaita tarurruka", "Kowa ya kamata ya san ana naɗawa", "Ku bi dokokin wurin aikinku"] },
            { title: "Ku duba da ainihin takardar", bullets: ["Lambobi, ranaku da sunaye", "Wanda ya yarda zai yi me", "Duk abu mai muhimmanci da aka bari"] }
          ],
          tryIt: "Ku ɗauki doguwar takardar aiki ko bayanan taro (ko dokar jama'a idan kuna neman aiki). Ku nemi AI ya ba ku maki biyar da ayyukan yi uku tare da masu yin su, sannan ku duba su da ainihin takardar.",
          youCanNow: "taƙaita takardu da tarurruka zuwa maki masu sarari da ayyukan yi, da duba su.",
          quickCheck: [
            { objective: "O4", q: "Mene ne aikin yi (action item)?", options: ["Taƙaitawar taron gaba ɗaya", "Tambayar da babu wanda ya amsa", "Aiki mai mai yin sa da ranar ƙarewa", "Lokacin fara taron"], answer: 2, why: "Ayyukan yi suna faɗin wane ne zai yi me, kuma zuwa yaushe." },
            { objective: "O4", q: "Taƙaitawar AI ta bar wa'adin lokacin da ke cikin ainihin takardar. Me za ku yi?", options: ["Ku ƙara wa'adin bayan kun kwatanta da ainihin takardar", "Ku raba taƙaitawar kamar yadda take", "Ku goge ainihin takardar", "Ku nemi taƙaitawa mafi tsawo kuma kada ku duba ta"], answer: 0, why: "Taƙaitawa na iya barin bayanai, don haka kuna kwatantawa da ainihin takardar ku gyara." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Samun taimako da spreadsheet daga AI",
          minutes: 5,
          goal: "Yi amfani da AI don rubuta da bayanin formula ta spreadsheet, sannan ku gwada ta.",
          text: [
            "Ma'aikata da yawa suna ɓata lokaci a spreadsheet. AI malami ne mai kyau: \"A Excel, ta yaya zan ƙirga layuka nawa a column B ke cewa 'Late'?\" Zai iya amsawa da =COUNTIF(B:B,\"Late\") ya kuma bayyana kowane sashe.",
            "Ku bayyana columns ɗinku maimakon saka bayanan sirri: \"Column A rana ce, B matsayi ne, C awoyi ne.\" Idan mai ɗaukar aikinku ya yarda da AI da ke cikin Excel ko Sheets, kuna iya tambayarsa game da fayil ɗin da ke buɗe.",
            "Koyaushe ku gwada formula a kan layuka kaɗan da kuka san amsarsu. Formulas na AI na iya kusantowa amma ba daidai ba, misali ƙirga layin kanun (header) ko amfani da range da ba daidai ba."
          ],
          steps: ["Ku bayyana columns ɗinku da abin da kuke son sani.", "Ku nemi AI formula da bayaninta.", "Ku saka formula a spreadsheet ɗinku.", "Ku gwada ta a kan layukan da kuka san amsarsu.", "Ku nemi AI ya gyara ta idan ba daidai ba ce."],
          words: [["Formula", "umarni a cikin akwatin spreadsheet (cell) da ke lissafa wani abu."], ["COUNTIF", "formula da ke ƙirga akwatunan da suka dace da wani sharaɗi."], ["Range", "rukunin akwatuna, kamar B2:B50."]],
          slides: [
            { title: "AI a matsayin malamin spreadsheet", bullets: ["\"Ta yaya zan ƙirga layukan da ke cewa Late?\"", "=COUNTIF(B:B,\"Late\")", "Ku nemi ya bayyana kowane sashe"] },
            { title: "Ku bayyana, kada ku saka", bullets: ["\"Column A rana ce, B matsayi ne\"", "AI da ke ciki sai idan an yarda"] },
            { title: "Ku gwada ta", bullets: ["Ku duba layukan da kuka san amsarsu", "Ku kula da layin kanun da range da ba daidai ba"] }
          ],
          tryIt: "Ku yi ƙaramin spreadsheet mai layuka 10 na bayanan misali. Ku nemi AI formula ɗaya (ƙirga, jimla ko matsakaici), ku saka ta, sannan ku gwada ta da amsar da kuka lissafa da hannu.",
          youCanNow: "samun, fahimta da gwada formulas na spreadsheet tare da taimakon AI.",
          quickCheck: [
            { objective: "O5", q: "Mene ne range a spreadsheet?", options: ["Zane (chart)", "Rukunin akwatuna, kamar B2:B50", "Sunan fayil", "Kuskuren formula"], answer: 1, why: "Range rukunin akwatuna ne da formula ke aiki a kai." },
            { objective: "O5", q: "Formula ta COUNTIF ta AI ta ba da 11, amma kun ƙirga layuka 10 masu \"Late\" da hannu. Me za ku yi?", options: ["Ku yi amfani da 11 duk da haka", "Ku goge bayanan", "Ku nemi wani AI daban", "Ku duba range ɗin, misali ko ya haɗa da layin kanun, ku gyara"], answer: 3, why: "Kuskure da aka saba shi ne range da ba daidai ba ko ƙirga layin kanun, don haka kuna gwadawa ku gyara." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Duba aikin AI kafin ku raba shi",
          minutes: 5,
          goal: "Yi amfani da gajeren jerin dubawa don nazarin duk wani sakamakon AI kafin ya kai ga wasu.",
          text: [
            "A aiki, sunanku yana kan abin da kuka raba. Ku yi dubawa mai sassa huɗu koyaushe: Bayanai (Facts: lambobi, sunaye, ranaku da dokoki sun yi daidai da majiyar), Dacewa (Fit: salo da tsawo sun dace da mai karatu), Kariya (Safety: babu bayanan sirri ko na mutum da bai kamata su kasance a ciki ba), da Majiya (Source: idan ya faɗi doka ko ƙididdiga, kun san daga ina ta fito).",
            "AI na iya ƙirƙirar bayanan da suke kama da gaskiya, ana kiransu hallucinations (hasashen ƙarya). Yana kuma iya kwafar son kai (bias), misali a bayanin aiki. Ku karanta shi kamar ku ne kuka karɓe shi.",
            "Idan wurin aikinku yana neman ku faɗi lokacin da kuka yi amfani da AI, ku faɗa. Bayyana yadda kuke aiki yana gina amana."
          ],
          steps: ["Bayanai: ku duba da majiyar.", "Dacewa: salo da tsawo da suka dace da mai karatu.", "Kariya: babu bayanan da bai kamata su kasance a ciki ba.", "Majiya: ku san daga ina kowace doka ko lamba ta fito.", "Ku faɗi cewa kun yi amfani da AI idan wurin aikinku yana bukata."],
          words: [["Hallucination (hasashen ƙarya)", "lokacin da AI ya rubuta abin da yake kama da gaskiya amma ƙirƙirarre ne."], ["Son kai (bias)", "karkata marar adalci don wani rukuni ko a kansa."]],
          slides: [
            { title: "Sunanku yana kai", bullets: ["Ku duba kowane sakamakon AI kafin ku raba shi"] },
            { title: "Dubawa mai sassa huɗu", bullets: ["Bayanai (Facts)", "Dacewa (Fit)", "Kariya (Safety)", "Majiya (Source)"] },
            { title: "Ku kula da", bullets: ["Bayanan ƙirƙira (hallucinations)", "Son kai, kamar a bayanin aiki", "Ku faɗi cewa kun yi amfani da AI idan ana bukata"] }
          ],
          tryIt: "Aikin ƙarshe: ku kammala jerin ayyukan AI na wurin aikinku: dokoki uku, imel mai sarari daga bayanai, taƙaitawa mai maki biyar da ayyukan yi, formula ta spreadsheet da aka gwada, da bayanin abin da kuka duba a kowanne ta amfani da Bayanai, Dacewa, Kariya da Majiya.",
          youCanNow: "amfani da kayan AI na wurin aiki don gama aiki da sauri, lafiya, kuma tare da dubawarku ta kanku a hankali.",
          quickCheck: [
            { objective: "O6", q: "Me dubawar Kariya (Safety) take tambaya kafin ku raba aikin AI?", options: ["Ko yana da bayanan sirri ko na mutum da bai kamata a raba ba", "Ko ya yi tsawo isasshe", "Ko yana amfani da manyan kalmomi", "Ko AI ya so shi"], answer: 0, why: "Dubawar Kariya tana tabbatar da cewa babu wani abu na sirri ko na mutum da ya tafi inda bai dace ba." },
            { objective: "O6", q: "AI ya rubuta taƙaitawar doka da ke ambaton wata ƙa'ida. Me za ku yi kafin ku raba?", options: ["Ku raba da sauri", "Ku cire sunanku daga ciki", "Ku duba daga ina ƙa'idar ta fito (Majiya) da cewa daidai ce", "Ku ƙara wasu ƙa'idoji"], answer: 2, why: "Dubawar Majiya tana tabbatar da daga ina kowace doka ko lamba ta fito." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Taƙaitawa, spreadsheet da dubawa",
        questions: [
          { objective: "O4", q: "Taƙaitawar taro mai kyau tana jera:", options: ["Shawarwarin da aka yanke, ayyukan yi tare da masu yin su da ranaku, da tambayoyin da ba a amsa ba", "Sunan taron kawai", "Kalmomin sirrin kowa", "Babu komai"], answer: 0, why: "Wannan tsari yana sauƙaƙa bin diddigi." },
          { objective: "O4", q: "Kafin a rubuta abin da aka faɗa a taro (transcribe), ya kamata mutane su:", options: ["Kashe kyamarorinsu", "Kada a faɗa musu", "Tafi", "San cewa ana naɗawa ko ana rubutawa"], answer: 3, why: "Ku bi dokokin wurin aiki kuma ku kasance a bayyane." },
          { objective: "O5", q: "Me =COUNTIF(B:B,\"Late\") take yi?", options: ["Tana haɗa column B", "Tana ƙirga akwatunan column B da ke cewa Late", "Tana goge layukan Late", "Tana jera spreadsheet"], answer: 1, why: "COUNTIF tana ƙirga akwatunan da suka dace." },
          { objective: "O5", q: "Ta yaya za ku san formula ta AI tana aiki?", options: ["Ku gwada ta a kan layukan da kuka san amsarsu", "Tana kama da daidai", "AI ya faɗa haka", "Babu wanda ya koka"], answer: 0, why: "Gwaji ne ke tabbatar da ita." },
          { objective: "O6", q: "Wanne BA ɗaya daga cikin dubawa huɗu ba ne?", options: ["Dacewa (Fit)", "Bayanai (Facts)", "Shahara (Fame)", "Kariya (Safety)"], answer: 2, why: "Dubawar ita ce Bayanai, Dacewa, Kariya da Majiya." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Muhimman Kayan AI a Wurin Aiki",
    questions: [
      { objective: "O1", q: "A ina kuke yawan samun dokar AI ta wurin aikinku?", options: ["Saƙo a shafin sada zumunta", "Littafin ma'aikata, intranet, ko ta tambayar manajanku ko IT", "Hira da AI", "Babu inda"], answer: 1, why: "Dokoki suna a wuraren hukuma na kamfani." },
      { objective: "O1", q: "Sigar asusun aiki ta kayan AI na iya:", options: ["Rashin wanzuwa", "Zama marar aminci koyaushe", "Raba bayananku ga jama'a", "Samun kariyar bayanai fiye da asusun kyauta na kanku"], answer: 3, why: "Sigogin kasuwanci na iya ba da ƙarin kariya; ku duba shawarar mai ɗaukar aikinku." },
      { objective: "O1", q: "Wanne ne kada ya taɓa shiga asusun AI na kanku?", options: ["Tambaya ta gama-gari", "\"Ka gajarta wannan\"", "Labarin jarida na jama'a", "Bayanan sirri na abokin ciniki"], answer: 3, why: "Bayanan abokan ciniki na sirri ne." },
      { objective: "O2", q: "ChatGPT, Copilot da Gemini su ne:", options: ["Spreadsheets", "Mataimakan hira", "Firintoci", "Wayoyi"], answer: 1, why: "Mataimakan hira ne na AI." },
      { objective: "O2", q: "\"Ƙasa da kalmomi 100\" a cikin prompt yana saita:", options: ["Manufa", "Mai karatu", "Tsawo", "Kalmar sirri"], answer: 2, why: "Yana sarrafa tsawo." },
      { objective: "O2", q: "Bayan AI ya rubuta daftarin imel, ku:", options: ["Duba bayanai ku sa ya yi kama da ku", "Aika shi ba tare da karantawa ba", "Ƙara wasu bayanan da ya ƙirƙira", "Goge shi"], answer: 0, why: "Ku ne ke da sigar ƙarshe." },
      { objective: "O3", q: "Copilot yana bayyana a:", options: ["Littattafan takarda", "Gmail kaɗai", "Manhajojin Microsoft 365, a wasu tsare-tsare", "Babu inda"], answer: 2, why: "Microsoft yana saka Copilot a manhajojinsa a wasu tsare-tsare." },
      { objective: "O3", q: "Gemini yana bayyana a:", options: ["Manhajojin Google Workspace, a wasu tsare-tsare", "Excel kaɗai", "Na'urorin fax", "Babu inda"], answer: 0, why: "Google yana saka Gemini a manhajojinsa a wasu tsare-tsare." },
      { objective: "O3", q: "Ba ku ga alamar AI a manhajar ofis ɗinku ba. Kuna iya:", options: ["Saka ƙari-ƙari ba tare da tunani ba", "Tambayar IT, ko amfani da mataimakin hira da aka amince da shi da rubutu marar sirri", "Haƙura", "Amfani da shiga asusun abokin aikinku"], answer: 1, why: "Ku tsaya a cikin kayan da aka amince da su." },
      { objective: "O4", q: "Aikin yi ya kamata ya kasance da:", options: ["Babu komai", "Sirri", "Kalmar sirri", "Mai yin sa da ranar ƙarewa"], answer: 3, why: "Masu yi da ranaku suna sa abu ya faru." },
      { objective: "O4", q: "Me yasa za ku kwatanta taƙaitawa da ainihin takardar?", options: ["Taƙaitawa na iya barin ko canja bayanai", "Don ɓata lokaci", "Ba a buƙatar haka", "Don nishaɗi"], answer: 0, why: "Dubawa tana kama kurakurai." },
      { objective: "O4", q: "Transcribe yana nufin:", options: ["Aika imel", "Goge fayil", "Fassara harshe", "Mayar da magana zuwa rubutu"], answer: 3, why: "Transcription tana rubuta magana." },
      { objective: "O5", q: "Maimakon saka bayanan sirri na spreadsheet a AI, kuna iya:", options: ["Aika su ga abokai ta imel", "Saka su duk da haka", "Bayyana columns", "Saka su a intanet"], answer: 2, why: "Bayani yana kiyaye bayanan." },
      { objective: "O5", q: "Range a spreadsheet shi ne:", options: ["Murhu", "Rukunin akwatuna, kamar B2:B50", "Kalmar sirri", "Zane (chart)"], answer: 1, why: "Range rukunin akwatuna ne." },
      { objective: "O5", q: "Kuskuren formula na AI da aka saba shi ne:", options: ["Babu komai", "Gajarta sosai", "Amfani da launi", "Ƙirga layin kanun ko amfani da range da ba daidai ba"], answer: 3, why: "Ku gwada don kama waɗannan." },
      { objective: "O6", q: "Hallucination ta AI ita ce:", options: ["Taro", "Matsalar allo", "Bayanin ƙirƙira da yake kama da gaskiya", "Ƙwayar cutar kwamfuta (virus)"], answer: 2, why: "AI na iya ƙirƙirar bayanai." },
      { objective: "O6", q: "Dubawar \"Dacewa\" (Fit) tana tambaya ko:", options: ["Salo da tsawo sun dace da mai karatu", "Fayil ɗin ya dace a USB", "Kujerar ta dace", "Ya dace a gajeren saƙon intanet (tweet)"], answer: 0, why: "Dacewa game da mai karatu ce." },
      { objective: "O6", q: "Dubawar \"Majiya\" (Source) tana tambaya:", options: ["Wane madannin kwamfuta kuka yi amfani da shi", "Daga ina kowace doka ko lamba ta fito", "Wane ne ya fi sauri wajen rubutu", "Babu komai"], answer: 1, why: "Dokoki da lambobi suna buƙatar majiya." },
      { objective: "O6", q: "Idan wurin aikinku yana bukatar ku faɗi cewa kun yi amfani da AI, ya kamata ku:", options: ["Ɓoye shi", "Faɗa", "Ɗora laifi a kan abokin aiki", "Ƙyale dokar"], answer: 1, why: "Bayyanawa tana gina amana kuma tana bin doka." },
      { objective: "O6", q: "Sunan wane ne ke kan aikin da AI ya taimaka wanda kuka raba?", options: ["Naku", "Na AI", "Na IT", "Na babu kowa"], answer: 0, why: "Ku ne ke da alhakinsa." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 2, 4, 8, 9, 10, 14, 15, 17] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Dokokin AI", objective: "O1", notYet: "Ba a rubuta dokoki ba, ko dokokin sun yarda a saka bayanan sirri a kayan AI.", meets: "Muhimman dokoki uku daga dokar AI ta wurin aiki, ko dokokin kariya uku.", exceeds: "Yana faɗin inda dokar take da wanda za a tambaya game da ita." },
      { name: "Imel mai sarari", objective: "O2", notYet: "Imel ɗin ba shi da sarari, ko wani bayani ba daidai ba ne.", meets: "Imel mai sarari daga bayanan hanzari, an duba bayanai da bayanan.", exceeds: "Mai koyo ya nemi canji ɗaya kuma ya sa ya yi kama da shi." },
      { name: "Taƙaitawa da ayyukan yi", objective: "O4", notYet: "Maki ƙasa da biyar, ko ayyukan yi ba tare da masu yin su ba.", meets: "Maki biyar da ayyukan yi uku tare da masu yin su, an duba da ainihin takardar.", exceeds: "Ayyukan yi suna da ranakun ƙarewa kuma, kuma an gano wani bayani da ya ɓace an ƙara shi." },
      { name: "Formula da aka gwada", objective: "O5", notYet: "Ba a gwada formula ba, ko tana ba da amsa da ba daidai ba.", meets: "Formula mai aiki da aka gwada da amsar da aka lissafa da hannu.", exceeds: "Mai koyo zai iya bayyana abin da kowane sashe na formula yake yi." },
      { name: "Dubawa kafin rabawa", objective: "O6", notYet: "Babu bayanin abin da aka duba.", meets: "Kowane aiki yana da bayanin dubawar Bayanai, Dacewa, Kariya da Majiya.", exceeds: "Bayanan sun ambaci takamaiman gyaran da aka yi bayan wata dubawa." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka ce suna amfani da kayan AI da aka amince da shi don aikin aiki kowane mako, bayan kwanaki 30 (binciken biyo baya)",
      "Masu koyo ko manajoji da suka ce an rage lokaci a imel, taƙaitawa ko spreadsheet",
      "Masu koyo da suka fara wani kwas na Koach Learn na ƙwarewar aiki cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta mai intanet",
      "Kayan AI da wurin aiki ya yarda da su, ko mataimakin hira kyauta (ChatGPT, Microsoft Copilot ko Google Gemini) da bayanan ƙirƙira ga masu neman aiki",
      "Spreadsheet kyauta: Google Sheets ko Microsoft Excel ta intanet",
      "Doguwar takarda ko bayanan taro na misali ba tare da bayanan sirri ba",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "A rukunin wurin aiki, ku kawo dokar AI ta mai ɗaukar aiki a zama na farko ku duba ta tare.",
      "Ku samar da bayanai, takardu da bayanan spreadsheet na misali don kada kowa ya yi amfani da bayanan sirri.",
      "Kayan AI da ke ciki sun bambanta bisa tsari; ku shirya mataimakin hira kyauta ga masu koyo da asusunsu ba shi da su.",
      "Ku sa masu koyo su musanya sakamakonsu kuma su yi dubawar Bayanai, Dacewa, Kariya da Majiya a aikin juna.",
      "Ku ba da maki ga jerin ayyukan da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
