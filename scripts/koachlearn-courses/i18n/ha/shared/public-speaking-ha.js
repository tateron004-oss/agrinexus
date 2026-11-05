"use strict";

// Koach Learn course, Hausa (ha) translation of shared/public-speaking.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "public-speaking-ha",
  lang: "ha",
  translationOf: "public-speaking",
  category: "Athletes",
  name: "Yin Magana a Gaban Jama'a da Gabatarwa",
  skills: "Tsara gajeren jawabi, Shirya saƙo, Yin slides masu sauƙi, Atisaye da shawo kan fargaba, Amfani da murya da motsin jiki, Amsa tambayoyi",
  outcome: "tsarawa, yin atisaye da gabatar da jawabi mai sarari na minti 2 mai farawa mai ƙarfi, muhimman batutuwa uku da rufewa mai sarari, shawo kan fargabarku, amfani da muryarku da jikinku da kyau, da amsa tambayoyi cikin natsuwa.",
  about: [
    "Yin magana a gaban mutane yana ɗaya daga cikin abubuwan da mutane suka fi tsoro, kuma yana ɗaya daga cikin ƙwarewa mafi amfani. Kuna amfani da shi a hirar neman aiki, taron ƙungiya, gabatarwa ga abokan ciniki ko masu zuba jari, jawabi ga masu ba da gudummawa da masu aikin sa-kai, hira da 'yan jarida, taron al'umma da ɗakin canja kaya na 'yan wasa.",
    "Wannan kwas ɗin na 'yan wasa ne, masu kasuwanci, ma'aikatan ƙungiyoyin sa-kai, tsofaffin sojoji, matasa, ma'aikata da duk wanda ke son yin magana da ƙarfin gwiwa. Ba sai kun zama gwani tun haihuwa ba. Ana samun ƙwararrun masu magana ta hanyar tsari da atisaye.",
    "Za ku tsara gajeren jawabi, ku ba shi tsari mai sarari, ku yi slides masu sauƙi idan kuna buƙata, ku yi atisaye, ku shawo kan fargaba, ku yi amfani da muryarku da jikinku, sannan ku amsa tambayoyi. Kowane darasi yana ɗaukar kusan minti biyar kuma yana ƙarewa da atisaye. Aikin ƙarshe jawabi ne na minti 2 da za ku ɗauka a wayarku. Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku ɗauki bidiyonku a waya kuna gabatar da jawabi na minti 2 kan batun da kuka sani sosai (wasanku, kasuwancinku, manufarku, aikinku ko wata ƙwarewa da kuke da ita). Dole ya kasance yana da farawa mai jan hankali, muhimman batutuwa uku da rufewa mai sarari. Ku kalli bidiyon, ku rubuta abu ɗaya da kuka yi da kyau da abu ɗaya da za ku inganta, sannan ku sake ɗaukarsa sau ɗaya.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "'Yan wasa, masu kasuwanci, ma'aikatan ƙungiyoyin sa-kai, tsofaffin sojoji, matasa, ma'aikata da duk wanda ke buƙatar yin magana a hirar neman aiki, taron ƙungiya, gabatarwa, jawabi ga masu ba da gudummawa, hira da 'yan jarida, taron al'umma ko ɗakin canja kaya na 'yan wasa.",
    startingPoint: "Suna magana da mutane kowace rana kuma sun san wasu batutuwa sosai, kamar wasansu, kasuwancinsu, manufarsu ko aikinsu. Da yawa suna jin fargaba idan suna magana a gaban jama'a, suna yawo a magana ba tare da tsari ba, suna karanta slides, kuma ba su taɓa kallon kansu a bidiyo ba.",
    gap: "Yin magana a sarari yana taimaka wa mutane su sami aiki, su sami abokan ciniki da masu ba da gudummawa, su jagoranci ƙungiyoyi kuma a ji su a cikin al'ummarsu. Masu koyo suna buƙatar hanya mai sauƙi don tsarawa, yin atisaye da gabatar da gajeren jawabi da amsa tambayoyi, don kada tsoro ya hana su ci gaba.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli",
      "Na'urori: waya mai kyamara da agogon ƙirga lokaci (timer); slides ba dole ba ne",
      "Ana yin atisaye da ɗaukar bidiyo shi kaɗai ko tare da aboki ɗaya, don rage matsi",
      "Sirri: bidiyoyi suna zama a wayar mai koyo sai dai idan ya zaɓi ya raba su",
      "Lokaci: darussa na kusan minti biyar, da jawabin ƙarshe na minti 2"
    ],
    prerequisites: "Babu."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Don batun da kuka sani sosai", action: "rubuta masu sauraronku, burinku a gare su da babban ra'ayinku guda ɗaya", standard: "da babban ra'ayin a jimla ɗaya" },
    { id: "O2", condition: "Don jawabi na minti 2", action: "tsara farawa mai jan hankali, muhimman batutuwa uku masu misalai da rufewa mai kira ɗaya zuwa mataki", standard: "a shafi ɗaya na gajerun bayanai" },
    { id: "O3", condition: "Don jawabinku", action: "yanke shawara ko kuna buƙatar slides, da yin masu sauƙi da ba su wuce uku ba idan kuna buƙata", standard: "da ra'ayi ɗaya a kowane slide kuma an tabbatar da kowane bayani" },
    { id: "O4", condition: "Kafin ku gabatar da jawabin", action: "yin atisaye da babbar murya tare da agogon ƙirga lokaci da amfani da numfashi don shawo kan fargaba", standard: "kuna gamawa cikin minti 2 ko ƙasa da haka" },
    { id: "O5", condition: "Yayin da kuke magana", action: "amfani da muryarku, kallon ido da tsayuwarku don ku yi kama da masu ƙarfin gwiwa", standard: "kuna gyara aƙalla abu ɗaya da kuka lura a bidiyonku" },
    { id: "O6", condition: "Bayan jawabi", action: "amsa tambayoyi cikin natsuwa, har da waɗanda ba za ku iya amsawa ba", standard: "kuna maimaita kowace tambaya kuma kuna ƙarewa da babban ra'ayinku" }
  ],
  chapters: [
    {
      name: "Babi na 1: Tsara jawabinku",
      lessons: [
        {
          objectives: ["O1"],
          title: "Tsara gajeren jawabi: masu sauraro, buri da babban ra'ayi ɗaya",
          minutes: 5,
          goal: "Rubuta masu sauraronku, burinku da babban ra'ayinku guda ɗaya don gajeren jawabi.",
          text: [
            "Kafin ku rubuta ko da kalma ɗaya, ku amsa tambayoyi uku. Su wane ne ke sauraro? Me nake so su yi, su yi tunani ko su ji bayan haka? Mene ne babban ra'ayi ɗaya da nake so su tuna?",
            "Batu ɗaya yana canjawa bisa ga masu sauraro. Idan kuna magana game da rumbun abincin ƙungiyarku ta sa-kai ga masu ba da gudummawa, za ku mai da hankali kan sakamako da abin da kuɗinsu ke yi. Ga sababbin masu aikin sa-kai, za ku mai da hankali kan yadda aikin juyi (shift) ɗaya yake. Ga ƙungiyar matasa, koci da ke magana game da ladabi zai yi amfani da wasanninsu a matsayin misalai.",
            "Ku rubuta babban ra'ayinku a matsayin jimla ɗaya da yaro ɗan shekara 12 zai iya maimaitawa: \"Zuwa da wuri kowace rana shi ne ke cin wasanni masu tsauri.\" ko \"Manhajarmu tana ceton ƙananan shaguna awa biyu a mako.\" Duk abin da ke cikin jawabinku ya kamata ya goyi bayan wannan jimla. Idan wani abu bai goyi baya ba, ku cire shi."
          ],
          steps: ["Ku rubuta su wane ne ke sauraro da abin da suke damuwa da shi.", "Ku rubuta abin da kuke so su yi, su yi tunani ko su ji bayan haka.", "Ku rubuta babban ra'ayinku guda ɗaya a jimla ɗaya mai sauƙi.", "Ku duba: shin kowane abu da kuke shirin faɗa yana goyon bayan babban ra'ayin?"],
          words: [["Masu sauraro", "mutanen da ke sauraron jawabinku."], ["Babban ra'ayi", "babban saƙo ɗaya da kuke so mutane su tuna."]],
          slides: [
            { title: "Tambayoyi uku da farko", bullets: ["Su wane ne ke sauraro?", "Me ya kamata su yi, su yi tunani ko su ji bayan haka?", "Mene ne babban ra'ayina guda ɗaya?"] },
            { title: "Ku dace da masu sauraro", bullets: ["Masu ba da gudummawa: sakamako da tasiri", "Sababbin masu aikin sa-kai: yadda aikin juyi ɗaya yake", "Ƙungiyar matasa: wasanninsu a matsayin misalai"] },
            { title: "Babban ra'ayi ɗaya", bullets: ["Jimla ɗaya da yaro ɗan shekara 12 zai iya maimaitawa", "\"Manhajarmu tana ceton ƙananan shaguna awa biyu a mako.\"", "Idan bai goyi bayan ra'ayin ba, ku cire shi"] }
          ],
          tryIt: "Ku zaɓi batun da kuka sani sosai don jawabinku na minti 2. Ku rubuta masu sauraronku, burinku a gare su da babban ra'ayinku guda ɗaya a jimla ɗaya.",
          youCanNow: "tsara jawabi ta hanyar zaɓar masu sauraronku, burinku da babban ra'ayi ɗaya.",
          quickCheck: [
            { objective: "O1", q: "Me yasa za ku yi tunani game da masu sauraronku kafin ku rubuta jawabi?", options: ["Don ku yi amfani da manyan kalmomi", "Don jawabin ya dace da abin da suke buƙata da abin da suke damuwa da shi", "Don ku daɗe kuna magana", "Don ku tsallake atisaye"], answer: 1, why: "Sanin masu sauraro yana taimaka muku zaɓar abin da ke da muhimmanci a gare su." },
            { objective: "O1", q: "Kuna magana da matasan 'yan wasa game da shiga ƙungiyarku. Me za ku mai da babban ra'ayinku?", options: ["Cikakken tarihin ƙungiyar tun farkonta", "Jerin kowace doka", "Dalilin da yasa shiga ƙungiyar zai taimaka musu su girma kuma su ji daɗi", "Tarihin nasarorinku na kanku"], answer: 2, why: "Babban ra'ayi ya kamata ya zama saƙo ɗaya da waɗannan masu sauraro ke buƙatar tunawa." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Tsari: farawa mai jan hankali, batutuwa uku, rufewa",
          minutes: 5,
          goal: "Tsara jawabi na minti 2 mai farawa mai jan hankali, muhimman batutuwa uku da rufewa mai sarari.",
          text: [
            "Tsari mai sauƙi yana taimaka wa masu sauraronku su bi ku, kuma yana taimaka muku ku tuna abin da ke biye. Ku yi amfani da: farawa mai jan hankali, batutuwa uku, rufewa.",
            "Farawa mai jan hankali (hook) yana kama hankali a cikin daƙiƙa 15 na farko: gajeren labari, bayani mai ban mamaki, ko tambaya. \"A kakar da ta gabata mun yi rashin nasara a wasanni huɗu da maki ɗaya.\" Sannan ku ba da muhimman batutuwa uku. Uku yana da sauƙin tunawa. Ku goyi bayan kowanne da misali ko lamba. Sannan ku rufe: ku maimaita babban ra'ayinku ku faɗa wa mutane abin da za su yi a gaba. \"Ku zo da wuri a wannan makon. Zan kasance a can ƙarfe 6.\" ko \"Ku yi rajista don aikin juyi ɗaya kafin ranar Juma'a.\"",
            "Don jawabi na minti 2, wannan yana nufin kusan daƙiƙa 15 don farawa, daƙiƙa 30 ga kowane batu da daƙiƙa 15 don rufewa. Ku rubuta tsarin a matsayin gajerun bayanai, ba cikakken rubutu ba, don ku yi magana kamar yadda kuka saba."
          ],
          steps: ["Ku rubuta farawa mai jan hankali: labari, bayani mai ban mamaki ko tambaya.", "Ku rubuta muhimman batutuwa uku, kowanne da misali ɗaya ko lamba.", "Ku rubuta rufewa: ku maimaita babban ra'ayin ku nemi mataki ɗaya.", "Ku auna lokaci: kusan daƙiƙa 15 farawa, daƙiƙa 30 kowane batu, daƙiƙa 15 rufewa."],
          words: [["Farawa mai jan hankali (hook)", "farkon jawabi da ke kama hankali."], ["Kira zuwa mataki (call to action)", "faɗa wa masu sauraro abu ɗaya da za su yi a gaba."], ["Tsari (outline)", "gajeren jerin sassan jawabinku, bisa jeri."]],
          slides: [
            { title: "Farawa, batutuwa uku, rufewa", bullets: ["Yana da sauƙi ga masu sauraro su bi", "Yana da sauƙi a gare ku ku tuna"] },
            { title: "Farawa mai jan hankali (kusan daƙiƙa 15)", bullets: ["Gajeren labari", "Bayani mai ban mamaki", "Tambaya ga masu sauraro"] },
            { title: "Batutuwa uku (kusan daƙiƙa 30 kowanne)", bullets: ["Uku yana da sauƙin tunawa", "Ku goyi bayan kowanne da misali ko lamba"] },
            { title: "Rufewa (kusan daƙiƙa 15)", bullets: ["Ku maimaita babban ra'ayinku", "Mataki ɗaya mai sarari: \"Ku yi rajista kafin ranar Juma'a.\"", "Ku yi amfani da gajerun bayanai, ba cikakken rubutu ba"] }
          ],
          tryIt: "Ku rubuta tsarin jawabinku na minti 2: farawa mai jan hankali ɗaya, batutuwa uku kowanne da misali, da rufewa mai kira ɗaya zuwa mataki. Ku taƙaita shi a gajerun bayanai a shafi ɗaya ko a rubutu ɗaya a waya.",
          youCanNow: "tsara gajeren jawabi mai farawa mai jan hankali, muhimman batutuwa uku da rufewa mai kira zuwa mataki.",
          quickCheck: [
            { objective: "O2", q: "Mene ne aikin farawa mai jan hankali?", options: ["Kama hankali a cikin daƙiƙoƙin farko", "Rufe jawabin", "Jera batutuwanku uku", "Gode wa masu sauraro"], answer: 0, why: "Farawa mai jan hankali yana sa mutane su fara sauraro nan take." },
            { objective: "O2", q: "Tsarinku yana da muhimman batutuwa bakwai don jawabi na minti 2. Me za ku yi?", options: ["Ku yi magana da sauri don su shiga", "Ku ƙara slides", "Ku bar su duka ku tsallake rufewa", "Ku zaɓi batutuwa uku mafi muhimmanci"], answer: 3, why: "Batutuwa uku sun dace da lokacin kuma suna da sauƙin tunawa." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Slides masu sauƙi da ke taimakawa, ba masu cutarwa ba",
          minutes: 4,
          goal: "Yi slides masu sauƙi, ko ku yanke shawara cewa ba ku buƙatar su.",
          text: [
            "Slides (hotunan gabatarwa) ya kamata su taimaki masu sauraro, ba su riƙe rubutunku ba. Jawabai gajeru masu kyau da yawa ba sa amfani da slides kwata-kwata. Ku yi amfani da su idan hoto, jadawali ko 'yan kalmomi muhimmai suna sa batunku ya fi sarari.",
            "Ƙa'idodin da ke aiki: ra'ayi ɗaya a kowane slide; gajeren take; 'yan kalmomi kaɗan ko hoto ɗaya kawai; manyan haruffa da mutanen da ke baya za su iya karantawa; bambanci mai ƙarfi, kamar baƙaƙen haruffa a kan farin bango. Kada ku taɓa karanta slides ɗinku da babbar murya kalma da kalma; masu sauraro suna karantawa da sauri fiye da yadda kuke magana.",
            "Kayan aiki kyauta kamar Google Slides, Microsoft PowerPoint na intanet da Canva suna ba ku damar yin slides a burauzar intanet. Mataimakin AI zai iya ba da shawarar taken slides daga tsarinku, amma ku rage rubutunsa sosai kuma ku tabbatar da kowane bayani da lamba da ya ba ku."
          ],
          steps: ["Ku tambaya: shin slide zai sa wannan batu ya fi sarari? Idan ba haka ba, ku tsallake shi.", "Ra'ayi ɗaya a kowane slide da gajeren take.", "Ku yi amfani da 'yan kalmomi ko hoto ɗaya.", "Ku sa haruffan su yi girma da bambanci mai ƙarfi.", "Ku yi atisaye ba tare da karanta slides da babbar murya ba."],
          words: [["Tarin slides (slide deck)", "jerin slides don jawabi."], ["Bambanci (contrast)", "yadda haruffa ke fitowa sarai daga bango."]],
          slides: [
            { title: "Slides suna taimakon masu sauraro", bullets: ["Ba rubutunku ba ne", "Jawabai gajeru masu kyau da yawa ba sa amfani da su"] },
            { title: "Ƙa'idodin slides", bullets: ["Ra'ayi ɗaya a kowane slide", "'Yan kalmomi ko hoto ɗaya", "Manyan haruffa, bambanci mai ƙarfi"] },
            { title: "Kada ku karanta su", bullets: ["Mutane suna karantawa da sauri fiye da yadda kuke magana", "Ku yi magana game da slide a maimakon haka"] },
            { title: "Kayan aiki kyauta", bullets: ["Google Slides, PowerPoint na intanet, Canva", "AI zai iya ba da shawarar take; ku rage kuma ku tabbatar"] }
          ],
          tryIt: "Ku yanke shawara ko jawabinku na minti 2 yana buƙatar slides. Idan haka ne, ku yi waɗanda ba su wuce uku ba a kayan aiki kyauta, ra'ayi ɗaya kowanne. Idan ba haka ba, ku rubuta jimla ɗaya game da dalilin da yasa jawabin yake aiki ba tare da su ba.",
          youCanNow: "yin slides masu sauƙi masu sauƙin karantawa, ko yanke shawara da ƙarfin gwiwa ku yi magana ba tare da su ba.",
          quickCheck: [
            { objective: "O3", q: "Yaushe slide yake taimakon jawabi?", options: ["Idan yana riƙe da dukan rubutunku", "Idan hoto, jadawali ko 'yan kalmomi suna sa batu ya fi sarari", "Idan ba ku da abin faɗa", "Koyaushe, a kowace jimla"], answer: 1, why: "Slides suna taimakawa ne kawai idan suna sa batu ya fi sarari." },
            { objective: "O3", q: "Mataimakin AI ya ba ku slide cike da kalmomi 80. Me za ku yi?", options: ["Ku karanta shi kalma da kalma", "Ku rage girman haruffa", "Ku ƙara kalmomi", "Ku rage shi zuwa gajeren take da 'yan kalmomi, kuma ku tabbatar da bayanan"], answer: 3, why: "Slides masu sauƙi da aka tabbatar da bayanansu suna taimakawa; tarin rubutu yana cutarwa." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Tsara jawabinku",
        questions: [
          { objective: "O1", q: "Me ya kamata ku yanke shawara a kai kafin ku rubuta jawabinku?", options: ["Kayan da za ku sa kawai", "Yawan slides da za ku yi amfani da su", "Masu sauraronku, burinku da babban ra'ayinku guda ɗaya", "Tsawon lokacin tambayoyin"], answer: 2, why: "Waɗannan uku ne ke yanke duk sauran abubuwa a cikin jawabin." },
          { objective: "O2", q: "Wanne ne farawa mai jan hankali mai kyau?", options: ["\"A kakar da ta gabata mun yi rashin nasara a wasanni huɗu da maki ɗaya.\"", "\"Ɗm, to, zan yi magana yanzu.\"", "\"Ku yi haƙuri, ban iya wannan ba.\"", "Karanta slide na take"], answer: 0, why: "Gajeren labari ko bayani mai ban mamaki yana kama hankali." },
          { objective: "O2", q: "Me yasa ake amfani da muhimman batutuwa uku?", options: ["Doka ce", "Batutuwa da yawa koyaushe suna nuna wayo", "Yana cike lokaci", "Uku yana da sauƙi ga mutane su tuna"], answer: 3, why: "Batutuwa uku suna da sauƙin bi da tunawa." },
          { objective: "O2", q: "Rufewa mai kyau tana yin me?", options: ["Tana ƙarewa da \"Shi ke nan, ina ganin haka\"", "Tana maimaita babban ra'ayin kuma tana neman mataki ɗaya", "Tana ƙara sabon batu na huɗu", "Tana neman gafara saboda jawabin"], answer: 1, why: "Rufewa mai sarari tana barin mutane da sanin abin da za su yi." },
          { objective: "O3", q: "Wane slide ne ya fi kyau?", options: ["Batutuwa goma da ƙananan haruffa", "Cikakken shafin rubutunku", "Ra'ayi ɗaya, gajeren take da manyan haruffa", "Haruffa masu launin toka mai haske a kan fari"], answer: 2, why: "Slides masu sauƙi masu sauƙin karantawa suna taimakon masu sauraro." }
        ]
      }
    },
    {
      name: "Babi na 2: Gabatarwa da ƙarfin gwiwa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Atisaye da fargaba",
          minutes: 5,
          goal: "Yi atisayen jawabi da babbar murya kuma ku yi amfani da hanyoyi masu sauƙi don shawo kan fargaba.",
          text: [
            "Fargaba abu ne na yau da kullum, har ga ƙwararrun masu magana da 'yan wasa kafin babban wasa. Saurin bugun zuciya da rawar hannaye jikinku ne ke shiryawa. Ba sai kun kawar da fargaba ba; kuna buƙatar amfani da ita.",
            "Atisaye shi ne magani mafi kyau. Ku faɗi jawabin da babbar murya aƙalla sau uku, a tsaye, tare da agogon ƙirga lokaci. Sannan ku ɗauke shi a bidiyo a wayarku ku kalla. Sannan ku gwada shi a gaban aboki ɗaya, ɗan iyali, koci ko abokin aiki. Kowane zagaye, yana ƙara sauƙi.",
            "A ranar: ku yi numfashi a hankali (ku shaƙa har ƙirga 4, ku fitar har ƙirga 6) kafin ku fara; ku riƙe bayananku ko ku huta da hannayenku; ku nemi fuska mai fara'a a cikin ɗakin; kuma ku tuna cewa masu sauraro suna son ku yi nasara. Idan kun manta inda kuke, ku dakata, ku duba bayananku ku ci gaba. Dakatawa tana yi muku tsawo amma a gare su gajeriya ce."
          ],
          steps: ["Ku faɗi jawabin da babbar murya sau uku, a tsaye, tare da agogon ƙirga lokaci.", "Ku ɗauke shi a bidiyo a wayarku ku kalla.", "Ku yi atisaye sau ɗaya a gaban mutum ɗaya ku nemi shawara ɗaya.", "Kafin ku fara: ku shaƙa har ƙirga 4, ku fitar har ƙirga 6.", "Idan kun manta inda kuke: ku dakata, ku duba bayanai, ku ci gaba."],
          words: [["Bita (rehearse)", "yin atisayen jawabi da babbar murya kafin a gabatar da shi."], ["Fargaba (nerves)", "jin tsoro kafin wani abu mai muhimmanci; abu ne na yau da kullum kuma yana da amfani."]],
          slides: [
            { title: "Fargaba abu ne na yau da kullum", bullets: ["Har ƙwararru da 'yan wasa suna jin ta", "Jikinku yana shiryawa", "Ku yi amfani da ita; kada ku yaƙe ta"] },
            { title: "Ku yi atisaye da babbar murya", bullets: ["Sau uku, a tsaye, tare da agogon ƙirga lokaci", "Ku ɗauki bidiyo ku kalla", "Ku gwada a gaban mutum ɗaya"] },
            { title: "A ranar", bullets: ["Numfashi: ku shaƙa har 4, ku fitar har 6", "Ku nemi fuska mai fara'a", "Masu sauraro suna son ku yi nasara"] },
            { title: "Kun manta inda kuke?", bullets: ["Ku dakata", "Ku duba bayananku", "Ku ci gaba: dakatawar tana yi musu gajarta"] }
          ],
          tryIt: "Ku tashi tsaye ku faɗi jawabinku na minti 2 da babbar murya sau uku tare da agogon ƙirga lokaci. Ku rubuta tsawon lokacin kowane zagaye kuma ku cire duk abin da ke sa ku wuce minti 2.",
          youCanNow: "yin bitar jawabi da babbar murya, auna lokacinsa, da amfani da numfashi da dakatawa don shawo kan fargaba.",
          quickCheck: [
            { objective: "O4", q: "Me ake nufi idan zuciyarku tana bugawa da sauri kafin jawabi?", options: ["Jikinku yana shiryawa, kuma hakan abu ne na yau da kullum", "Ya kamata ku soke jawabin", "Ba ku shirya ba", "Ba ku da lafiya"], answer: 0, why: "Fargaba alama ce ta yau da kullum cewa jikinku yana shiryawa." },
            { objective: "O4", q: "Zagayen atisayenku yana ɗaukar minti 3, amma kuna da minti 2. Me za ku yi?", options: ["Ku yi magana da sauri sosai", "Ku tsallake rufewa a ranar", "Ku cire sassan da ba sa goyon bayan babban ra'ayinku ku sake auna lokaci", "Ku nemi ƙarin lokaci a ranar"], answer: 2, why: "Cire ƙarin sassa yana sa jawabin ya dace da lokaci kuma ya mai da hankali." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Murya da motsin jiki",
          minutes: 5,
          goal: "Yi amfani da muryarku, idanunku da jikinku don ku yi kama da masu ƙarfin gwiwa.",
          text: [
            "Yadda kuke faɗin abu yana da muhimmanci kamar abin da kuke faɗa. Ku yi magana a hankali kaɗan da ƙarfi kaɗan fiye da hira ta yau da kullum. Ku dakata bayan muhimman batutuwa don su zauna a zuciya. Ku canja sautin muryarku don kada ku yi magana iri ɗaya babu canji, kuma ku daina kalmomin cike gurbi kamar \"ɗm\" da \"wai\" ta hanyar dakatawa a maimakon haka.",
            "Ku tsaya a miƙe ƙafafunku a buɗe kamar faɗin kafaɗunku, nauyinku daidai a kan ƙafafu biyu. Ku bar hannayenku a sake a gefenku ko ku yi amfani da su don motsi na halitta; ku guji haɗa hannaye a ƙirji ko sa su a aljihu. Ku kalli mutane na gaske, ɗaya bayan ɗaya, na jimla ɗaya ko biyu kowanne. A kiran bidiyo, ku kalli kyamara, ba fuskarku a kan allo ba.",
            "Al'adu daban-daban suna fahimtar kallon ido da motsin hannu ta hanyoyi daban-daban, don haka ku lura da masu sauraronku ku daidaita. Burin shi ne ku yi kama da masu natsuwa, masu buɗaɗɗen zuciya kuma masu sha'awar su."
          ],
          steps: ["Ku yi magana a hankali kaɗan da ƙarfi kaɗan fiye da yadda kuka saba.", "Ku dakata bayan muhimman batutuwa.", "Ku maye gurbin \"ɗm\" da gajeriyar dakatawa.", "Ku tsaya a miƙe, ƙafafu a faɗin kafaɗu, hannaye a sake.", "Ku kalli mutum ɗaya na jimla ɗaya, sannan wani.", "A bidiyo, ku kalli kyamara."],
          words: [["Motsin jiki (body language)", "abin da tsayuwarku, fuskarku, hannayenku da idanunku ke faɗa ba tare da kalmomi ba."], ["Kalmomin cike gurbi (filler words)", "sautuka kamar \"ɗm\", \"ee\" da \"wai\" da ke cike shiru."]],
          slides: [
            { title: "Muryarku", bullets: ["A hankali kaɗan da ƙarfi kaɗan", "Ku dakata bayan muhimman batutuwa", "Ku canja sauti; ku maye gurbin \"ɗm\" da dakatawa"] },
            { title: "Jikinku", bullets: ["Ku tsaya a miƙe, ƙafafu a faɗin kafaɗu", "Hannaye a sake ko motsi na halitta", "Kada ku haɗa hannaye a ƙirji ko sa su a aljihu"] },
            { title: "Idanunku", bullets: ["Mutum ɗaya, jimla ɗaya, sannan na gaba", "A bidiyo: ku kalli kyamara"] },
            { title: "Ku karanta yanayin ɗakin", bullets: ["Al'adu sun bambanta game da kallon ido da motsin hannu", "Ku yi niyyar natsuwa, buɗaɗɗen zuciya da sha'awa"] }
          ],
          tryIt: "Ku ɗauki daƙiƙa 30 na jawabinku a bidiyo a wayarku. Ku kalla ba tare da sauti ba: ku duba tsayuwa, hannaye da idanu. Sannan ku saurara a rufe idanu: ku ƙirga yawan \"ɗm\" ku lura da saurinku. Ku zaɓi abu ɗaya da za ku gyara.",
          youCanNow: "amfani da muryarku, tsayuwarku, hannayenku da kallon ido don ku bayyana masu natsuwa da ƙarfin gwiwa.",
          quickCheck: [
            { objective: "O5", q: "Mece ce kalmar cike gurbi?", options: ["Muhimmiyar kalma a babban ra'ayinku", "Kalma kamar \"ɗm\" ko \"wai\" da ke cike dakatawa", "Kalma a kan slide", "Kalmar ƙarshe ta jawabinku"], answer: 1, why: "Kalmomin cike gurbi suna cike shiru; gajeriyar dakatawa ta fi kyau." },
            { objective: "O5", q: "Kuna kallon bidiyonku, sai kuka ga kuna kallon ƙasa. Me za ku yi?", options: ["Ku kalli mutum ɗaya na jimla ɗaya, sannan wani", "Ku rufe idanunku yayin da kuke magana", "Ku karanta bayananku duk lokacin", "Ku kalli rufin ɗaki kawai"], answer: 0, why: "Kallon ido da mutum ɗaya a lokaci ɗaya yana nuna ƙarfin gwiwa." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Amsa tambayoyi",
          minutes: 5,
          goal: "Amsa tambayoyi bayan jawabi cikin natsuwa da sarari, har da waɗanda ba za ku iya amsawa ba.",
          text: [
            "Tambayoyi suna nufin mutane suna sauraro. Ku shirya ta hanyar rubuta tambayoyi uku da ya fi yiwuwa a yi muku da gajeriyar amsa ga kowacce.",
            "Idan wani ya yi tambaya: ku saurari dukan tambayar, ku gode masa, ku maimaita ko ku sake faɗin ta da wasu kalmomi don kowa ya ji. Ku amsa a taƙaice, cikin daƙiƙa 30 ko ƙasa da haka idan za ku iya, sannan ku tambaya: \"Shin wannan ya amsa tambayarku?\" Idan ba ku sani ba, ku faɗa da gaskiya: \"Ban sani ba, amma zan bincika in dawo muku da amsa kafin ranar Juma'a.\" Sannan ku yi haka. Kada ku taɓa ƙirƙirar abu.",
            "Don tambaya mai zafi ko wadda ba ta da alaƙa da batun, ku natsu ku yi ladabi: \"Wannan damuwa ce mai ma'ana. Mu yi magana bayan haka don mu ba ta lokacin da ya dace.\" Ɗan jarida ko mai ɗaukar nauyi (sponsor) shi ma yana iya yin tambayoyi masu wuya; ku yi gada zuwa babban ra'ayinku: \"Abin da zan iya faɗa muku shi ne...\". Ku ƙare lokacin tambayoyi da rufewarku kuma, don babban ra'ayinku ya zama abu na ƙarshe da mutane suka ji."
          ],
          steps: ["Kafin: ku rubuta tambayoyi uku da ake iya yi da gajerun amsoshi.", "Ku saurari dukan tambayar.", "Ku gode musu ku maimaita ta don kowa.", "Ku amsa a taƙaice, sannan ku tambaya ko ta amsa musu.", "Ba ku sani ba? Ku faɗa ku yi alƙawarin dawowa da amsa.", "Ku ƙare ta hanyar maimaita rufewarku."],
          words: [["Q&A (tambayoyi da amsoshi)", "gajartawar questions and answers: lokacin bayan jawabi don tambayoyi."], ["Gada (bridge)", "kalmomin da ke mayar da amsa mai wuya zuwa babban saƙonku."]],
          slides: [
            { title: "Ku shirya", bullets: ["Ku rubuta tambayoyi uku da ake iya yi", "Ku rubuta gajeriyar amsa ga kowacce"] },
            { title: "Yadda ake amsawa", bullets: ["Ku saurari dukan tambayar", "Ku gode musu ku maimaita ta", "Ku amsa a taƙaice, sannan ku tambaya"] },
            { title: "Idan ba ku sani ba", bullets: ["Ku faɗa da gaskiya", "\"Zan bincika in dawo muku da amsa kafin ranar Juma'a.\"", "Kada ku taɓa ƙirƙira"] },
            { title: "Tambayoyi masu wuya", bullets: ["Ku natsu ku yi ladabi", "Ku ba da shawarar yin magana bayan haka", "Gada: \"Abin da zan iya faɗa muku shi ne...\""] }
          ],
          tryIt: "Aikin ƙarshe: ku ɗauki jawabinku na minti 2 a bidiyo a wayarku. Sannan ku sa aboki ya yi muku tambayoyi biyu (ko ku tambayi kanku biyu) ku ɗauki amsoshinku a bidiyo. Ku kalla, ku rubuta ƙarfi ɗaya da gyara ɗaya, sannan ku sake ɗaukar jawabin sau ɗaya.",
          youCanNow: "gabatar da gajeren jawabi da amsa tambayoyi cikin natsuwa, har da waɗanda ba za ku iya amsawa ba tukuna.",
          quickCheck: [
            { objective: "O6", q: "Mece ce gada a cikin amsa tambayoyi?", options: ["Slide da ke haɗa batutuwa biyu", "Dakatawa kafin jawabinku", "Kalmomin da ke kai ku daga tambayar zuwa babban saƙonku", "Hanyar guje wa kowace tambaya"], answer: 2, why: "Gada kamar \"Abin da zan iya faɗa muku shi ne...\" tana dawo da ku zuwa saƙonku." },
            { objective: "O6", q: "Wani ya yi tambayar da ba za ku iya amsawa ba. Me za ku ce?", options: ["Ku ƙirƙiri amsa", "Ku yi watsi da tambayar", "Ku faɗa masa tambaya ce marar kyau", "\"Ban sani ba, amma zan bincika in dawo muku da amsa kafin ranar Juma'a.\""], answer: 3, why: "Gaskiya tare da ƙayyadadden ranar dawowa da amsa tana kiyaye amana." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Gabatarwa da ƙarfin gwiwa",
        questions: [
          { objective: "O4", q: "Mece ce hanya mafi kyau ta shirya jawabi?", options: ["Ku karanta shi a zuci sau ɗaya", "Ku faɗe shi da babbar murya sau da yawa, a tsaye, tare da agogon ƙirga lokaci", "Ku haddace slides kawai", "Ku yi ba tare da shiri ba"], answer: 1, why: "Atisaye da babbar murya shi ne magani mafi kyau ga fargaba." },
          { objective: "O4", q: "Kun manta inda kuke a tsakiyar jawabi. Me za ku yi?", options: ["Ku nemi gafara sau da yawa", "Ku bar dandamali", "Ku sake farawa daga farko", "Ku dakata, ku duba bayananku ku ci gaba"], answer: 3, why: "Gajeriyar dakatawa abu ne na yau da kullum kuma da wuya a lura da ita." },
          { objective: "O5", q: "A kiran bidiyo, ina ya kamata ku kalla yayin da kuke magana?", options: ["Kyamara", "Fuskarku a kan allo", "Madannin kwamfuta", "Waje ta taga"], answer: 0, why: "Kallon kyamara yana kama da kallon ido." },
          { objective: "O5", q: "Wace hanya ce mai kyau ta daina kalmomin cike gurbi kamar \"ɗm\"?", options: ["Ku yi magana da sauri", "Ku maye gurbinsu da gajeriyar dakatawa", "Ku ce \"wai\" a maimakon haka", "Kada ku taɓa daina magana"], answer: 1, why: "Dakatawa tana nuna ƙarfin gwiwa; kalmomin cike gurbi ba sa nunawa." },
          { objective: "O6", q: "Wani ya yi tambayar da ba za ku iya amsawa ba. Mene ne ya fi kyau?", options: ["Ku ƙirƙiri amsa", "Ku yi watsi da shi", "Ku ce ba ku sani ba, ku yi alƙawarin dawowa da amsa a ƙayyadadden rana", "Ku canja batu ba tare da cewa komai ba"], answer: 2, why: "Gaskiya tare da dawowa da amsa tana kiyaye amana." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Yin Magana a Gaban Jama'a da Gabatarwa",
    questions: [
      { objective: "O1", q: "\"Babban ra'ayi\" na jawabi shi ne:", options: ["Sashe mafi tsawo", "Babban saƙo ɗaya da kuke so mutane su tuna", "Zanen slides ɗinku", "Taken slide ɗinku na farko"], answer: 1, why: "Duk abin da ke cikin jawabin yana goyon bayan babban ra'ayin." },
      { objective: "O1", q: "Za ku yi magana da sababbin masu aikin sa-kai game da rumbun abincinku. Me ya kamata ku mai da hankali a kai?", options: ["Takardun harajinku", "Bayanan taron kwamitin bara", "Kowane shiri da kuke gudanarwa", "Yadda aikin juyi ɗaya na mai aikin sa-kai yake"], answer: 3, why: "Ku sa jawabin ya dace da abin da waɗannan masu sauraro ke buƙata." },
      { objective: "O1", q: "Idan wani sashe na jawabinku bai goyi bayan babban ra'ayin ba, ya kamata ku:", options: ["Cire shi", "Tsawaita shi", "Sa shi a farko", "Sa shi a kan slide"], answer: 0, why: "Cirewa yana sa jawabin ya kasance mai sarari da gajere." },
      { objective: "O2", q: "Tsarin jawabi mai sauƙi a wannan kwas shi ne:", options: ["Neman gafara, bayanai, sallama", "Slides, ƙarin slides, tambayoyi", "Farawa mai jan hankali, batutuwa uku, rufewa", "Labari, labari, labari"], answer: 2, why: "Farawa mai jan hankali, batutuwa uku da rufewa suna da sauƙin bi." },
      { objective: "O2", q: "A jawabi na minti 2, kusan tsawon lokacin kowane muhimmin batu nawa ne?", options: ["Daƙiƙa 5", "Daƙiƙa 30", "Minti 2", "Minti 10"], answer: 1, why: "Kusan daƙiƙa 15 farawa, daƙiƙa 30 kowane batu, daƙiƙa 15 rufewa." },
      { objective: "O2", q: "Wanne ne kira zuwa mataki mai sarari?", options: ["\"Na gode, ina ganin haka.\"", "\"Akwai tambayoyi? Babu? To.\"", "\"Wataƙila ku yi tunani a kai wani lokaci.\"", "\"Ku yi rajista don aikin juyi ɗaya kafin ranar Juma'a.\""], answer: 3, why: "Yana faɗa wa mutane ainihin abin da za su yi da lokacin yinsa." },
      { objective: "O2", q: "Me yasa za ku yi amfani da gajerun bayanai maimakon cikakken rubutu?", options: ["Kuna yin magana kamar yadda kuka saba", "Ba a yarda da cikakken rubutu ba", "Bayanai sun fi tsawo", "Don ku karanta kowace kalma"], answer: 0, why: "Gajerun bayanai suna sa ku yi magana a sake yayin da kuke bin tsarin." },
      { objective: "O3", q: "Yaushe ya kamata ku yi amfani da slide?", options: ["Don kowace jimla", "Idan hoto, jadawali ko 'yan kalmomi suna sa batu ya fi sarari", "Kada a taɓa", "Don rubutunku kawai"], answer: 1, why: "Slides ya kamata su taimaki masu sauraro su fahimta." },
      { objective: "O3", q: "Me yasa ba za ku karanta slides kalma da kalma ba?", options: ["Yana da sauri sosai", "Slides sirri ne", "Masu sauraro suna karantawa da sauri fiye da yadda kuke magana", "Ya saɓa wa doka"], answer: 2, why: "Karanta slides yana sa masu sauraro su daina bin ku." },
      { objective: "O3", q: "Mataimakin AI ya ba ku rubutun slide. Me ya kamata ku yi?", options: ["Ku yi amfani da shi duka kamar yadda yake", "Ku rage shi ku tabbatar da kowane bayani da lamba", "Ku karanta shi da babbar murya kalma da kalma", "Ku ƙara rubutu"], answer: 1, why: "AI yana iya yin kuskure kuma ya yi tsawon magana; ku ne masu iko." },
      { objective: "O4", q: "Fargaba kafin jawabi:", options: ["Alama ce da ya kamata ku soke", "Ba kasafai ake samunta ba", "Ta masu farawa ce kawai", "Abu ne na yau da kullum, jikinku ne ke shiryawa"], answer: 3, why: "Har ƙwararru suna jin fargaba; kuna iya amfani da ita." },
      { objective: "O4", q: "Wane mataki na atisaye ke zuwa bayan faɗin jawabin da babbar murya sau uku?", options: ["Ku ɗauke shi a bidiyo a wayarku ku kalla", "Ku goge bayananku", "Ku ƙara batutuwa goma", "Ku daina atisaye"], answer: 0, why: "Kallon bidiyo yana nuna abin da za a gyara." },
      { objective: "O4", q: "Hanya mai sauri ta natsuwa kafin ku fara ita ce:", options: ["Shan kofi mai yawa", "Shaƙa har ƙirga 4, fitarwa har ƙirga 6", "Gudu a wuri ɗaya na minti 5", "Karanta duk imel ɗinku"], answer: 1, why: "Numfashi a hankali yana kwantar da jiki." },
      { objective: "O5", q: "Wace tsayuwa ce ke nuna ƙarfin gwiwa?", options: ["Hannaye a haɗe a ƙirji", "Hannaye a aljihu", "Tsayuwa a miƙe, ƙafafu a faɗin kafaɗu, hannaye a sake", "Jingina da bango"], answer: 2, why: "Tsayuwa a buɗe kuma a tsaye tana nuna natsuwa da ƙarfin gwiwa." },
      { objective: "O5", q: "Kallon ido mai kyau da jama'a yana nufin:", options: ["Kallon mutum ɗaya duk lokacin", "Kallon ƙasa", "Kallon rufin ɗaki", "Kallon mutum ɗaya na jimla ɗaya, sannan wani"], answer: 3, why: "Yana haɗa ku da mutane da yawa ɗaya bayan ɗaya." },
      { objective: "O5", q: "Idan aka kwatanta da hira ta yau da kullum, ya kamata ku yi magana:", options: ["A hankali kaɗan da ƙarfi kaɗan", "Da sauri sosai", "Da raɗa", "Ba tare da kowace dakatawa ba"], answer: 0, why: "A hankali da ƙarfi yana taimaka wa kowa ya ji kuma ya bi." },
      { objective: "O6", q: "Me yasa za ku maimaita tambaya kafin ku amsa?", options: ["Don ɓata lokaci", "Don kowa ya ji ta kuma ku tabbata kun fahimta", "Don nuna kai", "Domin mai tambayar ya manta ta"], answer: 1, why: "Maimaitawa tana taimakon ɗakin kuma tana tabbatar da fahimtarku." },
      { objective: "O6", q: "Mai ɗaukar nauyi ya yi tambaya mai wuya. \"Gada\" mai kyau ita ce:", options: ["\"Ba ni da abin cewa.\" sannan ku tafi", "\"Wannan tambayar wauta ce.\"", "\"Abin da zan iya faɗa muku shi ne...\" sannan ku koma babban saƙonku", "Ƙirƙirar lambobi"], answer: 2, why: "Gada tana amsawa cikin ladabi kuma tana komawa saƙonku." },
      { objective: "O6", q: "Wani ya kawo ƙorafi da ba shi da alaƙa da batun a lokacin Q&A. Mene ne ya fi kyau?", options: ["Ku yi gardama har ya daina", "Ku yi watsi da shi gaba ɗaya", "Ku ƙare jawabin da wuri", "Ku yi ladabi ku ba da shawarar yin magana bayan haka"], answer: 3, why: "Yana girmama shi kuma yana kare lokacin kowa." },
      { objective: "O6", q: "Mene ne ya kamata ya zama abu na ƙarshe da mutane za su ji bayan Q&A?", options: ["Rufewarku da babban ra'ayinku kuma", "Neman gafara", "\"Ɗm, to, sai anjima.\"", "Sabon batu"], answer: 0, why: "Ƙarewa da rufewarku yana sa babban ra'ayin ya zauna a zuciya." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      1,
      3,
      5,
      8,
      10,
      12,
      13,
      15,
      17
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Babban ra'ayi",
        objective: "O1",
        notYet: "Jawabin ba shi da babban saƙo mai sarari.",
        meets: "Babban ra'ayi ɗaya da mai sauraro zai iya maimaitawa a jimla ɗaya.",
        exceeds: "Babban ra'ayin ya dace da masu sauraro da buƙatunsu."
      },
      {
        name: "Tsari",
        objective: "O2",
        notYet: "Babu farawa mai jan hankali, wani batu ko rufewa.",
        meets: "Farawa mai jan hankali, muhimman batutuwa uku masu misalai da rufewa mai kira ɗaya zuwa mataki.",
        exceeds: "Rufewar tana maimaita babban ra'ayin kuma kiran zuwa mataki yana da cikakken bayani."
      },
      {
        name: "Lokaci",
        objective: "O4",
        notYet: "Ya wuce minti 2, ko a fili ba a yi atisaye ba.",
        meets: "Ya ƙare cikin minti 2 ko ƙasa da haka, daga gajerun bayanai, ba cikakken rubutu ba.",
        exceeds: "Yana magana a sake kuma cikin natsuwa daga farko har ƙarshe."
      },
      {
        name: "Murya da jiki",
        objective: "O5",
        notYet: "Yana da wuyar ji, kalmomin cike gurbi da yawa, ko babu kallon ido.",
        meets: "Murya mai sarari, sauri daidai, tsayuwa mai kyau da kallon kyamara.",
        exceeds: "Bidiyo na biyu yana nuna gyaran da aka zaɓa bayan kallon na farko."
      },
      {
        name: "Amsa tambayoyi",
        objective: "O6",
        notYet: "Ya ƙirƙiri amsoshi ko ya yi fushi yana kare kansa.",
        meets: "Ya maimaita kowace tambaya ya amsa cikin natsuwa, ko ya yi alƙawarin dawowa da amsa.",
        exceeds: "Ya yi gada ya koma babban ra'ayin a ƙarshe."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka gabatar da jawabi ko gabatarwa a wurin aiki, makaranta, ƙungiya ko al'ummarsu cikin kwanaki 60 (binciken biyo baya)",
      "Masu koyo da suka ce sun ƙara ƙarfin gwiwa wajen magana a hirar neman aiki ko taro",
      "Masu koyo da bidiyonsu na biyu ya sami maki fiye da na farko bisa ma'aunin rubric",
      "Masu koyo da suka fara wani kwas na sana'a ko ƙwarewar mu'amala da mutane na Koach Learn cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya mai kyamara da agogon ƙirga lokaci",
      "Takarda ko rubutu a waya don tsarin jawabi",
      "Kayan aikin slides kyauta kamar Google Slides ko Canva (ba dole ba ne)",
      "Kusan minti 60 gaba ɗaya, da ƙarin lokaci don ɗaukar jawabin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku fara da ƙananan ƙungiyoyi ko bibbiyu don masu fargaba su yi atisaye da ƙarancin matsi.",
      "Ku ba da shawara da ƙarfi ɗaya da farko, sannan abu ɗaya da za a gyara.",
      "Ku bar masu koyo su ajiye bidiyoyinsu a sirri; su raba ne kawai idan sun zaɓa.",
      "Ku bar masu koyo su zaɓi batutuwan da suka sani sosai, kamar wasansu, aikinsu, kasuwancinsu ko manufarsu.",
      "Ku ba da maki ga bidiyon ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
