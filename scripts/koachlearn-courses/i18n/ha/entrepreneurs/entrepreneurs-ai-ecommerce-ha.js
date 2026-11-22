"use strict";

// Koach Learn course, Hausa (ha) translation of entrepreneurs/entrepreneurs-ai-ecommerce.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "entrepreneurs-ai-ecommerce-ha",
  lang: "ha",
  translationOf: "entrepreneurs-ai-ecommerce",
  category: "Entrepreneurs",
  name: "Kasuwancin Intanet (eCommerce) da Taimakon AI",
  skills: "Binciken rukunin kaya (niche), Rubuta bayanin kaya da taimakon AI, Yin hotunan kaya, Tsara ƙa'idojin aikawa da mayar da kaya, Amsa wa abokan ciniki da taimakon AI, Amfani da imel da sharhi bisa doka",
  outcome: "binciken rukunin kaya (niche), amfani da AI don rubuta bayanin kaya na gaskiya da yin hotunan kaya masu tsabta, tsara ƙa'idojin aikawa da mayar da kaya da suka bi dokar FTC ta odar kaya ta wasiƙa da intanet, da shirya amsoshin abokan ciniki, imel na biyo baya da neman sharhi da taimakon AI, bisa dokokin Amurka.",
  about: [
    "Sayar da kaya ta intanet ya fi sauƙin farawa fiye da da: kuna iya sayarwa ta shagonku na kanku (a dandamali kamar Shopify, Square Online ko Wix), a kasuwannin intanet (Etsy, Amazon, eBay), ko a shagunan kafofin sada zumunta. AI zai iya taimakawa a kusan kowane mataki, daga neman rukunin kaya zuwa rubuta bayanin kaya zuwa amsa wa abokan ciniki.",
    "Wannan kwas ɗin na mutanen da ke fara shagon intanet ne ko suke son su faɗaɗa shi. A Babi na 1 za ku binciki rukunin kaya, ku rubuta bayanin kaya, ku yi hotunan kaya da AI. A Babi na 2 za ku tsara ƙa'idojin aikawa da mayar da kaya, ku amsa tambayoyin abokan ciniki, ku kuma yi amfani da imel da sharhi don girma, bisa dokokin Amurka na hukumar FTC.",
    "Kowane darasi yana ɗaukar kusan minti biyar, tare da aikin hannu. Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe. Kuɗin dandamali da abubuwan da suke bayarwa suna canjawa sau da yawa, don haka ku duba shafukan farashi da taimako na kowane dandamali kafin ku zaɓa."
  ],
  finalTask: "Ku haɗa kayan ƙaddamarwa (launch kit) don rukunin kaya ɗaya: taƙaitaccen bayanin rukunin kaya a sakin layi ɗaya tare da shaidar cewa ana buƙatarsa, bayanin kaya guda uku da aka gama (suna, bayani, muhimman bayanai) tare da hotuna masu tsabta, rubutattun ƙa'idojin aikawa da mayar da kaya da lokacin aikawa da za ku iya cikawa da gaske, samfurin amsoshin abokan ciniki guda biyar da aka yi da taimakon AI, da imel ɗaya na biyo baya da neman sharhi da suka bi dokar CAN-SPAM da dokokin FTC kan sharhi.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Mutanen da ke fara ko faɗaɗa ƙaramin shagon intanet a Amurka: masu yin kaya da hannunsu, masu sake sayar da kaya, da masu ƙaramin kasuwanci na gefe da ke sayarwa ta shagonsu na kansu, kasuwar intanet ko shagon kafofin sada zumunta.",
    startingPoint: "Suna iya amfani da waya ko kwamfuta, duba shagunan intanet, da rubutu a mataimakin AI kyauta. Ba su da ƙwarewa sosai wajen binciken buƙatar kasuwa, rubuta bayanin kaya ko rubuta ƙa'idojin shago.",
    gap: "Sababbin masu sayarwa sau da yawa suna yin tsammani game da abin da za su sayar, suna kwafo rubutun AI da ke da iƙirarin ƙarya, kuma suna alƙawarin lokacin aikawa da ba za su iya cikawa ba. Masu koyo suna buƙatar amfani da AI don yin aiki da sauri yayin da suke faɗa wa masu saye gaskiya da bin dokokin FTC, don su guji mayar da kuɗi, mummunan sharhi da matsalar shari'a.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli",
      "Na'urori: waya ko kwamfuta mai intanet; kyamarar waya don hotunan kaya",
      "Lokaci: darussa na kusan minti 5 da suka dace da gudanar da kasuwanci",
      "Dokoki: dokar FTC ta odar kaya ta wasiƙa, dokokin FTC kan sharhi da CAN-SPAM suna aiki ga masu sayarwa a Amurka",
      "Sirri: kada ku taɓa liƙa adireshin abokin ciniki, katinsa ko bayanan odarsa a kayan aikin AI"
    ],
    prerequisites: "Babu. Masu koyo da suke sababbi ga kayan aikin AI za su iya fara ɗaukar kwas ɗin \"Introduction to AI and Digital Confidence\" (Gabatarwa ga AI da Ƙarfin Gwiwa a Fasahar Zamani)."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Ta amfani da mataimakin AI da kasuwar intanet ta gaske", action: "zaɓar rukunin kaya (niche) da nuna shaidar cewa mutane sun riga sun fara saye a cikinsa", standard: "da aƙalla misalai uku na gaske daga kasuwar intanet a matsayin shaida" },
    { id: "O2", condition: "Idan aka ba ku ainihin bayanan wani kaya", action: "rubuta bayanin kaya da taimakon AI wanda yake a sarari, ana iya samunsa a bincike, kuma gaskiya ne", standard: "an duba kowane iƙirari kuma babu wani abu na ƙarya da ya rage" },
    { id: "O3", condition: "Ta amfani da kyamarar waya da kayan aikin gyaran hoto na AI", action: "yin hotunan kaya da ke nuna ainihin kayan a sarari", standard: "tare da hoton girman kaya kuma babu gyaran da ke canja kamannin kayan" },
    { id: "O4", condition: "Ta amfani da dokar FTC ta odar kaya ta wasiƙa da intanet", action: "rubuta ƙa'idojin aikawa da mayar da kaya da saƙon jinkiri", standard: "da lokacin aikawa da za ku iya cikawa da gaske, da tayin mayar da kuɗi a saƙon jinkiri" },
    { id: "O5", condition: "Idan aka ba ku tambayoyin da abokan cinikin shagonku suka fi yi", action: "yin samfurin amsoshi da taimakon AI da ke amfani da ainihin ƙa'idojinku kawai", standard: "da samfura biyar da aka duba, kuma ba a ba AI bayanan sirri na kowane abokin ciniki ba" },
    { id: "O6", condition: "Ta amfani da CAN-SPAM da dokokin FTC kan sharhi", action: "rubuta imel na biyo baya da neman sharhi", standard: "da adireshi, hanyar dakatar da imel, kuma babu sharhin bogi ko wanda aka biya kuɗi" }
  ],
  chapters: [
    {
      name: "Babi na 1: Shirya kayan da ke sayuwa",
      lessons: [
        {
          objectives: ["O1"],
          title: "Binciken rukunin kaya (niche)",
          minutes: 5,
          goal: "Zaɓi rukunin kaya kuma ku tabbatar cewa mutane sun riga sun fara saye.",
          text: [
            "Rukunin kaya (niche) wani takamaiman rukuni ne na masu saye da ke da takamaiman buƙata: \"abin wuyan karnuka da aka yi da hannu don manyan karnuka\", \"kayan kula da gashi na halitta don yara\", \"kayan aikin lambu don ƙananan baranda\". Ya fi sauƙi a yi nasara a rukunin kaya fiye da babban rukuni na gama-gari.",
            "Ku yi amfani da AI don tunanin ra'ayoyi: \"Ina iya yi ko samo [kaya]. Ka ba ni rukunin kaya goma, mai saye na kowanne, da matsalar da kayan ke warwarewa.\" Sannan ku duba buƙata ta gaske da kanku: ku bincika kasuwar intanet don kaya masu kama, ku duba yawan sharhin da manyan masu sayarwa suke da shi, ku karanta sharhinsu na tauraro 3 don ganin ƙorafe-ƙorafen da za ku iya gyarawa, sannan ku duba shawarwarin bincike.",
            "AI ba zai iya ganin bayanan sayarwa na yanzu daidai ba, kuma yana iya ƙirƙirar lambobi. Ku yi amfani da shi don ra'ayoyi da tambayoyi; ku yi amfani da shafukan kasuwar intanet na gaske da tattaunawarku da mutane a matsayin shaida."
          ],
          steps: ["Ku nemi AI ya ba ku ra'ayoyin rukunin kaya goma bisa abin da za ku iya yi ko samowa.", "Ku bincika kasuwar intanet don kowane babban ra'ayi.", "Ku rubuta yawan sharhi da farashin manyan masu sayarwa.", "Ku karanta sharhi na tauraro 3 don ganin matsalolin da za ku iya gyarawa.", "Ku zaɓi rukunin kaya ɗaya da ke da buƙata a fili."],
          words: [["Rukunin kaya (niche)", "takamaiman rukuni na masu saye da ke da takamaiman buƙata."], ["Buƙata (demand)", "yawan mutanen da ke son sayen wani abu."], ["Kasuwar intanet (marketplace)", "shafin intanet inda masu sayarwa da yawa ke saka kayansu, kamar Etsy, Amazon ko eBay."]],
          slides: [
            { title: "Ku zaɓi takamaimai", bullets: ["\"Abin wuyan karnuka don manyan karnuka\"", "Ya fi sauƙin nasara fiye da rukunin gama-gari"] },
            { title: "AI don ra'ayoyi", bullets: ["Rukunin kaya goma, masu saye da matsaloli", "Bisa abin da za ku iya yi ko samowa"] },
            { title: "Shaida ta gaske", bullets: ["Ku bincika kasuwar intanet", "Yawan sharhi da farashin manyan masu sayarwa", "Sharhi na tauraro 3 yana nuna matsalolin da za a gyara"] },
            { title: "Ku yi hankali", bullets: ["AI yana iya ƙirƙirar lambobin sayarwa", "Ku yi amfani da shafuka na gaske a matsayin shaida"] }
          ],
          tryIt: "Ku yi amfani da AI don tunanin rukunin kaya goma, ku duba uku daga cikinsu a kasuwar intanet ta gaske, sannan ku rubuta taƙaitaccen bayani a sakin layi ɗaya game da rukunin da kuka zaɓa tare da shaidarku ta buƙata.",
          youCanNow: "zaɓar rukunin kaya bisa shaida ta gaske cewa ana buƙatarsa.",
          quickCheck: [
            { objective: "O1", q: "Me ake ɗauka a matsayin shaidar cewa mutane sun riga sun fara saye a wani rukunin kaya?", options: ["Kayan aikin AI ya ce rukunin ya shahara", "Kayan da ke kasuwar intanet ta gaske tare da sayarwa da sharhi", "Abokanku sun ce suna son ra'ayin", "Rukunin kaya da babu mai sayarwa ko ɗaya a cikinsa"], answer: 1, why: "Kayan da ke kasuwa ta gaske tare da sayarwa da sharhi suna nuna ainihin buƙata, amma AI yana iya ƙirƙirar lambobi." },
            { objective: "O1", q: "Kuna da ra'ayoyin rukunin kaya goma daga AI. Me za ku yi a gaba?", options: ["Ku zaɓi wanda AI ya fara lissafawa", "Ku fara sayen kaya don dukkan goman", "Ku duba wasu daga cikinsu a kasuwar intanet ta gaske kafin ku zaɓa", "Ku zaɓi wanda ke da suna mafi tsawo"], answer: 2, why: "Duba ra'ayoyin a kasuwar intanet ta gaske yana mayar da tunanin AI zuwa shaida." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Rubuta bayanin kaya na gaskiya",
          minutes: 5,
          goal: "Rubuta sunan kaya da bayaninsa da AI, wanda yake a sarari, ana iya samunsa a bincike, kuma gaskiya ne.",
          text: [
            "Bayanin kaya mai kyau yana amsa tambayoyin mai saye kafin ya yi su: mene ne kayan, na wa ne, girmansa, abin da aka yi shi da shi, abin da ke ciki, yadda ake kula da shi, da lokacin aikawa. Sunan kayan ya kamata ya yi amfani da kalmomin da masu saye ke bincike da su, ba tare da cushe kalmomin bincike da yawa ba.",
            "Ku ba AI ainihin bayanan kayan ku ce: \"Ka rubuta sunan kaya da bai kai haruffa 80 ba, da bayani mai gajeriyar gabatarwa, jeri 5 da umarnin kula. Ka yi amfani da waɗannan bayanan kawai: [bayanai].\" AI sau da yawa yana ƙara abubuwan da ba ku ambata ba; ku goge duk abin da ba gaskiya ba ne.",
            "Hukumar FTC ta ce dole ne talla ta zama gaskiya kuma tana da shaida. Kada ku ce \"organic\" (na halitta ba tare da sinadarai ba), \"handmade\" (da hannu aka yi), \"made in USA\" (an yi a Amurka), amfanin lafiya ko \"best seller\" (wanda aka fi saye) sai dai idan gaskiya ne kuma za ku iya tabbatar da shi. Ku kuma duba ƙa'idojin bayanin kaya na kowane dandamali."
          ],
          steps: ["Ku rubuta kowane ainihin bayani game da kayan.", "Ku nemi AI ya rubuta suna da bayani ta amfani da waɗannan bayanan kawai.", "Ku goge duk abin da AI ya ƙara wanda ba gaskiya ba ne.", "Ku duba iƙirari kamar organic, handmade ko made in USA.", "Ku duba ƙa'idojin bayanin kaya na dandamalin."],
          words: [["Bayanin kaya (listing)", "shafin wani kaya a shago ko kasuwar intanet."], ["Kalmar bincike (keyword)", "kalma ko jimla da masu saye ke rubutawa a bincike."]],
          slides: [
            { title: "Ku amsa tambayoyin mai saye", bullets: ["Mene ne, na wa ne, girma, abin da aka yi shi da shi", "Abin da ke ciki, kula, lokacin aikawa"] },
            { title: "AI da bayananku kawai", bullets: ["Suna da bai kai haruffa 80 ba", "Gabatarwa, jeri 5, umarnin kula", "Ku goge duk abin da ba gaskiya ba ne"] },
            { title: "Iƙirari na buƙatar shaida", bullets: ["\"Organic\", \"handmade\", \"made in USA\"", "Amfanin lafiya, \"best seller\"", "Ku kuma duba ƙa'idojin dandamali"] }
          ],
          sources: [{ name: "FTC: Advertising and Marketing Basics (Tushen talla da kasuwanci)", url: "https://www.ftc.gov/business-guidance/advertising-marketing/advertising-marketing-basics" }],
          tryIt: "Ku rubuta bayanan kaya uku, ku yi amfani da AI don rubuta daftarin bayanin kowanne. Ku cire duk abin da ba gaskiya ba ne, ku kuma duba kowane iƙirari.",
          youCanNow: "rubuta bayanin kaya a sarari, wanda ake iya samunsa a bincike, kuma yake faɗin gaskiya.",
          quickCheck: [
            { objective: "O2", q: "Me ya kamata ku ba AI idan kuna neman ya rubuta daftarin bayanin kaya?", options: ["Ainihin bayanan kayan kawai, ku kuma ce ya yi amfani da su kaɗai", "Bayanin kayan wani mai gasa don ya kwafe kalma da kalma", "Babu komai, don ya yi ƙirƙira", "Iƙirarin da kuke fatan gaskiya ne"], answer: 0, why: "AI yana rubuta bayanin kaya na gaskiya ne kawai idan ya yi aiki daga ainihin bayananku." },
            { objective: "O2", q: "Daftarin AI ya ce kofinku \"ana iya wanke shi a injin wanke kwanoni\", amma ba ku taɓa gwadawa ba. Me za ku yi?", options: ["Ku bar shi domin masu saye suna son shi", "Ku ƙara \"wataƙila\" a gabansa", "Ku mayar da shi ƙarshen bayanin", "Ku cire iƙirarin har sai kun iya tabbatar da shi"], answer: 3, why: "Iƙirari game da kaya dole ne ya zama gaskiya kuma yana da shaida kafin ku yi amfani da shi." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Yin hotunan kaya masu tsabta",
          minutes: 5,
          goal: "Yi hotuna da zane-zanen kaya da ke nuna ainihin kayan a sarari.",
          text: [
            "Hotuna suna sayar da kaya. Ku yi amfani da wayarku da hasken rana kusa da taga, a kan bango mara ado, ku ɗauki hotuna daga kusurwoyi da yawa, da hoton kusa, da hoton da ke nuna girma (a hannu ko kusa da wani abu da aka saba gani).",
            "Kayan aikin AI za su iya taimakawa: cire ko canja bango, gyara haske, canja girman hoto don kowane dandamali, da yin zane-zanen da ke nuna ana amfani da kayan a kayan aiki kamar Canva. Kasuwannin intanet da yawa suna da ƙa'idoji don babban hoto, kamar bango mara ado; ku duba ƙa'idojin hoto na dandamalin.",
            "Kada ku taɓa amfani da AI don sa kayan ya yi kama da wani abu daban da abin da mai saye zai karɓa: babu launuka, girma, siffofi ko sakamako na bogi. Hotunan yaudara za su iya kawo mayar da kaya, mummunan sharhi, hukunci daga dandamali da matsalar tallar yaudara."
          ],
          steps: ["Ku ɗauki hoto da hasken rana a kan bango mara ado.", "Ku ɗauki kusurwoyi da yawa, hoton kusa da hoton girma.", "Ku yi amfani da kayan aikin AI don tsabtace bango da canja girman hoto.", "Ku duba ƙa'idojin hoto na dandamalin.", "Ku kwatanta kowane hoto da ainihin kayan."],
          words: [["Hoton amfani (lifestyle image)", "hoto ko zane da ke nuna ana amfani da kayan."], ["Cire bango (background removal)", "kayan aikin gyara da ke yanke kayan daga bangonsa."]],
          slides: [
            { title: "Ku ɗauki hoto da kyau", bullets: ["Hasken rana kusa da taga", "Bango mara ado", "Kusurwoyi, hoton kusa, hoton girma"] },
            { title: "AI yana taimakawa wajen gyara", bullets: ["Cire ko canja bango", "Gyara haske, canja girma don kowane dandamali", "Zane-zanen amfani a Canva"] },
            { title: "Kada ku taɓa yaudara", bullets: ["Babu launuka, girma ko siffofi na bogi", "Ku duba ƙa'idojin hoto na kowane dandamali"] }
          ],
          tryIt: "Ku ɗauki hoton kaya ɗaya (kusurwoyi, hoton kusa, girma), ku tsabtace babban hoton da kayan aikin AI na cire bango, sannan ku kwatanta shi da ainihin kayan kafin ku yi amfani da shi.",
          youCanNow: "yin hotunan kaya masu tsabta da gaskiya da taimakon gyaran AI.",
          quickCheck: [
            { objective: "O3", q: "Wane rukunin hotuna ne ke nuna kaya da gaskiya kuma a sarari?", options: ["Hoto ɗaya mai duhu da aka ɗauka da dare", "'Yan kusurwoyi, hoton kusa da hoton girma", "Hoto ɗaya da AI ya yi na wani kaya mai kama", "Hoto mai bango cike da wasu kaya"], answer: 1, why: "Kusurwoyi da yawa, hoton kusa da hoton girma suna nuna wa masu saye abin da za su karɓa da gaske." },
            { objective: "O3", q: "Kayan aikin AI ya sa launin gyalenku ya yi haske fiye da yadda yake da gaske. Me za ku yi?", options: ["Ku yi amfani da shi domin ya fi kyau", "Ku yi amfani da shi amma ku sa irin wannan gyara a sauran ma", "Ku gyara shi don hoton ya yi daidai da ainihin kayan", "Ku goge dukkan hotunanku ku yi amfani da hotunan sayarwa na gama-gari"], answer: 2, why: "Dole ne hotuna su yi daidai da ainihin kayan, ko kuma za a yaudari masu saye kuma su nemi a mayar musu da kuɗi." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Shirya kayan da ke sayuwa",
        questions: [
          { objective: "O1", q: "Wanne ne rukunin kaya (niche)?", options: ["Kayayyaki", "Kayan aikin lambu don ƙananan baranda", "Komai don kowa", "Kaya"], answer: 1, why: "Yana faɗin takamaiman masu saye da takamaiman buƙata." },
          { objective: "O1", q: "AI ya ce wani kaya yana sayuwa guda 10,000 a wata. Me za ku yi?", options: ["Ku wallafa lambar a matsayin gaskiya", "Ku amince da ita", "Ku yi odar guda 10,000", "Ku duba shaida ta gaske a kasuwar intanet; AI yana iya ƙirƙirar lambobi"], answer: 3, why: "AI ba zai iya ganin bayanan sayarwa na yanzu daidai ba." },
          { objective: "O2", q: "AI ya ƙara \"ruwa ba ya shiga\" a bayanin kayanku, amma ba haka yake ba. Me za ku yi?", options: ["Ku goge shi", "Ku bar shi", "Ku yi masa rubutu mai kauri", "Ku ƙara \"da tabbaci\""], answer: 0, why: "Dole ne bayanin kaya ya zama gaskiya." },
          { objective: "O2", q: "Wane iƙirari ne ke buƙatar shaida kafin ku yi amfani da shi?", options: ["\"Ana aikawa a cikin akwati\"", "\"Shuɗi\"", "\"Made in USA\" (an yi a Amurka)", "\"Yana zuwa da kati\""], answer: 2, why: "Iƙirari game da inda aka yi kaya kamar made in USA dole ne ya zama gaskiya kuma ana iya tabbatarwa." },
          { objective: "O3", q: "Wane amfani da AI a hotunan kaya ne BA daidai ba?", options: ["Gyara haske", "Cire bango", "Sa kayan ya yi kama da ya fi girmansa", "Canja girman hoto don dandamali"], answer: 2, why: "Hotunan yaudara suna yaudarar masu saye." }
        ]
      }
    },
    {
      name: "Babi na 2: Hidima da girma",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ƙa'idojin aikawa da mayar da kaya",
          minutes: 6,
          goal: "Rubuta ƙa'idojin aikawa da mayar da kaya da suka bi dokar FTC ta odar kaya ta wasiƙa da intanet.",
          text: [
            "Dokar FTC ta Mail, Internet, or Telephone Order Merchandise Rule (dokar odar kaya ta wasiƙa, intanet ko waya) ta ce: idan kun faɗi lokacin aikawa, dole ne ku kasance da dalili mai ma'ana na yarda cewa za ku iya cikawa; idan ba ku faɗi ba, dole ne ku kasance da dalili mai ma'ana na aikawa cikin kwanaki 30.",
            "Idan ba za ku iya aikawa a kan lokaci ba, dole ne ku sanar da mai saye, ku ba shi sabuwar rana, ku kuma ba shi zaɓin soke odar don a mayar masa da kuɗi da sauri. Mayar da kuɗi don biyan kuɗi da hannu, cak, money order ko katin bashi na wani kamfani dole ne a yi shi cikin kwanakin aiki bakwai bayan sokewa, kuma ba za a iya ba da bashin shago (store credit) a madadin mayar da kuɗin da doka ta wajabta ba.",
            "AI zai iya rubuta daftarin shafukan ƙa'ida a sarari: \"Ka rubuta ƙa'idar aikawa da mayar da kaya mai daɗi don ƙaramin shagon intanet. Muna aikawa cikin kwanakin aiki 3 zuwa 5. Ana karɓar mayar da kaya cikin kwanaki 30 ga kayan da ba a yi amfani da su ba; mai saye ne zai biya kuɗin aikawar mayarwa.\" Sannan ku duba ya yi daidai da abin da kuke yi da gaske, da ƙa'idojin dandamalin."
          ],
          steps: ["Ku yanke lokacin aikawa da za ku iya cikawa da gaske.", "Ku yanke ƙa'idojinku na mayar da kaya.", "Ku nemi AI ya rubuta daftarin ƙa'idojin biyu da kalmomi masu sauƙi.", "Ku duba su da dokar FTC da ƙa'idojin dandamalinku.", "Ku rubuta samfurin saƙon jinkiri da ke ba da zaɓin soke oda da mayar da kuɗi."],
          words: [["Dokar odar kaya ta wasiƙa (mail order rule)", "dokar FTC kan lokacin aikawa, sanarwar jinkiri da mayar da kuɗi don odar da aka yi ta wasiƙa, intanet ko waya."], ["Sabuwar rana (revised date)", "sabuwar ranar aikawa da kuke ba mai saye bayan jinkiri."]],
          slides: [
            { title: "Lokacin aikawa (dokar FTC)", bullets: ["Idan kun faɗi lokaci: dalili mai ma'ana na cikawa", "Idan ba ku faɗi lokaci ba: ku aika cikin kwanaki 30"] },
            { title: "Jinkiri", bullets: ["Ku sanar da mai saye, ku ba shi sabuwar rana", "Ku ba da zaɓin soke oda da mayar da kuɗi da sauri", "Mayar da kuɗi cikin kwanakin aiki 7 (kuɗi hannu, kati)"] },
            { title: "Daftari da AI", bullets: ["Shafukan ƙa'ida masu sauƙi da daɗi", "Su yi daidai da abin da kuke yi da gaske", "Ku kuma duba ƙa'idojin dandamali"] }
          ],
          sources: [{ name: "FTC: Business Guide to the Mail, Internet, or Telephone Order Merchandise Rule (Jagorar kasuwanci ga dokar odar kaya)", url: "https://www.ftc.gov/business-guidance/resources/business-guide-ftcs-mail-internet-or-telephone-order-merchandise-rule" }],
          tryIt: "Ku rubuta ƙa'idojinku na aikawa da mayar da kaya da AI, ku duba su da dokar FTC, sannan ku rubuta saƙon jinkiri da ke ba da sabuwar rana kuma yake ba da zaɓin soke oda da mayar da kuɗi.",
          youCanNow: "tsara ƙa'idojin aikawa da mayar da kaya da ke a sarari, na gaskiya, kuma sun bi dokar FTC.",
          quickCheck: [
            { objective: "O4", q: "Me ya kamata ƙa'idar aikawa ta yi alƙawari?", options: ["Lokaci mafi sauri da kowane mai sayarwa ke bayarwa", "Babu lokaci kwata-kwata, don kada ku taɓa yin jinkiri", "Isarwa washegari ga kowace oda", "Lokacin aikawa da kuke da dalili na gaske na cikawa"], answer: 3, why: "Dokar FTC ta ce kuna buƙatar dalili mai ma'ana na cika duk lokacin aikawa da kuka faɗa." },
            { objective: "O4", q: "Jinkiri daga mai ba ku kaya yana nufin wata oda za ta tafi a makare. Me za ku yi?", options: ["Ku sanar da mai saye, ku ba da sabuwar rana, ku ba da zaɓin soke oda da mayar da kuɗi", "Ku yi shiru ku yi fatan ba zai lura ba", "Ku ba da bashin shago kawai", "Ku soke odar ba tare da sanar da shi ba"], answer: 0, why: "Dokar tana buƙatar sanarwar jinkiri mai sabuwar rana da zaɓin soke oda don a mayar da kuɗi." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Amsa wa abokan ciniki da taimakon AI",
          minutes: 5,
          goal: "Yi samfurin amsoshi don tambayoyi biyar da abokan cinikinku suka fi yi.",
          text: [
            "Shagunan intanet suna samun tambayoyi iri ɗaya akai-akai: Ina odata take? Zan iya mayar da wannan? Wane girma zan saya? Kuna aikawa yankina? Akwai wannan a ajiya? Ku rubuta samfuri don kowanne, tare da wuraren cike bayanai.",
            "AI zai iya rubuta samfura masu daɗi daga ainihin ƙa'idojinku. Don sababbin tambayoyi, ku taƙaita tambayar ba tare da sunan abokin ciniki, adireshinsa ko lambar odarsa ba, ku nemi AI ya ba da amsa, sannan ku cike bayanan da kanku.",
            "Idan kun saka chatbot (shirin amsa saƙonni kai tsaye) a shagonku, ku ba shi ainihin ƙa'idojinku da bayanan kayanku kawai, ku sanar da abokan ciniki cewa na'ura ce ke amsawa, kuma ku sauƙaƙa musu samun mutum. Ku duba abin da kamfanin chatbot ɗin ke yi da bayanan abokan ciniki."
          ],
          steps: ["Ku lissafa tambayoyi biyar da abokan ciniki suka fi yi.", "Ku ba AI ainihin ƙa'idojinku ku nemi samfura masu [wuraren cikewa].", "Ku duba kowane samfuri da ƙa'idojinku.", "Don sababbin tambayoyi, ku taƙaita ba tare da bayanan sirri ba.", "Idan kuna amfani da chatbot, ku ba shi bayanai na gaske da hanyar samun mutum."],
          words: [["Samfurin amsa (reply template)", "amsar da aka riga aka shirya tare da wuraren da kuke cikewa."], ["Chatbot", "shirin na'ura da ke amsa saƙonnin abokan ciniki da kansa."]],
          slides: [
            { title: "Tambayoyin da aka saba", bullets: ["Ina odata take? Mayar da kaya?", "Girma, yankin aikawa, ajiya"] },
            { title: "Samfura daga ƙa'idojinku", bullets: ["Masu daɗi, tare da [wuraren cikewa]", "Ku duba su da abin da kuke yi da gaske"] },
            { title: "Chatbot", bullets: ["Ƙa'idoji da bayanai na gaske kawai", "Ku faɗi cewa na'ura ce", "Hanya mai sauƙi ta samun mutum"] }
          ],
          tryIt: "Ku rubuta samfurin amsoshi biyar don tambayoyin da abokan cinikinku suka fi yi da AI, ta amfani da ainihin ƙa'idojinku kawai, sannan ku duba kowanne.",
          youCanNow: "amsa tambayoyin abokan ciniki da sauri kuma daidai da samfuran da AI ya rubuta.",
          quickCheck: [
            { objective: "O5", q: "Me ke sa samfurin amsa ga abokin ciniki ya zama amintacce don amfani?", options: ["Yana da daɗi, ko da an yi tsammanin bayanan", "Ya ginu kan ainihin ƙa'idojinku kuma kun duba shi", "AI ne ya rubuta shi, don haka dole ya zama daidai", "Yana alƙawarin duk abin da abokin ciniki ke so"], answer: 1, why: "Dole ne samfura su yi daidai da ainihin ƙa'idojinku, don haka kuna duba kowane da AI ya rubuta." },
            { objective: "O5", q: "Imel ɗin wani abokin ciniki yana da lambar odarsa da adireshin gidansa. Ta yaya za ku sami taimakon AI da amsar?", options: ["Ku liƙa dukkan imel ɗin a cikin AI", "Ku nemi abokin cinikin ya sake aiko da adireshin", "Ku taƙaita tambayar ba tare da bayanan sirri ba", "Ku saka shi a dandalin jama'a don neman shawara"], answer: 2, why: "Barin bayanan sirri a waje yana kare abokin ciniki yayin da kuke samun taimakon AI." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Imel na biyo baya da sharhi, bisa doka",
          minutes: 5,
          goal: "Rubuta imel na biyo baya da neman sharhi da suka bi CAN-SPAM da dokokin FTC kan sharhi.",
          text: [
            "Imel ga masu saye na baya (godiya, labarin dawowar kaya, tayi) yana kawo sake saye. Ku yi amfani da AI don rubuta gajerun imel, kuma ku bi dokar CAN-SPAM: layin From (mai aikawa) da layin batu na gaskiya, ku bayyana cewa talla ce idan talla ce, ku saka adireshinku na zahiri da hanyar dakatar da imel a sarari, kuma ku girmama buƙatun dakatarwa cikin kwanakin aiki 10. Yawancin dandamalin shago da na imel suna ƙara muku hanyar dakatarwa (unsubscribe) da kansu.",
            "Sharhi yana gina amincewa. Ku nemi kowane mai saye ya ba da sharhi na gaskiya, ba masu farin ciki kaɗai ba. Dokar FTC ta hana sharhi da shaidu na bogi (har da waɗanda AI ya yi daga mutanen da babu su) kuma ta hana ba da lada don sharhi mai kyau kawai. Kada ku taɓa sayen sharhi ko amfani da AI don rubuta su.",
            "Ku yi amfani da AI don karanta sharhinku don neman alamu: abin da masu saye ke so da abin da suke ƙorafi a kai. Ku gyara babban ƙorafin, kuma ku ambaci gyaran a bayanin kayanku ko imel ɗinku."
          ],
          steps: ["Ku rubuta daftarin gajeren imel na biyo baya ga masu saye na baya da AI.", "Ku duba shi don tushen CAN-SPAM: layuka na gaskiya, adireshi, hanyar dakatarwa.", "Ku rubuta daftarin neman sharhi na gaskiya ga kowane mai saye.", "Kada ku taɓa ba da lada don sharhi mai kyau kawai ko rubuta sharhi da AI.", "Ku yi amfani da AI don neman alamu a sharhinku na gaske."],
          words: [["Sake saye (repeat sale)", "sayarwa ga wanda ya taɓa saye a baya."], ["Hanyar dakatarwa (opt-out)", "hanyar daina karɓar imel; unsubscribe."]],
          slides: [
            { title: "Imel ga masu saye na baya", bullets: ["Godiya, dawowar kaya, tayi", "AI yana rubuta gajerun imel"] },
            { title: "Tushen CAN-SPAM", bullets: ["Layukan From da batu na gaskiya", "Adireshinku na zahiri", "Girmama dakatarwa cikin kwanakin aiki 10"] },
            { title: "Sharhi", bullets: ["Ku nemi kowane mai saye ya ba da sharhi na gaskiya", "Babu sharhin bogi ko wanda AI ya rubuta", "Babu lada don sharhi mai kyau kawai"] }
          ],
          sources: [{ name: "FTC: CAN-SPAM Act Compliance Guide for Business (Jagorar bin dokar CAN-SPAM)", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" }, { name: "FTC: Final rule banning fake reviews and testimonials (press release) (Dokar hana sharhin bogi)", url: "https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials" }],
          tryIt: "Aikin ƙarshe: ku rubuta imel ɗaya na biyo baya da neman sharhi ɗaya da suka bi dokoki, sannan ku haɗa kayan ƙaddamarwarku: taƙaitaccen bayanin rukunin kaya, bayanin kaya uku tare da hotuna, ƙa'idoji, samfurin amsoshi biyar, imel da neman sharhi.",
          youCanNow: "gudanar da shagon intanet da taimakon AI wanda ke faɗa wa masu saye gaskiya kuma yake bin dokokin Amurka.",
          quickCheck: [
            { objective: "O6", q: "Me dole imel ɗin talla ga abokan ciniki ya ƙunsa?", options: ["Lambar rangwame", "Adireshinku na zahiri da hanyar dakatar da imel", "Hoton kowane kaya", "Tarihin odar abokin ciniki"], answer: 1, why: "CAN-SPAM tana buƙatar adireshi na zahiri da hanyar dakatarwa mai aiki a imel ɗin talla." },
            { objective: "O6", q: "Wani aboki ya ce zai rubuta sharhi na tauraro biyar don shagonku. Me za ku yi?", options: ["Ku karɓa, tunda yana nufin alheri", "Ku karɓi uku kawai daga cikinsu", "Ku nemi AI ya rubuta wasu kamarsu", "Ku ƙi, ku nemi masu saye na gaske su ba da sharhi na gaskiya"], answer: 3, why: "Hukumar FTC ta hana sharhin bogi, don haka kuna neman masu saye na gaske su ba da na gaskiya." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Hidima da girma",
        questions: [
          { objective: "O4", q: "Ba ku faɗi lokacin aikawa ba. A ƙarƙashin dokar FTC, kuna buƙatar dalili mai ma'ana na aikawa cikin:", options: ["Shekara 1", "Kwana 1", "Kwanaki 30", "Kwanaki 90"], answer: 2, why: "Wannan ita ce \"dokar kwanaki 30\" ta FTC." },
          { objective: "O4", q: "Ba za ku iya aikawa a kan lokaci ba. Me dole ku yi?", options: ["Ku soke ba tare da sanar da su ba", "Ku yi shiru", "Ku ba da bashin shago kawai", "Ku sanar da mai saye, ku ba da sabuwar rana, ku ba da zaɓin soke oda da mayar da kuɗi"], answer: 3, why: "Dokar tana buƙatar sanarwar jinkiri da zaɓin soke oda." },
          { objective: "O5", q: "Tambayar wani abokin ciniki tana da adireshin gidansa. Ta yaya za ku sami taimakon AI?", options: ["Ku liƙa duka", "Ku taƙaita tambayar ba tare da adireshin ba", "Ku saka ta a fili ga jama'a", "Ku yi watsi da abokin cinikin"], answer: 1, why: "Ku bar bayanan sirri a waje da kayan aikin AI." },
          { objective: "O6", q: "Wace hanyar neman sharhi ce aka yarda da ita?", options: ["Neman kowane mai saye ya ba da sharhi na gaskiya", "Ba da kyauta kawai don sharhi na tauraro 5", "Rubuta sharhi da AI", "Sayen sharhi"], answer: 0, why: "Sharhi na gaskiya daga masu saye na gaske ba laifi ba ne." },
          { objective: "O6", q: "Cikin wane lokaci dole ku girmama buƙatar dakatar da imel?", options: ["Ba a taɓa ba", "Cikin shekara ɗaya", "Cikin kwanakin aiki 10", "Sai idan an nema sau biyu"], answer: 2, why: "Wannan ita ce buƙatar CAN-SPAM a jagorar FTC." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Kasuwancin Intanet (eCommerce) da Taimakon AI",
    questions: [
      { objective: "O1", q: "Wanne ne kasuwar intanet (marketplace)?", options: ["Takardar lissafi (spreadsheet)", "Etsy", "Firinta", "Asusun imel"], answer: 1, why: "Etsy, Amazon da eBay kasuwannin intanet ne." },
      { objective: "O1", q: "A ina ya kamata ku duba kuɗin dandamali?", options: ["Wani abokin ciniki", "Tsammani", "Tsohon bidiyo", "Shafukan farashi da taimako na dandamalin da kansa"], answer: 3, why: "Kuɗin dandamali suna canjawa sau da yawa." },
      { objective: "O1", q: "Karanta sharhi na tauraro 3 na masu gasa yana taimaka muku:", options: ["Samun kalmomin sirrinsu", "Kwafe hotunansu", "Rubuta sharhin bogi", "Nemo matsalolin da za ku iya gyarawa"], answer: 3, why: "Ƙorafe-ƙorafe suna nuna buƙatun da ba a cika ba." },
      { objective: "O1", q: "A binciken rukunin kaya, an fi amfani da AI don:", options: ["Ainihin lambobin sayarwa na yanzu", "Ra'ayoyi da tambayoyi, tare da shafuka na gaske a matsayin shaida", "Yanke shawara ta ƙarshe", "Sayen kaya"], answer: 1, why: "AI yana iya ƙirƙirar lambobi." },
      { objective: "O2", q: "Bayanin kaya mai kyau yana amsawa:", options: ["Babu komai", "Farashi kawai", "Mene ne, na wa ne, girma, abin da aka yi shi da shi, lokacin aikawa", "Labarin rayuwarku"], answer: 2, why: "Yana amsa tambayoyin mai saye kafin ya yi su." },
      { objective: "O2", q: "Idan kuna neman AI ya rubuta bayanin kaya, ku ba shi:", options: ["Ainihin bayanai kawai, ku ce ya yi amfani da su kaɗai", "Babu komai, ya yi tsammani", "Bayanin kayan mai gasa don ya kwafe", "Bayanan bankinku"], answer: 0, why: "Bayanai na gaske suna hana ƙirƙirar siffofi na ƙarya." },
      { objective: "O2", q: "Kalmar bincike (keyword) ita ce:", options: ["Lambar rangwame", "Kalmar sirri", "Kalmar da masu saye ke rubutawa a bincike", "Hoton kaya"], answer: 2, why: "Kalmomin bincike suna taimaka wa masu saye su sami bayanin kaya." },
      { objective: "O2", q: "A ƙarƙashin dokokin FTC, iƙirari game da kaya dole ne ya zama:", options: ["Gaskiya kuma yana da shaida", "Mai ban sha'awa", "Gajere", "AI ne ya rubuta shi"], answer: 0, why: "Dokar gaskiya a talla tana aiki a bayanin kaya." },
      { objective: "O3", q: "Don hotunan kaya, tsari mai kyau shi ne:", options: ["Ɗaki mai duhu", "Hasken rana da bango mara ado", "Bango mai cunkoso", "Hoto ɗaya mara haske kawai"], answer: 1, why: "Hotuna masu sarari suna sayar da kaya." },
      { objective: "O3", q: "Hoton girma yana nuna:", options: ["Farashi", "Tambari kawai", "Akwatin aikawa", "Kayan kusa da hannu ko wani abu da aka saba gani"], answer: 3, why: "Yana taimaka wa masu saye su fahimci girman kayan." },
      { objective: "O3", q: "Wane gyaran hoto na AI ne ba laifi?", options: ["Cire bango", "Canja launin kayan zuwa wanda ba ku sayarwa", "Ƙara siffofin da ba shi da su", "Sa shi ya yi kama da ya fi girma"], answer: 0, why: "Tsabtace bango ba ya yaudara." },
      { objective: "O4", q: "Idan kun faɗi lokacin aikawa, kuna buƙatar:", options: ["Amincewar AI", "Babu komai", "Shaidar wani shahararren mutum", "Dalili mai ma'ana na yarda cewa za ku iya cikawa"], answer: 3, why: "Dokar FTC tana buƙatar dalili mai ma'ana." },
      { objective: "O4", q: "Sanarwar jinkiri dole ta ba mai saye:", options: ["Farashi mafi tsada", "Bashin shago kawai", "Zaɓin soke oda don a mayar masa da kuɗi da sauri", "Babu komai"], answer: 2, why: "Masu saye za su iya zaɓar soke oda." },
      { objective: "O4", q: "Mayar da kuɗi don odar kati ko kuɗi hannu bayan sokewa dole ne a yi cikin:", options: ["Watanni shida", "Kwanakin aiki bakwai", "Shekara ɗaya", "Ba a taɓa ba"], answer: 1, why: "Jagorar FTC ta ce kwanakin aiki bakwai." },
      { objective: "O4", q: "Shin bashin shago zai iya maye gurbin mayar da kuɗin da doka ta wajabta?", options: ["A ƙarshen mako kawai", "Eh, koyaushe", "Don ƙananan oda kawai", "A'a"], answer: 3, why: "Jagorar ta ce bashin shago ba zai iya maye gurbin mayar da kuɗin da doka ta wajabta ba." },
      { objective: "O5", q: "Samfurin amsoshi ya kamata ya ginu kan:", options: ["Ƙa'idojin masu gasa", "Abin da AI ke tunani", "Ainihin ƙa'idojinku", "Babu komai"], answer: 2, why: "Dole samfura su yi daidai da abin da kuke yi da gaske." },
      { objective: "O5", q: "Chatbot na shago ya kamata ya:", options: ["Faɗi cewa na'ura ce kuma ya ba da hanyar samun mutum", "Yi kamar mutum ne", "Yi alƙawarin kowane irin mayar da kuɗi", "Kasance ba shi da bayanai"], answer: 0, why: "Gaskiya da hanyar samun mutum suna gina amincewa." },
      { objective: "O6", q: "Imel ɗin talla dole ya ƙunsa:", options: ["Kalmar sirrin mai saye", "Adireshinku na zahiri da hanyar dakatarwa", "Wa'adin bogi", "Tallace-tallace na ɓoye"], answer: 1, why: "Waɗannan su ne tushen CAN-SPAM." },
      { objective: "O6", q: "Dokar FTC kan sharhin bogi ta hana:", options: ["Neman sharhi na gaskiya", "Sharhin da AI ya yi daga mutanen da babu su", "Amsa sharhi", "Nuna sharhi na gaske"], answer: 1, why: "An hana sharhin bogi, har da waɗanda AI ya yi." },
      { objective: "O6", q: "Amfani da AI kan sharhinku na gaske zai iya taimaka muku:", options: ["Nemo alamu a abin da masu saye ke so da abin da suke ƙorafi a kai", "Goge mummunan sharhi", "Rubuta ƙarin sharhi", "Canja maki"], answer: 0, why: "Alamu suna nuna abin da za a gyara." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      2,
      4,
      7,
      8,
      11,
      12,
      15,
      17
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Rukunin kaya tare da shaida",
        objective: "O1",
        notYet: "Rukunin kayan tsammani ne, ko kuma shaida ɗaya tilo ita ce abin da AI ya faɗa.",
        meets: "Taƙaitaccen bayanin yana faɗin rukunin kaya kuma yana ba da shaida ta gaske daga kasuwar intanet cewa ana buƙatarsa.",
        exceeds: "Yana kuma faɗin wata matsala daga sharhin masu gasa da kayanku za su iya gyarawa."
      },
      {
        name: "Bayanin kaya na gaskiya",
        objective: "O2",
        notYet: "Wani bayanin kaya yana da iƙirarin da ba gaskiya ba ne ko ba a duba shi ba.",
        meets: "Bayanin kaya uku masu suna a sarari, bayani da muhimman bayanai, duka gaskiya.",
        exceeds: "Kowane bayanin kaya yana kuma amfani da kalmomin da masu saye ke bincike da su kuma yana amsa girma, abin da aka yi shi da shi da lokacin aikawa."
      },
      {
        name: "Hotuna masu sarari na gaske",
        objective: "O3",
        notYet: "Hotunan ba su da sarari, ko wani gyara yana canja kamannin kayan.",
        meets: "Kowane kaya yana da babban hoto mai tsabta da hoton girma da suka yi daidai da ainihin kayan.",
        exceeds: "Kowane kaya yana kuma da kusurwoyi da yawa da hoton kusa na cikakkun bayanai."
      },
      {
        name: "Aikawa da mayar da kaya",
        objective: "O4",
        notYet: "Babu lokacin aikawa, ko lokacin da ba za ku iya cikawa ba; babu shirin jinkiri.",
        meets: "Rubutattun ƙa'idoji masu lokacin aikawa da za ku iya cikawa, da saƙon jinkiri da ke ba da mayar da kuɗi.",
        exceeds: "Ƙa'idar mayar da kaya tana kuma faɗi a sarari wanda zai biya kuɗin aikawar mayarwa da yadda ake mayar da kuɗi da sauri."
      },
      {
        name: "Amsoshin abokan ciniki",
        objective: "O5",
        notYet: "Samfura ƙasa da biyar, ko samfurin da bai yi daidai da ƙa'idojinku ba.",
        meets: "Samfura biyar da aka duba, waɗanda suka ginu kan ainihin ƙa'idojinku.",
        exceeds: "Samfuran suna kuma faɗin lokacin da abokin ciniki zai ji daga gare ku da yadda zai sami mutum."
      },
      {
        name: "Imel da neman sharhi",
        objective: "O6",
        notYet: "Imel ɗin ba shi da adireshi ko hanyar dakatarwa, ko neman sharhin yana ba da lada don sharhi mai kyau.",
        meets: "Imel ɗin yana da adireshinku da hanyar dakatarwa, kuma neman sharhin yana neman sharhi na gaskiya.",
        exceeds: "Neman sharhin yana zuwa ga kowane mai saye, ba masu farin ciki kaɗai ba."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka wallafa aƙalla bayanin kaya ɗaya cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka yi sayarwa ta farko a intanet cikin kwanaki 90",
      "Masu koyo da suka fara wani kwas na kasuwanci na Koach Learn cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai intanet",
      "Kyamarar waya da bango mara ado don hotunan kaya",
      "Mataimakin AI kyauta (kamar ChatGPT, Microsoft Copilot ko Google Gemini) da kayan aikin cire bango kyauta",
      "Kaya ɗaya na gaske, ko kayan da kuke shirin sayarwa",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku nemi kowane mai koyo ya zo da kaya ɗaya na gaske ko ra'ayin kaya a sarari, don atisayen ya gina kayan ƙaddamarwa na gaske.",
      "Ku duba shafukan dokar FTC ta odar kaya, dokokin sharhi da CAN-SPAM tare a ftc.gov, maimakon dogara da taƙaitawar AI.",
      "Ku tunatar da masu koyo kada su taɓa liƙa sunayen abokan ciniki, adireshinsu ko bayanan odarsu a kayan aikin AI.",
      "Kuɗin dandamali suna canjawa sau da yawa; ku sa masu koyo su duba shafin farashi na kowane dandamali kafin su zaɓi ɗaya.",
      "Ku ba da maki ga kayan ƙaddamarwa da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
