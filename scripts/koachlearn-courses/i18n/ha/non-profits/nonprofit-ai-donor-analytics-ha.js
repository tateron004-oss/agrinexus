"use strict";

// Koach Learn course, Hausa (ha) translation of non-profits/nonprofit-ai-donor-analytics.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "nonprofit-ai-donor-analytics-ha",
  lang: "ha",
  translationOf: "nonprofit-ai-donor-analytics",
  category: "Non Profits",
  name: "Nazarin Bayanan Masu Bayar da Gudummawa da AI",
  skills: "Shirya jadawalin masu gudummawa lafiya, Auna komowar masu gudummawa da matsakaicin gudummawa, Raba masu gudummawa rukuni-rukuni, Amfani da AI don bayanin lambobi, Mayar da sakamako tsarin tara kuɗi",
  outcome: "ɗaukar jadawalin masu bayar da gudummawa da aka cire sunayensu, lissafa yawan komowar masu gudummawa, matsakaicin gudummawa da rukunonin masu gudummawa, amfani da mataimakin AI don bayanin ma'anar lambobin, da rubuta tsari mai shafi ɗaya don roƙon gudummawa na gaba.",
  about: [
    "Wannan kwas ɗin na ma'aikatan ƙungiyoyin sa-kai da na addini ne, jami'an tara kuɗi, membobin kwamitin gudanarwa da masu aikin sa-kai da ke ajiye jerin masu bayar da gudummawa, kuma suke son tara kuɗi fiye da haka ta hanyar fahimtar jerin.",
    "Za ku koyi wasu lambobi masu sauƙi game da masu gudummawa, yadda ake lissafa su a jadawali (spreadsheet) kamar Google Sheets ko Microsoft Excel, yadda ake amfani da AI don bayaninsu da zana su ba tare da bayyana bayanan sirrin kowa ba, da yadda ake mayar da abin da kuka gano aiki.",
    "Kowane darasi yana ɗaukar kusan minti biyar. Ku karanta darasin, ku kalli hotunan bayani (slides), sannan ku yi aikin \"Gwada yanzu\". Akwai ɗan gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku yi kwafin jerin masu gudummawarku mai aminci (ko jerin atisaye na Darasi na 1) inda aka maye gurbin sunaye da bayanan tuntuɓa da lambobin shaida (ID). Ku lissafa yawan komowa da matsakaicin gudummawa, ku raba masu gudummawa aƙalla rukuni uku, ku nemi mataimakin AI ya bayyana sakamakon kuma ya ba da shawarar mataki ɗaya ga kowane rukuni, sannan ku rubuta tsarin roƙon gudummawa mai shafi ɗaya wanda ku da kanku kuka duba.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Ma'aikatan ƙungiyoyin sa-kai da na addini, jami'an tara kuɗi, membobin kwamitin gudanarwa da masu aikin sa-kai da ke ajiye jerin masu bayar da gudummawa, kuma suke son tara kuɗi fiye da haka ta hanyar fahimtar jerin.",
    startingPoint: "Suna ajiye bayanan masu gudummawa a jadawali ko tsarin masu gudummawa, kuma suna aika roƙon gudummawa. Da yawa ba su taɓa lissafa yawan komowa ba, ko raba masu gudummawa rukuni-rukuni, ko amfani da AI don bayanin lambobinsu ba.",
    gap: "Idan ba a san wanda ke dawowa da wanda ke ɓacewa ba, ƙungiyoyi suna aika roƙo iri ɗaya ga kowa, kuma suna rasa masu gudummawar da za su iya riƙewa. Masu koyo suna buƙatar mayar da bayanansu wasu muhimman lambobi da tsari, ta amfani da AI lafiya ba tare da bayyana bayanan masu gudummawa ba.",
    constraints: [
      "Sirri: ana cire sunaye, bayanan tuntuɓa da bayanan kula kafin kowane nazari; jimillar lambobi kaɗai ake sakawa a AI",
      "Ƙwarewar jadawali ta asali: SUM, AVERAGE, jerawa (sort), tacewa (filter) da zane mai sauƙi",
      "AI yana iya yin kuskuren lissafi da ƙirƙirar lambobin kwatantawa, don haka ana sake duba kowace lamba",
      "Dokokin tuntuɓar masu gudummawa da na ficewa (opt-out), da manufar sirrin ƙungiyar, suna aiki",
      "Lokaci: kusan minti 60 gaba ɗaya, a darussa na minti 5"
    ],
    prerequisites: "Amfani da jadawali na asali. Kwas ɗin \"Introduction to AI for Nonprofits\" (Gabatarwa ga AI don Ƙungiyoyin Sa-kai) zai taimaka."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku jerin masu gudummawa", action: "yin kwafin aiki marar suna inda aka maye gurbin sunaye da ID kuma aka goge bayanan tuntuɓa", standard: "kuna barin ID, ranar gudummawa, adadi da kamfen kawai" },
    { id: "O2", condition: "Idan aka ba ku jadawalin masu gudummawa marar suna", action: "lissafa jimillar kuɗin da aka tara, matsakaicin gudummawa da yawan komowar masu gudummawa", standard: "kowace lamba daidai" },
    { id: "O3", condition: "Idan kuna da ID na masu gudummawarku da tarihin gudummawarsu", action: "raba masu gudummawa zuwa rukunonin Sababbi, Masu maimaitawa, Waɗanda suka daina da Manya, da ƙidaya kowane rukuni", standard: "kowane ID yana cikin rukuni" },
    { id: "O4", condition: "Idan kuna da jimillar lambobinku", action: "neman mataimakin AI ya bayyana su da kalmomi masu sauƙi, da sake duba duk wani lissafi ko lambar kwatantawa da ya bayar", standard: "kuna saka jimillar lambobi kawai, ba jerin masu gudummawa ba" },
    { id: "O5", condition: "Idan kuna da ƙidayar kowane rukuni", action: "yin zanen sanduna (bar chart) mai take a sarari a Google Sheets ko Excel", standard: "yana nuna saƙo ɗaya" },
    { id: "O6", condition: "Idan kuna da sakamakonku", action: "rubuta tsarin roƙon gudummawa mai shafi ɗaya da mataki ɗaya, wanda zai yi shi da rana ga kowane rukuni", standard: "kuna amfani da madadi a wurin sunayen masu gudummawa, kuma darektanku ya duba shi" }
  ],
  chapters: [
    {
      name: "Babi na 1: Ku san lambobin masu gudummawarku",
      lessons: [
        {
          objectives: ["O1"],
          title: "Shirya bayanan masu gudummawa lafiya",
          minutes: 5,
          goal: "Yin kwafi mai tsabta, marar suna, na jerin masu gudummawa wanda ke da aminci don nazari.",
          text: [
            "Nazarin bayanan masu gudummawa yana nufin duba bayanan gudummawarku don sanin wanda ke bayarwa, nawa, sau nawa, da ko suna dawowa. Jadawali kawai kuke buƙata.",
            "Sunayen masu gudummawa, adireshinsu, imel ɗinsu da adadin gudummawarsu bayanan sirri ne, kuma dole a kare su. Kafin ku yi nazarin komai da AI, ku yi kwafi ku maye gurbin kowane suna da ID kamar D001. Ku goge adireshi, lambobin waya, imel da bayanan kula. Ku bar ID, ranar gudummawa, adadin gudummawa kawai, da kamfen ko asusun kuɗi idan kuna da shi.",
            "Ku ajiye ainihin jerin a tsarin masu gudummawarku ko a fayil mai kariya. Kwafin marar suna shi ne kuke aiki da shi. Ku bi manufar sirrin ƙungiyarku da duk alƙawuran da kuka yi wa masu gudummawa."
          ],
          steps: ["Ku fitar ko ku kwafa jerin masu gudummawarku zuwa jadawali.", "Ku ajiye wani kwafi daban mai suna \"donors-anonymous\".", "Ku maye gurbin kowane suna da ID kamar D001, D002.", "Ku goge adireshi, lambobin waya, imel da bayanan kula.", "Ku bar ID, ranar gudummawa, adadi da kamfen kawai."],
          words: [["Nazarin bayanan masu gudummawa (donor analytics)", "duba bayanan gudummawa don sanin wanda ke bayarwa, nawa, sau nawa, da ko suna dawowa."], ["Marar suna (anonymous)", "an cire sunaye da bayanan tuntuɓa don kada kowa ya gane wane ne wane."], ["Jadawali (spreadsheet)", "tebur mai layuka da ginshiƙai, kamar Google Sheets ko Microsoft Excel."]],
          slides: [
            { title: "Mene ne nazarin bayanan masu gudummawa", bullets: ["Wa ke bayarwa, nawa, sau nawa", "Ko masu gudummawa suna dawowa", "Jadawali kawai kuke buƙata"] },
            { title: "Ku fara kare masu gudummawa", bullets: ["Ku yi kwafi daban", "Ku maye gurbin sunaye da ID kamar D001", "Ku goge adireshi, waya, imel, bayanan kula"] },
            { title: "Ku bar waɗannan kawai", bullets: ["ID na mai gudummawa", "Ranar gudummawa da adadi", "Kamfen ko asusun kuɗi"] }
          ],
          tryIt: "Ku yi jerin atisaye a jadawali mai layuka 12: ID (D001 zuwa D010, wasu sun maimaitu), ranar gudummawa (bara da bana) da adadi. Ko kuma ku yi kwafin marar suna na ainihin jerinku ta bin matakan.",
          youCanNow: "shirya jerin masu gudummawa da ke da aminci don nazari, an cire sunaye da bayanan tuntuɓa.",
          quickCheck: [
            { objective: "O1", q: "Me za ku goge daga kwafin marar suna?", options: ["Adireshi, lambobin waya, imel da bayanan kula", "Adadin gudummawa", "Ranakun gudummawa", "ID na masu gudummawa"], answer: 0, why: "Ku goge bayanan tuntuɓa da bayanan kula; ku bar ID, rana, adadi da kamfen." },
            { objective: "O1", q: "Wani mai aikin sa-kai yana son nazarin ainihin jerin masu gudummawa a kwamfutarsa ta kansa. Me za ku yi?", options: ["Ku tura masa ainihin jerin ta imel", "Ku ba shi kwafin marar suna, ku bar ainihin jerin a fayil mai kariya", "Ku buga masa ainihin jerin a takarda", "Ku saka masa ainihin jerin a AI"], answer: 1, why: "Ku kare ainihin jerin; ku yi aiki da kwafin marar suna." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Lambobi uku da kowace ƙungiyar sa-kai ya kamata ta sani",
          minutes: 6,
          goal: "Lissafa jimillar kuɗin da aka tara, matsakaicin gudummawa da yawan komowar masu gudummawa.",
          text: [
            "Jimillar kuɗin da aka tara ita ce dukkan gudummawa a haɗe. Matsakaicin gudummawa shi ne jimillar kuɗin da aka tara a raba da yawan gudummawa. A jadawali, =SUM() yana haɗa ginshiƙi, =AVERAGE() kuma yana ba da matsakaici.",
            "Yawan komowar masu gudummawa (retention rate) yana nuna muku nawa ne daga cikin masu gudummawar bara suka sake bayarwa bana. Ku ƙidaya masu gudummawar da suka bayar bara. Ku ƙidaya nawa daga cikinsu suka bayar bana ma. Ku raba lamba ta biyu da ta farko, ku ninka da 100. Idan masu gudummawa 40 sun bayar bara kuma 18 daga cikinsu sun sake bayarwa, komowa ita ce 18 / 40 = kashi 45 cikin 100.",
            "Komowa tana da muhimmanci domin riƙe mai gudummawa yawanci ba ya kashe kuɗi kamar neman sabo. Ƙarancin komowa alama ce cewa ku ƙara gode wa masu gudummawa da sanar da su labari."
          ],
          steps: ["Jimillar kuɗin da aka tara: =SUM() na ginshiƙin adadi.", "Matsakaicin gudummawa: =AVERAGE() na ginshiƙin adadi.", "Ku ƙidaya masu gudummawa daban-daban da suka bayar bara.", "Ku ƙidaya nawa daga cikinsu suka bayar bana ma.", "Komowa = masu maimaitawa na bana / masu gudummawar bara x 100."],
          words: [["Matsakaicin gudummawa (average gift)", "jimillar kuɗin da aka tara a raba da yawan gudummawa."], ["Yawan komowa (retention rate)", "kashi nawa cikin 100 na masu gudummawar bara suka sake bayarwa bana."], ["Dabarar lissafi (formula)", "lissafin da ake rubutawa a akwatin jadawali, yana farawa da =."]],
          slides: [
            { title: "Jimilla da matsakaici", bullets: ["Jimillar kuɗin da aka tara: =SUM(amounts)", "Matsakaicin gudummawa: =AVERAGE(amounts)"] },
            { title: "Yawan komowa", bullets: ["Masu gudummawar bara da suka sake bayarwa", "A raba da dukkan masu gudummawar bara", "Ninka da 100 = kashi cikin 100"] },
            { title: "Misali", bullets: ["Masu gudummawa 40 a bara", "18 daga cikinsu sun sake bayarwa", "18 / 40 = komowa kashi 45 cikin 100"] },
            { title: "Dalilin da yake da muhimmanci", bullets: ["Riƙe masu gudummawa ya fi arha da neman sababbi", "Ƙarancin komowa = ku ƙara godiya da sanar da labari"] }
          ],
          tryIt: "Da jerin atisayenku ko na marar suna, ku lissafa jimillar kuɗin da aka tara, matsakaicin gudummawa da yawan komowa. Ku rubuta lambobin uku.",
          youCanNow: "lissafa jimillar kuɗin da aka tara, matsakaicin gudummawa da yawan komowar masu gudummawa a jadawali.",
          quickCheck: [
            { objective: "O2", q: "Wace dabarar lissafi ce ke haɗa ginshiƙin gudummawa?", options: ["=AVERAGE()", "=COUNT()", "=SUM()", "=IF()"], answer: 2, why: "=SUM() yana haɗa ginshiƙi; =AVERAGE() yana ba da matsakaici." },
            { objective: "O2", q: "Masu gudummawa 20 sun bayar bara, kuma 10 daga cikinsu sun sake bayarwa. Mene ne yawan komowarku?", options: ["Kashi 10 cikin 100", "Kashi 20 cikin 100", "Kashi 200 cikin 100", "Kashi 50 cikin 100"], answer: 3, why: "10 / 20 = 0.5, a ninka da 100 = kashi 50 cikin 100." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Raba masu gudummawa rukuni-rukuni",
          minutes: 5,
          goal: "Raba masu gudummawa zuwa rukunoni masu sauƙi don kowane rukuni ya sami saƙon da ya dace.",
          text: [
            "Rukuni (segment) shi ne taron masu gudummawa da suka yi kama da juna ta wata hanya mai muhimmanci. Rukunoni daban-daban suna buƙatar saƙonni daban-daban.",
            "Rukunoni masu sauƙi don farawa: Sababbi (gudummawarsu ta farko a bana), Masu maimaitawa (sun bayar bara da bana), Waɗanda suka daina (sun bayar bara amma ba bana ba), da Manya (gudummawa sama da adadin da kuka zaɓa, kamar kashi 10 cikin 100 na sama).",
            "Ku ƙara ginshiƙi mai suna Segment (Rukuni), ku cike shi ga kowane ID. Kuna iya amfani da tacewa (filter) ko jerawa (sort) na jadawalin don haɗa su. Ku ƙidaya masu gudummawa nawa ne a kowane rukuni."
          ],
          steps: ["Ku ƙara ginshiƙi mai suna Segment.", "Ku sa kowane ID a Sababbi, Masu maimaitawa, Waɗanda suka daina ko Manya.", "Ku yi amfani da jerawa ko tacewa don haɗa su.", "Ku ƙidaya masu gudummawa a kowane rukuni."],
          words: [["Rukuni (segment)", "taron masu gudummawa da suka yi kama da juna ta wata hanya mai muhimmanci, kamar sababbi ko waɗanda suka daina."], ["Wanda ya daina (lapsed donor)", "wanda ya bayar a baya amma bai bayar ba bana."]],
          slides: [
            { title: "Mene ne rukuni", bullets: ["Taron masu gudummawa masu kama da juna", "Kowane rukuni yana samun saƙon da ya dace"] },
            { title: "Rukunoni huɗu na farawa", bullets: ["Sababbi: gudummawa ta farko a bana", "Masu maimaitawa: sun bayar bara da bana", "Waɗanda suka daina: sun bayar bara, ba bana ba", "Manya: sama da adadin da kuka zaɓa"] },
            { title: "A cikin jadawali", bullets: ["Ku ƙara ginshiƙin Segment", "Ku jera ko ku tace don haɗa su", "Ku ƙidaya kowane rukuni"] }
          ],
          tryIt: "Ku ƙara ginshiƙin Segment a jerinku. Ku sa kowane ID a rukuninsa, ku ƙidaya nawa ne Sababbi, Masu maimaitawa, Waɗanda suka daina da Manya.",
          youCanNow: "raba masu gudummawa zuwa rukunoni da ƙidaya kowane rukuni.",
          quickCheck: [
            { objective: "O3", q: "Wane rukuni ne mai gudummawa da ya bayar bara da bana?", options: ["Masu maimaitawa", "Sababbi", "Waɗanda suka daina", "Manya"], answer: 0, why: "Masu maimaitawa sun bayar bara da bana." },
            { objective: "O3", q: "Kuna son ganin dukkan waɗanda suka daina a wuri ɗaya. Me za ku yi a jadawalin?", options: ["Ku sake rubuta su a sabon shafi", "Ku yi amfani da tacewa ko jerawa a ginshiƙin Segment", "Ku goge kowa sai su", "Ku nemi AI ya yi tsammanin su"], answer: 1, why: "Ku yi amfani da tacewa ko jerawa na jadawalin don haɗa su." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Ku san lambobin masu gudummawarku",
        questions: [
          { objective: "O1", q: "Kafin ku yi nazarin bayanan masu gudummawa da AI, me ya kamata ku yi?", options: ["Ku saka dukkan jerin tare da sunaye", "Ku tura shi ga masu aikin sa-kai ta imel", "Ku yi kwafi inda aka maye gurbin sunaye da ID kuma aka goge bayanan tuntuɓa", "Ku saka shi a intanet"], answer: 2, why: "Kwafin marar suna yana kare bayanan sirrin masu gudummawa." },
          { objective: "O2", q: "Masu gudummawa 40 sun bayar bara, kuma 18 daga cikinsu sun sake bayarwa bana. Mene ne yawan komowa?", options: ["Kashi 18 cikin 100", "Kashi 40 cikin 100", "Kashi 45 cikin 100", "Kashi 58 cikin 100"], answer: 2, why: "18 a raba da 40 shi ne 0.45, wato kashi 45 cikin 100." },
          { objective: "O2", q: "Wace dabarar lissafi ta jadawali ce ke ba da matsakaicin gudummawa?", options: ["=COUNT()", "=TODAY()", "=MAX()", "=AVERAGE()"], answer: 3, why: "=AVERAGE() yana raba jimilla da yawan gudummawa." },
          { objective: "O3", q: "Wani mai gudummawa ya bayar bara amma bai bayar ba bana. A wane rukuni yake?", options: ["Sababbi", "Waɗanda suka daina", "Masu maimaitawa", "Manya"], answer: 1, why: "Waɗanda suka daina sun bayar a baya amma ba bana ba." },
          { objective: "O2", q: "Me yasa komowa take da muhimmanci?", options: ["AI ne yake buƙatar ta", "Riƙe masu gudummawa yawanci ya fi arha da neman sababbi", "Tana ƙara girman jadawalin", "Ita ce ke ƙayyade harajin"], answer: 1, why: "Komowa mai ƙarfi tana sa gudummawa ta tsaya da ƙarancin kashe kuɗi." }
        ]
      }
    },
    {
      name: "Babi na 2: Daga lambobi zuwa aiki",
      lessons: [
        {
          objectives: ["O4"],
          title: "Amfani da AI don bayanin lambobinku",
          minutes: 5,
          goal: "Neman mataimakin AI ya bayyana lambobin masu gudummawa marasa suna da kalmomi masu sauƙi.",
          text: [
            "Kuna iya saka jimillar lambobinku, ba jerin masu gudummawarku ba, a mataimakin AI kamar ChatGPT, Microsoft Copilot ko Google Gemini, ku tambaye shi ma'anarsu.",
            "Misali: \"Ina gudanar da ƙaramin bankin abinci. Bara masu gudummawa 40, bana 35. Komowa kashi 45 cikin 100. Matsakaicin gudummawa $85. Rukunoni: sababbi 17, masu maimaitawa 18, waɗanda suka daina 22, manya 4. Ka bayyana mini abin da waɗannan lambobi ke nufi da kalmomi masu sauƙi, da tambayoyin da ya kamata in yi a gaba.\"",
            "AI zai iya ba da shawarar dabarun lissafi ko irin zane idan kun makale. Ku duba duk wani lissafi da ya yi da kanku; AI yana iya yin kuskuren lissafi, kuma yana iya ƙirƙirar lambobin kwatantawa da suke kama da na gaske."
          ],
          steps: ["Ku rubuta jimillar lambobinku, ba na kowane mai gudummawa ba.", "Ku faɗi irin ƙungiyarku.", "Ku nemi AI ya bayyana lambobin da kalmomi masu sauƙi.", "Ku tambayi waɗanne tambayoyi ya kamata ku yi a gaba.", "Ku sake duba kowane lissafi da kanku."],
          words: [["Jimillar lambobi (summary numbers)", "jimloli, matsakaita da ƙidaya, ba bayanai game da mutum ɗaya ba."], ["Lambar kwatantawa (benchmark)", "lambar da aka saba don kwatantawa; AI yana iya ƙirƙirar su, don haka ku duba majiyar."]],
          slides: [
            { title: "Ku raba jimloli, ba mutane ba", bullets: ["Jimloli, matsakaita, ƙidaya", "Kada ku taɓa sa sunaye ko gudummawa ɗaya da suna"] },
            { title: "Prompt mai kyau", bullets: ["Aikin da ƙungiyarku take yi", "Jimillar lambobinku", "\"Ka bayyana da kalmomi masu sauƙi; me zan tambaya a gaba?\""] },
            { title: "Ku duba AI", bullets: ["Ku sake yin lissafinsa da kanku", "Ku yi hankali da lambobin kwatantawa", "Ku tambayi daga ina lamba ta fito"] }
          ],
          tryIt: "Ku saka jimillar lambobinku kawai (jimloli, komowa, matsakaicin gudummawa, ƙidayar rukunoni) a mataimakin AI, ku nemi ya bayyana su kuma ya ba da shawarar tambayoyi uku da za ku yi a gaba.",
          youCanNow: "amfani da mataimakin AI don bayanin lambobin masu gudummawa ba tare da bayyana bayanan sirrin kowane mai gudummawa ba.",
          quickCheck: [
            { objective: "O4", q: "Ban da bayanin lambobi, me kuma AI zai iya taimakawa da shi a wannan darasi?", options: ["Nemo adireshin gidajen masu gudummawa", "Yanke adadin gudummawa ga masu gudummawa", "Ba da shawarar dabarun lissafi ko irin zane", "Aika roƙon gudummawa da kansa"], answer: 2, why: "AI zai iya ba da shawarar dabarun lissafi ko irin zane idan kun makale." },
            { objective: "O4", q: "AI ya ce matsakaicin gudummawarku $95 ne, amma jadawalinku ya ce $85. Me za ku yi?", options: ["Ku yi amfani da $95", "Ku yi amfani da matsakaicin duka biyun", "Ku nemi AI ya yarda da ku", "Ku sake yin lissafin da kanku, ku yi amfani da lambar da ta yi daidai"], answer: 3, why: "AI yana iya yin kuskuren lissafi, don haka ku duba lissafinsa da kanku." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Yin zane mai sauƙi",
          minutes: 4,
          goal: "Yin zane ɗaya da ke nuna rukunonin masu gudummawarku a sarari.",
          text: [
            "Zane yana taimaka wa kwamitin gudanarwa da ƙungiyarku su ga labarin da sauri. Zanen sanduna (bar chart) yana aiki sosai don rukunoni: sanda ɗaya ga Sababbi, Masu maimaitawa, Waɗanda suka daina da Manya.",
            "A Google Sheets ko Excel, ku sa sunayen rukunoni a ginshiƙi ɗaya, ƙidayarsu kuma a na gaba. Ku zaɓi ginshiƙan biyu, sannan ku yi amfani da menu na Insert don ƙara zane, ku zaɓi zanen sanduna ko na ginshiƙai (column chart).",
            "Ku ba zanen take a sarari kamar \"Masu gudummawarmu na bana bisa rukuni\". Ku sa shi ya zama mai sauƙi: saƙo ɗaya a kowane zane."
          ],
          steps: ["Ku yi ƙaramin tebur: sunan rukuni da ƙidaya.", "Ku zaɓi ginshiƙan biyu.", "Ku saka zane (Insert) ku zaɓi zanen sanduna ko na ginshiƙai.", "Ku ba shi take a sarari.", "Ku duba cewa lambobin sun yi daidai da teburinku."],
          words: [["Zanen sanduna (bar chart)", "zanen da ke kwatanta adadi da sanduna masu tsayi daban-daban."]],
          slides: [
            { title: "Me yasa zane", bullets: ["Kwamitinku yana ganin labarin da sauri", "Saƙo ɗaya a kowane zane"] },
            { title: "Ku yi shi", bullets: ["Tebur: rukuni da ƙidaya", "Ku zaɓi ginshiƙan biyu", "Insert, sannan ku zaɓi zanen sanduna"] },
            { title: "Ku kammala shi", bullets: ["Ku ƙara take a sarari", "Ku duba cewa lambobin sun yi daidai"] }
          ],
          tryIt: "Ku yi zanen sanduna na ƙidayar rukunoninku huɗu mai take a sarari.",
          youCanNow: "yin zanen sanduna a sarari na rukunonin masu gudummawa don ƙungiyarku ko kwamitin gudanarwa.",
          quickCheck: [
            { objective: "O5", q: "Me za ku zaɓa kafin ku saka zane?", options: ["Sunayen rukunoni da ƙidayarsu", "Dukkan jerin masu gudummawa da sunaye", "Take kawai", "Ginshiƙi marar komai"], answer: 0, why: "Ku zaɓi ginshiƙin sunayen rukunoni da na ƙidaya, sannan ku saka zanen." },
            { objective: "O5", q: "Zanenku yana ƙoƙarin nuna rukunoni, girman gudummawa da watanni duka a lokaci ɗaya. Me za ku yi?", options: ["Ku ƙara launuka", "Ku tsaya kan saƙo ɗaya a kowane zane", "Ku cire take", "Ku yi amfani da zanen 3D"], answer: 1, why: "Ku sa shi ya zama mai sauƙi: saƙo ɗaya a kowane zane." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Mayar da sakamako tsarin roƙon gudummawa",
          minutes: 6,
          goal: "Rubuta tsari mai shafi ɗaya da mataki ɗaya ga kowane rukunin masu gudummawa.",
          text: [
            "Lambobi suna da amfani ne kawai idan sun canja abin da kuke yi. Ga kowane rukuni, ku zaɓi mataki ɗaya. Sababbi: maraba mai daɗi da labarin abin da gudummawarsu ta yi. Masu maimaitawa: godiya da gayyatar bayarwa a kowane wata. Waɗanda suka daina: wasiƙar \"mun yi kewarku\" tare da labarin abin da ke faruwa. Manya: kira ko ziyara ta kai tsaye daga wani shugaba.",
            "AI zai iya rubuta daftarin kowane saƙo. Ku yi amfani da madadi kamar [sunan mai gudummawa] da [sakamakon shiri], sannan ku cike su da kanku a tsarin masu gudummawarku ko a mail merge.",
            "Ku rubuta tsari mai shafi ɗaya: lambobinku uku masu muhimmanci, zanen, mataki ɗaya ga kowane rukuni, wanda zai yi shi da kuma kafin wace rana. Ku sa darektanku ya duba shi kafin ku aika komai. Ku bi duk dokokin ƙungiyarku game da tuntuɓar masu gudummawa da ficewa (opt-out)."
          ],
          steps: ["Ku rubuta lambobinku uku masu muhimmanci a sama.", "Ku ƙara zanenku.", "Ku zaɓi mataki ɗaya ga kowane rukuni.", "Ku nemi AI ya rubuta daftarin kowane saƙo da madadi.", "Ku ƙara wane ne zai yi me da kuma kafin yaushe, ku sami amincewa."],
          words: [["Roƙon gudummawa (appeal)", "buƙatar da ke neman magoya baya su bayar."], ["Mail merge", "kayan aikin da ke cike kowace wasiƙa ko imel da bayanan mutum ɗaya daga jeri."]],
          slides: [
            { title: "Mataki ɗaya ga kowane rukuni", bullets: ["Sababbi: maraba da labari", "Masu maimaitawa: godiya da gayyatar bayarwa kowane wata", "Waɗanda suka daina: \"mun yi kewarku\" da labari", "Manya: kira na kai tsaye daga shugaba"] },
            { title: "Rubuta daftari da AI", bullets: ["Ku yi amfani da [sunan mai gudummawa] da [sakamakon shiri]", "Ku cike ainihin bayanai da kanku"] },
            { title: "Tsarinku mai shafi ɗaya", bullets: ["Lambobi uku masu muhimmanci da zanen", "Mataki ga kowane rukuni", "Wanda zai yi shi da kafin yaushe", "An amince da shi kafin aikawa"] }
          ],
          tryIt: "Aikin ƙarshe: ku rubuta tsarin roƙon gudummawarku mai shafi ɗaya da lambobinku uku, zane, mataki ɗaya ga kowane rukuni da masu ɗaukar nauyi. Ku nemi AI ya rubuta daftarin wasiƙar \"mun yi kewarku\" da madadi, sannan ku gyara ta da kalmominku.",
          youCanNow: "mayar da lambobin masu gudummawa tsarin roƙon gudummawa mai amfani da ke mutunta sirrin masu gudummawa.",
          quickCheck: [
            { objective: "O6", q: "Mene ne mataki mai kyau ga sababbin masu gudummawa?", options: ["Ku ƙyale su har zuwa shekara mai zuwa", "Ku nemi su bayar kowane wata nan take", "Maraba mai daɗi da labarin abin da gudummawarsu ta yi", "Wasiƙar \"mun yi kewarku\""], answer: 2, why: "Sababbin masu gudummawa suna samun maraba mai daɗi da labarin abin da gudummawarsu ta yi." },
            { objective: "O6", q: "An rubuta tsarin roƙon gudummawarku. Me za ku yi kafin ku aika komai?", options: ["Ku aika shi ga dukkan masu gudummawa a lokaci ɗaya", "Ku saka shi a kafafen sada zumunta", "Ku nemi AI ya amince da shi", "Ku sa darektanku ya duba shi, ku bi dokokinku na tuntuɓar masu gudummawa da ficewa"], answer: 3, why: "Ku sa darektanku ya duba shi, ku bi dokokinku game da tuntuɓar masu gudummawa da ficewa." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Daga lambobi zuwa aiki",
        questions: [
          { objective: "O4", q: "Me ke da aminci a saka a mataimakin AI?", options: ["Dukkan jerin masu gudummawarku", "Imel ɗin masu gudummawa", "Adireshin gidajen masu gudummawa", "Jimillar lambobi kamar komowa da ƙidayar rukunoni"], answer: 3, why: "Jimloli ba sa bayyana kowane mutum ɗaya." },
          { objective: "O4", q: "AI ya ce \"yawancin bankunan abinci suna riƙe kashi 70 cikin 100 na masu gudummawa\". Me za ku yi?", options: ["Ku nemi majiya ku duba ta kafin ku yi amfani da ita", "Ku saka shi a rahoton kwamiti nan take", "Ku ɗauka gaskiya ne", "Ku goge lambobinku"], answer: 0, why: "AI yana iya ƙirƙirar lambobin kwatantawa; ku duba majiyar." },
          { objective: "O5", q: "Wane zane ne ke aiki sosai don kwatanta ƙidayar rukunoni?", options: ["Taswira", "Hoto", "Zanen sanduna", "Kalanda"], answer: 2, why: "Sanduna suna sauƙaƙa kwatanta girman rukunoni." },
          { objective: "O6", q: "Mene ne mataki mai kyau ga waɗanda suka daina bayarwa?", options: ["Ku cire su har abada", "Ku nemi lambar bankinsu", "Kada ku aika komai", "Wasiƙar \"mun yi kewarku\" tare da labari"], answer: 3, why: "Labari mai daɗi yana gayyatar su su dawo." },
          { objective: "O6", q: "Idan AI yana rubuta daftarin wasiƙun masu gudummawa, ta yaya sunaye suke bayyana?", options: ["Ainihin sunaye da aka rubuta a prompt", "Babu sunaye kwata-kwata, har a wasiƙar ƙarshe", "Madadi kamar [sunan mai gudummawa] da za a cike daga baya", "Sunayen iyali kawai"], answer: 2, why: "Madadi yana hana sunaye shiga kayan aikin AI." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Nazarin Bayanan Masu Bayar da Gudummawa da AI",
    questions: [
      { objective: "O1", q: "Nazarin bayanan masu gudummawa shi ne:", options: ["Sayar da jerin masu gudummawa", "Duba bayanan gudummawa don sanin wanda ke bayarwa, nawa da sau nawa", "Tsammanin wanda zai iya bayarwa", "Wani nau'in manhajar AI"], answer: 1, why: "Yana amfani da bayananku don jagorantar tara kuɗi." },
      { objective: "O1", q: "Da me za ku maye gurbin sunayen masu gudummawa a kwafin aikinku?", options: ["ID kamar D001", "Laƙabi", "Lambobin waya", "Ba komai"], answer: 0, why: "ID yana ba ku damar nazari ba tare da nuna wane ne wane ba." },
      { objective: "O1", q: "Waɗanne ginshiƙai ya kamata kwafin marar suna ya riƙe?", options: ["Adireshin gida da imel", "Waya da bayanan kula", "ID, ranar gudummawa, adadi da kamfen", "Bayanan banki"], answer: 2, why: "Waɗannan ne kawai kuke buƙata don lambobin." },
      { objective: "O1", q: "A ina ya kamata ainihin jerin masu gudummawa ya kasance?", options: ["A tsarin masu gudummawarku ko a fayil mai kariya", "A babban fayil na jama'a", "A cikin hirar AI", "A rukunin saƙon tes"], answer: 0, why: "Bayanan sirri suna zama a kare." },
      { objective: "O2", q: "Ana samun jimillar kuɗin da aka tara da:", options: ["=TODAY()", "=COUNT() na ranaku", "Tsammani", "=SUM() na adadi"], answer: 3, why: "=SUM() yana haɗa dukkan gudummawa." },
      { objective: "O2", q: "Matsakaicin gudummawa daidai yake da:", options: ["Gudummawa mafi girma", "Jimillar kuɗin da aka tara a raba da yawan gudummawa", "Yawan masu gudummawa", "Gudummawa mafi ƙanƙanta a ninka da biyu"], answer: 1, why: "Wannan shi ne ma'anar matsakaici." },
      { objective: "O2", q: "Masu gudummawa 50 sun bayar bara; 30 daga cikinsu sun sake bayarwa. Komowa ita ce:", options: ["Kashi 30 cikin 100", "Kashi 50 cikin 100", "Kashi 60 cikin 100", "Kashi 80 cikin 100"], answer: 2, why: "30 / 50 = 0.6, wato kashi 60 cikin 100." },
      { objective: "O2", q: "Ƙarancin komowa yana nuna ya kamata ku:", options: ["Daina tara kuɗi", "Ƙara farashi", "Goge tsofaffin masu gudummawa", "Ƙara gode wa masu gudummawa da sanar da su labari"], answer: 3, why: "Kula da masu gudummawa sosai yana dawo da su." },
      { objective: "O3", q: "Gudummawar farko ta wani mai gudummawa a bana ce. Rukuninsa shi ne:", options: ["Sababbi", "Waɗanda suka daina", "Masu maimaitawa", "Manya"], answer: 0, why: "Sababbi sun bayar a karon farko a bana." },
      { objective: "O3", q: "Rukuni shi ne:", options: ["Mai gudummawa ɗaya", "Wani irin zane", "Taron masu gudummawa da suka yi kama da juna ta wata hanya mai muhimmanci", "Fom na haraji"], answer: 2, why: "Rukunoni suna ba ku damar aika saƙon da ya dace ga kowane rukuni." },
      { objective: "O3", q: "Don haɗa masu gudummawa a jadawali, kuna iya:", options: ["Buga takarda ku yanka ta", "Neman masu gudummawa su jera kansu", "Goge layuka", "Ƙara ginshiƙin Segment ku jera ko ku tace"], answer: 3, why: "Jerawa da tacewa suna haɗa layuka bisa rukuni." },
      { objective: "O4", q: "Wane prompt ne ke da aminci kuma yana da amfani?", options: ["\"Ga sunayen dukkan masu gudummawarmu da gudummawarsu...\"", "\"Ga bayanan shiga bankinmu.\"", "\"Komowa kashi 45 cikin 100, matsakaicin gudummawa $85, waɗanda suka daina 22. Ka bayyana da kalmomi masu sauƙi.\"", "\"Ka yi tsammanin masu gudummawarmu.\""], answer: 2, why: "Jimillar lambobi kawai yake rabawa, kuma yana yin tambaya a sarari." },
      { objective: "O4", q: "AI ya yi wani lissafi da lambobinku. Ya kamata ku:", options: ["Yarda da shi gaba ɗaya", "Sake duba shi da kanku", "Aika shi ga kwamiti ba tare da dubawa ba", "Ƙyale dukkan lambobi"], answer: 1, why: "AI yana iya yin kuskuren lissafi." },
      { objective: "O4", q: "Lambar kwatantawa daga AI wadda ba ta da majiya ya kamata a:", options: ["Duba ta kafin ku yi amfani da ita", "Yi amfani da ita a rahoton tallafinku", "Buga ta a shafinku na intanet", "Raba ta da masu gudummawa"], answer: 0, why: "AI yana iya ƙirƙirar lambobin da suke kama da na gaske." },
      { objective: "O5", q: "Don yin zane a Sheets ko Excel, da farko kuna:", options: ["Rufe fayil ɗin", "Rubuta kalmar sirri", "Zaɓar teburin sunayen rukunoni da ƙidayarsu", "Goge bayanan"], answer: 2, why: "Ana gina zanen daga bayanan da aka zaɓa." },
      { objective: "O5", q: "Take mai kyau na zane shi ne:", options: ["\"Masu gudummawarmu na bana bisa rukuni\"", "\"Zane 1\"", "Babu take", "\"Bayanai\""], answer: 0, why: "Take a sarari yana faɗa wa masu karatu saƙon." },
      { objective: "O6", q: "Mataki mai kyau ga masu maimaitawa shi ne:", options: ["Ƙyale su", "Neman kalmomin sirrinsu", "Cire su daga jerin", "Godiya da gayyatar bayarwa kowane wata"], answer: 3, why: "Masu gudummawa masu aminci su ne mafi dacewa don bayarwa kowane wata." },
      { objective: "O6", q: "Ga manyan masu gudummawa, mataki mai kyau shi ne:", options: ["Wasiƙa iri ɗaya ga kowa kawai", "Kira ko ziyara ta kai tsaye daga shugaba", "Babu tuntuɓa", "Tes da ke neman lambobin kati"], answer: 1, why: "Tuntuɓa ta kai tsaye tana girmama manyan alƙawura." },
      { objective: "O6", q: "Tsarinku mai shafi ɗaya ya kamata ya ƙunshi:", options: ["Adireshin kowane mai gudummawa", "Muhimman lambobi, zane, matakai, masu ɗaukar nauyi da ranaku", "Zanen kawai", "Ra'ayoyin AI kawai"], answer: 1, why: "Tsari yana faɗin abin da za a yi, wane ne zai yi, da yaushe." },
      { objective: "O6", q: "Kafin ku aika kowane roƙon gudummawa, ya kamata ku:", options: ["Aika shi ga kowa a lokaci ɗaya ba tare da dubawa ba", "Bar AI ya aika shi", "Tsallake karanta shi don gyara", "Sami amincewa ku bi dokokinku na tuntuɓar masu gudummawa da ficewa"], answer: 3, why: "Amincewa da mutunta ficewa suna kare amincewar masu gudummawa." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      1,
      6,
      8,
      11,
      14,
      18
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Kwafi mai aminci",
        objective: "O1",
        notYet: "Akwai suna, adireshi, waya, imel ko bayanin kula har yanzu a cikin kwafin.",
        meets: "An maye gurbin sunaye da ID; ID, rana, adadi da kamfen kawai aka bari.",
        exceeds: "Ya rubuta inda ake ajiye ainihin jerin da wanda zai iya buɗe shi."
      },
      {
        name: "Muhimman lambobi",
        objective: "O2",
        notYet: "An lissafa yawan komowa ko matsakaicin gudummawa ba daidai ba.",
        meets: "Jimillar kuɗin da aka tara, matsakaicin gudummawa da yawan komowa duka daidai suke.",
        exceeds: "Yana nuna dabarar lissafi ko yadda aka yi lissafin kowace lamba."
      },
      {
        name: "Rukunonin masu gudummawa",
        objective: "O3",
        notYet: "Rukunoni ƙasa da uku, ko an bar wasu masu gudummawa.",
        meets: "Aƙalla rukunoni uku, kowane ID yana cikin ɗaya, tare da ƙidaya.",
        exceeds: "Yana amfani da dukkan rukunoni huɗu, tare da adadin da aka faɗa ga Manya."
      },
      {
        name: "An duba bayanin AI",
        objective: "O4",
        notYet: "An saka bayanan kowane mai gudummawa, ko an yi amfani da lissafin AI ko lambobin kwatantawa ba tare da dubawa ba.",
        meets: "Jimillar lambobi kawai aka saka; an sake duba lissafin AI da duk wata lambar kwatantawa.",
        exceeds: "Ya jera tambayoyin da AI ya ba da shawarar a yi a gaba, da amsoshinsu."
      },
      {
        name: "Tsarin roƙon gudummawa",
        objective: "O6",
        notYet: "Babu mataki ga wani rukuni, ko babu mai ɗaukar nauyi ko rana.",
        meets: "Shafi ɗaya mai muhimman lambobi, zane, mataki ɗaya ga kowane rukuni, mai ɗaukar nauyi da rana.",
        exceeds: "Daftarin saƙonni suna amfani da madadi, kuma darekta ya amince da tsarin."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Ƙungiyoyin da suka lissafa yawan komowar masu gudummawarsu a karon farko (binciken biyo baya)",
      "Canjin yawan komowar masu gudummawa bayan shekara ɗaya, kamar yadda ƙungiyoyi suka faɗa",
      "Waɗanda suka daina bayarwa da suka sake bayarwa bayan wasiƙar \"mun yi kewarku\""
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta mai Google Sheets ko Excel",
      "Kwafin marar suna na jerin masu gudummawarku, ko jerin atisaye na Darasi na 1",
      "Mataimakin AI kyauta, ana amfani da shi da jimillar lambobi kawai",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku yi amfani da jerin atisaye a aji; masu koyo suna aiki da ainihin bayanai ne kawai a fayilolinsu masu kariya.",
      "Ku yi lissafin yawan komowa tare mataki-mataki kafin masu koyo su gwada nasu.",
      "Ku nuna misalin da lissafin AI ya yi kuskure don masu koyo su ga dalilin da yasa suke sake dubawa.",
      "Ku gayyaci darekta ko shugaban tara kuɗi don a amince da tsarin roƙon gudummawa nan take.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
