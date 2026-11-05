"use strict";

// Koach Learn course, Hausa (ha) translation of agriculture-africa/agri-conservation-agriculture.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const FAO_CA = { name: "FAO (Hukumar Abinci da Noma ta Majalisar Ɗinkin Duniya): Conservation Agriculture (ma'ana da ƙa'idoji uku)", url: "https://www.fao.org/conservation-agriculture/en/" };
const WOCAT_ZAI = { name: "WOCAT: Ramukan zai ko tassa na shuka (Nijar)", url: "https://qcat.wocat.net/en/wocat/technologies/view/permalink/1220" };
const ZIM_CA = { name: "Tasirin noma mai kiyaye ƙasa kan amfanin masara a yankunan da ba su da ruwa sosai na Zimbabwe (Experimental Agriculture)", url: "https://www.cambridge.org/core/product/36E50D9D434ADE25762F6D8E4E185FB7" };
const CIMMYT_ZM = { name: "CIMMYT: Gwaje-gwajen noma mai kiyaye ƙasa a gonakin Zambia (ramukan shuka, ripping, shuka kai tsaye da huɗa, 2006-2015)", url: "https://hdl.handle.net/11529/10825" };
const PCPB = { name: "Pest Control Products Board, Kenya (jerin magungunan da aka yi wa rajista)", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "NAFDAC, Najeriya (magungunan gona da aka yi wa rajista)", url: "https://www.nafdac.gov.ng" };
const EPA_GH = { name: "Environmental Protection Agency, Ghana (rajistar magungunan ƙwari da ciyawa)", url: "https://www.epa.gov.gh" };
const FAO_SOM = { name: "FAO: Muhimmancin ruɓaɓɓun abubuwa a cikin ƙasa (soil organic matter)", url: "https://www.fao.org/4/a0100e/a0100e.pdf" };

module.exports = {
  id: "agri-conservation-agriculture-ha",
  lang: "ha",
  translationOf: "agri-conservation-agriculture",
  category: "Agriculture (Africa)",
  name: "Noma Mai Kiyaye Ƙasa don Lokacin Rani da Ƙarancin Ruwa",
  skills: "Amfani da ƙa'idoji uku na noma mai kiyaye ƙasa, Haƙa ramukan shuka da ramukan zai, Zaɓar ripping ko shuka kai tsaye, Kula da rufin ƙasa (mulch), Kawar da ciyawa ba tare da huɗa ba, Tsara damina da lokacin sauyi",
  outcome: "tsara da fara damina ɗaya ta noma mai kiyaye ƙasa a gona ɗaya: yadda za ku shirya ƙasa ba tare da huɗa ba, ku riƙe ta a rufe, ku canja amfanin gona, ku kawar da ciyawa, da kayan aiki da ranakun da za ku yi amfani da su, tare da filin kwatantawa don bin sakamako a shekarun sauyi.",
  about: [
    "Wannan kwas na ƙananan manoma ne da manoman kasuwanci masu girma, ma'aikatan gona, matasa 'yan kasuwar noma da jami'an faɗakarwa kan aikin gona (extension officers) a yankunan da ba su da ruwa sosai na Kenya, Najeriya, Ghana, Burkina Faso, Senegal da sauran Afirka. A can damina gajeriya ce, ana yawan samun ɗaukewar ruwa, kuma huɗa tana bar ƙasa a tsiraice, mai tauri da ƙishirwa.",
    "Babi na 1 yana bayanin ƙa'idoji uku na noma mai kiyaye ƙasa kamar yadda FAO (Hukumar Abinci da Noma ta Majalisar Ɗinkin Duniya) ta bayyana su, kuma yana nuna yadda ake shirya ƙasa ba tare da huɗa ba: ramukan shuka, ramukan zai, ripping da shuka kai tsaye. Babi na 2 yana magana kan riƙe ƙasa a rufe da mulch, kawar da ciyawa ba tare da huɗa ba, kayan aiki da lokutan aiki a damina, abin da za a sa rai a shekarun fari, da wucewa daga damina ta farko zuwa ta gaba.",
    "Ban ruwa da tara ruwan sama suna cikin kwas ɗin \"Ban Ruwa da Sarrafa Ruwa a Gona\", takin gida (compost) da asalin mulch kuma suna cikin \"Lafiyar Ƙasa da Ƙarfinta\"; wannan kwas ba ya maimaita su. Ku fara a gona ɗaya, ku bar filin da aka huɗa kusa da ita don kwatantawa. Kowane darasi yana ɗaukar kusan minti biyar, kuma yana ƙarewa da aiki a gonarku. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas."
  ],
  finalTask: "Ku rubuta shirin noma mai kiyaye ƙasa na damina ɗaya don gona ɗaya (ko misali: eka 1 na masara da wake a Machakos, hekta 2 na dawa a arewacin Ghana, ko hekta 1 na gero da gyaɗa a Tsakiyar Tudu (Central Plateau) ta Burkina Faso): zanen gonar; yadda za ku shirya ta ba tare da huɗa ba (ramukan shuka, ramukan zai, ripping ko shuka kai tsaye) da dalilin haka; yadda za ku riƙe aƙalla kashi 30 cikin 100 na ƙasar a rufe; amfanin gonar da canjinsa ko haɗa shukarsa; shirinku na ciyawa; kalandar ayyuka wata-wata da kayan aiki da kuɗi; da yadda za ku kwatanta ta da filin da aka huɗa.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Ƙananan manoma da manoman kasuwanci masu girma, ma'aikatan gona, matasa 'yan kasuwar noma da jami'an faɗakarwa kan aikin gona a yankunan noma masu ƙarancin ruwa a Afirka (Kenya, Najeriya, Ghana da yankin Sahel mai jin Faransanci). Suna noma masara, dawa, gero, wake, wake (beans) da gyaɗa, sau da yawa tare da shanu ko awaki da ke kiwon ragowar amfanin gona.",
    startingPoint: "Suna shirya ƙasa ta hanyar huɗa da shanu, tarakta ko fartanya, kuma sau da yawa suna ƙona ragowar amfanin gona ko su bar dabbobi su ci ta. Da yawa sun ji labarin ramukan zai ko ramukan shuka, amma ba su taɓa yin cikakkiyar damina ta noma mai kiyaye ƙasa ba, ko su shirya don ciyawa da gasar amfani da ragowar amfanin gona da ke zuwa tare da ita.",
    gap: "Huɗa da ƙasa a tsiraice suna ɓata ruwan sama kaɗan da ake samu, suna jawo zaizayar ƙasa, kuma jinkirin huɗa yana jinkirta shuka. Masu koyo suna buƙatar hanya ta zahiri don yin noma da ƙarancin tayar da ƙasa, ƙarin rufi da canjin amfanin gona, su tsara kayan aiki, ƙwadago da lokaci, kuma su jure a dukkan damina ta farko lokacin da ciyawa ke da yawa kuma sakamako ba ɗaya ba ne.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; kwas ɗin yana kuma cikin Sifaniyanci, Faransanci da Larabci",
      "Ƙwadago da kayan aiki: fartanya, shanun huɗa ko tarakta da aka yi haya; ramukan shuka da na zai aiki ne mai wuya",
      "Ragowar amfanin gona: dabbobi suna kiwo a gonaki bayan girbi bisa al'adar gari",
      "Tsaron magungunan gona: maganin kashe ciyawa sai idan an yi masa rajista a ƙasar, an yi amfani da shi kamar yadda takardarsa (label) ta ce, da kayan kariya",
      "Lokaci: darussa na minti 4 zuwa 6; sakamako yana ƙaruwa a tsawon damina da yawa"
    ],
    prerequisites: "Babu. \"Lafiyar Ƙasa da Ƙarfinta\" da \"Climate-Smart Agriculture\" (Noma Mai Jure Sauyin Yanayi) suna da amfani a matsayin ilimin farko."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan kuna duban gona ko bayanin wata gona", action: "gane ko tana bin kowace ɗaya daga cikin ƙa'idoji uku na noma mai kiyaye ƙasa", standard: "kuna ambaton dukkan uku kamar yadda FAO ta bayyana su, har da rufin ƙasa na aƙalla kashi 30 cikin 100" },
    { id: "O2", condition: "A gona ɗaya kafin damina", action: "yin alamar wuri da haƙa ramukan shuka ko ramukan zai, da taki ko takin gida a kowanne", standard: "a layuka da suka ratsa gangaren ƙasa, an haƙa su a lokacin rani" },
    { id: "O3", condition: "Idan aka yi la'akari da ƙasarku, ƙwadagonku, dabbobin huɗa ko tarakta, da ruwan sama", action: "zaɓar tsakanin ramukan shuka, ripping da shuka kai tsaye don gona", standard: "kuna ba da aƙalla dalilai biyu na zaɓin" },
    { id: "O4", condition: "Don gona da ke ƙarƙashin noma mai kiyaye ƙasa", action: "tsara yadda za a riƙe ƙasa a rufe da kawar da ciyawa ba tare da huɗa ba", standard: "ana riƙe aƙalla kashi 30 cikin 100 na rufi, kuma maganin kashe ciyawa da aka yi wa rajista kaɗai, kamar yadda takardarsa ta ce, idan an yi amfani da shi" },
    { id: "O5", condition: "Don damina ɗaya a gona ɗaya", action: "rubuta kalandar kowane aikin noma mai kiyaye ƙasa da watansa, kayan aikinsa da kuɗinsa", standard: "tun daga shiri a lokacin rani har zuwa girbi da kula da ragowar amfanin gona" },
    { id: "O6", condition: "A dukkan damina ta farko ta noma mai kiyaye ƙasa", action: "kwatanta filin noma mai kiyaye ƙasa da filin da aka huɗa", standard: "kuna rubuta amfanin gona, kwanakin aiki da kuɗi na dukkan biyun a kowace damina" }
  ],
  chapters: [
    {
      name: "Babi na 1: Ƙa'idoji da shirya ƙasa ba tare da huɗa ba",
      lessons: [
        {
          title: "Ƙa'idoji uku na noma mai kiyaye ƙasa",
          objectives: ["O1"],
          minutes: 5,
          goal: "Gane ko gona tana bin kowace ɗaya daga cikin ƙa'idoji uku na noma mai kiyaye ƙasa.",
          text: [
            "Noma mai kiyaye ƙasa (conservation agriculture, CA) hanya ce ta noma da ke kare ƙasa domin ta riƙe ƙarin ɗan ruwan sama da ke sauka. FAO ta bayyana ƙa'idoji uku da ke aiki tare.",
            "1. Ƙarancin tayar da ƙasa: babu huɗa. Iri da taki suna shiga ƙasa ta ƙananan ramuka, ramukan shuka ko siraran layukan ripping, sauran ƙasar kuma ana barin ta yadda take. 2. Rufin ƙasa na dindindin: a bar ragowar amfanin gona ko shukar rufi (cover crop) a saman ƙasa, suna rufe aƙalla kashi 30 cikin 100 na ƙasar, a dukkan shekara. 3. Bambancin amfanin gona: a canja ko a haɗa shukar aƙalla amfanin gona iri uku daban-daban a tsawon lokaci, misali masara, wake da dawa, ba masara kowace shekara ba.",
            "Yin ɗaya kaɗai yana taimakawa kaɗan; yin dukkan uku tare yana kawo ainihin amfani. Huɗa ba tare da rufi ba tana bushe ƙasa; rufi ba tare da canjin amfanin gona ba yana bar ƙwari su yawaita; rashin huɗa da ƙasa a tsiraice yana bar ƙasa ta yi ɓawo, ruwan sama kuma ya gudu. A yankunan da ba su da ruwa, babban amfanin shi ne ruwa: ƙasa a rufe da ba a tayar da ita ba tana bar ruwan sama ya jiƙa ciki, kuma rana ba ta ɗauke shi sosai."
          ],
          words: [["Noma mai kiyaye ƙasa (CA)", "noma da ƙarancin tayar da ƙasa, rufin ƙasa na dindindin da bambancin amfanin gona."], ["Tayar da ƙasa (tillage)", "juya ko fasa ƙasa, misali ta huɗa ko haƙa."], ["Ragowar amfanin gona", "kara, ganye da ɓawon da suka rage bayan girbi."], ["Ɓawon ƙasa (crust)", "fata mai tauri da ke tasowa a kan ƙasa a tsiraice bayan ruwan sama, tana hana ruwa jiƙa ciki."]],
          slides: [
            { title: "Ƙa'idoji uku (FAO)", bullets: ["1. Ƙarancin tayar da ƙasa: babu huɗa", "2. Rufin ƙasa na dindindin: aƙalla kashi 30 cikin 100", "3. Bambancin amfanin gona: aƙalla iri uku"] },
            { title: "Ku tayar da ƙasa a wurin shuka kaɗai", bullets: ["Ƙananan ramuka, ramukan shuka ko layukan ripping", "Ku bar sauran ƙasar yadda take"] },
            { title: "Rufi da canjin amfanin gona", bullets: ["Ragowar amfanin gona ko shukar rufi a sama, dukkan shekara", "Misali masara, sannan wake, sannan dawa"] },
            { title: "Dukkan uku tare", bullets: ["Ɗaya kaɗai yana taimakawa kaɗan", "Tare: ƙarin ruwan sama yana jiƙa ciki kuma yana zama", "Babban amfani a yankunan bushe shi ne ruwa"] }
          ],
          sources: [FAO_CA],
          tryIt: "Ku zagaya ɗaya daga cikin gonakinku. Don kowace ƙa'ida, ku rubuta i, kaɗan ko a'a: An huɗa ta? Nawa ne na ƙasar ke a rufe (ku yi ƙiyasin kashi)? Amfanin gona iri nawa ne suka tsiro a can a damina uku da suka wuce? Ku zagaye ƙa'idar da ta fi rauni.",
          youCanNow: "ambaton ƙa'idoji uku na noma mai kiyaye ƙasa da duba gona da kowace ɗaya.",
          quickCheck: [
            { objective: "O1", q: "Wanne ne ɗaya daga cikin ƙa'idoji uku na FAO na noma mai kiyaye ƙasa?", options: ["Huɗa mai zurfi kowace damina", "Ƙona ragowar amfanin gona don tsabtace gona", "Rufin ƙasa na dindindin na aƙalla kashi 30 cikin 100", "Noma amfanin gona iri ɗaya kowace shekara"], answer: 2, why: "FAO ta lissafa ƙarancin tayar da ƙasa, rufin ƙasa na dindindin (aƙalla kashi 30 cikin 100) da bambancin amfanin gona." },
            { objective: "O1", q: "Wani manomi ya daina huɗa amma yana barin ƙasa a tsiraice kuma yana noma masara kowace shekara. Me ya rage?", options: ["Rufin ƙasa da bambancin amfanin gona", "Babu komai; cikakken CA ne", "Ƙarin huɗa", "Ƙarin ƙonawa"], answer: 0, why: "Ba tare da rufi da canjin amfanin gona ba, rashin huɗa kaɗai yana kawo ɗan amfani kaɗan." }
          ]
        },
        {
          title: "Ramukan shuka da ramukan zai",
          objectives: ["O2"],
          minutes: 6,
          goal: "Yin alamar wuri da haƙa ramukan shuka ko ramukan zai da taki a kowanne, kafin damina.",
          text: [
            "Ramukan shuka da ramukan zai ƙananan ramuka ne da ake haƙa da hannu inda ake shuka amfanin gona. Ramin kaɗai ake tayarwa; ƙasar da ke tsakani tana zama a rufe. Kowane rami yana tara ruwan sama kuma yana riƙe taki ko takin gida daidai inda saiwoyi suke.",
            "Ramukan zai sun fito daga manoma a Burkina Faso da Nijar, waɗanda suka yi amfani da su don mayar da ƙasa mai tauri da ɓawo zuwa noman gero da dawa. WOCAT ta bayyana ramuka masu faɗin kusan cm 30 zuwa 40 da zurfin cm 10 zuwa 15, a layuka masu gicciye da suka ratsa gangaren ƙasa, kusan 10,000 a hekta ɗaya, da taki ko takin gida a kowanne. Ramukan shuka da ake amfani da su a kudanci da gabashin Afirka kusan iri ɗaya ne: ƙananan ramuka na ka'ida a layuka, ana haƙa su da tazara ɗaya kowace shekara don ku koma wuraren da kuka saba.",
            "Ku haƙa su a lokacin rani bayan girbi, lokacin da sauran aiki ya ragu, don ku iya shuka da ruwan sama na farko mai kyau maimakon jiran huɗa. Ku sa ƙasar da ta fito daga ramin a gefen ƙasa na gangaren don ta tara ƙarin ruwa. Ku sa taki ko takin gida cike tafin hannu ɗaya ko biyu a kowane rami, ku rufe shi kaɗan. Ku tambayi jami'in faɗakarwa tazarar da ake amfani da ita don amfanin gonarku a yankinku.",
            "Aiki ne mai wuya, musamman a shekarar farko. Ku haƙa wani ɓangare na gonar kowane mako, ku raba aiki a ƙungiya, kuma ku sake amfani da ramukan a damina masu zuwa, wanda ya fi sauri sosai."
          ],
          steps: ["Ku zaɓi gonar ku yi alamar layuka masu ratsa gangaren ƙasa da igiya ko sanduna.", "Ku yi alamar wuraren ramuka da tazarar da jami'in faɗakarwa ya ba da shawara don amfanin gonarku.", "Ku haƙa a lokacin rani; ku tara ƙasar a gefen ƙasa na gangaren.", "Ku sa taki ko takin gida a kowane rami ku rufe kaɗan.", "Ku bar ƙasar da ke tsakanin ramuka a rufe.", "Ku shuka a cikin ramukan da ruwan sama na farko mai kyau."],
          words: [["Ramin shuka (planting basin)", "ƙaramin rami da ake haƙa da hannu inda iri da taki suke shiga, ana barin sauran ƙasar ba a tayar da ita ba."], ["Ramin zai (zai pit)", "ramin shuka da aka cika da taki ko takin gida, manoma a Burkina Faso da Nijar suka fara amfani da shi don farfaɗo da ƙasa mai ɓawo."], ["Ratsa gangaren ƙasa", "bin layin tudu ɗaya (contour), don layuka su tara ruwa maimakon su kwarara shi ƙasa."]],
          slides: [
            { title: "Ƙananan ramuka, babban amfani", bullets: ["Ramin kaɗai ake tayarwa", "Yana tara ruwan sama inda saiwoyi suke", "Yana riƙe taki kusa da amfanin gona"] },
            { title: "Ramukan zai (Burkina Faso, Nijar)", bullets: ["Faɗin kusan cm 30-40, zurfin cm 10-15 (WOCAT)", "Layuka masu gicciye da suka ratsa gangaren ƙasa", "Taki ko takin gida a kowanne"] },
            { title: "Lokaci", bullets: ["Ku haƙa a lokacin rani bayan girbi", "Ku shuka da ruwan sama na farko mai kyau", "Babu jiran huɗa"] },
            { title: "Ku sauƙaƙa aikin", bullets: ["Ɓangaren gona kowane mako", "Ku raba aiki a ƙungiya", "Ku sake amfani da ramukan a damina mai zuwa"] }
          ],
          sources: [WOCAT_ZAI, FAO_CA],
          tryIt: "A ƙaramin ɓangaren gona (misali m 10 da m 10), ku yi alamar layuka masu ratsa gangaren ƙasa ku haƙa ramukan shuka ko ramukan zai guda biyar. Ku auna lokacin da kowanne ya ɗauka, ku sa taki, ku lissafa kwanaki nawa dukkan gonar za ta ɗauka.",
          youCanNow: "yin alamar wuri da haƙa ramukan shuka ko ramukan zai da taki, masu ratsa gangaren ƙasa, kafin damina.",
          quickCheck: [
            { objective: "O2", q: "Yaushe ya kamata ku haƙa ramukan shuka ko ramukan zai?", options: ["Bayan amfanin gona ya fito", "Sai lokacin da ruwan sama ke sauka da ƙarfi", "A lokacin girbi, a kan amfanin gona", "A lokacin rani kafin damina"], answer: 3, why: "Haƙa da wuri yana bar ku shuka da ruwan sama na farko mai kyau kuma yana raba aikin." },
            { objective: "O2", q: "Ina ya kamata ƙasar da ta fito daga ramin zai ta tafi?", options: ["A jefar da ita nesa", "A gefen ƙasa na gangaren ramin, don ta tara ƙarin ruwa", "A mayar da ita cikin ramin nan take", "A kan hanya"], answer: 1, why: "Ƙaramin kunya a gefen ƙasa yana taimakawa kowane rami ya tara kuma ya riƙe ruwan da ke gudana." }
          ]
        },
        {
          title: "Ripping da shuka kai tsaye",
          objectives: ["O3"],
          minutes: 5,
          goal: "Zaɓar tsakanin ramukan shuka, ripping da shuka kai tsaye don ɗaya daga cikin gonakinku.",
          text: [
            "Ramukan shuka sun dace da manoma masu fartanya a ƙananan filaye. Idan kuna da shanun huɗa ko kuna iya hayar tarakta, ripper ko injin shuka kai tsaye zai iya rufe ƙarin ƙasa da ƙarancin ƙwadago.",
            "Ripper sirarar haƙori ce, sau da yawa ana ɗora ta a kan sandar garmar shanu a maimakon ruwan garmar da ke juya ƙasa (mouldboard), tana buɗe sirarar kafa (layin ripping) don iri da taki, kuma tana barin ƙasar tsakanin layuka a rufe. Yin ripping a lokacin rani zai iya fasa wani tauri a ƙarƙashin saman ƙasa (plough pan) don saiwoyi da ruwa su shiga zurfi. Shuka kai tsaye tana sa iri kai tsaye ta cikin ragowar amfanin gona da jab planter (kayan aikin hannu) ko injin shuka da dabbobi ko tarakta ke ja, ba tare da buɗe layuka kwata-kwata ba.",
            "Wanne za a zaɓa? Ku yi tunani game da ƙwadagonku (ramukan shuka sun fi buƙatar aiki), dabbobin huɗa ko tarakta (ripping yana buƙatar shanu ko tarakta), ƙasa (ƙasa mai tauri da ɓawo tana amfana da ramukan shuka ko ripping), da girman gona. Gwaje-gwaje a sassan Zambia daga 2006 zuwa 2015 sun kwatanta ramukan shuka, ripping da shuka kai tsaye da huɗa da garma a gonakin gaske. Ku tambayi jami'in faɗakarwa ko wani aikin CA inda za ku ga waɗannan kayan aiki suna aiki, da ko ana iya hayar su."
          ],
          steps: ["Ku rubuta girman gonarku, ƙwadagonku da damar samun shanu ko tarakta.", "Ku duba ƙasar: akwai tauri a ƙarƙashi ko ɓawo?", "Ƙaramin fili da aikin hannu: ramukan shuka.", "Shanu ko tarakta da ƙasa mai tauri: ripping.", "Ragowar amfanin gona mai kyau da injin shuka: shuka kai tsaye.", "Ku tambayi jami'in faɗakarwa inda za a ga kayan aikin da inda za a yi hayarsu."],
          words: [["Ripper", "sirarar haƙori da shanu ko tarakta ke ja, tana buɗe kafa don iri ba tare da juya ƙasa ba."], ["Plough pan", "wani tauri a ƙasa kaɗan da zurfin huɗa da ke hana saiwoyi da ruwa wucewa."], ["Jab planter", "kayan aikin hannu da ake tura shi cikin ƙasa don sa iri (wani lokaci har da taki) ta cikin ragowar amfanin gona."], ["Shuka kai tsaye (direct seeding)", "shuka kai tsaye cikin ƙasar da ba a tayar ba da ragowar amfanin gona."]],
          slides: [
            { title: "Hanyoyi uku ba tare da huɗa ba", bullets: ["Ramukan shuka: fartanya, ƙananan filaye", "Ripping: shanu ko tarakta suna buɗe layukan ripping", "Shuka kai tsaye: jab planter ko injin shuka"] },
            { title: "Ripping", bullets: ["Sirarar haƙori a kan sandar garma", "Zai iya fasa taurin plough pan", "Ƙasar tsakanin layuka tana zama a rufe"] },
            { title: "Yadda za a zaɓa", bullets: ["Ƙwadago: ramukan shuka sun fi buƙatar aiki", "Dabbobin huɗa: akwai shanu ko tarakta?", "Taurin ƙasa da girman gona"] },
            { title: "Ku fara gani", bullets: ["Gwaje-gwajen Zambia: ramuka, ripping, shuka kai tsaye", "Ku tambayi jami'in faɗakarwa inda za ku ga kayan aikin", "Ana iya hayar su?"] }
          ],
          sources: [CIMMYT_ZM, FAO_CA],
          tryIt: "Don gonar da kuka zaɓa, ku rubuta girman gonar, ƙwadagonku, damar samun shanu ko tarakta, da yadda ƙasar take da tauri. Ku zaɓi ramukan shuka, ripping ko shuka kai tsaye, ku rubuta dalilai biyu na zaɓinku.",
          youCanNow: "zaɓar tsakanin ramukan shuka, ripping da shuka kai tsaye don gona, tare da dalilai.",
          quickCheck: [
            { objective: "O3", q: "Wani manomi yana da hekta 3, shanun huɗa biyu da ƙasa mai tauri. Wace hanya ce ta fi dacewa?", options: ["Ripping da ripper da shanu ke ja", "Ramukan shuka da hannu a dukkan hekta 3 cikin mako ɗaya", "Huɗa mai zurfi sau biyu", "Rashin shuka kwata-kwata"], answer: 0, why: "Shanu da ƙasa mai tauri sun dace da ripping, wanda ke rufe ƙasa fiye da ramukan hannu." },
            { objective: "O3", q: "Mene ne jab planter?", options: ["Garmar tarakta", "Kayan aikin hannu da ke sa iri ta cikin ragowar amfanin gona", "Famfon ruwa", "Wani nau'in taki"], answer: 1, why: "Jab planter yana bar ku shuka kai tsaye cikin ƙasa a rufe da ba a tayar ba." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Ƙa'idoji da shirya ƙasa ba tare da huɗa ba",
        questions: [
          { objective: "O1", q: "A cewar FAO, amfanin gona iri nawa ya kamata canji ko haɗin shuka na CA ya ƙunsa?", options: ["Ɗaya", "Biyu a mafi yawa", "Aƙalla uku", "Babu"], answer: 2, why: "Ƙa'idar bambanci ta FAO tana magana kan aƙalla amfanin gona iri uku daban-daban." },
          { objective: "O1", q: "Me yasa ƙasa a rufe da ba a tayar ba ke da amfani musamman a yankunan bushe?", options: ["Tana sa ƙasa ta yi sanyi a lokacin hunturu", "Ƙarin ruwan sama yana jiƙa ciki, rana kuma ba ta ɗauke shi sosai", "Tana hana dukkan ciyawa har abada", "Ba ta buƙatar iri"], answer: 1, why: "Rufi da rashin huɗa suna ƙara shigar ruwa cikin ƙasa kuma suna rage ƙafewarsa." },
          { objective: "O2", q: "Ramukan zai sun fara yaɗuwa tsakanin manoma a waɗanne ƙasashe?", options: ["Burkina Faso da Nijar", "Masar da Libiya", "Afirka ta Kudu da Namibiya", "Kenya da Uganda kaɗai"], answer: 0, why: "Ramukan zai sun fito daga manoma a Sahel, musamman Burkina Faso da Nijar." },
          { objective: "O2", q: "Me ake sawa a kowane ramin zai ko ramin shuka kafin shuka?", options: ["Babu komai", "Leda (roba)", "Tokar ragowar amfanin gona da aka ƙona kaɗai", "Taki ko takin gida"], answer: 3, why: "Taki ko takin gida a cikin rami yana ciyar da amfanin gona daidai a saiwoyinsa." },
          { objective: "O3", q: "Me ripping a lokacin rani zai iya yi baya ga buɗe layukan ripping?", options: ["Ba da ruwa ga amfanin gona", "Fasa taurin plough pan don saiwoyi da ruwa su shiga zurfi", "Kashe dukkan ƙwari", "Maye gurbin taki"], answer: 1, why: "Ripper zai iya fasa taurin da huɗa ke yawan barin a ƙarƙashin ƙasa." }
        ]
      }
    },
    {
      name: "Babi na 2: Damina da lokacin sauyi",
      lessons: [
        {
          title: "Kula da mulch da ragowar amfanin gona",
          objectives: ["O4"],
          minutes: 5,
          goal: "Tsara yadda za a riƙe aƙalla kashi 30 cikin 100 na gona a rufe a dukkan shekara.",
          text: [
            "Rufi ita ce ƙa'idar da manoma suka fi ganin wuya, domin ragowar amfanin gona tana da wasu amfani: dabbobi suna kiwo a gonaki bayan girbi, ana kuma amfani da kara don itacen girki, shinge da gini. A yankunan bushe, gara ma tana iya cinye ragowar amfanin gona da ke saman ƙasa.",
            "Ku shirya don haka. Ku yanke nawa ne na ragowar amfanin gona zai zauna a gona, nawa kuma zai tafi ga dabbobi. Ku yanke ku ajiye wani ɓangare na kara (stover) don abincin dabbobi a lokacin rani, don kada a bar dabbobi su shiga gonar CA. Ku yi magana da maƙwabta da makiyaya game da gonar: wasu al'ummomi suna yarda cewa ba za a yi kiwo a gonakin CA da aka yi wa alama ba, ko manomi ya kewaye ƙaramar gona da shingen tsirrai ko rassan ƙaya. Ku samo rufi daga wasu wurare: haɗin shukar wake ko lablab, ciyawa daga gefen gona, ko rassan da aka sare daga bishiyoyi.",
            "Don duba rufi, ku kalli ƙasa kai tsaye a murabba'in mita ɗaya a wurare da yawa, ku yi ƙiyasin nawa ne na ƙasar ba ku iya gani. Kuna son aƙalla kashi 30 cikin 100 a rufe (FAO); fiye da haka ya fi kyau. Ku baza ragowar amfanin gona daidai, ba a tari ba, kuma ku bar ta a sama maimakon binne ta.",
            "Kada ku taɓa ƙona ragowar amfanin gona a gonar CA. Ƙonawa tana cire rufin da ruɓaɓɓun abubuwan da kuke ginawa a ƙasa."
          ],
          steps: ["Ku yanke rabon ragowar amfanin gona don rufi da na abincin dabbobi.", "Ku yanke ku ajiye abincin dabbobi don dabbobi su nisanci gonar CA.", "Ku yi yarjejeniya da maƙwabta da makiyaya, ko ku kewaye gonar da shinge.", "Ku ƙara rufi daga haɗin shuka, ciyawar gefen gona ko rassan bishiyoyi.", "Ku duba rufi: ku kalli ƙasa a murabba'in mita ɗaya a wurare da yawa.", "Ku baza daidai; kada ku taɓa ƙonawa."],
          words: [["Mulch (rufin ƙasa)", "abin da ake bazawa a saman ƙasa don rufe ta da kare ta."], ["Kara (stover)", "busasshen kara da ganyen masara ko dawa bayan girbi."], ["Shingen tsirrai (live fence)", "layin ƙananan bishiyoyi ko kurmi da aka shuka kusa da juna don hana dabbobi shiga."]],
          slides: [
            { title: "Rufi yana gasa da wasu amfani", bullets: ["Kiwo bayan girbi", "Itacen girki, shinge, gini", "Gara a yankunan bushe"] },
            { title: "Ku tsara ragowar amfanin gona", bullets: ["Rabon rufi da na abincin dabbobi", "Ku ajiye abinci; ku hana dabbobi shiga", "Ku yi yarjejeniya da makiyaya ko ku yi shinge"] },
            { title: "Ku samo ƙarin rufi", bullets: ["Haɗin shukar wake ko lablab", "Ciyawa daga gefen gona", "Rassan bishiyoyi da aka sare"] },
            { title: "Duba: aƙalla kashi 30 cikin 100", bullets: ["Ku kalli ƙasa a murabba'in mita ɗaya", "Ku baza daidai, ku bar shi a sama", "Kada ku taɓa ƙonawa a gonar CA"] }
          ],
          sources: [FAO_CA, FAO_SOM],
          tryIt: "Ku yi ƙiyasin rufin gonar da kuka zaɓa yau a wurare uku. Ku rubuta inda ƙarin rufi zai fito, nawa ne na kara zai tafi ga dabbobi, da yadda za ku hana dabbobi shiga gonar (yarjejeniya, shinge ko ajiyayyen abinci).",
          youCanNow: "tsara yadda za a riƙe aƙalla kashi 30 cikin 100 na gonar CA a rufe, yayin da har yanzu kuke ciyar da dabbobinku.",
          quickCheck: [
            { objective: "O4", q: "Shanun maƙwabta suna cinye dukkan ragowar amfanin gona a gonarku ta CA kowane rani. Me zai iya taimakawa?", options: ["Ku fara ƙona ragowar amfanin gona", "Ku huɗa gonar", "Ku yi yarjejeniya da makiyaya, ku kewaye gonar da shinge, ko ku ajiye abinci don dabbobi su nisanci gonar", "Ku daina batun rufi"], answer: 2, why: "Yarjejeniyar al'umma, shinge da ajiyayyen abinci suna kare rufin." },
            { objective: "O4", q: "Ta yaya za ku duba ko gona tana da isasshen rufi?", options: ["Ku ƙirga shanun", "Ku kalli ƙasa a murabba'in mita ɗaya a wurare da yawa ku yi ƙiyasin rabon ƙasar da ke a ɓoye", "Ku auna nauyin girbi", "Ku auna ruwan sama"], answer: 1, why: "Ƙiyasi da ido a wurare da yawa yana nuna ko rufin ya kai kashi 30 cikin 100." }
          ]
        },
        {
          title: "Kawar da ciyawa ba tare da huɗa ba",
          objectives: ["O4"],
          minutes: 5,
          goal: "Tsara kawar da ciyawa don gonar CA ba tare da huɗa ba.",
          text: [
            "Huɗa tana binne ciyawa; ba tare da ita ba, ciyawa tana iya yin yawa a damina ta farko. Wannan shi ne babban dalilin da yasa manoma ke barin CA, don haka ku tsara cire ciyawa tun farko.",
            "Ku cire ciyawa da wuri kuma akai-akai: makonnin farko bayan amfanin gona ya fito su ne suka fi muhimmanci. Ku yi amfani da fartanya a hankali, kuna kankare ƙasa kaɗan a ƙarƙashin saman maimakon juya ƙasa, ko ku tsige da hannu. Kada ku taɓa barin ciyawa ta yi iri; kowace ciyawa da ta yi iri tana ƙara dubbai don shekara mai zuwa. Mulch da shukar rufi suna yi wa ƙasa inuwa kuma suna hana yawancin ciyawa tsirowa, haɗin shuka mai yawa kuma yana barin ƙaramin wuri. Bayan damina da yawa na cire ciyawa kafin ta yi iri, irin ciyawa da ke cikin ƙasa yana raguwa kuma cire ciyawa yana zama mafi sauƙi.",
            "Wasu manoman CA suna kuma amfani da maganin kashe ciyawa (herbicide). Idan kun yi haka, ku yi amfani da magungunan da aka yi wa rajista a ƙasarku kaɗai (a Kenya, ku duba jerin Pest Control Products Board; a Najeriya, NAFDAC; a Ghana, Environmental Protection Agency), ku saya daga dillalai masu lasisi, kuma ku bi takardar maganin (label) daidai game da amfanin gona, lokaci da yawa. Ku sa tufafin kariya, safar hannu da takalman roba, ku nisantar da yara da dabbobi, kuma kada ku taɓa fesa kusa da ruwa. Ku tambayi jami'in faɗakarwa kafin ku fara."
          ],
          steps: ["Ku cire ciyawa da wuri: makonnin farko bayan amfanin gona ya fito.", "Ku yi amfani da fartanya a hankali ko ku tsige da hannu; kada ku juya ƙasa.", "Kada ku taɓa barin ciyawa ta yi iri.", "Ku yi amfani da mulch, shukar rufi da haɗin shuka mai yawa don yi wa ciyawa inuwa.", "Idan kuna amfani da maganin kashe ciyawa: magani mai rajista, takardar maganin, kayan kariya.", "Ku tsara ƙwadagon cire ciyawa kafin damina ta fara."],
          words: [["Ajiyar irin ciyawa (weed seed bank)", "irin ciyawa da ke ajiye a cikin ƙasa, suna jiran tsirowa."], ["Maganin kashe ciyawa (herbicide)", "sinadari da ke kashe ciyawa."], ["Magani mai rajista", "maganin ƙwari ko na ciyawa da hukumar ƙasa ta amince a yi amfani da shi."]],
          slides: [
            { title: "Ciyawa ita ce babban gwaji", bullets: ["Ta fi yawa a damina ta farko", "Babban dalilin da yasa manoma ke barin CA", "Ku tsara cire ciyawa tun farko"] },
            { title: "Cire ciyawa ba tare da huɗa ba", bullets: ["Da wuri kuma akai-akai bayan amfanin gona ya fito", "Fartanya a hankali ko tsigewa da hannu", "Kada ku taɓa barin ciyawa ta yi iri"] },
            { title: "Ku bar rufi ya yi aikin", bullets: ["Mulch da shukar rufi suna yi wa ciyawa inuwa", "Haɗin shuka mai yawa yana barin ƙaramin wuri", "Ajiyar irin ciyawa tana raguwa a damina da yawa"] },
            { title: "Maganin kashe ciyawa? Sai lafiya", bullets: ["Mai rajista: PCPB (KE), NAFDAC (NG), EPA (GH)", "Ku bi takardar maganin daidai", "Kayan kariya; nesa da ruwa da yara"] }
          ],
          sources: [PCPB, NAFDAC, EPA_GH, FAO_CA],
          tryIt: "Ku rubuta shirin ciyawa don gonarku: lokacin da za ku cire ciyawa (makonni bayan shuka), da wane kayan aiki, wa zai yi, kwanaki nawa zai ɗauka, da yadda rufi ko haɗin shuka zai taimaka. Idan kuna tunanin maganin kashe ciyawa, ku rubuta inda za ku duba cewa an yi masa rajista.",
          youCanNow: "tsara kawar da ciyawa don gonar CA ba tare da huɗa ba, kuna amfani da maganin kashe ciyawa lafiya kuma bisa doka kawai idan ya zama dole.",
          quickCheck: [
            { objective: "O4", q: "Me yasa kada ku taɓa barin ciyawa ta yi iri a gonar CA?", options: ["Iri yana sa amfanin gona ya yi mummunan ɗanɗano", "Irin ciyawa taki ne mai kyau", "Haramun ne a doka", "Kowace ciyawa da ta yi iri tana ƙara dubban iri don shekara mai zuwa"], answer: 3, why: "Hana ciyawa yin iri yana rage ajiyar irin ciyawa a cikin ƙasa a tsawon damina." },
            { objective: "O4", q: "Wata manomiya a Kenya tana son amfani da maganin kashe ciyawa a masararta ta CA. Me ya kamata ta fara dubawa?", options: ["Cewa Pest Control Products Board ta yi masa rajista, da yadda takardar maganin ta ce a yi amfani da shi", "Cewa shi ne kwalba mafi arha", "Cewa maƙwabci ya ji daɗinsa", "Cewa ba shi da takarda"], answer: 0, why: "Magunguna masu rajista kaɗai, da aka yi amfani da su kamar yadda takarda ta ce, tare da kayan kariya, suke lafiya kuma bisa doka." }
          ]
        },
        {
          title: "Kayan aiki, lokaci, shekarun fari da lokacin sauyi",
          objectives: ["O5", "O6"],
          minutes: 6,
          goal: "Rubuta kalandar damina ta ayyukan CA, kayan aiki da kuɗi, da shirya filin kwatantawa.",
          text: [
            "Damina ta CA tana farawa a lokacin rani, ba lokacin ruwan sama ba. Kalanda ta yau da kullum: bayan girbi, ku riƙe ragowar amfanin gona ku yi yarjejeniya kan kiwo; a lokacin rani, ku haƙa ko ku sake amfani da ramukan shuka, ko ku yi ripping, ku sa taki; a ruwan sama na farko mai kyau, ku shuka nan take (babu jiran huɗa); a makonnin farko, ku cire ciyawa da wuri kuma akai-akai; a cikin damina, ku ƙara haɗin shuka ko shukar rufi; a lokacin girbi, ku bar ragowar amfanin gona a gona ku tsara canjin amfanin gona na damina mai zuwa. Kusa da kowane aiki, ku rubuta kayan aikin (fartanya, ripper, jab planter, injin fesa magani da kayan kariya) da kuɗinsa, ko kuna da shi, za ku yi haya ko za ku aro.",
            "A shekarun fari, babban amfanin CA yana bayyana. Ramukan shuka da mulch suna tara ruwa kuma suna riƙe shi fiye da haka, shuka a kan lokaci kuma yana amfani da ruwan sama na farko. Wani nazari na gwaje-gwaje da yawa a yankunan Zimbabwe da ba su da ruwa sosai ya gano cewa ramukan shuka sun ba da masara fiye da huɗa a fiye da rabin gwaje-gwajen. Amma CA ba ta fi huɗa kowace shekara ba, kuma ba za ta iya maye gurbin rashin ruwan sama kwata-kwata ba.",
            "Ku sa ran lokacin sauyi. Amfanin gona yana iya zama daidai ko ma ya ragu a damina ɗaya ko biyu ta farko lokacin da ciyawa ke da yawa kuma ƙasa tana sabawa; amfani yawanci yana ƙaruwa a damina da yawa yayin da rufi da ruɓaɓɓun abubuwa a ƙasa ke ƙaruwa. Ku fara a gona ɗaya, ku bar filin da aka huɗa kusa da ita, ku rubuta amfanin gona, kwanakin aiki da kuɗi na dukkan biyun kowace damina. Ku yanke hukunci kan CA bayan damina uku, ba ɗaya ba."
          ],
          steps: ["Ku jera kowane aiki daga girbi zuwa girbi.", "Ku sa kowanne a wata.", "Ku ƙara kayan aikin da ko kuna da shi, za ku yi haya ko za ku aro.", "Ku ƙara kuɗi da kwanakin aiki.", "Ku yi alamar filin kwatantawa da aka huɗa mai girma ɗaya.", "Ku rubuta amfanin gona, aiki da kuɗi na dukkan biyun kowace damina; ku yanke hukunci bayan damina uku."],
          words: [["Lokacin sauyi", "damina ta farko bayan komawa CA, lokacin da ciyawa ke da yawa kuma amfani yana ci gaba da ginuwa."], ["Filin kwatantawa", "filin da aka noma ta tsohuwar hanya kusa da filin CA, don a kwatanta sakamako da adalci."], ["Kwanakin aiki (labour day)", "mutum ɗaya yana aiki rana ɗaya; ana amfani da shi don auna yawan aikin da wani aiki ke buƙata."]],
          slides: [
            { title: "Damina tana farawa a rani", bullets: ["Bayan girbi: ku riƙe ragowar amfanin gona, ku yi yarjejeniyar kiwo", "Lokacin rani: ramukan shuka ko ripping, taki", "Ruwan sama na farko mai kyau: ku shuka nan take"] },
            { title: "Kalanda da kayan aiki da kuɗi", bullets: ["Fartanya, ripper, jab planter, kayan kariya", "Kuna da shi, haya ko aro?", "Kuɗi da kwanakin aiki na kowane aiki"] },
            { title: "Shekarun fari", bullets: ["Ramukan shuka da mulch suna riƙe ƙarin ruwa", "Zimbabwe: ramukan shuka sun fi huɗa a fiye da rabin gwaje-gwaje", "Ba kowace shekara ba; babu ruwan sama = babu amfanin gona"] },
            { title: "Wucewa lokacin sauyi", bullets: ["Amfanin gona yana iya raguwa a damina 1 zuwa 2", "Ku bar filin da aka huɗa don kwatantawa", "Ku rubuta amfani, aiki, kuɗi; ku yanke hukunci bayan damina 3"] }
          ],
          sources: [ZIM_CA, CIMMYT_ZM, FAO_CA],
          tryIt: "Aikin ƙarshe: ku rubuta shirinku na CA na damina ɗaya don gona ɗaya, da zane, hanyar shirya ƙasa da dalilai, shirye-shiryen rufi da ciyawa, amfanin gona da canjinsa, kalandar ayyuka wata-wata da kayan aiki da kuɗi, da inda filin kwatantawarku da aka huɗa zai kasance.",
          youCanNow: "tsara cikakkiyar damina ta CA da kayan aiki, lokaci da kuɗi, da kwatanta ta da huɗa da adalci a shekarun sauyi.",
          quickCheck: [
            { objective: "O5", q: "Yaushe aikin damina ta CA ke farawa?", options: ["Lokacin da amfanin gona ya yi fure", "A lokacin rani, bayan girbin ƙarshe", "A ruwan sama na farko, da huɗa", "A girbin amfanin gona na gaba"], answer: 1, why: "Ramukan shuka, ripping, taki da shirin ragowar amfanin gona ana yin su a lokacin rani don ku shuka da ruwan sama na farko." },
            { objective: "O6", q: "Filin CA ɗinku ya ba da amfanin gona daidai da filin da aka huɗa a damina ta farko. Me ya kamata ku yi?", options: ["Ku bar CA", "Ku huɗa filin CA", "Ku ƙona ragowar amfanin gona", "Ku ci gaba da rubutawa aƙalla damina uku kafin ku yanke hukunci"], answer: 3, why: "Amfani yana ginuwa a damina da yawa; damina ɗaya ta yi wuri don yanke hukunci." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Damina da lokacin sauyi",
        questions: [
          { objective: "O4", q: "Me kada ku taɓa yi da ragowar amfanin gona a gonar CA?", options: ["Baza ta daidai", "Barin ta a saman ƙasa", "Ƙona ta", "Ƙara wata daga gefen gona"], answer: 2, why: "Ƙonawa tana cire rufi da ruɓaɓɓun abubuwan da CA ta dogara da su." },
          { objective: "O4", q: "Wace hanyar cire ciyawa ce ta dace da CA?", options: ["Huɗa ciyawa ta shiga ƙasa", "Ƙona dukkan gonar", "Cire ciyawa a lokacin girbi kaɗai", "Fartanya a hankali ko tsigewa da hannu da wuri kuma akai-akai"], answer: 3, why: "Cire ciyawa ba mai zurfi ba, ba tare da juya ƙasa ba, yana rage tayar da ƙasa zuwa mafi ƙanƙanta." },
          { objective: "O5", q: "Wanne ne ya kamata ya kasance a kalandar damina ta CA?", options: ["Haƙa ko sake amfani da ramukan shuka a lokacin rani, da kayan aiki da kuɗi", "Huɗa sau biyu kafin shuka", "Ƙona ragowar amfanin gona bayan girbi", "Shuka wata ɗaya bayan ruwan sama ya fara"], answer: 0, why: "Kalandar CA tana jera kowane aiki da watansa, kayan aikinsa da kuɗinsa." },
          { objective: "O5", q: "Me yasa CA sau da yawa ke bar ku shuka da wuri?", options: ["Iri yana girma da sauri", "Ruwan sama yana sauka fiye da haka a gonakin CA", "Ana shirya ƙasa a lokacin rani, don haka kuna shuka da ruwan sama na farko mai kyau", "Iri ya fi arha"], answer: 2, why: "Rashin jiran huɗa yana nufin shuka a kan lokaci." },
          { objective: "O6", q: "Waɗanne abubuwa uku ne ya kamata ku rubuta don filin CA da na huɗa duka?", options: ["Launi, ƙamshi da ɗanɗano", "Ruwan sama kaɗai", "Amfanin gona, kwanakin aiki da kuɗi", "Yawan baƙi"], answer: 2, why: "Amfanin gona, aiki da kuɗi suna nuna ko CA tana biya a gonarku." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Noma Mai Kiyaye Ƙasa don Lokacin Rani da Ƙarancin Ruwa",
    questions: [
      { objective: "O1", q: "Wane jeri ne ke ba da ƙa'idoji uku na FAO na noma mai kiyaye ƙasa?", options: ["Huɗa, ƙonawa, noma amfanin gona iri ɗaya", "Ƙarancin tayar da ƙasa, rufin ƙasa na dindindin, bambancin amfanin gona", "Ban ruwa, taki, magungunan ƙwari", "Huɗa mai zurfi, ƙasa a tsiraice, amfanin gona ɗaya"], answer: 1, why: "Waɗannan su ne ƙa'idoji uku da FAO ta bayyana." },
      { objective: "O1", q: "Aƙalla nawa ne na ƙasa ya kamata ya kasance a rufe a CA, a cewar FAO?", options: ["Kashi 5 cikin 100", "Kashi 10 cikin 100", "Kashi 30 cikin 100", "Kashi 100 cikin 100 a kowane lokaci"], answer: 2, why: "FAO tana magana kan rufin dindindin na aƙalla kashi 30 cikin 100." },
      { objective: "O1", q: "Mene ne ma'anar ƙarancin tayar da ƙasa?", options: ["Tayar da ƙasa a inda iri da taki suke shiga kaɗai", "Huɗa sau ɗaya maimakon sau biyu", "Rashin shuka kwata-kwata", "Haƙa dukkan gona da hannu"], answer: 0, why: "Wurin shuka, ramin shuka ko layin ripping kaɗai ake tayarwa." },
      { objective: "O1", q: "Wane canjin amfanin gona ne ke nuna bambancin amfanin gona?", options: ["Masara, masara, masara", "Barin ƙasa a tsiraice kowace shekara", "Dawa kaɗai", "Masara, sannan wake, sannan dawa"], answer: 3, why: "Amfanin gona iri uku daban-daban a tsawon lokaci shi ne bambanci." },
      { objective: "O2", q: "Mene ne ramukan zai?", options: ["Tafkunan kifi", "Ramukan shuka da taki ko takin gida da ke tara ruwan sama", "Rumbunan hatsi", "Rijiyoyin ban ruwa"], answer: 1, why: "Ramukan zai suna tara ruwa da abinci a wurin shukar." },
      { objective: "O2", q: "Layukan ramukan shuka ya kamata su bi:", options: ["Sama da ƙasa a gangaren", "Da'ira", "Ratsa gangaren ƙasa, bin layin tudu ɗaya", "Kowace hanya"], answer: 2, why: "Layuka masu ratsa gangaren suna tara ruwa maimakon su kwarara shi ƙasa." },
      { objective: "O2", q: "Me yasa za a sake amfani da ramukan shuka iri ɗaya a damina masu zuwa?", options: ["Yana rage aiki sosai kuma yana gina ƙasa a wurare iri ɗaya", "Ba za a iya haƙa ramuka sau biyu ba", "Doka ce ta ce haka", "Sababbin ramuka suna jawo ƙwari"], answer: 0, why: "Sake amfani da ramuka ya fi sauri sosai kuma yana tara gyare-gyaren ƙasa a wuri ɗaya." },
      { objective: "O3", q: "Wane manomi ne ya fi dacewa da ramukan shuka da aka haƙa da hannu?", options: ["Manomi mai hekta 20 da tarakta", "Manomi da ba shi da ƙwadago kwata-kwata", "Manomi da ke son huɗa", "Manomi mai fartanya a ƙaramin fili"], answer: 3, why: "Ramukan shuka sun dace da ƙananan filaye da ake noma da hannu." },
      { objective: "O3", q: "Mene ne plough pan?", options: ["Tukunyar girki", "Wani nau'in iri", "Ƙaramin tafki", "Tauri a ƙasa da zurfin huɗa da ke hana saiwoyi da ruwa wucewa"], answer: 3, why: "Huɗa akai-akai tana iya kawo tauri a ƙarƙashi wanda ripper zai iya fasawa." },
      { objective: "O3", q: "Mene ne ma'anar shuka kai tsaye?", options: ["Shuka kai tsaye cikin ƙasar da ba a tayar ba da ragowar amfanin gona", "Watsa iri da hannu a ƙasar da aka huɗa", "Dasa shuke-shuke daga makarantar tsirrai (nursery)", "Sayen iri kai tsaye daga kamfani"], answer: 0, why: "Shuka kai tsaye tana sa iri ba tare da buɗe ƙasa fiye da wurin shuka ba." },
      { objective: "O4", q: "Daga ina ƙarin rufin ƙasa zai iya fitowa idan dabbobi suka cinye yawancin ragowar amfanin gona?", options: ["Ƙonawa", "Huɗa", "Haɗin shukar wake ko lablab, ciyawar gefen gona ko rassan bishiyoyi", "Ledar roba"], answer: 2, why: "Haɗin shuka, ciyawa da rassan bishiyoyi suna ƙara rufi ba tare da ɗaukar dukkan abincin dabbobi ba." },
      { objective: "O4", q: "A Najeriya, wace hukuma ce ke yi wa magungunan gona kamar na kashe ciyawa rajista?", options: ["NAFDAC", "Hukumar yanayi", "Babban banki", "Hukumar ƙwallon ƙafa"], answer: 0, why: "NAFDAC ce ke yi wa magungunan gona rajista a Najeriya; ku duba jerinta." },
      { objective: "O4", q: "Yaushe ne kawar da ciyawa ya fi muhimmanci a amfanin gonar CA?", options: ["A lokacin girbi kaɗai", "Ba taɓa ba", "Bayan fure kaɗai", "A makonnin farko bayan amfanin gona ya fito"], answer: 3, why: "Ciyawar farko ce ta fi gasa da ƙaramin amfanin gona." },
      { objective: "O4", q: "Idan kuna amfani da maganin kashe ciyawa, me dole ku yi?", options: ["Ku haɗa naku mai ƙarfi sosai", "Ku yi amfani da magani mai rajista, ku bi takardar maganin daidai, ku sa kayan kariya", "Ku fesa kusa da rijiya", "Ku bar yara su taimaka wajen fesawa"], answer: 1, why: "Magunguna masu rajista kaɗai, da aka yi amfani da su kamar yadda takarda ta ce, tare da kariya, suke lafiya kuma bisa doka." },
      { objective: "O5", q: "Wane kayan aiki ne ke sa iri ta cikin ragowar amfanin gona da hannu?", options: ["Garmar mouldboard", "Butar ban ruwa", "Jab planter", "Harrow (kayan daidaita ƙasa)"], answer: 2, why: "Jab planter kayan aikin hannu ne don shuka kai tsaye." },
      { objective: "O5", q: "Me ya kamata kowane layi na kalandar CA ya ƙunsa?", options: ["Aikin, wata, kayan aiki da kuɗi", "Sunan amfanin gona kaɗai", "Ruwan sama kaɗai", "Sunan maƙwabci"], answer: 0, why: "Aiki, wata, kayan aiki da kuɗi suna sa kalandar ta yi amfani." },
      { objective: "O5", q: "Yaushe ake haƙa ko sake amfani da ramukan shuka da sa taki?", options: ["Lokacin fure", "A lokacin rani kafin damina", "A lokacin girbi", "Bayan ruwan sama ya ɗauke"], answer: 1, why: "Shiri a lokacin rani yana bar ku shuka a ruwan sama na farko mai kyau." },
      { objective: "O6", q: "A shekarun fari, me yasa CA sau da yawa ke yin kyau fiye da huɗa?", options: ["Tana sa ruwan sama ya sauka", "Ba ta buƙatar iri", "Tana hana dukkan ƙwari", "Ramukan shuka da mulch suna tara ruwa kuma suna riƙe shi fiye da haka"], answer: 3, why: "Ƙarin ruwa yana jiƙa ciki kuma ƙasa da haka yana ƙafewa a ƙarƙashin rufi." },
      { objective: "O6", q: "Me zai iya faruwa da amfanin gona a damina ɗaya ko biyu ta farko ta CA?", options: ["Kullum yana ninkuwa", "Yana iya zama daidai ko ya ragu yayin da ciyawa ke da yawa kuma ƙasa tana sabawa", "Kullum yana faɗuwa zuwa sifili", "Ba za a iya sanin komai ba"], answer: 1, why: "Lokacin sauyi yana iya yin wuya; amfani yana ginuwa a damina da yawa." },
      { objective: "O6", q: "Me yasa za a bar filin da aka huɗa kusa da filin CA ɗinku?", options: ["Don kwatanta amfanin gona, aiki da kuɗi da adalci", "Don ciyar da shanu", "Domin doka ta ce CA tana buƙatar haka", "Don noma ciyawa"], answer: 0, why: "Filin kwatantawa yana nuna abin da CA ke yi da gaske a gonarku." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 1, 4, 7, 10, 13, 15, 17, 18] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe na shirin ku sake gwadawa.",
    criteria: [
      { name: "Ƙa'idoji uku", objective: "O1", notYet: "Shirin har yanzu yana huɗa, yana barin ƙasa a tsiraice, ko yana noma amfanin gona iri ɗaya kaɗai.", meets: "Shirin yana nuna ƙarancin tayar da ƙasa, rufi da canji ko haɗin shuka na aƙalla amfanin gona iri uku a tsawon lokaci.", exceeds: "Yana bayanin yadda ƙa'idoji uku ke taimakon juna a wannan gonar." },
      { name: "Shirya ƙasa", objective: "O3", notYet: "Ba a zaɓi hanya ba, ko babu dalilai.", meets: "An zaɓi ramukan shuka, ramukan zai, ripping ko shuka kai tsaye da aƙalla dalilai biyu (ƙwadago, dabbobin huɗa ko tarakta, ƙasa, girma).", exceeds: "Yana faɗin inda kayan aikin za su fito, kuma ya ga hanyar ko ya gwada ta." },
      { name: "Tsarin ramukan shuka ko na zai", objective: "O2", notYet: "Ramukan ba su ratsa gangaren ƙasa ba ko babu shirin taki.", meets: "Layuka masu ratsa gangaren ƙasa, ranakun haƙa a lokacin rani da taki ko takin gida a kowane rami (idan ana amfani da ramuka).", exceeds: "Ya haƙa wurin gwaji, ya auna lokacin, kuma ya lissafa ƙwadagon dukkan gonar." },
      { name: "Rufi da ciyawa", objective: "O4", notYet: "Babu shiri don ragowar amfanin gona, kiwo ko ciyawa.", meets: "Yana riƙe aƙalla kashi 30 cikin 100 na rufi, yana magance batun kiwo, kuma yana da jadawalin cire ciyawa; duk wani maganin kashe ciyawa mai rajista ne kuma ana amfani da shi kamar yadda takarda ta ce tare da kayan kariya.", exceeds: "Yana ƙara shukar rufi ko haɗin shuka da shirin hana ciyawa yin iri." },
      { name: "Kalandar damina", objective: "O5", notYet: "Wasu ayyuka babu ko ba su da ranaku.", meets: "Kowane aiki tun daga shiri a lokacin rani har zuwa girbi, da wata, kayan aiki da kuɗi.", exceeds: "Ya haɗa da kwanakin aiki da wanda zai yi kowane aiki." },
      { name: "Kwatantawa a lokacin sauyi", objective: "O6", notYet: "Babu filin kwatantawa ko bayanan da aka rubuta.", meets: "Filin kwatantawa da aka huɗa, da amfanin gona, kwanakin aiki da kuɗi da za a rubuta kowace damina.", exceeds: "Ya yi alƙawarin yanke hukunci bayan damina uku kuma ya jera abin da zai sa ya canja shirin." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka yi damina ta CA a aƙalla gona ɗaya tare da filin kwatantawa (binciken biyo baya)",
      "Amfanin gona, kwanakin aiki da kuɗi a filayen CA idan aka kwatanta da na huɗa a damina uku, musamman a shekarun fari (bayanan masu koyo)",
      "Masu koyo da har yanzu suke yin CA bayan damina uku, da girman ƙasar da suke noma da CA",
      "Maƙwabta ko 'yan ƙungiya da suka fara CA (rahotannin jami'an faɗakarwa)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Takarda da alƙalami don zanen gona da kalanda",
      "Fartanya, igiya ko sanduna da tef ko sandar da aka auna don tsara ramukan shuka",
      "Taki ko takin gida don ramukan gwaji",
      "Farashin gida ko kuɗin hayar ripper, jab planter da ƙwadago (ko lambobin misali)",
      "Kusan minti 90 gaba ɗaya, da lokacin aiki a gona don gwajin ramukan shuka"
    ],
    facilitatorNotes: [
      "Ku yi Darasi na 2 a gona: ku tsara ku haƙa wasu ramukan shuka ko ramukan zai tare, ku auna lokacin aikin.",
      "Ku gayyaci manomi da ya riga ya yi CA, ko ku shirya ziyara zuwa filin nuni, don masu koyo su ga ripping ko shuka kai tsaye suna aiki.",
      "Ku yi magana a fili game da al'adun kiwo; ku kawo makiyaya ko shugabannin al'umma cikin tattaunawar idan zai yiwu.",
      "Kada ku ba da shawarar takamaiman maganin kashe ciyawa; ku tura masu koyo zuwa jerin rajista na ƙasa da jami'in faɗakarwa, ku jaddada takardar maganin da kayan kariya.",
      "Ku faɗi gaskiya game da lokacin sauyi: ba lallai amfanin gona ya ƙaru a damina ta farko ba.",
      "Ku ba da maki ga shirin ƙarshe da ma'aunin rubric, ku bi sawu bayan kowace damina don kwatanta filaye."
    ]
  }
};
