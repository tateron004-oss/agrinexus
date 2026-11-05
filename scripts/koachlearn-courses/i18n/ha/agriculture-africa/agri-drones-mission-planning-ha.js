"use strict";

// Koach Learn course, Hausa (ha) translation of agriculture-africa/agri-drones-mission-planning.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const KCAA_UAS = { name: "Hukumar Kula da Sufurin Jiragen Sama ta Kenya (KCAA): jiragen sama marasa matuƙi (da Turanci)", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const KCAA_PORTAL = { name: "Tsarin KCAA na intanet don jirage marasa matuƙi (RPAS) (da Turanci)", url: "https://rpas.kcaa.or.ke/" };
const NCAA_P21 = { name: "Hukumar Kula da Sufurin Jiragen Sama ta Najeriya (NCAA): Nig.CARs 2023 Sashe na 21, jirage marasa matuƙi (RPAS) (da Turanci)", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };
const KMD = { name: "Hukumar Hasashen Yanayi ta Kenya (Kenya Meteorological Department)", url: "https://meteo.go.ke" };
const NIMET = { name: "Hukumar Hasashen Yanayi ta Najeriya (NiMet)", url: "https://nimet.gov.ng" };

module.exports = {
  id: "agri-drones-mission-planning-ha",
  lang: "ha",
  translationOf: "agri-drones-mission-planning",
  category: "Agriculture (Africa)",
  name: "Jirage Marasa Matuƙi a Noma: Tsara Aiki da Gudanar da Tashi",
  skills: "Mayar da buƙatar abokin ciniki zuwa iyakar aiki, Binciken wuri da duba sararin sama da izini, Rubuta kimanta haɗari, Gina tsarin tashi da shirye-shiryen ko-ta-kwana, Jagorantar bayani ga ma'aikata da tashi da jirgin, Duba bayan tashi da rahoton hatsari",
  outcome: "tsara da gudanar da aikin jirgi mara matuƙi (drone) na noma cikin ƙwarewa, daga buƙatar abokin ciniki har zuwa miƙa bayanai, da cikakken kundin aiki: iyakar aiki, binciken wuri, duba sararin sama da izini, kimanta haɗari, tsarin tashi, bayani ga ma'aikata, shirye-shiryen ko-ta-kwana da bayanan bayan tashi.",
  about: [
    "Wannan kwas na matuƙan jirgi marasa matuƙi daga nesa ne, kamfanonin hidimar drone, ƙungiyoyin drone na manyan gonaki da kamfanonin noma, da shirye-shiryen faɗakarwa (extension) a Kenya, Najeriya da faɗin Afirka da ke tashi da drone don wasu. Yana ɗauka cewa kun riga kun san tushen tashi da zana taswira, da dokokin drone na ƙasarku (ku duba hanyar koyo ta sa ido da kwas ɗin dokoki).",
    "Babi na 1 shi ne tsarawa: amincewa da ainihin abin da abokin ciniki yake buƙata, binciken wuri, duba sararin sama da izini, kimanta haɗari, da gina tsarin tashi da aka lissafa tsayi, haɗuwar hotuna (overlap), batir da lokaci. Babi na 2 shi ne gudanarwa: ayyukan ma'aikata da bayani, tashi da sa ido kan aikin, magance abubuwan da suka lalace, da rufe aikin da duba bayanai, littattafan rajista da rahoton duk wani hatsari.",
    "Misalan irin ayyuka ne na gaske: zana taswirar kadada 40 ta avocado don mai fitar da kaya a Murang'a, ƙirga tsirrai a gonakin rogo 25 na manoma masu kwangila a Jihar Oyo, duba ban ruwa a gonar kayan lambu kusa da Naivasha. Kada ku taɓa yin aiki ba tare da rajista, lasisi, takardar shaidar mai gudanarwa da izinin da ƙasarku take buƙata ba. Gwajin ilimi yana rufe kowane babi, kuma jarabawa mai tambayoyi 20 tana rufe kwas ɗin."
  ],
  finalTask: "Ku gina cikakken kundin aiki don aikin drone na noma ɗaya (na gaske ko misali, kamar zana taswirar kadada 40 ta avocado don mai fitar da kaya): iyakar aiki da aka amince da abokin ciniki, binciken wuri da haɗurra da zanen taswira, duba sararin sama da izini tare da majiyoyi, teburin kimanta haɗari, tsarin tashi (yanki, tsayi, cikakken hoto, haɗuwar hotuna, gudu, batir, lokaci, iyakokin yanayi), ayyukan ma'aikata da bayanan bayani, shirye-shiryen ko-ta-kwana, da jerin binciken bayan tashi da littafin rajistar da za ku cike.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Matuƙan drone daga nesa, kamfanonin hidimar drone, ƙungiyoyin drone na manyan gonaki da kamfanonin noma, da shirye-shiryen faɗakarwa a Kenya, Najeriya da faɗin Afirka da ke yin ayyukan drone na noma don abokan ciniki.",
    startingPoint: "Masu koyo sun riga sun iya tashi da drone, su yi tashin zana taswira mai sauƙi, kuma sun san dokokin drone na ƙasarsu. Kaɗan ne ke mayar da buƙatar abokin ciniki zuwa rubutaccen iyakar aiki, ke rubuta kimanta haɗari da shirye-shiryen ko-ta-kwana, ke ba ma'aikata bayani, ko ke rufe aiki da duba bayanai, littattafan rajista da rahoton hatsari.",
    gap: "Ayyukan da ba su da iyaka a sarari suna kawo jayayya, kuma ayyukan da ba a yi musu bincike, kimanta haɗari da bayani ba suna kawo hatsari, ƙin karɓar bayanai da rasa abokan ciniki. Cikakken kundin aiki yana bar ƙungiyar drone ta ba abokin ciniki abin da yake buƙata lafiya, bisa doka kuma a kan lokaci, kuma yana nuna wa abokan ciniki da hukumomi cewa kasuwancin na ƙwararru ne.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi; an bayyana kalmomin drone da na tsaro",
      "Na'urori: waya ko kwamfutar tafi-da-gidanka mai manhajar taswira; drone da manhajar tsarawa suna taimakawa amma ba dole ba ne",
      "Dokoki: kowane aiki yana buƙatar rajista, lasisi, takardar shaidar mai gudanarwa da izinin da ƙasar take buƙata",
      "Yanayin gona: zafi, iska, ruwan sama, rashin kyakkyawan sabis na waya da 'yan kallo a gonakin Afirka",
      "Lokaci: gajerun darussa, da lokacin gina kundin aiki"
    ],
    prerequisites: "\"Jiragen Drone na Noma a Afirka: Dokokin Sufurin Jiragen Sama da Lasisi\" da hanyar koyo ta \"Drones for Agricultural Monitoring\" (Drone don Sa Ido a Noma), ko gogewar tashi makamanciyar haka."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku buƙatar abokin ciniki don aikin drone", action: "rubuta iyakar aiki mai shawarar da za a yanke, yanki, abubuwan da za a miƙa, ranaku, mai hulɗa, farashi da raba bayanai", standard: "har da abin da drone ba zai iya yi ba" },
    { id: "O2", condition: "Don wurin aiki", action: "yin binciken taswira da na ƙasa, da tabbatar da iyakokin sararin sama da kowane izini", standard: "an rubuta su da ranaku da majiyoyi kafin tashi" },
    { id: "O3", condition: "Don aikin da aka tsara", action: "rubuta kimanta haɗari, tsarin tashi da shirye-shiryen ko-ta-kwana", standard: "da matakin kariya ga kowane haɗari kuma an saita iyakokin yanayi" },
    { id: "O4", condition: "Kafin tashin farko na aiki", action: "raba ayyuka ga ma'aikata da jagorantar bayani", standard: "da ya ƙunshi haɗurra, iyakoki, shirye-shiryen ko-ta-kwana, kalmomin umarni da wanda zai iya cewa a tsaya" },
    { id: "O5", condition: "Lokacin aiki", action: "sa ido kan tashi da bayanan telemetry, da yanke shawarar a tashi ko kada a tashi", standard: "ana dakatawa ko saukowa duk lokacin da aka wuce iyaka" },
    { id: "O6", condition: "A ƙarshen aiki", action: "duba bayanai, cike littattafan rajista da ba da rahoton duk wani hatsari", standard: "kafin barin wurin, an sake tashi a guraben da suka ɓace kuma an ajiye kwafin bayanai" }
  ],
  chapters: [
    {
      name: "Babi na 1: Tsara aikin",
      lessons: [
        {
          objectives: ["O1"],
          title: "Daga buƙatar abokin ciniki zuwa iyakar aiki",
          minutes: 5,
          goal: "Mayar da buƙatar abokin ciniki zuwa rubutaccen iyakar aiki a sarari.",
          text: [
            "Abokan ciniki sukan nemi \"tashin drone\" alhali amsa ce suke buƙata: Waɗanne fili ne tsirrai ba su fito sosai ba? A ina ruwan ban ruwa yake zuba? Bishiyoyi nawa muke da su? Ku fara da tambayar wace shawara suke son yankewa, da abin da za su yi da sakamakon.",
            "Sannan ku amince da iyakar aiki a rubuce: yankin (da taswira ko fayil ɗin iyaka), tambayar da abubuwan da za a miƙa (misali taswirar hotuna da aka haɗa (orthomosaic), taswirar NDVI, ƙirga bishiyoyi, rahoto mai shafi ɗaya), matakin cikakken bayanin da ake buƙata, lokacin ranaku, yadda za a shiga gonar, wanda zai zama mai hulɗa a gonar, farashi da hanyar biya (kamar kuɗin waya (mobile money) idan an miƙa), da yadda za a raba da ajiye bayanai.",
            "Ku faɗa a sarari abin da drone ba zai iya yi ba. Taswira na iya nuna inda bishiyoyi suke cikin wahala; amma ita kaɗai ba za ta iya faɗin wace cuta ce ba. Iyakar aiki a sarari tana kare ku da abokin ciniki daga baƙin ciki da jayayya."
          ],
          steps: ["Ku tambayi wace shawara abokin ciniki yake son yankewa.", "Ku amince da yankin kuma ku sami iyaka ko zane.", "Ku amince da abubuwan da za a miƙa, cikakken bayani, ranaku da masu hulɗa.", "Ku amince da farashi, biya da raba bayanai.", "Ku faɗi iyakar abin da drone zai iya nunawa.", "Ku rubuta shi kuma ku duka ku tabbatar."],
          words: [["Iyakar aiki (mission scope)", "rubutacciyar yarjejeniyar abin da aikin drone zai ƙunsa da abin da zai miƙa."], ["Abin da za a miƙa (deliverable)", "abin da abokin ciniki zai karɓa, kamar taswira ko rahoto."]],
          slides: [
            { title: "Ku nemo ainihin tambayar", bullets: ["Wace shawara abokin ciniki zai yanke?", "Me zai yi da sakamakon?"] },
            { title: "Ku amince a rubuce", bullets: ["Yanki da iyaka", "Abubuwan da za a miƙa da cikakken bayani", "Ranaku, shiga gona, mai hulɗa a gona", "Farashi, biya, raba bayanai"] },
            { title: "Ku faɗi iyakoki", bullets: ["Taswira tana nuna inda, ba koyaushe dalili ba", "Iyakar aiki a sarari tana hana jayayya"] }
          ],
          tryIt: "Wani mai fitar da avocado ya ce: \"Ku tashi a kan kadadarmu 40 mako mai zuwa.\" Ku rubuta tambayoyi biyar da za ku yi, sannan ku rubuta iyakar aiki a sakin layi ɗaya da yanki, abubuwan da za a miƙa, ranaku, mai hulɗa, wurin farashi da iyakoki.",
          youCanNow: "mayar da buƙatar abokin ciniki marar sarari zuwa rubutaccen iyakar aiki a sarari.",
          quickCheck: [
            { objective: "O1", q: "Mene ne abin da za a miƙa (deliverable) a cikin iyakar aiki?", options: ["Batirin drone", "Lambar wayar abokin ciniki", "Tsayin tashi", "Abin da abokin ciniki zai karɓa, kamar taswira ko rahoto"], answer: 3, why: "Abubuwan da za a miƙa su ne abin da kuke bayarwa, kamar orthomosaic, taswirar NDVI, ƙirga bishiyoyi ko rahoto." },
            { objective: "O1", q: "Abokin ciniki yana son taswirar NDVI ɗinku ta faɗi sunan cutar da ke cikin avocado ɗinsa. Me za ku rubuta a iyakar aiki?", options: ["Cewa taswirar za ta faɗi kowace cuta", "Cewa taswirar tana nuna bishiyoyin da ke cikin wahala, amma sai an gane cutar a ƙasa", "Babu komai game da shi", "Cewa za ku fesa wa bishiyoyin magani ma"], answer: 1, why: "Taswira na iya nuna inda bishiyoyi suke cikin wahala amma ita kaɗai ba za ta faɗi wace cuta ce ba." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Binciken wuri, sararin sama da izini",
          minutes: 6,
          goal: "Binciken wuri da tabbatar da iyakokin sararin sama da kowane izini kafin tashi.",
          text: [
            "Ku fara yin binciken taswira (desk survey): ku duba yankin a manhajar taswira da hoton tauraron ɗan adam (satellite) don neman filayen saukar jirage, filayen jirgin sama, hanyoyi, garuruwa, wayoyin wutar lantarki, dogayen turaku, koguna, wuraren kariya da wuraren tsaro. Sannan ku duba dokoki da taswirorin hukumarku don wuraren da aka hana ko aka taƙaita, da nisan da ake buƙata daga filin jirgi, da ko aikin yana buƙatar izinin aiki na musamman. Ku bar lokaci don duk wani izini ya fito.",
            "Sannan ku yi bincike a ƙasa idan za ku iya, ko ku nemi mai hulɗa a gonar ya turo hotuna: wuraren tashi da sauka, abubuwan da ke kan hanya da tsayinsu, mutane da dabbobi, gidaje, hanyoyin shiga, sabis na waya, da inda ma'aikata za su iya samun inuwa daga rana da ruwan sama.",
            "Ku tabbatar da izini: mai gona ko manajansa a rubuce, maƙwabta idan za ku tashi a kan ƙasarsu, shugabannin al'umma inda ake tsammanin haka, da hukumar sufurin sama kamar yadda ake buƙata. Ku rubuta komai a kundin aiki da ranaku da majiyoyi."
          ],
          steps: ["Binciken taswira: taswira da hoton tauraron ɗan adam na yankin.", "Ku duba dokokin sufurin sama: wuraren da aka hana, nisan filin jirgi, izini.", "Binciken ƙasa ko hotunan gona: wuraren tashi, abubuwan kan hanya, mutane, sabis na waya.", "Ku sami izinin mai gona da na maƙwabta a rubuce.", "Ku rubuta duk binciken da ranaku da majiyoyi."],
          words: [["Binciken taswira (desk survey)", "duba wuri ta amfani da taswirori da takardu kafin a je wurin."], ["Wurin da aka hana (restricted area)", "sararin sama da aka taƙaita tashi a ciki ko yake buƙatar izini na musamman."], ["Izinin aiki (operation authorisation)", "izini daga hukumar sufurin sama don wani irin aiki na musamman."]],
          slides: [
            { title: "Binciken taswira", bullets: ["Taswira da hoton tauraron ɗan adam", "Filayen saukar jirage, hanyoyi, garuruwa, wayoyin wuta, turaku", "Wuraren kariya da na tsaro"] },
            { title: "Sararin sama da izini", bullets: ["Wuraren da aka hana da nisan filin jirgi", "Ana buƙatar izinin aiki na musamman?", "Ku bar lokaci don izini ya fito"] },
            { title: "Binciken ƙasa", bullets: ["Wuraren tashi, abubuwan kan hanya, tsayinsu", "Mutane, dabbobi, gidaje, sabis na waya", "Inuwa ga ma'aikata"] },
            { title: "Izini a rubuce", bullets: ["Mai gona ko manaja", "Maƙwabta, shugabannin al'umma", "Hukumar sufurin sama kamar yadda ake buƙata"] }
          ],
          sources: [KCAA_UAS, KCAA_PORTAL, NCAA_P21],
          tryIt: "Ga wata gona da za ku iya samu a manhajar taswira, ku yi binciken taswira: ku lissafa kowane filin saukar jirgi, hanya, wayar wuta, ƙauye da wurin kariya cikin 'yan kilomita, kuma ku rubuta dokokin sufurin sama da dole ku duba da izinin da kuke buƙata.",
          youCanNow: "binciken wuri, duba iyakokin sararin sama da samun kowane izini kafin aiki.",
          quickCheck: [
            { objective: "O2", q: "Mene ne binciken taswira (desk survey)?", options: ["Taro a teburin abokin ciniki", "Yin tashin gwaji", "Duba taswirori da hotunan tauraron ɗan adam don haɗurra da wuraren da aka hana kafin zuwa wurin", "Ƙirga ma'aikata"], answer: 2, why: "Binciken taswira yana duba taswirori, hotunan tauraron ɗan adam da dokokin hukuma kafin ziyartar wurin." },
            { objective: "O2", q: "Layukan tashinku za su ratsa ƙasar maƙwabci. Me za ku yi kafin tashi?", options: ["Ku sami izinin maƙwabcin ku rubuta shi a kundin aiki", "Ku tashi sama sosai don kada su lura", "Ku tashi da sassafe kawai", "Ku nemi abokin ciniki ya faɗa musu daga baya"], answer: 0, why: "Ana tabbatar da izinin masu gona da maƙwabta kuma a rubuta shi kafin tashi." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kimanta haɗari da tsarin tashi",
          minutes: 6,
          goal: "Rubuta kimanta haɗari da cikakken tsarin tashi tare da shirye-shiryen ko-ta-kwana.",
          text: [
            "Kimanta haɗari tana lissafa abin da zai iya lalacewa, yiwuwarsa da girman illarsa, da abin da za ku yi don rage shi. Misali: haɗari, wayar wutar lantarki a gefen arewa; illa, karo; matakin kariya, ku tsara layuka nesa da ita da mita 30 kuma ku saita tsayin komawa gida (return-to-home) sama da ita. Wasu haɗurran da aka saba: mutane da ke shigowa yankin, dabbobi, tsuntsaye masu farauta, iska mai ƙarfi da rana, zafi, katsewar haɗi a bayan tuddai, da filin saukar jirgi a kusa.",
            "Tsarin tashi yana saita: raba yankin zuwa tashe-tashe da kowanne zai ishe batir ɗaya; tsayi da cikakken hoton da yake bayarwa (cikin iyakar tsayi ta doka); haɗuwar hotuna; gudu; yawan batir, da na ajiya; wuraren tashi da sauka; lokacin aiki (misali 10:00 zuwa 14:00 don haske iri ɗaya); da iyakokin yanayi (iska mafi yawa, babu ruwan sama, ganin nesa). Ku duba hasashen yanayi daga hukumar yanayi ta ƙasarku ranar da ta gabaci aikin da safiyar ranar aikin.",
            "Shirye-shiryen ko-ta-kwana suna faɗin abin da za ku yi idan abubuwa suka canja: iska ta wuce iyakarku, ku dakata; ruwan sama, ku tattara kaya ku dawo ranar ajiya; mutum ya shigo yankin, ku tsayar da jirgi a sama ko ku sauka; katsewar haɗi, an saita komawa gida; matsalar batir, ku sauka a wurin saukar madadin."
          ],
          steps: ["Ku lissafa haɗurra; ku auna yiwuwa da girman illa; ku rubuta matakin kariya ga kowanne.", "Ku raba yankin zuwa tashe-tashe na batir ɗaya.", "Ku saita tsayi, cikakken hoto, haɗuwar hotuna, gudu da batir tare da na ajiya.", "Ku saita lokacin aiki da iyakokin yanayi; ku duba hasashen yanayi.", "Ku rubuta shirye-shiryen ko-ta-kwana da wuraren saukar madadin."],
          words: [["Kimanta haɗari (risk assessment)", "rubutaccen bincike na abin da zai iya lalacewa da yadda za ku rage haɗarin."], ["Matakin kariya (control)", "aikin da ke rage haɗari."], ["Shirin ko-ta-kwana (contingency)", "aikin da aka shirya tun da wuri idan wani abu ya canja ko ya lalace."]],
          slides: [
            { title: "Kimanta haɗari", bullets: ["Haɗari, yiwuwa, girman illa, matakin kariya", "Wayoyin wuta, mutane, dabbobi, tsuntsaye", "Iska, zafi, katsewar haɗi, filayen saukar jirage"] },
            { title: "Tsarin tashi", bullets: ["Tashe-tashe na batir ɗaya, da na ajiya", "Tsayi, cikakken hoto, haɗuwar hotuna, gudu", "Tashi, sauka, lokacin aiki"] },
            { title: "Yanayi", bullets: ["Ku saita iyakoki: iska, ruwan sama, ganin nesa", "Ku duba hasashen ƙasa ranar da ta gabata da safiyar aiki"] },
            { title: "Shirye-shiryen ko-ta-kwana", bullets: ["Iska: ku dakata. Ruwan sama: ranar ajiya", "Mutum ya shigo: ku tsaya a sama ko ku sauka", "Katsewar haɗi: an saita RTH. Matsala: saukar madadi"] }
          ],
          sources: [KMD, NIMET, NCAA_P21],
          tryIt: "Ku rubuta teburin kimanta haɗari mai aƙalla haɗurra shida don aikin avocado na kadada 40, sannan ku rubuta tsarin tashinsa da shirye-shiryen ko-ta-kwana biyar.",
          youCanNow: "rubuta kimanta haɗari da cikakken tsarin tashi tare da shirye-shiryen ko-ta-kwana.",
          quickCheck: [
            { objective: "O3", q: "A kimanta haɗari, mene ne haɗari (hazard)?", options: ["Abin da zai iya cutarwa, kamar wayar wutar lantarki", "Biyan kuɗin abokin ciniki", "Abin da za a miƙa daga tashin", "Launin drone"], answer: 0, why: "Haɗari shi ne abin da zai iya lalacewa; kimanta haɗari tana ƙara yiwuwa, girman illa da matakin kariya." },
            { objective: "O3", q: "Tsarinku ya saita iyakar iska. Hasashen safe ya nuna iska sama da iyakar duk yini. Me za ku yi?", options: ["Ku tashi duk da haka ku yi fata", "Ku cire iyakar iska daga tsarin", "Ku tashi a can gefen gonar kawai", "Ku yi amfani da ranar ajiya da ke cikin shirin ko-ta-kwana"], answer: 3, why: "Shirye-shiryen ko-ta-kwana suna faɗin abin da za a yi idan yanayi ya wuce iyaka, kamar dawowa ranar ajiya." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Tsara aikin",
        questions: [
          { objective: "O1", q: "Abokin ciniki ya nemi \"tashin drone\". Tambayarku ta farko ya kamata ta zama:", options: ["Wane launin drone kuke so?", "Wace shawara kuke son yankewa da sakamakon?", "Zan iya tashi yau?", "Kuna da drone?"], answer: 1, why: "Shawarar ce ke bayyana bayanai da abubuwan da za a miƙa da ake buƙata." },
          { objective: "O1", q: "Wanne ne ya kamata ya kasance a rubutaccen iyakar aiki?", options: ["Waƙar da matuƙin ya fi so", "Farashi kawai", "Babu komai; ku amince ta waya", "Yanki, abubuwan da za a miƙa, ranaku, mai hulɗa, farashi da raba bayanai"], answer: 3, why: "Rubutaccen iyakar aiki a sarari yana hana jayayya." },
          { objective: "O2", q: "Lokacin binciken taswira kun sami filin saukar jirgi mai nisan kilomita 3. Ya kamata ku:", options: ["Duba dokokin nisan filin jirgi da duk wani izinin da ake buƙata", "Ku yi watsi da shi", "Ku tashi da safe kawai", "Ku tashi sama sosai"], answer: 0, why: "Dokoki da yawa suna taƙaita drone kusa da filayen jirgi." },
          { objective: "O3", q: "A kimanta haɗari, matakin kariya (control) shi ne:", options: ["Na'urar sarrafa jirgin daga nesa", "Aikin da ke rage haɗari", "Ƙorafin abokin ciniki", "Batir"], answer: 1, why: "Matakan kariya suna rage yiwuwa ko girman illa." },
          { objective: "O3", q: "Hasashen yanayi ya nuna iska mai ƙarfi da rana. Tsari mai hankali shi ne:", options: ["Ku tashi da rana duk da haka", "Ku soke aikin har abada", "Ku saita lokacin aiki a sa'o'in da iska ta lafa kuma ku ajiye ranar ajiya", "Ku cire fikafikan (propellers)"], answer: 2, why: "Ku tsara a kan iyakokin yanayi tare da ranar ajiya." }
        ]
      }
    },
    {
      name: "Babi na 2: Gudanar da tashin",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ayyukan ma'aikata da bayani",
          minutes: 5,
          goal: "Raba ayyuka ga ma'aikata da jagorantar bayani a sarari kafin aiki.",
          text: [
            "Ko ƙananan ayyuka suna tafiya mafi kyau idan kowa ya san aikinsa. Babban matuƙi (pilot in command) shi ke da alhakin tsaron tashin kuma shi ke da magana ta ƙarshe. Mai lura (observer) yana kallon drone da sararin sama kuma yana gargaɗi game da jirage, tsuntsaye, mutane da dabbobi. Ma'aikacin ƙasa ko na kayan aiki (payload) na iya kula da batir, kyamara, wurin sauka da abokin ciniki.",
            "Kafin tashin farko, babban matuƙi yana yi wa kowa bayani, har da mai hulɗa a gonar: yanki da layukan tashi, tsayi, lokaci a kowane batir, wuraren tashi da sauka, haɗurra da matakan kariya daga kimanta haɗari, iyakokin yanayi, shirye-shiryen ko-ta-kwana, kalmomin da za ku yi amfani da su (misali \"hold\" wato tsaya a sama, \"land now\" wato sauka yanzu), da wanda zai iya cewa a tsaya. Kowa zai iya cewa a tsaya saboda tsaro.",
            "Ku duba cewa kowane ma'aikaci yana da ruwan sha, kariya daga rana da kayan tsaro kamar rigar da ke haske (high-visibility vest), kuma an yi wa wurin tashi alama kuma an nisantar da 'yan kallo daga gare shi."
          ],
          steps: ["Ku naɗa babban matuƙi, mai lura da ma'aikacin ƙasa ko na kayan aiki.", "Bayani: yanki, tsayi, batir, tashi da sauka, haɗurra, iyakokin yanayi.", "Ku amince da shirye-shiryen ko-ta-kwana da kalmomin umarni (hold, land now).", "Ku tabbatar cewa kowa zai iya cewa a tsaya.", "Ku yi wa wurin tashi alama; ku duba ruwan sha, kariya daga rana da riguna."],
          words: [["Babban matuƙi (pilot in command)", "matuƙin daga nesa da ke da alhakin tsaron tashin, kuma shi ke da magana ta ƙarshe."], ["Kalmomin umarni (standard calls)", "gajerun kalmomin da aka amince da su da ma'aikata ke amfani da su don kowa ya fahimta nan take."]],
          slides: [
            { title: "Ayyukan ma'aikata", bullets: ["Babban matuƙi: magana ta ƙarshe kan tsaro", "Mai lura: drone, sararin sama, mutane, dabbobi", "Ma'aikacin ƙasa ko kayan aiki: batir, kyamara, abokin ciniki"] },
            { title: "Bayanin", bullets: ["Yanki, tsayi, batir, tashi, sauka", "Haɗurra, iyakokin yanayi, ko-ta-kwana", "Kalmomin umarni: hold, land now"] },
            { title: "Ku kula da ma'aikata", bullets: ["Kowa zai iya cewa a tsaya", "Ruwan sha, kariya daga rana, riguna", "Alama a wurin tashi, 'yan kallo a nesa"] }
          ],
          tryIt: "Ku rubuta rubutun bayani mai shafi ɗaya don aikin avocado da babban matuƙi zai iya karantawa cikin minti uku, wanda ya ƙunshi kowane abu daga wannan darasi.",
          youCanNow: "raba ayyuka ga ma'aikata da jagorantar bayani a sarari kafin aiki.",
          quickCheck: [
            { objective: "O4", q: "Me mai lura (observer) yake yi?", options: ["Yana biyan ma'aikata", "Yana kallon drone, sararin sama da ƙasa kuma yana gargaɗin matuƙi", "Yana rubuta rahoton abokin ciniki", "Yana karɓar kuɗi daga abokin ciniki"], answer: 1, why: "Mai lura yana kallon jirage, tsuntsaye, mutane da dabbobi kuma yana gargaɗin matuƙi." },
            { objective: "O4", q: "Mai hulɗa a gonar zai tsaya kusa da wurin tashi. Me za ku yi a bayanin?", options: ["Ku bar shi a waje da bayanin", "Ku ce masa ya yi shiru", "Ku saka shi, ku bayyana haɗurra da kalmomin umarni, ku faɗa masa cewa kowa zai iya cewa a tsaya", "Ku nemi ya tashi da drone"], answer: 2, why: "Bayanin ya ƙunshi kowa da ke wurin, har da mai hulɗa a gonar, kuma kowa zai iya cewa a tsaya saboda tsaro." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Gudanar da sa ido kan aikin",
          minutes: 5,
          goal: "Tashi da aikin da aka tsara, sa ido a kansa da yanke shawarar a tashi ko kada a tashi.",
          text: [
            "Kafin kowane tashi, ku bi jerin binciken kafin tashi kuma ku tabbatar yanayi yana cikin iyakoki. Ku loda ko ku duba hanyar da aka tsara, ku tabbatar da wurin gida (home point) da tsayin komawa gida, kuma ku tabbatar mai lura yana wurinsa.",
            "Lokacin tashi, matuƙi yana kallon drone da bayanan telemetry (batir, sigina, taurarin ɗan adam, gargaɗin iska, tsayi, ci gaba a kan layuka). Mai lura yana kallon sararin sama da ƙasa. Ku kasance a shirye ku karɓi sarrafa jirgin da hannu a kowane lokaci. Ku canja batir tsakanin tashe-tashe bisa tsarin batirinku, kuma ku yi alama a layukan da aka gama.",
            "Ku riƙa yanke shawarar a tashi ko kada a tashi duk yini. Idan iska ta tashi sama da iyakarku, mutum ya shigo yankin, hadari ya taru, ko gargaɗi ya maimaitu, ku dakata ko ku sauka. Gamawa gobe ya fi hatsari yau. Ku riƙa sanar da abokin ciniki ci gaban aiki da duk wani canji."
          ],
          steps: ["Jerin binciken kafin tashi; yanayi yana cikin iyakoki?", "Ku duba hanya, wurin gida da tsayin komawa gida.", "Ku tashi; matuƙi yana kallon drone da telemetry, mai lura yana kallon sama da ƙasa.", "Ku canja batir lafiya; ku yi alama a layukan da aka gama.", "Ku dakata ko ku sauka idan an wuce iyaka; ku sanar da abokin ciniki."],
          words: [["Telemetry", "bayanai kai tsaye da drone ke turawa zuwa na'urar sarrafawa: batir, tsayi, wuri, sigina, gargaɗi."], ["A tashi ko kada a tashi (go / no-go)", "shawarar ko yana da lafiya a tashi ko a ci gaba."]],
          slides: [
            { title: "Kafin kowane tashi", bullets: ["Jerin bincike da iyakoki", "Hanya, wurin gida, tsayin RTH", "Mai lura yana wurinsa"] },
            { title: "Lokacin tashi", bullets: ["Matuƙi: drone da telemetry", "Mai lura: sararin sama da ƙasa", "A shirye don sarrafawa da hannu"] },
            { title: "A tashi ko a'a, duk yini", bullets: ["Iska, mutane, hadari, gargaɗi mai maimaituwa", "Ku dakata ko ku sauka", "Gobe ya fi hatsari"] }
          ],
          sources: [KCAA_UAS, NCAA_P21],
          tryIt: "Ku rubuta katin a tashi ko kada a tashi don aikinku: yanayi biyar da ke nufin a tashi, da biyar da ke nufin a tsaya ko a sauka, da gajerun kalmomi da ma'aikata za su iya karantawa a gona.",
          youCanNow: "tashi da sa ido kan aikin da aka tsara, da yanke shawarar a tashi ko kada a tashi mai kyau.",
          quickCheck: [
            { objective: "O5", q: "Mene ne telemetry?", options: ["Kwangilar abokin ciniki", "Hasashen yanayi", "Bayanan tashi kai tsaye kamar batir, tsayi, sigina da gargaɗi", "Jerin sunayen ma'aikata"], answer: 2, why: "Telemetry su ne bayanai kai tsaye da matuƙi ke kallo lokacin tashi." },
            { objective: "O5", q: "Hadari yana taruwa kuma an gama rabin layuka. Me za ku yi?", options: ["Ku sauka, ku gama sauran daga baya", "Ku tashi da sauri don gamawa", "Ku kashe gargaɗin", "Ku bar mai lura ya tashi da jirgin yayin da kuke tattara kaya"], answer: 0, why: "Gamawa gobe ya fi hatsari yau; ku dakata ko ku sauka idan yanayi ya zama marar lafiya." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Rufe aikin: duba bayanai, littattafan rajista da hatsari",
          minutes: 5,
          goal: "Duba bayanai, cike littattafan rajista da kula da rahoton hatsari kafin barin wurin.",
          text: [
            "Kafin ku bar wurin, ku duba bayanai: ku ƙirga hotuna a kowane tashi, ku duba wasu don ganin ko sun dushe ko haskensu bai yi daidai ba, ku duba guraben da ba a ɗauki hoto ba, kuma idan zai yiwu ku yi saurin haɗa hotuna a ƙaramin inganci (low-resolution stitch) a kwamfutar tafi-da-gidanka. Ku sake tashi a guraben yayin da ma'aikata da yanayi suna nan. Ku ajiye kwafin bayanai a na'ura ta biyu.",
            "Ku cike bayanai: littafin rajistar kowane tashi (lokaci, batir, matuƙi, matsaloli), bayanan batir da gyara, da ainihin yanayin da aka yi aiki a cikin kundin aiki. Ku gode wa mai hulɗa a gonar kuma ku tabbatar da lokacin da zai karɓi abubuwan da za a miƙa.",
            "Idan wani abu ya lalace (faɗuwar jirgi, kusan karo da jirgin sama, rauni, lalata dukiya, jirgin ya gudu ya ɓace), ku fara tabbatar da wurin yana lafiya, sannan ku rubuta abin da ya faru kuma ku ba da rahoto ga hukumar sufurin samanku kamar yadda dokokinta suka buƙata, da kuma kamfanin inshorarku. Ku yi nazarin hatsarin tare da ma'aikata kuma ku sabunta tsare-tsarenku don kada ya sake faruwa."
          ],
          steps: ["Ku ƙirga hotuna, ku duba wasu don dushewa, ku duba guraben da suka ɓace.", "Ku sake tashi a guraben; ku ajiye kwafin bayanai a na'ura ta biyu.", "Ku cike littattafan rajistar tashi, batir da gyara.", "Ku tabbatar da ranar miƙawa da abokin ciniki.", "Ga kowane hatsari: ku tabbatar da lafiya, ku rubuta, ku ba da rahoto kamar yadda ake buƙata, ku yi nazari ku sabunta tsare-tsare."],
          words: [["Kusan hatsari (near miss)", "abin da ya faru inda hatsari ya kusa faruwa."], ["Guraben da suka ɓace (coverage gap)", "yankin da babu hotuna ko hotunansa ba su da kyau."]],
          slides: [
            { title: "Ku duba bayanai a wurin", bullets: ["Ku ƙirga hotuna, ku duba ko sun dushe", "Ku nemi guraben da suka ɓace; saurin haɗa hotuna", "Ku sake tashi a guraben, ku ajiye kwafi a na'ura ta biyu"] },
            { title: "Ku cike bayanai", bullets: ["Littattafan rajistar tashi, batir da gyara", "Ainihin yanayi a cikin kundin aiki", "Ku tabbatar da ranar miƙawa"] },
            { title: "Idan wani abu ya lalace", bullets: ["Ku tabbatar wurin yana lafiya", "Ku rubuta, ku ba da rahoto kamar yadda ake buƙata; ku sanar da inshora", "Ku yi nazari ku sabunta tsare-tsare"] }
          ],
          sources: [KCAA_UAS, NCAA_P21],
          tryIt: "Aikin ƙarshe: ku haɗa cikakken kundin aikinku: iyakar aiki, binciken wuri da zanen taswira, duba sararin sama da izini tare da majiyoyi, kimanta haɗari, tsarin tashi, ayyukan ma'aikata da bayani, shirye-shiryen ko-ta-kwana, katin a tashi ko kada a tashi, da jerin binciken bayan tashi da samfurin littafin rajista.",
          youCanNow: "rufe aiki cikin ƙwarewa da duba bayanai, cikakkun littattafan rajista da kula da hatsari yadda ya kamata.",
          quickCheck: [
            { objective: "O6", q: "Saurin haɗa hotuna a ƙaramin inganci (low-resolution stitch) don me ne?", options: ["Yin rahoton ƙarshe", "Cajin batir", "Tura takardar kuɗi", "Duba guraben da suka ɓace kafin barin wurin"], answer: 3, why: "Saurin haɗa hotuna yana nuna guraben yayin da ma'aikata da yanayi suna nan don a sake tashi." },
            { objective: "O6", q: "Drone ɗinku ya bugi turken shinge kuma fiffike ɗaya ya karye. Me za ku fara yi?", options: ["Ku ba da rahoto wata mai zuwa", "Ku tabbatar wurin yana lafiya, sannan ku rubuta shi kuma ku ba da rahoto kamar yadda doka ta buƙata", "Ku ɓoye lalacewar daga abokin ciniki", "Ku yi aiki na gaba da fiffike ɗaya"], answer: 1, why: "Ku fara tabbatar wurin yana lafiya, sannan ku rubuta hatsarin kuma ku ba da rahoto ga hukuma da inshora kamar yadda ake buƙata." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Gudanar da tashin",
        questions: [
          { objective: "O4", q: "Wane ne ke da magana ta ƙarshe kan tsaron tashi?", options: ["Abokin ciniki", "Mai lura", "Babban matuƙi", "Mai ƙera drone"], answer: 2, why: "Babban matuƙi ne ke da alhakin tsaron tashi." },
          { objective: "O4", q: "Wane ne zai iya cewa a tsaya saboda tsaro lokacin aiki?", options: ["Kowa daga cikin ma'aikata", "Abokin ciniki kaɗai", "Mai lura kaɗai", "Babu kowa da zarar drone ya tashi"], answer: 0, why: "Duk wanda ya ga haɗari zai iya cewa a tsaya." },
          { objective: "O5", q: "Telemetry ta nuna iska yanzu ta wuce iyakarku. Ya kamata ku:", options: ["Ku tashi da sauri don gamawa", "Ku kashe gargaɗi", "Ku ƙara hawa sama", "Ku dakata ko ku sauka"], answer: 3, why: "Wuce iyaka yana nufin a tsaya; a gama daga baya." },
          { objective: "O6", q: "Kafin barin wurin ya kamata ku:", options: ["Ku goge hotuna don samun wuri", "Ku duba hotuna don dushewa da guraben da suka ɓace, ku sake tashi a guraben", "Ku tafi ba tare da sanar da abokin ciniki ba", "Ku goge katin ajiya (format)"], answer: 1, why: "Gyara guraben a wurin yana hana tafiya ta biyu." },
          { objective: "O6", q: "Drone ɗinku ya yi kusan karo da ƙaramin jirgin sama. Bayan tabbatar da lafiya ya kamata ku:", options: ["Ku rubuta shi kuma ku ba da rahoto kamar yadda hukumarku ta buƙata", "Ku ɓoye shi", "Ku gudu da sauri", "Ku ɗora laifi kan jirgin saman"], answer: 0, why: "Ba da rahoto yana taimakon tsaro kuma dokoki sukan buƙace shi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Jirage Marasa Matuƙi a Noma: Tsara Aiki da Gudanar da Tashi",
    questions: [
      { objective: "O1", q: "Iyakar aiki (mission scope) ita ce:", options: ["Kyamarar drone", "Rubutacciyar yarjejeniyar abin da aiki zai ƙunsa da abin da zai miƙa", "Rahoton yanayi", "Littafin rajistar tashi"], answer: 1, why: "Tana saita yanki, abubuwan da za a miƙa, ranaku, farashi da iyakoki." },
      { objective: "O1", q: "Wanne ne abin da za a miƙa (deliverable)?", options: ["Lasisin matuƙi", "Batir", "Taswirar NDVI da rahoto mai shafi ɗaya", "Fiffike"], answer: 2, why: "Abubuwan da za a miƙa su ne abin da abokin ciniki zai karɓa." },
      { objective: "O1", q: "Me yasa za a faɗi iyakokin taswirar drone a cikin iyakar aiki?", options: ["Don guje wa baƙin ciki da jayayya", "Don karɓar ƙarin kuɗi", "Don ruɗar abokin ciniki", "Ba a buƙata"], answer: 0, why: "Iyakoki a sarari suna kawo tsammani na gaskiya." },
      { objective: "O2", q: "Binciken taswira (desk survey) yana amfani da:", options: ["Felu kaɗai", "Drone yana tashi", "Tarakta", "Taswirori da hotunan tauraron ɗan adam kafin zuwa wurin"], answer: 3, why: "Binciken taswira yana gano haɗurra da matsalolin sararin sama da wuri." },
      { objective: "O2", q: "Wanne ya kamata ku tabbatar a rubuce kafin tashi a gonar abokin ciniki?", options: ["Girman takalmin matuƙi", "Izinin mai gona ko manaja", "Farashin amfanin gona", "Babu komai"], answer: 1, why: "Izini a rubuce yana kare kowa." },
      { objective: "O2", q: "Me yasa za a duba sabis na waya a binciken ƙasa?", options: ["Don waƙa", "Don kafofin sada zumunta", "Manhajoji, taswirori da sadarwa na iya buƙatarsa", "Ba shi da amfani"], answer: 2, why: "Rashin sabis na iya shafar taswirori, haɗin kai da gaggawa." },
      { objective: "O3", q: "Kimanta haɗari tana lissafa:", options: ["Haɗurra, yiwuwa, girman illa da matakan kariya", "Kuɗaɗe kawai", "Sunayen abokan ciniki", "Irin amfanin gona"], answer: 0, why: "Tana nuna abin da zai iya lalacewa da yadda za a rage shi." },
      { objective: "O3", q: "Wayar wutar lantarki ta bi gefen gona. Matakin kariya mai kyau shi ne:", options: ["Ku tashi kusa don hotuna mafi kyau", "Ku yi watsi da ita", "Ku tashi da dare", "Ku nisanta layukan tashi sosai kuma ku saita tsayin RTH sama da ita"], answer: 3, why: "Nisa da tsayin RTH mai lafiya suna rage haɗarin karo." },
      { objective: "O3", q: "Me yasa za a raba babban yanki zuwa tashe-tashe na batir ɗaya?", options: ["Don amfani da ƙananan hotuna", "Don kowane tashi ya gama lafiya a batir ɗaya", "Don ruɗar manhajar", "Domin haɗuwar hotuna tana buƙata"], answer: 1, why: "Tsarawa bisa batir yana hana gaggawar ƙarewar batir." },
      { objective: "O3", q: "Daga ina ya kamata ku sami hasashen yanayi?", options: ["Hasashe kawai", "Ra'ayin aboki", "Hukumar yanayi ta ƙasarku, ranar da ta gabata da safiyar ranar aiki", "Littafin bara"], answer: 2, why: "Hasashen hukuma shi ne mafi aminci." },
      { objective: "O3", q: "Shirin ko-ta-kwana (contingency) shi ne:", options: ["Aikin da aka shirya tun da wuri idan wani abu ya canja ko ya lalace", "Saitin kyamara", "Biyan kuɗi", "Sashen drone"], answer: 0, why: "Shirye-shiryen ko-ta-kwana suna bar ma'aikata su yi aiki da sauri kuma lafiya." },
      { objective: "O4", q: "Babban aikin mai lura shi ne:", options: ["Sarrafa bayanai", "Biyan ma'aikata", "Tashi da drone", "Kallon drone, sararin sama da ƙasa da gargaɗin matuƙi"], answer: 3, why: "Mai lura yana sa ido kan haɗurra." },
      { objective: "O4", q: "Kalmomin umarni kamar \"hold\" da \"land now\" suna taimakawa saboda:", options: ["Suna jin kamar na ƙwararru", "Kowa yana fahimtarsu nan take", "Drone yana buƙatarsu", "Suna adana batir"], answer: 1, why: "Gajerun kalmomin da aka amince da su suna rage ruɗani lokacin gaggawa." },
      { objective: "O5", q: "Telemetry ta haɗa da:", options: ["Farashin amfanin gona", "Sunayen manoma", "Batir, tsayi, wuri, sigina da gargaɗi", "Yanayin wata mai zuwa"], answer: 2, why: "Telemetry bayanan tashi ne kai tsaye." },
      { objective: "O5", q: "Wani mutum ya shigo yankin tashi. Ma'aikata ya kamata su:", options: ["Tsayar da drone a sama ko su sauka", "Tashi ƙasa-ƙasa a kansa", "Ci gaba da tashi a layuka", "Ce masa ya gudu"], answer: 0, why: "Mutane a yankin suna ƙara haɗari; ku dakata ko ku sauka." },
      { objective: "O5", q: "\"Gamawa gobe ya fi hatsari yau\" yana nufin:", options: ["Koyaushe ku tashi da yamma", "Kada ku taɓa gama aiki", "Ku karɓi ƙarin kuɗi saboda jinkiri", "Ku tsaya idan yanayi ba shi da lafiya, ko da ba a gama aikin ba"], answer: 3, why: "Tsaro yana gaban jadawali." },
      { objective: "O6", q: "Me yasa za a ajiye kwafin bayanai a na'ura ta biyu kafin tafiya?", options: ["Don cika ma'aji", "Don bayanai su tsira idan na'ura ɗaya ta lalace ko ta ɓace", "Domin drone yana buƙata", "Don raba wa baƙi"], answer: 1, why: "Kwafi na biyu yana kare bayanan abokin ciniki da aikinku." },
      { objective: "O6", q: "Littattafan rajistar tashi bayan aiki suna rubuta:", options: ["Sunan abokin ciniki kawai", "Farashi kawai", "Lokaci, batir, matuƙi da matsaloli na kowane tashi", "Babu komai"], answer: 2, why: "Littattafan rajista suna tallafa wa tsaro, gyara da bin doka." },
      { objective: "O6", q: "Bayan hatsari, abu na farko shi ne:", options: ["Tabbatar wurin yana lafiya", "Saka hotuna a intanet", "Tafiya da sauri", "Goge littattafan rajista"], answer: 0, why: "Mutane da dukiya su ne farko." },
      { objective: "O6", q: "Me yasa za a yi nazarin hatsari tare da ma'aikata?", options: ["Don ɗora wa wani laifi", "Don cika lokaci", "Ba shi da amfani", "Don sabunta tsare-tsare don kada ya sake faruwa"], answer: 3, why: "Koyo daga hatsari yana inganta tsaro." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      1,
      3,
      4,
      6,
      10,
      11,
      13,
      16,
      18
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe na kundin ku sake duba shi.",
    criteria: [
      {
        name: "Iyakar aiki",
        objective: "O1",
        notYet: "Babu shawarar abokin ciniki, yanki ko abubuwan da za a miƙa.",
        meets: "An rubuta shawara, yanki, abubuwan da za a miƙa, cikakken bayani, ranaku, mai hulɗa, farashi da raba bayanai, tare da abin da drone ba zai iya yi ba.",
        exceeds: "Abokin ciniki ya sa hannu ko ya tabbatar a rubuce."
      },
      {
        name: "Binciken wuri da izini",
        objective: "O2",
        notYet: "Babu bincike, ko babu izini da duba sararin sama.",
        meets: "Binciken taswira da na ƙasa tare da zanen taswirar haɗurra, duba sararin sama tare da majiyoyi, da izini a rubuce.",
        exceeds: "Ya haɗa da sabis na waya, inuwar ma'aikata da ranakun kowane bincike."
      },
      {
        name: "Kimanta haɗari",
        objective: "O3",
        notYet: "An lissafa haɗurra ba tare da matakan kariya ba.",
        meets: "Tebur mai haɗari, yiwuwa, girman illa da matakin kariya ga kowane babban haɗari.",
        exceeds: "Ya ƙunshi zafi, iska, 'yan kallo, katsewar haɗi da duk wani filin saukar jirgi da ke kusa."
      },
      {
        name: "Tsarin tashi da ko-ta-kwana",
        objective: "O3",
        notYet: "Babu tsayi, haɗuwar hotuna, batir ko iyakokin yanayi.",
        meets: "An raba yanki zuwa tashe-tashe, tsayi, cikakken hoto, haɗuwar hotuna, gudu, batir tare da na ajiya, lokaci, iyakokin yanayi da shirye-shiryen ko-ta-kwana.",
        exceeds: "Yana nuna lissafin yawan batir da ranar ajiya."
      },
      {
        name: "Ma'aikata da bayani",
        objective: "O4",
        notYet: "Babu ayyuka ko bayanan bayani.",
        meets: "Ayyuka da sunaye da bayanan bayani tare da haɗurra, iyakoki, ko-ta-kwana da kalmomin umarni.",
        exceeds: "Ya haɗa da kayan tsaro, ruwan sha da yadda ake nisantar da 'yan kallo."
      },
      {
        name: "Rufe aikin",
        objective: "O6",
        notYet: "Babu jerin binciken bayan tashi ko littafin rajista.",
        meets: "Jerin binciken bayan tashi tare da duba bayanai, kwafin ajiya, littattafan rajistar tashi da matakan rahoton hatsari.",
        exceeds: "Ya haɗa da yadda darussa daga hatsari ke sabunta tsare-tsare."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka sami \"Ya cika\" ko \"Ya wuce\" a kowane layin rubric na kundin aiki",
      "Masu koyo da suka ce sun yi amfani da rubutaccen kundin aiki don aikin abokin ciniki na gaske cikin kwanaki 60 (binciken biyo baya)",
      "Kamfanonin drone da suka ce an rage sake tashi, jayayya ko hatsari bayan horo",
      "Masu koyo da suka ɗauki wani kwas na drone ko suka sake samun abokin ciniki"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfutar tafi-da-gidanka mai manhajar taswira da hoton tauraron ɗan adam",
      "Samfuran takardu ko littafin rubutu don iyakar aiki, kimanta haɗari, tsarin tashi da littattafan rajista",
      "Drone da manhajar tsarawarsa, idan akwai, don aikin gwaji",
      "Kusan minti 60 gaba ɗaya, a gajerun zama, da lokacin gina kundin aiki"
    ],
    facilitatorNotes: [
      "Ku yi gwajin farko tare, sannan ku gina misalin kundin aiki ɗaya a matsayin rukuni kafin masu koyo su gina nasu.",
      "Ku yi wasan kwaikwayon bayani da matuƙi, mai lura da mai hulɗa a gona, kuma ku yi atisayen kalmomin umarni.",
      "Duk wani tashin gwaji dole ya bi dokokin drone na ƙasar, da matuƙa masu lasisi da izinin da ake buƙata.",
      "Ku yi amfani da misalan ayyukan da ke cikin kwas idan masu koyo ba su da abokin ciniki tukuna.",
      "Ku ba da maki ga kundin aiki da rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
