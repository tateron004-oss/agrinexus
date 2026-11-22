"use strict";

// Koach Learn course, Hausa (ha) translation of shared/manufacturing-technician.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.
// Facts (MSSC CPT 4.0, OSHA 1910.147 and 1910.212, DOL youth rules, Apprenticeship Finder) are as in the English file; no fees are stated.

const MSSC_CPT = { name: "MSSC: Certified Production Technician (CPT 4.0)", url: "https://www.msscusa.org/certification/production-certification-cpt/" };
const MSSC_COURSES = { name: "MSSC: Sassan (modules) da kwasa-kwasan CPT 4.0", url: "https://www.msscusa.org/certified-production-technician-cpt-courses/" };
const OSHA_LOTO = { name: "OSHA: Control of Hazardous Energy (Lockout/Tagout)", url: "https://www.osha.gov/control-hazardous-energy" };
const OSHA_147 = { name: "OSHA 29 CFR 1910.147: The control of hazardous energy (lockout/tagout)", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.147" };
const OSHA_GUARD = { name: "OSHA: Machine Guarding (kariyar injina)", url: "https://www.osha.gov/machine-guarding" };
const OSHA_212 = { name: "OSHA 29 CFR 1910.212: General requirements for all machines (guarding)", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.212" };
const DOL_YOUTH = { name: "U.S. Department of Labor: Ayyukan da aka hana ma'aikata 'yan ƙasa da shekara 18", url: "https://www.dol.gov/agencies/whd/child-labor/what-jobs-are-off-limits" };
const APPRENTICE = { name: "Apprenticeship.gov: Apprenticeship Finder (U.S. Department of Labor)", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" };

module.exports = {
  id: "manufacturing-technician-ha",
  lang: "ha",
  translationOf: "manufacturing-technician",
  category: "Workforce Development",
  name: "Tushen Aikin Technician na Masana'anta",
  skills: "Gano haɗarin injina da amfani da lockout/tagout, Auna kaya da kwatanta su da tolerance, Duba inganci da gano tushen matsala, Amfani da 5S, lean da kula da inji na kullum, Shirin jarabawar MSSC CPT 4.0",
  outcome: "gano haɗarin da ke kan inji da zaɓar kariyar da ta dace, auna wani kaya da yanke shawara ko yana cikin tolerance, rubuta lahani da gano tushen matsala, amfani da 5S da binciken inji na kullum a wurin aiki, da yin tsari mai ranaku don shirya jarabawoyin MSSC Certified Production Technician (CPT 4.0) da aikin samarwa na farko.",
  about: [
    "Masana'antu suna yin motoci, abinci, magani, kayan daki, sassan ƙarfe da kayan lantarki, kuma suna ɗaukar ma'aikatan samarwa, masu sarrafa injina da technicians. Wannan kwas ɗin na masu neman aiki ne, matasa, tsofaffin sojoji, mutanen da ke dawowa gida daga kurkuku da duk wanda ke son fara aiki a cikin masana'anta.",
    "Za ku koyi fannoni huɗu da aikin masana'anta na farko da Certified Production Technician (CPT 4.0) na Manufacturing Skill Standards Council (MSSC) suka ginu a kai: tsaro, inganci da aunawa, samarwa, da sanin kula da injina. Za ku yi atisaye a takarda da rula (ruler) a gida.",
    "Muhimmi: wannan kwas ɗin yana shirya ku ne kawai; ba ya ba ku CPT 4.0 ko wata takardar shaida. MSSC ce ke ba da jarabawoyin kuma take ba da takardun shaida. Sarrafa injina, lockout/tagout da amfani da kayan auna masu tsananin daidaito ana koyon su ne ido-da-ido tare da ƙwararren malami ko mai horarwa na kamfani, da kayan kariya da suka dace. Kada ku yi atisaye a kan injina na gaske ku kaɗai.",
    "Kowane darasi yana ɗaukar kusan minti biyar kuma yana ƙarewa da aikin \"Gwada yanzu\". Akwai gajeren gwaji bayan kowane darasi, gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku yi fakitin shirin aikin technician na masana'anta: jerin haɗari da kariya na inji ɗaya, rajistar aunawa da shawarar ciki-ko-wajen-tolerance na kayan atisaye biyar, 5 Whys na lahanin atisaye ɗaya, tsarin 5S da binciken kullum na wurin aiki ɗaya, da tsari mai ranaku don shirya jarabawoyi huɗu na CPT 4.0 tare da layin résumé na gaskiya.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya da matasa da ke neman aikin samarwa, sarrafa inji, haɗa kaya (assembler) ko technician: masu neman aiki, tsofaffin sojoji, mutanen da ke dawowa gida daga kurkuku, baƙi da matasan da ke gama makaranta. Wasu sun yi aiki a rumbunan ajiya ko a layin haɗa kaya; yawancinsu ba su karanci aikin masana'anta ba.",
    startingPoint: "Suna iya bin matakan da aka rubuta kuma su yi lissafin cikakkun lambobi. Yawancinsu ba su taɓa amfani da caliper ba, ba su karanta tolerance ba, ba su yi amfani da lockout/tagout ba, kuma ba su ji labarin 5S, lean ko binciken tushen matsala ba. Da yawa ba su san akwai takardar shaidar masana'antu don aikin samarwa na farko ba.",
    gap: "Masu ɗaukar aiki suna son sabbin ma'aikata da ke aiki lafiya kusa da injina, suke auna daidai, suke kama kaya marasa kyau, kuma suke tsara wurin aikinsu. Raunin injina na iya zama mai tsanani, kamar yanke gaɓa, don haka ɗabi'ar tsaro ce ta farko. Masu koyo suna buƙatar wannan ilimi, da hanya bayyananna zuwa takardar shaida da aka sani kamar MSSC CPT 4.0, don su yi gogayya a kan ayyukan samarwa da apprenticeship.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; MSSC ta ba da shawarar kusan matakin lissafi na aji tara da matakin karatu na aji goma don CPT 4.0, don haka ana nuna lissafi mataki-mataki",
      "Babu sarrafa inji a wannan kwas ɗin: atisayen hannu yana faruwa ne kawai tare da ƙwararren malami ko mai horarwa na kamfani",
      "Dokokin tarayya na aikin yara sun hana ma'aikata 'yan ƙasa da shekara 18 amfani da injina da yawa na masana'anta",
      "Na'urori: waya ko kwamfutar laburare don shafukan hukuma; rula ko tef na aunawa da takarda a gida",
      "Sharuɗɗa, kuɗi da ranakun jarabawar CPT 4.0 suna canjawa: masu koyo su duba msscusa.org ko wurin jarabawa"
    ],
    prerequisites: "Lissafin cikakkun lambobi na yau da kullum. \"Everyday Math\" (Lissafin Yau da Kullum) da \"Tushen Tsaro a Wurin Aiki (OSHA)\" kwasa-kwasai ne da ke taimakawa."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku bayani ko hoton inji da wani aiki", action: "gano haɗarin da zaɓar kariyar da ta dace, har da lockout/tagout", standard: "da faɗin aƙalla haɗari 3 da kariyar da ta dace da kowanne" },
    { id: "O2", condition: "Idan aka ba ku karatun rula ko caliper da tolerance na wani kaya", action: "auna kayan da yanke shawara ko yana cikin tolerance", standard: "da samun aƙalla shawarwari 4 cikin 5 na atisaye daidai" },
    { id: "O3", condition: "Idan aka ba ku matsalar inganci a layin samarwa", action: "rubuta lahanin da gano tushen matsalar da ake zato da 5 Whys", standard: "da ware kaya marasa kyau da isa ga dalilin da za a iya gyarawa" },
    { id: "O4", condition: "Idan aka ba ku wurin aiki da inji", action: "amfani da 5S da binciken mai sarrafa inji na kullum a wurin", standard: "da rubuta mataki ɗaya na kowane S cikin 5 da aƙalla abubuwa 5 na binciken kullum" },
    { id: "O5", condition: "Ta amfani da shafin MSSC CPT 4.0 da hanyoyin horo na yankinku", action: "rubuta tsari mai ranaku don shirya CPT 4.0 da aikin samarwa na farko", standard: "wanda ya faɗi sassa huɗu da ake buƙata, ranar jarabawa da za a tabbatar, da layin résumé na gaskiya" }
  ],
  chapters: [
    {
      name: "Babi na 1: Aikin, tsaro da aunawa",
      lessons: [
        {
          title: "Aikin technician na masana'anta da CPT 4.0",
          objectives: ["O5"],
          minutes: 5,
          goal: "Bayyana abin da technician na samarwa ke yi da takardar shaidar da ke nuna wa masu ɗaukar aiki kun shirya.",
          text: [
            "Technician na samarwa (production technician) yana taimakawa a yi kaya lafiya kuma daidai. A lokacin aiki na yau da kullum za ku iya shirya ko sarrafa inji, haɗa sassa, duba sassa da kayan auna, rubuta lambobi a takarda ko allon kwamfuta, tsaftace wurinku, da kai rahoton matsalolin injina ko sassa.",
            "Masu ɗaukar aiki da yawa suna neman Certified Production Technician (CPT 4.0) daga Manufacturing Skill Standards Council (MSSC). Tana da jarabawoyi biyar: Safety (Tsaro); Quality Practices & Measurement (Inganci da Aunawa); Manufacturing Process & Production (Tsarin Masana'anta da Samarwa); Maintenance Awareness (Sanin Kula da Injina); da Green Production (Samarwa Mai Kare Muhalli). Kuna samun takardar shaida don kowace jarabawa da kuka ci. Huɗu na farko tare suna ba da cikakken CPT 4.0. Green Production ba dole ba ce.",
            "MSSC ta ce jarabawoyin na zaɓin amsa ne (multiple choice) kuma ana iya yin su a kan layi ko a takarda. Ana ba da horo ta kwalejojin al'umma (community colleges), shirye-shiryen ayyukan yi da wasu manyan makarantu. MSSC kuma tana da zaɓin aikin hannu mai suna CPT+ tare da Skill Boss. Ku duba msscusa.org don kuɗi, wuraren jarabawa da sharuɗɗa na yanzu; wannan kwas ɗin ba ya ba da takardar shaidar.",
            "Wasu hanyoyin shiga aikin: registered apprenticeship (koyon aiki mai rajista), inda kuke samun albashi yayin da kuke koyo (ku nema a apprenticeship.gov), da ayyukan da kamfani ke horar da ku. Tsofaffin sojoji da suka yi aikin gyara ko samar da kayayyaki a soja sau da yawa suna da ƙwarewar da ke amfani a nan."
          ],
          words: [["Production technician", "ma'aikaci da ke sarrafawa, shiryawa, dubawa da kula da kayan aikin da ke yin kaya."], ["MSSC", "Manufacturing Skill Standards Council, ƙungiyar da ke ba da jarabawoyin CPT da takardun shaidarsa."], ["Assessment (jarabawa)", "gwaji da ke nuna ko kun san darasin."], ["Module (sashe)", "fanni ɗaya na CPT, mai jarabawarsa da takardar shaidarsa."], ["Registered apprenticeship", "aiki mai albashi tare da horo da mai ba da shawara, wanda U.S. Department of Labor ko wata jiha ta amince da shi."]],
          slides: [
            { title: "Yadda aikin yake", bullets: ["Shirya ko sarrafa injina, haɗa sassa", "Auna da duba sassa, rubuta lambobi", "Tsaftace wurin, kai rahoton matsaloli"] },
            { title: "MSSC CPT 4.0", bullets: ["Safety (Tsaro)", "Quality Practices & Measurement", "Manufacturing Process & Production", "Maintenance Awareness"] },
            { title: "Yadda yake aiki", bullets: ["Takardar shaida don kowane sashe da kuka ci", "Sassa huɗu na farko = cikakken CPT 4.0", "Green Production ba dole ba ce"] },
            { title: "Wasu hanyoyin shiga", bullets: ["Registered apprenticeship: apprenticeship.gov", "Kamfanonin da ke horar da sabbin ma'aikata", "Wannan kwas yana shirya ku; MSSC ke ba da shaida"] }
          ],
          sources: [MSSC_CPT, MSSC_COURSES, APPRENTICE],
          tryIt: "A takarda, ku rubuta sassa huɗu na CPT 4.0 da kuke buƙata don cikakkiyar takardar shaida. A gefen kowanne, ku rubuta abu ɗaya da kuka riga kuka sani game da shi da tambaya ɗaya da kuke da ita. Sannan ku buɗe msscusa.org ku rubuta inda za ku nemi wurin jarabawa.",
          youCanNow: "bayyana abin da technician na samarwa ke yi da faɗin sassa huɗu na CPT 4.0 da kuke buƙata don cikakkiyar takardar shaida.",
          quickCheck: [
            { objective: "O5", q: "Sassa nawa na CPT 4.0 ne dole ku ci don cikakkiyar takardar shaida?", options: ["Biyu", "Duka biyar, har da Green Production", "Huɗu na farko", "Safety kawai"], answer: 2, why: "MSSC ta ce dole ne masu jarabawa su sami takardun shaida huɗu na farko don cikakken CPT 4.0; Green Production ba dole ba ce." },
            { objective: "O5", q: "Wa ke ba da takardar shaidar CPT 4.0?", options: ["Manufacturing Skill Standards Council (MSSC)", "Wannan kwas na kan layi", "OSHA", "Laburaren yankinku"], answer: 0, why: "MSSC ce ke ba da jarabawoyin kuma take ba da takardun shaida; wannan kwas ɗin yana shirya ku ne kawai." }
          ]
        },
        {
          title: "Tsaron inji: kariya (guards), PPE da lockout/tagout",
          objectives: ["O1"],
          minutes: 6,
          goal: "Gano haɗarin da ke kan inji da zaɓar kariyar da ta dace.",
          text: [
            "OSHA (hukumar tsaron wurin aiki ta Amurka) ta ce duk wani sashe, aiki ko tsari na inji da zai iya jawo rauni dole a kare shi. Dokarta ta injina ta faɗi haɗari kamar wurin aikin inji (point of operation, inda inji ke yanka, matsawa ko siffanta abu), wuraren matsewa masu jawowa (ingoing nip points, inda sassa biyu ke juyawa tare kuma za su iya jan ku ciki), sassa masu juyawa, da tarkace da tartsatsin wuta masu tashi. Raunuka sun haɗa da murƙushewa, yanke gaɓa, ƙonewa da makanta.",
            "Kariyarku, daga mafi ƙarfi zuwa mafi rauni: guards (shingaye) da ke hana jikinku shiga wurin haɗari (kada ku taɓa cire ko kauce wa ɗaya), hanyoyin aiki masu lafiya, da kayan kariya na jiki (PPE) kamar gilashin kariya, kariyar kunne, safar hannu inda aka yarda da kuma takalma masu ƙarfe a gaba. Ku nisantar da tufafi masu sakkuwa, dogon gashi da kayan ado daga sassa masu motsi; safar hannu na iya kamuwa a sassa masu juyawa, don haka ku bi dokar kowane inji.",
            "Lockout/tagout (LOTO) dokar OSHA ce ta 29 CFR 1910.147. Idan ana gyara inji ko ana cire abin da ya maƙale, dole a kashe ƙarfinsa (lantarki, na injina, ruwa mai matsi, iska mai matsi, sinadarai ko zafi) a kulle shi don kada ya tashi. Ma'aikatan da aka horar kuma aka ba izini ne kawai ke sa makulli. Ana gaya wa kowa kada ya taɓa cire makulli ko ya sake tayar da inji da aka kulle.",
            "Dokokin tarayya na aikin yara sun hana ma'aikata 'yan ƙasa da shekara 18 amfani da injina masu amfani da wuta da yawa, kamar injinan siffanta ƙarfe, hudawa da yankawa, zarto mai wuta da forklift. Ku duba shafin Department of Labor idan shekarunku ba su kai 18 ba."
          ],
          steps: ["Shiri: ku san duk hanyoyin ƙarfin inji.", "Ku gaya wa ma'aikatan da abin ya shafa cewa za a kashe inji.", "Ku kashe inji ta hanyar da aka saba.", "Ku ware ƙarfin: kashe makunnin wuta, rufe bawuloli, cire haɗi.", "Ku sa makullinku da alamarku (tag).", "Ku saki ko tare ƙarfin da aka ajiye (sipirin, iska, matsi, zafi).", "Tabbatarwa: ku gwada tayar da shi, sannan ku mayar da makunnai zuwa kashe."],
          words: [["Point of operation", "wurin da inji ke yanka, lanƙwasa, matsawa ko siffanta abu."], ["Nip point", "inda sassa biyu masu motsi ke haɗuwa kuma za su iya jan yatsu, gashi ko tufafi."], ["Guard (shinge)", "katanga da ke nisantar da jikinku daga sassa masu motsi."], ["PPE", "kayan kariya na jiki, kamar gilashin kariya, toshewar kunne da takalman kariya."], ["Lockout/tagout (LOTO)", "kashe ƙarfin inji da sa makulli da alama don kada ya tashi yayin da wani ke aiki a kansa."], ["Stored energy (ƙarfin da aka ajiye)", "ƙarfin da ya rage a inji bayan an kashe shi, kamar sipirin, matsin iska ko zafi."]],
          slides: [
            { title: "Inda injina ke cutar da mutane", bullets: ["Point of operation (wurin aikin inji)", "Nip points da sassa masu juyawa", "Tarkace da tartsatsin wuta masu tashi"] },
            { title: "Kariyarku", bullets: ["Guards: kada ku taɓa cire ko kauce musu", "Hanyoyin aiki masu lafiya", "PPE: gilashi, kariyar kunne, takalma"] },
            { title: "Lockout/tagout", bullets: ["Don gyara da cire abin da ya maƙale", "Kashe, ware, kulle, sa alama", "Saki ƙarfin da aka ajiye, sannan tabbatar"] },
            { title: "Ku san iyaka", bullets: ["Masu izini kaɗai ke sa makulli", "Kada ku taɓa cire makullin wani", "Ƙasa da 18: injina da yawa an hana su"] }
          ],
          sources: [OSHA_GUARD, OSHA_212, OSHA_LOTO, OSHA_147, DOL_YOUTH],
          tryIt: "Ku zaɓi inji da kuka sani ko kuke iya kallo a bidiyo: injin huda (drill press), injin yayyaga takarda ko conveyor (bel mai ɗaukar kaya). Ku jera aƙalla haɗari uku (point of operation, nip points, sassa masu juyawa, tarkace masu tashi) da kariyar kowanne. Sannan ku karanta wannan misalin atisaye: wani kaya ya maƙale a cikin injin matsewa (press). Ku rubuta abin da dole ya faru kafin kowa ya saka hannu ciki.",
          youCanNow: "gano haɗarin da ke kan inji da zaɓar guards, PPE ko lockout/tagout don kare kanku da wasu.",
          quickCheck: [
            { objective: "O1", q: "Wani guard yana rage saurinku, kuma abokin aiki ya ce ku cire shi. Me za ku yi?", options: ["Cire shi idan mai kula ba ya nan", "Lanƙwasa shi gefe", "Cire shi na lokacin aiki ɗaya kawai", "Bar shi a wurinsa ku kai rahoton matsalar ga mai kula"], answer: 3, why: "Guards suna hana jikinku shiga wurin haɗari kuma ba za a taɓa cire su ko kauce musu ba." },
            { objective: "O1", q: "Dole a gyara wani inji. Wane mataki ke zuwa nan da nan bayan kun sa makullinku da alamarku?", options: ["Tayar da inji", "Saki ko tare ƙarfin da aka ajiye, sannan tabbatar ba zai tashi ba", "Cire guard ku fara", "Cire makullin don gwada shi"], answer: 1, why: "Bayan kullewa, kuna sakin ƙarfin da aka ajiye kuma ku tabbatar inji ba zai iya tashi ba." }
          ]
        },
        {
          title: "Auna sassa da karanta tolerance",
          objectives: ["O2"],
          minutes: 6,
          goal: "Auna kaya da yanke shawara ko yana cikin tolerance.",
          text: [
            "Kowane kaya yana da girman da ake nufi a zanensa, wanda ake kira nominal size, da tolerance: nisan da zai iya bambanta da girman da ake nufi kuma ya kasance mai kyau. Misali, 1.250 ± 0.005 inch yana nufin kowane girma daga 1.245 zuwa 1.255 inches yana da kyau. Duk abin da ya fi ƙanƙanta ko girma ya fita daga tolerance.",
            "Kayan aiki da aka saba: tef na aunawa ko rula na ƙarfe don girma na kusan; caliper don girman waje, ciki da zurfi, sau da yawa zuwa dubu ɗaya na inch (0.001) ko ɗari ɗaya na millimeter (0.01); da micrometer don girman waje mafi tsananin daidaito. Shaguna da yawa suna amfani da caliper na dijital.",
            "Ɗabi'u masu kyau: ku tsaftace kayan da kayan aunawa, ku mayar da caliper zuwa sifili (zero) da muƙamuƙinsa a rufe, ku riƙe muƙamuƙin a miƙe da kayan ba tare da matsewa ba, ku karanta lambar kai tsaye, kuma ku rubuta ta nan take. Ku auna fiye da sau ɗaya idan ba ku da tabbaci. Ku koyi amfani da kayan auna masu tsananin daidaito tare da malami, wanda kuma zai koya muku karanta ma'aunin dial da vernier."
          ],
          steps: ["Karanta zanen: nominal size da tolerance.", "Lissafa iyakoki: nominal a rage tolerance, da nominal a ƙara tolerance.", "Tsaftace kayan da kayan aunawa; mayar da caliper zuwa sifili.", "Auna a miƙe, ba tare da matsewa ba; karanta lambar.", "Rubuta ta. A cikin iyakoki = mai kyau; a waje = ya fita daga tolerance."],
          words: [["Nominal size", "girman da ake nufi da aka nuna a zane."], ["Tolerance", "yawan yadda girma zai iya bambanta da wanda ake nufi kuma ya kasance mai kyau."], ["Caliper", "kayan aiki mai muƙamuƙi masu zamewa da ke auna girman waje, ciki da zurfi."], ["Micrometer", "kayan aiki irin na kusa (screw) da ke auna girman waje da tsananin daidaito."], ["Zero (sifili)", "saita kayan aunawa ya karanta 0 da muƙamuƙi a rufe, don karatu ya fara daga wurin da ya dace."]],
          slides: [
            { title: "Girman da ake nufi da tolerance", bullets: ["Nominal: girman da ake nufi", "Tolerance: nisan da zai iya bambanta", "1.250 ± 0.005 = 1.245 zuwa 1.255"] },
            { title: "Kayan aunawa", bullets: ["Tef ko rula na ƙarfe: girma na kusan", "Caliper: waje, ciki, zurfi", "Micrometer: girman waje mai tsananin daidaito"] },
            { title: "Ku auna kamar ƙwararre", bullets: ["Tsaftace kaya da kayan aunawa; sifili tukuna", "Muƙamuƙi a miƙe, ba matsewa", "Karanta kai tsaye; rubuta nan take"] },
            { title: "Yanke shawara", bullets: ["A cikin iyakoki: kaya mai kyau", "A waje: ya fita daga tolerance, kai rahoto"] }
          ],
          sources: [MSSC_COURSES],
          tryIt: "Atisaye kawai, lambobin ƙirƙira. Wani kaya 2.000 ± 0.010 inch ne. Ku lissafa iyakokin, sannan ku yanke shawara mai kyau ko ya fita daga tolerance ga: 1.995, 2.012, 1.989, 2.010, 2.004. Bayan haka, ku auna abubuwa uku a gida da rula (littafi, waya, cokali) sau biyu kowanne ku rubuta karatun biyu.",
          youCanNow: "lissafa iyakokin tolerance, auna kaya a hankali da yanke shawara ko yana da kyau ko ya fita daga tolerance.",
          quickCheck: [
            { objective: "O2", q: "Wani kaya 0.500 ± 0.002 inch ne. Wane zango ne mai kyau?", options: ["0.400 zuwa 0.600", "0.498 zuwa 0.502", "0.500 zuwa 0.502 kawai", "0.490 zuwa 0.510"], answer: 1, why: "Ku rage ku ƙara 0.002 ga 0.500: zangon mai kyau shi ne 0.498 zuwa 0.502." },
            { objective: "O2", q: "Me za ku yi da caliper na dijital kafin aunawa?", options: ["Matse muƙamuƙin da ƙarfi", "Auna kayan yayin da yake da datti", "Rufe muƙamuƙin ku mayar da shi zuwa sifili", "Karanta shi a karkace"], answer: 2, why: "Mayar da shi zuwa sifili da muƙamuƙi a rufe yana sa kowane karatu ya fara daga wurin da ya dace." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Aikin, tsaro da aunawa",
        questions: [
          { objective: "O5", q: "Wane sashe ne ba dole ba don cikakken CPT 4.0?", options: ["Safety", "Green Production", "Maintenance Awareness", "Quality Practices & Measurement"], answer: 1, why: "MSSC ta ce Green Production ba ya cikin cikakkiyar takardar shaidar CPT 4.0." },
          { objective: "O1", q: "Inda rolla biyu ke juyawa zuwa juna kuma za su iya jan hannun rigarku ana kiransa:", options: ["Farantin bayanai (data plate)", "Tolerance", "Ma'aunin nauyi (counterweight)", "Ingoing nip point"], answer: 3, why: "Ingoing nip point shi ne inda sassa biyu masu motsi ke haɗuwa kuma za su iya jan ku ciki." },
          { objective: "O1", q: "Wani kaya ya maƙale a cikin inji. Me dole ya faru kafin kowa ya saka hannu ciki?", options: ["Lockout/tagout daga mutum mai izini", "Mayar da inji zuwa ƙaramin gudu", "Sa safar hannu ku saka hannu da sauri", "Roƙi abokin aiki ya lura da makunni"], answer: 0, why: "Cire abin da ya maƙale aikin gyara ne, don haka dole a fara kulle ƙarfin inji." },
          { objective: "O2", q: "Wani kaya 25.00 ± 0.10 mm ne. Kun auna 25.14 mm. Me ke gaskiya?", options: ["Yana da kyau", "Yana da kyau idan yana da kyan gani", "Ya fita daga tolerance", "Tolerance ba ya shafar kayan metric"], answer: 2, why: "Babban iyaka 25.10 mm ne, kuma 25.14 mm ya wuce shi." },
          { objective: "O2", q: "Wane kayan aiki ne mafi kyau don auna faɗin cikin wata rami mai tsayi (slot)?", options: ["Guduma", "Ma'aunin daidaito (level)", "Burushin fenti", "Caliper"], answer: 3, why: "Caliper yana da muƙamuƙin ciki da aka yi don auna girman ciki." }
        ]
      }
    },
    {
      name: "Babi na 2: Inganci, samarwa da samun aiki",
      lessons: [
        {
          title: "Duba inganci da gano tushen matsala",
          objectives: ["O3"],
          minutes: 6,
          goal: "Rubuta lahani da gano tushen matsalar da ake zato da 5 Whys.",
          text: [
            "Inganci yana nufin kowane kaya ya cika specification ɗinsa, wato sharuɗɗan da aka rubuta na girma, kamanni da aiki. Kayan da bai cika ba lahani ne (defect), ko kaya mara daidaito (nonconforming). Aikinku shi ne kama lahani da wuri, ware su daga kaya masu kyau da kai rahotonsu.",
            "Ku yi amfani da check sheet: tebur mai sauƙi inda kuke sa alamar ƙirga duk lokacin da kuka ga wani nau'in lahani, kamar karce, girma mara daidai ko ramin da ya ɓace. Bayan lokacin aiki, ƙirgen yana nuna matsalar da ta fi faruwa. Ku sa kaya marasa kyau a kwandon ƙi (reject bin) mai alama ko ku sa musu alama don kada wani ya tura su bisa kuskure.",
            "Don gyara matsala har abada, ku nemi tushenta (root cause), ba alamarta kawai ba. 5 Whys abu ne mai sauƙi: ku faɗi matsalar, ku tambayi \"Me ya sa?\", sannan ku tambayi \"Me ya sa?\" game da wannan amsa, kusan sau biyar, har ku isa ga dalilin da za ku iya gyarawa. Masana'antu da yawa sai su yi amfani da Plan-Do-Check-Act: shirya gyara, gwada shi, duba sakamako, kuma ku mai da shi ƙa'ida idan ya yi aiki."
          ],
          steps: ["Duba kaya da specification.", "Ƙirga kowane nau'in lahani a check sheet.", "Sa alama a kaya marasa kyau ko sa su a kwandon ƙi; kai rahotonsu.", "Tambayi \"Me ya sa?\" kusan sau biyar don isa ga tushen matsala.", "Ba da shawarar gyara; duba cewa lahani sun ragu."],
          words: [["Specification", "sharuɗɗan da aka rubuta da dole kaya ya cika."], ["Defect (lahani)", "kaya da bai cika specification ba; ana kuma kiransa nonconforming."], ["Check sheet", "tebur don ƙirga yawan faruwar kowane nau'in lahani."], ["Root cause (tushen matsala)", "ainihin dalilin da matsala ke faruwa; gyara shi yana hana matsalar dawowa."], ["5 Whys", "tambayar \"Me ya sa?\" akai-akai don tashi daga alamar matsala zuwa tushenta."], ["Plan-Do-Check-Act", "zagaye mai matakai huɗu don gwada gyara da mai da shi ƙa'ida."]],
          slides: [
            { title: "Inganci a layin samarwa", bullets: ["Kowane kaya ya cika specification", "Kama lahani da wuri", "Ware kaya marasa kyau daga masu kyau"] },
            { title: "Check sheets", bullets: ["Ƙirga kowane nau'in lahani", "Ga matsalar da ta fi faruwa", "Sa alama ko kwandon ƙi; kai rahoto"] },
            { title: "5 Whys", bullets: ["Faɗi matsalar", "Tambayi \"Me ya sa?\" kusan sau biyar", "Tsaya a dalilin da za ku iya gyarawa"] },
            { title: "Plan-Do-Check-Act", bullets: ["Shirya gyara, gwada shi", "Duba sakamako", "Mai da shi ƙa'ida idan ya yi aiki"] }
          ],
          sources: [MSSC_COURSES],
          tryIt: "Misalin atisaye: ramukan da aka huda a ƙarafan riƙo (brackets) suna wurin da bai dace ba a kusan kaya ɗaya cikin goma. Ku yi check sheet mai nau'ukan lahani uku ku cika shi da ƙirgen ƙirƙira. Sannan ku rubuta jerin 5 Whys (misali: abin riƙe kaya (fixture) yana motsi, saboda wani maƙunshi ya sake, saboda ...) ku ƙare da gyaran da za ku iya ba mai kula da ku shawara a kai.",
          youCanNow: "rubuta lahani a check sheet, ware kaya marasa kyau, da amfani da 5 Whys don gano tushen matsala.",
          quickCheck: [
            { objective: "O3", q: "Kun sami kaya biyar masu karce a kwandon kaya masu kyau. Me za ku fara yi?", options: ["Ware su ku sa musu alama, sannan ku kai rahoto", "Tura su; karce ƙanana ne", "Jefar da su ba tare da faɗin komai ba", "Goge su da kanku"], answer: 0, why: "Ana ware kaya marasa kyau daga masu kyau kuma a kai rahotonsu don a gano dalilin." },
            { objective: "O3", q: "Menene manufar 5 Whys?", options: ["Ɗora laifi a kan abokin aiki", "Ƙirga kayan", "Rage gudun layin samarwa", "Gano tushen matsala da za ku iya gyarawa"], answer: 3, why: "5 Whys yana tashi daga alamar matsala zuwa tushenta, don gyaran ya daɗe." }
          ]
        },
        {
          title: "Lean production, 5S da kula da inji na kullum",
          objectives: ["O4"],
          minutes: 6,
          goal: "Amfani da 5S da binciken mai sarrafa inji na kullum a wurin aiki.",
          text: [
            "Lean production yana nufin yin abin da kwastoma ke buƙata da ƙarancin ɓarna. Ɓarna ta haɗa da jira, yin abu fiye da kima, ƙarin tafiye-tafiye, ƙarin taɓa kaya, ajiyar kaya da yawa, lahani da matakan da ba sa ƙara amfani. Gano ɓarna da ba da shawarar ƙananan ingantawa wani ɓangare ne na aikin technician.",
            "5S yana sa wurin aiki ya zama lafiya kuma mai inganci. Sort (Ware): cire abin da ba ku buƙata. Set in order (Tsara): wuri mai alama don kowane kayan aiki. Shine (Tsaftace): tsaftace wurin da inji, wanda kuma ke nuna yoyo da lalacewa. Standardize (Daidaita): rubuta yadda wurin ya kamata ya kasance. Sustain (Dore): ci gaba da yin haka a kowane lokacin aiki.",
            "Sanin kula da injina yana farawa da kulawar mai sarrafa inji ta kullum. Kafin da yayin lokacin aikinku, ku duba yoyo, kusoshin da suka sake, belt da suka gaji, ƙarancin mai ko ruwan sanyaya (coolant), ƙararraki masu ban mamaki, zafi, girgiza da guards ko wayoyin wuta da suka lalace. Ku bi jerin binciken inji. Ku kai rahoton abin da kuka gani; mutanen da aka horar kuma aka ba izini ne kawai ke gyara injina, kuma gyara yana buƙatar lockout/tagout.",
            "Preventive maintenance (kula ta rigakafi) kulawa ce da aka tsara, kamar sa mai da canza matatu bisa jadawali, don injina su riƙa lalacewa ƙasa da da. Bayananku a jerin bincike suna taimaka wa ƙungiyar gyara ta kama matsaloli da wuri."
          ],
          steps: ["Sort: cire abin da ba ku buƙata.", "Set in order: wuri mai alama don kowane kayan aiki.", "Shine: tsaftace, kuma ku nemi yoyo da lalacewa yayin tsaftacewa.", "Standardize: rubuta ko liƙa yadda wurin ya kamata ya kasance.", "Sustain: yi haka a kowane lokacin aiki.", "Binciken kullum: yoyo, ƙara, zafi, girgiza, belt, ruwaye, guards; kai rahoton matsaloli."],
          words: [["Lean", "hanyar aiki da ke cire ɓarna don amfani ya kai ga kwastoma."], ["Ɓarna (waste)", "duk abin da ke ƙara lokaci ko kuɗi amma ba amfani, kamar jira ko ƙarin tafiye-tafiye."], ["5S", "Sort, Set in order, Shine, Standardize, Sustain: hanyar tsara wurin aiki."], ["Preventive maintenance", "kulawa da aka tsara bisa jadawali don injina su riƙa lalacewa ƙasa da da."], ["Girgiza (vibration)", "jijjiga da ka iya zama alamar sashe da ya sake ko ya gaji."]],
          slides: [
            { title: "Lean: rage ɓarna", bullets: ["Jira, ƙarin tafiye-tafiye, ƙarin taɓa kaya", "Yin abu fiye da kima, ajiya da yawa", "Lahani da matakan da ba su da amfani"] },
            { title: "5S", bullets: ["Sort da Set in order", "Shine: tsaftace ku duba", "Standardize da Sustain"] },
            { title: "Binciken inji na kullum", bullets: ["Yoyo, kusoshin da suka sake, belt da suka gaji", "Ƙara, zafi, girgiza", "Ruwaye, guards da wayoyin wuta"] },
            { title: "Kai rahoto, kada ku gyara", bullets: ["Rubuta shi a jerin bincike", "Masu izini kaɗai ke gyarawa", "Gyara yana buƙatar lockout/tagout"] }
          ],
          sources: [MSSC_COURSES, OSHA_147],
          tryIt: "Ku zaɓi wurin aiki ɗaya da kuke iya gani yanzu: teburin kicin, shiryayyen gareji ko tebur. Ku rubuta mataki ɗaya na kowane S cikin 5. Sannan ku rubuta jerin binciken kullum mai aƙalla abubuwa biyar don inji da kuka sani (mota, keke, injin yanke ciyawa ko injin wanki) da abin da za ku kai rahoto.",
          youCanNow: "gano ɓarna, amfani da 5S a wurin aiki da yin binciken mai sarrafa inji na kullum, kuna kai rahoton matsaloli maimakon gyara su da kanku.",
          quickCheck: [
            { objective: "O4", q: "Wane mataki na 5S ke nufin \"wuri mai alama don kowane kayan aiki\"?", options: ["Sort", "Shine", "Set in order", "Sustain"], answer: 2, why: "Set in order yana ba kowane kayan aiki wuri mai alama don a same shi a mayar da shi cikin sauƙi." },
            { objective: "O4", q: "Yayin binciken kullum kun ji sabuwar ƙarar niƙa. Me za ku yi?", options: ["Ƙara sautin waƙa", "Rubuta ta a jerin bincike ku kai rahoto", "Kwance inji", "Kyale shi har ya lalace"], answer: 1, why: "Masu sarrafa inji suna kai rahoton ƙara mai ban mamaki; mutanen da aka horar kuma aka ba izini ne ke gyarawa." }
          ]
        },
        {
          title: "Tsarinku: shirin CPT 4.0 da aikin samarwa na farko",
          objectives: ["O5"],
          minutes: 5,
          goal: "Rubuta tsari mai ranaku don shirya CPT 4.0 da neman ayyukan samarwa.",
          text: [
            "Ku fara da shafin hukuma. A msscusa.org, ku duba sassan na yanzu, yadda ake yin jarabawa, kuɗin da inda za ku yi jarabawa. Kwalejojin al'umma da cibiyoyin ayyukan yi da yawa (wanda ake kira American Job Centers) suna gudanar da horon CPT kuma ƙila su taimaka a biya. Ku tambaya ko shirin ya haɗa da atisayen hannu da kayan aiki da injina na gaske.",
            "Ku tsara sashe ɗaya a lokaci ɗaya. Safety sashe ne mai kyau na farko. Ga kowanne, ku sa makonnin karatu, hanyar atisaye (rubutu, katunan tunawa (flash cards), atisayen wannan kwas) da ranar jarabawa da kuke nufi wadda za ku tabbatar da wurin jarabawa.",
            "Ku nemi aiki yayin da kuke karatu. Ku nemi ayyukan production associate, mai sarrafa inji, mai haɗa kaya (assembler) da manufacturing technician, kuma ku nemi registered apprenticeship a apprenticeship.gov. Wasu kamfanoni suna ɗaukar mutanen da ke da tarihin laifi; shirye-shiryen ayyukan yi da na komawa cikin al'umma (re-entry) za su iya nuna muku su.",
            "A résumé ɗinku, ku faɗi gaskiya. Ku rubuta \"Completed Manufacturing Technician Basics (Koach Learn), 2026\" kuma ku jera sassan CPT ne kawai bayan kun ci su. A ganawar neman aiki, ku yi magana a kan tsaro da farko, auna a hankali, kama kaya marasa kyau da tsara wurin aikinku."
          ],
          steps: ["Karanta shafin CPT 4.0 a msscusa.org; rubuta sassa huɗu da ake buƙata.", "Nemi shirin horo ko wurin jarabawa ɗaya a yankinku da abin da yake bayarwa.", "Sa makonnin karatu da ranar da kuke nufi don kowane sashe; tabbatar da ranakun da wurin.", "Jera sunayen ayyuka uku da kamfanoni ko apprenticeship uku da za ku nema.", "Rubuta layin résumé na gaskiya da amsar daƙiƙa 30: \"Me ya sa masana'anta?\""],
          words: [["American Job Center", "ofishin ayyukan yi na gwamnati da ke taimaka wa mutane samun aiki da horo."], ["Production associate", "sunan aiki na farko da aka saba a cikin masana'anta."], ["Wurin jarabawa (testing site)", "makaranta ko cibiya da aka amince ta ba da jarabawar."]],
          slides: [
            { title: "Ku fara da MSSC", bullets: ["Duba sassa, jarabawa, kuɗi a msscusa.org", "Nemi shiri ko wurin jarabawa a yankinku", "Tambayi game da atisayen hannu"] },
            { title: "Sashe ɗaya a lokaci ɗaya", bullets: ["Safety sashe ne mai kyau na farko", "Makonnin karatu da hanyar atisaye", "Ranar da kuke nufi da kuka tabbatar"] },
            { title: "Ku nemi aiki yayin karatu", bullets: ["Production associate, mai sarrafa inji, assembler", "Registered apprenticeship", "Shirye-shiryen ayyukan yi da re-entry"] },
            { title: "Ku faɗi gaskiya", bullets: ["Jera kwas ɗin da kuka gama", "Jera sassan CPT ne kawai bayan kun ci", "Yi magana a kan tsaro da inganci da farko"] }
          ],
          sources: [MSSC_CPT, APPRENTICE],
          tryIt: "Ku rubuta tsarinku a shafi ɗaya: sassa huɗu tare da makon fara karatu da ranar jarabawa da kuke nufi ga kowanne, shiri ko wurin jarabawa ɗaya da za ku tuntuɓa, ayyuka ko apprenticeship uku da za ku nema, da layin résumé ɗinku na gaskiya. Ku karanta amsarku ta daƙiƙa 30 ta \"Me ya sa masana'anta?\" da babbar murya.",
          youCanNow: "rubuta tsari mai ranaku don shirya CPT 4.0 da aikin samarwa na farko, da bayyana horonku da gaskiya.",
          quickCheck: [
            { objective: "O5", q: "Kun ci sashen Safety kawai. Wane layin résumé ne na gaskiya?", options: ["\"Full CPT 4.0 certified\"", "\"Master technician\"", "\"OSHA certified machinist\"", "\"MSSC Safety certificate (CPT 4.0 module), 2026\""], answer: 3, why: "Yana faɗin ainihin abin da kuka samu kuma ba ya da'awar cikakken CPT 4.0." },
            { objective: "O5", q: "A ina za ku tabbatar da kuɗin CPT da wuraren jarabawa na yanzu?", options: ["Shafin hukuma na MSSC ko wurin jarabawa da aka amince", "Tallan kafar sada zumunta", "Zaton aboki", "Kowane shafin tallan ayyuka"], answer: 0, why: "Kuɗi da jarabawa suna canjawa, don haka ku duba MSSC ko wurin jarabawa kai tsaye." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Inganci, samarwa da samun aiki",
        questions: [
          { objective: "O3", q: "Me check sheet ke nuna muku bayan lokacin aiki?", options: ["Nau'in lahanin da ya fi faruwa", "Farashin inji", "Yanayin sararin samaniya", "Wanda ya zo a makare"], answer: 0, why: "Ƙirge a check sheet yana nuna yawan faruwar kowane nau'in lahani." },
          { objective: "O3", q: "Kaya sun yi tsawo da yawa. Me ya sa? Abin tsayarwa (stop) ya motsa. Me ya sa? Kusonsa ya sake. Me ya sa? Ba mai duba shi. Menene gyara mai kyau?", options: ["Yin kaya da sauri", "Ɗora laifi a kan masu aikin da suka gabata", "Ƙara kuson abin tsayarwa a binciken kullum", "Jefar da duk kaya"], answer: 2, why: "Gyaran yana kai hari ga tushen matsalar da 5 Whys ya isa gare shi: ba a taɓa duba kuson ba." },
          { objective: "O4", q: "Ma'aikata suna jiran kaya na minti 20 a kowane lokacin aiki. A kalmomin lean wannan shi ne:", options: ["Amfani (value)", "Ɓarna (waste)", "5S", "Tolerance"], answer: 1, why: "Jira yana ƙara lokaci amma ba amfani, don haka yana ɗaya daga cikin ɓarnar lean." },
          { objective: "O4", q: "Wane mataki na 5S kuma ke taimaka muku gano yoyo da lalacewa?", options: ["Sort", "Sustain", "Standardize", "Shine"], answer: 3, why: "Tsaftace inji a lokacin Shine yana nuna yoyo, tsagewa da gajiyar sassa." },
          { objective: "O5", q: "Wanne ne mataki na farko mai kyau don tsarin CPT 4.0?", options: ["Karanta shafin CPT 4.0 a msscusa.org ku nemi wurin jarabawa", "Sayi takardar shaida a kan layi", "Yi duk jarabawoyi biyar a rana ɗaya ba tare da karatu ba", "Jira har wani ya gaya muku"], answer: 0, why: "Farawa daga shafin hukuma yana ba ku sassan, jarabawa da wuraren na yanzu." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Tushen Aikin Technician na Masana'anta",
    questions: [
      { objective: "O5", q: "Wace ƙungiya ce ke ba da Certified Production Technician (CPT 4.0)?", options: ["OSHA", "Kamfaninku kawai", "Manufacturing Skill Standards Council (MSSC)", "Wannan kwas ɗin"], answer: 2, why: "MSSC ce ke ba da jarabawoyin CPT kuma take ba da takardun shaida." },
      { objective: "O5", q: "Wadanne sassa ne ke haɗa cikakken CPT 4.0?", options: ["Safety; Quality Practices & Measurement; Manufacturing Process & Production; Maintenance Awareness", "Walda, aikin famfo, tuƙi da girki", "Green Production kawai", "Forklift, crane, tsani da rufin gida"], answer: 0, why: "MSSC ta ce sassa huɗu na farko ne ke ba da cikakken CPT 4.0." },
      { objective: "O1", q: "Wanne ne haɗarin da dokar injina ta OSHA ta faɗa?", options: ["Ƙasa mai tsabta", "Jadawalin 5S da aka liƙa", "Fensir mai kaifi", "Sassa masu juyawa"], answer: 3, why: "Babbar dokar injina ta OSHA ta jera sassa masu juyawa tare da point of operation, nip points da tarkace masu tashi." },
      { objective: "O1", q: "Menene kariya mafi ƙarfi daga sassa masu motsi na inji?", options: ["Yin aiki da sauri", "Guard da ke hana jikinku shiga wurin haɗari", "Safar hannu masu sakkuwa", "Kururuwar gargaɗi"], answer: 1, why: "Guards suna nisantar da ku daga haɗari kuma ba za a taɓa cire su ko kauce musu ba." },
      { objective: "O1", q: "Kun ga makullin wani ma'aikaci a kan inji da kuke buƙata. Me za ku yi?", options: ["Yanke makullin", "Tambayi mai kula da ku; kada ku taɓa cire makullin wani", "Tayar da inji ko ta yaya", "Cire alamar (tag) kawai"], answer: 1, why: "Ma'aikacin da ya sa makulli ne kawai, bisa tsarin aiki, ke cire shi." },
      { objective: "O1", q: "Shekarunku 17. Wane aiki ne aka hana a ƙarƙashin dokokin tarayya na aikin yara?", options: ["Share ɗakin hutu", "Shirya takardu", "Jera akwatuna marasa nauyi da hannu", "Sarrafa injin huda ƙarfe"], answer: 3, why: "Ma'aikata 'yan ƙasa da shekara 18 ba za su sarrafa injina masu wuta na siffanta, hudawa ko yanka ƙarfe ba." },
      { objective: "O2", q: "Wani kaya 3.000 ± 0.005 inch ne. Kun auna 2.996. Yana da kyau?", options: ["Ee, yana cikin 2.995 zuwa 3.005", "A'a, dole ya zama 3.000 daidai", "A'a, ya yi girma da yawa", "Sai idan yana sheƙi"], answer: 0, why: "2.996 yana cikin iyakokin 2.995 zuwa 3.005." },
      { objective: "O2", q: "Menene tolerance?", options: ["Nauyin kaya", "Gudun inji", "Yawan yadda girma zai iya bambanta da wanda ake nufi kuma ya kasance mai kyau", "Farashin kaya"], answer: 2, why: "Tolerance yana saita zangon da aka yarda da shi kewaye da nominal size." },
      { objective: "O2", q: "Wace ɗabi'a ce ke ba da karatun caliper na gaskiya?", options: ["Matse muƙamuƙin da duk ƙarfinku", "Tsaftace kayan, mayar da kayan aunawa zuwa sifili da riƙe muƙamuƙin a miƙe", "Aunawa ta cikin safar hannu", "Zaton lambar ƙarshe"], answer: 1, why: "Wurare masu tsabta, kayan aunawa a sifili da muƙamuƙi a miƙe suna ba da karatu daidai." },
      { objective: "O2", q: "Wani kaya 10.00 ± 0.05 mm ne. Wane karatu ne ya fita daga tolerance?", options: ["9.97 mm", "10.04 mm", "10.00 mm", "10.08 mm"], answer: 3, why: "Babban iyaka 10.05 mm ne, don haka 10.08 mm ya yi girma da yawa." },
      { objective: "O3", q: "Kayan da bai cika specification ɗinsa ba ana kiransa:", options: ["Nonconforming (lahani)", "Nominal", "Lean", "Zeroed"], answer: 0, why: "Kayan da ya kasa cika specification lahani ne, ko kaya mara daidaito (nonconforming)." },
      { objective: "O3", q: "Me ya sa kuke sa alama ko kwandon ƙi ga kaya marasa kyau nan take?", options: ["Don kwandon ya yi nauyi", "Don a iya fentin kayan", "Don kada wani ya haɗa su da kaya masu kyau ko ya tura su", "Don ɓoye su daga mai kula"], answer: 2, why: "Ware kayan da aka ƙi yana hana kaya marasa kyau isa ga kwastoma." },
      { objective: "O3", q: "A Plan-Do-Check-Act, me ke faruwa a \"Check\"?", options: ["Kuna shirya gyaran", "Kuna dakatar da layin har abada", "Kuna sayen sabbin injina", "Kuna duba ko gyaran ya yi aiki"], answer: 3, why: "Check yana nufin duba sakamako don ganin ko gyaran ya yi aiki." },
      { objective: "O4", q: "Wanne ne ɓarnar lean?", options: ["Kai kaya da komowa ba tare da buƙata ba", "Kaya mai kyau da aka tura wa kwastoma", "Wurin aiki mai tsabta", "Binciken tsaro da aka gama"], answer: 0, why: "Ƙarin tafiye-tafiye da taɓa kaya suna ƙara lokaci da kuɗi amma ba amfani." },
      { objective: "O4", q: "Me \"Sustain\" ke nufi a 5S?", options: ["Jefar da abubuwan da ba a amfani da su", "Ci gaba da yin 5S a kowane lokacin aiki", "Fentin ƙasa", "Sayen sabbin kayan aiki"], answer: 1, why: "Sustain yana nufin mai da 5S ɗabi'a don wurin ya ci gaba da kasancewa a tsare." },
      { objective: "O4", q: "Yayin binciken kullum kun ga yoyon mai a ƙarƙashin inji. Menene matakin da ya dace?", options: ["Goge shi ba tare da faɗin komai ba", "Gyara bututun da kanku yayin da yake aiki", "Kai rahoto ku bi jerin bincike; bar masu izini su gyara", "Rufe shi da akwati"], answer: 2, why: "Masu sarrafa inji suna kai rahoton matsaloli; masu izini ne ke gyarawa a ƙarƙashin lockout/tagout." },
      { objective: "O4", q: "Menene preventive maintenance?", options: ["Gyara inji sai bayan ya lalace", "Kulawa da aka tsara bisa jadawali don injina su riƙa lalacewa ƙasa da da", "Tsaftace ɗakin hutu", "Sayen ƙarin kayan sawa na aiki"], answer: 1, why: "Preventive maintenance kulawa ce bisa jadawali da ke hana lalacewa." },
      { objective: "O5", q: "Kuna son aiki mai albashi da ya haɗa da horo da mai ba da shawara. A ina za ku nema?", options: ["Shafin caca", "Manhajar takardun rangwame", "Apprenticeship Finder na Apprenticeship.gov", "Dandalin wasannin bidiyo"], answer: 2, why: "Apprenticeship Finder na Department of Labor yana jera guraben registered apprenticeship." },
      { objective: "O1", q: "A lockout/tagout, me ya sa kuke gwada tayar da inji bayan kun kulle shi?", options: ["Don ya ɗumama", "Don gwada launin makullin", "Don gama aikin da sauri", "Don tabbatar ƙarfin ya kashe da gaske kafin ku yi aiki"], answer: 3, why: "Tabbatarwa tana nuna an ware ƙarfin; sannan ku mayar da makunnai zuwa kashe." },
      { objective: "O3", q: "Fenti yana ɓarewa a kaya da yawa. Me ya sa? Saman yana da mai. Me ya sa? An tsallake matakin wanki. Wace amsa ce ta fi kusa da tushen matsala?", options: ["Kayan ba su da kyau", "An tsallake matakin wanki", "Fenti yana ɓarewa", "Kwastoma yana da zaɓe"], answer: 1, why: "Matakin wanki da aka tsallake dalili ne da za ku iya gyarawa; ɓarewar fenti alama ce kawai." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 2, 4, 6, 7, 10, 12, 13, 15] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake dubawa.",
    criteria: [
      { name: "Jerin haɗari da kariya", objective: "O1", notYet: "Ƙasa da haɗari uku, ko haɗari ba tare da kariya ba ko da kariyar da ba ta dace ba.", meets: "Aƙalla haɗari uku a kan inji ɗaya, kowanne da guard, PPE ko hanyar aiki da ta dace, da lokacin da ake buƙatar lockout/tagout.", exceeds: "Ya jera matakan lockout/tagout bisa tsari kuma ya faɗi hanyoyin ƙarfin inji." },
      { name: "Rajistar aunawa", objective: "O2", notYet: "An lissafa iyakoki ba daidai ba, ko shawarwari biyu ko fiye ba daidai ba.", meets: "Iyakoki daidai ne kuma aƙalla kaya 4 cikin 5 na atisaye an yanke musu hukunci daidai.", exceeds: "Duka 5 daidai ne, tare da ɗabi'un aunawa da aka yi amfani da su a rubuce a gefen rajistar." },
      { name: "Rubutun lahani da 5 Whys", objective: "O3", notYet: "Ba a ware kaya marasa kyau ba, ko jerin ya tsaya a alamar matsala.", meets: "Check sheet, mataki na sa alama a kaya marasa kyau da 5 Whys da ya ƙare a dalilin da za a iya gyarawa.", exceeds: "Ya ƙara bayanin Plan-Do-Check-Act kan yadda za a duba cewa gyaran ya yi aiki." },
      { name: "Tsarin 5S da binciken kullum", objective: "O4", notYet: "Ya rasa ɗaya daga cikin S biyar, ko ƙasa da abubuwa biyar na bincike.", meets: "Mataki ɗaya na kowane S da aƙalla abubuwa biyar na binciken kullum tare da abin da za a kai rahoto.", exceeds: "Ya faɗi aƙalla ɓarnar lean biyu a wurin da ƙaramin ingantawa ga kowacce." },
      { name: "Tsarin CPT 4.0 da aiki", objective: "O5", notYet: "Sassa ba daidai ba, babu ranaku, ko layin résumé da ke da'awar takardar shaidar da ba a samu ba.", meets: "Ya faɗi sassa huɗu da ake buƙata tare da ranakun da za a tabbatar, shiri ko wurin jarabawa ɗaya, ayyuka uku da za a nema da layin résumé na gaskiya.", exceeds: "Ya haɗa da amsar daƙiƙa 30 da aka yi atisaye da wata hanya ta biyu kamar apprenticeship." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin da fakitin shiri da ya cika ma'aunin rubric",
      "Masu koyo da suka shiga horon CPT 4.0 ko suka yi jarabawar sashen CPT na farko cikin kwana 90 (binciken bibiya)",
      "Masu koyo da suka ci sashe ɗaya ko fiye na CPT 4.0 (rahoton kansu tare da takardar shaidar MSSC)",
      "Masu koyo da aka ɗauka a ayyukan samarwa ko registered apprenticeship (rahotannin abokan aiki da na bibiya)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai intanet don msscusa.org, osha.gov da apprenticeship.gov",
      "Rula ko tef na aunawa, takarda da alƙalami",
      "Zaɓi: caliper na dijital da wasu ƙananan kaya (kusoshi, washa) don aunawa tare da malami",
      "Kusan minti 60 gaba ɗaya"
    ],
    facilitatorNotes: [
      "Ku faɗa da wuri kuma akai-akai: wannan kwas yana shirya masu koyo; MSSC ce ke ba da takardun shaidar CPT kuma ana koyar da ƙwarewar injina ido-da-ido.",
      "Kada ku sa masu koyo su sarrafa injina ko su yi atisayen lockout/tagout a kan inji mai wuta a matsayin wani ɓangare na wannan kwas. Ku yi amfani da hotuna, bidiyo da kayan nuni da ba a haɗa su da wuta ba.",
      "Ku duba kuɗin MSSC na yanzu, hanyoyin jarabawa da wuraren jarabawa na yankinku kafin zaman, kuma ku faɗi duk wani tallafin kuɗi da shirin ayyukan yi naku ke bayarwa.",
      "Ku bi lissafin tolerance a hankali a allo; masu koyo da yawa suna buƙatar misalai biyu ko uku da aka warware.",
      "Ku lura da masu koyo 'yan ƙasa da shekara 18: za su iya ɗaukar kwas ɗin, amma injinan masana'anta da yawa an hana su a wurin aiki.",
      "Ku ba da maki ga fakitin shiri da ma'aunin rubric kuma ku duba layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
