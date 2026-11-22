"use strict";

// Koach Learn course, Hausa (ha) translation of agriculture-africa/agri-irrigation-water.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const FAO_WATERNEEDS = { name: "FAO: Littafin horo kan sarrafa ruwan ban ruwa na 3: Buƙatar ruwan ban ruwa (Irrigation Water Needs)", url: "https://www.fao.org/4/s2022e/s2022e00.htm" };
const FAO_HARVEST = { name: "FAO: Littafin jagora kan tara ruwan sama don noma (Water Harvesting)", url: "https://www.fao.org/4/u3160e/u3160e00.htm" };
const FAO_DRIP = { name: "FAO: Littafin fasahar ban ruwa mai matsa lamba (har da ban ruwan ɗigo na iyali mai araha)", url: "https://www.fao.org/4/a1336e/a1336e.pdf" };
const FAO_SOLAR = { name: "FAO: Kyakkyawar makomar ban ruwa da famfon hasken rana (solar)", url: "https://www.fao.org/newsroom/detail/Positive-prospects-for-solar-powered-irrigation-systems/en" };
const FAO_SALINITY = { name: "FAO: Ingancin ruwa don noma (gishiri, wanke gishiri da magudanar ruwa)", url: "https://www.fao.org/4/t0234e/t0234e03.htm" };
const WRA = { name: "Hukumar Albarkatun Ruwa ta Kenya (Water Resources Authority, WRA): izinin amfani da ruwa", url: "https://wra.go.ke" };

module.exports = {
  id: "agri-irrigation-water-ha",
  lang: "ha",
  translationOf: "agri-irrigation-water",
  category: "Agriculture (Africa)",
  name: "Ban Ruwa da Sarrafa Ruwa a Gona",
  skills: "Gane lokacin da amfanin gona ke buƙatar ruwa, Tara ruwan sama, Ajiye ruwa lafiya, Kafa kayan ban ruwan ɗigo mai araha, Tsara lokacin ban ruwa ba tare da cunkushewar ruwa ko taruwar gishiri ba, Zaɓar famfo har da na hasken rana",
  outcome: "tsara ban ruwa don ƙaramin fili: kimanta lokacin da amfanin gonarku ya fi buƙatar ruwa, tara ruwan sama ku ajiye shi, kafa kayan ban ruwan ɗigo mai araha ku yi amfani da shi bisa jadawali, guje wa cunkushewar ruwa da taruwar gishiri, da zaɓar famfon da ya dace.",
  about: [
    "Wannan kwas na manoma ƙanana ne da masu girma, ma'aikatan gona da matasan manoma a Kenya, Najeriya, Ghana da sauran Afirka, waɗanda ke son su yi noma a lokacin fari, su yi noman rani, ko su yi amfani da ruwan da suke da shi cikin hikima. Yana mai da hankali kan hanyoyi masu araha da za ku iya farawa a ƙaramin fili, kamar lambun gida na tumatir da kale, ko renon 'ya'yan kofi.",
    "Babi na 1 game da inda ruwa yake fitowa: yawan ruwan da amfanin gona ke buƙata da lokacin da yake buƙata, tara ruwan sama daga rufin gida da gona, da ajiye shi lafiya. Babi na 2 game da kai ruwa ga amfanin gona: ban ruwan ɗigo mai araha, tsara lokacin ban ruwa ba tare da cunkushewar ruwa ko taruwar gishiri ba, da zaɓar famfo, har da famfon hasken rana.",
    "Dokokin ruwa da izini sun bambanta daga ƙasa zuwa ƙasa, don haka ku tambayi hukumar ruwa da jami'in faɗakarwar noma (extension officer) kafin ku haƙa rijiyar burtsatse, ku jawo ruwa daga kogi ko ku gina babban tafki. Kowane darasi yana ɗaukar kusan minti biyar kuma yana ƙarewa da aiki a gonarku. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku rubuta tsarin ban ruwa mai shafi ɗaya don ƙaramin fili (naku, ko misali kamar murabba'in mita 200 na tumatir kusa da Nakuru, ko murabba'in mita 500 na albasa da barkono kusa da Kano): amfanin gonar da matakan girmansa da ya fi jin ƙishirwa, inda ruwan zai fito da yawan da za ku iya ajiyewa, tsarin ɗigo ko wani tsari da za ku yi amfani da shi, jadawalin ban ruwa na mako-mako da yadda za ku duba ƙasa, yadda za ku guje wa cunkushewar ruwa da taruwar gishiri, da famfon da za ku zaɓa da dalilin haka.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manoma ƙanana da masu girma, ma'aikatan gona da matasan manoma a Kenya, Najeriya, Ghana da sauran Afirka, waɗanda ke son su yi noma a lokacin fari, su yi noman rani, ko su yi amfani da ruwansu cikin hikima a ƙananan filayen kayan lambu, masara ko renon tsirrai.",
    startingPoint: "Yawancinsu sun dogara ga ruwan sama, kuma suna ban ruwa da hannu da gwangwani ko bokiti idan suna iyawa. Kaɗan ne ke duba danshin ƙasa a zurfin saiwa, suka san matakan da amfanin gonarsu ya fi jin ƙishirwa, suke tara ruwa daga rufi ko gona, suke amfani da kayan ɗigo, ko suka san yadda ake auna girman famfo.",
    gap: "Fari a lokacin fure da ɗaukar 'ya'ya shi ne ya fi rage amfani, kuma ruwan da aka ɓata, ƙazantacce ko wanda ba a sarrafa shi da kyau ba yana kawo cuta, cunkushewar ruwa da ƙasa mai gishiri. Tsara ruwa don ƙaramin fili yana bar manoma su girbe fiye da haka, su yi noman rani, kuma su kashe kuɗi kaɗan kan ruwa da mai.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; ana bayanin kowace kalmar ruwa",
      "Na'urori: waya mai sauƙi da littafin rubutu; ƙaramin fili don yin atisaye",
      "Kuɗi: hanyoyi masu araha da farko; masu koyo suna kwatanta farashin masu sayarwa da kansu",
      "Dokokin ruwa da izini sun bambanta daga ƙasa zuwa ƙasa: ku tambayi hukumar ruwa kafin haƙa rijiya, gina madatsa ko jawo ruwa",
      "Tsaro: ana rufe tafkuna da tankuna kuma ana kewaye su da shinge; ruwan sha yana buƙatar shawarar tsaftacewa daga ofishin lafiya"
    ],
    prerequisites: "Babu. Kwas ɗin \"Lafiyar Ƙasa da Ƙarfinta\" yana taimakawa wajen ciyawar rufe ƙasa (mulch) da magudanar ruwa."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Don babban amfanin gonarku", action: "ambaton matakan girmansa da ya fi jin ƙishirwa, da duba danshin ƙasa a zurfin saiwa da hannu", standard: "kuna yanke shawara daidai ko za ku yi ban ruwa ko ku jira" },
    { id: "O2", condition: "Don rufinku da gonarku", action: "kimanta yawan ruwan saman da rufi zai iya tarawa, da zaɓar hanyar da za ta riƙe ruwan sama a gonarku", standard: "kuna amfani da kusan lita 1 a kowace murabba'in mita don kowane milimita na ruwan sama, kuma kuna tsara ƙasa da haka" },
    { id: "O3", condition: "Don ruwan da aka tara", action: "zaɓar wurin ajiye ruwa da kiyaye shi da tsabta, a rufe, kuma bisa doka", standard: "an rufe wurin ajiyar ko an kewaye shi da shinge, kuma an duba duk wani izini" },
    { id: "O4", condition: "Don fili mai kusan murabba'in mita 100 zuwa 500", action: "kafa da kula da kayan ban ruwan ɗigo mai amfani da nauyin ruwa (gravity)", standard: "ganga tana sama da ƙasa aƙalla mita 1, matatar ruwa tana da tsabta, kuma babu ramin ɗigo da ya toshe" },
    { id: "O5", condition: "A tsawon lokacin noma", action: "yin jadawalin ban ruwa na mako-mako, da gane cunkushewar ruwa da taruwar gishiri da wuri", standard: "kuna duba ƙasa kafin kowane ban ruwa" },
    { id: "O6", condition: "Idan dole a ɗaga ruwa ko a kai shi wani wuri", action: "kwatanta famfon ƙafa, na mai da na hasken rana, da rubuta abubuwan da za ku tambayi mai sayarwa", standard: "kuna faɗin yawan ruwan da ake buƙata a rana, tsayin ɗagawa da nisa, kuma kuna jawo abin da amfanin gona ke buƙata kawai" }
  ],
  chapters: [
    {
      name: "Babi na 1: Samun ruwa da ajiye shi",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ruwa nawa amfanin gonarku ke buƙata, kuma yaushe?",
          minutes: 5,
          goal: "Ambaci matakan girman amfanin gonarku da ya fi jin ƙishirwa, ku duba danshin ƙasa da hannu.",
          text: [
            "Littafin horo na FAO (Hukumar Abinci da Noma ta Majalisar Ɗinkin Duniya) kan buƙatar ruwan ban ruwa ya bayyana cewa buƙatar ruwan amfanin gona ta dogara ga abubuwa uku: yanayi, irin amfanin gonar, da matakin girmansa. Ranaku masu zafi, rana, bushewa da iska suna sa amfanin gona ya sha ruwa fiye da haka; ranaku masu sanyi, gajimare da natsuwa ƙasa da haka. Amfanin gona mai tsayi da ganye da yawa yana shan ruwa fiye da ƙanana.",
            "Matakin girma shi ne ya fi muhimmanci wajen tsari. Amfanin gona yana buƙatar ruwa kaɗan idan yana ƙarami, mafi yawa a lokacin fure da lokacin da hatsi ko 'ya'ya ke samuwa, kuma ƙasa da haka idan yana nunawa. Fari ya fi cutar da masara a lokacin fitar tutar namiji (tassel) da gashin buhu (silk); tumatir a lokacin fure da ɗaukar 'ya'ya; wake a lokacin fure da cikar kwafsa. Fari a waɗannan matakan shi ne ya fi rage amfani.",
            "Ku duba ƙasa, ba saman ƙasa kawai ba. Ku tura yatsa ko ɗan sanda cikin ƙasa kusa da saiwoyi, kusan zurfin cm 10 zuwa 15, ko ku haƙa ɗan rami ku matse ɗan dintsi. Idan ya haɗu wuri ɗaya kuma yana da danshi, ku jira. Idan ya farfashe kuma ya bushe a zurfin saiwa, lokacin ban ruwa ya yi. Wani sashe na ruwan saman da ya faɗi yana gudu a saman ƙasa ko ya nutse ƙasa sosai; sashen da amfanin gona zai iya amfani da shi ana kiransa ruwan sama mai amfani (effective rainfall)."
          ],
          steps: ["Ku rubuta amfanin gonarku da kwanaki nawa daga shuka zuwa girbi.", "Ku yi alama a matakansa da ya fi jin ƙishirwa (misali masara: fitar tuta da gashin buhu).", "Kowane mako, ku duba ƙasa a zurfin saiwa da yatsa, sanda ko rami.", "Ku lura da yanayi: ranaku masu zafi, iska da bushewa suna nufin ƙarin shan ruwa.", "Ku yi ban ruwa kafin ƙasa a zurfin saiwa ta bushe, musamman a matakan ƙishirwa."],
          words: [["Buƙatar ruwan amfanin gona", "yawan ruwan da amfanin gona ke amfani da shi don ya girma da kyau."], ["Matakin girma", "wani lokaci a rayuwar amfanin gona, kamar ƙaramin tsiro, fure ko nunawa."], ["Ruwan sama mai amfani (effective rainfall)", "sashen ruwan sama da ke zama a wurin saiwoyi, kuma amfanin gona zai iya amfani da shi."], ["Wurin saiwoyi (root zone)", "layin ƙasa inda mafi yawan saiwoyin amfanin gona suke."]],
          slides: [
            { title: "Abubuwa uku ne ke tsara buƙatar ruwa (FAO)", bullets: ["Yanayi: zafi, rana, bushewa, iska = ƙarin ruwa", "Irin amfanin gona: mai tsayi da ganye da yawa = ƙarin ruwa", "Matakin girma: mafi yawa a lokacin fure da cikar 'ya'ya/hatsi"] },
            { title: "Matakan da suka fi jin ƙishirwa", bullets: ["Masara: fitar tuta da gashin buhu", "Tumatir: fure da ɗaukar 'ya'ya", "Wake: fure da cikar kwafsa"] },
            { title: "Ku duba ƙasa, ba saman ƙasa ba", bullets: ["Yatsa ko sanda zurfin cm 10 zuwa 15 kusa da saiwoyi", "Ya haɗu kuma yana da danshi: ku jira", "Ya farfashe kuma ya bushe: lokacin ban ruwa ya yi"] }
          ],
          sources: [FAO_WATERNEEDS],
          tryIt: "Don amfanin gona ɗaya da kuke nomawa, ku rubuta makonnin bayan shuka da yake kai matakansa da ya fi jin ƙishirwa. Sannan ku duba ƙasarku a zurfin saiwa yau da yatsa, sanda ko ɗan rami, ku rubuta: da danshi ko a bushe.",
          youCanNow: "faɗin lokacin da amfanin gonarku ya fi buƙatar ruwa, da duba danshin ƙasa a zurfin saiwa.",
          quickCheck: [
            { objective: "O1", q: "Yaushe wake ya fi buƙatar ruwa?", options: ["Nan da nan bayan girbi", "A lokacin fure da cikar kwafsa", "Lokacin da yake iri kawai", "Lokacin da kwafsoshin suka bushe"], answer: 1, why: "Fari ya fi cutar da wake a lokacin fure da cikar kwafsa." },
            { objective: "O1", q: "Kun haƙa ɗan rami kusa da saiwoyi. Ƙasar tana farfashewa kuma ta bushe a wannan zurfin. Me za ku yi?", options: ["Ku jira wani mako", "Ku shayar da ganyayyaki kawai", "Ku sa taki a maimakon ruwa", "Ku yi wa amfanin gonar ban ruwa yanzu"], answer: 3, why: "Idan ƙasa ta farfashe kuma ta bushe a zurfin saiwa, lokacin ban ruwa ya yi." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Tara ruwan sama daga rufi da gona",
          minutes: 5,
          goal: "Ku lissafa ruwan saman da rufinku zai iya tarawa, ku zaɓi hanyar riƙe ruwan sama a gonarku.",
          text: [
            "Tara ruwa yana nufin kama ruwan sama inda ya faɗi ko inda yake gudu, da ajiye shi don amfanin gona, dabbobi ko gida. Littafin FAO kan tara ruwa ya bayyana hanyoyi da yawa da ake amfani da su a wuraren da ba su da ruwa sosai: ramukan shuka (kamar ramin zai), kunyoyin rabin da'ira, kunyoyin bin layin tudu (contour ridges), ƙananan wuraren tara ruwa masu siffar lu'u-lu'u a kewayen bishiyoyi (negarim) da kunyoyin duwatsu.",
            "Tara ruwa daga rufi shi ne farawa mafi sauƙi. Kowane milimita 1 na ruwan sama a kan murabba'in mita 1 na rufi yana ba da kusan lita 1 na ruwa. Rufi mai murabba'in mita 50 a wurin da ake samun ruwan sama mm 600 a shekara zai iya ba da har lita 30,000 a shekara, amma koyaushe wani sashe yana ɓacewa, don haka ku tsara ƙasa da haka. Ku sa magudanar rufi (gutter), bututun farko-farko (first flush) da ke zubar da ruwan farko mai datti, da tanki mai murfi.",
            "Ruwan da ke gudu daga hanyoyi, ƙananan hanyoyi da gangare za a iya kai shi cikin rami mai shimfiɗa (water pan) ko tafkin gona. Ramukan shuka cike da taki ko taɓarɓarewar kayan gona (compost) suna kama ruwan sama daidai a saiwoyin masara, dawa ko ƙananan bishiyoyin 'ya'yan itace. Ku fara kaɗan, ku kalli inda ruwa ke gudu a gonarku a ruwan sama na gaba."
          ],
          steps: ["Ku auna rufinku: tsayi sau faɗi a mita.", "Ku nemi yawan ruwan saman shekara daga hukumar yanayi ko jami'in faɗakarwar noma.", "Ku ninka girman rufi da ruwan sama a mm don samun lita, sannan ku tsara ƙasa da haka saboda asara.", "Ku sa magudanar rufi, bututun farko-farko da tanki mai murfi.", "Ku zaɓi hanya ɗaya ta gona (ramuka, kunyoyi ko kunyoyin bin layin tudu) don fili ɗaya."],
          words: [["Tara ruwa", "kama ruwan sama ko ruwan da ke gudu da ajiye shi don amfani daga baya."], ["Tara ruwa daga rufi", "karɓar ruwan sama daga rufi ta magudanar rufi zuwa tanki."], ["Bututun farko-farko (first flush)", "bututun da ke zubar da ruwan sama na farko, mafi datti, daga rufi."], ["Ramin zai", "ƙaramin ramin shuka cike da taki da ke kama ruwan sama a saiwoyi."]],
          slides: [
            { title: "Ku kama ruwan sama inda ya faɗi", bullets: ["Ramukan shuka (zai), kunyoyin rabin da'ira", "Kunyoyin bin layin tudu, kunyoyin duwatsu", "Wuraren tara ruwa na negarim a kewayen bishiyoyi (FAO)"] },
            { title: "Lissafin rufi", bullets: ["Ruwan sama mm 1 a kan murabba'in mita 1 = kusan lita 1", "Rufi m2 50 x mm 600 = har lita 30,000 a shekara", "Ku tsara ƙasa da haka: koyaushe wani sashe yana ɓacewa"] },
            { title: "Ku kafa shi", bullets: ["Magudanar rufi da bututun farko-farko", "Tanki mai murfi", "Ku kai ruwan hanya cikin rami mai shimfiɗa (water pan)"] }
          ],
          sources: [FAO_HARVEST],
          tryIt: "Ku auna rufin gidanku ko na rumbunku, ku nemi yawan ruwan saman shekara. Ku lissafa lita nawa zai iya tarawa a shekara. Ku yi amfani da na'urar lissafi ta wayarku, ko ku tambayi mataimakin AI a waya ya duba lissafinku.",
          youCanNow: "kimanta yawan ruwan saman da za ku iya tarawa, da zaɓar hanyar riƙe ruwan sama a gonarku.",
          quickCheck: [
            { objective: "O2", q: "Wace ce hanyar gona da ke riƙe ruwan sama a gonarku?", options: ["Ramukan shuka ko kunyoyin bin layin tudu", "Ƙona ciyawa", "Yin huɗa sama da ƙasa a gangare", "Barin ƙasa a fili ba tare da rufi ba"], answer: 0, why: "Ramukan shuka, kunyoyi da kunyoyin bin layin tudu suna kama ruwan sama inda ya faɗi." },
            { objective: "O2", q: "A ruwan sama na gaba, ruwa yana gudu da ƙarfi a hanyar gonarku. Me za ku iya yi da shi?", options: ["Ku bar shi ya tafi kogi", "Ku toshe hanyar", "Ku kai shi cikin rami mai shimfiɗa ko tafkin gona", "Ku haƙa rami a tsakiyar hanyar"], answer: 2, why: "Ruwan da ke gudu daga hanyoyi za a iya kai shi cikin rami mai shimfiɗa ko tafki don amfani daga baya." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ajiye ruwa lafiya",
          minutes: 4,
          goal: "Ku zaɓi wurin ajiye ruwa, ku kiyaye shi da tsabta, a rufe, kuma bisa doka.",
          text: [
            "Wuraren ajiya da aka saba amfani da su su ne tankunan roba ko na siminti mai waya (ferro-cement), tankunan ƙarƙashin ƙasa, da ramukan tara ruwa (water pan) ko tafkunan gona. Tafkuna suna rasa ruwa mai yawa cikin ƙasa sai dai idan an shimfiɗa musu leda (misali dam liner), kuma suna rasa mai yawa ga rana sai dai idan an yi musu inuwa ko an rufe su.",
            "Ku kiyaye ruwan da aka ajiye da tsabta kuma lafiya. Ku rufe tankuna da tafkuna don hana datti, dabbobi da yara shiga, da kuma hana sauro hayayyafa. Ku kewaye tafkuna da shinge. Ku tsaftace magudanar rufi da tankuna kafin damina. Ruwan sha yana buƙatar kulawa fiye da ruwan amfanin gona; ku tambayi ofishin lafiya yadda ake tsaftace shi.",
            "Amfani da ruwa mai yawa zai iya buƙatar izini. A Kenya, Hukumar Albarkatun Ruwa (Water Resources Authority, WRA) ce ke kula da amfani da ruwa kuma tana ba da izini, misali don rijiyoyin burtsatse da jawo ruwa daga koguna. Sauran ƙasashe suna da nasu hukumomin ruwa. Ku tambaya kafin ku haƙa rijiya, ku gina madatsa ko ku jawo ruwa."
          ],
          steps: ["Ku yanke abin da ruwan zai yi: amfanin gona, dabbobi ko gida.", "Ku zaɓi wurin ajiya: tanki, tankin ƙarƙashin ƙasa, ko tafki mai shimfiɗa.", "Ku rufe shi, ku kewaye tafkuna da shinge.", "Ku tsaftace magudanar rufi da tankuna kafin kowace damina.", "Kafin haƙa rijiya ko jawo ruwa daga kogi, ku tambayi hukumar ruwa."],
          words: [["Rami mai tara ruwa (water pan)", "tafkin da aka haƙa da ke tara ruwan da ke gudu."], ["Dam liner", "leda mai ƙarfi da ke hana tafki zubar da ruwa cikin ƙasa."], ["Izini (permit)", "yardar hukuma don amfani da ruwa ko ɗibar sa."]],
          slides: [
            { title: "Wuraren ajiya", bullets: ["Tankunan roba ko na siminti mai waya", "Tankunan ƙarƙashin ƙasa", "Ramukan tara ruwa da tafkunan gona masu shimfiɗa"] },
            { title: "Ku kiyaye shi lafiya", bullets: ["Murfi: datti, dabbobi, sauro", "Ku kewaye tafkuna da shinge; yara suna nutsewa a tafkuna", "Ku tsaftace magudanar rufi da tankuna kafin damina"] },
            { title: "Ku duba dokoki", bullets: ["Kenya: Hukumar Albarkatun Ruwa (WRA)", "Sauran ƙasashe: hukumar ruwanku", "Ku tambaya kafin haƙa rijiya, gina madatsa ko jawo ruwa"] }
          ],
          sources: [WRA],
          tryIt: "Ku rubuta wurin ajiyar da ya dace da gonarku da kuɗinku, yadda za ku rufe shi ku kewaye shi da shinge, da sunan ofishin a ƙasarku da za ku tambaya kafin haƙa rijiya ko jawo ruwa.",
          youCanNow: "zaɓar wurin ajiye ruwa, kiyaye shi lafiya, da sanin lokacin da kuke buƙatar izini.",
          quickCheck: [
            { objective: "O3", q: "Wane wurin ajiya ne ya fi rasa ruwa sai dai idan an shimfiɗa shi kuma an rufe shi?", options: ["Tankin roba mai murfi", "Tankin siminti mai waya", "Tankin ƙarƙashin ƙasa", "Tafkin gona a buɗe ba tare da shimfiɗa ba"], answer: 3, why: "Tafkuna suna rasa ruwa cikin ƙasa sai an shimfiɗa su, kuma ga rana sai an yi musu inuwa ko an rufe su." },
            { objective: "O3", q: "Kuna son amfani da wani ruwan saman da kuka ajiye don sha. Me za ku yi?", options: ["Ku sha shi kai tsaye daga tafkin", "Ku tambayi ofishin lafiya yadda ake tsaftace shi", "Ku sa taki don tsaftace shi", "Ku yi amfani da ruwan farko-farko"], answer: 1, why: "Ruwan sha yana buƙatar kulawa fiye da ruwan amfanin gona; ku tambayi ofishin lafiya yadda ake tsaftace shi." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Samun ruwa da ajiye shi",
        questions: [
          { objective: "O1", q: "Yaushe fari ya fi cutar da masara?", options: ["A lokacin fitar tuta da gashin buhu", "Nan da nan bayan girbi", "Kafin shuka", "Lokacin da kawunan masarar suka bushe"], answer: 0, why: "Matakan fure su ne suka fi rauni; fari a lokacin shi ne ya fi rage amfani." },
          { objective: "O1", q: "Ta yaya za ku duba ko amfanin gona yana buƙatar ruwa?", options: ["Ku kalli saman ƙasa kawai", "Ku jira har ganyayyaki su mutu", "Ku duba danshi a zurfin saiwa da yatsa, sanda ko ɗan rami", "Ku yi ban ruwa kowace awa"], answer: 2, why: "Saiwoyi suna jin ƙasar da ke ƙarƙashin saman, don haka ku duba can." },
          { objective: "O2", q: "Rufi yana da murabba'in mita 40 kuma yana samun ruwan sama mm 500 a shekara. Kusan nawa zai iya tarawa a mafi yawa?", options: ["Lita 200", "Lita 2,000", "Lita 540", "Lita 20,000"], answer: 3, why: "40 x 500 = lita 20,000; abin da za a tara a zahiri zai ɗan ragu." },
          { objective: "O2", q: "Me bututun farko-farko (first flush) yake yi?", options: ["Yana tura ruwa sama", "Yana zubar da ruwan sama na farko, mafi datti, daga rufi", "Yana dumama ruwa", "Yana auna ruwan sama"], answer: 1, why: "Yana hana ƙura da kashin tsuntsaye shiga tanki." },
          { objective: "O3", q: "Me yasa za a rufe tankin ruwa ko tafki?", options: ["Don hana datti da dabbobi shiga, da hana sauro hayayyafa", "Don ruwan ya yi ɗumi", "Don ya yi nauyi", "Murfi ba shi da amfani"], answer: 0, why: "Rufewa yana kiyaye ruwa da tsabta kuma lafiya." }
        ]
      }
    },
    {
      name: "Babi na 2: Kai ruwa ga amfanin gona",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ban ruwan ɗigo mai araha",
          minutes: 6,
          goal: "Ku kafa ku kula da kayan ɗigo na bokiti ko ganga don ƙaramin fili.",
          text: [
            "Ban ruwan ɗigo (drip irrigation) yana sa ruwa a hankali a gindin kowane tsiro ta siraran bututu masu ƙananan ramuka (emitters). Ruwa kaɗan ne ke ɓacewa ga rana da iska, ganyayyaki suna zama a bushe don haka cuta tana raguwa, kuma ciyawar da ke tsakanin layuka tana samun ruwa kaɗan.",
            "Littafin FAO kan ban ruwa mai matsa lamba ya bayyana tsarin ɗigo na iyali mai araha don filaye masu kusan murabba'in mita 100 zuwa 500: bokiti ko ganga da aka ɗaga aƙalla mita 1 sama da kunyoyi tana ba da ruwa ga matata, babban bututu da layukan ɗigo a kan kowane layi. Nauyin ruwa (gravity) ne ke ba da matsi, don haka ba a buƙatar famfo don a yi amfani da shi. Masu sayar da kayan noma da masu sayar da kayan ban ruwa ne ke sayar da kayan; ku kwatanta farashi ku tambayi kayan gyara.",
            "Toshewa ita ce babbar matsala. Ku yi amfani da ruwa mai tsabta, ku bar matatar a wurinta ku riƙa tsaftace ta, kuma ku riƙa wanke ƙarshen layukan ɗigo akai-akai. Ku rufe ƙasa da ciyawa (mulch) a kan layukan ɗigo don ƙara rage ƙafewar ruwa. Ku duba cewa kowane ramin ɗigo yana ɗigowa; tsiron da ya bushe yawanci yana nufin ramin ya toshe."
          ],
          steps: ["Ku daidaita kunyoyi ku shimfiɗa layukan ɗigo a kan kowane layin tsirrai.", "Ku ɗaga bokiti ko ganga a kan ɗakali aƙalla mita 1 sama da kunyoyi.", "Ku haɗa ganga, famfon ruwa (tap), matata, babban bututu da layukan ɗigo; ku rufe ƙarshen layukan.", "Ku cika da ruwa mai tsabta, ku buɗe famfon ruwan, ku duba cewa kowane ramin ɗigo yana ɗigowa.", "Ku rufe layukan da ciyawa (mulch).", "Ku tsaftace matata ku wanke ƙarshen layuka kowane mako ɗaya ko biyu."],
          words: [["Ban ruwan ɗigo", "shayar da tsirrai ɗigo-ɗigo a saiwoyi ta siraran bututu."], ["Ramin ɗigo (emitter)", "ƙaramin rami ko na'urar ɗigo da ke fitar da ruwa kusa da kowane tsiro."], ["Matata (filter)", "raga da ke hana datti toshe ramukan ɗigo."], ["Mai amfani da nauyin ruwa (gravity-fed)", "tsayin tankin ruwa ne ke tura ruwan, ba famfo ba."]],
          slides: [
            { title: "Me yasa ɗigo", bullets: ["Ruwa yana zuwa saiwoyi", "Ƙarancin asara ga rana da iska", "Ganye a bushe, ƙarancin cuta da ciyawa"] },
            { title: "Kayan ɗigo na iyali (FAO)", bullets: ["Don filaye masu kusan murabba'in mita 100 zuwa 500", "Bokiti ko ganga aƙalla m 1 sama da kunyoyi", "Matata, babban bututu, layukan ɗigo a kan layuka"] },
            { title: "Ku sa shi ya ci gaba da aiki", bullets: ["Ruwa mai tsabta da matata mai tsabta", "Ku riƙa wanke ƙarshen layuka", "Ku duba kowane ramin ɗigo; ku rufe layuka da ciyawa"] }
          ],
          sources: [FAO_DRIP],
          tryIt: "Ku zana tsarin ɗigo don ƙaramin fili: inda ganga take (aƙalla m 1 a sama), matata, babban bututu da kowane layin ɗigo. Sannan ku tambayi masu sayarwa ko dillalan kayan noma guda biyu farashin kayan don wannan girma, ku rubuta duka biyun.",
          youCanNow: "kafa, amfani da, da kula da kayan ban ruwan ɗigo mai araha da ke amfani da nauyin ruwa.",
          quickCheck: [
            { objective: "O4", q: "Mene ne ramin ɗigo (emitter) a layin ɗigo?", options: ["Tankin ruwa", "Famfo", "Ƙaramin rami ko na'urar ɗigo da ke fitar da ruwa a kowane tsiro", "Matata"], answer: 2, why: "Ramukan ɗigo ƙananan ramuka ne da ke ɗigar da ruwa a gindin kowane tsiro." },
            { objective: "O4", q: "Ruwanku yana fitowa daga tafki mai laka. Ta yaya za ku kare kayan ɗigonku?", options: ["Ku bar matata a wurinta, ku riƙa tsaftace ta, ku wanke ƙarshen layuka", "Ku cire matata don ruwa ya fi gudu", "Kada ku taɓa duba ramukan ɗigo", "Ku yi amfani da kayan da tsakar rana kawai"], answer: 0, why: "Ruwa mai tsabta, matata mai tsabta da wanke layuka akai-akai suna hana toshewa, babbar matsalar ɗigo." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Jadawalin ban ruwa: ba tare da cunkushewar ruwa ko gishiri ba",
          minutes: 5,
          goal: "Ku yi jadawalin ban ruwa na mako-mako, ku gane cunkushewar ruwa da taruwar gishiri da wuri.",
          text: [
            "Jadawali yana amsa tambayoyi biyu: yaushe za a yi ban ruwa, kuma nawa. Ku yi ban ruwa da sassafe ko da yamma, lokacin da ruwa kaɗan ke ɓacewa ga rana. Ku ƙara yawan ban ruwa a lokacin zafi da iska da kuma matakan ƙishirwa, kuma ku tsallake ban ruwa bayan ruwan sama mai kyau. Ku ci gaba da duba ƙasa a zurfin saiwa; jadawali jagora ne, ƙasa ce ke da magana ta ƙarshe.",
            "Ruwa mai yawa yana cutarwa kamar ruwa kaɗan. Ƙasa da ruwa ya cunkushe a cikinta ba ta da iska ga saiwoyi: tsirrai suna yin rawaya suna yanƙwanewa ko da ƙasar tana da ruwa, kuma saiwoyi suna ruɓewa. Alamomi su ne ruwa a tsaye, wari mai tsami da yin rawaya. Ku rage ruwa, ku buɗe magudanai, ku yi amfani da kunyoyi masu tsayi ko tuddai a ƙasar yumɓu mai nauyi.",
            "FAO ta bayyana cewa gishiri yana taruwa idan ruwan ban ruwa ya kawo gishiri fiye da wanda ke fita da magudanar ruwa, kuma yawan ban ruwa da rashin magudanar ruwa mai kyau suna cikin abubuwan da suka fi jawo shi. Ku lura da farin ɓawo a kan ƙasa, gefen ganye da ke ƙonewa, da rashin girma mai kyau. Magudanar ruwa mai kyau, ciyawar rufe ƙasa (mulch) da isasshen ruwa (ba mai yawa ba) suna taimakawa. Idan kun ga waɗannan alamomi, ko kuna amfani da ruwan rijiyar burtsatse a yankin da ba ruwa sosai, ku tambayi jami'in faɗakarwar noma ko ɗakin gwajin ƙasa su gwada ruwan da ƙasar."
          ],
          steps: ["Ku rubuta tsarin mako: waɗanne ranaku, safe ko yamma, tsawon lokaci.", "Ku ƙara ruwa a matakan ƙishirwa da makonni masu zafi da iska.", "Ku tsallake ban ruwa bayan ruwan sama mai kyau.", "Ku duba ƙasa a zurfin saiwa kafin kowane ban ruwa.", "Ku nemi ruwa a tsaye, wari mai tsami da yin rawaya (cunkushewar ruwa).", "Ku nemi farin ɓawo da gefen ganye da ya ƙone (gishiri); ku nemi a gwada ruwa da ƙasa."],
          words: [["Jadawalin ban ruwa", "tsari na lokacin ban ruwa da yawan ruwan."], ["Cunkushewar ruwa (waterlogging)", "ƙasar da ta cika da ruwa har saiwoyi ba sa samun iska."], ["Gishirin ƙasa (salinity)", "gishiri mai yawa a ƙasa ko ruwa, wanda ke cutar da amfanin gona."], ["Magudanar ruwa (drainage)", "hanyar da ƙarin ruwa ke fita daga ƙasa."]],
          slides: [
            { title: "Yaushe kuma nawa", bullets: ["Ku yi ban ruwa da sassafe ko da yamma", "Ƙari a matakan ƙishirwa da makonni masu zafi da iska", "Ku tsallake bayan ruwan sama mai kyau; ƙasa ce ke yanke hukunci"] },
            { title: "Cunkushewar ruwa", bullets: ["Ruwa a tsaye, wari mai tsami, tsirrai masu rawaya suna yanƙwanewa", "Ku rage ruwa ku buɗe magudanai", "Kunyoyi masu tsayi ko tuddai a ƙasar yumɓu mai nauyi"] },
            { title: "Taruwar gishiri (FAO)", bullets: ["Yawan ban ruwa da rashin magudanar ruwa ne ke jawo shi", "Farin ɓawo, gefen ganye da ya ƙone, rashin girma", "Ku inganta magudanar ruwa, ku rufe ƙasa, ku gwada ruwa da ƙasa"] }
          ],
          sources: [FAO_WATERNEEDS, FAO_SALINITY],
          tryIt: "Ku rubuta jadawalin ban ruwa na mako ɗaya don amfanin gona ɗaya: ranaku, lokacin rana da tsawon lokaci. A gefensa, ku rubuta alamomin gargaɗi biyu na cunkushewar ruwa da biyu na taruwar gishiri da za ku nema a duk lokacin da kuka yi ban ruwa.",
          youCanNow: "tsara jadawalin ban ruwa, da gane cunkushewar ruwa da taruwar gishiri kafin su lalata amfanin gona.",
          quickCheck: [
            { objective: "O5", q: "Me jadawalin ban ruwa yake yanke wa?", options: ["Wane iri za a saya", "Yaushe za a yi ban ruwa kuma nawa", "Inda za a sayar", "Wane famfo za a saya"], answer: 1, why: "Jadawali yana amsa yaushe za a yi ban ruwa kuma nawa, kuma duba ƙasa ne ke da magana ta ƙarshe." },
            { objective: "O5", q: "Kuna ban ruwa da ruwan rijiyar burtsatse a yankin da ba ruwa sosai, kuma girma yana ƙara lalacewa kowace kaka. Me za ku yi?", options: ["Ku ninka ruwan sau biyu", "Ku daina ban ruwa gaba ɗaya", "Ku ƙara taki", "Ku tambayi jami'in faɗakarwar noma ko ɗakin gwajin ƙasa su gwada ruwa da ƙasa"], answer: 3, why: "Ruwan rijiyar burtsatse a yankunan da ba ruwa sosai zai iya kawo gishiri; gwajin ruwa da ƙasa yana nuna matsalar." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Zaɓar famfo, har da famfon hasken rana",
          minutes: 5,
          goal: "Ku kwatanta famfon ƙafa, na mai da na hasken rana, ku rubuta abin da za ku tambayi mai sayarwa.",
          text: [
            "Idan ruwa yana ƙasa da filinku ko nesa da shi, kuna buƙatar famfo. Famfon ƙafa (treadle) da na hannu suna da araha kuma suna amfani da ƙarfinku, suna da kyau ga ƙananan filaye kusa da ruwa marar zurfi. Famfon fetur da na dizal suna da araha a saya kuma ana iya ɗaukar su cikin sauƙi, amma mai da gyara suna cin kuɗi kowane mako. Famfon hasken rana (solar) ya fi tsada a saya amma yana amfani da hasken rana kyauta, don haka kuɗin amfani da shi kaɗan ne sosai.",
            "Don ku zaɓa, ku san abubuwa uku: yawan ruwan da kuke buƙata kowace rana, tsayin da dole a ɗaga ruwan (daga matakin ruwa zuwa tanki ko gona), da nisan da dole ya yi tafiya. Mai sayarwa yana buƙatar waɗannan don auna girman famfo. Famfon da ya yi ƙanƙanta ba zai ba da isasshen ruwa ba; wanda ya yi girma da yawa yana ɓata kuɗi.",
            "FAO ta nuna wani haɗari game da famfon hasken rana: saboda kowace ƙarin awa ta jawo ruwa kyauta ce, manoma za su iya jawo ruwa fiye da abin da kogi ko ruwan ƙarƙashin ƙasa zai iya jurewa. Ku jawo abin da amfanin gonarku ke buƙata kawai, ku raba ruwa cikin adalci da maƙwabta, ku bi dokokin hukumar ruwanku. Ku kiyaye allunan solar da tsabta kuma a tsare, ku nemi garanti, kayan gyara da hidimar bayan sayarwa a rubuce. Wasu masu sayarwa suna ba da tsarin biya-yayin-amfani (pay-as-you-go); ku karanta cikakken farashi da sharuɗɗa tukuna."
          ],
          steps: ["Ku lissafa ruwan da ake buƙata kowace rana don filinku.", "Ku auna tsayin ɗagawa: daga matakin ruwa zuwa tanki ko gona.", "Ku auna nisa daga inda ruwa yake zuwa fili.", "Ku kwatanta famfon ƙafa, na mai da na hasken rana a kan kuɗin saye, kuɗin amfani da aiki.", "Ku nemi mai sayarwa ya auna girma, ya ba da garanti, kayan gyara da hidima a rubuce.", "Ku duba izinin ruwa kafin jawo ruwa daga kogi ko rijiyar burtsatse."],
          words: [["Famfon ƙafa (treadle pump)", "famfon da ake tukawa da ƙafa don ɗaga ruwa daga wuri marar zurfi."], ["Famfon hasken rana (solar pump)", "famfon da allunan hasken rana (solar panels) ke ba wa wuta."], ["Tsayin ɗagawa (lift ko head)", "tsayin da famfo dole ya ɗaga ruwa."], ["Jawo ruwa fiye da kima (over-abstraction)", "ɗibar ruwa daga kogi ko ƙarƙashin ƙasa fiye da abin da yanayi ke maidowa."]],
          slides: [
            { title: "Irin famfo", bullets: ["Na ƙafa ko na hannu: mai araha, da ƙarfinku", "Fetur ko dizal: mai araha a saya, mai tsada a yi amfani da shi", "Hasken rana: mai tsada a saya, kuɗin amfani kaɗan ne sosai"] },
            { title: "Ku auna girmansa daidai", bullets: ["Ruwan da ake buƙata a rana", "Tsayin ɗagawa: sama nawa", "Nisa: tafiya nawa"] },
            { title: "Hasken rana: ku yi amfani da shi da hikima (FAO)", bullets: ["Jawo ruwa kyauta zai iya kai ga jawo fiye da kima", "Ku jawo abin da amfanin gona ke buƙata kawai", "Ku bi dokokin hukumar ruwanku"] },
            { title: "Ku tambayi mai sayarwa", bullets: ["Girman famfo da ya dace da tsayin ɗagawa da nisanku", "Garanti, kayan gyara da hidima a rubuce", "Cikakken farashi da sharuɗɗan kowane tsarin biya-yayin-amfani"] }
          ],
          sources: [FAO_SOLAR, WRA],
          tryIt: "Aikin ƙarshe: ku rubuta tsarin ban ruwanku mai shafi ɗaya. Ku haɗa matakan ƙishirwar amfanin gonarku, inda ruwanku yake fitowa da yadda za ku ajiye shi, tsarin ɗigo ko wani tsari, jadawalin mako-mako, yadda za ku guje wa cunkushewar ruwa da gishiri, da famfon da za ku zaɓa tare da tsayin ɗagawa, nisa da ruwan da kuke buƙata a rana.",
          youCanNow: "zaɓar irin famfon da ya dace, da haɗa cikakken tsarin ban ruwa don ƙaramin fili.",
          quickCheck: [
            { objective: "O6", q: "Wane famfo ne ke amfani da ƙarfinku kuma ya dace da ƙaramin fili kusa da ruwa marar zurfi?", options: ["Famfon ƙafa ko na hannu", "Babban famfon dizal", "Babban tsarin hasken rana", "Babu famfo kwata-kwata"], answer: 0, why: "Famfon ƙafa da na hannu suna da araha kuma sun dace da ƙananan filaye kusa da ruwa marar zurfi." },
            { objective: "O6", q: "Sabon famfon hasken ranarku zai iya aiki duk yini kyauta, amma ruwan kogin yana raguwa. Me za ku yi?", options: ["Ku jawo ruwa duk yini domin kyauta ne", "Ku sayar da ƙarin ruwan", "Ku jawo abin da amfanin gona ke buƙata kawai, ku raba ruwa cikin adalci da maƙwabta", "Ku kai famfon sama da kogin"], answer: 2, why: "Jawo ruwa kyauta zai iya ɗibar ruwa da yawa; ku jawo abin da amfanin gona ke buƙata kawai, ku bi dokokin hukumar ruwa." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Kai ruwa ga amfanin gona",
        questions: [
          { objective: "O4", q: "Mece ce babbar matsalar da za a hana a kayan ɗigo?", options: ["Matsi mai yawa", "Ramukan ɗigo da suka toshe", "Tsirrai da yawa", "Ganye mai ruwa"], answer: 1, why: "Datti yana toshe ramukan ɗigo; matata mai tsabta da wanke layuka suna hana haka." },
          { objective: "O4", q: "Tsayin nawa ya kamata a ɗaga gangar kayan ɗigo mai amfani da nauyin ruwa?", options: ["A ƙasa", "A binne ta ƙarƙashin kunyoyi", "Aƙalla mita 1 sama da kunyoyi", "Ba shi da muhimmanci"], answer: 2, why: "FAO ta ce a ɗaga ganga aƙalla mita 1 don ta ba da isasshen matsi." },
          { objective: "O5", q: "Tsirrai sun yi rawaya suna yanƙwanewa, ƙasa tana wari mai tsami kuma ruwa yana tsaye. Mene ne matsalar?", options: ["Ruwa ya yi kaɗan", "Rana ta yi yawa", "Gishiri a iska", "Cunkushewar ruwa"], answer: 3, why: "Ruwa a tsaye da wari mai tsami suna nufin saiwoyi ba su da iska." },
          { objective: "O5", q: "Kun ga farin ɓawo a kan ƙasa da gefen ganye da ya ƙone. Me ya kamata ku yi?", options: ["Ku nemi gwajin ruwa da ƙasa, ku inganta magudanar ruwa", "Ku ƙara ruwa sosai kowace rana", "Ku ƙara gishiri", "Ku yi watsi da shi"], answer: 0, why: "Waɗannan alamomin taruwar gishiri ne; FAO ta danganta shi da yawan ban ruwa da rashin magudanar ruwa." },
          { objective: "O6", q: "Me yasa FAO ke gargaɗi game da famfon hasken rana?", options: ["Ba sa aiki kwata-kwata", "Suna da hayaniya sosai", "Jawo ruwa kyauta zai iya kai ga ɗibar ruwa da yawa", "Suna buƙatar fetur"], answer: 2, why: "Da kusan babu kuɗin amfani, manoma za su iya jawo ruwan koguna da na ƙarƙashin ƙasa fiye da kima." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Ban Ruwa da Sarrafa Ruwa a Gona",
    questions: [
      { objective: "O1", q: "A cewar FAO, buƙatar ruwan amfanin gona ta dogara ga:", options: ["Farashin ruwa kawai", "Yanayi, irin amfanin gona da matakin girma", "Launin amfanin gona", "Ranar mako"], answer: 1, why: "FAO ta lissafa yanayi, irin amfanin gona da matakin girma." },
      { objective: "O1", q: "Wane yanayi ne ke sa amfanin gona ya fi shan ruwa?", options: ["Sanyi da gajimare", "Natsuwa da hazo", "Zafi, rana, bushewa da iska", "Sanyi da danshi"], answer: 2, why: "Zafi, rana, busasshiyar iska da iska mai ƙarfi suna ƙara shan ruwa." },
      { objective: "O1", q: "Tumatir ya fi jin rashin ruwa a lokacin:", options: ["Fure da ɗaukar 'ya'ya", "Sayen iri", "Bayan girbi na ƙarshe", "Lokacin da gonar take a fili"], answer: 0, why: "Fure da ɗaukar 'ya'ya su ne matakan da suka fi jin ƙishirwa." },
      { objective: "O1", q: "Ruwan sama mai amfani (effective rainfall) shi ne:", options: ["Duk ruwan saman da ya faɗi", "Ruwan saman da ke faɗuwa da dare", "Ruwan saman da rediyo ya auna", "Sashen ruwan saman da amfanin gona zai iya amfani da shi a zahiri"], answer: 3, why: "Wani ruwan sama yana gudu ko ya nutse ƙasa sosai; sauran shi ne mai amfani." },
      { objective: "O2", q: "Kusan ruwa nawa ruwan sama mm 1 yake bayarwa a kan murabba'in mita 1 na rufi?", options: ["Lita 1", "Lita 10", "Lita 100", "Lita 1,000"], answer: 0, why: "mm 1 a kan murabba'in mita 1 kusan lita 1 ne." },
      { objective: "O2", q: "Ramin zai shi ne:", options: ["Rijiyar burtsatse", "Ƙaramin ramin shuka mai taki da ke kama ruwan sama a saiwoyi", "Wani irin famfo", "Tankin ruwa"], answer: 1, why: "Ramukan zai suna tara ruwan sama da abinci ga tsiro a wuri ɗaya." },
      { objective: "O3", q: "Me yasa za a shimfiɗa leda a tafkin gona?", options: ["Don ruwan ya yi gishiri", "Don jawo dabbobi", "Don hana ruwa zubewa cikin ƙasa", "Ba a taɓa buƙatar shimfiɗa ba"], answer: 2, why: "Tafkunan da ba a shimfiɗa ba suna rasa ruwa mai yawa cikin ƙasa." },
      { objective: "O3", q: "Me yasa ya kamata a kewaye tafkunan gona da shinge?", options: ["Don kiyaye yara da dabbobi lafiya", "Don su ƙara zurfi", "Don hana ruwan sama", "Don dumama ruwa"], answer: 0, why: "Tafkuna a buɗe haɗarin nutsewa ne." },
      { objective: "O3", q: "A Kenya, wace hukuma ce ke ba da izinin amfani da ruwa, misali don rijiyoyin burtsatse?", options: ["Kenya Bureau of Standards", "Kenya Revenue Authority", "Kenya Power", "Water Resources Authority (WRA)"], answer: 3, why: "WRA ce ke kula da amfani da ruwa kuma tana ba da izini." },
      { objective: "O4", q: "Babban amfanin ban ruwan ɗigo shi ne:", options: ["Yana jika ganyayyaki", "Ruwa yana zuwa saiwoyi da ƙarancin asara", "Ba ya buƙatar ruwa", "Yana sa ciyawa ta girma da sauri"], answer: 1, why: "Ɗigo yana kai ruwa ga saiwoyi da ƙarancin ɓarna." },
      { objective: "O4", q: "FAO ta bayyana cewa kayan ɗigo na iyali sun dace da filaye masu kusan:", options: ["Murabba'in mita 1 zuwa 5", "Hekta 100", "Kowane girman gunduma gaba ɗaya", "Murabba'in mita 100 zuwa 500"], answer: 3, why: "Littafin FAO ya shafi ɗigo na iyali mai sauƙi don kusan murabba'in mita 100 zuwa 500." },
      { objective: "O4", q: "Tsiro ɗaya a layin ɗigonku ya bushe. Abin da ya fi yiwuwa ya jawo haka shi ne:", options: ["Ramin ɗigo da ya toshe", "Rana mai yawa a kan ganga", "Tsiron ya yi kore sosai", "Matatar ta yi tsabta sosai"], answer: 0, why: "Tsiron da ya bushe yawanci yana nufin ramin ɗigonsa ya toshe." },
      { objective: "O4", q: "Me yasa za a rufe layukan ɗigo da ciyawa (mulch)?", options: ["Don ɓoye su daga rana kawai", "Don ruwan ya ƙara zafi", "Don toshe ramukan ɗigo", "Don rage ƙafewar ruwa daga ƙasa"], answer: 3, why: "Ciyawar rufe ƙasa tana hana danshin ƙasa ƙafewa." },
      { objective: "O5", q: "Lokacin rana mafi kyau don ban ruwa yawanci shi ne:", options: ["Tsakar rana a cikin rana", "Sassafe ko yamma", "Tsakar dare kawai", "Kowane lokaci; babu bambanci"], answer: 1, why: "Ruwa kaɗan ne ke ɓacewa ga rana a lokutan sanyi na yini." },
      { objective: "O5", q: "An yi ruwan sama mai kyau jiya da dare. Jadawalinku ya ce ku yi ban ruwa yau. Me za ku yi?", options: ["Ku ninka ruwan sau biyu", "Ku yi ban ruwa kamar yadda aka tsara duk da haka", "Ku duba ƙasa; ku tsallake idan tana da danshi a zurfin saiwa", "Ku zubar da ruwan gonar"], answer: 2, why: "Ƙasa ce ke da magana ta ƙarshe; ku tsallake bayan ruwan sama mai kyau." },
      { objective: "O5", q: "A ƙasar yumɓu mai nauyi da ruwa ke cunkushewa a cikinta cikin sauƙi, kyakkyawar al'ada ita ce:", options: ["Ambaliyar gona da ruwa", "Ƙara ruwa", "Shuka a cikin kwari", "Kunyoyi masu tsayi ko tuddai da buɗaɗɗun magudanai"], answer: 3, why: "Kunyoyi masu tsayi da magudanai suna bar ƙarin ruwa ya fita." },
      { objective: "O5", q: "A cewar FAO, abin da ya saba jawo taruwar gishiri a ƙasar ban ruwa shi ne:", options: ["Rufe ƙasa da ciyawa", "Shuka irin wake", "Yawan ban ruwa da rashin magudanar ruwa", "Amfani da matata"], answer: 2, why: "Gishiri yana shigowa fiye da wanda ke fita idan ruwa ya yi yawa kuma babu magudanar ruwa mai kyau." },
      { objective: "O6", q: "Don auna girman famfo, mai sayarwa yana buƙatar sanin:", options: ["Launin da kuka fi so", "Ruwan da ake buƙata a rana, tsayin ɗagawa da nisa", "Kuɗinku kawai", "Lambar sirrin bankinku (PIN)"], answer: 1, why: "Buƙatar ruwa, tsayin ɗagawa da nisa ne ke tantance famfon da ya dace." },
      { objective: "O6", q: "Idan aka kwatanta da famfon fetur, famfon hasken rana yawanci:", options: ["Ya fi tsada a saya amma kuɗin amfani kaɗan ne sosai", "Ya fi araha a saya kuma ya fi tsada a yi amfani da shi", "Yana buƙatar dizal", "Yana aiki da dare kawai"], answer: 0, why: "Famfon hasken rana yana da farashin saye mafi tsada amma yana amfani da hasken rana kyauta." },
      { objective: "O6", q: "Wani mai sayarwa yana ba da famfon hasken rana na biya-yayin-amfani (pay-as-you-go). Me ya kamata ku fara yi?", options: ["Ku sa hannu nan take", "Ku ba shi lambar sirrinku (PIN)", "Ku karanta cikakken farashi, sharuɗɗa, garanti da hidima a rubuce", "Ku sayi biyu"], answer: 2, why: "Ku san cikakken kuɗin da taimakon da za ku samu kafin ku sa hannu." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      2,
      4,
      6,
      8,
      9,
      11,
      13,
      16,
      17
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe na tsarin ku sake duba shi.",
    criteria: [
      {
        name: "Amfanin gona da matakan ƙishirwa",
        objective: "O1",
        notYet: "Matakan da amfanin gonar ya fi jin ƙishirwa ba su nan ko ba daidai ba ne.",
        meets: "Ya ambaci amfanin gonar da matakan girmansa da ya fi jin ƙishirwa, da yadda za a duba ƙasa.",
        exceeds: "Ya rubuta ranar shuka don matakan ƙishirwa su kasance a kalanda."
      },
      {
        name: "Tushen ruwa da ajiya",
        objective: "O2",
        notYet: "Babu tushen ruwa, ko babu kimanta yawan ruwan da za a iya ajiyewa.",
        meets: "Tushen ruwa, kimanta ruwan rufi ko na gudu, da wurin ajiya mai murfi, kuma an duba duk wani izini.",
        exceeds: "Ya haɗa da hanyar gona kamar ramukan shuka don riƙe ruwan sama a gona."
      },
      {
        name: "Tsarin ban ruwa",
        objective: "O4",
        notYet: "Babu tsari, ko babu shirin hana toshewa.",
        meets: "Tsarin ɗigo ko wani tsari da ya dace da filin, tare da tsayin ganga, matata da wanke layuka.",
        exceeds: "Ya haɗa da ciyawar rufe layuka da jerin kayan gyara."
      },
      {
        name: "Jadawali da duba ƙasa",
        objective: "O5",
        notYet: "Babu jadawali, ko ban ruwa da tsakar rana ba tare da duba ƙasa ba.",
        meets: "Jadawalin mako-mako mai lokacin rana, ƙarin ruwa a matakan ƙishirwa, da duba ƙasa kafin ban ruwa.",
        exceeds: "Ya faɗi abin da za a yi bayan ruwan sama mai kyau da a makonni masu zafi da iska."
      },
      {
        name: "Cunkushewar ruwa da gishiri",
        objective: "O5",
        notYet: "Babu shiri don cunkushewar ruwa ko gishiri.",
        meets: "Alamomin da za a lura da su da matakai kamar magudanai, kunyoyi masu tsayi da rashin yawan ban ruwa.",
        exceeds: "Ya tsara gwajin ruwa da ƙasa idan ana amfani da ruwan rijiyar burtsatse a yankin da ba ruwa sosai."
      },
      {
        name: "Zaɓin famfo",
        objective: "O6",
        notYet: "Babu zaɓin famfo, ko babu dalili.",
        meets: "Irin famfo da dalilinsa, ruwan da ake buƙata a rana, tsayin ɗagawa da nisa.",
        exceeds: "Ya lissafa garanti, kayan gyara da hidimar da za a nema a rubuce."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka sami \"Ya cika\" ko \"Ya wuce\" a kowane layin rubric na tsarin ban ruwa",
      "Masu koyo da suka ce sun kafa ajiyar ruwan sama ko kayan ɗigo cikin kaka ɗaya (binciken biyo baya)",
      "Masu koyo da suka ce sun yi noman rani ko sun rage asarar amfani a lokacin fari",
      "Masu koyo da suka fara wani kwas na noma na Koach Learn cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Littafin rubutu, alƙalami da waya mai sauƙi mai na'urar lissafi",
      "Ƙaramin fili don yin atisayen duba danshin ƙasa",
      "Kayan ɗigo mai araha ko bokiti, idan akwai, don nunawa",
      "Kusan minti 60 gaba ɗaya, a gajerun zama, da ƙarin lokaci don rubuta tsarin ban ruwa"
    ],
    facilitatorNotes: [
      "A ƙungiyar manoma ko makarantar gona (field school): ku yi gwajin farko tare, sannan ku yi duba danshin ƙasa a fili na gaske.",
      "Ku lissafa kimanta tara ruwa daga rufi ɗaya tare, ta amfani da rufi na gaske a wurin.",
      "Ku kafa kayan ɗigo na bokiti ko ganga a matsayin ƙungiya, ku yi atisayen tsaftace matata da wanke layuka.",
      "Ku tunatar da masu koyo su duba izinin ruwa da hukumar ruwansu, kuma su rufe tafkuna da tankuna su kewaye su da shinge.",
      "Ku ba da maki ga tsarin ban ruwa da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
