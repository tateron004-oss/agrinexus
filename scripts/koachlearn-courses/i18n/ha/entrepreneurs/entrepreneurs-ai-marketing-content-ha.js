"use strict";

// Koach Learn course, Hausa (ha) translation of entrepreneurs/entrepreneurs-ai-marketing-content.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "entrepreneurs-ai-marketing-content-ha",
  lang: "ha",
  translationOf: "entrepreneurs-ai-marketing-content",
  category: "Entrepreneurs",
  name: "Tallace-tallace da Ƙirƙirar Abubuwan Bugawa da AI",
  skills: "Bayanin abokin cinikinku na musamman, Rubuta tayi a sarari, Tsara abubuwan bugawa na wata ɗaya, Yin rubuce-rubuce da hotuna da AI, Rubuta imel na talla da ke bin ƙa'idoji",
  outcome: "bayyana abokin cinikinku na musamman, rubuta tayi a sarari, da amfani da AI don tsarawa da ƙirƙirar rubuce-rubucen kafofin sada zumunta na wata ɗaya da imel ɗaya na talla, masu gaskiya kuma masu bin ƙa'idojin talla da imel na Amurka.",
  about: [
    "Wannan kwas ɗin na masu kasuwanci ne da suka san ya kamata su yi talla, amma ba su da lokaci, ko kuɗin ɗaukar kamfanin talla, ko kuma tunani. AI zai iya taimakawa a duka ukun idan kun ba shi umarni daidai.",
    "Za ku bayyana abokin cinikin da kuke so, ku rubuta tayi da ya dace da shi, ku tsara abubuwan bugawa na wata ɗaya, ku yi rubuce-rubuce da hotuna da kayan aiki kyauta kamar ChatGPT, Copilot, Gemini da Canva, sannan ku rubuta imel na talla. Za ku kuma koyi ƙa'idojin Amurka na asali: dole talla ta zama gaskiya, dole a bayyana tallan da aka biya, an hana sharhin ƙarya (fake reviews), kuma dole imel na talla ya bi dokar CAN-SPAM.",
    "Kowane darasi yana ɗaukar kusan minti biyar, kuma yana ƙarewa da aiki don kasuwancinku. Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe. Wannan kwas ɗin yana bayanin ƙa'idoji da kalmomi masu sauƙi; ba shawarar lauya ba ce."
  ],
  finalTask: "Ku ƙirƙiri kunshin talla na wata ɗaya don kasuwancinku: bayanin abokin ciniki na musamman a sakin layi ɗaya, tayi a jimla ɗaya, jadawalin abubuwan bugawa mai rubuce-rubuce 12, rubuce-rubuce uku da aka gama tare da hotuna, da imel ɗaya na talla mai take (subject) na gaskiya, adireshin wurin kasuwancinku na zahiri, da layin daina karɓa (unsubscribe) da ke aiki.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Masu ƙananan kasuwanci a Amurka da suka san ya kamata su yi talla amma ba su da lokaci sosai, ba su da kuɗin kamfanin talla, kuma ba su da tunani da yawa, kamar masu gidan burodi, masu share-share, masu gyaran gashi, masu sana'o'in hannu da masu sayarwa ta intanet.",
    startingPoint: "Suna yin rubutu a kafofin sada zumunta lokaci-lokaci, kuma wataƙila suna da jerin imel na abokan ciniki. Kaɗan ne ke da rubutaccen bayanin abokin ciniki, tayi ko tsarin abubuwan bugawa, kuma da yawa ba su san ƙa'idojin asali na FTC da CAN-SPAM ba.",
    gap: "Rubuce-rubucen da ba a tsara ba suna kaiwa ga mutanen da ba su dace ba, kuma AI yana iya rubuta iƙirari na ƙarya, sakamakon da ke kama da na bogi, ko imel da ke karya dokokin Amurka cikin sauƙi. Masu kasuwanci suna buƙatar nufar talla ga ainihin abokin ciniki, tsara abubuwan bugawa na gaskiya na wata ɗaya, da aika imel da ke bin ƙa'idoji, don talla ta kawo kasuwanci ba tare da matsalar doka ko ta amana ba.",
    constraints: [
      "Kalmomi masu sauƙi; ana bayanin ƙa'idoji a sauƙaƙe, ba a matsayin shawarar lauya ba",
      "Na'urori: waya ko kwamfuta mai mataimakin AI kyauta da Canva",
      "Lokaci: kusan minti biyar a kowane darasi, da lokacin yin rubuce-rubuce don kasuwancin mai shi",
      "Dole talla ta zama gaskiya, a bayyana tallan da aka biya, an hana sharhin ƙarya, kuma dole imel ya bi CAN-SPAM",
      "Ana amfani da labarai da hotunan abokan ciniki ne kawai da izininsu"
    ],
    prerequisites: "\"Gabatarwa ga AI don 'Yan Kasuwa\". \"Kayan AI da Kowane Ɗan Kasuwa Ya Kamata Ya Sani\" yana taimakawa da Canva."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Ta amfani da AI da aƙalla hira ɗaya ta gaske da abokin ciniki ko bayanan tallace-tallace", action: "rubuta bayanin abokin cinikinku na musamman a sakin layi ɗaya", standard: "an duba kowane hasashe da ainihin mutane" },
    { id: "O2", condition: "Idan kuna da bayanin abokin cinikinku", action: "rubuta tayi a jimla ɗaya da ke faɗin wa ake yi wa, me za su samu, da dalilin da yasa yake da muhimmanci", standard: "kowane iƙirari gaskiya ne kuma ana iya tabbatar da shi" },
    { id: "O3", condition: "Idan kuna da tayinku", action: "ƙirƙirar jadawalin abubuwan bugawa mai rubuce-rubuce 12 na wata ɗaya da AI", standard: "da nau'o'in rubutu daban-daban a kafa ɗaya ko biyu da abokan cinikinku ke amfani da su, an ajiye shi da ranaku" },
    { id: "O4", condition: "Idan kuna da tunani uku daga jadawalin", action: "yin rubuce-rubuce da aka gama da kalmomin AI da kuka gyara da hotunan Canva", standard: "ana amfani da hotuna na gaske inda zai yiwu, kuma ba a taɓa ƙirƙirar sakamakon ƙarya ba" },
    { id: "O5", condition: "Idan kuna neman sharhi ko kuna aiki da masu talla da ake biya", action: "rubuta neman sharhi da bayanan bayyanawa da ke bin ƙa'idojin FTC", standard: "ana tambayar dukkan abokan ciniki, ba a ba da lada don kyakkyawan maki, kuma ana bayyana duk wata alaƙa ta biya" },
    { id: "O6", condition: "Ta amfani da AI don rubuta daftarin imel na talla", action: "duba imel ɗin da ƙa'idojin asali na CAN-SPAM", standard: "da take na gaskiya, adireshinku na zahiri, da layin daina karɓa da ke aiki" }
  ],
  chapters: [
    {
      name: "Babi na 1: Ku san wanda kuke magana da shi",
      lessons: [
        {
          objectives: ["O1"],
          title: "Bayanin abokin cinikinku na musamman",
          minutes: 5,
          goal: "Rubuta bayanin abokin cinikin da kuka fi so a sakin layi ɗaya.",
          text: [
            "Yin talla ga \"kowa\" ba ya kaiwa ga kowa. Abokin cinikinku na musamman shi ne mutumin da yake buƙatar abin da kuke sayarwa, zai iya biya, kuma yana da sauƙin kaiwa gare shi. Ga gidan burodi na gida, abokin ciniki na musamman zai iya zama \"iyaye masu yawan aiki da ke cikin mil 10, waɗanda ke odar keken ranar haihuwa sau biyu zuwa huɗu a shekara.\"",
            "AI zai iya taimaka muku ku yi tunani a kai. Ku faɗa masa abin da kuke sayarwa da waɗanda ke saya yanzu, sannan ku tambaya: \"Ka taimake ni in bayyana abokin cinikina na musamman: halin da yake ciki, babbar matsalarsa, abin da yake damunsa kafin ya saya, da inda yake ɓata lokaci a intanet.\"",
            "AI yana hasashe ne daga yanayi na gama-gari. Ku duba hasashensa da ainihin abokan ciniki: ku duba waɗanda suka saya daga gare ku, ku karanta saƙonninsu, kuma ku tambayi abokan ciniki uku dalilin da yasa suka zaɓe ku."
          ],
          steps: ["Ku rubuta abin da kuke sayarwa da waɗanda suka saya daga gare ku zuwa yanzu.", "Ku nemi AI ya taimaka wajen bayyana halin abokin ciniki na musamman, matsalarsa, damuwarsa da inda yake ɓata lokaci.", "Ku duba hasashen da ainihin abokan ciniki uku ko bayanan tallace-tallacenku.", "Ku rubuta bayani a sakin layi ɗaya."],
          words: [["Abokin ciniki na musamman", "mutumin da ya fi buƙatar abin da kuke sayarwa, zai iya biya, kuma yana da sauƙin kaiwa gare shi."], ["Bayani (profile)", "gajeren bayanin wani irin abokin ciniki."]],
          slides: [
            { title: "\"Kowa\" ba abokin ciniki ba ne", bullets: ["Yana buƙatar abin da kuke sayarwa", "Zai iya biya", "Yana da sauƙin kaiwa gare shi"] },
            { title: "Ku nemi AI ya taimaka wajen bayani", bullets: ["Halin da yake ciki da babbar matsalarsa", "Abin da ke damunsa kafin ya saya", "Inda yake ɓata lokaci a intanet"] },
            { title: "Ku duba da ainihin mutane", bullets: ["Ku duba waɗanda suka riga suka saya", "Ku tambayi abokan ciniki uku dalilin zaɓenku", "Sannan ku rubuta bayaninku"] }
          ],
          tryIt: "Ku yi amfani da mataimakin AI don rubuta daftarin bayanin abokin cinikinku na musamman, sannan ku duba shi da aƙalla hira ɗaya ta gaske da abokin ciniki ko bayanan tallace-tallacenku. Ku ajiye sakin layin ƙarshe.",
          youCanNow: "bayyana abokin cinikin da tallarku take nufa, bayan an duba shi da ainihin mutane.",
          quickCheck: [
            { objective: "O1", q: "Mene ne bayanin abokin ciniki na musamman?", options: ["Gajeren bayanin abokin cinikin da kuka fi son kaiwa gare shi", "Jerin dukkan mutanen garinku", "Jerin abokan cinikin abokin hamayyarku", "Bayanan tuntuɓa na sirri na wani abokin ciniki"], answer: 0, why: "Bayanin yana nuna mutumin da tallarku take nufa." },
            { objective: "O1", q: "AI ya ce abokan cinikinku galibi suna amfani da manhaja ɗaya, amma bayanan tallace-tallacenku sun nuna akasin haka. Me za ku yi?", options: ["Ku amince da AI", "Ku bi abin da ainihin bayananku suka nuna", "Ku yi amfani da kowace manhaja", "Ku daina talla"], answer: 1, why: "Ainihin abokan ciniki da bayanai sun fi hasashen AI." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Rubuta tayi a sarari kuma na gaskiya",
          minutes: 5,
          goal: "Rubuta tayi a jimla ɗaya da ke faɗin wa ake yi wa, me za su samu da dalilin muhimmancinsa.",
          text: [
            "Tayi yana amsa tambayoyi uku da sauri: Wa ake yi wa? Me za su samu? Me yasa zai dame su? Misali: \"Iyaye masu yawan aiki a Decatur: keken ranar haihuwa na musamman da ake kawowa har ƙofarku, don bikin ya rage muku abu ɗaya na damuwa.\"",
            "Ku ba AI bayanin abokin cinikinku ku tambaya: \"Ka rubuta tayi biyar masu jimla ɗaya don wannan abokin ciniki. Kalmomi masu sauƙi, ba tare da zuzzurfan yabo ba.\" Ku zaɓi mafi kyau ku gyara shi da salon maganarku.",
            "Ku riƙe gaskiya. A Amurka, FTC (hukumar kasuwanci ta tarayya) ta ce dole talla ta zama gaskiya, ba ta ruɗi, kuma tana da hujja. Kada ku ce \"mafi kyau a gari\", \"sakamako tabbatacce\" ko \"mai amfani da AI\" sai dai idan gaskiya ne kuma kuna iya tabbatar da shi."
          ],
          steps: ["Ku liƙa bayanin abokin cinikinku a mataimakin AI.", "Ku nemi tayi biyar masu jimla ɗaya da kalmomi masu sauƙi.", "Ku zaɓi ɗaya ku gyara shi don ya yi kama da ku.", "Ku cire duk wani iƙirari da ba za ku iya tabbatarwa ba."],
          words: [["Tayi (offer)", "abin da kuke sayarwa, wa ake yi wa, da dalilin muhimmancinsa, a faɗe shi a sauƙaƙe."], ["Iƙirari (claim)", "abin da tallarku ta ce gaskiya ne."]],
          slides: [
            { title: "Tayi yana amsa tambayoyi uku", bullets: ["Wa ake yi wa?", "Me za su samu?", "Me yasa zai dame su?"] },
            { title: "Ku bar AI ya ba ku zaɓuɓɓuka", bullets: ["Ku liƙa bayanin abokin cinikinku", "Ku nemi tayi biyar masu jimla ɗaya", "Ku zaɓi ɗaya ku gyara shi da salonku"] },
            { title: "Ku riƙe gaskiya", bullets: ["FTC: dole talla ta zama gaskiya, ba ta ruɗi", "Iƙirari yana buƙatar hujja", "Babu \"tabbatacce\" ko \"mafi kyau\" da ba za ku iya tabbatarwa ba"] }
          ],
          sources: [{ name: "FTC: Advertising and Marketing Basics (asalin ƙa'idojin talla)", url: "https://www.ftc.gov/business-guidance/advertising-marketing/advertising-marketing-basics" }],
          tryIt: "Ku nemi AI ya ba ku tayi biyar bisa bayanin abokin cinikinku, ku zaɓi ɗaya, ku gyara shi, kuma ku duba cewa kowane iƙirari a cikinsa gaskiya ne kuma ana iya tabbatar da shi.",
          youCanNow: "rubuta gajeren tayi na gaskiya da ya dace da abokin cinikinku na musamman.",
          quickCheck: [
            { objective: "O2", q: "Me dole kowane iƙirari a tayinku ya zama?", options: ["Babba yadda zai yiwu", "An kwafo shi daga abokin hamayya", "Gaskiya kuma ana iya tabbatar da shi", "AI kaɗai ya rubuta shi"], answer: 2, why: "Ƙa'idojin FTC suna buƙatar iƙirari na gaskiya mai hujja." },
            { objective: "O2", q: "AI ya rubuta \"hidima mafi sauri a gari\" amma ba ku da hujja. Me za ku yi?", options: ["Ku bar shi", "Ku ƙara alamar mamaki", "Ku sa shi a ƙaramin rubutu", "Ku cire shi ko ku maye gurbinsa da abin da za ku iya tabbatarwa"], answer: 3, why: "Iƙirarin da ba za ku iya tabbatarwa ba bai kamata ya shiga tayinku ba." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Tsara abubuwan bugawa na wata ɗaya",
          minutes: 5,
          goal: "Yi amfani da AI don gina jadawalin abubuwan bugawa mai rubuce-rubuce 12 na wata ɗaya.",
          text: [
            "Yin rubutu sau uku a mako na tsawon wata ɗaya yana nufin rubuce-rubuce 12. Haɗin abubuwa masu sauƙi yana sa abin ya yi daɗi: koyar da wani abu mai amfani, nuna aikinku ko ma'aikatanku, raba labarin wani abokin ciniki (da izininsa), da gabatar da tayinku.",
            "Ku tambayi AI: \"Ka yi jadawalin abubuwan bugawa mai rubuce-rubuce 12 don [kasuwanci] ga [abokin ciniki]. Haɗi: shawarwari masu amfani 4, abubuwan bayan fage 3, labaran abokan ciniki 2, rubuce-rubucen tayi 3. Ka ba kowanne rana, tunani a layi ɗaya da kafar da za a saka shi.\"",
            "Ku zaɓi kafofin da abokin cinikinku ya riga yake ɓata lokaci a kai (daga bayaninku). Ya fi kyau ku yi rubutu mai kyau a kafa ɗaya ko biyu fiye da rubutu marar kyau a kafofi biyar."
          ],
          steps: ["Ku zaɓi kafa ɗaya ko biyu da abokin cinikinku ke ɓata lokaci a kai.", "Ku nemi AI jadawali mai rubuce-rubuce 12 da nau'o'in rubutu daban-daban.", "Ku gyara tunanin da bai dace da kasuwancinku ba.", "Ku sa jadawalin a takardar lissafi (spreadsheet) ko takarda tare da ranaku."],
          words: [["Jadawalin abubuwan bugawa (content calendar)", "tsarin da ke lissafa abin da za ku buga da lokacin da za ku buga shi."], ["Kafa (platform)", "shafi ko manhajar sada zumunta, kamar Facebook, Instagram, TikTok ko LinkedIn."]],
          slides: [
            { title: "Rubuce-rubuce 12 = 3 a mako na wata ɗaya", bullets: ["Shawarwari masu amfani", "Abubuwan bayan fage", "Labaran abokan ciniki (da izini)", "Tayinku"] },
            { title: "Ku nemi AI ya yi jadawalin", bullets: ["Kasuwanci + abokin ciniki + haɗin nau'o'in rubutu", "Rana, tunani a layi ɗaya da kafa ga kowanne"] },
            { title: "Ku zaɓi kafofinku", bullets: ["Inda abokin cinikinku ya riga yake", "Ɗaya ko biyu da aka yi da kyau sun fi biyar marasa kyau"] }
          ],
          tryIt: "Ku sa AI ya gina jadawalinku mai rubuce-rubuce 12, ku gyara shi don ya dace da kasuwancinku, kuma ku ajiye shi tare da ranaku a takardar lissafi ko takarda.",
          youCanNow: "tsara abubuwan bugawa iri-iri na wata ɗaya don kafofin da abokan cinikinku ke amfani da su.",
          quickCheck: [
            { objective: "O3", q: "Me kyakkyawan haɗin abubuwan bugawa ya ƙunsa?", options: ["Shawarwari, abubuwan bayan fage, labaran abokan ciniki da tayi", "Tayin sayarwa kawai", "Barkwanci kawai", "Rubutu iri ɗaya kowace rana"], answer: 0, why: "Haɗin abubuwa yana sa mutane su ci gaba da sha'awa kuma yana gina amana." },
            { objective: "O3", q: "Abokan cinikinku galibi suna kan kafa ɗaya. A ina za ku yi rubutu?", options: ["A kowace kafa a lokaci ɗaya", "Ku fara inda abokan cinikinku suka riga suke", "A sabuwar kafa kawai", "Babu inda, har sai kun sami ƙarin lokaci"], answer: 1, why: "Kafa ɗaya ko biyu inda abokan ciniki suke ya isa a fara." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Ku san wanda kuke magana da shi",
        questions: [
          { objective: "O1", q: "Wane ne mafi kyawun bayanin abokin ciniki na musamman ga gidan burodi na gida?", options: ["Duk wanda ke cin abinci", "Iyaye masu yawan aiki da ke cikin mil 10 da ke odar keken ranar haihuwa sau kaɗan a shekara", "Mutane a intanet", "Sauran gidajen burodi"], answer: 1, why: "Yana ambaton takamaiman mutum, buƙata da yadda za a kai gare shi." },
          { objective: "O1", q: "AI ya yi hasashen abin da ke damun abokan cinikinku. Me ya kamata ku yi?", options: ["Ku ƙyale abokan cinikinku", "Ku amince da shi gaba ɗaya", "Ku buga shi a matsayin gaskiya", "Ku duba shi da ainihin abokan ciniki ko bayanan tallace-tallace"], answer: 3, why: "AI yana hasashe daga yanayi na gama-gari; ainihin abokan ciniki ne ke tabbatarwa." },
          { objective: "O2", q: "Tayi ya kamata ya amsa waɗanne tambayoyi uku?", options: ["Wa ake yi wa, me za su samu, me yasa zai dame su", "Shekarunku nawa, a ina kuke zama, mece ce kalmar sirrinku", "Yaya yanayi yake, ƙarfe nawa, wace rana", "Su wane ne abokan hamayyarku, nawa suke caji, a ina suke"], answer: 0, why: "Waɗannan uku ne ke sa tayi ya yi sarari." },
          { objective: "O2", q: "AI ya rubuta \"Sakamako tabbatacce ko a mayar muku da kuɗinku\" a tayinku, amma ba kwa mayar da kuɗi. Me za ku yi?", options: ["Ku ƙara girmansa", "Ku bar shi domin yana da daɗin ji", "Ku cire shi", "Ku ƙara \"mai amfani da AI\" ma"], answer: 2, why: "Dole talla ta zama gaskiya; ku cire iƙirarin da ba za ku iya cikawa ba." },
          { objective: "O3", q: "Kafofi nawa ya kamata ƙaramin kasuwanci ya fara da su?", options: ["Babu", "Duk kafar da ke akwai", "Ɗaya ko biyu inda abokan cinikinsa suka riga suke", "Waɗanda abokan hamayyarsa ke gujewa kawai"], answer: 2, why: "Yin ɗaya ko biyu da kyau ya fi rarraba ƙoƙari ko'ina." }
        ]
      }
    },
    {
      name: "Babi na 2: Ƙirƙira, bugawa da bin ƙa'idoji",
      lessons: [
        {
          objectives: ["O4"],
          title: "Yin rubuce-rubuce da hotuna da AI",
          minutes: 5,
          goal: "Mayar da tunanin jadawali zuwa rubuce-rubuce da aka gama, masu kalmomi da hotuna.",
          text: [
            "Ga kowane rubutu, ku nemi mataimakin hira ya rubuta kalmomin rakiya (caption): \"Ka rubuta caption na Instagram don wannan tunani: [tunani]. Don [abokin ciniki]. Mai fara'a, ƙasa da kalmomi 80, tambaya ɗaya don gayyatar sharhi, da kiran ɗaukar mataki.\" Ku nemi iri biyu ko uku ku zaɓi ɗaya.",
            "Ku yi hoton a Canva daga samfuri (template), da launukan alamar kasuwancinku. Ku yi amfani da hotunanku idan za ku iya; hotunan gaske na aikinku suna gina amana. Idan kun yi amfani da hoton da AI ya ƙirƙira, ku duba shi don kurakurai, kuma kada ku taɓa sa shi ya yi kama da ainihin abokin ciniki ko sakamakon gaske da ba ku bayar ba.",
            "Bisa jagorar Ofishin Haƙƙin Mallaka na Amurka (US Copyright Office), abin da AI kaɗai ya ƙirƙira ba shi da kariyar haƙƙin mallaka, amma zaɓuɓɓukanku na fasaha da gyare-gyarenku za su iya samun kariya. Idan mallakar tambarinku (logo) ko babban zanen alamarku yana da muhimmanci, ku sa mai zane ɗan Adam a ciki kuma ku yi magana da lauya."
          ],
          steps: ["Ku zaɓi rubutu ɗaya daga jadawalinku.", "Ku nemi AI caption iri biyu ko uku ku zaɓi ɗaya.", "Ku yi hoton a Canva daga samfuri, da hotonku idan za ku iya.", "Ku duba rubutun kalmomi, bayanai da hotuna.", "Ku ajiye rubutun a shirye don bugawa."],
          words: [["Caption (kalmomin rakiya)", "rubutun da ke tare da wani rubutu a kafar sada zumunta."], ["Haƙƙin mallaka (copyright)", "haƙƙin doka na sarrafa kwafin wani aikin fasaha."]],
          slides: [
            { title: "Caption da AI", bullets: ["Ku ba da tunanin da abokin ciniki", "Ku nemi gajerun iri 2-3", "Ku saka tambaya da kiran ɗaukar mataki"] },
            { title: "Hoto a Canva", bullets: ["Ku fara daga samfuri", "Launukan alamar kasuwancinku", "Hotunanku na gaske suna gina amana"] },
            { title: "Hotunan AI: ku yi hankali", bullets: ["Ku duba don kurakurai", "Kada ku taɓa ƙirƙirar abokin ciniki ko sakamako na ƙarya"] },
            { title: "Haƙƙin mallaka da AI", bullets: ["Abin da AI kaɗai ya yi ba shi da kariya", "Gyare-gyarenku na fasaha za su iya samun kariya", "Don tambari, ku sa mai zane da lauya"] }
          ],
          sources: [{ name: "US Copyright Office: Copyright and Artificial Intelligence (haƙƙin mallaka da AI)", url: "https://www.copyright.gov/ai/" }, { name: "US Copyright Office: Part 2 Copyrightability report announcement (sanarwar rahoto na 2)", url: "https://www.copyright.gov/newsnet/2025/1060.html" }],
          tryIt: "Ku mayar da tunani uku daga jadawalinku zuwa rubuce-rubuce da aka gama: caption da AI ya taimaka kuma kuka gyara, da hoton Canva mai hotonku inda zai yiwu.",
          youCanNow: "yin rubuce-rubucen kafofin sada zumunta da aka gama da caption da hotuna na AI, ba tare da ƙirƙirar sakamakon ƙarya ba.",
          quickCheck: [
            { objective: "O4", q: "Me ke sa neman caption daga AI ya yi ƙarfi?", options: ["\"Rubuta caption\" kawai", "Kalmar sirrinku", "Tunanin, abokin ciniki, tsawo da kiran ɗaukar mataki", "Caption na abokin hamayya don kwafa"], answer: 2, why: "Takamaiman umarni yana kawo caption da za ku iya amfani da shi." },
            { objective: "O4", q: "AI ya yi hoton kafin-da-bayan na wani kicin da ba ku share ba, kuma ya yi kyau sosai. Me za ku yi?", options: ["Ku buga shi a matsayin aikinku", "Ku buga shi ba tare da caption ba", "Ku ɗan gyara shi ku buga", "Kada ku yi amfani da shi; ku yi amfani da hoton gaske na aikinku"], answer: 3, why: "Kada hotuna su nuna sakamakon da ba ku bayar ba." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Sharhi, shaidu da tallatawa: ƙa'idoji",
          minutes: 5,
          goal: "Yi amfani da sharhi da tallan da aka biya ta hanyar da ke bin ƙa'idojin FTC.",
          text: [
            "Sharhin gaske daga abokan ciniki talla ne mai ƙarfi. Na ƙarya kuma haramun ne. Dokar FTC kan sharhin ƙarya ta hana ƙirƙira, saye ko sayar da sharhi da shaidu na ƙarya, har da sharhin da AI ya ƙirƙira da ke nuna kamar daga mutanen da babu su ne. Ta kuma hana ba da lada don kyakkyawan sharhi kawai.",
            "Kuna IYA tambayar abokan ciniki masu farin ciki da marasa farin ciki duka su bar sharhi na gaskiya, kuma kuna iya raba sharhin gaske da izini. Kada ku yi amfani da AI don rubuta sharhi, kuma kada ku gyara sharhi har ma'anarsa ta canja.",
            "Idan kun biya wani ko kun ba shi kayayyaki kyauta don ya tallata ku, dole a bayyana wannan alaƙa a sarari, kamar \"#ad\" ko \"Sponsored\" a farkon rubutun, kuma a cikin bidiyon da kansa idan bidiyo ne. Ku ne ke da alhakin abin da masu tallata ku suka faɗa a madadinku."
          ],
          steps: ["Ku tambayi dukkan abokan ciniki sharhi na gaskiya, ba masu farin ciki kaɗai ba.", "Ku raba sharhin gaske kawai da izini, ba tare da canja ma'anarsu ba.", "Kada ku taɓa amfani da AI don rubuta sharhi.", "Ku sa duk wanda kuka biya ko kuka ba kyauta ya bayyana shi a sarari, kamar \"#ad\" a farko."],
          words: [["Shaida (testimonial)", "maganar abokin ciniki game da kasuwancinku da ake amfani da ita a talla."], ["Tallatawa (endorsement)", "saƙon da mutane za su ɗauka cewa ra'ayin gaskiya ne na wani, kamar rubutun wani shahararre a intanet (influencer)."], ["Bayyanawa (disclose)", "faɗa wa mutane a sarari."]],
          slides: [
            { title: "An hana sharhin ƙarya", bullets: ["Babu saye, sayarwa ko rubuta sharhin ƙarya", "Har da sharhin ƙarya da AI ya ƙirƙira", "Babu lada don kyakkyawan sharhi kawai"] },
            { title: "Abin da za ku iya yi", bullets: ["Ku tambayi kowane abokin ciniki sharhi na gaskiya", "Ku raba sharhin gaske da izini", "Kada ku canja ma'anar sharhi"] },
            { title: "Tallan da aka biya ko aka ba kyauta", bullets: ["Dole a bayyana shi a sarari", "\"#ad\" ko \"Sponsored\" a farko", "A cikin bidiyon da kansa idan bidiyo ne"] }
          ],
          sources: [{ name: "FTC: Final rule banning fake reviews and testimonials (press release) (dokar hana sharhin ƙarya)", url: "https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials" }, { name: "FTC: Endorsement Guides, What People Are Asking (jagorar tallatawa)", url: "https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking" }],
          tryIt: "Ku yi amfani da AI don rubuta daftarin gajeren saƙo na gaskiya da ke tambayar abokan cinikinku na kwanan nan su bar sharhi (ba masu farin ciki kaɗai ba, kuma babu lada don kyakkyawan maki). Ku gyara shi ku ajiye.",
          youCanNow: "tara da amfani da sharhi da tallan da aka biya ta hanyar gaskiya kuma ta doka.",
          quickCheck: [
            { objective: "O5", q: "Wane neman sharhi ne ke bin ƙa'idojin FTC?", options: ["Tambayar dukkan abokan ciniki na kwanan nan sharhi na gaskiya", "Ba da rangwame kawai don sharhi mai taurari biyar", "Rubuta sharhi da kanku", "Tambayar abokan ciniki masu farin ciki kaɗai"], answer: 0, why: "Tambayar kowa sharhi na gaskiya, ba tare da lada don kyakkyawan maki ba, an yarda da shi." },
            { objective: "O5", q: "Wani aboki yana samun kayayyaki kyauta don ya yi rubutu game da shagonku. Me za ku nemi ya yi?", options: ["Ya ɓoye cewa ya sami wani abu", "Ya bayyana shi a sarari, kamar \"#ad\" a farko", "Ya yi rubutu a cikin sharhi kawai", "Ya yi amfani da sunan ƙarya"], answer: 1, why: "Dole a bayyana alaƙar biya ko kyauta a sarari." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Rubuta imel na talla da ke bin CAN-SPAM",
          minutes: 5,
          goal: "Rubuta imel na talla da AI da ya cika ƙa'idojin asali na CAN-SPAM.",
          text: [
            "Imel yana kaiwa ga mutanen da suka riga suka san ku. Ku tambayi AI: \"Ka rubuta gajeren imel na talla ga tsofaffin abokan cinikin [kasuwanci] game da [tayi]. Mai fara'a, ƙasa da kalmomi 150, kiran ɗaukar mataki ɗaya a sarari, da zaɓuɓɓuka uku na take (subject) na gaskiya.\"",
            "A Amurka, dokar CAN-SPAM ta shafi imel na kasuwanci. Jagorar FTC ta lissafa abubuwan asali: bayanin \"From\" (daga wa) daidai, take da ba na ruɗi ba, bayyana a sarari cewa talla ce, adireshinku na zahiri na gidan waya da ke aiki, da hanya a sarari ta daina karɓa. Dole ku amsa buƙatun daina karɓa cikin kwanakin aiki 10. Hukunci zai iya zama babba a kowane imel, don haka ku duba shafin FTC.",
            "Ku aika imel ga mutanen da suka ba ku adireshinsu kuma suka yarda su ji daga gare ku kawai, kuma ku yi amfani da hidimar imel da ke kula da daina karɓa a madadinku. Sauran ƙasashe suna da nasu ƙa'idoji; ku duba su idan kuna aika imel ga abokan ciniki a ƙasashen waje."
          ],
          steps: ["Ku nemi AI imel ɗin da take uku na gaskiya.", "Ku duba kowane bayani da iƙirari.", "Ku tabbata yana nuna sunan kasuwancinku, adireshinku na zahiri da hanyar haɗi ta daina karɓa.", "Ku aika ga waɗanda suka yarda su ji daga gare ku kawai.", "Ku amsa buƙatun daina karɓa cikin kwanakin aiki 10."],
          words: [["Dokar CAN-SPAM", "dokar Amurka mai ƙa'idoji kan imel na kasuwanci (talla)."], ["Daina karɓa (opt out)", "neman a daina aiko muku da saƙonni; unsubscribe."]],
          slides: [
            { title: "Ku rubuta shi da AI", bullets: ["Gajere, mai fara'a, kiran ɗaukar mataki ɗaya", "Take uku na gaskiya don zaɓa"] },
            { title: "Asalin CAN-SPAM (FTC)", bullets: ["Layin From daidai, take na gaskiya", "Ku bayyana a sarari cewa talla ce", "Adireshinku na zahiri na gidan waya", "Hanya a sarari ta daina karɓa"] },
            { title: "Daina karɓa", bullets: ["Ku amsa cikin kwanakin aiki 10", "Ku yi amfani da hidimar imel da ke kula da unsubscribe"] },
            { title: "Ku aika ga waɗanda suka yarda kawai", bullets: ["Tsofaffin abokan ciniki da waɗanda suka yi rajista", "Sauran ƙasashe suna da nasu ƙa'idoji"] }
          ],
          sources: [{ name: "FTC: CAN-SPAM Act Compliance Guide for Business (jagorar bin dokar CAN-SPAM)", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" }],
          tryIt: "Aikin ƙarshe: ku rubuta imel ɗinku na talla da AI, ku duba shi da ƙa'idojin asali na CAN-SPAM (take na gaskiya, an bayyana cewa talla ce, adireshi, unsubscribe), sannan ku haɗa shi da bayanin abokin cinikinku, tayinku, jadawalinku da rubuce-rubucenku uku a matsayin kunshin tallarku na wata ɗaya.",
          youCanNow: "tsarawa, ƙirƙira da aika talla ta gaskiya da ke bin ƙa'idojin talla da imel na Amurka.",
          quickCheck: [
            { objective: "O6", q: "Me dole imel na talla na CAN-SPAM ya ƙunsa?", options: ["Takardar rangwame (coupon)", "Hoto", "Adireshi na zahiri na gidan waya da ke aiki", "Lambar wayar gidanku"], answer: 2, why: "CAN-SPAM yana buƙatar adireshi na zahiri na gidan waya da ke aiki." },
            { objective: "O6", q: "Kun sayi jerin adireshin imel daga wani baƙo. Me za ku yi?", options: ["Ku aika wa duka imel", "Ku aika wa rabinsu", "Ku saka su a jaridarku ta imel a ɓoye", "Kada ku yi amfani da shi; ku aika ga waɗanda suka yarda kawai"], answer: 3, why: "Ku aika imel na talla ga mutanen da suka ba ku adireshinsu kuma suka yarda." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Ƙirƙira, bugawa da bin ƙa'idoji",
        questions: [
          { objective: "O4", q: "Wane hoto ne ya fi gina amana a rubutu?", options: ["Hoton gaske na aikinku", "Hoton AI na abokin ciniki mai farin ciki na ƙarya", "Hoton abokin hamayya", "Hoton kasuwa (stock) marar haske"], answer: 0, why: "Hotunan gaske na aiki na gaske suna gina amana; abokan ciniki na ƙarya suna ruɗi." },
          { objective: "O4", q: "Bisa Ofishin Haƙƙin Mallaka na Amurka, abin da AI kaɗai ya ƙirƙira:", options: ["Yana samun alamar kasuwanci (trademark) kai tsaye", "Koyaushe naku ne", "Na abokin cinikinku ne", "Ba shi da kariyar haƙƙin mallaka"], answer: 3, why: "Haƙƙin mallaka yana kare aikin ɗan Adam; gyare-gyarenku na fasaha za su iya samun kariya." },
          { objective: "O5", q: "Kuna iya amfani da AI don rubuta sharhin abokan ciniki don kasuwancinku?", options: ["Eh, idan suna kama da na gaske", "A'a, FTC ta hana sharhin ƙarya", "Eh, idan kun buga su a hankali", "A ƙarshen mako kawai"], answer: 1, why: "Dokar FTC ta hana sharhin ƙarya, har da waɗanda AI ya ƙirƙira." },
          { objective: "O5", q: "Kun ba wani shahararre a intanet (influencer) kayayyaki kyauta don ya yi rubutu game da ku. Me dole ya faru?", options: ["Dole a bayyana alaƙar a sarari, kamar \"#ad\" a farko", "Babu komai", "A ɓoye ta a cikin sharhi", "A saka ta a ƙarshen dogon caption"], answer: 0, why: "Dole a bayyana alaƙa ta kayan aiki a sarari kuma a fili." },
          { objective: "O6", q: "Ƙarƙashin CAN-SPAM, da sauri yaya dole ku amsa buƙatar daina karɓa?", options: ["Ba sai an amsa ba", "Cikin shekara ɗaya", "Cikin kwanakin aiki 10", "Sai idan sun nema sau biyu"], answer: 2, why: "Jagorar FTC ta ce dole a amsa daina karɓa cikin kwanakin aiki 10." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Tallace-tallace da Ƙirƙirar Abubuwan Bugawa da AI",
    questions: [
      { objective: "O1", q: "Abokin cinikinku na musamman shi ne wanda:", options: ["Yake zama a ko'ina a duniya", "Yake buƙatar abin da kuke sayarwa, zai iya biya, kuma yana da sauƙin kaiwa gare shi", "Ya riga yana muku aiki", "Abokin hamayyarku ne"], answer: 1, why: "Wannan ne ma'anar da aka yi amfani da ita a kwas ɗin." },
      { objective: "O1", q: "Wace buƙata ga AI ce ke taimakawa wajen bayyana abokin cinikinku na musamman?", options: ["\"Ka nemo adireshin gidajensu.\"", "\"Ka rubuta harajina.\"", "\"Ka ƙirƙiri sharhi.\"", "\"Ka bayyana halin da suke ciki, babbar matsalarsu, damuwarsu da inda suke ɓata lokaci a intanet.\""], answer: 3, why: "Waɗannan tambayoyi suna gina bayani mai amfani." },
      { objective: "O1", q: "Bayan AI ya rubuta daftarin bayanin abokin ciniki, ya kamata ku:", options: ["Sayar da shi", "Buga shi a fili", "Kada ku taɓa canja shi", "Duba shi da ainihin abokan ciniki"], answer: 3, why: "AI yana hasashe; ainihin abokan ciniki ne ke tabbatarwa." },
      { objective: "O2", q: "Wanne ne tayi a sarari?", options: ["\"Muna yin abubuwa.\"", "\"Iyaye masu yawan aiki a Decatur: keken ranar haihuwa na musamman da ake kawowa, don bikin ya rage muku damuwa ɗaya.\"", "\"Mafi kyau har abada, tabbatacce!\"", "\"Ku kira mu.\""], answer: 1, why: "Yana faɗin wa, me da me yasa." },
      { objective: "O2", q: "Ƙarƙashin ƙa'idojin FTC, dole iƙirarin talla ya zama:", options: ["AI ne ya rubuta shi", "Mai ban dariya", "Gaskiya, ba na ruɗi ba, kuma da hujja", "Mai tsawo sosai"], answer: 2, why: "Wannan ne asalin ma'aunin gaskiya a talla." },
      { objective: "O2", q: "Ya kamata ku kira hidimarku \"mai amfani da AI\" idan ba ta amfani da AI?", options: ["A'a, wannan iƙirari ne na ƙarya", "Eh, yana jin na zamani", "A ƙaramin rubutu kawai", "A kafofin sada zumunta kawai"], answer: 0, why: "Iƙirarin ƙarya game da AI talla ce ta yaudara." },
      { objective: "O3", q: "Jadawali mai rubuce-rubuce 12 na wata ɗaya yana nufin kusan:", options: ["Rubuce-rubuce goma sha biyu a rana", "Rubutu ɗaya a wata", "Rubuce-rubuce uku a mako", "Rubutu ɗaya a shekara"], answer: 2, why: "Rubuce-rubuce 12 a cikin makonni huɗu uku ne a mako." },
      { objective: "O3", q: "Kyakkyawan haɗin abubuwan bugawa ya ƙunsa:", options: ["Shawarwari, abubuwan bayan fage, labaran abokan ciniki da tayi", "Rubuce-rubucen sayarwa kawai", "Barkwanci kawai", "Labaran abokan hamayya kawai"], answer: 0, why: "Haɗin abubuwa yana sa mabiya su ci gaba da sha'awa." },
      { objective: "O3", q: "Ya kamata a raba labaran abokan ciniki:", options: ["Ba tare da tambaya ba", "Da izinin abokin cinikin", "Tare da lambar wayarsu", "Sai idan AI ne ya rubuta su"], answer: 1, why: "Izini yana nuna girmama abokan ciniki kuma yana hana matsaloli." },
      { objective: "O4", q: "Kyakkyawar buƙatar caption ta ƙunsa:", options: ["Caption na wani", "Bayanan bankinku", "Kalma ɗaya kawai", "Tunanin, abokin ciniki, tsawo da kiran ɗaukar mataki"], answer: 3, why: "Cikakkun bayanai a sarari suna kawo caption mai amfani." },
      { objective: "O4", q: "Idan kuna amfani da hoton da AI ya ƙirƙira, kada ku:", options: ["Sa shi ya yi kama da sakamakon gaske da ba ku bayar ba", "Duba shi don kurakurai", "Yi amfani da launukan alamarku", "Ƙara tambarinku"], answer: 0, why: "Sakamakon ƙarya yana ruɗar abokan ciniki." },
      { objective: "O4", q: "Wa zai iya taimakawa idan mallakar zanen tambarinku yana da muhimmanci?", options: ["Babu kowa", "Kayan AI na hoto kawai", "Wani mabiyi kawai", "Mai zane ɗan Adam da lauya"], answer: 3, why: "Zanen da AI kaɗai ya yi ba shi da kariyar haƙƙin mallaka." },
      { objective: "O5", q: "Dokar FTC kan sharhin ƙarya ta kuma hana:", options: ["Gode wa abokan ciniki", "Tambayar abokan ciniki sharhi na gaskiya", "Ba da lada don kyakkyawan sharhi kawai", "Amsa sharhi"], answer: 2, why: "An hana ladan da aka ɗaura kan kyakkyawan ra'ayi." },
      { objective: "O5", q: "Wace al'adar sharhi ce aka yarda da ita?", options: ["Sayen sharhi 50 masu taurari biyar", "Tambayar dukkan abokan ciniki sharhi na gaskiya", "Rubuta sharhi da AI", "Gyara mummunan sharhi don ya yi kyau"], answer: 1, why: "Sharhin gaskiya daga ainihin abokan ciniki ba matsala." },
      { objective: "O5", q: "A ina ya kamata \"#ad\" ya kasance a rubutun da aka biya?", options: ["Babu inda", "A ɓoye a cikin sharhi", "A ƙarshen dogon caption", "A farko, inda mutane za su gani"], answer: 3, why: "Dole bayyanawa ya zama mai sauƙin gani." },
      { objective: "O5", q: "Ga bidiyon da aka biya, bayyanawa ya kamata ya kasance:", options: ["A hanyar haɗi kawai", "A cikin bayanin bidiyo kawai", "A cikin bidiyon da kansa", "Ba a buƙata"], answer: 2, why: "FTC ta ce bayyanawa yana cikin bidiyon." },
      { objective: "O6", q: "CAN-SPAM yana buƙatar imel na talla ya ƙunsa:", options: ["Adireshi na zahiri na gidan waya da ke aiki", "Lambar asusun bankinku", "Adireshin wani abokin ciniki", "Kalmar sirrinku"], answer: 0, why: "Adireshi na zahiri yana ɗaya daga cikin abubuwan asali." },
      { objective: "O6", q: "Dole taken imel na talla ya zama:", options: ["Duka da manyan haruffa", "Ba na ruɗi ba", "Sirri", "AI ne ya rubuta shi"], answer: 1, why: "Ba a yarda da take na ruɗi ba." },
      { objective: "O6", q: "Wa ya kamata ya sami imel ɗinku na talla?", options: ["Duk adireshin imel da za ku iya samu", "Mutanen da suka ba ku adireshinsu kuma suka yarda", "Abokan cinikin abokin hamayyarku", "Baƙi daga jerin da aka saya"], answer: 1, why: "Ku aika imel ga waɗanda suka yarda su ji daga gare ku." },
      { objective: "O6", q: "Idan kuna aika imel ga abokan ciniki a wasu ƙasashe ya kamata ku:", options: ["Duba ƙa'idojin wannan ƙasar ma", "Ɗauka cewa ƙa'idojin Amurka sun rufe komai", "Daina talla", "Cire adireshinku"], answer: 0, why: "Kowace ƙasa za ta iya samun nata ƙa'idojin imel." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      3,
      4,
      6,
      9,
      10,
      12,
      14,
      16,
      17
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Abokin ciniki na musamman",
        objective: "O1",
        notYet: "Ya yi faɗi sosai, kamar \"kowa\", ko ba a duba shi da ainihin abokan ciniki ba.",
        meets: "Sakin layi ɗaya kan su wane ne, matsalarsu da inda suke ɓata lokaci, an duba shi da ainihin mutane.",
        exceeds: "Ya nuna waɗanne hasashen AI ba daidai ba ne kuma an gyara su."
      },
      {
        name: "Tayi",
        objective: "O2",
        notYet: "Babu wa, me ko me yasa, ko yana da iƙirarin da ba za a iya tabbatarwa ba.",
        meets: "Jimla ɗaya mai faɗin wa ake yi wa, me za su samu da dalilin muhimmancinsa, duka gaskiya.",
        exceeds: "Yana amfani da kalmomin abokin cinikin da kansa daga hira ta gaske."
      },
      {
        name: "Jadawalin abubuwan bugawa",
        objective: "O3",
        notYet: "Rubuce-rubuce ƙasa da 12, babu ranaku, ko nau'in rubutu ɗaya kawai.",
        meets: "Rubuce-rubuce 12 masu ranaku, da nau'o'i daban-daban a kafa ɗaya ko biyu.",
        exceeds: "Kowane rubutu yana da alaƙa da tayin ko matsalar abokin cinikin."
      },
      {
        name: "Rubuce-rubucen da aka gama",
        objective: "O4",
        notYet: "Ba a gyara caption ba, ko hotuna suna nuna sakamakon da ba a bayar ba.",
        meets: "Rubuce-rubuce uku masu caption da aka gyara, hotuna da kiran ɗaukar mataki, hotunan gaskiya.",
        exceeds: "Yana amfani da hotunan gaske na aikin mai kasuwancin, da izini ga duk abokin ciniki da aka nuna."
      },
      {
        name: "Imel da ke bin ƙa'idoji",
        objective: "O6",
        notYet: "Babu take na gaskiya, adireshi ko layin daina karɓa.",
        meets: "Take na gaskiya, an bayyana cewa talla ce, adireshi na zahiri da unsubscribe da ke aiki.",
        exceeds: "Ya kuma nuna yadda za a amsa buƙatun daina karɓa cikin kwanakin aiki 10."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu kasuwanci da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa rubric)",
      "Masu kasuwanci da suka buga aƙalla rubuce-rubuce takwas da aka tsara cikin kwanaki 30 (binciken biyo baya)",
      "Sababbin tambayoyin abokan ciniki ko tallace-tallace da mai kasuwancin ya danganta da kunshin tallar",
      "Masu koyo da suka fara wani kwas na Koach Learn na masu kasuwanci cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai mataimakin AI kyauta da asusun Canva kyauta",
      "Hotunan gaske na aikinku da hira ɗaya ta gaske da abokin ciniki ko bayanan tallace-tallace",
      "Takardar lissafi (spreadsheet) ko takarda don jadawalin abubuwan bugawa",
      "Kusan minti 60 zuwa 75 gaba ɗaya don darussa, ayyuka, gwaje-gwaje da kunshin tallar"
    ],
    facilitatorNotes: [
      "Ku sa masu kasuwanci su yi hira da abokin ciniki ɗaya na gaske kafin Darasi na 1, don bayanin ya ginu kan gaskiya.",
      "Ku duba kowane tayi da rubutu bibbiyu, kuna zagaye duk wani iƙirari da ba za a iya tabbatarwa ba.",
      "Ku bayyana cewa kwas ɗin yana bayanin ƙa'idojin Amurka na asali da kalmomi masu sauƙi, kuma ba shawarar lauya ba ne.",
      "Ku tunatar da masu kasuwanci su nemi izini kafin su raba labarai ko hotunan abokan ciniki.",
      "Ku ba da maki ga kunshin tallar da rubric, layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
