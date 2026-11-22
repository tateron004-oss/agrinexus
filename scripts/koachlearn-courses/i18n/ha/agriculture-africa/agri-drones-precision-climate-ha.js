"use strict";

// Koach Learn course, Hausa (ha) translation of agriculture-africa/agri-drones-precision-climate.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const FAO_CSA = { name: "FAO: Littafin jagora kan noma mai jure sauyin yanayi (Climate-Smart Agriculture Sourcebook)", url: "https://openknowledge.fao.org/3/a-i3484e.pdf" };
const FAO_ITU_DRONES = { name: "FAO da ITU: E-agriculture in Action: Drones for Agriculture (2018)", url: "https://www.itu.int/pub/D-STR-E_AGRICULT.02-2018" };
const FAO_WHO_AERIAL = { name: "FAO da WHO: Jagora kan feshin magungunan ƙwari daga sama (2024)", url: "https://www.who.int/publications/i/item/9789240076785" };
const KCAA_UAS = { name: "Hukumar Kula da Sufurin Jiragen Sama ta Kenya (KCAA): Jiragen sama marasa matuƙi", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const NCAA_P21 = { name: "Hukumar Kula da Sufurin Jiragen Sama ta Najeriya (NCAA): Nig.CARs 2023 Sashe na 21, Jiragen sama marasa matuƙi da ake tukawa daga nesa", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };

module.exports = {
  id: "agri-drones-precision-climate-ha",
  lang: "ha",
  translationOf: "agri-drones-precision-climate",
  category: "Agriculture (Africa)",
  name: "Jirage Marasa Matuƙi (Drones) don Sa Ido a Gona 4: Noma Daidai-wa-Daida, Yanayi da Sa Ido kan Dabbobi",
  skills: "Raba gona zuwa yankunan kulawa, Raba kayan noma bisa yanki, Duba yawan tsiro da ƙiyasin amfanin gona, Sa ido kan zaizayar ƙasa, ambaliya da fari, Sa ido kan dabbobi da wurin kiwo, Duba gine-ginen gona",
  outcome: "amfani da taswirorin drone don kula da gona mai haɗin amfanin gona da dabbobi bisa yanki-yanki, da rubuta shirin sa ido na tsawon damina da ya shafi amfanin gona, haɗarin yanayi, dabbobi da gine-ginen gona.",
  about: [
    "Wannan shi ne Kwas na 4 na jerin kwasa-kwasan sa ido da drone, don manoma, manajojin gona, ma'aikatan ƙungiyoyin haɗin gwiwa (cooperative) da na faɗakarwar noma (extension), da masu ba da hidimar drone a Kenya, Najeriya da faɗin Afirka. Ya kamata ku iya yin taswirar drone da karanta ta (Kwas na 2 da na 3).",
    "Babi na 1 game da noma daidai-wa-daida (precision agriculture) ne: kula da kowane sashe na gona bisa abin da yake buƙata, maimakon kula da gona gaba ɗaya iri ɗaya. Za ku raba gona zuwa yankuna, ku raba iri, taki da aiki inda ya dace, kuma ku yi amfani da ƙidayar tsiro don ƙiyasin amfanin gona. Babi na 2 yana duban gona gaba ɗaya: haɗarin yanayi da muhalli kamar zaizayar ƙasa, ambaliya da fari, dabbobi da wurin kiwo, da madatsun ruwa, kududdufai, shinge, magudanan ruwa da gidajen gilashi (greenhouse) da ke sa gona ta ci gaba da aiki.",
    "Misalai sun haɗa da masara da wake a Rift Valley, rogo da doya a kudu maso yammacin Najeriya, shayi a Kericho, da gonaki masu haɗin amfanin gona da dabbobi. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku rubuta shirin sa ido da drone na tsawon damina don gona mai haɗin amfanin gona da dabbobi (ta gaske ko misali, kamar hekta 10 mai masara, wake, garken kiwo, shanu 30, kududdufi da shingen iyaka): yankunan babbar gonar da abin da kowane yanki zai samu, waɗanne tashi za ku yi da yaushe (amfanin gona, haɗarin yanayi, dabbobi, gine-gine), abin da za ku nema kowane lokaci, da matakin da kowane abin da kuka gano zai iya kai wa.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manoma, manajojin gona, ma'aikatan ƙungiyoyin haɗin gwiwa da na faɗakarwar noma, da masu ba da hidimar drone a Kenya, Najeriya da faɗin Afirka da ke ɗaukar Kwas na 4 na jerin sa ido da drone, sau da yawa a gonaki masu haɗin amfanin gona da dabbobi.",
    startingPoint: "Masu koyo suna iya yin taswirar drone da karanta ta (Kwas na 2 da na 3). Yawancinsu har yanzu suna kula da gona gaba ɗaya iri ɗaya, suna duba dabbobi, wurin kiwo da gine-gine da ƙafa, kuma suna ɗaukar mataki kan zaizayar ƙasa, ambaliya da fari bayan ɓarna ta faru. Kaɗan ne ke tsara tashin drone na tsawon damina gaba ɗaya.",
    gap: "Gonakin da ba su daidaita ba suna ɓata kayan noma inda ba sa biya, kuma jinkirin gano zaizayar ƙasa, ƙarancin ruwan sama, yawan kiwo ko madatsar ruwa mai zubewa yana jawo asarar girbi da kuɗi. Shirin sa ido na tsawon damina mai yankuna yana bar gonaki su sa kayan noma da aiki inda suke biya, kuma su ɗauki mataki da wuri kan haɗarin yanayi, dabbobi da gine-gine.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi; ana bayanin kowace kalmar noma daidai-wa-daida",
      "Na'urori: taswirorin drone daga gona ta gaske ko misalai; waya mai GPS don alamta yankuna",
      "Dokoki: tashin drone yana buƙatar izinin ƙasar; feshi da drone kuma yana buƙatar izinin magungunan ƙwari",
      "Jin daɗin dabbobi da sirri: kada ku tsorata ko ku kori dabbobi; kada ku ɗauki bidiyon mutane ko gidaje ba tare da izini ba",
      "Yawan taki da alƙaluman amfanin gona suna fitowa daga ƙwarewar gida ko masu faɗakarwar noma, ba daga kwas ɗin ba"
    ],
    prerequisites: "\"Jirgi Mara Matuƙi don Sa Ido a Gona 3: Lafiyar Amfanin Gona, Kwari da Sarrafa Bayanai\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan an ba ku taswirorin drone na rana fiye da ɗaya da kuma ilimin manomi", action: "raba gona zuwa yankunan kulawa biyu zuwa huɗu da alamta su a ƙasa", standard: "kowane yanki da sunansa da dalilinsa a rubuce" },
    { id: "O2", condition: "Ga kowane yankin kulawa", action: "yanke abin da yankin zai samu: iri, taki, aiki ko gyara", standard: "matakin ya dace da dalilin yankin, kuma ba tare da shirya feshi da drone ba sai da izini" },
    { id: "O3", condition: "Idan an ba ku taswirar drone da ƙidayar samfuri", action: "lissafa yawan tsiro da ƙiyasin amfanin gona na kusan-kusa", standard: "an kwatanta yawan tsiron da tazarar shuka da ake so, kuma an ba da ƙiyasin a matsayin tsakanin lambobi biyu" },
    { id: "O4", condition: "A cikin damina gaba ɗaya", action: "tsara tashin drone don gano haɗarin zaizayar ƙasa, ambaliya da fari, da bin diddigin dabarun noma masu jure sauyin yanayi", standard: "a ƙayyadaddun ranaku don a iya kwatanta taswirori" },
    { id: "O5", condition: "Don tashi kan dabbobi ko wurin kiwo", action: "tsara tashi a hankali kuma lafiya don ƙidaya dabbobi da duba wurin kiwo da wuraren shan ruwa", standard: "da yardar makiyayi kuma ba tare da tsorata dabbobi ba" },
    { id: "O6", condition: "Ga madatsun ruwa, magudanan ruwa, shinge, gidajen gilashi da rumbunan gona", action: "duba su daga sama da rubuta jerin gyare-gyare", standard: "da abu, wuri, matsala, gaggawa da wanda zai gyara" }
  ],
  chapters: [
    {
      name: "Babi na 1: Noma daidai-wa-daida",
      lessons: [
        {
          objectives: ["O1"],
          title: "Yankunan kulawa: gona ɗaya, buƙatu daban-daban",
          minutes: 5,
          goal: "Raba gona zuwa yankunan kulawa biyu zuwa huɗu daga taswirar drone da ilimin gona.",
          text: [
            "Yawancin gonaki ba su daidaita ba. Zurfin ƙasa, gangare, tsofaffin gidajen gara, takin dabbobi na baya, ruwa mai kwanciya da inuwa suna sa wasu sassa su yi girma fiye da wasu. Noma daidai-wa-daida yana nufin kula da kowane sashe bisa buƙatunsa.",
            "Yankin kulawa wani sashe ne na gona da ke yin abu iri ɗaya kowace damina. Don zana yankuna, ku haɗa taswirorin drone da dama (NDVI ko launi, daga rana ko damina fiye da ɗaya) da abin da manomi ya sani: inda ruwa ke kwanciya, inda ƙasa ba ta da zurfi, inda amfanin gona ke yin kyau koyaushe.",
            "Ku sauƙaƙa abin. Yankuna biyu zuwa huɗu sun isa ga yawancin ƙananan gonaki da matsakaita: misali yanki mai ƙarfi, yanki matsakaici, da yanki mai rauni da danshi. Ku ba su suna ku alamta su da turaku ko wuraren GPS don ma'aikata su same su."
          ],
          steps: ["Ku tara taswirorin gonar na rana biyu ko fiye idan zai yiwu.", "Ku tambayi manomi inda amfanin gona ke da ƙarfi ko rauni koyaushe, da dalili.", "Ku zana yankuna biyu zuwa huɗu da suka dace da taswirori da ilimin manomi.", "Ku ba kowane yanki suna ku alamta shi a ƙasa da turaku ko wuraren GPS."],
          words: [["Noma daidai-wa-daida (precision agriculture)", "kula da kowane sashe na gona bisa abin da yake buƙata."], ["Yankin kulawa (management zone)", "wani sashe na gona da ke yin abu iri ɗaya kowace damina, ana kula da shi a matsayin abu ɗaya."]],
          slides: [
            { title: "Gonaki ba su daidaita ba", bullets: ["Ƙasa, gangare, ruwa, inuwa, tsohon taki", "Wasu sassa koyaushe suna yin girma fiye da wasu"] },
            { title: "Zana yankuna", bullets: ["Taswirori daga rana fiye da ɗaya", "Tare da ilimin manomi", "Wuraren da ke yin abu iri ɗaya kowace damina"] },
            { title: "Ku sauƙaƙa abin", bullets: ["Yankuna biyu zuwa huɗu", "Mai ƙarfi, matsakaici, mai rauni ko mai danshi", "Ku alamta su a ƙasa"] }
          ],
          tryIt: "Ku zana gonar da kuka sani (ko ku yi amfani da taswirar misali). Ku zana yankuna biyu zuwa huɗu, ku ba su suna, ku rubuta dalilin da yasa kowane yanki ya bambanta.",
          youCanNow: "raba gona zuwa yankunan kulawa masu sauƙi ta amfani da taswirori da ilimin manomi.",
          quickCheck: [
            { objective: "O1", q: "Wane rukunin yankunan kulawa ne ya dace da ƙaramar gona?", options: ["Yanki mai ƙarfi, yanki matsakaici, da yanki mai rauni da danshi", "Yanki ɗaya ga kowace shuka", "Yankuna ashirin masu girma iri ɗaya", "Babu yanki ko ɗaya"], answer: 0, why: "Yankuna biyu zuwa huɗu masu sauƙi sun isa ga yawancin ƙananan gonaki da matsakaita." },
            { objective: "O1", q: "Manomi ya ce wata kusurwa koyaushe ba ta yin kyau, amma taswira ɗaya ta wannan damina tana nuna ta kore. Me za ku yi?", options: ["Ku ƙyale manomi", "Ku zana yankuna daga wannan taswira ɗaya kawai", "Ku duba taswirorin wasu ranaku da damina, ku yi amfani da ilimin manomi", "Ku daina batun yankuna"], answer: 2, why: "Ana zana yankuna daga taswirori da ranaku da dama tare da abin da manomi ya sani." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Raba kayan noma bisa yanki",
          minutes: 6,
          goal: "Yanke abin da kowane yanki zai samu: iri, taki, aiki ko gyara.",
          text: [
            "Da zarar kuna da yankuna, ku tambayi abin da kowanne yake buƙata. Yanki mai rauni a ƙasa marar zurfi ƙila ba zai biya ƙarin taki ba; yanki mai kwanciyar ruwa ƙila yana buƙatar magudanar ruwa, ba taki ba; yanki matsakaici ƙila ya fi ba da riba kan ƙarin kayan noma. Wannan shi ne kulawa da yawa mai bambanta (variable-rate): yawa daban-daban a wurare daban-daban.",
            "A manyan gonaki, injuna suna iya sa yawa daban-daban daga taswirar umarni (prescription map). A ƙananan gonaki, wannan tunani yana aiki da hannu: ma'aikata suna sa ƙari ko ragin taki ko takin dabbobi a kowane ramin shuka bisa yanki, suna sake shuka giɓi kawai inda drone ya nuna su, kuma suna fara yin noman ciyawa ko dubawa a yankunan da ke da matsala.",
            "Wasu drones suna iya fesa ko watsawa. Fesa magungunan ƙwari da drone yana buƙatar izini na musamman daga hukumar sufurin jiragen sama da hukumar kula da magungunan ƙwari ta ƙasarku, masu tuƙa da aka horar kuma suke da lasisi, da dabarun tsaro kamar waɗanda ke cikin jagorar FAO da WHO (Hukumar Lafiya ta Duniya) kan feshi daga sama. Kada ku taɓa fesa, ko ku ba da shawarar fesawa, ba tare da su ba."
          ],
          steps: ["Ga kowane yanki, ku rubuta dalilin da yasa yake da rauni ko ƙarfi.", "Ku zaɓi matakin da zai gyara dalilin: magudanar ruwa, sake shuka, ƙari ko ragin taki, noman ciyawa.", "Ku rubuta yawa ko aikin kowane yanki don ma'aikata su bi.", "Feshi da drone: sai da izinin sufurin jiragen sama da na magungunan ƙwari da ake buƙata."],
          words: [["Yawa mai bambanta (variable-rate)", "sa yawan iri, taki ko ruwa daban-daban a sassa daban-daban na gona."], ["Taswirar umarni (prescription map)", "taswirar da ke faɗa wa mutum ko inji yawan abin da zai sa a kowane yanki."]],
          slides: [
            { title: "Ku gyara dalilin", bullets: ["Ƙasa marar zurfi: ƙarin taki ƙila ba zai biya ba", "Kwanciyar ruwa: magudanar ruwa, ba taki ba", "Yanki matsakaici: sau da yawa shi ya fi riba"] },
            { title: "Yawa mai bambanta da hannu", bullets: ["Ƙari ko ragi a kowane ramin shuka bisa yanki", "Sake shuka giɓi inda ake buƙata kawai", "Fara noman ciyawa da dubawa a yankuna masu matsala"] },
            { title: "Drones masu feshi", bullets: ["Suna buƙatar izinin sufurin jiragen sama DA na magungunan ƙwari", "Masu tuƙa da aka horar kuma suke da lasisi", "Ku bi jagorar FAO/WHO kan feshi daga sama"] }
          ],
          sources: [FAO_WHO_AERIAL, KCAA_UAS, NCAA_P21],
          tryIt: "Ta amfani da yankunanku daga Darasi na 1, ku rubuta umarni na layi ɗaya ga kowane yanki da ma'aikacin gona zai iya bi (misali: Yanki C, kusurwa mai danshi: a haƙa magudanar ruwa kafin a sa takin ɗorawa; babu ƙarin taki).",
          youCanNow: "yanke da rubuta abin da kowane yankin kulawa zai samu, da sanin lokacin da feshi ke buƙatar izini na musamman.",
          quickCheck: [
            { objective: "O2", q: "A babbar gona, me ake amfani da taswirar umarni (prescription map) don yi?", options: ["Ƙidaya shanu", "Duba shinge", "Rubuta kasafin kuɗin gona", "Faɗa wa injuna yawan da za su sa a kowane wuri"], answer: 3, why: "A manyan gonaki, injuna suna iya sa yawa daban-daban daga taswirar umarni." },
            { objective: "O2", q: "Drone ya nuna giɓi a yanki matsakaici kawai. Me za ku faɗa wa ma'aikata?", options: ["Su sake shuka gona gaba ɗaya", "Su sake shuka giɓi kawai inda drone ya nuna su", "Su sa taki a giɓin", "Su bar giɓin"], answer: 1, why: "A ƙananan gonaki, ma'aikata suna sake shuka kawai inda drone ya nuna giɓi." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ƙidayar tsiro da ƙiyasin amfanin gona da wuri",
          minutes: 5,
          goal: "Ƙiyasta yawan tsiro da ƙiyasin amfanin gona na kusan-kusa daga taswirar drone da ƙidayar samfuri.",
          text: [
            "Yawan tsiro (plant stand) shi ne yawan shuke-shuken da suka fito idan aka kwatanta da yawan da aka shuka. Taswirar drone mai cikakken bayani tana nuna giɓi a sarari. Wasu manhajoji suna iya ƙidaya shuke-shuke da kansu; kuna kuma iya ƙidaya da hannu a murabba'ai na samfuri a kan taswirar.",
            "Don ƙiyasta yawan tsiro: ku alamta wurare kaɗan na samfuri masu sanannen girma a kowane yanki, ku ƙidaya shuke-shuke, ku kwatanta da tazarar shuka da ake so. Idan an shuka masara a 75 cm da 25 cm, abin da ake so kusan shuke-shuke 53,000 ne a kowace hekta; idan kun ƙidaya 40,000, yawan tsiron kusan kashi 75 ne.",
            "Ƙiyasin amfanin gona na kusan-kusa yana ninka shuke-shuke a kowace hekta da amfanin da ake sa ran kowace shuka za ta bayar daga ƙwarewar gida ko alƙaluman masu faɗakarwar noma, yanki bayan yanki. Ku ɗauke shi a matsayin tsakanin lambobi biyu, ba alkawari ba: yanayi, ƙwari da asarar girbi suna canja lambar ƙarshe. Duk da haka yana taimakawa wajen shirya ajiya, sayarwa da sufuri da wuri."
          ],
          steps: ["Ku alamta murabba'ai na samfuri masu sanannen girma a kowane yanki a kan taswirar.", "Ku ƙidaya shuke-shuke a kowane murabba'i (da ido ko da manhaja).", "Ku lissafa shuke-shuke a kowace hekta ku kwatanta da abin da ake so.", "Ku ninka da amfanin da ake sa ran kowace shuka daga alƙaluman gida don samun tsakanin lambobi biyu.", "Ku rubuta tsakanin lambobin da abin da zai iya canja shi."],
          words: [["Yawan tsiro (plant stand)", "yawan shuke-shuken da suka fito idan aka kwatanta da yawan da aka shuka."], ["Ƙiyasin amfanin gona (yield estimate)", "hasashe na farko na yawan abin da gonar za ta bayar."]],
          slides: [
            { title: "Yawan tsiro", bullets: ["Shuke-shuken da suka fito da waɗanda aka shuka", "Giɓi suna bayyana a sarari a taswirori masu cikakken bayani"] },
            { title: "Ƙidaya ta samfuri", bullets: ["Murabba'ai na samfuri a kowane yanki", "Ku ƙidaya shuke-shuke, ku mayar da shi zuwa hekta", "Masara a 75 cm x 25 cm: kusan shuke-shuke 53,000 a kowace ha"] },
            { title: "Ƙiyasin amfanin gona da wuri", bullets: ["Shuke-shuke a kowace ha x amfanin da ake sa ran kowace shuka", "Ku ba da tsakanin lambobi biyu, ba alkawari ba", "Yana taimakawa shirya ajiya, sayarwa da sufuri"] }
          ],
          tryIt: "An shuka yankin masara mai hekta 1 a 75 cm da 25 cm. Ƙidayar samfurinku tana nuna shuke-shuke 44,000 a kowace hekta. Ku lissafa kashi nawa ne yawan tsiron, sannan ku rubuta abin da zai iya bayyana giɓin da abin da za ku duba.",
          youCanNow: "ƙiyasta yawan tsiro da ƙiyasin amfanin gona na kusan-kusa bisa yanki daga taswirar drone da ƙidayar samfuri.",
          quickCheck: [
            { objective: "O3", q: "Me yasa ake ƙidaya shuke-shuke a wuraren samfuri masu sanannen girma?", options: ["Don gano iyakar gona", "Don lissafa shuke-shuke a kowace hekta da kwatanta su da abin da ake so", "Don auna ruwan sama", "Don duba batirin drone"], answer: 1, why: "Ƙidaya a wurare masu sanannen girma tana ba da shuke-shuke a kowace hekta, wanda ake kwatantawa da tazarar shuka da ake so." },
            { objective: "O3", q: "Wani mai saye ya nemi ainihin girbinku wata ɗaya kafin girbi. Me za ku ba shi?", options: ["Lamba ɗaya ainihi a matsayin alkawari", "Babu komai", "Lambar bara", "Tsakanin lambobi biyu na kusan-kusa, da bayanin cewa yanayi, ƙwari da asara za su iya canja shi"], answer: 3, why: "Ƙiyasin amfanin gona da wuri tsakanin lambobi biyu ne, ba alkawari ba." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Noma daidai-wa-daida",
        questions: [
          { objective: "O1", q: "Mene ne yankin kulawa?", options: ["Kowane murabba'i kawai ba tare da dalili ba", "Wani sashe na gona da ke yin abu iri ɗaya kowace damina", "Ofishin gona", "Wurin da aka hana tashin drone"], answer: 1, why: "Yankuna suna haɗa wuraren da ke amsawa iri ɗaya, don a kula da su iri ɗaya." },
          { objective: "O1", q: "Wace ce hanya mafi kyau ta zana yankuna?", options: ["Amfani da taswira ɗaya ta rana ɗaya kawai", "Kwafar yankunan maƙwabci", "Haɗa taswirori daga rana fiye da ɗaya da ilimin manomi", "Zana murabba'ai daidai-daida"], answer: 2, why: "Taswirori da dama tare da ilimin gida suna nuna yanayi da ba ya canjawa." },
          { objective: "O2", q: "Wani yanki yana da rauni domin ruwa yana kwanciya a can bayan ruwan sama. Mataki mafi kyau shi ne:", options: ["Inganta magudanar ruwa", "Ƙara taki ninki biyu", "Fesa maganin ƙwari", "Shuka ƙarin iri"], answer: 0, why: "Ku gyara dalilin; taki ba ya gyara kwanciyar ruwa." },
          { objective: "O2", q: "Wani mai hidimar drone ya yi tayin fesa maganin ƙwari a masarar wani abokin hulɗa. Me dole ya kasance a shirye?", options: ["Izinin manomi kawai", "Babu wani ƙari", "Kyamara mai kyau", "Izinin sufurin jiragen sama da na magungunan ƙwari, da masu tuƙa masu lasisi"], answer: 3, why: "Feshi da drone aiki ne da doka ke kula da shi, mai haɗari sosai." },
          { objective: "O3", q: "Masarar da aka shuka a 75 cm x 25 cm tana da abin da ake so na kusan:", options: ["Shuke-shuke 5,300 a kowace hekta", "Shuke-shuke 53,000 a kowace hekta", "Shuke-shuke 530,000 a kowace hekta", "Shuke-shuke 530 a kowace hekta"], answer: 1, why: "10,000 m2 raba da 0.1875 m2 ga kowace shuka kusan 53,000 ne." }
        ]
      }
    },
    {
      name: "Babi na 2: Yanayi, dabbobi da gine-gine",
      lessons: [
        {
          objectives: ["O4"],
          title: "Sa ido kan haɗarin yanayi da muhalli",
          minutes: 6,
          goal: "Yi amfani da tashin drone don gano haɗarin zaizayar ƙasa, ambaliya da fari, da bin diddigin dabarun noma masu jure sauyin yanayi.",
          text: [
            "Sauyin yanayi yana kawo ruwan sama mai ƙarfi, tsawon lokacin rashin ruwa da ƙarin zafi ga wurare da yawa na noma. FAO (Hukumar Abinci da Noma ta Majalisar Ɗinkin Duniya) tana bayyana noma mai jure sauyin yanayi (climate-smart agriculture) a matsayin noman da ke ƙara yawan amfanin gona da samun kuɗi, yana taimaka wa gonaki su daidaita kuma su ƙara juriya, kuma yana rage ko cire hayaƙin iskar gas mai ɗumama duniya (greenhouse gas) inda zai yiwu.",
            "Drones suna taimakawa a ɓangaren daidaitawa. Bayan ruwan sama mai ƙarfi, tashi ɗaya yana nuna kwazazzabai, filayen tudu da ruwa ya lalata, magudanan ruwa da laka ta toshe, da gonakin da ruwa ya mamaye; taswirorin tsawon ƙasa (elevation model) suna nuna inda ruwa zai gudana a gaba. A lokacin rashin ruwa, taswirorin zafi (thermal) da NDVI suna nuna wuraren da ke fara bushewa. A cikin damina da yawa, taswirori suna nuna ko filayen tudu, amfanin gona na rufe ƙasa, ciyawar rufe ƙasa (mulch), dashen bishiyoyi da tara ruwan sama suna aiki.",
            "Ku tashi a kan wuri ɗaya a ƙayyadaddun ranaku (misali kafin dogon damina, bayan babbar guguwa ta farko, tsakiyar damina, da bayan girbi) ku kwatanta. Ku raba taswirorin da ƙungiyar manoma ko jami'an gundumar (county) ko na jiha: suna nuna wa al'umma gaba ɗaya inda za a fara ɗaukar mataki."
          ],
          steps: ["Ku zaɓi ƙayyadaddun ranakun tashi da suka danganci lokutan shekara.", "Bayan ruwan sama mai ƙarfi: ku yi taswirar kwazazzabai, wuraren da ruwa ya lalata, magudanan da laka ta toshe, gonakin da ruwa ya mamaye.", "A lokacin rashin ruwa: ku yi taswirar wuraren da ke fara bushewa da NDVI ko thermal.", "Kowace damina: ku duba filayen tudu, amfanin gona na rufe ƙasa, ciyawar rufe ƙasa, bishiyoyi, tara ruwan sama.", "Ku kwatanta taswirori a tsawon lokaci ku raba su."],
          words: [["Noma mai jure sauyin yanayi (CSA)", "noman da ke ƙara yawan amfanin gona, yana taimaka wa gonaki su daidaita da sauyin yanayi, kuma yana rage hayaƙin iskar gas inda zai yiwu."], ["Zaizayar ƙasa (erosion)", "ƙasar da ruwa ko iska suka kwashe."], ["Kwazazzabo (gully)", "zurfin rami mai tsawo da ruwa mai gudana ya tona a ƙasa."]],
          slides: [
            { title: "Noma mai jure sauyin yanayi", bullets: ["Ƙara yawan amfanin gona da samun kuɗi", "Daidaitawa da ƙara juriya", "Rage hayaƙin iskar gas inda zai yiwu"] },
            { title: "Abin da drones ke nunawa", bullets: ["Bayan ruwan sama: kwazazzabai, lalacewa, gonakin da ruwa ya mamaye", "Lokacin rashin ruwa: wuraren da ke fara bushewa", "Ko filayen tudu, ciyawar rufe ƙasa, bishiyoyi suna aiki"] },
            { title: "Ku tashi a ƙayyadaddun ranaku", bullets: ["Kafin damina, bayan guguwa, tsakiyar damina, bayan girbi", "Ku kwatanta a tsawon lokaci", "Ku raba da ƙungiyoyin manoma da jami'ai"] }
          ],
          sources: [FAO_CSA, FAO_ITU_DRONES],
          tryIt: "Ku rubuta kalandar shekara ta tashin drone huɗu na yanayi don gonar da kuka sani, da suka danganci lokacin damina da na rani. Ga kowane tashi, ku jera abubuwa biyu da za ku nema.",
          youCanNow: "tsara tashin drone da ke bin diddigin haɗarin zaizayar ƙasa, ambaliya da fari, da duba ko dabarun noma masu jure sauyin yanayi suna aiki.",
          quickCheck: [
            { objective: "O4", q: "Bayan ruwan sama mai ƙarfi, me taswirar tsawon ƙasa (elevation model) ke taimakawa a gani?", options: ["Waɗanne shanu ne ba su da lafiya", "Farashin masara", "Inda ruwa zai gudana a gaba", "Wane iri ne aka tabbatar da ingancinsa"], answer: 2, why: "Taswirorin tsawon ƙasa suna nuna tsayin ƙasa, don ku ga inda ruwa zai gudana a gaba." },
            { objective: "O4", q: "Bayan babbar guguwa, taswirorinku suna nuna kwazazzabai a gonaki da yawa na ƙungiyar. Me za ku yi?", options: ["Ku raba taswirorin da ƙungiyar manoma da jami'an gunduma ko na jiha", "Ku riƙe taswirorin a wurinku", "Ku goge su domin guguwar ta wuce", "Ku tashi a kan gonarku kaɗai a gaba"], answer: 0, why: "Taswirorin da aka raba suna nuna wa al'umma gaba ɗaya inda za a fara ɗaukar mataki." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Sa ido kan dabbobi da wurin kiwo",
          minutes: 5,
          goal: "Tsara tashin drone a hankali kuma lafiya don ƙidaya dabbobi da duba wurin kiwo da wuraren shan ruwa.",
          text: [
            "A manyan gonakin kiwo da faɗaɗɗun wuraren makiyaya, drone yana iya ƙidaya shanu, awaki ko raƙuma, ya nemo dabbobin da suka ɓata ko ba su da lafiya, kuma ya duba cewa wuraren shan ruwa da kwanukan ruwa suna aiki, yana ceton sa'o'i na tafiya da ƙafa ko da mota. Kyamarorin zafi (thermal) suna gano dabbobi da asuba ko a cikin daji mai yawa.",
            "Drones suna iya tsorata dabbobi, musamman idan suna ƙasa-ƙasa. Ku tashi a tsayin da ba zai tsorata su ba, ku kusanto a hankali daga gefe, kada ku taɓa korar dabbobi ko tara su da drone sai dai idan an horar da ku kuma an yarda, kuma ku tsaya idan sun fara gudu. Ku tambayi makiyayi kafin ku tashi.",
            "Taswirorin wurin kiwo (NDVI ko launi) suna nuna inda ciyawa ke da ƙarfi, inda aka yi kiwo fiye da kima, ko inda ƙasa ta zama fili. A cikin damina, suna taimakawa wajen tsara kiwo na zagaye da gano ƙasar da ke buƙatar hutu. Kada ku taɓa ɗaukar bidiyon mutane ko gidaje ba tare da izini ba."
          ],
          steps: ["Ku tambayi makiyayi ko mai dabbobi; ku yarda kan lokaci da wuri.", "Ku tashi sama ku kusanto a hankali daga gefe.", "Ku ƙidaya dabbobi daga hotuna, ba ta hanyar zagaye a ƙasa-ƙasa ba.", "Ku duba wuraren shan ruwa, kwanukan ruwa da shinge a hanya.", "Ku yi taswirar wurin kiwo: mai ƙarfi, kiwo fiye da kima, fili.", "Ku tsaya idan dabbobi sun fara gudu."],
          words: [["Kiwo na zagaye (rotational grazing)", "matsar da dabbobi tsakanin garkunan kiwo don ciyawa ta huta ta sake girma."], ["Kiwo fiye da kima (overgrazing)", "idan dabbobi suna cin ciyawa da sauri fiye da yadda take sake girma, har ƙasa ta zama fili."]],
          slides: [
            { title: "Abin da drones ke yi a gonar kiwo", bullets: ["Ƙidaya dabbobi, nemo waɗanda suka ɓata ko ba su da lafiya", "Duba wuraren shan ruwa da kwanukan ruwa", "Thermal da asuba ko a cikin daji mai yawa"] },
            { title: "Jin daɗin dabbobi da farko", bullets: ["Ku tambayi makiyayi", "Ku tashi sama, ku kusanto a hankali daga gefe", "Kada ku kori; ku tsaya idan dabbobi suna gudu"] },
            { title: "Taswirorin wurin kiwo", bullets: ["Ciyawa mai ƙarfi, kiwo fiye da kima ko fili", "Tsara kiwo na zagaye", "Gano ƙasar da ke buƙatar hutu"] }
          ],
          tryIt: "Ku rubuta gajeren shirin tashi don ƙidaya shanu 60 a garken kiwo mai hekta 40: lokacin rana, tsayi, yadda za ku kusanto, me kuma za ku duba, da yaushe za ku tsaya.",
          youCanNow: "tsara tashin drone a hankali kuma lafiya kan dabbobi da wurin kiwo, da amfani da shi don taimakawa shawarwarin kiwo.",
          quickCheck: [
            { objective: "O5", q: "Me drone zai iya yi a gonar kiwo?", options: ["Ƙidaya dabbobi da duba cewa wuraren shan ruwa da kwanukan ruwa suna aiki", "Kora shanu cikin garke (boma)", "Yi wa dabbobi marasa lafiya magani", "Tatsar shanu"], answer: 0, why: "Drones suna iya ƙidaya dabbobi, nemo waɗanda suka ɓata ko ba su da lafiya, da duba wuraren shan ruwa, suna ceton tafiya da ƙafa ko da mota." },
            { objective: "O5", q: "Wani makiyayi yana tafiya da awaki kusa da inda kuka shirya tashi. Me za ku yi?", options: ["Ku tashi ƙasa-ƙasa don ɗaukar hotuna na kusa", "Ku kori awakin zuwa wuri ɗaya", "Ku fara tambayar makiyayi, ku tashi sama ku kusanto a hankali daga gefe", "Ku wuce kai tsaye a kansu da sauri"], answer: 2, why: "Ku tambayi makiyayi, ku tashi sama kuma a hankali daga gefe don kada dabbobi su tsorata." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Duba gine-ginen gona",
          minutes: 5,
          goal: "Duba madatsun ruwa, magudanan ruwa, shinge, gidajen gilashi da rumbuna daga sama, da jera gyare-gyare.",
          text: [
            "Gine-ginen gona suna da tsada kuma ana saurin mantawa da su har sai sun lalace. Gajeren tashin drone yana iya duba kududdufi ko bangon ƙaramar madatsar ruwa don tsagewa da zubewar ruwa a hankali, magudanan ban ruwa da bututu don zubewa ko toshewa, shingen iyaka don karyewa, rufin gidajen gilashi da ragarsu don yagewa, da rufin rumbuna don lalacewa.",
            "Ku tashi a hankali tare da ginin, kyamarar a karkace, ba wai tana kallon ƙasa kai tsaye kawai ba. Ku nisanci wayoyin wutar lantarki da gine-gine, kuma ku tsaya cikin izinin da kuke da shi. Ku ɗauki hotuna a wurare iri ɗaya kowane lokaci don ku iya kwatantawa.",
            "Ku mayar da hotunan jerin gyare-gyare: abu, wuri, matsala, gaggawa, da wanda zai gyara. Ku sake tashi bayan gyara, da kuma kafin damina lokacin da lalacewa za ta fi cutarwa."
          ],
          steps: ["Ku jera gine-ginen da za a duba da wuraren da suke.", "Ku tashi a hankali tare da kowanne, kyamarar a karkace.", "Ku ɗauki hoton wurare iri ɗaya kowane lokaci.", "Ku rubuta jerin gyare-gyare: abu, wuri, matsala, gaggawa, wanda zai gyara.", "Ku sake tashi bayan gyara da kafin damina."],
          words: [["Kududdufi (water pan)", "tafkin da aka haƙa don tara ruwan sama don dabbobi ko ban ruwa."], ["Zubewar ruwa a hankali (seepage)", "ruwan da ke zubewa a hankali ta bangon madatsa ko gefen magudanar ruwa."]],
          slides: [
            { title: "Abin da za a duba", bullets: ["Kududdufai da bangon ƙananan madatsun ruwa", "Magudanan ruwa da bututu", "Shinge, rufin gidajen gilashi, rufin rumbuna"] },
            { title: "Yadda za a tashi", bullets: ["A hankali tare da ginin", "Kyamara a karkace, ba kallon ƙasa kai tsaye kawai ba", "Wuraren hoto iri ɗaya kowane lokaci"] },
            { title: "Ku mayar da hotuna gyare-gyare", bullets: ["Abu, wuri, matsala, gaggawa, wanda zai gyara", "Ku sake tashi bayan gyara da kafin damina"] }
          ],
          tryIt: "Aikin ƙarshe: ku rubuta shirinku na sa ido na tsawon damina don gona mai haɗin amfanin gona da dabbobi: yankuna da abin da kowanne zai samu, tashi kan amfanin gona, tashi kan yanayi, tashi kan dabbobi da wurin kiwo, tashi kan gine-gine, abin da za ku nema kowane lokaci, da matakin da kowane abin da kuka gano zai iya kai wa.",
          youCanNow: "duba gine-ginen gona da drone da tsara sa ido kan gona gaba ɗaya a tsawon damina.",
          quickCheck: [
            { objective: "O6", q: "Wace matsala ce tashin drone zai iya gano wa a gidan gilashi (greenhouse)?", options: ["Farashin sayar da amfanin gona", "pH na ƙasa", "Sunan wani ƙwaro", "Yagewar robar rufi ko raga"], answer: 3, why: "Tashi yana iya nuna yagewa a rufin gidajen gilashi da raga kafin su ƙara muni." },
            { objective: "O6", q: "Damina za ta fara nan da mako uku, kuma an gyara bangon kududdufi a makon da ya gabata. Me za ku yi?", options: ["Ku jira har bayan damina", "Ku sake tashi don duba gyaran kafin damina", "Kada ku sake duba shi har abada", "Ku tashi kallon ƙasa kai tsaye kawai, can sama da shi"], answer: 1, why: "Ku sake tashi bayan gyara da kafin damina, lokacin da lalacewa za ta fi cutarwa." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Yanayi, dabbobi da gine-gine",
        questions: [
          { objective: "O4", q: "Noma mai jure sauyin yanayi na FAO yana da manufofi uku. Wace ce ɗaya daga cikinsu?", options: ["Taimaka wa gonaki su daidaita su ƙara juriya", "Amfani da taki mai yawa yadda zai yiwu", "Sare dukkan bishiyoyi", "Noman amfanin gona iri ɗaya kawai"], answer: 0, why: "CSA tana nufin yawan amfanin gona, daidaitawa da juriya, da rage hayaƙin iskar gas." },
          { objective: "O4", q: "Yaushe ne lokaci mai kyau na tashi kan yanayi don gano kwazazzabai da wuraren da ruwa ya lalata?", options: ["Tsakar dare kawai", "Ba a taɓa ba", "Bayan babbar guguwa ta farko ta damina", "Lokacin baje kolin drones"], answer: 2, why: "Sabuwar ɓarna tana bayyana a sarari nan da nan bayan ruwan sama mai ƙarfi." },
          { objective: "O5", q: "Shanu sun fara gudu yayin da drone yake sama da su. Ya kamata ku:", options: ["Sauko ƙasa don kwantar musu da hankali", "Kore su su dawo", "Ci gaba da zagaye", "Tsaya ku matsar da drone nesa"], answer: 3, why: "Jin daɗin dabbobi da tsaro su ne farko." },
          { objective: "O5", q: "Taswirar wurin kiwo tana nuna garke mai fili mai yawa. Wannan yana nuna:", options: ["Kiwo fiye da kima; ƙila garken yana buƙatar hutu", "Drone ya lalace", "Ruwan sama mai yawa kawai", "Wurin kiwo cikakke"], answer: 0, why: "Fili a wurin kiwo sau da yawa yana nufin dabbobi sun ci ciyawa da sauri fiye da yadda ta sake girma." },
          { objective: "O6", q: "Lokacin duba bangon kududdufi, ya kamata ku:", options: ["Tashi kallon ƙasa kai tsaye kawai, da sauri sosai", "Tashi a hankali tare da shi, kyamarar a karkace", "Tashi a kan mutanen da ke kusa", "Tsallake shi"], answer: 1, why: "Kyamara a karkace tana nuna tsagewa da zubewar ruwa a bangon." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Jirage Marasa Matuƙi (Drones) don Sa Ido a Gona 4: Noma Daidai-wa-Daida, Yanayi da Sa Ido kan Dabbobi",
    questions: [
      { objective: "O1", q: "Noma daidai-wa-daida yana nufin:", options: ["Kula da kowane sashe na gona iri ɗaya", "Kula da kowane sashe na gona bisa buƙatunsa", "Amfani da drones kawai", "Noma da dare"], answer: 1, why: "Yana daidaita kayan noma da aiki da abin da kowane wuri yake buƙata." },
      { objective: "O1", q: "Me yasa yawancin gonaki ba su daidaita ba?", options: ["Drones ne ke sa su haka", "Ai sun daidaita", "Ƙasa, gangare, ruwa, inuwa da amfanin baya sun bambanta", "Iri koyaushe ba su da kyau"], answer: 2, why: "Yanayin halitta da tarihin noma suna sa wasu wurare su yi girma fiye da wasu." },
      { objective: "O1", q: "Yankuna nawa ne yawanci suka isa a ƙaramar gona?", options: ["Biyu zuwa huɗu", "Hamsin", "Ɗari", "Babu ko ɗaya"], answer: 0, why: "'Yan yankuna masu sauƙi suna da sauƙin kulawa da alamtawa." },
      { objective: "O1", q: "Me yasa ake alamta yankuna a ƙasa?", options: ["Don ƙawata gona", "Doka tana buƙatar turaku", "Don tsorata tsuntsaye", "Don ma'aikata su sami kowane yanki su kula da shi"], answer: 3, why: "Ma'aikata suna buƙatar ganin inda kowane yanki ya fara da inda ya ƙare." },
      { objective: "O2", q: "Yawa mai bambanta (variable-rate) yana nufin:", options: ["Yawa daban-daban a wurare daban-daban", "Yawa iri ɗaya ko'ina", "Canja saurin drone", "Canja farashin amfanin gona"], answer: 0, why: "Yawa yana canjawa bisa yanki gwargwadon buƙata." },
      { objective: "O2", q: "A ƙaramar gona, ana iya yin yawa mai bambanta ta hanyar:", options: ["Manyan injuna kawai", "Ma'aikata suna sa ƙari ko ragin taki a kowane rami bisa yanki", "Tauraron ɗan adam (satellite)", "Ba za a iya ba ko kaɗan"], answer: 1, why: "Wannan tunani yana aiki da hannu idan akwai umarni na yanki a sarari." },
      { objective: "O2", q: "Yanki mai rauni a ƙasa marar zurfi mai duwatsu ƙila:", options: ["Koyaushe yana buƙatar taki ninki biyu", "Shi ne wuri mafi kyau don ƙarin iri", "Ba zai biya ƙarin taki ba", "Yana buƙatar feshi"], answer: 2, why: "Ƙasar tana iyakance girma; ƙarin kayan noma ƙila ya ɓata." },
      { objective: "O2", q: "Wa dole ne ya ba da izinin fesa maganin ƙwari da drone?", options: ["Mai sayar da drone kawai", "Manomi kawai", "Maƙwabci kawai", "Hukumar sufurin jiragen sama da hukumar kula da magungunan ƙwari"], answer: 3, why: "Dokokin sufurin jiragen sama da na magungunan ƙwari duka suna shafar drones masu feshi." },
      { objective: "O3", q: "Yawan tsiro shi ne:", options: ["Shuke-shuken da suka fito idan aka kwatanta da waɗanda aka shuka", "Tsayin drone", "Allon sunan gona", "Farashin iri"], answer: 0, why: "Yana nuna yadda amfanin gona ya kafu." },
      { objective: "O3", q: "Kun ƙidaya shuke-shuken masara 40,000 a kowace hekta, abin da ake so kuwa kusan 53,000. Yawan tsiron kusan:", options: ["Kashi 25", "Kashi 50", "Kashi 75", "Kashi 100"], answer: 2, why: "40,000 raba da 53,000 kusan 0.75 ne." },
      { objective: "O3", q: "Ya kamata a ba da ƙiyasin amfanin gona da wuri a matsayin:", options: ["Alkawari ainihi", "Sirri", "Tsakanin lambobi biyu da zai iya canjawa", "Adadin bashi"], answer: 2, why: "Yanayi, ƙwari da asara suna canja amfanin gona na ƙarshe." },
      { objective: "O4", q: "Wace dabarar noma mai jure sauyin yanayi ce drones za su iya taimakawa wajen bin diddiginta?", options: ["Ƙona ragowar amfanin gona", "Huɗa sama da ƙasa a gangare", "Sare dukkan bishiyoyi", "Filayen tudu, ciyawar rufe ƙasa da dashen bishiyoyi"], answer: 3, why: "Taswirori suna nuna ko waɗannan dabaru suna aiki a tsawon lokaci." },
      { objective: "O4", q: "A lokacin rashin ruwa, waɗanne taswirori ne ke nuna wuraren da ke fara bushewa?", options: ["Taswirorin NDVI ko thermal", "Taswirar hanyoyi", "Jerin farashi", "Fosta ta ruwan sama"], answer: 0, why: "NDVI da thermal suna nuna ƙarfin shuka da wahalar zafi." },
      { objective: "O4", q: "Me yasa ake tashi a kan wuri ɗaya a ƙayyadaddun ranaku?", options: ["Don amfani da ƙarin batir", "Don kwatanta canje-canje a tsawon lokaci", "Domin drones suna buƙatar al'ada", "Don ɗaukar bidiyon maƙwabta"], answer: 1, why: "Taswirori da aka maimaita suna nuna yanayin canji da tasirin matakan da aka ɗauka." },
      { objective: "O5", q: "Kafin tashi kan dabbobi ya kamata ku:", options: ["Tashi ƙasa-ƙasa a kan garken", "Kori dabbobi zuwa wuri ɗaya", "Tambayi makiyayi ku yarda kan lokaci da wuri", "Tashi a iyakar gudu"], answer: 2, why: "Izini da kusantowa a hankali suna kare dabbobi da mutane." },
      { objective: "O5", q: "Kyamarorin zafi (thermal) a gonar kiwo suna taimakawa wajen:", options: ["Sa ciyawa ta girma", "Gyara shinge", "Karanta alamomin kunne", "Nemo dabbobi da asuba ko a cikin daji mai yawa"], answer: 3, why: "Dabbobi suna bayyana a matsayin wurare masu ɗumi." },
      { objective: "O5", q: "Kiwo na zagaye yana nufin:", options: ["Matsar da dabbobi tsakanin garkuna don ciyawa ta sake girma", "Ajiye dabbobi a wuri ɗaya duk shekara", "Kiwo da dare kawai", "Ciyar da busasshiyar ciyawa (hay) kawai"], answer: 0, why: "Hutar da garkuna yana bar ciyawa ta farfaɗo." },
      { objective: "O6", q: "Zubewar ruwa a hankali (seepage) a bangon madatsa yana nufin:", options: ["Madatsar ta cika da kifi", "Ruwa yana zubewa a hankali ta cikinsa", "Bangon sabo ne", "Ana ruwan sama"], answer: 1, why: "Zubewar ruwa a hankali tana iya raunana bangon, kuma ya kamata a gyara ta." },
      { objective: "O6", q: "Jerin gyaran gine-gine mai kyau ya haɗa da:", options: ["Hotuna kawai", "Samfurin drone", "Abu, wuri, matsala, gaggawa da wanda zai gyara", "Farashin kasuwa"], answer: 2, why: "Cikakkun bayanai a sarari suna sa a yi gyara." },
      { objective: "O6", q: "Yaushe duba gine-gine ya fi amfani?", options: ["Ba a taɓa ba", "Bayan lalacewa kawai", "Lokacin guguwa", "Kafin damina da bayan gyara"], answer: 3, why: "Gyara matsaloli kafin damina yana hana lalacewa." }
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
      9,
      11,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe na shirin ku sake duba shi.",
    criteria: [
      {
        name: "Yankunan kulawa",
        objective: "O1",
        notYet: "Babu yankuna, ko an zana yankuna daga taswira ɗaya ba tare da dalili ba.",
        meets: "Yankuna biyu zuwa huɗu masu suna a babbar gonar, daga taswirori da ilimin manomi, da yadda aka alamta su.",
        exceeds: "Yana amfani da taswirori daga rana ko damina fiye da ɗaya."
      },
      {
        name: "Abin da kowane yanki zai samu",
        objective: "O2",
        notYet: "Kowane yanki yana samun kulawa iri ɗaya, ko an shirya feshi da drone ba tare da izini ba.",
        meets: "Kowane yanki yana da mataki da ya dace da dalilinsa: iri, taki, aiki ko gyara.",
        exceeds: "Ya haɗa da duba yawan tsiro da ƙiyasin amfanin gona na kusan-kusa bisa yanki."
      },
      {
        name: "Tashi kan yanayi",
        objective: "O4",
        notYet: "Babu tashi kan yanayi ko muhalli.",
        meets: "Tashi a ƙayyadaddun ranaku don duba zaizayar ƙasa, ambaliya da fari, da matakin da kowane abin da aka gano zai kai wa.",
        exceeds: "Yana bin diddigin wata dabarar noma mai jure sauyin yanayi kamar filayen tudu ko ciyawar rufe ƙasa a tsawon damina."
      },
      {
        name: "Dabbobi da wurin kiwo",
        objective: "O5",
        notYet: "Babu tashi kan dabbobi, ko tashin da zai tsorata dabbobi.",
        meets: "Tashi don ƙidaya dabbobi da duba wurin kiwo da wuraren shan ruwa, da yardar makiyayi da tsayi mai lafiya.",
        exceeds: "Yana haɗa taswirorin wurin kiwo da shirin kiwo na zagaye."
      },
      {
        name: "Gine-gine",
        objective: "O6",
        notYet: "Ba a haɗa madatsun ruwa, shinge ko wasu gine-gine ba.",
        meets: "Tashi don duba kududdufi, shinge da sauran gine-gine, da tsarin jerin gyare-gyare.",
        exceeds: "An tsara lokacinsa kafin damina da bayan gyara, da hotuna daga wurare iri ɗaya."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka sami \"Ya cika\" ko \"Ya wuce\" a kowane layin rubric na shirin sa ido",
      "Masu koyo da suka ce suna kula da gona bisa yankuna ko suna bin shirin sa ido na damina cikin damina ɗaya (binciken biyo baya)",
      "Gonaki ko ƙungiyoyi da suka ce sun ɗauki mataki da wuri kan zaizayar ƙasa, fari, kiwo fiye da kima ko lalacewar gini",
      "Masu koyo da suka ci gaba zuwa Kwas na 5 na jerin drone"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Taswirorin drone na gona ta gaske, ko gonar misali mai haɗin amfanin gona da dabbobi ta kwas ɗin",
      "Waya mai GPS, da turaku ko tutoci don alamta yankuna",
      "Littafin rubutu ko spreadsheet (takardar lissafi) don teburin yankuna da shirin damina",
      "Kusan minti 60 gaba ɗaya, a gajerun zama, da ƙarin lokaci don rubuta shirin sa ido"
    ],
    facilitatorNotes: [
      "Ku yi gwajin farko tare, sannan ku zana yankuna a kan taswirar misali ɗaya a matsayin ƙungiya kafin masu koyo su zana nasu.",
      "Ku kawo alƙaluman amfanin gona na gida da shawarwarin taki daga masu faɗakarwar noma; kada ku ba da yawan taki da kanku.",
      "Kada ku shirya ko ku nuna feshi da drone ba tare da izinin sufurin jiragen sama da na magungunan ƙwari ba.",
      "Idan ana tashi kusa da dabbobi, ku fara tambayar makiyayi, ku tashi sama, ku tsaya idan dabbobi sun fara gudu.",
      "Ku ba da maki ga shirin sa ido da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
