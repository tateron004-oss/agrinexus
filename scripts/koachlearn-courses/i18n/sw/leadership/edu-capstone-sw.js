"use strict";

// Koach Learn course (Swahili translation of leadership/edu-capstone.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "edu-capstone-sw",
  lang: "sw",
  translationOf: "edu-capstone",
  category: "Leadership Development",
  name: "AI kwa Viongozi wa Shule na Elimu 8: Mradi wa Mwisho wa Kuhitimisha",
  skills: "Kuchagua tatizo linalowahusu wanafunzi, Kusanifu majaribio madogo ya AI, Kukagua faragha na usawa, Kupanga mafunzo ya wafanyakazi, Kuwasiliana na familia, Kuweka vipimo vya mafanikio na kuwasilisha kwa uongozi",
  outcome: "kusanifu mpango kamili wa majaribio ya AI kwa shule au wilaya yako, ulio tayari kuwasilishwa: tatizo halisi, majaribio madogo yenye zana iliyokaguliwa, ukaguzi wa faragha na usawa, mpango wa mafunzo ya wafanyakazi, barua kwa familia, vipimo vya mafanikio na kanuni ya uamuzi, na kuuwasilisha kwa dakika kumi kwa timu ya uongozi au bodi.",
  about: [
    "Hii ni kozi ya mwisho ya AI kwa Viongozi wa Shule na Elimu. Unaunganisha yote kutoka kozi ya 1 hadi 7, yaani misingi, zana, upangaji, upimaji, ujuzi wa AI kwa wanafunzi, tija na matumizi ya kuwajibika, kuwa mpango mmoja ambao unaweza kuutekeleza kweli.",
    "Sura ya 1 inasanifu majaribio: tatizo linalostahili kutatuliwa, ukubwa wa majaribio na zana, na ukaguzi wa faragha na usawa. Sura ya 2 inaandaa watu na ushahidi: mafunzo ya wafanyakazi, mawasiliano na familia, vipimo vya mafanikio, na uwasilishaji.",
    "Chagua majaribio ambayo una mamlaka ya kuyapendekeza, au utakayoyapendekeza kwa mtu mwenye mamlaka hayo. Tumia miongozo uliyoandika katika kozi ya 7. Jaribio la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Kamilisha na uwasilishe mpango wako wa majaribio ya AI (kama kurasa nne): tatizo na linawahudumia nani, pamoja na ushahidi; ukubwa wa majaribio (nani, nini, kwa muda gani) na zana, pamoja na ukaguzi wa muuzaji wake; ukaguzi wa faragha na usawa (FERPA, COPPA kama wanafunzi wako chini ya miaka 13, ufikivu, upatikanaji); mpango wa mafunzo ya wafanyakazi; barua kwa familia na maswali na majibu mafupi; vipimo vitatu hadi vitano vya mafanikio vyenye kipimo cha mwanzo; na kanuni ya kuendelea, kurekebisha au kusimamisha. Uwasilishe kwa dakika kumi kwa timu ya uongozi, kikundi cha wenzako au bodi, na uandike maswali na majibu yako.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wakuu wa shule, viongozi wa wilaya, wakufunzi wa ufundishaji, wafanyakazi wa teknolojia na walimu viongozi wanaomaliza AI kwa Viongozi wa Shule na Elimu, ambao watapendekeza majaribio ya AI katika shule au wilaya yao.",
    startingPoint: "Wamemaliza kozi ya 1 hadi 7: misingi ya AI, kukagua zana, upangaji, upimaji, ujuzi wa AI kwa wanafunzi, tija, na miongozo iliyoandikwa ya matumizi ya AI kwa kuwajibika. Bado hawajasanifu majaribio kamili yenye vipimo, mafunzo na mawasiliano na familia.",
    gap: "Juhudi nyingi za AI shuleni zinaanza na zana badala ya tatizo, zinaruka ukaguzi wa faragha na usawa, na hazina njia ya kuamua kama zilifanikiwa. Viongozi wanahitaji mpango kamili na wa kweli wa majaribio wanaoweza kuuwasilisha na kuutekeleza, ili AI itumike tu pale inapowasaidia wanafunzi.",
    constraints: [
      "Majaribio lazima yawe yale ambayo mwanafunzi ana mamlaka ya kuyapendekeza, au atayapendekeza kwa mtu mwenye mamlaka hayo",
      "FERPA, COPPA kwa wanafunzi walio chini ya miaka 13, sera ya wilaya na sheria ya jimbo zinatumika; afisa wa faragha anaidhinisha",
      "Hakuna data halisi ya wanafunzi katika nyaraka za mpango; tumia ushahidi wa muhtasari",
      "Kanuni za fedha za serikali kuu zinabadilika, kwa hiyo wanafunzi wanakagua na ofisi yao ya programu za serikali kuu",
      "Muda: masomo mafupi, na mpango na uwasilishaji vinachukua vipindi kadhaa"
    ],
    prerequisites: "Kozi ya 1 hadi 7 za AI kwa Viongozi wa Shule na Elimu, hasa kozi ya 7 (\"Maadili, Usalama na AI ya Kuwajibika\")."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa changamoto katika shule yako", action: "kuandika maelezo ya tatizo linalowahusu wanafunzi pamoja na ushahidi", standard: "yakisema nini si sawa, kwa nani na kwa kiasi gani, na kama AI ndiyo jibu sahihi" },
    { id: "O2", condition: "Ukipewa tatizo lako", action: "kuweka ukubwa wa majaribio madogo na kuchagua zana inayopita ukaguzi wa muuzaji", standard: "ukitaja nani, nini kinabadilika na kwa muda gani, na zana ikichaguliwa baada ya ukubwa" },
    { id: "O3", condition: "Kabla majaribio hayajaanza", action: "kufanya ukaguzi wa faragha na usawa wenye kinga na mhusika kwa kila hatari", standard: "ukihusisha FERPA, COPPA kama wanafunzi wako chini ya miaka 13, ufikivu na upatikanaji, na kuidhinishwa na afisa wa faragha" },
    { id: "O4", condition: "Kwa wafanyakazi walio katika majaribio", action: "kupanga mafunzo ya vitendo, kanuni na msaada", standard: "ukiwa na ratiba ya mafunzo ya dakika 60, mtu wa kuwasiliana naye aliyetajwa, na maelezo ambayo walimu wataandika" },
    { id: "O5", condition: "Kwa familia za wanafunzi walio katika majaribio", action: "kuandika barua ya kweli kwa familia na maswali matano na majibu yake", standard: "isiyozidi ukurasa mmoja, iliyosomwa na mzazi au mratibu wa familia, na tafsiri zilizokaguliwa na wazungumzaji wenye sifa" },
    { id: "O6", condition: "Kwa mpango wako kamili wa majaribio", action: "kuweka vipimo vitatu hadi vitano vya mafanikio vyenye kipimo cha mwanzo na kanuni ya kuendelea, kurekebisha au kusimamisha, na kuwasilisha mpango", standard: "kwa dakika kumi, kanuni ikiwa imeandikwa kabla ya kuanza, na maswali na majibu yakiwa yameandikwa" }
  ],
  chapters: [
    {
      name: "Sura 1: Kusanifu majaribio",
      lessons: [
        {
          objectives: ["O1"],
          title: "Anza na tatizo linalowahusu wanafunzi",
          minutes: 5,
          goal: "Eleza tatizo ambalo majaribio yako yatatatua, pamoja na ushahidi na wanafunzi wanaohudumiwa.",
          text: [
            "Majaribio mazuri yanaanza na tatizo, si bidhaa. Uliza: nini kinazuia ujifunzaji au ustawi wa wanafunzi, au muda wa walimu na wanafunzi? Mifano: walimu wanatumia saa nyingi kila wiki kutafsiri ujumbe kwa familia; wanafunzi wa aljebra wa darasa la 9 wanahitaji mazoezi zaidi yenye maoni; walimu wapya wanapata shida kufundisha kulingana na mahitaji tofauti ya wanafunzi.",
            "Kusanya ushahidi: data uliyonayo tayari (ukilinda faragha), tafiti za walimu na wanafunzi, na mazungumzo. Andika tatizo kwa sentensi moja ukitaja nani anaathirika na kwa kiasi gani: \"Walimu wetu wa aljebra wa darasa la 9 wanasema wana chini ya dakika 10 kwa wiki kwa kila mwanafunzi kwa maoni binafsi, na asilimia 40 ya wanafunzi walishindwa mtihani wa kitengo cha kwanza.\"",
            "Kisha uliza kama AI ndiyo jibu sahihi kabisa. Wakati mwingine badiliko la ratiba, kiolezo au muda zaidi wa wafanyakazi kinatatua vizuri zaidi. AI ikifaa, sema hasa itafanya nini."
          ],
          steps: ["Orodhesha matatizo yanayozuia ujifunzaji, ustawi au muda wa walimu.", "Kusanya ushahidi: data, tafiti, mazungumzo.", "Andika tatizo kwa sentensi moja: nani, nini, kiasi gani.", "Uliza kama AI ndiyo jibu sahihi.", "Kama ndiyo, sema hasa AI itafanya nini."],
          words: [["Maelezo ya tatizo", "sentensi moja inayosema nini si sawa, kwa nani, na kwa kiasi gani."], ["Ushahidi", "data na uchunguzi vinavyoonyesha kuwa tatizo ni la kweli."]],
          slides: [
            { title: "Tatizo kwanza, bidhaa baadaye", bullets: ["Nini kinazuia ujifunzaji, ustawi au muda wa walimu?", "Tafsiri, mazoezi, kufundisha kwa mahitaji tofauti"] },
            { title: "Onyesha ushahidi", bullets: ["Data iliyopo, ukilinda faragha", "Tafiti na mazungumzo", "Sentensi moja: nani, nini, kiasi gani"] },
            { title: "Je, AI ndiyo jibu?", bullets: ["Wakati mwingine ratiba au kiolezo ni bora zaidi", "AI ikifaa, sema hasa inachofanya"] }
          ],
          tryIt: "Andika maelezo ya tatizo lako kwa sentensi moja pamoja na ushahidi, na sentensi moja kuhusu hasa AI ingefanya nini juu yake, au kwa nini kitu kingine kingefanya kazi vizuri zaidi.",
          youCanNow: "kueleza tatizo linalowahusu wanafunzi pamoja na ushahidi kabla ya kuchagua zana yoyote ya AI.",
          quickCheck: [
            { objective: "O1", q: "Maelezo ya tatizo yanasema nini?", options: ["Zana ipi ya AI unataka kununua", "Nini si sawa, kwa nani, na kwa kiasi gani", "Majaribio yatagharimu kiasi gani", "Nani atawasilisha mpango"], answer: 1, why: "Maelezo ya tatizo yaliyo wazi yanaweka majaribio kwa wanafunzi, si kwa zana." },
            { objective: "O1", q: "Muuzaji anaipa shule yako zana ya AI ya bure. Ungefanya nini kwanza?", options: ["Kuanza kuitumia, kwa kuwa ni bure", "Kuchagua tatizo ambalo huenda itatatua baadaye", "Kueleza tatizo la wanafunzi na kuuliza kama AI ndiyo jibu sahihi kabisa", "Kuwaomba wanafunzi waijaribu nyumbani"], answer: 2, why: "Majaribio mazuri yanaanza na tatizo linalowahusu wanafunzi, si na zana." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kuweka ukubwa wa majaribio na kuchagua zana",
          minutes: 6,
          goal: "Weka ukubwa mdogo na wazi wa majaribio na uchague zana inayopita ukaguzi wa muuzaji.",
          text: [
            "Yaweke madogo: walimu wachache au darasa moja au somo moja, kwa wiki sita hadi kumi na mbili. Majaribio madogo ni rahisi kusaidia, kupima na kusimamisha ikihitajika. Andika nani anashiriki, watafanya nini tofauti, na lini.",
            "Chagua zana mwisho. Pendelea zana ambazo tayari zimeidhinishwa katika wilaya yako, au zinazopita ukaguzi wa muuzaji kutoka kozi ya 7 (orodha ya Model Terms of Service pamoja na maswali ya AI kuhusu usahihi, upendeleo, ufikivu na uwezo wa mwalimu kubadilisha matokeo). Kagua kanuni za umri za zana kama wanafunzi wataitumia.",
            "Fikiria fedha. Barua ya Dear Colleague ya Idara ya Elimu ya Marekani ya Julai 2025, kama ilivyoripotiwa na K-12 Dive, inasema fedha zilizopo za ruzuku za serikali kuu zinaweza kusaidia AI kwa zana bora za mtaala, ufundishaji wa ziada wenye matokeo makubwa, na ushauri wa njia za chuo na kazi, ikiwa masharti ya kisheria yanatimizwa. Kagua barua hiyo kwenye ed.gov na ofisi yako ya programu za serikali kuu kabla ya kupanga kutumia fedha zozote."
          ],
          steps: ["Chagua kikundi kidogo na wiki sita hadi kumi na mbili.", "Andika nani, nini kinabadilika, na lini.", "Pendelea zana zilizoidhinishwa; vinginevyo fanya ukaguzi wa muuzaji.", "Kagua kanuni za umri kama wanafunzi wataitumia.", "Kagua fedha na ofisi yako ya programu za serikali kuu."],
          words: [["Ukubwa (scope)", "ukubwa na mipaka ya mradi: nani, nini na kwa muda gani."], ["Ofisi ya programu za serikali kuu", "ofisi ya wilaya inayosimamia ruzuku za serikali kuu kama Title I."]],
          slides: [
            { title: "Yaweke madogo", bullets: ["Walimu wachache, darasa moja au somo moja", "Wiki sita hadi kumi na mbili", "Rahisi kusaidia, kupima na kusimamisha"] },
            { title: "Chagua zana mwisho", bullets: ["Pendelea zana zilizoidhinishwa na wilaya", "Vinginevyo fanya ukaguzi wa muuzaji", "Kagua kanuni za umri kwa matumizi ya wanafunzi"] },
            { title: "Fedha", bullets: ["Barua ya serikali kuu ya Julai 2025: baadhi ya matumizi ya AI yanafadhilika", "Zana za mtaala, ufundishaji wa ziada, ushauri wa njia", "Thibitisha na ofisi yako ya programu za serikali kuu"] }
          ],
          sources: [{ name: "K-12 Dive: Idara ya Elimu yatoa vipaumbele vya AI (Julai 2025)", url: "https://www.k12dive.com/news/education-department-issues-ai-priorities-but-what-if-the-agency-closes/754015/" }, { name: "Faragha na Teknolojia ya Elimu: orodha ya Model Terms of Service", url: "https://studentprivacy.ed.gov/privacy-and-education-technology" }],
          tryIt: "Andika ukubwa wa majaribio yako (nani, nini kinabadilika, kwa muda gani) na utaje zana, pamoja na hali yake ya kuidhinishwa au ukaguzi wa muuzaji uliofanya.",
          youCanNow: "kuweka ukubwa wa majaribio madogo ya AI na kuchagua zana iliyokaguliwa ipasavyo.",
          quickCheck: [
            { objective: "O2", q: "Ukubwa mzuri wa majaribio ni upi?", options: ["Kila shule katika wilaya kwa miaka mitatu", "Walimu wachache katika somo moja kwa wiki sita hadi kumi na mbili", "Mwanafunzi mmoja kwa siku moja", "Hakuna muda maalum"], answer: 1, why: "Ukubwa mdogo na wazi unakuwezesha kujifunza haraka na kupunguza hatari." },
            { objective: "O2", q: "Zana unayoitaka bado haijaidhinishwa na wilaya. Unafanya nini?", options: ["Kufanya ukaguzi wa muuzaji kabla ya majaribio", "Kuitumia hata hivyo kwa majaribio mafupi", "Kuwaomba walimu wainunue wenyewe", "Kuchagua zana yoyote bila mpango"], answer: 0, why: "Zana lazima zipite ukaguzi wa muuzaji kabla wanafunzi au wafanyakazi hawajazitumia." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ukaguzi wa faragha na usawa",
          minutes: 6,
          goal: "Fanya ukaguzi wa faragha na usawa wa majaribio yako kabla hayajaanza.",
          text: [
            "Faragha: orodhesha hasa data gani ya wanafunzi majaribio yanatumia na inakwenda wapi. Chini ya FERPA (sheria ya Marekani ya faragha ya kumbukumbu za elimu), kushiriki taarifa zinazomtambulisha mtu kutoka kumbukumbu za elimu na muuzaji kwa kawaida kunahitaji idhini isipokuwa kuna msamaha, kama muuzaji anayefanya kazi kama afisa wa shule chini ya udhibiti wa moja kwa moja wa shule, mwenye mipaka ya kushiriki tena. Kama wanafunzi wako chini ya miaka 13, COPPA (sheria ya Marekani ya faragha ya watoto mtandaoni) inatumika; idhini ya shule inafaa tu kwa matumizi ya shule bila lengo lingine la kibiashara. Pata idhini ya afisa wako wa faragha.",
            "Usawa: nani anaweza kuachwa nje au kudhurika? Kagua upatikanaji (vifaa, intaneti, ufikivu kwa wanafunzi wenye ulemavu, lugha za familia), kama matokeo yanaweza kutofautiana kati ya vikundi vya wanafunzi, na kama matokeo yoyote ya AI yanaweza kuathiri alama, upangaji wa madarasa au nidhamu; ikiwa ndivyo, ongeza ukaguzi wa binadamu.",
            "Andika ukaguzi kwenye ukurasa mmoja pamoja na kila hatari, kinga yake na mhusika wake. Majaribio ambayo hayajapita ukaguzi huu hayako tayari kuanza."
          ],
          steps: ["Orodhesha data ya wanafunzi, inakwenda wapi na kwa nini.", "Kagua FERPA, na COPPA kama wanafunzi wako chini ya miaka 13.", "Pata idhini ya afisa wa faragha.", "Kagua upatikanaji, ufikivu, lugha na tofauti kati ya vikundi.", "Andika kila hatari pamoja na kinga yake na mhusika wake."],
          words: [["Idhini (sign-off)", "kibali rasmi kutoka kwa mtu anayehusika."], ["Ufikivu", "kama watu wenye ulemavu wanaweza kutumia zana kikamilifu."]],
          slides: [
            { title: "Faragha", bullets: ["Data gani, inakwenda wapi, kwa nini", "FERPA; COPPA kama wako chini ya miaka 13", "Afisa wa faragha anaidhinisha"] },
            { title: "Usawa", bullets: ["Vifaa, intaneti, ufikivu, lugha", "Matokeo tofauti kati ya vikundi?", "Ukaguzi wa binadamu kwa jambo lolote zito"] },
            { title: "Ukurasa mmoja", bullets: ["Hatari, kinga, mhusika", "Haijapita = haiko tayari"] }
          ],
          sources: [{ name: "FERPA: Kulinda Faragha ya Wanafunzi", url: "https://studentprivacy.ed.gov/ferpa" }, { name: "FTC: Kutii COPPA, Maswali Yanayoulizwa Mara kwa Mara", url: "https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions" }],
          tryIt: "Andika ukaguzi wako wa faragha na usawa wa ukurasa mmoja wenye angalau hatari tatu za faragha na hatari tatu za usawa, kila moja ikiwa na kinga na mhusika.",
          youCanNow: "kukagua majaribio ya AI kwa hatari za faragha na usawa kabla hayajaanza.",
          quickCheck: [
            { objective: "O3", q: "Lipi ni swali la usawa kwa majaribio?", options: ["Je, zana ni maarufu?", "Je, zana ni mpya zaidi?", "Je, zana ina muundo mzuri?", "Je, wanafunzi wenye ulemavu wanaweza kuitumia zana kikamilifu?"], answer: 3, why: "Ufikivu na upatikanaji ni sehemu ya ukaguzi wa usawa." },
            { objective: "O3", q: "Ukaguzi wako wa faragha na usawa haujakamilika, lakini tarehe ya kuanza ni kesho. Unafanya nini?", options: ["Kuanza hata hivyo na kumaliza ukaguzi baadaye", "Kuahirisha kuanza hadi ukaguzi ukamilike na kuidhinishwa", "Kuruka sehemu ya usawa", "Kuanza na nusu ya wanafunzi tu"], answer: 1, why: "Majaribio ambayo hayajapita ukaguzi wa faragha na usawa hayako tayari kuanza." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kusanifu majaribio",
        questions: [
          { objective: "O1", q: "Majaribio mazuri yanapaswa kuanza na nini?", options: ["Maonyesho ya bidhaa", "Punguzo la bei kutoka kwa muuzaji", "Tatizo linalowahusu wanafunzi pamoja na ushahidi", "Taarifa kwa vyombo vya habari"], answer: 2, why: "Matatizo kwanza, bidhaa baadaye." },
          { objective: "O2", q: "Ukubwa upi wa majaribio ni bora zaidi?", options: ["Walimu wachache katika somo moja kwa wiki 6-12", "Kila shule katika wilaya kwa miaka mitatu", "Hakuna kikundi kilichoelezwa", "Mkuu wa shule peke yake"], answer: 0, why: "Majaribio madogo ni rahisi kusaidia, kupima na kusimamisha." },
          { objective: "O2", q: "Unapaswa kuchagua zana lini?", options: ["Kwanza", "Baada ya majaribio kuisha", "Kamwe", "Baada ya kueleza tatizo na ukubwa"], answer: 3, why: "Zana lazima ilingane na tatizo." },
          { objective: "O3", q: "Wanafunzi katika majaribio wana umri wa miaka 10. Sheria ipi inahusu huduma ya mtandaoni?", options: ["Hakuna sheria", "COPPA", "Sheria ya barabarani ya jimbo tu", "Hakimiliki tu"], answer: 1, why: "COPPA inawahusu watoto walio chini ya miaka 13." },
          { objective: "O3", q: "Matokeo ya AI katika majaribio yako yanaweza kuathiri upangaji wa madarasa. Lazima uongeze nini?", options: ["Hakuna kitu", "Modeli ya haraka zaidi", "AI zaidi", "Ukaguzi wa binadamu kabla ya uamuzi wowote wa upangaji"], answer: 3, why: "Maamuzi mazito yanahitaji ukaguzi wa binadamu." }
        ]
      }
    },
    {
      name: "Sura 2: Watu, ushahidi na uwasilishaji",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuwaandaa wafanyakazi",
          minutes: 5,
          goal: "Panga mafunzo na msaada ambao wafanyakazi wa majaribio wanahitaji.",
          text: [
            "Walimu katika majaribio wanahitaji zaidi ya jina la kuingia. Panga vitu vitatu. Ujuzi: jinsi ya kutumia zana vizuri, prompts au mipangilio inayofanya kazi, na jinsi ya kukagua matokeo yake. Kanuni: faragha, viwango vya matumizi ya AI kwa wanafunzi, na nini cha kufanya kitu kikienda vibaya. Msaada: mtu wa kuwasiliana naye aliyetajwa, mkutano mfupi wa kila wiki, na muda wa kujaribu mambo.",
            "Fanya mafunzo yawe ya vitendo. Walimu wanapaswa kutumia zana kwenye nyenzo zao halisi (zisizo za siri) wakati wa kipindi, si kutazama maonyesho tu. Waunganishe wanaoanza mapema na wenzao wenye tahadhari.",
            "Waombe walimu wa majaribio waandike maelezo mafupi: muda uliotumika, kilichofanya kazi, kilichoshindwa, na jinsi wanafunzi walivyopokea. Maelezo yao ni sehemu ya ushahidi wako na yataongoza uamuzi wa mwisho."
          ],
          steps: ["Panga ujuzi: matumizi, prompts, kukagua matokeo.", "Panga kanuni: faragha, viwango vya matumizi ya wanafunzi, matukio.", "Panga msaada: mtu wa kuwasiliana naye, mkutano wa kila wiki, muda.", "Fanya vipindi vya vitendo kwa nyenzo halisi.", "Waombe walimu waandike maelezo mafupi."],
          words: [["Maendeleo ya kitaaluma (PD)", "mafunzo na ujifunzaji kwa walimu na wafanyakazi."], ["Anayeanza mapema", "mtu anayejaribu zana mpya mapema na anaweza kuwasaidia wengine."]],
          slides: [
            { title: "Ujuzi, kanuni, msaada", bullets: ["Ujuzi: matumizi, prompts, kukagua", "Kanuni: faragha, viwango vya wanafunzi, matukio", "Msaada: mtu wa kuwasiliana naye, mikutano, muda"] },
            { title: "Mafunzo ya vitendo", bullets: ["Tumia zana kwenye nyenzo halisi zisizo za siri", "Waunganishe wanaoanza mapema na wenzao wenye tahadhari"] },
            { title: "Maelezo ya walimu ni ushahidi", bullets: ["Muda uliotumika, kilichofanya kazi, kilichoshindwa", "Jinsi wanafunzi walivyopokea"] }
          ],
          tryIt: "Andika mpango wa wafanyakazi wa ukurasa mmoja: ratiba ya mafunzo ya vitendo ya dakika 60, kanuni ambazo walimu lazima wafuate, msaada watakaopata, na maelezo utakayowaomba waandike.",
          youCanNow: "kuwaandaa na kuwasaidia wafanyakazi kwa majaribio ya AI.",
          quickCheck: [
            { objective: "O4", q: "Msaada kwa wafanyakazi wakati wa majaribio unapaswa kujumuisha nini?", options: ["Mtu wa kuwasiliana naye aliyetajwa na mikutano ya kila wiki", "Barua pepe moja tu", "Chatbot ya AI tu", "Hakuna; walimu watajitafutia njia"], answer: 0, why: "Msaada uliotajwa na mikutano ya mara kwa mara inazuia matatizo yasikue." },
            { objective: "O4", q: "Walimu wanauliza kwa nini lazima waandike maelezo wakati wa majaribio. Ungesema nini?", options: ["Ni kanuni ya muuzaji", "Ni kwa ajili ya kuhukumu ufundishaji wao", "Maelezo yao ni sehemu ya ushahidi wa kuamua kinachofuata", "Ni kazi isiyo na maana, si lazima"], answer: 2, why: "Maelezo ya walimu ni ushahidi kwa uamuzi wa kuendelea, kurekebisha au kusimamisha." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kuwasiliana na familia",
          minutes: 5,
          goal: "Andika barua kwa familia na maswali na majibu yanayoeleza majaribio kwa ukweli.",
          text: [
            "Familia zinaamini kile wanachoelewa. Waambie kabla majaribio hayajaanza: tatizo gani mnashughulikia, zana ya AI inafanya nini, haifanyi nini (haitoi alama wala haifanyi maamuzi ya upangaji), data gani ya wanafunzi inatumika na inalindwaje, na wawasiliane na nani wakiwa na maswali.",
            "Ongeza maswali na majibu mafupi: Je, data ya mtoto wangu itatumika kufundisha AI? (Jibu kutoka mkataba wako na muuzaji.) Je, mtoto wangu anaweza kujiondoa, na mbadala ni upi? Mtajuaje kama inafanya kazi? FTC (tume ya biashara ya serikali ya Marekani) inapendekeza shule ziwaambie wazazi huduma zipi za mtandaoni zimeidhinishwa; FERPA inawapa wazazi haki ya kukagua kumbukumbu za elimu za mtoto wao.",
            "Andika kwa lugha rahisi na toa tafsiri zilizokaguliwa na wazungumzaji wenye sifa kwa familia zinazozihitaji. Toa kipindi kifupi cha maelezo au muda wa kuuliza maswali."
          ],
          steps: ["Eleza tatizo na zana inafanya nini na haifanyi nini.", "Eleza matumizi na ulinzi wa data.", "Ongeza maswali na majibu: kufundisha AI, kujiondoa, vipimo.", "Tafsiri, na tafsiri zikaguliwe na wazungumzaji wenye sifa.", "Toa muda wa maswali."],
          words: [["Maswali na majibu (FAQ)", "orodha fupi ya maswali yanayoulizwa mara kwa mara pamoja na majibu yake."], ["Kujiondoa (opt out)", "kuchagua kutoshiriki."]],
          slides: [
            { title: "Waambie familia kwanza", bullets: ["Tatizo na zana inafanya nini", "Haifanyi nini", "Data inayotumika na inavyolindwa"] },
            { title: "Maswali na majibu mafupi", bullets: ["Je, data inatumika kufundisha AI?", "Je, mtoto wangu anaweza kujiondoa? Mbadala?", "Mtajuaje kama inafanya kazi?"] },
            { title: "Fikia kila familia", bullets: ["Lugha rahisi", "Tafsiri zilizokaguliwa", "Muda wa maswali"] }
          ],
          sources: [{ name: "FTC: Kutii COPPA, Maswali Yanayoulizwa Mara kwa Mara", url: "https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions" }, { name: "FERPA: Kulinda Faragha ya Wanafunzi", url: "https://studentprivacy.ed.gov/ferpa" }],
          tryIt: "Andika barua kwa familia (isiyozidi ukurasa mmoja) na maswali matano na majibu kwa majaribio yako. Mwombe mzazi au mratibu wa familia aisome na akuambie nini hakiko wazi.",
          youCanNow: "kueleza majaribio ya AI kwa familia kwa uwazi na kwa ukweli.",
          quickCheck: [
            { objective: "O5", q: "Barua kwa familia inapaswa kusema zana HAIFANYI nini?", options: ["Kuwasaidia wanafunzi kufanya mazoezi", "Kutoa alama au kufanya maamuzi ya upangaji", "Kufanya kazi kwenye kompyuta za shule", "Kutumia intaneti"], answer: 1, why: "Familia zinahitaji kujua kuwa watu, si AI, ndio wanaofanya maamuzi kuhusu watoto wao." },
            { objective: "O5", q: "Mratibu wa familia anasema barua yako ni ngumu kuelewa. Ungefanya nini?", options: ["Kuituma hata hivyo", "Kuongeza maelezo zaidi na maneno ya kisheria", "Kuituma kwa Kiingereza tu", "Kuiandika upya kwa maneno rahisi na kumwomba aisome tena"], answer: 3, why: "Barua inafanya kazi tu kama familia zinaweza kuielewa." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kupima mafanikio na kuwasilisha mpango wako",
          minutes: 6,
          goal: "Weka vipimo na kanuni ya uamuzi, na uwasilishe mpango kwa dakika kumi.",
          text: [
            "Chagua vipimo vitatu hadi vitano vinavyolingana na tatizo lako, vyenye kipimo cha mwanzo cha kabla ya majaribio: matokeo ya wanafunzi (matokeo ya mtihani wa kitengo, mazoezi yaliyokamilika), kipimo cha walimu (muda uliookolewa, kujiamini), kipimo cha uzoefu wa wanafunzi au familia (utafiti mfupi), na kipimo cha usalama (matukio, matatizo ya faragha). Ripoti matokeo kwa kila kikundi cha wanafunzi pale faragha inaporuhusu, ili kugundua athari zisizo sawa.",
            "Andika kanuni ya uamuzi mapema: kuendelea (kupanua), kurekebisha (kubadilisha na kujaribu tena) au kusimamisha. Kwa mfano: \"Panua kama matokeo ya mtihani yanaboreka na walimu wanaokoa muda, bila matukio makubwa na bila kikundi chochote kufanya vibaya zaidi.\"",
            "Wasilisha kwa dakika kumi: tatizo na ushahidi, majaribio na zana, ukaguzi wa faragha na usawa, mpango wa watu, vipimo na kanuni ya uamuzi. Karibisha maswali magumu; yanaufanya mpango kuwa imara zaidi."
          ],
          steps: ["Chagua vipimo 3-5: wanafunzi, walimu, uzoefu, usalama.", "Kusanya kipimo cha mwanzo.", "Panga kuangalia matokeo kwa kila kikundi pale faragha inaporuhusu.", "Andika kanuni ya kuendelea, kurekebisha au kusimamisha.", "Wasilisha kwa dakika kumi na uandike maswali."],
          words: [["Kipimo", "kitu unachohesabu au kukadiria ili kuona kama badiliko lilifanya kazi."], ["Kanuni ya uamuzi", "kanuni iliyoandikwa mapema kuhusu kupanua, kurekebisha au kusimamisha."]],
          slides: [
            { title: "Vipimo vyenye kipimo cha mwanzo", bullets: ["Matokeo ya wanafunzi", "Muda na kujiamini kwa walimu", "Utafiti wa uzoefu na usalama"] },
            { title: "Amua kanuni kwanza", bullets: ["Endelea, rekebisha au simamisha", "Hakuna kikundi kinachofanya vibaya zaidi", "Hakuna matukio makubwa"] },
            { title: "Uwasilishaji wa dakika kumi", bullets: ["Tatizo na ushahidi; majaribio na zana", "Faragha na usawa; mpango wa watu", "Vipimo na kanuni ya uamuzi"] }
          ],
          tryIt: "Kazi ya mwisho: unganisha mpango wako kamili wa majaribio (tatizo, ukubwa na zana, ukaguzi wa faragha na usawa, mpango wa wafanyakazi, barua kwa familia na maswali na majibu, vipimo vyenye kipimo cha mwanzo, kanuni ya uamuzi), uwasilishe kwa dakika kumi kwa timu ya uongozi, kikundi cha wenzako au bodi, na uandike maswali na majibu yako.",
          youCanNow: "kusanifu, kutetea na kuongoza majaribio ya AI ya kuwajibika katika shule au wilaya yako.",
          quickCheck: [
            { objective: "O6", q: "Kipimo cha mwanzo kinakusanywa lini?", options: ["Kabla ya majaribio", "Katikati ya majaribio", "Baada ya majaribio kuisha", "Tu kama majaribio yameshindwa"], answer: 0, why: "Kipimo cha mwanzo kabla ya majaribio kinaonyesha kama kuna kilichobadilika." },
            { objective: "O6", q: "Matokeo yanaonekana mazuri kwa jumla, lakini kikundi kimoja cha wanafunzi kilifanya vibaya zaidi. Mpango wako unafanya nini?", options: ["Kuripoti matokeo ya jumla tu", "Kuendelea, kwa kuwa wanafunzi wengi walifanya vizuri", "Kuangalia matokeo kwa kila kikundi na kuchagua kurekebisha au kusimamisha kama kanuni ya uamuzi inavyosema", "Kuondoa kikundi hicho kwenye data"], answer: 2, why: "Kuangalia kwa kila kikundi kunagundua athari zisizo sawa, na kanuni ya uamuzi inaongoza cha kufanya." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Watu, ushahidi na uwasilishaji",
        questions: [
          { objective: "O4", q: "Nini kinafanya mafunzo ya AI kwa walimu kuwa na matokeo zaidi?", options: ["Kutazama maonyesho marefu", "Kusoma tangazo la muuzaji", "Matumizi ya vitendo kwa nyenzo zao wenyewe zisizo za siri", "Kutokuwa na mafunzo"], answer: 2, why: "Watu wanajifunza zana kwa kuzitumia katika kazi halisi." },
          { objective: "O5", q: "Barua kwa familia inapaswa kusema zana HAIFANYI nini?", options: ["Kutoa alama au kufanya maamuzi ya upangaji", "Kusaidia mazoezi", "Kuokoa muda wa walimu", "Kutoa maoni"], answer: 0, why: "Familia zinahitaji kujua kuwa maamuzi yanabaki kwa walimu na waelimishaji." },
          { objective: "O6", q: "Kwa nini uangalie matokeo ya majaribio kwa kila kikundi cha wanafunzi?", options: ["Kuwapanga wanafunzi hadharani", "Kugundua athari zisizo sawa", "Haina manufaa", "Kuokoa muda"], answer: 1, why: "Majaribio yanaweza kuwasaidia baadhi ya wanafunzi na kuwadhuru wengine." },
          { objective: "O6", q: "Kanuni ya kuendelea, kurekebisha au kusimamisha inapaswa kuandikwa lini?", options: ["Kabla majaribio hayajaanza", "Baada ya matokeo kupatikana", "Kamwe", "Tu kama yameshindwa"], answer: 0, why: "Kuamua mapema kunaufanya uamuzi kuwa wa kweli." },
          { objective: "O6", q: "Wakati wa uwasilishaji wako, mjumbe wa bodi anauliza swali gumu kuhusu faragha. Jibu bora ni lipi?", options: ["Kulikwepa", "Kuahidi kuwa hakuna hatari", "Kumaliza uwasilishaji", "Kulikaribisha na kujibu kutoka ukaguzi wako wa faragha"], answer: 3, why: "Maswali magumu yanaufanya mpango kuwa imara zaidi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI kwa Viongozi wa Shule na Elimu 8: Mradi wa Mwisho wa Kuhitimisha",
    questions: [
      { objective: "O1", q: "Maelezo ya tatizo yanasema:", options: ["Bidhaa ipi ya kununua", "Nini si sawa, kwa nani, na kwa kiasi gani", "Bajeti tu", "Orodha ya wafanyakazi"], answer: 1, why: "Yanaeleza tatizo pamoja na ushahidi." },
      { objective: "O1", q: "Ushahidi wa tatizo unaweza kujumuisha:", options: ["Matangazo ya muuzaji", "Uvumi", "Data iliyopo, tafiti na mazungumzo", "Makisio"], answer: 2, why: "Ushahidi halisi unaonyesha kuwa tatizo ni la kweli." },
      { objective: "O1", q: "Kabla ya kuchagua AI, uliza:", options: ["Ipi ni rahisi zaidi kwa bei?", "AI ipi ni maarufu zaidi?", "Je, AI ndiyo jibu sahihi kabisa?", "Ipi ina nembo bora zaidi?"], answer: 2, why: "Wakati mwingine suluhisho lisilo la AI ni bora zaidi." },
      { objective: "O2", q: "Muda mzuri wa majaribio ni kama:", options: ["Wiki sita hadi kumi na mbili", "Siku moja", "Miaka mitano", "Hakuna muda maalum"], answer: 0, why: "Mrefu wa kutosha kujifunza, mfupi wa kutosha kusimamia." },
      { objective: "O2", q: "Zana inapaswa kuchaguliwa:", options: ["Na wanafunzi peke yao", "Kabla ya kitu kingine chochote", "Na muuzaji", "Baada ya tatizo na ukubwa kuwa wazi"], answer: 3, why: "Zana lazima ilingane na tatizo." },
      { objective: "O2", q: "Kama zana bado haijaidhinishwa, unapaswa:", options: ["Kuitumia hata hivyo", "Kufanya ukaguzi wa muuzaji", "Kuwaomba wanafunzi wajisajili", "Kuruka faragha"], answer: 1, why: "Idhini inakuja kabla ya matumizi." },
      { objective: "O2", q: "Barua ya serikali kuu ya Julai 2025 inasema fedha za ruzuku zinaweza kusaidia AI kwa:", options: ["Vifaa vya michezo", "Ununuzi wowote ule", "Kuchukua nafasi ya walimu", "Zana za mtaala, ufundishaji wa ziada wenye matokeo makubwa na ushauri wa njia"], answer: 3, why: "Matumizi hayo yametajwa katika barua, kama ilivyoripotiwa." },
      { objective: "O2", q: "Kabla ya kupanga kutumia fedha za serikali kuu, kagua na:", options: ["Mwanafunzi", "Muuzaji", "Ofisi yako ya programu za serikali kuu", "Mitandao ya kijamii"], answer: 2, why: "Wao wanasimamia kanuni za ruzuku za serikali kuu." },
      { objective: "O3", q: "Chini ya FERPA, kushiriki taarifa zinazomtambulisha mwanafunzi (PII) na muuzaji kwa kawaida kunahitaji:", options: ["Idhini, isipokuwa kuna msamaha", "Hakuna kitu", "Simu moja tu", "Ruhusa ya muuzaji"], answer: 0, why: "Misamaha inajumuisha maafisa wa shule walio chini ya udhibiti." },
      { objective: "O3", q: "Nani anaidhinisha ukaguzi wa faragha?", options: ["Muuzaji", "Afisa wa faragha wa wilaya", "Mwanafunzi", "Hakuna mtu"], answer: 1, why: "Mtu anayehusika ndiye anayeidhinisha." },
      { objective: "O3", q: "Lipi ni swali la usawa?", options: ["Je, wanafunzi wenye ulemavu wanaweza kuitumia zana kikamilifu?", "App ina rangi gani?", "Je, iko kwenye mtindo?", "Je, ni mpya?"], answer: 0, why: "Ufikivu ni sehemu ya usawa." },
      { objective: "O3", q: "Majaribio ambayo hayajapita ukaguzi wa faragha na usawa:", options: ["Yamekamilika", "Yako tayari hata hivyo", "Yameidhinishwa", "Hayako tayari kuanza"], answer: 3, why: "Ukaguzi ni lango la lazima." },
      { objective: "O4", q: "Msaada kwa wafanyakazi unapaswa kujumuisha:", options: ["Hakuna kitu baada ya kuingia", "Mtu wa kuwasiliana naye aliyetajwa na mikutano ya kila wiki", "Barua pepe tu", "Namba ya msaada ya muuzaji tu"], answer: 1, why: "Msaada unaweka majaribio kwenye njia sahihi." },
      { objective: "O4", q: "Maelezo ya walimu wa majaribio ni:", options: ["Hayana manufaa", "Shajara binafsi", "Sehemu ya ushahidi wako", "Kwa ajili ya muuzaji tu"], answer: 2, why: "Yanaonyesha kilichofanya kazi na kilichoshindwa." },
      { objective: "O5", q: "Maswali na majibu kwa familia yanapaswa kujibu:", options: ["Nani ni mwalimu maarufu zaidi?", "Bei ya hisa ya muuzaji ni ipi?", "Je, data ya mtoto wangu inatumika kufundisha AI?", "Hakuna kitu"], answer: 2, why: "Matumizi ya data ni jambo kubwa linalowahangaisha familia." },
      { objective: "O5", q: "Tafsiri kwa familia zinapaswa kuwa:", options: ["Zimekaguliwa na wazungumzaji wenye sifa", "Matokeo ya AI yasiyokaguliwa", "Kurukwa", "Kufanywa na wanafunzi"], answer: 0, why: "Familia zinahitaji taarifa sahihi." },
      { objective: "O6", q: "Kipi ni kipimo cha usalama?", options: ["Mapato ya muuzaji", "Idadi ya mara watu walioingia", "Idadi ya slaidi", "Idadi ya matukio au matatizo ya faragha"], answer: 3, why: "Usalama lazima upimwe pia." },
      { objective: "O6", q: "Kipimo cha mwanzo kinakusanywa:", options: ["Baada ya majaribio", "Kabla ya majaribio", "Kamwe", "Tu kama matokeo ni mabaya"], answer: 1, why: "Kinaonyesha nini kilibadilika." },
      { objective: "O6", q: "Kanuni ya uamuzi inatoa machaguo gani?", options: ["Kusubiri milele", "Kununua au kuuza", "Ndiyo tu", "Kuendelea, kurekebisha au kusimamisha"], answer: 3, why: "Majaribio yanaisha kwa uamuzi ulio wazi." },
      { objective: "O6", q: "Uwasilishaji wako wa mradi wa mwisho unapaswa kuchukua kama:", options: ["Dakika moja", "Saa mbili", "Dakika kumi", "Siku nzima"], answer: 2, why: "Mfupi na wenye lengo, pamoja na muda wa maswali." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [0, 2, 3, 5, 8, 10, 12, 14, 17, 18]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Tatizo na ushahidi", objective: "O1", notYet: "Anaanza na zana, au hana ushahidi.", meets: "Anaeleza tatizo na linawahudumia nani, pamoja na ushahidi.", exceeds: "Anaeleza kwa nini AI ndiyo jibu sahihi, au nini kingine kilifikiriwa." },
      { name: "Ukubwa na zana", objective: "O2", notYet: "Hakuna nani, nini au kwa muda gani ulio wazi, au zana haina ukaguzi wa muuzaji.", meets: "Ukubwa wa majaribio (nani, nini, kwa muda gani) na zana, pamoja na ukaguzi wa muuzaji wake.", exceeds: "Ukubwa ni mdogo kiasi cha kuweza kutekelezwa kwa wiki sita hadi kumi na mbili." },
      { name: "Ukaguzi wa faragha na usawa", objective: "O3", notYet: "FERPA, COPPA (kama wako chini ya miaka 13), ufikivu au upatikanaji unakosekana.", meets: "Unahusisha FERPA, COPPA kama wako chini ya miaka 13, ufikivu na upatikanaji.", exceeds: "Kila hatari ina kinga na mhusika, na afisa wa faragha ameupitia." },
      { name: "Wafanyakazi na familia", objective: "O5", notYet: "Hakuna mpango wa mafunzo ya wafanyakazi, au hakuna barua kwa familia na maswali na majibu.", meets: "Mpango wa mafunzo ya wafanyakazi, na barua kwa familia pamoja na maswali na majibu mafupi.", exceeds: "Barua ilisomwa na mzazi au mratibu wa familia na ikaboreshwa." },
      { name: "Vipimo na kanuni ya uamuzi", objective: "O6", notYet: "Vipimo chini ya vitatu, hakuna kipimo cha mwanzo, au hakuna kanuni ya uamuzi.", meets: "Vipimo vitatu hadi vitano vya mafanikio vyenye kipimo cha mwanzo, na kanuni ya kuendelea, kurekebisha au kusimamisha.", exceeds: "Kinajumuisha kipimo cha usalama na mpango wa kuangalia matokeo kwa kila kikundi cha wanafunzi." },
      { name: "Uwasilishaji", objective: "O6", notYet: "Haukuwasilishwa, au maswali hayakuandikwa.", meets: "Uliwasilishwa kwa dakika kumi, na maswali na majibu yakaandikwa.", exceeds: "Maswali magumu yalikaribishwa na kujibiwa kwa ushahidi wa mpango." }
    ]
  },
  evaluation: {
    results: [
      "Viongozi wanaomaliza programu na kufaulu mradi wa mwisho (kwa rubriki)",
      "Mipango ya majaribio iliyowasilishwa kwa timu ya uongozi au bodi ndani ya siku 60 (utafiti wa kufuatilia)",
      "Majaribio yaliyoanza yakiwa na ukaguzi wa faragha na usawa ulioidhinishwa na kanuni ya uamuzi iliyoandikwa (utafiti wa kufuatilia)",
      "Majaribio yanayofikia uamuzi wa kuendelea, kurekebisha au kusimamisha kwa kutumia kipimo cha mwanzo na vipimo vyao"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta yenye intaneti",
      "Miongozo yako ya AI ya kuwajibika kutoka kozi ya 7 na sera za wilaya yako",
      "Data ya muhtasari au matokeo ya tafiti kuhusu tatizo (hakuna data ya mwanafunzi mmoja mmoja)",
      "Kiolezo cha mpango cha kama kurasa nne",
      "Kama dakika 90 kwa masomo na majaribio, pamoja na muda wa kuandika na kuwasilisha mpango"
    ],
    facilitatorNotes: [
      "Fanyeni jaribio la awali pamoja, kisha viongozi washirikiane maelezo ya matatizo katika vikundi vidogo kabla ya kuchagua zana.",
      "Mwalike afisa wa faragha wa wilaya apitie ukaguzi wa faragha na usawa kabla ya uwasilishaji.",
      "Mwombe mzazi au mratibu wa familia asome rasimu za barua kwa familia.",
      "Panga kipindi cha uwasilishaji pamoja na timu halisi ya uongozi au kikundi cha wenzako kinachoigiza bodi.",
      "Pima mradi wa mwisho kwa rubriki, na ukusanye maswali na majibu yaliyoandikwa."
    ]
  }
};
