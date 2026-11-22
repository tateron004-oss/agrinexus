"use strict";

// Koach Learn course, Hausa (ha) translation of shared/ev-technician-basics.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "ev-technician-basics-ha",
  lang: "ha",
  translationOf: "ev-technician-basics",
  category: "Workforce Development",
  name: "Tushen Aikin Makanikin Motocin Lantarki (EV)",
  skills: "Faɗin sassan motar EV, Bin dokokin tsaro na babbar wuta, Lissafin caji, Tsara gyaran ƙaramar wuta na EV, Tsara hanyar takardar shaidar ASE",
  outcome: "bayyana yadda motar lantarki ke aiki, bin dokokin tsaro na babbar wuta (high voltage) da sabon ma'aikacin shago dole ya kiyaye, lissafin lokacin caji na atisaye, tsara gyaran yau da kullum da motar EV ke buƙata, da rubuta naku tsari mai ranaku zuwa takardar shaidar ASE da aikin makanikin EV.",
  about: [
    "Motocin lantarki da na haɗaka (hybrid) suna ƙaruwa a kan hanya kowace shekara, kuma shagunan gyara suna buƙatar makanikai da suka fahimce su. Wannan kwas na masu neman aiki ne, tsofaffin sojoji, matasa, waɗanda suke gyaran mota tuni, da duk wanda yake son sanin aikin EV.",
    "Za ku koyi manyan sassan motar EV, haɗarin babbar wuta da dokokin da ke kare ku, yadda caji yake aiki, waɗanne ayyukan gyara motocin EV ke buƙata har yanzu, da ainihin hanyar samun takardar shaida: jarabawar ASE A6 da A8, sannan jarabawar L3 ta motocin hybrid da na lantarki. Wannan kwas yana shirya ku. Ba ya ba ku takardar shaida, kuma ba zai taɓa neman ku taɓa sassan babbar wuta ba. Ana koyon wannan aiki ne kawai a horon da aka amince da shi, ƙarƙashin kulawa, da kayan kariya da suka dace.",
    "Kowane darasi yana ɗaukar kusan minti biyar. Ku karanta shi, ku kalli hotunan bayani (slides), sannan ku yi aikin \"Gwada yanzu\" da takarda, alƙalami da na'urar lissafi ta waya. Akwai ɗan gwaji bayan kowane darasi da kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe. Darasi na ƙarshe yana gina naku Tsarin Fara Aikin Makanikin EV."
  ],
  finalTask: "Ku yi Tsarin Fara Aikin Makanikin EV ɗinku a shafi ɗaya: (1) ku bayyana a jimloli 3 zuwa 4 yadda motar EV ke aiki, kuna ambaton manyan sassanta; (2) ku rubuta dokokin tsaro na babbar wuta da za ku bi a matsayin sabon ma'aikacin shago; (3) ku warware tambayoyin atisaye guda biyu na lokacin caji, kuna nuna aikinku; (4) ku rubuta jerin binciken gyaran ƙaramar wuta na EV; (5) ku rubuta hanyar takardar shaidarku da ranaku na gaske (shirin horo, ASE A6 da A8, sannan L3, da duk wani horo na mai ɗaukar aiki ko na kamfanin mota), tare da shafin hukuma na kowanne; da (6) ku rubuta sashen \"Ƙwarewar EV\" mai layuka 3 don takardar bayanin aikinku (résumé).",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya da matasa masu neman aikin ƙwarewa a gyaran mota: masu neman aiki, tsofaffin sojoji (da yawa suna da ƙwarewa a motoci ko wutar lantarki), matasa, baƙi masu shigowa ƙasa, da ma'aikatan canjin mai ko taya da ke son ci gaba. Wasu sun gyara motocin fetur; da yawa ba su taɓa aiki a kan motar EV ba.",
    startingPoint: "Suna iya yin lissafi mai sauƙi da na'urar lissafi da karanta gajerun umarni. Wasu sun san injinan fetur da kulawar mota ta asali; yawancinsu ba su san sassan motar EV, haɗarin babbar wuta ko takardun shaidar da shaguna ke nema ba.",
    gap: "Shaguna suna buƙatar ma'aikatan da za su iya gyaran motocin EV lafiya kuma su san lokacin da za su tsaya. Sabon ma'aikaci da ya taɓa sassan babbar wuta masu launin lemu (orange) ba tare da horo ba zai iya mutuwa. Masu koyo suna buƙatar kalmomin, dokokin tsaro, ayyukan gyaran EV na yau da kullum da hanyar takardar shaida a sarari don a ɗauke su aiki kuma su ci gaba.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli (kusan aji 6 zuwa 8)",
      "Babu aikin hannu a kan babbar wuta a wannan kwas: kada a taɓa kebul masu launin lemu, batirin ko sassan cikin na'urorin caji",
      "Kayan aiki kyauta kawai: takarda, alƙalami, na'urar lissafi ta waya da shafukan hukuma",
      "Dokokin takardar shaida da kuɗaɗensu suna canjawa: masu koyo su duba ase.com da sauran shafukan hukuma",
      "Lokaci: darussa na minti 4 zuwa 6 da suka dace da aiki da ganawa"
    ],
    prerequisites: "Babu. Kwas ɗin \"Skilled Trades Careers\" (Sana'o'in Ƙwarewa) da \"Tushen Tsaro a Wurin Aiki (OSHA)\" suna da amfani amma ba dole ba ne."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku jeri ko zanen sassan motar EV", action: "faɗin manyan sassan motar lantarki da aikin kowanne", standard: "kuna samun aƙalla sassa 5 cikin 6 daidai" },
    { id: "O2", condition: "Idan aka ba ku wani yanayi a shago da motar EV", action: "jera haɗarin babbar wuta da dokar tsaro ta kowanne", standard: "har da \"kada a taɓa kebul masu launin lemu ko batirin ba tare da horo ba\" da lockout/tagout (kulle wuta da sa alama)" },
    { id: "O3", condition: "Idan aka ba ku lambobin atisaye na batiri da na'urar caji", action: "lissafin ƙarfin wutar da ake buƙata da lokacin caji", standard: "ba tare da kuskuren lissafi ba, kuna nuna aikinku" },
    { id: "O4", condition: "Idan motar EV ta zo don gyaran yau da kullum", action: "rubuta jerin binciken gyaran ƙaramar wuta da ke bin bayanin gyara na kamfanin mota", standard: "da aƙalla abubuwa 6 daidai kuma babu aikin babbar wuta" },
    { id: "O5", condition: "Ta amfani da ase.com da sauran shafukan hukuma", action: "jera matakan takardar shaida zuwa aikin makanikin EV", standard: "kuna ambaton shafin majiya na kowane mataki" },
    { id: "O6", condition: "Ta amfani da abubuwan da kuka rubuta a wannan kwas", action: "rubuta Tsarin Fara Aikin Makanikin EV mai ranaku da sashen ƙwarewa na résumé", standard: "kuna cika kowane layi na ma'aunin rubric" }
  ],
  chapters: [
    {
      name: "Babi na 1: Yadda motocin EV ke aiki da yadda za ku zauna lafiya",
      lessons: [
        {
          title: "Sassan motar lantarki",
          objectives: ["O1"],
          minutes: 5,
          goal: "Faɗi manyan sassan motar EV da aikin kowanne.",
          text: [
            "Motar lantarki (EV) tana tafiya da wutar lantarki da aka ajiye a cikin babban batiri mai babbar wuta, wanda yawanci yake ƙarƙashin ƙasan motar. A motocin EV da yawa wannan batiri yana aiki da kusan volt 400 zuwa 1,000. Wannan ya fi wutar soket ɗin gida nesa ba kusa ba, kuma yana iya kashe mutum.",
            "Batirin yana ajiye wutar DC. Inverter yana mayar da ita zuwa wutar AC da injin lantarki (motor) ke amfani da ita. Injin yana juya tayoyin. Idan direba ya rage gudu, injin yana aiki a baya kamar janareta, yana mayar da wani ɓangare na wutar cikin batirin. Wannan shi ne regenerative braking (birki mai mayar da wuta).",
            "Na'urar caji ta cikin mota (onboard charger) tana mayar da wutar AC daga tashar caji zuwa DC don cika batirin. DC-to-DC converter yana rage babbar wuta don cajin batirin volt 12 na yau da kullum, wanda har yanzu yake kunna fitilu, rediyo da kwamfutocin motar. Kebul na babbar wuta yawanci launin lemu ne mai haske.",
            "Motar hybrid (HEV) tana da injin fetur da injin lantarki tare da ƙaramin batiri. Plug-in hybrid (PHEV) tana da babban batiri da za ku iya caji ta soket, da kuma injin fetur."
          ],
          words: [["EV (motar lantarki)", "motar da ke tafiya da wutar lantarki daga batiri kawai."], ["Hybrid (HEV)", "motar da ke da injin fetur da injin lantarki, wadda ba a caji ta soket."], ["Plug-in hybrid (PHEV)", "hybrid mai babban batiri da za ku iya caji ta soket."], ["Batirin babbar wuta (high-voltage battery pack)", "babban batirin da ke ba injin wuta; yana iya kashe mutum."], ["Inverter", "sashen da ke mayar da wutar DC daga batiri zuwa AC don injin."], ["Regenerative braking", "rage gudun mota ta amfani da injin a matsayin janareta, wanda ke mayar da wuta cikin batiri."], ["Onboard charger", "sashen cikin mota da ke mayar da wutar AC daga na'urar caji zuwa DC don batiri."], ["DC-to-DC converter", "sashen da ke rage babbar wuta don cajin batirin volt 12."]],
          slides: [
            { title: "Babban batiri", bullets: ["Batirin babbar wuta, yawanci ƙarƙashin ƙasan mota", "Sau da yawa kusan volt 400 zuwa 1,000: yana kisa", "Kebul masu launin lemu suna ɗauke da babbar wuta"] },
            { title: "Yadda motar ke tafiya", bullets: ["Inverter: DC na batiri zuwa AC na injin", "Injin yana juya tayoyi", "Regenerative braking yana mayar da wuta"] },
            { title: "Caji da batirin volt 12", bullets: ["Onboard charger: AC daga tasha zuwa DC don batiri", "DC-to-DC converter yana cajin batirin volt 12"] },
            { title: "EV, HEV, PHEV", bullets: ["EV: batiri kawai", "HEV: injin fetur da injin lantarki, babu caji ta soket", "PHEV: babban batiri da ake caji ta soket, da injin fetur"] }
          ],
          sources: [{ name: "U.S. Department of Energy, Alternative Fuels Data Center: Kulawa da tsaron motocin lantarki", url: "https://afdc.energy.gov/vehicles/electric-maintenance" }],
          tryIt: "A takarda, ku zana mota mai sauƙi daga gefe. Ku zana ku rubuta sunayen sassa shida: batirin babbar wuta, inverter, injin lantarki, onboard charger, DC-to-DC converter da batirin volt 12. Ku zana kebul masu launin lemu da wani launi daban. Kusa da kowane sashe, ku rubuta layi ɗaya game da aikinsa.",
          youCanNow: "faɗin manyan sassan motar EV da aikin kowanne.",
          quickCheck: [
            { objective: "O1", q: "Wane launi ne kebul na babbar wuta a motocin EV yawanci?", options: ["Baƙi", "Kore", "Lemu (orange)", "Fari"], answer: 2, why: "Kebul na babbar wuta yawanci lemu ne mai haske don ma'aikata su ga haɗarin." },
            { objective: "O1", q: "Me regenerative braking ke yi?", options: ["Yana amfani da injin don rage gudun mota da mayar da wuta cikin batiri", "Yana ƙara man birki da kansa", "Yana cajin mota daga tankin fetur", "Yana kashe batirin volt 12"], answer: 0, why: "Injin yana aiki kamar janareta idan ana rage gudu, yana tura wuta zuwa batiri." }
          ]
        },
        {
          title: "Tsaron babbar wuta: ku san lokacin da za ku tsaya",
          objectives: ["O2"],
          minutes: 6,
          goal: "Jera haɗarin babbar wuta a shago da dokar tsaro ta kowanne.",
          text: [
            "Tsarin babbar wuta yana iya jawo girgizar wutar lantarki, ƙuna da arc flash. Yana iya ci gaba da zama mai haɗari bayan an kashe motar, kuma batirin da ya lalace yana iya kama wuta, ko bayan sa'o'i ko kwanaki.",
            "Doka ta farko ga sabon ma'aikaci: kada ku taɓa kebul masu launin lemu, batirin, ko duk wani sashe mai alamar gargaɗin babbar wuta. Makanikai da aka horar kuma aka ba su izini ne kaɗai ke aiki a kan tsarin babbar wuta. Suna bin bayanin gyara na kamfanin mota don kashe tsarin, su jira lokacin da ya faɗa, sannan su gwada cewa wutar ta mutu.",
            "Makanikan da aka horar suna sa safar hannu mai hana wuta (insulated gloves) da aka ƙayyade don wannan ƙarfin wuta, ana duba ta kafin kowane amfani, kuma suna amfani da lockout/tagout don kada wani ya sake kunna wutar yayin da suke aiki. Dokar lockout/tagout ta OSHA (hukumar tsaron wurin aiki ta Amurka) ita ce 29 CFR 1910.147.",
            "Sauran dokokin shago har yanzu suna aiki: ku ɗaga mota a wuraren ɗagawa na kamfanin mota kawai (batirin yana ƙarƙashinta), ku bar wurin a share, kuma ku faɗa wa mai kula da ku game da duk batirin da ya lalace, yake zuba, yake hayaƙi ko yake da zafi. Ku nisance shi kuma kada ku yi ƙoƙarin gyara shi."
          ],
          steps: ["Ku nemi kebul masu launin lemu da alamun gargaɗin babbar wuta.", "Kada ku taɓa su sai dai idan an horar da ku kuma an ba ku izini.", "Ku ɗaga mota a wuraren ɗagawa na kamfanin mota kawai.", "Ku ba da rahoton duk batirin da ya lalace, yake da zafi, yake hayaƙi ko yake zuba, kuma ku nisance shi.", "Makanikan da aka horar: kashe, jira, gwadawa, kulle wuta da sa alama, bisa bayanin gyara."],
          words: [["Girgizar wutar lantarki (electric shock)", "rauni idan wutar lantarki ta ratsa jikinku."], ["Arc flash", "fashewar zafi da haske ba zato ba tsammani daga wutar lantarki da ke tsallakawa ta iska."], ["An ba da izini (authorized)", "mai ɗaukar aikinku ya yarda ku yi aikin domin kuna da horon da ya dace."], ["Safar hannu mai hana wuta (insulated gloves)", "safar hannu ta roba ta musamman da aka ƙayyade don kare ku daga wani ƙarfin wuta."], ["Lockout/tagout", "matakan kashe wuta da kulle ta, da sa alama, don kada wani ya sake kunna ta yayin aiki."], ["Bayanin gyara (service information)", "matakan gyara na hukuma na kamfanin mota don wata mota."], ["Wurin ɗagawa (lift point)", "wurin da ke ƙarƙashin mota inda yake lafiya a ɗaga ta."]],
          slides: [
            { title: "Haɗarin", bullets: ["Girgizar wuta, ƙuna da arc flash", "Yana iya zama mai haɗari bayan an kashe mota", "Batirin da ya lalace yana iya kama wuta daga baya"] },
            { title: "Doka ta farko ga sabon ma'aikaci", bullets: ["Kada ku taɓa kebul masu launin lemu ko batirin", "Kada ku taɓa sassa masu alamar babbar wuta", "Makanikai da aka horar kuma aka ba izini kaɗai ke yin wannan aiki"] },
            { title: "Yadda makanikan da aka horar ke aiki", bullets: ["Suna bin bayanin gyara na kamfanin mota", "Kashe, jira, gwada cewa wutar ta mutu", "Safar hannu mai hana wuta da aka ƙayyade; lockout/tagout"] },
            { title: "Dokokin shago na yau da kullum", bullets: ["Ku ɗaga a wuraren ɗagawa na kamfanin mota kawai", "Ku ba da rahoton batirin da ya lalace, yake zafi ko hayaƙi", "Ku nisance shi; kada ku yi ƙoƙarin gyara shi"] }
          ],
          sources: [
            { name: "OSHA: Sarrafa makamashi mai haɗari (lockout/tagout)", url: "https://www.osha.gov/control-hazardous-energy" },
            { name: "U.S. Department of Energy, Alternative Fuels Data Center: Tsaron EV da martanin gaggawa", url: "https://afdc.energy.gov/vehicles/electric-maintenance" },
            { name: "U.S. Bureau of Labor Statistics: Makanikan gyaran motoci", url: "https://www.bls.gov/ooh/installation-maintenance-and-repair/automotive-service-technicians-and-mechanics.htm" }
          ],
          tryIt: "Yanayin atisaye: motar EV ta zo bayan ƙaramin haɗari. Akwai lanƙwasa a ƙarƙashin motar kusa da batirin da wani wari mai ƙarfi. Abokin aiki ya ce, \"Cire wancan kebul mai launin lemu kawai don mu ɗaga ta.\" A takarda, ku yi jeri mai layuka biyu: Haɗari da Abin da zan yi. Ku rubuta aƙalla layuka huɗu.",
          youCanNow: "gane haɗarin babbar wuta a shago da faɗin dokar tsaro ta kowanne, har da lokacin da za ku tsaya ku kira makanikin da aka horar.",
          quickCheck: [
            { objective: "O2", q: "Ku sababbi ne kuma kun ga kebul mai launin lemu ƙarƙashin motar da kuke aiki a kai. Me za ku yi?", options: ["Ku cire shi don a zauna lafiya", "Ku ja shi gefe", "Ku naɗe shi da tef", "Kada ku taɓa shi; ku faɗa wa makanikin da aka horar"], answer: 3, why: "Kebul masu launin lemu suna ɗauke da babbar wuta; makanikai da aka horar kuma aka ba izini kaɗai ke aiki a kansu." },
            { objective: "O2", q: "Mene ne amfanin lockout/tagout?", options: ["Kulle shago da dare", "Tabbatar da cewa babu wanda zai sake kunna wuta yayin aiki", "Sa alama a tayoyi don ajiya", "Kulle makullin motar abokin ciniki"], answer: 1, why: "Lockout/tagout yana sa wuta ta kasance a kashe yayin da wani ke aiki a kan tsarin." }
          ]
        },
        {
          title: "Tushen caji da lissafin caji (atisaye kawai)",
          objectives: ["O3"],
          minutes: 6,
          goal: "Lissafa ƙarfin wutar da ake buƙata da lokacin caji daga lambobin atisaye.",
          text: [
            "Akwai matakan caji uku da aka saba amfani da su a Amurka. Level 1 yana amfani da soket na volt 120 na yau da kullum kuma yana da jinkiri. Level 2 yana amfani da volt 240 a gidaje ko volt 208 a wuraren kasuwanci da yawa; shi ne na'urar caji ta jama'a da aka fi samu. DC fast charging (caji mai sauri na DC) yana tura DC kai tsaye zuwa batiri kuma shi ne mafi sauri.",
            "Fulogai da aka saba amfani da su su ne J1772 (Level 1 da 2), CCS (J1772 da ƙarin fil biyu don caji mai sauri na DC) da J3400, wanda ake kira NACS, bisa tsarin Tesla. Saka na'urar caji a gida ko wurin kasuwanci aikin wutar lantarki ne na ma'aikacin wuta mai lasisi (licensed electrician).",
            "Ana auna girman batiri da kilowatt-hour (kWh). Ƙarfin na'urar caji kuma da kilowatt (kW). Tsarin lissafin atisaye: sa'o'i = kWh da ake buƙata / kW na na'urar caji. Duk lambobin nan an ƙirƙira su ne don atisaye kawai. Caji na gaske yana raguwa yayin da batiri ke cika, kuma asarar wuta tana sa ya ɗauki lokaci mai tsawo."
          ],
          steps: ["Ku nemo girman batirin a kWh.", "Ku lissafa nawa kuke buƙata: kWh na batiri x (kashi da za a ƙara / 100).", "Ku raba kWh da ake buƙata da kW na na'urar caji.", "Ku rubuta amsar a sa'o'i kuma ku faɗi cewa kimantawa ce."],
          words: [["Level 1", "caji mai jinkiri daga soket na volt 120 na yau da kullum."], ["Level 2", "caji mafi sauri a volt 240 ko 208."], ["DC fast charging", "caji mafi sauri, yana tura DC kai tsaye zuwa batiri."], ["Kilowatt-hour (kWh)", "ma'aunin ƙarfin wuta da aka ajiye; ana auna girman batiri da kWh."], ["Kilowatt (kW)", "ma'aunin ƙarfin wuta; ana auna saurin na'urar caji da kW."], ["J1772, CCS, J3400 (NACS)", "sunayen fulogai na cajin EV da aka saba amfani da su a Amurka."]],
          slides: [
            { title: "Matakan caji uku", bullets: ["Level 1: soket na volt 120, jinkiri", "Level 2: volt 240 ko 208, yawancin na'urorin caji na jama'a", "DC fast: DC kai tsaye zuwa batiri"] },
            { title: "Fulogai", bullets: ["J1772 don Level 1 da 2", "CCS yana ƙara fil na caji mai sauri na DC", "J3400 (NACS), bisa tsarin Tesla"] },
            { title: "Lissafin caji (atisaye kawai)", bullets: ["Sa'o'i = kWh da ake buƙata / kW na na'urar caji", "Misali: 60 kWh x 50% = 30 kWh; 30 / 7.5 kW = sa'o'i 4"] },
            { title: "A rayuwa ta gaske ya fi jinkiri", bullets: ["Caji yana raguwa yayin da batiri ke cika", "Amsoshi kimantawa ne", "Saka na'urar caji aikin ma'aikacin wuta mai lasisi ne"] }
          ],
          sources: [
            { name: "U.S. Department of Energy, Alternative Fuels Data Center: Cajin motocin lantarki", url: "https://afdc.energy.gov/fuels/electricity-stations" },
            { name: "EVITP: Electric Vehicle Infrastructure Training Program (na ma'aikatan wuta masu lasisi)", url: "https://evitp.org/" }
          ],
          tryIt: "Atisaye kawai. Ku warware a takarda kuma ku nuna aikinku: (a) Batiri na 80 kWh yana tashi daga 20% zuwa 80%. kWh nawa ke nan? (b) Zai ɗauki lokaci nawa a na'urar caji ta Level 2 mai 9.6 kW? (c) Batiri na 40 kWh yana buƙatar 10 kWh a soket na Level 1 mai 1.25 kW. Sa'o'i nawa? Amsoshi don ku duba kanku: (a) 48 kWh, (b) sa'o'i 5, (c) sa'o'i 8.",
          youCanNow: "faɗin matakan caji da fulogai, da kimanta lokacin caji daga lambobin atisaye.",
          quickCheck: [
            { objective: "O3", q: "Atisaye kawai: kuna buƙatar 24 kWh kuma na'urar caji tana bayar da 6 kW. Kusan lokaci nawa?", options: ["Sa'o'i 2", "Sa'o'i 18", "Sa'o'i 4", "Sa'o'i 30"], answer: 2, why: "Sa'o'i = kWh / kW, don haka 24 / 6 = sa'o'i 4." },
            { objective: "O3", q: "Wane matakin caji ne ke amfani da soket na gida na volt 120 na yau da kullum?", options: ["Level 1", "Level 2", "DC fast charging", "J3400 kawai"], answer: 0, why: "Level 1 yana amfani da soket na volt 120 na yau da kullum." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Yadda motocin EV ke aiki da yadda za ku zauna lafiya",
        questions: [
          { objective: "O1", q: "Wane sashe ne ke mayar da DC daga batiri zuwa AC don injin?", options: ["Batirin volt 12", "Inverter", "Kushin birki (brake pads)", "Murfin ramin caji"], answer: 1, why: "Inverter yana mayar da DC na batiri zuwa AC don injin." },
          { objective: "O1", q: "Me DC-to-DC converter ke yi?", options: ["Yana cika babban batiri daga soket na bango", "Yana juya tayoyi", "Yana cajin batirin volt 12 daga tsarin babbar wuta", "Yana sanyaya cikin mota"], answer: 2, why: "Yana rage babbar wuta don batirin volt 12 ya ci gaba da samun caji." },
          { objective: "O2", q: "An kashe motar. Shin yana da lafiya a taɓa tsarin babbar wuta?", options: ["Eh, koyaushe", "Eh, idan rediyo a kashe yake", "Eh, bayan minti ɗaya", "Ba lallai ba; makanikai da aka horar kaɗai ke bin matakan kashewa da gwaji"], answer: 3, why: "Babbar wuta tana iya zama mai haɗari bayan an kashe mota; makanikan da aka horar suna kashewa, jira da gwadawa da farko." },
          { objective: "O2", q: "Batiri ƙarƙashin mota yana da zafi kuma yana hayaƙi. Me za ku yi?", options: ["Ku nisance shi kuma ku faɗa wa mai kula da ku nan take", "Ku fesa masa ruwa da kanku", "Ku ɗaga motar don ku duba", "Ku cire kebul masu launin lemu"], answer: 0, why: "Batirin da ya lalace yana iya kama wuta; ku nisance shi kuma ku ba da rahoto." },
          { objective: "O3", q: "Atisaye kawai: batiri na 60 kWh, a ƙara 50%. kWh nawa ke nan?", options: ["50 kWh", "110 kWh", "30 kWh", "10 kWh"], answer: 2, why: "60 x 50 / 100 = 30 kWh." }
        ]
      }
    },
    {
      name: "Babi na 2: Aikin gyara da hanyarku zuwa aikin",
      lessons: [
        {
          title: "Ayyukan gyaran EV na yau da kullum",
          objectives: ["O4"],
          minutes: 5,
          goal: "Rubuta jerin binciken gyaran ƙaramar wuta na EV da ke bin bayanin gyara na kamfanin mota.",
          text: [
            "Motocin EV suna buƙatar ƙarancin kulawa fiye da motocin fetur: babu canjin man inji, filogin wuta (spark plugs) ko salansa (exhaust). Amma har yanzu suna buƙatar gyara, kuma yawancinsa aikin ƙaramar wuta ne da sabon makaniki zai iya koya.",
            "Tayoyi: motocin EV sau da yawa suna da nauyi, don haka ku duba iskar taya, kaurin taya da yadda take zaizayewa, kuma ku juya tayoyi kamar yadda kamfanin ya faɗa. Birki: regenerative braking yana sa kushin birki ya zaizaye a hankali, amma har yanzu dole a duba birki, kuma sassan da ba a cika amfani da su ba suna iya yin tsatsa ko su makale. Ku kuma duba goge-gilashi (wipers), fitilu, sassan suspension da na sitiyari, matatar iskar cikin mota da batirin volt 12.",
            "Wasu motocin EV suna amfani da ruwan sanyaya (coolant) don batiri da na'urorin lantarki. Ana duba shi da canja shi bisa jadawali da matakan kamfanin mota; kada ku taɓa buɗe sashen sanyaya na babbar wuta sai dai idan an horar da ku.",
            "Koyaushe ku yi amfani da bayanin gyara na kamfanin mota na ainihin motar: jadawalin, wuraren ɗagawa da matakai. Idan wani aiki ya shafi duk wani abu mai launin lemu ko mai alamar babbar wuta, ku tsaya ku miƙa shi ga makanikin da aka horar."
          ],
          steps: ["Ku nemo bayanin gyara na ainihin kamfani, samfuri (model) da shekarar motar.", "Ku ɗaga a wuraren ɗagawa da aka lissafa kawai.", "Ku duba tayoyi, birki, goge-gilashi, fitilu, suspension da sitiyari.", "Ku duba matatar iskar cikin mota da batirin volt 12.", "Ku duba coolant kamar yadda bayanin gyara ya faɗa kawai.", "Ku tsaya ku miƙa duk wani abu mai launin lemu ko mai alamar babbar wuta."],
          words: [["Ƙaramar wuta (low-voltage)", "tsarin volt 12 na yau da kullum, kamar fitilu da rediyo, waɗanda suka fi aminci a yi aiki a kansu."], ["Juya tayoyi (tire rotation)", "canja wurin tayoyi don su zaizaye daidai."], ["Matatar iskar cikin mota (cabin air filter)", "matatar da ke tsaftace iskar da ke shiga cikin motar."], ["Coolant (ruwan sanyaya)", "ruwan da ke hana sassa yin zafi da yawa."], ["Jadawalin gyara (service schedule)", "jerin kamfanin mota na abin da za a duba da lokacinsa."]],
          slides: [
            { title: "Ƙarancin kulawa, ba babu ba", bullets: ["Babu canjin man inji, filogin wuta ko salansa", "Har yanzu tana buƙatar bincike na kai-da-kai"] },
            { title: "Tayoyi da birki", bullets: ["Motoci masu nauyi: ku duba iska, kauri da zaizayewa", "Birki yana zaizaye a hankali amma yana iya tsatsa ko makalewa", "Ku juya tayoyi kamar yadda kamfanin ya faɗa"] },
            { title: "Sauran bincike", bullets: ["Goge-gilashi, fitilu, suspension, sitiyari", "Matatar iskar cikin mota da batirin volt 12", "Coolant bisa bayanin gyara kawai"] },
            { title: "Ku san iyakarku", bullets: ["Ku yi amfani da bayanin gyara na ainihin motar", "Ku ɗaga a wuraren da aka lissafa kawai", "Launin lemu ko alamar babbar wuta? Ku tsaya ku miƙa shi"] }
          ],
          sources: [{ name: "U.S. Department of Energy, Alternative Fuels Data Center: Kulawar motocin lantarki", url: "https://afdc.energy.gov/vehicles/electric-maintenance" }],
          tryIt: "Ku zaɓi kowane samfurin motar EV da kuka taɓa gani. A takarda, ku rubuta jerin binciken gyara mai aƙalla abubuwa 8 don ziyarar gyara ta yau da kullum. Ku sa wa kowanne alamar LV (ƙaramar wuta, ya yi muku) ko STOP (babbar wuta, ku miƙa). Sannan ku duba: shin kun sa wani abu mai launin lemu a layin LV? Ku gyara idan kun yi haka.",
          youCanNow: "rubuta jerin binciken gyaran ƙaramar wuta na EV da faɗin waɗanne ayyuka za ku miƙa wa makanikin babbar wuta da aka horar.",
          quickCheck: [
            { objective: "O4", q: "Wane aiki ne motar EV BA ta buƙata?", options: ["Juya tayoyi", "Canjin man inji", "Binciken birki", "Binciken matatar iskar cikin mota"], answer: 1, why: "Motar da ke tafiya da batiri kawai ba ta da man inji da za a canja." },
            { objective: "O4", q: "A ina za ku sami wuraren ɗagawa da jadawalin gyara daidai na motar EV?", options: ["Hasashe daga wata mota", "Bidiyo a kafar sada zumunta", "Abin da abokin ciniki ya tuna", "Bayanin gyara na kamfanin mota na ainihin motar"], answer: 3, why: "Bayanin gyara na kamfanin mota yana da wuraren ɗagawa da jadawali daidai." }
          ]
        },
        {
          title: "Takardun shaida da horo don aikin EV",
          objectives: ["O5"],
          minutes: 5,
          goal: "Jera matakan takardar shaida zuwa aikin makanikin EV, da majiyar hukuma ta kowanne.",
          text: [
            "Yawancin makanikan mota suna farawa da shirin horo a makarantar sakandare, kwalejin al'umma (community college) ko makarantar fasaha, ko su fara a matsayin ma'aikacin canjin mai ko taya su koya a wurin aiki. Koyon sana'a a ƙarƙashin gwani (apprenticeship) da shirye-shiryen horo na kamfanonin mota wasu hanyoyi ne na shiga.",
            "ASE (National Institute for Automotive Service Excellence, cibiyar ƙasa ta ƙwarewar gyaran mota a Amurka) tana ba da takardun shaidar makaniki da aka fi sani. Jarabawarta ta L3, Light Duty Hybrid/Electric Vehicle Specialist, tana ƙunshe da gano matsalolin tsarin batiri, tsarin tuƙi, na'urorin lantarki masu ƙarfi da sauransu. Kafin ku yi rajista don L3, dole ku ci A6 (Electrical/Electronic Systems) da A8 (Engine Performance). Takardar shaidar ASE kuma tana buƙatar ƙwarewar aikin hannu; ku duba dokokin yanzu a ase.com.",
            "Kamfanonin mota da yawa kuma suna horar da makanikai a kan motocin EV nasu. Ma'aikatan wuta da ke saka na'urorin caji suna iya ɗaukar horon EVITP, wanda na ma'aikatan wuta masu lasisi ne. Kuɗaɗe, dokokin jarabawa da sharuɗɗan ƙwarewa suna canjawa, don haka ku duba kowane shafin hukuma kafin ku biya.",
            "Wannan kwas yana shirya ku don farawa. Ba ya ba ku takardar shaida."
          ],
          steps: ["Ku nemi shirye-shiryen fasahar mota da apprenticeship a yankinku.", "Ku karanta shafin ASE L3 ku rubuta abubuwan da ake buƙata kafinsa (A6 da A8).", "Ku karanta dokokin ƙwarewar aiki na ASE.", "Ku tambayi shagunan gyara da dillalan mota na yankinku waɗanne takardun shaida da horon kamfani suke so.", "Ku rubuta kowane mataki, ranar da kuka sa a gaba da shafin hukuma."],
          words: [["ASE", "National Institute for Automotive Service Excellence, cibiyar da ke ba makanikan mota takardar shaida."], ["Takardar shaida (certification)", "tabbacin cewa kun ci jarabawa kuma kun cika dokokin ƙwarewa."], ["Abin da ake buƙata kafin (prerequisite)", "abin da dole ku gama kafin ku fara mataki na gaba."], ["Gano matsala (diagnose)", "gano abin da ya lalace da dalilinsa."], ["EVITP", "Electric Vehicle Infrastructure Training Program, shirin da ke horar da ma'aikatan wuta masu lasisi don saka na'urorin caji."]],
          slides: [
            { title: "Hanyoyin shiga", bullets: ["Shirye-shiryen mota na makaranta ko kwalejin al'umma", "Fara a matsayin ma'aikacin canjin mai ko taya", "Apprenticeship da horon kamfanin mota"] },
            { title: "Hanyar ASE zuwa aikin EV", bullets: ["Ci A6 Electrical/Electronic Systems", "Ci A8 Engine Performance", "Sannan L3 Light Duty Hybrid/Electric Vehicle Specialist"] },
            { title: "Ƙarin abin da za ku sani", bullets: ["ASE kuma tana buƙatar ƙwarewar aikin hannu", "Kamfanonin mota suna horarwa a kan motocin EV nasu", "EVITP na ma'aikatan wuta masu lasisi da ke saka na'urorin caji ne"] },
            { title: "Ku duba kafin ku biya", bullets: ["Dokoki da kuɗaɗe suna canjawa: ku yi amfani da ase.com", "Ku rubuta kowane mataki, rana da majiya", "Wannan kwas yana shirya ku; ba ya ba ku takardar shaida"] }
          ],
          sources: [
            { name: "ASE: Jarabawar L3 Light Duty Hybrid/Electric Vehicle Specialist", url: "https://www.ase.com/tests/l3/" },
            { name: "ASE: Jarabawoyi", url: "https://www.ase.com/tests" },
            { name: "EVITP: Electric Vehicle Infrastructure Training Program", url: "https://evitp.org/" },
            { name: "U.S. Bureau of Labor Statistics: Yadda ake zama makanikin gyaran mota", url: "https://www.bls.gov/ooh/installation-maintenance-and-repair/automotive-service-technicians-and-mechanics.htm" }
          ],
          tryIt: "Ku buɗe shafin jarabawar ASE L3. Ku rubuta jarabawoyi biyu da dole ku ci da farko da batutuwa uku da L3 ke ƙunshe da su. Sannan ku nemi shirin fasahar mota ko apprenticeship kusa da ku, ku rubuta sunansa da adireshin shafinsa.",
          youCanNow: "faɗin hanyar ASE zuwa aikin EV (A6, A8, sannan L3), faɗin abin da ya ƙara buƙata, da nemo horo kusa da ku a shafukan hukuma.",
          quickCheck: [
            { objective: "O5", q: "Wace jarabawar ASE ce ta ƙwararren motocin hybrid da na lantarki?", options: ["A1", "L3", "A5", "T2"], answer: 1, why: "L3 ita ce jarabawar ASE ta Light Duty Hybrid/Electric Vehicle Specialist." },
            { objective: "O5", q: "Me dole ku ci kafin ku yi rajista don ASE L3?", options: ["A6 da A8", "Jarabawar CDL", "Jarabawar kimiyya ta GED", "EPA Section 608"], answer: 0, why: "ASE tana buƙatar A6 Electrical/Electronic Systems da A8 Engine Performance kafin L3." }
          ]
        },
        {
          title: "Tsarin Fara Aikin Makanikin EV ɗinku",
          objectives: ["O6"],
          minutes: 6,
          goal: "Rubuta Tsarin Fara Aikin Makanikin EV mai ranaku da sashen ƙwarewa na résumé.",
          text: [
            "Yanzu ku haɗa komai a shafi ɗaya da za ku iya kai wa shirin horo, shagon gyara ko dillalin mota. Tsari mai ranaku na gaske yana nuna cewa da gaske kuke.",
            "Tsarinku yana da sassa shida: yadda motar EV ke aiki da kalmominku; dokokinku na tsaron babbar wuta; tambayoyin atisaye biyu na caji tare da aikinku; jerin binciken gyaran ƙaramar wuta; hanyar takardar shaidarku da ranaku da majiyoyi; da sashen \"Ƙwarewar EV\" na résumé.",
            "Don résumé, ku rubuta abubuwa na gaskiya da za ku iya yi yanzu, a gajerun layuka da ke farawa da kalmar aiki. Misali: \"Na san manyan sassan tsarin tuƙi na EV da na hybrid.\" \"An horar da ni a kan sanin tsaron babbar wuta: gane kebul masu launin lemu da tsayawa don ƙwararren makaniki.\" \"Ina iya kimanta lokacin caji daga girman batiri da na na'urar caji.\" Ku ƙara aikin baya da ke taimakawa: kulawar mota, aikin taya ko canjin mai, motocin soja, taimakon aikin wutar lantarki ko na'urorin rumbun ajiya.",
            "Tsofaffin sojoji: ƙwarewa da yawa ta motocin soja da wutar lantarki tana da amfani a nan. Ku tambayi cibiyar aikin yi (workforce center) ta yankinku game da tallafin horo."
          ],
          steps: ["Ku rubuta bayaninku mai jimloli 3 zuwa 4 na yadda motar EV ke aiki.", "Ku rubuta dokokinku na tsaron babbar wuta.", "Ku ƙara tambayoyin atisaye biyu na caji tare da aikinku.", "Ku ƙara jerin binciken gyaran ƙaramar wuta.", "Ku rubuta hanyar takardar shaidarku da ranakun da kuka sa a gaba da shafukan majiya.", "Ku rubuta layuka 3 na résumé da ke farawa da kalmar aiki."],
          words: [["Résumé (takardar bayanin aiki)", "gajeriyar takarda da ke lissafa ƙwarewarku, aikinku da horonku don masu ɗaukar aiki."], ["Ranar da aka sa a gaba (target date)", "ranar da kuke shirin gama wani mataki."], ["Cibiyar aikin yi (workforce center)", "ofishin jama'a kyauta da ke taimakon mutane samun aiki da horo; da yawa ana kiransu American Job Centers."]],
          slides: [
            { title: "Shafi ɗaya, sassa shida", bullets: ["Yadda EV ke aiki; dokokin tsaro", "Lissafin caji; jerin binciken gyara", "Hanyar takardar shaida da ranaku; sashen résumé"] },
            { title: "Ranaku na gaske", bullets: ["Lokacin da za ku fara shirin horo", "Lokacin da kuke son cin A6 da A8", "Lokacin da kuke son L3, bayan ƙwarewar aiki"] },
            { title: "Résumé: Ƙwarewar EV", bullets: ["Gajerun layuka da ke farawa da kalmar aiki", "Abubuwa na gaskiya da za ku iya yi kawai", "Ku ƙara aikin baya da motoci, kayan aiki ko wutar lantarki"] },
            { title: "Ku nemi taimako", bullets: ["American Job Centers da hidimomin tsofaffin sojoji", "Ku tambayi shaguna da dillalan mota abin da suke so"] }
          ],
          sources: [{ name: "CareerOneStop: Nemo American Job Center", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" }],
          tryIt: "Aikin ƙarshe: ku yi Tsarin Fara Aikin Makanikin EV ɗinku a shafi ɗaya mai dukkan sassa shida. Ku sa rana ta gaske kusa da kowane mataki na horo da takardar shaida, da adireshin shafin kowane sharaɗi da kuka duba. Ku karanta layukan résumé ɗinku da babbar murya kamar kuna cikin hirar neman aiki.",
          youCanNow: "nuna wa shagon gyara ko shirin horo tsari a rubuce na fara aikin EV, mai ranaku, majiyoyi da sashen ƙwarewa na résumé.",
          quickCheck: [
            { objective: "O6", q: "Wane layi ne mafi kyau a résumé don aikin farko a shagon gyaran EV?", options: ["\"Ina da takardar shaidar ASE L3.\" (alhali ba ku da ita)", "\"Mutumin mota.\"", "\"Ina iya kimanta lokacin caji daga girman batiri da na na'urar caji.\"", "\"Ina son motocin Tesla.\""], answer: 2, why: "Gaskiya ne kuma a fayyace; kada ku taɓa iƙirarin takardar shaidar da ba ku da ita." },
            { objective: "O6", q: "Tsarinku yana cewa \"Samun takardar shaidar ASE.\" Me zai ƙara masa ƙarfi?", options: ["Cire shi", "Rubuta shi da manyan baƙaƙe", "Ƙara sunan aboki", "Ambaton A6, A8 da L3 da ranakun da aka sa a gaba da shafin ase.com"], answer: 3, why: "Sunayen jarabawoyi, ranaku da majiyar hukuma suna mayar da buri zuwa tsari." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Aikin gyara da hanyarku zuwa aikin",
        questions: [
          { objective: "O4", q: "Me yasa birkin EV har yanzu yake buƙatar dubawa ko da yake zaizaye a hankali?", options: ["Sassan da ba a cika amfani da su ba suna iya tsatsa ko makalewa", "Motocin EV ba su da birki", "Birki yana cika batiri gaba ɗaya", "Ba sa buƙatar dubawa kwata-kwata"], answer: 0, why: "Regenerative braking yana nufin ƙarancin amfani, don haka sassan birki suna iya tsatsa ko makalewa." },
          { objective: "O4", q: "A jerin binciken gyaranku, wani aiki ya shafi kebul mai launin lemu. Wace alama za ku sa masa?", options: ["LV, ya yi mini", "Ku tsallake shi kada ku faɗa wa kowa", "STOP: ku miƙa shi ga makanikin babbar wuta da aka horar", "Ku yi shi da sauri"], answer: 2, why: "Duk abin da ke da launin lemu ko alamar babbar wuta yana zuwa ga makanikin da aka horar kuma aka ba izini." },
          { objective: "O5", q: "Me takardar shaidar ASE ke buƙata baya ga cin jarabawa?", options: ["Digirin jami'a", "Ƙwarewar aikin hannu", "CDL", "Mallakar motar EV"], answer: 1, why: "Takardar shaidar ASE tana buƙatar ƙwarewar aiki da kuma cin jarabawa." },
          { objective: "O5", q: "Horon EVITP na saka na'urar caji na su wane ne?", options: ["Duk wanda ke da waya", "Masu sayar da mota", "Abokan ciniki", "Ma'aikatan wuta masu lasisi"], answer: 3, why: "EVITP yana horar da ma'aikatan wuta masu lasisi da ke saka na'urorin cajin EV." },
          { objective: "O6", q: "Me ya kamata kowane mataki a Tsarin Fara Aikin Makanikin EV ɗinku ya kasance da shi?", options: ["Ranar da aka sa a gaba da shafin hukuma da kuka duba", "Farashin da kuka yi hasashe", "Sa hannun aboki", "Babu wani ƙari"], answer: 0, why: "Ranaku da majiyoyi suna sa kowane mataki ya zama na gaske kuma mai yiwuwar dubawa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Tushen Aikin Makanikin Motocin Lantarki (EV)",
    questions: [
      { objective: "O1", q: "A ina ake yawan samun batirin babbar wuta a motar EV?", options: ["A murfin bayan mota (trunk)", "Ƙarƙashin ƙasan mota", "Bayan rediyo", "A cikin sitiyari"], answer: 1, why: "Yawancin batirin EV suna ƙarƙashin ƙasan mota." },
      { objective: "O1", q: "Me ke kunna fitilu da rediyo a motar EV?", options: ["Batirin volt 12", "Tayoyi", "Kebul na caji", "Tankin fetur"], answer: 0, why: "Batirin volt 12 na yau da kullum har yanzu yake tafiyar da tsarin ƙaramar wuta." },
      { objective: "O1", q: "Mene ne plug-in hybrid (PHEV)?", options: ["Mota marar batiri", "Motar fetur mai cajin waya", "EV marar inji", "Hybrid mai babban batiri da za a iya caji ta soket"], answer: 3, why: "PHEV tana da injin fetur da babban batiri da ake caji ta soket." },
      { objective: "O1", q: "Wane sashe ne ke mayar da AC daga tashar caji zuwa DC don batiri?", options: ["Injin lantarki", "Kushin birki", "Onboard charger", "Matatar iskar cikin mota"], answer: 2, why: "Onboard charger yana mayar da AC daga tasha zuwa DC don batiri." },
      { objective: "O2", q: "A matsayin sabon ma'aikaci, wane sashe ne kada ku TAƁA taɓawa ba tare da horo ba?", options: ["Goge-gilashi", "Kebul na babbar wuta masu launin lemu", "Murfin bawul ɗin taya", "Matatar iskar cikin mota"], answer: 1, why: "Kebul masu launin lemu suna ɗauke da babbar wuta mai kisa." },
      { objective: "O2", q: "Mene ne arc flash?", options: ["Fashewar zafi da haske ba zato ba tsammani daga wutar lantarki da ke tsallakawa ta iska", "Saitin fitilar gaba", "Wani nau'in taya", "Fulogin caji"], answer: 0, why: "Arc flash fashewar wutar lantarki ce da ke iya ƙona mutum da jikkata shi." },
      { objective: "O2", q: "Kafin makanikin da aka horar ya yi aiki a kan babbar wuta, me yake yi?", options: ["Ƙara ƙarar rediyo", "Buɗe bonet kawai", "Sa safar hannu ta auduga", "Kashewa, jira, gwada cewa wutar ta mutu, da kulle wuta bisa bayanin gyara"], answer: 3, why: "Kashewa, jira, gwaji da lockout/tagout suna bin matakan kamfanin mota." },
      { objective: "O2", q: "A ina za ku ɗaga motar EV a kan na'urar ɗagawa ta shago?", options: ["Ƙarƙashin batirin", "Ko'ina mai faɗi", "A wuraren ɗagawa na kamfanin mota kawai", "Ta bompa"], answer: 2, why: "Batirin yana ƙarƙashi; wuraren ɗagawa da aka lissafa suna kare shi da ku." },
      { objective: "O3", q: "Atisaye kawai: ana buƙatar 36 kWh a na'urar caji mai 9 kW. Lokaci nawa?", options: ["Sa'o'i 4", "Sa'o'i 45", "Sa'o'i 27", "Sa'o'i 3"], answer: 0, why: "36 / 9 = sa'o'i 4." },
      { objective: "O3", q: "Ana auna girman batiri da:", options: ["Mil a kowane galan", "Kilowatt-hour (kWh)", "Fam a kowane inci murabba'i", "Galan"], answer: 1, why: "Ana auna ƙarfin wutar batiri da kilowatt-hour." },
      { objective: "O3", q: "Wace hanya ce yawanci mafi saurin caji?", options: ["Level 1", "Level 2", "Kebul ɗin tada mota na volt 12", "DC fast charging"], answer: 3, why: "DC fast charging yana tura DC kai tsaye zuwa batiri da ƙarfi mai yawa." },
      { objective: "O3", q: "Me yasa amsar lokacin caji kimantawa ce kawai?", options: ["Na'urorin caji ba sa aiki", "Batiri ba shi da girma", "Caji yana raguwa yayin da batiri ke cika, kuma akwai asarar wuta", "kWh da kW ma'anarsu ɗaya ce"], answer: 2, why: "Caji na gaske yana raguwa kusa da cika kuma ana asarar wani ɓangare na wuta." },
      { objective: "O4", q: "Wane abu ne mai kyau a jerin binciken gyaran EV?", options: ["Duba iskar taya da kaurinta", "Canja man inji", "Sauya filogin wuta", "Gyara bututun salansa"], answer: 0, why: "Motocin EV suna buƙatar binciken taya; ba su da man inji, filogin wuta ko salansa." },
      { objective: "O4", q: "Me yasa ya kamata ku lura sosai da zaizayewar taya a motocin EV?", options: ["Motocin EV ba su da taya", "Motocin EV sau da yawa suna da nauyi", "Tayoyi suna cajin batiri", "Tayoyin EV ba sa zaizayewa"], answer: 1, why: "Motoci masu nauyi suna iya zaizaye taya da sauri, don haka ku riƙa duba su." },
      { objective: "O4", q: "A ina za ku sami matakan coolant daidai na motar EV?", options: ["Kowane littafin motar fetur", "Hasashe", "Abin da abokin aiki ya tuna", "Bayanin gyara na kamfanin mota"], answer: 3, why: "Binciken coolant na kowace motar EV yana bin bayanin gyara na kamfaninta." },
      { objective: "O5", q: "Mene ne ASE ke nufi?", options: ["Auto Sales Experts", "Association of Safe Electricians", "National Institute for Automotive Service Excellence", "American Solar Energy"], answer: 2, why: "ASE ita ce National Institute for Automotive Service Excellence." },
      { objective: "O5", q: "A ina za ku duba dokokin jarabawar ASE da kuɗaɗensu na yanzu?", options: ["ase.com", "Rubutu a kafar sada zumunta", "Tallar sayarwa", "Tsofaffin rubuce-rubucen aboki"], answer: 0, why: "Shafin hukuma na ASE yana da dokokin yanzu." },
      { objective: "O5", q: "Shin wannan kwas yana ba ku takardar shaidar makanikin EV?", options: ["Eh, bayan jarabawar", "A'a; yana shirya ku, takardar shaida kuma tana zuwa daga ASE da sauran shirye-shirye", "Eh, idan kun gama a rana ɗaya", "Don motocin hybrid kawai"], answer: 1, why: "Kwas ɗin yana shirya ku; takardun shaida suna zuwa daga ASE, kamfanonin mota da shirye-shiryen da aka amince da su." },
      { objective: "O6", q: "Wanne ne ya dace a Tsarin Fara Aikin Makanikin EV ɗinku?", options: ["Kalmar sirrin bankinku", "Takardar shaidar da ba ku da ita", "Launukan motar da kuka fi so", "Ranakun da aka sa a gaba don A6, A8 da L3"], answer: 3, why: "Ranaku na kowane mataki suna sa tsarin ya zama na gaske." },
      { objective: "O6", q: "Layi mai kyau a résumé ya kamata ya kasance:", options: ["Mai tsawo kuma ba a fayyace ba", "Game da ƙwarewar da kuke fatan koya", "Na gaskiya, a fayyace, kuma yana farawa da kalmar aiki", "An kwafo shi daga baƙo"], answer: 2, why: "Masu ɗaukar aiki suna amincewa da gajerun layuka na gaskiya kuma a fayyace." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani game da motocin EV?", from: [0, 3, 4, 7, 8, 10, 12, 15, 18] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Yadda motar EV ke aiki", objective: "O1", notYet: "Ya manta da batirin ko inverter, ko ya haɗa ayyukansu.", meets: "Ya ambaci batirin, inverter, injin lantarki, onboard charger, DC-to-DC converter da batirin volt 12, kuma ya faɗi aikin kowanne.", exceeds: "Ya kuma bayyana regenerative braking da bambancin EV, HEV da PHEV." },
      { name: "Dokokin tsaron babbar wuta", objective: "O2", notYet: "Bai faɗi a nisanci kebul masu launin lemu da batirin ba.", meets: "Ya faɗi kada a taɓa sassa masu launin lemu ko masu alamar babbar wuta ba tare da horo ba, a yi amfani da wuraren ɗagawa na kamfanin mota, kuma a ba da rahoton batirin da ya lalace.", exceeds: "Ya kuma bayyana kashewa, jira, gwaji da lockout/tagout, da waɗanda aka yarda su yi su." },
      { name: "Lissafin caji", objective: "O3", notYet: "Akwai kuskuren lissafi, ko ba a nuna aiki ba.", meets: "Tambayoyin biyu daidai ne, tare da tsarin lissafi da ma'aunai.", exceeds: "Ya kuma faɗi dalilin da yasa lokaci na gaske zai fi tsawo." },
      { name: "Jerin binciken gyara", objective: "O4", notYet: "Yana da canjin man inji ko aikin babbar wuta da aka sa masa alamar ya yi.", meets: "Aƙalla abubuwa 6 na ƙaramar wuta daidai, kuma ayyukan babbar wuta suna da alamar STOP.", exceeds: "Ya lura cewa kowane abu yana bin bayanin gyara na kamfanin mota na ainihin motar." },
      { name: "Hanyar takardar shaida", objective: "O5", notYet: "Babu ranaku, ko matakai marasa majiya.", meets: "Ya ambaci hanyar horo da ASE A6, A8 da L3, kowanne da ranar da aka sa a gaba da adireshin shafi.", exceeds: "Ya ƙara shirin horo na kamfanin mota ko mai ɗaukar aiki na yanki, da tsarin madadi." },
      { name: "Sashen résumé", objective: "O6", notYet: "Layukan ba a fayyace su ba, ko suna iƙirarin takardar shaidar da mai koyo ba shi da ita.", meets: "Layuka uku na gaskiya da ke farawa da kalmar aiki kuma suka dace da aikin shagon EV.", exceeds: "Ya haɗa aikin baya (kulawar mota, motocin soja, wutar lantarki) da ayyukan EV." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka yi rajista a shirin fasahar mota, apprenticeship ko horon kamfanin mota cikin kwanaki 90",
      "Masu koyo da suka ci ASE A6 ko A8 cikin watanni 12 (bisa faɗinsu)",
      "Masu koyo da aka ɗauka aiki a shagon gyaran mota ko sashen gyara na dillalin mota cikin watanni 6 (binciken biyo baya ko rahoton abokan aiki)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya, tablet ko kwamfuta mai intanet don karanta darussa da duba shafukan hukuma",
      "Takarda, alƙalami, alƙalaman launi da na'urar lissafi (ta waya ma ta yi)",
      "Zaɓi: hoton sassan motar EV da aka buga don rubuta sunayensu",
      "Kusan minti 60 zuwa 75 gaba ɗaya, a gajerun zama"
    ],
    facilitatorNotes: [
      "Babu wanda zai taɓa tsarin babbar wuta na mota a wannan kwas. Idan kun ziyarci shago ko kun nuna mota, makanikin da aka horar kuma aka ba izini ne zai jagoranta, masu koyo kuma su kalla kawai.",
      "Ku yi gwajin farko tare, sannan ku yi babi ɗaya a kowane zama, kuma ku yi lissafin caji a kan farin allo.",
      "Ku sa masu koyo su buɗe shafin ASE L3 kai tsaye su nemo abubuwan da ake buƙata kafinsa da kansu.",
      "Ku gayyaci manajan sashen gyara na dillalin mota, malamin mota na kwalejin al'umma ko makanikin EV mai takardar shaidar ASE don ya yi magana game da ɗaukar aiki.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya.",
      "Ku nuna wa tsofaffin sojoji da mutanen da ke komawa aiki American Job Centers don tallafin horo."
    ]
  }
};
