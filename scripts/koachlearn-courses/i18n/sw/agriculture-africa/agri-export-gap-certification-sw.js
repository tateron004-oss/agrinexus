"use strict";

// Koach Learn course (Swahili translation of agriculture-africa/agri-export-gap-certification.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const GGAP_IFA = { name: "GLOBALG.A.P.: Integrated Farm Assurance (IFA, Uhakikisho Jumuishi wa Shamba) kwa matunda na mboga (mada, chaguo la kikundi cha wazalishaji, vipengele vya gharama, hatua za kupata cheti)", url: "https://globalgap.org/what-we-offer/solutions/ifa-fruit-and-vegetables/" };
const GGAP_PORTAL = { name: "GLOBALG.A.P.: Supply Chain Portal (kagua cheti kwa kutumia namba ya GLOBALG.A.P.)", url: "https://globalgap.org/supply-chain-portal/" };
const EU_MRL = { name: "Tume ya Ulaya: EU Pesticides Database (viwango vya juu vya mabaki kwa kila chakula na kiuatilifu)", url: "https://food.ec.europa.eu/plants/pesticides/eu-pesticides-database_en" };
const CODEX = { name: "Codex Alimentarius (FAO/WHO): viwango vya kimataifa vya chakula, pamoja na vikomo vya mabaki ya viuatilifu", url: "https://codex.fao.org/" };
const KE_VEG_DROP = { name: "Business Daily (takwimu za KNBS, ripoti ya AFA): mapato ya Kenya ya kuuza mboga nje yashuka kwa sababu ya sheria za EU za viuatilifu; mizigo iliyozuiliwa kwa MRL iliongezeka kutoka 25 (2023) hadi 57 (2024)", url: "https://www.businessdailyafrica.com/bd/economy/kenya-s-vegetable-export-earnings-down-on-eu-pesticide-rules-5392706" };
const FAO_PEST_REG = { name: "FAO Pesticide Registration Toolkit: rejista za kitaifa za viuatilifu barani Afrika", url: "https://www.fao.org/pesticide-registration-toolkit/information-sources/registrations-elsewhere/africa/en" };
const KE_AFA = { name: "Mamlaka ya Kilimo na Chakula Kenya (AFA), Kurugenzi ya Mazao ya Bustani (Horticultural Crops Directorate): leseni za kuuza nje na usajili (kagua sheria za sasa)", url: "https://www.afa.go.ke" };
const KEPHIS_PHYTO = { name: "KEPHIS (Kenya): huduma za afya ya mimea na vyeti vya kuuza nje", url: "https://www.kephis.go.ke/phytosanitary-services" };
const NEPC = { name: "Nigerian Export Promotion Council (Baraza la Kukuza Mauzo ya Nje la Nigeria): usajili wa wauzaji nje mtandaoni", url: "https://nepc.gov.ng/get-started/e-registration/" };
const GEPA = { name: "Ghana Export Promotion Authority (GEPA, Mamlaka ya Kukuza Mauzo ya Nje ya Ghana): jisajili kama muuzaji nje", url: "https://www.gepaghana.org/" };

module.exports = {
  id: "agri-export-gap-certification-sw",
  lang: "sw",
  translationOf: "agri-export-gap-certification",
  category: "Agriculture (Africa)",
  name: "Kuuzia Supamaketi, Viwanda vya Usindikaji na Wanunuzi wa Nje: Viwango na Vyeti",
  skills: "Kusoma mahitaji ya mnunuzi, Kutumia Kanuni Bora za Kilimo, Kuweka kumbukumbu za ufuatiliaji, Kupima faida ya cheti, Kufikia vikomo vya mabaki na sheria za kuuza nje, Kuandika ofa ya ugavi",
  outcome: "kukagua kama shamba au kikundi chako kiko tayari kuuzia supamaketi, kiwanda cha usindikaji au mnunuzi wa nje, kuziba mapengo makuu katika kanuni za kilimo, kumbukumbu na vyeti, na kuandika ofa ya ugavi unayoweza kuitekeleza.",
  about: [
    "Supamaketi, viwanda vya usindikaji na wanunuzi wa nje wanaweza kununua mengi zaidi kuliko soko la mtaani, na mara nyingi hulipa zaidi kwa ubora usiobadilika. Lakini wanaomba mambo ambayo mashamba mengi madogo bado hayafanyi: kiasi cha kutosha kila wakati, daraja lile lile kila mara, kumbukumbu zinazofuatilia kila kreti, usalama wa chakula, na wakati mwingine cheti kama GLOBALG.A.P. Kozi hii ni kwa wakulima wa kibiashara wanaokua, vikundi vya wazalishaji, vijana wajasiriamali wa kilimo na maafisa ugani nchini Kenya, Nigeria, Ghana, Senegal na kote Afrika.",
    "Utajifunza wanunuzi wakubwa wanataka nini, Kanuni Bora za Kilimo zilizo nyuma yake, jinsi ya kuweka kumbukumbu zinazofuatilia mazao hadi shambani, gharama na faida za cheti, kwa nini mizigo ya kuuza nje hukataliwa kwa sababu ya mabaki ya viuatilifu, mashirika gani ya kitaifa yanasimamia mauzo ya nje, na jinsi ya kukutana na mnunuzi, kujadili mkataba wa ugavi na kupima mpango wa wakulima wa mkataba (outgrower).",
    "Inajengwa juu ya kozi \"Vyama vya Ushirika vya Wakulima na Kufikia Soko\", inayohusu kuuza kama kikundi na kusoma mkataba. Kila somo linachukua kama dakika tano na linaisha kwa kazi ya \"Jaribu sasa\". Sheria, ada na vikomo hubadilika, kwa hiyo kila somo linakuambia mahali pa kukagua. Takwimu za pesa ni mifano tu."
  ],
  finalTask: "Tengeneza orodha ya kukagua utayari kwa mnunuzi kwa shamba au kikundi chako, kwa zao moja na aina moja ya mnunuzi (supamaketi, kiwanda cha usindikaji au muuzaji nje), ukionyesha unachokifikia tayari na unachopaswa kurekebisha. Kisha andika ofa ya ugavi ya ukurasa mmoja kwa mnunuzi huyo: zao na daraja, kiasi na ratiba, jinsi unavyoweka mazao salama na yanayofuatilika, cheti chochote, msingi wa bei, na masharti unayotaka katika mkataba.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wakulima wa kibiashara wanaokua, vikundi vya wazalishaji na vyama vya ushirika, mameneja wa mashamba, vijana wajasiriamali wa kilimo na maafisa ugani nchini Kenya, Nigeria, Ghana, Afrika Magharibi inayozungumza Kifaransa na kote Afrika, wanaouza mazao ya bustani (maharagwe ya Kifaransa, parachichi, embe, nanasi, nyanya) au vyakula vikuu (muhogo, mahindi, mtama, mchele) kwa wanunuzi wakubwa.",
    startingPoint: "Wanaweza kulima zao zuri na kuuza sokoni mtaani au kupitia kikundi. Baadhi huweka kumbukumbu za msingi za shamba. Wachache wanajua supamaketi au muuzaji nje hukagua nini, vyeti hufanyaje kazi, au kikomo cha mabaki ni nini.",
    gap: "Wanunuzi wakubwa huwakataa wakulima wasioweza kuonyesha kiasi na daraja lisilobadilika, kumbukumbu zinazofuatilika na matumizi salama ya viuatilifu. Mdhibiti wa Kenya mwenyewe alihusisha kushuka sana kwa mapato ya kuuza mboga nje hasa na mizigo iliyozuiliwa na EU kwa mabaki ya viuatilifu. Wakulima wanahitaji kuona mapengo yao, kurekebisha kanuni na kumbukumbu, kupima faida ya cheti na kutoa ofa wanayoweza kuitekeleza.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; wanafunzi wengi wanatumia lugha hii kama lugha ya pili",
      "Vifaa: simu ya kawaida au simu janja; vitabu vya kumbukumbu vya karatasi",
      "Pesa: vyeti na vipimo vinagharimu pesa; chaguo za kikundi ni muhimu kwa mashamba madogo",
      "Sheria: leseni za kuuza nje, vikomo vya mabaki na sheria za vyeti hubadilika na hutofautiana kwa nchi na soko; wanafunzi hukagua vyanzo rasmi",
      "Usalama: viuatilifu vilivyosajiliwa tu, vinavyotumiwa kama lebo inavyosema, kwa vifaa vya kujikinga; hakuna namba za vipimo vya dawa katika kozi"
    ],
    prerequisites: "Inasaidia: \"Vyama vya Ushirika vya Wakulima na Kufikia Soko\", na \"Kumbukumbu za Shamba na Misingi ya Biashara\" (Biashara ya Kilimo na Usimamizi wa Shamba). Kusoma na kujumlisha kwa msingi."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa mahitaji ya supamaketi, kiwanda cha usindikaji au mnunuzi wa nje", action: "kuorodhesha anachoomba mnunuzi na kulinganisha na kile shamba au kikundi chako kinachotoa sasa", standard: "ukihusisha kiasi, uthabiti, daraja, ufuatiliaji na usalama wa chakula, na kila pengo likiwa limeonyeshwa" },
    { id: "O2", condition: "Kwa zao moja shambani kwako", action: "kuandika Kanuni Bora za Kilimo utakazofuata", standard: "zikihusisha viuatilifu vilivyosajiliwa vinavyotumiwa kama lebo inavyosema, vifaa vya kujikinga, muda wa kusubiri kabla ya mavuno ulio kwenye lebo, maji safi, usafi wakati wa mavuno na usalama wa wafanyakazi" },
    { id: "O3", condition: "Ukipewa cheti kama GLOBALG.A.P.", action: "kulinganisha gharama na faida zake kwa shamba au kikundi chako na kutaja njia utakayochagua", standard: "ukitaja vipengele vitatu vya gharama, hatua za kufikia ukaguzi na kama chaguo la kikundi linafaa" },
    { id: "O4", condition: "Kwa msimu mmoja wa zao moja", action: "kuweka kumbukumbu za ufuatiliaji zinazounganisha kila kundi la mavuno na shamba lake, pembejeo na tarehe ya mavuno", standard: "ili kreti yoyote ifuatiliwe hadi shambani na kila unyunyiziaji ndani ya dakika chache" },
    { id: "O5", condition: "Ukipewa soko la nje unalolenga", action: "kukagua vikomo vya mabaki na mashirika ya kitaifa ya kuuza nje yanayohusika", standard: "ukitaja mahali pa kupata vikomo (kwa mfano EU Pesticides Database au Codex) na mashirika ya nchi yako ya kuuza nje na ya afya ya mimea" },
    { id: "O6", condition: "Ukipewa mkutano na mnunuzi au ofa ya mpango wa wakulima wa mkataba", action: "kuandika ofa ya ugavi na masharti ya mkataba unayohitaji", standard: "ukieleza daraja, kiasi, ratiba, msingi wa bei, sheria za kukataa mazao, masharti ya malipo na kinachotokea upande wowote ukishindwa" }
  ],
  chapters: [
    {
      name: "Sura 1: Wanunuzi wakubwa wanataka nini, na kuandaa shamba lako",
      lessons: [
        {
          title: "Supamaketi, viwanda vya usindikaji na wauzaji nje wanataka nini",
          objectives: ["O1"],
          minutes: 5,
          goal: "Orodhesha mahitaji ya mnunuzi mkubwa na uonyeshe mahali shamba lako halijafikia.",
          text: [
            "Wanunuzi wakubwa huwauzia wateja wanaotarajia bidhaa ile ile, salama na iliyoko rafuni, kila wiki. Kwa hiyo wanataka mambo matano kutoka kwako: kiasi (cha kutosha kujaza oda zao), uthabiti (ugavi wiki baada ya wiki, si wakati wa mavuno tu), daraja (ukubwa, rangi, kuiva na kasoro kulingana na maelezo yao), ufuatiliaji (wanaweza kujua kreti ilitoka shamba gani na kipande gani) na usalama wa chakula (bila mabaki hatari, vijidudu wala uchafu).",
            "Kila mnunuzi ni tofauti. Supamaketi jijini Nairobi au Accra inaweza kutaka nyanya za ukubwa fulani na kreti fulani, zikiletwa mara mbili kwa wiki. Kiwanda cha usindikaji nchini Nigeria kinachonunua muhogo kwa wanga au nyanya kwa rojo kinataka kiasi kikubwa kwa ubora uliowekwa, na huenda kisijali sana sura. Muuzaji nje anayesafirisha maharagwe ya Kifaransa kutoka Kenya au maembe kutoka Senegal kwenda Ulaya lazima afuate sheria za nchi inayoagiza, na mara nyingi huomba cheti.",
            "Mwombe mnunuzi maelezo yake ya bidhaa (specification) kwa maandishi. Kisha yalinganishe, jambo kwa jambo, na kile unachotoa sasa. Mapengo utakayoyapata ndiyo mpango wako wa kazi. Mashamba mengi madogo huziba mapengo ya kiasi na uthabiti kwa kufanya kazi kama kikundi na kupanda kwa tarehe tofauti tofauti."
          ],
          steps: ["Mwombe mnunuzi mmoja maelezo yake ya bidhaa kwa maandishi na ukubwa wa oda yake.", "Orodhesha mahitaji yake chini ya kiasi, uthabiti, daraja, ufuatiliaji na usalama wa chakula.", "Kando ya kila moja, andika kile shamba au kikundi chako kinachotoa sasa.", "Onyesha kila pengo na jinsi unavyoweza kuliziba (kwa mfano kama kikundi au kwa kupanda kwa tarehe tofauti)."],
          words: [["Maelezo ya bidhaa (specification)", "maelezo ya maandishi ya mnunuzi kuhusu bidhaa anayotaka: ukubwa, rangi, kuiva, ufungaji na kasoro zinazoruhusiwa."], ["Ufuatiliaji (traceability)", "uwezo wa kufuatilia mazao hadi shamba, kipande na pembejeo yalikotoka."], ["Uthabiti", "kutoa ubora na kiasi kile kile, kwa wakati, tena na tena."]],
          slides: [
            { title: "Mambo matano wanayotaka wanunuzi wakubwa", bullets: ["Kiasi na uthabiti", "Daraja kulingana na maelezo yao", "Ufuatiliaji na usalama wa chakula"] },
            { title: "Wanunuzi hutofautiana", bullets: ["Supamaketi: ukubwa fulani, kreti, mara mbili kwa wiki", "Kiwanda cha usindikaji: kiasi kikubwa, ubora uliowekwa", "Muuzaji nje: sheria za nchi inayoagiza, mara nyingi cheti"] },
            { title: "Tafuta mapengo yako", bullets: ["Pata maelezo ya bidhaa kwa maandishi", "Linganisha jambo kwa jambo na unachotoa", "Mapengo = mpango wako wa kazi; kikundi kinaweza kuziba pengo la kiasi"] }
          ],
          tryIt: "Chagua mnunuzi mmoja mkubwa karibu nawe (supamaketi, kiwanda cha usindikaji au muuzaji nje). Andika mahitaji yake chini ya vichwa vitano, unachotoa sasa kando ya kila kimoja, na uonyeshe mapengo. Huu ni mwanzo wa orodha yako ya kukagua utayari kwa mnunuzi.",
          youCanNow: "kuorodhesha anachotaka mnunuzi mkubwa na kuonyesha mahali shamba au kikundi chako hakijafikia.",
          quickCheck: [
            { objective: "O1", q: "Supamaketi inataka nyanya kila wiki mwaka mzima. Wewe unavuna mara moja kwa msimu. Unakosa hitaji gani?", options: ["Daraja", "Uthabiti wa ugavi", "Ufuatiliaji", "Usalama wa chakula"], answer: 1, why: "Kutoa kila wiki, si wakati wa mavuno tu, ndio uthabiti." },
            { objective: "O1", q: "Ni njia gani bora ya kujua hasa mnunuzi anataka nini?", options: ["Kukisia kutokana na kilicho dukani kwake", "Kumuuliza jirani aliyewahi kumuuzia mara moja", "Kutuma mazao na kuona kama atayakubali", "Kumwomba maelezo yake ya bidhaa kwa maandishi"], answer: 3, why: "Maelezo ya bidhaa ya maandishi yanaonyesha hasa ukubwa, ubora na ufungaji atakaoukubali mnunuzi." }
          ]
        },
        {
          title: "Kanuni Bora za Kilimo shambani kwako",
          objectives: ["O2"],
          minutes: 6,
          goal: "Andika Kanuni Bora za Kilimo utakazofuata kwa zao moja.",
          text: [
            "Kanuni Bora za Kilimo (GAP, Good Agricultural Practices) ni tabia za shambani zinazoweka mazao salama, zinazolinda wafanyakazi na mazingira, na kufanya ubora usibadilike. Mipango ya vyeti na wanunuzi huzikagua. Unaweza kuanza nyingi kati yake kwa pesa kidogo.",
            "Viuatilifu: tumia bidhaa zilizosajiliwa na shirika lako la kitaifa tu (kwa mfano Pest Control Products Board ya Kenya, NAFDAC ya Nigeria au EPA ya Ghana), kagua orodha yake ya sasa, na uzitumie kama lebo inavyosema hasa. Vaa vifaa vya kujikinga ambavyo lebo inaomba, hifadhi kemikali zikiwa zimefungwa mbali na chakula, na uheshimu muda wa kusubiri kabla ya mavuno ulio kwenye lebo, yaani muda kati ya unyunyiziaji wa mwisho na mavuno. Kunyunyizia karibu mno na mavuno ni sababu kuu ya mazao kukataliwa kwa mabaki. Tumia udhibiti jumuishi wa wadudu ili unyunyizie kidogo.",
            "Pia: maji safi ya kunyunyizia, kuosha na kumwagilia; kreti safi za mavuno zisizowekwa chini ardhini; vyoo na mahali pa kunawa mikono kwa wafanyakazi; wanyama wala samadi wasiwe karibu na mazao muda mfupi kabla ya mavuno; huduma ya kwanza na mafunzo kwa wafanyakazi; na utupaji salama wa vyombo vitupu kama lebo au shirika lako la kitaifa linavyosema. Andika haya kama sheria za GAP za shamba lako."
          ],
          steps: ["Hakikisha kila kiuatilifu unachotumia kiko kwenye rejista ya shirika lako la kitaifa.", "Andika vifaa vya kujikinga na muda wa kusubiri kabla ya mavuno kutoka kwenye lebo kando ya kila bidhaa.", "Weka mahali pa kunawa mikono, vyoo na kreti safi kwa ajili ya mavuno.", "Andika sheria zako za GAP na umfundishe kila mfanyakazi."],
          words: [["Kanuni Bora za Kilimo (GAP)", "tabia za shambani zinazoweka mazao salama na kulinda wafanyakazi na mazingira."], ["Muda wa kusubiri kabla ya mavuno", "muda ulioandikwa kwenye lebo kati ya unyunyiziaji wa mwisho na mavuno."], ["Kiuatilifu kilichosajiliwa", "bidhaa ambayo shirika lako la kitaifa limeiruhusu kwa zao hilo na matumizi hayo."], ["Udhibiti jumuishi wa wadudu (IPM)", "kudhibiti wadudu kwa njia kadhaa ili unyunyizie tu inapohitajika."]],
          slides: [
            { title: "GAP inahusu nini", bullets: ["Mazao salama", "Usalama na ustawi wa wafanyakazi", "Mazingira na ubora usiobadilika"] },
            { title: "Viuatilifu kwa njia sahihi", bullets: ["Bidhaa zilizosajiliwa tu: kagua orodha za PCPB, NAFDAC, EPA ya Ghana", "Hasa kama lebo inavyosema, kwa vifaa vya kujikinga", "Heshimu muda wa kusubiri kabla ya mavuno ulio kwenye lebo"] },
            { title: "Mavuno safi", bullets: ["Maji safi; kreti zisiwe chini ardhini", "Vyoo na kunawa mikono kwa wafanyakazi", "Wanyama wala samadi wasiwe karibu na mazao wakati wa mavuno"] },
            { title: "Iandike na uifundishe", bullets: ["Sheria za GAP za shamba lako kwenye ukurasa mmoja", "Mfundishe kila mfanyakazi", "Hifadhi kemikali zikiwa zimefungwa, mbali na chakula"] }
          ],
          sources: [FAO_PEST_REG],
          tryIt: "Andika sheria za GAP za shamba lako kwa zao moja kwenye ukurasa mmoja: viuatilifu vilivyosajiliwa unavyotumia pamoja na vifaa vya kujikinga na muda wa kusubiri kabla ya mavuno kutoka kwenye lebo, usafi wa maji na wa mavuno, na usalama wa wafanyakazi. Ongeza mapengo kwenye orodha yako ya kukagua utayari kwa mnunuzi.",
          youCanNow: "kuandika sheria za Kanuni Bora za Kilimo kwa zao moja, pamoja na matumizi salama ya viuatilifu vilivyosajiliwa.",
          quickCheck: [
            { objective: "O2", q: "Unapata wapi muda wa kusubiri kati ya unyunyiziaji wa mwisho na mavuno?", options: ["Kwenye lebo ya bidhaa (muda wa kusubiri kabla ya mavuno)", "Kwa dereva wa mnunuzi", "Kutoka kumbukumbu ya jirani", "Haijalishi kwa kuuza nje"], answer: 0, why: "Lebo inatoa muda wa kusubiri kabla ya mavuno; kuuheshimu kunaweka mabaki ndani ya vikomo." },
            { objective: "O2", q: "Mfanyabiashara anakupa kiuatilifu cha bei nafuu kisicho na namba ya usajili. Unafanya nini?", options: ["Ninakinunua kama ni cha bei nafuu", "Ninakichanganya na kilichosajiliwa", "Sikitumii; ninatumia bidhaa zilizo kwenye rejista ya kitaifa tu", "Ninatumia nusu ya kiasi"], answer: 2, why: "Bidhaa zisizosajiliwa zinaweza kuwa bandia au zilizopigwa marufuku, na zinaweza kusababisha mazao kukataliwa na madhara." }
          ]
        },
        {
          title: "Kumbukumbu zinazofuatilia kila kreti",
          objectives: ["O4"],
          minutes: 5,
          goal: "Weka kumbukumbu zinazofuatilia kreti hadi shambani kwake, pembejeo na tarehe ya mavuno.",
          text: [
            "Mnunuzi akipata mabaki au tatizo, atauliza: shamba gani, kipande gani, kilinyunyiziwa nini na lini? Kumbukumbu za ufuatiliaji zinajibu ndani ya dakika chache. Bila hizo, mnunuzi anaweza kukiacha kikundi kizima.",
            "Kipe kila kipande cha shamba msimbo, kwa mfano KB-F2 kwa shamba la Kiambu, kipande cha 2. Weka kumbukumbu ya unyunyiziaji na pembejeo kwa kila kipande: tarehe, jina la bidhaa na namba yake ya usajili, kiasi, aliyenyunyizia na muda wa kusubiri kabla ya mavuno kutoka kwenye lebo. Weka kumbukumbu ya mavuno: tarehe, msimbo wa kipande, kreti au kilo, na namba ya kundi la mavuno (lot number). Andika namba ya kundi kwenye kila kreti au hati ya kupeleka mzigo.",
            "Weka kumbukumbu kwenye daftari au jedwali rahisi kwenye simu, na uhifadhi risiti za pembejeo. Vikundi vya wazalishaji huweka rejista ya wanachama na kumbukumbu za kila mwanachama. Kenya inaanzisha upimaji ramani na usajili wa kidijitali wa mashamba ya kuuza nje, kwa hiyo kagua na AFA zao lako linahitaji nini."
          ],
          steps: ["Kipe kila kipande cha shamba msimbo mfupi.", "Weka kumbukumbu ya unyunyiziaji na pembejeo kwa kila kipande: tarehe, bidhaa, namba ya usajili, kiasi, aliyenyunyizia, muda wa kusubiri kabla ya mavuno.", "Weka kumbukumbu ya mavuno yenye namba ya kundi kwa kila mavuno.", "Andika namba ya kundi kwenye kila kreti au hati ya kupeleka mzigo.", "Fanya mazoezi: chagua kreti moja na uifuatilie nyuma ndani ya dakika chache."],
          words: [["Namba ya kundi (lot number)", "msimbo wa mavuno moja kutoka kipande kimoja kwa siku moja, unaoandikwa kwenye kreti."], ["Kumbukumbu ya unyunyiziaji", "orodha ya maandishi ya kila kiuatilifu kilichotumika: lini, nini, kiasi gani na nani."], ["Ukaguzi (audit)", "uchunguzi wa mnunuzi au mtoa cheti kuona kama unafanya unachosema."]],
          slides: [
            { title: "Kwa nini kufuatilia?", bullets: ["Mnunuzi apata tatizo: kipande gani, dawa gani, lini?", "Kumbukumbu nzuri zinajibu ndani ya dakika chache", "Bila kumbukumbu: kikundi kizima kinaweza kuachwa"] },
            { title: "Kumbukumbu tatu", bullets: ["Misimbo ya vipande (kwa mfano KB-F2)", "Kumbukumbu ya unyunyiziaji na pembejeo kwa kila kipande", "Kumbukumbu ya mavuno yenye namba ya kundi"] },
            { title: "Zifanye zifanye kazi", bullets: ["Namba ya kundi kwenye kila kreti", "Daftari au jedwali kwenye simu; hifadhi risiti", "Fanya mazoezi ya kufuatilia kreti"] }
          ],
          sources: [KE_AFA],
          tryIt: "Tengeneza kumbukumbu tatu kwa zao moja: misimbo ya vipande, kumbukumbu ya unyunyiziaji na pembejeo, na kumbukumbu ya mavuno yenye namba za kundi. Jaza mstari mmoja halisi au wa mazoezi katika kila moja, kisha ifuatilie kreti hiyo hadi kipande chake na unyunyiziaji wa mwisho.",
          youCanNow: "kuweka kumbukumbu za vipande, unyunyiziaji na mavuno zinazofuatilia kreti yoyote hadi kipande chake na pembejeo zake.",
          quickCheck: [
            { objective: "O4", q: "Ni nini kinachounganisha kreti iliyo rafuni kwa mnunuzi na kipande chako cha shamba?", options: ["Rangi ya kreti", "Jina la dereva", "Bei ya sokoni", "Namba ya kundi iliyoandikwa kwenye kreti na kwenye kumbukumbu yako ya mavuno"], answer: 3, why: "Namba ya kundi kwenye kreti na kwenye kumbukumbu zako inaifuatilia hadi kipande na tarehe." },
            { objective: "O4", q: "Ni taarifa gani inayofaa katika kumbukumbu ya unyunyiziaji?", options: ["Namba ya simu ya mnunuzi", "Tarehe, bidhaa, namba ya usajili, kiasi na aliyenyunyizia", "Utabiri wa hali ya hewa wa mwezi ujao", "Bei ya zao"], answer: 1, why: "Taarifa hizi zinaonyesha kilichonyunyiziwa na lini, jambo ambalo wanunuzi na watoa vyeti hukagua." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Wanunuzi wakubwa wanataka nini, na kuandaa shamba lako",
        questions: [
          { objective: "O1", q: "Ni lipi SI moja ya mambo matano ambayo wanunuzi wakubwa hutaka kwa kawaida?", options: ["Kiasi", "Ufuatiliaji", "Zawadi kwa mnunuzi", "Usalama wa chakula"], answer: 2, why: "Wanunuzi wanataka kiasi, uthabiti, daraja, ufuatiliaji na usalama wa chakula; zawadi si sharti." },
          { objective: "O1", q: "Kikundi chako kinaweza kujaza nusu tu ya oda ya kila wiki ya mnunuzi. Ni nini kinaweza kuziba pengo?", options: ["Wanachama zaidi na kupanda kwa tarehe tofauti tofauti", "Kutuma mazao ya daraja la chini", "Kuahidi zaidi ya ulicho nacho", "Kupuuza ukubwa wa oda"], answer: 0, why: "Wakulima zaidi na kupanda kwa tarehe tofauti huongeza kiasi na kuweka ugavi bila kukatika." },
          { objective: "O2", q: "Ni tabia gani ni sehemu ya GAP?", options: ["Kuhifadhi viuatilifu karibu na chakula", "Kunyunyizia siku moja kabla ya mavuno bila kujali lebo inasema nini", "Kuacha mbuzi walishe karibu na mazao wakati wa mavuno", "Kuvaa vifaa vya kujikinga ambavyo lebo inaomba"], answer: 3, why: "Kufuata lebo, pamoja na vifaa vya kujikinga, kunalinda wafanyakazi na mazao." },
          { objective: "O4", q: "Namba ya kundi ni nini?", options: ["Bei kwa kila kreti", "Msimbo wa mavuno moja kutoka kipande kimoja kwa siku moja", "Idadi ya wafanyakazi", "Ukubwa wa shamba"], answer: 1, why: "Namba ya kundi inatambulisha mavuno moja ili yaweze kufuatiliwa." },
          { objective: "O4", q: "Mnunuzi anaripoti mabaki katika mzigo mmoja. Kumbukumbu nzuri zinakuwezesha:", options: ["Kumlaumu mnunuzi", "Kubadilisha kumbukumbu", "Kuufuatilia hadi kipande na unyunyiziaji, na kurekebisha chanzo", "Kuacha kuuzia kila mtu"], answer: 2, why: "Ufuatiliaji unaonyesha tatizo lilianzia wapi ili ulirekebishe na umbakize mnunuzi." }
        ]
      }
    },
    {
      name: "Sura 2: Vyeti, sheria za kuuza nje na mikataba ya ugavi",
      lessons: [
        {
          title: "GLOBALG.A.P. na vyeti: gharama na faida",
          objectives: ["O3"],
          minutes: 6,
          goal: "Linganisha gharama na faida za cheti kwa shamba lako na uchague njia.",
          text: [
            "Kupata cheti maana yake ni kwamba shirika huru linakagua shamba lako dhidi ya kiwango fulani na linakupa cheti ukifaulu. GLOBALG.A.P. ndicho kiwango cha shamba kinachojulikana zaidi, kinachoombwa na supamaketi nyingi za Ulaya na wauzaji nje. Kiwango chake cha Integrated Farm Assurance (IFA) kwa matunda na mboga kinahusu usalama wa chakula na ufuatiliaji, afya, usalama na ustawi wa wafanyakazi, na mazingira (maji, mbolea, udhibiti wa wadudu na bidhaa za kulinda mimea). Baadhi ya wanunuzi huomba viwango vingine, kama vya kilimo hai (organic) au biashara ya haki (fair trade).",
            "GLOBALG.A.P. inasema kuna vipengele vitatu vya gharama: gharama zako mwenyewe za kujiandaa (mafunzo, vyoo, stoo ya kemikali, kumbukumbu); ada za shirika la kutoa cheti kwa ukaguzi na usafiri; na ada za usajili na leseni za GLOBALG.A.P., zinazotegemea eneo lako na chaguo lako. Ukaguzi hufanyika kila mwaka na cheti kinadumu mwaka mmoja. Kuna chaguo kwa vikundi vya wazalishaji, pamoja na wakulima wadogo, ambapo cheti kimoja cha kikundi kinawahusu wanachama wanaofuata mfumo mmoja wa ubora wenye ukaguzi wa ndani.",
            "Hatua ni hizi: pakua sheria na orodha ya kukagua bure, weka mahitaji hayo shambani, jifanyie tathmini binafsi, omba ukaguzi kutoka kwa shirika la kutoa cheti lililoidhinishwa linalofanya kazi nchini kwako, rekebisha matatizo yoyote ndani ya muda uliotolewa, na upokee cheti. Wanunuzi wanaweza kukagua vyeti kwenye Supply Chain Portal ya GLOBALG.A.P. Kabla ya kulipa, muulize mnunuzi wako: unahitaji cheti hiki, na utanunua zaidi au kulipa zaidi nikiwa nacho? Pata makadirio ya bei kutoka kwa zaidi ya shirika moja la kutoa cheti."
          ],
          steps: ["Muulize mnunuzi wako ni cheti gani, kama kipo, anachohitaji.", "Pakua sheria na orodha ya kukagua ya kiwango hicho bure na ujifanyie tathmini binafsi.", "Orodhesha vipengele vitatu vya gharama na upate makadirio ya bei kutoka kwa mashirika yaliyoidhinishwa ya kutoa cheti.", "Linganisha gharama na faida: wanunuzi wapya, kiasi zaidi au bei bora.", "Amua: cheti peke yako, cheti kama kikundi, au bado."],
          words: [["Cheti (certification)", "uchunguzi huru unaothibitisha kwamba shamba linafikia kiwango, unaothibitishwa kwa cheti."], ["Shirika la kutoa cheti", "kampuni iliyoidhinishwa inayokagua shamba lako na kutoa cheti."], ["Cheti cha kikundi", "cheti kimoja kwa kikundi cha wazalishaji ambacho wanachama wake hufuata mfumo mmoja wa ubora."], ["Tathmini binafsi", "kukagua shamba lako mwenyewe kwa orodha ya kiwango kabla ya ukaguzi halisi."]],
          slides: [
            { title: "GLOBALG.A.P. IFA inahusu nini", bullets: ["Usalama wa chakula na ufuatiliaji", "Afya, usalama na ustawi wa wafanyakazi", "Mazingira: maji, mbolea, udhibiti wa wadudu"] },
            { title: "Vipengele vitatu vya gharama", bullets: ["Gharama zako za kujiandaa", "Ada za ukaguzi na usafiri za shirika la kutoa cheti", "Ada za usajili na leseni za GLOBALG.A.P."] },
            { title: "Hatua za kupata cheti", bullets: ["Sheria na orodha bure; tathmini binafsi", "Ukaguzi na shirika lililoidhinishwa la kutoa cheti", "Rekebisha matatizo; cheti cha mwaka mmoja"] },
            { title: "Je, kinafaa?", bullets: ["Muulize mnunuzi kama anakihitaji", "Atanunua zaidi au kulipa zaidi?", "Chaguo la kikundi kwa wakulima wadogo; pata makadirio kadhaa"] }
          ],
          sources: [GGAP_IFA, GGAP_PORTAL],
          tryIt: "Kwa zao lako na mnunuzi wako, andika maelezo ya gharama na faida ya cheti: je, mnunuzi anakihitaji, vipengele vitatu vya gharama (pamoja na makadirio ya bei ukiweza kuyapata), faida unayotarajia, na uamuzi wako: peke yako, kama kikundi, au bado.",
          youCanNow: "kulinganisha gharama na faida za cheti kama GLOBALG.A.P. na kuchagua njia kwa shamba au kikundi chako.",
          quickCheck: [
            { objective: "O3", q: "Ni kipi kimojawapo cha vipengele vitatu vya gharama vya GLOBALG.A.P.?", options: ["Gharama za usafiri za mnunuzi", "Ada zako za shule", "Ada za ukaguzi na usafiri za shirika la kutoa cheti", "Bei ya zao"], answer: 2, why: "GLOBALG.A.P. inataja gharama zako za kujiandaa, ada za shirika la kutoa cheti, na ada zake za usajili na leseni." },
            { objective: "O3", q: "Wakulima wadogo ishirini wanataka cheti lakini kila mmoja hawezi kumudu ukaguzi. Nini kinaweza kufaa?", options: ["Cheti cha kikundi chenye mfumo mmoja wa ubora", "Kila mmoja kunakili cheti cha jirani", "Kuruka ukaguzi", "Kununua cheti mtandaoni"], answer: 0, why: "Chaguo la kikundi cha wazalishaji linaruhusu cheti kimoja kuwahusu wanachama wanaofuata mfumo mmoja wenye ukaguzi wa ndani." }
          ]
        },
        {
          title: "Vikomo vya mabaki, sheria za kuuza nje na kwa nini mizigo hukataliwa",
          objectives: ["O5"],
          minutes: 6,
          goal: "Kagua vikomo vya mabaki na mashirika ya kuuza nje yanayohusu zao lako na soko lako.",
          text: [
            "Kiwango cha juu cha mabaki (MRL, maximum residue level) ni kiasi kikubwa zaidi cha kiuatilifu kinachoruhusiwa kubaki kwenye chakula. Kila soko linaloagiza huweka chake. Umoja wa Ulaya (EU) unaorodhesha vikomo vyake katika EU Pesticides Database; Codex Alimentarius huweka vikomo vya kimataifa ambavyo nchi nyingi hutumia. Bidhaa inaweza kuwa halali nyumbani na bado ikazidi kikomo Ulaya, au kiuatilifu kinaweza kuwa hakijaruhusiwa huko kabisa.",
            "Hii si hatari ndogo. Mamlaka ya Kilimo na Chakula ya Kenya (AFA) ilihusisha kushuka sana kwa mapato ya kuuza mboga nje hasa na mizigo iliyozuiliwa na EU kwa mabaki ya viuatilifu, iliyoongezeka kutoka visa 25 mwaka 2023 hadi 57 mwaka 2024, na EU iliongeza ukaguzi wa maharagwe na njegere kutoka Kenya. Sababu za kawaida: kunyunyizia karibu mno na mavuno, kutumia bidhaa isiyoruhusiwa katika soko hilo, kuchanganya vibaya, dawa kupeperushwa na upepo kutoka kwa jirani, na kuchanganya mazao kutoka mashamba yasiyofuatilika.",
            "Kuuza nje pia kunahitaji idhini za kitaifa. Nchini Kenya, Kurugenzi ya Mazao ya Bustani ya AFA hutoa leseni kwa wauzaji nje na husajili mawakala, na KEPHIS hutoa vyeti vya afya ya mimea (phytosanitary). Nchini Nigeria, wauzaji nje hujisajili na Nigerian Export Promotion Council (NEPC). Nchini Ghana, wauzaji nje hujisajili na Ghana Export Promotion Authority (GEPA). Ukaguzi wa afya ya mimea hufanywa na shirika la kulinda mimea la kila nchi. Sheria hubadilika, kwa hiyo kagua kila shirika kabla ya msimu."
          ],
          steps: ["Taja soko unalolenga (kwa mfano EU, Uingereza au soko la kikanda).", "Tafuta vikomo vya mabaki kwa zao lako katika hifadhidata ya soko hilo au Codex.", "Hakikisha kila kiuatilifu unachotumia kinaruhusiwa huko, na ufuate muda wa kusubiri kabla ya mavuno ulio kwenye lebo.", "Muulize mnunuzi wako kama vipimo vya mabaki vinahitajika kabla ya kusafirisha.", "Orodhesha mashirika ya nchi yako ya kuuza nje na ya afya ya mimea na yanachohitaji."],
          words: [["Kiwango cha juu cha mabaki (MRL)", "kiasi kikubwa zaidi cha kiuatilifu kinachoruhusiwa kubaki kwenye chakula katika soko fulani."], ["Kuzuiliwa (interception)", "nchi inayoagiza inaposimamisha mzigo mpakani kwa sababu umevunja sheria."], ["Cheti cha afya ya mimea (phytosanitary)", "hati rasmi inayosema bidhaa ya mmea haina wadudu na magonjwa yaliyoorodheshwa."]],
          slides: [
            { title: "MRL ni nini", bullets: ["Kiasi kikubwa zaidi cha kiuatilifu kinachoruhusiwa kwenye chakula", "Kila soko huweka chake", "EU Pesticides Database; vikomo vya Codex"] },
            { title: "Kwa nini mizigo hukataliwa", bullets: ["Kunyunyizia karibu mno na mavuno", "Bidhaa isiyoruhusiwa katika soko hilo", "Kuchanganya vibaya, dawa kupeperushwa, mazao yasiyofuatilika"] },
            { title: "Onyo la Kenya", bullets: ["AFA: mizigo iliyozuiliwa na EU kwa mabaki 25 (2023) hadi 57 (2024)", "Mapato ya kuuza mboga nje yalishuka sana", "Ukaguzi zaidi wa EU kwa maharagwe na njegere"] },
            { title: "Mashirika ya kuuza nje (kagua sheria za sasa)", bullets: ["Kenya: Kurugenzi ya Mazao ya Bustani ya AFA; KEPHIS", "Nigeria: usajili wa NEPC", "Ghana: usajili wa GEPA; mashirika ya kulinda mimea"] }
          ],
          sources: [EU_MRL, CODEX, KE_VEG_DROP, KE_AFA, KEPHIS_PHYTO, NEPC, GEPA],
          tryIt: "Kwa zao lako na soko unalolenga, tafuta mahali vikomo vya mabaki vimeorodheshwa na ukague viuatilifu viwili unavyotumia. Kisha orodhesha mashirika ya nchi yako ya kuuza nje na ya afya ya mimea na swali moja la kuuliza kila moja. Ongeza matokeo kwenye orodha yako ya kukagua.",
          youCanNow: "kupata vikomo vya mabaki kwa soko lako na kutaja mashirika ya kuuza nje na ya afya ya mimea unayopaswa kushughulika nayo.",
          quickCheck: [
            { objective: "O5", q: "Kiuatilifu chako kimesajiliwa nchini kwako. Je, mazao bado yanaweza kukataliwa Ulaya?", options: ["Hapana, usajili wa nyumbani unatosha", "Ndiyo, kama mabaki yamezidi kikomo cha EU au bidhaa hairuhusiwi huko", "Tu kama kreti ni chafu", "Kwa maua tu"], answer: 1, why: "Kila soko huweka vikomo vyake, kwa hiyo mazao halali nyumbani yanaweza kuvunja sheria za EU." },
            { objective: "O5", q: "Nchini Kenya, nani hutoa vyeti vya afya ya mimea kwa mauzo ya nje?", options: ["KEBS", "NAFDAC", "NEPC", "KEPHIS"], answer: 3, why: "KEPHIS hushughulikia ukaguzi wa afya ya mimea na vyeti vya phytosanitary kwa mauzo ya nje ya Kenya." }
          ]
        },
        {
          title: "Kukutana na wanunuzi, mikataba ya ugavi na mipango ya wakulima wa mkataba",
          objectives: ["O6"],
          minutes: 6,
          goal: "Andika ofa ya ugavi na orodhesha masharti ya mkataba unayohitaji kutoka kwa mnunuzi.",
          text: [
            "Unapokutana na mnunuzi, njoo ukiwa umejiandaa: zao lako, daraja, kiasi unachoweza kutoa na lini, jinsi unavyoweka mazao salama na yanayofuatilika, cheti chochote, na sampuli. Ahidi tu kile unachoweza kutoa. Kukosa kupeleka mzigo kunaharibu uaminifu kuliko ofa ndogo.",
            "Jadili masharti, si bei tu. Kubalianeni daraja na jinsi linavyokaguliwa, kiasi na ratiba, bei au jinsi inavyowekwa (bei isiyobadilika, au inayofuata bei ya soko), nani analipa usafiri na ufungaji, sheria za kukataa mazao (nani anakagua, lini, na nini kinatokea kwa mazao yaliyokataliwa), tarehe na njia ya malipo, na nini kinatokea mavuno yako yakishindwa au mnunuzi asipokuja kuchukua. Kuuza pembeni kwa mnunuzi mwingine kunavunja uaminifu na mara nyingi kunavunja mkataba.",
            "Katika mpango wa wakulima wa mkataba (outgrower), kampuni kama kiwanda cha usindikaji au muuzaji nje huingia mkataba na wakulima wadogo wengi, mara nyingi ikiwapa mbegu, pembejeo, mafunzo au mkopo na kununua zao. Unaweza kufungua soko la uhakika, lakini kagua: je, pembejeo zinakatwa kutoka malipo yako na kwa bei gani, nani anaweka daraja, nini kinatokea bei zikipanda, na unaweza kujitoa? Soma kila mkataba wote, weka nakala, na umuulize mshauri unayemwamini, afisa ugani au afisa wa ushirika kabla ya kusaini."
          ],
          steps: ["Andaa ofa yako: zao, daraja, kiasi, ratiba, usalama na ufuatiliaji, cheti, sampuli.", "Orodhesha masharti unayohitaji: ukaguzi wa daraja, msingi wa bei, usafiri, sheria za kukataa mazao, tarehe ya malipo, vifungu vya kushindwa.", "Kwa mpango wa wakulima wa mkataba, uliza jinsi pembejeo zinavyotozwa, nani anaweka daraja, na jinsi unavyoweza kujitoa.", "Soma mkataba wote na umuulize mshauri unayemwamini kabla ya kusaini.", "Weka nakala na upeleke hasa kile ulichoahidi."],
          words: [["Ofa ya ugavi", "ofa ya maandishi kwa mnunuzi kuhusu unachoweza kutoa, lini na kwa masharti gani."], ["Mpango wa wakulima wa mkataba (outgrower)", "utaratibu ambapo kampuni huingia mkataba na wakulima wadogo wengi wailimie, mara nyingi ikiwapa pembejeo na kununua zao."], ["Kuuza pembeni (side-selling)", "kuuza mazao yaliyo chini ya mkataba kwa mnunuzi mwingine."], ["Sheria za kukataa mazao", "sheria zilizokubaliwa za kukagua mazao na nini kinatokea kwa mazao ambayo mnunuzi anakataa."]],
          slides: [
            { title: "Njoo ukiwa umejiandaa", bullets: ["Zao, daraja, kiasi na ratiba", "Jinsi unavyoweka mazao salama na yanayofuatilika", "Cheti na sampuli; ahidi tu unachoweza kutoa"] },
            { title: "Jadili masharti", bullets: ["Ukaguzi wa daraja, msingi wa bei, usafiri", "Sheria za kukataa mazao na tarehe ya malipo", "Mavuno yakishindwa au mnunuzi asipokuja kuchukua?"] },
            { title: "Mipango ya wakulima wa mkataba", bullets: ["Soko la uhakika; pembejeo, mafunzo au mkopo", "Kagua: gharama za pembejeo, nani anaweka daraja, unaweza kujitoa?", "Kuuza pembeni kunavunja uaminifu na mikataba"] },
            { title: "Kabla ya kusaini", bullets: ["Soma kila mstari; weka nakala", "Muulize afisa ugani, afisa wa ushirika au mshauri", "Peleka hasa kile ulichoahidi"] }
          ],
          tryIt: "Kazi ya mwisho: maliza orodha yako ya kukagua utayari kwa mnunuzi, ukionyesha unachokifikia na utakachorekebisha. Kisha andika ofa ya ugavi ya ukurasa mmoja kwa mnunuzi huyo: zao na daraja, kiasi na ratiba, usalama na ufuatiliaji, cheti, msingi wa bei na masharti ya mkataba unayotaka.",
          youCanNow: "kutoa ofa ya ugavi kwa mnunuzi mkubwa na kuorodhesha masharti ya mkataba yanayokulinda, pamoja na katika mpango wa wakulima wa mkataba.",
          quickCheck: [
            { objective: "O6", q: "Ni sharti gani linakulinda mnunuzi akikataa sehemu ya mzigo?", options: ["Sheria wazi za kukataa mazao: nani anakagua, lini, na nini kinatokea kwa mazao yaliyokataliwa", "Nembo ya mnunuzi", "Bei ya chini", "Mzigo mkubwa zaidi"], answer: 0, why: "Sheria za kukataa mazao huzuia ukataaji usio wa haki na husema nani anabeba hasara." },
            { objective: "O6", q: "Kampuni ya wakulima wa mkataba inatoa mbegu na mbolea kwa mkopo. Unapaswa kuuliza nini kwanza?", options: ["Mifuko ina rangi gani", "Kama majirani wamejiunga", "Pembejeo zinapangiwa bei vipi na zinakatwa vipi kutoka malipo yako", "Kama unaweza kuuza pembeni"], answer: 2, why: "Gharama za pembejeo zinaweza kuchukua sehemu kubwa ya malipo yako, kwa hiyo jua bei na jinsi zinavyokatwa." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Vyeti, sheria za kuuza nje na mikataba ya ugavi",
        questions: [
          { objective: "O3", q: "Cheti cha GLOBALG.A.P. IFA kinadumu kwa muda gani?", options: ["Mwaka mmoja, kwa ukaguzi kila mwaka", "Milele", "Miaka kumi", "Hadi mnunuzi abadilike"], answer: 0, why: "GLOBALG.A.P. inasema ukaguzi ni kila mwaka na cheti kinadumu mwaka mmoja." },
          { objective: "O3", q: "Kabla ya kulipia cheti, unapaswa kumuuliza mnunuzi wako nini?", options: ["Anwani ya nyumbani kwake", "Zao analolipenda zaidi", "Hakuna, pata cheti tu", "Je, unakihitaji, na utanunua zaidi au kulipa zaidi nikiwa nacho?"], answer: 3, why: "Cheti kinagharimu pesa, kwa hiyo hakikisha kinaleta soko au bei bora." },
          { objective: "O5", q: "Unaweza kutafuta wapi vikomo vya mabaki vya EU kwa zao fulani?", options: ["Kituo cha redio cha mtaani", "EU Pesticides Database", "Pakiti yako ya mbegu", "Status ya WhatsApp ya mnunuzi"], answer: 1, why: "EU Pesticides Database ya Tume ya Ulaya inaorodhesha MRL kwa kila chakula na kiuatilifu." },
          { objective: "O6", q: "Kuuza pembeni ni nini?", options: ["Kuuza kando ya barabara", "Kuuza katika masoko mawili kwa wakati mmoja kwa ruhusa", "Kuuza mazao yaliyo chini ya mkataba kwa mnunuzi mwingine", "Kuuza kwa jumla"], answer: 2, why: "Kuuza pembeni kunavunja mkataba na kuharibu uaminifu na mnunuzi." },
          { objective: "O6", q: "Unaweza kutoa tani 2 kwa wiki. Mnunuzi anaomba 4. Unafanya nini?", options: ["Ninaahidi 4 na kutumaini", "Ninatuma mazao yasiyochambuliwa ili kufikia uzito", "Ninanyamaza na kupeleka 2", "Ninatoa ofa ya tani 2, au ninafanya kazi na kikundi kutoa zaidi"], answer: 3, why: "Ahidi tu unachoweza kutoa; kikundi kinaweza kusaidia kufikia kiasi kikubwa zaidi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kuuzia Supamaketi, Viwanda vya Usindikaji na Wanunuzi wa Nje: Viwango na Vyeti",
    questions: [
      { objective: "O1", q: "Ni kundi lipi linaorodhesha kile ambacho wanunuzi wakubwa hutaka kwa kawaida?", options: ["Bei ya chini, shamba kubwa, trekta jipya", "Kilimo hai tu, hakuna kingine", "Zawadi, mkopo, usafiri wa bure", "Kiasi, uthabiti, daraja, ufuatiliaji, usalama wa chakula"], answer: 3, why: "Haya matano ndiyo mahitaji ya kawaida ya supamaketi, viwanda vya usindikaji na wauzaji nje." },
      { objective: "O1", q: "Kiwanda kinachonunua muhogo kwa ajili ya wanga kinajali zaidi:", options: ["Kiasi kikubwa kwa ubora uliowekwa", "Rangi na umbo zuri", "Vifurushi vidogo kwa wanunuzi wa dukani", "Lebo za kuvutia"], answer: 0, why: "Viwanda vinahitaji kiasi na ubora usiobadilika kwa kiwanda chao; sura haijalishi sana." },
      { objective: "O1", q: "Ulilinganisha maelezo ya bidhaa ya mnunuzi na ugavi wako. Mapengo yanakuwa nini?", options: ["Sababu za kukata tamaa", "Siri dhidi ya kikundi", "Mpango wako wa kazi", "Tatizo la mnunuzi"], answer: 2, why: "Kila pengo ni kazi ya kurekebisha kabla ya kuweza kumuuzia mnunuzi huyo." },
      { objective: "O2", q: "GAP inasimama kwa nini katika kozi hii?", options: ["Group Agricultural Payment (malipo ya kilimo ya kikundi)", "Good Agricultural Practices (Kanuni Bora za Kilimo)", "Grain and Produce (nafaka na mazao)", "Government Approval Permit (kibali cha idhini ya serikali)"], answer: 1, why: "Kanuni Bora za Kilimo ni tabia za shambani ambazo wanunuzi na watoa vyeti hukagua." },
      { objective: "O2", q: "Unapaswa kutumia viuatilifu gani?", options: ["Bidhaa yoyote ya bei nafuu sokoni", "Bidhaa anazopendekeza jirani", "Bidhaa zisizo na lebo katika chupa za zamani", "Bidhaa zilizosajiliwa na shirika lako la kitaifa, zinazotumiwa kama lebo inavyosema"], answer: 3, why: "Bidhaa zilizosajiliwa zinazotumiwa kama lebo inavyosema hulinda watu na kuweka mabaki ndani ya vikomo." },
      { objective: "O2", q: "Kwa nini kuweka vyoo na mahali pa kunawa mikono kwa wafanyakazi wa mavuno?", options: ["Kuzuia vijidudu visiingie kwenye mazao", "Kuwafurahisha majirani", "Kwa sababu wanunuzi wanapenda majengo", "Kuhifadhi kemikali"], answer: 0, why: "Usafi wakati wa mavuno huweka mazao bila vijidudu, jambo ambalo wanunuzi hukagua." },
      { objective: "O4", q: "Msimbo wa kipande cha shamba unasaidia nini?", options: ["Kulipa wafanyakazi", "Kufuatilia mazao hadi kipande halisi cha shamba", "Kuchagua mnunuzi", "Kuweka bei"], answer: 1, why: "Msimbo wa kipande unaunganisha kumbukumbu za mavuno na unyunyiziaji na kipande kimoja." },
      { objective: "O4", q: "Namba ya kundi inapaswa kuonekana wapi?", options: ["Kichwani mwako tu", "Kwenye gari la mnunuzi", "Kwenye kila kreti au hati ya kupeleka mzigo, na kwenye kumbukumbu yako ya mavuno", "Kwenye pakiti ya mbegu"], answer: 2, why: "Kuiandika kwenye kreti na kwenye kumbukumbu humwezesha yeyote kufuatilia mazao nyuma." },
      { objective: "O4", q: "Ni kumbukumbu ipi inaonyesha kilichonyunyiziwa kwenye kipande na lini?", options: ["Rejista ya wanachama", "Kitabu cha mauzo", "Hati ya kupeleka mzigo", "Kumbukumbu ya unyunyiziaji na pembejeo"], answer: 3, why: "Kumbukumbu ya unyunyiziaji na pembejeo inaorodhesha tarehe, bidhaa, kiasi na aliyenyunyizia." },
      { objective: "O3", q: "GLOBALG.A.P. IFA kwa matunda na mboga inahusu nini?", options: ["Usalama wa chakula, ustawi wa wafanyakazi na mazingira", "Rangi ya mazao tu", "Bei tu", "Ukubwa wa shamba tu"], answer: 0, why: "IFA inahusu usalama wa chakula na ufuatiliaji, afya na ustawi wa wafanyakazi, na mazingira." },
      { objective: "O3", q: "Nani hufanya ukaguzi wa GLOBALG.A.P.?", options: ["Dereva wa mnunuzi wako", "Shirika lililoidhinishwa la kutoa cheti", "Jirani", "Benki"], answer: 1, why: "Ni shirika lililoidhinishwa la kutoa cheti linalofanya kazi nchini kwako tu linaloweza kukagua na kutoa cheti." },
      { objective: "O3", q: "Mnunuzi anawezaje kukagua kama cheti chako ni halisi?", options: ["Akuombe uape", "Aangalie bango la shamba lako", "Kwenye Supply Chain Portal ya GLOBALG.A.P.", "Hawezi kukagua"], answer: 2, why: "Hali ya cheti inaonekana kwenye mfumo wa GLOBALG.A.P. kwa kutumia namba yako." },
      { objective: "O3", q: "Ni hatua gani ya kwanza kuelekea cheti?", options: ["Lipa ada zote mara moja", "Chapisha cheti", "Mwambie mnunuzi una cheti", "Pakua sheria na orodha ya kukagua bure na ujifanyie tathmini binafsi"], answer: 3, why: "Tathmini binafsi inaonyesha mapengo yako kabla ya kulipia ukaguzi." },
      { objective: "O5", q: "MRL ni nini?", options: ["Aina ya mbolea", "Aina ya mbegu", "Kiasi kikubwa zaidi cha kiuatilifu kinachoruhusiwa kubaki kwenye chakula", "Kibali cha usafiri"], answer: 2, why: "Kiwango cha juu cha mabaki ni kikomo cha kisheria cha mabaki ya kiuatilifu kwenye chakula." },
      { objective: "O5", q: "Mdhibiti wa Kenya alisema nini kuhusu mizigo iliyozuiliwa na EU kwa mabaki?", options: ["Ilishuka hadi sifuri", "Iliongezeka kutoka 25 mwaka 2023 hadi 57 mwaka 2024", "Haitokei kamwe", "Inahusu maua tu"], answer: 1, why: "AFA iliripoti kwamba mizigo iliyozuiliwa iliongezeka zaidi ya mara mbili, na ikaihusisha na kushuka sana kwa mapato ya kuuza mboga nje." },
      { objective: "O5", q: "Ni ipi sababu ya kawaida ya mazao kukataliwa kwa mabaki?", options: ["Kunyunyizia karibu mno na mavuno", "Kuweka kumbukumbu nzuri", "Kutumia kreti safi", "Kufundisha wafanyakazi"], answer: 0, why: "Kupuuza muda wa kusubiri kabla ya mavuno huacha mabaki juu ya kikomo." },
      { objective: "O5", q: "Kikundi cha Nigeria kinataka kuuza nje rozela (hibiscus) iliyokaushwa. Wajisajili na shirika gani kama wauzaji nje?", options: ["KEPHIS", "GEPA", "AFA", "Nigerian Export Promotion Council (NEPC)"], answer: 3, why: "Wauzaji nje wa Nigeria hujisajili na NEPC, na wanapaswa kukagua mahitaji yake ya sasa." },
      { objective: "O6", q: "Ofa ya ugavi inapaswa kuwa na nini?", options: ["Zao, daraja, kiasi, ratiba, usalama, cheti na msingi wa bei", "Bei ya chini tu", "PIN yako ya benki", "Ahadi ya kiasi chochote kinachoombwa"], answer: 0, why: "Ofa iliyo wazi inamwonyesha mnunuzi hasa unachoweza kutoa na jinsi gani." },
      { objective: "O6", q: "Kabla ya kusaini mkataba wa wakulima wa mkataba unapaswa:", options: ["Kusaini haraka kabla ya wengine", "Kusoma ukurasa wa kwanza tu", "Kuusoma wote, kuweka nakala na kumuuliza mshauri unayemwamini", "Kuiachia kampuni nakala pekee"], answer: 2, why: "Kusoma wote na kupata ushauri kunakulinda dhidi ya masharti usiyoyatarajia." },
      { objective: "O6", q: "Mavuno yako yanashindwa baada ya ukame. Ni sharti gani la mkataba lina maana sasa?", options: ["Nembo ya mnunuzi", "Nini kinatokea upande wowote usipoweza kutimiza", "Rangi ya kreti", "Saa za kazi za ofisi ya mnunuzi"], answer: 1, why: "Kifungu cha kushindwa kinasema nini kinatokea mavuno yanaposhindwa, ili usiadhibiwe isivyo haki." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo 1, ili mtihani uonyeshe kila mwanafunzi alipata kiasi gani
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 3, 6, 9, 11, 13, 15, 17, 19] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo ya orodha ya kukagua au ya ofa na ujaribu tena.",
    criteria: [
      { name: "Mahitaji ya mnunuzi na mapengo", objective: "O1", notYet: "Mahitaji ya mnunuzi hayako wazi, au mapengo hayajaonyeshwa.", meets: "Kiasi, uthabiti, daraja, ufuatiliaji na usalama wa chakula vimeorodheshwa, pamoja na unachotoa sasa na kila pengo likiwa limeonyeshwa.", exceeds: "Imetokana na maelezo ya bidhaa ya maandishi ya mnunuzi, pamoja na mpango na tarehe ya kuziba kila pengo." },
      { name: "Kanuni Bora za Kilimo", objective: "O2", notYet: "Hakuna sheria za GAP zilizoandikwa, au viuatilifu visivyosajiliwa au hakuna vifaa vya kujikinga.", meets: "Sheria zilizoandikwa: viuatilifu vilivyosajiliwa vinavyotumiwa kama lebo inavyosema, vifaa vya kujikinga, muda wa kusubiri kabla ya mavuno, maji, usafi wa mavuno na usalama wa wafanyakazi.", exceeds: "Wafanyakazi wamefundishwa na sheria zimebandikwa mahali wanapofanyia kazi." },
      { name: "Kumbukumbu za ufuatiliaji", objective: "O4", notYet: "Hakuna misimbo ya vipande, kumbukumbu ya unyunyiziaji wala namba za kundi.", meets: "Misimbo ya vipande, kumbukumbu ya unyunyiziaji na pembejeo na kumbukumbu ya mavuno yenye namba za kundi; kreti moja inaweza kufuatiliwa nyuma.", exceeds: "Kumbukumbu zinawekwa kwa kikundi kizima na jaribio la kufuatilia lilifanywa ndani ya dakika chache." },
      { name: "Vyeti na sheria za kuuza nje", objective: "O3", notYet: "Cheti kinachukuliwa kuwa kinahitajika bila kuuliza au kinapuuzwa, au hakuna mashirika ya kuuza nje yaliyotajwa.", meets: "Maelezo ya gharama na faida yanataja vipengele vitatu vya gharama na njia (peke yako, kikundi au bado).", exceeds: "Yana makadirio halisi ya bei kutoka kwa mashirika ya kutoa cheti na jibu la mnunuzi kuhusu kama kinahitajika." },
      { name: "Vikomo vya mabaki", objective: "O5", notYet: "Hakuna ukaguzi wa vikomo vya mabaki vya soko.", meets: "Anataja mahali vikomo vimeorodheshwa na anakagua viuatilifu vinavyotumika dhidi yake, pamoja na mashirika ya kuuza nje na ya afya ya mimea.", exceeds: "Amemuuliza mnunuzi au maabara kuhusu vipimo vya mabaki kabla ya kusafirisha." },
      { name: "Ofa ya ugavi na masharti", objective: "O6", notYet: "Hakuna ofa, au inaahidi zaidi ya kile shamba au kikundi kinaweza kutoa.", meets: "Ofa ya ukurasa mmoja yenye daraja, kiasi, ratiba, usalama, cheti, msingi wa bei na masharti ya mkataba yanayotakiwa.", exceeds: "Ina sheria za kukataa mazao, vifungu vya kushindwa na masharti ya malipo, na ilionyeshwa kwa mshauri." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi au vikundi wanaotuma ofa ya ugavi kwa supamaketi, kiwanda cha usindikaji au muuzaji nje ndani ya siku 90 (utafiti wa kufuatilia)",
      "Wanafunzi au vikundi wanaopata mkataba wa ugavi au makubaliano ya wakulima wa mkataba ndani ya miezi sita",
      "Wanafunzi wanaoweka kumbukumbu za unyunyiziaji na mavuno zenye namba za kundi kwa msimu mzima",
      "Wanafunzi au vikundi wanaoanza au kumaliza tathmini binafsi ya cheti, au wanaopata cheti"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu (simu janja inasaidia) na daftari la kumbukumbu",
      "Maelezo halisi ya bidhaa ya mnunuzi kama yanapatikana (uliza supamaketi, kiwanda cha usindikaji au muuzaji nje wa karibu)",
      "Lebo za viuatilifu wanavyotumia wanafunzi, ili kusoma vifaa vya kujikinga na muda wa kusubiri kabla ya mavuno",
      "Hiari: orodha ya kukagua ya GLOBALG.A.P. ya bure kutoka globalgap.org",
      "Kama dakika 90 kwa jumla, katika vipindi vifupi, pamoja na muda wa kuwasiliana na wanunuzi na mashirika"
    ],
    facilitatorNotes: [
      "Endesha kozi hii na vikundi vya wazalishaji inapowezekana: kiasi, kumbukumbu na cheti cha kikundi hufanya kazi vizuri zaidi pamoja.",
      "Leta lebo halisi za viuatilifu na mfanye mazoezi ya kupata vifaa vya kujikinga na muda wa kusubiri kabla ya mavuno; usitoe kamwe namba za vipimo vya dawa au za muda wewe mwenyewe.",
      "Mwalike mnunuzi, muuzaji nje au shirika la kutoa cheti kuzungumza kuhusu wanachokagua; waombe mfano wa maelezo ya bidhaa.",
      "Kagua sheria za sasa na AFA na KEPHIS (Kenya), NEPC (Nigeria), GEPA (Ghana) na shirika la kulinda mimea la nchi yako kabla ya kipindi; sheria na ada hubadilika.",
      "Pima kazi ya mwisho kwa rubriki; fanyeni igizo la mkutano na mnunuzi ambapo \"mnunuzi\" anasukuma kiasi kikubwa kuliko kikundi kinachoweza kutoa."
    ]
  }
};
