"use strict";

// Koach Learn course, Hausa (ha) translation of shared/medical-billing-coding.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.
// Codes in this course are practice examples only: code sets change every year.

module.exports = {
  id: "medical-billing-coding-ha",
  lang: "ha",
  translationOf: "medical-billing-coding",
  category: "Workforce Development",
  name: "Tushen Lissafin Kuɗin Asibiti da Rubuta Lambobin Lafiya (Medical Billing and Coding)",
  skills: "Zaɓar takardar shaidar billing da coding, Bin zagayen lissafin kuɗi, Zaɓar rukunin lambobi da ya dace, Neman lamba ta hanyar da ta dace, Cike takardar neman biya ta atisaye, Kare sirrin mara lafiya (HIPAA)",
  outcome: "mayar da ziyarar likita ta ƙirƙira zuwa cikakkiyar takardar neman biya (claim) ta atisaye: zaɓar lambobin cuta da na aikin da aka yi da suka dace, cike manyan akwatunan fom ɗin claim, duba shi kafin a aika, da kiyaye bayanan mara lafiya a sirri.",
  about: [
    "Masu billing da coding a fannin lafiya suna mayar da ziyarar likita zuwa lambobi da takardar neman biya (claim), domin kamfanin inshora ya biya ofishin likitan. Yawancin waɗannan ayyuka a ofis ake yin su, wasu kuma daga gida. Wannan kwas mataki na farko ne ga masu neman aiki, tsoffin sojoji, masu dawowa gida daga gidan yari, da manya da ke sauya sana'a.",
    "Za ku koyi mene ne aikin, waɗanne takardun shaida (certification) masu ɗaukar aiki suke nema (kamar CBCS daga NHA, CPC daga AAPC da CCA daga AHIMA), yadda lissafin kuɗi yake tafiya daga shigar mara lafiya zuwa biya, manyan rukunonin lambobi uku, yadda ake neman lamba ta hanyar da ta dace, yadda ake cike claim na atisaye, da yadda ake kare sirrin mara lafiya ƙarƙashin dokar HIPAA.",
    "Wannan kwas yana shirya ku ne. Ba ya ba ku takardar shaida. Kowace takardar shaida tana da nata ƙa'idoji, horo, kuɗi da jarabawa, don haka za ku duba su a shafin hukuma. Duk marasa lafiya da ziyarori a wannan kwas ƙirƙirarru ne, kuma lambobin na atisaye ne kawai: lambobi suna canjawa kowace shekara, don haka ainihin mai coding koyaushe yana amfani da littafin lambobi na yanzu.",
    "Kowane darasi yana ɗaukar kusan minti biyar kuma yana ƙarewa da aikin \"Gwada yanzu\" a takarda ko a spreadsheet kyauta. Akwai ɗan gwaji bayan kowane darasi, gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku mayar da ziyarar ƙirƙira ta Darasi na 6 zuwa cikakken claim na atisaye: ku rubuta lambar cutar da lambobin aikin da aka yi, ku cike manyan akwatunan fom ɗin claim 1500 na atisaye (a takarda ko a spreadsheet), ku duba shi da jerin bincikenku kafin aikawa, sannan ku rubuta tsari mai shafi ɗaya da ke ambaton takardar shaidar da za ku nema, inda za ku yi horo, da ranar da kuke son yin jarabawa.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya da ke neman aikin ofis mai ɗorewa a fannin lafiya: masu neman aiki, tsoffin sojoji, masu dawowa gida daga gidan yari, matasa, baƙi (immigrants) da manya da ke komawa karatu. Da yawa ba su taɓa aiki a ofishin likita ba. Wasu suna son aiki daga gida.",
    startingPoint: "Suna iya karatu da rubutun Turanci na yau da kullum, kuma suna iya amfani da waya ko kwamfutar ɗakin karatu. Yawancinsu ba su san kalmomin likitanci, rukunonin lambobi, kalmomin inshora ko yadda ake biyan claim ba.",
    gap: "Ayyukan billing da coding suna neman takardar shaida da ƙwarewa ta asali tun ranar farko: sanin zagayen lissafin kuɗi, zaɓar rukunin lambobi da ya dace, neman lambobi a hankali, cike claim da kiyaye bayanan lafiya a sirri. Masu koyo suna buƙatar taswira bayyananniya ta aikin da takardun shaida, da atisaye a kowane mataki, kafin su biya kuɗin shirin horo ko jarabawa.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; ana bayanin kowace kalmar likitanci da ta inshora",
      "Na'urori: waya ko kwamfutar ɗakin karatu; takarda tana aiki don kowane aiki",
      "Littattafan lambobi da wasu kayan coding suna da kuɗi; kwas ɗin yana amfani da kayan hukuma kyauta da misalai ƙirƙirarru",
      "Lambobi suna canjawa kowace shekara: kowace lamba da aka nuna ta atisaye ce kawai",
      "Sirri: babu bayanan mara lafiya na gaske a ko'ina a cikin kwas ɗin",
      "Wasu takardun shaida suna tambaya game da tarihin mutum; masu koyo su duba ƙa'idojin kowane shiri da kansu"
    ],
    prerequisites: "Babu. Kwasoshin \"Excel and Spreadsheets\" (Excel da Spreadsheet) da \"Health Literacy\" (Fahimtar Bayanan Lafiya) suna taimakawa amma ba dole ba ne."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Ta amfani da shafukan hukuma na NHA, AAPC da AHIMA", action: "kwatanta takardun shaida uku na billing da coding da rubuta tsarin karatu da jarabawa mai ranaku", standard: "an duba sharuɗɗan a shafin hukuma, ba a yi hasashe ba" },
    { id: "O2", condition: "Idan aka ba ku matakan ziyarar likita ba bisa tsari ba", action: "jera matakan zagayen lissafin kuɗi bisa tsari, daga sa lokacin ganin likita zuwa biya", standard: "ba tare da wani mataki ya ɓace ba" },
    { id: "O3", condition: "Idan aka ba ku sassa biyar na ziyara ƙirƙirarriya", action: "haɗa kowane sashe da rukunin lambobi da ya dace: ICD-10-CM don cutar, CPT don aikin likita, HCPCS Level II don kayayyaki", standard: "kuna samun aƙalla 4 cikin 5 daidai" },
    { id: "O4", condition: "Idan aka ba ku cuta daga rubutun ziyara ƙirƙirarre", action: "neman lambar cuta ta hanyar samun kalmar a cikin index sannan tabbatar da ita a jerin lambobi", standard: "kowane lokaci, ba tare da taɓa rubuta lamba daga index kaɗai ba" },
    { id: "O5", condition: "Idan aka ba ku ziyara ƙirƙirarriya da fom ɗin claim na atisaye marar komai", action: "cike manyan akwatunan claim da gano dalilin da yasa aka ƙi biyan claim na atisaye", standard: "mara lafiya, inshora, lambobi da kuɗaɗe sun yi daidai da ziyarar" },
    { id: "O6", condition: "A yanayoyin atisaye na wurin aiki", action: "raba bayanan mara lafiya ga mutanen da suke buƙatarsu kaɗai, kuma mafi ƙarancin abin da suke buƙata kawai", standard: "a kowane yanayi, bisa dokar HIPAA" }
  ],
  chapters: [
    {
      name: "Babi na 1: Aikin, takardun shaida da lambobi",
      lessons: [
        {
          title: "Aikin da takardun shaidar da masu ɗaukar aiki suke nema",
          objectives: ["O1"],
          minutes: 5,
          goal: "Kwatanta takardun shaida uku na billing da coding ku zaɓi ɗaya da za ku nema.",
          text: [
            "Mai coding (medical coder) yana karanta rubutun likita ya mayar da cutar da ayyukan da aka yi zuwa lambobi. Mai billing (medical biller) yana amfani da waɗannan lambobi don aika claim zuwa kamfanin inshora, kuma yana bin sa har a biya. A ƙananan ofisoshi, sau da yawa mutum ɗaya ne yake yin duka biyun.",
            "Masu ɗaukar aiki sau da yawa suna neman takardar shaida. Guda uku da aka saba gani: Certified Billing and Coding Specialist (CBCS) daga NHA, wato National Healthcareer Association; Certified Professional Coder (CPC) daga AAPC; da Certified Coding Associate (CCA) daga AHIMA, wato American Health Information Management Association.",
            "Kowacce tana da nata ƙa'idoji. Misali, CBCS na NHA yana neman takardar kammala sakandare ko GED, tare da shirin horo ko ƙwarewar aiki ƙarƙashin kulawa. Kuɗi, ƙa'idojin jarabawa da sharuɗɗa suna canjawa, don haka ku karanta shafin hukuma na kowacce kafin ku biya komai. Wannan kwas yana shirya ku; ba ya ba ku takardar shaida.",
            "Ku yi hankali da shirye-shiryen da ke alƙawarin aiki ko takardar shaida cikin 'yan kwanaki. Ku tambayi kowace makaranta wace jarabawar takardar shaida take shirya ku don ita, sannan ku duba wannan jarabawar a shafin hukuma."
          ],
          steps: ["Ku buɗe shafin hukuma na CBCS (nhanow.com), CPC (aapc.com) da CCA (ahima.org).", "Ga kowacce, ku rubuta wanda yake bayarwa, abin da kuke buƙata kafin jarabawa, da yadda ake yin jarabawar.", "Ku duba tallace-tallacen neman ma'aikata kusa da ku, ku ƙirga wace takardar shaida suka fi nema.", "Ku zaɓi ɗaya da za ku nema, ku rubuta watan da kuke son yin jarabawar."],
          words: [["Mai coding (medical coder)", "mutumin da ke mayar da rubutun likita zuwa lambobi na ƙa'ida."], ["Mai billing (medical biller)", "mutumin da ke aika claim ga kamfanonin inshora yana bin su har a biya."], ["Takardar shaida (certification)", "shaida daga ƙungiyar jarabawa cewa kun ci jarabawarta; ana kuma kiranta credential."], ["Claim", "takardar neman biya da ake aika wa kamfanin inshora don ya biya kuɗin ziyara."]],
          slides: [
            { title: "Mai coding da mai billing", bullets: ["Mai coding: yana mayar da rubutun likita zuwa lambobi", "Mai billing: yana aika claim yana bin sa har a biya", "Ƙananan ofisoshi: sau da yawa mutum ɗaya yana yin duka biyun"] },
            { title: "Takardun shaida uku da aka saba gani", bullets: ["CBCS daga NHA", "CPC daga AAPC", "CCA daga AHIMA"] },
            { title: "Ku duba kafin ku biya", bullets: ["Ƙa'idoji, kuɗi da jarabawa suna canjawa", "Ku karanta kowane shafin hukuma", "Wannan kwas yana shirya ku; ba takardar shaida ba ne"] },
            { title: "Ku zaɓi hanyarku", bullets: ["Ku ƙirga abin da tallace-tallacen aiki na yankinku suke nema", "Ku zaɓi takardar shaida ɗaya", "Ku rubuta watan da za ku yi jarabawa"] }
          ],
          sources: [
            { name: "NHA: Certified Billing and Coding Specialist (CBCS)", url: "https://www.nhanow.com/certifications/billing-coding" },
            { name: "AAPC: Certified Professional Coder (CPC)", url: "https://www.aapc.com/certifications/cpc" },
            { name: "AHIMA: Certified Coding Associate (CCA)", url: "https://www.ahima.org/certification-careers/certifications-overview/cca/" }
          ],
          tryIt: "Ku yi tebur mai ginshiƙai uku a takarda ko a spreadsheet: CBCS, CPC, CCA. Ga kowacce, ku rubuta wanda yake bayarwa da abin da kuke buƙata kafin jarabawa, daga shafin hukuma. Sannan ku duba tallace-tallacen aiki biyar na yankinku, ku zagaye takardar shaidar da za ku nema.",
          youCanNow: "faɗin abin da masu billing da coding suke yi, ambaci takardun shaida uku da waɗanda suke bayar da su, da zaɓar ɗaya da za ku nema.",
          quickCheck: [
            { objective: "O1", q: "Wane ne yake bayar da takardar shaidar CPC?", options: ["Ofishin likitan da kuke aiki", "AAPC", "Ofishin motoci na jiharku", "Kowace makarantar intanet"], answer: 1, why: "Certified Professional Coder (CPC) takardar shaida ce ta AAPC." },
            { objective: "O1", q: "Wani shafin intanet ya ce za ku zama mai coding mai takardar shaida cikin kwana uku da ɗan kuɗi kaɗan. Me za ku fara yi?", options: ["Ku biya da sauri kafin farashi ya hau", "Ku faɗa wa masu ɗaukar aiki cewa kuna da takardar shaida", "Ku duba ƙa'idojin ainihin jarabawar a shafin hukuma", "Ku bar horo; shafin ya isa"], answer: 2, why: "Ƙungiyar da ke bayar da takardar shaidar ce kaɗai za ta iya faɗa muku ainihin ƙa'idojinta da jarabawarta." }
          ]
        },
        {
          title: "Yadda lissafin kuɗi yake tafiya: zagayen billing",
          objectives: ["O2"],
          minutes: 5,
          goal: "Jera matakan zagayen lissafin kuɗi bisa tsari, daga sa lokaci zuwa biya.",
          text: [
            "Zagayen lissafin kuɗi (billing cycle), wanda ake kuma kira revenue cycle, shi ne hanya daga lokacin da mara lafiya ya sa lokacin ganin likita har zuwa lokacin da aka biya ofishin gaba ɗaya.",
            "Manyan matakai: 1) A sa lokacin ziyara a duba inshora. 2) A karɓi mara lafiya (check-in): a tabbatar da sunansa, ranar haihuwarsa da katin inshorarsa. 3) Likita ya ga mara lafiya ya rubuta bayani. 4) Mai coding ya mayar da bayanin zuwa lambobi. 5) Mai billing ya yi claim ya duba shi. 6) A aika claim ga kamfanin inshora. 7) Kamfanin inshora ya biya, ko ya biya wani ɓangare, ko ya ƙi, ya kuma aiko da bayani. 8) Ofishin ya karɓi kuɗin da mara lafiya ke bi, kamar copay, ya kuma bi duk abin da ba a biya ba.",
            "Kurakurai a farkon zagaye suna kawo matsala daga baya. Lambar inshora da aka rubuta ba daidai ba a lokacin check-in tana iya sa a ƙi claim bayan makonni. Shi yasa check-in a hankali yake da muhimmanci kamar coding a hankali."
          ],
          steps: ["A sa lokaci a duba inshora.", "A karɓi mara lafiya a tabbatar da bayanansa.", "Likita ya ga mara lafiya ya rubuta bayani.", "A yi coding na ziyarar.", "A yi claim a duba shi.", "A aika claim.", "A karanta biyan ko ƙin biyan.", "A karɓi kason mara lafiya a bi abin da ya rage."],
          words: [["Zagayen billing (revenue cycle)", "dukkan matakai daga sa lokacin ziyara har zuwa an biya gaba ɗaya."], ["Copay", "ƙayyadadden kuɗi da mara lafiya yake biya don ziyara."], ["Deductible", "kuɗin da mara lafiya yake biya kowace shekara kafin inshora ta fara biyan ayyuka da yawa."], ["Mai biya (payer)", "kamfanin inshora ko shirin gwamnati da ke biyan claim."], ["Ƙin biya (denial)", "lokacin da mai biya ya ƙi biyan claim."]],
          slides: [
            { title: "Daga sa lokaci zuwa biya", bullets: ["Ana kiransa billing cycle ko revenue cycle", "Kowane mataki yana shafar samun biya"] },
            { title: "Farkon zagaye", bullets: ["1. A sa lokaci a duba inshora", "2. Check-in: suna, ranar haihuwa, katin inshora", "3. Likita ya ga mara lafiya ya rubuta bayani"] },
            { title: "Tsakiyar zagaye", bullets: ["4. A yi coding na ziyarar", "5. A yi claim a duba shi", "6. A aika shi ga mai biya"] },
            { title: "Ƙarshen zagaye", bullets: ["7. Mai biya ya biya, ya biya wani ɓangare, ko ya ƙi", "8. A karɓi kason mara lafiya a bi abin da ya rage", "Kurakuran farko suna kawo ƙin biya daga baya"] }
          ],
          tryIt: "Ku rubuta matakai takwas na zagayen billing a ƙananan takardu takwas. Ku cakuɗa su, sannan ku sake jera su bisa tsari ba tare da kallo ba. Kusa da kowane mataki, ku rubuta kuskure ɗaya da zai iya faruwa a wurin, misali suna da aka rubuta ba daidai ba a lokacin check-in.",
          youCanNow: "jera matakan zagayen billing bisa tsari, da faɗin yadda kuskuren farko zai iya kawo ƙin biya daga baya.",
          quickCheck: [
            { objective: "O2", q: "Wane mataki ne yake zuwa nan take bayan mai coding ya mayar da bayani zuwa lambobi?", options: ["Sa lokacin ziyara", "Karɓar mara lafiya (check-in)", "Mai biya ya aiko da biya", "Mai billing ya yi claim ya duba shi"], answer: 3, why: "Coding yana zuwa da farko; sannan mai billing ya yi claim daga waɗannan lambobi ya duba shi." },
            { objective: "O2", q: "A lokacin check-in, an rubuta lambar inshorar mara lafiya ba daidai ba. Mene ne mafi yiwuwar sakamako?", options: ["Ana iya ƙin claim daga baya", "Babu komai; mai coding zai gani", "Za a biya likita da sauri", "Copay ɗin mara lafiya zai ragu"], answer: 0, why: "Mai biya yana kwatanta claim da bayanan membobinsa; lambar da ba daidai ba sau da yawa tana kawo ƙin biya." }
          ]
        },
        {
          title: "Rukunonin lambobi uku",
          objectives: ["O3"],
          minutes: 6,
          goal: "Haɗa kowane sashe na ziyara da rukunin lambobi da ya dace.",
          text: [
            "Claim yana amsa tambayoyi biyu: me yasa mara lafiya ya zo, kuma me ofishin ya yi? Rukunonin lambobi daban-daban ne suke amsa kowacce.",
            "Lambobin ICD-10-CM suna faɗin ME YASA: cutar, alamarta ko abin da mara lafiya yake ji. Suna farawa da harafi, sannan lambobi, kuma wani lokaci suna da digo, misali I10 don hawan jini da ba a san dalilinsa ba (misalin atisaye). A Amurka, cibiyar National Center for Health Statistics (NCHS) ta CDC ce ke kula da ICD-10-CM.",
            "Lambobin CPT suna faɗin ME likita ko wani ƙwararre ya yi: ziyarar ofis, gwajin lab, ko wani aiki (procedure). Lambobi biyar ne, misali 36415 don ɗiban jini daga jijiya (misalin atisaye). American Medical Association (AMA) ce ta mallaki CPT kuma take sabunta shi. CMS tana kiran CPT \"HCPCS Level I\".",
            "Lambobin HCPCS Level II suna rufe abubuwan da CPT ba ya rufewa, kamar kayayyaki, na'urori da motar asibiti (ambulance). Harafi ɗaya ne da lambobi huɗu. CMS (Centers for Medicare & Medicaid Services) ce ke kula da su. Ana sabunta dukkan rukunonin lambobi kowace shekara, don haka koyaushe ku yi amfani da littafi ko kayan aiki na yanzu."
          ],
          words: [["Cuta (diagnosis)", "matsalar lafiya da likita ya gano ko yake magani."], ["ICD-10-CM", "rukunin lambobi na cututtuka a Amurka."], ["CPT", "rukunin lambobi biyar na AMA don ayyuka da procedure; ana kuma kiransa HCPCS Level I."], ["HCPCS Level II", "rukunin lambobi na CMS don kayayyaki, na'urori da sauran abubuwan da CPT ba ya rufewa; harafi ɗaya da lambobi huɗu."], ["CMS", "Centers for Medicare & Medicaid Services, hukumar gwamnatin tarayya ta Amurka da ke gudanar da Medicare kuma take aiki da jihohi kan Medicaid."]],
          slides: [
            { title: "Tambayoyi biyu da kowane claim yake amsawa", bullets: ["ME YASA mara lafiya ya zo? (cuta)", "ME ofishin ya yi? (aiki ko kaya)"] },
            { title: "ICD-10-CM: me yasa", bullets: ["Cututtuka, alamomi da abin da ake ji", "Harafi + lambobi, sau da yawa da digo: I10", "NCHS ta CDC ce ke kula da shi a Amurka"] },
            { title: "CPT: me aka yi", bullets: ["Ayyukan likitoci da sauran ƙwararru", "Lambobi biyar: 36415 (misalin atisaye)", "Na AMA ne; ana kuma kiransa HCPCS Level I"] },
            { title: "HCPCS Level II: kayayyaki da ƙari", bullets: ["Kayayyaki, na'urori, motar asibiti", "Harafi ɗaya + lambobi huɗu", "CMS ce ke kula da shi; duk rukunonin suna canjawa kowace shekara"] }
          ],
          sources: [
            { name: "CDC NCHS: ICD-10-CM", url: "https://www.cdc.gov/nchs/icd/icd-10-cm/index.html" },
            { name: "CMS: HCPCS (Level I is CPT, Level II is kept by CMS)", url: "https://www.cms.gov/medicare/coding-billing/healthcare-common-procedure-system" }
          ],
          tryIt: "Atisaye kawai. Ga wannan ziyara ƙirƙirarriya, ku rubuta rukunin lambobi na kowane sashe: (1) ciwon maƙogwaro, (2) ziyarar ofis wurin likita, (3) gwajin strep na gaggawa, (4) hawan jini, (5) sandunan guragu (crutches) guda biyu da mara lafiya ya tafi da su gida. Amsoshi: 1 da 4 ICD-10-CM ne, 2 da 3 CPT ne, 5 HCPCS Level II ne.",
          youCanNow: "faɗin wane rukunin lambobi ne yake amsa me yasa mara lafiya ya zo da wanda yake amsa me aka yi, da haɗa sassan ziyara da ICD-10-CM, CPT ko HCPCS Level II.",
          quickCheck: [
            { objective: "O3", q: "Wane rukunin lambobi kuke amfani da shi don cutar mara lafiya?", options: ["CPT", "HCPCS Level II", "ICD-10-CM", "Lambar akwatin gidan waya (zip code)"], answer: 2, why: "Lambobin ICD-10-CM suna faɗin me yasa mara lafiya ya zo: cutar, alamarta ko abin da yake ji." },
            { objective: "O3", q: "Mara lafiya ya tafi gida da sandar tafiya mai ƙafafu (walker). Wane rukunin lambobi ne yawanci yake rufe walker?", options: ["HCPCS Level II", "ICD-10-CM", "CPT", "Ba a buƙatar lamba"], answer: 0, why: "Na'urori da kayayyakin da CPT ba ya rufewa suna amfani da lambobin HCPCS Level II." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Aikin, takardun shaida da lambobi",
        questions: [
          { objective: "O1", q: "Wace takardar shaida NHA take bayarwa don billing da coding?", options: ["CPC", "CCA", "CDL", "CBCS"], answer: 3, why: "Takardar shaidar billing da coding ta NHA ita ce Certified Billing and Coding Specialist (CBCS)." },
          { objective: "O2", q: "Mene ne zagayen billing?", options: ["Matakai daga sa lokacin ziyara har zuwa an biya gaba ɗaya", "Keken hawa na ma'aikatan ofis", "Jadawalin likita na kullum", "Tsarin lambobi a kan claim"], answer: 0, why: "Zagayen billing (revenue cycle) yana farawa daga sa lokaci har zuwa biya na ƙarshe." },
          { objective: "O2", q: "Mai biya ya biya wani ɓangare na claim. Mene ne yawanci mataki na gaba?", options: ["A goge claim ɗin", "A karɓi kason mara lafiya a bi abin da ya rage", "A canja cutar", "A sa sabon lokacin ziyara"], answer: 1, why: "Bayan kason mai biya, ofishin yana karɓar kason mara lafiya, kamar copay ko deductible." },
          { objective: "O3", q: "Wanne ne siffar lambar CPT?", options: ["Harafi ɗaya da lambobi huɗu", "Harafi, lambobi da digo", "Lambobi biyar", "Kalma mai haruffa goma"], answer: 2, why: "Lambobin CPT lambobi biyar ne; ICD-10-CM yana farawa da harafi, HCPCS Level II kuma harafi ne da lambobi huɗu." },
          { objective: "O3", q: "Wane ne yake kula da ICD-10-CM a Amurka?", options: ["National Center for Health Statistics ta CDC", "American Medical Association", "Kowane ofishin likita", "Mai ɗaukar mara lafiya aiki"], answer: 0, why: "NCHS ta CDC ce ke kula da nau'in ICD-10 na Amurka, wanda ake kira ICD-10-CM." }
        ]
      }
    },
    {
      name: "Babi na 2: Lambobi, claim da sirri",
      lessons: [
        {
          title: "Neman lamba ta hanyar da ta dace",
          objectives: ["O4"],
          minutes: 5,
          goal: "Neman lambar cuta a cikin index da tabbatar da ita a jerin lambobi.",
          text: [
            "ICD-10-CM yana da manyan sassa biyu. Alphabetic index (jerin haruffa) yana jera cututtuka da sunansu, kamar index na littafi. Tabular list (jerin lambobi) yana nuna kowace lamba bisa tsari, tare da bayanin lokacin da za a yi amfani da ita da lokacin da ba za a yi ba.",
            "Ƙa'idar da masu coding suke bi: ku fara samun babbar kalma a cikin index, sannan koyaushe ku tabbatar da lambar a tabular list. Kada ku taɓa rubuta lamba daga index kaɗai, domin tabular list yana iya cewa a ƙara harafi ko lamba, ko a yi amfani da wata lambar daban.",
            "Ku nemi cutar, ba sashen jiki ba. Don \"acute sore throat\" (ciwon maƙogwaro mai tsanani), babbar kalmar ita ce pharyngitis (kalmar likitanci don maƙogwaro mai ciwo da kumburi). Sannan ku karanta bayanai a tabular list kafin ku zaɓi lambar. CPT ma yana da nasa index da jerin lambobi, kuma yana aiki haka.",
            "Atisaye kyauta: ICD-10-CM Browser Tool na CDC yana ba ku damar bincika rukunin lambobin a intanet. A aiki na gaske, kuna amfani da littafin lambobi na yanzu ko kayan aikin da mai ɗaukar ku aiki ya biya, tare da rubutun likita, ba hasashe ba."
          ],
          steps: ["Ku karanta rubutun likita ku nemo cutar.", "Ku nemo babbar kalmar cutar a cikin alphabetic index.", "Ku rubuta lambar da index ya nuna.", "Ku je wannan lambar a tabular list.", "Ku karanta bayanan: \"includes\", \"excludes\", da ko ana buƙatar ƙarin haruffa ko lambobi.", "Ku zaɓi lambar da ta yi daidai da rubutun likita sosai."],
          words: [["Alphabetic index", "sashen littafin lambobi da ke jera cututtuka da sunansu, daga A zuwa Z."], ["Tabular list", "sashen littafin lambobi da ke jera kowace lamba bisa tsari, tare da ƙa'idojin amfani da ita."], ["Babbar kalma (main term)", "kalmar cutar da kuke fara nema, ba sashen jiki ba."], ["Cikakken bayani (specificity)", "yadda lamba take daidai sosai; masu coding suna amfani da lambar da ta fi daidai wadda rubutun likita ya goyi baya."]],
          slides: [
            { title: "Sassa biyu na littafin lambobi", bullets: ["Alphabetic index: cututtuka daga A zuwa Z", "Tabular list: kowace lamba bisa tsari, tare da ƙa'idoji"] },
            { title: "Ƙa'idar matakai biyu", bullets: ["1. Ku nemo babbar kalma a cikin index", "2. Ku tabbatar da lambar a tabular list", "Kada ku taɓa yin coding daga index kaɗai"] },
            { title: "Ku nemi cutar", bullets: ["Babbar kalma = cutar, ba sashen jiki ba", "Ku karanta bayanan \"includes\" da \"excludes\"", "Ku yi amfani da lambar da ta fi daidai bisa rubutun likita"] },
            { title: "Atisaye kyauta", bullets: ["ICD-10-CM Browser Tool na CDC", "A wurin aiki: littafi na yanzu ko kayan aikin mai ɗaukar aiki", "Ku yi coding daga rubutun likita, ba hasashe ba"] }
          ],
          sources: [
            { name: "CDC NCHS: ICD-10-CM and the ICD-10-CM Browser Tool", url: "https://www.cdc.gov/nchs/icd/icd-10-cm/index.html" }
          ],
          tryIt: "Atisaye kawai. Ku buɗe ICD-10-CM Browser Tool na CDC daga hanyar haɗin majiya. Ku nemi waɗannan cututtuka ƙirƙirarru: \"acute pharyngitis\", \"essential hypertension\" da \"type 2 diabetes without complications\". Ga kowacce, ku rubuta babbar kalmar da kuka bincika, lambar da kuka samu, da bayani ɗaya da kuka karanta kafin ku zaɓe ta.",
          youCanNow: "neman lambar cuta a matakai biyu, index sannan tabular list, da faɗin dalilin da yasa ba za ku taɓa tsayawa a index ba.",
          quickCheck: [
            { objective: "O4", q: "Kun sami lamba a cikin alphabetic index. Me za ku yi a gaba?", options: ["Ku saka ta a claim nan take", "Ku tabbatar da ita a tabular list ku karanta bayananta", "Ku tambayi mara lafiya ko ta yi kama da daidai", "Ku zaɓi gajeriyar lambar da ke kusa"], answer: 1, why: "Tabular list yana da ƙa'idoji kuma yana iya buƙatar ƙarin haruffa ko lambobi; kada ku taɓa yin coding daga index kaɗai." },
            { objective: "O4", q: "Rubutun likita ya ce \"acute bronchitis\". Wace ce babbar kalmar da za ku nema?", options: ["Acute", "Ƙirji", "Huhu", "Bronchitis"], answer: 3, why: "Kuna neman cutar (bronchitis), sannan ku nemo \"acute\" a ƙarƙashinta." }
          ]
        },
        {
          title: "Cike claim da gyara ƙin biya",
          objectives: ["O5"],
          minutes: 6,
          goal: "Cike manyan akwatunan claim 1500 na atisaye da gano dalilin da yasa aka ƙi claim.",
          text: [
            "Ofisoshin likitoci suna neman biya da fom ɗin claim 1500, wanda National Uniform Claim Committee (NUCC) take kula da shi. Nau'in takarda da ake amfani da shi shi ne fom na 02/12. Yawancin claim a yau ta intanet ake aika su, amma claim na intanet yana da bayanai iri ɗaya, don haka koyon fom na takarda yana koya muku bayanan.",
            "Manyan akwatuna da za ku sani (atisaye): Akwati 1a, lambar shaidar mai inshora (insured's ID) daga katin inshora. Akwati 2, sunan mara lafiya. Akwati 21, lambobin cuta, masu alamar A, B, C da sauransu. Akwati 24, layukan ayyuka: ranar aikin (24A), lambar CPT ko HCPCS (24D), diagnosis pointer da ke haɗa aikin da harafin cuta a Akwati 21 (24E), da kuɗin (24F). Akwati 33, mai bayar da sabis da ke neman biya (billing provider).",
            "Kafin claim ya tafi, ku duba shi: mara lafiya da lambar shaida daidai ne, kowane aiki yana da diagnosis pointer, lambobi na yanzu ne, ranaku da kuɗaɗe sun yi daidai da ziyarar. Kama kurakurai yanzu ya fi sauƙi da arha fiye da gyara ƙin biya daga baya.",
            "Idan aka ƙi claim, mai biya yana aiko da remittance (bayanin biya) tare da dalili. Dalilan da aka saba gani: lambar shaida ko suna ba daidai ba, lamba ta ɓace ko ba ta aiki, aikin ba a rufe shi a inshora ba, babu izini kafin aiki (prior authorization), claim da aka aika sau biyu, ko an aika a makare. Ku nemo dalilin, ku gyara shi, sannan ku sake aikawa ko ku ɗaukaka ƙara bisa ƙa'idojin mai biya."
          ],
          steps: ["Ku kwafi lambar shaidar mai inshora (1a) da sunan mara lafiya (2) daidai daga katin ƙirƙirarre.", "Ku rubuta lambobin cuta a Akwati 21 a matsayin A, B, C.", "A kowane layin aiki a Akwati 24, ku rubuta ranar, lambar CPT ko HCPCS, diagnosis pointer da kuɗin.", "Ku cike mai bayar da sabis da ke neman biya (33).", "Ku duba claim ɗin da jerin bincikenku kafin aikawa.", "Idan aka ƙi shi, ku karanta dalilin, ku gyara abin da ya jawo, ku sake aikawa bisa ƙa'idojin mai biya."],
          words: [["Fom ɗin claim 1500", "fom na takarda na ƙa'ida don claim na ofisoshin likitoci, wanda NUCC take kula da shi."], ["Diagnosis pointer", "harafin da ke kan layin aiki (A, B, C) da ke haɗa shi da wata cuta a Akwati 21."], ["Remittance (EOB ko ERA)", "bayanin mai biya na abin da ya biya ko ya ƙi, da dalili."], ["Prior authorization", "izini daga mai biya kafin a yi wasu ayyuka."], ["Claim mai tsafta (clean claim)", "claim marar kuskure, ta yadda za a biya shi a karon farko."]],
          slides: [
            { title: "Fom ɗin claim 1500", bullets: ["NUCC ce ke kula da shi; nau'in takarda 02/12", "Claim na intanet yana ɗauke da bayanai iri ɗaya"] },
            { title: "Manyan akwatuna (atisaye)", bullets: ["1a: lambar shaidar mai inshora  •  2: sunan mara lafiya", "21: lambobin cuta A, B, C...", "24: rana, lamba, pointer, kuɗi  •  33: mai neman biya"] },
            { title: "Ku duba kafin ku aika", bullets: ["Mara lafiya da lambar shaida daidai", "Kowane layin aiki yana da pointer", "Lambobi na yanzu; ranaku da kuɗaɗe sun yi daidai"] },
            { title: "Dalilan ƙin biya da aka saba gani", bullets: ["Lambar shaida ko suna ba daidai ba; lamba ta ɓace ko ba ta aiki", "Ba a rufe ba; babu prior authorization", "An aika sau biyu ko a makare: ku gyara, sannan ku sake aikawa"] }
          ],
          sources: [
            { name: "NUCC: 1500 Claim Form", url: "https://www.nucc.org/index.php/1500-claim-form-mainmenu-35" }
          ],
          tryIt: "Atisaye kawai. Mara lafiya ƙirƙirarre: Sam Rivera, lambar shaidar mai inshora ABC123456. Ziyara a ranar da kuka zaɓa: ziyarar ofis (99213) don ciwon maƙogwaro (J02.9) tare da gwajin strep na gaggawa (87880), kuɗi $100 da $25 (ƙirƙirarru). A takarda ko a spreadsheet, ku cike Akwatuna 1a, 2, 21, 24 (layuka biyu) da 33 (\"Practice Clinic\"). Sannan claim ɗin ya dawo: \"invalid member ID\" (lambar membobi ba ta aiki). Ku rubuta abin da za ku duba ku gyara.",
          youCanNow: "cike manyan akwatunan claim na atisaye, duba shi kafin ya tafi, da ganowa da gyara dalilin ƙin biya.",
          quickCheck: [
            { objective: "O5", q: "A ina lambobin cuta suke zuwa a fom 1500?", options: ["Akwati 2", "Akwati 33", "Akwati 21", "Akwati 1a"], answer: 2, why: "Akwati 21 yana ɗauke da lambobin cuta, masu alamar A, B, C da sauransu." },
            { objective: "O5", q: "An ƙi claim da cewa \"service requires prior authorization\" (aikin yana buƙatar izini kafin a yi). Me ya ɓace?", options: ["Izinin mai biya kafin aikin", "Sunan tsakiya na mara lafiya", "Kwafi na biyu na claim", "Sa hannun likita a fayil na takarda"], answer: 0, why: "Prior authorization izinin mai biya ne kafin wasu ayyuka; idan babu shi, ana ƙin claim." }
          ]
        },
        {
          title: "Kare sirrin mara lafiya, da claim ɗinku na atisaye",
          objectives: ["O6"],
          minutes: 5,
          goal: "Raba bayanan mara lafiya ga waɗanda suke buƙatarsu kaɗai, kuma abin da suke buƙata kawai.",
          text: [
            "Masu billing da coding suna ganin bayanan lafiya na sirri kowace rana: sunaye, ranakun haihuwa, cututtuka, lambobin inshora. HIPAA dokar gwamnatin tarayya ta Amurka ce da ke kare su. Ƙa'idarta ta sirri (Privacy Rule) tana rufe shirye-shiryen inshorar lafiya, yawancin ofisoshin likitoci da asibitoci, da kamfanonin da ke aiki musu, kamar kamfanonin billing.",
            "Protected health information (PHI) duk wani bayanin lafiya ne da zai iya nuna ko wane ne mutum. Ƙa'idar \"minimum necessary\" (mafi ƙarancin abin da ake buƙata) tana nufin ku yi amfani da kuma raba abin da ake buƙata don aikin kawai. Mai biya yana iya buƙatar lambar cuta a kan claim; abokin aiki a ɗakin hutu ba ya buƙatar jin ta.",
            "Al'adun yau da kullum: ku kulle allonku idan za ku tashi, kada ku taɓa magana game da marasa lafiya a bainar jama'a, ku tabbatar da ko wane ne duk wanda ya kira, ku aika claim ta tsarin da aka amince da shi kaɗai, kuma kada ku taɓa tura PHI ta imel ko tes daga asusunku na kanku. Idan kun ga kuskuren sirri, ku faɗa wa shugabanku ko jami'in sirri (privacy officer) nan take.",
            "Yanzu ku haɗa komai a aikinku na ƙarshe: cikakken claim na atisaye da tsarin takardar shaidarku."
          ],
          steps: ["Kafin ku raba, ku tambayi: shin wannan mutumin yana da dalilin aiki na sani?", "Ku raba mafi ƙarancin abin da yake buƙata kawai.", "Ku tabbatar da ko wane ne yake kira kafin ku bayar da komai.", "Ku kulle allonku ku yi amfani da tsarin da aka amince da shi kaɗai.", "Ku kai rahoton kurakuran sirri ga shugabanku ko jami'in sirri."],
          words: [["HIPAA", "dokar gwamnatin tarayya ta Amurka da ke kare sirri da tsaron bayanan lafiya."], ["PHI", "protected health information: bayanin lafiya da zai iya nuna ko wane ne mutum."], ["Minimum necessary", "ra'ayin HIPAA na amfani ko raba bayanan da ake buƙata don aikin kawai."], ["Jami'in sirri (privacy officer)", "mutumin da ke kula da ƙa'idojin sirri da rahotanni a wurin aiki."]],
          slides: [
            { title: "HIPAA tana kare marasa lafiya", bullets: ["Dokar sirri ta gwamnatin tarayya don bayanan lafiya", "Tana rufe shirye-shiryen inshorar lafiya, yawancin likitoci da kamfanonin billing nasu"] },
            { title: "Minimum necessary", bullets: ["Ku raba ga waɗanda suke buƙata don aiki kaɗai", "Ku raba abin da suke buƙata kawai"] },
            { title: "Al'adun yau da kullum", bullets: ["Ku kulle allonku", "Babu maganar marasa lafiya a bainar jama'a", "Ku tabbatar da wanda yake kira", "Tsarin da aka amince da shi kaɗai, ba imel ɗinku na kanku ba"] },
            { title: "Aikin ƙarshe", bullets: ["Ku kammala claim na atisaye", "Ku duba shi da jerin bincikenku kafin aikawa", "Ku rubuta tsarin takardar shaidarku da ranaku"] }
          ],
          sources: [
            { name: "HHS: HIPAA for professionals (Privacy Rule)", url: "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html" }
          ],
          tryIt: "Aikin ƙarshe, atisaye kawai. Ziyara ƙirƙirarriya: Ana Lee, lambar shaidar mai inshora XYZ987654, ta ga likita (99213) saboda hawan jini (I10) kuma an ɗibi jininta daga jijiya (36415); kuɗi ƙirƙirarru $100 da $15. Ku cike claim 1500 na atisaye (Akwatuna 1a, 2, 21, 24, 33), ku duba shi da jerin bincike da kuka rubuta da kanku kafin aikawa, sannan ku ƙara tsari mai shafi ɗaya: takardar shaidarku, inda za ku yi horo, da ranar da kuke son yin jarabawa. Kada ku yi amfani da bayanan mara lafiya na gaske.",
          youCanNow: "kare bayanan mara lafiya da ƙa'idar minimum necessary, da mayar da ziyara ƙirƙirarriya zuwa cikakken claim na atisaye da aka duba.",
          quickCheck: [
            { objective: "O6", q: "Wata mai kira ta ce ita 'yar'uwar wani mara lafiya ce, tana tambayar cutarsa. Me za ku yi?", options: ["Ku karanta mata cutar don ku taimaka", "Ku tura mata ta tes daga baya", "Ku faɗa mata lambar cutar kawai", "Ku bi ƙa'idojin ofishinku don tabbatar da wanda zai iya samun bayani; kada ku raba shi"], answer: 3, why: "HIPAA tana iyakance wanda zai iya samun PHI; kuna bin ƙa'idojin ofishinku kuma ba ku raba komai har sai kun tabbatar." },
            { objective: "O6", q: "Mene ne ma'anar \"minimum necessary\"?", options: ["Ku raba bayanan da ake buƙata don aikin kawai", "Ku yi aiki mafi ƙarancin sa'o'i", "Ku yi coding na cuta ɗaya kawai a kowane claim", "Ku karɓi mafi ƙarancin farashi"], answer: 0, why: "A ƙarƙashin HIPAA, kuna amfani da kuma raba bayanan da ake buƙata don aikin kawai." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Lambobi, claim da sirri",
        questions: [
          { objective: "O4", q: "Me yasa masu coding ba sa taɓa yin coding daga alphabetic index kaɗai?", options: ["Index koyaushe tsoho ne", "Index ba shi da lambobi a ciki", "Tabular list yana da ƙa'idoji kuma yana iya buƙatar ƙarin haruffa ko lambobi", "Masu biya ba sa karɓar lambobin index"], answer: 2, why: "Bayanan tabular list suna iya canja lambar ko su buƙaci ƙarin haruffa ko lambobi." },
          { objective: "O5", q: "Me diagnosis pointer a Akwati 24E yake yi?", options: ["Yana nuna adireshin mai biya", "Yana haɗa layin aiki da wata cuta a Akwati 21", "Yana nuna gidan mara lafiya", "Yana jera lasisin likita"], answer: 1, why: "Harafin pointer yana haɗa kowane aiki da cutar da ke bayyana dalilinsa." },
          { objective: "O5", q: "An ƙi claim da cewa \"duplicate\" (an aika sau biyu). Mene ne mataki na farko mafi kyau?", options: ["Ku duba ko an riga an aika ko an biya wannan claim ɗin", "Ku sake aika shi sau uku", "Ku canja lambobin don ya yi kama da wani daban", "Ku sa mara lafiya ya biya komai"], answer: 0, why: "Ƙin biya na duplicate yana nufin mai biya ya riga ya karɓe shi; ku duba matsayinsa maimakon sake aikawa." },
          { objective: "O6", q: "Kuna buƙatar tashi daga teburinku alhali claim yana kan allo. Me za ku yi?", options: ["Ku bar shi a buɗe; ba za ku daɗe ba", "Ku roƙi wani baƙo ya kula da shi", "Ku juya allon zuwa bango", "Ku kulle allonku"], answer: 3, why: "Kulle allo yana hana mutanen da bai kamata su gani ba ganin PHI." },
          { objective: "O6", q: "Wanne ne protected health information (PHI)?", options: ["Fom ɗin claim marar komai", "Lokutan buɗe ofishin", "Sunan mara lafiya tare da cutarsa", "Sunan littafin lambobi"], answer: 2, why: "Bayanin lafiya da zai iya nuna ko wane ne mutum PHI ne." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Tushen Lissafin Kuɗin Asibiti da Rubuta Lambobin Lafiya",
    questions: [
      { objective: "O1", q: "Me mai coding yake yi?", options: ["Yana mayar da rubutun likita zuwa lambobi na ƙa'ida", "Yana ɗiban jini daga marasa lafiya", "Yana sayar da shirye-shiryen inshora", "Yana gyara kwamfutocin ofis"], answer: 0, why: "Masu coding suna mayar da cututtuka da ayyuka daga rubutun likita zuwa lambobi." },
      { objective: "O1", q: "A ina ya kamata ku duba sharuɗɗa da kuɗin takardar shaida na yanzu?", options: ["Wani rubutu a kafar sada zumunta", "Aboki da ya yi ta shekaru da suka wuce", "Shafin hukuma na ƙungiyar da ke bayar da takardar shaidar", "Kowace tallar horo"], answer: 2, why: "Ƙa'idoji da kuɗi suna canjawa; shafin hukuma ne yake da na yanzu." },
      { objective: "O1", q: "Wanne haɗi ne daidai?", options: ["CPC daga NHA", "CBCS daga AHIMA", "CCA daga AAPC", "CCA daga AHIMA"], answer: 3, why: "CCA na AHIMA ne; CPC na AAPC ne; CBCS na NHA ne." },
      { objective: "O1", q: "Me wannan kwas yake ba ku?", options: ["Lasisin coding", "Shiri don jarabawar takardar shaida", "Tabbacin samun aiki", "Takardar shaidar CPC"], answer: 1, why: "Kwas ɗin yana shirya ku; takardun shaida suna zuwa ne kawai bayan cin jarabawar hukuma." },
      { objective: "O2", q: "Wanne ne mataki na farko na zagayen billing?", options: ["Sa lokacin ziyara da duba inshora", "Aika claim", "Karɓar kuɗi daga mara lafiya", "Yin coding na ziyarar"], answer: 0, why: "Zagayen yana farawa ne lokacin da aka sa lokacin ziyara aka duba inshora." },
      { objective: "O2", q: "Wane mataki ne yake zuwa kafin aika claim kai tsaye?", options: ["Karɓar mara lafiya (check-in)", "Yin claim da duba shi", "Sa lokaci", "Biyan mai biya"], answer: 1, why: "Mai billing yana yin claim ya duba shi, sannan ya aika shi." },
      { objective: "O2", q: "Mene ne copay?", options: ["Kwafin claim", "Biya daga mai biya zuwa ga likita", "Ƙayyadadden kuɗi da mara lafiya yake biya don ziyara", "Kuskuren coding"], answer: 2, why: "Copay ƙayyadadden kuɗi ne da mara lafiya yake biya." },
      { objective: "O3", q: "Mara lafiya ya zo da tari. Wane rukunin lambobi ne yake bayyana tarin?", options: ["CPT", "HCPCS Level II", "Babu", "ICD-10-CM"], answer: 3, why: "Alamomi, abin da ake ji da cututtuka suna amfani da ICD-10-CM." },
      { objective: "O3", q: "Wane ne ya mallaki rukunin lambobin CPT kuma yake sabunta shi?", options: ["American Medical Association", "Mai ɗaukar mara lafiya aiki", "Kowace jiha", "NUCC"], answer: 0, why: "AMA ce ta mallaki CPT; CMS tana kiransa HCPCS Level I." },
      { objective: "O3", q: "Wace lamba ce ta yi kama da lambar HCPCS Level II?", options: ["99213", "I10", "E0100 (misalin atisaye)", "36415"], answer: 2, why: "Lambobin HCPCS Level II harafi ɗaya ne da lambobi huɗu a bayansa." },
      { objective: "O3", q: "Sau nawa rukunonin lambobi suke canjawa?", options: ["Ba sa canjawa", "Kowace shekara", "Kowace shekara 50", "Sai idan likita ya nema"], answer: 1, why: "Ana sabunta rukunonin lambobi kowace shekara, don haka masu coding suna amfani da littafi ko kayan aiki na yanzu." },
      { objective: "O4", q: "A littafin lambobi, wane sashe ne yake jera cututtuka daga A zuwa Z?", options: ["Alphabetic index", "Tabular list", "Fom ɗin claim", "Remittance"], answer: 0, why: "Alphabetic index yana jera cututtuka da sunansu." },
      { objective: "O4", q: "Likita ya rubuta \"chronic sinusitis\". Me za ku fara nema?", options: ["Chronic", "Hanci", "Sinusitis", "Kai"], answer: 2, why: "Ku nemi cutar (sinusitis), sannan kalmar \"chronic\" a ƙarƙashinta." },
      { objective: "O4", q: "Wane kayan aikin hukuma ne kyauta don atisayen neman lambobin ICD-10-CM?", options: ["Wani dandalin coding na bazuwar", "Tambayoyin wasa a kafar sada zumunta", "Fom ɗin claim 1500", "ICD-10-CM Browser Tool na CDC"], answer: 3, why: "NCHS ta CDC tana bayar da ICD-10-CM Browser Tool kyauta." },
      { objective: "O5", q: "A ina lambar shaidar mai inshora take zuwa a fom 1500?", options: ["Akwati 21", "Akwati 1a", "Akwati 24F", "Akwati 33"], answer: 1, why: "Akwati 1a yana ɗauke da lambar shaidar mai inshora daga katin inshora." },
      { objective: "O5", q: "Wane ne yake kula da fom ɗin claim 1500?", options: ["National Uniform Claim Committee (NUCC)", "Mara lafiya", "AMA", "Kowane likita"], answer: 0, why: "NUCC ce ke kula da fom ɗin claim 1500." },
      { objective: "O5", q: "Mene ne \"clean claim\" (claim mai tsafta)?", options: ["Claim da aka buga a sabuwar takarda", "Claim marar kuɗi", "Claim marar kuskure da za a iya biya a karon farko", "Claim da aka aika ta imel"], answer: 2, why: "Claim mai tsafta ba shi da kuskure, don haka mai biya zai iya biya shi a karon farko." },
      { objective: "O5", q: "Me remittance (EOB ko ERA) yake faɗa muku?", options: ["Adireshin gidan mara lafiya", "Jadawalin gobe", "Lambar lasisin likita", "Abin da mai biya ya biya ko ya ƙi, da dalili"], answer: 3, why: "Remittance yana bayanin biya ko ƙin biya kuma yana bayar da dalili." },
      { objective: "O6", q: "Wani abokin aiki a lokacin hutu ya tambayi abin da ke damun wani mara lafiya da kuka yi coding nasa. Me za ku yi?", options: ["Ku faɗa masa; shi ma a nan yake aiki", "Kada ku raba; ba shi da dalilin aiki na sani", "Ku raɗa masa a hankali", "Ku nuna masa claim ɗin"], answer: 1, why: "A ƙarƙashin ƙa'idar minimum necessary, PHI yana zuwa ga waɗanda suke buƙatarsa don aikinsu kaɗai." },
      { objective: "O6", q: "Wace al'ada ce take kare PHI?", options: ["Aika claim ta imel ɗinku na kanku", "Magana game da marasa lafiya a cikin bas", "Amfani da tsarin aiki da aka amince da shi kaɗai don aika claim", "Barin claim a kan firinta"], answer: 2, why: "Tsarin da aka amince da shi yana kare PHI; imel na kai da magana a bainar jama'a ba sa yi." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 3, 4, 7, 9, 11, 14, 17, 18] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Tsarin takardar shaida", objective: "O1", notYet: "Ba a ambaci takardar shaida ba, ko an yi hasashen sharuɗɗa maimakon a duba su.", meets: "Ya ambaci takardar shaida ɗaya da wanda yake bayar da ita, tare da sharuɗɗa da ranar jarabawa da aka ɗauko daga shafin hukuma.", exceeds: "Ya kuma jera shirin horo, ranakun karatu na kowane mako, da abin da tallace-tallacen aiki na yankin suke nema." },
      { name: "Rukunonin lambobi daidai", objective: "O3", notYet: "An yi coding na cuta da CPT, ko na aiki da ICD-10-CM.", meets: "Cutar tana amfani da ICD-10-CM, kowane aiki kuma yana amfani da CPT.", exceeds: "Zai iya bayyana dalilin da yasa kowace lamba take cikin rukunin lambobinta." },
      { name: "An nemi lambobi ta hanyar da ta dace", objective: "O4", notYet: "An kwafi lambobi ba tare da dubawa ba, ko an ɗauko su daga index kaɗai.", meets: "An sami kowace cuta a cikin index aka tabbatar da ita a tabular list (ko kayan aikin CDC).", exceeds: "Ya rubuta babbar kalmar da aka bincika da ƙa'ida ɗaya da aka karanta ga kowace lamba." },
      { name: "An cike akwatunan claim", objective: "O5", notYet: "Akwai akwatunan da suka ɓace, ko lambar shaida, lambobi ko kuɗaɗe ba su yi daidai da ziyarar ba.", meets: "An cike Akwatuna 1a, 2, 21, 24 da 33 kuma sun yi daidai da ziyarar; kowane layin aiki yana da pointer.", exceeds: "Ya haɗa da rubutaccen jerin bincike kafin aikawa da ke kama aƙalla kuskure ɗaya da aka saka da gangan." },
      { name: "Zagayen billing da bin diddigi", objective: "O2", notYet: "Ba zai iya faɗin abin da ke faruwa bayan an aika claim ba.", meets: "Ya faɗi matakai daga aikawa zuwa biya, da abin da za a yi idan aka ƙi shi.", exceeds: "Ya ambaci dalilai biyu na ƙin biya da gyaran kowanne." },
      { name: "An kiyaye sirri", objective: "O6", notYet: "Ya yi amfani da bayanan mara lafiya na gaske, ko ya raba PHI ga wanda ba ya buƙata.", meets: "Ya yi amfani da bayanai ƙirƙirarru kawai kuma ya kiyaye claim ɗin a sirri.", exceeds: "Ya jera al'adu uku na yau da kullum da ke kare PHI a wurin aiki." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka shiga shirin horon billing da coding ko suka yi rajistar jarabawar takardar shaida cikin kwanaki 90",
      "Masu koyo da suka ci jarabawar CBCS, CPC ko CCA (bisa abin da suka faɗa)",
      "Masu koyo da aka ɗauka aikin billing, coding, teburin karɓar baƙi ko rajistar marasa lafiya cikin watanni 6"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai intanet don shafukan hukuma na takardun shaida da ICD-10-CM Browser Tool na CDC",
      "Takarda da alƙalami, ko spreadsheet kyauta (Google Sheets ko Excel), don claim na atisaye",
      "Zanen fom ɗin claim 1500 na atisaye da aka buga ko aka zana (akwatuna 1a, 2, 21, 24, 33)",
      "Kusan minti 75 gaba ɗaya, a gajerun zama"
    ],
    facilitatorNotes: [
      "Ku jaddada cewa duk lambobin da ke cikin kwas ɗin misalan atisaye ne; ku tabbatar masu koyo sun san lambobi suna canjawa kowace shekara.",
      "Kada ku taɓa amfani da fayilolin marasa lafiya na gaske ko katunan inshora na gaske a aji; ku yi amfani da marasa lafiya ƙirƙirarru kawai.",
      "Ku kawo bugaggun tallace-tallacen aiki na yankin domin masu koyo su ga waɗanne takardun shaida masu ɗaukar aiki suke nema.",
      "Ku saka kuskure ɗaya (lambar shaida ba daidai ba ko pointer da ya ɓace) a cikin claim na misali ku bar ƙungiyoyi su nemo shi.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya.",
      "Masu koyo masu tarihin shari'a: ku faɗa musu su tambayi kowace ƙungiyar takardar shaida da shirin horo game da nata ƙa'idoji, kuma su duba sharuɗɗan aiki a jiharsu."
    ]
  }
};
