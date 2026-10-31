"use strict";

// Koach Learn course (Swahili translation of agriculture-africa/agri-agribusiness-farm-management.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const CBK = { name: "Benki Kuu ya Kenya (Central Bank of Kenya; angalia orodha zake za taasisi zenye leseni)", url: "https://www.centralbank.go.ke" };
const CBN = { name: "Benki Kuu ya Nigeria (Central Bank of Nigeria; ulinzi wa watumiaji na taasisi zenye leseni)", url: "https://www.cbn.gov.ng" };
const FAO_CSA = { name: "FAO: Kitabu cha Kilimo Kinachostahimili Tabianchi (Climate-Smart Agriculture Sourcebook; kudhibiti hatari za shamba)", url: "https://openknowledge.fao.org/3/a-i3484e.pdf" };

module.exports = {
  id: "agri-agribusiness-farm-management-sw",
  lang: "sw",
  translationOf: "agri-agribusiness-farm-management",
  category: "Agriculture (Africa)",
  name: "Biashara ya Kilimo na Usimamizi wa Shamba",
  skills: "Kuweka kumbukumbu rahisi za shamba, Kukokotoa faida ghafi ya kila zao au mfugo, Kutafuta masoko na kupata bei bora, Kusimamia mtiririko wa pesa kwa pesa za simu, Kupima gharama ya mkopo na kudhibiti hatari, Kuandika mpango wa biashara wa shamba wa ukurasa mmoja",
  outcome: "kuendesha shamba lako kama biashara: kuweka kumbukumbu, kujua mazao au mifugo ipi inaleta pesa zaidi kwa ekari, kupanga pesa zako mwaka mzima, kuamua kama mkopo una maana, na kuandika mpango wa biashara wa shamba wa ukurasa mmoja unaoweza kuuonyesha chama cha ushirika, mkopeshaji au mshirika.",
  about: [
    "Kozi hii ni kwa wakulima wadogo, vijana wajasiriamali wa kilimo, vikundi vya wanawake na vijana, viongozi wa vyama vya ushirika na maafisa ugani nchini Kenya, Nigeria na kote Afrika wanaotaka shamba lao lilete pesa zaidi na liwe na hatari ndogo.",
    "Sura ya 1 inaliona shamba kama biashara: kuweka kumbukumbu rahisi, kukokotoa faida ghafi ya kila mradi (kama mahindi, maharagwe, nyanya, kuku au ng'ombe wa maziwa), na kutafuta masoko na bei bora. Sura ya 2 inahusu pesa na kukua: kutumia pesa za simu kusimamia mtiririko wa pesa, kuamua kama ukope na jinsi ya kudhibiti hatari, na kuandika mpango wa biashara wa ukurasa mmoja.",
    "Mifano yote ya pesa katika kozi hii ni namba za kubuni za kuonyesha njia tu; tumia bei zako za eneo lako. Kozi hii haitoi ushauri wa uwekezaji wala wa mikopo: kabla ya kukopa, linganisha ofa, hakikisha mkopeshaji ana leseni, na zungumza na mshauri unayemwamini kama chama chako cha ushirika, SACCO (chama cha akiba na mikopo) au afisa ugani. Jaribio la maarifa linafunga kila sura na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Andika mpango wa biashara wa ukurasa mmoja kwa shamba lako (au shamba la mfano): unazalisha nini na kwenye ardhi kiasi gani, faida ghafi za angalau miradi miwili (kwa bei na gharama zako za eneo lako), utamuuzia nani na kwa njia gani, muhtasari wa mtiririko wa pesa wa miezi 12 unaoonyesha pesa zinaingia na kutoka lini, mkopo wowote unaoufikiria pamoja na gharama yake yote na jinsi utakavyoulipa, hatari zako kuu na jinsi utakavyozipunguza, na malengo matatu ya msimu ujao.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wakulima wadogo, vijana wajasiriamali wa kilimo, vikundi vya wanawake na vijana, viongozi wa vyama vya ushirika na maafisa ugani nchini Kenya, Nigeria na kote Afrika wanaotaka shamba lao lilete pesa zaidi na liwe na hatari ndogo.",
    startingPoint: "Wanajua kulima mazao na kufuga wanyama, na wanajua takriban wanatumia na kupata kiasi gani. Wachache huweka kumbukumbu zilizoandikwa, hukokotoa faida ghafi, hupanga mtiririko wa pesa mwaka mzima au hulinganisha gharama yote ya mikopo.",
    gap: "Bila kumbukumbu na namba, wakulima hawawezi kuona ni mradi upi unalipa, wanaishiwa pesa katika miezi ya njaa, wanauza kwa bei za chini kabisa na wanaweza kuchukua mikopo wasiyoweza kulipa. Njia rahisi ya kibiashara inawasaidia kupata zaidi, kukopa kwa usalama na kuwaonyesha wakopeshaji na wanunuzi mpango ulio wazi.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; wanafunzi wengi wanasoma Kiswahili au Kiingereza kama lugha ya pili",
      "Vifaa: daftari au simu ya kawaida; jedwali la hesabu (spreadsheet) kwenye simu linasaidia lakini si lazima",
      "Hesabu: kujumlisha, kutoa na jumla rahisi; namba za mfano ni za kubuni, na wanafunzi wanatumia bei zao za eneo lao",
      "Usalama wa pesa: usitoe kamwe PIN au misimbo ya pesa za simu, na tumia wakopeshaji wenye leseni tu",
      "Bei, wakopeshaji na wasimamizi hutofautiana kwa nchi na msimu: wanafunzi wanakagua na vyama vya ushirika, maafisa ugani na wasimamizi rasmi"
    ],
    prerequisites: "Hakuna."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukitumia daftari au jedwali la hesabu kwenye simu", action: "kuweka kumbukumbu za pesa zinazoingia, pesa zinazotoka na mavuno ya shamba", standard: "ukiandika kila kitu siku hiyo hiyo, pamoja na siku za kazi za familia" },
    { id: "O2", condition: "Ukipewa mavuno, bei na gharama zinazobadilika", action: "kukokotoa faida ghafi kwa ekari ya miradi miwili na kuilinganisha", standard: "kwa hesabu sahihi, ukifikiria pia hatari na kazi, si faida ghafi peke yake" },
    { id: "O3", condition: "Ukipewa zao lako kuu", action: "kulinganisha angalau njia tatu za kuuza na kuchagua iliyo bora", standard: "kwa bei kutoka kwa wanunuzi kadhaa, ubora ambao kila mmoja anataka, na masharti ya mkataba wowote kwa maandishi" },
    { id: "O4", condition: "Kwa miezi 12 ijayo", action: "kupanga mtiririko wa pesa wa shamba lako na kutumia pesa za simu kwa usalama", standard: "ukiweka alama miezi ya njaa pamoja na mpango wa kila mmoja, na bila kutoa PIN au msimbo kamwe" },
    { id: "O5", condition: "Ukipewa ofa ya mkopo", action: "kukokotoa gharama yote ya mkopo na kuamua kama unaendana na mtiririko wako wa pesa", standard: "ukijumlisha kila ada na kuhakikisha mkopeshaji ana leseni" },
    { id: "O6", condition: "Ukitumia kumbukumbu na namba zako", action: "kuandika mpango wa biashara wa shamba wa ukurasa mmoja wenye hatari zako kuu na jinsi utakavyozipunguza", standard: "ukiwa na kila sehemu inayotakiwa na malengo matatu yenye namba" }
  ],
  chapters: [
    {
      name: "Sura 1: Shamba kama biashara",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kuweka kumbukumbu rahisi za shamba",
          minutes: 5,
          goal: "Anza kumbukumbu rahisi ya pesa zinazoingia, pesa zinazotoka na mavuno ya shamba.",
          text: [
            "Huwezi kusimamia kitu usichokipima. Wakulima wengi wanajua takriban wanatumia na kupata kiasi gani, lakini bila kumbukumbu ni vigumu kuona zao lipi linalipa, kupanga, au kupata mkopo au mkataba wa mnunuzi.",
            "Weka kumbukumbu tatu rahisi. Pesa zinazotoka: tarehe, kwa ajili ya nini (mbegu, mbolea, vibarua, usafiri, daktari wa mifugo), zao au mfugo upi, kiasi. Pesa zinazoingia: tarehe, umeuza nini, kiasi gani, kwa nani, kiasi cha pesa. Mavuno: tarehe za kupanda, pembejeo zilizotumika, mavuno kwa kila kipande cha shamba, mayai au maziwa kwa siku. Daftari linafaa; jedwali la hesabu kwenye simu pia linafaa. Taarifa za miamala ya pesa za simu pia zinakusaidia kukumbuka.",
            "Andika kumbukumbu siku hiyo hiyo. Tenganisha pesa za shamba na pesa za nyumbani katika kumbukumbu zako, hata kama zinatoka mfuko mmoja, na hesabu pia siku za kazi za familia, kwa sababu muda wako una thamani."
          ],
          steps: ["Chagua daftari au jedwali la hesabu kwenye simu.", "Tengeneza kurasa au majedwali matatu: pesa zinazotoka, pesa zinazoingia, mavuno.", "Andika kila kitu siku hiyo hiyo: tarehe, nini, zao au mfugo upi, kiasi.", "Tumia taarifa za miamala ya pesa za simu kujaza mapengo.", "Hesabu siku za kazi za familia pamoja na vibarua wa kulipwa."],
          words: [["Kuweka kumbukumbu", "kuandika yanayotokea shambani: pesa, pembejeo na mavuno."], ["Mradi", "shughuli moja shambani, kama mahindi, maharagwe, kuku au ng'ombe wa maziwa."]],
          slides: [
            { title: "Kwa nini kumbukumbu?", bullets: ["Uone zao lipi linalipa", "Upange msimu", "Upate mkopo au mkataba wa mnunuzi"] },
            { title: "Kumbukumbu tatu rahisi", bullets: ["Pesa zinazotoka: tarehe, nini, mradi upi, kiasi", "Pesa zinazoingia: tarehe, umeuza nini, kwa nani, kiasi", "Mavuno: kupanda, pembejeo, mavuno, mayai, maziwa"] },
            { title: "Tabia nzuri", bullets: ["Andika siku hiyo hiyo", "Pesa za shamba tofauti na za nyumbani", "Hesabu pia kazi ya familia"] }
          ],
          tryIt: "Anza kumbukumbu zako leo. Tengeneza majedwali matatu na ujaze angalau vitu vitano vya mwezi uliopita kutoka kumbukumbu yako na taarifa za miamala ya pesa za simu.",
          youCanNow: "kuweka kumbukumbu rahisi za pesa zinazoingia, pesa zinazotoka na mavuno kwa kila mradi wa shamba.",
          quickCheck: [
            { objective: "O1", q: "Kumbukumbu tatu rahisi za shamba katika kozi hii ni zipi?", options: ["Pesa zinazotoka, pesa zinazoingia na mavuno", "Hali ya hewa, bei na habari", "Majina, simu na anwani", "Mbegu, zana na majengo"], answer: 0, why: "Kumbukumbu hizi tatu zinaonyesha unachotumia, unachopata na unachozalisha." },
            { objective: "O1", q: "Ulisahau kuandika mbolea uliyonunua wiki iliyopita. Kipi kinaweza kukusaidia kukumbuka?", options: ["Kubahatisha namba", "Taarifa za miamala ya pesa za simu", "Kuiacha nje", "Kuiomba AI iibuni"], answer: 1, why: "Taarifa za miamala ya pesa za simu zinasaidia kujaza mapengo katika kumbukumbu zako." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Faida ghafi: zao lipi linalipa zaidi?",
          minutes: 6,
          goal: "Kokotoa faida ghafi kwa ekari ya miradi miwili na uilinganishe.",
          text: [
            "Faida ghafi = mapato ya mradi ukitoa gharama zinazohusu mradi huo (gharama zinazobadilika: mbegu, mbolea, dawa, vibarua wa kukodiwa, magunia, usafiri). Ikokotoe kwa ekari (au kwa hekta, au kwa kuku 100) ili ulinganishe miradi kwa haki.",
            "Mfano kwa namba za kubuni kwa shilingi za Kenya, ekari moja kila moja. Mahindi: magunia 18 kwa 3,500 = mapato 63,000; gharama 34,000 (mbegu 3,000, mbolea 14,000, vibarua 12,000, dawa 2,000, magunia na usafiri 3,000); faida ghafi 29,000. Maharagwe: magunia 5 kwa 9,000 = mapato 45,000; gharama 18,000; faida ghafi 27,000. Faida zinakaribiana, lakini maharagwe pia huongeza naitrojeni kwenye udongo na huvunwa mapema. Tumia bei zako mwenyewe: zinatofautiana kwa mahali na msimu.",
            "Linganisha pia faida kwa kila siku ya kazi na hatari: zao lenye faida kubwa lakini lenye uwezekano mkubwa wa kushindwa huenda lisiwe chaguo bora. Gharama za kudumu (kodi ya ardhi, zana, tanki la maji) zinalipwa kutoka jumla ya faida ghafi zote."
          ],
          steps: ["Chagua miradi miwili.", "Andika mavuno unayotarajia na bei kwa kipimo ili upate mapato.", "Orodhesha gharama zinazobadilika za kila mmoja.", "Faida ghafi = mapato - gharama zinazobadilika, kwa ekari.", "Linganisha faida, kazi na hatari."],
          words: [["Faida ghafi", "mapato ya mradi mmoja ukitoa gharama zinazohusu mradi huo."], ["Gharama zinazobadilika", "gharama zinazobadilika kulingana na kiasi unacholima, kama mbegu, mbolea na vibarua."], ["Gharama za kudumu", "gharama zinazobaki zile zile hata ulime nini, kama kodi ya ardhi au tanki la maji."]],
          slides: [
            { title: "Kanuni", bullets: ["Faida ghafi = mapato - gharama zinazobadilika", "Kwa ekari, hekta au kuku 100"] },
            { title: "Mfano (KSh za kubuni, ekari 1)", bullets: ["Mahindi: 63,000 - 34,000 = 29,000", "Maharagwe: 45,000 - 18,000 = 27,000", "Tumia bei zako za eneo lako"] },
            { title: "Linganisha pia", bullets: ["Faida kwa siku ya kazi", "Hatari ya kushindwa", "Gharama za kudumu hulipwa kutoka faida zote"] }
          ],
          tryIt: "Kokotoa faida ghafi kwa ekari ya miradi miwili shambani kwako (au miwili unayoifikiria) kwa bei za eneo lako. Upi uko juu zaidi, na upi una hatari zaidi?",
          youCanNow: "kukokotoa na kulinganisha faida ghafi ili kuamua cha kulima au cha kufuga.",
          quickCheck: [
            { objective: "O2", q: "Ipi ni gharama ya kudumu, si gharama inayobadilika?", options: ["Mbegu", "Mbolea", "Tanki la maji", "Vibarua wa kupalilia"], answer: 2, why: "Tanki la maji linalipwa hata ulime nini, kwa hiyo ni gharama ya kudumu." },
            { objective: "O2", q: "Nyanya zinaleta 50,000 kwa ekari na gharama zinazobadilika ni 30,000. Faida ghafi ni ngapi?", options: ["80,000", "30,000", "50,000", "20,000"], answer: 3, why: "Faida ghafi ni mapato ukitoa gharama zinazobadilika: 50,000 - 30,000 = 20,000." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kutafuta masoko na bei bora",
          minutes: 5,
          goal: "Linganisha angalau njia tatu za kuuza na uchague iliyo bora kwa zao moja.",
          text: [
            "Mara nyingi bei hushuka mara baada ya mavuno, kila mtu anapouza, na hupanda miezi kadhaa baadaye. Kuuza peke yako kwa kiasi kidogo kwa mfanyabiashara wa kwanza shambani ni rahisi lakini mara nyingi kunalipa kidogo zaidi. Linganisha: soko la karibu, wafanyabiashara, vyama vya ushirika vinavyokusanya mazao, viwanda vya kusindika, shule au hoteli, kilimo cha mkataba na mnunuzi, na, panapopatikana, maghala yaliyothibitishwa yanayohifadhi nafaka na huenda yakawasaidia wakulima kupata mkopo kwa dhamana ya nafaka hiyo.",
            "Tafuta taarifa za bei: uliza wanunuzi kadhaa, angalia huduma za bei za soko na redio, na zungumza na chama chako cha ushirika. Jua kiwango cha ubora cha mnunuzi (unyevu, daraja, ukubwa, usafi) na ukifikie: mazao safi, makavu na yaliyochambuliwa yanaleta pesa zaidi na yanadumu muda mrefu zaidi.",
            "Mikataba inaweza kukupa soko la uhakika, lakini soma masharti: bei au jinsi inavyowekwa, kiasi, kiwango cha ubora, tarehe za kupeleka, nani analipa usafiri, tarehe na njia ya malipo, na nini kitatokea mavuno yakishindwa. Ipate kwa maandishi na uombe chama chako cha ushirika au afisa ugani aikague."
          ],
          steps: ["Orodhesha angalau njia tatu za kuuza zao lako.", "Pata bei kutoka kwa wanunuzi kadhaa na huduma za taarifa za soko.", "Jifunze kiwango cha ubora cha kila mnunuzi.", "Fikiria kukusanya mazao na kikundi au kuhifadhi ili upate bei bora.", "Soma masharti ya mkataba wowote na uupate kwa maandishi."],
          words: [["Kukusanya mazao", "kuweka pamoja mazao ya wakulima wengi ili kuuza kiasi kikubwa kwa bei bora."], ["Kilimo cha mkataba", "makubaliano ya kulima na kumuuzia mnunuzi mazao kwa masharti yaliyowekwa."], ["Kiwango cha ubora", "masharti ya mnunuzi kuhusu unyevu, ukubwa, daraja na usafi."]],
          slides: [
            { title: "Wakati ni muhimu", bullets: ["Mara nyingi bei iko chini mara baada ya mavuno", "Juu zaidi miezi kadhaa baadaye", "Kuhifadhi na kukusanya mazao kunaweza kusaidia"] },
            { title: "Njia za kuuza", bullets: ["Soko, wafanyabiashara, vyama vya ushirika", "Viwanda vya kusindika, shule, hoteli", "Mikataba, maghala yaliyothibitishwa"] },
            { title: "Lipwa zaidi", bullets: ["Linganisha bei kadhaa", "Fikia kiwango cha ubora", "Soma mikataba; ipate kwa maandishi"] }
          ],
          tryIt: "Kwa zao lako kuu, andika njia tatu unazoweza kuliuza, bei ambayo kila moja ingelipa leo (uliza au kadiria), ubora ambao kila moja inataka, na utachagua ipi na kwa nini.",
          youCanNow: "kulinganisha masoko na kuchagua njia bora ya kuuza zao.",
          quickCheck: [
            { objective: "O3", q: "Kukusanya mazao ni nini?", options: ["Kuuza pamoja kama kikundi ili kupata kiasi kikubwa", "Kuongeza maji kwenye nafaka", "Kununua mbegu katika pakiti ndogo", "Kuhifadhi nafaka ndani ya nyumba"], answer: 0, why: "Kukusanya mazao na chama cha ushirika au kikundi kunaleta mizigo mikubwa inayoweza kupata bei bora." },
            { objective: "O3", q: "Mnunuzi anataka maharagwe yako lakini hasemi chochote kuhusu atalipa lini. Unafanya nini?", options: ["Kupeleka na kutumaini", "Kuomba tarehe na njia ya malipo kwa maandishi", "Kumuuzia tu hata hivyo", "Kushusha bei yako"], answer: 1, why: "Mkataba unapaswa kuweka tarehe na njia ya malipo kwa maandishi." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Shamba kama biashara",
        questions: [
          { objective: "O1", q: "Kwa nini uweke kumbukumbu za shamba?", options: ["Ni kwa maafisa wa kodi tu", "Ili uone mradi upi unalipa, upange, na upate mikopo au mikataba", "Kujaza muda", "Kumbukumbu hazina faida"], answer: 1, why: "Kumbukumbu hugeuza kubahatisha kuwa maamuzi." },
          { objective: "O2", q: "Faida ghafi ni:", options: ["Ardhi yote ya shamba", "Mapato ukitoa gharama zinazobadilika za mradi mmoja", "Bei ya mbolea", "Pesa zilizokopwa"], answer: 1, why: "Inaonyesha kila mradi unaleta kiasi gani kabla ya gharama za kudumu." },
          { objective: "O2", q: "Ipi ni gharama inayobadilika?", options: ["Mbegu", "Ardhi unayoimiliki", "Tanki la maji lililokwisha jengwa", "Nyumba yako"], answer: 0, why: "Mbegu hubadilika kulingana na kiasi unachopanda." },
          { objective: "O3", q: "Mnunuzi anakupa mkataba. Unapaswa kukagua nini?", options: ["Jina la mnunuzi tu", "Hakuna; mikataba daima ni ya haki", "Rangi ya magunia tu", "Bei, kiasi, ubora, kupeleka, malipo na nini kitatokea mavuno yakishindwa"], answer: 3, why: "Masharti ndiyo yanaamua kama mkataba unakusaidia." },
          { objective: "O3", q: "Kwa nini mara nyingi bei hushuka mara baada ya mavuno?", options: ["Mazao husinyaa", "Wanunuzi huacha kula", "Wakulima wengi huuza wakati mmoja", "Serikali huziweka chini"], answer: 2, why: "Mazao mengi sokoni wakati wa mavuno hushusha bei." }
        ]
      }
    },
    {
      name: "Sura 2: Pesa, hatari na kukua",
      lessons: [
        {
          objectives: ["O4"],
          title: "Pesa za simu na mtiririko wa pesa",
          minutes: 5,
          goal: "Panga mtiririko wa pesa wa miezi 12 na utumie pesa za simu kwa usalama kwa shamba.",
          text: [
            "Mashamba mengi yana matatizo ya pesa si kwa sababu yanapata hasara, bali kwa sababu pesa zinaingia mara moja au mbili kwa mwaka na zinatoka mwaka mzima. Mpango wa mtiririko wa pesa unaonyesha, mwezi kwa mwezi, pesa unazotarajia kuingia na kutoka, ili uone miezi ya njaa ikija na upange.",
            "Pesa za simu (kama M-Pesa nchini Kenya, na pochi za simu na apps za benki nchini Nigeria) zinarahisisha kuwalipa wafanyakazi na wauzaji, kupokea malipo ya wanunuzi, kuweka akiba, na kuweka kumbukumbu. Baadhi ya wakulima huwa na pochi au akaunti tofauti ya shamba ili pesa za shamba na za nyumbani zisichanganyike.",
            "Kuwa salama: usimpe mtu yeyote PIN yako au msimbo wa mara moja, hata wanaosema wanatoka kampuni ya pesa za simu au ni mnunuzi; kagua jina kabla ya kutuma; na kuwa mwangalifu na jumbe za ghafla za \"umetumiwa pesa kimakosa\" zinazokuomba urudishe pesa. Ripoti matatizo kwa mtoa huduma kupitia njia zake rasmi."
          ],
          steps: ["Chora safu 12 za miezi.", "Andika pesa unazotarajia kuingia kila mwezi (mauzo, mapato mengine).", "Andika pesa unazotarajia kutoka (pembejeo, vibarua, ada za shule, chakula).", "Tafuta miezi ambapo zinazotoka ni zaidi ya zinazoingia, na upange akiba au muda.", "Tumia pochi au akaunti tofauti kwa pesa za shamba; usitoe PIN yako kamwe."],
          words: [["Mtiririko wa pesa", "wakati pesa zinapoingia na zinapotoka."], ["Miezi ya njaa", "miezi ambapo pesa au chakula hupungua, mara nyingi kabla ya mavuno."], ["PIN", "namba ya siri inayolinda akaunti yako ya pesa za simu."]],
          slides: [
            { title: "Mtiririko wa pesa, si faida tu", bullets: ["Pesa zinaingia mara moja au mbili kwa mwaka", "Pesa zinatoka mwaka mzima", "Panga kwa ajili ya miezi ya njaa"] },
            { title: "Pesa za simu zinasaidia", bullets: ["Kulipa wafanyakazi na wauzaji", "Kupokea malipo ya wanunuzi", "Kuweka akiba na kumbukumbu"] },
            { title: "Kuwa salama", bullets: ["Usitoe PIN wala msimbo kamwe", "Kagua jina kabla ya kutuma", "Jihadhari na hila za \"umetumiwa kimakosa\""] }
          ],
          tryIt: "Chora mpango wako wa mtiririko wa pesa wa miezi 12 wenye pesa zinazoingia na zinazotoka. Zungushia miezi ya njaa na uandike njia moja ya kujiandaa kwa kila mmoja (weka akiba kutoka mavuno, uza kidogo kidogo kwa nyakati tofauti, mradi mdogo wa nje ya msimu).",
          youCanNow: "kupanga mtiririko wa pesa wa shamba lako mwaka mzima na kutumia pesa za simu kwa usalama.",
          quickCheck: [
            { objective: "O4", q: "Mpango wa mtiririko wa pesa wa miezi 12 unakusaidia kuona nini?", options: ["Zao lipi linakua refu zaidi", "Hali ya hewa ya kila mwezi", "Miezi ya njaa kabla haijafika", "Mapato ya majirani zako"], answer: 2, why: "Unaonyesha miezi ambapo pesa zinazotoka ni zaidi ya zinazoingia." },
            { objective: "O4", q: "Ada za shule zinadaiwa mwezi usio na mauzo ya mavuno. Njia moja ya kujiandaa ni ipi?", options: ["Kutumia pesa zote za mavuno kwa mara moja", "Kuchukua mkopo wowote unaotolewa kwa ujumbe mfupi", "Kupuuza hadi wakati huo", "Kuweka akiba sehemu ya pesa za mavuno au kuuza kidogo kidogo"], answer: 3, why: "Kuweka akiba kutoka mavuno au kuuza kwa nyakati tofauti kunasaidia katika miezi ya njaa." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Mikopo na hatari: kukopa kwa busara",
          minutes: 6,
          goal: "Kokotoa gharama yote ya mkopo na uamue kama una maana kwa shamba.",
          text: [
            "Mkopo unaweza kusaidia kununua pembejeo au vifaa vinavyoleta zaidi ya gharama yake. Pia unaweza kuwa mtego. Kabla ya kukopa, jiulize: pesa zitanunua nini, zitaleta kiasi gani cha ziada, na lini? Utaweza kulipa katika tarehe ambazo mkopeshaji anaweka, hata mavuno yakiwa mabaya?",
            "Linganisha ofa kwa jumla ya kiasi utakacholipa, si kiwango cha riba peke yake: jumlisha riba yote, ada na gharama za bima. Kwa mfano (namba za kubuni), kukopa 20,000 na kulipa 2,000 kwa mwezi kwa miezi 12 maana yake unalipa 24,000: mkopo unagharimu 4,000. Hakikisha tarehe za kulipa zinaendana na wakati pesa zako zinaingia. Mikopo mifupi ya kidijitali inaweza kuwa ghali sana ukijumlisha ada.",
            "Tumia wakopeshaji wenye leseni: benki, benki za mikopo midogo (microfinance), SACCO na vyama vya ushirika, na wakopeshaji wa kidijitali walioidhinishwa na benki kuu au msimamizi husika (nchini Kenya, Benki Kuu ya Kenya inaorodhesha taasisi zenye leseni; nchini Nigeria, Benki Kuu ya Nigeria). Punguza hatari kwa akiba, mazao ya aina mbalimbali, bima panapopatikana, na kwa kukopa kile tu mpango unachohitaji. Zungumza na mshauri unayemwamini kabla ya kusaini."
          ],
          steps: ["Andika mkopo utanunua nini na unapaswa kuleta kiasi gani cha ziada.", "Jumlisha yote utakayolipa: riba, ada, bima.", "Linganisha tarehe za kulipa na mpango wako wa mtiririko wa pesa.", "Hakikisha mkopeshaji ana leseni.", "Panga kwa msimu mbaya: akiba, bima, mkopo mdogo zaidi.", "Muulize mshauri unayemwamini kabla ya kusaini."],
          words: [["Riba", "bei unayolipa ili kukopa pesa."], ["Gharama yote ya mkopo", "kila kitu unacholipa zaidi ya ulichokopa: riba pamoja na ada na gharama nyingine."], ["SACCO", "chama cha akiba na mikopo kinachomilikiwa na wanachama wake."], ["Dhamana", "kitu unachomwahidi mkopeshaji ikiwa hutaweza kulipa."]],
          slides: [
            { title: "Kabla ya kukopa", bullets: ["Utanunua nini?", "Utaleta kiasi gani cha ziada, na lini?", "Utaweza kulipa mavuno yakiwa mabaya?"] },
            { title: "Linganisha jumla", bullets: ["Riba + ada + bima", "Kopa 20,000, lipa 24,000: gharama 4,000", "Malipo yanaendana na mtiririko wako wa pesa?"] },
            { title: "Tumia wakopeshaji wenye leseni", bullets: ["Benki, mikopo midogo, SACCO, vyama vya ushirika", "Kenya: orodha za CBK; Nigeria: CBN", "Zungumza kwanza na mshauri unayemwamini"] }
          ],
          sources: [CBK, CBN],
          tryIt: "Chukua ofa halisi ya mkopo au ya mfano. Andika kiasi kilichokopwa, kila malipo na ada, jumla iliyolipwa na gharama yote. Kisha linganisha miezi ya kulipa na mpango wako wa mtiririko wa pesa na uandike kama una maana.",
          youCanNow: "kukokotoa gharama halisi ya mkopo na kuamua kama kukopa kuna maana kwa shamba lako.",
          quickCheck: [
            { objective: "O5", q: "Unapaswa kulinganisha ofa mbili za mkopo vipi?", options: ["Kwa jumla ya kiasi utakacholipa, pamoja na ada zote", "Kwa jinsi pesa zinavyofika haraka", "Kwa kiwango cha riba tu", "Kwa tangazo la mkopeshaji"], answer: 0, why: "Jumla inayolipwa inaonyesha gharama halisi ya kila mkopo." },
            { objective: "O5", q: "Malipo ya mkopo yanaanza mwezi unaofuata baada ya kupanda, kabla ya mavuno. Unafanya nini?", options: ["Kusaini haraka", "Kuulinganisha na mtiririko wako wa pesa na kuomba tarehe zinazoendana na wakati pesa zinaingia", "Kukopa zaidi ili kulipia", "Kutumia PIN yako kuharakisha"], answer: 1, why: "Tarehe za kulipa zinapaswa kuendana na miezi ambapo pesa zako zinaingia." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kuandika mpango wa biashara wa shamba wa ukurasa mmoja",
          minutes: 5,
          goal: "Andika mpango wa biashara wa ukurasa mmoja unaoweza kuuonyesha chama cha ushirika, mkopeshaji au mshirika.",
          text: [
            "Mpango wa biashara ni hadithi ya shamba lako kwa namba na malengo. Wakopeshaji, vyama vya ushirika, wanunuzi na washirika wanataka kuona kwamba unalijua shamba lako, soko lako na hatari zako. Ukurasa mmoja ulio wazi ni bora kuliko kurasa kumi zisizo wazi.",
            "Weka ndani: wewe ni nani na shamba lako (mahali, ardhi, unachozalisha); miradi yako na faida ghafi zake; soko lako (nani ananunua, kwa njia gani, kwa bei gani); muhtasari wa mtiririko wako wa pesa; unachohitaji (pembejeo, vifaa, mkopo) na jinsi kitakavyorudisha pesa; hatari zako kuu (hali ya hewa, wadudu, bei) na unachofanya kuzihusu; na malengo matatu ya msimu ujao yenye namba.",
            "Weka kumbukumbu na hesabu zako nyuma ya mpango, ili uweze kujibu maswali. Uusasishe kila msimu kwa kile kilichotokea kweli."
          ],
          steps: ["Muhtasari wa shamba: mahali, ardhi, miradi.", "Faida ghafi ya kila mradi.", "Soko: wanunuzi, njia, bei.", "Muhtasari wa mtiririko wa pesa na unachohitaji.", "Hatari na jinsi unavyozidhibiti.", "Malengo matatu yenye namba; sasisha kila msimu."],
          words: [["Mpango wa biashara", "hati fupi inayoeleza biashara inafanya nini, inapata pesa vipi, inahitaji nini na malengo yake."], ["Lengo", "shabaha iliyo wazi yenye namba na tarehe."]],
          slides: [
            { title: "Hadithi ya shamba lako kwa namba", bullets: ["Kwa wakopeshaji, vyama vya ushirika, wanunuzi, washirika", "Ukurasa mmoja ulio wazi ni bora kuliko kumi zisizo wazi"] },
            { title: "Kinachowekwa ndani", bullets: ["Muhtasari wa shamba na miradi", "Faida ghafi na soko", "Mtiririko wa pesa, mahitaji, kurudisha pesa"] },
            { title: "Malizia kwa nguvu", bullets: ["Hatari na jinsi unavyozidhibiti", "Malengo matatu yenye namba", "Sasisha kila msimu"] }
          ],
          sources: [FAO_CSA],
          tryIt: "Kazi ya mwisho: andika mpango wako wa biashara wa shamba wa ukurasa mmoja wenye faida ghafi za miradi miwili, soko, mtiririko wa pesa wa miezi 12, mkopo wowote na gharama yake yote, hatari na majibu yake, na malengo matatu ya msimu ujao.",
          youCanNow: "kuandika mpango wa biashara wa shamba wa ukurasa mmoja unaoungwa mkono na kumbukumbu na namba zako mwenyewe.",
          quickCheck: [
            { objective: "O6", q: "Kwa nini uweke kumbukumbu na hesabu nyuma ya mpango wako wa ukurasa mmoja?", options: ["Kuufanya mpango uwe mrefu zaidi", "Wakopeshaji hawasomi mipango", "Ili uweze kujibu maswali kuhusu namba zako", "Kuficha mapato yako halisi"], answer: 2, why: "Kumbukumbu zinaunga mkono mpango wako mkopeshaji au mnunuzi anapouliza maswali." },
            { objective: "O6", q: "Mahindi yako yalifanya vibaya kuliko ulivyopanga msimu huu. Unafanya nini na mpango wako wa biashara?", options: ["Kuutupa", "Kubaki na namba za zamani", "Kubadilisha malengo tu", "Kuusasisha kwa kile kilichotokea kweli"], answer: 3, why: "Mpango unasasishwa kila msimu kwa matokeo halisi." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Pesa, hatari na kukua",
        questions: [
          { objective: "O4", q: "Kwa nini shamba lenye faida bado linaweza kuishiwa pesa?", options: ["Faida si ya kweli", "Pesa zinaingia mara moja au mbili kwa mwaka lakini zinatoka mwaka mzima", "Pesa za simu huzipoteza", "Kumbukumbu husababisha hivyo"], answer: 1, why: "Wakati wa pesa kuingia na kutoka, si faida peke yake, ndio unaoamua kama unaweza kulipa bili." },
          { objective: "O4", q: "Mtu anayepiga simu akisema ni \"mtoa huduma wako wa pesa za simu\" anaomba PIN yako. Unapaswa:", options: ["Kuitoa haraka", "Kutoa nusu yake", "Usiitoe kamwe; wasiliana na mtoa huduma kupitia njia rasmi", "Kumtumia kwa ujumbe mfupi"], answer: 2, why: "Watoa huduma halisi hawaombi PIN yako kamwe." },
          { objective: "O5", q: "Unakopa 20,000 na kulipa 2,000 kwa mwezi kwa miezi 12. Mkopo unagharimu:", options: ["4,000", "2,000", "20,000", "Hakuna"], answer: 0, why: "Unalipa 24,000, ambayo ni 4,000 zaidi ya ulichokopa." },
          { objective: "O5", q: "Kabla ya kuchukua mkopo, hakikisha mkopeshaji:", options: ["Ni rafiki wa jirani yako", "Ni wa haraka sana", "Yuko kwenye mitandao ya kijamii", "Ana leseni kutoka benki kuu au msimamizi husika"], answer: 3, why: "Wakopeshaji wenye leseni hufuata sheria zinazowalinda wakopaji." },
          { objective: "O6", q: "Mpango mzuri wa biashara wa shamba ni:", options: ["Mrefu na usio wazi", "Ukurasa mmoja ulio wazi unaoungwa mkono na kumbukumbu na namba", "Orodha ya matamanio tu", "Siri kwa kila mtu"], answer: 1, why: "Mipango mifupi na iliyo mahususi ni rahisi kutekeleza na kuaminika." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Biashara ya Kilimo na Usimamizi wa Shamba",
    questions: [
      { objective: "O1", q: "Ipi ni kumbukumbu rahisi ya shamba?", options: ["Pesa zinazotoka: tarehe, nini, mradi, kiasi", "Picha ya anga", "Orodha ya nyimbo", "Hakuna kilichoandikwa"], answer: 0, why: "Kuandika pesa zinazotoka kwa kila mradi kunaonyesha gharama." },
      { objective: "O1", q: "Unapaswa kuandika kumbukumbu lini?", options: ["Mara moja kwa mwaka", "Siku hiyo hiyo", "Ukiombwa tu", "Kamwe"], answer: 1, why: "Kumbukumbu za siku hiyo hiyo ni sahihi." },
      { objective: "O1", q: "Kwa nini uhesabu siku za kazi za familia?", options: ["Ni bure", "Kulipa kodi", "Muda wako una thamani na unaathiri mradi upi unalipa", "Haihitajiki"], answer: 2, why: "Kazi isiyolipwa bado ni gharama halisi ya muda." },
      { objective: "O2", q: "Mradi ni:", options: ["Benki", "Trekta", "Soko", "Shughuli moja shambani, kama mahindi au kuku"], answer: 3, why: "Kila mradi unapimwa peke yake." },
      { objective: "O2", q: "Mapato 63,000, gharama zinazobadilika 34,000. Faida ghafi ni:", options: ["29,000", "34,000", "63,000", "97,000"], answer: 0, why: "63,000 - 34,000 = 29,000." },
      { objective: "O2", q: "Kwa nini ukokotoe faida ghafi kwa ekari?", options: ["Kufanya namba ziwe kubwa", "Kulinganisha miradi kwa haki", "Kwa sababu wanunuzi wanauliza", "Kulipa kodi ya ardhi"], answer: 1, why: "Kipimo kile kile cha ardhi kinafanya ulinganisho uwe wa haki." },
      { objective: "O2", q: "Kodi ya ardhi unayolipa hata ulime nini ni:", options: ["Gharama inayobadilika", "Faida ghafi", "Gharama ya kudumu", "Mauzo"], answer: 2, why: "Gharama za kudumu hazibadiliki kulingana na kiasi unacholima." },
      { objective: "O2", q: "Mazao mawili yana faida zinazokaribiana, lakini moja hushindwa mara nyingi. Unapaswa:", options: ["Kupuuza hatari", "Kulima lile lenye hatari tu", "Kuchagua kwa rangi", "Kufikiria hatari pamoja na faida"], answer: 3, why: "Faida kubwa ina thamani ndogo ikiwa kushindwa kunawezekana." },
      { objective: "O3", q: "Kukusanya mazao na chama cha ushirika kunasaidia kwa sababu:", options: ["Kiasi kikubwa kinaweza kupata bei bora", "Mazao hukua haraka", "Ubora hauhitajiki", "Wanunuzi hulipa kidogo"], answer: 0, why: "Wanunuzi hulipa zaidi kwa mazao mengi yanayopatikana kwa uhakika." },
      { objective: "O3", q: "Mazao safi, makavu na yaliyochambuliwa:", options: ["Huleta pesa kidogo", "Huleta pesa zaidi na hudumu muda mrefu", "Hayatakiwi", "Huharibika haraka"], answer: 1, why: "Kufikia viwango vya ubora huongeza bei na muda wa kuhifadhi." },
      { objective: "O3", q: "Kabla ya kusaini makubaliano ya kilimo cha mkataba unapaswa:", options: ["Kusaini mara moja", "Kukubaliana kwa simu tu", "Kusoma masharti na kuupata kwa maandishi", "Kumwachia mnunuzi aamue kila kitu"], answer: 2, why: "Masharti yaliyoandikwa yanakulinda." },
      { objective: "O4", q: "Mpango wa mtiririko wa pesa unaonyesha:", options: ["Faida yote tu", "Aina za mazao", "Mvua", "Pesa zinazoingia na kutoka mwezi kwa mwezi"], answer: 3, why: "Wakati wa pesa ndio maana ya mtiririko wa pesa." },
      { objective: "O4", q: "Miezi ya njaa ni:", options: ["Miezi ambapo pesa au chakula hupungua", "Miezi ya mavuno", "Sikukuu", "Siku za soko"], answer: 0, why: "Kuipangia kunazuia kukopa au kuuza kwa dharura." },
      { objective: "O4", q: "Faida ya pochi au akaunti tofauti ya shamba ni:", options: ["Bei za juu zaidi", "Pesa za shamba na za nyumbani hazichanganyiki", "Hakuna haja ya kumbukumbu", "Mbolea ya bure"], answer: 1, why: "Kutenganisha kunaonyesha shamba linapata na kutumia kiasi gani kweli." },
      { objective: "O4", q: "Ujumbe unasema umepokea pesa kimakosa na unakuomba uzirudishe. Unapaswa:", options: ["Kuzituma mara moja", "Kutuma mara mbili", "Kukagua salio na taarifa zako halisi, na kuwasiliana na mtoa huduma kupitia njia rasmi", "Kutoa PIN yako"], answer: 2, why: "Jumbe bandia za \"umetumiwa kimakosa\" ni hila ya kawaida." },
      { objective: "O5", q: "Ili kulinganisha mikopo, angalia:", options: ["Tangazo tu", "Kiwango cha riba tu", "Jinsi unavyolipwa haraka tu", "Jumla ya kiasi utakacholipa, pamoja na ada zote"], answer: 3, why: "Ada zinaweza kufanya mkopo wa riba ndogo kuwa ghali." },
      { objective: "O5", q: "SACCO ni:", options: ["Chama cha akiba na mikopo kinachomilikiwa na wanachama", "Mdudu wa mazao", "Kodi ya serikali", "Ndege isiyo na rubani (drone)"], answer: 0, why: "SACCO hukusanya akiba za wanachama na kuwakopesha wanachama." },
      { objective: "O5", q: "Tarehe za kulipa mkopo zinapaswa:", options: ["Kupuuzwa", "Kuendana na miezi ambapo pesa zako zinaingia", "Kuwa kila wiki daima", "Kuamuliwa baada ya kutumia pesa"], answer: 1, why: "Kuendanisha malipo na mapato kunazuia kushindwa kulipa." },
      { objective: "O6", q: "Kipi kinapunguza hatari ya shamba?", options: ["Kukopa kadiri iwezekanavyo", "Kulima zao moja tu", "Akiba, mazao ya aina mbalimbali na bima panapopatikana", "Kuuza kila kitu wakati wa mavuno"], answer: 2, why: "Kusambaza hatari kunalinda shamba katika misimu mibaya." },
      { objective: "O6", q: "Mpango wa biashara unapaswa kusasishwa:", options: ["Kamwe", "Kila miaka kumi", "Mkopeshaji akiomba tu", "Kila msimu kwa kile kilichotokea kweli"], answer: 3, why: "Kusasisha kunaufanya mpango uwe halisi na wenye manufaa." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      4,
      7,
      8,
      11,
      14,
      15,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Faida ghafi",
        objective: "O2",
        notYet: "Chini ya miradi miwili, au makosa ya hesabu.",
        meets: "Faida ghafi kwa ekari ya miradi miwili, kwa bei za eneo hilo na hesabu sahihi.",
        exceeds: "Analinganisha kazi na hatari pamoja na faida ghafi."
      },
      {
        name: "Soko",
        objective: "O3",
        notYet: "Hakuna mnunuzi wala njia ya kuuza iliyotajwa.",
        meets: "Anataja nani atanunua, kwa njia gani, na kwa bei gani.",
        exceeds: "Analinganisha angalau njia tatu za kuuza na ubora ambao kila moja inataka."
      },
      {
        name: "Mtiririko wa pesa",
        objective: "O4",
        notYet: "Hakuna muhtasari wa mwezi kwa mwezi.",
        meets: "Muhtasari wa miezi 12 wa pesa zinazoingia na kutoka, na miezi ya njaa imewekwa alama.",
        exceeds: "Mpango kwa kila mwezi wa njaa."
      },
      {
        name: "Mkopo",
        objective: "O5",
        notYet: "Mkopo umeorodheshwa bila gharama yake yote wala mpango wa kulipa.",
        meets: "Mkopo wowote unaonyesha jumla inayolipwa, gharama yote na jinsi malipo yanavyoendana na mtiririko wa pesa, au hakuna mkopo unaohitajika.",
        exceeds: "Anataja mkopeshaji mwenye leseni na mpango kwa msimu mbaya."
      },
      {
        name: "Hatari na malengo",
        objective: "O6",
        notYet: "Hakuna hatari wala malengo.",
        meets: "Hatari kuu pamoja na jinsi ya kuzipunguza, na malengo matatu yenye namba.",
        exceeds: "Inaingia kwenye ukurasa mmoja ulio wazi unaoungwa mkono na kumbukumbu."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wakulima wanaoweka kumbukumbu kwa angalau miezi mitatu (utafiti wa kufuatilia)",
      "Mapato ya shamba au faida ghafi ikilinganishwa na msimu uliopita, kama wanavyoripoti wakulima au washirika",
      "Wakulima wanaojiunga na chama cha ushirika, wanaosaini mkataba wa mnunuzi kwa maandishi au wanaopata mkopo kutoka kwa mkopeshaji mwenye leseni wakiwa na mpango"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Daftari na kalamu, au jedwali la hesabu kwenye simu",
      "Kikokotoo (simu ya kawaida ina kimoja)",
      "Bei na gharama za eneo la mwanafunzi mwenyewe, au mifano ya kozi",
      "Taarifa ya miamala ya pesa za simu ikiwa mwanafunzi anayo",
      "Kama dakika 60 za masomo, pamoja na muda wa kukusanya bei na kuandika mpango"
    ],
    facilitatorNotes: [
      "Fanyeni faida ghafi moja pamoja kwa bei halisi za eneo la kikundi kabla wanafunzi hawajafanya zao wenyewe.",
      "Wakumbushe wanafunzi kwamba namba za kozi ni za kubuni; bei zinatofautiana kwa mahali na msimu.",
      "Sisitiza usalama wa pesa za simu: usitoe kamwe PIN au msimbo, na ripoti matatizo kupitia njia rasmi tu.",
      "Mwalike afisa wa chama cha ushirika au SACCO aeleze mikopo yenye leseni; usitoe mapendekezo ya mikopo wewe mwenyewe.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
