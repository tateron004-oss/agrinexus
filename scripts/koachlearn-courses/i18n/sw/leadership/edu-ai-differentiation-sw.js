"use strict";

// Koach Learn course (Swahili translation of leadership/edu-ai-differentiation.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "edu-ai-differentiation-sw",
  lang: "sw",
  translationOf: "edu-ai-differentiation",
  category: "Leadership Development",
  name: "Ufundishaji Tofauti kwa Msaada wa AI",
  skills: "Kuandika tathmini fupi ya awali, Kubuni kazi za ngazi tofauti, Kutengeneza ubao wa machaguo, Kupanga vikundi vinavyobadilika kwa ushahidi, Kuendesha darasa la ufundishaji tofauti, Kukagua usawa",
  outcome: "kutofautisha somo moja kwa msaada wa AI tangu mwanzo hadi mwisho: tathmini fupi ya awali, kazi tatu za ngazi tofauti zenye lengo moja, ubao wa machaguo, na mpango wa vikundi vinavyobadilika unaotokana na ushahidi, vyote vikiwa vimekaguliwa kwa usahihi na usawa.",
  about: [
    "Kozi hii ni kwa walimu wa darasani, wakufunzi wa walimu na viongozi wa shule wanaotaka kila mwanafunzi afikie malengo ya darasa lake kwa njia tofauti. Ufundishaji tofauti umekuwa mgumu siku zote kwa sababu unachukua muda kutengeneza matoleo kadhaa ya kila kitu. AI inaweza kutengeneza matoleo hayo; mwalimu bado ndiye anayeamua nani anahitaji nini na kwa nini.",
    "Sura ya 1 inatengeneza vifaa: tathmini ya awali, kazi za ngazi tofauti na ubao wa machaguo. Sura ya 2 inahusu kuvitumia: kupanga wanafunzi katika vikundi vinavyobadilika kwa ushahidi, kuendesha darasa la ufundishaji tofauti, na kuhakikisha ufundishaji tofauti unafungua milango badala ya kuwafungia wanafunzi katika ngazi za chini.",
    "Usiweke kamwe majina ya wanafunzi, alama zao au taarifa nyingine zinazowatambulisha katika zana ambayo wilaya yako haijaidhinisha; tumia data za kubuni kufanya mazoezi. Jaribio la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Tofautisha somo moja halisi: andika tathmini ya awali ya maswali matano yenye majibu, kazi tatu za ngazi tofauti zote zikifikia lengo moja (msaada zaidi, kiwango cha darasa, upanuzi), ubao wa machaguo wa miraba tisa kwa mazoezi, na mpango wa vikundi unaotokana na matokeo ya tathmini ya awali ya darasa la kubuni (bila majina halisi). Kagua kila kazi kwa usahihi na usawa, na uandike jinsi na lini wanafunzi watahama kati ya vikundi.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Walimu wa darasani, wakufunzi wa walimu na viongozi wa shule wanaotaka kila mwanafunzi afikie malengo ya darasa lake kwa njia tofauti, na wanaoanza kutumia AI kuokoa muda wa maandalizi.",
    startingPoint: "Wanaweza kupanga na kufundisha somo kwa darasa zima na kutoa jaribio. Baadhi wamejaribu msaidizi wa AI kwa karatasi za mazoezi. Wachache wana utaratibu wa kutengeneza haraka kazi za ngazi tofauti, ubao wa machaguo au vikundi vinavyobadilika.",
    gap: "Kutengeneza matoleo kadhaa ya kila kazi kunachukua muda zaidi kuliko walimu wengi walio nao, kwa hiyo ufundishaji tofauti mara nyingi unarukwa au unageuka kuwa vikundi vya kudumu vya \"chini\" na \"juu\". Walimu wanahitaji kutumia AI kutengeneza matoleo huku wao wakibaki na maamuzi, wakilinda faragha ya wanafunzi na wakiweka matarajio ya juu kwa kila mwanafunzi.",
    constraints: [
      "Muda: masomo mafupi yanayoingia katika kipindi cha maandalizi",
      "Vifaa: kompyuta ya shule au kompyuta mpakato yenye msaidizi wa AI unaoruhusiwa na wilaya",
      "Faragha: hakuna majina ya wanafunzi, alama au taarifa za kuwatambulisha katika zana ambazo wilaya haijaidhinisha; mazoezi yanatumia data za kubuni",
      "Marekebisho ya lazima ya IEP na 504 lazima bado yatolewe katika kila toleo",
      "Kila kazi iliyotengenezwa na AI lazima ikaguliwe na mwalimu kwa usahihi na usawa kabla ya kutumika"
    ],
    prerequisites: "Hakuna. Walimu ambao ni wapya kwa zana za AI wanaweza kutaka kuanza na kozi ya utangulizi wa AI."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa kazi moja unayofundisha", action: "kueleza ufundishaji tofauti kwa utayari, mapendeleo na mtindo wa kujifunza, na kueleza AI inafanya nini na mwalimu anaamua nini", standard: "huku lengo la kujifunza likibaki lile lile katika kila toleo" },
    { id: "O2", condition: "Ukipewa lengo moja la kujifunza na msaidizi wa AI", action: "kutengeneza tathmini ya awali ya maswali matano yenye majibu na kazi tatu za ngazi tofauti", standard: "ngazi zote tatu zikifanyia mazoezi lengo lile lile" },
    { id: "O3", condition: "Ukipewa ujuzi mmoja wa kufanyia mazoezi", action: "kutengeneza ubao wa machaguo wa miraba tisa wenye mraba wa lazima", standard: "kila mraba ukifanyia mazoezi ujuzi huo na kuchukua muda unaokaribiana" },
    { id: "O4", condition: "Ukipewa matokeo ya tathmini ya awali ya darasa la kubuni", action: "kupanga wanafunzi katika vikundi kwa ushahidi na kuandika lini na jinsi wanavyohama kati ya vikundi", standard: "ukitumia namba za siri badala ya majina na bila vikundi vya kudumu" },
    { id: "O5", condition: "Unapopanga somo la ufundishaji tofauti", action: "kupanga taratibu, kadi za kazi na mgawanyo wa muda wa darasa", standard: "ukieleza jinsi wanafunzi wanavyopata kazi yao, wafanye nini wakikwama na wafanye nini wakimaliza" },
    { id: "O6", condition: "Ukipewa somo la ufundishaji tofauti lililokamilika", action: "kulikagua kwa lengo moja, uhamaji, mifumo ya mpangilio na ufikiaji, na kurekebisha chochote kinachoshindwa", standard: "likipita ukaguzi wote wanne wa usawa" }
  ],
  chapters: [
    {
      name: "Sura 1: Kutengeneza vifaa vya ufundishaji tofauti",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ufundishaji tofauti kwa dakika moja, na AI inaposaidia",
          minutes: 5,
          goal: "Eleza ufundishaji tofauti kwa utayari, mapendeleo na mtindo wa kujifunza, na utaje kazi ya AI.",
          text: [
            "Ufundishaji tofauti ni kurekebisha njia ambayo wanafunzi wanafikia lengo lile lile la kujifunza. Walimu kwa kawaida hutofautisha kwa utayari (kile mwanafunzi anachojua tayari na anachoweza kufanya), mapendeleo (kile kinachomvutia) na mtindo wa kujifunza (kwa mfano kusoma, kujadili, kuchora au kujenga). Lengo linabaki lile lile; njia inabadilika.",
            "AI inasaidia sehemu inayochukua muda: kutengeneza matoleo kadhaa ya kazi, mifano inayolingana na mapendeleo, au mazoezi ya viwango mbalimbali. Inaweza kugeuza seti moja ya maswali kuwa tatu, au usomaji mmoja kuwa matoleo kuhusu michezo, muziki na upishi yenye ujuzi ule ule.",
            "AI haiwajui wanafunzi wako. Mwalimu ndiye anayeamua lengo, anasoma ushahidi, anachagua nani apate njia ipi, na anakagua kila toleo kwa usahihi na usawa."
          ],
          words: [["Ufundishaji tofauti", "kurekebisha njia ambayo wanafunzi wanafikia lengo lile lile la kujifunza (kwa Kiingereza differentiation)."], ["Utayari", "kile mwanafunzi anachojua tayari na anachoweza kufanya katika ujuzi fulani."], ["Mtindo wa kujifunza", "njia ambayo mwanafunzi mara nyingi hujifunza vizuri, kama kujadili au kuchora."]],
          slides: [
            { title: "Lengo moja, njia tofauti", bullets: ["Utayari: wanachojua sasa", "Mapendeleo: kinachowavutia", "Mtindo wa kujifunza: jinsi wanavyofanya kazi vizuri zaidi"] },
            { title: "AI inatengeneza matoleo", bullets: ["Kazi moja kuwa ngazi tatu", "Ujuzi ule ule, mapendeleo tofauti", "Mazoezi ya viwango mbalimbali"] },
            { title: "Mwalimu anaamua", bullets: ["Lengo na ushahidi", "Nani apate njia ipi", "Ukaguzi wa usahihi na usawa"] }
          ],
          tryIt: "Chukua kazi moja unayofundisha. Iombe AI iiandike upya kwa njia tatu kwa mapendeleo tofauti (kwa mfano michezo, muziki, upishi) ikiwa na ujuzi ule ule. Kagua kwamba kila toleo linabaki na ujuzi huo.",
          youCanNow: "kueleza ufundishaji tofauti na kutumia AI kutengeneza matoleo ya kazi huku wewe ukifanya maamuzi.",
          quickCheck: [
            { objective: "O1", q: "Nini kinabadilika unapotofautisha somo?", options: ["Njia ambayo wanafunzi wanapitia kufikia lengo", "Lengo la kujifunza lenyewe", "Kiwango rasmi cha darasa", "Wanafunzi gani wanafanya mtihani wa mwisho"], answer: 0, why: "Katika ufundishaji tofauti lengo linabaki lile lile; njia tu ndiyo inabadilika." },
            { objective: "O1", q: "AI inageuza kazi yako ya kusoma kuwa toleo la michezo, toleo la muziki na toleo la upishi. Ungefanya nini baadaye?", options: ["Kuyagawa bila kuyasoma", "Kukagua kwamba kila toleo bado linafanyia mazoezi ujuzi ule ule", "Kumpa kila mwanafunzi toleo la michezo", "Kuiomba AI ichague mwanafunzi gani apate toleo lipi"], answer: 1, why: "AI inatengeneza matoleo, lakini mwalimu anayakagua na kuamua nani apate lipi." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Tathmini za awali na kazi za ngazi tofauti",
          minutes: 6,
          goal: "Andika tathmini fupi ya awali na kazi tatu za ngazi tofauti zenye lengo moja.",
          text: [
            "Anza na ushahidi. Iombe AI tathmini ya awali ya maswali matano kuhusu lengo: maswali mawili kuhusu ujuzi wa msingi unaohitajika kwanza, mawili kuhusu lengo lenyewe, na moja la changamoto. Omba majibu sahihi na maana ya kila jibu lisilo sahihi. Kagua kila swali.",
            "Kazi za ngazi tofauti zinafikia lengo lile lile kwa viwango tofauti vya msaada na ugumu. Prompt: \"Lengo: [bandika]. Andika kazi tatu. Ngazi 1: msaada zaidi (mfano uliotatuliwa, hatua, orodha ya maneno). Ngazi 2: kiwango cha darasa. Ngazi 3: upanuzi (kazi ngumu zaidi au ya kutumia ujuzi katika maisha halisi). Zote tatu lazima zifanyie mazoezi lengo. Weka majibu.\"",
            "Kagua kwamba Ngazi 1 si rahisi tu, bali ina msaada kuelekea lengo lile lile, na kwamba Ngazi 3 ina kina zaidi, si kazi nyingi zaidi tu. Wanafunzi wa kila ngazi wanapaswa kumaliza wakiwa wamefanyia mazoezi lengo."
          ],
          steps: ["Omba tathmini ya awali ya maswali matano yenye majibu.", "Kagua kila swali na majibu.", "Omba ngazi tatu zenye lengo lile lile.", "Ngazi 1 yenye msaada, si rahisi zaidi; Ngazi 3 yenye kina, si ndefu zaidi.", "Kagua majibu yote."],
          words: [["Tathmini ya awali", "jaribio fupi kabla ya kufundisha ili kuona wanafunzi wanajua nini tayari."], ["Kazi ya ngazi tofauti", "matoleo ya kazi yenye viwango tofauti vya msaada au ugumu, yakilenga lengo lile lile."], ["Kazi ya kuhamisha ujuzi", "kutumia ujuzi katika hali mpya, mara nyingi ya maisha halisi (kwa Kiingereza transfer task)."]],
          slides: [
            { title: "Anza na ushahidi", bullets: ["Maswali 5: ujuzi wa msingi, lengo, changamoto", "Majibu na maana ya majibu yasiyo sahihi"] },
            { title: "Ngazi tatu, lengo moja", bullets: ["Ngazi 1: msaada zaidi", "Ngazi 2: kiwango cha darasa", "Ngazi 3: upanuzi au kuhamisha ujuzi"] },
            { title: "Kagua ngazi", bullets: ["Ngazi 1 yenye msaada, si rahisi zaidi", "Ngazi 3 yenye kina, si ndefu zaidi", "Kila mtu anafanyia mazoezi lengo"] }
          ],
          tryIt: "Andika kwa msaada wa AI tathmini ya awali ya maswali matano na kazi tatu za ngazi tofauti kwa lengo moja. Kagua kwamba ngazi zote tatu zinafanyia mazoezi lengo lile lile.",
          youCanNow: "kutengeneza tathmini ya awali na kazi za ngazi tofauti zote zikifikia lengo lile lile.",
          quickCheck: [
            { objective: "O2", q: "Tathmini ya awali ya maswali matano kutoka somo hili inapaswa kuwa na nini?", options: ["Maswali matano ya changamoto", "Maswali matano kuhusu kipengele cha mwaka uliopita", "Maswali mawili ya ujuzi wa msingi, mawili kuhusu lengo na moja la changamoto", "Maswali tu ambayo wanafunzi watapata sahihi kwa uhakika"], answer: 2, why: "Mchanganyiko huu unaonyesha nani anahitaji msaada wa ujuzi wa msingi, nani yuko tayari na nani yuko tayari kwa zaidi." },
            { objective: "O2", q: "Kazi yako ya Ngazi 3 ni kazi ya Ngazi 2 yenye maswali mara mbili zaidi. Ungefanya nini?", options: ["Kuiacha, kwa sababu kazi nyingi ni ngumu zaidi", "Kuondoa Ngazi 3", "Kuipa kikundi cha msaada", "Kuibadilisha kwa kazi yenye kina zaidi, kama kutumia ujuzi katika hali mpya"], answer: 3, why: "Ngazi 3 inapaswa kuwa na kina zaidi, si kazi nyingi zaidi tu." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ubao wa machaguo",
          minutes: 5,
          goal: "Tengeneza kwa msaada wa AI ubao wa machaguo wa miraba tisa kwa mazoezi.",
          text: [
            "Ubao wa machaguo ni jedwali la shughuli, mara nyingi miraba tisa, zote zikifanyia mazoezi ujuzi ule ule kwa njia tofauti: kuandika, kuchora, kueleza kwa sauti, kutatua, kujenga, kumfundisha mtu. Wanafunzi wanachagua idadi fulani, kwa mfano tatu katika mstari mmoja.",
            "Prompt: \"Tengeneza ubao wa machaguo wa 3 kwa 3 kwa wanafunzi wa darasa la 6 wanaofanyia mazoezi [ujuzi]. Kila mraba ni njia tofauti ya kufanya mazoezi: kuandika, kuchora, kujadili, kutatua maswali, kubuni, maisha halisi. Kila mraba lazima ufanyie mazoezi ujuzi huo. Weka mraba wa lazima katikati.\"",
            "Kagua kwamba kila mraba kweli unafanyia mazoezi ujuzi huo na unachukua muda unaokaribiana, na kwamba vifaa vinapatikana. Machaguo yanaongeza hamu ya kushiriki; hayapaswi kamwe kuwa njia ya kukwepa sehemu ngumu."
          ],
          steps: ["Taja ujuzi na darasa.", "Omba ubao wa 3 kwa 3 wenye njia mbalimbali za mazoezi.", "Fanya mraba wa katikati kuwa wa lazima.", "Kagua kwamba kila mraba unafanyia mazoezi ujuzi huo na muda unakaribiana.", "Kagua kwamba vifaa vinapatikana."],
          words: [["Ubao wa machaguo", "jedwali la shughuli zinazofanyia mazoezi ujuzi ule ule kwa njia tofauti, ambalo wanafunzi wanachagua kutoka kwake (kwa Kiingereza choice board)."], ["Mraba wa lazima", "shughuli ambayo kila mwanafunzi anaikamilisha."]],
          slides: [
            { title: "Jedwali la njia za kufanya mazoezi", bullets: ["Kuandika, kuchora, kujadili, kutatua, kujenga", "Wanafunzi wanachagua, kwa mfano tatu katika mstari"] },
            { title: "Prompt", bullets: ["3 kwa 3, njia mbalimbali za mazoezi", "Kila mraba unafanyia mazoezi ujuzi", "Mraba wa lazima katikati"] },
            { title: "Kagua", bullets: ["Ujuzi ule ule, muda unaokaribiana", "Vifaa vinapatikana", "Machaguo, si kukwepa"] }
          ],
          tryIt: "Tengeneza kwa msaada wa AI ubao wa machaguo wa 3 kwa 3 kwa ujuzi mmoja. Kagua kila mraba na ubadilishe yoyote isiyofanyia mazoezi ujuzi huo.",
          youCanNow: "kutengeneza ubao wa machaguo unaotoa machaguo halisi huku ukifanyia mazoezi ujuzi ule ule.",
          quickCheck: [
            { objective: "O3", q: "Ubao wa machaguo ni nini?", options: ["Jedwali la shughuli zote zikifanyia mazoezi ujuzi ule ule kwa njia tofauti", "Orodha ya mada tofauti ambazo wanafunzi wanaweza kuruka", "Mpangilio wa viti", "Ubao ambapo wanafunzi wanapigia kura kazi ya nyumbani"], answer: 0, why: "Kila mraba unafanyia mazoezi ujuzi ule ule; njia ya kufanya mazoezi tu ndiyo inabadilika." },
            { objective: "O3", q: "Mraba mmoja kwenye ubao wa machaguo uliotengenezwa na AI unawaambia wanafunzi wachore mnyama wanayempenda, jambo lisilofanyia mazoezi ujuzi huo. Ungefanya nini?", options: ["Kuuacha ili wanafunzi wawe na chaguo la kufurahisha", "Kuufanya mraba wa lazima", "Kuubadilisha kwa mraba unaofanyia mazoezi ujuzi huo", "Kuondoa ubao wote"], answer: 2, why: "Machaguo hayapaswi kamwe kuwa njia ya kukwepa ujuzi." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kutengeneza vifaa vya ufundishaji tofauti",
        questions: [
          { objective: "O1", q: "Katika ufundishaji tofauti, nini kinabaki kile kile?", options: ["Njia", "Vifaa", "Lengo la kujifunza", "Kikundi"], answer: 2, why: "Lengo linabaki; njia inabadilika." },
          { objective: "O1", q: "AI HAIJUI nini inaposaidia ufundishaji tofauti?", options: ["Wanafunzi wako", "Jinsi ya kuandika upya kazi", "Jinsi ya kutengeneza ngazi tatu", "Mapendeleo ya kawaida"], answer: 0, why: "Walimu wanawajua wanafunzi na wanaamua njia." },
          { objective: "O2", q: "Kazi nzuri ya Ngazi 1 ni:", options: ["Ujuzi mwingine rahisi zaidi", "Kuruka lengo", "Kupaka rangi tu", "Yenye msaada kuelekea lengo lile lile"], answer: 3, why: "Msaada, si lengo la chini." },
          { objective: "O2", q: "Kazi nzuri ya Ngazi 3 ni:", options: ["Maswali mengi zaidi ya aina ile ile", "Yenye kina zaidi, kama kazi ya kuhamisha ujuzi", "Ya hiari", "Fupi zaidi"], answer: 1, why: "Upanuzi unamaanisha kina, si wingi." },
          { objective: "O3", q: "Kila mraba kwenye ubao wa machaguo unapaswa:", options: ["Kuhitaji vifaa maalum", "Kuwa mchezo", "Kuchukua muda tofauti sana", "Kufanyia mazoezi ujuzi ule ule"], answer: 3, why: "Chaguo la njia, ujuzi ule ule." }
        ]
      }
    },
    {
      name: "Sura 2: Kutumia ufundishaji tofauti vizuri",
      lessons: [
        {
          objectives: ["O4"],
          title: "Vikundi vinavyobadilika kutokana na ushahidi",
          minutes: 6,
          goal: "Panga wanafunzi katika vikundi kutokana na ushahidi wa tathmini ya awali na upange jinsi wanavyohama.",
          text: [
            "Vikundi vinavyobadilika hubadilika mara nyingi, kutokana na ushahidi wa sasa kuhusu ujuzi fulani, si kutokana na lebo. Baada ya tathmini ya awali, panga matokeo katika vikundi kwa lengo hili: wanaohitaji msaada wa ujuzi wa msingi, walio tayari kwa lengo, walio tayari kwa upanuzi.",
            "AI inaweza kukusaidia kuona mifumo, lakini alama za wanafunzi pamoja na majina yao ni rekodi za elimu. Ama upange mwenyewe katika daftari lako la alama, tumia zana iliyoidhinishwa na wilaya, au badilisha majina kwa namba za siri kabla ya kutumia AI. Fanya mazoezi na darasa la kubuni.",
            "Panga uhamaji: baada ya kila ukaguzi (tiketi ya kutoka, swali la bawaba), wanafunzi wanahamia kikundi kinachowafaa sasa. Andika lini utakagua tena na jinsi mwanafunzi anavyopanda. Vikundi visivyobadilika kamwe vinakuwa ufungiaji wa ngazi (tracking)."
          ],
          steps: ["Panga matokeo ya tathmini ya awali kwa ujuzi, si kwa lebo.", "Tumia daftari lako la alama au zana iliyoidhinishwa; kamwe majina katika zana zisizoidhinishwa.", "Unda vikundi vitatu kwa lengo hili.", "Panga ukaguzi wa marudio baada ya kila somo.", "Hamisha wanafunzi ushahidi unapobadilika."],
          words: [["Vikundi vinavyobadilika", "kupanga wanafunzi kwa ushahidi wa sasa kuhusu ujuzi, na kubadilisha mara nyingi (kwa Kiingereza flexible grouping)."], ["Tracking", "kuwaweka wanafunzi katika kikundi cha ngazi ile ile kwa muda mrefu, jambo linaloweza kupunguza nafasi zao."]],
          slides: [
            { title: "Vikundi kutokana na ushahidi", bullets: ["Kwa ujuzi wa sasa, si kwa lebo", "Msaada wa ujuzi wa msingi, walio tayari, upanuzi"] },
            { title: "Linda data za wanafunzi", bullets: ["Alama zenye majina ni rekodi za elimu", "Daftari la alama au zana iliyoidhinishwa", "Au namba za siri, si majina"] },
            { title: "Vikundi viendelee kubadilika", bullets: ["Kagua tena baada ya kila somo", "Wanafunzi wanahama ushahidi unapobadilika", "Vikundi vya kudumu vinakuwa tracking"] }
          ],
          sources: [{ name: "FERPA: Kulinda Faragha ya Wanafunzi (Marekani)", url: "https://studentprivacy.ed.gov/ferpa" }],
          tryIt: "Buni matokeo ya tathmini ya awali kwa wanafunzi 24 ukitumia namba za siri (S1 hadi S24). Unda vikundi vitatu kwa lengo na uandike lini na jinsi wanafunzi watahama kati yao.",
          youCanNow: "kupanga wanafunzi katika vikundi vinavyobadilika kutokana na ushahidi na kuhakikisha vikundi vinaendelea kubadilika.",
          quickCheck: [
            { objective: "O4", q: "Nini kinafanya kikundi kiwe \"kinachobadilika\"?", options: ["Wanafunzi wanachagua kikundi chochote wanachotaka", "Kinabadilika mara nyingi, kutokana na ushahidi wa sasa kuhusu ujuzi", "Kinabaki kile kile mwaka mzima", "Kinatokana na lebo ya mwanafunzi"], answer: 1, why: "Vikundi vinavyobadilika vinafuata ushahidi wa sasa na vinabadilika wanafunzi wanapojifunza." },
            { objective: "O4", q: "Unataka AI ikusaidie kuona mifumo katika alama za tathmini ya awali za darasa lako. Ungefanya nini kwanza?", options: ["Kubandika daftari la alama lenye majina", "Kumtumia mwenzako alama kwa barua pepe", "Kubandika alama ukutani", "Kubadilisha majina kwa namba za siri kama S1, au kutumia zana iliyoidhinishwa na wilaya"], answer: 3, why: "Alama za wanafunzi zenye majina ni rekodi za elimu, kwa hiyo zilinde kabla ya kutumia AI." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kuendesha darasa la ufundishaji tofauti",
          minutes: 5,
          goal: "Panga taratibu zinazofanya somo la ufundishaji tofauti lifanye kazi darasani.",
          text: [
            "Masomo ya ufundishaji tofauti hushindwa zaidi kwa sababu ya mpangilio kuliko kwa sababu ya vifaa. Panga taratibu: jinsi wanafunzi wanavyojua kazi yao (slaidi au kadi yenye majina au rangi za vikundi), vifaa viko wapi, wafanye nini wakikwama (\"waulize wenzako watatu kabla yangu\", kadi ya msaada), na wafanye nini wakimaliza (ubao wa machaguo).",
            "Panga muda wako: anza na somo fupi kwa darasa zima, kisha kaa na kikundi kinachokuhitaji zaidi huku wengine wakifanya kazi, kisha pita kwa kila kikundi. AI inaweza kuandika rasimu za kadi za kazi, kadi za msaada na mpango wa muda.",
            "Fanya ionekane kawaida. Tumia majina ya vikundi yasiyo na upande (rangi au maumbo, si \"chini\" na \"juu\"), badilisha vikundi mara nyingi, na kila kikundi kipate kazi ya kuvutia. Wanafunzi wanaona kikundi kimoja kinapopata kazi zisizovutia kila wakati."
          ],
          steps: ["Onyesha kila kikundi kazi yake waziwazi.", "Weka taratibu za vifaa, za kukwama na za kumaliza.", "Somo fupi, kisha muda wa mwalimu na kikundi chenye uhitaji zaidi.", "Pita kwa kila kikundi.", "Tumia majina yasiyo na upande na kazi ya kuvutia kwa wote."],
          words: [["Utaratibu", "njia ya kawaida ya kufanya jambo ambayo wanafunzi wanajifunza na kuifuata."], ["Ufundishaji wa kikundi kidogo", "mwalimu kufundisha wanafunzi wachache kwa pamoja huku wengine wakifanya kazi."]],
          slides: [
            { title: "Mpangilio huamua mafanikio", bullets: ["Kadi za kazi zilizo wazi", "Taratibu za vifaa, za kukwama na za kumaliza"] },
            { title: "Panga muda wako", bullets: ["Somo fupi kwa darasa zima", "Kaa na kikundi kinachokuhitaji zaidi", "Pita kwa kila kikundi"] },
            { title: "Fanya ionekane kawaida", bullets: ["Majina ya vikundi yasiyo na upande", "Vikundi vinabadilika mara nyingi", "Kazi ya kuvutia kwa kila kikundi"] }
          ],
          tryIt: "Tumia AI kuandika rasimu za kadi za kazi kwa ngazi zako tatu, kadi ya msaada kwa wanafunzi wanapokwama, na mpango wa muda kwa kipindi cha dakika 50.",
          youCanNow: "kuendesha somo la ufundishaji tofauti lenye taratibu zilizo wazi na mpangilio wa vikundi ulio wa haki.",
          quickCheck: [
            { objective: "O5", q: "Kwa nini masomo ya ufundishaji tofauti mara nyingi hushindwa?", options: ["Mpangilio na taratibu", "Karatasi za mazoezi chache mno", "Wanafunzi hawapendi machaguo", "AI inatengeneza matoleo mengi mno"], answer: 0, why: "Somo linasema hushindwa zaidi kwa sababu ya mpangilio kuliko kwa sababu ya vifaa." },
            { objective: "O5", q: "Wanafunzi wanamaliza kazi ya ngazi yao dakika kumi mapema. Mpango wako unapaswa kuwaambia wafanye nini?", options: ["Wasubiri kimya", "Waanze kazi ya ngazi inayofuata", "Waende kwenye ubao wa machaguo", "Wajiunge na kikundi cha mwalimu"], answer: 2, why: "Mpango unapaswa kusema wafanye nini wakimaliza, kama ubao wa machaguo." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kukagua usawa wa ufundishaji tofauti",
          minutes: 6,
          goal: "Kagua kwamba ufundishaji tofauti unafungua milango badala ya kushusha matarajio.",
          text: [
            "Ufundishaji tofauti unaweza kugeuka kimya kimya kuwa matarajio ya chini: baadhi ya wanafunzi wanapata kazi rahisi kila wakati na hawafikii kamwe lengo la darasa lao. Kagua mambo manne. Lengo moja: je, kila mwanafunzi anafanyia mazoezi lengo la darasa? Uhamaji: je, wanafunzi walibadilisha vikundi katika kipindi cha mada?",
            "Mifumo: angalia (ukilinda faragha) nani anaishia katika kila kikundi kwa muda. Ikiwa wanafunzi wa asili moja, wanafunzi wanaojifunza Kiingereza au wanafunzi wenye ulemavu wako kila wakati katika kikundi cha msaada, uliza kwa nini. Ufikiaji: je, misaada kama kusomewa kwa sauti au picha inamfikia kila mwanafunzi anayeihitaji, pamoja na marekebisho ya lazima ya IEP na 504?",
            "Vifaa vya AI vinahitaji ukaguzi ule ule: je, mifano na majina ni mbalimbali na ya heshima, bila dhana potofu kuhusu nani ni hodari katika nini? Viongozi wanaweza kuziomba timu kuleta somo moja la ufundishaji tofauti kwenye kikao na kufanya ukaguzi huu pamoja."
          ],
          steps: ["Lengo moja kwa kila ngazi?", "Je, wanafunzi walihama kati ya vikundi?", "Nani yuko kila wakati katika kikundi gani, na kwa nini?", "Je, misaada na marekebisho ya lazima yanamfikia kila mtu?", "Je, mifano ya AI ni mbalimbali na bila dhana potofu?"],
          words: [["Matarajio", "kile walimu wanachoamini wanafunzi wanaweza kufikia, jambo linaloathiri kile wanachofundishwa."], ["Dhana potofu", "wazo lisilo la haki na lisilobadilika kuhusu kundi la watu."]],
          slides: [
            { title: "Jihadhari na matarajio ya chini", bullets: ["Kila ngazi inafikia lengo la darasa", "Wanafunzi wanahama kati ya vikundi"] },
            { title: "Angalia mifumo", bullets: ["Nani yuko kila wakati katika kikundi cha msaada?", "Wanaojifunza Kiingereza, ulemavu, asili", "Uliza kwa nini"] },
            { title: "Ufikiaji na maudhui", bullets: ["Misaada na marekebisho yanamfikia kila mtu", "Mifano ya AI ni mbalimbali, bila dhana potofu"] }
          ],
          tryIt: "Kazi ya mwisho: kusanya somo lako la ufundishaji tofauti (tathmini ya awali yenye majibu, ngazi tatu, ubao wa machaguo, mpango wa vikundi kutoka data za kubuni wenye kanuni za kuhama), kisha lifanyie ukaguzi wanne wa usawa na urekebishe chochote kinachoshindwa.",
          youCanNow: "kutofautisha masomo kwa msaada wa AI kwa njia inayoweka matarajio ya juu kwa kila mwanafunzi.",
          quickCheck: [
            { objective: "O6", q: "Ukaguzi wa usawa wa \"lengo moja\" unauliza nini?", options: ["Je, vikundi vyote vinapata karatasi ile ile?", "Je, kila mwanafunzi anafanyia mazoezi lengo la darasa?", "Je, vikundi vyote vinamaliza wakati mmoja?", "Je, wanafunzi wote wanapata alama ile ile?"], answer: 1, why: "Ufundishaji tofauti haupaswi kuwaacha baadhi ya wanafunzi mbali na lengo la darasa." },
            { objective: "O6", q: "Katika kipindi cha mada, wanafunzi wale wale wa asili moja wako kila wakati katika kikundi cha msaada. Ungefanya nini?", options: ["Kuwaacha hapo, kwa kuwa inafanya kazi", "Kuwahamishia upanuzi bila ushahidi", "Kuacha kutumia vikundi", "Kuuliza kwa nini, na kukagua kama mpangilio unaonyesha ujuzi au kitu kingine"], answer: 3, why: "Mfumo kama huu ni ishara ya onyo kwamba ufundishaji tofauti unageuka kuwa matarajio ya chini." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kutumia ufundishaji tofauti vizuri",
        questions: [
          { objective: "O4", q: "Vikundi vinavyobadilika vinatokana na:", options: ["Lebo ya mwaka uliopita", "Umaarufu wa mwanafunzi", "Ushahidi wa sasa kuhusu ujuzi fulani", "Mpangilio wa viti"], answer: 2, why: "Ushahidi kuhusu ujuzi wa sasa ndio unaoamua." },
          { objective: "O4", q: "Unataka AI ikusaidie kupanga matokeo ya tathmini ya awali. Nini ni salama?", options: ["Kutumia namba za siri badala ya majina, au zana iliyoidhinishwa", "Kubandika majina na alama katika zana ya bure", "Kuweka matokeo mtandaoni", "Kumtumia muuzaji kwa barua pepe"], answer: 0, why: "Alama zenye majina ni rekodi za elimu." },
          { objective: "O5", q: "Majina gani ya vikundi ni bora zaidi?", options: ["Chini, kati, juu", "Rangi au maumbo", "Werevu na wazito", "Alama za mitihani za wanafunzi"], answer: 1, why: "Majina yasiyo na upande yanaepuka kuwapa wanafunzi lebo." },
          { objective: "O6", q: "Wanafunzi wanaojifunza Kiingereza wako katika kikundi cha msaada katika kipindi chote cha mada. Unapaswa kufanya nini?", options: ["Kuuliza kwa nini na kukagua kama mpangilio unaonyesha lugha badala ya uelewa", "Hakuna", "Kuufanya wa kudumu", "Kuwaondoa darasani"], answer: 0, why: "Mifumo inaweza kuonyesha mpangilio usio wa haki." },
          { objective: "O4", q: "Hatari ya vikundi visivyobadilika kamwe ni ipi?", options: ["Hakuna", "Vinaokoa muda", "Vinaboresha kujifunza", "Vinakuwa tracking"], answer: 3, why: "Vikundi vya kudumu vinapunguza nafasi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Ufundishaji Tofauti kwa Msaada wa AI",
    questions: [
      { objective: "O1", q: "Ufundishaji tofauti unamaanisha:", options: ["Kutoa malengo tofauti", "Kurekebisha jinsi wanafunzi wanavyofikia lengo lile lile", "Madarasa tofauti", "Kazi kidogo kwa baadhi"], answer: 1, why: "Lengo moja, njia tofauti." },
      { objective: "O1", q: "Utayari unamaanisha:", options: ["Umri", "Kufika kwa wakati", "Kile mwanafunzi anachojua tayari na anachoweza kufanya", "Kasi ya kusoma tu"], answer: 2, why: "Unahusu ujuzi fulani." },
      { objective: "O1", q: "Matoleo yanayotokana na mapendeleo yanabaki na:", options: ["Hakuna ujuzi", "Ujuzi tofauti", "Ujuzi ule ule", "Mada tu"], answer: 2, why: "Muktadha unabadilika, si ujuzi." },
      { objective: "O1", q: "Nani anaamua mwanafunzi gani apate njia ipi?", options: ["Mwalimu", "AI", "Muuzaji", "Wazazi wa mwanafunzi peke yao"], answer: 0, why: "Walimu wanasoma ushahidi na kuamua." },
      { objective: "O2", q: "Tathmini ya awali inatolewa:", options: ["Kwa baadhi ya wanafunzi tu", "Mwishoni mwa mwaka", "Kamwe", "Kabla ya kufundisha"], answer: 3, why: "Inaonyesha wanafunzi wanaanzia wapi." },
      { objective: "O2", q: "Tathmini nzuri ya awali ina:", options: ["Maswali magumu zaidi tu", "Ujuzi wa msingi, lengo na swali la changamoto", "Maswali ya maoni tu", "Hakuna kitu kuhusu lengo"], answer: 1, why: "Inaonyesha upana wa utayari." },
      { objective: "O2", q: "Kazi za ngazi tofauti zinalenga:", options: ["Wanafunzi bora tu", "Malengo tofauti", "Hakuna lengo", "Lengo lile lile"], answer: 3, why: "Ngazi zinabadilisha msaada na ugumu, si lengo." },
      { objective: "O2", q: "Kazi ya kuhamisha ujuzi:", options: ["Inanakili jibu", "Inamhamisha mwanafunzi shule nyingine", "Inatumia ujuzi katika hali mpya", "Ni kurudia mtihani"], answer: 2, why: "Inaongeza kina cha kujifunza." },
      { objective: "O3", q: "Ubao wa machaguo kwa kawaida una:", options: ["Miraba tisa ya shughuli za ujuzi ule ule", "Shughuli moja", "Michezo tu", "Alama"], answer: 0, why: "Jedwali la njia za kufanya mazoezi." },
      { objective: "O3", q: "Mraba wa lazima kwenye ubao wa machaguo:", options: ["Ni wa hiari", "Unakamilishwa na kila mwanafunzi", "Ni wa mwalimu", "Ni wa wanafunzi wa juu tu"], answer: 1, why: "Unahakikisha mazoezi ya msingi." },
      { objective: "O3", q: "Miraba ya ubao wa machaguo inapaswa kuchukua:", options: ["Muda unaokaribiana", "Muda tofauti sana", "Hakuna muda", "Muda wa kazi ya nyumbani tu"], answer: 0, why: "Chaguo la haki linahitaji juhudi zinazofanana." },
      { objective: "O4", q: "Alama za wanafunzi pamoja na majina yao ni:", options: ["Mali ya kampuni za AI", "Za umma", "Salama katika app yoyote", "Rekodi za elimu zinazolindwa na FERPA"], answer: 3, why: "Zilinde." },
      { objective: "O4", q: "Kubadilisha majina kwa namba za siri kama S1 kunasaidia:", options: ["Kusahihisha haraka zaidi", "Kulinda faragha ya wanafunzi unapofanya mazoezi na AI", "Kuficha alama kutoka kwa walimu", "Hakuna kitu"], answer: 1, why: "Namba za siri zinaondoa majina yanayotambulisha." },
      { objective: "O4", q: "Wanafunzi wanapaswa kuhama kati ya vikundi:", options: ["Mwishoni mwa mwaka tu", "Kamwe", "Ushahidi mpya unapoonyesha mabadiliko", "Bila mpangilio"], answer: 2, why: "Kubadilika kunamaanisha kubadilika pamoja na ushahidi." },
      { objective: "O5", q: "Masomo ya ufundishaji tofauti mara nyingi hushindwa kwa sababu ya:", options: ["Madarasa yenye mwanga", "Mawazo mengi mno", "Mpangilio na taratibu", "Majina mafupi"], answer: 2, why: "Taratibu ndizo zinazoyafanya yafanye kazi." },
      { objective: "O5", q: "\"Waulize wenzako watatu kabla yangu\" ni utaratibu wa:", options: ["Wanafunzi wanapokwama", "Wanafunzi wanapomaliza", "Kupanga mstari", "Chakula cha mchana"], answer: 0, why: "Unajenga uwezo wa kujitegemea." },
      { objective: "O5", q: "Wakati wa kazi za vikundi, mwalimu anapaswa kwanza kukaa na:", options: ["Mkuu wa shule", "Hakuna mtu", "Kikundi cha upanuzi tu", "Kikundi kinachomhitaji zaidi"], answer: 3, why: "Muda wa mwalimu unaenda mahali unapohitajika zaidi." },
      { objective: "O6", q: "Ufundishaji tofauti unakuwa matarajio ya chini wakati:", options: ["Kila ngazi inafikia lengo", "Baadhi ya wanafunzi hawafanyii mazoezi kamwe lengo la darasa", "Vikundi vinabadilika mara nyingi", "Misaada inatolewa"], answer: 1, why: "Wanafunzi wote wanahitaji lengo la darasa." },
      { objective: "O6", q: "Marekebisho ya lazima ya IEP na 504 katika somo la ufundishaji tofauti:", options: ["Yanahusu mitihani tu", "Yanabadilishwa na ngazi", "Ni ya hiari", "Bado lazima yatolewe"], answer: 3, why: "Ni ya lazima." },
      { objective: "O6", q: "Mifano iliyotengenezwa na AI inapaswa kukaguliwa kwa:", options: ["Urefu tu", "Ukubwa wa herufi tu", "Utofauti na dhana potofu", "Hakuna kitu"], answer: 2, why: "Vifaa vinapaswa kuwa vya haki na vya heshima." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      4,
      6,
      8,
      11,
      13,
      14,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Tathmini ya awali",
        objective: "O2",
        notYet: "Maswali chini ya matano, hakuna majibu, au hakuna uhusiano na lengo.",
        meets: "Maswali matano (ujuzi wa msingi, lengo, changamoto) yenye majibu.",
        exceeds: "Majibu pia yanaeleza kila jibu lisilo sahihi linaonyesha nini."
      },
      {
        name: "Kazi za ngazi tofauti",
        objective: "O2",
        notYet: "Ngazi zinafanyia mazoezi malengo tofauti, au Ngazi 3 ni kazi nyingi zaidi tu.",
        meets: "Ngazi tatu (msaada zaidi, kiwango cha darasa, upanuzi) zote zinafanyia mazoezi lengo lile lile, zikiwa na majibu.",
        exceeds: "Ngazi 1 ina misaada iliyo wazi na Ngazi 3 ni kazi halisi ya kuhamisha ujuzi."
      },
      {
        name: "Ubao wa machaguo",
        objective: "O3",
        notYet: "Baadhi ya miraba haifanyii mazoezi ujuzi huo.",
        meets: "Miraba tisa yote ikifanyia mazoezi ujuzi huo, na mraba wa lazima katikati.",
        exceeds: "Miraba inachukua muda unaokaribiana na inatumia njia tofauti za kufanya kazi."
      },
      {
        name: "Mpango wa vikundi",
        objective: "O4",
        notYet: "Unatumia majina halisi, au vikundi havibadiliki.",
        meets: "Vikundi vinatokana na matokeo ya kubuni yenye namba za siri, na mpango unasema lini na jinsi wanafunzi wanavyohama.",
        exceeds: "Unataja ukaguzi wa marudio, kama tiketi ya kutoka, unaowahamisha wanafunzi."
      },
      {
        name: "Ukaguzi wa usawa",
        objective: "O6",
        notYet: "Ukaguzi wa usawa haukufanyika.",
        meets: "Ukaguzi wote wanne (lengo moja, uhamaji, mifumo, ufikiaji) ulifanyika na yaliyoshindwa yalirekebishwa.",
        exceeds: "Anaweza kusema nini kilibadilika kwa sababu ya ukaguzi."
      }
    ]
  },
  evaluation: {
    results: [
      "Walimu wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Walimu wanaofundisha angalau somo moja la ufundishaji tofauti ndani ya siku 30 (utafiti wa kufuatilia)",
      "Muda wa maandalizi ambao walimu wanaripoti kuokoa katika kutengeneza matoleo ya kazi",
      "Shule ambapo viongozi wanafanya ukaguzi wa usawa pamoja na timu"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta yenye msaidizi wa AI unaoruhusiwa na wilaya yako",
      "Lengo moja halisi la somo unalofundisha",
      "Orodha ya darasa la kubuni yenye namba za siri (S1 hadi S24)",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Iendeshe kama kipindi cha mafunzo kazini: fanyeni jaribio la awali pamoja, kisha walimu walete somo moja watakalofundisha hivi karibuni.",
      "Usiwaruhusu kamwe washiriki kubandika majina au alama halisi za wanafunzi katika AI; wape darasa la kubuni lenye namba za siri.",
      "Unganisha walimu wa darasa moja au somo moja ili wakague ngazi za wenzao.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati.",
      "Viongozi wanaweza kumalizia kwa kufanya ukaguzi wanne wa usawa pamoja kwenye somo moja la pamoja."
    ]
  }
};
