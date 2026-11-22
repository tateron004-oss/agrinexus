"use strict";

// Koach Learn course, Hausa (ha) translation of shared/forklift-operator.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.
// OSHA names, rule numbers and US units (lb, inci, ƙafa) stay as in the English.

const OSHA_178 = { name: "OSHA 29 CFR 1910.178: Powered industrial trucks (dokar tarayya kan forklift)", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.178" };
const OSHA_ETOOL = { name: "OSHA eTool: Powered Industrial Trucks (Forklift)", url: "https://www.osha.gov/etools/powered-industrial-trucks" };
const OSHA_TYPES = { name: "OSHA eTool: Nau'o'in forklift (Class I zuwa VII)", url: "https://www.osha.gov/etools/powered-industrial-trucks/types-fundamentals/types" };
const OSHA_PARTS = { name: "OSHA eTool: Sassan forklift", url: "https://www.osha.gov/etools/powered-industrial-trucks/types-fundamentals/parts" };
const OSHA_PREOP = { name: "OSHA eTool: Dubawa kafin aiki", url: "https://www.osha.gov/etools/powered-industrial-trucks/operating-forklift/pre-operation" };
const OSHA_LOAD = { name: "OSHA eTool: Sarrafa kaya", url: "https://www.osha.gov/etools/powered-industrial-trucks/operating-forklift/load-handling" };
const OSHA_TRAVEL = { name: "OSHA eTool: Tuƙi da juyawa", url: "https://www.osha.gov/etools/powered-industrial-trucks/operating-forklift/traveling-maneuvering" };
const OSHA_DOCKS = { name: "OSHA eTool: Wuraren lodi (loading docks)", url: "https://www.osha.gov/etools/powered-industrial-trucks/workplace/loading-docks" };
const OSHA_TRAINING = { name: "OSHA eTool: Horar da masu tuƙi", url: "https://www.osha.gov/etools/powered-industrial-trucks/training" };
const AGE_RULE = { name: "29 CFR 570.58: Ba a yarda ma'aikata 'yan ƙasa da shekara 18 su tuƙa forklift ba (dokar Ma'aikatar Ƙwadago ta Amurka, kwafin Cornell LII)", url: "https://www.law.cornell.edu/cfr/text/29/570.58" };

module.exports = {
  id: "forklift-operator-ha",
  lang: "ha",
  translationOf: "forklift-operator",
  category: "Workforce Development",
  name: "Tushen Aikin Tuƙa Forklift",
  skills: "Sanin nau'o'in forklift da sassansa, Yin dubawa kafin fara aiki, Karanta farantin bayani (data plate), Sarrafa kaya lafiya, Tuƙi lafiya kusa da mutane da wuraren lodi",
  outcome: "faɗin manyan nau'o'in forklift da sassansa, yin cikakken dubawa kafin fara aiki da cire motar da ba ta da aminci daga aiki, yanke shawara ko kaya ya dace a ɗaga ta amfani da farantin bayani, zaɓar matakin da ya fi aminci wajen tuƙi, jera kaya, aiki a wurin lodi da ajiye mota, da yin shirin samun horo da tantancewa daga mai ɗaukar aiki.",
  about: [
    "Masu tuƙa forklift suna motsa kaya a rumbunan ajiya, shaguna, masana'antu, gonaki da wuraren gini. Wannan kwas ɗin na masu neman aiki ne, mutanen da ke dawowa gida daga gidan yari, tsofaffin sojoji, da duk wanda yake son fara wannan aikin.",
    "Za ku koyi nau'o'in forklift da sassansa, dubawar yau da kullum, yadda ake karanta farantin bayani (data plate) da auna kaya, dokokin tuƙi kusa da mutane, gangara da wuraren lodi, da yadda ake ajiye mota lafiya.",
    "Muhimmi: wannan kwas ɗin yana shirya ku amma ba ya ba ku shaida (certificate). A ƙarƙashin dokar forklift ta OSHA (29 CFR 1910.178), dole ne mai ɗaukar ku aiki ya horar da ku, ya kalle ku kuna tuƙa motarsa a wurin aikinsa, kuma ya tantance ku kafin ku yi aiki da kanku. Kwas ta intanet ko kati kaɗai bai isa ba. Dole ne shekarunku su kai aƙalla 18. Kada ku tuƙa forklift don gwadawa har sai kun shiga horo da ake kula da ku.",
    "Kowane darasi yana ɗaukar kusan minti biyar, kuma yana ƙarewa da aikin \"Gwada yanzu\" a takarda. Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku haɗa fakitin shiri don aikin forklift: jerin dubawa kafin fara aiki don nau'in forklift ɗaya, shawarwari uku kan kaya daga farantin bayani na gwaji tare da dalilinku a kowanne, ƙaramin katin aljihu na matakan ajiye mota da na wurin lodi, da shirin samun horo da tantancewa daga mai ɗaukar aiki, tare da layi na gaskiya a takardar bayanin aikinku (résumé).",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya da ke neman aiki a rumbunan ajiya, cibiyoyin rarraba kaya, ɗakunan ajiyar shaguna ko masana'antu: masu neman aiki, mutanen da ke dawowa gida daga gidan yari, tsofaffin sojoji da matasa masu shekaru 18 zuwa sama. Wasu sun taɓa tuƙa forklift ba bisa ƙa'ida ba; yawancinsu ba su taɓa ba.",
    startingPoint: "Suna iya tuƙa mota ko hawan keke da bin jerin abubuwa. Ba su da ilimi sosai game da sassan forklift, daidaito, nauyin da mota za ta iya ɗauka ko dokokin OSHA. Wasu suna tsammanin katin intanet kaɗai yana ba su shaida.",
    gap: "Forklift yana bayan raunuka masu tsanani da yawa a rumbunan ajiya, kamar faɗuwar mota, bugun mutane da faɗowa daga wurin lodi. Dole ne masu ɗaukar aiki su horar da kuma tantance kowane mai tuƙi, kuma suna ɗaukar mutanen da suka riga suka san dubawa, dokokin kaya da halayen kiyaye lafiya. Masu koyo suna buƙatar wannan ilimi, da sanin gaskiyar yadda ake ba da shaida, don su kasance a shirye don horon mai ɗaukar aiki kuma kada su biya kuɗi don \"shaida nan take\" ta yaudara.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; ana bayanin kowace kalma ta musamman",
      "Babu tuƙa forklift a wannan kwas: aikin hannu yana faruwa ne kawai a horon mai ɗaukar aiki da ake kula da shi",
      "Dole ne shekarun masu koyo su kai aƙalla 18 kafin su tuƙa forklift a wurin aiki",
      "Na'urori: waya ko kwamfutar ɗakin karatu don shafukan OSHA; takarda don jerin dubawa",
      "Dokokin nan na OSHA ta tarayya ne; wasu jihohi suna da nasu tsarin OSHA mai dokoki da suka kai aƙalla tsauri iri ɗaya"
    ],
    prerequisites: "Babu. Kwas ɗin \"Tushen Tsaro a Wurin Aiki (OSHA)\" zai taimaka a ɗauke shi tare."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku hotuna ko bayanin forklift", action: "gane nau'in forklift da nuna manyan sassansa", standard: "kuna faɗin aƙalla sassa 6 da aikin kowanne" },
    { id: "O2", condition: "Ta amfani da jerin dubawa", action: "kammala dubawa kafin fara aiki da yanke shawara ko za a iya amfani da motar", standard: "kuna duba kowane abu kuma kuna cire duk motar da ba ta da aminci daga aiki" },
    { id: "O3", condition: "Idan aka ba ku farantin bayani da bayanin kaya", action: "yanke shawara ko kayan sun dace a ɗaga su lafiya da bayyana dalili", standard: "kuna samun aƙalla 4 cikin shawarwari 5 daidai" },
    { id: "O4", condition: "Idan aka ba ku yanayin tuƙi, jera kaya, wurin lodi ko ajiye mota", action: "zaɓar matakin da ya fi aminci a ƙarƙashin dokokin OSHA", standard: "kuna samun aƙalla 4 cikin yanayi 5 daidai" },
    { id: "O5", condition: "Ta amfani da abin da OSHA ke buƙata daga masu ɗaukar aiki", action: "rubuta shirin samun horo da tantancewa da layi na gaskiya a résumé", standard: "wanda ke faɗin aikin mai ɗaukar aiki kuma ba ya iƙirarin shaidar da ba ku da ita" }
  ],
  chapters: [
    {
      name: "Babi na 1: Aikin, motar da dubawar yau da kullum",
      lessons: [
        {
          title: "Aikin forklift da dokar horo ta OSHA",
          objectives: ["O5"],
          minutes: 5,
          goal: "Bayyana wanda ke horarwa da ba da shaida ga mai tuƙa forklift, da lokacin da ake buƙatar sake horo.",
          text: [
            "OSHA tana kiran forklift \"powered industrial trucks\" (motocin masana'antu masu inji). Dokarta, 29 CFR 1910.178, ta ce dole ne mai ɗaukar aiki ya tabbatar cewa kowane mai tuƙi ya ƙware. Wannan yana nufin horo (a aji da kuma aikin hannu a ƙarƙashin ƙwararren mai horarwa) da tantancewa ana kallon ku kuna tuƙi a ainihin wurin aikin.",
            "Sannan mai ɗaukar aikin ya tabbatar a rubuce cewa an horar da ku kuma an tantance ku. Takardar tana ɗauke da sunanku, ranakun horo da tantancewa, da wanda ya yi su. Dole ne a maimaita tantancewarku aƙalla sau ɗaya a kowace shekara uku.",
            "Haka kuma za ku sami sake horo (refresher) idan an gan ku kuna tuƙi ba lafiya, kun yi hatsari ko kun kusa yin hatsari, kun sami mummunan tantancewa, an mayar da ku wani nau'in mota daban, ko wurin aikin ya canja ta hanyar da ta shafi lafiya.",
            "Dokokin ƙwadago na tarayya ba su yarda kowa ɗan ƙasa da shekara 18 ya tuƙa forklift a wurin aiki ba. Kuma kwas ta intanet ko katin aljihu kaɗai ba ya ba ku shaida: horo da tantancewar mai ɗaukar ku aiki ne kaɗai suke yi."
          ],
          words: [["OSHA", "Occupational Safety and Health Administration, hukumar Amurka mai kula da lafiya da tsaro a wurin aiki."], ["Powered industrial truck", "sunan da OSHA ke ba forklift da makamantansu masu ɗagawa da motsa kaya."], ["Tantancewa (evaluation)", "ƙwararren mutum yana kallon ku kuna aiki a wurin aiki don ya ga ko kuna da aminci."], ["Sake horo (refresher training)", "ƙarin horo don gyara wata matsala ko shirya ku don sabuwar mota ko sabon wurin aiki."], ["Kusan hatsari (near miss)", "abin da ya faru inda ba wanda ya ji rauni amma wani zai iya ji."]],
          slides: [
            { title: "Wa ke ba ku shaida?", bullets: ["Mai ɗaukar ku aiki, ba shafin intanet ba", "Horo: a aji tare da aikin hannu a ƙarƙashin mai horarwa", "Tantancewa: ku kuna tuƙi a ainihin wurin aiki"] },
            { title: "Takardar shaidar", bullets: ["Sunanku", "Ranakun horo da tantancewa", "Wanda ya horar kuma ya tantance ku"] },
            { title: "Lokacin da za ku sake horo", bullets: ["Aƙalla a kowace shekara uku: sabuwar tantancewa", "Bayan hatsari, kusan hatsari ko tuƙi ba lafiya", "Sabon nau'in mota ko wurin aiki da ya canja"] },
            { title: "Kafin ku fara", bullets: ["Dole ne shekarunku su kai aƙalla 18", "Babu tuƙi don gwadawa ba tare da mai horarwa ba"] }
          ],
          sources: [OSHA_178, OSHA_TRAINING, AGE_RULE],
          tryIt: "A takarda, ku rubuta jimloli uku da kalmominku: wa ke horarwa da tantance mai tuƙa forklift, sau nawa ake maimaita tantancewa, da abubuwa biyu da ke nufin kuna buƙatar sake horo.",
          youCanNow: "bayyana wa ke horarwa da ba da shaida ga mai tuƙa forklift, sau nawa ake tantance ku, da lokacin da kuke buƙatar sake horo.",
          quickCheck: [
            { objective: "O5", q: "Wa dole ne ya horar kuma ya tantance ku kafin ku tuƙa forklift a wurin aiki?", options: ["Kowane shafin intanet da ke sayar da katuna", "Mai ɗaukar ku aiki, a wurin aikinku", "Aboki da ke tuƙa forklift", "Ba kowa"], answer: 1, why: "Dokar OSHA ta ɗora horo da tantancewa a kan mai ɗaukar aiki, a ainihin wurin aikin." },
            { objective: "O5", q: "Kun bugi wani kanta (rack) da forklift ɗinku. Ba wanda ya ji rauni. Mene ne gaskiya?", options: ["Babu abin da ake buƙata", "Za a kore ku daga aiki kai tsaye", "Dole ku sayi sabon kati a intanet", "Dalili ne na sake horo"], answer: 3, why: "Hatsari ko kusan hatsari yana ɗaya daga cikin dalilan OSHA na sake horo." }
          ]
        },
        {
          title: "Nau'o'in forklift da sassansa",
          objectives: ["O1"],
          minutes: 5,
          goal: "Gane nau'in forklift da faɗin manyan sassansa.",
          text: [
            "OSHA ta raba forklift zuwa aji (class) bakwai. Class I: motoci masu lantarki da ake zama a kai. Class II: motoci masu lantarki don ƙunƙuntattun hanyoyi. Class III: motocin hannu masu lantarki, har da pallet jack da ake tura shi ana tafiya a bayansa. Class IV da V: motoci masu inji (injin mai ko gas), masu tayoyi masu laushi (cushion) don benaye masu santsi a ciki (IV) ko tayoyi masu iska don waje (V). Class VI: taraktoci masu ja. Class VII: forklift na ƙasa mai kauri don wuraren gini da gonaki.",
            "Yawancin forklift masu nauyin daidaitawa (counterbalance) suna da manyan sassa iri ɗaya. Cokula (forks) suna ɗaga kaya. Cokulan suna rataye a kan carriage, wanda ke hawa da sauka a kan mast. Load backrest yana hana kaya faɗowa baya zuwa gare ku. Overhead guard (rufin kariya) yana kare ku daga abubuwan da ke faɗowa. Counterweight (nauyin daidaitawa) a baya yana daidaita kayan.",
            "A wurin zama kuna da sitiyari, mai canja hanya (gaba da baya), levoyin ɗagawa da karkatarwa, hon, birki da bel ɗin kujera. Farantin bayani (data plate, ana kuma kiransa capacity plate ko nameplate) yana faɗa muku nauyin da motar za ta iya ɗagawa."
          ],
          words: [["Mast", "firam ɗin da ke tsaye wanda cokulan ke hawa da sauka a kai."], ["Carriage", "farantin da ke kan mast wanda ke riƙe cokulan."], ["Load backrest", "firam a saman cokulan da ke hana kaya faɗowa baya zuwa ga mai tuƙi."], ["Overhead guard", "firam ɗin rufi da ke kare mai tuƙi daga abubuwan da ke faɗowa."], ["Counterweight", "nauyi mai yawa a bayan motar da ke daidaita kayan."], ["Farantin bayani (data plate)", "farantin da ke kan motar wanda ke nuna samfurinta da nauyin da za ta iya ɗagawa."]],
          slides: [
            { title: "Aji bakwai", bullets: ["I, II, III: masu lantarki (ana zama, ƙunƙuntattun hanyoyi, motocin hannu)", "IV, V: motoci masu inji don ciki ko waje", "VI: taraktoci masu ja; VII: ƙasa mai kauri"] },
            { title: "Sassan ɗagawa", bullets: ["Cokula a kan carriage", "Carriage yana tafiya a kan mast", "Load backrest yana hana kaya faɗowa a kanku"] },
            { title: "Sassan kariya", bullets: ["Overhead guard a saman kanku", "Counterweight a baya", "Bel ɗin kujera, hon da fitilu"] },
            { title: "Farantin bayani", bullets: ["Yana nuna samfurin motar", "Yana nuna nauyin da za ta iya ɗagawa", "Dole ne ya kasance a wurinsa kuma a iya karanta shi"] }
          ],
          sources: [OSHA_TYPES, OSHA_PARTS],
          tryIt: "Ku zana forklift na zama daga gefe a sauƙaƙe (akwatuna da layuka sun isa). Ku rubuta sunayen aƙalla sassa shida: cokula, carriage, mast, load backrest, overhead guard, counterweight. Kusa da kowanne, ku rubuta layi ɗaya kan aikinsa.",
          youCanNow: "faɗin ajin da forklift yake ciki, da sunayen manyan sassansa da aikinsu.",
          quickCheck: [
            { objective: "O1", q: "Wane sashe ne ke hana kaya faɗowa baya zuwa ga mai tuƙi?", options: ["Load backrest", "Counterweight", "Tayoyi", "Hon"], answer: 0, why: "Load backrest yana saman cokulan kuma yana hana kaya faɗowa zuwa gare ku." },
            { objective: "O1", q: "Forklift da aka gina don ƙasa mara daidai a wurin gini yana cikin wane aji?", options: ["Class I", "Class III", "Class VII", "Class IV"], answer: 2, why: "Class VII su ne forklift na ƙasa mai kauri don ƙasa mara daidai a waje." }
          ]
        },
        {
          title: "Dubawa kafin fara aiki",
          objectives: ["O2"],
          minutes: 6,
          goal: "Kammala jerin dubawa kafin fara aiki da yanke shawara ko motar tana da aminci a yi amfani da ita.",
          text: [
            "OSHA tana buƙatar a duba kowane forklift kafin a yi amfani da shi, aƙalla sau ɗaya a rana; idan motoci suna aiki dare da rana, bayan kowane zagayen aiki (shift). Idan wani abu ya sa motar ba ta da aminci, ana cire ta daga aiki har sai an gyara ta.",
            "Ku fara da makulli a kashe. Ku duba matakan ruwa-ruwa (fluids) da ko akwai zubewa, tsagewa, da lalatattun bututu ko sarƙoƙin mast (kada ku taɓa saka hannunku cikin mast). Ku duba tayoyi, cokula, load backrest, overhead guard, da cewa farantin bayani da alamun gargaɗi suna wurinsu kuma ana iya karanta su. Ku duba bel ɗin kujera.",
            "Motoci masu lantarki: ku duba wayoyi, mahaɗai da abin da ke riƙe batir. Motoci masu gas na propane: ku duba cewa an ɗora tankin daidai, bawul ɗin saki (relief valve) yana kallon sama, kuma babu zubewa.",
            "Sannan, motar tana aiki, ku gwada birki, sitiyari, gaba da baya, ɗagawa, saukewa, karkatarwa, hon, fitilu da ƙararrawar baya. Idan wani abu ba daidai ba ne: kada ku yi amfani da motar, ku saka mata alama ko ku kai rahoto, ku rubuta a jerin dubawa, kuma ku faɗa wa mai kula da ku. Mutanen da aka horar kuma aka ba izini ne kaɗai ke gyarawa."
          ],
          steps: ["Makulli a kashe: ruwa-ruwa, zubewa, bututu da sarƙoƙi (ku duba, kada ku saka hannu).", "Tayoyi, cokula, load backrest, overhead guard.", "Farantin bayani da alamun gargaɗi suna nan kuma ana iya karanta su; bel ɗin kujera yana aiki.", "Makulli a kunne: birki, sitiyari, gaba da baya.", "Ɗagawa, saukewa, karkatarwa, hon, fitilu, ƙararrawar baya.", "Ku sa hannu a jerin dubawa; ku kai rahoton duk lahani ku saka masa alama, kuma kada ku yi amfani da motar."],
          words: [["Dubawa kafin fara aiki (pre-shift inspection)", "duba forklift kafin a yi amfani da shi a zagayen aikin."], ["An cire daga aiki (out of service)", "ba za a yi amfani da shi ba har sai an gyara shi, yawanci ana saka masa alama (tag)."], ["Sarƙoƙin mast", "sarƙoƙin da ke ɗaga carriage da cokula a kan mast."]],
          slides: [
            { title: "Lokacin dubawa", bullets: ["Kafin amfani, aƙalla kullum", "Bayan kowane zagayen aiki idan motoci suna aiki dare da rana"] },
            { title: "Makulli a kashe", bullets: ["Ruwa-ruwa, zubewa, bututu, sarƙoƙi: ku duba, kada ku saka hannu", "Tayoyi, cokula, backrest, overhead guard", "Farantin bayani, alamun gargaɗi, bel ɗin kujera"] },
            { title: "Makulli a kunne", bullets: ["Birki, sitiyari, gaba da baya", "Ɗagawa, saukewa, karkatarwa", "Hon, fitilu, ƙararrawar baya"] },
            { title: "Kun sami matsala?", bullets: ["Kada ku yi amfani da motar", "Ku saka mata alama, ku rubuta, ku faɗa wa mai kula da ku", "Mutanen da aka ba izini ne kaɗai ke gyarawa"] }
          ],
          sources: [OSHA_PREOP, OSHA_178],
          tryIt: "Ku rubuta naku jerin dubawa kafin fara aiki mai ginshiƙai biyu, \"Makulli a kashe\" da \"Makulli a kunne\", ta amfani da shafin OSHA na dubawa kafin aiki. Sannan ku karanta wannan misalin gwaji: hon ba ya aiki kuma cokali ɗaya yana da tsaga. Ku rubuta abin da za ku yi, mataki-mataki.",
          youCanNow: "kammala jerin dubawa kafin fara aiki da cire motar da ba ta da aminci daga aiki.",
          quickCheck: [
            { objective: "O2", q: "Sau nawa ne dole a duba forklift kafin amfani?", options: ["Sau ɗaya a wata", "Sau ɗaya a shekara", "Sai lokacin da ya lalace kawai", "Aƙalla kullum, kafin amfani"], answer: 3, why: "OSHA tana buƙatar dubawa kafin amfani, aƙalla kullum, da bayan kowane zagayen aiki idan ana aiki dare da rana." },
            { objective: "O2", q: "Lokacin dubawarku, birki yana jin rauni. Me za ku yi?", options: ["Ku yi amfani da ita a hankali yau", "Ku kai rahoto, ku saka mata alamar an cire ta daga aiki, kuma kada ku yi amfani da ita", "Ku gyara birkin da kanku", "Ku faɗa wa abokin aiki ya yi amfani da ita"], answer: 1, why: "Ana cire motar da ba ta da aminci daga aiki a kai rahoto; mutanen da aka ba izini ne kaɗai ke gyarawa." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Aikin, motar da dubawar yau da kullum",
        questions: [
          { objective: "O5", q: "Kun ɗauki kwas ta forklift a intanet kuma kun sami kati. Yanzu za ku iya tuƙa kowane forklift a sabon aiki?", options: ["A'a; dole ne mai ɗaukar aiki ya horar kuma ya tantance ku a kan motarsa da wurinsa", "Ee, katin ne kawai kuke buƙata", "Ee, idan an lulluɓe katin da leda", "A ƙarshen mako kawai"], answer: 0, why: "OSHA tana buƙatar mai ɗaukar aiki ya horar kuma ya tantance kowane mai tuƙi a wurin aiki." },
          { objective: "O5", q: "Aƙalla sau nawa ne dole a maimaita tantancewar mai tuƙi?", options: ["Kowane wata", "Kowace shekara goma", "Sau ɗaya a kowace shekara uku", "Ba a taɓa ba"], answer: 2, why: "OSHA ta ce ana tantance kowane mai tuƙi aƙalla sau ɗaya a kowace shekara uku." },
          { objective: "O1", q: "Mene ne aikin counterweight?", options: ["Yana ɗaga cokula", "Yana riƙe hon", "Yana kare kanku", "Yana daidaita kayan da ke gaba"], answer: 3, why: "Counterweight mai nauyi a baya yana daidaita nauyin da ke kan cokula." },
          { objective: "O1", q: "A ina za ku sami nauyin da forklift zai iya ɗagawa?", options: ["A kan tayoyi", "A kan farantin bayani", "A kan hon", "A kan kujera"], answer: 1, why: "Farantin bayani yana nuna nauyin da motar za ta iya ɗagawa." },
          { objective: "O2", q: "Wace dubawa ce ake yi motar tana aiki?", options: ["Gwada birki, sitiyari, ɗagawa da karkatarwa", "Duba tayoyi", "Karanta alamun gargaɗi", "Duba matakan ruwa-ruwa"], answer: 0, why: "Birki, sitiyari, ɗagawa da karkatarwa dubawa ne na aiki da ake yi motar tana aiki." }
        ]
      }
    },
    {
      name: "Babi na 2: Kaya, tuƙi da samun aiki",
      lessons: [
        {
          title: "Karanta farantin bayani da auna kaya",
          objectives: ["O3"],
          minutes: 6,
          goal: "Yanke shawara ko kaya ya dace a ɗaga lafiya ta amfani da farantin bayani da load center.",
          text: [
            "Farantin bayani yana nuna mafi yawan nauyin da motar za ta iya ɗagawa a wani load center. Load center shi ne nisa daga fuskar gaban cokula zuwa tsakiyar kayan (inda nauyinsa ya daidaita). Forklift da yawa an ƙididdige su don load center na inci 24. Idan tsakiyar kayan ya fi wannan nisa, ko motar tana da wani ƙarin kayan aiki (attachment), nauyin da za ta iya ɗauka lafiya ya ragu: ku duba farantin ku tambayi mai kula da ku.",
            "Forklift yana daidaituwa kamar abin wasan yara na hawa-da-sauka (seesaw) a kan tayoyin gaba. Kayan da ke kan cokula suna gefe ɗaya; motar da counterweight suna ɗaya gefen. Nauyi da ya yi yawa, kaya da ya yi nisa a gaba, ko kaya da aka ɗaga aka karkatar gaba suna iya sa motar ta faɗi gaba. Juyawa da sauri sosai yana iya sa ta faɗi a gefe.",
            "Ku ɗaga kaya masu tsayayye kawai waɗanda ke cikin iyakar nauyin motar. Ku sa kayan a tsakiyar cokula, ku saka cokula a ƙarƙashinsa aƙalla kashi biyu cikin uku na tsawon kayan. Ku ɗaga kaɗan, ku karkatar da mast baya kaɗan don kayan su jingina a backrest, kuma ku riƙe su ƙasa."
          ],
          steps: ["Ku nemo nauyin kayan (alama, takardu ko ku tambaya).", "Ku karanta farantin bayani: iyakar nauyi da load center.", "Tsakiyar kayan tana cikin load center? Nauyin yana ƙasa da iyakar nauyi?", "Kayan suna tsayayye, an naɗe su, kuma ba su lalace ba?", "Idan ee: ku sa su a tsakiya, cokula aƙalla kashi biyu cikin uku a ƙasa, ku ɗaga kaɗan, ku karkatar baya. Idan a'a ko ba ku tabbata ba: ku tsaya ku tambaya."],
          words: [["Iyakar nauyi (capacity)", "mafi yawan nauyin da forklift zai iya ɗagawa lafiya, wanda ke kan farantin bayani."], ["Load center", "nisa daga gaban cokula zuwa tsakiyar kayan."], ["Cibiyar nauyi (center of gravity)", "wurin da nauyin abu ya daidaita."], ["Faɗuwar mota (tipover)", "lokacin da forklift ya faɗi gaba ko a gefensa."]],
          slides: [
            { title: "Farantin bayani yana faɗa muku", bullets: ["Iyakar nauyi: mafi yawan abin da motar za ta iya ɗagawa", "A wani load center, sau da yawa inci 24", "Kaya da ya fi nisa = abin da za ta iya ɗagawa ya ragu"] },
            { title: "Kamar seesaw", bullets: ["Tayoyin gaba su ne wurin juyawa", "Kaya a gefe ɗaya, counterweight a ɗaya gefen", "Nauyi da ya yi yawa ko ya yi nisa: tana faɗuwa"] },
            { title: "Ku ɗauka daidai", bullets: ["Kaya mai tsayayye, a cikin iyakar nauyi", "A tsakiya, cokula kashi biyu cikin uku a ƙasa", "Ku ɗaga kaɗan, ku karkatar baya, ku riƙe ƙasa"] },
            { title: "Ba ku tabbata ba? Ku tsaya ku tambaya", bullets: ["Nauyin da ba a sani ba", "Kaya da ya lalace ko yake karkata", "Ƙarin kayan aiki (attachments) suna canja iyakar nauyi"] }
          ],
          sources: [OSHA_LOAD, OSHA_178],
          tryIt: "Gwaji kawai, lambobin ƙirƙira ne. Farantin wata mota ya ce 4,000 lb (fam) a load center na inci 24. Ku yanke ee ko a'a, tare da dalili: (1) fallet (pallet) mai 3,200 lb, a tsakiya kuma an naɗe shi; (2) akwati mai 4,600 lb; (3) kaya mai 2,500 lb da ke karkata kuma ya yage; (4) kaya mai 3,000 lb wanda tsakiyarsa ta yi nisa fiye da inci 24. Ku rubuta abin da za ku yi a kowanne.",
          youCanNow: "karanta farantin bayani da yanke shawara ko kaya ya dace a ɗaga lafiya, da faɗin dalili.",
          quickCheck: [
            { objective: "O3", q: "Farantin ya ce 5,000 lb a inci 24. Kayan sun kai 5,800 lb. Me za ku yi?", options: ["Ku ɗaga su a hankali", "Ku sa mutum a baya a matsayin ƙarin nauyi", "Kada ku ɗaga su; ku faɗa wa mai kula da ku", "Ku ɗaga su sama don su daidaita"], answer: 2, why: "Kada ku taɓa ɗaga fiye da iyakar nauyin da aka ƙididdige; ba a taɓa yarda da ƙarin mahaya ba." },
            { objective: "O3", q: "Har ina ya kamata cokula su shiga ƙarƙashin kaya?", options: ["Ƙarshen cokula kawai", "Aƙalla kashi biyu cikin uku na tsawon kayan", "Har zuwa fallet na gaba da ke bayansu", "Ba komai"], answer: 1, why: "Jagorar OSHA ita ce aƙalla kashi biyu cikin uku na tsawon kayan, ba tare da bugun kayan da ke baya ba." }
          ]
        },
        {
          title: "Tuƙi, wuraren lodi da ajiye mota lafiya",
          objectives: ["O4"],
          minutes: 6,
          goal: "Zaɓar matakin da ya fi aminci wajen tuƙi, a wurin lodi da lokacin ajiye mota.",
          text: [
            "Ku yi tafiya kayan suna ƙasa kuma an karkatar da su baya, kada a taɓa ɗaga su ko karkatar da su gaba. Ku tuƙa a gudun da zai bar ku tsayawa lafiya, kuma ku rage gudu a benaye masu jiƙa, a juyawa da kuma a mahaɗar hanyoyi (cross aisles). Ku buga hon a mahaɗar hanyoyi da kusurwoyin da ba a gani. Ku kalli inda kuke tafiya. Idan kayan sun hana ku gani, ku tuƙa da baya. Ku bar tazarar kusan tsawon motoci uku tsakaninku da wata mota a gabanku.",
            "Mutane: ba wanda zai tsaya ko ya wuce ƙarƙashin cokula da aka ɗaga, ko da akwai kaya ko babu. Ba mahaya sai dai idan motar tana da wuri mai aminci don su kuma an yarda. Kada ku taɓa tuƙa mota zuwa ga wani da ke tsaye a gaban bango ko kanta.",
            "Gangara: ku tafi a hankali. Idan kuna da kaya, ku sa kayan a ɓangaren sama: ku tuƙa gaba lokacin hawa, da baya lokacin sauka. Kada ku taɓa juyawa a kan gangara. Wuraren lodi: kafin ku shiga cikin tirela, dole ne an ja birkin tirelar kuma an sa katako (chock) a tayoyinta na baya; ku duba benen tirelar ko akwai karyewa ko wuraren da suka yi rauni; ku nisanci gefen wurin lodi.",
            "Ajiye mota: idan kun bar motar (ko kun yi nisan ƙafa 25 ko fiye daga gare ta, ko ba kwa ganinta), ku sauke cokula har ƙasa, ku sa abubuwan sarrafawa a neutral, ku kashe ta, kuma ku ja birki; ku toshe tayoyi idan a gangara ne. Idan forklift na zama ya fara faɗuwa: kada ku yi tsalle. Ku zauna a kujera tare da bel ɗin kujera, ku riƙe sitiyari, ku tokare ƙafafunku, kuma ku karkata nesa da inda take faɗuwa."
          ],
          steps: ["Kaya ƙasa, an karkatar baya; hon a mahaɗar hanyoyi; ku kalli inda kuke tuƙi.", "Kaya sun hana ku gani: ku tuƙa da baya.", "Gangara: kaya a ɓangaren sama, babu juyawa a kan gangara.", "Wuraren lodi: an ja birkin tirela, an sa katako a tayoyi, an duba bene.", "Ajiye mota: cokula ƙasa, neutral, a kashe, an ja birki.", "Faɗuwa: ku zauna a ciki, bel a ɗaure, ku riƙe, ku karkata nesa."],
          words: [["Mahaɗar hanyoyi (cross aisle)", "inda hanyoyi biyu suka haɗu, kamar mararraba."], ["Katakon toshe taya (wheel chock)", "abu mai kama da ƙugiya da ake sawa a jikin taya don tirela kada ta yi birgima."], ["Gefen wurin lodi (dock edge)", "gefen wurin lodi inda bene ke ƙarewa ya yi zurfi."], ["Ba a kula da ita (unattended)", "an bar ta: nisan ƙafa 25 ko fiye daga motar, ko ba a ganinta."]],
          slides: [
            { title: "Tuƙi", bullets: ["Kaya ƙasa kuma an karkatar baya", "Hon a mahaɗar hanyoyi da wuraren da ba a gani", "Ba kwa iya gani saboda kaya? Ku tuƙa da baya"] },
            { title: "Mutane", bullets: ["Ba wanda zai shiga ƙarƙashin cokula da aka ɗaga", "Babu mahaya", "Kada ku taɓa matse wani a jikin bango ko kanta"] },
            { title: "Gangara da wuraren lodi", bullets: ["Kaya a ɓangaren sama; babu juyawa a gangara", "An ja birkin tirela kuma an toshe tayoyi", "Ku duba benen tirela; ku nisanci gefen"] },
            { title: "Ajiye mota da faɗuwa", bullets: ["Cokula ƙasa, neutral, a kashe, an ja birki", "Faɗuwa: ku zauna a ciki, bel a ɗaure, ku karkata nesa"] }
          ],
          sources: [OSHA_TRAVEL, OSHA_DOCKS, OSHA_178],
          tryIt: "Ku yi katin aljihu mai jeri biyu: \"Kafin in shiga tirela\" da \"Lokacin da nake ajiye mota\". Sannan ku amsa wannan misalin gwaji a rubuce: kuna ɗauke da kaya masu tsayi da suka hana ku ganin gaba kuma dole ku sauka a gangara. Me za ku yi?",
          youCanNow: "zaɓar matakin da ya fi aminci wajen tuƙi, a wurin lodi, a gangara, lokacin ajiye mota da idan mota ta fara faɗuwa.",
          quickCheck: [
            { objective: "O4", q: "Abokin aiki yana son ya tsaya ƙarƙashin cokulanku da aka ɗaga don gyara wata alama. Me za ku ce?", options: ["\"Ci gaba, ka yi sauri.\"", "\"Sai idan babu kaya a kan cokula.\"", "\"Sai idan ka sa hular kariya.\"", "\"A'a. Ba wanda ke shiga ƙarƙashin cokula da aka ɗaga. Zan fara sauke su.\""], answer: 3, why: "OSHA ta hana kowa tsayawa ko wucewa ƙarƙashin cokula da aka ɗaga, ko da akwai kaya ko babu." },
            { objective: "O4", q: "Forklift ɗinku na zama ya fara faɗuwa. Me za ku yi?", options: ["Ku zauna a kujera, bel a ɗaure, ku riƙe sitiyari ku karkata nesa", "Ku yi tsalle ku fita da sauri", "Ku kama mast", "Ku ɗaga cokula"], answer: 0, why: "A forklift na zama, zama a ciki tare da bel ɗin kujera a ɗaure shi ne yadda ake guje wa a danne ku." }
          ]
        },
        {
          title: "Samun horo da aiki a matsayin mai tuƙa forklift",
          objectives: ["O5"],
          minutes: 5,
          goal: "Rubuta shirin samun horo da tantancewa, da layi na gaskiya a résumé.",
          text: [
            "Masu ɗaukar aiki da yawa a rumbunan ajiya, cibiyoyin rarraba kaya da shaguna suna ɗaukar mutane don aikin rumbu na gama-gari sannan su horar da su kan forklift. Wasu kamfanonin samar da ma'aikata (staffing agencies), cibiyoyin ayyuka da kwalejojin al'umma (community colleges) suma suna gudanar da horon forklift tare da aikin hannu. Ku tambaya ko ya haɗa da tuƙi a ƙarƙashin mai horarwa da tantancewa ta aiki.",
            "Ku tuna: duk inda kuka yi horo, kowane sabon mai ɗaukar aiki dole ne ya tabbatar an horar da ku kuma an tantance ku don motocinsa da wurin aikinsa kafin ku tuƙa da kanku. Horon da kuka yi a baya yana taimakawa, kuma mai ɗaukar aiki ba lallai ne ya maimaita darussan da kuka riga kuka koya kuma aka tantance ku a kai ba.",
            "A résumé ɗinku, ku faɗi gaskiya. Idan kun kammala wannan kwas, ku rubuta cewa kun kammala horon ilimin kiyaye lafiya a forklift. Idan mai ɗaukar aiki ya horar kuma ya tantance ku, ku rubuta nau'o'in motocin da shekarar. Kada ku taɓa rubuta \"certified\" (an ba da shaida) idan ba a ba ku ba.",
            "A hirar neman aiki, ku yi magana game da dubawa kafin fara aiki, farantin bayani da kiyaye lafiyar masu tafiya a ƙafa. Masu ɗaukar aiki suna son masu tuƙi da ke yin hankali da farko, sauri kuma daga baya."
          ],
          steps: ["Ku jera masu ɗaukar aiki ko shirye-shirye uku a yankinku da ke horar da masu tuƙa forklift (shafukan neman aiki, cibiyar ayyuka, kwalejin al'umma).", "Ku tambayi kowanne: ya haɗa da tuƙi da ake kula da shi da kuma tantancewa?", "Ku rubuta layi na gaskiya a résumé game da abin da kuka yi zuwa yanzu.", "Ku yi atisayen amsa ta daƙiƙa 30: \"Yaya kuke kiyaye lafiya a kan forklift?\""],
          words: [["Kamfanin samar da ma'aikata (staffing agency)", "kamfani da ke sa ma'aikata a ayyuka a wasu kamfanoni."], ["Cibiyar ayyuka (workforce center)", "ofishin jama'a (ana yawan kiransa American Job Center) da ke taimakawa mutane samun aiki da horo."]],
          slides: [
            { title: "Inda ake horo", bullets: ["Masu ɗaukar aiki da ke ɗauka sannan su horar", "Cibiyoyin ayyuka da kwalejojin al'umma", "Ku tambaya: tuƙi da ake kula da shi da tantancewa?"] },
            { title: "Kowane mai ɗaukar aiki yana tantance ku", bullets: ["Don motocinsa da wurin aikinsa", "Kafin ku tuƙa da kanku"] },
            { title: "Ku faɗi gaskiya a résumé", bullets: ["Kwas: horon ilimin kiyaye lafiya a forklift", "Horon mai ɗaukar aiki: nau'o'in motoci da shekara", "Kada ku taɓa iƙirarin \"certified\" idan ba haka ba ne"] }
          ],
          sources: [OSHA_178, OSHA_TRAINING],
          tryIt: "Ku rubuta shirinku: wurare uku da za su iya horar da ku, tambayar da za ku yi wa kowanne, layi ɗaya na gaskiya a résumé, da amsarku ta daƙiƙa 30 ga \"Yaya kuke kiyaye lafiya a kan forklift?\" Ku karanta amsar da babbar murya.",
          youCanNow: "rubuta shirin samun horo da tantancewa kan forklift, da bayyana horonku da gaskiya a résumé.",
          quickCheck: [
            { objective: "O5", q: "Kun kammala wannan kwas amma ba mai ɗaukar aiki da ya tantance ku. Wane layi ne na gaskiya a résumé?", options: ["\"Certified forklift operator, all classes\"", "\"Completed forklift safety knowledge training (Koach Learn), 2026\"", "\"OSHA licensed forklift driver\"", "\"Forklift expert, 10 years\""], answer: 1, why: "Yana faɗin ainihin abin da kuka yi, ba tare da iƙirarin shaidar da ba ku da ita ba." },
            { objective: "O5", q: "Me ya kamata ku tambayi shirin horon forklift?", options: ["Ko ya haɗa da tuƙi da ake kula da shi da tantancewa ta aiki", "Ko yana ba da kati mai kyau", "Ko za ku iya tsallake aikin hannu", "Ko shi ne mafi arha a intanet"], answer: 0, why: "Horon OSHA ya haɗa da aikin hannu da tantancewa, don haka ku tabbatar shirin yana da su." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Kaya, tuƙi da samun aiki",
        questions: [
          { objective: "O3", q: "Mene ne load center?", options: ["Tsakiyar rumbun ajiya", "Tsakiyar sitiyari", "Nisa daga fuskar cokula zuwa tsakiyar kaya", "Tsayin mast"], answer: 2, why: "Ana auna load center daga fuskar gaban cokula zuwa cibiyar nauyin kayan." },
          { objective: "O3", q: "Wani kaya yana karkata kuma naɗinsa ya yage. Me za ku yi?", options: ["Ku ɗaga shi da sauri", "Ku ɗaga shi sama don ku gani", "Ku tura shi da cokula", "Kada ku ɗaga shi; ku kai rahoto don a gyara shi ko a sake jera shi"], answer: 3, why: "Kaya masu tsayayye da aka jera lafiya ne kaɗai ya kamata a ɗauka." },
          { objective: "O4", q: "Kayanku sun hana ku ganin gaba. Yaya za ku yi tafiya?", options: ["Da baya, kuna kallon inda za ku", "Gaba, kaya a ɗage", "Gaba, da sauri", "Abokin aiki yana hawa a kan cokula"], answer: 0, why: "Idan kaya sun hana ku gani, ku yi tafiya kayan suna biye a baya (da baya)." },
          { objective: "O4", q: "Kafin ku shiga tirelar babbar mota a wurin lodi, me dole a yi?", options: ["Babu komai", "A buɗe tagogin baya na tirelar", "A ja birkin tirelar, a toshe tayoyinta, kuma a duba bene", "A buga hon sau uku"], answer: 2, why: "OSHA tana buƙatar a ja birki, a toshe tayoyi, kuma a duba benen tirelar kafin a shiga ciki." },
          { objective: "O5", q: "Kun koma aiki da ke amfani da wani nau'in forklift daban. Mene ne gaskiya?", options: ["Kuna buƙatar horo da tantancewa don sabon nau'in", "Tsohon katinku ya rufe komai", "Kuna iya koyon shi da kanku bayan lokacin aiki", "Babu abin da ya canja"], answer: 0, why: "Wani nau'in mota daban dalili ne na horo da tantancewa a kan wannan motar." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Tushen Aikin Tuƙa Forklift",
    questions: [
      { objective: "O5", q: "A ƙarƙashin dokar OSHA, wa ke tabbatarwa a rubuce cewa an horar kuma an tantance mai tuƙa forklift?", options: ["Mai tuƙin", "Shafin intanet", "Mai ɗaukar aiki", "Kamfanin da ya ƙera forklift"], answer: 2, why: "Mai ɗaukar aiki ne ke tabbatar da horo da tantancewar mai tuƙi." },
      { objective: "O5", q: "Mene ne mafi ƙanƙantar shekaru don tuƙa forklift a wurin aiki?", options: ["16", "18", "14", "21"], answer: 1, why: "Dokokin ƙwadago na tarayya sun hana ma'aikata 'yan ƙasa da shekara 18 tuƙa forklift." },
      { objective: "O5", q: "Wanne ne dalilin sake horo?", options: ["Kusan hatsari da mai tafiya a ƙafa", "Sabon kayan aiki (uniform)", "Ƙarin albashi", "Ranar hutu"], answer: 0, why: "Hatsari ko kusan hatsari yana ɗaya daga cikin dalilan OSHA na sake horo." },
      { objective: "O1", q: "Mene ne aikin overhead guard?", options: ["Yana riƙe kaya", "Yana daidaita motar", "Yana juya motar", "Yana kare mai tuƙi daga abubuwan da ke faɗowa"], answer: 3, why: "Overhead guard yana kare mai tuƙi daga abubuwan da ke faɗowa daga sama." },
      { objective: "O1", q: "Cokula suna rataye a kan wane sashe?", options: ["Counterweight", "Carriage", "Tayoyi", "Kujera"], answer: 1, why: "Cokula suna rataye a kan carriage, wanda ke hawa da sauka a kan mast." },
      { objective: "O1", q: "Pallet jack mai lantarki da ake tafiya a bayansa yana cikin wane aji?", options: ["Class VII", "Class V", "Class III", "Class VI"], answer: 2, why: "Class III ya ƙunshi motocin hannu masu lantarki, har da waɗanda ake tafiya a bayansu." },
      { objective: "O2", q: "Yaushe ne dole a duba forklift?", options: ["Kafin amfani, aƙalla kullum", "Sau ɗaya a shekara", "Bayan hatsari kawai", "Lokacin da yake sabo kawai"], answer: 0, why: "OSHA tana buƙatar dubawa kafin amfani, aƙalla kullum." },
      { objective: "O2", q: "Me yasa ba kwa saka hannunku cikin mast don duba sarƙoƙi?", options: ["Yana da datti", "Ba ya cikin dubawar", "Mai kula ne ke yi", "Mast yana iya motsawa ya murƙushe hannayenku"], answer: 3, why: "Sassan mast masu motsi suna iya murƙushe hannaye; jagorar OSHA ita ce ku duba da ido, ko ku yi amfani da sanda don gwada ƙarfin jan sarƙar." },
      { objective: "O2", q: "Farantin bayani ya ɓace daga wani forklift. Me za ku yi?", options: ["Ku yi tsammanin iyakar nauyin", "Ku kai rahoto; dole ne farantin ya kasance a wurinsa kuma a iya karanta shi", "Ku yi amfani da hoton waya na farantin wata mota", "Ku yi watsi da shi"], answer: 1, why: "Faranti da alamomi dole su kasance a wurinsu kuma a iya karanta su; ku kai rahoto kafin amfani." },
      { objective: "O2", q: "Wa zai iya gyara forklift?", options: ["Mutanen da aka horar kuma aka ba izini kawai", "Kowane mai tuƙi", "Duk wanda yake da kayan aiki", "Sabon ma'aikaci"], answer: 0, why: "Mutanen da aka ba izini kuma aka horar ne kaɗai ya kamata su gyara." },
      { objective: "O3", q: "Farantin ya ce 3,000 lb a inci 24. Wane kaya za ku iya ɗagawa (gwaji kawai)?", options: ["Akwati mai 3,500 lb", "Kaya mai 3,000 lb wanda tsakiyarsa tana nisan inci 40", "Kaya mai 1,000 lb da ya yage kuma yake karkata", "Fallet mai 2,400 lb da aka naɗe, a tsakiya"], answer: 3, why: "Yana ƙasa da iyakar nauyi, tsayayye ne kuma a tsakiya cikin load center da aka ƙididdige." },
      { objective: "O3", q: "Me ke faruwa idan tsakiyar kaya ta fi load center da aka ƙididdige nisa?", options: ["Motar za ta iya ɗaga fiye da haka", "Iyakar nauyi mai aminci tana raguwa", "Babu abin da ke canjawa", "Motar tana ƙara gudu"], answer: 1, why: "Load center mai tsawo yana rage daidaiton motar, don haka za ta iya ɗaga ƙasa da haka." },
      { objective: "O3", q: "Bayan kun ɗaga kaya kaɗan, me za ku yi kafin ku yi tafiya?", options: ["Ku karkatar da mast baya kaɗan don kayan su jingina a backrest", "Ku karkatar da shi gaba", "Ku ɗaga shi sama iyakar yadda za ku iya", "Ku bar wani ya riƙe shi"], answer: 0, why: "Karkatarwa baya kaɗan tana tsayar da kayan a jikin backrest." },
      { objective: "O4", q: "Yaya ya kamata ku ɗauki kaya yayin tuƙi?", options: ["A sama, don ku gani", "An karkatar gaba", "Ƙasa kuma an karkatar baya", "Mutum yana riƙe da shi"], answer: 2, why: "Kaya a ƙasa da aka karkatar baya yana sa motar ta daidaita; kada ku taɓa tafiya kaya a ɗage ko an karkatar gaba." },
      { objective: "O4", q: "Kun iso mahaɗar hanyoyi inda ba kwa iya ganin bayan kusurwa. Me za ku yi?", options: ["Ku ƙara gudu don wucewa da sauri", "Ku rage gudu ku buga hon", "Ku ɗaga cokula", "Ku rufe idanunku ku tafi"], answer: 1, why: "OSHA ta ce ku rage gudu ku buga hon inda ba kwa iya gani." },
      { objective: "O4", q: "Kuna sauka a gangara da forklift mai kaya. Ta wace hanya?", options: ["Gaba, kaya a gaba", "A gefe", "Ku juya a tsakiyar gangara", "Da baya, don kayan su kasance a ɓangaren sama"], answer: 3, why: "Ku sa kayan a ɓangaren sama: gaba lokacin hawa, baya lokacin sauka, kuma kada ku taɓa juyawa a gangara." },
      { objective: "O4", q: "Kun bar forklift ɗinku don hutu. Me dole ku yi?", options: ["Ku sauke cokula, ku sa ta a neutral, ku kashe ta kuma ku ja birki", "Ku bar ta a kunne don ta kasance a shirye", "Ku bar cokula a sama", "Ku roƙi abokin aiki ya kula da ita"], answer: 0, why: "Motar da ba a kula da ita tana da cokula ƙasa, abubuwan sarrafawa a neutral, a kashe, kuma an ja birki." },
      { objective: "O4", q: "Nisan nawa ya kamata ku bari tsakaninku da wani forklift a gabanku?", options: ["Ƙafa ɗaya", "Kusa sosai yadda za ku iya", "Kusan tsawon motoci uku", "Ba komai"], answer: 2, why: "OSHA tana neman kusan tsawon motoci uku tsakanin motoci." },
      { objective: "O5", q: "Wani shafin intanet ya ce bidiyonsa na intanet zai sa ku zama \"OSHA certified\" cikin minti 20. Mene ne gaskiya?", options: ["Yana maye gurbin horon mai ɗaukar aiki", "OSHA ce ke sayar da katin", "Ya isa ga kowane aiki", "Har yanzu ana buƙatar horon hannu da tantancewa daga mai ɗaukar aiki"], answer: 3, why: "Horo da tantancewar mai ɗaukar aiki a wurin aiki ne kaɗai suke cika dokar OSHA." },
      { objective: "O1", q: "Me farantin bayani yake nunawa?", options: ["Samfurin motar da nauyin da za ta iya ɗagawa", "Sunan mai tuƙi", "Adireshin rumbun ajiya", "Farashin mai"], answer: 0, why: "Farantin bayani yana nuna samfurin motar da bayanin iyakar nauyinta." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 3, 6, 8, 10, 11, 13, 15, 18] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake dubawa.",
    criteria: [
      { name: "Jerin dubawa", objective: "O2", notYet: "Babu wasu dubawa na makulli a kashe ko a kunne, ko babu mataki don mota marar aminci.", meets: "Ya ƙunshi kowane abu na makulli a kashe da a kunne don nau'in motar da aka zaɓa, kuma ya faɗi abin da za a yi da lahani.", exceeds: "Ya ƙara ƙarin dubawa don motoci masu lantarki ko propane." },
      { name: "Sunayen sassa", objective: "O1", notYet: "An faɗi ƙasa da sassa shida, ko aikinsu ba daidai ba.", meets: "An faɗi aƙalla sassa shida da aikin kowanne, da ajin motar.", exceeds: "Ya bayyana yadda counterweight da load backrest ke kiyaye lafiyar mai tuƙi." },
      { name: "Shawarwari kan kaya", objective: "O3", notYet: "An ce kaya da ya wuce iyakar nauyi ko marar tsayayye yana da aminci.", meets: "Dukkan shawarwari uku kan kaya daidai ne, tare da dalili ta amfani da farantin bayani.", exceeds: "Ya lura da lokacin da za a tambayi mai kula, kamar nauyin da ba a sani ba ko ƙarin kayan aiki." },
      { name: "Katin tuƙi, wurin lodi da ajiye mota", objective: "O4", notYet: "Babu dubawar wurin lodi ko wani mataki na ajiye mota.", meets: "Ya jera matakan wurin lodi (birki, katakon toshe taya, bene) da dukkan matakai huɗu na ajiye mota.", exceeds: "Ya ƙara dokokin gangara, masu tafiya a ƙafa da faɗuwar mota." },
      { name: "Shirin horo da layin résumé", objective: "O5", notYet: "Yana iƙirarin an ba da shaida, ko ya ce ba a buƙatar horon mai ɗaukar aiki.", meets: "Ya faɗi wurare uku na horo, ya ce dole mai ɗaukar aiki ya tantance, kuma ya ba da layi na gaskiya a résumé.", exceeds: "Ya haɗa da amsar kiyaye lafiya ta daƙiƙa 30 da aka yi atisaye don hirar neman aiki." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin da fakitin shiri da ya cika ma'aunin rubric",
      "Masu koyo da suka fara horon forklift na mai ɗaukar aiki ko na wani shiri cikin kwanaki 60 (binciken biyo baya)",
      "Masu koyo da aka ɗauka aiki a rumbun ajiya ko aikin forklift (rahotannin abokan aiki da na biyo baya)",
      "Masu ɗaukar aiki abokan hulɗa sun ce sababbin ma'aikata sun ci tantancewarsu ta aiki a karon farko"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai intanet don shafukan OSHA eTool",
      "Takarda da alƙalami don zane, jerin dubawa da katin aljihu",
      "Zaɓi: hotunan forklift da aka buga da samfurin farantin bayani",
      "Kusan minti 60 gaba ɗaya"
    ],
    facilitatorNotes: [
      "Ku bayyana tun farko: wannan kwas ɗin ba ya ba kowa shaida; mai ɗaukar aiki ne ke horarwa da tantancewa.",
      "Kada ku bar masu koyo su yi atisaye a kan ainihin forklift a matsayin ɓangare na wannan kwas. Idan shirinku yana da motar horo, aikin hannu yana faruwa ne kawai tare da ƙwararren mai horarwa.",
      "Ku yi amfani da farantin bayani da aka buga mai lambobin ƙirƙira don atisayen kaya.",
      "Ku lura da masu koyo 'yan ƙasa da shekara 18; za su iya ɗaukar kwas ɗin amma ba za su iya tuƙa forklift a wurin aiki ba.",
      "Ku ba da maki ga fakitin shiri da ma'aunin rubric, kuma ku duba layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
