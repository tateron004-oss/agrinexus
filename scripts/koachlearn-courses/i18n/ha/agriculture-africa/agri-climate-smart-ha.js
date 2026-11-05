"use strict";

// Koach Learn course, Hausa (ha) translation of agriculture-africa/agri-climate-smart.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const FAO_CSA = { name: "FAO (Hukumar Abinci da Noma ta Majalisar Ɗinkin Duniya): Climate-Smart Agriculture Sourcebook", url: "https://openknowledge.fao.org/3/a-i3484e.pdf" };
const KMD = { name: "Kenya Meteorological Department (hasashen yanayi na damina, sanarwar yanayi ga manoma)", url: "https://meteo.go.ke" };
const NIMET = { name: "Nigerian Meteorological Agency (NiMet, hukumar kula da yanayi ta Najeriya)", url: "https://nimet.gov.ng" };
const CGIAR_MAIZE = { name: "CGIAR: Masara mai jure fari (climate-smart maize)", url: "https://www.cgiar.org/innovations/climate-smart-maize/" };
const ICIPE_PUSHPULL = { name: "icipe: Fasahar push-pull tana dakatar da tsutsar fall armyworm", url: "https://www.icipe.org/news/icipe-push-pull-technology-halts-fall-armyworm-rampage" };
const FAO_EO = { name: "FAO GIEWS Earth Observation (alamomin fari da yanayin tsirrai)", url: "https://www.fao.org/giews/earthobservation/index.jsp" };

module.exports = {
  id: "agri-climate-smart-ha",
  lang: "ha",
  translationOf: "agri-climate-smart",
  category: "Agriculture (Africa)",
  name: "Noma Mai Jure Sauyin Yanayi",
  skills: "Bayanin noma mai jure sauyin yanayi, Karanta hasashen yanayi na hukuma, Gano haɗarin yanayi a gonarku, Zaɓar dabarun kiyaye ƙasa da ruwa, Zaɓar amfanin gona da irin da ke jurewa, Amfani da bishiyoyi, dabbobi da inshora don raba haɗari",
  outcome: "rubuta da fara shirin noma mai jure sauyin yanayi don gonarku: haɗarin yanayi da gonar take fuskanta a cikin shekara, abin da hasashen yanayi na hukuma na damina ya ce, da dabarun ƙasa, ruwa, amfanin gona, bishiyoyi, dabbobi da inshora da za ku yi amfani da su a wannan damina.",
  about: [
    "Wannan kwas na ƙananan manoma ne, matasa manoma, jami'an faɗakarwa kan aikin gona (extension officers) da shugabannin ƙungiyoyin manoma a Kenya, Najeriya da sauran Afirka. Suna ganin fari mai tsawo, ruwan sama mai ƙarfi, ƙarin zafi da sababbin ƙwari, kuma suna son hanyoyi na zahiri don su riƙe girbinsu da kuɗin shigarsu.",
    "Babi na 1 yana taimaka muku ku fahimci haɗarin yanayi a gonarku: ma'anar noma mai jure sauyin yanayi, yadda ake karanta hasashen yanayi na damina daga hukumar yanayi ta ƙasarku, da yadda ake zana kalandar haɗarin yanayi mai sauƙi. Babi na 2 yana magana kan dabaru: riƙe ƙasa da ruwa a gona, zaɓar amfanin gona da irin da ke jurewa, da amfani da bishiyoyi, dabbobi da inshora don raba haɗari.",
    "Kowace gona daban take. Ku yi amfani da wannan kwas tare da shawarar jami'in faɗakarwa, shagon magungunan gona da dabbobi (agrovet) ko cibiyar bincike, kuma ku fara gwada sabuwar dabara a ƙaramin fili. Kowane darasi yana ɗaukar kusan minti biyar, kuma yana ƙarewa da aiki a gonarku. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas."
  ],
  finalTask: "Ku rubuta shirin noma mai jure sauyin yanayi mai shafi ɗaya don gonarku (ko gona ta misali kamar eka 2 na masara da wake a Machakos, ko eka 3 na dawa da wake (cowpea) a Kano): kalandar haɗarin yanayi wata-wata, abin da hasashen yanayi na hukuma na wannan damina ya ce da ranar da kuka karanta shi, da aƙalla dabaru biyar da za ku yi amfani da su (aƙalla ɗaya don ƙasa da ruwa, ɗaya don amfanin gona da iri, ɗaya don raba haɗari), tare da lokacin da za ku fara kowace da yadda za ku san ko ta yi aiki.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Ƙananan manoma, matasa manoma, jami'an faɗakarwa kan aikin gona da shugabannin ƙungiyoyin manoma a Kenya, Najeriya da sauran Afirka da ke fuskantar fari mai tsawo, ruwan sama mai ƙarfi, ƙarin zafi da sababbin ƙwari.",
    startingPoint: "Sun san ƙasarsu, amfanin gonarsu da lokutan damina sosai, kuma da yawa sun riga sun yi amfani da wasu dabarun noma mai jure sauyin yanayi ba tare da sanin sunan ba. Kaɗan ne ke karanta hasashen yanayi na hukuma, ke zana kalandar haɗarin yanayi, ko ke tsara dabaru don raba haɗari a cikin damina.",
    gap: "Sauyin ruwan sama da sababbin ƙwari suna sa girbi da kuɗin shiga su rasa tabbas. Manoma suna buƙatar karanta hasashen yanayi na hukuma, ganin lokutan haɗari a shekararsu, da zaɓar dabarun ƙasa, ruwa, amfanin gona, bishiyoyi, dabbobi da inshora da suka dace da gonarsu, suna gwada su kafin su yi amfani da su ko'ina.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; da yawa daga cikin masu koyo Ingilishi ba harshensu na farko ba ne",
      "Na'urori: waya mai sauƙi, rediyo ko takardar sanarwar faɗakarwa; wayar zamani tana taimakawa amma ba dole ba ce",
      "Kuɗi da aiki: a fara da dabaru marasa tsada da aka gwada a ƙaramin fili",
      "Hasashen yanayi, irin shuka, inshora da hukumomin sa ido sun bambanta daga ƙasa zuwa ƙasa: masu koyo su duba KMD, NiMet ko hukumar ƙasarsu, jami'an faɗakarwa da masu sayarwa masu lasisi",
      "Lokaci: masu koyo suna yin darussa a tsakanin aikin gona da lokutan damina"
    ],
    prerequisites: "Babu."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku dabarun da ake amfani da su a gonarku ko a ƙauyenku", action: "bayyana manufofi uku na noma mai jure sauyin yanayi da tantance ko kowace dabara ta dace da shi", standard: "kuna faɗin wace manufa kowace dabara take taimakawa" },
    { id: "O2", condition: "Kafin lokacin damina", action: "nemo hasashen yanayi na damina daga hukumar yanayi ta ƙasarku da rubuta canje-canje biyu da yake nufi ga shirinku", standard: "kuna rubuta abin da ya ce, ranar da kuka karanta shi, da cewa yana ba da yiwuwa ne, ba alƙawari ba" },
    { id: "O3", condition: "Don gonarku ko gona ta misali", action: "zana kalandar haɗarin yanayi wata-wata da zagaye lokutan haɗari", standard: "tare da lokutan damina, ayyukan gona, haɗari da aƙalla lokutan haɗari biyu da aka yi wa alama" },
    { id: "O4", condition: "Idan kun san gangaren gonarku da yadda ruwa ke gudana a cikinta", action: "zaɓar dabarun kiyaye ƙasa da ruwa da suka dace da tsara ƙaramin gwaji", standard: "kuna kwatanta wurin gwajin da hanyarku ta yau da kullum" },
    { id: "O5", condition: "Idan kun san babban amfanin gonarku da haɗarin yankinku", action: "zaɓar irin shuka mai jure fari ko mai saurin nuna da aka tabbatar (certified), amfanin gona mai jure fari, da dabarar shuka da ke rage haɗari", standard: "kuna sayen iri daga dillalai masu rajista kaɗai" },
    { id: "O6", condition: "Ban da babban amfanin gonarku", action: "tsara aƙalla hanya ɗaya ta raba haɗari da bishiyoyi, abinci da ruwan dabbobi, ko inshora", standard: "kuna duba sharaɗin biyan inshorar da cewa kamfanin inshorar yana da lasisi" }
  ],
  chapters: [
    {
      name: "Babi na 1: Fahimtar haɗarin yanayi a gonarku",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ma'anar noma mai jure sauyin yanayi",
          minutes: 5,
          goal: "Bayyana manufofi uku na noma mai jure sauyin yanayi, da tantance ko wata dabara ta dace da shi.",
          text: [
            "Noma mai jure sauyin yanayi (climate-smart agriculture, CSA) hanya ce ta zaɓar dabarun noma tare da tunanin sauyin yanayi. FAO ta bayyana manufofi uku: ƙara yawan amfani da kuɗin shiga ta hanya mai ɗorewa; taimaka wa gonaki da iyalai su saba da sauyin yanayi su kuma ƙara juriya ga bala'in yanayi; da rage ko kawar da hayaƙin da ke ɗumama duniya (greenhouse gas) inda zai yiwu.",
            "FAO ta jaddada cewa ba dole ba ne dabara ta cika dukkan uku. Ga yawancin ƙananan manoma, abinci da kuɗin shiga su ne farko; rage hayaƙi ƙari ne kawai. Dabara tana da jure sauyin yanayi idan ta dace da gonarku kuma ta sa gonar ta ƙara amfani da ƙarin juriya.",
            "Misalai da manoma a Afirka suka riga suka yi amfani da su: rufe ƙasa da ciyawa ko ɓuntun shuka (mulch) da rage huɗa don ƙasa ta riƙe danshi, ramukan shuka da tafkunan ruwa, irin da ke jure fari ko masu saurin nuna, shuka masara tare da wake, push-pull don tsutsar kara (stemborer) da fall armyworm, bishiyoyi a gona, ingantaccen abincin dabbobi, da inshorar amfanin gona ko ta dabbobi."
          ],
          words: [["Noma mai jure sauyin yanayi (CSA)", "noma da ke ƙara yawan amfani, ke taimaka wa gonaki su saba da sauyin yanayi, kuma ke rage hayaƙi inda zai yiwu."], ["Juriya (resilience)", "ƙarfin gona da iyali su jure bala'i, kamar fari, su kuma farfaɗo da sauri."], ["Sabawa (adaptation)", "canja yadda kuke noma don ku jure sauyin yanayi."]],
          slides: [
            { title: "Manufofi uku (FAO)", bullets: ["Ƙara yawan amfani da kuɗin shiga", "Sabawa da ƙara juriya", "Rage hayaƙi inda zai yiwu"] },
            { title: "Ba dole dukkan uku a lokaci ɗaya ba", bullets: ["Abinci da kuɗin shiga su ne farko", "Rage hayaƙi ƙari ne kawai", "Ta dace da gonarku + ƙarin juriya = mai jure sauyin yanayi"] },
            { title: "Misalai a Afirka", bullets: ["Rufe ƙasa (mulch), rage huɗa, ramukan shuka, tafkunan ruwa", "Irin da ke jure fari, shuka iri biyu tare, push-pull", "Bishiyoyi a gona, abincin dabbobi, inshora"] }
          ],
          sources: [FAO_CSA],
          tryIt: "Ku rubuta dabaru uku da ake amfani da su a gonarku ko a ƙauyenku. Ga kowace, ku rubuta wace daga cikin manufofi uku na CSA take taimakawa (yawan amfani, juriya, hayaƙi).",
          youCanNow: "bayyana manufofi uku na noma mai jure sauyin yanayi da tantance ko wata dabara ta dace da shi.",
          quickCheck: [
            { objective: "O1", q: "Wace ce dabarar noma mai jure sauyin yanayi da manoma a Afirka suka riga suka yi amfani da ita?", options: ["Rufe ƙasa da ciyawa (mulch) don ta riƙe danshi", "Ƙona dukkan ɓuntun shuka", "Shuka amfanin gona iri ɗaya kawai kowace shekara", "Huɗa gonar sau da yawa"], answer: 0, why: "Rufe ƙasa yana sa ta riƙe danshi kuma ta kasance a rufe, yana taimaka wa yawan amfani da juriya." },
            { objective: "O1", q: "Wata dabara tana ƙara girbinku kuma tana taimaka muku ku tsira daga fari, amma ba ta rage hayaƙi. Shin tana da jure sauyin yanayi?", options: ["A'a; dole ta cika dukkan uku", "Ee, idan ta dace da gonarku kuma ta ƙara yawan amfani da juriya", "Sai dai idan gwamnati ta amince da ita", "Sai dai idan sabuwa ce"], answer: 1, why: "FAO ta ce ba dole ba ne dabara ta cika dukkan manufofi uku; ga ƙananan manoma, abinci da kuɗin shiga su ne farko." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Karanta hasashen yanayi na hukuma na damina",
          minutes: 5,
          goal: "Nemo hasashen yanayi na damina daga hukumar yanayi ta ƙasarku ku yi amfani da shi don tsara damina.",
          text: [
            "Kafin kowace damina, hukumomin yanayi na ƙasa suna fitar da hasashen yanayi na damina: ko ana sa ran ruwan sama ya fi yadda aka saba, ya yi kusa da yadda aka saba, ko ya gaza yadda aka saba, da lokacin da zai iya farawa da ƙarewa. A Kenya, Kenya Meteorological Department (KMD) tana fitar da hasashen damina da sanarwar yanayi ga manoma. A Najeriya, Nigerian Meteorological Agency (NiMet) tana fitar da hasashen yanayi na damina. Sauran ƙasashe suna da nasu hukumomin; ana kuma yaɗa hasashe da yawa a rediyo da ta jami'an faɗakarwa.",
            "Hasashen damina yana ba da yiwuwa ne, ba alƙawari ba. \"Ƙasa da yadda aka saba\" yana nufin akwai yiwuwa mafi girma na samun ruwa ƙasa da yadda aka saba a yankinku, ba wai lallai za a yi fari ba. Ku yi amfani da shi don ku daidaita shirinku, ba don ku saka komai a kan abu ɗaya ba: misali ku zaɓi iri mai saurin nuna, ku shuka a ranar da ta dace, ku tsara tara ruwan sama, ko ku rage fadin amfanin gona mai shan ruwa sosai.",
            "Ku yi amfani da hasashe na ɗan gajeren lokaci (kwanaki kaɗan masu zuwa) don shawarwarin yau da kullum, kamar lokacin shuka bayan ruwa ya fara, lokacin feshi ko zuba taki na biyu (topdressing), da lokacin girbi da busarwa."
          ],
          steps: ["Ku nemo shafin intanet na hukumar yanayi ta ƙasarku, shirinta a rediyo ko takardar sanarwar faɗakarwa.", "Ku karanta hasashen damina na gundumarku ko jiharku.", "Ku rubuta: fiye, kusa ko ƙasa da yadda aka saba; lokacin da ake sa ran ruwa zai fara da ƙarewa.", "Ku rubuta canje-canje biyu da za ku yi saboda shi.", "Ku duba hasashe na ɗan gajeren lokaci don ranakun shuka, zuba taki na biyu da girbi."],
          words: [["Hasashen yanayi na damina (seasonal forecast)", "hasashen ruwan sama da zafi na damina mai zuwa, wanda ake bayarwa a matsayin yiwuwa."], ["Farawar damina (onset)", "farkon lokacin ruwan sama."], ["Sanarwar yanayi ga manoma (agrometeorological bulletin)", "rahoton yanayi da aka rubuta don manoma, wanda ke haɗa yanayi da amfanin gona."]],
          slides: [
            { title: "Hasashen yanayi na hukuma", bullets: ["Kenya: Kenya Meteorological Department (KMD)", "Najeriya: NiMet", "Har ila yau a rediyo da daga jami'an faɗakarwa"] },
            { title: "Yiwuwa ne, ba alƙawari ba", bullets: ["Fiye, kusa ko ƙasa da yadda aka saba", "Lokacin da ake sa ran ruwa zai fara da ƙarewa", "Ku daidaita; kada ku saka komai a kan abu ɗaya"] },
            { title: "Ku yi amfani da shi", bullets: ["Iri mai saurin nuna idan ruwa zai yi ƙaranci", "Ku tsara tara ruwan sama", "Hasashe na ɗan gajeren lokaci don ayyukan yau da kullum"] }
          ],
          sources: [KMD, NIMET],
          tryIt: "Ku nemo sabon hasashen damina na yankinku daga KMD, NiMet ko hukumar yanayi ta ƙasarku. Ku rubuta abin da ya ce, ranar da kuka karanta shi, da canje-canje biyu da za ku yi a shirinku.",
          youCanNow: "nemo hasashen yanayi na hukuma na damina da amfani da shi don daidaita shirin daminarku.",
          quickCheck: [
            { objective: "O2", q: "Me hasashen yanayi na damina yake faɗa muku?", options: ["Ainihin ruwan da za a yi kowace rana", "Farashin masara", "Ko ruwan sama zai fi, ya yi kusa, ko ya gaza yadda aka saba", "Irin da za ku saya"], answer: 2, why: "Hasashen damina yana ba da yiwuwar ruwan sama ya fi, ya yi kusa ko ya gaza yadda aka saba, da lokacin da zai iya farawa da ƙarewa." },
            { objective: "O2", q: "Hasashen ya ce ruwan sama zai iya ɗauke da wuri. Wane canji ne mai hankali?", options: ["Shuka iri mai daɗewa kafin ya nuna", "Shuka da jinkiri sosai fiye da yadda aka saba", "Kada ku yi komai", "Zaɓar iri mai saurin nuna"], answer: 3, why: "Iri mai saurin nuna zai iya kammalawa kafin ruwan sama ya ƙare." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Zana kalandar haɗarin yanayi ta gonarku",
          minutes: 5,
          goal: "Zana kalanda wata-wata ta haɗarin yanayi da gonarku take fuskanta.",
          text: [
            "Kalandar haɗarin yanayi tana sa amfanin gonarku da dabbobinku kusa da haɗarin kowane wata. Ku zana ginshiƙai 12 na watanni. A layin farko, ku rubuta lokutanku (babbar damina, ƙaramar damina, rani, ko damina da rani a yawancin Najeriya). A ƙasa, ku rubuta abin da kuke yi kowane wata: shirya ƙasa, shuka, cire ciyawa, zuba taki na biyu, girbi, busarwa, sayarwa, da lokacin da dabbobi suka fi buƙatar abinci da ruwa.",
            "Sannan ku yi alama ga haɗari: jinkirin farawar damina ko ɗaukewar ruwa da wuri, tazarar fari a tsakiyar damina, guguwa mai ƙarfi da ambaliya, zafi a lokacin fure, ƙwari da cututtukan da ke bin yanayi (fall armyworm, ƙwarin aphid, cututtukan fungi a lokacin ruwa mai yawa), da asarar bayan girbi idan an ajiye hatsi da danshi.",
            "Ku nemi lokutan haɗari: watannin da muhimmin aiki ya haɗu da babban haɗari, kamar masara tana fure a watan da tazarar fari ke yawan faruwa. A nan ne dabarun jure sauyin yanayi suka fi taimakawa. Ku tambayi tsofaffin manoma yadda yanayin ya canja a cikin shekaru."
          ],
          steps: ["Ku zana ginshiƙai 12 na watanni; ku rubuta lokutan damina da rani.", "Ku rubuta ayyukan gonarku da buƙatun dabbobi wata-wata.", "Ku yi alama ga haɗarin yanayi da ƙwarin da ke bin yanayi.", "Ku zagaye lokutan haɗari inda muhimmin aiki ya haɗu da babban haɗari.", "Ku tambayi tsofaffin manoma abin da ya canja."],
          words: [["Tazarar fari (dry spell)", "kwanaki ko makonni ba tare da ruwan sama mai amfani ba a lokacin damina."], ["Lokacin haɗari (danger point)", "lokacin da muhimmin aikin gona ya haɗu da babban haɗarin yanayi."]],
          slides: [
            { title: "Ginshiƙai goma sha biyu", bullets: ["Lokutan damina da rani a sama", "Ayyukan gona da buƙatun dabbobi wata-wata"] },
            { title: "Ku yi alama ga haɗari", bullets: ["Jinkirin farawa, ɗaukewa da wuri, tazarar fari", "Guguwa, ambaliya, zafi a lokacin fure", "Ƙwarin da ke bin yanayi, ajiya da danshi"] },
            { title: "Ku nemo lokutan haɗari", bullets: ["Muhimmin aiki ya haɗu da babban haɗari", "Inda dabarun CSA suka fi taimakawa", "Ku tambayi tsofaffin manoma abin da ya canja"] }
          ],
          sources: [FAO_EO],
          tryIt: "Ku zana kalandar haɗarin yanayi ta gonarku a takarda ko a tebur na waya (spreadsheet). Ku zagaye aƙalla lokutan haɗari biyu.",
          youCanNow: "zana kalandar haɗarin yanayi ta gonarku da gano lokutan haɗarinta.",
          quickCheck: [
            { objective: "O3", q: "Me ake rubutawa a layukan da ke ƙarƙashin watanni a kalandar haɗarin yanayi?", options: ["Ayyukan gonarku, buƙatun dabbobi da haɗari", "Farashin kasuwa kawai", "Ranakun haihuwar iyalinku", "Jimillar ruwan sama kawai"], answer: 0, why: "Kalandar tana sa ayyukan gona da buƙatun dabbobi kusa da haɗarin kowane wata." },
            { objective: "O3", q: "Kuna ajiye masara a watan da ake yawan samun ruwa. Wace alama za ku yi?", options: ["Babu; ajiya tana da aminci", "Haɗarin asarar bayan girbi saboda hatsi mai danshi", "Haɗarin fari", "Aikin shuka"], answer: 1, why: "Hatsin da aka ajiye da danshi a watannin ruwa haɗarin asarar bayan girbi ne." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Fahimtar haɗarin yanayi a gonarku",
        questions: [
          { objective: "O1", q: "Wace ce ɗaya daga cikin manufofi uku na FAO na noma mai jure sauyin yanayi?", options: ["Amfani da sinadarai gwargwadon iko", "Taimaka wa gonaki su saba su kuma ƙara juriya", "Shuka amfanin gona iri ɗaya kawai", "Sare dukkan bishiyoyi"], answer: 1, why: "CSA tana nufin yawan amfani, sabawa da juriya, da rage hayaƙi inda zai yiwu." },
          { objective: "O1", q: "Shin dole ne dabarar jure sauyin yanayi ta cika dukkan manufofi uku a lokaci ɗaya?", options: ["Ee, koyaushe", "A Kenya kawai", "A'a; ta dace da gonar kuma ta ƙara yawan amfani da juriya", "A manyan gonaki kawai"], answer: 2, why: "FAO ta ce ba dole dabaru su cika kowace manufa ba; abinci da kuɗin shiga su ne farko." },
          { objective: "O2", q: "Hasashen damina ya ce \"ruwan sama ƙasa da yadda aka saba\". Ma'anarsa:", options: ["Akwai yiwuwa mafi girma na samun ruwa ƙasa da yadda aka saba", "Lallai ba za a yi ruwa ba", "Lallai za a yi ambaliya", "Babu wani abu mai amfani"], answer: 0, why: "Hasashen damina yana ba da yiwuwa ne, ba tabbaci ba." },
          { objective: "O2", q: "A ina manomi a Najeriya zai nemi hasashen yanayi na hukuma na damina?", options: ["Jita-jita a kasuwa", "Kalandar bara", "Baƙo a kafofin sada zumunta", "NiMet ko hasashenta da jami'an faɗakarwa da rediyo ke yaɗawa"], answer: 3, why: "NiMet ita ce hukumar yanayi ta hukuma ta Najeriya." },
          { objective: "O3", q: "Lokacin haɗari a kalandar haɗarin yanayi shi ne:", options: ["Lokacin da muhimmin aikin gona ya haɗu da babban haɗarin yanayi", "Wurin sayar da amfanin gona", "Wani nau'in ƙwaro", "Watan da babu aikin gona"], answer: 0, why: "Lokutan haɗari suna nuna inda dabaru suka fi taimakawa." }
        ]
      }
    },
    {
      name: "Babi na 2: Dabarun noma mai jure sauyin yanayi",
      lessons: [
        {
          objectives: ["O4"],
          title: "Riƙe ƙasa da ruwa a gona",
          minutes: 6,
          goal: "Zaɓar dabarun kiyaye ƙasa da ruwa da suka dace da gonarku da gangarenta.",
          text: [
            "Ƙasa mai lafiya tana riƙe ƙarin ruwa kuma tana ciyar da amfanin gona a lokacin tazarar fari. Ƙa'idodi uku na noman kiyaye ƙasa (conservation agriculture) suna taimakawa: a taɓa ƙasa kaɗan gwargwadon iko (rage huɗa), a riƙa rufe ta (ɓuntun shuka ko ciyawa maimakon ƙonawa), da a riƙa juya amfanin gona ko a shuka iri biyu tare (misali masara da wake, wake (cowpea) ko pigeon pea). Ku ƙara taki na dabbobi ko takin gargajiya (compost) don gina ɗanyen kayan ƙasa.",
            "Ku kama ruwan sama inda ya faɗi. Ramukan shuka (ana kiransu zai a yankin Sahel) suna tara ruwa da taki a kusa da kowace shuka. Kunyoyi masu ɗaurin ruwa (tied ridges) da shingen ƙasa a kan layin gangare (contour bunds) suna hana ruwa gudu. A kan gangare, matakan ƙasa (terraces) kamar fanya juu a Kenya, layukan ciyawa da bishiyoyi a kan layin gangare suna hana zaizayar ƙasa. Tafkunan ruwa da tara ruwan rufin gida suna ajiye ruwa don dabbobi, renon shuke-shuke da lambun gida.",
            "Ku fara da ƙarami: ku gwada dabara a wani ɓangare na gona, ku kwatanta shi da hanyarku ta yau da kullum, ku riƙe abin da ya yi aiki. Ku tambayi jami'in faɗakarwa tsare-tsaren yankinku da yawan aikin da suke buƙata."
          ],
          steps: ["Ku daina ƙona ɓuntun shuka; ku bar shi ya rufe ƙasa.", "Ku rage huɗa inda za a iya sarrafa ciyawa.", "Ku juya amfanin gona ko ku shuka tare da irin wake.", "Ku kama ruwan sama: ramukan shuka, kunyoyi masu ɗaurin ruwa, shingen ƙasa a layin gangare.", "A kan gangare: matakan ƙasa, layukan ciyawa, bishiyoyi a layin gangare.", "Ku fara gwadawa a ƙaramin fili ku kwatanta."],
          words: [["Noman kiyaye ƙasa (conservation agriculture)", "noma da ake taɓa ƙasa kaɗan, ake rufe ta koyaushe, kuma ake juya amfanin gona."], ["Rufin ƙasa (mulch)", "ɓuntun shuka, ciyawa ko ganye da aka shimfiɗa a kan ƙasa don ta riƙe danshi ta kuma yi sanyi."], ["Ramukan zai / ramukan shuka", "ƙananan ramuka da ke tara ruwan sama da taki a kusa da shuke-shuke."], ["Fanya juu", "matakin ƙasa na Kenya da ake yi ta hanyar jefa ƙasa sama daga rami don ta zama shinge."]],
          slides: [
            { title: "Ƙasa mai lafiya tana riƙe ruwa", bullets: ["Rage huɗa", "Ku rufe ƙasa: mulch, kada ku ƙona", "Ku juya amfanin gona ko ku shuka tare da irin wake"] },
            { title: "Ku kama ruwan sama inda ya faɗi", bullets: ["Ramukan shuka (zai)", "Kunyoyi masu ɗaurin ruwa da shingen ƙasa a layin gangare", "Tafkunan ruwa da tara ruwan rufin gida"] },
            { title: "Ku kare gangare", bullets: ["Matakan ƙasa kamar fanya juu", "Layukan ciyawa da bishiyoyi a layin gangare"] },
            { title: "Ku fara da ƙarami", bullets: ["Ku gwada a ɓangaren gona", "Ku kwatanta da hanyarku ta yau da kullum", "Ku tambayi jami'in faɗakarwa tsare-tsaren yankinku"] }
          ],
          sources: [FAO_CSA],
          tryIt: "Ku zagaya gonarku bayan ruwan sama ko ku dube ta yanzu. Ku yi alama inda ruwa ke gudu, inda ƙasa ke zaizayewa, da inda ruwa ke tsayawa. Ku zaɓi dabara ɗaya ta ƙasa ko ruwa don wuri ɗaya, ku rubuta yadda za ku gwada ta.",
          youCanNow: "zaɓa da gwada dabarun kiyaye ƙasa da ruwa da ke riƙe danshi da ƙasa a gonarku.",
          quickCheck: [
            { objective: "O4", q: "Mene ne amfanin kunyoyi masu ɗaurin ruwa da shingen ƙasa a layin gangare?", options: ["Ajiye hatsi", "Ciyar da dabbobi", "Hana ruwa gudu daga gona", "Alamar iyakar gona"], answer: 2, why: "Suna riƙe ruwan sama a gona don ya shiga ƙasa maimakon ya gudu." },
            { objective: "O4", q: "Ruwa yana gudu da ƙarfi a gonarku mai gangare bayan ruwan sama kuma yana ɗauke ƙasa. Me za ku zaɓa?", options: ["Huɗa sama da ƙasa a kan gangaren", "Ƙona ɓuntun shuka", "Barin ƙasa a buɗe", "Layukan ciyawa ko matakan ƙasa a layin gangare"], answer: 3, why: "Matakan ƙasa da layukan ciyawa a layin gangare suna hana zaizayar ƙasa a gangare." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Zaɓar amfanin gona da irin da ke jurewa",
          minutes: 5,
          goal: "Zaɓar amfanin gona, irin shuka da dabarun shuka da ke rage haɗarin yanayi.",
          text: [
            "Irin shuka yana da muhimmanci. Cibiyar binciken masara ta CGIAR, CIMMYT, da abokan aikinta sun samar da irin masara mai jure fari da aka fitar a ƙasashe da yawa a Afirka kudu da Sahara; CGIAR ta ce za su iya bayar da amfani fiye da irin da aka saba a lokacin fari. Wake da masara masu saurin nuna suna tsira daga farin ƙarshen damina. Ku tambayi agrovet ko jami'in faɗakarwa waɗanne irin da aka tabbatar (certified) suka dace da yankinku, kuma ku sayi iri da aka tabbatar daga dillalai masu rajista.",
            "Amfanin gona ma yana da muhimmanci. Dawa, gero, rogo, wake (cowpea) da pigeon pea suna jure bushewa fiye da masara a yankuna da yawa. Shuka amfanin gona fiye da ɗaya, da shuka iri biyu tare, suna raba haɗari: idan ɗaya ya lalace, wani zai iya yin nasara.",
            "Ƙwari suna canjawa tare da yanayi. Push-pull, wadda icipe da abokan aikinta suka ƙirƙira, tana shuka desmodium a cikin masara ko dawa, kuma tana kewaye gonar da ciyawar Napier ko Brachiaria; icipe ta ce tana rage ɓarnar tsutsar kara (stemborer), kuduji (striga) da fall armyworm sosai. Ku raba ranakun shuka a ƙananan filaye, kuma ku shuka da sauri lokacin da damina ta fara da gaske."
          ],
          steps: ["Ku tambayi jami'in faɗakarwa ko agrovet irin da aka tabbatar masu jure fari ko masu saurin nuna don yankinku.", "Ku sayi iri da aka tabbatar daga dillali mai rajista.", "Ku ƙara amfanin gona mai jure fari (dawa, rogo, wake (cowpea), pigeon pea).", "Ku shuka iri biyu tare don raba haɗari; ku yi la'akari da push-pull don masara ko dawa.", "Ku shuka da sauri lokacin da damina ta fara da gaske; ku raba ƙananan filaye."],
          words: [["Iri mai jure fari", "irin amfanin gona da aka samar don ya bayar da amfani fiye da wasu idan ruwa ya yi ƙaranci."], ["Mai saurin nuna", "yana shirya don girbi da wuri, don haka zai iya tsira daga farin ƙarshen damina."], ["Iri da aka tabbatar (certified seed)", "irin da hukumar iri ta hukuma ta duba tsarkinsa da ingancinsa."], ["Push-pull", "tsari inda desmodium ke korar ƙwari daga masara ko dawa, ciyawar da ke kewaye kuma tana jan su waje."]],
          slides: [
            { title: "Irin shuka", bullets: ["Masara mai jure fari (CGIAR/CIMMYT)", "Masara da wake masu saurin nuna", "Iri da aka tabbatar daga dillalai masu rajista"] },
            { title: "Amfanin gona", bullets: ["Dawa, gero, rogo, wake (cowpea), pigeon pea", "Amfanin gona fiye da ɗaya yana raba haɗari"] },
            { title: "Ƙwari da lokaci", bullets: ["Push-pull: desmodium + ciyawar kewaye (icipe)", "Ku shuka da sauri lokacin da damina ta fara da gaske", "Ku raba ƙananan filaye"] }
          ],
          sources: [CGIAR_MAIZE, ICIPE_PUSHPULL],
          tryIt: "Don babban amfanin gonarku, ku nemo iri ɗaya da aka tabbatar mai jure fari ko mai saurin nuna da ake sayarwa kusa da ku (ku tambayi agrovet ko jami'in faɗakarwa), kuma ku zaɓi amfanin gona ɗaya mai jure fari da za ku ƙara. Ku rubuta inda za ku shuka kowanne.",
          youCanNow: "zaɓar amfanin gona, irin shuka da dabarun shuka da ke rage haɗarin yanayi a gonarku.",
          quickCheck: [
            { objective: "O5", q: "Me yasa iri masu saurin nuna ke taimakawa a wurare masu bushewa?", options: ["Za su iya tsira daga farin ƙarshen damina", "Suna buƙatar ƙarin ruwa", "Ƙwari ba sa kama su", "Ba sa buƙatar iri"], answer: 0, why: "Amfanin gona mai saurin nuna yana kammalawa kafin farin ƙarshen damina ya zo." },
            { objective: "O5", q: "Masararku tana yawan lalacewa a shekarun fari. Me zai ƙara muku kariya?", options: ["Shuka ƙarin masara kawai", "Ƙara amfanin gona mai jure fari kamar dawa ko wake (cowpea)", "Shuka a bayan kowa", "Sayen iri da ba a tabbatar ba a kasuwa"], answer: 1, why: "Shuka amfanin gona fiye da ɗaya, har da mai jure fari, yana raba haɗari." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Bishiyoyi, dabbobi da inshora: raba haɗari",
          minutes: 6,
          goal: "Ƙara aƙalla hanya ɗaya ta raba haɗari ban da babban amfanin gonarku, sannan ku rubuta shirinku.",
          text: [
            "Bishiyoyi a gona (agroforestry) suna ba da inuwa, kariya daga iska, abincin dabbobi, 'ya'yan itace, itacen girki da katako, suna kare ƙasa, kuma suna ajiye carbon. Bishiyoyin 'ya'yan itace kamar mangwaro da avocado, bishiyoyin da ke ƙara nitrogen a ƙasa, da bishiyoyin iyakar gona duk za su iya ƙara kuɗin shiga da ba ya dogara da ruwan sama na damina ɗaya.",
            "Dabbobi za su iya zama kariya, amma su ma suna wahala a lokacin fari. Ku shuka ku ajiye abincin dabbobi (Napier, Brachiaria, ɓuntun shuka, busasshiyar ciyawa), ku kare wuraren ruwa, ku zaɓi nau'o'in dabbobi masu jurewa, kuma ku sa yawan dabbobinku ya dace da abincin da za ku iya shukawa ko saya. Ƙananan dabbobi kamar awaki da kaji suna iya zama mafi sauƙin kiwo a shekarun fari.",
            "Inshora tana mayar da wani ɓangare na haɗari ga kamfanin inshora. Inshorar ma'aunin yanayi (weather-index) da inshorar girbin yanki (area-yield) suna biya idan ruwan sama ko girbin yanki ya faɗi ƙasa da wani matakin da aka ƙayyade, kuma ana sayar da su a wasu wurare ta ƙungiyoyin haɗin gwiwa, masu sayar da kayan gona ko kuɗin waya (mobile money). Ku tambayi ƙungiyarku ko jami'in faɗakarwa, ku karanta abin da ke sa a biya, kuma ku duba cewa hukumar sa ido kan inshora ta ba wa kamfanin lasisi (a Kenya Insurance Regulatory Authority, a Najeriya NAICOM). Ƙungiyoyin tara kuɗi da samun kuɗin shiga ta hanyoyi daban-daban ma suna raba haɗari."
          ],
          steps: ["Ku zaɓi bishiyoyin da suka dace da gonarku: na 'ya'yan itace, na abincin dabbobi, na iyaka ko masu ƙara nitrogen.", "Ku tsara abinci da ruwan dabbobi a cikin rani.", "Ku sa yawan dabbobi ya dace da abincin da za ku iya shukawa ko saya.", "Ku tambayi game da inshorar ma'aunin yanayi ko ta girbin yanki; ku karanta sharaɗin biya; ku duba cewa kamfanin yana da lasisi.", "Ku rubuta shirinku na noma mai jure sauyin yanayi."],
          words: [["Noman bishiyoyi tare da amfanin gona (agroforestry)", "shuka bishiyoyi tare da amfanin gona ko dabbobi a ƙasa ɗaya."], ["Abincin dabbobi (fodder)", "tsirran da ake shukawa ko ajiyewa don ciyar da dabbobi."], ["Inshorar ma'aunin yanayi (weather-index insurance)", "inshora da ke biya idan wani ma'aunin yanayi, kamar ruwan sama, ya faɗi ƙasa da wani matakin da aka ƙayyade."], ["Sharaɗin biya (payout trigger)", "yanayin da ke sa kamfanin inshora ya biya."]],
          slides: [
            { title: "Bishiyoyi a gona", bullets: ["Inuwa, kariya daga iska, abincin dabbobi, 'ya'yan itace, itacen girki", "Suna kare ƙasa, suna ajiye carbon", "Kuɗin shiga fiye da na damina ɗaya"] },
            { title: "Dabbobi a matsayin kariya", bullets: ["Ku shuka ku ajiye abincin dabbobi", "Ku kare ruwa, ku zaɓi nau'o'i masu jurewa", "Yawan dabbobi ya dace da abinci"] },
            { title: "Inshora da tara kuɗi", bullets: ["Inshorar ma'aunin yanayi da ta girbin yanki", "Ku karanta sharaɗin biya", "Ku duba cewa kamfanin inshorar yana da lasisi"] }
          ],
          sources: [FAO_CSA],
          tryIt: "Aikin ƙarshe: ku rubuta shirinku na noma mai jure sauyin yanayi mai shafi ɗaya: kalandar haɗari, hasashen damina na wannan shekara da ranar da kuka karanta shi, da aƙalla dabaru biyar (ƙasa da ruwa, amfanin gona da iri, raba haɗari), tare da ranakun farawa da yadda za ku auna nasara.",
          youCanNow: "amfani da bishiyoyi, dabbobi, inshora da tara kuɗi don raba haɗarin yanayi, da rubuta cikakken shirin noma mai jure sauyin yanayi don gonarku.",
          quickCheck: [
            { objective: "O6", q: "Mene ne agroforestry?", options: ["Sare bishiyoyi don gawayi", "Shuka bishiyoyi kawai", "Shuka bishiyoyi tare da amfanin gona ko dabbobi", "Sayen katako"], answer: 2, why: "Agroforestry tana nufin bishiyoyi a gona tare da amfanin gona ko dabbobi." },
            { objective: "O6", q: "Rani yana zuwa kuma kuna kiwon awaki da shanu. Me za ku tsara?", options: ["Sayen ƙarin dabbobi", "Sayar da dukkan abincin dabbobi", "Kyale wuraren ruwa", "Abinci da ruwa, tare da yawan dabbobi da ya dace da abinci"], answer: 3, why: "Tsara abinci da ruwa da daidaita yawan dabbobi da abinci yana kare dabbobi a lokacin fari." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Dabarun noma mai jure sauyin yanayi",
        questions: [
          { objective: "O4", q: "Wace ce ƙa'idar noman kiyaye ƙasa?", options: ["Ƙona ɓuntun shuka bayan girbi", "Huɗa mai zurfi kowace damina", "Rufe ƙasa da ciyawa ko ɓuntun shuka", "Shuka amfanin gona iri ɗaya har abada"], answer: 2, why: "Rufin ƙasa yana riƙe danshi kuma yana kare ƙasa daga zaizayewa." },
          { objective: "O4", q: "Ramukan shuka (zai) suna taimakawa domin suna:", options: ["Tara ruwan sama da taki a kusa da kowace shuka", "Korar tsuntsaye", "Sa girbi ya yi sauri", "Maye gurbin iri"], answer: 0, why: "Suna tara ruwa da abinci a inda saiwoyi suke." },
          { objective: "O5", q: "A ina ya kamata ku sayi irin shuka mai jure fari?", options: ["Kowane mai sayarwa a gefen hanya", "Rumbun hatsin maƙwabci", "Daga hatsin da aka saya a kasuwa", "Dillali mai rajista da ke sayar da iri da aka tabbatar"], answer: 3, why: "An duba tsarki da ingancin iri da aka tabbatar." },
          { objective: "O5", q: "A push-pull, me desmodium yake yi?", options: ["Yana jan ƙwari cikin masara", "Yana korar ƙwari daga masara ko dawa", "Yana maye gurbin takin zamani gaba ɗaya", "Yana ciyar da tsuntsaye"], answer: 1, why: "Desmodium yana korar ƙwari; ciyawar kewaye tana jan su waje." },
          { objective: "O6", q: "Kafin ku sayi inshorar ma'aunin yanayi, ya kamata ku:", options: ["Karanta sharaɗin biya ku duba cewa kamfanin yana da lasisi", "Biya mutum na farko da ya tambaya", "Bayar da lambar sirrin kuɗin wayarku (PIN)", "Saya wa maƙwabta"], answer: 0, why: "Ku san lokacin da take biya, kuma ku tabbata kamfanin inshorar na gaske ne." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Noma Mai Jure Sauyin Yanayi",
    questions: [
      { objective: "O1", q: "Noma mai jure sauyin yanayi shi ne:", options: ["Noma da injuna kawai", "Zaɓar dabarun da ke ƙara yawan amfani, ke gina juriya kuma ke rage hayaƙi inda zai yiwu", "Noma a birane kawai", "Wani nau'in taki"], answer: 1, why: "Wannan shi ne bayanin FAO na CSA." },
      { objective: "O1", q: "Ga yawancin ƙananan manoma, wace manufar CSA ce yawanci ke zuwa farko?", options: ["Rage hayaƙi", "Sayen jirage marasa matuƙa (drones)", "Wadatar abinci da kuɗin shiga", "Fitar da kaya ƙasashen waje"], answer: 2, why: "FAO ta ce abinci da kuɗin shiga su ne farko; rage hayaƙi sau da yawa ƙarin amfani ne." },
      { objective: "O1", q: "Juriya tana nufin:", options: ["Ƙarfin jure bala'i da farfaɗowa", "Shuka da jinkiri", "Amfani da ƙarin ruwa", "Wani nau'in ƙasa"], answer: 0, why: "Gonaki masu juriya suna farfaɗowa bayan fari ko ambaliya." },
      { objective: "O2", q: "Hasashen yanayi na hukuma na damina a Kenya yana fitowa daga:", options: ["KCAA", "NiMet", "Kamfanin iri", "Kenya Meteorological Department (KMD)"], answer: 3, why: "KMD tana fitar da hasashen damina da sanarwar yanayi ga manoma." },
      { objective: "O2", q: "Ya kamata a yi amfani da hasashen damina don:", options: ["Saka komai a kan amfanin gona ɗaya", "Daidaita shirye-shirye, kamar zaɓar iri mai saurin nuna", "Kyale ranakun shuka", "Daina noma"], answer: 1, why: "Hasashe yana ba da yiwuwa; ku daidaita cikin hankali." },
      { objective: "O3", q: "Farawar damina (onset) tana nufin:", options: ["Ƙarshen girbi", "Wani ƙwaro", "Farkon lokacin ruwan sama", "Wani taki"], answer: 2, why: "Onset shi ne lokacin da ruwan sama ya fara." },
      { objective: "O3", q: "Tazarar fari (dry spell) ita ce:", options: ["Kwanaki ko makonni ba tare da ruwan sama mai amfani ba a lokacin damina", "Ambaliya", "Dare mai sanyi", "Ranar kasuwa"], answer: 0, why: "Tazarar fari a tsakiyar damina na iya cutar da amfanin gona a muhimman matakai." },
      { objective: "O3", q: "Masara tana fure a watan da tazarar fari ke yawan faruwa. Wannan:", options: ["Damar kasuwa ce", "Alama mai kyau ce", "Hanyar shuka ce", "Lokacin haɗari ne"], answer: 3, why: "Muhimmin mataki da ya haɗu da babban haɗari lokacin haɗari ne." },
      { objective: "O4", q: "Ƙona ɓuntun shuka:", options: ["Ƙa'idar noman kiyaye ƙasa ce", "Yana barin ƙasa a buɗe kuma yana rasa ɗanyen kayan ƙasa", "Yana riƙe ƙarin ruwa a ƙasa", "Yana da jure sauyin yanayi"], answer: 1, why: "Ɓuntun shuka da aka bari a matsayin rufin ƙasa yana kare ƙasa kuma yana ciyar da ita." },
      { objective: "O4", q: "Rage huɗa (minimum tillage) yana nufin:", options: ["Huɗa sau biyu", "Rashin cire ciyawa", "Taɓa ƙasa kaɗan gwargwadon iko", "Shuka bishiyoyi kawai"], answer: 2, why: "Rage taɓa ƙasa yana kare tsarinta da danshinta." },
      { objective: "O4", q: "Wace dabara ce ke hana zaizayar ƙasa a gangare?", options: ["Matakan ƙasa kamar fanya juu, da layukan ciyawa a layin gangare", "Huɗa kai tsaye ƙasa daga gangare", "Cire dukkan ciyawa", "Ƙona gangaren"], answer: 0, why: "Matakan ƙasa da layukan ciyawa a layin gangare suna rage gudun ruwa kuma suna riƙe ƙasa." },
      { objective: "O4", q: "Tafkin ruwa (water pan) shi ne:", options: ["Tukunyar girki", "Tarkon ƙwari", "Fakitin iri", "Kududdufin da aka haƙa da ke ajiye ruwan sama"], answer: 3, why: "Tafkunan ruwa suna ajiye ruwa don dabbobi da ƙaramin ban ruwa." },
      { objective: "O5", q: "CGIAR ta ce irin masara mai jure fari:", options: ["Suna buƙatar ƙarin ruwa", "Za su iya bayar da amfani fiye da irin da aka saba a lokacin fari", "Ba za a iya shuka su a Afirka ba", "Daidai suke da masara ta yau da kullum"], answer: 1, why: "An samar da su don su yi aiki mafi kyau idan ruwa ya yi ƙaranci." },
      { objective: "O5", q: "Wane amfanin gona ne sau da yawa ke jure bushewa fiye da masara?", options: ["Shinkafar fadama", "Rake", "Dawa", "Shayi"], answer: 2, why: "Dawa hatsi ne mai jure fari." },
      { objective: "O5", q: "Shuka masara tare da wake ko wake (cowpea):", options: ["Yana raba haɗari kuma yana ƙara irin wake", "Koyaushe yana rage kuɗin shiga", "Ba a yarda da shi ba", "Yana buƙatar jirgi mara matuƙi (drone)"], answer: 0, why: "Amfanin gona biyu suna raba haɗari; irin wake yana ƙara nitrogen." },
      { objective: "O5", q: "A push-pull, ciyawar kewaye:", options: ["Tana korar ƙwari", "Ana girbe ta don fitarwa ƙasashen waje", "Ana fesa mata magani", "Tana jan ƙwari daga amfanin gona"], answer: 3, why: "Ciyawar Napier ko Brachiaria da ke kewaye tana jan ƙwari waje." },
      { objective: "O6", q: "Agroforestry tana nufin:", options: ["Sare daji don amfanin gona", "Shuka bishiyoyi tare da amfanin gona ko dabbobi", "Shuka furanni kawai", "Sayen katako"], answer: 1, why: "Bishiyoyi a gona suna ƙara kuɗin shiga, inuwa da kariyar ƙasa." },
      { objective: "O6", q: "A lokacin fari, masu kiwon dabbobi ya kamata su:", options: ["Ci gaba da ƙara dabbobi", "Sayar da dukkan abincin dabbobi", "Tsara abinci da ruwa kuma su sa yawan dabbobi ya dace da abinci", "Daina ba dabbobi ruwa"], answer: 2, why: "Tsara abinci da ruwa yana raya dabbobi a cikin rani." },
      { objective: "O6", q: "Sharaɗin biya a inshorar ma'aunin yanayi shi ne:", options: ["Yanayin da ke sa kamfanin inshora ya biya", "Farashin iri", "Wani nau'in bindiga", "Adireshin kamfanin inshora"], answer: 0, why: "Shi ne ke bayyana lokacin da inshorar take biya." },
      { objective: "O4", q: "Kafin ku yi amfani da sabuwar dabara a duk gonarku, ya kamata ku:", options: ["Yi amfani da ita ko'ina a lokaci ɗaya", "Kyale shawarar jami'in faɗakarwa", "Jira shekaru goma", "Gwada ta a ƙaramin fili ku kwatanta"], answer: 3, why: "Ƙananan gwaje-gwaje suna nuna ko tana aiki a gonarku." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      3,
      6,
      7,
      10,
      12,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Kalandar haɗarin yanayi",
        objective: "O3",
        notYet: "Babu watanni, ayyuka ko haɗari, ko babu lokutan haɗari.",
        meets: "Watanni goma sha biyu tare da lokutan damina da rani, ayyukan gona, haɗari da aƙalla lokutan haɗari biyu da aka zagaye.",
        exceeds: "Ya haɗa da abin da tsofaffin manoma suka ce ya canja."
      },
      {
        name: "Hasashen yanayi na damina",
        objective: "O2",
        notYet: "Babu hasashe, ko babu rana ko majiya.",
        meets: "Abin da hasashen yanayi na hukuma na wannan damina ya ce, majiyarsa da ranar da aka karanta shi.",
        exceeds: "Yana nuna canje-canje biyu a shirin da aka yi saboda hasashen."
      },
      {
        name: "Dabarar ƙasa da ruwa",
        objective: "O4",
        notYet: "Babu dabarar ƙasa ko ruwa.",
        meets: "Aƙalla dabara ɗaya ta ƙasa ko ruwa da ta dace da gonar, tare da ranar farawa.",
        exceeds: "An tsara ta a matsayin ƙaramin gwaji da aka kwatanta da hanyar da aka saba."
      },
      {
        name: "Amfanin gona da irin shuka",
        objective: "O5",
        notYet: "Babu dabarar amfanin gona ko irin shuka.",
        meets: "Aƙalla dabara ɗaya ta irin shuka ko amfanin gona da ke rage haɗari, tare da iri da aka tabbatar daga dillali mai rajista.",
        exceeds: "Ya kuma haɗa da shuka iri biyu tare ko push-pull inda ya dace."
      },
      {
        name: "Raba haɗari",
        objective: "O6",
        notYet: "Babu hanyar raba haɗari ban da babban amfanin gona.",
        meets: "Aƙalla dabara ɗaya ta bishiyoyi, dabbobi ko inshora, tare da ranar farawa.",
        exceeds: "Don inshora, ya faɗi sharaɗin biya kuma ya duba cewa kamfanin inshorar yana da lasisi."
      },
      {
        name: "Dabaru biyar da ma'aunin nasara",
        objective: "O1",
        notYet: "Dabaru ƙasa da biyar, ko babu hanyar auna nasara.",
        meets: "Aƙalla dabaru biyar, kowace da lokacin farawa da yadda za a san ko ta yi aiki.",
        exceeds: "Ya rubuta wace manufar noma mai jure sauyin yanayi kowace dabara take taimakawa."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Manoma da ke amfani da aƙalla sababbin dabarun noma mai jure sauyin yanayi guda biyu a wannan damina (binciken biyo baya)",
      "Girbi da kuɗin shiga idan aka kwatanta da wata damina ta fari ko mai wahala ta kwanan nan, kamar yadda manoma ko abokan aiki suka bayar da rahoto",
      "Manoma da ke duba hasashen yanayi na hukuma na damina kafin shuka, ko ke ɗaukar inshorar amfanin gona ko ta dabbobi daga kamfani mai lasisi"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko rediyo don samun hasashen damina, ko takardar sanarwar faɗakarwa",
      "Takarda da alƙalami (ko tebur na waya) don kalandar haɗarin yanayi da shirin",
      "Damar zuwa gonar mai koyo ko gona ta misali don zagayawa",
      "Lambar jami'in faɗakarwa ko agrovet don irin shuka da tsare-tsaren yankin",
      "Kusan minti 60 na darussa, tare da lokaci a gona don zagayawa da rubuta shirin"
    ],
    facilitatorNotes: [
      "Ku yi zama da ƙungiyoyin manoma kafin damina ta fara don shirye-shirye su kasance a shirye kafin shuka.",
      "Ku karanta sabon hasashen yanayi na hukuma tare, ku bayyana cewa yana ba da yiwuwa ne, ba alƙawari ba.",
      "Ku fara zana kalandar haɗarin yanayi ɗaya ta ƙungiya, sannan ku bar manoma su zana tasu; ku gayyaci tsofaffin manoma su faɗi abin da ya canja.",
      "Ku ƙarfafa ƙananan gwaje-gwaje na sababbin dabaru, kuma ku gayyaci jami'in faɗakarwa don tsare-tsare da irin shuka na yankin.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
