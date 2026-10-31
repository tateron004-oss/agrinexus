"use strict";

// Koach Learn course (Swahili translation of africa-life/afr-women-entrepreneurs.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const UNWOMEN = { name: "UN Women: uwezeshaji wa kiuchumi (kazi ya matunzo isiyolipwa, upatikanaji wa mali na fedha)", url: "https://www.unwomen.org/en/what-we-do/economic-empowerment" };
const WEF = { name: "Women Enterprise Fund, Kenya (mfuko wa serikali kwa biashara za wanawake)", url: "https://wef.co.ke/" };
const SMEDAN = { name: "SMEDAN, Nigeria: usajili wa bure, SME Digital Academy na mipango ikiwemo Women In Self-employment Programme", url: "https://smedan.gov.ng/" };
const DERFJ = { name: "DER/FJ, Senegal: Délégation générale à l'Entreprenariat Rapide des Femmes et des Jeunes (kurasimisha biashara, mafunzo, ufadhili)", url: "https://der.sn/" };
const GEA = { name: "Ghana Enterprises Agency: msaada kwa biashara ndogo sana na ndogo", url: "https://gea.gov.gh/" };
const AFAWA = { name: "Benki ya Maendeleo ya Afrika (African Development Bank): AFAWA, Affirmative Finance Action for Women in Africa", url: "https://www.afdb.org/en/topics-and-sectors/initiatives-partnerships/affirmative-finance-action-for-women-in-africa" };

module.exports = {
  id: "afr-women-entrepreneurs-sw",
  lang: "sw",
  translationOf: "afr-women-entrepreneurs",
  category: "Africa: Life and Work",
  name: "Wanawake Wajasiriamali: Kuanzisha na Kukuza Biashara",
  skills: "Kuchagua wazo la biashara linalofaa maisha yako, Kujaribu wazo kwa wateja halisi, Kuweka bei yenye faida na kujilipa, Kupanga muda na msaada wa familia, Kupata fedha na msaada kwa usalama, Kujenga mtandao na mpango wa kukua",
  outcome: "kuanzisha au kukuza biashara ndogo inayofaa maisha yako: kuchagua wazo, kulijaribu kwa wateja halisi, kuweka bei zinazoleta faida na kujilipa, kupanga wiki yako pamoja na msaada unaohitaji, kupata fedha na msaada salama, na kuandika mpango wa kukua wa miezi sita.",
  about: [
    "Wanawake wanaendesha sehemu kubwa ya biashara ndogo kote Afrika: sokoni, saluni, jikoni, shambani, madukani na mtandaoni. Wengi hufanya hivyo huku wakitunza watoto na familia, mara nyingi wakiwa na nafasi ndogo ya kupata mikopo, ardhi na muda. Kozi hii ni kwa wanawake wa Kenya, Nigeria, Ghana, Senegal, Cameroon, Misri na kote Afrika wanaotaka kuanzisha biashara au kufanya ile waliyonayo ilete mapato zaidi.",
    "Utachagua wazo linalofaa ujuzi wako, muda wako na mahitaji ya eneo lako, utalijaribu kwa gharama ndogo kabla ya kutumia pesa nyingi, utaweka bei ya bidhaa yako ili ilete faida na ikulipe, utapanga wiki yako na msaada unaohitaji nyumbani, utapata mipango ya fedha na msaada na kuhakikisha ni ya kweli, na utajenga mtandao na mpango wa miezi sita.",
    "Kila somo linachukua kama dakika tano na linaisha na kazi ya \"Jaribu sasa\" kwa biashara yako mwenyewe. Takwimu za pesa ni mifano tu. Kozi inaeleza njia zilizopo; si ushauri wa kifedha. Kwa maelezo zaidi, angalia kozi za vikundi vya akiba, kuuza mtandaoni na kusajili biashara katika kundi hili."
  ],
  finalTask: "Andika mpango wa biashara wa ukurasa mmoja kwa ajili yako: wazo ulilochagua na alama zake, ulichojifunza kwa kulijaribu kwa wateja halisi, gharama, bei na faida ya bidhaa moja na kiasi utakachojilipa, mpango wa muda wa kila wiki na nani anakusaidia, njia moja ya fedha au msaada uliyoikagua kwenye tovuti yake rasmi, na malengo matatu ya miezi sita ijayo pamoja na mshauri mmoja au kikundi kimoja cha kuwasiliana nacho.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wanawake kote Afrika, mijini na vijijini, wanaoendesha au wanaotaka kuanzisha biashara ndogo: wafanyabiashara, wapishi wa chakula cha kuuza, washonaji, wasusi, wakulima wanaosindika na kuuza, wenye maduka na wauzaji wa mtandaoni. Umri na elimu vinatofautiana sana; wengi ni mama na walezi.",
    startingPoint: "Wengi tayari wanapata pesa kidogo kwa kuuza au kwa ujuzi fulani, na wengi ni wanachama wa kikundi cha akiba. Wachache hujaribu mawazo kabla ya kutumia pesa, hukokotoa gharama zote za bidhaa zao, hujilipa kiasi maalum au huandika malengo. Baadhi hawadhibiti pesa wanazopata au hawaweki PIN yao ya pesa za simu kuwa siri.",
    gap: "Wanawake wajasiriamali mara nyingi wana muda mdogo, nafasi ndogo ya kupata fedha na watu wachache wa kibiashara wanaowajua, na biashara nyingi hubaki ndogo au hufungwa kwa sababu bei hazilipi gharama au mwenye biashara amelemewa na kazi. Wanafunzi wanahitaji kuchagua na kujaribu mawazo kwa busara, kuweka bei yenye faida, kupanga muda na msaada wao, kufikia fedha na mipango halisi kwa usalama, na kukua kupitia mitandao.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; wanafunzi wengi wanatumia Kiingereza kama lugha ya pili (kozi inapatikana pia kwa Kifaransa na Kiarabu)",
      "Muda: kazi nyingi za matunzo na za nyumbani; masomo ya dakika 4 hadi 6 yanayoingia kati ya kazi hizo",
      "Vifaa: simu ya kawaida, wakati mwingine inayotumiwa na familia nzima; data ni ghali",
      "Pesa: bajeti ndogo; hakuna ushauri wa kifedha; majina na masharti ya mipango hubadilika, kwa hiyo wanafunzi wanakagua tovuti rasmi",
      "Usalama: ulaghai unaowaomba wanawake ada ili kupata ruzuku au mkopo; baadhi ya wanawake wanashinikizwa au pesa zao zinadhibitiwa na wengine"
    ],
    prerequisites: "Hakuna. Inasaidia: kozi \"Vikundi vya Akiba na Fedha Ndogo\" katika kundi hili."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa mawazo mawili au matatu ya biashara", action: "kupa kila wazo alama kwa ujuzi wako, muda, gharama ya kuanzia na mahitaji ya eneo lako, na kuchagua moja", standard: "ukitumia alama zile zile kwa kila wazo na kuandika kwa nini wazo lililoshinda linakufaa" },
    { id: "O2", condition: "Kabla ya kutumia sehemu kubwa ya pesa zako kwa wazo jipya", action: "kujaribu wazo hilo kwa kiasi kidogo cha bidhaa na angalau wateja halisi kumi", standard: "ukiandika wangapi walinunua, bei waliyolipa na badiliko moja la kufanya" },
    { id: "O3", condition: "Ukipewa gharama za bidhaa au huduma moja", action: "kukokotoa gharama kwa kila kipande, kuweka bei yenye faida, na kuweka kiasi cha kujilipa", standard: "ukijumuisha kila gharama na hesabu ikiwa sahihi" },
    { id: "O4", condition: "Ukipewa kazi zako za biashara na za nyumbani kwa wiki moja", action: "kuandaa mpango wa muda wa kila wiki unaoonyesha saa za biashara, kazi za matunzo na nani atasaidia", standard: "uliokubaliwa na angalau mwanafamilia mmoja au msaidizi mmoja" },
    { id: "O5", condition: "Unapotafuta mkopo, ruzuku au mpango wa msaada", action: "kuhakikisha kwenye tovuti rasmi kwamba ofa ni ya kweli na kudhibiti pesa zako na PIN yako mwenyewe", standard: "bila kulipa \"ada ya usindikaji\" kwa watu usiowajua na bila kumwambia mtu yeyote PIN yako" },
    { id: "O6", condition: "Kwa miezi sita ijayo", action: "kuandika malengo matatu ya biashara yanayopimika na kutaja mshauri mmoja, kikundi au chama cha kuwasiliana nacho", standard: "kila lengo likiwa na namba na tarehe" }
  ],
  chapters: [
    {
      name: "Sura 1: Kuanza vizuri",
      lessons: [
        {
          title: "Kuchagua biashara inayofaa maisha yako",
          objectives: ["O1"],
          minutes: 5,
          goal: "Pa mawazo mawili au matatu ya biashara alama na uchague lile linalokufaa zaidi.",
          text: [
            "Biashara bora kwako ni ile ambayo watu wa karibu wanaitaka, inayotumia ujuzi ulio nao, na inayofaa muda na pesa ulizo nazo kweli. Biashara inayokuhitaji sokoni kuanzia saa 11 alfajiri (5 am) huenda isikufae kama unawapeleka watoto shuleni.",
            "Andika mawazo mawili au matatu. Pa kila moja alama kuanzia 1 (dhaifu) hadi 3 (nzuri) kwa mambo manne: ujuzi wako, muda unaohitajika ukilinganisha na muda ulio nao, gharama ya kuanzia ukilinganisha na pesa ulizo nazo, na mahitaji ya eneo lako (je, watu wa karibu wananunua kitu hiki, na kuna nafasi ya muuzaji mmoja zaidi?). Jumlisha alama.",
            "Mfano: Halima wa Kaduna anapa mawazo matatu alama. Kuuza kinywaji cha kunu karibu na shule: ujuzi 3, muda 2, gharama 3, mahitaji 3 = 11. Ushonaji: ujuzi 2, muda 2, gharama 1, mahitaji 2 = 7. Kuuza vocha za simu: ujuzi 2, muda 3, gharama 2, mahitaji 1 = 8 (tayari kuna wauzaji wengi). Anachagua vinywaji. Aïcha wa Dakar anaweza kupa alama kwa njia ile ile kibanda cha kitindamlo cha thiakry, kusuka nywele na duka dogo.",
            "Alama zinakusaidia kufikiri; haziamui kwa niaba yako. Jiulize pia: je, nitafurahia kazi hii, na je, ninaweza kuikuza baadaye?"
          ],
          steps: ["Andika mawazo mawili au matatu.", "Pa kila moja alama 1 hadi 3 kwa ujuzi, muda, gharama ya kuanzia na mahitaji ya eneo lako.", "Jumlisha alama.", "Chagua moja na uandike kwa nini linafaa maisha yako."],
          words: [["Gharama ya kuanzia", "pesa unazohitaji kuanza: vifaa, bidhaa za kwanza, kibanda au leseni."], ["Mahitaji", "watu wangapi wanataka kununua kitu, na kwa kiasi gani."]],
          slides: [
            { title: "Biashara inayokufaa", bullets: ["Watu wa karibu wanaitaka", "Inatumia ujuzi ulio nao", "Inafaa muda na pesa ulizo nazo kweli"] },
            { title: "Pa kila wazo alama 1 hadi 3", bullets: ["Ujuzi wako", "Muda unaohitajika dhidi ya muda ulio nao", "Gharama ya kuanzia dhidi ya pesa ulizo nazo", "Mahitaji ya eneo lako"] },
            { title: "Mfano: Halima wa Kaduna", bullets: ["Kinywaji cha kunu karibu na shule: 11", "Ushonaji: 7", "Vocha za simu: 8, wauzaji ni wengi mno"] },
            { title: "Kisha jiulize", bullets: ["Je, nitafurahia kazi hii?", "Je, ninaweza kuikuza baadaye?"] }
          ],
          tryIt: "Andika mawazo mawili au matatu ya biashara. Pa kila moja alama 1 hadi 3 kwa ujuzi, muda, gharama ya kuanzia na mahitaji ya eneo lako, jumlisha alama, na uandike sentensi moja kwa nini wazo lako la juu linafaa maisha yako.",
          youCanNow: "kulinganisha mawazo ya biashara kwa alama rahisi na kuchagua moja linalofaa maisha yako.",
          quickCheck: [
            { objective: "O1", q: "Unapa kila wazo alama kwa mambo gani manne?", options: ["Rangi, jina, nembo, ukubwa wa duka", "Ujuzi, muda, gharama ya kuanzia na mahitaji ya eneo lako", "Wanachopenda marafiki, hali ya hewa, muziki, mitindo", "Kiasi cha pesa linaloweza kuleta tu"], answer: 1, why: "Ujuzi, muda, gharama na mahitaji vinaonyesha kama wazo linakufaa wewe na soko lako." },
            { objective: "O1", q: "Wazo lina alama ya juu kwa ujuzi lakini tayari kuna wauzaji kumi mtaani kwako. Alama ipi iko chini?", options: ["Ujuzi", "Muda", "Mahitaji ya eneo lako", "Gharama ya kuanzia"], answer: 2, why: "Wauzaji wengi karibu inamaanisha nafasi ndogo kwa muuzaji mmoja zaidi, kwa hiyo mahitaji ni madogo." }
          ]
        },
        {
          title: "Kujaribu wazo lako kwa wateja halisi",
          objectives: ["O2"],
          minutes: 5,
          goal: "Jaribu wazo kwa kiasi kidogo cha bidhaa na angalau wateja halisi kumi kabla ya kutumia pesa nyingi.",
          text: [
            "Biashara nyingi hushindwa kwa sababu mwenye biashara anatumia akiba yake yote kabla ya kujua kama watu watanunua. Jaribu kwa kiasi kidogo kwanza: tengeneza au nunua bidhaa chache, wape wateja halisi, na uangalie kinachotokea.",
            "Tengeneza kiasi kidogo, kwa mfano vikombe 20 vya zobo, magauni 5 au miadi 10 ya kusuka nywele. Wape angalau watu kumi ambao si familia yako ya karibu. Andika: wangapi walinunua, bei waliyolipa, walichopenda, na walichoomba. Vitendo vya watu ni muhimu kuliko maneno ya adabu: \"Nitanunua wiki ijayo\" si mauzo.",
            "Mfano: Esther wa Kisumu anajaribu sabuni ya maji. Anatengeneza chupa 15, anauza 12 kwa KES 150 (bei ya mfano), na wateja watatu wanaomba chupa kubwa zaidi. Badiliko lake: kuongeza ukubwa mkubwa zaidi. Mwanamke wa Alexandria anayejaribu achari za kutengeneza nyumbani anaweza kufanya vivyo hivyo kwa majirani na duka dogo.",
            "Baada ya jaribio, amua: endelea, badilisha kitu, au jaribu wazo lako linalofuata. Jaribio linaloshindwa linagharimu kidogo na linakuokolea mengi."
          ],
          steps: ["Tengeneza au nunua kiasi kidogo cha bidhaa.", "Wape angalau watu kumi ambao si familia yako ya karibu.", "Andika wangapi walinunua, bei, walichopenda na walichoomba.", "Amua: endelea, badilisha kitu kimoja, au jaribu wazo linalofuata."],
          words: [["Kiasi kidogo cha bidhaa", "bidhaa chache zinazotengenezwa au kununuliwa ili kujaribu kabla ya kutengeneza zaidi."], ["Jaribio", "kujaribu wazo kwa kiwango kidogo ili kujifunza kabla ya kutumia pesa nyingi."]],
          slides: [
            { title: "Jaribu kabla ya kutumia pesa nyingi", bullets: ["Usitumie akiba yako yote kwanza", "Tengeneza kiasi kidogo cha bidhaa", "Wape wateja halisi"] },
            { title: "Andika", bullets: ["Wangapi walinunua", "Bei waliyolipa", "Walichopenda na walichoomba"] },
            { title: "Vitendo ni bora kuliko maneno ya adabu", bullets: ["\"Nitanunua wiki ijayo\" si mauzo", "Hesabu mauzo halisi", "Uliza watu ambao si familia ya karibu"] },
            { title: "Baada ya jaribio", bullets: ["Endelea", "Badilisha kitu kimoja", "Au jaribu wazo linalofuata"] }
          ],
          tryIt: "Panga jaribio la wazo ulilochagua: kiasi kidogo utakachotengeneza, bei utakayojaribu, na watu kumi utakaowapa wiki hii. Baada ya jaribio, andika wangapi walinunua na badiliko moja la kufanya.",
          youCanNow: "kujaribu wazo la biashara kwa gharama ndogo kwa wateja halisi na kuamua la kufanya baadaye.",
          quickCheck: [
            { objective: "O2", q: "Ushahidi bora kwamba wateja wanataka bidhaa yako ni upi?", options: ["Mama yako anasema ni nzuri", "Marafiki wanasema watanunua mwezi ujao", "Wewe unaipenda sana", "Watu ambao si familia wanailipia"], answer: 3, why: "Mauzo halisi kwa wateja halisi yanaonyesha mahitaji ya kweli." },
            { objective: "O2", q: "Jaribio lako linauza vipande 3 kati ya 20. Hatua nzuri inayofuata ni ipi?", options: ["Kuwauliza wanunuzi cha kubadilisha, kubadilisha kitu kimoja, na kujaribu tena", "Kutumia akiba yako yote kwa bidhaa zaidi", "Kuacha biashara milele", "Kuongeza bei mara mbili"], answer: 0, why: "Jaribio dhaifu ni somo la bei nafuu: jifunze, badilisha kitu kimoja na ujaribu tena." }
          ]
        },
        {
          title: "Kuweka bei yenye faida na kujilipa",
          objectives: ["O3"],
          minutes: 6,
          goal: "Kokotoa gharama kwa kila kipande, weka bei yenye faida, na weka kiasi cha kujilipa.",
          text: [
            "Wanawake wengi huweka bei za chini mno, hasa wanapouzia majirani, na hufanya kazi kwa bidii bila faida halisi. Hesabu kila gharama: viungo au malighafi, vifungashio, usafiri, mkaa au gesi, data ya simu, ada ya kibanda, na muda wako mwenyewe.",
            "Gharama kwa kila kipande = gharama yote ya kundi la bidhaa ukigawanya kwa idadi ya vipande. Kisha ongeza faida. Mfano kutoka Kumasi: Abena anatengeneza sambusa za nyama (meat pies) 40. Unga, nyama, mafuta na gesi vinagharimu GHS 160, mifuko GHS 10 na usafiri GHS 10: jumla GHS 180, kwa hiyo GHS 4.50 kwa kila moja. Anauza kwa GHS 7 (takwimu za mfano), kwa hiyo kila moja inaleta faida ya GHS 2.50. Hakikisha wateja watalipa bei yako kwa kuangalia wauzaji wa bidhaa kama yako.",
            "Jilipe. Amua kiasi maalum utakachochukua kutoka kwenye biashara kila wiki, na uache kilichobaki kwenye biashara kwa bidhaa na ukuaji. Ukichukua kila kitu, biashara haiwezi kukua; usipochukua chochote, unafanya kazi bure. Andika unachochukua katika kumbukumbu zako.",
            "Kama bei yako hailipi gharama zako, badilisha kitu: ukubwa mdogo zaidi, msambazaji bora, kununua kwa jumla pamoja na wengine, au bei ya juu zaidi kwa ubora bora."
          ],
          steps: ["Orodhesha kila gharama ya kundi moja la bidhaa, pamoja na usafiri, mafuta, data na ada.", "Gawanya jumla kwa idadi ya vipande ili kupata gharama kwa kila kipande.", "Ongeza faida ili kuweka bei; linganisha na wauzaji wa bidhaa kama yako.", "Amua kiasi maalum cha kujilipa kila wiki; acha kilichobaki kwenye biashara."],
          words: [["Gharama kwa kila kipande", "gharama yote ya kundi la bidhaa ukigawanya kwa idadi ya vipande vilivyotengenezwa."], ["Faida", "pesa zinazobaki baada ya kulipa gharama zote."], ["Kujilipa", "kiasi maalum ambacho mwenye biashara anachukua kutoka kwenye biashara, ili kilichobaki kibaki kwa bidhaa na ukuaji."]],
          slides: [
            { title: "Hesabu kila gharama", bullets: ["Malighafi na vifungashio", "Usafiri, mafuta, data, ada ya kibanda", "Muda wako mwenyewe"] },
            { title: "Gharama kwa kila kipande", bullets: ["Gharama yote ya kundi / idadi ya vipande", "Abena: GHS 180 / sambusa 40 = GHS 4.50", "Anauza kwa GHS 7 = faida GHS 2.50 (mfano)"] },
            { title: "Jilipe kiasi maalum", bullets: ["Chukua kiasi kisichobadilika kila wiki", "Acha kilichobaki kwa bidhaa na ukuaji", "Kiandike katika kumbukumbu zako"] },
            { title: "Bei iko chini mno?", bullets: ["Ukubwa mdogo zaidi au msambazaji bora", "Nunua kwa jumla pamoja na wengine", "Bei ya juu zaidi kwa ubora bora"] }
          ],
          tryIt: "Chagua bidhaa moja. Orodhesha kila gharama ya kundi moja, kokotoa gharama kwa kila kipande, weka bei yenye faida, na uamue utajilipa kiasi gani kila wiki.",
          youCanNow: "kuweka bei ya bidhaa ili ilete faida na kujilipa kiasi maalum.",
          quickCheck: [
            { objective: "O3", q: "Kundi la mifuko 20 linagharimu NGN 10,000 kwa jumla. Gharama kwa kila mfuko ni kiasi gani?", options: ["NGN 200", "NGN 20", "NGN 500", "NGN 10,000"], answer: 2, why: "10,000 ukigawanya kwa 20 ni NGN 500 kwa kila mfuko." },
            { objective: "O3", q: "Kwa nini ujilipe kiasi maalum badala ya kuchukua pesa zote?", options: ["Ili usipate chochote kamwe", "Ili pesa zibaki kwenye biashara kwa bidhaa na ukuaji", "Ili wateja walipe zaidi", "Ni sharti la kila benki"], answer: 1, why: "Kiasi maalum kinakulipa na kinaacha pesa za kuendeleza na kukuza biashara." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kuanza vizuri",
        questions: [
          { objective: "O1", q: "Wazo A lina alama 11 na wazo B lina alama 7, lakini hulipendi wazo A. Unafanya nini?", options: ["Kuchagua alama ya juu kila wakati", "Kutochagua lolote na kuacha", "Kupa alama tena hadi B ishinde", "Kutumia alama kufikiri, na pia kujiuliza kama utafurahia kazi hiyo"], answer: 3, why: "Alama zinakusaidia kufikiri; kufurahia kazi pia ni muhimu." },
          { objective: "O2", q: "Uwape nani bidhaa zako za jaribio?", options: ["Angalau watu kumi ambao si familia yako ya karibu", "Mume wako tu", "Rafiki yako wa karibu tu", "Hakuna mtu; kisia tu"], answer: 0, why: "Wateja halisi wanatoa majibu ya kweli kupitia wanachonunua." },
          { objective: "O2", q: "Kwa nini ujaribu kwa kiasi kidogo cha bidhaa?", options: ["Ili kutumia pesa zaidi", "Ili kujifunza kabla ya kutumia pesa nyingi", "Kwa sababu kiasi kikubwa ni kinyume cha sheria", "Ili kuepuka wateja"], answer: 1, why: "Jaribio dogo linagharimu kidogo na linaonyesha kama watu watanunua." },
          { objective: "O3", q: "Wauzaji wengi husahau gharama ipi?", options: ["Viungo vikuu", "Bidhaa yenyewe", "Usafiri, mafuta, data na muda wao wenyewe", "Bei ya kuuza"], answer: 2, why: "Gharama ndogo kama usafiri na mafuta zinajumlika na zinakula faida." },
          { objective: "O3", q: "Gharama kwa kila kipande ni GHS 4.50 na bei ni GHS 7. Faida kwa kila kipande ni kiasi gani?", options: ["GHS 11.50", "GHS 7", "GHS 4.50", "GHS 2.50"], answer: 3, why: "7 toa 4.50 ni 2.50." }
        ]
      }
    },
    {
      name: "Sura 2: Kukua imara",
      lessons: [
        {
          title: "Kupata muda: familia, matunzo na msaada",
          objectives: ["O4"],
          minutes: 5,
          goal: "Andaa mpango wa muda wa kila wiki wenye saa za biashara, kazi za matunzo na nani anasaidia.",
          text: [
            "Katika maeneo mengi, wanawake hufanya sehemu kubwa ya kazi ya matunzo isiyolipwa nyumbani: kupika, kusafisha, kuchota maji, na kutunza watoto, wagonjwa na wazee. UN Women (shirika la Umoja wa Mataifa kwa wanawake) linaeleza kuwa hili linawaachia wanawake muda mdogo wa kazi ya kulipwa. Biashara nayo inahitaji muda, kwa hiyo upange.",
            "Chora wiki: siku saba na asubuhi, mchana na jioni. Weka alama kwenye kazi za matunzo, kisha saa zako za biashara: kununua bidhaa, kutengeneza, kuuza, kujibu ujumbe na kumbukumbu. Tafuta mahali ambapo kazi zinagongana na nafasi zilizo wazi.",
            "Kisha omba msaada. Ongea na mume au mwenzi wako, watoto wakubwa, dada au jirani kuhusu kugawana kazi kama kuchota maji, kupeleka watoto shuleni au kupika siku za soko zenye shughuli nyingi. Baadhi ya wanawake hubadilishana kulea watoto na mama wengine, au hufanya kazi karibu na nyumbani siku fulani. Mfano: Mariam wa Yaoundé anauza sokoni Jumanne, Ijumaa na Jumamosi; dada yake anawatunza watoto asubuhi za siku hizo, na Mariam anamsuka dada yake nywele kwa malipo.",
            "Waonyeshe familia yako mpango na mkubaliane. Jitunze pia: kupumzika na afya vinaifanya biashara iendelee."
          ],
          steps: ["Chora siku saba zenye asubuhi, mchana na jioni.", "Weka alama kwenye kazi za matunzo na za nyumbani.", "Weka alama kwenye saa za biashara: kununua, kutengeneza, kuuza, ujumbe, kumbukumbu.", "Tafuta migongano na umwombe mwanafamilia au msaidizi mgawane kazi.", "Mkubaliane mpango pamoja na mweke muda wa kupumzika."],
          words: [["Kazi ya matunzo isiyolipwa", "kazi ya nyumbani isiyolipwa, kama kupika, kusafisha na kutunza watoto, wagonjwa na wazee."], ["Kubadilishana kulea watoto", "mama kupokezana kutunza watoto wa kila mmoja."]],
          slides: [
            { title: "Muda wako ni sehemu ya biashara", bullets: ["Wanawake hufanya kazi nyingi za matunzo zisizolipwa", "Biashara nayo inahitaji muda", "Kwa hiyo upange"] },
            { title: "Chora wiki yako", bullets: ["Siku saba: asubuhi, mchana, jioni", "Weka alama kwenye kazi za matunzo", "Weka alama kwenye saa za biashara", "Tafuta migongano"] },
            { title: "Omba msaada", bullets: ["Mwenzi, watoto wakubwa, dada, jirani", "Gawaneni maji, safari za shule, kupika", "Badilishaneni kulea watoto na mama wengine"] },
            { title: "Mkubaliane pamoja", bullets: ["Onyesha familia yako mpango", "Weka kupumzika na afya"] }
          ],
          tryIt: "Chora mpango wako wa muda wa kila wiki wenye kazi za matunzo na saa za biashara. Weka alama kwenye mgongano mmoja, andika nani anaweza kusaidia, na uongee na mtu huyo wiki hii.",
          youCanNow: "kupanga wiki yako ili biashara yako na kazi zako za matunzo ziende pamoja, ukiwa na msaada unaohitaji.",
          quickCheck: [
            { objective: "O4", q: "Siku yako ya soko inagongana na kupeleka watoto shuleni. Hatua nzuri ni ipi?", options: ["Kumwomba mwanafamilia au mama mwingine mgawane kazi ya kuwapeleka shuleni", "Kufunga biashara", "Kuacha soko milele", "Kuwaacha watoto peke yao"], answer: 0, why: "Kugawana kazi kunatoa muda kwa biashara bila kuidhuru familia." },
            { objective: "O4", q: "Kwa nini uwaonyeshe familia yako mpango wako wa muda?", options: ["Kuomba ruhusa ya kuwepo", "Ili wakubali na wasaidie", "Ili wachukue pesa zako", "Haijalishi"], answer: 1, why: "Familia ikikubali mpango, ina uwezekano mkubwa zaidi wa kusaidia." }
          ],
          sources: [UNWOMEN]
        },
        {
          title: "Kupata pesa na msaada kwa usalama",
          objectives: ["O5"],
          minutes: 6,
          goal: "Hakikisha mkopo, ruzuku au mpango ni wa kweli na udhibiti pesa zako.",
          text: [
            "Kuna mipango kwa wanawake na biashara ndogo. Mifano: Women Enterprise Fund ya Kenya, mfuko wa serikali kwa biashara za wanawake; SMEDAN ya Nigeria, ambayo usajili wake wa bure unafungua mipango kama Women In Self-employment Programme; DER/FJ ya Senegal, inayotoa mafunzo, kurasimisha biashara na ufadhili kwa wanawake na vijana; Ghana Enterprises Agency; na mpango wa AFAWA wa Benki ya Maendeleo ya Afrika, unaoshirikiana na benki na wakopeshaji kuwasaidia kuwakopesha wanawake. Vikundi vya akiba na fedha ndogo vinaelezwa katika kozi yao wenyewe.",
            "Majina, masharti na tarehe za kufungua hubadilika, kwa hiyo kagua kila wakati kwenye tovuti rasmi au ofisi ya mpango huo. Walaghai hujifanya kutoa ruzuku na mikopo ya wanawake na huomba kwanza \"ada ya usindikaji\" au \"ada ya usajili\". Mpango halisi unaeleza ada zake kwenye tovuti yake rasmi; usimlipe kamwe mtu usiyemjua ili upate ruzuku.",
            "Dhibiti pesa zako. Kuwa na laini yako mwenyewe ya pesa za simu au akaunti kwa jina lako, na uweke PIN yako siri kwa kila mtu, hata familia. Mtoa huduma halisi hakuombi PIN yako kamwe. Mtu akichukua mapato yako kwa nguvu au vitisho, huo ni unyanyasaji; ongea na mtu unayemwamini, kikundi cha wanawake au huduma ya msaada ya eneo lako.",
            "Kabla ya kukopa, jua jumla unayopaswa kurudisha, lini, na nini kitatokea ukichelewa. Kopa kwa kitu kitakacholeta pesa, si kulipa gharama za kila siku za nyumbani."
          ],
          steps: ["Tafuta tovuti rasmi au ofisi ya mpango.", "Kagua unachotoa, nani anaweza kuomba, na tarehe zake za kufungua na ada.", "Mkatae yeyote anayeomba ada kwenye akaunti za watu usiowajua.", "Kuwa na laini ya pesa za simu au akaunti kwa jina lako na PIN ya siri.", "Kabla ya kukopa, andika jumla ya kurudisha, lini, na masharti ya kuchelewa."],
          words: [["Ruzuku", "pesa zinazotolewa kwa kusudi fulani ambazo hazirudishwi."], ["Mkopo", "pesa zilizokopwa ambazo lazima zirudishwe, kwa kawaida pamoja na gharama ya ziada (riba)."], ["Ulaghai wa ada ya kwanza", "hila ambapo mtu anaahidi pesa lakini anakuomba ulipe ada kwanza."]],
          slides: [
            { title: "Msaada kwa biashara za wanawake", bullets: ["Kenya: Women Enterprise Fund", "Nigeria: mipango ya SMEDAN", "Senegal: DER/FJ; Ghana: Ghana Enterprises Agency", "AFAWA ya AfDB: inafanya kazi kupitia benki na wakopeshaji"] },
            { title: "Hakikisha ni ya kweli", bullets: ["Tovuti rasmi au ofisi tu", "Nani anaweza kuomba, tarehe na ada", "Usimlipe kamwe mtu usiyemjua ili upate ruzuku"] },
            { title: "Dhibiti pesa zako", bullets: ["Akaunti au laini ya pesa za simu kwa jina lako", "PIN siri kwa kila mtu, hata familia", "Mtoa huduma halisi hakuombi PIN yako kamwe"] },
            { title: "Kabla ya kukopa", bullets: ["Jumla ya kurudisha na lini", "Nini kitatokea ukichelewa", "Kopa ili kuzalisha, si kwa gharama za kila siku"] }
          ],
          tryIt: "Chagua mpango mmoja kutoka somo hili au mmoja unaoujua. Tafuta tovuti yake rasmi au ofisi yake, na uandike unachotoa, nani anaweza kuomba, kama uko wazi sasa, na tarehe uliyokagua.",
          youCanNow: "kupata msaada kwa biashara yako, kuhakikisha ni wa kweli, na kudhibiti pesa zako mwenyewe.",
          quickCheck: [
            { objective: "O5", q: "Ujumbe unasema umeshinda ruzuku ya biashara ya wanawake; lipa kwanza KES 5,000 ya \"ada ya usindikaji\". Huu ni nini?", options: ["Hatua ya kawaida ya mpango", "Ulaghai; kagua tovuti rasmi na usimlipe mtu usiyemjua", "Mkopo unaopaswa kuukubali", "Kodi"], answer: 1, why: "Kuomba ada kabla ya kutoa ruzuku ni ulaghai wa kawaida wa ada ya kwanza." },
            { objective: "O5", q: "Nani anapaswa kujua PIN yako ya pesa za simu?", options: ["Mume wako", "Mteja wako bora", "Wakala anayekupigia simu", "Wewe tu"], answer: 3, why: "PIN yako inalinda pesa zako; mtoa huduma halisi hakuiombi kamwe." }
          ],
          sources: [WEF, SMEDAN, DERFJ, GEA, AFAWA]
        },
        {
          title: "Mitandao, washauri na mpango wa kukua wa miezi sita",
          objectives: ["O6"],
          minutes: 5,
          goal: "Andika malengo matatu yanayopimika ya miezi sita na utaje mshauri mmoja au kikundi cha kuwasiliana nacho.",
          text: [
            "Wanawake wengi hukua haraka zaidi wakiwa na wengine: mshauri aliyewahi kufanya hivyo, chama cha wanawake wafanyabiashara, chama cha soko au cha biashara, ushirika (cooperative), chemba ya biashara au kituo cha msaada wa biashara. Wanashirikiana wanunuzi, wasambazaji, ushauri na ujasiri.",
            "Mshauri ni mtu mwenye uzoefu zaidi anayekupa ushauri. Muombe mwanamke unayemvutiwa naye dakika 20 za ushauri, ukiwa na maswali mawili yaliyo wazi. Jiunge na kikundi kimoja ambapo wateja au wasambazaji wako hukutana. Hudhuria maonyesho ya biashara au siku ya soko katika mji mkubwa zaidi unapoweza.",
            "Kisha andika malengo matatu ya miezi sita ijayo. Fanya kila moja lipimike, likiwa na namba na tarehe: \"Kuuza chupa 60 za sabuni kwa wiki kufikia mwisho wa Machi\", \"Kuweka akiba GHS 500 kwa cherehani ya pili kufikia Juni\" (takwimu ya mfano), \"Kupata wateja watano wapya wa maduka kufikia Mei\". Kagua malengo yako mara moja kwa mwezi na uandike ulichofanya.",
            "Mfano: Ngozi wa Enugu, anayeuza mikoba ya kitambaa cha Ankara, anajiunga na chama cha wanawake wafanyabiashara, anapata mshauri anayeuza mikoba nje ya nchi, na anaweka malengo ya mauzo, akiba na kibanda chake cha kwanza kwenye maonyesho ya biashara."
          ],
          steps: ["Orodhesha watu na vikundi wanaoweza kusaidia: washauri, vyama, vyama vya ushirika, vituo vya msaada.", "Chagua mmoja wa kuwasiliana naye mwezi huu, ukiwa na maswali mawili yaliyo wazi.", "Andika malengo matatu, kila moja na namba na tarehe.", "Kagua malengo yako mara moja kwa mwezi na uandike ulichofanya."],
          words: [["Mshauri", "mtu mwenye uzoefu anayekupa ushauri na msaada."], ["Lengo linalopimika", "lengo lenye namba na tarehe, ili uweze kuona kama umelifikia."], ["Chama", "kikundi cha watu wa biashara au hali moja wanaosaidiana."]],
          slides: [
            { title: "Kua pamoja na wengine", bullets: ["Washauri na vyama vya wanawake", "Vyama vya biashara, vyama vya ushirika, chemba", "Vituo vya msaada wa biashara"] },
            { title: "Tafuta mshauri", bullets: ["Mwanamke unayemvutiwa naye", "Omba dakika 20", "Kuja na maswali mawili yaliyo wazi"] },
            { title: "Malengo matatu yanayopimika", bullets: ["Kila moja na namba na tarehe", "Mauzo, akiba, wateja wapya", "Yakague mara moja kwa mwezi"] }
          ],
          tryIt: "Kazi ya mwisho: andika mpango wako wa biashara wa ukurasa mmoja wenye wazo lako lililopewa alama, matokeo ya jaribio, bei na faida, kiasi unachojilipa, mpango wako wa muda wa kila wiki, njia moja ya msaada uliyoikagua, malengo matatu ya miezi sita na mshauri mmoja au kikundi cha kuwasiliana nacho.",
          youCanNow: "kujenga mtandao na kuandika mpango wa kukua wa miezi sita wenye malengo yanayopimika.",
          quickCheck: [
            { objective: "O6", q: "Lengo lipi linapimika?", options: ["\"Kufanya vizuri zaidi\"", "\"Kuwa maarufu\"", "\"Kuuza magauni 40 kwa mwezi kufikia mwisho wa Juni\"", "\"Kufanya kazi kwa bidii\""], answer: 2, why: "Lina namba na tarehe, kwa hiyo unaweza kukagua kama umelifikia." },
            { objective: "O6", q: "Unamwombaje msaada mtu anayeweza kuwa mshauri wako?", options: ["Kumwomba dakika 20 ukiwa na maswali mawili yaliyo wazi", "Kumwomba akupe pesa", "Kumwomba aendeshe biashara yako", "Usiombe kamwe; msubiri"], answer: 0, why: "Ombi fupi na lililo wazi linaheshimu muda wake na linaleta ushauri wenye manufaa." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kukua imara",
        questions: [
          { objective: "O4", q: "Kazi ya matunzo isiyolipwa ni nini?", options: ["Kazi ya benki", "Kazi ya nyumbani isiyolipwa, kama kupika na kutunza watoto", "Kuuza sokoni", "Kazi ya serikali"], answer: 1, why: "Kazi ya matunzo isiyolipwa ni kazi ya nyumbani na ya kutunza watu inayochukua muda lakini haileti malipo." },
          { objective: "O4", q: "Mpango wa muda wa kila wiki unapaswa kuonyesha:", options: ["Saa za biashara tu", "Kupumzika tu", "Saa za biashara, kazi za matunzo na nani anasaidia", "Saa za shule za watoto wako tu"], answer: 2, why: "Kuona yote pamoja kunaonyesha migongano na mahali msaada unahitajika." },
          { objective: "O5", q: "Unakagua wapi kama mpango wa mikopo wa wanawake ni wa kweli?", options: ["Tovuti yake rasmi au ofisi yake", "Ujumbe uliotumwa kutoka kwa mtu mwingine", "Mtu usiyemjua kwenye simu", "Maoni kwenye mitandao ya kijamii"], answer: 0, why: "Chanzo rasmi tu kinaonyesha mpango halisi, tarehe zake na ada zake." },
          { objective: "O5", q: "Kabla ya kukopa, lazima ujue nini?", options: ["Jina la mkopeshaji tu", "Utaupata haraka kiasi gani tu", "Hakuna; saini tu", "Jumla ya kurudisha, lini, na nini kitatokea ukichelewa"], answer: 3, why: "Kujua gharama yote na masharti ya kuchelewa kunakulinda dhidi ya deni usiloweza kulipa." },
          { objective: "O6", q: "Unapaswa kukagua malengo yako ya miezi sita mara ngapi?", options: ["Kamwe", "Mara moja kwa mwezi", "Mwisho wa miezi sita tu", "Kila miaka kumi"], answer: 1, why: "Kukagua kila mwezi kunaonyesha maendeleo mapema, ili uweze kubadilisha mwelekeo." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Wanawake Wajasiriamali: Kuanzisha na Kukuza Biashara",
    questions: [
      { objective: "O1", q: "Biashara nzuri kwako ni ile ambayo:", options: ["Inafaa ujuzi wako, muda, pesa na mahitaji ya eneo lako", "Jirani yako tayari anaifanya vizuri", "Inahitaji pesa nyingi zaidi", "Ndiyo maarufu zaidi"], answer: 0, why: "Biashara inayokufaa wewe na soko lako ina uwezekano mkubwa zaidi wa kudumu." },
      { objective: "O1", q: "Gharama ya kuanzia inamaanisha:", options: ["Faida yako ya kila wiki", "Pesa unazohitaji kuanza", "Bei wanayolipa wateja", "Mkopo unaolazimika kuuchukua"], answer: 1, why: "Ni pesa za vifaa, bidhaa za kwanza, kibanda au leseni." },
      { objective: "O1", q: "Kwa nini upe kila wazo alama kwa mambo yale yale manne?", options: ["Ili kuirefusha", "Ili kila wazo lishinde", "Ili uweze kulinganisha mawazo kwa haki", "Kwa sababu benki inaihitaji"], answer: 2, why: "Alama zile zile kwa kila wazo zinafanya ulinganisho uwe wa haki." },
      { objective: "O2", q: "\"Nitanunua wiki ijayo\" kutoka kwa rafiki ni:", options: ["Mauzo", "Mkataba", "Mkopo", "Si mauzo bado; hesabu manunuzi halisi"], answer: 3, why: "Manunuzi halisi tu yanathibitisha mahitaji." },
      { objective: "O2", q: "Wakati wa jaribio, unaandika:", options: ["Wangapi walinunua, bei, na walichopenda na walichoomba", "Gharama zako tu", "Hakuna kitu", "Majina ya marafiki zako tu"], answer: 0, why: "Maelezo haya yanaonyesha mahitaji na cha kuboresha." },
      { objective: "O2", q: "Baada ya jaribio unaweza:", options: ["Kuacha tu", "Kuendelea, kubadilisha kitu kimoja, au kujaribu wazo linalofuata", "Kutumia akiba yako yote tu", "Kuongeza bei mara mbili tu"], answer: 1, why: "Jaribio linakusaidia kuchagua hatua yako inayofuata kwa busara." },
      { objective: "O3", q: "Gharama kwa kila kipande ni:", options: ["Bei unayotumaini", "Bei ya jirani yako", "Gharama yote ya kundi ukigawanya kwa idadi ya vipande", "Faida yako"], answer: 2, why: "Kugawanya gharama ya kundi kwa vipande kunatoa gharama ya kila kimoja." },
      { objective: "O3", q: "Kundi linagharimu XAF 30,000 na linatoa vipande 60. Gharama kwa kila kipande ni:", options: ["XAF 600", "XAF 60", "XAF 1,800", "XAF 500"], answer: 3, why: "30,000 ukigawanya kwa 60 ni XAF 500." },
      { objective: "O3", q: "Kama bei yako hailipi gharama zako, unaweza:", options: ["Kubadilisha ukubwa, msambazaji, kununua kwa jumla pamoja na wengine au kupandisha bei kwa ubora", "Kuendelea kuuza kwa hasara milele", "Kuacha kuandika gharama", "Kukopa ili kuzilipa kila wiki"], answer: 0, why: "Kubadilisha gharama au bei ndiyo njia ya kurudi kwenye faida." },
      { objective: "O3", q: "Kujilipa kiasi maalum kila wiki kunamaanisha:", options: ["Kuchukua pesa zote", "Kutochukua chochote kamwe", "Kuchukua kiasi kisichobadilika na kuacha kilichobaki kwa biashara", "Kuwalipa wateja wako"], answer: 2, why: "Kiasi maalum kinakulipa na kinaiacha biashara na pesa." },
      { objective: "O4", q: "UN Women linaeleza kuwa kazi ya matunzo isiyolipwa:", options: ["Inafanywa sawa na kila mtu", "Inawaachia wanawake wengi muda mdogo wa kazi ya kulipwa", "Haipo", "Inalipwa na serikali"], answer: 1, why: "Wanawake hufanya sehemu kubwa ya kazi ya matunzo isiyolipwa, na hii inapunguza muda wao wa biashara." },
      { objective: "O4", q: "Kubadilishana kulea watoto ni:", options: ["Mama kupokezana kutunza watoto wa kila mmoja", "Kuuza nguo za watoto", "Ada ya shule", "Akaunti ya benki"], answer: 0, why: "Kupokezana kunatoa muda kwa kazi ya kila mama." },
      { objective: "O4", q: "Mpango wako wa muda unapaswa pia kujumuisha:", options: ["Kutopumzika kabisa", "Kazi tu", "Mipango ya majirani zako", "Kupumzika na afya"], answer: 3, why: "Kupumzika kunakufanya wewe na biashara mwendelee." },
      { objective: "O5", q: "Ruzuku ni:", options: ["Mkopo wenye riba kubwa", "Pesa zinazotolewa kwa kusudi fulani ambazo huzirudishi", "Ada unayolipa kwanza", "Kodi"], answer: 1, why: "Ruzuku hairudishwi; mkopo unarudishwa." },
      { objective: "O5", q: "Mtu anaomba ada kabla ya kukupa ruzuku ya wanawake. Hii ina uwezekano mkubwa kuwa:", options: ["Hatua ya kawaida", "Sharti la benki", "Ulaghai wa ada ya kwanza", "Kodi ya serikali"], answer: 2, why: "Mipango halisi inatangaza ada zake kwenye tovuti rasmi; watu usiowajua wanaoomba ada ni walaghai." },
      { objective: "O5", q: "Nani anapaswa kushika PIN yako ya pesa za simu?", options: ["Wewe tu", "Mwenzi wako", "Mtu anayepiga simu kwa niaba ya mtoa huduma", "Mtoto wako mkubwa"], answer: 0, why: "PIN yako inalinda pesa zako; iweke siri kwa kila mtu." },
      { objective: "O5", q: "AFAWA, ya Benki ya Maendeleo ya Afrika, hasa:", options: ["Inamkopesha kila mwanamke kupitia WhatsApp", "Inawatoza wanawake ada kwa simu", "Inachukua nafasi ya vikundi vyote vya akiba", "Inashirikiana na benki na wakopeshaji ili wawakopeshe wanawake zaidi"], answer: 3, why: "AFAWA inafanya kazi kupitia taasisi za fedha ili kuongeza mikopo kwa wanawake." },
      { objective: "O6", q: "Mshauri ni:", options: ["Mteja anayekudai", "Mtu mwenye uzoefu anayetoa ushauri", "Afisa wa kodi", "Mkopo"], answer: 1, why: "Mshauri anashiriki uzoefu wake ili kukusaidia kukua." },
      { objective: "O6", q: "Lengo lipi lina namba na tarehe?", options: ["\"Kukua zaidi\"", "\"Kuwa bora kuliko wote\"", "\"Kuweka akiba NGN 50,000 kwa friza kufikia Julai\"", "\"Kujitahidi zaidi\""], answer: 2, why: "Namba na tarehe zinafanya lengo lipimike." },
      { objective: "O6", q: "Kujiunga na chama cha wanawake au cha biashara kunaweza kukusaidia:", options: ["Kupata wanunuzi, wasambazaji, ushauri na msaada", "Kuepuka wateja wote", "Kuacha kuandika kumbukumbu", "Kutohitaji mpango kamwe"], answer: 0, why: "Vikundi vinashirikiana mawasiliano, maarifa na kutiana moyo." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi amepiga hatua kiasi gani
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 3, 6, 7, 10, 14, 15, 18] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Wazo limechaguliwa", objective: "O1", notYet: "Wazo moja bila alama, au alama bila sababu.", meets: "Mawazo mawili au matatu yamepewa alama kwa ujuzi, muda, gharama na mahitaji, na sababu kwa nini lililoshinda linafaa.", exceeds: "Pia anaeleza jinsi wazo linavyoweza kukua baadaye." },
      { name: "Wazo limejaribiwa", objective: "O2", notYet: "Hakuna jaribio, au familia tu iliulizwa.", meets: "Kiasi kidogo cha bidhaa kilitolewa kwa angalau wateja halisi kumi, na mauzo, bei na badiliko moja vimeandikwa.", exceeds: "Badiliko lilifanywa na likajaribiwa mara ya pili." },
      { name: "Bei, faida na kujilipa", objective: "O3", notYet: "Gharama zinakosekana, hesabu si sahihi, au hakuna kiasi cha kujilipa.", meets: "Kila gharama imeorodheshwa, gharama kwa kila kipande ni sahihi, bei ina faida, na kuna kiasi maalum cha kujilipa kila wiki.", exceeds: "Bei imelinganishwa na wauzaji wa bidhaa kama hiyo, na kuna mpango gharama zikipanda." },
      { name: "Mpango wa muda na msaada", objective: "O4", notYet: "Hakuna mpango wa muda, au hakuna msaidizi aliyetajwa.", meets: "Mpango wa kila wiki wenye saa za biashara, kazi za matunzo na nani anasaidia, uliokubaliwa na angalau mtu mmoja.", exceeds: "Unajumuisha kupumzika na msaidizi wa akiba." },
      { name: "Fedha na msaada vimekaguliwa kwa usalama", objective: "O5", notYet: "Njia kutoka ujumbe uliotumwa na mtu mwingine au kwa mtu usiyemjua, au PIN imetolewa.", meets: "Njia moja imekaguliwa kwenye tovuti yake rasmi, pamoja na nani anaweza kuomba na tarehe ya kukagua; pesa zinabaki kwa jina lako.", exceeds: "Pia anaandika jumla ya kurudisha, lini, na masharti ya kuchelewa kwa mkopo wowote." },
      { name: "Malengo na mtandao", objective: "O6", notYet: "Malengo yasiyo wazi, au hakuna mshauri wala kikundi kilichotajwa.", meets: "Malengo matatu yenye namba na tarehe, na mshauri mmoja au kikundi cha kuwasiliana nacho.", exceeds: "Mawasiliano yamefanyika na ukaguzi wa kwanza wa kila mwezi umepangwa." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaoanzisha au kujaribu biashara, au kuongeza bidhaa, ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi wanaoripoti kujilipa kiasi maalum na kuweka kumbukumbu baada ya miezi mitatu",
      "Wanafunzi wanaofikia angalau lengo moja la miezi sita, na wasioripoti hasara yoyote kutokana na ulaghai wa ruzuku au mikopo"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Karatasi, kalamu na kikokotoo (kikokotoo cha simu kinafaa)",
      "Simu ya kukagua tovuti rasmi za mipango",
      "Vifaa vya kiasi kidogo cha bidhaa za jaribio (anachochagua mwanafunzi mwenyewe)",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi, pamoja na wiki moja au mbili za kufanya jaribio"
    ],
    facilitatorNotes: [
      "Endesha kozi pamoja na kikundi cha wanawake, kikundi cha akiba au chama cha ushirika; kutaneni wakati unaowafaa mama, na ruhusu watoto wachanga chumbani.",
      "Kabla ya kozi, kagua kwenye tovuti zao rasmi ni mipango gani ya wanawake na ya biashara ndogo iliyo wazi katika nchi yako, na uje na anwani zake.",
      "Usiwaombe wanafunzi kamwe kutaja PIN, salio au taarifa za akaunti. Fanyeni mazoezi ya kutambua ulaghai wa ruzuku na mikopo kwa ujumbe wa kubuni.",
      "Baadhi ya wanafunzi wanaweza kushinikizwa au pesa zao kudhibitiwa nyumbani; zungumzia jambo hili kwa uangalifu, faraghani, na ujue huduma za msaada kwa wanawake za eneo lako za kuwapeleka.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
