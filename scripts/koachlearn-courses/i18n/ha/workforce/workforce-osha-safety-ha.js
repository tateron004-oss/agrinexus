"use strict";

// Koach Learn course, Hausa (ha) translation of workforce/workforce-osha-safety.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "workforce-osha-safety-ha",
  lang: "ha",
  translationOf: "workforce-osha-safety",
  category: "Workforce Development",
  name: "Tushen Tsaro a Wurin Aiki (OSHA)",
  skills: "Gano haɗari, Zaɓa da amfani da PPE, Hana zamewa, tuntuɓe da faɗuwa, Ɗaga kaya lafiya, Karanta takardar bayanin tsaron sinadari, Kai rahoton rauni da amfani da haƙƙoƙinku na tsaro",
  outcome: "zagaya wurin aiki ku gano haɗari, zaɓar PPE da ta dace, ɗaga da motsa kaya lafiya, nemo abin da kuke buƙata a takardar bayanin tsaron sinadari (SDS), kai rahoton rauni ko haɗari ta hanyar da ta dace, da bayyana haƙƙinku na samun aiki mai tsaro da abin da OSHA 10 da OSHA 30 suke nufi.",
  about: [
    "Wannan kwas na duk wanda ke fara aiki ko yake aiki a rumbun ajiyar kaya, gini, kicin, aikin share-share, shago, masana'anta, asibiti ko duk wani aiki da mutane za su iya ji rauni. Yana koyar da tushen tsaro da masu ɗaukar aiki ke sa rai tun ranar farko.",
    "Za ku yi atisayen zagayen neman haɗari, ku koyi yadda ake amfani da kayan kariya, ku hana raunukan da aka fi samu (zamewa, tuntuɓe, faɗuwa da ciwon jiki daga ɗaga kaya), ku karanta takardar bayanin tsaron wani sinadari, kuma ku san yadda ake kai rahoton rauni ko haɗari. Za ku kuma koyi haƙƙoƙinku a ƙarƙashin hukumar Occupational Safety and Health Administration (OSHA), hukumar tsaro da lafiya a wurin aiki ta Amurka, da abin da katin OSHA na awa 10 da na awa 30 suke nufi.",
    "Kowane darasi yana ɗaukar kusan minti biyar. Ku karanta darasin, ku kalli hotunan bayani (slides), sannan ku yi aikin \"Gwada yanzu\". Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe. Wannan kwas ilimin tsaro ne na gama-gari. Koyaushe ku bi horo da dokokin mai ɗaukar ku aiki don aikinku, kuma ku duba osha.gov don dokokin yanzu."
  ],
  finalTask: "Ku yi zagayen neman haɗari na minti 10 a wani wuri na gaske (wurin aikinku, ɗakin ajiyar kaya, gareji ko gidanku). Ku rubuta rahoton haɗari mai lissafa aƙalla haɗari biyar, nau'in kowanne (zamewa/tuntuɓe/faɗuwa, ɗaga kaya, sinadari, inji, wutar lantarki, wani), PPE ko gyaran da ake buƙata, da wanda za ku kai wa rahoton kowanne. Ku ƙara sassan takardar bayanin tsaro (SDS) da za ku karanta don sinadari ɗaya da kuka samu, sannan ku rubuta matakan da za ku ɗauka idan wani ya ji rauni.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Masu neman aiki da sababbi ko tsofaffin ma'aikata a rumbun ajiyar kaya, gini, kicin, aikin share-share, shaguna, masana'antu da asibitoci, har da matasa ma'aikata, masu canja sana'a da mutanen da ke komawa aiki.",
    startingPoint: "Suna da ɗan gogewa a aiki ko a gida kuma suna ganin haɗari a bayyane, amma ba a koya musu zagayen neman haɗari ba, ko yadda ake karanta takardar bayanin tsaron sinadari, ko yadda ake kai rahoton rauni, ko haƙƙoƙinsu a ƙarƙashin OSHA.",
    gap: "Masu ɗaukar aiki suna sa ran ɗabi'un tsaro na asali tun ranar farko. Ma'aikatan da ba za su iya gano haɗari, zaɓar PPE, ɗaga kaya lafiya ko kai rahoton rauni ta hanyar da ta dace ba sun fi yiwuwa su ji rauni, kuma suna iya rasa haƙƙinsu na diyyar ma'aikata (workers' compensation). Sanin wannan tushe kuma yana taimaka musu samun aiki da yin magana lafiya.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli (kusan aji 6)",
      "Na'urori: waya ko kwamfutar da ake rabawa; atisaye yana amfani da ɗaki a gida ko a wurin aiki",
      "Lokaci: darussa na kusan minti biyar da suka dace da lokutan aiki",
      "Ilimin tsaro na gama-gari kawai: masu koyo suna bin horon mai ɗaukar su aiki kuma suna duba osha.gov don dokokin yanzu",
      "Atisaye dole ya zama lafiya: babu hawa sama, babu ɗaga kaya masu nauyi kai kaɗai, babu haɗa sinadarai"
    ],
    prerequisites: "Babu."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Yayin zagaya wurin aiki, ɗakin ajiyar kaya ko gida", action: "gano haɗari, faɗin nau'in kowanne, da yanke ko za a gyara shi ko a kai rahotonsa", standard: "kuna lissafa aƙalla haɗari biyar da nau'in da ya dace" },
    { id: "O2", condition: "Idan aka ba ku wani aiki da haɗarinsa", action: "zaɓa da duba PPE da ta dace da kowane haɗari", standard: "kuna daidaita kayan da kowane haɗari kuma kuna gane kayan da suka lalace" },
    { id: "O3", condition: "Idan kuna aiki a ƙasa, a kan tsani ko da kaya", action: "nuna matakan da ke hana zamewa, tuntuɓe da faɗuwa, da ɗaga kaya lafiya", standard: "kuna bin kowane mataki ba tare da murɗa bayanku ba" },
    { id: "O4", condition: "Idan aka ba ku wani sinadari", action: "nemo haɗari, PPE da taimakon gaggawa a alamarsa da takardar bayanin tsaronsa (SDS)", standard: "kuna faɗin sassan SDS da suka dace (2, 4 da 8)" },
    { id: "O5", condition: "Idan wani ya ji rauni ko kun sami haɗari", action: "lissafa matakan amsawa da rubuta gajeren rahoton rauni ko haɗari", standard: "kuna haɗa me ya faru, yaushe, ina da wa ya gani, kuma kuna kai rahoto nan take" },
    { id: "O6", condition: "Idan aka ba ku matsalar tsaro da ba a gyara ba ko aikin da kuke so", action: "bayyana haƙƙoƙinku na tsaro, yadda ake shigar da ƙorafi ga OSHA, da ko OSHA 10 ko OSHA 30 ne ya dace", standard: "kuna faɗin matakai da kwas da suka dace ba tare da taimako ba" }
  ],
  chapters: [
    {
      name: "Babi na 1: Gano haɗari da hana su",
      lessons: [
        {
          objectives: ["O1"],
          title: "Gano haɗari ta zagayen neman haɗari",
          minutes: 5,
          goal: "Zagaya wani wuri ku lissafa haɗarin da kuka gani bisa nau'insu.",
          text: [
            "Haɗari shi ne duk abin da ke wurin aiki da zai iya cutar da mutum: ƙasa mai jiƙe, waya a kan hanyar wucewa, akwati mai nauyi a kan shiryayye mai tsayi, inji ba tare da murfin kariyarsa (guard) ba, sinadari da ke zuba, ƙara mai ƙarfi ko ƙofar fita da aka toshe.",
            "Zagayen neman haɗari shi ne duba wani wuri a hankali, bisa tsari. Ku kalli ƙasa (bene, wayoyi, abubuwan da suka zube), ku kalli sama (shiryayyu masu tsayi, kayan da ke sama, tsani), ku kalli kewaye (injuna, motoci, sinadarai, ƙofofin fita, na'urorin kashe gobara), kuma ku saurara (ƙara mai ƙarfi, ƙararrawa, sautuka na ban mamaki daga kayan aiki).",
            "Ku rarraba abin da kuka samu: zamewa, tuntuɓe da faɗuwa; ɗaga kaya da ciwon jiki; sinadarai; injuna da sassan da ke motsi; wutar lantarki; motoci kamar forklift (motar ɗaga kaya); zafi, sanyi da ƙara; da gobara da ƙofofin fita.",
            "Idan kun sami haɗari, ku gyara shi nan take idan ƙarami ne kuma lafiya ne ku yi haka (share abin da ya zube, matsar da akwati daga hanyar wucewa), sannan ku faɗa wa mai kula da ku (supervisor). Idan ba lafiya ba ne ko ba a horar da ku ba, ku hana mutane kusantarsa ku kai rahotonsa."
          ],
          steps: ["Ku zaɓi wani wuri ku yi tafiya a hankali.", "Ku kalli ƙasa: bene, wayoyi, abubuwan da suka zube.", "Ku kalli sama: shiryayyu, kayan da ke sama, tsani.", "Ku kalli kewaye: injuna, motoci, sinadarai, ƙofofin fita.", "Ku rubuta kowane haɗari da nau'insa.", "Ku gyara ƙanana idan lafiya ne, kuma ku kai rahoton komai ga mai kula da ku."],
          words: [["Haɗari (hazard)", "wani abu a wurin aiki da zai iya jawo rauni ko rashin lafiya."], ["Zagayen neman haɗari (hazard walk)", "tafiya a hankali, bisa tsari, a cikin wani wuri don neman haɗari."], ["Murfin kariya (guard)", "murfi ko shamaki a jikin inji da ke hana hannu da jiki kusantar sassan da ke motsi."]],
          slides: [
            { title: "Mene ne haɗari", bullets: ["Duk abin da zai iya cutar da mutum", "Ƙasa mai jiƙe, wayoyi a kwance, inji ba murfin kariya", "Sinadarai, ƙara mai ƙarfi, ƙofofin fita da aka toshe"] },
            { title: "Ku kalli ƙasa, sama da kewaye", bullets: ["Ƙasa: bene, wayoyi, abubuwan da suka zube", "Sama: shiryayyu masu tsayi, kayan da ke sama", "Kewaye: injuna, motoci, ƙofofin fita"] },
            { title: "Nau'o'in haɗari", bullets: ["Zamewa, tuntuɓe da faɗuwa; ɗaga kaya", "Sinadarai; injuna; wutar lantarki", "Motoci; zafi, sanyi, ƙara; gobara"] },
            { title: "Abin da za ku yi", bullets: ["Ku gyara ƙananan haɗari idan lafiya ne", "Ku hana mutane kusantar manya", "Koyaushe ku faɗa wa mai kula da ku"] }
          ],
          tryIt: "Ku yi zagayen neman haɗari na minti biyar a ɗaki ɗaya a gidanku, ɗakin ajiyar kaya ko wurin aikinku. Ku rubuta aƙalla haɗari biyar da nau'in kowanne.",
          youCanNow: "zagaya wani wuri, gano haɗari bisa nau'insu, da yanke ko za ku gyara kowanne ko ku kai rahotonsa.",
          quickCheck: [
            { objective: "O1", q: "A zagayen neman haɗari, \"kallon ƙasa\" yana nufin duba me?", options: ["Bene, wayoyi da abubuwan da suka zube", "Shiryayyu masu tsayi da tsani", "Injuna da motoci", "Ƙararrawa da sautuka na ban mamaki"], answer: 0, why: "Kallon ƙasa yana nufin duba bene don wayoyi, abubuwan da suka zube da abubuwan da za ku iya tuntuɓe da su." },
            { objective: "O1", q: "Kun ga murfin kariyar wani inji ya ɓace, kuma ba a horar da ku gyara shi ba. Me za ku yi?", options: ["Ku gyara shi da kanku da sauri", "Ku hana mutane kusantarsa ku kai rahotonsa", "Ku ƙyale shi har lokacin hutu", "Ku ci gaba da amfani da injin a hankali"], answer: 1, why: "Idan haɗari ba lafiya ba ne ku gyara shi, ku hana mutane kusantarsa ku kai rahotonsa." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Amfani da PPE ta hanyar da ta dace",
          minutes: 5,
          goal: "Zaɓa, duba da sanya kayan kariyar da suka dace da wani aiki.",
          text: [
            "Kayan kariya na jiki (PPE) kayan da kuke sanyawa don kare jikinku ne: gilashin kariya ko goggles, garkuwar fuska, hular kwano (hard hat), safar hannu, takalman kariya masu ƙarfen kan yatsa, kariyar kunne (abin toshe kunne ko earmuffs), rigar da ke haske (high-visibility vest), na'urar numfashi (respirator) da ɗamarar kariya daga faɗuwa (harness).",
            "Ku daidaita kayan da haɗarin: gilashi don ɓarɓashin da ke tashi ko abin da ke fesawa; safar hannu da ta dace da aikin (mai hana yanka don wuƙa, safar hannu ta sinadarai don sinadarai, kamar yadda takardar bayanin tsaro ta faɗa); kariyar kunne don kayan aiki masu ƙara; hular kwano inda abubuwa za su iya faɗowa; rigar da ke haske kusa da motoci.",
            "Ku duba su kafin kowane amfani: babu tsagewa, ramuka ko madauri da suka tsufa. Dole su dace da ku. Dole a yi muku gwajin dacewa (fit test) da na'urar numfashi, kuma a horar da ku, kafin ku yi amfani da ita.",
            "PPE ita ce kariya ta ƙarshe. Ya fi kyau a cire haɗarin da farko, misali ta sanya murfin kariya a jikin inji ko ajiye kaya masu nauyi a ƙasa. A ƙarƙashin dokokin OSHA, yawanci dole ne mai ɗaukar aiki ya samar da PPE da ake buƙata kuma ya horar da ku amfani da ita."
          ],
          steps: ["Ku duba aikin da haɗarinsa.", "Ku zaɓi PPE da ta dace da kowane haɗari.", "Ku duba ta don lalacewa.", "Ku sanya ta ku tabbatar ta dace da ku.", "Ku tsabtace ta ku ajiye ta bayan amfani; ku kai rahoton kayan da suka lalace."],
          words: [["PPE", "personal protective equipment (kayan kariya na jiki): kayan da kuke sanyawa don kare kanku daga haɗari."], ["Na'urar numfashi (respirator)", "abin rufe fuska da ke kare huhunku daga ƙura, hayaƙi ko iskar gas; yana buƙatar gwajin dacewa da horo."], ["Gwajin dacewa (fit test)", "dubawa cewa na'urar numfashi ta rufe fuskarku sosai ba tare da iska ta shiga ta gefe ba."]],
          slides: [
            { title: "PPE da aka saba amfani da ita", bullets: ["Ido da fuska: gilashi, goggles, garkuwa", "Kai, hannu, ƙafa: hular kwano, safar hannu, takalma", "Kunne, huhu, gani: abin toshe kunne, respirator, riga mai haske"] },
            { title: "Ku daidaita kayan da haɗarin", bullets: ["Ɓarɓashin da ke tashi: gilashin kariya", "Sinadarai: safar hannun da takardar bayanin tsaro ta ambata", "Kayan aiki masu ƙara: kariyar kunne"] },
            { title: "Ku duba kafin kowane amfani", bullets: ["Babu tsagewa, ramuka ko madauri da suka tsufa", "Dole ta dace da ku", "Respirator yana buƙatar gwajin dacewa da horo"] },
            { title: "Kariya ta ƙarshe", bullets: ["Ku cire haɗarin da farko idan za ku iya", "Yawanci mai ɗaukar aiki ne dole ya samar da PPE da ake buƙata"] }
          ],
          sources: [
            { name: "OSHA: Kayan kariya na jiki (PPE)", url: "https://www.osha.gov/personal-protective-equipment" }
          ],
          tryIt: "Ku zaɓi ayyuka uku: yanka kwali da wuƙar yanka kwali (box cutter), goge ƙasa da sinadarin tsaftacewa, da amfani da na'urar hura ganye (leaf blower). Don kowanne, ku rubuta PPE da za ku sanya da dalilin haka.",
          youCanNow: "zaɓa, duba da sanya PPE da ta dace da wani aiki, da sanin cewa ita ce kariya ta ƙarshe.",
          quickCheck: [
            { objective: "O2", q: "Mene ne babban dalilin duba PPE kafin kowane amfani?", options: ["Don ganin ko sabuwar samfur ce", "Don tabbatar launinta ya dace", "Don nemo tsagewa, ramuka ko madauri da suka tsufa", "Don ƙirga yawan da kuke da shi"], answer: 2, why: "Kayan da suka lalace ba za su iya kare ku ba, don haka kuna duba su kafin kowane amfani." },
            { objective: "O2", q: "Za ku yi ta yanka kwali da wuƙar yanka kwali duk yini. Wace safar hannu za ku zaɓa?", options: ["Safar hannu ta sinadarai", "Siririyar safar hannu ta zane", "Babu safar hannu", "Safar hannu mai hana yanka"], answer: 3, why: "Safar hannu mai hana yanka ta dace da haɗarin wuƙa." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Zamewa, tuntuɓe, faɗuwa da ɗaga kaya lafiya",
          minutes: 5,
          goal: "Hana zamewa, tuntuɓe da faɗuwa, da ɗaga kaya lafiya.",
          text: [
            "Zamewa, tuntuɓe da faɗuwa suna cikin raunukan aiki da aka fi samu. Ku hana su: ku share abin da ya zube nan take ku sanya alamar \"ƙasa a jiƙe\"; ku bar hanyoyin wucewa babu wayoyi, kwalaye da bututun ruwa; ku riƙe abin riƙo na matakala; ku sanya takalma masu riƙe ƙasa sosai; kuma ku tabbatar wuraren aiki suna da haske sosai.",
            "Aiki a sama: ku yi amfani da tsanin da ya dace, ku ajiye shi a kan ƙasa mai ƙarfi kuma a daidai, ku riƙe wurare uku na taɓawa (hannaye biyu da ƙafa ɗaya, ko ƙafafu biyu da hannu ɗaya), kuma kada ku taɓa tsayawa a kan matakin ƙarshe na sama. Ana buƙatar kariya daga faɗuwa, kamar shingen kariya (guardrail) ko ɗamara (harness), a wasu tsayi; ƙa'idar gama-gari ta OSHA ita ce ƙafa 4 a masana'antu na gama-gari da ƙafa 6 a gini. Ku bi horon wurin aikinku.",
            "Ɗaga kaya: ku shirya yadda za ku ɗaga ku duba nauyin. Ku nemi taimako ko ku yi amfani da keken tura kaya, dolly ko forklift don kaya masu nauyi ko masu wuyar riƙewa. Ku tsaya kusa da kayan, ƙafafunku a buɗe, ku lanƙwasa gwiwoyinku, ku riƙe bayanku a miƙe, ku riƙe kayan kusa da jikinku, ku ɗaga da ƙarfin ƙafafunku, kuma ku juya da ƙafafunku maimakon murɗa bayanku.",
            "Ku kai rahoton ciwo da wuri. Ƙananan ciwon tsoka suna ƙara muni idan kuka ci gaba da aiki da su."
          ],
          steps: ["Ku share abin da ya zube ku sanya alamar ƙasa a jiƙe.", "Ku bar hanyoyin wucewa a buɗe.", "A kan tsani: ƙasa mai ƙarfi, wurare uku na taɓawa, ba matakin ƙarshe na sama ba.", "Kafin ɗagawa: ku duba nauyin ku nemi taimako ko keken tura kaya idan ana buƙata.", "Ɗagawa: lanƙwasa gwiwa, baya a miƙe, kaya kusa da jiki, ɗaga da ƙafafu, juya da ƙafafu."],
          words: [["Wurare uku na taɓawa", "koyaushe kuna da hannaye biyu da ƙafa ɗaya, ko ƙafafu biyu da hannu ɗaya, a kan tsani."], ["Kariya daga faɗuwa", "shingen kariya, ragar tsaro ko ɗamara (harness) da ke tsayar da faɗuwa ko hana ta daga sama."]],
          slides: [
            { title: "Hana zamewa da tuntuɓe", bullets: ["Ku share abin da ya zube; ku sanya alamar ƙasa a jiƙe", "Ku cire wayoyi da kwalaye daga hanyoyin wucewa", "Takalma masu kyau da haske mai kyau"] },
            { title: "Tsani da wurare masu tsayi", bullets: ["Ƙasa mai ƙarfi, a daidai", "Wurare uku na taɓawa; ba matakin ƙarshe na sama ba", "Kariya daga faɗuwa: ƙafa 4 masana'antu na gama-gari, ƙafa 6 gini"] },
            { title: "Ɗaga kaya lafiya", bullets: ["Ku duba nauyi; ku nemi taimako ko keken tura kaya", "Lanƙwasa gwiwa, baya a miƙe, kaya kusa da jiki", "Ku ɗaga da ƙafafu; ku juya da ƙafafu"] },
            { title: "Ku kai rahoton ciwo da wuri", bullets: ["Ƙananan ciwon tsoka suna ƙara muni idan an ƙyale su"] }
          ],
          sources: [
            { name: "OSHA: Kariya daga faɗuwa", url: "https://www.osha.gov/fall-protection" },
            { name: "OSHA: Wuraren tafiya da aiki", url: "https://www.osha.gov/walking-working-surfaces" }
          ],
          tryIt: "Ku yi atisayen ɗaga kaya lafiya da kwalin littattafai ko kayan cefane: ku duba nauyin, ku tsaya kusa, ku lanƙwasa gwiwoyinku, ku riƙe bayanku a miƙe, ku ɗaga da ƙafafunku, ku juya da ƙafafunku. Sannan ku rubuta abubuwa uku da za ku gyara don hana zamewa da tuntuɓe inda kuke aiki ko zama.",
          youCanNow: "hana zamewa, tuntuɓe da faɗuwa, amfani da tsani lafiya, da ɗaga kaya ta hanyar da ta dace.",
          quickCheck: [
            { objective: "O3", q: "A kan me bai kamata ku taɓa tsayawa ba idan kuna amfani da tsani?", options: ["Matakin ƙarshe na sama", "Matakin ƙasa", "Matakin tsakiya", "Ƙasa mai ƙarfi, a daidai"], answer: 0, why: "Tsayawa a matakin ƙarshe na sama yana sa a rasa daidaito cikin sauƙi a faɗi." },
            { objective: "O3", q: "Kuna buƙatar juyawa yayin da kuke ɗauke da akwati. Yaya za ku yi?", options: ["Ku murɗa kugu", "Ku juya da ƙafafunku", "Ku riƙe akwatin nesa da jikinku", "Ku kulle gwiwoyinku ku juya"], answer: 1, why: "Juyawa da ƙafafu yana riƙe bayanku a miƙe kuma yana hana ciwon tsoka." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Gano haɗari da hana su",
        questions: [
          { objective: "O1", q: "Kun ga wayar wutar lantarki a miƙe a kan hanyar wucewa. Wane irin haɗari ne?", options: ["Sinadari", "Ƙara", "Zamewa, tuntuɓe ko faɗuwa", "Zafi"], answer: 2, why: "Wayoyi a kan hanyar wucewa suna sa a yi tuntuɓe." },
          { objective: "O1", q: "Me ya kamata ku yi da ƙaramin abin da ya zube da za ku iya share shi lafiya?", options: ["Ku zagaye shi", "Ku share shi, ku sanya alama idan ƙasa ta jiƙe, ku faɗa wa mai kula da ku", "Ku rufe shi da akwati", "Ku jira masu aiki na gaba"], answer: 1, why: "Gyara ƙananan haɗari nan take da kai rahotonsu yana hana raunuka." },
          { objective: "O2", q: "Wace PPE ta dace da aiki da na'urar hura ganye mai ƙara sosai?", options: ["Kariyar kunne", "Hular kwano kawai", "Ɗamarar kariya daga faɗuwa", "Babu komai"], answer: 0, why: "Kariyar kunne tana kare ku daga ƙara mai ƙarfi." },
          { objective: "O2", q: "Me yasa ake kiran PPE kariya ta ƙarshe?", options: ["Ita ce mafi tsada", "Ba dole ba ce", "Koyaushe tana hana kowane rauni", "Ya fi kyau a cire haɗarin da farko"], answer: 3, why: "Cire haɗari ko rufe shi yana kare kowa; PPE tana kare wanda ya sanya ta kaɗai." },
          { objective: "O3", q: "Wace ce ɗabi'ar ɗaga kaya lafiya?", options: ["Ku murɗa bayanku don juyawa", "Ku riƙe kaya nesa da jikinku", "Ku lanƙwasa gwiwoyinku, ku riƙe kaya kusa, ku juya da ƙafafunku", "Ku ɗaga kaya masu nauyi kai kaɗai don ajiye lokaci"], answer: 2, why: "Wannan yana sa nauyin ya hau ƙafafunku, ba bayanku ba." }
        ]
      }
    },
    {
      name: "Babi na 2: Sinadarai, raunuka da haƙƙoƙinku",
      lessons: [
        {
          objectives: ["O4"],
          title: "Sinadarai da takardun bayanin tsaro (SDS)",
          minutes: 5,
          goal: "Nemo haɗari, PPE da taimakon gaggawa na wani sinadari a takardar bayanin tsaronsa.",
          text: [
            "Wuraren aiki da yawa suna amfani da sinadarai masu haɗari: sinadaran tsaftacewa, bleach (sinadarin goge launi), sinadaran cire maiko, fenti, mai, magungunan kashe ƙwari. Ƙa'idar Hazard Communication ta OSHA (sanar da haɗari) ta ce ma'aikata suna da haƙƙin sanin sinadaran da suke aiki da su.",
            "Dole kwantena su kasance da alama (label) da ke nuna sunan kayan, hotunan gargaɗi (pictograms, alamomi masu iyakar ja), kalmar gargaɗi (\"Danger\", wato Haɗari, don haɗari mafi tsanani, \"Warning\", wato Gargaɗi, don marasa tsanani sosai), da bayanan haɗari da na matakan kiyayewa.",
            "Kowane sinadari mai haɗari yana da takardar bayanin tsaro (SDS) mai sassa 16 a tsari ɗaya. Masu amfani: Sashe na 2, haɗari; Sashe na 4, taimakon gaggawa; Sashe na 7, sarrafawa da ajiya lafiya; Sashe na 8, matakan hana shaƙa ko taɓawa da PPE. Dole mai ɗaukar ku aiki ya ajiye SDS na sinadaran da kuke amfani da su kuma ya horar da ku a kansu. Ku tambayi inda ake ajiye su.",
            "Ɗabi'u masu tsaro: kada ku taɓa haɗa sinadarai (bleach da ammonia suna haifar da iskar gas mai guba), ku ajiye sinadarai a kwantena masu alama, ku yi amfani da PPE da ke Sashe na 8, kuma ku yi aiki inda iska take shiga da fita sosai."
          ],
          steps: ["Ku karanta alamar kwantena: suna, hotunan gargaɗi, kalmar gargaɗi.", "Ku nemo SDS na kayan.", "Sashe na 2: wane haɗari ne?", "Sashe na 8: wace PPE nake buƙata?", "Sashe na 4: mene ne taimakon gaggawa?", "Kada ku taɓa haɗa sinadarai, kuma ku bar su da alamominsu."],
          words: [["Takardar bayanin tsaro (SDS)", "takarda mai sassa 16 game da wani sinadari: haɗarinsa, sarrafawa lafiya, PPE da taimakon gaggawa."], ["Hoton gargaɗi (pictogram)", "alama a cikin murabba'i mai iyakar ja a alamar sinadari da ke nuna irin haɗarin."], ["Kalmar gargaɗi (signal word)", "\"Danger\" (mafi tsanani) ko \"Warning\" (marasa tsanani sosai) a alamar sinadari."]],
          slides: [
            { title: "Haƙƙinku na sani", bullets: ["Alama a kan kowane kwantena", "Takardar bayanin tsaro don kowane sinadari mai haɗari", "Horo kan sinadaran da kuke amfani da su"] },
            { title: "Ku karanta alamar", bullets: ["Sunan kayan", "Hotunan gargaɗi a cikin murabba'i masu iyakar ja", "Kalmar gargaɗi: Danger ko Warning"] },
            { title: "Sassan SDS da ya kamata ku sani", bullets: ["2: haɗari", "4: taimakon gaggawa", "7: sarrafawa da ajiya", "8: matakan kariya da PPE"] },
            { title: "Ɗabi'u masu tsaro", bullets: ["Kada ku taɓa haɗa sinadarai", "Ku bar komai da alamarsa", "Ku yi amfani da PPE da ke Sashe na 8"] }
          ],
          sources: [
            { name: "OSHA: Sanar da haɗari (Hazard Communication)", url: "https://www.osha.gov/hazcom" }
          ],
          tryIt: "Ku nemo wani sinadarin tsaftacewa a gida ko a wurin aiki. Ku karanta alamarsa (hotunan gargaɗi da kalmar gargaɗi). Sannan ku nemi sunan kayan tare da \"safety data sheet\" a shafin intanet na kamfanin da ya yi shi, ku rubuta abin da Sashe na 2, 4 da 8 suka faɗa.",
          youCanNow: "karanta alamar sinadari da nemo haɗari, PPE da taimakon gaggawa a takardar bayanin tsaronsa.",
          quickCheck: [
            { objective: "O4", q: "Mene ne hoton gargaɗi (pictogram) a alamar sinadari?", options: ["Farashin kayan", "Lambar wayar kamfanin da ya yi shi", "Alama mai iyakar ja da ke nuna haɗari", "Ranar da aka yi shi"], answer: 2, why: "Hotunan gargaɗi alamomi ne masu iyakar ja da ke nuna irin haɗarin." },
            { objective: "O4", q: "Wani sinadari ya fesa a idon abokin aikinku. Wane sashe na SDS za ku duba?", options: ["Sashe na 2", "Sashe na 7", "Sashe na 8", "Sashe na 4"], answer: 3, why: "Sashe na 4 na takardar bayanin tsaro yana ba da matakan taimakon gaggawa." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kai rahoton raunuka da haɗari",
          minutes: 5,
          goal: "Ɗaukar matakan da suka dace idan wani ya ji rauni da kai rahoto daidai.",
          text: [
            "Idan wani ya ji rauni mai tsanani, ku fara kiran 911 (lambar gaggawa ta Amurka) ko lambar gaggawa ta wurin aikinku. Kada ku motsa shi sai idan yana cikin haɗari. Ku kira wanda aka horar a taimakon gaggawa idan wurin aikinku yana da shi.",
            "Ku kai rahoton kowane rauni ko rashin lafiya na aiki ga mai kula da ku nan take, har ma da ƙanana kamar yanka ko ciwon tsoka. Rahoto da wuri yana sa a kula da ku, yana kare haƙƙinku na diyyar ma'aikata (workers' compensation) a jiharku, kuma yana taimakawa a gyara haɗarin don kada ya cutar da wani. Ku rubuta me ya faru, yaushe, ina, da wa ya gani.",
            "Masu ɗaukar aiki ma suna da nauyi. Dole su kai rahoto ga OSHA cikin awa 8 idan ma'aikaci ya mutu daga hatsarin aiki, kuma cikin awa 24 idan an kwantar da ma'aikaci a asibiti, ko an yanke masa wani sashe na jiki, ko ya rasa ido. Masu ɗaukar aiki da yawa kuma dole su ajiye bayanan raunuka, kuma ma'aikata suna da haƙƙin ganinsu.",
            "Ku kai rahoton haɗari ta hanya ɗaya: ku faɗa wa mai kula da ku, ku rubuta shi, kuma ku hana mutane kusantarsa har a gyara shi. Dokokin OSHA sun haramta wa mai ɗaukar aiki hukunta ku don kai rahoton rauni ko haɗari."
          ],
          steps: ["Rauni mai tsanani: ku fara kiran 911 ko lambar gaggawa ta wurin aiki.", "Ku sami taimakon gaggawa daga wanda aka horar.", "Ku faɗa wa mai kula da ku nan take, har ma don ƙananan raunuka.", "Ku rubuta me ya faru, yaushe, ina, da wa ya gani.", "Ku tambayi game da diyyar ma'aikata ku bi diddigin gyaran."],
          words: [["Diyyar ma'aikata (workers' compensation)", "inshorar jiha da ke biyan kuɗin magani da wani ɓangare na albashin da aka rasa saboda raunin aiki."], ["Rajistar raunuka (injury log)", "bayanan mai ɗaukar aiki na raunuka da rashin lafiya na aiki; ma'aikata suna da haƙƙin ganinsu."]],
          slides: [
            { title: "Rauni mai tsanani", bullets: ["Ku kira 911 ko lambar gaggawa ta wurin aiki", "Kada ku motsa shi sai idan yana cikin haɗari", "Ku kira wanda aka horar a taimakon gaggawa"] },
            { title: "Ku kai rahoton kowane rauni", bullets: ["Ku faɗa wa mai kula da ku nan take", "Ku rubuta me, yaushe, ina, wa ya gani", "Yana kare buƙatarku ta diyyar ma'aikata"] },
            { title: "Nauyin mai ɗaukar aiki", bullets: ["Mutuwa: rahoto ga OSHA cikin awa 8", "Kwanciya a asibiti, yanke sashen jiki, rasa ido: awa 24", "Ajiye bayanan raunuka da ma'aikata za su iya gani"] },
            { title: "Ana kare masu kai rahoto", bullets: ["Hukunta ku don kai rahoto haramun ne"] }
          ],
          sources: [
            { name: "OSHA: Kai rahoton mutuwa ko rauni mai tsanani", url: "https://www.osha.gov/report" },
            { name: "OSHA: Dokar kai rahoto 29 CFR 1904.39", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1904/1904.39" }
          ],
          tryIt: "Ku rubuta matakan da za ku ɗauka idan abokin aikinku ya yanke hannunsa sosai da wuƙar yanka kwali. Sannan ku rubuta gajeren rahoton rauni: me ya faru, yaushe, ina, wa ya gani, da abin da ya kamata a canja.",
          youCanNow: "amsa wa rauni, kai rahotonsa daidai kuma a kan lokaci, da sanin abin da dole mai ɗaukar ku aiki ya kai rahotonsa.",
          quickCheck: [
            { objective: "O5", q: "Wane bayani ne ya kamata a cikin rahoton rauni?", options: ["Me ya faru, yaushe, ina, da wa ya gani", "Sunan ma'aikacin da ya ji rauni kawai", "Wanda kuke ganin shi ke da laifi", "Ra'ayinku game da mai kula da ku"], answer: 0, why: "Rahoto mai sarari yana faɗin me ya faru, yaushe, ina da wa ya gani." },
            { objective: "O5", q: "Kun ji ciwo a baya saboda ɗaga kaya, amma yana ɗan ciwo ne kaɗan. Me za ku yi?", options: ["Ku ci gaba da aiki ba tare da faɗa ba", "Ku faɗa wa mai kula da ku nan take", "Ku jira wata ɗaya ku ga ko zai ƙara muni", "Ku faɗa wa abokin aiki kawai"], answer: 1, why: "Kai rahoto da wuri yana sa a kula da ku kuma yana kare haƙƙinku na diyyar ma'aikata." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Haƙƙoƙinku na tsaro, OSHA 10 da OSHA 30",
          minutes: 5,
          goal: "Bayyana haƙƙinku na aiki mai tsaro, yadda ake shigar da ƙorafi ga OSHA, da abin da OSHA 10 da 30 suke nufi.",
          text: [
            "A ƙarƙashin dokar Occupational Safety and Health Act, dole mai ɗaukar ku aiki ya samar da wurin aiki da babu sanannun haɗari masu tsanani. Kuna da haƙƙin samun horo a harshen da kuke fahimta, samun kayan tsaro da ake buƙata, ganin bayanan raunuka da sakamakon gwaje-gwaje game da haɗari, kai rahoton haɗari, da neman OSHA ta zo ta duba wurin aikinku.",
            "Idan ba a gyara wani haɗari ba, kuna iya shigar da ƙorafi ga OSHA ta intanet, ta waya a 1-800-321-OSHA (6742), ta wasiƙa ko a ofishin OSHA, kuma ku nemi kada a bayyana sunanku ga mai ɗaukar ku aiki. Idan mai ɗaukar ku aiki ya hukunta ku don kun yi magana game da tsaro, ku shigar da ƙorafin mai fallasa (whistleblower) ga OSHA da wuri-wuri; a ƙarƙashin dokar tarayya, wa'adin kwana 30 ne.",
            "OSHA 10 da OSHA 30 kwasa-kwasai ne a cikin shirin Outreach Training Program na OSHA, wanda ba dole ba ne. OSHA 10 kwas ne na awa 10 don sababbin ma'aikata kan gane haɗari da haƙƙoƙin ma'aikata. OSHA 30 kwas ne na awa 30 don masu kula (supervisors) da ma'aikatan da ke da nauyin tsaro. Akwai nau'i don gini da nau'i don masana'antu na gama-gari. Kuna samun katin kammala kwas.",
            "Katunan ba lasisi ba ne kuma ba takardar shaidar ƙwarewa (certification) ba ne, amma masu ɗaukar aiki da yawa, ƙungiyoyin ma'aikata (unions) da wasu jihohi suna neman su. Masu horarwa da OSHA ta amince da su ne kaɗai za su iya bayar da katunan gaske, don haka ku ɗauki kwas ɗin daga mai horarwa ko kamfani da aka amince da shi, kuma ku yi hattara da tayin da ya yi arha ko sauri fiye da kima."
          ],
          steps: ["Ku fara kai rahoton haɗari ga mai kula da ku, idan lafiya ne.", "Idan ba a gyara ba, ku shigar da ƙorafi ga OSHA ta intanet ko a 1-800-321-6742.", "Ku nemi a ɓoye sunanku idan kuna so.", "Idan an hukunta ku don kai rahoto, ku shigar da ƙorafin mai fallasa cikin kwana 30.", "Ku zaɓi OSHA 10 (sababbin ma'aikata) ko OSHA 30 (masu kula), na gini ko na masana'antu na gama-gari, daga mai horarwa da aka amince da shi."],
          words: [["OSHA", "Occupational Safety and Health Administration, hukumar tarayya ta Amurka mai kula da tsaro a wurin aiki."], ["Outreach Training Program", "shirin OSHA na kwasa-kwasan tsaro na awa 10 da awa 30, wanda ba dole ba ne, da masu horarwa da aka amince da su ke koyarwa."], ["Mai fallasa (whistleblower)", "ma'aikacin da ya kai rahoton wata matsala; doka tana kare shi daga hukunci saboda haka."]],
          slides: [
            { title: "Haƙƙinku na aiki mai tsaro", bullets: ["Wurin aiki da babu sanannun haɗari masu tsanani", "Horo a harshen da kuke fahimta", "Ganin bayanan raunuka; neman a zo a duba wurin"] },
            { title: "Shigar da ƙorafi", bullets: ["osha.gov ko 1-800-321-6742", "Kuna iya neman a ɓoye sunanku", "An hukunta ku? Ƙorafin mai fallasa cikin kwana 30"] },
            { title: "OSHA 10 da OSHA 30", bullets: ["Awa 10: sababbin ma'aikata", "Awa 30: masu kula da masu nauyin tsaro", "Nau'in gini ko na masana'antu na gama-gari"] },
            { title: "Game da katunan", bullets: ["Ba dole ba ne; ba lasisi ko takardar shaidar ƙwarewa ba ne", "Masu ɗaukar aiki da ƙungiyoyin ma'aikata da yawa suna neman su", "Masu horarwa da aka amince da su kaɗai ke bayar da katunan gaske"] }
          ],
          sources: [
            { name: "OSHA: Haƙƙoƙin ma'aikata", url: "https://www.osha.gov/workers" },
            { name: "OSHA: Shigar da ƙorafin tsaro da lafiya", url: "https://www.osha.gov/workers/file-complaint" },
            { name: "OSHA: Shirin Outreach Training Program", url: "https://www.osha.gov/training/outreach" },
            { name: "OSHA: Gaskiya game da samun katin OSHA", url: "https://www.osha.gov/training/oshacardfacts" }
          ],
          tryIt: "Aikin ƙarshe: ku yi zagayen neman haɗari na minti 10 ku rubuta rahoton haɗarinku: haɗari biyar, nau'insu, PPE ko gyara, wanda za ku kai wa rahoton kowanne, sassan SDS na sinadari ɗaya, da matakanku idan an ji rauni. A ƙasa, ku rubuta ko OSHA 10 ko OSHA 30 ne ya dace da aikinku, da dalili.",
          youCanNow: "bayyana haƙƙinku na aiki mai tsaro, shigar da ƙorafi ga OSHA, da zaɓa tsakanin OSHA 10 da OSHA 30.",
          quickCheck: [
            { objective: "O6", q: "Mene ne katin OSHA 10 ko OSHA 30?", options: ["Lasisin jiha na yin aiki", "Takardar shaidar ƙwarewa ta sana'a", "Katin kammala kwas daga mai horarwa da aka amince da shi", "Katin da ke maye gurbin horon mai ɗaukar aiki"], answer: 2, why: "Katunan suna nuna kun gama kwas na Outreach da ba dole ba ne; ba lasisi ba ne." },
            { objective: "O6", q: "Kun faɗa wa mai kula da ku game da ƙofar fita ta gobara da aka toshe, amma ba abin da ya canja. Me za ku iya yi a gaba?", options: ["Babu komai; manajoji kaɗai za su iya ɗaukar mataki", "Ku bar aikin nan take", "Ku fara saka shi a intanet", "Ku shigar da ƙorafi ga OSHA ku nemi a ɓoye sunanku"], answer: 3, why: "Idan ba a gyara haɗari ba, kuna iya shigar da ƙorafi ga OSHA ku nemi kada a bayyana sunanku." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Sinadarai, raunuka da haƙƙoƙinku",
        questions: [
          { objective: "O4", q: "Wane sashe na takardar bayanin tsaro ne ke faɗin PPE da za ku sanya?", options: ["Sashe na 1", "Sashe na 4", "Sashe na 16", "Sashe na 8"], answer: 3, why: "Sashe na 8 yana magana kan matakan hana shaƙa ko taɓawa da kariyar jiki." },
          { objective: "O4", q: "A alamar sinadari, wace kalmar gargaɗi ce ke nufin haɗari mafi tsanani?", options: ["Danger", "Warning", "Caution", "Notice"], answer: 0, why: "Ana amfani da \"Danger\" don haɗari mafi tsanani; \"Warning\" don marasa tsanani sosai." },
          { objective: "O5", q: "Kun ɗan yanke kanku a wurin aiki. Me ya kamata ku yi?", options: ["Ku ɓoye shi", "Ku jira har ya ƙara muni", "Ku faɗa wa mai kula da ku nan take ku rubuta abin da ya faru", "Ku bar aikin"], answer: 2, why: "Ku kai rahoton kowane rauni da wuri, har ma da ƙanana." },
          { objective: "O5", q: "Cikin wane lokaci dole mai ɗaukar aiki ya kai rahoton mutuwa da ta shafi aiki ga OSHA?", options: ["Kwana 30", "Awa 8", "Mako ɗaya", "Ba dole ba ne"], answer: 1, why: "Ƙa'idar OSHA ita ce awa 8 don mutuwa." },
          { objective: "O6", q: "Mene ne OSHA 10?", options: ["Lasisin mai aikin wutar lantarki da ake buƙata", "Tara (fine)", "Kwas na tsaro na awa 10, ba dole ba, don sababbin ma'aikata", "Alamar sinadari"], answer: 2, why: "Kwas ne na Outreach Training mai katin kammalawa, ba lasisi ba." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Tushen Tsaro a Wurin Aiki (OSHA)",
    questions: [
      { objective: "O1", q: "Mene ne haɗari?", options: ["Duk abin da ke wurin aiki da zai iya jawo rauni ko rashin lafiya", "Hoton tsaro a bango", "Wani nau'in PPE", "Ɗakin hutu"], answer: 0, why: "Haɗari shi ne tushen cutarwa da ka iya faruwa." },
      { objective: "O1", q: "A zagayen neman haɗari, \"kallon sama\" yana nufin duba:", options: ["Bene don abubuwan da suka zube", "Wayarku", "Shiryayyu masu tsayi, kayan da ke sama da tsani", "Lokaci"], answer: 2, why: "Abubuwan da ke sama za su iya faɗowa ko su jawo faɗuwa." },
      { objective: "O1", q: "An cire murfin kariyar wani inji. Ya kamata ku:", options: ["Yi amfani da shi a hankali", "Kada ku yi amfani da shi, ku hana mutane kusantarsa ku kai rahoto", "Sa hannunku ciki don dubawa", "Ƙyale shi"], answer: 1, why: "Rashin murfin kariya yana jawo raunuka masu tsanani; ku kai rahoto ku nisance shi." },
      { objective: "O2", q: "Wace safar hannu ya kamata ku sanya da sinadarin tsaftacewa?", options: ["Kowace safar hannu", "Babu safar hannu", "Safar hannu mai hana yanka", "Irin wadda takardar bayanin tsaro ta ambata"], answer: 3, why: "SDS tana lissafa kariyar da ta dace da wannan sinadari." },
      { objective: "O2", q: "Kafin ku yi amfani da na'urar numfashi (respirator), kuna buƙatar:", options: ["Babu komai", "Gwajin dacewa da horo", "Ɗan kallo kawai", "Abin rufe fuskar abokin aiki"], answer: 1, why: "Dole na'urar numfashi ta rufe fuska sosai kuma a yi amfani da ita daidai." },
      { objective: "O2", q: "Wane ne yawanci dole ya samar da PPE da ake buƙata?", options: ["Mai ɗaukar aiki", "Ma'aikaci", "Abokin aiki", "Babu kowa"], answer: 0, why: "A ƙarƙashin dokokin OSHA, yawanci dole ne mai ɗaukar aiki ya samar da PPE da ake buƙata." },
      { objective: "O3", q: "Wace ce hanya mai kyau ta hana zamewa?", options: ["Ƙyale abin da ya zube sai anjima", "Sanya takalma masu sulɓi a ƙasa", "Kashe fitilu", "Share abin da ya zube nan take da sanya alamar ƙasa a jiƙe"], answer: 3, why: "Share abu da sauri da gargaɗi suna hana faɗuwa." },
      { objective: "O3", q: "A kan tsani, \"wurare uku na taɓawa\" yana nufin:", options: ["Mutane uku suna riƙe da tsanin", "Tsani uku a haɗe", "Hannaye biyu da ƙafa ɗaya, ko ƙafafu biyu da hannu ɗaya, a kan tsanin", "Tsayawa a matakai uku na sama"], answer: 2, why: "Yana sa ku tsaya daram yayin da kuke hawa." },
      { objective: "O3", q: "A gini, tsayin gama-gari na OSHA don kariya daga faɗuwa shi ne:", options: ["Ƙafa 6", "Ƙafa 1", "Ƙafa 20", "Babu ƙa'ida"], answer: 0, why: "Tsayin gama-gari a gini ƙafa 6 ne; a masana'antu na gama-gari ƙafa 4 ne." },
      { objective: "O3", q: "Wani akwati yana da nauyi kuma yana da wuyar riƙewa. Me za ku yi?", options: ["Ku ɗaga shi da sauri", "Ku murɗa jiki yayin ɗagawa", "Ku nemi taimako ko ku yi amfani da keken tura kaya ko dolly", "Ku ɗauke shi nesa da jikinku"], answer: 2, why: "Taimako ko kayan aiki suna hana raunin baya." },
      { objective: "O4", q: "Me SDS take nufi?", options: ["Takardar isar da kaya", "Jadawalin aikin ma'aikata", "Alamar aikin lokaci", "Takardar bayanin tsaro (safety data sheet)"], answer: 3, why: "Takardar bayanin tsaro tana bayanin haɗarin sinadari da yadda ake amfani da shi lafiya." },
      { objective: "O4", q: "Wane sashe na SDS ne ke ba da taimakon gaggawa?", options: ["Sashe na 2", "Sashe na 4", "Sashe na 16", "Sashe na 8"], answer: 1, why: "Sashe na 4 yana lissafa matakan taimakon gaggawa." },
      { objective: "O4", q: "Me yasa bai kamata ku taɓa haɗa bleach da ammonia ba?", options: ["Sun fi tsada", "Suna rasa ƙamshinsu", "Suna ɓata launin bene", "Suna haifar da iskar gas mai guba"], answer: 3, why: "Haɗa su yana fitar da iskar gas mai haɗari." },
      { objective: "O5", q: "Abokin aiki ya ji rauni mai tsanani. Mene ne mataki na farko?", options: ["Kiran 911 ko lambar gaggawa ta wurin aiki", "Gama aikinku", "Saka hoto a intanet", "Motsa shi nan take"], answer: 0, why: "Taimakon gaggawa ne na farko; kada ku motsa shi sai idan yana cikin haɗari." },
      { objective: "O5", q: "Me yasa za a kai rahoton ko da ƙaramin rauni?", options: ["Don samun hutun yini", "Ba a buƙata", "Don samun kulawa, kare haƙƙinku na diyyar ma'aikata, da gyara haɗarin", "Don ɗora wa wani laifi"], answer: 2, why: "Rahoto da wuri yana kare ku da sauran mutane." },
      { objective: "O5", q: "Wani ma'aikaci ya rasa ido a hatsarin aiki. Dole mai ɗaukar aiki ya kai rahoto ga OSHA cikin:", options: ["Awa 8", "Awa 24", "Shekara ɗaya", "Kwana 30"], answer: 1, why: "Kwanciya a asibiti, yanke sashen jiki da rasa ido dole a kai rahotonsu cikin awa 24." },
      { objective: "O6", q: "Wace lambar waya ce ke kai ku ga OSHA?", options: ["1-800-321-6742", "1-800-669-4000", "911", "411"], answer: 0, why: "1-800-321-OSHA (6742) lambar OSHA ce; 1-800-669-4000 ta EEOC ce (hukumar daidaito a aiki)." },
      { objective: "O6", q: "An cire ku daga jadawalin aiki saboda kun kai rahoton haɗari. A ƙarƙashin dokar tarayya, ku shigar da ƙorafin mai fallasa cikin:", options: ["Shekara ɗaya", "Babu wa'adi", "Shekara biyar", "Kwana 30"], answer: 3, why: "Wa'adin dokar tarayya don ƙorafin hukunci saboda tsaro kwana 30 ne." },
      { objective: "O6", q: "Don su waye ne OSHA 30 musamman?", options: ["Direbobin manyan motoci kaɗai", "Masu kula da ma'aikatan da ke da nauyin tsaro", "Yara", "Mutanen da ke son lasisin aikin wutar lantarki"], answer: 1, why: "OSHA 30 tana ba da horo mai zurfi ga masu kula da masu ayyukan tsaro." },
      { objective: "O6", q: "Wanne gaskiya ne game da katunan OSHA 10 da 30?", options: ["Lasisi ne", "Kowa zai iya buga ɗaya", "Katunan horo ne da ba dole ba, kuma masu horarwa da aka amince da su kaɗai ke bayarwa", "Ba sa ƙarewa a ko'ina har abada"], answer: 2, why: "Ba takardun shaidar ƙwarewa ba ne, kuma masu horarwa da aka amince da su kaɗai ke bayar da katunan gaske." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 2, 3, 7, 9, 11, 13, 14, 18] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Haɗarin da aka samu", objective: "O1", notYet: "Haɗari ƙasa da biyar, ko babu nau'o'insu ko ba daidai ba ne.", meets: "Aƙalla haɗari biyar, kowanne da nau'insa daidai.", exceeds: "Yana kuma faɗin waɗanne haɗari za a gyara yanzu da waɗanda za a kai rahotonsu." },
      { name: "PPE da gyare-gyare", objective: "O2", notYet: "Babu PPE ko gyara, ko kayan da ba su dace da haɗarin ba.", meets: "Kowane haɗari yana da PPE ko gyaran da ya dace da shi.", exceeds: "Yana ambaton hanyar cire haɗarin kafin a dogara da PPE." },
      { name: "Takardar bayanin tsaro", objective: "O4", notYet: "Babu sinadari, ko sassan SDS ba daidai ba ne.", meets: "Yana faɗin Sashe na 2, 4 da 8 na sinadari ɗaya da abin da kowanne ya ƙunsa.", exceeds: "Yana kuma rubuta kalmar gargaɗi da hotunan gargaɗi na alamar." },
      { name: "Kai rahoto", objective: "O5", notYet: "Ba a ambaci wanda za a kai wa rahoto ba, ko babu matakan rauni.", meets: "Yana faɗin wanda za a kai wa rahoton kowane haɗari kuma yana lissafa matakan rauni a tsari.", exceeds: "Matakan rauni sun haɗa da rubuta me ya faru, yaushe, ina da wa ya gani." },
      { name: "Haƙƙoƙi da horo", objective: "O6", notYet: "Bai faɗi ko OSHA 10 ko 30 ne ya dace ba.", meets: "Ya zaɓi OSHA 10 ko OSHA 30 kuma ya ba da dalilin da ya dace da aikinsa.", exceeds: "Yana kuma bayanin yadda ake shigar da ƙorafi ga OSHA idan ba a gyara haɗari ba." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka yi rajista a kwas na OSHA 10 ko OSHA 30 daga mai horarwa da aka amince da shi cikin kwana 90",
      "Masu koyo da suka sami ko suka riƙe aiki a fannin aikin hannu cikin kwana 90 (binciken biyo baya)",
      "Abokan aiki masu shirye-shiryen ƙwarewar aiki sun ce an rage raunuka ko an ƙara kai rahoton haɗari tsakanin mahalarta shirin"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta don karanta darussan",
      "Ɗakin da za a zagaya don zagayen neman haɗari: gida, ɗakin ajiyar kaya ko wurin aiki (da izini)",
      "Sinadarin tsaftacewa na gida mai alama, da intanet don nemo takardar bayanin tsaronsa",
      "Takarda da alƙalami don rahoton haɗari",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku fara yin zagayen neman haɗari tare a ɗakin horon, sannan ku bar masu koyo su yi nasu.",
      "Ku yi atisayen ɗaga kaya lafiya da akwati mara nauyi kawai; babu wanda zai hau tsani ko ɗaga kaya masu nauyi yayin horo.",
      "Kada ku taɓa barin masu koyo su buɗe ko su haɗa sinadarai yayin atisaye; alamar da SDS kawai za su karanta.",
      "Ku tunatar da masu koyo cewa wannan kwas ba ya maye gurbin katin OSHA 10 ko OSHA 30 ko horon mai ɗaukar su aiki.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
