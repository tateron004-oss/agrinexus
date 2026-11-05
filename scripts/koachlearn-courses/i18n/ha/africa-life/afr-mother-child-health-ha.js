"use strict";

// Koach Learn course, Hausa (ha) translation of africa-life/afr-mother-child-health.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.
// Safety rule kept from the English: no medicine doses, treatment plans or diagnosis; every lesson points to the clinic, the midwife, the community health worker and the ministry of health.

const WHO_ANC = { name: "WHO (Hukumar Lafiya ta Duniya): Sababbin ƙa'idojin awon ciki don ciki mai lafiya (haɗuwa takwas, ta farko a cikin makonni 12 na farko)", url: "https://www.who.int/news/item/07-11-2016-new-guidelines-on-antenatal-care-for-a-positive-pregnancy-experience" };
const WHO_MATERNAL = { name: "Takardar bayanin WHO: Mutuwar mata masu ciki da masu haihuwa (manyan dalilai; kulawar ƙwararru kafin haihuwa, lokacin haihuwa da bayanta)", url: "https://www.who.int/news-room/fact-sheets/detail/maternal-mortality" };
const WHO_NEWBORN = { name: "Takardar bayanin WHO: Mutuwar jarirai (kula da jariri da alamun haɗari a jariri)", url: "https://www.who.int/news-room/fact-sheets/detail/newborn-mortality" };
const WHO_IYCF = { name: "Takardar bayanin WHO: Ciyar da jarirai da ƙananan yara", url: "https://www.who.int/news-room/fact-sheets/detail/infant-and-young-child-feeding" };
const WHO_DIARRHOEA = { name: "Takardar bayanin WHO: Cutar gudawa (rigakafi, kulawa a gida, alamun ƙarancin ruwa a jiki)", url: "https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease" };
const WHO_IMMUNIZATION = { name: "Takardar bayanin WHO: Yawan allurar rigakafi (cututtukan da rigakafin yara ke karewa)", url: "https://www.who.int/news-room/fact-sheets/detail/immunization-coverage" };

module.exports = {
  id: "afr-mother-child-health-ha",
  lang: "ha",
  translationOf: "afr-mother-child-health",
  category: "Africa: Life and Work",
  name: "Lafiyar Uwa da Ɗa: Ciki, Haihuwa da Shekarun Farko",
  skills: "Tsara ziyarar asibiti lokacin ciki, Gane alamun haɗari lokacin ciki da bayan haihuwa, Yin tsarin haihuwa, Kula da jariri a kwanakin farko, Gane alamun haɗari a jariri ko ƙaramin yaro, Kiyaye katin lafiyar yaro a kan lokaci",
  outcome: "yin sauƙaƙan tsarin lafiyar iyali don ciki da ƙaramin yaro: lokacin zuwa asibiti, inda za a haifi jaririn da yadda za ku isa can, yadda za ku kula da jaririn, waɗanne alamun haɗari ke nufin \"ku je asibiti yanzu\", da yadda za ku kiyaye allurar rigakafi da awon girma a kan lokaci.",
  about: [
    "Wannan kwas ɗin na iyaye mata ne da mata masu ciki, iyaye maza, kakanni mata, manyan yayye mata da duk wanda ke taimakon kula da mace mai ciki ko ƙaramin yaro, a garuruwa da ƙauyuka a faɗin Afirka. Ba sai kun yi wani horo na lafiya ba.",
    "Babi na 1 yana magana kan ciki da haihuwa: ziyarar asibiti, alamun haɗari da ke nufin \"ku je yanzu\", da tsarin haihuwa. Babi na 2 yana magana kan kwanakin farko da shekarun farko na jariri: kula da jariri, alamun haɗari a jarirai da ƙananan yara, da ciyarwa, allurar rigakafi da awon girma.",
    "Wannan kwas ɗin yana koyar da rigakafi, halaye masu kyau na lafiya da lokacin neman taimako. Ba ya faɗa muku wane magani za ku sha ko nawa, kuma ba ya maye gurbin nas, ungozoma, likita ko ma'aikacin lafiya na al'umma. Koyaushe ku bi asibitinku da ma'aikatar lafiya ta ƙasarku. Kowane darasi yana ɗaukar kusan minti biyar kuma yana ƙarewa da aiki. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku rubuta tsarin lafiyar iyali na shafi ɗaya don wani ciki ko ƙaramin yaro a iyalinku (ko misali, kamar Amina, mai ciki na wata 5 a Kano, ko jariri Kofi, ɗan wata 3, a Kumasi): ziyarar asibiti da suka rage, tsarin haihuwa (wuri, ƙwararren ma'aikacin lafiya, abin hawa, kuɗin da aka ajiye, wanda zai raka ta da wanda zai kula da gida), matakan kula da jariri a rana ta farko, alamun haɗari ga uwa da ɗa tare da asibiti mafi kusa da lambar wayar gaggawa, da ranakun allurar rigakafi da awon girma na gaba daga katin lafiya.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Iyaye mata da mata masu ciki, iyaye maza, kakanni mata da sauran masu kulawa a Kenya, Najeriya, Ghana, Senegal, Côte d'Ivoire, Masar da faɗin Afirka. Da yawa suna zaune nesa da asibiti, suna amfani da wayar Android mai sauƙi da data mai tsada, kuma suna samun shawarar lafiya daga iyali, maƙwabta da ma'aikacin lafiya na al'umma.",
    startingPoint: "Yawancinsu sun san cewa ya kamata mace mai ciki ta je asibiti, amma da yawa suna farawa a makare, suna zuwa ƙasa da yadda aka ba da shawara, ko suna jira a gida idan alamar haɗari ta bayyana. Kaɗan ne ke da rubutaccen tsarin haihuwa, kuɗin abin hawa da aka ajiye, ko jerin alamun haɗari na jariri da yaro. Da yawa suna ajiye katin lafiyar yaro amma ba sa karanta ranar allurar rigakafi ta gaba da ke cikinsa.",
    gap: "Yankin Afirka kudu da Sahara ne ke da mafi yawan mutuwar mata lokacin ciki da haihuwa a duniya, kuma wata na farko shi ne lokaci mafi haɗari ga jariri. Da yawa daga cikin waɗannan mutuwar suna faruwa ne saboda jinkiri: wajen yanke shawarar zuwa, wajen isa can, da wajen samun kulawa. Iyalan da ke shiri tun da wuri, suka san alamun haɗari kuma suke zuwa ziyara a kan lokaci suna ɗaukar mataki da sauri kuma suna kiyaye lafiyar uwaye da yara.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; ana bayyana kowace kalmar lafiya",
      "Na'urori: waya mai sauƙi; ana kuma iya koyar da kwas ɗin da baki a taron jama'a ko taron mata",
      "Hidimomin lafiya, shirye-shiryen haihuwa kyauta, jadawalin allurar rigakafi da katunan lafiya sun bambanta daga ƙasa zuwa ƙasa kuma suna canjawa: masu koyo suna tambayar asibitinsu ko ma'aikatar lafiya",
      "Babu yawan magani, tsarin magani ko gano cuta: kwas ɗin yana koyar da rigakafi da lokacin neman taimako",
      "Sirri: ba dole ba ne masu koyo su faɗi bayanan cikinsu ko na lafiyarsu a gaban jama'a"
    ],
    prerequisites: "Babu."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan akwai wani ciki a iyalinku kuma kun san watan haihuwa", action: "rubuta tsarin ziyarar asibiti don cikin da zai fara a cikin makonni 12 na farko", standard: "da aƙalla haɗuwa takwas kamar yadda WHO ta ba da shawara, ko adadin da asibitinku ya ba ku" },
    { id: "O2", condition: "Idan aka ba ku jerin alamomi lokacin ciki ko bayan haihuwa", action: "zaɓar alamun haɗari da ke nufin dole matar ta je asibiti yanzu", standard: "kuna samun aƙalla 4 cikin 5 daidai kuma kuna zaɓar \"ku je yanzu\" maimakon \"mu jira mu gani\"" },
    { id: "O3", condition: "Don haihuwar da ke tafe", action: "rubuta tsarin haihuwa da ke ambaton cibiyar lafiya, abin hawa, kuɗin da aka ajiye da mutanen da za su taimaka", standard: "an cike kowane sashe kuma iyali sun amince da shi kafin wata na ƙarshe" },
    { id: "O4", condition: "Don rana ta farko ta jariri", action: "jera matakan kula da jariri: sa jaririn ya ji ɗumi, shayar da shi nono a cikin awa ta farko, da kiyaye cibiyarsa da tsabta kuma a bushe", standard: "bisa tsari daidai kuma ba tare da halaye masu cutarwa ba" },
    { id: "O5", condition: "Idan aka ba ku bayanin jariri ko ƙaramin yaro mara lafiya", action: "gane alamun haɗari da ke nufin dole a kai yaron asibiti yanzu", standard: "kuna samun aƙalla 4 cikin 5 daidai" },
    { id: "O6", condition: "Ta amfani da katin lafiyar yaro ko littafinsa", action: "nemo ranakun allurar rigakafi da awon girma na gaba, da rubuta matakin ciyarwa da ya dace da shekarun yaron", standard: "ba tare da barin wata ziyarar da aka rasa ba tare da tsari ba" }
  ],
  chapters: [
    {
      name: "Babi na 1: Ciki mai lafiya da haihuwa lafiya",
      lessons: [
        {
          title: "Ziyarar asibiti lokacin ciki",
          objectives: ["O1"],
          minutes: 5,
          goal: "Rubuta tsarin ziyarar asibiti don ciki, farawa a cikin makonni 12 na farko.",
          text: [
            "Kulawa lokacin ciki ana kiranta awon ciki (antenatal care). A kowace ziyara, nas ko ungozoma tana auna hawan jinin uwa, nauyinta da jininta, tana sauraron jaririn, kuma tana ba da kulawar da asibitin ƙasarku ke bayarwa. Ana iya gano matsaloli da yawa da wuri, kafin su zama masu haɗari.",
            "WHO (Hukumar Lafiya ta Duniya) tana ba da shawarar aƙalla haɗuwa takwas da ma'aikacin lafiya lokacin ciki, ta farko kuma a cikin makonni 12 na farko (watanni uku na farko). Don haka da zarar mace ta yi tunanin tana da ciki, sai ta je asibiti. Asibitinku yana iya ba ku nasa jadawalin; ku bi shi.",
            "A ziyarar farko, asibiti yawanci yana ba da littafi ko katin lafiyar uwa da ɗa. Sunansa ya bambanta daga ƙasa zuwa ƙasa (misali, Mother and Child Health Handbook na Kenya ko Maternal and Child Health Record Book na Ghana). Ku ajiye shi a cikin leda, ku kawo shi a kowace ziyara, kuma ku rubuta ranar gaba a kalandar wayarku.",
            "Iyaye maza da iyali ma suna taimakawa: ku taimaka da kuɗin abin hawa, ku raka ta zuwa ziyara, kuma ku bar ta ta huta. Ku tambayi asibiti ko ofishin inshorar lafiyarku ko kulawar ciki kyauta ce ko inshora tana biya a inda kuke zaune; wannan yana canjawa, don haka ku tambaya kowane lokaci."
          ],
          steps: ["Ku je asibiti da zarar kun yi tunanin kuna da ciki, zai fi kyau a cikin makonni 12 na farko.", "Ku tambayi ziyara nawa asibitin ya tsara, da yaushe.", "Ku rubuta kowace rana a cikin littafin da kuma kalandar wayarku.", "Ku kawo littafin a kowace ziyara.", "Idan kun rasa ziyara, ku je da zarar kun sami dama; kada ku jira ta gaba."],
          words: [["Awon ciki (antenatal care)", "binciken lafiyar mace lokacin ciki, kafin a haifi jaririn."], ["Haɗuwa (contact)", "ziyara ko ganawa da ma'aikacin lafiya, a asibiti ko a gida."], ["Ungozoma (midwife)", "ƙwararriyar ma'aikaciyar lafiya da ke kula da mata lokacin ciki, haihuwa da bayan haihuwa."]],
          slides: [
            { title: "Awon ciki", bullets: ["Binciken lafiya lokacin ciki", "Yana gano matsaloli da wuri", "Hawan jini, nauyi, jini da jaririn"] },
            { title: "Lokacin zuwa", bullets: ["Ziyarar farko a cikin makonni 12 na farko", "WHO tana ba da shawarar aƙalla haɗuwa 8", "Ku bi jadawalin asibitinku"] },
            { title: "Ku ajiye littafin", bullets: ["Ku kawo shi a kowace ziyara", "Ku ajiye shi a bushe cikin leda", "Ku rubuta ranar gaba a wayarku"] },
            { title: "Iyali za su iya taimakawa", bullets: ["Kuɗin abin hawa", "Ku raka ta zuwa ziyara", "Ku bar ta ta huta"] }
          ],
          sources: [WHO_ANC],
          tryIt: "Ku ɗauki wani ciki a iyalinku, ko misalin Fatou a Thiès, Senegal, wadda take da ciki na makonni 10. Ku rubuta watan ziyarar farko sannan ku jera watannin ziyarori na gaba. A gefen kowanne, ku rubuta wanda zai raka ta.",
          youCanNow: "tsara ziyarar asibiti don ciki, farawa da wuri, da ajiye ranakun a inda za ku gan su.",
          quickCheck: [
            { objective: "O1", q: "Yaushe ya kamata mace ta yi ziyarar asibiti ta farko lokacin ciki?", options: ["Sai lokacin da jaririn yake gab da zuwa", "A watanni uku na ƙarshe", "Da zarar ta yi tunanin tana da ciki, zai fi kyau a cikin makonni 12 na farko", "Sai idan ba ta da lafiya"], answer: 2, why: "WHO tana ba da shawarar haɗuwa ta farko a cikin makonni 12 na farko, don a gano matsaloli da wuri." },
            { objective: "O1", q: "Haɗuwa nawa da ma'aikacin lafiya WHO ke ba da shawara lokacin ciki?", options: ["Aƙalla takwas", "Ɗaya", "Biyu", "Babu idan tana jin lafiya"], answer: 0, why: "WHO tana ba da shawarar aƙalla haɗuwa takwas; asibitinku yana iya ba da nasa jadawalin." }
          ]
        },
        {
          title: "Alamun haɗari lokacin ciki da bayan haihuwa",
          objectives: ["O2"],
          minutes: 5,
          goal: "Gane alamun haɗari da ke nufin dole mace mai ciki ko sabuwar uwa ta je asibiti yanzu.",
          text: [
            "Yawancin ciki suna tafiya lafiya. Amma wasu alamomi suna nufin haɗari ga uwa ko jaririn. Idan aka ga waɗannan alamomi, kada ku jira ku ga ko za su wuce, kuma kada ku jira ziyara ta gaba. Ku je asibiti yanzu, dare ko rana.",
            "Alamun haɗari lokacin ciki: zubar jini daga gaba (farji); ciwon kai mai tsanani tare da dushewar gani; farfaɗiya (jijjiga); kumburin fuska da hannaye; zazzaɓi; ciwon ciki mai tsanani; jaririn yana motsi ƙasa da yadda ya saba sosai ko baya motsi kwata-kwata; fashewar ruwan haihuwa kafin naƙuda; wahalar numfashi.",
            "Alamun haɗari bayan haihuwa: zubar jini mai yawa (yana jiƙa zane ko audugar mata da sauri); zazzaɓi; ruwa mai wari da ke fitowa daga gaba; ciwon kai mai tsanani, dushewar gani ko farfaɗiya; ciwo ko kumburi a ƙafa ɗaya; jin baƙin ciki sosai ko rashin iya jurewa na kwanaki da yawa.",
            "Zubar jini mai yawa, kamuwa da cuta da hawan jini suna cikin manyan dalilan mutuwa lokacin ciki da haihuwa, kuma suna iya kashewa da sauri. Gaggawa tana ceton rayuka. Ku kira ma'aikacin lafiya na al'umma ko lambar gaggawa ta yankinku yayin da kuke kan hanya."
          ],
          steps: ["Ku koyi alamun haɗari kuma ku manna jerinsu a bango a gida.", "Idan kun ga ɗaya, ku dakatar da abin da kuke yi.", "Ku je asibiti yanzu tare da littafin.", "Ku kira asibitin kafin ku isa, ko ku kira ma'aikacin lafiya na al'umma a kan hanya."],
          words: [["Alamar haɗari", "alamar da ke nuna cewa uwa ko jariri na iya kasancewa cikin haɗari mai tsanani kuma suna buƙatar kulawa yanzu."], ["Farfaɗiya (jijjiga)", "girgizar jiki ba zato ba tsammani da mutum ba zai iya hanawa ba."], ["Ruwan gaba (discharge)", "ruwan da ke fitowa daga farji."]],
          slides: [
            { title: "Alamun haɗari: ku je YANZU", bullets: ["Kada ku jira ku ga ko zai wuce", "Kada ku jira ziyara ta gaba", "Dare ko rana"] },
            { title: "Lokacin ciki", bullets: ["Zubar jini, farfaɗiya, zazzaɓi, ciwon ciki mai tsanani", "Ciwon kai mai tsanani da dushewar gani; kumburin fuska ko hannaye", "Jaririn ya rage motsi sosai; ruwa ya fashe da wuri; wahalar numfashi"] },
            { title: "Bayan haihuwa", bullets: ["Zubar jini mai yawa ko zazzaɓi", "Ruwan gaba mai wari", "Ciwon kai mai tsanani, dushewar gani ko farfaɗiya", "Baƙin ciki sosai ko rashin iya jurewa na kwanaki da yawa"] },
            { title: "Gaggawa tana ceton rayuka", bullets: ["Ku ɗauki littafin", "Ku kira ma'aikacin lafiya a kan hanya"] }
          ],
          sources: [WHO_MATERNAL],
          tryIt: "Ku rubuta alamun haɗari na lokacin ciki da na bayan haihuwa a takarda ɗaya, da harshenku idan kun fi so. Ku ƙara sunan asibiti mafi kusa da lambar wayar gaggawa. Ku manna ta a bango ko ku ajiye hotonta a wayarku.",
          youCanNow: "zaɓar alamun haɗari lokacin ciki da bayan haihuwa, da sanin cewa dole a je asibiti nan take.",
          quickCheck: [
            { objective: "O2", q: "Mariam a Bouaké tana da ciki na wata 7 kuma tana da ciwon kai mai tsanani da dushewar gani. Me ya kamata ta yi?", options: ["Ta huta ta ga yadda za ta ji gobe", "Ta jira ziyarar asibiti ta gaba", "Ta ƙara shan ruwa ta kwanta", "Ta je asibiti yanzu"], answer: 3, why: "Ciwon kai mai tsanani tare da dushewar gani alamar haɗari ne; yana iya nufin hawan jini mai haɗari." },
            { objective: "O2", q: "Wanne ne alamar haɗari bayan haihuwa?", options: ["Jin gajiya bayan haihuwa", "Zubar jini mai yawa da ke jiƙa zane da sauri", "Son yin barci lokacin da jaririn yake barci", "Jin yunwa"], answer: 1, why: "Zubar jini mai yawa bayan haihuwa babban dalili ne na mutuwar uwaye kuma yana buƙatar kulawa yanzu." }
          ]
        },
        {
          title: "Yin tsarin haihuwa",
          objectives: ["O3"],
          minutes: 5,
          goal: "Rubuta tsarin haihuwa da ke ambaton wuri, abin hawa, kuɗi da masu taimako.",
          text: [
            "Haɗari da yawa a lokacin haihuwa suna faruwa da sauri kuma yana da wuya a ga suna zuwa. Kulawar ƙwararren ma'aikacin lafiya (ungozoma, nas ko likita) lokacin haihuwa da bayanta tana ceton rayukan uwaye da jarirai. Don haka tsari mafi aminci shi ne a haihu a cibiyar lafiya.",
            "Tsarin haihuwa yana amsa tambayoyi masu sauƙi kafin naƙuda ta fara: Wace cibiyar lafiya? Ta yaya za mu isa can da dare? Wa zai biya kuɗin abin hawa, kuma nawa muka ajiye? Wa zai raka ta? Wa zai kula da sauran yara? Wa zai iya ba da jini idan an buƙata?",
            "Ku fara tara kuɗi da wuri, kaɗan kowane mako. Misali, wani iyali a Kisumu yana ajiye KES 200 a mako, wani iyali kuma a Tamale yana ajiye GHS 20 a mako (waɗannan misalai ne kawai; ku tsara naku). Ku ajiye lambar boda boda, okada, tasi ko motar asibiti (ambulance) a waya yanzu.",
            "Ku shirya ƙaramar jaka a watannin ƙarshe: littafin lafiya, zanuwa masu tsabta, tufafi da hula ga jaririn, da kayan uwa. Ku amince da tsarin tare da dukan iyali don kada wani ya yi jayayya lokacin da naƙuda ta fara."
          ],
          steps: ["Ku zaɓi cibiyar lafiya kuma ku ziyarce ta kafin haihuwa idan za ku iya.", "Ku shirya abin hawa na rana da na dare, kuma ku ajiye lambobin.", "Ku ajiye kuɗi kowane mako don abin hawa da sauran kuɗaɗe.", "Ku zaɓi wanda zai raka ta da wanda zai kula da gida.", "Ku shirya jakar kuma ku amince da tsarin tare da iyali."],
          words: [["Tsarin haihuwa", "rubutaccen tsari na inda da yadda za a haifi jaririn da yadda za ku isa can."], ["Ƙwararren ma'aikacin lafiya", "ungozoma, nas ko likita da aka horar don kula da haihuwa."], ["Naƙuda", "zafi da aikin jiki da ke tura jaririn waje."]],
          slides: [
            { title: "Me yasa ake tsarin haihuwa", bullets: ["Haɗarin haihuwa yana iya zuwa da sauri", "Kulawar ƙwararru tana ceton uwaye da jarirai", "Ku tsara kafin naƙuda ta fara"] },
            { title: "Tsarin yana amsa", bullets: ["Wace cibiyar lafiya?", "Abin hawa, rana da dare?", "Kuɗin da aka ajiye?", "Wa zai raka ta, wa zai kula da gida?"] },
            { title: "Ku fara ajiya da wuri", bullets: ["Kaɗan kowane mako (adadin misalai ne)", "Ku ajiye lambobin abin hawa yanzu"] },
            { title: "Ku shirya jakar", bullets: ["Littafin lafiya", "Zanuwa masu tsabta, tufafi da hular jariri", "Kayan uwa"] }
          ],
          sources: [WHO_MATERNAL],
          tryIt: "Ku rubuta tsarin haihuwa don wani ciki a iyalinku, ko don Amina a Kano wadda za ta haihu nan da wata uku. Ku cike: cibiyar lafiya, abin hawa (rana da dare), ajiyar kuɗi ta kowane mako, wanda zai raka ta, wanda zai kula da gida, da abin da ke cikin jakar.",
          youCanNow: "rubuta tsarin haihuwa da ke ambaton wuri, abin hawa, kuɗi da masu taimako.",
          quickCheck: [
            { objective: "O3", q: "Ina ne wuri mafi aminci don haihuwa?", options: ["A gida ba tare da wanda aka horar ba", "Duk inda naƙuda ta fara", "Cibiyar lafiya mai ƙwararren ma'aikacin lafiya", "A kan hanya, don a rage lokaci"], answer: 2, why: "Kulawar ƙwararru lokacin haihuwa da bayanta tana ceton rayukan uwaye da jarirai." },
            { objective: "O3", q: "Yaushe ya kamata iyali su amince da tsarin haihuwa?", options: ["Lokacin da naƙuda ta fara", "Kafin wata na ƙarshe na ciki", "Bayan an haifi jaririn", "Sai idan an sami matsala"], answer: 1, why: "Shiri tun da wuri yana hana jinkiri da jayayya lokacin da naƙuda ta fara." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Ciki mai lafiya da haihuwa lafiya",
        questions: [
          { objective: "O1", q: "Salma a Asyut tana tunanin tana da ciki na makonni 8. Mene ne mataki mafi kyau na gaba?", options: ["Ta je asibiti yanzu don ziyarar farko", "Ta jira sai jaririn ya fara motsi", "Ta jira sai wata na ƙarshe", "Ta tambayi maƙwabciya maimakon asibiti"], answer: 0, why: "WHO tana ba da shawarar haɗuwa ta farko a cikin makonni 12 na farko." },
          { objective: "O1", q: "Me yasa za a kawo littafin lafiyar uwa da ɗa a kowace ziyara?", options: ["Asibitin zai sake sayar da shi", "Na uba ne kawai", "Yana ɗauke da tarihin bincike da ranakun gaba", "Ba a buƙatarsa bayan ziyarar farko"], answer: 2, why: "Littafin yana ajiye tarihi da ranakun ziyara ta gaba a wuri ɗaya." },
          { objective: "O2", q: "Wanne daga cikin waɗannan alamar haɗari ne lokacin ciki?", options: ["Sha'awar wasu abinci", "Jaririn yana motsi ƙasa da yadda ya saba sosai ko baya motsi kwata-kwata", "Ɗan jin gajiya", "Yawan yin fitsari"], answer: 1, why: "Rage motsin jariri sosai yana iya nufin jaririn yana cikin haɗari; ku je yanzu." },
          { objective: "O2", q: "Akosua tana da zazzaɓi da ruwan gaba mai wari kwana biyar bayan haihuwa. Me ya kamata iyali su yi?", options: ["Su jira mako ɗaya", "Su ba ta shayi ta huta", "Su kai ta asibiti yanzu", "Su jira ziyarar allurar rigakafin jaririn"], answer: 2, why: "Zazzaɓi da ruwan gaba mai wari alamun kamuwa da cuta ne bayan haihuwa; tana buƙatar kulawa yanzu." },
          { objective: "O3", q: "Wanne ne sashe na tsarin haihuwa mai kyau?", options: ["Lambobin abin hawa na rana da dare da aka ajiye", "Jira har naƙuda ta fara kafin a yanke shawara", "Kashe kuɗin ajiya tun da farko", "Rashin faɗa wa iyali"], answer: 0, why: "Shirya abin hawa, kuɗi da masu taimako yana hana jinkiri mai haɗari." }
        ]
      }
    },
    {
      name: "Babi na 2: Kwanakin farko da shekarun farko na jaririnku",
      lessons: [
        {
          title: "Kula da jariri a kwanakin farko",
          objectives: ["O4"],
          minutes: 5,
          goal: "Jera matakan kula da jariri na rana ta farko: ɗumi, shayarwa da wuri da cibiya mai tsabta.",
          text: [
            "Jariri ba zai iya ɗumama kansa ba. Ku goge jaririn ya bushe, sannan ku sa shi fata-da-fata a kan ƙirjin uwarsa da zane a kansu duka biyu, kuma ku sa masa hula. Ku jinkirta wankansa na farko; ku tambayi ma'aikacin lafiya lokacin da ya dace.",
            "Ku fara shayar da nono a cikin awa ta farko bayan haihuwa. Nono na farko mai kauri, mai launin rawaya (hanji ko colostrum) yana da kyau ga jaririn; kada ku zubar da shi. WHO tana ba da shawarar ruwan nono kaɗai a watanni 6 na farko: babu ruwa, babu shayi, babu ruwan glucose kuma babu wani abin sha ko abinci.",
            "Ku kiyaye cibiya da tsabta kuma a bushe. Kada ku sa komai a kanta sai dai idan ma'aikacin lafiya ya ce ku sa, kuma ku wanke hannuwanku kafin ku taɓa ta. Ku wanke hannu da sabulu kafin ciyarwa da bayan canja wa jaririn kunzugu.",
            "Idan za ku iya, ku zauna a cibiyar lafiya na kusan kwana ɗaya bayan haihuwa, kuma ku je binciken bayan haihuwa da asibiti ya tsara, ga uwa da jariri duka. Ku yi rajistar haihuwar kuma ku fara allurar rigakafin da ake bayarwa lokacin haihuwa."
          ],
          steps: ["Ku goge jaririn ya bushe kuma ku sa shi fata-da-fata a kan uwarsa, a rufe, da hula.", "Ku shayar da nono a cikin awa ta farko.", "Ku ba da ruwan nono kaɗai.", "Ku kiyaye cibiya da tsabta kuma a bushe; ku wanke hannu kafin ku taɓa ta.", "Ku je binciken bayan haihuwa; ku yi rajistar haihuwar; ku fara allurar rigakafi."],
          words: [["Jariri", "ɗan da aka haifa a cikin kwanaki 28 na farko na rayuwarsa."], ["Fata-da-fata", "riƙe jaririn tsirara a jikin ƙirjin uwa marar riga don ya ji ɗumi."], ["Hanji (colostrum)", "nono na farko mai kauri, mai launin rawaya, cike da kariya ga jaririn."], ["Cibiya", "sashen igiyar cibiya da ke saura a cikin jaririn bayan haihuwa."]],
          slides: [
            { title: "Ku sa jaririn ya ji ɗumi", bullets: ["Ku goge jaririn ya bushe", "Fata-da-fata a kan uwarsa, a rufe", "Ku sa masa hula; ku jinkirta wanka na farko"] },
            { title: "Ku shayar da wuri", bullets: ["A cikin awa ta farko", "Hanji (colostrum) yana da kyau: kada ku zubar", "Ruwan nono kaɗai na watanni 6"] },
            { title: "Ku kiyaye cibiya da tsabta", bullets: ["Tsabta kuma a bushe", "Babu komai a kanta sai ma'aikacin lafiya ya ce", "Ku fara wanke hannu"] },
            { title: "Bayan haihuwa", bullets: ["Bincike ga uwa da jariri", "Ku yi rajistar haihuwa", "Ku fara allurar rigakafin haihuwa"] }
          ],
          sources: [WHO_NEWBORN, WHO_IYCF],
          tryIt: "Ku rubuta matakan kula da jariri na rana ta farko bisa tsari, a matsayin gajeren jeri da za ku iya ba sabuwar uwa ko kaka. Sannan ku rubuta wata al'ada mai cutarwa da kuka ji a yankinku, da matakin aminci da ke maye gurbinta.",
          youCanNow: "jera matakan kula da jariri na rana ta farko: ɗumi, shayarwa da wuri, ruwan nono kaɗai da cibiya mai tsabta.",
          quickCheck: [
            { objective: "O4", q: "Yaushe ya kamata a fara shayar da nono?", options: ["Bayan wankan farko na jaririn", "Bayan kwana uku", "Lokacin da nono ya zama fari", "A cikin awa ta farko bayan haihuwa"], answer: 3, why: "WHO tana ba da shawarar farawa a cikin awa ta farko; nono na farko yana kare jaririn." },
            { objective: "O4", q: "Wata 'yar uwa ta ce a ba jaririn ruwa domin ana zafi. Me WHO ke ba da shawara?", options: ["Ruwan nono kaɗai a watanni 6 na farko", "Ruwa kowace awa", "Ruwan sukari", "Shayi tare da ruwan nono"], answer: 0, why: "Ruwan nono yana da dukan ruwan da jariri ƙasa da wata 6 ke buƙata; sauran abubuwan sha suna iya ɗauke da ƙwayoyin cuta." }
          ]
        },
        {
          title: "Alamun haɗari a jarirai da ƙananan yara",
          objectives: ["O5"],
          minutes: 5,
          goal: "Gane alamun haɗari da ke nufin dole a kai jariri ko ƙaramin yaro asibiti yanzu.",
          text: [
            "Jarirai da ƙananan yara suna iya yin rashin lafiya mai tsanani da sauri sosai. Wasu alamomi suna nufin ku je asibiti yanzu, ba gobe ba.",
            "A jariri: rashin shan nono da kyau ko rashin iya tsotsa; rashin kuzari ko jiki ya yi laushi; numfashi da sauri ko da wahala; zazzaɓi, ko jiki ya yi sanyi; farfaɗiya.",
            "A ƙaramin yaro: ba zai iya shan ruwa ko nono ba; yana amai da duk abin da ya ci; farfaɗiya; barci sosai ko yana da wuyar tashi; numfashi da sauri ko da wahala; zazzaɓi (a yankin zazzaɓin cizon sauro, a yi gwaji a ranar); gudawa mai jini, ko gudawa tare da lumshewar idanu da yaro mai jin ƙishirwa sosai ko mai rauni sosai.",
            "Idan akwai gudawa, ku ci gaba da shayar da nono da ba da abin sha da abinci, kuma ku tambayi ma'aikacin lafiya game da ORS da zinc. Amma idan kun ga alamar haɗari, ku je yanzu. Kada ku yi amfani da magunguna daga kasuwa ko daga maƙwabci ba tare da shawarar ma'aikacin lafiya ba."
          ],
          steps: ["Ku duba alamun haɗari, ko da da dare ne.", "Idan kun ga ɗaya, ku je asibiti yanzu tare da katin lafiyar yaron.", "Ku ci gaba da shayar da nono da ba da abin sha a kan hanya.", "Ku kira ma'aikacin lafiya na al'umma idan ba za ku iya isa can ba."],
          words: [["Farfaɗiya (jijjiga)", "girgiza ba zato ba tsammani da yaron ba zai iya hanawa ba."], ["Ƙarancin ruwa a jiki (dehydration)", "lokacin da jiki ya rasa ruwa da yawa, misali ta gudawa ko amai."], ["ORS", "oral rehydration solution: abin sha na ruwa mai tsabta, gishiri da sukari da ke maye gurbin ruwan da aka rasa ta gudawa."]],
          slides: [
            { title: "Ku je yanzu, ba gobe ba", bullets: ["Yara suna rashin lafiya mai tsanani da sauri sosai", "Ku ɗauki katin lafiyar yaron"] },
            { title: "Alamun haɗari a jariri", bullets: ["Ba ya shan nono ko ba ya tsotsa", "Jiki ya yi laushi ko rashin kuzari", "Numfashi da sauri ko da wahala; zazzaɓi ko sanyi; farfaɗiya"] },
            { title: "Alamun haɗari a ƙaramin yaro", bullets: ["Ba ya iya shan ruwa ko nono; yana amai da komai", "Farfaɗiya; barci sosai ko wuyar tashi", "Numfashi da sauri ko da wahala; zazzaɓi; gudawa mai jini"] },
            { title: "Gudawa", bullets: ["Ku ci gaba da shayarwa da ba da abin sha", "Ku tambayi ma'aikacin lafiya game da ORS da zinc", "Lumshewar idanu ko rauni sosai: ku je yanzu"] }
          ],
          sources: [WHO_NEWBORN, WHO_DIARRHOEA],
          tryIt: "Ku yi katin alamun haɗari na jarirai da ƙananan yara: layi ɗaya na jarirai, ɗaya kuma na manyan jarirai da yara. Ku ƙara asibiti mafi kusa, lambar ma'aikacin lafiya na al'umma da yadda za ku isa can da dare.",
          youCanNow: "gane alamun haɗari a jariri ko ƙaramin yaro, da kai yaron asibiti nan take.",
          quickCheck: [
            { objective: "O5", q: "Wani jariri ɗan makonni 3 a Kumasi ya daina tsotsa kuma jikinsa ya yi sanyi. Me ya kamata iyali su yi?", options: ["Su jira sai da safe", "Su ba jaririn ruwa", "Su je asibiti yanzu", "Su ba shi magani daga kasuwa"], answer: 2, why: "Rashin shan nono da sanyin jiki alamun haɗari ne a jariri da ke buƙatar kulawa yanzu." },
            { objective: "O5", q: "Wani yaro ɗan shekara 2 mai gudawa yana da lumshewar idanu kuma ya yi rauni sosai. Mene ne daidai?", options: ["A daina ba shi kowane abin sha", "A je asibiti yanzu", "A daina shayar da shi nono", "A jira kwana uku"], answer: 1, why: "Lumshewar idanu da rauni alamun ƙarancin ruwa ne a jiki, wanda zai iya kashe yaro; ku je yanzu." }
          ]
        },
        {
          title: "Ciyarwa, allurar rigakafi da awon girma",
          objectives: ["O6"],
          minutes: 6,
          goal: "Nemo ranakun allurar rigakafi da awon girma na gaba a katin lafiyar yaro, da rubuta matakin ciyarwa da ya dace da shekarun yaron.",
          text: [
            "Katin ko littafin lafiyar yaro yana nuna allurar rigakafin da aka yi, ranakun allurar rigakafi na gaba da jadawalin girma. Allurar rigakafi tana kare yara daga cututtuka kamar kyanda, shan inna (polio), tari mai kokawa (whooping cough), sarƙewar jiki (tetanus) da wasu nau'o'in ciwon huhu (pneumonia) da gudawa. Jadawalin ya bambanta daga ƙasa zuwa ƙasa; ku bi katinku da asibitinku.",
            "A awon girma a asibiti ko wajen ma'aikacin lafiya na al'umma, ana auna nauyin yaron da tsayinsa. Idan layin girma ya yi lebur ko ya yi ƙasa, gargaɗi ne: ku tambayi ma'aikacin lafiya abin da za a yi.",
            "Ciyarwa bisa shekaru (WHO): ruwan nono kaɗai a watanni 6 na farko. Daga kusan wata 6, ku ƙara abincin iyali mai laushi, wanda aka marmasa, kuma ku ci gaba da shayarwa har zuwa shekara 2 ko fiye. Ku fara da ɗan kaɗan, sannan a hankali ku ƙara yawa, kauri da nau'o'in abinci. Jarirai na wata 6 zuwa 8 suna buƙatar abinci sau 2 zuwa 3 a rana; yara na wata 9 zuwa 23 suna buƙatar abinci sau 3 zuwa 4, da ƙwalama sau 1 zuwa 2 idan an buƙata.",
            "Idan kun rasa ranar allurar rigakafi, kada ku karaya: ku je da zarar kun sami dama kuma asibiti zai cike wa yaron abin da ya rasa. Ku rubuta kowace rana ta gaba a kalandar wayarku."
          ],
          steps: ["Ku buɗe katin lafiyar yaron.", "Ku nemo allurar rigakafi ta ƙarshe da ranar ta gaba.", "Ku nemo awon girma na ƙarshe ku ga ko layin yana hawa sama.", "Ku rubuta matakin ciyarwa da ya dace da shekarun yaron.", "Ku sa ranakun gaba a kalandar wayarku."],
          words: [["Allurar rigakafi (vaccine)", "maganin da ake ba yaro don kare shi daga cuta kafin ya kamu da ita; asibiti yana bayarwa bisa jadawali."], ["Jadawalin girma (growth chart)", "zane a kan katin da ke nuna nauyin yaron a tsawon lokaci."], ["Ƙarin abinci (complementary feeding)", "ƙara abincin iyali daga kusan wata 6 yayin da ake ci gaba da shayarwa."]],
          slides: [
            { title: "Katin lafiyar yaro", bullets: ["Allurar rigakafin da aka yi da ranakun gaba", "Jadawalin girma", "Ku kawo shi a kowace ziyara"] },
            { title: "Allurar rigakafi da girma", bullets: ["Ku bi jadawalin ƙasarku", "Layin girma ya yi lebur ko ya yi ƙasa: ku tambayi ma'aikacin lafiya", "Kun rasa rana? Ku je da zarar kun sami dama"] },
            { title: "Ciyarwa bisa shekaru (WHO)", bullets: ["Wata 0-6: ruwan nono kaɗai", "Daga kusan wata 6: abincin iyali mai laushi da ruwan nono", "Wata 6-8: abinci sau 2-3; wata 9-23: sau 3-4, ƙwalama sau 1-2"] }
          ],
          sources: [WHO_IMMUNIZATION, WHO_IYCF],
          tryIt: "Aikin ƙarshe: ku rubuta tsarin lafiyar iyalinku na shafi ɗaya. Ku haɗa da ziyarar asibiti da suka rage, tsarin haihuwa, matakan kula da jariri na rana ta farko, alamun haɗari ga uwa da ɗa tare da asibiti da lambar gaggawa, da ranakun allurar rigakafi da awon girma na gaba daga katin tare da matakin ciyarwa da ya dace da shekarun yaron.",
          youCanNow: "karanta katin lafiyar yaro don ranakun allurar rigakafi da awon girma na gaba, da tsara ciyarwa da ta dace da shekarun yaron.",
          quickCheck: [
            { objective: "O6", q: "Jariri Kofi ya rasa ranar allurar rigakafinsa a makon da ya gabata. Me ya kamata iyali su yi?", options: ["Su jira sai shekara mai zuwa", "Su tsallake wannan allurar", "Su sake farawa daga allurar farko", "Su je asibiti da wuri-wuri don a cike masa"], answer: 3, why: "Asibiti zai iya cike wa yaro abin da ya rasa; ku je da zarar kun sami dama." },
            { objective: "O6", q: "A kusan shekaru nawa jariri ke fara cin abincin iyali tare da ruwan nono?", options: ["Kusan wata 6", "Makonni 2", "Wata 1", "Shekara 2"], answer: 0, why: "WHO tana ba da shawarar ƙara abincin iyali mai laushi daga kusan wata 6 yayin da ake ci gaba da shayarwa." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Kwanakin farko da shekarun farko na jaririnku",
        questions: [
          { objective: "O4", q: "Mene ne hanya mafi kyau don sa jariri ya ji ɗumi nan da nan bayan haihuwa?", options: ["Fata-da-fata a kan ƙirjin uwarsa, a rufe, da hula", "Wanka da ruwan sanyi", "Barin jaririn ba a rufe ba", "Sa jaririn a wani ɗaki daban"], answer: 0, why: "Fata-da-fata yana sa jaririn ya ji ɗumi kuma yana taimakawa shayarwa ta fara." },
          { objective: "O4", q: "Me ya kamata a sa a kan cibiya?", options: ["Toka ko kashin shanu", "Babu komai sai dai idan ma'aikacin lafiya ya ce; a kiyaye ta da tsabta kuma a bushe", "Man shanu", "Laka"], answer: 1, why: "Cibiya mai tsabta, a bushe, tana rage haɗarin kamuwa da cuta." },
          { objective: "O5", q: "Wace alama a ƙaramin yaro ke nufin ku je asibiti yanzu?", options: ["Ɗan tari tare da cin abinci kamar yadda ya saba", "Yaron ba zai iya shan ruwa ko nono ba", "Fitar haƙori", "Majina tare da wasa da kyau"], answer: 1, why: "Rashin iya shan ruwa ko nono babbar alamar haɗari ce." },
          { objective: "O5", q: "Wani yaro a Kano yana numfashi da sauri da wahala da dare. Me ya kamata iyayensa su yi?", options: ["Su jira asibitin safe", "Su ba shi maganin tari daga shago", "Su je asibiti yanzu", "Su shafa masa ƙirji su jira"], answer: 2, why: "Numfashi da sauri ko da wahala yana iya nufin ciwon huhu (pneumonia) kuma yana buƙatar kulawa yanzu." },
          { objective: "O6", q: "Layin girma a kan katin ya yi lebur tsawon wata biyu. Me ya kamata mahaifi ya yi?", options: ["Babu komai; abu ne na yau da kullum", "Ya daina ziyarar asibiti", "Ya ba da ruwa kawai", "Ya tambayi ma'aikacin lafiya game da shi"], answer: 3, why: "Layi mai lebur ko mai faɗuwa gargaɗi ne; ma'aikacin lafiya zai iya taimakawa a gano dalilin." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Lafiyar Uwa da Ɗa: Ciki, Haihuwa da Shekarun Farko",
    questions: [
      { objective: "O1", q: "Kulawa da mace lokacin ciki ana kiranta:", options: ["Awon ciki (antenatal care)", "Kulawa bayan haihuwa", "Taimakon gaggawa", "Awon girma"], answer: 0, why: "Antenatal yana nufin kafin haihuwa." },
      { objective: "O1", q: "WHO tana ba da shawarar haɗuwa ta farko lokacin ciki:", options: ["A wata na ƙarshe", "A cikin makonni 12 na farko", "Sai idan akwai ciwo", "Bayan jaririn ya fara motsi"], answer: 1, why: "Farawa da wuri yana taimakawa a gano matsaloli da wuri." },
      { objective: "O1", q: "Wata mace mai ciki ta rasa ziyarar asibiti. Me ya fi kyau?", options: ["Ta jira sai naƙuda", "Ta daina zuwa", "Ta je da zarar ta sami dama", "Ta jira ziyara ta gaba bayan wannan"], answer: 2, why: "Zuwa da wuri-wuri yana kiyaye kulawarta a kan hanya." },
      { objective: "O2", q: "Wanne ne alamar haɗari lokacin ciki?", options: ["Jin yunwa", "Jin harbin jaririn", "Zubar jini daga gaba (farji)", "Son ƙara yin barci"], answer: 2, why: "Zubar jini lokacin ciki yana iya nufin haɗari ga uwa da jariri." },
      { objective: "O2", q: "Fuska da hannayen wata mace mai ciki sun kumbura ba zato ba tsammani kuma tana da ciwon kai mai tsanani. Ya kamata ta:", options: ["Je asibiti yanzu", "Rage cin gishiri ta jira", "Jira ziyara ta gaba", "Yi barci ya wuce"], answer: 0, why: "Waɗannan suna iya zama alamun hawan jini mai haɗari." },
      { objective: "O2", q: "Kwana biyu bayan haihuwa, jini yana jiƙa zanuwan uwar da sauri. Ya kamata iyali su:", options: ["Jira kwana ɗaya", "Ba ta shayi", "Kai ta asibiti yanzu", "Ce mata ta huta"], answer: 2, why: "Zubar jini mai yawa bayan haihuwa yana iya kashewa da sauri." },
      { objective: "O2", q: "Me yasa bai kamata ku ce \"mu jira mu gani\" idan an ga alamar haɗari ba?", options: ["Asibiti yana rufewa da wuri", "Alamun haɗari suna iya tsananta da sauri kuma gaggawa tana ceton rayuka", "Jira ya fi arha", "Alamomi koyaushe suna wucewa"], answer: 1, why: "Mutuwa da yawa tana faruwa saboda jinkiri wajen yanke shawarar zuwa da wajen isa can." },
      { objective: "O3", q: "Wace tambaya ce ta dace a tsarin haihuwa?", options: ["Wane launi ne tufafin jaririn za su kasance?", "Ta yaya za mu isa cibiyar lafiya da dare?", "Wa zai dafa wa baƙi abinci?", "Me za a raɗa wa jaririn suna?"], answer: 1, why: "Abin hawa, musamman da dare, babban sashe ne na tsarin haihuwa." },
      { objective: "O3", q: "Wani iyali a Dakar yana son kuɗi ya kasance a shirye don haihuwa. Mataki mai kyau shi ne:", options: ["Ajiye kaɗan kowane mako, farawa da wuri", "Ciyo bashi a ranar", "Fatan maƙwabci zai biya", "Jira sai naƙuda"], answer: 0, why: "Ajiya da wuri tana nufin kuɗi zai kasance a shirye lokacin da naƙuda ta fara." },
      { objective: "O3", q: "Me ya kamata ya kasance a cikin jakar haihuwa?", options: ["Babu komai; asibiti yana da komai", "Kuɗi kawai", "Abinci ga dukan iyali", "Littafin lafiya, zanuwa masu tsabta da tufafin jariri"], answer: 3, why: "Ana buƙatar littafin da kayayyaki masu tsabta ga uwa da jariri lokacin haihuwa." },
      { objective: "O4", q: "Mene ne hanji (colostrum)?", options: ["Allurar rigakafi", "Wani irin shayi na jarirai", "Nono na farko mai kauri, mai launin rawaya", "Man shafawa na jarirai"], answer: 2, why: "Hanji (colostrum) shi ne nono na farko kuma yana kare jaririn." },
      { objective: "O4", q: "A watanni 6 na farko, WHO tana ba da shawarar a ba jaririn:", options: ["Ruwan nono da ruwa", "Ruwan nono kaɗai", "Kunu", "Nonon saniya"], answer: 1, why: "Ruwan nono kaɗai; babu wani abin sha ko abinci." },
      { objective: "O4", q: "Wane mataki na rana ta farko ne daidai?", options: ["Wanke jaririn da ruwan sanyi nan take", "Sa toka a kan cibiya", "Jira kwana biyu kafin shayarwa", "Goge jaririn ya bushe kuma a sa shi fata-da-fata"], answer: 3, why: "Gogewa da fata-da-fata suna sa jariri ya ji ɗumi." },
      { objective: "O5", q: "Wanne ne alamar haɗari a jariri?", options: ["Barci tsakanin shayarwa", "Rashin iya tsotsa", "Atishawa sau ɗaya", "Kuka kafin a shayar da shi"], answer: 1, why: "Jaririn da ba ya iya tsotsa yana buƙatar kulawa yanzu." },
      { objective: "O5", q: "Wani yaro yana amai da duk abin da ya ci kuma yana barci sosai. Ya kamata iyali su:", options: ["Jira sai gobe", "Ba shi maganin kasuwa", "Kada su ba shi abin sha", "Je asibiti yanzu"], answer: 3, why: "Amai da komai da yawan barci manyan alamun haɗari ne." },
      { objective: "O5", q: "Wani yaro yana gudawa mai jini. Ya kamata iyali su:", options: ["Kai yaron asibiti", "Daina ba shi kowane abinci da abin sha", "Jira ta wuce", "Ba shi ƙwayoyin maganin maƙwabci"], answer: 0, why: "Jini a cikin bayan gida dalili ne na neman kulawa." },
      { objective: "O5", q: "A kan hanyar zuwa asibiti da yaro mai gudawa, ya kamata ku:", options: ["Daina shayar da shi nono", "Ci gaba da shayar da nono da ba da abin sha", "Kada ku ba shi ruwa", "Ba shi shayi mai ƙarfi kawai"], answer: 1, why: "Abin sha da ruwan nono suna maye gurbin ruwan da aka rasa." },
      { objective: "O6", q: "A ina za ku sami ranar allurar rigakafi ta gaba?", options: ["A katin lafiyar yaro", "A rediyo", "Daga mai sayarwa a kasuwa", "Babu inda; kuna hasashe"], answer: 0, why: "Katin yana nuna allurar rigakafin da aka yi da ranakun gaba." },
      { objective: "O6", q: "Yaro ɗan wata 10 ya kamata ya ci abinci kusan sau nawa a rana, bisa shawarar WHO?", options: ["Sau ɗaya", "Sau 3 zuwa 4, da ƙwalama sau 1 zuwa 2 idan an buƙata", "Ruwan nono kaɗai", "Sau goma"], answer: 1, why: "WHO tana ba da shawarar abinci sau 3 zuwa 4 ga yara na wata 9 zuwa 23, da ƙwalama idan an buƙata." },
      { objective: "O6", q: "Har zuwa shekaru nawa WHO ke ba da shawarar a ci gaba da shayarwa?", options: ["Wata 3", "Wata 6", "Shekara 1 daidai", "Shekara 2 ko fiye"], answer: 3, why: "Ana ci gaba da shayarwa tare da abincin iyali har zuwa shekara 2 ko fiye." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [1, 3, 6, 7, 9, 11, 13, 15, 18] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Ziyarar asibiti", objective: "O1", notYet: "Babu ranakun ziyara, ko ziyarar farko ta zo a makare lokacin ciki.", meets: "Ya jera ziyarori da suka rage, ta farko a cikin makonni 12 na farko, an rubuta a littafin ko a waya.", exceeds: "Ya kuma faɗi wanda zai raka ta a kowace ziyara da yadda za a biya." },
      { name: "Tsarin haihuwa", objective: "O3", notYet: "Ɗaya ko fiye daga cikin wuri, abin hawa, kuɗi ko masu taimako ba ya nan.", meets: "Ya ambaci cibiyar lafiya, abin hawa na rana da dare, ajiyar kowane mako, wanda zai raka ta da wanda zai kula da gida.", exceeds: "Akwai kuma lambobin abin hawa da aka ajiye, jakar da aka shirya, kuma iyali sun amince da tsarin." },
      { name: "Rana ta farko ta jariri", objective: "O4", notYet: "Wasu matakai ba sa nan, ba bisa tsari ba ne, ko suna da al'ada mai cutarwa.", meets: "Ɗumi (fata-da-fata), shayarwa a cikin awa ta farko, ruwan nono kaɗai da cibiya mai tsabta, a bushe.", exceeds: "Ya kuma ambaci wata al'ada mai cutarwa ta yankin da matakin aminci da ke maye gurbinta." },
      { name: "Alamun haɗari", objective: "O2", notYet: "Jerin ya rasa manyan alamomi ko ya ce a jira a gani.", meets: "Ya jera manyan alamun haɗari ga uwa da ɗa, tare da asibiti mafi kusa da lambar gaggawa.", exceeds: "Ya kuma haɗa da abin hawa na dare da lambar ma'aikacin lafiya na al'umma." },
      { name: "Alamun haɗari a yaro", objective: "O5", notYet: "Alamun haɗari a yaro ba sa nan ko an haɗa su da alamomi na yau da kullum.", meets: "Ya jera alamun haɗari a jariri da ƙaramin yaro da ke nufin a je yanzu.", exceeds: "Ya bayyana su a sarari har kaka ko babban yaya zai iya amfani da su." },
      { name: "Kati, allurar rigakafi da ciyarwa", objective: "O6", notYet: "Babu ranakun gaba, ko shawarar ciyarwa ba ta dace da shekarun yaron ba.", meets: "Ya ba da ranakun allurar rigakafi da awon girma na gaba daga katin da matakin ciyarwa da ya dace da shekarun.", exceeds: "Ranakun suna a kalandar waya tare da tunatarwa." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo masu ciki ko 'yan iyalinsu da suka yi ziyarar asibiti ta farko a cikin makonni 12 na farko (binciken biyo baya na kwanaki 30)",
      "Iyalan da suka ce suna da rubutaccen tsarin haihuwa tare da kuɗin da aka ajiye da abin hawa da aka shirya",
      "Yaran da ake kiyaye ziyarar allurar rigakafi da awon girma na gaba a kan lokaci, bisa rahoton masu koyo ko asibitocin abokan aiki",
      "Ma'aikatan lafiya na al'umma abokan aiki sun ce iyalai suna zuwa da wuri idan alamar haɗari ta bayyana"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya mai sauƙi, ko zaman jama'a inda ake karanta darussan da babbar murya",
      "Littafin lafiyar uwa da ɗa ko katin lafiyar yaro, idan iyali yana da shi",
      "Takarda da alƙalami don katunan alamun haɗari, tsarin haihuwa da tsarin lafiyar iyali",
      "Kusan minti 60 gaba ɗaya, a gajerun zama"
    ],
    facilitatorNotes: [
      "Abokan aiki masu kyau: ma'aikatan lafiya na al'umma, ungozomomin asibiti, ƙungiyoyin mata, ƙungiyoyin adashe da ƙungiyoyin addini; ku gayyaci ungozoma ko nas don amsa tambayoyi.",
      "Kada ku taɓa neman masu koyo su faɗi bayanan cikinsu, matsayin HIV ɗinsu ko wasu bayanan lafiyarsu a gaban jama'a; ku yi amfani da misalan kwas ɗin maimakon haka.",
      "Kada ku ba da yawan magani ko shawarar magani; ku tura duk irin waɗannan tambayoyi zuwa asibiti.",
      "Ku tabbatar da bayanan yankin kafin zaman: cibiyar lafiya mafi kusa, lambobin gaggawa, jadawalin allurar rigakafi na yankin, da ko kulawar haihuwa kyauta ce ko inshora tana biya.",
      "Ku gayyaci iyaye maza da kakanni mata: sau da yawa iyali ne ke yanke shawarar zuwa asibiti.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
