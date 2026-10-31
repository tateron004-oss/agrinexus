"use strict";

// Koach Learn course (Swahili translation of agriculture-africa/agri-drones-precision-climate.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const FAO_CSA = { name: "FAO: Climate-Smart Agriculture Sourcebook (kitabu cha kilimo kinachozingatia tabianchi)", url: "https://openknowledge.fao.org/3/a-i3484e.pdf" };
const FAO_ITU_DRONES = { name: "FAO na ITU: E-agriculture in Action: Drones for Agriculture (2018)", url: "https://www.itu.int/pub/D-STR-E_AGRICULT.02-2018" };
const FAO_WHO_AERIAL = { name: "FAO na WHO: Mwongozo wa kunyunyizia viuatilifu kutoka angani (2024)", url: "https://www.who.int/publications/i/item/9789240076785" };
const KCAA_UAS = { name: "Mamlaka ya Usafiri wa Anga Kenya (KCAA): Unmanned Aircraft Systems (ndege zisizo na rubani)", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const NCAA_P21 = { name: "Mamlaka ya Usafiri wa Anga Nigeria (NCAA): Nig.CARs 2023 Part 21, Remotely Piloted Aircraft Systems", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };

module.exports = {
  id: "agri-drones-precision-climate-sw",
  lang: "sw",
  translationOf: "agri-drones-precision-climate",
  category: "Agriculture (Africa)",
  name: "Droni kwa Ufuatiliaji wa Kilimo 4: Kilimo cha Usahihi, Tabianchi na Mifugo",
  skills: "Kugawa shamba katika kanda za usimamizi, Kulenga pembejeo kwa kila kanda, Kupima idadi ya mimea na kukadiria mavuno, Kufuatilia mmomonyoko, mafuriko na ukame, Kufuatilia mifugo na malisho, Kukagua miundombinu ya shamba",
  outcome: "kutumia ramani za droni kusimamia shamba mchanganyiko kwa kanda na kuandika mpango wa ufuatiliaji wa msimu mzima unaohusu mazao, hatari za tabianchi, mifugo na miundombinu ya shamba.",
  about: [
    "Hii ni Kozi ya 4 ya mfululizo wa ufuatiliaji kwa droni, kwa wakulima, wasimamizi wa mashamba, wafanyakazi wa vyama vya ushirika na maafisa ugani, na watoa huduma za droni nchini Kenya, Nigeria na kote Afrika. Unapaswa kuwa tayari unaweza kutengeneza na kusoma ramani ya droni (Kozi ya 2 na 3).",
    "Sura ya 1 ni kilimo cha usahihi: kuhudumia kila sehemu ya shamba kulingana na mahitaji yake, badala ya kulihudumia shamba lote sawa. Utagawa shamba katika kanda, utalenga mbegu, mbolea na nguvu kazi, na utatumia hesabu ya mimea kukadiria mavuno. Sura ya 2 inaangalia shamba zima: hatari za tabianchi na mazingira kama mmomonyoko, mafuriko na ukame, mifugo na malisho, na mabwawa, malambo, uzio, mifereji na vitalu nyumba vinavyoliendesha shamba.",
    "Mifano ni pamoja na mahindi na maharagwe katika Bonde la Ufa, muhogo na viazi vikuu kusini-magharibi mwa Nigeria, chai Kericho, na mashamba mchanganyiko ya mazao na mifugo. Jaribio la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Andika mpango wa ufuatiliaji kwa droni wa msimu mzima kwa shamba mchanganyiko (halisi au wa mfano, kama hekta 10 zenye mahindi, maharagwe, eneo la malisho, ng'ombe 30, lambo la maji na uzio wa mpaka): kanda katika shamba kuu la mazao na kile kila kanda inapata, safari za droni utakazofanya na lini (mazao, hatari za tabianchi, mifugo, miundombinu), utakachotafuta kila mara, na hatua ambayo kila jambo utakaloliona linaweza kusababisha.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wakulima, wasimamizi wa mashamba, wafanyakazi wa vyama vya ushirika na maafisa ugani, na watoa huduma za droni nchini Kenya, Nigeria na kote Afrika wanaosoma Kozi ya 4 ya mfululizo wa ufuatiliaji kwa droni, mara nyingi kwenye mashamba mchanganyiko ya mazao na mifugo.",
    startingPoint: "Wanafunzi wanaweza kutengeneza na kusoma ramani ya droni (Kozi ya 2 na 3). Wengi bado hulihudumia shamba lote sawa, hukagua mifugo, malisho na miundombinu kwa miguu, na hushughulikia mmomonyoko, mafuriko na ukame baada ya hasara kutokea. Wachache hupanga safari za droni kwa msimu mzima.",
    gap: "Mashamba yasiyo sawa hupoteza pembejeo pale zisipolipa, na kuchelewa kujua kuhusu mmomonyoko, vipindi vya ukavu, malisho kupita kiasi au bwawa linalovuja hupoteza mavuno na pesa. Mpango wa ufuatiliaji wa msimu mzima wenye kanda unasaidia mashamba kuweka pembejeo na nguvu kazi pale zinapolipa, na kuchukua hatua mapema dhidi ya hatari za tabianchi, mifugo na miundombinu.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi; kila neno la kilimo cha usahihi linaelezwa",
      "Vifaa: ramani za droni kutoka shamba halisi au za mfano; simu yenye GPS ya kuweka alama za kanda",
      "Sheria: safari za droni zinahitaji vibali vya nchi; kunyunyizia kwa droni kunahitaji pia vibali vya viuatilifu",
      "Ustawi wa wanyama na faragha: usiwatishe wala kuwafukuza wanyama; usiwapige picha watu au makazi bila ruhusa",
      "Viwango vya mbolea na takwimu za mavuno vinatoka kwa uzoefu wa eneo au kwa maafisa ugani, si kwa kozi hii"
    ],
    prerequisites: "\"Droni kwa Ufuatiliaji wa Kilimo 3: Afya ya Mazao, Wadudu na Uchakataji wa Data\"."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa ramani za droni za tarehe zaidi ya moja na ujuzi wa mkulima", action: "kugawa shamba katika kanda mbili hadi nne za usimamizi na kuziwekea alama ardhini", standard: "kila kanda ikiwa na jina na sababu yake ikielezwa" },
    { id: "O2", condition: "Kwa kila kanda ya usimamizi", action: "kuamua kanda inapata nini: mbegu, mbolea, nguvu kazi au marekebisho", standard: "hatua ikilingana na chanzo cha tatizo la kanda, bila kamwe kupanga kunyunyizia kwa droni bila vibali" },
    { id: "O3", condition: "Ukipewa ramani ya droni na hesabu za sampuli", action: "kukokotoa idadi ya mimea iliyoota na kiwango cha takriban cha mavuno", standard: "idadi ikilinganishwa na nafasi ya upandaji iliyolengwa na mavuno yakitolewa kama kiwango (kutoka-hadi)" },
    { id: "O4", condition: "Katika msimu mzima", action: "kupanga safari za droni za kugundua hatari ya mmomonyoko, mafuriko na ukame na kufuatilia mbinu za kilimo kinachozingatia tabianchi", standard: "kwa tarehe zisizobadilika ili ramani ziweze kulinganishwa" },
    { id: "O5", condition: "Kwa safari ya droni ya mifugo au malisho", action: "kupanga safari tulivu na salama ya kuhesabu wanyama na kukagua malisho na vituo vya maji", standard: "kwa makubaliano ya mchungaji na bila kuwatisha wanyama" },
    { id: "O6", condition: "Kwa mabwawa, mifereji, uzio, vitalu nyumba na maghala ya shamba", action: "kuvikagua kutoka angani na kuandika orodha ya matengenezo", standard: "ikiwa na kitu, mahali, tatizo, uharaka na nani atatengeneza" }
  ],
  chapters: [
    {
      name: "Sura 1: Kilimo cha usahihi",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kanda za usimamizi: shamba moja, mahitaji tofauti",
          minutes: 5,
          goal: "Gawa shamba katika kanda mbili hadi nne za usimamizi kwa kutumia ramani ya droni na ujuzi wa shamba.",
          text: [
            "Mashamba mengi hayako sawa. Kina cha udongo, mteremko, vichuguu vya zamani, samadi ya zamani, maji yaliyotuama na kivuli hufanya sehemu fulani kustawi kuliko nyingine. Kilimo cha usahihi ni kusimamia kila sehemu kulingana na mahitaji yake.",
            "Kanda ya usimamizi ni eneo la shamba linalokuwa na tabia ileile msimu baada ya msimu. Ili kuchora kanda, unganisha ramani kadhaa za droni (NDVI au rangi, za tarehe au misimu zaidi ya mmoja) na kile mkulima anachojua: wapi maji hutuama, wapi udongo ni mfupi, wapi zao hustawi kila mara.",
            "Fanya iwe rahisi. Kanda mbili hadi nne zinatosha kwa mashamba mengi madogo na ya kati: kwa mfano kanda yenye nguvu, kanda ya wastani, na kanda dhaifu yenye unyevu. Zipe majina na uziwekee alama kwa vigingi au alama za GPS ili wafanyakazi wazipate."
          ],
          steps: ["Kusanya ramani za shamba za tarehe mbili au zaidi ikiwezekana.", "Muulize mkulima wapi zao huwa na nguvu au dhaifu kila mara, na kwa nini.", "Chora kanda mbili hadi nne zinazolingana na ramani na ujuzi wa mkulima.", "Ipe kila kanda jina na uiwekee alama ardhini kwa vigingi au alama za GPS."],
          words: [["Kilimo cha usahihi", "kusimamia kila sehemu ya shamba kulingana na inachohitaji (kwa Kiingereza: precision agriculture)."], ["Kanda ya usimamizi", "sehemu ya shamba yenye tabia ileile msimu baada ya msimu, inayosimamiwa kama kitu kimoja."]],
          slides: [
            { title: "Mashamba hayako sawa", bullets: ["Udongo, mteremko, maji, kivuli, samadi ya zamani", "Sehemu fulani hustawi zaidi kila mara"] },
            { title: "Kuchora kanda", bullets: ["Ramani za tarehe zaidi ya moja", "Pamoja na ujuzi wa mkulima", "Maeneo yenye tabia ileile kila msimu"] },
            { title: "Fanya iwe rahisi", bullets: ["Kanda mbili hadi nne", "Yenye nguvu, wastani, dhaifu au yenye unyevu", "Ziwekee alama ardhini"] }
          ],
          tryIt: "Chora picha ya shamba unalolijua (au tumia ramani ya mfano). Chora kanda mbili hadi nne, zipe majina, na uandike kwa nini kila kanda ni tofauti.",
          youCanNow: "kugawa shamba katika kanda rahisi za usimamizi kwa kutumia ramani na ujuzi wa mkulima.",
          quickCheck: [
            { objective: "O1", q: "Ni kanda zipi za usimamizi zinazofaa kwa shamba dogo?", options: ["Kanda yenye nguvu, kanda ya wastani na kanda dhaifu yenye unyevu", "Kanda moja kwa kila mmea", "Kanda ishirini za ukubwa sawa", "Hakuna kanda kabisa"], answer: 0, why: "Kanda mbili hadi nne rahisi zinatosha kwa mashamba mengi madogo na ya kati." },
            { objective: "O1", q: "Mkulima anasema kona moja huwa mbaya kila mara, lakini ramani moja ya msimu huu inaionyesha kijani. Unafanya nini?", options: ["Kumpuuza mkulima", "Kuchora kanda kutoka ramani hii moja tu", "Kuangalia ramani za tarehe na misimu mingine na kutumia ujuzi wa mkulima", "Kuacha kanda"], answer: 2, why: "Kanda huchorwa kutoka ramani na tarehe kadhaa pamoja na kile mkulima anachojua." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kulenga pembejeo kwa kila kanda",
          minutes: 6,
          goal: "Amua kila kanda inapata nini: mbegu, mbolea, nguvu kazi au marekebisho.",
          text: [
            "Ukishakuwa na kanda, uliza kila moja inahitaji nini. Kanda dhaifu yenye udongo mfupi huenda isilipe mbolea ya ziada; kanda yenye maji yaliyotuama huenda ikahitaji mfereji, si mbolea; kanda ya wastani inaweza kutoa faida bora zaidi kwa pembejeo za ziada. Huu ni usimamizi wa viwango tofauti: viwango tofauti mahali tofauti.",
            "Kwenye mashamba makubwa, mashine zinaweza kuweka viwango tofauti kutoka ramani ya maelekezo. Kwenye mashamba madogo wazo hilohilo linafanya kazi kwa mkono: wafanyakazi huweka mbolea au samadi zaidi au kidogo kwa kila shimo la kupanda kulingana na kanda, hupanda tena mapengo pale tu droni inapoyaonyesha, na hupalilia au kukagua kanda zenye matatizo kwanza.",
            "Baadhi ya droni zinaweza kunyunyizia au kusambaza. Kunyunyizia viuatilifu kwa droni kunahitaji vibali vyake kutoka mamlaka ya usafiri wa anga na mdhibiti wa viuatilifu wa nchi yako, waendeshaji waliofunzwa na wenye leseni, na mbinu salama kama zile za mwongozo wa FAO na WHO kuhusu kunyunyizia kutoka angani. Usinyunyizie kamwe, wala kushauri kunyunyizia, bila hivyo."
          ],
          steps: ["Kwa kila kanda, andika kwa nini ni dhaifu au ina nguvu.", "Chagua hatua inayoshughulikia chanzo: mfereji, kupanda tena, mbolea zaidi au kidogo, kupalilia.", "Andika kiwango au kazi ya kila kanda ili wafanyakazi waifuate.", "Kunyunyizia kwa droni: kwa vibali vinavyohitajika vya anga na viuatilifu tu."],
          words: [["Viwango tofauti (variable-rate)", "kuweka kiasi tofauti cha mbegu, mbolea au maji katika sehemu tofauti za shamba."], ["Ramani ya maelekezo (prescription map)", "ramani inayomwambia mtu au mashine kiasi cha kuweka katika kila kanda."]],
          slides: [
            { title: "Shughulikia chanzo", bullets: ["Udongo mfupi: mbolea ya ziada huenda isilipe", "Maji yaliyotuama: mfereji, si mbolea", "Kanda ya wastani: mara nyingi faida bora zaidi"] },
            { title: "Viwango tofauti kwa mkono", bullets: ["Zaidi au kidogo kwa kila shimo kulingana na kanda", "Panda tena mapengo pale yanapohitajika tu", "Palilia na kagua kanda zenye matatizo kwanza"] },
            { title: "Droni za kunyunyizia", bullets: ["Zinahitaji vibali vya anga NA vya viuatilifu", "Waendeshaji waliofunzwa na wenye leseni", "Fuata mwongozo wa FAO/WHO wa kunyunyizia kutoka angani"] }
          ],
          sources: [FAO_WHO_AERIAL, KCAA_UAS, NCAA_P21],
          tryIt: "Ukitumia kanda zako za Somo la 1, andika agizo la mstari mmoja kwa kila kanda ambalo mfanyakazi wa shamba anaweza kufuata (kwa mfano: Kanda C, kona yenye unyevu: chimba mfereji kabla ya kuweka mbolea ya kukuzia; hakuna mbolea ya ziada).",
          youCanNow: "kuamua na kuandika kila kanda ya usimamizi inapaswa kupata nini, na kujua lini kunyunyizia kunahitaji kibali maalum.",
          quickCheck: [
            { objective: "O2", q: "Kwenye shamba kubwa, ramani ya maelekezo inatumika kwa nini?", options: ["Kuhesabu ng'ombe", "Kukagua uzio", "Kuandika bajeti ya shamba", "Kuziambia mashine kiwango cha kuweka kila mahali"], answer: 3, why: "Kwenye mashamba makubwa, mashine zinaweza kuweka viwango tofauti kutoka ramani ya maelekezo." },
            { objective: "O2", q: "Droni inaonyesha mapengo katika kanda ya wastani tu. Unawaambia wafanyakazi nini?", options: ["Wapande tena shamba lote", "Wapande tena mapengo pale tu droni inapoyaonyesha", "Waweke mbolea kwenye mapengo", "Waache mapengo"], answer: 1, why: "Kwenye mashamba madogo, wafanyakazi hupanda tena pale tu droni inapoonyesha mapengo." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kuhesabu mimea na kukadiria mavuno mapema",
          minutes: 5,
          goal: "Kadiria idadi ya mimea iliyoota na kiwango cha takriban cha mavuno kutoka ramani ya droni na hesabu za sampuli.",
          text: [
            "Idadi ya mimea iliyoota ni mimea mingapi iliota ukilinganisha na mingapi ilipandwa. Ramani ya droni yenye picha za kina huonyesha mapengo wazi. Baadhi ya programu zinaweza kuhesabu mimea zenyewe; unaweza pia kuhesabu kwa mkono katika miraba ya sampuli kwenye ramani.",
            "Kukadiria idadi: weka alama kwenye maeneo machache ya sampuli yenye ukubwa unaojulikana katika kila kanda, hesabu mimea, na ulinganishe na nafasi ya upandaji iliyolengwa. Ikiwa shamba la mahindi lilipandwa kwa sm 75 kwa sm 25, lengo ni karibu mimea 53,000 kwa hekta; ukihesabu 40,000, idadi iliyoota ni karibu asilimia 75.",
            "Makadirio ya takriban ya mavuno ni kuzidisha mimea kwa hekta kwa mavuno yanayotarajiwa kwa kila mmea kutoka uzoefu wa eneo au takwimu za maafisa ugani, kanda kwa kanda. Yachukulie kama kiwango (kutoka-hadi), si ahadi: hali ya hewa, wadudu na upotevu wa mavuno hubadilisha namba ya mwisho. Bado yanasaidia kupanga mapema hifadhi, mauzo na usafiri."
          ],
          steps: ["Weka alama kwenye miraba ya sampuli yenye ukubwa unaojulikana katika kila kanda kwenye ramani.", "Hesabu mimea katika kila mraba (kwa macho au kwa programu).", "Kokotoa mimea kwa hekta na ulinganishe na lengo.", "Zidisha kwa mavuno yanayotarajiwa kwa kila mmea kutoka takwimu za eneo ili upate kiwango.", "Andika kiwango hicho na kile kinachoweza kukibadilisha."],
          words: [["Idadi ya mimea iliyoota (plant stand)", "idadi ya mimea iliyoota ukilinganisha na idadi iliyopandwa."], ["Makadirio ya mavuno", "kisio la mapema la kiasi ambacho shamba litazalisha."]],
          slides: [
            { title: "Idadi ya mimea iliyoota", bullets: ["Mimea iliyoota dhidi ya mimea iliyopandwa", "Mapengo yanaonekana wazi kwenye ramani za kina"] },
            { title: "Hesabu kwa sampuli", bullets: ["Miraba ya sampuli katika kila kanda", "Hesabu mimea, kisha kokotoa kwa hekta", "Mahindi sm 75 x sm 25: karibu mimea 53,000 kwa ha"] },
            { title: "Makadirio ya mapema ya mavuno", bullets: ["Mimea kwa ha x mavuno yanayotarajiwa kwa kila mmea", "Toa kiwango, si ahadi", "Yanasaidia kupanga hifadhi, mauzo na usafiri"] }
          ],
          tryIt: "Kanda ya mahindi ya hekta 1 ilipandwa kwa sm 75 kwa sm 25. Hesabu zako za sampuli zinaonyesha mimea 44,000 kwa hekta. Kokotoa asilimia ya mimea iliyoota, kisha andika kinachoweza kueleza mapengo na kile ungekagua.",
          youCanNow: "kukadiria idadi ya mimea iliyoota na kiwango cha takriban cha mavuno kwa kila kanda kutoka ramani ya droni na hesabu za sampuli.",
          quickCheck: [
            { objective: "O3", q: "Kwa nini unahesabu mimea katika maeneo ya sampuli yenye ukubwa unaojulikana?", options: ["Kutafuta mpaka wa shamba", "Kukokotoa mimea kwa hekta na kulinganisha na lengo", "Kupima mvua", "Kukagua betri ya droni"], answer: 1, why: "Hesabu katika maeneo yenye ukubwa unaojulikana zinatoa mimea kwa hekta, inayolinganishwa na nafasi ya upandaji iliyolengwa." },
            { objective: "O3", q: "Mnunuzi anauliza mavuno yako kamili mwezi mmoja kabla ya kuvuna. Unampa nini?", options: ["Namba moja kamili kama ahadi", "Hakuna kitu", "Namba ya mwaka jana", "Kiwango cha takriban, ukieleza kuwa hali ya hewa, wadudu na upotevu vinaweza kukibadilisha"], answer: 3, why: "Makadirio ya mapema ya mavuno ni kiwango, si ahadi." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kilimo cha usahihi",
        questions: [
          { objective: "O1", q: "Kanda ya usimamizi ni nini?", options: ["Mraba wowote wa kubahatisha", "Sehemu ya shamba yenye tabia ileile msimu baada ya msimu", "Ofisi ya shamba", "Eneo lisiloruhusiwa kurushwa droni"], answer: 1, why: "Kanda huweka pamoja maeneo yanayoitikia sawa, ili yasimamiwe sawa." },
          { objective: "O1", q: "Njia bora ya kuchora kanda ni ipi?", options: ["Kutumia ramani moja ya siku moja tu", "Kunakili kanda za jirani", "Kuunganisha ramani za tarehe zaidi ya moja na ujuzi wa mkulima", "Kuchora miraba sawa"], answer: 2, why: "Ramani kadhaa pamoja na ujuzi wa eneo huonyesha mifumo isiyobadilika." },
          { objective: "O2", q: "Kanda ni dhaifu kwa sababu maji hutuama pale baada ya mvua. Hatua bora ni:", options: ["Kuboresha njia za kutoa maji", "Kuweka mbolea mara mbili", "Kunyunyizia kiuatilifu", "Kupanda mbegu zaidi"], answer: 0, why: "Shughulikia chanzo; mbolea haiondoi maji yaliyotuama." },
          { objective: "O2", q: "Huduma ya droni inajitolea kunyunyizia kiuatilifu kwenye mahindi ya mteja. Nini lazima kiwepo?", options: ["Ruhusa ya mkulima tu", "Hakuna cha ziada", "Kamera nzuri", "Vibali vya anga na vya viuatilifu na waendeshaji wenye leseni"], answer: 3, why: "Kunyunyizia kwa droni ni kazi inayodhibitiwa na yenye hatari kubwa zaidi." },
          { objective: "O3", q: "Mahindi yaliyopandwa kwa sm 75 x sm 25 yana lengo la karibu:", options: ["Mimea 5,300 kwa hekta", "Mimea 53,000 kwa hekta", "Mimea 530,000 kwa hekta", "Mimea 530 kwa hekta"], answer: 1, why: "m2 10,000 ukigawa kwa m2 0.1875 kwa kila mmea ni karibu 53,000." }
        ]
      }
    },
    {
      name: "Sura 2: Tabianchi, mifugo na miundombinu",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kufuatilia hatari za tabianchi na mazingira",
          minutes: 6,
          goal: "Tumia safari za droni kugundua hatari ya mmomonyoko, mafuriko na ukame na kufuatilia mbinu za kilimo kinachozingatia tabianchi.",
          text: [
            "Mabadiliko ya tabianchi huleta mvua kubwa zaidi, vipindi virefu zaidi vya ukavu na joto zaidi katika maeneo mengi ya kilimo. FAO inaeleza kilimo kinachozingatia tabianchi kuwa kilimo kinachoongeza uzalishaji na mapato, kinachosaidia mashamba kujirekebisha na kujenga ustahimilivu, na kinachopunguza au kuondoa uzalishaji wa gesi joto pale inapowezekana.",
            "Droni zinasaidia upande wa kujirekebisha. Baada ya mvua kubwa, safari ya droni huonyesha makorongo, matuta yaliyosombwa, mifereji iliyojaa matope na vipande vilivyofurika; ramani za mwinuko huonyesha maji yatapita wapi wakati ujao. Katika vipindi vya ukavu, ramani za joto (thermal) na NDVI huonyesha maeneo yanayokauka kwanza. Kwa misimu kadhaa, ramani huonyesha kama matuta, mazao ya kufunika udongo, matandazo, upandaji miti na uvunaji wa maji vinafanya kazi.",
            "Rusha droni juu ya eneo lilelile kwa tarehe zisizobadilika (kwa mfano kabla ya mvua za masika, baada ya dhoruba kubwa ya kwanza, katikati ya msimu, na baada ya mavuno) na ulinganishe. Shiriki ramani na kikundi cha wakulima au maafisa wa kaunti au jimbo: zinaonyesha jamii nzima wapi pa kuchukua hatua kwanza."
          ],
          steps: ["Chagua tarehe zisizobadilika za safari zinazohusiana na misimu.", "Baada ya mvua kubwa: weka kwenye ramani makorongo, maeneo yaliyosombwa, mifereji iliyojaa matope, vipande vilivyofurika.", "Katika vipindi vya ukavu: onyesha kwenye ramani maeneo yanayokauka kwanza kwa NDVI au thermal.", "Kila msimu: kagua matuta, mazao ya kufunika udongo, matandazo, miti, uvunaji wa maji.", "Linganisha ramani kwa muda na uzishiriki."],
          words: [["Kilimo kinachozingatia tabianchi (CSA)", "kilimo kinachoongeza uzalishaji, kinachosaidia mashamba kujirekebisha na mabadiliko ya tabianchi, na kinachopunguza uzalishaji wa gesi joto pale inapowezekana."], ["Mmomonyoko", "udongo unaosombwa au kupeperushwa na maji au upepo."], ["Korongo", "mtaro mrefu na wenye kina uliochimbwa ardhini na maji yanayotiririka."]],
          slides: [
            { title: "Kilimo kinachozingatia tabianchi", bullets: ["Kuongeza uzalishaji na mapato", "Kujirekebisha na kujenga ustahimilivu", "Kupunguza uzalishaji wa gesi joto pale inapowezekana"] },
            { title: "Droni zinaonyesha nini", bullets: ["Baada ya mvua: makorongo, maeneo yaliyosombwa, vipande vilivyofurika", "Vipindi vya ukavu: maeneo yanayokauka kwanza", "Kama matuta, matandazo na miti vinafanya kazi"] },
            { title: "Rusha kwa tarehe zisizobadilika", bullets: ["Kabla ya mvua, baada ya dhoruba, katikati ya msimu, baada ya mavuno", "Linganisha kwa muda", "Shiriki na vikundi vya wakulima na maafisa"] }
          ],
          sources: [FAO_CSA, FAO_ITU_DRONES],
          tryIt: "Andika kalenda ya mwaka ya safari nne za tabianchi kwa shamba unalolijua, zikihusiana na misimu yake ya mvua na ukavu. Kwa kila safari, orodhesha vitu viwili utakavyotafuta.",
          youCanNow: "kupanga safari za droni zinazofuatilia hatari ya mmomonyoko, mafuriko na ukame na kukagua kama mbinu za kilimo kinachozingatia tabianchi zinafanya kazi.",
          quickCheck: [
            { objective: "O4", q: "Baada ya mvua kubwa, ramani ya mwinuko husaidia kuonyesha nini?", options: ["Ng'ombe gani ni wagonjwa", "Bei ya mahindi", "Maji yatapita wapi wakati ujao", "Mbegu gani zilithibitishwa"], answer: 2, why: "Ramani za mwinuko huonyesha urefu wa ardhi, kwa hiyo unaona maji yatapita wapi wakati ujao." },
            { objective: "O4", q: "Baada ya dhoruba kubwa, ramani zako zinaonyesha makorongo katika mashamba kadhaa ya kikundi. Unafanya nini?", options: ["Kushiriki ramani na kikundi cha wakulima na maafisa wa kaunti au jimbo", "Kuzibakiza ramani kwako mwenyewe", "Kuzifuta kwa sababu dhoruba imeisha", "Kurusha droni juu ya shamba lako tu wakati ujao"], answer: 0, why: "Ramani zinazoshirikiwa zinaonyesha jamii nzima wapi pa kuchukua hatua kwanza." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kufuatilia mifugo na malisho",
          minutes: 5,
          goal: "Panga safari tulivu na salama ya droni ya kuhesabu wanyama na kukagua malisho na vituo vya maji.",
          text: [
            "Kwenye ranchi na maeneo makubwa ya wafugaji, droni inaweza kuhesabu ng'ombe, mbuzi au ngamia, kutafuta wanyama waliopotea au wagonjwa, na kukagua kama vituo vya maji na mabirika vinafanya kazi, ikiokoa saa za kutembea au kuendesha gari. Kamera za joto (thermal) huwapata wanyama alfajiri au katika vichaka vizito.",
            "Wanyama wanaweza kuogopa droni, hasa ikiwa chini. Rusha juu kiasi cha kutowatisha, karibia polepole kutoka pembeni, usiwafukuze wala kuwachunga wanyama kwa droni kamwe isipokuwa umefunzwa na inaruhusiwa, na usimame wakianza kukimbia. Muulize mchungaji kabla ya kurusha.",
            "Ramani za malisho (NDVI au rangi) huonyesha wapi nyasi ina nguvu, imeliwa kupita kiasi au ardhi iko wazi. Kwa msimu mzima zinasaidia kupanga malisho ya mzunguko na kugundua ardhi inayohitaji kupumzika. Usiwapige picha watu au makazi kamwe bila ruhusa."
          ],
          steps: ["Muulize mchungaji au mmiliki; kubalianeni muda na eneo.", "Rusha juu na ukaribie polepole kutoka pembeni.", "Hesabu wanyama kutoka kwenye picha, si kwa kuzunguka chini.", "Kagua vituo vya maji, mabirika na uzio njiani.", "Weka malisho kwenye ramani: yenye nguvu, yaliyoliwa kupita kiasi, ardhi wazi.", "Simama wanyama wakianza kukimbia."],
          words: [["Malisho ya mzunguko", "kuhamisha wanyama kati ya maeneo ya malisho ili nyasi ipumzike na iote tena."], ["Malisho kupita kiasi", "wanyama wanapokula nyasi haraka kuliko inavyoweza kuota tena, na kuacha ardhi wazi."]],
          slides: [
            { title: "Droni zinafanya nini kwenye ranchi", bullets: ["Kuhesabu wanyama, kutafuta waliopotea au wagonjwa", "Kukagua vituo vya maji na mabirika", "Thermal alfajiri au katika vichaka vizito"] },
            { title: "Ustawi wa wanyama kwanza", bullets: ["Muulize mchungaji", "Rusha juu, karibia polepole kutoka pembeni", "Usiwafukuze kamwe; simama wanyama wakikimbia"] },
            { title: "Ramani za malisho", bullets: ["Nyasi yenye nguvu, iliyoliwa kupita kiasi au ardhi wazi", "Panga malisho ya mzunguko", "Gundua ardhi inayohitaji kupumzika"] }
          ],
          tryIt: "Andika mpango mfupi wa safari ya kuhesabu ng'ombe 60 katika eneo la malisho la hekta 40: saa ya siku, urefu wa kuruka, jinsi ya kukaribia, nini kingine utakagua, na lini ungesimama.",
          youCanNow: "kupanga safari tulivu na salama ya mifugo na malisho na kuitumia kusaidia maamuzi ya malisho.",
          quickCheck: [
            { objective: "O5", q: "Droni inaweza kufanya nini kwenye ranchi?", options: ["Kuhesabu wanyama na kukagua kama vituo vya maji na mabirika vinafanya kazi", "Kuwaingiza ng'ombe zizini", "Kutibu wanyama wagonjwa", "Kukama ng'ombe"], answer: 0, why: "Droni zinaweza kuhesabu wanyama, kutafuta waliopotea au wagonjwa na kukagua vituo vya maji, zikiokoa kutembea au kuendesha gari." },
            { objective: "O5", q: "Mchungaji anahamisha mbuzi karibu na eneo ulilopanga kurusha droni. Unafanya nini?", options: ["Kurusha chini ili kupata picha za karibu", "Kuwafukuza mbuzi wakusanyike pamoja", "Kumuuliza mchungaji kwanza, kurusha juu na kukaribia polepole kutoka pembeni", "Kurusha moja kwa moja juu yao kwa haraka"], answer: 2, why: "Muulize mchungaji, na urushe juu na polepole kutoka pembeni ili wanyama wasiogope." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kukagua miundombinu ya shamba",
          minutes: 5,
          goal: "Kagua mabwawa, mifereji, uzio, vitalu nyumba na maghala kutoka angani na uorodheshe matengenezo.",
          text: [
            "Miundombinu ya shamba ni ghali na ni rahisi kusahaulika hadi inapoharibika. Safari fupi ya droni inaweza kukagua ukuta wa lambo au bwawa dogo kuona nyufa na uvujaji, mifereji ya umwagiliaji na mabomba kuona mivujo au vizuizi, uzio wa mpaka kuona sehemu zilizovunjika, paa na neti za vitalu nyumba kuona mipasuko, na paa za maghala kuona uharibifu.",
            "Rusha polepole kufuata muundo huo huku kamera ikiwa imeinamishwa, si kuelekea chini moja kwa moja tu. Kaa umbali salama kutoka nyaya za umeme na majengo, na ubaki ndani ya vibali vyako. Piga picha mahali palepale kila mara ili uweze kulinganisha.",
            "Geuza picha kuwa orodha ya matengenezo: kitu, mahali, tatizo, uharaka, na nani atatengeneza. Rusha tena baada ya matengenezo, na kabla ya mvua wakati kuharibika kungeleta hasara kubwa zaidi."
          ],
          steps: ["Orodhesha miundo ya kukagua na mahali ilipo.", "Rusha polepole kufuata kila mmoja huku kamera ikiwa imeinamishwa.", "Piga picha mahali palepale kila mara.", "Andika orodha ya matengenezo: kitu, mahali, tatizo, uharaka, nani atatengeneza.", "Rusha tena baada ya matengenezo na kabla ya mvua."],
          words: [["Lambo la maji", "bwawa lililochimbwa linalokusanya maji ya mvua kwa ajili ya wanyama au umwagiliaji (kwa Kiingereza: water pan)."], ["Uvujaji", "maji yanayopenya polepole kupitia ukuta wa bwawa au ukingo wa mfereji (kwa Kiingereza: seepage)."]],
          slides: [
            { title: "Nini cha kukagua", bullets: ["Malambo na kuta za mabwawa madogo", "Mifereji na mabomba", "Uzio, paa za vitalu nyumba, paa za maghala"] },
            { title: "Jinsi ya kurusha", bullets: ["Polepole kufuata muundo", "Kamera imeinamishwa, si kuelekea chini tu", "Picha mahali palepale kila mara"] },
            { title: "Geuza picha kuwa matengenezo", bullets: ["Kitu, mahali, tatizo, uharaka, nani", "Rusha tena baada ya matengenezo na kabla ya mvua"] }
          ],
          tryIt: "Kazi ya mwisho: andika mpango wako wa ufuatiliaji wa msimu mzima kwa shamba mchanganyiko: kanda na kile kila moja inapata, safari za mazao, safari za tabianchi, safari ya mifugo na malisho, safari ya miundombinu, utakachotafuta kila mara na hatua ambayo kila jambo utakaloliona linaweza kusababisha.",
          youCanNow: "kukagua miundombinu ya shamba kwa droni na kupanga ufuatiliaji wa shamba zima kwa msimu mzima.",
          quickCheck: [
            { objective: "O6", q: "Safari ya droni inaweza kugundua tatizo gani kwenye kitalu nyumba?", options: ["Bei ya kuuza zao", "pH ya udongo", "Jina la mdudu", "Mipasuko kwenye plastiki ya paa au neti"], answer: 3, why: "Safari za droni zinaweza kuonyesha mipasuko kwenye paa na neti za vitalu nyumba kabla haijawa mibaya zaidi." },
            { objective: "O6", q: "Mvua zinaanza baada ya wiki tatu na ukuta wa lambo ulitengenezwa wiki iliyopita. Unafanya nini?", options: ["Kusubiri hadi baada ya mvua", "Kurusha tena kukagua matengenezo kabla ya mvua", "Kutoukagua tena kamwe", "Kurusha moja kwa moja kuelekea chini tu, juu sana"], answer: 1, why: "Rusha tena baada ya matengenezo na kabla ya mvua, wakati kuharibika kungeleta hasara kubwa zaidi." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Tabianchi, mifugo na miundombinu",
        questions: [
          { objective: "O4", q: "Kilimo kinachozingatia tabianchi cha FAO kina malengo matatu. Lipi ni mojawapo?", options: ["Kusaidia mashamba kujirekebisha na kujenga ustahimilivu", "Kutumia mbolea nyingi iwezekanavyo", "Kukata miti yote", "Kulima zao moja tu"], answer: 0, why: "CSA inalenga uzalishaji, kujirekebisha na ustahimilivu, na kupunguza uzalishaji wa gesi joto." },
          { objective: "O4", q: "Ni lini wakati mzuri wa safari ya tabianchi ya kutafuta makorongo na maeneo yaliyosombwa?", options: ["Usiku wa manane tu", "Kamwe", "Baada ya dhoruba kubwa ya kwanza ya msimu", "Wakati wa maonyesho ya droni"], answer: 2, why: "Uharibifu mpya huonekana wazi mara baada ya mvua kubwa." },
          { objective: "O5", q: "Ng'ombe wanaanza kukimbia droni ikiwa juu yao. Unapaswa:", options: ["Kurusha chini zaidi ili kuwatuliza", "Kuwafukuza warudi", "Kuendelea kuzunguka", "Kusimama na kuiondoa droni"], answer: 3, why: "Ustawi na usalama wa wanyama huja kwanza." },
          { objective: "O5", q: "Ramani ya malisho inaonyesha eneo la malisho lenye ardhi wazi kwa kiasi kikubwa. Hii inaashiria:", options: ["Malisho kupita kiasi; eneo hilo huenda likahitaji kupumzika", "Droni imeharibika", "Mvua nyingi mno tu", "Malisho kamili"], answer: 0, why: "Ardhi wazi katika malisho mara nyingi inamaanisha wanyama walikula haraka kuliko nyasi ilivyoota tena." },
          { objective: "O6", q: "Unapokagua ukuta wa lambo, unapaswa:", options: ["Kurusha kuelekea chini moja kwa moja tu, kwa kasi sana", "Kurusha polepole kuufuata huku kamera ikiwa imeinamishwa", "Kurusha juu ya watu walio karibu", "Kuuruka"], answer: 1, why: "Kamera iliyoinamishwa huonyesha nyufa na uvujaji kwenye ukuta." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Droni kwa Ufuatiliaji wa Kilimo 4: Kilimo cha Usahihi, Tabianchi na Mifugo",
    questions: [
      { objective: "O1", q: "Kilimo cha usahihi kinamaanisha:", options: ["Kuhudumia kila sehemu ya shamba sawa", "Kusimamia kila sehemu ya shamba kulingana na mahitaji yake", "Kutumia droni tu", "Kulima usiku"], answer: 1, why: "Kinalinganisha pembejeo na kazi na kile kila eneo linachohitaji." },
      { objective: "O1", q: "Kwa nini mashamba mengi hayako sawa?", options: ["Droni zinayafanya yasiwe sawa", "Yako sawa", "Udongo, mteremko, maji, kivuli na matumizi ya zamani hutofautiana", "Mbegu ni mbaya kila mara"], answer: 2, why: "Asili na historia ya kilimo hufanya maeneo fulani kustawi zaidi." },
      { objective: "O1", q: "Kwa kawaida kanda ngapi zinatosha kwenye shamba dogo?", options: ["Mbili hadi nne", "Hamsini", "Mia moja", "Hakuna"], answer: 0, why: "Kanda chache rahisi ni rahisi kusimamia na kuwekea alama." },
      { objective: "O1", q: "Kwa nini kuweka alama za kanda ardhini?", options: ["Kupamba shamba", "Sheria inataka vigingi", "Kufukuza ndege", "Ili wafanyakazi waipate na kuihudumia kila kanda"], answer: 3, why: "Wafanyakazi wanahitaji kuona kila kanda inaanzia na kuishia wapi." },
      { objective: "O2", q: "Viwango tofauti kunamaanisha:", options: ["Kiasi tofauti mahali tofauti", "Kiasi kilekile kila mahali", "Kubadilisha kasi ya droni", "Kubadilisha bei za mazao"], answer: 0, why: "Viwango hubadilika kwa kanda kulingana na mahitaji." },
      { objective: "O2", q: "Kwenye shamba dogo, viwango tofauti vinaweza kufanywa na:", options: ["Mashine kubwa tu", "Wafanyakazi wakitumia mbolea zaidi au kidogo kwa kila shimo kulingana na kanda", "Satelaiti", "Haviwezekani kabisa"], answer: 1, why: "Wazo hili linafanya kazi kwa mkono kwa maagizo wazi ya kila kanda." },
      { objective: "O2", q: "Kanda dhaifu yenye udongo mfupi na wenye mawe huenda:", options: ["Ikahitaji mbolea mara mbili kila mara", "Ikawa mahali bora pa mbegu zaidi", "Isilipe mbolea ya ziada", "Ikahitaji kunyunyiziwa"], answer: 2, why: "Udongo unazuia ukuaji; pembejeo ya ziada inaweza kupotea bure." },
      { objective: "O2", q: "Nani lazima aidhinishe kunyunyizia viuatilifu kwa droni?", options: ["Muuzaji wa droni tu", "Mkulima tu", "Jirani tu", "Mamlaka ya usafiri wa anga na mdhibiti wa viuatilifu"], answer: 3, why: "Sheria za anga na za viuatilifu zote zinahusu droni za kunyunyizia." },
      { objective: "O3", q: "Idadi ya mimea iliyoota ni:", options: ["Mimea iliyoota dhidi ya mimea iliyopandwa", "Urefu wa droni angani", "Kibao cha jina la shamba", "Bei ya mbegu"], answer: 0, why: "Inaonyesha jinsi zao lilivyoota vizuri." },
      { objective: "O3", q: "Unahesabu mimea 40,000 ya mahindi kwa hekta dhidi ya lengo la karibu 53,000. Idadi iliyoota ni karibu:", options: ["Asilimia 25", "Asilimia 50", "Asilimia 75", "Asilimia 100"], answer: 2, why: "40,000 ukigawa kwa 53,000 ni karibu 0.75." },
      { objective: "O3", q: "Makadirio ya mapema ya mavuno yanapaswa kutolewa kama:", options: ["Ahadi kamili", "Siri", "Kiwango kinachoweza kubadilika", "Kiasi cha mkopo"], answer: 2, why: "Hali ya hewa, wadudu na upotevu hubadilisha mavuno ya mwisho." },
      { objective: "O4", q: "Ni mbinu ipi ya kilimo kinachozingatia tabianchi ambayo droni zinaweza kusaidia kufuatilia?", options: ["Kuchoma mabaki ya mazao", "Kulima juu na chini ya mteremko", "Kukata miti yote", "Matuta, matandazo na upandaji miti"], answer: 3, why: "Ramani zinaonyesha kama mbinu hizi zinafanya kazi kwa muda." },
      { objective: "O4", q: "Katika kipindi cha ukavu, ramani zipi zinaonyesha maeneo yanayokauka kwanza?", options: ["Ramani za NDVI au thermal", "Ramani ya barabara", "Orodha ya bei", "Bango la mvua"], answer: 0, why: "NDVI na thermal huonyesha nguvu ya mimea na msongo wa joto." },
      { objective: "O4", q: "Kwa nini kurusha droni juu ya eneo lilelile kwa tarehe zisizobadilika?", options: ["Kutumia betri zaidi", "Kulinganisha mabadiliko kwa muda", "Kwa sababu droni zinahitaji utaratibu", "Kuwapiga picha majirani"], answer: 1, why: "Ramani zinazorudiwa huonyesha mwelekeo na matokeo ya hatua ulizochukua." },
      { objective: "O5", q: "Kabla ya safari ya mifugo unapaswa:", options: ["Kurusha chini juu ya kundi", "Kuwafukuza wanyama mahali pamoja", "Kumuuliza mchungaji na kukubaliana muda na eneo", "Kurusha kwa kasi ya juu kabisa"], answer: 2, why: "Ruhusa na kukaribia kwa utulivu hulinda wanyama na watu." },
      { objective: "O5", q: "Kamera za joto (thermal) kwenye ranchi zinasaidia:", options: ["Kuotesha nyasi", "Kutengeneza uzio", "Kusoma vibandiko vya masikio", "Kupata wanyama alfajiri au katika vichaka vizito"], answer: 3, why: "Wanyama huonekana kama madoa ya joto." },
      { objective: "O5", q: "Malisho ya mzunguko yanamaanisha:", options: ["Kuhamisha wanyama kati ya maeneo ya malisho ili nyasi iote tena", "Kuwaweka wanyama mahali pamoja mwaka mzima", "Kulisha usiku tu", "Kulisha nyasi kavu tu"], answer: 0, why: "Kupumzisha maeneo ya malisho kunaruhusu nyasi kurudi." },
      { objective: "O6", q: "Uvujaji kwenye ukuta wa bwawa unamaanisha:", options: ["Bwawa limejaa samaki", "Maji yanapenya polepole kupitia ukuta", "Ukuta ni mpya", "Mvua inanyesha"], answer: 1, why: "Uvujaji unaweza kudhoofisha ukuta na unapaswa kutengenezwa." },
      { objective: "O6", q: "Orodha nzuri ya matengenezo ya miundombinu ina:", options: ["Picha tu", "Aina ya droni", "Kitu, mahali, tatizo, uharaka na nani atatengeneza", "Bei za soko"], answer: 2, why: "Maelezo wazi husaidia matengenezo kufanyika." },
      { objective: "O6", q: "Ukaguzi wa miundombinu una manufaa zaidi lini?", options: ["Kamwe", "Baada ya kuharibika tu", "Wakati wa dhoruba", "Kabla ya mvua na baada ya matengenezo"], answer: 3, why: "Kurekebisha matatizo kabla ya mvua huzuia kuharibika." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi amepiga hatua kiasi gani
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [0, 2, 4, 7, 8, 9, 11, 14, 16, 18]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo ya mpango na uikague tena.",
    criteria: [
      { name: "Kanda za usimamizi", objective: "O1", notYet: "Hakuna kanda, au kanda zimechorwa kutoka ramani moja bila sababu.", meets: "Kanda mbili hadi nne zenye majina katika shamba kuu, kutoka ramani na ujuzi wa mkulima, pamoja na jinsi zinavyowekewa alama.", exceeds: "Anatumia ramani za tarehe au misimu zaidi ya mmoja." },
      { name: "Kile kila kanda inapata", objective: "O2", notYet: "Kila kanda inahudumiwa sawa, au kunyunyizia kwa droni kumepangwa bila vibali.", meets: "Kila kanda ina hatua inayolingana na chanzo chake: mbegu, mbolea, nguvu kazi au marekebisho.", exceeds: "Ina ukaguzi wa idadi ya mimea iliyoota na kiwango cha takriban cha mavuno kwa kila kanda." },
      { name: "Safari za tabianchi", objective: "O4", notYet: "Hakuna safari za tabianchi au mazingira.", meets: "Safari kwa tarehe zisizobadilika za kukagua mmomonyoko, mafuriko na ukame, na hatua ambayo kila jambo lingesababisha.", exceeds: "Inafuatilia mbinu ya kilimo kinachozingatia tabianchi kama matuta au matandazo katika msimu mzima." },
      { name: "Mifugo na malisho", objective: "O5", notYet: "Hakuna safari za mifugo, au safari ambazo zingewatisha wanyama.", meets: "Safari za kuhesabu wanyama na kukagua malisho na vituo vya maji, kwa makubaliano ya mchungaji na kwa urefu salama.", exceeds: "Inaunganisha ramani za malisho na mpango wa malisho ya mzunguko." },
      { name: "Miundombinu", objective: "O6", notYet: "Mabwawa, uzio au miundo mingine haijajumuishwa.", meets: "Safari za kukagua lambo la maji, uzio na miundo mingine, pamoja na muundo wa orodha ya matengenezo.", exceeds: "Zimepangwa kabla ya mvua na baada ya matengenezo, zikiwa na picha za mahali palepale." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kupata Anafikia au Anazidi katika kila mstari wa rubriki wa mpango wa ufuatiliaji",
      "Wanafunzi wanaoripoti kusimamia shamba kwa kanda au kufuata mpango wa ufuatiliaji wa msimu ndani ya msimu mmoja (utafiti wa kufuatilia)",
      "Mashamba au vikundi vinavyoripoti kuchukua hatua mapema dhidi ya mmomonyoko, ukame, malisho kupita kiasi au hitilafu ya miundombinu",
      "Wanafunzi wanaoendelea na Kozi ya 5 ya mfululizo wa droni"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Ramani za droni za shamba halisi, au shamba mchanganyiko la mfano la kozi hii",
      "Simu yenye GPS, na vigingi au bendera za kuweka alama za kanda",
      "Daftari au spredishiti (spreadsheet) kwa jedwali la kanda na mpango wa msimu",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi, pamoja na muda wa kuandika mpango wa ufuatiliaji"
    ],
    facilitatorNotes: [
      "Fanyeni jaribio la awali pamoja, kisha chorani kanda kwenye ramani moja ya mfano kama kikundi kabla wanafunzi hawajachora zao wenyewe.",
      "Leta takwimu za mavuno yanayotarajiwa na ushauri wa mbolea wa eneo kutoka kwa maafisa ugani; usitoe viwango wewe mwenyewe.",
      "Usipange wala kuonyesha kunyunyizia kwa droni bila vibali vya anga na vya viuatilifu.",
      "Ukirusha droni karibu na mifugo, muulize mchungaji kwanza, rusha juu na usimame wanyama wakianza kukimbia.",
      "Pima mpango wa ufuatiliaji kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
