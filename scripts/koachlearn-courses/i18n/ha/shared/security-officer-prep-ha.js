"use strict";

// Koach Learn course, Hausa (ha) translation of shared/security-officer-prep.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.
// US course: US agencies, states and California rules are kept as in the English.

const BSIS_GUARD = { name: "California BSIS: Security guards (applications, training syllabus, Power to Arrest manual)", url: "https://www.bsis.ca.gov/industries/guard.shtml" };
const BSIS_FACT = { name: "California BSIS: Security Guard Registration fact sheet", url: "https://www.bsis.ca.gov/forms_pubs/guard_fact.pdf" };
const BSIS_TRAIN = { name: "California BSIS: Security guard training syllabus (courses and hours)", url: "https://www.bsis.ca.gov/industries/g_train.shtml" };
const BSIS_POA = { name: "California BSIS: Power to Arrest training manual", url: "https://www.bsis.ca.gov/forms_pubs/poa.pdf" };
const BSIS_VERIFY = { name: "California Department of Consumer Affairs: Verify a license", url: "https://search.dca.ca.gov/" };
const NY_DOS = { name: "New York Department of State: Security guard licensing", url: "https://dos.ny.gov/security-guard" };
const TX_DPS = { name: "Texas Department of Public Safety: Private Security Program", url: "https://www.dps.texas.gov/section/private-security" };
const FL_FDACS = { name: "Florida Department of Agriculture and Consumer Services: Division of Licensing (Class D security officer)", url: "https://www.fdacs.gov/Business-Services/Private-Investigative-Recovery-and-Security-Licensing" };
const BLS_GUARDS = { name: "U.S. Bureau of Labor Statistics: Security guards and gambling surveillance officers (how to become one)", url: "https://www.bls.gov/ooh/protective-service/security-guards.htm" };
void BSIS_GUARD;

module.exports = {
  id: "security-officer-prep-ha",
  lang: "ha",
  translationOf: "security-officer-prep",
  category: "Workforce Development",
  name: "Shirin Zama Jami'in Tsaro (Guard Card)",
  skills: "Gano ƙa'idojin katin mai gadi na jiharku, Sintiri da kula da shiga bisa umarnin wurin aiki, Lura da kai rahoto cikin ikonku, Kwantar da rikici da amsa gaggawa, Rubuta rahoton aukuwa bayyananne, Tsara hanyar samun lasisi da neman aiki",
  outcome: "gano abubuwan da jiharku ke buƙata don katin mai gadi ku rubuta matakan samunsa, bin umarnin wurin aiki a sintiri da a ƙofar shiga, zaɓar matakin lura-da-kai-rahoto da ke cikin ikon mai gadi, rubuta rahoton aukuwa bayyananne na gaskiya, da yin shiri mai kwanan wata don samun lasisi da aiki.",
  about: [
    "Jami'an tsaro (masu gadi) suna kare mutane da dukiya a ofisoshi, shaguna, asibitoci, makarantu, rumbunan ajiya, taruka da gidajen haya. Ayyuka da yawa ba sa buƙatar digiri, kuma masu ɗaukar aiki suna ɗauka duk shekara. Wannan kwas ɗin na masu neman aiki ne, masu dawowa gida daga gidan yari, tsofaffin sojoji da matasa da ke son fara wannan aiki.",
    "Za ku koyi abin da jami'in tsaro ke yi da abin da ba ya yi, yadda katin mai gadi na jiha (guard card) yake aiki, yadda ake sintiri da kula da ƙofar shiga bisa umarnin wurin aiki, yadda za ku natsu ku zauna lafiya idan aka samu rikici ko gaggawa, da yadda ake rubuta rahoton aukuwa da shugaba, lauya ko ɗan sanda zai amince da shi.",
    "Muhimmi: wannan kwas yana shirya ku ne; ba ya ba ku lasisi. A yawancin jihohin Amurka, wata hukumar jiha ce ke ba masu gadi lasisi, kuma dole ne ku kai aƙalla shekara 18, ku wuce binciken tarihin laifi, ku kuma gama horon da jihar ke buƙata a makaranta ko wurin aikin da aka amince da shi. Ƙa'idoji sun bambanta bisa jiha, don haka za ku duba shafin hukuma na jiharku. California ce misalinmu domin mun duba ƙa'idojinta a shafin hukuma.",
    "Kowane darasi yana ɗaukar kusan minti biyar kuma yana ƙarewa da aikin \"Gwada yanzu\" a takarda ko a manhajar rubutu ta kyauta. Akwai gwajin ilimi bayan kowane babi da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku yi fakitin shirin katin mai gadi: abubuwan da jiharku ke buƙata a rubuce a matsayin matakai tare da shafin hukuma, jerin abubuwan dubawa na sintiri da shiga don wurin aiki ɗaya na atisaye, cikakken rahoton aukuwa ɗaya na atisaye, ƙaramin katin aljihu na matakan lura-da-kai-rahoto da na gaggawa, da shiri mai kwanan wata don gama horo, neman lasisi da samun aiki, tare da layin tarihin aiki (résumé) na gaskiya.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya masu shekara 18 zuwa sama da ke neman aikin jami'in tsaro marar makami: masu neman aiki, masu dawowa gida daga gidan yari, tsofaffin sojoji da matasa. Wasu sun yi aikin 'yan sandan soja, gidan yari ko hana sata a shago; yawancinsu sababbi ne a aikin.",
    startingPoint: "Suna iya karanta gajeren fom, bin umarni da amfani da waya. Kaɗan ne suka san yadda lasisin mai gadi ke aiki a jiharsu, iyakokin ikon mai gadi a doka, ko yadda ake rubuta rahoto na gaskiya. Wasu suna ganin aikin kamar aikin 'yan sanda.",
    gap: "Aikin tsaro yana ɗaukar mutane da yawa kuma hanyar shiga tana da sauri, amma mutane suna rasa aiki ko su ji rauni idan suka wuce ikonsu, suka yi amfani da ƙarfin da bai kamata ba, ko suka rubuta rahoto marar bayani. Masu koyo suna buƙatar sanin ainihin matakan lasisi a jiharsu, ɗabi'un lura-da-kai-rahoto da masu ɗaukar aiki ke so, da ƙwarewar rubuta rahoto bayyananne, don su sami lasisi, a ɗauke su aiki kuma su riƙe shi.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; ana bayyana kowace kalma ta musamman",
      "Lasisi bisa jiha ne: kwas ɗin yana koyar da tsarin gaba ɗaya da yadda ake samun shafin hukuma, da California a matsayin misalin da aka duba",
      "Aiki marar makami kaɗai: bindiga, sanda (baton), barkonon tsohuwa (tear gas) da sauran makamai suna buƙatar izini dabam da horo ido da ido",
      "Ƙwarewar hannu kamar taimakon farko, CPR da dabarun kare kai ana koyon su ido da ido tare da ƙwararren malami",
      "Binciken tarihin laifi: ana gaya wa masu koyo da ke da tarihin laifi su amsa da gaskiya su duba ƙa'idojin jiharsu ko shirin taimakon shari'a na masu dawowa gida",
      "Na'urori: waya ko kwamfutar ɗakin karatu don shafukan jiha; takarda don jerin abubuwan dubawa da rahoto"
    ],
    prerequisites: "Babu. Kwasa-kwasan \"Ƙwarewa a Hidimar Abokan Ciniki\" da \"Résumés, LinkedIn and Interviews\" suna taimakawa tare da wannan."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Ta amfani da shafin lasisi na hukuma na jiharku", action: "lissafa matakan samun katin mai gadi a jiharku", standard: "da sunan hukumar, ƙa'idar shekaru, binciken tarihin laifi da horon da ake buƙata kafin da bayan samun lasisi" },
    { id: "O2", condition: "Idan aka ba ku umarnin wurin aiki", action: "yin sintiri da binciken kula da shiga", standard: "da rufe kowane abu da ke cikin umarnin wurin aiki, da rubuta abin da kuka gani da kuka yi tare da lokaci" },
    { id: "O3", condition: "Idan aka ba ku yanayin rikici, sata ko gaggawa", action: "zaɓar matakin lura-da-kai-rahoto da ke cikin ikon mai gadi", standard: "da daidaita aƙalla yanayi 4 cikin 5, da kiran gaggawa a farko" },
    { id: "O4", condition: "Bayan kun kalla ko kun karanta game da wata aukuwa", action: "rubuta rahoton aukuwa na gaskiya", standard: "da amsa wane ne, me, yaushe, ina da yaya, ta amfani da gaskiya ba ra'ayi ba, bisa jerin lokaci" },
    { id: "O5", condition: "Ta amfani da ƙa'idojin jiharku da tallace-tallacen aiki na yankinku", action: "rubuta shiri mai kwanan wata don samun lasisi da aiki", standard: "da kwanakin horo, zanen yatsu, neman lasisi da neman ayyuka, da layin tarihin aiki na gaskiya" }
  ],
  chapters: [
    {
      name: "Babi na 1: Aikin, katin mai gadi da wurin aiki",
      lessons: [
        {
          title: "Abin da jami'in tsaro ke yi, da abin da ba ya yi",
          objectives: ["O3"],
          minutes: 5,
          goal: "Bayyana manyan ayyukan jami'in tsaro da iyakokin ikon mai gadi.",
          text: [
            "Jami'in tsaro yana kare mutane da dukiya. Aikin yau da kullum shi ne a gan shi, ya lura, ya kula da masu shiga, ya yi sintiri, ya taimaki mutane, ya amsa ƙararrawa, kuma ya rubuta abin da ya faru. Kasancewa a bayyane da faɗakarwa suna hana matsaloli da yawa kafin su fara.",
            "Jami'in tsaro ba ɗan sanda ba ne. A yawancin jihohi, mai gadi yana da ikon kama mutum daidai da na kowane talaka, ba fiye ba. Yawancin masu ɗaukar aiki suna gaya wa jami'ansu su \"lura da kai rahoto\" (observe and report): ku lura sosai, ku kira 'yan sanda ko shugabanku, ku rubuta, maimakon bin mutane ko kama su.",
            "Ƙa'idojin mai ɗaukar ku aiki (umarnin wurin aiki, post orders) za su iya fi doka tsanani. Idan umarnin ya ce \"kada ku tsare kowa\", to ba za ku tsare ba, ko da doka za ta yarda. Wuce umarninku zai iya sa a kore ku, a kai ku ƙara, ko ku ji rauni.",
            "Hidimar abokan ciniki rabin aikin ce. Kuna nuna wa mutane hanya, taimaka wa baƙi da suka ɓace, kuma ku kasance da ladabi ga masu fushi. Jami'an da ke natsuwa, zuwa a kan lokaci kuma suka iya rubuta rahoto su ne ake ƙara wa matsayi."
          ],
          words: [["Jami'in tsaro (security officer)", "mutumin da ake biya don ya kare mutane da dukiya; ana kuma ce masa mai gadi (security guard)."], ["Lura da kai rahoto (observe and report)", "ku lura, ku kira taimako, ku rubuta, ba tare da shiga faɗa ko taɓa mutum ba."], ["Umarnin wurin aiki (post orders)", "umarnin rubutacce na wuri ɗaya: abin da za a duba, yaushe, da abin da za a yi."], ["Tsare mutum (detain)", "hana wani barin wuri. Mai gadi ya yi haka ne kawai idan doka da umarnin wurin aikinsa sun yarda."], ["Hanawa (deter)", "dakatar da matsala kafin ta fara, misali ta hanyar kasancewa a bayyane."]],
          slides: [
            { title: "Aikin yau da kullum", bullets: ["A gan ku kuma ku kasance a faɗake", "Ku kula da masu shiga kuma ku yi sintiri", "Ku taimaki mutane kuma ku amsa ƙararrawa", "Ku rubuta abin da ya faru"] },
            { title: "Ba ɗan sanda ba ne", bullets: ["Yawanci ikon kama mutum daidai da na kowane talaka", "Yawancin masu ɗaukar aiki: lura da kai rahoto", "Ku kira 'yan sanda; kada ku bi mutum ko ku kama shi"] },
            { title: "Umarnin wurin aiki ne farko", bullets: ["Za su iya fi doka tsanani", "Idan suka ce kada ku tsare kowa, ba za ku tsare ba"] },
            { title: "Abin da ke kawo ƙarin matsayi", bullets: ["Hidima mai natsuwa da ladabi", "Zuwa a kan lokaci, kowane lokacin aiki", "Rahotanni bayyanannu na gaskiya"] }
          ],
          sources: [BLS_GUARDS, BSIS_POA],
          tryIt: "Ku zana layuka biyu a takarda: \"Mai gadi yana yi\" da \"Mai gadi ba ya yi\". Ku sa kowane ɗaya daga cikin waɗannan a layinsa: sintiri a filin ajiye motoci, binciken jakar mutum da ƙarfi, nuna wa baƙo hanya, bin ɓarawon shago har cikin titi, kiran 911 don faɗa, rubuta rahoto, sanya wa mutum ankwa alhali umarnin wurin aiki ya ce lura da kai rahoto. Sannan ku rubuta jimla ɗaya kan dalilin.",
          youCanNow: "bayyana abin da jami'in tsaro ke yi da iyakokin ikon mai gadi.",
          quickCheck: [
            { objective: "O3", q: "Me yawancin masu ɗaukar aiki ke nufi da \"lura da kai rahoto\"?", options: ["Ku bi duk wanda ya gudu", "Ku lura, ku kira taimako, ku rubuta", "Ku binciki jakar kowa", "Ku kama mutane kan karya kowace ƙa'ida"], answer: 1, why: "Lura da kai rahoto yana nufin ku lura, ku kira 'yan sanda ko shugaba, ku rubuta, ba tare da taɓa kowa ba." },
            { objective: "O3", q: "Doka za ta iya yarda da kamun talaka, amma umarnin wurin aikinku ya ce \"kada ku tsare kowa\". Me za ku yi?", options: ["Ku tsare shi duk da haka", "Ku tambayi wanda ake zargi abin da yake so", "Ku bi umarnin wurin aiki: ku lura, ku kira, ku kai rahoto", "Ku bar wurin aikinku"], answer: 2, why: "Umarnin wurin aiki zai iya fi doka tsanani, kuma dole ku bi shi." }
          ]
        },
        {
          title: "Samun katin mai gadi: yadda lasisin jiha yake aiki",
          objectives: ["O1"],
          minutes: 6,
          goal: "Gano hukumar lasisi ta jiharku ku lissafa matakan samun katin mai gadi.",
          text: [
            "Yawancin jihohi suna ba masu gadi lasisi ta wata hukumar jiha. Tsarin da aka saba: ku kai aƙalla shekara 18, ku wuce binciken tarihin laifi da zanen yatsu, ku gama horo a makaranta ko wurin aikin da aka amince da shi. Jihohi da yawa kuma suna buƙatar horo kowace shekara. Sunayen sun bambanta: \"guard card\", \"registration\" ko \"Class D license\".",
            "California ce misalinmu da muka duba. Hukumar ita ce Bureau of Security and Investigative Services (BSIS). Dole ku kai aƙalla shekara 18, ku wuce binciken tarihin laifi na Department of Justice da FBI ta zanen yatsu na Live Scan, ku kuma gama horon Power to Arrest (ikon kama mutum) kafin a ba ku rajistar. Sannan ku gama horon ƙwarewar jami'in tsaro na awa 32 cikin watanni 6 na farko, da horon ci gaba na awa 8 kowace shekara. Kuna nema ta intanet a BreEZe ko ta wasiƙa, kuma kuna ɗaukar katinku a lokacin aiki.",
            "Sauran jihohi suna da nasu hukumar, misali New York Department of State, Private Security Program na Texas Department of Public Safety, da Division of Licensing na Florida Department of Agriculture and Consumer Services. Ku duba shafin hukuma na jiharku don awannin horo, kuɗaɗe da fom na yanzu. Kada ku amince da tallan horo kan ƙa'idoji.",
            "Idan kuna da tarihin laifi: kowace jiha ce ke yanke irin tarihin da ke da muhimmanci. Ku amsa kowace tambaya da gaskiya, domin amsar ƙarya kanta za ta iya sa a ƙi ku. Shirin taimakon masu dawowa gida ko ofishin taimakon shari'a zai iya taimaka muku karanta ƙa'idojin jiharku."
          ],
          steps: ["Ku nemi hukumar lasisin masu gadi ta jiharku ku buɗe shafin .gov na hukuma.", "Ku rubuta: mafi ƙarancin shekaru, matakan binciken tarihin laifi da zanen yatsu.", "Ku rubuta horon da ake buƙata kafin ku sami lasisi da bayansa (watannin farko, kowace shekara).", "Ku nemo fom ɗin nema (ta intanet ko takarda) da shafin kuɗi; kada ku yi hasashen kuɗin.", "Ku rubuta yadda ake sabunta lasisi da tsawon lokacin da yake ɗauka."],
          words: [["Katin mai gadi (guard card)", "sunan da aka saba don lasisi ko rajistar mai gadi ta jiha."], ["BSIS", "Bureau of Security and Investigative Services na California, hukumar da ke yi wa masu gadi rajista a California."], ["Live Scan", "ɗaukar zanen yatsu ta na'ura don binciken tarihin laifi a California da wasu jihohi."], ["Binciken tarihin laifi (background check)", "bincike a bayanan laifuka, sau da yawa daga jiha da FBI, kafin a ba da lasisi."], ["Horon ci gaba (continuing training)", "horon da dole ku ci gaba da yi bayan kun sami lasisi, sau da yawa kowace shekara."]],
          slides: [
            { title: "Tsarin da aka saba", bullets: ["Aƙalla shekara 18", "Binciken tarihin laifi da zanen yatsu", "Horon da aka amince da shi; jihohi da yawa kuma kowace shekara"] },
            { title: "Misalin California (BSIS)", bullets: ["Horon Power to Arrest kafin a ba da katin", "Horon ƙwarewa na awa 32 cikin watanni 6", "Horon ci gaba na awa 8 kowace shekara"] },
            { title: "Sauran jihohi", bullets: ["NY: Department of State", "TX: DPS Private Security Program", "FL: FDACS Division of Licensing (Class D)", "Ku duba shafin hukuma, ba talla ba"] },
            { title: "Idan kuna da tarihin laifi", bullets: ["Kowace jiha ce ke yanke irin tarihin da ke da muhimmanci", "Ku amsa kowace tambaya da gaskiya", "Ku tambayi shirin masu dawowa gida ko na taimakon shari'a"] }
          ],
          sources: [BSIS_FACT, BSIS_TRAIN, NY_DOS, TX_DPS, FL_FDACS, BLS_GUARDS],
          tryIt: "Ku buɗe shafin lasisi na hukuma na jiharku (ko takardar bayanin BSIS ta California idan atisaye kuke yi). A takarda, ku rubuta matakan katin mai gadi na jiharku bisa tsari: hukuma, shekaru, binciken tarihin laifi, horo kafin katin, horo bayansa, yadda ake nema, da adireshin shafin.",
          youCanNow: "gano hukumar lasisi ta jiharku ku lissafa matakan samun katin mai gadi.",
          quickCheck: [
            { objective: "O1", q: "A California, wane horo ne dole a gama kafin a ba da rajistar mai gadi?", options: ["Horon bindiga", "Horon Power to Arrest", "Horon sanda (baton)", "Babu horo ko kaɗan"], answer: 1, why: "BSIS ta ce dole a gama horon Power to Arrest kafin a ba da rajistar." },
            { objective: "O1", q: "Wani tallan horo ya ce jiharku tana buƙatar aji na awa 2 ne kawai ta intanet. Me za ku yi?", options: ["Ku yarda da tallan", "Ku tambayi aboki", "Ku biya ku yi fata", "Ku duba shafin hukuma na hukumar jiha"], answer: 3, why: "Ƙa'idoji suna canjawa kuma sun bambanta bisa jiha; shafin hukuma ne kaɗai abin dogaro." }
          ]
        },
        {
          title: "Umarnin wurin aiki, sintiri da kula da shiga",
          objectives: ["O2"],
          minutes: 5,
          goal: "Yin sintiri da binciken ƙofar shiga ta bin umarnin wurin aiki da aka rubuta.",
          text: [
            "Kowane wuri yana da umarnin wurin aiki. Suna gaya muku awannin aikinku, inda za ku yi sintiri da sau nawa, ƙofofin da za ku duba, waɗanda aka yarda su shiga, abin da za ku yi idan ƙararrawa ta kara, da wanda za ku kira. Ku karanta su a farkon kowane lokacin aiki, kuma ku tambayi shugabanku duk abin da bai bayyana ba.",
            "A sintiri, ku riƙa canza lokacinku don kada kowa ya iya hasashen zuwanku. Ku yi amfani da gaɓoɓin jikinku: ku nemi ƙofofi a buɗe, makullai da suka karye, ruwa da ke zuba, hayaƙi, ƙofofin fita na gobara da aka toshe, fitilun da suka mutu da mutanen da ke inda bai kamata ba. Ku rubuta kowane bincike a littafin ayyukan yau da kullum (daily activity log) tare da lokaci.",
            "Kula da shiga (access control) yana nufin mutanen da suka dace kaɗai ke shiga. Ku duba katin aiki (badge) ko katin shaida yadda umarnin wurin aiki ya ce, ku yi wa baƙi rajistar shiga da fita, ku ba su katin baƙo, kuma kada ku taɓa barin wani ya bi bayanku ta ƙofar da ke a kulle (tailgating). Ku kasance da ladabi amma da tsayin daka: \"Ku yi haƙuri, ina buƙatar ganin katinku.\"",
            "Ku yi amfani da rediyonku ko wayarku yadda wurin ya ce: gajerun saƙonni bayyanannu tare da inda kuke. A lokacin canjin aiki, ku gaya wa jami'i na gaba abin da ke a buɗe ku miƙa masa littafin."
          ],
          steps: ["Ku karanta umarnin wurin aiki da littafin lokacin aikin da ya gabata.", "Ku duba rediyonku ko wayarku da makullanku.", "Ku yi sintiri a kowane wuri da ke cikin umarnin wurin aiki, a lokuta dabam-dabam.", "A ƙofar shiga: ku duba katin shaida ko katin aiki, ku yi wa baƙi rajista, ku hana bin baya (tailgating).", "Ku rubuta kowane bincike da duk abin da ba a saba gani ba tare da lokaci.", "Ku yi wa jami'i na gaba bayani a lokacin canjin aiki."],
          words: [["Sintiri (patrol)", "tafiya ko tuƙi a kewayen wuri bisa hanya don neman matsaloli."], ["Kula da shiga (access control)", "tabbatar da cewa mutane da motocin da aka yarda kaɗai ke shiga."], ["Bin baya (tailgating)", "wani ya bi bayan wanda aka yarda masa ta ƙofar da ke a kulle ba tare da nuna katin shaida ba."], ["Littafin ayyukan yau da kullum (daily activity log)", "rubutaccen bayanin jami'i na kowane bincike da abin da ya faru a lokacin aiki, tare da lokuta."]],
          slides: [
            { title: "Farkon lokacin aiki", bullets: ["Ku karanta umarnin wurin aiki da littafin da ya gabata", "Ku duba rediyo, waya da makullai", "Ku tambayi duk abin da bai bayyana ba"] },
            { title: "A sintiri", bullets: ["Ku canza lokacinku", "Ƙofofi, makullai, ruwa mai zuba, hayaƙi, ƙofofin gobara, fitilu", "Ku rubuta kowane bincike tare da lokaci"] },
            { title: "A ƙofar shiga", bullets: ["Ku duba katin aiki ko na shaida yadda umarnin ya ce", "Ku yi wa baƙi rajistar shiga da fita", "Ku hana bin baya: da ladabi da tsayin daka"] },
            { title: "Ƙarshen lokacin aiki", bullets: ["Ku yi wa jami'i na gaba bayani", "Ku miƙa masa littafin"] }
          ],
          sources: [BSIS_TRAIN, BLS_GUARDS],
          tryIt: "Ku zaɓi wurin aiki na atisaye: ginin gidan hayarku, ɗakin karatu ko wani shago da kuka sani. Ku rubuta layi biyar na umarnin wurin aiki gare shi (awanni, wuraren sintiri, ƙa'idar ƙofar shiga, wanda za a kira). Sannan ku rubuta littafin ayyuka na awa ɗaya don wannan wurin da aƙalla rubutu huɗu masu lokaci, ciki har da matsala ɗaya da kuka gano da abin da kuka yi.",
          youCanNow: "yin sintiri da binciken ƙofar shiga bisa umarnin wurin aiki da aka rubuta, da rubuta su a littafi.",
          quickCheck: [
            { objective: "O2", q: "Me ya sa ya kamata ku riƙa canza lokacin sintirinku?", options: ["Don kada kowa ya iya hasashen lokacin da za ku wuce", "Don ku gama da wuri", "Domin rediyo ya ce haka", "Don ku tsallake wasu bincike"], answer: 0, why: "Sintirin da ake iya hasashe yana da sauƙin gujewa ga mai laifi; lokuta dabam-dabam suna hana matsaloli." },
            { objective: "O2", q: "Wani mutum marar katin aiki ya shiga daidai a bayan wani ma'aikaci. Menene wannan?", options: ["Sintiri", "Bin baya (tailgating)", "Lura", "Rubuta littafi"], answer: 1, why: "Bin baya shi ne bin wani ta ƙofar da ake kula da ita ba tare da nuna katin shaida ba." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Aikin, katin mai gadi da wurin aiki",
        questions: [
          { objective: "O3", q: "A yawancin jihohi, yaya ikon kama mutum na mai gadi yake idan aka kwatanta da na talaka?", options: ["Ya fi yawa sosai, kamar na ɗan sanda", "Babu shi ko kaɗan a kowane hali", "Sai a ƙarshen mako kawai", "Kusan daidai da na kowane talaka"], answer: 3, why: "A yawancin jihohi mai gadi yana da ikon kama mutum na talaka, ba fiye ba." },
          { objective: "O1", q: "Wanne ne yake cikin tsarin katin mai gadi da aka saba a yawancin jihohi?", options: ["Digirin jami'a", "Mallakar mota", "Binciken tarihin laifi da zanen yatsu", "Izinin bindiga"], answer: 2, why: "Yawancin jihohi suna buƙatar binciken tarihin laifi da zanen yatsu, shekara 18 da horon da aka amince da shi." },
          { objective: "O1", q: "A California, horon ci gaba na awa nawa ne dole mai gadi ya gama kowace shekara?", options: ["Awa 8", "Babu horo", "Awa 40", "Awa 1"], answer: 0, why: "BSIS tana buƙatar horon ci gaba na awa 8 kowace shekara." },
          { objective: "O2", q: "A ina za ku sami ƙofofin da za ku duba da wanda za ku kira a wurin aikinku?", options: ["A tallan horo", "A umarnin wurin aiki", "Daga wani baƙo", "A kafafen sada zumunta"], answer: 1, why: "Umarnin wurin aiki su ne umarnin rubutacce na wannan wurin." },
          { objective: "O2", q: "A sintiri kun ga ƙofar fita ta gobara a toshe da kwalaye. Me za ku yi?", options: ["Ku ƙyale; ba aikinku ba ne", "Ku bar takarda a kan kwalayen", "Ku jira lokacin aiki na gaba", "Ku kai rahoto ku rubuta a littafi tare da lokaci, yadda umarnin wurin aiki ya ce"], answer: 3, why: "Ƙofar fita da aka toshe haɗari ne da ya kamata a kai rahotonsa a rubuta nan take." }
        ]
      }
    },
    {
      name: "Babi na 2: Rikici, gaggawa, rahotanni da samun aiki",
      lessons: [
        {
          title: "Kwantar da rikici, amfani da ƙarfi da gaggawa",
          objectives: ["O3"],
          minutes: 6,
          goal: "Zaɓar amsa mai natsuwa da tsaro ga rikici, sata ko gaggawa.",
          text: [
            "Ana iya kwantar da yawancin rikici da magana. Ku bar tazara mai tsaro, ku tsaya a karkace, ku buɗe hannuwanku a bayyane, ku yi magana a hankali da ƙasan murya. Ku saurara, ku kira sunan mutumin idan kun san shi, ku ba shi zaɓi: \"Kuna iya jira a nan ko in kira manajanku.\" Kada ku yi gardama, ku taɓa shi ko ku tare masa hanya.",
            "Amfani da ƙarfi shi ne mafi muhimmanci kuma mafi haɗari a aikin. Jihohi suna koyar da shi a horonsu (California tana buƙatar kwasa-kwasan Appropriate Use of Force da Power to Arrest). Ƙa'idar da za ku tuna: ƙarfin da doka da umarnin wurin aikinku suka yarda kaɗai, sai lokacin da ake buƙata, kuma ku daina da zarar ba a buƙata. Ana gaya wa yawancin jami'ai marasa makami su ja da baya su kira 'yan sanda maimakon haka.",
            "Sata: ku lura, ku tuna kamannin mutumin, ku kira 'yan sanda ko shugabanku yadda umarninku ya ce, kuma kada ku bi shi har cikin titi ko filin ajiye motoci. Lafiyarku da ta sauran mutane ta fi kaya muhimmanci.",
            "Gaggawa: don gobara, rashin lafiya na gaggawa, faɗa ko makamai, ku kira 911 (ko lambar gaggawa ta yankinku) da farko, sannan ku bi shirin gaggawa na wurin: ku faɗakar da mutane, ku jagorance su zuwa ƙofofin fita, ku tarbi masu kawo agaji ku gaya musu abin da kuka gani. Ana koyon taimakon farko da CPR a samu takardar shaida ido da ido tare da ƙwararren malami, misali daga American Red Cross ko American Heart Association."
          ],
          steps: ["Ku duba: akwai wanda ke cikin haɗari? Idan akwai, ku kira 911 da farko.", "Ku bar tazara mai tsaro da hanyar tserewa.", "Ku yi magana a natse; ku saurara; ku ba da zaɓi.", "Idan abin bai kwanta ba, ku ja da baya ku kira 'yan sanda ko shugabanku.", "Ku bi shirin gaggawa na wurin; ku fitar da mutane; ku tarbi masu agaji.", "Ku rubuta abin da ya faru da zarar ya zama lafiya."],
          words: [["Kwantar da rikici (de-escalation)", "amfani da kalmomi masu natsuwa da yanayin jiki don rage fushin mutum."], ["Amfani da ƙarfi (use of force)", "duk wani aikin jiki don iko da mutum; mai gadi zai yi amfani da abin da doka da umarninsa suka yarda kaɗai."], ["Shirin gaggawa (emergency plan)", "rubutattun matakan wurin don gobara, rashin lafiya, makamai da fitar da mutane."], ["Fitar da mutane (evacuation)", "fitar da kowa daga gini lafiya."]],
          slides: [
            { title: "Ku kwantar da shi da magana", bullets: ["Tazara mai tsaro, hannuwa a buɗe, ku tsaya a karkace", "Ku yi magana a hankali; ku saurara; ku ba da zaɓi", "Kada ku yi gardama, ku taɓa mutum ko ku tare masa hanya"] },
            { title: "Amfani da ƙarfi", bullets: ["Abin da doka da umarninku suka yarda kaɗai", "Sai lokacin da ake buƙata; ku daina idan ba a buƙata", "Yawancin jami'ai marasa makami: ku ja da baya ku kira"] },
            { title: "Sata", bullets: ["Ku lura ku tuna kamannin mutumin", "Ku kira 'yan sanda ko shugabanku", "Kada ku bi shi; mutane sun fi kaya muhimmanci"] },
            { title: "Gaggawa", bullets: ["Ku kira 911 (ko lambar yankinku) da farko", "Ku bi shirin gaggawa; ku fitar da mutane", "Ku tarbi masu agaji ku gaya musu abin da kuka gani"] }
          ],
          sources: [BSIS_TRAIN, BSIS_POA],
          tryIt: "Ku yi atisaye tare da aboki ko a gaban madubi. Yanayi: wani baƙo yana ihu a teburin karɓar baƙi saboda ba zai iya hawa sama ba tare da katin aiki ba. Ku faɗi jimloli uku masu natsuwa da babbar murya, ciki har da zaɓi ɗaya da kuka ba shi. Sannan ku rubuta lokacin da za ku ja da baya ku kira shugabanku ko 'yan sanda.",
          youCanNow: "zaɓar amsa mai natsuwa da tsaro ga rikici, sata ko gaggawa, ba tare da wuce ikonku ba.",
          quickCheck: [
            { objective: "O3", q: "Wani mutum ya faɗi a harabar gini kuma ba ya numfashi yadda ya kamata. Me za ku fara yi?", options: ["Ku rubuta rahoto", "Ku kira shugabanku ku jira", "Ku kira 911, sannan ku bi shirin gaggawa", "Ku nemi katin shaidarsa"], answer: 2, why: "A rashin lafiya na gaggawa kuna kiran 911 (ko lambar yankinku) da farko." },
            { objective: "O3", q: "Ɓarawon shago ya gudu da kaya zuwa filin ajiye motoci. Umarninku ya ce lura da kai rahoto. Me za ku yi?", options: ["Ku rubuta kamanninsa da inda ya nufa ku kira yadda umarninku ya ce", "Ku bi shi cikin motoci masu wucewa", "Ku ƙwace jakarsa", "Ku tare motarsa da taku"], answer: 0, why: "Kuna zama lafiya, ku tattara gaskiyar abin da ya faru ku kira; kaya ba su kai darajar rai ba." }
          ]
        },
        {
          title: "Lura, siffantawa da rubuta rahoton aukuwa",
          objectives: ["O4"],
          minutes: 6,
          goal: "Rubuta rahoton aukuwa na gaskiya da ke amsa wane ne, me, yaushe, ina da yaya.",
          text: [
            "Shugabanku, mai hayar kamfaninku (client), kamfanin inshora, 'yan sanda ko kotu za su iya karanta rahotonku, wani lokaci bayan watanni. Rahoto mai kyau yana sa baƙon mutum ya ga ainihin abin da ya faru. Jami'ai da yawa suna rasa amincewa saboda rahotanninsu ba su da cikakken bayani.",
            "Ku rubuta gaskiyar abin da kuka gani, ba ra'ayi ba. Ba \"ya bugu\" ba, amma \"yana warin giya, yana tangaɗi kuma maganarsa ba ta fita sosai\". Ba \"wani mutum mai ban tsoro\" ba, amma \"namiji kusan shekara 30, tsawonsa kusan ƙafa 6, jar riga mai hula, baƙar jakar baya, ya zagaya motocin da ke ajiye ya gwada hannun ƙofa biyu\".",
            "Ku amsa wane ne, me, yaushe, ina da yaya, bisa jerin lokaci. Ku ba da kwanan wata da ainihin lokuta, ainihin wuri, mutanen da abin ya shafa da shaidu, abin da ku da kanku kuka gani da kuka ji, abin da kuka yi, da wanda kuka kira da yaushe. Ku rubuta ainihin kalmomin da mutane suka faɗa a cikin alamar zance.",
            "Ku rubuta shi da zarar ya zama lafiya, yayin da kuke tunawa. Ku yi amfani da \"ni\" (\"Na ga\"), gajerun jimloli da sunaye daidai. Kada ku yi hasashe, ku ƙara ko ku bar wani abu. Idan kun yi kuskure, ku gyara shi yadda mai ɗaukar ku aiki ya ce; kada ku taɓa canza rahoto daga baya don ya yi kyau."
          ],
          steps: ["Kwanan wata, lokaci da ainihin wuri.", "Wane ne: ku, mutanen da abin ya shafa, shaidu (sunaye da siffofi).", "Abin da ya faru, bisa jerin lokaci, da abin da ku da kanku kuka gani da kuka ji.", "Abin da kuka yi da wanda kuka kira, tare da lokuta.", "Ainihin kalmomi a cikin alamar zance; gaskiya, ba ra'ayi ba.", "Ku sake karanta shi; ku sa hannu yadda mai ɗaukar ku aiki ke buƙata."],
          words: [["Rahoton aukuwa (incident report)", "rubutaccen bayanin gaskiya na wani abu da ya faru kamar sata, rauni, faɗa ko ƙararrawa."], ["Shaida (witness)", "mutumin da ya gani ko ya ji abin da ya faru."], ["Gaskiya (fact)", "abin da ku da kanku kuka gani, kuka ji ko kuka auna."], ["Ra'ayi (opinion)", "abin da kuke tunani ko kuke hasashe, kamar \"ya yi kama da mai laifi\"."]],
          slides: [
            { title: "Wa zai karanta rahotonku?", bullets: ["Shugaba, client, kamfanin inshora, 'yan sanda, kotu", "Dole ya fahimtu ga baƙon mutum, bayan watanni"] },
            { title: "Gaskiya, ba ra'ayi ba", bullets: ["Ba \"ya bugu\" ba: warin giya, tangaɗi, magana ba ta fita", "Ku siffanta mutane: shekaru, tsawo, tufafi, jaka"] },
            { title: "Wane ne, me, yaushe, ina, yaya", bullets: ["Kwanan wata, ainihin lokuta, ainihin wuri", "Mutane da shaidu", "Abin da kuka gani, kuka yi da wanda kuka kira"] },
            { title: "Ku rubuta shi daidai", bullets: ["Da zarar ya zama lafiya", "\"Ni\", gajerun jimloli, ainihin kalmomi", "Kada ku taɓa canza shi daga baya don ya yi kyau"] }
          ],
          sources: [BSIS_TRAIN],
          tryIt: "Ku kalli wani yanayi a fili na minti 2 (titi mai cunkoso, ƙofar shago ko gajeren bidiyo ba tare da sauti ba). Sannan ku rubuta rahoton aukuwa na atisaye: kwanan wata, lokaci, wuri, mutanen da aka siffanta da gaskiya, abin da ya faru bisa jerin lokaci, da abin da da za ku yi da wanda da za ku kira. Ku ja layi a ƙarƙashin duk kalmar ra'ayi ku sake rubuta ta a matsayin gaskiya.",
          youCanNow: "rubuta rahoton aukuwa na gaskiya da ke amsa wane ne, me, yaushe, ina da yaya.",
          quickCheck: [
            { objective: "O4", q: "Wace jimla ce ta dace a rahoton aukuwa?", options: ["Mutumin ya yi kama da ɓarawo.", "Lallai ya bugu.", "Da ƙarfe 9:42 na dare wani namiji mai jar riga ya gwada hannun ƙofar mota biyu a Layi C.", "Wani mummunan abu yana faruwa."], answer: 2, why: "Tana ba da lokaci, wuri, siffa da aiki a matsayin gaskiya, ba ra'ayi ba." },
            { objective: "O4", q: "Yaushe ya kamata ku rubuta rahoton?", options: ["Mako mai zuwa", "Da zarar ya zama lafiya, yayin da kuke tunawa", "Sai idan 'yan sanda sun tambaya", "Bayan kun yi magana da kowa don ku yarda kan labari ɗaya"], answer: 1, why: "Rubutawa da wuri yana sa bayanan su zama daidai." }
          ]
        },
        {
          title: "Shirin katin mai gadinku da samun aiki",
          objectives: ["O5", "O1"],
          minutes: 5,
          goal: "Rubuta shiri mai kwanan wata don gama horo, neman katin mai gadi da samun aiki.",
          text: [
            "Ku mayar da matakan jiharku zuwa kwanaki. Misali: mako na 1, ku nemo makarantar horo da aka amince da ita ko mai ɗaukar aiki da ke horar da sababbin jami'ai; mako na 2, ku gama horon da ake buƙata kafin katin; mako na 3, a ɗauki zanen yatsunku ku nema; sannan ku nemi ayyuka yayin da hukumar ke duba buƙatarku. A California, BSIS ta ce a ba da kusan makonni 4 zuwa 6 don dubawa, kuma zai iya ɗaukar fiye da haka.",
            "Kamfanonin tsaro da yawa suna ɗaukar mutane su taimaka musu a horon. Ku duba shafukan neman aiki, American Job Center ko cibiyar ayyuka ta yankinku, da shafukan intanet na kamfanoni. Ku tabbatar cewa jiharku ta amince da makarantar horo (California tana ba ku damar tabbatar da lasisi ta intanet). Ku yi hankali da duk wanda ya yi alƙawarin lasisi \"tabbatacce\".",
            "Tarihin aikinku (résumé): ku faɗi gaskiya. Kafin ku sami lasisi, ku rubuta \"Completed security officer preparation course; guard card application in progress\" (na gama kwas ɗin shirin jami'in tsaro; neman katin mai gadi yana gudana). Ku ambaci ƙwarewarku: rubuta rahoto, hidimar abokan ciniki, sintiri, natsuwa a lokacin matsi. Tsofaffin sojoji: ku bayyana aikin 'yan sandan soja, gadi ko tsaron dare da kalmomin yau da kullum.",
            "Ku yi atisayen amsoshin ganawar ɗaukar aiki: \"Yaya za ku magance baƙo mai fushi?\" da \"Me za ku yi idan kun ga sata?\" Ku yi amfani da abin da kuka koya: ku natsu, ku lura ku kai rahoto, ku kira taimako, ku rubuta."
          ],
          steps: ["Ku kwafi matakan katin mai gadi na jiharku daga Darasi na 2.", "Ku sa kwanan wata kusa da kowane mataki.", "Ku lissafa masu ɗaukar aiki uku ko makarantun da aka amince da su kusa da ku.", "Ku rubuta layin tarihin aiki na gaskiya da ƙwarewa uku.", "Ku yi atisayen amsoshin tambayoyin ganawa biyu da babbar murya."],
          words: [["Makarantar da aka amince da ita (approved school)", "mai ba da horo da jiharku ta yarda ya ba da horon mai gadi da ake buƙata."], ["American Job Center", "ofishin gwamnatin Amurka na kyauta da ke taimakawa wajen neman aiki da horo."], ["Lokacin dubawa (processing time)", "tsawon lokacin da hukumar ke ɗauka don duba buƙatarku da binciken tarihin laifinku."]],
          slides: [
            { title: "Matakai zuwa kwanaki", bullets: ["Ku nemo horo; ku gama abin da ake buƙata kafin katin", "Zanen yatsu da neman lasisi", "Ku nemi ayyuka yayin da kuke jira"] },
            { title: "Inda za ku duba", bullets: ["Kamfanonin tsaro da ke horar da sababbin jami'ai", "American Job Centers da cibiyoyin ayyuka", "Ku tabbatar jiha ta amince da makarantar"] },
            { title: "Tarihin aiki na gaskiya", bullets: ["\"Guard card application in progress\" har sai an ba da katin", "Rubuta rahoto, hidimar abokan ciniki, sintiri, natsuwa"] },
            { title: "Atisayen ganawa", bullets: ["Baƙo mai fushi: kalmomi masu natsuwa, ku ba da zaɓi", "Sata: ku lura, ku kira, ku rubuta"] }
          ],
          sources: [BSIS_FACT, BSIS_VERIFY, BLS_GUARDS],
          tryIt: "Ku yi shirin katin mai gadinku a shafi ɗaya: kowane mataki daga shafin jiharku tare da kwanan wata, masu ɗaukar aiki uku ko makarantun da aka amince da su a yankinku, layin tarihin aiki na gaskiya, da amsoshinku ga tambayoyin ganawa biyu. Ku haɗa shi da jerin abubuwan dubawarku da rahoton atisayenku: wannan shi ne fakitin shirinku.",
          youCanNow: "rubuta shiri mai kwanan wata don samun katin mai gadinku da aiki, tare da layin tarihin aiki na gaskiya.",
          quickCheck: [
            { objective: "O5", q: "Kun gama wannan kwas amma ba a ba ku katin mai gadi ba tukuna. Wane layin tarihin aiki ne na gaskiya?", options: ["\"Licensed security officer\" (jami'in tsaro mai lasisi)", "\"Completed security officer preparation course; guard card application in progress\"", "\"Armed guard\" (mai gadi mai makami)", "\"State certified instructor\" (malami da jiha ta tabbatar)"], answer: 1, why: "Yana faɗin ainihin abin da kuka yi ba tare da iƙirarin lasisin da ba ku da shi ba." },
            { objective: "O1", q: "Ta yaya za ku tabbatar cewa makarantar horo ko lasisi na gaske ne a California?", options: ["Ku amince da tallan makarantar", "Ku tambaya a kafafen sada zumunta", "Ku yi amfani da tabbatar da lasisi ta intanet na jihar", "Ku kalli tambarinsu"], answer: 2, why: "Department of Consumer Affairs na California yana ba ku damar tabbatar da lasisi ta intanet." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Rikici, gaggawa, rahotanni da samun aiki",
        questions: [
          { objective: "O3", q: "Wani baƙo mai fushi yana ihu. Wane mataki ne mafi kyau na farko?", options: ["Ku mayar masa da ihu don ya saurara", "Ku tsaya kusa da shi sosai", "Ku kama hannunsa", "Ku bar tazara mai tsaro ku yi magana a hankali da natsuwa"], answer: 3, why: "Tazara da kalmomi masu natsuwa suna rage fushi kuma suna kiyaye ku." },
          { objective: "O3", q: "Kun ji warin hayaƙi kuma kun ga wuta a ɗakin ajiya. Me ke zuwa farko?", options: ["Ku kira 911 (ko lambar yankinku) ku fara shirin gaggawa na wurin", "Ku rubuta rahoto", "Ku gama sintirinku", "Ku ɗauki hoto don kafafen sada zumunta"], answer: 0, why: "A gaggawa kuna kiran 911 da farko, sannan ku bi shirin gaggawa." },
          { objective: "O4", q: "Wanne ne gaskiya, ba ra'ayi ba?", options: ["Ya yi kama da mai laifi", "Ta haukace", "Ya ce, \"Ka matsa daga hanyata\"", "Suna shirin wani mugun abu"], answer: 2, why: "Ainihin kalmomin da kuka ji gaskiya ne; sauran ra'ayoyi ne." },
          { objective: "O4", q: "Kun lura da kuskure a rahoton jiya bayan shugabanku ya karanta shi. Me za ku yi?", options: ["Ku sake rubuta shi a ɓoye don ya yi kyau", "Ku gyara shi a fili yadda mai ɗaukar ku aiki ya ce", "Ku jefar da shi", "Ku roƙi abokin aiki ya sa hannu a kai"], answer: 1, why: "Ana yin gyara a fili bisa hanyar mai ɗaukar aiki; canza rahoto a ɓoye yana lalata amincewa." },
          { objective: "O5", q: "Me ya kamata shirin katin mai gadi ya ƙunsa?", options: ["Kwanakin horo, zanen yatsu, neman lasisi da neman ayyuka", "Aikin da kuke so kawai", "Alƙawarin lasisi tabbatacce", "Babu komai har sai an ɗauke ku aiki"], answer: 0, why: "Shiri mai kwanan wata yana mayar da matakan jiharku zuwa ayyukan da za ku iya gamawa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Shirin Zama Jami'in Tsaro (Guard Card)",
    questions: [
      { objective: "O3", q: "Me jami'in tsaro ke yi da farko?", options: ["Kama mutane kan karya kowace ƙa'ida", "Kare mutane da dukiya ta kasancewa a bayyane, lura da kai rahoto", "Binciken laifuka a kotu", "Rubuta tikitin laifin tuƙi"], answer: 1, why: "Ginshiƙin aikin shi ne kariya a bayyane, lura da kai rahoto." },
      { objective: "O3", q: "Umarnin wurin aikinku sun fi doka tsanani. Wanne za ku bi?", options: ["Doka kawai", "Duk abin da kuke ganin daidai ne", "Buƙatar baƙo", "Umarnin wurin aiki"], answer: 3, why: "Masu ɗaukar aiki za su iya kafa ƙa'idoji mafi tsanani, kuma dole ku bi umarnin wurin aikinku." },
      { objective: "O1", q: "Wa ke ba da katin mai gadi a yawancin jihohi?", options: ["Wata hukumar jiha", "Kowace makarantar horo", "Babbar kasuwar yankin", "FBI"], answer: 0, why: "Hukumar jiha ce ke ba masu gadi lasisi; makarantu horo kaɗai suke bayarwa." },
      { objective: "O1", q: "A California, horon ƙwarewar jami'in tsaro na awa nawa ne dole a gama cikin watanni 6 na farko?", options: ["Awa 8", "Awa 4", "Awa 32", "Awa 100"], answer: 2, why: "BSIS tana buƙatar horon ƙwarewa na awa 32 cikin watanni 6 na farko." },
      { objective: "O1", q: "Mene ne mafi ƙarancin shekaru don rajistar mai gadi a California?", options: ["16", "21", "25", "18"], answer: 3, why: "BSIS ta ce dole masu nema su kai aƙalla shekara 18." },
      { objective: "O1", q: "Kuna da tarihin laifi kuma kuna cika fom ɗin neman katin mai gadi. Me ya kamata ku yi?", options: ["Ku amsa kowace tambaya da gaskiya ku duba ƙa'idojin jiharku", "Ku bar tarihin laifin", "Ku yi amfani da sunan aboki", "Ku haƙura ba tare da dubawa ba"], answer: 0, why: "Amsoshin ƙarya za su iya sa a ƙi ku; kowace jiha ce ke yanke irin tarihin da ke da muhimmanci." },
      { objective: "O2", q: "Me ke cikin umarnin wurin aiki?", options: ["Ribar kamfanin", "Umarnin wurin: awanni, wuraren sintiri, ƙa'idojin shiga, wanda za a kira", "Jadawalin kanku na mako", "Jerin waɗanda ake zargi"], answer: 1, why: "Umarnin wurin aiki su ne umarnin rubutacce na wani takamaiman wuri." },
      { objective: "O2", q: "Me ya kamata kowane rubutu a littafin ayyukan yau da kullum ya ƙunsa?", options: ["Ra'ayinku game da abokan aiki", "Matsaloli kawai, ba lokuta", "Lokaci da abin da kuka duba ko kuka gani", "Babu komai har ƙarshen lokacin aiki"], answer: 2, why: "Littafin yana rubuta kowane bincike da abin da ya faru tare da lokaci." },
      { objective: "O2", q: "Wani baƙo marar katin aiki ya ce, \"Ina tare da shi,\" ya shiga a bayan wani ma'aikaci. Me za ku yi?", options: ["Ku bar shi ya shiga; yana da kirki", "Ku yi masa ihu", "Ku bar wurin aikinku ku bi shi", "Ku dakatar da shi cikin ladabi ku duba katin shaida yadda umarnin wurin aiki ya ce"], answer: 3, why: "Hana bin baya cikin ladabi da tsayin daka shi ne ginshiƙin kula da shiga." },
      { objective: "O2", q: "Me ya sa za ku gaya wa jami'i na gaba abin da ya faru a lokacin canjin aiki?", options: ["Don ya san abin da ke a buɗe da abin da zai sa ido a kai", "Don ku gama aiki da wuri", "Ba a buƙata", "Don yaɗa jita-jita"], answer: 0, why: "Miƙa aiki mai kyau yana sa wurin ya kasance a tsare ba tare da gibi ba." },
      { objective: "O3", q: "Wanne ne ke taimakawa wajen kwantar da mai fushi?", options: ["Tsayawa fuska da fuska", "Yin magana a hankali da ba da zaɓi", "Nuna shi da yatsa", "Tare ƙofar fita"], answer: 1, why: "Magana mai natsuwa da zaɓi suna rage tashin hankali; tare hanya da nuna yatsa suna ƙara shi." },
      { objective: "O3", q: "Yaushe mai gadi zai iya amfani da ƙarfi?", options: ["Duk lokacin da wani ya yi rashin ladabi", "Don karɓo kowane kaya", "Kawai yadda doka da umarnin wurin aiki suka yarda, sai lokacin da ake buƙata", "Duk lokacin da shugaba ba ya kallo"], answer: 2, why: "Doka da umarnin wurin aiki ne ke iyakance ƙarfi, kuma ana daina shi idan ba a buƙata." },
      { objective: "O3", q: "Kun ga faɗa da makami a filin ajiye motoci. Me za ku fara yi?", options: ["Ku shiga ku raba su", "Ku kira 911 daga wuri mai tsaro", "Ku fara rubuta rahoto", "Ku ɗauki bidiyo don kafafen sada zumunta"], answer: 1, why: "Makami yana nufin kiran 911 da farko, daga wuri mai tsaro." },
      { objective: "O4", q: "Wa zai iya karanta rahoton aukuwarku?", options: ["Ku kaɗai", "Babu kowa", "Iyalinku kaɗai", "Shugaba, client, kamfanin inshora, 'yan sanda ko kotu"], answer: 3, why: "Mutane da yawa za su iya amfani da rahotanni, wani lokaci bayan watanni." },
      { objective: "O4", q: "Wanne ne mafi kyawun siffanta mutum a rahoto?", options: ["Mace, kusan shekara 40, tsawo kusan ƙafa 5 da inci 5, shuɗiyar riga, jakar baya mai launin toka", "Wani mutum mai shakku", "Wani baƙon mutum", "Mai tayar da hankali"], answer: 0, why: "Shekaru, tsawo da tufafi gaskiya ne da ke taimaka wa wasu gane mutumin." },
      { objective: "O4", q: "Waɗanne tambayoyi ne dole rahoto ya amsa?", options: ["Dalilin da ya sa mutumin mugu ne", "Ra'ayinku game da client", "Wane ne, me, yaushe, ina da yaya", "Abin da 'yan sanda suka faɗa kawai"], answer: 2, why: "Wane ne, me, yaushe, ina da yaya suna sa rahoto ya zama cikakke kuma na gaskiya." },
      { objective: "O4", q: "Yaya za ku rubuta abin da wani ya faɗa?", options: ["Ku taƙaita shi bisa ra'ayinku", "Ku bar shi", "Ku sa ya yi kama da mafi tsanani", "Ku rubuta ainihin kalmominsa a cikin alamar zance"], answer: 3, why: "Ainihin kalmomi gaskiya ne da wasu za su iya dogara da su." },
      { objective: "O5", q: "Wane layin tarihin aiki ne na gaskiya kafin a ba ku lasisi?", options: ["\"Guard card application in progress\" (neman katin mai gadi yana gudana)", "\"Licensed security professional\" (ƙwararren jami'in tsaro mai lasisi)", "\"Armed officer\" (jami'i mai makami)", "\"Police officer\" (ɗan sanda)"], answer: 0, why: "Yana bayyana ainihin matsayinku ba tare da iƙirarin lasisi ba." },
      { objective: "O5", q: "Wata makaranta ta yi alƙawarin lasisin mai gadi \"tabbatacce\" a rana ɗaya. Me ya kamata ku yi?", options: ["Ku biya nan take", "Ku duba shafin hukumar jiha da ko an amince da makarantar", "Ku ba su lambar Social Security ɗinku ta saƙon waya", "Ku gaya wa abokanku su yi rajista"], answer: 1, why: "Jiha ce kaɗai ke ba da lasisi; ku duba shafin hukuma da amincewar makarantar." },
      { objective: "O5", q: "Yayin da hukumar ke duba buƙatarku, wane mataki ne mai hikima a shirinku?", options: ["Ku zauna ba komai", "Ku daina karatu", "Ku nemi ayyuka ku yi atisayen amsoshin ganawa", "Ku fara aiki ba tare da lasisi ba"], answer: 2, why: "Amfani da lokacin jira don neman aiki da atisaye yana sa a ɗauke ku aiki da sauri." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 3, 5, 6, 8, 11, 12, 15, 17, 18] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake dubawa.",
    criteria: [
      { name: "Matakan katin mai gadi na jiha", objective: "O1", notYet: "Babu hukumar, binciken tarihin laifi ko horon, ko an yi amfani da tallan horo maimakon shafin hukuma.", meets: "Ya lissafa hukumar, shekaru, binciken tarihin laifi, horo kafin da bayan lasisi, yadda ake nema, da adireshin shafin hukuma.", exceeds: "Ya ƙara ƙa'idojin sabuntawa da yadda ake tabbatar da makaranta ko lasisi." },
      { name: "Jerin abubuwan dubawa na sintiri da shiga", objective: "O2", notYet: "Babu wuraren sintiri, ƙa'idar ƙofar shiga ko littafin.", meets: "Ya rufe kowane abu a umarnin wurin aiki na atisaye kuma yana da littafi mai lokaci da aƙalla rubutu huɗu.", exceeds: "Ya ƙara miƙa aiki a canjin lokaci da shiri don bin baya (tailgating)." },
      { name: "Katin aljihu na lura-da-kai-rahoto", objective: "O3", notYet: "Ya ƙunshi bin mutum, ƙarfin da ya wuce umarni, ko babu matakin kiran 911 da farko.", meets: "Ya nuna kalmomi masu natsuwa, lokacin ja da baya a kira, rashin bin mutum, da 911 da farko a gaggawa.", exceeds: "Ya ƙara matakan shirin gaggawa na wurin da abin da za a gaya wa masu agaji." },
      { name: "Rahoton aukuwa na atisaye", objective: "O4", notYet: "Bai bayyana ba, yana da ra'ayoyi, ko babu lokuta ko wuri.", meets: "Ya amsa wane ne, me, yaushe, ina da yaya bisa jerin lokaci da gaskiya da ainihin kalmomi.", exceeds: "Siffofi suna da cikakken bayani har baƙon mutum zai gane mutane da wurare." },
      { name: "Shiri mai kwanan wata da layin tarihin aiki", objective: "O5", notYet: "Babu kwanaki, ko yana iƙirarin lasisin da ba a samu ba tukuna.", meets: "Kwanaki ga kowane mataki, masu ɗaukar aiki uku ko makarantun da aka amince da su a yanki, layin tarihin aiki na gaskiya.", exceeds: "Ya haɗa da amsoshin da aka yi atisaye ga tambayoyin ganawa biyu." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin da fakitin shiri da ya cika ma'aunin rubric",
      "Masu koyo da suka nemi katin mai gadi na jiha cikin kwanaki 60 (binciken biyo baya)",
      "Masu koyo da suka sami katin mai gadi kuma aka ɗauke su aikin jami'in tsaro (binciken biyo baya da rahotannin abokan aiki)",
      "Masu ɗaukar aiki abokan aiki sun ce sababbin jami'ai ba sa buƙatar sake rubuta rahotannin aukuwa a kwanaki 90 na farko"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai intanet don shafin lasisi na jiha",
      "Takarda da alƙalami, ko manhajar rubutu ta kyauta, don jerin abubuwan dubawa, littafi, rahoto da shiri",
      "Zaɓi: kwafin takardar bayanin jiharku da aka buga da samfurin umarnin wurin aiki",
      "Kusan minti 60 gaba ɗaya"
    ],
    facilitatorNotes: [
      "Ku faɗa tun da wuri kuma akai-akai: wannan kwas yana shirya masu koyo; hukumar jiha ce ke ba da lasisi, bayan horon da aka amince da shi.",
      "Kafin aji, ku buɗe shafin hukuma na jiharku ku kawo awannin horo, kuɗaɗe da fom na yanzu; ƙa'idoji suna canjawa.",
      "Kada ku koyar da riƙe mutum da ƙarfi, sanya ankwa ko makamai a wannan kwas; waɗannan suna buƙatar horon da aka amince da shi ido da ido.",
      "Ga masu koyo da ke da tarihin laifi, ku ɓoye shi kuma ku nuna musu ƙa'idojin jiha da shirin taimakon shari'a na masu dawowa gida; kada ku taɓa yin alƙawarin za a amince.",
      "Ku yi wasan kwaikwayo don kwantar da rikici tare da kalmar tsayawa bayyananniya, kuma ku ba da maki ga fakitin shiri da ma'aunin rubric layi ɗaya bayan ɗaya."
    ]
  }
};
