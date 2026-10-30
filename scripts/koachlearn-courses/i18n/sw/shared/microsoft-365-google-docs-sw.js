"use strict";

// Koach Learn course (Swahili translation of shared/microsoft-365-google-docs.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.
// Button and menu names (Share, Comment, Resolve, File, Download, Heading 1, "Anyone with the link") stay in English, as they appear in the apps, with a Swahili explanation.

module.exports = {
  id: "microsoft-365-google-docs-sw",
  lang: "sw",
  translationOf: "microsoft-365-google-docs",
  category: "Seniors and Technology",
  name: "Misingi ya Microsoft 365 na Google Docs",
  skills: "Kutengeneza na kuhifadhi hati, Kupanga mwonekano wa maandishi, Kushiriki na kutoa maoni, Kutengeneza lahajedwali rahisi, Kujumlisha kwa fomula, Kupakua kama PDF",
  outcome: "kutengeneza hati nadhifu ya ukurasa mmoja na lahajedwali rahisi yenye jumla, kwa Google Docs na Sheets au Microsoft Word na Excel kwenye wavuti, kisha kuzishiriki kwa usalama na kuhifadhi nakala kama PDF.",
  about: [
    "Kazi nyingi, shule, makanisa, vikundi na familia sasa huandika na kushiriki hati mtandaoni. Njia mbili za bure zinazotumika zaidi ni Google Docs na Sheets (kwa akaunti ya Google) na Microsoft Word na Excel kwenye wavuti (kwa akaunti ya Microsoft). Majina ya vitufe yanatofautiana kidogo, lakini ujuzi ni ule ule.",
    "Katika Sura 1 utatengeneza hati, utaipanga vizuri na kuishiriki. Katika Sura 2 utatengeneza lahajedwali ndogo, utajumlisha safu wima kwa fomula, na utahifadhi kazi yako kama PDF ili kuituma au kuichapisha.",
    "Kila somo linachukua kama dakika tano. Acha app ikiwa wazi unaposoma ili ufanye kazi ya \"Jaribu sasa\" papo hapo. Kila sura inaishia na jaribio la maarifa, na kozi inaishia na mtihani wa maswali 20."
  ],
  finalTask: "Tengeneza tangazo au barua ya ukurasa mmoja (kwa mfano mnada wa vitu vya nyumbani, siku ya kujitolea, au barua kwa mwenye nyumba) yenye kichwa kilichokolezwa, orodha ya vitone na mstari wa mawasiliano yako, na lahajedwali ndogo inayoorodhesha gharama angalau tano na kuzijumlisha kwa fomula ya SUM. Shiriki hati na mtu mmoja kama \"view only\" (kusoma tu), na upakue faili zote mbili kama PDF.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima wanaohitaji hati za ofisi za kila siku: wazee, wanaotafuta kazi, wanaojitolea, watu wanaorudi kazini, wanachama wa mashirika madogo yasiyo ya faida na vikundi vya jamii, na vijana wanaoanza shule au kazi.",
    startingPoint: "Wanaweza kutumia kipanya (mouse) au skrini ya kugusa, kufungua kivinjari cha wavuti na kuandika. Wengi wana akaunti ya barua pepe lakini hawajawahi kutengeneza hati au lahajedwali mtandaoni, kushiriki faili, au kuhifadhi PDF.",
    gap: "Barua, matangazo, bajeti, orodha za kujiandikisha na fomu za kazi sasa hutengenezwa na kutumwa kama faili za mtandaoni, na ofisi mara nyingi huomba PDF. Bila ujuzi huu watu hutegemea wengine, hulipia msaada wa kuchapisha, au hushiriki faili zenye taarifa binafsi kwa watu wengi kupita kiasi.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; maneno kama seli, fomula na PDF yanaelezwa",
      "Vifaa: kompyuta au tableti yenye kivinjari cha wavuti ni bora; simu inawezekana lakini ni ngumu zaidi",
      "Akaunti: inahitajika akaunti ya bure ya Google au Microsoft; hakuna mpango wa kulipia",
      "Muda: masomo ya dakika 4 hadi 6, kama dakika 60 kwa jumla",
      "Faragha: faili zenye anwani, namba za vitambulisho au taarifa za afya hazishirikiwi kamwe kwa \"Anyone with the link\""
    ],
    prerequisites: "Hakuna, lakini kozi za Ujuzi wa Msingi wa Kompyuta au Misingi ya Intaneti zinawasaidia wanafunzi wapya kwa kipanya na kivinjari."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukitumia Google Docs au Word kwenye wavuti", action: "kufungua hati mpya tupu, kuipa jina lililo wazi na kusema imehifadhiwa wapi", standard: "kwa jina linalosema faili ni nini na kutaja hifadhi sahihi ya mtandaoni (Google Drive au OneDrive)" },
    { id: "O2", condition: "Ukipewa ukurasa wa maandishi ya kawaida", action: "kupanga kichwa, orodha ya vitone na maandishi ya kawaida ili ukurasa usomeke kwa urahisi", standard: "kichwa kikiwa Heading 1, pamoja na orodha ya vitone na neno moja lililokolezwa" },
    { id: "O3", condition: "Ukipewa hati na mtu anayehitaji kuiona", action: "kushiriki hati kwa kiwango cha chini kabisa cha ruhusa anachohitaji mtu huyo na kuacha maoni", standard: "ukichagua kiwango sahihi kila mara na bila kutumia kamwe \"Anyone with the link\" kwa taarifa binafsi" },
    { id: "O4", condition: "Ukitumia Google Sheets au Excel kwenye wavuti", action: "kutengeneza lahajedwali yenye vichwa katika mstari 1 na mistari mitano ya data", standard: "kitu kimoja kwa kila mstari na namba zimeandikwa bila maneno" },
    { id: "O5", condition: "Ukipewa safu wima ya namba katika lahajedwali", action: "kuandika fomula ya SUM inayojumlisha safu wima na kujisasisha yenyewe", standard: "kwa jumla sahihi inayobadilika namba moja ikibadilishwa" },
    { id: "O6", condition: "Ukipewa hati au lahajedwali iliyokamilika", action: "kuipakua kama PDF na kuichapisha baada ya kukagua onyesho la kuchapisha", standard: "PDF ikipatikana katika folda ya Downloads na hakuna kilichokatika katika onyesho" }
  ],
  chapters: [
    {
      name: "Sura 1: Kuandika na kushiriki hati",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kufungua Google Docs au Word kwenye wavuti",
          minutes: 5,
          goal: "Fungua hati mpya tupu, ipe jina na ujue imehifadhiwa wapi.",
          text: [
            "Google Docs ni bure ukiwa na akaunti ya Google (akaunti ile ile ya Gmail). Nenda docs.google.com na uchague Blank document (hati tupu). Microsoft Word kwenye wavuti ni bure ukiwa na akaunti ya Microsoft (akaunti ile ile ya Outlook.com). Nenda microsoft365.com, chagua Word, kisha Blank document.",
            "Zote mbili huhifadhi kazi yako zenyewe unapoandika. Google huiweka katika Google Drive; Microsoft huiweka katika OneDrive. Zote ni hifadhi ya mtandaoni, inayoitwa pia wingu (cloud), kwa hiyo unaweza kufungua faili tena kutoka kompyuta au simu yoyote baada ya kuingia (sign in).",
            "Ipe kila faili jina lililo wazi juu upande wa kushoto, kama \"Tangazo la Siku ya Kujitolea - Mei\". Majina yaliyo wazi hufanya faili zipatikane kwa urahisi baadaye."
          ],
          steps: ["Nenda docs.google.com (Google) au microsoft365.com (Microsoft) na uingie (sign in).", "Chagua hati tupu (Blank document).", "Bofya jina lililo juu upande wa kushoto na uandike jina la faili lililo wazi.", "Andika sentensi moja na uangalie ujumbe wa kuhifadhiwa (Saved) karibu na juu."],
          words: [["Wingu (cloud)", "hifadhi kwenye intaneti, ili ufikie faili zako kutoka kifaa chochote baada ya kuingia."], ["Google Drive / OneDrive", "hifadhi ya mtandaoni ya Google na ya Microsoft, ambapo faili zako zinawekwa."], ["Akaunti", "jina lako la kuingia na nywila kwa huduma fulani."]],
          sources: [{ name: "Microsoft: Word, Excel na PowerPoint za bure kwenye wavuti", url: "https://www.microsoft.com/en-us/microsoft-365/free-office-online-for-the-web" }, { name: "Google Docs", url: "https://docs.google.com" }],
          slides: [
            { title: "Njia mbili za bure", bullets: ["Google Docs: docs.google.com kwa akaunti ya Google", "Word kwenye wavuti: microsoft365.com kwa akaunti ya Microsoft"] },
            { title: "Inahifadhi yenyewe", bullets: ["Google inahifadhi katika Google Drive", "Microsoft inahifadhi katika OneDrive", "Ifungue tena kutoka kifaa chochote baada ya kuingia"] },
            { title: "Ipe kila faili jina", bullets: ["Bofya jina lililo juu upande wa kushoto", "Tumia majina yaliyo wazi: \"Tangazo la Siku ya Kujitolea - Mei\""] }
          ],
          tryIt: "Fungua hati tupu katika Google Docs au Word kwenye wavuti. Iite \"Hati Yangu ya Mazoezi\" na uandike sentensi moja kuhusu wiki yako.",
          youCanNow: "kufungua hati mpya, kuipa jina na kujua kwamba inahifadhiwa kwenye wingu yenyewe.",
          quickCheck: [
            { objective: "O1", q: "Wingu (cloud) ni nini?", options: ["Hifadhi ya mtandaoni unayoweza kufikia kutoka kifaa chochote baada ya kuingia", "Folda iliyoko kwenye kompyuta moja tu", "Aina ya printa", "App ya kulipia unayopaswa kununua"], answer: 0, why: "Google Drive na OneDrive ni hifadhi ya mtandaoni, inayoitwa pia wingu." },
            { objective: "O1", q: "Uliandika barua katika Google Docs na unataka kuipata tena wiki ijayo. Ufanye nini sasa?", options: ["Iache na jina \"Untitled document\"", "Ichapishe ili usiipoteze", "Bofya jina lililo juu upande wa kushoto na uandike jina wazi kama \"Barua kwa Mwenye Nyumba - Juni\"", "Inakili kwenye barua pepe kwako mwenyewe"], answer: 2, why: "Jina la faili lililo wazi hufanya hati ipatikane kwa urahisi baadaye." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kufanya hati ionekane nadhifu",
          minutes: 5,
          goal: "Panga kichwa, orodha na maandishi ya kawaida ili ukurasa usomeke kwa urahisi.",
          text: [
            "Kupanga mwonekano (formatting) ni kubadilisha jinsi maandishi yanavyoonekana. Kwanza chagua maandishi: bonyeza kitufe cha kipanya na ukiburute juu yake, au bofya neno mara mbili. Kisha tumia upau wa zana (toolbar) ulio juu: B kwa herufi zilizokolezwa (bold), I kwa herufi za mlalo (italic), kisanduku cha ukubwa kufanya maandishi kuwa makubwa, na vitufe vya orodha kwa vitone au namba.",
            "Tumia mtindo wa Heading kwa vichwa. Katika upau wa zana tafuta kisanduku kinachosema \"Normal text\" (Google) au \"Normal\" (Word) na uchague Heading 1. Vichwa vinaonekana nadhifu na vinasaidia programu za kusoma skrini kwa sauti (screen readers).",
            "Fanya iwe rahisi: fonti moja inayosomeka kwa urahisi, ukubwa 11 hadi 14 kwa maandishi ya kawaida, kichwa kilichokolezwa, aya fupi na orodha za vitone. Ukikosea, bonyeza Ctrl+Z (Command+Z kwenye Mac) kutendua."
          ],
          steps: ["Chagua maandishi unayotaka kubadilisha.", "Chagua Heading 1 kwa kichwa.", "Chagua mistari michache na ubofye kitufe cha orodha ya vitone.", "Tumia B kukoleza neno muhimu.", "Bonyeza Ctrl+Z (Command+Z kwenye Mac) kutendua kosa."],
          words: [["Kupanga mwonekano (formatting)", "kubadilisha jinsi maandishi yanavyoonekana: ukubwa, kukoleza, orodha, vichwa."], ["Kuchagua (select)", "kuweka alama kwenye maandishi kwa kuburuta juu yake ili uweze kuyabadilisha."], ["Upau wa zana (toolbar)", "mstari wa vitufe ulio juu ya app."]],
          slides: [
            { title: "Chagua, kisha badilisha", bullets: ["Buruta juu ya maandishi au bofya neno mara mbili", "Kisha tumia upau wa zana"] },
            { title: "Misingi ya upau wa zana", bullets: ["B = kukoleza (bold), I = mlalo (italic)", "Kisanduku cha ukubwa hufanya maandishi makubwa au madogo", "Vitufe vya orodha hutengeneza vitone au namba"] },
            { title: "Tumia vichwa (headings) kwa vichwa vya habari", bullets: ["Badilisha \"Normal text\" kuwa Heading 1", "Nadhifu, na husaidia programu za kusoma skrini"] },
            { title: "Fanya iwe rahisi", bullets: ["Fonti moja, ukubwa 11 hadi 14", "Aya fupi na vitone", "Ctrl+Z (Command+Z kwenye Mac) hutendua kosa"] }
          ],
          tryIt: "Katika hati yako ya mazoezi, andika kichwa na vitu vitatu, kama vitu vitatu vya kubeba kwenye pikniki ya familia. Fanya kichwa kiwe Heading 1, fanya vitu viwe orodha ya vitone, na ukoleze neno moja.",
          youCanNow: "kupanga ukurasa wenye kichwa, orodha ya vitone na maandishi yaliyokolezwa.",
          quickCheck: [
            { objective: "O2", q: "Somo linapendekeza ukubwa gani wa maandishi kwa maandishi ya kawaida?", options: ["6 hadi 8", "20 hadi 24", "30 au zaidi", "11 hadi 14"], answer: 3, why: "Ukubwa 11 hadi 14 unasomeka kwa urahisi kwa maandishi ya kawaida." },
            { objective: "O2", q: "Unataka mistari mitatu iwe orodha ya vitone. Ufanye nini kwanza?", options: ["Kubonyeza Ctrl+Z", "Kuchagua mistari hiyo mitatu", "Kubadilisha fonti ya ukurasa mzima", "Kubofya Share"], answer: 1, why: "Kwanza unachagua maandishi, kisha unachagua kitufe cha orodha ya vitone." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kushiriki kwa usalama na kutumia maoni",
          minutes: 5,
          goal: "Shiriki hati na mtu mmoja kwa kiwango sahihi cha ruhusa na uache maoni.",
          text: [
            "App zote mbili zina kitufe cha Share (shiriki) juu upande wa kulia. Andika anwani ya barua pepe ya mtu huyo na uchague anachoweza kufanya: View (kusoma tu), Comment (kupendekeza), au Edit (kubadilisha faili). Mpe kiwango cha chini kabisa anachohitaji.",
            "Kuwa mwangalifu na \"Anyone with the link\" (yeyote mwenye kiungo). Mtu yeyote anayepata kiungo, hata kwa kutumiwa na mtu mwingine, anaweza kufungua faili. Usiitumie kwa faili zenye taarifa binafsi kama anwani, namba za vitambulisho au taarifa za afya.",
            "Maoni (comments) huwaruhusu watu kutoa mawazo yao bila kubadilisha maneno yako. Chagua maandishi fulani, kisha chagua kitufe cha maoni (kiputo cha maneno) au bofya kulia na uchague Comment. Tatizo likishatatuliwa, chagua Resolve (maliza)."
          ],
          steps: ["Bofya Share juu upande wa kulia.", "Andika anwani ya barua pepe ya mtu huyo.", "Chagua View, Comment au Edit; chagua kiwango cha chini kabisa anachohitaji.", "Tuma (Send).", "Kuacha maoni: chagua maandishi, chagua Comment, andika, kisha uyatume."],
          words: [["Kushiriki (share)", "kumruhusu mtu mwingine kufungua faili yako."], ["Kiwango cha ruhusa", "kile mtu anachoweza kufanya na faili yako: kusoma, kutoa maoni au kubadilisha."], ["Maoni (comment)", "ujumbe mfupi pembeni mwa faili ambao haubadilishi maandishi."]],
          slides: [
            { title: "Kitufe cha Share, juu kulia", bullets: ["Andika barua pepe yake", "Chagua View, Comment au Edit", "Mpe kiwango cha chini kabisa anachohitaji"] },
            { title: "Kuwa mwangalifu na \"Anyone with the link\"", bullets: ["Yeyote anayepata kiungo anaweza kuifungua", "Kamwe usiitumie kwa taarifa binafsi"] },
            { title: "Maoni (comments)", bullets: ["Mawazo bila kubadilisha maneno yako", "Chagua maandishi, chagua Comment", "Chagua Resolve tatizo likitatuliwa"] }
          ],
          tryIt: "Shiriki hati yako ya mazoezi na rafiki au mwanafamilia kama View (kusoma tu). Kisha ongeza maoni kwenye kichwa chako yanayosema \"Je, kichwa hiki kiko wazi?\"",
          youCanNow: "kushiriki hati kwa kiwango sahihi cha ruhusa na kutumia maoni kupata mawazo ya wengine.",
          quickCheck: [
            { objective: "O3", q: "Kiwango gani cha ruhusa kinamruhusu mtu kubadilisha maneno katika faili yako?", options: ["View (kusoma tu)", "Comment (maoni)", "Edit (kubadilisha)", "Download (kupakua)"], answer: 2, why: "Edit inamruhusu mtu kubadilisha faili; View na Comment haziruhusu." },
            { objective: "O3", q: "Rafiki amerekebisha tatizo ulilotaja katika maoni. Ufanye nini na maoni hayo?", options: ["Kuchagua Resolve", "Kufuta hati nzima", "Kushiriki faili kwa Anyone with the link", "Kuacha maoni mapya kwenye kila mstari"], answer: 0, why: "Resolve hufunga maoni pale tatizo linapotatuliwa." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kuandika na kushiriki hati",
        questions: [
          { objective: "O1", q: "Google Docs huhifadhi kazi yako wapi?", options: ["Kwenye flash (USB) tu", "Haihifadhi", "Katika Google Drive, mtandaoni", "Kwenye printa"], answer: 2, why: "Google Docs huhifadhi katika Google Drive yenyewe." },
          { objective: "O1", q: "Jina lipi la faili ni bora?", options: ["\"Untitled document\"", "\"asdf\"", "\"doc1\"", "\"Tangazo la Siku ya Kujitolea - Mei\""], answer: 3, why: "Jina lililo wazi hufanya faili ipatikane kwa urahisi baadaye." },
          { objective: "O2", q: "Kabla ya kukoleza maandishi, kwanza wewe:", options: ["Unafunga app", "Unachapisha ukurasa", "Unachagua maandishi", "Unashiriki faili"], answer: 2, why: "Unachagua maandishi, kisha unayabadilisha kwa upau wa zana." },
          { objective: "O3", q: "Jirani yako anahitaji tu kusoma tangazo lako. Unampa kiwango gani cha ruhusa?", options: ["Edit", "Owner (mmiliki)", "View (kusoma tu)", "Anyone with the link"], answer: 2, why: "Mpe mtu kiwango cha chini kabisa anachohitaji." },
          { objective: "O3", q: "Hati ina anwani ya nyumba yako na namba ya simu. Ni chaguo gani la kushiriki unapaswa kuepuka?", options: ["Kushiriki na mtu mmoja kwa barua pepe", "View (kusoma tu)", "Comment tu", "Anyone with the link"], answer: 3, why: "Yeyote anayepata kiungo anaweza kufungua faili yenye taarifa binafsi." }
        ]
      }
    },
    {
      name: "Sura 2: Lahajedwali na kumalizia",
      lessons: [
        {
          objectives: ["O4"],
          title: "Lahajedwali yako ya kwanza",
          minutes: 5,
          goal: "Tengeneza lahajedwali yenye vichwa na mistari mitano ya data.",
          text: [
            "Lahajedwali (spreadsheet) ni gridi ya visanduku kwa orodha na namba. Ya Google ni Sheets (sheets.google.com); ya Microsoft ni Excel (chagua Excel kwenye microsoft365.com). Ni nzuri sana kwa bajeti, orodha za kujiandikisha, ratiba na orodha za mali.",
            "Safu wima (columns) zinaenda juu na chini na zina herufi (A, B, C). Mistari (rows) inaenda kutoka kushoto kwenda kulia na ina namba (1, 2, 3). Kila kisanduku ni seli (cell), inayoitwa kwa safu wima na mstari wake, kwa hiyo B2 ni safu wima B, mstari 2.",
            "Weka vichwa katika mstari 1, kama \"Kitu\" katika A1 na \"Gharama\" katika B1. Kisha andika kitu kimoja kwa kila mstari chini yake. Andika namba bila maneno (12.50, si \"dola 12.50\") ili lahajedwali iweze kufanya hesabu nazo."
          ],
          steps: ["Fungua Google Sheets au Excel kwenye wavuti na uchague lahajedwali tupu.", "Ipe faili jina.", "Andika vichwa katika mstari 1 (A1: Kitu, B1: Gharama).", "Andika vitu vitano katika safu wima A na gharama zake katika safu wima B.", "Koleza mstari 1."],
          words: [["Lahajedwali (spreadsheet)", "gridi ya seli kwa orodha na namba, kama Google Sheets au Excel."], ["Seli (cell)", "kisanduku kimoja katika lahajedwali, kinachoitwa kwa herufi ya safu wima na namba ya mstari, kama B2."], ["Safu wima / mstari", "safu wima zinaenda juu na chini (herufi); mistari inaenda kushoto kwenda kulia (namba)."]],
          slides: [
            { title: "Lahajedwali ni ya nini", bullets: ["Bajeti na gharama", "Orodha za kujiandikisha na ratiba", "Orodha za mali"] },
            { title: "Safu wima, mistari, seli", bullets: ["Safu wima: herufi A, B, C", "Mistari: namba 1, 2, 3", "Seli B2 = safu wima B, mstari 2"] },
            { title: "Iandae", bullets: ["Vichwa katika mstari 1", "Kitu kimoja kwa kila mstari", "Namba bila maneno: 12.50"] }
          ],
          tryIt: "Tengeneza lahajedwali iitwayo \"Bajeti ya Mazoezi\". Weka Kitu na Gharama katika mstari 1, kisha gharama tano halisi za wiki moja au za tukio, kama vyakula, nauli ya basi au mapambo.",
          youCanNow: "kuandaa lahajedwali yenye vichwa na mistari ya data.",
          quickCheck: [
            { objective: "O4", q: "Katika lahajedwali, seli ni nini?", options: ["Ukurasa mzima wa data", "Kisanduku kimoja, kinachoitwa kwa safu wima na mstari wake", "Fomula inayojumlisha namba", "Jina la faili lililo juu"], answer: 1, why: "Kila kisanduku ni seli, kama B2 kwa safu wima B, mstari 2." },
            { objective: "O4", q: "Unatengeneza orodha ya kujiandikisha. Ungeandika wapi vichwa \"Jina\" na \"Simu\"?", options: ["Chini kabisa ya karatasi", "Katika jina la faili", "Vyote katika seli moja", "Katika mstari 1, kichwa kimoja kwa kila safu wima"], answer: 3, why: "Vichwa vinaenda katika mstari 1, na kitu kimoja kwa kila mstari chini yake." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kujumlisha kwa fomula",
          minutes: 5,
          goal: "Tumia SUM kujumlisha safu wima ili jumla ijisasishe yenyewe.",
          text: [
            "Fomula inaiambia lahajedwali ifanye hesabu. Kila fomula inaanza na alama ya sawa (=). Kujumlisha seli B2 hadi B6, bofya seli tupu chini yake na uandike =SUM(B2:B6), kisha ubonyeze Enter.",
            "Nukta mbili (:) zinamaanisha \"hadi\", kwa hiyo B2:B6 ni B2, B3, B4, B5 na B6. Ukibadilisha namba, jumla inabadilika yenyewe. Hiyo ndiyo faida kubwa kuliko kikokotoo.",
            "Fomula nyingine rahisi: =AVERAGE(B2:B6) inatoa wastani, na =B2*2 inazidisha seli moja mara mbili. Ukiona kosa kama #NAME?, kagua tahajia na alama ya sawa."
          ],
          steps: ["Bofya seli tupu chini ya namba zako.", "Andika =SUM(B2:B6) ukitumia seli zako mwenyewe.", "Bonyeza Enter.", "Badilisha namba moja na uone jumla ikijisasisha.", "Andika neno Jumla katika seli iliyo kushoto kwake."],
          words: [["Fomula", "agizo linaloanza na = na linaiambia lahajedwali ifanye hesabu."], ["SUM", "fomula inayojumlisha kundi la seli."], ["Masafa (range)", "kundi la seli, linaloandikwa kama B2:B6 (B2 hadi B6)."]],
          slides: [
            { title: "Fomula zinaanza na =", bullets: ["=SUM(B2:B6) inajumlisha B2 hadi B6", "Bonyeza Enter kuona jibu"] },
            { title: "Inajisasisha yenyewe", bullets: ["Badilisha namba", "Jumla nayo inabadilika"] },
            { title: "Fomula nyingine rahisi", bullets: ["=AVERAGE(B2:B6) inatoa wastani", "=B2*2 inazidisha seli moja mara mbili", "#NAME? inamaanisha kagua tahajia"] }
          ],
          tryIt: "Katika Bajeti yako ya Mazoezi, andika Jumla katika A7 na =SUM(B2:B6) katika B7. Kisha badilisha gharama moja na uhakikishe jumla inabadilika.",
          youCanNow: "kujumlisha safu wima kwa SUM na kujua kwamba jumla inajisasisha namba zikibadilika.",
          quickCheck: [
            { objective: "O5", q: "Faida kubwa ya fomula ya SUM kuliko kujumlisha kwa kikokotoo ni ipi?", options: ["Jumla inajisasisha yenyewe namba ikibadilika", "Inakoleza namba", "Inageuza karatasi kuwa PDF", "Inashiriki faili na wengine"], answer: 0, why: "Fomula inahesabu upya kila namba katika masafa yake inapobadilika." },
            { objective: "O5", q: "Gharama zako ziko katika B2 hadi B8. Ungeandika nini katika B9 kuzijumlisha?", options: ["SUM B2 B8", "=B2+B8", "=SUM(B2:B8)", "=AVERAGE(B2:B8)"], answer: 2, why: "=SUM(B2:B8) inajumlisha B2 hadi B8; =B2+B8 inajumlisha seli mbili tu." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kuhifadhi kama PDF na kuchapisha",
          minutes: 4,
          goal: "Pakua hati au lahajedwali kama PDF na uichapishe.",
          text: [
            "PDF ni faili inayoonekana sawa kwenye kila simu na kompyuta, na watu hawawezi kuibadilisha kwa urahisi. Maombi mengi ya kazi, ofisi na shule huomba PDF.",
            "Katika Google Docs au Sheets: fungua menyu ya File, chagua Download, kisha PDF. Katika Word au Excel kwenye wavuti: fungua menyu ya File na utafute Save as au Download, kisha uchague PDF. Faili inaenda katika folda yako ya Downloads (vilivyopakuliwa).",
            "Kuchapisha, fungua menyu ya File na uchague Print, au bonyeza Ctrl+P (Command+P kwenye Mac). Kagua onyesho (preview) kwanza ili hakuna kitu kinachokatika. Ukiwa maktaba, waulize wafanyakazi jinsi kuchapisha kunavyolipiwa."
          ],
          steps: ["Fungua menyu ya File.", "Chagua Download (Google) au Save as / Download (Microsoft).", "Chagua PDF.", "Tafuta faili katika folda yako ya Downloads.", "Kuchapisha: Ctrl+P (Command+P kwenye Mac), kagua onyesho, kisha chapisha."],
          words: [["PDF", "aina ya faili inayoonekana sawa kila mahali na ni ngumu kubadilisha."], ["Folda ya Downloads", "mahali kwenye kompyuta ambapo faili zilizopakuliwa zinaenda."]],
          slides: [
            { title: "Kwa nini PDF?", bullets: ["Inaonekana sawa kila mahali", "Ni ngumu kubadilishwa kwa bahati mbaya", "Mara nyingi huombwa na kazi na ofisi"] },
            { title: "Tengeneza PDF", bullets: ["Menyu ya File, kisha Download (Google)", "Menyu ya File, kisha Save as au Download (Microsoft)", "Chagua PDF; angalia katika Downloads"] },
            { title: "Ichapishe", bullets: ["Ctrl+P (Command+P kwenye Mac)", "Kagua onyesho kwanza"] }
          ],
          tryIt: "Kazi ya mwisho: tengeneza tangazo au barua ya ukurasa mmoja yenye kichwa, orodha ya vitone na mstari wa mawasiliano, pamoja na lahajedwali ya gharama tano yenye jumla ya SUM. Shiriki hati kama View (kusoma tu), kisha upakue zote mbili kama PDF.",
          youCanNow: "kumaliza hati na lahajedwali, kuzishiriki kwa usalama na kuzihifadhi kama PDF.",
          quickCheck: [
            { objective: "O6", q: "PDF iliyopakuliwa kwa kawaida inaenda wapi?", options: ["Katika sanduku lako la barua pepe", "Katika pipa la taka", "Kwenye wingu tu", "Katika folda yako ya Downloads"], answer: 3, why: "Faili zilizopakuliwa zinaenda katika folda ya Downloads kwenye kifaa chako." },
            { objective: "O6", q: "Unakaribia kuchapisha tangazo maktaba. Ufanye nini kwanza?", options: ["Kuchapisha nakala kumi mara moja", "Kukagua onyesho la kuchapisha ili hakuna kinachokatika", "Kufuta faili", "Kubadilisha faili kuwa lahajedwali"], answer: 1, why: "Onyesho linaonyesha kama kuna kinachokatika kabla hujalipia kuchapisha." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Lahajedwali na kumalizia",
        questions: [
          { objective: "O4", q: "Seli C4 ni nini?", options: ["Mstari C, safu wima 4", "Fomula", "Faili ya nne", "Safu wima C, mstari 4"], answer: 3, why: "Seli zinaitwa kwa herufi ya safu wima, kisha namba ya mstari." },
          { objective: "O4", q: "Unapaswa kuandikaje gharama ya dola kumi na mbili na senti hamsini?", options: ["\"kumi na mbili hamsini\"", "\"dola 12.50\"", "12.50", "\"kama 12\""], answer: 2, why: "Namba bila maneno zinaiwezesha lahajedwali kufanya hesabu." },
          { objective: "O5", q: "Fomula ipi inajumlisha seli B2 hadi B6?", options: ["add(B2-B6)", "SUM B2 B6", "=SUM(B2:B6)", "B2+B6"], answer: 2, why: "Fomula zinaanza na =, na B2:B6 inamaanisha B2 hadi B6." },
          { objective: "O5", q: "Unabadilisha gharama moja katika bajeti yako. Nini kinatokea kwa jumla ya SUM?", options: ["Hakuna kitu", "Inageuka kuwa kosa", "Lazima uiandike upya", "Inajisasisha yenyewe"], answer: 3, why: "Fomula zinahesabu upya namba zinapobadilika." },
          { objective: "O6", q: "Ofisi inaomba barua yako kama faili inayoonekana sawa kila mahali. Unatuma:", options: ["Picha ya skrini ya simu yako (screenshot)", "Picha ya skrini uliyopiga kwa kamera", "Kiungo kwa yeyote", "PDF"], answer: 3, why: "PDF inaonekana sawa kwenye kila kifaa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Misingi ya Microsoft 365 na Google Docs",
    questions: [
      { objective: "O1", q: "Unahitaji nini kutumia Google Docs bure?", options: ["Akaunti ya Google", "Leseni ya kulipia", "Printa", "Akaunti ya Microsoft"], answer: 0, why: "Google Docs ni bure ukiwa na akaunti ya Google." },
      { objective: "O1", q: "Word kwenye wavuti huhifadhi faili zako wapi?", options: ["Google Drive", "Diski ya floppy", "OneDrive", "Haihifadhi popote"], answer: 2, why: "Microsoft huhifadhi katika OneDrive." },
      { objective: "O1", q: "Wingu (cloud) linamaanisha:", options: ["Hali ya hewa", "Virusi", "Aina ya printa", "Hifadhi kwenye intaneti unayoweza kufikia kutoka kifaa chochote"], answer: 3, why: "Hifadhi ya wingu inakuwezesha kufungua faili popote baada ya kuingia." },
      { objective: "O1", q: "Unabadilisha jina la Google Doc wapi?", options: ["Bofya jina lililo juu upande wa kushoto", "Washa upya kompyuta", "Ichapishe kwanza", "Ijitumie kwa barua pepe"], answer: 0, why: "Jina la faili liko juu upande wa kushoto." },
      { objective: "O2", q: "Kubadilisha jinsi neno linavyoonekana, kwanza wewe:", options: ["Unashiriki faili", "Unapakua PDF", "Unachagua neno", "Unafunga kichupo"], answer: 2, why: "Chagua kwanza, kisha panga mwonekano." },
      { objective: "O2", q: "Njia ipi ni bora ya kutengeneza kichwa?", options: ["Kukiandika kwa herufi kubwa zote na nafasi", "Kukiweka chini kabisa", "Kukifanya kidogo sana", "Kuchagua mtindo wa Heading 1"], answer: 3, why: "Mitindo ya Heading inaonekana nadhifu na inasaidia programu za kusoma skrini." },
      { objective: "O2", q: "Ulikosea katika kupanga mwonekano. Nini kinatendua kosa hilo?", options: ["Ctrl+P", "Ctrl+Z (Command+Z kwenye Mac)", "Kufunga kivinjari", "Kitufe cha Share"], answer: 1, why: "Ctrl+Z au Command+Z hutendua badiliko la mwisho." },
      { objective: "O3", q: "Kitufe cha Share kiko wapi katika app zote mbili?", options: ["Juu kulia", "Chini ya ukurasa", "Katika onyesho la kuchapisha", "Katika seli ya lahajedwali"], answer: 0, why: "App zote mbili zinaweka Share juu upande wa kulia." },
      { objective: "O3", q: "Mfanyakazi mwenzako apendekeze mabadiliko lakini asibadilishe maneno yako. Mpe:", options: ["Edit", "Comment", "Owner (mmiliki)", "Hakuna ruhusa"], answer: 1, why: "Ruhusa ya Comment inamruhusu kupendekeza bila kubadilisha." },
      { objective: "O3", q: "Kwa nini uwe mwangalifu na \"Anyone with the link\"?", options: ["Inafuta faili", "Yeyote anayepata kiungo anaweza kuifungua", "Inagharimu pesa", "Inageuza faili kuwa PDF"], answer: 1, why: "Viungo vinavyotumwa kwa wengine vinaweza kuwafikia watu usiowajua." },
      { objective: "O3", q: "Maoni (comment) ni:", options: ["Badiliko katika maandishi yako", "Ujumbe mfupi pembeni usiobadilisha maandishi", "PDF", "Fomula"], answer: 1, why: "Maoni hutoa mawazo bila kubadilisha maandishi." },
      { objective: "O4", q: "Ni matumizi gani mazuri ya lahajedwali?", options: ["Bajeti ya familia", "Barua ya mapenzi", "Albamu ya picha", "Simu ya kupiga"], answer: 0, why: "Lahajedwali ni kwa orodha na namba." },
      { objective: "O4", q: "Safu wima katika lahajedwali zinaitwa kwa:", options: ["Namba", "Herufi", "Rangi", "Emoji"], answer: 1, why: "Safu wima zinatumia herufi; mistari inatumia namba." },
      { objective: "O4", q: "Vichwa kama \"Kitu\" na \"Gharama\" kwa kawaida vinaenda wapi?", options: ["Mstari 1", "Mstari wa mwisho", "Katika maoni", "Katika jina la faili"], answer: 0, why: "Vichwa vinaenda katika mstari wa juu." },
      { objective: "O5", q: "Kila fomula inaanza na:", options: ["Alama ya dola", "Alama ya sawa (=)", "Neno Jumla", "Nafasi tupu"], answer: 1, why: "Alama = inaiambia lahajedwali kwamba ni fomula." },
      { objective: "O5", q: "Katika =SUM(B2:B6), nukta mbili (:) zinamaanisha:", options: ["Gawanya", "Hadi", "Toa", "Simama"], answer: 1, why: "B2:B6 inamaanisha B2 hadi B6." },
      { objective: "O5", q: "Unaona #NAME? katika seli. Ukague nini?", options: ["Printa", "Tahajia ya fomula", "Nywila yako", "Rangi ya faili"], answer: 1, why: "#NAME? kwa kawaida inamaanisha fomula imeandikwa vibaya." },
      { objective: "O5", q: "Fomula ipi inatoa wastani wa B2 hadi B6?", options: ["=AVERAGE(B2:B6)", "=SUM(B2)", "AVG B2-B6", "=B2"], answer: 0, why: "AVERAGE inahesabu wastani wa masafa." },
      { objective: "O6", q: "Katika Google Docs, unatengenezaje PDF?", options: ["Menyu ya File, Download, PDF", "Share, Anyone with the link", "Kubonyeza Ctrl+Z", "Kubofya kulia na Comment"], answer: 0, why: "File, Download, PDF huhifadhi PDF." },
      { objective: "O6", q: "Kabla ya kuchapisha, unapaswa:", options: ["Kukagua onyesho la kuchapisha", "Kufuta faili", "Kuishiriki na kila mtu", "Kubadilisha fonti zote"], answer: 0, why: "Onyesho linaonyesha kama kuna kinachokatika." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 2, 4, 5, 9, 13, 14, 15, 18] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Hati nadhifu ya ukurasa mmoja", objective: "O2", notYet: "Kichwa, orodha ya vitone au mstari wa mawasiliano haupo.", meets: "Kichwa cha Heading 1 kilichokolezwa, orodha ya vitone na mstari wa mawasiliano, vyote katika ukurasa mmoja.", exceeds: "Pia inatumia fonti moja rahisi, aya fupi na jina la faili lililo wazi." },
      { name: "Kushiriki kwa usalama", objective: "O3", notYet: "Hati haijashirikiwa, au imeshirikiwa kwa ruhusa ya Edit au kwa \"Anyone with the link\".", meets: "Imeshirikiwa na mtu mmoja kama View (kusoma tu).", exceeds: "Pia ameacha maoni ya kuomba mawazo na akayamaliza (Resolve) baada ya kujibiwa." },
      { name: "Lahajedwali", objective: "O4", notYet: "Vichwa havipo au gharama zilizoorodheshwa ni chini ya tano.", meets: "Vichwa Kitu na Gharama katika mstari 1 na angalau gharama tano, moja kwa kila mstari, zimeandikwa kama namba.", exceeds: "Mstari 1 umekolezwa na faili ina jina lililo wazi." },
      { name: "Jumla ya SUM", objective: "O5", notYet: "Jumla imeandikwa kwa mkono au fomula inatoa kosa.", meets: "Fomula ya SUM inatoa jumla sahihi na inajisasisha gharama ikibadilika.", exceeds: "Pia ameweka lebo ya Jumla na kuongeza fomula ya AVERAGE." },
      { name: "PDF", objective: "O6", notYet: "Faili moja au zote mbili hazijahifadhiwa kama PDF.", meets: "Hati na lahajedwali zote mbili zimepakuliwa kama PDF na zinapatikana katika Downloads.", exceeds: "Pia amekagua onyesho la kuchapisha ili hakuna kinachokatika." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kupata Anafikia au Anazidi katika kila mstari wa rubriki ya kazi ya mwisho",
      "Wanafunzi wanaoripoti kutengeneza hati halisi, bajeti au orodha ya kujiandikisha ndani ya siku 30 baada ya kozi (utafiti wa kufuatilia)",
      "Wanafunzi wanaotuma PDF kwa ombi la kazi, shule au fomu ya ofisi bila msaada",
      "Wanafunzi wanaoendelea na kozi inayofuata, kama Barua Pepe na Mawasiliano ya Mtandaoni au kozi ya kutafuta kazi"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta au tableti yenye intaneti na kivinjari cha wavuti (simu inafanya kazi lakini ni ngumu zaidi)",
      "Akaunti ya bure ya Google au ya Microsoft",
      "Kazi halisi ya kufanyia mazoezi, kama tangazo, barua au bajeti ya wiki",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi"
    ],
    facilitatorNotes: [
      "Kabla ya kipindi, hakikisha kila mwanafunzi anaweza kuingia katika akaunti ya Google au Microsoft; wasaidie kufungua akaunti mapema ili muda wa darasa utumike kwa hati.",
      "Mwache kila mwanafunzi achague Google au Microsoft na abaki nayo kozi nzima; waweke pamoja wanafunzi wanaotumia ile ile.",
      "Kwa mazoezi ya kushiriki, wanafunzi washiriki na mwenzao aliye darasani kama View (kusoma tu), kamwe si kwa \"Anyone with the link\", na wasitumie anwani halisi wala namba za vitambulisho.",
      "Katika maabara za kompyuta, wakumbushe wanafunzi watoke (sign out) mwishoni ili mtu anayefuata asiweze kufungua faili zao.",
      "Ikiwa kuchapisha kunagharimu pesa mahali mnapokutana, onyesha onyesho la kuchapisha na upakuaji wa PDF, na chapisha tu inapohitajika."
    ]
  }
};
