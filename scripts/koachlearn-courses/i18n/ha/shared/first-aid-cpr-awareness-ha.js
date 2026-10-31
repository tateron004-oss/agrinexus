"use strict";

// Koach Learn course, Hausa (ha) translation of shared/first-aid-cpr-awareness.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.
// An AWARENESS course: it does NOT certify anyone. No medicine doses anywhere.

const MEDLINE_CPR = { name: "MedlinePlus (Babban Ɗakin Karatu na Magunguna na Amurka): CPR ga babba da yaro da ya fara balaga", url: "https://medlineplus.gov/ency/article/000013.htm" };
const MEDLINE_CHOKING = { name: "MedlinePlus: Shaƙewa ga babba ko yaro mai shekara sama da 1", url: "https://medlineplus.gov/ency/article/000049.htm" };
const MEDLINE_BLEEDING = { name: "MedlinePlus: Zubar jini", url: "https://medlineplus.gov/ency/article/000045.htm" };
const MEDLINE_HEART = { name: "MedlinePlus: Agajin farko na bugun zuciya (heart attack)", url: "https://medlineplus.gov/ency/article/000063.htm" };
const CDC_STROKE = { name: "CDC: Alamomin shanyewar ɓarin jiki (stroke)", url: "https://www.cdc.gov/stroke/signs-symptoms/index.html" };
const AHA_CPR = { name: "American Heart Association: Kwasa-kwasan CPR da agajin farko", url: "https://cpr.heart.org/" };
const REDCROSS = { name: "American Red Cross: Azuzuwan agajin farko, CPR da AED", url: "https://www.redcross.org/take-a-class" };
const OSHA_FIRSTAID = { name: "OSHA: Kiwon lafiya da agajin farko a wurin aiki", url: "https://www.osha.gov/medical-first-aid" };

module.exports = {
  id: "first-aid-cpr-awareness-ha",
  lang: "ha",
  translationOf: "first-aid-cpr-awareness",
  category: "Workforce Development",
  name: "Sanin Agajin Farko da CPR",
  skills: "Duba wurin da kiran 911, Matakan CPR da hannu kawai, Amfani da AED, Taimakon mai shaƙewa, Tsayar da zubar jini mai yawa, Gane bugun zuciya da shanyewar ɓarin jiki",
  outcome: "yin aiki cikin natsuwa a mintunan farko na gaggawa: duba cewa wurin lafiya ne, kiran 911 (ko lambar gaggawa ta ƙasarku), bin matakan CPR da hannu kawai da na AED, taimakon mai shaƙewa da mai zubar jini mai yawa, gane bugun zuciya ko shanyewar ɓarin jiki, da yin rajista a ajin CPR da agajin farko na fuska da fuska da ke ba da takardar shaida ta gaske.",
  about: [
    "Wannan kwas na kowa ne da yake son ya kasance a shirye don taimako: matasa masu neman aikinsu na farko, iyaye da kakanni, ma'aikatan kula da yara, abinci, shaguna, tsaro da sana'o'in hannu, da masu aikin sa-kai a ƙungiyoyin agaji da wuraren ibada. Ayyuka da yawa suna neman takardar shaidar CPR da agajin farko.",
    "Za ku koyi tsarin da ake bi a gaggawa, matakan CPR da hannu kawai (Hands-Only CPR), yadda AED yake yi muku magana har zuwa lokacin shock, da abin da za a yi idan abu ya tsaya a maƙogwaro, jini yana zuba sosai, bugun zuciya ko shanyewar ɓarin jiki. Matakan suna bin shawarwarin American Red Cross, American Heart Association da Babban Ɗakin Karatu na Magunguna na Amurka.",
    "Wannan kwas na wayar da kai ne. Yana SHIRYA ku; ba ya ba ku takardar shaidar CPR ko agajin farko. Ƙwarewar hannu ta gaske, kamar danna ƙirji zuwa zurfin da ya dace, ana koyon ta kuma a gwada ta fuska da fuska tare da ƙwararren malami, da amfani da 'yar tsana ta atisaye (manikin). Darasi na ƙarshe yana nuna muku yadda za ku sami wannan aji.",
    "Kowane darasi yana ɗaukar kusan minti biyar. Ku karanta shi, ku kalli hotunan bayani (slides), sannan ku yi aikin \"Gwada yanzu\" da takarda ko matashin kai. Akwai ɗan gwaji bayan kowane darasi, gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku yi Tsarinku na Shirin Agajin Farko da CPR a shafi ɗaya: (1) lambar gaggawarku da yadda za ku faɗi adireshinku a sarari; (2) inda AED da akwatin agajin farko mafi kusa suke a gida, wurin aiki, makaranta ko wurin ibadarku; (3) matakan gaggawa, a rubuce daga ƙwaƙwalwa a tsari daidai (duba, kira, CPR da AED, shaƙewa, zubar jini, B.E. F.A.S.T.); da (4) ajin CPR, AED da agajin farko na fuska da fuska da kuka zaɓa daga American Red Cross ko American Heart Association, tare da sunansa, wanda yake ba da takardar shaidar, inda yake, da ranar da za ku ɗauka.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Masu koyo iri-iri: matasa masu neman aikinsu na farko, manya da ke cikin ko suke shiga ayyukan da ke neman CPR da agajin farko (kula da yara, abinci, shaguna, tsaro, sana'o'in hannu, kula da marasa lafiya a gida), tsofaffi masu kula da abokin rayuwa ko jikoki, da masu aikin sa-kai a ƙungiyoyin agaji da wuraren ibada. Wasu suna magana da harshe na biyu.",
    startingPoint: "Yawancinsu sun san a kira 911 amma sukan rikice ko ba su san abin da za su yi bayan haka ba. Da yawa sun ga CPR a talabijin amma ba su taɓa yin atisaye ba. Kaɗan ne suka san inda AED mafi kusa yake ko yadda yake aiki. Wasu suna tsoron za su shiga matsala idan sun taimaka.",
    gap: "A tsayawar zuciya, shaƙewa ko zubar jini mai yawa, mintuna kaɗan na farko kafin taimako ya iso su ne mafi muhimmanci. Masu koyo suna buƙatar tsarin matakai a sarari, ƙarfin gwiwar farawa, da shirin samun takardar shaida fuska da fuska, domin ayyuka da yawa suna neman takardar shaida mai aiki daga sanannen mai ba da horo.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli (kusan aji 6)",
      "Na'urori: waya ko kwamfutar ɗakin karatu; atisaye da takarda, matashin kai ko naɗaɗɗen tawul",
      "Lokaci: darussa na minti 4 zuwa 6",
      "Tsaro: wayar da kai kawai; babu atisaye a kan mutum na gaske; ana koyon ƙwarewar hannu da samun takardar shaida fuska da fuska tare da ƙwararren malami",
      "Babu adadin magani ko shawarar likita; ku bi mai karɓar kiran 911 da ma'aikatan gaggawa",
      "Lambobin gaggawa sun bambanta a kowace ƙasa: 911 a Amurka; masu koyo a wasu ƙasashe suna amfani da lambar ƙasarsu"
    ],
    prerequisites: "Babu. Masu koyo da ke son ƙarin sani kan karanta bayanan lafiya za su iya ɗaukar kwas ɗin \"Health Literacy\" (Fahimtar Bayanan Lafiya)."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka bayyana muku wurin gaggawa da kalmomi", action: "duba ko akwai haɗari a wurin, duba ko mutumin yana amsawa, da kiran 911 ko lambar gaggawa ta ƙasarku", standard: "a tsari daidai, kuna faɗin adireshin da abin da ya faru a jimla ɗaya a sarari" },
    { id: "O2", condition: "Idan babban mutum ya faɗi kuma ba ya numfashi yadda ya kamata", action: "lissafa matakan CPR da hannu kawai da na amfani da AED", standard: "a tsari daidai, tare da wurin da hannaye suke, sauri na 100 zuwa 120 a minti ɗaya da zurfin kusan inci 2" },
    { id: "O3", condition: "Idan aka bayyana muku babban mutum da wataƙila yake shaƙewa", action: "gane alamomin shaƙewa da bayyana agajin farko", standard: "kuna bambanta mutumin da zai iya tari da magana da wanda ba zai iya ba" },
    { id: "O4", condition: "Idan akwai rauni da jini yake zuba sosai", action: "bayyana yadda ake tsayar da zubar jinin da danne shi kai tsaye da ƙarfi", standard: "kuna ambaton safar hannu ko abin kariya, dannewar da ba ta tsayawa, da ƙara mayafi a sama maimakon ɗaga na farko" },
    { id: "O5", condition: "Idan aka ba ku jerin alamomi", action: "gane alamomin gargaɗi na bugun zuciya da na shanyewar ɓarin jiki ta amfani da B.E. F.A.S.T.", standard: "kuna samun aƙalla 4 cikin 5 daidai, kuma kuna kiran 911 maimakon ku kai mutumin da mota" },
    { id: "O6", condition: "Ta amfani da mai neman aji na American Red Cross ko American Heart Association", action: "zaɓar ajin CPR, AED da agajin farko na fuska da fuska da rubuta shirin horo tare da rana", standard: "kuna ambaton sunan kwas ɗin, wanda yake ba da takardar shaidar, da ko aikinku yana buƙatarta" }
  ],
  chapters: [
    {
      name: "Babi na 1: Ku yi sauri ku sa zuciya ta ci gaba",
      lessons: [
        {
          title: "Duba, kira, kula: minti na farko",
          objectives: ["O1"],
          minutes: 5,
          goal: "Duba wurin da mutumin, sannan ku kira 911 da saƙo a sarari.",
          text: [
            "A kowace gaggawa, ku fara da kalmomi uku: duba, kira, kula. Da farko ku DUBA cewa wurin lafiya ne gare ku: motoci, wuta, hayaƙi, wutar lantarki, mutum mai fushi ko ruwa mai zurfi. Idan ba lafiya ba ne, ku tsaya nesa ku kira. Ba za ku iya taimakon kowa ba idan ku ma kun ji rauni.",
            "Sannan ku duba mutumin. Ku taɓa kafaɗarsa ku yi ihu, \"Lafiya kuwa?\" Ku kalli ƙirjinsa don ganin numfashi na yau da kullum. Haki-haki lokaci-lokaci BA numfashi na yau da kullum ba ne.",
            "Bayan haka ku KIRA 911 (ko lambar gaggawa ta ƙasarku idan ba a Amurka kuke ba). Idan akwai wani tare da ku, ku nuna shi ku ce, \"Kai, ka kira 911 ka kawo AED.\" Ku saka wayar a lasifika (speaker). Ku fara faɗin adireshin, sannan abin da ya faru, kuma kada ku katse wayar har sai mai karɓar kiran ya ce ku katse. Mai karɓar kiran zai iya koya muku CPR mataki-mataki.",
            "Sannan ku KULA: ku ba da taimakon da za ku iya har sai ƙwararrun masu taimako sun iso. Ku yi amfani da safar hannu ko abin kariya idan kuna da su. Jihohi da yawa a Amurka suna da dokokin Good Samaritan da ke kare mutanen da suka taimaka da kyakkyawar niyya; bayanai sun bambanta daga jiha zuwa jiha."
          ],
          steps: ["Duba wurin: shin lafiya ne gare ni?", "Duba mutumin: taɓa shi, yi ihu \"Lafiya kuwa?\", nemi numfashi na yau da kullum.", "Kira 911 (ko lambar ƙasarku), ko nuna mutum ɗaya ya kira wani kuma ya kawo AED.", "Waya a lasifika: adireshi da farko, sannan abin da ya faru. Kada ku katse.", "Kula: ku taimaka har sai ƙwararrun masu taimako sun iso."],
          words: [["Mai karɓar kiran gaggawa (dispatcher)", "ƙwararren mutum da ke amsa kiran 911, yake aika taimako kuma zai iya faɗa muku abin da za ku yi."], ["Rashin amsawa (unresponsive)", "mutumin da ba ya motsi, ba ya buɗe idanu kuma ba ya amsawa idan kun taɓa shi kuka yi ihu."], ["Dokar Good Samaritan", "dokar jiha da ke kare mutanen da suka taimaka a gaggawa da kyakkyawar niyya; bayanai sun bambanta daga jiha zuwa jiha."]],
          slides: [
            { title: "Duba, kira, kula", bullets: ["Duba: shin wurin lafiya ne? Shin mutumin yana amsawa?", "Kira: 911 ko lambar gaggawa ta ƙasarku", "Kula: ku taimaka har sai ƙwararru sun iso"] },
            { title: "Duba mutumin", bullets: ["Ku taɓa kafaɗa ku yi ihu \"Lafiya kuwa?\"", "Ku kalli ƙirji don ganin numfashi na yau da kullum", "Haki-haki BA numfashi na yau da kullum ba ne"] },
            { title: "Ku kira a sarari", bullets: ["Ku nuna mutum ɗaya: \"Kai, ka kira 911\"", "Ku ce wani ya kawo AED", "Adireshi da farko, sannan abin da ya faru", "Kada ku katse; mai karɓar kiran yana taimaka muku"] }
          ],
          sources: [MEDLINE_CPR, REDCROSS],
          tryIt: "Ku rubuta jimla ɗaya da za ku faɗa wa 911 daga gidanku: cikakken adireshinku tare da titin da ya fi kusa, sannan \"wani mutum ya faɗi kuma ba ya numfashi\". Ku karanta ta da babbar murya sau biyu har sai kun iya faɗinta ba tare da kallo ba.",
          youCanNow: "duba wurin da mutumin, da kiran 911 da saƙo a sarari.",
          quickCheck: [
            { objective: "O1", q: "Kun ga wani mutum kwance a hanya kuma motoci suna wucewa. Me za ku fara yi?", options: ["Gudu zuwa gare shi nan take", "Tabbatar cewa wurin lafiya ne gare ku, sannan ku kira 911", "Fara CPR a tsakiyar hanya", "Ɗaukar bidiyonsa"], answer: 1, why: "Duba cewa wurin lafiya ne shi ne na farko; idan ba lafiya ba ne, ku tsaya nesa ku kira." },
            { objective: "O1", q: "A kiran 911, me za ku fara faɗi?", options: ["Labarin rayuwarku", "Tarihin lafiyar mutumin", "Adireshi ko wurin da kuke", "Samfurin wayarku"], answer: 2, why: "Adireshi yana zuwa da farko don a aika taimako ko da kiran ya yanke." }
          ]
        },
        {
          title: "CPR da hannu kawai: ku danna da ƙarfi da sauri",
          objectives: ["O2"],
          minutes: 6,
          goal: "Lissafa matakan CPR da hannu kawai a tsari daidai.",
          text: [
            "Idan babban mutum ya faɗi farat ɗaya, ba ya amsawa kuma ba ya numfashi yadda ya kamata, wataƙila zuciyarsa ta tsaya. Ana kiran wannan tsayawar zuciya (cardiac arrest). CPR yana tura jini zuwa ƙwaƙwalwa har sai AED da ma'aikatan gaggawa sun iso.",
            "American Heart Association tana koyar da CPR da hannu kawai ga duk wanda ba a horar da shi ba ko ba shi da ƙarfin gwiwar ba da numfashi: ku kira 911, sannan ku danna da ƙarfi da sauri a tsakiyar ƙirji. Ba sai kun duba bugun jijiya ba sai dai idan ku ma'aikacin lafiya ne.",
            "Ku durƙusa kusa da mutumin a kan wuri mai tauri da lebur. Ku sa ƙasan tafin hannu ɗaya a tsakiyar ƙirji, ɗayan hannun a samansa, hannaye a miƙe, kafaɗunku a saman hannayenku. Ku danna ƙasa kusan inci 2 (santimita 5), sau 100 zuwa 120 a minti ɗaya, kuma ku bar ƙirjin ya dawo sama gaba ɗaya kowane lokaci.",
            "Ku ci gaba har sai AED ya shirya, ƙwararrun masu taimako sun karɓa, ko mutumin ya fara numfashi yadda ya kamata. CPR yana gajiyarwa: idan wani kuma ya iya, ku canja kusan kowane minti biyu ba tare da tsayawa sosai ba. A aji za ku yi atisayen zurfin a kan manikin; kada ku taɓa yin atisaye a kan mutum na gaske."
          ],
          steps: ["Ba ya amsawa kuma ba ya numfashi yadda ya kamata: ku kira 911 ku aika a kawo AED.", "Ku kwantar da mutumin a bayansa a kan wuri mai tauri da lebur.", "Ƙasan tafin hannu ɗaya a tsakiyar ƙirji, ɗayan hannun a sama.", "Hannaye a miƙe, kafaɗu a saman hannaye.", "Ku danna kusan inci 2 zurfi, sau 100 zuwa 120 a minti ɗaya; ku bar ƙirjin ya tashi gaba ɗaya.", "Kada ku tsaya har sai AED, ƙwararrun masu taimako, ko numfashi na yau da kullum."],
          words: [["CPR", "cardiopulmonary resuscitation (farfaɗo da zuciya da huhu): danna ƙirji (da kuma wani lokaci ba da numfashi) da ke sa jini ya ci gaba da gudu idan zuciya ta tsaya."], ["Tsayawar zuciya (cardiac arrest)", "lokacin da zuciya ta daina tura jini farat ɗaya; mutumin yana faɗuwa kuma ba ya numfashi yadda ya kamata."], ["Dannawa (compression)", "danna ƙirji ƙasa sau ɗaya."], ["Manikin", "'yar tsana ta atisaye da ake amfani da ita a azuzuwan CPR."]],
          slides: [
            { title: "Yaushe za a fara CPR", bullets: ["Babban mutum ya faɗi kuma ba ya amsawa", "Ba ya numfashi yadda ya kamata, ko haki-haki kawai", "Ku fara kiran 911 ku aika a kawo AED"] },
            { title: "Hannaye a wurin da ya dace", bullets: ["Ƙasan tafin hannu ɗaya a tsakiyar ƙirji", "Ɗayan hannun a sama", "Hannaye a miƙe, kafaɗu a saman hannaye"] },
            { title: "Da ƙarfi da sauri", bullets: ["Kusan inci 2 (santimita 5) zurfi", "Dannawa 100 zuwa 120 a minti ɗaya", "Ku bar ƙirjin ya dawo sama gaba ɗaya"] },
            { title: "Ku ci gaba", bullets: ["Har sai AED ya shirya ko taimako ya karɓa", "Ku canja da mai taimako kusan kowane minti 2", "Ku yi atisayen zurfi a kan manikin a aji"] }
          ],
          sources: [MEDLINE_CPR, AHA_CPR],
          tryIt: "Ku durƙusa kusa da matashin kai mai tauri ko naɗaɗɗen tawul a ƙasa (kada ku taɓa yi a kan mutum). Ku sa hannayenku kamar yadda aka nuna, hannaye a miƙe. Ku saita agogon waya na daƙiƙa 30 ku ƙirga dannawarku da babbar murya. Ku yi niyyar dannawa 50 zuwa 60 a daƙiƙa 30, wanda ya yi daidai da 100 zuwa 120 a minti ɗaya.",
          youCanNow: "lissafa matakan CPR da hannu kawai da kiyaye sauri da ya dace.",
          quickCheck: [
            { objective: "O2", q: "Ina hannayenku suke zuwa a CPR na babban mutum?", options: ["A kan ciki", "A kan kafaɗar hagu", "A kan wuya", "A tsakiyar ƙirji"], answer: 3, why: "Ƙasan tafin hannu ɗaya yana zuwa tsakiyar ƙirji, ɗayan hannun a samansa." },
            { objective: "O2", q: "Da wane sauri kuke dannawa a CPR?", options: ["Sau 100 zuwa 120 a minti ɗaya", "Kusan sau 20 a minti ɗaya", "Sau ɗaya kowace daƙiƙa 10", "A hankali yadda za ku iya"], answer: 0, why: "Shawarar ita ce dannawa 100 zuwa 120 a minti ɗaya, kuna barin ƙirjin ya tashi kowane lokaci." }
          ]
        },
        {
          title: "Amfani da AED, da abin da cikakken ajin CPR yake ƙarawa",
          objectives: ["O2"],
          minutes: 5,
          goal: "Lissafa matakan amfani da AED tare da CPR.",
          text: [
            "AED (automated external defibrillator, na'urar girgiza zuciya) ƙaramin akwati ne da zai iya girgiza zuciya (shock) ta dawo bugunta na yau da kullum. Ana samun su a makarantu, wuraren motsa jiki, filayen jirgin sama, ofisoshi, manyan kantuna da wuraren ibada, sau da yawa a cikin akwatin bango mai alamar zuciya da walƙiya.",
            "An yi AED ne don mutanen da ba su da horo. Ku kunna shi, zai yi muku magana. Ku buɗe ƙirji, ku goge shi ya bushe, ku liƙa pads a inda hotunan suka nuna, kuma ku haɗa waya idan ana buƙata. Kowa ya tsaya nesa yayin da yake duba zuciya. Idan ya ce a ba da shock, ku tabbatar babu wanda yake taɓa mutumin ku danna maɓallin. Sannan ku koma CPR nan take, kamar yadda AED ya faɗa muku.",
            "Ku yi amfani da AED da zarar ya iso, kuma ku bi muryarsa daidai. Kada ku daina CPR don ku je nema da kanku idan wani zai iya kawo shi.",
            "A cikakken ajin CPR kuma za ku koyi ba da numfashi: dannawa 30, sannan numfashi 2, a maimaita. Za ku kuma koyi CPR na yara da jarirai, wanda ya bambanta. Ku yi atisayen waɗannan matakan a aji tare da malami."
          ],
          steps: ["Ku ci gaba da CPR yayin da wani yake kawo AED.", "Ku kunna AED ku saurara.", "Ku buɗe ƙirji ku busar da shi; ku liƙa pads a inda hotunan suka nuna.", "Ku tsaya nesa yayin da yake duba; kada kowa ya taɓa mutumin.", "Idan ya ce shock: kowa ya tsaya nesa, ku danna maɓallin.", "Ku koma CPR nan take kamar yadda ya faɗa muku."],
          words: [["AED", "automated external defibrillator: akwati da ke duba zuciya kuma, idan ana buƙata, yana ba da girgiza (shock) don dawo da bugunta. Yana yi muku magana a kowane mataki."], ["Pads", "faya-fayai masu manne da waya da ake liƙawa a ƙirji a buɗe, don AED ya duba zuciya ya kuma girgiza ta."], ["Ba da numfashi (rescue breaths)", "numfashin da kuke hura wa mutum a baki yayin CPR; ana koyon sa a cikakken aji."]],
          slides: [
            { title: "Abin da AED yake yi", bullets: ["Yana duba bugun zuciya", "Yana ba da shock ne kawai idan ana buƙata", "Yana yi muku magana a kowane mataki"] },
            { title: "Matakan AED", bullets: ["Ku kunna shi ku saurara", "Ƙirji a buɗe kuma a bushe; pads a inda hotuna suka nuna", "Ku tsaya nesa yayin da yake duba"] },
            { title: "Idan ya ce shock", bullets: ["Ku tabbatar babu wanda yake taɓa mutumin", "Ku danna maɓallin shock", "Ku koma CPR nan take"] },
            { title: "Cikakken aji yana ƙara", bullets: ["Ba da numfashi: dannawa 30, sannan numfashi 2", "CPR na yara da jarirai", "Atisayen hannu tare da malami"] }
          ],
          sources: [MEDLINE_CPR, AHA_CPR, REDCROSS],
          tryIt: "Ku gano inda AED mafi kusa yake a wurin aikinku, makaranta, wurin motsa jiki ko wurin ibada. Ku tambayi shugaba ko ku nemi alamarsa. Ku rubuta ainihin inda yake, kuma ku zana wuraren pads guda biyu a kan zanen mutum daga ƙwaƙwalwa.",
          youCanNow: "lissafa matakan amfani da AED tare da CPR da faɗin inda mafi kusa yake.",
          quickCheck: [
            { objective: "O2", q: "AED ya ce a ba da shock. Me za ku yi kafin ku danna maɓallin?", options: ["Riƙe hannun mutumin", "Cire pads", "Tabbatar cewa babu wanda yake taɓa mutumin", "Ba mutumin ruwa"], answer: 2, why: "Dole kowa ya tsaya nesa don shock ya tafi ga mutumin kawai." },
            { objective: "O2", q: "AED ya ba da shock. Me ya biyo baya?", options: ["Jira motar asibiti cikin shiru", "Komawa CPR kamar yadda AED ya faɗa", "Kashe AED", "Zaunar da mutumin"], answer: 1, why: "Bayan shock kuna komawa CPR nan take, kuna bin muryar AED." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Ku yi sauri ku sa zuciya ta ci gaba",
        questions: [
          { objective: "O1", q: "Waɗanne kalmomi uku ne na farko a kowace gaggawa?", options: ["Jira, kalla, tafi", "Duba, kira, kula", "Gudu, ɓuya, faɗa", "Tambaya, ɗauki bidiyo, saka a intanet"], answer: 1, why: "Ku duba wurin da mutumin, ku kira 911, sannan ku kula har sai taimako ya iso." },
          { objective: "O1", q: "Mutane uku suna kallon wata mace da ta faɗi. Ta yaya za ku sami taimako da sauri?", options: ["Ku nuna mutum ɗaya: \"Kai, ka kira 911,\" ku kuma ce wani ya kawo AED", "Ku yi ihu \"Wani ya kira!\" ga taron jama'a", "Ku jira wani ya yi", "Ku saka a kafofin sada zumunta"], answer: 0, why: "Ba mutum ɗaya aiki a sarari yana hana kowa tunanin cewa wani ya riga ya kira." },
          { objective: "O2", q: "Zurfin nawa za ku danna ƙirjin babban mutum a CPR?", options: ["Taɓawa kaɗan kawai", "Kusan rabin inci", "Zurfin da ya fi duk yadda za ku iya", "Kusan inci 2 (santimita 5)"], answer: 3, why: "Dannawa ga babban mutum kusan inci 2 ne zurfi, kuna barin ƙirjin ya dawo sama." },
          { objective: "O2", q: "Yaushe ya kamata ku fara CPR da hannu kawai a kan babban mutum?", options: ["Idan yana magana amma ya gaji", "Idan ba ya amsawa kuma ba ya numfashi yadda ya kamata", "Idan yana da ƙaramin yanka", "Idan yana tari sosai"], answer: 1, why: "CPR na wanda ba ya amsawa ne kuma ba ya numfashi yadda ya kamata, ko haki-haki kawai." },
          { objective: "O2", q: "Wa zai iya amfani da AED?", options: ["Kowa; yana yi muku magana a kowane mataki", "Likitoci kawai", "'Yan kwana-kwana kawai", "Mutanen da suka haura shekara 30 kawai"], answer: 0, why: "An gina AED don mutanen da ba su da horo kuma yana ba da umarni da murya." }
        ]
      }
    },
    {
      name: "Babi na 2: Gaggawar da aka saba gani da samun takardar shaida",
      lessons: [
        {
          title: "Shaƙewa da zubar jini mai yawa",
          objectives: ["O3", "O4"],
          minutes: 6,
          goal: "Gane shaƙewa, da bayyana yadda ake tsayar da zubar jini mai yawa ta danne shi kai tsaye.",
          text: [
            "Shaƙewa: mutum zai iya kama maƙogwaronsa, ya kasa magana, ya yi tari mara ƙarfi, ya yi ƙara mai siriri ko launinsa ya fara zama shuɗi. Ku tambaya, \"Kuna shaƙewa ne? Za ku iya magana?\" Idan zai iya yin tari da ƙarfi kuma yana magana, kada ku buge shi; ku ce ya ci gaba da tari.",
            "Idan ba zai iya magana, tari ko numfashi ba, ku sa wani ya kira 911. Shawarar Amurka tana nuna hanyoyi biyu na fitar da abin: bugu da ƙarfi tsakanin kafaɗu da ƙasan tafin hannu (back blows), da tura ciki zuwa sama da sauri ɗan sama da cibiya (abdominal thrusts). Mata masu ciki ko mutane masu girma sosai ana yi musu tura ƙirji maimakon haka. Idan mutumin ya suma, ku kira 911, ku sauke shi ƙasa ku fara CPR. Ku koyi waɗannan motsin ku yi atisayensu a aji; kada ku yi atisayen tura ciki a kan mutum na gaske.",
            "Zubar jini mai yawa: ku kira 911. Ku sa safar hannu idan kuna da ita, ko ku yi amfani da leda a matsayin abin kariya. Ku danna da ƙarfi, daidai a kan raunin, da tsabtataccen kyalle, gauze ko ma wani tufafi, kuma ku ci gaba da dannawa. Kada ku ɗaga shi don ku duba. Idan jini ya jiƙa shi, ku ƙara kyalle a sama ku ci gaba da dannawa.",
            "Kada ku cire abin da ya maƙale a cikin rauni; ku sa kyalle a kewaye da shi. Tourniquet na zubar jini ne mai barazana ga rai a hannu ko ƙafa idan danne shi bai isa ba; azuzuwan Stop the Bleed da na agajin farko suna koyar da yadda ake amfani da shi."
          ],
          steps: ["Shaƙewa: ku tambaya \"Kuna shaƙewa ne? Za ku iya magana?\"", "Yana iya tari da magana: ku bar shi ya ci gaba da tari.", "Ba zai iya magana ko numfashi ba: ku kira 911 ku ba da agajin farko da kuka koya a aji (back blows da abdominal thrusts).", "Ya suma: ku sauke shi ƙasa, ku fara CPR.", "Zubar jini: ku kira 911, safar hannu ko abin kariya, ku danna da ƙarfi a kan raunin da tsabtataccen kyalle.", "Ya jiƙe: ku ƙara kyalle a sama; kada ku ɗaga na farko."],
          words: [["Abdominal thrusts (tura ciki)", "tura ciki zuwa sama da sauri ɗan sama da cibiya don fitar da abin da ya toshe hanya; wani lokaci ana kiran sa Heimlich maneuver."], ["Back blows (bugun baya)", "bugu da ƙarfi tsakanin kafaɗu da ƙasan tafin hannu don sassauta abin da ya toshe hanya."], ["Danne shi kai tsaye (direct pressure)", "danna da ƙarfi daidai a kan rauni don rage zubar jini da tsayar da shi."], ["Tourniquet", "ƙyalle ko bel mai matsewa da ake ɗaurawa a hannu ko ƙafa sama da rauni don tsayar da zubar jini mai barazana ga rai; ana koyar da shi a aji."]],
          slides: [
            { title: "Alamomin shaƙewa", bullets: ["Yana kama maƙogwaro, ba ya iya magana", "Tari mara ƙarfi ko ƙara mai siriri", "Launinsa yana zama shuɗi"] },
            { title: "Shaƙewa: abin da za a yi", bullets: ["Yana iya tari da magana: ku bar shi ya yi tari", "Ba ya iya magana: ku kira 911, back blows da thrusts", "Ya suma: ku sauke shi ƙasa, ku fara CPR"] },
            { title: "Zubar jini mai yawa", bullets: ["Ku kira 911; safar hannu ko abin kariya", "Ku danna da ƙarfi, daidai a kan raunin", "Ya jiƙe: ku ƙara kyalle, ku ci gaba da dannawa"] },
            { title: "Kada ku", bullets: ["Kada ku ɗaga kyallen don ku duba", "Kada ku cire abin da ya maƙale", "Kada ku yi atisayen tura ciki a kan mutum na gaske"] }
          ],
          sources: [MEDLINE_CHOKING, MEDLINE_BLEEDING, REDCROSS],
          tryIt: "Ku sa tawul naɗaɗɗe a kan hannunku. Ku danna ƙasa da ƙarfi da tafin hannunku na daƙiƙa 60 bisa agogo ba tare da ɗagawa ba. Sannan ku ƙara tawul na biyu a sama ku ci gaba da dannawa. Ku rubuta layi biyu: yadda yake da wuya a ci gaba da dannawa, da alamomin shaƙewa guda uku daga wannan darasi.",
          youCanNow: "gane alamomin shaƙewa da tsayar da zubar jini mai yawa ta danne shi kai tsaye da ƙarfi.",
          quickCheck: [
            { objective: "O3", q: "Wata mace a wurin cin abinci tana tari sosai kuma har yanzu tana iya magana. Me za ku yi?", options: ["Buge bayanta da ƙarfi nan take", "Yi mata abdominal thrusts", "Ƙarfafa ta ta ci gaba da tari ku zauna tare da ita", "Kwantar da ita a ƙasa"], answer: 2, why: "Idan mutum yana iya tari da ƙarfi kuma yana magana, ku bar shi ya ci gaba da tari; kada ku buge shi." },
            { objective: "O4", q: "Jini ya jiƙa kyallen da kuke dannawa a kan rauni. Me za ku yi?", options: ["Ɗaga kyallen don ku duba", "Daina dannawa", "Wanke raunin da ruwa", "Ƙara kyalle a sama ku ci gaba da dannawa"], answer: 3, why: "Ƙara kyalle yana ci gaba da dannewa; ɗaga kyallen zai iya sake buɗe zubar jinin." }
          ]
        },
        {
          title: "Gane bugun zuciya da shanyewar ɓarin jiki",
          objectives: ["O5"],
          minutes: 5,
          goal: "Gane alamomin gargaɗi na bugun zuciya da na shanyewar ɓarin jiki.",
          text: [
            "Bugun zuciya (heart attack) shi ne lokacin da gudun jini zuwa wani sashe na zuciya ya toshe. Alamomin da aka saba gani: ciwo ko nauyi a ƙirji da zai iya bazuwa zuwa muƙamuƙi, hannu, baya ko ciki, ƙarancin numfashi, gumi mai sanyi, jin tashin zuciya ko jiri, da gajiya da ba a saba gani ba. Mata, tsofaffi da masu ciwon sukari na iya samun alamomi masu sauƙi ko daban.",
            "Idan kuna tsammanin bugun zuciya ne, ku kira 911 nan take. Kada ku jira ku ga ko zai wuce, kuma kada ku bar mutumin ya hana ku kira. Ku zaunar da shi ya huta, ku sassauta tufafi masu matsewa, kuma ku zauna tare da shi. Kada ku ba da wani magani sai dai idan maganinsa ne da likita ya rubuta masa ko mai karɓar kiran 911 ya ce ku ba da shi. Idan ya daina amsawa kuma ya daina numfashi yadda ya kamata, ku fara CPR ku yi amfani da AED.",
            "Shanyewar ɓarin jiki (stroke) ita ce lokacin da gudun jini zuwa wani sashe na ƙwaƙwalwa ya toshe ko wata jijiyar jini ta fashe. CDC tana koyar da B.E. F.A.S.T.: Balance (daidaito: jiri ko rasa daidaito farat ɗaya), Eyes (idanu: matsalar gani farat ɗaya), Face (fuska: ku ce ya yi murmushi; shin gefe ɗaya ya faɗi?), Arms (hannaye: ku ce ya ɗaga hannaye biyu; shin ɗaya yana saukowa?), Speech (magana: shin tana gurɓace ko baƙuwa?), Time (lokaci: ku kira 911 nan take).",
            "Ku lura da lokacin da alamomin suka fara ku faɗa wa ma'aikatan gaggawa. Ku kira motar asibiti; kada ku kai mutumin asibiti da motarku da kanku."
          ],
          steps: ["Alamomin bugun zuciya: ciwo ko nauyi a ƙirji, ƙarancin numfashi, gumi mai sanyi, tashin zuciya, jiri.", "Ku kira 911 nan take; ku zaunar da shi, ku sassauta tufafi, ku zauna tare da shi.", "Babu magani sai dai nasa ne ko mai karɓar kiran ya ce a ba da shi.", "Shanyewar ɓarin jiki: ku duba B.E. F.A.S.T.", "Ku lura da lokacin da alamomin suka fara; ku kira motar asibiti, kada ku kai shi da mota."],
          words: [["Bugun zuciya (heart attack)", "lokacin da gudun jini zuwa wani sashe na zuciya ya toshe; yawanci mutumin yana farke kuma yana jin ciwo ko nauyi a ƙirji."], ["Shanyewar ɓarin jiki (stroke)", "lokacin da gudun jini zuwa wani sashe na ƙwaƙwalwa ya toshe ko wata jijiyar jini a ƙwaƙwalwa ta fashe."], ["B.E. F.A.S.T.", "Balance (daidaito), Eyes (idanu), Face (fuska), Arms (hannaye), Speech (magana), Time (lokaci): hanyar gane shanyewar ɓarin jiki da tuna kiran 911."]],
          slides: [
            { title: "Alamomin bugun zuciya", bullets: ["Ciwo ko nauyi a ƙirji; zai iya bazuwa zuwa muƙamuƙi, hannu, baya", "Ƙarancin numfashi, gumi mai sanyi, tashin zuciya", "Mata da tsofaffi na iya samun alamomi masu sauƙi"] },
            { title: "Bugun zuciya: abin da za a yi", bullets: ["Ku kira 911 yanzu; kada ku jira", "Zaunawa, hutawa, sassauta tufafi, ku zauna tare da shi", "Babu magani sai nasa ne ko mai karɓar kiran ya ce"] },
            { title: "Shanyewar ɓarin jiki: B.E. F.A.S.T.", bullets: ["Balance da Eyes: jiri ko matsalar gani farat ɗaya", "Face ta faɗi, Arm yana saukowa, Speech ta gurɓace", "Time: ku kira 911 nan take"] },
            { title: "Lokaci yana da muhimmanci", bullets: ["Ku lura da lokacin da alamomin suka fara", "Ku kira motar asibiti; kada ku kai shi da mota"] }
          ],
          sources: [MEDLINE_HEART, CDC_STROKE],
          tryIt: "Ku rubuta B.E. F.A.S.T. ƙasa-ƙasa a gefen shafi. Kusa da kowane harafi, ku rubuta tambaya ko gwajin da za ku yi, daga ƙwaƙwalwa. Sannan ku koya wa aboki ko ɗan uwa ɗaya cikin ƙasa da minti ɗaya.",
          youCanNow: "gane alamomin gargaɗi na bugun zuciya da na shanyewar ɓarin jiki da kiran 911 da sauri.",
          quickCheck: [
            { objective: "O5", q: "Murmushin kawunku ya faɗi a gefe ɗaya kuma maganarsa ta gurɓace. Me za ku yi?", options: ["Ku kira 911 nan take ku lura da lokacin", "Ku bar shi ya kwanta ya yi barci", "Ku kai shi asibiti da motarku da kanku", "Ku ba shi maganin ciwo"], answer: 0, why: "Waɗannan alamomin shanyewar ɓarin jiki ne; ku kira 911 nan take, ku lura da lokacin, ku bar motar asibiti ta ɗauke shi." },
            { objective: "O5", q: "Wanne ne alamar bugun zuciya da aka saba gani?", options: ["Ƙaramin yanka a hannu", "Ciwo ko nauyi a ƙirji da ke bazuwa zuwa hannu ko muƙamuƙi", "Atishawa", "Ƙaiƙayi a ƙafa"], answer: 1, why: "Ciwo ko nauyi a ƙirji da zai iya bazuwa alama ce da aka saba gani ta bugun zuciya." }
          ]
        },
        {
          title: "Samun takardar shaida: shirinku na shiri",
          objectives: ["O6"],
          minutes: 5,
          goal: "Zaɓar ajin CPR da agajin farko na fuska da fuska da rubuta shirin horo tare da rana.",
          text: [
            "Wannan kwas yana ba da wayar da kai, ba takardar shaida ba. Masu ɗaukar aiki da ke neman CPR da agajin farko yawanci suna son kati daga sanannen mai ba da horo. A Amurka mafi shahara su ne American Red Cross da American Heart Association. Dukansu suna da mai neman aji a shafukansu na intanet.",
            "Ku zaɓi ajin da ya dace da hanyarku. Ayyuka da yawa na wurin aiki da na al'umma (kula da yara, horar da 'yan wasa, tsaro, abinci, ƙungiyoyin agaji) suna karɓar ajin First Aid, CPR da AED na manya da yara. Ayyukan kiwon lafiya (mataimakin nas, EMT, ɗaliban kantin magani da na likitanci) yawanci suna buƙatar Basic Life Support (BLS). Ku tambayi mai ɗaukar aikinku ko shirinku wanne suke karɓa kafin ku biya.",
            "Azuzuwa da yawa haɗaka ne: wani sashe ta intanet, sannan zaman gwajin ƙwarewa fuska da fuska tare da malami da manikin. Ajin da ke ta intanet kawai babu gwajin hannu ba za a karɓe shi ba watakila. Farashi, tsawon aji da tsawon lokacin da katin yake aiki sun bambanta: ku duba shafin mai ba da horon da ranar da ke kan katinku, kuma ku sabunta kafin ya ƙare.",
            "Ku tambayi azuzuwa kyauta ko masu araha: wasu masu ɗaukar aiki, shirye-shiryen horar da ma'aikata, ofisoshin kwana-kwana, asibitoci da ƙungiyoyin al'umma suna ba da su. OSHA (hukumar tsaro da lafiya a wurin aiki ta Amurka) ta ce dole masu ɗaukar aiki su sami mutanen agajin farko da kayayyakin da suka dace da haɗarin wurin aikin."
          ],
          steps: ["Ku tambayi mai ɗaukar aikinku ko shirinku wane aji suke karɓa (misali First Aid, CPR da AED, ko BLS).", "Ku buɗe mai neman aji na Red Cross ko American Heart Association.", "Ku zaɓi aji na fuska da fuska ko haɗaka kusa da ku.", "Ku rubuta sunan kwas ɗin, wanda yake ba da katin, wuri, rana da farashi.", "Ku saka ranar a kalandarku ku saita tunatarwa kafin katin ya ƙare."],
          words: [["Katin shaida (certification card)", "shaida daga mai ba da horo cewa kun ci gwajin ƙwarewa; masu ɗaukar aiki suna neman ganin sa."], ["BLS", "Basic Life Support: ajin CPR na ma'aikatan lafiya da ɗalibai."], ["Koyo haɗaka (blended learning)", "ajin da wani sashe yake ta intanet wani kuma fuska da fuska, tare da gwajin ƙwarewar hannu."], ["Na yara (pediatric)", "don yara da jarirai."]],
          slides: [
            { title: "Wannan kwas na wayar da kai ne", bullets: ["Yana shirya ku; ba ya ba ku takardar shaida", "Takardar shaida tana zuwa daga sanannen mai ba da horo", "A Amurka: American Red Cross, American Heart Association"] },
            { title: "Ku zaɓi ajin da ya dace", bullets: ["Yawancin ayyuka: First Aid, CPR da AED (manya da yara)", "Kiwon lafiya: Basic Life Support (BLS)", "Ku tambayi mai ɗaukar aikinku wanne suke karɓa"] },
            { title: "Kafin ku yi rajista", bullets: ["Yana buƙatar gwajin ƙwarewa fuska da fuska", "Ku duba farashi, tsawo da tsawon lokacin da katin yake aiki", "Ku tambayi azuzuwa kyauta ko masu araha"] }
          ],
          sources: [REDCROSS, AHA_CPR, OSHA_FIRSTAID],
          tryIt: "Aikin ƙarshe: ku yi Tsarinku na Shirin Agajin Farko da CPR a shafi ɗaya. Ku rubuta lambar gaggawarku da jimlar adireshinku, inda AED da akwatin agajin farko mafi kusa suke, matakan gaggawa daga ƙwaƙwalwa, da ajin fuska da fuska da kuka samu a shafin Red Cross ko AHA: suna, wanda yake ba da shi, wuri da rana.",
          youCanNow: "zaɓar sanannen ajin CPR da agajin farko na fuska da fuska da tsara lokacin da za ku ɗauke shi.",
          quickCheck: [
            { objective: "O6", q: "Kun gama wannan kwas na wayar da kai. Me yake ba ku?", options: ["Katin CPR da dole mai ɗaukar aikinku ya karɓa", "Lasisin aikin nas", "Ilimi da ke shirya ku don ajin takardar shaida na fuska da fuska", "Izinin koyar da CPR"], answer: 2, why: "Wannan kwas yana shirya ku; takardar shaida tana zuwa daga ajin fuska da fuska na sanannen mai ba da horo." },
            { objective: "O6", q: "Kuna fara shirin mataimakin nas. Wane ajin CPR ne suka fi so?", options: ["Bidiyo ta intanet kawai babu gwajin ƙwarewa", "Babu aji kwata-kwata", "Aji daga wani saƙo a kafofin sada zumunta", "Basic Life Support (BLS), bayan kun tabbatar da shirin"], answer: 3, why: "Shirye-shiryen kiwon lafiya yawanci suna buƙatar BLS; ku tambayi shirin ya tabbatar da wanda suke karɓa." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Gaggawar da aka saba gani da samun takardar shaida",
        questions: [
          { objective: "O3", q: "Wani mutum ya kama maƙogwaronsa kuma ba ya iya magana ko tari. Me za ku yi?", options: ["Jira har ya ji sauƙi", "Ku sa wani ya kira 911 ku ba da agajin farko na shaƙewa", "Ku ba shi ruwa ya sha", "Ku ce ya kwanta ya huta"], answer: 1, why: "Mutumin da ba ya iya magana ko tari ya shaƙe sosai; ku kira 911 ku ɗauki mataki." },
          { objective: "O4", q: "Mene ne abu na farko da za a yi wa yanka mai zurfi da yake zubar da jini sosai (bayan kiran 911)?", options: ["Danna da ƙarfi, daidai a kan raunin, da tsabtataccen kyalle", "Bar shi ya zubar da jini don ya tsabtace", "Saka ƙanƙara a kai", "Ce wa mutumin ya yi yawo"], answer: 0, why: "Danne shi kai tsaye da ƙarfi ita ce babbar hanyar tsayar da zubar jini mai yawa." },
          { objective: "O4", q: "Wani gilashi ya maƙale a cikin rauni. Me ya kamata ku yi?", options: ["Cire shi da sauri", "Tura shi ciki sosai", "Bar shi a ciki ku sa kyalle a kewaye da shi", "Zuba ruwa a kai har ya fita"], answer: 2, why: "Cire shi zai iya ƙara zubar jini; ku sa kyalle a kewaye ku bar ƙwararru su cire shi." },
          { objective: "O5", q: "A B.E. F.A.S.T., me harafin A yake nufi?", options: ["Allergy (rashin jituwar jiki)", "Address (adireshi)", "Ambulance (motar asibiti)", "Arms (hannaye): shin hannu ɗaya yana saukowa?"], answer: 3, why: "A na Arms (hannaye) ne: ku ce mutumin ya ɗaga hannaye biyu ku gani ko ɗaya yana saukowa." },
          { objective: "O6", q: "Wace ce hanya mafi kyau ta samun takardar shaidar CPR da aiki zai karɓa?", options: ["Aji na fuska da fuska ko haɗaka daga Red Cross ko AHA", "Kallon bidiyo ta intanet babu gwaji", "Karanta wannan kwas sau biyu", "Neman aboki ya sa hannu a takarda"], answer: 0, why: "Masu ɗaukar aiki yawanci suna son kati daga sanannen mai ba da horo tare da gwajin ƙwarewar hannu." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Sanin Agajin Farko da CPR",
    questions: [
      { objective: "O1", q: "Kun sami abokin aiki a ƙasa kusa da wayar lantarki da ke tartsatsin wuta. Me za ku fara yi?", options: ["Kama hannun abokin aikin ku ja shi", "Tsayawa nesa, kiran 911 da sa a kashe wutar lantarki", "Zuba ruwa a kan wayar", "Fara CPR a daidai inda yake"], answer: 1, why: "Wurin ba lafiya ba ne; ku tsaya nesa, ku kira, ku sa wurin ya zama lafiya kafin ku taɓa kowa." },
      { objective: "O1", q: "Ta yaya za ku duba ko mutum yana amsawa?", options: ["Taɓa kafaɗa ku yi ihu \"Lafiya kuwa?\"", "Zuba ruwan sanyi a fuskarsa", "Girgiza kansa da ƙarfi", "Jira minti biyar"], answer: 0, why: "Taɓawa da ihu ita ce hanya mai aminci ta duba ko wani yana amsawa." },
      { objective: "O1", q: "Kuna kiran 911. Yaushe za ku iya katse wayar?", options: ["Da zarar kun ba da adireshi", "Bayan minti ɗaya", "Lokacin da mai karɓar kiran ya ce ku katse", "Lokacin da mutumin ya buɗe idanunsa"], answer: 2, why: "Ku ci gaba da kasancewa a waya; mai karɓar kiran zai iya buƙatar ƙarin bayani ko ya koya muku CPR." },
      { objective: "O1", q: "Idan ba a Amurka kuke ba, wace lamba za ku kira?", options: ["Koyaushe 911, a ko'ina", "Lambar aboki", "Babban ofishin asibiti", "Lambar gaggawa ta ƙasarku"], answer: 3, why: "Lambobin gaggawa sun bambanta a kowace ƙasa; ku koyi ta ƙasarku." },
      { objective: "O2", q: "Babban mutum ya faɗi, ba ya amsawa kuma haki-haki kawai yake yi. Me yake faruwa?", options: ["Wataƙila barci yake yi", "Wataƙila zuciyarsa ta tsaya; ku kira 911 ku fara CPR", "Yana shaƙewa amma lafiya yake", "Yana buƙatar kofin ruwa"], answer: 1, why: "Haki-haki ba numfashi na yau da kullum ba ne; ku ɗauke shi a matsayin tsayawar zuciya." },
      { objective: "O2", q: "Me CPR da hannu kawai (Hands-Only CPR) yake nufi?", options: ["Kiran 911 da danna da ƙarfi da sauri a tsakiyar ƙirji", "Shafa hannayen mutumin", "Ba da numfashi kawai", "Riƙe hannayen mutumin har sai taimako ya zo"], answer: 0, why: "CPR da hannu kawai dannawar ƙirji ne ba tare da numfashi ba, bayan kiran 911." },
      { objective: "O2", q: "Bayan kowace dannawa a CPR, me za ku bar ƙirjin ya yi?", options: ["Ya zauna a danne", "Ya girgiza", "Ya dawo sama gaba ɗaya", "Ya juya gefe"], answer: 2, why: "Barin ƙirji ya tashi gaba ɗaya yana bar zuciya ta cika da jini kafin dannawa ta gaba." },
      { objective: "O2", q: "Wani ya kawo AED. Me za ku yi?", options: ["Jira motar asibiti ta yi amfani da shi", "Karanta dukan littafin bayani da farko", "Saka shi ƙarƙashin kan mutumin", "Kunna shi ku bi muryarsa"], answer: 3, why: "AED yana yi muku magana a kowane mataki; ku yi amfani da shi da zarar ya iso." },
      { objective: "O3", q: "Wanne ne alamar cewa babban mutum yana shaƙewa?", options: ["Yana dariya da ƙarfi", "Yana kama maƙogwaronsa kuma ba ya iya magana", "Yana atishawa", "Yana neman tsumman goge baki"], answer: 1, why: "Kama maƙogwaro da kasa magana alamomin shaƙewa ne sanannu." },
      { objective: "O3", q: "Mutumin da yake shaƙewa ya suma. Me za ku yi?", options: ["Kiran 911, sauke shi ƙasa da fara CPR", "Ci gaba da back blows yayin da yake kwance", "Bar shi ya huta", "Ba shi ruwa"], answer: 0, why: "Idan mai shaƙewa ya daina amsawa, ku kira 911 ku fara CPR." },
      { objective: "O3", q: "A ina ya kamata ku koyi back blows da abdominal thrusts yadda ya kamata?", options: ["Ta yin atisaye da ƙarfi a kan aboki", "Daga wani sharhi a ƙarƙashin bidiyo", "A ajin hannu tare da malami", "Ba sai kun koye su ba"], answer: 2, why: "Ana yin atisayen waɗannan motsin lafiya a aji; kada ku taɓa yin atisayen tura ciki a kan mutum na gaske." },
      { objective: "O4", q: "Kafin ku danna raunin wani da yake zubar da jini, me yake kare ku?", options: ["Safar hannu, ko leda a matsayin abin kariya", "Ba a buƙatar komai", "Wanke hannu na minti biyar da farko", "Rufe idanunku"], answer: 0, why: "Safar hannu ko abin kariya suna kare ku daga jini yayin da kuke taimako." },
      { objective: "O4", q: "Kuna danna rauni. Har yaushe za ku ci gaba da dannawa?", options: ["Daƙiƙa goma", "Har sai kun gaji", "Har sai kun duba ƙarƙashin kyallen", "Har sai jinin ya tsaya ko taimako ya karɓa, ba tare da ɗagawa ba"], answer: 3, why: "Dannawa mai ɗorewa ba tare da leƙawa ba tana ba jini lokaci ya daskare." },
      { objective: "O4", q: "Yaushe ake amfani da tourniquet?", options: ["Ga kowane ƙaramin yanka", "Ga zubar jini mai barazana ga rai a hannu ko ƙafa idan dannewa bai isa ba", "Ga zubar jini daga hanci", "Ga rauni mai shuɗewa (bruise)"], answer: 1, why: "Tourniquet na zubar jini ne mai barazana ga rai a hannu ko ƙafa, kuma ana koyar da shi a aji." },
      { objective: "O5", q: "Kakarku ta ce tana jin nauyi a ƙirji da gumi mai sanyi amma tana son ta jira. Me za ku yi?", options: ["Jira awa ɗaya ku gani", "Kiran 911 yanzu ku zauna tare da ita", "Kai ta da mota bayan cin abincin dare", "Ba ta kowane magani da ke gida"], answer: 1, why: "Waɗannan alamomin bugun zuciya ne; ku kira 911 yanzu kuma kada ku bar ta ta hana ku." },
      { objective: "O5", q: "A B.E. F.A.S.T., me T yake tuna muku ku yi?", options: ["Take a photo (ɗaukar hoto)", "Text a friend (tura wa aboki saƙo)", "Tell them to sleep (ce masa ya yi barci)", "Time (lokaci): kiran 911 nan take da lura da lokacin da alamomi suka fara"], answer: 3, why: "T na Time (lokaci) ne: ku kira 911 nan take ku lura da lokacin da alamomin suka fara." },
      { objective: "O5", q: "Me ya sa za a kira motar asibiti don shanyewar ɓarin jiki maimakon kai mutumin da mota?", options: ["Ma'aikatan za su iya fara kulawa a hanya su sanar da asibiti", "Motar asibiti koyaushe kyauta ce", "Asibitoci ba sa karɓar masu zuwa da kansu", "Laifi ne a doka a kai wani da mota"], answer: 0, why: "Ma'aikatan gaggawa suna fara kulawa da wuri kuma suna sanar da asibiti; CDC ta ce a kira 911, ba a kai da mota ba." },
      { objective: "O6", q: "Waɗanne ƙungiyoyi biyu na Amurka ne suka fi shahara wajen ba da takardar shaidar CPR da agajin farko?", options: ["Ofishin lasisin tuƙi (DMV) da gidan waya", "IRS da SBA", "American Red Cross da American Heart Association", "Kowace ƙungiya a kafofin sada zumunta"], answer: 2, why: "Red Cross da AHA su ne suka fi shahara wajen ba da horon CPR da agajin farko a Amurka." },
      { objective: "O6", q: "Kafin ku biya kuɗin ajin CPR saboda aiki, me ya kamata ku tambaya?", options: ["Wane aji da wane mai ba da horo mai ɗaukar aikin yake karɓa", "Ko za ku iya tsallake gwajin ƙwarewa", "Ko aboki zai iya ɗauka a madadinku", "Babu komai; duk azuzuwa iri ɗaya ne"], answer: 0, why: "Ayyuka sun bambanta: wasu suna karɓar First Aid, CPR da AED, na kiwon lafiya yawanci suna buƙatar BLS." },
      { objective: "O6", q: "Katin CPR ɗinku yana da rana a kansa. Me za ku yi?", options: ["Ku yi watsi da ita", "Ku jefar da katin", "Ku sa masa leda don kada ya taɓa ƙarewa", "Ku saita tunatarwa don sabuntawa kafin ya ƙare"], answer: 3, why: "Katuna suna ƙarewa; ku sabunta kafin ranar don ku ci gaba da kasancewa da takardar shaida." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 2, 4, 6, 8, 11, 15, 17, 18] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Kiran gaggawa a shirye", objective: "O1", notYet: "Babu lambar gaggawa ko jimlar adireshi, ko adireshin ba a sarari yake ba.", meets: "Yana da lambar gaggawa daidai da jimla a sarari mai adireshi da farko, sannan abin da ya faru.", exceeds: "Ya kuma ƙara titin da ya fi kusa ko wata alama, kuma yana atisayen faɗinta da babbar murya." },
      { name: "An gano AED da akwatin agaji", objective: "O2", notYet: "Bai san inda AED ko akwatin agajin farko yake ba.", meets: "Yana faɗin inda AED da akwatin agajin farko mafi kusa suke a gida, wurin aiki, makaranta ko wurin ibada.", exceeds: "Yana faɗin wurare biyu, kuma ya duba cewa ana iya kai wa akwatin AED." },
      { name: "Matakai a tsari", objective: "O2", notYet: "Wasu matakai sun ɓace ko ba a tsari daidai suke ba, ko saurin CPR da zurfinsa ba daidai ba ne.", meets: "Ya rubuta duba, kira, CPR da AED a tsari, tare da hannaye a tsakiyar ƙirji, 100 zuwa 120 a minti ɗaya da kusan inci 2.", exceeds: "Ya kuma rubuta matakan AED da lokacin canja masu taimako." },
      { name: "Shaƙewa da zubar jini", objective: "O4", notYet: "Yana haɗa abin da za a yi, ko ya ce a ɗaga kyalle ko a cire abin da ya maƙale.", meets: "Ya rubuta alamomin shaƙewa (O3) da danne shi kai tsaye da ƙarfi tare da ƙara kyalle don zubar jini.", exceeds: "Ya kuma faɗi lokacin da mai shaƙewa yake buƙatar CPR da abin da tourniquet yake yi." },
      { name: "Bugun zuciya da shanyewar ɓarin jiki", objective: "O5", notYet: "Ba zai iya lissafa B.E. F.A.S.T. ko alamomin bugun zuciya ba.", meets: "Ya lissafa B.E. F.A.S.T. da alamomin bugun zuciya uku, tare da \"ku kira 911\".", exceeds: "Ya kuma rubuta cewa a lura da lokacin da alamomi suka fara kuma kada a kai mutumin da mota." },
      { name: "Shirin takardar shaida", objective: "O6", notYet: "Ba a zaɓi aji ba, ko ajin intanet kawai babu gwajin ƙwarewa.", meets: "Ya ambaci aji na fuska da fuska ko haɗaka, wanda yake ba da katin, wurin da rana.", exceeds: "Ya kuma tabbatar da mai ɗaukar aiki ko shirin cewa ana karɓar ajin, kuma ya saita tunatarwar sabuntawa." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka kammala ajin CPR, AED da agajin farko na fuska da fuska na Red Cross ko AHA cikin kwanaki 60 (binciken biyo baya, an nuna katin)",
      "Masu koyo da suka saka katin CPR da agajin farko mai aiki a takardar neman aiki ko CV",
      "Wuraren aiki da ƙungiyoyin agaji a cikin shirin da suka ce ƙarin ma'aikata da masu sa-kai sun sami takardar shaida kuma an san wuraren AED"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai intanet don kallon darussa da masu neman aji",
      "Takarda da alƙalami; matashin kai mai tauri ko naɗaɗɗen tawul don atisayen saurin CPR; tawul don atisayen dannawa",
      "Agogon waya ko agogo",
      "Kusan minti 60 zuwa 75 gaba ɗaya, a gajerun zama"
    ],
    facilitatorNotes: [
      "Wannan wayar da kai ne kawai. Ku riƙa faɗi cewa ba ya ba da takardar shaida, kuma ku nuna wa masu koyo ajin fuska da fuska tare da ƙwararren malamin Red Cross ko AHA.",
      "Kada ku taɓa barin masu koyo su yi atisayen dannawar ƙirji, back blows ko abdominal thrusts a kan junansu; ku yi amfani da matashin kai ko, idan kuna da su, manikin tare da malami mai takardar shaida.",
      "Kada ku ba da adadin magani ko shawarar likita; ku tura tambayoyin lafiya zuwa ga likita ko mai karɓar kiran 911.",
      "Wasu masu koyo sun taɓa shiga gaggawa ko sun rasa wani; ku ba da damar hutu kuma ku bar su su fita idan suna so.",
      "Ga ƙungiyoyi a wasu ƙasashe, ku canja 911 da lambar gaggawa ta ƙasar da masu ba da horo na can (misali ƙungiyoyin Red Cross ko Red Crescent na ƙasa).",
      "Ku yi haɗin gwiwa da ofishin kwana-kwana, asibiti ko reshen Red Cross na yankinku don ba da ajin takardar shaida nan da nan bayan kwas ɗin."
    ]
  }
};
