"use strict";

// Koach Learn course, Hausa (ha) translation of agriculture-africa/agri-agribusiness-farm-management.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const CBK = { name: "Babban Bankin Kenya (Central Bank of Kenya): duba jerin cibiyoyin da ke da lasisi", url: "https://www.centralbank.go.ke" };
const CBN = { name: "Babban Bankin Najeriya (CBN): kare masu amfani da cibiyoyin da ke da lasisi", url: "https://www.cbn.gov.ng" };
const FAO_CSA = { name: "FAO: Littafin jagora kan noma mai jure sauyin yanayi (Climate-Smart Agriculture Sourcebook): sarrafa haɗarin gona", url: "https://openknowledge.fao.org/3/a-i3484e.pdf" };

module.exports = {
  id: "agri-agribusiness-farm-management-ha",
  lang: "ha",
  translationOf: "agri-agribusiness-farm-management",
  category: "Agriculture (Africa)",
  name: "Kasuwancin Noma da Sarrafa Gona",
  skills: "Ajiye bayanan gona masu sauƙi, Lissafin ribar kowane amfanin gona ko dabba (gross margin), Neman kasuwa da farashi mafi kyau, Sarrafa kuɗi da kuɗin waya (mobile money), Auna kuɗin bashi da sarrafa haɗari, Rubuta tsarin kasuwancin gona mai shafi ɗaya",
  outcome: "gudanar da gonarku kamar kasuwanci: ajiye bayanai, gano waɗanne amfanin gona ko dabbobi ne suka fi samun riba a kowace eka, tsara kuɗinku a tsawon shekara, auna ko bashi yana da ma'ana, da rubuta tsarin kasuwancin gona mai shafi ɗaya da za ku iya nuna wa ƙungiyar haɗin gwiwa, mai ba da bashi ko abokin kasuwanci.",
  about: [
    "Wannan kwas na manoma ƙanana ne, matasan 'yan kasuwar noma, ƙungiyoyin mata da matasa, shugabannin ƙungiyoyin haɗin gwiwa (cooperative) da jami'an faɗakarwar noma (extension officers) a Kenya, Najeriya da sauran Afirka, waɗanda ke son gonarsu ta fi samun kuɗi kuma ta rage haɗari.",
    "Babi na 1 yana ɗaukar gona kamar kasuwanci: ajiye bayanai masu sauƙi, lissafin ribar kowane aiki (kamar masara, wake, tumatir, kaji ko shanun nono), da neman kasuwa da farashi mafi kyau. Babi na 2 game da kuɗi da girma ne: amfani da kuɗin waya don sarrafa shigowa da fitar kuɗi, yanke shawara ko za a ci bashi da yadda ake sarrafa haɗari, da rubuta tsarin kasuwanci mai shafi ɗaya.",
    "Duk misalan kuɗi a wannan kwas lambobi ne na ƙirƙira don nuna hanyar; ku yi amfani da farashin yankinku. Wannan kwas ba ya ba da shawarar zuba jari ko ta bashi: kafin ku ci bashi, ku kwatanta tayi, ku tabbatar mai ba da bashin yana da lasisi, kuma ku tattauna da mai ba da shawara da kuka amince da shi kamar ƙungiyar haɗin gwiwarku, SACCO ko jami'in faɗakarwar noma. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas."
  ],
  finalTask: "Ku rubuta tsarin kasuwanci mai shafi ɗaya don gonarku (ko gonar misali): abin da kuke samarwa da a kan girman ƙasa nawa, ribar (gross margin) aƙalla ayyuka biyu (da farashi da kuɗaɗen kashewa na yankinku), wa za ku sayar wa da yadda, tsarin shigowa da fitar kuɗi na watanni 12 da ke nuna lokacin da kuɗi ke shigowa da fita, duk wani bashi da kuke tunani tare da jimlar kuɗinsa da yadda za ku biya shi, manyan haɗarinku da yadda za ku rage su, da manufofi uku na damina mai zuwa.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manoma ƙanana, matasan 'yan kasuwar noma, ƙungiyoyin mata da matasa, shugabannin ƙungiyoyin haɗin gwiwa da jami'an faɗakarwar noma a Kenya, Najeriya da sauran Afirka, waɗanda ke son gonarsu ta fi samun kuɗi kuma ta rage haɗari.",
    startingPoint: "Sun san yadda ake shuka amfanin gona da kiwon dabbobi, kuma sun san kusan abin da suke kashewa da samu. Kaɗan ne ke ajiye bayanai a rubuce, ke lissafin riba (gross margin), ke tsara kuɗi a tsawon shekara, ko ke kwatanta cikakken kuɗin bashi.",
    gap: "Ba tare da bayanai da lambobi ba, manoma ba sa iya ganin wane aiki ne ke biya, kuɗi yana ƙare musu a watannin yunwa, suna sayarwa a mafi ƙarancin farashi, kuma suna iya ɗaukar bashin da ba za su iya biya ba. Hanyar kasuwanci mai sauƙi tana taimaka musu su fi samun kuɗi, su ci bashi lafiya, kuma su nuna wa masu ba da bashi da masu saye tsari a sarari.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; masu koyo da yawa harshensu na biyu suke karantawa",
      "Na'urori: littafin rubutu ko waya mai sauƙi; tebur na lissafi (spreadsheet) a waya yana taimakawa amma ba dole ba ne",
      "Lissafi: tarawa, ragewa da jimloli masu sauƙi; lambobin misali na ƙirƙira ne, kuma masu koyo suna amfani da farashin yankinsu",
      "Tsaron kuɗi: kada a taɓa bayar da PIN ko code na kuɗin waya, kuma a yi amfani da masu ba da bashi masu lasisi kaɗai",
      "Farashi, masu ba da bashi da hukumomin sa ido sun bambanta da ƙasa da yanayi: masu koyo suna tabbatarwa da ƙungiyoyin haɗin gwiwa, jami'an faɗakarwar noma da hukumomin hukuma"
    ],
    prerequisites: "Babu."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Ta amfani da littafin rubutu ko tebur na lissafi a waya", action: "ajiye bayanan kuɗin da ke shigowa gona, kuɗin da ke fita da abin da aka samar", standard: "kuna rubuta kowane abu a ranar da ya faru, har da kwanakin aikin iyali" },
    { id: "O2", condition: "Idan aka ba ku amfanin gona, farashi da kuɗaɗen kashewa masu canjawa", action: "lissafin ribar (gross margin) kowace eka ta ayyuka biyu da kwatanta su", standard: "da lissafi daidai, kuna la'akari da haɗari da aiki, ba riba kawai ba" },
    { id: "O3", condition: "Idan aka ba ku babban amfanin gonarku", action: "kwatanta aƙalla hanyoyi uku na sayarwa da zaɓar mafi kyau", standard: "da farashi daga masu saye da yawa, ingancin da kowanne ke buƙata, da sharuɗɗan kowace yarjejeniya a rubuce" },
    { id: "O4", condition: "Don watanni 12 masu zuwa", action: "tsara shigowa da fitar kuɗin gonarku da amfani da kuɗin waya lafiya", standard: "kuna nuna watannin yunwa tare da tsari ga kowanne, kuma ba ku taɓa bayar da PIN ko code ba" },
    { id: "O5", condition: "Idan aka ba ku tayin bashi", action: "lissafin jimlar kuɗin bashin da yanke shawara ko ya dace da shigowa da fitar kuɗinku", standard: "kuna ƙara kowane kuɗin caji, kuma kuna tabbatar mai ba da bashin yana da lasisi" },
    { id: "O6", condition: "Ta amfani da bayananku da lambobinku", action: "rubuta tsarin kasuwancin gona mai shafi ɗaya tare da manyan haɗarinku da yadda za ku rage su", standard: "da dukkan sassan da ake buƙata da manufofi uku masu lambobi" }
  ],
  chapters: [
    {
      name: "Babi na 1: Gona kamar kasuwanci",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ajiye bayanan gona masu sauƙi",
          minutes: 5,
          goal: "Fara bayani mai sauƙi na kuɗin da ke shigowa gona, kuɗin da ke fita da abin da aka samar.",
          text: [
            "Ba za ku iya sarrafa abin da ba ku auna ba. Manoma da yawa sun san kusan abin da suke kashewa da samu, amma ba tare da bayanai ba yana da wuya a ga wane amfanin gona ne ke biya, a tsara, ko a sami bashi ko yarjejeniya da mai saye.",
            "Ku ajiye bayanai uku masu sauƙi. Kuɗin da ke fita: rana, don me (iri, taki, ma'aikata, sufuri, likitan dabbobi), wane amfanin gona ko dabba, adadin kuɗi. Kuɗin da ke shigowa: rana, abin da kuka sayar, nawa, ga wa, adadin kuɗi. Abin da aka samar: ranakun shuka, kayan da aka yi amfani da su, girbi a kowane fili, ƙwai ko nono a kowace rana. Littafin rubutu yana aiki; tebur na lissafi a waya ma yana aiki. Bayanan kuɗin waya (statement) ma suna taimaka muku ku tuna.",
            "Ku rubuta bayanai a ranar da abu ya faru. Ku raba kuɗin gona da kuɗin gida a cikin bayananku, ko da daga aljihu ɗaya suke fitowa, kuma ku ƙirga kwanakin aikin iyali ma, domin lokacinku yana da daraja."
          ],
          steps: ["Ku zaɓi littafin rubutu ko tebur na lissafi a waya.", "Ku yi shafuka ko teburai uku: kuɗin da ke fita, kuɗin da ke shigowa, abin da aka samar.", "Ku rubuta kowane abu a ranar da ya faru: rana, me, wane amfanin gona ko dabba, adadin kuɗi.", "Ku yi amfani da bayanan kuɗin waya don cike gurbin da kuka manta.", "Ku ƙirga kwanakin aikin iyali tare da na ma'aikatan da aka biya."],
          words: [["Ajiye bayanai", "rubuta abin da ke faruwa a gona: kuɗi, kayan noma da abin da aka samar."], ["Aiki (enterprise)", "aiki ɗaya a gona, kamar masara, wake, kaji ko shanun nono."]],
          slides: [
            { title: "Me yasa bayanai?", bullets: ["Ku ga wane amfanin gona ne ke biya", "Ku tsara damina", "Ku sami bashi ko yarjejeniya da mai saye"] },
            { title: "Bayanai uku masu sauƙi", bullets: ["Kuɗin da ke fita: rana, me, wane aiki, adadi", "Kuɗin da ke shigowa: rana, abin da aka sayar, ga wa, adadi", "Abin da aka samar: shuka, kayan noma, girbi, ƙwai, nono"] },
            { title: "Kyawawan halaye", bullets: ["Ku rubuta a ranar da abu ya faru", "Kuɗin gona daban da na gida", "Ku ƙirga aikin iyali ma"] }
          ],
          tryIt: "Ku fara bayananku yau. Ku yi teburai uku ku cike aƙalla abubuwa biyar daga watan da ya gabata, daga tunaninku da bayanan kuɗin wayarku.",
          youCanNow: "ajiye bayanai masu sauƙi na kuɗin da ke shigowa, kuɗin da ke fita da abin da aka samar ga kowane aikin gona.",
          quickCheck: [
            { objective: "O1", q: "Waɗanne ne bayanan gona uku masu sauƙi a wannan kwas?", options: ["Kuɗin da ke fita, kuɗin da ke shigowa da abin da aka samar", "Yanayi, farashi da labarai", "Sunaye, lambobin waya da adireshi", "Iri, kayan aiki da gine-gine"], answer: 0, why: "Waɗannan bayanai uku suna nuna abin da kuke kashewa, samu da samarwa." },
            { objective: "O1", q: "Kun manta rubuta takin da kuka saya makon jiya. Me zai taimaka muku ku tuna?", options: ["Ku yi hasashen lamba", "Bayanan kuɗin wayarku (statement)", "Ku bar shi", "Ku nemi AI ya ƙirƙira shi"], answer: 1, why: "Bayanan kuɗin waya suna taimakawa wajen cike gurbin bayananku." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Riba (gross margin): wane amfanin gona ne ya fi biya?",
          minutes: 6,
          goal: "Lissafa ribar (gross margin) kowace eka ta ayyuka biyu ku kwatanta su.",
          text: [
            "Riba (gross margin) = kuɗin da aiki ya kawo a rage kuɗaɗen kashewa na wannan aikin (kuɗaɗe masu canjawa: iri, taki, magunguna, ma'aikatan da aka biya, buhuna, sufuri). Ku lissafa ta a kowace eka (ko kowace hekta, ko kowane tsuntsaye 100) don ku iya kwatanta ayyuka da adalci.",
            "Misali da lambobi na ƙirƙira a shilin Kenya, eka ɗaya kowanne. Masara: buhu 18 a 3,500 = kuɗin shiga 63,000; kuɗaɗen kashewa 34,000 (iri 3,000, taki 14,000, ma'aikata 12,000, magunguna 2,000, buhuna da sufuri 3,000); riba 29,000. Wake: buhu 5 a 9,000 = kuɗin shiga 45,000; kuɗaɗen kashewa 18,000; riba 27,000. Ribobin sun kusa, amma wake kuma yana ƙara nitrogen (sinadarin ƙasa) kuma ana girbe shi da wuri. Ku yi amfani da farashinku: sun bambanta da wuri da yanayi.",
            "Ku kuma kwatanta riba a kowace ranar aiki da haɗari: amfanin gona mai riba mai yawa amma mai yawan yiwuwar lalacewa bazai zama zaɓi mafi kyau ba. Kuɗaɗe masu tsayawa (hayar ƙasa, kayan aiki, tankin ruwa) ana biyan su daga jimlar dukkan ribobin."
          ],
          steps: ["Ku zaɓi ayyuka biyu.", "Ku rubuta girbin da ake sa rai da farashin kowane ma'auni don samun kuɗin shiga.", "Ku jera kuɗaɗe masu canjawa na kowanne.", "Riba = kuɗin shiga - kuɗaɗe masu canjawa, a kowace eka.", "Ku kwatanta riba, aiki da haɗari."],
          words: [["Riba (gross margin)", "kuɗin da aiki ɗaya ya kawo a rage kuɗaɗen kashewa na wannan aikin."], ["Kuɗaɗe masu canjawa (variable costs)", "kuɗaɗen da ke canjawa da yawan abin da kuke shukawa, kamar iri, taki da ma'aikata."], ["Kuɗaɗe masu tsayawa (fixed costs)", "kuɗaɗen da ba sa canjawa ko me kuka shuka, kamar hayar ƙasa ko tankin ruwa."]],
          slides: [
            { title: "Dabarar lissafi", bullets: ["Riba = kuɗin shiga - kuɗaɗe masu canjawa", "A kowace eka, hekta ko tsuntsaye 100"] },
            { title: "Misali (shilin Kenya na ƙirƙira, eka 1)", bullets: ["Masara: 63,000 - 34,000 = 29,000", "Wake: 45,000 - 18,000 = 27,000", "Ku yi amfani da farashin yankinku"] },
            { title: "Ku kuma kwatanta", bullets: ["Riba a kowace ranar aiki", "Haɗarin lalacewa", "Ana biyan kuɗaɗe masu tsayawa daga dukkan ribobi"] }
          ],
          tryIt: "Ku lissafa ribar kowace eka ta ayyuka biyu a gonarku (ko biyu da kuke tunani) ta amfani da farashin yankinku. Wanne ya fi riba, kuma wanne ya fi haɗari?",
          youCanNow: "lissafa da kwatanta ribobi (gross margins) don yanke shawarar abin da za ku shuka ko ku kiwata.",
          quickCheck: [
            { objective: "O2", q: "Wanne ne kuɗi mai tsayawa, ba mai canjawa ba?", options: ["Iri", "Taki", "Tankin ruwa", "Ma'aikatan da aka biya don cire ciyawa"], answer: 2, why: "Ana biyan tankin ruwa ko me kuka shuka, don haka kuɗi ne mai tsayawa." },
            { objective: "O2", q: "Tumatir yana kawo 50,000 a kowace eka kuma kuɗaɗe masu canjawa 30,000 ne. Nawa ne ribar?", options: ["80,000", "30,000", "50,000", "20,000"], answer: 3, why: "Riba ita ce kuɗin shiga a rage kuɗaɗe masu canjawa: 50,000 - 30,000 = 20,000." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Neman kasuwa da farashi mafi kyau",
          minutes: 5,
          goal: "Kwatanta aƙalla hanyoyi uku na sayarwa ku zaɓi mafi kyau ga amfanin gona.",
          text: [
            "Farashi yakan faɗi nan da nan bayan girbi, lokacin da kowa ke sayarwa, sannan ya tashi bayan watanni. Sayarwa kai kaɗai, kaɗan-kaɗan, ga ɗan kasuwa na farko a bakin gona yana da sauƙi amma sau da yawa shi ya fi ƙarancin biya. Ku kwatanta: kasuwar gida, 'yan kasuwa, ƙungiyoyin haɗin gwiwa da ke haɗa amfanin gona, masu sarrafa abinci da makarantu ko otal-otal, noman yarjejeniya da mai saye, kuma inda akwai, rumbunan ajiya masu takardar shaida da ke adana hatsi kuma suna iya taimaka wa manoma su sami bashi da hatsin a matsayin jingina.",
            "Ku nemi bayanan farashi: ku tambayi masu saye da yawa, ku duba hidimomin farashin kasuwa da rediyo, ku tattauna da ƙungiyar haɗin gwiwarku. Ku san ma'aunin inganci na mai saye (danshi, rarrabewa, girma, tsafta) ku cika shi: amfanin gona mai tsafta, busasshe, da aka rarrabe yana fi samun kuɗi kuma yana daɗewa.",
            "Yarjejeniya tana iya ba ku tabbacin kasuwa, amma ku karanta sharuɗɗan: farashi ko yadda ake ƙayyade shi, yawa, ma'aunin inganci, ranakun kai kaya, wa zai biya sufuri, ranar biya da hanyar biya, da abin da zai faru idan girbi ya lalace. Ku sa a rubuta ta, ku nemi ƙungiyar haɗin gwiwarku ko jami'in faɗakarwar noma ya duba ta."
          ],
          steps: ["Ku jera aƙalla hanyoyi uku na sayar da amfanin gonarku.", "Ku sami farashi daga masu saye da yawa da hidimomin bayanan kasuwa.", "Ku koyi ma'aunin inganci na kowane mai saye.", "Ku yi la'akari da haɗa kaya da ƙungiya ko ajiye su don farashi mafi kyau.", "Ku karanta sharuɗɗan kowace yarjejeniya ku sa a rubuta ta."],
          words: [["Haɗa kaya (bulking)", "haɗa amfanin gonar manoma da yawa wuri ɗaya don sayar da yawa a farashi mafi kyau."], ["Noman yarjejeniya (contract farming)", "yarjejeniya ta shuka da sayar da amfanin gona ga mai saye bisa sharuɗɗan da aka ƙayyade."], ["Ma'aunin inganci", "dokokin mai saye game da danshi, girma, matsayi da tsafta."]],
          slides: [
            { title: "Lokaci yana da muhimmanci", bullets: ["Farashi yakan yi ƙasa nan da nan bayan girbi", "Yana tashi bayan watanni", "Ajiya da haɗa kaya suna iya taimakawa"] },
            { title: "Hanyoyin sayarwa", bullets: ["Kasuwa, 'yan kasuwa, ƙungiyoyin haɗin gwiwa", "Masu sarrafa abinci, makarantu, otal-otal", "Yarjejeniyoyi, rumbunan ajiya masu takardar shaida"] },
            { title: "Ku fi samun kuɗi", bullets: ["Ku kwatanta farashi da yawa", "Ku cika ma'aunin inganci", "Ku karanta yarjejeniyoyi; ku sa a rubuta su"] }
          ],
          tryIt: "Don babban amfanin gonarku, ku rubuta hanyoyi uku da za ku iya sayar da shi, farashin da kowanne zai biya yau (ku tambaya ko ku yi ƙiyasi), ingancin da kowanne ke buƙata, da wanda za ku zaɓa da dalili.",
          youCanNow: "kwatanta kasuwanni da zaɓar hanya mafi kyau ta sayar da amfanin gona.",
          quickCheck: [
            { objective: "O3", q: "Mene ne haɗa kaya (bulking)?", options: ["Sayarwa tare a matsayin ƙungiya don samun yawa mai girma", "Ƙara ruwa a cikin hatsi", "Sayen iri a ƙananan fakiti", "Ajiye hatsi a cikin gida"], answer: 0, why: "Haɗa kaya da ƙungiyar haɗin gwiwa ko ƙungiya yana kawo kaya masu yawa da za su iya samun farashi mafi kyau." },
            { objective: "O3", q: "Mai saye yana son wakenku amma bai faɗi lokacin da zai biya ba. Me za ku yi?", options: ["Ku kai kayan ku yi fata", "Ku nemi ranar biya da hanyar biya a rubuce", "Ku sayar masa duk da haka", "Ku rage farashinku"], answer: 1, why: "Yarjejeniya ya kamata ta ƙayyade ranar biya da hanyar biya a rubuce." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Gona kamar kasuwanci",
        questions: [
          { objective: "O1", q: "Me yasa ake ajiye bayanan gona?", options: ["Na jami'an haraji ne kawai", "Don ganin wane aiki ne ke biya, tsarawa, da samun bashi ko yarjejeniya", "Don ɓata lokaci", "Bayanai ba su da amfani"], answer: 1, why: "Bayanai suna mayar da hasashe zuwa shawarwari." },
          { objective: "O2", q: "Riba (gross margin) ita ce:", options: ["Jimlar ƙasar gona", "Kuɗin shiga a rage kuɗaɗe masu canjawa na aiki ɗaya", "Farashin taki", "Kuɗin da aka ara"], answer: 1, why: "Tana nuna abin da kowane aiki ke samu kafin kuɗaɗe masu tsayawa." },
          { objective: "O2", q: "Wanne ne kuɗi mai canjawa?", options: ["Iri", "Ƙasar da kuka mallaka", "Tankin ruwa da aka riga aka gina", "Gidanku"], answer: 0, why: "Iri yana canjawa da yawan abin da kuke shukawa." },
          { objective: "O3", q: "Mai saye yana ba ku yarjejeniya. Me ya kamata ku duba?", options: ["Sunan mai saye kawai", "Babu komai; yarjejeniyoyi koyaushe adalci ne", "Launin buhuna kawai", "Farashi, yawa, inganci, kai kaya, biya da abin da zai faru idan girbi ya lalace"], answer: 3, why: "Sharuɗɗan ne ke yanke ko yarjejeniyar tana taimaka muku." },
          { objective: "O3", q: "Me yasa farashi yakan faɗi nan da nan bayan girbi?", options: ["Amfanin gona yana raguwa", "Masu saye sun daina ci", "Manoma da yawa suna sayarwa a lokaci ɗaya", "Gwamnati tana sanya su ƙasa"], answer: 2, why: "Yawan kaya a lokacin girbi yana tura farashi ƙasa." }
        ]
      }
    },
    {
      name: "Babi na 2: Kuɗi, haɗari da girma",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuɗin waya da shigowa da fitar kuɗi",
          minutes: 5,
          goal: "Tsara shigowa da fitar kuɗi na watanni 12 ku yi amfani da kuɗin waya lafiya don gona.",
          text: [
            "Gonaki da yawa suna da matsalar kuɗi ba don suna faɗuwa ba, amma don kuɗi yana shigowa sau ɗaya ko biyu a shekara kuma yana fita duk shekara. Tsarin shigowa da fitar kuɗi (cash flow) yana nuna, wata bayan wata, kuɗin da ake sa ran zai shigo da wanda zai fita, don ku ga watannin yunwa suna zuwa ku tsara.",
            "Kuɗin waya (kamar M-Pesa a Kenya, da walat na waya da manhajojin banki a Najeriya) yana sauƙaƙa biyan ma'aikata da masu kawo kaya, karɓar kuɗi daga masu saye, ajiya, da ajiye bayani. Wasu manoma suna ajiye walat ko asusu daban don gona, don kada kuɗin gona da na gida su haɗu.",
            "Ku zauna lafiya: kada ku taɓa bayar da PIN ɗinku ko code na lokaci ɗaya ga kowa, har da mutanen da suka ce daga kamfanin kuɗin waya suke ko masu saye ne; ku duba suna kafin ku aika; kuma ku yi hankali da saƙonnin \"an aika muku kuɗi bisa kuskure\" da ke neman ku mayar da kuɗi. Ku kai rahoton matsala ga kamfanin ta hanyoyinsa na hukuma."
          ],
          steps: ["Ku zana ginshiƙan watanni 12.", "Ku rubuta kuɗin da ake sa ran zai shigo kowane wata (sayarwa, wasu kuɗaɗen shiga).", "Ku rubuta kuɗin da ake sa ran zai fita (kayan noma, ma'aikata, kuɗin makaranta, abinci).", "Ku nemo watannin da kuɗin fita ya fi na shigowa, ku tsara ajiya ko lokaci.", "Ku yi amfani da walat ko asusu daban don kuɗin gona; kada ku taɓa bayar da PIN ɗinku."],
          words: [["Shigowa da fitar kuɗi (cash flow)", "lokacin da kuɗi ke shigowa da lokacin da yake fita."], ["Watannin yunwa", "watannin da kuɗi ko abinci ke ƙarewa, sau da yawa kafin girbi."], ["PIN", "lambar sirri da ke kare asusun kuɗin wayarku."]],
          slides: [
            { title: "Shigowa da fitar kuɗi, ba riba kaɗai ba", bullets: ["Kuɗi yana shigowa sau ɗaya ko biyu a shekara", "Kuɗi yana fita duk shekara", "Ku tsara don watannin yunwa"] },
            { title: "Kuɗin waya yana taimakawa", bullets: ["Biyan ma'aikata da masu kawo kaya", "Karɓar kuɗi daga masu saye", "Ajiya da ajiye bayani"] },
            { title: "Ku zauna lafiya", bullets: ["Kada ku taɓa bayar da PIN ko code", "Ku duba suna kafin aikawa", "Ku yi hankali da dabarar \"kuɗi bisa kuskure\""] }
          ],
          tryIt: "Ku zana tsarin shigowa da fitar kuɗinku na watanni 12 da kuɗin da ke shigowa da wanda ke fita. Ku zagaye watannin yunwa ku rubuta hanya ɗaya ta shiryawa ga kowanne (ajiya daga girbi, sayarwa a lokuta daban-daban, ƙaramin aiki a lokacin rani).",
          youCanNow: "tsara shigowa da fitar kuɗin gonarku a tsawon shekara da amfani da kuɗin waya lafiya.",
          quickCheck: [
            { objective: "O4", q: "Me tsarin shigowa da fitar kuɗi na watanni 12 ke taimaka muku ku gani?", options: ["Wane amfanin gona ne ya fi tsayi", "Yanayi a kowane wata", "Watannin yunwa kafin su zo", "Kuɗin shigar maƙwabtanku"], answer: 2, why: "Yana nuna watannin da kuɗin fita ya fi na shigowa." },
            { objective: "O4", q: "Kuɗin makaranta zai zo a watan da babu kuɗin sayar da girbi. Wace hanya ɗaya ce ta shiryawa?", options: ["Ku kashe dukkan kuɗin girbi a lokaci ɗaya", "Ku karɓi duk bashin da aka tayar muku ta tes", "Ku manta da shi har lokacin ya zo", "Ku ajiye wani ɓangare na kuɗin girbi ko ku sayar a lokuta daban-daban"], answer: 3, why: "Ajiya daga girbi ko sayarwa a lokuta daban-daban yana rufe watannin yunwa." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Bashi da haɗari: cin bashi cikin hikima",
          minutes: 6,
          goal: "Lissafa jimlar kuɗin bashi ku yanke shawara ko yana da ma'ana ga gona.",
          text: [
            "Bashi yana iya taimakawa wajen sayen kayan noma ko kayan aiki da ke kawo kuɗi fiye da farashinsu. Haka kuma yana iya zama tarko. Kafin ku ci bashi, ku tambayi: me kuɗin zai saya, nawa ne ƙarin kuɗin da zai kawo, kuma yaushe? Za ku iya biya a ranakun da mai ba da bashi ya ƙayyade, ko da girbi bai yi kyau ba?",
            "Ku kwatanta tayi da jimlar kuɗin da za ku mayar, ba kuɗin ruwa (interest) kaɗai ba: ku tara dukkan kuɗin ruwa, kuɗaɗen caji da na inshora. Misali (lambobi na ƙirƙira), aron 20,000 da biyan 2,000 a kowane wata na watanni 12 yana nufin mayar da 24,000: bashin ya ci 4,000. Ku duba cewa ranakun biya sun dace da lokacin da kuɗinku ke shigowa. Gajerun basussukan intanet (digital loans) suna iya yin tsada sosai idan kun tara kuɗaɗen caji.",
            "Ku yi amfani da masu ba da bashi masu lasisi: bankuna, bankunan ƙananan basussuka (microfinance), SACCO da ƙungiyoyin haɗin gwiwa, da masu ba da bashi ta intanet da babban banki ko hukumar da ta dace ta amince da su (a Kenya, Babban Bankin Kenya yana jera cibiyoyi masu lasisi; a Najeriya, Babban Bankin Najeriya). Ku rage haɗari da ajiya, shuka nau'o'in amfanin gona daban-daban, inshora inda akwai, da aron abin da tsarin ke buƙata kaɗai. Ku tattauna da mai ba da shawara da kuka amince da shi kafin ku sa hannu."
          ],
          steps: ["Ku rubuta abin da bashin zai saya da nawa ƙarin kuɗi ya kamata ya kawo.", "Ku tara jimlar abin da za ku mayar: kuɗin ruwa, kuɗaɗen caji, inshora.", "Ku duba ranakun biya da tsarin shigowa da fitar kuɗinku.", "Ku tabbatar mai ba da bashin yana da lasisi.", "Ku tsara don damina mara kyau: ajiya, inshora, ƙaramin bashi.", "Ku tambayi mai ba da shawara da kuka amince da shi kafin ku sa hannu."],
          words: [["Kuɗin ruwa (interest)", "farashin da kuke biya don aron kuɗi."], ["Jimlar kuɗin bashi", "duk abin da kuke mayarwa fiye da abin da kuka ara: kuɗin ruwa tare da kuɗaɗen caji."], ["SACCO", "ƙungiyar haɗin gwiwa ta ajiya da bashi da membobinta suka mallaka."], ["Jingina (collateral)", "abin da kuke alƙawarta wa mai ba da bashi idan ba ku iya biya ba."]],
          slides: [
            { title: "Kafin ku ci bashi", bullets: ["Me zai saya?", "Nawa ƙarin kuɗi zai kawo, kuma yaushe?", "Za ku iya biya idan girbi bai yi kyau ba?"] },
            { title: "Ku kwatanta jimlar", bullets: ["Kuɗin ruwa + kuɗaɗen caji + inshora", "Ara 20,000, mayar da 24,000: kuɗin bashi 4,000", "Biyan ya dace da shigowa da fitar kuɗinku?"] },
            { title: "Masu ba da bashi masu lasisi", bullets: ["Bankuna, microfinance, SACCO, ƙungiyoyin haɗin gwiwa", "Kenya: jerin CBK; Najeriya: CBN", "Ku fara tattaunawa da mai ba da shawara amintacce"] }
          ],
          sources: [CBK, CBN],
          tryIt: "Ku ɗauki tayin bashi na gaske ko na misali. Ku rubuta adadin da aka ara, kowane biya da kuɗin caji, jimlar da aka mayar da jimlar kuɗin bashin. Sannan ku duba watannin biya da tsarin shigowa da fitar kuɗinku, ku rubuta ko yana da ma'ana.",
          youCanNow: "lissafa ainihin kuɗin bashi da auna ko cin bashi yana da ma'ana ga gonarku.",
          quickCheck: [
            { objective: "O5", q: "Yaya ya kamata ku kwatanta tayin bashi biyu?", options: ["Da jimlar kuɗin da za ku mayar, har da dukkan kuɗaɗen caji", "Da saurin isowar kuɗin", "Da kuɗin ruwa kaɗai", "Da tallar mai ba da bashin"], answer: 0, why: "Jimlar abin da aka mayar tana nuna ainihin kuɗin kowane bashi." },
            { objective: "O5", q: "Biyan bashi zai fara watan da ke bayan shuka, kafin girbi. Me za ku yi?", options: ["Ku sa hannu da sauri", "Ku duba shi da shigowa da fitar kuɗinku ku nemi ranakun da suka dace da lokacin shigowar kuɗi", "Ku ƙara aro don rufe shi", "Ku yi amfani da PIN ɗinku don hanzarta shi"], answer: 1, why: "Ranakun biya ya kamata su dace da watannin da kuɗinku ke shigowa." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Rubuta tsarin kasuwancin gona mai shafi ɗaya",
          minutes: 5,
          goal: "Rubuta tsarin kasuwanci mai shafi ɗaya da za ku iya nuna wa ƙungiyar haɗin gwiwa, mai ba da bashi ko abokin kasuwanci.",
          text: [
            "Tsarin kasuwanci labarin gonarku ne a lambobi da manufofi. Masu ba da bashi, ƙungiyoyin haɗin gwiwa, masu saye da abokan kasuwanci suna son ganin cewa kun san gonarku, kasuwarku da haɗarinku. Shafi ɗaya a sarari ya fi shafuka goma marasa sarari.",
            "Ku haɗa da: ku wane ne da gonarku (wuri, ƙasa, abin da kuke samarwa); ayyukanku da ribobinsu; kasuwarku (wa ke saye, yaya, a wane farashi); tsarin shigowa da fitar kuɗinku; abin da kuke buƙata (kayan noma, kayan aiki, bashi) da yadda zai biya kansa; manyan haɗarinku (yanayi, ƙwari, farashi) da abin da kuke yi game da su; da manufofi uku na damina mai zuwa masu lambobi.",
            "Ku ajiye bayananku da lissafinku a bayan tsarin, don ku iya amsa tambayoyi. Ku sabunta shi kowace damina da abin da ya faru da gaske."
          ],
          steps: ["Takaitaccen bayanin gona: wuri, ƙasa, ayyuka.", "Ribar kowane aiki.", "Kasuwa: masu saye, hanya, farashi.", "Tsarin shigowa da fitar kuɗi da abin da kuke buƙata.", "Haɗari da yadda kuke sarrafa su.", "Manufofi uku masu lambobi; ku sabunta kowace damina."],
          words: [["Tsarin kasuwanci (business plan)", "gajeriyar takarda da ke bayanin abin da kasuwanci ke yi, yadda yake samun kuɗi, abin da yake buƙata da manufofinsa."], ["Manufa", "buri a sarari mai lamba da rana."]],
          slides: [
            { title: "Labarin gonarku a lambobi", bullets: ["Don masu ba da bashi, ƙungiyoyi, masu saye, abokan kasuwanci", "Shafi ɗaya a sarari ya fi shafuka goma marasa sarari"] },
            { title: "Abin da ke ciki", bullets: ["Bayanin gona da ayyuka", "Ribobi da kasuwa", "Shigowa da fitar kuɗi, buƙatu, yadda zai biya"] },
            { title: "Ku kammala da ƙarfi", bullets: ["Haɗari da yadda kuke sarrafa su", "Manufofi uku masu lambobi", "Ku sabunta kowace damina"] }
          ],
          sources: [FAO_CSA],
          tryIt: "Aikin ƙarshe: ku rubuta tsarin kasuwancin gonarku mai shafi ɗaya da ribar ayyuka biyu, kasuwa, shigowa da fitar kuɗi na watanni 12, duk wani bashi da jimlar kuɗinsa, haɗari da matakan da za a ɗauka, da manufofi uku na damina mai zuwa.",
          youCanNow: "rubuta tsarin kasuwancin gona mai shafi ɗaya da bayananku da lambobinku ke goyon baya.",
          quickCheck: [
            { objective: "O6", q: "Me yasa za ku ajiye bayanai da lissafi a bayan tsarinku mai shafi ɗaya?", options: ["Don tsarin ya yi tsawo", "Masu ba da bashi ba sa karanta tsare-tsare", "Don ku iya amsa tambayoyi game da lambobinku", "Don ɓoye ainihin kuɗin shigarku"], answer: 2, why: "Bayanai suna goyon bayan tsarinku idan mai ba da bashi ko mai saye ya yi tambayoyi." },
            { objective: "O6", q: "Masararku ba ta yi kyau kamar yadda aka tsara a wannan damina ba. Me za ku yi da tsarin kasuwancinku?", options: ["Ku jefar da shi", "Ku bar tsofaffin lambobi", "Ku canja manufofi kaɗai", "Ku sabunta shi da abin da ya faru da gaske"], answer: 3, why: "Ana sabunta tsari kowace damina da ainihin sakamako." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Kuɗi, haɗari da girma",
        questions: [
          { objective: "O4", q: "Me yasa gona mai riba har yanzu za ta iya rasa kuɗi?", options: ["Riba ba gaskiya ba ce", "Kuɗi yana shigowa sau ɗaya ko biyu a shekara amma yana fita duk shekara", "Kuɗin waya yana ɓatar da shi", "Bayanai ne ke jawo shi"], answer: 1, why: "Lokacin shigowa da fitar kuɗi, ba riba kaɗai ba, ne ke yanke ko za ku iya biyan buƙatunku." },
          { objective: "O4", q: "Wani da ya kira daga \"kamfanin kuɗin wayarku\" yana neman PIN ɗinku. Ya kamata ku:", options: ["Ba shi da sauri", "Ba shi rabinsa", "Kada ku taɓa bayarwa; ku tuntuɓi kamfanin ta hanyoyinsa na hukuma", "Tura masa ta tes"], answer: 2, why: "Kamfanonin gaske ba sa taɓa neman PIN ɗinku." },
          { objective: "O5", q: "Kun ara 20,000 kuma kuna biyan 2,000 a kowane wata na watanni 12. Bashin ya ci:", options: ["4,000", "2,000", "20,000", "Babu komai"], answer: 0, why: "Kuna mayar da 24,000, wato 4,000 fiye da abin da kuka ara." },
          { objective: "O5", q: "Kafin ku karɓi bashi, ku tabbatar mai ba da bashin:", options: ["Abokin maƙwabcinku ne", "Yana da sauri sosai", "Yana kafafen sada zumunta", "Yana da lasisi daga babban banki ko hukumar da ta dace"], answer: 3, why: "Masu ba da bashi masu lasisi suna bin dokokin da ke kare masu cin bashi." },
          { objective: "O6", q: "Tsarin kasuwancin gona mai kyau shi ne:", options: ["Mai tsawo kuma marar sarari", "Shafi ɗaya a sarari da bayanai da lambobi ke goyon baya", "Jerin buri kawai", "Sirri daga kowa"], answer: 1, why: "Gajerun tsare-tsare masu bayani dalla-dalla sun fi sauƙin aiwatarwa da amincewa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Kasuwancin Noma da Sarrafa Gona",
    questions: [
      { objective: "O1", q: "Wanne ne bayanin gona mai sauƙi?", options: ["Kuɗin da ke fita: rana, me, wane aiki, adadi", "Hoton sararin sama", "Jerin waƙoƙi", "Babu abin da aka rubuta"], answer: 0, why: "Rubuta kuɗin da ke fita bisa aiki yana nuna kuɗaɗen kashewa." },
      { objective: "O1", q: "Yaushe ya kamata ku rubuta bayanai?", options: ["Sau ɗaya a shekara", "A ranar da abu ya faru", "Sai an tambaye ku", "Ba a taɓa ba"], answer: 1, why: "Bayanan da aka rubuta a rana ɗaya daidai suke." },
      { objective: "O1", q: "Me yasa za a ƙirga kwanakin aikin iyali?", options: ["Kyauta ne", "Don biyan haraji", "Lokacinku yana da daraja kuma yana shafar wane aiki ne ke biya", "Ba a buƙata"], answer: 2, why: "Aikin da ba a biya ba har yanzu ainihin kuɗin lokaci ne." },
      { objective: "O2", q: "Aiki (enterprise) shi ne:", options: ["Banki", "Tarakta", "Kasuwa", "Aiki ɗaya a gona, kamar masara ko kaji"], answer: 3, why: "Ana auna kowane aiki daban." },
      { objective: "O2", q: "Kuɗin shiga 63,000, kuɗaɗe masu canjawa 34,000. Riba ita ce:", options: ["29,000", "34,000", "63,000", "97,000"], answer: 0, why: "63,000 - 34,000 = 29,000." },
      { objective: "O2", q: "Me yasa ake lissafin riba a kowace eka?", options: ["Don lambobi su yi girma", "Don a kwatanta ayyuka da adalci", "Saboda masu saye suna tambaya", "Don biyan haya"], answer: 1, why: "Ma'aunin ƙasa iri ɗaya yana sa kwatanci ya yi adalci." },
      { objective: "O2", q: "Hayar ƙasa da kuke biya ko me kuka shuka ita ce:", options: ["Kuɗi mai canjawa", "Riba", "Kuɗi mai tsayawa", "Sayarwa"], answer: 2, why: "Kuɗaɗe masu tsayawa ba sa canjawa da yawan abin da kuke shukawa." },
      { objective: "O2", q: "Amfanin gona biyu suna da riba kusan iri ɗaya, amma ɗaya yakan lalace sau da yawa. Ya kamata ku:", options: ["Ku manta da haɗari", "Ku shuka mai haɗarin kaɗai", "Ku zaɓa da launi", "Ku yi la'akari da haɗari tare da riba"], answer: 3, why: "Riba mai yawa ba ta da daraja sosai idan lalacewa na iya faruwa." },
      { objective: "O3", q: "Haɗa kaya da ƙungiyar haɗin gwiwa yana taimakawa saboda:", options: ["Kaya masu yawa suna iya samun farashi mafi kyau", "Amfanin gona yana girma da sauri", "Ba a buƙatar inganci", "Masu saye suna biyan ƙasa"], answer: 0, why: "Masu saye suna biyan fiye don kaya masu yawa da ke zuwa a kai a kai." },
      { objective: "O3", q: "Amfanin gona mai tsafta, busasshe, da aka rarrabe:", options: ["Yana samun ƙasa", "Yana fi samun kuɗi kuma yana daɗewa", "Ba a son sa", "Yana lalacewa da sauri"], answer: 1, why: "Cika ma'aunin inganci yana ƙara farashi da tsawon ajiya." },
      { objective: "O3", q: "Kafin ku sa hannu a yarjejeniyar noma ya kamata ku:", options: ["Sa hannu nan take", "Amince ta waya kaɗai", "Karanta sharuɗɗan ku sa a rubuta ta", "Bar mai saye ya yanke komai"], answer: 2, why: "Sharuɗɗan da aka rubuta suna kare ku." },
      { objective: "O4", q: "Tsarin shigowa da fitar kuɗi yana nuna:", options: ["Jimlar riba kaɗai", "Nau'o'in amfanin gona", "Ruwan sama", "Kuɗin da ke shigowa da fita wata bayan wata"], answer: 3, why: "Lokacin kuɗi shi ne ma'anar shigowa da fitar kuɗi." },
      { objective: "O4", q: "Watannin yunwa su ne:", options: ["Watannin da kuɗi ko abinci ke ƙarewa", "Watannin girbi", "Ranakun hutu", "Ranakun kasuwa"], answer: 0, why: "Tsarawa don su yana hana cin bashi ko sayarwa cikin gaggawa." },
      { objective: "O4", q: "Amfanin walat ko asusu daban na gona shi ne:", options: ["Farashi mafi tsada", "Kuɗin gona da na gida ba sa haɗuwa", "Ba a buƙatar bayanai", "Taki kyauta"], answer: 1, why: "Rabewa yana nuna abin da gona ke samu da kashewa da gaske." },
      { objective: "O4", q: "Wani saƙo ya ce kun karɓi kuɗi bisa kuskure kuma yana neman ku mayar da su. Ya kamata ku:", options: ["Aika su nan take", "Aika ninki biyu", "Duba ainihin ma'aunin kuɗinku da bayanan asusunku, ku tuntuɓi kamfanin ta hanyoyinsa na hukuma", "Bayar da PIN ɗinku"], answer: 2, why: "Saƙonnin \"kuɗi bisa kuskure\" na bogi dabara ce da aka saba gani." },
      { objective: "O5", q: "Don kwatanta basussuka, ku duba:", options: ["Tallar kaɗai", "Kuɗin ruwa kaɗai", "Saurin biyan kuɗin kaɗai", "Jimlar kuɗin da za ku mayar, har da dukkan kuɗaɗen caji"], answer: 3, why: "Kuɗaɗen caji suna iya sa bashi mai ƙarancin kuɗin ruwa ya yi tsada." },
      { objective: "O5", q: "SACCO ita ce:", options: ["Ƙungiyar haɗin gwiwa ta ajiya da bashi da membobi suka mallaka", "Ƙwarin amfanin gona", "Harajin gwamnati", "Jirgi mara matuƙi (drone)"], answer: 0, why: "SACCO suna haɗa ajiyar membobi kuma suna ba membobi bashi." },
      { objective: "O5", q: "Ranakun biyan bashi ya kamata:", options: ["A manta da su", "Su dace da watannin da kuɗinku ke shigowa", "Su zama kowane mako koyaushe", "A yanke su bayan kun kashe kuɗin"], answer: 1, why: "Dacewar biya da kuɗin shiga yana hana kasa biyan bashi." },
      { objective: "O6", q: "Wanne ne ke rage haɗarin gona?", options: ["Aron kuɗi mai yawa yadda zai yiwu", "Shuka amfanin gona iri ɗaya kaɗai", "Ajiya, shuka nau'o'i daban-daban da inshora inda akwai", "Sayar da komai a lokacin girbi"], answer: 2, why: "Raba haɗari yana kare gona a damina mara kyau." },
      { objective: "O6", q: "Ya kamata a sabunta tsarin kasuwanci:", options: ["Ba a taɓa ba", "Kowace shekara goma", "Sai mai ba da bashi ya tambaya", "Kowace damina da abin da ya faru da gaske"], answer: 3, why: "Sabuntawa yana sa tsarin ya kasance na gaske kuma mai amfani." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [0, 4, 7, 8, 11, 14, 15, 17, 19]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Ribobi (gross margins)", objective: "O2", notYet: "Ƙasa da ayyuka biyu, ko kurakuran lissafi.", meets: "Ribar kowace eka ta ayyuka biyu, da farashin yanki da lissafi daidai.", exceeds: "Yana kwatanta aiki da haɗari tare da riba." },
      { name: "Kasuwa", objective: "O3", notYet: "Ba a ambaci mai saye ko hanyar sayarwa ba.", meets: "Ya ambaci wa zai saya, yaya, kuma a wane farashi.", exceeds: "Yana kwatanta aƙalla hanyoyi uku na sayarwa da ingancin da kowanne ke buƙata." },
      { name: "Shigowa da fitar kuɗi", objective: "O4", notYet: "Babu tsari wata bayan wata.", meets: "Tsarin watanni 12 na kuɗin da ke shigowa da fita, an nuna watannin yunwa.", exceeds: "Tsari ga kowane watan yunwa." },
      { name: "Bashi", objective: "O5", notYet: "An jera bashi ba tare da jimlar kuɗinsa ko tsarin biya ba.", meets: "Kowane bashi yana nuna jimlar abin da za a mayar, jimlar kuɗin bashi da yadda biyan ya dace da shigowa da fitar kuɗi, ko kuma ba a buƙatar bashi.", exceeds: "Ya ambaci mai ba da bashi mai lasisi da tsari don damina mara kyau." },
      { name: "Haɗari da manufofi", objective: "O6", notYet: "Babu haɗari ko manufofi.", meets: "Manyan haɗari da yadda za a rage su, da manufofi uku masu lambobi.", exceeds: "Ya dace a shafi ɗaya a sarari da bayanai ke goyon baya." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Manoman da ke ajiye bayanai aƙalla watanni uku (binciken biyo baya)",
      "Kuɗin shigar gona ko riba idan aka kwatanta da damina da ta gabata, kamar yadda manoma ko abokan aiki suka faɗa",
      "Manoman da suka shiga ƙungiyar haɗin gwiwa, suka sa hannu a yarjejeniyar mai saye a rubuce, ko suka sami bashi daga mai ba da bashi mai lasisi tare da tsari"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Littafin rubutu da alƙalami, ko tebur na lissafi a waya",
      "Na'urar lissafi (calculator); waya mai sauƙi tana da ita",
      "Farashi da kuɗaɗen kashewa na yankin mai koyo, ko misalan kwas ɗin",
      "Bayanan kuɗin waya (statement) idan mai koyo yana da su",
      "Kusan minti 60 na darussa, tare da lokacin tattara farashi da rubuta tsarin"
    ],
    facilitatorNotes: [
      "Ku yi lissafin riba ɗaya tare da ƙungiyar ta amfani da ainihin farashin yankinsu kafin masu koyo su yi nasu.",
      "Ku tunatar da masu koyo cewa lambobin kwas na ƙirƙira ne; farashi ya bambanta da wuri da yanayi.",
      "Ku jaddada tsaron kuɗin waya: kada a taɓa bayar da PIN ko code, kuma a kai rahoton matsaloli ta hanyoyin hukuma kaɗai.",
      "Ku gayyaci jami'in ƙungiyar haɗin gwiwa ko SACCO don bayanin bashi mai lasisi; kada ku ba da shawarar bashi da kanku.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
