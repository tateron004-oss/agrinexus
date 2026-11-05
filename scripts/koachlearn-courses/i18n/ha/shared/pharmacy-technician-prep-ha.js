"use strict";

// Koach Learn course, Hausa (ha) translation of shared/pharmacy-technician-prep.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.
// Safety: no real doses or dosing advice. All prescriptions and math problems use made-up drugs ("Drug X") and are marked practice only.

module.exports = {
  id: "pharmacy-technician-prep-ha",
  lang: "ha",
  translationOf: "pharmacy-technician-prep",
  category: "Workforce Development",
  name: "Shiri don Zama Mataimakin Mai Haɗa Magani (Pharmacy Technician)",
  skills: "Zaɓen takardar shaida da duba dokokin jiha, Karanta takardar magani, Atisayen lissafin magani, Binciken lafiyar magani, Sanin abin da ke zuwa wurin mai haɗa magani, Kiyaye sirrin mara lafiya (HIPAA)",
  outcome: "yin shirinku na karatu da jarabawa don jarabawar mataimakin mai haɗa magani (pharmacy technician), da nuna manyan ƙwarewar da take gwadawa: karanta takardar magani ta atisaye, warware lissafin magani na atisaye, yin binciken lafiya da mataimaki ke yi, kai tambayoyin lafiya wurin mai haɗa magani (pharmacist), da kiyaye bayanan mara lafiya a sirri.",
  about: [
    "Mataimakan mai haɗa magani (pharmacy technicians) suna taimakon masu haɗa magani (pharmacists) a shagunan magani, asibitoci, kantunan magani masu aika magani ta wasiƙa, da asibitocin shan magani. Suna karɓar takardun magani, suna shigar da su kwamfuta, suna ƙirga magani da manna masa takarda (label), suna kula da kayan ajiya, kuma suna taimakon abokan ciniki. Jihohi da yawa a Amurka suna neman mataimaka su yi rajista da hukumar magunguna ta jiha (state board of pharmacy), kuma masu ɗaukar aiki da yawa suna neman takardar shaida ta ƙasa.",
    "Wannan kwas yana shirya ku don wannan hanya. Za ku kwatanta takardun shaida biyu na ƙasa (CPhT na PTCB, wanda ake samu idan an ci jarabawar PTCE, da CPhT na NHA, wanda ake samu idan an ci jarabawar ExCPT), ku duba dokokin jiharku, ku karanta takardun magani na atisaye, ku yi lissafin magani na atisaye, ku koyi binciken lafiya da dokokin tarayya da mataimaki ke bi, kuma ku kiyaye sirrin mara lafiya bisa dokar HIPAA.",
    "Wannan kwas ba ya ba ku takardar shaida ko rajista, kuma ba ya taɓa ba da shawarar lafiya. Kowace takardar magani da kowane lissafi ƙirƙirarru ne, kuma an rubuta \"atisaye kawai\" a kansu. Tambayoyin abokan ciniki game da magani koyaushe suna zuwa wurin mai haɗa magani.",
    "Kowane darasi yana ɗaukar kusan minti biyar, kuma yana ƙarewa da aikin \"Gwada yanzu\" a takarda. Akwai ɗan gwaji bayan kowane darasi, gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas. Aikinku na ƙarshe shi ne shirinku na karatu da jarabawa, tare da littafin atisaye."
  ],
  finalTask: "Ku yi shirinku na karatu da jarabawa don zama mataimakin mai haɗa magani: ku faɗi jarabawar da za ku yi (PTCE ko ExCPT), abin da hukumar magunguna ta jiharku take buƙata, da ranakun karatu na kowane mako har zuwa ranar jarabawar da kuke so. Ku haɗa littafin atisaye: takardun magani 5 ƙirƙirarru da kuka karanta kuka bincika, lissafin atisaye 10 tare da yadda kuka yi su, da jerin tambayoyi 5 na abokan ciniki da za ku kai wurin mai haɗa magani.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya da ke neman aiki mai ɗorewa a fannin lafiya ba tare da dogon digiri ba: masu neman aiki, matasa, baƙi (immigrants), tsofaffin sojoji, da manya da ke komawa karatu. Wasu sun riga sun yi aiki a shago. Da yawa ba su taɓa aiki a kantin magani ba.",
    startingPoint: "Suna iya karanta Turanci na yau da kullum, yin lissafi mai sauƙi da na'urar lissafi (calculator), da amfani da waya ko kwamfutar ɗakin karatu. Yawancinsu ba su san sunayen magunguna, gajartawar kalmomin takardar magani, lissafin magani ko dokokin kantin magani ba.",
    gap: "Ayyukan mataimakin mai haɗa magani da jarabawoyinsu suna sa ran karanta takardun magani daidai, lissafi a hankali, binciken lafiya, sanin dokokin tarayya da na jiha, da kiyaye sirri sosai. Kuskure yana iya cutar da mara lafiya. Masu koyo suna buƙatar sanin hanyar samun takardar shaida da dokokin jiharsu, kuma su yi atisayen waɗannan ƙwarewa lafiya kafin horo ko jarabawa.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; an bayyana kowace kalmar kantin magani",
      "Na'urori: waya ko kwamfutar ɗakin karatu; takarda da na'urar lissafi mai sauƙi sun isa",
      "Lafiya: babu ainihin awon magani ko shawara game da awo; duk magunguna da lambobi ƙirƙirarru ne, kuma an rubuta \"atisaye kawai\"",
      "Dokoki sun bambanta a kowace jiha: masu koyo suna duba hukumar magunguna ta jiharsu",
      "Takardar shaida da rajistar jiha suna iya tambaya game da laifukan da aka yi a baya; masu koyo suna duba dokokin hukuma",
      "Sirri: babu ainihin bayanan mara lafiya a kowane aiki"
    ],
    prerequisites: "Lissafi mai sauƙi: ɓangarori (fractions), lambobi masu digo (decimals) da ninkawa. Kwas ɗin \"Health Literacy\" (Fahimtar Bayanan Lafiya) yana taimakawa amma ba dole ba ne."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Ta amfani da shafukan hukuma na PTCB, NHA da hukumar magunguna ta jiha", action: "kwatanta jarabawoyi biyu na ƙasa don mataimakan mai haɗa magani, da rubuta shirin karatu da jarabawa da ya cika dokokin jiharku", standard: "tare da tabbatar da kowace buƙata a shafin hukuma" },
    { id: "O2", condition: "Idan aka ba ku takardar magani ƙirƙirarriya", action: "faɗin sassanta da sake rubuta umarnin shan maganin da kalmomi masu sauƙi", standard: "kuna samun aƙalla 4 cikin takardun magani 5 na atisaye daidai gaba ɗaya" },
    { id: "O3", condition: "Idan aka ba ku lissafin atisaye kawai mai lambobi ƙirƙirarru da na'urar lissafi mai sauƙi", action: "warware lissafin magani na canza ma'auni, yawan magani da kwanakin da maganin zai ɗauka", standard: "kuna samun aƙalla 8 cikin 10 daidai, tare da nuna yadda kuka yi" },
    { id: "O4", condition: "Idan aka ba ku odar atisaye da aka cika da kwalbar ajiyarta", action: "bincika mara lafiya, magani, ƙarfin magani da NDC da takardar magani, da nuna duk wani rashin daidaito", standard: "kuna gano kowane rashin daidaito da aka ɓoye" },
    { id: "O5", condition: "Idan aka ba ku yanayi na atisaye a kantin magani", action: "raba kowane aiki zuwa aikin mataimaki ko aikin mai haɗa magani, da bin ƙarin dokoki na magungunan da ake sarrafawa (controlled substances)", standard: "kuna kai kowace tambayar lafiya wurin mai haɗa magani" },
    { id: "O6", condition: "A teburin kantin magani ko a waya", action: "raba bayanan mara lafiya ga mutanen da suke buƙata kaɗai, kuma ƙaramin abin da suke buƙata kawai", standard: "a kowane yanayi na atisaye, bisa dokar HIPAA" }
  ],
  chapters: [
    {
      name: "Babi na 1: Aikin, takardun magani da lissafi",
      lessons: [
        {
          title: "Aikin, takardun shaida da dokokin jiharku",
          objectives: ["O1"],
          minutes: 5,
          goal: "Kwatanta jarabawoyin PTCE da ExCPT, da nemo dokokin mataimaki na jiharku.",
          text: [
            "Mataimakan mai haɗa magani suna karɓar takardun magani, suna rubuta su a kwamfuta, suna ƙirga magani da manna masa takarda, suna kula da kayan ajiya, suna karɓar kuɗi, kuma suna taimakon abokan ciniki. Mai haɗa magani yana duba aikin, kuma shi ne yake amsa kowace tambaya game da magani.",
            "Akwai takardun shaida biyu na ƙasa, kuma dukansu suna ba da sunan Certified Pharmacy Technician (CPhT), wato mataimakin mai haɗa magani da aka tabbatar. PTCB (Pharmacy Technician Certification Board) tana ba da shi ga waɗanda suka ci jarabawar PTCE. Don ku cancanta, kuna buƙatar shirin horo da PTCB ta amince da shi, ko isasshen ƙwarewar aiki. NHA (National Healthcareer Association) tana ba da shi ga waɗanda suka ci jarabawar ExCPT, tare da shirin horo ko ƙwarewar aiki a ƙarƙashin kulawa.",
            "Hukumar magunguna ta jiharku (state board of pharmacy) ce take yanke abin da mataimaka za su iya yi, da ko dole ku yi rajista ko ku sami lasisi kafin ku fara aiki. Dokoki sun bambanta sosai tsakanin jihohi. Ƙungiyar National Association of Boards of Pharmacy (NABP) tana da jerin dukan hukumomin magunguna na jihohi.",
            "Kuɗaɗe, sharuɗɗan cancanta da dokokin jarabawa suna canjawa, kuma dukan takardun shaida biyu suna neman ku faɗi laifuka ko hukuncin hukumar da aka yi muku a baya. Ku karanta shafukan hukuma kafin ku biya. Wannan kwas yana shirya ku; ba ya ba ku takardar shaida ko rajista."
          ],
          steps: ["Ku buɗe shafin CPhT na PTCB da shafin pharmacy technician na NHA.", "Ku rubuta game da kowanne: sunan jarabawar, yadda ake cancanta, da sau nawa ake sabuntawa.", "Ku nemo hukumar magunguna ta jiharku a jerin NABP.", "Ku rubuta abin da jiharku take buƙata kafin ku fara aiki a matsayin mataimaki.", "Ku zaɓi jarabawarku da watan da kuke son yi."],
          words: [["Mataimakin mai haɗa magani (pharmacy technician)", "ma'aikaci da aka horar da ke taimakon mai haɗa magani shirya magani da ba da shi."], ["Mai haɗa magani (pharmacist)", "ƙwararre mai lasisi da ke bincika takardun magani da ba marasa lafiya shawara game da magani."], ["CPhT", "Certified Pharmacy Technician: sunan da PTCB ko NHA ke bayarwa bayan jarabawoyinsu."], ["Hukumar magunguna ta jiha (state board of pharmacy)", "ofishin jiha da ke ba masu haɗa magani lasisi kuma yake kafa dokoki ga mataimaka."]],
          slides: [
            { title: "Abin da mataimaka ke yi", bullets: ["Karɓar takardun magani da shigar da su", "Ƙirga, manna takarda da ajiye magani", "Taimakon abokan ciniki; mai haɗa magani yana dubawa da ba da shawara"] },
            { title: "Jarabawoyi biyu na ƙasa", bullets: ["PTCB: jarabawar PTCE", "NHA: jarabawar ExCPT", "Dukansu suna ba da sunan CPhT"] },
            { title: "Jiharku ce take yanke hukunci", bullets: ["Rajista ko lasisi kafin ku fara aiki", "Abin da mataimaka za su iya yi", "Ku nemo hukumarku a jerin NABP"] },
            { title: "Ku duba kafin ku biya", bullets: ["Kuɗaɗe da dokoki suna canjawa", "Dukansu suna tambaya game da laifuka ko hukuncin hukuma", "Wannan kwas yana shirya ku; ba ya ba da takardar shaida"] }
          ],
          sources: [
            { name: "PTCB: Certified Pharmacy Technician (CPhT)", url: "https://www.ptcb.org/credentials/certified-pharmacy-technician" },
            { name: "NHA: Certified Pharmacy Technician (ExCPT)", url: "https://www.nhanow.com/certifications/pharmacy-technician" },
            { name: "NABP: Hukumomin magunguna na jihohi", url: "https://nabp.pharmacy/about/boards-of-pharmacy/" }
          ],
          tryIt: "Ku yi tebur mai layi biyu a tsaye: PTCE da ExCPT. Ku cike wanda yake ba da kowanne, yadda ake cancanta, da sau nawa ake sabuntawa, daga shafukan hukuma. A ƙasa, ku rubuta abin da hukumar magunguna ta jiharku take buƙata kafin ku fara aiki a matsayin mataimaki, da adireshin shafin da kuka samo shi.",
          youCanNow: "faɗin abin da mataimaka ke yi, ambaci jarabawoyi biyu na ƙasa da masu ba da su, da nemo dokokin mataimaki na jiharku.",
          quickCheck: [
            { objective: "O1", q: "Wa yake ba da jarabawar PTCE?", options: ["Ofishin motoci na jiharku", "Kowane shagon magani", "PTCB, wato Pharmacy Technician Certification Board", "FDA"], answer: 2, why: "PTCB ce take ba da PTCE; cin ta yana ba ku CPhT na PTCB." },
            { objective: "O1", q: "Wa yake yanke ko dole ku yi rajista kafin ku fara aiki a matsayin mataimaki?", options: ["Hukumar magunguna ta jiharku", "Manajan shagon", "Abokin ciniki", "Tallar wani horo"], answer: 0, why: "Kowace hukumar magunguna ta jiha ce take kafa dokokin rajista da aikin mataimaka." }
          ]
        },
        {
          title: "Karanta takardar magani",
          objectives: ["O2"],
          minutes: 6,
          goal: "Faɗin sassan takardar magani ta atisaye da sake rubuta umarninta da kalmomi masu sauƙi.",
          text: [
            "Takardar magani (prescription) tana da sassa da aka sani: sunan mara lafiya da ranar haihuwarsa, sunan magani, ƙarfin magani (misali 10 mg), irin maganin (ƙwaya, kafsul, ruwa), umarnin sha (ana kiransa sig), yawan maganin, sau nawa za a sake cikawa (refills), ranar rubutawa, da suna da sa hannun wanda ya rubuta ta.",
            "Umarni sau da yawa yana amfani da gajartawar kalmomin Latin. Waɗanda aka saba gani: po (ta baki), bid (sau biyu a rana), tid (sau uku a rana), qid (sau huɗu a rana), prn (idan ana buƙata), hs (lokacin kwanciya barci). Dole takardar da ke jikin magani ta kasance da kalmomi masu sauƙi, don haka \"1 tab po bid\" ya zama \"Ku sha ƙwaya 1 ta baki sau biyu a rana.\"",
            "Wasu gajartawa suna kawo kuskure, don haka ƙungiyoyin kiyaye lafiya sun ce kada a yi amfani da su. Misali, an taɓa ɗaukar \"QD\" (kowace rana) a matsayin \"QID\" (sau huɗu a rana), kuma an karanta \"U\" na units (raka'a) a matsayin sifili. Ku kuma kula da digo: ku rubuta 0.5 mg (da sifili a gaba), kada ku taɓa rubuta .5 mg, kuma kada ku taɓa rubuta 5.0 mg (sifili a baya ana iya karanta shi 50).",
            "Idan wani abu bai bayyana ba, ya ɓace, ko yana kama da kuskure, kada ku yi tsammani. Ku nuna shi ga mai haɗa magani."
          ],
          steps: ["Ku duba sunan mara lafiya da ranar haihuwarsa.", "Ku nemo sunan magani, ƙarfinsa da irinsa.", "Ku karanta sig ku sake rubuta shi da kalmomi masu sauƙi.", "Ku duba yawan magani, refills, ranar rubutawa da wanda ya rubuta.", "Ku nuna duk abin da bai bayyana ba ko ya ɓace ga mai haɗa magani."],
          words: [["Sig", "umarnin da ke kan takardar magani da ke faɗa wa mara lafiya yadda zai sha maganin."], ["Ƙarfin magani (strength)", "yawan maganin da ke cikin kowane ɗaya, misali 10 mg a cikin ƙwaya ɗaya."], ["Irin magani (dosage form)", "nau'in maganin: ƙwaya, kafsul, ruwa, man shafawa da sauransu."], ["Refill", "izinin sake cika takardar magani iri ɗaya."], ["Wanda ya rubuta (prescriber)", "mutum mai lasisi da ya rubuta takardar magani, kamar likita ko nurse practitioner (ƙwararriyar ma'aikaciyar jinya)."]],
          slides: [
            { title: "Sassan takardar magani", bullets: ["Sunan mara lafiya da ranar haihuwa", "Magani, ƙarfinsa da irinsa", "Sig, yawa, refills, rana, wanda ya rubuta"] },
            { title: "Gajartawar da aka saba gani", bullets: ["po = ta baki  •  prn = idan ana buƙata", "bid = sau biyu a rana  •  tid = sau uku", "qid = sau huɗu  •  hs = lokacin kwanciya barci"] },
            { title: "Rubutun da ke kawo kuskure", bullets: ["Ana iya karanta QD a matsayin QID: ku rubuta \"daily\" (kowace rana)", "U yana iya kama da 0: ku rubuta \"units\"", "Ku rubuta 0.5 (sifili a gaba), kada ku rubuta 5.0 (sifili a baya)"] },
            { title: "Idan kuna shakka", bullets: ["Kada ku yi tsammani", "Ku nuna shi ga mai haɗa magani"] }
          ],
          tryIt: "Atisaye kawai, magunguna ƙirƙirarru. Ku sake rubuta kowane sig da kalmomi masu sauƙi: (1) \"Drug X 1 tab po bid\" (2) \"Drug Y 2 caps po hs\" (3) \"Drug Z 1 tab po q6h prn\". Amsoshi: (1) Ku sha ƙwaya 1 ta baki sau biyu a rana. (2) Ku sha kafsul 2 ta baki lokacin kwanciya barci. (3) Ku sha ƙwaya 1 ta baki kowace awa 6 idan ana buƙata. Sannan ku jera sassan da suka ɓace daga wannan rubutun: \"Drug X 10 mg, #30, Dr. Lee\".",
          youCanNow: "faɗin sassan takardar magani, karanta gajartawar sig da aka saba gani, gane rubutun da ke kawo kuskure, da nuna umarnin da bai bayyana ba.",
          quickCheck: [
            { objective: "O2", q: "A atisaye, mene ne ma'anar \"1 tab po tid\"?", options: ["Ku sha ƙwaya 1 lokacin kwanciya barci", "Ku sha ƙwaya 1 ta baki sau uku a rana", "Ku sha ƙwaya 1 kowace rana ta biyu", "Ku sha ƙwaya 3 sau ɗaya"], answer: 1, why: "po yana nufin ta baki, tid kuma yana nufin sau uku a rana." },
            { objective: "O2", q: "Takardar magani ta atisaye ba ta da umarnin sha (sig). Me za ku yi?", options: ["Ku rubuta umarnin da aka saba da kanku", "Ku bar takardar jikin magani ba komai", "Ku tambayi abokin ciniki yadda yake sha", "Ku nuna ta ga mai haɗa magani"], answer: 3, why: "Ba a taɓa tsammanin sashin da ya ɓace ko bai bayyana ba; mai haɗa magani ne yake magance shi tare da wanda ya rubuta." }
          ]
        },
        {
          title: "Atisayen lissafin magani",
          objectives: ["O3"],
          minutes: 6,
          goal: "Warware lissafin atisaye kawai na canza ma'auni, yawan magani da kwanakin da maganin zai ɗauka.",
          text: [
            "Atisaye kawai: waɗannan lambobi ƙirƙirarru ne don shirin jarabawa, ba umarni ba ne ga ainihin mara lafiya. A ainihin aiki, mai haɗa magani yana duba kowane lissafi.",
            "Canje-canjen ma'auni da ya kamata ku sani: gram 1 (g) = milligram 1,000 (mg). Lita 1 (L) = milliliter 1,000 (mL). Kilogram 1 (kg) kusan fam 2.2 ne (lb). Cokali ƙarami 1 (tsp) = 5 mL, cokali babba 1 (tbsp) = 15 mL. Oza 1 ta ruwa (fluid ounce) kusan 30 mL ce.",
            "Kwanakin magani (days' supply) suna faɗin tsawon lokacin da maganin zai ɗauka: kwanakin magani = yawan magani ÷ yawan da ake sha a rana. Atisaye: Drug X, ƙwaya 1 sau biyu a rana, ƙwaya 60. Ana sha 2 a rana. 60 ÷ 2 = kwana 30. Yawan magani kuma akasin haka ne: yawa = abin da ake sha a rana × kwanaki. Atisaye: Drug Y, kafsul 1 sau uku a rana na kwana 10 = 3 × 10 = kafsul 30.",
            "Koyaushe ku rubuta ma'auni (units), ku tsara lissafin kafin ku danna na'urar lissafi, kuma ku duba ko amsar tana da ma'ana. Ƙwaya 6,000 don kwana 30 ba ta da ma'ana."
          ],
          steps: ["Ku rubuta abin da kuka sani, tare da ma'auni.", "Ku rubuta abin da kuke son nemowa.", "Ku canja zuwa ma'auni iri ɗaya idan ana buƙata.", "Ku tsara lissafin, sannan ku yi lissafi.", "Ku tambayi kanku: shin amsar tana da ma'ana?"],
          words: [["mg", "milligram: kashi ɗaya cikin dubu na gram."], ["mL", "milliliter: kashi ɗaya cikin dubu na lita."], ["Kwanakin magani (days' supply)", "kwanaki nawa takardar magani za ta ɗauka idan an sha kamar yadda aka umarta."], ["Canza ma'auni (conversion)", "canza lamba daga wani ma'auni zuwa wani, kamar gram zuwa milligram."]],
          slides: [
            { title: "Atisaye kawai", bullets: ["Lambobi ƙirƙirarru don shirin jarabawa", "Mai haɗa magani yana duba kowane ainihin lissafi"] },
            { title: "Canje-canjen ma'auni da za ku sani", bullets: ["1 g = 1,000 mg  •  1 L = 1,000 mL", "1 kg ≈ 2.2 lb  •  1 fl oz ≈ 30 mL", "1 tsp = 5 mL  •  1 tbsp = 15 mL"] },
            { title: "Kwanakin magani da yawan magani", bullets: ["Kwanaki = yawan magani ÷ abin da ake sha a rana", "Ƙwaya 60 ÷ 2 a rana = kwana 30", "Yawa = a rana × kwanaki: 3 × 10 = 30"] },
            { title: "Ku yi aiki kamar ƙwararre", bullets: ["Ku rubuta ma'auni koyaushe", "Ku tsara kafin ku yi lissafi", "Ku duba ko amsar tana da ma'ana"] }
          ],
          tryIt: "Atisaye kawai, lambobi ƙirƙirarru. Ku warware, ku nuna yadda kuka yi: (1) 2.5 g = ? mg (2) 3 tsp = ? mL (3) 132 lb = ? kg (4) Drug X, ƙwaya 1 sau 3 a rana, ƙwaya 90: kwanakin magani? (5) Drug Y, kafsul 2 sau biyu a rana na kwana 14: yawan magani? Amsoshi: 2,500 mg; 15 mL; 60 kg; kwana 30; kafsul 56.",
          youCanNow: "canza ma'auni da aka saba da su, da lissafa kwanakin magani da yawan magani a lissafin atisaye, kuna nuna yadda kuka yi.",
          quickCheck: [
            { objective: "O3", q: "Atisaye kawai: milligram nawa ne a cikin gram 0.5?", options: ["5 mg", "50 mg", "5,000 mg", "500 mg"], answer: 3, why: "1 g = 1,000 mg, don haka 0.5 × 1,000 = 500 mg." },
            { objective: "O3", q: "Atisaye kawai: Drug X, ƙwaya 1 sau biyu a rana, ƙwaya 28. Kwanakin magani nawa ne?", options: ["Kwana 14", "Kwana 28", "Kwana 56", "Kwana 7"], answer: 0, why: "Kwanakin magani = ƙwaya 28 ÷ 2 a rana = kwana 14." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Aikin, takardun magani da lissafi",
        questions: [
          { objective: "O1", q: "Wace jarabawa NHA take bayarwa ga mataimakan mai haɗa magani?", options: ["PTCE", "CPC", "ExCPT", "NCLEX"], answer: 2, why: "Jarabawar NHA ta mataimakan mai haɗa magani ita ce ExCPT." },
          { objective: "O1", q: "A ina za ku nemo hukumar magunguna ta jiharku?", options: ["A jerin hukumomin magunguna na NABP", "A tallar kamfanin magani", "A shafin intanet na takardun rangwame (coupons)", "A bayan kwalbar ƙwaya"], answer: 0, why: "NABP tana da jerin kowace hukumar magunguna ta jiha tare da shafinta na intanet." },
          { objective: "O2", q: "Mene ne ma'anar \"prn\" a takardar magani ta atisaye?", options: ["Ta baki", "Lokacin kwanciya barci", "Sau biyu a rana", "Idan ana buƙata"], answer: 3, why: "prn yana nufin idan ana buƙata." },
          { objective: "O2", q: "Wace hanyar rubuta ƙarfin magani ce mai aminci?", options: [".5 mg", "0.5 mg", "5.0 mg", "5.00 mg"], answer: 1, why: "Ku sa sifili a gaba, kada ku sa sifili a baya, don kada a karanta 0.5 mg ba daidai ba." },
          { objective: "O3", q: "Atisaye kawai: cokali babba 2 (tbsp) milliliter nawa ne?", options: ["10 mL", "15 mL", "30 mL", "60 mL"], answer: 2, why: "1 tbsp = 15 mL, don haka 2 tbsp = 30 mL." }
        ]
      }
    },
    {
      name: "Babi na 2: Lafiya, dokoki da sirri",
      lessons: [
        {
          title: "Binciken lafiya: magani daidai ga mara lafiya daidai",
          objectives: ["O4"],
          minutes: 5,
          goal: "Bincika odar atisaye da takardar magani, da nuna duk wani rashin daidaito.",
          text: [
            "Yawancin kurakurai suna fitowa daga ƙananan zamewa: mara lafiya ba daidai ba, magani mai suna mai kama da wani, ƙarfin magani ba daidai ba, ko kwalbar da ba daidai ba daga kan shiryayye. Mataimaka suna taimakawa wajen kama su kafin binciken ƙarshe na mai haɗa magani.",
            "Ku yi amfani da abubuwa biyu na tantance mara lafiya, kamar cikakken suna da ranar haihuwa, kowane lokaci da kuka karɓi ko kuka ba da takardar magani. Mutane biyu suna iya samun suna iri ɗaya.",
            "Kowane kunshin magani yana da National Drug Code (NDC), lambar FDA mai sassa uku da ke nuna mai yin maganin, maganin kansa, da kunshin. Daidaita NDC da ke kan kwalbar ajiya da wanda ke cikin kwamfuta (sau da yawa ta hanyar duba barcode da na'ura) yana tabbatar da cewa kun ɗauki magani, ƙarfi da kunshin da suka dace. FDA tana shirin canza NDC zuwa tsari ɗaya mai lambobi 12 a nan gaba, don haka ku koyi manufar, ba tsawo ɗaya ba.",
            "Ku kula da magungunan da sunayensu suke kama da juna a rubutu ko a furuci. Ku karanta cikakken suna, ƙarfi da irin maganin a kan kwalbar, ba haruffan farko kawai ba. Idan wani abu bai yi daidai ba, ku tsaya ku faɗa wa mai haɗa magani."
          ],
          steps: ["Ku tabbatar da abubuwa biyu na tantance mara lafiya: suna da ranar haihuwa.", "Ku kwatanta sunan magani a kan kwalbar da takardar magani, harafi bayan harafi.", "Ku kwatanta ƙarfin magani da irinsa.", "Ku duba NDC na kwalbar ajiya da na'ura ko ku kwatanta shi.", "Ku tsaya ku nuna duk wani rashin daidaito ga mai haɗa magani."],
          words: [["NDC", "National Drug Code: lambar FDA mai sassa uku ta mai yin magani, maganin da kunshinsa."], ["Abubuwan tantance mara lafiya", "bayanai kamar cikakken suna da ranar haihuwa da ake amfani da su don tabbatar da cewa mutumin da ya dace ne."], ["Magungunan da sunayensu suke kama", "magungunan da sunayensu suke kama ko suke kama a furuci, kuma suna da sauƙin rikitawa."], ["Kwalbar ajiya (stock bottle)", "babban kwanon da kantin magani ke ƙirga magani daga cikinsa."]],
          slides: [
            { title: "Ƙananan zamewa, babbar cuta", bullets: ["Mara lafiya ko ƙarfin magani ba daidai ba", "Sunayen magani masu kama da juna", "Kwalbar da ba daidai ba daga shiryayye"] },
            { title: "Abubuwa biyu na tantance mara lafiya", bullets: ["Cikakken suna da ranar haihuwa", "Lokacin karɓa da lokacin bayarwa"] },
            { title: "Ku daidaita NDC", bullets: ["Lambar FDA mai sassa uku: mai yi, magani, kunshi", "Ku duba ta da na'ura ko ku kwatanta da kwamfuta", "Tana tabbatar da magani, ƙarfi da kunshi"] },
            { title: "Ku karanta dukan takardar", bullets: ["Cikakken suna, ƙarfi da irin magani", "Ba haruffan farko kawai ba", "Rashin daidaito? Ku tsaya ku faɗa wa mai haɗa magani"] }
          ],
          sources: [
            { name: "FDA: National Drug Code Directory", url: "https://www.fda.gov/drugs/drug-approvals-and-databases/national-drug-code-directory" }
          ],
          tryIt: "Atisaye kawai. Ku rubuta odar atisaye uku ƙirƙirarru a takarda, kowacce da sunan mara lafiya, ranar haihuwa, magani, ƙarfi da NDC. Ku sa aboki ya kwafe su a matsayin \"takardun kwalbar ajiya\", kuma ya canja abu ɗaya a ɓoye a cikin biyu daga cikinsu. Ku kwatanta kowane biyu kamar yadda kuka koya, ku zagaye kowane rashin daidaito.",
          youCanNow: "bincika odar atisaye da takardar magani ta amfani da abubuwa biyu na tantance mara lafiya da NDC, da nuna kowane rashin daidaito.",
          quickCheck: [
            { objective: "O4", q: "Wane biyu ne abubuwa biyu na tantance mara lafiya?", options: ["Cikakken suna da ranar haihuwa", "Suna da launin da yake so", "Sunan magani da ƙarfinsa", "Irin waya da imel"], answer: 0, why: "Ana yawan amfani da cikakken suna da ranar haihuwa tare don tabbatar da mara lafiyan da ya dace." },
            { objective: "O4", q: "NDC na kwalbar ajiya bai yi daidai da na kwamfuta ba. Me za ku yi?", options: ["Ku cika odar duk da haka; sunan ya kusa", "Ku canja kwamfutar ta yi daidai", "Ku tsaya ku faɗa wa mai haɗa magani", "Ku ba abokin ciniki rangwame"], answer: 2, why: "NDC da bai yi daidai ba yana iya nufin magani, ƙarfi ko kunshin da ba daidai ba, don haka ku tsaya ku nuna shi." }
          ]
        },
        {
          title: "Aikinku, aikin mai haɗa magani da magungunan da ake sarrafawa",
          objectives: ["O5"],
          minutes: 5,
          goal: "Raba ayyukan atisaye zuwa aikin mataimaki ko aikin mai haɗa magani.",
          text: [
            "Mataimaka suna yin aikin fasaha: karɓa da shigar da takardun magani, ƙirga, manna takarda, kula da kayan ajiya, sarrafa inshora, da taimako wajen karɓar kuɗi. Masu haɗa magani suna yin aikin lafiya: binciken ƙarshe, ba da shawara game da yadda ake shan magani, illolin magani (side effects), haɗuwar magunguna (interactions), da kowace tambaya ta \"Shin wannan lafiya ne gare ni?\". Jiharku ce take sanya ainihin iyakar, don haka ku koyi dokokin jiharku.",
            "Doka mai sauƙi: idan abokin ciniki ya yi tambaya game da lafiyarsa ko maganinsa, amsar ita ce \"Bari in kira muku mai haɗa magani.\" Kada ku taɓa ba da shawararku, ko da kuna ganin kun sani.",
            "Magungunan da ake sarrafawa (controlled substances) magunguna ne da hukumar tarayya ta Drug Enforcement Administration (DEA) ta sanya su a rukunoni (Schedules) I zuwa V, bisa amfaninsu na lafiya da aka yarda da shi, da haɗarin amfani da su ba daidai ba da kamuwa da jarabarsu. Magungunan Schedule I ba su da amfani na lafiya da aka yarda da shi a Amurka; na Schedule II suna da babban haɗarin amfani ba daidai ba; haɗarin yana raguwa zuwa Schedule V. Suna da ƙarin dokoki na ajiya, ƙirga, rubuce-rubuce da sake cikawa, kuma jihohi suna iya ƙara wasu.",
            "Don jarabawa, ku san rukunoni biyar ɗin, cewa kantin magani yana ajiye rubutu a hankali na kowane magani da ake sarrafawa, kuma ana faɗa wa mai haɗa magani nan take idan ƙirga ya ragu."
          ],
          steps: ["Ku tambayi: wannan aikin fasaha ne ko tambayar lafiya ce?", "Aikin fasaha: ku yi shi a hankali, bisa ƙa'idar shago da dokokin jiha.", "Tambayar lafiya ko ta magani: ku kira mai haɗa magani.", "Magani da ake sarrafawa: ku bi ƙarin dokokin ƙirga, rubutu da ajiya.", "Duk abin da ya ɓace ko ya yi baƙon abu: ku faɗa wa mai haɗa magani nan take."],
          words: [["Ba da shawara (counseling)", "lokacin da mai haɗa magani yake bayyana wa mara lafiya yadda zai sha magani da abin da zai kula da shi."], ["Magani da ake sarrafawa (controlled substance)", "magani da doka take sarrafawa sosai saboda ana iya amfani da shi ba daidai ba ko ya kawo jaraba."], ["DEA", "Drug Enforcement Administration: hukumar tarayya da ke tilasta dokokin magungunan da ake sarrafawa."], ["Schedule (rukuni)", "ɗaya daga cikin rukunoni biyar (I zuwa V) da ake sanya magungunan da ake sarrafawa a ciki."]],
          slides: [
            { title: "Aikin mataimaki", bullets: ["Shigarwa, ƙirga, manna takarda, ajiya", "Inshora da karɓar kuɗi", "Ana yin su a hankali, bisa dokokin jiha"] },
            { title: "Aikin mai haɗa magani", bullets: ["Binciken ƙarshe da ba da shawara", "Illolin magani da haɗuwar magunguna", "Kowace tambaya ta \"Shin wannan lafiya ne gare ni?\""] },
            { title: "Magungunan da ake sarrafawa", bullets: ["Rukunonin DEA na I zuwa V", "I: babu amfanin lafiya da aka yarda da shi; II: babban haɗarin amfani ba daidai ba", "Ƙarin dokoki na ajiya, ƙirga, rubutu, sake cikawa"] },
            { title: "Ku faɗe shi kowane lokaci", bullets: ["\"Bari in kira muku mai haɗa magani.\"", "Kada ku taɓa ba da shawarar lafiya ta kanku"] }
          ],
          sources: [
            { name: "DEA: Drug scheduling (rukunonin magani)", url: "https://www.dea.gov/drug-information/drug-scheduling" },
            { name: "NABP: Hukumomin magunguna na jihohi (dokokin mataimaka)", url: "https://nabp.pharmacy/about/boards-of-pharmacy/" }
          ],
          tryIt: "Atisaye kawai. Ku raba waɗannan zuwa Mataimaki ko Mai haɗa magani: (1) ƙirga ƙwayoyi don odar da aka cika, (2) wata abokiyar ciniki ta tambaya ko za ta iya shan sabon maganinta tare da ƙwayoyin alerji, (3) ajiye kayan da aka kawo, (4) wani abokin ciniki ya tambaya wane illolin magani zai gani, (5) shigar da sabuwar takardar magani. Amsoshi: 1, 3 da 5 Mataimaki; 2 da 4 Mai haɗa magani. Sannan ku rubuta ainihin kalmomin da za ku faɗa don kai tambaya wurin mai haɗa magani.",
          youCanNow: "bambance aikin mataimaki da aikin mai haɗa magani, kai kowace tambayar lafiya wurin mai haɗa magani, da faɗin rukunoni biyar na magungunan da ake sarrafawa.",
          quickCheck: [
            { objective: "O5", q: "Wani abokin ciniki ya tambaya ko sabon maganinsa lafiya ne tare da barasa. Me za ku ce?", options: ["\"Ya kamata babu matsala.\"", "\"Ku duba a intanet.\"", "\"Kada ku sake shan barasa.\"", "\"Bari in kira muku mai haɗa magani.\""], answer: 3, why: "Tambayoyi game da lafiya da haɗuwar magunguna na lafiya ne; mai haɗa magani ne kaɗai yake amsa su." },
            { objective: "O5", q: "Wace hukumar tarayya ce take sanya magunguna a rukunoni I zuwa V?", options: ["DEA", "Gidan waya", "IRS", "Ofishin motoci na jiha"], answer: 0, why: "DEA ce take tilasta rukunonin magungunan da ake sarrafawa." }
          ]
        },
        {
          title: "Sirri a teburin kantin magani, da shirinku na karatu",
          objectives: ["O6"],
          minutes: 5,
          goal: "Raba bayanan mara lafiya ga mutanen da suke buƙata kaɗai, da abin da suke buƙata kawai.",
          text: [
            "Kantin magani yana riƙe da bayanan lafiya na sirri: sunaye, ranakun haihuwa, magunguna, inshora. HIPAA, dokar tarayya ta sirrin lafiya, tana kare su. Manufarta ta \"minimum necessary\" (ƙaramin abin da ake buƙata) tana nufin ku yi amfani da kuma ku raba abin da ake buƙata don aikin kawai.",
            "A teburin: ku yi magana a hankali, kada ku karanta sunayen magani da ƙarfi har mutanen da ke layi su ji, kuma ku tabbatar da abubuwa biyu na tantancewa kafin ku ba da jakar magani. A waya: ku tabbatar da wanda yake kira kafin ku faɗi komai, kuma ku bi ƙa'idar shago game da wanda zai iya karɓar magani a madadin wani.",
            "Kada ku taɓa saka bayani game da abokan ciniki a intanet, kada ku taɓa duba bayanan maƙwabci ko na shahararren mutum don son sani, kuma ku ɓoye allunan kwamfuta da takardu daga gani. Ku faɗa wa mai haɗa magani ko jami'in sirri (privacy officer) kurakuran sirri nan take.",
            "Yanzu ku yi aikinku na ƙarshe: shirinku na karatu da jarabawa da littafin atisaye."
          ],
          steps: ["Ku tambayi: shin wannan mutumin yana buƙatar wannan bayanin don aikinsa ko kulawarsa?", "Ku raba ƙaramin abin da yake buƙata kawai.", "Ku tabbatar da abubuwa biyu na tantancewa kafin ku ba da magani.", "Ku yi magana a hankali, ku ɓoye allunan kwamfuta da takardu.", "Ku faɗi kurakuran sirri nan take."],
          words: [["HIPAA", "dokar tarayya da ke kare sirri da tsaron bayanan lafiya."], ["PHI", "protected health information: bayanan lafiya da za su iya nuna ko wane ne mutum."], ["Minimum necessary (ƙaramin abin da ake buƙata)", "yin amfani da ko raba bayanin da ake buƙata don aikin kawai."]],
          slides: [
            { title: "HIPAA a kantin magani", bullets: ["Sunaye, ranakun haihuwa, magunguna, inshora", "Ku raba ƙaramin abin da ake buƙata kawai"] },
            { title: "A teburin", bullets: ["Ku yi magana a hankali", "Kada ku karanta sunayen magani da ƙarfi", "Abubuwa biyu na tantancewa kafin ku ba da jaka"] },
            { title: "Kada ku taɓa", bullets: ["Saka bayani game da abokan ciniki a intanet", "Duba bayanan wani don son sani", "Barin allon kwamfuta ko takardu a fili"] },
            { title: "Aikin ƙarshe", bullets: ["Jarabawarku da dokokin jiharku", "Ranakun karatu na kowane mako har ranar jarabawa", "Tare da littafin atisaye"] }
          ],
          sources: [
            { name: "HHS: HIPAA ga ƙwararru (Privacy Rule)", url: "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html" },
            { name: "PTCB: Certified Pharmacy Technician (CPhT)", url: "https://www.ptcb.org/credentials/certified-pharmacy-technician" }
          ],
          tryIt: "Aikin ƙarshe. Ku rubuta shirinku na karatu da jarabawa: jarabawar (PTCE ko ExCPT), abin da hukumar jiharku take buƙata, da ranakun karatu na kowane mako har zuwa ranar jarabawar da kuke so. Ku haɗa littafin atisayenku: takardun magani 5 ƙirƙirarru da kuka karanta kuka bincika, lissafin atisaye 10 tare da yadda kuka yi su, da tambayoyi 5 na abokan ciniki da za ku kai wurin mai haɗa magani. Kada ku yi amfani da ainihin bayanan mara lafiya.",
          youCanNow: "kare sirrin mara lafiya a teburi da a waya, da bin shirinku da kuka rubuta zuwa jarabawar mataimakin mai haɗa magani.",
          quickCheck: [
            { objective: "O6", q: "Wani mai kira ya ce shi maƙwabcin wata abokiyar ciniki ne, kuma ya tambaya wane magani ta karɓa. Me za ku yi?", options: ["Ku faɗa masa; yana nuna kirki ne kawai", "Ku karanta masa jerin maganinta", "Kada ku faɗi komai, ku bi ƙa'idar shago", "Ku faɗa masa magani na farko kawai"], answer: 2, why: "HIPAA tana kare bayananta; maƙwabci ba shi da haƙƙin sanin su." },
            { objective: "O6", q: "Me ke taimakawa wajen kare sirri a teburin?", options: ["Karanta sunayen magani da ƙarfi", "Yin magana a hankali da tabbatar da abubuwa biyu na tantancewa", "Barin jakunkuna a buɗe a kan teburi", "Nuna allon kwamfuta ga mutanen layi"], answer: 1, why: "Magana a hankali da tabbatar da wanene mutum suna kiyaye bayanan lafiya a sirri." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Lafiya, dokoki da sirri",
        questions: [
          { objective: "O4", q: "Me NDC yake nunawa?", options: ["Inshorar mara lafiya", "Lasisin mai haɗa magani", "Adireshin shagon", "Mai yin maganin, maganin da kunshinsa"], answer: 3, why: "NDC lambar FDA ce mai sassa uku ta mai yi, magani da kunshi." },
          { objective: "O4", q: "Abokan ciniki biyu suna da suna iri ɗaya. Ta yaya za ku tabbata kun ba da jakar ga wanda ya dace?", options: ["Ku kuma tambayi ranar haihuwa", "Ku ba wanda ya fara zuwa", "Ku tambayi abin da maganin yake yi", "Ku duba takalmansu"], answer: 0, why: "Abu na biyu na tantancewa kamar ranar haihuwa yana bambance mutanen da ke da suna iri ɗaya." },
          { objective: "O5", q: "Wane aiki ne aikin mai haɗa magani?", options: ["Ajiye kaya a shiryayye", "Ba mara lafiya shawara game da illolin magani", "Karɓar kuɗi", "Ƙirga ƙwayoyi"], answer: 1, why: "Ba da shawara game da illolin magani aikin lafiya ne na mai haɗa magani." },
          { objective: "O5", q: "Ƙirgar wani magani da ake sarrafawa ta ragu. Me za ku yi?", options: ["Ku gyara lambar a rubutun", "Ku ƙyale ta har wata mai zuwa", "Ku faɗa wa mai haɗa magani nan take", "Ku yi odar ƙari a ɓoye"], answer: 2, why: "Magungunan da ake sarrafawa suna da tsauraran rubuce-rubuce; ana faɗin duk ƙirgar da ta ragu nan take." },
          { objective: "O6", q: "Mene ne ma'anar \"minimum necessary\" a kantin magani?", options: ["Amfani da ƙananan jakunkuna", "Cika mafi ƙarancin oda", "Karɓar mafi ƙarancin farashi", "Raba bayanin da ake buƙata don aikin kawai"], answer: 3, why: "Bisa HIPAA, kuna amfani da kuma raba abin da ake buƙata kawai." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Shiri don Zama Mataimakin Mai Haɗa Magani (Pharmacy Technician)",
    questions: [
      { objective: "O1", q: "Cin jarabawar PTCE yana ba da wane suna?", options: ["Certified Pharmacy Technician (CPhT) daga PTCB", "Mai haɗa magani mai rajista (Registered Pharmacist)", "Certified Professional Coder", "Licensed Practical Nurse"], answer: 0, why: "PTCB tana ba da CPhT ga waɗanda suka ci PTCE." },
      { objective: "O1", q: "Dokokin mataimaka sun bambanta a kowace jiha. A ina za ku duba naku?", options: ["Tallar magani", "Hukumar magunguna ta jiharku", "Aboki a wata jiha", "Shafin ɗaukar ma'aikata na DEA"], answer: 1, why: "Kowace hukumar magunguna ta jiha ce take kafa dokokin mataimaka." },
      { objective: "O1", q: "Me wannan kwas yake yi muku?", options: ["Yana yi muku rajista da jiharku", "Yana ba ku CPhT", "Yana shirya ku don jarabawar mataimaki", "Yana ba ku izinin ba marasa lafiya shawara"], answer: 2, why: "Kwas ɗin yana shirya ku; jarabawar da jihar ne suke ba da takardun shaida." },
      { objective: "O2", q: "Wanne BA ya cikin sassan takardar magani da aka saba?", options: ["Sunan mara lafiya", "Ƙarfin magani", "Umarnin sha (sig)", "Shagon da mara lafiya ya fi so"], answer: 3, why: "Takardar magani tana da mara lafiya, magani, ƙarfi, irin magani, sig, yawa, refills, rana da wanda ya rubuta." },
      { objective: "O2", q: "A atisaye, \"hs\" a kan takardar magani yana nufin:", options: ["Lokacin kwanciya barci", "Ta baki", "Idan ana buƙata", "Sau huɗu a rana"], answer: 0, why: "hs yana nufin lokacin kwanciya barci." },
      { objective: "O2", q: "Me yasa \"QD\" yake cikin jerin kalmomin da kada a yi amfani da su?", options: ["Ya yi tsawo sosai", "Ana iya karanta shi a matsayin QID (sau huɗu a rana)", "Yana nufin ta baki", "Sunan magani ne"], answer: 1, why: "An taɓa ɗaukar QD a matsayin QID; rubuta \"daily\" (kowace rana) yana hana kuskuren." },
      { objective: "O2", q: "Atisaye kawai: \"Drug X 2 tabs po bid\" da kalmomi masu sauƙi shi ne:", options: ["Ku sha ƙwaya 2 lokacin kwanciya barci", "Ku sha ƙwaya 1 sau biyu a rana", "Ku sha ƙwaya 2 ta baki sau biyu a rana", "Ku sha ƙwaya 2 kowace awa 2"], answer: 2, why: "po yana nufin ta baki, bid kuma yana nufin sau biyu a rana." },
      { objective: "O3", q: "Atisaye kawai: cokali ƙarami 1 (tsp) milliliter nawa ne?", options: ["1 mL", "15 mL", "30 mL", "5 mL"], answer: 3, why: "1 tsp = 5 mL." },
      { objective: "O3", q: "Atisaye kawai: Drug X, kafsul 1 sau 4 a rana, kafsul 120. Kwanakin magani?", options: ["Kwana 30", "Kwana 40", "Kwana 120", "Kwana 4"], answer: 0, why: "120 ÷ 4 a rana = kwana 30." },
      { objective: "O3", q: "Atisaye kawai: gram 3 milligram nawa ne?", options: ["30 mg", "300 mg", "3,000 mg", "0.003 mg"], answer: 2, why: "1 g = 1,000 mg, don haka 3 g = 3,000 mg." },
      { objective: "O3", q: "Atisaye kawai: 176 lb kusan kilogram nawa ne?", options: ["80 kg", "88 kg", "176 kg", "387 kg"], answer: 0, why: "176 ÷ 2.2 = 80 kg." },
      { objective: "O4", q: "Me yasa ake daidaita NDC da ke kan kwalbar ajiya?", options: ["Don nemo farashi", "Don tabbatar da magani, ƙarfi da kunshin da suka dace", "Don nemo adireshin mara lafiya", "Ba a buƙata"], answer: 1, why: "NDC yana nuna ainihin magani da kunshinsa." },
      { objective: "O4", q: "Magunguna biyu suna da sunaye da suka fara iri ɗaya. Me ke kare mara lafiya?", options: ["Karanta haruffan farko kawai", "Ɗaukar kwalbar da ta fi kusa da ku", "Tambayar abokin ciniki ya zaɓa", "Karanta cikakken suna, ƙarfi da irin magani"], answer: 3, why: "Ana kama sunayen da suke kama da juna ta hanyar karanta dukan takardar." },
      { objective: "O4", q: "Kun ga rashin daidaito tsakanin odar da kwalbar. Me za ku yi?", options: ["Ku tsaya ku nuna shi ga mai haɗa magani", "Ku gama da sauri ku yi fata", "Ku gyara takardar magani da kanku", "Ku jefar da kwalbar"], answer: 0, why: "Duk wani rashin daidaito yana dakatar da aikin har sai mai haɗa magani ya duba." },
      { objective: "O5", q: "Wata abokiyar ciniki ta tambaya ko magungunanta biyu lafiya ne tare. Wa zai amsa?", options: ["Mataimaki", "Wani abokin ciniki", "Mai haɗa magani", "Mai karɓar kuɗi"], answer: 2, why: "Tambayoyin haɗuwar magunguna na lafiya ne kuma suna zuwa wurin mai haɗa magani." },
      { objective: "O5", q: "Magungunan da ake sarrafawa na Schedule I su ne:", options: ["Magungunan da ke da mafi ƙarancin haɗarin amfani ba daidai ba", "Magungunan da ba su da amfanin lafiya da aka yarda da shi a Amurka", "Bitamin", "Dukan magungunan da ake bayarwa da takardar magani"], answer: 1, why: "Magungunan Schedule I ba su da amfanin lafiya da aka yarda da shi a Amurka, kuma suna da babban haɗarin amfani ba daidai ba." },
      { objective: "O5", q: "Wanne ne aikin mataimaki?", options: ["Ba da shawara game da illolin magani", "Yin binciken ƙarshe", "Ba da shawara game da haɗuwar magunguna", "Shigar da sabuwar takardar magani a kwamfuta"], answer: 3, why: "Shigar da takardun magani aikin fasaha ne; mai haɗa magani yana dubawa yana ba da shawara." },
      { objective: "O6", q: "Wace doka ce take kare bayanan lafiya na mara lafiya?", options: ["HIPAA", "OSHA", "The Clean Air Act (dokar iska mai tsabta)", "Dokar haraji"], answer: 0, why: "HIPAA tana kare sirrin bayanan lafiya." },
      { objective: "O6", q: "Wani shahararren mutum ya karɓi magani a shagonku. Me za ku yi?", options: ["Ku duba bayanansa ku ga abin da yake sha", "Ku saka a intanet cewa ya zo", "Ku kula da shi kamar kowane abokin ciniki, kada ku faɗi komai", "Ku faɗa wa abokanku"], answer: 2, why: "Duba ko raba bayanan wani ba tare da dalilin aiki ba ya saɓa wa dokokin HIPAA." },
      { objective: "O6", q: "Kun lura cewa abokin aikinku ya bar takardun wani abokin ciniki a kan teburi. Me za ku yi?", options: ["Ku bar su", "Ku karanta su", "Ku ba abokin ciniki na gaba", "Ku ɓoye su daga gani ku faɗa wa mai haɗa magani"], answer: 3, why: "Ku kare bayanin kuma ku faɗi kuskuren sirrin." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 3, 4, 7, 8, 11, 14, 15, 17] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Shirin karatu da jarabawa", objective: "O1", notYet: "Ba a faɗi jarabawa ba, ko dokokin jihar sun ɓace ko an yi tsammani ne.", meets: "Ya faɗi jarabawar da wanda yake ba da ita, buƙatar hukumar jiha tare da adireshin shafinta, da ranakun kowane mako har ranar jarabawa.", exceeds: "Ya kuma faɗi shirin horo da yadda mai koyo zai cika sharuɗɗan cancantar jarabawar." },
      { name: "Takardun magani da aka karanta", objective: "O2", notYet: "Ƙasa da takardun magani 4 cikin 5 aka karanta daidai, ko ba a nuna sashin da ya ɓace ba.", meets: "Aƙalla takardun magani 4 cikin 5 na atisaye an faɗi dukan sassansu, kuma an rubuta umarni da kalmomi masu sauƙi.", exceeds: "Dukan 5 daidai suke, kuma an gano kowace gajartawa mai kawo kuskure." },
      { name: "Lissafin atisaye", objective: "O3", notYet: "Ƙasa da 8 cikin 10 daidai, ko ba a nuna yadda aka yi ba.", meets: "Aƙalla lissafin atisaye 8 cikin 10 daidai, tare da ma'auni da yadda aka yi.", exceeds: "10 cikin 10 daidai, tare da rubutaccen binciken ma'ana ga kowace amsa." },
      { name: "Binciken lafiya", objective: "O4", notYet: "An rasa wani rashin daidaito da aka ɓoye.", meets: "An zagaye kowane rashin daidaito da aka ɓoye a suna, ƙarfi ko NDC.", exceeds: "Ya bayyana yadda kowane rashin daidaito zai iya cutar da mara lafiya." },
      { name: "Tambayoyin mai haɗa magani", objective: "O5", notYet: "Yana ba da shawararsa kan tambayar lafiya.", meets: "Ya jera tambayoyi 5 na abokan ciniki da ke zuwa wurin mai haɗa magani, da kalmomin da zai yi amfani da su don kai su.", exceeds: "Ya kuma bayyana ƙarin dokokin magungunan da ake sarrafawa." },
      { name: "Sirri", objective: "O6", notYet: "Yana amfani da ainihin bayanan mara lafiya a ko'ina a littafin atisaye.", meets: "Yana amfani da bayanai ƙirƙirarru kawai.", exceeds: "Ya jera ɗabi'u uku a teburi ko a waya da ke kare sirri." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka shiga shirin horon mataimakin mai haɗa magani ko suka yi rajista da hukumar jiharsu cikin kwanaki 90",
      "Masu koyo da suka ci PTCE ko ExCPT (bisa abin da suka faɗa)",
      "Masu koyo da aka ɗauka aiki a matsayin mataimakan mai haɗa magani ko masu koyon aikin cikin watanni 6"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai intanet don shafukan PTCB, NHA, NABP da hukumar jiha",
      "Takarda, alƙalami da na'urar lissafi mai sauƙi",
      "Takardun magani ƙirƙirarru da takardun kwalbar ajiya da aka buga don atisayen binciken lafiya",
      "Kusan minti 75 gaba ɗaya, a gajerun zama"
    ],
    facilitatorNotes: [
      "Ku sa kowane magani da kowace lamba su zama ƙirƙirarru; kada ku amsa tambayoyin masu koyo game da magungunansu. Ku tura su wurin mai haɗa maganinsu.",
      "Ku buga shafin mataimaka na hukumar magunguna ta jiharku don ƙungiyar ta ga ainihin dokokinta.",
      "Ku ɓoye rashin daidaito (suna, ƙarfi, NDC) a cikin takardun atisaye, ku bar ma'aurata su nemo su.",
      "Ku sa masu koyo su faɗi \"Bari in kira muku mai haɗa magani\" da babbar murya a wasan kwaikwayo.",
      "Masu koyo da ke da tarihin laifi: ku faɗa musu su karanta dokokin PTCB, NHA da hukumar jiharsu game da bayyana tarihin laifi kafin su biya kuɗin horo.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
