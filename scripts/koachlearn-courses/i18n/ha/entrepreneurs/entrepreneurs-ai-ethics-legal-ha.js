"use strict";

// Koach Learn course, Hausa (ha) translation of entrepreneurs/entrepreneurs-ai-ethics-legal.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "entrepreneurs-ai-ethics-legal-ha",
  lang: "ha",
  translationOf: "entrepreneurs-ai-ethics-legal",
  category: "Entrepreneurs",
  name: "Ɗabi'u, Haɗari da Batutuwan Shari'a na AI",
  skills: "Gane haɗarin AI a kasuwanci, Duba aikin AI don gaskiya da rashin adalci, Kare bayanan abokan ciniki, Yin iƙirarin AI na gaskiya, Fahimtar haƙƙin mallaka (copyright) na aikin da AI ya yi, Rubuta dokar amfani da AI",
  outcome: "gane manyan haɗarin amfani da AI a kasuwancinku, sanya matakan dubawa don gaskiya, rashin adalci da sirri, yin iƙirarin AI na gaskiya kaɗai, fahimtar tushen haƙƙin mallaka na aikin da AI ya yi, da rubuta dokar amfani da AI mai shafi ɗaya don kasuwancinku.",
  about: [
    "AI zai iya ceton ƙaramin kasuwanci lokaci mai yawa, amma yana zuwa da haɗari na gaske: amsoshi marasa daidai, sakamako marasa adalci, bayanan abokan ciniki da suka fita, tallace-tallace masu ruɗarwa da matsalolin haƙƙin mallaka. Wannan kwas na masu kasuwanci ne da ke son amfani da AI cikin gaskiya, kuma su guji matsala.",
    "A Babi na 1 za ku koyi manyan haɗari, yadda ake duba aikin AI don gaskiya da rashin adalci, da yadda ake kare bayanan abokan ciniki. A Babi na 2 za ku koyi abin da hukumomin Amurka ke cewa game da iƙirarin AI a talla, tallatawar da aka biya, sharhin abokan ciniki (reviews), da haƙƙin mallaka na aikin da AI ya yi. Za ku gama da rubuta dokar amfani da AI don kasuwancinku.",
    "Kowane darasi yana ɗaukar kusan minti biyar, tare da aiki na hannu. Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe. An tabbatar da batutuwan shari'a a shafukan hukuma na gwamnatin Amurka (ftc.gov da copyright.gov), kuma an jera su a kowane darasi. Wannan kwas ilimi ne, ba shawarar shari'a ba: dokoki suna canjawa kuma sun bambanta daga jiha zuwa jiha da ƙasa zuwa ƙasa, don haka ku yi magana da lauya game da halin da kuke ciki."
  ],
  finalTask: "Ku rubuta dokar amfani da AI mai shafi ɗaya don kasuwancinku da ta ƙunshi: waɗanne kayan AI aka amince da su, waɗanne bayanai kada su taɓa shiga cikinsu, waɗanne sakamako ne ke buƙatar mutum ya duba (bayanai na gaskiya, kuɗi, shari'a, lafiya, da duk abin da abokan ciniki ke gani), yadda kuke yin iƙirarin AI na gaskiya da bayyana tallatawar da aka biya, yadda kuke kula da haƙƙin mallaka na abin da AI ya yi, wanda za ku tambaya idan kuna shakka (har da lauya), da lokacin da za ku sake duba dokar.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Masu ƙananan kasuwanci a Amurka da ke amfani da AI, ko suke shirin amfani da shi, don talla, hidimar abokan ciniki, ɗaukar ma'aikata ko rubutu, kuma suke son yin haka cikin gaskiya.",
    startingPoint: "Suna amfani da kayan AI ɗaya ko fiye don ayyukan kasuwanci. Kaɗan ne ke da rubutaccen jerin haɗari, matakin dubawa, dokoki game da bayanan abokan ciniki, ko fahimtar tushen dokokin talla na FTC da haƙƙin mallaka na aikin da AI ya yi.",
    gap: "AI zai iya kawo bayanai marasa gaskiya, sakamako marasa adalci, fitar bayanai, iƙirari masu ruɗarwa da matsalolin haƙƙin mallaka, kuma mai kasuwanci ne ke da alhakin duka. Masu kasuwanci suna buƙatar matakan dubawa masu sauƙi da rubutacciyar dokar amfani da AI don su riƙe amincewar abokan ciniki kuma su guji matsalar shari'a.",
    constraints: [
      "Kalmomi masu sauƙi; wannan ilimi ne, ba shawarar shari'a ba, kuma dokoki sun bambanta daga jiha zuwa jiha da ƙasa zuwa ƙasa",
      "Na'urori: waya ko kwamfuta mai kayan AI da mai kasuwanci ke amfani da su yanzu, da shafin intanet ko shafukan sada zumunta",
      "Lokaci: kusan minti biyar a kowane darasi, tare da duba kayan mai kasuwanci na kansa",
      "Batutuwan shari'a sun dogara ne kawai kan shafukan hukuma na ftc.gov da copyright.gov da aka ambata a darussa",
      "Ba a amfani da bayanan abokan ciniki na gaske a kowane aikin gwaji"
    ],
    prerequisites: "Kwas ɗin \"Gabatarwa ga AI don 'Yan Kasuwa\", ko amfani da kayan AI a kasuwanci akai-akai."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku aƙalla hanyoyi uku da kasuwancinku ke amfani da AI", action: "jera manyan haɗarin AI da suka shafe ku, da auna girman kowanne", standard: "tare da rubuta matakin dubawa ɗaya ga kowane babban haɗari" },
    { id: "O2", condition: "Idan aka ba ku sakamakon AI da abokan ciniki ke gani ko da ke shafar wata shawara", action: "duba shi don bayanai marasa gaskiya, lissafi mara daidai, iƙirarin da ba za a iya tabbatarwa ba da sakamako marasa adalci", standard: "ta amfani da rubutaccen matakin dubawa, da barin shawarwarin ɗaukar aiki, bashi da gidaje a hannun mutum" },
    { id: "O3", condition: "Idan aka ba ku bayanan abokan ciniki da kuke riƙe da su", action: "rubuta jerin bayanan da kada su taɓa shiga AI, da duba saitunan sirri na babban kayan AI ɗinku", standard: "bisa ƙa'idoji biyar na FTC kan bayanai" },
    { id: "O4", condition: "Idan aka ba ku shafin intanet ko rubuce-rubucenku a shafukan sada zumunta", action: "yi wa kowane iƙirari game da AI ko sakamako alama: a bar shi, a gyara shi ko a cire shi, da duba tallace-tallacen da aka biya da sharhin abokan ciniki", standard: "ta yadda kowane iƙirari gaskiya ne kuma za a iya tabbatar da shi, kowane talla da aka biya an bayyana shi a sarari, kuma babu sharhin bogi ko na saye" },
    { id: "O5", condition: "Idan aka ba ku kayan kasuwanci da aka yi da AI", action: "bayyana wanda zai iya mallakar aikin da aka yi da taimakon AI, da tsara aikin ƙirƙira na mutum da za ku ƙara", standard: "tare da lura da duk wani kaya da ke buƙatar shawarar lauya" },
    { id: "O6", condition: "Don kasuwancinku na kanku", action: "rubuta dokar amfani da AI mai shafi ɗaya da dukkan sassa bakwai", standard: "tare da faɗin wanda ke da alhaki, lokacin tambayar lauya da ranar sake dubawa" }
  ],
  chapters: [
    {
      name: "Babi na 1: Ku san haɗarin kuma ku duba aikin",
      lessons: [
        {
          objectives: ["O1"],
          title: "Manyan haɗarin AI a kasuwanci",
          minutes: 5,
          goal: "Ambaci manyan haɗarin AI da gano inda suke bayyana a kasuwancinku.",
          text: [
            "Haɗari biyar ne ke bayyana akai-akai. Gaskiya: AI yana iya ƙirƙirar bayanai, farashi ko dokoki. Adalci: AI yana iya nuna wa wasu rukunin mutane rashin adalci saboda abin da ya koya. Sirri: bayanan abokan ciniki da kuka rubuta a ciki ana iya ajiye su ko a yi amfani da su. Gaskiya a talla: iƙirarin talla game da AI, ko sharhin da AI ya rubuta, na iya ruɗar mutane. Mallaka: wane ne ya mallaki aikin da AI ya yi, kuma ko ya kwafi aikin wani.",
            "Kyakkyawar ɗabi'a da AI tana nufin gaskiya, adalci, kula da bayanan mutane, da barin mutum ya ci gaba da kasancewa mai alhaki. Yawanci, yin abin da ke daidai yana kuma kiyaye ku a cikin doka.",
            "Ku yi jerin haɗari don kasuwancinku: inda kuke amfani da AI, abin da zai iya lalacewa, girman illar, da matakin dubawa da za ku ƙara."
          ],
          steps: ["Ku jera kowane wuri da kuke amfani da AI ko kuke shirin amfani da shi.", "Ga kowanne, ku tambayi waɗanne daga cikin haɗari biyar suka shafe shi.", "Ku auna girman illar kuskure: ƙarami, matsakaici ko babba.", "Ku rubuta matakin dubawa ɗaya ga kowane haɗari matsakaici ko babba."],
          words: [["Ɗabi'u (ethics)", "tunani game da abin da ke daidai da adalci."], ["Haɗari", "abin da zai iya lalacewa, da girman illar da zai yi."], ["Rashin adalci (bias)", "sakamakon da bai yi wa wasu rukunin mutane adalci ba."]],
          slides: [
            { title: "Haɗarin AI guda biyar", bullets: ["Gaskiya: ƙirƙirarrun bayanai", "Adalci: sakamako marasa adalci", "Sirri: bayanan abokan ciniki", "Gaskiya a talla da mallaka"] },
            { title: "Amfani da AI cikin ɗabi'a", bullets: ["Gaskiya, adalci, kula da bayanai", "Mutum ne ke da alhaki", "Ɗabi'a mai kyau yawanci tana kiyaye ku a cikin doka"] },
            { title: "Jerin haɗarinku", bullets: ["Inda kuke amfani da AI", "Abin da zai iya lalacewa, da girman illar", "Matakin dubawa ɗaya ga kowane babban haɗari"] }
          ],
          tryIt: "Ku yi jerin haɗari da aƙalla hanyoyi uku da kasuwancinku ke amfani da AI. Ku yi alama a kan waɗanne daga cikin haɗari biyar suka shafe su, ku auna kowanne, ku rubuta matakin dubawa ɗaya ga manyan.",
          youCanNow: "ambaci manyan haɗarin AI da danganta su da kasuwancinku.",
          quickCheck: [
            { objective: "O1", q: "Wanne ne haɗarin sirri na AI a kasuwanci?", options: ["Bayanan abokan ciniki suna fita ta kayan AI", "AI yana rubutu a hankali sosai", "Wani kaya yana da kuɗi", "AI yana amfani da dogayen jimloli"], answer: 0, why: "Saka bayanan abokan ciniki a kayan AI zai iya bayyana su." },
            { objective: "O1", q: "Chatbot ɗinku na AI yana amsa tambayoyin abokan ciniki game da isar da kaya. Yaya za ku ɗauke shi a jerin haɗarinku?", options: ["Ku bar shi; chatbot ne kawai", "Ku jera shi, ku auna shi, ku rubuta matakin dubawa don amsoshi marasa daidai", "Ku kashe duk AI", "Ku bar abokan ciniki su gano kurakurai"], answer: 1, why: "Duk abin da abokan ciniki ke gani yana shiga jerin haɗari tare da matakin dubawa." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Duba aikin AI don gaskiya da adalci",
          minutes: 5,
          goal: "Kafa matakin dubawa na mutum da ke kama bayanai marasa gaskiya da sakamako marasa adalci.",
          text: [
            "Duk abin da AI ya yi da abokin ciniki zai gani, ko da ke shafar kuɗi, doka, lafiya ko tsaro, yana buƙatar mutum ya duba shi. Ku kwatanta bayanai da takardunku ko majiyoyin hukuma, ku sake yin lissafin, ku cire duk iƙirarin da ba za ku iya tabbatarwa ba.",
            "Ku kuma duba adalci. Idan kuna amfani da AI don tantance masu neman aiki, sanya farashi, amincewa da abokan ciniki ko rubuta tallar aiki, ku duba ko yana nuna bambanci tsakanin mutane saboda launin fata, jinsi, shekaru, nakasa, addini, ƙasar asali ko makamantansu. Dokokin hana nuna bambanci suna aiki har yanzu idan kwamfuta ta taimaka wajen yanke shawara.",
            "Don manyan shawarwari, kamar ɗaukar aiki, kora daga aiki, bayar da bashi, gidaje ko duk abin da ya shafi lafiya, kada ku bar AI ya yanke shawara. Ku yi amfani da shi don tsara bayanai, ku bar shawarar a hannun mutum, kuma ku yi magana da lauya game da dokokin da suka shafe ku."
          ],
          steps: ["Ku yi alama a kan sakamakon AI da abokan ciniki ke gani ko da ke shafar kuɗi, doka, lafiya ko tsaro.", "Ga waɗannan, ku duba bayanai, lissafi da iƙirari kowane lokaci.", "Ku duba shawarwarin da AI ya taimaka da su don bambance-bambance marasa adalci tsakanin rukunin mutane.", "Ku bar manyan shawarwari a hannun mutum.", "Ku tambayi lauya game da dokokin shawarwarin ɗaukar aiki, bashi ko gidaje."],
          words: [["Dubawar mutum", "mutum yana duba aikin AI kafin a yi amfani da shi."], ["Babbar shawara", "zaɓi da ke shafar aikin wani, kuɗinsa, gidansa ko lafiyarsa sosai."], ["Nuna bambanci", "yi wa mutane rashin adalci saboda ko su wane ne."]],
          slides: [
            { title: "Abin da ke buƙatar dubawar mutum", bullets: ["Duk abin da abokan ciniki ke gani", "Duk abin da ya shafi kuɗi, doka, lafiya ko tsaro"] },
            { title: "Ku duba adalci", bullets: ["Ɗaukar aiki, farashi, amincewa, tallar aiki", "Sakamako ya bambanta tsakanin rukunin mutane?", "Dokokin hana nuna bambanci suna aiki har yanzu"] },
            { title: "Babbar shawara = mutum ne ke yanke ta", bullets: ["Ɗaukar aiki, kora, bashi, gidaje, lafiya", "AI yana tsara bayanai; mutum ne ke yanke shawara", "Ku tambayi lauya game da dokokin"] }
          ],
          tryIt: "Ku zaɓi sakamakon AI ɗaya da abokan cinikinku ke gani. Ku duba bayanai, lissafi, iƙirarin da ba za a iya tabbatarwa ba da kalmomi marasa adalci. Ku rubuta matakin dubawa da za ku yi amfani da shi kowane lokaci.",
          youCanNow: "duba aikin AI don gaskiya da adalci kafin ya shafi abokan ciniki ko shawarwari.",
          quickCheck: [
            { objective: "O2", q: "Mene ne rashin adalci (bias) a sakamakon AI?", options: ["Kuskuren rubutu", "Amsa mai jinkiri", "Sakamakon da bai yi wa wasu rukunin mutane adalci ba", "Gajeriyar amsa"], answer: 2, why: "Rashin adalci yana nufin AI yana yi wa wasu rukunin mutane rashin adalci." },
            { objective: "O2", q: "AI yana jera muku masu neman aiki bisa matsayi. Me za ku yi?", options: ["Ku ɗauki sunan da ke saman", "Ku ƙi rabin na ƙasa", "Ku bar AI ya tura sakamakon ta imel", "Ku duba jerin don rashin adalci, ku yanke shawarar da kanku"], answer: 3, why: "Mutum ne ke yanke shawarar ɗaukar aiki, kuma dokokin hana nuna bambanci suna aiki har yanzu." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kare bayanan abokan ciniki",
          minutes: 5,
          goal: "Yanke shawarar bayanan da za su iya shiga kayan AI da waɗanda ba za su shiga ba, ta amfani da ƙa'idoji biyar na FTC.",
          text: [
            "Jagorar FTC (hukumar kasuwanci ta Amurka) ga kasuwanci kan kare bayanan mutane tana da ƙa'idoji biyar: ku ƙidaya (take stock: ku san bayanan mutane da kuke da su), ku rage (scale down: ku riƙe abin da kuke buƙata kawai), ku kulle (lock it: ku kare abin da kuka riƙe), ku zubar (pitch it: ku zubar da abin da ba ku buƙata kuma) da ku shirya (plan ahead: ku yi shiri don matsalar tsaro).",
            "Ku yi amfani da su a AI. Kada ku saka lambobin Social Security, lambobin kati ko banki, kalmomin sirri, bayanan lafiya ko cikakken jerin lambobin abokan ciniki a kayan hira na AI. Ku yi amfani da madadi ko taƙaitaccen bayani. Ku duba saitunan sirri da sharuɗɗan kowane kaya, kuma idan dole ne ku yi amfani da bayanan abokan ciniki, ku zaɓi tsarin kasuwanci da ya yi alƙawarin ba zai koyi daga bayananku ba.",
            "Ku faɗi gaskiya a sanarwar sirrinku: idan kuna amfani da kayan AI da ke sarrafa bayanan abokan ciniki, ku faɗi haka. Dokokin sirri sun bambanta daga jiha zuwa jiha da ƙasa zuwa ƙasa; ku tambayi lauya abin da ya shafe ku."
          ],
          steps: ["Ku ƙidaya: ku jera bayanan abokan ciniki da kuke riƙe da su.", "Ku rage: ku daina tattara abin da ba ku buƙata.", "Ku rubuta jerin abin da kada ya taɓa shiga AI: lambobin shaida, lambobin kati da banki, kalmomin sirri, bayanan lafiya.", "Ku duba saitunan sirri da sharuɗɗan kowane kayan AI.", "Ku yi gajeren shiri na abin da za ku yi idan bayanai sun fita."],
          words: [["Bayanan mutum", "bayanan da ke nuna ko wane ne mutum, kamar suna tare da adireshi, lambobin shaida ko lambobin kati."], ["Sanarwar sirri (privacy notice)", "bayani da ke faɗa wa abokan ciniki bayanan da kuke tattarawa da yadda kuke amfani da su."], ["Matsalar tsaro", "lokacin da bayanai suka ɓace, aka sace su, ko wanda bai kamata ba ya gan su."]],
          slides: [
            { title: "Ƙa'idoji biyar na FTC", bullets: ["Ku ƙidaya, ku rage", "Ku kulle, ku zubar", "Ku shirya"] },
            { title: "Kada su taɓa shiga kayan hira na AI", bullets: ["Lambobin shaida, kati ko banki", "Kalmomin sirri da bayanan lafiya", "Cikakken jerin lambobin abokan ciniki"] },
            { title: "Amfani mafi aminci", bullets: ["Madadi da taƙaitaccen bayani", "Ku duba saitunan sirri da sharuɗɗa", "Tsarin kasuwanci da ba ya koyi daga bayananku"] },
            { title: "Ku faɗi gaskiya", bullets: ["Ku faɗi a sanarwar sirri idan AI yana sarrafa bayanai", "Dokoki sun bambanta; ku tambayi lauya"] }
          ],
          sources: [{ name: "FTC: Protecting Personal Information, A Guide for Business (Kare bayanan mutane, jagora ga kasuwanci)", url: "https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business" }],
          tryIt: "Ku ƙidaya bayanan abokan ciniki da kuke riƙe da su, ku rubuta jerin abin da kada ya taɓa shiga AI, ku duba saitunan sirri na kayan AI da kuka fi amfani da shi.",
          youCanNow: "yanke shawarar bayanan abokan ciniki da za su iya shiga kayan AI, da kare sauran.",
          quickCheck: [
            { objective: "O3", q: "Me \"scale down\" (ku rage) ke nufi a ƙa'idojin bayanai na FTC?", options: ["Ku riƙe bayanan da kuke buƙata kawai", "Ku yi amfani da ƙananan haruffa", "Ku ɗauki ma'aikata kaɗan", "Ku goge shafin intanet ɗinku"], answer: 0, why: "Riƙe bayanai kaɗan yana nufin abin da zai iya ɓacewa kaɗan ne." },
            { objective: "O3", q: "Kuna son AI ya taƙaita imel ɗin abokan ciniki. Me za ku fara dubawa?", options: ["Saurin kayan", "Sharuɗɗan sirri da saitunan kayan game da koyo daga bayananku", "Launukan kayan", "Babu komai"], answer: 1, why: "Ku san yadda kaya ke ajiye bayanai da amfani da su kafin bayanan abokan ciniki su shiga." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Ku san haɗarin kuma ku duba aikin",
        questions: [
          { objective: "O1", q: "Wanne ne haɗarin gaskiya (accuracy)?", options: ["AI yana amfani da launukan alamar kasuwancinku", "AI ya ƙirƙiri farashin da ba ku taɓa sanyawa ba", "AI ya rubuta gajeren imel", "AI ya yi jeri"], answer: 1, why: "Ƙirƙirarrun bayanai su ne haɗarin gaskiya." },
          { objective: "O2", q: "Kuna amfani da AI don rarraba takardun neman aiki. Me kuma dole ku duba?", options: ["Yanayin rana", "Siffar haruffa kawai", "Babu komai, AI ba ya nuna son kai", "Ko yana yi wa wasu rukunin mutane rashin adalci"], answer: 3, why: "Dokokin hana nuna bambanci suna aiki har yanzu idan AI ya taimaka wajen yanke shawara." },
          { objective: "O2", q: "Wane ne ya kamata ya yanke shawarar ɗaukar aiki?", options: ["Mutum, AI kuma yana tsara bayanai kawai", "AI shi kaɗai", "Kowane kaya kawai", "Mai neman aikin"], answer: 0, why: "Manyan shawarwari suna zama a hannun mutum." },
          { objective: "O3", q: "Wanne ne ɗaya daga cikin ƙa'idoji biyar na FTC kan bayanai?", options: ["Ku raba bayanai da dukkan kayan aiki", "Ku tattara komai har abada", "Ku rage: ku riƙe abin da kuke buƙata kawai", "Kada ku taɓa yin shiri"], answer: 2, why: "Ku rage ɗaya ne daga cikin biyar ɗin." },
          { objective: "O3", q: "Wanne ne kada ya taɓa shiga kayan hira na AI?", options: ["Taƙaitaccen bayani babu sunaye", "Lokutan buɗe shagonku", "Lambar katin wani abokin ciniki", "Jerin hidimominku"], answer: 2, why: "Lambobin kati bayanan mutum ne masu muhimmanci." }
        ]
      }
    },
    {
      name: "Babi na 2: Iƙirari na gaskiya, mallaka da dokarku",
      lessons: [
        {
          objectives: ["O4"],
          title: "Iƙirarin AI na gaskiya, tallatawa da sharhi",
          minutes: 5,
          goal: "Duba tallarku don iƙirarin AI masu ruɗarwa, tallatawar da ba a bayyana ba da sharhin bogi.",
          text: [
            "FTC ta ce dole talla ta zama gaskiya, ba mai ruɗarwa ba, kuma tana da hujja, kuma wannan ya shafi iƙirarin AI. Kada ku ce kayanku \"yana amfani da AI\" idan ba ya yi, kuma kada ku zuƙa abin da AI ke yi ko yadda yake daidai. A 2026 FTC ta kammala umarni a kan wasu kamfanoni da suka yi iƙirarin cewa hidimar tallarsu ta AI tana sauraron hirar mutane ta na'urori masu wayo, alhali ba haka ba ne.",
            "Idan kun biya wani ko kun ba shi kaya kyauta don ya tallata ku, dole a bayyana wannan alaƙa a sarari, kamar \"#ad\" a farkon rubutun ko a cikin bidiyon kansa. Ku ne ke da alhakin abin da masu tallata ku ke faɗa.",
            "Dokar FTC kan sharhin bogi ta hana sharhi da shaidu na bogi, har da sharhin da AI ya rubuta daga mutanen da babu su, kuma ta hana ba da lada don sharhi mai kyau kawai. Ku yi magana da lauya idan ba ku tabbata ko an yarda da wani iƙirari ko kamfen ba."
          ],
          steps: ["Ku jera kowane iƙirari da tallarku ke yi game da AI ko sakamako.", "Ku riƙe iƙirarin da ke gaskiya kuma za ku iya tabbatarwa kawai.", "Ku duba cewa kowane talla da aka biya ko aka ba da kyauta yana da bayani a sarari.", "Ku tabbata kowane sharhi na gaske ne, kuma ba a biya shi da lada don kyakkyawan maki ba.", "Ku tambayi lauya idan kuna shakka."],
          words: [["Tabbatarwa da hujja (substantiate)", "goyon bayan iƙirari da shaida."], ["Alaƙa mai muhimmanci (material connection)", "dangantaka kamar biya ko kaya kyauta tsakanin kasuwanci da wanda ke tallata shi."]],
          slides: [
            { title: "Iƙirarin AI na gaskiya", bullets: ["Gaskiya, ba mai ruɗarwa ba, tare da hujja", "Kada ku ce \"yana amfani da AI\" idan ba haka ba", "Kada ku zuƙa yadda yake daidai"] },
            { title: "Misalin matakin FTC", bullets: ["Umarnin 2026 kan iƙirarin ƙarya game da hidimar tallar AI", "Ta ce tana amfani da bayanan murya; ba haka ba ne"] },
            { title: "Tallatawa da sharhi", bullets: ["Ku bayyana tallatawar da aka biya ko aka ba kyauta a sarari", "An hana sharhin bogi da wanda AI ya rubuta", "Babu lada don sharhi mai kyau kawai"] }
          ],
          sources: [{ name: "FTC: Advertising and Marketing Basics (Tushen talla)", url: "https://www.ftc.gov/business-guidance/advertising-marketing/advertising-marketing-basics" }, { name: "FTC: Umarni a kan Cox Media Group da wasu kamfanoni biyu game da iƙirarin tallar AI (2026)", url: "https://www.ftc.gov/news-events/news/press-releases/2026/08/ftc-finalizes-orders-cox-media-group-two-other-firms-settling-charges-they-deceived-customers-about" }, { name: "FTC: Endorsement Guides, What People Are Asking (Jagororin tallatawa, tambayoyin mutane)", url: "https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking" }, { name: "FTC: Dokar ƙarshe da ta hana sharhi da shaidu na bogi (sanarwa ga manema labarai)", url: "https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials" }],
          tryIt: "Ku bi shafin intanet ɗinku ko rubuce-rubucenku a shafukan sada zumunta. Ku jera kowane iƙirari game da AI ko sakamako, ku yi masa alama: a bar shi (gaskiya ne kuma ana iya tabbatarwa), a gyara shi, ko a cire shi. Ku duba kowane talla da aka biya don bayani a sarari.",
          youCanNow: "duba tallarku don iƙirarin AI na gaskiya, bayanai masu dacewa da sharhi na gaske.",
          quickCheck: [
            { objective: "O4", q: "Me ke sa iƙirarin AI a talla ya zama karɓaɓɓe a ƙarƙashin dokokin FTC?", options: ["Yana da ban sha'awa", "Masu gasa ma suna faɗa", "Gaskiya ne, ba mai ruɗarwa ba, kuma yana da hujja", "Yana cikin ƙananan rubutu"], answer: 2, why: "Dokokin talla na FTC sun shafi iƙirarin AI kamar kowane iƙirari." },
            { objective: "O4", q: "Wani mai ƙirƙirar abun ciki da kuka biya ya rubuta game da shagonku ba tare da bayyanawa ba. Me za ku yi?", options: ["Babu komai; rubutunsa ne", "Ku ƙara yaɗa shi", "Ku sake biyan sa", "Ku nemi ya ƙara bayani a sarari kamar \"#ad\" a farko"], answer: 3, why: "Kasuwanci ne ke da alhakin abin da masu tallata shi da aka biya ke faɗa." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Haƙƙin mallaka da aikin da AI ya yi",
          minutes: 5,
          goal: "Bayyana wanda zai iya mallakar aikin da aka yi da taimakon AI, da yadda ake rage haɗarin kwafi.",
          text: [
            "Rahoton Ofishin Haƙƙin Mallaka na Amurka (US Copyright Office) kan abin da za a iya kare wa (Janairu 2025) ya ce haƙƙin mallaka yana kare aikin da mutum ya ƙirƙira. Abin da AI kaɗai ya yi ba a kare shi, kuma rubuta prompt kawai ba ya sa ku zama marubucin sakamakon. Amma amfani da AI a matsayin kayan aiki ba ya hana kariya: tsarin ƙirƙirarku, gyare-gyarenku, ko aikin hannunku da ke bayyana a sakamakon za a iya kare su.",
            "Abin da wannan ke nufi ga kasuwanci: idan kuna buƙatar mallakar wani abu, kamar tambarinku (logo), zanen kayanku ko littafi, ku saka ƙirƙira ta gaske ta mutum a ciki, kuma ku ajiye bayanan abin da kuka yi. Idan kuna rajistar aiki da ke ɗauke da abin da AI ya yi, Ofishin yana da jagora game da bayyana shi.",
            "Ɗayan haɗarin shi ne kwafi. Sakamakon AI wani lokaci yana iya kama da aikin wani ko alamar kasuwancinsa. Kada ku nemi AI ya kwafi mai zane da ke raye, tambarin wani kamfani ko sanannen hali (character), kuma ku duba muhimman sakamako. Dokar haƙƙin mallaka game da AI tana ci gaba da canjawa, akwai shari'o'i a kotu har yanzu; ku yi magana da lauya kafin ku dogara da aikin da AI ya yi don wani abu mai muhimmanci."
          ],
          steps: ["Ku yi alama a kan kayan kasuwanci da kuke buƙatar mallaka (tambari, zane, littattafai, kwasa-kwasai).", "Ga waɗannan, ku ƙara aikin ƙirƙira na gaske na mutum, ku ajiye rubuce-rubuce ko daftari.", "Kada ku nemi AI ya kwafi wani mai zane, alamar kasuwanci ko hali.", "Ku duba muhimman sakamako ko suna kama da aikin wasu.", "Ku yi magana da lauya kafin ku yi rajista ko ku dogara da aikin da aka yi da taimakon AI."],
          words: [["Haƙƙin mallaka (copyright)", "ikon shari'a na hana kwafin aikin ƙirƙira na asali."], ["Ƙirƙirar mutum (human authorship)", "zaɓuɓɓukan ƙirƙira da mutum ya yi, waɗanda haƙƙin mallaka ke karewa."], ["Rajista", "shigar da aiki a Ofishin Haƙƙin Mallaka don rubuta iƙirarinku."]],
          slides: [
            { title: "Abin da Ofishin Haƙƙin Mallaka ya ce", bullets: ["Haƙƙin mallaka yana kare ƙirƙirar mutum", "Abin da AI kaɗai ya yi: ba a kare shi", "Prompt kaɗai ba ya sa ku zama marubucin"] },
            { title: "AI a matsayin kayan aiki ya yi", bullets: ["Gyare-gyarenku da tsarinku na ƙirƙira za a iya kare su", "Sassan da kuka yi da hannunku da ke bayyana a sakamakon"] },
            { title: "Mallakar abin da ke da muhimmanci", bullets: ["Ku ƙara ƙirƙira ta gaske ta mutum", "Ku ajiye daftari da rubuce-rubuce", "Ku bi jagorar Ofishin kan bayyana AI"] },
            { title: "Ku guji kwafi", bullets: ["Kada ku kwafi masu zane, tambari ko haluka", "Dokar tana canjawa har yanzu: ku tambayi lauya"] }
          ],
          sources: [{ name: "US Copyright Office: Copyright and Artificial Intelligence (Haƙƙin mallaka da AI)", url: "https://www.copyright.gov/ai/" }, { name: "US Copyright Office: Sanarwar rahoto na 2 kan abin da za a iya kare wa (Janairu 2025)", url: "https://www.copyright.gov/newsnet/2025/1060.html" }],
          tryIt: "Ku jera kayan kasuwanci uku da kuka yi ko kuke shirin yi da AI. Ga kowanne, ku rubuta ko kuna buƙatar mallakarsa da aikin ƙirƙira na mutum da za ku ƙara, ku kuma lura da duk wanda ke buƙatar shawarar lauya.",
          youCanNow: "bayyana tushen haƙƙin mallaka na aikin da AI ya yi, da rage haɗarin kwafi.",
          quickCheck: [
            { objective: "O5", q: "A cewar Ofishin Haƙƙin Mallaka na Amurka, me ake karewa a aikin da aka yi da taimakon AI?", options: ["Gudummawar ƙirƙira ta mutum", "Duk abin da AI ya yi", "Prompt kawai", "Babu komai, har abada"], answer: 0, why: "Aikin ƙirƙira na mutum za a iya kare shi; abin da AI kaɗai ya yi ba a kare shi." },
            { objective: "O5", q: "Kuna buƙatar mallakar sabon tambarinku. Me za ku yi?", options: ["Ku yi amfani da hoton AI kaɗai kamar yadda yake", "Ku ƙara aikin ƙirƙira na gaske na mutum, ku ajiye bayanai, ku tambayi lauya idan kuna shakka", "Ku kwafi sanannen tambari", "Ku bar tambari"], answer: 1, why: "Aikin ƙirƙira na mutum da bayanai suna ƙara yiwuwar kariya; lauya zai iya ba da shawara." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Rubuta dokarku ta amfani da AI",
          minutes: 6,
          goal: "Rubuta dokar amfani da AI mai shafi ɗaya don kasuwancinku.",
          text: [
            "Dokar amfani da AI gajeren jerin ƙa'idoji ne game da yadda ku da duk wanda ke aiki tare da ku ke amfani da AI. Tana mayar da duk abin da ke cikin wannan kwas zuwa al'ada. Tana taimaka wa sababbin masu taimako, tana kwantar da hankalin abokan ciniki, kuma tana nuna cewa kun yi hankali idan wani abu ya lalace.",
            "Doka mai sauƙi tana da sassa bakwai: kayan da aka amince da su; bayanan da kada su taɓa shiga AI; sakamakon da kullum ke buƙatar dubawar mutum; iƙirari na gaskiya da bayyanawa; haƙƙin mallaka da mallaka; wanda za a tambaya idan ana shakka (har da lauya); da ranar sake dubawa.",
            "AI zai iya rubuta daftarinta: ku ba shi jerin haɗarinku da ƙa'idojin wannan kwas, ku nemi doka mai shafi ɗaya da kalmomi masu sauƙi. Sannan ku gyara ta ta yadda kowace ƙa'ida abu ne da za ku yi da gaske, ku raba ta da duk wanda ke taimaka muku, ku sake duba ta kowane wata shida."
          ],
          steps: ["Ku tattara jerin haɗarinku, jerin abin da kada ya shiga AI da duba iƙirarinku daga darussan baya.", "Ku nemi AI ya rubuta doka mai shafi ɗaya da sassa bakwai, da kalmomi masu sauƙi.", "Ku gyara kowace ƙa'ida don ta zama gaskiya ga kasuwancinku.", "Ku raba ta da duk wanda ke taimaka muku.", "Ku sanya ranar sake dubawa wata shida daga yanzu."],
          words: [["Dokar amfani da AI (AI use policy)", "gajeren jerin ƙa'idoji game da yadda kasuwanci ke amfani da AI."], ["Ranar sake dubawa", "ranar da za ku duba ku sabunta dokar."]],
          slides: [
            { title: "Me yasa doka", bullets: ["Tana mayar da ƙa'idoji masu kyau zuwa al'ada", "Tana jagorantar masu taimako, tana kwantar da hankalin abokan ciniki"] },
            { title: "Sassa bakwai", bullets: ["Kayan da aka amince da su; bayanan da kada su shiga AI", "Dubawar mutum; iƙirari na gaskiya da bayyanawa", "Haƙƙin mallaka; wanda za a tambaya; ranar sake dubawa"] },
            { title: "Ku mayar da ita ta gaske", bullets: ["Ku bar AI ya rubuta daftari daga bayananku", "Ku gyara kowace ƙa'ida ta dace da ku", "Ku raba ta, ku sake duba ta kowane wata shida"] }
          ],
          tryIt: "Aikin ƙarshe: ku rubuta dokarku ta amfani da AI mai shafi ɗaya da dukkan sassa bakwai, ku gyara ta ta dace da kasuwancinku, ku sanya ranar sake dubawa.",
          youCanNow: "gudanar da amfani da AI a kasuwancinku ƙarƙashin rubutacciyar doka mai sarari ta gaskiya, da sanin lokacin kiran lauya.",
          quickCheck: [
            { objective: "O6", q: "Mece ce dokar amfani da AI?", options: ["Jerin farashin kayan AI", "Rubutun blog da AI ya rubuta", "Rubutattun ƙa'idoji game da yadda kasuwancinku ke amfani da AI", "Kwangila da abokin ciniki"], answer: 2, why: "Doka tana faɗa wa kowa yadda ake amfani da AI lafiya a kasuwanci." },
            { objective: "O6", q: "Wani sabon kayan AI ya fito da ma'aikatanku ke son amfani da shi. Me dokarku ta ce ku yi?", options: ["Ku bar kowa ya gwada shi da bayanan abokan ciniki", "Ku hana duk AI", "Ku yi watsi da dokar", "Ku duba shi bisa dokar kafin ku saka shi a jerin waɗanda aka amince da su"], answer: 3, why: "Dokar tana jera kayan da aka amince da su da yadda ake ƙara sababbi." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Iƙirari na gaskiya, mallaka da dokarku",
        questions: [
          { objective: "O4", q: "Manhajarku ba ta amfani da AI. Za ku iya tallata ta a matsayin \"mai ƙarfin AI\"?", options: ["A'a, wannan iƙirarin ƙarya ne", "Ee, kowa yana yi", "A ƙananan rubutu kawai", "A intanet kawai"], answer: 0, why: "Iƙirarin talla, har da na AI, dole su zama gaskiya." },
          { objective: "O4", q: "Wace al'adar sharhi ce dokar FTC ta hana?", options: ["Nuna sharhi na gaske da izini", "Neman abokan ciniki su ba da sharhi na gaskiya", "Amsa sharhi", "Saka sharhin da AI ya rubuta daga mutanen da babu su"], answer: 3, why: "Dokar ta hana sharhin bogi, har da waɗanda AI ya rubuta." },
          { objective: "O5", q: "A cewar Ofishin Haƙƙin Mallaka na Amurka, rubuta prompt yana sa ku zama marubucin sakamakon AI?", options: ["Ee, koyaushe", "A'a, prompt kaɗai bai isa ba", "Don dogayen prompts kawai", "Don hotuna kawai"], answer: 1, why: "Ofishin ya ce prompt kaɗai ba ya sa mutum ya zama marubuci." },
          { objective: "O5", q: "Yaya za ku ƙara yiwuwar a kare aikin da aka yi da taimakon AI?", options: ["Ku ƙara aikin ƙirƙira na gaske na mutum, ku ajiye bayanai", "Ku ƙara yawan prompts", "Ku ƙara kalmar \"copyright\"", "Ku yi amfani da kayan AI na biya"], answer: 0, why: "Gudummawar ƙirƙira ta mutum za a iya kare ta." },
          { objective: "O6", q: "Sau nawa ya kamata ku sake duba dokarku ta amfani da AI?", options: ["Bayan an kai ku ƙara kawai", "Ba ko sau ɗaya", "A wata ranar da aka sanya, kamar kowane wata shida", "Kowace rana"], answer: 2, why: "Kayan aiki da dokoki suna canjawa, don haka sake dubawa akai-akai yana sa ta zama ta zamani." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Ɗabi'u, Haɗari da Batutuwan Shari'a na AI",
    questions: [
      { objective: "O1", q: "Wanne BA ɗaya daga cikin haɗarin AI biyar na wannan kwas ba ne?", options: ["Gaskiya", "Ƙarfin batir", "Sirri", "Adalci"], answer: 1, why: "Biyar ɗin su ne gaskiya, adalci, sirri, gaskiya a talla da mallaka." },
      { objective: "O6", q: "Amfani da AI cikin ɗabi'a ya haɗa da:", options: ["Tattara duk bayanan da za ku iya", "Barin AI ya yanke kowace shawara", "Ɓoye amfani da AI daga kowa", "Barin mutum ya kasance mai alhaki"], answer: 3, why: "Mutum ne ke ci gaba da kasancewa mai alhakin amfani da AI." },
      { objective: "O1", q: "Jerin haɗari yana rubuta:", options: ["Mabiyanku a shafukan sada zumunta", "Kalmomin sirrin masu gasa da ku", "Farashin kayan aikinku kawai", "Inda kuke amfani da AI, abin da zai iya lalacewa, girman illar, da matakin dubawa"], answer: 3, why: "Wannan yana sa a iya sarrafa haɗari." },
      { objective: "O2", q: "Wane sakamakon AI ne ke buƙatar dubawar mutum kowane lokaci?", options: ["Tunani na sirri da za ku jefar", "Jerin farashi da abokan ciniki za su gani", "Jerin abincin rana", "Barkwanci don kanku"], answer: 1, why: "Bayanan kuɗi da abokan ciniki ke gani dole a duba su." },
      { objective: "O2", q: "Rashin adalci (bias) a AI yana nufin:", options: ["Kuskuren rubutun kalma", "Amsa mai jinkiri", "Sakamakon da bai yi wa wasu rukunin mutane adalci ba", "Wani nau'in kaya"], answer: 2, why: "Wannan ita ce ma'anarsa." },
      { objective: "O2", q: "Dokokin hana nuna bambanci suna aiki idan AI ya taimaka wajen yanke shawarar ɗaukar aiki?", options: ["Ee", "A'a, kwamfutoci ba su shiga ba", "Don manyan kamfanoni a ƙasashen waje kawai", "Don takardun neman aiki na takarda kawai"], answer: 0, why: "Dokar ta shafi shawarar, ko ta yaya aka yanke ta." },
      { objective: "O2", q: "Don shawarwarin bashi ko gidaje, AI ya kamata:", options: ["A ɓoye shi daga abokin ciniki", "Ya yanke shawara shi kaɗai", "Ya tsara bayanai yayin da mutum ke yanke shawara", "Ya maye gurbin lauyanku"], answer: 2, why: "Manyan shawarwari suna zama a hannun mutum." },
      { objective: "O3", q: "\"Take stock\" (ku ƙidaya) a jagorar FTC yana nufin:", options: ["Ku san bayanan mutane da kuke da su", "Ku sayi hannun jari", "Ku ƙidaya kayan shagonku kawai", "Ku goge komai"], answer: 0, why: "Ita ce ta farko a cikin ƙa'idoji biyar." },
      { objective: "O3", q: "\"Pitch it\" (ku zubar) a jagorar FTC yana nufin:", options: ["Ku yi tallar sayarwa", "Ku zubar da bayanan da ba ku buƙata kuma ta hanyar da ta dace", "Ku jefa ƙwallo", "Ku saka shi a intanet"], answer: 1, why: "Tsofaffin bayanai da ba ku buƙata haɗari ne." },
      { objective: "O3", q: "Idan dole ne ku yi amfani da bayanan abokan ciniki da kayan AI, ku zaɓi:", options: ["Tura su ga kanku ta imel", "Kowane kaya kyauta ba tare da karanta sharuɗɗa ba", "Saka su a fili ga jama'a", "Tsarin da sharuɗɗansa suka ce ba zai koyi daga bayananku ba"], answer: 3, why: "Sharuɗɗan kasuwanci za su iya kare bayanai sosai." },
      { objective: "O3", q: "Idan kayan AI suna sarrafa bayanan abokan ciniki, sanarwar sirrinku ya kamata ta:", options: ["Faɗi haka da gaskiya", "Ɓoye shi", "Ce ba ku taɓa amfani da kwamfuta ba", "A cire ta"], answer: 0, why: "Gaskiya da abokan ciniki wajibi ce kuma ɗabi'a ce mai kyau." },
      { objective: "O4", q: "Dokokin talla na FTC sun ce iƙirari dole ya zama:", options: ["Kayan AI ya amince da shi", "Mai ban dariya", "Gajere", "Gaskiya, ba mai ruɗarwa ba, kuma yana da hujja"], answer: 3, why: "Wannan shi ne ma'aunin gaskiya a talla." },
      { objective: "O4", q: "Umarnin FTC na 2026 da aka tattauna a wannan kwas sun shafi:", options: ["Lokutan buɗe shago", "Jinkirin biyan haraji", "Iƙirarin ƙarya game da abin da hidimar tallar AI ke yi", "Jinkirin isar da kaya"], answer: 2, why: "Kamfanonin sun yi iƙirarin amfani da bayanan murya alhali ba sa yi." },
      { objective: "O4", q: "Wani mai tasiri (influencer) da kuka biya ya rubuta game da ku. Dole ne ya:", options: ["Ɓoye shi a cikin sharhi", "Bayyana shi a sarari, kamar \"#ad\" a farko", "Kada ya ce komai", "Ambace shi sau ɗaya a shekara"], answer: 1, why: "Dole a bayyana alaƙa mai muhimmanci a sarari." },
      { objective: "O4", q: "Wane ne ke da alhakin abin da masu tallata ku da aka biya ke faɗa game da ku?", options: ["Babu kowa", "Mai tallatawar kawai", "Dandalin intanet", "Ku, kasuwancin"], answer: 3, why: "FTC ta ce kasuwanci ne ke da alhakin iƙirarin masu tallata shi." },
      { objective: "O4", q: "Ba da rangwame ga abokan ciniki da suka bar sharhi mai taurari 5 kawai:", options: ["Wajibi ne", "Kyakkyawan tunani ne", "Dokar FTC kan sharhin bogi ta hana shi", "Ya yi idan an bayyana a ƙananan rubutu"], answer: 2, why: "An hana lada da aka danganta da sharhi mai kyau." },
      { objective: "O5", q: "A cewar Ofishin Haƙƙin Mallaka, abin da AI kaɗai ya yi:", options: ["Haƙƙin mallaka ba ya kare shi", "Naku ne kai tsaye", "Mallakar AI ne", "Ana kare shi na shekara 100"], answer: 0, why: "Haƙƙin mallaka yana buƙatar ƙirƙirar mutum." },
      { objective: "O5", q: "Amfani da AI a matsayin kayan aiki a aikinku na ƙirƙira:", options: ["Koyaushe yana soke haƙƙin mallaka", "Shi kaɗai ba ya hana haƙƙin mallaka ga gudummawarku ta mutum", "Yana mayar da komai mallakar jama'a", "Haramun ne a doka"], answer: 1, why: "Ofishin ya ce ana iya kare aikin da aka yi da taimakon AI inda ƙirƙirar mutum ke bayyana." },
      { objective: "O5", q: "Wace buƙata ce ke ƙara haɗarin kwafi?", options: ["\"Ka ba ni ra'ayoyi don tambarin gidan burodi\"", "\"Ka yi tambari daidai da na [sanannen kamfani]\"", "\"Ka ba da shawarar launuka don kasuwancin share-share\"", "\"Ka rubuta taken talla game da sabon burodi\""], answer: 1, why: "Kwafin tambarin wani kamfani zai iya keta haƙƙin alamar kasuwanci (trademark) ko haƙƙin mallaka." },
      { objective: "O6", q: "Idan kuna shakka game da wata tambayar shari'a ga kasuwancinku, ya kamata ku:", options: ["Yi magana da lauya game da halin da kuke ciki", "Amince da duk abin da AI ya faɗa", "Yi watsi da ita", "Kwafi abin da masu gasa da ku ke yi"], answer: 0, why: "Dokoki suna canjawa kuma sun bambanta daga wuri zuwa wuri; lauya zai iya ba ku shawara." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      1,
      3,
      4,
      7,
      9,
      11,
      13,
      16,
      19
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Kayan da aka amince da su da bayanai",
        objective: "O3",
        notYet: "Babu jerin kayan da aka amince da su, ko babu jerin abin da kada ya shiga AI.",
        meets: "An ambaci kayan da aka amince da su, kuma akwai jeri mai sarari na bayanan da kada su taɓa shiga cikinsu.",
        exceeds: "Ya rubuta saitin sirrin da aka duba a kowane kaya da aka amince da shi."
      },
      {
        name: "Dubawar mutum",
        objective: "O2",
        notYet: "Bai faɗi waɗanne sakamako ne ke buƙatar mutum ya duba su ba.",
        meets: "Bayanai na gaskiya, kuɗi, shari'a, lafiya da duk abin da abokan ciniki ke gani duk suna buƙatar dubawar mutum.",
        exceeds: "Ya faɗi wanda ke dubawa da abin da yake nema, har da adalci."
      },
      {
        name: "Iƙirari na gaskiya da tallatawa",
        objective: "O4",
        notYet: "Babu ƙa'ida game da iƙirarin AI, tallatawar da aka biya ko sharhi.",
        meets: "Dole iƙirari su zama gaskiya kuma ana iya tabbatar da su; ana bayyana rubutun da aka biya; babu sharhin bogi ko na saye.",
        exceeds: "Ya haɗa da sakamakon dubawar mai kasuwanci na a bar shi, a gyara shi ko a cire shi."
      },
      {
        name: "Haƙƙin mallaka",
        objective: "O5",
        notYet: "Babu ƙa'ida don abin da AI ya yi.",
        meets: "Ya faɗi lokacin da ake ƙara aikin ƙirƙira na mutum da lokacin tambayar lauya game da mallaka.",
        exceeds: "Ya jera manyan kayan kasuwancin da aka yi da taimakon AI da yadda ake kula da kowanne."
      },
      {
        name: "Alhaki da sake dubawa",
        objective: "O6",
        notYet: "Ba a ambaci wanda ke da alhaki ba, ko babu ranar sake dubawa.",
        meets: "Ya ambaci wanda ke da alhaki, lokacin kiran lauya da ranar sake dubawa.",
        exceeds: "Ya danganta da jerin haɗari ta yadda kowane babban haɗari yana da ƙa'ida."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu kasuwanci da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu kasuwanci da suka fara amfani da dokarsu ta AI kuma suka raba ta da ma'aikata cikin kwanaki 30 (binciken biyo baya)",
      "Masu kasuwanci da suka gyara ko suka cire aƙalla iƙirari ɗaya mai ruɗarwa a shafin intanet ko shafukan sada zumunta",
      "Masu koyo da suka fara wani kwas na Koach Learn don masu kasuwanci cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai kayan AI da kasuwancin ke amfani da su",
      "Shafin intanet na kasuwancin, shafukan sada zumunta, da jerin bayanan abokan ciniki da ake riƙe da su",
      "Samfurin doka mai shafi ɗaya da sassa bakwai",
      "Kusan minti 60 zuwa 75 gaba ɗaya don darussa, dubawa, gwaje-gwaje da dokar"
    ],
    facilitatorNotes: [
      "Ku faɗi a farko cewa kwas ɗin ilimi ne, ba shawarar shari'a ba, kuma dokoki sun bambanta daga jiha zuwa jiha da ƙasa zuwa ƙasa.",
      "Ku sa masu kasuwanci su duba iƙirarin shafukansu biyu-biyu, suna yi wa kowanne alama: a bar shi, a gyara shi ko a cire shi.",
      "Kada ku yi amfani da bayanan abokan ciniki na gaske a atisaye; ku yi amfani da nau'o'in bayanai a maimakon haka.",
      "Ku riƙe jerin hidimomin taimakon shari'a ga ƙananan kasuwanci na yankin, ko hidimomin haɗawa da lauya, don rabawa.",
      "Ku ba da maki ga dokar da ma'aunin rubric, layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
