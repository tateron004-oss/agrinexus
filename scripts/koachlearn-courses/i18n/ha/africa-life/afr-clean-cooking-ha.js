"use strict";

// Koach Learn course, Hausa (ha) translation of africa-life/afr-clean-cooking.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const WHO_HAP = { name: "WHO, Hukumar Lafiya ta Duniya: Gurɓatar iska a cikin gida (makamashi mai gurɓatarwa, illolin lafiya, makamashi mai tsabta, kananzir)", url: "https://www.who.int/news-room/fact-sheets/detail/household-air-pollution-and-health" };
const WHO_BURNS = { name: "WHO: Ƙuna (taimakon farko da kariya a gida)", url: "https://www.who.int/news-room/fact-sheets/detail/burns" };
const WHO_CHEST = { name: "WHO: Kayan aikin Clean Household Energy Solutions Toolkit (makamashi mai tsabta, na matsakaici da mai gurɓatarwa)", url: "https://www.who.int/tools/clean-household-energy-solutions-toolkit" };
const CCA = { name: "Clean Cooking Alliance (ƙungiyar girki mai tsabta)", url: "https://www.cleancooking.org/" };

module.exports = {
  id: "afr-clean-cooking-ha",
  lang: "ha",
  translationOf: "afr-clean-cooking",
  category: "Africa: Life and Work",
  name: "Girki Mai Tsabta: Murhu Mafi Aminci da Kicin Marar Hayaƙi",
  skills: "Bayanin yadda hayaƙin girki ke cutar da lafiya, Rage hayaƙi a kicin yau, Amfani da wuta, gawayi, gas da kananzir lafiya, Kwatanta murhu da makamashi masu tsabta, Lissafa kuɗin canjawa, Rubuta tsarin tsaro da canjawa na kicin",
  outcome: "sa kicin ɗinku ya fi aminci kuma ya rage hayaƙi: bayyana yadda hayaƙi ke cutar da iyalinku, rage hayaƙi yau da abin da kuke da shi, amfani da wuta, gawayi, gas da kananzir lafiya, kwatanta murhu da makamashi masu tsabta bisa kuɗi da aminci, da rubuta tsarin da iyalinku za su amince da shi.",
  about: [
    "Wannan kwas na duk wanda ke girki da itace, gawayi ko kananzir ne, a gida ko a ƙaramin kasuwancin abinci, a birane da ƙauyuka a faɗin Afirka: uwaye, ubanni, kakanni mata, manyan yara masu taimakawa girki, da masu sayar da abinci.",
    "Babi na 1 yana magana kan hayaƙi da tsaro: yadda hayaƙin girki ke cutar da lafiya, yadda za a rage hayaƙi yau da abin da kuke da shi, da yadda za a zauna lafiya da wuta, gawayi, gas da kananzir. Babi na 2 yana magana kan canjawa zuwa girki mai tsabta: kwatanta murhu da makamashi, lissafa kuɗi, da rubuta tsarin kicin tare da iyalinku.",
    "Wannan kwas yana bin shawarar Hukumar Lafiya ta Duniya (WHO). Ba ya ba da shawarar wata alama (brand) ko wani mai sayarwa. Farashin murhu da makamashi yana canjawa kuma ya bambanta daga wuri zuwa wuri; kowane adadi a cikin kwas misali ne kawai, don haka ku yi amfani da farashinku. Kowane darasi yana ɗaukar kusan minti biyar. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas."
  ],
  finalTask: "Ku rubuta tsarin tsaro da canjawa na kicin mai shafi ɗaya don iyalinku ko kasuwancin abincinku (ko misali, kamar iyali a Kisumu masu girki a murhun gawayi (jiko), mai sayar da abinci a Lagos mai amfani da itace, ko iyali a Ouagadougou masu girki a murhun duwatsu uku): abin da kuke girki da shi yanzu da kuɗinsa kowane wata; matakai uku na rage hayaƙi a wannan makon; dokokinku na tsaro don wuta, gawayi, gas ko kananzir da yara; zaɓuɓɓuka biyu masu tsabta da aka kwatanta bisa kuɗi, samun makamashi da aminci; zaɓinku, yadda za ku biya, da ranar da za ku canja; da wanda ya amince a cikin gida.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Mutanen da ke girki don iyali ko ƙaramin kasuwancin abinci a Kenya, Najeriya, Ghana, Burkina Faso, Senegal, Kamaru, Masar da sauran Afirka, galibi da itace, gawayi ko kananzir. Yawancinsu mata da 'yan mata ne waɗanda kuma ke ɗebo itace, kuma da yawa suna da waya mai sauƙi da ƙarancin kuɗi.",
    startingPoint: "Yawancinsu suna girki a wuta a buɗe, murhun duwatsu uku, murhun gawayi ko murhun kananzir, sau da yawa a ƙaramin kicin marar isasshiyar iska. Da yawa sun san hayaƙi yana ƙona idanunsu, amma ba sa danganta shi da cutar ƙirji a yara. Kaɗan ne suka kwatanta abin da suke kashewa kan makamashi kowane wata da kuɗin murhu mai tsabta, kuma wasu suna tsoron gas.",
    gap: "WHO ta ƙiyasta kusan mutane biliyan 2.1 a duniya suna girki da makamashi da murhu masu gurɓatarwa, kuma miliyoyin mutane suna mutuwa kowace shekara saboda gurɓatar iska a cikin gida, kuma mata da ƙananan yara ne suka fi shan hayaƙin. Wuta a buɗe, gawayi da kananzir kuma suna jawo ƙuna, gubar carbon monoxide da gubar yara. Masu koyo da suka rage hayaƙi, suka yi girki lafiya kuma suka tsara canjawa suna kare lafiyar iyalinsu, kuma sau da yawa suna adana lokaci da kuɗi.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; ana bayyana kowace kalma ta musamman",
      "Kuɗi: kaɗan ne; kwas ba ya ba da farashi na gaske, sai misalai, kuma masu koyo suna amfani da farashin wurinsu",
      "Samun makamashi ya bambanta: gas, wutar lantarki da ingantattun murhu ba ko'ina ake samu ba, don haka masu koyo suna zaɓar abin da ya dace",
      "Tsaro: babu aiki kan bututun gas, wayoyin wutar lantarki ko layin wuta; masu koyo suna amfani da masu sayarwa masu lasisi kuma suna bin umarnin mai ƙerawa",
      "Babu shawarar magani: ƙuna da matsalolin numfashi a kai su asibiti"
    ],
    prerequisites: "Babu. Ƙari da ninkawa masu sauƙi suna taimakawa a Darasi na 5; na'urar lissafi ta waya ta isa."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan kicin yana girki da itace, gawayi ko kananzir", action: "bayyana yadda hayaƙin girki ke cutar da lafiya da wanda ya fi cutarwa", standard: "kuna ambaton aƙalla illoli uku na lafiya da mutanen da suka fi shan hayaƙin" },
    { id: "O2", condition: "Ta amfani da murhu da makamashin da kuke da su yanzu", action: "jera matakan da ke rage hayaƙi a kicin ɗinku a wannan makon", standard: "da aƙalla matakai uku masu ƙaramin kuɗi ko marasa kuɗi" },
    { id: "O3", condition: "Lokacin girki da wuta, gawayi, gas ko kananzir", action: "bin dokokin tsaro da ke hana ƙuna, gubar carbon monoxide, gobarar gas da gubar kananzir", standard: "kuna zaɓar mataki mai aminci a aƙalla 4 cikin yanayi 5" },
    { id: "O4", condition: "Idan akwai zaɓuɓɓukan murhu da makamashi biyu ko fiye a inda kuke zaune", action: "kwatanta murhu da makamashi masu tsabta bisa hayaƙi, kuɗi, samun makamashi da aminci", standard: "da dalili daidai na zaɓin da kuka yi" },
    { id: "O5", condition: "Ta amfani da kuɗin da kuke kashewa kan makamashi da farashin wurinku", action: "lissafa kuɗin makamashinku na wata da kwatanta shi da kuɗin wani zaɓi mai tsabta", standard: "lissafin ya yi daidai kuma an ambaci haɗarin biyan kuɗi" },
    { id: "O6", condition: "Tare da iyalinku ko kasuwancinku", action: "rubuta tsarin tsaro da canjawa na kicin da iyalin suka amince da shi", standard: "an cike kowane sashe kuma akwai ranar canjawa" }
  ],
  chapters: [
    {
      name: "Babi na 1: Hayaƙi da tsaro a kicin",
      lessons: [
        {
          title: "Yadda hayaƙin girki ke cutar da iyalinku",
          objectives: ["O1"],
          minutes: 5,
          goal: "Bayyana yadda hayaƙin girki ke cutar da lafiya da wanda ya fi cutarwa.",
          text: [
            "Hayaƙin itace, gawayi, ragowar amfanin gona, kashin dabbobi da kananzir yana cike da ƙananan ƙwayoyi da iskar gas. Ba za ku iya ganin yawancinsu ba, amma suna shiga can cikin huhu. Ana kiran wannan gurɓatar iska a cikin gida.",
            "WHO ta ce gurɓatar iska a cikin gida tana jawo ciwon huhu (pneumonia) da sauran cututtukan ƙirji a yara, da shanyewar ɓarin jiki (stroke), cutar zuciya, cutar huhu ta dogon lokaci da ciwon daji na huhu a manya. Ana kuma danganta ta da ƙarancin nauyin jariri a haihuwa da cutar ido. WHO ta ƙiyasta kusan mutane biliyan 2.1 a duniya suna girki da makamashi da murhu masu gurɓatarwa, yawancinsu a Afirka da Asiya.",
            "Mata da ƙananan yara ne suka fi shan hayaƙi, domin su ne suka fi daɗewa kusa da wuta, kuma sau da yawa ana goya jarirai a baya yayin da uwa ke girki. 'Yan mata da mata kuma suna rasa sa'o'i wajen ɗebo itace, lokacin da zai iya zuwa makaranta, aiki ko hutawa.",
            "Hayaƙin da ba ku gani ma yana cutarwa. Ƙamshin hayaƙi, idanu masu ƙuna, tari yayin girki, da bango ko rufin da ya yi baƙi alamu ne cewa iyalinku suna shan hayaƙi da yawa."
          ],
          words: [["Gurɓatar iska a cikin gida", "hayaƙi da iskar gas a ciki da kewayen gida, galibi daga girki, ɗumama gida da haske da makamashi mai gurɓatarwa."], ["Makamashi mai gurɓatarwa", "makamashin da ke yin hayaƙi mai yawa idan aka ƙona shi a murhu mai sauƙi: itace, gawayi, ragowar amfanin gona, kashin dabbobi, kwal da kananzir."], ["Ciwon huhu (pneumonia)", "cuta mai tsanani ta ƙirji; tana cikin manyan abubuwan da ke kashe ƙananan yara."]],
          slides: [
            { title: "Abin da ke cikin hayaƙi", bullets: ["Ƙananan ƙwayoyi da iskar gas", "Suna shiga can cikin huhu", "Ba za ku iya ganin yawancinsu ba"] },
            { title: "Yadda yake cutarwa (WHO)", bullets: ["Yara: ciwon huhu da cututtukan ƙirji", "Manya: shanyewar ɓarin jiki, cutar zuciya da huhu, ciwon daji na huhu", "Ana danganta shi da ƙarancin nauyin jariri da cutar ido"] },
            { title: "Wa ya fi shan hayaƙi", bullets: ["Mata masu girki", "Jarirai a baya da ƙananan yara", "'Yan mata masu ɗebo itace suna rasa lokacin makaranta"] },
            { title: "Alamun hayaƙi da yawa", bullets: ["Idanu masu ƙuna, tari yayin girki", "Bango ko rufi da ya yi baƙi", "Ƙamshin hayaƙi a tufafi"] }
          ],
          sources: [WHO_HAP],
          tryIt: "Ku lura da kicin ɗinku a lokacin dafa abinci ɗaya. Ku rubuta tsawon lokacin da wutar ke ci, wanda ke kusa da ita, ko akwai jariri ko ƙaramin yaro a wurin, da alamun hayaƙin da kuka gani. Ku rubuta hanyoyi uku da hayaƙin zai iya cutar da iyalinku.",
          youCanNow: "bayyana yadda hayaƙin girki ke cutar da lafiya da wanda ya fi shan hayaƙi a gidanku.",
          quickCheck: [
            { objective: "O1", q: "Wace cuta a ƙananan yara WHO ke danganta ta da hayaƙin girki?", options: ["Ciwon huhu da cututtukan ƙirji", "Karyewar ƙashi", "Ciwon haƙori", "Ƙyanda ta kaji (chickenpox)"], answer: 0, why: "Gurɓatar iska a cikin gida tana jawo cututtukan numfashi kamar ciwon huhu (pneumonia)." },
            { objective: "O1", q: "Wa yawanci ya fi shan hayaƙin girki?", options: ["Baƙi", "Maza masu aiki a gona", "Mata masu girki da ƙananan yaran da ke kusa da su", "Babu kowa; hayaƙi yana tashi sama"], answer: 2, why: "Mata da ƙananan yara ne suka fi daɗewa kusa da wuta." }
          ]
        },
        {
          title: "Rage hayaƙi yau da abin da kuke da shi",
          objectives: ["O2"],
          minutes: 5,
          goal: "Jera matakan da ke rage hayaƙi a kicin ɗinku a wannan makon, da murhun da kuke da shi yanzu.",
          text: [
            "Sabon murhu ne ya fi taimakawa, amma kuna iya rage hayaƙi yau. Ku bar iska ta shiga hayaƙi ya fita: ku yi girki a waje ko ƙarƙashin rumfa idan za ku iya, ku buɗe ƙofofi da tagogi yayin girki, kuma idan za ku iya, ku yi taga, gibi tsakanin bango da rufi, ko kofar hayaƙi kusa da wuta.",
            "Ku ƙona kaɗan, ku ƙona da tsabta. Ku yi amfani da busasshen itace: itace mai ɗanshi yana yin hayaƙi da yawa. Ku tsaga itace siraran guntaye ku tura shi a hankali. Ku rufe tukunya da murfi, ku jiƙa wake da masara kafin girki, kuma ku kashe wuta da zarar abinci ya nuna.",
            "Ku nisantar da yara. Ku hana jarirai da ƙananan yara shiga kicin yayin da wuta ke ci, kuma kada ku yi girki da jariri a bayanku idan akwai wani da zai iya riƙe shi.",
            "Kada ku taɓa ƙona roba (plastic), taya ko itace mai fenti: hayaƙinsu guba ne."
          ],
          steps: ["Ku bar iska ta shiga: ku yi girki a waje ko ku buɗe ƙofofi da tagogi.", "Ku yi amfani da busasshen itace da aka tsaga, ku tura shi a hankali.", "Ku rufe tukwane; ku jiƙa wake da masara tukuna.", "Ku kashe wuta idan abinci ya nuna.", "Ku nisantar da jarirai da ƙananan yara daga hayaƙi."],
          words: [["Shigar iska (ventilation)", "barin iska mai tsabta ta shiga, iska mai hayaƙi ta fita."], ["Gibin rufi (eave gap)", "buɗaɗɗen wuri tsakanin saman bango da rufi da ke barin hayaƙi ya fita."]],
          slides: [
            { title: "Iska ta shiga, hayaƙi ya fita", bullets: ["Ku yi girki a waje ko ƙarƙashin rumfa", "Ku buɗe ƙofofi da tagogi", "Ku yi taga ko gibin rufi kusa da wuta"] },
            { title: "Ƙona kaɗan, ƙona da tsabta", bullets: ["Busasshen itace, siraran guntaye", "Murfi a kan tukunya; jiƙa wake da masara", "Kashe wuta idan abinci ya nuna"] },
            { title: "Kare yara", bullets: ["Ku hana su shiga kicin mai hayaƙi", "Wani ya riƙe jariri", "Kada ku taɓa ƙona roba ko taya"] }
          ],
          sources: [WHO_HAP],
          tryIt: "Ku zaɓi matakai uku daga wannan darasi da za ku iya farawa a wannan makon ba tare da kuɗi ba ko da kuɗi kaɗan. Ku rubuta su, ku gwada su na kwana uku, kuma ku lura da abin da ya canja (hayaƙi ya ragu, itace ya ragu, lokaci ya ragu).",
          youCanNow: "rage hayaƙi a kicin ɗinku da matakai masu ƙaramin kuɗi ko marasa kuɗi.",
          quickCheck: [
            { objective: "O2", q: "Wane itace ne ya fi ƙarancin hayaƙi?", options: ["Danyen itace mai ɗanshi", "Manyan gungume da aka tura duka lokaci ɗaya", "Itace mai fenti daga tsohuwar ƙofa", "Busassun siraran guntaye da aka tura a hankali"], answer: 3, why: "Busasshen itace siriri yana ci sosai kuma yana yin hayaƙi kaɗan." },
            { objective: "O2", q: "Wane mataki ne ke rage hayaƙi da makamashi a lokaci ɗaya?", options: ["Girki da murfi a kan tukunya", "Barin wuta tana ci bayan girki", "Rufe tagogi", "Ƙona roba don kunna wuta"], answer: 0, why: "Murfi yana sa abinci ya nuna da sauri, don haka kuna ƙona makamashi kaɗan kuma hayaƙi ya ragu." }
          ]
        },
        {
          title: "Zama lafiya da wuta, gawayi, gas da kananzir",
          objectives: ["O3"],
          minutes: 6,
          goal: "Bin dokokin tsaro da ke hana ƙuna, gubar carbon monoxide, gobarar gas da gubar kananzir.",
          text: [
            "Ƙuna: ku sa murhu ya tsaya daidai, kuma idan za ku iya, ku ɗaga shi daga ƙasa, da shinge a kewayen wuta a buɗe. Ku juya hannun tukunya zuwa ciki. Ku nisantar da yara daga wurin girki. Idan wani ya ƙone, taimakon farko na WHO shi ne: ku tsayar da ƙunar, ku sanyaya wurin a ƙarƙashin ruwa mai sanyi mai gudana (kusan minti 20 don ƙananan ƙuna), ku cire zobe da matsatsun tufafi, kuma ku rufe shi da kyalle mai tsabta. Kada ku shafa man shanu, mai, man goge haƙori ko maganin gargajiya. Ku je asibiti don babba ko zurfin ƙuna, ko ƙuna a fuska, hannaye, ƙafafu ko al'aura.",
            "Gawayi: murhun gawayi mai ci yana fitar da carbon monoxide, iskar gas da ba a gani ko jin ƙamshinta, kuma tana iya kisa. Kada ku taɓa shigar da murhun gawayi mai ci cikin ɗaki a rufe don girki ko don ɗumama ɗakin, kuma kada ku taɓa barci da shi a ciki. Ciwon kai, jiri da barci-barci kusa da murhu alamun gargaɗi ne: ku fitar da kowa zuwa iska mai tsabta.",
            "Gas (LPG): ku sayi tukunyar gas (silinda) daga mai sayarwa mai lasisi, ku tsayar da ita a tsaye, kuma ku duba bututu da regulator. Idan kun ji ƙamshin gas: kada ku kunna ashana ko wani makunni (switch), ku kashe bakin silinda, ku buɗe ƙofofi da tagogi, ku fitar da mutane waje. Ku kashe bakin silinda bayan girki.",
            "Kananzir: WHO tana gargaɗi kan amfani da kananzir don girki da haske, kuma shan kananzir yana cikin manyan abubuwan da ke sa wa yara guba. Ku ajiye shi a cikin akwati a rufe mai rubutaccen suna, kada a taɓa sa shi a kwalbar abin sha, kuma ku nisanta shi daga yara. Idan yaro ya sha shi, ku je asibiti yanzu."
          ],
          steps: ["Ku sa murhu ya tsaya daidai, yara su yi nesa; ku juya hannun tukunya ciki.", "Kada ku taɓa amfani da gawayi a ɗaki a rufe ko yayin barci.", "Gas: mai sayarwa mai lasisi, silinda a tsaye, ku kashe bakinta bayan girki.", "Ƙamshin gas: babu wuta ko makunni, ku kashe bakin silinda, ku buɗe, ku fita.", "Kananzir: akwati mai suna, ba kwalbar abin sha ba, nesa da yara."],
          words: [["Carbon monoxide", "iskar gas mai guba daga ƙona makamashi; ba za ku iya ganinta ko jin ƙamshinta ba."], ["LPG", "liquefied petroleum gas: gas na girki da ake sayarwa a silinda."], ["Regulator", "sashen da ke saman silindar gas wanda ke sarrafa gas ɗin da ke zuwa murhu."]],
          slides: [
            { title: "Ƙuna", bullets: ["Murhu ya tsaya daidai, hannun tukunya ciki, yara nesa", "Taimakon farko: ruwa mai sanyi mai gudana kusan minti 20, kyalle mai tsabta", "Babu man shanu, mai ko magunguna; babban ƙuna a je asibiti"] },
            { title: "Gawayi", bullets: ["Yana fitar da carbon monoxide: babu launi, babu ƙamshi", "Kada a ɗaki a rufe; kada yayin barci", "Ciwon kai ko jiri kusa da shi: ku fita iska mai tsabta"] },
            { title: "Gas (LPG)", bullets: ["Mai sayarwa mai lasisi; silinda a tsaye", "Ƙamshin gas: babu wuta ko makunni, kashe bakin silinda, buɗe, fita", "Kashe bakin silinda bayan girki"] },
            { title: "Kananzir", bullets: ["WHO tana gargaɗi kansa", "Akwati mai suna, ba kwalbar abin sha ba", "Yaro ya sha shi: asibiti yanzu"] }
          ],
          sources: [WHO_BURNS, WHO_HAP],
          tryIt: "Ku zagaya kicin ɗinku ku rubuta dokokin tsaro biyar don gidanku: ɗaya don ƙuna da yara, ɗaya don gawayi, ɗaya don gas ko kananzir (wanda kuke amfani da shi), ɗaya don ajiye makamashi, da ɗaya don abin da za a yi a lokacin gaggawa, tare da asibiti mafi kusa.",
          youCanNow: "yin girki lafiya da wuta, gawayi, gas da kananzir, da ɗaukar mataki da sauri idan wani abu ya faru.",
          quickCheck: [
            { objective: "O3", q: "Ana sanyi a Ouagadougou da dare. Shin lafiya ne a shigar da murhun gawayi mai ci cikin ɗakin kwana a rufe?", options: ["E, idan ƙofa a rufe take", "E, idan gawayin mai kyau ne", "E, idan kun kwana nesa da shi", "A'a: yana fitar da carbon monoxide, wanda zai iya kisa"], answer: 3, why: "Carbon monoxide yana taruwa a ɗaki a rufe kuma yana iya kashe mutane masu barci." },
            { objective: "O3", q: "Kun ji ƙamshin gas a kicin. Me za ku fara yi?", options: ["Kunna ashana don neman inda yake zuba", "Kashe bakin silinda ku buɗe ƙofofi da tagogi", "Kunna fitila", "Ku ƙyale shi"], answer: 1, why: "Babu wuta ko makunni; ku kashe gas ɗin ku bar shi ya fita." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Hayaƙi da tsaro a kicin",
        questions: [
          { objective: "O1", q: "Wace cuta a manya WHO ke danganta ta da gurɓatar iska a cikin gida?", options: ["Shanyewar ɓarin jiki da cutar zuciya", "Zazzaɓin cizon sauro", "Taifot", "Karyewar ƙashi"], answer: 0, why: "WHO ta lissafa shanyewar ɓarin jiki, cutar zuciya, cutar huhu da ciwon daji na huhu." },
          { objective: "O1", q: "Ban da hayaƙi, me yasa 'yan mata ke yin asara daga girki da itace?", options: ["Suna samun ƙarin kuɗi", "Suna rasa lokaci wajen ɗebo itace, wanda zai iya hana su makaranta", "Suna ƙara barci", "Ba ya shafar su"], answer: 1, why: "Ɗebo makamashi yana ɗaukar lokacin makaranta da aiki." },
          { objective: "O2", q: "Wane mataki ne ke rage hayaƙi a kicin yau?", options: ["Rufe dukkan tagogi", "Amfani da itace mai ɗanshi", "Girki a waje ko buɗe ƙofofi da tagogi", "Ƙona tsohuwar roba"], answer: 2, why: "Shigar iska tana barin hayaƙi ya fita." },
          { objective: "O3", q: "Wani yaro a Yaoundé ya ƙone da miya mai zafi. Wane ne taimakon farko daidai?", options: ["Shafa masa man shanu", "Rufe shi da man goge haƙori", "Fasa kumburin ruwan", "Sanyaya shi a ƙarƙashin ruwa mai sanyi mai gudana kuma a rufe shi da kyalle mai tsabta"], answer: 3, why: "Taimakon farko na WHO shi ne ruwa mai sanyi mai gudana da abin rufewa mai tsabta; babu man shanu ko magunguna." },
          { objective: "O3", q: "A ina ya kamata a ajiye kananzir?", options: ["A cikin akwati a rufe mai rubutaccen suna, nesa da yara", "A tsohuwar kwalbar lemo", "A ƙasa kusa da gado", "A kofi a kan tebur"], answer: 0, why: "Yara suna shan kananzir daga kwalaben abin sha da kofuna; yana cikin manyan abubuwan da ke sa wa yara guba." }
        ]
      }
    },
    {
      name: "Babi na 2: Canjawa zuwa girki mai tsabta",
      lessons: [
        {
          title: "Murhu da makamashi masu tsabta",
          objectives: ["O4"],
          minutes: 6,
          goal: "Kwatanta murhu da makamashi masu tsabta bisa hayaƙi, kuɗi, samun makamashi da aminci.",
          text: [
            "WHO ta lissafa zaɓuɓɓuka mafi tsabta: hasken rana (solar), wutar lantarki, biogas, LPG (gas na girki), iskar gas ta halitta (natural gas), makamashin barasa kamar ethanol, da murhun itace ko gawayi da suka cika ma'aunin hayaƙi na WHO. WHO tana gargaɗi kan kananzir da kwal da ba a sarrafa ba.",
            "Ingantattun murhun itace ko gawayi (wanda ake kira murhu masu rage makamashi ko ingantattun murhu) suna ƙona makamashi kaɗan kuma suna yin hayaƙi kaɗan fiye da duwatsu uku ko wuta a buɗe. Mataki ne na gaba, amma yawancinsu har yanzu suna yin hayaƙi mai yawa, don haka ku ci gaba da barin iska ta shiga kicin. Ku tambayi mai sayarwa ko an gwada wannan nau'in murhun.",
            "Girki da gas (LPG) da wutar lantarki kusan ba sa yin hayaƙi a kicin. Tukunyar matsi ta lantarki (electric pressure cooker) ko murhun lantarki (hot plate) na iya zama mai arha wajen amfani inda wutar lantarki ke samuwa kullum, kuma yana da kyau don wake da miya. Biogas ya dace da gonar da ke da shanu da wurin tankin biogas (digester). Murhun riƙe zafi (kwando ko akwati mai kariyar zafi sosai) yana ƙarasa girki ba tare da ƙarin makamashi ba, kuma yana aiki da kowane murhu.",
            "Ku zaɓi abin da ya dace da wurinku: Ana sayar da makamashin kusa da ku duk shekara? Za ku iya biyan kuɗin cikawa? Yana da aminci ga gidanku? A birane da yawa gas ko wutar lantarki na iya dacewa; a ƙauyukan da ke nesa da masu sayarwa, ingantaccen murhu tare da shigar iska mai kyau na iya zama mataki na farko."
          ],
          steps: ["Ku jera murhu da makamashin da ake sayarwa kusa da ku.", "Ga kowanne, ku rubuta hayaƙi (mai yawa, kaɗan, kusan babu).", "Ku rubuta samun makamashi: koyaushe, wani lokaci, da wuya.", "Ku rubuta abubuwan tsaro da ake buƙata, kuɗin farko da kuɗin amfani.", "Ku zaɓi zaɓi mafi tsabta da za ku iya samu kuma ku iya biya."],
          words: [["Ingantaccen murhu (improved cookstove)", "murhun itace ko gawayi da aka ƙera don ƙona makamashi kaɗan da yin hayaƙi kaɗan fiye da wuta a buɗe."], ["Biogas", "gas da ake yi daga kashin dabbobi da ragowar tsirrai a cikin tanki a rufe da ake kira digester."], ["Murhun riƙe zafi (retained-heat cooker)", "kwando ko akwati mai kariyar zafi da ke sa tukunya mai zafi ta ci gaba da dafawa ba tare da ƙarin makamashi ba."]],
          slides: [
            { title: "Zaɓuɓɓuka mafi tsabta (WHO)", bullets: ["Hasken rana, wutar lantarki, biogas, LPG, natural gas, ethanol", "Murhun itace ko gawayi da suka cika ma'aunin hayaƙi na WHO", "WHO tana gargaɗi kan kananzir da kwal"] },
            { title: "Ingantattun murhun itace da gawayi", bullets: ["Makamashi kaɗan da hayaƙi kaɗan fiye da wuta a buɗe", "Har yanzu akwai hayaƙi: ku ci gaba da barin iska", "Ku tambaya ko an gwada wannan nau'in"] },
            { title: "Gas da wutar lantarki", bullets: ["Kusan babu hayaƙi a kicin", "Tukunyar matsi ta lantarki: tana da kyau don wake da miya", "Murhun riƙe zafi yana adana makamashi da kowane murhu"] },
            { title: "Ku zaɓi abin da ya dace", bullets: ["Ana sayar da makamashin kusa da ku duk shekara?", "Za ku iya biyan kuɗin cikawa?", "Yana da aminci ga gidanku?"] }
          ],
          sources: [WHO_HAP, WHO_CHEST, CCA],
          tryIt: "Ku tambaya a kasuwarku, shago ko wurin mai sayar da gas wane murhu da makamashi ake sayarwa kusa da ku. Ku yi ƙaramin tebur na zaɓuɓɓuka biyu ko uku mai ginshiƙai huɗu: hayaƙi, samun makamashi, abubuwan tsaro da kuɗi (ku yi amfani da farashin gaske da aka faɗa muku).",
          youCanNow: "kwatanta murhu da makamashi masu tsabta bisa hayaƙi, kuɗi, samun makamashi da aminci, da zaɓar wanda ya dace.",
          quickCheck: [
            { objective: "O4", q: "Wanne a cikin waɗannan WHO ta lissafa a matsayin makamashin girki mai tsabta?", options: ["Kananzir", "Kwal da ba a sarrafa ba", "LPG (gas na girki)", "Sharar roba"], answer: 2, why: "WHO ta lissafa LPG, wutar lantarki, biogas, hasken rana da ethanol cikin makamashi mai tsabta." },
            { objective: "O4", q: "Wani iyali a ƙauye mai nisa da kowane mai sayar da gas yana son rage hayaƙi yanzu. Mene ne mataki na farko mai hankali?", options: ["Ingantaccen murhu tare da shigar iska mai kyau", "Sayen silindar gas da ba za su iya cikawa ba", "Komawa kan kananzir", "Girki a ciki da tagogi a rufe"], answer: 0, why: "Ingantaccen murhu tare da shigar iska yana rage hayaƙi inda ba a samun makamashi mai tsabta tukuna." }
          ]
        },
        {
          title: "Lissafa kuɗi da biyan kuɗin canjawa",
          objectives: ["O5"],
          minutes: 6,
          goal: "Lissafa kuɗin makamashinku na wata da kwatanta shi da kuɗin wani zaɓi mai tsabta.",
          text: [
            "Iyalai da yawa suna tunanin girki mai tsabta ya yi tsada, amma ba su taɓa lissafa abin da suke kashewa yanzu ba. Ku rubuta abin da kuke kashewa kan itace, gawayi ko kananzir a mako na yau da kullum, ku ninka da 4 don samun kimanin kuɗin wata. Idan kuna ɗebo itace, ku kuma ƙidaya sa'o'in da kuke kashewa.",
            "Ga zaɓi mai tsabta, ku ƙidaya kuɗi iri biyu: kuɗin farko (murhu, silinda da regulator) da kuɗin amfani (cikawa ko wutar lantarki kowane wata). Sannan ku kwatanta kuɗin amfani da abin da kuke kashewa yanzu, ku lissafa watanni nawa ake ɗauka kafin abin da kuka adana ya mayar da kuɗin farko.",
            "Misali da lambobin ƙirƙira, ba farashin gaske ba: wani iyali a Kisumu yana kashe KES 300 a mako kan gawayi, kusan KES 1,200 a wata. Wani zaɓi mai tsabta yana cin KES 900 a wata wajen amfani da KES 3,600 a farko. Suna adana KES 300 a wata, don haka kuɗin farko yana dawowa cikin watanni 12 (3,600 a raba da 300). Ku yi amfani da farashinku.",
            "Hanyoyin biya: ku ajiye kaɗan kowane mako, ku saya tare ta ƙungiyar adashe kamar chama, tontine ko esusu, ko ku tambaya game da tsarin biya-yayin-amfani (pay-as-you-go) na gas ko murhu da ake bayarwa a wurinku. Kafin ku sa hannu, ku tambayi cikakken farashi, abin da zai faru idan kun kasa biyan wani kaso, da wanda ke gyarawa. Kada ku biya baƙon da ya yi alƙawarin murhu kyauta idan kun biya wani kuɗi, kuma ku sayi gas daga masu sayarwa masu lasisi kaɗai."
          ],
          steps: ["Ku rubuta kuɗin makamashinku na mako ku ninka da 4.", "Ku rubuta kuɗin farko da na wata na wani zaɓi mai tsabta.", "Ku cire don samun abin da za ku adana a wata (ko ƙarin kuɗi).", "Ku raba kuɗin farko da abin da kuke adanawa a wata don samun watannin dawowar kuɗi.", "Ku zaɓi yadda za ku biya kuma ku duba sharuɗɗa."],
          words: [["Kuɗin farko", "kuɗin da kuke biya sau ɗaya a farko, kamar na murhu."], ["Kuɗin amfani", "kuɗin da kuke biya akai-akai, kamar cika makamashi."], ["Dawowar kuɗi (pay back)", "lokacin da abin da kuka adana ke ɗauka kafin ya rufe abin da kuka biya a farko."], ["Biya-yayin-amfani (pay-as-you-go)", "biyan kuɗi kaɗan-kaɗan, sau da yawa ta kuɗin waya, yayin da kuke amfani da makamashi ko murhu."]],
          slides: [
            { title: "Nawa kuke kashewa yanzu?", bullets: ["Kuɗin makamashi na mako x 4 = kuɗin wata", "Ku ƙidaya sa'o'in ɗebo itace ma"] },
            { title: "Kuɗi iri biyu na canjawa", bullets: ["Na farko: murhu, silinda, regulator", "Na amfani: cikawa ko wutar lantarki kowane wata"] },
            { title: "Misali (lambobin ƙirƙira)", bullets: ["Gawayi KES 1,200 a wata; zaɓi mai tsabta KES 900", "Ana adana KES 300 a wata", "Na farko KES 3,600 / 300 = watanni 12 kafin kuɗi ya dawo"] },
            { title: "Biya lafiya", bullets: ["Ku ajiye kowane mako ko ku saya ta ƙungiyar adashe", "Ku tambayi cikakken farashi da dokar kasa biyan kaso", "Babu kuɗi don \"murhu kyauta\"; masu sayar da gas masu lasisi kaɗai"] }
          ],
          tryIt: "Ku rubuta abin da iyalinku ke kashewa kan makamashin girki a mako na yau da kullum (da kuɗinku, misali NGN, GHS, XOF, XAF ko EGP) ku lissafa na wata. Sannan ku yi amfani da farashin gaske da kuka samu a Darasi na 4 don lissafa abin da za a adana a wata da watannin dawowar kuɗi ga zaɓi mai tsabta ɗaya.",
          youCanNow: "lissafa kuɗin makamashin girki da kuke kashewa kowane wata da ko zaɓi mai tsabta zai mayar da kuɗinsa.",
          quickCheck: [
            { objective: "O5", q: "Misali kawai: wani iyali yana kashe GHS 50 a mako kan gawayi. Kusan nawa ke nan a wata?", options: ["GHS 50", "GHS 100", "GHS 500", "GHS 200"], answer: 3, why: "50 a mako sau makonni 4 kusan 200 ne a wata." },
            { objective: "O5", q: "Wani mutum ya kira yana ba da \"murhun gwamnati kyauta\" idan kun fara aika wani kuɗi ta kuɗin waya. Mene ne wannan?", options: ["Kyakkyawar dama", "Alamar gargaɗin zamba; kada ku biya", "Haraji na yau da kullum", "Ajiya ta wajibi"], answer: 1, why: "Neman kuɗi don karɓar abu kyauta alama ce ta zamba da aka saba gani." }
          ]
        },
        {
          title: "Tsarin tsaro da canjawa na kicin ɗinku",
          objectives: ["O6"],
          minutes: 5,
          goal: "Rubuta tsarin tsaro da canjawa na kicin da iyalinku suka amince da shi.",
          text: [
            "Tsari yana mayar da abin da kuka koya zuwa aiki. Yana da sassa shida: abin da kuke girki da shi yanzu da kuɗinsa na wata; matakai uku na rage hayaƙi a wannan makon; dokokinku na tsaro; zaɓuɓɓuka biyu masu tsabta da aka kwatanta; zaɓinku, yadda za ku biya da ranar da za ku canja; da wanda ya amince.",
            "Ku tattauna da duk mutanen gidan. Mai biyan kuɗi da mai girki na iya ganin abubuwa daban. Ku faɗi abin da hayaƙi ke yi wa ƙirjin yara, kuɗin da kuka lissafa, da lokacin da za a adana daga ɗebo itace. Ku tambayi kowa abin da ke damunsa, kamar tsoron gas ko ɗanɗanon abinci, kuma ku amsa shi.",
            "Idan kuna da kasuwancin abinci, kamar chop bar a Kumasi, mama put a Lagos ko dibiterie a Dakar, ku ƙara abokan cinikinku da ma'aikatanku: hayaƙi kaɗan yana nufin wuri mai tsabta da ma'aikata masu lafiya, kuma makamashi sau da yawa yana cikin manyan kuɗaɗenku.",
            "Ku manna tsarin a bango. Bayan wata ɗaya, ku duba: hayaƙi ya ragu, kuma nawa makamashi ya ci? Ku canja tsarin idan ya cancanta."
          ],
          steps: ["Ku rubuta sassa shida na tsarin.", "Ku tattauna shi da iyali ko ma'aikata.", "Ku amsa damuwarsu.", "Ku amince kan zaɓi, biya da ranar canjawa.", "Ku duba bayan wata ɗaya ku gyara."],
          words: [["Tsarin canjawa", "rubutaccen tsari na komawa zuwa hanyar girki mafi tsabta da aminci."]],
          slides: [
            { title: "Sassa shida na tsarin", bullets: ["Yanzu: makamashi da kuɗin wata", "Matakai uku na rage hayaƙi; dokokin tsaro", "Zaɓuɓɓuka biyu da aka kwatanta; zaɓi, biya, rana; wanda ya amince"] },
            { title: "Ku amince tare", bullets: ["Mai girki da mai biya na iya bambanta", "Ku raba bayanan lafiya, kuɗi da lokaci", "Ku amsa damuwa, kamar tsoron gas"] },
            { title: "Ga kasuwancin abinci", bullets: ["Wuri mai tsabta, ma'aikata masu lafiya", "Makamashi sau da yawa babban kuɗi ne"] },
            { title: "Ku duba bayan wata ɗaya", bullets: ["Hayaƙi ya ragu?", "Nawa makamashi ya ci?", "Ku canja tsarin idan ya cancanta"] }
          ],
          tryIt: "Aikin ƙarshe: ku rubuta tsarin tsaro da canjawa na kicin ɗinku mai shafi ɗaya da dukkan sassa shida. Ku tattauna shi da iyalinku ko ma'aikatanku kuma ku rubuta sunayen waɗanda suka amince.",
          youCanNow: "rubuta tsarin tsaro da canjawa na kicin da amincewa da shi tare da iyalinku.",
          quickCheck: [
            { objective: "O6", q: "Wanne ya kamata ya kasance a cikin tsarin canjawa na kicin?", options: ["Ranar canjawa da yadda za ku biya", "Launin murhu kaɗai", "Babu komai game da tsaro", "Alƙawarin yin girki a ciki da gawayi"], answer: 0, why: "Tsarin yana buƙatar zaɓi, hanyar biya da rana don canjawar ta faru." },
            { objective: "O6", q: "Mai girki yana son gas, amma mai biya yana damuwa da kuɗi. Me ya fi taimakawa?", options: ["Ƙyale damuwar", "Saya ba tare da faɗa masa ba", "Nuna kuɗin makamashin wata da kuka lissafa da bayanan lafiya", "Haƙura"], answer: 2, why: "Lambobi na gaske da bayanan lafiya suna taimaka wa iyali su amince." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Canjawa zuwa girki mai tsabta",
        questions: [
          { objective: "O4", q: "Wanne ne kusan ba ya yin hayaƙi a kicin?", options: ["Duwatsu uku", "Murhun kananzir", "Wuta a buɗe", "Tukunyar matsi ta lantarki"], answer: 3, why: "Girki da wutar lantarki da gas kusan ba sa yin hayaƙi a kicin." },
          { objective: "O4", q: "Me murhun riƙe zafi yake yi?", options: ["Yana yin gas daga kashi", "Yana sa tukunya mai zafi ta ci gaba da dafawa ba tare da ƙarin makamashi ba", "Yana ƙona roba da tsabta", "Yana cajin waya"], answer: 1, why: "Kariyar zafi tana riƙe zafi don abinci ya ƙarasa nuna ba tare da ƙarin makamashi ba." },
          { objective: "O5", q: "Misali kawai: wani zaɓi mai tsabta yana adana XAF 5,000 a wata kuma kuɗinsa na farko XAF 30,000 ne. Watanni nawa kafin kuɗi ya dawo?", options: ["Watanni 6", "Watanni 3", "Watanni 25", "Watanni 35"], answer: 0, why: "30,000 a raba da 5,000 shi ne 6." },
          { objective: "O5", q: "Kafin ku sa hannu kan tsarin biya-yayin-amfani na murhu, me ya kamata ku tambaya?", options: ["Babu komai", "Launi kaɗai", "Cikakken farashi da abin da zai faru idan kun kasa biyan wani kaso", "Abincin da mai sayarwa ya fi so"], answer: 2, why: "Cikakken kuɗi da dokokin kasa biya suna nuna haɗari na gaske." },
          { objective: "O6", q: "Bayan canjawa, me ya kamata iyalin su yi?", options: ["Kada su sake tunani a kai", "Su duba bayan wata ɗaya don hayaƙi da kuɗi, su gyara", "Su koma kan kananzir", "Su yar da tsarin"], answer: 1, why: "Dubawa yana nuna ko tsarin ya yi aiki da abin da za a canja." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Girki Mai Tsabta: Murhu Mafi Aminci da Kicin Marar Hayaƙi",
    questions: [
      { objective: "O1", q: "Gurɓatar iska a cikin gida galibi tana fitowa daga:", options: ["Hon ɗin mota", "Girki da makamashi mai gurɓatarwa a murhu masu sauƙi", "Wayoyin hannu", "Ruwan sha"], answer: 1, why: "Hayaƙin itace, gawayi, kashin dabbobi da kananzir shi ne babban tushe." },
      { objective: "O1", q: "Wanne alama ne cewa iyalinku suna shan hayaƙi da yawa?", options: ["Idanu masu ƙuna da tari yayin girki", "Fararen bango masu tsabta", "Babu ƙamshi a tufafi", "Iska mai tsabta a kicin"], answer: 0, why: "Idanu masu ƙuna, tari da bango baƙi alamun hayaƙi mai yawa ne." },
      { objective: "O1", q: "Me yasa yana da haɗari a yi girki a wuta a buɗe da jariri a baya?", options: ["Jaririn yana gajiya", "Ba shi da haɗari", "Jaririn yana shan hayaƙi da yawa", "Abinci yana jinkirin nuna"], answer: 2, why: "Jarirai kusa da wuta suna shan hayaƙi kuma suna iya kamuwa da cututtukan ƙirji." },
      { objective: "O2", q: "Wanne ne ke rage hayaƙi kyauta?", options: ["Rufe ƙofa", "Amfani da itace mai ɗanshi", "Ƙona taya", "Buɗe ƙofofi da tagogi yayin girki"], answer: 3, why: "Shigar iska tana barin hayaƙi ya fita ba tare da kuɗi ba." },
      { objective: "O2", q: "Jiƙa wake kafin girki yana taimakawa domin:", options: ["Yana nuna da sauri, yana amfani da makamashi kaɗan kuma hayaƙi ya ragu", "Yana ƙara gishiri", "Yana ƙara hayaƙi", "Ba shi da amfani"], answer: 0, why: "Gajeren lokacin girki yana nufin makamashi kaɗan da hayaƙi kaɗan." },
      { objective: "O2", q: "Wanne ne kada ku taɓa ƙonawa?", options: ["Busasshen itace", "Gawayi a fili a buɗe", "Roba da taya", "Kwarangwal ɗin masara"], answer: 2, why: "Ƙona roba da taya yana fitar da hayaƙi mai guba." },
      { objective: "O3", q: "Carbon monoxide daga gawayi yana da haɗari domin:", options: ["Yana da ƙamshi mai ƙarfi", "Ba za ku iya ganinsa ko jin ƙamshinsa ba, kuma yana iya kisa", "Yana da launi", "Yana shafar tsirrai kaɗai"], answer: 1, why: "Ba ya ba da gargaɗi, don haka mutane na iya shan guba a ɗaki a rufe." },
      { objective: "O3", q: "Taimakon farko na WHO don ƙuna ya ce:", options: ["A shafa man shanu", "A yi amfani da ƙanƙara", "A fasa kumburin ruwan", "A sanyaya shi a ƙarƙashin ruwa mai sanyi mai gudana"], answer: 3, why: "Ruwa mai sanyi mai gudana na kusan minti 20 shi ne shawarar WHO don ƙananan ƙuna." },
      { objective: "O3", q: "Idan kun ji ƙamshin gas, KADA ku:", options: ["Buɗe tagogi", "Kashe bakin silinda", "Kunna ashana ko makunni", "Fitar da mutane waje"], answer: 2, why: "Wuta ko tartsatsi na iya kunna gas ɗin." },
      { objective: "O3", q: "Wani yaro a Kano ya sha kananzir daga kwalbar lemo. Ya kamata iyalin su:", options: ["Je asibiti yanzu", "Jira su gani", "Ba yaron mai", "Sa yaron ya yi amai"], answer: 0, why: "Gubar kananzir tana buƙatar kulawa yanzu; asibiti ne ke yanke magani." },
      { objective: "O4", q: "Wanne WHO tana gargaɗi kan amfani da shi don girki?", options: ["LPG", "Wutar lantarki", "Kananzir", "Biogas"], answer: 2, why: "WHO tana gargaɗi kan kananzir da kwal da ba a sarrafa ba." },
      { objective: "O4", q: "Ingantaccen murhun gawayi:", options: ["Ba ya yin hayaƙi ko kaɗan", "Yana amfani da makamashi kaɗan kuma yana yin hayaƙi kaɗan, amma har yanzu yana buƙatar shigar iska", "Daidai yake da wuta a buɗe", "Ana iya amfani da shi a ɗakin kwana a rufe"], answer: 1, why: "Ingantattun murhu suna taimakawa, amma yawancinsu har yanzu suna yin hayaƙi da carbon monoxide." },
      { objective: "O4", q: "Biogas ya fi dacewa da:", options: ["Gona mai shanu da wurin tankin digester", "Gida a bene marar dabbobi", "Rumfar kasuwa marar wuri", "Mota"], answer: 0, why: "Ana yin biogas daga kashin dabbobi da ragowar tsirrai a cikin digester." },
      { objective: "O4", q: "Kafin zaɓar makamashi, tambaya mafi muhimmanci ita ce:", options: ["Wane launi murhun yake?", "Ana sayar da shi kusa da ni duk shekara, kuma zan iya biyan kuɗin cikawa?", "Me maƙwabtana suke tunani game da alamar?", "Akwatin yana da girma?"], answer: 1, why: "Murhu mai tsabta yana taimakawa ne kawai idan za ku iya ci gaba da sayen makamashinsa." },
      { objective: "O5", q: "Don samun kuɗin makamashinku na wata, kuna iya:", options: ["Yin hasashe", "Ninka kuɗin mako da 4", "Raba da 4", "Tambayar baƙo"], answer: 1, why: "Kuɗin mako sau 4 yana ba da kimanin kuɗin wata." },
      { objective: "O5", q: "Misali kawai: adanawar wata EGP 100, kuɗin farko EGP 800. Watanni nawa kafin kuɗi ya dawo?", options: ["100", "900", "700", "8"], answer: 3, why: "800 a raba da 100 shi ne 8." },
      { objective: "O5", q: "A ina ya kamata ku sayi silindar gas?", options: ["Daga mai sayarwa mai lasisi", "Daga kowa a bakin hanya", "Daga shagon cikawa marar suna da dare", "Daga baƙo a intanet da ke neman a fara biya"], answer: 0, why: "Masu sayarwa masu lasisi suna bin dokokin tsaro na silinda da cikawa." },
      { objective: "O6", q: "Wa ya kamata ya amince da tsarin canjawa na kicin?", options: ["Mai sayarwa kaɗai", "Babu kowa", "Iyalin gidan, har da mai girki da mai biya", "Yara kaɗai"], answer: 2, why: "Duk wanda abin ya shafa ya kamata ya amince don tsarin ya yi aiki." },
      { objective: "O6", q: "Tsarin canjawa mai kyau ya haɗa da:", options: ["Babu rana", "Sunan alama kaɗai", "Babu komai game da tsaro", "Zaɓuɓɓuka biyu da aka kwatanta, zaɓi, yadda za a biya da ranar canjawa"], answer: 3, why: "Waɗannan sassan suna sa tsarin ya bayyana kuma a iya aiwatar da shi." },
      { objective: "O6", q: "Wata mai sayar da abinci a Dakar tana ƙara wane ƙarin batu a tsarinta?", options: ["Hayaƙi kaɗan ga ma'aikatanta da abokan cinikinta, da kuɗin makamashinta", "Launin faranti", "Babu komai", "Ƙarin kananzir"], answer: 0, why: "Ga kasuwanci, lafiyar ma'aikata da kuɗin makamashi suna da muhimmanci." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 3, 6, 8, 10, 13, 14, 15, 18] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Me yasa yake da muhimmanci", objective: "O1", notYet: "Babu dalilin lafiya, ko dalilan ba daidai ba ne.", meets: "Ya ambaci aƙalla illoli uku na hayaƙi ga lafiya da wanda ya fi shan hayaƙi a gida.", exceeds: "Ya kuma ambaci lokacin da ake rasawa wajen ɗebo makamashi da wanda abin ya shafa." },
      { name: "Rage hayaƙi a wannan makon", objective: "O2", notYet: "Matakai ƙasa da uku, ko matakai masu tsada.", meets: "Matakai uku masu ƙaramin kuɗi ko marasa kuɗi, kamar shigar iska, busasshen itace da murfi.", exceeds: "An gwada matakan, kuma an rubuta abin da ya canja." },
      { name: "Dokokin tsaro", objective: "O3", notYet: "Babu dokoki don makamashin da ake amfani da shi, ko akwai doka marar aminci.", meets: "Dokoki masu sarari don ƙuna da yara da kuma makamashin da gidan ke amfani da shi, tare da asibiti mafi kusa.", exceeds: "Ya haɗa da matakan zubar gas ko dokar carbon monoxide ta gawayi, da ajiye makamashi." },
      { name: "An kwatanta zaɓuɓɓuka", objective: "O4", notYet: "Zaɓi ɗaya kaɗai, ko babu kwatanci.", meets: "An kwatanta zaɓuɓɓuka biyu bisa hayaƙi, samun makamashi, aminci da kuɗi, tare da dalili daidai na zaɓin.", exceeds: "Farashin daga masu sayarwa na gaske ne a wurin, kuma an tabbatar da samun makamashi." },
      { name: "Kuɗi da biya", objective: "O5", notYet: "Babu kuɗin wata, ko lissafin ba daidai ba ne.", meets: "Kuɗin makamashi na wata yanzu, kuɗaɗen zaɓi mai tsabta da hanyar biya, tare da lissafi daidai.", exceeds: "Ya nuna watannin dawowar kuɗi kuma ya ambaci tambayoyin da za a yi kafin sa hannu." },
      { name: "An amince da tsarin", objective: "O6", notYet: "Babu ranar canjawa, ko babu wani da ya gani.", meets: "An cike dukkan sassa shida, tare da ranar canjawa da sunayen waɗanda suka amince.", exceeds: "Ya haɗa da dubawar hayaƙi da kuɗi bayan wata ɗaya." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Iyalan da suka ce suna amfani da aƙalla matakai uku na rage hayaƙi bayan kwanaki 30 (binciken biyo baya)",
      "Iyalan da suka ce ba sa amfani da murhun gawayi a ɗaki a rufe kuma suna ajiye kananzir lafiya",
      "Iyalai ko kasuwancin abinci da suka canja zuwa murhu ko makamashi mai tsabta cikin watanni 6",
      "Masu koyo da suka ce suna kashe kuɗi ko lokaci kaɗan kan makamashin girki"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya mai sauƙi mai na'urar lissafi, ko takarda da alƙalami",
      "Farashin murhu da makamashi na wurin, wanda mai koyo ko mai gudanarwa ya tattara",
      "Idan zai yiwu, ingantaccen murhu, murhun gas ko kwandon riƙe zafi don nuna wa ƙungiyar",
      "Kusan minti 60 gaba ɗaya, a gajerun zama"
    ],
    facilitatorNotes: [
      "Abokan aiki masu kyau: ƙungiyoyin mata, ƙungiyoyin adashe, makarantu, asibitoci, ma'aikatan lafiya na al'umma da kamfanonin girki mai tsabta na wurin (kada ku tallata wata alama ɗaya).",
      "Ku tattara farashin gaske na murhu da makamashi na wurin kafin zaman; kwas ɗin yana amfani da lambobin misali na ƙirƙira kaɗai.",
      "Nuni a waje yana aiki sosai: ku kwatanta hayaƙin itace mai ɗanshi da busasshe, ko na duwatsu uku da ingantaccen murhu.",
      "Tsaron gas: ku nuna yadda ake kashe bakin silinda da duba bututu; kada a taɓa gwada zubar gas da wuta. Kada ku bar masu koyo su yi aiki kan wayoyin wuta ko bututun gas.",
      "Ƙuna da guba: ku koyar da taimakon farko daga WHO kuma ku tura masu koyo asibiti; kada ku ba da shawarar magani.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
