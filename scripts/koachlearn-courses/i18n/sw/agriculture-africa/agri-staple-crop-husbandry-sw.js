"use strict";

// Koach Learn course (Swahili translation of agriculture-africa/agri-staple-crop-husbandry.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const KEPHIS = { name: "Kenya Plant Health Inspectorate Service (KEPHIS): uthibitishaji wa mbegu na Orodha ya Kitaifa ya Aina za Mazao", url: "https://www.kephis.go.ke" };
const NASC = { name: "National Agricultural Seed Council (NASC, Nigeria): uthibitishaji wa mbegu", url: "https://seedcouncil.gov.ng" };
const KALRO = { name: "Shirika la Utafiti wa Kilimo na Mifugo la Kenya (KALRO)", url: "https://www.kalro.org" };
const IITA = { name: "Taasisi ya Kimataifa ya Kilimo cha Kitropiki (IITA)", url: "https://www.iita.org" };
const AFRICARICE = { name: "AfricaRice (makao makuu Abidjan, Côte d'Ivoire)", url: "https://www.africarice.org" };
const IITA_CASSAVA_VIRUS = { name: "IITA: Juhudi za timu ya IITA kudhibiti virusi vinavyoharibu mihogo barani Afrika (2017)", url: "https://iita.org/?p=16690" };
const CIMMYT_MLN = { name: "CIMMYT: Kuelewa na kuzuia maambukizi ya ugonjwa wa MLN wa mahindi kupitia mbegu barani Afrika", url: "https://mln.cimmyt.org/understanding-and-preventing-seed-transmission-of-maize-lethal-necrosis-mln-in-africa" };
const JIRCAS_BLAST = { name: "JIRCAS pamoja na AfricaRice: Tofauti za kijenetiki za ukinzani dhidi ya blast katika mpunga wa Afrika Magharibi (2017)", url: "https://www.jircas.go.jp/en/publication/research_results/2017_b01" };
const PCPB = { name: "Pest Control Products Board (Kenya): bidhaa zilizosajiliwa", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "NAFDAC (Nigeria): kemikali za kilimo zilizosajiliwa", url: "https://www.nafdac.gov.ng" };
const HANDBOOK_4R = { name: "4R Plant Nutrient Management in African Agriculture: kitabu cha ugani cha matumizi ya mbolea", url: "https://alliancebioversityciat.org/publications-data/4r-plant-nutrient-management-african-agriculture-extension-handbook-fertilizer" };

module.exports = {
  id: "agri-staple-crop-husbandry-sw",
  lang: "sw",
  translationOf: "agri-staple-crop-husbandry",
  category: "Agriculture (Africa)",
  name: "Kilimo Bora cha Kisasa: Mahindi, Mpunga, Mihogo na Mikunde",
  skills: "Kuchagua aina na mbegu zilizothibitishwa, Kukokotoa idadi ya mimea na mahitaji ya mbegu kutokana na nafasi, Kupanga wakati wa kuandaa shamba, kulisha na kupalilia, Kutambua MLN ya mahindi, virusi vya mihogo na blast ya mpunga, Kujua wakati wa kuvuna na kukokotoa mavuno kwa hekta na kwa ekari",
  outcome: "kuandika mpango wa uzalishaji wa msimu kwa zao moja la chakula (mahindi, mpunga, mihogo au mkunde) kwenye shamba lako: aina na mbegu, idadi ya mimea na mahitaji ya mbegu, kalenda yenye tarehe ya kuandaa shamba, kupanda, kulisha na kupalilia, magonjwa makuu ya kuangalia na cha kufanya, na lengo la mavuno kwa hekta na kwa ekari.",
  about: [
    "Kozi hii ni kwa wakulima wadogo na wakulima wa biashara wanaokua, wafanyakazi wa mashamba, vijana wajasiriamali wa kilimo na maafisa ugani wanaolima mazao yanayolisha Afrika: mahindi, mpunga, mihogo, maharagwe, kunde, karanga na soya. Mifano inatoka Kenya, Nigeria, Ghana na Côte d'Ivoire.",
    "Sura ya 1 inahusu kuanza zao vizuri: kuchagua aina kutoka taasisi ya utafiti ya nchi yako na kununua mbegu zilizothibitishwa au vipandikizi safi, kuandaa shamba, kukokotoa idadi ya mimea unayohitaji na kiasi cha mbegu cha kununua, na kupanga wakati wa kulisha na kupalilia. Sura ya 2 inahusu kulinda na kupima zao: kutambua MLN ya mahindi, batobato na michirizi ya kahawia ya mihogo, na blast ya mpunga, kujua wakati wa kuvuna, na kukokotoa mavuno yako kwa hekta na kwa ekari.",
    "Upimaji wa udongo na mbolea vinafundishwa katika kozi \"Afya na Rutuba ya Udongo\", na uhifadhi katika \"Utunzaji na Uhifadhi Baada ya Mavuno\", kwa hiyo kozi hii inakuelekeza huko badala ya kuyarudia. Aina, nafasi na viwango vinatofautiana kutoka eneo moja hadi jingine, kwa hiyo tumia kozi hii pamoja na afisa ugani na taasisi ya utafiti. Jaribio fupi linafuata kila somo, jaribio la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Andika mpango wa uzalishaji kwa zao moja la chakula kwenye shamba lako: ukubwa wa shamba kwa hekta na ekari, aina uliyochagua na mahali utakaponunua mbegu zilizothibitishwa au vipandikizi safi, nafasi ya kupanda pamoja na hesabu yako ya idadi ya mimea na mahitaji ya mbegu au vipandikizi, kalenda yenye tarehe (kuandaa shamba, kupanda, mbolea kama upimaji wa udongo au afisa ugani anavyoshauri, kila palizi), magonjwa mawili makuu ya kuangalia na hatua yako ya kwanza kwa kila mmoja, jinsi utakavyojua wakati wa kuvuna, na lengo la mavuno kwa hekta na kwa ekari pamoja na hesabu yako.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wakulima wadogo na wakulima wa biashara wanaokua, wafanyakazi wa mashamba, vijana wajasiriamali wa kilimo na maafisa ugani kote Afrika wanaolima mahindi, mpunga, mihogo na mikunde (maharagwe, kunde, karanga, soya), kuanzia nusu ekari hadi hekta chache.",
    startingPoint: "Wamelima zao hilo kwa miaka, mara nyingi kwa mbegu za kurudia au vipandikizi vya kugawana, kwa kutawanya mbegu au nafasi isiyo sawa, palizi iliyochelewa na bila kuandika mavuno. Wengi hawajui idadi ya mimea yao, wana aina gani, au jinsi ya kukokotoa mavuno kwa hekta au kwa ekari.",
    gap: "Mavuno ya mazao ya chakula kwenye mashamba mengi ya Afrika ni chini sana ya yale ambayo aina bora na kilimo bora vinaweza kutoa. Wanafunzi wanahitaji kuchagua aina inayofaa na mbegu safi, kupanda idadi sahihi ya mimea, kulisha na kupalilia kwa wakati, kutambua magonjwa yanayoangamiza mazao, kuvuna kwa wakati sahihi na kupima mavuno yao ili waone kinachofanya kazi.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; wanafunzi wengi wanatumia Kiingereza kama lugha ya pili na kozi inapatikana pia kwa Kihispania, Kifaransa na Kiarabu",
      "Hesabu: kuzidisha na kugawanya rahisi kwa kikokotoo cha simu; kila hesabu inaonyeshwa hatua kwa hatua",
      "Vifaa: simu ya kawaida yenye kikokotoo; utepe wa kupimia au kamba yenye alama na mizani vinasaidia",
      "Aina, nafasi na viwango vya mbolea vinatofautiana kwa eneo na vinabadilika aina mpya zinapotolewa; wanafunzi wanakagua orodha ya kitaifa ya aina na afisa ugani wao",
      "Rutuba inafundishwa katika \"Afya na Rutuba ya Udongo\"; kozi hii inashughulikia tu kilicho tofauti kwa kila zao"
    ],
    prerequisites: "Hakuna, lakini inashauriwa sana kusoma \"Afya na Rutuba ya Udongo\" kabla au pamoja na kozi hii."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Kwa zao la chakula utakalolima msimu ujao", action: "kuchagua aina kutoka taasisi ya utafiti ya nchi yako au orodha ya aina na kutaja chanzo kilichosajiliwa cha mbegu zilizothibitishwa au vipandikizi safi", standard: "ukikagua lebo, lakiri au chanzo kabla ya kulipa" },
    { id: "O2", condition: "Ukipewa nafasi ya kupanda na ukubwa wa shamba lako", action: "kukokotoa idadi ya mimea kwa hekta na kwa ekari na mbegu au vipandikizi unavyohitaji", standard: "ukionyesha kila hatua ya hesabu" },
    { id: "O3", condition: "Kwa zao ulilochagua na tarehe ya kupanda", action: "kupanga kuandaa shamba, kupanda, kulisha na kupalilia kwenye kalenda yenye tarehe", standard: "palizi ikiwa ndani ya wiki muhimu za mwanzo za zao" },
    { id: "O4", condition: "Ukipewa dalili kwenye mmea au shamba lenye ugonjwa", action: "kutambua MLN ya mahindi, batobato ya mihogo, michirizi ya kahawia ya mihogo au blast ya mpunga na kuchagua hatua ya kwanza", standard: "ukilinganisha kila ugonjwa na hatua sahihi ya kwanza" },
    { id: "O5", condition: "Mwishoni mwa msimu", action: "kujua zao liko tayari lini na kukokotoa mavuno kwa hekta na kwa ekari kutokana na mavuno yaliyopimwa uzito", standard: "ukitumia eneo sahihi na kuonyesha hesabu yako" }
  ],
  chapters: [
    {
      name: "Sura 1: Kuanza zao vizuri",
      lessons: [
        {
          title: "Kuchagua aina na kununua mbegu zilizothibitishwa",
          objectives: ["O1"],
          minutes: 5,
          goal: "Chagua aina inayofaa eneo lako na utaje chanzo kilichosajiliwa cha mbegu zilizothibitishwa au vipandikizi safi.",
          text: [
            "Aina ni jamii ya zao iliyozalishwa kwa sifa fulani: kukomaa mapema au kuchelewa, kustahimili ukame, kukinza magonjwa, rangi ya nafaka au ubora wa kupika. Taasisi za utafiti za kitaifa hupima na kutoa aina kwa kila eneo: KALRO nchini Kenya, taasisi za utafiti za Nigeria zinazofanya kazi na IITA, CSIR-Crops Research Institute nchini Ghana, na CNRA nchini Côte d'Ivoire. IITA inafanya kazi kuhusu mihogo, mahindi, kunde na soya, na AfricaRice, iliyoko Abidjan, kuhusu mpunga. Muulize afisa ugani wako ni aina zipi zinashauriwa kwa eneo lako, mvua yako na soko lako.",
            "Chagua kulingana na hali yako: aina zinazokomaa mapema kwa mvua fupi au maeneo makavu, aina zinazostahimili au kukinza ugonjwa mahali ambapo ugonjwa huo ni wa kawaida (kwa mfano MLN ya mahindi au michirizi ya kahawia ya mihogo), na kile wanunuzi wanachotaka (mahindi meupe au manjano, mpunga wa kuchemsha kabla ya kukoboa, muhogo mtamu au mchungu).",
            "Mbegu zilizothibitishwa ni mbegu zilizokaguliwa na mamlaka ya mbegu ya kitaifa kwa usafi na uotaji. Nchini Kenya, KEPHIS inathibitisha mbegu na kuchapisha Orodha ya Kitaifa ya Aina za Mazao, na pakiti zilizothibitishwa zina lebo ya KEPHIS unayoweza kuithibitisha. Nchini Nigeria, National Agricultural Seed Council (NASC) inathibitisha mbegu. Nunua pakiti zilizofungwa na zenye lebo kutoka kwa muuzaji aliyesajiliwa. Mbegu za mahindi chotara lazima zinunuliwe mpya kila msimu, kwa sababu mavuno hushuka ukipanda tena nafaka zake. Aina zinazochavushwa wazi (OPV) na mikunde zinaweza kuhifadhiwa kwa misimu michache ukichagua mbegu safi kutoka mimea yenye afya. Kwa mihogo, pata vipandikizi safi kutoka kwa mzalishaji aliyekaguliwa au shamba lenye afya, kamwe si kutoka shamba lenye batobato au michirizi ya kahawia. Kwa soya, uliza kuhusu kichocheo cha bakteria (rhizobium) pale afisa ugani anaposhauri."
          ],
          steps: ["Muulize afisa ugani ni aina zipi zinashauriwa kwa eneo lako na mvua yako.", "Chagua kwa muda wa kukomaa, ukinzani wa magonjwa na kile wanunuzi wanachotaka.", "Kagua aina hiyo kwenye orodha ya kitaifa pale ilipochapishwa (kwa mfano KEPHIS nchini Kenya).", "Nunua mbegu zilizothibitishwa, zilizofungwa na zenye lebo kutoka kwa muuzaji aliyesajiliwa; kagua tarehe na lebo.", "Kwa mihogo, pata vipandikizi safi kutoka kwa mzalishaji aliyekaguliwa au shamba lenye afya."],
          words: [["Aina", "jamii ya zao iliyozalishwa kwa sifa fulani, kama kukomaa mapema au kukinza magonjwa."], ["Mbegu zilizothibitishwa", "mbegu zilizokaguliwa na mamlaka ya mbegu ya kitaifa kwa usafi na uotaji."], ["Chotara (hybrid)", "mbegu kutokana na kuchanganya mistari miwili ya wazazi; inatoa mavuno mazuri lakini lazima inunuliwe mpya kila msimu."], ["OPV", "aina inayochavushwa wazi: mbegu zinazoweza kuhifadhiwa na kupandwa tena kwa misimu michache zikitunzwa safi."], ["Kichocheo cha bakteria (inoculant)", "bidhaa yenye bakteria wazuri wanaosaidia mikunde kama soya kutengeneza naitrojeni."]],
          slides: [
            { title: "Aina zinatoka kwenye taasisi za utafiti", bullets: ["Kenya: KALRO; Ghana: CSIR-Crops Research Institute", "Côte d'Ivoire: CNRA; mpunga: AfricaRice", "Mihogo, kunde, soya, mahindi: IITA"] },
            { title: "Chagua kulingana na hali yako", bullets: ["Kukomaa mapema kwa misimu mifupi au mikavu", "Ukinzani dhidi ya magonjwa ya eneo lako", "Kile wanunuzi wako wanachotaka"] },
            { title: "Mbegu zilizothibitishwa", bullets: ["Kenya: lebo ya KEPHIS unayoweza kuthibitisha", "Nigeria: uthibitishaji wa NASC", "Zilizofungwa, zenye lebo, muuzaji aliyesajiliwa"] },
            { title: "Chotara, OPV na vipandikizi", bullets: ["Mahindi chotara: nunua mpya kila msimu", "OPV na mikunde: hifadhi mbegu safi kwa misimu michache", "Mihogo: vipandikizi safi, kamwe si kutoka mashamba yenye ugonjwa"] }
          ],
          sources: [KEPHIS, NASC, KALRO, IITA, AFRICARICE],
          tryIt: "Kwa zao moja la chakula utakalolima msimu ujao, muulize afisa ugani au muuzaji wa pembejeo (agrovet) aina mbili zinazoshauriwa. Andika muda wao wa kukomaa, ukinzani wao wa magonjwa na mahali unapoweza kununua mbegu zilizothibitishwa au vipandikizi safi. Ukiwa Kenya, kagua aina na muuzaji kwenye orodha za KEPHIS.",
          youCanNow: "kuchagua aina inayofaa eneo lako na kununua mbegu zilizothibitishwa au vipandikizi safi kutoka chanzo kilichosajiliwa.",
          quickCheck: [
            { objective: "O1", q: "Ulipanda mahindi chotara msimu uliopita. Unaweza kupanda tena nafaka ulizovuna?", options: ["Ndiyo, yatatoa mavuno yaleyale", "Ndiyo, ukipanda karibu zaidi", "Hapana, mavuno hushuka; nunua mbegu mpya za chotara zilizothibitishwa", "Tu ukizilowesha kwenye maji"], answer: 2, why: "Mbegu chotara hupoteza nguvu yake katika kizazi kinachofuata, kwa hiyo mbegu mpya zinahitajika kila msimu." },
            { objective: "O1", q: "Mihogo ya jirani yako ina majani yenye batobato ya njano. Anakupa vipandikizi. Unafanya nini?", options: ["Kuvichukua; vipandikizi ni bure", "Kukataa na kupata vipandikizi safi kutoka kwa mzalishaji aliyekaguliwa au shamba lenye afya", "Kuvichukua na kuvipanda karibu na barabara", "Kuchukua vipandikizi vya juu tu"], answer: 1, why: "Virusi vya mihogo husafiri ndani ya vipandikizi, kwa hiyo mashamba yenye ugonjwa yanaeneza ugonjwa kwenye shamba lako." }
          ]
        },
        {
          title: "Kuandaa shamba na idadi ya mimea",
          objectives: ["O2"],
          minutes: 6,
          goal: "Kokotoa mimea kwa hekta na kwa ekari kutokana na nafasi, na mbegu au vipandikizi unavyohitaji.",
          text: [
            "Andaa shamba kulingana na zao. Safisha bila kuchoma, na acha masalia kama kifuniko pale unapoweza. Mahindi, maharagwe na karanga yanahitaji kitalu imara chenye udongo laini kuzunguka mbegu; kilimo cha kulima kidogo au mashimo ya kupandia vinafanya kazi katika maeneo mengi. Mihogo nchini Nigeria na Ghana mara nyingi hupandwa kwenye matuta au vichuguu vinavyopitisha maji vizuri. Mpunga wa mabondeni unahitaji kingo za udongo, shamba lililosawazishwa na udhibiti mzuri wa maji; mpunga wa kupandikiza kwa kawaida hupandwa kwenye tope lililotayarishwa.",
            "Idadi ya mimea ni idadi ya mimea kwa hekta. Mimea michache mno inapoteza ardhi; mingi mno inashindania mwanga, maji na virutubisho. Tumia nafasi ambayo mwongozo wako wa ugani unatoa kwa aina na eneo lako. Kukokotoa: eneo la mmea mmoja = nafasi ya mistari x nafasi ya mimea (kwa mita). Mimea kwa hekta = 10,000 m2 / eneo la mmea mmoja. Mimea kwa ekari = 4,047 m2 / eneo la mmea mmoja (ekari moja ni kama 4,047 m2, na hekta moja ni kama ekari 2.47).",
            "Mifano iliyokokotolewa, kama mwongozo wako unatoa nafasi hizi: mahindi kwa 75 cm x 25 cm, mbegu moja kwa shimo: 0.75 x 0.25 = 0.1875 m2, kwa hiyo 10,000 / 0.1875 = kama mimea 53,300 kwa hekta, au 4,047 / 0.1875 = kama 21,600 kwa ekari. Mihogo kwa 1 m x 1 m: mimea 10,000 kwa hekta, kama 4,000 kwa ekari. Mpunga wa kupandikiza kwa 20 cm x 20 cm: 0.04 m2, kwa hiyo mashina 250,000 kwa hekta. Maharagwe kwa 50 cm x 10 cm: 0.05 m2, kwa hiyo mimea 200,000 kwa hekta.",
            "Mahitaji ya mbegu: idadi ya mbegu / mbegu kwa kilo (hesabu na upime uzito wa mbegu 100, au soma pakiti) = kilo, ukiongeza kama 10% kwa mapengo. Kwa mihogo, hesabu vipandikizi (mara nyingi kama urefu wa 20 hadi 25 cm, kutoka mashina yaliyokomaa), ukiongeza vichache vya akiba. Kisha jaza mapengo ndani ya wiki moja au mbili baada ya kuota."
          ],
          steps: ["Pima shamba lako kwa mita; eneo = urefu x upana.", "Pata nafasi inayoshauriwa kwa aina na eneo lako.", "Eneo la mmea mmoja = nafasi ya mistari x nafasi ya mimea (kwa mita).", "Mimea kwa hekta = 10,000 / eneo la mmea mmoja; kwa ekari = 4,047 / eneo la mmea mmoja.", "Mimea kwenye shamba lako = eneo la shamba / eneo la mmea mmoja.", "Mbegu: mimea / mbegu kwa kilo, ukiongeza kama 10%."],
          words: [["Idadi ya mimea", "idadi ya mimea kwa hekta au kwa ekari."], ["Hekta (ha)", "eneo la mita za mraba 10,000, kama ekari 2.47."], ["Ekari", "eneo la kama mita za mraba 4,047, kama hekta 0.4."], ["Ukingo (bund)", "ukuta mfupi wa udongo kuzunguka shamba la mpunga unaoshika maji."], ["Kutayarisha tope (puddling)", "kulima udongo wenye maji katika shamba la mpunga ili kutengeneza tope laini linaloshika maji na kudhibiti magugu."]],
          slides: [
            { title: "Andaa shamba kulingana na zao", bullets: ["Usichome; acha masalia kama kifuniko", "Kitalu laini kwa mahindi, maharagwe, karanga", "Matuta au vichuguu kwa mihogo; kingo na shamba lililosawazishwa kwa mpunga"] },
            { title: "Fomula ya idadi ya mimea", bullets: ["Eneo la mmea = nafasi ya mistari x nafasi ya mimea (m)", "Kwa hekta = 10,000 / eneo la mmea", "Kwa ekari = 4,047 / eneo la mmea"] },
            { title: "Mifano iliyokokotolewa", bullets: ["Mahindi 75 x 25 cm: kama 53,300/ha, 21,600/ekari", "Mihogo 1 x 1 m: 10,000/ha", "Mpunga 20 x 20 cm: mashina 250,000/ha"] },
            { title: "Mbegu kiasi gani?", bullets: ["Mimea / mbegu kwa kilo, ukiongeza kama 10%", "Hesabu na upime mbegu 100 kama pakiti haisemi", "Jaza mapengo ndani ya wiki moja au mbili"] }
          ],
          sources: [KALRO, IITA],
          tryIt: "Pima moja ya mashamba yako (au tumia ukubwa wake kwa ekari x 4,047 kupata mita za mraba). Pata nafasi ya zao lako kutoka kwa afisa ugani, kisha kokotoa mimea kwa hekta, kwa ekari na kwenye shamba lako, na kiasi cha mbegu au idadi ya vipandikizi vya kununua.",
          youCanNow: "kukokotoa idadi ya mimea kwa hekta na kwa ekari kutokana na nafasi, na kiasi cha mbegu au idadi ya vipandikizi unavyohitaji.",
          quickCheck: [
            { objective: "O2", q: "Mihogo imepandwa kwa 1 m x 1 m. Kuna mimea mingapi kwa hekta?", options: ["1,000", "4,047", "100,000", "10,000"], answer: 3, why: "Kila mmea unatumia 1 m2, na hekta ni 10,000 m2." },
            { objective: "O2", q: "Shamba ni hekta 0.5 na mahindi yanahitaji kama mimea 53,300 kwa hekta. Unahitaji kama mimea mingapi?", options: ["26,650", "53,300", "106,600", "5,330"], answer: 0, why: "0.5 x 53,300 = mimea 26,650." }
          ]
        },
        {
          title: "Kulisha na kupalilia kwa wakati",
          objectives: ["O3"],
          minutes: 5,
          goal: "Panga kupanda, kulisha na kupalilia kwenye kalenda yenye tarehe kwa zao lako.",
          text: [
            "Upimaji wa udongo, samadi, mboji na mbolea vinafundishwa katika \"Afya na Rutuba ya Udongo\"; tumia upimaji wa udongo wako au ushauri wa afisa ugani kujua nini cha kuweka na kiasi gani. Kinachobadilika kwa kila zao ni lini na nini kila zao linahitaji zaidi. Mahindi yana njaa ya naitrojeni na yanaihitaji mapema na tena yanapokua haraka. Mikunde (maharagwe, kunde, karanga, soya) hutengeneza sehemu kubwa ya naitrojeni yao wenyewe kupitia vinundu vya mizizi, kwa hiyo yanahitaji fosforasi kuliko naitrojeni. Mihogo hukua kwenye udongo duni zaidi lakini huchukua potasiamu nyingi kutoka udongoni kwa muda. Mpunga kwa kawaida hupewa naitrojeni kwa awamu; naitrojeni nyingi mno inafanya blast ya mpunga kuwa mbaya zaidi.",
            "Magugu huiba maji, mwanga na virutubisho zaidi katika wiki za kwanza baada ya zao kuota. Hiki ni kipindi muhimu: wakati huo magugu yanapunguza mavuno zaidi, na palizi ya baadaye haiwezi kuyarudisha. Miongozo mingi inaweka palizi ya kwanza kama wiki mbili hadi tatu baada ya zao kuota na ya pili wiki chache baadaye; kagua mwongozo wa eneo lako. Mihogo hukua polepole mwanzoni na inahitaji kuwekwa safi kwa takriban miezi mitatu ya kwanza, hadi majani yake yafunike ardhi. Katika mpunga wa mabondeni, kusawazisha vizuri na kuweka maji shambani kunasaidia kuzuia magugu.",
            "Dawa za kuua magugu zinaweza kuokoa nguvu kazi lakini lazima ziwe zimesajiliwa kwa zao lako (PCPB nchini Kenya, NAFDAC nchini Nigeria) na zitumike kama lebo inavyosema, ukivaa vifaa vya kujikinga. Weka kila kitu kwenye kalenda inayohesabiwa kuanzia tarehe ya kupanda, ili kazi na pesa viwe tayari kwa wakati."
          ],
          steps: ["Andika tarehe yako ya kupanda.", "Ongeza kuandaa shamba katika wiki zilizotangulia.", "Ongeza kulisha kama upimaji wa udongo au afisa ugani anavyoshauri, katika hatua sahihi ya zao.", "Ongeza palizi ya kwanza ndani ya wiki muhimu za mwanzo, na zinazofuata.", "Andika lini unahitaji nguvu kazi, pembejeo na pesa kwa kila kazi."],
          words: [["Kipindi muhimu", "wiki za mwanzo ambapo magugu husababisha hasara kubwa zaidi ya mavuno; palizi lazima ifanyike wakati huo."], ["Vinundu vya mizizi", "vivimbe vidogo kwenye mizizi ya mikunde ambapo bakteria hugeuza naitrojeni ya hewani kuwa chakula cha mmea."], ["Kuweka kwa awamu", "kutoa mbolea kwa sehemu mbili au zaidi katika hatua tofauti za zao badala ya yote kwa mara moja."], ["Dawa ya kuua magugu", "kemikali inayoua magugu; lazima iwe imesajiliwa na itumike kama lebo yake inavyosema."]],
          slides: [
            { title: "Rutuba: angalia Afya na Rutuba ya Udongo", bullets: ["Tumia upimaji wa udongo au ushauri wa ugani", "Somo hili: kilicho tofauti kwa kila zao"] },
            { title: "Kile kila zao linahitaji zaidi", bullets: ["Mahindi: naitrojeni, mapema na yanapokua", "Mikunde: fosforasi; hutengeneza naitrojeni yao wenyewe", "Mihogo: potasiamu kwa muda; mpunga: naitrojeni kwa awamu"] },
            { title: "Palilia katika kipindi muhimu", bullets: ["Wiki za kwanza baada ya kuota ni muhimu zaidi", "Mara nyingi palizi ya kwanza kama wiki 2 hadi 3; kagua eneo lako", "Mihogo: weka safi kama miezi 3 ya kwanza"] },
            { title: "Weka kwenye kalenda", bullets: ["Hesabu kuanzia tarehe ya kupanda", "Nguvu kazi, pembejeo na pesa tayari kwa wakati", "Dawa za magugu: zilizosajiliwa, lebo, vifaa vya kujikinga"] }
          ],
          sources: [HANDBOOK_4R, PCPB, NAFDAC],
          tryIt: "Andika kalenda ya zao lako kuanzia tarehe uliyopanga kupanda: kuandaa shamba, kupanda, kila ulishaji ambao upimaji wa udongo au afisa ugani anashauri, na kila palizi. Weka alama ya kipindi muhimu cha palizi kwa rangi tofauti.",
          youCanNow: "kupanga kulisha na kupalilia kwenye kalenda yenye tarehe ili magugu yadhibitiwe katika wiki muhimu za mwanzo.",
          quickCheck: [
            { objective: "O3", q: "Magugu husababisha hasara kubwa zaidi ya mavuno lini?", options: ["Kabla tu ya kuvuna", "Katika wiki za kwanza baada ya zao kuota", "Baada ya kuvuna", "Wakati wa kiangazi tu"], answer: 1, why: "Kipindi muhimu ni wiki za mwanzo; palizi ya baadaye haiwezi kurudisha mavuno hayo." },
            { objective: "O3", q: "Zao lipi hutengeneza sehemu kubwa ya naitrojeni yake lenyewe kupitia vinundu vya mizizi?", options: ["Mahindi", "Mpunga", "Mihogo", "Maharagwe"], answer: 3, why: "Mikunde kama maharagwe hutengeneza naitrojeni kwa msaada wa bakteria katika vinundu vya mizizi yao." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kuanza zao vizuri",
        questions: [
          { objective: "O1", q: "Nchini Kenya, ni chombo kipi kinathibitisha mbegu na kuchapisha Orodha ya Kitaifa ya Aina za Mazao?", options: ["KEPHIS", "Ofisi ya barabara ya kaunti", "Soko la mtaani", "Benki"], answer: 0, why: "KEPHIS inathibitisha mbegu na kuorodhesha aina zilizotolewa nchini Kenya." },
          { objective: "O1", q: "Eneo lako mara nyingi hupata mvua fupi. Sifa ipi ya aina ni muhimu zaidi?", options: ["Kukomaa kwa kuchelewa", "Kukomaa mapema", "Mashina marefu", "Nafaka nyekundu"], answer: 1, why: "Aina inayokomaa mapema humaliza kabla mvua hazijaisha." },
          { objective: "O2", q: "Mahindi kwa 75 cm x 25 cm yanatumia eneo kiasi gani kwa kila mmea?", options: ["1 m2", "0.25 m2", "0.1875 m2", "0.75 m2"], answer: 2, why: "0.75 m x 0.25 m = 0.1875 m2." },
          { objective: "O2", q: "Kuna kama mita za mraba ngapi katika ekari moja?", options: ["10,000", "1,000", "2,470", "4,047"], answer: 3, why: "Ekari moja ni kama 4,047 m2; hekta moja ni 10,000 m2." },
          { objective: "O3", q: "Kozi hii inakuelekeza wapi kwa viwango vya mbolea?", options: ["Upimaji wa udongo wako na afisa ugani, kama katika Afya na Rutuba ya Udongo", "Mfuko mkubwa zaidi dukani", "Chochote jirani alichotumia", "Kiasi kimoja kwa kila zao"], answer: 0, why: "Viwango vinategemea udongo wako na zao, kwa hiyo vinatoka kwenye upimaji wa udongo au kwa afisa ugani." }
        ]
      }
    },
    {
      name: "Sura 2: Kulinda na kupima zao",
      lessons: [
        {
          title: "Magonjwa makuu: MLN ya mahindi, virusi vya mihogo na blast ya mpunga",
          objectives: ["O4"],
          minutes: 6,
          goal: "Tambua MLN ya mahindi, batobato ya mihogo, michirizi ya kahawia ya mihogo na blast ya mpunga, na uchague hatua ya kwanza.",
          text: [
            "Ugonjwa wa mahindi wa MLN (maize lethal necrosis) uliathiri Kenya vibaya kuanzia 2011 na ukaenea Afrika Mashariki. CIMMYT inaeleza kwamba hutokea mahindi yanapoambukizwa na virusi viwili kwa pamoja: maize chlorotic mottle virus na potyvirus kama sugarcane mosaic virus. Majani yanaonyesha madoa ya njano, kisha yanakauka kutoka kingoni kuelekea ndani; kiini cha mmea kinaweza kufa, na magunzi ni madogo, matupu au yameoza. Wadudu kama thripi na vidukari huueneza shambani, na mbegu zenye ugonjwa zinaweza kuubeba umbali mrefu. Hatua: panda mbegu zilizothibitishwa za aina zinazostahimili MLN, acha kupanda mahindi kwa msimu mmoja pamoja na majirani zako, ondoa mahindi yanayoota yenyewe, dhibiti magugu, ng'oa na uharibu mimea yenye ugonjwa mapema, na uripoti kwa afisa ugani.",
            "Ugonjwa wa batobato wa mihogo (CMD) hufanya majani kuwa na mabaka ya njano na kijani (batobato), yaliyojikunja na madogo, na hudumaza mmea. Ugonjwa wa michirizi ya kahawia wa mihogo (CBSD) huonyesha mabaka ya njano kando ya mishipa ya majani ya zamani na michirizi ya kahawia kwenye mashina, lakini madhara makubwa zaidi yamefichika: mizizi hupata uozo mgumu, wa kahawia na mkavu, wakati mwingine majani yakionekana karibu na afya. IITA inakadiria kwamba magonjwa haya mawili yanagharimu Afrika kama US$1 bilioni kwa mwaka. Inzi weupe hueneza yote mawili, lakini njia kuu ya kuenea umbali mrefu ni wakulima kugawana vipandikizi vyenye ugonjwa. Hatua: panda vipandikizi safi vya aina zinazostahimili, ng'oa na uharibu mimea yenye ugonjwa mapema, kamwe usichukue vipandikizi kutoka mashamba yenye ugonjwa, na Afrika Mashariki chimba mizizi michache kukagua uozo wa kahawia kabla ya kuvuna.",
            "Blast ya mpunga ni ugonjwa wa ukungu (fangasi) na tatizo kubwa Afrika Magharibi. Kwenye majani hutengeneza madoa yenye umbo la almasi au jicho, yenye kati ya kijivu na kingo za kahawia. Unaposhambulia shingo chini ya suke, suke hugeuka jeupe na tupu. Utafiti pamoja na AfricaRice uligundua kwamba aina zinazokinza ndizo njia rahisi zaidi ya kudhibiti kwa wakulima wadogo, lakini ukungu unaweza kushinda ukinzani miaka michache baada ya aina kulimwa kwa wingi, kwa hiyo aina mpya ni muhimu. Hatua: lima aina inayoshauriwa kuwa inakinza, epuka naitrojeni nyingi mno, epuka mpunga wa nyanda za juu kukosa maji, tumia mbegu safi na uondoe masalia yenye ugonjwa. Tumia dawa ya ukungu tu kama afisa ugani anashauri na imesajiliwa kwa mpunga."
          ],
          steps: ["Kagua shamba kila wiki; linganisha unachokiona na dalili katika somo hili.", "Piga picha mimea yenye ugonjwa na umwombe afisa ugani au kliniki ya mimea athibitishe.", "Ng'oa na uharibu mimea yenye ugonjwa mapema (MLN na virusi vya mihogo).", "Msimu ujao: mbegu zilizothibitishwa au vipandikizi safi vya aina inayostahimili au kukinza.", "Panga mzunguko wa mazao na vifaa safi vya kupanda pamoja na majirani."],
          words: [["MLN", "maize lethal necrosis: ugonjwa unaotokana na virusi viwili kwa pamoja unaoweza kuua mimea ya mahindi."], ["CMD", "ugonjwa wa batobato wa mihogo: ugonjwa wa virusi unaofanya majani ya mihogo kuwa na mabaka, kujikunja na kuwa madogo."], ["CBSD", "ugonjwa wa michirizi ya kahawia wa mihogo: ugonjwa wa virusi unaosababisha uozo wa kahawia na mkavu katika mizizi ya mihogo."], ["Blast ya mpunga", "ugonjwa wa ukungu wa mpunga unaotengeneza madoa yenye umbo la jicho kwenye majani na unaweza kuacha masuke meupe na matupu."], ["Kung'oa (rogue)", "kuondoa na kuharibu mimea yenye ugonjwa ili isieneze ugonjwa."]],
          slides: [
            { title: "MLN ya mahindi", bullets: ["Virusi viwili kwa pamoja (CIMMYT)", "Madoa ya njano, majani hukauka kutoka kingoni", "Huenezwa na wadudu na mbegu zenye ugonjwa"] },
            { title: "Batobato na michirizi ya kahawia ya mihogo", bullets: ["CMD: majani yenye mabaka, yaliyojikunja, madogo", "CBSD: njano kando ya mishipa, michirizi kwenye shina, uozo wa kahawia wa mizizi", "Huenezwa na inzi weupe na vipandikizi vya kugawana"] },
            { title: "Blast ya mpunga", bullets: ["Madoa ya umbo la jicho, kati ya kijivu, kingo za kahawia", "Blast ya shingo: masuke meupe na matupu", "Ukinzani unaweza kuvunjika baada ya miaka michache"] },
            { title: "Hatua za kwanza", bullets: ["Thibitisha na afisa ugani au kliniki ya mimea", "Ng'oa mimea yenye ugonjwa mapema", "Msimu ujao: mbegu safi, aina zinazostahimili, mzunguko"] }
          ],
          sources: [CIMMYT_MLN, IITA_CASSAVA_VIRUS, JIRCAS_BLAST, AFRICARICE],
          tryIt: "Tembea shambani mwako (au kwa jirani) na utafute dalili za ugonjwa ulio muhimu zaidi kwa zao lako. Andika ulichokiona, piga picha ya chochote chenye shaka, na uandike hatua ya kwanza ambayo ungechukua kwa ugonjwa huo.",
          youCanNow: "kutambua MLN ya mahindi, batobato ya mihogo, michirizi ya kahawia ya mihogo na blast ya mpunga na kuchagua hatua ya kwanza.",
          quickCheck: [
            { objective: "O4", q: "Majani ya mihogo yako yanaonekana karibu na afya, lakini mizizi uliyochimba ina uozo mgumu, wa kahawia na mkavu. Chanzo kinachowezekana zaidi ni:", options: ["Ugonjwa wa michirizi ya kahawia wa mihogo", "Mvua nyingi mno wakati wa kupanda", "Viwavijeshi (fall armyworm)", "Blast ya mpunga"], answer: 0, why: "CBSD huozesha mizizi, wakati mwingine kukiwa na dalili ndogo tu kwenye majani." },
            { objective: "O4", q: "Majani ya mpunga yana madoa ya umbo la jicho yenye kati ya kijivu na kingo za kahawia. Hatua nzuri ni ipi?", options: ["Kuongeza mbolea ya naitrojeni zaidi", "Kupanda mbegu zilezile tena msimu ujao", "Kumwomba afisa ugani athibitishe blast na kulima aina inayokinza msimu ujao", "Kujaza nyumba maji"], answer: 2, why: "Hayo ni madoa ya blast; aina zinazokinza na naitrojeni yenye uwiano ndizo njia kuu za kudhibiti." }
          ]
        },
        {
          title: "Kujua wakati wa kuvuna",
          objectives: ["O5"],
          minutes: 4,
          goal: "Jua lini mahindi, mpunga, mihogo au mikunde yako iko tayari kuvunwa.",
          text: [
            "Ukivuna mapema mno nafaka ni nyepesi na yenye maji; ukivuna kwa kuchelewa unapoteza mazao kwa ndege, panya, mvua, kupukutika na kuoza, na nafaka ina uwezekano zaidi wa kupata sumu kuvu (aflatoxin). Kukausha na kuhifadhi vinafundishwa katika \"Utunzaji na Uhifadhi Baada ya Mavuno\".",
            "Mahindi yamekomaa tabaka jeusi linapotokea mahali punje inapoungana na gunzi na maganda yamekauka; funua maganda machache na uvunje punje chache kukagua. Kisha yakaushe vizuri kabla ya kuhifadhi. Mpunga uko tayari punje nyingi kwenye masuke zinapogeuka rangi ya dhahabu na kuwa ngumu; kusubiri sana kunaleta kupukutika na hasara kwa ndege. Maharagwe na kunde ziko tayari maganda mengi yanapokauka na kutoa sauti yakitikiswa; vuna kabla hayajapasuka. Karanga ziko tayari majani yanapogeuka njano na ndani ya maganda mengi kumekuwa na rangi nyeusi; chimba mimea michache kukagua.",
            "Mihogo haina siku moja ya kuvuna: kila aina ina muda wake wa kukomaa, na mizizi inaweza kukaa ardhini kwa muda. Lakini mizizi ikikaa muda mrefu mno inaweza kuwa migumu kama mti, na mahali ambapo michirizi ya kahawia ni ya kawaida uozo unazidi. Ikishachimbwa, mihogo huharibika ndani ya siku chache, kwa hiyo vuna tu kiasi unachoweza kuuza au kusindika haraka. Nchini Ghana na Nigeria, wakulima wengi hupanga mavuno kulingana na uwezo wa msindikaji wa gari au fufu."
          ],
          steps: ["Jua muda wa kukomaa wa aina yako kutoka pakiti ya mbegu au kwa afisa ugani.", "Kagua mimea michache katika shamba lote, si mmoja tu.", "Mahindi: tabaka jeusi na maganda makavu; mpunga: punje nyingi za dhahabu na ngumu.", "Mikunde: maganda makavu yanayotoa sauti; karanga: ndani ya maganda kuna rangi nyeusi.", "Mihogo: vuna tu kiasi unachoweza kuuza au kusindika ndani ya siku chache."],
          words: [["Tabaka jeusi", "doa jeusi mahali punje ya mahindi inapoungana na gunzi; linaonyesha punje imeacha kujaa."], ["Kupukutika", "nafaka au maganda kudondoka au kupasuka shambani kabla ya kuvuna."], ["Muda wa kukomaa", "muda ambao aina inachukua kutoka kupanda hadi kuvuna."]],
          slides: [
            { title: "Mapema mno au kuchelewa, vyote vinapoteza", bullets: ["Mapema: nafaka nyepesi, yenye maji", "Kuchelewa: ndege, panya, mvua, kupukutika, kuoza", "Kukausha na kuhifadhi: angalia kozi ya Baada ya Mavuno"] },
            { title: "Mazao ya nafaka", bullets: ["Mahindi: tabaka jeusi, maganda makavu", "Mpunga: punje nyingi za dhahabu na ngumu", "Kagua mimea kadhaa katika shamba lote"] },
            { title: "Mikunde na mihogo", bullets: ["Maharagwe, kunde: maganda makavu yanayotoa sauti", "Karanga: ndani ya maganda kunakuwa na rangi nyeusi", "Mihogo: huharibika ndani ya siku chache ikishachimbwa"] }
          ],
          tryIt: "Kwa zao lako, andika muda wa kukomaa wa aina yako, dalili utakazokagua, na tarehe unayotarajia kuanza kukagua. Kama zao lako liko shambani sasa, kagua mimea mitano katika shamba lote na uandike unachokiona.",
          youCanNow: "kujua lini zao lako la chakula liko tayari kuvunwa.",
          quickCheck: [
            { objective: "O5", q: "Unajuaje kwamba punje za mahindi zimeacha kujaa?", options: ["Majani bado ni ya kijani", "Tabaka jeusi linatokea mahali punje inapoungana na gunzi", "Ua dume (bendera) linatokea", "Mvua imenyesha mara mbili"], answer: 1, why: "Tabaka jeusi linaonyesha mahindi yamekomaa kikamilifu." },
            { objective: "O5", q: "Kwa nini uvune mihogo kiasi tu unachoweza kuuza au kusindika ndani ya siku chache?", options: ["Mizizi ya mihogo huharibika haraka ikishachimbwa", "Mizizi ya mihogo hukua tena baada ya kuchimbwa", "Wanunuzi wanapenda mizizi mikavu", "Majani ndiyo zao kuu"], answer: 0, why: "Mizizi mibichi ya mihogo huharibika ndani ya siku chache baada ya kuvunwa." }
          ]
        },
        {
          title: "Kukokotoa mavuno na kuandika mpango wako wa uzalishaji",
          objectives: ["O5", "O2", "O3"],
          minutes: 6,
          goal: "Kokotoa mavuno kwa hekta na kwa ekari na uandike mpango wa uzalishaji kwa zao moja la chakula kwenye shamba lako.",
          text: [
            "Mavuno ni uzito wa zao unalovuna kwa eneo. Ili kuyajua, pima uzito wa mavuno yako baada ya kukausha, na ujue eneo kamili yalikotoka. Mavuno kwa hekta = kilo zilizovunwa / eneo kwa m2 x 10,000. Mavuno kwa ekari = kilo zilizovunwa / eneo kwa m2 x 4,047. Au kutoka kwa hekta kwenda kwa ekari: gawanya kwa 2.47.",
            "Mfano, mahindi nchini Kenya: unavuna kilo 1,350 za nafaka kavu kutoka shamba la 3,000 m2. Kwa hekta: 1,350 / 3,000 x 10,000 = kilo 4,500, au tani 4.5. Kwa ekari: 4,500 / 2.47 = kama kilo 1,820, ambazo ni kama magunia 20 ya kilo 90. Makadirio ya haraka kabla ya kuvuna: weka alama ya mraba wa 10 m x 10 m (100 m2) katika sehemu ya kawaida ya shamba, vuna na ukaushe, pima uzito, na uzidishe kwa 100 kupata kilo kwa hekta. Fanya hivyo mahali pawili au patatu na uchukue wastani.",
            "Sasa unganisha kozi nzima kuwa mpango wa uzalishaji kwa zao moja la chakula kwenye shamba lako: ukubwa wa shamba, aina na chanzo cha mbegu, nafasi pamoja na idadi ya mimea na mahitaji ya mbegu, kalenda yenye tarehe ya kuandaa shamba, kupanda, kulisha na kupalilia, magonjwa makuu na hatua yako ya kwanza, jinsi utakavyojua wakati wa kuvuna, na lengo la mavuno kwa hekta na kwa ekari. Baada ya kuvuna, linganisha mavuno halisi na lengo lako na uandike utakachobadilisha. Mkulima wa Côte d'Ivoire anayeandika mavuno yake ya mpunga kila msimu anaweza kumwonyesha mnunuzi, chama cha ushirika au mkopeshaji kile shamba lake linazalisha."
          ],
          steps: ["Pima eneo lililovunwa kwa m2.", "Pima uzito wa mavuno yaliyokaushwa kwa kilo.", "Kwa hekta = kilo / m2 x 10,000; kwa ekari = kilo / m2 x 4,047.", "Au chukua sampuli ya 100 m2 mahali 2 au 3, pima uzito na uzidishe kwa 100 kupata kilo/ha.", "Andika mpango: aina, mbegu, idadi ya mimea, kalenda, magonjwa, kuvuna, lengo la mavuno.", "Baada ya kuvuna, linganisha mavuno halisi na lengo."],
          words: [["Mavuno", "kiasi cha zao kilichovunwa kwa eneo, kama kilo kwa hekta au magunia kwa ekari."], ["Tani", "kilo 1,000."], ["Kipande cha sampuli", "eneo dogo lenye alama linalovunwa na kupimwa uzito ili kukadiria mavuno ya shamba zima."]],
          slides: [
            { title: "Fomula za mavuno", bullets: ["Kwa ha = kilo / eneo (m2) x 10,000", "Kwa ekari = kilo / eneo (m2) x 4,047", "Kutoka kwa ha kwenda kwa ekari: gawanya kwa 2.47"] },
            { title: "Mfano uliokokotolewa: mahindi", bullets: ["Kilo 1,350 kutoka 3,000 m2", "= kilo 4,500/ha (tani 4.5/ha)", "= kama kilo 1,820/ekari, kama magunia 20 ya kilo 90"] },
            { title: "Makadirio kwa kipande cha sampuli", bullets: ["Weka alama ya 10 m x 10 m (100 m2)", "Vuna, kausha, pima uzito; x 100 = kilo/ha", "Fanya mahali 2 au 3 na uchukue wastani"] },
            { title: "Mpango wako wa uzalishaji", bullets: ["Aina, mbegu, idadi ya mimea, kalenda", "Magonjwa na hatua za kwanza", "Dalili za kuvuna na lengo la mavuno kwa ha na ekari"] }
          ],
          tryIt: "Kazi ya mwisho: andika mpango wako wa uzalishaji kwa zao moja la chakula kwenye shamba lako: ukubwa wa shamba kwa hekta na ekari, aina na chanzo cha mbegu, nafasi pamoja na idadi ya mimea na mahitaji ya mbegu yaliyokokotolewa, kalenda yenye tarehe (kuandaa shamba, kupanda, kulisha, kupalilia), magonjwa mawili makuu na hatua yako ya kwanza kwa kila mmoja, dalili za kuvuna, na lengo la mavuno kwa hekta na kwa ekari pamoja na hesabu yako.",
          youCanNow: "kukokotoa mavuno kwa hekta na kwa ekari na kuandika mpango wa uzalishaji kwa zao moja la chakula kwenye shamba lako.",
          quickCheck: [
            { objective: "O5", q: "Ulivuna kilo 900 za maharagwe makavu kutoka 4,047 m2. Mavuno kwa ekari ni kiasi gani?", options: ["Kama kilo 450", "Kama kilo 2,224", "Kilo 900", "Kama kilo 4,047"], answer: 2, why: "4,047 m2 ni ekari moja, kwa hiyo mavuno ni kilo 900 kwa ekari." },
            { objective: "O5", q: "Kipande cha sampuli cha 100 m2 kinatoa kilo 40 za mahindi makavu. Mavuno yanayokadiriwa kwa hekta ni kiasi gani?", options: ["Kilo 40", "Kilo 400", "Kilo 40,000", "Kilo 4,000"], answer: 3, why: "Hekta ni mara 100 ya 100 m2, kwa hiyo 40 x 100 = kilo 4,000 kwa hekta." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kulinda na kupima zao",
        questions: [
          { objective: "O4", q: "MLN ya mahindi inasababishwa na:", options: ["Jua kali mno", "Virusi viwili vinavyoambukiza mmea kwa pamoja", "Upungufu wa potasiamu", "Viwavijeshi peke yao"], answer: 1, why: "CIMMYT inaeleza MLN kama maambukizi ya virusi viwili kwa pamoja." },
          { objective: "O4", q: "Njia kuu ya virusi vya mihogo kuenea umbali mrefu ni ipi?", options: ["Upepo unaopeperusha majani", "Matone ya mvua", "Kugawana vipandikizi vyenye ugonjwa", "Kinyesi cha ndege"], answer: 2, why: "Inzi weupe huvieneza karibu; vipandikizi vyenye ugonjwa huvibeba mbali." },
          { objective: "O4", q: "Tabia ipi inafanya blast ya mpunga kuwa mbaya zaidi?", options: ["Mbolea ya naitrojeni nyingi mno", "Kutumia mbegu safi", "Kulima aina inayokinza", "Kuondoa masalia yenye ugonjwa"], answer: 0, why: "Naitrojeni nyingi hufanya mpunga kushambuliwa zaidi na blast." },
          { objective: "O5", q: "Mpunga uko tayari kuvunwa wakati:", options: ["Maua ya kwanza yanachanua", "Majani ni ya kijani kibichi", "Umekaa shambani mwezi mmoja", "Punje nyingi kwenye masuke ni za dhahabu na ngumu"], answer: 3, why: "Punje za dhahabu na ngumu zinaonyesha zao limekomaa; kuvuna baadaye husababisha kupukutika na hasara kwa ndege." },
          { objective: "O5", q: "Unapata kilo 4,940 kwa hekta. Hiyo ni kama kiasi gani kwa ekari?", options: ["Kilo 2,000", "Kilo 12,200", "Kilo 4,940", "Kilo 494"], answer: 0, why: "4,940 / 2.47 = kilo 2,000 kwa ekari." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kilimo Bora cha Kisasa: Mahindi, Mpunga, Mihogo na Mikunde",
    questions: [
      { objective: "O1", q: "Unapaswa kuangalia wapi kwanza kupata aina zinazofaa eneo lako?", options: ["Tangazo la mitandao ya kijamii", "Taasisi ya utafiti ya nchi yako na afisa ugani", "Mbegu za bei rahisi zaidi sokoni", "Ghala la nafaka la msimu uliopita"], answer: 1, why: "Taasisi za utafiti hupima na kutoa aina kwa kila eneo." },
      { objective: "O1", q: "Ni chombo kipi kinathibitisha mbegu nchini Nigeria?", options: ["NAFDAC", "Benki kuu", "KEPHIS", "National Agricultural Seed Council (NASC)"], answer: 3, why: "NASC inathibitisha mbegu nchini Nigeria." },
      { objective: "O1", q: "Unapaswa kukagua nini kabla ya kulipia pakiti ya mbegu zilizothibitishwa?", options: ["Lakiri, lebo na tarehe", "Rangi ya mfuko tu", "Bei tu", "Hakuna kitu"], answer: 0, why: "Pakiti iliyofungwa, yenye lebo na tarehe kutoka kwa muuzaji aliyesajiliwa ni kinga yako dhidi ya mbegu bandia." },
      { objective: "O1", q: "Kituo kipi cha CGIAR kinafanya kazi kuhusu mpunga barani Afrika?", options: ["IITA", "ICIPE", "AfricaRice", "WorldFish"], answer: 2, why: "AfricaRice, iliyoko Abidjan, inafanya kazi kuhusu mpunga." },
      { objective: "O2", q: "Kuna mita za mraba ngapi katika hekta moja?", options: ["4,047", "1,000", "100", "10,000"], answer: 3, why: "Hekta ni 100 m x 100 m = 10,000 m2." },
      { objective: "O2", q: "Mpunga uliopandikizwa kwa 20 cm x 20 cm unatoa mashina mangapi kwa hekta?", options: ["25,000", "250,000", "2,500", "40,000"], answer: 1, why: "0.2 x 0.2 = 0.04 m2; 10,000 / 0.04 = 250,000." },
      { objective: "O2", q: "Maharagwe kwa 50 cm x 10 cm yanahitaji kama mimea mingapi kwa ekari?", options: ["Kama 80,900", "Kama 200,000", "Kama 8,090", "Kama 40,470"], answer: 0, why: "0.5 x 0.1 = 0.05 m2; 4,047 / 0.05 = kama 80,900." },
      { objective: "O2", q: "Kwa nini uongeze kama 10% ya mbegu za ziada?", options: ["Kulisha ndege", "Kufanya mfuko kuwa mzito zaidi", "Kufidia mbegu zisizoota na kujaza mapengo", "Kwa sababu sheria inasema hivyo"], answer: 2, why: "Mbegu nyingine hazioti; mbegu za ziada zinakuwezesha kujaza mapengo." },
      { objective: "O3", q: "Mikunde inahitaji nini zaidi kuliko naitrojeni?", options: ["Chumvi", "Fosforasi", "Sukari", "Chokaa kila wiki"], answer: 1, why: "Mikunde hutengeneza sehemu kubwa ya naitrojeni yake yenyewe lakini bado inahitaji fosforasi." },
      { objective: "O3", q: "Palizi ya kwanza kwa kawaida inapaswa kufanyika lini?", options: ["Kabla tu ya kuvuna", "Tu kama magugu yanachanua", "Baada ya zao kufika magotini na kutoa bendera", "Katika wiki muhimu za mwanzo, mara nyingi kama wiki 2 hadi 3 baada ya zao kuota"], answer: 3, why: "Magugu yanapunguza mavuno zaidi katika wiki za mwanzo." },
      { objective: "O3", q: "Kwa nini uweke msimu wako kwenye kalenda inayohesabiwa kuanzia kupanda?", options: ["Ili nguvu kazi, pembejeo na pesa viwe tayari kwa wakati", "Kuwavutia wageni", "Kwa sababu mbegu husoma kalenda", "Haina manufaa"], answer: 0, why: "Kalenda yenye tarehe inahakikisha kila kazi inafanyika katika hatua sahihi ya zao." },
      { objective: "O3", q: "Mihogo inapaswa kuwekwa bila magugu kwa muda gani hivi?", options: ["Wiki moja", "Baada ya kuvuna tu", "Kama miezi mitatu ya kwanza, hadi majani yake yafunike ardhi", "Kamwe"], answer: 2, why: "Mihogo hukua polepole mwanzoni na inahitaji kudhibiti magugu mapema hadi majani yafunike ardhi." },
      { objective: "O4", q: "Madoa ya njano kwenye majani ya mahindi ambayo kisha yanakauka kutoka kingoni, pamoja na magunzi madogo au yaliyooza, yanaashiria:", options: ["MLN ya mahindi", "Blast ya mpunga", "Afya njema", "Potasiamu nyingi mno"], answer: 0, why: "Hizo ni dalili za kawaida za MLN." },
      { objective: "O4", q: "Majani ya mihogo yenye mabaka ya njano na kijani, yaliyojikunja na madogo yanaonyesha:", options: ["Michirizi ya kahawia ya mihogo peke yake", "Ukosefu wa mwanga wa jua", "Ugonjwa wa batobato wa mihogo", "Viwavijeshi"], answer: 2, why: "Majani yenye batobato na kujikunja ni dalili za CMD." },
      { objective: "O4", q: "Unapaswa kufanya nini kwanza na mimea michache yenye dalili za MLN au virusi vya mihogo?", options: ["Kuchukua vipandikizi kutoka kwayo", "Kuthibitisha na afisa ugani na kuing'oa na kuiharibu mapema", "Kuinyunyizia mbolea", "Kuiacha ipone"], answer: 1, why: "Kung'oa mapema kunaondoa chanzo cha virusi." },
      { objective: "O4", q: "Kwa nini aina mpya za mpunga zinazokinza blast zinaendelea kutolewa?", options: ["Mbegu za zamani hubadilika rangi", "Wakulima huchoka", "Mpunga unahitaji maji zaidi kila mwaka", "Ukungu unaweza kushinda ukinzani miaka michache baada ya aina kulimwa kwa wingi"], answer: 3, why: "Ukinzani dhidi ya blast unaweza kuvunjika, kwa hiyo wazalishaji wa mbegu huendelea kutengeneza aina mpya." },
      { objective: "O5", q: "Karanga ziko tayari wakati:", options: ["Zinapochanua mara ya kwanza", "Majani yanageuka njano na ndani ya maganda mengi kumekuwa na rangi nyeusi", "Mvua imenyesha mara moja", "Maganda ni laini na meupe ndani"], answer: 1, why: "Ndani ya maganda kuwa na rangi nyeusi na majani kugeuka njano kunaonyesha kukomaa." },
      { objective: "O5", q: "Ulivuna kilo 600 za mahindi makavu kutoka 1,500 m2. Mavuno kwa hekta ni kiasi gani?", options: ["Kilo 600", "Kilo 9,000", "Kilo 1,500", "Kilo 4,000"], answer: 3, why: "600 / 1,500 x 10,000 = kilo 4,000 kwa hekta." },
      { objective: "O5", q: "Kubadilisha mavuno kwa hekta kuwa mavuno kwa ekari, wewe:", options: ["Unagawanya kwa 2.47", "Unazidisha kwa 2.47", "Unaongeza 4,047", "Unagawanya kwa 10"], answer: 0, why: "Hekta moja ni kama ekari 2.47, kwa hiyo mavuno kwa ekari ni madogo zaidi." },
      { objective: "O5", q: "Kwa nini ulinganishe mavuno yako halisi na lengo la mpango wako baada ya kuvuna?", options: ["Kampuni ya mbegu inalitaka", "Kuona kilichofanya kazi na cha kubadilisha msimu ujao", "Kupata mfuko wa mbolea bure", "Haina manufaa"], answer: 1, why: "Kulinganisha matokeo na mpango kunaonyesha mahali pa kuboresha." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 2, 4, 5, 9, 12, 13, 17, 18] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo ya mpango na uikague tena na afisa ugani wako.",
    criteria: [
      { name: "Aina na mbegu", objective: "O1", notYet: "Hakuna aina iliyotajwa, au mbegu ni nafaka za chotara za kurudia au vipandikizi kutoka shamba lenye ugonjwa.", meets: "Aina inayoshauriwa kwa eneo imetajwa, pamoja na chanzo kilichosajiliwa cha mbegu zilizothibitishwa au vipandikizi safi.", exceeds: "Aina mbili zimelinganishwa kwa muda wa kukomaa, ukinzani wa magonjwa na soko, na uchaguzi umeelezwa." },
      { name: "Idadi ya mimea na mahitaji ya mbegu", objective: "O2", notYet: "Hakuna nafasi au hesabu, au hesabu si sahihi.", meets: "Nafasi, mimea kwa hekta, kwa ekari na kwenye shamba, na mbegu au vipandikizi vinavyohitajika vimekokotolewa sahihi na hatua zimeonyeshwa.", exceeds: "Pia anapanga kujaza mapengo na kuhesabu mimea baada ya kuota ili kukagua idadi halisi." },
      { name: "Kalenda yenye tarehe", objective: "O3", notYet: "Kazi zimeorodheshwa bila tarehe, au palizi imechelewa.", meets: "Kuandaa shamba, kupanda, kulisha (kutokana na upimaji wa udongo au ugani) na kila palizi vina tarehe kuanzia tarehe ya kupanda, na palizi ya kwanza iko ndani ya kipindi muhimu.", exceeds: "Nguvu kazi, pembejeo na pesa zinazohitajika kwa kila kazi ziko kwenye kalenda." },
      { name: "Uangalizi wa magonjwa", objective: "O4", notYet: "Hakuna magonjwa yaliyotajwa, au hatua hazilingani nayo.", meets: "Magonjwa mawili makuu ya zao yametajwa pamoja na dalili zake na hatua sahihi ya kwanza kwa kila mmoja.", exceeds: "Inajumuisha kinga kwa msimu ujao iliyokubaliwa na majirani, kama mzunguko wa mazao au vifaa safi vya kupanda." },
      { name: "Kuvuna na lengo la mavuno", objective: "O5", notYet: "Hakuna dalili za kuvuna wala lengo la mavuno, au hesabu ya mavuno si sahihi.", meets: "Dalili za kuvuna kwa zao na lengo la mavuno kwa hekta na kwa ekari pamoja na hesabu sahihi.", exceeds: "Inajumuisha mbinu ya kipande cha sampuli kukadiria mavuno kabla ya kuvuna na mpango wa kulinganisha matokeo na lengo." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaopanda mbegu zilizothibitishwa au vipandikizi safi vya aina inayoshauriwa msimu unaofuata (utafiti wa kufuatilia)",
      "Wanafunzi wanaopima uzito wa mavuno yao na kuripoti mavuno kwa hekta au kwa ekari baada ya msimu",
      "Mabadiliko ya mavuno yanayoripotiwa kwa hekta kwa zao lililochaguliwa kutoka msimu mmoja hadi unaofuata",
      "Mashamba machache yanayopotea kwa MLN ya mahindi au virusi vya mihogo katika vikundi vya wanafunzi (ripoti za ugani)"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu yenye kikokotoo, au karatasi, kalamu na kikokotoo rahisi",
      "Utepe wa kupimia au kamba yenye alama kila mita, na mizani ya kupima uzito wa mavuno",
      "Kufikia shamba la mahindi, mpunga, mihogo au mikunde",
      "Orodha ya kitaifa ya aina au aina zinazoshauriwa na ugani kwa eneo hilo",
      "Kama dakika 60 hadi 90 kwa jumla kwa masomo, majaribio mafupi na mitihani, pamoja na mazoezi ya shambani"
    ],
    facilitatorNotes: [
      "Fanyeni jaribio la awali pamoja, kisha fanyeni hesabu za idadi ya mimea na mavuno shambani kwa utepe wa kupimia na mimea halisi.",
      "Pata aina na nafasi zinazoshauriwa kwa eneo lako kutoka taasisi ya utafiti au ugani kabla ya kipindi; usizibuni.",
      "Leta picha au sampuli halisi za MLN, batobato ya mihogo, michirizi ya kahawia ya mihogo (pamoja na mzizi uliokatwa) na blast ya mpunga kama zinatokea katika eneo lako.",
      "Vikundi vya wakulima wanaokubaliana kuhusu mzunguko wa mazao na vifaa safi vya kupanda hudhibiti MLN na virusi vya mihogo vizuri zaidi; tumia kipindi kuanzisha mazungumzo hayo.",
      "Pima mpango wa uzalishaji kwa rubriki, na ukague kila hesabu pamoja na mwanafunzi.",
      "Rudi baada ya kuvuna kulinganisha mavuno halisi ya kila mwanafunzi na lengo katika mpango."
    ]
  }
};
