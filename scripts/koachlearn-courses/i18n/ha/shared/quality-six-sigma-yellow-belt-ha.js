"use strict";

// Koach Learn course, Hausa (ha) translation of shared/quality-six-sigma-yellow-belt.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.
// Exam facts (ASQ CSSYB, IASSC ICYB) are as in the English file; no fees are stated.

const ASQ = { name: "ASQ: Certified Six Sigma Yellow Belt (sharuɗɗa, jarabawa da Body of Knowledge)", url: "https://www.asq.org/cert/six-sigma-yellow-belt" };
const IASSC = { name: "IASSC: Certified Lean Six Sigma Yellow Belt (ICYB)", url: "https://www.iassc.org/six-sigma-certification/yellow-belt-certification/" };

module.exports = {
  id: "quality-six-sigma-yellow-belt-ha",
  lang: "ha",
  translationOf: "quality-six-sigma-yellow-belt",
  category: "Workforce Development",
  name: "Tushen Inganci (Shirin Jarabawar Six Sigma Yellow Belt)",
  skills: "Amfani da matakan DMAIC, Rubuta bayanin matsala, Tattara bayanai a check sheet, Gano tushen matsala da Pareto da 5 Whys, Kawar da ɓarna da kiyaye ci gaba, Shirya jarabawar Yellow Belt",
  outcome: "gudanar da ƙaramin aikin inganta wani tsarin aiki na gaske da matakai biyar na DMAIC (Define, Measure, Analyze, Improve, Control), nuna shi a shafi ɗaya, da bin tsari mai ranaku don shirya jarabawar Six Sigma Yellow Belt.",
  about: [
    "Kowane wurin aiki yana da tsarin aiki da ke samun matsala: oda da ke jinkiri, takardar kuɗi (invoice) mara daidai, dogon jira, kayan da ba su dace ba. Six Sigma hanya ce ta gyara su da hujjoji maimakon zato, kuma Lean hanya ce ta cire matakan da ke ɓata lokaci. Masu ɗaukar aiki a masana'antu, rumbunan ajiya, asibitoci, gwamnati, otal-otal da ofisoshi suna neman mutanen da suka san tushen wannan.",
    "Wannan kwas ɗin na masu neman aiki ne, da ma'aikatan da ke son ci gaba, da tsofaffin sojoji da ke shiga ayyukan farar hula, da masu ƙananan sana'o'i. Ba ku buƙatar lissafi fiye da tarawa, rabawa da kaso (percent).",
    "Za ku zaɓi wani tsarin aiki na gaske daga aikinku, sana'arku ko gidanku, ku inganta shi mataki-mataki, matakin DMAIC ɗaya a kowane darasi. Kwas ɗin yana SHIRYA ku don jarabawar Yellow Belt, kamar ASQ Certified Six Sigma Yellow Belt ko IASSC Certified Lean Six Sigma Yellow Belt; ba ya ba da takardar shaida. Kowane darasi yana ɗaukar kusan minti biyar kuma yana ƙarewa da aikin \"Gwada yanzu\" da gajeren gwaji mai tambayoyi biyu. Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku yi aikin inganta wani tsarin aiki na gaske a shafi ɗaya: bayanin matsala da manufa, taswirar tsarin aiki mai sauƙi, check sheet mai aƙalla bayanai 20 da kason lahani (defect rate), jadawalin Pareto da 5 Whys don babbar matsalar, ƙaramin gyara ɗaya da kuka gwada, da binciken kulawa (control) don kiyaye ci gaban. Ku ƙara tsarin karatu da jarabawa mai ranaku don jarabawar Yellow Belt da kuka zaɓa, tare da shafin hukuma inda kuka duba ƙa'idojinta na yanzu.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya da matasa da ke neman aiki ko ƙarin girma a ayyukan gudanarwa, masana'antu, rumbunan ajiya, ofisoshin asibiti, otal-otal da gwamnati; tsofaffin sojoji da ke shiga ayyukan farar hula na gudanarwa da inganci; masu ƙananan sana'o'i da ke son ƙarancin kurakurai da ƙarancin ɓarna.",
    startingPoint: "Yawancinsu sun ga matsaloli suna maimaituwa a wurin aiki kuma suna da ra'ayoyin gyara su, amma ba su yi amfani da hanya mai tsari ba, ba su tattara bayanai da gangan ba, kuma ba su yi amfani da kalmomin inganci kamar defect (lahani), root cause (tushen matsala) ko DMAIC ba. Lissafinsu na yau da kullum ne: ƙirga, rabawa da kaso.",
    gap: "Ƙwarewar inganci da ci gaba da ingantawa tana fitowa a tallace-tallacen ayyuka da yawa, kuma Yellow Belt takardar shaida ce ta farko da aka saba gani. Masu koyo suna buƙatar gudanar da ƙaramin ingantawa da hujjoji su nuna shi a shafi ɗaya, wanda za su iya magana a kai a ganawar neman aiki, kuma su san ainihin matakan zuwa jarabawar da aka amince da ita.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; ana bayyana kowace kalmar inganci a farkon lokacin da ta fito",
      "Na'urori: takarda da alƙalami sun isa; spreadsheet kyauta (Google Sheets ko Excel) yana taimakawa da jadawalai",
      "Lokaci: darussa na minti 5, da kusan mako ɗaya zuwa biyu na tattara bayanai don aikin ƙarshe",
      "Ƙa'idojin jarabawa, tsarinta da kuɗinta suna canjawa kuma sun bambanta tsakanin hukumomin ba da shaida; masu koyo suna duba shafin hukuma",
      "Babu sunayen kwastomomi, bayanan marasa lafiya ko sirrin kamfani a bayanan atisaye"
    ],
    prerequisites: "Babu. Masu koyo da ba su saba da kaso ba za su iya fara ɗaukar \"Everyday Math\" (Lissafin Yau da Kullum), kuma \"Excel and Spreadsheets\" (Excel da Spreadsheet) yana taimakawa da jadawalai."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku bayanin wani aikin ingantawa", action: "faɗin matakai biyar na DMAIC bisa tsari da bayyana abin da ake yi a kowanne", standard: "duk biyar ɗin daidai" },
    { id: "O2", condition: "Idan aka ba ku tsarin aiki mai matsalar da ke maimaituwa", action: "rubuta bayanin matsala da manufa da ake iya aunawa, da zana taswirar tsarin aiki mai sauƙi", standard: "da me, a ina, yaushe da girman matsalar, ba tare da dalili ko mafita a cikin bayanin ba" },
    { id: "O3", condition: "Idan aka ba ku tsarin aiki da za ku lura da shi na mako ɗaya zuwa biyu", action: "tattara bayanai a check sheet da lissafa kason lahani", standard: "da aƙalla bayanai 20, tare da nuna lissafin" },
    { id: "O4", condition: "Idan kuna da bayanan check sheet ɗinku", action: "gano babbar matsala da jadawalin Pareto da tono tushenta da 5 Whys", standard: "ta yadda tushen da aka gano abu ne da ƙungiyar za ta iya ɗaukar mataki a kai" },
    { id: "O5", condition: "Idan an gano tushen matsala", action: "zaɓar gyara da ke cire ɓarna ko kurakurai, gwada shi a ƙaramin mataki da kafa binciken kulawa", standard: "da bayanai kafin gyaran da bayansa" },
    { id: "O6", condition: "Ta amfani da shafin hukuma na ASQ ko IASSC", action: "yin tsarin karatu da jarabawa mai ranaku don jarabawar Yellow Belt", standard: "an duba tsarin jarabawar da ƙa'idojinta a wannan shafin" }
  ],
  chapters: [
    {
      name: "Babi na 1: Bayyana da auna matsalar",
      lessons: [
        {
          title: "Inganci, Six Sigma da matakai biyar na DMAIC",
          objectives: ["O1"],
          minutes: 5,
          goal: "Faɗin matakai biyar na DMAIC da bayyana abin da Yellow Belt ke yi a kowanne.",
          text: [
            "Inganci yana nufin ba wa kwastoma abin da yake buƙata, a hanya ɗaya, kowane lokaci. Lahani (defect) shi ne duk abin da kwastoma ba zai karɓa ba: oda mara daidai, isarwa da ta yi jinkiri, kayan da suka ɓace, kuskure a takardar kuɗi.",
            "Six Sigma hanya ce ta rage lahani ta amfani da bayanai maimakon zato. Lean hanya ce ta rage ɓarna, wato matakan da ke ƙara lokaci amma ba sa ƙara amfani. Masu ɗaukar aiki da yawa suna koyar da su tare a matsayin Lean Six Sigma.",
            "Ayyuka suna bin matakai biyar da ake kira DMAIC: Define (bayyana matsalar), Measure (auna girmanta), Analyze (bincike don gano tushenta), Improve (ingantawa ta gwada gyara), da Control (kulawa don kiyaye ci gaban). Belt (ɗamara) tana nuna matakin horo: Yellow Belt ya san tushe kuma yana taimakawa a ayyuka, sau da yawa ta tattara bayanai da zana matakai; Green Belt da Black Belt suna jagorantar manyan ayyuka.",
            "Shahararrun takardun shaidar Yellow Belt guda biyu su ne ASQ Certified Six Sigma Yellow Belt da IASSC Certified Lean Six Sigma Yellow Belt. Wannan kwas ɗin yana shirya ku; hukumar ba da shaida ce kaɗai ke ba da takardar shaidar."
          ],
          steps: ["Define: mece ce matsalar, kuma mece ce manufar?", "Measure: sau nawa take faruwa yanzu?", "Analyze: mene ne tushen matsalar?", "Improve: wane gyara ne ke aiki idan kun gwada shi?", "Control: ta yaya za ku kiyaye ci gaban?"],
          words: [["Lahani (defect)", "duk abin da kwastoma ba zai karɓa ba, kamar kaya mara daidai, wanda ya yi jinkiri ko ya karye."], ["Six Sigma", "hanyar rage lahani ta amfani da bayanai; inganci mai matuƙar girma yana nufin kusan lahani 3.4 cikin dama miliyan ɗaya."], ["Lean", "hanyar cire matakan da ke ɓata lokaci ko kayan aiki."], ["DMAIC", "Define, Measure, Analyze, Improve, Control: matakai biyar na aikin Six Sigma."], ["Yellow Belt", "mutumin da aka horar a tushe wanda ke taimakawa a ayyukan ingantawa."]],
          slides: [
            { title: "Inganci da lahani", bullets: ["Inganci: abin da kwastoma ke buƙata, a hanya ɗaya kowane lokaci", "Lahani: duk abin da kwastoma ba zai karɓa ba"] },
            { title: "Six Sigma da Lean", bullets: ["Six Sigma: ƙarancin lahani, ta amfani da bayanai", "Lean: ƙarancin matakan ɓarna", "Tare: Lean Six Sigma"] },
            { title: "DMAIC bisa tsari", bullets: ["Define: bayyana matsalar", "Measure: auna girmanta", "Analyze: nemo tushen matsalar", "Improve da gyaran da aka gwada, sannan Control don kiyaye shi"] },
            { title: "Belt da takardun shaida", bullets: ["Yellow Belt: ya san tushe, yana taimakawa a ayyuka", "ASQ da IASSC suna ba da jarabawar Yellow Belt", "Wannan kwas yana shirya ku; ba ya ba ku takardar shaida"] }
          ],
          sources: [ASQ, IASSC],
          tryIt: "Ku zaɓi wani tsarin aiki da kuka sani wanda ke yawan samun matsala, a wurin aiki, a sana'a ko a gida (misali oda da ake aikawa a makare, odar abincin rana mara daidai, ko takardun kuɗi masu kurakurai). Ku rubuta shi a saman shafi, sannan ku rubuta D, M, A, I, C a gefe, da tambaya ɗaya da za ku yi a kowane mataki.",
          youCanNow: "faɗin matakai biyar na DMAIC bisa tsari, bayyana abin da Yellow Belt ke yi, da zaɓar tsarin aiki da za ku inganta.",
          quickCheck: [
            { objective: "O1", q: "Wanne ne tsarin daidai na matakan DMAIC?", options: ["Design, Make, Assess, Inspect, Close", "Measure, Define, Improve, Analyze, Control", "Define, Measure, Analyze, Improve, Control", "Define, Manage, Act, Improve, Check"], answer: 2, why: "DMAIC yana nufin Define, Measure, Analyze, Improve, Control, a wannan tsarin." },
            { objective: "O1", q: "Ƙungiyarku tana gwada sabuwar hanyar ɗaure oda don ganin ko kurakurai za su ragu. Wane mataki ne wannan?", options: ["Improve", "Define", "Measure", "Control"], answer: 0, why: "Gwada gyara don ganin ko yana aiki yana faruwa a matakin Improve." }
          ]
        },
        {
          title: "Define: bayanin matsala da taswirar tsarin aiki",
          objectives: ["O2"],
          minutes: 5,
          goal: "Rubuta bayanin matsala da manufa, da zana taswirar tsarin aiki mai sauƙi.",
          text: [
            "Aiki mai kyau yana farawa da bayanin matsala a sarari. Yana faɗin abin da ba daidai ba, a ina, tun yaushe, girmansa, da dalilin da ya sa yake da muhimmanci. BA ya ambaton dalili ko mafita tukuna, domin ba ku gano su ba tukuna. Misali: \"Tun watan Yuni, oda 12 cikin kowace odar abincin rana 100 a gidan abinci na tsakiyar gari suna fita ba daidai ba, suna jawo mayar da kuɗi da ƙorafi.\"",
            "Manufa tana faɗin yawan ingantawar da kuma lokacin: \"A rage odar abincin rana mara daidai zuwa 3 cikin kowace 100 kafin ƙarshen Satumba.\"",
            "Sannan ku zana taswirar tsarin aikin. Ku rubuta kowane mataki a cikin akwati daga farko zuwa ƙarshe, ku haɗa su da kibiyoyi. SIPOC tebur ne mai sauri na babban hoton: Suppliers (masu samar da kaya), Inputs (abubuwan da ake shigarwa), Process (matakan aiki), Outputs (abin da ake fitarwa) da Customers (kwastomomi). Voice of the customer (VOC, muryar kwastoma) shi ne abin da kwastomomi suka ce suna buƙata; abubuwan da suka fi muhimmanci a gare su ana kiransu critical to quality (CTQ)."
          ],
          steps: ["Ku rubuta abin da ba daidai ba, a ina, tun yaushe da girmansa.", "Ku ƙara dalilin da ya sa yake da muhimmanci (kuɗi, lokaci, kwastomomi, tsaro).", "Ku duba: babu dalili kuma babu mafita a cikin bayanin.", "Ku rubuta manufa mai lamba da rana.", "Ku zana tsarin aikin a akwatuna 5 zuwa 8, daga farko zuwa ƙarshe."],
          words: [["Bayanin matsala (problem statement)", "gajeren bayani bisa hujjoji na abin da ba daidai ba, a ina, yaushe da girmansa."], ["Taswirar tsarin aiki (process map)", "zanen matakan tsarin aiki bisa tsari, da akwatuna da kibiyoyi."], ["SIPOC", "tebur na shafi ɗaya na Suppliers, Inputs, Process, Outputs da Customers."], ["Muryar kwastoma (VOC)", "abin da kwastomomi suka ce suna buƙata ko suke ƙorafi a kai."], ["Critical to quality (CTQ)", "siffar da ta fi muhimmanci ga kwastoma, kamar isowa a kan lokaci ko zama daidai."]],
          slides: [
            { title: "Bayanin matsala mai kyau", bullets: ["Me, a ina, tun yaushe, girmansa", "Dalilin da ya sa yake da muhimmanci", "Babu dalili kuma babu mafita tukuna"] },
            { title: "Manufa mai kyau", bullets: ["Yawan ingantawa, da lokaci", "Misali: oda mara daidai daga 12 zuwa 3 cikin 100 kafin ƙarshen Satumba"] },
            { title: "Zana taswirar tsarin aiki", bullets: ["Akwatuna 5 zuwa 8, daga farko zuwa ƙarshe", "Kibiyoyi suna nuna tsari", "SIPOC: Suppliers, Inputs, Process, Outputs, Customers"] },
            { title: "Ku saurari kwastoma", bullets: ["Muryar kwastoma: abin da yake buƙata", "Critical to quality: abin da ya fi muhimmanci a gare shi"] }
          ],
          tryIt: "Don tsarin aikin da kuka zaɓa, ku rubuta bayanin matsala mai me, a ina, tun yaushe da girmansa (ku yi amfani da kiyasinku mafi kyau a yanzu), manufa mai lamba da rana, da taswirar tsarin aiki mai akwatuna 5 zuwa 8 a takarda.",
          youCanNow: "rubuta bayanin matsala da manufa, da zana taswirar tsarin aiki mai sauƙi.",
          quickCheck: [
            { objective: "O2", q: "Wanne ne bayanin matsala mafi kyau?", options: ["\"Sabon mai dafa abinci ba ya kula.\"", "\"Tun watan Maris, kaya 8 cikin kowane kaya 50 daga rumbun gabas suna isowa a makare, suna jawo mayar wa kwastomomi kuɗi.\"", "\"Muna buƙatar sabon tsarin kwamfuta.\"", "\"Jigilar kaya ba ta da kyau.\""], answer: 1, why: "Yana ba da me, a ina, tun yaushe da girmansa, kuma ba ya ɗora laifi kan wani dalili ko ambaton mafita." },
            { objective: "O2", q: "Me harafin P a SIPOC yake nufi?", options: ["Price", "People", "Plan", "Process"], answer: 3, why: "SIPOC shi ne Suppliers, Inputs, Process, Outputs da Customers." }
          ]
        },
        {
          title: "Measure: check sheet da kason lahani",
          objectives: ["O3"],
          minutes: 6,
          goal: "Tattara bayanai a check sheet da lissafa kason lahani.",
          text: [
            "A matakin Measure kuna gano sau nawa matsalar take faruwa a zahiri. Zato yakan yi kuskure, don haka kuna ƙirgawa.",
            "Check sheet fom ne mai sauƙi a takarda ko a spreadsheet. A gefe, ku jera nau'o'in lahani (kaya mara daidai, kayan da suka ɓace, jinkiri). A sama, ku jera ranaku. Ku yi alama (tally) duk lokacin da ɗaya ya faru, kuma ku ƙirga jimillar kayan da kuka duba.",
            "Kason lahani shi ne kayan da ke da lahani a raba da jimillar kaya, a ninka da 100. Idan oda 15 cikin 200 ba daidai ba ne: 15 / 200 = 0.075, wato 7.5%. Six Sigma kuma yana amfani da DPMO, wato lahani cikin dama miliyan ɗaya: lahani a raba da (kaya a ninka da damar kuskure a kowane kaya), a ninka da 1,000,000. Idan takardun kuɗi 500 kowannensu yana da dama 4 na kuskure kuma kun sami kurakurai 10: 10 / (500 x 4) = 0.005, a ninka da 1,000,000 = 5,000 DPMO.",
            "Ku auna a hanya ɗaya kowane lokaci: ma'anar lahani ɗaya, lokaci ɗaya na rana, mutum ɗaya ko ƙa'idoji a sarari. Wannan shi ne baseline ɗinku (mizanin farko), lambar \"kafin\" da za ku kwatanta da ita daga baya."
          ],
          steps: ["Ku rubuta ma'anar kowane lahani a sarari.", "Ku yi check sheet: nau'o'in lahani a gefe, ranaku a sama.", "Ku yi alamar kowane lahani kuma ku ƙirga jimillar kayan da aka duba.", "Kason lahani = kaya masu lahani / jimillar kaya x 100.", "Ku rubuta wannan a matsayin baseline ɗinku."],
          words: [["Check sheet", "fom mai sauƙi don yin alamar sau nawa kowane irin matsala ke faruwa."], ["Kason lahani (defect rate)", "rabon kayan da ke da lahani, a matsayin kaso (percent)."], ["DPMO", "lahani cikin dama miliyan ɗaya: lahani / (kaya x dama a kowane kaya) x 1,000,000."], ["Baseline (mizanin farko)", "yadda tsarin aiki yake tafiya kafin ku canja shi."]],
          slides: [
            { title: "Ku ƙirga, kada ku yi zato", bullets: ["Ku auna sau nawa matsalar take faruwa", "Ku yi amfani da ma'anar lahani ɗaya a sarari"] },
            { title: "Check sheet", bullets: ["Nau'o'in lahani a gefe", "Ranaku a sama", "Alamomin ƙirga, da jimillar kayan da aka duba"] },
            { title: "Lissafin", bullets: ["Kason lahani = masu lahani / jimilla x 100", "15 ba daidai ba cikin 200 = 7.5%", "DPMO = lahani / (kaya x dama) x 1,000,000"] },
            { title: "Baseline ɗinku", bullets: ["Lambar \"kafin\"", "Ku auna a hanya ɗaya kowane lokaci", "Za ku kwatanta da ita bayan gyaran"] }
          ],
          tryIt: "Ku yi check sheet don tsarin aikinku a takarda ko a spreadsheet. Ku tattara aƙalla bayanai 20 a cikin mako mai zuwa (ku fara yau), sannan ku lissafa kason lahaninku ku nuna lissafin. Atisaye yanzu: isarwa 9 a makare cikin 150 kaso nawa ne? (Amsa: 9 / 150 = 0.06 = 6%.)",
          youCanNow: "tattara bayanai a check sheet, lissafa kason lahani da kafa baseline ɗinku.",
          quickCheck: [
            { objective: "O3", q: "Kun duba oda 80 kuma 4 ba daidai ba ne. Mene ne kason lahani?", options: ["5%", "4%", "20%", "8%"], answer: 0, why: "4 / 80 = 0.05, wato 5%." },
            { objective: "O3", q: "Me ya sa kuke rubuta ma'anar kowane lahani a sarari kafin ku ƙirga?", options: ["Don jadawalin ya fi kyau a gani", "Don shugaba ya sa hannu a kai", "Don kowa ya ƙirga a hanya ɗaya kuma a iya amincewa da lambobin", "Don ku buƙaci ƙarancin bayanai"], answer: 2, why: "Idan mutane suna ƙirga abubuwa daban-daban, ba za a iya kwatanta bayanan ko a amince da su ba." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Bayyana da auna matsalar",
        questions: [
          { objective: "O1", q: "A wane matakin DMAIC ne kuke neman tushen matsala?", options: ["Define", "Analyze", "Control", "Measure"], answer: 1, why: "Analyze shi ne inda kuke amfani da bayanai da kayan aiki don gano tushen matsala." },
          { objective: "O1", q: "Me Yellow Belt yakan yi a wani aiki?", options: ["Shi ne mai kamfanin", "Yana ba da takardun shaida", "Yana amincewa da kasafin kuɗi shi kaɗai", "Yana taimakawa da ayyuka kamar tattara bayanai da zana matakai"], answer: 3, why: "Yellow Belt sun san tushe kuma suna tallafa wa ayyuka, sau da yawa ta tattara bayanai da zana taswirar tsarin aiki." },
          { objective: "O2", q: "Wani bayanin matsala yana cewa, \"Kurakurai suna faruwa domin ma'aikata ba sa kula.\" Me ke damun sa?", options: ["Yana ɗora laifi kan wani dalili kafin a tattara kowane bayani", "Ya yi gajere da yawa don a karanta", "Yana amfani da lambobi", "Babu abin da ke damun sa"], answer: 0, why: "Bayanin matsala yana bayyana matsalar da hujjoji; ana gano dalilin daga baya, a Analyze." },
          { objective: "O3", q: "Kun duba fom 250 kuma kun sami 10 masu kurakurai. Mene ne kason lahani?", options: ["10%", "2.5%", "4%", "25%"], answer: 2, why: "10 / 250 = 0.04, wato 4%." },
          { objective: "O3", q: "Mene ne baseline?", options: ["Manufar da kuke son kaiwa", "Layin ƙasa a kan jadawali", "Rahoton ƙarshe", "Yadda tsarin aiki yake tafiya kafin ku canja shi"], answer: 3, why: "Baseline ita ce lambar \"kafin\" da kuke kwatantawa da ita bayan gyaran." }
        ]
      }
    },
    {
      name: "Babi na 2: Bincike, ingantawa da kulawa",
      lessons: [
        {
          title: "Analyze: jadawalin Pareto, fishbone da 5 Whys",
          objectives: ["O4"],
          minutes: 6,
          goal: "Gano babbar matsala da jadawalin Pareto da tushenta da 5 Whys.",
          text: [
            "Jadawalin Pareto jadawalin sanduna ne da aka jera daga sanda mafi girma zuwa mafi ƙanƙanta. Yana nuna cewa dalilai kaɗan ne sukan haifar da yawancin matsaloli, abin da ake kira ƙa'idar 80/20. Ku fara da sanda mafi girma.",
            "Zanen fishbone (ƙashin kifi; ana kuma kiransa zanen dalili da sakamako ko zanen Ishikawa) yana taimaka wa ƙungiya ta jera dalilai masu yiwuwa. Ku rubuta matsalar a \"kai\", sannan ku zana ƙasusuwa don rukunonin dalilai, kamar Methods (hanyoyi), Machines (injuna), Materials (kayan aiki), People (mutane), Measurement (aunawa) da Environment (muhalli).",
            "Sannan ku tambayi \"Me ya sa?\" kusan sau biyar don ku tono daga alamar matsala zuwa tushen da za ku iya gyarawa. Misali: Oda ba daidai ba ne. Me ya sa? Mai dafa abinci ya karanta tikitin ba daidai ba. Me ya sa? An rubuta tikitin da hannu. Me ya sa? Firinta ya lalace. Me ya sa? Babu wanda ke da alhakin gyara shi. Me ya sa? Babu binciken kulawa da gyara (maintenance). Tushen matsala: babu binciken maintenance a kan firintar.",
            "Ɗora laifi ba tushen matsala ba ne. Idan amsar ita ce \"wani bai kula ba\", ku ci gaba da tambayar me ya sa tsarin aikin ya bari kuskuren ya faru."
          ],
          steps: ["Ku tara kowane nau'in lahani daga check sheet ɗinku.", "Ku jera su daga mafi girma zuwa mafi ƙanƙanta ku zana sandunan.", "Ku zaɓi sanda mafi girma.", "Ku jera dalilai masu yiwuwa a kan fishbone.", "Ku tambayi \"Me ya sa?\" kusan sau biyar har ku kai ga dalilin da za ku iya ɗaukar mataki a kai."],
          words: [["Jadawalin Pareto", "jadawalin sanduna da aka jera daga mafi girma zuwa mafi ƙanƙanta, don nuna waɗanne matsaloli kaɗan suka fi muhimmanci."], ["Ƙa'idar 80/20", "yanayin da dalilai kaɗan sukan haifar da yawancin matsaloli."], ["Zanen fishbone", "zanen da ke rukuna dalilai masu yiwuwa na matsala; ana kuma kiransa zanen Ishikawa."], ["Tushen matsala (root cause)", "ainihin dalilin da ya sa matsala ke faruwa; idan kun gyara shi, matsalar tana tsayawa ko ta ragu."], ["5 Whys", "tambayar \"Me ya sa?\" akai-akai, kusan sau biyar, don a kai ga tushen matsala."]],
          slides: [
            { title: "Jadawalin Pareto", bullets: ["Sanduna daga mafi girma zuwa mafi ƙanƙanta", "Dalilai kaɗan suna haifar da yawancin matsaloli (80/20)", "Ku fara da sanda mafi girma"] },
            { title: "Zanen fishbone", bullets: ["Matsalar a kai", "Ƙasusuwa: Methods, Machines, Materials, People, Measurement, Environment"] },
            { title: "5 Whys", bullets: ["Ku tambayi \"Me ya sa?\" kusan sau biyar", "Oda mara daidai, tikitin hannu, firinta da ya lalace, babu bincike"] },
            { title: "Ɗora laifi ba tushen matsala ba ne", bullets: ["Ku tambayi me ya sa tsarin aiki ya bari kuskuren ya faru", "Ku nemo dalilin da za ku iya ɗaukar mataki a kai"] }
          ],
          tryIt: "Ku tara kowane nau'in lahani daga check sheet ɗinku, ku jera su, ku zana jadawalin Pareto a takarda ko a spreadsheet. Sannan ku rubuta 5 Whys don sanda mafi girma. Ku tsaya idan kun kai ga dalilin da za ku iya gyarawa wanda ba ya ɗora laifi kan wani mutum.",
          youCanNow: "zana jadawalin Pareto, zaɓar babbar matsala da tono tushenta da 5 Whys.",
          quickCheck: [
            { objective: "O4", q: "Jadawalin Pareto ɗinku yana nuna: girma mara daidai 40, kayan da suka ɓace 25, jinkiri 10, lalacewa 5. Daga ina za ku fara?", options: ["Lalacewa, domin ita ce mafi sauƙi", "Duk huɗu a lokaci ɗaya", "Jinkiri, domin kwastomomi ba sa son jira", "Girma mara daidai, sanda mafi girma"], answer: 3, why: "Jadawalin Pareto yana gaya muku ku fara da sanda mafi girma, inda gyara ke fi taimakawa." },
            { objective: "O4", q: "5 Whys ɗinku ya ƙare da \"ma'aikacin bai kula ba\". Me ya kamata ku yi?", options: ["Ku tsaya a nan ku rubuta ƙara kan ma'aikacin", "Ku ci gaba da tambayar me ya sa tsarin aiki ya bari kuskuren ya faru", "Ku fara sabon aiki", "Ku cire ma'aikacin daga jadawalin"], answer: 1, why: "Ɗora laifi ba tushen matsala ba ne; ku nemi abin da ke cikin tsarin aiki da ya ba da damar kuskuren." }
          ]
        },
        {
          title: "Improve: cire ɓarna da hana kurakurai a aiki",
          objectives: ["O5"],
          minutes: 5,
          goal: "Zaɓar gyara da ke cire ɓarna ko kurakurai da gwada shi a ƙaramin mataki.",
          text: [
            "Lean yana ambaton nau'o'in ɓarna takwas. Hanya mai sauƙi ta tuna su ita ce DOWNTIME: Defects (lahani), Overproduction (samar da fiye da buƙata), Waiting (jira), Non-used talent (basirar da ba a amfani da ita), Transportation (jigilar kaya), Inventory (kaya da yawa a ajiye), Motion (ƙarin tafiya ko miƙa hannu) da Extra processing (ƙarin aiki da ba a buƙata).",
            "Gyara mai kyau sau da yawa yana sa hanyar daidai ta zama hanya mai sauƙi. 5S yana tsara wurin aiki: Sort (ware), Set in order (tsara), Shine (tsabtace), Standardize (daidaita), Sustain (dorewa). Hana kurakurai (mistake-proofing, ko poka-yoke a harshen Japan) yana sa kurakurai su yi wuya ko su gagara, kamar filogi da ke shiga ta hanya ɗaya kawai, fom da ba zai tafi ba idan akwai akwati babu komai, ko kwando mai launi na musamman.",
            "Ku fara gwada gyaran a ƙaramin mataki: sauyi (shift) ɗaya, tebur ɗaya ko mako ɗaya. Wannan shi ne pilot (gwajin farko). Ku auna a hanya ɗaya da baseline ɗinku ku kwatanta. Idan lambobin sun inganta, ku yaɗa shi; idan ba haka ba, ku gwada ra'ayi na gaba."
          ],
          steps: ["Ku jera gyare-gyaren da ke kai wa tushen matsala hari.", "Ku fi son gyare-gyaren da ke cire ɓarna ko sa kurakurai su yi wuya.", "Ku yi ƙaramin pilot: sauyi ɗaya, tebur ɗaya ko mako ɗaya.", "Ku auna a hanya ɗaya da baseline.", "Ku kwatanta kafin da bayan."],
          words: [["Ɓarna (waste)", "duk matakin da ke amfani da lokaci ko kayan aiki amma ba ya ƙara amfani ga kwastoma."], ["DOWNTIME", "hanyar tuna ɓarna takwas: Defects, Overproduction, Waiting, Non-used talent, Transportation, Inventory, Motion, Extra processing."], ["5S", "Sort, Set in order, Shine, Standardize, Sustain: hanyar tsara wurin aiki."], ["Hana kurakurai (poka-yoke)", "tsari da ke sa kurakurai su yi wuya ko su gagara."], ["Pilot", "ƙarami kuma gajeren gwajin gyara kafin a yi amfani da shi ko'ina."]],
          slides: [
            { title: "Ɓarna takwas: DOWNTIME", bullets: ["Defects, Overproduction, Waiting, Non-used talent", "Transportation, Inventory, Motion, Extra processing"] },
            { title: "5S", bullets: ["Sort, Set in order, Shine", "Standardize, Sustain"] },
            { title: "Hana kurakurai", bullets: ["Ku sa hanyar daidai ta zama hanya mai sauƙi", "Filogi da ke shiga ta hanya ɗaya; fom da ke hana akwatuna babu komai"] },
            { title: "Pilot da farko", bullets: ["Sauyi ɗaya, tebur ɗaya ko mako ɗaya", "Ku auna kamar baseline", "Ya inganta? Ku yaɗa shi. Bai inganta ba? Ku gwada ra'ayi na gaba"] }
          ],
          tryIt: "Ku rubuta gyare-gyare uku masu yiwuwa don tushen matsalarku. Ku nuna wace ɓarna kowanne ke cirewa ko yadda yake hana kurakurai a aikin. Ku zaɓi ɗaya, ku shirya ƙaramin pilot (a ina, tsawon lokaci, wa zai yi), ku fara auna shi a hanya ɗaya da baseline ɗinku.",
          youCanNow: "gane ɓarna takwas, zaɓar gyara da ke cire ɓarna ko kurakurai, da gwada shi da ƙaramin pilot.",
          quickCheck: [
            { objective: "O5", q: "Ma'aikata suna tafiya ƙetaren rumbun ajiya sau da yawa a rana don ɗauko tef. Wace ɓarna ce wannan?", options: ["Overproduction", "Defects", "Motion", "Inventory"], answer: 2, why: "Ƙarin tafiya da miƙa hannu na mutane ɓarnar motion ce." },
            { objective: "O5", q: "Kuna da gyaran da kuke tsammani zai yi aiki. Mene ne mataki na gaba mafi kyau?", options: ["Ku gwada shi a ƙaramin mataki ku kwatanta da baseline", "Ku yaɗa shi zuwa kowane wuri lokaci ɗaya", "Ku bar aunawa, tun da kun tabbata", "Ku jira shekara ɗaya don ganin sakamako"], answer: 0, why: "Ƙaramin pilot da aka auna kamar baseline yana nuna ko gyaran yana aiki da gaske." }
          ]
        },
        {
          title: "Kiyaye ci gaba, da shirya jarabawar Yellow Belt ɗinku",
          objectives: ["O5", "O6"],
          minutes: 6,
          goal: "Kafa binciken kulawa don gyaran da yin tsarin karatu da jarabawa mai ranaku.",
          text: [
            "Gyare-gyare da yawa suna ɓacewa idan mutane suka koma tsofaffin halaye. A matakin Control kuna kiyaye ci gaban: ku rubuta sabuwar hanyar a matsayin standard work (aikin da aka daidaita, wato gajeren jerin dubawa ko hoton matakan daidai), ku horar da mutane a kai, ku ci gaba da aunawa. Run chart yana zana lambobinku a kan lokaci da layin tsakiya; control chart yana ƙara iyakoki da ke nuna lokacin da tsarin aiki ya canja fiye da yadda aka saba. Ku rubuta control plan (tsarin kulawa) mai sauƙi: abin da za a duba, sau nawa, wa zai duba, da abin da za a yi idan lambar ta ƙara muni.",
            "Yanzu ku shirya takardar shaidarku. ASQ Certified Six Sigma Yellow Belt ba shi da sharaɗin ƙwarewar aiki ko na ilimi, kuma jarabawarsa open book ce (ana ba da damar duba littattafan bayaninku da aka ɗaure), a cewar asq.org. IASSC Certified Lean Six Sigma Yellow Belt ba shi da sharuɗɗan farko, kuma jarabawarsa closed book ce (ba a duba littattafai) kuma ana sa ido a kanta (proctored), a cewar iassc.org. Tsari, kuɗi da ƙa'idoji suna canjawa, don haka ku karanta shafin hukuma kafin ku yi rajista. Wasu masu ɗaukar aiki kuma suna yin nasu horon Yellow Belt a cikin kamfani.",
            "Ku sauke Body of Knowledge na hukumar ba da shaida (jerin batutuwan da jarabawar za ta iya ƙunsa), ku yi alama a kan kowane batu da kuka sani, ku shirya lokacin karatu don sauran. Ku sa ranaku na gaske a kalanda, kuma ku yi rajistar jarabawa ne kawai idan makin atisayenku sun tsaya daram."
          ],
          steps: ["Ku rubuta sabuwar hanyar a matsayin standard work.", "Ku yi control plan: me, sau nawa, wa, da abin da za a yi idan ya ƙara muni.", "Ku ci gaba da run chart na aƙalla 'yan makonni.", "Ku zaɓi jarabawa ku karanta shafinta na hukuma.", "Ku yi amfani da Body of Knowledge don shirya ranakun karatu da ranar jarabawa da kuke nufi."],
          words: [["Standard work", "hanya mafi kyau da aka amince da ita ta yin wani aiki, a rubuce a matsayin matakai masu sauƙi ko hotuna."], ["Run chart", "jadawalin layi na wani ma'auni a kan lokaci, don ganin yanayin canji."], ["Control chart", "run chart mai iyakoki da ke nuna lokacin da tsarin aiki ya canja fiye da yadda aka saba."], ["Control plan", "gajeren tsari da ke faɗin abin da za a duba, sau nawa, wa zai duba da abin da za a yi idan ya koma baya."], ["Body of Knowledge", "jerin hukuma na batutuwan da jarabawa za ta iya ƙunsa."]],
          slides: [
            { title: "Kiyaye ci gaba", bullets: ["Ku rubuta sabuwar hanyar a matsayin standard work", "Ku horar da mutane a kai", "Ku ci gaba da aunawa"] },
            { title: "Jadawalan da ke lura da tsarin aiki", bullets: ["Run chart: lambobi a kan lokaci da layin tsakiya", "Control chart: yana ƙara iyakoki na sauyin da aka saba"] },
            { title: "Jarabawar Yellow Belt guda biyu", bullets: ["ASQ CSSYB: open book, ba a buƙatar ƙwarewar aiki", "IASSC ICYB: closed book, ana sa ido, babu sharuɗɗan farko", "Ku duba shafin hukuma: ƙa'idoji suna canjawa"] },
            { title: "Tsarin karatu da jarabawarku", bullets: ["Ku sauke Body of Knowledge", "Ku yi alamar abin da kuka sani; ku shirya sauran", "Ranaku na gaske; ku yi rajista idan makin atisaye sun tsaya"] }
          ],
          sources: [ASQ, IASSC],
          tryIt: "Aikin ƙarshe: ku kammala aikinku na shafi ɗaya (bayanin matsala da manufa, taswirar tsarin aiki, check sheet da kason lahani, jadawalin Pareto da 5 Whys, gyaran da kuka yi pilot da lambobin kafin da bayan, da control plan). Sannan ku buɗe shafin Yellow Belt na ASQ ko IASSC, ku rubuta tsarin jarabawar da kuka samu a can, ku yi tsarin karatu mai aƙalla zaman karatu huɗu masu ranaku da ranar jarabawa da kuke nufi.",
          youCanNow: "kiyaye ci gaba da standard work da control plan, da bin tsari mai ranaku zuwa jarabawar Yellow Belt.",
          quickCheck: [
            { objective: "O5", q: "Watanni uku bayan gyara, kurakurai suna sake ƙaruwa a hankali. Wane mataki ne ya ɓace?", options: ["Define", "Control", "Measure", "Analyze"], answer: 1, why: "Control yana kiyaye ci gaba da standard work, horo da dubawa akai-akai." },
            { objective: "O6", q: "A ina ya kamata ku duba ƙa'idoji da tsarin jarabawar Yellow Belt na yanzu?", options: ["Wani rubutu a kafofin sada zumunta", "Abokin da ya ci jarabawar shekaru da suka wuce", "Tallar kwas mai arha", "Shafin hukuma na hukumar ba da shaida, kamar asq.org ko iassc.org"], answer: 3, why: "Ƙa'idojin jarabawa, tsarinta da kuɗinta suna canjawa; shafin hukumar ba da shaida da kanta ita ce majiyar da za a amince da ita." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Bincike, ingantawa da kulawa",
        questions: [
          { objective: "O4", q: "Me jadawalin Pareto yake nunawa?", options: ["Waɗanne matsaloli kaɗan ne ke haifar da yawancin wahala", "Matakan tsarin aiki bisa tsari", "Kasafin kuɗin wani aiki", "Wa ke da laifi"], answer: 0, why: "Jadawalin Pareto yana jera matsaloli daga mafi girma zuwa mafi ƙanƙanta don ku ga 'yan kaɗan masu muhimmanci." },
          { objective: "O4", q: "Wane kayan aiki ne ke rukuna dalilai masu yiwuwa a ƙasusuwa kamar Methods, Machines da Materials?", options: ["Check sheet", "Run chart", "Zanen fishbone", "SIPOC"], answer: 2, why: "Zanen fishbone (Ishikawa) yana rukuna dalilai masu yiwuwa na matsala ɗaya." },
          { objective: "O5", q: "Wani fom ba zai tafi ba sai an cike kowane akwati da ake buƙata. Wannan misali ne na:", options: ["Overproduction", "Hana kurakurai", "Inventory", "Control chart"], answer: 1, why: "Hana kurakurai (poka-yoke) yana sa kuskure ya yi wuya ko ya gagara." },
          { objective: "O5", q: "Mene ne matakan 5S?", options: ["Sell, Ship, Save, Serve, Smile", "See, Say, Stop, Start, Sign", "Scan, Score, Solve, Sort, Send", "Sort, Set in order, Shine, Standardize, Sustain"], answer: 3, why: "5S shi ne Sort, Set in order, Shine, Standardize, Sustain." },
          { objective: "O6", q: "Mene ne Body of Knowledge?", options: ["Jerin hukuma na batutuwan da jarabawa za ta iya ƙunsa", "Littafin karatun likitanci", "Littafin ƙa'idojin kamfani", "Jerin amsoshin jarabawowin da suka wuce"], answer: 0, why: "Hukumar ba da shaida tana wallafa Body of Knowledge don ku san abin da za ku karanta." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Tushen Inganci (Shirin Jarabawar Six Sigma Yellow Belt)",
    questions: [
      { objective: "O1", q: "Me DMAIC yake nufi?", options: ["Do, Make, Ask, Inspect, Close", "Design, Monitor, Act, Inform, Check", "Define, Measure, Analyze, Improve, Control", "Decide, Measure, Approve, Install, Count"], answer: 2, why: "Matakai biyar na aikin Six Sigma su ne Define, Measure, Analyze, Improve da Control." },
      { objective: "O1", q: "Rubuta bayanin matsala da manufa yana faruwa a wane mataki?", options: ["Define", "Improve", "Control", "Analyze"], answer: 0, why: "Define yana bayyana matsalar, manufar da tsarin aikin." },
      { objective: "O1", q: "Wace magana ce gaskiya game da kwas na Yellow Belt kamar wannan?", options: ["Kammala shi yana ba da takardar shaidar ASQ", "Yana maye gurbin kowace jarabawa", "Black Belt ne kaɗai za su iya ɗaukarsa", "Yana shirya ku; hukumar ba da shaida ce ke ba da takardar shaidar"], answer: 3, why: "Kwas yana shirya ku; hukumar ba da shaida kaɗai, kamar ASQ ko IASSC, ke ba da takardar shaidar." },
      { objective: "O2", q: "Me bayanin matsala mai kyau ya ƙunsa?", options: ["Mafitar da kuka fi so", "Me, a ina, tun yaushe da girmansa", "Sunan ma'aikacin da za a ɗora wa laifi", "Kalmar \"matsala\" kawai"], answer: 1, why: "Yana ba da hujjojin matsalar ba tare da ambaton dalili ko mafita ba." },
      { objective: "O2", q: "Wace ce manufa da ake iya aunawa?", options: ["\"Mu yi kyau a oda\"", "\"Mu ƙara ƙoƙari\"", "\"Mu rage isarwa a makare daga 10% zuwa 3% kafin 31 ga Disamba\"", "\"Mu sa kwastomomi su fi farin ciki wata rana\""], answer: 2, why: "Tana da lamba da rana, don haka za ku iya sanin ko kun kai gare ta." },
      { objective: "O2", q: "Taswirar tsarin aiki tana nuna:", options: ["Matakan tsarin aiki bisa tsari, da akwatuna da kibiyoyi", "Ribar kamfanin", "Inda ofishin yake a taswirar titi", "Wane ma'aikaci ne ya fi sauri"], answer: 0, why: "Taswirar tsarin aiki tana zana kowane mataki daga farko zuwa ƙarshe." },
      { objective: "O3", q: "Don me ake amfani da check sheet?", options: ["Biyan ma'aikata", "Sa hannu a kwangiloli", "Rubuta manufa", "Yin alamar sau nawa kowane irin matsala ke faruwa"], answer: 3, why: "Check sheet fom ne mai sauƙi don ƙirga lahani bisa nau'insu." },
      { objective: "O3", q: "Kun duba takardun kuɗi 400 kuma 12 suna da kurakurai. Mene ne kason lahani?", options: ["12%", "3%", "4%", "0.3%"], answer: 1, why: "12 / 400 = 0.03, wato 3%." },
      { objective: "O3", q: "Kaya 100, kowanne da dama 5 na kuskure, suna da kurakurai 2 gaba ɗaya. Mene ne DPMO?", options: ["2,000", "400", "4,000", "20,000"], answer: 2, why: "2 / (100 x 5) = 0.004, kuma 0.004 x 1,000,000 = 4,000." },
      { objective: "O4", q: "Ƙa'idar 80/20 a jadawalin Pareto tana nufin:", options: ["Dalilai kaɗan sukan haifar da yawancin matsaloli", "Ma'aikata 80 suna yin kurakurai 20", "A gyara matsaloli 20 a rana", "Kowane dalili yana da muhimmanci daidai"], answer: 0, why: "Pareto yana nuna 'yan dalilai kaɗan masu muhimmanci, don haka kuna farawa da sanda mafi girma." },
      { objective: "O4", q: "Me ya sa kuke tambayar \"Me ya sa?\" kusan sau biyar?", options: ["Don a rage saurin taron", "Don a nemo wanda za a ɗora wa laifi", "Domin jarabawa tana buƙatar biyar daidai", "Don a tono bayan alamar matsala zuwa tushen da za ku iya gyarawa"], answer: 3, why: "Kowane \"me ya sa\" yana zurfafa mataki ɗaya har ku kai ga dalilin da za ku iya ɗaukar mataki a kai." },
      { objective: "O4", q: "Wace amsa ce tushen matsala da za ku iya ɗaukar mataki a kai?", options: ["\"Mutane malalata ne\"", "\"Babu binciken maintenance a kan firintar tikiti\"", "\"Rashin sa'a\"", "\"Kwastomomi suna da wahala\""], answer: 1, why: "Tushen matsala giɓi ne a tsarin aiki da za ku iya gyarawa, ba ɗora laifi ko sa'a ba." },
      { objective: "O5", q: "Akwatunan ƙarin kaya sun cika ɗakin baya kuma wasu sun ƙare wa'adinsu. Wace ɓarna ce wannan?", options: ["Motion", "Waiting", "Inventory", "Non-used talent"], answer: 2, why: "Kaya da yawa a ajiye ɓarnar inventory ce." },
      { objective: "O5", q: "Kafin ku yaɗa gyara ko'ina, ya kamata ku:", options: ["Gwada shi a ƙaramin pilot ku kwatanta da baseline", "Bar aunawa", "Canja abubuwa biyar lokaci ɗaya", "Roƙi kwastomomi su jira"], answer: 0, why: "Pilot yana nuna ko gyaran yana aiki kafin ku kashe lokaci da kuɗi wajen yaɗa shi." },
      { objective: "O5", q: "Me control plan yake faɗi?", options: ["Wa zai sami kyauta (bonus)", "Ranar fara aikin kawai", "Yadda ake rubuta bayanin matsala", "Abin da za a duba, sau nawa, wa zai duba da abin da za a yi idan ya koma baya"], answer: 3, why: "Control plan yana kiyaye ci gaba ta kafa dubawa akai-akai da matakin da za a ɗauka." },
      { objective: "O5", q: "Run chart shi ne:", options: ["Jerin ɓarna takwas", "Jadawalin layi na wani ma'auni a kan lokaci", "Zanen dalilai", "Taswirar gini"], answer: 1, why: "Run chart yana zana bayanai a kan lokaci don ku ga ko ci gaban yana dorewa." },
      { objective: "O6", q: "A cewar asq.org, jarabawar ASQ Certified Six Sigma Yellow Belt:", options: ["Ta mutanen da ke da ƙwarewar shekaru biyar ce kawai", "Mai ɗaukar aikinku ne kawai ke ba da ita a aji", "Open book ce, ba tare da sharaɗin ƙwarewar aiki ko ilimi ba", "Closed book ce ba tare da wani rubutu ba"], answer: 2, why: "ASQ ya ce CSSYB ba shi da sharaɗin ƙwarewar aiki ko ilimi kuma jarabawarsa open book ce." },
      { objective: "O6", q: "A cewar iassc.org, jarabawar IASSC Yellow Belt:", options: ["Closed book ce kuma ana sa ido a kanta", "Open book ce da kowane rubutu", "Ana yin ta ba tare da iyakar lokaci ba", "Ta membobin ASQ ce kawai"], answer: 0, why: "IASSC ya bayyana jarabawar ICYB a matsayin closed book kuma ana sa ido a kanta." },
      { objective: "O6", q: "Mene ne mataki na farko mafi kyau wajen gina tsarin karatunku?", options: ["Ku yi rajistar jarabawa don gobe", "Ku sayi kwas mafi tsada", "Ku haddace tsofaffin amsoshin jarabawa daga wani shafin intanet", "Ku sauke Body of Knowledge ku yi alamar batutuwan da kuke buƙatar karantawa"], answer: 3, why: "Body of Knowledge yana nuna abin da jarabawar ta ƙunsa, don ku shirya lokacin karatu don giɓinku." },
      { objective: "O6", q: "Yaushe ya kamata ku yi rajistar ranar jarabawarku?", options: ["Kafin ku karanta komai", "Idan makin atisayenku sun tsaya daram kuma kun duba ƙa'idojin hukuma", "Ba sai an yi ba; ba a buƙatar takardun shaida", "Sai bayan mai ɗaukar aikinku ya gaya muku"], answer: 1, why: "Makin atisaye da suka tsaya daram da ƙa'idoji na yanzu suna nufin kun shirya yin jarabawa." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 3, 4, 7, 9, 10, 12, 16] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Matsala da manufa", objective: "O2", notYet: "Bayanin ba shi da sarari ko yana ambaton dalili ko mafita; manufar ba ta da lamba ko rana.", meets: "Bayanin yana ba da me, a ina, tun yaushe da girmansa; manufar tana da lamba da rana; akwai taswirar tsarin aiki mai matakai 5 zuwa 8.", exceeds: "Yana kuma da SIPOC ko yana ambaton abin da kwastoma ya fi damuwa da shi (CTQ)." },
      { name: "Bayanai da kason lahani", objective: "O3", notYet: "Bayanai ƙasa da 20, ko babu ma'anar lahani a sarari.", meets: "Check sheet mai aƙalla bayanai 20 da kason lahani tare da nuna lissafin.", exceeds: "Yana kuma ba da DPMO, ko yana nuna an yi amfani da ƙa'idojin ƙirga iri ɗaya kowace rana." },
      { name: "Tushen matsala", objective: "O4", notYet: "Babu jadawalin Pareto, ko 5 Whys ya ƙare da ɗora laifi.", meets: "Jadawalin Pareto da aka jera daga mafi girma zuwa mafi ƙanƙanta da 5 Whys da ya ƙare da dalilin tsarin aiki da wani zai iya ɗaukar mataki a kai.", exceeds: "Yana kuma amfani da fishbone don nuna wasu dalilan da ƙungiyar ta kawar." },
      { name: "Gyara da kulawa", objective: "O5", notYet: "Ba a gwada gyaran ba, ko babu lambobin kafin da bayan.", meets: "Gyaran da aka yi pilot da lambobin kafin da bayan da control plan (me, sau nawa, wa, me za a yi idan ya koma baya).", exceeds: "Yana kuma da standard work ko run chart da ya rufe makonni da yawa." },
      { name: "Labarin DMAIC", objective: "O1", notYet: "Shafin yana tsalle-tsalle kuma matakan sun ɓace ko ba su bi tsari ba.", meets: "Shafin yana bin Define, Measure, Analyze, Improve, Control bisa tsari.", exceeds: "Mai koyo zai iya bayyana aikin cikin ƙasa da minti biyu, kamar a ganawar neman aiki." },
      { name: "Tsarin karatu da jarabawa", objective: "O6", notYet: "Babu ranaku, ko ba a duba shafin hukuma ba.", meets: "Yana ambaton jarabawa, tsarinta da aka duba a shafinta na hukuma, aƙalla zaman karatu huɗu masu ranaku da ranar jarabawa da ake nufi.", exceeds: "Yana kuma haɗa zaman karatu da batutuwan Body of Knowledge kuma yana da ranakun jarabawar atisaye." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka zauna kuma suka ci jarabawar Yellow Belt cikin watanni 6 (binciken biyo baya)",
      "Masu koyo da suka yi amfani da aikinsu na shafi ɗaya a ganawar neman aiki, ko suka sami aiki, ƙarin girma ko matsayi a ƙungiyar ingantawa (binciken biyo baya)",
      "Masu koyo da masu ƙananan sana'o'i da suka ce kason lahani ya ragu ko ɓarna ta ragu a tsarin aikin da suka zaɓa bayan kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Takarda, alƙalami da rula don check sheet, jadawalai da taswirar tsarin aiki",
      "Zaɓi: spreadsheet kyauta (Google Sheets ko Microsoft Excel) don jadawalin Pareto da run chart",
      "Tsarin aiki na gaske da za a lura da shi na mako ɗaya zuwa biyu (a wurin aiki, a sana'a, ko a gida)",
      "Intanet don karanta shafin Yellow Belt na hukuma na ASQ ko IASSC",
      "Kusan minti 60 na darussa da gwaje-gwaje, da mako ɗaya zuwa biyu na tattara bayanai don aikin ƙarshe"
    ],
    facilitatorNotes: [
      "A rukuni: ku yi gwajin farko tare, sannan ku yi babi ɗaya a kowane zama. Ku sa kowane mai koyo ya zaɓi tsarin aikinsa a zama na farko don tattara bayanai ya fara da wuri.",
      "Ku yi atisayen jadawalin Pareto da 5 Whys a rukuni kan misali ɗaya da kowa ke amfani da shi (kamar oda mara daidai a gidan abinci) kafin masu koyo su yi nasu.",
      "Ku dakatar da duk wani 5 Whys da ya ƙare da ɗora laifi, ku tambayi me a cikin tsarin aiki ya bari kuskuren ya faru.",
      "Ku tunatar da masu koyo kada su rubuta sunayen kwastomomi, bayanan marasa lafiya ko sirrin kamfani a bayanansu.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya; ku sa masu koyo su yi atisayen bayyana aikinsu kamar amsa a ganawar neman aiki.",
      "Kada ku faɗi kuɗin jarabawa ko makin cin jarabawa daga ka; ku tura masu koyo zuwa asq.org ko iassc.org don ƙa'idoji na yanzu."
    ]
  }
};
