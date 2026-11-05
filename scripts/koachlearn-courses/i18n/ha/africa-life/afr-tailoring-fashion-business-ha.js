"use strict";

// Koach Learn course, Hausa (ha) translation of africa-life/afr-tailoring-fashion-business.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const KE_BRS = { name: "Hukumar Rajistar Kasuwanci ta Kenya (Business Registration Service): rajistar sunan kasuwanci ta eCitizen", url: "https://brs.go.ke/" };
const NG_CAC = { name: "Hukumar Kula da Harkokin Kamfanoni ta Najeriya (Corporate Affairs Commission, CAC): rajistar sunan kasuwanci da kamfani", url: "https://www.cac.gov.ng/" };
const GH_ORC = { name: "Ofishin Magatakardar Kamfanoni na Ghana (Office of the Registrar of Companies): sunayen kasuwanci (mai shi ɗaya)", url: "https://orc.gov.gh/" };

module.exports = {
  id: "afr-tailoring-fashion-business-ha",
  lang: "ha",
  translationOf: "afr-tailoring-fashion-business",
  category: "Africa: Life and Work",
  name: "Gudanar da Sana'ar Ɗinki da Kayan Kwalliya",
  skills: "Kiyaye shagon ɗinki lafiya, Auna jiki da katin oda, Lissafin kuɗin riga da sanya farashi, Tsara oda da ranar kai kaya, Ajiye bayanan kuɗi lafiya, Nuna aikinku ga abokan ciniki",
  outcome: "gudanar da aikin ɗinkinku a matsayin kasuwanci: kiyaye shagonku lafiya, karɓar oda a kan katin oda mai sarari, sanya farashin kowace riga yadda zai biya, tsara makonku don ku kai kaya a kan lokaci, ajiye bayanan kuɗi, da nuna aikinku ga sababbin abokan ciniki.",
  about: [
    "Teloli da masu ɗinki da yawa suna ɗinki mai kyau amma har yanzu suna fama: farashin da bai rufe kuɗin layin ciki (lining) da zare ba, abokin cinikin da bai dawo ya karɓi kayansa ba, odar biki uku da za a kai ranar Asabar ɗaya, kuɗin gaba da babu wanda ya rubuta. Wannan kwas na teloli ne, masu ɗinki, masu zanen kaya da masu koyon sana'a a garuruwa da ƙauyuka a Kenya, Najeriya, Ghana, Senegal, Côte d'Ivoire, Kamaru, Moroko da ko'ina a Afirka.",
    "Za ku sa shagonku ya fi aminci, ku yi amfani da katin oda don kowane aiki, ku lissafa ainihin kuɗin da riga take ci da abin da za ku karɓa, ku tsara makonku bisa sa'o'inku, ku ajiye littafin kuɗi mai sauƙi, ku kare kuɗin waya (mobile money) daga zamba, ku san yadda ake rajistar sunan kasuwancinku, kuma ku nuna aikinku a WhatsApp ko a shagonku.",
    "Wannan kwas game da gudanar da kasuwanci ne, ba game da dabarun ɗinki ba. Kowane darasi yana ɗaukar kusan minti biyar kuma yana ƙarewa da aikin \"Gwada yanzu\" don shagonku. Duk adadin kuɗi misalai ne, ba farashi na gaske ba."
  ],
  finalTask: "Ku yi kayan farawa don sana'ar ɗinkinku: jerin farashin aƙalla riguna biyar da kuke ɗinkawa, kowanne da lissafin kuɗinsa; katin oda maras rubutu da za ku yi amfani da shi don kowane aiki; tsarin mako ɗaya mai yawan aiki da ya dace da ainihin sa'o'inku; shafin littafin kuɗi mai kuɗin gaba da kashe-kashe; da saƙo ɗaya ko kaya ɗaya a kundin kaya (catalogue) da ke nuna rigar da aka gama, da farashinta da yadda ake yin oda.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Teloli, masu ɗinki, masu zanen kaya, masu koyon sana'a da matasan da ke gama koyon sana'a, a garuruwa da ƙauyuka a faɗin Afirka. Da yawa suna aiki su kaɗai ko da mataimaka ɗaya ko biyu, a ƙaramin shago, rumfar kasuwa ko a gida.",
    startingPoint: "Suna iya ɗinki da gama riguna, kuma sun riga sun karɓi wasu oda daga iyali, maƙwabta da 'yan coci ko masallaci. Yawancinsu suna sanya farashi bisa al'ada ko bisa abin da wasu ke karɓa, suna rubuta awo a ƙananan takardu, kuma suna ajiye lissafin kuɗi a ka ko a aljihu ɗaya.",
    gap: "Ba tare da lissafin kuɗi, katin oda, tsarin mako da bayanan kuɗi ba, teloli suna asarar kuɗi kan aikin da aka yi wa farashi ƙasa, suna wuce ranar kai kaya a lokutan aiki mai yawa, suna jayayya da abokan ciniki kan abin da aka amince, kuma ba za su iya nuna wa mai ba da bashi ko babban abokin ciniki yadda kasuwancin ke tafiya ba. Waɗannan kayan aiki masu sauƙi suna mayar da ƙwarewar ɗinki zuwa samun kuɗi a kai a kai.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; masu koyo da yawa ba harshensu na farko ne wannan ba",
      "Na'urori: waya mai sauƙi ko wayar zamani, sau da yawa da data mai tsada; littafin rubutu, alƙalami da na'urar lissafi",
      "Kuɗi: ƙananan kasafin kuɗi; ba a buƙatar manhaja ko kayan aiki masu tsada",
      "Dokoki: dokoki da kuɗin rajistar kasuwanci sun bambanta a kowace ƙasa kuma suna canjawa; masu koyo suna dubawa a ofishin rajista na ƙasarsu",
      "Lokaci: darussa na minti 4 zuwa 6 da suka dace tsakanin abokan ciniki"
    ],
    prerequisites: "Iya ɗinka aƙalla nau'in riga ɗaya daga farko har ƙarshe. Lissafi na farko: tara, ninka da raba."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan kuna da wurin ɗinkinku, injinku da kayan aikinku", action: "duba shagon ɗinki don haɗarin allura, almakashi, guga, wutar lantarki da gobara, da gyara su", standard: "kuna gano da gyara aƙalla haɗari uku" },
    { id: "O2", condition: "Idan abokin ciniki yana son a ɗinka masa riga", action: "auna jikin abokin ciniki da cike katin oda da salo, yadi, farashi, kuɗin gaba da ranar kai kaya", standard: "da kowane sashe a cike kuma an karanta wa abokin ciniki" },
    { id: "O3", condition: "Idan kuna da kayan aiki, lokaci da kuɗin gudanarwa na riga ɗaya", action: "lissafa cikakken kuɗin rigar da sanya farashin da zai rufe shi da riba", standard: "kuna ƙidaya kayan aiki, lokacinku da kuɗin gudanarwa, kuma kuna kwatantawa da kasuwar gida" },
    { id: "O4", condition: "Idan kuna da odar da ba a gama ba da sa'o'in da za ku iya aiki", action: "tsara odar mako ɗaya da ranakun kai kaya na gaskiya", standard: "ba tare da karɓar aikin da ya wuce sa'o'inku ba, da lokacin gwada riga da lokutan aiki mai yawa" },
    { id: "O5", condition: "Idan kuna da kuɗin gaba, biyan kuɗi da kashe-kashe na mako ɗaya", action: "rubuta kuɗin shiga da kuɗin fita a littafin kuɗi da gane zambar kuɗin waya", standard: "da ragowar kuɗi daidai kuma ba tare da bayyana PIN ba" },
    { id: "O6", condition: "Idan kuna da rigar da aka gama da waya", action: "yin saƙo ko kaya a kundin kaya da ke nuna rigar, farashinta da yadda ake yin oda", standard: "da hoto mai kyau kuma ba tare da nuna bayanan sirri na abokin ciniki ba tare da izini ba" }
  ],
  chapters: [
    {
      name: "Babi na 1: Karɓar odar da ke kawo riba",
      lessons: [
        {
          title: "Shago mai aminci da tsafta",
          objectives: ["O1"],
          minutes: 5,
          goal: "Duba shagonku don haɗari ku gyara aƙalla uku.",
          text: [
            "Hannayenku, idanunku da bayanku su ne kasuwancinku. Rauni zai iya hana ku aiki na makonni, kuma gobara za ta iya ƙone yadin kowane abokin ciniki. Wasu 'yan halaye suna kiyaye ku da masu koyon sana'arku.",
            "Kayan aiki masu kaifi: ku nisantar da yatsu daga allura ku yi amfani da ƙafar injin (presser foot); kada ku taɓa ɗinka kan fil; ku sa almakashi, reza da abin kwance ɗinki a wuri ɗaya, kawunansu ƙasa; ku ajiye allura da fil a matashin fil ko gwangwani, ba a bakinku ba. Ku jefa karyayyun allura a gwangwani mai murfi, ba a ƙasa inda yara da abokan ciniki ke tafiya ba.",
            "Zafi da wutar lantarki: kada ku taɓa barin guga mai zafi ko guga ta gawayi ita kaɗai, kuma ku tsayar da ita inda ba za ta faɗi ba; ku nisantar da yadi da takarda daga gare ta. Ku duba wayoyin injin da na guga ko sun yanke ko filogi ya saki. Kada ku cika soket ɗaya da filogi da yawa. Ku cire filogin injina da guga idan kun rufe. Ku ajiye bokitin yashi ko ruwa, ko na'urar kashe gobara idan za ku iya, kusa da ƙofa.",
            "Jikinku: ku zauna da bayanku a jingine, tebur a tsayin gwiwar hannu, ku yi amfani da haske mai kyau, ku tashi ku miƙe jiki kowace sa'a. Ku bar hanyoyin wucewa a buɗe ba tare da naɗin yadi ko wayoyi ba don kada kowa ya yi tuntuɓe."
          ],
          steps: ["Ku zagaya shagonku a hankali.", "Ku nemi kayan aiki masu kaifi, guga mai zafi, wayoyi da suka lalace, soket da aka cika, abubuwan da za a yi tuntuɓe da su da rashin haske.", "Ku rubuta kowane haɗarin da kuka gani.", "Ku gyara uku yau, misali gwangwanin fil, wurin ajiye guga lafiya da hanyoyi a buɗe.", "Ku koya wa masu koyon sana'arku waɗannan dokoki."],
          words: [["Ƙafar injin (presser foot)", "sashen injin ɗinki da ke riƙe yadi a shimfiɗe a ƙarƙashin allura."], ["Soket da aka cika", "filogi da yawa a wurin wuta ɗaya; zai iya yin zafi ya tayar da gobara."], ["Mai koyon sana'a", "matashi da ke koyon sana'a ta hanyar aiki tare da ku."]],
          slides: [
            { title: "Jikinku shi ne kasuwancinku", bullets: ["Rauni zai iya hana aiki na makonni", "Gobara za ta iya ƙone yadin kowane abokin ciniki", "Halaye masu sauƙi suna kiyaye ku"] },
            { title: "Kayan aiki masu kaifi", bullets: ["Yatsu nesa da allura; kada ku ɗinka kan fil", "Almakashi da reza a wuri ɗaya, kawunansu ƙasa", "Fil a matashi ko gwangwani, ba a baki ba"] },
            { title: "Zafi da wutar lantarki", bullets: ["Kada ku bar guga mai zafi ko ta gawayi ita kaɗai", "Ku duba wayoyi; kada ku cika soket", "Ku cire filogi idan kun rufe; yashi, ruwa ko na'urar kashe gobara a ƙofa"] },
            { title: "Jikinku da wurinku", bullets: ["Baya a jingine, haske mai kyau", "Ku tashi ku miƙe jiki kowace sa'a", "Hanyoyi a buɗe: babu naɗin yadi ko wayoyi a ƙasa"] }
          ],
          tryIt: "Ku zagaya shagonku yanzu. Ku rubuta kowane haɗarin da kuka gani. Ku gyara uku daga cikinsu yau ku yi musu alama a jerinku.",
          youCanNow: "duba shagonku don haɗarin kayan aiki masu kaifi, zafi, wutar lantarki da tuntuɓe, da gyara su.",
          quickCheck: [
            { objective: "O1", q: "A ina ya kamata ku ajiye fil yayin da kuke aiki?", options: ["A matashin fil ko gwangwani", "A bakinku, don su kasance kusa", "A ƙasa kusa da kujerarku", "A cikin naɗin yadi"], answer: 0, why: "Matashi ko gwangwani yana nisantar da fil daga bakinku, ƙasa da yadin abokin ciniki." },
            { objective: "O1", q: "Filogi biyar suna soket ɗaya kuma yana jin ɗumi. Me za ku yi?", options: ["Ku ci gaba; abu ne na yau da kullum", "Ku cire wasu ku raba su, ko ku yi amfani da ƙarin soket mai aminci", "Ku zuba masa ruwa don ya huce", "Ku rufe shi da yadi"], answer: 1, why: "Soket mai ɗumi da aka cika zai iya tayar da gobara; ku rage nauyin, kuma kada ku taɓa amfani da ruwa kusa da wutar lantarki." }
          ]
        },
        {
          title: "Awo da katin oda",
          objectives: ["O2"],
          minutes: 5,
          goal: "Auna jikin abokin ciniki ku cike cikakken katin oda.",
          text: [
            "Jayayya da yawa da abokan ciniki tana farawa ne domin ba a rubuta komai ba. \"Na ce hannu dogo.\" \"Ka ce Jumma'a.\" \"Na biya ka rabi.\" Katin oda yana hana wannan. Shafi ɗaya ne ko kati ɗaya don kowane aiki, da kwafi ko hoto ga abokin ciniki.",
            "Katin oda yana nuna: sunan abokin ciniki da lambar wayarsa; kwanan wata; salo (zane ko hoton salon da yake so); awo; yadi (wane ne ya kawo shi, yadi ko mita nawa, da ɗan yanki da aka manna da sitefula); farashi, kuɗin gaba da aka biya da ragowar kuɗi; ranar gwada riga da ranar kai kaya; da sa hannunku da nasa.",
            "Ku auna ta hanya ɗaya kowane lokaci, a tsari ɗaya, da tef mai kyau. Ku rubuta ma'auni (cm ko inci). Ku karanta wa abokin ciniki awo da bayanan kafin ya tafi. Ga odar aso ebi a Lagos, kaba da slit a Kumasi ko babbar riga (boubou) a Dakar don Babbar Sallah (Tabaski), katin iri ɗaya ne: ku da abokin ciniki duk kun san abin da aka amince da shi daidai."
          ],
          steps: ["Ku rubuta sunan abokin ciniki, lambar waya da kwanan wata.", "Ku zana salon ko ku haɗa hoto.", "Ku auna a tsarinku na yau da kullum ku rubuta ma'aunin.", "Ku rubuta bayanan yadi ku manna ɗan yanki da sitefula.", "Ku rubuta farashi, kuɗin gaba, ragowar kuɗi, ranar gwada riga da ranar kai kaya.", "Ku karanta komai, ku duka ku sa hannu, ku ba abokin ciniki kwafi ko ku bar shi ya ɗauki hoto."],
          words: [["Katin oda", "rubutaccen bayanin aiki ɗaya: me, ga wa, nawa da yaushe."], ["Kuɗin gaba", "kuɗin da ake biya kafin ku fara aikin."], ["Ragowar kuɗi", "kuɗin da ya rage a biya bayan kuɗin gaba."]],
          slides: [
            { title: "Me yasa za a rubuta", bullets: ["\"Na ce hannu dogo.\" \"Ka ce Jumma'a.\"", "Kati yana kawo ƙarshen jayayya", "Kati ɗaya ga kowane aiki; kwafi ga abokin ciniki"] },
            { title: "Abin da katin ke nunawa", bullets: ["Suna, waya, kwanan wata; zanen salo ko hoto", "Awo da ma'auni", "Bayanan yadi da ɗan yanki"] },
            { title: "Kuɗi da ranaku", bullets: ["Farashi, kuɗin gaba da aka biya, ragowar kuɗi", "Ranar gwada riga da ranar kai kaya", "Ku duka ku sa hannu"] },
            { title: "Kafin abokin ciniki ya tafi", bullets: ["Ku karanta kowane bayani", "Ku gyara kowane kuskure yanzu", "Abokin ciniki yana ajiye kwafi ko hoto"] }
          ],
          tryIt: "Ku zana katin odarku a shafi ɗaya da kowane sashe daga wannan darasi. Ku cike shi don aboki ko ɗan iyali kamar ya yi odar riga, sannan ku karanta masa.",
          youCanNow: "auna jiki ta hanya ɗaya kowane lokaci da cike katin oda da ku da abokin ciniki duk kuka amince da shi.",
          quickCheck: [
            { objective: "O2", q: "Abokin ciniki ya ce, \"Ba ka taɓa faɗa mini Jumma'a ba.\" Me zai hana wannan?", options: ["Babban allon suna na shago", "Ɗinki da sauri", "Katin oda da ranar kai kaya da ku duka kuka sa wa hannu", "Karɓar kuɗi ƙasa"], answer: 2, why: "Katin da aka sa wa hannu da ranar kai kaya yana nuna abin da aka amince." },
            { objective: "O2", q: "Kun gama awo. Me za ku yi kafin abokin ciniki ya tafi?", options: ["Ku jefar da ƙaramar takardar", "Ku nemi cikakken farashi kawai", "Ku fara yanka nan take", "Ku karanta kowane bayani ku ba shi kwafi ko hoton katin"], answer: 3, why: "Karantawa yana kama kurakurai, kuma kwafi yana nufin ku duka kuna riƙe da bayani iri ɗaya." }
          ]
        },
        {
          title: "Lissafin kuɗin riga da sanya farashi",
          objectives: ["O3"],
          minutes: 6,
          goal: "Lissafa cikakken kuɗin riga ɗaya ku sanya farashin da zai kawo riba.",
          text: [
            "Teloli da yawa suna kwaikwayon farashin shagon da ke kusa. Amma idan kuɗinku ya fi nasu, wataƙila kuna aiki a banza. Ku fara lissafa kuɗinku, sannan ku yanke farashi.",
            "Kayan aiki: duk abin da ke shiga rigar idan kun saya, kamar layin ciki (lining), abin ƙarfafa yadi (interfacing), zare, zip, maɓalli, zaren ado da abin naɗe kaya. Idan abokin ciniki ya kawo yadi, kada ku ƙidaya yadin, amma ku ƙidaya duk sauran.",
            "Lokacinku: sa'o'i nawa rigar take ɗauka (yanka, ɗinki, gwada riga, gamawa) sau abin da kuke son samu a kowace sa'a. Kuɗin gudanarwa: haya, wutar lantarki ko man janareto, gyaran inji, allura, data na waya, rabo ga kowace riga. Hanya mai sauƙi: ku tara kuɗin gudanarwa na wata ɗaya ku raba da yawan rigunan da kuke ɗinkawa a wata.",
            "Misali (adadin misalai ne kawai): rigar mata a Kenya. Kayan aiki KES 450, lokaci sa'o'i 4 a KES 200 = KES 800, kuɗin gudanarwa KES 250. Kuɗi = KES 1,500. Ku ƙara riba, misali 30%, wato KES 450. Farashi = KES 1,950. Sannan ku kwatanta da kasuwa. Idan farashin kasuwa ya yi ƙasa sosai, ku nemi hanya mai rahusa ko salo mafi sauƙi. Kada ku sauke farashinku ƙasa da kuɗinku kawai."
          ],
          steps: ["Ku jera ku tara kayan aikin riga ɗaya.", "Ku ninka sa'o'i da abin da kuke son samu a kowace sa'a.", "Ku ƙara rabon kuɗin gudanarwa na wata ɗaya.", "Ku tara ukun: wannan shi ne kuɗinku.", "Ku ƙara riba don samun farashinku.", "Ku kwatanta da kasuwa ku canja salo ko hanya, ba riba kawai ba."],
          words: [["Kuɗi (cost)", "duk kuɗi da lokacin da ake kashewa don yin riga ɗaya."], ["Kuɗin gudanarwa", "kuɗin da kuke kashewa don shagon ya ci gaba da buɗe, kamar haya da wutar lantarki."], ["Riba", "abin da ya rage muku da kasuwancin bayan an biya duk kuɗaɗe."], ["Ƙarin riba (margin)", "ribar da kuke ƙarawa a kan kuɗi."]],
          slides: [
            { title: "Kuɗi da farko, farashi daga baya", bullets: ["Kwaikwayon shagon da ke kusa zai iya nufin aiki a banza", "Ku san kuɗinku"] },
            { title: "Sassa uku na kuɗi", bullets: ["Kayan aiki: layin ciki, zare, zip, maɓalli, abin naɗe kaya", "Lokacinku: sa'o'i x abin da kuke so a kowace sa'a", "Kuɗin gudanarwa: haya, wuta, gyara, data"] },
            { title: "Misali (KES, misali kawai)", bullets: ["Kayan aiki 450 + lokaci 800 + gudanarwa 250 = 1,500", "Ku ƙara ribar 30%: 450", "Farashi: KES 1,950"] },
            { title: "Idan kasuwa ta yi ƙasa", bullets: ["Salo mafi sauƙi ko hanya mai rahusa", "Ku nemi abokan cinikin da ke daraja ingancinku", "Kada ku taɓa sanya farashi ƙasa da kuɗinku"] }
          ],
          tryIt: "Ku zaɓi rigar da kuka fi ɗinkawa. Ku lissafa kayan aikinta, lokacinku da rabonta na kuɗin gudanarwa. Ku ƙara riba ku rubuta farashin. Ku kwatanta shi da abin da kuke karɓa yanzu.",
          youCanNow: "lissafa ainihin kuɗin da riga ɗaya ke ci muku da sanya farashin da zai biya ku da kasuwancin.",
          quickCheck: [
            { objective: "O3", q: "Abokiyar ciniki ta kawo yadinta. Me har yanzu za ku ƙidaya a kayan aiki?", options: ["Babu komai", "Layin ciki, zare, zip da maɓallan da kuke saya", "Yadin kawai", "Kuɗin motar abokiyar ciniki"], answer: 1, why: "Idan ku ne kuke sayen layin ciki, zare, zip da maɓalli, kuɗinku ne ko da yadin ba naku ba ne." },
            { objective: "O3", q: "Kayan aiki GHS 60, lokaci GHS 90, kuɗin gudanarwa GHS 30. Nawa ne kuɗin kafin riba? (Adadin misali.)", options: ["GHS 150", "GHS 120", "GHS 180", "GHS 90"], answer: 2, why: "60 + 90 + 30 = 180; ana ƙara riba a kan wannan." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Karɓar odar da ke kawo riba",
        questions: [
          { objective: "O1", q: "Mai koyon sana'arku ya bar guga ta gawayi tsaye a kan tarin yadi yayin da yake amsa waya. Me za ku koya masa?", options: ["Guga ba ta da matsala a kan yadi", "Ku kife guga a kan tebur", "Kada a taɓa barin guga mai zafi ita kaɗai, a tsayar da ita inda ba za ta faɗi ba, nesa da yadi", "Ku amsa waya da sauri"], answer: 2, why: "Guga mai zafi da aka bari a kan yadi ko kusa da shi za ta iya tayar da gobara cikin daƙiƙoƙi." },
          { objective: "O2", q: "Wanne daga cikin waɗannan ya kamata ya kasance a katin oda?", options: ["PIN na abokin ciniki", "Ranar kai kaya, farashi, kuɗin gaba da ragowar kuɗi", "Farashin maƙwabcinku", "Lambar katin shaidar abokin ciniki"], answer: 1, why: "Katin yana rubuta aikin, kuɗin da ranakun; lambobin sirri ba sa shiga ciki." },
          { objective: "O2", q: "Me yasa za a manna ɗan yankin yadi a katin?", options: ["Don ku haɗa yadin da ya dace da odar da ta dace", "Don amfani da shi a matsayin matashin fil", "Domin doka ta ce haka", "Don karɓar kuɗi fiye da haka"], answer: 0, why: "Ɗan yanki yana hana rikicewa idan yadin abokan ciniki da yawa suna cikin shago." },
          { objective: "O3", q: "Maƙwabcinku yana karɓar NGN 8,000 don salon da ke cin muku NGN 9,000 don yin sa. Me za ku yi? (Adadin misali.)", options: ["Ku karɓi NGN 7,500 don samun abokan ciniki", "Ku karɓi NGN 8,000 ku yi asarar NGN 1,000 kowane lokaci", "Ku daina ɗinka wannan salon har abada", "Ku nemi hanya mai rahusa ko salo mafi sauƙi, ku sanya farashi sama da kuɗinku"], answer: 3, why: "Sanya farashi ƙasa da kuɗi yana kawo asara a kowace riga; ku canja hanya ko salo maimakon haka." },
          { objective: "O3", q: "Ta yaya za ku lissafa rabon kowace riga na haya da wutar lantarki?", options: ["Ku yi hasashen lamba", "Ku tara kuɗin gudanarwa na wata ku raba da rigunan da kuke ɗinkawa a wata", "Ku nemi abokin ciniki ya biya haya", "Ku bar shi; ƙarami ne"], answer: 1, why: "Raba kuɗin gudanarwa na wata a kan rigunan wata yana ba kowace riga rabo na adalci." }
        ]
      }
    },
    {
      name: "Babi na 2: Gudanar da kasuwancin",
      lessons: [
        {
          title: "Tsara makonku da ranakun kai kaya",
          objectives: ["O4"],
          minutes: 5,
          goal: "Tsara odar mako ɗaya ta yadda kowace ranar kai kaya ta dace da ainihin sa'o'inku.",
          text: [
            "Lokutan aiki mafi yawa, kamar Kirsimeti, Sallah (Eid), Babbar Sallah (Tabaski), Ista, buɗe makarantu da lokacin bukukuwan aure, su ne lokutan da teloli ke rasa abokan ciniki saboda alƙawari fiye da kima. Tsarin mako mai sauƙi yana taimaka muku ku amince kawai da abin da za ku iya gamawa.",
            "Da farko, ku ƙidaya ainihin sa'o'in ɗinkinku a mako, ba tare da lokacin abokan ciniki, sayen kayan aiki, ɗaukewar wuta da hutu ba. Na gaba, ku rubuta sa'o'i nawa kowace oda da ba a gama ba take buƙata (daga lissafin kuɗinku). Sannan ku sa kowace oda a wata rana, wadda ranar kai kayanta ta fi kusa ta fara, da gwada riga kafin gamawa. Ku bar kusan sa'a ɗaya cikin biyar a buɗe don abubuwan ba-zata kamar ɗaukewar wuta ko lalacewar inji.",
            "Idan makon ya cika, ya cika. Ku ba da rana ta gaba da ke a buɗe, ku nemi kuɗin gaba don riƙe wurin, ko ku ƙi cikin ladabi. A lokacin aiki mai yawa, ku sanya ranar ƙarshe ta karɓar sabuwar oda, misali makonni biyu kafin Tabaski a Dakar ko kafin Kirsimeti a Accra, kuma ku sanar da abokan ciniki da wuri a status ɗinku da a shago."
          ],
          steps: ["Ku ƙidaya ainihin sa'o'in ɗinkinku a wannan mako.", "Ku jera odar da ba a gama ba da sa'o'in da kowace ke buƙata da ranar kai kayanta.", "Ku sa oda a ranaku, wadda ranar kai kayanta ta fi kusa ta fara, da gwada riga kafin gamawa.", "Ku bar kusan sa'a ɗaya cikin biyar a buɗe don abubuwan ba-zata.", "Idan makon ya cika, ku ba da rana ta gaba da ke a buɗe ko ku ƙi cikin ladabi."],
          words: [["Ranar kai kaya", "ranar da kuka yi alƙawari rigar za ta kasance a shirye."], ["Gwada riga", "lokacin da abokin ciniki ke gwada rigar don ku gyara ta."], ["Ranar ƙarshe ta oda", "rana ta ƙarshe da kuke karɓar sabuwar oda kafin wani biki mai yawan aiki."]],
          slides: [
            { title: "Lokutan aiki mai yawa suna karya alƙawari", bullets: ["Kirsimeti, Sallah, Tabaski, Ista, bukukuwan aure, buɗe makarantu", "Ku yi alƙawari kawai da abin da sa'o'inku suka ba da dama"] },
            { title: "Tsara makon", bullets: ["Ku ƙidaya ainihin sa'o'in ɗinkinku", "Sa'o'in da kowace oda ke buƙata", "Ranar kai kaya mafi kusa da farko; gwada riga kafin gamawa"] },
            { title: "Ku bar wani lokaci a buɗe", bullets: ["Kusan sa'a ɗaya cikin biyar don abubuwan ba-zata", "Ɗaukewar wuta, lalacewar inji, ranakun rashin lafiya"] },
            { title: "Idan makon ya cika", bullets: ["Ku ba da rana ta gaba da ke a buɗe", "Kuɗin gaba yana riƙe wurin", "Ku sanar da ranar ƙarshe ta odar biki da wuri"] }
          ],
          tryIt: "Ku rubuta ainihin sa'o'in ɗinkinku na mako mai zuwa. Ku jera odar da ba a gama ba da sa'o'in da kowace ke buƙata da ranar kai kayanta. Ku sa su a ranaku. Akwai abin da zai makara? Ku yanke yanzu abin da za ku faɗa wa wannan abokin ciniki.",
          youCanNow: "tsara odar mako da ta dace da sa'o'inku da sanya ranar ƙarshe ta oda a lokacin aiki mai yawa.",
          quickCheck: [
            { objective: "O4", q: "Kuna da ainihin sa'o'in ɗinki 30 a wannan mako da odar da ke buƙatar 40. Me za ku yi?", options: ["Ku yi alƙawarin dukkansu duk da haka", "Ku yi ɗinki dukan dare kowane dare", "Ku ƙyale ranakun kai kaya", "Ku canja wasu ranakun kai kaya tare da abokan ciniki yanzu, ko ku daina karɓar sabuwar oda"], answer: 3, why: "Sanar da abokan ciniki da wuri da rashin karɓar aikin da ya wuce sa'o'inku suna kiyaye alƙawuranku da sunanku." },
            { objective: "O4", q: "Me yasa za ku bar kusan sa'a ɗaya cikin biyar a buɗe a tsarinku?", options: ["Don abubuwan ba-zata kamar ɗaukewar wuta ko lalacewar inji", "Don zuwa kasuwa", "Domin abokan ciniki suna son jira", "Ba a buƙata"], answer: 0, why: "Lokacin da ke a buɗe yana ɗaukar abubuwan ba-zata don kada su sa oda ta makara." }
          ]
        },
        {
          title: "Bayanan kuɗi, kare kuɗin waya da rajista",
          objectives: ["O5"],
          minutes: 6,
          goal: "Rubuta kuɗin shiga da kuɗin fita na mako ɗaya ku gane zambar kuɗin waya.",
          text: [
            "Ku raba kuɗin kasuwanci da kuɗin iyali. Littafin kuɗi mai sauƙi yana da ginshiƙai huɗu: kwanan wata, abin da aka yi, kuɗin shiga, kuɗin fita. Ku rubuta kowane kuɗin gaba, ragowar kuɗin da aka biya da kowane sayayya a ranar. A ƙarshen mako, ku tara kuɗin shiga, ku cire kuɗin fita, ku duba sakamakon da kuɗin hannu da kuɗin waya da kuke da su a zahiri. A Côte d'Ivoire ko Senegal za ku iya rubutawa da XOF; a Kamaru da XAF; hanyar iri ɗaya ce.",
            "Kuɗin waya (mobile money) yana da sauri, kuma 'yan damfara sun sani. Alamun gargaɗi: saƙon da ke cewa an aiko muku kuɗi \"bisa kuskure\" kuma yana neman ku mayar (ku fara duba ainihin ragowar kuɗinku, ku nemi kamfanin ya mayar da shi, kada ku aika da kanku); duk wanda ke neman PIN ɗinku ko code da aka turo wayarku; kira daga \"ma'aikacin kula da abokan ciniki\" ta lamba ta yau da kullum; babbar oda ta gaggawa daga baƙo da ke son ku fara biyan \"kuɗin kai kaya\". Kamfanin kuɗin waya na gaske ba ya taɓa neman PIN ɗinku.",
            "Rajistar sunan kasuwancinku za ta iya taimaka muku buɗe asusun banki na kasuwanci, neman kwangila da makarantu da kamfanoni, da nuna wa abokan ciniki cewa kuna da muhimmanci. A Kenya, Hukumar Rajistar Kasuwanci (BRS) ce ke yi ta eCitizen; a Najeriya, Hukumar CAC (Corporate Affairs Commission); a Ghana, Ofishin Magatakardar Kamfanoni; a Senegal, ku tambayi APIX. Dokoki, matakai da kuɗi suna canjawa, don haka ku duba shafin hukuma ko ofishin, kuma ku yi hankali da wakilai na bogi da ke tallata \"rajista kyauta\"."
          ],
          steps: ["Ku buɗe littafin rubutu ko rubutu a waya mai ginshiƙai huɗu: kwanan wata, me, shiga, fita.", "Ku rubuta kowane kuɗin gaba, biya da sayayya a ranar.", "A ƙarshen mako: jimillar shiga ban da jimillar fita.", "Ku duba sakamakon da ainihin kuɗin hannu da ragowar kuɗin wayarku.", "Kada ku taɓa bayyana PIN ɗinku; ku duba duk wani \"aikawa bisa kuskure\" da kamfaninku kafin ku yi komai."],
          words: [["Littafin kuɗi", "bayani mai sauƙi na kuɗin da ke shigowa da wanda ke fita."], ["PIN", "lambar sirrinku ta kuɗin waya; ku kaɗai ya kamata ku san ta."], ["Mayar da kuɗi (reversal)", "lokacin da kamfani ke mayar da kuɗin da ya tafi ga wanda bai dace ba."], ["Rajistar sunan kasuwanci", "saka sunan kasuwancinku a jerin gwamnati na hukuma."]],
          slides: [
            { title: "Littafin kuɗi mai sauƙi", bullets: ["Kwanan wata, me, kuɗin shiga, kuɗin fita", "Ku rubuta a ranar", "Kuɗin kasuwanci daban da kuɗin iyali"] },
            { title: "Ku duba kowane mako", bullets: ["Jimillar shiga ban da jimillar fita", "Ku kwatanta da ainihin kuɗin hannu da kuɗin waya", "Ku nemo gibin yayin da kuke tunawa"] },
            { title: "Alamun zambar kuɗin waya", bullets: ["\"An aiko bisa kuskure, don Allah ku mayar\"", "Duk wanda ke neman PIN ɗinku ko code", "\"Kula da abokan ciniki\" ta lamba ta yau da kullum; kuɗi kafin babbar oda", "Kamfani na gaske ba ya taɓa neman PIN ɗinku"] },
            { title: "Ku yi rajistar sunan kasuwancinku", bullets: ["Kenya: BRS ta eCitizen; Najeriya: CAC", "Ghana: Magatakardar Kamfanoni; Senegal: ku tambayi APIX", "Dokoki da kuɗi suna canjawa: ku duba shafin hukuma"] }
          ],
          sources: [KE_BRS, NG_CAC, GH_ORC],
          tryIt: "Ku fara littafin kuɗinku yau. Ku rubuta kowane adadin kuɗi na kwanaki uku da suka wuce da kuke tunawa. Sannan ku rubuta ofishin rajista na hukuma na ƙasarku da abu ɗaya da za ku duba a can.",
          youCanNow: "ajiye littafin kuɗi na mako-mako, gane zambar kuɗin waya da sanin ofishin da ke rajistar sunayen kasuwanci a ƙasarku.",
          quickCheck: [
            { objective: "O5", q: "Wani tes ya ce an aiko muku KES 5,000 bisa kuskure kuma yana neman ku mayar. Me za ku fara yi?", options: ["Ku mayar nan take", "Ku ba da PIN ɗinku don su gyara", "Ku duba ainihin ragowar kuɗinku ku tuntuɓi kamfaninku ta layinsa na hukuma", "Ku amsa da lambar katin shaidarku"], answer: 2, why: "Yawancin tes ɗin \"aikawa bisa kuskure\" na bogi ne; kamfanin ne ke kula da mayar da kuɗi na gaske." },
            { objective: "O5", q: "A ƙarshen mako littafin kuɗinku yana nuna kuɗi fiye da abin da kuke da shi a zahiri. Me za ku yi?", options: ["Ku ƙyale shi", "Ku nemi biya ko sayayyar da kuka manta ku rubuta", "Ku yage shafin", "Ku ci bashi don ya yi daidai"], answer: 1, why: "Gibi yawanci yana nufin ba a rubuta wani abu ba; ku nemo shi yayin da kuke tunawa." }
          ]
        },
        {
          title: "Nuna aikinku da samun abokan ciniki",
          objectives: ["O6"],
          minutes: 5,
          goal: "Yi saƙo ko kaya a kundin kaya da ke nuna rigar da aka gama, farashinta da yadda ake yin oda.",
          text: [
            "Tallarku mafi kyau ita ce aikinku. Hoto mai kyau na rigar da aka gama, da aka raba a status na WhatsApp, kundin kaya na WhatsApp Business, Facebook, Instagram ko TikTok, ko aka buga a bangon shagonku, yana kawo sababbin abokan ciniki. Mai zanen kaya a Casablanca zai iya nuna kaftani, kuma telo a Kumasi rigar kente, ta hanya ɗaya.",
            "Hoto mai kyau: hasken rana, bango maras ado, dukan rigar, sannan hoto ɗaya na kusa na ado ko gamawar. Idan abokin ciniki ne ke sanye da ita, ku fara tambaya ko za ku iya raba hoton, kuma kada ku taɓa raba sunansa, lambar wayarsa ko awonsa. Wasu abokan ciniki za su ce a'a; ku girmama hakan.",
            "Kowane saƙo yana faɗin mene ne, farashi ko farashin \"daga\", tsawon lokacin da yake ɗauka, da yadda ake yin oda (lambar wayarku ko \"ku turo min saƙo\"). Jerin farashi a bango ko a matsayin hoto a wayarku shi ma yana taimakawa: manyan rigunanku biyar zuwa goma da farashinsu, bisa lissafin kuɗinku. Ku rage kuɗin data ta hanyar raba hoto ɗaya mai kyau maimakon da yawa."
          ],
          steps: ["Ku zaɓi riga ɗaya da aka gama.", "Ku ɗauki hoto a hasken rana a bango maras ado, da hoto ɗaya na kusa.", "Ku nemi izini idan abokin ciniki yana cikin hoton.", "Ku rubuta mene ne, farashi, tsawon lokaci da yadda ake yin oda.", "Ku saka shi, ko ku ƙara shi a kundin kayanku ko jerin farashinku."],
          words: [["Kundin kaya (catalogue)", "jerin kayanku da hotuna da farashi, misali a WhatsApp Business."], ["Jerin farashi", "jerin manyan rigunanku da kuɗin yin odar kowacce."], ["Izini", "abokin ciniki ya ce e kafin ku raba hotonsa."]],
          slides: [
            { title: "Aikinku shi ne tallarku", bullets: ["Status ko kundin kaya na WhatsApp, Facebook, Instagram, TikTok", "Ko a buga a bangon shagonku"] },
            { title: "Hoto mai kyau", bullets: ["Hasken rana, bango maras ado", "Dukan rigar da hoto ɗaya na kusa", "Abokin ciniki yana ciki? Ku fara tambaya"] },
            { title: "Abin da kowane saƙo ke faɗa", bullets: ["Mene ne", "Farashi ko farashin \"daga\"; tsawon lokaci", "Yadda ake yin oda"] },
            { title: "Ku kare abokan ciniki", bullets: ["Babu suna, lambar waya ko awo a saƙo", "Idan sun ce a'a, kada ku raba"] }
          ],
          tryIt: "Ku ɗauki hoton riga ɗaya da aka gama a hasken rana. Ku rubuta saƙo da mene ne, farashi daga lissafin kuɗinku, tsawon lokaci da yadda ake yin oda. Ku raba shi a status ɗinku ko ku ajiye shi don kundin kayanku.",
          youCanNow: "nuna aikinku da hoto mai kyau, farashi da yadda ake yin oda, yayin da kuke kare sirrin abokan cinikinku.",
          quickCheck: [
            { objective: "O6", q: "Me dole saƙo game da rigarku ya ƙunsa?", options: ["Awon abokin ciniki", "Hoto kawai, babu komai", "Farashin da kuka biya na zare", "Mene ne, farashi, tsawon lokaci da yadda ake yin oda"], answer: 3, why: "Abokan ciniki suna buƙatar sanin mene ne, nawa ne, yaushe za su samu da yadda ake yin oda." },
            { objective: "O6", q: "Kuna son raba hoton abokiyar ciniki sanye da rigarku. Me za ku yi?", options: ["Ku fara tambayarta, kuma kada ku raba suna ko lambar waya", "Ku saka shi da sunanta don mutane su tambaye ta", "Ku saka shi; abokiyar cinikinku ce", "Ku saka awonta ma"], answer: 0, why: "Hoton abokiyar ciniki da bayananta nata ne; ku fara tambaya kuma ku bar bayanan sirri a waje." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Gudanar da kasuwancin",
        questions: [
          { objective: "O4", q: "Saura makonni uku Tabaski kuma makonku ya riga ya cika. Sabon abokin ciniki yana son babbar riga. Me za ku yi?", options: ["Ku yi alƙawarin ta kafin Tabaski duk da haka", "Ku ba da rana ta gaba da ke a buɗe da gaskiya, ko ku ƙi cikin ladabi", "Ku karɓa ku ba mataimakin da bai ƙware ba", "Ku karɓi kuɗin gaba ba tare da faɗin komai game da rana ba"], answer: 1, why: "Ranaku na gaskiya suna kiyaye sunanku; alƙawari fiye da kima a lokacin aiki mai yawa yana rasa abokan ciniki." },
          { objective: "O4", q: "A tsarin makonku, wace oda ce take farko?", options: ["Wadda ranar kai kayanta ta fi kusa", "Wadda ta fi sauƙi", "Ta abokinku", "Wadda ta fi biyan kuɗi"], answer: 0, why: "Ranar kai kaya mafi kusa da farko tana sa kowane alƙawari ya kasance a kan lokaci." },
          { objective: "O5", q: "Wani yana kira a matsayin \"ma'aikacin kula da abokan ciniki na kuɗin waya\" yana neman PIN ɗinku don gyara asusunku. Mene ne gaskiya?", options: ["Dole ku ba da shi", "Ku ba da rabin PIN kawai", "Ku ba da shi idan ya san sunanku", "Kamfani na gaske ba ya taɓa neman PIN ɗinku; ku katse wayar"], answer: 3, why: "Duk wanda ke neman PIN ɗinku ɗan damfara ne, ko da ya san sunanku." },
          { objective: "O5", q: "Me yasa za ku raba kuɗin kasuwanci da kuɗin iyali?", options: ["Don ku ga ko kasuwancin yana samun riba da gaske", "Domin banki ya ce haka", "Don kada iyali su ci abinci", "Ba shi da muhimmanci"], answer: 0, why: "Haɗa su yana ɓoye ko kasuwancin yana samun riba ko asara." },
          { objective: "O6", q: "Wane hoto ne ya fi nuna aikinku?", options: ["An ɗauka da daddare da fitila a ɗaki mai ɗimuwa", "Rabin rigar a bangon kasuwa mai cunkoso", "Hasken rana, bango maras ado, dukan rigar da hoto na kusa", "Hoton aikin wani daban"], answer: 2, why: "Haske mai kyau, bango maras ado da hoton ado na kusa suna nuna ingancin aikinku." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Gudanar da Sana'ar Ɗinki da Kayan Kwalliya",
    questions: [
      { objective: "O1", q: "Ina ne wuri mafi aminci don karyayyun allura?", options: ["A ƙasa", "A gwangwani mai murfi", "A jakar abokin ciniki", "A aljihunku"], answer: 1, why: "Gwangwani mai murfi yana nisantar da karyayyun allura daga ƙafafu, hannaye da yara." },
      { objective: "O1", q: "Kun ga wayar inji da ta yanke har wayoyin ciki suna bayyana. Me za ku yi?", options: ["Ku naɗe ta da yadi ku ci gaba da ɗinki", "Ku ci gaba da amfani da ita a hankali", "Ku cire filogi ku sa a gyara ko a canja wayar kafin ku yi amfani da ita", "Ku bar mai koyon sana'a ya yi amfani da ita"], answer: 2, why: "Wayoyin da suka lalace za su iya ja muku wuta ko tayar da gobara; ku tsaya ku gyara da farko." },
      { objective: "O1", q: "Wace al'ada ce ke kare bayanku da idanunku?", options: ["Ɗinki a kusurwa mai duhu", "Zama a lanƙwashe na sa'o'i shida", "Aiki da dare kawai", "Haske mai kyau, baya a jingine da miƙe jiki kowace sa'a"], answer: 3, why: "Haske, yanayin zama da hutu suna hana gajiya a cikin dogayen ranakun ɗinki." },
      { objective: "O2", q: "Me ke shiga katin oda?", options: ["Salo, awo, yadi, farashi, kuɗin gaba, ragowar kuɗi, ranar gwada riga da ranar kai kaya", "Sunan abokin ciniki kawai", "Farashi kawai", "PIN na bankin abokin ciniki"], answer: 0, why: "Cikakken kati yana rubuta dukan yarjejeniyar; lambobin sirri ba sa shiga ciki." },
      { objective: "O2", q: "Me yasa za ku rubuta ma'auni (cm ko inci) tare da awo?", options: ["Yana da kyau a gani", "Don kada ku ko mataimaki ku yanka a girman da bai dace ba", "Abokin ciniki ne ke nema", "Ba a buƙata"], answer: 1, why: "Rikita cm da inci yana ɓata riga." },
      { objective: "O2", q: "Abokiyar ciniki ta ce ta biya fiye da abin da katin ke nunawa. Me ya fi taimakawa?", options: ["Ihu", "Ƙin gama rigar", "Katin da aka sa wa hannu da abin da kuka rubuta a littafin kuɗinku na wannan rana", "Tambayar maƙwabci"], answer: 2, why: "Rubutattun bayanai da aka sa wa hannu suna nuna abin da aka biya da yaushe." },
      { objective: "O2", q: "Kafin abokin ciniki na aso ebi ya tafi, me za ku yi da katin oda?", options: ["Ku ɓoye shi", "Ku jefar da shi bayan yanka", "Ku cike shi daga baya daga tunani", "Ku karanta shi, ku duka ku sa hannu, ku ba da kwafi ko ku bar shi ya ɗauki hoto"], answer: 3, why: "Karantawa da raba katin yana nufin ku duka kun amince da bayanai iri ɗaya." },
      { objective: "O3", q: "Wane sassa uku ne ke haɗa kuɗin riga?", options: ["Kayan aiki, lokacinku da kuɗin gudanarwa", "Yadi, riba da kuɗin mota", "Haya, waya da abinci", "Kayan aiki kawai"], answer: 0, why: "Kayan aiki, lokaci da kuɗin gudanarwa tare su ne ainihin kuɗi; riba tana kan su." },
      { objective: "O3", q: "Kuɗin GHS 200 ne kuma kun ƙara ribar 25%. Nawa ne farashin? (Adadin misali.)", options: ["GHS 225", "GHS 250", "GHS 275", "GHS 200"], answer: 1, why: "25% na 200 shi ne 50, don haka farashin 250 ne." },
      { objective: "O3", q: "Me yasa za ku saka lokacinku a cikin kuɗi?", options: ["Ba a buƙata idan shagon naku ne", "Lokacin masu koyon sana'a kaɗai ake ƙidayawa", "Sa'o'in aikinku suna da daraja ta kuɗi; ba tare da su ba kuna aiki kyauta", "Abokan ciniki suna son gani"], answer: 2, why: "Idan lokacinku ba ya cikin farashi, kasuwancin ba ya biyan ku." },
      { objective: "O3", q: "Farashinku ya fi na kasuwa. Mene ne mataki na farko mai kyau?", options: ["Ku sauka ƙasa da kuɗinku", "Ku rufe kasuwancin", "Ku kwaikwayi zanen wani telo", "Ku duba salo mafi sauƙi ko hanya mai rahusa, ko abokan cinikin da ke daraja ingancinku"], answer: 3, why: "Ku canja yadda kuke yi ko wanda kuke sayar wa kafin ku taɓa kuɗinku." },
      { objective: "O4", q: "Mene ne mataki na farko na tsara makonku?", options: ["Ku ƙidaya ainihin sa'o'in ɗinkinku", "Ku karɓi kowace oda da ta zo", "Ku sayi ƙarin yadi", "Ku saka a kafofin sada zumunta"], answer: 0, why: "Ba za ku iya tsara oda ba har sai kun san sa'o'i nawa kuke da su da gaske." },
      { objective: "O4", q: "Me yasa za ku sanya ranar ƙarshe ta oda kafin Kirsimeti ko Sallah?", options: ["Don ku ɓata wa abokan ciniki rai", "Don ku karɓi abin da za ku iya gamawa a kan lokaci kawai", "Don ƙara farashi", "Doka ce"], answer: 1, why: "Ranar ƙarshe tana kare alƙawuranku a makonnin da suka fi aiki." },
      { objective: "O4", q: "Ina gwada riga ke shiga a tsarinku?", options: ["Bayan ranar kai kaya", "Ba a buƙata", "Kafin gamawa, da lokacin yin gyara", "A sa'ar da ake kai kaya"], answer: 2, why: "Gwada riga kafin gamawa yana bar lokacin yin canje-canje kafin ranar kai kaya." },
      { objective: "O5", q: "Wanne ne alamar zambar kuɗin waya?", options: ["Ragowar kuɗinku na ƙaruwa bayan sayarwa", "Rasit daga lambar hukuma ta kamfaninku", "Abokin ciniki yana biyan ragowar kuɗi", "Baƙo yana neman ku biya \"kuɗin kai kaya\" kafin babbar oda"], answer: 3, why: "Neman a fara biyan kuɗi daga baƙo tsarin zamba ne da aka saba gani." },
      { objective: "O5", q: "Sau nawa ya kamata ku rubuta a littafin kuɗinku?", options: ["A ranar kowane kuɗin gaba, biya ko sayayya", "Sau ɗaya a shekara", "Sai idan akwai matsala", "Ba sau ɗaya ba; ku ajiye a ka"], answer: 0, why: "Rubutawa a ranar yana sa bayanin ya kasance daidai kuma cikakke." },
      { objective: "O5", q: "Kuna son yin rajistar sunan kasuwancinku a Najeriya. A ina za ku duba matakai da kuɗin yanzu?", options: ["Wani mutum a tashar mota", "Shafin hukuma ko ofishin Hukumar CAC (Corporate Affairs Commission)", "Wani shafin kafofin sada zumunta kawai", "Abokan cinikinku"], answer: 1, why: "Ofishin rajista na hukuma yana ba da dokoki da kuɗin yanzu; wakilai na bogi suna da yawa." },
      { objective: "O6", q: "Me ya kamata jerin farashi ya nuna?", options: ["Farashin masu gogayya da ku", "Sunayen abokan ciniki", "Manyan rigunanku da farashi bisa lissafin kuɗinku", "Littafin kuɗinku"], answer: 2, why: "Jerin farashin da aka gina daga lissafin kuɗinku yana gaya wa abokan ciniki abin da za su sa rai kuma yana kare ribarku." },
      { objective: "O6", q: "Data tana da tsada ga abokan cinikinku. Yaya za ku saka saƙo?", options: ["Ku aika bidiyo ashirin a rana", "Kada ku saka komai", "Ku aika kowane hoton da kuka ɗauka", "Ku raba hoto ɗaya mai kyau da farashi da yadda ake yin oda"], answer: 3, why: "Hoto ɗaya mai kyau da cikakkun bayanai yana aiki kuma yana adana data." },
      { objective: "O6", q: "Me bai kamata ya taɓa bayyana a saƙo game da rigar abokiyar ciniki ba?", options: ["Sunanta, lambar wayarta ko awonta ba tare da izini ba", "Sunan salon", "Farashi", "Yadda ake yin oda"], answer: 0, why: "Bayanan sirri na abokiyar ciniki nata ne; kada ku taɓa raba su ba tare da izini ba." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [1, 3, 7, 9, 11, 14, 17, 19] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Shago mai aminci", objective: "O1", notYet: "Ba a jera haɗari ba, ko an jera haɗari amma ba a gyara ko ɗaya ba.", meets: "An gano aƙalla haɗari uku kuma an gyara su, kamar gwangwanin fil, wurin ajiye guga lafiya da hanyoyi a buɗe.", exceeds: "An jera duk haɗari kuma an gyara su, kuma an koya wa masu koyon sana'a dokokin." },
      { name: "Katin oda", objective: "O2", notYet: "Katin bai da farashi, kuɗin gaba, ragowar kuɗi ko ranar kai kaya.", meets: "Katin yana da salo, awo da ma'auni, yadi, farashi, kuɗin gaba, ragowar kuɗi, ranar gwada riga da ranar kai kaya, da wurin sa hannun duka biyu.", exceeds: "An yi amfani da shi da abokin ciniki na gaske, an karanta masa kuma an raba kwafi ko hoto." },
      { name: "Jerin farashi da aka lissafa", objective: "O3", notYet: "An kwafo ko an yi hasashen farashi, ba tare da lissafin kuɗi ba.", meets: "Aƙalla riguna biyar, kowacce da lissafin kayan aiki, lokaci da kuɗin gudanarwa da farashi sama da kuɗi.", exceeds: "An kuma kwatanta kowane farashi da kasuwar gida, da bayani kan abin da za a canja idan ya yi tsada sosai." },
      { name: "Tsarin mako", objective: "O4", notYet: "Tsarin yana da sa'o'in aiki fiye da sa'o'in da ake da su, ko babu ranakun kai kaya.", meets: "An sa oda bisa ranar kai kaya cikin ainihin sa'o'i, da gwada riga kafin gamawa da wani lokaci a buɗe.", exceeds: "Ya haɗa da ranar ƙarshe ta oda a lokacin aiki mai yawa na gaba da yadda za a sanar da abokan ciniki." },
      { name: "Littafin kuɗi", objective: "O5", notYet: "Babu bayani, ko an haɗa kuɗin kasuwanci da na iyali.", meets: "Kuɗin gaba, biya da kashe-kashe na mako ɗaya da ragowar kuɗi daidai, kuma an rubuta dokar PIN.", exceeds: "An duba ragowar kuɗin da ainihin kuɗin hannu da kuɗin waya, kuma an rubuta ofishin rajista na ƙasar mai koyo." },
      { name: "Nuna aikin", objective: "O6", notYet: "Babu hoto, ko hoto ba tare da farashi ko hanyar yin oda ba.", meets: "Hoto mai kyau a hasken rana da mene ne, farashi, lokaci da yadda ake yin oda, kuma babu bayanan sirri na abokin ciniki.", exceeds: "An ƙara shi a kundin kaya ko jerin farashi, kuma an rubuta izini ga duk abokin cinikin da ke cikin hoton." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da ke amfani da katin oda don kowane aiki cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka ƙara ko gyara aƙalla farashi ɗaya bayan lissafin kuɗinsa",
      "Raguwar odar da ta makara da jayayya da abokan ciniki a lokacin aiki mai yawa na gaba",
      "Masu koyo da suka yi rajistar sunan kasuwanci ko suka buɗe asusun kasuwanci cikin watanni 6"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Littafin rubutu, alƙalami da na'urar lissafi (ko na'urar lissafi ta waya)",
      "Tef na awo da shagon mai koyo da kansa don dubawa",
      "Waya mai kyamara don saƙon ƙarshe (waya mai sauƙi da hotunan da aka buga ma suna aiki)",
      "Kusan minti 60 zuwa 90 gaba ɗaya, a gajerun zama: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Yana aiki da kyau da ƙungiyoyin teloli, ƙungiyoyin mata da matasa, cibiyoyin koyon sana'a da shirye-shiryen koyon sana'a; ku yi gwajin farko tare.",
      "Ku nemi masu koyo su kawo ainihin farashinsu da oda ɗaya ta gaske; lissafin kuɗin rigarsu ne ke sa yawancinsu su gane cewa farashinsu ya yi ƙasa.",
      "Ku yi amfani da kuɗin gida da bukukuwan gida (Kirsimeti, Sallah, Tabaski, Ista, lokacin bukukuwan aure) a kowane misali.",
      "Kada ku taɓa neman masu koyo su nuna PIN ɗinsu, ragowar kuɗinsu ko lambobin sirri ga ƙungiya; ku yi atisaye da adadin misali.",
      "Dokoki da kuɗin rajista suna canjawa: ku duba shafin hukuma na ofishin rajista na ƙasa kafin zaman ku raba abin da ya faɗa kawai.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
