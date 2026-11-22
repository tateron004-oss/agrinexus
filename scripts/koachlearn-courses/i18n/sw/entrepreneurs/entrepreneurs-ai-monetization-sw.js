"use strict";

// Koach Learn course (Swahili translation of entrepreneurs/entrepreneurs-ai-monetization.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "entrepreneurs-ai-monetization-sw",
  lang: "sw",
  translationOf: "entrepreneurs-ai-monetization",
  category: "Entrepreneurs",
  name: "Mikakati ya Kupata Pesa kwa AI",
  skills: "Kulinganisha njia za kupata pesa kwa AI, Kuchagua njia inayolingana na uwezo wako, Kuweka bei kwa thamani, Kutengeneza bidhaa ya kidijitali kwa AI, Kujenga mapato ya kila mwezi, Kutambua ulaghai wa kupata pesa kwa AI",
  outcome: "kulinganisha njia kuu ambazo biashara hupata pesa kwa AI, kuchagua ile inayolingana na ujuzi wako na wateja wako, kuweka bei ya ofa kwa thamani, kutengeneza bidhaa ya kwanza ya kidijitali au ofa ya kila mwezi, na kuijaribu kwa uzinduzi mdogo, huku ukiepuka mipango ya AI ya kutajirika haraka.",
  about: [
    "\"Ninawezaje kupata pesa kwa AI?\" ni moja ya maswali yanayotafutwa sana mtandaoni, na majibu mengi ni ulaghai. Kozi hii inakupa ramani ya kweli na ya vitendo: njia halisi ambazo biashara ndogo hupata pesa kwa AI, jinsi ya kuchagua moja, jinsi ya kuweka bei, na jinsi ya kuijaribu kabla ya kutumia pesa nyingi.",
    "Utalinganisha njia sita za kupata pesa (huduma zinazosaidiwa na AI, huduma za kifurushi, bidhaa za kidijitali, usajili wa kila mwezi, maudhui yenye wadhamini au viungo vya washirika, na kupunguza gharama katika biashara iliyopo), utachagua moja inayokufaa, utaweka bei kwa thamani, utatengeneza bidhaa ya kwanza au ofa ya kila mwezi kwa AI, na utafanya jaribio dogo. Pia utajifunza dalili za hatari za mipango ya kupata pesa kwa AI, kwa kutumia mwongozo wa FTC (tume ya biashara ya serikali ya Marekani).",
    "Kila somo linachukua kama dakika tano na lina kazi ya vitendo. Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni. Hakuna mapato yanayohakikishwa; kozi hii inafundisha jinsi ya kujaribu mawazo kwa uaminifu. Haitoi ushauri wa uwekezaji."
  ],
  finalTask: "Tengeneza mpango wa kupata pesa na jaribio la kwanza: njia ya kupata pesa uliyochagua na kwa nini, ofa yako yenye bei ya thamani, toleo la kwanza la bidhaa au ofa ya kila mwezi lililotengenezwa kwa msaada wa AI na kukaguliwa na wewe, mpango wa uzinduzi mdogo wenye lengo (kwa mfano mauzo 5 au wanachama 3 katika siku 30), na orodha ya dalili za hatari utakayotumia kabla ya kulipia mpango wowote wa kupata pesa kwa AI.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu na wamiliki wa biashara ndogo nchini Marekani wanaotaka kupata pesa kwa AI, kuanzia wenye kazi za pembeni hadi wamiliki wanaoongeza chanzo kipya cha mapato.",
    startingPoint: "Wanatumia wasaidizi wa AI na wana ujuzi, biashara au hadhira ya kujenga juu yake. Wengi wameona ahadi za mtandaoni za mapato rahisi ya AI na hawana uhakika ni njia zipi za kupata pesa ni halisi.",
    gap: "Mipango ya AI ya kutajirika haraka inawapotezea watu pesa, na wale wanaojaribu njia halisi mara nyingi hujaribu nyingi mno kwa wakati mmoja, huweka bei ya chini mno, au huzindua bila jaribio. Wanafunzi wanahitaji kuchagua njia moja ya kweli, kuweka bei kwa thamani, kutengeneza ofa ya kwanza na kuijaribu kwa udogo, huku wakitambua ulaghai kabla ya kulipa.",
    constraints: [
      "Maneno rahisi; hakuna mapato yanayohakikishwa na kozi haitoi ushauri wa uwekezaji",
      "Vifaa: simu au kompyuta yenye msaidizi wa AI wa bure na lahajedwali (spreadsheet)",
      "Muda: kama dakika tano kwa kila somo, pamoja na kutengeneza ofa ya kwanza na jaribio la siku 30",
      "Madai ya mapato lazima yathibitishwe, maudhui yaliyodhaminiwa yawekwe wazi (FTC), na kazi iliyotengenezwa na AI peke yake huenda isilindwe na hakimiliki",
      "Maswali ya kodi yaende kwenye vyanzo rasmi au kwa mhasibu"
    ],
    prerequisites: "\"Utangulizi wa AI kwa Wajasiriamali\", au matumizi ya kawaida ya msaidizi wa AI."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa njia sita za kupata pesa kwa AI", action: "kueleza kila njia na kutoa mfano unaolingana na ujuzi wako au biashara yako", standard: "kwa njia zote sita" },
    { id: "O2", condition: "Ukizingatia ujuzi wako, saa zako, watu unaowajua na hadhira yako", action: "kuchagua njia moja ya kupata pesa ya kuzingatia kwa siku 90", standard: "pamoja na sababu iliyoandikwa kwa nini inalingana na ulicho nacho tayari" },
    { id: "O3", condition: "Kwa njia uliyochagua", action: "kuweka bei kati ya kiwango cha chini cha gharama zako na thamani kwa mteja", standard: "ukilinganisha bei za washindani wawili na kukagua hesabu katika lahajedwali" },
    { id: "O4", condition: "Ukitumia msaada wa AI na utaalamu wako mwenyewe", action: "kutengeneza toleo la kwanza la bidhaa ya kidijitali au kifurushi cha huduma kwa tatizo moja na mnunuzi mmoja", standard: "kila ukweli ukiwa umekaguliwa na bila madai usiyoweza kuthibitisha" },
    { id: "O5", condition: "Ukiwa na bidhaa au huduma yako ya kwanza", action: "kubuni ofa ya kila mwezi au kifurushi cha pamoja na jaribio la uzinduzi la siku 30", standard: "lenye lengo wazi, njia ya kulifuatilia na udhamini wowote ukiwa umewekwa wazi" },
    { id: "O6", condition: "Kabla ya kulipia mpango wowote wa mapato ya AI au mafunzo ya ukocha", action: "kuukagua kwa orodha iliyoandikwa ya dalili za hatari", standard: "ukiomba hati ya ufichuzi na ukijua mahali pa kuripoti ulaghai" }
  ],
  chapters: [
    {
      name: "Sura 1: Chagua jinsi utakavyopata pesa",
      lessons: [
        {
          objectives: ["O1"],
          title: "Njia sita ambazo biashara hupata pesa kwa AI",
          minutes: 5,
          goal: "Eleza njia sita halisi za kupata pesa kwa AI na mfano wa kila moja.",
          text: [
            "1) Huduma zinazosaidiwa na AI: unafanya kazi ya wateja haraka zaidi kwa AI, kama machapisho ya mitandao ya kijamii, CV (wasifu wa kazi), au kupanga hesabu za biashara. 2) Huduma za kifurushi: kifurushi kimoja kwa bei moja maalum, kama \"maelezo 10 ya bidhaa kwa $X\". 3) Bidhaa za kidijitali: violezo, miongozo, mipango au kozi unazotengeneza mara moja na kuuza mara nyingi.",
            "4) Usajili wa kila mwezi: bidhaa au huduma ya kila mwezi, kama kifurushi cha maudhui cha kila wiki au zana ndogo ya programu ya AI. 5) Maudhui yenye wadhamini au washirika: unafundisha au kuburudisha kwa msaada wa AI na unapata pesa kutoka kwa wadhamini au viungo vya washirika, ukiweka wazi. 6) Kupunguza gharama: katika biashara iliyopo, AI inayookoa saa au kupunguza gharama nayo ni pesa.",
            "Hakuna kati ya hizi inayoleta mapato yenyewe bila kazi. Kila moja inahitaji wateja halisi, thamani halisi na kazi halisi. Kwa kiasi kikubwa AI inapunguza muda wa kutengeneza na kufikisha kazi."
          ],
          words: [["Monetize (kupata pesa kutoka kitu)", "kutafuta njia ya kupata pesa kutoka kwa kitu."], ["Huduma ya kifurushi", "huduma inayouzwa kama kifurushi kimoja kwa bei moja maalum."], ["Kiungo cha mshirika (affiliate link)", "kiungo kinachokulipa kamisheni mtu anaponunua kupitia kiungo hicho."]],
          slides: [
            { title: "Huduma", bullets: ["Huduma kwa wateja zinazosaidiwa na AI", "Kifurushi: kazi maalum, bei maalum"] },
            { title: "Bidhaa", bullets: ["Bidhaa za kidijitali: tengeneza mara moja, uza mara nyingi", "Usajili: bidhaa au huduma ya kila mwezi"] },
            { title: "Maudhui na kuokoa", bullets: ["Maudhui yenye wadhamini au washirika, yakiwekwa wazi", "Kupunguza gharama katika biashara iliyopo"] },
            { title: "Hakuna mapato bila kazi", bullets: ["Wateja halisi, thamani halisi, kazi halisi", "AI inapunguza muda wa kutengeneza na kufikisha"] }
          ],
          tryIt: "Andika njia hizo sita, kila moja na mfano mmoja unaoweza kulingana na ujuzi wako au biashara yako.",
          youCanNow: "kutaja njia sita halisi za kupata pesa kwa AI na kutoa mfano wa kila moja.",
          quickCheck: [
            { objective: "O1", q: "Bidhaa ya kidijitali ni nini?", options: ["Kitu kinachotengenezwa mara moja na kuuzwa mara nyingi mtandaoni", "Huduma unayofanya kwa mkono kwa kila mteja", "Mkopo wa benki", "Kukodisha duka"], answer: 0, why: "Bidhaa za kidijitali hutengenezwa mara moja na zinaweza kuuzwa tena na tena." },
            { objective: "O1", q: "Una duka la mikate na unatumia AI kupunguza saa mbili za makaratasi kila wiki. Hii ni njia gani?", options: ["Usajili wa kila mwezi", "Kupunguza gharama katika biashara iliyopo", "Kiungo cha mshirika", "Udhamini"], answer: 1, why: "Pesa iliyookolewa katika biashara inahesabiwa kama pesa iliyopatikana." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kuchagua njia inayolingana na uwezo wako",
          minutes: 5,
          goal: "Chagua njia ya kupata pesa inayolingana na ujuzi wako, hadhira yako na muda wako.",
          text: [
            "Njia bora inategemea ulicho nacho tayari. Una ujuzi na muda lakini huna hadhira: huduma au huduma za kifurushi kwa kawaida huleta pesa haraka zaidi. Una hadhira (wafuasi, orodha ya barua pepe, jamii): bidhaa za kidijitali, usajili au maudhui yaliyodhaminiwa yanaweza kufaa. Una biashara: anza na kupunguza gharama na huduma ya ziada kwa wateja ulio nao.",
            "Omba AI ikusaidie kufikiri: \"Huu ni ujuzi wangu, muda wangu kila wiki, watu ninaowajua na hadhira yoyote niliyo nayo. Nilinganishie njia sita za kupata pesa kwa AI: kasi ya kupata mauzo ya kwanza, gharama ya kuanza, hatari na juhudi.\" Kisha uamue mwenyewe.",
            "Chagua njia MOJA kwa siku 90 zijazo. Kujaribu zote sita kwa wakati mmoja ndiyo sababu inayojulikana zaidi watu kukosa kupata chochote."
          ],
          steps: ["Andika ujuzi wako, saa zako kwa wiki, watu unaowajua na hadhira yako.", "Omba AI ikulinganishie njia sita.", "Pima kila moja: kasi, gharama, hatari, juhudi.", "Chagua njia moja kwa siku 90."],
          words: [["Hadhira", "watu ambao tayari wanakufuata, wanakusoma au wanakusikiliza."], ["Gharama ya kuanza", "pesa inayohitajika kabla ya kufanya mauzo ya kwanza."]],
          slides: [
            { title: "Ujuzi na muda, bila hadhira", bullets: ["Huduma au huduma za kifurushi", "Mara nyingi huleta mauzo ya kwanza haraka"] },
            { title: "Una hadhira", bullets: ["Bidhaa za kidijitali", "Usajili au maudhui yaliyodhaminiwa"] },
            { title: "Una biashara", bullets: ["Anza na kupunguza gharama", "Huduma ya ziada kwa wateja ulio nao"] },
            { title: "Chagua MOJA kwa siku 90", bullets: ["Kufanya zote sita hakuleti chochote"] }
          ],
          tryIt: "Orodhesha ujuzi wako, saa zako, watu unaowajua na hadhira yako, omba AI ikulinganishie njia sita, na uchague njia moja kwa siku 90 zijazo.",
          youCanNow: "kuchagua njia ya kupata pesa kwa AI inayolingana na ulicho nacho tayari.",
          quickCheck: [
            { objective: "O2", q: "Unapaswa kuzingatia njia ngapi za kupata pesa kwa siku 90?", options: ["Zote sita", "Tatu", "Moja", "Hakuna"], answer: 2, why: "Kujaribu kila kitu kwa wakati mmoja ni sababu inayojulikana watu kukosa kupata chochote." },
            { objective: "O2", q: "Una ujuzi mzuri wa kuandika na muda, lakini huna hadhira. Unachagua nini?", options: ["Udhamini", "Bidhaa kubwa ya usajili", "Maudhui ya washirika", "Huduma au huduma ya kifurushi"], answer: 3, why: "Huduma kwa kawaida huleta pesa haraka zaidi ukiwa na ujuzi lakini bado huna hadhira." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kuweka bei kwa thamani",
          minutes: 5,
          goal: "Weka bei kulingana na thamani kwa mteja, ukiilinganisha na gharama zako.",
          text: [
            "AI inafanya kazi iwe haraka, na hilo huwavutia watu kutoza kidogo. Wateja wanalipia matokeo, si dakika zako. Uliza: hii inamwokolea au inamletea mteja nini? Kama kifurushi chako cha maelezo ya bidhaa kinasaidia duka kuuza zaidi, au kiolezo chako kinamwokolea meneja saa mbili kwa wiki, bei inaweza kuonyesha thamani hiyo.",
            "Kisha kagua kiwango chako cha chini: gharama zako (zana, ada, muda pamoja na kukagua) pamoja na faida. Angalia ofa zinazofanana zinatoza kiasi gani. Bei yako inapaswa kuwa kati ya kiwango chako cha chini na thamani kwa mteja.",
            "Omba AI ikupe mipangilio ya bei (ngazi tatu, vifurushi vya pamoja, bei ya uzinduzi) lakini weka na ukague namba wewe mwenyewe. Weka kumbukumbu kwa ajili ya kodi; watu wanaojiajiri kwa kawaida hulipa kodi ya kujiajiri (self-employment tax); tazama irs.gov au muulize mhasibu."
          ],
          steps: ["Kadiria thamani kwa mteja.", "Hesabu kiwango chako cha chini: gharama pamoja na faida.", "Angalia ofa zinazofanana zinatoza kiasi gani.", "Weka bei kati ya kiwango cha chini na thamani.", "Omba AI ikupe mipangilio, kisha kagua namba."],
          words: [["Bei kwa thamani", "bei inayotokana na thamani ya matokeo kwa mteja."], ["Kiwango cha chini cha bei", "bei ya chini kabisa ambayo bado inalipa gharama zako na faida."], ["Ngazi (tier)", "kiwango kimoja cha bidhaa kwa bei maalum, kama cha kawaida au cha hali ya juu."]],
          slides: [
            { title: "Wateja wanalipia matokeo", bullets: ["Si dakika zako", "Inawaokolea au inawaletea nini?"] },
            { title: "Kiwango cha chini na thamani", bullets: ["Kiwango cha chini: gharama + faida", "Thamani: inavyomfaa mteja", "Bei iko katikati"] },
            { title: "Mipangilio ya bei", bullets: ["Ngazi, vifurushi vya pamoja, bei ya uzinduzi", "AI inapendekeza; wewe unakagua namba", "Weka kumbukumbu kwa ajili ya kodi"] }
          ],
          sources: [{ name: "IRS: Self-Employed Individuals Tax Center (kituo cha kodi cha watu wanaojiajiri)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" }],
          tryIt: "Kwa njia uliyochagua, andika thamani kwa mteja, kiwango chako cha chini, bei za washindani wawili, na bei yako. Kagua hesabu katika lahajedwali.",
          youCanNow: "kuweka bei ya ofa inayosaidiwa na AI kwa thamani, juu ya gharama zako.",
          quickCheck: [
            { objective: "O3", q: "Kiwango chako cha chini cha bei ni nini?", options: ["Gharama zako pamoja na faida", "Bei ya chini kabisa ya mshindani", "Chochote AI inachopendekeza", "Sifuri"], answer: 0, why: "Chini ya kiwango hicho, kila mauzo yanakupotezea pesa." },
            { objective: "O3", q: "AI inasema kazi yako inachukua dakika tano tu, kwa hiyo utoze kidogo sana. Unafanya nini?", options: ["Kutoza karibu bure", "Kuweka bei kwa thamani ya matokeo, juu ya kiwango chako cha chini", "Kuitoa bure", "Kuiga mshindani wa bei ya chini kabisa"], answer: 1, why: "Wateja wanalipia matokeo, si muda ambao AI ilichukua." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Chagua jinsi utakavyopata pesa",
        questions: [
          { objective: "O1", q: "Ipi ni huduma ya kifurushi?", options: ["Kazi ya kulipwa kwa saa isiyo na mipaka", "\"Maelezo 10 ya bidhaa kwa bei maalum\"", "Burudani ya bure", "Kununua hisa"], answer: 1, why: "Kifurushi kimoja kwa bei moja maalum." },
          { objective: "O1", q: "Kauli ipi kuhusu mapato ya AI ni ya kweli?", options: ["Unahitaji prompt tu", "AI inakuletea pesa ukiwa umelala bila kazi yoyote", "Kila biashara ya AI inapata pesa haraka", "Hakuna njia inayoleta pesa yenyewe; kila moja inahitaji wateja na thamani"], answer: 3, why: "Mapato halisi yanahitaji thamani halisi na kazi." },
          { objective: "O2", q: "Una ujuzi na muda lakini huna hadhira. Njia ipi kwa kawaida huleta pesa haraka zaidi?", options: ["Huduma au huduma za kifurushi", "Maudhui yaliyodhaminiwa", "Usajili kwa hadhira", "Viungo vya washirika"], answer: 0, why: "Huduma zinaweza kuuzwa bila hadhira." },
          { objective: "O2", q: "Kwa nini uchague njia moja kwa siku 90?", options: ["AI inaruhusu moja tu", "Ni sheria", "Kujaribu zote kwa wakati mmoja ni sababu inayojulikana watu kukosa kupata chochote", "Ili kuepuka wateja"], answer: 2, why: "Kuzingatia jambo moja huleta matokeo." },
          { objective: "O3", q: "Bei yako inapaswa kuwa:", options: ["Juu ya thamani yoyote", "Chini ya gharama zako", "Kati ya kiwango chako cha chini cha gharama na thamani kwa mteja", "Sifuri"], answer: 2, why: "Hiyo inalipa gharama na inaonyesha thamani." }
        ]
      }
    },
    {
      name: "Sura 2: Tengeneza, jaribu na ubaki salama",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kutengeneza bidhaa ya kidijitali kwa AI",
          minutes: 6,
          goal: "Tengeneza toleo la kwanza la bidhaa ya kidijitali kwa msaada wa AI na utaalamu wako mwenyewe.",
          text: [
            "Bidhaa nzuri za kidijitali hutatua tatizo moja kwa aina moja ya mnunuzi: \"Mpango wa kila wiki wa kuandaa chakula kwa wanaofanya kazi za zamu\", \"Violezo 20 vya barua pepe kwa wasafishaji wa nyumba\", \"Orodha ya kukagua ya kufungua gari la kuuza chakula katika mji wako\". Uzoefu wako ndio unaoifanya ifae kununuliwa; AI inaharakisha uandishi na usanifu.",
            "Hatua: tengeneza muhtasari kwa AI, andika sehemu muhimu kwa ujuzi wako mwenyewe, kagua kila ukweli, isanifu kwa Canva au kwenye hati, na uijaribu kwa wanunuzi wawili au watatu kabla ya kuizindua kwa upana.",
            "Hakimiliki ni muhimu: Ofisi ya Hakimiliki ya Marekani (US Copyright Office) inasema kazi iliyotengenezwa na AI peke yake hailindwi, wakati kazi yako mwenyewe ya ubunifu na marekebisho yako yanaweza kulindwa. Weka kazi halisi ya mtu katika chochote unachotaka kumiliki, na usiige kamwe bidhaa ya mtu mwingine. Ukitoa madai kuhusu matokeo (\"punguza uzito\", \"pata $1,000\"), lazima uweze kuyathibitisha."
          ],
          steps: ["Chagua tatizo moja na mnunuzi mmoja.", "Tengeneza muhtasari wa bidhaa kwa AI.", "Andika sehemu muhimu kutokana na uzoefu wako.", "Kagua ukweli na uisanifu.", "Ijaribu kwa wanunuzi wawili au watatu na uiboreshe."],
          words: [["Bidhaa ya kidijitali", "kitu kinachotengenezwa mara moja na kuuzwa mara nyingi mtandaoni, kama kiolezo au mwongozo."], ["Hakimiliki (copyright)", "haki ya kisheria ya kudhibiti unakili wa kazi asili ya ubunifu."]],
          slides: [
            { title: "Tatizo moja, mnunuzi mmoja", bullets: ["Mpango wa kuandaa chakula kwa wanaofanya kazi za zamu", "Violezo vya barua pepe kwa wasafishaji wa nyumba", "Uzoefu wako ndio unaoifanya ifae kununuliwa"] },
            { title: "Itengeneze", bullets: ["Muhtasari kwa AI", "Andika sehemu muhimu kwa ujuzi wako", "Kagua ukweli, sanifu, jaribu"] },
            { title: "Hakimiliki na madai", bullets: ["Kazi ya AI peke yake hailindwi", "Ongeza kazi halisi ya mtu; usiige kamwe", "Thibitisha madai yoyote ya matokeo"] }
          ],
          sources: [{ name: "US Copyright Office: Part 2 Copyrightability report announcement (tangazo la ripoti kuhusu hakimiliki)", url: "https://www.copyright.gov/newsnet/2025/1060.html" }, { name: "FTC: Advertising and Marketing Basics (misingi ya matangazo na masoko)", url: "https://www.ftc.gov/business-guidance/advertising-marketing/advertising-marketing-basics" }],
          tryIt: "Tengeneza toleo la kwanza la bidhaa ndogo ya kidijitali (au kifurushi cha kwanza cha huduma yako) kwa msaada wa AI na utaalamu wako mwenyewe. Kagua kila ukweli.",
          youCanNow: "kutengeneza bidhaa ya kidijitali inayounganisha utaalamu wako na kasi ya AI.",
          quickCheck: [
            { objective: "O4", q: "Kinachofanya bidhaa ya kidijitali ifae kununuliwa ni nini?", options: ["Ni ndefu sana", "Ilitengenezwa yote na AI", "Inatatua tatizo moja kwa mnunuzi mmoja kwa kutumia utaalamu halisi", "Inagusa kila mada"], answer: 2, why: "Bidhaa zinazolenga jambo moja na zilizojengwa kwa utaalamu halisi huwapa wanunuzi thamani." },
            { objective: "O4", q: "AI inaongeza \"wanunuzi wanapata $1,000 kwa mwezi\" kwenye ukurasa wa bidhaa yako. Huna ushahidi. Unafanya nini?", options: ["Kuiacha", "Kuifanya $500 badala yake", "Kuiweka kwa maandishi madogo", "Kuiondoa"], answer: 3, why: "Madai ya mapato lazima yathibitishwe." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Mapato ya kila mwezi na uzinduzi mdogo",
          minutes: 5,
          goal: "Buni ofa ya kila mwezi au kifurushi cha pamoja na ufanye jaribio la uzinduzi la siku 30.",
          text: [
            "Mapato ya kila mwezi (pesa inayoingia kila mwezi) ni imara zaidi kuliko mauzo ya mara moja. Chaguo: kifurushi cha maudhui au violezo cha kila mwezi, mpango wa msaada kwa wateja wa huduma, uanachama, au zana ndogo ya usajili. Vifurushi vya pamoja (bidhaa pamoja na simu fupi, au bidhaa tatu pamoja) huongeza thamani ya kila mauzo.",
            "Fanya uzinduzi mdogo: waambie watu wanaokujua tayari, jamii unayoshiriki, au wateja wa zamani. Tumia AI kuandika rasimu ya tangazo, lakini lifanye la kibinafsi na la kweli. Ukitumia washirika au wadhamini, weka hilo wazi kabisa (kwa mfano \"#ad\" mwanzoni).",
            "Weka lengo la siku 30 (kwa mfano mauzo 5 au wanachama 3), lifuatilie, na uwaulize wanunuzi ni nini kiliwafanya wanunue na nini kingeifanya iwe bora zaidi."
          ],
          steps: ["Buni ofa moja ya kila mwezi au kifurushi cha pamoja.", "Andika rasimu ya ujumbe wa kweli wa uzinduzi kwa AI na uufanye wa kibinafsi.", "Uwashirikishe watu na vikundi vinavyokujua tayari.", "Weka wazi kabisa wadhamini au washirika wowote.", "Fuatilia lengo lako la siku 30 na uwaombe wanunuzi maoni."],
          words: [["Mapato ya kila mwezi (recurring revenue)", "mapato yanayojirudia mara kwa mara, kama usajili wa kila mwezi."], ["Kifurushi cha pamoja (bundle)", "bidhaa au huduma kadhaa zinazouzwa pamoja."], ["Ufichuzi (disclosure)", "kuwaambia watu wazi kuhusu uhusiano wa kulipwa."]],
          slides: [
            { title: "Kila mwezi ni bora kuliko mara moja", bullets: ["Vifurushi vya kila mwezi au mipango ya msaada", "Uanachama au zana ndogo", "Vifurushi vya pamoja huongeza thamani ya kila mauzo"] },
            { title: "Zindua kwa udogo na kwa ukweli", bullets: ["Watu na vikundi vinavyokujua", "AI inaandika rasimu; wewe unaifanya ya kibinafsi", "Weka wazi wadhamini na washirika"] },
            { title: "Lengo la siku 30", bullets: ["Mauzo 5 au wanachama 3", "Lifuatilie", "Waulize wanunuzi kwa nini walinunua"] }
          ],
          sources: [{ name: "FTC: Endorsement Guides, What People Are Asking (maswali kuhusu miongozo ya udhamini)", url: "https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking" }],
          tryIt: "Buni ofa moja ya kila mwezi au kifurushi cha pamoja, andika ujumbe wako wa uzinduzi, na uweke lengo la siku 30 pamoja na jinsi utakavyolifuatilia.",
          youCanNow: "kubuni mapato ya kila mwezi na kuzindua ofa kwa jaribio lililo wazi linaloweza kupimwa.",
          quickCheck: [
            { objective: "O5", q: "Mapato ya kila mwezi ni nini?", options: ["Mapato yanayojirudia, kama usajili wa kila mwezi", "Mauzo ya mara moja", "Kurudishiwa kodi", "Mkopo"], answer: 0, why: "Ofa za kila mwezi huleta mapato kila mwezi." },
            { objective: "O5", q: "Kampuni inakulipa utaje zana yake ya AI katika jarida lako. Unafanya nini?", options: ["Kuficha malipo", "Kuliweka wazi kabisa, kama \"#ad\" mwanzoni", "Kulitaja mwishoni kabisa kwa maandishi madogo tu", "Kukataa kulifuatilia"], answer: 1, why: "Maudhui yaliyodhaminiwa lazima yawekwe wazi kabisa." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kutambua ulaghai wa kupata pesa kwa AI",
          minutes: 5,
          goal: "Tumia orodha ya dalili za hatari kabla ya kulipia mpango wowote wa mapato ya AI au ukocha.",
          text: [
            "Mipango mingi inauza \"mapato ya AI\": maduka ya mtandaoni yanayotengenezwa kwa niaba yako, roboti za AI za biashara ya hisa au sarafu, kozi za \"mapato ya kupumzika\". FTC imechukua hatua dhidi ya kadhaa. Katika kesi moja iliyoieleza, kampuni iliahidi kutumia AI kuchagua bidhaa zinazouzwa zaidi kwa maduka ya mtandaoni, lakini FTC ilidai kwamba madai yake ya mapato hayakuwa na msingi na wateja wengi hawakurudishiwa walicholipa.",
            "Ushauri wa FTC kabla ya kununua nafasi ya biashara au ukocha: omba hati ya ufichuzi ya ukurasa mmoja inayotakiwa kisheria; hakikisha inataja jina la muuzaji na kesi zozote mahakamani; soma masharti ya kughairi na kurudishiwa pesa; omba watu wa kukuthibitishia (references); kama wanadai unaweza kupata pesa, pata taarifa ya madai ya mapato; na uondoke kama wanachosema hakilingani na hati zao.",
            "Dalili nyingine za hatari: mapato yanayohakikishwa, kukuharakisha ununue leo, ada kubwa za mwanzo, \"AI ya siri\" isiyoelezwa, na mikataba inayokuzuia kuandika maoni ya kweli. Ripoti ulaghai unaoshukiwa katika ReportFraud.ftc.gov. Kozi hii haipendekezi bidhaa yoyote ya uwekezaji wala ya biashara ya hisa au sarafu."
          ],
          steps: ["Omba hati ya ufichuzi ya ukurasa mmoja.", "Kagua jina la muuzaji na kesi mahakamani.", "Soma masharti ya kurudishiwa pesa na kughairi.", "Omba watu wa kukuthibitishia na taarifa ya madai ya mapato.", "Ondoka kama chochote hakilingani; ripoti ulaghai katika ReportFraud.ftc.gov."],
          words: [["Nafasi ya biashara (business opportunity)", "mpango unaouzwa kama njia iliyo tayari ya kuanza kupata pesa."], ["Dai la mapato", "kauli kuhusu kiasi cha pesa unachoweza kupata."], ["Dalili ya hatari (red flag)", "ishara ya onyo ya ulaghai."]],
          slides: [
            { title: "Mipango ya \"mapato ya AI\"", bullets: ["Maduka ya tayari, roboti za biashara, mapato ya kupumzika", "FTC ilichukua hatua kwa madai ya mapato yasiyo na msingi"] },
            { title: "FTC: kabla ya kununua", bullets: ["Hati ya ufichuzi ya ukurasa mmoja", "Jina la muuzaji na kesi mahakamani", "Masharti ya kurudishiwa pesa, wathibitishaji, taarifa ya mapato"] },
            { title: "Dalili za hatari", bullets: ["Mapato yanayohakikishwa, kuharakishwa ununue leo", "Ada kubwa za mwanzo, \"AI ya siri\" isiyoelezwa", "Kukatazwa kuandika maoni ya kweli"] },
            { title: "Ukiwa na shaka", bullets: ["Ondoka", "Ripoti katika ReportFraud.ftc.gov"] }
          ],
          sources: [{ name: "FTC Consumer Alert: Vetting a business or coaching opportunity before you buy in (onyo kwa watumiaji)", url: "https://www.consumer.ftc.gov/consumer-alerts/2023/08/vetting-business-or-coaching-opportunity-you-buy" }],
          tryIt: "Kazi ya mwisho: andika orodha yako ya dalili za hatari, kisha kamilisha mpango wako wa kupata pesa: njia na kwa nini, ofa yenye bei, bidhaa ya kwanza au ofa ya kila mwezi, na jaribio la uzinduzi la siku 30.",
          youCanNow: "kupata pesa kwa AI kupitia ofa za kweli zilizojaribiwa na kuepuka ulaghai wa kupata pesa kwa AI.",
          quickCheck: [
            { objective: "O6", q: "Ipi ni dalili ya hatari katika mpango wa mapato ya AI?", options: ["Kipindi cha majaribio cha bure bila ahadi", "Bei zilizo wazi na sera ya kurudishiwa pesa", "Mapato yanayohakikishwa na kuharakishwa ulipe leo", "Mkataba ulioandikwa"], answer: 2, why: "Mapato yanayohakikishwa na kuharakishwa ununue sasa ni ishara za onyo." },
            { objective: "O6", q: "Kocha anataka ada kubwa ya mwanzo kwa nafasi ya biashara ya \"duka la AI\". Unafanya nini kwanza?", options: ["Kulipa haraka kabla bei haijapanda", "Kukopa pesa", "Kusaini bila kusoma", "Kuomba hati ya ufichuzi ya ukurasa mmoja na kukagua orodha yako ya dalili za hatari"], answer: 3, why: "Omba hati ya ufichuzi na ukague dalili za hatari kabla ya kulipa." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Tengeneza, jaribu na ubaki salama",
        questions: [
          { objective: "O4", q: "Kinachofanya bidhaa ya kidijitali ifae kununuliwa ni nini?", options: ["Inatatua tatizo moja kwa mnunuzi mmoja, kwa kutumia utaalamu wako halisi", "Ilitengenezwa na AI peke yake", "Ni ndefu sana", "Inaiga bidhaa inayouzwa sana"], answer: 0, why: "Utaalamu pamoja na tatizo lililo wazi huleta thamani." },
          { objective: "O4", q: "Je, kazi iliyotengenezwa na AI peke yake inalindwa na hakimiliki nchini Marekani?", options: ["Ikiuzwa tu", "Ndiyo, kila wakati", "Picha tu", "Hapana, kwa mujibu wa Ofisi ya Hakimiliki"], answer: 3, why: "Hakimiliki inahitaji kazi ya mwandishi ambaye ni mtu." },
          { objective: "O5", q: "Ipi ni mapato ya kila mwezi?", options: ["Mauzo ya mara moja", "Usajili wa violezo wa kila mwezi", "Zawadi", "Kurudishiwa pesa"], answer: 1, why: "Yanajirudia kila mwezi." },
          { objective: "O6", q: "Mpango unaahidi \"$10,000 kwa mwezi zinazohakikishwa kwa maduka yetu ya AI\". Hii ni nini?", options: ["Dalili ya hatari", "Uwekezaji salama", "Mpango wa serikali", "Nafasi ya kawaida ya kazi"], answer: 0, why: "Mapato yanayohakikishwa ni ishara ya kawaida ya ulaghai." },
          { objective: "O6", q: "Ni hati gani unapaswa kuomba kabla ya kununua nafasi ya biashara?", options: ["Taarifa yako mwenyewe ya benki", "Faili la nembo yao", "Hati ya ufichuzi ya ukurasa mmoja", "Picha ya mtu maarufu"], answer: 2, why: "FTC inasema uombe hati hii inayotakiwa kisheria." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Mikakati ya Kupata Pesa kwa AI",
    questions: [
      { objective: "O1", q: "Monetize (kupata pesa kutoka kitu) maana yake ni:", options: ["Kutumia pesa", "Kutafuta njia ya kupata pesa kutoka kwa kitu", "Kutoa bure", "Kukopa pesa"], answer: 1, why: "Hiyo ndiyo maana yake." },
      { objective: "O1", q: "Ipi ni huduma inayosaidiwa na AI?", options: ["Kulipia matangazo", "Kununua sarafu za kidijitali (crypto)", "Kutazama video", "Kuandika machapisho ya mitandao ya kijamii kwa wateja haraka zaidi kwa AI"], answer: 3, why: "Unafanya kazi ya wateja kwa msaada wa AI." },
      { objective: "O1", q: "Bidhaa ya kidijitali ni:", options: ["Mkopo", "Mzigo unaosafirishwa", "Ushauri wa mara moja", "Kitu kinachotengenezwa mara moja na kuuzwa mara nyingi mtandaoni"], answer: 3, why: "Violezo na miongozo ni mifano." },
      { objective: "O1", q: "Kiungo cha mshirika:", options: ["Ni zawadi ya bure", "Kinakulipa kamisheni mtu anaponunua kupitia kiungo hicho", "Ni fomu ya kodi", "Ni nywila"], answer: 1, why: "Hivyo ndivyo mapato ya washirika yanavyofanya kazi." },
      { objective: "O1", q: "Kupunguza gharama kunahesabiwa kama kupata pesa kwa sababu:", options: ["Kunaepuka wateja", "Ni bure", "Pesa iliyookolewa katika biashara ni pesa iliyopatikana", "AI inakulipa"], answer: 2, why: "Gharama za chini huongeza faida." },
      { objective: "O1", q: "Kwa kiasi kikubwa AI inasaidia kwa:", options: ["Kupunguza muda wa kutengeneza na kufikisha", "Kuhakikisha mapato", "Kutafuta wateja yenyewe", "Kuondoa kazi yote"], answer: 0, why: "AI inaharakisha kazi; wateja bado wanahitaji thamani." },
      { objective: "O2", q: "Kama una biashara tayari, mwanzo mzuri ni:", options: ["Kuanzisha njia sita mpya", "Kuiacha", "Kupunguza gharama na huduma ya ziada kwa wateja ulio nao", "Kununua kozi ya mapato ya AI"], answer: 2, why: "Jenga juu ya ulicho nacho tayari." },
      { objective: "O2", q: "Unapaswa kuzingatia njia ngapi kwa siku 90?", options: ["Moja", "Sita", "Hakuna", "Nyingi kadri inavyowezekana"], answer: 0, why: "Kuzingatia jambo moja huleta matokeo." },
      { objective: "O3", q: "Kwa kiasi kikubwa wateja wanalipia:", options: ["Dakika zako", "Matokeo", "Zana zako", "Nembo yako"], answer: 1, why: "Weka bei kwa thamani." },
      { objective: "O3", q: "Kiwango chako cha chini cha bei ni:", options: ["Bei ya mshindani", "Bei ya juu kabisa", "Sifuri", "Gharama pamoja na faida"], answer: 3, why: "Chini yake unapoteza pesa." },
      { objective: "O3", q: "Nani anaweka na kukagua bei zako za mwisho?", options: ["Wewe", "AI", "Mshindani wako", "Hakuna mtu"], answer: 0, why: "AI inaweza kupendekeza; wewe unaamua na kukagua." },
      { objective: "O3", q: "Mapato ya kujiajiri kwa kawaida yanamaanisha kulipa:", options: ["Ada kwa kampuni ya AI tu", "Hakuna kodi", "Kodi ya mauzo tu", "Kodi ya kujiajiri pamoja na kodi ya mapato"], answer: 3, why: "Tazama kituo cha kodi cha IRS kwa watu wanaojiajiri." },
      { objective: "O4", q: "Bidhaa nzuri ya kidijitali inalenga:", options: ["Kuiga bidhaa inayopendwa", "Kila kitu kwa kila mtu", "Tatizo moja kwa aina moja ya mnunuzi", "Chochote AI inachopendekeza"], answer: 2, why: "Kulenga jambo moja kunaipa thamani." },
      { objective: "O4", q: "Kama bidhaa yako inadai \"pata $1,000 kwa mwezi\", lazima:", options: ["Uongeze \"inahakikishwa\"", "Uweze kulithibitisha", "Ulifiche kwa maandishi madogo", "Hakuna kitu"], answer: 1, why: "Madai ya matangazo lazima yawe ya kweli na yawe na ushahidi." },
      { objective: "O5", q: "Kifurushi cha pamoja ni:", options: ["Kipindi cha majaribio cha bure", "Kitu kimoja", "Kurudishiwa pesa", "Bidhaa au huduma kadhaa zinazouzwa pamoja"], answer: 3, why: "Vifurushi vya pamoja huongeza thamani ya kila mauzo." },
      { objective: "O5", q: "Ukipata pesa kutoka kwa mdhamini, lazima:", options: ["Ulitaje mara moja kwa mwaka", "Ulifiche", "Uliweke wazi kabisa, kama \"#ad\" mwanzoni", "Uwaambie marafiki tu"], answer: 2, why: "Mwongozo wa FTC kuhusu udhamini unataka liwekwe wazi kabisa." },
      { objective: "O5", q: "Lengo zuri la uzinduzi la siku 30 ni:", options: ["Mauzo 5 au wanachama 3", "Hakuna lengo", "Watumiaji milioni moja", "Chochote kitakachotokea"], answer: 0, why: "Malengo madogo na yaliyo wazi yanaweza kupimwa." },
      { objective: "O6", q: "Katika kesi moja ya FTC, kampuni iliahidi kuwa AI ingechagua bidhaa bora kwa maduka ya mtandaoni. FTC ilisema:", options: ["Ilifanya kazi vizuri kabisa", "Madai yake ya mapato hayakuwa na msingi na wateja wengi hawakurudishiwa pesa zao", "Ulikuwa mpango wa serikali", "Kila mtu alitajirika"], answer: 1, why: "Hii inatoka kwenye onyo la FTC kwa watumiaji." },
      { objective: "O6", q: "Ipi ni dalili ya hatari?", options: ["Masharti yaliyo wazi ya kurudishiwa pesa", "Kuharakishwa ununue leo kwa ada kubwa ya mwanzo", "Wathibitishaji unaoweza kuwapigia simu", "Hati ya ufichuzi iliyoandikwa"], answer: 1, why: "Kuharakishwa na ada kubwa za mwanzo ni ishara za ulaghai." },
      { objective: "O6", q: "Unaweza kuripoti wapi ulaghai unaoshukiwa wa nafasi ya biashara?", options: ["ReportFraud.ftc.gov", "Tovuti ya tapeli", "Jukwaa lolote la mtandaoni", "Hakuna mahali"], answer: 0, why: "FTC inakusanya ripoti hapo." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [0, 2, 6, 7, 8, 9, 12, 14, 16, 18]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Njia na kwa nini", objective: "O2", notYet: "Hakuna njia iliyochaguliwa, au njia kadhaa kwa wakati mmoja.", meets: "Njia moja pamoja na sababu iliyoandikwa kwa nini inalingana na ujuzi, muda na hadhira ya mwanafunzi.", exceeds: "Pia inataja njia zipi ziliachwa na kwa nini." },
      { name: "Bei kwa thamani", objective: "O3", notYet: "Bei iko chini ya kiwango cha chini cha gharama, au hakuna hesabu.", meets: "Bei iko kati ya kiwango cha chini na thamani, pamoja na bei za washindani wawili na hesabu iliyokaguliwa.", exceeds: "Anaeleza thamani kwa maneno ya mteja." },
      { name: "Bidhaa au ofa ya kwanza", objective: "O4", notYet: "Maudhui ya AI yasiyokaguliwa, au madai yasiyoweza kuthibitishwa.", meets: "Toleo la kwanza kwa tatizo moja na mnunuzi mmoja, ukweli umekaguliwa, pamoja na utaalamu wa mwanafunzi mwenyewe.", exceeds: "Imeonyeshwa kwa angalau mnunuzi mmoja anayewezekana ili kupata maoni." },
      { name: "Jaribio la uzinduzi", objective: "O5", notYet: "Hakuna lengo au hakuna njia ya kulifuatilia.", meets: "Jaribio la siku 30 lenye lengo wazi, ujumbe wa uzinduzi na ufuatiliaji.", exceeds: "Lina ofa ya kila mwezi au kifurushi cha pamoja na ufichuzi wa udhamini wowote." },
      { name: "Orodha ya dalili za hatari", objective: "O6", notYet: "Hakuna orodha, au haina mapato yanayohakikishwa au mbinu za kuharakisha.", meets: "Orodha inayogusa ahadi za uhakika, kuharakishwa, ada za mwanzo na hati ya ufichuzi.", exceeds: "Inataja mahali pa kuripoti ulaghai unaoshukiwa." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaofikia lengo lao la uzinduzi la siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi wanaoripoti kuepuka mpango wa kupata pesa kwa AI kwa sababu ya orodha ya dalili za hatari",
      "Wanafunzi wanaoanza kozi nyingine ya Koach Learn ya wajasiriamali ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye msaidizi wa AI wa bure",
      "Lahajedwali kwa hesabu za bei na kufuatilia uzinduzi",
      "Orodha ya ujuzi wako, saa zako, watu unaowajua na hadhira yako",
      "Kama dakika 60 kwa masomo na majaribio, pamoja na jaribio la uzinduzi la siku 30"
    ],
    facilitatorNotes: [
      "Sema mwanzoni kwamba hakuna mapato yanayohakikishwa na kozi haitoi ushauri wa uwekezaji.",
      "Waambie wanafunzi washirikiane wawili wawili kuelezana njia waliyochagua na bei yao ili kupimana uhalisia.",
      "Pitieni pamoja mifano halisi (ya wazi kwa umma) ya FTC ya mipango ya kupata pesa kwa AI na mjenge orodha ya dalili za hatari kama kikundi.",
      "Elekeza maswali ya kodi kwenye vyanzo rasmi au kwa mhasibu.",
      "Pima mpango wa kupata pesa kwa rubriki, mstari mmoja wa Bado kwa wakati."
    ]
  }
};
