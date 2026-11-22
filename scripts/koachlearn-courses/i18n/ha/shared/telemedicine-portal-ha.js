"use strict";

// Koach Learn course, Hausa (ha) translation of shared/telemedicine-portal.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "telemedicine-portal-ha",
  lang: "ha",
  translationOf: "telemedicine-portal",
  category: "Seniors and Technology",
  name: "Amfani da Ganin Likita ta Bidiyo da Shafin Marasa Lafiya (Patient Portal)",
  skills: "Shiga shafin marasa lafiya, Karanta sakamakon gwaje-gwaje da bayanan ganawa, Aika saƙo ga ma'aikatan lafiyarku, Neman ƙarin magani da lokacin ganawa, Shiga ganawa ta bidiyo",
  outcome: "shiga shafinku na marasa lafiya (patient portal), nemo sakamakon gwaje-gwajenku da bayanan ganawarku, aika saƙo a sarari ga ma'aikatan lafiyarku, neman ƙarin magani ko lokacin ganawa, da shiga ganawa ta bidiyo a shirye da tambayoyinku.",
  about: [
    "Asibitoci da cibiyoyin lafiya da yawa yanzu suna da shafin marasa lafiya (patient portal): shafin intanet ko manhaja mai tsaro inda za ku ga bayanan lafiyarku ku kuma yi magana da ma'aikatan lafiyarku. Da yawa kuma suna ba da ganawa ta bidiyo, wani lokaci ana kiranta telemedicine ko telehealth, don ku ga likita ko nas ba tare da tafiya ba.",
    "Wannan kwas ɗin yana nuna muku yadda ake shiga shafinku, karanta sakamako, aika saƙonni, neman ƙarin magani da lokacin ganawa, da yadda ake shiryawa da shiga ganawa ta bidiyo.",
    "Kowane darasi yana ɗaukar kusan minti biyar. Ku karanta darasin, ku kalli hotunan bayani (slides), sannan ku yi aikin \"Gwada yanzu\". Akwai ɗan gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe. Wannan kwas yana koyar da yadda ake amfani da kayan aikin; don tambayoyi game da lafiyarku, koyaushe ku tambayi likitanku, nas ko mai ba da magani (pharmacist). Idan akwai gaggawa, ku kira 911, ba shafin ba."
  ],
  finalTask: "Ku shiga shafinku na marasa lafiya. Ku nemo sakamakon gwaji ɗaya ko taƙaitaccen bayanin ganawa, sannan ku rubuta (ku kuma aika, idan kuna da tambaya ta gaske) gajeren saƙo a sarari ga ma'aikatan lafiyarku da tambayarku. Ku nemo inda ake neman ƙarin magani ko lokacin ganawa. A ƙarshe, ku rubuta jerin tambayoyi uku da magungunan da kuke sha yanzu don ganawarku ta gaba, ku kuma nemo inda hanyar haɗin (link) ganawar bidiyo za ta bayyana a shafin ko a imel.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Marasa lafiya da masu kula da su da ke amfani da asibitoci, cibiyoyin lafiya ko shirye-shiryen inshorar lafiya a Amurka: tsofaffi, mutanen da ke fama da cututtuka na dogon lokaci, masu kula da 'yan uwa, mutanen da ke dawowa cikin al'umma, da duk wanda asibitinsa yanzu yake aika sakamako da hanyoyin haɗin ganawa ta intanet.",
    startingPoint: "Suna iya amfani da waya ko kwamfuta don buɗe manhajoji da shafukan intanet da rubuta gajerun saƙonni. Da yawa an ba su lambar kunnawa (activation code) amma ba su taɓa shiga ba, sakamakon da suke gani a intanet yana damun su, kuma ba su taɓa shiga ganawa ta bidiyo ba.",
    gap: "Asibitoci yanzu suna raba sakamako, bayanan ganawa, ƙarin magani, lokutan ganawa da ganawa ta bidiyo ta shafukan marasa lafiya. Marasa lafiya da ba za su iya amfani da su ba suna jira fiye da kima, suna rasa sakamako da saƙonni, maganinsu yana ƙarewa, ko suna rasa ganawa ta bidiyo, wasu kuma suna aika bayanan lafiyarsu na sirri ta hanyoyin da ba su da tsaro.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; ana bayanin kalmomi kamar reference range (iyakar da aka saba), activation code da eCheck-in",
      "Na'urori: waya, tablet ko kwamfuta mai kyamara da makirufo don ganawa ta bidiyo",
      "Lokaci: kusan minti 5 kowane darasi, kusan minti 60 gaba ɗaya",
      "Ba shawarar likita ba ne: tambayoyin lafiya su tafi ga likitan mai koyo, nas ko mai ba da magani; gaggawa su tafi ga 911",
      "Sirri: masu koyo ba sa taɓa rubuta sunansu, ranar haihuwarsu ko lambobin bayanan lafiyarsu a cikin kayan AI, kuma ba sa aika bayanan lafiya ta imel ko saƙon tes na yau da kullum"
    ],
    prerequisites: "Babu. Kwas ɗin \"Email and Online Communication\" (Imel da Sadarwa ta Intanet) yana taimakon masu koyo da ba su da asusun imel tukuna."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan kuna da lambar kunnawa (activation code) ko hanyar rajista ta hukuma ta asibitinku", action: "buɗe asusunku na shafin marasa lafiya da shiga lafiya", standard: "ta amfani da shafi ko manhaja ta hukuma, kalmar sirri da ba a amfani da ita a ko'ina, da tabbatarwa mataki biyu idan akwai" },
    { id: "O2", condition: "A shafinku na marasa lafiya", action: "nemo sakamakon gwaji da taƙaitaccen bayanin ganawa, da rubuta duk wata tambaya game da su", standard: "kuna karanta sakamakon kusa da iyakarsa da aka saba (reference range), kuna kai tambayoyi ga ma'aikatan lafiyarku maimakon yin tsammani" },
    { id: "O3", condition: "Idan kuna da tambayar lafiya da ba ta gaggawa ba", action: "rubuta gajeren saƙo a sarari a shafin ga ma'aikatan lafiyarku", standard: "da tambayarku da bayanai masu amfani, kuma duk abin gaggawa a kira 911 a maimakon haka" },
    { id: "O4", condition: "A shafinku na marasa lafiya", action: "neman ƙarin magani da nemo inda ake ɗaukar ko canja lokacin ganawa", standard: "kuna neman ƙarin maganin kwanaki kaɗan kafin ya ƙare, kuma kuna kiran asibitin idan shafin ba zai iya ba" },
    { id: "O5", condition: "Ranar da ke gaban ganawa ta bidiyo", action: "shirya na'urarku, wurinku, tambayoyinku da jerin magungunanku", standard: "na'urar tana da caji, an gwada kyamara da makirufo, kuma jerin da aka rubuta yana shirye" },
    { id: "O6", condition: "A ranar ganawa ta bidiyo", action: "shiga a kan lokaci, yin magana a sarari, da maimaita shirin kafin ku katse", standard: "kuna shiga minti 10 zuwa 15 da wuri, kuma kuna duba taƙaitaccen bayanin ganawar daga baya" }
  ],
  chapters: [
    {
      name: "Babi na 1: Shafinku na marasa lafiya",
      lessons: [
        {
          objectives: ["O1"],
          title: "Shiga shafinku na marasa lafiya",
          minutes: 5,
          goal: "Buɗe asusunku na shafin marasa lafiya ku shiga lafiya.",
          text: [
            "Shafin marasa lafiya (patient portal) shafin intanet ne ko manhaja mai tsaro daga asibitinku, cibiyar lafiya ko shirin inshorar lafiyarku. Sanannu sun haɗa da MyChart, wanda tsarin lafiya da yawa ke amfani da shi, amma shafin asibitinku yana iya da wani suna. Ku tambayi ma'aikatan tebur na gaba (front desk) wane shafi suke amfani da shi.",
            "Don shiga, yawanci kuna buƙatar lambar kunnawa (activation code) daga asibiti (an buga ta a takardar taƙaitaccen bayanin ganawa ko an aiko ta ta tes ko imel), ko ku yi rajista da sunanku, ranar haihuwarku da lambar da aka aiko wayarku. Ku yi amfani da hanyar haɗi a shafin hukuma na asibitinku ko manhajar hukuma daga shagon manhajoji.",
            "Ku zaɓi kalmar sirri mai ƙarfi da ba ku amfani da ita a wani wuri, kuma ku kunna tabbatarwa mataki biyu (two-step verification) idan akwai. Kada ku shiga a kwamfutar da ake rabawa sai dai idan za ku fita daga asusu ku rufe burauzar bayan haka."
          ],
          steps: ["Ku tambayi asibitinku wane shafi yake amfani da shi.", "Ku karɓi lambar kunnawa ko hanyar rajista daga asibitin.", "Ku yi amfani da shafin hukuma na asibitin ko manhajar hukuma.", "Ku ƙirƙiri kalmar sirri mai ƙarfi, ta musamman.", "Ku kunna tabbatarwa mataki biyu idan akwai.", "A kwamfutar da ake rabawa: ku fita daga asusu ku rufe burauzar."],
          words: [["Shafin marasa lafiya (patient portal)", "shafin intanet ko manhaja mai tsaro inda kuke ganin bayanan lafiyarku kuna kuma tuntuɓar ma'aikatan lafiyarku."], ["Lambar kunnawa (activation code)", "lambar amfani sau ɗaya daga asibitinku da ke haɗa asusunku da bayanan lafiyarku."], ["Ma'aikatan lafiyarku (care team)", "likitanku, nas-nas da sauran ma'aikatan da ke kula da lafiyarku."]],
          slides: [
            { title: "Mene ne shafin marasa lafiya", bullets: ["Shafi ko manhaja mai tsaro daga asibitinku ko shirin inshorarku", "MyChart ya shahara; ku tambayi asibitinku wanne suke amfani da shi"] },
            { title: "Yin rajista", bullets: ["Lambar kunnawa daga asibiti", "Shafi ko manhaja ta hukuma kaɗai"] },
            { title: "Ku kiyaye shi lafiya", bullets: ["Kalmar sirri mai ƙarfi, ta musamman", "Tabbatarwa mataki biyu", "Ku fita daga asusu a kwamfutocin da ake rabawa"] }
          ],
          tryIt: "Ku nemo shafin marasa lafiya na asibitinku daga shafinsa na hukuma, ko ku tambayi tebur na gaba. Ku buɗe asusunku ko ku shiga, sannan ku fita ku sake shiga don ku tabbata za ku iya yi da kanku.",
          youCanNow: "nemo shafin marasa lafiya na asibitinku, buɗe asusunku da shiga lafiya.",
          quickCheck: [
            { objective: "O1", q: "Wane ne zai iya faɗa muku wane shafin marasa lafiya asibitinku ke amfani da shi?", options: ["Talla a injin bincike", "Baƙo a intanet", "Bankinku", "Tebur na gaba na asibitin"], answer: 3, why: "Ku tambayi tebur na gaba wane shafi asibitin ke amfani da shi." },
            { objective: "O1", q: "Kun shiga shafinku a kwamfutar ɗakin karatu. Me za ku yi idan kun gama?", options: ["Ku bar shafin a buɗe don daga baya", "Ku fita daga asusu ku rufe burauzar", "Ku ajiye kalmar sirrinku a burauzar", "Ku rubuta kalmar sirrinku a kan tebur"], answer: 1, why: "A kwamfutar da ake rabawa, ku fita daga asusu ku rufe burauzar bayan haka." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Karanta sakamakon gwaje-gwaje da bayanan ganawa",
          minutes: 5,
          goal: "Nemo sakamakon gwaji da taƙaitaccen bayanin ganawa a shafinku.",
          text: [
            "Shafukan suna da sassa kamar Test Results (Sakamakon gwaje-gwaje), Visits ko Appointments (Ganawa), Medications (Magunguna) da Health Summary (Taƙaitaccen bayanin lafiya). Sakamako sau da yawa yana nuna lambarku kusa da iyakar da aka saba (normal ko reference range). Ana yawan yi wa sakamakon da ya fita daga iyakar alama, amma ba koyaushe yana nufin akwai matsala ba.",
            "Kuna iya ganin sakamako kafin likitanku ya yi magana da ku game da shi. Kada ku firgita, kuma kada ku yi tsammani. Ku rubuta tambayarku ku tambayi ma'aikatan lafiyarku. Kayan AI na iya taimakawa wajen bayanin kalmar likitanci da kalmomi masu sauƙi, amma kada ku taɓa rubuta sunanku, ranar haihuwarku ko lambobin bayanan lafiyarku a ciki, kuma ku tabbatar da amsarsa da ma'aikatan lafiyarku.",
            "HealthIT.gov ya bayyana cewa, ƙarƙashin dokar HIPAA Privacy Rule, kuna da 'yancin ganin bayanan lafiyarku da samun kwafinsu, har da kwafi na intanet (electronic), ko da ba ku biya kuɗin jinyarku ba."
          ],
          steps: ["Ku buɗe Test Results ko Results.", "Ku taɓa sakamako don ganin lambarku da iyakar da aka saba.", "Ku buɗe Visits don karanta taƙaitaccen bayanin ganawarku.", "Ku rubuta duk wata kalma ko sakamako da ba ku fahimta ba.", "Ku tambayi ma'aikatan lafiyarku; kada ku yi tsammani."],
          words: [["Reference range (iyakar da aka saba)", "iyakar sakamakon da aka saba gani a jikin mutane masu lafiya."], ["Taƙaitaccen bayanin ganawa (visit summary)", "bayanai daga ganawarku, kamar shirin jinyarku da magungunanku."], ["HIPAA", "dokar Amurka da ke kare bayanan lafiyarku kuma ta ba ku 'yancin ganin bayananku."]],
          slides: [
            { title: "Sassan shafin", bullets: ["Test Results (Sakamakon gwaje-gwaje)", "Visits ko Appointments (Ganawa)", "Medications (Magunguna)", "Health Summary (Taƙaitaccen bayanin lafiya)"] },
            { title: "Karanta sakamako", bullets: ["Lambarku kusa da iyakar da aka saba", "Fita daga iyakar ba koyaushe matsala ba ce", "Ku tambaya; kada ku yi tsammani"] },
            { title: "Amfani da AI don bayanin kalmomi", bullets: ["Ya yi daidai don bayanin kalmar likitanci da kalmomi masu sauƙi", "Kada ku taɓa rubuta sunanku, ranar haihuwa ko lambobin bayanai", "Ku tabbatar da ma'aikatan lafiyarku"] },
            { title: "'Yancinku na samun bayananku", bullets: ["Ganin su da samun kwafi, har da kwafi na intanet", "Ko da kuna da bashin kuɗin jinya"] }
          ],
          sources: [{ name: "HealthIT.gov: Yadda ake samun bayanan lafiyarku", url: "https://www.healthit.gov/how-to-get-your-health-record/" }],
          tryIt: "A shafinku, ku buɗe sakamakon gwaji ɗaya ko taƙaitaccen bayanin ganawa. Ku rubuta kalma ko lamba ɗaya da kuke son a yi muku bayani, don ku tambayi ma'aikatan lafiyarku.",
          youCanNow: "nemo da karanta sakamakon gwaji da taƙaitaccen bayanin ganawa, da sanin lokacin da za ku tambayi ma'aikatan lafiyarku.",
          quickCheck: [
            { objective: "O2", q: "Me sakamakon da ya fita daga iyakar da aka saba yake nufi?", options: ["Ba koyaushe matsala ba ne; ku tambayi ma'aikatan lafiyarku", "Tabbas kuna da wata babbar cuta", "An yi gwajin ba daidai ba", "Ya kamata ku daina shan dukkan magungunanku"], answer: 0, why: "Sakamakon da aka yi wa alama ba koyaushe yana nufin akwai matsala ba; ku tambayi ma'aikatan lafiyarku." },
            { objective: "O2", q: "Likitanku bai ga sabon sakamakonku ba tukuna kuma kuna cikin damuwa. Me za ku yi?", options: ["Ku yi tsammanin ma'anarsa daga dandalin tattaunawa a intanet", "Ku rubuta sunanku da lambar bayananku a kayan AI", "Ku rubuta tambayarku ku tambayi ma'aikatan lafiyarku", "Ku canja magungunanku da kanku"], answer: 2, why: "Kada ku firgita ko ku yi tsammani; ku rubuta tambayarku ku tambayi ma'aikatan lafiyarku." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Aika saƙo ga ma'aikatan lafiyarku",
          minutes: 5,
          goal: "Aika gajeren saƙo a sarari ga ma'aikatan lafiyarku ta shafin.",
          text: [
            "Yawancin shafuka suna da sashen Messages (Saƙonni) don tambayoyin da ba na gaggawa ba, kamar tambaya game da magani, takarda ko sakamako. Amsa na iya ɗaukar kwana ɗaya ko fiye, don haka kada ku yi amfani da saƙonni don wani abin gaggawa. Idan akwai gaggawa, ku kira 911.",
            "Saƙo mai kyau gajere ne. Ku faɗi ga wa yake, tambayarku, da duk bayanin da zai taimaka: lokacin da ya fara, abin da kuka gwada, da abin da kuke buƙata. Misali: \"Tun ranar Litinin ina jin jiri bayan sabon maganin hawan jini da nake sha da safe. Shin in sha shi da dare a maimakon haka?\"",
            "Wasu asibitoci na iya cajin inshorarku kuɗi don saƙonnin da ke buƙatar shawarar likita. Ku tambayi asibitinku idan ba ku tabbata ba. Saƙonni a cikin shafin suna da tsaro; kada ku aika bayanan lafiya ta imel ko saƙon tes na yau da kullum a maimakon haka."
          ],
          steps: ["Ku buɗe Messages ku zaɓi New message (Sabon saƙo).", "Ku zaɓi ga wa yake ko batun.", "Ku rubuta tambayarku, lokacin da ya fara da abin da kuke buƙata.", "Ku karanta shi sau ɗaya ku aika.", "Ku duba shafin ko imel ɗinku don amsa.", "Gaggawa? Ku kira asibitin. Babban gaggawa? Ku kira 911."],
          words: [["Saƙo mai tsaro (secure message)", "saƙo na sirri da aka aika a cikin shafin."], ["Ba na gaggawa ba", "zai iya jiran amsa kwana ɗaya ko biyu lafiya."]],
          slides: [
            { title: "Saƙonni don tambayoyin da ba na gaggawa ba ne", bullets: ["Magunguna, takardu, sakamako", "Amsa na iya ɗaukar kwana ɗaya ko fiye", "Babban gaggawa: ku kira 911"] },
            { title: "Saƙo a sarari", bullets: ["Ga wa yake da tambayarku", "Lokacin da ya fara da abin da kuka gwada", "Abin da kuke buƙata"] },
            { title: "Abin da ya kamata ku sani", bullets: ["Wasu asibitoci na iya cajin kuɗi don saƙonnin shawara", "Ku yi amfani da shafin, ba imel ko tes na yau da kullum ba"] }
          ],
          tryIt: "Ku buɗe Messages a shafinku ku rubuta daftarin gajeren saƙo da sassa ukun. Idan kuna da tambaya ta gaske da ba ta gaggawa ba, ku aika; idan ba ku da ita, ku goge daftarin.",
          youCanNow: "rubuta da aika saƙo a sarari, wanda ba na gaggawa ba, ga ma'aikatan lafiyarku, da sanin lokacin da za ku kira a maimakon haka.",
          quickCheck: [
            { objective: "O3", q: "Me yasa ba za a yi amfani da saƙonnin shafin don matsalolin gaggawa ba?", options: ["Saƙonni ba su da tsaro", "Na'ura (robot) ce ke karanta saƙonni koyaushe", "Amsa na iya ɗaukar kwana ɗaya ko fiye", "Saƙonni suna cin kuɗi kowane lokaci"], answer: 2, why: "Amsa na iya ɗaukar kwana ɗaya ko fiye, don haka gaggawa suna buƙatar 911." },
            { objective: "O3", q: "Kuna da tambaya game da wata takarda da asibitinku ya ba ku. Me za ku yi?", options: ["Ku aika gajeren saƙo a shafin kuna faɗin wace takarda ce da abin da kuke buƙata", "Ku aika bayanan lafiyarku ta imel na yau da kullum", "Ku kira 911", "Ku saka tambayar a kafofin sada zumunta"], answer: 0, why: "Tambayoyin da ba na gaggawa ba suna tafiya a gajeren saƙo a sarari ta shafin." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Shafinku na marasa lafiya",
        questions: [
          { objective: "O1", q: "Mene ne shafin marasa lafiya?", options: ["Manhajar kafofin sada zumunta", "Shafi ko manhaja mai tsaro don ganin bayanan lafiyarku da tuntuɓar ma'aikatan lafiyarku", "Shagon sayar da magani", "Ofishin tallafin gwamnati"], answer: 1, why: "Shafukan suna ba da hanya mai tsaro zuwa bayananku da ma'aikatan lafiyarku." },
          { objective: "O1", q: "Daga ina ya kamata ku samo hanyar yin rajista a shafinku?", options: ["Tes daga baƙo", "Talla a injin bincike", "Shafin hukuma na asibitinku ko tebur na gaba", "Rubutu a kafofin sada zumunta"], answer: 2, why: "Majiyoyin hukuma suna nisantar da ku daga shafukan bogi." },
          { objective: "O2", q: "Sakamakon gwaji ya fita daga iyakar da aka saba kuma likitanku bai kira ba tukuna. Me za ku yi?", options: ["Ku rubuta tambayarku ku tambayi ma'aikatan lafiyarku", "Ku firgita", "Ku daina shan dukkan magungunanku", "Ku saka shi a kafofin sada zumunta"], answer: 0, why: "Sakamakon da aka yi wa alama ba koyaushe matsala ba ne; ku tambayi ma'aikatan lafiyarku." },
          { objective: "O2", q: "Kuna son kayan AI ya yi bayanin kalmar likitanci. Me ya kamata ku bari a waje?", options: ["Kalmar likitancin", "Kalmomin \"yi bayani a sauƙaƙe\"", "Neman misali", "Sunanku, ranar haihuwarku da lambobin bayananku"], answer: 3, why: "Kada ku taɓa saka bayanan shaidar lafiyarku na sirri a kayan AI." },
          { objective: "O3", q: "Kun ji ciwon ƙirji kwatsam. Me za ku yi?", options: ["Ku aika saƙo a shafin", "Ku kira 911", "Ku jira ganawa ta bidiyo a mako mai zuwa", "Ku karanta tsofaffin sakamakonku"], answer: 1, why: "Shafuka don tambayoyin da ba na gaggawa ba ne; gaggawa suna buƙatar 911." }
        ]
      }
    },
    {
      name: "Babi na 2: Ƙarin magani, lokutan ganawa da ganawa ta bidiyo",
      lessons: [
        {
          objectives: ["O4"],
          title: "Neman ƙarin magani da ɗaukar lokacin ganawa",
          minutes: 4,
          goal: "Nemi ƙarin magani ku nemo inda ake ɗaukar ko canja lokacin ganawa.",
          text: [
            "A sashen Medications (Magunguna), shafuka da yawa suna nuna maɓallin Request refill (Neman ƙarin magani) kusa da kowane magani. Ku zaɓi maganin da kantin maganinku (pharmacy), sannan ku aika. Ku nema kwanaki kaɗan kafin ya ƙare, domin asibitin da kantin magani suna buƙatar lokaci.",
            "A sashen Appointments ko Visits, sau da yawa kuna iya ganin ganawar da ke tafe, ɗaukar wasu nau'ikan ganawa, soke su, ko shiga jerin jira (waitlist). Wasu ganawa sai an ɗauke su ta waya; shafin zai faɗa muku haka.",
            "Kantin maganinku na iya samun nasa manhajar da ke faɗa muku idan ƙarin maganinku ya shirya. Idan wani abu bai yi aiki a shafin ba, ku kira asibitin; hakan koyaushe ya yi daidai."
          ],
          steps: ["Ku buɗe Medications.", "Ku taɓa Request refill kusa da maganin.", "Ku zaɓi kantin maganinku ku aika.", "Ku nema kwanaki kaɗan kafin ya ƙare.", "Ku buɗe Appointments don gani, ɗauka, canjawa ko soke ganawa."],
          words: [["Ƙarin magani (refill)", "ƙarin maganin da kuke sha tun da farko."], ["Jerin jira (waitlist)", "jerin da ke ba ku lokaci na kusa idan wani ya soke nasa."]],
          slides: [
            { title: "Ƙarin magani", bullets: ["Sashen Medications", "Request refill, ku zaɓi kantin magani, ku aika", "Ku nema kwanaki kaɗan kafin ya ƙare"] },
            { title: "Lokutan ganawa", bullets: ["Ganin ganawar da ke tafe", "Ɗauka, canjawa ko soke wasu ganawa", "Wasu har yanzu sai an kira ta waya"] },
            { title: "Idan bai yi aiki ba", bullets: ["Ku kira asibitin", "Hakan koyaushe ya yi daidai"] }
          ],
          tryIt: "Ku buɗe sashen Medications a shafinku ku nemo maɓallin neman ƙarin magani (ku aika buƙata kawai idan kuna buƙata). Sannan ku buɗe Appointments ku nemo ganawarku ta gaba ko inda ake ɗaukar ɗaya.",
          youCanNow: "neman ƙarin magani da nemo, ɗauka ko canja lokacin ganawa a shafinku.",
          quickCheck: [
            { objective: "O4", q: "A ina shafuka da yawa suke nuna maɓallin Request refill?", options: ["A sashen Test Results", "Kusa da kowane magani a sashen Medications", "A akwatin saƙonni (Messages)", "A shafin shiga"], answer: 1, why: "Shafuka da yawa suna sa maɓallin ƙarin magani kusa da kowane magani." },
            { objective: "O4", q: "Maɓallin ƙarin magani na shafin bai yi aiki ba ga ɗaya daga cikin magungunanku. Me za ku yi?", options: ["Ku daina shan maganin", "Ku jira har ya ƙare", "Ku sayi maganin daga tallar wani shafin intanet", "Ku kira asibitin"], answer: 3, why: "Idan wani abu bai yi aiki a shafin ba, kiran asibitin koyaushe ya yi daidai." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Shiryawa don ganawa ta bidiyo",
          minutes: 5,
          goal: "Shirya na'urarku, wurinku da tambayoyinku kafin ganawa ta bidiyo.",
          text: [
            "Ganawa ta bidiyo (ana kuma kiranta telemedicine ko telehealth) tana ba ku damar ganin likita, nas ko mai ba da shawara (counselor) a wayarku, tablet ko kwamfuta. Tana aiki da kyau don ganawar biyo baya da yawa, duba magani, ganawar lafiyar ƙwaƙwalwa da matsaloli masu sauƙi. Wasu matsaloli har yanzu suna buƙatar a duba ku ido da ido, kuma ma'aikatan lafiyarku za su faɗa muku.",
            "Ku shirya ranar da ke gabanta: ku yi wa na'urarku caji, ku tabbata an saka manhajar shafin ko ta bidiyo, ku kuma gwada kyamara da makirufo. Shafuka da yawa suna da maɓallin gwaji ko eCheck-in da za ku iya yi tun kafin lokaci.",
            "Ku nemo wuri shiru, na sirri, mai haske sosai. Ku rubuta tambayoyinku, alamun rashin lafiyarku da lokacin da suka fara, da jerin magungunanku. Ku ajiye tabarau, kwalaben magani, kuma idan zai taimaka, sakamakon auna hawan jini ko ma'aunin zafin jiki (thermometer) kusa da ku. Wani a iyali ko mai kula da ku na iya shiga don taimakawa idan kuna so."
          ],
          steps: ["Ku yi wa na'urarku caji ku duba an saka manhajar.", "Ku gwada kyamara da makirufo.", "Ku yi duk wani eCheck-in a shafin.", "Ku zaɓi wuri shiru, na sirri, mai haske sosai.", "Ku rubuta tambayoyinku, alamun rashin lafiya da magungunanku.", "Ku ajiye kwalaben magani da tabarau kusa da ku."],
          words: [["Telemedicine ko telehealth", "ganin ma'aikatan lafiyarku ta bidiyo ko waya maimakon ido da ido."], ["eCheck-in", "cike takardu a shafin kafin ganawarku."]],
          slides: [
            { title: "Mece ce ganawa ta bidiyo", bullets: ["Ganin ma'aikatan lafiyarku a allo", "Tana da kyau don biyo baya, duba magani, shawarwari", "Wasu matsaloli har yanzu suna buƙatar ganawa ido da ido"] },
            { title: "Ranar da ke gabanta", bullets: ["Ku yi wa na'urarku caji", "Ku gwada kyamara da makirufo", "Ku yi eCheck-in"] },
            { title: "Ku shirya", bullets: ["Wuri shiru, na sirri, mai haske sosai", "Tambayoyi, alamun rashin lafiya da jerin magunguna", "Kwalaben magani da tabarau kusa da ku"] }
          ],
          tryIt: "Ku rubuta jeri don ganawarku ta gaba: tambayoyi uku, alamun rashin lafiyarku da lokacin da suka fara, da kowane magani da kuke sha tare da yawansa (dose). Ku ajiye shi tare da na'urarku.",
          youCanNow: "shirya na'urarku, wurinku da tambayoyinku don ganawa ta bidiyo.",
          quickCheck: [
            { objective: "O5", q: "Wane irin ganawa ne yakan yi aiki da kyau ta bidiyo?", options: ["Duba magani ko ganawar biyo baya", "Gaggawa", "Ganawar da ke buƙatar a duba ku ido da ido", "Tiyata"], answer: 0, why: "Ganawa ta bidiyo tana aiki da kyau don yawancin ganawar biyo baya, duba magani da shawarwari." },
            { objective: "O5", q: "Ganawarku ta bidiyo gobe ce kuma ba ku tabbata kyamararku tana aiki ba. Me za ku yi yau?", options: ["Ku jira ku gani lokacin ganawar", "Ku soke ganawar", "Ku gwada kyamara da makirufo, da maɓallin gwaji na shafin idan yana da shi", "Ku nemi asibitin ya zo gidanku"], answer: 2, why: "Gwaji ranar da ke gabanta yana ba ku lokacin gyara matsala." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Shiga da kammala ganawa ta bidiyo",
          minutes: 5,
          goal: "Shiga ganawa ta bidiyo a kan lokaci, ku yi magana a sarari, ku san matakai na gaba.",
          text: [
            "Ku shiga minti 10 zuwa 15 da wuri. Ku buɗe ganawar a shafinku ku taɓa maɓallin fara ganawa ta bidiyo, ko ku yi amfani da hanyar haɗin da asibitin ya aiko muku. Ku ba da izinin kyamara da makirufo idan an tambaya. Kuna iya jira a ɗakin jira na intanet (virtual waiting room) har likitan ko ma'aikacin lafiya ya shigo.",
            "Lokacin ganawar, ku kalli allo, ku yi magana a sarari, ku kuma yi amfani da jerinku. Idan sauti ko bidiyo ya yanke, ku natsu; ma'aikacin lafiyar yawanci zai sake kiran ku, don haka ku ajiye wayarku kusa. Ya yi daidai ku nemi su maimaita ko su yi bayanin wani abu a sauƙaƙe.",
            "Kafin ku katse, ku maimaita shirin: \"Wato zan sha sabon maganin da dare, kuma in dawo bayan makonni biyu?\" Bayan haka, ku duba shafin don taƙaitaccen bayanin ganawar da duk wani sabon magani da aka rubuta ko gwaje-gwaje."
          ],
          steps: ["Ku shiga minti 10 zuwa 15 da wuri daga shafin ko hanyar haɗin asibitin.", "Ku ba da izinin kyamara da makirufo.", "Ku jira a ɗakin jira na intanet.", "Ku yi amfani da jerinku; ku nemi bayani a sauƙaƙe idan ya cancanta.", "Ku maimaita shirin kafin ku katse.", "Ku karanta taƙaitaccen bayanin ganawar a shafin bayan haka."],
          words: [["Ɗakin jira na intanet (virtual waiting room)", "allon da kuke jira a kai har ma'aikacin lafiya ya shigo."], ["Ma'aikacin lafiya (clinician)", "likita, nas, mataimakin likita (physician assistant) ko mai ba da shawara da ke yi muku jinya."]],
          slides: [
            { title: "Shiga", bullets: ["Minti 10 zuwa 15 da wuri", "Daga shafin ko hanyar haɗin asibitin", "Ku ba da izinin kyamara da makirufo"] },
            { title: "Lokacin ganawar", bullets: ["Ku yi amfani da jerinku", "Ku nemi su yi bayani a sauƙaƙe", "Kiran ya yanke? Ku ajiye wayarku kusa"] },
            { title: "Kafin ku katse", bullets: ["Ku maimaita shirin", "Ku tambayi yaushe za ku sake ganawa"] },
            { title: "Bayan haka", bullets: ["Ku karanta taƙaitaccen bayanin ganawar a shafin", "Ku duba sabbin magungunan da aka rubuta da gwaje-gwaje"] }
          ],
          tryIt: "Atisayen aikin ƙarshe: a shafinku, ku buɗe ganawar da ke tafe ko wadda ta wuce ku nemo inda maɓallin ko hanyar haɗin ganawar bidiyo yake bayyana. Sannan ku yi aikin ƙarshe: sakamako, saƙo, ƙarin magani da lokutan ganawa, da jerinku na ganawa.",
          youCanNow: "shiga ganawa ta bidiyo a kan lokaci, tattauna jerinku, tabbatar da shirin da nemo taƙaitaccen bayani bayan haka.",
          quickCheck: [
            { objective: "O6", q: "Daga ina kuke yawan fara ganawa ta bidiyo?", options: ["Daga hanyar haɗi a cikin wani tes na barkatai", "Daga ganawar a shafinku, ko hanyar haɗin da asibitin ya aiko", "Daga talla a injin bincike", "Daga manhajar bankinku"], answer: 1, why: "Ku buɗe ganawar a shafinku ko ku yi amfani da hanyar haɗin asibitin." },
            { objective: "O6", q: "Likitan ya yi bayanin sabon shiri da sauri a ƙarshen ganawar. Me za ku yi?", options: ["Ku katse ku yi tsammani daga baya", "Ku tambayi maƙwabci abin da likitan yake nufi", "Ku yi shiru don a gama da wuri", "Ku nemi ya yi bayani a sauƙaƙe, sannan ku maimaita shirin"], answer: 3, why: "Maimaita shirin yana tabbatar da cewa kun fahimci matakai na gaba." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Ƙarin magani, lokutan ganawa da ganawa ta bidiyo",
        questions: [
          { objective: "O4", q: "Yaushe ne lokaci mafi kyau na neman ƙarin magani?", options: ["Bayan maganin ya ƙare har mako ɗaya", "Kwanaki kaɗan kafin ya ƙare", "A lokacin ganawa ta bidiyo kawai", "Kada a taɓa nema ta shafin"], answer: 1, why: "Asibitin da kantin magani suna buƙatar lokaci don shirya shi." },
          { objective: "O4", q: "Shafin ya ce wani nau'in ganawa sai an ɗauke shi ta waya. Me za ku yi?", options: ["Ku haƙura", "Ku aika saƙonni goma", "Ku kira asibitin", "Ku ɗauki ganawa da wani likita daban ta intanet"], answer: 2, why: "Wasu ganawa ana iya ɗaukar su ta waya kawai." },
          { objective: "O5", q: "Me ya kamata ku yi ranar da ke gaban ganawa ta bidiyo?", options: ["Ku yi wa na'urarku caji ku gwada kyamara da makirufo", "Ku goge manhajar", "Ku canja kalmar sirrinku", "Babu komai"], answer: 0, why: "Gwaji tun da wuri yana hana matsaloli a lokacin ganawar." },
          { objective: "O6", q: "Da wuri nawa ya kamata ku shiga ganawa ta bidiyo?", options: ["Da jinkirin minti 30", "Daidai a kan lokaci", "Sai lokacin da suka kira", "Minti 10 zuwa 15 da wuri"], answer: 3, why: "Shiga da wuri yana ba da lokaci don shiga rajista da matsalolin fasaha." },
          { objective: "O6", q: "Me yasa za ku maimaita shirin kafin ku katse?", options: ["Don ganawar ta yi tsawo", "Don ku tabbata kun fahimci abin da za ku yi na gaba", "Dole ne don a mayar muku da kuɗi", "Don gwada makirufo"], answer: 1, why: "Maimaita shirin yana kama rashin fahimta." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Amfani da Ganin Likita ta Bidiyo da Shafin Marasa Lafiya",
    questions: [
      { objective: "O1", q: "Shafin marasa lafiya da tsarin lafiya da yawa ke amfani da shi shi ne:", options: ["MyChart", "TikTok", "DoorDash", "Netflix"], answer: 0, why: "Ana amfani da MyChart sosai; asibitinku na iya amfani da wani." },
      { objective: "O1", q: "Lambar kunnawa (activation code) tana fitowa daga:", options: ["Aboki a kafofin sada zumunta", "Asibitinku", "Tallar da ke tasowa (pop-up)", "Kowane shafin intanet"], answer: 1, why: "Asibitoci suna ba da lambobin kunnawa don haɗa asusunku." },
      { objective: "O1", q: "A kwamfutar ɗakin karatu bayan amfani da shafinku, ya kamata ku:", options: ["Bar shi a buɗe", "Ajiye kalmar sirrinku", "Fita daga asusu ku rufe burauzar", "Rubuta kalmar sirrinku a takarda"], answer: 2, why: "Wannan yana hana mutum na gaba shiga bayanan lafiyarku." },
      { objective: "O1", q: "Wanne ne ya fi ƙara tsaro ga asusunku na shafin?", options: ["Gajeriyar kalmar sirri", "Raba kalmar sirrinku da aboki", "Amfani da kalmar sirri ɗaya a ko'ina", "Tabbatarwa mataki biyu"], answer: 3, why: "Tabbatarwa mataki biyu tana buƙatar lamba daga wayarku." },
      { objective: "O2", q: "Reference range (iyakar da aka saba) ita ce:", options: ["Iyakar sakamakon da aka saba gani a jikin mutane masu lafiya", "Adireshin asibitinku", "Lambar inshorarku", "Wani nau'in magani"], answer: 0, why: "Ana kwatanta sakamako da iyakar da aka saba." },
      { objective: "O2", q: "An yi wa sakamako alama cewa ya fita daga iyaka. Wannan yana nufin:", options: ["Dole ku je sashen gaggawa", "Koyaushe yana nufin babbar cuta", "Ba koyaushe matsala ba ne; ku tambayi ma'aikatan lafiyarku", "Ɗakin gwaji ya yi kuskure"], answer: 2, why: "Sakamakon da aka yi wa alama yana buƙatar bayanin ma'aikatan lafiyarku." },
      { objective: "O2", q: "A cewar HealthIT.gov, dokar HIPAA Privacy Rule tana ba ku 'yancin:", options: ["Samun magani kyauta", "Zaɓar albashin likitanku", "Ganin bayanan lafiyarku da samun kwafinsu", "Ƙin biyan dukkan kuɗaɗe"], answer: 2, why: "Kuna da 'yancin ganin bayananku da samun kwafinsu." },
      { objective: "O2", q: "Shin mai ba da jinya zai iya hana ku bayananku saboda ba ku biya kuɗin jinya ba?", options: ["Eh, koyaushe", "A ƙarshen mako kawai", "Don kwafi na takarda kawai", "A'a; HealthIT.gov ya ce kuna iya samun su ko da kuna da bashi"], answer: 3, why: "Rashin biyan kuɗi ba ya ɗauke 'yancinku na samun bayananku." },
      { objective: "O3", q: "Saƙonnin shafin sun fi dacewa da:", options: ["Gaggawa", "Tambayoyin da ba na gaggawa ba", "Aika kuɗi", "Hira da baƙi"], answer: 1, why: "Amsa na iya ɗaukar kwana ɗaya ko fiye." },
      { objective: "O3", q: "Wane saƙon shafi ne ya fi sarari?", options: ["\"taimako\"", "\"?\"", "\"kira ni\"", "\"Tun ranar Litinin ina jin jiri bayan sabon maganina na safe. Shin in sha shi da dare?\""], answer: 3, why: "Yana faɗin mene ne, tun yaushe, da abin da kuke buƙata." },
      { objective: "O3", q: "Wasu asibitoci na iya cajin inshora kuɗi don:", options: ["Shiga shafin", "Karanta sakamako", "Saƙonnin da ke buƙatar shawarar likita", "Canja kalmar sirrinku"], answer: 2, why: "Ku tambayi asibitinku idan ba ku tabbata ba game da cajin saƙonni." },
      { objective: "O4", q: "A ina kuke yawan neman ƙarin magani a shafin?", options: ["Sashen Medications", "Shafin Settings (saituna)", "Kwandon shara na saƙonni", "Allon shiga"], answer: 0, why: "Maɓallan ƙarin magani suna kusa da magungunanku." },
      { objective: "O4", q: "Jerin jira (waitlist) yana ba ku damar:", options: ["Canja bayanan likitanku", "Ƙin biya", "Ganin sakamakon wasu marasa lafiya", "Samun lokaci na kusa idan wani ya soke"], answer: 3, why: "Jerin jira yana ba da lokutan da aka soke." },
      { objective: "O5", q: "Ganawa ta bidiyo tana aiki da kyau don:", options: ["Kowace matsala, koyaushe", "Karyewar ƙashi da ke buƙatar hoton x-ray", "Yawancin ganawar biyo baya, duba magani da shawarwari", "Gaggawa"], answer: 2, why: "Wasu matsaloli har yanzu suna buƙatar jinya ido da ido." },
      { objective: "O5", q: "eCheck-in shi ne:", options: ["Ƙarin magani", "Cakin banki", "Wasan bidiyo", "Cike takardu a shafin kafin ganawarku"], answer: 3, why: "Yana adana lokaci a farkon ganawarku." },
      { objective: "O5", q: "Me ya kamata ku shirya don ganawa ta bidiyo?", options: ["Tambayoyinku da jerin magungunanku", "Kiɗa mai ƙara", "Wurin jama'a mai hayaniya", "Babu komai"], answer: 0, why: "Jeri yana taimaka muku amfani da ganawar da kyau." },
      { objective: "O6", q: "Ɗakin jira na intanet (virtual waiting room) shi ne:", options: ["Ɗaki na gaske a asibiti", "Hira da sauran marasa lafiya", "Allon da kuke jira a kai har ma'aikacin lafiya ya shigo", "Wani nau'in takardar biyan kuɗi"], answer: 2, why: "Kuna jira a can har ganawar ta fara." },
      { objective: "O6", q: "Bidiyo ya yanke lokacin ganawarku. Me za ku yi?", options: ["Ku haƙura da jinya", "Ku ɗauki sabuwar ganawa shekara mai zuwa", "Ku rubuta game da shi a intanet", "Ku natsu ku ajiye wayarku kusa don a sake kiran ku"], answer: 3, why: "Ma'aikatan lafiya sukan sake kira idan bidiyo ya ƙi aiki." },
      { objective: "O6", q: "Bayan ganawa ta bidiyo, a ina za ku duba shirin?", options: ["Rubutu a kafofin sada zumunta", "Shagon manhajoji", "Taƙaitaccen bayanin ganawar a shafinku", "Tes daga baƙo"], answer: 2, why: "Taƙaitaccen bayanin yana jera shirin, magungunan da aka rubuta da gwaje-gwaje." },
      { objective: "O6", q: "Wa ya kamata ku tambaya game da tambayoyin lafiyarku?", options: ["Wani shafin intanet na barkatai", "Kayan AI kaɗai", "Sharhi a kafofin sada zumunta", "Likitanku, nas ko mai ba da magani"], answer: 3, why: "Ma'aikatan lafiyarku sun san tarihin lafiyarku." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      2,
      5,
      6,
      8,
      9,
      11,
      14,
      15,
      17
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Shiga lafiya",
        objective: "O1",
        notYet: "Ba zai iya shiga ba, ko ya shiga ta hanyar haɗi da ba ta hukuma ba.",
        meets: "Yana shiga ta shafin hukuma ko manhajar asibitin da kalmar sirri da ba a amfani da ita a ko'ina.",
        exceeds: "Yana kuma kunna tabbatarwa mataki biyu idan shafin yana da ita."
      },
      {
        name: "Nemo sakamako ko taƙaitaccen bayani",
        objective: "O2",
        notYet: "Ba zai iya nemo sakamakon gwaji ko taƙaitaccen bayanin ganawa ba.",
        meets: "Yana nemo sakamakon gwaji ɗaya ko taƙaitaccen bayanin ganawa kuma ya rubuta duk wata tambaya game da shi.",
        exceeds: "Yana kuma karanta sakamakon kusa da iyakar da aka saba ba tare da yin tsammanin ma'anarsa ba."
      },
      {
        name: "Saƙo a sarari",
        objective: "O3",
        notYet: "Saƙon ba shi da sarari, ya yi tsawo, ko game da abin gaggawa ne.",
        meets: "Gajeren saƙo da tambayar da bayanai masu amfani, don buƙatar da ba ta gaggawa ba.",
        exceeds: "Ya haɗa da lokacin da ya fara, abin da aka gwada da abin da ake buƙata."
      },
      {
        name: "Ƙarin magani da lokutan ganawa",
        objective: "O4",
        notYet: "Ba zai iya nemo inda ake neman ƙarin magani ko lokacin ganawa ba.",
        meets: "Yana nemo duka wurin neman ƙarin magani da sashen lokutan ganawa.",
        exceeds: "Yana kuma san waɗanne ganawa sai an ɗauke su ta waya."
      },
      {
        name: "A shirye don ganawa ta bidiyo",
        objective: "O5",
        notYet: "Babu jerin tambayoyi ko jerin magunguna, ko ba zai iya faɗin inda hanyar haɗin zai bayyana ba.",
        meets: "Tambayoyi uku da jerin magungunan yanzu, kuma ya san inda hanyar haɗin bidiyon za ta bayyana.",
        exceeds: "Yana kuma gwada kyamara da makirufo ko ya kammala eCheck-in tun kafin lokaci."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka sami \"Ya cika\" ko \"Ya wuce\" a kowane layi na rubric na aikin ƙarshe",
      "Masu koyo da suka ce sun shiga shafinsu da kansu bayan kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka ce sun nemi ƙarin magani ko lokacin ganawa, ko sun aika saƙo, ta shafin",
      "Masu koyo da suka ce sun shiga ganawa ta bidiyo a kan lokaci ba tare da taimako ba"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya, tablet ko kwamfuta mai kyamara da makirufo",
      "Lambar kunnawa ta asibiti ko hanyar rajista ta hukuma (ku tambayi tebur na gaba)",
      "Takarda da alƙalami don jerin tambayoyi da na magunguna",
      "Kusan minti 60 gaba ɗaya, a gajerun zama"
    ],
    facilitatorNotes: [
      "Kada ku taɓa kallo, karantawa da babbar murya ko rubuta bayanan lafiyar mai koyo; masu koyo suna yin matakan shafin a sirri a allunansu.",
      "Masu koyo da ba su da asusun shafi za su iya yin atisaye da shafin gwaji (demo) ko hotunan allo, kuma su karɓi lambar kunnawa daga asibitinsu kafin zama na gaba.",
      "Ku faɗi a sarari cewa kwas ɗin ba shawarar likita ba ne: tambayoyi game da sakamako ko magunguna suna zuwa ga ma'aikatan lafiyar mai koyo, gaggawa kuma suna zuwa ga 911.",
      "Ku yi atisayen kiran bidiyo a aji don masu koyo su gwada ba da izinin kyamara da makirufo da nemo maɓallin kashe sauti (mute).",
      "Masu kula da marasa lafiya za su iya halarta tare da mara lafiya; ku tunatar da su cewa wasu shafuka suna ba da damar shiga a madadin wani (proxy access) wadda dole asibitin ya saita."
    ]
  }
};
