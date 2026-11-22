"use strict";

// Koach Learn course, Hausa (ha) translation of africa-life/afr-nutrition-local-foods.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const WHO_DIET = { name: "Takardar bayani ta WHO: Abinci mai kyau ga lafiya ('ya'yan itace da kayan lambu, gishiri, sukari da mai)", url: "https://www.who.int/news-room/fact-sheets/detail/healthy-diet" };
const WHO_IYCF = { name: "Takardar bayani ta WHO: Ciyar da jarirai da ƙananan yara", url: "https://www.who.int/news-room/fact-sheets/detail/infant-and-young-child-feeding" };
const WHO_ANAEMIA = { name: "Takardar bayani ta WHO: Ƙarancin jini (anaemia): su wane ne cikin haɗari, abinci mai sinadarin ƙarfe, abincin da ke hana shi", url: "https://www.who.int/news-room/fact-sheets/detail/anaemia" };
const WHO_FIVE_KEYS = { name: "WHO: Littafin mabuɗai biyar na abinci mai tsafta da aminci", url: "https://www.who.int/publications/i/item/9789241594639" };

module.exports = {
  id: "afr-nutrition-local-foods-ha",
  lang: "ha",
  translationOf: "afr-nutrition-local-foods",
  category: "Africa: Life and Work",
  name: "Abinci Mai Gina Jiki da Ƙaramin Kuɗi, da Abincin Gida",
  skills: "Rarraba abincin gida zuwa rukunin abinci, Shirya faranti mai daidaito, Rage gishiri, sukari da mai da kiyaye tsaftar abinci, Kwatanta farashin abinci don samun riba, Ciyar da ƙananan yara da mata masu ciki ko masu shayarwa, Rubuta tsarin abinci na mako da ƙaramin kuɗi",
  outcome: "rubuta tsarin abinci na mako guda ga gidanku wanda ke amfani da abincin gida daga rukunoni da dama kowace rana, ya dace da kasafin kuɗin abincinku, ya bi shawarar WHO kan gishiri, sukari da tsaftar abinci, kuma ya ba ƙananan yara da mata masu ciki ko masu shayarwa abin da suke buƙata.",
  about: [
    "Wannan kwas ɗin na kowa ne da ke saya ko dafa abinci ga gida a Afirka: iyaye mata da maza, kakanni mata, ɗalibai da ke zaune su kaɗai, da masu sayar da dafaffen abinci. Ba ku buƙatar kuɗin sayen abinci na musamman. Abinci mai gina jiki yana fitowa daga wake, ganye, hatsi, kifi, ƙwai da 'ya'yan itace da ke kasuwarku tuni.",
    "Babi na 1 yana koyar da sanin abincinku: rukunin abinci da misalan abincin gida, shirya faranti mai daidaito, da rage gishiri, sukari da mai tare da kiyaye tsaftar abinci. Babi na 2 yana koyar da cin abinci mai kyau da ƙaramin kuɗi: kwatanta farashi don samun riba, ciyar da waɗanda suka fi buƙata, da rubuta tsarin abinci na mako.",
    "Wannan kwas yana bin shawarar Hukumar Lafiya ta Duniya (WHO). Ba ya ba da tsarin abinci na cututtuka kamar ciwon sukari, HIV ko tamowa, ko shawara kan ƙwayoyin ƙarin sinadarai (supplements); don waɗannan, ku tuntuɓi asibiti, masanin abinci ko ma'aikacin lafiya na unguwa. Duk farashin da ke ciki misali ne; ku yi amfani da farashin kasuwarku. Kowane darasi yana ɗaukar kusan minti biyar. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas."
  ],
  finalTask: "Ku rubuta tsarin abinci na mako guda ga gidanku (ko misali, kamar iyali mai mutum biyar a Kisumu, iyali mai mutum huɗu a Ibadan, ko ɗalibi a Accra): kowace rana, abincin da za a ci da rukunin abincin da suke ciki, da 'ya'yan itace ko kayan lambu kowace rana; abincin kowane ƙaramin yaro ko mace mai ciki ko mai shayarwa; jerin sayayya da farashin kasuwarku da jimillar mako idan aka kwatanta da kasafin kuɗinku; da halaye uku da za ku yi amfani da su (rage gishiri, rage sukari, da mabuɗi ɗaya na tsaftar abinci).",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Mutanen da ke saya ko dafa abinci ga gida a Kenya, Najeriya, Ghana, Senegal, Côte d'Ivoire, Kamaru, Maroko, Masar da sauran ƙasashen Afirka: iyaye, kakanni mata, matasa da ke zaune su kaɗai da ƙananan masu sayar da dafaffen abinci. Da yawa suna da ƙaramin kuɗin shiga da ke canjawa, kuma suna amfani da waya mai sauƙi.",
    startingPoint: "Yawancinsu suna dafa babban abinci mai cika ciki (ugali, shinkafa, garri, tuwo ko fufu, banku, attiéké, burodi) kowace rana, amma sau da yawa da ɗan kayan lambu, wake ko abincin dabbobi kaɗan. Da yawa suna saka gishiri, maggi (kayan ɗanɗano), sukari ko mai da yawa. Kaɗan ne ke kwatanta farashin abinci bisa riba ko shirya abincin mako, kuma da yawa ba su tabbata yadda ake ciyar da jariri daga wata 6 ba.",
    gap: "Iyalai da yawa suna cin abin da ke cika ciki, amma ba iri-iri ba. Wannan yana kawo ƙarancin jini, rashin girman yara yadda ya kamata, kuma, ƙari da ƙari, hawan jini da ciwon sukari a manya. Masu koyo za su iya cin abinci mafi kyau da kuɗi iri ɗaya ta hanyar zaɓar abincin gida daga rukunoni da dama, rage gishiri da sukari, da shirya sayayyarsu.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; ana bayanin kowace kalmar abinci mai gina jiki",
      "Kuɗi: kaɗan kuma yana canjawa; kwas ɗin ba ya ba da farashi na gaske, sai misali kawai, kuma masu koyo suna amfani da farashin kasuwarsu",
      "Abinci ya bambanta bisa ƙasa da lokaci: misalai sun fito daga Kenya, Najeriya, Ghana, Senegal, Côte d'Ivoire, Maroko da Masar",
      "Babu tsarin abinci na cututtuka, ƙwayoyin ƙarin sinadarai ko magani: ana kai waɗannan tambayoyi asibiti ko wurin masanin abinci",
      "Na'urori: waya mai sauƙi don na'urar lissafi da rubutu, ko takarda"
    ],
    prerequisites: "Babu. Ƙari da ninkawa masu sauƙi suna taimakawa a Darasi na 4; na'urar lissafi ta waya ta isa."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku jerin abincin da ake sayarwa a kasuwarku", action: "rarraba abincin gida zuwa rukunin abincin ƙarfi, na gina jiki da na kariya", standard: "kuna samun aƙalla 8 cikin 10 daidai" },
    { id: "O2", condition: "Idan aka ba ku abincin da ke kicin ɗinku", action: "shirya faranti mai daidaito da babban abinci, abincin gina jiki da kayan lambu ko 'ya'yan itace", standard: "kayan lambu ko 'ya'yan itace sun cika kusan rabin farantin" },
    { id: "O3", condition: "Idan aka ba ku wani girki ko abincin gida", action: "canja girkin don rage gishiri, sukari da mai, da bin mabuɗai biyar na WHO na tsaftar abinci", standard: "kuna ambaton aƙalla canje-canje biyu da mabuɗai biyar ɗin" },
    { id: "O4", condition: "Ta amfani da farashin kasuwarku", action: "kwatanta farashin abinci na rukuni ɗaya don samun mafi riba", standard: "kuna zaɓar mafi arha da ke ba da sinadarai iri ɗaya, kuma lissafin ya yi daidai" },
    { id: "O5", condition: "Ga yaro mai wata 6 zuwa 23, ko mace mai ciki ko mai shayarwa", action: "shirya abincin rana ɗaya da ya bi shawarar WHO kan ciyarwa", standard: "da adadin abinci daidai da shekarun yaron, ko ƙarin abinci mai sinadarin ƙarfe ga matar" },
    { id: "O6", condition: "Idan aka ba ku yawan mutanen gidanku da kasafin kuɗin abincinku", action: "rubuta tsarin abinci na mako da jerin sayayya", standard: "da rukunin abinci da dama kowace rana, ba tare da wuce kasafin kuɗi ba" }
  ],
  chapters: [
    {
      name: "Babi na 1: Ku san abincinku",
      lessons: [
        {
          title: "Rukunin abinci da abincin gida",
          objectives: ["O1"],
          minutes: 5,
          goal: "Rarraba abincin da ake sayarwa a kasuwarku zuwa rukunin abincin ƙarfi, na gina jiki da na kariya.",
          text: [
            "Babu abinci guda ɗaya da ke ba jiki duk abin da yake buƙata. Hanya mai sauƙi ta tunawa ita ce rukuni uku. Abincin ƙarfi (\"go\") yana ba da ƙarfi: masara, shinkafa, gero, dawa, rogo, doya, agada (plantain), dankalin hausa, burodi, da kuma mai. Abincin gina jiki (\"grow\") yana gina tsoka da jini: wake, waken lentil, waken niébé, gyaɗa, ƙwai, kifi, nama, kaza da madara. Abincin kariya (\"glow\") yana taimakawa wajen yaƙi da cuta: kayan lambu da 'ya'yan itace.",
            "Misalan gida: a Kenya, ugali (ƙarfi), githeri ko omena (gina jiki) da sukuma wiki (kariya). A Najeriya, garri ko doya (ƙarfi), wake ko egusi (gina jiki) da ugu ko shuwaka (kariya). A Ghana, banku ko kenkey (ƙarfi), kifi ko miyar gyaɗa (gina jiki) da kontomire (kariya). A Senegal, shinkafa ko gero da niébé (wake) da kayan lambu. A Masar, burodi da ful (waken fava) da salad.",
            "Wasu abinci mataimaka ne na musamman. Ganyaye masu duhun kore (alayyahu, ganyen rogo, zogale, kontomire) da abinci masu launin lemu (dankalin hausa mai launin lemu, gwanda, mangwaro, karas) suna da bitamin sosai. Wake, ƙananan busassun kifi, ƙwai, hanta da ganyaye masu duhun kore suna ba da sinadarin ƙarfe (iron), wanda ke hana ƙarancin jini."
          ],
          steps: ["Ku rubuta abincin da gidanku ya ci jiya.", "Ku yi wa kowanne alama: ƙarfi, gina jiki ko kariya.", "Ku ga wane rukuni ne babu ko kaɗan ne.", "Ku ambaci abincin gida ɗaya da za ku ƙara don wannan rukuni."],
          words: [["Rukunin abinci", "abincin da ke yin aiki iri ɗaya a jiki."], ["Babban abinci (staple)", "babban abinci mai cika ciki da ake ci kusan kowace rana, kamar ugali, shinkafa, garri ko burodi."], ["Ƙarancin jini (anaemia)", "raunin jini, sau da yawa saboda ƙarancin sinadarin ƙarfe; yana sa mutum gajiya da rauni."]],
          slides: [
            { title: "Rukunin abinci uku", bullets: ["Ƙarfi (go): masara, shinkafa, rogo, doya, agada, burodi", "Gina jiki (grow): wake, gyaɗa, ƙwai, kifi, nama, madara", "Kariya (glow): kayan lambu da 'ya'yan itace"] },
            { title: "Faranti na gida", bullets: ["Kenya: ugali, omena, sukuma wiki", "Najeriya: garri ko doya, wake, ugu", "Ghana: banku, kifi, kontomire; Masar: burodi, ful, salad"] },
            { title: "Mataimaka na musamman", bullets: ["Ganyaye masu duhun kore da abinci masu launin lemu: bitamin", "Wake, ƙananan busassun kifi, ƙwai, hanta, ganye: sinadarin ƙarfe"] }
          ],
          sources: [WHO_DIET, WHO_ANAEMIA],
          tryIt: "Ku rubuta duk abin da gidanku ya ci jiya. Ku yi wa kowane abinci alamar Ƙ (ƙarfi), G (gina jiki) ko K (kariya). Ku zagaye rukunin da kuka fi cin kaɗan, ku rubuta abincin gida ɗaya da za ku iya ƙarawa gobe.",
          youCanNow: "rarraba abincin gida zuwa rukunin ƙarfi, gina jiki da kariya, da gane abin da ya rage.",
          quickCheck: [
            { objective: "O1", q: "Wanne daga cikin waɗannan abincin gina jiki ne?", options: ["Rogo", "Wake", "Shinkafa", "Sukari"], answer: 1, why: "Wake yana da sinadarin protein sosai, wanda ke gina jiki." },
            { objective: "O1", q: "Wani iyali a Accra ya ci banku da miyar barkono duk yini. Wane rukuni ne ya fi rashi?", options: ["Abincin ƙarfi", "Gishiri", "Abincin gina jiki da na kariya", "Babu komai"], answer: 2, why: "Banku abincin ƙarfi ne; abincin yana buƙatar kifi ko wake da kayan lambu." }
          ]
        },
        {
          title: "Shirya faranti mai daidaito",
          objectives: ["O2"],
          minutes: 5,
          goal: "Shirya faranti mai daidaito da babban abinci, abincin gina jiki da kayan lambu ko 'ya'yan itace.",
          text: [
            "Jagora mai sauƙi ga kowane babban abinci: kusan rabin farantin kayan lambu da 'ya'yan itace, kusan kashi ɗaya cikin huɗu babban abinci, kusan kashi ɗaya cikin huɗu kuma abincin gina jiki. Ba sai kuna da faranti na gaske ba; ku yi tunanin kwano ko tiren da ake ci tare a sassa iri ɗaya.",
            "WHO tana ba manya shawarar cin aƙalla gram 400 na 'ya'yan itace da kayan lambu a rana, wato kusan cikin tafin hannu biyar. Ganyen da aka dafa a miya ko stew suna ƙirga. Cikakken hatsi da abincin da ba a casa sosai ba, kamar shinkafar gida (brown rice), gero, dawa ko garin masara cikakke, suna sa ku ƙoshi na tsawon lokaci.",
            "Ku yi ƙananan canje-canje, ba sabon kicin ba. Ku ƙara ɗan ganye a cikin miya. Ku ƙara wake a cikin shinkafa (waakye a Ghana, shinkafa da wake a Najeriya, githeri a Kenya). Ku ƙara ɗan kifi ko ƙwai ga yara. Ku ci 'ya'yan itacen lokacin maimakon kayan zaƙi.",
            "Don taimaka wa jiki amfani da sinadarin ƙarfe daga wake da ganye, ku ci su da abinci mai bitamin C kamar tumatir, lemu, gwaiba ko mangwaro. Ku sha shayi ko kofi tsakanin cin abinci, ba tare da abinci ba, domin suna sa jiki ya kasa ɗaukar sinadarin ƙarfe sosai."
          ],
          steps: ["Ku yi tunanin farantin a sassa huɗu.", "Ku cika kusan rabi da kayan lambu da 'ya'yan itace.", "Ku cika kusan kashi ɗaya cikin huɗu da babban abinci.", "Ku cika kusan kashi ɗaya cikin huɗu da abincin gina jiki.", "Ku ƙara abinci mai bitamin C; ku bar shayi sai tsakanin cin abinci."],
          words: [["Mai daidaito", "abinci mai haɗin rukunin abinci da ya dace."], ["Cikakken hatsi (whole grain)", "hatsin da aka bar ɓawonsa na waje, kamar shinkafar gida, gero ko garin masara cikakke."]],
          slides: [
            { title: "Faranti mai daidaito", bullets: ["Kusan rabi: kayan lambu da 'ya'yan itace", "Kusan kashi ɗaya cikin huɗu: babban abinci", "Kusan kashi ɗaya cikin huɗu: abincin gina jiki"] },
            { title: "'Ya'yan itace da kayan lambu", bullets: ["WHO: aƙalla g 400 a rana ga manya", "Kusan cikin tafin hannu biyar", "Ganye a cikin miya ko stew suna ƙirga"] },
            { title: "Ƙananan canje-canje", bullets: ["Ganye a cikin miya; wake a cikin shinkafa", "Ƙwai ko kifi ga yara", "'Ya'yan itacen lokaci maimakon kayan zaƙi"] },
            { title: "Taimaka wa sinadarin ƙarfe ya yi aiki", bullets: ["Ku ci wake da ganye da tumatir, lemu ko mangwaro", "Shayi da kofi tsakanin cin abinci, ba tare da abinci ba"] }
          ],
          sources: [WHO_DIET, WHO_ANAEMIA],
          tryIt: "Ku shirya babban abincin gobe da abincin da kuke da shi tuni. Ku zana farantin (ko kwanon) ku rubuta abin da ke shiga kowane sashe. Ku ƙara abinci ɗaya mai bitamin C.",
          youCanNow: "shirya faranti mai daidaito da babban abinci, abincin gina jiki da kayan lambu ko 'ya'yan itace masu yawa.",
          quickCheck: [
            { objective: "O2", q: "A faranti mai daidaito, kusan nawa ya kamata ya zama kayan lambu da 'ya'yan itace?", options: ["Kusan rabi", "Babu ko kaɗan", "Ɗan kusurwa ƙarami", "Duka"], answer: 0, why: "Kusan rabin farantin kayan lambu da 'ya'yan itace shi ne jagora mai sauƙi." },
            { objective: "O2", q: "Me yasa za a ci tumatir ko lemu tare da wake da ganye?", options: ["Suna ƙara gishiri", "Suna taimaka wa jiki ɗaukar sinadarin ƙarfe", "Suna maye gurbin wake", "Suna sa abinci ya daɗe"], answer: 1, why: "Bitamin C yana taimaka wa jiki amfani da sinadarin ƙarfe daga abincin tsirrai." }
          ]
        },
        {
          title: "Rage gishiri, sukari da mai, da abinci mai tsafta",
          objectives: ["O3"],
          minutes: 5,
          goal: "Canja girki don rage gishiri, sukari da mai, da bin mabuɗai biyar na tsaftar abinci.",
          text: [
            "Gishiri mai yawa yana ƙara hawan jini, wanda zai iya kawo shanyewar ɓarin jiki da ciwon zuciya. WHO tana ba manya shawarar cin ƙasa da gram 5 na gishiri a rana, wato ƙasa kaɗan da ƙaramin cokali ɗaya cike sama-sama, tare da ƙirga duk gishirin da ke cikin maggi, kayan ɗanɗano na gari, kifin gishiri da burodi. Ku rage gishiri da maggi, ku ƙara ɗanɗano da albasa, tafarnuwa, citta, barkono da ganyen ƙamshi. Idan kuna amfani da gishiri, ku zaɓi gishiri mai iodine.",
            "Sukari: WHO tana ba da shawarar a rage sukari mai 'yanci (sukarin da aka ƙara a abinci da abin sha, da sukarin da ke cikin zuma, lemukan kwalba da ruwan 'ya'yan itace) zuwa ƙasa da kashi 10% na ƙarfin abincin yini, kuma ƙasa da haka ya fi kyau. Ga yawancin manya, wannan ƙasa da kusan ƙananan cokula 12 cike sama-sama ne a rana. Shayi mai zaƙi, lemukan kwalba da ruwan 'ya'yan itace suna taruwa da sauri. Mai: ku yi amfani da kaɗan, ku rage soya abinci; ku dafa a ruwa, ku turara ko ku yi stew maimakon haka.",
            "Tsaftar abinci tana hana gudawa da gubar abinci. Mabuɗai biyar na WHO na abinci mai tsafta: ku kasance da tsafta (ku wanke hannu da wuraren aiki); ku raba ɗanyen abinci da dafaffe; ku dafa sosai, musamman nama, kifi da ƙwai; ku ajiye abinci a yanayin zafi ko sanyi mai aminci (kada ku bar dafaffen abinci a waje na awanni); kuma ku yi amfani da ruwa mai tsafta da abinci sabo mai aminci.",
            "Waɗannan ƙa'idoji sun fi muhimmanci idan kuna sayar da dafaffen abinci, domin kuskure ɗaya zai iya sa abokan ciniki da yawa su yi rashin lafiya."
          ],
          steps: ["Ku ƙirga gishiri, maggi da sukarin da ke cikin girki ɗaya da kuka saba.", "Ku rage kowanne kaɗan, ku ƙara albasa, tafarnuwa, barkono ko ganyen ƙamshi.", "Ku zaɓi yin stew ko dafawa a ruwa maimakon soyawa sau ɗaya a mako.", "Ku duba girkin da mabuɗai biyar na tsaftar abinci."],
          words: [["Gishiri mai iodine", "gishirin da aka ƙara masa sinadarin iodine, wanda jiki ke buƙata."], ["Sukari mai 'yanci (free sugars)", "sukarin da aka ƙara a abinci da abin sha, da sukarin da ke cikin zuma, sirop da ruwan 'ya'yan itace."], ["Gubar abinci", "rashin lafiya daga cin abinci mai ƙwayoyin cuta ko guba a ciki."]],
          slides: [
            { title: "Rage gishiri", bullets: ["WHO: ƙasa da g 5 a rana, ƙasa kaɗan da ƙaramin cokali ɗaya", "Ku ƙirga maggi, kayan ɗanɗano, kifin gishiri da burodi", "Ku ƙara albasa, tafarnuwa, barkono, ganyen ƙamshi; gishiri mai iodine"] },
            { title: "Rage sukari da mai", bullets: ["WHO: sukari mai 'yanci ƙasa da 10% na ƙarfin abinci; ƙasa ya fi kyau", "Shayi mai zaƙi, lemukan kwalba da ruwan 'ya'yan itace suna taruwa da sauri", "Ku rage soyawa: ku dafa a ruwa, ku turara ko ku yi stew"] },
            { title: "Mabuɗai biyar na abinci mai tsafta (WHO)", bullets: ["Tsafta; ku raba ɗanye da dafaffe", "Ku dafa sosai; ku ajiye abinci a yanayi mai aminci", "Ruwa mai tsafta da ɗanyen abinci mai aminci"] }
          ],
          sources: [WHO_DIET, WHO_FIVE_KEYS],
          tryIt: "Ku ɗauki abinci ɗaya da gidanku ke yawan ci, kamar jollof, miyar egusi, thieboudienne ko stew na wake. Ku rubuta canje-canje biyu da ke rage gishiri, sukari ko mai, da mabuɗin tsaftar abinci ɗaya da za ku bi idan kuna dafa shi.",
          youCanNow: "canja girki don rage gishiri, sukari da mai, da kiyaye tsaftar abinci da mabuɗai biyar.",
          quickCheck: [
            { objective: "O3", q: "Wane canji ne ke rage gishiri a cikin stew?", options: ["Ƙara ƙarin maggi biyu", "Ƙara kifin gishiri da ƙarin gishiri", "Rage maggi, ku ƙara albasa, tafarnuwa da barkono", "Ƙara ƙarin kayan ɗanɗano na gari"], answer: 2, why: "Maggi da kayan ɗanɗano na gari suna da gishiri; ganyen ƙamshi da kayan yaji suna ba da ɗanɗano ba tare da gishiri ba." },
            { objective: "O3", q: "Wanne ne ɗaya daga cikin mabuɗai biyar na WHO na abinci mai tsafta?", options: ["Bar dafaffen abinci a waje duk yini", "Raba ɗanyen abinci da dafaffe", "Amfani da allon yanka ɗaya don ɗanyen nama da salad ba tare da wankewa ba", "Ɗanɗana ɗanyen nama don duba shi"], answer: 1, why: "Raba ɗanyen abinci da dafaffe yana hana yaɗuwar ƙwayoyin cuta." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Ku san abincinku",
        questions: [
          { objective: "O1", q: "Wanne ne abincin kariya (glow)?", options: ["Kontomire (ganyen gwaza)", "Garri", "Manja", "Farin burodi"], answer: 0, why: "Ganyaye masu kore abincin kariya ne cike da bitamin." },
          { objective: "O1", q: "Wane abinci ne ke ba da sinadarin ƙarfe don taimakawa hana ƙarancin jini?", options: ["Sukari", "Lemun kwalba", "Ƙananan busassun kifi kamar omena", "Shayi"], answer: 2, why: "Ƙananan busassun kifi, wake, ƙwai da ganyaye masu duhun kore suna ba da sinadarin ƙarfe." },
          { objective: "O2", q: "Wane abinci ne ya fi daidaito?", options: ["Shinkafa da lemun kwalba", "Ugali, wake da sukuma wiki", "Burodi da shayi mai zaƙi", "Garri da sukari"], answer: 1, why: "Yana da babban abinci, abincin gina jiki da kayan lambu." },
          { objective: "O2", q: "Kusan nawa ne WHO ke ba manya shawarar ci na 'ya'yan itace da kayan lambu kowace rana?", options: ["Yanka ɗaya", "Babu ko kaɗan", "Sai ranar Lahadi kawai", "Aƙalla g 400, kusan cikin tafin hannu biyar"], answer: 3, why: "WHO tana ba manya shawarar aƙalla g 400 a rana." },
          { objective: "O3", q: "WHO tana ba manya shawarar su rage gishiri zuwa ƙasa da:", options: ["g 5 a rana, ƙasa kaɗan da ƙaramin cokali ɗaya", "Kofi ɗaya a rana", "Ƙananan cokula goma a rana", "Babu iyaka"], answer: 0, why: "Ƙasa da g 5 na gishiri a rana yana rage haɗarin hawan jini." }
        ]
      }
    },
    {
      name: "Babi na 2: Cin abinci mai kyau da ƙaramin kuɗi",
      lessons: [
        {
          title: "Kwatanta farashin abinci don samun riba",
          objectives: ["O4"],
          minutes: 5,
          goal: "Kwatanta farashin abinci na rukuni ɗaya don samun mafi riba.",
          text: [
            "Abinci mai kyau ba dole ya fi tsada ba. Dabarar ita ce a kwatanta abincin da ke yin aiki iri ɗaya. Ga abincin gina jiki, ku kwatanta wake, waken lentil, waken niébé, gyaɗa, ƙwai, ƙananan busassun kifi da nama bisa nawa abincin iyali ɗaya na kowanne yake ci. Wake da ƙananan kifi sau da yawa suna ba da abu mai yawa da ɗan kuɗi.",
            "Yadda ake kwatantawa: ku rubuta farashi da yawan abin da kuke samu, sannan ku lissafa kuɗin abincin iyali ɗaya. Misali (lambobin ƙirƙira, ba farashi na gaske ba): kofin busasshen wake ɗaya NGN 600 ne kuma yana ciyar da iyali sau ɗaya; naman abinci iri ɗaya NGN 3,000 ne. Wake ya fi arha sau biyar ga wannan abincin. Ku yi amfani da farashin kasuwarku; suna canjawa bisa lokaci.",
            "Hanyoyin tattalin kuɗi: ku sayi 'ya'yan itace da kayan lambu a lokacinsu, lokacin da suka fi arha. Ku sayi busassun abinci (wake, hatsi, busassun kifi) da yawa tare da maƙwabta ko ƙungiyar adashenku ku raba. Ku shuka ganye kamar alayyahu, kale, zogale ko spinach a ɗan lambu, buhu ko gwangwani. Ku rage lemukan kwalba, kayan zaƙi da kayan ciye-ciye na leda, waɗanda ke da tsada amma ba su da amfani sosai.",
            "Kada ku ɓata: ku ajiye busassun abinci a cikin kwantena a rufe kuma bushe, nesa da danshi da ƙwari, ku kuma yi amfani da ragowar abinci lafiya washegari."
          ],
          steps: ["Ku zaɓi rukunin abinci ɗaya, misali abincin gina jiki.", "Ku rubuta farashi da yawan abinci uku a wannan rukuni.", "Ku lissafa kuɗin abincin iyali ɗaya na kowanne.", "Ku zaɓi mafi riba, ku kuma rubuta waɗanne abinci ne ke lokacinsu."],
          words: [["Riba (value)", "yawan abinci mai kyau da kuke samu da kuɗinku."], ["A lokacinsa (in season)", "lokacin shekara da ake girbe amfanin gona, don haka yana da yawa kuma ya fi arha."]],
          slides: [
            { title: "Ku kwatanta abu da irinsa", bullets: ["Rukuni ɗaya, aiki ɗaya", "Kuɗin abincin iyali ɗaya", "Wake da ƙananan kifi sau da yawa suna ba da yawa da ɗan kuɗi"] },
            { title: "Yadda ake kwatantawa", bullets: ["Ku rubuta farashi da yawa", "Ku lissafa kuɗin kowane abincin iyali", "Ku yi amfani da farashin kasuwarku; suna canjawa"] },
            { title: "Hanyoyin tattalin kuɗi", bullets: ["Ku saya a lokacinsa", "Ku sayi busassun abinci da yawa tare da maƙwabta", "Ku shuka ganye a buhu ko gwangwani; rage lemukan kwalba da ciye-ciye"] }
          ],
          tryIt: "A kasuwarku ko shagonku, ku rubuta farashi da yawan abincin gina jiki uku (misali wake, ƙwai da busasshen kifi). Ku lissafa kuɗin abincin iyali ɗaya na kowanne da na'urar lissafi ta wayarku. Ku zagaye mafi riba. Ku rubuta kuɗin ƙasar (KES, NGN, GHS, XOF, MAD ko naku).",
          youCanNow: "kwatanta farashin abinci bisa kuɗin kowane abinci, da zaɓar mafi riba a kowane rukunin abinci.",
          quickCheck: [
            { objective: "O4", q: "Wace hanya ce mafi adalci ta kwatanta wake da nama?", options: ["Launin buhun", "Wane shago ne mafi kusa", "Wanne ne ya fi nauyi", "Kuɗin abincin iyali ɗaya na kowanne"], answer: 3, why: "Kuɗin kowane abinci yana kwatanta abin da kuke samu da gaske da kuɗinku." },
            { objective: "O4", q: "Misali kawai: waken abinci ɗaya XOF 500 ne, kifin abinci ɗaya kuma XOF 1,500. Wake ya fi arha sau nawa?", options: ["Sau 2", "Sau 3", "Sau 5", "Daidai suke"], answer: 1, why: "1,500 raba 500 daidai yake da 3." }
          ]
        },
        {
          title: "Ciyar da ƙananan yara da mata masu ciki ko masu shayarwa",
          objectives: ["O5"],
          minutes: 6,
          goal: "Shirya abincin rana ɗaya ga ƙaramin yaro ko mace mai ciki ko mai shayarwa bisa shawarar WHO.",
          text: [
            "Ƙananan yara suna girma da sauri kuma cikinsu ƙarami ne, don haka suna buƙatar ƙananan abinci akai-akai cike da abinci mai kyau. WHO tana ba da shawarar nonon uwa kaɗai a watanni 6 na farko. Daga kusan wata 6, ku ƙara abincin gida mai laushi da aka niƙa, ku ci gaba da shayarwa har shekara 2 ko fiye. Ku fara da ɗan kaɗan, ku riƙa ƙara yawa, kauri da iri-irin abinci a hankali.",
            "Sau nawa (WHO): abinci 2 zuwa 3 a rana ga jarirai masu wata 6 zuwa 8; abinci 3 zuwa 4 a rana ga yara masu wata 9 zuwa 23, da ciye-ciye 1 zuwa 2 idan ana buƙata. Ku yi kunu mai kauri da zai tsaya a kan cokali, ku ƙara wani abu daga wani rukuni: wake da aka niƙa ko man gyaɗa, ƙwai, ƙananan kifi da aka niƙa gari, ganye da aka niƙa ko gwanda. Ku ba yaron kwanonsa na kansa don ku ga nawa yake ci.",
            "Mata masu ciki da masu shayarwa suna buƙatar ƙarin abinci mai kyau, ba ƙarin babban abinci kawai ba. Ku ƙara ɗan abinci ko ciye-ciye ɗaya kowace rana, da abinci mai sinadarin ƙarfe (wake, ƙananan kifi, ƙwai, hanta, ganyaye masu duhun kore) da ake ci tare da abinci mai bitamin C. Ku je duk ganawar awon ciki, kuma ku sha ƙwayoyin ƙarin sinadarai da asibiti ya ba ku kaɗai.",
            "Idan yaro ba shi da lafiya, WHO tana ba da shawarar ƙarin abin sha da ƙarin shayarwa, da abinci mai laushi da yake so. Bayan rashin lafiyar, ku ba shi ƙarin abinci don ya dawo da ƙarfinsa. Idan yaro ba ya girma yadda ya kamata, ko ya rame sosai ko ya kumbura, ku je asibiti."
          ],
          steps: ["Ku duba shekarun yaron a watanni.", "Ku shirya adadin abinci na wannan shekaru.", "Ku sa kowane abinci ya yi kauri, ku ƙara wani rukunin abinci.", "Ga mace mai ciki ko mai shayarwa: ku ƙara ciye-ciye da abinci mai sinadarin ƙarfe da bitamin C."],
          words: [["Ƙarin abinci (complementary feeding)", "ba da abincin gida daga kusan wata 6 yayin da ake ci gaba da shayarwa."], ["Ciye-ciye (snack)", "ɗan abinci kaɗan tsakanin manyan abinci, kamar ayaba, gyaɗa ko ƙwai."]],
          slides: [
            { title: "Jarirai da ƙananan yara (WHO)", bullets: ["Wata 0-6: nonon uwa kaɗai", "Daga kusan wata 6: abincin gida mai laushi da nonon uwa", "Ku ci gaba da shayarwa har shekara 2 ko fiye"] },
            { title: "Sau nawa", bullets: ["Wata 6-8: abinci 2-3 a rana", "Wata 9-23: abinci 3-4 a rana, da ciye-ciye 1-2", "Kunu mai kauri da wani rukunin abinci"] },
            { title: "Mata masu ciki da masu shayarwa", bullets: ["Ƙarin ɗan abinci ko ciye-ciye", "Abinci mai sinadarin ƙarfe tare da bitamin C", "Ƙwayoyin ƙarin sinadarai da asibiti ya bayar kaɗai"] },
            { title: "Yaro mara lafiya", bullets: ["Ƙarin abin sha da shayarwa", "Abinci mai laushi da yake so; ƙarin abinci bayan haka", "Ba ya girma yadda ya kamata: ku je asibiti"] }
          ],
          sources: [WHO_IYCF, WHO_ANAEMIA],
          tryIt: "Ku shirya abincin rana ɗaya ga yaro mai wata 10 (misali a Douala ko Kumasi) ko ga uwa mai shayarwa. Ku rubuta kowane abinci da ciye-ciye da rukunin abincin da yake ciki.",
          youCanNow: "shirya abincin rana ɗaya ga ƙaramin yaro ko mace mai ciki ko mai shayarwa wanda ya bi shawarar WHO.",
          quickCheck: [
            { objective: "O5", q: "Abinci nawa a rana WHO ke ba da shawara ga jariri mai wata 7?", options: ["2 zuwa 3", "1", "6 zuwa 8", "Babu; nonon uwa kaɗai"], answer: 0, why: "WHO tana ba da shawarar abinci 2 zuwa 3 a rana a wata 6 zuwa 8, tare da shayarwa." },
            { objective: "O5", q: "Wane kunu ne ya fi kyau ga yaro mai wata 9?", options: ["Kunu mai ruwa-ruwa da sukari", "Shayi kawai", "Kunu mai kauri da man gyaɗa ko ƙwai da aka niƙa", "Lemun kwalba"], answer: 2, why: "Kunu mai kauri da wani rukunin abinci yana ba da ƙarin sinadarai a ƙaramin ciki." }
          ]
        },
        {
          title: "Rubuta tsarin abinci na mako da ƙaramin kuɗi",
          objectives: ["O6"],
          minutes: 6,
          goal: "Rubuta tsarin abinci na mako da jerin sayayya da suka dace da kasafin kuɗinku.",
          text: [
            "Tsari yana tattalin kuɗi kuma yana sauƙaƙa cin abinci mai kyau. Ku fara da kasafin kuɗin abincinku na mako. Sannan ku shirya manyan abinci, da babban abinci mai arha, wake ko ƙananan kifi kusan kowace rana, da kayan lambu kowace rana. Ku shirya ƙwai, nama ko kaza a wasu ranaku idan kuɗi ya ba da dama.",
            "Ku maimaita abincin da iyalinku ke so, amma ku canja kayan lambu ko waken don a sami iri-iri. Ku dafa wake sau ɗaya ku yi amfani da shi a abinci biyu. Ku fara shirya abincin yara da ciye-ciyen mace mai ciki ko mai shayarwa, don kada a taɓa barin su a baya.",
            "Daga tsarin, ku rubuta jerin sayayya da farashin kasuwarku, ku haɗa su ku kwatanta da kasafin kuɗi. Idan kun wuce, ku musanya abinci mai tsada da mai arha a rukuni ɗaya, ba ku cire shi kawai ba. Misali (lambobin ƙirƙira): wani iyali a Nakuru mai kasafin kuɗin mako na KES 2,500 ya musanya abincin nama biyu da omena da wake don kada ya wuce.",
            "Ku liƙa tsarin a bango ko ku ajiye hotonsa a wayarku. A ƙarshen mako, ku duba abin da kuka kashe da abin da kuka zubar, ku canja tsarin mako mai zuwa."
          ],
          steps: ["Ku rubuta kasafin kuɗin abincinku na mako.", "Ku shirya manyan abinci na kwana bakwai da rukunin abinci da dama kowace rana.", "Ku fara shirya abincin yara da mata masu ciki ko masu shayarwa.", "Ku rubuta jerin sayayya da farashinku ku haɗa su.", "Idan kun wuce kasafin kuɗi, ku musanya a cikin rukunin abinci ɗaya."],
          words: [["Kasafin kuɗi (budget)", "yawan kuɗin da kuke shirin kashewa."], ["Tsarin abinci (meal plan)", "jerin abin da za ku dafa kowace rana."]],
          slides: [
            { title: "Ku fara da kasafin kuɗi", bullets: ["Kuɗin abinci na mako", "Babban abinci mai arha, wake ko ƙananan kifi", "Kayan lambu kowace rana"] },
            { title: "Ku shirya da hikima", bullets: ["Ku maimaita abin da ake so, ku canja kayan lambu", "Ku dafa wake sau ɗaya, ku yi amfani sau biyu", "Yara da iyaye mata tukuna"] },
            { title: "Jerin sayayya", bullets: ["Farashin kasuwarku", "Ku haɗa ku kwatanta da kasafin kuɗi", "Kun wuce? Ku musanya a cikin rukunin abinci ɗaya"] },
            { title: "Ku duba ku gyara", bullets: ["Nawa kuka kashe?", "Me aka ɓata?", "Ku canja tsarin mako mai zuwa"] }
          ],
          tryIt: "Aikin ƙarshe: ku rubuta tsarin abincinku na mako guda. Kowace rana ku jera abinci da rukunin abinci, da 'ya'yan itace ko kayan lambu kullum; ku yi alama ga abincin kowane ƙaramin yaro ko mace mai ciki ko mai shayarwa; ku rubuta jerin sayayya da farashinku ku haɗa jimillar ku kwatanta da kasafin kuɗi; ku kuma rubuta halaye uku da za ku yi amfani da su.",
          youCanNow: "rubuta tsarin abinci na mako da jerin sayayya da ke ciyar da gida da kyau ba tare da wuce kasafin kuɗinku ba.",
          quickCheck: [
            { objective: "O6", q: "Jerin sayayyarku ya wuce kasafin kuɗi. Wane canji ne ya fi kyau?", options: ["Cire duk kayan lambu", "Musanya abinci mai tsada da mai arha a rukuni ɗaya", "Ba yara ƙasa da haka", "Sayi ƙarin lemun kwalba"], answer: 1, why: "Musanya a cikin rukunin abinci yana sa abincin ya kasance mai daidaito kuma mafi arha." },
            { objective: "O6", q: "Abincin su wane ne ya kamata ku fara shiryawa?", options: ["Baƙi", "Manya kawai", "Ba kowa musamman", "Ƙananan yara da mata masu ciki ko masu shayarwa"], answer: 3, why: "Su ne suka fi buƙatar abinci mai kyau, don haka kada a taɓa barin su a baya." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Cin abinci mai kyau da ƙaramin kuɗi",
        questions: [
          { objective: "O4", q: "Wace hanya ce mai kyau ta tattalin kuɗi kan kayan lambu?", options: ["Ku saya sai ba a lokacinsu ba", "Ku saya a lokacinsu ko ku shuka ganye a buhu", "Ku sayi kayan ciye-ciye na leda kawai", "Ku riƙa saya ba sau da yawa ba ku bar su su ruɓe"], answer: 1, why: "Amfanin gona a lokacinsa ya fi arha, kuma ganye suna girma da sauƙi a gida." },
          { objective: "O4", q: "Misali kawai: kg 1 na waken lentil a Casablanca MAD 20 ne, kuma yana yin abincin iyali 4. Nawa ne kuɗin kowane abinci?", options: ["MAD 80", "MAD 4", "MAD 5", "MAD 24"], answer: 2, why: "20 raba abinci 4 daidai yake da 5." },
          { objective: "O5", q: "Har shekaru nawa WHO ke ba da shawarar a ci gaba da shayarwa?", options: ["Shekara 2 ko fiye", "Wata 6", "Wata 1", "A daina idan an fara ba da abinci"], answer: 0, why: "Ana ci gaba da shayarwa tare da abincin gida har shekara 2 ko fiye." },
          { objective: "O5", q: "Me ya kamata uwa mai shayarwa ta ƙara kowace rana?", options: ["Ƙarin shayi mai zaƙi", "Babu komai", "Ƙarin shinkafa kawai", "Ƙarin ɗan abinci ko ciye-ciye da abinci mai sinadarin ƙarfe"], answer: 3, why: "Tana buƙatar ƙarin abinci mai kyau, musamman abinci mai sinadarin ƙarfe." },
          { objective: "O6", q: "Mene ne abu na farko da za a rubuta idan ana shirya abincin mako?", options: ["Kasafin kuɗin abincinku na mako", "Jerin baƙi", "Odar lemun kwalba", "Babu komai; ku je sayayya kawai"], answer: 0, why: "Kasafin kuɗi ne ke ƙayyade abin da tsarin zai ƙunsa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Abinci Mai Gina Jiki da Ƙaramin Kuɗi, da Abincin Gida",
    questions: [
      { objective: "O1", q: "Wanne ne abincin ƙarfi (go)?", options: ["Sukuma wiki", "Doya", "Ƙwai", "Lemu"], answer: 1, why: "Doya babban abinci ne da ke ba da ƙarfi." },
      { objective: "O1", q: "Wanne ne abincin gina jiki (grow)?", options: ["Gyaɗa", "Rogo", "Sukari", "Gwanda"], answer: 0, why: "Gyaɗa tana ba da protein." },
      { objective: "O1", q: "Dankalin hausa mai launin lemu, gwanda da mangwaro suna da yawan:", options: ["Gishiri", "Ba komai mai amfani", "Bitamin", "Mai"], answer: 2, why: "Abinci masu launin lemu suna da bitamin sosai." },
      { objective: "O1", q: "Ƙarancin jini sau da yawa yana faruwa saboda ƙarancin:", options: ["Sukari", "Gishiri", "Mai", "Sinadarin ƙarfe (iron)"], answer: 3, why: "Ƙarancin sinadarin ƙarfe shi ne dalilin da ya fi yawa na ƙarancin jini daga abinci." },
      { objective: "O2", q: "A faranti mai daidaito, kusan kashi ɗaya cikin huɗu shi ne:", options: ["Kayan zaƙi", "Abincin gina jiki", "Gishiri", "Lemun kwalba"], answer: 1, why: "Kusan kashi ɗaya cikin huɗu babban abinci, kashi ɗaya cikin huɗu abincin gina jiki, rabi kayan lambu da 'ya'yan itace." },
      { objective: "O2", q: "Yaushe ya kamata ku sha shayi idan kuna son samun sinadarin ƙarfe daga abincinku?", options: ["Tsakanin cin abinci", "Da kowane abinci", "Maimakon cin abinci", "Ba shi da wani bambanci"], answer: 0, why: "Shayi tare da abinci yana sa jiki ya kasa ɗaukar sinadarin ƙarfe sosai." },
      { objective: "O2", q: "Wane ɗan canji ne ke sa shinkafa ta fi daidaito?", options: ["Ƙara gishiri", "Ƙara sukari", "Ƙara wake da ganye", "Ƙara lemun kwalba"], answer: 2, why: "Wake da ganye suna ƙara abincin gina jiki da na kariya." },
      { objective: "O3", q: "Wanne ne ke ɓoye gishiri mai yawa?", options: ["Sabon tumatir", "Maggi da kayan ɗanɗano na gari", "Wake kawai", "Sabbin 'ya'yan itace"], answer: 1, why: "Maggi da kayan ɗanɗano na gari suna da gishiri sosai." },
      { objective: "O3", q: "Wane abin sha ne ke ƙara sukari mai 'yanci mafi yawa?", options: ["Ruwa mai tsafta", "Shayi marar sukari", "Madara kawai", "Kwalbar lemun kwalba (soda)"], answer: 3, why: "Lemukan kwalba cike suke da sukarin da aka ƙara." },
      { objective: "O3", q: "Wata mai sayar da abinci a Abidjan ta bar dafaffen attiéké da kifi a waje duk yamma cikin zafi. Wane mabuɗi ne aka karya?", options: ["Ajiye abinci a yanayi mai aminci", "Dafa abinci sosai", "Amfani da gishiri mai iodine", "Cin ƙarin kayan lambu"], answer: 0, why: "Ƙwayoyin cuta suna girma da sauri a dafaffen abincin da aka bar shi da ɗumi na awanni." },
      { objective: "O3", q: "Hanya mafi arha kuma mafi lafiya ta dafa abinci fiye da soyawa a mai mai yawa ita ce:", options: ["Ƙarin mai", "Yin stew, dafawa a ruwa ko turarawa", "Soyawa sau biyu", "Ƙara sukari"], answer: 1, why: "Yin stew, dafawa a ruwa da turarawa suna amfani da ɗan mai kaɗan." },
      { objective: "O4", q: "Don kwatanta riba, kuna lissafa:", options: ["Wace jaka ce ta fi girma a gani", "Sunan mai sayarwa", "Kuɗin abincin iyali ɗaya", "Wane shago ne ya fi cunkoso"], answer: 2, why: "Kuɗin kowane abinci yana nuna abin da kuke samu da gaske." },
      { objective: "O4", q: "'Ya'yan itace da kayan lambu yawanci sun fi arha:", options: ["Idan ba lokacinsu ba ne", "Idan suna lokacinsu", "A cikin leda", "Da dare kawai"], answer: 1, why: "A lokacinsu, suna da yawa kuma sun fi arha." },
      { objective: "O4", q: "Misali kawai: ƙwan abinci ɗaya GHS 30 ne, wake kuma GHS 10. Wanne ne ya fi riba ga wannan abincin?", options: ["Ƙwai", "Daidai suke", "Babu ɗaya", "Wake"], answer: 3, why: "Duka biyun abincin gina jiki ne, kuma wake kashi ɗaya cikin uku na kuɗin ne kawai." },
      { objective: "O5", q: "A watanni 6 na farko, jariri yana buƙatar:", options: ["Nonon uwa kaɗai", "Ruwa da kunu", "Shayi", "Madarar saniya da sukari"], answer: 0, why: "WHO tana ba da shawarar nonon uwa kaɗai a watanni 6 na farko." },
      { objective: "O5", q: "Yaro mai wata 12 ya kamata ya ci kusan abinci nawa a rana?", options: ["Ɗaya", "3 zuwa 4, da ciye-ciye 1 zuwa 2 idan ana buƙata", "Nonon uwa kaɗai", "Goma"], answer: 1, why: "WHO tana ba da shawarar abinci 3 zuwa 4 ga wata 9 zuwa 23, da ciye-ciye idan ana buƙata." },
      { objective: "O5", q: "Idan ƙaramin yaro ba shi da lafiya, WHO tana ba da shawarar:", options: ["Daina ba shi duk abinci", "Daina shayarwa", "Ƙarin abin sha, ƙarin shayarwa da abinci mai laushi da yake so", "Ruwa kawai"], answer: 2, why: "Ƙarin ruwa da abinci suna taimaka wa yaro ya warke." },
      { objective: "O6", q: "Tsarin abinci na mako mai kyau yana da:", options: ["Babban abinci iri ɗaya kawai, kowace rana", "Kayan lambu sai ranar Lahadi kawai", "Babu kasafin kuɗi", "Rukunin abinci da dama kowace rana"], answer: 3, why: "Iri-iri kowace rana shi ne burin." },
      { objective: "O6", q: "Hanya mai arha ta sa wake ya ƙara yawa a cikin tsarin ita ce:", options: ["Dafa shi sau ɗaya a yi amfani da shi a abinci biyu", "Zubar da ragowar abinci", "Dafa shi kowace awa", "Saya a ƙananan leda"], answer: 0, why: "Dafawa sau ɗaya yana tattalin makamashi da lokaci, kuma ragowar da aka ajiye lafiya suna zama abinci na biyu." },
      { objective: "O6", q: "A ƙarshen mako, ya kamata ku:", options: ["Yar da tsarin", "Duba abin da kuka kashe da abin da kuka ɓata, ku canja tsarin mako mai zuwa", "Ninka kasafin kuɗi", "Daina shiryawa"], answer: 1, why: "Dubawa yana taimaka muku inganta tsari na gaba." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 3, 5, 7, 9, 11, 14, 15, 17] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Rukunin abinci kowace rana", objective: "O1", notYet: "Yawancin ranaku suna da babban abinci kawai, ko an ambaci rukunoni ba daidai ba.", meets: "Kowace rana tana da abincin ƙarfi, na gina jiki da na kariya, an kuma ambace su daidai.", exceeds: "Yana kuma da ganyaye masu duhun kore ko abinci masu launin lemu da abinci mai sinadarin ƙarfe a yawancin ranaku." },
      { name: "Abinci mai daidaito", objective: "O2", notYet: "Babu kayan lambu ko 'ya'yan itace a wasu ranaku.", meets: "Kayan lambu ko 'ya'yan itace kowace rana, kuma manyan abinci suna bin faranti mai daidaito.", exceeds: "Ana haɗa abinci mai sinadarin ƙarfe da abinci mai bitamin C, kuma ana shan shayi tsakanin cin abinci." },
      { name: "Gishiri, sukari da tsafta", objective: "O3", notYet: "Babu halayen da aka jera, ko ba sa rage gishiri ko sukari.", meets: "Yana jera hali ɗaya na gishiri, hali ɗaya na sukari da mabuɗi ɗaya daga cikin mabuɗai biyar na abinci mai tsafta.", exceeds: "Yana nuna canje-canjen a cikin girke-girke da aka ambata a tsarin." },
      { name: "Kasafin kuɗi da jerin sayayya", objective: "O4", notYet: "Babu farashi, ko jimillar ba daidai ba ce, ko ta wuce kasafin kuɗi ba tare da musanya ba.", meets: "Jerin sayayya da farashin kasuwar mai koyo, da jimilla daidai da ba ta wuce kasafin kuɗi ba.", exceeds: "Yana nuna aƙalla musanya ɗaya mai riba a cikin rukunin abinci, kuma ya rubuta abincin da ke lokacinsu." },
      { name: "Ciyar da waɗanda suka fi buƙata", objective: "O5", notYet: "Babu tsari ga ƙaramin yaro ko mace mai ciki ko mai shayarwa a gidan.", meets: "Abinci da ciye-ciye suna bin shawarar WHO bisa shekarun yaron ko ga matar.", exceeds: "An rubuta kunu mai kauri da wani rukunin abinci, da adadin abinci daidai, ga kowace rana." },
      { name: "Tsarin mako", objective: "O6", notYet: "Wasu ranaku ba su nan.", meets: "Abincin kwana bakwai, a shirye don liƙawa a bango ko ajiyewa a waya.", exceeds: "Yana amfani da ragowar abinci lafiya, kuma yana maimaita abin da ake so da iri-iri." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka ce suna cin kayan lambu ko 'ya'yan itace kowace rana, da wake ko ƙananan kifi a yawancin ranaku, bayan kwanaki 30 (binciken biyo baya)",
      "Gidajen da suka ce suna amfani da tsarin abinci na mako kuma ba sa wuce kasafin kuɗin abincinsu",
      "Masu koyo da suka ce sun rage maggi, gishiri ko abin sha mai sukari",
      "Asibitocin abokan aiki ko ma'aikatan lafiya na unguwa sun ce an inganta ciyar da yara masu wata 6 zuwa 23 a cikin iyalan masu koyo"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya mai sauƙi mai na'urar lissafi, ko takarda da alƙalami",
      "Farashi daga kasuwa ko shagon unguwa don darussan farashi",
      "Faranti, kwano ko zane don nuna faranti mai daidaito",
      "Kusan minti 60 gaba ɗaya, a gajerun zama"
    ],
    facilitatorNotes: [
      "Abokan aiki masu kyau: ƙungiyoyin mata, ƙungiyoyin adashe, makarantu, asibitoci da ma'aikatan lafiya na unguwa; nuna yadda ake girki da abincin gida yana aiki sosai.",
      "Ku yi amfani da abinci da farashin yankinku; farashin da ke cikin kwas misali ne kawai.",
      "Kada ku ba da tsarin abinci na cututtuka ko shawara kan ƙwayoyin ƙarin sinadarai; ku tura waɗannan tambayoyi zuwa asibiti ko masanin abinci.",
      "Ku kula: wasu masu koyo ƙila ba su da isasshen abinci. Ku mai da hankali kan canje-canje marasa tsada, ku kuma nuna musu tallafin abinci na yankin inda akwai shi.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
