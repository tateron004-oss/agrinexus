"use strict";

// Koach Learn course (Swahili translation of agriculture-africa/agri-risk-management.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const KAMIS = { name: "Kenya Agricultural Market Information System (KAMIS), Wizara ya Kilimo: bei za masoko", url: "https://kamis.kilimo.go.ke" };
const NBS = { name: "National Bureau of Statistics, Nigeria (ripoti ya kila mwezi ya bei za vyakula, Selected Food Prices Watch, na mfumuko wa bei)", url: "https://nigerianstat.gov.ng" };
const CI_COCOA = { name: "Financial Afrik (5 Machi 2026): Cote d'Ivoire yaweka bei ya kakao shambani ya msimu wa kati kuwa FCFA 1,200 kwa kilo", url: "https://www.financialafrik.com/2026/03/05/cote-divoire-le-prix-de-la-campagne-intermediaire-de-cacao-fixe-a-1-200-fcfa-kg/" };
const PICS = { name: "Purdue University: mifuko isiyopitisha hewa ya Purdue Improved Crop Storage (PICS)", url: "https://www.purdue.edu/discoverypark/food/research/pics.php" };
const NCX = { name: "Nigeria Commodity Exchange (NCX): kuhusu sisi (imepewa leseni na Securities and Exchange Commission)", url: "https://ncx.com.ng/about-us/" };
const GCX = { name: "Ghana Commodity Exchange (GCX), tovuti rasmi", url: "https://www.gcx.com.gh" };
const GCX_FIRST = { name: "MyJoyOnline: Ghana Commodity Exchange yafanya biashara yake ya kwanza ya kielektroniki (mikataba ya papo kwa papo ya mahindi, 2018)", url: "https://www.myjoyonline.com/ghana-commodity-exchange-executes-first-electronic-trade/" };
const ACRE = { name: "ACRE Africa: bima ya kielelezo cha hali ya hewa (wakala wa bima aliyeidhinishwa)", url: "https://acreafrica.com/crop-insurance/weather-index-insurance/" };
const IBLI = { name: "ILRI: Bima ya Mifugo kwa Kielelezo (IBLI) na Kenya Livestock Insurance Programme (KLIP)", url: "https://ibli.ilri.org/" };
const ILRI_KLIP = { name: "ILRI: Macho angani: serikali ya Kenya inawapa wafugaji bima ya mifugo kupitia picha za satelaiti", url: "https://www.ilri.org/news/eyes-sky-kenyas-government-provides-pastoralists-livestock-insurance-through-satellite-imagery" };
const CNAAS = { name: "CNAAS, Compagnie Nationale d'Assurance Agricole du Senegal (kampuni ya taifa ya bima ya kilimo ya Senegal)", url: "https://www.cnaas.sn" };
const BCEAO = { name: "BCEAO, Benki Kuu ya Mataifa ya Afrika Magharibi: viashiria vikuu, pamoja na mfumuko wa bei", url: "https://www.bceao.int/fr/content/principaux-indicateurs-et-taux-directeurs" };
const CBK = { name: "Central Bank of Kenya (mfumuko wa bei na taasisi zenye leseni)", url: "https://www.centralbank.go.ke" };
const SASRA = { name: "SASRA, Kenya: orodha ya SACCO zenye leseni ya kupokea akiba", url: "https://www.sasra.go.ke/licensed-dt-saccos/" };

module.exports = {
  id: "agri-risk-management-sw",
  lang: "sw",
  translationOf: "agri-risk-management",
  category: "Agriculture (Africa)",
  name: "Kudhibiti Hatari za Kilimo: Bei, Hali ya Hewa na Bima",
  skills: "Kupanga hatari za shamba kwenye rejista ya hatari, Kufuatilia bei na kusoma mwelekeo wa soko, Kugawanya hatari kwa kuchanganya shughuli, kuuza kwa awamu na kuhifadhi, Kupima mikataba ya bei ya mbele na kinga ya bei (hedging), Kukagua ofa ya bima ya kielelezo, Kulinda akiba dhidi ya mfumuko wa bei",
  outcome: "kuorodhesha na kupanga hatari zinazolikabili shamba lako, kufuatilia bei na kusoma mwelekeo wake, kuamua lini kuhifadhi na kuuza kwa awamu kunalipa, kukagua mkataba wa bei maalum na ofa ya bima ya kielelezo kabla ya kusaini, na kuweka akiba yako salama zaidi dhidi ya mfumuko wa bei, yote yakiwa yameandikwa katika mpango wa hatari wa shamba wa ukurasa mmoja.",
  about: [
    "Kozi hii ni kwa wakulima wadogo na wakulima wa kibiashara wanaokua, wafugaji, vijana wajasiriamali wa kilimo, viongozi wa vyama vya ushirika na maafisa ugani nchini Kenya, Nigeria, Ghana, Senegal, Cote d'Ivoire na kote Afrika. Hali mbaya ya hewa, bei zinazoshuka, mifugo wagonjwa na gharama zinazopanda vinaweza kufuta kazi ya mwaka mzima. Huwezi kuondoa hatari, lakini unaweza kuiona ikija, kuigawanya na kuwahamishia wengine sehemu yake.",
    "Sura ya 1 inahusu kuona na kugawanya hatari: aina za hatari za shamba na rejista ya hatari, kupanda na kushuka kwa bei na mwelekeo wa soko, na kugawanya hatari kwa kuchanganya shughuli, kuuza kwa awamu na kuhifadhi. Sura ya 2 inahusu kuwahamishia wengine hatari na kulinda pesa zako: mikataba ya bei ya mbele na ya bei maalum, maana ya kinga ya bei (hedging) kwenye soko la bidhaa, bima ya mazao na mifugo kwa kielelezo, na mfumuko wa bei na akiba.",
    "Kozi hii inaeleza jinsi mikataba, masoko ya bidhaa, bima na akiba zinavyofanya kazi, na hatari zake. Haitoi ushauri wa uwekezaji na haipendekezi kufanya biashara kwenye soko lolote la bidhaa. Soma kila mkataba na kila sera ya bima yote, hakikisha kampuni ina leseni, na muulize mshauri unayemwamini kama chama chako cha ushirika, afisa ugani au wakili kabla ya kusaini. Takwimu za pesa ni mifano isipokuwa chanzo kimetajwa."
  ],
  finalTask: "Andika mpango wa hatari wa ukurasa mmoja kwa shamba lako (au shamba la mfano): hatari zako tano kuu zikiwa zimepangwa kwa uwezekano na madhara, na hatua moja kwa kila moja; daftari la bei la wiki nne kwa zao au mfugo wako mkuu kutoka angalau vyanzo viwili, na mwelekeo unaouona; mpango wa kuuza unaosema utauza kiasi gani wakati wa mavuno na utahifadhi kiasi gani, pamoja na bei ya kurudisha gharama za kuhifadhi; maswali utakayouliza kabla ya kusaini mkataba wa bei maalum au kununua bima ya kielelezo; na jinsi utakavyoweka akiba yako salama zaidi dhidi ya mfumuko wa bei.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wakulima wadogo na wakulima wa kibiashara wanaokua, wafugaji wa kuhamahama, vijana wajasiriamali wa kilimo, viongozi wa vyama vya ushirika na maafisa ugani nchini Kenya, Nigeria, Ghana na Afrika Magharibi inayozungumza Kifaransa, wanaolima mazao kama mahindi, mpunga, mtama, maharagwe, karanga, nyanya, kahawa na kakao, au wanaofuga ng'ombe, mbuzi, nguruwe, kuku au samaki.",
    startingPoint: "Wanajua kutokana na uzoefu kwamba hali ya hewa, bei na magonjwa vinaweza kuharibu msimu. Wengi huuza wakati wa mavuno kwa mnunuzi wa kwanza, huweka akiba kama pesa taslimu, mifugo au nafaka, na hawajawahi kusoma sera ya bima wala mkataba wa bei maalum. Baadhi wamesikia kuhusu masoko ya bidhaa au bima ya kielelezo lakini hawajui jinsi yanavyofanya kazi.",
    gap: "Bila mpango, ukame mmoja, kuanguka kwa bei au mlipuko wa ugonjwa kunaweza kuwalazimisha wakulima kuuza mifugo na ardhi, kukopa kwa gharama kubwa au kuacha kilimo. Wakulima wanaofuatilia bei, kugawanya hatari, kusoma masharti ya mikataba na bima, na kulinda akiba zao hupona haraka zaidi na huaminiwa zaidi na wanunuzi na wakopeshaji.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; kila neno la fedha linaelezwa",
      "Vifaa: simu ya kawaida kwa bei kwa SMS, redio au simu; daftari kwa ajili ya daftari la bei",
      "Muda: masomo ya dakika 5 hadi 6 yanayoingia kati ya kazi za shambani",
      "Bima, masoko ya bidhaa na programu zinatofautiana kwa nchi na hubadilika; wanafunzi hukagua ofa ya sasa na mdhibiti",
      "Hakuna ushauri wa uwekezaji wala pendekezo la kufanya biashara; wanafunzi humuuliza mshauri wanayemwamini kabla ya kusaini chochote"
    ],
    prerequisites: "Hakuna. Kozi \"Biashara ya Kilimo na Usimamizi wa Shamba\" na \"Uhasibu wa Shamba na Usimamizi wa Uwekezaji\" (bei ya kurudisha gharama) zinasaidia katika hesabu."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukifikiria shamba lako na kaya yako", action: "kuorodhesha hatari kuu zinazokukabili na kuzipanga katika rejista ya hatari kulingana na uwezekano wake na madhara yake", standard: "ukiwa na angalau hatari moja ya kila aina (uzalishaji, soko, pesa, sheria na watu) na hatua moja kwa kila moja ya hatari tano za juu" },
    { id: "O2", condition: "Kwa zao au mfugo wako mkuu, kwa wiki nne", action: "kuandika bei kila wiki kutoka angalau vyanzo viwili, pamoja na huduma rasmi ya taarifa za soko inapopatikana, na kueleza mwelekeo", standard: "kwa bidhaa, daraja na kipimo kilekile kila wiki" },
    { id: "O3", condition: "Ukipewa mavuno, bei ya leo, bei inayotarajiwa baadaye na gharama za kuhifadhi", action: "kukokotoa bei ya kurudisha gharama za kuhifadhi na kuandika mpango wa kuuza kwa awamu na kugawanya hatari", standard: "kwa hesabu sahihi na mahitaji ya pesa wakati wa mavuno yakiwa yametimizwa" },
    { id: "O4", condition: "Ukipewa ofa ya mkataba wa bei ya mbele au wa bei maalum", action: "kuorodhesha masharti ya kukagua na kueleza unachopata na unachoacha, pamoja na jinsi kinga ya bei (hedging) kwenye soko la bidhaa inavyofanya kazi", standard: "ukitaja angalau masharti matano pamoja na faida moja na hatari moja" },
    { id: "O5", condition: "Ukipewa ofa ya bima ya mazao au mifugo kwa kielelezo", action: "kukagua kielelezo, kiwango cha kuanzisha malipo, ada ya bima, hatari ya tofauti (basis risk) na leseni ya kampuni ya bima", standard: "kabla ya kulipa, ukiandika jibu la kila moja" },
    { id: "O6", condition: "Ukipewa akiba yako na kiwango cha sasa cha mfumuko wa bei", action: "kulinganisha angalau njia tatu za kuweka akiba na kuchagua mchanganyiko unaoilinda dhidi ya mfumuko wa bei na wizi", standard: "ukitaja hatari moja kwa kila njia na kuhakikisha SACCO, benki au taasisi ndogo ya fedha yoyote ina leseni" }
  ],
  chapters: [
    {
      name: "Sura 1: Kuona na kugawanya hatari",
      lessons: [
        {
          title: "Aina za hatari za shamba na rejista ya hatari",
          objectives: ["O1"],
          minutes: 5,
          goal: "Orodhesha hatari kuu za shamba lako na uzipange katika rejista rahisi ya hatari.",
          text: [
            "Hatari za shamba ni za aina tano. Hatari za uzalishaji: ukame, mafuriko, wadudu kama viwavijeshi vamizi (fall armyworm), magonjwa ya mazao na mifugo, wizi. Hatari za soko: bei kushuka, wanunuzi kutolipa au kutokuja kuchukua mazao, bei za pembejeo kupanda. Hatari za pesa: deni usiloweza kulipa, kupoteza akiba, mfumuko wa bei, viwango vya kubadilisha fedha kwa mazao ya kuuza nje kama kahawa na kakao. Hatari za sheria: kodi mpya, marufuku ya kuuza nje, mabadiliko ya sheria za ardhi au za soko. Hatari za watu: ugonjwa, jeraha au kifo katika familia, au kumpoteza mfanyakazi muhimu.",
            "Rejista ya hatari ni jedwali lenye mstari mmoja kwa kila hatari. Kwa kila moja, toa alama ya uwezekano wake (1 chini, 2 wastani, 3 juu) na madhara yake (1 madogo, 2 ya wastani, 3 makubwa). Zidisha alama hizo mbili kupata alama kati ya 1 na 9. Alama za juu zaidi zinakuja kwanza.",
            "Kwa kila hatari ya juu, chagua hatua: iepuke (usipande nyanya katika mwezi wenye mvua nyingi zaidi), ipunguze (mbegu zinazostahimili ukame, chanjo kama daktari wa mifugo anavyoshauri, kuhifadhi), igawanye au ihamishe (bima, mkataba, chama cha ushirika), au ikubali na uweke akiba kwa ajili yake. Pitia rejista kabla ya kila msimu."
          ],
          steps: ["Orodhesha hatari za kila aina: uzalishaji, soko, pesa, sheria, watu.", "Toa alama ya uwezekano wa kila moja: 1, 2 au 3.", "Toa alama ya madhara ya kila moja: 1, 2 au 3.", "Zidisha alama na upange hatari.", "Kwa tano za juu, chagua kuepuka, kupunguza, kugawanya au kukubali, na hatua moja.", "Pitia rejista kabla ya kila msimu."],
          words: [["Hatari", "jambo linaloweza kutokea na kudhuru shamba lako au mapato yako."], ["Rejista ya hatari", "jedwali linaloorodhesha hatari zako, uwezekano na madhara ya kila moja, na utakachofanya."], ["Uwezekano", "jinsi ilivyo rahisi kwa jambo kutokea."], ["Madhara", "uharibifu ambao jambo lingesababisha likitokea."]],
          slides: [
            { title: "Aina tano za hatari za shamba", bullets: ["Uzalishaji: hali ya hewa, wadudu, magonjwa, wizi", "Soko: bei, wanunuzi, gharama za pembejeo", "Hatari za pesa, sheria na watu"] },
            { title: "Toa alama kwa kila hatari", bullets: ["Uwezekano 1-3 x madhara 1-3 = alama 1-9", "Alama za juu kwanza"] },
            { title: "Njia nne za kujibu hatari", bullets: ["Iepuke", "Ipunguze", "Igawanye au ihamishe: bima, mikataba, vikundi", "Ikubali na uweke akiba kwa ajili yake"] }
          ],
          tryIt: "Andika rejista ya hatari kwa shamba lako yenye angalau hatari nane zinazogusa aina zote tano. Toa alama kwa kila moja, zipange, na uandike hatua ya kuepuka, kupunguza, kugawanya au kukubali kwa tano za juu.",
          youCanNow: "kuorodhesha hatari za shamba lako, kuzipanga na kuchagua hatua kwa zile mbaya zaidi.",
          quickCheck: [
            { objective: "O1", q: "Bei ya mahindi inashuka kwa nusu wakati wa mavuno. Hii ni hatari ya aina gani?", options: ["Hatari ya uzalishaji", "Hatari ya watu", "Hatari ya soko", "Hatari ya sheria"], answer: 2, why: "Mabadiliko ya bei ni hatari za soko." },
            { objective: "O1", q: "Hatari ina uwezekano 3 na madhara 2. Alama yake ni ngapi?", options: ["6", "5", "1", "9"], answer: 0, why: "3 x 2 = 6." }
          ]
        },
        {
          title: "Kupanda na kushuka kwa bei na kusoma mwelekeo wa soko",
          objectives: ["O2"],
          minutes: 6,
          goal: "Weka daftari la bei la kila wiki kutoka angalau vyanzo viwili na ueleze mwelekeo.",
          text: [
            "Bei za mazao na mifugo hupanda na kushuka kufuatana na msimu, hali ya hewa, bidhaa zinazoingizwa na kuuzwa nje, gharama za mafuta na mahitaji ya wanunuzi. Bei za vyakula vingi vikuu huwa chini zaidi wakati wa mavuno, kila mtu anapouza, na juu zaidi katika miezi kabla ya mavuno yanayofuata. Hata bei iliyowekwa na serikali inaweza kubadilika sana kati ya misimu: huko Cote d'Ivoire, bei ya uhakika ya kakao shambani ilikuwa faranga 2,800 za CFA kwa kilo katika msimu mkuu wa 2025-2026, na serikali iliiweka kuwa 1,200 kwa kilo kwa msimu wa kati kuanzia Machi 2026, baada ya bei za kakao duniani kushuka.",
            "Tumia huduma rasmi za taarifa za soko zinapopatikana. Nchini Kenya, KAMIS ya Wizara ya Kilimo inachapisha bei za masoko. Nchini Nigeria, National Bureau of Statistics (ofisi ya taifa ya takwimu) inachapisha ripoti ya kila mwezi ya bei za vyakula kwa kila jimbo. Nchini Ghana, Ghana Commodity Exchange inachapisha bei za biashara zake. Ongeza ripoti za soko za redio, chama chako cha ushirika na angalau wanunuzi wawili.",
            "Weka daftari la bei: kila wiki, andika tarehe, soko au chanzo, bidhaa, daraja na kipimo (kwa mfano gunia la kilo 90 la mahindi makavu), na bei. Baada ya wiki nne au zaidi, angalia mwelekeo: unapanda, unashuka au uko sawa. Linganisha na miezi hiyohiyo mwaka jana ukiweza. Mwelekeo ni mwongozo, si ahadi: bei zinaweza kugeuka haraka."
          ],
          steps: ["Chagua bidhaa yako kuu, daraja na kipimo.", "Chagua angalau vyanzo viwili, pamoja na huduma rasmi inapopatikana.", "Kila wiki andika: tarehe, chanzo, bidhaa, daraja, kipimo, bei.", "Baada ya wiki nne, weka alama ya mwelekeo: unapanda, unashuka au uko sawa.", "Linganisha na miezi hiyohiyo mwaka jana.", "Shiriki daftari na kikundi chako."],
          words: [["Huduma ya taarifa za soko", "huduma inayokusanya na kushiriki bei kutoka masokoni, kwa tovuti, SMS au redio."], ["Mwelekeo", "upande wa jumla ambao bei zinaelekea kwa wiki au miezi kadhaa."], ["Bei ya shambani", "bei anayolipwa mkulima shambani, kabla ya kusafirisha kwenda sokoni."]],
          slides: [
            { title: "Kwa nini bei hupanda na kushuka", bullets: ["Msimu, hali ya hewa, bidhaa za kuingizwa na kuuzwa nje", "Gharama za mafuta na mahitaji", "Mara nyingi chini zaidi wakati wa mavuno"] },
            { title: "Hata bei zilizowekwa hubadilika", bullets: ["Kakao Cote d'Ivoire: CFA 2,800/kg, msimu mkuu 2025-26", "Iliwekwa CFA 1,200/kg kuanzia Machi 2026", "Baada ya bei za dunia kushuka"] },
            { title: "Mahali pa kupata bei", bullets: ["Kenya: KAMIS", "Nigeria: bei za vyakula za kila mwezi za NBS", "Ghana: biashara za Commodity Exchange; redio; wanunuzi"] },
            { title: "Daftari lako la bei la kila wiki", bullets: ["Tarehe, chanzo, bidhaa, daraja, kipimo, bei", "Baada ya wiki 4: unapanda, unashuka au uko sawa?", "Mwelekeo ni mwongozo, si ahadi"] }
          ],
          sources: [KAMIS, NBS, GCX, CI_COCOA],
          tryIt: "Anza daftari la bei kwa zao au mfugo wako mkuu leo. Andika bei ya wiki hii kutoka vyanzo viwili, pamoja na bidhaa, daraja na kipimo, na weka kikumbusho kwenye simu yako kwa siku hiyohiyo kila wiki.",
          youCanNow: "kuweka daftari la bei la kila wiki kutoka vyanzo rasmi na vya karibu na kueleza mwelekeo wa bei.",
          quickCheck: [
            { objective: "O2", q: "Kwa nini uandike daraja na kipimo kwa kila bei katika daftari lako?", options: ["Ili daftari lionekane rasmi", "Wanunuzi wanahitaji kuliona", "Haihitajiki", "Ili ulinganishe kitu kilekile kila wiki"], answer: 3, why: "Bei ya gunia la kilo 50 la mahindi mabichi haiwezi kulinganishwa na gunia la kilo 90 la mahindi makavu." },
            { objective: "O2", q: "Kwa wiki tano, bei ya nyanya sokoni ilikuwa 400, 420, 450, 470, 500 kwa kreti. Mwelekeo ni upi?", options: ["Unashuka", "Unapanda", "Uko sawa", "Hauwezi kujulikana"], answer: 1, why: "Kila wiki bei iko juu kuliko wiki iliyotangulia." }
          ]
        },
        {
          title: "Kugawanya hatari: kuchanganya shughuli, kuuza kwa awamu na kuhifadhi",
          objectives: ["O3"],
          minutes: 6,
          goal: "Kokotoa kama kuhifadhi kunalipa na uandike mpango wa kuuza kwa awamu.",
          text: [
            "Kuchanganya shughuli kunamaanisha kutoweka mayai yote kwenye kikapu kimoja: mazao mawili au zaidi yenye misimu au masoko tofauti, mbuzi au kuku wachache, samaki, miti, au mapato nje ya shamba. Moja likishindwa, jingine bado linaweza kulipa. Usigawanye sana hadi ushindwe kusimamia vizuri hata kimoja.",
            "Kuuza kwa awamu kunamaanisha kuuza sehemu ya mavuno kwa nyakati tofauti badala ya yote mara moja. Kwa mfano, uza theluthi moja wakati wa mavuno kulipa ada za shule na madeni, theluthi moja miezi miwili baadaye na theluthi moja miezi minne baadaye. Unaepuka kuuza yote kwa bei ya chini kabisa, na unaepuka kuweka matumaini yote kwenye bei ya juu ambayo huenda isije.",
            "Kuhifadhi kunalipa tu kama bei ya baadaye inafidia gharama za kuhifadhi na hasara. Bei ya kurudisha gharama za kuhifadhi = (bei ya mavuno x magunia + gharama za kuhifadhi) / magunia utakayouza baadaye. Mfano (namba za kubuni kwa shilingi za Kenya): magunia 10 ya mahindi, bei ya mavuno 3,000 kwa gunia, gharama za kuhifadhi 3,000 kwa miezi minne (mifuko isiyopitisha hewa, ghala, ukaguzi). Bei ya kurudisha gharama = (30,000 + 3,000) / 10 = 3,300 kwa gunia. Bei ikifika 4,200 unapata faida; ikifika 3,200 tu unapata hasara. Hifadhi nafaka safi na kavu tu katika mifuko isiyopitisha hewa au ghala lililoidhinishwa, na uikague kuona wadudu na ukungu."
          ],
          steps: ["Orodhesha kile kingine unachoweza kulima, kufuga au kupata ili kushindwa kumoja kusikuangushe.", "Kokotoa pesa unazohitaji wakati wa mavuno.", "Panga kuuza kiasi cha kutosha wakati wa mavuno kwa pesa hizo, na uhifadhi kilichobaki uuze kwa awamu.", "Bei ya kurudisha gharama za kuhifadhi = (bei ya mavuno x magunia + gharama za kuhifadhi) / magunia.", "Ilinganishe na mwelekeo wa bei katika daftari lako.", "Hifadhi mazao safi na makavu tu kwa usalama, na uyakague."],
          words: [["Kuchanganya shughuli", "kugawanya kilimo na mapato yako katika shughuli kadhaa ili kushindwa kumoja kusikuangushe."], ["Kuuza kwa awamu", "kuuza mavuno kwa sehemu katika nyakati tofauti badala ya yote mara moja."], ["Bei ya kurudisha gharama za kuhifadhi", "bei ya baadaye unayohitaji ili kufidia bei ya mavuno uliyoiacha pamoja na gharama za kuhifadhi."], ["Mfuko usiopitisha hewa", "mfuko wa kuhifadhia uliofungwa kabisa unaowazuia wadudu kupumua, kwa hiyo nafaka inabaki salama bila dawa."]],
          slides: [
            { title: "Changanya shughuli", bullets: ["Mazao yenye misimu au masoko tofauti", "Mifugo midogo, samaki, miti, mapato nje ya shamba", "Si mengi kiasi cha kushindwa kuyasimamia"] },
            { title: "Uza kwa awamu", bullets: ["Theluthi moja wakati wa mavuno kwa mahitaji ya pesa", "Theluthi moja baada ya miezi 2, theluthi moja baada ya 4", "Usiweke kila kitu kwenye bei moja"] },
            { title: "Je, kuhifadhi kunalipa? (mfano KES)", bullets: ["(3,000 x 10 + 3,000) / 10 = 3,300 kwa gunia", "Bei 4,200: faida; bei 3,200: hasara", "Linganisha na daftari lako la bei"] },
            { title: "Hifadhi kwa usalama", bullets: ["Nafaka safi na kavu tu", "Mifuko isiyopitisha hewa au ghala lililoidhinishwa", "Kagua wadudu na ukungu"] }
          ],
          sources: [PICS],
          tryIt: "Kwa zao lako kuu, andika unatarajia magunia au kilo ngapi, unahitaji pesa kiasi gani wakati wa mavuno, na utauza kiasi gani wakati wa mavuno, baada ya miezi miwili na baada ya miezi minne. Kokotoa bei ya kurudisha gharama za kuhifadhi kwa sehemu utakayohifadhi.",
          youCanNow: "kukokotoa kama kuhifadhi kunalipa, kupanga kuuza kwa awamu na kugawanya hatari katika shughuli zaidi ya moja.",
          quickCheck: [
            { objective: "O3", q: "Bei ya mavuno 5,000 kwa gunia, magunia 20, gharama za kuhifadhi 10,000. Bei ya kurudisha gharama za kuhifadhi ni ngapi?", options: ["5,000", "10,500", "5,500", "500"], answer: 2, why: "(5,000 x 20 + 10,000) / 20 = 110,000 / 20 = 5,500 kwa gunia." },
            { objective: "O3", q: "Faida kuu ya kuuza kwa awamu ni ipi?", options: ["Unaepuka kuuza yote kwa bei ya chini kabisa au kuweka matumaini yote kwenye bei ya juu", "Wanunuzi hulipa zaidi kila wakati kwa kiasi kidogo", "Huhitaji kuhifadhi kamwe", "Inaondoa hatari yote ya bei"], answer: 0, why: "Kuuza kwa sehemu kunagawanya hatari ya bei katika tarehe kadhaa." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kuona na kugawanya hatari",
        questions: [
          { objective: "O1", q: "Ipi ni hatari ya uzalishaji?", options: ["Kodi mpya ya kuuza nje", "Mnunuzi anayelipa kwa kuchelewa", "Mfumuko wa bei", "Viwavijeshi vamizi kwenye mahindi yako"], answer: 3, why: "Wadudu na hali ya hewa vinaathiri unachozalisha, kwa hiyo ni hatari za uzalishaji." },
          { objective: "O1", q: "Kununua bima ya kielelezo dhidi ya ukame ni jibu lipi kwa hatari?", options: ["Kuiepuka", "Kuigawanya au kuihamisha", "Kuikubali", "Kuipuuza"], answer: 1, why: "Bima inahamisha sehemu ya hasara kwa kampuni ya bima." },
          { objective: "O2", q: "Ipi ni huduma rasmi ya bei za soko nchini Kenya?", options: ["KAMIS ya Wizara ya Kilimo", "Status ya WhatsApp ya mfanyabiashara", "Makisio ya jirani", "Risiti ya mwaka jana"], answer: 0, why: "KAMIS ni mfumo wa taarifa za soko wa Wizara ya Kilimo." },
          { objective: "O3", q: "Bei ya mavuno 2,000 kwa gunia, magunia 10, gharama za kuhifadhi 4,000. Bei ya baadaye ni 2,300. Je, kuhifadhi kunalipa?", options: ["Ndiyo, kwa sababu 2,300 ni zaidi ya 2,000", "Ndiyo, kuhifadhi kunalipa kila wakati", "Hapana, bei ya kurudisha gharama ni 2,400, kwa hiyo kuna hasara", "Haiwezi kukokotolewa"], answer: 2, why: "(2,000 x 10 + 4,000) / 10 = 2,400; 2,300 iko chini ya hiyo." },
          { objective: "O3", q: "Mkulima analima nyanya tu kwa mnunuzi mmoja. Nini kingegawanya hatari?", options: ["Kupanda nyanya zaidi kwa mnunuzi yuleyule", "Kuongeza zao lenye msimu tofauti na kutafuta mnunuzi wa pili", "Kuuza kila kitu siku ya mavuno", "Kuacha kuweka kumbukumbu"], answer: 1, why: "Zao la pili na mnunuzi wa pili vinamaanisha kushindwa kumoja hakuchukui kila kitu." }
        ]
      }
    },
    {
      name: "Sura 2: Kuhamisha hatari na kulinda pesa zako",
      lessons: [
        {
          title: "Mikataba ya bei maalum, kinga ya bei na masoko ya bidhaa",
          objectives: ["O4"],
          minutes: 6,
          goal: "Orodhesha masharti ya kukagua katika mkataba wa bei maalum na ueleze maana ya kinga ya bei (hedging).",
          text: [
            "Mkataba wa bei ya mbele au wa bei maalum ni makubaliano ya sasa ya kuuza kiasi na ubora fulani kwa bei fulani katika tarehe ya baadaye. Unapata uhakika: unajua bei yako kabla ya mavuno, jambo linalokusaidia kupanga na kukopa. Unaacha kitu: bei ya soko ikipanda, bado unapata bei mliyokubaliana. Mavuno yako yakishindwa au ukiuza kwingine (kuuza pembeni), unaweza kuvunja mkataba na kudaiwa faini. Kabla ya kusaini, kagua: bidhaa na daraja, kiasi, bei au jinsi inavyowekwa, tarehe na mahali pa kukabidhi, nani analipa usafiri, vipimo vya ubora na kukataliwa, tarehe na njia ya malipo, na nini kinatokea mavuno yakishindwa au mnunuzi asipokuja kuchukua.",
            "Kinga ya bei (hedging) inamaanisha kuchukua nafasi inayopata faida zao lako linapopoteza thamani, ili mambo hayo mawili yalingane. Kwenye soko la bidhaa, wafanyabiashara wakubwa na wasindikaji hufanya hivi kwa futures: mikataba ya kawaida ya kununua au kuuza baadaye kwa bei iliyokubaliwa leo. Bei zikishuka, nafasi ya futures inapata faida huku zao likipata kidogo; bei zikipanda, nafasi ya futures inapata hasara huku zao likipata zaidi. Inahitaji dalali, amana zinazoitwa margin ambazo zinaweza kudaiwa ghafla, na ujuzi. Inaweza kupoteza pesa na si jambo la kujaribu bila mafunzo na ushauri.",
            "Barani Afrika, Nigeria Commodity Exchange (NCX) imepewa leseni na Securities and Exchange Commission ya Nigeria na inatoa biashara, ugunduzi wa bei, uhifadhi na upangaji wa madaraja ya bidhaa. Ghana Commodity Exchange (GCX), inayodhibitiwa na Securities and Exchange Commission ya Ghana, ilianza biashara ya kielektroniki ya papo kwa papo ya mahindi mwaka 2018 na inawaunganisha wakulima na maghala yaliyoidhinishwa. Wakulima wadogo wengi hufikia masoko ya bidhaa kupitia chama cha ushirika, mkusanyaji au ghala lililoidhinishwa, si kwa kufanya biashara wenyewe. Kozi hii haipendekezi kufanya biashara. Yeyote anayekuahidi faida kutokana na biashara ya bidhaa anaweza kuwa tapeli: kagua na mdhibiti wa masoko ya mitaji."
          ],
          steps: ["Soma mkataba wote, kwa sauti pamoja na kikundi chako ikiwezekana.", "Kagua bidhaa, daraja, kiasi, bei, tarehe na mahali pa kukabidhi, na usafiri.", "Kagua vipimo vya ubora, kukataliwa, tarehe na njia ya malipo.", "Uliza nini kinatokea mavuno yakishindwa au mnunuzi asipokuja kuchukua.", "Linganisha bei maalum na bei yako ya kurudisha gharama na daftari lako la bei.", "Uliza chama chako cha ushirika, afisa ugani au wakili kabla ya kusaini."],
          words: [["Mkataba wa bei ya mbele", "makubaliano ya sasa ya kuuza kiasi fulani kwa bei fulani katika tarehe ya baadaye."], ["Kinga ya bei (hedging)", "kuchukua nafasi inayopata faida zao lako linapopoteza thamani, ili hasara zilingane."], ["Futures", "mikataba ya kawaida inayouzwa kwenye soko la bidhaa ya kununua au kuuza bidhaa baadaye kwa bei iliyokubaliwa sasa."], ["Soko la bidhaa", "soko linalodhibitiwa ambapo wanunuzi na wauzaji hufanya biashara ya mazao na bidhaa nyingine kwa madaraja na sheria zilizokubaliwa."], ["Kuuza pembeni", "kuuza mazao yaliyoahidiwa kwa mnunuzi mmoja kwa mtu mwingine."]],
          slides: [
            { title: "Mkataba wa bei maalum", bullets: ["Kiasi, ubora na bei fulani kwa baadaye", "Faida: bei inayojulikana ya kupanga na kukopa", "Unaacha: ziada bei zikipanda"] },
            { title: "Kagua kila sharti", bullets: ["Bidhaa, daraja, kiasi, bei", "Tarehe ya kukabidhi, mahali, usafiri", "Vipimo vya ubora, kukataliwa, malipo", "Mavuno kushindwa; mnunuzi asipokuja kuchukua"] },
            { title: "Maana ya kinga ya bei (hedging)", bullets: ["Nafasi inayopata faida zao lako linapopoteza thamani", "Futures zinahitaji dalali, margin na ujuzi", "Inaweza kupoteza pesa: si kwa wanaoanza"] },
            { title: "Masoko ya bidhaa barani Afrika", bullets: ["Nigeria: NCX, yenye leseni ya SEC", "Ghana: GCX, biashara ya papo kwa papo ya mahindi tangu 2018", "Wakulima wengi hujiunga kupitia vyama vya ushirika au maghala"] }
          ],
          sources: [NCX, GCX, GCX_FIRST],
          tryIt: "Chukua mkataba halisi au wa mfano wa mnunuzi. Andika kila moja ya masharti manane kutoka kwenye hatua na kile mkataba unachosema (au \"haupo\"). Kisha andika jambo moja unalopata na hatari moja unayochukua ukiusaini.",
          youCanNow: "kukagua mkataba wa bei maalum sharti kwa sharti na kueleza maana ya kinga ya bei kwenye soko la bidhaa na kwa nini ina hatari.",
          quickCheck: [
            { objective: "O4", q: "Unasaini bei maalum ya 30,000 kwa gunia. Wakati wa kukabidhi, bei ya soko ni 36,000. Unapata nini?", options: ["36,000 kwa gunia", "33,000 kwa gunia", "Hakuna kitu", "30,000 kwa gunia, bei mliyokubaliana"], answer: 3, why: "Mkataba wa bei maalum hulipa bei iliyokubaliwa hata soko likipanda." },
            { objective: "O4", q: "Mgeni anajitolea kukufanyia biashara ya futures za bidhaa kwa \"faida ya uhakika\". Unapaswa kufanya nini?", options: ["Kukataa na kukagua kampuni hiyo na mdhibiti wa masoko ya mitaji", "Kutuma amana ndogo kuijaribu", "Kumpa PIN yako ya pesa kwa simu ili afanye biashara", "Kusaini haraka kabla ofa haijaisha"], answer: 0, why: "Hakuna anayeweza kuhakikisha faida ya biashara; ni dalili ya utapeli." }
          ]
        },
        {
          title: "Bima ya mazao na mifugo kwa kielelezo",
          objectives: ["O5"],
          minutes: 6,
          goal: "Kagua ofa ya bima ya kielelezo: kielelezo, kiwango cha kuanzisha malipo, ada ya bima, hatari ya tofauti na leseni.",
          text: [
            "Bima ya kawaida humtuma mtu kupima hasara shambani kwako. Bima ya kielelezo hulipa kielelezo kinapovuka kiwango fulani, kinachoitwa kiwango cha kuanzisha malipo (trigger): kwa mfano mvua inayopimwa kwa satelaiti au kituo cha hali ya hewa ikishuka chini ya kawaida, wastani wa mavuno katika eneo lako ukishuka, au picha za satelaiti zikionyesha malisho yakikauka. Hakuna anayetembelea shamba lako, kwa hiyo inaweza kuwa nafuu zaidi na kulipa haraka zaidi.",
            "Mifano: ACRE Africa, wakala wa bima aliyeidhinishwa aliye Kenya, hufanya kazi na kampuni za bima za nchini kutoa bima ya kielelezo cha hali ya hewa, ya kielelezo cha mavuno ya eneo na ya mifugo kwa kielelezo, mara nyingi ikiuzwa kupitia vikundi vya wakulima na kulipwa kwa pesa kwa simu. Serikali ya Kenya inaendesha Kenya Livestock Insurance Programme (KLIP), iliyoanzishwa mwaka 2015 kwa kutumia bima ya mifugo kwa kielelezo iliyotengenezwa pamoja na ILRI: serikali inalipa ada ya bima kwa wafugaji walio hatarini waliosajiliwa, na malipo yanaanzishwa picha za satelaiti zinapoonyesha malisho yakishindwa, ili wafugaji wapate pesa za kuwaweka wanyama hai. Nchini Senegal, kampuni ya taifa ya bima ya kilimo CNAAS inawekea bima mazao na mifugo na inatoa bima ya kielelezo.",
            "Udhaifu mkubwa ni hatari ya tofauti (basis risk): kielelezo kinaweza kisilingane na shamba lako. Zao lako linaweza kuharibika kwa mvua ya mawe ya eneo dogo huku mvua ya eneo ikionekana ya kawaida, kwa hiyo hakuna malipo, au kielelezo kinaweza kuanzisha malipo wakati shamba lako lilifanya vizuri. Kabla ya kulipa, uliza: hatari gani inafunikwa, kielelezo ni kipi na kinapimwa wapi, kiwango cha kuanzisha malipo ni kipi, malipo ni kiasi gani, ada ya bima ni kiasi gani na tarehe ya mwisho ya kununua, inalipa vipi na lini, na je kampuni ya bima ina leseni (Kenya: Insurance Regulatory Authority; Nigeria: NAICOM; Ghana: National Insurance Commission; nchi za faranga za CFA: CIMA na ofisi ya taifa ya bima)."
          ],
          steps: ["Uliza hatari gani inafunikwa: ukame, mvua nyingi mno, hasara ya mavuno ya eneo au malisho kushindwa.", "Uliza kielelezo ni kipi na kinapimwa wapi.", "Uliza kiwango cha kuanzisha malipo na kiasi cha malipo.", "Uliza ada ya bima, tarehe ya mwisho ya kununua na jinsi malipo yanavyokufikia.", "Fikiria hatari ya tofauti: je, kielelezo kingelingana na shamba lako?", "Hakikisha kampuni ya bima au wakala ana leseni ya mdhibiti wa bima."],
          words: [["Bima ya kielelezo", "bima inayolipa kielelezo kinachopimwa, kama mvua au malisho, kinapovuka kiwango fulani, si kwa kutembelea shamba lako."], ["Kiwango cha kuanzisha malipo (trigger)", "kiwango cha kielelezo kinachoifanya kampuni ya bima ilipe."], ["Ada ya bima", "bei unayolipa kwa kinga ya bima."], ["Hatari ya tofauti (basis risk)", "uwezekano kwamba kielelezo hakilingani na kile kilichotokea kweli shambani kwako."]],
          slides: [
            { title: "Jinsi bima ya kielelezo inavyofanya kazi", bullets: ["Inalipa kielelezo kinapovuka kiwango cha kuanzisha malipo", "Mvua, mavuno ya eneo au malisho kutoka satelaiti", "Hakuna kutembelea shamba: nafuu zaidi na haraka zaidi"] },
            { title: "Mifano", bullets: ["ACRE Africa: kielelezo cha hali ya hewa, mavuno ya eneo, mifugo", "KLIP Kenya: serikali inalipa ada ya bima kwa wafugaji", "Senegal: bima ya mazao na mifugo ya CNAAS"] },
            { title: "Hatari ya tofauti", bullets: ["Kielelezo kinaweza kisilingane na shamba lako", "Mvua ya mawe ya eneo dogo: hasara bila malipo", "Uliza kituo cha kupimia kiko karibu kiasi gani"] },
            { title: "Uliza kabla ya kulipa", bullets: ["Hatari, kielelezo, kiwango cha kuanzisha malipo, malipo", "Ada ya bima, tarehe ya mwisho, inavyolipa", "Ina leseni? IRA, NAICOM, NIC, CIMA"] }
          ],
          sources: [ACRE, IBLI, ILRI_KLIP, CNAAS],
          tryIt: "Uliza chama chako cha ushirika, muuzaji wa pembejeo au afisa ugani kuhusu bima moja ya kielelezo iliyo karibu nawe (au tumia mfano). Andika majibu ya maswali manane kutoka kwenye hatua, na uandike njia moja ambayo hatari ya tofauti ingeweza kuathiri shamba lako.",
          youCanNow: "kukagua ofa ya bima ya kielelezo: kielelezo, kiwango cha kuanzisha malipo, ada ya bima, hatari ya tofauti na leseni kabla ya kulipa.",
          quickCheck: [
            { objective: "O5", q: "Nini kinafanya sera ya bima ya kielelezo ilipe?", options: ["Kampuni ya bima kutembelea shamba lako", "Kielelezo kuvuka kiwango cha kuanzisha malipo", "Wewe kuomba malipo", "Hasara yoyote unayoripoti"], answer: 1, why: "Bima ya kielelezo hulipa kulingana na kielelezo kinachopimwa, si kwa kutembelea shamba." },
            { objective: "O5", q: "Mahindi yako yaliharibiwa na mvua ya mawe ya eneo dogo, lakini kielelezo cha mvua cha eneo kilibaki cha kawaida. Hii inaitwaje?", options: ["Ada ya bima", "Kiwango cha kuanzisha malipo", "Hatari ya tofauti", "Kinga ya bei"], answer: 2, why: "Hatari ya tofauti ni pale kielelezo kisipolingana na kilichotokea shambani kwako." }
          ]
        },
        {
          title: "Mfumuko wa bei na kuweka akiba yako",
          objectives: ["O6"],
          minutes: 5,
          goal: "Linganisha njia za kuweka akiba na uchague mchanganyiko unaoilinda dhidi ya mfumuko wa bei na wizi.",
          text: [
            "Mfumuko wa bei unamaanisha bei kwa jumla zinapanda, kwa hiyo pesa zilezile zinanunua kidogo. Mfano: bei zikipanda 10% kwa mwaka, 10,000 zilizowekwa kwenye kopo nyumbani zitanunua tu kile ambacho takriban 9,100 zinanunua leo. Tafuta kiwango cha sasa cha mfumuko wa bei kutoka benki kuu au ofisi ya takwimu ya nchi yako (Kenya: Central Bank of Kenya; Nigeria: National Bureau of Statistics; nchi za faranga za CFA za Afrika Magharibi: BCEAO).",
            "Kila njia ya kuweka akiba ina hatari. Pesa taslimu nyumbani: rahisi kuzifikia, lakini zinapoteza thamani kwa mfumuko wa bei na zinaweza kuibiwa. Kikundi cha akiba au VSLA: kinajenga tabia na kinaweza kulipa mgao, lakini kinategemea kumbukumbu za uaminifu. Akaunti ya SACCO, benki au taasisi ndogo ya fedha yenye leseni: salama zaidi na inaweza kulipa riba, lakini linganisha riba na mfumuko wa bei na ukague ada. Mifugo: inaweza kuongezeka thamani, lakini inaweza kufa kwa ukame au ugonjwa. Nafaka iliyohifadhiwa: bei inaweza kupanda, lakini inaweza kuharibika au bei kushuka. Kununua pembejeo muhimu mapema: kunaepuka kupanda kwa bei, lakini kunahitaji uhifadhi salama.",
            "Gawanya akiba yako katika njia zaidi ya moja. Weka akiba ya dharura unayoweza kuifikia haraka. Hakikisha SACCO, benki au taasisi ndogo ya fedha yoyote ina leseni (nchini Kenya, SASRA inaorodhesha SACCO zenye leseni ya kupokea akiba). Kuwa mwangalifu sana na mpango wowote unaoahidi faida kubwa na ya haraka: mara nyingi ni utapeli. Somo hili linaeleza jinsi kuweka akiba kunavyofanya kazi; si ushauri wa uwekezaji. Muulize mshauri unayemwamini kuhusu hali yako mwenyewe."
          ],
          steps: ["Tafuta kiwango cha sasa cha mfumuko wa bei kutoka benki kuu au ofisi ya takwimu.", "Orodhesha akiba yako iko wapi sasa: pesa taslimu, kikundi, SACCO, benki, mifugo, nafaka.", "Andika hatari moja kwa kila moja.", "Chagua mchanganyiko wa angalau njia tatu, pamoja na akiba ya dharura unayoweza kuifikia haraka.", "Hakikisha kila SACCO, benki au taasisi ndogo ya fedha ina leseni.", "Kataa mipango inayoahidi faida kubwa na ya haraka."],
          words: [["Mfumuko wa bei", "kupanda kwa bei kwa jumla, kwa hiyo pesa zilezile zinanunua kidogo."], ["Riba", "pesa ambayo benki au SACCO inakulipa kwa kuweka akiba yako, au unayolipa kwa kukopa."], ["Akiba ya dharura", "akiba inayowekwa kwa matatizo ya ghafla, kama ugonjwa au mavuno kushindwa, ambayo unaweza kuifikia haraka."], ["VSLA", "chama cha akiba na mikopo cha kijiji: kikundi kinachoweka akiba pamoja, kinakopesha wanachama na kugawana akiba na faida."]],
          slides: [
            { title: "Mfumuko wa bei unakula pesa taslimu", bullets: ["Bei juu 10%: 10,000 zinanunua kile ambacho takriban 9,100 zinanunua sasa", "Tafuta kiwango: benki kuu au ofisi ya takwimu"] },
            { title: "Kila njia ya akiba ina hatari", bullets: ["Pesa taslimu: mfumuko wa bei na wizi", "Kikundi, SACCO, benki: kumbukumbu, ada, riba dhidi ya mfumuko wa bei", "Mifugo na nafaka: magonjwa, kuharibika, bei"] },
            { title: "Linda akiba yako", bullets: ["Gawanya katika angalau njia tatu", "Weka akiba ya dharura unayoweza kuifikia", "Kagua leseni (Kenya: orodha ya SASRA)", "Faida kubwa na ya haraka? Mara nyingi ni utapeli"] }
          ],
          sources: [CBK, NBS, BCEAO, SASRA],
          tryIt: "Kazi ya mwisho: andika mpango wako wa hatari wa shamba wa ukurasa mmoja: hatari tano kuu na hatua zake, daftari la bei la wiki nne na mwelekeo wake, mpango wako wa kuuza na kuhifadhi pamoja na bei ya kurudisha gharama za kuhifadhi, maswali yako kwa mkataba na kwa bima ya kielelezo, na mchanganyiko wako wa akiba dhidi ya mfumuko wa bei.",
          youCanNow: "kulinda akiba yako dhidi ya mfumuko wa bei kwa mchanganyiko wenye leseni uliogawanywa, na kuleta zana zako zote za hatari pamoja katika mpango mmoja.",
          quickCheck: [
            { objective: "O6", q: "Bei zilipanda 10% mwaka huu. Nini kilitokea kwa 10,000 zilizowekwa kwenye kopo nyumbani?", options: ["Zinanunua kidogo kuliko mwaka mmoja uliopita", "Zinanunua zaidi kuliko awali", "Ziliongezeka hadi 11,000", "Hakuna kilichobadilika"], answer: 0, why: "Pesa zilezile zinanunua kidogo bei zinapopanda." },
            { objective: "O6", q: "Kikundi kinaahidi kuzidisha akiba yako mara mbili kwa miezi mitatu. Hii inaonyesha nini zaidi?", options: ["SACCO nzuri", "Ofa ya kawaida ya benki", "Msaada wa serikali", "Utapeli unaowezekana: faida kubwa na ya haraka ni dalili ya hatari"], answer: 3, why: "Ahadi za faida kubwa na ya haraka ni dalili ya kawaida ya utapeli." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kuhamisha hatari na kulinda pesa zako",
        questions: [
          { objective: "O4", q: "Unaacha nini unaposaini mkataba wa bei maalum?", options: ["Pesa za ziada bei za soko zikipanda", "Ardhi yako", "Mazao yako mengine yote", "Hakuna kitu kabisa"], answer: 0, why: "Bei imewekwa, kwa hiyo hupati faida soko likipanda juu zaidi." },
          { objective: "O4", q: "Ni chombo kipi kinachoipa leseni Nigeria Commodity Exchange?", options: ["Nigerian Meteorological Agency", "Securities and Exchange Commission", "NAFDAC", "Central Bank of Kenya"], answer: 1, why: "NCX inasema imepewa leseni na Securities and Exchange Commission." },
          { objective: "O5", q: "KLIP nchini Kenya inatumia nini kuamua lini kuwalipa wafugaji?", options: ["Daktari wa mifugo kutembelea kila kundi la mifugo", "Bei ya ng'ombe sokoni", "Picha za satelaiti zinazoonyesha malisho yakishindwa", "Idadi ya wanyama waliouzwa"], answer: 2, why: "KLIP ni ya kielelezo: vipimo vya satelaiti vya malisho vinaanzisha malipo." },
          { objective: "O5", q: "Swali lipi linakagua hatari ya tofauti?", options: ["Sera ina rangi gani?", "Wakala ana kasi kiasi gani?", "Nani mwingine aliinunua?", "Kielelezo kinapimwa wapi na kiko karibu kiasi gani na shamba langu?"], answer: 3, why: "Kadiri kituo cha kupimia kilivyo mbali, ndivyo kielelezo kinavyoweza kutofautiana zaidi na shamba lako." },
          { objective: "O6", q: "Ipi ni njia ya busara ya kuweka akiba salama zaidi?", options: ["Kuigawanya katika akaunti zenye leseni, kikundi na njia nyingine, pamoja na akiba ya dharura", "Kuweka pesa taslimu zote kwenye kopo moja", "Kuweka kila kitu kwenye mpango unaoahidi faida kubwa zaidi", "Kumkopesha yote mgeni mmoja"], answer: 0, why: "Kugawanya akiba katika sehemu zilizokaguliwa kunapunguza madhara ya hasara yoyote moja." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kudhibiti Hatari za Kilimo: Bei, Hali ya Hewa na Bima",
    questions: [
      { objective: "O1", q: "Ugonjwa katika familia unaozuia kazi ya shamba ni hatari ya aina gani?", options: ["Hatari ya soko", "Hatari ya sheria", "Hatari ya watu", "Hatari ya uzalishaji"], answer: 2, why: "Hatari kwa watu wanaoendesha shamba ni hatari za watu." },
      { objective: "O1", q: "Uwezekano 2 na madhara 3 vinatoa alama ya hatari ya:", options: ["6", "5", "1", "9"], answer: 0, why: "2 x 3 = 6." },
      { objective: "O1", q: "Kuchagua kutopanda nyanya katika mwezi wenye mvua nyingi zaidi ni jibu lipi?", options: ["Kuigawanya", "Kuikubali", "Kuipuuza", "Kuiepuka"], answer: 3, why: "Unaepuka hatari kwa kutoichukua." },
      { objective: "O1", q: "Unapaswa kupitia rejista yako ya hatari lini?", options: ["Kamwe", "Kabla ya kila msimu", "Baada ya maafa tu", "Kila miaka kumi"], answer: 1, why: "Hatari hubadilika, kwa hiyo kagua kabla ya maamuzi ya kila msimu." },
      { objective: "O2", q: "Bei za mazao mengi ya chakula kikuu kwa kawaida huwa chini zaidi:", options: ["Kabla tu ya kupanda", "Katika miezi ya njaa", "Mara tu baada ya mavuno", "Hazibadiliki kamwe"], answer: 2, why: "Wakati wa mavuno wakulima wengi huuza kwa wakati mmoja, jambo linaloshusha bei." },
      { objective: "O2", q: "Nchini Nigeria, ni chombo kipi kinachochapisha ripoti ya kila mwezi ya bei za vyakula kwa kila jimbo?", options: ["National Bureau of Statistics", "Nigerian Meteorological Agency", "NAFDAC", "Securities and Exchange Commission"], answer: 0, why: "NBS inachapisha Selected Food Prices Watch kila mwezi." },
      { objective: "O2", q: "Badiliko la bei ya kakao Cote d'Ivoire kutoka faranga 2,800 hadi 1,200 za CFA kwa kilo linaonyesha nini?", options: ["Bei maalum hazibadiliki kamwe", "Kakao haina hatari", "Ni wafanyabiashara tu wanaokabiliwa na hatari ya bei", "Hata bei zilizowekwa na serikali zinaweza kubadilika sana kati ya misimu"], answer: 3, why: "Bei ya shambani ilipunguzwa baada ya bei za kakao duniani kushuka." },
      { objective: "O2", q: "Mwelekeo wa bei unaelezwa vizuri zaidi kama:", options: ["Ahadi ya bei ya mwezi ujao", "Upande wa jumla ambao bei zinaelekea kwa wiki au miezi", "Ofa ya mnunuzi mmoja", "Bei ya serikali"], answer: 1, why: "Mwelekeo ni mwongozo kutoka bei zilizopita, si ahadi." },
      { objective: "O3", q: "Kuchanganya shughuli kunamaanisha:", options: ["Kulima zao lako bora tu", "Kuuza kila kitu wakati wa mavuno", "Kugawanya kilimo na mapato katika shughuli kadhaa", "Kukopa zaidi"], answer: 2, why: "Shughuli kadhaa zinamaanisha kushindwa kumoja hakukuangushi." },
      { objective: "O3", q: "Bei ya mavuno 4,000 kwa gunia, magunia 10, gharama za kuhifadhi 2,000. Bei ya kurudisha gharama za kuhifadhi ni ngapi?", options: ["4,200", "4,000", "2,000", "6,000"], answer: 0, why: "(4,000 x 10 + 2,000) / 10 = 4,200 kwa gunia." },
      { objective: "O3", q: "Kabla ya kuhifadhi nafaka ili uiuze baadaye, unapaswa kwanza:", options: ["Kuihifadhi ikiwa mbichi ili ibaki na uzito wake", "Kuichanganya na nafaka ya mwaka jana", "Kuuza kiasi cha mahitaji yako ya pesa wakati wa mavuno na kuhifadhi nafaka safi na kavu tu kwa usalama", "Kuihifadhi yote, hata kama unahitaji pesa sasa"], answer: 2, why: "Kutimiza mahitaji ya pesa na kuhifadhi nafaka safi na kavu tu kunaepuka mauzo ya kulazimishwa na kuharibika." },
      { objective: "O4", q: "Mkataba wa bei ya mbele ni:", options: ["Mkopo kutoka benki", "Makubaliano ya sasa ya kuuza kiasi fulani kwa bei fulani baadaye", "Sera ya bima", "Akaunti ya akiba"], answer: 1, why: "Unaweka kiasi na bei leo kwa mauzo ya baadaye." },
      { objective: "O4", q: "Mkataba wa bei maalum lazima uwe na sharti lipi?", options: ["Zao analolipenda mnunuzi", "Rangi ya magunia tu", "Ukubwa wa familia yako", "Nini kinatokea mavuno yakishindwa au mnunuzi asipokuja kuchukua"], answer: 3, why: "Hali hizi zinaamua nani anabeba hasara mambo yanapoharibika." },
      { objective: "O4", q: "Kwa nini kinga ya bei kwa futures si kwa wanaoanza?", options: ["Inahitaji dalali, amana za margin na ujuzi, na inaweza kupoteza pesa", "Ni haramu barani Afrika", "Inafanya kazi kwa kakao tu", "Daima inaleta faida"], answer: 0, why: "Nafasi za futures zinaweza kupoteza pesa na zinahitaji amana kwa taarifa fupi." },
      { objective: "O4", q: "Wakulima wadogo wengi hufikiaje soko la bidhaa kama GCX?", options: ["Kwa kufanya biashara ya futures kwenye simu zao", "Kupitia chama cha ushirika, mkusanyaji au ghala lililoidhinishwa", "Kwa kutembelea soko kila siku", "Hawawezi kulitumia kabisa"], answer: 1, why: "Vikundi na maghala hupeleka mazao ya wakulima kwenye soko la bidhaa." },
      { objective: "O5", q: "Bima ya kielelezo hulipa wakati:", options: ["Unaporipoti hasara", "Wakala anapotembelea shamba lako", "Kielelezo kinachopimwa kinapovuka kiwango cha kuanzisha malipo", "Ada ya bima inapolipwa"], answer: 2, why: "Malipo yanafuata kielelezo, si kutembelea shamba." },
      { objective: "O5", q: "Nani analipa ada ya bima katika KLIP ya Kenya kwa wafugaji walio hatarini waliosajiliwa?", options: ["Wafugaji wenyewe", "Mnunuzi wa mifugo", "Benki", "Serikali"], answer: 3, why: "KLIP ni programu ya serikali inayowanunulia kinga hiyo." },
      { objective: "O5", q: "Kabla ya kununua bima ya kielelezo, unapaswa kuhakikisha kampuni ya bima ina leseni. Nchini Nigeria, mdhibiti ni:", options: ["NAICOM", "NAFDAC", "NiMet", "NBS"], answer: 0, why: "NAICOM, National Insurance Commission, inadhibiti kampuni za bima nchini Nigeria." },
      { objective: "O6", q: "Unapata wapi kiwango cha sasa cha mfumuko wa bei?", options: ["Kwa mfanyabiashara sokoni", "Benki kuu yako au ofisi ya taifa ya takwimu", "Chapisho la mitandao ya kijamii", "Wakala wa bima"], answer: 1, why: "Benki kuu na ofisi za takwimu huchapisha takwimu rasmi za mfumuko wa bei." },
      { objective: "O6", q: "Ni hatari gani ya kuweka akiba kama mifugo?", options: ["Wanyama hawabadiliki thamani kamwe", "Benki hazitawakubali", "Wanaweza kufa kwa ukame au ugonjwa", "Hakuna hatari"], answer: 2, why: "Ukame na magonjwa vinaweza kufuta akiba iliyowekwa kama wanyama." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi amepiga hatua kiasi gani
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 1, 5, 7, 9, 11, 13, 15, 16, 18] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo ya mpango na uikague tena.",
    criteria: [
      { name: "Rejista ya hatari", objective: "O1", notYet: "Hatari chini ya tano, au hatari hazina alama au hazina hatua.", meets: "Angalau hatari nane zinazogusa aina zote tano, zenye alama na zilizopangwa, na hatua kwa kila moja ya tano za juu.", exceeds: "Hatua zina tarehe na gharama, na mpango unasema lini rejista itapitiwa." },
      { name: "Daftari la bei na mwelekeo", objective: "O2", notYet: "Chini ya wiki nne, chanzo kimoja tu, au vipimo na madaraja yamechanganywa.", meets: "Wiki nne kutoka angalau vyanzo viwili, bidhaa, daraja na kipimo kilekile, na mwelekeo umeelezwa.", exceeds: "Lina huduma rasmi na miezi hiyohiyo mwaka jana, na linasema mwelekeo unamaanisha nini kwa kuuza." },
      { name: "Mpango wa kuuza na kuhifadhi", objective: "O3", notYet: "Hakuna bei ya kurudisha gharama za kuhifadhi, au mahitaji ya pesa wakati wa mavuno yamepuuzwa.", meets: "Bei sahihi ya kurudisha gharama za kuhifadhi, mahitaji ya pesa wakati wa mavuno yametimizwa, na mauzo yamepangwa kwa awamu.", exceeds: "Pia inaongeza shughuli au soko la pili kugawanya hatari, na hatua za kuhifadhi kwa usalama." },
      { name: "Maswali ya mkataba na bima", objective: "O4", notYet: "Masharti ya mkataba chini ya matano, au hakuna maswali ya bima.", meets: "Angalau masharti manane ya mkataba pamoja na faida na hatari, na maana ya kinga ya bei katika sentensi moja.", exceeds: "Inalinganisha bei maalum na bei ya kurudisha gharama na daftari la bei." },
      { name: "Ukaguzi wa bima ya kielelezo", objective: "O5", notYet: "Kielelezo, kiwango cha kuanzisha malipo, ada ya bima au hatari ya tofauti haipo.", meets: "Kielelezo, kiwango cha kuanzisha malipo, malipo, ada ya bima, tarehe ya mwisho, hatari ya tofauti na ukaguzi wa leseni vyote vimejibiwa.", exceeds: "Majibu yanatoka kwa ofa halisi karibu na shamba, na mdhibiti ametajwa." },
      { name: "Akiba dhidi ya mfumuko wa bei", objective: "O6", notYet: "Njia moja tu ya kuweka akiba, au hakuna hatari zilizotajwa.", meets: "Angalau njia tatu zimelinganishwa, kila moja na hatari, kiwango cha mfumuko wa bei kimeandikwa na leseni zimekaguliwa.", exceeds: "Ina kiasi cha akiba ya dharura na tarehe ya kupitia mchanganyiko." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kupata Anafikia au Anazidi katika kila mstari wa rubriki wa mpango wa hatari wa shamba",
      "Wanafunzi ambao bado wanaweka daftari la bei la kila wiki siku 30 baadaye (utafiti wa kufuatilia)",
      "Wanafunzi wanaoripoti kuuza kwa awamu au kuhifadhi kwa usalama badala ya kuuza kila kitu wakati wa mavuno",
      "Wanafunzi wanaoripoti kusoma mkataba au ofa ya bima sharti kwa sharti, au kukataa mkopeshaji, kampuni ya bima au mpango wa biashara usio na leseni",
      "Vyama vya ushirika washirika vinaripoti wanachama wachache zaidi wanaolazimika kuuza mifugo au ardhi baada ya msimu mbaya"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Daftari na kalamu, na simu ya kawaida kwa bei kwa SMS, simu au redio",
      "Kikokotoo cha simu",
      "Mkataba halisi au wa mfano wa mnunuzi na kipeperushi cha bima ya kielelezo kutoka eneo hilo, kama vinapatikana",
      "Kama dakika 80 kwa jumla, katika vipindi vifupi, pamoja na wiki nne za kuandika bei kwa ajili ya kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Katika kikundi cha wakulima au kipindi cha ugani: fanyeni jaribio la awali pamoja, kisha sura moja kwa kila kipindi; fanyeni rejista ya hatari katika vikundi vidogo kwanza.",
      "Waombe wanafunzi waanze daftari la bei baada ya Somo la 2 ili wawe na wiki nne kwa kazi ya mwisho; kusanyeni bei kama kikundi na mzishiriki.",
      "Mwalike kampuni ya bima yenye leseni, chama cha ushirika au mwendeshaji wa ghala kueleza bidhaa halisi, lakini usiunge mkono kampuni yoyote; waache wanafunzi waulize maswali ya somo.",
      "Usipendekeze kufanya biashara kwenye soko lolote la bidhaa wala kununua bidhaa yoyote ya fedha; sema wazi kwamba kozi inaeleza jinsi mambo yanavyofanya kazi na hatari zake.",
      "Pima mpango wa hatari kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
