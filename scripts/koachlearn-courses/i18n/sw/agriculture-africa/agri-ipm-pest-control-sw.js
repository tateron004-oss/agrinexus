"use strict";

// Koach Learn course (Swahili translation of agriculture-africa/agri-ipm-pest-control.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const FAO_IPM = { name: "FAO: Udhibiti Jumuishi wa Wadudu Waharibifu (IPM)", url: "https://www.fao.org/pest-and-pesticide-management/ipm/integrated-pest-management/en/" };
const CIMMYT_FAW = { name: "CIMMYT, USAID na washirika: Viwavijeshi Vamizi barani Afrika: Mwongozo wa Udhibiti Jumuishi wa Wadudu (2018)", url: "https://repository.cimmyt.org/handle/10883/19204" };
const FAO_FAMEWS = { name: "FAO: app ya simu ya kusaidia mapambano dhidi ya viwavijeshi vamizi barani Afrika (FAMEWS)", url: "https://www.fao.org/newsroom/detail/FAO-launches-mobile-application-to-support-fight-against-Fall-Armyworm-in-Africa/en" };
const ICIPE_TUTA = { name: "icipe: Mdudu wa Mwezi: kipekecha majani ya nyanya, Tuta absoluta", url: "https://www.icipe.org/news/insect-month-february-tomato-leafminer-tuta-absoluta" };
const ICIPE_PP_FAW = { name: "icipe: Teknolojia ya push-pull inazuia viwavijeshi vamizi", url: "https://www.icipe.org/news/icipe-push-pull-technology-halts-fall-armyworm-rampage" };
const ICIPE_PP_HOW = { name: "icipe: Utafiti mpya unaeleza jinsi push-pull inavyoshinda viwavijeshi vamizi (jinsi desmodium na brachiaria zinavyofanya kazi)", url: "https://www.icipe.org/news/new-study-unravels-mechanisms-through-which-icipe-push-pull-technology-conquers-fall-armyworm" };
const ICIPE_PP_GUIDE = { name: "icipe: Mwongozo wa mkulima wa Push-Pull Inayozingatia Hali ya Hewa (toleo lililorekebishwa)", url: "https://technologytransfer.icipe.org/wp-content/uploads/2021/04/Climate_Smart_Push-Pull_English_Revised_Edition_Web_Version.pdf" };
const PCPB = { name: "Pest Control Products Board (Bodi ya Bidhaa za Kudhibiti Wadudu, Kenya)", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "National Agency for Food and Drug Administration and Control (NAFDAC, Nigeria)", url: "https://www.nafdac.gov.ng" };
const GHANA_EPA = { name: "Environmental Protection Authority (Mamlaka ya Kulinda Mazingira, Ghana)", url: "https://www.epa.gov.gh" };
const CILSS_CSP = { name: "CILSS / INSAH: mwongozo wa usajili wa Kamati ya Viuatilifu ya Sahel (CSP)", url: "https://insah.cilss.int/wp-content/uploads/2023/08/GUIDE_CSP_FINAL_nov_2017_anglais.pdf" };

module.exports = {
  id: "agri-ipm-pest-control-sw",
  lang: "sw",
  translationOf: "agri-ipm-pest-control",
  category: "Agriculture (Africa)",
  name: "Udhibiti Jumuishi wa Wadudu na Udhibiti wa Wadudu kwa Njia za Asili",
  skills: "Kuzuia wadudu kabla hawajaanza, Kukagua shamba na kutambua viwavijeshi vamizi na Tuta absoluta, Kuamua wakati wa kuchukua hatua kwa kiwango na kumbukumbu, Kutumia push-pull, maadui wa asili, mitego na udhibiti wa kibiolojia, Kutumia viuatilifu kwa usalama na kwa mujibu wa sheria kama hatua ya mwisho",
  outcome: "kuandika na kutekeleza mpango wa udhibiti jumuishi wa wadudu (IPM) kwa zao moja shambani kwako: kuzuia wadudu, kukagua shamba kila wiki, kuamua kwa kiwango maalum wakati wa kuchukua hatua, kutumia kwanza njia zisizo za kemikali, na kutumia kiuatilifu kilichosajiliwa kwa usalama pale tu kinapohitajika kweli.",
  about: [
    "Kozi hii ni kwa wakulima wadogo na wakulima wa kibiashara wanaokua, wafanyakazi wa mashambani, vijana wajasiriamali wa kilimo na maafisa ugani waliochoka kunyunyizia dawa tena na tena na bado kupoteza mazao. Mifano ni mahindi, mtama, maharagwe na nyanya nchini Kenya, Nigeria, Ghana na Burkina Faso.",
    "Sura ya 1 inakufundisha kuzuia wadudu mapema: hatua nne za IPM (zuia, fuatilia, amua, chukua hatua), jinsi ya kukagua shamba na kutofautisha viwavijeshi vamizi na kipekecha majani ya nyanya (Tuta absoluta) na madhara mengine, na jinsi ya kutumia kiwango cha kuchukua hatua na kumbukumbu rahisi kuamua lini hatua inalipa. Sura ya 2 inafundisha kudhibiti wadudu kwa sumu kidogo: push-pull ya icipe, maadui wa asili, mitego, bidhaa za mimea na za kibiolojia, na, kama hatua ya mwisho, matumizi salama na halali ya viuatilifu yanayopunguza pia kasi ya usugu.",
    "Kila somo linachukua kama dakika tano na linaishia na kazi ya \"Jaribu sasa\" shambani kwako. Wadudu na bidhaa zinazoruhusiwa zinatofautiana kwa kila nchi, kwa hiyo tumia kozi hii pamoja na afisa ugani wako, kliniki ya mimea na mamlaka ya viuatilifu ya nchi yako. Kuna jaribio fupi baada ya kila somo, jaribio la maarifa mwishoni mwa kila sura na mtihani wa maswali 20 mwishoni mwa kozi."
  ],
  finalTask: "Andika mpango wa IPM wa msimu mmoja kwa zao moja shambani kwako (kwa mfano nusu ekari ya mahindi, au kitalu cha nyanya): wadudu na magonjwa makuu unayotarajia, angalau hatua tatu za kuzuia, utaratibu wa kukagua shamba kila wiki pamoja na fomu ya kumbukumbu, kiwango cha kuchukua hatua ulichopata kutoka kwa afisa ugani kwa kila mdudu mkuu, njia zisizo za kemikali utakazotumia kwanza, na mpango wa kiuatilifu kama hatua ya mwisho (bidhaa uliyoikagua kwenye orodha ya mamlaka ya nchi yako, sheria za lebo utakazofuata, vifaa vya kujikinga utakavyovaa, na jinsi utakavyobadilisha makundi ili kupunguza kasi ya usugu).",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wakulima wadogo na wakulima wa kibiashara wanaokua, wafanyakazi wa mashambani, vijana wajasiriamali wa kilimo na maafisa ugani kote Afrika, wanaolima mahindi, mtama, mpunga, maharagwe, karanga, mboga na nyanya. Wengi wamekabiliana na viwavijeshi vamizi tangu walipofika Afrika mwaka 2016, na wakulima wa nyanya wamekabiliana na Tuta absoluta.",
    startingPoint: "Wanaweza kutaja baadhi ya wadudu na kwa kawaida hunyunyizia dawa wanapoona madhara, mara nyingi kwa chochote ambacho muuzaji wa pembejeo anapendekeza. Wachache hukagua shamba kwa ratiba, huweka kumbukumbu za wadudu, hutumia viwango vya kuchukua hatua, au wanajua maadui wa asili wanaowasaidia. Wengi hunyunyizia bila vifaa kamili vya kujikinga.",
    gap: "Kunyunyizia kwa mazoea kunagharimu pesa, kunaua maadui wa asili, kunazalisha usugu, kunadhuru afya na kunaweza kuacha mabaki ya kemikali ambayo wanunuzi wanakataa. Wanafunzi wanahitaji kuzuia wadudu, kukagua shamba na kuweka kumbukumbu, kuchukua hatua pale tu kiwango kinaposema inalipa, kutumia kwanza njia zisizo za kemikali, na kutumia viuatilifu vilivyosajiliwa kwa usalama kama hatua ya mwisho.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; wanafunzi wengi wanatumia Kiingereza kama lugha ya pili na kozi inapatikana pia kwa Kihispania, Kifaransa na Kiarabu",
      "Vifaa: simu ya kawaida au simu janja; lenzi ya mkono inasaidia lakini si lazima",
      "Muda: masomo ya kama dakika 5 yanayoingia kati ya kazi za shambani; mazoezi yanafanyika shambani mwa mwanafunzi mwenyewe",
      "Sheria zinatofautiana kwa kila nchi: bidhaa lazima ziwe kwenye orodha ya mamlaka ya nchi (kwa mfano PCPB nchini Kenya, NAFDAC nchini Nigeria, EPA nchini Ghana, Kamati ya Viuatilifu ya Sahel kwa nchi za CILSS kama Senegal na Burkina Faso)",
      "Usalama: kozi haitoi kamwe majina ya bidhaa, vipimo wala muda wa kusubiri kabla ya kuvuna; wanafunzi wanafuata lebo na afisa ugani wao"
    ],
    prerequisites: "Hakuna. Kozi \"Kilimo Endelevu cha Mazao na Bustani za Mboga\" inatoa kwanza muhtasari mfupi wa IPM, na kozi \"Afya na Rutuba ya Udongo\" inasaidia katika kuzuia."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Kwa zao moja shambani kwako", action: "kuorodhesha hatua za kuzuia zinazozuia wadudu kuongezeka kabla msimu haujaanza", standard: "ukitaja angalau hatua tatu zinazofaa zao lako" },
    { id: "O2", condition: "Ukitembea shambani kwako mara moja kwa wiki", action: "kukagua idadi maalum ya mimea na kutambua viwavijeshi vamizi, Tuta absoluta na maadui wa asili wa kawaida kwa dalili zao", standard: "ukikagua angalau mimea 50 (au mimea 20 ya nyanya) na kuandika unachokiona" },
    { id: "O3", condition: "Ukipewa hesabu zako za ukaguzi na kiwango kutoka kwa afisa ugani", action: "kuamua kama uchukue hatua sasa au uendelee kufuatilia, na kuandika uamuzi huo", standard: "ukifuata kanuni ya kiwango kila wakati" },
    { id: "O4", condition: "Ukipewa tatizo la wadudu kwenye zao lako", action: "kuchagua na kuweka njia zisizo za kemikali kama push-pull, maadui wa asili, mitego na bidhaa za kibiolojia", standard: "kabla ya kutumia kiuatilifu chochote cha viwandani" },
    { id: "O5", condition: "Kiuatilifu kinapohitajika kweli", action: "kuhakikisha bidhaa imesajiliwa, kufuata lebo yake na kuvaa vifaa vya kujikinga inavyoorodhesha", standard: "bila kuruka hatua yoyote" },
    { id: "O6", condition: "Katika maamuzi yote ya kunyunyizia ya msimu mmoja", action: "kubadilisha makundi ya viuatilifu na kuweka kumbukumbu ya unyunyiziaji ili kupunguza kasi ya usugu", standard: "bila kamwe kutumia kundi lile lile kwa kizazi kimoja cha wadudu mara mbili mfululizo" }
  ],
  chapters: [
    {
      name: "Sura 1: Kuzuia wadudu mapema",
      lessons: [
        {
          title: "Hatua nne za IPM, kuanzia na kuzuia",
          objectives: ["O1"],
          minutes: 5,
          goal: "Orodhesha hatua za kuzuia zinazozuia wadudu kuongezeka kwenye moja ya mazao yako.",
          text: [
            "FAO inaeleza udhibiti jumuishi wa wadudu (IPM) kama kuangalia njia zote za kudhibiti wadudu, kuchanganya zile zinazofaa, na kutumia viuatilifu pale tu vinapohitajika kweli. Unafanya kazi kwa hatua nne: zuia, fuatilia, amua na chukua hatua. Akiba kubwa zaidi inatokana na hatua ya kwanza.",
            "Kuzuia kunamaanisha kulifanya shamba kuwa makazi mabaya kwa wadudu na makazi mazuri kwa zao. Panda mbegu zilizothibitishwa za aina inayofaa eneo lako, na aina zinazostahimili wadudu pale zinapopatikana. Badilisha mazao (mzunguko wa mazao) ili wadudu wanaoishi udongoni au kwenye mabaki wakose chakula: kwa mfano mahindi, kisha maharagwe, kisha mtama. Panda kwa wakati na kwa pamoja na majirani zako, ili wadudu wasihame kutoka mashamba ya kuchelewa kwenda mashamba ya mapema. Lisha udongo, kwa sababu mimea dhaifu hushambuliwa kwanza.",
            "Weka shamba safi: ng'oa na uharibu mimea yenye virusi au ugonjwa, ondoa mimea iliyoota yenyewe na magugu yanayohifadhi wadudu, na safisha zana na buti. Kwa nyanya, kuza miche katika kitalu safi chenye neti ili ifike shambani bila Tuta absoluta wala inzi weupe. Acha mipaka yenye maua na ua wa miti, kwa sababu inalisha wadudu wanaokula wadudu waharibifu.",
            "Mkulima mwanamke nchini Ghana anayebadilisha mahindi na karanga, anayepanda mapema pamoja na majirani zake na anayeng'oa mimea yenye ugonjwa kila wiki mara nyingi hunyunyizia dawa kidogo sana kuliko anayepanda mahindi kwenye kipande kile kile kila msimu."
          ],
          steps: ["Andika wadudu na magonjwa makuu ya zao lako (uliza afisa ugani au kliniki ya mimea).", "Chagua mbegu zilizothibitishwa za aina inayofaa, inayostahimili wadudu.", "Panga mzunguko wa mazao na upande kwa wakati, sawa na majirani zako.", "Panga usafi wa shamba: ondoa mimea yenye ugonjwa, mimea iliyoota yenyewe na magugu yanayohifadhi wadudu; safisha zana.", "Acha mipaka yenye maua kwa ajili ya maadui wa asili."],
          words: [["IPM", "udhibiti jumuishi wa wadudu (integrated pest management): kuzuia wadudu, kuwafuatilia, kuamua lini hatua inalipa, na kuchanganya njia nyingi za kudhibiti, na viuatilifu pale tu vinapohitajika kweli."], ["Kuzuia", "hatua zinazochukuliwa kabla wadudu hawajafika ili wasiweze kuongezeka."], ["Mzunguko wa mazao", "kupanda zao tofauti kwenye kipande kile kile kila msimu."], ["Mmea ulioota wenyewe", "mmea wa zao unaoota wenyewe kutokana na mbegu za msimu uliopita na unaoweza kubeba wadudu."]],
          slides: [
            { title: "IPM kwa hatua nne", bullets: ["1. Zuia", "2. Fuatilia (kagua shamba)", "3. Amua: je, hatua inalipa?", "4. Chukua hatua: njia zisizo za kemikali kwanza, kiuatilifu mwisho"] },
            { title: "Kuzuia kunaanza na mbegu", bullets: ["Mbegu zilizothibitishwa za aina inayofaa", "Aina zinazostahimili wadudu pale zinapopatikana", "Lisha udongo: mimea dhaifu hushambuliwa kwanza"] },
            { title: "Wanyime wadudu chakula", bullets: ["Badilisha mazao: mahindi, kisha maharagwe, kisha mtama", "Panda kwa wakati, pamoja na majirani", "Ondoa mimea iliyoota yenyewe na magugu yanayohifadhi wadudu"] },
            { title: "Weka shamba safi", bullets: ["Ng'oa na uharibu mimea yenye ugonjwa", "Safisha zana na buti", "Kitalu cha nyanya kilicho safi na chenye neti", "Mipaka yenye maua inalisha maadui wa asili"] }
          ],
          sources: [FAO_IPM],
          tryIt: "Chagua zao moja utakalolima msimu ujao. Andika wadudu au magonjwa yake matatu mabaya zaidi, kisha andika angalau hatua tatu za kuzuia utakazochukua kabla ya kupanda (mbegu, mzunguko, wakati, usafi, mipaka).",
          youCanNow: "kutaja hatua nne za IPM na kuorodhesha hatua za kuzuia zinazozuia wadudu kuongezeka kwenye zao lako.",
          quickCheck: [
            { objective: "O1", q: "Hatua ipi ya IPM kwa kawaida inamwokolea mkulima pesa nyingi zaidi?", options: ["Kunyunyizia kila wiki", "Kununua bidhaa yenye nguvu zaidi", "Kuzuia kabla wadudu hawajafika", "Kunyunyizia shamba la jirani"], answer: 2, why: "Kuzuia kunawazuia wadudu kuongezeka, kwa hiyo hatua chache zinahitajika baadaye." },
            { objective: "O1", q: "Mahindi yako yalipata madhara makubwa ya wadudu kwenye kipande kile kile misimu mitatu mfululizo. Hatua ipi ya kuzuia inafaa zaidi?", options: ["Kupanda maharagwe au karanga kwenye kipande hicho msimu ujao", "Kupanda mahindi baadaye kuliko majirani zako", "Kuacha mabua ya mahindi ya msimu uliopita yakiwa yamesimama", "Kupanda mbegu zisizothibitishwa kutoka magunzi yaliyoharibika"], answer: 0, why: "Mzunguko wa mazao unavunja mzunguko wa maisha wa mdudu kwa kumnyima mmea anaoula." }
          ]
        },
        {
          title: "Kukagua shamba na kutambua viwavijeshi vamizi na Tuta absoluta",
          objectives: ["O2"],
          minutes: 6,
          goal: "Kagua shamba kwa njia maalum na utambue viwavijeshi vamizi, Tuta absoluta na maadui wa asili kwa dalili zao.",
          text: [
            "Kukagua shamba kunamaanisha kutembea shambani kwa ratiba na kuangalia idadi maalum ya mimea, ili uone tatizo mapema na uweze kulihesabu. Kagua angalau mara moja kwa wiki, na mara nyingi zaidi kwa mahindi machanga na nyanya. Tembea kwa njia ya umbo la W au zigizaga ili ukague shamba lote, si pembeni tu. Kwa mahindi, simama mahali tano na ukague mimea 10 mfululizo kila mahali, jumla mimea 50. Kwenye kitalu kidogo cha nyanya, kagua mimea 20 iliyosambaa katika matuta yote.",
            "Viwavijeshi vamizi walifika Afrika mwaka 2016 na sasa wanapatikana karibu bara zima. Kwenye mahindi machanga, tafuta \"madirisha\" madogo (vipande vyembamba vinavyopitisha mwanga) kwenye majani, kisha matundu yaliyochanika na kinyesi chenye unyevu kinachofanana na unga wa mbao ndani ya kikombe cha majani (whorl). Kiwavi ana alama ya Y iliyopinduka, yenye rangi hafifu, kichwani na madoa manne meusi yaliyopangwa kama mraba karibu na mkia. Makundi ya mayai yako kwenye majani chini ya safu ya magamba laini kama manyoya. Mmea unahesabiwa kuwa umeshambuliwa kama una madhara mapya au kiwavi aliye hai.",
            "Tuta absoluta, kipekecha majani ya nyanya, alitoka Amerika ya Kusini na kuenea Afrika ndani ya miaka michache; icipe inaripoti kwamba kaskazini mwa Nigeria mwaka 2016 aliharibu sehemu kubwa ya zao la nyanya. Viwavi wake wadogo sana huchimba vichuguu ndani ya majani, wakiacha mabaka meupe yanayopitisha mwanga (mines) yenye kinyesi cheusi, na hutoboa matundu madogo kwenye mashina na matunda. Mdudu mzima ni nondo mdogo wa rangi ya kijivu-kahawia anayejificha mchana.",
            "Tafuta pia marafiki: ladybird na viwavi wao, lacewing, buibui, earwig, sisimizi na nyigu wadogo wa vimelea, na viwavi wanaoonekana wagonjwa, laini au waliofunikwa na kuvu. FAO inaeleza kwamba maadui wa asili tayari wanaua viwavijeshi vamizi wengi katika mashamba ya Afrika. Kama huna uhakika unachokiona, piga picha iliyo wazi na uulize afisa ugani au kliniki ya mimea; katika baadhi ya nchi app ya FAO iitwayo FAMEWS inarekodi mahali viwavijeshi vamizi wameonekana."
          ],
          steps: ["Chagua siku ya kukagua kila wiki na ubebe daftari au simu.", "Tembea kwa njia ya W; simama mahali 5 kwa mahindi (mimea 10 kila mahali) au mimea 20 ya nyanya iliyosambaa.", "Kwa kila mmea, angalia majani, kikombe cha majani au ncha inayokua, mashina na matunda.", "Hesabu mimea yenye madhara mapya au wadudu walio hai; andika makundi ya mayai.", "Andika maadui wa asili unaowaona.", "Piga picha ya chochote usichoweza kutambua na uulize afisa ugani au kliniki ya mimea."],
          words: [["Kukagua shamba", "kutembea shambani kwa ratiba na kuangalia idadi maalum ya mimea kutafuta wadudu, magonjwa na maadui wa asili."], ["Kikombe cha majani (whorl)", "majani machanga yaliyojikunja juu ya mmea mchanga wa mahindi."], ["Kichuguu cha jani (leaf mine)", "kichuguu au baka jeupe ndani ya jani linalotengenezwa na kiwavi mdogo anayekula kati ya pande mbili za jani."], ["Adui wa asili", "mdudu, buibui, kuvu au kiumbe hai kingine kinachoua wadudu waharibifu."]],
          slides: [
            { title: "Jinsi ya kukagua shamba", bullets: ["Kila wiki, siku ile ile", "Njia ya W au zigizaga, si pembeni tu", "Mahindi: vituo 5 x mimea 10 = 50", "Nyanya: mimea 20 iliyosambaa"] },
            { title: "Dalili za viwavijeshi vamizi", bullets: ["Madirisha kwenye majani machanga, kisha matundu yaliyochanika", "Kinyesi chenye unyevu kama unga wa mbao ndani ya kikombe cha majani", "Y iliyopinduka kichwani, madoa 4 meusi karibu na mkia"] },
            { title: "Dalili za Tuta absoluta", bullets: ["Mabaka meupe yenye kinyesi cheusi ndani ya majani", "Matundu madogo kwenye mashina na matunda", "Nondo mdogo wa kijivu-kahawia anayejificha mchana"] },
            { title: "Tafuta marafiki pia", bullets: ["Ladybird, lacewing, buibui, earwig, sisimizi", "Nyigu wa vimelea; viwavi wagonjwa au waliofunikwa na kuvu", "Huna uhakika? Picha kwa afisa ugani au kliniki ya mimea"] }
          ],
          sources: [CIMMYT_FAW, ICIPE_TUTA, FAO_FAMEWS],
          tryIt: "Kagua moja ya mashamba yako leo kwa njia ya W: mimea 50 ya mahindi au mimea 20 ya nyanya. Andika mimea mingapi ilikuwa na madhara mapya au wadudu walio hai, makundi yoyote ya mayai, na kila adui wa asili uliyemwona.",
          youCanNow: "kukagua shamba kwa njia maalum, kutambua viwavijeshi vamizi na Tuta absoluta kwa dalili zao, na kuwaona maadui wa asili.",
          quickCheck: [
            { objective: "O2", q: "Unaona kinyesi chenye unyevu kama unga wa mbao na matundu yaliyochanika ndani ya kikombe cha majani ya mahindi machanga. Huenda ni mdudu gani?", options: ["Kipekecha majani ya nyanya", "Vidukari", "Viwavijeshi vamizi", "Mchwa"], answer: 2, why: "Matundu yaliyochanika na kinyesi chenye unyevu ndani ya kikombe cha majani ni dalili za kawaida za viwavijeshi vamizi." },
            { objective: "O2", q: "Kwa nini utembee kwa njia ya W unapokagua shamba badala ya kuangalia mimea iliyo karibu na lango?", options: ["Ni haraka zaidi", "Wadudu wanaishi katikati tu", "Inatumia maji kidogo", "Inakagua shamba lote, si pembeni tu"], answer: 3, why: "Njia ya W inachukua sampuli kutoka kila sehemu ya shamba, kwa hiyo hesabu inaonyesha kiwango halisi." }
          ]
        },
        {
          title: "Viwango na kumbukumbu: kuamua wakati wa kuchukua hatua",
          objectives: ["O3"],
          minutes: 5,
          goal: "Linganisha hesabu yako ya ukaguzi na kiwango cha kuchukua hatua na uandike kama uchukue hatua au uendelee kufuatilia.",
          text: [
            "Kuona mdudu hakumaanishi lazima unyunyizie. Kiwango cha kuchukua hatua ni kiasi cha wadudu au madhara ambapo kudhibiti kunastahili gharama yake. Chini ya kiwango hicho, maadui wa asili na zao kwa kawaida wanaweza kustahimili, na kunyunyizia kungepoteza pesa na kuua wasaidizi wako. Pata kiwango kwa kila mdudu mkuu, hatua ya ukuaji wa zao na eneo kutoka kwa afisa ugani wako au taasisi ya utafiti (kama KALRO nchini Kenya), kwa sababu kinabadilika kulingana na hatua ya zao, bei na utafiti wa eneo hilo.",
            "Geuza hesabu yako kuwa asilimia: mimea yenye madhara mapya au wadudu walio hai, gawanya kwa mimea uliyokagua, zidisha kwa 100. Mfano: ulikagua mimea 50 ya mahindi na 9 ilikuwa na madhara mapya ya viwavijeshi vamizi, kwa hiyo 9 / 50 x 100 = 18%. Kama afisa ugani alikuambia uchukue hatua kwenye 20% katika hatua hii, unaendelea kufuatilia na kukagua tena baada ya siku chache. Kama wiki ijayo ni 26%, unachukua hatua. Mahindi machanga kwa kawaida hustahimili madhara kidogo kuliko mahindi makubwa, kwa hiyo viwango mara nyingi hutofautiana kwa hatua ya zao.",
            "Andika kila ziara. Kumbukumbu rahisi ina tarehe, shamba, hatua ya zao, mimea iliyokaguliwa, mimea iliyoshambuliwa, asilimia, maadui wa asili walioonekana, kiwango, uamuzi wako na ulichofanya. Baada ya misimu michache kumbukumbu zako zinaonyesha lini wadudu hufika shambani kwako, njia zipi zilifanya kazi na ziligharimu kiasi gani. Daftari la karatasi linafaa; vivyo hivyo jedwali kwenye simu au app ya shamba."
          ],
          steps: ["Muulize afisa ugani kiwango kwa kila mdudu mkuu na kila hatua ya zao.", "Baada ya kukagua, hesabu mimea uliyokagua na mimea iliyoshambuliwa.", "Kokotoa asilimia: iliyoshambuliwa / iliyokaguliwa x 100.", "Linganisha na kiwango: chini yake = endelea kufuatilia; sawa au juu yake = chukua hatua.", "Andika tarehe, namba, maadui wa asili, uamuzi na hatua katika kumbukumbu yako."],
          words: [["Kiwango cha kuchukua hatua", "kiasi cha wadudu au madhara ambapo kudhibiti kunastahili gharama yake."], ["Iliyoshambuliwa", "yenye wadudu au madhara mapya kutoka kwa wadudu."], ["Hatua ya zao", "zao limekua kiasi gani, kwa mfano mche, kufika magotini, kutoa ua dume, kuchanua, kuzaa matunda."]],
          slides: [
            { title: "Kuona mdudu si sababu ya kunyunyizia", bullets: ["Kiwango: kiasi ambapo hatua inalipa", "Chini yake, maadui wa asili mara nyingi wanastahimili", "Pata viwango kutoka kwa afisa ugani, kwa hatua ya zao"] },
            { title: "Kokotoa asilimia", bullets: ["Mimea iliyoshambuliwa / mimea iliyokaguliwa x 100", "Mfano: 9 / 50 x 100 = 18%", "Kiwango 20%: endelea kufuatilia, kagua tena hivi karibuni"] },
            { title: "Weka kumbukumbu ya kila ziara", bullets: ["Tarehe, shamba, hatua ya zao", "Iliyokaguliwa, iliyoshambuliwa, %, maadui wa asili", "Kiwango, uamuzi, hatua, gharama"] }
          ],
          sources: [FAO_IPM, CIMMYT_FAW],
          tryIt: "Tumia hesabu kutoka ukaguzi wako wa somo lililopita. Kokotoa asilimia ya mimea iliyoshambuliwa, muulize afisa ugani wako kiwango katika hatua ya zao lako, na ujaze mstari wako wa kwanza wa kumbukumbu pamoja na uamuzi wako.",
          youCanNow: "kugeuza hesabu ya ukaguzi kuwa asilimia, kuilinganisha na kiwango, na kuandika uamuzi wako.",
          quickCheck: [
            { objective: "O3", q: "Ulikagua mimea 50 na 15 ilikuwa na madhara mapya. Mashambulizi ni kiasi gani?", options: ["15%", "30%", "50%", "35%"], answer: 1, why: "15 / 50 x 100 = 30%." },
            { objective: "O3", q: "Hesabu yako ni 12% na kiwango cha afisa ugani kwa hatua hii ni 20%. Unafanya nini?", options: ["Kunyunyizia leo ili kuwa salama", "Kung'oa zao", "Kuongeza kipimo cha dawa mara mbili", "Kuendelea kufuatilia, kukagua tena hivi karibuni na kuandika"], answer: 3, why: "Chini ya kiwango, kudhibiti bado hakulipi; unaendelea kukagua na kuandika." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kuzuia wadudu mapema",
        questions: [
          { objective: "O1", q: "Ipi ni hatua ya kuzuia katika IPM?", options: ["Kunyunyizia unapoona kiwavi mmoja", "Kupanda kwa wakati mbegu zilizothibitishwa za aina inayofaa", "Kuchanganya viuatilifu viwili pamoja", "Kuchoma zao la jirani"], answer: 1, why: "Mbegu bora na kupanda kwa wakati kunazuia wadudu kuongezeka kabla hawajaanza." },
          { objective: "O2", q: "Mabaka meupe yenye kinyesi cheusi ndani ya majani ya nyanya, na matundu madogo kwenye matunda, yanaonyesha:", options: ["Tuta absoluta (kipekecha majani ya nyanya)", "Viwavijeshi vamizi", "Mbolea nyingi mno", "Ukosefu wa maji"], answer: 0, why: "Vichuguu kwenye majani na matundu kwenye matunda ni dalili za Tuta absoluta." },
          { objective: "O2", q: "Ukikagua shamba unaona ladybird na kiwavi aliyefunikwa na kuvu nyeupe. Unapaswa:", options: ["Kunyunyizia ili kuwaua nao pia", "Kuwapuuza; hawana umuhimu", "Kuwaandika kama maadui wa asili wanaofanya kazi", "Kuchoma mmea"], answer: 2, why: "Maadui wa asili wanapunguza wadudu waharibifu, kwa hiyo unawaandika na kuwalinda." },
          { objective: "O3", q: "Kiwango cha kuchukua hatua ni nini?", options: ["Siku unayopanda", "Bei ya kiuatilifu", "Idadi ya wafanyakazi unaowahitaji", "Kiasi cha wadudu ambapo kudhibiti kunastahili gharama yake"], answer: 3, why: "Chini ya kiwango, kudhibiti kunagharimu zaidi kuliko kunavyookoa." },
          { objective: "O3", q: "Kwa nini uweke kumbukumbu ya maandishi ya kila ziara ya ukaguzi?", options: ["Kuona lini wadudu hufika, nini kilifanya kazi na kiligharimu kiasi gani", "Kwa sababu muuzaji wa pembejeo anaiomba", "Kufanya shamba lionekane nadhifu", "Haina faida"], answer: 0, why: "Kumbukumbu zinageuza kila msimu kuwa mafunzo kwa msimu unaofuata." }
        ]
      }
    },
    {
      name: "Sura 2: Kudhibiti wadudu kwa sumu kidogo",
      lessons: [
        {
          title: "Push-pull na maadui wa asili",
          objectives: ["O4"],
          minutes: 6,
          goal: "Panga kipande cha push-pull na uwalinde maadui wa asili shambani kwako.",
          text: [
            "Push-pull (sukuma-vuta) ilibuniwa na icipe, pamoja na washirika, kwa mahindi na mtama Afrika Mashariki. Unapanda desmodium kati ya mistari ya mahindi. Desmodium inatoa harufu zinazosukuma nondo wa vipekecha mabua mbali na zao. Kuzunguka kipande unapanda mpaka wa nyasi ya malisho (brachiaria katika toleo linalozingatia hali ya hewa kwa maeneo makavu zaidi, nyasi ya Napier katika toleo la awali), inayovuta nondo kwake na kuwanasa. Desmodium pia inazuia gugu la kiduha (striga) na inaongeza naitrojeni udongoni, na mimea yote miwili ni chakula kizuri cha ng'ombe.",
            "Tafiti za icipe nchini Kenya, Uganda na Tanzania zilikuta madhara kidogo sana ya viwavijeshi vamizi katika mashamba ya push-pull inayozingatia hali ya hewa kuliko katika mahindi yaliyopandwa peke yake, na mavuno makubwa zaidi ya nafaka. Push-pull inahitaji kazi kuianzisha na unahitaji mbegu au vipandikizi vya desmodium na vipande vya nyasi, kwa hiyo anza na kipande kidogo, muulize afisa ugani au mkulima aliyefundishwa na icipe mpangilio wake, na ufuate mwongozo wa mkulima wa icipe.",
            "Maadui wa asili ni wafanyakazi wa bure. Sisimizi, earwig, buibui, ladybird na lacewing hula mayai na viwavi wachanga; nyigu wadogo hutaga mayai yao ndani ya wadudu waharibifu; kuvu na virusi huua viwavi. FAO inaeleza kwamba hawa tayari wanaua sehemu kubwa ya viwavijeshi vamizi katika mashamba ya Afrika. icipe imeachilia nchini Kenya nyigu mdogo sana kutoka Amerika ya Kusini anayeshambulia Tuta absoluta peke yake. Kuwalinda: nyunyizia pale tu kiwango kinaposema hivyo, chagua bidhaa zinazolenga wadudu fulani tu, acha mimea yenye maua na ua wa miti kuzunguka mashamba, na acha sehemu ya ardhi ikiwa na mimea ya kufunika."
          ],
          steps: ["Weka alama ya kipande kidogo cha push-pull (muulize afisa ugani au tumia mwongozo wa icipe kwa mpangilio).", "Panda kwanza nyasi ya mpakani (brachiaria au Napier) kuzunguka kipande.", "Panda desmodium kati ya mistari ya mahindi au mtama.", "Kata nyasi na desmodium kwa chakula cha mifugo, ukiacha mimea iote tena.", "Walinde maadui wa asili: usinyunyizie bila sababu, acha maua na mimea ya kufunika ardhi."],
          words: [["Push-pull", "mfumo wa icipe ambapo zao la kuchanganya (desmodium) linasukuma wadudu mbali na nyasi ya mpakani inawavuta nje ya zao."], ["Desmodium", "mmea wa jamii ya mikunde unaotambaa chini, unaopandwa kati ya mistari ya nafaka; unafukuza nondo wa vipekecha mabua, unazuia kiduha na unaongeza naitrojeni."], ["Kiduha (striga)", "gugu la vimelea lenye maua ya waridi au zambarau linalojishikiza kwenye mizizi ya mahindi na mtama na kuiba chakula chao."], ["Nyigu wa vimelea", "nyigu mdogo sana anayetaga mayai yake ndani au juu ya mdudu mharibifu, na watoto wake wanamuua mdudu huyo."]],
          slides: [
            { title: "Push-pull (icipe)", bullets: ["Desmodium kati ya mistari inasukuma nondo mbali", "Nyasi ya mpakani (brachiaria au Napier) inawavuta nje", "Kwa mahindi na mtama"] },
            { title: "Faida za ziada", bullets: ["Desmodium inazuia kiduha na kuongeza naitrojeni", "Mimea yote miwili inalisha ng'ombe", "Majaribio ya icipe: madhara kidogo sana ya viwavijeshi vamizi"] },
            { title: "Wafanyakazi wako wa bure", bullets: ["Sisimizi, earwig, buibui, ladybird, lacewing", "Nyigu wa vimelea; kuvu na virusi", "Nyigu aliyeachiliwa Kenya anashambulia Tuta absoluta peke yake"] },
            { title: "Walinde maadui wa asili", bullets: ["Nyunyizia tu juu ya kiwango", "Chagua bidhaa zinazolenga wadudu fulani tu", "Acha maua, ua wa miti na mimea ya kufunika ardhi"] }
          ],
          sources: [ICIPE_PP_FAW, ICIPE_PP_HOW, ICIPE_PP_GUIDE, ICIPE_TUTA],
          tryIt: "Chora mchoro wa kipande kidogo cha push-pull kwa mahindi au mtama wako, pamoja na nyasi ya mpakani, mistari ya desmodium na mistari ya zao. Kisha andika mambo mawili utakayobadilisha shambani kwako ili kuwalinda maadui wa asili.",
          youCanNow: "kueleza jinsi push-pull inavyofanya kazi, kuchora kipande cha push-pull, na kutaja njia za kuwalinda maadui wa asili.",
          quickCheck: [
            { objective: "O4", q: "Katika push-pull, desmodium iliyo kati ya mistari ya mahindi inafanya nini?", options: ["Inavuta wadudu ndani ya mahindi", "Inasukuma nondo wa vipekecha mabua mbali na kuzuia kiduha", "Inatia mahindi kivuli ili yarefuke", "Inaua ladybird"], answer: 1, why: "Harufu ya desmodium inafukuza nondo na inazuia kiduha; nyasi ya mpakani ndiyo inayovuta." },
            { objective: "O4", q: "Tabia ipi inawalinda maadui wa asili vizuri zaidi?", options: ["Kunyunyizia kiuatilifu kinachoua wadudu wote kila wiki", "Kuondoa kila ua na ua wa miti kuzunguka shamba", "Kuchoma mabaki ya mazao na mimea yote ya kufunika ardhi", "Kunyunyizia tu juu ya kiwango na kuacha mipaka yenye maua"], answer: 3, why: "Unyunyiziaji mchache na mimea yenye maua vinawaweka maadui wa asili hai na wakiwa na chakula." }
          ]
        },
        {
          title: "Mitego, njia za mimea na za kibiolojia",
          objectives: ["O4"],
          minutes: 5,
          goal: "Chagua na uweke mitego na njia za mimea au za kibiolojia zilizoidhinishwa kwa tatizo la wadudu.",
          text: [
            "Mitego inakusaidia kufuatilia na kupunguza idadi ya wadudu. Mitego ya feromoni inatumia harufu ya nondo jike kuwanasa madume: icipe inatumia unasaji wa wingi kama sehemu ya IPM yake kwa Tuta absoluta, na mitego ya feromoni kwa viwavijeshi vamizi inakuambia lini nondo wanafika ili ukague kwa makini zaidi. Kadi za njano zenye gundi zinanasa inzi weupe, vidukari na wadudu wazima wa vipekecha majani; za bluu zinanasa thrips. Badilisha chambo na kadi kama msambazaji anavyosema, na uhesabu walionaswa kila wiki katika kumbukumbu yako.",
            "Kuokota kwa mkono kunafanya kazi kwenye vipande vidogo: ponda makundi ya mayai ya viwavijeshi vamizi na viwavi wachanga, na uchume na kuharibu majani yaliyotobolewa na Tuta na matunda yaliyoharibika (yazike chini sana au yafunge ndani ya mfuko juani, usiyaache kamwe ardhini).",
            "Bidhaa za kibiolojia zinatumia viumbe hai au bidhaa zao za asili dhidi ya wadudu: kwa mfano bidhaa zinazotokana na bakteria Bt (Bacillus thuringiensis), kuvu wanaoambukiza wadudu, au virusi vya wadudu. icipe inatengeneza viuatilifu vya kibiolojia vinavyotokana na kuvu. Kwa kawaida haviwadhuru sana maadui wa asili, lakini vinafanya kazi polepole, lazima viwafikie viwavi wachanga, na lazima vihifadhiwe kama lebo inavyosema. Katika nchi nyingi lazima visajiliwe kama kiuatilifu kingine chochote, kwa hiyo kagua orodha ya mamlaka.",
            "Njia za mimea zinatoka kwenye mimea, kama mwarobaini (neem). Bidhaa za mwarobaini zilizosajiliwa zina lebo unayoweza kufuata. Dawa za kutengeneza nyumbani zinatumiwa sana, lakini nguvu yake inatofautiana na bado zinaweza kudhuru maadui wa asili, ngozi na macho, kwa hiyo muulize afisa ugani wako jinsi zinavyotumiwa eneo lako, vaa glavu, na ujaribu kwanza kwenye mimea michache."
          ],
          steps: ["Linganisha zana na mdudu: mitego ya feromoni kwa nondo, kadi za njano kwa inzi weupe na vidukari, za bluu kwa thrips.", "Tundika mitego kwenye kimo cha zao na uhesabu walionaswa kila wiki.", "Okota kwa mkono na uharibu makundi ya mayai, viwavi wachanga na majani yaliyotobolewa.", "Kama zaidi inahitajika, chagua bidhaa ya kibiolojia au ya mimea iliyosajiliwa.", "Itumie kwa viwavi wachanga, kama lebo yake inavyosema, na uiandike."],
          words: [["Mtego wa feromoni", "mtego wenye chambo cha harufu ya kujamiiana ya mdudu; unanasa madume na unaonyesha lini wadudu wanafika."], ["Kiuatilifu cha kibiolojia", "bidhaa ya kudhibiti wadudu inayotengenezwa kutokana na viumbe hai kama bakteria, kuvu au virusi, au bidhaa zao za asili."], ["Bt", "Bacillus thuringiensis, bakteria wa udongoni anayetumiwa katika viuatilifu vya kibiolojia; anaua baadhi ya viwavi wanapomla."], ["Njia ya mimea (botanical)", "bidhaa ya kudhibiti wadudu inayotengenezwa kutokana na mimea, kama mwarobaini."]],
          slides: [
            { title: "Mitego ya kufuatilia na kupunguza", bullets: ["Mitego ya feromoni inanasa nondo madume", "Kadi za njano: inzi weupe, vidukari; za bluu: thrips", "Hesabu walionaswa kila wiki; badilisha chambo kwa wakati"] },
            { title: "Kuokota kwa mkono kunafanya kazi", bullets: ["Ponda makundi ya mayai na viwavi wachanga", "Ondoa majani yaliyotobolewa na Tuta na matunda yaliyoharibika", "Zika chini sana au funga ndani ya mfuko, usiache kamwe ardhini"] },
            { title: "Bidhaa za kibiolojia", bullets: ["Bt, kuvu wanaoua wadudu, virusi vya wadudu", "Hazidhuru sana maadui wa asili, lakini ni za polepole", "Lenga viwavi wachanga; kagua usajili"] },
            { title: "Njia za mimea kama mwarobaini", bullets: ["Bidhaa zilizosajiliwa zina lebo: ifuate", "Dawa za nyumbani zinatofautiana kwa nguvu", "Uliza afisa ugani, vaa glavu, jaribu mimea michache"] }
          ],
          sources: [ICIPE_TUTA, CIMMYT_FAW, PCPB, NAFDAC],
          tryIt: "Kwa mdudu mbaya zaidi kwenye zao lako, andika mtego gani ungetumia na ungeutundika wapi, ungeokota nini kwa mkono, na njia moja ya kibiolojia au ya mimea. Kisha kagua kama bidhaa hiyo iko kwenye orodha ya bidhaa zilizosajiliwa ya nchi yako au muombe muuzaji wa pembejeo akuonyeshe usajili wake.",
          youCanNow: "kuchagua mitego, kuokota kwa mkono na njia za kibiolojia au za mimea zilizoidhinishwa kwa mdudu fulani na kuziweka.",
          quickCheck: [
            { objective: "O4", q: "Unalima nyanya na unataka kujua lini nondo wa Tuta absoluta wanafika. Unaweka nini?", options: ["Mtego wa feromoni wa Tuta absoluta", "Kadi ya bluu yenye gundi", "Ndoo ya maji ghalani", "Kitisho cha ndege"], answer: 0, why: "Mtego wa feromoni wenye chambo cha Tuta unanasa nondo madume na kuonyesha lini wanafika." },
            { objective: "O4", q: "Kiuatilifu cha kibiolojia cha Bt kinafanya kazi vizuri zaidi unapo:", options: ["Kukinyunyizia kwa viwavi wakubwa, wazee saa sita mchana", "Kukichanganya na kemikali nyingine yoyote", "Kukitumia kwa viwavi wachanga kama lebo yake inavyosema", "Kukihifadhi juani"], answer: 2, why: "Bidhaa za kibiolojia zinafanya kazi polepole na vizuri zaidi kwa viwavi wachanga, zikitumiwa kama lebo inavyosema." }
          ]
        },
        {
          title: "Viuatilifu kama hatua ya mwisho, na kupunguza kasi ya usugu",
          objectives: ["O5", "O6"],
          minutes: 6,
          goal: "Kagua usajili wa kiuatilifu, fuata lebo yake ukivaa vifaa vya kujikinga, na upange kubadilisha makundi ili kupunguza kasi ya usugu.",
          text: [
            "Tumia kiuatilifu cha viwandani pale tu hesabu yako iko juu ya kiwango na njia nyingine hazitoshi. Kwanza hakikisha bidhaa imesajiliwa kwa zao lako na mdudu wako nchini kwako: Pest Control Products Board (PCPB) nchini Kenya, NAFDAC nchini Nigeria, Environmental Protection Authority (EPA) nchini Ghana, na Kamati ya Viuatilifu ya Sahel (CSP) kwa nchi za CILSS kama Senegal na Burkina Faso. Kila moja ina orodha ya bidhaa zilizosajiliwa; ikague, na ununue tu vyombo vilivyofungwa na vyenye lebo kutoka kwa muuzaji wa pembejeo mwenye leseni. Bidhaa bandia na zisizosajiliwa ni nyingi.",
            "Lebo ni sheria. Isome yote kabla ya kufungua chombo: mazao na wadudu iliyokusudiwa, kipimo, jinsi ya kuchanganya, wakati wa kunyunyizia, vifaa vya kujikinga, muda wa kusubiri kabla ya kuvuna na kabla watu hawajarudi shambani, na huduma ya kwanza. Vaa vitu ambavyo lebo inaorodhesha, kwa kawaida glavu, buti, mikono mirefu na suruali, kinga ya macho na barakoa au kipumulio. Nyunyizia wakati wa utulivu na baridi, kamwe usielekeze kwa watu, wanyama au maji. Usile, usinywe wala usivute sigara wakati wa kunyunyizia, jioshe baadaye, na ufunge bidhaa mbali na watoto na chakula. Kamwe usiweke kiuatilifu ndani ya chupa ya kinywaji au ya chakula.",
            "Wadudu wanakuwa sugu pale aina ile ile ya kemikali inapotumiwa tena na tena: wachache wanaonusurika wanazaliana. Viwavijeshi vamizi na Tuta absoluta wote wanajulikana kwa hili. Lebo mara nyingi zinaonyesha namba ya kundi au kiambato hai. Badilisha kati ya makundi, usitumie kundi lile lile kwa kizazi kimoja cha wadudu mara mbili mfululizo, kamwe usipunguze kipimo wala kuchanganya bidhaa mwenyewe, na weka kumbukumbu ya unyunyiziaji yenye tarehe, bidhaa, kundi, kipimo, shamba na tarehe ya kuruhusiwa kuvuna. Nchini Kenya, mkulima wa nyanya anayenyunyizia bidhaa ile ile kila baada ya siku chache mara nyingi huona ikiacha kufanya kazi; anayekagua shamba, anayetega mitego na kubadilisha makundi huweka unyunyiziaji wake mchache ukifanya kazi."
          ],
          steps: ["Hakikisha hesabu iko juu ya kiwango na njia nyingine hazitoshi.", "Kagua kama bidhaa imesajiliwa kwa zao lako na mdudu wako (PCPB, NAFDAC, EPA Ghana, CSP).", "Nunua chombo kilichofungwa na chenye lebo kutoka kwa muuzaji wa pembejeo mwenye leseni.", "Soma lebo yote; vaa vifaa vyote vya kujikinga inavyoorodhesha.", "Nyunyizia wakati wa utulivu na baridi kwa kipimo cha lebo; jioshe na uhifadhi kwa usalama.", "Andika bidhaa, kundi, kipimo na tarehe ya kuruhusiwa kuvuna; badilisha kundi wakati ujao."],
          words: [["Kiuatilifu kilichosajiliwa", "bidhaa ambayo mamlaka ya nchi imeiidhinisha kwa mazao na wadudu waliotajwa."], ["Lebo", "maelekezo yaliyo kwenye chombo; kuyafuata ni sheria."], ["PPE", "vifaa vya kujikinga (personal protective equipment): glavu, buti, nguo ndefu, kinga ya macho na barakoa au kipumulio."], ["Muda wa kusubiri kabla ya kuvuna", "muda unaopaswa kusubiri baada ya kunyunyizia kabla ya kuvuna; umeandikwa kwenye lebo."], ["Usugu", "pale mdudu haufi tena kwa bidhaa iliyokuwa ikimuua."], ["Kundi la namna ya kuua (mode-of-action group)", "namba au jina linaloonyesha jinsi kiuatilifu kinavyoua; badilisha kati ya makundi ili kupunguza kasi ya usugu."]],
          slides: [
            { title: "Kiuatilifu: hatua ya mwisho", bullets: ["Juu ya kiwango tu", "Pale tu njia nyingine hazitoshi", "Kilichosajiliwa kwa zao lako na mdudu wako tu"] },
            { title: "Kagua usajili", bullets: ["Kenya: PCPB; Nigeria: NAFDAC", "Ghana: EPA; Senegal, Burkina Faso: CSP (CILSS)", "Kilichofungwa, chenye lebo, muuzaji mwenye leseni"] },
            { title: "Lebo ni sheria", bullets: ["Zao, mdudu, kipimo, wakati", "PPE: glavu, buti, mikono mirefu, macho, barakoa", "Muda wa kusubiri kabla ya kuvuna na kabla ya kurudi shambani"] },
            { title: "Punguza kasi ya usugu", bullets: ["Badilisha makundi ya namna ya kuua", "Kamwe usipunguze kipimo wala kuchanganya mwenyewe", "Weka kumbukumbu ya unyunyiziaji"] }
          ],
          sources: [PCPB, NAFDAC, GHANA_EPA, CILSS_CSP, FAO_IPM],
          tryIt: "Kazi ya mwisho: andika mpango wako wa IPM wa msimu mmoja kwa zao moja shambani kwako: wadudu wakuu, angalau hatua tatu za kuzuia, utaratibu wako wa kukagua kila wiki na fomu ya kumbukumbu, viwango ulivyopata kutoka kwa afisa ugani, njia zisizo za kemikali utakazotumia kwanza, na mpango wa kiuatilifu kama hatua ya mwisho (bidhaa uliyoikagua kwenye orodha ya mamlaka, sheria za lebo, PPE yako, na jinsi utakavyobadilisha makundi).",
          youCanNow: "kuhakikisha kiuatilifu kimesajiliwa, kufuata lebo yake ukiwa na vifaa sahihi vya kujikinga, na kubadilisha makundi na kuweka kumbukumbu ili kupunguza kasi ya usugu.",
          quickCheck: [
            { objective: "O5", q: "Muuzaji wa pembejeo anakupa chupa ya dawa ya wadudu isiyo na lebo kwa bei ndogo. Unafanya nini?", options: ["Kuinunua; ni rahisi zaidi", "Kuichanganya na maji na kuijaribu", "Kuikataa na kununua bidhaa iliyofungwa, yenye lebo na iliyosajiliwa", "Kutumia nusu ya chupa"], answer: 2, why: "Bila lebo huwezi kujua ni nini, jinsi ya kuitumia kwa usalama, wala kama imesajiliwa." },
            { objective: "O6", q: "Mara iliyopita ulinyunyizia bidhaa ya kundi A. Mdudu bado yuko juu ya kiwango. Kipi ni bora?", options: ["Kunyunyizia kundi A tena kwa kipimo mara mbili", "Kunyunyizia bidhaa iliyosajiliwa ya kundi tofauti", "Kuchanganya kundi A na bidhaa nyingine mwenyewe", "Kunyunyizia kundi A kila siku"], answer: 1, why: "Kubadilisha kwenda kundi tofauti kunapunguza kasi ya usugu; vipimo mara mbili na michanganyiko ya nyumbani si salama na ni kinyume cha sheria." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kudhibiti wadudu kwa sumu kidogo",
        questions: [
          { objective: "O4", q: "Katika push-pull, nyasi ya mpakani inayozunguka mahindi:", options: ["Inavuta nondo wa vipekecha mabua mbali na mahindi", "Inasukuma nondo ndani ya mahindi", "Inaua mahindi", "Inachukua nafasi ya mbolea"], answer: 0, why: "Nyasi ya mpakani (brachiaria au Napier) inavutia na kuwanasa nondo." },
          { objective: "O4", q: "Ipi ni njia ya kudhibiti ya kibiolojia?", options: ["Dawa ya wadudu inayoua wadudu wa aina nyingi", "Bidhaa inayotokana na bakteria Bt", "Kuchoma shamba", "Kumwagilia usiku"], answer: 1, why: "Bidhaa za Bt zinatumia bakteria kuua baadhi ya viwavi." },
          { objective: "O5", q: "Nani anaweka orodha ya viuatilifu vilivyosajiliwa nchini Kenya?", options: ["Ofisi ya barabara ya kaunti", "Muuzaji wa pembejeo", "Pest Control Products Board (PCPB)", "Kampuni ya mbegu"], answer: 2, why: "PCPB inasajili bidhaa za kudhibiti wadudu nchini Kenya." },
          { objective: "O5", q: "Unapata wapi muda wa kusubiri kati ya kunyunyizia na kuvuna?", options: ["Kumuuliza jirani", "Kukisia kutokana na hali ya hewa", "Ni siku moja kila wakati", "Kwenye lebo ya bidhaa (muda wa kusubiri kabla ya kuvuna)"], answer: 3, why: "Lebo inatoa muda wa kusubiri kabla ya kuvuna kwa kila zao." },
          { objective: "O6", q: "Kwa nini ubadilishe makundi ya viuatilifu?", options: ["Kupunguza kasi ya wadudu kuwa sugu", "Kufanya shamba linukie tofauti", "Kwa sababu kundi moja ni haramu kila wakati", "Kumaliza akiba ya zamani"], answer: 0, why: "Kutumia kundi lile lile tena na tena kunachagua wadudu wanaonusurika." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Udhibiti Jumuishi wa Wadudu na Udhibiti wa Wadudu kwa Njia za Asili",
    questions: [
      { objective: "O1", q: "Hatua nne za IPM, kwa mpangilio, ni zipi?", options: ["Nyunyizia, subiri, nyunyizia, vuna", "Zuia, fuatilia, amua, chukua hatua", "Nunua, changanya, nyunyizia, uza", "Lima, panda, nyunyizia, hifadhi"], answer: 1, why: "IPM inaanza na kuzuia na inatumia viuatilifu tu baada ya kufuatilia na kuamua." },
      { objective: "O1", q: "Hatua ipi inasaidia kuzuia wadudu kuhama kutoka shamba moja hadi jingine?", options: ["Kupanda wakati tofauti na majirani zako", "Kuacha mimea iliyoota yenyewe", "Kupanda kwa wakati, pamoja na majirani zako", "Kuacha magugu yanayohifadhi wadudu"], answer: 2, why: "Kupanda pamoja hakuachi mashamba ya kuchelewa ambayo wadudu wanaweza kuhamia." },
      { objective: "O1", q: "Kwa nini ukuze miche ya nyanya katika kitalu safi chenye neti?", options: ["Ili miche ifike shambani bila Tuta absoluta wala inzi weupe", "Ili isihitaji maji", "Kwa sababu neti zinaongeza mbolea", "Ili ikue haraka gizani"], answer: 0, why: "Miche safi iliyokuzwa ndani ya neti inazuia wadudu kufika pamoja na zao." },
      { objective: "O2", q: "Njia ya kukagua shamba katika kozi hii inakagua mimea mingapi ya mahindi?", options: ["5", "10", "100 karibu na lango", "50: mimea 10 mahali 5 kwenye njia ya W"], answer: 3, why: "Vituo vitano vya mimea 10 kwenye njia ya W vinatoa picha sahihi ya shamba." },
      { objective: "O2", q: "Kiwavi ana Y iliyopinduka kichwani na madoa manne meusi yaliyopangwa kama mraba karibu na mkia. Ni:", options: ["Kiwavijeshi vamizi", "Kiwavi wa ladybird", "Tuta absoluta", "Lacewing"], answer: 0, why: "Alama hizo zinamtambulisha kiwavi wa kiwavijeshi vamizi." },
      { objective: "O2", q: "Kipi kati ya hivi ni adui wa asili unayepaswa kumwandika na kumlinda?", options: ["Nondo wa kiwavijeshi vamizi", "Inzi mweupe", "Ladybird", "Kiduha"], answer: 2, why: "Ladybird hula vidukari na wadudu wengine wadogo waharibifu." },
      { objective: "O2", q: "Unakuta madhara usiyoweza kuyatambua. Hatua bora inayofuata ni:", options: ["Kunyunyizia bidhaa yenye nguvu zaidi uliyo nayo", "Kuyapiga picha na kumuuliza afisa ugani au kliniki ya mimea", "Kuyapuuza", "Kuchoma shamba lote"], answer: 1, why: "Kutambua tatizo kwa usahihi kunatangulia hatua yoyote ya kudhibiti." },
      { objective: "O3", q: "Ulikagua mimea 40 na 10 ilikuwa imeshambuliwa. Asilimia ni ngapi?", options: ["10%", "40%", "4%", "25%"], answer: 3, why: "10 / 40 x 100 = 25%." },
      { objective: "O3", q: "Kiwango chako cha kuchukua hatua kinapaswa kutoka wapi?", options: ["Tangazo la kiuatilifu", "Afisa ugani wako au taasisi ya utafiti, kwa hatua ya zao lako", "Namba kubwa zaidi unayoweza kufikiria", "Makisio ya jirani"], answer: 1, why: "Viwango vinategemea hatua ya zao na utafiti wa eneo." },
      { objective: "O3", q: "Hesabu yako iko juu ya kiwango. Unafanya nini?", options: ["Kuchukua hatua, ukianza na njia bora isiyo ya kemikali, na kuiandika", "Kusubiri hadi mavuno", "Kuacha kukagua shamba", "Kupanda tena"], answer: 0, why: "Juu ya kiwango, hatua inalipa; IPM inaanza na njia zisizo za kemikali." },
      { objective: "O4", q: "Push-pull ilibuniwa na:", options: ["Kampuni ya viuatilifu", "icipe na washirika", "Duka la mbegu", "Benki"], answer: 1, why: "icipe ilibuni push-pull pamoja na washirika Afrika Mashariki." },
      { objective: "O4", q: "Mbali na wadudu, desmodium katika push-pull pia:", options: ["Inavutia kiduha zaidi", "Inahitaji kunyunyiziwa kila siku", "Inaua ng'ombe", "Inazuia kiduha na kuongeza naitrojeni"], answer: 3, why: "Desmodium inazuia kiduha, inaongeza naitrojeni udongoni na ni chakula kizuri cha mifugo." },
      { objective: "O4", q: "Kadi za bluu zenye gundi zinatumiwa hasa kunasa:", options: ["Thrips", "Viwavi wa viwavijeshi vamizi", "Panya", "Mchwa"], answer: 0, why: "Kadi za bluu zinavutia thrips; kadi za njano zinavutia inzi weupe na vidukari." },
      { objective: "O4", q: "Unapaswa kufanya nini na majani yaliyotobolewa na Tuta na matunda yaliyoharibika uliyoyachuma?", options: ["Kuyaacha ardhini", "Kuyalisha zao linalofuata la nyanya", "Kuyauza", "Kuyazika chini sana au kuyafunga ndani ya mfuko juani"], answer: 3, why: "Yakiachwa ardhini, viwavi walio ndani yake wanamaliza kukua na kushambulia tena." },
      { objective: "O5", q: "Nchini Nigeria, shirika gani linasajili viuatilifu?", options: ["Benki Kuu", "Shirika la Hali ya Hewa la Nigeria", "NAFDAC", "Baraza la mbegu"], answer: 2, why: "NAFDAC inasajili viuatilifu nchini Nigeria." },
      { objective: "O5", q: "Kanuni ipi ya vifaa vya kujikinga ni sahihi?", options: ["Vaa vitu ambavyo lebo inaorodhesha, kama glavu, buti, mikono mirefu, kinga ya macho na barakoa", "Kaptula zinafaa siku za joto", "Glavu ni kwa wanawake tu", "Vifaa vya kujikinga ni kwa mashamba makubwa tu"], answer: 0, why: "Lebo inaorodhesha vifaa vya kujikinga vinavyohitajika kwa bidhaa hiyo." },
      { objective: "O5", q: "Ni wapi hupaswi kamwe kuweka kiuatilifu?", options: ["Katika chombo chake cha asili", "Katika stoo iliyofungwa kwa kufuli", "Katika chupa ya soda au ya maji", "Mbali na chakula na watoto"], answer: 2, why: "Kiuatilifu ndani ya chupa za vinywaji kinasababisha sumu kwa watu wengi." },
      { objective: "O6", q: "Mdudu haufi tena kwa bidhaa iliyokuwa ikifanya kazi. Hii inaitwa:", options: ["Mzunguko", "Usugu", "Kiwango", "Uchavushaji"], answer: 1, why: "Usugu unajengeka pale kundi lile lile la kemikali linapotumiwa tena na tena." },
      { objective: "O6", q: "Tabia ipi inaharakisha usugu?", options: ["Kubadilisha makundi", "Kunyunyizia tu juu ya kiwango", "Kuweka kumbukumbu ya unyunyiziaji", "Kunyunyizia bidhaa ile ile kila baada ya siku chache"], answer: 3, why: "Kutumia kundi lile lile mara kwa mara kunachagua wadudu wanaonusurika." },
      { objective: "O6", q: "Nini kinapaswa kuwa katika kumbukumbu ya unyunyiziaji?", options: ["Tarehe, bidhaa, kundi, kipimo, shamba na tarehe ya kuruhusiwa kuvuna", "Bei tu", "Hali ya hewa tu", "Hakuna; kumbukumbu hazihitajiki"], answer: 0, why: "Maelezo haya yanakuwezesha kubadilisha makundi na kuheshimu muda wa kusubiri kabla ya kuvuna." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 3, 4, 7, 9, 11, 14, 16, 17] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo ya mpango na uikague tena pamoja na afisa ugani wako.",
    criteria: [
      { name: "Kuzuia", objective: "O1", notYet: "Hakuna hatua za kuzuia, au \"nyunyizia mapema\" tu.", meets: "Angalau hatua tatu za kuzuia zinazofaa zao (mbegu, mzunguko, wakati, usafi au mipaka).", exceeds: "Hatua za kuzuia zimepangwa kwenye kalenda na kukubaliwa na majirani, kama kupanda pamoja." },
      { name: "Utaratibu wa kukagua shamba", objective: "O2", notYet: "Ukaguzi ni \"ninapoona madhara\", bila idadi ya mimea.", meets: "Siku maalum kila wiki, njia ya W, idadi maalum ya mimea na fomu ya kumbukumbu yenye safu za wadudu na maadui wa asili.", exceeds: "Ina picha za wadudu wakuu na maadui wa asili za kuwatambua, na kumbukumbu imetumika kwa angalau wiki mbili." },
      { name: "Viwango na maamuzi", objective: "O3", notYet: "Hakuna viwango; hatua zinachukuliwa kwa mazoea.", meets: "Kiwango kutoka kwa afisa ugani kwa kila mdudu mkuu, na njia ya kukokotoa asilimia imeandikwa.", exceeds: "Viwango vimeorodheshwa kwa hatua ya zao, na kuna mfano uliokokotolewa kutokana na hesabu za mwanafunzi mwenyewe." },
      { name: "Njia zisizo za kemikali kwanza", objective: "O4", notYet: "Kiuatilifu ndiyo njia ya kwanza na pekee.", meets: "Angalau njia mbili zisizo za kemikali (push-pull, mitego, kuokota kwa mkono, maadui wa asili, za kibiolojia au za mimea) zimepangwa kabla ya kiuatilifu chochote.", exceeds: "Njia zisizo za kemikali tayari zimewekwa, kama mitego iliyotundikwa au kipande cha push-pull kilichopandwa." },
      { name: "Hatua ya mwisho salama na halali", objective: "O5", notYet: "Bidhaa haijakaguliwa au mpango unaruka lebo au PPE.", meets: "Bidhaa imekaguliwa kwenye orodha ya mamlaka ya nchi, na mpango unafuata lebo, unaorodhesha PPE na unataja muda wa kusubiri kabla ya kuvuna kutoka kwenye lebo.", exceeds: "Pia una uhifadhi salama, utupaji wa vyombo vitupu kama lebo inavyosema, na hatua za huduma ya kwanza." },
      { name: "Usugu na kumbukumbu", objective: "O6", notYet: "Bidhaa moja imetumiwa msimu mzima, hakuna kumbukumbu ya unyunyiziaji.", meets: "Kumbukumbu ya unyunyiziaji na kubadilisha kati ya angalau makundi mawili.", exceeds: "Kubadilisha makundi kumepangwa kwa kizazi cha wadudu, na kumbukumbu zina gharama ya kila njia ya kudhibiti." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaoripoti kukagua shamba kila wiki na kuweka kumbukumbu za wadudu siku 30 baadaye (utafiti wa kufuatilia)",
      "Unyunyiziaji mchache wa viuatilifu kwa msimu unaoripotiwa na wanafunzi, huku mavuno yakibaki sawa au kuongezeka",
      "Wanafunzi wanaoweka angalau njia moja isiyo ya kemikali (push-pull, mitego, bidhaa za kibiolojia) ndani ya msimu mmoja",
      "Ripoti chache za sumu ya viuatilifu au mazao yaliyokataliwa kutoka vikundi vya wanafunzi (maoni ya maafisa ugani na wanunuzi)"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu (kamera inasaidia) au daftari na kalamu kwa kumbukumbu za ukaguzi",
      "Shamba lenye zao, ikiwezekana mahindi, mtama au nyanya",
      "Si lazima: lenzi ya mkono, mtego wa feromoni na kadi zenye gundi za kuonyesha kikundi",
      "Mawasiliano ya afisa ugani wa eneo au kliniki ya mimea, na tovuti ya mamlaka ya viuatilifu ya nchi",
      "Kama dakika 60 hadi 90 kwa jumla kwa masomo, majaribio mafupi na mitihani, pamoja na ukaguzi wa kila wiki shambani"
    ],
    facilitatorNotes: [
      "Endesha kozi kama shule ya mkulima shambani ikiwezekana: fanyeni jaribio la awali pamoja, kisha kagueni shamba halisi kama kikundi baada ya Masomo ya 2 na 3.",
      "Leta sampuli halisi au picha za viwavijeshi vamizi, Tuta absoluta na maadui wa asili ili wanafunzi wajizoeze kuwatambua.",
      "Pata viwango vya eneo kutoka huduma ya ugani au taasisi ya utafiti kabla ya kipindi; usivibuni.",
      "Kamwe usipendekeze bidhaa ya kiuatilifu, kipimo au muda wa kusubiri kabla ya kuvuna; badala yake waonyeshe wanafunzi jinsi ya kusoma lebo na orodha ya mamlaka.",
      "Usishike viuatilifu katika kipindi bila PPE kamili; tumia chombo kitupu, safi chenye lebo kujizoeza kusoma lebo.",
      "Pima mpango wa mwisho wa IPM kwa rubriki na mkubaliane uboreshaji mmoja kwa kila mwanafunzi kwa msimu ujao."
    ]
  }
};
