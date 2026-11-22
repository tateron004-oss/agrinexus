"use strict";

// Koach Learn course, Hausa (ha) translation of entrepreneurs/entrepreneurs-ai-tools.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "entrepreneurs-ai-tools-ha",
  lang: "ha",
  translationOf: "entrepreneurs-ai-tools",
  category: "Entrepreneurs",
  name: "Kayan AI da Kowane Ɗan Kasuwa Ya Kamata Ya Sani",
  skills: "Zaɓar nau'in kayan AI da ya dace, Amfani da mataimakin hira don rubutu, Yin hotunan talla da Canva, Amfani da AI a takardu da spreadsheet, Haɗa ƙaramin kundin kayan AI",
  outcome: "zaɓa da amfani da kayan AI kyauta don manyan ayyukan kasuwancinku (rubutu, zane, takardu da spreadsheet, da taruka) da haɗa kundin kaya na shafi ɗaya da ke faɗin kayan da kuke amfani da shi don kowane aiki.",
  about: [
    "Akwai dubban kayan AI, kuma sababbi suna fitowa kowane mako. Wannan kwas ɗin na masu kasuwanci ne da ke son gajeren kundin kaya mai amfani, maimakon bin kowace sabuwar manhaja.",
    "Za ku koyi manyan nau'ikan kayan AI, sannan ku yi atisaye da zaɓuɓɓuka na gaske masu kyauta da mutane da yawa ke amfani da su: mataimakan hira (ChatGPT, Microsoft Copilot, Google Gemini), zane (Canva), takardu da spreadsheet (Google Docs da Sheets, Microsoft 365), da kayan rubuta bayanan taro.",
    "Kowane darasi yana ɗaukar kusan minti biyar kuma yana ƙarewa da aikin da za ku yi kan kasuwancinku. Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe. Sunayen kayan, abubuwan da suke yi da farashinsu suna canjawa sau da yawa, don haka kwas ɗin yana nuna muku yadda ake duba abin da ke aiki yanzu."
  ],
  finalTask: "Ku yi \"Kundin Kayan AI Nawa\" na shafi ɗaya don kasuwancinku: ku jera ayyuka huɗu (rubutu, zane, takardu ko lissafi, da taruka ko bayanai), kayan kyauta da za ku yi amfani da shi don kowanne, abu ɗaya da kuka yi da shi a wannan kwas, da doka ɗaya don kiyaye bayanan abokan ciniki a cikin wannan kayan.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Masu ƙananan kasuwanci da masu ƙaramar sana'a ta gefe da ke son gajeren kundin kayan AI mai amfani, maimakon bin kowace sabuwar manhaja.",
    startingPoint: "Suna amfani da imel, waya, wataƙila da kayan ofis na Google ko Microsoft. Wasu sun gwada mataimakin hira. Yawancinsu ba su da tsarin wane kaya ne don wane aiki, ko dokoki game da bayanan abokan ciniki a cikin waɗannan kayan.",
    gap: "Sababbin kayan AI suna fitowa kowane mako, kuma masu kasuwanci suna ɓata lokaci da kuɗi wajen gwada da yawa ko biyan kuɗi sau biyu don aiki ɗaya. Wasu suna saka bayanan abokan ciniki a kayan ba tare da duba saitunan ba. Masu kasuwanci suna buƙatar kayan kyauta guda ɗaya da aka gwada don kowane babban aiki, da doka ta tsaro ɗaya don kowanne.",
    constraints: [
      "Kalmomi masu sauƙi; ba a buƙatar ilimin fasaha",
      "Na'urori: waya ko kwamfuta; tsare-tsare na kyauta kaɗai",
      "Lokaci: kusan minti biyar a kowane darasi, da ɗan aiki kan kasuwancin mai koyo",
      "Sunayen kayan, abubuwan da suke yi da farashinsu suna canjawa sau da yawa; ku duba shafin farashi na kowane kaya",
      "Ku nemi izini kafin ku naɗi kowa, kuma kada ku saka bayanan abokan ciniki a hirar AI"
    ],
    prerequisites: "\"Introduction to AI for Entrepreneurs\" (Gabatarwa ga AI don 'Yan Kasuwa), ko ɗan ƙwarewa wajen neman taimakon mataimakin AI."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku kowane kayan AI", action: "gane wanne cikin ayyukan kasuwanci huɗu yake yi: rubutu, zane, takardu da lissafi, ko taruka da bayanai", standard: "kuma ku duba aikinsa, farashinsa da dacewarsa kafin ku ƙara shi" },
    { id: "O2", condition: "Ta amfani da asusun da kasuwancinku ya riga ya mallaka", action: "zaɓar mataimakin hira kyauta da amfani da shi don wani aikin rubutu na gaske na kasuwanci", standard: "bayan kun kwatanta prompt iri ɗaya a mataimaka biyu" },
    { id: "O3", condition: "Ta amfani da samfurin Canva (template)", action: "yin hoton talla mai alamar kasuwancinku da saƙo ɗaya, hoto ɗaya da kira ɗaya zuwa mataki", standard: "kuma kun duba kowane hoton AI don kurakurai da tambarin da aka kwafo kafin amfani" },
    { id: "O4", condition: "Idan aka ba ku sauƙaƙan takardar tallace-tallace ko takarda", action: "amfani da AI don rubuta formula ta spreadsheet da daftarin takarda", standard: "kuna gwada formula a layukan da kuka duba da hannu, kuma kuna tura takardun shari'a don a duba su" },
    { id: "O5", condition: "Idan aka ba ku taro ko saƙon murya", action: "mayar da shi rubutaccen bayani da jerin ayyuka da AI", standard: "da wane ne, me, da zuwa yaushe ga kowane abu, da izini kafin naɗar wasu" },
    { id: "O6", condition: "A ƙarshen kwas ɗin", action: "yin kundin kayan AI na shafi ɗaya mai kaya ɗaya don kowane aiki da doka ta tsaro ɗaya don kowanne", standard: "kuna jera abin da kuka yi da kowane kaya" }
  ],
  chapters: [
    {
      name: "Babi na 1: Manyan nau'ikan kayan AI",
      lessons: [
        {
          objectives: ["O1"],
          title: "Taswirar kayan AI: ayyuka huɗu, ba manhajoji ɗari huɗu ba",
          minutes: 4,
          goal: "Raba kayan AI bisa aikin da suke yi wa kasuwancinku.",
          text: [
            "Yawancin kayan AI da ƙaramin kasuwanci ke buƙata suna cikin ayyuka huɗu. Rubutu da tunani: mataimakan hira kamar ChatGPT, Microsoft Copilot da Google Gemini. Zane: kayan kamar Canva da ke yin hotuna, takardun talla (flyer) da hotunan kafofin sada zumunta. Takardu da lissafi: AI da ke cikin Google Docs da Sheets ko Microsoft Word da Excel. Taruka da bayanai: kayan da ke naɗa, rubuta magana da taƙaitawa.",
            "Kayan da yawa yanzu suna yin aiki fiye da ɗaya. Mataimakin hira yana iya yin hoto ko karanta spreadsheet da kuka ɗora. Ba laifi, amma farawa da kaya ɗaya don kowane aiki yana sa abubuwa su kasance masu sauƙi.",
            "Kafin ku ƙara kowane sabon kaya, ku tambaya: Wane aiki yake yi? Ina da wani kaya don wannan aikin? Akwai tsarin kyauta? Me ke faruwa da bayanan da na saka a ciki?"
          ],
          words: [["Mataimakin hira (chat assistant)", "kayan AI da kuke magana da shi a tagar hira, kamar ChatGPT, Copilot ko Gemini."], ["Rubuta magana (transcribe)", "mayar da kalmomin da aka faɗa zuwa rubutu."]],
          slides: [
            { title: "Ayyuka huɗu", bullets: ["Rubutu da tunani: mataimakan hira", "Zane: Canva da makamantansu", "Takardu da lissafi: Docs, Sheets, Word, Excel", "Taruka da bayanai: rubuta magana da taƙaitawa"] },
            { title: "Ku fara a sauƙaƙe", bullets: ["Kaya ɗaya don kowane aiki a farko", "Kayan da yawa suna haɗuwa a ayyuka, kuma ba laifi"] },
            { title: "Kafin ƙara kaya, ku tambaya", bullets: ["Wane aiki yake yi?", "Ina da wani tuni?", "Akwai tsarin kyauta? Ina bayanaina ke zuwa?"] }
          ],
          tryIt: "Ku rubuta ayyuka huɗun a shafi. Kusa da kowanne, ku rubuta duk wani kaya da kuke amfani da shi don shi (ko da ba na AI ba ne). Ku bar wuri babu komai idan ba ku da shi.",
          youCanNow: "raba kayan AI zuwa ayyukan kasuwanci huɗu da yin tambayoyi huɗu kafin ƙara sabo.",
          quickCheck: [
            { objective: "O1", q: "Wane aiki kayan rubuta magana (transcription) yake yi?", options: ["Taruka da bayanai", "Zane", "Rubuta talla", "Biyan kuɗi"], answer: 0, why: "Rubuta magana yana mayar da magana zuwa bayanai, wanda shi ne aikin taruka da bayanai." },
            { objective: "O1", q: "Wata sabuwar manhajar AI ta yi alƙawarin rubuta saƙonnin kafofin sada zumunta, amma kuna da mataimakin hira da ke yin haka. Me za ku yi?", options: ["Ku yi rajista nan take", "Ku ƙyale ta sai dai idan ta fi yin aikin a fili", "Ku biya duka biyun", "Ku goge mataimakin hirarku"], answer: 1, why: "Kaya ɗaya don kowane aiki yana sa abubuwa su kasance masu sauƙi kuma yana hana biyan kuɗi sau biyu." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Mataimakan hira: zaɓar ɗaya da amfani da shi da kyau",
          minutes: 5,
          goal: "Buɗe mataimakin hira kyauta da amfani da shi don wani aikin rubutu na gaske na kasuwanci.",
          text: [
            "ChatGPT (chatgpt.com), Microsoft Copilot (copilot.microsoft.com) da Google Gemini (gemini.google.com) duk suna da sigar kyauta. Duka suna rubutu, taƙaitawa, tunanin sababbin dabaru da bayani. Ku zaɓi wanda ya dace da asusun da kuke amfani da su: Copilot idan kasuwancinku yana amfani da Microsoft, Gemini idan yana amfani da Google, ko kowanne idan ba ku tabbata ba.",
            "Ku yi amfani da prompt mai sassa uku iri ɗaya ga kowanne: aikin, bayanin kasuwancinku, da tsarin amsa. Sannan ku inganta shi da tambayoyin biyo baya kamar \"ka gajarta\", \"ka sa ta zama mai fara'a\" ko \"ka ba ni zaɓi uku\".",
            "Ku gwada prompt iri ɗaya a mataimaka biyu ku kwatanta. Nan da nan za ku ga wanda ya dace da salonku. Tsare-tsaren kyauta suna da iyaka da ke canjawa; ku duba shafin farashi na kayan da kansa don abin da ke ciki a yau."
          ],
          steps: ["Ku buɗe mataimaki ɗaya a burauzar intanet ko manhajarsa ta hukuma.", "Ku rubuta prompt mai sassa uku don wani aikin kasuwanci na gaske.", "Ku nemi gyara ɗaya.", "Ku liƙa prompt iri ɗaya a mataimaki na biyu ku kwatanta."],
          words: [["Tsarin kyauta (free plan)", "sigar kaya da za ku iya amfani da ita ba tare da biya ba, yawanci da iyaka."]],
          slides: [
            { title: "Mataimakan hira uku masu kyauta", bullets: ["ChatGPT: chatgpt.com", "Microsoft Copilot: copilot.microsoft.com", "Google Gemini: gemini.google.com"] },
            { title: "Wanne?", bullets: ["Asusun Microsoft: ku gwada Copilot", "Asusun Google: ku gwada Gemini", "Ba ku tabbata ba: ku gwada biyu ku kwatanta"] },
            { title: "Ku yi amfani da shi da kyau", bullets: ["Aiki + bayani + tsarin amsa", "Ku nemi canji ɗaya a lokaci ɗaya", "Ku duba iyaka a shafin farashi na kayan da kansa"] }
          ],
          tryIt: "Ku rubuta prompt da ke neman bayanin kasuwancinku mai kalmomi 50 don shafin kafofin sada zumunta. Ku gwada shi a mataimakan hira biyu. Ku ajiye wanda ya fi kyau, ku rubuta wane kaya kuka zaɓa.",
          youCanNow: "zaɓar mataimakin hira da ya dace da asusunku da amfani da shi don rubutun kasuwanci na gaske.",
          quickCheck: [
            { objective: "O2", q: "Wace hanya ce ta adalci don kwatanta mataimakan hira biyu?", options: ["Ku zaɓi wanda tambarinsa ya fi kyau", "Ku yi tambaya daban a kowanne", "Ku gwada prompt iri ɗaya a duka biyun", "Ku yi amfani da wanda ya fara buɗewa"], answer: 2, why: "Prompt iri ɗaya yana nuna wane kaya ne ya fi amsa buƙatarku." },
            { objective: "O2", q: "Shagonku yana amfani da Outlook da Word kowace rana. Wane mataimakin hira za ku fara gwadawa?", options: ["Wanda ke buƙatar sabon asusu", "Kayan biyan kuɗi da ba ku taɓa jin labarinsa ba", "Babu ko ɗaya", "Microsoft Copilot"], answer: 3, why: "Kayan da ya dace da asusun da kuke amfani da su shi ne zaɓi na farko na halitta." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Zane da AI a Canva",
          minutes: 5,
          goal: "Yin sauƙaƙan hoto mai alamar kasuwancinku da Canva.",
          text: [
            "Canva (canva.com) kayan zane ne mai tsarin kyauta, dubban samfura (templates) da abubuwan AI da ke iya ba da shawarar rubutu, ƙirƙirar hotuna da canja girman zane. Ba ku buƙatar koyon zane don yin takardar talla ko saƙon kafofin sada zumunta mai tsabta.",
            "Ku fara daga samfuri, ba shafi marar komai ba. Ku nemi abin da kuke buƙata, kamar \"Instagram post bakery\" ko \"flyer cleaning service\". Ku canja kalmomin, ku saka launukanku da tambarinku, ku sa shi ya zama mai sauƙi: saƙo ɗaya, hoto ɗaya, kira ɗaya zuwa mataki.",
            "Idan kun yi amfani da hoton da AI ya ƙirƙira, ku duba shi sosai don kurakurai kamar hannaye masu ban mamaki ko kalmomin da aka rubuta ba daidai ba, kuma kada ku yi hoton da ke kwaikwayon tambarin wani, alamar kasuwancinsa ko mutum na gaske ba tare da izini ba."
          ],
          steps: ["Ku buɗe canva.com ku shiga ko ku buɗe asusu kyauta.", "Ku nemi samfuri don zanen da kuke buƙata.", "Ku canja rubutun zuwa saƙonku da kiran ku zuwa mataki.", "Ku saka launukanku da tambarinku.", "Ku duba rubutu da hotuna, sannan ku sauke shi."],
          words: [["Samfuri (template)", "zanen da aka riga aka yi wanda kuke canjawa don ya dace da kasuwancinku."], ["Launukan kasuwanci (brand colors)", "launuka biyu ko uku da kuke amfani da su koyaushe don abokan ciniki su gane ku."]],
          slides: [
            { title: "Canva don kasuwanci", bullets: ["Tsarin kyauta mai samfura", "AI don ba da shawarar rubutu da yin hotuna", "Ba a buƙatar koyon zane"] },
            { title: "Ku fara daga samfuri", bullets: ["Ku nemi \"flyer cleaning service\" ko makamancinsa", "Ku canja kalmomin", "Ku saka launukanku da tambarinku"] },
            { title: "Ku sa shi ya zama mai sauƙi", bullets: ["Saƙo ɗaya", "Hoto ɗaya", "Kira ɗaya zuwa mataki"] },
            { title: "Ku duba hotunan AI", bullets: ["Ku nemi hannaye masu ban mamaki ko kalmomin da aka rubuta ba daidai ba", "Kada ku kwaikwayi wasu kamfanoni ko mutane na gaske"] }
          ],
          tryIt: "Ku yi saƙon kafofin sada zumunta ko takardar talla ɗaya don kasuwancinku a Canva daga samfuri. Ku yi amfani da bayanin kasuwancinku daga darasin da ya gabata da kira ɗaya zuwa mataki. Ku sauke shi.",
          youCanNow: "yin hoto mai tsabta mai alamar kasuwancinku a Canva da duba hotunan AI kafin ku yi amfani da su.",
          quickCheck: [
            { objective: "O3", q: "Mene ne kira zuwa mataki (call to action) a takardar talla?", options: ["Mataki na gaba a sarari, kamar \"Ku tura mana tes don yin odar lokaci\"", "Hoton", "Girman rubutu", "Tambarinku"], answer: 0, why: "Kira zuwa mataki yana faɗa wa mutane abin da za su yi a gaba." },
            { objective: "O3", q: "AI ya yi muku hoto da ke kama da tambarin wani sanannen kamfani. Me za ku yi?", options: ["Ku yi amfani da shi; AI ne ya yi shi", "Kada ku yi amfani da shi, ku yi wani hoto daban", "Ku rage shi don kada kowa ya lura", "Ku saka sunanku a samansa"], answer: 1, why: "Bai kamata ku yi amfani da hotunan da ke kwaikwayon tambarin wani kamfani ba." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Manyan nau'ikan kayan AI",
        questions: [
          { objective: "O1", q: "Wane kaya ne ya dace da aikin \"zane\"?", options: ["Na'urar lissafi (calculator)", "Canva", "Akwatin imel", "Manhajar banki"], answer: 1, why: "Canva yana yin takardun talla, hotunan kafofin sada zumunta da sauran hotuna." },
          { objective: "O2", q: "Kasuwancinku yana amfani da Microsoft Outlook da Word. Wane mataimakin hira ne zaɓi na farko na halitta?", options: ["Manhajar taswira", "Manhajar zane da hannu", "Manhajar waƙa", "Microsoft Copilot"], answer: 3, why: "Copilot ya dace da kasuwancin da suka riga suka yi amfani da asusun Microsoft." },
          { objective: "O1", q: "Kafin ƙara sabon kayan AI, wace tambaya ce ta fi muhimmanci?", options: ["Wane aiki yake yi, kuma ina da wani kaya don shi?", "Tambarinsa yana da kyau?", "Ya shahara a TikTok?", "Yana da yanayin duhu (dark mode)?"], answer: 0, why: "Ku fara daga aikin; ku guji biyan kuɗin kayan da ke maimaita abin da kuke da shi." },
          { objective: "O3", q: "Wace hanya ce mafi kyau don fara zane a Canva?", options: ["Shafi marar komai", "Kwafar takardar talla ta abokin hamayya", "Samfurin da kuke canjawa", "Rubuta bayanan bankinku"], answer: 2, why: "Samfura suna ba ku tsari mai tsabta da za ku daidaita." },
          { objective: "O3", q: "Hoton AI na takardar tallarku yana da kalmar da aka rubuta ba daidai ba a kan allon alama. Me za ku yi?", options: ["Ku yi amfani da shi duk da haka", "Ku saka shi sau biyu", "Ku gyara shi ko ku yi sabon hoto kafin ku yi amfani da shi", "Ku ɗora laifi a kan abokin ciniki"], answer: 2, why: "Ku duba hotunan AI don kurakurai kafin su fita." }
        ]
      }
    },
    {
      name: "Babi na 2: AI a kayan kasuwancinku na yau da kullum",
      lessons: [
        {
          objectives: ["O4"],
          title: "AI a takardu da spreadsheet",
          minutes: 5,
          goal: "Amfani da AI don rubuta daftarin takarda da fahimtar spreadsheet.",
          text: [
            "Google Docs da Sheets da Microsoft Word da Excel yanzu suna da mataimakan AI a tsare-tsare da yawa (Gemini a Google Workspace, Copilot a Microsoft 365). Abubuwan da kuke samu sun dogara da tsarinku, kuma hakan yana canjawa, don haka ku duba shafukan taimako na asusunku.",
            "Idan tsarinku ba shi da mataimakin da ke ciki, har yanzu kuna iya amfani da mataimakin hira kyauta: ku liƙa rubutu babu bayanan sirri, ko ku bayyana ginshiƙanku (columns), ku nemi daftari, formula ko bayani.",
            "Buƙatu masu amfani: \"Ka mayar da waɗannan bayanai daftarin yarjejeniyar hidima na shafi ɗaya don lauyana ya duba.\" \"Ka rubuta formula ta spreadsheet da ke haɗa ginshiƙi C idan ginshiƙi B ya ce Paid.\" \"Ka bayyana abin da wannan formula ke yi.\" Koyaushe ku gwada formula a 'yan layuka da za ku iya dubawa da hannu."
          ],
          steps: ["Ku buɗe takarda ko spreadsheet da kuke amfani da ita.", "Ku nemi mataimakin AI da ke ciki; idan babu, ku buɗe mataimakin hira.", "Ku nemi daftari ko formula, kuna bayyana ginshiƙanku ba tare da bayanan sirri ba.", "Ku gwada kowace formula a 'yan layuka da za ku iya dubawa da kanku."],
          words: [["Formula", "umarni a cikin akwatin spreadsheet da ke lissafa wani abu, kamar jimilla."], ["Google Workspace / Microsoft 365", "sigogin kasuwanci na biyan kuɗi na kayan ofis na Google da Microsoft."]],
          slides: [
            { title: "Mataimakan AI da ke ciki", bullets: ["Gemini a Google Workspace", "Copilot a Microsoft 365", "Abubuwan sun dogara da tsarinku; ku duba shafukan taimako"] },
            { title: "Babu mataimaki a ciki?", bullets: ["Ku yi amfani da mataimakin hira kyauta", "Ku bayyana ginshiƙanku, babu bayanan sirri", "Ku nemi daftari, formula ko bayani"] },
            { title: "Ku gwada kafin ku amince", bullets: ["Ku gwada formula a 'yan layuka", "Ku duba amsar da hannu", "Ku sa lauya ya duba daftarin shari'a"] }
          ],
          sources: [{ name: "Google Workspace: abubuwan Gemini", url: "https://workspace.google.com/solutions/ai/" }, { name: "Taimakon Microsoft: Copilot", url: "https://support.microsoft.com/en-us/copilot" }],
          tryIt: "Ku bayyana wa mataimakin AI sauƙaƙan takardar tallace-tallace (rana, kaya, adadin kuɗi, an biya ko ba a biya ba) ku nemi formula da ke haɗa tallace-tallacen da aka biya kaɗai. Ku yi takardar gwaji mai layuka biyar ku duba formula da hannu.",
          youCanNow: "amfani da AI don rubuta daftarin takardu da rubutawa da gwada formula ta spreadsheet.",
          quickCheck: [
            { objective: "O4", q: "Mene ne formula ta spreadsheet?", options: ["Jadawali (chart)", "Nau'in rubutu (font)", "Umarni a cikin akwati da ke lissafa wani abu", "Sunan fayil"], answer: 2, why: "Formula tana lissafa sakamako daga bayanan da ke takardarku." },
            { objective: "O4", q: "Kuna son AI ya rubuta formula don takardar tallace-tallacen abokan cinikinku. Me za ku bayar?", options: ["Duka takardar da sunayen abokan ciniki", "Lambobin wayar abokan ciniki", "Bayanan shiga bankinku", "Bayanin ginshiƙan ba tare da bayanan sirri ba"], answer: 3, why: "Bayyana ginshiƙan yana ba ku formula ba tare da bayar da bayanan sirri ba." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Bayanan taro da rubuta magana",
          minutes: 4,
          goal: "Mayar da taro ko saƙon murya bayanai masu sarari da ayyukan yi da AI.",
          text: [
            "Kayan da yawa yanzu suna iya mayar da magana zuwa rubutu: na'urar naɗar murya a wayoyi da yawa, abubuwan rubuta magana a Microsoft Teams, Google Meet da Zoom a wasu tsare-tsare, da rubutu da murya a Google Docs (Tools, sannan Voice typing) ko dictation a Word.",
            "Da zarar kun sami rubutun, mataimakin hira yana iya mayar da shi taƙaitawa mai shawarwarin da aka yanke da ayyukan yi: wane ne zai yi me, zuwa yaushe. Ku cire bayanan sirri na abokan ciniki kafin ku liƙa.",
            "Koyaushe ku faɗa wa mutane kafin ku naɗa ko ku rubuta magana ta kira. Dokokin naɗar kira sun bambanta a jiha da ƙasa, kuma wasu suna buƙatar izinin kowa, don haka neman izini da farko ita ce al'ada mai aminci."
          ],
          steps: ["Ku faɗa wa kowa cewa kuna son naɗa ko rubuta magana, ku sami amincewarsu.", "Ku naɗa ko ku rubuta maganar taron ko saƙon murya.", "Ku cire bayanan sirri daga rubutun.", "Ku tambayi AI: \"Ka taƙaita wannan zuwa shawarwarin da aka yanke da ayyukan yi: wane ne, me, zuwa yaushe.\"", "Ku kwatanta taƙaitawar da abin da kuka tuna."],
          words: [["Aikin yi (action item)", "aiki daga taro mai mutumin da zai yi shi da ranar ƙarewa."], ["Izini (consent)", "amincewar da mutum ya bayar kafin a yi wani abu."]],
          slides: [
            { title: "Daga magana zuwa rubutu", bullets: ["Na'urorin naɗar murya a waya", "Teams, Meet da Zoom a wasu tsare-tsare", "Voice typing a Docs, dictation a Word"] },
            { title: "Daga rubutu zuwa ayyukan yi", bullets: ["Ku liƙa rubutun, ba tare da bayanan sirri ba", "Ku nemi shawarwarin da aka yanke da ayyukan yi", "Wane ne, me, zuwa yaushe"] },
            { title: "Koyaushe ku fara neman izini", bullets: ["Ku faɗa wa mutane kafin naɗa", "Dokokin naɗa sun bambanta a wurare", "Wasu wurare suna buƙatar izinin kowa"] }
          ],
          tryIt: "Ku naɗa saƙon murya na minti biyu game da abin da kasuwancinku dole ya yi a wannan makon. Ku mayar da shi rubutu da voice typing ko da wayarku, sannan ku nemi mataimakin AI ya mayar da shi jerin ayyuka mai ranaku.",
          youCanNow: "mayar da bayanan da aka faɗa rubutaccen jerin ayyuka, da neman izini kafin naɗar wasu.",
          quickCheck: [
            { objective: "O5", q: "Waɗanne abubuwa uku ya kamata kowane aikin yi ya faɗa?", options: ["Wane ne, me, da zuwa yaushe", "A ina, me yasa, da nawa", "Rana, yanayi da batun", "Batun kaɗai"], answer: 0, why: "Wane ne zai yi me zuwa yaushe yana sa aikin yi ya kasance a sarari." },
            { objective: "O5", q: "Kuna son naɗa kira da mai kawo muku kaya don rubuta bayanai. Me za ku fara yi?", options: ["Ku naɗa shi a ɓoye", "Ku faɗa masa ku nemi izininsa", "Ku naɗa rabin kiran kaɗai", "Ku tambayi AI ko an yarda"], answer: 1, why: "Ku faɗa wa mutane ku sami izini kafin naɗa." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Haɗa kundin kayanku da kiyaye shi lafiya",
          minutes: 5,
          goal: "Zaɓar kaya ɗaya don kowane aiki da saka doka ta tsaro ɗaya don kowanne.",
          text: [
            "Kundin kaya da kuke amfani da shi da gaske ya fi dogon jerin manhajojin da kuka gwada sau ɗaya. Don kowane cikin ayyuka huɗun, ku zaɓi kaya ɗaya, ku rubuta ko kuna kan tsarin kyauta ko na biyan kuɗi, ku rubuta abu ɗaya da kuka yi da shi.",
            "Ku duba saitunan bayanai na kowane kaya. Da yawa suna barin ku kashe tarihin hira ko hana amfani da abubuwanku don koyar da AI. Tsare-tsaren kasuwanci sau da yawa suna da sharuɗɗan sirri masu ƙarfi; ku karanta shafin sirri na kayan kafin ku saka takardun kasuwanci.",
            "Ku saka doka ɗaya mai sauƙi don kowane kaya, kamar \"Babu lambobin wayar abokan ciniki a ChatGPT\" ko \"Hotunan Canva da na duba kaɗai zan sauke\". Ku sake duba kundin kayanku bayan 'yan watanni, domin kaya, abubuwan da suke yi da farashinsu suna canjawa."
          ],
          steps: ["Ku jera ayyuka huɗun.", "Ku zaɓi kaya ɗaya don kowanne ku rubuta kyauta ne ko na biyan kuɗi.", "Ku buɗe saitunan kowane kaya ku nemo zaɓuɓɓukan bayanai ko sirri.", "Ku rubuta doka ta tsaro ɗaya don kowane kaya.", "Ku saka tunatarwa don sake duba kundin kayan bayan watanni uku."],
          words: [["Kundin kaya (toolkit)", "gajeren jerin kayan da kuke dogara da su, da abin da kowanne yake yi."], ["Saitunan sirri (privacy settings)", "zaɓuɓɓukan da ke sarrafa abin da kaya yake ajiyewa da yadda yake amfani da bayananku."]],
          slides: [
            { title: "Kaya ɗaya don kowane aiki", bullets: ["Rubutu, zane, takardu, taruka", "Kyauta ko na biyan kuɗi?", "Abu ɗaya da kuka yi da shi"] },
            { title: "Ku duba saitunan bayanai", bullets: ["Ku kashe tarihi ko koyar da AI idan akwai zaɓi", "Tsare-tsaren kasuwanci na iya fi kare bayanai", "Ku fara karanta shafin sirri"] },
            { title: "Doka ta tsaro ɗaya don kowane kaya", bullets: ["\"Babu lambobin wayar abokan ciniki a hira\"", "\"Hotunan da na duba kaɗai zan yi amfani da su\""] },
            { title: "Ku sake dubawa bayan 'yan watanni", bullets: ["Kaya, abubuwan da suke yi da farashinsu suna canjawa"] }
          ],
          tryIt: "Aikin ƙarshe: ku yi \"Kundin Kayan AI Nawa\" na shafi ɗaya: ayyuka huɗu, kaya ɗaya ga kowanne, abu ɗaya da kuka yi da shi a wannan kwas, da doka ta tsaro ɗaya don kowane kaya.",
          youCanNow: "gudanar da kasuwancinku da ƙaramin kundin kayan AI mai aminci da kuke sake dubawa a kan lokaci.",
          quickCheck: [
            { objective: "O6", q: "Mece ce dokar tsaro ta kundin kaya?", options: ["Jerin farashi", "Shafin shiga na wani kaya", "Doka kamar \"babu lambobin wayar abokan ciniki a hirar AI\"", "Ajiyar kwafin fayilolinku"], answer: 2, why: "Doka ta tsaro tana faɗin yadda kuke kare bayanai a kowane kaya." },
            { objective: "O6", q: "Watanni shida bayan kun yi kundin kayanku, wani kaya ya canja tsarinsa na kyauta. Me za ku yi?", options: ["Ku ƙyale shi", "Ku goge kundin kayan", "Ku ci gaba da biya ba tare da dubawa ba", "Ku duba shafin farashi na kayan da kansa ku sabunta kundin kayanku"], answer: 3, why: "Kaya da farashi suna canjawa, don haka kuna sake duba kundin kayan a kan lokaci." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: AI a kayan kasuwancinku na yau da kullum",
        questions: [
          { objective: "O4", q: "Tsarin spreadsheet ɗinku ba shi da mataimakin AI a ciki. Me za ku iya yi?", options: ["Ku bayyana ginshiƙanku ga mataimakin hira kyauta ku nemi formula", "Ku haƙura", "Ku liƙa lambobin katin abokan cinikinku a AI", "Ku sayi kowace manhajar AI"], answer: 0, why: "Mataimakin hira yana iya rubuta formula daga bayani ba tare da bayanan sirri ba." },
          { objective: "O4", q: "AI ya rubuta muku formula ta spreadsheet. Me ya kamata ku yi kafin ku amince da ita?", options: ["Ku goge takardar", "Ku yi amfani da ita a kan dukan shekara lokaci ɗaya", "Ku tura ta ga abokan ciniki", "Ku gwada ta a 'yan layuka da za ku iya dubawa da hannu"], answer: 3, why: "Gwaji a 'yan layuka yana kama kurakurai." },
          { objective: "O5", q: "Me ya kamata ku yi kafin ku naɗa kira da abokin ciniki?", options: ["Ku naɗa a ɓoye", "Ku faɗa masa ku sami izininsa", "Ku naɗa minti na farko kaɗai", "Ku saka shi a intanet"], answer: 1, why: "Dokokin naɗa sun bambanta, kuma wasu suna buƙatar izinin kowa." },
          { objective: "O5", q: "Aikin yi ya kamata ya faɗi:", options: ["Wane ne zai yi me zuwa yaushe", "Ranar taron kaɗai", "Tsawon lokacin taron", "Wane ne ya makara"], answer: 0, why: "Ayyukan yi suna ambaton mutum, aiki da ranar ƙarewa." },
          { objective: "O6", q: "Me yasa za ku sake duba kundin kayan AI ɗinku bayan 'yan watanni?", options: ["Don ku rufe kasuwancinku", "Doka ce ta tilasta", "Kaya, abubuwan da suke yi da farashinsu suna canjawa", "Domin AI yana mantawa"], answer: 2, why: "Sake dubawa akai-akai yana sa kundin kayanku ya kasance na zamani kuma mai sauƙin kuɗi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Kayan AI da Kowane Ɗan Kasuwa Ya Kamata Ya Sani",
    questions: [
      { objective: "O1", q: "Ayyuka huɗu na kayan AI a wannan kwas su ne:", options: ["Banki, jigilar kaya, ɗaukar ma'aikata, haraji", "Rubutu, zane, takardu da lissafi, taruka da bayanai", "Waƙa, wasanni, fina-finai, wasannin motsa jiki", "Wayoyi, kwamfutocin tafi-da-gidanka, tablet, agogo"], answer: 1, why: "Waɗannan ayyuka huɗu suna rufe yawancin buƙatun ƙaramin kasuwanci." },
      { objective: "O2", q: "Wanne ne mataimakin hira?", options: ["Motar isar da kaya", "Na'urar karanta barcode", "Aljihun kuɗi na shago", "Google Gemini"], answer: 3, why: "Gemini, ChatGPT da Copilot mataimakan hira ne." },
      { objective: "O1", q: "Me yasa za ku fara da kaya ɗaya don kowane aiki?", options: ["Don abokan ciniki su ga manhajojinku", "Doka ce", "Kayan AI ba sa iya raba ayyuka", "Yana sa abubuwa su kasance masu sauƙi kuma yana hana biyan kuɗi sau biyu"], answer: 3, why: "Ƙaramin kundin kaya ya fi sauƙin koyo kuma ya fi araha." },
      { objective: "O1", q: "A ina ya kamata ku duba abin da tsarin kyauta na wani kaya ya ƙunsa a yau?", options: ["Wani sharhi a ƙarƙashin bidiyo", "Shafin farashi na kayan da kansa", "Abokin cinikinku", "Tsohuwar takardar talla"], answer: 1, why: "Tsare-tsare suna canjawa; shafin hukuma shi ne na yanzu." },
      { objective: "O2", q: "Kasuwancinku yana amfani da Gmail da Google Drive. Mataimakin hira na halitta da za ku fara gwadawa shi ne:", options: ["Na'urar fax", "Matatar hoto (photo filter)", "Google Gemini", "Mai ƙirga kalmomi"], answer: 2, why: "Gemini ya dace da kasuwancin da ke amfani da asusun Google." },
      { objective: "O2", q: "Hanya mai kyau ta kwatanta mataimakan hira biyu ita ce:", options: ["Gwada prompt iri ɗaya a duka biyun", "Karanta tallansu kaɗai", "Tambayar baƙo", "Zaɓar wanda ya fi sabo"], answer: 0, why: "Prompt iri ɗaya a kaya biyu yana nuna wanda ya dace da salonku." },
      { objective: "O3", q: "A Canva, hanya mafi sauri zuwa zane mai tsabta ita ce:", options: ["Kwafar tambarin wani kamfani", "Farawa daga shafi marar komai", "Farawa daga samfuri", "Amfani da nau'ikan rubutu goma"], answer: 2, why: "Samfura suna ba ku tsari da aka riga aka shirya." },
      { objective: "O3", q: "Sauƙaƙan takardar talla ya kamata ta kasance da:", options: ["Saƙo ɗaya, hoto ɗaya, kira ɗaya zuwa mataki", "Kowane kaya da kuke sayarwa", "Ƙananan rubutu kaɗai", "Babu sunan kasuwanci"], answer: 0, why: "Zane mai sauƙi ya fi sauƙin karantawa." },
      { objective: "O3", q: "Kada ku yi amfani da AI don yin hoton da:", options: ["Ke nuna kayanku", "Ke kwaikwayon tambarin wani kamfani", "Ke amfani da launukan kasuwancinku", "Ke da sunan shagonku a rubuce daidai"], answer: 1, why: "Kwaikwayon alamar wani kamfani na iya karya dokokin alamar kasuwanci ko haƙƙin mallaka." },
      { objective: "O4", q: "Gemini a Google Workspace da Copilot a Microsoft 365 su ne:", options: ["Hidimomin isar da kaya", "Firinta", "Manhajojin biyan kuɗi", "Mataimakan AI da ke cikin kayan ofis a tsare-tsare da yawa"], answer: 3, why: "Suna ƙara AI a takardu, imel da spreadsheet." },
      { objective: "O4", q: "Idan kuna neman AI ya rubuta formula ta spreadsheet, ya kamata ku bayar da:", options: ["Bayanin ginshiƙan, ba tare da bayanan sirri ba", "Lambobin katin abokan ciniki", "Kalmar sirrin bankinku", "Lambar harajinku"], answer: 0, why: "Bayyana ginshiƙan ya isa don samun formula." },
      { objective: "O4", q: "Formula ta spreadsheet ita ce:", options: ["Adireshin imel", "Wani nau'in jadawali", "Nau'in rubutu (font)", "Umarni a cikin akwati da ke lissafa wani abu"], answer: 3, why: "Formula tana lissafa ƙima kamar jimilla." },
      { objective: "O4", q: "AI ya rubuta muku daftarin yarjejeniyar hidima. Me ke biye?", options: ["Ku saka shi a intanet", "Ku sa hannu da abokan ciniki nan take", "Ku sa lauya ya duba shi kafin ku yi amfani da shi", "Ku goge tsohuwar ba tare da karantawa ba"], answer: 2, why: "Ya kamata ƙwararre ya duba takardun shari'a." },
      { objective: "O5", q: "Voice typing a Google Docs yana barin ku:", options: ["Biyan kuɗaɗe", "Yin magana a rubuta kalmominku", "Zana tambari", "Aika kaya"], answer: 1, why: "Yana mayar da magana zuwa rubutu." },
      { objective: "O5", q: "Bayan kun rubuta maganar taro, buƙata mai amfani ga AI ita ce:", options: ["\"Ka mayar da shi code.\"", "\"Ka tsawaita shi.\"", "\"Ka ƙara bayanai na kara-zube.\"", "\"Ka taƙaita wannan zuwa shawarwarin da aka yanke da ayyukan yi: wane ne, me, zuwa yaushe.\""], answer: 3, why: "Wannan yana mayar da dogon rubutu zuwa matakai na gaba a sarari." },
      { objective: "O5", q: "Kafin ku naɗa kira, ya kamata ku:", options: ["Naɗa ɗayan mutumin kaɗai", "Ɓoye na'urar naɗa", "Faɗa wa mutane ku sami izininsu", "Tambayi AI ko an halatta ku ƙyale tambayar su"], answer: 2, why: "Dokokin izini sun bambanta a wurare; neman izini da farko shi ne mafi aminci." },
      { objective: "O6", q: "Kayan AI da yawa suna barin ku canja saitunan bayanai don:", options: ["Kada a ajiye hirarku ko a yi amfani da ita don koyar da AI", "Farashinku ya hau", "Abokan cinikinku su sami imel", "Tambarinku ya canja"], answer: 0, why: "Saitunan sirri suna sarrafa abin da kayan ke ajiyewa." },
      { objective: "O6", q: "Wace ce doka mai kyau ta tsaron kundin kaya?", options: ["\"Ku raba kalmomin sirri da AI\"", "\"Babu lambobin wayar abokan ciniki a hirar AI\"", "\"Kada ku taɓa duba hotunan AI\"", "\"Ku yi amfani da kowace sabuwar manhaja\""], answer: 1, why: "Dokoki masu sauƙi suna kare abokan cinikinku." },
      { objective: "O6", q: "Kundin kayanku na shafi ɗaya yana jera wa kowane aiki:", options: ["Kuɗin da ke bankinku", "Kayan, kyauta ko na biyan kuɗi, abin da kuka yi, doka ta tsaro", "Kalmomin sirrin abokan hamayyarku", "Kowace manhaja da kuka taɓa gwadawa"], answer: 1, why: "Wannan yana sa kundin kayan ya zama mai amfani kuma mai aminci." },
      { objective: "O6", q: "Me yasa za ku iya zaɓar tsarin kasuwanci na wani kayan AI?", options: ["Yana iya ba da sharuɗɗan sirri masu ƙarfi don takardun kasuwanci", "Koyaushe kyauta ne", "Yana cire buƙatar duba aiki", "Yana rubuta harajinku"], answer: 0, why: "Tsare-tsaren kasuwanci sau da yawa suna fi kare bayanai; ku karanta shafin sirri." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 4, 6, 8, 10, 11, 14, 15, 17] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "An rufe ayyuka huɗu", objective: "O1", notYet: "Wani aiki ya ɓace, ko kaya biyu suna yin aiki ɗaya.", meets: "Rubutu, zane, takardu ko lissafi, da taruka ko bayanai, da kaya ɗaya ga kowanne.", exceeds: "Yana faɗin dalilin da yasa aka zaɓi kowane kaya fiye da wani." },
      { name: "An yi abu da kowane kaya", objective: "O3", notYet: "Akwai kaya ɗaya ko fiye da ba a yi komai da shi ba.", meets: "Yana jera abu ɗaya na gaske da aka yi da kowane kaya, kamar rubutun bayanin kasuwanci, takardar talla, formula da jerin ayyuka.", exceeds: "Abubuwan da aka yi an riga an fara amfani da su a kasuwancin." },
      { name: "An duba sakamako", objective: "O4", notYet: "An yi amfani da formula, hoto ko takarda ba tare da dubawa ba.", meets: "An gwada formula a layukan da aka duba da hannu; an duba hotuna da takardu kafin amfani.", exceeds: "Yana rubuta waɗanne takardu ne ke buƙatar lauya ko ƙwararre ya duba su." },
      { name: "Dokokin tsaro", objective: "O6", notYet: "Wani kaya ba shi da doka ta tsaro, ko doka ba ta da sarari.", meets: "Kowane kaya yana da doka ɗaya bayyananniya game da bayanan abokan ciniki.", exceeds: "Yana kuma rubuta saitin bayanai da aka canja a kowane kaya da lokacin sake duba kundin kayan." },
      { name: "Tsarin kyauta da dacewa", objective: "O2", notYet: "Ba a faɗi kyauta ne ko na biyan kuɗi ba, ko kayan bai dace da asusun kasuwancin ba.", meets: "An rubuta kyauta ko na biyan kuɗi ga kowane kaya, an duba a shafin farashinsa.", exceeds: "Yana rubuta abin da tsarin biyan kuɗi zai ƙara da ko ya cancanci kuɗin." }
    ]
  },
  evaluation: {
    results: [
      "Masu kasuwanci da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu kasuwanci da har yanzu suke amfani da kayan huɗu na kundin kayansu bayan kwanaki 30 (binciken biyo baya)",
      "Masu kasuwanci da suka ce sun soke wani kaya na biyan kuɗi da ke maimaitawa ko ba a amfani da shi",
      "Masu koyo da suka fara wani kwas na Koach Learn na 'yan kasuwa cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai intanet",
      "Asusun kyauta: mataimakin hira, Canva, da Google Docs da Sheets ko Microsoft 365",
      "Waya don ɗan gajeren saƙon murya",
      "Kusan minti 60 gaba ɗaya don darussa, ayyuka, gwaje-gwaje da shafin kundin kaya"
    ],
    facilitatorNotes: [
      "Ku sa masu kasuwanci su zo da ainihin bayanin kasuwancinsu; za a sake amfani da shi a Darasi na 2 da na 3.",
      "Ku duba tsare-tsaren kyauta na yanzu a shafin farashi na kowane kaya kafin zaman, domin suna canjawa sau da yawa.",
      "Ku tunatar da masu koyo su nemi izini kafin naɗar kowa, kuma kada su saka bayanan abokan ciniki a hirar AI.",
      "Ku yi amfani da takardar gwaji mai layuka biyar da bayanan ƙirƙira don atisayen formula.",
      "Ku ba da maki ga shafin kundin kaya da ma'aunin rubric, layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
