"use strict";

// Koach Learn course (Swahili translation of shared/typing-keyboarding.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "typing-keyboarding-sw",
  lang: "sw",
  translationOf: "typing-keyboarding",
  category: "Workforce Development",
  name: "Ujuzi wa Kuchapa kwa Kibodi",
  skills: "Mkao salama wa kuchapa, Kuchapa bila kuangalia kutoka safu ya nyumbani, Namba na kibodi ya namba, Kupima kasi na usahihi, Njia za mkato za kibodi, Kupanga mazoezi ya kila siku",
  outcome: "kuandaa mahali salama pa kuchapa, kuchapa kutoka safu ya nyumbani bila kuangalia vitufe, kuandika namba na alama, kupima kasi na usahihi wako mwenyewe, kutumia njia kuu za mkato za kuhariri, na kufuata mpango wa mazoezi wa wiki nne ili ujiandae kwa jaribio la kuchapa la kazini.",
  about: [
    "Kazi nyingi zinakuhitaji uchape: kazi za ofisini na mapokezi, huduma kwa wateja kwa chat, kuingiza data, kumbukumbu za matibabu, kazi za shule na maombi ya kazi mtandaoni. Baadhi ya waajiri wanatoa jaribio fupi la kuchapa kabla ya kuajiri. Kozi hii ni kwa vijana wanaotafuta kazi yao ya kwanza, watu wazima wanaobadilisha kazi, wazee wanaotaka kuchapa bila kuchoka sana, na yeyote anayechapa kwa vidole viwili na anataka kufanya vizuri zaidi.",
    "Utapanga kiti na kibodi yako ili kuchapa kusikuumize, utajifunza kila kidole kinakwenda wapi, utafanya mazoezi ya namba na alama, utajipima muda na kuhesabu maneno yako kwa dakika na usahihi wako, na utajifunza njia za mkato zinazookoa muda kazini. Mwishoni utaandika mpango wako mwenyewe wa mazoezi wa wiki nne wenye alama ya kuanzia na lengo.",
    "Unahitaji tu kibodi ya kompyuta na programu yoyote unayoweza kuchapia, kama Notepad, TextEdit, Google Docs au Microsoft Word. Tovuti ya bure ya mazoezi inasaidia lakini si lazima: kila zoezi linafanya kazi pia kwa programu ya kuandika maandishi, karatasi na saa ya kupima muda kwenye simu.",
    "Kila somo linachukua kama dakika tano, likifuatiwa na zoezi la \"Jaribu sasa\" na jaribio fupi la maswali mawili. Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni. Kuchapa kunaboreka kwa mazoezi ya kila siku, kwa hiyo kozi hii inakupa mpango, si njia ya mkato."
  ],
  finalTask: "Andaa mpango wako wa mazoezi ya kuchapa wa wiki nne. Fanya jaribio la kuchapa la dakika moja na uandike maneno kwa dakika (WPM) na usahihi wako wa kuanzia, weka lengo kwa vyote viwili, na uandike mpango wa kila siku wenye tarehe: dakika 10 hadi 15 kwa siku zenye zoezi la kupasha moto, zoezi la vitufe vyako dhaifu zaidi, zoezi la namba au njia za mkato, na jaribio moja la muda kila wiki. Ongeza jedwali la kumbukumbu la kujaza kila wiki na maelezo ya jinsi utakavyofanya jaribio la kuchapa la kazini.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watafuta kazi wa umri wote: vijana wanaotafuta kazi ya kwanza, watu wazima wanaobadilisha kazi au wanaorudi kazini, wazee, watu wanaorudi nyumbani kutoka gerezani na watu wanaozungumza Kiingereza kama lugha ya pili. Wengi wanatumia simu kila siku lakini wanachapa kwenye kompyuta kwa vidole viwili huku wakiangalia vitufe.",
    startingPoint: "Wanaweza kuwasha kompyuta, kufungua programu na kuchapa sentensi huku wakiangalia vitufe (kama inavyofundishwa katika \"Ujuzi wa Msingi wa Kompyuta\"). Wengi hawajawahi kujifunza safu ya nyumbani, hawajui kasi yao, na wanatumia kipanya (mouse) kwa kila kunakili, kubandika na kutendua.",
    gap: "Kazi za ofisini, huduma kwa wateja, kuingiza data na afya zinatarajia uchapaji thabiti na sahihi, na baadhi ya waajiri wanapima kasi ya kuchapa kabla ya kuajiri. Kuchapa kwa kutafuta kitufe kimoja kimoja ni polepole, kunachosha na kuna makosa mengi. Wanafunzi wanahitaji tabia sahihi za vidole, njia ya kupima maendeleo, mkao salama na mpango wa kila siku wanaoweza kuufuata wenyewe.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi (kama darasa la 6)",
      "Vifaa: kibodi ya kompyuta ya mezani au laptop; kibodi ya skrini ya simu au tableti haifai kwa mazoezi ya kuchapa bila kuangalia",
      "Baadhi ya wanafunzi wana kompyuta ya maktaba au ya programu tu kwa vipindi vifupi",
      "Muda: masomo ya dakika 4 hadi 6 pamoja na dakika 10 hadi 15 za mazoezi kila siku",
      "Starehe na afya: acha ikiwa kuchapa kunasababisha maumivu au ganzi na zungumza na mtaalamu wa afya"
    ],
    prerequisites: "Uwezo wa kuwasha kompyuta na kufungua programu ya kuchapia. Wanafunzi ambao hawajawahi kutumia kompyuta wanaanza na kozi \"Ujuzi wa Msingi wa Kompyuta\"."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa kiti, meza na kompyuta", action: "kupanga kiti, kibodi na skrini na kukaa katika mkao salama wa kuchapa", standard: "ukitimiza angalau vipengele 5 kati ya 6 vya orodha ya kukagua mpangilio" },
    { id: "O2", condition: "Ukitumia kibodi ya kompyuta", action: "kuweka vidole vyako kwenye safu ya nyumbani na kubonyeza kila kitufe cha herufi kwa kidole sahihi", standard: "ukichapa mstari mzima wa zoezi bila kuangalia vitufe" },
    { id: "O3", condition: "Ukipewa jaribio la kuchapa la muda la dakika moja au zaidi", action: "kuhesabu maneno yako kwa dakika na usahihi wako", standard: "namba zote mbili zikiwa zimehesabiwa sahihi" },
    { id: "O4", condition: "Ukipewa orodha ya namba za simu, bei, tarehe na herufi kubwa", action: "kuchapa namba, alama na herufi kubwa kwa safu ya namba, vitufe vya Shift na kibodi ya namba", standard: "bila zaidi ya makosa 2 katika mistari 10" },
    { id: "O5", condition: "Unapochapa na kurekebisha hati fupi", action: "kutumia njia za mkato za kibodi kuchagua, kunakili, kubandika, kutendua na kuhifadhi", standard: "ukifanya vyote vitano bila kipanya" },
    { id: "O6", condition: "Ukitumia alama yako mwenyewe ya jaribio la kuanzia", action: "kuandika mpango wa mazoezi wa wiki nne wenye lengo, mazoezi ya kila siku, tarehe na kumbukumbu", standard: "unaotimiza kila mstari wa rubriki ya kozi" }
  ],
  chapters: [
    {
      name: "Sura 1: Kuandaa mikono yako",
      lessons: [
        {
          title: "Kujiandaa kuchapa kwa usalama",
          objectives: ["O1"],
          minutes: 5,
          goal: "Panga kiti, kibodi na skrini yako na ukae katika mkao usioumiza mwili wako.",
          text: [
            "Kuchapa kwa saa nyingi katika mkao mbaya kunaweza kusababisha maumivu ya shingo, mgongo, vifundo vya mikono na mikono. Mpangilio mzuri haugharimu chochote na unakusaidia kuchapa haraka zaidi, kwa sababu mikono iliyolegea inasogea kwa urahisi zaidi.",
            "OSHA, shirika la Marekani la usalama mahali pa kazi, linaeleza mkao wa kawaida (neutral posture) kwa kazi ya kompyuta: kichwa na shingo vimesimama sawa na mwili wako, mabega yamelegea, viwiko karibu na mwili, vifundo vya mikono na mikono vimenyooka sawa na mikono ya mbele, sehemu ya chini ya mgongo imeegemezwa na miguu imekanyaga sakafu. Juu ya skrini kuwe usawa wa macho au chini kidogo. Hakuna mkao mmoja kamili kwa kila mtu, kwa hiyo rekebisha hadi ujisikie vizuri.",
            "Weka kibodi karibu, ili usinyooshe mikono mbali. Acha vidole vyako vielee juu ya vitufe na uvigonge kwa wepesi; usiegemeze vifundo vya mikono kwa nguvu kwenye ukingo wa meza unapochapa. Pumzika kidogo kusimama, kujinyoosha na kuangalia mbali na skrini. Kuchapa kukisababisha maumivu, kuwashwa au ganzi isiyoisha, acha na zungumza na daktari au muuguzi."
          ],
          steps: ["Kaa nyuma kitini ili sehemu ya chini ya mgongo iegemezwe. Tumia taulo iliyokunjwa au mto ukihitaji.", "Weka miguu yako sawa sakafuni au juu ya boksi au kiegemeo cha miguu.", "Vuta kibodi karibu ili viwiko vibaki karibu na mbavu zako.", "Weka vifundo vya mikono vimenyooka, sawa na mikono ya mbele, na mabega yamelegea.", "Sogeza skrini ili juu yake iwe usawa wa macho au chini kidogo.", "Panga mapumziko mafupi ya kusimama na kujinyoosha kila dakika 30 hadi 60 hivi."],
          words: [["Mkao", "jinsi unavyoshikilia mwili wako unapokaa au kusimama."], ["Mkao wa kawaida (neutral posture)", "mkao uliolegea na uliosawazika ambapo viungo vyako havijapinda wala kujisokota."], ["Ergonomics", "kupanga kazi na vifaa ili vilingane na mwili wako na visiuumize."], ["OSHA", "Occupational Safety and Health Administration, shirika la Marekani la usalama mahali pa kazi."]],
          slides: [
            { title: "Kwa nini mpangilio ni muhimu", bullets: ["Mkao mbaya unaweza kuumiza shingo, mgongo na vifundo vya mikono", "Mikono iliyolegea inachapa haraka zaidi", "Mpangilio mzuri ni bure"] },
            { title: "Mkao wa kawaida", bullets: ["Kichwa sawa na mwili, mabega yamelegea", "Viwiko karibu, vifundo vya mikono vimenyooka", "Mgongo wa chini umeegemezwa, miguu sakafuni"] },
            { title: "Kibodi na skrini", bullets: ["Kibodi karibu ili usinyooshe mikono mbali", "Juu ya skrini usawa wa macho au chini kidogo", "Gonga vitufe kwa wepesi; acha vidole vielee"] },
            { title: "Tunza mwili wako", bullets: ["Pumzika kidogo kusimama na kujinyoosha", "Maumivu, kuwashwa au ganzi: acha na umwone daktari au muuguzi"] }
          ],
          sources: [{ name: "OSHA: Computer Workstations eTool", url: "https://www.osha.gov/etools/computer-workstations" }],
          tryIt: "Nakili orodha hii ya kukagua yenye vipengele sita kwenye karatasi: mgongo umeegemezwa, miguu sakafuni, viwiko karibu, vifundo vya mikono vimenyooka, mabega yamelegea, juu ya skrini usawa wa macho au chini. Kaa kwenye kompyuta utakayofanyia mazoezi, weka alama kwa kila kipengele unachotimiza, na urekebishe vile ambavyo hutimizi.",
          youCanNow: "kupanga kiti, kibodi na skrini kwa kuchapa salama na kukagua mkao wako kwa orodha ya vipengele sita.",
          quickCheck: [
            { objective: "O1", q: "Juu ya skrini ya kompyuta yako kunapaswa kuwa wapi?", options: ["Juu sana kuliko kichwa chako", "Usawa wa macho au chini kidogo", "Bapa juu ya meza", "Karibu na magoti yako"], answer: 1, why: "Mwongozo wa OSHA unaweka juu ya skrini usawa wa macho au chini kidogo ili shingo yako ibaki imesawazika." },
            { objective: "O1", q: "Vifundo vya mikono yako vinapinda juu sana unapochapa. Unabadilisha nini?", options: ["Kuchapa haraka ili umalize mapema", "Kusukuma kibodi mbali zaidi", "Kuinua mabega yako", "Kurekebisha kiti au kibodi ili vifundo vya mikono vinyooke"], answer: 3, why: "Vifundo vya mikono vinapaswa kunyooka, sawa na mikono ya mbele; vifundo vilivyopinda vinaongeza mkazo." }
          ]
        },
        {
          title: "Safu ya nyumbani na ramani ya vidole",
          objectives: ["O2"],
          minutes: 6,
          goal: "Weka vidole vyako kwenye safu ya nyumbani na ubonyeze kila kitufe cha herufi kwa kidole sahihi bila kuangalia.",
          text: [
            "Kuchapa bila kuangalia (touch typing) ni kuchapa bila kuangalia vitufe. Kila kidole kina vitufe vyake, kwa hiyo mikono yako inajifunza herufi ziko wapi. Mwanzoni kunaonekana polepole, lakini baada ya wiki chache za mazoezi kunakuwa haraka na sahihi zaidi kuliko kuangalia.",
            "Vidole vyako vinaanzia na kurudi kwenye safu ya nyumbani. Mkono wa kushoto: kidole kidogo kwenye A, kidole cha pete kwenye S, kidole cha kati kwenye D, kidole cha shahada kwenye F. Mkono wa kulia: shahada kwenye J, kati kwenye K, pete kwenye L, kidole kidogo kwenye nukta-mkato (;). Vidole gumba vinapumzika kwenye kitufe cha nafasi (space bar). Kibodi nyingi zina kivimbe kidogo kwenye F na J ili upate nyumbani bila kuangalia.",
            "Kila kidole kinafika juu na chini kutoka kitufe chake cha nyumbani. Kidole kidogo cha kushoto: Q, A, Z. Pete ya kushoto: W, S, X. Kati ya kushoto: E, D, C. Shahada ya kushoto: R, F, V na pia T, G, B. Shahada ya kulia: Y, H, N na pia U, J, M. Kati ya kulia: I, K na koma. Pete ya kulia: O, L na nukta. Kidole kidogo cha kulia: P, nukta-mkato, mkwaju (/) na kitufe cha Enter. Baada ya kila kufika, kidole kinarudi nyumbani."
          ],
          steps: ["Tafuta vivimbe kwenye F na J kwa vidole vyako vya shahada.", "Weka vidole vingine kwenye A S D na K L ;, na vidole gumba kwenye kitufe cha nafasi.", "Angalia skrini, si mikono yako. Funika mikono yako kwa kitambaa ukiendelea kuangalia.", "Chapa polepole: fika kwa kidole sahihi, kisha kirudishe nyumbani.", "Mwanzoni sema kila herufi kwa sauti ya chini unapoichapa, na weka mdundo thabiti."],
          words: [["Kuchapa bila kuangalia (touch typing)", "kuchapa bila kuangalia vitufe, ukitumia kidole kilekile kwa kila kitufe kila wakati."], ["Safu ya nyumbani", "safu ya kati ya herufi ambapo vidole vyako vinapumzika: A S D F na J K L ;."], ["Kutafuta na kugonga (hunt and peck)", "kutafuta kila kitufe na kukibonyeza kwa kidole kimoja au viwili."], ["Kufika", "kusogeza kidole kutoka kitufe chake cha nyumbani hadi kitufe kingine na kurudi."]],
          slides: [
            { title: "Kuchapa bila kuangalia", bullets: ["Chapa bila kuangalia vitufe", "Kila kidole kina vitufe vyake", "Polepole mwanzoni, haraka baada ya mazoezi"] },
            { title: "Safu ya nyumbani", bullets: ["Kushoto: A S D F", "Kulia: J K L ;", "Vidole gumba kwenye kitufe cha nafasi; vivimbe kwenye F na J"] },
            { title: "Kufika", bullets: ["Kila kidole kinafika juu au chini kutoka nyumbani", "Vidole vya shahada vinashughulikia pia T G B na Y H N", "Rudi nyumbani baada ya kila kufika"] },
            { title: "Tabia zinazofaa", bullets: ["Macho kwenye skrini", "Mdundo wa polepole na thabiti", "Usahihi kwanza; kasi inakuja baadaye"] }
          ],
          tryIt: "Fungua Notepad, TextEdit, Google Docs au Word. Bila kuangalia mikono yako, chapa kila mstari mara tatu: asdf jkl; kisha fdsa ;lkj kisha sad lad fall flask kisha dad has a glass. Kisha chapa: the quick brown fox jumps over the lazy dog. Hesabu mara ngapi uliangalia chini.",
          youCanNow: "kupata safu ya nyumbani kwa kugusa, kutumia kidole sahihi kwa kila herufi, na kufanya mazoezi ya mstari bila kuangalia vitufe.",
          quickCheck: [
            { objective: "O2", q: "Vitufe gani vina vivimbe vidogo vya kukusaidia kupata safu ya nyumbani?", options: ["F na J", "A na ;", "Q na P", "Z na M"], answer: 0, why: "Vivimbe kwenye F na J vinawezesha vidole vya shahada kupata nyumbani bila kuangalia." },
            { objective: "O2", q: "Kidole gani kinachapa herufi E?", options: ["Shahada ya kulia", "Kidole kidogo cha kushoto", "Kidole cha kati cha kushoto", "Kidole gumba cha kulia"], answer: 2, why: "E ni kufika juu kutoka D, ambayo ni ya kidole cha kati cha kushoto." }
          ]
        },
        {
          title: "Herufi kubwa, namba, alama na kibodi ya namba",
          objectives: ["O4"],
          minutes: 6,
          goal: "Chapa herufi kubwa, namba na alama za kawaida, na uingize namba kwenye kibodi ya namba.",
          text: [
            "Kwa herufi kubwa, shikilia kitufe cha Shift kwa kidole kidogo cha mkono MWINGINE, bonyeza herufi, kisha achilia. Kwa A kubwa (mkono wa kushoto), tumia Shift ya kulia. Kwa J kubwa (mkono wa kulia), tumia Shift ya kushoto. Caps Lock ni ya kuchapa neno zima kwa herufi kubwa; izime baadaye.",
            "Safu ya namba iko juu ya herufi. Kila kidole kinafika juu kutoka kitufe chake cha nyumbani: kidole kidogo cha kushoto kinachapa 1, pete ya kushoto 2, kati ya kushoto 3, shahada ya kushoto 4 na 5, shahada ya kulia 6 na 7, kati ya kulia 8, pete ya kulia 9, kidole kidogo cha kulia 0. Alama zilizo kwenye vitufe hivyo hivyo, kama $ % @ # na !, zinahitaji Shift.",
            "Kibodi nyingi za kompyuta za mezani zina kibodi ya namba upande wa kulia, iliyopangwa kama kikokotoo. Kazi za kuingiza data, bili, benki na stoo zinaitumia sana. Washa Num Lock. Weka shahada ya kulia kwenye 4, kidole cha kati kwenye 5 (kina kivimbe) na kidole cha pete kwenye 6. Kidole gumba kinabonyeza 0 na kidole kidogo kinabonyeza Enter. Laptop nyingi hazina kibodi ya namba; hapo tumia safu ya namba."
          ],
          steps: ["Herufi kubwa: shikilia Shift kwa kidole kidogo cha mkono mwingine, bonyeza herufi, achilia.", "Safu ya namba: fika juu kutoka nyumbani kwa kidole kilekile, kisha urudi.", "Alama: shikilia Shift na ubonyeze kitufe cha namba kinachoonyesha alama hiyo.", "Kibodi ya namba: washa Num Lock na upumzike kwenye 4 5 6, ukitumia kivimbe kwenye 5.", "Kagua namba mara mbili; tarakimu moja isiyo sahihi katika bei au namba ya simu ni kosa halisi."],
          words: [["Kitufe cha Shift", "kitufe unachoshikilia ili kupata herufi kubwa au alama ya juu kwenye kitufe."], ["Caps Lock", "kitufe kinachofanya kila herufi kuwa kubwa hadi ukibonyeze tena."], ["Kibodi ya namba", "kundi la vitufe vya namba upande wa kulia wa kibodi nyingi, pia huitwa numeric keypad au 10-key."], ["Num Lock", "kitufe kinachowasha namba za kibodi ya namba."], ["Kuingiza data", "kuchapa taarifa kama majina, namba na misimbo kwenye mfumo wa kompyuta."]],
          slides: [
            { title: "Herufi kubwa", bullets: ["Shikilia Shift kwa mkono mwingine", "A kubwa: Shift ya kulia; J kubwa: Shift ya kushoto", "Caps Lock kwa maneno mazima tu"] },
            { title: "Safu ya namba na alama", bullets: ["Fika juu kutoka nyumbani kwa kidole kilekile", "Alama kama $ % @ zinahitaji Shift", "Rudi nyumbani baada ya kila kufika"] },
            { title: "Kibodi ya namba (10-key)", bullets: ["Washa Num Lock", "Pumzika kwenye 4 5 6; kivimbe kiko kwenye 5", "Kidole gumba kwenye 0, kidole kidogo kwenye Enter"] },
            { title: "Namba lazima ziwe sahihi kabisa", bullets: ["Tarakimu moja isiyo sahihi ni kosa halisi", "Kagua bei, tarehe na namba za simu mara mbili"] }
          ],
          tryIt: "Chapa mistari hii kumi, kisha linganisha kila mmoja na ukurasa: (555) 014-2290 | $12.75 | 03/15/2026 | Order #4471 | 40% off | Maria Lopez | Dr. Kim, Room 210 | 7:30 a.m. | ID 88-31-05 | Total: $1,049.60. Tumia kibodi ya namba kama unayo. Hesabu makosa yako na ufanye mazoezi ya mistari uliyokosea.",
          youCanNow: "kuchapa herufi kubwa kwa Shift ya mkono mwingine, kuingiza namba na alama kutoka safu ya namba, na kutumia kibodi ya namba kuanzia 4 5 6.",
          quickCheck: [
            { objective: "O4", q: "Unataka P kubwa (kitufe cha mkono wa kulia). Unashikilia Shift ipi?", options: ["Shift ya kulia", "Caps Lock", "Shift yoyote kwa mkono uleule", "Shift ya kushoto"], answer: 3, why: "Tumia Shift ya mkono mwingine, ili mkono wa kulia uwe huru kubonyeza P." },
            { objective: "O4", q: "Kwenye kibodi ya namba, kidole chako cha kati kinapumzika wapi?", options: ["Kwenye 0", "Kwenye 5, kitufe chenye kivimbe", "Kwenye Enter", "Kwenye 9"], answer: 1, why: "Vitufe vya nyumbani vya kibodi ya namba ni 4 5 6, na 5 ina kivimbe kwa kidole chako cha kati." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kuandaa mikono yako",
        questions: [
          { objective: "O1", q: "Kipi ni sehemu ya mkao salama wa kuchapa?", options: ["Miguu sakafuni na sehemu ya chini ya mgongo imeegemezwa", "Mabega yameinuliwa kuelekea masikio", "Vifundo vya mikono vimepinda juu sana", "Kibodi mbali kwa urefu wa mkono"], answer: 0, why: "Miguu sakafuni, mgongo umeegemezwa na mabega yamelegea ni sehemu ya mkao wa kawaida unaoelezwa na OSHA." },
          { objective: "O1", q: "Baada ya saa moja ya kuchapa mkono wako unawashwa na hali haiishi. Unafanya nini?", options: ["Kuchapa kwa nguvu zaidi ili kuupasha moto", "Kupuuza na kuendelea", "Kuacha na kuzungumza na daktari au muuguzi", "Kubadili na kuchapa kwa kidole kimoja"], answer: 2, why: "Maumivu, kuwashwa au ganzi isiyoisha ni ishara ya kuacha na kukaguliwa na mtaalamu wa afya." },
          { objective: "O2", q: "Kidole chako cha shahada cha kulia kinapumzika wapi?", options: ["Kwenye F", "Kwenye H", "Kwenye ;", "Kwenye J"], answer: 3, why: "Shahada ya kulia inapumzika kwenye J, kitufe chenye kivimbe." },
          { objective: "O2", q: "Unaendelea kuangalia mikono yako chini. Kipi kinasaidia zaidi?", options: ["Kuangalia vitufe kwa makini zaidi", "Kufunika mikono yako kwa kitambaa na kuchapa polepole", "Kuchapa kwa vidole viwili badala yake", "Kuzima skrini"], answer: 1, why: "Kufunika mikono kunakufanya utegemee kumbukumbu ya vidole, ndivyo kuchapa bila kuangalia kunavyojifunzwa." },
          { objective: "O4", q: "Fomu ya kazi inahitaji bei: $49.99. Unachapaje alama ya $?", options: ["Shikilia Shift na ubonyeze kitufe cha 4", "Bonyeza Caps Lock, kisha 4", "Bonyeza kitufe cha 4 mara mbili", "Shikilia Shift na ubonyeze kitufe cha S"], answer: 0, why: "$ ni alama ya Shift kwenye kitufe cha 4 katika safu ya namba ya kibodi ya Marekani." }
        ]
      }
    },
    {
      name: "Sura 2: Kasi, usahihi na mpango",
      lessons: [
        {
          title: "Kupima kasi na usahihi wako",
          objectives: ["O3"],
          minutes: 6,
          goal: "Hesabu maneno yako kwa dakika na usahihi wako kutoka jaribio la kuchapa la muda.",
          text: [
            "Kasi ya kuchapa inahesabiwa kwa maneno kwa dakika (WPM, words per minute). Kwa sababu maneno yana urefu tofauti, majaribio ya kuchapa yanahesabu kila herufi 5 (herufi, nafasi na alama za uakifishaji) kama neno moja. Kwa hiyo ukichapa herufi 200 kwa dakika moja, hiyo ni 200 gawanya kwa 5 = 40 WPM. Kwa jaribio refu zaidi, gawanya pia kwa dakika: herufi 450 kwa dakika 3 ni maneno 90 gawanya kwa 3 = 30 WPM.",
            "Usahihi unakuambia maneno yako mangapi yalikuwa sahihi. Usahihi = maneno sahihi gawanya kwa maneno yote uliyochapa, mara 100. Ukichapa maneno 50 na 4 yakawa na makosa, usahihi ni 46 gawanya kwa 50 = 92%. Baadhi ya majaribio pia yanatoa net WPM, inayopunguza kwa ajili ya makosa: makosa gawanya kwa dakika, yanatolewa kutoka kasi yako.",
            "Usahihi ni muhimu kuliko kasi. Mchapaji wa haraka anayefanya makosa mengi ni wa polepole kazini, kwa sababu kila kosa lazima litafutwe na kurekebishwa. Jenga usahihi kwanza, kisha kasi. Unaweza kujipima muda kwa saa ya simu na programu ya kuandika maandishi (programu nyingi zinaonyesha idadi ya herufi), au utumie tovuti ya bure ya mazoezi kama typing.com, inayokuonyesha kasi na usahihi."
          ],
          steps: ["Chagua aya ambayo hujaifanyia mazoezi, kutoka kitabu, habari au tangazo la kazi.", "Weka saa ya kupima muda kwa dakika 1 (au dakika 3 kwa alama thabiti zaidi).", "Chapa kwa kasi yako ya kawaida bila kusimama kurekebisha makosa.", "Hesabu herufi, pamoja na nafasi, au tumia idadi ya herufi ya programu.", "Kasi: herufi gawanya kwa 5, kisha gawanya kwa dakika.", "Usahihi: maneno sahihi gawanya kwa maneno uliyochapa, mara 100. Andika vyote viwili pamoja na tarehe."],
          words: [["WPM", "words per minute (maneno kwa dakika): maneno mangapi unachapa kwa dakika moja."], ["Neno la kipimo", "herufi 5, pamoja na nafasi na alama za uakifishaji, zinazohesabiwa kama neno moja katika majaribio ya kuchapa."], ["Usahihi", "asilimia ya ulichochapa iliyo sahihi."], ["Net WPM", "kasi yako baada ya kupunguza kwa ajili ya makosa."], ["Herufi (character)", "herufi yoyote, namba, nafasi au alama unayochapa."]],
          slides: [
            { title: "Maneno kwa dakika", bullets: ["Kila herufi 5 zinahesabiwa kama neno 1", "Herufi 200 kwa dakika 1 = 40 WPM", "Herufi 450 kwa dakika 3 = 30 WPM"] },
            { title: "Usahihi", bullets: ["Maneno sahihi gawanya kwa maneno uliyochapa, mara 100", "46 sahihi kati ya 50 = 92%", "Net WPM inapunguza kwa ajili ya makosa"] },
            { title: "Usahihi kwanza", bullets: ["Kila kosa linagharimu muda kulirekebisha", "Jenga usahihi, kisha kasi"] },
            { title: "Jinsi ya kujipima", bullets: ["Aya mpya na saa ya simu", "Au tovuti ya bure kama typing.com", "Andika alama na tarehe"] }
          ],
          sources: [{ name: "Typing.com (free typing lessons and tests)", url: "https://www.typing.com/" }],
          tryIt: "Fanya jaribio la dakika moja: weka saa, chapa aya mpya kutoka tangazo la kazi au habari, na usimame saa ikiisha. Hesabu herufi (au tumia idadi ya herufi), hesabu WPM yako, weka alama kwenye makosa yako, na hesabu usahihi wako. Andika namba zote mbili na tarehe ya leo juu ya ukurasa. Hii ndiyo alama yako ya kuanzia.",
          youCanNow: "kujipima muda, kuhesabu maneno yako kwa dakika na usahihi wako, na kuandika alama ya kuanzia.",
          quickCheck: [
            { objective: "O3", q: "Ulichapa herufi 250 kwa dakika moja. Kasi yako ni ipi?", options: ["25 WPM", "250 WPM", "100 WPM", "50 WPM"], answer: 3, why: "Herufi 250 gawanya kwa 5 ni maneno 50, kwa dakika moja: 50 WPM." },
            { objective: "O3", q: "Ulichapa maneno 40 na 2 yalikuwa na makosa. Usahihi wako ni upi?", options: ["80%", "98%", "95%", "38%"], answer: 2, why: "38 sahihi gawanya kwa 40 uliyochapa ni 0.95, yaani 95%." }
          ]
        },
        {
          title: "Njia za mkato na vitufe vya kuhariri vinavyookoa muda",
          objectives: ["O5"],
          minutes: 5,
          goal: "Tumia njia za mkato za kibodi kuchagua, kunakili, kubandika, kutendua na kuhifadhi bila kipanya.",
          text: [
            "Kila unaponyoosha mkono kwenda kwenye kipanya, mikono yako inaacha safu ya nyumbani. Njia za mkato za kibodi zinakuwezesha kuhariri bila kusimama. Kwenye Windows zinatumia kitufe cha Ctrl; kwenye Mac nyingi zinatumia kitufe cha Command badala yake.",
            "Tano za msingi: Ctrl+A inachagua yote, Ctrl+C inanakili, Ctrl+V inabandika, Ctrl+Z inatendua badiliko lako la mwisho, na Ctrl+S inahifadhi. Ctrl+X inakata (inaondoa na kunakili). Kufanya njia ya mkato, shikilia Ctrl, gonga herufi, kisha achilia vyote viwili.",
            "Vitufe vya kuhariri vinasaidia pia. Backspace inafuta upande wa kushoto wa kishale; Delete inaondoa upande wa kulia. Vitufe vya mishale vinasogeza kishale. Home na End vinaruka hadi mwanzo au mwisho wa mstari. Shikilia Shift pamoja na kitufe cha mshale kuchagua maandishi herufi moja kwa wakati. Katika programu nyingi, Ctrl pamoja na mshale wa kushoto au kulia inaruka neno zima. Rekebisha kosa unapoliona, lakini usisimame kuangalia nyuma kila herufi."
          ],
          steps: ["Shikilia Ctrl (Command kwenye Mac) kwa kidole kidogo cha kushoto.", "Gonga herufi: A chagua yote, C nakili, X kata, V bandika, Z tendua, S hifadhi.", "Achilia vitufe vyote viwili.", "Tumia Shift pamoja na vitufe vya mishale kuchagua sehemu ya mstari.", "Fanya mazoezi ya kila njia ya mkato mara tano ili iwe tabia."],
          words: [["Njia ya mkato (shortcut)", "mchanganyiko wa vitufe unaofanya kazi bila kipanya."], ["Ctrl", "kitufe cha Control kwenye kibodi ya Windows, kinachotumika kwa njia nyingi za mkato."], ["Kitufe cha Command", "kitufe chenye alama kwenye kibodi za Mac kinachofanya kile Ctrl inachofanya kwenye Windows."], ["Kishale (cursor)", "mstari unaopepesa unaoonyesha maandishi yako yataingia wapi."], ["Kutendua (undo)", "kurudisha badiliko la mwisho ulilofanya."]],
          slides: [
            { title: "Kwa nini njia za mkato", bullets: ["Mikono inabaki kwenye kibodi", "Safari chache kwenda kwenye kipanya", "Windows: Ctrl; Mac: kwa kawaida Command"] },
            { title: "Tano za msingi", bullets: ["Ctrl+A chagua yote, Ctrl+C nakili, Ctrl+V bandika", "Ctrl+Z tendua", "Ctrl+S hifadhi; Ctrl+X kata"] },
            { title: "Vitufe vya kuhariri", bullets: ["Backspace inafuta kushoto; Delete inafuta kulia", "Home na End vinaruka mwanzo au mwisho wa mstari", "Shift + mshale inachagua maandishi"] }
          ],
          tryIt: "Chapa mistari mitatu mifupi kuhusu kazi unayoitaka. Kisha, bila kugusa kipanya: chagua yote (Ctrl+A), nakili (Ctrl+C), nenda mwisho kwa End na vitufe vya mishale, bandika (Ctrl+V), tendua kubandika (Ctrl+Z), na uhifadhi faili (Ctrl+S). Kwenye Mac, tumia Command badala ya Ctrl. Fanya hivyo mara mbili.",
          youCanNow: "kuchagua, kunakili, kukata, kubandika, kutendua na kuhifadhi kwa kibodi na kusogea ndani ya mstari kwa vitufe vya kuhariri.",
          quickCheck: [
            { objective: "O5", q: "Umefuta aya kwa bahati mbaya sasa hivi. Njia ipi ya mkato inairudisha kwenye Windows?", options: ["Ctrl+Z", "Ctrl+S", "Ctrl+A", "Ctrl+P"], answer: 0, why: "Ctrl+Z inatendua badiliko la mwisho." },
            { objective: "O5", q: "Kwenye Mac, njia nyingi za mkato zinatumia kitufe gani badala ya Ctrl?", options: ["Shift", "Command", "Caps Lock", "Tab"], answer: 1, why: "Njia nyingi za mkato za Mac zinatumia kitufe cha Command pale Windows inapotumia Ctrl." }
          ]
        },
        {
          title: "Mpango wako wa mazoezi na jaribio la kuchapa la kazini",
          objectives: ["O6", "O3"],
          minutes: 6,
          goal: "Andika mpango wa mazoezi wa wiki nne wenye alama yako ya kuanzia, lengo, mazoezi ya kila siku na kumbukumbu.",
          text: [
            "Kuchapa kunaboreka kwa mazoezi mafupi ya kila siku, si vipindi virefu vya mwisho wa wiki. Dakika 10 hadi 15 kwa siku, siku nyingi, zinafaa kuliko saa moja mara moja kwa wiki, kwa sababu vidole vyako vinajenga tabia kwa kurudia. Weka macho yako kwenye skrini na mkao wako wa kawaida kila wakati.",
            "Kipindi kizuri cha kila siku kina sehemu nne: zoezi la dakika 2 la kupasha moto kwenye safu ya nyumbani, zoezi la vitufe vyako dhaifu zaidi (ulivyokosea zaidi katika jaribio lako), zoezi fupi la namba au njia za mkato, na maandishi halisi kama tangazo la kazi au habari. Mara moja kwa wiki, fanya jaribio la muda na uandike alama kwenye kumbukumbu yako. Weka lengo la usahihi kwanza, kisha kasi, na linganisha kila wiki na alama yako ya kuanzia.",
            "Baadhi ya waajiri wanatoa jaribio la kuchapa kabla ya kuajiri. Tangazo la kazi au ofisi ya kuajiri kwa kawaida inasema kinachopimwa na kasi wanayotaka; isiposema, uliza. Kabla ya jaribio: kaa katika mkao mzuri, pasha moto kwa dakika mbili, soma maelekezo, na chapa kwa utulivu bila kukimbilia. Usiilipe kamwe tovuti inayoahidi cheti cha kuchapa kama sharti la kupata kazi; mwajiri anatoa jaribio lake mwenyewe."
          ],
          steps: ["Andika WPM yako ya kuanzia, usahihi na tarehe kutoka Somo la 4.", "Weka lengo la wiki ya 4: usahihi kwanza, kisha kasi.", "Orodhesha vitufe vyako dhaifu zaidi kutoka jaribio lako.", "Panga kila siku: kupasha moto, zoezi la vitufe dhaifu, zoezi la namba au njia za mkato, maandishi halisi.", "Chagua siku moja kwa wiki kwa jaribio la muda na utengeneze jedwali la kumbukumbu: tarehe, WPM, usahihi, maelezo.", "Ongeza mpango wa siku ya jaribio: mkao, kupasha moto, kusoma maelekezo, kasi tulivu."],
          words: [["Mpango wa mazoezi", "ratiba iliyoandikwa ya utakachofanyia mazoezi, lini, na jinsi utakavyopima maendeleo."], ["Kumbukumbu (log)", "jedwali unaloandika alama zako kila wiki."], ["Vitufe dhaifu", "vitufe unavyokosea au kuchelewa zaidi mara nyingi."], ["Jaribio la kabla ya kuajiriwa", "jaribio ambalo mwajiri anatoa kukagua ujuzi kabla ya kuajiri."]],
          slides: [
            { title: "Mafupi na mara kwa mara", bullets: ["Dakika 10 hadi 15 kwa siku, siku nyingi", "Bora kuliko kipindi kimoja kirefu kwa wiki", "Macho kwenye skrini, mkao mzuri kila wakati"] },
            { title: "Kipindi cha kila siku", bullets: ["Kupasha moto kwenye safu ya nyumbani", "Zoezi la vitufe vyako dhaifu zaidi", "Namba au njia za mkato, kisha maandishi halisi"] },
            { title: "Fuatilia maendeleo", bullets: ["Jaribio la muda mara moja kwa wiki", "Kumbukumbu: tarehe, WPM, usahihi, maelezo", "Lengo la usahihi kwanza, kisha kasi"] },
            { title: "Jaribio la kuchapa la kazini", bullets: ["Tangazo la kazi au mwajiri anasema kinachopimwa", "Pasha moto, soma maelekezo, kasi tulivu", "Usilipe kamwe tovuti kwa cheti ili uajiriwe"] }
          ],
          sources: [{ name: "Typing.com (free typing lessons and tests)", url: "https://www.typing.com/" }],
          tryIt: "Kazi ya mwisho: andika mpango wako wa mazoezi wa wiki nne. Weka WPM na usahihi wako wa kuanzia kutoka Somo la 4 juu, weka lengo kwa kila kimoja, orodhesha vitufe vyako dhaifu zaidi, na uandike kipindi cha kila siku cha dakika 10 hadi 15 pamoja na tarehe. Ongeza jedwali la kumbukumbu lenye mistari minne ya majaribio ya kila wiki na mpango mfupi wa siku ya jaribio.",
          youCanNow: "kuandika na kufuata mpango wa kuchapa wa wiki nne wenye alama ya kuanzia, malengo, mazoezi ya kila siku na kumbukumbu ya kila wiki, na kujiandaa kwa jaribio la kuchapa la kazini.",
          quickCheck: [
            { objective: "O6", q: "Ratiba ipi ya mazoezi kwa kawaida inajenga ujuzi wa kuchapa vizuri zaidi?", options: ["Kipindi kimoja cha saa tatu kwa mwezi", "Kufanya mazoezi usiku wa kabla ya jaribio tu", "Dakika 10 hadi 15 siku nyingi", "Kufanya mazoezi unapojisikia tu"], answer: 2, why: "Mazoezi mafupi ya mara kwa mara yanajenga tabia za vidole kwa kurudia." },
            { objective: "O6", q: "Nini kinakaa juu ya mpango wako wa mazoezi?", options: ["Namba yako ya Social Security", "Orodha ya tovuti za kuchapa", "Wimbo unaoupenda", "WPM yako ya kuanzia, usahihi na tarehe"], answer: 3, why: "Alama ya kuanzia inakuwezesha kuweka lengo na kuona maendeleo yako kila wiki." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kasi, usahihi na mpango",
        questions: [
          { objective: "O3", q: "Katika jaribio la kuchapa, herufi ngapi zinahesabiwa kama neno moja?", options: ["1", "10", "5", "3"], answer: 2, why: "Majaribio ya kuchapa yanahesabu kila herufi 5, pamoja na nafasi, kama neno moja la kipimo." },
          { objective: "O3", q: "Ulichapa herufi 600 kwa dakika 3. Kasi yako ni ipi?", options: ["40 WPM", "120 WPM", "200 WPM", "60 WPM"], answer: 0, why: "600 gawanya kwa 5 ni maneno 120; 120 gawanya kwa dakika 3 ni 40 WPM." },
          { objective: "O5", q: "Njia ipi ya mkato inanakili maandishi uliyochagua kwenye Windows?", options: ["Ctrl+V", "Ctrl+C", "Ctrl+S", "Ctrl+Z"], answer: 1, why: "Ctrl+C inanakili; Ctrl+V inabandika." },
          { objective: "O5", q: "Unataka kuchagua hati nzima ili kubadilisha mtindo wa herufi. Unabonyeza nini?", options: ["Ctrl+X", "Home", "Backspace", "Ctrl+A"], answer: 3, why: "Ctrl+A inachagua maandishi yote." },
          { objective: "O6", q: "Jaribio lako linaonyesha unakosea P, Q na Z zaidi. Unaongeza nini kwenye mpango wako?", options: ["Zoezi la kila siku la P, Q na Z", "Hakuna; ruka herufi hizo", "Kuchapa haraka ili kuficha makosa", "Kufanya mazoezi ya safu ya nyumbani tu"], answer: 0, why: "Kufanya mazoezi ya vitufe vyako dhaifu zaidi ndiyo njia ya mpango kurekebisha makosa ambayo jaribio lako liligundua." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Ujuzi wa Kuchapa kwa Kibodi",
    questions: [
      { objective: "O1", q: "Katika mkao wa kawaida wa kuchapa, vifundo vya mikono yako viko:", options: ["Vimepinda juu sana", "Vimenyooka, sawa na mikono ya mbele", "Vimeegemea kwa nguvu kwenye ukingo wa meza", "Vimejisokota pembeni"], answer: 1, why: "Vifundo vya mikono vilivyonyooka sawa na mikono ya mbele vinapunguza mkazo." },
      { objective: "O1", q: "Miguu yako haifiki sakafuni kwenye kiti cha ofisi. Unaweza kufanya nini?", options: ["Kuiacha ining'inie", "Kukaa ukingoni mwa kiti", "Kukunja miguu kwa nguvu", "Kutumia boksi au kiegemeo cha miguu ili ikanyage sawa"], answer: 3, why: "Miguu inapaswa kukanyaga sawa na kuegemezwa; kiegemeo cha miguu au boksi kinafanya hivyo." },
      { objective: "O1", q: "Kwa nini uweke kibodi karibu nawe?", options: ["Ili viwiko vibaki karibu na mwili na usinyooshe mikono mbali", "Ili uone vitufe vizuri zaidi", "Ili skrini ionekane kubwa zaidi", "Ili uchape kwa mkono mmoja"], answer: 0, why: "Kibodi iliyo karibu inaweka viwiko karibu na mabega yamelegea." },
      { objective: "O2", q: "Kuchapa bila kuangalia (touch typing) ni nini?", options: ["Kuchapa kwenye skrini ya kugusa", "Kuchapa kwa kidole kimoja", "Kuchapa bila kuangalia vitufe, kwa vidole maalum kwa kila kitufe", "Kuchapa herufi kubwa tu"], answer: 2, why: "Kuchapa bila kuangalia kunatumia kidole kilekile kwa kila kitufe ili usihitaji kuangalia." },
      { objective: "O2", q: "Vitufe gani vinaunda safu ya nyumbani ya mkono wa kushoto?", options: ["A S D F", "Q W E R", "Z X C V", "J K L ;"], answer: 0, why: "Vidole vya kushoto vinapumzika kwenye A S D F; vya kulia kwenye J K L ;." },
      { objective: "O2", q: "Kidole chako cha shahada cha kushoto kinafika T. Kinafanya nini baadaye?", options: ["Kinabaki kwenye T", "Kinarudi kwenye F, kitufe chake cha nyumbani", "Kinahamia kwenye kitufe cha nafasi", "Kinahamia kwenye J"], answer: 1, why: "Baada ya kila kufika, kidole kinarudi kwenye kitufe chake cha nyumbani." },
      { objective: "O2", q: "Kidole gani kinabonyeza kitufe cha nafasi?", options: ["Kidole kidogo cha kushoto", "Kidole cha pete cha kulia", "Shahada ya kushoto", "Kidole gumba"], answer: 3, why: "Vidole gumba vinapumzika na kubonyeza kitufe cha nafasi." },
      { objective: "O4", q: "Kuchapa S kubwa (kitufe cha mkono wa kushoto), unashikilia:", options: ["Shift ya kushoto", "Caps Lock kwa sentensi nzima", "Shift ya kulia", "Kitufe cha Ctrl"], answer: 2, why: "Tumia Shift ya mkono ulio kinyume na herufi." },
      { objective: "O4", q: "Kibodi ya namba inachapa mishale badala ya namba. Unakagua nini?", options: ["Kwamba Num Lock imewashwa", "Kwamba Caps Lock imewashwa", "Kwamba skrini inang'aa", "Kwamba Ctrl imeshikiliwa"], answer: 0, why: "Num Lock inawasha namba za kibodi ya namba." },
      { objective: "O4", q: "Unaingiza namba ya simu ya mteja. Kwa nini uikague mara mbili?", options: ["Ili uchape haraka zaidi", "Tarakimu moja isiyo sahihi inafanya namba nzima kuwa si sahihi", "Namba hazihesabiwi kama makosa", "Ili skrini iihifadhi"], answer: 1, why: "Katika namba, tarakimu moja isiyo sahihi ni kosa halisi linaloweza kufika kwa mtu asiye sahihi." },
      { objective: "O3", q: "WPM inamaanisha nini?", options: ["Writing practice method", "Work per month", "Words printed per minute", "Words per minute (maneno kwa dakika)"], answer: 3, why: "WPM inamaanisha maneno kwa dakika, kipimo cha kawaida cha kasi ya kuchapa." },
      { objective: "O3", q: "Ulichapa herufi 300 kwa dakika 2. Kasi yako ni ipi?", options: ["60 WPM", "150 WPM", "30 WPM", "15 WPM"], answer: 2, why: "300 gawanya kwa 5 ni maneno 60; 60 gawanya kwa dakika 2 ni 30 WPM." },
      { objective: "O3", q: "Ulichapa maneno 60 na 6 yalikuwa na makosa. Usahihi wako ni:", options: ["90%", "94%", "54%", "10%"], answer: 0, why: "54 sahihi gawanya kwa 60 uliyochapa ni 0.90, yaani 90%." },
      { objective: "O3", q: "Unapaswa kujenga kipi kwanza?", options: ["Kasi, hata kwa makosa mengi", "Usahihi, kisha kasi", "Hakuna; mkao tu ndio muhimu", "Kasi kwenye kibodi ya namba tu"], answer: 1, why: "Kila kosa linachukua muda kulirekebisha, kwa hiyo usahihi kwanza unakufanya uwe haraka zaidi katika kazi halisi." },
      { objective: "O5", q: "Njia ipi ya mkato inahifadhi faili yako kwenye Windows?", options: ["Ctrl+A", "Ctrl+V", "Ctrl+X", "Ctrl+S"], answer: 3, why: "Ctrl+S inahifadhi." },
      { objective: "O5", q: "Kwa nini utumie njia za mkato za kibodi unapochapa?", options: ["Zinafanya maandishi kuwa makubwa zaidi", "Zinawasha Num Lock", "Mikono yako inabaki kwenye kibodi, kwa hiyo unafanya kazi haraka zaidi", "Zinakagua tahajia yako"], answer: 2, why: "Njia za mkato zinaepusha safari za kwenda kwenye kipanya na zinaweka mikono yako karibu na safu ya nyumbani." },
      { objective: "O5", q: "Kitufe gani kinaruka hadi mwisho wa mstari?", options: ["End", "Tab", "Caps Lock", "Shift"], answer: 0, why: "End inaruka hadi mwisho wa mstari; Home inaruka hadi mwanzo." },
      { objective: "O6", q: "Katika mpango wako wa wiki nne, unapaswa kufanya jaribio la muda mara ngapi?", options: ["Kila dakika chache", "Mara moja kwa wiki, ukiliandika kwenye kumbukumbu yako", "Kamwe; majaribio yanakuchelewesha", "Mara moja tu, mwishoni kabisa"], answer: 1, why: "Jaribio la kila wiki kwenye kumbukumbu linaonyesha maendeleo bila kuchukua muda wa mazoezi." },
      { objective: "O6", q: "Tovuti inasema lazima ulipie cheti chake cha kuchapa ili uajiriwe. Unafanya nini?", options: ["Kulipa mara moja", "Kuipa taarifa za benki yako ili ikushikie nafasi", "Kuwatumia marafiki kiungo ili walipe", "Kutolipa; waajiri wanatoa jaribio lao wenyewe"], answer: 3, why: "Waajiri wanapima kuchapa wenyewe; kulipa tovuti ili uajiriwe ni ishara ya hatari." },
      { objective: "O6", q: "Kipindi kipi cha kila siku kinafaa mpango mzuri wa mazoezi?", options: ["Saa moja ya safu ya nyumbani tu", "Kuchapa chochote bila kuangalia skrini", "Kupasha moto, zoezi la vitufe dhaifu, zoezi la namba au njia za mkato, kisha maandishi halisi", "Majaribio ya muda tu kila siku"], answer: 2, why: "Kipindi kifupi kinachopasha moto, kinachorekebisha vitufe dhaifu na kinachotumia maandishi halisi kinajenga ujuzi kwa uthabiti." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 3, 5, 7, 10, 12, 14, 17] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Alama ya kuanzia", objective: "O3", notYet: "Hakuna alama ya kuanzia, au WPM na usahihi vimehesabiwa vibaya.", meets: "WPM na usahihi wa kuanzia kutoka jaribio la muda, vimehesabiwa sahihi, pamoja na tarehe.", exceeds: "Pia inaonyesha hesabu (herufi, dakika, makosa) ili mtu mwingine aweze kuikagua." },
      { name: "Malengo na tarehe", objective: "O6", notYet: "Hakuna lengo, au hakuna tarehe za wiki nne.", meets: "Lengo la usahihi na la kasi, pamoja na tarehe za kila siku au wiki.", exceeds: "Lengo linawezekana kwa dakika 10 hadi 15 kwa siku na lina kituo cha ukaguzi katika wiki ya 2." },
      { name: "Mazoezi ya kila siku", objective: "O2", notYet: "Mazoezi ni \"chapa zaidi\" tu.", meets: "Kila kipindi kina kupasha moto kwenye safu ya nyumbani, zoezi la vitufe dhaifu vilivyotajwa na maandishi halisi.", exceeds: "Vitufe dhaifu vinabadilika wiki kwa wiki kulingana na kumbukumbu." },
      { name: "Namba na njia za mkato", objective: "O4", notYet: "Hakuna mazoezi ya namba, alama au njia za mkato katika mpango.", meets: "Mpango una mistari ya namba au kibodi ya namba na njia za mkato za msingi.", exceeds: "Mazoezi ya namba yanalingana na kazi lengwa, kama bei kwa biashara ya rejareja au namba za utambulisho kwa kuingiza data." },
      { name: "Kutumia njia za mkato", objective: "O5", notYet: "Anatumia kipanya kwa kila kunakili, kubandika, kutendua na kuhifadhi.", meets: "Anaweza kuonyesha kuchagua yote, kunakili, kubandika, kutendua na kuhifadhi kwa kibodi.", exceeds: "Pia anatumia Home, End na Shift pamoja na mishale kuhariri." },
      { name: "Mpangilio salama na siku ya jaribio", objective: "O1", notYet: "Hakuna ukaguzi wa mkao wala mpango wa siku ya jaribio.", meets: "Mpango unaanza kila kipindi kwa ukaguzi wa mpangilio wa vipengele sita na una mpango wa siku ya jaribio.", exceeds: "Una mapumziko yaliyopangwa na cha kufanya ikiwa kuchapa kunauma." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Mabadiliko ya WPM na usahihi kutoka alama ya kuanzia hadi jaribio la wiki ya 4",
      "Wanafunzi wanaoripoti kufaulu jaribio la kuchapa au la kuingiza data la mwajiri ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi wanaoomba au kuanza kazi ya ofisini, huduma kwa wateja au kuingiza data ndani ya siku 90"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta ya mezani au laptop yenye kibodi halisi (kibodi ya namba inasaidia lakini si lazima)",
      "Programu yoyote ya kuchapia: Notepad, TextEdit, Google Docs au Microsoft Word",
      "Saa ya simu au ya jikoni ya kupima muda, karatasi na kalamu kwa kumbukumbu",
      "Si lazima: tovuti ya bure ya mazoezi kama typing.com",
      "Kama dakika 45 kwa masomo na majaribio, pamoja na dakika 10 hadi 15 za mazoezi siku nyingi kwa wiki nne"
    ],
    facilitatorNotes: [
      "Anza na ukaguzi wa mpangilio wa vipengele sita katika kila kituo cha kazi; rekebisha viti na skrini kabla mtu yeyote hajachapa.",
      "Toa jaribio la awali na jaribio la muda la dakika moja siku ya kwanza ili kila mwanafunzi awe na alama ya kuanzia.",
      "Tarajia kasi kushuka kwa wiki moja au mbili wanafunzi wanapoacha kuchapa kwa kutafuta kitufe kimoja kimoja; waambie hii ni kawaida.",
      "Waruhusu wanafunzi wanaoendelea kuangalia chini wafunike mikono yao kwa kitambaa au karatasi.",
      "Fanyeni jaribio la muda la kikundi mara moja kwa wiki na wanafunzi wasasishe kumbukumbu zao wenyewe; sifu maendeleo ya usahihi, si kasi tu.",
      "Kwenye kompyuta za pamoja au za maktaba, wakumbushe wanafunzi wasihifadhi nywila na watoke (sign out) wanapomaliza."
    ]
  }
};
