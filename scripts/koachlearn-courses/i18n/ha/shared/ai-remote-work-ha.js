"use strict";

// Koach Learn course, Hausa (ha) translation of shared/ai-remote-work.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "ai-remote-work-ha",
  lang: "ha",
  translationOf: "ai-remote-work",
  category: "Re-Entry",
  name: "Ƙwarewar Aiki daga Gida tare da AI",
  skills: "Shirya wurin aiki a gida, Shiga da gudanar da kiran bidiyo, Rubuta saƙonnin aiki a sarari da taimakon AI, Aiki a takardun da ake rabawa, Tsara lokacinku da kanku, Neman aikin nesa na gaske da guje wa zamba",
  outcome: "shirya kanku don aiki daga gida, shiga kiran bidiyo cikin ladabi da ƙwarewa, rubuta bayanin ci gaba da saƙonni a sarari da taimakon AI, yin aiki tare a takardar da ake rabawa, tsara ranar aikinku, da bambance aikin nesa na gaske da zamba.",
  about: [
    "Ayyuka da yawa yanzu suna bari mutane su yi aiki daga gida a wani lokaci ko kullum: taimakon abokan ciniki, shigar da bayanai (data entry), tsara jadawali, mataimaki ta intanet, sayarwa, koyarwa da taimakon fasaha. Aikin nesa zai iya buɗe ƙofofi idan sufuri, kula da yara, nakasa ko wurin da kuke zaune yana sa zuwa aiki ya yi wuya.",
    "Aikin nesa yana buƙatar nasa ƙwarewa: rubutu a sarari, kiran bidiyo, takardun da ake rabawa, tsara lokacinku da kanku, da zama lafiya a intanet. Mataimakan AI kamar ChatGPT, Microsoft Copilot da Google Gemini za su iya taimakawa a yawancinsu.",
    "Wannan kwas ɗin na mutanen da ke dawowa gida ne, masu neman aiki a shirye-shiryen horar da ma'aikata, da mutanen al'umma da babu wurin aiki kusa da su. Kowane darasi yana ɗaukar kusan minti biyar, tare da aikin \"Gwada yanzu\". Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku haɗa kayan shirin aikin nesa: hoto ko jerin abubuwan da ke wurin aikinku, gwajin kiran bidiyo na minti ɗaya (rikodi ko jerin abubuwa), saƙonnin aiki uku da kuka rubuta da taimakon AI (bayanin ci gaba, tambaya ga manaja, da saƙon \"Zan makara\"), takardar da ake rabawa da kuka gyara da sharhi (comment) da shawarar gyara, tsarin rana ɗaya da aka raba lokaci (time-block), da tallar aikin nesa ta gaske guda ɗaya da kuka duba da alamun gargaɗin zamba.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya da ke dawowa gida daga gidan yari waɗanda suke sha'awar ayyukan nesa kamar taimakon abokan ciniki, shigar da bayanai, taimakon ofis ko aikin cibiyar kira (call center), sau da yawa saboda sufuri, jadawali ko buƙatun iyali.",
    startingPoint: "Suna iya kira da tura saƙon tes a waya; wasu suna da adireshin imel kuma sun taɓa gwada mataimakin AI. Da yawa ba su taɓa amfani da kayan taron bidiyo, manhajojin hira na wurin aiki ko takardun da ake rabawa ba, kuma wataƙila ba su da kwamfuta ko intanet a gida tukuna.",
    gap: "Ayyukan nesa za su iya ƙara zaɓin aiki ga mutanen da ba su da mota ko suke da nauyin iyali, amma suna buƙatar fasaha mai inganci, rubutu a sarari, tsara lokaci da kanku, da iya gane zambar aiki-daga-gida masu yawa. Masu koyo suna buƙatar waɗannan ƙwarewa na asali don neman aikin nesa da ƙarfin gwiwa, da kuma riƙe shi.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli (kusan aji 5 zuwa 6)",
      "Na'urori: wataƙila suna da waya kawai ko kwamfutar ɗakin karatu; ayyukan nesa da yawa suna buƙatar kwamfuta da intanet a gida",
      "Lokaci: darussa na minti 5 da suka dace da ganawa da aiki",
      "Wasu sharuɗɗan parole ko probation (sakin sharaɗi) suna iyakance amfani da intanet; kowane mai koyo yana bin nasa sharuɗɗan",
      "Haɗarin zamba da sirri yana da yawa: babu lambar banki ko ta Social Security da za a bayar kafin tayin aikin da aka tabbatar"
    ],
    prerequisites: "Babu. Kwas ɗin \"Introduction to AI and Digital Confidence\" (Gabatarwa ga AI da Ƙarfin Gwiwa a Fasahar Zamani) kwas ne mai amfani na farko ga masu koyo da suke sababbi a AI."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "A gida ko a wurin da kuke shirin yin aiki", action: "shirya wurin aiki da duba intanet ɗinku, belun kunne mai makirufo (headset) da tsaron asusunku", standard: "bayan kun yi gwajin saurin intanet, kun kunna shiga mataki biyu, kuma kun saka makullin allo" },
    { id: "O2", condition: "Idan aka ba ku hanyar haɗin taro (link)", action: "shiga kiran bidiyo da amfani da kashe murya (mute), kyamara, hira (chat) da nuna allo (screen share)", standard: "kuna shiga da wuri, kuma kuna gyara matsalar sauti ba tare da taimako ba" },
    { id: "O3", condition: "Idan aka ba ku wani yanayi na aiki", action: "rubuta gajeren saƙon aiki mai sarari da taimakon AI", standard: "kuna fara da babban abin, kuna faɗin abin da kuke buƙata da lokacin da kuke buƙatarsa, ba tare da bayanan abokan ciniki a kayan AI da ba a amince da su ba" },
    { id: "O4", condition: "Idan aka ba ku hanyar haɗin takardar da ake rabawa", action: "ƙara sharhi (comment), yin shawarar gyara, da buɗe tarihin sigogi (version history)", standard: "ba tare da canja saitunan rabawa ba" },
    { id: "O5", condition: "Idan aka ba ku jerin ayyukan ranar aiki", action: "yin tsarin raba lokaci (time-block) mai lokacin farawa, hutu da tsayawa", standard: "wanda ya dace da rayuwarku ta gaske kuma ya ƙare da bayanin ci gaba" },
    { id: "O6", condition: "Idan aka ba ku tallar aikin nesa", action: "duba ko aikin na gaske ne ko zambar aiki-daga-gida", standard: "ta amfani da kowace alamar gargaɗi kafin ku bayar da wata lambar sirri" }
  ],
  chapters: [
    {
      name: "Babi na 1: Shiryawa don aikin nesa",
      lessons: [
        {
          objectives: ["O1"],
          title: "Wurin aikinku a gida da abubuwan fasaha na asali",
          minutes: 5,
          goal: "Shirya wurin aiki kuma ku duba cewa fasaharku ta shirya don aikin nesa.",
          text: [
            "Kuna buƙatar intanet mai inganci, kwamfuta (ayyuka da yawa ba sa yarda da aiki da waya kawai), belun kunne ko ƙananan belun kunne (earbuds) masu makirufo, da wuri shiru. Ƙaramin tebur kusa da bango ya isa. Haske mai kyau a gabanku, ba a bayanku ba, yana taimakawa a kyamara.",
            "Ku duba intanet ɗinku da gwajin saurin intanet (speed test) kyauta kafin ku nemi aiki. Idan yana da jinkiri ko ba ku da intanet a gida, ku tambayi ɗakin karatu, shirin horar da ma'aikata ko kamfanin intanet ɗinku game da zaɓuɓɓuka masu araha; wasu shirye-shirye suna canjawa, don haka ku duba abin da ake da shi a inda kuke zaune.",
            "Ku kare asusun aiki kamar naku: kalmomin sirri masu ƙarfi (passphrase), shiga mataki biyu, sabunta manhajoji, kuma kada ku yi aiki a kwamfutocin jama'a sai idan mai ɗaukar ku aiki ya yarda. Ku kulle allonku idan kun tashi."
          ],
          steps: ["Ku zaɓi wuri shiru mai tebur da haske mai kyau a gabanku.", "Ku samo belun kunne ko earbuds masu makirufo.", "Ku yi gwajin saurin intanet kyauta.", "Ku kunna sabuntawa, shiga mataki biyu da makullin allo.", "Ku tambaya game da intanet mai araha idan kuna buƙata."],
          words: [["Aikin nesa (remote work)", "yin aikinku daga gida ko wani wuri a wajen ofishin mai ɗaukar ku aiki."], ["Headset", "belun kunne mai makirufo."], ["Bandwidth", "yawan bayanan da intanet ɗinku zai iya ɗauka; mafi yawa ya fi kyau don bidiyo."]],
          slides: [
            { title: "Abin da kuke buƙata", bullets: ["Intanet mai inganci da kwamfuta", "Belun kunne mai makirufo", "Wuri shiru mai tebur"] },
            { title: "Ku bayyana da kyau, ku yi sauti mai kyau", bullets: ["Haske a gabanku, ba a bayanku ba", "Wuri shiru a bayanku"] },
            { title: "Ku zauna lafiya", bullets: ["Kalmomin sirri masu ƙarfi da shiga mataki biyu", "Sabuntawa a kunne", "Ku kulle allo idan kun tashi"] }
          ],
          tryIt: "Ku shirya wurin aikinku, ku yi gwajin saurin intanet, sannan ku rubuta jerin abin da kuke da shi da abin da har yanzu kuke buƙata.",
          youCanNow: "shirya wurin aiki a gida mai lafiya kuma mai amfani.",
          quickCheck: [
            { objective: "O1", q: "Wane abu ne ayyukan nesa da yawa ke buƙata banda intanet?", options: ["Tablet kawai", "Agogon zamani (smartwatch)", "Kwamfuta, ba waya kawai ba", "Firinta"], answer: 2, why: "Ayyukan nesa da yawa ba sa yarda da aiki da waya kawai, don haka kuna buƙatar kwamfuta." },
            { objective: "O1", q: "Gwajin saurin intanet ɗinku ya nuna intanet yana da jinkiri, kuma kuna son neman ayyukan nesa. Me za ku yi?", options: ["Ku tambayi ɗakin karatu, shirin horar da ma'aikata ko kamfanin intanet game da zaɓuɓɓuka masu araha", "Ku nemi aiki duk da haka ku yi fatan zai yi aiki", "Ku yi amfani da Wi-Fi na baƙo ba tare da izini ba", "Ku haƙura da aikin nesa"], answer: 0, why: "Ɗakunan karatu, shirye-shiryen horarwa da kamfanonin intanet suna iya sanin zaɓuɓɓukan intanet masu araha." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Shiga da gudanar da kiran bidiyo",
          minutes: 5,
          goal: "Shiga kiran bidiyo cikin ƙwarewa da magance matsalolin da aka saba samu.",
          text: [
            "Yawancin ayyukan nesa suna amfani da kayan bidiyo kamar Zoom, Microsoft Teams ko Google Meet. Yawanci kuna shiga ta danna hanyar haɗi (link) a cikin imel ko gayyatar kalanda. Ku shiga minti biyu ko uku da wuri don gyara duk wata matsala.",
            "Ku san maɓallan asali: kashe da kunna murya (mute), kunna da kashe kyamara, nuna allonku (screen share), da amfani da hira (chat). Ku bar muryarku a kashe idan ba kuna magana ba. Ku kalli kyamara idan kuna magana, kuma ku yi amfani da sunanku a matsayin sunan da ake gani.",
            "Idan wani abu ya lalace: ku duba cewa an zaɓi makirufo da lasifika daidai a saituna (settings), ku fita ku sake shiga, ko ku kira ta waya idan gayyatar tana da lamba. Ku faɗa wa mai shirya taron a hira. Kayan da yawa kuma suna da rubutun magana kai tsaye (captions) da taƙaitaccen taro da AI ya yi; ku bi dokokin mai ɗaukar ku aiki game da amfani da su."
          ],
          steps: ["Ku danna hanyar haɗin taron minti biyu ko uku da wuri.", "Ku duba sunan da ake gani, kyamara da makirufo.", "Ku bar murya a kashe idan ba kuna magana ba.", "Ku yi amfani da hira don faɗin idan kuna da matsala.", "Idan sauti bai yi aiki ba, ku duba saitunan na'ura ko ku sake shiga."],
          words: [["Mute", "kashe makirufo don sauran mutane kada su ji ku."], ["Screen share (nuna allo)", "nuna allon kwamfutarku ga sauran mutanen da ke cikin kiran."], ["Captions", "rubutu a allo da ke nuna abin da mutane suke faɗa."]],
          slides: [
            { title: "Ku shiga daidai", bullets: ["Ku danna hanyar haɗi minti 2-3 da wuri", "Ku yi amfani da sunanku na gaske", "Ku duba kyamara da makirufo"] },
            { title: "Maɓallan asali", bullets: ["Kashe da kunna murya", "Kunna da kashe kyamara", "Nuna allo da hira"] },
            { title: "Idan ya lalace", bullets: ["Ku duba saitunan na'ura", "Ku fita ku sake shiga", "Ku faɗa wa mai shirya taron a hira"] }
          ],
          tryIt: "Ku fara taron gwaji kyauta tare da aboki, wani a iyali, ko ku kaɗai a Zoom, Teams ko Google Meet. Ku gwada kashe murya, kyamara, hira da nuna allo.",
          youCanNow: "shiga da halartar kiran bidiyo cikin ƙwarewa, da gyara matsalolin da aka saba samu.",
          quickCheck: [
            { objective: "O2", q: "Me nuna allo (screen share) ke yi a kiran bidiyo?", options: ["Yana kashe muryar kowa", "Yana rikodin taron", "Yana kashe kyamararku", "Yana nuna allon kwamfutarku ga sauran mutanen da ke cikin kiran"], answer: 3, why: "Nuna allo yana nuna allonku ga sauran mutanen da ke cikin kiran." },
            { objective: "O2", q: "Sautinku ya daina aiki a taron ƙungiya. Me za ku yi?", options: ["Ku fita ba tare da faɗin komai ba", "Ku faɗa wa mai shirya taron a hira, ku duba saitunan na'urarku ko ku sake shiga", "Ku ƙara ihu", "Ku kashe kwamfutarku"], answer: 1, why: "Ku yi amfani da hira don faɗa wa mai shirya taron, sannan ku duba saituna, ku sake shiga ko ku kira ta waya." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Rubuta saƙonnin aiki a sarari da AI",
          minutes: 5,
          goal: "Rubuta gajerun saƙonnin aiki masu sarari da ƙwarewa da taimakon AI.",
          text: [
            "A aikin nesa, yawancin sadarwa a rubuce take: hira (kamar Teams ko Slack) da imel. Rubutu a sarari shi ne babbar ƙwarewar aikin nesa. Ku fara da babban abin, ku gajarta, kuma ku faɗi abin da kuke buƙata da lokacin da kuke buƙatarsa.",
            "AI zai iya taimakawa: \"Ka mayar da wannan gajeren saƙo mai ladabi ga manajata: Na gama bayanan abokan ciniki 40, 3 ba su da lambar waya, in kira su ko in tsallake su?\" Sannan ku duba cewa yana kama da yadda kuke magana kuma bai yi tsauri da yawa ba.",
            "Nau'ukan saƙonni masu amfani: bayanin ci gaba na kullum (abin da aka gama, abin da ke gaba, abin da ya tsayar da ku), tambaya mai sarari, da sanarwa idan za ku makara ko kuna rashin lafiya. Kada ku taɓa liƙa bayanan abokan ciniki, kalmomin sirri ko asirin kamfani a kayan AI da mai ɗaukar ku aiki bai amince da shi ba."
          ],
          steps: ["Ku fara da babban abin.", "Ku faɗi abin da kuke buƙata da lokacin da kuke buƙatarsa.", "Ku nemi AI ya gajarta shi ya sa shi mai ladabi.", "Ku duba cewa yana kama da yadda kuke magana.", "Ku kiyaye bayanan abokan ciniki da na kamfani daga kayan AI da ba a amince da su ba."],
          words: [["Bayanin ci gaba (status update)", "gajeren saƙo game da abin da kuka yi, abin da ke gaba da duk wata matsala."], ["Manhajar hira (chat app)", "kayan aika saƙonni na wurin aiki kamar Microsoft Teams ko Slack."]],
          slides: [
            { title: "Rubutu shi ne babbar ƙwarewar aikin nesa", bullets: ["Ku fara da babban abin", "Gajere kuma mai sarari", "Abin da kuke buƙata da lokacin da kuke buƙatarsa"] },
            { title: "Saƙonni uku masu muhimmanci", bullets: ["Ci gaba: abin da aka gama, na gaba, abin da ya tsayar", "Tambaya mai sarari", "Sanarwar makara ko rashin lafiya"] },
            { title: "AI yana taimakawa, lafiya", bullets: ["Ku sa shi gajere kuma mai ladabi", "Ku duba cewa yana kama da ku", "Babu bayanan kamfani a kayan da ba a amince da su ba"] }
          ],
          tryIt: "Da taimakon AI, ku rubuta saƙonni uku: bayanin ci gaba, tambaya ga manaja, da saƙon \"Zan makara da minti 15\". Ku gyara kowanne ya yi kama da yadda kuke magana.",
          youCanNow: "rubuta gajerun saƙonnin aiki masu sarari da taimakon AI.",
          quickCheck: [
            { objective: "O3", q: "Wadanne abubuwa uku ne ke cikin bayanin ci gaba na kullum?", options: ["Abincin rana, yanayin zuciyarku da yanayin sararin samaniya", "Abin da kuka yi, abin da ke gaba da duk abin da ya tsayar da ku", "Kowane imel da kuka karanta", "Kalmar sirrinku da lokacin shiga"], answer: 1, why: "Bayanin ci gaba yana faɗin abin da aka gama, abin da ke gaba da abin da ya tsayar." },
            { objective: "O3", q: "Kuna son AI ya taimaka wajen rubuta saƙo game da ƙorafin wani abokin ciniki. Me za ku cire?", options: ["Babban abin", "Abin da kuke buƙata daga manajanku", "Lokacin da kuke buƙatar amsa", "Sunan abokin cinikin da lambar wayarsa"], answer: 3, why: "Kada ku taɓa liƙa bayanan abokan ciniki a kayan AI da mai ɗaukar ku aiki bai amince da shi ba." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Shiryawa don aikin nesa",
        questions: [
          { objective: "O1", q: "A ina ya kamata haske ya kasance don kiran bidiyo?", options: ["A bayanku", "Babu ko'ina", "A gabanku", "A ƙarƙashin tebur"], answer: 2, why: "Haske a gabanku yana sa a ga fuskarku." },
          { objective: "O1", q: "Me ya kamata ku yi idan za ku tashi daga kwamfutar aikinku?", options: ["Ku kulle allo", "Ku bar ta a buɗe", "Ku saka kalmar sirrinku a intanet", "Ku kashe intanet"], answer: 0, why: "Kulle allo yana kare bayanan aiki." },
          { objective: "O2", q: "Yaushe ya kamata ku shiga taron bidiyo?", options: ["Minti goma bayan lokaci", "Sai idan an tunatar da ku sau biyu", "Ba za ku taɓa shiga ba", "Minti biyu ko uku da wuri"], answer: 3, why: "Shiga da wuri yana ba da lokacin gyara matsaloli." },
          { objective: "O2", q: "Sauran mutane ba sa jin ku a kira. Me za ku fara dubawa?", options: ["Akwatin imel ɗinku", "Cewa muryarku tana kunne kuma an zaɓi makirufo daidai", "Hasken allonku", "Yanayin sararin samaniya"], answer: 1, why: "Kashe murya da saitunan na'ura su ne ke jawo yawancin matsalolin sauti." },
          { objective: "O3", q: "Mene ne bayanin ci gaba mai kyau?", options: ["Dogon labari game da ƙarshen makonku", "Abin da na yi, abin da ke gaba, da duk abin da ya tsayar da ni", "Babu komai", "Emoji kawai"], answer: 1, why: "Bayanin ci gaba yana sanar da ƙungiya halin da ake ciki." }
        ]
      }
    },
    {
      name: "Babi na 2: Yin aiki da kyau da neman ayyukan nesa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Aiki a takardun da ake rabawa",
          minutes: 5,
          goal: "Gyara, yin sharhi da shawarar canje-canje a takardar da ake rabawa.",
          text: [
            "Ƙungiyoyin aikin nesa suna aiki a takarda ɗaya a lokaci guda ta amfani da Google Docs, Google Sheets ko Microsoft 365 (Word, Excel) ta intanet. Kuna buɗe ta daga hanyar haɗi da aka raba, kuma kuna ganin canje-canjen wasu yayin da suke rubutu.",
            "Ku koyi abubuwa uku. Sharhi (comment): ku haskaka rubutu ku ƙara sharhi don tambaya ko ba da shawara ba tare da canja shi ba. Shawarar gyara: Google Docs yana da Suggesting mode, Word kuma yana da Track Changes, don gyaranku ya bayyana wasu su amince da shi. Tarihin sigogi (version history) yana bar ku ganin ko dawo da sigogin da suka gabata.",
            "Ku yi hankali da saitunan rabawa: ku raba da mutanen da ke buƙata kaɗai, kuma kada ku canja saitin \"anyone with the link\" (kowa mai hanyar haɗi) ba tare da tambaya ba. Kayan da yawa suna da AI a ciki (kamar Gemini a Google Workspace ko Copilot a Microsoft 365) idan mai ɗaukar ku aiki ya kunna shi."
          ],
          steps: ["Ku buɗe takardar da ake rabawa daga hanyar haɗinta.", "Ku haskaka rubutu ku ƙara sharhi.", "Ku kunna Suggesting mode (Google Docs) ko Track Changes (Word) ku yi gyara.", "Ku buɗe tarihin sigogi don ganin sigogin da suka gabata.", "Ku duba saitunan rabawa kafin ku ƙara rabawa."],
          words: [["Takardar da ake rabawa", "fayil da mutane da yawa za su iya buɗewa su gyara ta intanet."], ["Sharhi (comment)", "rubutu da aka maƙala a wani sashe na takarda."], ["Tarihin sigogi (version history)", "rikodin sigogin fayil da suka gabata da za ku iya gani ko dawo da su."]],
          slides: [
            { title: "Aiki tare ta intanet", bullets: ["Google Docs da Sheets", "Microsoft 365 Word da Excel ta intanet", "Ku ga canje-canje yayin da wasu ke rubutu"] },
            { title: "Abubuwa uku", bullets: ["Sharhi (comment)", "Suggesting mode ko Track Changes", "Tarihin sigogi (version history)"] },
            { title: "Ku raba a hankali", bullets: ["Mutanen da ke buƙata kaɗai", "Ku tambaya kafin ku canja saitunan hanyar haɗi"] }
          ],
          tryIt: "Ku ƙirƙiri takardar Google Doc ko Word ta intanet, ku raba ta da wanda kuka amince da shi, sannan ku gwada sharhi, shawarar gyara da kallon tarihin sigogi tare.",
          youCanNow: "yin aiki tare a takardar da ake rabawa da sharhi, shawarwarin gyara da tarihin sigogi.",
          quickCheck: [
            { objective: "O4", q: "Me Track Changes ke yi a Word?", options: ["Yana nuna gyaranku don wasu su duba su amince da shi", "Yana goge tsofaffin sigogi", "Yana raba fayil da kowa", "Yana ƙidaya kalmomi"], answer: 0, why: "Track Changes yana nuna gyare-gyare don wasu su amince, kamar Suggesting mode a Google Docs." },
            { objective: "O4", q: "Abokin aiki ya ce ku raba takardar ƙungiya da wani abokinsa a wajen kamfanin. Me za ku yi?", options: ["Ku canja shi zuwa \"anyone with the link\"", "Ku aika hanyar haɗin nan take", "Ku tambayi mai takardar kafin ku ƙara rabawa", "Ku kwafi duka takardar cikin imel"], answer: 2, why: "Ku raba da mutanen da ke buƙata kaɗai, kuma ku tambaya kafin ku canja saitunan rabawa." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Tsara lokacinku da kanku",
          minutes: 5,
          goal: "Tsara ranar aikin nesa da raba lokaci da lokacin farawa da tsayawa a sarari.",
          text: [
            "A gida, babu wanda ke wucewa ta teburinku. Ku ne kuke tsara lokacinku. Ku saka lokacin farawa na yau da kullum, hutu da lokacin tsayawa, kuma ku faɗa wa mutanen da kuke zaune tare lokacin da kuke aiki.",
            "Raba lokaci (time-blocking) yana taimakawa: ku raba ranar zuwa ɓangarori don aiki mai mayar da hankali, saƙonni, taro da hutu. Ku tambayi AI: \"Ka yi mini tsarin raba lokaci na ranar aikina daga ƙarfe 9 zuwa 5 tare da hutun abincin rana na minti 30. Ayyuka: [jeri]. Ka sa aiki mai mayar da hankali da safe, kuma in duba saƙonni a lokutan da aka ƙayyade.\"",
            "Ku lura da abin da kuka gama. A ƙarshen rana, ku rubuta gajeren bayanin ci gaba. Idan abubuwan da ke ɗauke hankali, kula da yara ko lafiya suna damun ku, ku faɗa wa manajanku da wuri; da yawa suna da hanyoyin taimako idan sun sani."
          ],
          steps: ["Ku saka lokacin farawa, hutu da tsayawa.", "Ku jera ayyukan yau.", "Ku nemi AI tsarin raba lokaci.", "Ku daidaita shi da rayuwarku ta gaske.", "Ku ƙare ranar da gajeren bayanin ci gaba."],
          words: [["Raba lokaci (time-blocking)", "tsara ranarku a ɓangarorin lokaci don wasu ayyuka na musamman."], ["Aiki mai mayar da hankali", "aikin da ake yi ba tare da katsewa ba."]],
          slides: [
            { title: "Ku ne kuke tsara lokacinku", bullets: ["Lokacin farawa, hutu da tsayawa na yau da kullum", "Ku faɗa wa mutanen gidanku lokutan aikinku"] },
            { title: "Raba lokaci (time-blocking)", bullets: ["Aiki mai mayar da hankali, saƙonni, taro, hutu", "AI zai iya rubuta daftarin tsarin"] },
            { title: "Ku ci gaba a kan hanya", bullets: ["Bayanin ci gaba a ƙarshen rana", "Ku faɗa wa manajanku matsaloli da wuri"] }
          ],
          tryIt: "Ku nemi AI tsarin raba lokaci na ranar aiki ta gaske ko ta gwaji, ku daidaita shi, ku bi shi aƙalla rabin rana. Ku rubuta gajeren bayanin ci gaba a ƙarshen rana.",
          youCanNow: "tsara da gudanar da ranar aikin nesa da raba lokaci.",
          quickCheck: [
            { objective: "O5", q: "Mene ne ɓangaren lokaci (time block)?", options: ["Kwamfuta da ta lalace", "Taron da kuka tsallake", "Wani sashe na rana da aka ware don wani nau'in aiki ɗaya", "Wani nau'in kalmar sirri"], answer: 2, why: "Raba lokaci yana raba ranar zuwa ɓangarori don aiki mai mayar da hankali, saƙonni, taro da hutu." },
            { objective: "O5", q: "Tsarin raba lokaci na AI ya sa aiki mai mayar da hankali a ƙarfe 3 na rana, lokacin da yaranku ke dawowa daga makaranta. Me za ku yi?", options: ["Ku mayar da aiki mai mayar da hankali zuwa lokacin da ya fi shiru kuma ya dace da rayuwarku ta gaske", "Ku bi shi daidai yadda yake", "Ku tsallake aiki mai mayar da hankali", "Ku yi aiki har tsakar dare a maimakon haka"], answer: 0, why: "Ku daidaita tsarin AI da rayuwarku ta gaske." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Neman ayyukan nesa na gaske da guje wa zamba",
          minutes: 6,
          goal: "Neman ayyukan nesa a wuraren da aka amince da su da gane zambar aiki-daga-gida.",
          text: [
            "Ku nema a wuraren da aka amince da su: shafukan ayyuka na kamfanoni, sanannun shafukan neman aiki, bankin ayyuka na jiharku (state job bank) da cibiyar American Job Center ta yankinku. Ku yi amfani da matatar \"remote\" (nesa), kuma ku karanta inda aikin ya yarda ku zauna; wasu ayyukan nesa na wasu jihohi ko ƙasashe ne kawai.",
            "Zambar aiki-daga-gida ta zama ruwan dare. Hukumar FTC (hukumar kare masu sayayya ta Amurka) tana gargaɗi game da alƙawarin albashi mai yawa don ɗan aiki kaɗan, neman ku biya kuɗin kayan farawa, horo ko takardar shaida, aiko muku da cak ku saka a banki sannan ku mayar da wani sashe, da sake tura kunshin kaya (reshipping). Masu ɗaukar aiki na gaskiya ba sa karɓar kuɗi daga gare ku don ku sami aiki.",
            "Ku duba kafin ku bayar da bayanai: ku nemo kamfanin da kanku, ku tabbata imel ɗin ya fito daga ainihin domain na kamfanin (ba adireshin imel na kyauta ba), kuma ku yi hankali da hirar neman aiki da ake yi ta saƙon tes kawai. Kada ku bayar da lambar banki ko ta Social Security sai kun sami tayin aikin da aka tabbatar. Ku kai rahoton zamba a ReportFraud.ftc.gov."
          ],
          steps: ["Ku nema a wuraren neman aiki da aka amince da su da matatar remote.", "Ku duba inda aikin ya yarda ku zauna.", "Ku nemo kamfanin da kanku.", "Ku lura da kuɗin biya, cak da za a saka, sake tura kaya da hira ta tes kawai.", "Ku bayar da lambobin sirri sai bayan tayin aikin da aka tabbatar."],
          words: [["Zambar aiki-daga-gida", "aikin nesa na bogi da aka yi don satar kuɗi ko bayanai."], ["Domain", "sashen adireshin imel ko na shafin intanet bayan @ ko www, kamar company.com."]],
          slides: [
            { title: "Inda za ku nema", bullets: ["Shafukan ayyuka na kamfanoni da sanannun shafukan aiki", "Bankin ayyuka na jiha da American Job Centers", "Ku duba inda aikin ya yarda ku zauna"] },
            { title: "Alamun zamba (FTC)", bullets: ["Albashi mai yawa don ɗan aiki kaɗan", "Biyan kuɗin kaya, horo ko takardar shaida", "Saka cak a banki ku mayar da kuɗi"] },
            { title: "Ku duba kafin ku bayar da bayanai", bullets: ["Ku nemo kamfanin da kanku", "Ainihin domain na imel ɗin kamfani", "Lambobin sirri sai bayan tayin aikin da aka tabbatar"] }
          ],
          sources: [{ name: "FTC: Job scams", url: "https://consumer.ftc.gov/articles/job-scams" }, { name: "ReportFraud.ftc.gov", url: "https://reportfraud.ftc.gov/" }],
          tryIt: "Aikin ƙarshe: ku nemo tallar aikin nesa ta gaske guda ɗaya, ku duba ta da alamun zamba, ku ajiye ta. Ku ƙara ta da jerin abubuwan wurin aikinku, gwajin kiran bidiyo, saƙonni uku, atisayen takardar da ake rabawa da tsarin raba lokaci don kammala kayan shirin aikin nesa.",
          youCanNow: "shirya kanku, sadarwa, aiki tare da tsara lokaci don aikin nesa, da neman ayyukan nesa na gaske lafiya.",
          quickCheck: [
            { objective: "O6", q: "Wace ce alamar gargaɗin zambar aiki-daga-gida?", options: ["Tallar aikin ta faɗi inda za ku iya zama", "Mai ɗaukar ma'aikata yana aika imel daga domain na kamfanin", "Kamfanin yana da shafin ayyuka", "Dole ku biya kuɗin kayan farawa kafin ku fara"], answer: 3, why: "Masu ɗaukar aiki na gaskiya ba sa karɓar kuɗi daga gare ku don ku sami aiki." },
            { objective: "O6", q: "Wani \"kamfani\" ya ba ku aikin nesa bayan hira ta saƙon tes kawai, kuma yana neman lambar bankinku yanzu. Me za ku yi?", options: ["Ku aika don a biya ku da sauri", "Kada ku bayar; ku nemo kamfanin da kanku, ku kai rahoto idan zamba ce", "Ku aika lambar Social Security ɗinku a maimakon haka", "Ku ce su turo muku cak ta tes"], answer: 1, why: "Hira ta tes kawai da neman lambar banki da wuri alamun gargaɗi ne; ku bayar da lambobin sirri sai bayan tayin aikin da aka tabbatar." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Yin aiki da kyau da neman ayyukan nesa",
        questions: [
          { objective: "O4", q: "A Google Docs, wane yanayi (mode) ne ke sa gyaranku ya bayyana a matsayin shawarwari don wasu su amince?", options: ["Delete mode", "Print mode", "Night mode", "Suggesting mode"], answer: 3, why: "Suggesting mode yana nuna gyare-gyare don a amince da su." },
          { objective: "O4", q: "Me tarihin sigogi (version history) ke bar ku yi?", options: ["Gani ko dawo da sigogin fayil da suka gabata", "Goge fayil har abada", "Raba kalmomin sirri", "Canja sunanku"], answer: 0, why: "Yana ajiye rikodin sigogin da suka gabata." },
          { objective: "O5", q: "Mene ne raba lokaci (time-blocking)?", options: ["Toshe shafukan intanet", "Kashe agogo", "Tsara ranarku a ɓangarori don wasu ayyuka na musamman", "Aiki ba tare da hutu ba"], answer: 2, why: "Ɓangarorin lokaci suna kare lokacin aiki mai mayar da hankali." },
          { objective: "O6", q: "Wani \"aikin nesa\" yana neman ku sayi kayan farawa na $200 kafin ku fara. A cewar FTC, wannan:", options: ["Hanyar ɗaukar aiki ta yau da kullum ce", "Haraji ne", "Wani amfani ne", "Alamar gargaɗin zamba ce"], answer: 3, why: "Masu ɗaukar aiki na gaskiya ba sa karɓar kuɗi daga gare ku don ku sami aiki." },
          { objective: "O6", q: "Mai ɗaukar ma'aikata ya aiko imel daga adireshin imel na kyauta, kuma yana son yin hira ta saƙon tes kawai. Ya kamata ku:", options: ["Aika bayanan bankinku", "Biya kuɗi", "Nemo kamfanin da kanku, kuma ku yi hankali", "Ƙi duk ayyuka har abada"], answer: 2, why: "Waɗannan alamu ne da aka saba gani na aikin bogi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Ƙwarewar Aiki daga Gida tare da AI",
    questions: [
      { objective: "O1", q: "Aikin nesa yana nufin:", options: ["Aiki da dare kawai", "Yin aikinku daga wajen ofishin mai ɗaukar ku aiki", "Aiki ba tare da albashi ba", "Amfani da rimot na talabijin"], answer: 1, why: "Aiki ne da ake yi daga gida ko wani wuri dabam." },
      { objective: "O1", q: "Wane abu ne ya fi muhimmanci don kiran bidiyo?", options: ["Belun kunne ko earbuds masu makirufo", "Kujera mai tsada", "Talabijin na biyu", "Firinta"], answer: 0, why: "Sauti mai kyau shi ne ya fi muhimmanci a kira." },
      { objective: "O1", q: "Ta yaya za ku duba ko intanet ɗinku yana da isasshen sauri?", options: ["Ku yi tsammani", "Ku tambayi AI", "Ku yi gwajin saurin intanet kyauta", "Ku ƙidaya manhajojinku"], answer: 2, why: "Gwajin saurin intanet yana auna shi." },
      { objective: "O1", q: "Wanne ne ke kare asusun aikinku?", options: ["Shiga mataki biyu", "Raba kalmar sirrinku da iyali", "Rubuta ta a kan allo", "Kashe sabuntawa"], answer: 0, why: "Shiga mataki biyu yana hana yawancin hare-hare." },
      { objective: "O2", q: "Ta yaya kuke yawan shiga kiran bidiyo na aiki?", options: ["Ku kira kowace lamba", "Ku jira wani ya ziyarce ku", "Ku aika wasiƙa ta gidan waya", "Ku danna hanyar haɗi a cikin imel ko gayyatar kalanda"], answer: 3, why: "Gayyata tana ɗauke da hanyar haɗin taro." },
      { objective: "O2", q: "Idan ba kuna magana a kira, yawanci ya kamata ku:", options: ["Kunna waƙa", "Bar muryarku a kashe (mute)", "Fita daga kiran", "Ƙara ƙarar sauti"], answer: 1, why: "Kashe murya yana hana hayaniya daga bayanku." },
      { objective: "O2", q: "Nuna allo (screen share) yana nufin:", options: ["Fasa allonku", "Nuna allon kwamfutarku ga sauran mutanen da ke cikin kiran", "Sayen sabon allo", "Ɓoye allonku"], answer: 1, why: "Yana bar wasu su ga abin da kuke gani." },
      { objective: "O3", q: "Babbar ƙwarewa a aikin nesa ita ce:", options: ["Rubutu da manyan baƙaƙe kawai", "Dogayen kiran waya", "Guje wa saƙonni", "Rubutu a sarari"], answer: 3, why: "Yawancin sadarwar aikin nesa a rubuce take." },
      { objective: "O3", q: "Saƙon aiki mai sarari:", options: ["Yana fara da babban abin kuma yana faɗin abin da kuke buƙata da lokacin da kuke buƙatarsa", "Yana ɓoye babban abin a ƙarshe", "Yana da tsawo yadda zai yiwu", "Ba shi da wata buƙata"], answer: 0, why: "Saƙonni masu sarari suna samun amsa da sauri." },
      { objective: "O3", q: "Wanne ne kada a taɓa saka shi a kayan AI da mai ɗaukar ku aiki bai amince da shi ba?", options: ["Saƙon gwaji game da makara", "Tambayoyin nahawu na gama-gari", "Bayanan abokan ciniki", "Ranar hutun ƙasa"], answer: 2, why: "Dole a kare bayanan abokan ciniki." },
      { objective: "O3", q: "Za ku makara zuwa lokacin aikinku. Mataki mafi kyau:", options: ["Kada ku faɗi komai", "Ku shiga a makare ba tare da bayani ba", "Ku bar aikin", "Ku aika gajeren saƙon sanarwa kafin lokacin farawarku"], answer: 3, why: "Sanarwa da wuri alama ce ta ƙwarewa." },
      { objective: "O4", q: "Sharhi (comment) a takardar da ake rabawa:", options: ["Yana goge takardar", "Yana hana kowa shiga", "Yana ƙara rubutu ba tare da canja rubutun takardar ba", "Yana buga ta"], answer: 2, why: "Sharhi yana tambaya ko ba da shawara ba tare da gyara ba." },
      { objective: "O4", q: "A Word, abin da ke nuna gyaranku don wasu su duba shi ne:", options: ["Word Count", "Track Changes", "Spell Check", "Page Color"], answer: 1, why: "Track Changes yana rikodin gyare-gyare." },
      { objective: "O4", q: "Kafin ku canja saitin rabawar takarda zuwa \"anyone with the link\", ya kamata ku:", options: ["Tambayi mai takardar", "Yi kawai", "Saka hanyar haɗin a fili a intanet", "Goge takardar"], answer: 0, why: "Saitunan rabawa suna kare bayanai." },
      { objective: "O5", q: "Lokacin tsayawa na yau da kullum idan kuna aiki daga gida yana taimakawa:", options: ["Babu komai", "Ku ƙara yin awoyi ba tare da biya ba", "Daidaita rayuwar aiki da ta gida", "Saurin intanet ɗinku"], answer: 2, why: "Iyakoki suna hana gajiya mai tsanani (burnout)." },
      { objective: "O5", q: "Idan kula da yara yana sa aiki ya yi wuya, mataki mafi kyau shi ne:", options: ["Ku faɗa wa manajanku da wuri", "Ku ɓoye shi", "Ku daina shiga", "Ku rubuta bayanin ci gaba na ƙarya"], answer: 0, why: "Manajoji za su iya taimakawa idan sun sani da wuri." },
      { objective: "O6", q: "Wasu ayyukan nesa suna ɗaukar mutanen da:", options: ["Ba su da kwamfuta", "Ba sa taɓa amfani da imel", "Suke aiki kyauta", "Suke zaune a wasu jihohi ko ƙasashe kawai"], answer: 3, why: "Ku duba dokokin wuri a cikin tallar aikin." },
      { objective: "O6", q: "Mai ɗaukar ma'aikata na ainihin kamfani yawanci yana aika imel daga:", options: ["Wani adireshin imel na kyauta", "Domain na kamfanin da kansa", "Manhajar saƙon tes kawai", "Saƙon sirri (DM) na kafofin sada zumunta kawai"], answer: 1, why: "Domain na kamfani alama ce ta mai ɗaukar ma'aikata na gaske." },
      { objective: "O6", q: "Neman ku sake tura kunshin kaya daga gida, a cewar FTC, shi ne:", options: ["Aikin nesa na yau da kullum", "Wani sashe na zamba", "Shirin gwamnati", "Lafiya idan yana biya da kyau"], answer: 1, why: "Ayyukan sake tura kaya zamba ce da aka sani." },
      { objective: "O6", q: "A ina ake kai rahoton zambar aiki a Amurka?", options: ["Imel ɗin ɗan damfarar", "Wurin sharhi a intanet", "Babu inda", "ReportFraud.ftc.gov"], answer: 3, why: "FTC tana tattara rahotannin zamba." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      1,
      3,
      5,
      6,
      8,
      9,
      11,
      12,
      14,
      17
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Wurin aiki da fasaha",
        objective: "O1",
        notYet: "Babu gwajin saurin intanet, ko shiga mataki biyu ko makullin allo a kashe suke.",
        meets: "Hoto ko jerin abubuwan wurin aiki tare da gwajin saurin intanet, belun kunne, shiga mataki biyu da makullin allo.",
        exceeds: "Haske yana gaban mai koyo, kuma akwai shirin madadi idan intanet ya ɗauke."
      },
      {
        name: "Shiri don kiran bidiyo",
        objective: "O2",
        notYet: "Ba a yi gwajin kiran ba, ko ba a gano maɓallan kashe murya da kyamara ba.",
        meets: "Gwajin kira na minti ɗaya ko jerin abubuwa da ke nuna sunan da ake gani, kashe murya, kyamara da hira.",
        exceeds: "An kuma gwada nuna allo da gyara matsalar sauti."
      },
      {
        name: "Saƙonnin aiki",
        objective: "O3",
        notYet: "Saƙonni ƙasa da uku, ko wani saƙo ya ɓoye babban abin ko yana da bayanan sirri.",
        meets: "Bayanin ci gaba, tambaya ga manaja da saƙon makara, kowanne gajere kuma yana fara da babban abin.",
        exceeds: "Kowanne yana faɗin abin da ake buƙata da lokacin da ake buƙatarsa, kuma yana kama da yadda mai koyo yake magana."
      },
      {
        name: "Takardar da ake rabawa",
        objective: "O4",
        notYet: "Babu sharhi ko shawarar gyara a cikin takardar.",
        meets: "Sharhi da shawarar gyara a cikin takardar da ake rabawa.",
        exceeds: "An kuma buɗe tarihin sigogi, kuma ba a canja saitunan rabawa ba."
      },
      {
        name: "Tsarin raba lokaci",
        objective: "O5",
        notYet: "Babu lokacin farawa, hutu ko tsayawa.",
        meets: "Tsarin rana ɗaya mai lokacin farawa, hutu da tsayawa, da ɓangarori don ayyuka.",
        exceeds: "Ya dace da rayuwar mai koyo ta gaske kuma ya ƙare da bayanin ci gaba."
      },
      {
        name: "An duba tallar aiki",
        objective: "O6",
        notYet: "Ba a duba tallar aikin don alamun zamba ba.",
        meets: "An duba tallar aikin nesa ta gaske guda ɗaya da alamun gargaɗi, kuma an nemo kamfanin.",
        exceeds: "An kuma rubuta inda aikin ya yarda mutane su zauna da domain na imel da aka yi amfani da shi."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka nemi aƙalla aikin nesa ɗaya cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka sami aikin nesa ko hirar neman aikin nesa cikin kwanaki 90",
      "Masu koyo da suka ce sun gane kuma sun guje wa zambar aiki-daga-gida"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta mai intanet (kwamfutar ɗakin karatu ko ta shirin ta isa don atisaye)",
      "Belun kunne ko earbuds masu makirufo",
      "Asusun kyauta na kayan bidiyo (Zoom, Teams ko Google Meet) da Google Docs ko Microsoft 365 ta intanet",
      "Mataimakin AI kyauta (ChatGPT, Microsoft Copilot ko Google Gemini)",
      "Kusan minti 60 gaba ɗaya, a gajerun zama: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku yi gwajin farko tare, sannan ku yi babi ɗaya a kowane zama; ku shirya kiran bidiyo na atisaye na gaske don kowa ya shiga, ya kashe murya, kuma ya nuna allo.",
      "Ku shirya takardar atisaye ɗaya da ake rabawa don masu koyo su yi sharhi da shawarar gyara a aikin juna.",
      "Ku nuna misalan gaske na tallace-tallacen zambar aiki-daga-gida, ku sa ƙungiyar ta nemo alamun gargaɗi.",
      "Ku tunatar da masu koyo da ke kan parole ko probation su bi duk wani sharaɗi game da amfani da intanet, kuma su duba cewa aikin nesa ya dace da su.",
      "Ku ba da maki ga kayan ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
