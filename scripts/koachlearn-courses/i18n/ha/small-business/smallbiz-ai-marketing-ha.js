"use strict";

// Koach Learn course, Hausa (ha) translation of small-business/smallbiz-ai-marketing.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const FTC_ADS = { name: "FTC: Muhimman abubuwa game da talla (Advertising and Marketing basics)", url: "https://www.ftc.gov/business-guidance/advertising-marketing" };
const FTC_REVIEWS = { name: "FTC: Dokar sharhin abokan ciniki da shaidu, tambayoyi da amsoshi", url: "https://www.ftc.gov/business-guidance/resources/consumer-reviews-testimonials-rule-questions-answers" };
const CAN_SPAM = { name: "FTC: Dokar CAN-SPAM, jagorar bin doka ga 'yan kasuwa", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" };

module.exports = {
  id: "smallbiz-ai-marketing-ha",
  lang: "ha",
  translationOf: "smallbiz-ai-marketing",
  category: "Small Business",
  name: "AI a Tallata Ƙaramar Sana'a",
  skills: "Rubuta saƙon talla, Yin saƙonnin kafofin sada zumunta da AI, Zana takardar talla (flyer), Tsara jadawalin saƙonni, Kiyaye gaskiya a talla, Duba abin da ke aiki",
  outcome: "tsarawa da yin tallar wata ɗaya don sana'arku da taimakon AI: babban saƙo mai sarari, jadawalin saƙonni na mako huɗu, saƙonnin kafofin sada zumunta da takardar talla ɗaya, duk da maganganun gaskiya, da hanya mai sauƙi ta ganin waɗanne saƙonni suka kawo abokan ciniki.",
  about: [
    "Wannan kwas ɗin na masu ƙananan sana'o'i ne da ke yi wa kansu talla: gidajen abinci da motocin sayar da abinci, wuraren gyaran gashi da aski, shaguna, masu aikin share-share da gyare-gyare, da sana'o'in gida. Da yawa daga cikin ɗalibanmu masu sana'o'i ne na tsiraru (minority-owned) da ke tallata wa unguwanninsu da al'ummominsu.",
    "Za ku yi amfani da kayan AI kyauta don nemo babban saƙonku, rubuta saƙonni da bayanan hoto (captions), zana takardar talla, tsara saƙonnin wata ɗaya, kiyaye gaskiyar maganganunku bisa dokokin FTC (hukumar kasuwanci ta Amurka), da bin diddigin abin da ke kawo abokan ciniki da gaske.",
    "Kowane darasi yana ɗaukar kusan minti biyar, tare da aikin \"Gwada yanzu\". Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe. Ayyukan suna haɗuwa su zama tallar wata ɗaya da ke shirye don a saka."
  ],
  finalTask: "Ku yi tallar wata ɗaya: ku rubuta babban saƙonku, jadawalin saƙonni na mako huɗu mai aƙalla saƙonni takwas, cikakkun bayanan hoto (captions) na huɗu daga cikinsu, takardar talla ɗaya da aka yi a kayan zane, da teburin bin diddigi da ke nuna yadda za ku gane waɗanne saƙonni suka kawo abokan ciniki. Ku tabbatar kowace magana gaskiya ce, kuma kowane hoto naku ne ko kuna da izinin amfani da shi.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Masu ƙananan sana'o'i da ke yi wa kansu talla: gidajen abinci da motocin sayar da abinci, wuraren gyaran gashi da aski, shaguna, masu aikin share-share da gyare-gyare, da sana'o'in gida. Da yawa sana'o'i ne na tsiraru (minority-owned) da ke tallata wa unguwanninsu da al'ummominsu.",
    startingPoint: "Suna saka saƙo a kafofin sada zumunta lokaci-lokaci, wataƙila sun taɓa yin takardar talla. Ba su da babban saƙo, jadawalin saƙonni ko bin diddigi, kuma ba sa amfani da AI sosai wajen talla.",
    gap: "Saƙonnin bazuwar suna ɗaukar lokaci kuma ba safai suke kawo abokan ciniki ba, kuma AI yana iya ƙara maganganu ko hotunan da ba gaskiya ba, wanda zai iya karya dokokin FTC ya kuma rage amincewa. Masu sana'a suna buƙatar saƙo mai sarari, saƙonnin wata ɗaya da aka tsara cikin gaskiya, da hanya mai sauƙi ta ganin abin da ke kawo abokan ciniki.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli",
      "Na'urori: wayar zamani mai kyamara; kwamfuta tana taimakawa wajen takardar talla da tebur",
      "Lokaci: darussa na kusan minti 5 da suka dace da ranar aiki mai yawan hidima",
      "Dokoki: dokar FTC ta gaskiya a talla, dokar FTC ta sharhi (reviews), da CAN-SPAM don imel ɗin talla",
      "Sirri da haƙƙi: izini kafin saka hoton abokin ciniki, kuma ba a saka sunayen abokan ciniki a AI"
    ],
    prerequisites: "Kwas ɗin \"Gabatarwa ga AI don Ƙananan Kasuwanci\" yana taimakawa, amma ba dole ba ne."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Ta amfani da tsarin babban saƙo da mataimakin AI", action: "rubuta babban saƙo da ke faɗin su waye kuke yi wa hidima, abin da kuke yi da abin da ya bambanta ku", standard: "cikin jimla ɗaya ko biyu na gaskiya da suka yi kama da ku" },
    { id: "O2", condition: "Idan kuna da babban saƙonku", action: "rubuta saƙonnin kafofin sada zumunta da bayanan hoto (captions) da taimakon AI", standard: "da ainihin bayani da aka ƙara a kowanne, babu abin da ba gaskiya ba, da izini don kowane hoton abokin ciniki" },
    { id: "O3", condition: "Ta amfani da kayan zane kyauta", action: "yin takardar talla don tayi ɗaya ko taro ɗaya", standard: "da babban kanun rubutu, hoto ɗaya na gaske, bayanai uku da kiran aiki (call to action), duk an duba su" },
    { id: "O4", condition: "Ta amfani da mataimakin AI da tebur", action: "tsara jadawalin saƙonni na mako huɗu", standard: "da yawan saƙonnin da za ku iya ci gaba da yi, nau'o'in saƙonni daban-daban, kuma an duba kowace rana" },
    { id: "O5", condition: "Idan kuna da bayanan hotonku da takardar tallarku", action: "duba tallarku don maganganun da ba za ku iya tabbatarwa ba, sharhin bogi da dokokin imel", standard: "an canja ko an cire kowace maganar da ba a tabbatar ba" },
    { id: "O6", condition: "Idan kuna da saƙonninku da takardar tallarku", action: "yin teburin bin diddigi da ke nuna wace talla ce ke kawo abokan ciniki", standard: "da lambar tayi (promo code) a kan tayi ɗaya, kuma an tabbatar da duk wani tsari da AI ya gani a cikin teburin" }
  ],
  chapters: [
    {
      name: "Babi na 1: Saƙonku da abubuwan da kuke sakawa",
      lessons: [
        {
          objectives: ["O1"],
          title: "Nemo babban saƙon tallarku",
          minutes: 5,
          goal: "Rubuta jimla ɗaya ko biyu da ke faɗin su waye kuke yi wa hidima, abin da kuke yi da abin da ya bambanta ku.",
          text: [
            "Babban saƙonku shi ne gajeriyar amsa ga tambayar \"Me yasa zan zaɓe ku?\" Kowane saƙo, takardar talla da allon suna ya kamata ya maimaita shi da kalmomi daban-daban.",
            "Tsari mai sauƙi: Muna taimaka wa [su waye] su samu [me] ta hanyar [abin da ya bambanta mu]. Misali: \"Muna taimaka wa iyalai masu yawan aiki a South Sacramento su samu abincin Filipino irin na gida, a shirye cikin minti 10, wanda iyali ɗaya ke dafawa tun 2009.\"",
            "Ku nemi AI ya taimake ku nemo shi: \"Ga abin da abokan ciniki ke faɗa game da shagona da abin da nake yi daban. Ka rubuta nau'i biyar na babban saƙo mai jimla ɗaya.\" Ku zaɓi wanda yake gaskiya kuma ya yi kama da ku."
          ],
          steps: ["Ku rubuta su waye kuke yi wa hidima.", "Ku rubuta abin da suke samu.", "Ku rubuta abin da ya bambanta ku (na gaskiya, takamaimai).", "Ku nemi AI nau'i biyar, ku zaɓi ɗaya."],
          words: [["Babban saƙo (core message)", "gajeriyar magana da ke faɗin dalilin da yasa abokan ciniki za su zaɓe ku."], ["Abin da ya bambanta ku (differentiator)", "wani abu na gaskiya da ya sa kuka bambanta da masu gasa da ku."]],
          slides: [
            { title: "Me yasa zan zaɓe ku?", bullets: ["Babban saƙonku yana amsa wannan", "Ku maimaita shi a kowane saƙo da takardar talla"] },
            { title: "Tsarin", bullets: ["Muna taimaka wa [su waye]", "su samu [me]", "ta hanyar [abin da ya bambanta mu]"] },
            { title: "Ku yi amfani da AI don bincike", bullets: ["Ku faɗi abin da abokan ciniki ke faɗa game da ku", "Ku nemi nau'i biyar", "Ku zaɓi wanda yake gaskiya kuma ya yi kama da ku"] }
          ],
          tryIt: "Ku cike tsarin don sana'arku. Sannan ku nemi mataimakin AI nau'i biyar, ku zaɓi mafi kyau.",
          youCanNow: "rubuta babban saƙo mai sarari don sana'arku.",
          quickCheck: [
            { objective: "O1", q: "Wace tambaya ce babban saƙo yake amsawa ga abokan ciniki?", options: ["Ƙarfe nawa kuke rufewa?", "Ma'aikata nawa kuke da su?", "Me yasa zan zaɓe ku?", "A ina kuka sayi kayan aikinku?"], answer: 2, why: "Babban saƙo yana faɗa wa abokan ciniki dalilin da yasa za su zaɓe ku." },
            { objective: "O1", q: "AI ya ba ku nau'i biyar na babban saƙo, kuma mafi kyau yana cewa ku ne \"wurin gyaran gashi na #1 a birni\". Me za ku yi?", options: ["Ku yi amfani da shi domin yana da ƙarfi", "Ku zaɓi nau'in da yake gaskiya kuma ya yi kama da ku", "Ku yi amfani da duka biyar", "Ku ƙara \"wataƙila\" a ciki"], answer: 1, why: "Babban saƙonku dole ya zama gaskiya kuma ya yi kama da ku." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Rubuta saƙonni da bayanan hoto da AI",
          minutes: 5,
          goal: "Mayar da babban saƙonku zuwa saƙonni da dama a kafofin sada zumunta da muryarku.",
          text: [
            "Saƙonni masu kyau na ƙaramar sana'a suna nuna abubuwa na gaske: abincin musamman na yau, aski kafin da bayan, abokin ciniki mai farin ciki (da izini), ma'aikatanku, abin da ke faruwa a bayan fage, shawara, ko wani taro. Mutane suna bin mutane.",
            "Ku nemi AI daftari: \"Ka rubuta gajerun bayanan hoto huɗu na Instagram don wurin askina. Babban saƙo: [saƙonku]. Ɗaya game da lokutan buɗewarmu na Asabar, ɗaya game da askin fade, ɗaya don gabatar da sabon mai askinmu Marcus, ɗaya da shawarar kula da gashi. Da fara'a, jimla 2 kowanne, hashtag 3.\"",
            "Sannan ku gyara. Ku ƙara ainihin bayanan da ku kaɗai kuka sani. Ku cire duk abin da yake kama da na bogi ko ya wuce gona da iri. Koyaushe ku nemi izini kafin ku saka hoton abokin ciniki ko sunansa."
          ],
          steps: ["Ku zaɓi nau'o'in saƙo huɗu: tayi, bayan fage, ma'aikata, shawara.", "Ku nemi AI bayanan hoto da babban saƙonku da muryarku.", "Ku ƙara ainihin bayanai, ku cire duk abin bogi.", "Ku nemi izini don kowane hoto ko sunan abokin ciniki."],
          words: [["Bayanin hoto (caption)", "rubutun da ke tare da hoto ko bidiyo a kafofin sada zumunta."], ["Hashtag", "kalma mai alamar # a gabanta, da ake amfani da ita don haɗa saƙonni kan wani batu."]],
          slides: [
            { title: "Ku saka abubuwa na gaske", bullets: ["Abincin musamman na yau ko aski kafin da bayan", "Ma'aikatanku da abin da ke bayan fage", "Shawarwari da taruka"] },
            { title: "Ku nemi AI daftari", bullets: ["Ku ba shi babban saƙonku da muryarku", "Ku faɗi nau'o'in saƙo da tsawonsu", "Ku nemi 'yan hashtag kaɗan"] },
            { title: "Sannan ku mayar da shi na gaske", bullets: ["Ku ƙara bayanan da ku kaɗai kuka sani", "Ku cire duk abin bogi ko wanda ya wuce gona da iri", "Izini kafin hoto ko sunan abokin ciniki"] }
          ],
          tryIt: "Ku nemi AI bayanan hoto huɗu don sana'arku da babban saƙonku. Ku gyara kowanne don ƙara ainihin bayani da cire duk abin da ba gaskiya ba.",
          youCanNow: "rubuta saƙonnin kafofin sada zumunta da taimakon AI da suka yi kama da na gaske da kuma sana'arku.",
          quickCheck: [
            { objective: "O2", q: "Mene ne bayanin hoto (caption)?", options: ["Rubutun da ke tare da hoto ko bidiyo a kafofin sada zumunta", "Lasisin kasuwanci", "Wani nau'in takardar talla", "Sharhin abokin ciniki"], answer: 0, why: "Bayanin hoto shi ne rubutun da ke tare da hotonku ko bidiyonku." },
            { objective: "O2", q: "Kuna son saka kyakkyawan hoton sabon askin wani abokin ciniki. Me za ku fara yi?", options: ["Ku saka shi ku ambaci sunansa (tag)", "Ku ɓoye fuskar ku saka shi", "Ku tambayi AI ko ya dace", "Ku nemi izinin abokin cinikin"], answer: 3, why: "Kuna buƙatar izinin abokin ciniki kafin ku saka hotonsa." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Zana takardar talla ko hoton tayi",
          minutes: 5,
          goal: "Yi takardar talla ko hoto mai sarari don tayi ɗaya ko taro ɗaya.",
          text: [
            "Takardar talla (flyer) tana aiki a kan teburin shago, allon sanarwa na unguwa, takardar sanarwar coci ko masallaci, ko a matsayin saƙo a kafofin sada zumunta. Ku yi amfani da kayan zane kyauta kamar Canva ko Adobe Express, ku fara daga samfuri (template).",
            "Ku sa sassan su yi sarari: babban kanun rubutu (tayin), hoto ɗaya, gajerun bayanai uku (me, yaushe, a ina), da kiran aiki (\"Ku kira don yin rajista\", \"Ku yi oda ta intanet\"). Ku saka babban saƙonku da ƙananan haruffa a ƙasa.",
            "Idan kuna amfani da hotunan da AI ya ƙirƙira, ku tabbata ba su nuna abinci, aiki ko sakamakon da ba ku bayarwa da gaske ba. Ku yi amfani da hotunanku na kanku idan za ku iya; abokan ciniki sun fi amincewa da hotuna na gaske."
          ],
          steps: ["Ku buɗe kayan zane ku zaɓi samfuri.", "Ku rubuta babban kanun rubutu da tayin.", "Ku ƙara hoto ɗaya, bayanai uku da kiran aiki.", "Ku duba rubutu, lambar waya, rana da adireshi.", "Ku sauke ko ku raba."],
          words: [["Kiran aiki (call to action)", "kalmomin da ke faɗa wa mutane abin da za su yi na gaba, kamar \"Ku kira don yin rajista\"."], ["Kanun rubutu (headline)", "manyan kalmomi a takardar talla ko talla."]],
          slides: [
            { title: "Sassan takardar talla mai sarari", bullets: ["Babban kanun rubutu: tayin", "Hoto ɗaya", "Me, yaushe, a ina", "Kiran aiki"] },
            { title: "Kayan zane kyauta", bullets: ["Canva ko Adobe Express", "Ku fara daga samfuri (template)"] },
            { title: "Hotunan da abokan ciniki ke amincewa da su", bullets: ["Ku yi amfani da hotunanku idan za ku iya", "Hotunan AI kada su nuna abin da ba ku bayarwa"] }
          ],
          tryIt: "Ku yi takardar talla don tayi ɗaya ko taro ɗaya na gaske, da kanun rubutu, hoto ɗaya, bayanai uku da kiran aiki. Ku duba kowane bayani kafin ku ajiye ta.",
          youCanNow: "zana takardar talla ko hoton tayi mai sarari don sana'arku.",
          quickCheck: [
            { objective: "O3", q: "Mene ne kiran aiki (call to action)?", options: ["Kiran waya ga abokin ciniki", "Babban kanun rubutu", "Kalmomin da ke faɗa wa mutane abin da za su yi na gaba", "Jerin farashi"], answer: 2, why: "Kiran aiki yana faɗa wa mutane mataki na gaba, kamar \"Ku kira don yin rajista\"." },
            { objective: "O3", q: "Takardar tallarku tana da hoton AI na kek da ba ku yi. Me za ku yi?", options: ["Ku bar shi domin yana da kyau", "Ku rage girmansa", "Ku ƙara rubutu cewa na AI ne", "Ku canja shi da hoton gaske na abin da kuke sayarwa"], answer: 3, why: "Hotuna ya kamata su nuna abin da kuke sayarwa da gaske." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Saƙonku da abubuwan da kuke sakawa",
        questions: [
          { objective: "O1", q: "Me babban saƙo yake amsawa?", options: ["Mene ne kalmar sirrinku?", "Me yasa zan zaɓe ku?", "Ina banki yake?", "Shekarun mai sana'ar nawa?"], answer: 1, why: "Babban saƙo yana faɗin dalilin da yasa abokan ciniki za su zaɓe ku." },
          { objective: "O1", q: "Wanne ne babban saƙo mai ƙarfi?", options: ["\"Mu ne mafi kyau.\"", "\"Ku shigo.\"", "\"Abinci.\"", "\"Muna taimaka wa iyalai masu yawan aiki a South Sacramento su samu abincin Filipino irin na gida cikin minti 10.\""], answer: 3, why: "Yana faɗin su waye, me, da abin da ya bambanta." },
          { objective: "O2", q: "Kafin ku saka hoton abokin ciniki dole ku:", options: ["Nemi izininsa", "Ƙara masa ado (filter)", "Tambayi AI", "Saka shi da dare"], answer: 0, why: "Izini yana nuna girmama abokan ciniki kuma yana hana matsala." },
          { objective: "O3", q: "Mene ne kiran aiki (call to action)?", options: ["Hashtag", "Kuɗin waya", "Kalmomin da ke faɗa wa mutane abin da za su yi na gaba", "Tambari (logo)"], answer: 2, why: "Yana faɗa wa mutane mataki na gaba, kamar \"Ku kira don yin rajista\"." },
          { objective: "O3", q: "Hoton AI yana nuna abincin da ba ku sayarwa. Me za ku yi?", options: ["Ku yi amfani da shi duk da haka", "Ku ƙara wasu abincin bogi", "Ku canja shi da hoton gaske ko hoton abin da kuke sayarwa", "Ku saka shi sau biyu"], answer: 2, why: "Hotuna kada su ruɗi abokan ciniki." }
        ]
      }
    },
    {
      name: "Babi na 2: Tsari, gaskiya da sakamako",
      lessons: [
        {
          objectives: ["O4"],
          title: "Tsara jadawalin saƙonni na wata",
          minutes: 5,
          goal: "Tsara saƙonnin mako huɗu a jadawali mai sauƙi.",
          text: [
            "Jadawalin saƙonni (content calendar) tebur ne da ke faɗin abin da za ku saka da lokacin da za ku saka shi. Yana hana damuwar \"me zan saka yau?\"",
            "Ku yi ginshiƙai (columns): Rana, Kafa (Platform), Nau'in saƙo, Ra'ayi, An gama bayanin hoto?, An gama hoto?. Ku tsara saƙonni biyu ko uku a mako da za ku iya ci gaba da yi da gaske. Ku haɗa nau'o'i: tayi, shawarwari, ma'aikata, abokan ciniki (da izini), da tarukan al'umma.",
            "Ku tambayi AI: \"Ka yi jadawalin saƙonni na mako huɗu don sana'ata ta share-share, saƙonni biyu a mako, da tayi, shawarwari da saƙonnin ma'aikata a haɗe. Babban saƙonmu shi ne [...]. Ka saka ranakun hutu da tarukan unguwa a [birni] a [wata] da ya kamata in duba.\" Sannan ku duba kowace rana da taro da kanku."
          ],
          steps: ["Ku yi teburin jadawali mai ginshiƙai shida.", "Ku zaɓi saƙonni nawa a mako za ku iya ci gaba da yi.", "Ku nemi AI ra'ayoyin mako huɗu.", "Ku duba ranaku da tarukan unguwa da kanku.", "Ku yi alama a saƙonnin da kuka gama yayin da kuke tafiya."],
          words: [["Jadawalin saƙonni (content calendar)", "tsarin abin da za ku saka da lokacin da za ku saka shi."], ["Kafa (platform)", "shafin ko manhajar kafofin sada zumunta, kamar Instagram, Facebook ko TikTok."]],
          slides: [
            { title: "Me yasa jadawali", bullets: ["Babu sauran \"me zan saka yau?\"", "Tebur na me da yaushe"] },
            { title: "Ginshiƙai", bullets: ["Rana, Kafa (Platform), Nau'in saƙo", "Ra'ayi, An gama bayanin hoto?, An gama hoto?"] },
            { title: "Ku tsara da AI", bullets: ["Saƙonni biyu ko uku a mako da za ku iya ci gaba da yi", "Ku haɗa tayi, shawarwari, ma'aikata, al'umma", "Ku duba kowace rana da taro da kanku"] }
          ],
          tryIt: "Ku nemi AI jadawali na mako huɗu, saƙonni biyu a mako, don sana'arku. Ku saka shi a tebur ku duba kowace rana.",
          youCanNow: "tsara saƙonnin wata ɗaya a jadawalin saƙonni.",
          quickCheck: [
            { objective: "O4", q: "Mene ne jadawalin saƙonni?", options: ["Tsarin abin da kuke sakawa da lokacin da kuke saka shi", "Jerin ranakun hutu", "Rahoton tallace-tallace", "Lokutan buɗe shagonku"], answer: 0, why: "Jadawalin saƙonni yana tsara saƙonninku bisa ranaku." },
            { objective: "O4", q: "Jadawalin AI ya tsara saƙonni biyu kowace rana, amma kuna da lokacin saƙonni biyu a mako. Me za ku yi?", options: ["Ku yi ƙoƙarin saka kowace rana duk da haka", "Ku rage shi zuwa yawan da za ku iya ci gaba da yi da gaske", "Ku bar jadawalin", "Ku ɗauki kamfanin talla aiki"], answer: 1, why: "Ku tsara yawan saƙonnin da za ku iya ci gaba da yi da gaske." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kiyaye gaskiya da bin doka a tallarku",
          minutes: 5,
          goal: "Duba tallarku don maganganun da ba za ku iya tabbatarwa ba, sharhin bogi da dokokin imel.",
          text: [
            "Hukumar Kasuwanci ta Tarayyar Amurka (Federal Trade Commission, FTC) ta ce talla dole ta zama gaskiya kuma ba ta ruɗi mutane ba, kuma kuna buƙatar hujja kan maganganun da kuke yi. \"Best tacos in LA\" (tacos mafi daɗi a LA) ana ɗaukarsa ra'ayi, amma \"Share-sharenmu yana kashe kashi 99% na ƙwayoyin cuta\" ko \"Ku rage fam 10\" magana ce da dole ku iya tabbatarwa.",
            "AI yana son manyan kalmomi: \"tabbatacce (guaranteed)\", \"wanda ya ci kyauta (award-winning)\", \"na ɗaya\". Ku cire duk wanda ba za ku iya tabbatarwa ba. Kada ku taɓa saka sharhin bogi ko shaidun bogi; dokar FTC ta sharhi ta hana su, har da waɗanda AI ya rubuta.",
            "Imel ɗin talla dole su bi dokar CAN-SPAM: mai aikawa da taken saƙo na gaskiya, a faɗi cewa talla ce, a saka adireshin gidan wasiƙarku da hanya mai sauƙi ta daina karɓa (unsubscribe), kuma a girmama buƙatar daina karɓa cikin kwanakin aiki 10."
          ],
          steps: ["Ku ja layi a ƙarƙashin kowace magana a saƙonku ko takardar tallarku.", "Ku tambaya: zan iya tabbatar da wannan?", "Ku cire ko ku canja maganganun da ba za ku iya tabbatarwa ba.", "Babu sharhin bogi ko shaidun bogi.", "Ku duba imel ɗin talla don muhimman abubuwan CAN-SPAM."],
          words: [["Magana (claim)", "maganar gaskiya a talla, kamar \"yana kashe kashi 99% na ƙwayoyin cuta\"."], ["Mai ruɗarwa (misleading)", "wanda zai iya ba mutane ra'ayi marar daidai."], ["Shaida (testimonial)", "maganar abokin ciniki da ke yabon sana'arku, da ake amfani da ita a talla."]],
          slides: [
            { title: "FTC: talla ta gaskiya", bullets: ["Talla kada ta ruɗi mutane", "Kuna buƙatar hujja kan maganganunku"] },
            { title: "Ku cire manyan kalmomin da ba za ku iya tabbatarwa ba", bullets: ["\"Tabbatacce\", \"wanda ya ci kyauta\", \"na ɗaya\"", "Babu sharhin bogi, ko da AI ne ya rubuta"] },
            { title: "Imel ɗin talla (CAN-SPAM)", bullets: ["Mai aikawa da take na gaskiya; a faɗi cewa talla ce", "Adireshin gidan wasiƙa da hanya mai sauƙi ta daina karɓa", "A girmama daina karɓa cikin kwanakin aiki 10"] }
          ],
          sources: [FTC_ADS, FTC_REVIEWS, CAN_SPAM],
          tryIt: "Ku ɗauki bayanan hotonku huɗu da takardar tallarku. Ku ja layi a ƙarƙashin kowace magana, ku canja ko ku cire duk wadda ba za ku iya tabbatarwa ba.",
          youCanNow: "duba tallarku don maganganun da ba za a iya tabbatarwa ba, sharhin bogi da matsalolin dokar imel.",
          quickCheck: [
            { objective: "O5", q: "A cewar FTC, yaya talla dole ta kasance?", options: ["Mai ban dariya", "Gajeriya", "Ta gaskiya kuma ba mai ruɗarwa ba", "Ana saka ta kowace rana"], answer: 2, why: "Dokokin FTC sun ce talla dole ta zama ta gaskiya kuma ba mai ruɗarwa ba." },
            { objective: "O5", q: "AI ya rubuta \"An zaɓe mu mafi daɗin tacos a LA\" a bayanin hotonku, amma ba a yi zaɓe ba. Me za ku yi?", options: ["Ku cire shi", "Ku bar shi; kowa yana faɗin haka", "Ku canja shi zuwa \"An zaɓe mu mafi daɗin tacos a gari\"", "Ku nemi abokai su yi zaɓe yanzu"], answer: 0, why: "Dole a cire maganganun da ba za ku iya tabbatarwa ba." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ganin abin da ke aiki",
          minutes: 5,
          goal: "Bin diddigin waɗanne saƙonni da takardun talla ke kawo abokan ciniki.",
          text: [
            "Likes (masu so) suna da kyau, amma abokan ciniki sun fi muhimmanci. Ku bi diddigin alamomi masu sauƙi: saƙonni da kira, rajistar alƙawari (bookings), mutanen da suka ambaci wani saƙo, da amfani da lamba ta musamman (\"Ku faɗi FLYER10 don ragin 10%\").",
            "Yawancin kafofin sada zumunta suna nuna lambobi kyauta ga asusun kasuwanci, kamar reach (yawan waɗanda suka gani) da ziyarar shafi; ku nemi sashen insights ko analytics. Ku rubuta muhimman lambobin a teburin bin diddigi kowane mako.",
            "Sau ɗaya a wata, ku liƙa teburinku (ba tare da sunayen abokan ciniki ba) a mataimakin AI ku tambaya: \"Waɗanne nau'o'in saƙo ne suka kawo rajista mafi yawa? Me ya kamata in ƙara yi?\" Ku tabbatar da shi a teburinku, sannan ku tsara wata mai zuwa."
          ],
          steps: ["Ku zaɓi alamomi: saƙonni, rajista, ambato, amfani da lamba.", "Ku ƙara lamba ta musamman a kan tayi ɗaya.", "Ku rubuta lambobin kowane mako a tebur.", "Ku nemi AI tsari sau ɗaya a wata, ku tabbatar da shi."],
          words: [["Reach", "yawan mutanen da suka ga saƙo."], ["Insights", "lambobin da kafa ke nunawa game da yadda saƙonninku suka yi."], ["Lambar tayi (promo code)", "kalmar da abokan ciniki ke faɗa ko rubutawa don samun tayi, wadda ke taimaka muku bin diddigi."]],
          slides: [
            { title: "Abokan ciniki sun fi likes", bullets: ["Saƙonni, kira da rajista", "Mutanen da suka ambaci wani saƙo", "Lambobi na musamman kamar FLYER10"] },
            { title: "Lambobi kyauta", bullets: ["Asusun kasuwanci suna nuna insights", "Reach da ziyarar shafi", "Ku rubuta su a tebur kowane mako"] },
            { title: "Bitar wata-wata da AI", bullets: ["Ku liƙa teburin, babu sunaye", "Ku tambayi abin da ya kawo rajista mafi yawa", "Ku tabbatar, sannan ku tsara wata mai zuwa"] }
          ],
          tryIt: "Aikin ƙarshe: ku kammala tallar watanku: babban saƙo, jadawali na mako huɗu, cikakkun bayanan hoto huɗu, takardar talla ɗaya, da teburin bin diddigi mai lambar tayi a kan tayi ɗaya. Ku duba kowace magana da kowane hoto.",
          youCanNow: "tsarawa, yi da auna tallar wata ɗaya ta gaskiya don sana'arku.",
          quickCheck: [
            { objective: "O6", q: "Mene ne ma'anar reach?", options: ["Mutane nawa suka sayi wani abu", "Mutane nawa suka ga saƙo", "Nisan da abokan ciniki ke tafiya", "Saƙonni nawa kuka yi"], answer: 1, why: "Reach shi ne yawan mutanen da suka ga saƙo." },
            { objective: "O6", q: "Kuna son sanin ko takardar tallarku ta kawo abokan ciniki. Me za ku yi?", options: ["Ku yi hasashe daga yadda shagon ya cika", "Ku nemi AI ya yi hasashe", "Ku ƙirga likes ɗinku", "Ku saka lambar tayi ta musamman a takardar ku bi diddiginta"], answer: 3, why: "Lamba ta musamman tana nuna wace talla ce ta kawo kowane abokin ciniki." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Tsari, gaskiya da sakamako",
        questions: [
          { objective: "O4", q: "Mene ne jadawalin saƙonni?", options: ["Tsarin abin da kuke sakawa da lokacin da kuke saka shi", "Jadawalin haraji", "Jadawalin ma'aikata", "Agogon bango"], answer: 0, why: "Yana tsara saƙonninku." },
          { objective: "O4", q: "Jadawalin AI ya lissafa bikin unguwa a wata rana. Me za ku yi?", options: ["Ku goge jadawalin", "Ku amince da shi", "Ku saka saƙo game da shi ba tare da dubawa ba", "Ku duba ranar da kanku"], answer: 3, why: "AI yana iya kuskure a ranaku da taruka." },
          { objective: "O5", q: "Wace magana ce ke buƙatar hujja?", options: ["\"Ku zo ku gaishe mu\"", "\"Share-sharenmu yana kashe kashi 99% na ƙwayoyin cuta\"", "\"Muna son unguwarmu\"", "\"A buɗe ranar Asabar\""], answer: 1, why: "Takamaiman maganganun gaskiya suna buƙatar hujja." },
          { objective: "O6", q: "Wace ce alama mafi kyau cewa saƙo ya yi aiki?", options: ["Sabbin rajista daga mutanen da suka ambace shi", "Ƙarin like ɗaya", "Launi mai kyau", "Bayanin hoto mai tsawo"], answer: 0, why: "Abokan ciniki sun fi likes muhimmanci." },
          { objective: "O6", q: "Me yasa za ku ƙara lamba ta musamman kamar FLYER10?", options: ["Doka ce ta tilasta", "Don ruɗa abokan ciniki", "Don bin diddigin wace talla ce ta kawo abokan ciniki", "Don ɓoye farashin"], answer: 2, why: "Lambobi suna nuna wace talla ce ta yi aiki." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI a Tallata Ƙaramar Sana'a",
    questions: [
      { objective: "O1", q: "Tsarin babban saƙo shi ne: Muna taimaka wa [su waye] su samu [me] ta hanyar...", options: ["Kalmar sirrinmu", "Abin da ya bambanta mu", "Rangwame koyaushe", "Sunan mai gasa da mu"], answer: 1, why: "Abin da ya bambanta ku ne ke cike shi." },
      { objective: "O1", q: "Babban saƙonku ya kamata ya zama:", options: ["Sirri", "Babba yadda ya kamata", "Kwafi daga mai gasa da ku", "Gaskiya kuma ya yi kama da ku"], answer: 3, why: "Abokan ciniki suna amincewa da saƙonni na gaskiya." },
      { objective: "O1", q: "A ina ya kamata babban saƙonku ya bayyana?", options: ["Babu inda", "A kanku kawai", "A takardun haraji kawai", "A saƙonninku, takardun talla da allunan suna"], answer: 3, why: "Maimaita shi yana sa a gane ku." },
      { objective: "O2", q: "Wanne ne saƙo mai kyau na ƙaramar sana'a?", options: ["Hoton bakin teku daga intanet (stock photo)", "Aski kafin da bayan, da izini", "Sharhin bogi", "Hoton mai gasa da ku"], answer: 1, why: "Aiki na gaske yana gina amincewa." },
      { objective: "O2", q: "Bayan AI ya rubuta bayanan hoto ya kamata ku:", options: ["Ƙara manyan maganganu", "Saka su ba tare da canji ba", "Ƙara ainihin bayanai ku cire duk abin bogi", "Goge shafinku"], answer: 2, why: "Gyara yana mayar da su na gaske kuma daidai." },
      { objective: "O2", q: "Mene ne bayanin hoto (caption)?", options: ["Rubutun da ke tare da hoto ko bidiyo a kafofin sada zumunta", "Rasidi", "Alamar farashi", "Tambari (logo)"], answer: 0, why: "Bayanan hoto suna bayyana saƙonni." },
      { objective: "O3", q: "Waɗanne kayan kyauta ne za su iya yin takardar talla?", options: ["Injin karɓar kuɗi", "Na'urar lissafi", "Canva ko Adobe Express", "Cajar waya"], answer: 2, why: "Kayan zane ne masu samfura (templates)." },
      { objective: "O3", q: "Kanun rubutu na takardar talla ya kamata ya zama:", options: ["Babba kuma game da tayin", "Ƙarami sosai", "Babu shi", "Kalmar sirrinku"], answer: 0, why: "Kanun rubutu yana jan hankali." },
      { objective: "O3", q: "Wane hoto ne abokan ciniki suka fi amincewa da shi?", options: ["Hotunan AI na abubuwan da ba ku sayarwa", "Hotunanku na gaske", "Hotunan bazuwar daga intanet", "Hotunan masu gasa da ku"], answer: 1, why: "Hotuna na gaske suna gina amincewa." },
      { objective: "O4", q: "Saƙonni nawa a mako ya kamata ku tsara?", options: ["Yawan da AI ya ba da shawara", "Hamsin", "Babu ko ɗaya", "Yawan da za ku iya ci gaba da yi da gaske"], answer: 3, why: "Yin kaɗan akai-akai ya fi yin yawa har ku gaji ku daina." },
      { objective: "O4", q: "Wanne ne ginshiƙin jadawalin saƙonni?", options: ["Nau'in saƙo", "Lambar katin abokin ciniki", "Kalmar sirri", "PIN na banki"], answer: 0, why: "Nau'in saƙo yana taimaka muku haɗa saƙonni iri-iri." },
      { objective: "O4", q: "Haɗa nau'o'in saƙo yana nufin:", options: ["Sake saka na wasu kawai", "Rangwame kawai", "Hotunan kai (selfie) kawai", "Tayi, shawarwari, ma'aikata da saƙonnin al'umma"], answer: 3, why: "Bambanci yana sa mabiya su ci gaba da sha'awa." },
      { objective: "O5", q: "A cewar FTC, talla dole ta zama:", options: ["Doguwa", "Mai ban dariya", "Ta gaskiya kuma ba mai ruɗarwa ba", "Mai launi"], answer: 2, why: "Wannan ita ce babbar dokar FTC." },
      { objective: "O5", q: "AI ya ƙara \"wanda ya ci kyauta\" amma ba ku da wata kyauta. Za ku:", options: ["Bar shi", "Cire shi", "Ƙirƙiri wata kyauta", "Ƙara \"tabbatacce\""], answer: 1, why: "Maganganun da ba za a iya tabbatarwa ba suna ruɗi mutane." },
      { objective: "O5", q: "Sharhin bogi da AI ya rubuta:", options: ["Dole ne", "Ba laifi idan gajeru ne", "Ba laifi a ƙarshen mako", "An hana su a dokar FTC ta sharhi"], answer: 3, why: "Dokar ta haɗa da na bogi da AI ya yi." },
      { objective: "O5", q: "Imel ɗin talla bisa CAN-SPAM dole ya ƙunshi:", options: ["Mai aikawa na bogi", "Lambar katin abokin ciniki", "Adireshin gidan wasiƙarku da hanyar daina karɓa (unsubscribe)", "Babu take"], answer: 2, why: "Duka biyun dole ne." },
      { objective: "O6", q: "Reach yana nufin:", options: ["Mutane nawa suka ga saƙo", "Mutane nawa suka saya", "Ma'aikata nawa", "Ƙarfin Wi-Fi ɗinku"], answer: 0, why: "Reach yana ƙirga masu gani." },
      { objective: "O6", q: "A ina za ku sami lambobin saƙonni kyauta a asusun kasuwanci?", options: ["Injin buga rasidi", "Sashen insights ko analytics", "Bankinku", "Babu inda"], answer: 1, why: "Kafofi suna nuna insights ga asusun kasuwanci." },
      { objective: "O6", q: "Kafin ku liƙa lambobin bin diddigi a AI, ku cire:", options: ["Ranaku", "Sunayen abokan ciniki", "Nau'o'in saƙo", "Jimilla"], answer: 1, why: "Sunayen abokan ciniki sirri ne." },
      { objective: "O6", q: "Bayan AI ya ce saƙonnin shawara suna kawo rajista mafi yawa, za ku:", options: ["Tabbatar da shi a teburinku, sannan ku tsara ƙari", "Daina duk saƙonnin shawara", "Ƙyale shi", "Goge asusunku"], answer: 0, why: "Ku tabbatar, sannan ku yi aiki." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      1,
      4,
      5,
      7,
      8,
      9,
      12,
      13,
      16
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Babban saƙo",
        objective: "O1",
        notYet: "Ba shi da sarari, ko yana faɗin abin da ba gaskiya ba.",
        meets: "Jimla ɗaya ko biyu na gaskiya: su waye kuke yi wa hidima, abin da kuke yi, me ya bambanta ku.",
        exceeds: "Yana bayyana a saƙonni da takardar talla."
      },
      {
        name: "Jadawalin saƙonni",
        objective: "O4",
        notYet: "Saƙonni ƙasa da takwas, ko ba a duba ranaku ba.",
        meets: "Mako huɗu da aƙalla saƙonni takwas, an duba ranaku.",
        exceeds: "Yana haɗa tayi, shawarwari, ma'aikata da saƙonnin al'umma."
      },
      {
        name: "Bayanan hoto (captions)",
        objective: "O2",
        notYet: "Ƙasa da huɗu, ko suna da bayanan da ba gaskiya ba.",
        meets: "Cikakkun bayanan hoto huɗu da ainihin bayani a kowanne.",
        exceeds: "Kowanne yana da kiran aiki mai sarari kuma ya yi kama da mai sana'ar."
      },
      {
        name: "Takardar talla",
        objective: "O3",
        notYet: "Babu kanun rubutu, bayanai ko kiran aiki.",
        meets: "Kanun rubutu, hoto ɗaya na gaske, bayanai uku da kiran aiki, duk an duba su.",
        exceeds: "Tana da lambar tayi don bin diddigi."
      },
      {
        name: "Maganganu da hotuna na gaskiya",
        objective: "O5",
        notYet: "Wata magana ba za a iya tabbatar da ita ba, ko wani hoto ba naku ba ne.",
        meets: "Ana iya tabbatar da kowace magana, kuma kowane hoto naku ne ko an yi amfani da shi da izini.",
        exceeds: "Mai sana'ar zai iya faɗin yadda ake tabbatar da kowace magana."
      },
      {
        name: "Teburin bin diddigi",
        objective: "O6",
        notYet: "Babu hanyar sanin waɗanne saƙonni suka yi aiki.",
        meets: "Tebur don rubuta sakamako, da lambar tayi a kan tayi ɗaya.",
        exceeds: "Yana amfani da lambobin insights kyauta kuma yana shirin bitar sakamako a ƙarshen wata."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu sana'a da suka saka saƙonni bisa jadawalinsu har tsawon wata ɗaya (binciken biyo baya na kwanaki 30)",
      "Masu sana'a da za su iya faɗin wane saƙo ko takardar talla ce ta kawo sabbin abokan ciniki, daga teburin bin diddiginsu",
      "Masu sana'a da suka ce rajista ko tallace-tallace sun ƙaru bayan watan"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Wayar zamani mai kyamara da intanet; kwamfuta tana taimakawa wajen takardar talla da tebur",
      "Mataimakin AI kyauta da kayan zane kyauta kamar Canva ko Adobe Express",
      "Hotuna na gaske na sana'arku, kayanku ko aikinku",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku nemi masu sana'a su kawo 'yan hotuna na gaske da tayi ɗaya ko taro ɗaya mai zuwa zuwa zaman.",
      "Ku tunatar da masu sana'a su nemi izini kafin su saka hoton kowane abokin ciniki.",
      "Ku sa masu sana'a su ja layi a ƙarƙashin kowace magana a bayanan hotonsu da takardar tallarsu tare, sannan su faɗi yadda za su tabbatar da kowacce.",
      "Sunayen abokan ciniki ba sa shiga kayan AI lokacin liƙa lambobin bin diddigi.",
      "Ku ba da maki ga tallar watan da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
