"use strict";

// Koach Learn course, Hausa (ha) translation of agriculture-africa/agri-drones-regulations.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const KCAA_UAS = { name: "Hukumar Sufurin Jiragen Sama ta Kenya (KCAA): Jiragen sama marasa matuƙi (UAS)", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const KCAA_PORTAL = { name: "Tsarin intanet na KCAA don jiragen drone (RPAS)", url: "https://rpas.kcaa.or.ke/" };
const KCAA_FEES = { name: "KCAA: Civil Aviation (Regulatory Fees and Charges for Unmanned Aircraft Systems) Regulations, 2020 (L.N. 4 of 2021)", url: "https://www.kcaa.or.ke/sites/default/files/docs/uas/UASCharges.pdf" };
const KCAA_ROC = { name: "KCAA: Takardar shaidar mai gudanar da drone (Remote Air Operator Certificate, ROC)", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems/roc" };
const KCAA_UTO = { name: "KCAA: Cibiyoyin horar da matuƙan drone (UTO)", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems/uto" };
const KCAA_REGS_2026 = { name: "KCAA: Ƙa'idojin Sufurin Jiragen Sama na Kenya na 2026 (ƙa'idojin da aka wallafa)", url: "https://www.kcaa.or.ke/published-regs-2026" };
const KENYA_LAW_UAS = { name: "Kenya Law: The Civil Aviation (Unmanned Aircraft Systems) Regulations, 2020 (L.N. 42 of 2020)", url: "https://new.kenyalaw.org/akn/ke/act/ln/2020/42" };
const NCAA_P21 = { name: "Hukumar Sufurin Jiragen Sama ta Najeriya (NCAA): Nig.CARs 2023 Sashe na 21, Jiragen drone (RPAS)", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };
const FAO_WHO_AERIAL = { name: "FAO da WHO: Jagora kan feshin maganin ƙwari daga sama (2024)", url: "https://www.who.int/publications/i/item/9789240076785" };
const PCPB = { name: "Hukumar Kula da Magungunan Ƙwari ta Kenya (Pest Control Products Board, PCPB)", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "Hukumar Kula da Abinci da Magunguna ta Ƙasa (NAFDAC, Najeriya)", url: "https://www.nafdac.gov.ng" };
const ODPC = { name: "Ofishin Kwamishinan Kare Bayanai (ODPC, Kenya)", url: "https://www.odpc.go.ke" };
const NDPC = { name: "Hukumar Kare Bayanai ta Najeriya (NDPC)", url: "https://ndpc.gov.ng" };

module.exports = {
  id: "agri-drones-regulations-ha",
  lang: "ha",
  translationOf: "agri-drones-regulations",
  category: "Agriculture (Africa)",
  name: "Jiragen Drone na Noma a Afirka: Dokokin Sufurin Jiragen Sama da Lasisi",
  skills: "Nemo da karanta ƙa'idojin drone na ƙasa, Rarraba drone da aiki bisa haɗari, Jera lasisoshi da takardun shaida da aiki ke buƙata, Kula da ayyuka na musamman (feshi, BVLOS, kusa da filin jirgi), Gina fayil na bin doka, Bibiyar sauye-sauyen dokoki",
  outcome: "karanta ƙa'idojin drone na ƙasarku, gane irin rajista, lasisi, takardun shaida da izinin da aikin drone na noma ke buƙata, da gina cikakken fayil na bin doka don kasuwancin ayyukan drone.",
  about: [
    "Wannan kwas na mutanen da ke shirin tuƙa jiragen drone a matsayin sana'a a harkar noma a Afirka ne: 'yan kasuwar ayyukan drone, manajojin kamfanonin noma da manyan gonaki, shugabannin ƙungiyoyin manoma da jami'an faɗakarwa, da matasa da ke koyon zama matuƙan drone. Ya fi zurfi fiye da taƙaitaccen bayani a jerin kwasa-kwasan sa ido kan amfanin gona.",
    "Babi na 1 yana bayanin yadda aka gina dokar drone, sannan ya bi ta dokokin Kenya da Najeriya: Civil Aviation (Unmanned Aircraft Systems) Regulations, 2020 da Hukumar Sufurin Jiragen Sama ta Kenya (KCAA) ke kula da su, da Sashe na 21 na Ƙa'idojin Sufurin Jiragen Sama na Najeriya na 2023 da Hukumar Sufurin Jiragen Sama ta Najeriya (NCAA) ke kula da shi. Babi na 2 yana magana kan lasisi da takardun shaidar masu gudanarwa, ayyuka na musamman kamar feshi da tashi kusa da filin jirgin sama, da gina fayil na bin doka da kula da shi.",
    "Wannan ilimi ne, ba shawarar shari'a ba. Dokokin drone doka ne, suna canjawa, kuma sauran ƙasashen Afirka suna da hukumominsu da dokokinsu. Kowane darasi yana nuna majiyar hukuma; ku tabbatar da komai a can, ko a wurin hukumar ko lauya, kafin ku ɗauki mataki. Kada ku taɓa tuƙa drone ba tare da rajista, lasisi da izinin da ƙasarku ke buƙata ba."
  ],
  finalTask: "Ku gina fayil na bin doka don kasuwancin ayyukan drone a ƙasarku da zai yi taswirar gonaki ga manoma da manyan gonaki (kuma, idan kun shirya, ya yi feshi): hukumar da ƙa'idojin da suka shafe ku, da hanyoyin haɗi da ranar da kuka duba; rukunin drone ɗinku da matakin haɗarin aikin; kowace rajista, takardar izini, lasisi, takardar shaida da izinin da ake buƙata, wanda ke bayar da ita da matsayinta; takardun da ake buƙata (littafin jagorar ayyuka, inshora, bayanan gyara da na tashi); ƙarin izinin da ake buƙata don kowane feshi; matakan kare bayanai; da jadawalin duba sauye-sauyen dokoki da sabuntawa.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Mutanen da ke shirin tuƙa jiragen drone a matsayin sana'a a harkar noma a Afirka: 'yan kasuwar ayyukan drone, manajojin kamfanonin noma da manyan gonaki, shugabannin ƙungiyoyin manoma da jami'an faɗakarwa, da matasa da ke koyon zama matuƙan drone, galibi a Kenya da Najeriya.",
    startingPoint: "Yawancinsu sun san abin da drone na noma ke yi, wataƙila sun taɓa tuƙa ƙarami. Kaɗan ne suka karanta ƙa'idojin drone na ƙasarsu, suka san lasisoshi da takardun shaidar da aikin da ake biya ke buƙata, ko suke ajiye takardun da mai duba, abokin ciniki ko kamfanin inshora zai nema.",
    gap: "Tuƙa drone don kuɗi ba tare da rajista, lasisi, takardar shaidar mai gudanarwa ko izini daidai ba yana iya kawo tara, ƙwace drone da rasa abokan ciniki, kuma feshi ba tare da izinin sufurin jiragen sama da na maganin ƙwari ba yana jefa mutane da amfanin gona cikin haɗari. Sanin yadda ake karanta dokokin da gina fayil na bin doka yana bar kasuwancin drone ya yi aiki bisa doka, ya sami kwangiloli kuma ya sami inshora.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi; ana bayanin kowace kalmar doka da ta sufurin jiragen sama",
      "Na'urori: waya ko kwamfuta mai intanet don buɗe shafin hukumar da sauke dokokin",
      "Dokoki, kuɗaɗe da fom suna canjawa: masu koyo suna tabbatar da komai a shafin hukuma, a wurin hukumar ko lauya",
      "Wannan ilimi ne, ba shawarar shari'a ba; babu tuƙa drone ko feshi a cikin kwas ɗin",
      "Sauran ƙasashen Afirka suna da hukumominsu da dokokinsu, don haka masu koyo suna amfani da hanyar a ƙasarsu"
    ],
    prerequisites: "Ana ba da shawarar a fara ɗaukar kwas ɗin \"Drone don Sa Ido a Gona 1: Gabatarwa, Dokoki da Tsaro\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Don ƙasarku", action: "nemo ƙa'idojin drone, ma'aunai da jadawalin kuɗaɗe na hukumar sufurin jiragen sama, da faɗin sunan kowane mataki na dokar drone", standard: "tare da hanyoyin haɗi da ranar da kuka duba" },
    { id: "O2", condition: "Idan aka ba ku aikin drone na noma na kasuwanci a Kenya", action: "jera rajista, lasisoshi, takardun shaida da izinin KCAA da wataƙila zai buƙata", standard: "kuna faɗin ƙa'idojin da suka fito daga ciki, da cewa dole a duba kuɗaɗen yanzu da sababbin dokoki" },
    { id: "O3", condition: "Idan aka ba ku nauyin drone da aikin da aka shirya a Najeriya", action: "rarraba drone ɗin da matakin haɗarin aikin a ƙarƙashin Sashe na 21, da jera iyakokin aiki da suka shafe shi", standard: "da rukunin nauyi da matakin haɗari daidai" },
    { id: "O4", condition: "Don kasuwancin ayyukan drone", action: "tsara lasisoshin matuƙa da takardar shaidar mai gudanarwa da yake buƙata, da takardun da takardar shaidar ke nema", standard: "kuna raba izinin mutumin da ke tuƙawa da izinin kasuwancin" },
    { id: "O5", condition: "Idan aka ba ku aikin da ya ƙunshi feshi, BVLOS, tashi da dare ko filin jirgin sama", action: "gane ƙarin izinin sufurin jiragen sama da na maganin ƙwari da yake buƙata, da waɗanda ke bayar da su", standard: "kafin ku yi tayin aikin ko ku tsara shi" },
    { id: "O6", condition: "Don kasuwancin drone ɗinku", action: "gina fayil na bin doka da jadawalin sabuntawa da duba dokoki", standard: "da kowace takarda da ake buƙata a jere da matsayinta" }
  ],
  chapters: [
    {
      name: "Babi na 1: Dokar drone a Afirka",
      lessons: [
        {
          objectives: ["O1"],
          title: "Yadda aka gina dokar drone",
          minutes: 5,
          goal: "Nemo da faɗin sunan matakan dokar drone da suka shafi ƙasarku.",
          text: [
            "Ƙasashe suna gina dokokin sufurin jiragen sama bisa ma'aunai na duniya daga ICAO, Hukumar Sufurin Jiragen Sama ta Duniya ta Majalisar Ɗinkin Duniya, amma kowace ƙasa tana rubuta dokar drone ɗinta kuma tana aiwatar da ita. Yawanci akwai dokar sufurin jiragen sama da majalisa ta zartar; ƙa'idojin drone da aka yi a ƙarƙashin wannan doka; ma'aunan aiwatarwa ko littattafan jagora masu cikakken bayanin fasaha; jadawalin kuɗaɗe; da sanarwa ko takardun umarni don yanayi na musamman.",
            "Yawancin dokokin drone na zamani suna rarraba ayyuka bisa haɗari. Tashi mai ƙaramin haɗari (ƙaramin drone, ana ganinsa, ƙasa-ƙasa, nesa da mutane da filayen jirgi) yana da mafi sauƙin buƙatu. Tashi mai babban haɗari (drone masu nauyi, wuce gani, sama da mutane, kusa da filin jirgin sama, feshi ko jefa abubuwa) yana buƙatar ƙari: izini, masu gudanarwa masu takardar shaida, matuƙa masu lasisi, wani lokaci kuma jirgi mai takardar shaida.",
            "Don nemo dokokin ƙasarku, ku je shafin intanet na hukumar sufurin jiragen sama ku nemi sashen da ake kira drones, UAS, RPAS ko unmanned aircraft (jiragen sama marasa matuƙi). Ku sauke ƙa'idojin, ma'aunan da jadawalin kuɗaɗe, ku rubuta ranar. Misalan hukumomi: KCAA (Kenya), NCAA (Najeriya), da hukumomin sufurin jiragen sama na Ghana, Rwanda, Uganda, Tanzania da Afirka ta Kudu."
          ],
          steps: ["Ku buɗe shafin intanet na hukumar sufurin jiragen samanku.", "Ku nemo sashen drones / UAS / RPAS.", "Ku sauke ƙa'idojin, ma'aunan aiwatarwa da jadawalin kuɗaɗe.", "Ku rubuta ranar da sigar kowanne.", "Ku jera yadda dokokin ke rarraba ayyuka bisa haɗari."],
          words: [["ICAO", "Hukumar Sufurin Jiragen Sama ta Duniya, hukumar Majalisar Ɗinkin Duniya da ke kafa ma'aunan sufurin jiragen sama na duniya."], ["Ƙa'idoji (regulations)", "dokokin da dole a bi, waɗanda aka yi a ƙarƙashin dokar majalisa."], ["Ma'aunan aiwatarwa (implementing standards)", "cikakkun dokokin fasaha da ke bayanin yadda ake cika ƙa'idojin."], ["Matakin haɗari (risk category)", "rukunin ayyuka masu kama da juna a haɗari da buƙatu."]],
          slides: [
            { title: "Matakan dokar drone", bullets: ["Dokar sufurin jiragen sama", "Ƙa'idojin drone a ƙarƙashin dokar", "Ma'aunan aiwatarwa da jadawalin kuɗaɗe", "Sanarwa da takardun umarni"] },
            { title: "Dokoki suna bin haɗari", bullets: ["Ƙaramin haɗari: ƙarami, ana ganinsa, ƙasa-ƙasa, nesa da mutane", "Babban haɗari: mai nauyi, wuce gani, sama da mutane", "Feshi ko jefa abubuwa: ƙarin izini"] },
            { title: "Nemo dokokinku", bullets: ["Shafin hukuma: drones, UAS ko RPAS", "Ku sauke ƙa'idoji, ma'aunai, kuɗaɗe", "Ku rubuta rana da siga"] }
          ],
          sources: [KCAA_UAS, NCAA_P21],
          tryIt: "Don ƙasarku, ku jera hukumar sufurin jiragen sama, suna da shekarar ƙa'idojin drone, ko akwai ma'aunan aiwatarwa da jadawalin kuɗaɗe, da ranar da kuka duba. Ku ajiye takardun a babban fayil ɗaya.",
          youCanNow: "nemo matakan dokar drone a ƙasarku da ganin yadda suke rarraba ayyuka bisa haɗari.",
          quickCheck: [
            { objective: "O1", q: "Mene ne jadawalin kuɗaɗe a dokar drone?", options: ["Tsarin tashin jirgi", "Jerin matuƙa", "Jerin izinin da ake da su da kuɗin kowanne", "Hasashen yanayi"], answer: 2, why: "Jadawalin kuɗaɗe yana jera izinin da kuɗinsu, don haka yana nuna abin da ake da shi." },
            { objective: "O1", q: "Kuna son dokokin drone na ƙasarku. A ina za ku fara dubawa?", options: ["Shafin intanet na hukumar sufurin jiragen sama, a sashen drones, UAS ko RPAS", "Tallar mai sayar da drone", "Ƙungiya a kafar sada zumunta", "Bidiyo daga wata ƙasa"], answer: 0, why: "Hukumar sufurin jiragen sama ta kowace ƙasa tana wallafa ƙa'idojin drone, ma'aunai da kuɗaɗenta." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kenya: KCAA da Ƙa'idojin UAS na 2020",
          minutes: 6,
          goal: "Jera izinin Kenya da mai gudanar da drone na noma na kasuwanci zai iya buƙata.",
          text: [
            "A Kenya, ana tafiyar da jiragen drone ƙarƙashin Civil Aviation (Unmanned Aircraft Systems) Regulations, 2020, waɗanda aka yi a ƙarƙashin Civil Aviation Act, 2013 (Dokar Sufurin Jiragen Sama), kuma KCAA ce ke kula da su. Shafin drone na KCAA yana kuma wallafa littafin ma'aunan aiwatarwa (Manual of Implementing Standards) da jadawalin kuɗaɗe, wato Civil Aviation (Regulatory Fees and Charges for Unmanned Aircraft Systems) Regulations, 2020.",
            "Jadawalin kuɗaɗen yana nuna manyan izinin da ake da su: takardar izinin shigo da drone da rajistarsa; takardun shaidar cancantar tashi; Remote Air Operator Certificate (ROC) don masu gudanarwa; izinin ayyuka don Rukuni A da Rukunoni B da C; lasisoshi ga mutane, ciki har da lasisin ɗalibin matukin drone, lasisin matukin drone (RPL), da ƙarin cancanta kamar tashi wuce gani; da izini ga cibiyoyin horo da masu sake sayar da drone. KCAA tana jera masu ROC da cibiyoyin horo da aka amince da su a shafinta, kuma ana neman izini ta tsarin drone ɗinta na intanet.",
            "Shafin KCAA yana kuma jera sababbin Ƙa'idojin Sufurin Jiragen Sama na Kenya da aka wallafa na 2026. Ku duba ko wani daga cikinsu yana canja dokokin drone kafin ku dogara da na 2020, kuma ku duba kuɗaɗen yanzu a ranar da kuka nema."
          ],
          words: [["KCAA", "Hukumar Sufurin Jiragen Sama ta Kenya, wadda ke kula da jiragen drone a Kenya."], ["ROC", "Remote Air Operator Certificate: izinin KCAA ga ƙungiya ko kamfani don gudanar da ayyukan drone."], ["SRPL / RPL", "lasisin ɗalibin matukin drone / lasisin matukin drone."], ["Takardar shaidar cancantar tashi (certificate of airworthiness)", "tabbaci na hukuma cewa jirgi ya dace kuma yana da aminci don tashi."]],
          slides: [
            { title: "Dokar drone ta Kenya", bullets: ["Civil Aviation (UAS) Regulations, 2020", "An yi su ƙarƙashin Civil Aviation Act, 2013", "KCAA ce ke kula da su"] },
            { title: "Izini a jadawalin kuɗaɗe", bullets: ["Izinin shigo da kaya da rajista", "ROC ga masu gudanarwa", "Izinin ayyuka: Rukuni A; B da C", "SRPL, RPL, BVLOS da sauran cancanta"] },
            { title: "Inda za a nema da dubawa", bullets: ["Tsarin drone na KCAA na intanet", "Jerin masu ROC da cibiyoyin horo", "Ku duba ƙa'idojin 2026 da kuɗaɗen yanzu"] }
          ],
          sources: [KCAA_UAS, KENYA_LAW_UAS, KCAA_FEES, KCAA_ROC, KCAA_UTO, KCAA_PORTAL, KCAA_REGS_2026],
          tryIt: "Ku buɗe shafin drone na KCAA da jadawalin kuɗaɗensa. Ku yi tebur na kowane izinin da kasuwancin da ke taswirar gonakin shayi don kuɗi zai buƙata (drone, mutane, kamfani, aiki), da shafi na inda ake nema. Ku bar kuɗaɗe a matsayin \"a duba a ranar\".",
          youCanNow: "jera rajista, lasisoshi, takardun shaida da izinin Kenya da mai gudanar da drone na gona na kasuwanci zai iya buƙata, da inda ake nema.",
          quickCheck: [
            { objective: "O2", q: "Mene ne RPL a Kenya?", options: ["Lambar rajistar drone", "Rasidin kuɗi", "Makarantar horo", "Lasisin matukin drone ga mutumin da ke tuƙawa"], answer: 3, why: "Lasisin matukin drone (RPL) lasisi ne na mutumin da ke tuƙawa." },
            { objective: "O2", q: "Kuna shirin neman izini daga KCAA wata mai zuwa da dokokin 2020. Me za ku fara dubawa?", options: ["Babu komai; dokokin 2020 ba sa canjawa", "Ko sababbin ƙa'idojin da KCAA ta wallafa suna canja dokokin drone, da kuɗaɗen yanzu", "Launin drone ɗin kawai", "Tsohon lasisin maƙwabci"], answer: 1, why: "KCAA tana jera sababbin ƙa'idojin da aka wallafa, kuma dole a duba kuɗaɗe a ranar da kuka nema." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Najeriya: NCAA da Nig.CARs Sashe na 21",
          minutes: 6,
          goal: "Rarraba drone da aiki a ƙarƙashin Sashe na 21 na Najeriya da jera abin da yake buƙata.",
          text: [
            "A Najeriya, Sashe na 21 (Remotely Piloted Aircraft Systems, jiragen da ake tuƙawa daga nesa) na Ƙa'idojin Sufurin Jiragen Sama na Najeriya na 2023 ne ke tafiyar da jiragen drone, takarda mai lamba Nig.CARs/2023/021, wadda ta fara aiki ranar 17 ga Mayu 2023, kuma NCAA ce ke kula da ita. Tana ɗaukar takardun shaida, rajista, ayyuka da sa ido kan RPAS.",
            "Sashe na 21 yana rarraba jirage bisa nauyi: Nano (ƙasa da 250 g), Micro (250 g zuwa ƙasa da 2 kg), Small (2 kg zuwa ƙasa da 25 kg), Medium (25 kg zuwa 150 kg) da Large (sama da 150 kg), kowanne da sharuɗɗansa da izini na gaba daga Hukumar. Yana kuma amfani da matakan haɗarin aiki guda uku: Open (mafi ƙarancin haɗari, dole a yi rajista), Specific (haɗari mafi girma, yana buƙatar izini) da Certified (jirgi, mai gudanarwa da matuƙi duk masu takardar shaida, ana ɗaukarsa kusan kamar jirgin sama mai matuƙi). Yana tanadin lasisin matukin drone da takardun shaidar masu gudanar da RPAS.",
            "Sashe na 21 yana kuma kafa iyakokin aiki, misali tashi a mita 120 (ƙafa 400) ko ƙasa da haka daga ƙasa a lokuta da yawa, nisan mita 30 a kwance daga mutanen da ba sa cikin aikin, rashin tashi sama da wuraren da mutane suke da yawa, da nisantar filayen jirgin sama (kamar cikin kilomita 4 daga wurin motsin jirage na filin jirgi mai sarrafawa, ko kilomita 10 don tashi na kai ko na nishaɗi) sai dai da izini. Ku karanta cikakken rubutun don sharuɗɗan da suka shafi aikinku."
          ],
          words: [["NCAA", "Hukumar Sufurin Jiragen Sama ta Najeriya, wadda ke kula da jiragen drone a Najeriya."], ["Nig.CARs", "Ƙa'idojin Sufurin Jiragen Sama na Najeriya (Nigeria Civil Aviation Regulations)."], ["Open / Specific / Certified", "matakan haɗarin aiki guda uku na Sashe na 21, daga mafi ƙarancin haɗari zuwa mafi girma."], ["Wurin motsin jirage (movement area)", "ɓangaren filin jirgin sama da jirage ke amfani da shi don tashi, sauka da tafiya a ƙasa."]],
          slides: [
            { title: "Dokar drone ta Najeriya", bullets: ["Nig.CARs 2023 Sashe na 21: RPAS", "Ya fara aiki ranar 17 ga Mayu 2023", "NCAA ce ke kula da shi"] },
            { title: "Rukunoni bisa nauyi", bullets: ["Nano < 250 g; Micro 250 g zuwa < 2 kg", "Small 2 zuwa < 25 kg; Medium 25-150 kg", "Large > 150 kg"] },
            { title: "Matakan haɗari", bullets: ["Open: mafi ƙarancin haɗari, da rajista", "Specific: yana buƙatar izini", "Certified: jirgi, mai gudanarwa, matuƙi masu takardar shaida"] },
            { title: "Misalan iyakoki", bullets: ["Mita 120 (ƙafa 400) daga ƙasa a lokuta da yawa", "Mita 30 daga mutanen da ba sa cikin aikin", "Nisa daga filayen jirgin sama sai da izini"] }
          ],
          sources: [NCAA_P21],
          tryIt: "Wani kamfanin noma a Najeriya yana son yin taswirar gonakin rogo a Jihar Ogun da drone mai fikafikai da yawa (multirotor) na kg 1.2, da multirotor na kg 15 don feshi. Ta amfani da Sashe na 21, ku rubuta rukunin nauyin kowane drone, matakin haɗarin kowane aiki, da tambayoyi uku da za ku yi wa NCAA.",
          youCanNow: "rarraba drone da aiki a ƙarƙashin Sashe na 21 na Najeriya da jera abin da yake buƙata.",
          quickCheck: [
            { objective: "O3", q: "A ƙarƙashin Sashe na 21, wane mataki ne ke buƙatar jirgi, mai gudanarwa da matuƙi su sami takardar shaida?", options: ["Certified", "Open", "Nano", "Micro"], answer: 0, why: "Ana ɗaukar matakin Certified kusan kamar jirgin sama mai matuƙi, da jirgi, mai gudanarwa da matuƙi masu takardar shaida." },
            { objective: "O3", q: "Wani manomi a Najeriya ya nemi ku tuƙa drone mita 10 daga mutane a kasuwar ƙauye waɗanda ba sa cikin aikin. Me za ku yi?", options: ["Ku sauko ƙasa don tsaro", "Ku tuƙa da sauri ku tafi", "Ku tsaya aƙalla mita 30 daga mutanen da ba sa cikin aikin, ku guji wuraren da mutane suke da yawa sai da izini", "Ku ce mutanen su kau da ido"], answer: 2, why: "Sashe na 21 yana sa ayyuka da yawa su tsaya mita 30 daga mutanen da ba sa cikin aikin, kuma nesa da wuraren da mutane suke da yawa." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Dokar drone a Afirka",
        questions: [
          { objective: "O1", q: "Daga ina ƙa'idojin drone na ƙasa suke samun ƙarfin doka?", options: ["Daga littafin jagorar mai ƙera drone", "Daga dokar majalisa, kamar dokar sufurin jiragen sama", "Daga kafar sada zumunta", "Daga manomi"], answer: 1, why: "Ana yin ƙa'idoji ne a ƙarƙashin dokar da majalisa ta zartar." },
          { objective: "O1", q: "Wane aiki ne yawanci ya fi haɗari?", options: ["Ƙaramin drone da ake gani sama da fili marar kowa", "Shawagi a tsayin mita 5", "Drone mai nauyi da ke feshi wuce gani (BVLOS)", "Tashi a na'urar kwaikwayo (simulator)"], answer: 2, why: "Nauyi, BVLOS da feshi duk suna ƙara haɗari da buƙatu." },
          { objective: "O2", q: "A Kenya, kamfanin da ke taswirar manyan gonaki don kuɗi yana buƙatar wane izinin mai gudanarwa?", options: ["Remote Air Operator Certificate (ROC) daga KCAA", "Katin kasuwanci", "Izinin gundumar (county) kawai", "Babu komai"], answer: 0, why: "KCAA ce ke bayar da ROC ga masu gudanar da drone." },
          { objective: "O3", q: "A ƙarƙashin Sashe na 21 na Najeriya, drone na kg 1.2 yana wane rukunin nauyi?", options: ["Nano", "Small", "Large", "Micro"], answer: 3, why: "Micro shi ne 250 g zuwa ƙasa da 2 kg." },
          { objective: "O3", q: "A Sashe na 21, matakin Specific yana nufin:", options: ["Babu wata doka da ta shafe shi", "Haɗari mafi girma; ana buƙatar izini kafin aiki", "Don kayan wasan yara kawai", "Don jirage masu matuƙi kawai"], answer: 1, why: "Ayyukan Specific suna da ƙarin haɗari kuma suna buƙatar izini." }
        ]
      }
    },
    {
      name: "Babi na 2: Lasisi, takardun shaida da bin doka",
      lessons: [
        {
          objectives: ["O4"],
          title: "Lasisin matuƙa da takardun shaidar masu gudanarwa",
          minutes: 5,
          goal: "Tsara izinin mutane da na kamfani don kasuwancin ayyukan drone.",
          text: [
            "Iri biyu na izini suna da muhimmanci ga kasuwanci. Mutumin da ke tuƙawa yana buƙatar lasisin matuƙi da duk wani ƙarin cancanta da dokokin suke buƙata; a Kenya, lasisin matukin drone (RPL), da horo a cibiyar horo da KCAA ta amince da ita; a Najeriya, lasisin matukin drone a ƙarƙashin Sashe na 21. Ƙungiya ko kamfanin da ke sayar da ayyukan drone yawanci yana buƙatar takardar shaidar mai gudanarwa: Remote Air Operator Certificate na KCAA ko RPAS Operator Certificate na NCAA.",
            "Takardar shaidar mai gudanarwa yawanci tana neman shaida cewa kasuwancin zai iya aiki lafiya: littafin jagorar ayyuka (yadda kuke tsarawa, tuƙawa, gyarawa da bayar da rahoto), mutanen da aka naɗa a matsayin masu alhakin aiki, matuƙa masu horo da lasisi, jiragen drone masu rajista, tsarin gyara, bayanan ajiya, da inshora. Misali, Sashe na 21 yana jera takardun shaidar inshorar abin da ya shafi wasu mutane (third-party liability) cikin takardun da dole aiki ya ɗauka.",
            "Ku tanadi lokaci da kuɗi don wannan. Ku nemi jerin abubuwan da ake buƙata na yanzu da kuɗaɗe daga hukumar, kuma ku tambayi cibiyoyin horo da aka amince da su ko suna taimakawa da littafin jagorar ayyuka."
          ],
          steps: ["Ku jera kowane matuƙi da lasisi da ƙarin cancantar da kowanne ke buƙata.", "Ku duba takardar shaidar mai gudanarwa da kasuwancinku ke buƙata.", "Ku karɓi jerin abubuwan neman izini na yanzu daga hukumar.", "Ku rubuta daftarin littafin jagorar ayyuka: tsarawa, tuƙawa, gyara, gaggawa, bayar da rahoto.", "Ku shirya inshora da tsarin ajiyar bayanai."],
          words: [["Littafin jagorar ayyuka (operations manual)", "rubutattun dokokin kasuwanci na yadda yake tsarawa, tuƙawa, gyara jiragen drone da magance gaggawa."], ["Inshorar abin da ya shafi wasu (third-party liability insurance)", "inshorar da ke biya idan aikinku ya cutar da wasu mutane ko kayansu."]],
          slides: [
            { title: "Iri biyu na izini", bullets: ["Mutum: lasisin matukin drone da ƙarin cancanta", "Kasuwanci: takardar shaidar mai gudanarwa"] },
            { title: "Takardar shaidar mai gudanarwa tana nema", bullets: ["Littafin jagorar ayyuka", "Masu alhakin aiki, matuƙa masu lasisi", "Jiragen drone masu rajista, gyara, bayanan ajiya", "Inshora"] },
            { title: "Ku shirya masa", bullets: ["Ku karɓi jerin abubuwa da kuɗaɗe na yanzu", "Ku tambayi makarantun da aka amince da su kan littafin jagora", "Ku ba da lokaci kafin ku karɓi aikin da ake biya"] }
          ],
          sources: [KCAA_ROC, KCAA_UTO, NCAA_P21],
          tryIt: "Ku rubuta jerin abubuwan da ke ciki na littafin jagorar ayyuka don ƙaramin kasuwancin taswirar amfanin gona, da aƙalla sassa takwas (misali: ƙungiya, ayyukan kowa, tsara tashi, dubawa kafin tashi, gaggawa, gyara, bayanan ajiya, rahoton hatsari).",
          youCanNow: "tsara lasisoshin matuƙa da takardar shaidar mai gudanarwa da kasuwancin ayyukan drone ke buƙata, da abin da littafin jagorar ayyuka ya ƙunsa.",
          quickCheck: [
            { objective: "O4", q: "Mece ce takardar shaidar mai gudanarwa (operator certificate)?", options: ["Lasisi ga mutumin da ke tuƙawa", "Izini ga ƙungiya ko kamfanin da ke sayar da ayyukan drone", "Lambar serial ta drone", "Kwangilar abokin ciniki"], answer: 1, why: "Takardar shaidar mai gudanarwa, kamar ROC na KCAA ko RPAS Operator Certificate na NCAA, ta kasuwanci ce." },
            { objective: "O4", q: "Kuna shirin neman takardar shaidar mai gudanarwa. Wace takarda za ku fara rubutawa?", options: ["Saƙo a kafar sada zumunta", "Jerin farashi ga abokan ciniki", "Tambarin drone (logo)", "Littafin jagorar ayyuka don tsarawa, tuƙawa, gyara da bayar da rahoto"], answer: 3, why: "Neman takardar shaidar mai gudanarwa yawanci yana buƙatar littafin jagorar ayyuka da ke nuna yadda kasuwancin ke aiki lafiya." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ayyuka na musamman: feshi, BVLOS da filayen jirgin sama",
          minutes: 6,
          goal: "Gane ayyukan da ke buƙatar ƙarin izini da waɗanda ke bayar da shi.",
          text: [
            "Feshin maganin ƙwari ko jefa kowane abu daga drone aiki ne na musamman. Misali, Sashe na 21 ya hana jefawa ko zubar da abubuwa ta hanyar da za ta jawo haɗari, kuma yana da dokoki na daban don kaya masu haɗari, kuma jadawalin kuɗaɗe na Kenya yana jera izini na daban don matakan haɗari mafi girma. Ana ɗaukar magungunan ƙwari da yawa a matsayin kaya masu haɗari. Ku sa ran za ku buƙaci izinin sufurin jiragen sama na musamman, jirgi mai nauyi mai takardar shaida, da ma'aikata masu horo.",
            "Feshi yana kuma ƙarƙashin dokar maganin ƙwari. A Kenya, Pest Control Products Board (PCPB) ce ke kula da magungunan ƙwari; a Najeriya, NAFDAC ce ke kula da sinadaran noma. Ku tambaye su ko za a iya feshin maganin daga sama, da irin horo da kayan kariya da masu feshi ke buƙata. FAO da WHO sun wallafa jagora kan feshin maganin ƙwari daga sama. Kada ku taɓa yin feshi, ko yin tayin feshi, ba tare da izinin sufurin jiragen sama DA na maganin ƙwari ba.",
            "Sauran ayyuka na musamman sun haɗa da tashi wuce gani (BVLOS), tashi da dare, kusa da filin jirgin sama ko a cikinsa, sama da mutane ko hanyoyi, da a wuraren da aka hana ko aka kare kamar wuraren shaƙatawa na ƙasa (national parks). Kowanne yana buƙatar izini na musamman. Manyan gonaki kusa da ƙananan filayen jirgi sun zama ruwan dare a Afirka: ku duba nisan, ku tambaya kafin ku tsara aiki."
          ],
          words: [["Kaya masu haɗari (dangerous goods)", "abubuwan da za su iya cutar da lafiya, tsaro ko dukiya lokacin jigilarsu, kamar magungunan ƙwari da yawa."], ["Mai kula da maganin ƙwari", "hukumar gwamnati da ke yin rajistar magungunan ƙwari da sarrafa yadda ake amfani da su."], ["BVLOS", "beyond visual line of sight: tashi wuce inda idanunku ke iya ganin drone ɗin."]],
          slides: [
            { title: "Feshi da jefa abubuwa", bullets: ["Ayyuka na musamman masu babban haɗari", "Izinin sufurin jiragen sama, jirgi mai takardar shaida, ma'aikata masu horo", "Magungunan ƙwari da yawa kaya ne masu haɗari"] },
            { title: "Dokar maganin ƙwari ma", bullets: ["Kenya: Pest Control Products Board (PCPB)", "Najeriya: NAFDAC", "Jagorar FAO/WHO kan feshi daga sama"] },
            { title: "Sauran ayyuka na musamman", bullets: ["Wuce gani, da dare", "Kusa da filin jirgin sama, sama da mutane ko hanyoyi", "Wuraren shaƙatawa da wuraren da aka hana"] },
            { title: "Dokar", bullets: ["Babu feshi ba tare da izinin sufurin jiragen sama DA na maganin ƙwari ba", "Ku tambaya kafin ku tsara aiki kusa da ƙaramin filin jirgi"] }
          ],
          sources: [NCAA_P21, KCAA_FEES, PCPB, NAFDAC, FAO_WHO_AERIAL],
          tryIt: "Wata babbar gonar rake mai nisan kilomita 3 daga ƙaramin filin jirgi ta nemi ku yi feshin maganin fungus (fungicide) da drone. Ku jera kowane izini da dubawa da za ku buƙata (sufurin jiragen sama, maganin ƙwari, mai filin, filin jirgin sama) da wanda za ku tuntuɓa don kowanne.",
          youCanNow: "gane ayyuka na musamman da jera izinin sufurin jiragen sama da na maganin ƙwari da suke buƙata.",
          quickCheck: [
            { objective: "O5", q: "Wace hukuma ce ke kula da sinadaran noma a Najeriya?", options: ["NCAA", "ODPC", "KCAA", "NAFDAC"], answer: 3, why: "A Najeriya, NAFDAC ce ke kula da sinadaran noma; izinin sufurin jiragen sama daga NCAA yake." },
            { objective: "O5", q: "Wata babbar gona ta nemi ku yi feshin maganin fungus da drone mako mai zuwa. Lasisin matuƙi kawai kuke da shi. Me za ku yi?", options: ["Kada ku yi tayin feshi har sai kun sami izinin sufurin jiragen sama da na maganin ƙwari duka biyu", "Ku yi feshi da sassafe lokacin da babu kowa", "Ku yi feshi a rabin gonar kawai", "Ku yi amfani da drone mai sauƙi ku yi feshi duk da haka"], answer: 0, why: "Feshi yana buƙatar izinin sufurin jiragen sama na musamman da izinin maganin ƙwari; kada ku taɓa yin feshi ba tare da duka biyun ba." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Gina fayil na bin doka da kula da shi",
          minutes: 5,
          goal: "Gina fayil na bin doka da jadawalin da zai sa ya kasance na zamani.",
          text: [
            "Fayil na bin doka yana ɗauke da duk abin da ke tabbatar da cewa aikinku yana bisa doka kuma lafiya, a wuri ɗaya da za ku iya nuna wa mai duba, abokin ciniki ko kamfanin inshora. Ku ajiye kwafi a takarda da kwafin intanet da aka yi ajiyarsa (backup).",
            "Ku saka: ƙa'idoji da ma'aunan da kuke bi (da ranakun da kuka duba); takardun shaidar rajistar kowane drone; takardun izinin shigo da kaya; lasisin matuƙa da ƙarin cancanta; takardar shaidar mai gudanarwa; izinin ayyuka; littafin jagorar ayyuka; takardun shaidar inshora; bayanan gyara; bayanan tashi (flight logs); rahotannin hatsari; yarjejeniyoyi da abokan ciniki da izinin masu fili; da matakan kare bayananku (Kenya: ODPC; Najeriya: NDPC) idan kuna ajiye bayanan sirri na manoma.",
            "Dokoki, kuɗaɗe da fom suna canjawa. Ku riƙe kalandar sabuntawa don kowane lasisi da takardar shaida, kuma ku duba shafin hukumar a kan jadawali ƙayyadadde, misali kowane wata, da kafin kowane sabon nau'in aiki. Ku rubuta abin da kuka duba da lokacin."
          ],
          steps: ["Ku ƙirƙiri fayil ɗin: takarda da na intanet da aka yi ajiyarsa.", "Ku saka ƙa'idoji, takardun shaida, lasisoshi, izini, littafin jagora, inshora.", "Ku saka bayanan gyara, bayanan tashi, rahotannin hatsari, yarjejeniyoyi.", "Ku saka rajistar kare bayanai ko matakai idan kuna ajiye bayanan sirri.", "Ku kafa kalandar sabuntawa da duba dokoki kowane wata."],
          words: [["Bin doka (compliance)", "bin dokoki da ƙa'idojin da suka shafe ku."], ["Sabuntawa (renewal)", "sake nema kafin lasisi ko takardar shaida ta ƙare."]],
          slides: [
            { title: "Wuri ɗaya don shaida", bullets: ["Don masu duba, abokan ciniki da kamfanonin inshora", "Takarda da kwafin intanet da aka yi ajiyarsa"] },
            { title: "Abin da ke shiga ciki", bullets: ["Ƙa'idoji, rajista, takardun izini", "Lasisoshi, takardar shaidar mai gudanarwa, izini", "Littafin jagora, inshora, gyara, bayanan tashi, hatsari"] },
            { title: "Ku kuma saka", bullets: ["Yarjejeniyoyi da abokan ciniki da masu fili", "Matakan kare bayanai (ODPC, NDPC)"] },
            { title: "Ku sa ya kasance na zamani", bullets: ["Kalandar sabuntawa", "Ku duba dokoki kowane wata da kafin sabon nau'in aiki", "Ku rubuta abin da kuka duba da lokacin"] }
          ],
          sources: [KCAA_UAS, KCAA_REGS_2026, NCAA_P21, ODPC, NDPC],
          tryIt: "Aikin ƙarshe: ku gina fayil na bin doka don kasuwancin ayyukan drone a ƙasarku: hukuma da ƙa'idoji da ranaku, rukuni da matakin haɗari, kowane izini da matsayinsa, takardun da ake buƙata, ƙarin izinin feshi idan an shirya, matakan kare bayanai, da kalandar sabuntawa da duba dokoki.",
          youCanNow: "gina fayil na bin doka da kula da shi wanda ke nuna cewa aikin drone ɗinku yana bisa doka kuma lafiya.",
          quickCheck: [
            { objective: "O6", q: "Me ke shiga fayil na bin doka?", options: ["Rasidin drone kawai", "Hotunan tashin da ya gabata kawai", "Lasisoshi, takardun shaida, izini, littafin jagorar ayyuka, inshora da bayanan ajiya", "Biyan kuɗin abokan ciniki kawai"], answer: 2, why: "Fayil na bin doka yana ɗauke da duk abin da ke tabbatar da cewa aikinku yana bisa doka kuma lafiya." },
            { objective: "O6", q: "Lasisin matukin drone ɗinku zai ƙare cikin watanni uku. Me zai hana ku manta?", options: ["Jiran KCAA ta kira ku", "Kalandar sabuntawa mai ranar kowane lasisi da takardar shaida", "Dubawa kawai idan abokin ciniki ya tambaya", "Ajiye lasisin a cikin akwatin drone"], answer: 1, why: "Kalandar sabuntawa da dubawa a kan jadawali suna sa kowane lasisi da takardar shaida su kasance na zamani." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Lasisi, takardun shaida da bin doka",
        questions: [
          { objective: "O4", q: "Wane ne yawanci ke buƙatar takardar shaidar mai gudanarwa?", options: ["Ƙungiya ko kamfanin da ke sayar da ayyukan drone", "Kowane manomi da aka yi taswirar gonarsa", "Shagon drone", "Babu kowa"], answer: 0, why: "Takardun shaidar mai gudanarwa suna amincewa da kasuwancin da ke gudanar da ayyuka." },
          { objective: "O4", q: "Mene ne littafin jagorar ayyuka?", options: ["Littafin amfani da drone", "Rubutattun dokokin kasuwanci na tsarawa, tuƙawa, gyara da gaggawa", "Takardar talla", "Rasidin kuɗi"], answer: 1, why: "Hukumomi suna neman masu gudanarwa su nuna yadda suke aiki lafiya." },
          { objective: "O5", q: "A Kenya, wace hukuma ce ke kula da magungunan ƙwari?", options: ["KCAA", "ODPC", "Pest Control Products Board (PCPB)", "NDPC"], answer: 2, why: "PCPB ce ke kula da magungunan ƙwari; feshi yana kuma buƙatar izinin sufurin jiragen sama." },
          { objective: "O5", q: "Wani abokin ciniki yana son drone ya yi feshi kusa da ƙaramin filin jirgi. Matakinku na farko shi ne:", options: ["Ku yi feshi da sassafe", "Ku yi feshi a rabin gonar kawai", "Ku yi watsi da filin jirgin", "Ku duba izinin sufurin jiragen sama da na maganin ƙwari da dokokin nisa daga filin jirgin sama"], answer: 3, why: "Feshi da kusanci da filin jirgin sama duka suna buƙatar izini na musamman." },
          { objective: "O6", q: "Sau nawa ya kamata ku duba sauye-sauyen dokoki?", options: ["A kan jadawali ƙayyadadde, kamar kowane wata, da kafin sababbin nau'o'in aiki", "Ba sau ɗaya ba", "Sai idan an ci ku tara", "Kowace shekara goma"], answer: 0, why: "Dokoki da kuɗaɗe suna canjawa; jadawali yana sa ku kasance na zamani." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Jiragen Drone na Noma a Afirka: Dokokin Sufurin Jiragen Sama da Lasisi",
    questions: [
      { objective: "O1", q: "ICAO ita ce:", options: ["Mai kula da drone na Kenya", "Hukumar Sufurin Jiragen Sama ta Duniya ta Majalisar Ɗinkin Duniya", "Sunan kamfanin drone", "Maganin ƙwari"], answer: 1, why: "ICAO tana kafa ma'aunai na duniya da ƙasashe ke ginawa a kai." },
      { objective: "O1", q: "Wane ne ke rubuta dokar drone da aiwatar da ita a kowace ƙasar Afirka?", options: ["ICAO kai tsaye", "Masu ƙera drone", "Hukumar sufurin jiragen sama ta kowace ƙasa", "Tarayyar Afirka (African Union) kawai"], answer: 2, why: "Kowace ƙasa ce ke iko da sararin samanta da dokokin drone ɗinta." },
      { objective: "O1", q: "Ma'aunan aiwatarwa su ne:", options: ["Cikakkun dokokin fasaha da ke bayanin yadda ake cika ƙa'idojin", "Ma'aunan talla", "Irin amfanin gona", "Takardun inshora"], answer: 0, why: "Suna ɗauke da cikakken bayanin fasaha da ke bayan ƙa'idojin." },
      { objective: "O2", q: "Babban ƙa'idojin drone na Kenya su ne:", options: ["Nig.CARs Sashe na 21", "Data Protection Act 2019 (Dokar Kare Bayanai)", "Pest Control Products Act (Dokar Magungunan Ƙwari)", "Civil Aviation (Unmanned Aircraft Systems) Regulations, 2020"], answer: 3, why: "KCAA ce ke kula da UAS Regulations, 2020." },
      { objective: "O2", q: "Jadawalin kuɗaɗe na KCAA yana jera izinin ayyuka don:", options: ["Rukuni A, da Rukunoni B da C", "Kayan wasan yara kawai", "Jirage masu matuƙi kawai", "Shigo da kaya kawai"], answer: 0, why: "Kenya tana ba da izinin ayyuka bisa matakin haɗari." },
      { objective: "O2", q: "A Kenya, neman izinin drone yana bi ta:", options: ["Ofishin gunduma (county)", "Tsarin drone na KCAA na intanet", "Shagon drone", "Kafar sada zumunta"], answer: 1, why: "KCAA tana gudanar da tsarin RPAS na intanet." },
      { objective: "O2", q: "Kafin ku dogara da dokokin drone na Kenya na 2020, ya kamata ku kuma duba:", options: ["Tsofaffin labaran jarida", "Ra'ayin aboki", "Sababbin ƙa'idojin da KCAA ta wallafa da kuɗaɗen yanzu", "Babu komai"], answer: 2, why: "Dokoki da kuɗaɗe suna iya canjawa; KCAA tana jera sababbin ƙa'idoji." },
      { objective: "O3", q: "Dokokin drone na Najeriya suna cikin:", options: ["UAS Regulations na Kenya", "Jagorar FAO", "Dokar Kare Bayanai", "Nig.CARs 2023 Sashe na 21"], answer: 3, why: "Sashe na 21 ne ke ɗaukar RPAS a Najeriya." },
      { objective: "O3", q: "A ƙarƙashin Sashe na 21, drone na kg 15 yana wane rukuni?", options: ["Small", "Nano", "Micro", "Large"], answer: 0, why: "Small shi ne 2 kg zuwa ƙasa da 25 kg." },
      { objective: "O3", q: "Matakin Open na Sashe na 21:", options: ["Ba ya buƙatar rajista", "Shi ne mafi ƙarancin haɗari amma dole a yi rajistar drone ɗin", "Na jiragen feshi masu nauyi ne", "Yana nufin tashi ko'ina"], answer: 1, why: "Ayyukan Open masu ƙaramin haɗari ne amma har yanzu ana yi musu rajista." },
      { objective: "O3", q: "Sashe na 21 yana iyakance ayyuka da yawa zuwa:", options: ["Mita 1,000 daga ƙasa", "Babu iyaka", "Mita 120 (ƙafa 400) daga ƙasa", "Mita 10 daga ƙasa"], answer: 2, why: "Mita 120 (ƙafa 400) daga ƙasa (AGL) iyaka ce da aka saba a Sashe na 21." },
      { objective: "O3", q: "Sashe na 21 yana sa ayyukan drone da yawa su tsaya aƙalla nisan nawa a kwance daga mutanen da ba sa cikin aikin?", options: ["Mita 1", "Mita 3", "Mita 30", "Kilomita 300"], answer: 2, why: "Sashe na 21 yana amfani da mita 30 daga mutanen da ba sa da alaƙa da aikin." },
      { objective: "O4", q: "Lasisin matukin drone na wane ne?", options: ["Mutumin da ke tuƙawa", "Drone ɗin", "Gonar", "Kasuwancin"], answer: 0, why: "Lasisi na mutane ne; takardun shaida na ƙungiyoyi da jirage ne." },
      { objective: "O4", q: "Inshorar abin da ya shafi wasu (third-party liability) tana biya idan:", options: ["An sace muku drone ɗinku", "Aikinku ya cutar da wasu mutane ko kayansu", "Farashin amfanin gona ya faɗi", "Kun ci jarrabawa"], answer: 1, why: "Tana ɗaukar cutarwar da aka yi wa wasu." },
      { objective: "O5", q: "A Najeriya, wa ke kula da sinadaran noma?", options: ["NCAA", "NDPC", "NAFDAC", "KCAA"], answer: 2, why: "NAFDAC ce ke kula da sinadarai, ciki har da sinadaran noma." },
      { objective: "O5", q: "Ana ɗaukar magungunan ƙwari da yawa a matsayin:", options: ["Abinci", "Kayan wasan yara", "Kayan gyara", "Kaya masu haɗari"], answer: 3, why: "Dokokin kaya masu haɗari suna shafar ɗaukarsu ta sama." },
      { objective: "O5", q: "Wanne ne aiki na musamman da ke buƙatar izini na musamman?", options: ["Tashi wuce gani (BVLOS)", "Tashi a na'urar kwaikwayo (simulator)", "Karanta ƙa'idojin", "Cajin batir"], answer: 0, why: "BVLOS yana da haɗari mafi girma kuma yana buƙatar izini." },
      { objective: "O6", q: "Fayil na bin doka shi ne:", options: ["Jerin abokan ciniki kawai", "Wuri ɗaya da ke ɗauke da duk shaidar cewa aikinku yana bisa doka kuma lafiya", "Wani ɓangaren drone", "Takardar bayanin maganin ƙwari"], answer: 1, why: "Yana ɗauke da takardun shaida, lasisoshi, littattafan jagora, bayanan ajiya da sauransu." },
      { objective: "O6", q: "Idan kasuwancinku yana ajiye lambobin wayar manoma a Kenya, wace doka ce kuma ta shafe ku?", options: ["Babu", "Nig.CARs Sashe na 21", "Data Protection Act 2019 (Dokar Kare Bayanai), wadda ODPC ke kula da ita", "Littafin drone kawai"], answer: 2, why: "Dokar kare bayanai ta Kenya ce ke ɗaukar bayanan sirri." },
      { objective: "O1", q: "Wannan kwas ɗin:", options: ["Shawarar shari'a ce don lamarinku", "Lasisin matukin drone ne", "Izinin tuƙa drone ne", "Ilimi ne; ku tabbatar da komai a wurin hukuma"], answer: 3, why: "Dokoki suna canjawa; majiyoyin hukuma da ƙwararru ne ke yanke hukunci." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      3,
      7,
      8,
      12,
      14,
      16,
      17,
      19
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe na fayil ɗin ku sake duba shi.",
    criteria: [
      {
        name: "Hukuma da ƙa'idoji",
        objective: "O1",
        notYet: "Babu hukumar ko ƙa'idojin, ko babu hanyoyin haɗi ko ranaku.",
        meets: "An jera hukumar, ƙa'idoji, ma'aunai da jadawalin kuɗaɗe da hanyoyin haɗi da ranar da aka duba.",
        exceeds: "Ya kuma rubuta duk wasu sababbin dokokin da aka wallafa da yadda suke canja aikin."
      },
      {
        name: "Rukuni da haɗari",
        objective: "O3",
        notYet: "Babu rukunin drone ko matakin haɗarin aikin, ko ba daidai ba ne.",
        meets: "Rukunin drone da matakin haɗarin aikin daidai ne bisa dokokin ƙasar.",
        exceeds: "Ya jera iyakokin aiki da suka shafe shi, kamar tsayi da nisa daga mutane."
      },
      {
        name: "Izinin da ake buƙata",
        objective: "O2",
        notYet: "Akwai izinin da ba a saka ba, ko ba a faɗi wanda ke bayar da su ba.",
        meets: "An jera kowace rajista, takardar izini, lasisi, takardar shaida da izini da wanda ke bayar da ita da matsayinta.",
        exceeds: "Ya haɗa da kuɗaɗen yanzu da jadawalin lokacin samun kowanne."
      },
      {
        name: "Takardun mutane da na kasuwanci",
        objective: "O4",
        notYet: "Babu littafin jagorar ayyuka, inshora ko bayanan ajiya.",
        meets: "An jera lasisin matuƙa, takardar shaidar mai gudanarwa, littafin jagorar ayyuka, inshora, bayanan gyara da na tashi.",
        exceeds: "Ya faɗi sunayen masu alhakin aiki da inda ake ajiye kowace takarda."
      },
      {
        name: "Feshi da ayyuka na musamman",
        objective: "O5",
        notYet: "An tsara feshi ko wasu ayyuka na musamman ba tare da ƙarin izini ba.",
        meets: "An jera ƙarin izinin sufurin jiragen sama da na maganin ƙwari don kowane aiki na musamman da waɗanda ke bayar da su.",
        exceeds: "Ya bayyana yadda nisa daga filin jirgin sama da dokokin kaya masu haɗari suke shafar aikin."
      },
      {
        name: "Kasancewa na zamani",
        objective: "O6",
        notYet: "Babu ranakun sabuntawa ko jadawalin duba dokoki; babu matakan kare bayanai.",
        meets: "Akwai kalandar sabuntawa, jadawali ƙayyadadde na duba dokoki, da matakan kare bayanan manoma.",
        exceeds: "Yana da littafin bayanai da ke nuna dubawar da ta gabata da abin da ya canja."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka sami \"Ya cika\" ko \"Ya wuce\" a kowane layin rubric na fayil na bin doka",
      "Masu koyo da suka nemi rajistar drone, lasisin matuƙi ko takardar shaidar mai gudanarwa cikin kwanaki 90 (binciken biyo baya)",
      "Kasuwancin drone da waɗanda suka kammala kwas ke gudanarwa waɗanda ke da izini don kowane nau'in aikin da suke bayarwa",
      "Masu koyo da suka ɗauki kwas na drone na gaba ko suka fara horon matukin drone da aka amince da shi"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai intanet don buɗe shafin hukumar sufurin jiragen sama",
      "Kwafin ƙa'idojin drone, ma'aunai da jadawalin kuɗaɗe na ƙasar da aka sauke",
      "Littafin rubutu ko babban fayil don fayil na bin doka, da kwafin intanet da aka yi ajiyarsa",
      "Kusan minti 60 gaba ɗaya, a gajerun zama, da ƙarin lokaci don gina fayil na bin doka"
    ],
    facilitatorNotes: [
      "Ku yi gwajin farko tare, sannan ku buɗe shafin drone na hukumar kai tsaye don masu koyo su ga inda ake ajiye dokokin.",
      "Ku duba shafin hukuma don sauye-sauyen dokoki da kuɗaɗe kafin kowane zagayen kwas; kada ku koyar daga tsofaffin bayanai.",
      "Ku faɗa a sarari cewa wannan ilimi ne, ba shawarar shari'a ba, kuma ku tura tambayoyi na musamman zuwa hukumar ko lauya.",
      "Kada ku tuƙa drone ko ku yi feshi a cikin kwas ɗin; kada ku taɓa ƙarfafa feshi ba tare da izinin sufurin jiragen sama da na maganin ƙwari duka biyu ba.",
      "Ku ba da maki ga fayil na bin doka da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
