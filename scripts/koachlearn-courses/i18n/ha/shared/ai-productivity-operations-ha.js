"use strict";

// Koach Learn course, Hausa (ha) translation of shared/ai-productivity-operations.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "ai-productivity-operations-ha",
  lang: "ha",
  translationOf: "ai-productivity-operations",
  category: "Small Business",
  name: "AI don Ƙara Yawan Aiki da Tafiyar da Ayyuka",
  skills: "Tsara mako da AI, Rubuta tsarin aiki na dindindin (SOP), Mayar da taro zuwa ayyukan yi, Tsara jadawalin ma'aikata ko masu sa kai, Bin diddigin kayayyaki da sake oda, Rubuta bitar ayyuka ta mako",
  outcome: "amfani da mataimakin AI kyauta don tsara mako, mayar da aiki mai rikitarwa zuwa tsarin aiki a sarari mataki-mataki, samun ayyukan yi daga taro, tsara jadawali, bin diddigin kayayyaki, da bitar mako, ta yadda ƙungiyar za ta fi tafiya daidai ba tare da ɗaukar lokacinku sosai ba.",
  about: [
    "Tafiyar da ayyuka (operations) ita ce aikin yau da kullum da ke sa ƙungiya ta ci gaba da aiki: jadawali, kayayyaki, tsare-tsaren aiki, taro da bibiya. Idan ya rikice, masu kasuwanci da shugabanni suna kwana suna cim ma aiki. AI zai iya ɗauke musu nauyi mai yawa.",
    "Wannan kwas ɗin na masu ƙananan kasuwanci ne da manajoji, shugabannin ƙungiyoyin sa kai (nonprofit) da masu kula da masu sa kai. Misalai sun haɗa da gidan abinci, wurin kula da yara, ƙungiyar gyaran lambu, shagon kayan gwanjo da wurin rabon abinci.",
    "Za ku yi amfani da ChatGPT, Microsoft Copilot ko Google Gemini tare da Google Docs da Sheets ko Microsoft 365. Kowane darasi yana ɗaukar kusan minti biyar, tare da aikin \"Gwada yanzu\". Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku haɗa kayan aikin tafiyar da ayyuka na mako don wata ƙungiya ta gaske ko ta atisaye: tsarin mako da aka jera bisa muhimmanci, tsarin aiki na dindindin (SOP) ɗaya don aikin da ake maimaitawa, bayanan taro tare da ayyukan yi, masu ɗaukar nauyi da ranakun ƙarewa, jadawalin ma'aikata ko masu sa kai na mako ɗaya, takardar kayayyaki da wuraren sake oda, da gajeriyar bitar ƙarshen mako da gyara ɗaya don mako mai zuwa.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Masu ƙananan kasuwanci, shugabannin aiki na lokaci (shift lead) da manajojin ofis, da masu kula da ƙungiyoyin sa kai, coci-coci da shirye-shiryen al'umma, waɗanda ke haɗa ayyuka, ma'aikata ko masu sa kai, taro da kayayyaki.",
    startingPoint: "Suna tafiyar da wurin daga ƙwaƙwalwa, jerin takarda, saƙonnin tes da kalanda; wataƙila suna amfani da takardar lissafi (spreadsheet) kuma sun taɓa gwada mataimakin AI. Kaɗan ne suka rubuta tsare-tsaren aiki, bayanan taro masu tsari ko wuraren sake oda.",
    gap: "Idan komai yana cikin kan mutum ɗaya, ayyuka suna faɗuwa, sababbin mutane suna koyo a hankali, kuma kayayyaki suna ƙarewa. Masu koyo suna buƙatar kayan aiki masu sauƙi na AI don tsari, tsare-tsaren aiki, taro, jadawali, kayayyaki da bitar mako, ta yadda aiki zai fi tafiya daidai kuma ya rage ɗaukar lokacinsu.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli",
      "Na'urori: waya ko kwamfuta; kwamfuta ta fi sauƙi don takardar lissafi",
      "Sirri: sunan farko ko alama kawai; babu bayanan lafiya, albashi ko sirrin ma'aikata a kayan AI",
      "Dokoki: dokokin aiki kan hutu da sa'o'in yara ƙanana sun bambanta; masu koyo su duba ofishin ƙwadago na jiharsu",
      "Lokaci: darussa na minti 5, kusan minti 60 gaba ɗaya, da ƙarin lokacin haɗa kayan aikin"
    ],
    prerequisites: "Babu. Masu koyo da ba su saba da mataimakan AI ba za su iya fara ɗaukar kwas na gabatarwa ga AI."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan kuna da jerin ayyuka mai rikitarwa da ainihin sa'o'in da kuke da su", action: "yin tsarin mako na kowace rana, bisa muhimmanci, da AI", standard: "tare da ayyuka uku mafi muhimmanci da aka keɓe musu lokaci a kalandarku" },
    { id: "O2", condition: "Don aikin da ƙungiyarku ke maimaitawa", action: "rubuta tsarin aiki na dindindin mai lambobi, da manufa, kayan aiki, matakai, bayanan tsaro da jerin dubawa", standard: "ta yadda sabon mutum zai iya bin sa ba tare da tsayawa ba" },
    { id: "O3", condition: "Bayan gajeren taro", action: "jera shawarwarin da aka yanke, ayyukan yi da tambayoyin da suka rage daga bayanan taron", standard: "kowane aikin yi yana da mai ɗaukar nauyi da ranar ƙarewa da aka amince da su, kuma an tura cikin kwana ɗaya" },
    { id: "O4", condition: "Idan kuna da lokutan aiki, lokacin da mutane ke samuwa da dokoki", action: "yin jadawalin ma'aikata ko masu sa kai na mako ɗaya da ke cike kowane lokacin aiki", standard: "ana bin iyakar sa'o'inku, ƙwarewar da ake buƙata da dokokin aiki" },
    { id: "O5", condition: "Idan kuna da kayayyakinku da saurin amfani da su", action: "yin takardar kayayyaki mai wuraren sake oda da dabarar lissafi (formula) da ke nuna REORDER", standard: "kowane kaya yana da wurin sake oda" },
    { id: "O6", condition: "A ƙarshen mako", action: "rubuta gajeriyar bitar nasarori, abubuwan da ba a yi ba da matsaloli, da zaɓar gyara ɗaya", standard: "cikin kusan minti 15, kuma an saka gyaran a tsarin mako mai zuwa" }
  ],
  chapters: [
    {
      name: "Babi na 1: Shirya kanku",
      lessons: [
        {
          objectives: ["O1"],
          title: "Tsara makonku da AI",
          minutes: 5,
          goal: "Mayar da jerin ayyuka mai rikitarwa zuwa tsarin mako bisa muhimmanci.",
          text: [
            "Dogon jerin ayyuka da ya cakuɗe yana sa komai ya zama kamar gaggawa ne. AI zai iya jera shi da sauri. Ku zuba kowane aiki a cikin hirar, sannan ku nemi ya jera ya kuma tsara.",
            "Prompt mai amfani: \"Ga jerin ayyukana na wannan mako. Ka raba su zuwa: dole a yi wannan mako, ya kamata a yi, za su iya jira, da za a iya ba wani. Sannan ka yi tsari na kowace rana. Ina da kusan sa'o'i 3 a rana don aikin ofis, kuma ranar Talata tana da yawan aikin karɓar kaya.\"",
            "Ku ne shugaban tsarin. Ku motsa duk abin da AI ya yi kuskure a kai, ku keɓe lokaci a kalandarku don ayyuka uku mafi muhimmanci, ku kuma bar wuri don abubuwan ba zato."
          ],
          steps: ["Ku rubuta kowane aiki, babba da ƙarami, a jeri ɗaya.", "Ku nemi AI ya raba su zuwa dole, ya kamata, za su iya jira da a ba wani.", "Ku faɗa masa ainihin sa'o'in da kuke da su da ranakunku masu aiki sosai.", "Ku gyara tsarin, sannan ku keɓe lokaci a kalandarku don ayyuka uku mafi muhimmanci."],
          words: [["Ba da fifiko (prioritize)", "yanke abin da ya fi muhimmanci da fara yin sa."], ["Ba wani aiki (delegate)", "miƙa aiki ga wani mutum."]],
          slides: [
            { title: "Ku zuba jerin", bullets: ["Kowane aiki, babba da ƙarami", "Wuri ɗaya, jeri ɗaya"] },
            { title: "Ku nemi AI ya jera shi", bullets: ["Dole a yi, ya kamata a yi", "Za su iya jira, za a iya ba wani", "Ku faɗa masa ainihin sa'o'inku"] },
            { title: "Tsarin naku ne", bullets: ["Ku gyara abin da AI ya yi kuskure", "Ku keɓe lokaci don ayyuka uku mafi muhimmanci", "Ku bar wuri don abubuwan ba zato"] }
          ],
          tryIt: "Ku rubuta cikakken jerin ayyukanku na wannan mako. Ku nemi mataimakin AI ya jera shi ya yi tsari na kowace rana da ainihin sa'o'inku, sannan ku gyara shi ku keɓe lokaci a kalanda don ayyuka uku mafi muhimmanci.",
          youCanNow: "mayar da jerin ayyuka mai rikitarwa zuwa tsarin mako bisa muhimmanci da AI.",
          quickCheck: [
            { objective: "O1", q: "A tsarin mako na wannan kwas, mene ne ma'anar \"a ba wani\"?", options: ["Ayyukan da kuke farawa", "Ayyukan da wani zai iya yi", "Ayyukan da kuke gogewa", "Ayyukan da dole a yi yau"], answer: 1, why: "Ayyukan \"a ba wani\" su ne waɗanda wani mutum zai iya yi." },
            { objective: "O1", q: "Tsarin AI ya sa babban aikinku ranar Talata, ranarku mafi yawan karɓar kaya. Me za ku yi?", options: ["Ku bi shi; AI ya fi sani", "Ku goge aikin", "Ku nemi AI sabon jerin ayyuka", "Ku motsa aikin zuwa rana mai sauƙi ku keɓe lokacin a kalandarku"], answer: 3, why: "Ku ne shugaban tsarin; ku gyara abin da AI ya yi kuskure a kai." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Rubuta tsarin aiki na dindindin (SOP)",
          minutes: 6,
          goal: "Mayar da yadda kuke yin aiki zuwa tsari a sarari, mataki-mataki, da kowa zai iya bi.",
          text: [
            "Tsarin aiki na dindindin (SOP) shi ne rubutattun matakai don aikin da ake maimaitawa: buɗe shago, tsabtace kicin, karɓar abokin hulɗa, ƙirga kuɗin aljihun kuɗi. Da SOP, sababbin ma'aikata ko masu sa kai suna koyo da sauri, kuma ana yin abubuwa hanya ɗaya kowane lokaci.",
            "Hanya mafi sauri: ku faɗa ko ku rubuta shi kamar yadda za ku bayyana wa sabon mutum, ko da ya rikice. Sannan ku tambayi AI: \"Ka mayar da wannan zuwa SOP mai lambobi, da take, manufa, kayan da ake buƙata, matakai na aiki ɗaya kowanne, bayanan tsaro da jerin dubawa na ƙarshe. Ka yi amfani da kalmomi masu sauƙi.\"",
            "Ku gwada shi: ku sa wani da bai taɓa yin aikin ba ya bi shi yayin da kuke kallo shiru. Duk lokacin da ya yi jinkiri, SOP ɗin yana buƙatar mataki mafi sarari. Ku rubuta kwanan wata, ku kuma faɗi wanda ke da alhakinsa."
          ],
          steps: ["Ku bayyana aikin da baki ko a rubuce; ko ya rikice, babu laifi.", "Ku nemi AI ya mayar da shi SOP mai lambobi da manufa, kayan aiki, matakai, bayanan tsaro da jerin dubawa.", "Ku duba kowane mataki ko daidai ne.", "Ku sa sabon mutum ya gwada shi.", "Ku gyara matakan da ba su da sarari, sannan ku rubuta kwanan wata ku sanya mai alhaki."],
          words: [["SOP", "standard operating procedure (tsarin aiki na dindindin): rubutattun matakai don aikin da ake maimaitawa."], ["Jerin dubawa (checklist)", "jerin abubuwan da ake yi musu alama don kada a manta da komai."]],
          slides: [
            { title: "Me yasa SOP", bullets: ["Sababbin mutane suna koyo da sauri", "Ana yin sa hanya ɗaya kowane lokaci"] },
            { title: "Daga bayanai masu rikitarwa zuwa SOP", bullets: ["Ku bayyana shi kamar ga sabon mutum", "AI yana tsara shi: manufa, kayan aiki, matakai", "Ku ƙara bayanan tsaro da jerin dubawa"] },
            { title: "Ku gwada shi", bullets: ["Sabon mutum ya bi shi", "Kowane jinkiri = mataki da ke buƙatar sarari", "Ku rubuta kwanan wata ku sanya mai alhaki"] }
          ],
          tryIt: "Ku zaɓi aiki ɗaya da kuke yi kowane mako. Ku bayyana shi da kalmominku, ku sa AI ya mayar da shi SOP, ku duba shi, sannan ku roƙi wani ya gwada bin sa.",
          youCanNow: "rubuta da gwada tsarin aiki na dindindin a sarari tare da taimakon AI.",
          quickCheck: [
            { objective: "O2", q: "Mene ne SOP?", options: ["Tsarin aiki na dindindin (standard operating procedure)", "Tsarin ƙarin lokacin ma'aikata", "Hanyar odar kayayyaki", "Jadawalin mutane"], answer: 0, why: "SOP tsarin aiki ne na dindindin: rubutattun matakai don aikin da ake maimaitawa." },
            { objective: "O2", q: "SOP ɗin da AI ya yi don rufe shago ya ce \"a kulle\" amma ya tsallake ƙofar baya. Me za ku yi?", options: ["Ku yi amfani da shi duk da haka", "Ku jefar da SOP ɗin", "Ku duba kowane mataki ku ƙara matakin da ya ɓace", "Ku bar sababbin ma'aikata su gano da kansu"], answer: 2, why: "Ku duba kowane mataki ko daidai ne kafin kowa ya yi amfani da SOP ɗin." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Mayar da taro zuwa ayyukan yi",
          minutes: 5,
          goal: "Gudanar da gajeren taro da amfani da AI don mayar da bayanai zuwa shawarwari da ayyukan yi.",
          text: [
            "Taro da yawa suna ƙarewa kowa yana gyaɗa kai, amma babu abin da ke faruwa. Maganin yana da sauƙi: kowane taro ya ƙare da ayyukan yi, kowanne da mai ɗaukar nauyi da ranar ƙarewa.",
            "Ku yi amfani da ajanda mai lokuta. Ku ɗauki gajerun bayanai, ko ku yi amfani da bayanan AI da ke cikin manhajar taro idan ƙungiyarku ta yarda kuma an sanar da kowa. Sannan ku liƙa bayanan a AI: \"Daga waɗannan bayanai, ka jera shawarwarin da aka yanke, ayyukan yi da mai ɗaukar nauyi da ranar ƙarewa, da tambayoyin da suka rage.\"",
            "Ku duba jerin kafin ku tura, domin AI yana iya hasashen mai ɗaukar nauyi ko ranar da ba a taɓa amincewa da su ba. Ku cire duk wani abu na sirri, kamar bayanan lafiya ko albashin ma'aikata, kafin ku raba. Ku tura shi cikin kwana ɗaya."
          ],
          steps: ["Ku rubuta gajeriyar ajanda mai lokuta.", "Ku ɗauki bayanai ko ku yi amfani da bayanan AI da aka yarda da su, an sanar da kowa.", "Ku nemi AI ya fitar da shawarwari, ayyukan yi da tambayoyin da suka rage.", "Ku duba masu ɗaukar nauyi da ranaku; ku cire bayanan sirri.", "Ku tura jerin ayyukan yi cikin kwana ɗaya."],
          words: [["Ajanda (agenda)", "jerin batutuwan taro, bisa tsari."], ["Aikin yi (action item)", "aiki daga taro mai mai ɗaukar nauyi da ranar ƙarewa."]],
          slides: [
            { title: "Ku ƙare da aiki", bullets: ["Kowane aiki yana da mai ɗaukar nauyi", "Kowane aiki yana da ranar ƙarewa"] },
            { title: "Ku bar AI ya fitar da su", bullets: ["Shawarwarin da aka yanke", "Ayyukan yi", "Tambayoyin da suka rage"] },
            { title: "Kafin ku tura", bullets: ["Ku duba masu ɗaukar nauyi da ranaku", "Ku cire bayanan sirri", "Ku tura cikin kwana ɗaya"] }
          ],
          tryIt: "Ku ɗauki bayanai a taronku na gaba, ko ku rubuta bayanai daga wani taro na kwanan nan. Ku yi amfani da AI don fitar da shawarwari da ayyukan yi tare da masu ɗaukar nauyi da ranaku, ku duba su, sannan ku rubuta saƙon da za ku tura.",
          youCanNow: "mayar da bayanan taro zuwa ayyukan yi da aka duba, masu masu ɗaukar nauyi da ranakun ƙarewa.",
          quickCheck: [
            { objective: "O3", q: "Me ke sa taro ya ƙare da aiki na gaske?", options: ["Doguwar tattaunawa", "Kowa yana gyaɗa kai", "Wani taro washegari", "Ayyukan yi, kowanne da mai ɗaukar nauyi da ranar ƙarewa"], answer: 3, why: "Ayyukan yi masu masu ɗaukar nauyi da ranaku suna mayar da magana zuwa aiki." },
            { objective: "O3", q: "Bayanan taronku sun ambaci hutun jinyar wani ma'aikaci. Me za ku yi kafin ku raba taƙaitawar AI?", options: ["Ku raba ta yadda take", "Ku cire bayanan lafiya na sirri", "Ku ƙara bayanai", "Ku liƙa ta a allon sanarwa"], answer: 1, why: "Ku cire bayanan sirri, kamar lafiya ko albashi, kafin ku raba bayanai." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Shirya kanku",
        questions: [
          { objective: "O1", q: "Idan kuna neman AI ya tsara makonku, me ya kamata ku faɗa masa?", options: ["Kalmar sirrin bankinku", "Babu komai; zai yi hasashe", "Ainihin sa'o'in da kuke da su da ranakunku masu aiki sosai", "Adireshin gidajen ma'aikatanku"], answer: 2, why: "Ainihin iyakoki suna sa tsarin ya zama mai yiwuwa." },
          { objective: "O2", q: "Mene ne SOP?", options: ["Rubutattun matakai don aikin da ake maimaitawa", "Wani nau'in harajin albashi", "Saƙo a kafofin sada zumunta", "Rahoton tallace-tallace"], answer: 0, why: "Tsare-tsaren aiki na dindindin suna sa a iya maimaita ayyuka." },
          { objective: "O2", q: "Sabon mai sa kai ya yi jinkiri a mataki na 4 na SOP ɗinku. Me hakan yake nuna muku?", options: ["Mai sa kan ba shi da wayo", "SOP ba sa aiki", "Ku goge SOP ɗin", "Mataki na 4 yana buƙatar ƙarin sarari"], answer: 3, why: "Jinkiri yana nuna inda matakai ba su da sarari." },
          { objective: "O3", q: "Kowane aikin yi ya kamata ya kasance da:", options: ["Doguwar labari", "Mai ɗaukar nauyi da ranar ƙarewa", "Lambar sirri", "Babu bayani"], answer: 1, why: "Masu ɗaukar nauyi da ranaku suna sa ayyuka su faru." },
          { objective: "O3", q: "AI ya jera \"Maria za ta gama kasafin kuɗi kafin Juma'a\" amma babu wanda ya amince da hakan. Me za ku yi?", options: ["Ku tura duk da haka", "Ku gyara kafin ku tura", "Ku ba Maria aikin ba tare da tambayar ta ba", "Ku goge duk bayanan"], answer: 1, why: "AI yana iya yin hasashe; ku duba masu ɗaukar nauyi da ranaku." }
        ]
      }
    },
    {
      name: "Babi na 2: Sa ayyuka su fi tafiya daidai",
      lessons: [
        {
          objectives: ["O4"],
          title: "Tsara jadawalin ma'aikata ko masu sa kai",
          minutes: 5,
          goal: "Yi amfani da AI da takardar lissafi don yin jadawalin mako ɗaya mai adalci da ke cike kowane lokacin aiki.",
          text: [
            "Tsara jadawali kamar wasan wuyar warwarewa ne: wa ke samuwa, waɗanne lokutan aiki ke buƙatar mutane nawa, kuma wa ke da wace ƙwarewa. AI zai iya yin daftarin farko cikin daƙiƙoƙi.",
            "Ku ba shi dokokin ba tare da bayanan sirri ba: \"Ka yi teburin jadawalin mako ɗaya. Lokutan aiki: Litinin-Juma'a 8-12 da 12-4, mutane biyu kowanne. Asabar 9-1, mutane uku. Samuwa: Mutum A ranakun aiki kawai, Mutum B ba ranar Litinin ba... Kowane mutum kada ya wuce sa'o'i 20. Aƙalla mutum ɗaya mai horon sarrafa abinci (food-handler) a kowane lokacin aiki.\"",
            "Ku duba daftarin da dokokinku da duk wata dokar aiki da ta shafe ku, kamar hutu da sa'o'in yara ƙanana; ofishin ƙwadago na jiharku yana jera su. Ku saka jadawalin ƙarshe a takardar lissafi da ake rabawa don kowa ya ga canje-canje."
          ],
          steps: ["Ku jera lokutan aiki da mutane nawa kowanne ke buƙata.", "Ku jera lokacin da kowane mutum ke samuwa da sunan farko ko alama.", "Ku jera dokoki: iyakar sa'o'i, ƙwarewar da ake buƙata.", "Ku nemi AI teburin jadawali.", "Ku duba dokoki da dokokin aiki, sannan ku raba shi a takardar lissafi."],
          words: [["Lokacin aiki (shift)", "ƙayyadadden lokacin aiki."], ["Samuwa (availability)", "lokutan da mutum zai iya aiki ko sa kai."]],
          slides: [
            { title: "Jadawali wasan wuyar warwarewa ne", bullets: ["Samuwa, lokutan aiki, ƙwarewa"] },
            { title: "Ku ba AI dokokin", bullets: ["Lokutan aiki da mutanen da ake buƙata", "Samuwa da sunan farko ko alama", "Iyakar sa'o'i da ƙwarewar da ake buƙata"] },
            { title: "Ku duba ku raba", bullets: ["Ya dace da dokokinku", "Ku duba dokokin aiki na jiha: hutu, yara ƙanana", "Ku raba a takardar lissafi"] }
          ],
          tryIt: "Ku rubuta lokutan aiki, samuwa da dokoki don wata ƙungiya ta gaske ko ta atisaye ta aƙalla mutane huɗu. Ku sa AI ya yi daftarin jadawalin mako, ku duba kowace doka, ku gyara duk wata matsala.",
          youCanNow: "yin da duba jadawalin mako mai adalci tare da taimakon AI.",
          quickCheck: [
            { objective: "O4", q: "Me ya kamata ku ba AI idan kuna neman jadawali?", options: ["Adireshin gida da wayar kowa", "Kalmar \"jadawali\" kawai", "Lokutan aiki, sunayen farko ko alamomi, samuwa da dokoki", "Albashin ma'aikata"], answer: 2, why: "AI yana buƙatar lokutan aiki, samuwa da dokoki, amma babu bayanan sirri." },
            { objective: "O4", q: "Jadawalin AI ya bar ranar Asabar babu mai horon sarrafa abinci. Me za ku yi?", options: ["Ku canja shi don kowane lokacin aiki ya sami mai horo", "Ku bar shi; rana ɗaya ce kawai", "Ku soke ranar Asabar", "Ku nemi ma'aikatan da ba su da horo su yi hasashe"], answer: 0, why: "Ku duba daftarin da kowace doka, har da ƙwarewar da ake buƙata." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Bin diddigin kayayyaki da sake oda",
          minutes: 5,
          goal: "Yi takardar kayayyaki mai wuraren sake oda don kada kayanku su taɓa ƙarewa.",
          text: [
            "Ƙarewar kofuna, safar hannu, fulawa ko kunzugun yara (diaper) yana tsayar da aiki. Takardar kayayyaki mai sauƙi tana hana hakan. Rukunai (columns): kaya, ma'auni, adadin da ke hannu, amfanin mako, wurin sake oda, adadin sake oda da mai kawo kaya.",
            "Wurin sake oda shi ne adadin da ke faɗa muku ku yi oda yanzu. Doka mai sauƙi: amfanin mako sau adadin makonnin da kawo kaya ke ɗauka, da ɗan ƙari. Idan kuna amfani da kwalaye 10 a mako kuma kawo kaya yana ɗaukar mako 1, ku sake oda idan kun kai kusan kwalaye 12.",
            "Ku nemi AI dabarar lissafi (formula) da ke nuna kayan da za a sake oda: \"A Google Sheets, ka rubuta formula da ke nuna REORDER idan adadin da ke hannu ya kai ko ya gaza wurin sake oda.\" Ku ƙirga kayayyaki rana ɗaya kowane mako ku sabunta takardar."
          ],
          steps: ["Ku jera kaya da ma'auni da mai kawo kaya.", "Ku ƙiyasta amfanin mako na kowanne.", "Ku sanya wurin sake oda: amfanin mako x makonnin kawo kaya + ɗan ƙari.", "Ku nemi AI formula da ke nuna REORDER.", "Ku ƙirga kowane mako a rana ɗaya."],
          words: [["Kayan ajiya (inventory)", "kayayyaki ko kayan sayarwa da kuke da su a hannu."], ["Wurin sake oda (reorder point)", "adadin da ke faɗa muku lokaci ya yi da za ku ƙara oda."]],
          slides: [
            { title: "Rukunan takardar kayayyaki", bullets: ["Kaya, ma'auni, adadin da ke hannu", "Amfanin mako, wurin sake oda", "Adadin sake oda, mai kawo kaya"] },
            { title: "Wurin sake oda", bullets: ["Amfanin mako x makonnin kawo kaya + ƙari", "10 a mako, kawo kaya mako 1: kusan 12"] },
            { title: "Ku bar takardar ta gargaɗe ku", bullets: ["Formula tana nuna REORDER", "Ku ƙirga rana ɗaya kowane mako"] }
          ],
          tryIt: "Ku yi takardar kayayyaki mai aƙalla kaya takwas, ku sanya wuraren sake oda, ku ƙara formula da AI ya rubuta da ke nuna kayan da za a sake oda.",
          youCanNow: "bin diddigin kayayyaki da wuraren sake oda da alamar sake oda ta atomatik.",
          quickCheck: [
            { objective: "O5", q: "Mene ne wurin sake oda?", options: ["Adireshin mai kawo kaya", "Adadin da ke hannu da ke faɗa muku ku yi oda yanzu", "Farashin kaya", "Ranar da shago ke buɗewa"], answer: 1, why: "Wurin sake oda shi ne adadin da ke faɗa muku ku ƙara oda." },
            { objective: "O5", q: "Kuna amfani da fakitin safar hannu 20 a mako kuma kawo kaya yana ɗaukar mako 1. Kusan yaushe ya kamata ku sake oda?", options: ["Idan kuna da fakiti 0", "Idan kuna da fakiti 2", "Idan kuna da fakiti 100", "Idan kuna da kusan fakiti 22 zuwa 24"], answer: 3, why: "Amfanin mako sau makonnin kawo kaya, da ɗan ƙari, yana ba da kusan fakiti 22 zuwa 24." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Bitar mako da ingantawa",
          minutes: 5,
          goal: "Rubuta gajeriyar bitar ƙarshen mako da zaɓar gyara ɗaya.",
          text: [
            "Bitar minti 15 a ƙarshen kowane mako tana hana ƙananan matsaloli girma. Ku duba abin da aka yi, abin da ba a yi ba, abin da ya lalace, da abin da za a canja.",
            "Ku ba AI tsarinku, ayyukan yi da kuka gama da wasu bayanai, sannan ku tambaya: \"Ka rubuta gajeriyar bitar ayyuka ta mako: nasarori, abubuwan da ba a yi ba, matsaloli, da gyara ɗaya don mako mai zuwa.\" Ku gyara ta don ta zama gaskiya kuma ta yi adalci ga ƙungiyarku.",
            "Ku zaɓi gyara ɗaya kawai a kowane mako, kamar sabon SOP, gyaran jadawali ko canjin sake oda. Ƙananan gyare-gyaren mako-mako suna haɗuwa su sa aiki ya fi tafiya daidai sosai cikin 'yan watanni."
          ],
          steps: ["Ku tattara tsarin makonku, ayyukan yi da bayanai.", "Ku nemi AI gajeriyar bita: nasarori, abubuwan da ba a yi ba, matsaloli, gyara ɗaya.", "Ku gyara ta don gaskiya da adalci.", "Ku zaɓi gyara ɗaya ku saka shi a tsarin mako mai zuwa."],
          words: [["Bita (review)", "duba baya don koyon abin da ya yi aiki da wanda bai yi ba."], ["Ci gaba da ingantawa (continuous improvement)", "yin ƙananan canje-canje akai-akai don a fi kyau a hankali."]],
          slides: [
            { title: "Minti 15 a mako", bullets: ["Abin da aka yi", "Abin da ba a yi ba", "Abin da ya lalace"] },
            { title: "AI yana rubuta daftarin bitar", bullets: ["Nasarori, abubuwan da ba a yi ba, matsaloli", "Gyara ɗaya", "Ku gyara don gaskiya da adalci"] },
            { title: "Gyara ɗaya a mako", bullets: ["Sabon SOP, gyaran jadawali ko canjin sake oda", "Ƙananan gyare-gyare suna haɗuwa"] }
          ],
          tryIt: "Aikin ƙarshe: ku rubuta bitar ƙarshen makonku tare da taimakon AI ku zaɓi gyara ɗaya. Tare da tsarin makonku, SOP, ayyukan yi, jadawali da takardar kayayyaki, wannan yana kammala kayan aikin tafiyar da ayyukanku na mako.",
          youCanNow: "tafiyar da ayyukan mako tare da taimakon AI da ci gaba da inganta su.",
          quickCheck: [
            { objective: "O6", q: "Me bitar ƙarshen mako ke ƙunshe da shi?", options: ["Nasarori, abubuwan da ba a yi ba, matsaloli da gyara ɗaya", "Abin da ya lalace kawai", "Kuskuren kowane ma'aikaci", "Kasafin kuɗin shekara mai zuwa"], answer: 0, why: "Gajeriyar bita tana ƙunshe da nasarori, abubuwan da ba a yi ba, matsaloli da gyara ɗaya." },
            { objective: "O6", q: "Bitar AI ta ɗora laifin jinkirin kawo kaya kan wani mai sa kai, alhali laifin mai kawo kaya ne. Me za ku yi?", options: ["Ku tura ta yadda aka rubuta", "Ku zaɓi gyare-gyare biyar a maimakon haka", "Ku gyara ta don ta zama gaskiya kuma ta yi adalci ga ƙungiyar", "Ku tsallake bitar wannan mako"], answer: 2, why: "Ku gyara daftarin AI don ya zama gaskiya kuma ya yi adalci kafin ku raba shi." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Sa ayyuka su fi tafiya daidai",
        questions: [
          { objective: "O4", q: "Idan kuna ba AI bayanan jadawali, me ya kamata ku yi amfani da shi don mutane?", options: ["Cikakkun lambobin Social Security", "Adireshin gidaje", "Bayanan asibiti", "Sunayen farko ko alamomi, babu bayanan sirri"], answer: 3, why: "Jadawali yana buƙatar samuwa, ba bayanan sirri ba." },
          { objective: "O4", q: "A ina za ku duba dokoki kan hutu da sa'o'in aikin yara ƙanana?", options: ["Ofishin ƙwadago na jiharku", "Wani shafin blog kawai", "Hirar AI kaɗai", "Abokin hamayya"], answer: 0, why: "Dokokin aiki suna fitowa daga hukumomin ƙwadago na hukuma." },
          { objective: "O5", q: "Kuna amfani da kwalaye 10 a mako kuma kawo kaya yana ɗaukar mako 1. Wurin sake oda mai hankali shi ne kusan:", options: ["Kwalaye 0", "Kwali 1", "Kwalaye 12", "Kwalaye 100"], answer: 2, why: "Amfanin mako x makonnin kawo kaya da ɗan ƙari." },
          { objective: "O6", q: "Bitar mako tana ɗaukar tsawon lokaci nawa a wannan kwas?", options: ["Yini guda", "Sa'o'i uku", "Babu lokaci; ku tsallake ta", "Kusan minti 15"], answer: 3, why: "Gajeriyar bitar mako tana sa matsaloli su kasance ƙanana." },
          { objective: "O6", q: "Gyare-gyare nawa ya kamata ku zaɓa kowane mako?", options: ["Ashirin", "Babu ko ɗaya", "Ɗaya", "Komai lokaci ɗaya"], answer: 2, why: "Gyara ɗaya a mako mai yiwuwa ne kuma yana haɗuwa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI don Ƙara Yawan Aiki da Tafiyar da Ayyuka",
    questions: [
      { objective: "O1", q: "Tafiyar da ayyuka (operations) tana nufin:", options: ["Tiyata kawai", "Aikin yau da kullum da ke sa ƙungiya ta ci gaba da aiki", "Tallace-tallace kawai", "Tallata kaya kawai"], answer: 1, why: "Jadawali, kayayyaki, tsare-tsaren aiki da bibiya." },
      { objective: "O1", q: "Idan AI ya jera ayyukanku, wane rukuni ne \"a ba wani\"?", options: ["Ayyukan da wani zai iya yi", "Ayyukan da dole ku yi yau", "Ayyukan da za a goge", "Ayyukan da AI zai yi shi kaɗai"], answer: 0, why: "\"A ba wani\" yana nufin miƙa aiki ga wani." },
      { objective: "O1", q: "Wane ne ke da magana ta ƙarshe kan tsarin makonku?", options: ["AI", "Babu kowa", "Ku", "Mai kawo muku kaya"], answer: 2, why: "Ku ne kuke gyarawa kuma tsarin naku ne." },
      { objective: "O2", q: "SOP yana taimakawa domin:", options: ["Ana yin ayyuka hanya ɗaya kuma sababbin mutane suna koyo da sauri", "Yana maye gurbin dukkan ma'aikata", "Ana buƙatar sa a kowane imel", "Yana sa ayyuka su yi jinkiri"], answer: 0, why: "Wannan ita ce manufar SOP." },
      { objective: "O2", q: "Hanya mafi sauri ta fara SOP ita ce:", options: ["Kwafe SOP na wani kamfani", "Jiran mai ba da shawara", "Ƙin rubuta shi", "Bayyana aikin da kalmominku, sannan AI ya tsara shi"], answer: 3, why: "Iliminku tare da tsarawar AI yana da sauri." },
      { objective: "O2", q: "SOP mai kyau ya ƙunshi:", options: ["Take kawai", "Manufa, kayan aiki, matakai masu lambobi, bayanan tsaro da jerin dubawa", "Albashin ma'aikata", "Lambobin wayar abokan hulɗa"], answer: 1, why: "Waɗannan sassa ne ke sa ya cika." },
      { objective: "O2", q: "Yaya ake gwada SOP?", options: ["Ku karanta shi sau ɗaya da kanku", "Ku sa sabon mutum ya bi shi yayin da kuke kallo", "Ku tambayi AI ko yana da kyau", "Kada ku gwada shi"], answer: 1, why: "Sabon mutum yana bayyana matakan da ba su da sarari." },
      { objective: "O3", q: "Ajanda ita ce:", options: ["Jerin abin ciye-ciye na taro", "Takardar albashi", "Wani nau'in SOP", "Jerin batutuwan taro, bisa tsari"], answer: 3, why: "Ajanda tana sa taro ya mai da hankali." },
      { objective: "O3", q: "Kafin ku yi amfani da bayanan taro na AI, ya kamata ku:", options: ["Tabbatar an yarda da shi kuma an sanar da kowa", "Yi rikodi a ɓoye", "Raba albashin ma'aikata", "Tsallake ajanda"], answer: 0, why: "Ya kamata mutane su sani idan ana rikodin taro ko ana rubuta shi." },
      { objective: "O3", q: "Kafin ku tura bayanan taro da AI ya yi, ku cire:", options: ["Dukkan ayyukan yi", "Ranar taron", "Bayanan sirri kamar lafiya ko albashin ma'aikata", "Shawarwarin da aka yanke"], answer: 2, why: "Bai kamata a yaɗa bayanan sirri ba." },
      { objective: "O3", q: "Ya kamata a tura ayyukan yi:", options: ["Bayan wata ɗaya", "Ba za a taɓa ba", "Sai idan an tambaya kawai", "Cikin kwana ɗaya"], answer: 3, why: "Bibiya da sauri tana sa aiki ya ci gaba." },
      { objective: "O4", q: "Lokacin aiki (shift) shi ne:", options: ["Maɓallin madannin kwamfuta kawai", "Wani nau'in kaya", "Ƙayyadadden lokacin aiki", "Taro"], answer: 2, why: "Ana gina jadawali daga lokutan aiki." },
      { objective: "O4", q: "Daftarin jadawalin AI ya ba mutum ɗaya sa'o'i 30, amma iyakarku 20 ce. Ya kamata ku:", options: ["Bar shi", "Gyara jadawalin don ya bi dokarku", "Yi watsi da dokar", "Cire mutumin"], answer: 1, why: "Koyaushe ku duba daftarin AI da dokokinku." },
      { objective: "O4", q: "Me yasa za a raba jadawalin ƙarshe a takardar lissafi?", options: ["Kowa yana ganin sababbin canje-canje", "Don a ɓoye shi", "Doka ta tilasta takardar lissafi", "Don kada kowa ya gan shi"], answer: 0, why: "Takardar da ake rabawa tana sa kowa ya san abin da ke faruwa." },
      { objective: "O5", q: "Kayan ajiya (inventory) yana nufin:", options: ["Jerin ma'aikata", "Bayanan taro", "Kayayyaki ko kayan sayarwa da ke hannu", "Ra'ayoyin abokan ciniki"], answer: 2, why: "Kayan ajiya shi ne abin da kuke da shi a ajiye." },
      { objective: "O5", q: "Wurin sake oda yana faɗa muku:", options: ["Lokacin da ya yi da za ku ƙara oda", "Farashin kaya", "Wane ne mai kawo kaya", "Yadda ake dafa shi"], answer: 0, why: "Yana jawo sabon oda." },
      { objective: "O5", q: "Formula da ke nuna REORDER tana taimakawa ta hanyar:", options: ["Yin odar kaya da katinku ta atomatik", "Goge takardar", "Canja masu kawo kaya", "Nuna kayan da suka yi ƙasa ta atomatik"], answer: 3, why: "Takardar tana gargaɗe ku idan kaya sun yi ƙasa." },
      { objective: "O5", q: "Sau nawa ya kamata ku ƙirga kayayyaki?", options: ["Sau ɗaya a shekara", "Kowane mako a rana ɗaya", "Ba za a taɓa ba", "Sai idan sun ƙare kawai"], answer: 1, why: "Ƙirga akai-akai yana sa takardar ta zama daidai." },
      { objective: "O6", q: "Bitar mako tana ƙunshe da:", options: ["Nasarori kawai", "Nasarori, abubuwan da ba a yi ba, matsaloli da gyara ɗaya", "Ɗora laifi kawai", "Babu komai a rubuce"], answer: 1, why: "Bita mai daidaito tana kawo ingantawa." },
      { objective: "O6", q: "Yin ƙananan canje-canje akai-akai don a fi kyau ana kiransa:", options: ["Ba wani aiki", "Kayan ajiya", "Tsara jadawali", "Ci gaba da ingantawa"], answer: 3, why: "Ƙananan gyare-gyare akai-akai suna haɗuwa." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [1, 2, 3, 6, 8, 9, 12, 15, 17, 18]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Tsarin mako", objective: "O1", notYet: "Ba a jera ayyuka ba, ko tsarin bai kula da ainihin sa'o'in da ake da su ba.", meets: "An raba ayyuka zuwa dole, ya kamata, za su iya jira da a ba wani, tare da tsari na kowace rana da ya dace da ainihin sa'o'i.", exceeds: "An keɓe lokaci a kalanda don ayyuka uku mafi muhimmanci, tare da wuri don abubuwan ba zato." },
      { name: "Tsarin aiki na dindindin (SOP)", objective: "O2", notYet: "Matakai ba su da sarari ko ba su bi tsari ba, ko babu jerin dubawa.", meets: "Take, manufa, kayan aiki, matakai masu lambobi na aiki ɗaya kowanne, bayanan tsaro, jerin dubawa, kwanan wata da mai alhaki.", exceeds: "Sabon mutum ya gwada shi kuma an gyara matakan da ba su da sarari." },
      { name: "Ayyukan yi daga taro", objective: "O3", notYet: "Ayyukan yi ba su da mai ɗaukar nauyi ko ranar ƙarewa.", meets: "Shawarwari, ayyukan yi masu masu ɗaukar nauyi da ranakun da aka amince da su, da tambayoyin da suka rage, an cire bayanan sirri.", exceeds: "An tura cikin kwana ɗaya, bayan an duba an gyara masu ɗaukar nauyi ko ranakun da AI ya yi hasashe." },
      { name: "Jadawali", objective: "O4", notYet: "Akwai lokacin aiki da babu kowa, ko an karya wata doka.", meets: "Kowane lokacin aiki yana da mutane, an bi iyakar sa'o'i da ƙwarewa, an raba a takardar lissafi.", exceeds: "Ya rubuta dokokin aikin da aka duba a ofishin ƙwadago na jiha." },
      { name: "Takardar kayayyaki", objective: "O5", notYet: "Babu wuraren sake oda.", meets: "Kowane kaya yana da amfanin mako, wurin sake oda da formula da ke nuna REORDER.", exceeds: "Ya haɗa da mai kawo kaya da ƙayyadadden rana kowane mako don ƙirga." },
      { name: "Bitar mako", objective: "O6", notYet: "Babu bita, ko ba a zaɓi gyara ba.", meets: "Gajeriyar bita mai adalci ta nasarori, abubuwan da ba a yi ba da matsaloli, tare da gyara ɗaya.", exceeds: "Gyaran ya riga ya shiga tsarin mako mai zuwa." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Ƙungiyoyin da suka rubuta aƙalla SOP uku kuma suke amfani da su cikin kwanaki 60 (binciken biyo baya)",
      "Raguwar ƙarewar muhimman kayayyaki cikin kwanaki 60 bayan kwas ɗin",
      "Masu kasuwanci da manajoji da suka ce sun ajiye sa'o'i a kowane mako kan tsari da haɗa kai"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai intanet",
      "Mataimakin AI kyauta (ChatGPT, Microsoft Copilot ko Google Gemini)",
      "Kalanda da takardar lissafi (Google Sheets ko Excel)",
      "Jerin ayyuka na gaske, aikin da ake maimaitawa, da jerin kayayyaki daga ƙungiyar mai koyo",
      "Kusan minti 60 don darussa da gwaje-gwaje, da ƙarin lokacin haɗa kayan aikin"
    ],
    facilitatorNotes: [
      "Ku yi gwajin farko tare, sannan ku yi babi ɗaya a kowane zama; ku gina formula ta sake oda a allon da kowa ke gani.",
      "Ku sa masu koyo su musanya SOP ɗinsu, kowa ya bi matakan ɗan'uwansa don gano waɗanda ba su da sarari.",
      "Ku tunatar da masu koyo su yi amfani da sunan farko ko alama kawai, kuma kada su taɓa saka bayanan lafiya ko albashin ma'aikata a AI.",
      "Ku nuna wa masu koyo ofishin ƙwadago na jiharsu don dokokin hutu da sa'o'in yara ƙanana; kada ku ba da shawarar shari'a.",
      "Ku ba da maki ga kayan aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
