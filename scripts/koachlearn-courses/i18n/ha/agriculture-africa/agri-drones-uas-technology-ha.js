"use strict";

// Koach Learn course, Hausa (ha) translation of agriculture-africa/agri-drones-uas-technology.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const KCAA_UAS = { name: "Hukumar Kula da Sufurin Jiragen Sama ta Kenya (KCAA): Unmanned Aircraft Systems (jirage marasa matuƙi)", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const NCAA_P21 = { name: "Hukumar Kula da Sufurin Jiragen Sama ta Najeriya (NCAA): Nig.CARs 2023 Part 21, Remotely Piloted Aircraft Systems (jirage marasa matuƙi)", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };
const FAO_ITU_DRONES = { name: "FAO da ITU: E-agriculture in Action: Drones for Agriculture (2018)", url: "https://www.itu.int/pub/D-STR-E_AGRICULT.02-2018" };

module.exports = {
  id: "agri-drones-uas-technology-ha",
  lang: "ha",
  translationOf: "agri-drones-uas-technology",
  category: "Agriculture (Africa)",
  name: "Jiragen Drone na Noma: Fasahar UAS da Kula da Su",
  skills: "Faɗin sassan tsarin drone da aikin kowanne, Kula da batirin lithium-polymer lafiya, Zaɓa da kula da kayan aikin da drone ke ɗauka, Yin bincike kafin da bayan tashi, Bin jadawalin gyara da ajiye bayanai, Gano da gyara matsalolin da aka saba gani",
  outcome: "bayyana yadda kowane sashe na tsarin drone na noma ke aiki, kula da batirinsa da kayan aikin da yake ɗauka lafiya, da gudanar da shirin kula da drone ɗaya mai bincike, jadawali, matakan gano matsala da cikakkun bayanai.",
  about: [
    "Wannan kwas na matuƙan drone ne, masu gyara, kamfanonin hidimar drone, ma'aikatan kasuwancin noma da manyan gonaki, da matasa masu son jiragen drone na noma su ci gaba da tashi lafiya a Kenya, Najeriya da faɗin Afirka.",
    "Babi na 1 yana buɗe tsarin drone: jikin jirgi, injuna da fanka, kwamfutar tuƙi da na'urorin ji, haɗin rediyo da tashar ƙasa, batura da kayan aikin da jirgin ke ɗauka kamar kyamara da na'urar feshi. Babi na 2 game da kulawa ne: bincike na kullum, gyara bisa jadawali, gyara matsalolin da aka saba gani, sabunta firmware, ajiye bayanai, da kiyaye drone a cikin ƙura, zafi, ruwan sama da wuraren da wutar lantarki ba ta da tabbas.",
    "Koyaushe ku fara bin littafin jagora na kamfanin da ya ƙera drone da littafin ayyukanku (operations manual); wannan kwas yana koyar da ƙwarewar gama-gari da ke bayansu. Hukumomin sufurin jiragen sama suna sa ran masu amfani da drone su kula da jiragensu kuma su ajiye bayanai, don haka kyakkyawar kulawa tsaro ce da kuma bin doka. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas."
  ],
  finalTask: "Ku rubuta shirin kula da drone ɗaya na noma (na gaske ko misali, kamar drone mai fanka da yawa na zana taswira da wata ƙungiyar manoma ke amfani da shi): jerin sassa da aikin kowanne, hanyar kula da cajin batura, jerin binciken kafin tashi da bayan sauka, jadawalin kulawa bisa awannin tashi da bisa kalanda, teburin gano matsala na aƙalla matsaloli biyar da aka saba gani, da samfurin littafin bayanan kulawa mai misalai biyu.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Matuƙan drone, masu gyara, kamfanonin hidimar drone, ma'aikatan kasuwancin noma da manyan gonaki, da matasa a Kenya, Najeriya da faɗin Afirka masu son jiragen drone na noma su ci gaba da tashi lafiya.",
    startingPoint: "Yawancinsu sun taɓa ganin ko tuƙa drone na noma, kuma suna iya cajin batir da tashi da manhajar (app). Kaɗan ne ke iya faɗin kowane sashe na tsarin da aikinsa, bin rubutaccen jerin bincike, tsara kulawa bisa awannin tashi, ko ajiye littafin bayanan kulawa.",
    gap: "Drone suna da tsada kuma suna lalacewa da sauƙi a cikin ƙura, zafi da ruwan sama, kuma batirin lithium da aka yi wa rashin kulawa na iya kama wuta. Drone da ya faɗi ko aka hana shi tashi yana jawo asarar abokan ciniki da kuɗi, kuma hukumomi, abokan ciniki da kamfanonin inshora suna sa ran ganin bayanan kulawa. Sanin tsarin da gudanar da shirin kulawa yana sa drone su kasance lafiya, suna aiki, kuma suna bin doka.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi; ana bayanin kowace kalmar fasaha",
      "Na'urori: waya ko kwamfuta don kwas; drone na gaske yana taimakawa amma ba dole ba ne",
      "Tsaro: batirin lithium na iya kama wuta; babu gyara a cikin batura ko kayan lantarki",
      "Littafin jagora na kamfanin ƙera drone da littafin ayyuka su ne na farko; kwas yana koyar da ƙwarewar gama-gari da ke bayansu",
      "Yanayin gona: ƙura, zafi, ruwan sama da wutar lantarki marar tabbas a wurare da yawa"
    ],
    prerequisites: "Ana ba da shawarar a fara ɗaukar kwas ɗin \"Drone don Sa Ido a Gona 1: Gabatarwa, Dokoki da Tsaro\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku tsarin drone na noma", action: "faɗin kowane babban sashe na jirgin da na tsarin ƙasa da bayyana aikinsa", standard: "har da kwamfutar tuƙi, na'urorin ji, haɗin C2 da kayan aikin da jirgin ke ɗauka" },
    { id: "O2", condition: "Idan kuna da batura na drone", action: "bayyana yadda ake caji, ajiya, ɗauka da kuma daina amfani da su lafiya", standard: "kuna bin kowane matakin tsaro, ba tare da amfani da batir mai kumburi ko lalacewa ba" },
    { id: "O3", condition: "Idan aka ba ku kyamara, na'urar ji ko na'urar feshi", action: "bayyana yadda ake ɗora ta, tsabtace ta da duba ta", standard: "kayan a ɗaure sosai, gilashin kyamara a tsabta, kuma an duba sassan feshi don lalacewa" },
    { id: "O4", condition: "Kafin da bayan kowane tashi", action: "yin binciken kafin tashi da bayan sauka da rubuta abin da kuka gani", standard: "kuna duba kowane abu a cikin jerin bincike" },
    { id: "O5", condition: "Don drone ɗaya", action: "rubuta jadawalin kulawa bisa awannin tashi da kalanda, hanyar sabunta firmware da littafin bayanan kulawa", standard: "da tazarar \"duk wanda ya fara zuwa\" kuma an cike kowane gurbi a littafin" },
    { id: "O6", condition: "Idan aka sami matsala ko yanayin gona mai wahala", action: "gano matsala mataki-mataki da kare drone daga ƙura, zafi, ruwan sama da ɗaukewar wuta", standard: "kuna hana drone tashi idan matsalar tsaro ta sake dawowa" }
  ],
  chapters: [
    {
      name: "Babi na 1: Yadda tsarin drone na gona ke aiki",
      lessons: [
        {
          objectives: ["O1"],
          title: "Sassan tsarin drone",
          minutes: 6,
          goal: "Faɗin manyan sassan tsarin drone da bayyana aikin kowanne.",
          text: [
            "Hukumomi suna kiran drone tsari (UAS ko RPAS) domin jirgin sashe ɗaya ne kawai. Tsarin ya haɗa da jirgin, tashar ƙasa (rimot, waya ko tablet, da manhaja), haɗin rediyo tsakaninsu (wanda ake kira command and control, ko C2), batura da cajoji, da kayan aikin da jirgin ke ɗauka (payload: kyamara, na'urar ji ko na'urar feshi).",
            "A jikin jirgin: jikin jirgi (airframe: jiki da hannaye, ko fikafikai); injuna da fanka masu ɗaga jirgin; ESC masu faɗa wa kowane inji yadda zai juya da sauri; kwamfutar tuƙi (flight controller), wato ƙwaƙwalwar drone; da na'urorin ji: GNSS (gano wuri ta tauraron ɗan adam kamar GPS), kamfas, IMU mai jin karkacewa da motsi, barometer don tsawo, kuma sau da yawa na'urorin ganin cikas.",
            "Kwamfutar tuƙi tana karanta na'urorin ji sau ɗaruruwa a cikin daƙiƙa ɗaya, kuma tana daidaita kowane inji don jirgin ya tsaya daidai kuma ya bi hanyarsa. Idan na'ura ɗaya ta ba da bayanai marasa kyau, kamar kamfas kusa da ƙarfe, duk jirgin na iya yin halin ban mamaki. Shi ya sa daidaita na'urori (calibration) da zaɓar wurin tashi a hankali suke da muhimmanci."
          ],
          words: [["Airframe (jikin jirgi)", "jiki, hannaye ko fikafikan drone."], ["ESC", "electronic speed controller: yana sarrafa saurin juyawar kowane inji."], ["Flight controller (kwamfutar tuƙi)", "kwamfutar da ke cikin drone wadda ke sa shi ya tsaya daidai kuma ya bi hanyarsa."], ["GNSS", "tsarin gano wuri ta tauraron ɗan adam, kamar GPS."], ["IMU", "inertial measurement unit: yana jin karkacewa, juyawa da motsi."], ["Haɗin C2", "command and control: haɗin rediyo tsakanin rimot da drone."]],
          slides: [
            { title: "Tsari ne, ba jirgi kaɗai ba", bullets: ["Jirgin", "Tashar ƙasa: rimot, waya, manhaja", "Haɗin rediyo na C2", "Batura da kayan aiki (payload)"] },
            { title: "A jikin jirgin", bullets: ["Jikin jirgi, injuna, fanka", "ESC suna sarrafa kowane inji", "Kwamfutar tuƙi: ƙwaƙwalwar jirgin"] },
            { title: "Na'urorin ji", bullets: ["GNSS don wuri, kamfas don hanya", "IMU don karkacewa da motsi", "Barometer don tsawo, na'urorin ganin cikas"] },
            { title: "Dalilin muhimmancinsa", bullets: ["Bayanai marasa kyau = hali na ban mamaki", "Ku daidaita na'urori kuma ku zaɓi wurin tashi a hankali"] }
          ],
          sources: [NCAA_P21],
          tryIt: "Ku ɗauki drone (ko hoto ko zane mai haske na drone) ku sa wa aƙalla sassa takwas suna: jikin jirgi, injuna, fanka, wurin kwamfutar tuƙi, na'urar GNSS, kyamara ko kayan aiki, batir, rimot. Kusa da kowanne, ku rubuta aikinsa a layi ɗaya.",
          youCanNow: "faɗin sassan tsarin drone da faɗin aikin kowanne.",
          quickCheck: [
            { objective: "O1", q: "Mene ne kwamfutar tuƙi (flight controller)?", options: ["Rimot ɗin da matuƙi ke riƙewa", "Ƙwaƙwalwar drone da ke karanta na'urorin ji kuma take daidaita injuna", "Cajar batir", "Wurin ɗora kyamara"], answer: 1, why: "Kwamfutar tuƙi tana karanta na'urorin ji sau da yawa a cikin daƙiƙa kuma tana daidaita kowane inji don jirgin ya tsaya daidai." },
            { objective: "O1", q: "Kuna shirin tashi kusa da tankin ruwa na ƙarfe, sai drone ya fara karkacewa ta hanyar ban mamaki. Mene ne dalili mai yiwuwa?", options: ["Fanka sababbi ne sosai", "Kayan aiki sun yi tsabta sosai", "Batir ya cika sosai", "Bayanai marasa kyau daga kamfas saboda ƙarfen da ke kusa"], answer: 3, why: "Kamfas kusa da ƙarfe yana ba da bayanai marasa kyau, kuma duk jirgin na iya yin halin ban mamaki." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Batura: sashen da ya fi buƙatar kulawa",
          minutes: 6,
          goal: "Caji, ajiya, ɗauka da daina amfani da batura na drone lafiya.",
          text: [
            "Yawancin drone suna amfani da batirin lithium-polymer (LiPo) ko makamancinsa na lithium. Suna ɗauke da ƙarfi mai yawa idan aka kwatanta da nauyinsu, shi ya sa kuma suke iya kama wuta idan sun lalace, aka yi musu caji fiye da kima, aka zubar da su har ƙasa sosai, ko suka yi zafi sosai. Kula da batir shi ne aikin kulawa mafi muhimmanci.",
            "Ku yi caji da cajar da ta dace kaɗai, a kan wurin da ba ya kama wuta, kada ku taɓa barin sa ba tare da kun sa ido ba, kuma kada ku taɓa cajin batir mai kumburi, huji ko zafi. Ku bar batir ya huce bayan tashi kafin caji, kuma ku bar shi ya huce ko ya ɗumi zuwa yanayin zafi na yau da kullum kafin tashi. Kada ku bar batura a cikin mota mai zafi ko a cikin rana kai tsaye a gona.",
            "Don ajiya fiye da kwanaki kaɗan, ku ajiye batura a matakin cajin ajiya (an yi caji kaɗan, ba cike ba kuma ba babu komai ba; batura masu wayo da yawa suna yin haka da kansu), a wuri mai sanyi da bushe, zai fi kyau a cikin jaka ko akwati mai jure wuta. Ku bi adadin zagayen cajin kowane batir da yanayinsa. Ku daina amfani da batura masu kumburi ko lalacewa, ku kai su wurin tattara sharar lantarki (e-waste) ko na batura, kada ku taɓa jefa su cikin wuta ko shara ta yau da kullum. Ɗaukar batura a jirgin sama yana da nasa dokokin kamfanin jirgin."
          ],
          steps: ["Ku ba kowane batir lamba ku rubuta zagayensa.", "Ku yi caji da cajar da ta dace, a kan wurin da ba ya kama wuta, kuna sa ido.", "Kada ku taɓa caji ko tashi da batir mai kumburi, huji ko zafi.", "Ku nisanta batura daga mota mai zafi da rana kai tsaye.", "Ku ajiye su a matakin cajin ajiya a cikin akwati mai sanyi, bushe, mai jure wuta.", "Ku kai batura da suka lalace wurin tattarawa da ya dace."],
          words: [["LiPo", "batirin lithium-polymer: mara nauyi kuma mai ƙarfi, amma yana iya kama wuta idan aka yi masa rashin kulawa."], ["Zagayen caji (charge cycle)", "amfani ɗaya cikakke na ƙarfin batir, daga cike zuwa an yi amfani da shi sannan aka sake cika shi."], ["Cajin ajiya (storage charge)", "matakin caji na rabi da ke kiyaye batirin lithium lafiya idan ba a amfani da shi."], ["E-waste (sharar lantarki)", "sharar kayan lantarki, wadda ke buƙatar tattarawa da sake sarrafawa ta musamman."]],
          slides: [
            { title: "Ƙarfi tare da haɗari", bullets: ["LiPo: ƙarfi mai yawa idan aka kwatanta da nauyinsa", "Yana iya kama wuta idan ya lalace ko aka yi masa rashin kulawa", "Kula da batir shi ne aiki na farko"] },
            { title: "Dokokin caji", bullets: ["Cajar da ta dace, wurin da ba ya kama wuta", "Kada ku taɓa barin sa ba sa ido", "Ba batir mai kumburi, huji ko zafi ba"] },
            { title: "Zafi da ajiya", bullets: ["Ba a mota mai zafi ko rana kai tsaye ba", "Cajin ajiya, wuri mai sanyi da bushe", "Jaka ko akwati mai jure wuta"] },
            { title: "Bin diddigi da daina amfani", bullets: ["Ku ba batura lamba, ku rubuta zagaye", "Ku daina amfani da masu kumburi ko lalacewa", "Ku kai su wurin tattarawa da ya dace"] }
          ],
          tryIt: "Ku rubuta hanyar kula da batir ta shafi ɗaya don ƙungiyar drone: lambobi, caji, kula a gona cikin zafi, ajiya, littafin zagaye da daina amfani. Ku ƙara teburin bayanan batir mai ginshiƙai don lambar batir, kwanan wata, zagaye, yanayi da bayanai.",
          youCanNow: "caji, ajiya, ɗauka da daina amfani da batura na drone lafiya, da ajiye littafin bayanan batir.",
          quickCheck: [
            { objective: "O2", q: "Mene ne cajin ajiya?", options: ["An yi caji kaɗan, ba cike ba kuma ba babu komai ba, don ajiya fiye da kwanaki kaɗan", "An yi caji har ya cika", "Babu komai kwata-kwata", "An yi caji a cikin mota mai zafi"], answer: 0, why: "Batura da za a ajiye fiye da kwanaki kaɗan ana ajiye su da caji kaɗan a wuri mai sanyi da bushe." },
            { objective: "O2", q: "Yanzu kuka sauka kuma kuna son sake tashi ba da daɗewa ba. Batir yana da zafi. Me za ku yi?", options: ["Ku yi masa caji nan take a cikin rana", "Ku yi masa caji a mota ku tafi", "Ku bar shi ya huce kafin caji, ku yi caji kuna sa ido a kan wurin da ba ya kama wuta", "Ku sa shi a firiza"], answer: 2, why: "Cajin batir mai zafi ko caji ba tare da sa ido ba yana ƙara haɗarin gobara." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kayan aiki: kyamarori, na'urorin ji da na'urorin feshi",
          minutes: 5,
          goal: "Riƙewa, ɗorawa da kula da manyan kayan aikin da drone na noma ke ɗauka.",
          text: [
            "Kayan aiki (payload) shi ne abin da drone ke ɗauka don yin aikin. Drone na zana taswira suna ɗaukar kyamarar RGB (hoto na launi na yau da kullum), sau da yawa a kan gimbal mai riƙe ta daidai. Drone na lafiyar amfanin gona na iya ɗaukar kyamarar multispectral mai na'urar jin hasken rana da allon daidaitawa. Kyamarorin thermal suna auna zafi. Drone na feshi suna ɗaukar tanki, famfo, bututu da bakin feshi (nozzle), wasu kuma suna watsa taki mai ƙwaya ko iri.",
            "Ku kula da gilasan: ku tsabtace ruwan tabarau da na'urar jin hasken rana da kyalle mai laushi na tabarau, ku kare su da murfi, kuma ku nisanta kyamarori daga ƙura da danshi. Ku duba cewa gimbal yana motsi ba tare da cikas ba kuma an ɗaure kayan aiki sosai; kayan aiki da ba a ɗaure ba suna ɓata daidaiton jirgin da kwamfutar tuƙi.",
            "Na'urorin feshi suna buƙatar ƙarin kulawa: bayan kowane amfani ana kurkure su da tsabtace su kamar yadda kamfanin ƙera su da takardar maganin kashe ƙwari suka buƙata, ana duba bakin feshi don lalacewa da toshewa, kuma ana daidaita dukkan na'urar don ta fesa adadin da ya dace. Ku tuna cewa feshi da drone yana buƙatar izinin hukumar sufurin jiragen sama da na magungunan kashe ƙwari; kulawa ba ta maye gurbinsu."
          ],
          words: [["Payload (kayan aiki)", "kayan da drone ke ɗauka don yin aikin, kamar kyamara ko tankin feshi."], ["Gimbal", "wurin ɗora kyamara mai inji wanda ke riƙe kyamara daidai."], ["Na'urar jin hasken rana (sunlight sensor)", "ƙaramar na'ura a saman wasu drone na multispectral wadda ke auna hasken da ke shigowa don gyara karatun."], ["Nozzle (bakin feshi)", "bakin da ke mayar da ruwa zuwa ɗigon feshi."]],
          slides: [
            { title: "Kayan aiki da aka saba gani", bullets: ["Kyamarar RGB a kan gimbal", "Multispectral mai na'urar jin hasken rana", "Kyamarar thermal", "Tankin feshi, famfo, bakin feshi; masu watsawa"] },
            { title: "Kula da gilasan", bullets: ["Ku tsabtace ruwan tabarau da na'urori da kyalle mai laushi", "Ku sa murfi, ku nisanta daga ƙura da danshi", "Gimbal yana motsi sosai, an ɗaure sosai"] },
            { title: "Na'urorin feshi", bullets: ["Ku kurkure da tsabtace kamar yadda kamfani da takardar magani suka buƙata", "Ku duba bakin feshi don lalacewa da toshewa", "Ku daidaita adadin; har yanzu ana buƙatar izini"] }
          ],
          sources: [FAO_ITU_DRONES],
          tryIt: "Ku zaɓi kayan aiki ɗaya (kyamarar RGB, kyamarar multispectral ko na'urar feshi). Ku rubuta jerin kulawa mai aƙalla abubuwa shida don kafin da bayan kowane amfani.",
          youCanNow: "ɗorawa, tsabtacewa da duba manyan kayan aikin da drone na noma ke ɗauka.",
          quickCheck: [
            { objective: "O3", q: "Mene ne kayan aiki (payload) a drone na noma?", options: ["Batir", "Tashar ƙasa", "Abin da drone ke ɗauka don yin aikin, kamar kyamara ko na'urar feshi", "Haɗin rediyo"], answer: 2, why: "Kayan aiki shi ne kyamara, na'urar ji, na'urar feshi ko ta watsawa da ke yin aikin." },
            { objective: "O3", q: "Bayan aikin feshi, me za ku yi da na'urar feshi?", options: ["Ku kurkure ta ku tsabtace ta kamar yadda kamfani da takardar magani suka buƙata, ku duba bakin feshi", "Ku bar ragowar haɗin magani a cikin tanki", "Ku wanke duk jirgin da ruwa mai ƙarfi", "Ku ajiye ta a jike a cikin rana"], answer: 0, why: "Ana kurkure da tsabtace na'urorin feshi bayan kowane amfani, kuma ana duba bakin feshi don lalacewa da toshewa." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Yadda tsarin drone na gona ke aiki",
        questions: [
          { objective: "O1", q: "Me yasa ake kiran drone tsari (UAS ko RPAS)?", options: ["Domin ya fi daɗin ji", "Ya haɗa da jirgi, tashar ƙasa, haɗin rediyo, batura da kayan aiki", "Yana da fanka da yawa", "Ana ƙera shi a masana'anta"], answer: 1, why: "Dukkan sassan tare ne ke sa drone ya yi aiki." },
          { objective: "O1", q: "Me IMU ke ji?", options: ["Karkacewa, juyawa da motsi", "Danshin ƙasa", "Farashin amfanin gona", "Launin batir"], answer: 0, why: "IMU yana jin motsin drone don kwamfutar tuƙi ta daidaita shi." },
          { objective: "O2", q: "Batir ya ɗan kumbura bayan tashi. Ya kamata ku:", options: ["Yi masa caji da sauri", "Danna shi ya yi lebur", "Tashi da shi sau ɗaya kuma", "Daina amfani da shi ku kai shi wurin da ya dace lafiya"], answer: 3, why: "Kumburi alama ce ta lalacewa da haɗarin gobara." },
          { objective: "O2", q: "A ina ya kamata a ajiye batura na drone don dogon hutu?", options: ["Cike da caji a cikin mota mai zafi", "Babu komai a cikin rana kai tsaye", "A matakin cajin ajiya a cikin akwati mai sanyi, bushe, mai jure wuta", "A cikin wutar girki"], answer: 2, why: "Cajin ajiya da wuri mai sanyi suna kiyaye batirin lithium lafiya." },
          { objective: "O3", q: "Me gimbal ke yi?", options: ["Yana riƙe kyamara daidai", "Yana cajin batir", "Yana fesa maganin kashe ƙwari", "Yana auna tsawo"], answer: 0, why: "Gimbal yana riƙe kyamara daidai don hotuna su fito sarai." }
        ]
      }
    },
    {
      name: "Babi na 2: Kulawa a gona da a wurin gyara",
      lessons: [
        {
          objectives: ["O4"],
          title: "Bincike kafin da bayan kowane tashi",
          minutes: 5,
          goal: "Yin binciken kafin tashi da bayan sauka da rubuta abin da kuka gani.",
          text: [
            "Bincike yana kama ƙananan matsaloli kafin su jawo faɗuwar jirgi. Binciken kafin tashi yana duba ko drone ya cancanci tashi yanzu; binciken bayan sauka yana gano lalacewa ko gogewa daga tashin da aka gama yanzu, kuma yana shirya ranar gobe.",
            "Kafin tashi: jikin jirgi da hannaye ba su da tsagewa, hannaye a kulle; fanka a tsabta, a matse, ba su da gutsurewa ko tsagewa; injuna suna juyawa sosai ba tare da ƙara ta gogayya ba; kayan aiki a ɗaure kuma ruwan tabarau a tsabta; batir a zaune kuma a kulle; na'urorin ji da tagogin gani a tsabta; rimot da manhaja a shirye; an duba matsayin firmware kafin barin tasha.",
            "Bayan sauka: ku bar injuna da batura su huce; ku duba zafin injuna (inji mai zafi fiye da yadda aka saba na iya kasancewa yana lalacewa); ku nemi sabuwar lalacewa, ƙura ko ciyawa a cikin injuna da ramukan iska; ku tsabtace drone da goga mai laushi ko kyalle busasshe (ba feshin ruwa a kan kayan lantarki ba); ku rubuta lokacin tashi, matsaloli da duk wani saƙon gargaɗi a littafin bayanai."
          ],
          steps: ["Kafin tashi: jiki, hannaye, fanka, injuna, kayan aiki, batir, na'urorin ji, rimot.", "Ku tashi ne kawai idan kowane abu ya wuce.", "Bayan sauka: ku bari ya huce, ku duba zafin injuna, ku nemi lalacewa da datti.", "Ku tsabtace da goga mai laushi ko kyalle busasshe.", "Ku rubuta lokacin tashi, matsaloli da gargaɗi."],
          words: [["Bincike (inspection)", "dubawa sosai don neman lalacewa, gogewa ko matsala."], ["Firmware", "manhajar da ke cikin drone, rimot da batura."]],
          slides: [
            { title: "Bincike biyu", bullets: ["Kafin tashi: ya cancanci tashi yanzu?", "Bayan sauka: akwai lalacewa ko gogewa daga yau?"] },
            { title: "Kafin tashi", bullets: ["Jiki, hannaye a kulle, fanka ba lalacewa", "Injuna suna juyawa sosai, kayan aiki a ɗaure", "Batir a kulle, na'urorin ji a tsabta, manhaja a shirye"] },
            { title: "Bayan sauka", bullets: ["Ku bari ya huce; ku duba zafin injuna", "Lalacewa, ƙura, ciyawa a injuna da ramukan iska", "Ku tsabtace a bushe, ku rubuta lokaci, matsaloli, gargaɗi"] }
          ],
          tryIt: "Ku rubuta jerin binciken kafin tashi da na bayan sauka masu aƙalla abubuwa takwas kowanne don drone na zana taswira. Idan kuna da drone, ku yi amfani da su sau ɗaya ku rubuta sakamakon.",
          youCanNow: "binciken drone kafin da bayan kowane tashi da rubuta abin da kuka gani.",
          quickCheck: [
            { objective: "O4", q: "Mene ne amfanin binciken kafin tashi?", options: ["Gano lalacewa daga tashin da ya gabata kawai", "Cajin batir", "Sabunta firmware a gona", "Duba ko drone ya cancanci tashi yanzu"], answer: 3, why: "Binciken kafin tashi yana duba ko drone ya cancanci tashi kafin ya ɗaga." },
            { objective: "O4", q: "A lokacin binciken kafin tashi, wani inji yana ƙara ta gogayya idan kuka juya shi. Me za ku yi?", options: ["Ku tashi a hankali", "Kada ku tashi; ku duba injin don yashi, ciyawa ko lalacewa", "Ku sa mai a fanka", "Ku yi gajeren aiki"], answer: 1, why: "Injuna ya kamata su juya ba tare da cikas ba; ƙarar gogayya tana nufin matsala da za a gyara kafin tashi." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kulawa bisa jadawali, firmware da bayanai",
          minutes: 5,
          goal: "Tsara jadawalin kulawa bisa awannin tashi da kalanda, da ajiye bayanan kulawa.",
          text: [
            "Wasu sassa suna gogewa da amfani. Fanka, injuna, bearing (ƙwallon juyawa), gimbal, ƙafafun sauka, da famfo da bakin feshi suna buƙatar canji bisa jadawali. Littafin jagora na kamfanin ƙera drone yana ba da tazarar lokaci; littafin ayyukanku yana tsara naku jadawalin. Ku tsara bisa awannin tashi (misali kowane awa 50) da bisa kalanda (misali kowane wata uku), duk wanda ya fara zuwa.",
            "Sabunta firmware yana gyara kurakurai kuma yana ƙara abubuwan tsaro, amma sabuntawa na iya canja yadda jirgin ke aiki. Ku karanta release notes (bayanin canje-canje), ku sabunta kafin ku bar tasha (ba a gona ba), ku sabunta drone, rimot da batura tare, kuma ku gwada da gajeren tashi kafin aiki na gaske.",
            "Ku ajiye littafin bayanan kulawa don kowane drone: kwanan wata, awannin tashi, abin da aka duba, aka canja ko aka gyara, sassan da aka yi amfani da su, nau'in firmware, wanda ya yi aikin, da sakamakon. Hukumomi suna sa ran masu amfani da drone su kula da jiragensu kuma su ajiye bayanai; abokan ciniki da kamfanonin inshora ma na iya neman su."
          ],
          steps: ["Ku karanta tazarar kulawa da kamfanin ƙera drone ya bayar.", "Ku rubuta jadawalinku bisa awannin tashi da kalanda.", "Ku tsara sabunta firmware a tasha, bayan karanta release notes, da gwajin tashi.", "Ku ajiye littafin bayanan kulawa don kowane drone.", "Ku ajiye fanka na ajiya da sassan da aka saba buƙata."],
          words: [["Kulawa bisa jadawali (scheduled maintenance)", "bincike da canjin sassa da aka tsara a tazarar lokaci ƙayyadadde."], ["Littafin bayanan kulawa (maintenance log)", "rubutun duk kulawar da aka yi wa drone."], ["Release notes", "bayanin kamfanin ƙera drone game da abin da sabunta manhaja ke canjawa."]],
          slides: [
            { title: "Sassa suna gogewa", bullets: ["Fanka, injuna, bearing, gimbal", "Ƙafafun sauka, famfo, bakin feshi", "Ku canja su bisa jadawali"] },
            { title: "Awanni da kalanda", bullets: ["Misali kowane awa 50 ko wata 3", "Duk wanda ya fara zuwa", "Ku bi littafin jagora na kamfanin ƙera drone"] },
            { title: "Firmware lafiya", bullets: ["Ku karanta release notes", "Ku sabunta a tasha, dukkan sassa tare", "Gwajin tashi kafin aiki na gaske"] },
            { title: "Littafin bayanan kulawa", bullets: ["Kwanan wata, awanni, aikin da aka yi, sassa, firmware", "Wanda ya yi da sakamako", "Don tsaro, hukumomi, abokan ciniki, inshora"] }
          ],
          sources: [KCAA_UAS, NCAA_P21],
          tryIt: "Ku yi teburin jadawalin kulawa don drone ɗaya mai aƙalla abubuwa shida (fanka, injuna, gimbal, ƙafafun sauka, batura, firmware), kowanne da tazara a awanni da a watanni, kuma ku fara littafin bayanan kulawa da misali ɗaya.",
          youCanNow: "tsara kulawa bisa jadawali da sabunta firmware, da ajiye littafin bayanan kulawa yadda ya kamata.",
          quickCheck: [
            { objective: "O5", q: "Me \"duk wanda ya fara zuwa\" ke nufi a jadawalin kulawa?", options: ["Ku yi aikin kowane wata uku kawai", "Ku yi aikin a iyakar awannin tashi ko ranar kalanda, duk wanda aka fara kaiwa", "Ku tsallake aikin idan drone yana tashi da kyau", "Ku yi aikin bayan faɗuwar jirgi kawai"], answer: 1, why: "Tsarawa bisa awannin tashi da kalanda, duk wanda ya fara zuwa, yana hana sassa gogewa har su lalace." },
            { objective: "O5", q: "Sabunta firmware ya bayyana yayin da kuke gonar abokin ciniki. Me za ku yi?", options: ["Ku saka shi nan take a gona", "Ku sabunta drone kawai ba rimot ba", "Ku kashe duk sabuntawa har abada", "Ku jira, sannan ku sabunta a tasha bayan karanta release notes, ku gwada da gajeren tashi"], answer: 3, why: "Sabuntawa na iya canja yadda jirgin ke aiki, don haka ana yin su a tasha, duka tare, kuma ana gwada su kafin aiki na gaske." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Gano matsala da yanayin gonakin Afirka",
          minutes: 6,
          goal: "Gano matsalolin da aka saba gani mataki-mataki da kare drone daga ƙura, zafi, ruwan sama da ɗaukewar wuta.",
          text: [
            "Ku gano matsala mataki ɗaya a lokaci ɗaya: ku karanta saƙon gargaɗi a manhaja, ku fara duba dalilai mafi sauƙi, ku canja abu ɗaya, sannan ku gwada. Matsalolin da aka saba gani: kuskuren kamfas (ku nisanta daga ƙarfe, motoci da wayoyin wutar lantarki, sannan ku sake daidaitawa idan an buƙata); GNSS mai rauni (ku jira ƙarin taurarin ɗan adam, ku nisanta daga dogayen bishiyoyi); girgiza ko rawa (ku duba fanka da ta lalace ko ba a matse ta ba, ko hannu da ya lanƙwasa); kuskuren inji (ku duba ciyawa, yashi ko inji da ya lalace); gajeren lokacin tashi (batir da ya tsufa, zafi ko kayan aiki masu nauyi).",
            "Ƙura da yashi suna shiga injuna da gimbal: ku tashi daga kan tabarma ko tanti, ku tsabtace bayan tashi, kuma ku ajiye a cikin akwati a rufe. Zafi yana rage rayuwar batir kuma yana iya sa kayan lantarki su yi zafi fiye da kima: ku sa batura da rimot a inuwa, ku tashi a lokutan da ba zafi sosai, kuma ku ba drone hutu tsakanin tashi. Ruwan sama da danshi suna lalata kayan lantarki sai dai idan an ƙera drone don jure su: kada ku tashi a ruwan sama, ku busar da kaya kuma ku ajiye su da ƙananan jakunkunan shan danshi.",
            "Inda wutar lantarki ba ta da tabbas, ku tsara caji: inverter na mota ko kayan cajin hasken rana (solar), isassun batura na yini, da caji cikin dare a tasha. Ku san lokacin tsayawa: idan matsala ta sake dawowa ko ta shafi tsaro, ku hana drone tashi ku kai shi cibiyar gyara ta kamfanin ƙera shi ko ga ƙwararren mai gyara."
          ],
          steps: ["Ku karanta ainihin saƙon gargaɗi.", "Ku fara duba dalilai mafi sauƙi.", "Ku canja abu ɗaya a lokaci ɗaya, sannan ku gwada.", "Ku yi amfani da tabarmar sauka; ku tsabtace ku sa drone a akwati bayan aiki a ƙura.", "Ku sa batura a inuwa; ku tashi a lokutan da ba zafi sosai; ba tashi a ruwan sama sai dai idan an ƙera shi don haka.", "Ku hana drone tashi idan matsalar tsaro ta sake dawowa."],
          words: [["Gano matsala (troubleshooting)", "neman dalilin matsala mataki-mataki."], ["Daidaitawa (calibration)", "hanyar sake saita na'urar ji, kamar kamfas, don ta karanta daidai."], ["An hana tashi (grounded)", "ba a yarda ya tashi ba har sai an gyara shi."]],
          slides: [
            { title: "Gano matsala mataki-mataki", bullets: ["Ku karanta gargaɗin", "Dalilai mafi sauƙi da farko", "Ku canja abu ɗaya, sannan ku gwada"] },
            { title: "Matsalolin da aka saba gani", bullets: ["Kuskuren kamfas: ku nisanta daga ƙarfe, ku sake daidaitawa", "Rawa: fanka ko hannaye", "Gajeren tashi: tsohon batir, zafi, kayan aiki masu nauyi"] },
            { title: "Ƙura, zafi da ruwan sama", bullets: ["Tabarmar sauka, tsabtacewa, akwati a rufe", "Batura a inuwa, tashi a lokutan sanyi", "Ba ruwan sama sai an ƙera shi; ku busar ku ajiye da kyau"] },
            { title: "Wutar lantarki da iyaka", bullets: ["Caji ta mota ko solar, batura na ajiya", "Ku hana drone tashi idan matsalar tsaro ta sake dawowa"] }
          ],
          tryIt: "Aikin ƙarshe: ku rubuta shirin kula da drone ɗaya: jerin sassa da aikinsu, hanyar kula da batir, jerin binciken kafin tashi da bayan sauka, jadawali bisa awanni da kalanda, teburin gano matsala na aƙalla matsaloli biyar, da samfurin littafin bayanan kulawa mai misalai biyu.",
          youCanNow: "gano matsalolin drone da aka saba gani, kare drone a yanayin gonakin Afirka, da gudanar da cikakken shirin kulawa.",
          quickCheck: [
            { objective: "O6", q: "Mene ne mataki na farko na gano matsala?", options: ["Karanta saƙon gargaɗi da fara duba dalilai mafi sauƙi", "Canja sassa da yawa a lokaci ɗaya", "Buɗe batir", "Tashi sama sosai don gwadawa"], answer: 0, why: "Ku karanta saƙon, ku fara duba dalilai masu sauƙi, ku canja abu ɗaya ku gwada." },
            { objective: "O6", q: "Za ku yi tashi duk yini a gona mai zafi da ƙura ba tare da wutar lantarki ba. Me za ku tsara?", options: ["Batir ɗaya da tashi daga kan yashi kai tsaye", "Ku bar batura a rana don su ci gaba da ɗumi", "Tabarmar tashi, inuwa ga batura, lokutan da ba zafi sosai, da isassun batura da aka yi wa caji ko cajar solar ko ta mota", "Ku tashi ba tare da ba drone hutu ba"], answer: 2, why: "Tabarma tana hana ƙura, inuwa da lokutan sanyi suna kare batura, kuma dole a tsara caji inda wutar lantarki ba ta da tabbas." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Kulawa a gona da a wurin gyara",
        questions: [
          { objective: "O4", q: "Fanka tana da ɗan gutsurewa a gefenta. Ya kamata ku:", options: ["Tashi a hankali", "Naɗe ta da selotep", "Canja ta kafin tashi", "Goge ta da takardar goge ku tashi"], answer: 2, why: "Fanka da ta lalace tana jawo girgiza kuma tana iya karyewa a sama." },
          { objective: "O4", q: "Bayan tashi, wani inji ya fi sauran zafi sosai. Wannan na iya nufin:", options: ["Injin yana lalacewa ko an toshe shi", "Drone ya tashi da kyau", "Kyamara tana da datti", "Batir sabo ne"], answer: 0, why: "Zafin da ba a saba gani ba na iya nuna bearing mara kyau, datti ko inji da ke lalacewa." },
          { objective: "O5", q: "Yaushe ya kamata ku saka sabunta firmware?", options: ["A tsakiyar gonar abokin ciniki", "A lokacin tashi", "Ba har abada", "A tasha, bayan karanta release notes, sannan gwajin tashi"], answer: 3, why: "Sabuntawa na iya canja yadda jirgin ke aiki; ku gwada kafin aiki na gaske." },
          { objective: "O6", q: "Manhaja ta nuna kuskuren kamfas a lokacin tashi. Mataki na farko mai kyau shi ne:", options: ["Tashi duk da haka", "Nisanta daga ƙarfe, motoci da wayoyin wutar lantarki, da sake daidaitawa idan an buƙata", "Cire kamfas", "Tashi a yanayin sport"], answer: 1, why: "Ƙarfe da abubuwan maganaɗisu suna damun kamfas." },
          { objective: "O6", q: "Yaya za ku kare drone daga ƙura a gona mai bushewa?", options: ["Ku tashi daga kan tabarma, ku tsabtace bayan tashi, ku ajiye a akwati a rufe", "Ku wanke shi da bututun ruwa", "Ku tashi kusa da ƙasa", "Ku bar shi a buɗe"], answer: 0, why: "Ƙura tana lalata injuna da gimbal; tabarma, tsabtacewa da akwati suna taimakawa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Jiragen Drone na Noma: Fasahar UAS da Kula da Su",
    questions: [
      { objective: "O1", q: "Haɗin C2 shi ne:", options: ["Wani nau'in batir", "Haɗin rediyo tsakanin rimot da drone", "Girman fanka", "Ruwan tabarau na kyamara"], answer: 1, why: "Haɗin command and control yana ɗaukar umarni da bayanai." },
      { objective: "O1", q: "ESC suna sarrafa:", options: ["Zuƙowar kyamara", "Ajiyar batir", "Saurin juyawar kowane inji", "Taurarin ɗan adam na GPS"], answer: 2, why: "Electronic speed controllers suna tuƙa injuna." },
      { objective: "O1", q: "Kwamfutar tuƙi ita ce:", options: ["Ƙwaƙwalwar da ke cikin drone wadda ke sa shi ya tsaya daidai", "Mutumin da ke tuƙawa", "Akwatin rimot", "Wurin sauka"], answer: 0, why: "Tana karanta na'urorin ji kuma tana daidaita injuna sau da yawa a cikin daƙiƙa." },
      { objective: "O1", q: "GNSS yana ba drone:", options: ["Launi", "Yanayin zafi", "Matakin batir", "Wurinsa daga taurarin ɗan adam"], answer: 3, why: "GNSS, kamar GPS, yana ba da wuri." },
      { objective: "O1", q: "Barometer a drone yana auna:", options: ["Hanyar iska", "Matsin iska, wanda ake amfani da shi don tsawo", "Lafiyar amfanin gona", "Zagayen batir"], answer: 1, why: "Matsin iska yana canjawa da tsawo." },
      { objective: "O2", q: "Me yasa batirin LiPo na iya zama haɗari?", options: ["Suna da nauyi", "Suna da ƙara", "Suna iya kama wuta idan sun lalace, aka yi musu caji fiye da kima, ko suka yi zafi sosai", "Ba sa yin caji ko kaɗan"], answer: 2, why: "Ƙarfi mai yawa yana nufin haɗari mai yawa idan aka yi rashin kulawa." },
      { objective: "O2", q: "Ya kamata a yi wa batura caji:", options: ["Da cajar da ta dace, ana sa ido, a kan wurin da ba ya kama wuta", "Cikin dare a kan gado", "A cikin mota mai zafi", "Da kowace caja da ta shiga"], answer: 0, why: "Waɗannan matakai suna rage haɗarin gobara." },
      { objective: "O2", q: "Zagayen caji shi ne:", options: ["Sashen keke", "Shirin tashi", "Yanayin yanayi", "Amfani ɗaya cikakke na ƙarfin batir"], answer: 3, why: "Rubuta zagaye yana nuna tsufan batir." },
      { objective: "O2", q: "Batirin drone da ya lalace kuma aka daina amfani da shi ya kamata ya tafi:", options: ["Wutar girki", "Wurin tattara sharar lantarki ko batura da ya dace", "Shara ta yau da kullum", "Kogi"], answer: 1, why: "Batirin lithium yana buƙatar tattarawa da sake sarrafawa lafiya." },
      { objective: "O3", q: "Na'urar jin hasken rana ta drone na multispectral:", options: ["Tana cajin batir", "Tana auna iska", "Tana auna hasken da ke shigowa don gyara karatun", "Tana fesa ruwa"], answer: 2, why: "Tana taimakawa wajen gyara canjin haske." },
      { objective: "O3", q: "Kayan aiki da ba a ɗaure ba na iya:", options: ["Ɓata daidaito da sarrafa drone", "Inganta hotuna", "Sa drone ya fi sauƙi", "Sa caji ya fi sauri"], answer: 0, why: "Kwamfutar tuƙi tana tsammanin kaya a ɗaure kuma daidai." },
      { objective: "O3", q: "Ya kamata a duba bakin feshi don:", options: ["Launi", "Takardun alamar kamfani", "Waƙa", "Lalacewa da toshewa"], answer: 3, why: "Bakin feshi da ya lalace ko aka toshe yana fesa adadin da bai dace ba." },
      { objective: "O3", q: "Shin kyakkyawar kulawar na'urar feshi tana maye gurbin izinin feshi?", options: ["E", "A'a; har yanzu ana buƙatar izinin sufurin jiragen sama da na magungunan kashe ƙwari", "A ƙananan gonaki kawai", "Da dare kawai"], answer: 1, why: "Kulawa da izinin doka abubuwa biyu ne daban da ake buƙata." },
      { objective: "O4", q: "Ana yin binciken bayan sauka don:", options: ["Cajin rimot", "Tsara abokin ciniki na gaba", "Gano lalacewa ko gogewa daga tashin da aka gama yanzu", "Gyara hotuna"], answer: 2, why: "Yana kama matsaloli kafin tashi na gaba." },
      { objective: "O4", q: "Yaya ya kamata ku tsabtace drone bayan tashi a ƙura?", options: ["Goga mai laushi ko kyalle busasshe", "Ruwa mai ƙarfin matsi", "Takardar goge (sandpaper)", "Fetur"], answer: 0, why: "Ruwa da sinadarai na iya lalata kayan lantarki." },
      { objective: "O5", q: "Ana tsara kulawa bisa jadawali ta hanyar:", options: ["Launi kawai", "Yanayi kawai", "Abokin ciniki kawai", "Awannin tashi da kalanda, duk wanda ya fara zuwa"], answer: 3, why: "Sassa suna gogewa da amfani da kuma da lokaci." },
      { objective: "O5", q: "Littafin bayanan kulawa yana rubuta:", options: ["Farashin drone kawai", "Kwanan wata, awanni, aikin da aka yi, sassa, firmware, wanda ya yi, sakamako", "Lambobin wayar manoma", "Farashin amfanin gona"], answer: 1, why: "Cikakkun bayanai suna tallafa wa tsaro da bin doka." },
      { objective: "O6", q: "Drone yana rawa a sama. Ku fara duba:", options: ["Taswirar abokin ciniki", "Hasashen yanayi na wata mai zuwa", "Fanka da hannaye don lalacewa ko rashin matsewa", "Katin ajiyar bayanai (memory card)"], answer: 2, why: "Fanka da suka lalace da hannaye da suka lanƙwasa suna jawo girgiza." },
      { objective: "O6", q: "A lokacin zafi sosai ya kamata ku:", options: ["Sa batura a inuwa ku tashi a lokutan da ba zafi sosai", "Bar batura a rana", "Tashi ba tsayawa ba tare da hutu ba", "Yi wa batura caji yayin da suke da zafi"], answer: 0, why: "Zafi yana rage rayuwar batir kuma yana takura kayan lantarki." },
      { objective: "O6", q: "Matsalar tsaro tana ci gaba da dawowa bayan gyaranku. Ya kamata ku:", options: ["Ci gaba da tashi", "Ɓoye ta daga abokan ciniki", "Rufe gargaɗin", "Hana drone tashi ku kai shi ga ƙwararren mai gyara"], answer: 3, why: "Matsalolin tsaro masu maimaituwa suna buƙatar gyaran ƙwararru kafin tashi." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 2, 5, 6, 9, 12, 13, 15, 17, 19] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe na shirin ku sake dubawa.",
    criteria: [
      { name: "Jerin sassa", objective: "O1", notYet: "Manyan sassa sun ɓace, ko ba a bayyana aikinsu ba.", meets: "An jera kowane babban sashe na jirgin da na tsarin ƙasa tare da aikinsa.", exceeds: "Ya nuna waɗanne sassa ke gogewa da waɗanda ke buƙatar daidaitawa." },
      { name: "Kula da batir", objective: "O2", notYet: "Matakan caji, ajiya ko daina amfani sun ɓace ko ba su da aminci.", meets: "Matakan caji lafiya, hucewa, cajin ajiya, ɗauka da daina amfani, tare da bin diddigin zagaye.", exceeds: "Ya haɗa da shirin gobara don wurin caji." },
      { name: "Jerin bincike", objective: "O4", notYet: "Babu jerin bincike, ko manyan abubuwa kamar fanka da makullin batir sun ɓace.", meets: "Jerin binciken kafin tashi da bayan sauka sun ƙunshi jikin jirgi, fanka, injuna, kayan aiki, batir, na'urorin ji da bayanan littafi.", exceeds: "Binciken kayan aiki ya dace da ainihin aikin drone, kamar zana taswira ko feshi." },
      { name: "Jadawali da littafin bayanai", objective: "O5", notYet: "Babu tazarar lokaci, ko littafin bayanai yana da gurabe da suka ɓace.", meets: "Jadawali bisa awannin tashi da kalanda, hanyar firmware, da samfurin littafin bayanai mai misalai biyu.", exceeds: "An ɗauki tazarar lokaci daga littafin jagora na kamfanin ƙera drone kuma an rubuta majiyar." },
      { name: "Teburin gano matsala", objective: "O6", notYet: "Matsaloli ƙasa da biyar, ko babu matakai.", meets: "Aƙalla matsaloli biyar da aka saba gani, kowacce da binciken farko masu sauƙi da lokacin hana drone tashi.", exceeds: "Ya ƙara matakai don ƙura, zafi, ruwan sama da ɗaukewar wuta a gonakin mai koyo." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas kuma suka sami \"Ya cika\" ko \"Ya wuce\" a kowane layi na rubric na shirin kulawa",
      "Masu koyo da suka ce suna amfani da rubutaccen jerin bincike da littafin bayanan kulawa bayan kwanaki 30 (binciken biyo baya)",
      "Kamfanonin drone ko ƙungiyoyin manoma da suka ce faɗuwar jirgi, matsalolin batir ko ranakun hana tashi sun ragu bayan horo",
      "Masu koyo da suka ɗauki kwas na drone na gaba ko horon masu gyara na kamfanin ƙera drone"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta don darussa; drone na noma na gaske, ko hotuna masu haske na drone, don atisaye",
      "Littafin jagora na kamfanin ƙera drone, idan akwai",
      "Littafin rubutu ko spreadsheet (tebur na kwamfuta) don jerin bincike, jadawali da littafin bayanai",
      "Kusan minti 60 gaba ɗaya, a gajerun zama, tare da lokacin rubuta shirin kulawa"
    ],
    facilitatorNotes: [
      "Ku yi gwajin farko tare, sannan ku zagaya drone na gaske (a kashe, an cire fanka) don faɗin kowane sashe.",
      "Ku riƙe batura a kan wurin da ba ya kama wuta kaɗai, kuma kada ku taɓa caji, huda ko buɗe batir mai kumburi a aji.",
      "Ku yi amfani da littafin jagora na drone ɗin don tazarar lokaci da hanyoyi; kwas yana ba da hanyar gama-gari kawai.",
      "Kada ku yi amfani da na'urorin feshi da maganin kashe ƙwari a aji; ku yi atisayen bincike da ruwa mai tsabta ko babu ruwa.",
      "Ku ba da maki ga shirin kulawa da rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
