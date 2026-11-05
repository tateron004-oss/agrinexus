"use strict";

// Koach Learn course, Hausa (ha) translation of small-business/smallbiz-essential-ai-tools.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "smallbiz-essential-ai-tools-ha",
  lang: "ha",
  translationOf: "smallbiz-essential-ai-tools",
  category: "Small Business",
  name: "Muhimman Kayan AI ga Ƙananan Kasuwanci",
  skills: "Zaɓar kayan AI da ya dace da aiki, Amfani da mataimakin hira don rubutun kasuwanci, Yin hotunan talla da Canva, Amfani da AI a takardu da spreadsheet, Gina akwatin kayan AI na farko",
  outcome: "zaɓar kayan AI kyauta da ya dace da wani aikin kasuwanci, da amfani da shi: mataimakin hira don rubutu, Canva don takardar talla (flyer) ko rubutu a kafofin sada zumunta, da kayan takardu ko spreadsheet don jerin farashi ko teburin tallace-tallace mai sauƙi, sannan ku haɗa su a cikin akwatin kayan aiki na farko da za ku riƙa amfani da shi kowane mako.",
  about: [
    "Wannan kwas ɗin na masu ƙananan kasuwanci ne da ke son 'yan kayan aiki kaɗan masu amfani, maimakon bin kowace sabuwar manhaja. Misalanmu daga shaguna ne, gidajen abinci, wuraren gyaran gashi, hidimar tsaftacewa da gyara, da motocin sayar da abinci.",
    "Za ku koyi irin kayan AI da ake da su, ku gwada mataimakin hira, kayan zane, da taimakon AI da ke cikin takardu da spreadsheet, sannan ku gama da akwatin kayan aikinku: wane kayan aiki don wane aiki, da abin da ba za ku taɓa sakawa a cikinsa ba.",
    "Farashi, sunayen tsare-tsare (plans) da abubuwan da kayan aiki ke iya yi suna canjawa sau da yawa. Muna bayanin abin da za a yi, ba ainihin sunayen menu ba; ku duba shafin hukuma na kowane kayan aiki don ganin tsarinsa na kyauta na yanzu. Kowane darasi yana ɗaukar kusan minti biyar, da aikin \"Gwada yanzu\", gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku gina akwatin kayan AI na farko: tebur mai shafi ɗaya mai kayan aiki uku zuwa biyar da za ku yi amfani da su, aikin da kowanne zai yi a kasuwancinku, ko kuna amfani da tsarin kyauta, da ƙa'idar tsaro ɗaya ga kowanne. Sannan ku nuna cewa yana aiki ta hanyar yin abu ɗaya na gaske da kowane kayan aiki: saƙo ga abokin ciniki (mataimakin hira), takardar talla ko rubutu a kafofin sada zumunta (Canva), da jerin farashi ko teburin tallace-tallace (Docs/Word ko Sheets/Excel).",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Masu ƙananan kasuwanci da ke son 'yan kayan AI kaɗan masu amfani, maimakon bin kowace sabuwar manhaja: shaguna, gidajen abinci, wuraren gyaran gashi, hidimar tsaftacewa da gyara, da motocin sayar da abinci.",
    startingPoint: "Suna amfani da waya ko kwamfuta don saƙonnin kasuwanci, kuma wataƙila sun gwada mataimakin hira na AI ɗaya. Ba su da ƙwarewa sosai a kayan zane, mataimakan AI na cikin takardu, ko spreadsheet mai formula.",
    gap: "Masu kasuwanci suna ɓata lokaci da kuɗi wajen gwada manhajoji da yawa ko biyan ƙarin tsare-tsare da ba sa buƙata, kuma suna iya saka bayanan abokan ciniki a kayan aikin da bai dace ba. Suna buƙatar 'yan kayan aiki kaɗan na kyauta, kowanne da aikinsa a sarari da ƙa'idar tsaro, waɗanda za su riƙa amfani da su kowane mako.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli",
      "Na'urori: wayar zamani ko kwamfuta; spreadsheet ya fi sauƙi a kwamfuta",
      "Lokaci: darussa na kusan minti 5 da suka dace da ranar aiki mai cike da ayyuka",
      "Farashi, sunayen tsare-tsare da abubuwan da kayan aiki ke yi suna canjawa; ku duba shafin hukuma na kowane kayan aiki don tsarinsa na kyauta na yanzu",
      "Sirri: kada a saka lambobin katin abokan ciniki, kalmomin sirri ko sunayensu a kayan AI"
    ],
    prerequisites: "Kwas ɗin \"Introduction to AI for Small Business\" (Gabatarwa ga AI don Ƙananan Kasuwanci) yana da amfani, amma ba dole ba ne."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku manyan nau'o'in kayan AI", action: "haɗa kowane nau'in kayan aiki da wani aiki a kasuwancinku", standard: "da aiki ɗaya ga kowanne daga cikin nau'o'i huɗu" },
    { id: "O2", condition: "Ta amfani da mataimakin hira kyauta", action: "yin abubuwan kasuwanci daban-daban guda uku a cikin hira ɗaya", standard: "da bayanan kasuwancinku da aka bayar sau ɗaya a farko, kuma an duba kowace lamba" },
    { id: "O3", condition: "Ta amfani da samfurin Canva (template)", action: "yin takardar talla ko rubutu a kafofin sada zumunta don wani tayi ko taron gaske", standard: "da babban saƙo ɗaya, yadda za a same ku, an duba kowace kalma, kuma hotunan da kuke da iznin amfani da su kaɗai" },
    { id: "O4", condition: "Idan kuna da rubutun gaggawa da Google Docs ko Microsoft Word", action: "mayar da rubutun zuwa takardar kasuwanci mai tsabta da taimakon AI", standard: "an ajiye ta a takardarku, kuma ƙwararre ko majiyar hukuma ta duba kalmomin shari'a" },
    { id: "O5", condition: "Ta amfani da Google Sheets ko Microsoft Excel", action: "gina teburin tallace-tallace ko na kaya, da samun taimakon AI wajen karanta shi", standard: "da aƙalla layuka 10, formula na SUM don jimilla, kuma an tabbatar da amsar AI a cikin spreadsheet ɗin" },
    { id: "O6", condition: "Idan aka ba ku kayan aikin da kuka gwada", action: "yin teburin akwatin kayan aiki na farko mai kayan aiki uku zuwa biyar, da aiki da ƙa'idar tsaro ga kowanne", standard: "yana lissafa kayan aiki, aiki, tsari da ƙa'idar tsaro, kuma an yi amfani da tsarin kyauta kafin a biya" }
  ],
  chapters: [
    {
      name: "Babi na 1: Manyan nau'o'in kayan AI",
      lessons: [
        {
          objectives: ["O1"],
          title: "Taswirar kayan AI ga ƙananan kasuwanci",
          minutes: 5,
          goal: "Faɗi manyan nau'o'in kayan AI, ku haɗa kowanne da wani aikin kasuwanci.",
          text: [
            "Ba ku buƙatar manhajoji da yawa. Yawancin ƙananan kasuwanci suna samun mafi yawan amfani daga nau'o'in kayan aiki huɗu.",
            "Mataimakan hira (ChatGPT, Microsoft Copilot, Google Gemini) suna rubutu da bayani: amsoshi, bayanin kaya, tsare-tsare, jerin abubuwan yi. Kayan zane (Canva da sauransu) suna yin takardun talla (flyer), rubuce-rubuce a kafofin sada zumunta, menu da tambari (logo), kuma da yawa yanzu suna da AI da ke taimakawa da rubutu da hotuna. Kayan ofis (Google Docs da Sheets, Microsoft Word da Excel) suna riƙe takardunku da lambobinku, kuma kamfanonin biyu suna ƙara mataimakan AI a cikinsu a wasu tsare-tsare. Kayan aikin da ke cikin wasu manhajoji, kamar na'urar sayarwa (POS), manhajar ajiye lokacin ganawa ko ta imel, suma suna iya samun AI.",
            "Ku fara da kayan aiki ɗaya ga kowane aiki. Ku koye shi sosai kafin ku ƙara wani."
          ],
          words: [["Mataimakin hira (chat assistant)", "kayan AI da kuke magana da shi a akwatin hira, kamar ChatGPT, Copilot ko Gemini."], ["Kayan zane (design tool)", "manhaja don yin hotunan talla kamar flyer da rubuce-rubuce, kamar Canva."], ["Na'urar sayarwa (POS)", "tsarin da kuke amfani da shi don karɓar kuɗin kaya da aka sayar."]],
          slides: [
            { title: "Nau'o'in kayan aiki huɗu", bullets: ["Mataimakan hira: rubutu da bayani", "Kayan zane: takardun talla, rubuce-rubuce, menu", "Kayan ofis: takardu da lambobi", "AI a cikin manhajojin da kuke amfani da su"] },
            { title: "Misalai", bullets: ["ChatGPT, Copilot, Gemini", "Canva", "Google Docs da Sheets; Word da Excel"] },
            { title: "Ku sauƙaƙa shi", bullets: ["Kayan aiki ɗaya ga kowane aiki", "Ku fara koye shi sosai", "Ku ƙara wani sai idan kuna buƙata"] }
          ],
          tryIt: "Ku rubuta nau'o'in kayan aiki huɗu a gefen takarda. Kusa da kowanne, ku rubuta aiki ɗaya a kasuwancinku da zai iya yi a wannan watan.",
          youCanNow: "faɗin manyan nau'o'in kayan AI, da haɗa kowanne da wani aiki a kasuwancinku.",
          quickCheck: [
            { objective: "O1", q: "Wane irin kayan aiki ne ChatGPT, Copilot da Gemini?", options: ["Kayan zane", "Spreadsheet", "Mataimakan hira", "Manhajojin ajiye lokacin ganawa"], answer: 2, why: "Mataimakan hira ne da kuke magana da su don samun daftari da amsoshi." },
            { objective: "O1", q: "Kuna son zana sabon allon menu. Wane irin kayan aiki za ku zaɓa?", options: ["Kayan zane kamar Canva", "Spreadsheet", "Manhajar ajiye lokacin ganawa", "Na'urar lissafi"], answer: 0, why: "Kayan zane suna da samfura (templates) da aka yi don menu da takardun talla." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Samun mafi yawan amfani daga mataimakin hira",
          minutes: 5,
          goal: "Yi amfani da mataimakin hira don yin abubuwan kasuwanci daban-daban guda uku a hira ɗaya.",
          text: [
            "Mataimakin hira shi ne kayan aikinku mafi sauƙin daidaitawa. Yana iya rubutu, sake rubutu, taƙaitawa, fassara da tsara abubuwa. Ku buɗe shi a manhajar wayarku ko a chatgpt.com, copilot.microsoft.com ko gemini.google.com.",
            "Ku ba shi bayanan kasuwancinku sau ɗaya a farkon hira: \"Ina da shagon aski mai kujeru biyu a Long Beach. Salonmu na abokantaka ne da na unguwa. Farashi: aski $30, aski da gyaran gemu $40.\" Sannan ku nemi abubuwa da yawa ɗaya bayan ɗaya: allon farashi, samfurin saƙon tes na tunatarwa, amsa ga sharhin abokin ciniki (review).",
            "Ku nemi zaɓuɓɓuka da tebur idan suna taimakawa: \"Ka ba ni nau'i uku\" ko \"Ka sa wannan a tebur.\" Koyaushe ku duba lambobin da ya maimaita muku."
          ],
          steps: ["Ku buɗe mataimakin hira.", "Ku ba da bayanan kasuwancinku sau ɗaya a farko.", "Ku nemi abu na 1, sannan abu na 2, sannan abu na 3.", "Ku nemi zaɓuɓɓuka ko tebur inda yake taimakawa.", "Ku duba kowace lamba kafin ku yi amfani da ita."],
          words: [["Taƙaitawa (summarize)", "yin gajeren nau'in wani abu mai tsawo."], ["Samfuri (template)", "tsarin da aka riga aka yi wanda kuke cikawa kowane lokaci."]],
          slides: [
            { title: "Mataimaki mai sauƙin daidaitawa", bullets: ["Rubutu, sake rubutu, taƙaitawa, fassara, tsarawa", "Manhajar waya ko burauzar intanet"] },
            { title: "Ku shirya shi sau ɗaya a kowace hira", bullets: ["Irin kasuwancinku da garinku", "Salonku da farashinku", "Sannan ku nemi abu bayan abu"] },
            { title: "Buƙatu masu amfani", bullets: ["\"Ka ba ni nau'i uku.\"", "\"Ka sa wannan a tebur.\"", "Ku duba kowace lamba da ya maimaita"] }
          ],
          tryIt: "A hira ɗaya, ku ba da bayanan kasuwancinku, sannan ku nemi: allon farashi, samfurin saƙon tes na tunatarwa mai \"[customer name]\", da amsar godiya ga sharhi mai kyau.",
          youCanNow: "amfani da hira ɗaya don yin abubuwan kasuwanci da yawa daga bayananku.",
          quickCheck: [
            { objective: "O2", q: "Yaushe ya kamata ku ba da bayanan kasuwancinku a hira?", options: ["Ba sai an bayar ba", "Kowane lokaci a kowace buƙata", "A ƙarshe kawai", "Sau ɗaya a farko"], answer: 3, why: "Ba da bayanai sau ɗaya a farko yana bar kowace amsa a hirar ta yi amfani da su." },
            { objective: "O2", q: "Mataimakin hira ya yi allon farashinku, amma wani farashi kamar bai yi daidai ba. Me za ku yi?", options: ["Ku buga shi duk da haka", "Ku duba kowace lamba da farashinku na gaske ku gyara", "Ku nemi sabon zane", "Ku cire dukkan farashi"], answer: 1, why: "AI yana iya maimaita lambobi ba daidai ba, don haka ku duba kowace ɗaya." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Yin takardar talla ko rubutu a kafofin sada zumunta da Canva",
          minutes: 5,
          goal: "Yi takardar talla ko rubutu mai sauƙi a kafofin sada zumunta da kayan zane na kyauta.",
          text: [
            "Canva kayan zane ne da ke aiki a burauzar intanet da kuma a matsayin manhajar waya. Yana da tsarin kyauta da dubban samfura da aka riga aka yi don takardun talla, menu, rubuce-rubuce a kafofin sada zumunta da katin kasuwanci. Ku duba canva.com don ganin abin da tsarin kyauta ya ƙunsa a yau.",
            "Ku fara daga samfuri, ba shafi mara komai ba. Ku nemi abin da kuke buƙata (\"restaurant flyer\", \"salon Instagram post\"), ku zaɓi ɗaya, sannan ku canja kalmomi, launuka da hotuna zuwa naku. Ku yi amfani da rubutu daga mataimakin hirarku.",
            "Ku yi amfani da hotunanku ko waɗanda kayan aikin ya ba ku iznin amfani da su. Ku sauƙaƙa shi: babban saƙo ɗaya, manyan kalmomi masu sauƙin karantawa, sunan kasuwancinku da yadda za a same ku. Ku duba rubutun adireshinku da lambar wayarku."
          ],
          steps: ["Ku buɗe Canva ku nemi samfuri.", "Ku canja kalmomin zuwa saƙonku.", "Ku saka hotunanku da launukanku.", "Ku ƙara sunanku, adireshinku da yadda za a same ku.", "Ku duba kowace kalma, sannan ku sauke ko ku raba."],
          words: [["Samfuri (template)", "zanen da aka riga aka yi wanda kuke canjawa don ya zama naku."], ["Tsarin kyauta (free plan)", "nau'in kayan aiki da za ku iya amfani da shi ba tare da biya ba, yawanci da wasu iyakoki."]],
          slides: [
            { title: "Canva", bullets: ["Burauza da manhajar waya", "Tsarin kyauta mai samfura da yawa", "Ku duba canva.com don abubuwan kyauta na yau"] },
            { title: "Ku fara daga samfuri", bullets: ["Ku nemi \"restaurant flyer\" ko \"salon post\"", "Ku canja kalmomi, launuka da hotuna", "Ku yi amfani da rubutu daga mataimakin hirarku"] },
            { title: "Ku sa shi a sarari", bullets: ["Babban saƙo ɗaya, manyan kalmomi", "Suna, adireshi, yadda za a same ku", "Ku duba kowace kalma kafin ku raba"] }
          ],
          tryIt: "Ku yi takardar talla ko rubutu don wani tayi ko taron gaske ɗaya a kasuwancinku ta amfani da samfurin Canva. Ku duba kowace kalma ku ajiye shi.",
          youCanNow: "yin takardar talla ko rubutu a kafofin sada zumunta mai sarari daga samfuri da kayan zane na kyauta.",
          quickCheck: [
            { objective: "O3", q: "Me takardar talla mai sarari take da shi?", options: ["Babban saƙo ɗaya da yadda za a same ku", "Rubutu iyakar yadda zai shiga", "Kowane kaya da kuke sayarwa", "Babu bayanan tuntuɓa"], answer: 0, why: "Babban saƙo ɗaya da bayanan tuntuɓa suna sa takardar talla ta yi sauƙin amfani." },
            { objective: "O3", q: "Kun sami kyakkyawan hoto a intanet don takardar talla. Me za ku yi?", options: ["Ku yi amfani da shi domin yana intanet", "Ku yanke shi don kada kowa ya gane", "Ku yi amfani da hotonku ko wanda kuke da iznin amfani da shi", "Ku nemi AI ya kwafe shi"], answer: 2, why: "Hotunan da kuka ɗauka ko kuke da iznin amfani da su kaɗai za ku iya amfani da su." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Manyan nau'o'in kayan AI",
        questions: [
          { objective: "O1", q: "Wane irin kayan aiki ne ya fi dacewa don rubuta amsa ga abokin ciniki?", options: ["Firintar rasidi", "Mataimakin hira", "Na'urar karanta barcode", "Na'urar lissafi"], answer: 1, why: "Mataimakan hira suna rubutu da sake rubutu." },
          { objective: "O1", q: "Wane kayan aiki ne aka sani da samfuran takardun talla da rubuce-rubuce a kafofin sada zumunta?", options: ["Na'urar lissafi", "Tsarin POS", "Excel kawai", "Canva"], answer: 3, why: "Canva kayan zane ne mai samfura." },
          { objective: "O1", q: "Mece ce hanya mai kyau ta fara amfani da kayan AI?", options: ["Kayan aiki ɗaya ga kowane aiki, wanda aka koya sosai", "Saka manhajoji ashirin lokaci ɗaya", "Biyan kowane tsari", "Guje wa dukkan kayan aiki"], answer: 0, why: "Ku fara a sauƙaƙe ku koyi kayan aiki ɗaya sosai." },
          { objective: "O2", q: "Kun ba mataimakin hira farashinku. Me za ku duba a allon farashinsa?", options: ["Babu komai", "Launuka kawai", "Kowace lamba da ya maimaita", "Take kawai"], answer: 2, why: "AI yana iya maimaita lambobi ba daidai ba." },
          { objective: "O3", q: "Wajen yin takardar talla a Canva, ya kamata ku fara daga:", options: ["Shafi mara komai kowane lokaci", "Takardar talla ta abokin hamayya", "Samfuri da kuke canjawa ya zama naku", "Hoton da ba ku da iznin amfani da shi"], answer: 2, why: "Samfura suna adana lokaci; kuna canja su su zama naku." }
        ]
      }
    },
    {
      name: "Babi na 2: AI a kayan ofis na yau da kullum, da akwatin kayan aikinku",
      lessons: [
        {
          objectives: ["O4"],
          title: "Taimakon AI a takardu: Google Docs da Microsoft Word",
          minutes: 5,
          goal: "Mayar da rubutun gaggawa zuwa takardar kasuwanci mai tsabta.",
          text: [
            "Yawancin kasuwanci suna ajiye jerin farashi, ƙa'idoji da wasiƙu a Google Docs ko Microsoft Word. Dukansu kyauta ne a burauzar intanet idan kuna da asusun Google ko Microsoft. Google da Microsoft suna ƙara mataimakan AI (Gemini da Copilot) a cikinsu a wasu tsare-tsare; abin da za ku gani ya dogara da asusunku.",
            "Idan manhajar takardunku tana da mataimakin AI, kuna iya neman ya rubuta daftari ko ya sake rubutu kai tsaye a shafin. Idan ba ta da shi, ku rubuta daftari a mataimakin hira sannan ku liƙa (paste) rubutun a ciki. Ko ta yaya, takardar ce wurin da kuke ajiye nau'in ƙarshe da aka duba.",
            "Ayyukan takardu masu kyau: ƙa'idar soke alƙawari, jerin abubuwan yi na ma'aikata wajen buɗe shago, jerin farashi, wasiƙa ga mai gidan haya. Don ƙa'idoji da duk abin da ya shafi shari'a, ku bari ƙwararre ko majiyar hukuma ta duba shi."
          ],
          steps: ["Ku rubuta rubutun gaggawa na abin da kuke so.", "Ku nemi mataimakin AI (a cikin takardar ko mataimakin hira) ya mayar da shi takarda mai tsabta.", "Ku liƙa ko ku ajiye shi a Docs ko Word.", "Ku duba bayanan gaskiya ku gyara kalmomi.", "Ku ajiye shi da suna mai sarari."],
          words: [["Google Docs", "manhajar rubutu ta Google ta kyauta a burauzar intanet."], ["Microsoft Word", "manhajar rubutu ta Microsoft, kyauta a intanet idan kuna da asusun Microsoft."], ["Ƙa'ida (policy)", "dokar da aka rubuta don kasuwancinku, kamar yadda soke alƙawari ke aiki."]],
          slides: [
            { title: "Takardunku", bullets: ["Google Docs ko Microsoft Word", "Kyauta a burauza idan kuna da asusu", "Mataimakan AI a wasu tsare-tsare"] },
            { title: "Hanyoyi biyu na amfani da AI a nan", bullets: ["Ku yi amfani da mataimakin AI na cikin takardar, idan kuna da shi", "Ko ku rubuta daftari a mataimakin hira ku liƙa shi"] },
            { title: "Ayyukan takardu masu kyau", bullets: ["Ƙa'idar soke alƙawari", "Jerin abubuwan buɗe shago da jerin farashi", "Ku bari ƙwararre ya duba kalmomin shari'a"] }
          ],
          tryIt: "Ku rubuta layuka biyar na gaggawa game da ƙa'idarku ta soke alƙawari ko ta jinkiri. Ku yi amfani da AI don mayar da su ƙa'ida mai sarari da ladabi, sannan ku ajiye ta a Docs ko Word.",
          youCanNow: "mayar da rubutun gaggawa zuwa takardar kasuwanci mai tsabta ta amfani da AI da kayan ofis.",
          quickCheck: [
            { objective: "O4", q: "A ina ya kamata nau'in ƙarshe da aka duba na ƙa'idar kasuwanci ya kasance?", options: ["A cikin hirar AI kawai", "A takardarku a Docs ko Word", "A ƙaramar takarda mai manne", "A saƙon tes da kuka tura wa kanku"], answer: 1, why: "Takardarku tana ajiye nau'in da aka duba lafiya, kuma yana da sauƙin rabawa." },
            { objective: "O4", q: "AI ya mayar da rubutunku ƙa'idar mayar da kuɗi mai kalmomin shari'a. Me za ku yi?", options: ["Ku saka ta ba tare da karantawa ba", "Ku cire kalmomin shari'ar", "Ku tambayi AI ko ta halatta", "Ku bari ƙwararre ko majiyar hukuma ta duba kalmomin"], answer: 3, why: "Ƙwararre ko majiyar hukuma ce ya kamata ta duba kalmomin shari'a." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Taimakon AI a spreadsheet: Sheets da Excel",
          minutes: 5,
          goal: "Gina teburin tallace-tallace ko na kaya mai sauƙi, ku sami taimakon AI wajen karanta shi.",
          text: [
            "Spreadsheet shafi ne mai layuka da ginshiƙai (columns) don lambobi. Google Sheets da Microsoft Excel su ne zaɓuɓɓukan da aka fi amfani da su. Tebur mai sauƙi, kamar Date (Rana), Item (Kaya), Quantity (Yawa), Price (Farashi), Total (Jimilla), yana faɗa muku abubuwa da yawa tun farko.",
            "AI yana iya taimakawa ta hanyoyi biyu. Yana iya faɗa muku yadda ake yin wani abu (\"How do I total column E in Google Sheets?\"), kuma a wasu tsare-tsare yana iya aiki a cikin spreadsheet ɗin. Kuna kuma iya liƙa ƙaramin tebur mara bayanan sirri a mataimakin hira ku tambaya, \"Wane kaya ne aka fi sayarwa?\"",
            "Ku duba lissafin. AI ya fi kyau wajen bayani fiye da lissafi, don haka ku bar spreadsheet ɗin ya yi jimilla da formula na SUM, ku kuma yi amfani da AI don bayani ko ba da shawarar abin da za ku duba."
          ],
          steps: ["Ku yi ginshiƙai: Date, Item, Quantity, Price, Total.", "Ku saka tallace-tallacen mako ɗaya.", "Ku tambayi AI yadda ake ƙara jimillar SUM, ku yi shi.", "Ku tambayi AI wane kaya ne aka fi sayarwa, sannan ku tabbatar a spreadsheet ɗin."],
          words: [["Spreadsheet", "shafi mai layuka da ginshiƙai don lambobi, kamar Google Sheets ko Excel."], ["Formula", "umarni a cikin akwati (cell) da ke yin lissafi, kamar =SUM(E2:E20)."]],
          slides: [
            { title: "Teburin tallace-tallace mai sauƙi", bullets: ["Date, Item, Quantity, Price, Total", "Google Sheets ko Microsoft Excel"] },
            { title: "Yadda AI ke taimakawa", bullets: ["Yana bayanin yadda ake yi: \"How do I total column E?\"", "Yana aiki a cikin spreadsheet a wasu tsare-tsare", "Yana karanta ƙaramin tebur mara bayanan sirri"] },
            { title: "Ku bar spreadsheet ya yi lissafi", bullets: ["Ku yi amfani da formula na SUM don jimilla", "AI yana bayani; spreadsheet yana lissafi", "Ku tabbatar da abin da AI ya faɗa a bayananku"] }
          ],
          tryIt: "Ku yi teburin tallace-tallace ko na kaya mai aƙalla layuka 10. Ku yi amfani da formula na SUM don jimilla, ku tambayi AI wane kaya ne aka fi sayarwa. Ku tabbatar da amsar a spreadsheet ɗinku.",
          youCanNow: "gina teburin tallace-tallace mai sauƙi da amfani da AI don taimaka muku karanta shi, yayin da spreadsheet ke yin lissafi.",
          quickCheck: [
            { objective: "O5", q: "Mene ne =SUM(E2:E20)?", options: ["Formula da ke haɗa lambobin ginshiƙi", "Sunan fayil", "Prompt na hira", "Kalmar sirri"], answer: 0, why: "SUM formula ne na spreadsheet da ke haɗa lambobi." },
            { objective: "O5", q: "AI ya ce kayan da aka fi sayarwa a watan jiya kofi ne. Me za ku yi?", options: ["Ku yi odar ƙarin kofi nan take", "Ku sake tambayar AI har ya yarda", "Ku tabbatar da shi a spreadsheet ɗinku", "Ku goge teburin tallace-tallace"], answer: 2, why: "Kuna tabbatar da yadda AI ya karanta bayananku a cikin spreadsheet ɗin da kansa." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Gina akwatin kayan AI na farko",
          minutes: 5,
          goal: "Zaɓi kayan aiki uku zuwa biyar, ku ba kowanne aiki, ku kafa ƙa'idar tsaro ga kowanne.",
          text: [
            "Akwatin kayan aikinku gajeren jeri ne: kayan aikin, aikinsa, wane tsari, da ƙa'ida. Misali: ChatGPT (kyauta) don amsoshi da bayanin kaya; Canva (kyauta) don takardun talla; Google Sheets don tallace-tallacen mako; Google Docs don ƙa'idoji.",
            "Kafin ku biya kowane ƙarin tsari (upgrade), ku yi amfani da tsarin kyauta har wata ɗaya, ku rubuta abin da ba ku iya yi ba. Ku biya kawai don abin da kuke buƙata da gaske, kuma ku duba farashin a shafin hukuma.",
            "Ƙa'idojin tsaro suna tafiya tare da kowane kayan aiki: kada a saka lambobin katin abokan ciniki, kalmomin sirri ko bayanan sirri; ku duba kowane bayani kafin abokan ciniki su gani; ku yi amfani da hotuna da kalmomin da kuke da iznin amfani da su kaɗai."
          ],
          steps: ["Ku lissafa kayan aiki uku zuwa biyar.", "Ku rubuta aiki ɗaya ga kowanne.", "Ku rubuta \"kyauta\" ko tsarin da kuke biya.", "Ku rubuta ƙa'idar tsaro ɗaya ga kowanne.", "Ku yi abu ɗaya na gaske da kowane kayan aiki."],
          words: [["Akwatin kayan aiki (toolkit)", "gajeren jerin kayan aikin da kuke amfani da su da abin da kowanne yake yi."], ["Ƙarin tsari (upgrade)", "tsarin da ake biya mai ƙarin abubuwa."]],
          slides: [
            { title: "Teburin akwatin kayan aikinku", bullets: ["Kayan aiki | Aiki | Tsari | Ƙa'idar tsaro", "Kayan aiki uku zuwa biyar sun isa"] },
            { title: "Kafin ku biya", bullets: ["Ku yi amfani da tsarin kyauta har wata ɗaya", "Ku rubuta abin da ba ku iya yi ba", "Ku duba farashin a shafin hukuma"] },
            { title: "Ƙa'idoji ga kowane kayan aiki", bullets: ["Babu lambobin kati, kalmomin sirri ko bayanan sirri", "Ku duba bayanai kafin abokan ciniki su gani", "Hotunan da kuke da iznin amfani da su kaɗai"] }
          ],
          tryIt: "Aikin ƙarshe: ku yi teburin akwatin kayan aikinku, sannan ku yi abu ɗaya na gaske da kowane kayan aiki: saƙo ga abokin ciniki, takardar talla ko rubutu, da jerin farashi ko teburin tallace-tallace.",
          youCanNow: "zaɓa, tsarawa da amfani lafiya da 'yan kayan AI kaɗan don kasuwancinku.",
          quickCheck: [
            { objective: "O6", q: "Me teburin akwatin kayan aikinku ke lissafawa?", options: ["Kowace manhaja a wayarku", "Kayan aiki, aiki, tsari da ƙa'idar tsaro", "Farashin kayan aiki kawai", "Sunayen abokan cinikinku"], answer: 1, why: "Kowane layi yana faɗin wane kayan aiki, aikinsa, tsarinsa da ƙa'idar tsaronsa." },
            { objective: "O6", q: "Wani kayan aiki yana tayin ƙarin tsari na biya. Yaushe za ku biya?", options: ["Nan take, don a tsira", "Ba za a taɓa biya ba ko kaɗan", "Idan aboki ya saya", "Idan kuna buƙatar abin da tsarin kyauta ba shi da shi"], answer: 3, why: "Ku biya kawai idan tsarin kyauta ba shi da abin da kuke buƙata da gaske." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Kayan ofis da akwatin kayan aikinku",
        questions: [
          { objective: "O4", q: "Manhajar takardunku ba ta da mataimakin AI. Me za ku iya yi?", options: ["Ku rubuta daftari a mataimakin hira ku liƙa shi", "Ku haƙura", "Ku sayi sabuwar kwamfuta", "Ku rubuta shi a Excel"], answer: 0, why: "Za a iya liƙa daftarin mataimakin hira a kowace takarda." },
          { objective: "O4", q: "Wane ne ya kamata ya duba kalmomin ƙa'idar shari'a?", options: ["AI kawai", "Babu kowa", "Abokin ciniki", "Ƙwararre ko majiyar hukuma"], answer: 3, why: "Kalmomin shari'a suna buƙatar ƙwararre ya duba su." },
          { objective: "O5", q: "Me ya kamata ya yi jimilla a teburin tallace-tallacenku?", options: ["Hasashen AI", "Formula na SUM a cikin spreadsheet", "Lissafin kai", "Rubutu a kafofin sada zumunta"], answer: 1, why: "Spreadsheet yana lissafi daidai; AI yana bayani." },
          { objective: "O6", q: "Kafin ku biya ƙarin tsarin AI, ya kamata ku:", options: ["Yi amfani da tsarin kyauta na ɗan lokaci ku rubuta abin da ya rage muku", "Biya nan take", "Tambayi tallar da ke tasowa (pop-up)", "Sayi kowane tsari"], answer: 0, why: "Ku biya kawai don abin da kuke buƙata da gaske." },
          { objective: "O6", q: "Wace ce ƙa'idar tsaro ga kowane kayan aiki?", options: ["Ku liƙa lambobin kati don adana lokaci", "Ku ba kayan aikin kalmar sirrinku", "Kada ku taɓa saka lambobin katin abokan ciniki ko kalmomin sirri a ciki", "Ku yi amfani da kowane hoto na intanet"], answer: 2, why: "Bayanan sirri ba sa shiga kayan AI." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Muhimman Kayan AI ga Ƙananan Kasuwanci",
    questions: [
      { objective: "O1", q: "ChatGPT, Copilot da Gemini misalai ne na:", options: ["Injinan karɓar kuɗi", "Mataimakan hira", "Manhajojin isar da kaya", "Bankuna"], answer: 1, why: "Mataimakan hira na AI ne." },
      { objective: "O1", q: "Wane irin kayan aiki ne ya fi dacewa don zanen menu?", options: ["Ma'aunin zafi", "Na'urar lissafi", "Manhajar banki", "Kayan zane kamar Canva"], answer: 3, why: "Kayan zane suna yin menu da takardun talla." },
      { objective: "O1", q: "Abubuwan AI suna iya bayyana a cikin:", options: ["Babu wani wuri kuma", "Kayan wasan yara kawai", "Firinta kawai", "Manhajojin da kuke amfani da su, kamar na ajiye lokacin ganawa ko POS"], answer: 3, why: "Manhajojin kasuwanci da yawa suna ƙara abubuwan AI." },
      { objective: "O2", q: "A hira, yaushe kuke ba da bayanan kasuwancinku?", options: ["Ba a taɓa bayarwa ba", "Sau ɗaya a farko", "A ƙarshe kawai", "A kowace kalma"], answer: 1, why: "Shirya su sau ɗaya yana bar ku nemi abubuwa da yawa." },
      { objective: "O2", q: "\"Ka ba ni nau'i uku\" yana taimaka muku:", options: ["Biyan ƙaramin haraji", "Goge hirar", "Zaɓar mafi kyau", "Raba kalmomin sirri"], answer: 2, why: "Zaɓuɓɓuka suna bar ku zaɓa." },
      { objective: "O2", q: "Samfurin saƙon tes na tunatarwa ya kamata ya yi amfani da:", options: ["\"[customer name]\" a matsayin madadi", "Lambar katin abokin ciniki", "Kalmar sirrinku", "Adireshin abokin ciniki na gaske"], answer: 0, why: "Madadi yana hana bayanan sirri shiga." },
      { objective: "O3", q: "A ina kuke duba abin da tsarin kyauta na Canva ya ƙunsa a yau?", options: ["Hasashe", "Tsohon rubutun blog", "canva.com", "Abokin hamayya"], answer: 2, why: "Shafin hukuma yana da bayanan tsari na yanzu." },
      { objective: "O3", q: "Takardar talla mai sarari tana da:", options: ["Babban saƙo ɗaya da yadda za a same ku", "Saƙonni goma", "Ƙananan rubutu", "Babu sunan kasuwanci"], answer: 0, why: "Mai sauƙi kuma mai sauƙin karantawa shi ya fi aiki." },
      { objective: "O3", q: "Waɗanne hotuna ya kamata ku yi amfani da su?", options: ["Kowane hoto na intanet", "Naku ko waɗanda kuke da iznin amfani da su", "Na abokin hamayya", "Hotuna kawai daga kafofin sada zumunta"], answer: 1, why: "Ku yi amfani da hotunan da kuke da iznin amfani da su kaɗai." },
      { objective: "O4", q: "Google Docs da Microsoft Word su ne:", options: ["Kayan zane kawai", "Kamfanonin layin waya", "Manhajojin biyan kuɗi", "Kayan takardu"], answer: 3, why: "Manhajojin rubutu ne." },
      { objective: "O4", q: "A ina ya kamata nau'in ƙarshe da aka duba na ƙa'ida ya kasance?", options: ["A takardarku (Docs ko Word)", "A cikin hirar AI kawai", "A ƙaramar takarda mai manne", "Babu inda"], answer: 0, why: "Takardu suna ajiye nau'in ƙarshe da za ku iya rabawa da sabuntawa." },
      { objective: "O4", q: "Aikin takarda mai kyau don taimakon AI shi ne:", options: ["Zaɓar lauya", "Sa hannu a kwangila a madadinku", "Cike takardun haraji", "Jerin abubuwan buɗe shago"], answer: 3, why: "Jerin abubuwan yi rubutu ne mara haɗari sosai." },
      { objective: "O5", q: "Spreadsheet shi ne:", options: ["Mataimakin hira", "Samfurin zane", "Shafi mai layuka da ginshiƙai don lambobi", "Banki"], answer: 2, why: "Sheets da Excel suna tsara lambobi." },
      { objective: "O5", q: "=SUM(E2:E20) misali ne na:", options: ["Prompt", "Formula", "Samfuri", "Kalmar sirri"], answer: 1, why: "Formula suna lissafi a cikin akwatuna (cells)." },
      { objective: "O5", q: "AI ya ce kayan da aka fi sayarwa taco ne. Ya kamata ku:", options: ["Faɗa wa abokan ciniki", "Ɗauka cewa daidai ne", "Goge spreadsheet ɗin", "Tabbatar da shi a spreadsheet ɗinku"], answer: 3, why: "Ku duba yadda AI ya karanta da bayananku." },
      { objective: "O5", q: "Kafin ku liƙa tebur a mataimakin hira, ku cire:", options: ["Sunayen kaya", "Ranaku", "Sunayen abokan ciniki da lambobin kati", "Jimilla"], answer: 2, why: "Bayanan sirri ba sa shiga." },
      { objective: "O6", q: "Kayan aiki nawa ya kamata akwatin kayan aiki na farko ya kasance da su?", options: ["Uku zuwa biyar", "Hamsin", "Babu ko ɗaya", "Ɗari"], answer: 0, why: "Gajeren jeri da kuke amfani da shi da gaske." },
      { objective: "O6", q: "Teburin akwatin kayan aikinku yana lissafa:", options: ["Kalmomin sirri", "Kayan aiki, aiki, tsari da ƙa'idar tsaro", "Lambobin katin abokan ciniki", "Farashi kawai"], answer: 1, why: "Waɗannan ginshiƙai huɗu suna sa shi ya zama mai amfani kuma lafiya." },
      { objective: "O6", q: "Yaushe ya kamata ku biya ƙarin tsari?", options: ["Koyaushe a ranar farko", "Idan kuna buƙatar abin da tsarin kyauta ba shi da shi", "Idan talla ta ce haka", "Ba sai an duba farashi ba"], answer: 1, why: "Ku biya kawai don buƙatu na gaske, bayan kun duba farashin." },
      { objective: "O6", q: "Wace ƙa'ida ce ta shafi kowane kayan AI?", options: ["Ku duba bayanai kafin abokan ciniki su gani", "Ku raba kalmomin sirri don adana lokaci", "Ku kwafi kowane hoto", "Ku amince da kowace lamba"], answer: 0, why: "Duba bayanai yana kare kasuwancinku." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      3,
      5,
      7,
      9,
      10,
      12,
      14,
      16,
      19
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Teburin akwatin kayan aiki",
        objective: "O6",
        notYet: "Kayan aiki ƙasa da uku, ko babu aiki, tsari ko ƙa'idar tsaro.",
        meets: "Kayan aiki uku zuwa biyar, kowanne da aiki, tsari da ƙa'idar tsaro.",
        exceeds: "Yana faɗin lokacin da mai kasuwancin zai yi tunanin biyan ƙarin tsari."
      },
      {
        name: "Saƙo ga abokin ciniki",
        objective: "O2",
        notYet: "Babu saƙo, ko yana da bayanan abokin ciniki na gaske ko bayanan da ba daidai ba.",
        meets: "Saƙon abokin ciniki da aka duba, wanda aka yi da mataimakin hira, mai amfani da madadi.",
        exceeds: "Mai kasuwancin ya kwatanta nau'i fiye da ɗaya ya zaɓi mafi kyau."
      },
      {
        name: "Takardar talla ko rubutu",
        objective: "O3",
        notYet: "Babu takardar talla, ko tana da kurakurai ko hotunan da babu izni.",
        meets: "Takardar talla ko rubutu mai babban saƙo ɗaya da bayanan tuntuɓa, an duba kowace kalma.",
        exceeds: "Yana amfani da hotunan mai kasuwancin, kuma a shirye yake a saka ko a buga."
      },
      {
        name: "Jerin farashi ko teburin tallace-tallace",
        objective: "O5",
        notYet: "Babu tebur, ko an rubuta jimilla da hannu.",
        meets: "Jerin farashi a Docs ko Word, ko teburin tallace-tallace mai formula na SUM.",
        exceeds: "An tabbatar da yadda AI ya karanta teburin a cikin spreadsheet ɗin."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu kasuwanci da ke amfani da aƙalla kayan aiki biyu daga akwatinsu kowane mako (binciken biyo baya na kwanaki 30)",
      "Masu kasuwanci da suka ce sun adana lokaci ko kuɗi ta amfani da tsare-tsaren kyauta (binciken biyo baya)",
      "Masu kasuwanci da suka fara wani kwas na ƙananan kasuwanci na Koach Learn cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta ko wayar zamani mai intanet (kwamfuta ta fi sauƙi don spreadsheet)",
      "Asusun kyauta na mataimakin hira, Canva, da Google Docs da Sheets ko Microsoft Word da Excel",
      "Bayanan kasuwanci na gaske: farashi, wani tayi ko taro, da lambobin tallace-tallace ko kaya na 'yan makonni",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Sunayen tsare-tsare da abubuwan da kayan aiki ke yi suna canjawa; ku buɗe shafin hukuma na kowane kayan aiki tare don duba tsarinsa na kyauta na yanzu.",
      "Ku sa masu kasuwanci su yi amfani da sunayen abokan ciniki na ƙirƙira, kuma babu lambobin kati, a teburan atisaye da saƙonni.",
      "Spreadsheet sabon abu ne ga masu kasuwanci da yawa; ku nuna formula na SUM ɗaya kai tsaye kafin aikin Darasi na 5.",
      "Ku tura kalmomin shari'a na ƙa'idoji ga ƙwararre ko majiyar hukuma, SCORE ko Small Business Development Center (cibiyar bunƙasa ƙananan kasuwanci).",
      "Ku ba da maki ga akwatin kayan aiki da abubuwan da aka yi da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
