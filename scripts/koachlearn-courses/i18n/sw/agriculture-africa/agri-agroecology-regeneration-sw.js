"use strict";

// Koach Learn course (Swahili translation of agriculture-africa/agri-agroecology-regeneration.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const FAO_AE = { name: "FAO: Kituo cha maarifa ya kilimo-ikolojia (Agroecology Knowledge Hub)", url: "https://www.fao.org/agroecology/en/" };
const FAO_10 = { name: "FAO: Vipengele 10 vya kilimo-ikolojia (vilivyokubaliwa na nchi wanachama wa FAO mwaka 2019)", url: "https://www.fao.org/agroecology/overview/the-10-elements-of-agroecology/en" };
const FMNR_STEPS = { name: "Tearfund Footsteps 110: Uoteshaji upya wa asili unaosimamiwa na mkulima (FMNR), hatua za mafanikio (pamoja na World Vision)", url: "https://learn.tearfund.org/-/media/learn/resources/footsteps/pdfs/footsteps-101-110/2020-tearfund-footsteps-110-farming-for-the-future-en-centre-page-en.pdf" };
const FMNR_ICRAF = { name: "World Agroforestry (ICRAF) Uganda: Mwongozo wa mtumiaji wa FMNR", url: "https://fmnrhub.com.au/wp-content/uploads/2024/05/FMNR_Uganda-near-final-v3-2018.pdf" };
const FAO_AGROFOR = { name: "FAO: Kilimo mseto cha miti (Agroforestry)", url: "https://www.fao.org/agroforestry/en/" };
const GLIRICIDIA = { name: "Sileshi na wenzake: Je, kuchanganya miti jamii ya kunde kunaweza kuongeza uthabiti wa mavuno ya mahindi ya mvua Kusini mwa Afrika? (majaribio ya Malawi na Zambia)", url: "https://repository.up.ac.za/handle/2263/20631" };
const TITHONIA = { name: "Tithonia diversifolia: tofauti za virutubisho kwenye majani na maana yake kwa kuhamisha majani shambani (magharibi mwa Kenya)", url: "https://centaur.reading.ac.uk/119281" };
const FAO_SOM = { name: "FAO: Umuhimu wa mabaki ya viumbe hai kwenye udongo (soil organic matter)", url: "https://www.fao.org/4/a0100e/a0100e.pdf" };
const HANDBOOK_4R = { name: "Usimamizi wa virutubisho vya mimea wa 4R katika kilimo cha Afrika: kitabu cha maafisa ugani", url: "https://alliancebioversityciat.org/publications-data/4r-plant-nutrient-management-african-agriculture-extension-handbook-fertilizer" };

module.exports = {
  id: "agri-agroecology-regeneration-sw",
  lang: "sw",
  translationOf: "agri-agroecology-regeneration",
  category: "Agriculture (Africa)",
  name: "Kilimo-ikolojia na Kurejesha Udongo",
  skills: "Kutumia kanuni za kilimo-ikolojia, Kurejesha ardhi kwa mazao ya kufunika udongo na mbolea ya kijani, Kuotesha upya miti kwa FMNR, Kuunganisha mazao na mifugo, Kupunguza gharama ya mbolea, Kupima uboreshaji wa udongo msimu kwa msimu",
  outcome: "kuandika na kuanza mpango wa misimu mitatu wa kurudisha uhai kwenye shamba moja lililochoka kwa kutumia kilimo-ikolojia: mazao ya kufunika udongo au mbolea ya kijani, miti, uhusiano wa mazao na mifugo na virutubisho vya shambani, huku ukinunua mbolea kidogo na ukitumia vipimo rahisi kuona udongo ukiboreka.",
  about: [
    "Kozi hii ni ya wakulima wadogo na wakulima wa kibiashara wanaokua, vijana wajasiriamali wa kilimo, wafanyakazi wa mashamba na maafisa ugani nchini Kenya, Nigeria, Ghana, Niger, Senegal na kote Afrika ambao ardhi yao imechoka: mavuno yanashuka, udongo ni mgumu au unasombwa na maji, kiduha (striga) kinaenea, na mbolea inapanda bei kila mwaka.",
    "Sura ya 1 inahusu kanuni za kilimo-ikolojia na jinsi ya kurejesha ardhi iliyoharibika: mazao ya kufunika udongo na mbolea ya kijani, miti ya mbolea, na uoteshaji upya wa asili unaosimamiwa na mkulima (FMNR), ambao umesaidia wakulima wa Niger kurudisha miti kwenye mamilioni ya hekta. Sura ya 2 inaunganisha mazao na mifugo, inatumia bioanuai kwa faida yako, inapunguza gharama ya mbolea kutoka nje na inakuonyesha jinsi ya kupima uboreshaji msimu kwa msimu.",
    "Kozi \"Afya na Rutuba ya Udongo\" inahusu kupima udongo, mboji, mzunguko wa mazao na matandazo; kozi hii inajenga juu yake na hairudii mambo hayo. Kurejesha udongo kunachukua misimu kadhaa, kwa hiyo anza na shamba moja na ulinganishe. Takwimu za pesa ni mifano ya kubuni. Kila somo linachukua kama dakika tano na linaisha na kazi kwenye ardhi yako mwenyewe."
  ],
  finalTask: "Andika mpango wa misimu mitatu wa kurejesha shamba moja lililochoka kwenye shamba lako (au mfano: ekari 1 ya mahindi iliyochoka Kakamega, hekta 2 za mtama na karanga Zinder, Niger, au hekta 1 ya mihogo Jimbo la Oyo): hali ya shamba sasa; mazao ya kufunika udongo, mbolea ya kijani au miti utakayotumia na lini; jinsi mazao na mifugo watakavyolishana; mifuko mingapi ya mbolea ya kununua unalenga kubadilisha na pesa utakazookoa; na vipimo vinne au zaidi utakavyorekodi kila msimu, pamoja na mchoro wa shamba.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wakulima wadogo na wakulima wa kibiashara wanaokua, wafanyakazi wa mashamba, vijana wajasiriamali wa kilimo na maafisa ugani kote Afrika (Kenya, Nigeria, Ghana na Afrika Magharibi inayozungumza Kifaransa, pamoja na Sahel), wanaolima mahindi, mihogo, mtama, uwele, maharage, karanga, mpunga, kakao na kahawa, mara nyingi pamoja na mbuzi, ng'ombe, nguruwe au kuku.",
    startingPoint: "Wanajua mambo ya msingi ya mboji, samadi, mzunguko wa mazao na matandazo, na wanaona kwamba udongo wao umeharibika. Wachache wanatumia kwa makusudi mazao ya kufunika udongo, mbolea ya kijani, miti ya mbolea au FMNR, wanaunganisha mazao na mifugo kama mfumo mmoja, au wanapima mabadiliko ya udongo kwa muda.",
    gap: "Udongo ulioharibika na bei za mbolea zinazopanda zinabana mavuno na mapato. Wanafunzi wanahitaji njia za vitendo na za gharama ndogo za kujenga upya udongo na kupunguza pembejeo za kununua, na njia ya kuona kama inafanya kazi, ili waendelee hata katika misimu ya mwanzo ambayo mabadiliko ni ya polepole.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; kozi inapatikana pia kwa Kihispania, Kifaransa na Kiarabu",
      "Ardhi na nguvu kazi: mashamba madogo, kazi ya familia, mabaki ya mazao yanahitajika pia kwa matumizi mengine (chakula cha mifugo, kuni)",
      "Muda: kurejesha udongo kunachukua misimu kadhaa; masomo ni ya dakika 4 hadi 6",
      "Pesa: takwimu ni mifano; hakuna bei wala ruzuku inayotolewa kama ukweli",
      "Haki za ardhi: sheria za miti na malisho zinatofautiana kati ya jamii na nchi; wanafunzi wanakagua sheria na sheria ndogo za eneo lao"
    ],
    prerequisites: "Inapendekezwa kuanza na \"Afya na Rutuba ya Udongo\" (kupima udongo, mboji, mzunguko wa mazao, matandazo)."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa orodha ya mbinu zinazotumika shambani kwako", action: "kuoanisha kila mbinu na kanuni ya kilimo-ikolojia inayoitumia, kama urejelezaji, anuai au ushirikiano", standard: "ukioanisha angalau mbinu tano kwa usahihi" },
    { id: "O2", condition: "Kwa shamba moja lililoharibika", action: "kuchagua zao la kufunika udongo au mbolea ya kijani na kupanga lini kulipanda na lini kulikata", standard: "kwa aina inayofaa mvua yako, na tarehe ya kupanda na ya kukata" },
    { id: "O3", condition: "Kwenye kipande chenye visiki hai vya miti au nafasi ya miti", action: "kupanga uoteshaji upya wa asili unaosimamiwa na mkulima (FMNR) au miti ya mbolea, hatua kwa hatua", standard: "ukieleza visiki au miti ipi, mashina mangapi, kupogoa na kulinda dhidi ya mifugo na moto" },
    { id: "O4", condition: "Ukipewa mazao na mifugo iliyo shambani kwako", action: "kuchora mtiririko wa chakula cha mifugo, samadi na mabaki kati ya mazao na mifugo yako", standard: "ukionyesha angalau viungo vitatu na sehemu moja ambapo virutubisho vinatoka nje ya shamba" },
    { id: "O5", condition: "Ukipewa matumizi ya mbolea ya msimu uliopita", action: "kukadiria mifuko mingapi ya mbolea ya kununua inaweza kubadilishwa na virutubisho vya shambani na pesa zitakazookolewa", standard: "kwa fedha ya nchi yako, ikiwa imeandikwa kuwa ni makadirio ya kukagua na afisa ugani" },
    { id: "O6", condition: "Kwenye shamba unalorejesha", action: "kurekodi vipimo rahisi vya udongo na shamba wakati uleule kila msimu", standard: "ukitumia angalau vipimo vinne, vilivyoandikwa na kulinganishwa na msimu uliopita" }
  ],
  chapters: [
    {
      name: "Sura 1: Kanuni na kurejesha ardhi",
      lessons: [
        {
          title: "Kilimo-ikolojia: kanuni unazoweza kutumia shambani",
          objectives: ["O1"],
          minutes: 5,
          goal: "Oanisha mbinu zinazotumika shambani kwako na kanuni za kilimo-ikolojia.",
          text: [
            "Kilimo-ikolojia ni kulima kwa kufuata jinsi asili inavyofanya kazi: kutumia mimea, wanyama, viumbe hai wa udongoni, miti na maarifa ya watu ili shamba lijilishe zaidi na linunue kidogo kutoka nje. FAO inaeleza vipengele 10 vya kilimo-ikolojia, vilivyokubaliwa na nchi wanachama wake mwaka 2019.",
            "Vitano vinahusu jinsi shamba linavyofanya kazi: urejelezaji (virutubisho na takataka zinarudi shambani), ufanisi (kupata zaidi kutoka maji, ardhi na pembejeo zilezile), anuai (mazao, wanyama na miti mingi), ushirikiano (sehemu zinazosaidiana, kama mikunde inayolisha mahindi) na ustahimilivu (kuweza kukabili mishtuko). Vitano vinahusu watu: kujenga maarifa pamoja (wakulima na watafiti wakijifunza pamoja), maadili ya kibinadamu na kijamii, utamaduni na mila za chakula, uongozi unaowajibika, na uchumi wa mzunguko na mshikamano (kuuza na kununua ndani ya eneo lako na kwa haki).",
            "Huenda tayari unatumia baadhi. Kuwalisha mbuzi mabua ya mahindi na kurudisha samadi yao shambani ni urejelezaji na ushirikiano. Kupanda mihogo pamoja na karanga ni anuai. Shule ya wakulima shambani ni kujenga maarifa pamoja. Kilimo-ikolojia kinakuomba uyatumie haya kwa makusudi, na uongeze zaidi, hatua kwa hatua."
          ],
          words: [["Kilimo-ikolojia", "kilimo kinachotumia michakato ya asili na maarifa ya wenyeji ili shamba lihitaji pembejeo chache za kununua na kustahimili mishtuko vizuri zaidi."], ["Ushirikiano (synergy)", "sehemu mbili za shamba zinaposaidiana, hivyo pamoja zinatoa zaidi kuliko zikiwa peke yake."], ["Urejelezaji (shambani)", "kurudisha mabaki ya mazao, samadi na takataka kwenye udongo badala ya kuvipoteza."]],
          slides: [
            { title: "Kilimo-ikolojia ni...", bullets: ["Kulima kwa kufuata michakato ya asili", "Shamba linajilisha zaidi, linanunua kidogo", "FAO: vipengele 10, vilivyokubaliwa 2019"] },
            { title: "Jinsi shamba linavyofanya kazi", bullets: ["Urejelezaji na ufanisi", "Anuai na ushirikiano", "Ustahimilivu"] },
            { title: "Watu na haki", bullets: ["Kujenga maarifa pamoja", "Maadili ya kijamii, utamaduni wa chakula", "Uongozi bora; uchumi wa mzunguko na wa haki"] },
            { title: "Huenda tayari unafanya hivi", bullets: ["Mabua kwa mbuzi, samadi inarudi shambani", "Mihogo + karanga kwa pamoja", "Shule za wakulima shambani"] }
          ],
          sources: [FAO_10, FAO_AE],
          tryIt: "Orodhesha mbinu sita zinazotumika shambani kwako au kijijini kwako. Kando ya kila moja, andika kanuni ya kilimo-ikolojia inayoitumia (urejelezaji, ufanisi, anuai, ushirikiano, ustahimilivu au mojawapo ya vipengele vya watu). Zungushia duara kanuni moja ambayo huitumii sana.",
          youCanNow: "kuoanisha mbinu za shambani na kanuni za kilimo-ikolojia na kuona zipi unaweza kutumia zaidi.",
          quickCheck: [
            { objective: "O1", q: "Mkulima anawalisha mbuzi wake majani ya maharage na kutandaza samadi ya mbuzi kwenye mahindi yake. Anatumia kanuni zipi?", options: ["Urejelezaji na ushirikiano", "Uongozi peke yake", "Ufanisi wa trekta", "Hakuna"], answer: 0, why: "Mabaki yanalisha wanyama na samadi inalisha udongo: virutubisho vinarejelezwa na sehemu zinasaidiana." },
            { objective: "O1", q: "Kipi ni mfano wa anuai shambani?", options: ["Mahindi peke yake, kila msimu, kwenye kila shamba", "Kuchoma mabaki yote", "Mihogo, karanga, miti na mbuzi kwenye shamba moja", "Kununua chakula chote cha mifugo mjini"], answer: 2, why: "Mazao, wanyama na miti mingi pamoja ni anuai, mojawapo ya vipengele 10 vya FAO." }
          ]
        },
        {
          title: "Kurejesha ardhi iliyoharibika: mazao ya kufunika na mbolea ya kijani",
          objectives: ["O2"],
          minutes: 6,
          goal: "Chagua zao la kufunika udongo au mbolea ya kijani kwa shamba lililoharibika na upange lini kulipanda na kulikata.",
          text: [
            "Ardhi iliyoharibika imepoteza mabaki ya viumbe hai na muundo wake: mvua inatiririka juu yake, mazao yanadumaa na magugu kama kiduha (striga) yanatawala. Matandazo na mboji husaidia, lakini mara chache unakuwa navyo vya kutosha. Mazao ya kufunika udongo na mbolea ya kijani yanazalisha mabaki ya viumbe hai hapohapo shambani.",
            "Zao la kufunika udongo linapandwa hasa ili kufunika na kulinda udongo, mara nyingi kati ya misimu. Mbolea ya kijani ni zao linalopandwa kisha kukatwa na kuachwa juu ya udongo au kuchanganywa nao ili kuulisha. Mikunde inafanya yote mawili na pia inaongeza naitrojeni: fiwi (lablab), mukuna (velvet bean), kanavalia (jack bean), krotalaria, kunde na mbaazi zinatumika katika sehemu mbalimbali za Afrika. Baadhi, kama fiwi na kunde, zinatoa pia chakula au lishe ya mifugo; mbegu za mukuna zinahitaji kuandaliwa kwa njia maalum kabla watu hawajazila, kwa hiyo litumie kama zao la udongo na lishe ya mifugo na umuulize afisa ugani.",
            "Vichaka vyenye majani mengi vinaweza pia kutumika kama mbolea ya majani mabichi. Magharibi mwa Kenya, wakulima wanakata majani ya tithonia (alizeti ya Mexico) kutoka kwenye ua na kuyatandaza mashambani; utafiti uligundua majani hayo yana virutubisho vingi, lakini kukata na kubeba ni kazi ngumu, kwa hiyo yanalipa zaidi kwenye mboga na mazao mengine ya thamani kubwa.",
            "Wakati ni muhimu. Panda zao la kufunika mapema ili likue vizuri kabla ya kiangazi, au lipande ndani ya zao kuu wiki chache baada ya kupanda. Likate kabla halijashindana na zao lako linalofuata au kabla halijatoa mbegu ngumu, na uache ulichokata juu ya udongo kama matandazo. Muulize afisa ugani au taasisi ya utafiti ni aina zipi na tarehe zipi zinafaa mvua yako."
          ],
          steps: ["Tembea shambani: wapi ni wazi, pagumu au pamejaa kiduha?", "Chagua aina moja au mbili za zao la kufunika au mbolea ya kijani zinazofaa mvua yako.", "Amua: kulipanda kati ya misimu, ndani ya zao kuu, au kama shamba la kupumzika.", "Andika tarehe ya kupanda na tarehe ya kukata.", "Likate kabla halijashindana na zao lako; liache juu ya udongo.", "Zuia mifugo hadi limalize kazi yake, au panga kugawana lishe."],
          words: [["Ardhi iliyoharibika", "ardhi iliyopoteza udongo, mabaki ya viumbe hai au mimea ya kuifunika, hivyo inazalisha kidogo sana."], ["Zao la kufunika udongo", "zao linalopandwa hasa ili kufunika na kulinda udongo."], ["Mbolea ya kijani", "zao linalopandwa kisha kukatwa na kuachwa juu au ndani ya udongo ili kuulisha."], ["Kupanda kwa kupokezana (relay cropping)", "kupanda zao la pili ndani ya zao lililosimama kabla zao la kwanza halijavunwa."]],
          slides: [
            { title: "Zalisha mabaki ya viumbe hai shambani", bullets: ["Ardhi iliyoharibika: maji yanatiririka, mazao yanadumaa, kiduha", "Matandazo na mboji ya kuleta hayatoshi", "Mazao ya kufunika na mbolea ya kijani yanazalisha hapohapo"] },
            { title: "Chaguo za mikunde", bullets: ["Fiwi, kunde, mbaazi: pia chakula au lishe ya mifugo", "Mukuna, kanavalia, krotalaria: udongo na lishe ya mifugo", "Zinaongeza naitrojeni kutoka hewani"] },
            { title: "Mbolea ya majani mabichi", bullets: ["Majani ya tithonia magharibi mwa Kenya", "Yana virutubisho vingi; kukata ni kazi ngumu", "Yanafaa zaidi mazao ya thamani kubwa"] },
            { title: "Panga wakati vizuri", bullets: ["Panda mapema au ndani ya zao kuu", "Kata kabla halijashindana au kutoa mbegu ngumu", "Muulize afisa ugani kinachofaa mvua yako"] }
          ],
          sources: [TITHONIA, FAO_SOM],
          tryIt: "Chagua shamba lako lililoharibika zaidi. Chagua zao moja la kufunika udongo au mbolea ya kijani kwa ajili yake, na uandike: kwa nini umelichagua, tarehe ya kupanda, jinsi utakavyolipanda (kati ya misimu, ndani ya zao kuu au shamba la kupumzika) na tarehe ya kukata. Andika swali moja la kumuuliza afisa ugani.",
          youCanNow: "kuchagua zao la kufunika udongo au mbolea ya kijani kwa shamba lililoharibika na kupanga lini kulipanda na kulikata.",
          quickCheck: [
            { objective: "O2", q: "Tofauti kuu kati ya zao la kufunika udongo na mbolea ya kijani ni ipi?", options: ["Mazao ya kufunika ni miti kila wakati", "Mbolea ya kijani inanunuliwa kwenye mifuko", "Hakuna tofauti", "Mbolea ya kijani inapandwa ili ikatwe na kuachwa ilishe udongo"], answer: 3, why: "Mazao ya kufunika yanalinda udongo; mbolea ya kijani inapandwa hasa ili ikatwe na kuulisha (mazao mengi yanafanya yote mawili)." },
            { objective: "O2", q: "Ukate lini zao la kufunika lililopandwa kabla ya mahindi?", options: ["Kabla halijashindana na mahindi au kutoa mbegu ngumu", "Kamwe", "Baada ya mahindi kuvunwa", "Likitoa maua ya zambarau tu"], answer: 0, why: "Kukata kwa wakati unaofaa kunazuia ushindani na kunaacha matandazo kwa zao linalofuata." }
          ]
        },
        {
          title: "Miti inayorudi: FMNR na miti ya mbolea",
          objectives: ["O3"],
          minutes: 6,
          goal: "Panga uoteshaji upya wa asili unaosimamiwa na mkulima au miti ya mbolea kwa kipande kimoja.",
          text: [
            "Mashamba mengi yanayoonekana hayana miti bado yana visiki hai na mizizi chini ya udongo. Uoteshaji upya wa asili unaosimamiwa na mkulima (FMNR) unaviacha viote tena badala ya kuvifyeka kila msimu. Nchini Niger, FMNR ilienea kutoka mkulima mmoja hadi mwingine na imerudisha miti kwenye zaidi ya hekta milioni tano za mashamba, ikitoa lishe ya mifugo, kuni, kivuli na mazao bora.",
            "Hatua, kutoka World Vision na miongozo ya washirika: kagua shamba uone visiki vinavyochipua na uchague aina zenye manufaa; kwa kila kisiki, bakiza mashina matatu hadi matano marefu na yaliyonyooka zaidi na ukate mengine; pogoa matawi ya pembeni hadi karibu nusu ya urefu wa kila shina, kwa kifaa chenye makali, ukikata kuelekea juu; rudi kila baada ya miezi michache kuondoa machipukizi mapya; linda mashina dhidi ya mifugo na moto; unapovuna shina, acha shina changa zaidi lichukue nafasi yake. Weka alama kwenye mashina uliyochagua na ukubaliane sheria na majirani na jamii yako ili mifugo na wakataji wayaache.",
            "Mahali pasipo na visiki, unaweza kupanda miti ya mbolea: miti jamii ya kunde kama glirisidia, faidherbia (inayopatikana sana kwenye mashamba yenye miti ya Sahel, pamoja na eneo la karanga la Senegal) au kaliandra, ambayo majani yake yanalisha udongo au mifugo. Majaribio ya muda mrefu nchini Malawi na Zambia yaligundua kwamba mahindi yaliyopandwa pamoja na glirisidia yalitoa mavuno thabiti zaidi kwa miaka kuliko mahindi yenye mbolea peke yake, ingawa kupogoa miti mara mbili au tatu kwa mwaka ni kazi halisi.",
            "Kabla ya kukata au kuuza miti, kagua sheria za misitu za nchi yako na sheria ndogo za jamii yako."
          ],
          steps: ["Tembea kwenye kipande na uweke alama kwenye visiki hai na miti michanga.", "Chagua aina zenye manufaa: lishe ya mifugo, kuni, matunda, udongo.", "Bakiza mashina 3 hadi 5 yaliyonyooka kwa kila kisiki; kata mengine.", "Pogoa matawi ya pembeni hadi nusu ya urefu; kifaa chenye makali, kata kuelekea juu.", "Linda dhidi ya mifugo na moto; kubaliana sheria na majirani.", "Hakuna visiki? Panga miti ya mbolea kwa ushauri wa afisa ugani."],
          words: [["FMNR", "uoteshaji upya wa asili unaosimamiwa na mkulima: kuacha visiki na mizizi ya miti kwenye ardhi yako viote tena, kisha kuchagua na kupogoa mashina bora."], ["Mti wa mbolea", "mti, kwa kawaida jamii ya kunde, ambao majani yake yanalisha udongo."], ["Shamba lenye miti (parkland)", "shamba lenye miti iliyotawanyika katikati ya mazao."], ["Sheria ndogo", "sheria iliyokubaliwa na jamii ya eneo au baraza la eneo."]],
          slides: [
            { title: "Msitu uliofichwa chini ya ardhi", bullets: ["Visiki hai na mizizi kwenye mashamba matupu", "FMNR inaviacha viote tena", "Niger: miti imerudi kwenye hekta milioni 5+"] },
            { title: "Hatua za FMNR", bullets: ["Chagua visiki na aina zenye manufaa", "Bakiza mashina 3 hadi 5 yaliyonyooka", "Pogoa hadi nusu; kifaa chenye makali, kata kuelekea juu"] },
            { title: "Linda na usimamie", bullets: ["Ondoa machipukizi mapya kila baada ya miezi michache", "Zuia mifugo na moto", "Kubaliana sheria na jamii"] },
            { title: "Hakuna visiki? Miti ya mbolea", bullets: ["Glirisidia, faidherbia, kaliandra", "Mavuno thabiti zaidi ya mahindi katika majaribio ya Malawi na Zambia", "Kupogoa ni kazi; kagua sheria za misitu"] }
          ],
          sources: [FMNR_STEPS, FMNR_ICRAF, GLIRICIDIA, FAO_AGROFOR],
          tryIt: "Tembea kwenye kipande kimoja na uhesabu visiki hai au miti michanga. Chora mchoro wa haraka ukiweka alama kwenye ile ambayo ungeibakiza. Andika ni aina gani (au muulize mtu), unataka nini kutoka kwayo, na jinsi utakavyoilinda dhidi ya mifugo na moto.",
          youCanNow: "kupanga uoteshaji upya wa asili unaosimamiwa na mkulima au miti ya mbolea kwa kipande, hatua kwa hatua.",
          quickCheck: [
            { objective: "O3", q: "Katika FMNR, unafanya nini na machipukizi mengi kwenye kisiki hai?", options: ["Kuyakata yote kila msimu", "Kuchoma kisiki", "Kubakiza mashina matatu hadi matano marefu na yaliyonyooka zaidi na kukata mengine", "Kuacha kila chipukizi likue"], answer: 2, why: "Kubakiza mashina machache mazuri kunayaacha yakue haraka kuwa miti yenye manufaa." },
            { objective: "O3", q: "Kwa nini mkulima akubaliane sheria za FMNR na majirani?", options: ["Ili mifugo na wakataji kuni waache mashina yaliyochaguliwa", "Ili kuuza visiki", "Kwa sababu miti inakua haraka baada ya mkutano", "Haihitajiki kamwe"], answer: 0, why: "Makubaliano ya jamii yanalinda mashina dhidi ya malisho na ukataji yanapokua." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kanuni na kurejesha ardhi",
        questions: [
          { objective: "O1", q: "Shule ya wakulima shambani ambapo wakulima na watafiti wanajaribu mbinu pamoja ni mfano wa kipengele kipi cha kilimo-ikolojia?", options: ["Kujenga maarifa pamoja", "Ufanisi wa mbolea", "Kilimo cha zao moja", "Pembejeo kutoka nje"], answer: 0, why: "Wakulima na watafiti wakijifunza pamoja ni kujenga maarifa pamoja." },
          { objective: "O1", q: "Mbinu ipi inaonyesha ushirikiano?", options: ["Kuuza mabaki yote", "Mikunde inayoongeza naitrojeni ambayo mahindi yanayofuata yanaitumia", "Kuacha shamba wazi bila kitu", "Kuchoma mabua ya mazao"], answer: 1, why: "Mikunde inasaidia mahindi: sehemu mbili za shamba zinafanya kazi pamoja." },
          { objective: "O2", q: "Shamba nchini Ghana ni wazi na gumu baada ya mavuno. Unaweza kupanda nini kulilinda na kulilisha kabla ya msimu ujao?", options: ["Hakuna; liache wazi", "Zao lilelile tena kwa mbolea zaidi", "Zao la mikunde la kufunika udongo kama kunde au fiwi", "Magugu tu"], answer: 2, why: "Zao la mikunde la kufunika linalinda udongo na kuongeza naitrojeni na mabaki ya viumbe hai." },
          { objective: "O2", q: "Majani ya tithonia yana virutubisho vingi lakini yanahitaji kazi nyingi kukata na kubeba. Yanalipa zaidi wapi?", options: ["Yakitandazwa kidogo kwenye mashamba makubwa ya mahindi", "Kwenye mazao ya thamani kubwa kama mboga", "Yakichomwa kupata majivu", "Yakilishwa nguruwe peke yao"], answer: 1, why: "Utafiti magharibi mwa Kenya uligundua kazi hiyo inalipa zaidi kwenye mazao ya thamani kubwa." },
          { objective: "O3", q: "Upogoe matawi ya pembeni hadi urefu gani kwenye mashina machanga ya FMNR?", options: ["Usipogoe kabisa", "Kata shina zima usawa wa ardhi", "Hadi juu kabisa", "Hadi karibu nusu ya urefu wa shina"], answer: 3, why: "Kupogoa juu mno kunafanya mashina yawe dhaifu dhidi ya upepo na mifugo." }
        ]
      }
    },
    {
      name: "Sura 2: Shamba linalojilisha lenyewe",
      lessons: [
        {
          title: "Mazao, mifugo na bioanuai zikifanya kazi pamoja",
          objectives: ["O4"],
          minutes: 5,
          goal: "Chora mtiririko wa chakula cha mifugo, samadi na mabaki kati ya mazao na mifugo yako.",
          text: [
            "Kwenye shamba mchanganyiko, mazao na mifugo vinaweza kulishana. Mabaki ya mazao, mazao ya kufunika, majani ya miti na mabaki ya nafaka yanalisha mifugo; mifugo inayageuza kuwa maziwa, nyama, mayai, nguvu ya kuvuta na samadi; samadi na mkojo vinarudi kulisha udongo. Viungo hivyo vikiwa imara, pesa kidogo inatoka nje ya shamba.",
            "Chora. Weka mashamba yako, mifugo, nyumba na rundo la mboji au samadi kwenye karatasi, kisha chora mishale: mabua kwa mbuzi, samadi kwa bustani ya mboga, takataka za kuku kwa mboji, maji ya bwawa kwa mboga kwenye shamba la samaki. Kisha weka alama kwenye mivujo: mabaki yanayochomwa, samadi iliyoachwa juani na mvuani, mkojo unaopotea, mazao yanayouzwa bila kitu kurudi. Kila mvujo ni mahali pa kupata faida.",
            "Bioanuai pia ni sehemu ya mfumo. Miti, ua, vipande vya nyasi na mimea yenye maua vinatoa makazi kwa wadudu na ndege wanaokula wadudu waharibifu na kwa nyuki wanaochavusha maharage, nyanya na kahawa. Mazao na aina tofauti zinagawanya hatari. Acha pembe chache za asili, epuka kunyunyizia dawa usipohitaji, na panda zaidi ya zao moja.",
            "Angalia uwiano: mifugo inahitaji chakula wakati wote wa kiangazi, na mabaki yanayotumika kama chakula hayako juu ya udongo kama matandazo. Amua sehemu ipi inaenda wapi, na panda lishe ya ziada (vipande vya nyasi, miti ya lishe, fiwi) ili usilazimike kuchagua."
          ],
          steps: ["Chora mashamba yako, mifugo, nyumba na rundo la samadi.", "Chora mishale kwa kila mtiririko: chakula, mabaki, samadi, maji.", "Weka alama kwenye mivujo: kuchoma, samadi na mkojo unaopotea, hakuna kinachorudi.", "Weka alama kwenye sehemu za bioanuai: ua, miti, maua, pembe za asili.", "Chagua mvujo mmoja wa kuziba msimu huu."],
          words: [["Kilimo mchanganyiko", "kulima mazao na kufuga wanyama kwenye shamba moja ili visaidiane."], ["Mtiririko wa virutubisho", "jinsi virutubisho vinavyozunguka shambani, kwa mfano kutoka chakula cha mifugo hadi samadi hadi udongo."], ["Bioanuai", "aina mbalimbali za mimea, wanyama, wadudu na viumbe hai wa udongoni ndani na kando ya shamba."], ["Maadui wa asili", "wadudu, ndege na wanyama wengine wanaokula wadudu waharibifu wa mazao."]],
          slides: [
            { title: "Mazao yanalisha mifugo, mifugo inalisha udongo", bullets: ["Mabaki, lishe, majani ya miti kwa mifugo", "Maziwa, nyama, mayai, nguvu na samadi vinarudi", "Viungo imara = pesa kidogo inatoka nje"] },
            { title: "Chora mtiririko wa shamba lako", bullets: ["Mishale: chakula, samadi, mabaki, maji", "Weka alama kwenye mivujo: kuchoma, samadi, mkojo", "Kila mvujo ni faida inayosubiri"] },
            { title: "Bioanuai inakufanyia kazi", bullets: ["Ua na maua ni makazi ya walao wadudu na nyuki", "Mazao kadhaa yanagawanya hatari", "Nyunyizia dawa tu inapohitajika"] },
            { title: "Sawazisha chakula na matandazo", bullets: ["Mabaki hayawezi kuwa chakula na matandazo kwa wakati mmoja", "Panda lishe ya ziada: nyasi, fiwi, miti"] }
          ],
          sources: [FAO_10, FAO_AGROFOR],
          tryIt: "Chora ramani ya mtiririko wa shamba lako yenye angalau mishale mitatu kati ya mazao na mifugo. Weka alama kwenye angalau mvujo mmoja na sehemu moja ambapo unaweza kuongeza bioanuai. Andika mvujo mmoja utakaouziba msimu huu.",
          youCanNow: "kuchora mtiririko wa chakula cha mifugo, samadi na mabaki shambani kwako na kupata mivujo ya kuziba.",
          quickCheck: [
            { objective: "O4", q: "Kwenye ramani ya mtiririko, kipi kati ya hivi ni mvujo?", options: ["Mabua wanayolishwa mbuzi", "Samadi iliyotandazwa kwenye bustani ya mboga", "Samadi iliyoachwa juani na mvuani hadi isombwe", "Takataka za kuku zilizoongezwa kwenye mboji"], answer: 2, why: "Samadi iliyoachwa juani na mvuani inapoteza virutubisho ambavyo vingepaswa kurudi udongoni." },
            { objective: "O4", q: "Kwa nini kuacha ua, miti na mimea yenye maua kando ya mashamba?", options: ["Ni makazi ya maadui wa asili wa wadudu waharibifu na wachavushaji", "Kila mara zinapunguza mavuno", "Ni za mapambo tu", "Zinazuia mvua"], answer: 0, why: "Makazi ya walao wadudu na nyuki ni huduma ya bure kwa mazao yako." }
          ]
        },
        {
          title: "Kupunguza gharama ya mbolea kutoka nje",
          objectives: ["O5"],
          minutes: 5,
          goal: "Kadiria mifuko mingapi ya mbolea ya kununua inaweza kubadilishwa na virutubisho vya shambani, na pesa zitakazookolewa.",
          text: [
            "Mbolea nyingi za madini zinazotumika Afrika zinaagizwa kutoka nje, kwa hiyo bei yake inafuata masoko ya dunia na viwango vya ubadilishaji wa fedha. Kilimo-ikolojia kinalenga kuzihitaji kidogo, si kila mara kutozitumia kabisa. Anza na ulichotumia msimu uliopita: mifuko mingapi, aina ipi, kwenye shamba lipi, na iligharimu kiasi gani.",
            "Kisha orodhesha virutubisho vya shambani unavyoweza kuongeza: mazao ya mikunde ya kufunika na ya kupanda pamoja (naitrojeni), miti ya mbolea na mbolea ya majani mabichi, samadi na mkojo zaidi uliotunzwa vizuri, mabaki ya biogesi (bio-slurry) kama una mtambo wa biogesi, na mabaki ya mazao yanayoachwa shambani. Kuchanganya kiasi kidogo cha mbolea ya madini na hivi mara nyingi kunafanya kazi vizuri kuliko kimoja peke yake. Katika majaribio ya Malawi, mahindi yenye glirisidia pamoja na nusu ya mbolea iliyopendekezwa yalifanya karibu sawa na mahindi yenye kiwango kamili.",
            "Kadiria, kisha jaribu. Kwa mfano (takwimu za kubuni): mkulima wa Kakamega alitumia mifuko 4 kwenye ekari moja kwa KES 3,500 kwa mfuko. Kwa zao la fiwi lililopandwa ndani ya zao kuu na samadi zaidi, anapanga kujaribu mifuko 2 kwenye nusu ya shamba na 4 kwenye nusu nyingine, na kulinganisha mavuno. Mavuno yakilingana, anaokoa mifuko 2, KES 7,000, kwenye ekari hiyo. Usipunguze mbolea ghafla kwenye ardhi yako yote.",
            "Muulize afisa ugani au maabara ya udongo akague mpango wako dhidi ya matokeo ya udongo wako, na ununue mbolea ya madini tu kutoka kwa wauzaji wa pembejeo waliosajiliwa, katika mifuko iliyofungwa."
          ],
          steps: ["Andika mbolea ya msimu uliopita: mifuko, aina, shamba, gharama.", "Orodhesha virutubisho vya shambani unavyoweza kuongeza.", "Panga kiwango kidogo kwenye sehemu ya shamba, pamoja na virutubisho vya shambani.", "Acha kipande cha kiwango kamili kwa kulinganisha.", "Kadiria mifuko na pesa zitakazookolewa mavuno yakibaki sawa.", "Kagua mpango na afisa ugani; ongeza tu kinachofanya kazi."],
          words: [["Mbolea ya madini", "mbolea iliyotengenezwa kiwandani, kama urea, DAP au NPK, kwa kawaida inauzwa kwenye mifuko."], ["Usimamizi jumuishi wa rutuba ya udongo", "kuchanganya virutubisho vya asili (samadi, mikunde, mabaki) na kiasi kidogo cha mbolea ya madini."], ["Kipande cha kulinganisha", "sehemu ya shamba inayolimwa kwa njia ya zamani ili ulinganishe matokeo kwa haki."]],
          slides: [
            { title: "Kwa nini kupunguza mbolea kutoka nje", bullets: ["Bei inafuata masoko ya dunia na viwango vya ubadilishaji", "Lenga kuhitaji kidogo, si kila mara kutotumia kabisa", "Anza na mifuko na gharama za msimu uliopita"] },
            { title: "Virutubisho vya shambani", bullets: ["Mikunde ya kufunika, kupanda pamoja, miti ya mbolea", "Samadi, mkojo, mabaki ya biogesi, mabaki ya mazao", "Changanya na mbolea kidogo ya madini"] },
            { title: "Jaribu kabla ya kupunguza", bullets: ["Mfano: mifuko 2 dhidi ya 4 kwenye nusu za shamba", "Mavuno sawa = mifuko 2, KES 7,000 imeokolewa (mfano)", "Usipunguze yote kwa mara moja"] },
            { title: "Kagua na ununue kwa usalama", bullets: ["Afisa ugani au maabara ya udongo akague mpango", "Wauzaji waliosajiliwa, mifuko iliyofungwa"] }
          ],
          sources: [GLIRICIDIA, HANDBOOK_4R],
          tryIt: "Andika matumizi ya mbolea ya msimu uliopita kwa shamba moja. Orodhesha vyanzo viwili vya virutubisho vya shambani utakavyoongeza. Panga jaribio la nusu shamba kwa kiwango kidogo, na ukadirie mifuko na pesa ambazo ungeokoa mavuno yakibaki sawa, kwa fedha ya nchi yako.",
          youCanNow: "kukadiria kiasi cha mbolea ya kununua ambacho virutubisho vya shambani vinaweza kubadilisha, na kupanga jaribio la haki kabla ya kupunguza.",
          quickCheck: [
            { objective: "O5", q: "Unataka kutumia mbolea kidogo. Hatua ya kwanza salama zaidi ni ipi?", options: ["Kuacha mbolea yote kwenye kila shamba kwa mara moja", "Kuongeza mbolea mara mbili", "Kununua mbolea isiyo na lebo kwa sababu ni rahisi", "Kujaribu kiwango kidogo pamoja na virutubisho vya shambani kwenye sehemu ya shamba, kando ya kipande cha kiwango kamili"], answer: 3, why: "Jaribio la kando kwa kando linaonyesha kama kiwango kidogo kinafanya kazi kabla hujahatarisha mavuno yote." },
            { objective: "O5", q: "Mkulima nchini Nigeria alitumia mifuko 6 kwa NGN 40,000 kila mmoja na akapunguza hadi 4 kwa mavuno yaleyale. Ameokoa kiasi gani?", options: ["NGN 40,000", "NGN 80,000", "NGN 240,000", "Hakuna"], answer: 1, why: "Mifuko 2 × NGN 40,000 = NGN 80,000 (takwimu za mfano)." }
          ]
        },
        {
          title: "Kupima uboreshaji msimu kwa msimu",
          objectives: ["O6", "O2", "O5"],
          minutes: 5,
          goal: "Rekodi vipimo rahisi vya udongo na shamba wakati uleule kila msimu.",
          text: [
            "Kurejesha udongo ni polepole. Huenda mavuno yasiruke katika msimu wa kwanza, kwa hiyo unahitaji dalili nyingine kuona kama udongo unarudi. Pima sehemu zilezile, katika mwezi uleule, kila msimu, na uandike.",
            "Vipimo rahisi: kufunikwa kwa ardhi (kiasi gani cha udongo kimefunikwa na mimea au matandazo; kadiria kwa macho au hesabu ndani ya mraba); minyoo (chimba bonge la udongo la ukubwa wa jembe na uhesabu); kunyonya maji (sukuma ndani ya udongo mkebe uliokatwa pande zote mbili, mimina maji na upime muda unaochukua kuzama); harufu na chembe za udongo (unavunjika kuwa chembe ndogo au mabonge makubwa magumu?); picha ya udongo kutoka sehemu ileile; mavuno kutoka kipande chenye alama; na mifuko ya mbolea na pesa ulizotumia.",
            "Kila baada ya miaka michache, kipimo cha udongo cha maabara kinaweza kuonyesha mabaki ya viumbe hai na virutubisho (angalia \"Afya na Rutuba ya Udongo\" kwa kuchukua sampuli). Linganisha shamba lako unalorejesha na shamba lisilobadilishwa kama unaweza.",
            "Simu inasaidia: piga picha kutoka sehemu ileile, weka namba zako kwenye app ya kumbukumbu au jedwali (spreadsheet), na umwombe msaidizi wa AI azigeuze kuwa jedwali rahisi au chati. Namba zinatoka shambani kwako."
          ],
          steps: ["Weka alama kwenye sehemu tatu za shamba kwa vijiti au mawe.", "Chagua angalau vipimo vinne: kufunikwa, minyoo, kunyonya maji, chembe, picha, mavuno, gharama.", "Virekodi katika mwezi uleule kila msimu.", "Linganisha na msimu uliopita na shamba lisilobadilishwa.", "Pitia mpango wako: endelea na kinachofanya kazi, badilisha kisichofanya kazi."],
          words: [["Kiashiria", "dalili rahisi unayopima kuona kama mambo yanaboreka au yanazidi kuwa mabaya."], ["Kunyonya maji (infiltration)", "jinsi maji yanavyozama ndani ya udongo kwa haraka."], ["Kufunikwa kwa ardhi", "sehemu ya uso wa udongo iliyofunikwa na mimea au matandazo."], ["Kipimo cha mwanzo (baseline)", "kipimo chako cha kwanza, ambacho vipimo vya baadaye vinalinganishwa nacho."]],
          slides: [
            { title: "Mabadiliko ya polepole yanahitaji kupimwa", bullets: ["Huenda mavuno yasiruke msimu wa kwanza", "Sehemu zilezile, mwezi uleule, kila msimu", "Andika"] },
            { title: "Vipimo rahisi", bullets: ["Kufunikwa kwa ardhi na idadi ya minyoo", "Kunyonya maji: pima muda wa maji kuzama", "Chembe, picha, mavuno, gharama ya mbolea"] },
            { title: "Linganisha", bullets: ["Na msimu uliopita (kipimo chako cha mwanzo)", "Na shamba lisilobadilishwa", "Kipimo cha maabara kila baada ya miaka michache"] },
            { title: "Simu yako inasaidia", bullets: ["Picha kutoka sehemu ileile", "Namba kwenye kumbukumbu au jedwali", "AI inaweza kuzipanga kuwa jedwali"] }
          ],
          sources: [FAO_SOM, FAO_AE],
          tryIt: "Kazi ya mwisho: andika mpango wako wa misimu mitatu wa kurejesha shamba moja, pamoja na mchoro. Kisha chukua kipimo chako cha mwanzo leo: weka alama kwenye sehemu tatu na urekodi angalau vipimo vinne (kwa mfano kufunikwa, idadi ya minyoo, muda wa kunyonya maji na picha).",
          youCanNow: "kupima udongo na shamba lako kwa viashiria rahisi kila msimu na kuvitumia kutathmini mpango wako wa kurejesha udongo.",
          quickCheck: [
            { objective: "O6", q: "Kwa nini kupima sehemu zilezile katika mwezi uleule kila msimu?", options: ["Inaonekana nadhifu", "Ili ulinganisho uwe wa haki na uonyeshe mabadiliko halisi", "Kwa sababu minyoo wanaonekana mwezi mmoja tu", "Ili kutumia karatasi nyingi"], answer: 1, why: "Mahali na wakati uleule vinaondoa sababu nyingine, hivyo mabadiliko yanaonyesha hali ya udongo." },
            { objective: "O6", q: "Maji kwenye mkebe wako wa kupimia yanazama haraka kuliko mwaka jana. Hii inaonyesha nini?", options: ["Udongo unazidi kuharibika", "Mkebe umeharibika", "Hakuna chochote", "Muundo wa udongo unaboreka na unashika mvua zaidi"], answer: 3, why: "Maji kuzama haraka kunamaanisha mvua nyingi inaingia udongoni badala ya kutiririka." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Shamba linalojilisha lenyewe",
        questions: [
          { objective: "O4", q: "Mshale upi unafaa kwenye ramani ya mtiririko wa mazao na mifugo?", options: ["Mabua ya mahindi kwa mbuzi, na samadi ya mbuzi kwa shamba la mahindi", "Mbolea kutoka mjini hadi dukani", "Mvua kutoka angani hadi mtoni", "Salio la simu kwa mkulima"], answer: 0, why: "Chakula kwa mifugo na samadi inayorudi mashambani ni mtiririko wa virutubisho wa shamba lenyewe." },
          { objective: "O4", q: "Mabaki yanahitajika kama chakula cha mifugo wakati wa kiangazi na pia kama matandazo. Kipi kinasaidia zaidi?", options: ["Kuchoma nusu", "Kupanda lishe ya ziada kama vipande vya nyasi, fiwi au miti ya lishe", "Kuuza mifugo", "Kuacha shamba wazi"], answer: 1, why: "Lishe ya ziada inapunguza ushindani kati ya kulisha mifugo na kufunika udongo." },
          { objective: "O5", q: "Majaribio ya muda mrefu nchini Malawi yaligundua nini kwa mahindi yenye glirisidia pamoja na nusu ya mbolea?", options: ["Yalishindwa kila mara", "Yalihitaji mbolea mara mbili", "Mavuno yalikuwa karibu sawa na mahindi yenye kiwango kamili", "Miti iliua mahindi"], answer: 2, why: "Glirisidia pamoja na nusu ya mbolea ilitoa mavuno yanayolingana na mbolea kamili huko Makoka." },
          { objective: "O5", q: "Ununue wapi mbolea ya madini ambayo bado unaitumia?", options: ["Kwa muuzaji yeyote wa barabarani mwenye mifuko iliyo wazi", "Kutoka tangazo la mtandaoni lisilo na anwani", "Kutoka magunia yaliyobaki kwa jirani", "Kutoka kwa muuzaji wa pembejeo aliyesajiliwa, katika mifuko iliyofungwa"], answer: 3, why: "Wauzaji waliosajiliwa na mifuko iliyofungwa vinapunguza hatari ya mbolea bandia au iliyochanganywa." },
          { objective: "O6", q: "Kipimo cha mwanzo (baseline) ni nini?", options: ["Sehemu ya chini ya shamba", "Aina ya mbolea", "Kipimo cha kwanza ambacho vipimo vya baadaye vinalinganishwa nacho", "Mavuno ya mwisho kabisa utakayovuna"], answer: 2, why: "Bila kipimo cha mwanzo huwezi kujua kama mambo yameboreka." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kilimo-ikolojia na Kurejesha Udongo",
    questions: [
      { objective: "O1", q: "Shirika gani linaeleza vipengele 10 vya kilimo-ikolojia?", options: ["FIFA", "FAO", "Kampuni ya mbegu", "Benki ya Dunia peke yake"], answer: 1, why: "Vipengele 10 vya kilimo-ikolojia vya FAO vilikubaliwa na nchi wanachama wake mwaka 2019." },
      { objective: "O1", q: "Kurudisha mabaki ya mazao na samadi udongoni kunatumia kanuni ipi?", options: ["Kilimo cha zao moja", "Uongozi", "Kuagiza kutoka nje", "Urejelezaji"], answer: 3, why: "Kurudisha mabaki na samadi kunarejeleza virutubisho." },
      { objective: "O1", q: "Kuuza mboga kwa shule ya eneo lako na kununua mbegu kutoka ushirika wa eneo lako ni mfano wa:", options: ["Ufanisi wa matrekta", "Ushirikiano wa wadudu waharibifu", "Uchumi wa mzunguko na mshikamano", "Mmomonyoko wa udongo"], answer: 2, why: "Kununua na kuuza ndani ya eneo lako na kwa haki ni kipengele cha uchumi wa mzunguko na mshikamano." },
      { objective: "O2", q: "Zao lipi ni mkunde unaotumika mara nyingi kama zao la kufunika au mbolea ya kijani?", options: ["Mahindi", "Mtama", "Mpunga", "Fiwi (lablab)"], answer: 3, why: "Fiwi ni mkunde unaofunika udongo, unaongeza naitrojeni na unatoa lishe ya mifugo." },
      { objective: "O2", q: "Kupanda kwa kupokezana (relay cropping) ni nini?", options: ["Kupanda zao la pili ndani ya zao lililosimama kabla zao la kwanza halijavunwa", "Kuchoma mabaki kwa mistari", "Kupanda mara moja tu kila baada ya miaka miwili", "Kusafirisha mazao kwa lori"], answer: 0, why: "Kupanda kwa kupokezana kunaruhusu zao la kufunika kuanza kukua kabla zao kuu halijavunwa." },
      { objective: "O2", q: "Kwa nini kukata mbolea ya kijani kabla haijatoa mbegu ngumu?", options: ["Mbegu ni sumu kwa udongo", "Inaizuia kuwa gugu na kushindana na zao linalofuata", "Mbegu ngumu zinaleta mvua", "Inatakiwa kisheria"], answer: 1, why: "Kukata kwa wakati kunazuia ushindani na mimea inayoota yenyewe isiyotakiwa." },
      { objective: "O2", q: "Ardhi iliyoharibika ni nini?", options: ["Ardhi yenye miti mingi mno", "Ardhi iliyo chini ya maji", "Ardhi iliyopoteza udongo, mabaki ya viumbe hai au mimea ya kuifunika na inazalisha kidogo sana", "Ardhi yenye hati miliki"], answer: 2, why: "Ardhi iliyoharibika imepoteza vitu vinavyoifanya izalishe." },
      { objective: "O3", q: "FMNR inatumia nini kurudisha miti?", options: ["Miche ya kununua peke yake", "Visiki hai, mizizi na mbegu zilizo tayari udongoni", "Miti ya plastiki", "Sindano za mbolea"], answer: 1, why: "FMNR inalinda na kupogoa kile kinachoota tena kutoka udongoni." },
      { objective: "O3", q: "Takriban mashamba kiasi gani nchini Niger yamerudishiwa miti kupitia FMNR?", options: ["Karibu hekta 10", "Karibu hekta 500", "Hakuna", "Zaidi ya hekta milioni tano"], answer: 3, why: "FMNR ilienea kutoka mkulima hadi mkulima hadi zaidi ya hekta milioni tano nchini Niger." },
      { objective: "O3", q: "Unapopogoa mashina ya FMNR, unapaswa:", options: ["Kutumia kifaa chenye makali na kukata kuelekea juu", "Kutumia kifaa butu na kukata kuelekea chini", "Kubandua gome", "Kupogoa hadi juu kabisa"], answer: 0, why: "Mikato ya juu kwa kifaa chenye makali inapona haraka na inaleta madhara kidogo." },
      { objective: "O3", q: "Mti upi wa mbolea unapatikana sana kwenye mashamba yenye miti ya Sahel kama eneo la karanga la Senegal?", options: ["Mkaratusi", "Faidherbia", "Mwembe", "Msonobari"], answer: 1, why: "Faidherbia ni mti jamii ya kunde unaotunzwa sana kwenye mashamba yenye miti ya Sahel." },
      { objective: "O4", q: "Kipi ni mvujo kwenye ramani ya mtiririko wa virutubisho wa shamba?", options: ["Samadi iliyotandazwa shambani", "Mabaki wanayolishwa mbuzi", "Kuchoma mabaki ya mazao", "Takataka za kuku kwenye mboji"], answer: 2, why: "Kuchoma kunapeleka virutubisho na mabaki ya viumbe hai juu kama moshi." },
      { objective: "O4", q: "Ua na mimea yenye maua vinasaidiaje mazao?", options: ["Ni makazi ya walao wadudu na wachavushaji", "Kila mara vinavutia wadudu waharibifu zaidi", "Vinafanya udongo kuwa na tindikali", "Vinazuia mvua kufika kwenye mazao"], answer: 0, why: "Makazi ya maadui wa asili na nyuki ni huduma ya bure kwa mazao." },
      { objective: "O4", q: "Kwenye shamba la samaki aina ya sato (tilapia) na mboga, kiungo kipi ni cha manufaa?", options: ["Kutupa takataka za samaki mtoni", "Kutumia maji ya bwawa kumwagilia mboga", "Kumwaga maji ya bwawa barabarani", "Kuchoma mboga"], answer: 1, why: "Maji ya bwawa yenye virutubisho yanalisha mboga: kiungo cha mazao na wanyama." },
      { objective: "O5", q: "Kwa nini bei ya mbolea ya madini inabadilika sana katika nchi nyingi za Afrika?", options: ["Inalimwa mashambani", "Inategemea mvua", "Haibadiliki kamwe", "Nyingi inaagizwa kutoka nje, kwa hiyo inafuata bei za dunia na viwango vya ubadilishaji"], answer: 3, why: "Pembejeo za kutoka nje zinafuata masoko ya dunia na mabadiliko ya thamani ya fedha." },
      { objective: "O5", q: "Mkulima wa Ghana alitumia mifuko 5 kwa GHS 400 kila mmoja na akapunguza hadi 3 kwa mavuno yaleyale. Ameokoa kiasi gani?", options: ["GHS 800", "GHS 400", "GHS 2,000", "GHS 1,200"], answer: 0, why: "Mifuko 2 × GHS 400 = GHS 800 (takwimu za mfano)." },
      { objective: "O5", q: "Usimamizi jumuishi wa rutuba ya udongo ni nini?", options: ["Kutumia mbolea ya madini peke yake", "Kutotumia virutubisho kabisa", "Kuchanganya virutubisho vya asili na kiasi kidogo cha mbolea ya madini", "Kupima udongo kila wiki"], answer: 2, why: "Unachanganya vyanzo vya asili na vya madini ili kila kimoja kifanye kazi vizuri zaidi." },
      { objective: "O6", q: "Kipi ni kipimo rahisi cha uboreshaji wa udongo?", options: ["Rangi ya simu yako", "Jinsi maji yanavyozama ndani ya udongo kwa haraka", "Bei ya mahindi mjini", "Idadi ya wageni"], answer: 1, why: "Maji kuzama haraka kunaonyesha muundo bora wa udongo." },
      { objective: "O6", q: "Kwa nini ulinganishe shamba unalorejesha na shamba lisilobadilishwa?", options: ["Kuona kama mabadiliko yametokana na mbinu zako na si hali ya hewa tu", "Kutumia mbegu zaidi", "Kwa sababu majirani wanauliza", "Haileti tofauti yoyote"], answer: 0, why: "Shamba la kulinganisha linaonyesha kile ambacho kingetokea hata hivyo." },
      { objective: "O6", q: "Urekodi vipimo vingapi kila msimu kwenye shamba unalorejesha?", options: ["Hakuna", "Kimoja, mavuno tu", "Mvua peke yake", "Angalau vinne, kama kufunikwa, minyoo, kunyonya maji na mavuno"], answer: 3, why: "Vipimo kadhaa vinaonyesha mabadiliko hata kabla mavuno hayajapanda." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [1, 3, 6, 7, 9, 11, 14, 16, 17] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo ya mpango na ujaribu tena.",
    criteria: [
      { name: "Kanuni zimetajwa", objective: "O1", notYet: "Mpango hausemi unatumia kanuni zipi za kilimo-ikolojia.", meets: "Kila mbinu katika mpango imeunganishwa na kanuni ya kilimo-ikolojia.", exceeds: "Unatumia angalau kanuni nne tofauti, pamoja na mojawapo ya vipengele vya watu." },
      { name: "Zao la kufunika au mbolea ya kijani", objective: "O2", notYet: "Hakuna zao la kufunika wala mbolea ya kijani, au hakuna tarehe.", meets: "Aina inayofaa mvua, pamoja na tarehe za kupanda na kukata.", exceeds: "Pia unaeleza jinsi linavyoendana na chakula cha mifugo na zao kuu, na limekaguliwa na afisa ugani." },
      { name: "Miti", objective: "O3", notYet: "Hakuna mpango wa miti, au miti bila ulinzi.", meets: "FMNR au miti ya mbolea pamoja na mashina au aina, kupogoa na ulinzi dhidi ya mifugo na moto.", exceeds: "Unajumuisha makubaliano ya jamii au sheria ndogo, na jinsi mashina yatakavyovunwa na kubadilishwa." },
      { name: "Viungo vya mazao na mifugo", objective: "O4", notYet: "Hakuna ramani ya mtiririko, au kiungo kimoja tu.", meets: "Ramani ya mtiririko yenye angalau viungo vitatu na mvujo mmoja wa kuziba.", exceeds: "Inaonyesha jinsi mabaki yanavyogawanywa kati ya chakula na matandazo na mahali bioanuai inapoongezwa." },
      { name: "Kuokoa mbolea", objective: "O5", notYet: "Hakuna makadirio, au mpango wa kuacha mbolea kwenye ardhi yote kwa mara moja.", meets: "Inakadiria mifuko na pesa zitakazookolewa kwa fedha ya nchi yako, pamoja na jaribio la haki dhidi ya kipande cha kiwango kamili.", exceeds: "Mpango umekaguliwa na afisa ugani au matokeo ya udongo, pamoja na kanuni ya lini kuongeza ukubwa." },
      { name: "Vipimo msimu kwa msimu", objective: "O6", notYet: "Hakuna vipimo au hakuna kipimo cha mwanzo.", meets: "Angalau vipimo vinne, kipimo cha mwanzo kimechukuliwa na tarehe kwa kila msimu.", exceeds: "Unajumuisha shamba lisilobadilishwa la kulinganisha na picha kutoka sehemu zisizobadilika." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaopanda zao la kufunika au mbolea ya kijani, au kuanza FMNR, ndani ya msimu unaofuata (utafiti wa kufuatilia)",
      "Mabadiliko ya mbolea ya kununua kwa ekari kwenye shamba linalorejeshwa katika misimu miwili (kumbukumbu za wanafunzi)",
      "Mabadiliko ya vipimo vya udongo (kufunikwa, kunyonya maji, idadi ya minyoo) na mavuno kwenye shamba linalorejeshwa katika misimu mitatu",
      "Idadi ya majirani au wanakikundi wanaoiga mbinu (ripoti za maafisa ugani)"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Karatasi, kalamu na kalamu za rangi kwa ramani ya mtiririko wa shamba na mchoro wa shamba",
      "Jembe, mkebe mtupu uliokatwa pande zote mbili, maji na saa kwa vipimo vya udongo",
      "Vijiti au mawe ya kuweka alama kwenye sehemu za kupimia",
      "Kumbukumbu za mbolea na bei za msimu uliopita (au takwimu za mfano)",
      "Simu kwa picha na kumbukumbu (si lazima)",
      "Kama dakika 90 kwa jumla, pamoja na muda wa shambani kwa vipimo"
    ],
    facilitatorNotes: [
      "Fanya Masomo ya 3 na 6 shambani: tafuteni visiki pamoja kwa FMNR na fanyeni vipimo vya kunyonya maji na kuhesabu minyoo kama kikundi.",
      "Mwalike afisa ugani au taasisi ya utafiti (kwa mfano KALRO, IITA, CSIR au ISRA) athibitishe ni mazao gani ya kufunika na miti gani ya mbolea inafaa mvua ya eneo hilo.",
      "Jadilini wazi sheria za eneo kuhusu malisho na ukataji miti; FMNR mara nyingi inahitaji makubaliano ya jamii.",
      "Usiwasilishe kamwe bei za mfano kama ukweli; kusanya bei za mbolea za eneo hilo kabla ya kipindi.",
      "Himiza vipande vya majaribio vya kando kwa kando badala ya kupunguza mbolea ghafla kwenye ardhi yote.",
      "Tathmini mpango wa mwisho kwa rubriki na fuatilia baada ya msimu mmoja na miwili kulinganisha vipimo."
    ]
  }
};
