"use strict";

// Koach Learn course, Hausa (ha) translation of shared/cdl-prep.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.
// This course stays about the US CDL: US agency and rule names are kept, with explanations in Hausa.

const CFR_CLASSES = { name: "49 CFR 383.91: Commercial motor vehicle groups (Cornell LII copy of the federal rule)", url: "https://www.law.cornell.edu/cfr/text/49/383.91" };
const CFR_ENDORSE = { name: "49 CFR 383.153: Endorsement codes on the CDL and CLP", url: "https://www.law.cornell.edu/cfr/text/49/383.153" };
const CFR_CLP = { name: "49 CFR 383.25: Commercial learner's permit (CLP)", url: "https://www.law.cornell.edu/cfr/text/49/383.25" };
const CFR_ELDT = { name: "49 CFR 380.603: Who must complete entry-level driver training", url: "https://www.law.cornell.edu/cfr/text/49/380.603" };
const TPR = { name: "FMCSA Training Provider Registry (ELDT)", url: "https://tpr.fmcsa.dot.gov/" };
const FMCSA_CDL = { name: "FMCSA: Commercial Driver's License (the official federal CDL pages)", url: "https://www.fmcsa.dot.gov/registration/commercial-drivers-license" };
const CFR_AGE = { name: "49 CFR 391.11: Driver qualifications (age, English, medical)", url: "https://www.law.cornell.edu/cfr/text/49/391.11" };
const CFR_MED = { name: "49 CFR 391.45: When drivers must be medically examined", url: "https://www.law.cornell.edu/cfr/text/49/391.45" };
const CFR_SKILLS = { name: "49 CFR 383.113: What the CDL skills test covers", url: "https://www.law.cornell.edu/cfr/text/49/383.113" };
const CFR_INSPECT = { name: "49 CFR 396.13: Driver inspection before driving", url: "https://www.law.cornell.edu/cfr/text/49/396.13" };
const FMCSA_HOS = { name: "FMCSA: Hours of service rules", url: "https://www.fmcsa.dot.gov/regulations/hours-of-service" };
const CFR_MIL = { name: "49 CFR 383.77: Skills test waiver for military drivers", url: "https://www.law.cornell.edu/cfr/text/49/383.77" };
const BLS_TRUCK = { name: "U.S. Bureau of Labor Statistics: Heavy and tractor-trailer truck drivers", url: "https://www.bls.gov/ooh/transportation-and-material-moving/heavy-and-tractor-trailer-truck-drivers.htm" };

module.exports = {
  id: "cdl-prep-ha",
  lang: "ha",
  translationOf: "cdl-prep",
  category: "Workforce Development",
  name: "Shirye-shiryen Lasisin Tuƙin Motocin Kasuwanci (CDL)",
  skills: "Zaɓar ajin CDL da ƙarin izini da suka dace, Tsara matakai daga izinin koyo zuwa lasisi, Karatun littafin CDL na jiha, Yin binciken mota kafin tafiya, Zaɓar hanyoyin tuƙi lafiya",
  outcome: "zaɓar ajin CDL da ƙarin izini (endorsements) da aikin da kuke so yake buƙata, jera kowane mataki daga izinin koyo zuwa lasisi, yin karatu don jarabawar rubutu ta jiha da littafin hukuma, bayyana binciken mota kafin tafiya da baki, da mayar da duka wannan zuwa shirin karatu da jarabawar CDL mai ranaku.",
  about: [
    "Wannan kwas ɗin na duk wanda yake son aikin tuƙin babbar mota (truck) ko bas ne: masu neman aiki, tsofaffin sojoji, matasa, masu dawowa gida daga gidan yari, da manyan da ke canja sana'a. Ba ku buƙatar wani ƙwarewar tuƙi fiye da lasisin tuƙi na yau da kullum.",
    "Za ku koyi wane lasisin tuƙin motocin kasuwanci (CDL) kuke buƙata, matakan samun sa, yadda ake karatu don jarabawar rubutu, yadda ake yin binciken mota kafin tafiya da ke fara jarabawar tuƙi, da halayen tuƙi lafiya da masu jarabawa suke nema.",
    "Wannan kwas ɗin yana shirya ku ne. Ba ya ba ku lasisi ko izini. Dokokin tarayya daga FMCSA suke (Federal Motor Carrier Safety Administration, hukumar Amurka mai kula da manyan motoci da bas), ofishin lasisin tuƙi na jiharku ne ke yin jarabawar, kuma yawancin sababbin direbobi dole su kammala horon farko na direbobi (entry-level driver training) a wurin da aka yi wa rajista. Kowane darasi yana faɗa muku inda za ku tabbatar da dokokin hukuma.",
    "Kowane darasi yana ɗaukar kusan minti biyar, tare da aikin \"Gwada yanzu\". Akwai ɗan gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin. A ƙarshe za ku yi naku shirin karatu da jarabawar CDL da ranaku na gaske."
  ],
  finalTask: "Ku yi naku shirin karatu da jarabawar CDL a shafi ɗaya: aikin da kuke so, ajin CDL da duk ƙarin izinin da yake buƙata, matakai daga gwajin lafiya zuwa jarabawar ƙwarewa a jere tare da ranar da kuke nufi ga kowanne, wurare uku na horo masu rajista da kuka samu a Training Provider Registry, sassan littafin jiha da za ku karanta kowane mako, da rubutaccen jerin binciken mota kafin tafiya na irin motar da za ku yi jarabawa da ita.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya da ke neman aikin farko na tuƙin babbar mota ko bas: masu neman aiki, tsofaffin sojoji da sojojin da ke barin aiki, matasa, masu dawowa gida daga gidan yari, da masu canja sana'a. Da yawa suna da lasisin tuƙi na yau da kullum amma ba su da ƙwarewar tuƙin motocin kasuwanci.",
    startingPoint: "Suna iya tuƙin ƙaramar mota da karanta littafin bayani mai sauƙi. Yawancinsu ba su san ajujuwan CDL ba, ko matakan izinin koyo, ko dokar horo, ko mene ne binciken mota kafin tafiya. Wasu abokai ko talla sun faɗa musu bayanai marasa gaskiya.",
    gap: "Ayyukan tuƙi suna biyan albashi a kai a kai kuma akwai guraben aiki da yawa, amma mutane suna ɓata lokaci da kuɗi idan suka zaɓi ajin da bai dace ba, suka shiga makarantar horo da ba ta da rajista, ko suka je jarabawa ba tare da shiri ba. Masu koyo suna buƙatar hoto mai gaskiya na hanyar da shirin da za su iya bi, kafin su biya kuɗin horo.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; ana bayanin kowace kalmar fasaha",
      "Na'urori: waya ko kwamfutar ɗakin karatu don karanta littafin CDL na jiha da jerin hukuma",
      "Dokoki sun bambanta daga jiha zuwa jiha: kwas ɗin yana nuna littafin jiha da ofishinta don kuɗi, fom da shirya ranar jarabawa",
      "Babu tuƙi na gaske a wannan kwas ɗin; ƙwarewar tuƙi a hannu daga wurin horo mai rajista take",
      "Wasu masu koyo suna da tarihin laifi ko matsalolin lafiya: suna tabbatar da cancantarsu da jiha da likitan gwaji, ba da wannan kwas ɗin ba"
    ],
    prerequisites: "Lasisin tuƙi na yau da kullum mai aiki, ko shirin samun sa da farko. Karatun Turanci na asali, domin dokokin tarayya suna buƙatar direbobi su iya karatu da magana da Turanci yadda ya isa don aikin."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku bayanin wani aikin tuƙi", action: "gane ajin CDL (A, B ko C) da duk ƙarin izinin da aikin yake buƙata", standard: "kuna samun aƙalla 4 cikin bayanan ayyuka 5 daidai" },
    { id: "O2", condition: "Ta amfani da majiyoyin hukuma na FMCSA da na jiha", action: "jera matakai daga gwajin lafiya zuwa jarabawar ƙwarewar CDL a jere daidai", standard: "ba tare da wani mataki ya ɓace ba, kuma da lokacin jira da dokar horo a ciki" },
    { id: "O3", condition: "Ta amfani da littafin CDL na jiharku na kyauta", action: "tsara yadda za ku yi karatu don jarabawar rubutu da kuke buƙata, da ci maki a rukunin tambayoyin gwaji", standard: "kuna samun aƙalla 8 cikin 10 a tambayoyin gwaji kafin ku shirya ranar jarabawa" },
    { id: "O4", condition: "Kuna tsaye kusa da babbar mota ko kuna amfani da hotonta", action: "faɗin sunan kowane sashe da kuke dubawa a binciken mota kafin tafiya, da abin da kuke dubawa a kansa", standard: "kuna rufe dukkan manyan wurare a jere ba tare da tsallake wani wuri ba" },
    { id: "O5", condition: "Idan aka ba ku wani yanayin tuƙi", action: "zaɓar mataki mai lafiya game da tazara, gudu, tuƙin baya da lafiyar direba", standard: "kuna samun aƙalla 4 cikin yanayi 5 daidai" }
  ],
  chapters: [
    {
      name: "Babi na 1: Hanyar samun CDL",
      lessons: [
        {
          title: "Ajujuwan CDL da ƙarin izini: wanne kuke buƙata?",
          objectives: ["O1"],
          minutes: 5,
          goal: "Haɗa aikin tuƙi da ajin CDL da ƙarin izinin da yake buƙata.",
          text: [
            "Lasisin tuƙin motocin kasuwanci (CDL) yana ba ku damar tuƙa manyan motoci ko motoci na musamman don aiki. Akwai ajujuwa uku, bisa irin motar.",
            "Aji A na motoci masu haɗe ne, kamar tarakta mai jan tirela, idan nauyin haɗin ya kai fam 26,001 ko fiye, kuma tirelar da ake ja ta fi fam 10,000. Aji B na babbar mota ɗaya ce mai nauyin fam 26,001 ko fiye, kamar motar zuba ƙasa (dump truck), motar akwati (box truck) ko bas na birni; tana iya jan ƙaramar tirela mai nauyin fam 10,000 ko ƙasa da haka. Aji C na ƙananan motoci ne masu ɗaukar mutane 16 ko fiye (har da direban), ko masu ɗaukar kayayyaki masu haɗari da ke buƙatar alamun gargaɗi (placards).",
            "Ƙarin izini (endorsements) ƙarin haruffa ne a lasisinku don aiki na musamman. T: tirela biyu ko uku. P: fasinjoji. N: motocin tanki. H: kayayyaki masu haɗari. X: tanki tare da kayayyaki masu haɗari. S: bas na makaranta. Kowanne yana buƙatar nasa jarabawar, kuma izinin H yana kuma buƙatar binciken tarihin tsaro.",
            "Ku fara daga aikin da kuke so. Ku karanta tallace-tallacen ayyuka na gaske kusa da ku, ku nemi ajin da ƙarin izinin da suke nema."
          ],
          steps: ["Ku zaɓi aikin da kuke so, kamar tafiya mai nisa, isar da kaya a gari, bas ko motar zuba ƙasa.", "Ku tambaya: tana jan babbar tirela? Yawanci wannan Aji A ne.", "Babbar mota ɗaya ce ko bas? Yawanci wannan Aji B ne.", "Tana ɗaukar fasinjoji, ruwa a tanki, tirela biyu ko kayayyaki masu haɗari? Ku ƙara ƙarin izinin."],
          words: [["CDL", "commercial driver's license: lasisin da ake buƙata don tuƙa manyan motoci ko motoci na musamman don aiki."], ["Mota mai haɗe (combination vehicle)", "babbar mota da ke jan tirela, kamar tarakta da tirela."], ["Ma'aunin nauyi (weight rating)", "mafi yawan nauyin da aka gina mota ta ɗauka idan ta cika da kaya, wanda kamfanin da ya ƙera ta ya ƙayyade (ana yawan kiran sa GVWR)."], ["Ƙarin izini (endorsement)", "ƙarin izini a CDL ɗinku don aiki na musamman, kamar ɗaukar fasinjoji ko tanki."], ["Kayayyaki masu haɗari (hazmat)", "kayan da za su iya cutar da mutane ko dukiya, kamar mai ko sinadarai, da ke buƙatar alamun gargaɗi da ake kira placards."]],
          slides: [
            { title: "Ajujuwan CDL guda uku", bullets: ["Aji A: babbar mota mai jan tirela mai nauyi (tarakta da tirela)", "Aji B: babbar mota ɗaya ko bas mai nauyi (motar zuba ƙasa, bas na birni)", "Aji C: ƙaramar mota mai mutane 16+ ko kayan haɗari masu placard"] },
            { title: "Ƙarin izini: ƙarin haruffa", bullets: ["T tirela biyu/uku, P fasinjoji, N tanki", "H kayan haɗari, X tanki da kayan haɗari, S bas na makaranta", "Kowanne yana buƙatar nasa jarabawar"] },
            { title: "Ku fara daga aikin", bullets: ["Ku karanta tallace-tallacen ayyuka na gaske guda uku kusa da ku", "Ku rubuta ajin da ƙarin izinin da suke nema", "Wannan shi ne lasisin da kuke nufi"] }
          ],
          sources: [CFR_CLASSES, CFR_ENDORSE, FMCSA_CDL],
          tryIt: "Ku nemo tallace-tallacen ayyukan tuƙi na gaske guda uku kusa da ku (a shafin neman aiki ko a shafin kamfanin da kansa). Ga kowanne, ku rubuta aikin, ajin CDL da yake nema da duk ƙarin izini. Ku zagaye aikin da kuka fi so.",
          youCanNow: "haɗa aikin tuƙi da Aji A, B ko C, da faɗin ƙarin izinin da yake buƙata.",
          quickCheck: [
            { objective: "O1", q: "Wani aiki tuƙin tarakta ne mai jan tirela mai tsawon ƙafa 53. Wane aji ne yawanci?", options: ["Aji C", "Aji B", "Aji A", "Ba a buƙatar CDL"], answer: 2, why: "Tarakta mai jan tirela mai nauyi mota ce mai haɗe, wato Aji A." },
            { objective: "O1", q: "Wane ƙarin izini za ku ƙara don tuƙa bas na makaranta?", options: ["S", "T", "N", "X"], answer: 0, why: "S shi ne izinin bas na makaranta; ana kuma buƙatar izinin fasinjoji P don bas." }
          ]
        },
        {
          title: "Matakai daga izinin koyo zuwa lasisi",
          objectives: ["O2"],
          minutes: 6,
          goal: "Jera matakan samun CDL a jere, da wanda ke kula da kowanne.",
          text: [
            "Yawancin sababbin direbobi suna bin matakai iri ɗaya. Dokokin tarayya daga FMCSA suke; ofishin lasisin tuƙi na jiharku ne ke yin jarabawar kuma yake ƙayyade kuɗi da fom.",
            "Na farko, gwajin lafiya (ana yawan kiran sa DOT physical) daga likitan gwaji mai takardar shaida. Yawancin direbobi dole su sake cin sa aƙalla duk bayan watanni 24. Na biyu, ku ci jarabawar rubutu ta jiha don samun izinin koyon tuƙin motocin kasuwanci (CLP). Dokokin tarayya sun ce mai CLP dole ya kai aƙalla shekara 18, kuma dole ya jira aƙalla kwanaki 14 kafin jarabawar ƙwarewa. Yayin da kuke atisaye a titunan jama'a, dole mai CDL na ajin da ya dace ya zauna kusa da ku.",
            "Tun daga 7 ga Fabrairu, 2022, yawancin mutanen da ke samun CDL na farko na Aji A ko B, ko izinin P, S ko H na farko, dole su kammala horon farko na direbobi (ELDT) a wurin da ke cikin Training Provider Registry na FMCSA kafin jarabawa. Sannan ku yi jarabawar ƙwarewa ta jiha: binciken mota kafin tafiya, sarrafa mota na asali, da tuƙi a titi.",
            "Shekaru: don tuƙi daga wata jiha zuwa wata dole ku kai aƙalla shekara 21. Wasu jihohi suna bar direbobi masu shekara 18 zuwa 20 su yi tuƙi a cikin jihar kaɗai. Ku duba dokokin jiharku."
          ],
          steps: ["Gwajin lafiya da likitan gwaji mai takardar shaida.", "Ku karanta littafin CDL na jiha, ku ci jarabawar rubutu.", "Ku sami izinin koyon tuƙin motocin kasuwanci (CLP).", "Ku kammala horon farko na direbobi a wurin da ke da rajista, idan ya shafe ku.", "Ku yi atisaye tare da mai CDL da ya cancanta kusa da ku; ku jira aƙalla kwanaki 14.", "Ku yi jarabawar ƙwarewa: binciken mota kafin tafiya, sarrafa mota na asali, tuƙi a titi."],
          words: [["FMCSA", "Federal Motor Carrier Safety Administration, hukumar Amurka da ke kafa dokoki ga manyan motoci da bas."], ["CLP", "commercial learner's permit: izinin da ke bar ku yi atisayen tuƙin motar kasuwanci tare da mai CDL da ya cancanta kusa da ku."], ["ELDT", "entry-level driver training: horon tarayya da yawancin sababbin direbobin CDL dole su kammala kafin jarabawa."], ["Training Provider Registry", "jerin hukuma na FMCSA na makarantu da masu ɗaukar aiki da aka yarda su ba da ELDT."], ["Likitan gwaji (medical examiner)", "ma'aikacin lafiya mai takardar shaida don yin gwajin lafiyar DOT ga direbobin motocin kasuwanci."]],
          slides: [
            { title: "Wane ne yake yin me", bullets: ["FMCSA: dokokin tarayya", "Jiharku: jarabawa, kuɗi da fom", "Wurin horo mai rajista: horon da ake buƙata"] },
            { title: "Matakai a jere", bullets: ["Gwajin lafiya, sannan jarabawar rubutu, sannan CLP", "Horon farko na direbobi idan ya shafe ku", "Ku jira aƙalla kwanaki 14, sannan jarabawar ƙwarewa"] },
            { title: "Dokokin da za ku tuna", bullets: ["CLP: aƙalla shekara 18, mai CDL kusa da ku", "Daga jiha zuwa jiha: aƙalla shekara 21", "Wurin horo dole ya kasance a jerin FMCSA"] }
          ],
          sources: [CFR_CLP, CFR_ELDT, TPR, CFR_AGE, CFR_MED, CFR_SKILLS],
          tryIt: "Ku nemo shafin CDL na jiharku (ku nemi sunan jiharku tare da \"CDL\" ku buɗe shafin .gov). Ku rubuta matakai shida a jere, kuma kusa da kowanne, abin da jiharku ta faɗa game da shi: fom, inda za ku je da kuɗin da ta lissafa.",
          youCanNow: "jera matakai daga gwajin lafiya zuwa jarabawar ƙwarewa a jere, da faɗin wanda ke kula da kowanne.",
          quickCheck: [
            { objective: "O2", q: "Kun sami CLP ɗinku yanzu. Bayan yaushe za ku iya yin jarabawar ƙwarewa bisa dokokin tarayya?", options: ["A ranar", "Washegari", "Bayan watanni 6", "Bayan aƙalla kwanaki 14"], answer: 3, why: "Dokokin tarayya sun ce mai CLP dole ya jira aƙalla kwanaki 14 kafin jarabawar ƙwarewa." },
            { objective: "O2", q: "A ina za ku nemo makarantar da za ta iya ba da horon farko na direbobi da ake buƙata?", options: ["Kowace talla a kafofin sada zumunta", "Training Provider Registry na FMCSA", "Aboki da ke tuƙin babbar mota", "Shagon sayar da motoci"], answer: 1, why: "Wuraren da ke cikin Training Provider Registry na FMCSA kaɗai ne za su iya ba da horon da ake buƙata." }
          ]
        },
        {
          title: "Karatu don jarabawar rubutu",
          objectives: ["O3"],
          minutes: 5,
          goal: "Tsara yadda za ku yi karatu da littafin CDL na jiharku, da ci maki a rukunin tambayoyin gwaji.",
          text: [
            "Kowace jiha tana da littafin CDL kyauta a shafinta na lasisin tuƙi. Jarabawar rubutu daga cikinsa ake ɗauko ta, don haka shi ne littafin karatu mafi kyau da za ku iya samu.",
            "Yawancin sababbin direbobi suna yin jarabawar General Knowledge (ilimi na gaba ɗaya). Da yawa kuma suna yin Air Brakes (birki na iska, domin yawancin manyan motoci suna amfani da shi) da Combination Vehicles (motoci masu haɗe, don Aji A). Kowane ƙarin izini yana da nasa jarabawar. Littafin jiharku yana faɗin waɗanne sassa ne na wace jarabawa.",
            "Ku karanta sashe ɗaya a lokaci ɗaya. Ku karanta shi, ku rufe littafin, ku rubuta abubuwa uku da kuka koya. Sannan ku yi amfani da tambayoyin gwaji a cikin littafin ko a shafin jiharku. Ku yi ƙoƙarin samun aƙalla 8 cikin 10 daidai kafin ku shirya ranar jarabawa ta gaske.",
            "Ku yi hankali da manhajoji da shafukan intanet na kuɗi da ke alƙawarin \"ainihin tambayoyin jarabawa\". Atisaye kyauta daga jiharku ya isa ga yawancin mutane."
          ],
          steps: ["Ku sauke littafin CDL na jiharku daga shafin .gov na hukuma.", "Ku yi alama a sassan da kuke buƙata: General Knowledge tare da na ajinku da ƙarin izininku.", "Ku tsara sashe ɗaya a kowane zaman karatu, minti 20 zuwa 30.", "Bayan kowane sashe, ku rubuta abubuwa uku da kuka koya ba tare da duba ba.", "Ku yi tambayoyin gwaji har sai kun sami aƙalla 8 cikin 10 daidai."],
          words: [["Jarabawar rubutu (knowledge test)", "jarabawar rubutu (sau da yawa a kwamfuta) da kuke ci don samun CLP ɗinku."], ["Birki na iska (air brakes)", "birki da iska mai matsi ke sarrafawa, da ake amfani da shi a yawancin manyan motoci da bas."], ["Littafin CDL (CDL manual)", "littafin karatu na hukuma na jiharku don jarabawar CDL."]],
          slides: [
            { title: "Littafin karatunku kyauta ne", bullets: ["Kowace jiha tana da littafin CDL a shafinta na .gov", "Jarabawar rubutu daga cikinsa take"] },
            { title: "Waɗanne jarabawa?", bullets: ["General Knowledge ga kowa", "Air Brakes da Combination Vehicles ga yawancin Aji A", "Jarabawa ɗaya ga kowane ƙarin izini"] },
            { title: "Yadda ake karatu", bullets: ["Sashe ɗaya a kowane zama", "Ku rufe littafin ku rubuta abubuwa uku da kuka koya", "Ku yi atisaye har ku sami 8 cikin 10"] }
          ],
          sources: [FMCSA_CDL],
          tryIt: "Ku sauke littafin CDL na jiharku. Ku karanta farkon sashen General Knowledge game da binciken mota. Ku rufe shi ku rubuta abubuwa uku da kuka tuna. Sannan ku rubuta naku tambayoyin gwaji biyar da amsoshinsu, ku musanya da abokin karatu ko ku duba su da littafin.",
          youCanNow: "nemo littafin CDL na jiharku, zaɓar sassan da kuke buƙata, da karanta su a gajerun zamuna har ku sami 8 cikin 10.",
          quickCheck: [
            { objective: "O3", q: "Mene ne littafin karatu kyauta mafi kyau don jarabawar rubutu ta CDL?", options: ["Manhajar kuɗi mai \"ainihin amsoshin jarabawa\"", "Bidiyo daga baƙo a intanet", "Littafin CDL na hukuma na jiharku", "Littafin direbobin ƙananan motoci"], answer: 2, why: "Jarabawar rubutu daga littafin CDL na hukuma na jiharku take." },
            { objective: "O3", q: "Kuna son Aji A don tarakta da tirela masu birki na iska. Waɗanne jarabawa kuke yawan buƙata?", options: ["School Bus kaɗai", "Passenger kaɗai", "Hazardous Materials kaɗai", "General Knowledge, Air Brakes da Combination Vehicles"], answer: 3, why: "Yawancin direbobin tarakta da tirela na Aji A suna yin General Knowledge, Air Brakes da Combination Vehicles." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Hanyar samun CDL",
        questions: [
          { objective: "O1", q: "Wani aiki tuƙin motar zuba ƙasa ɗaya ce mai nauyin fam 33,000. Wane aji ne yawanci?", options: ["Aji B", "Aji A", "Aji C", "Lasisin ƙaramar mota na yau da kullum"], answer: 0, why: "Babbar mota ɗaya mai nauyin fam 26,001 ko fiye Aji B ce." },
          { objective: "O1", q: "Wane ƙarin izini ne ke bar ku jan tirela biyu ko uku?", options: ["P", "S", "T", "N"], answer: 2, why: "T shi ne izinin tirela biyu da uku." },
          { objective: "O2", q: "Wane mataki ne yawanci ke zuwa farko a hanyar samun CDL?", options: ["Jarabawar ƙwarewar tuƙi a titi", "Gwajin lafiya da jarabawar rubutu don CLP", "Sayen babbar mota", "Samun izinin H"], answer: 1, why: "Kuna cin gwajin lafiya da jarabawar rubutu don samun CLP kafin ku yi horo da jarabawa a titi." },
          { objective: "O2", q: "Yayin da kuke atisaye da CLP a titunan jama'a, wa dole ya kasance tare da ku?", options: ["Babu kowa", "Kowane aboki mai lasisin ƙaramar mota", "Wani daga iyalinku", "Mai CDL na ajin da ya dace, kusa da ku"], answer: 3, why: "Mai CDL da ya cancanta na wannan motar dole ya zauna kusa da ku ya sa ido." },
          { objective: "O3", q: "Kun sami 5 cikin 10 a tambayoyin gwaji na Air Brakes. Me ya kamata ku yi?", options: ["Ku shirya jarabawa ta gaske yau", "Ku tsallake Air Brakes", "Ku biya manhaja mai amsoshin jarabawa", "Ku sake karanta sashen ku yi atisaye har ku kai 8 cikin 10"], answer: 3, why: "Ku yi atisaye har kuna samun maki mai kyau kafin ku shirya jarabawa ta gaske." }
        ]
      }
    },
    {
      name: "Babi na 2: Ƙwarewa da shirinku",
      lessons: [
        {
          title: "Binciken mota kafin tafiya",
          objectives: ["O4"],
          minutes: 6,
          goal: "Faɗin sunan kowane wuri na binciken mota kafin tafiya da abin da kuke dubawa a wurin.",
          text: [
            "Jarabawar ƙwarewa tana farawa da binciken mota kafin tafiya (pre-trip inspection). Kuna zagaya motar, kuna nuna kowane sashe, kuna faɗin abin da kuke dubawa da babbar murya. Dokokin tarayya kuma sun ce kowane direba dole ya tabbata motar tana lafiya kafin ya tuƙa ta, don haka wannan al'ada ce ta tsawon aikinku.",
            "Ku bi jeri ɗaya kowane lokaci, don kada ku taɓa tsallake wani sashe. Jerin da aka saba shi ne: ɗakin injin, gidan direba da kunna injin, sitiyari, sasfensan (suspension), birki, ƙafafu da tayoyi, gefuna da baya tare da fitilu, da wurin haɗi a mota mai haɗe. A motoci masu birki na iska kuma kuna duba ma'aunan birki na iska da alamun gargaɗinsu.",
            "Ga kowane sashe, ku faɗi abin da ke sa shi lafiya: \"A ɗaure yake da ƙarfi, babu tsagewa ko lanƙwasa, babu zubewa.\" Littafin jiharku yana da cikakken jerin don irin motarku. Wurin horonku zai nuna muku a babbar mota ta gaske.",
            "Idan kun sami lahani, motar ba za ta motsa ba har sai an gyara shi. Ku kai rahoto ku rubuta shi."
          ],
          steps: ["Ku yi amfani da jerin bincike daga littafin jiharku don irin motarku.", "Ku fara a ɗakin injin, sannan gidan direba, sannan ku zagaya motar a jeri ɗaya kowane lokaci.", "Ku nuna kowane sashe ku faɗi abin da kuke dubawa: a ɗaure, ba a lalace ba, babu zubewa.", "Ku duba fitilu, abubuwan haskawa (reflectors) da tayoyi a kowane gefe.", "Ku rubuta ku kai rahoton duk wani lahani; kada ku tuƙa har sai an gyara shi."],
          words: [["Binciken mota kafin tafiya (pre-trip inspection)", "binciken lafiya da direba ke yi wa mota kafin ya tuƙa ta."], ["Lahani (defect)", "sashe da ya karye, ya gaji ko ya ɓace, wanda ke sa mota ta zama marar lafiya."], ["Wurin haɗi (coupling)", "sassan da ke haɗa tarakta da tirela, kamar fifth wheel da kingpin."], ["Fifth wheel", "faffaɗan farantin zagaye a kan tarakta da tirelar ke kullewa a kai."]],
          slides: [
            { title: "Dalilin muhimmancin binciken kafin tafiya", bullets: ["Jarabawar ƙwarewa tana farawa da shi", "Doka ta ce ku duba kafin ku tuƙa", "Lahani yana nufin ba za ku tuƙa ba"] },
            { title: "Jeri ɗaya kowane lokaci", bullets: ["Ɗakin injin, sannan gidan direba da kunna injin", "Sitiyari, sasfensan, birki, ƙafafu", "Gefuna, baya, fitilu, wurin haɗi"] },
            { title: "Ku faɗi abin da kuke dubawa", bullets: ["A ɗaure yake da ƙarfi", "Babu tsagewa, lanƙwasa ko gajiya", "Babu zubewa"] }
          ],
          sources: [CFR_SKILLS, CFR_INSPECT],
          tryIt: "Ta amfani da sashen bincike na littafin CDL na jiharku, ku rubuta jerin binciken kafin tafiya don motar da kuke shirin yin jarabawa da ita. Sannan ku yi atisayen faɗin sa da babbar murya a kan ƙaramar mota, hoton babbar mota, ko motar wasa: ku nuna kowane wuri ku faɗi abin da kuke dubawa.",
          youCanNow: "bin binciken mota kafin tafiya a jere, da faɗin abin da kuke dubawa a kowane sashe.",
          quickCheck: [
            { objective: "O4", q: "Me yasa kuke bincike a jeri ɗaya kowane lokaci?", options: ["Don kada ku taɓa tsallake wani sashe", "Domin tsallake sassa ya fi sauri", "Domin mai jarabawa ne ke zaɓar jerin", "Ba shi da muhimmanci"], answer: 0, why: "Jeri ɗaya na nufin babu wurin da zai ɓace." },
            { objective: "O4", q: "A binciken kafin tafiya kun sami bututun birki da ya tsage. Me za ku yi?", options: ["Ku tuƙa a hankali zuwa tasha ta gaba", "Ku naɗe shi da tef ku tafi", "Ku kai rahoto, ku rubuta, kuma kada ku tuƙa har sai an gyara shi", "Ku ƙyale shi idan birkin yana aiki har yanzu"], answer: 2, why: "Lahanin lafiya yana nufin motar ba za ta motsa ba har sai an gyara ta." }
          ]
        },
        {
          title: "Sarrafa mota na asali da halayen tuƙi lafiya",
          objectives: ["O5"],
          minutes: 5,
          goal: "Zaɓar mataki mai lafiya a yanayin tuƙin babbar mota da aka saba gani.",
          text: [
            "Bayan binciken kafin tafiya, jarabawar ƙwarewa tana duba sarrafa mota na asali (tafiya gaba da baya, tuƙin baya a layi madaidaici da a kwana, da juyawa) da tuƙi a titi.",
            "Masu jarabawa suna neman halaye masu lafiya. Ku bar babbar tazara a kewaye da motarku: manyan motoci suna buƙatar wuri mai yawa sosai don tsayawa fiye da ƙananan motoci. Ku rage gudu idan ana ruwan sama, dusar ƙanƙara, a kwana, wuraren aikin gina titi da cunkoso, ko da ƙasa da iyakar gudu. Ku duba nesa a gaba kuma ku duba madubanku akai-akai. Ku yi juyawar dama mai faɗi a hankali don kada tirelar ta bugi gefen titi ko wata mota.",
            "Ku yi tuƙin baya kaɗan yadda ya yiwu. Idan ba ku da tabbacin abin da ke bayanku, ku fita ku duba. Direbobi da yawa suna tunawa da G.O.A.L.: Get Out And Look (ku fita ku duba).",
            "Dole kuma ku kasance cikin koshin lafiyar tuƙi. Dokokin tarayya na hours of service (sa'o'in aiki) suna iyakance tsawon lokacin da za ku iya tuƙi da aiki kafin ku huta, kuma ana yi wa direbobi gwajin ƙwayoyi da barasa. Kada ku taɓa tuƙi idan kun gaji, kuna rashin lafiya ko kun sha wani abu da ke rage hankali."
          ],
          steps: ["Ku bar babbar tazara a gaba; ku ƙara ta idan yanayi ya yi muni.", "Ku daidaita gudunku da titi, yanayi da kaya, ba alamar titi kaɗai ba.", "Ku duba madubanku bayan 'yan daƙiƙoƙi da kuma kafin kowane canjin layi.", "Kafin tuƙin baya: ku fita ku duba (Get Out And Look), sannan ku yi baya a hankali.", "Ku tsaya ku huta idan kun gaji; ku bi dokokin hours of service."],
          words: [["Tazarar tsaro (space cushion)", "fili da kuke barin a kewaye da motarku don ku sami wurin tsayawa ko kauce wa abu."], ["Off-tracking", "lokacin da ƙafafun baya na doguwar mota suke bin gajeriyar hanya fiye da na gaba a lokacin juyawa."], ["Hours of service", "dokokin FMCSA kan tsawon lokacin da direba zai iya tuƙi da aiki kafin ya huta."]],
          slides: [
            { title: "Abin da jarabawar ƙwarewa ke dubawa", bullets: ["Binciken mota kafin tafiya", "Sarrafa mota na asali: tuƙin baya, juyawa, tsayawa", "Tuƙi a titi"] },
            { title: "Tazara da gudu", bullets: ["Manyan motoci suna buƙatar wuri mai yawa sosai don tsayawa", "Ku rage gudu a mummunan yanayi, kwana da wuraren aikin titi", "Ku duba nesa a gaba; ku duba madubai akai-akai"] },
            { title: "Tuƙin baya: G.O.A.L.", bullets: ["Get Out And Look: ku fita ku duba", "Ku yi baya a hankali, kaɗan yadda ya yiwu"] },
            { title: "Ku kasance lafiya don tuƙi", bullets: ["Ku bi dokokin hours of service", "Kada ku taɓa tuƙi a gajiye, ba lafiya ko da hankali a rage"] }
          ],
          sources: [CFR_SKILLS, FMCSA_HOS],
          tryIt: "Ku rubuta yanayi biyar daga sashen tuƙi lafiya na littafin jiharku (misali ruwan sama da dare, wurin aikin titi, tuƙin baya zuwa wurin sauke kaya). Ga kowanne, ku rubuta mataki mai lafiya a jimla ɗaya. Ku nemi abokin karatu ya yi muku tambayoyi a kansu.",
          youCanNow: "zaɓar mataki mai lafiya game da tazara, gudu, tuƙin baya da lafiyar tuƙi.",
          quickCheck: [
            { objective: "O5", q: "Kuna tuƙin baya zuwa wurin sauke kaya kuma ba kwa ganin wani kusurwa. Me za ku yi?", options: ["Ku ƙara gudu a baya don ku gama da sauri", "Ku fita ku duba kafin ku ci gaba da tuƙin baya", "Ku busa ƙaho ku ci gaba", "Ku yi amfani da rediyo kaɗai"], answer: 1, why: "G.O.A.L.: ku fita ku duba idan ba ku da tabbacin abin da ke bayanku." },
            { objective: "O5", q: "Ruwan sama mai ƙarfi ya fara a babban titi. Mene ne zaɓi mai lafiya?", options: ["Ku ci gaba da gudu da tazara iri ɗaya", "Ku matsa kusa da motar gaba don ku ga fitilunta", "Ku ƙara gudu don ku fita daga ruwan sama", "Ku rage gudu ku ƙara tazara tsakaninku da motar gaba"], answer: 3, why: "Titi mai ruwa yana nufin tsayawa yana ɗaukar nisa mai tsawo, don haka ku rage gudu ku bar wuri mai yawa." }
          ]
        },
        {
          title: "Zaɓar horo da yin shirin CDL ɗinku",
          objectives: ["O2", "O3"],
          minutes: 5,
          goal: "Rubuta shirin CDL mai ranaku tare da wuraren horo masu rajista da za ku iya tuntuɓa.",
          text: [
            "Kafin ku biya ko ku shiga kowane horo, ku tabbata makarantar ko mai ɗaukar aikin yana cikin Training Provider Registry na FMCSA. Kuna iya bincika jerin ta wuri.",
            "Wasu kamfanonin manyan motoci suna biyan kuɗin horo idan kun yarda za ku yi musu tuƙi na wani ƙayyadadden lokaci. Ku karanta yarjejeniyar a hankali: me zai faru idan kun bar aiki da wuri? Za ku mayar da kuɗin horon? Ku tambaya kafin ku sa hannu.",
            "Tsofaffin sojoji: idan kun tuƙa manyan motocin soja, ku tambayi jiharku game da military skills test waiver (keɓewa daga jarabawar ƙwarewa ga sojoji); FMCSA tana bar jihohi su ba da shi ga sojoji da tsofaffin sojoji na kwanan nan da suka cancanta. Idan kuna da tarihin laifi, ku kira ofishin lasisi na jiha ku tambayi masu ɗaukar aiki game da dokokin ɗaukar ma'aikata tun da wuri; izinin kayan haɗari kuma yana buƙatar binciken tsaro.",
            "Yanzu ku mayar da shi shiri. Shiri mai ranaku ya fi yiwuwa ya faru fiye da buri kawai."
          ],
          steps: ["Ku rubuta aikin da kuke so da ajin da ƙarin izinin da yake buƙata.", "Ku bincika Training Provider Registry ku lissafa wurare uku kusa da ku.", "Ku kira ko ku ziyarta; ku tambayi game da jadawali, jimillar kuɗi, yarjejeniya da samar da aiki.", "Ku sa ranar da kuke nufi kusa da kowane mataki, daga gwajin lafiya zuwa jarabawar ƙwarewa.", "Ku tsara waɗanne sassan littafi za ku karanta kowane mako."],
          words: [["Yarjejeniyar horo (training contract)", "yarjejeniya cewa kamfani zai biya kuɗin horonku idan kun yi masa aiki na ƙayyadadden lokaci."], ["Keɓewa daga jarabawar ƙwarewa (skills test waiver)", "zaɓi da wasu jihohi ke bayarwa na tsallake jarabawar ƙwarewar CDL ga direbobin soja da suka cancanta."]],
          slides: [
            { title: "Ku duba kafin ku biya", bullets: ["Wurin horon yana cikin Training Provider Registry na FMCSA?", "Ku bincika jerin ta wuri"] },
            { title: "Horon da kamfani ke biya", bullets: ["Ku karanta yarjejeniyar", "Idan kun bar aiki da wuri fa? Za ku mayar da kuɗin?"] },
            { title: "Ku tambaya da wuri", bullets: ["Tsofaffin sojoji: ku tambayi game da keɓewar jarabawar ƙwarewa ta soja", "Masu tarihin laifi: ku tambayi jiha da masu ɗaukar aiki da wuri"] },
            { title: "Shiri mai ranaku", bullets: ["Kowane mataki yana da ranar da ake nufi", "Sassan karatu kowane mako", "Wuraren horo uku da za ku kira"] }
          ],
          sources: [TPR, CFR_MIL, CFR_ELDT, BLS_TRUCK],
          tryIt: "Ku bincika Training Provider Registry don wurare uku kusa da ku. Ku rubuta sunayensu, yadda za a tuntuɓe su, da tambayoyi uku da za ku yi wa kowanne. Sannan ku sa ranar da kuke nufi kusa da kowane mataki na hanyar CDL ɗinku.",
          youCanNow: "tabbatar cewa wurin horo yana da rajista, da rubuta shirin CDL mai rana ga kowane mataki.",
          quickCheck: [
            { objective: "O2", q: "Wata makaranta ta ce tana ba da horon CDL amma ba ta cikin Training Provider Registry. Me ya kamata ku yi?", options: ["Ku shiga da sauri kafin farashi ya hau", "Ku biya da kuɗi hannu don ya fi arha", "Ku zaɓi wurin horo da ke cikin jerin", "Ku nemi aboki ya duba muku daga baya"], answer: 2, why: "Horon da ake ƙirgawa ga yawancin sababbin direbobi dole ya fito daga wurin da ke cikin jerin FMCSA." },
            { objective: "O3", q: "Wane shiri ne ya fi yiwuwa ya yi aiki?", options: ["\"Zan sami CDL ɗina wata rana.\"", "\"Gwajin lafiya kafin 3 ga Mayu, jarabawar rubutu kafin 24 ga Mayu, sashen littafi ɗaya kowane mako.\"", "\"Zan yi karatu idan na sami lokaci.\"", "\"Zan yi jarabawar in ga abin da zai faru.\""], answer: 1, why: "Shiri mai ranaku da matakan karatu na kowane mako yana mayar da buri zuwa ayyuka." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Ƙwarewa da shirinku",
        questions: [
          { objective: "O4", q: "Da me jarabawar ƙwarewar CDL ke farawa?", options: ["Binciken mota kafin tafiya", "Tuƙi a titi", "Tuƙin baya a kwana", "Rubuta maƙala"], answer: 0, why: "Jarabawar ƙwarewa tana farawa da binciken mota kafin tafiya." },
          { objective: "O4", q: "A binciken kafin tafiya, me kuke faɗa game da kowane sashe?", options: ["Sunansa kaɗai", "Farashinsa", "Abin da kuke dubawa: a ɗaure da ƙarfi, ba a lalace ba, babu zubewa", "Babu komai; kallo kawai kuke yi"], answer: 2, why: "Kuna nuna kowane sashe ku faɗi abin da ke sa shi lafiya." },
          { objective: "O5", q: "Me yasa manyan motoci ke barin tazara mafi girma fiye da ƙananan motoci?", options: ["Don adana mai kaɗai", "Suna buƙatar wuri mai yawa sosai don tsayawa", "Al'ada ce kawai", "Don sauran direbobi su wuce"], answer: 1, why: "Motoci masu nauyi suna ɗaukar lokaci mai tsawo kafin su tsaya, don haka suna buƙatar babbar tazara." },
          { objective: "O5", q: "Kuna jin barci sosai bayan sa'o'i biyu na tuƙi. Mene ne mataki mai lafiya?", options: ["Ku buɗe taga ku ci gaba", "Ku ƙara shan kofi ku ƙara gudu", "Ku ƙara ƙarar rediyo", "Ku tsaya a wuri mai lafiya ku huta"], answer: 3, why: "Kada ku taɓa tuƙi a gajiye; ku tsaya lafiya ku huta, kuma ku bi dokokin hours of service." },
          { objective: "O2", q: "Wani kamfani yana ba da horon CDL kyauta idan kun yi masa tuƙi na shekara ɗaya. Me za ku fara yi?", options: ["Ku karanta yarjejeniyar ku tambayi me zai faru idan kun bar aiki da wuri", "Ku sa hannu nan take", "Ku faɗa musu za ku yanke shawara bayan horo", "Ku ƙyale yarjejeniyar"], answer: 0, why: "Horon da kamfani ke biya sau da yawa yana da dokar mayar da kuɗi, don haka ku karanta ku tambaya kafin ku sa hannu." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Shirye-shiryen Lasisin Tuƙin Motocin Kasuwanci (CDL)",
    questions: [
      { objective: "O1", q: "Aikin tuƙin bas na birni mai ɗaukar fasinjoji 40. Wane aji da ƙarin izini ne suka fi yiwuwa?", options: ["Aji C tare da T", "Aji A tare da H", "Aji B tare da P", "Ba a buƙatar CDL"], answer: 2, why: "Bas ɗaya mai nauyi yawanci Aji B ne, kuma ɗaukar fasinjoji yana buƙatar izinin P." },
      { objective: "O1", q: "Me izinin H yake bari ku yi?", options: ["Ɗaukar kayayyaki masu haɗari", "Tuƙin bas na makaranta", "Jan tirela biyu", "Tuƙin motar tanki kaɗai"], answer: 0, why: "H shi ne izinin kayayyaki masu haɗari; yana kuma buƙatar binciken tarihin tsaro." },
      { objective: "O1", q: "Wace mota ce yawanci Aji A?", options: ["Motar fasinjoji 15 (van)", "Motar akwati ɗaya mai nauyin fam 30,000", "Motar ɗaukar kaya ƙarama (pickup)", "Tarakta mai jan tirela da ta fi fam 10,000"], answer: 3, why: "Mota mai haɗe mai nauyin fam 26,001 ko fiye, da tirela da ta fi fam 10,000, Aji A ce." },
      { objective: "O1", q: "Kuna son ɗaukar mai a motar tanki da ke ɗaukar kayayyaki masu haɗari masu placard. Wane izini ne ke rufe duka biyun?", options: ["S", "X", "P", "T"], answer: 1, why: "X yana haɗa izinin motar tanki da na kayayyaki masu haɗari." },
      { objective: "O2", q: "Wa ke yin dokokin tarayya ga direbobin motocin kasuwanci?", options: ["FMCSA", "IRS", "OSHA", "Makarantar horonku"], answer: 0, why: "FMCSA, wato Federal Motor Carrier Safety Administration, ita ce ke kafa dokokin tarayya." },
      { objective: "O2", q: "Wa ke yin jarabawar rubutu da ta ƙwarewa ta CDL?", options: ["FMCSA a Washington, D.C.", "Kowane kamfanin manyan motoci", "Kotun tarayya", "Ofishin lasisin tuƙi na jiharku ko masu jarabawar da ya amince da su"], answer: 3, why: "Jiha ce ke yin jarabawar kuma take ƙayyade kuɗi da fom." },
      { objective: "O2", q: "Bisa dokokin tarayya, mene ne ƙaramin shekaru don tuƙin motar kasuwanci daga jiha zuwa jiha?", options: ["16", "18", "21", "25"], answer: 2, why: "Dole direbobi su kai aƙalla shekara 21 don tuƙin motocin kasuwanci daga jiha zuwa jiha." },
      { objective: "O2", q: "Wane jeri ne daidai?", options: ["Jarabawar ƙwarewa, sannan CLP, sannan gwajin lafiya", "Gwajin lafiya da jarabawar rubutu, CLP, horo, sannan jarabawar ƙwarewa", "Horo, jarabawar ƙwarewa, sannan jarabawar rubutu", "CLP, jarabawar ƙwarewa a ranar, sannan horo"], answer: 1, why: "Gwajin lafiya da jarabawar rubutu suna kai wa ga CLP; horo da jiran kwanaki 14 suna zuwa kafin jarabawar ƙwarewa." },
      { objective: "O2", q: "Sau nawa yawancin direbobi dole su sake cin gwajin lafiyar DOT?", options: ["Aƙalla duk bayan watanni 24", "Sau ɗaya kawai a rayuwarsu", "Duk bayan shekaru 10", "Ba sai bayan shekara 30 ba"], answer: 0, why: "Yawancin direbobi dole a sake gwada su a ba su takardar shaida aƙalla duk bayan watanni 24; wasu suna buƙatar sa fiye da haka." },
      { objective: "O3", q: "Daga ina tambayoyin jarabawar rubutu ta CDL suke fitowa?", options: ["Labaran jaridu", "Littafin CDL na jiharku", "Kafofin sada zumunta", "Rediyon babbar motar"], answer: 1, why: "Jarabawar rubutu ta dogara ne kan littafin CDL na hukuma na jiha." },
      { objective: "O3", q: "Mene ne kyakkyawan tsarin karatu don jarabawar rubutu?", options: ["Karanta dukan littafin a daren da ya gabata", "Kallon bidiyo kawai", "Haddace amsoshi daga manhajar kuɗi", "Sashen littafi ɗaya a kowane zama, sannan rubuta abubuwa uku da kuka koya da tambayoyin gwaji"], answer: 3, why: "Gajerun zamuna, tunawa ta rubutu da tambayoyin gwaji suna taimaka muku ku tuna." },
      { objective: "O3", q: "Yaushe kuka shirya don shirya ranar jarabawar rubutu?", options: ["Idan kun karanta shafin take", "Idan kuna samun aƙalla 8 cikin 10 a tambayoyin gwaji", "Idan aboki ya ce kun shirya", "Da zarar kun sami littafin"], answer: 1, why: "Samun maki mai kyau a tambayoyin gwaji alama ce mai kyau cewa kun shirya." },
      { objective: "O4", q: "Mene ne binciken mota kafin tafiya?", options: ["Binciken lafiyar mota kafin ku tuƙa ta", "Gwajin ganinku", "Duba yanayi", "Duba albashinku"], answer: 0, why: "Shi ne binciken da direba ke yi don tabbatar da motar tana lafiya kafin tuƙi." },
      { objective: "O4", q: "Wace hanya ce mai kyau ta bayyana wani sashe a binciken kafin tafiya?", options: ["\"Wannan taya ce.\"", "\"Kamar babu matsala, ina tsammani.\"", "\"A ɗaure yake da ƙarfi, babu tsagewa ko lanƙwasa, babu zubewa.\"", "\"Zan duba shi daga baya.\""], answer: 2, why: "Kuna faɗin sunan sashen da ainihin abin da ke sa shi lafiya." },
      { objective: "O4", q: "A tarakta da tirela, wane wuri ne ke haɗa tarakta da tirela?", options: ["Madubai", "Wurin haɗi, kamar fifth wheel", "Tankin mai", "Rediyo"], answer: 1, why: "Wurin haɗi, har da fifth wheel da kingpin, shi ne ke riƙe tirela da tarakta." },
      { objective: "O5", q: "Me G.O.A.L. ke nufi a tuƙin baya?", options: ["Go On And Leave", "Get Over All Lanes", "Gas Off At Lights", "Get Out And Look"], answer: 3, why: "Get Out And Look: ku fita ku duba abin da ke bayanku kafin tuƙin baya." },
      { objective: "O5", q: "Kuna tuƙi ta wurin aikin gina titi. Me za ku yi?", options: ["Ku rage gudu ku bar tazara mai yawa", "Ku ci gaba da gudun babban titi", "Ku riƙa canja layi akai-akai", "Ku matsa kusa da motar gaba"], answer: 0, why: "Wuraren aikin titi suna da ma'aikata, kunkuntar layuka da tsayawa ba zato, don haka ku rage gudu ku bar wuri." },
      { objective: "O5", q: "Me dokokin hours of service suke yi?", options: ["Ƙayyade albashinku", "Iyakance tsawon lokacin da kuke tuƙi da aiki kafin ku huta", "Faɗa muku titunan da za ku bi", "Yanke ranar jarabawarku"], answer: 1, why: "Dokokin hours of service suna iyakance lokacin tuƙi da aiki don kada direbobi su gaji sosai." },
      { objective: "O5", q: "Kuna yin juyawar dama a doguwar babbar mota. Mene ne haɗarin?", options: ["Tirelar za ta iya yanke kusurwa ta bugi gefen titi ko wata mota", "Injin zai mutu", "Madubai za su naɗe", "Babu haɗari"], answer: 0, why: "Off-tracking yana nufin ƙafafun baya suna bin gajeriyar hanya, don haka tirelar za ta iya bugun abin da ke cikin kwanar." },
      { objective: "O4", q: "Kun sami fitila da ba ta aiki a binciken kafin tafiya. Me za ku yi?", options: ["Ku tuƙa da dare duk da haka", "Ku ƙyale ta idan rana ce", "Ku kai rahoto a gyara ta kafin ku tuƙa", "Ku rufe ta da tef"], answer: 2, why: "Ana kai rahoton lahani a gyara shi kafin motar ta motsa." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 2, 5, 7, 9, 12, 13, 15, 17] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake duba shirinku.",
    criteria: [
      { name: "Lasisin da ya dace", objective: "O1", notYet: "Ajin ko ƙarin izinin bai dace da aikin ba, ko ba a rubuta su ba.", meets: "Ajin da kowane ƙarin izini sun dace da aikin da ake nufi da tallar aiki ta gaske.", exceeds: "Ya kuma ambaci wani aiki na biyu da lasisin zai buɗe, ko ƙarin izinin da za a ƙara daga baya." },
      { name: "Matakai a jere", objective: "O2", notYet: "Wasu matakai sun ɓace ko ba a jere suke ba, ko ba a sa dokar horo ko jiran kwanaki 14 ba.", meets: "Dukkan matakai suna a jere tare da ranar da ake nufi ga kowanne, har da gwajin lafiya, CLP, horo da jiran kwanaki 14.", exceeds: "Kowane mataki kuma yana ambaton ofishin ko shafin intanet da ke kula da shi." },
      { name: "Horo mai rajista", objective: "O2", notYet: "Babu wuraren horo, ko ba a duba wuraren a jerin ba.", meets: "Wurare uku daga Training Provider Registry tare da bayanan tuntuɓa.", exceeds: "Ya haɗa da amsoshin tambayoyin da aka yi: kuɗi, jadawali, sharuɗɗan yarjejeniya." },
      { name: "Shirin karatu", objective: "O3", notYet: "Babu shirin karatu, ko bai yi amfani da littafin jiha ba.", meets: "Sassan littafin jiha na kowane mako don kowace jarabawa da ake buƙata, tare da burin makin atisaye.", exceeds: "Ya haɗa da makin atisaye da aka riga aka samu." },
      { name: "Jerin binciken kafin tafiya", objective: "O4", notYet: "Jerin yana tsallake manyan wurare ko ba a jeri ɗaya yake ba.", meets: "Ya rufe kowane babban wuri a jeri ɗaya, tare da abin da za a duba a kowane sashe.", exceeds: "Mai koyo zai iya faɗin sa da babbar murya, yana nuna sassan, ba tare da karantawa ba." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin da shirin CDL da ya cika ma'aunin rubric",
      "Masu koyo da suka ci jarabawar rubutu ta jiha kuma suka sami CLP cikin kwanaki 90 (binciken biyo baya)",
      "Masu koyo da suka yi rajista da wurin horo da ke cikin Training Provider Registry",
      "Masu koyo da suka sami CDL kuma suka fara aikin tuƙi (rahotannin abokan aiki da na biyo baya)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai intanet don buɗe littafin CDL na jiha da Training Provider Registry na FMCSA",
      "Littafin CDL na jiharku (kyauta a shafin .gov na jiha)",
      "Takarda, alƙalami da kalanda don shirin",
      "Zaɓi: hoto ko ƙirar babbar mota, ko ƙaramar mota, don atisayen bayyana binciken kafin tafiya",
      "Kusan minti 60 zuwa 75 gaba ɗaya, tare da lokacin karatu na kowane mako"
    ],
    facilitatorNotes: [
      "A rukuni, ku buga jerin bincike na jiha ku sa masu koyo su yi atisayen bayyanawa bibbiyu.",
      "Kada ku ba da shawarar wata makaranta ko kamfani na musamman; ku nuna wa masu koyo yadda ake duba Training Provider Registry da kwatantawa.",
      "Ku tunatar da masu koyo cewa dokokin jiha, kuɗi da fom sun bambanta; koyaushe ku duba shafin .gov na jiha.",
      "Ga tsofaffin sojoji, ku nuna shafin jiha na keɓewar jarabawar ƙwarewa ta soja; ga masu koyo masu tarihin laifi, ku haɗa su da mai ba da shawara na masu dawowa gida ko na neman aiki.",
      "Ku ba da maki ga shirin ƙarshe da ma'aunin rubric, kuma ku taimaki mai koyo ya gyara layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
