"use strict";

// Koach Learn course, Hausa (ha) translation of veterans/veterans-ai-logistics.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "veterans-ai-logistics-ha",
  lang: "ha",
  translationOf: "veterans-ai-logistics",
  category: "Veterans (military)",
  name: "AI don Jigilar Kaya da Gudanar da Ayyuka",
  skills: "Magana da kalmomin sarkar samar da kaya na farar hula, Sanin inda AI ke da amfani a jigilar kaya, Gina takardar sake odar kaya, Rubuta jadawalin isar da kaya da AI, Gabatar da tsarin ayyuka",
  outcome: "gina takardar sake odar kaya mai sauƙi da jadawalin isar da kaya tare da taimakon mataimakin AI da takardar lissafi (spreadsheet) kyauta, duba lissafin da kanku, da gabatar da tsarin da kalmomin jigilar kaya na farar hula.",
  about: [
    "Idan kun yi jigilar mutane, kayan gyara, mai, abinci ko motoci a soja, to kun riga kun yi aikin jigilar kaya (logistics). Rumbunan ajiyar kaya, kamfanonin manyan motoci, asibitoci da shagunan intanet na farar hula suna buƙatar irin waɗannan ƙwarewa, kuma yanzu suna amfani da kayan AI wajen tsara aiki.",
    "A wannan kwas ɗin za ku koyi kalmomin farar hula na abin da kuka yi, ku ga inda AI ke da amfani a jigilar kaya a yau, kuma ku gina kayan aiki biyu na gaske: takardar sake odar kaya da jadawalin isar da kaya. Za ku kammala da gabatar da tsarin, kamar yadda kuke yi wa kwamanda, amma da kalmomin farar hula.",
    "Kowane darasi yana ɗaukar kusan minti biyar. Kuna buƙatar takardar lissafi kyauta (Google Sheets ko Microsoft Excel a intanet) da mataimakin AI kyauta kamar ChatGPT, Microsoft Copilot ko Google Gemini. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku yi takardar gabatarwar ayyuka mai shafi ɗaya don wani ƙaramin kasuwanci na ƙirƙira (misali bankin abinci ko shagon kayan gyara): takardar kaya mai matakin sake oda (reorder point) na abubuwa biyar, jadawalin isar da kaya na mako ɗaya da AI ya rubuta ku kuma duba, haɗari uku tare da tsarin madadi ga kowanne, da layuka biyu na takardar bayanin aiki (résumé) da ke bayyana aikinku na jigilar kaya a soja da kalmomin farar hula.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Tsofaffin sojoji da sojojin da ke barin aiki, waɗanda suka yi jigilar mutane, kayan gyara, mai, abinci ko motoci a lokacin aikinsu, kuma suke son aikin farar hula a rumbunan ajiyar kaya, manyan motoci, asibitoci, bankunan abinci ko shagunan intanet.",
    startingPoint: "Sun san aikin samar da kaya, sufuri da gyaran motoci sosai, kuma suna iya amfani da waya ko kwamfuta. Yawancinsu suna amfani da kalmomin soja, ba su taɓa gina takardar sake oda a takardar lissafi kyauta ba, kuma ba su taɓa amfani da AI don tsara jadawali ko karanta bayanai ba.",
    gap: "Masu ɗaukar aiki a jigilar kaya na farar hula suna amfani da nasu kalmomi da kayan AI na tsara aiki, kuma suna buƙatar mutanen da za su iya duba tsarin AI da iyakokin gaske. Masu koyo suna buƙatar magana da kalmomin sarkar samar da kaya na farar hula, gina da duba takardar sake oda da jadawali tare da taimakon AI, da gabatar da tsari a sarari.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; ana nuna matakan takardar lissafi ɗaya bayan ɗaya",
      "Na'urori: kwamfuta ce ta fi kyau don takardar lissafi; kayan aiki kyauta kamar Google Sheets ko Microsoft Excel a intanet",
      "Sirri: kasuwancin ƙirƙira kaɗai; babu sunayen abokan ciniki ko adireshin gidaje a kayan AI na jama'a",
      "Duba lissafi: masu koyo suna duba dabarun lissafi (formula) da lokutan AI da hannu, da na'urar lissafi da manhajar taswira (map app)",
      "Lokaci: darussa na kusan minti 5 da atisayen takardar lissafi"
    ],
    prerequisites: "Babu. Ɗan sanin takardar lissafi yana taimakawa amma ba dole ba ne."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku ayyukan jigilar kaya daga aikinku na soja", action: "fassara kalmomin jigilar kaya na soja zuwa kalmomin farar hula da masu ɗaukar aiki ke amfani da su", standard: "tare da kalmomi biyar da aka fassara da sunayen ayyukan farar hula biyu da suka dace" },
    { id: "O2", condition: "Idan aka ba ku misalan AI a rumbunan ajiya da manyan motoci", action: "bayyana hanyoyi huɗu da ake amfani da AI a jigilar kaya da shawarar da mutum har yanzu yake yankewa a kowanne", standard: "kuna ambaton abu ɗaya da dole mutum ya duba a kowanne" },
    { id: "O3", condition: "Idan aka ba ku amfanin yau da kullum, lokacin isowa da ƙarin kaya na ajiya na abubuwa biyar", action: "gina takardar lissafi da ke ƙididdige lokacin sake odar kowane abu", standard: "tare da layi ɗaya da aka duba da hannu a na'urar lissafi" },
    { id: "O4", condition: "Idan aka ba ku wuraren sauka, lokuta, motoci da direbobi", action: "amfani da mataimakin AI don rubuta jadawalin isar da kaya na mako ɗaya da duba shi da iyakokin gaske", standard: "kuna gyara duk matsalar da kuka samu da manhajar taswira da lokutan buɗe wuraren" },
    { id: "O5", condition: "Idan aka ba ku ƙaramin tebur na bayanan isar da kaya", action: "amfani da AI don nemo abubuwan da ke maimaituwa da tabbatar da ɗaya da kanku da matatar takardar lissafi (filter)", standard: "kuma ku rubuta dalili, gyara da yadda za ku auna shi" },
    { id: "O6", condition: "Ta amfani da takardarku, jadawalinku da haɗarorinku", action: "gabatar da tsarin ayyuka da kalmomin farar hula da rubuta layuka biyu na résumé game da aikinku na jigilar kaya", standard: "tare da halin da ake ciki, tsari, haɗari uku da madadi ga kowanne" }
  ],
  chapters: [
    {
      name: "Babi na 1: Daga jigilar kaya na soja zuwa sarkar samar da kaya na farar hula",
      lessons: [
        {
          objectives: ["O1"],
          title: "Magana da kalmomin sarkar samar da kaya na farar hula",
          minutes: 5,
          goal: "Fassara kalmomin jigilar kaya na soja guda biyar zuwa kalmomin farar hula da masu ɗaukar aiki ke amfani da su.",
          text: [
            "Sarkar samar da kaya (supply chain) ita ce kowane mataki da ke kai kaya daga inda aka yi su zuwa ga mutumin da zai yi amfani da su. Jigilar kaya (logistics) ita ce ɓangaren tsarawa da motsa kaya a cikin wannan sarka.",
            "Kalmomin soja da yawa suna da 'yan'uwansu a farar hula. Ɗakin kaya ko rumbun ajiya shi ne kula da kaya (inventory management). Tawagar motoci (convoy) ita ce sufuri ko jigilar kaya (freight). Wurin ajiye motoci (motor pool) shi ne gyaran rukunin motoci (fleet maintenance). Tsara kayan Class I zuwa IX shi ne tsara buƙata (demand planning). Tafiyar ƙarshe zuwa ga mai amfani ana kiranta \"last-mile delivery\" (isarwar mil na ƙarshe).",
            "My Next Move for Veterans (mynextmove.org/vets), daga Ma'aikatar Ƙwadago ta Amurka (U.S. Department of Labor), yana bar ku shigar da aikinku na soja ku ga ayyukan farar hula masu kama da shi, kamar mai tsara jigilar kaya (logistician), mai kula da rumbun ajiya ko mai tura motoci (dispatcher)."
          ],
          steps: ["Ku rubuta ayyukan jigilar kaya guda biyar da kuka yi a soja.", "Ku tambayi mataimakin AI: \"Ka fassara waɗannan ayyukan jigilar kaya na soja zuwa kalmomin sarkar samar da kaya na farar hula.\"", "Ku nemi aikinku na soja a mynextmove.org/vets.", "Ku rubuta sunayen ayyukan farar hula da suka fi dacewa."],
          words: [["Sarkar samar da kaya (supply chain)", "kowane mataki daga yin kaya zuwa ga mutumin da zai yi amfani da su."], ["Kaya a ajiye (inventory)", "abubuwan da kasuwanci ke ajiyewa a hannu."], ["Isarwar mil na ƙarshe (last-mile delivery)", "tafiyar ƙarshe da ke kai kaya zuwa ga abokin ciniki."], ["3PL", "third-party logistics: kamfanin da aka ɗauka don ajiye da tura kaya a madadin wani kasuwanci."]],
          slides: [
            { title: "Sarkar samar da kaya da jigilar kaya", bullets: ["Sarkar samar da kaya: kowane mataki zuwa ga mai amfani", "Jigilar kaya: ɓangaren tsarawa da motsa kaya"] },
            { title: "Daga soja zuwa farar hula", bullets: ["Ɗakin kaya = kula da kaya (inventory management)", "Tawagar motoci (convoy) = sufuri ko jigilar kaya (freight)", "Motor pool = gyaran rukunin motoci (fleet maintenance)", "Tsara kaya = tsara buƙata (demand planning)"] },
            { title: "Nemo ayyukan da suka dace", bullets: ["mynextmove.org/vets (Ma'aikatar Ƙwadago)", "Logistician, mai kula da rumbun ajiya, dispatcher"] }
          ],
          sources: [{ name: "My Next Move for Veterans (Ma'aikatar Ƙwadago ta Amurka)", url: "https://www.mynextmove.org/vets/" }],
          tryIt: "Ku rubuta ayyukan jigilar kaya guda biyar daga aikinku na soja. Ku nemi mataimakin AI ya fassara su zuwa kalmomin farar hula, sannan ku nemi aikinku na soja a mynextmove.org/vets ku rubuta sunayen ayyuka biyu da suka dace.",
          youCanNow: "bayyana aikinku na jigilar kaya a soja da kalmomin da masu ɗaukar aiki na farar hula ke amfani da su.",
          quickCheck: [
            { objective: "O1", q: "Mece ce sarkar samar da kaya?", options: ["Manyan motocin da kamfani ya mallaka kawai", "Kowane mataki daga yin kaya zuwa ga mutumin da zai yi amfani da su", "Ƙofar gaban rumbun ajiya", "Jerin lambobin wayar masu samar da kaya"], answer: 1, why: "Sarkar samar da kaya ta ƙunshi kowane mataki daga samarwa zuwa ga mai amfani na ƙarshe." },
            { objective: "O1", q: "Résumé ɗinku ya ce \"Ran the motor pool\". Wace kalma ta farar hula za ku yi amfani da ita?", options: ["Ku bar ta \"motor pool\"", "\"Na tuƙa motoci\"", "\"Na yi abubuwan motoci\"", "\"Na kula da gyaran rukunin motoci (fleet maintenance)\""], answer: 3, why: "Motor pool na soja ya fi kusa da gyaran rukunin motoci (fleet maintenance) na farar hula." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Inda AI ke da amfani a jigilar kaya",
          minutes: 4,
          goal: "Ambaci hanyoyi huɗu da ake amfani da AI a jigilar kaya da shawarwarin da mutane har yanzu suke yankewa.",
          text: [
            "Kamfanoni suna amfani da AI don hasashen buƙata (tsammanin yawan kayan da mutane za su buƙata), tsara hanyoyin da ke ajiye mai da lokaci, gano kayan da za su yi jinkiri da wuri, da amsa tambayoyin abokan ciniki game da isar da kaya.",
            "AI yana sanin bayanan da aka ba shi ne kawai. Idan bayanan sun tsufa, ba daidai ba ne, ko sun ɓace, tsarin ma zai zama ba daidai ba. Hadari na ruwan sama, rufe hanya ko cunkoson lokacin hutu ba za su kasance a cikin bayanan ba.",
            "Mutane ne har yanzu suke yanke shawara: duba cewa tsarin yana da ma'ana, magance abubuwan da ba su tafi daidai ba, kiyaye lafiyar direbobi da ma'aikata, da magana da abokan ciniki. Wannan hikimar ita ce ainihin abin da jigilar kaya na soja ya koya muku."
          ],
          words: [["Hasashe (forecast)", "tsammani mai kyau na abin da zai faru, kamar yawan kayan da za ku buƙata."], ["Tsara hanya (route optimization)", "nemo mafi kyawun tsari da hanya na isar da kaya."], ["Abin da bai tafi daidai ba (exception)", "abin da bai tafi bisa tsari ba, kamar babbar mota da ta yi jinkiri."]],
          slides: [
            { title: "AI a jigilar kaya", bullets: ["Hasashen buƙata", "Tsara hanyoyi", "Gano kayan da za su yi jinkiri", "Amsa tambayoyin isar da kaya"] },
            { title: "Raunin AI", bullets: ["Yana sanin bayanan da aka ba shi kawai", "Bayanai tsofaffi ko da suka ɓace = tsari mara daidai", "Hadari da rufe hanyoyi ba za su kasance a ciki ba"] },
            { title: "Mutane ne har yanzu suke yanke shawara", bullets: ["Shin tsarin yana da ma'ana?", "Magance abubuwan da ba su tafi daidai ba", "Lafiya da abokan ciniki"] }
          ],
          tryIt: "Ku tambayi mataimakin AI: \"Ta yaya rumbunan ajiya da kamfanonin manyan motoci ke amfani da AI a yau? Ka ba ni misalai huɗu da kalmomi masu sauƙi.\" A gefen kowanne, ku rubuta abu ɗaya da har yanzu dole mutum ya duba.",
          youCanNow: "bayyana inda AI ke taimakawa a jigilar kaya da inda har yanzu ake buƙatar hikimar mutum.",
          quickCheck: [
            { objective: "O2", q: "Mene ne hasashen buƙata?", options: ["Yin odar komai a lokaci ɗaya", "Ƙirga kaya a ƙarshen shekara", "Tsammani mai kyau na yawan abin da za a buƙata", "Rahoton yanayi ga direbobi"], answer: 2, why: "Hasashen buƙata yana ƙiyasta yawan abin da za a buƙata, kuma AI yakan taimaka wajen yin sa." },
            { objective: "O2", q: "Tsarin hanyar AI ya tura babbar mota ta hanyar da aka rufe a safiyar yau. Wane ne zai gyara?", options: ["Mutumin da ya san an rufe hanyar", "AI zai gyara kansa daga baya", "Abokin ciniki", "Babu kowa; ku bi tsarin"], answer: 0, why: "AI yana sanin bayanan da yake da su kawai, don haka mutane ne ke magance abubuwa kamar rufe hanya." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Gina takardar sake odar kaya",
          minutes: 6,
          goal: "Gina takardar lissafi da ke nuna lokacin sake odar kowane abu.",
          text: [
            "Matakin sake oda (reorder point) shi ne yawan kayan da idan aka kai shi, za ku yi odar ƙari kafin kayan su ƙare. Dabarar lissafi mai sauƙi ita ce: amfanin yau da kullum sau lokacin isowa (kwanakin da oda ke ɗauka kafin ta iso), da ƙarin kaya na ajiya (safety stock, ƙari don abin da ba a zata ba).",
            "Misali: bankin abinci yana amfani da gwangwanin wake 20 a rana, isar da kaya tana ɗaukar kwanaki 5, kuma yana ajiye ƙarin 40. Matakin sake oda = 20 x 5 + 40 = 140. Idan kaya sun ragu zuwa 140, ku yi odar ƙari.",
            "Mataimakin AI zai iya taimaka muku wajen shirya ginshiƙai (columns) da dabarar lissafi ta takardar. Koyaushe ku gwada dabarar a layi ɗaya da hannu don tabbatar da cewa daidai take."
          ],
          steps: ["Ku buɗe sabuwar Google Sheet ko littafin Excel marar komai.", "Ku yi ginshiƙai: Item, On hand, Daily use, Lead time (days), Safety stock, Reorder point, Order now?", "Ku nemi mataimakin AI ya ba ku dabarar lissafi ta Reorder point da ta ginshiƙin \"Order now?\" mai amsa yes/no.", "Ku ƙara abubuwa biyar da lambobin ƙirƙira.", "Ku duba layi ɗaya da hannu da na'urar lissafi."],
          words: [["Matakin sake oda (reorder point)", "yawan kayan da ke faɗa muku ku yi odar ƙari."], ["Lokacin isowa (lead time)", "kwanaki nawa oda ke ɗauka kafin ta iso."], ["Ƙarin kaya na ajiya (safety stock)", "ƙarin kayan da ake ajiyewa don abin da ba a zata ba."], ["Dabarar lissafi (formula)", "lissafin da takardar lissafi ke yi muku."]],
          slides: [
            { title: "Matakin sake oda", bullets: ["Amfanin yau da kullum x lokacin isowa + ƙarin ajiya", "Idan kaya sun kai shi, ku yi odar ƙari"] },
            { title: "Misali: waken bankin abinci", bullets: ["20 a rana x kwanaki 5 + ƙarin 40 = 140", "Idan gwangwani sun kai 140, ku yi oda"] },
            { title: "Ku gina shi da taimakon AI", bullets: ["Ku nemi AI ya ba ku dabarun lissafi na ginshiƙai", "Ku ƙara abubuwa biyar", "Ku duba layi ɗaya da hannu"] }
          ],
          tryIt: "Ku gina takardar sake oda mai abubuwa biyar. Ku nemi mataimakin AI ya ba ku dabarun lissafi, sannan ku duba layi ɗaya da na'urar lissafi ku gyara duk abin da ba daidai ba.",
          youCanNow: "gina takardar lissafi da ke nuna lokacin da ake buƙatar sake odar kowane abu.",
          quickCheck: [
            { objective: "O3", q: "Mene ne ƙarin kaya na ajiya (safety stock)?", options: ["Kayan da suka lalace", "Kayan da aka sayar da rangwame", "Kayan da aka kulle a cikin sef", "Ƙarin kayan da ake ajiyewa don abin da ba a zata ba"], answer: 3, why: "Ƙarin kaya na ajiya yana kare ku daga abubuwan da ba a zata ba kamar jinkirin isowa ko ƙarin buƙata." },
            { objective: "O3", q: "Amfanin yau da kullum 5, lokacin isowa kwanaki 6, ƙarin ajiya 10. Nawa ne matakin sake oda?", options: ["21", "40", "60", "11"], answer: 1, why: "Amfanin yau da kullum sau lokacin isowa (5 x 6 = 30) da ƙarin ajiya (10) ya zama 40." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Daga jigilar kaya na soja zuwa sarkar samar da kaya na farar hula",
        questions: [
          { objective: "O1", q: "Tawagar motocin soja (convoy) ta fi kusa da wace kalma ta farar hula?", options: ["Biyan albashi", "Tallace-tallace", "Sufuri ko jigilar kaya (freight)", "Kula da ma'aikata"], answer: 2, why: "Motsa kaya da mota shi ne sufuri ko jigilar kaya." },
          { objective: "O1", q: "Mece ce isarwar mil na ƙarshe (last-mile delivery)?", options: ["Tafiyar ƙarshe zuwa ga abokin ciniki", "Mil na farko na tafiya", "Gasar gudu", "Masana'anta"], answer: 0, why: "Ita ce tafiyar ƙarshe zuwa ga mutumin da zai yi amfani da kayan." },
          { objective: "O2", q: "Me yasa tsarin hanyar AI zai iya zama ba daidai ba?", options: ["Manyan motoci ba sa taɓa lalacewa", "AI koyaushe daidai yake", "Taswirori ba sa taɓa canjawa", "AI yana sanin bayanan da aka ba shi kawai"], answer: 3, why: "Bayanan da suka ɓace ko suka tsufa suna kawo tsari mara daidai." },
          { objective: "O3", q: "Amfanin yau da kullum 10, lokacin isowa kwanaki 4, ƙarin ajiya 20. Nawa ne matakin sake oda?", options: ["14", "34", "40", "60"], answer: 3, why: "10 x 4 + 20 = 60." },
          { objective: "O3", q: "Bayan AI ya rubuta muku dabarar lissafi a takardar lissafi, ya kamata ku:", options: ["Kada ku taɓa duba ta", "Ku duba layi ɗaya da hannu", "Ku goge takardar", "Ku raba ta ba tare da dubawa ba"], answer: 1, why: "Duba da hannu yana tabbatar da cewa dabarar daidai take." }
        ]
      }
    },
    {
      name: "Babi na 2: Tsarawa da gabatar da ayyuka",
      lessons: [
        {
          objectives: ["O4"],
          title: "Rubuta jadawalin isar da kaya da AI",
          minutes: 5,
          goal: "Yi amfani da mataimakin AI don rubuta jadawalin isar da kaya na mako ɗaya, ku duba shi da iyakokin gaske.",
          text: [
            "Jadawalin isar da kaya yana faɗin wa zai je ina, yaushe, da me. AI zai iya rubuta shi da sauri idan kun ba shi gaskiyar abubuwa: wuraren sauka, lokutan buɗewa, yawan motoci da direbobi, sa'o'in aikin direbobi, da abin da kowane wuri yake buƙata.",
            "Sannan ku duba shi kamar tsarin tawagar motoci (convoy). Shin lokutan tafiya sun dace da taswira ta gaske? Shin direbobi suna samun hutu? Shin akwai wurin da za a kai masa kaya lokacin da yake rufe?",
            "Ku yi amfani da bayanan ƙirƙira ko bayanan da kasuwanci ya amince da su kawai. Kada ku liƙa sunayen abokan ciniki, adireshin gidaje ko duk abin da mai ɗaukar ku aiki bai amince a saka a kayan AI ba."
          ],
          steps: ["Ku jera wuraren sauka, lokuta, motoci, direbobi da abin da kowane wuri yake buƙata.", "Ku tambayi mataimakin AI: \"Ka yi jadawalin isar da kaya na mako ɗaya a matsayin tebur da waɗannan iyakoki.\"", "Ku duba lokutan tafiya a manhajar taswira.", "Ku duba hutu, lokutan buɗewa da wurin da ke cikin mota.", "Ku gyara jadawalin ku ajiye shi kusa da takardar kayanku."],
          words: [["Jadawalin isar da kaya", "tsarin wa zai kai me, ina, da yaushe."], ["Iyaka (constraint)", "ƙa'idar da dole tsarin ya bi, kamar lokutan buɗewa ko sa'o'in aikin direbobi."]],
          slides: [
            { title: "Ku ba AI gaskiyar abubuwa", bullets: ["Wuraren sauka da lokutan buɗewa", "Motoci da direbobi", "Abin da kowane wuri yake buƙata"] },
            { title: "Ku duba shi kamar tsarin convoy", bullets: ["Lokutan tafiya na gaske a taswira", "Hutun direbobi", "Babu kai kaya ga wurin da yake rufe"] },
            { title: "Ku kare bayanai", bullets: ["Bayanan ƙirƙira ko waɗanda aka amince da su kawai", "Babu sunayen abokan ciniki ko adireshin gidaje"] }
          ],
          tryIt: "Don bankin abinci na ƙirƙira mai wuraren rabon abinci uku da mota ɗaya (van), ku nemi mataimakin AI ya yi jadawalin isar da kaya na mako ɗaya a matsayin tebur. Ku duba shi a manhajar taswira ku gyara matsala ɗaya da kuka samu.",
          youCanNow: "rubuta jadawalin isar da kaya da AI da duba shi da iyakokin rayuwa ta gaske.",
          quickCheck: [
            { objective: "O4", q: "Mece ce iyaka (constraint) a jadawalin isar da kaya?", options: ["Ƙa'idar da dole tsarin ya bi, kamar lokutan buɗewa", "Ƙarin kuɗi ga direbobi", "Ƙarin wurin sauka", "Wani nau'in babbar mota"], answer: 0, why: "Iyakoki su ne ƙa'idoji kamar lokuta, motoci da direbobi da dole jadawalin ya mutunta." },
            { objective: "O4", q: "Jadawalin AI ya ce tafiyar mil 40 tana ɗaukar minti 15. Me za ku yi?", options: ["Ku amince da shi", "Ku cire wurin saukar", "Ku duba lokacin a manhajar taswira ku gyara jadawalin", "Ku ce wa direban ya ƙara gudu"], answer: 2, why: "Kuna duba lokutan tafiya na AI da manhajar taswira ku gyara duk abin da bai dace da gaskiya ba." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Gano matsaloli a bayanan ayyuka",
          minutes: 5,
          goal: "Yi amfani da AI don taƙaita ƙaramin teburin bayanai, ku tabbatar da abin da ya samu da kanku.",
          text: [
            "Ƙungiyoyin gudanar da ayyuka suna duba bayanai kowace rana: kayan da suka yi jinkiri, abubuwan da ke ƙarewa, kayan da suka lalace. AI zai iya taƙaita tebur ya nuna abubuwan da ke maimaituwa, kamar \"Kayan ranar Talata sun fi yin jinkiri.\"",
            "Ku ɗauki abin da AI ya samu kamar bayanan leƙen asiri (intel): yana da amfani, amma ku tabbatar kafin ku ɗauki mataki. Ku jera (sort) ko ku tace (filter) takardar lissafi da kanku don ganin ko abin gaskiya ne.",
            "Idan kun sami matsala ta gaske, ku rubuta dalilin da kuke tsammani, gyara, da yadda za ku san cewa gyaran ya yi aiki."
          ],
          steps: ["Ku yi ƙaramin tebur: rana, wurin sauka, a kan lokaci (yes/no), dalili idan an yi jinkiri.", "Ku tambayi mataimakin AI: \"Waɗanne abubuwa ne ke maimaituwa a wannan teburin?\"", "Ku jera ko ku tace takardar da kanku don tabbatarwa.", "Ku rubuta: matsala, dalilin da ya fi yiwuwa, gyara, yadda za ku auna shi."],
          words: [["Abin da ke maimaituwa (pattern)", "abin da ke faruwa sau da yawa a cikin bayanai."], ["Matata (filter)", "kayan aikin takardar lissafi da ke nuna layukan da kuka zaɓa kawai."]],
          slides: [
            { title: "AI zai iya taƙaita bayanai", bullets: ["Jinkirin isar da kaya, ƙarancin kaya, lalacewa", "Yana nuna abubuwan da ke maimaituwa"] },
            { title: "Ku ɗauke shi kamar intel", bullets: ["Yana da amfani, amma ku tabbatar kafin ku ɗauki mataki", "Ku jera ko ku tace takardar da kanku"] },
            { title: "Ku rubuta gyaran", bullets: ["Matsala da dalilin da ya fi yiwuwa", "Gyaran", "Yadda za ku auna shi"] }
          ],
          tryIt: "Ku yi teburin isar da kaya mai layuka 10 da wasu kaya da suka yi jinkiri. Ku tambayi mataimakin AI abubuwan da ke maimaituwa, sannan ku tace takardar da kanku don tabbatar da ɗaya, ku rubuta gyara.",
          youCanNow: "amfani da AI don nemo abin da ke maimaituwa a bayanan ayyuka da tabbatar da shi kafin ku ɗauki mataki.",
          quickCheck: [
            { objective: "O5", q: "Me matatar (filter) takardar lissafi ke yi?", options: ["Tana goge layuka har abada", "Tana nuna layukan da kuka zaɓa kawai", "Tana ƙara girman lambobi", "Tana tura takardar ta imel"], answer: 1, why: "Matata tana ɓoye layukan da ba ku buƙata don ku duba abin da ke maimaituwa da kanku." },
            { objective: "O5", q: "AI ya ce yawancin kayan da suka yi jinkiri daga direba ɗaya suke. Me za ku yi?", options: ["Ku faɗa wa direban nan take", "Ku yi watsi da shi", "Ku goge layukan direban", "Ku tace bayanan da kanku don tabbatarwa kafin ku ɗauki mataki"], answer: 3, why: "Ku ɗauki abin da AI ya samu kamar intel: yana da amfani, amma ku tabbatar kafin ku ɗauki mataki." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Gabatar da tsarin da neman aiki",
          minutes: 5,
          goal: "Gabatar da tsarin ayyuka da kalmomin farar hula, ku haɗa shi da matakinku na gaba na neman aiki.",
          text: [
            "Manajojin farar hula suna son gajeriyar gabatarwa (brief), kamar kwamandoji: halin da ake ciki, tsarin, haɗarorin da tsare-tsaren madadi, da abin da kuke buƙata daga gare su. Ku yi amfani da kalmomin farar hula: \"inventory\" (kaya a ajiye), \"delivery schedule\" (jadawalin isar da kaya), \"on-time rate\" (yawan isarwa a kan lokaci).",
            "Ku mayar da aikinku na soja zuwa layukan résumé masu lambobi, misali: \"Managed inventory of 1,200 items worth $2 million with zero losses at audit.\" (Na kula da kaya 1,200 masu darajar $2 miliyan ba tare da asara ko ɗaya a binciken lissafi ba.) Ku yi amfani da lambobin da za ku iya tsayawa a kansu kawai.",
            "Don taimakon neman aiki, sashen Veterans' Employment and Training Service (VETS) na Ma'aikatar Ƙwadago yana gudanar da Transition Assistance Program (TAP, shirin taimakon sauyawa) kuma yana nuna hanyar koyon sana'a (apprenticeship). Idan kuna da GI Bill, tallafin VA na koyon aiki a wurin aiki (on-the-job training) da apprenticeship zai iya biyan wani adadi kowane wata yayin da kuke koyo a wurin mai ɗaukar aiki da aka amince da shi. Ku duba shafukan hukuma don sanin wanda ya cancanta."
          ],
          steps: ["Ku rubuta gabatarwar: halin da ake ciki, tsari, haɗarori, madadi, abin da kuke buƙata.", "Ku yi amfani da kalmomin farar hula a ko'ina.", "Ku rubuta layuka biyu na résumé masu lambobi na gaske.", "Ku duba dol.gov/agencies/vets da shafin on-the-job training na va.gov don matakai na gaba."],
          words: [["Gabatarwa (brief)", "gajeren bayani da baki ko a rubuce na wani tsari ga mai yanke shawara."], ["Yawan isarwa a kan lokaci (on-time rate)", "kason kayan da suka iso a lokacin da aka yi alkawari."]],
          slides: [
            { title: "Ku gabatar kamar yadda kuka yi a soja", bullets: ["Halin da ake ciki, tsari, haɗarori, madadi", "Abin da kuke buƙata daga gare su", "Da kalmomin farar hula"] },
            { title: "Layukan résumé masu lambobi", bullets: ["\"Managed 1,200 items worth $2M, zero losses\"", "Lambobin da za ku iya tsayawa a kansu kawai"] },
            { title: "Taimakon hukuma", bullets: ["DOL VETS: TAP da apprenticeship", "VA on-the-job training (GI Bill)", "Ku duba wanda ya cancanta a shafukan hukuma"] }
          ],
          sources: [
            { name: "Ma'aikatar Ƙwadago ta Amurka, Veterans' Employment and Training Service", url: "https://www.dol.gov/agencies/vets" },
            { name: "VA: On-the-job training and apprenticeships (koyon aiki a wurin aiki da koyon sana'a)", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/on-the-job-training-apprenticeships/" }
          ],
          tryIt: "Aikin ƙarshe: ku haɗa takardar sake odarku, jadawalin isar da kaya da kuka duba, haɗari uku masu madadi, da layuka biyu na résumé a cikin takardar gabatarwar ayyuka mai shafi ɗaya.",
          youCanNow: "tsara kaya da isar da kaya tare da taimakon AI, duba tsarin da kanku, da gabatar da shi da kalmomin farar hula.",
          quickCheck: [
            { objective: "O6", q: "Me ke shiga cikin gabatarwar ayyuka mai kyau?", options: ["Labari mai daɗi kawai", "Dogon labarin aikinku gaba ɗaya", "Halin da ake ciki, tsari, haɗarori da madadi", "Kowane layi na takardar lissafinku"], answer: 2, why: "Gabatarwa tana ba da halin da ake ciki, tsarin da haɗarori tare da madadi, a taƙaice kuma a sarari." },
            { objective: "O6", q: "Wane layin résumé ne ya fi bayyana aikin jigilar kaya na soja ga mai ɗaukar aiki na farar hula?", options: ["\"Managed 800 items worth $1M with zero losses at audit.\"", "\"Was S4 shop NCOIC.\"", "\"Did supply.\"", "\"Handled CL IX.\""], answer: 0, why: "Yana amfani da kalmomin farar hula, yawa da sakamako." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Tsarawa da gabatar da ayyuka",
        questions: [
          { objective: "O4", q: "Me ya kamata ku ba AI don ya rubuta jadawalin isar da kaya?", options: ["Bayanan shiga bankinku", "Kalmar \"jadawali\" kawai", "Adireshin gidajen abokan ciniki", "Wuraren sauka, lokuta, motoci, direbobi da buƙatu"], answer: 3, why: "Iyakoki na gaske suna bar AI ya rubuta tsarin da za a iya amfani da shi." },
          { objective: "O4", q: "Jadawalin AI ya tura mota zuwa wurin da yake rufe. Ya kamata ku:", options: ["Gyara jadawalin", "Bar shi haka", "Kori direban", "Rufe kasuwancin"], answer: 0, why: "Duba tsarin da iyakoki aikinku ne." },
          { objective: "O5", q: "AI ya ce ranakun Talata sun fi yin jinkiri. Me za a yi a gaba?", options: ["Yin watsi da shi", "Soke ranakun Talata", "Tace bayanan da kanku don tabbatarwa", "Saka shi a intanet"], answer: 2, why: "Ku tabbatar kafin ku ɗauki mataki, kamar duba intel." },
          { objective: "O6", q: "Gabatarwar ayyuka mai kyau ta ƙunshi:", options: ["Babu tsari", "Barkwanci kawai", "Lambobin soja kawai", "Halin da ake ciki, tsari, haɗarori da madadi"], answer: 3, why: "Wannan shi ne abin da masu yanke shawara ke buƙata." },
          { objective: "O6", q: "Wane tallafin VA ne zai iya biyan wani adadi kowane wata yayin da kuke koyo a wurin mai ɗaukar aiki da aka amince da shi?", options: ["Inshorar rai", "Lamunin gida", "On-the-job training da apprenticeship", "Tallafin jana'iza"], answer: 2, why: "va.gov ya bayyana biyan kuɗi kowane wata yayin OJT ko apprenticeship da aka amince da su." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI don Jigilar Kaya da Gudanar da Ayyuka",
    questions: [
      { objective: "O1", q: "Sarkar samar da kaya ita ce:", options: ["Sarƙa a jikin babbar mota", "Kowane mataki daga yin kaya zuwa ga mutumin da zai yi amfani da su", "Wani nau'in kwangila", "Ƙofar rumbun ajiya"], answer: 1, why: "Ta ƙunshi dukkan hanyar zuwa ga mai amfani." },
      { objective: "O1", q: "Motor pool na soja ya fi kusa da:", options: ["Gyaran rukunin motoci (fleet maintenance)", "Lissafin kuɗi", "Tallace-tallace", "Harkokin shari'a"], answer: 0, why: "Dukansu suna kula da motoci." },
      { objective: "O1", q: "Mene ne 3PL?", options: ["Matsayin soja", "Wani nau'in babbar mota", "Kamfanin da aka ɗauka don ajiye da tura kaya a madadin wani kasuwanci", "Takardar lissafi"], answer: 2, why: "Kamfanonin third-party logistics suna kula da ajiya da tura kaya." },
      { objective: "O1", q: "Wane shafi kyauta ne ke haɗa ayyukan soja da ayyukan farar hula?", options: ["My Next Move for Veterans", "Manhajar waƙa", "Shafin sayayya", "Wasa"], answer: 0, why: "Ana gudanar da mynextmove.org/vets don Ma'aikatar Ƙwadago." },
      { objective: "O2", q: "Hasashen buƙata yana nufin:", options: ["Ɗaukar direbobi aiki", "Isar da kaya da sauri", "Fentin manyan motoci", "Tsammani mai kyau na yawan abin da za a buƙata"], answer: 3, why: "Hasashe yana ƙiyasta buƙatar gaba." },
      { objective: "O2", q: "Me tsarin hanyar AI zai iya rasa gani?", options: ["Yawan wuraren saukar da kuka ba shi", "Hanyar da aka rufe a safiyar yau", "Taswirar", "Kalmar \"hanya\""], answer: 1, why: "Sababbin abubuwa ba za su kasance a cikin bayanansa ba." },
      { objective: "O2", q: "Wane ne ke magance abubuwan da ba su tafi daidai ba kamar babbar mota da ta yi jinkiri?", options: ["Babu kowa", "Mutane", "AI kaɗai", "Abokin ciniki"], answer: 1, why: "Hikimar mutum ce ke magance abubuwan da ba su tafi daidai ba." },
      { objective: "O3", q: "Lokacin isowa (lead time) shi ne:", options: ["Sa'o'in da shago ke buɗe", "Lokacin da direba ke jagorantar convoy", "Lokacin cin abinci", "Kwanakin da oda ke ɗauka kafin ta iso"], answer: 3, why: "Lokacin isowa shi ne jiran isar da kaya." },
      { objective: "O3", q: "Ƙarin kaya na ajiya (safety stock) shi ne:", options: ["Ƙarin kayan da ake ajiyewa don abin da ba a zata ba", "Kayan da aka kulle", "Kayan da suka lalace", "Kayan da aka sayar yau"], answer: 0, why: "Yana kare ku daga buƙata ko jinkirin da ba a zata ba." },
      { objective: "O3", q: "Amfanin yau da kullum 20, lokacin isowa 5, ƙarin ajiya 40. Matakin sake oda?", options: ["25", "65", "100", "140"], answer: 3, why: "20 x 5 + 40 = 140." },
      { objective: "O3", q: "Ta yaya za ku san cewa dabarar lissafi da AI ya rubuta daidai take?", options: ["Ku goge ta", "Ku amince da ita", "Ku tambayi wani AI kawai", "Ku duba layi ɗaya da hannu"], answer: 3, why: "Duba da hannu yana tabbatar da lissafin." },
      { objective: "O4", q: "Iyaka (constraint) a jadawali ita ce:", options: ["Isar da kaya", "Wani nau'in babbar mota", "Ƙa'idar da dole tsarin ya bi", "Abokin ciniki"], answer: 2, why: "Lokutan buɗewa da sa'o'in aikin direbobi iyakoki ne." },
      { objective: "O4", q: "Ta yaya za ku duba lokutan tafiyar da AI ya bayar?", options: ["Ku yi tsammani", "Ku kwatanta da manhajar taswira", "Ku ce wa direba ya gaggauta", "Ku yi watsi da su"], answer: 1, why: "Manhajar taswira tana ba da lokutan da suka dace da gaskiya." },
      { objective: "O4", q: "Wanne ne BAI kamata ya shiga kayan AI na jama'a ba?", options: ["Sunayen abokan ciniki da adireshin gidajensu", "Wuraren sauka na ƙirƙira", "Lokutan buɗewar shagon ƙirƙira", "Yawan motoci (van)"], answer: 0, why: "Bayanan abokan ciniki na sirri ne." },
      { objective: "O5", q: "Ya kamata a ɗauki abin da AI ya samu a bayanai kamar:", options: ["Barkwanci", "Umarnin da dole ku bi", "Intel: yana da amfani amma ku tabbatar kafin ku ɗauki mataki", "Gaskiya ta ƙarshe"], answer: 2, why: "Tabbatarwa tana hana ɗaukar mataki bisa kuskure." },
      { objective: "O5", q: "Matatar (filter) takardar lissafi tana bar ku:", options: ["Nuna layukan da kuka zaɓa kawai", "Goge takardar", "Buga takarda da sauri", "Canja nau'in rubutu"], answer: 0, why: "Matatu suna taimaka muku duba abubuwan da ke maimaituwa." },
      { objective: "O5", q: "Bayan kun sami matsala ta gaske, ku rubuta:", options: ["Sabuwar kalmar sirri", "Wanda za a ɗora wa laifi kawai", "Babu komai", "Dalili, gyara, da yadda za ku auna shi"], answer: 3, why: "Gyaran da aka auna yana tabbatar da cewa ya yi aiki." },
      { objective: "O5", q: "Yawan isarwa a kan lokaci (on-time rate) yana nufin:", options: ["Gudun direba", "Kason kayan da suka iso a lokacin da aka yi alkawari", "Kuɗin mai", "Yawan manyan motoci"], answer: 1, why: "Yana auna alkawuran da aka cika." },
      { objective: "O6", q: "Wane layin résumé ne ya fi ƙarfi?", options: ["\"Did supply stuff.\"", "\"Managed 1,200 items worth $2M with zero losses at audit.\"", "\"Worked hard.\"", "\"Army.\""], answer: 1, why: "Lambobi da sakamako suna nuna tasirin aikinku." },
      { objective: "O6", q: "Wace hukumar DOL ce ke gudanar da shirye-shiryen aikin tsofaffin sojoji har da TAP?", options: ["EPA", "IRS", "FAA", "VETS"], answer: 3, why: "Veterans' Employment and Training Service ce ke gudanar da TAP don DOL." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 1, 5, 9, 10, 12, 14, 16, 18] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Takardar sake oda", objective: "O3", notYet: "Abubuwa ƙasa da biyar, ko matakan sake oda ba daidai ba ne.", meets: "Abubuwa biyar masu matakan sake oda daidai, da layi ɗaya da aka duba da hannu.", exceeds: "Takardar tana nuna abubuwan da suka kai ko suka yi ƙasa da matakin sake oda." },
      { name: "Jadawalin isar da kaya da aka duba", objective: "O4", notYet: "An yi amfani da jadawalin AI ba tare da dubawa ba, ko ya karya wata iyaka.", meets: "Jadawalin mako ɗaya da ke mutunta lokutan wuraren sauka, motoci da direbobi, tare da lokutan tafiya da aka duba a manhajar taswira.", exceeds: "Mai koyo ya faɗi matsalar da ya samu da yadda ya gyara ta." },
      { name: "Haɗarori da madadi", objective: "O6", notYet: "Haɗarori ƙasa da uku, ko haɗarori babu madadi.", meets: "Haɗari uku, kowanne da tsarin madadi.", exceeds: "Kowane madadi yana faɗin wa zai ɗauki mataki da yaushe." },
      { name: "Layukan résumé na farar hula", objective: "O1", notYet: "Layukan suna amfani da kalmomin soja ko babu sakamako.", meets: "Layuka biyu da kalmomin jigilar kaya na farar hula masu yawa ko sakamako.", exceeds: "Layukan sun dace da sunan aikin farar hula daga My Next Move for Veterans." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka nemi aikin jigilar kaya, rumbun ajiya ko sufuri na farar hula cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka sami aikin jigilar kaya, apprenticeship ko gurbin on-the-job training cikin kwanaki 90",
      "Bankunan abinci ko ƙananan kasuwancin abokan aiki da ke amfani da takardar sake oda ko jadawalin wani mai koyo"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta mai intanet",
      "Takardar lissafi kyauta: Google Sheets ko Microsoft Excel a intanet",
      "Mataimakin AI kyauta: ChatGPT, Microsoft Copilot ko Google Gemini, da manhajar taswira",
      "Na'urar lissafi (calculator)",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku ba kowane mai koyo bankin abinci ko shagon kayan gyara na ƙirƙira iri ɗaya don su kwatanta takardunsu da jadawalinsu.",
      "Ku nuna lissafin matakin sake oda ɗaya a allo kafin masu koyo su gina takardunsu.",
      "Ku yi amfani da wuraren sauka da bayanan ƙirƙira kawai; kada ku taɓa saka sunayen abokan ciniki ko adireshin gidaje na gaske a AI na jama'a.",
      "Ku sa masu koyo su gabatar da tsarinsu da babbar murya cikin minti biyu, kamar yadda za su yi wa manajan farar hula.",
      "Ku ba da maki ga gabatarwar ayyuka da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
