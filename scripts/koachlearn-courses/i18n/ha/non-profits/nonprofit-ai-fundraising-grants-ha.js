"use strict";

// Koach Learn course, Hausa (ha) translation of non-profits/nonprofit-ai-fundraising-grants.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "nonprofit-ai-fundraising-grants-ha",
  lang: "ha",
  translationOf: "nonprofit-ai-fundraising-grants",
  category: "Non Profits",
  name: "AI don Tara Kuɗaɗe da Rubuta Neman Tallafi (Grant)",
  skills: "Nemo damar tallafi, Karanta ƙa'idodin mai bayarwa, Rubuta bayanin buƙata da AI, Rubuta roƙon masu bayarwa da AI, Duba da daidaita kowane daftari",
  outcome: "nemo tallafi (grant) da ya dace da shirinku, amfani da AI don rubuta daftarin bayanin buƙata da bayanin shiri da suka bi ƙa'idodin mai bayarwa, da rubuta imel na roƙon masu bayarwa, kuna tabbatar da kowane bayani kuma kuna kiyaye bayanan masu bayarwa a sirri.",
  about: [
    "Wannan kwas na shugabannin ƙungiyoyin sa-kai (nonprofit) da na addini ne, da ma'aikata da masu aikin sa-kai da ke tara kuɗi da rubuta neman tallafi, sau da yawa da ƙarancin lokaci da ƙaramin rukuni.",
    "Za ku koyi inda ake samun tallafi, yadda ake karanta ƙa'idodin mai bayarwa, yadda ake amfani da AI don rubuta sassan neman tallafi da aka fi buƙata da roƙon masu bayarwa, da yadda ake dubawa da daidaita kowane daftari don ya zama na gaskiya kuma ya yi kama da ku.",
    "Kowane darasi yana ɗaukar kusan minti biyar kuma yana ƙarewa da aiki na hannu. AI yana rubuta daftari; ku ne kuke yanke shawara, dubawa da sa hannu. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku zaɓi damar tallafi ɗaya ta gaske da ta dace da wani shirinku. Da AI, ku rubuta daftarin bayanin buƙata (kusan kalmomi 250) da bayanin shiri da suka bi ƙa'idodin mai bayarwa, kuna amfani da bayanai daga takardunku da majiyoyin da kuka tabbatar kaɗai. Sannan ku rubuta daftarin imel na roƙon masu bayarwa mai kalmomi 150 don wannan shirin, da madadi (placeholder) a maimakon bayanan masu bayarwa, ku gyara su duka biyu don su yi kama da ƙungiyarku.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Shugabannin ƙungiyoyin sa-kai da na addini, ma'aikatan tara kuɗi da masu aikin sa-kai da ke tara kuɗi da rubuta neman tallafi, sau da yawa da ƙarancin lokaci da ƙaramin rukuni.",
    startingPoint: "Sun san shirye-shiryensu da al'ummarsu sosai, kuma sun taɓa rubuta wasu roƙo ko ƙananan neman tallafi. Da yawa ba su da isasshen lokacin bincike da rubutu, kuma kaɗan ne suka taɓa amfani da AI don neman tallafi.",
    gap: "Wa'adin neman tallafi da roƙo suna ɗaukar sa'o'in da ƙaramin rukuni ba shi da su, kuma rasa takarda ɗaya da ake bukata ko faɗin abin da ba gaskiya ba na iya jawo asarar kuɗin da amincewar mai bayarwa. Masu koyo suna buƙatar amfani da AI don nemo tallafin da ya dace, karanta ƙa'idodi da rubutu da sauri, yayin da kowane bayani ya kasance gaskiya kuma bayanan masu bayarwa su kasance a sirri.",
    constraints: [
      "Gaskiya: kowace lamba ta fito daga takarda ko majiyar da aka tabbatar; AI ba zai taɓa ƙirƙirar sakamako, abokan aiki ko goyon baya ba",
      "Sirri: jerin masu bayarwa, sunayensu da tarihin gudummawarsu ba sa shiga kayan AI",
      "Tallafin gwamnatin tarayya yana buƙatar rajista a SAM.gov, wadda kyauta ce amma tana ɗaukar lokaci",
      "Ana tabbatar da maganganun haraji da na shari'a da akanta ko jagororin hukuma na IRS",
      "Lokaci: ma'aikata da masu aikin sa-kai suna da aiki sosai, don haka kowane darasi kusan minti 5 ne"
    ],
    prerequisites: "Kwas ɗin \"Introduction to AI for Nonprofits\" (Gabatarwa ga AI don Ƙungiyoyin Sa-kai), ko ɗan sani na amfani da mataimakin AI."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku ɗaya daga cikin shirye-shiryenku", action: "nemo aƙalla damar tallafi biyu da suka dace da shi, ta Grants.gov, Candid ko masu bayarwa na gida", standard: "kuna duba wanda ya cancanta a kowace sanarwa" },
    { id: "O2", condition: "Idan aka ba ku ƙa'idodin mai bayarwa na fili", action: "yin jerin dubawa (checklist) na kowane sashe, iyaka, takarda da wa'adi da taimakon AI", standard: "an duba layi-layi da ainihin takardar mai bayarwa" },
    { id: "O3", condition: "Idan kuna da naku bayanan da majiyoyin da kuka tabbatar", action: "rubuta daftarin bayanin buƙata da bayanin shiri da AI", standard: "kowace lamba ta fito daga takardunku ko majiyar da kuka tabbatar" },
    { id: "O4", condition: "Don shiri ɗaya", action: "rubuta gajeren imel na roƙon masu bayarwa mai labari ɗaya, abin da gudummawa ke yi da roƙo ɗaya bayyananne", standard: "da madadi a maimakon bayanan masu bayarwa" },
    { id: "O5", condition: "Idan kuna da masu bayarwa iri-iri", action: "yin samfuran saƙon godiya masu madadi da ku kanku kuke daidaitawa", standard: "ana saka sunaye da adadin kuɗi a ma'ajiyar bayanan masu bayarwa ko mail merge kaɗai" },
    { id: "O6", condition: "Kafin a aika neman tallafi ko roƙo", action: "duba kowace lamba, magana, izinin labari da iyakar kalmomi", standard: "ba tare da ƙirƙirarren sakamako, abokan aiki ko goyon baya ba" }
  ],
  chapters: [
    {
      name: "Babi na 1: Neman tallafi da AI",
      lessons: [
        {
          objectives: ["O1"],
          title: "Nemo tallafin da ya dace da manufarku",
          minutes: 5,
          goal: "Nemo aƙalla damar tallafi biyu da suka dace da ɗaya daga cikin shirye-shiryenku.",
          text: [
            "Tallafi yana zuwa daga manyan wurare uku: gwamnati (ta tarayya, ta jiha da ta ƙaramar hukuma), gidauniyoyi masu zaman kansu da na iyali, da kamfanoni. Ana jera tallafin gwamnatin tarayyar Amurka a Grants.gov. Kowanne yana da sanarwar damar tallafi, wato NOFO, mai sashen da ke faɗin wanda ya cancanta.",
            "Don neman tallafin gwamnatin tarayya, dole ƙungiyarku ta fara yin rajista a SAM.gov, wadda ke ba ku Unique Entity ID (UEI). Grants.gov ya ce rajistar kyauta ce. Tana iya ɗaukar lokaci, don haka ku fara da wuri, kuma kada ku taɓa biyan kamfanin da ya ce zai yi muku rajista da kuɗi.",
            "Don gidauniyoyi, Candid (candid.org) yana ba ku damar bincika ƙungiyoyin sa-kai da masu bayarwa; wasu abubuwa suna buƙatar biyan kuɗi, kuma ɗakunan karatu na jama'a da yawa suna ba da damar amfani da shi. Ku kuma duba gidauniyar al'ummarku, kamfanonin gida da cocinku ko ƙungiyar addininku."
          ],
          steps: ["Ku zaɓi shiri ɗaya da ke buƙatar kuɗi.", "Ku bincika Grants.gov don damar tallafin gwamnatin tarayya a wannan fanni.", "Ku bincika Candid da gidauniyar al'ummarku don masu bayarwa na gida.", "Ku karanta sashen wanda ya cancanta na kowace dama.", "Ku rubuta guda biyu da suka dace, da wa'adinsu."],
          words: [["Tallafi (grant)", "kuɗin da ake bayarwa don wata manufa wanda ba a mayar da shi."], ["NOFO", "notice of funding opportunity (sanarwar damar tallafi): bayanin hukuma na tallafin gwamnatin tarayya da ƙa'idodinsa."], ["UEI", "Unique Entity ID: lambar da SAM.gov ke ba ƙungiyarku don tallafin gwamnatin tarayya."]],
          slides: [
            { title: "Inda tallafi ke fitowa", bullets: ["Gwamnati: ta tarayya, ta jiha, ta ƙaramar hukuma", "Gidauniyoyi", "Kamfanoni da ƙungiyoyin addini"] },
            { title: "Tallafin gwamnatin tarayya", bullets: ["Ana jera su a Grants.gov", "Ku karanta sashen wanda ya cancanta a NOFO", "Ku fara rajista a SAM.gov: kyauta ce"] },
            { title: "Gidauniyoyi", bullets: ["Ku bincika Candid (candid.org)", "Ku tambayi ɗakin karatunku ko suna da damar amfani", "Ku duba gidauniyar al'ummarku"] }
          ],
          sources: [
            { name: "Grants.gov: wanda ya cancanci tallafi", url: "https://www.grants.gov/learn-grants/grant-eligibility" },
            { name: "Grants.gov: rajistar masu nema", url: "https://www.grants.gov/applicants/applicant-registration" },
            { name: "SAM.gov", url: "https://sam.gov/" },
            { name: "Candid", url: "https://candid.org/" }
          ],
          tryIt: "Ku zaɓi ɗaya daga cikin shirye-shiryenku. Ku nemo damar tallafi biyu da suka dace da shi, ɗaya ta gwamnatin tarayya ko ta jiha, ɗaya kuma ta gidauniya ko ta gida. Ku rubuta sunan kowane mai bayarwa, wa'adinsa da wanda ya cancanta a layi ɗaya.",
          youCanNow: "nemo damar tallafin da suka dace da manufarku, kuma kun san rajistar da tallafin gwamnatin tarayya ke buƙata.",
          quickCheck: [
            { objective: "O1", q: "Mene ne manyan wurare uku da tallafi ke fitowa?", options: ["Gwamnati, gidauniyoyi da kamfanoni", "Bankuna, katin bashi da lamuni", "Masu bayarwa, masu aikin sa-kai da 'yan kwamitin gudanarwa", "Makarantu, asibitoci da kotuna"], answer: 0, why: "Tallafi yana fitowa daga gwamnati, gidauniyoyi masu zaman kansu da na iyali, da kamfanoni." },
            { objective: "O1", q: "Kuna son bincika gidauniyoyi a Candid amma ba za ku iya biyan kuɗin ba. Me za ku gwada?", options: ["Ku haƙura da gidauniyoyi", "Ku tambayi ɗakin karatu na jama'a, domin da yawa suna ba da damar amfani", "Ku biya baƙo don jeri", "Ku nemi AI ya jera kowace gidauniya"], answer: 1, why: "Ɗakunan karatu na jama'a da yawa suna ba da damar amfani da abubuwan Candid na biya." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Karanta ƙa'idodin mai bayarwa da taimakon AI",
          minutes: 5,
          goal: "Mayar da ƙa'idodin mai bayarwa zuwa jerin dubawa na abin da dole ku aika.",
          text: [
            "Kowane mai bayarwa yana faɗin abin da yake so: sassa, iyakar kalmomi, tsarin kasafin kuɗi, takardun da za a haɗa da wa'adi. Rasa ɗaya na iya hana ku shiga tun kafin wani ya karanta aikinku.",
            "Ƙa'idodin a fili suke, don haka kuna iya liƙa su a mataimakin AI ku tambaya: \"Ka mayar da waɗannan ƙa'idodin tallafi zuwa jerin dubawa: kowane sashe, iyakar kalmominsa ko shafukansa, kowace takardar da za a haɗa, da kowane wa'adi.\"",
            "Sannan ku kwatanta jerin da ainihin takardar. AI na iya barin wani abu ko canja rana. Takardar mai bayarwa da kanta ce koyaushe ke da gaskiya."
          ],
          steps: ["Ku kwafi ƙa'idodin mai bayarwa na fili.", "Ku nemi AI ya yi jerin dubawa na sassa, iyaka, takardu da wa'adi.", "Ku kwatanta jerin layi-layi da ainihin takardar.", "Ku gyara duk abin da ya ɓace ko ba daidai ba."],
          words: [["Ƙa'idodi (guidelines)", "dokokin mai bayarwa na abin da za a aika da yadda za a aika."], ["Takardar haɗawa (attachment)", "ƙarin takardar da kuke aikawa tare da neman tallafi, kamar kasafin kuɗi ko wasiƙar IRS."]],
          slides: [
            { title: "Masu bayarwa suna faɗin abin da suke so", bullets: ["Sassa da iyakar kalmomi", "Tsarin kasafin kuɗi da takardun haɗawa", "Wa'adi"] },
            { title: "Ku nemi AI ya yi jerin dubawa", bullets: ["Ku liƙa ƙa'idodin na fili", "Sassa, iyaka, takardun haɗawa, wa'adi"] },
            { title: "Ku duba shi", bullets: ["Ku kwatanta layi-layi", "Takardar mai bayarwa ce koyaushe ke da gaskiya"] }
          ],
          tryIt: "Ku ɗauki ƙa'idodin ɗaya daga cikin damarku biyu. Ku nemi mataimakin AI ya yi jerin dubawa, sannan ku kwatanta shi da ainihin takardar ku gyara kowane kuskure.",
          youCanNow: "mayar da ƙa'idodin mai bayarwa zuwa jerin dubawa daidai na abin da za a aika.",
          quickCheck: [
            { objective: "O2", q: "Me yasa za ku iya liƙa ƙa'idodin mai bayarwa a mataimakin AI?", options: ["Domin kayan AI koyaushe na sirri ne", "Domin mai bayarwa ya ce haka", "Domin ƙa'idodin a fili suke", "Domin AI zai aika muku"], answer: 2, why: "Ƙa'idodin a fili suke, don haka liƙa su ba ya bayyana wani abu na sirri." },
            { objective: "O2", q: "Jerin dubawa na AI ya ce wa'adin March 15 ne, amma ƙa'idodin sun ce March 1. Me za ku yi?", options: ["Ku yi amfani da March 15", "Ku ɗauki tsakiyarsu", "Ku sake tambayar AI har ya yarda", "Ku yi amfani da March 1, daga takardar mai bayarwa"], answer: 3, why: "AI na iya canja rana; takardar mai bayarwa da kanta ce koyaushe ke da gaskiya." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Rubuta bayanin buƙata da bayanin shiri",
          minutes: 6,
          goal: "Yi amfani da AI don rubuta daftarin bayanin buƙata da bayanin shiri daga naku bayanan.",
          text: [
            "Bayanin buƙata (statement of need) yana faɗin matsalar da kuke magancewa, waɗanda abin ya shafa, da dalilin da yasa yanzu. Bayanin shiri (program description) yana faɗin abin da za ku yi, don su wane ne, da abin da zai canja.",
            "Ku ba AI naku bayanan, ba shafi marar komai ba: \"Ta amfani da waɗannan bayanan kaɗai, ka rubuta daftarin bayanin buƙata mai kalmomi 250 don tallafi daga [irin mai bayarwa]: [bayananku da ƙididdigar da ke da majiya]. Kada ka ƙara wata ƙididdiga da ban ba ka ba.\"",
            "Sannan ku gyara sosai. Ku ƙara labari na gaske (da izini, ba tare da bayanan da ke nuna ko wane ne ba), ku yi amfani da kalmomi da abubuwan da mai bayarwa ya fi so, kuma ku tabbata kowace lamba ta fito daga takardunku ko majiyar da kuka tabbatar. Masu bayarwa da yawa suna tambaya ko an yi amfani da AI; ku amsa da gaskiya."
          ],
          steps: ["Ku tara bayananku: waɗanda kuke yi wa hidima, lambobi, sakamako, ƙididdiga masu majiya.", "Ku nemi AI ya rubuta daftari da waɗannan bayanan kaɗai, cikin iyakar kalmomi.", "Ku ƙara labari na gaske da izini, ba tare da bayanan da ke nuna ko wane ne ba.", "Ku bi abubuwan da mai bayarwa ya fi so da kalmominsa.", "Ku nemo asalin kowace lamba a takarda ko majiya."],
          words: [["Bayanin buƙata (statement of need)", "sashen neman tallafi da ke bayanin matsalar da dalilin da yasa take da muhimmanci yanzu."], ["Bayanin shiri (program description)", "sashen da ke bayanin abin da za ku yi da abin da zai canja."], ["Sakamako (outcome)", "canjin da shirinku yake son kawowa a rayuwar mutane."]],
          slides: [
            { title: "Manyan sassa biyu", bullets: ["Buƙata: matsalar, su wane ne, me yasa yanzu", "Shiri: abin da kuke yi, don su wane ne, abin da zai canja"] },
            { title: "Ku ba AI naku bayanan", bullets: ["\"Ta amfani da waɗannan bayanan kaɗai...\"", "\"Kada ka ƙara ƙididdigar da ban ba ka ba\"", "Ku tsaya cikin iyakar kalmomi"] },
            { title: "Ku gyara sosai", bullets: ["Ku ƙara labari na gaske da izini", "Ku yi amfani da abubuwan da mai bayarwa ya fi so", "Ku nemo asalin kowace lamba"] },
            { title: "Ku faɗi gaskiya", bullets: ["Ku amsa da gaskiya idan an tambaye ku ko kun yi amfani da AI"] }
          ],
          tryIt: "Ku tara bayanai biyar game da shiri ɗaya. Ku nemi AI ya rubuta daftarin bayanin buƙata mai kalmomi 250 da waɗannan bayanan kaɗai. Ku yi wa kowace lamba alama ku tabbatar da inda ta fito.",
          youCanNow: "rubuta daftarin bayanin buƙata na neman tallafi da AI daga naku bayanan da kuka tabbatar.",
          quickCheck: [
            { objective: "O3", q: "Me bayanin shiri ke faɗi?", options: ["Abin da za ku yi, don su wane ne, da abin da zai canja", "Adireshin gidajen 'yan kwamitin gudanarwarku", "Jerin masu bayarwa", "Jimillar kasafin kuɗi kawai"], answer: 0, why: "Bayanin shiri yana faɗin abin da za ku yi, don su wane ne da abin da zai canja." },
            { objective: "O3", q: "Kuna son ƙara labarin wani iyali a bayanin buƙatarku. Me za ku yi?", options: ["Ku yi amfani da cikakken sunansu don ya zama na gaske", "Ku sami izini ku cire bayanan da ke nuna ko su wane ne", "Ku bar AI ya ƙirƙiri labari", "Ku kwafi labari daga wata ƙungiya"], answer: 1, why: "Labari na gaske yana buƙatar izini kuma kada ya kasance da bayanan da ke nuna ko wane ne." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Neman tallafi da AI",
        questions: [
          { objective: "O1", q: "A ina ake jera damar tallafin gwamnatin tarayya?", options: ["Grants.gov", "Wani rukuni a kafofin sada zumunta", "Akwatin spam na imel ɗinku", "Littafin lambobin waya"], answer: 0, why: "Grants.gov yana jera damar tallafin gwamnatin tarayya." },
          { objective: "O1", q: "Wani kamfani ya ce zai yi muku rajista a SAM.gov da kuɗi. Me kuka sani?", options: ["Dole ku biya", "Rajistar SAM.gov kyauta ce, don haka ku yi da kanku", "SAM.gov ba dole ba ne", "Kamfanoni ne kaɗai ke iya rajista"], answer: 1, why: "Grants.gov ya ce rajista kyauta ce." },
          { objective: "O2", q: "Jerin dubawa na AI ya rasa wata takardar haɗawa da ke cikin ƙa'idodin. Wanne ne daidai?", options: ["Jerin dubawa", "Babu ɗaya", "Ƙa'idodin mai bayarwa", "Duk wanda ya fi gajarta"], answer: 2, why: "Takardar mai bayarwa da kanta ce koyaushe ke da gaskiya." },
          { objective: "O3", q: "Wane prompt ne ke kare ku daga ƙirƙirarrun ƙididdiga?", options: ["\"Ka rubuta bayanin buƙata.\"", "\"Ka sa ya burge.\"", "\"Ka ƙara lambobi masu ƙarfi.\"", "\"Ta amfani da waɗannan bayanan kaɗai, ka rubuta... Kada ka ƙara ƙididdigar da ban ba ka ba.\""], answer: 3, why: "Iyakance AI ga bayananku yana hana ƙirƙirarrun lambobi." },
          { objective: "O3", q: "Me bayanin buƙata ke bayani?", options: ["Matsalar, waɗanda abin ya shafa da dalilin da yasa yanzu", "Sunayen 'yan kwamitin gudanarwarku", "Lokutan buɗe ofishinku", "Jerin masu bayarwa"], answer: 0, why: "Wannan ne manufar sashen buƙata." }
        ]
      }
    },
    {
      name: "Babi na 2: Masu bayarwa da AI",
      lessons: [
        {
          objectives: ["O4"],
          title: "Rubuta roƙon masu bayarwa da AI",
          minutes: 5,
          goal: "Rubuta daftarin gajeren imel na roƙon masu bayarwa don shiri ɗaya.",
          text: [
            "Roƙo mai kyau gajere ne kuma takamaimai: mutum ɗaya ko buƙata ɗaya, abin da gudummawa ke yi, da roƙo ɗaya bayyananne. \"$50 yana biyan koyarwar bayan makaranta ta mako ɗaya\" ya fi \"don Allah ku tallafa wa aikinmu\" aiki, amma sai idan lambar gaskiya ce.",
            "Prompt: \"Ka rubuta imel na roƙon masu bayarwa mai kalmomi 150 don shirinmu na koyarwar bayan makaranta. Ka ba da gajeren labari game da [wani ɗalibi, ba suna], ka faɗi abin da [adadin kuɗi] ke bayarwa, sannan ka ƙare da roƙo ɗaya bayyananne da hanyar haɗi: [hanyar ba da gudummawa]. Murya mai daɗi da bege.\"",
            "Ku bar jerin masu bayarwa, sunayensu da tarihin gudummawarsu a waje da kayan AI. Ku yi amfani da ma'ajiyar bayanan masu bayarwa ko shirin imel ɗinku don saka sunaye bayan daftarin ya kammala."
          ],
          steps: ["Ku zaɓi shiri ɗaya da bayani ɗaya na gaskiya na \"abin da gudummawa ke yi\".", "Ku nemi AI ya rubuta gajeren roƙo mai labari, bayanin gudummawar da roƙo ɗaya.", "Ku duba kowane adadin kuɗi da kasafin kuɗinku.", "Ku saka sunaye ta ma'ajiyar bayanan masu bayarwa, ba ta kayan AI ba."],
          words: [["Roƙo (appeal)", "buƙatar da ke neman mutane su ba da gudummawa."], ["Kiran aiki (call to action)", "abu ɗaya bayyananne da kuke neman mai karatu ya yi, kamar \"Ku ba da gudummawa yau\"."]],
          slides: [
            { title: "Roƙo mai ƙarfi", bullets: ["Labari ɗaya ko buƙata ɗaya", "Abin da gudummawa ke yi: lambobin gaskiya kaɗai", "Roƙo ɗaya bayyananne"] },
            { title: "Prompt ɗin", bullets: ["Kalmomi 150, murya mai daɗi da bege", "Labari ba tare da suna ba", "Madadin [adadin kuɗi] da [hanyar ba da gudummawa]"] },
            { title: "Ku kiyaye sirrin masu bayarwa", bullets: ["Babu jerin masu bayarwa a AI", "Ku saka sunaye a ma'ajiyar bayanan masu bayarwa"] }
          ],
          tryIt: "Ku rubuta daftarin imel na roƙo mai kalmomi 150 don shiri ɗaya da AI. Ku duba cewa adadin \"abin da gudummawa ke yi\" gaskiya ne daga kasafin kuɗinku.",
          youCanNow: "rubuta daftarin gajeren roƙon masu bayarwa na gaskiya da AI.",
          quickCheck: [
            { objective: "O4", q: "Roƙo nawa ya kamata roƙo mai kyau ya ƙunsa?", options: ["Biyar", "Babu ko ɗaya", "Roƙo ɗaya bayyananne", "Ɗaya ga kowane shiri"], answer: 2, why: "Roƙo mai kyau yana da mutum ɗaya ko buƙata ɗaya, abin da gudummawa ke yi da roƙo ɗaya bayyananne." },
            { objective: "O4", q: "Kuna son AI ya rubuta roƙo ga manyan masu bayarwarku da sunayensu. Me za ku yi?", options: ["Ku liƙa jerin masu bayarwarku a AI", "Ku liƙa sunaye da tarihin gudummawa", "Ku bar roƙon", "Ku rubuta daftarin da madadi, sannan ku saka sunaye a ma'ajiyar bayanan masu bayarwa"], answer: 3, why: "Ku bar jerin masu bayarwa a waje da AI; ku saka sunaye a ma'ajiyarku bayan daftarin ya kammala." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Daidaita saƙonnin godiya da labarai",
          minutes: 4,
          goal: "Yi amfani da AI don yin samfuran saƙon godiya da na labari da ku kanku kuke daidaitawa.",
          text: [
            "Masu bayarwa da aka yi wa godiya da sauri kuma aka faɗa musu abin da gudummawarsu ta yi sun fi yiwuwa su sake bayarwa. AI zai iya taimaka muku rubuta samfura don masu bayarwa iri-iri: masu bayarwa na farko, masu bayarwa kowane wata, masu aikin sa-kai da ke bayarwa, da 'yan coci da suka bayar a wata sadaka ta musamman.",
            "Ku tambaya: \"Ka rubuta gajerun samfuran godiya uku: mai bayarwa na farko, mai bayarwa kowane wata, da babban mai bayarwa. Kowanne ƙasa da kalmomi 100, mai daɗi, da madadin [suna], [adadin kuɗi] da [shiri], da jimla ɗaya ta tasiri.\"",
            "Ku cike sunaye da adadin kuɗi a ma'ajiyar bayanan masu bayarwa ko mail merge. Ku ƙara layi da aka rubuta da hannu idan za ku iya. Mutane suna gane lokacin da babu hannun mutum a ciki."
          ],
          steps: ["Ku jera irin masu bayarwa da kuke yi wa godiya.", "Ku nemi AI ya yi samfuri ga kowanne, da madadi.", "Ku ƙara jimlar tasiri ta gaskiya ga kowanne.", "Ku daidaita a ma'ajiyar bayanan masu bayarwa ku ƙara layi na kanku."],
          words: [["Samfuri (template)", "daftari da ake sake amfani da shi mai guraben cikewa."], ["Mail merge", "kayan aiki da ke cike sunaye da bayanai a wasiƙa don mutane da yawa."], ["Riƙe masu bayarwa (donor retention)", "sa masu bayarwa su ci gaba da bayarwa shekara bayan shekara."]],
          slides: [
            { title: "Ku yi godiya da sauri, ku nuna tasiri", bullets: ["Masu bayarwa da aka yi wa godiya suna sake bayarwa", "Ku faɗi abin da gudummawar ta yi"] },
            { title: "Samfura bisa irin mai bayarwa", bullets: ["Na farko, na kowane wata, babba", "Ƙasa da kalmomi 100 da madadi"] },
            { title: "Ku sa ya zama na kanku", bullets: ["Ku cike ta ma'ajiyar bayanan masu bayarwa", "Ku ƙara layi da aka rubuta da hannu"] }
          ],
          tryIt: "Ku nemi AI ya yi samfuran godiya uku don iri uku na masu bayarwa. Ku ƙara jimlar tasiri ta gaskiya ɗaya ga kowanne.",
          youCanNow: "yin samfuran godiya da AI da daidaita su lafiya.",
          quickCheck: [
            { objective: "O5", q: "Waɗanne masu bayarwa ne suka fi yiwuwa su sake bayarwa?", options: ["Masu bayarwa da aka yi wa godiya da sauri aka faɗa musu abin da gudummawarsu ta yi", "Masu bayarwa da ba su taɓa jin labari ba", "Masu bayarwa da ke samun wasiƙa iri ɗaya da kowa", "Masu bayarwa da aka yi wa godiya bayan shekara guda"], answer: 0, why: "Godiya da sauri da labarin abin da gudummawa ta yi suna sa masu bayarwa su fi yiwuwa su sake bayarwa." },
            { objective: "O5", q: "Kuna da samfurin godiya a shirye don mai bayarwa kowane wata. Me zai sa ya ji kamar daga mutum yake?", options: ["Aika shi sau biyu", "Ƙara layi da aka rubuta da hannu idan za ku iya", "Amfani da babban rubutu", "Cire jimlar tasiri"], answer: 1, why: "Mutane suna gane lokacin da babu hannun mutum; layi da aka rubuta da hannu yana taimakawa." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Dubawa, gyara da faɗin gaskiya",
          minutes: 5,
          goal: "Yi dubawa ta ƙarshe a kowane daftarin neman tallafi ko roƙo kafin a aika shi.",
          text: [
            "Kafin wani abu ya je wajen mai bayarwa ko gidauniya, ku yi dubawa ta ƙarshe. Kowace lamba ta fito daga takarda. Kowace magana gaskiya ce. Kowane labari yana da izini. An bi iyakar kalmomi. Yana kama da ƙungiyarku, ba kamar na'ura ba.",
            "Kada ku taɓa barin AI ya ƙirƙiri sakamako, abokan aiki ko goyon baya. Mai bayarwa da ya gano magana ɗaya ta ƙarya ba zai sake amincewa da ku ba har abada, mai yiwuwa.",
            "Ku karanta shi da babbar murya, ku kuma nemi abokin aiki ɗaya da ya san shirin ya karanta shi. Don maganganun shari'a ko haraji, kamar abin da ake iya cirewa daga haraji, ku tabbatar da akantanku ko jagororin hukuma na IRS."
          ],
          steps: ["Ku nemo asalin kowace lamba a takarda ko majiya.", "Ku tabbatar kowane labari yana da izini kuma babu bayanan da ke nuna ko wane ne.", "Ku duba iyakar kalmomi da sassan da ake buƙata.", "Ku karanta shi da babbar murya.", "Ku nemi abokin aiki da ya san shirin ya duba shi."],
          words: [["Goyon baya (endorsement)", "sanarwar goyon baya a fili daga wani mutum ko ƙungiya."], ["Ana iya cirewa daga haraji (tax-deductible)", "gudummawar da mai bayarwa zai iya cirewa daga kuɗin shigar da ake biya wa haraji bisa dokokin haraji."]],
          slides: [
            { title: "Dubawa ta ƙarshe", bullets: ["Kowace lamba ta fito daga takarda", "Kowane labari yana da izini", "An bi iyakar kalmomi"] },
            { title: "Kada ku taɓa ƙirƙira", bullets: ["Sakamako", "Abokan aiki", "Goyon baya"] },
            { title: "Matakai na ƙarshe", bullets: ["Ku karanta shi da babbar murya", "Abokin aiki ya duba shi", "Maganganun haraji: ku tabbatar da akanta ko IRS"] }
          ],
          sources: [
            { name: "IRS: Gudummawar sadaka (Charitable contributions)", url: "https://www.irs.gov/charities-non-profits/charitable-contributions" }
          ],
          tryIt: "Aikin ƙarshe: don damar tallafi ɗaya ta gaske, ku kammala bayanin buƙatarku da bayanin shiri da suka bi ƙa'idodin, ku kuma kammala roƙon masu bayarwa mai kalmomi 150 don wannan shirin. Ku yi dubawa ta ƙarshe a kan duka biyun.",
          youCanNow: "shirya sassan neman tallafi da roƙon masu bayarwa na gaskiya da aka duba, da taimakon AI.",
          quickCheck: [
            { objective: "O6", q: "Wace hanya ce mai kyau don gano daftarin da ke kama da na'ura ce ta rubuta shi?", options: ["Ku tsawaita shi", "Ku ƙara ƙididdiga", "Ku karanta shi da babbar murya", "Ku aika shi nan take"], answer: 2, why: "Ku karanta shi da babbar murya kuma ku nemi abokin aiki da ya san shirin ya karanta shi." },
            { objective: "O6", q: "Daftarin neman tallafinku ya ce kun yi wa matasa 300 hidima, amma babu takardar da ta nuna haka. Me za ku yi?", options: ["Ku bar shi; yana da daɗin ji", "Ku mayar da shi 250", "Ku tambayi AI inda ya samo lambar", "Ku cire shi ko ku yi amfani da lambar da ke cikin takardunku"], answer: 3, why: "Dole kowace lamba ta fito daga takarda ko majiya." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Masu bayarwa da AI",
        questions: [
          { objective: "O4", q: "Wane layin roƙo ne ya fi ƙarfi, idan gaskiya ne?", options: ["\"Don Allah ku tallafa wa aikinmu.\"", "\"$50 yana biyan koyarwar bayan makaranta ta mako ɗaya.\"", "\"Muna buƙatar kuɗi.\"", "\"Ku bayar idan za ku iya.\""], answer: 1, why: "Tasiri takamaimai na gaskiya yana taimaka wa masu bayarwa su ga abin da gudummawarsu ke yi." },
          { objective: "O5", q: "A ina kuke saka sunayen masu bayarwa a wasiƙun godiya?", options: ["Ku liƙa jerin masu bayarwa a AI", "A kafofin sada zumunta", "A ma'ajiyar bayanan masu bayarwa ko mail merge", "Babu inda"], answer: 2, why: "Ajiye bayanan masu bayarwa a tsarinku yana kare sirrinsu." },
          { objective: "O6", q: "AI ya ƙara abokin aiki da ba ku aiki tare da shi. Me za ku yi?", options: ["Ku bar shi, yana da daɗin ji", "Ku tambayi abokin aikin daga baya", "Ku rage shi", "Ku cire shi"], answer: 3, why: "Kada ku taɓa barin AI ya ƙirƙiri abokan aiki ko goyon baya." },
          { objective: "O6", q: "Wani daftari ya ce ana iya cire gudummawa daga haraji. A ina za ku tabbatar?", options: ["Akanta ko jagororin hukuma na IRS", "Wata hirar AI", "Wani mai bayarwa", "Babu inda"], answer: 0, why: "Maganganun haraji suna buƙatar majiyar hukuma ko ƙwararre." },
          { objective: "O6", q: "Me yasa za ku nemi abokin aiki da ya san shirin ya karanta daftarin?", options: ["Don raba laifi", "Zai iya gano bayanai na ƙarya ko da suka ɓace", "Don tsawaita shi", "Ba shi da amfani"], answer: 1, why: "Wanda ya san shirin yana gano kurakurai." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI don Tara Kuɗaɗe da Rubuta Neman Tallafi (Grant)",
    questions: [
      { objective: "O1", q: "Tallafi (grant) shi ne:", options: ["Lamuni", "Takardar biyan haraji", "Kuɗi don wata manufa da ba a mayar da shi", "Jerin masu bayarwa"], answer: 2, why: "Ba a mayar da tallafi." },
      { objective: "O1", q: "NOFO na nufin:", options: ["New office for operations", "Nonprofit open forum", "Notice of financial obligation", "Notice of funding opportunity (sanarwar damar tallafi)"], answer: 3, why: "NOFO tana bayanin tallafin gwamnatin tarayya da ƙa'idodinsa." },
      { objective: "O1", q: "Kafin neman tallafin gwamnatin tarayya, dole ƙungiyarku ta:", options: ["Yi rajista a SAM.gov", "Sayi lasisi na musamman", "Ɗauki mai shiga tsakani a majalisa (lobbyist)", "Biya Grants.gov kuɗi"], answer: 0, why: "Grants.gov yana buƙatar rajista a SAM.gov tukuna." },
      { objective: "O1", q: "SAM.gov yana ba ƙungiyarku:", options: ["Kwamfutar tafi-da-gidanka kyauta", "Unique Entity ID (UEI)", "Kyautar tallafi", "Mayar da kuɗin haraji"], answer: 1, why: "UEI yana nuna ko wace ce ƙungiyarku don tallafin gwamnatin tarayya." },
      { objective: "O1", q: "Wanne ne wuri mai kyau don neman gidauniyoyi masu bayarwa?", options: ["Manhajar yanayi", "Shafin sayayya", "Candid", "Wasa"], answer: 2, why: "Candid yana jera ƙungiyoyin sa-kai da masu bayarwa." },
      { objective: "O1", q: "A wane wuri a NOFO kuke samun wanda zai iya nema?", options: ["Tambari (logo)", "Ƙasan shafi", "Launin bango", "Sashen wanda ya cancanta"], answer: 3, why: "Kowace NOFO tana da sashen wanda ya cancanta." },
      { objective: "O2", q: "Me yasa za a mayar da ƙa'idodi zuwa jerin dubawa?", options: ["Rasa abu ɗaya na iya hana ku shiga", "Masu bayarwa suna son jeri", "Yana tsawaita neman tallafin", "Doka ce ta buƙace shi"], answer: 0, why: "Jerin dubawa yana taimaka muku aika komai." },
      { objective: "O2", q: "Jerin dubawa na AI da ƙa'idodin mai bayarwa sun saɓa. Ku amince da:", options: ["AI", "Ƙa'idodin mai bayarwa", "Duk wanda ya fi sauƙi", "Babu ɗaya, ku yi tsammani"], answer: 1, why: "Takardar mai bayarwa da kanta ce ke da gaskiya." },
      { objective: "O3", q: "Hanya mafi kyau ta fara bayanin buƙata da AI ita ce:", options: ["Nemansa ya ƙirƙiri lambobi masu ƙarfi", "Ba shi komai ba", "Ba shi naku bayanan ku ce kada ya ƙara ƙididdiga", "Liƙa fayilolin abokan hulɗa"], answer: 2, why: "Bayananku suna sa daftarin ya zama gaskiya." },
      { objective: "O3", q: "Bayanin shiri yana bayani:", options: ["Lambar harajinku kawai", "Yanayi", "Waɗanda ke cikin kwamitin gudanarwa", "Abin da za ku yi, don su wane ne, da abin da zai canja"], answer: 3, why: "Wannan ne aikinsa a neman tallafi." },
      { objective: "O3", q: "Kuna son saka labarin wani da kuke yi wa hidima. Kuna buƙatar:", options: ["Izini da rashin bayanan da ke nuna ko wane ne", "Cikakken sunansa da adireshinsa", "Babu komai", "Hoton katin shaidarsa"], answer: 0, why: "Labarai suna buƙatar izini da sirri." },
      { objective: "O3", q: "Mai bayarwa ya tambaya ko an yi amfani da AI. Ya kamata ku:", options: ["Ce a'a", "Amsa da gaskiya", "Ƙyale tambayar", "Nemi AI ya amsa"], answer: 1, why: "Gaskiya tana kare amincewa." },
      { objective: "O4", q: "Roƙo mai ƙarfi yana da:", options: ["Roƙo goma", "Babu roƙo", "Labari ɗaya, abin da gudummawa ke yi, da roƙo ɗaya bayyananne", "Dogon rahoton shekara"], answer: 2, why: "Gajere da takamaimai shi ne ya fi aiki." },
      { objective: "O4", q: "Mene ne kiran aiki (call to action)?", options: ["Kiran waya", "Sanarwar shari'a", "Ƙuri'ar kwamitin gudanarwa", "Abu ɗaya bayyananne da kuke neman mai karatu ya yi"], answer: 3, why: "Kamar \"Ku ba da gudummawa yau\"." },
      { objective: "O4", q: "Wanne ne kada ya TAƁA shiga kayan AI?", options: ["Jerin masu bayarwarku da tarihin gudummawarsu", "\"Ka sa ya fi daɗi\"", "Sunan shirin na fili", "Iyakar kalmomi"], answer: 0, why: "Bayanan masu bayarwa na sirri ne." },
      { objective: "O5", q: "Me yasa za a yi samfuran godiya bisa irin mai bayarwa?", options: ["Don rage takarda", "Masu bayarwa daban-daban suna buƙatar saƙonni daban-daban", "Masu bayarwa sun buƙace shi", "AI ba zai iya rubuta ɗaya ba"], answer: 1, why: "Masu bayarwa na farko da na kowane wata suna da dangantaka daban." },
      { objective: "O5", q: "Mail merge shi ne:", options: ["Haɗewar ƙungiyoyin sa-kai biyu", "Kuɗin gidan waya", "Kayan aiki da ke cike sunaye a wasiƙu don mutane da yawa", "Wani nau'in AI"], answer: 2, why: "Yana daidaita wasiƙu a waje da kayan AI." },
      { objective: "O5", q: "Me ke sa saƙon godiya ya ji kamar daga mutum yake?", options: ["Ƙarin madadi", "Samfuri mafi tsawo", "Aika shi a makare", "Layi na kanku da aka rubuta da hannu"], answer: 3, why: "Mutane suna lura da taɓawar mutum ta gaske." },
      { objective: "O6", q: "A dubawa ta ƙarshe, dole kowace lamba ta:", options: ["Fito daga takarda ko majiya", "Ƙara sama", "Zama babba", "Fito daga AI"], answer: 0, why: "Lambobin gaskiya suna kare amincewa." },
      { objective: "O6", q: "Idan mai bayarwa ya gano magana ɗaya ta ƙarya:", options: ["Babu abin da zai faru", "Wataƙila ba zai sake amincewa da ku ba", "Zai ƙara bayarwa", "Ana tsammanin haka"], answer: 1, why: "Amincewa tana da wuyar sake ginawa." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      2,
      6,
      8,
      12,
      15,
      18
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Tallafin ya dace",
        objective: "O1",
        notYet: "Tallafin bai dace da shirin ba, ko ba a duba wanda ya cancanta ba.",
        meets: "Dama ɗaya ta gaske da ta dace da shirin, an duba wanda ya cancanta.",
        exceeds: "An ambaci dama ta biyu da wa'adin kowacce."
      },
      {
        name: "Ya bi ƙa'idodin",
        objective: "O2",
        notYet: "An rasa wani sashe, iyaka ko takardar haɗawa da ake buƙata.",
        meets: "Daftarin ya bi jerin dubawa, sassa da iyakar kalmomin mai bayarwa.",
        exceeds: "An duba jerin dubawa layi-layi da takardar mai bayarwa."
      },
      {
        name: "Buƙata da shiri daga bayanai",
        objective: "O3",
        notYet: "Akwai ƙididdiga ko sakamako da ba za a iya nemo asalinsa a takarda ko majiya ba.",
        meets: "Bayanin buƙata na kusan kalmomi 250 da bayanin shiri da ke amfani da bayanan da aka tabbatar kaɗai.",
        exceeds: "Yana amfani da kalmomi da abubuwan da mai bayarwa ya fi so, kuma yana da labari da aka ba da izininsa."
      },
      {
        name: "Roƙon masu bayarwa",
        objective: "O4",
        notYet: "Babu roƙo bayyananne, ko akwai bayanan masu bayarwa a cikin prompt.",
        meets: "Kusan kalmomi 150 mai labari ɗaya, abin da gudummawa ke yi da roƙo ɗaya bayyananne, da madadi.",
        exceeds: "Adadin kuɗin da abin da yake bayarwa sun fito daga ainihin kuɗin shirin."
      },
      {
        name: "Gaskiya kuma da muryarmu",
        objective: "O6",
        notYet: "Akwai sauran ƙirƙirarren sakamako, abokin aiki ko goyon baya.",
        meets: "Kowace magana gaskiya ce kuma duka biyun suna kama da ƙungiyar.",
        exceeds: "Abokin aiki da ya san shirin ya karanta kuma ya amince da shi."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Neman tallafin da aka aika cikin kwanaki 90 (binciken biyo baya)",
      "Tallafin da aka samu da kuɗin da roƙo ya tara, kamar yadda ƙungiyoyi suka faɗa",
      "Masu koyo da suka fara wani kwas na Koach Learn na ƙungiyoyin sa-kai cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta mai intanet",
      "Mataimakin AI kyauta",
      "Bayanai da takardun shirinku, da ƙa'idodin fili na mai bayarwa ɗaya",
      "Kusan minti 60 gaba ɗaya, da ƙarin lokacin gyara daftarorin"
    ],
    facilitatorNotes: [
      "Ku nemi masu koyo su zo da damar tallafi ɗaya ta gaske da lambobin shirinsu zuwa zaman.",
      "Ku tunatar da masu koyo kada su taɓa liƙa jerin masu bayarwa, sunaye ko tarihin gudummawa a kayan AI.",
      "Ku gargaɗi masu koyo game da kamfanonin da ke karɓar kuɗi don yi musu rajista a SAM.gov; kyauta ce.",
      "Ku haɗa masu koyo biyu-biyu su karanta daftarin juna da babbar murya kuma su nemo asalin kowace lamba.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
