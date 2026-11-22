"use strict";

// Koach Learn course (Swahili translation of underserved/underserved-ai-employment.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "underserved-ai-employment-sw",
  lang: "sw",
  translationOf: "underserved-ai-employment",
  category: "Undeserved Community",
  name: "AI kwa Ajira na Utayari wa Kazi",
  skills: "Kupata msaada wa kazi wa bure, Kutaja ujuzi wako, Kuandika CV ya ukurasa mmoja kwa AI, Kulinganisha CV na tangazo la kazi, Kufanya mazoezi ya majibu ya usaili, Kutambua ulaghai wa kazi",
  outcome: "kutumia msaidizi wa AI wa bure kuandika CV ya ukurasa mmoja inayolingana na tangazo halisi la kazi, kufanya mazoezi ya kujibu maswali ya kawaida ya usaili, na kutambua dalili za ulaghai wa kazi.",
  about: [
    "Kutafuta kazi ni kugumu, hasa kama kuna vipindi ulivyokaa bila kazi, kama mara nyingi umefanya vibarua vya pesa taslimu, au kama umekuwa ukitunza familia. Una ujuzi mwingi kuliko unavyofikiri, na zana za bure zinaweza kukusaidia kuuonyesha.",
    "Utapata msaada wa kazi wa bure karibu nawe, utageuza uzoefu wako (wa kulipwa na usiolipwa) kuwa orodha ya ujuzi, utaandika CV ya ukurasa mmoja kwa AI, utailinganisha na tangazo halisi la kazi, utajiandaa kwa usaili, na utajifunza kutambua ulaghai wa kazi.",
    "Kila somo linachukua kama dakika tano na lina kazi ya \"Jaribu sasa\". Kila sura inaishia na jaribio la maarifa, na kozi inaishia na mtihani wa maswali 20."
  ],
  finalTask: "Tafuta tangazo halisi la kazi unaloweza kuliomba. Tumia msaidizi wa AI kuandika CV ya ukurasa mmoja inayolingana na tangazo hilo, bila namba zozote za binafsi ndani yake. Kisha iambie AI ikuulize maswali matatu ya kawaida ya usaili, jibu kila moja kwa sauti, na uombe ushauri mmoja wa kuboresha kila jibu.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watafuta kazi katika jamii zisizohudumiwa vya kutosha, wakiwemo watu wenye vipindi bila kazi, watu ambao mara nyingi wamefanya vibarua vya pesa taslimu, walezi wanaorudi kazini, vijana wazima, na watu wanaozungumza Kiingereza kama lugha ya pili.",
    startingPoint: "Wana uzoefu halisi wa kazi na maisha lakini huenda hawauoni kama ujuzi wa kazi. Wanaweza kutumia simu na labda kompyuta kidogo. Wachache wana CV ya sasa au wamefanya mazoezi ya usaili, na baadhi wamewahi kulengwa na ulaghai wa kazi.",
    gap: "Waajiri wanatarajia CV inayolingana na kazi na usaili wa kujiamini, na walaghai wa kazi wanawalenga watu wanaohitaji kazi. Wanafunzi wanahitaji kuonyesha ujuzi wao halisi, kutumia zana za bure na msaada wa kazi wa bure, na kujilinda wanapotafuta kazi.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi (kama darasa la 6)",
      "Vifaa: simu janja au kompyuta ya maktaba au ya kituo cha ajira",
      "Gharama: zana za bure na msaada wa kazi wa bure tu",
      "Faragha: hakuna namba ya Social Security, tarehe ya kuzaliwa wala namba kamili za kitambulisho ndani ya AI au kwenye CV",
      "Uaminifu: kila ujuzi kwenye CV lazima uwe wa kweli na uwe na mfano halisi"
    ],
    prerequisites: "Hakuna. Wanafunzi wapya kwa wasaidizi wa AI wanaweza kuanza na kozi \"Introduction to AI and Digital Empowerment\" (Utangulizi wa AI na Uwezeshaji wa Kidijitali)."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukitumia CareerOneStop au simu 1-877-US-2JOBS", action: "kupata American Job Center (kituo cha ajira cha umma) kilicho karibu nawe na mahali pengine pamoja pa bure pa kupata msaada wa kazi", standard: "ukiandika anwani, namba ya simu na saa zake za kazi" },
    { id: "O2", condition: "Ukipewa uzoefu wako wa kulipwa na usiolipwa", action: "kuorodhesha ujuzi wa kazi unaoonyeshwa na uzoefu huo kwa msaada wa msaidizi wa AI", standard: "ukibakiza tu ujuzi unaoweza kuutolea mfano halisi" },
    { id: "O3", condition: "Ukipewa orodha yako ya ujuzi na historia yako", action: "kuandika CV ya ukurasa mmoja kwa msaidizi wa AI na zana ya bure ya kuandika nyaraka", standard: "yenye kila sehemu kuu na bila namba ya Social Security wala tarehe ya kuzaliwa" },
    { id: "O4", condition: "Ukipewa tangazo halisi la kazi", action: "kubadilisha CV yako ilingane na ujuzi na maneno ya tangazo hilo", standard: "ukitumia taarifa za kweli tu na kuhifadhi nakala yenye jina la kazi hiyo" },
    { id: "O5", condition: "Msaidizi wa AI akiwa kama mtu anayekusaili", action: "kujibu kwa sauti maswali ya kawaida ya usaili kwa hadithi fupi za kweli", standard: "ukiomba na kutumia ushauri mmoja kwa kila jibu" },
    { id: "O6", condition: "Ukipewa ofa ya kazi au tangazo la kazi", action: "kulikagua kama lina dalili za ulaghai wa kazi na kuthibitisha kampuni wewe mwenyewe", standard: "kabla ya kutoa namba yoyote ya benki au ya Social Security" }
  ],
  chapters: [
    {
      name: "Sura 1: Kujiandaa",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kupata msaada wa kazi wa bure karibu nawe",
          minutes: 4,
          goal: "Pata American Job Center kilicho karibu nawe na mahali pengine pamoja pa bure pa kupata msaada wa kazi.",
          text: [
            "American Job Centers ni vituo vya ajira vya umma kote nchini Marekani. Vinawasaidia watafuta kazi kutafuta kazi, kuwapeleka kwa waajiri na kuwapatia nafasi za kazi, na vingi pia vina kompyuta, warsha na taarifa za mafunzo. Baadhi ya huduma zina masharti kuhusu nani anastahili na zinaweza kutofautiana kati ya majimbo.",
            "Unaweza kupata kituo kilicho karibu nawe kwa American Job Center Finder kwenye CareerOneStop, tovuti ya Wizara ya Kazi ya Marekani (U.S. Department of Labor), au kwa kupiga simu 1-877-US-2JOBS.",
            "Maktaba za umma pia zinasaidia kutafuta kazi, kuchapisha CV na kutumia kompyuta bure. Msaada halisi wa kazi haukuombi kamwe ulipe ili upate kazi."
          ],
          steps: ["Fungua American Job Center Finder kwenye careeronestop.org, au piga simu 1-877-US-2JOBS.", "Andika ZIP code (namba ya posta) yako au jina la mji wako.", "Andika anwani, namba ya simu na saa za kazi za kituo kilicho karibu zaidi.", "Uliza maktaba yako ina msaada gani wa kutafuta kazi."],
          words: [["American Job Center", "kituo cha umma kinachowasaidia watu kupata kazi na mafunzo."], ["Kupelekwa (referral)", "kituo kinapokutuma kwa kazi au programu inayoweza kukufaa."]],
          sources: [
            { name: "U.S. Department of Labor: American Job Centers", url: "https://www.dol.gov/agencies/eta/american-job-centers" },
            { name: "CareerOneStop: American Job Center Finder", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" }
          ],
          slides: [
            { title: "American Job Centers", bullets: ["Vituo vya ajira vya umma kote nchini", "Kutafuta kazi, kupelekwa na kupata nafasi", "Baadhi ya huduma zinatofautiana kati ya majimbo"] },
            { title: "Pata kituo chako", bullets: ["American Job Center Finder kwenye careeronestop.org", "Au piga simu 1-877-US-2JOBS"] },
            { title: "Msaada mwingine wa bure", bullets: ["Maktaba za umma: kompyuta, kuchapisha, msaada wa kazi", "Msaada halisi wa kazi haukutozi pesa ili upate kazi"] }
          ],
          tryIt: "Tafuta American Job Center kilicho karibu nawe na uandike anwani yake, namba ya simu na saa za kazi.",
          youCanNow: "kupata msaada rasmi wa kazi wa bure karibu nawe.",
          quickCheck: [
            { objective: "O1", q: "CareerOneStop ni nini?", options: ["Tovuti ya Wizara ya Kazi ya Marekani inayokusaidia kupata vituo vya ajira", "Wakala wa kazi wa kulipia", "Mtandao wa kijamii", "Benki ya watafuta kazi"], answer: 0, why: "CareerOneStop ni tovuti ya Wizara ya Kazi yenye American Job Center Finder." },
            { objective: "O1", q: "Unahitaji kuchapisha CV na kutumia kompyuta bure. Unaweza kwenda wapi kwingine?", options: ["Tovuti inayotoza ada ya kujiandikisha", "Maktaba ya umma", "Ofisi ya nyumbani ya mtu usiyemjua", "Duka la kubadilisha hundi kuwa pesa"], answer: 1, why: "Maktaba za umma zinasaidia kutafuta kazi, kuchapisha na kutumia kompyuta bure." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kutaja ujuzi wako, wa kulipwa na usiolipwa",
          minutes: 5,
          goal: "Geuza uzoefu wako wa kazi na maisha kuwa orodha ya ujuzi wa kazi.",
          text: [
            "Watu wengi husema \"Sina ujuzi wowote\" ilhali wanao. Kutunza watoto au mzazi mzee, kusimamia bajeti ya nyumbani, kupika kwa ajili ya shughuli ya kanisa, kutengeneza magari ya majirani au kufanya vibarua vya pesa taslimu vyote vinajenga ujuzi halisi.",
            "Mwambie msaidizi wa AI ulichofanya, kwa maneno rahisi, na umwombe akigeuze kuwa ujuzi wa kazi. Kwa mfano: \"Kwa miaka mitano nilimtunza bibi yangu, nilisimamia dawa zake na miadi yake, na nilisimamia bajeti ya nyumbani. Hii inaonyesha ujuzi gani wa kazi?\"",
            "Chagua ujuzi ulio wa kweli na unaoweza kuutolea mfano. Usibakize kitu chochote usichoweza kukithibitisha katika usaili."
          ],
          steps: ["Andika kila kitu ulichowahi kufanya: kazi za kulipwa, vibarua vya pesa taslimu, kutunza watu, kujitolea, shule.", "Iombe AI iorodheshe ujuzi wa kazi unaoonyeshwa na kila kimoja.", "Bakiza tu ujuzi unaoweza kuutolea mfano halisi.", "Hifadhi orodha hiyo kwa ajili ya CV yako."],
          words: [["Ujuzi", "kitu unachojua kukifanya vizuri, kama kupanga ratiba, kuhudumia wateja au kutumia mashine ya kulipia dukani."], ["Ujuzi unaohamishika", "ujuzi kutoka sehemu moja ya maisha unaosaidia katika kazi tofauti."]],
          slides: [
            { title: "Una ujuzi mwingi kuliko unavyofikiri", bullets: ["Kutunza watu, kupanga bajeti, kupika kwa shughuli", "Vibarua vya pesa taslimu, kujitolea, kutengeneza vitu"] },
            { title: "Iombe AI iutaje", bullets: ["Eleza ulichofanya kwa maneno rahisi", "\"Hii inaonyesha ujuzi gani wa kazi?\""] },
            { title: "Uwe wa kweli", bullets: ["Bakiza ujuzi unaoweza kuutolea mfano", "Ondoa chochote usichoweza kukithibitisha"] }
          ],
          tryIt: "Andika vitu vitatu ulivyowahi kufanya (vya kulipwa au visivyolipwa). Muombe msaidizi wa AI ataje ujuzi wa kazi unaoonyeshwa na kila kimoja. Bakiza ule unaoweza kuutolea mfano halisi.",
          youCanNow: "kugeuza uzoefu wako wa kulipwa na usiolipwa kuwa orodha ya kweli ya ujuzi wa kazi.",
          quickCheck: [
            { objective: "O2", q: "Ni uzoefu upi usiolipwa unaojenga ujuzi wa kazi?", options: ["Kutazama TV", "Kulala kwa muda mrefu", "Kupika kwa ajili ya shughuli ya kanisa", "Kupitia mitandao ya kijamii"], answer: 2, why: "Kupika kwa ajili ya shughuli kunaonyesha ujuzi wa kupanga, kufanya kazi pamoja na kushughulikia chakula." },
            { objective: "O2", q: "AI inasema kulea watoto wa watu kunaonyesha \"usimamizi wa miradi\" lakini huwezi kutoa mfano. Unafanya nini?", options: ["Ubakize; unasikika vizuri", "Utunge mfano", "Uuongeze mara mbili", "Usiuweke kwenye orodha yako"], answer: 3, why: "Bakiza tu ujuzi unaoweza kuuthibitisha kwa mfano halisi katika usaili." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kuandika CV ya ukurasa mmoja kwa AI",
          minutes: 6,
          goal: "Andika CV rahisi ya ukurasa mmoja kwa msaidizi wa AI na zana ya bure ya kuandika nyaraka.",
          text: [
            "CV (résumé) ni muhtasari wa ukurasa mmoja wa ujuzi na uzoefu wako. CV rahisi na safi ni bora kuliko CV ya mapambo mengi.",
            "Ipe AI orodha yako ya ujuzi, kazi au shughuli zako pamoja na tarehe, na mafunzo au shule yoyote. Omba CV ya ukurasa mmoja yenye sehemu hizi: mstari wa mawasiliano, muhtasari mfupi, ujuzi, uzoefu, na elimu au mafunzo.",
            "Usiweke namba yako ya Social Security, tarehe ya kuzaliwa wala namba kamili za kitambulisho kwenye CV au ndani ya AI. Andika namba yako ya simu na barua pepe kwenye nyaraka ya mwisho wewe mwenyewe. Nakili matokeo kwenye zana ya bure kama Google Docs au Microsoft Word kwenye wavuti, na uihifadhi kama PDF ya kutuma."
          ],
          steps: ["Ipe AI ujuzi wako, kazi au shughuli zako pamoja na tarehe, na mafunzo yako.", "Omba CV ya ukurasa mmoja: mstari wa mawasiliano, muhtasari, ujuzi, uzoefu, elimu.", "Inakili kwenye Google Docs au Word kwenye wavuti.", "Ongeza namba ya simu na barua pepe wewe mwenyewe; usiweke namba ya Social Security wala tarehe ya kuzaliwa.", "Isome kwa sauti, rekebisha makosa, na uihifadhi kama PDF."],
          words: [["CV (résumé)", "muhtasari wa ukurasa mmoja wa ujuzi, kazi na mafunzo yako kwa ajili ya waajiri."], ["PDF", "aina ya faili inayofanya nyaraka yako ionekane vilevile kwenye kifaa chochote."]],
          slides: [
            { title: "Rahisi na safi ndiyo bora", bullets: ["Ukurasa mmoja", "Rahisi kusoma"] },
            { title: "Sehemu tano", bullets: ["Mstari wa mawasiliano na muhtasari mfupi", "Ujuzi", "Uzoefu", "Elimu au mafunzo"] },
            { title: "Iweke salama", bullets: ["Hakuna namba ya Social Security wala tarehe ya kuzaliwa", "Ongeza simu na barua pepe wewe mwenyewe", "Ihifadhi kama PDF ya kutuma"] }
          ],
          tryIt: "Tumia orodha yako ya ujuzi kutoka Somo la 2 kumwomba msaidizi wa AI CV ya ukurasa mmoja. Inakili kwenye Google Docs au Word kwenye wavuti na uisome kwa sauti.",
          youCanNow: "kuandika CV rahisi ya ukurasa mmoja kwa AI na zana ya bure ya kuandika nyaraka.",
          quickCheck: [
            { objective: "O3", q: "Ni sehemu zipi zinafaa kwenye CV rahisi?", options: ["Mstari wa mawasiliano, muhtasari, ujuzi, uzoefu, elimu au mafunzo", "Namba ya Social Security na tarehe ya kuzaliwa", "Picha ya ukurasa mzima", "Taarifa za benki yako"], answer: 0, why: "Sehemu hizi tano zinawapa waajiri wanachohitaji kwenye ukurasa mmoja." },
            { objective: "O3", q: "Unapaswa kuongeza namba ya simu na barua pepe kwenye CV lini?", options: ["Uziandike ndani ya AI kwanza", "Uziandike kwenye nyaraka ya mwisho wewe mwenyewe", "Usiziweke kabisa", "Uziweke mtandaoni"], answer: 1, why: "Kuziongeza mwenyewe kwenye nyaraka kunazuia taarifa binafsi zisiingie ndani ya AI." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kujiandaa",
        questions: [
          { objective: "O1", q: "Unawezaje kupata American Job Center kilicho karibu nawe?", options: ["Ujumbe mfupi kutoka kwa mtu usiyemjua", "American Job Center Finder kwenye CareerOneStop, au 1-877-US-2JOBS", "Tangazo linalojitokeza ghafla kwenye skrini", "Tovuti ya kulipia"], answer: 1, why: "Hizi ndizo njia rasmi za kupata kituo." },
          { objective: "O1", q: "Tovuti inasema lazima ulipe ada ili upate kazi. Hii ni:", options: ["Kawaida", "Inatakiwa na sheria", "Dalili ya hatari; msaada halisi wa kazi haukutozi pesa ili upate kazi", "Nafuu nzuri"], answer: 2, why: "Waajiri waaminifu na vituo vya ajira havikutozi pesa ili upate kazi." },
          { objective: "O2", q: "Ulimtunza bibi yako kwa miaka mitano. Kwenye CV hii inaonyesha:", options: ["Ujuzi halisi kama kupanga ratiba na kusimamia dawa", "Hakuna kitu cha maana", "Pengo unalopaswa kulificha", "Kupika tu"], answer: 0, why: "Kutunza watu kunajenga ujuzi halisi unaohamishika." },
          { objective: "O2", q: "AI inaorodhesha ujuzi ambao huna kweli. Unapaswa:", options: ["Kuubakiza", "Kutunga mfano", "Kuongeza mingine miwili", "Kuuondoa"], answer: 3, why: "Bakiza tu unachoweza kuthibitisha katika usaili." },
          { objective: "O3", q: "Ni kipi HAKIPASWI kuwekwa kwenye CV yako au ndani ya AI?", options: ["Ujuzi wako", "Namba yako ya Social Security", "Vyeo vya kazi zako", "Mafunzo yako"], answer: 1, why: "Namba za Social Security na tarehe za kuzaliwa hazifai kwenye CV." }
        ]
      }
    },
    {
      name: "Sura 2: Kuomba kazi na kusailiwa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kulinganisha CV yako na tangazo la kazi",
          minutes: 5,
          goal: "Badilisha CV yako ilingane na kile ambacho tangazo halisi la kazi linaomba.",
          text: [
            "Waajiri wanataka kuona kwamba unafaa kazi yao. Tangazo la kazi linaorodhesha wanachohitaji. CV yako ikitumia ujuzi na maneno yaleyale, ni rahisi kuona mlingano.",
            "Bandika tangazo la kazi na CV yako ndani ya AI na uulize: \"Ni ujuzi upi katika tangazo hili ambao tayari ninauonyesha? Pendekeza mabadiliko kwenye CV yangu ili ilingane vizuri zaidi, ukitumia taarifa za kweli tu.\"",
            "Kuwa mwaminifu. Kulinganisha maana yake ni kuonyesha ujuzi wako halisi kwa maneno ya mwajiri, si kuongeza mambo ambayo hujafanya."
          ],
          steps: ["Tafuta tangazo halisi la kazi unaloweza kuliomba.", "Bandika tangazo na CV yako ndani ya AI (bila namba za binafsi).", "Uliza ni ujuzi upi unalingana na nini kibadilishwe, ukitumia taarifa za kweli tu.", "Sasisha CV yako na uhifadhi nakala mpya yenye jina la kazi hiyo."],
          words: [["Tangazo la kazi", "taarifa kutoka kwa mwajiri inayoeleza kazi na wanachohitaji."], ["Maneno muhimu (keywords)", "maneno muhimu kutoka kwenye tangazo la kazi, kama \"huduma kwa wateja\" au \"forklift\" (gari la kubebea mizigo)."]],
          slides: [
            { title: "Onyesha mlingano", bullets: ["Tangazo linaorodhesha wanachohitaji", "Tumia ujuzi na maneno yaleyale"] },
            { title: "Iulize AI", bullets: ["Bandika tangazo na CV yako", "\"Ni ujuzi upi tayari ninauonyesha?\"", "\"Pendekeza mabadiliko ya kweli ili ilingane vizuri zaidi.\""] },
            { title: "Baki mwaminifu", bullets: ["Ujuzi wako halisi, maneno yao", "Hifadhi nakala yenye jina la kila kazi"] }
          ],
          tryIt: "Tafuta tangazo moja halisi la kazi karibu nawe. Muombe msaidizi wa AI alilinganishe na CV yako na apendekeze mabadiliko ya kweli. Hifadhi nakala mpya kwa ajili ya kazi hiyo.",
          youCanNow: "kulinganisha CV yako na tangazo halisi la kazi kwa uaminifu.",
          quickCheck: [
            { objective: "O4", q: "\"Kulinganisha\" CV kunamaanisha nini?", options: ["Kuongeza kazi ambazo hukuwahi kuwa nazo", "Kutumia mtindo wa herufi sawa na mwajiri", "Kuonyesha ujuzi wako halisi kwa maneno ya mwajiri", "Kuifanya iwe kurasa mbili"], answer: 2, why: "Kulinganisha kunaonyesha ujuzi wako wa kweli kwa maneno yanayotumiwa na tangazo." },
            { objective: "O4", q: "Tangazo linaomba \"huduma kwa wateja\" na uliwasaidia wanunuzi katika kibarua cha pesa taslimu. Unafanya nini?", options: ["Usiuweke", "Useme ulisimamia duka", "Uandike \"sina uzoefu\"", "Ueleze kama huduma kwa wateja, pamoja na maelezo ya kweli"], answer: 3, why: "Uzoefu wako halisi unalingana na neno lao muhimu, kwa hiyo unalisema kwa uaminifu kwa maneno yao." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kufanya mazoezi ya usaili",
          minutes: 5,
          goal: "Fanya mazoezi ya kujibu maswali ya kawaida ya usaili kwa msaidizi wa AI.",
          text: [
            "Usaili unakuwa rahisi zaidi ukifanya mazoezi. Msaidizi wa AI anaweza kuigiza kama mtu anayekusaili. Uliza: \"Kuwa kama msaili wa kazi hii. Niulize swali moja la kawaida kwa wakati mmoja na usubiri jibu langu. Baada ya kila jibu, nipe ushauri mmoja.\"",
            "Maswali ya kawaida ni pamoja na: \"Niambie kuhusu wewe.\" \"Kwa nini unataka kazi hii?\" \"Niambie kuhusu wakati ulipotatua tatizo.\" Tumia hadithi fupi ya kweli: kilichotokea, ulichofanya, na jinsi kilivyoisha.",
            "Sema majibu yako kwa sauti, si kichwani tu. Kama kuna kipindi ulichokaa bila kazi, jizoeze sentensi moja fupi ya kweli kuhusu hilo kisha zungumza kuhusu kile ulicho tayari kufanya sasa."
          ],
          steps: ["Iombe AI iwe msaili wa tangazo lako la kazi.", "Jibu swali moja kwa wakati, kwa sauti, kisha uliandike.", "Tumia hadithi fupi ya kweli: kilichotokea, ulichofanya, matokeo.", "Omba ushauri mmoja baada ya kila jibu na ujaribu tena."],
          words: [["Usaili (interview)", "mkutano ambapo mwajiri anakuuliza maswali ili kuamua kama akuajiri."], ["Pengo la kazi", "kipindi ambacho hukuwa na kazi ya kulipwa."]],
          slides: [
            { title: "AI inaweza kuigiza msaili", bullets: ["Swali moja kwa wakati", "Ushauri mmoja baada ya kila jibu"] },
            { title: "Maswali ya kawaida", bullets: ["\"Niambie kuhusu wewe.\"", "\"Kwa nini unataka kazi hii?\"", "\"Niambie kuhusu wakati ulipotatua tatizo.\""] },
            { title: "Jibu kwa hadithi fupi", bullets: ["Kilichotokea", "Ulichofanya", "Jinsi kilivyoisha"] },
            { title: "Jizoeze kwa sauti", bullets: ["Sema, usifikiri tu", "Pengo la kazi: sentensi moja ya kweli, kisha endelea"] }
          ],
          tryIt: "Muombe msaidizi wa AI akusaili kwa kazi ya Somo la 4. Jibu maswali mawili kwa sauti, andika majibu yako, na uombe ushauri mmoja kwa kila jibu.",
          youCanNow: "kufanya mazoezi ya majibu ya usaili kwa AI na kuyaboresha kwa maoni unayopewa.",
          quickCheck: [
            { objective: "O5", q: "Baada ya kila jibu la mazoezi, uiombe AI ifanye nini?", options: ["Ikupe ushauri mmoja wa kuliboresha", "Ikuandikie jibu lako", "Imalize usaili", "Iruke hadi kazi inayofuata"], answer: 0, why: "Ushauri mmoja kwa wakati unakusaidia kuboresha kila jibu." },
            { objective: "O5", q: "Msaili anauliza kuhusu pengo la miaka miwili ulipokuwa ukitunza familia. Unasema nini?", options: ["Utunge kazi", "Sentensi moja fupi ya kweli, kisha kile ulicho tayari kufanya sasa", "Ukatae kujibu", "Uzungumze kuhusu hilo kwa dakika kumi"], answer: 1, why: "Jibu fupi la kweli, kisha kuangazia unachoweza kufanya sasa, ndilo lenye nguvu zaidi." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kutambua ulaghai wa kazi",
          minutes: 5,
          goal: "Tambua dalili za hatari za ulaghai wa kazi na ujue la kufanya.",
          text: [
            "Ulaghai wa kazi unawalenga watu wanaohitaji kazi. Federal Trade Commission (FTC) inaonya kwamba waajiri waaminifu hawatakuomba kamwe ulipe ili upate kazi.",
            "Dalili nyingine za hatari: wanakutumia hundi (cheki) na kukuomba urudishe sehemu ya pesa au ununue kadi za zawadi (gift cards); wanaahidi malipo makubwa kwa kazi ndogo; kazi ni kupokea vifurushi na kuvituma tena; au ofa inakuja ghafla bila kutarajia.",
            "Ofa ikionekana nzuri mno, simama. Tafuta kampuni wewe mwenyewe, piga namba yake halisi ya simu, au uliza kwenye American Job Center chako. Usitoe kamwe namba yako ya benki au ya Social Security kabla ya kuthibitisha kuwa kazi ni halisi."
          ],
          steps: ["Usilipe kamwe ili upate kazi.", "Usiweke kamwe hundi benki kisha urudishe pesa.", "Tafuta kampuni wewe mwenyewe na upige namba yake halisi.", "Uliza American Job Center chako kama huna uhakika."],
          words: [["Ulaghai wa hundi bandia", "mlaghai anatuma hundi, anakuomba urudishe sehemu ya pesa, kisha hundi inakataliwa na unadaiwa na benki."], ["FTC", "Federal Trade Commission, shirika la Marekani linalowalinda wateja dhidi ya ulaghai."]],
          sources: [{ name: "FTC: Job Scams", url: "https://consumer.ftc.gov/articles/job-scams" }],
          slides: [
            { title: "Usilipe kamwe ili upate kazi", bullets: ["FTC: waajiri waaminifu hawakuombi kamwe ulipe", "Hakuna ada za vifaa, mafunzo au dhamana"] },
            { title: "Dalili nyingine za hatari", bullets: ["Kurudisha pesa kutoka kwa hundi", "Malipo makubwa kwa kazi ndogo", "Kutuma tena vifurushi", "Ofa zinazokuja ghafla"] },
            { title: "Jilinde", bullets: ["Tafuta kampuni wewe mwenyewe", "Piga namba yake halisi", "Uliza American Job Center chako"] }
          ],
          tryIt: "Kazi ya mwisho: CV yako ikiwa imelinganishwa na tangazo halisi, iambie AI ikuulize maswali matatu ya usaili, jibu kila moja kwa sauti, na uombe ushauri mmoja wa kuboresha kila jibu. Kagua tangazo kama lina dalili zozote za ulaghai.",
          youCanNow: "kuomba kazi halisi kwa CV iliyolinganishwa, kufanya mazoezi ya usaili, na kutambua ulaghai wa kazi.",
          quickCheck: [
            { objective: "O6", q: "Ni ipi dalili ya hatari ya ulaghai wa kazi?", options: ["Tangazo lenye anwani halisi ya kampuni", "Usaili katika ofisi ya kampuni", "Malipo makubwa yanayoahidiwa kwa kazi ndogo sana", "Kazi iliyoorodheshwa kwenye American Job Center chako"], answer: 2, why: "Ofa zinazoahidi malipo makubwa kwa kazi ndogo ni dalili ya kawaida ya ulaghai." },
            { objective: "O6", q: "\"Mwajiri\" mpya anakutumia ujumbe akiomba namba yako ya benki kabla ya usaili wowote. Unafanya nini?", options: ["Uitume ili ulipwe haraka", "Utume nusu ya namba", "Umwombe rafiki atume yake", "Usimame na utafute kampuni wewe mwenyewe"], answer: 3, why: "Usitoe kamwe namba yako ya benki kabla ya kuthibitisha kuwa kazi ni halisi." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kuomba kazi na kusailiwa",
        questions: [
          { objective: "O4", q: "Kwa nini ulinganishe CV yako na tangazo la kazi?", options: ["Ili mwajiri aone kwamba unafaa kazi", "Ili iwe ndefu zaidi", "Ili uongeze ujuzi usio nao", "Haina faida"], answer: 0, why: "Kulinganisha kunaonyesha unavyofaa kweli kwa maneno ya mwajiri." },
          { objective: "O4", q: "Unapolinganisha, unapaswa:", options: ["Kuongeza kazi ambazo hukuwahi kuwa nazo", "Kunakili tangazo neno kwa neno", "Kutumia ujuzi wako halisi kwa maneno ya mwajiri", "Kuondoa uzoefu wako wote"], answer: 2, why: "Lengo ni kulinganisha kwa uaminifu." },
          { objective: "O5", q: "Ni njia ipi nzuri ya kujibu \"Niambie kuhusu wakati ulipotatua tatizo\"?", options: ["\"Sijawahi kuwa na matatizo.\"", "Orodha ndefu ya kazi", "\"Sijui.\"", "Hadithi fupi ya kweli: kilichotokea, ulichofanya, jinsi kilivyoisha"], answer: 3, why: "Hadithi fupi inaonyesha ujuzi wako waziwazi." },
          { objective: "O6", q: "\"Kampuni\" inakutumia hundi na kukuomba ununue kadi za zawadi kwa sehemu yake. Hii ni:", options: ["Kazi ya kawaida ya siku ya kwanza", "Ulaghai wa hundi bandia", "Bonasi", "Mafunzo"], answer: 1, why: "FTC inaorodhesha hili kama ulaghai wa kawaida wa kazi." },
          { objective: "O6", q: "Huna uhakika kama ofa ya kazi ni halisi. Unafanya nini?", options: ["Kutafuta kampuni wewe mwenyewe na kupiga namba yake halisi", "Kutuma namba yako ya benki ili kukagua", "Kulipa ada ili ujue", "Kukubali mara moja"], answer: 0, why: "Kukagua mwenyewe kunakulinda." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI kwa Ajira na Utayari wa Kazi",
    questions: [
      { objective: "O1", q: "American Job Centers zinasaidia:", options: ["Mikopo ya magari", "Kutafuta kazi, kupelekwa kwa waajiri na kupata nafasi za kazi", "Kulipa kodi tu", "Kununua nyumba"], answer: 1, why: "Ni vituo vya ajira vya umma." },
      { objective: "O1", q: "CareerOneStop inaendeshwa pamoja na:", options: ["Kampuni ya michezo ya video", "Benki", "Wizara ya Kazi ya Marekani (U.S. Department of Labor)", "Mtandao wa kijamii"], answer: 2, why: "Ni tovuti ya Wizara ya Kazi." },
      { objective: "O1", q: "Ni namba ipi ya simu inakusaidia kupata vituo vya ajira?", options: ["1-877-US-2JOBS", "911", "Namba kutoka tangazo linalojitokeza ghafla", "Namba ya benki yako"], answer: 0, why: "1-877-US-2JOBS ni simu ya msaada wa kazi ya Wizara ya Kazi." },
      { objective: "O2", q: "Ni uzoefu upi unaweza kuhesabiwa kama ujuzi wa kazi?", options: ["Kazi za ofisini tu", "Kazi zinazohitaji diploma tu", "Hakuna kitu kisicholipwa", "Kutunza watu, kujitolea, vibarua vya pesa taslimu na kazi za kulipwa"], answer: 3, why: "Kazi isiyolipwa na isiyo rasmi inajenga ujuzi halisi." },
      { objective: "O2", q: "Ujuzi unaohamishika ni:", options: ["Ujuzi wa kuhamisha pesa", "Ujuzi kutoka sehemu moja ya maisha unaosaidia katika kazi nyingine", "Tiketi ya basi", "Aina ya CV"], answer: 1, why: "Unahamia kutoka mazingira moja hadi mengine." },
      { objective: "O2", q: "Ni ujuzi upi ubaki kwenye orodha yako?", options: ["Ule unaoweza kuutolea mfano halisi", "Wote ambao AI inapendekeza", "Ule unaosikika wa kuvutia", "Ule kutoka CV ya rafiki"], answer: 0, why: "Lazima uweze kuuthibitisha." },
      { objective: "O3", q: "CV nzuri ni:", options: ["Kurasa tano", "Iliyojaa picha", "Ukurasa mmoja, rahisi na safi", "Iliyoandikwa kwa mkono"], answer: 2, why: "Fupi na wazi ni rahisi zaidi kwa waajiri." },
      { objective: "O3", q: "Ni kipi kisiwekwe kamwe kwenye CV?", options: ["Ujuzi", "Uzoefu", "Mafunzo", "Namba ya Social Security"], answer: 3, why: "Namba za binafsi hazipaswi kuwa kwenye CV." },
      { objective: "O3", q: "Kwa nini uhifadhi CV yako kama PDF?", options: ["Inaifanya ionekane vilevile kwenye kifaa chochote", "Inaifanya iwe ndefu zaidi", "Inaongeza rangi", "Waajiri wanailipia"], answer: 0, why: "PDF zinaweka mpangilio usibadilike." },
      { objective: "O3", q: "Unaweza kuandika CV bure wapi?", options: ["Studio ya usanifu ya kulipia", "Google Docs au Word kwenye wavuti", "Ujumbe mfupi", "Kikokotoo"], answer: 1, why: "Zote mbili ni zana za bure za kuandika nyaraka." },
      { objective: "O4", q: "Maneno muhimu (keywords) ni:", options: ["Nywila", "Funguo za nyumba yako", "Maneno muhimu kutoka kwenye tangazo la kazi", "Misimbo ya benki"], answer: 2, why: "Kuyatumia kunaonyesha mlingano." },
      { objective: "O4", q: "Prompt nzuri ya kulinganisha inaiomba AI:", options: ["Itunge uzoefu", "Ikuandikie jina jipya", "Ifanye CV iwe kurasa tatu", "Ipendekeze mabadiliko ya kweli ili ilingane vizuri zaidi"], answer: 3, why: "Kulinganisha kwa uaminifu ndio ujuzi wenyewe." },
      { objective: "O4", q: "Unaomba kazi mbili tofauti. Unapaswa:", options: ["Kuhifadhi nakala ya CV yenye jina la kila kazi", "Kutumia CV moja kwa kila kazi bila mabadiliko", "Kutoomba", "Kunakili kila tangazo ndani ya CV yako"], answer: 0, why: "Kila kazi inapata nakala yake iliyolinganishwa." },
      { objective: "O5", q: "AI inawezaje kukusaidia kujiandaa kwa usaili?", options: ["Inaenda kwenye usaili kwa niaba yako", "Inaigiza msaili na kukupa ushauri", "Inakuhakikishia kazi", "Inampigia mwajiri simu"], answer: 1, why: "Mazoezi pamoja na maoni yanajenga kujiamini." },
      { objective: "O5", q: "Fanya mazoezi ya majibu ya usaili:", options: ["Kichwani tu", "Kamwe", "Kwa sauti", "Kwa maandishi tu"], answer: 2, why: "Kuyasema kwa sauti kunakuandaa kwa usaili halisi." },
      { objective: "O5", q: "Hadithi nzuri ya jibu ina:", options: ["Tatizo tu", "Hadithi ya mtu mwingine", "Hakuna kitu mahususi", "Kilichotokea, ulichofanya, na jinsi kilivyoisha"], answer: 3, why: "Mpangilio huo unaonyesha ujuzi wako." },
      { objective: "O5", q: "Kama una pengo la kazi, jizoeze:", options: ["Sentensi moja fupi ya kweli, kisha kile ulicho tayari kufanya sasa", "Kulificha", "Kuomba msamaha kwa muda mrefu", "Kazi ya kutunga"], answer: 0, why: "Kweli na fupi, kisha angalia mbele." },
      { objective: "O6", q: "Kwa mujibu wa FTC, waajiri waaminifu:", options: ["Wanatoza ada ndogo", "Hawakuombi kamwe ulipe ili upate kazi", "Wanataka kadi za zawadi", "Wanalipa kwa hundi ambazo lazima urudishe sehemu yake"], answer: 1, why: "Kulipa ili upate kazi ni dalili ya ulaghai." },
      { objective: "O6", q: "Ni kazi ipi ni ulaghai wa kawaida?", options: ["Mhudumu wa malipo katika duka linalojulikana", "Msaidizi wa maktaba", "Kupokea na kutuma tena vifurushi ukiwa nyumbani", "Dereva wa basi la shule"], answer: 2, why: "Kazi za kutuma tena vifurushi ni ulaghai unaojulikana." },
      { objective: "O6", q: "Unapaswa kumpa mwajiri mpya namba yako ya benki lini?", options: ["Katika ujumbe wa kwanza", "Ili upate usaili", "Kabla ya kuona tangazo la kazi", "Baada tu ya kuthibitisha kuwa ni kazi halisi"], answer: 3, why: "Thibitisha kwanza kuwa kazi ni halisi." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 3, 7, 10, 13, 15, 17, 19] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "CV ya ukurasa mmoja", objective: "O3", notYet: "Ni ndefu kuliko ukurasa mmoja, sehemu zinakosekana, au ina namba za binafsi.", meets: "Ukurasa mmoja wenye mstari wa mawasiliano, muhtasari, ujuzi, uzoefu na elimu, bila namba za binafsi.", exceeds: "Imesomwa kwa sauti, makosa yamerekebishwa, na imehifadhiwa kama PDF." },
      { name: "Imelinganishwa na tangazo", objective: "O4", notYet: "CV haitumii ujuzi au maneno ya tangazo, au inaongeza mambo yasiyo ya kweli.", meets: "Inatumia ujuzi muhimu wa tangazo katika sentensi za kweli.", exceeds: "Imehifadhiwa kama nakala tofauti yenye jina la kazi hiyo." },
      { name: "Ujuzi halisi", objective: "O2", notYet: "Inaorodhesha ujuzi ambao mwanafunzi hawezi kuutolea mfano.", meets: "Kila ujuzi una mfano halisi kutoka kazi ya kulipwa au isiyolipwa.", exceeds: "Inajumuisha ujuzi usiolipwa kama kutunza watu au kujitolea, pamoja na mifano iliyo wazi." },
      { name: "Majibu ya usaili", objective: "O5", notYet: "Majibu chini ya matatu, au hayakusemwa kwa sauti.", meets: "Maswali matatu yamejibiwa kwa sauti, na ushauri mmoja umeombwa kwa kila moja.", exceeds: "Alijaribu kila jibu tena akitumia ushauri, kwa hadithi fupi ya kweli." },
      { name: "Ukaguzi wa ulaghai", objective: "O6", notYet: "Hakukagua tangazo kama lina dalili za hatari.", meets: "Alikagua tangazo kama lina dalili za ulaghai na akatafuta kampuni.", exceeds: "Anaweza kutaja dalili zipi za hatari zilikuwepo na zipi hazikuwepo." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaoomba angalau kazi moja ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi wanaopata usaili wa kazi au kazi ndani ya siku 90",
      "Wanafunzi wanaotembelea American Job Center au wanaoripoti kuepuka ulaghai wa kazi"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu janja yenye intaneti, au kompyuta ya maktaba au ya kituo cha ajira",
      "Msaidizi wa AI wa bure: Microsoft Copilot, ChatGPT au Google Gemini",
      "Google Docs au Word kwenye wavuti (bure) kuandika na kuhifadhi CV",
      "Tangazo halisi la kazi ambalo mwanafunzi anaweza kuliomba",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Wasaidie wanafunzi kupata ujuzi wao usiolipwa kwanza; wengi wanadhani hawana.",
      "Kagua kila prompt na kila CV kama ina namba za Social Security, tarehe za kuzaliwa au namba nyingine za binafsi.",
      "Waweke wanafunzi wawili wawili kwa mazoezi ya usaili ili pia wajibu kwa sauti kwa mtu halisi.",
      "Shirikiana na American Job Center cha eneo lako na mwalike mfanyakazi wake kama inawezekana.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
