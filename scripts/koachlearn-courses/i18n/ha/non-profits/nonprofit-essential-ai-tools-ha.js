"use strict";

// Koach Learn course, Hausa (ha) translation of non-profits/nonprofit-essential-ai-tools.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "nonprofit-essential-ai-tools-ha",
  lang: "ha",
  translationOf: "nonprofit-essential-ai-tools",
  category: "Non Profits",
  name: "Muhimman Kayan AI ga Ƙungiyoyin Sa-kai da Yadda Ake Amfani da Su",
  skills: "Zaɓar kayan AI da ya dace da aiki, Nemo shirye-shiryen fasaha na ƙungiyoyin sa-kai, Taƙaita tarurruka da takardu, Yin takardun talla da hotuna da AI, Gina ƙaramin kundin kayan aiki ga ƙungiyarku",
  outcome: "zaɓar kayan AI kyauta ko mai rangwame ga ƙungiyoyin sa-kai da ya dace da aiki, amfani da mataimakin hira (chat assistant) don mayar da rubutun taro marasa tsari zuwa taƙaitaccen bayani mai sarari tare da ayyukan da za a yi, amfani da kayan zane (design tool) don yin takardar tallar neman masu sa-kai, da rubuta katin kayan aiki mai shafi ɗaya da ƙungiyarku za ta bi.",
  about: [
    "Wannan kwas ɗin na ma'aikata da masu sa-kai ne a ƙungiyoyin sa-kai da na addini, waɗanda ke son gajeren jerin kayan AI masu amfani da sanin yadda ake amfani da kowanne.",
    "Za ku koyi nau'o'i huɗu na kayan AI da yawancin ƙungiyoyin sa-kai ke buƙata, inda za ku sami shirye-shiryen Google da Microsoft na ƙungiyoyin sa-kai, da yadda ake yin ayyuka biyu na gaske da AI: taƙaitaccen bayanin taro da takardar tallar neman masu sa-kai.",
    "Kowane darasi yana ɗaukar kusan minti biyar kuma yana ƙarewa da aikin hannu. Farashi da shirye-shirye suna canjawa, don haka kwas ɗin yana nuna muku shafukan hukuma da za ku duba kafin ku yi rajista. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku yi \"katin kayan AI\" (AI toolkit card) mai shafi ɗaya ga ƙungiyarku wanda ke ambaton mataimakin hira ɗaya, kayan ofis (office suite) ɗaya da kayan zane ɗaya, ya faɗi abin da kowanne yake yi da abin da ba za a taɓa saka a cikinsa ba, sannan ku haɗa abubuwa biyu da kuka yi da su: taƙaitaccen bayanin taro tare da jerin ayyukan da za a yi (daga rubutun da ba su da bayanan sirri) da takardar tallar neman masu sa-kai.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Ma'aikata da masu sa-kai a ƙungiyoyin sa-kai da na addini waɗanda ke son gajeren jerin kayan AI masu amfani da sanin yadda ake amfani da kowanne, sau da yawa a ƙananan ƙungiyoyi da ba su da ma'aikatan fasahar sadarwa (IT).",
    startingPoint: "Suna amfani da imel, takardu da waya kowace rana, kuma wataƙila sun gwada mataimakin hira. Yawancinsu ba su san waɗanne shirye-shiryen fasaha na ƙungiyoyin sa-kai suka cancanta ba, ko yadda ake shirya kayan aiki lafiya don ƙungiya.",
    gap: "Ƙananan ƙungiyoyi sau da yawa suna biyan kuɗin kayan da za su iya samu kyauta ko da rangwame, suna amfani da asusun kansu da ke tafiya tare da masu sa-kai, kuma suna ɓata awanni kan rubutun taro da takardun talla. Masu koyo suna buƙatar ƙananan kayan aiki masu aminci da katin ƙungiya da ke nuna wa kowa yadda ake amfani da su.",
    constraints: [
      "Kasafin kuɗi: kayan aiki kyauta ko masu rangwame ga ƙungiyoyin sa-kai kawai",
      "Farashi da ƙa'idojin shirye-shirye suna canjawa; masu koyo suna duba shafukan hukuma kafin su nema",
      "Sirri: babu bayanan sirri na masu ba da gudummawa, masu sa-kai ko abokan hulɗa a kowane kayan aiki sai dai idan shugabanni sun amince",
      "Naɗar taro yana buƙatar amincewar kowa; hotunan yara suna buƙatar izinin rubutacce daga iyaye ko masu kula da su",
      "Lokaci: kusan minti 60 gaba ɗaya, a darussa na minti 5"
    ],
    prerequisites: "\"Gabatarwa ga AI don Ƙungiyoyin Sa-kai\", ko ɗan sanin amfani da mataimakin AI."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku wani aikin ƙungiyar sa-kai", action: "zaɓar nau'in kayan AI da ya dace da shi: mataimakin hira, kayan ofis, kayan zane ko kayan taro da rubutu", standard: "kuna samun aƙalla 4 cikin 5 daidai" },
    { id: "O2", condition: "Ta amfani da shafukan hukuma na shirye-shiryen", action: "gane waɗanne shirye-shiryen fasaha na ƙungiyoyin sa-kai ƙungiyarku za ta iya cancanta, da abin da kuke buƙata don nema", standard: "tare da duba sharuɗɗan yanzu a shafin hukuma" },
    { id: "O3", condition: "Idan ƙungiyarku ta fara amfani da wani kayan aiki", action: "shirya shi da asusun ƙungiya, shiga mataki biyu (two-step sign-in) da duba saitunan sirrinsa", standard: "ba tare da wani bayanin sirri ya shiga ba sai dai idan shugabanni sun amince" },
    { id: "O4", condition: "Idan aka ba ku rubutun taro marasa tsari", action: "cire bayanan sirri da amfani da mataimakin hira don rubuta taƙaitaccen bayani tare da teburin ayyukan da za a yi", standard: "tare da duba kowane hukunci da kwanan wata da rubutunku" },
    { id: "O5", condition: "Idan aka ba ku wani taron masu sa-kai", action: "ƙirƙirar takardar tallar neman masu sa-kai da rubutun AI da samfurin kayan zane", standard: "tare da duba kwanan wata, lokaci, wuri da lambar tuntuɓa, da hotunan da aka ba da izini kawai" },
    { id: "O6", condition: "Domin ƙungiyarku", action: "rubuta katin kayan aiki mai shafi ɗaya da ke ambaton kowane kayan da aka amince da shi, abin da yake yi da abin da ba za a taɓa saka a cikinsa ba", standard: "tare da ƙara mafi kyawun prompts ɗinku da sanya ranar sake dubawa" }
  ],
  chapters: [
    {
      name: "Babi na 1: Sanin kayan aikinku",
      lessons: [
        {
          objectives: ["O1"],
          title: "Nau'o'i huɗu na kayan AI da ƙungiyar sa-kai ke amfani da su",
          minutes: 4,
          goal: "Haɗa aikin ƙungiyar sa-kai da nau'in kayan AI da ya dace.",
          text: [
            "Yawancin aikin AI na ƙungiyoyin sa-kai ya shiga nau'o'i huɗu na kayan aiki. Mataimakan hira (ChatGPT, Microsoft Copilot, Google Gemini) suna rubutu, bayani da taƙaitawa. Kayan ofis (Microsoft 365, Google Workspace) suna da AI a cikin imel, takardu da teburan lissafi (spreadsheets).",
            "Kayan zane (kamar Canva ko Adobe Express) suna taimakawa wajen yin takardun talla, rubuce-rubucen kafofin sada zumunta da hotunan bayani (slides), sau da yawa da fasalolin AI. Kayan taro da rubutu suna iya naɗar taro ko rubuta abin da aka faɗa, kuma su rubuta daftarin taƙaitawa, amma ku yi amfani da su ne kawai idan kowa a taron ya amince.",
            "Ku fara da kayan aiki ɗaya daga kowane nau'i da ƙungiyarku ta riga ta mallaka. Ƙananan kayan aiki da ake amfani da su da kyau sun fi kayan aiki da yawa da aka yi amfani da kowanne sau ɗaya."
          ],
          words: [["Mataimakin hira (chat assistant)", "AI da kuke rubuta masa ko magana da shi, yana rubuta amsoshi."], ["Kayan ofis (office suite)", "tarin shirye-shiryen aiki: imel, takardu, teburan lissafi, hotunan bayani."], ["Rubuta magana (transcribe)", "mayar da kalmomin da aka faɗa zuwa rubutu."]],
          slides: [
            { title: "Nau'o'i huɗu na kayan AI", bullets: ["Mataimakan hira: rubutu, bayani, taƙaitawa", "Kayan ofis: AI a cikin imel da takardu", "Kayan zane: takardun talla, rubuce-rubuce, slides", "Kayan taro: rubutun magana da taƙaitawa"] },
            { title: "Misalai", bullets: ["ChatGPT, Microsoft Copilot, Google Gemini", "Microsoft 365, Google Workspace", "Canva, Adobe Express"] },
            { title: "Ku sauƙaƙa shi", bullets: ["Ku fara da abin da kuka riga kuka mallaka", "Kayan aiki ɗaya ga kowane nau'i", "Naɗar taro sai da amincewar kowa"] }
          ],
          tryIt: "Ku rubuta kayan aikin da ƙungiyarku ta riga ta yi amfani da su (imel, takardu, zane). Ga kowanne, ku rubuta wane nau'i ne a cikin huɗun.",
          youCanNow: "ambaton nau'o'i huɗu na kayan AI da haɗa aiki da wanda ya dace.",
          quickCheck: [
            { objective: "O1", q: "Wane nau'in kayan aiki ne ke da AI a cikin imel, takardu da teburan lissafi?", options: ["Kayan ofis", "Kayan zane", "Na'urar naɗar taro", "Tallar bincike"], answer: 0, why: "Kayan ofis kamar Microsoft 365 da Google Workspace suna da AI a cikin shirye-shiryen aiki na yau da kullum." },
            { objective: "O1", q: "Ƙungiyarku ta gwada kayan AI takwas, kowanne sau ɗaya. Me wannan darasi ya ba da shawara?", options: ["Ku gwada wasu takwas", "Ku zaɓi kayan aiki ɗaya daga kowane nau'i da kuka riga kuka mallaka ku yi amfani da shi da kyau", "Ku daina amfani da AI", "Ku yi amfani da kayan zane kawai"], answer: 1, why: "Ƙananan kayan aiki da ake amfani da su da kyau sun fi masu yawa da aka yi amfani da kowanne sau ɗaya." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Nemo shirye-shiryen kyauta da na rangwame ga ƙungiyoyin sa-kai",
          minutes: 5,
          goal: "Gano waɗanne shirye-shiryen fasaha ƙungiyarku za ta iya cancanta da inda za ku nema.",
          text: [
            "Manyan kamfanonin fasaha suna da shirye-shirye don ƙungiyoyin sa-kai. Google for Nonprofits yana ba ƙungiyoyin agaji masu rajista da suka cancanta kayan Google kyauta ko da rangwame, ciki har da rangwame a Google Workspace da Google Ad Grants, wanda ke ba ƙungiyoyin da suka cancanta har zuwa $10,000 a wata na tallace-tallacen bincike a Google. Google yana amfani da abokin hulɗa mai suna Goodstack don tabbatar da cewa ku ƙungiyar sa-kai ce.",
            "Tayin Microsoft ga ƙungiyoyin sa-kai sun haɗa da Microsoft 365 Business Basic kyauta har zuwa masu amfani 300, tsare-tsaren biya masu rangwame, da Copilot Chat a cikin biyan Microsoft 365. Kuna yin rajista, Microsoft kuma yana tabbatar da cancantarku.",
            "Ba kowace ƙungiya ce ta cancanta ba. Misali, shirin Google ba ya karɓar hukumomin gwamnati, asibitoci da makarantu. Kayan zane kamar Canva suma suna da shirye-shirye don ƙungiyoyin sa-kai; ku duba shafinsu na hukuma don sharuɗɗan yanzu. Farashi da ƙa'idoji suna canjawa, don haka koyaushe ku duba shafin hukuma kafin ku nema."
          ],
          steps: ["Ku shirya sunan ƙungiyarku na doka, adireshi da shaidar keɓewa daga haraji.", "Ku buɗe shafukan hukuma na Google for Nonprofits da na Microsoft don ƙungiyoyin sa-kai.", "Ku karanta ƙa'idojin cancanta.", "Ku nema da imel na ƙungiya, ba na kanku ba.", "Ku kunna kowane samfur daban bayan an amince da ku."],
          words: [["Cancanta (eligible)", "an ba ku damar shiga domin kun cika ƙa'idoji."], ["Keɓewa daga haraji (tax-exempt)", "gwamnati ta amince ba za ku biya wasu haraji ba, kamar 501(c)(3) a Amurka."], ["Ad Grants", "shirin Google da ke ba ƙungiyoyin sa-kai da suka cancanta tallace-tallacen bincike kyauta."]],
          slides: [
            { title: "Google for Nonprofits", bullets: ["Kayan Google kyauta ko da rangwame", "Rangwamen Workspace da Ad Grants", "Ad Grants: har zuwa $10,000 a wata na tallar bincike", "Ana tabbatarwa ta Goodstack"] },
            { title: "Tayin Microsoft ga ƙungiyoyin sa-kai", bullets: ["Microsoft 365 Business Basic kyauta har zuwa masu amfani 300", "Tsare-tsaren biya masu rangwame", "Copilot Chat yana cikin Microsoft 365"] },
            { title: "Kafin ku nema", bullets: ["Ku duba cancanta a shafin hukuma", "Ku shirya shaidar keɓewa daga haraji", "Farashi da ƙa'idoji suna canjawa: ku fara dubawa"] }
          ],
          sources: [
            { name: "Google for Nonprofits", url: "https://www.google.com/nonprofits/" },
            { name: "Google Ad Grants", url: "https://www.google.com/grants/" },
            { name: "Tayin Microsoft ga ƙungiyoyin sa-kai", url: "https://www.microsoft.com/en-us/nonprofits/offers-for-nonprofits" }
          ],
          tryIt: "Ku buɗe shafukan Google for Nonprofits da tayin Microsoft ga ƙungiyoyin sa-kai. Ku rubuta ko ƙungiyarku tana kama da ta cancanta ga kowanne, da shaidar da za ku buƙata.",
          youCanNow: "nemo shirye-shiryen fasaha na ƙungiyoyin sa-kai, duba cancanta, da sanin abin da za ku shirya don nema.",
          quickCheck: [
            { objective: "O2", q: "Me Microsoft yake yi bayan kun yi rajista don tayinsa ga ƙungiyoyin sa-kai?", options: ["Yana aiko muku da takardar biyan kuɗi", "Yana neman jerin masu ba da gudummawa", "Yana tabbatar da cancantarku", "Yana ba ku tallafin kuɗi a hannu"], answer: 2, why: "Kuna yin rajista, Microsoft kuma yana tabbatar da cancantarku." },
            { objective: "O2", q: "Wata makarantar gwamnati ta tambaye ku ko za ta iya shiga Google for Nonprofits. Me za ku faɗa musu?", options: ["Eh, kowace ƙungiya ta cancanta", "Eh, idan sun biya kuɗi", "A ƙarshen mako kawai", "Shafin Google ya ce ba a karɓar makarantu, don haka su duba shafin hukuma"], answer: 3, why: "Shirin Google ba ya karɓar hukumomin gwamnati, asibitoci da makarantu." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kafa halaye masu aminci ga kowane kayan aiki",
          minutes: 4,
          goal: "Shirya kayan AI lafiya don amfanin ƙungiyarku.",
          text: [
            "Ku yi amfani da asusun ƙungiya, ba na kanku ba, domin aiki ya zauna a ƙungiya idan mai sa-kai ya tafi. Ku kunna shiga mataki biyu ga kowane asusu.",
            "Ku koyi inda kowane kayan aiki ke ajiye tarihin hirarku, da ko za a iya kashe shi ko goge shi. Ku duba saitunan kayan aikin don neman saitunan sirri ko na bayanai.",
            "Doka ta zinariya iri ɗaya ce a kowane kayan aiki: babu bayanan sirri na masu ba da gudummawa, masu sa-kai ko abokan hulɗa da za su shiga sai dai idan shugabanninku sun amince da wannan kayan aikin don haka. Ku yi amfani da madadi kamar [suna] a maimakon haka."
          ],
          steps: ["Ku shiga da asusun ƙungiya.", "Ku kunna shiga mataki biyu.", "Ku buɗe saituna ku nemo saitunan sirri ko na bayanai.", "Ku amince a matsayin ƙungiya: babu bayanan sirri, ku yi amfani da madadi."],
          words: [["Shiga mataki biyu (two-step sign-in)", "dubawa ta biyu, kamar lambar da aka turo wayarku, lokacin da kuke shiga asusu."], ["Tarihin hira (chat history)", "ajiyar da kayan aiki ke yi na hirarrakinku na baya."]],
          slides: [
            { title: "Asusu", bullets: ["Asusun ƙungiya, ba na kai ba", "Aiki yana zama idan masu sa-kai suka tafi"] },
            { title: "Tsaro", bullets: ["Ku kunna shiga mataki biyu", "Ku nemo saitunan sirri ko bayanai a saituna"] },
            { title: "Doka ta zinariya", bullets: ["Babu bayanan sirri na masu gudummawa, masu sa-kai ko abokan hulɗa", "Ku yi amfani da madadi kamar [suna]"] }
          ],
          tryIt: "Ku buɗe saitunan kayan AI da kuka fi amfani da shi. Ku nemo inda yake ajiye tarihin hirarku da duk wani saitin sirri. Ku rubuta jimla ɗaya kan abin da kuka gano.",
          youCanNow: "shirya kayan AI da halaye masu aminci don ƙungiyarku.",
          quickCheck: [
            { objective: "O3", q: "A ina za ku sami tarihin hira da saitunan bayanai na kayan aiki?", options: ["A cikin saitunan kayan aikin", "A cikin akwatin imel ɗinku", "A shafin kafar sada zumunta", "Babu inda; ba za a iya canja su ba"], answer: 0, why: "Ku duba saitunan kayan aikin don neman saitunan sirri ko bayanai." },
            { objective: "O3", q: "Wata mai sa-kai ta shirya kayan zane na ƙungiya a asusunta na kanta, kuma za ta ƙaura. Me ya kamata ku yi tun farko?", options: ["Babu komai; asusun kai ne mafi kyau", "Amfani da asusun ƙungiya domin aikin ya zauna a ƙungiya", "Raba kalmar sirrinta da kowa", "Kashe shiga mataki biyu"], answer: 1, why: "Asusun ƙungiya yana ajiye aiki a ƙungiya idan mai sa-kai ya tafi." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Sanin kayan aikinku",
        questions: [
          { objective: "O1", q: "Kuna buƙatar takardar tallar neman masu sa-kai. Wane nau'in kayan aiki ya fi dacewa?", options: ["Kayan zane", "Teburin lissafi", "Na'urar naɗar taro", "Na'urar lissafi"], answer: 0, why: "Kayan zane suna yin takardun talla da hotuna." },
          { objective: "O2", q: "Me Google Ad Grants yake ba ƙungiyoyin sa-kai da suka cancanta?", options: ["Kwamfutocin tafi-da-gidanka kyauta", "Har zuwa $10,000 a wata na tallar bincike a Google", "Gudummawar kuɗi a hannu", "Ma'aikata kyauta"], answer: 1, why: "Shafin hukuma na Google ya ce har zuwa $10,000 a wata na tallar bincike." },
          { objective: "O3", q: "Kafin ku naɗi taro da kayan rubutun AI, dole ne ku:", options: ["Ɓoye na'urar naɗa", "Tambayi shugaban taron kaɗai", "Samu amincewar kowa", "Babu komai"], answer: 2, why: "Ya kamata mutane su amince kafin a naɗe su." },
          { objective: "O3", q: "Me yasa za a yi amfani da asusun ƙungiya maimakon na kai?", options: ["Ya fi sauri a rubuta", "Asusun kai haramun ne", "Babu dalili", "Aiki yana zama a ƙungiya"], answer: 3, why: "Aiki ba ya ɓacewa idan mai sa-kai ya tafi." },
          { objective: "O2", q: "Farashi da ƙa'idojin shirye-shirye suna canjawa. Me za ku yi?", options: ["Ku duba shafin hukuma kafin ku nema", "Ku amince da tsohon rubutun blog", "Ku tambayi AI ku karɓa", "Ku yi tsammani"], answer: 0, why: "Shafukan hukuma suna da ƙa'idojin yanzu." }
        ]
      }
    },
    {
      name: "Babi na 2: Yin aiki na gaske da kayan AI",
      lessons: [
        {
          objectives: ["O4"],
          title: "Mayar da rubutun taro zuwa taƙaitaccen bayani mai sarari",
          minutes: 5,
          goal: "Amfani da mataimakin hira don mayar da rubutun taro marasa tsari zuwa taƙaitawa tare da ayyukan da za a yi.",
          text: [
            "Tarurrukan kwamitin gudanarwa, ƙungiyar hidimar addini da na masu sa-kai suna haifar da rubutu marasa tsari. Mataimakin hira zai iya mayar da su taƙaitawa mai tsabta cikin daƙiƙoƙi.",
            "Da farko ku cire bayanan sirri: babu sunayen abokan hulɗa, matsalolin lafiya ko yawan kuɗin masu gudummawa. Ku yi amfani da muƙamai a maimakon haka: \"ma'ajin kuɗi\", \"shugaban matasa\". Sannan ku liƙa rubutun da wannan prompt: \"Ka taƙaita waɗannan rubutun taro a maki 5. Sannan ka jera ayyukan da za a yi a tebur mai: aiki, wanda zai yi (ta muƙami), da ranar ƙarshe.\"",
            "Ku duba taƙaitawar da rubutunku. AI zai iya tsallake wani hukunci ko ya ƙirƙiri ranar ƙarshe. Ku gyara ta, sannan ku ƙara sunaye na gaske da kanku kafin ku raba ta."
          ],
          steps: ["Ku cire bayanan sirri; ku yi amfani da muƙamai maimakon sunaye.", "Ku liƙa rubutun a cikin mataimakin hira.", "Ku nemi taƙaitawa mai maki 5 da teburin ayyukan da za a yi.", "Ku duba kowane hukunci da kwanan wata da rubutunku.", "Ku ƙara sunaye na gaske da kanku, sannan ku raba."],
          words: [["Aikin da za a yi (action item)", "aikin da wani ya amince zai yi bayan taro."], ["Taƙaitawa (summary)", "gajeriyar siga da ke ajiye muhimman abubuwa."]],
          slides: [
            { title: "Ku shirya rubutun", bullets: ["Ku cire bayanan abokan hulɗa, lafiya da masu gudummawa", "Ku yi amfani da muƙamai: ma'aji, shugaban matasa"] },
            { title: "Prompt ɗin", bullets: ["Ka taƙaita a maki 5", "Teburin ayyuka: aiki, wanda zai yi, ranar ƙarshe"] },
            { title: "Ku duba ku kammala", bullets: ["Ku kwatanta da rubutunku", "Ku gyara hukuncin da aka tsallake da ranakun ƙirƙira", "Ku ƙara sunaye na gaske da kanku"] }
          ],
          tryIt: "Ku ɗauki rubutun wani taron kwanan nan (ko ku rubuta layuka biyar na rubutun atisaye). Ku cire bayanan sirri, ku nemi taƙaitawa da teburin ayyukan da za a yi, sannan ku duba ta da rubutun.",
          youCanNow: "mayar da rubutun taro zuwa taƙaitawa da aka duba tare da ayyukan da za a yi ta amfani da AI.",
          quickCheck: [
            { objective: "O4", q: "A cikin prompt na taƙaitawa, ta yaya ake jera \"wanda zai yi\" a teburin ayyuka?", options: ["Da cikakken suna da lambar waya", "Da adireshin gida", "Ta muƙami", "Da yawan gudummawa"], answer: 2, why: "Prompt ɗin yana neman aiki, wanda zai yi (ta muƙami) da ranar ƙarshe; kuna ƙara sunaye daga baya." },
            { objective: "O4", q: "Taƙaitawar AI ta tsallake wani hukunci da kwamitin gudanarwa ya yanke. Me za ku yi?", options: ["Ku raba ta yadda take", "Ku goge rubutun", "Ku nemi AI ya yi tsammanin abin da aka yanke", "Ku ƙara hukuncin daga rubutunku kafin ku raba"], answer: 3, why: "Ku duba taƙaitawar da rubutunku ku gyara duk abin da aka tsallake." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Yin takardar tallar neman masu sa-kai da AI",
          minutes: 5,
          goal: "Amfani da AI don rubuta kalmomin takardar talla da kayan zane don tsara ta.",
          text: [
            "Ku fara da kalmomi. Ku tambayi mataimakin hira: \"Ka rubuta kalmomin takardar talla don neman masu sa-kai a shirinmu na koyarwa ranar Asabar ga ɗaliban ƙananan sakandare. Ka haɗa gajeren kanun labari, dalilai uku na shiga, lokacin da ake buƙata, da yadda ake rajista. Ƙasa da kalmomi 60.\"",
            "Sannan ku buɗe kayan zane, ku nemi samfuransa (templates) da kalmar \"volunteer\" ko \"flyer\", ku liƙa kalmominku. Kayan zane da yawa suna da fasalolin AI da ke ba da shawarar tsari ko hotuna; ku bayyana abin da kuke so ku zaɓi ɗaya.",
            "Ku duba bayanan da kanku: kwanan wata, lokaci, wuri, lambar tuntuɓa da hanyar haɗin rajista. Ku yi amfani da hotunan da kuke da izinin amfani da su, kuma kada ku taɓa nuna fuskokin yara ba tare da izinin rubutacce daga iyaye ko masu kula da su ba."
          ],
          steps: ["Ku nemi mataimakin hira ya ba ku gajerun kalmomin takardar talla.", "Ku buɗe kayan zane ku nemi samfurin takardar talla.", "Ku liƙa kalmominku ku daidaita tsarin.", "Ku duba kwanan wata, lokaci, wuri da lambar tuntuɓa.", "Ku yi amfani da hotunan da kuke da izini kawai."],
          words: [["Samfuri (template)", "zanen da aka riga aka shirya wanda kuke cikawa da kalmominku."], ["Izini", "amincewa, sau da yawa a rubuce, don amfani da hoton wani ko aikinsa."]],
          slides: [
            { title: "Kalmomi da farko", bullets: ["Kanun labari, dalilai uku, lokacin da ake buƙata", "Yadda ake rajista", "Ƙasa da kalmomi 60"] },
            { title: "Sannan zane", bullets: ["Ku buɗe kayan zane", "Ku nemi samfuran \"volunteer flyer\"", "Ku liƙa ku daidaita"] },
            { title: "Ku duba kafin bugawa", bullets: ["Kwanan wata, lokaci, wuri, lambar tuntuɓa", "Hotuna masu izini kawai", "Babu fuskokin yara ba tare da izinin iyaye ba"] }
          ],
          tryIt: "Ku yi takardar tallar neman masu sa-kai don wani shiri na gaske ko na atisaye: kalmomin AI ƙasa da 60, an tsara su a samfurin kayan zane. Ku duba kowane bayani.",
          youCanNow: "yin takardar tallar neman masu sa-kai ta amfani da AI don kalmomi da kayan zane don tsari.",
          quickCheck: [
            { objective: "O5", q: "Me za ku nema a cikin samfuran kayan zane?", options: ["Kalmomi kamar \"volunteer\" ko \"flyer\"", "Sunayen masu ba ku gudummawa", "Kalmar sirrinku", "Adireshin wani abokin hulɗa"], answer: 0, why: "Ku nemi samfuran da \"volunteer\" ko \"flyer\" ku liƙa kalmominku." },
            { objective: "O5", q: "Kalmomin takardar talla na AI suna da hanyar haɗin rajista da ba daidai ba. Me za ku yi?", options: ["Ku buga ta duk da haka", "Ku gyara hanyar haɗin da kanku kafin bugawa", "Ku cire sashen rajista", "Ku nemi kayan zane ya yi tsammanin hanyar haɗin"], answer: 1, why: "Ku duba kwanan wata, lokaci, wuri, lambar tuntuɓa da hanyar haɗin rajista da kanku." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Gina katin kayan AI na ƙungiyarku",
          minutes: 5,
          goal: "Rubuta katin kayan aiki mai shafi ɗaya da ke faɗa wa ƙungiyarku waɗanne kayan za ta yi amfani da su da yadda.",
          text: [
            "Katin kayan aiki shafi ɗaya ne da ƙungiyarku za ta iya ajiyewa kusa da kwamfuta. Yana ambaton kowane kayan da aka amince da shi, abin da yake yi, yadda ake shiga, da abin da ba za a taɓa saka a cikinsa ba.",
            "Ku gajarta shi: layi ɗaya ga kowane kayan aiki. Ku ƙara prompts biyu ko uku da suka fi yi wa ƙungiyarku aiki, kamar prompt na taƙaita taro, domin sababbin masu sa-kai su kwafe su.",
            "Ku sake duba katin kowane wata shida. Kayan aiki, farashi da shirye-shiryen ƙungiyoyin sa-kai suna canjawa, kuma ƙungiyarku za ta gano prompts mafi kyau."
          ],
          steps: ["Ku jera mataimakin hira ɗaya, kayan ofis ɗaya da kayan zane ɗaya.", "Ga kowanne: abin da yake yi da yadda ake shiga.", "Ku ƙara dokar sirri ga kowanne.", "Ku ƙara mafi kyawun prompts ɗinku biyu ko uku.", "Ku sanya ranar sake duba shi bayan wata shida."],
          words: [["Katin kayan aiki (toolkit card)", "jagora mai shafi ɗaya na kayan aikin da ƙungiyarku ke amfani da su da yadda ake amfani da su lafiya."]],
          slides: [
            { title: "Layi ɗaya ga kowane kayan aiki", bullets: ["Suna da abin da yake yi", "Yadda ake shiga", "Abin da ba za a taɓa saka ba"] },
            { title: "Ku ƙara mafi kyawun prompts", bullets: ["Prompt na taƙaita taro", "Prompt na kalmomin takardar talla", "Sababbin masu sa-kai za su iya kwafe su"] },
            { title: "Ku sabunta shi", bullets: ["Ku sake duba kowane wata shida", "Kayan aiki da shirye-shirye suna canjawa"] }
          ],
          tryIt: "Aikin ƙarshe: ku rubuta katin kayan AI mai shafi ɗaya na ƙungiyarku mai kayan aiki uku, amfaninsu da dokokin sirri, sannan ku haɗa taƙaitawar taro da takardar talla da kuka yi.",
          youCanNow: "zaɓa, amfani da rubuta bayanin ƙananan kayan AI don ƙungiyarku ta sa-kai.",
          quickCheck: [
            { objective: "O6", q: "Yaya ake tsara katin kayan aiki?", options: ["Dogon littafin jagora", "Bidiyo", "Layi ɗaya ga kowane kayan aiki a shafi ɗaya", "Jerin kalmomin sirri"], answer: 2, why: "Ku gajarta shi: shafi ɗaya, layi ɗaya ga kowane kayan aiki." },
            { objective: "O6", q: "Ƙungiyarku ta gano prompt na taro da ke aiki sosai. Me za ku yi da shi?", options: ["Ku ajiye shi a wurinku", "Ku goge shi bayan amfani", "Ku aika shi ga masu gudummawa", "Ku ƙara shi a katin kayan aiki domin sababbin masu sa-kai su kwafe shi"], answer: 3, why: "Ku ƙara mafi kyawun prompts domin sababbin masu sa-kai su kwafi abin da ke aiki." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Yin aiki na gaske da kayan AI",
        questions: [
          { objective: "O4", q: "Kafin ku liƙa rubutun taro a cikin AI, ya kamata ku:", options: ["Ƙara bayanan bankin masu gudummawa", "Cire bayanan sirri ku yi amfani da muƙamai maimakon sunaye", "Liƙa su daidai yadda aka rubuta", "Aika su ta imel ga kowa da farko"], answer: 1, why: "Muƙamai suna hana bayanan sirri shiga kayan AI." },
          { objective: "O4", q: "Taƙaitawar AI tana da ranar ƙarshe da babu wanda ya amince da ita. Me za ku yi?", options: ["Ku bar ta", "Ku nemi AI ya bar ta", "Ku gyara ta daga rubutunku", "Ku raba ta duk da haka"], answer: 2, why: "AI zai iya ƙirƙirar bayanai; rubutunku ne ainihin bayanin." },
          { objective: "O5", q: "Wanne ne amfani mai kyau na samfurin kayan zane?", options: ["Ajiye jerin masu gudummawa", "Rubuta kasafin kuɗi", "Naɗar taro", "Liƙa kalmomin takardar talla a cikin tsarin da aka riga aka shirya"], answer: 3, why: "Samfura suna ba ku tsari da aka riga aka shirya." },
          { objective: "O5", q: "Kuna son hoton yara a shirinku a kan takardar talla. Me kuke buƙata?", options: ["Izinin rubutacce daga iyaye ko masu kula da su", "Babu komai", "Hoto mafi girma", "AI ya ɓata shi (blur)"], answer: 0, why: "Hotunan yara suna buƙatar izini daga iyaye ko masu kula da su." },
          { objective: "O6", q: "Sau nawa ya kamata ku sake duba katin kayan aikinku?", options: ["Ba taɓa ba", "Kusan kowane wata shida", "Kowace rana", "Sai idan mai gudummawa ya tambaya"], answer: 1, why: "Kayan aiki da shirye-shirye suna canjawa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Muhimman Kayan AI ga Ƙungiyoyin Sa-kai da Yadda Ake Amfani da Su",
    questions: [
      { objective: "O1", q: "Wanne ne mataimakin hira?", options: ["Firinta", "Akwatin teburin lissafi", "Microsoft Copilot", "Na'urar ɗinke takarda (stapler)"], answer: 2, why: "Copilot, ChatGPT da Gemini mataimakan hira ne." },
      { objective: "O1", q: "Kayan ofis (office suite) shi ne:", options: ["Ɗakin taro", "Ma'ajiyar bayanan masu gudummawa kawai", "Waya", "Tarin shirye-shiryen aiki kamar imel, takardu da teburan lissafi"], answer: 3, why: "Microsoft 365 da Google Workspace kayan ofis ne." },
      { objective: "O1", q: "Wane nau'in kayan aiki ne ke yin hotunan kafofin sada zumunta?", options: ["Kayan zane", "Na'urar lissafi", "Manhajar banki", "Na'urar daidaita zafi (thermostat)"], answer: 0, why: "Kayan zane suna yin hotuna da takardun talla." },
      { objective: "O1", q: "Mene ne ma'anar \"transcribe\" (rubuta magana)?", options: ["Fassara zuwa Sifaniyanci", "Mayar da kalmomin da aka faɗa zuwa rubutu", "Goge fayil", "Aika gudummawa"], answer: 1, why: "Kayan taro suna iya rubuta abin da mutane suka faɗa." },
      { objective: "O1", q: "Hanya mafi kyau don fara zaɓar kayan aiki ita ce:", options: ["Sayi kowane sabon kayan aiki", "Kada ku yi amfani da ko ɗaya", "Ku yi amfani da abin da kuka riga kuka mallaka, ɗaya ga kowane nau'i", "Ku tambayi baƙo"], answer: 2, why: "Ƙananan kayan aiki, ana amfani da su da kyau." },
      { objective: "O2", q: "Google for Nonprofits yana tabbatar da ƙungiyoyi ta hanyar:", options: ["Gidan waya", "Bankinku", "Wani mai gudummawa", "Goodstack"], answer: 3, why: "Google ya ambaci Goodstack a matsayin abokin hulɗarsa na tabbatarwa." },
      { objective: "O2", q: "Wace ƙungiya ce BA ta cancanci Google for Nonprofits ba, bisa shafinsa?", options: ["Hukumar gwamnati", "Ƙungiyar agaji mai rajista", "Ƙungiyar agaji ta bankin abinci", "Ƙungiyar sa-kai ta al'umma"], answer: 0, why: "Ba a karɓar hukumomin gwamnati, asibitoci da makarantu." },
      { objective: "O2", q: "Tayin Microsoft ga ƙungiyoyin sa-kai sun haɗa da:", options: ["Motoci kyauta", "Microsoft 365 Business Basic kyauta har zuwa masu amfani 300", "Tallafin kuɗin haya a hannu", "Gine-ginen ofis kyauta"], answer: 1, why: "Shafin Microsoft ya jera Business Basic kyauta har zuwa masu amfani 300." },
      { objective: "O2", q: "Me ya kamata ku shirya kafin ku nemi shirin fasaha na ƙungiyoyin sa-kai?", options: ["Lambobin katin masu gudummawa", "Fayilolin abokan hulɗa", "Sunanku na doka, adireshi da shaidar keɓewa daga haraji", "Babu komai"], answer: 2, why: "Shirye-shirye suna duba cewa ku ƙungiyar sa-kai ce ta gaske." },
      { objective: "O3", q: "Shiga mataki biyu yana nufin:", options: ["Shiga asusu sau biyu a rana", "Raba kalmar sirrinku", "Mutane biyu suna raba asusu ɗaya", "Dubawa ta biyu kamar lambar waya lokacin da kuke shiga"], answer: 3, why: "Yana kare asusu idan kalmar sirri ta fito." },
      { objective: "O3", q: "A ina za ku nemi saitunan sirri na kayan aiki?", options: ["A saitunansa", "A kwandon shara", "A imel na wani mai gudummawa", "A firinta"], answer: 0, why: "Saituna yawanci suna ɗauke da saitunan bayanai da sirri." },
      { objective: "O3", q: "Doka ta zinariya a kowane kayan AI ita ce:", options: ["Ku liƙa komai don samun sakamako mafi kyau", "Babu bayanan sirri na masu gudummawa, masu sa-kai ko abokan hulɗa sai an amince", "Ku yi amfani da asusun kai kawai", "Kada ku taɓa duba amsoshi"], answer: 1, why: "Kare bayanan sirri yana kiyaye amana." },
      { objective: "O4", q: "A cikin prompt na taƙaita taro, ya kamata ku nemi:", options: ["Waƙa", "Bayanan bankin masu gudummawa", "Maki-maki da teburin ayyukan da za a yi", "Labari na bazata"], answer: 2, why: "Wannan yana ba da taƙaitawa mai sarari da za a iya amfani da ita." },
      { objective: "O4", q: "Me yasa ake amfani da muƙamai kamar \"ma'ajin kuɗi\" a rubutun da kuke liƙawa?", options: ["Ya fi gajarta", "AI ba ya iya karanta sunaye", "Ma'ajin kuɗi sun fi son haka", "Don hana sunaye da bayanan sirri shiga"], answer: 3, why: "Muƙamai suna kare sirri." },
      { objective: "O4", q: "Me za ku duba a taƙaitawar taro ta AI?", options: ["Kowane hukunci da kwanan wata da rubutunku", "Irin rubutun haruffa kawai", "Babu komai", "Tsawonta kawai"], answer: 0, why: "AI zai iya tsallakewa ko ƙirƙirar bayanai." },
      { objective: "O5", q: "Kalmomin takardar talla masu kyau don masu sa-kai sun haɗa da:", options: ["Tambari kawai", "Kanun labari, dalilan shiga, lokacin da ake buƙata da yadda ake rajista", "Sunayen masu gudummawa", "Dogon tarihin ƙungiyar"], answer: 1, why: "Yana faɗa wa masu karatu dalilin shiga da yadda za su shiga." },
      { objective: "O5", q: "Kafin ku buga takardar talla, ku duba:", options: ["Launuka kawai", "Yanayi", "Kwanan wata, lokaci, wuri da lambar tuntuɓa", "Babu komai"], answer: 2, why: "Bayanai marasa daidai suna hana mutane zuwa." },
      { objective: "O6", q: "Katin kayan aiki shi ne:", options: ["Katin kyauta (gift card)", "Alamar shaidar mai sa-kai", "Rasidin gudummawa", "Jagora mai shafi ɗaya na kayan aikin da ƙungiyarku ta amince da su"], answer: 3, why: "Yana nuna waɗanne kayan aiki za a yi amfani da su da yadda." },
      { objective: "O6", q: "Me yasa za ku ƙara mafi kyawun prompts ɗinku a katin kayan aiki?", options: ["Sababbin masu sa-kai za su iya kwafin abin da ke aiki", "Don cike wuri", "Prompts sirri ne", "Masu gudummawa suna son su"], answer: 0, why: "Prompts da aka raba suna adana lokaci kuma suna kiyaye inganci." },
      { objective: "O2", q: "Wataƙila sharuɗɗan Canva ga ƙungiyoyin sa-kai sun canja. Ya kamata ku:", options: ["Ɗauka cewa kyauta ne har abada", "Duba shafin hukuma na Canva don ƙungiyoyin sa-kai", "Tambayi mataimakin hira ku amince da shi", "Bar kayan zane"], answer: 1, why: "Shafukan hukuma suna da sharuɗɗan yanzu." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      5,
      9,
      12,
      15,
      17
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "An ambaci kayan aiki da suka dace",
        objective: "O1",
        notYet: "Ɗaya daga cikin nau'o'i uku na kayan aiki ya ɓace, ko an yi amfani da kayan aiki don aikin da bai dace ba.",
        meets: "Ya ambaci mataimakin hira ɗaya, kayan ofis ɗaya da kayan zane ɗaya, kowanne da abin da yake yi.",
        exceeds: "Ya kuma nuna waɗanne kayan aiki ake samu kyauta ko da rangwame ta shirin ƙungiyoyin sa-kai."
      },
      {
        name: "Dokokin tsaro a kan katin",
        objective: "O3",
        notYet: "Katin bai faɗi abin da ba za a taɓa saka a kowane kayan aiki ba.",
        meets: "Kowane kayan aiki yana faɗin abin da ba za a taɓa saka a cikinsa ba, tare da asusun ƙungiya da shiga mataki biyu.",
        exceeds: "Ya kuma faɗi inda ake samun saitunan sirri na kowane kayan aiki."
      },
      {
        name: "Taƙaitawar taro",
        objective: "O4",
        notYet: "Taƙaitawar tana da sunaye ko bayanan sirri, ko hukunci ko kwanan wata da ba daidai ba.",
        meets: "Taƙaitawa da teburin ayyuka ta muƙami, an duba su da rubutun.",
        exceeds: "An ƙara sunaye na gaske ne kawai bayan an kwafe daga kayan AI."
      },
      {
        name: "Takardar tallar masu sa-kai",
        objective: "O5",
        notYet: "Kwanan wata, lokaci, wuri ko lambar tuntuɓa ba daidai ba ne ko sun ɓace, ko akwai hoton da ba a ba da izini ba.",
        meets: "Kanun labari, dalilan shiga, lokacin da ake buƙata da rajista, an duba dukkan bayanai.",
        exceeds: "Yana amfani da hotuna masu izini kawai kuma yana da sauƙin karantawa da kallo ɗaya."
      },
      {
        name: "Katin kayan aiki mai amfani",
        objective: "O6",
        notYet: "Ya wuce shafi ɗaya, ko babu yadda ake shiga.",
        meets: "Shafi ɗaya, layi ɗaya ga kowane kayan aiki, tare da mafi kyawun prompts.",
        exceeds: "Yana da ranar sake dubawa bayan kusan wata shida da kuma mai kula da shi."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Ƙungiyoyin da suka nemi aƙalla shirin fasaha ɗaya na ƙungiyoyin sa-kai cikin kwanaki 60 (binciken biyo baya)",
      "Ƙungiyoyin da ke amfani da katin kayan aikinsu don taƙaita taro ko takardun talla cikin kwanaki 30",
      "Masu koyo da suka fara wani kwas na Koach Learn na ƙungiyoyin sa-kai cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta mai intanet",
      "Mataimakin hira kyauta, kayan ofis ɗinku da asusun kayan zane kyauta",
      "Samfurin rubutun taro da ba su da bayanan sirri",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Kafin zaman, ku duba waɗanne kayan ofis da kayan zane ƙungiyar ta riga ta mallaka.",
      "Ku shirya sunan ƙungiyar na doka, adireshi da shaidar keɓewa daga haraji idan masu koyo za su nemi shirye-shirye a lokacin zaman.",
      "Ku ba da samfurin rubutun taro mai muƙamai maimakon sunaye domin kada a liƙa bayanan sirri na gaske.",
      "Ku tunatar da masu koyo cewa hotunan yara suna buƙatar izinin rubutacce daga iyaye ko masu kula da su.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
