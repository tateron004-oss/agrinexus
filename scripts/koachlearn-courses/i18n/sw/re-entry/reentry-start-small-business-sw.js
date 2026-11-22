"use strict";

// Koach Learn course (Swahili translation of re-entry/reentry-start-small-business.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "reentry-start-small-business-sw",
  lang: "sw",
  translationOf: "reentry-start-small-business",
  category: "Re-Entry",
  name: "Jinsi ya Kuanzisha na Kuendesha Biashara Ndogo",
  skills: "Kuchagua biashara unayoweza kuanza sasa, Kupata wateja na kuweka bei, Kuandika mpango wa biashara wa ukurasa mmoja kwa AI, Kuchagua muundo na jina la biashara, Kupata EIN ya bure na leseni zinazofaa, Kuweka kumbukumbu na kupanga kodi",
  outcome: "kuandika mpango wa biashara wa ukurasa mmoja kwa biashara rahisi ya huduma kwa msaada wa AI, na kutengeneza orodha ya hatua rasmi za Marekani: muundo na jina la biashara, EIN ya bure kutoka IRS, leseni zinazohitajika na jiji, kaunti na jimbo lako, akaunti ya benki tofauti, na kumbukumbu za kodi.",
  about: [
    "Watu wengi wanaorudi nyumbani wanachagua kujiajiri: usafi, kutunza nyasi na bustani, kusaidia watu kuhama, kusafisha magari, kunyoa nywele, kupika, kupaka rangi, kazi za ufundi mdogo na zaidi. Kumiliki biashara kunaweza kukupa kipato, uhuru na maisha ya baadaye, hata pale baadhi ya waajiri wanapochelewa kuajiri.",
    "Katika Sura 1 utachagua wazo la biashara linalofaa ujuzi wako, utajua wateja wako ni nani na utoze bei gani, na utaandika mpango wa ukurasa mmoja kwa msaidizi wa AI. Katika Sura 2 utajifunza hatua rasmi za kuanzisha biashara Marekani: muundo wa biashara, jina, EIN ya bure kutoka IRS, leseni, akaunti ya benki, kumbukumbu na kodi, na mahali pa kupata msaada wa bure.",
    "Sheria zinatofautiana kati ya jimbo, kaunti na jiji, na zinabadilika. Kozi hii inakupa hatua na mahali rasmi pa kukagua, kama sba.gov na irs.gov; si ushauri wa kisheria wala wa kodi. Usiandike kamwe namba yako ya Social Security, maelezo ya kesi yako au maelezo ya benki kwa AI. Kila somo linachukua kama dakika tano. Jaribio la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Andika mpango wa biashara wa ukurasa mmoja kwa biashara rahisi ya huduma kwa msaada wa AI (huduma, wateja, bei, jinsi wateja watakavyokupata, gharama za kuanzia). Kisha tengeneza orodha yako ya hatua za kuanzisha: muundo wa biashara yako, jina la biashara yako na kama linahitaji DBA, kupata EIN ya bure kwenye irs.gov, leseni za kukagua na jiji, kaunti na jimbo lako, kufungua akaunti ya benki tofauti, na jinsi utakavyoweka kumbukumbu na kutenga pesa za kodi. Weka tovuti rasmi kwa kila hatua.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima wanaorudi nyumbani kutoka gerezani (kurudi katika jamii) wanaotaka kujiajiri kwa biashara rahisi ya huduma, kama usafi, kutunza nyasi na bustani, kusaidia watu kuhama, kusafisha magari, kunyoa nywele, kupika, kupaka rangi au kazi za ufundi mdogo.",
    startingPoint: "Wana ujuzi wa vitendo na wanaweza kutumia simu. Wana uzoefu mdogo au hawana kabisa katika mipango ya biashara, kuweka bei, kusajili biashara, EIN, leseni, benki ya biashara au kumbukumbu za kodi.",
    gap: "Baadhi ya waajiri wanachelewa kuajiri watu wenye rekodi za uhalifu, na kujiajiri kunaweza kuleta kipato na uhuru. Wanafunzi wanahitaji kugeuza ujuzi kuwa biashara iliyopangwa na kufuata hatua rasmi za Marekani za kuanzisha biashara, ili waepuke ulaghai, faini na matatizo ya kodi.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi (kama darasa la 5 hadi 6)",
      "Vifaa: simu janja au kompyuta ya maktaba yenye intaneti",
      "Muda: masomo ya kama dakika 5 yanayoingia kati ya kazi na miadi",
      "Sheria zinatofautiana kati ya jimbo, kaunti na jiji na zinabadilika; kozi inaelekeza kwenye tovuti rasmi na si ushauri wa kisheria wala wa kodi",
      "Faragha: usiandike kamwe namba ya Social Security, maelezo ya kesi au maelezo ya benki kwa AI"
    ],
    prerequisites: "Kozi \"Kusimamia Fedha na Maisha kwa Msaada wa AI\" inasaidia lakini si lazima."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukijua ujuzi wako na pesa unazoweza kuanzia nazo", action: "kuchagua wazo la biashara linalofaa ujuzi wako, pesa zako na hali yako", standard: "lenye gharama ndogo za kuanzia na baada ya kukagua leseni yoyote ya jimbo inayohitajika" },
    { id: "O2", condition: "Ukiwa na wazo lako la biashara", action: "kueleza wateja wako na kuweka bei ya kuanzia", standard: "kwa sentensi mahususi kuhusu wateja na bei inayolipia gharama, muda na kodi" },
    { id: "O3", condition: "Ukitumia msaidizi wa AI anayekuuliza maswali", action: "kuandika mpango wa biashara wa ukurasa mmoja", standard: "unaoeleza huduma, wateja, bei, jinsi wateja wanavyokupata na gharama za kuanzia, kwa ukweli unaoutoa wewe mwenyewe" },
    { id: "O4", condition: "Ukiwa na wazo na jina la biashara yako", action: "kuchagua muundo wa biashara na kujua kama jina lako linahitaji DBA", standard: "ukieleza sababu ya chaguo lako na ukiwa umepata ukurasa rasmi wa serikali" },
    { id: "O5", condition: "Ukitumia irs.gov na tovuti za serikali ya eneo lako", action: "kupata ombi la EIN la bure na leseni ambazo biashara yako inahitaji", standard: "ukiwa na anwani rasmi ya tovuti kwa kila moja, na bila huduma ya kulipia EIN" },
    { id: "O6", condition: "Ukiwa na biashara mpya", action: "kupanga akaunti ya benki tofauti, kumbukumbu rahisi, pesa za kodi na msaada wa bure", standard: "ukiwa na daftari la kumbukumbu lenye tarehe, nani, nini na kiasi gani, na ukitaja ofisi ya SCORE au SBDC iliyo karibu nawe" }
  ],
  chapters: [
    {
      name: "Sura 1: Kupanga biashara yako",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kuchagua biashara unayoweza kuanza sasa",
          minutes: 5,
          goal: "Chagua wazo la biashara linalofaa ujuzi wako, pesa zako na hali yako.",
          text: [
            "Biashara bora ya kwanza mara nyingi ni rahisi: huduma unayoijua tayari kuifanya, inayohitaji pesa kidogo kuanza, na ambayo watu wa eneo lako wanailipia. Mifano: usafi wa nyumba au ofisi, kutunza nyasi na bustani, kuosha kwa mashine ya maji yenye nguvu, kubeba na kutupa takataka, kusaidia watu kuhama, kusafisha magari, kupaka rangi, kupika, kutengeneza nywele, kushona au matengenezo.",
            "Muombe msaidizi wa AI akusaidie kufikiri: \"Nilijifunza ujuzi wa kupika na kusafisha na nina kama $300 za kuanzia. Bado sina gari. Nipendekezee biashara tano ndogo za huduma ninazoweza kuanza katika jiji langu, na kila moja inahitaji nini kuanza.\"",
            "Kazi nyingine zinahitaji leseni ya jimbo, kama kunyoa nywele, urembo (cosmetology), kazi za umeme au ukandarasi, na baadhi ya bodi za leseni zina sheria kuhusu watu wenye rekodi za uhalifu. Kabla ya kuchagua mojawapo ya kazi hizi, kagua tovuti rasmi ya bodi ya leseni ya jimbo lako au uliza programu ya kurudi katika jamii. Majimbo mengi yamebadilisha sheria hizi, kwa hiyo usidhani tu kwamba umezuiwa."
          ],
          steps: ["Orodhesha ujuzi wako na unachopenda kufanya.", "Andika pesa zako za kuanzia na vifaa ulivyo navyo, kama gari.", "Muombe AI mawazo machache ya biashara yanayolingana.", "Kagua kama wazo linahitaji leseni ya jimbo.", "Chagua wazo moja la kupanga."],
          words: [["Biashara ya huduma", "biashara inayofanya kazi kwa ajili ya watu, kama usafi au matengenezo, badala ya kuuza bidhaa."], ["Gharama za kuanzia", "pesa unazohitaji kuanza, kama vifaa na mahitaji ya kazi."], ["Bodi ya leseni", "ofisi ya jimbo inayotoa leseni kwa baadhi ya kazi."]],
          slides: [
            { title: "Anza na kitu rahisi", bullets: ["Huduma unayoijua tayari", "Pesa kidogo kuanza", "Watu wa karibu wanailipia"] },
            { title: "Muombe AI mawazo", bullets: ["Ujuzi wako", "Bajeti yako na vifaa vyako", "\"Nipendekezee biashara tano ninazoweza kuanza.\""] },
            { title: "Kazi inayohitaji leseni?", bullets: ["Kunyoa nywele, umeme, ukandarasi na zaidi", "Kagua bodi ya leseni ya jimbo lako", "Sheria zimebadilika katika majimbo mengi"] }
          ],
          tryIt: "Andika ujuzi wako mitatu bora na kiasi cha pesa unachoweza kuanzia nacho. Muombe msaidizi wa AI mawazo matano ya biashara ndogo yanayolingana, kisha uchague moja.",
          youCanNow: "kuchagua wazo la biashara ndogo linalofaa ujuzi wako na pesa zako.",
          quickCheck: [
            { objective: "O1", q: "Gharama za kuanzia ni nini?", options: ["Pesa zinazohitajika kuanza, kama vifaa na mahitaji ya kazi", "Faida yako ya kila wiki", "Kodi unayodaiwa kila mwaka", "Bei unayowatoza wateja"], answer: 0, why: "Gharama za kuanzia ni unachotumia ili biashara ianze." },
            { objective: "O1", q: "Unataka kuanza biashara ya kutengeneza umeme. Utafanya nini kwanza?", options: ["Kuanza kuchukua kazi mara moja", "Kuuliza AI kama unahitaji leseni na kuamini jibu", "Kukagua tovuti rasmi ya bodi ya leseni ya jimbo lako", "Kuchapisha kadi za biashara"], answer: 2, why: "Kazi nyingi za ufundi zinahitaji leseni ya jimbo, na bodi rasmi ina sheria halisi." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Wateja na kuweka bei",
          minutes: 5,
          goal: "Eleza wateja wako na uweke bei ya kuanzia inayolipia gharama zako.",
          text: [
            "Biashara inahitaji wateja watakaolipa. Kuwa mahususi kuhusu wao ni nani: \"familia zenye shughuli nyingi katika mtaa wangu\", \"ofisi ndogo katikati ya mji\", \"wazee wenye nyumba ambao hawawezi kukata nyasi\". Kuwajua kunakuambia mahali pa kuwapata.",
            "Ili kuweka bei, jumlisha gharama zako kwa kazi moja (mahitaji ya kazi, mafuta ya gari au nauli ya basi, na muda wako), kisha angalia wengine wa karibu wanatoza kiasi gani. Muulize AI: \"Ninataka kutoa huduma ya usafi wa kawaida wa nyumba Atlanta. Mahitaji yangu yanagharimu kama $10 kwa kila kazi na kazi moja inachukua saa 3. Ninawezaje kupata bei ya haki ya kuanzia? Nahitaji kukagua nini kuhusu bei za eneo langu?\" Kisha kagua bei halisi za eneo lako kwa kuangalia matangazo ya eneo lako au kupigia biashara chache simu.",
            "Usiweke bei ya chini mno hadi ukapata hasara. Bei inapaswa kulipia gharama zako, muda wako, na kiasi kidogo cha ziada kwa kodi na akiba."
          ],
          steps: ["Eleza wateja wako kwa sentensi moja.", "Jumlisha gharama zako kwa kazi moja.", "Amua muda wako una thamani gani kwa saa.", "Kagua wengine wa karibu wanatoza kiasi gani.", "Weka bei inayolipia gharama, muda na kodi."],
          words: [["Mteja", "mtu au biashara inayolipia huduma yako."], ["Faida", "pesa zinazobaki baada ya kulipa gharama zako."]],
          slides: [
            { title: "Wajue wateja wako", bullets: ["Kuwa mahususi", "\"Familia zenye shughuli nyingi katika mtaa wangu\"", "Inakuambia mahali pa kuwapata"] },
            { title: "Pata bei yako", bullets: ["Gharama za kazi moja", "Muda wako", "Wengine wa karibu wanatoza kiasi gani"] },
            { title: "Usiweke bei ya chini mno", bullets: ["Lipia gharama na muda", "Acha nafasi ya kodi na akiba"] }
          ],
          tryIt: "Kwa wazo lako, andika sentensi moja inayoeleza wateja wako. Muombe AI akusaidie kupata bei ya kuanzia kutokana na gharama zako na muda wako, kisha kagua bei mbili halisi za eneo lako.",
          youCanNow: "kueleza wateja wako na kuweka bei ya kuanzia inayolipia gharama zako.",
          quickCheck: [
            { objective: "O2", q: "Faida ni nini?", options: ["Pesa zote ambazo wateja wanakulipa", "Pesa zinazobaki baada ya gharama", "Gharama ya vifaa vyako", "Pesa unazokopa"], answer: 1, why: "Faida ni kinachobaki baada ya kulipa gharama zako." },
            { objective: "O2", q: "AI inapendekeza bei ya kutunza nyasi inayoonekana ya chini sana. Utafanya nini?", options: ["Kuitumia ili upate wateja wengi zaidi", "Kuiongeza mara mbili bila kufikiri", "Kuwaomba marafiki wakisie bei", "Kukagua gharama zako na muda wako, kisha kulinganisha bei mbili halisi za eneo lako"], answer: 3, why: "Bei lazima ilipie gharama zako na muda wako, na bei za eneo lako zinaonyesha wateja wanalipa kiasi gani." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Mpango wa biashara wa ukurasa mmoja kwa AI",
          minutes: 6,
          goal: "Andika mpango wa biashara wa ukurasa mmoja kwa msaidizi wa AI.",
          text: [
            "Mpango wa biashara ni ramani yako. SBA (ofisi ya serikali ya Marekani inayosaidia biashara ndogo) inaeleza mpango mfupi wa \"lean startup\" unaotosha ukurasa mmoja, unaohusu mambo kama wateja wako, thamani unayotoa, jinsi unavyowafikia wateja, gharama zako na jinsi unavyopata pesa.",
            "Muulize AI: \"Nisaidie kuandika mpango wa biashara wa ukurasa mmoja kwa biashara ya kutunza nyasi katika mji wangu. Tumia vichwa hivi: ninachotoa, wateja wangu ni nani, kwa nini watanichagua, watanipataje, gharama za kuanzia, bei, na lengo langu la mwezi wa kwanza. Niulize maswali moja baada ya jingine ili kuujaza.\" Jibu kwa maneno yako mwenyewe.",
            "Soma mpango uliokamilika kwa makini. Badilisha chochote kisicho kweli au kisichowezekana. Unaweza kumwonyesha mshauri; SCORE inatoa ushauri wa bure (tazama Somo la 6)."
          ],
          steps: ["Muombe AI akuhoji swali moja baada ya jingine.", "Tumia vichwa rahisi: huduma, wateja, kwa nini wewe, watakupataje, gharama, bei, lengo la kwanza.", "Jibu kwa maneno yako mwenyewe.", "Rekebisha chochote kisichowezekana.", "Uhifadhi na umwonyeshe mshauri."],
          words: [["Mpango wa biashara", "mpango ulioandikwa wa jinsi biashara yako itakavyofanya kazi na kupata pesa."], ["Mpango wa lean startup", "mpango mfupi wa biashara wa ukurasa mmoja."]],
          slides: [
            { title: "Ramani yako ya ukurasa mmoja", bullets: ["Mpango wa lean startup wa SBA unatosha ukurasa mmoja", "Wateja, thamani, kuwafikia, gharama, pesa"] },
            { title: "AI akuhoji", bullets: ["\"Niulize swali moja baada ya jingine.\"", "Jibu kwa maneno yako mwenyewe"] },
            { title: "Ufanye uwe halisi", bullets: ["Rekebisha kisichowezekana", "Mwonyeshe mshauri"] }
          ],
          sources: [{ name: "SBA: Write your business plan", url: "https://www.sba.gov/business-guide/plan-your-business/write-your-business-plan" }],
          tryIt: "Muombe msaidizi wa AI akuhoji swali moja baada ya jingine na aandike mpango wa ukurasa mmoja kwa wazo lako la biashara. Hifadhi mpango huo.",
          youCanNow: "kuandika mpango wa biashara wa ukurasa mmoja kwa msaada wa AI.",
          quickCheck: [
            { objective: "O3", q: "Mpango wa biashara wa lean startup ni nini?", options: ["Ripoti ya kurasa 50 kwa benki", "Mpango mfupi wa ukurasa mmoja", "Orodha ya majina ya biashara", "Fomu ya kodi"], answer: 1, why: "Mpango wa lean unaweka sehemu muhimu za biashara kwenye ukurasa mmoja." },
            { objective: "O3", q: "AI iliandika mpango wako na kuongeza idadi ya wateja ambayo hukuwahi kuipa. Utafanya nini?", options: ["Kuiondoa au kuibadilisha kwa ukweli wako halisi", "Kuiacha kwa sababu inaonekana vizuri", "Kuongeza namba nyingine kama hiyo", "Kumtumia mkopeshaji mpango kama ulivyo"], answer: 0, why: "Wewe ndiye unayetoa ukweli katika mpango wako, si AI." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kupanga biashara yako",
        questions: [
          { objective: "O1", q: "Kwa kawaida ni ipi biashara bora ya kwanza?", options: ["Biashara usiyoijua kabisa", "Biashara inayohitaji $100,000 kuanza", "Huduma rahisi unayoijua tayari, yenye gharama ndogo za kuanzia", "Biashara isiyo na wateja karibu"], answer: 2, why: "Gharama ndogo na ujuzi unaoujua vinapunguza hatari." },
          { objective: "O1", q: "Unataka kuwa kinyozi. Ukague nini kwanza?", options: ["Sheria za bodi ya leseni ya jimbo lako", "Hakuna kitu", "Uvumi wa mitandao ya kijamii", "AI peke yake"], answer: 0, why: "Kunyoa nywele kunahitaji leseni ya jimbo, na bodi ndizo zinazoweka sheria." },
          { objective: "O2", q: "Maelezo yapi ya wateja yana manufaa zaidi?", options: ["\"Yeyote mwenye pesa\"", "\"Kila mtu\"", "\"Watu\"", "\"Wazee wenye nyumba katika mtaa wangu ambao hawawezi kukata nyasi\""], answer: 3, why: "Wateja mahususi wanakuambia mahali pa kuwapata." },
          { objective: "O2", q: "Bei nzuri inalipia:", options: ["Mahitaji ya kazi tu", "Gharama zako, muda wako na kiasi fulani kwa kodi", "Hakuna; fanya kazi bure", "Bei ya mshindani wa bei rahisi zaidi, hata ukipata hasara"], answer: 1, why: "Bei lazima ilipie gharama na ikulipe wewe." },
          { objective: "O3", q: "AI inaweza kusaidia vizuri zaidi kuandika mpango wa biashara kwa njia gani?", options: ["Kubuni ukweli kuhusu biashara yako", "Kukuhoji swali moja baada ya jingine", "Kusaini karatasi za kisheria", "Kukupatia EIN yako"], answer: 1, why: "Wewe unatoa ukweli; AI inaupanga." }
        ]
      }
    },
    {
      name: "Sura 2: Kuianzisha kwa njia rasmi",
      lessons: [
        {
          objectives: ["O4"],
          title: "Muundo wa biashara na jina la biashara",
          minutes: 6,
          goal: "Chagua muundo wa biashara na ujue kama jina la biashara yako linahitaji kusajiliwa.",
          text: [
            "SBA inaeleza kwamba ukianza kufanya biashara bila kujisajili kama aina nyingine, moja kwa moja unakuwa sole proprietorship (biashara ya mtu mmoja). Ndiyo rahisi zaidi: wewe na biashara ni kitu kimoja kwa kodi na madeni, kwa hiyo wewe binafsi unawajibika kwa madeni ya biashara.",
            "Limited liability company (LLC) inasajiliwa na jimbo lako, kwa kawaida kupitia Secretary of State (ofisi ya katibu wa jimbo), na kwa ujumla inalinda mali zako binafsi biashara ikishtakiwa au ikiingia kwenye deni, ingawa ulinzi huo una mipaka. Inagharimu pesa kuianzisha na huenda ikawa na ada za kila mwaka, ambazo zinatofautiana kati ya majimbo; kagua tovuti ya Secretary of State wako kwa gharama ya sasa.",
            "Ukitumia jina la biashara lisilo jina lako halali, kama \"Fresh Start Cleaning\", majimbo mengi yanakutaka ulisajili kama DBA (\"doing business as\", yaani \"kufanya biashara kama\") na jimbo, kaunti au jiji. Ukifanya biashara kwa jina lako halali, SBA inasema huenda usihitaji kusajili popote. Muulize mtaalamu wa kodi au mshirika wa SBA ni muundo upi unakufaa."
          ],
          steps: ["Amua: sole proprietorship (moja kwa moja) au LLC (inasajiliwa na jimbo).", "Kwa LLC, kagua gharama kwenye tovuti ya Secretary of State wako.", "Chagua jina la biashara.", "Kama si jina lako halali, tafuta mahali pa kusajili DBA katika jimbo, kaunti au jiji lako.", "Muulize mtaalamu wa kodi au mshirika wa SBA kama huna uhakika."],
          words: [["Sole proprietorship", "biashara inayomilikiwa na mtu mmoja, bila kutenganisha mmiliki na biashara."], ["LLC", "limited liability company: biashara iliyosajiliwa ambayo kwa ujumla inalinda mali binafsi za mmiliki."], ["DBA", "\"doing business as\": jina la biashara lililosajiliwa ambalo si jina lako halali."]],
          slides: [
            { title: "Sole proprietorship", bullets: ["Inaanza moja kwa moja unapoanza kufanya biashara", "Rahisi zaidi", "Wewe binafsi unawajibika kwa madeni"] },
            { title: "LLC", bullets: ["Inasajiliwa na jimbo lako", "Kwa ujumla inalinda mali zako binafsi", "Gharama zinatofautiana kati ya majimbo: kagua Secretary of State wako"] },
            { title: "Jina la biashara yako", bullets: ["Si jina lako halali? Kwa kawaida sajili DBA", "Na jimbo, kaunti au jiji lako", "Sheria zinatofautiana: kagua eneo lako"] }
          ],
          sources: [{ name: "SBA: Choose a business structure", url: "https://www.sba.gov/business-guide/launch-your-business/choose-business-structure" }, { name: "SBA: Register your business", url: "https://www.sba.gov/business-guide/launch-your-business/register-your-business" }],
          tryIt: "Amua kama ungeanza kama sole proprietorship au LLC, na uandike kwa nini. Chagua jina la biashara, kisha tafuta \"register DBA\" pamoja na jina la kaunti au jimbo lako na upate ukurasa rasmi wa serikali (mara nyingi unaishia na .gov).",
          youCanNow: "kuchagua muundo wa biashara na kujua jinsi ya kusajili jina la biashara yako.",
          quickCheck: [
            { objective: "O4", q: "DBA inamaanisha nini?", options: ["Akaunti ya biashara ya kila siku", "Idara ya mambo ya biashara", "Doing business as (kufanya biashara kama)", "Idhini ya moja kwa moja ya benki"], answer: 2, why: "DBA inamaanisha doing business as, jina tofauti na jina lako halali." },
            { objective: "O4", q: "Unataka kuita biashara yako \"Shine Car Care\". Utafanya nini?", options: ["Kulitumia bila kukagua chochote", "Kutafuta ukurasa rasmi wa DBA wa kaunti au jimbo lako", "Kulipa tovuti yoyote ilisajili", "Kuiomba AI ilisajili kwa niaba yako"], answer: 1, why: "Majimbo mengi yanataka jina la biashara lisilo jina lako halali lisajiliwe, kwenye tovuti rasmi." }
          ]
        },
        {
          objectives: ["O5"],
          title: "EIN yako ya bure na leseni zinazofaa",
          minutes: 6,
          goal: "Pata ombi la EIN la bure la IRS na leseni na vibali ambavyo biashara yako inahitaji.",
          text: [
            "EIN (Employer Identification Number) ni namba ya utambulisho wa kodi kwa biashara yako. IRS (mamlaka ya kodi ya Marekani) inasema hutalazimika kamwe kulipa ada ili kupata EIN, na inaonya kuhusu tovuti zinazotoza pesa kwa ajili yake. Omba moja kwa moja kwenye irs.gov. Ukikubaliwa, namba inatolewa mara moja mtandaoni. Lazima umalize kwa kikao kimoja, kwa hiyo tenga muda; huduma ya mtandaoni iko wazi saa fulani tu, zilizoorodheshwa kwenye irs.gov. Wamiliki wa sole proprietorship wasio na wafanyakazi mara nyingi wanaweza kutumia namba yao ya Social Security badala yake, lakini wengi wanafungua EIN ili kutenganisha mambo ya biashara na ya binafsi.",
            "Leseni na vibali vinatoka ngazi tofauti za serikali. SBA inaeleza kwamba leseni za serikali kuu (federal) ni kwa shughuli fulani tu (kama pombe au usafiri wa anga); majimbo yanatoa leseni kwa kazi nyingi za ufundi; na miji na kaunti mara nyingi zinataka leseni ya jumla ya biashara na vibali kwa mambo kama chakula, ujenzi au kuuza barabarani.",
            "Ili kupata zako: kagua tovuti za jiji na kaunti yako kwa leseni ya biashara, tovuti ya jimbo lako kwa leseni za ufundi na usajili wa kodi ya mauzo kama unauza bidhaa, na uliza Small Business Development Center (SBDC, kituo cha kusaidia biashara ndogo) cha eneo lako. Andika namba zako halisi kwenye tovuti rasmi za .gov tu, kamwe si kwa AI."
          ],
          steps: ["Nenda irs.gov na utafute \"apply for an EIN\"; usiilipe kamwe tovuti kwa ajili yake.", "Kagua saa za huduma ya mtandaoni na umalize kwa kikao kimoja.", "Chapisha au hifadhi uthibitisho wa EIN yako.", "Kagua na jiji na kaunti yako kwa leseni ya biashara na vibali.", "Kagua na jimbo lako kwa leseni za ufundi na usajili wa kodi ya mauzo."],
          words: [["EIN", "Employer Identification Number: namba ya bure ya utambulisho wa kodi kwa biashara kutoka IRS."], ["Leseni", "ruhusa rasmi kutoka serikali ya kuendesha biashara au kufanya kazi fulani."], ["Kibali", "ruhusa rasmi kwa shughuli maalum, kama kuuza chakula."]],
          slides: [
            { title: "EIN: bure kutoka IRS", bullets: ["Hutalazimika kamwe kulipa ada kwa EIN", "Omba kwenye irs.gov, inatolewa mara moja mtandaoni", "Maliza kwa kikao kimoja, wakati wa saa za huduma"] },
            { title: "Leseni zinatoka ngazi 3", bullets: ["Serikali kuu (federal): shughuli fulani tu", "Jimbo: kazi nyingi za ufundi, kodi ya mauzo", "Jiji na kaunti: leseni ya biashara, vibali"] },
            { title: "Pata zako", bullets: ["Tovuti za jiji na kaunti", "Tovuti ya jimbo", "Uliza SBDC ya eneo lako"] }
          ],
          sources: [{ name: "IRS: Get an employer identification number", url: "https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number" }, { name: "SBA: Apply for licenses and permits", url: "https://www.sba.gov/business-guide/launch-your-business/apply-licenses-permits" }],
          tryIt: "Fungua ukurasa wa EIN wa IRS kwenye irs.gov na uandike saa za huduma ya mtandaoni na unachohitaji ili kuomba (usiombe bado kama hujawa tayari). Kisha tafuta ukurasa wa leseni ya biashara wa jiji au kaunti yako na uandike anwani yake ya tovuti.",
          youCanNow: "kupata EIN ya bure kutoka IRS na kujua leseni na vibali ambavyo biashara yako inahitaji.",
          quickCheck: [
            { objective: "O5", q: "Leseni ya jumla ya biashara kwa kawaida inatoka wapi?", options: ["IRS", "Benki yako", "Tovuti ya binafsi", "Jiji au kaunti yako"], answer: 3, why: "Leseni za jumla za biashara kwa kawaida zinatolewa na jiji au kaunti yako." },
            { objective: "O5", q: "Tovuti inajitolea kukupatia EIN kwa $150. Utafanya nini?", options: ["Kulipa kwa sababu ni haraka zaidi", "Kuomba bure kwenye irs.gov badala yake", "Kumwomba rafiki alipe", "Kuacha kabisa kupata EIN"], answer: 1, why: "IRS inatoa EIN bure kwenye tovuti yake yenyewe." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Akaunti ya benki, kumbukumbu, kodi na msaada wa bure",
          minutes: 6,
          goal: "Weka kumbukumbu rahisi za pesa, panga kodi, na upate msaada wa bure wa biashara.",
          text: [
            "Tenganisha pesa za biashara. SBA inapendekeza kufungua akaunti ya benki ya biashara mara unapoanza kupokea au kutumia pesa kwa ajili ya biashara. Benki mara nyingi zinaomba EIN (au namba yako ya Social Security kwa sole proprietorship), nyaraka za kuanzisha biashara na leseni ya biashara; uliza benki yako inahitaji nini.",
            "Weka kumbukumbu ya kila dola inayoingia na kutoka: jedwali rahisi (spreadsheet) au daftari lenye tarehe, nani, nini na kiasi gani, pamoja na risiti. AI inaweza kukutengenezea karatasi rahisi ya kumbukumbu: \"Nitengenezee daftari rahisi la mapato na matumizi kwa biashara ya usafi.\" Usiweke maelezo halisi ya benki ndani yake.",
            "Kodi: IRS inasema watu waliojiajiri lazima wawasilishe ritani ya kodi kama mapato yao halisi (net earnings) ni $400 au zaidi, na kwa kawaida walipe kodi ya kujiajiri (Social Security na Medicare) pamoja na kodi ya mapato, mara nyingi kama malipo ya makadirio kila robo mwaka. Fomu ni pamoja na Schedule C, Schedule SE na Form 1040-ES. Wamiliki wengi wanatenga sehemu ya kila malipo kwa ajili ya kodi; mtaalamu wa kodi au msaada wa kodi wa bure unaweza kukuambia kiasi gani. Msaada wa bure wa biashara: SCORE inatoa washauri wa kujitolea bila gharama, na Small Business Development Centers na Women's Business Centers zinatoa ushauri; zipate kwenye sba.gov."
          ],
          steps: ["Fungua akaunti tofauti ya benki ya biashara; uliza benki inahitaji nini.", "Weka daftari la kila dola inayoingia na kutoka, pamoja na risiti.", "Tenga sehemu ya kila malipo kwa ajili ya kodi.", "Jifunze fomu: Schedule C, Schedule SE, 1040-ES kwenye irs.gov.", "Pata msaada wa bure kutoka SCORE, SBDC au Women's Business Center."],
          words: [["Kodi ya kujiajiri", "kodi ya Social Security na Medicare ambayo watu waliojiajiri wanalipa."], ["Kodi ya makadirio", "kodi inayolipwa wakati wa mwaka, kwa kawaida kila robo mwaka, pale ambapo hakuna mwajiri anayeikata."], ["Matumizi", "pesa unazotumia kuendesha biashara."]],
          slides: [
            { title: "Tenganisha pesa za biashara", bullets: ["Fungua akaunti ya benki ya biashara", "Benki zinaomba EIN au SSN, nyaraka, leseni"] },
            { title: "Weka kumbukumbu", bullets: ["Kila dola inayoingia na kutoka", "Tarehe, nani, nini, kiasi gani, risiti", "AI inaweza kutengeneza daftari; bila maelezo ya benki"] },
            { title: "Panga kodi", bullets: ["Wasilisha ritani kama mapato halisi ni $400 au zaidi", "Kodi ya kujiajiri pamoja na kodi ya mapato", "Schedule C, Schedule SE, 1040-ES"] },
            { title: "Msaada wa bure", bullets: ["Washauri wa SCORE bila gharama", "Small Business Development Centers", "Wapate kwenye sba.gov"] }
          ],
          sources: [{ name: "SBA: Open a business bank account", url: "https://www.sba.gov/business-guide/launch-your-business/open-business-bank-account" }, { name: "IRS: Self-employed individuals tax center", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" }, { name: "SBA: Resource partners", url: "https://www.sba.gov/local-assistance/resource-partners" }],
          tryIt: "Kazi ya mwisho: maliza mpango wako wa ukurasa mmoja na utengeneze orodha yako ya hatua za kuanzisha ukiwa na tovuti rasmi kwa kila hatua: muundo, jina na DBA, EIN ya bure kwenye irs.gov, leseni za jiji, kaunti na jimbo, akaunti tofauti ya benki, daftari la kumbukumbu lililotengenezwa kwa AI, pesa zilizotengwa kwa kodi, na SCORE au SBDC iliyo karibu nawe.",
          youCanNow: "kupanga biashara ndogo na kuianzisha kwa njia rasmi, ukiwa na kumbukumbu, mpango wa kodi na msaada wa bure.",
          quickCheck: [
            { objective: "O6", q: "Kumbukumbu nzuri ya biashara inapaswa kuwa na nini?", options: ["Tarehe, nani, nini na kiasi gani, pamoja na risiti", "Jumla ya mwaka tu", "Namba yako ya Social Security", "Pesa ulizopokea tu"], answer: 0, why: "Kumbukumbu zilizo wazi zenye risiti zinasaidia wakati wa kodi na zinaonyesha biashara inaendeleaje." },
            { objective: "O6", q: "Unalipwa pesa taslimu kwa kazi ya usafi. Utafanya nini?", options: ["Kuzitumia zote mara moja", "Kutoweka kumbukumbu kwa sababu ni pesa taslimu", "Kuziandika, kuziweka kwenye akaunti yako ya biashara na kutenga kiasi kwa kodi", "Kuziweka kwenye akaunti ya rafiki"], answer: 2, why: "Kuandika mapato, kutenganisha pesa za biashara na kuweka akiba ya kodi kunakuepusha na matatizo." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kuianzisha kwa njia rasmi",
        questions: [
          { objective: "O4", q: "Unaanza kusafisha nyumba bila kusajili aina yoyote ya biashara. Wewe ni:", options: ["Shirika lisilo la faida", "LLC", "Kampuni (corporation)", "Sole proprietorship"], answer: 3, why: "SBA inasema sole proprietorship inaanza moja kwa moja." },
          { objective: "O4", q: "Jina la biashara yako ni \"Fresh Start Cleaning\", si jina lako halali. Majimbo mengi yanataka:", options: ["Kulisajili kama DBA", "Hakuna kitu kamwe", "Leseni ya serikali kuu (federal)", "Alama ya biashara (trademark) kwanza"], answer: 0, why: "Jina la biashara kwa kawaida lazima lisajiliwe kama DBA." },
          { objective: "O5", q: "IRS inatoza kiasi gani kwa EIN?", options: ["$250", "$50", "Hakuna; ni bure", "Inategemea tovuti"], answer: 2, why: "IRS inasema hutalazimika kamwe kulipa ada kwa EIN." },
          { objective: "O5", q: "Leseni ya jumla ya biashara kwa kawaida inatoka wapi?", options: ["Tovuti ya binafsi", "IRS", "FAA", "Jiji au kaunti yako"], answer: 3, why: "Miji na kaunti zinatoa leseni za jumla za biashara." },
          { objective: "O6", q: "Watu waliojiajiri lazima wawasilishe ritani ya kodi kama mapato halisi ni:", options: ["Kamwe", "$40,000 au zaidi", "$400 au zaidi", "Zaidi ya $1 milioni tu"], answer: 2, why: "IRS inaweka kiwango cha kuwasilisha kwenye $400 ya mapato halisi ya kujiajiri." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Jinsi ya Kuanzisha na Kuendesha Biashara Ndogo",
    questions: [
      { objective: "O1", q: "Biashara ya huduma:", options: ["Inauza bidhaa tu", "Inafanya kazi kwa ajili ya watu, kama usafi au matengenezo", "Iko mtandaoni kila wakati", "Inahitaji kiwanda"], answer: 1, why: "Huduma ni kazi inayofanywa kwa ajili ya wateja." },
      { objective: "O1", q: "Gharama za kuanzia ni:", options: ["Pesa zinazohitajika kuanza, kama vifaa na mahitaji ya kazi", "Faida yako", "Kodi zako", "Wateja wako"], answer: 0, why: "Ni unachotumia ili kuanza." },
      { objective: "O1", q: "Kazi ikihitaji leseni ya jimbo, unapaswa kukagua:", options: ["Tovuti rasmi ya bodi ya leseni ya jimbo lako", "AI peke yake", "Uvumi", "Hakuna kitu"], answer: 0, why: "Bodi za leseni zinaweka sheria, ambazo zimebadilika katika majimbo mengi." },
      { objective: "O2", q: "Kwa nini ueleze wateja kwa umahususi?", options: ["Inapandisha bei", "Inakuambia mahali pa kuwapata", "Inatakiwa na IRS", "Inachukua nafasi ya leseni"], answer: 1, why: "Wateja mahususi ni rahisi kuwafikia." },
      { objective: "O2", q: "Ili kuweka bei, anza na:", options: ["Bei ya chini kabisa mjini, hata ukipata hasara", "Namba yoyote tu", "Gharama zako kwa kazi moja na muda wako", "Chochote rafiki anachosema"], answer: 2, why: "Bei lazima ilipie gharama na muda." },
      { objective: "O2", q: "Faida ni:", options: ["Mkopo", "Pesa zote zinazoingia", "Bili yako ya kodi", "Pesa zinazobaki baada ya gharama"], answer: 3, why: "Faida = mapato toa gharama." },
      { objective: "O3", q: "Mpango wa biashara wa lean startup ni:", options: ["Fomu ya kodi", "Ripoti ya kurasa 100", "Mpango mfupi wa ukurasa mmoja", "Leseni"], answer: 2, why: "SBA inaueleza kama mpango wa ukurasa mmoja." },
      { objective: "O3", q: "AI inapokusaidia kuandika mpango wako, nani anatoa ukweli?", options: ["Wewe", "AI", "Mtu usiyemjua", "IRS"], answer: 0, why: "AI inapanga; wewe unaijua biashara yako." },
      { objective: "O4", q: "Katika sole proprietorship, nani anawajibika kwa madeni ya biashara?", options: ["Wateja wako", "Hakuna mtu", "Serikali", "Wewe binafsi"], answer: 3, why: "Hakuna utengano kati ya mmiliki na biashara." },
      { objective: "O4", q: "LLC kwa kawaida inasajiliwa na:", options: ["IRS peke yake", "Jimbo lako, mara nyingi Secretary of State", "Benki yako", "Tovuti ya mitandao ya kijamii"], answer: 1, why: "Majimbo ndiyo yanayoanzisha LLC." },
      { objective: "O4", q: "Unakagua wapi gharama ya sasa ya kuanzisha LLC?", options: ["AI peke yake", "Tovuti ya Secretary of State wa jimbo lako", "Tangazo linalojitokeza ghafla (pop-up)", "Rafiki"], answer: 1, why: "Gharama zinatofautiana kati ya majimbo na zinabadilika." },
      { objective: "O4", q: "DBA inamaanisha:", options: ["Deni kabla ya mali", "Idara ya Mambo ya Biashara", "Akaunti ya benki ya kila siku", "Doing business as (kufanya biashara kama)"], answer: 3, why: "DBA ni jina la biashara lililosajiliwa." },
      { objective: "O5", q: "Tovuti inatoza $200 ili kukupatia EIN. Unapaswa:", options: ["Kuomba bure kwenye irs.gov badala yake", "Kulipa", "Kuipa SSN yako", "Kuiomba AI ilipe"], answer: 0, why: "IRS inaonya kuhusu tovuti zinazotoza pesa kwa EIN." },
      { objective: "O5", q: "Ombi la EIN la mtandaoni la IRS:", options: ["Liko wazi saa 24 kila siku", "Linaweza kuhifadhiwa na kumalizwa wiki ijayo", "Lazima limalizwe kwa kikao kimoja wakati wa saa zake za huduma", "Lina ada"], answer: 2, why: "IRS inasema huwezi kulihifadhi na inaorodhesha saa maalum." },
      { objective: "O5", q: "Ngazi ipi ya serikali inatoa leseni kwa kazi nyingi za ufundi, kama kazi za umeme?", options: ["Posta", "Serikali kuu (federal) peke yake", "Benki yako", "Jimbo"], answer: 3, why: "Majimbo yanatoa leseni kwa kazi nyingi za ufundi." },
      { objective: "O5", q: "Unapoomba EIN, unapaswa kuandika namba yako halisi ya Social Security wapi?", options: ["Katika ujumbe kwa mtu usiyemjua", "Kwa msaidizi wa AI", "Kwenye tovuti rasmi ya irs.gov tu", "Kwenye tovuti yoyote"], answer: 2, why: "Namba za binafsi zinaandikwa kwenye tovuti rasmi tu." },
      { objective: "O6", q: "Kwa nini ufungue akaunti tofauti ya benki ya biashara?", options: ["Ili kuepuka kodi zote", "Ili kutenganisha pesa za biashara na za binafsi", "Inachukua nafasi ya leseni", "Ili kuficha pesa"], answer: 1, why: "SBA inasema kutenganisha kunakulinda na kunasaidia kumbukumbu." },
      { objective: "O6", q: "Kumbukumbu nzuri za biashara zina:", options: ["Tarehe, nani, nini na kiasi gani, pamoja na risiti", "Mauzo makubwa tu", "Hakuna kitu", "Nywila zako"], answer: 0, why: "Kumbukumbu kamili zinarahisisha mambo ya kodi." },
      { objective: "O6", q: "Fomu ipi inaripoti mapato au hasara ya sole proprietorship?", options: ["Schedule C", "Form W-2", "Form I-9", "Form DS-11"], answer: 0, why: "IRS inatumia Schedule C kwa wamiliki wa sole proprietorship." },
      { objective: "O6", q: "Mshirika yupi wa SBA anatoa washauri wa biashara wa kujitolea bila gharama?", options: ["IRS", "SCORE", "Mkopeshaji wa mikopo ya haraka (payday lender)", "Ofisi ya taarifa za mikopo (credit bureau)"], answer: 1, why: "Washauri wa SCORE wanatoa ushauri bila gharama." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi amepiga hatua kiasi gani
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 2, 4, 6, 7, 8, 11, 12, 14, 16] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Mpango wa ukurasa mmoja", objective: "O3", notYet: "Mpango unakosa sehemu, au una ukweli ambao mwanafunzi hakuutoa.", meets: "Ukurasa mmoja unaoeleza huduma, wateja, bei, jinsi wateja wanavyokupata na gharama za kuanzia.", exceeds: "Mwanafunzi anaweza kueleza kila sehemu ya mpango kwa maneno yake mwenyewe." },
      { name: "Wateja na bei", objective: "O2", notYet: "Wateja ni \"kila mtu\", au bei hailipii gharama.", meets: "Maelezo mahususi ya wateja na bei inayolipia gharama, muda na kodi.", exceeds: "Bei ililinganishwa na bei mbili halisi za eneo lake." },
      { name: "Muundo na jina", objective: "O4", notYet: "Hakuna muundo uliochaguliwa, au jina halikukaguliwa.", meets: "Muundo umechaguliwa pamoja na sababu, na ukurasa rasmi wa DBA umepatikana kama unahitajika.", exceeds: "Pia anaandika mahali pa kukagua gharama ya sasa ya kuanzisha LLC." },
      { name: "EIN na leseni", objective: "O5", notYet: "Anatumia huduma ya kulipia EIN, au hakuna ukaguzi wa leseni.", meets: "Ukurasa wa EIN wa irs.gov na kurasa za leseni za jiji, kaunti na jimbo zimeorodheshwa.", exceeds: "Anaandika saa za huduma ya EIN mtandaoni na anachohitaji kuwa nacho tayari ili kuomba." },
      { name: "Pesa, kumbukumbu na msaada", objective: "O6", notYet: "Hakuna akaunti tofauti wala mpango wa kumbukumbu.", meets: "Akaunti tofauti ya benki, daftari la kumbukumbu, pesa zilizotengwa kwa kodi, na ofisi ya SCORE au SBDC imetajwa.", exceeds: "Daftari la kumbukumbu lina ingizo la kwanza halisi au la mazoezi pamoja na risiti." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaopata EIN au kusajili biashara ndani ya siku 90 (utafiti wa kufuatilia)",
      "Wanafunzi wanaopata kipato kutoka biashara yao ndani ya siku 90",
      "Wanafunzi wanaokutana na mshauri wa SCORE au mshauri wa SBDC ndani ya siku 60"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu janja au kompyuta yenye intaneti",
      "Msaidizi wa AI wa bure: Microsoft Copilot, ChatGPT au Google Gemini",
      "Karatasi na kalamu, au app ya bure ya maelezo, kwa mpango na orodha ya hatua",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Tafuta kurasa za biashara za jimbo, kaunti na jiji lako kabla ya kipindi ili uweze kuwaonyesha wanafunzi tovuti halisi za eneo lenu.",
      "Usiwaombe kamwe wanafunzi kuandika namba ya Social Security, maelezo ya kesi au maelezo ya benki kwa AI au kwenye skrini ya pamoja; maombi ya EIN yanafanywa kwenye irs.gov tu, kwa faragha.",
      "Peleka maswali kuhusu leseni na hukumu za zamani kwa bodi ya leseni ya jimbo, si kwa AI.",
      "Kozi hii si ushauri wa kisheria wala wa kodi; mwalike mshauri wa SCORE au wa SBDC wa eneo lenu kwenye kipindi kama unaweza.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
