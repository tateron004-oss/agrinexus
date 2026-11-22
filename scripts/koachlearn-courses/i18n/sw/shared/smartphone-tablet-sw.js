"use strict";

// Koach Learn course (Swahili translation of shared/smartphone-tablet.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "smartphone-tablet-sw",
  lang: "sw",
  translationOf: "smartphone-tablet",
  category: "Seniors and Technology",
  name: "Kutumia Simu Janja na Tableti",
  skills: "Kutumia skrini ya kugusa, Kupiga simu na kutuma ujumbe mfupi, Kupiga na kutuma picha, Kusakinisha apps kwa usalama, Kufunga na kusasisha kifaa chako",
  outcome: "kutumia simu janja au tableti peke yako: kuifungua, kupiga simu, kutuma ujumbe mfupi na picha, kusakinisha app kutoka duka rasmi, na kuweka kifaa kimefungwa na kikiwa na masasisho mapya.",
  about: [
    "Simu janja au tableti inakuwezesha kupiga simu na kutuma ujumbe kwa familia, kuona picha za wajukuu, kuangalia hali ya hewa, kupata basi, na kuzungumza na daktari wako. Kozi hii ni kwa mtu yeyote ambaye ni mgeni kwa vifaa hivi au anataka kujiamini zaidi.",
    "Utajifunza skrini ya kugusa, kupiga simu na kutuma ujumbe, kamera, jinsi ya kusakinisha app kwa usalama, na jinsi ya kuweka kifaa chako kimefungwa na kikiwa na masasisho mapya. Hatua hizi zinafanya kazi kwenye simu za Android na kwenye iPhone na iPad; zinapotofautiana, tunasema.",
    "Kila somo linachukua kama dakika tano. Soma somo, tazama slaidi, kisha fanya kazi ya \"Jaribu sasa\" ukiwa na kifaa chako mkononi. Kuna jaribio fupi la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Ukitumia simu au tableti yako mwenyewe: ifungue, mpigie simu au simu ya video mtu unayemjua, mtumie ujumbe mfupi wenye picha uliyopiga sasa hivi, sakinisha app moja ya bure yenye manufaa kutoka duka rasmi la apps, na hakikisha kufuli la skrini limewashwa na programu zako zina masasisho mapya.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima wenye simu janja au tableti mpya au wasiyoitumia sana: wazee, watu waliopewa simu na familia au na programu fulani, watu wanaorudi katika jamii, wageni na walezi.",
    startingPoint: "Wanaweza kuwasha kifaa na huenda wanapokea simu. Wengi hawana uhakika jinsi ya kutumia skrini ya kugusa, kubadilisha ukubwa wa maandishi, kuhifadhi watu wa mawasiliano, kutuma picha, kusakinisha app kwa usalama au kuweka kifaa kimefungwa na kikiwa na masasisho.",
    gap: "Siku hizi simu na tableti ndizo njia ya kuwasiliana na familia, madaktari, maduka ya dawa, benki na huduma nyingine. Watu wasioweza kuzitumia peke yao hukosa simu na ujumbe, hupata shida kusoma skrini, husakinisha apps bandia, au hupoteza taarifa binafsi simu inapopotea.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; miondoko ya kidole na maneno kama icon (aikoni) na ruhusa yanaelezwa",
      "Vifaa: simu ya Android, iPhone au tableti ya mwanafunzi mwenyewe; hatua zinatolewa kwa zote mbili",
      "Muda: kama dakika 5 kwa kila somo, kama dakika 60 kwa jumla",
      "Gharama: apps za bure tu, kutoka duka rasmi la apps",
      "Faragha: wanafunzi hawampi kamwe mpigaji simu msimbo uliotumwa kwa ujumbe, na hawatumi kamwe picha za kitambulisho au kadi za benki kwa wageni"
    ],
    prerequisites: "Hakuna. Unahitaji simu au tableti yenye chaji."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukitumia simu au tableti yako mwenyewe", action: "kuifungua, kugusa, kutelezesha, kubonyeza na kushikilia na kubana, kufungua app na kurudi kwenye skrini ya mwanzo", standard: "bila msaada" },
    { id: "O2", condition: "Ndani ya app ya Settings (Mipangilio)", action: "kubadilisha ukubwa wa maandishi, mwangaza na sauti ili kifaa kiwe rahisi kuona na kusikia", standard: "kila kimoja kikiwa katika kiwango kinachokufaa" },
    { id: "O3", condition: "Ukipewa mtu unayetaka kuwasiliana naye", action: "kumhifadhi kama mtu wa mawasiliano, kumpigia simu na kumtumia ujumbe mfupi, na kushughulikia wapigaji usiowajua kwa usalama", standard: "simu na ujumbe vikiwa vimetumwa, bila kumpa mpigaji yeyote msimbo" },
    { id: "O4", condition: "Ukitumia app ya Camera (Kamera) na Photos au Gallery", action: "kupiga picha iliyo wazi na kuituma kwa ujumbe mfupi kwa mtu unayemjua", standard: "picha ikiwa wazi bila kitu chochote cha binafsi ndani yake" },
    { id: "O5", condition: "Ndani ya duka rasmi la apps", action: "kutafuta na kusakinisha app ya bure baada ya kukagua msanidi, alama na maoni, na kuchagua ruhusa za kukubali", standard: "ukikubali tu ruhusa ambazo app inazihitaji kweli" },
    { id: "O6", condition: "Kwenye kifaa chako mwenyewe", action: "kuwasha kufuli imara la skrini, kukagua sasisho la programu na kuwasha Find My Device au Find My", standard: "kufuli likiwa si rahisi kukisia na kifaa kikiwa na masasisho mapya" }
  ],
  chapters: [
    {
      name: "Sura 1: Kuzoea kifaa chako",
      lessons: [
        {
          objectives: ["O1"],
          title: "Misingi ya skrini ya kugusa: kugusa, kutelezesha na skrini ya mwanzo",
          minutes: 5,
          goal: "Fungua kifaa chako, fungua app na urudi kwenye skrini ya mwanzo.",
          text: [
            "Simu janja ni simu ambayo pia ni kompyuta ndogo. Tableti ni kitu hicho hicho chenye skrini kubwa zaidi. Nyingi zinatumia Android (imetengenezwa na Google, inatumiwa na Samsung, Motorola na wengine) au iOS na iPadOS (imetengenezwa na Apple kwa iPhone na iPad).",
            "Unakiongoza kwa kidole chako. Gusa: gusa na uachilie, ili kufungua kitu. Telezesha: pitisha kidole juu ya skrini, ili kuhamia ukurasa mwingine au kusogeza. Bonyeza na ushikilie: acha kidole chini, ili kuona machaguo zaidi. Bana: tanua vidole viwili ili kukuza vitu, vikutanishe ili kuvipunguza.",
            "Skrini ya mwanzo (home screen) inaonyesha apps zako kama picha ndogo zinazoitwa icons (aikoni). Ili kurudi mwanzo, telezesha juu kutoka ukingo wa chini, au bonyeza kitufe cha home kama kifaa chako kina kimoja."
          ],
          steps: ["Bonyeza kitufe cha pembeni au cha juu ili kuamsha skrini.", "Telezesha juu na uweke msimbo wako, au tumia alama ya kidole au uso wako.", "Gusa aikoni ya app ili kuifungua.", "Telezesha juu kutoka chini (au bonyeza kitufe cha home) ili kurudi mwanzo.", "Tanua vidole viwili juu ya picha ili kuikuza."],
          words: [["Simu janja (smartphone)", "simu ambayo pia ni kompyuta ndogo yenye skrini ya kugusa."], ["Aikoni (icon)", "picha ndogo unayogusa ili kufungua app."], ["Skrini ya mwanzo (home screen)", "skrini kuu inayoonyesha apps zako."], ["Telezesha (swipe)", "pitisha kidole chako juu ya skrini."]],
          slides: [
            { title: "Aina kuu mbili", bullets: ["Android: Samsung, Motorola, Google Pixel na nyingine", "iPhone na iPad kutoka Apple"] },
            { title: "Miondoko ya kidole", bullets: ["Gusa: fungua kitu", "Telezesha: sogeza au badilisha ukurasa", "Bonyeza na ushikilie: machaguo zaidi", "Bana: kuza na punguza"] },
            { title: "Kurudi mwanzo", bullets: ["Telezesha juu kutoka ukingo wa chini", "Au bonyeza kitufe cha home kama unacho"] }
          ],
          tryIt: "Amsha na ufungue kifaa chako. Fungua app ya Camera au Weather (hali ya hewa), telezesha huku na huku, kisha urudi kwenye skrini ya mwanzo. Fanya hivyo mara tatu hadi uone ni rahisi.",
          youCanNow: "kufungua kifaa chako, kufungua app kwa kugusa, kusogeza kwa kutelezesha na kurudi kwenye skrini ya mwanzo.",
          quickCheck: [
            { objective: "O1", q: "Kubonyeza na kushikilia kunafanya nini?", options: ["Kunazima simu", "Kunaonyesha machaguo zaidi", "Kunapiga picha", "Kunapiga simu"], answer: 1, why: "Kuacha kidole chini kunaonyesha machaguo zaidi." },
            { objective: "O1", q: "Uko ndani ya app na unataka kurudi kwenye skrini ya mwanzo. Utafanya nini?", options: ["Kuzima simu na kuiwasha tena", "Kukutanisha vidole viwili", "Kutoa betri", "Kutelezesha juu kutoka ukingo wa chini, au kubonyeza kitufe cha home"], answer: 3, why: "Kutelezesha juu kutoka chini, au kitufe cha home, kunakurudisha kwenye skrini ya mwanzo." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kufanya iwe rahisi kuona na kusikia",
          minutes: 4,
          goal: "Kuza maandishi na urekebishe sauti na mwangaza vikufae.",
          text: [
            "Unaweza kubadilisha kifaa chako ili kiwe rahisi kutumia. Mambo haya yote yako ndani ya app ya Settings (Mipangilio), ambayo kwa kawaida ina aikoni ya gia.",
            "Maandishi makubwa: fungua Settings, kisha tafuta Display au Accessibility, na utafute text size au font size. Mwangaza: utaupata ndani ya Display, au telezesha chini kutoka juu ya skrini ili kupata vidhibiti vya haraka. Sauti: tumia vitufe vya pembeni.",
            "Usipopata kitu, tumia kisanduku cha kutafuta kilicho juu ya Settings na uandike neno kama \"text size\". Vifaa vya Android na vya Apple pia vina vipengele vya ufikivu (accessibility) kama kikuza na kusoma skrini kwa sauti."
          ],
          steps: ["Fungua app ya Settings (aikoni ya gia).", "Gusa kisanduku cha kutafuta kilicho juu na uandike \"text size\".", "Sogeza kitelezi hadi maandishi yawe rahisi kusoma.", "Telezesha chini kutoka juu ili kubadilisha mwangaza.", "Tumia vitufe vya pembeni kwa sauti."],
          words: [["Settings (Mipangilio)", "app ambapo unabadilisha jinsi kifaa chako kinavyofanya kazi."], ["Ufikivu (Accessibility)", "vipengele vinavyofanya kifaa kiwe rahisi kuona, kusikia au kugusa."]],
          slides: [
            { title: "App ya Settings", bullets: ["Kwa kawaida ni aikoni ya gia", "Ndipo unapobadilisha jinsi kifaa kinavyofanya kazi"] },
            { title: "Rahisi zaidi kuona na kusikia", bullets: ["Ukubwa wa maandishi ndani ya Display au Accessibility", "Mwangaza ndani ya Display au vidhibiti vya haraka", "Sauti: vitufe vya pembeni"] },
            { title: "Huwezi kukipata?", bullets: ["Tumia kisanduku cha kutafuta juu ya Settings", "Andika neno kama \"text size\""] }
          ],
          tryIt: "Fungua Settings, tafuta \"text size\" na ukuze maandishi hatua moja. Kisha telezesha chini kutoka juu na ubadilishe mwangaza.",
          youCanNow: "kukuza maandishi na kurekebisha mwangaza na sauti ili kifaa chako kiwe rahisi kutumia.",
          quickCheck: [
            { objective: "O2", q: "App ya Settings kwa kawaida ina aikoni gani?", options: ["Kamera", "Kiputo cha mazungumzo", "Gia", "Kibanio cha karatasi"], answer: 2, why: "Settings kwa kawaida ina aikoni ya gia." },
            { objective: "O2", q: "Skrini ni giza mno kusoma ukiwa nje. Utafanya nini?", options: ["Kutelezesha chini kutoka juu na kuongeza mwangaza", "Kununua simu mpya", "Kubonyeza vitufe vya sauti", "Kufuta app"], answer: 0, why: "Vidhibiti vya haraka vya mwangaza vinapatikana kwa kutelezesha chini kutoka juu ya skrini." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Simu, watu wa mawasiliano na ujumbe mfupi",
          minutes: 5,
          goal: "Hifadhi mtu wa mawasiliano, piga simu na utume ujumbe mfupi.",
          text: [
            "App ya Phone (Simu) inapiga simu. App ya Contacts (kwenye simu nyingine iko ndani ya app ya Phone) inahifadhi majina pamoja na namba, ili uweze kupiga simu kwa kugusa jina badala ya kuandika namba.",
            "App ya Messages (Ujumbe) inatuma ujumbe mfupi. Gusa kitufe cha ujumbe mpya, chagua mtu wa mawasiliano, andika kwenye kisanduku kilicho chini, na uguse mshale wa kutuma.",
            "Namba usiyoijua ikipiga, unaweza kuiacha iende kwenye voicemail (ujumbe wa sauti). Mpigaji halisi ataacha ujumbe. Usimpe kamwe mtu anayekupigia msimbo uliotumwa kwako kwa ujumbe mfupi."
          ],
          steps: ["Fungua Contacts (au Phone, kisha Contacts).", "Gusa kitufe cha + ili kuongeza mtu: jina na namba. Hifadhi (Save).", "Gusa jina, kisha aikoni ya simu ili kupiga.", "Fungua Messages na uguse kitufe cha ujumbe mpya.", "Chagua mtu wa mawasiliano, andika ujumbe wako na uguse kutuma."],
          words: [["Mtu wa mawasiliano (contact)", "jina na namba ya simu vilivyohifadhiwa."], ["Ujumbe mfupi (text message)", "ujumbe mfupi wa maandishi unaotumwa kutoka simu moja hadi nyingine."], ["Voicemail", "ujumbe wa sauti uliorekodiwa unaoachwa usipojibu simu."]],
          slides: [
            { title: "Apps tatu", bullets: ["Phone: kupiga simu", "Contacts: kuhifadhi majina na namba", "Messages: kutuma ujumbe mfupi"] },
            { title: "Ongeza mtu wa mawasiliano", bullets: ["Gusa +", "Weka jina na namba", "Gusa Save"] },
            { title: "Tuma ujumbe mfupi", bullets: ["Kitufe cha ujumbe mpya", "Chagua mtu wa mawasiliano", "Andika na uguse mshale wa kutuma"] },
            { title: "Wapigaji usiowajua", bullets: ["Waache waende kwenye voicemail", "Usimpe kamwe mpigaji msimbo uliotumwa kwa ujumbe"] }
          ],
          tryIt: "Hifadhi mwanafamilia mmoja au rafiki kama mtu wa mawasiliano. Mpigie simu kwa kugusa jina lake, kisha mtumie ujumbe mfupi: \"Ninajizoeza kutumia simu yangu!\"",
          youCanNow: "kuhifadhi mtu wa mawasiliano, kumpigia mtu simu kwa jina lake na kutuma ujumbe mfupi.",
          quickCheck: [
            { objective: "O3", q: "App gani inatuma ujumbe mfupi?", options: ["Messages", "Camera", "Settings", "Photos"], answer: 0, why: "App ya Messages inatuma ujumbe mfupi." },
            { objective: "O3", q: "Namba usiyoijua inakupigia. Utafanya nini?", options: ["Kujibu na kutoa taarifa za benki yako", "Kupiga tena mara moja na kusoma misimbo yoyote", "Kuiacha iende kwenye voicemail; mpigaji halisi ataacha ujumbe", "Kuzima simu yako kwa wiki moja"], answer: 2, why: "Kuacha simu usizozijua ziende kwenye voicemail ni salama; wapigaji halisi huacha ujumbe." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kuzoea kifaa chako",
        questions: [
          { objective: "O1", q: "Mwondoko gani wa kidole unakuza picha?", options: ["Kugusa mara moja", "Kutanua vidole viwili", "Kubonyeza kitufe cha sauti", "Kutelezesha chini"], answer: 1, why: "Kutanua vidole viwili kunakuza." },
          { objective: "O1", q: "Kwa kawaida unarudije kwenye skrini ya mwanzo?", options: ["Kuzima simu", "Kutikisa simu", "Kutelezesha juu kutoka chini au kubonyeza kitufe cha home", "Kufungua kamera"], answer: 2, why: "Kutelezesha juu kutoka chini au kubonyeza home kunakurudisha kwenye skrini ya mwanzo." },
          { objective: "O2", q: "Maandishi kwenye simu yako ni madogo mno. Unayarekebisha wapi?", options: ["Settings, chini ya Display au Accessibility", "App ya Camera", "App ya Phone", "Ujumbe mfupi"], answer: 0, why: "Ukubwa wa maandishi uko ndani ya Settings chini ya Display au Accessibility." },
          { objective: "O3", q: "Kwa nini umhifadhi mtu kama mtu wa mawasiliano?", options: ["Kunafanya simu iende kasi zaidi", "Kunachaji betri", "Kunaficha namba yake", "Ili uweze kumpigia au kumtumia ujumbe kwa kugusa jina lake"], answer: 3, why: "Mtu wa mawasiliano anakuwezesha kumfikia mtu kwa jina." },
          { objective: "O3", q: "Mtu anakupigia na kukuomba umsomee msimbo uliotumwa kwako sasa hivi kwa ujumbe. Unafanya nini?", options: ["Kumsomea", "Kumtumia kwa ujumbe", "Kutoutoa na kukata simu", "Kuuweka mtandaoni"], answer: 2, why: "Msimbo huo unalinda akaunti yako; kampuni halisi hazikuombi." }
        ]
      }
    },
    {
      name: "Sura 2: Picha, apps na kuweka kifaa chako salama",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kupiga na kutuma picha",
          minutes: 5,
          goal: "Piga picha na uitume kwa mtu kwa ujumbe mfupi.",
          text: [
            "Fungua app ya Camera, ielekeze kwa unachotaka, na uguse kitufe kikubwa cha duara. Shikilia kifaa bila kutikisika. Gusa skrini juu ya kitu unachopiga ili kiwe wazi.",
            "Picha zako zinahifadhiwa ndani ya app ya Photos au Gallery. Ili kutuma moja, ifungue, gusa kitufe cha Share (Shiriki) (mara nyingi ni mraba wenye mshale, au vitone vitatu vilivyounganishwa kwa mistari), na uchague Messages au barua pepe, kisha mtu.",
            "Fikiri kabla ya kushiriki. Usitume picha za kitambulisho chako, kadi za benki, tiketi zenye barcode, au kitu chochote cha binafsi kwa watu usiowajua."
          ],
          steps: ["Fungua app ya Camera.", "Elekeza, tulia, na uguse kitu unachopiga ili kiwe wazi.", "Gusa kitufe kikubwa cha duara.", "Fungua Photos au Gallery na uguse picha.", "Gusa Share, chagua Messages, chagua mtu na utume."],
          words: [["Gallery au Photos", "app ambapo picha zako zinahifadhiwa."], ["Kitufe cha Share", "kitufe kinachotuma picha au faili kwa mtu au kwa app nyingine."]],
          slides: [
            { title: "Piga picha", bullets: ["Fungua app ya Camera", "Gusa kitu unachopiga ili kiwe wazi", "Gusa kitufe kikubwa cha duara"] },
            { title: "Tuma picha", bullets: ["Fungua Photos au Gallery", "Gusa Share", "Chagua Messages na mtu"] },
            { title: "Fikiri kabla ya kushiriki", bullets: ["Hakuna picha za vitambulisho au kadi za benki", "Hakuna karatasi za binafsi kwa wageni"] }
          ],
          tryIt: "Piga picha ya kitu kizuri karibu nawe, mmea, chakula au mandhari. Itume kwa ujumbe mfupi kwa mtu wa mawasiliano uliyemhifadhi katika Somo la 3.",
          youCanNow: "kupiga picha iliyo wazi na kuishiriki na mtu kwa ujumbe mfupi.",
          quickCheck: [
            { objective: "O4", q: "Kitufe cha Share kinakuwezesha kufanya nini na picha?", options: ["Kuifuta", "Kuikuza", "Kuipiga tena", "Kuituma kwa ujumbe mfupi au barua pepe"], answer: 3, why: "Share inakuwezesha kuchagua Messages au barua pepe na mtu wa kumtumia picha." },
            { objective: "O4", q: "Picha zako zinaendelea kutoka na ukungu. Utafanya nini?", options: ["Kutikisa simu unapopiga", "Kutulia na kugusa kitu unachopiga kwenye skrini kabla ya kupiga", "Kupunguza mwangaza", "Kupiga ukiwa mbali sana"], answer: 1, why: "Kutulia na kugusa kitu unachopiga kunafanya picha iwe wazi." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kusakinisha apps kwa usalama",
          minutes: 5,
          goal: "Tafuta na usakinishe app ya bure kutoka duka rasmi la apps.",
          text: [
            "Apps zinaongeza mambo mapya ambayo kifaa chako kinaweza kufanya: ramani, hali ya hewa, simu za video, benki yako, duka lako la dawa. Zipate tu kutoka duka rasmi: Google Play Store kwenye Android, au App Store kwenye iPhone na iPad.",
            "Tafuta app kwa jina lake. Kabla ya kusakinisha, kagua jina la kampuni iliyoitengeneza (msanidi, developer), idadi ya maoni (reviews), na alama (rating). Apps bandia zinaiga majina halisi, kwa hiyo hakikisha imetoka kwa kampuni halisi.",
            "App inapoomba ruhusa (permission) kutumia mahali ulipo, kamera, watu wako wa mawasiliano au maikrofoni, jiulize kama kweli inahitaji. App ya tochi haihitaji watu wako wa mawasiliano. Unaweza kukataa, na kubadilisha baadaye ndani ya Settings."
          ],
          steps: ["Fungua Play Store (Android) au App Store (Apple).", "Gusa Search (Tafuta) na uandike jina la app.", "Kagua jina la msanidi, alama na idadi ya maoni.", "Gusa Install au Get.", "Unapoombwa ruhusa, kubali tu kile kinachoeleweka."],
          words: [["App", "programu kwenye simu au tableti yako inayofanya aina moja ya kazi."], ["Msanidi (developer)", "kampuni au mtu aliyetengeneza app."], ["Ruhusa (permission)", "kibali chako kwa app kutumia kitu kama kamera yako au mahali ulipo."]],
          slides: [
            { title: "Maduka rasmi tu", bullets: ["Android: Google Play Store", "iPhone na iPad: App Store"] },
            { title: "Kabla ya kusakinisha", bullets: ["Kagua kwamba msanidi ni kampuni halisi", "Angalia alama na idadi ya maoni", "Apps bandia zinaiga majina halisi"] },
            { title: "Ruhusa", bullets: ["Je, app inaihitaji kweli?", "Tochi haihitaji watu wako wa mawasiliano", "Unaweza kubadilisha baadaye ndani ya Settings"] }
          ],
          tryIt: "Fungua duka lako rasmi la apps na usakinishe app moja ya bure yenye manufaa kwako, kwa mfano app ya hali ya hewa, app ya duka lako la dawa au app ya basi. Kagua jina la msanidi kwanza.",
          youCanNow: "kutafuta, kukagua na kusakinisha app kutoka duka rasmi, na kuamua ruhusa za kukubali.",
          quickCheck: [
            { objective: "O5", q: "Kwa nini ukague jina la msanidi kabla ya kusakinisha app?", options: ["Ili kujua bei ya app dukani", "Ili kubadilisha ukubwa wa maandishi wa simu", "Apps bandia zinaiga majina halisi, kwa hiyo hakikisha imetoka kwa kampuni halisi", "Ili kuona nani alikupigia"], answer: 2, why: "Apps bandia zinaiga majina ya apps halisi, kwa hiyo jina la msanidi linaonyesha kama ni ya kweli." },
            { objective: "O5", q: "App ya mchezo inaomba ruhusa kutumia maikrofoni yako na watu wako wa mawasiliano. Utafanya nini?", options: ["Kukataa isipokuwa inavihitaji kweli; unaweza kubadilisha baadaye ndani ya Settings", "Kukubali kila kitu kila wakati", "Kufuta watu wako wa mawasiliano", "Kuipa nywila yako"], answer: 0, why: "Kubali tu ruhusa ambazo app inazihitaji kweli; unaweza kuzibadilisha baadaye." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kuweka kifaa chako kimefungwa, kikiwa na masasisho na chaji",
          minutes: 5,
          goal: "Washa kufuli la skrini na ukague sasisho la programu.",
          text: [
            "Kufuli la skrini linazuia watu wengine kutumia simu yako ikipotea au ikiibiwa. Tumia msimbo wa PIN wenye angalau namba sita, au alama ya kidole au uso wako. Usitumie 123456 wala tarehe yako ya kuzaliwa.",
            "Masasisho (updates) yanarekebisha matatizo ya usalama. Yatafute ndani ya Settings: kwenye Android tafuta Software update au System update; kwenye iPhone na iPad nenda General, kisha Software Update. Chomeka chaji na utumie Wi-Fi unaposasisha.",
            "Ukipoteza simu yako, Find My Device ya Android na Find My ya Apple zinaweza kuionyesha kwenye ramani au kuifunga. Ziwashe sasa, wakati bado unayo."
          ],
          steps: ["Fungua Settings na utafute \"screen lock\" au \"passcode\".", "Weka PIN yenye angalau namba sita, au alama ya kidole au uso.", "Tafuta \"software update\" ndani ya Settings na usakinishe sasisho lolote.", "Tafuta \"Find My\" ndani ya Settings na uhakikishe imewashwa.", "Chaji kifaa chako kila usiku."],
          words: [["PIN", "msimbo wa namba unaofungua kifaa chako."], ["Sasisho la programu (software update)", "marekebisho na maboresho ya bure kutoka kwa mtengenezaji wa kifaa."], ["Find My Device / Find My", "zana za Android na Apple zinazokusaidia kupata kifaa kilichopotea."]],
          slides: [
            { title: "Funga skrini yako", bullets: ["PIN ya namba sita au zaidi", "Au alama ya kidole au uso", "Si 123456 wala tarehe yako ya kuzaliwa"] },
            { title: "Sasisha kifaa chako", bullets: ["Masasisho yanarekebisha matatizo ya usalama", "Settings, kisha Software update", "Chomeka chaji na utumie Wi-Fi"] },
            { title: "Kikipotea", bullets: ["Android: Find My Device", "Apple: Find My", "Iwashe sasa"] }
          ],
          tryIt: "Mazoezi ya kazi ya mwisho: hakikisha kufuli la skrini limewashwa, tafuta \"software update\" ndani ya Settings uone kama kuna sasisho linalosubiri, na uwashe Find My Device au Find My. Kisha fanya kazi ya mwisho: piga simu, tuma picha mpya kwa ujumbe mfupi, na usakinishe app moja yenye manufaa.",
          youCanNow: "kuweka kifaa chako kimefungwa, kikiwa na masasisho mapya na kinachoweza kupatikana kikipotea.",
          quickCheck: [
            { objective: "O6", q: "Kipi kati ya hivi ni kufuli dhaifu la skrini?", options: ["Alama ya kidole chako", "Uso wako", "PIN ya namba sita iliyo vigumu kukisia", "123456"], answer: 3, why: "123456 au tarehe yako ya kuzaliwa ni rahisi kukisia." },
            { objective: "O6", q: "Unataka kuweza kupata simu yako ukiipoteza. Utafanya nini sasa?", options: ["Kusubiri hadi ipotee, kisha kutafuta mpangilio", "Kuwasha Find My Device (Android) au Find My (Apple)", "Kuandika PIN yako nyuma ya simu", "Kuzima kufuli la skrini"], answer: 1, why: "Zana hizi lazima ziwashwe wakati bado una simu." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Picha, apps na kuweka kifaa chako salama",
        questions: [
          { objective: "O4", q: "Picha unazopiga zinahifadhiwa wapi?", options: ["Ndani ya app ya Phone", "Ndani ya Photos au Gallery", "Ndani ya Settings", "Ndani ya duka la apps"], answer: 1, why: "App ya Photos au Gallery inahifadhi picha zako." },
          { objective: "O5", q: "Mahali salama pa kupata apps kwenye iPhone ni wapi?", options: ["Kiungo katika ujumbe kutoka kwa mgeni", "Tovuti yoyote", "Tangazo linalojitokeza ghafla (pop-up)", "App Store"], answer: 3, why: "Sakinisha apps kutoka duka rasmi tu." },
          { objective: "O5", q: "App ya tochi inaomba kuona watu wako wa mawasiliano. Chaguo bora ni lipi?", options: ["Kukataa; haiwahitaji", "Kukubali kila kitu", "Kuipa nywila yako", "Kuondoa watu wako wa mawasiliano"], answer: 0, why: "Kubali tu ruhusa ambazo app inazihitaji kweli." },
          { objective: "O6", q: "Kufuli lipi la skrini ni imara zaidi?", options: ["Bila kufuli", "123456", "Tarehe yako ya kuzaliwa", "PIN ya namba sita isiyo rahisi kukisia"], answer: 3, why: "PIN isiyo dhahiri ni vigumu zaidi kukisia." },
          { objective: "O6", q: "Kwa nini usakinishe masasisho ya programu?", options: ["Yanafuta picha zako", "Yanarekebisha matatizo ya usalama", "Yanagharimu pesa", "Yanazima simu milele"], answer: 1, why: "Masasisho yanarekebisha matatizo ambayo wahalifu wangeweza kutumia." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kutumia Simu Janja na Tableti",
    questions: [
      { objective: "O1", q: "Kampuni gani inatengeneza iPhone?", options: ["Samsung", "Google", "Apple", "Motorola"], answer: 2, why: "Apple inatengeneza iPhone na iPad." },
      { objective: "O1", q: "Kugusa kunafanya nini?", options: ["Kunafungua kitu", "Kunazima simu", "Kunafuta app", "Kunapiga simu chenyewe"], answer: 0, why: "Kugusa haraka kunafungua app au kuchagua kitu." },
      { objective: "O1", q: "Ili kusogeza ukurasa chini wewe:", options: ["Unabana", "Unabonyeza kitufe cha kuwasha", "Unatelezesha juu au chini", "Unatikisa kifaa"], answer: 2, why: "Kutelezesha kunasogeza ukurasa." },
      { objective: "O1", q: "Picha ndogo kwenye skrini ya mwanzo zinaitwa:", options: ["Watu wa mawasiliano", "Aikoni (icons)", "Ujumbe mfupi", "Masasisho"], answer: 1, why: "Aikoni ni picha unazogusa ili kufungua apps." },
      { objective: "O2", q: "App gani ina aikoni ya gia na inakuwezesha kubadilisha ukubwa wa maandishi?", options: ["Camera", "Messages", "Settings", "Photos"], answer: 2, why: "Settings ndipo unapobadilisha jinsi kifaa kinavyofanya kazi." },
      { objective: "O2", q: "Huwezi kupata mpangilio fulani. Njia ya haraka zaidi ni ipi?", options: ["Kununua simu mpya", "Kutumia kisanduku cha kutafuta juu ya Settings", "Kuizima na kuiwasha", "Kufungua kamera"], answer: 1, why: "Kutafuta ndani ya Settings kunapata vitu kwa jina." },
      { objective: "O2", q: "Kwenye vifaa vingi, unaweza kubadilisha mwangaza haraka wapi?", options: ["Kutelezesha chini kutoka juu ya skrini", "App ya Phone", "Duka la apps", "Watu wako wa mawasiliano"], answer: 0, why: "Vidhibiti vya haraka vilivyo juu vina mwangaza." },
      { objective: "O3", q: "Ili kumpigia mtu simu kwa kugusa jina lake, kwanza:", options: ["Sakinisha app mpya", "Mhifadhi kama mtu wa mawasiliano", "Piga picha yake", "Sasisha simu"], answer: 1, why: "Mtu wa mawasiliano aliyehifadhiwa anaunganisha jina na namba." },
      { objective: "O3", q: "App gani inatuma ujumbe mfupi?", options: ["Camera", "Settings", "Weather", "Messages"], answer: 3, why: "Messages inatuma na kupokea ujumbe mfupi." },
      { objective: "O3", q: "Namba usiyoijua inapiga. Chaguo salama ni:", options: ["Kuiacha iende kwenye voicemail", "Kumpa msimbo kutoka kwenye ujumbe wako", "Kumwambia PIN yako", "Kumtumia picha ya kadi yako ya benki"], answer: 0, why: "Mpigaji halisi ataacha ujumbe wa voicemail." },
      { objective: "O4", q: "Ili picha iwe wazi, wewe:", options: ["Unatikisa simu", "Unagusa kitu unachopiga kwenye skrini kabla ya kupiga", "Unazima skrini", "Unakutanisha vidole"], answer: 1, why: "Kugusa kitu unachopiga kunaiambia kamera mahali pa kuweka uwazi." },
      { objective: "O4", q: "Ili kutuma picha, ifungue na uguse:", options: ["Delete", "Sauti", "Settings", "Share"], answer: 3, why: "Share inatuma picha kwa mtu au kwa app." },
      { objective: "O4", q: "Picha gani hupaswi kamwe kumtumia mgeni?", options: ["Machweo ya jua", "Ua", "Kitambulisho chako au kadi ya benki", "Chakula chako cha mchana"], answer: 2, why: "Vitambulisho na kadi vinaweza kutumiwa kukuibia." },
      { objective: "O5", q: "Duka rasmi la apps kwenye Android ni:", options: ["Kiungo katika ujumbe", "Tangazo linalojitokeza ghafla", "Tovuti yoyote", "Google Play Store"], answer: 3, why: "Google Play ndilo duka rasmi la Android." },
      { objective: "O5", q: "Kabla ya kusakinisha app, kagua:", options: ["Hakuna kitu", "Rangi ya aikoni tu", "Msanidi, alama na maoni", "Salio la benki yako"], answer: 2, why: "Apps bandia zinaiga majina, kwa hiyo kagua nani aliitengeneza." },
      { objective: "O5", q: "Ruhusa (permission) ni:", options: ["Aina ya picha", "Kibali chako kwa app kutumia vitu kama kamera au mahali ulipo", "Bili ya simu", "Aina ya ujumbe mfupi"], answer: 1, why: "Apps zinaomba ruhusa kutumia sehemu za kifaa chako." },
      { objective: "O6", q: "Kufuli la skrini linasaidia kwa sababu:", options: ["Linafanya simu ziwe nafuu", "Linapiga picha", "Linakuza maandishi", "Linazuia wengine kutumia simu yako ikipotea"], answer: 3, why: "Kufuli linaweka taarifa zako kuwa za faragha." },
      { objective: "O6", q: "Kwenye iPhone, Software Update iko chini ya:", options: ["Camera", "Photos", "Messages", "Settings, kisha General"], answer: 3, why: "Masasisho ya iPhone yako ndani ya Settings, General, Software Update." },
      { objective: "O6", q: "Unaposakinisha sasisho kubwa, ni bora:", options: ["Kuzima Wi-Fi", "Kuwa na betri yenye chaji kidogo", "Kutumia Wi-Fi na kuchomeka chaji", "Kulifanya ukiwa kwenye simu"], answer: 2, why: "Wi-Fi na umeme vinazuia sasisho lisisimame katikati." },
      { objective: "O6", q: "Find My Device (Android) na Find My (Apple) zinakusaidia:", options: ["Kupata vifurushi vya simu vya bei nafuu", "Kupata marafiki wapya", "Kupata apps za bure", "Kupata kifaa kilichopotea kwenye ramani"], answer: 3, why: "Zinaonyesha, kufunga au kulia kifaa kilichopotea." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [1, 3, 4, 6, 7, 9, 11, 12, 14, 16] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Kupiga simu", objective: "O3", notYet: "Hakuna simu wala simu ya video iliyopigwa, au mwanafunzi alihitaji msaada kumpata mtu.", meets: "Anapiga simu au simu ya video kwa mtu wa mawasiliano aliyehifadhiwa bila msaada.", exceeds: "Pia anahifadhi kwanza mtu mpya wa mawasiliano mwenye jina na namba." },
      { name: "Ujumbe wenye picha", objective: "O4", notYet: "Ujumbe au picha haikutumwa, au picha inaonyesha taarifa binafsi.", meets: "Anapiga picha iliyo wazi na kuituma kwa ujumbe mfupi kwa mtu anayemjua.", exceeds: "Anatumia kitufe cha Share kutoka Photos au Gallery na kuongeza ujumbe mfupi." },
      { name: "Kusakinisha app", objective: "O5", notYet: "Hakuna app iliyosakinishwa, au ilitoka nje ya duka rasmi.", meets: "App moja ya bure imesakinishwa kutoka duka rasmi baada ya kukagua msanidi na maoni.", exceeds: "Pia anakataa ruhusa ambayo app haihitaji." },
      { name: "Kufuli na masasisho", objective: "O6", notYet: "Hakuna kufuli la skrini, au kufuli rahisi kama 123456.", meets: "Kufuli imara la skrini limewashwa na programu ina masasisho mapya.", exceeds: "Find My Device au Find My pia imewashwa." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kupata Anafikia au Anazidi katika kila mstari wa rubriki wa kazi ya mwisho",
      "Wanafunzi wanaoripoti kutumia simu au tableti yao peke yao kwa simu, ujumbe mfupi na picha siku 30 baadaye (utafiti wa kufuatilia)",
      "Wanafunzi wanaoripoti kusakinisha app yenye manufaa, kama app ya duka la dawa, benki au simu za video, kwa usalama kutoka duka rasmi",
      "Wanafunzi wanaoendelea na kozi inayofuata, kama Misingi ya Intaneti au Barua Pepe na Mawasiliano ya Mtandaoni"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu janja au tableti ya mwanafunzi mwenyewe yenye chaji (Android, iPhone au iPad)",
      "Wi-Fi kwa kusakinisha apps na masasisho",
      "Namba ya rafiki au mwanafamilia ya kumpigia na kumtumia ujumbe, au ya mwanafunzi mwenzako",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi"
    ],
    facilitatorNotes: [
      "Wapange wanafunzi kwa aina ya kifaa (Android au Apple) ili hatua zilizo kwenye skrini zifanane na wanachokiona.",
      "Waache wanafunzi waguse kila kitu wenyewe; kama lazima uonyeshe kitu, tumia kifaa chako mwenyewe.",
      "Kusakinisha baadhi ya apps kunaomba nywila ya akaunti; mwache mwanafunzi aiandike kwa faragha, na usiombe wala usiandike kamwe PIN au nywila yake.",
      "Waambie wanafunzi wapigiane simu na kutumiana ujumbe darasani ili mtu yeyote asilazimike kushiriki namba yake binafsi asiyotaka kuitoa.",
      "Leta chaja na upange masasisho mwishoni mwa kipindi, kwa sababu yanaweza kuchukua muda mrefu."
    ]
  }
};
