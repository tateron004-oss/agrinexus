"use strict";

// Koach Learn course (Swahili translation of shared/esl-everyday-english.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.
// ESL course: every English phrase being taught stays in English inside double quotes; only the explanations are in Swahili.

module.exports = {
  id: "esl-everyday-english-sw",
  lang: "sw",
  translationOf: "esl-everyday-english",
  category: "Workforce Development",
  name: "Kiingereza kwa Maisha ya Kila Siku (ESL)",
  skills: "Kujitambulisha, Kumwomba mtu arudie au aongee polepole, Kununua na kulipa, Kuongea na daktari na kupanga miadi, Kuuliza njia",
  outcome: "kutumia vifungu vifupi vya adabu vya Kiingereza kujitambulisha, kuwaomba watu warudie au waongee polepole, kununua na kulipa, kumweleza daktari tatizo lako, kupanga miadi kwa simu na kuuliza njia.",
  about: [
    "Kozi hii ni kwa watu wazima wanaojifunza Kiingereza na wanaotaka kukitumia katika maisha ya kila siku nchini Marekani: dukani, kwa daktari, kwenye simu, kwenye shule ya mtoto wako na barabarani.",
    "Kila somo linakupa vifungu vifupi vya kusema, mazungumzo mafupi ya mfano, na mazoezi unayoweza kufanya kwa sauti nyumbani, peke yako au na mwenzako. Huhitaji sarufi kamili. Unahitaji vifungu vinavyofanya kazi, na ujasiri wa kuvitumia.",
    "Kila somo linachukua kama dakika tano. Soma somo, soma mazungumzo ya mfano kwa sauti, kisha fanya kazi ya \"Jaribu sasa\". Kuna maswali mawili mafupi baada ya kila somo, jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni.",
    "Mwishoni utatengeneza kadi yako ya vifungu vya Kiingereza cha Kila Siku, yenye sentensi unazozihitaji zaidi, na utaifanyia mazoezi kwa sauti."
  ],
  finalTask: "Tengeneza kadi yako ya vifungu vya Kiingereza cha Kila Siku na uifanyie mazoezi kwa sauti. Kwenye ukurasa mmoja andika: (1) utangulizi wako wa sentensi 3 hadi 4, (2) vifungu vitatu vya kumwomba mtu arudie, aongee polepole au ataje herufi za neno, (3) maswali mawili kwa duka unalokwenda, (4) maandishi mafupi ya simu ya kupanga miadi na daktari, na (5) swali moja la kuuliza njia ya kwenda mahali unapokwenda mara nyingi. Soma kadi yote kwa sauti, au iigize na mwenzako, na ujirekodi ukiweza.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima wanaojifunza Kiingereza kama lugha ya pili nchini Marekani: wahamiaji na wakimbizi, watafuta kazi, wazazi, wazee, na watu wanaorudi nyumbani kutoka gerezani ambao lugha yao ya kwanza si Kiingereza.",
    startingPoint: "Wanajua baadhi ya maneno ya Kiingereza na wanaweza kusema salamu chache. Wanaweza kusoma sentensi fupi rahisi. Mara nyingi wanaelewa zaidi kuliko wanavyoweza kusema, na wanaogopa kuongea na watu wasiowajua au kwenye simu.",
    gap: "Maisha ya kila siku yanahitaji Kiingereza kifupi cha kuongea: kukutana na watu, kununua, kwenda kwa daktari, simu na kuuliza njia. Bila vifungu vichache vilivyo tayari na njia ya kuwaomba watu warudie au waongee polepole, wanafunzi wanakwepa mazungumzo haya, wanategemea wengine au hawaelewi vizuri mambo muhimu kama saa za miadi.",
    constraints: [
      "Kiwango cha lugha: Kiingereza cha mwanzo hadi cha kati cha chini; maneno ya kawaida sana na sentensi fupi",
      "Kozi itatafsiriwa: vifungu vya Kiingereza vinavyofundishwa vinabaki kwa Kiingereza, ndani ya alama za nukuu",
      "Vifaa: simu au kompyuta ya maktaba; mazoezi yanafanyika kwa karatasi na sauti",
      "Muda: masomo ya dakika 4 hadi 6 yanayoingia kati ya kazi na familia",
      "Faragha: mazoezi yanatumia majina, namba na tarehe za kuzaliwa za kubuni, kamwe si namba halisi za binafsi"
    ],
    prerequisites: "Wanaweza kusoma alfabeti na maneno rahisi ya Kiingereza. Wanafunzi ambao bado hawawezi kusoma Kiingereza wanaweza kufanya kozi pamoja na mwalimu au msaidizi anayewasomea kwa sauti."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Unapokutana na mtu mpya", action: "kujitambulisha kwa Kiingereza kwa jina lako, unakotoka na kazi unayofanya, na kuuliza swali moja kwa mwenzako", standard: "kwa angalau sentensi tatu fupi" },
    { id: "O2", condition: "Usipoelewa mtu anachosema", action: "kumwomba mtu huyo arudie, aongee polepole au ataje herufi za neno kwa kifungu cha adabu cha Kiingereza", standard: "badala ya kujifanya umeelewa" },
    { id: "O3", condition: "Ukiwa dukani", action: "kuuliza bidhaa iko wapi, kuuliza bei na kusema utalipa vipi", standard: "kwa kutumia vifungu vya somo" },
    { id: "O4", condition: "Kwenye ofisi ya daktari au kwenye simu", action: "kusema tatizo lako na kupanga miadi kwa siku na saa inayokufaa", standard: "ukitaja jina lako, tatizo na saa, na kurudia saa hiyo" },
    { id: "O5", condition: "Ukipewa mahali unapohitaji kwenda", action: "kuuliza njia na kurudia maelekezo ili kuyakagua", standard: "ukitumia maneno ya mwelekeo kama \"left\", \"right\", \"straight\" na \"next to\"" }
  ],
  chapters: [
    {
      name: "Sura 1: Kukutana na watu na kununua",
      lessons: [
        {
          title: "Kusalimia na kujitambulisha",
          objectives: ["O1"],
          minutes: 5,
          goal: "Jitambulishe kwa sentensi tatu fupi na umuulize mwenzako swali moja.",
          text: [
            "Unapokutana na mtu mpya, anza na salamu: \"Hello.\" au \"Hi.\" Asubuhi unaweza kusema \"Good morning.\" Kisha sema jina lako: \"My name is Ana.\" au \"I'm Ana.\"",
            "Ongeza unakotoka na kazi unayofanya: \"I'm from Guatemala.\" \"I work at a restaurant.\" \"I'm looking for a job.\" Kisha muulize swali: \"What's your name?\" \"Where are you from?\" Akijibu, sema \"Nice to meet you.\"",
            "Mazungumzo ya mfano. A: \"Hi, I'm Ana. What's your name?\" B: \"I'm Sam. Nice to meet you.\" A: \"Nice to meet you too. I'm from Guatemala. I work at a restaurant.\" B: \"Oh, which one?\"",
            "Huhitaji sentensi ndefu. Sentensi tatu fupi zilizo wazi ni utangulizi mzuri. Tabasamu, mtazame mtu huyo na uongee polepole kidogo."
          ],
          steps: ["Salimia: \"Hello.\" au \"Good morning.\"", "Sema jina lako: \"My name is ...\" au \"I'm ...\"", "Sema unakotoka: \"I'm from ...\"", "Sema kazi unayofanya: \"I work at ...\" au \"I'm looking for a job.\"", "Uliza swali moja: \"What's your name?\" Kisha sema \"Nice to meet you.\""],
          words: [["\"I'm\"", "njia fupi ya kusema \"I am\" (mimi ni)."], ["\"Nice to meet you\"", "kifungu cha adabu unachosema unapokutana na mtu kwa mara ya kwanza (nimefurahi kukutana nawe)."], ["Kujitambulisha", "kumwambia mtu mpya wewe ni nani."]],
          slides: [
            { title: "Msalimie mtu", bullets: ["\"Hello.\" \"Hi.\"", "\"Good morning.\" \"Good afternoon.\""] },
            { title: "Sentensi tatu fupi", bullets: ["\"My name is Ana.\"", "\"I'm from Guatemala.\"", "\"I work at a restaurant.\""] },
            { title: "Muulize swali", bullets: ["\"What's your name?\"", "\"Where are you from?\"", "Kisha: \"Nice to meet you.\""] },
            { title: "Vidokezo", bullets: ["Fupi na wazi ni bora", "Tabasamu na umtazame mtu", "Ongea polepole kidogo"] }
          ],
          sources: [{ name: "USA Learns: kozi za bure za Kiingereza kwa watu wazima (Sacramento County Office of Education)", url: "https://www.usalearns.org/" }],
          tryIt: "Andika utangulizi wako mwenyewe: jina lako, unakotoka na kazi unayofanya, kwa sentensi tatu fupi. Ongeza swali moja la kumuuliza mwenzako. Usome kwa sauti mara tatu. Kisha useme bila kuangalia karatasi.",
          youCanNow: "kujitambulisha kwa sentensi tatu fupi za Kiingereza na kumuuliza mtu mpya swali.",
          quickCheck: [
            { objective: "O1", q: "Mtu anasema \"Nice to meet you.\" Jibu zuri ni lipi?", options: ["\"Goodbye.\"", "\"Nice to meet you too.\"", "\"I don't know.\"", "\"How much is it?\""], answer: 1, why: "\"Nice to meet you too\" ni jibu la adabu unapokutana na mtu." },
            { objective: "O1", q: "Utangulizi upi una jina, unakotoka na kazi unayofanya?", options: ["\"Hello. Hello. Hello.\"", "\"Where is the bus?\"", "\"I like pizza.\"", "\"I'm Ali. I'm from Somalia. I drive a truck.\""], answer: 3, why: "Unataja jina, nchi na kazi kwa sentensi tatu fupi." }
          ]
        },
        {
          title: "Kumwomba mtu arudie, aongee polepole au ataje herufi",
          objectives: ["O2"],
          minutes: 5,
          goal: "Mwombe mtu arudie, aongee polepole au ataje herufi za neno kwa kifungu cha adabu.",
          text: [
            "Kila mtu hukosa kusikia maneno wakati mwingine, hata wazungumzaji wa asili wa Kiingereza. Ni kawaida na ni adabu kuuliza. Ni bora sana kuliko kusema \"yes\" wakati hukuelewa.",
            "Vifungu vya kusaidia: \"Sorry, can you repeat that, please?\" \"Can you speak more slowly, please?\" \"How do you spell that?\" \"What does that word mean?\" \"Can you write it down, please?\"",
            "Ili kuhakikisha umeelewa, rudia ulichosikia: \"So, Tuesday at 3 o'clock?\" Ukikosa sehemu moja tu, uliza kuhusu sehemu hiyo: \"Sorry, what time?\"",
            "Mazungumzo ya mfano. A: \"Your pickup is at the side entrance at four fifteen.\" B: \"Sorry, can you speak more slowly, please?\" A: \"Side entrance. Four fifteen.\" B: \"So, the side door at 4:15?\" A: \"Yes, that's right.\""
          ],
          steps: ["Usijifanye umeelewa.", "Sema \"Sorry,\" kisha omba: arudie, aongee polepole, ataje herufi au aandike.", "Rudia sehemu muhimu ili kuikagua.", "Subiri aseme \"Yes, that's right.\""],
          words: [["\"Repeat\"", "kusema tena."], ["\"Slowly\"", "polepole, si kwa haraka."], ["\"Spell\"", "kutaja herufi za neno moja moja."]],
          slides: [
            { title: "Kuuliza ni kawaida na ni adabu", bullets: ["Kila mtu hukosa maneno wakati mwingine", "Kuuliza ni bora kuliko \"yes\" isiyo sahihi"] },
            { title: "Vifungu vya kuuliza", bullets: ["\"Sorry, can you repeat that, please?\"", "\"Can you speak more slowly, please?\"", "\"How do you spell that?\"", "\"Can you write it down, please?\""] },
            { title: "Kagua ulichosikia", bullets: ["Rudia: \"So, Tuesday at 3 o'clock?\"", "Uliza sehemu moja: \"Sorry, what time?\""] }
          ],
          tryIt: "Andika vifungu vinne vya kuomba msaada kwenye kadi ndogo na uiweke mfukoni au kwenye simu yako. Soma kila kimoja kwa sauti mara tano. Kisha sikiliza redio ya mazungumzo au video, na kila unapokosa kitu, sema kimoja ya vifungu hivyo kwa sauti.",
          youCanNow: "kumwomba mtu arudie, aongee polepole, ataje herufi au aandike neno, na kurudia ulichosikia ili kukikagua.",
          quickCheck: [
            { objective: "O2", q: "Mfanyakazi anaongea haraka sana na hukuelewa. Unasema nini?", options: ["\"Can you speak more slowly, please?\"", "\"Yes, yes.\"", "Husemi kitu; unaondoka", "\"Goodbye.\""], answer: 0, why: "Kumwomba mtu aongee polepole ni adabu na kunakupa taarifa unayohitaji." },
            { objective: "O2", q: "Nesi anataja jina la daktari wako na huwezi kuliandika. Unauliza nini?", options: ["\"How much is it?\"", "\"Where are you from?\"", "\"How do you spell that?\"", "\"What time is it?\""], answer: 2, why: "\"How do you spell that?\" kinaomba herufi ili uweze kuandika jina." }
          ]
        },
        {
          title: "Kununua: kutafuta bidhaa, bei na kulipa",
          objectives: ["O3"],
          minutes: 5,
          goal: "Uliza bidhaa iko wapi, uliza bei na useme utalipa vipi.",
          text: [
            "Ili kutafuta kitu, sema \"Excuse me\" kisha uliza: \"Where can I find the rice?\" au \"Do you have diapers?\" Mfanyakazi anaweza kusema \"Aisle 5\" (safu yenye namba dukani) au \"Sorry, we're out of it.\" (imekwisha).",
            "Ili kuuliza bei: \"How much is this?\" au \"How much are these?\" kwa vitu zaidi ya kimoja. Kwenye kaunta ya malipo, keshia anaweza kuuliza: \"Cash or card?\" \"Do you want a bag?\" \"Do you want your receipt?\" Jibu: \"Card, please.\" \"No bag, thanks.\" \"Yes, please.\"",
            "Weka risiti yako. Ili kurudisha kitu, sema: \"I'd like to return this, please. Here is my receipt.\" Kila duka lina sheria zake za kurudisha bidhaa, kwa hiyo unaweza kuuliza: \"What is your return policy?\"",
            "Mazungumzo ya mfano. A: \"Excuse me, where can I find the milk?\" B: \"In the back, next to the eggs.\" A: \"Thanks. How much is this?\" B: \"Three ninety-nine.\" A: \"Okay. Card, please.\""
          ],
          steps: ["Sema \"Excuse me\" ili kupata msaada.", "Uliza \"Where can I find ...?\"", "Uliza \"How much is this?\"", "Kwenye kaunta jibu \"Cash or card?\" na \"Do you want a bag?\"", "Weka risiti ili uweze kurudisha bidhaa."],
          words: [["\"Aisle\"", "safu dukani yenye rafu pande zote mbili. Inatamkwa kama \"I'll\"."], ["\"Receipt\"", "karatasi inayoonyesha ulichonunua na ulicholipa (risiti). Herufi p haitamkwi."], ["\"Return\"", "kurudisha kitu dukani ili urudishiwe pesa zako."], ["\"Cashier\"", "mfanyakazi anayepokea pesa zako kwenye kaunta ya malipo (keshia)."]],
          slides: [
            { title: "Kutafuta bidhaa", bullets: ["\"Excuse me, where can I find the rice?\"", "\"Do you have diapers?\"", "Jibu: \"Aisle 5.\""] },
            { title: "Kuuliza bei", bullets: ["Kitu kimoja: \"How much is this?\"", "Zaidi ya kimoja: \"How much are these?\""] },
            { title: "Kwenye kaunta ya malipo", bullets: ["\"Cash or card?\" - \"Card, please.\"", "\"Do you want a bag?\" - \"No bag, thanks.\"", "\"Do you want your receipt?\" - \"Yes, please.\""] },
            { title: "Kurudisha bidhaa", bullets: ["Weka risiti yako", "\"I'd like to return this, please.\"", "\"What is your return policy?\""] }
          ],
          tryIt: "Igiza na mwenzako, au cheza sehemu zote mbili kwa sauti: uko katika duka la vyakula. Uliza vitu viwili viko wapi, uliza bei ya kimoja, na ujibu maswali matatu ya keshia. Utakapoenda kununua tena, tumia kifungu kimoja kwa kweli.",
          youCanNow: "kuuliza kitu kiko wapi dukani, kuuliza bei, kumjibu keshia na kuomba kurudisha bidhaa.",
          quickCheck: [
            { objective: "O3", q: "Unataka kujua bei ya mashati mawili. Unauliza nini?", options: ["\"Where are you from?\"", "\"Can you spell that?\"", "\"What time is it?\"", "\"How much are these?\""], answer: 3, why: "\"How much are these?\" kinauliza bei ya vitu zaidi ya kimoja." },
            { objective: "O3", q: "Keshia anauliza \"Cash or card?\" Anataka kujua nini?", options: ["Utalipa vipi", "Jina lako", "Unakoishi", "Kama unataka mfuko"], answer: 0, why: "\"Cash or card?\" kinauliza utalipa vipi (pesa taslimu au kadi)." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kukutana na watu na kununua",
        questions: [
          { objective: "O1", q: "Ipi ni sentensi nzuri ya kwanza unapokutana na mtu?", options: ["\"How much is this?\"", "\"Hi, my name is Rosa.\"", "\"Turn left.\"", "\"I have a fever.\""], answer: 1, why: "Salamu na jina lako ndivyo utangulizi unavyoanza." },
          { objective: "O1", q: "Umesema jina lako. Swali zuri la kumuuliza mwenzako ni lipi?", options: ["\"Where is the milk?\"", "\"Cash or card?\"", "\"What's your name?\"", "\"Can I return this?\""], answer: 2, why: "Kumuuliza mtu jina lake kunaendeleza mazungumzo." },
          { objective: "O2", q: "Hukuelewa anwani. Jambo bora la kufanya ni lipi?", options: ["Kusema \"yes\" na kubahatisha", "Kuuliza \"Can you write it down, please?\"", "Kuondoka", "Kuuliza \"How much is it?\""], answer: 1, why: "Kumwomba mtu aiandike kunakupa anwani kamili." },
          { objective: "O2", q: "Mtu anasema \"Your appointment is Friday at nine.\" Unahakikishaje umesikia sawa?", options: ["\"So, Friday at 9?\"", "\"Nice to meet you.\"", "\"Do you have a bag?\"", "\"I'm from Haiti.\""], answer: 0, why: "Kurudia siku na saa kunamruhusu mtu kuthibitisha au kusahihisha." },
          { objective: "O3", q: "Unataka kurudisha viatu visivyokutosha. Unasema nini?", options: ["\"Where are you from?\"", "\"How do you spell that?\"", "\"Turn right.\"", "\"I'd like to return this, please. Here is my receipt.\""], answer: 3, why: "Kifungu hiki kinaomba kurudisha bidhaa na kuonyesha risiti." }
        ]
      }
    },
    {
      name: "Sura 2: Daktari, simu na kutafuta njia",
      lessons: [
        {
          title: "Kwa daktari: kusema tatizo lako",
          objectives: ["O4"],
          minutes: 5,
          goal: "Mwambie daktari au nesi tatizo lako, unaumia wapi na kwa muda gani.",
          text: [
            "Kwenye dawati la mapokezi, sema: \"Hi, I have an appointment at 10 o'clock. My name is Ana Lopez.\" Wanaweza kuuliza tarehe yako ya kuzaliwa na kadi yako ya bima.",
            "Ili kusema tatizo: \"I have a headache.\" \"I have a fever.\" \"My stomach hurts.\" \"My back hurts.\" \"I feel dizzy.\" Kisha sema ni kwa muda gani: \"It started two days ago.\" au \"I've had it since Monday.\" Daktari anaweza kuuliza: \"Does it hurt here?\" Jibu: \"Yes, there.\" au \"No.\"",
            "Ukihitaji msaada wa Kiingereza, unaweza kuuliza: \"Do you have an interpreter?\" Mkalimani ni mtu anayekusaidia kuongea na daktari kwa lugha yako. Mwombe daktari aandike maelekezo: \"Can you write that down, please?\" Kozi hii inafundisha maneno tu. Maswali kuhusu afya yako yaende kwa daktari au nesi wako.",
            "Katika dharura, kama kushindwa kupumua au maumivu ya kifua, piga 911 na useme: \"I need an ambulance.\" Kisha sema uko wapi."
          ],
          steps: ["Kwenye mapokezi: sema saa ya miadi yako na jina lako.", "Sema tatizo: \"I have a ...\" au \"My ... hurts.\"", "Sema ni kwa muda gani: \"for two days\" au \"since Monday\".", "Omba mkalimani au maelekezo yaliyoandikwa ukiyahitaji."],
          words: [["\"Appointment\"", "siku na saa iliyopangwa ya kumwona mtu, kama daktari (miadi)."], ["\"Fever\"", "mwili unapokuwa na joto kali kwa sababu unaumwa (homa)."], ["\"Interpreter\"", "mtu anayewasaidia watu wawili kuongea kwa lugha tofauti (mkalimani)."], ["\"Insurance card\"", "kadi kutoka kwa mpango wako wa bima ya afya ambayo ofisi inaomba kuiona."]],
          slides: [
            { title: "Kwenye mapokezi", bullets: ["\"I have an appointment at 10 o'clock.\"", "\"My name is Ana Lopez.\""] },
            { title: "Sema tatizo lako", bullets: ["\"I have a headache.\" \"I have a fever.\"", "\"My stomach hurts.\" \"My back hurts.\"", "\"I feel dizzy.\""] },
            { title: "Sema ni kwa muda gani", bullets: ["\"for two days\"", "\"since Monday\""] },
            { title: "Pata msaada wa kuelewa", bullets: ["\"Do you have an interpreter?\"", "\"Can you write that down, please?\"", "Dharura: piga 911, \"I need an ambulance.\""] }
          ],
          tryIt: "Mazoezi tu, kwa tatizo la kubuni: andika sentensi tatu kwa daktari, kwa mfano \"I have a sore throat. It started on Sunday. It hurts when I swallow.\" Zisome kwa sauti. Kisha fanya mazoezi ya sentensi ya mapokezi kwa jina na saa za kubuni.",
          youCanNow: "kujiandikisha kwenye mapokezi, kusema tatizo lako na ni kwa muda gani, na kuomba mkalimani au maelekezo yaliyoandikwa.",
          quickCheck: [
            { objective: "O4", q: "Kichwa chako kimekuwa kikiuma tangu jana. Unamwambia daktari nini?", options: ["\"I've had a headache since yesterday.\"", "\"How much is this?\"", "\"Turn left.\"", "\"Cash, please.\""], answer: 0, why: "Kinasema tatizo na limedumu kwa muda gani." },
            { objective: "O4", q: "Humwelewi daktari vizuri. Unaweza kuuliza nini?", options: ["\"Where is aisle 5?\"", "\"Nice to meet you.\"", "\"Do you have a bag?\"", "\"Do you have an interpreter?\""], answer: 3, why: "Mkalimani anakusaidia wewe na daktari kuelewana." }
          ]
        },
        {
          title: "Simu: kupanga miadi na kupiga simu shuleni",
          objectives: ["O4", "O2"],
          minutes: 6,
          goal: "Panga miadi kwa simu na urudie siku na saa.",
          text: [
            "Simu ni ngumu kwa sababu humwoni mtu. Panga maneno yako kabla ya kupiga simu na uwe na kalamu na karatasi tayari.",
            "Ili kupanga miadi: \"Hi, my name is Ana Lopez. I'd like to make an appointment, please.\" Wanauliza: \"What is it for?\" \"What day works for you?\" Jibu: \"I have a cough.\" \"Tuesday morning is good.\" Kisha rudia: \"So, Tuesday the 12th at 9:30?\" Ili kuibadilisha: \"I need to change my appointment, please.\"",
            "Ili kupiga simu shuleni kwa mtoto wako anapoumwa: \"Hi, this is Ana Lopez. My son, David Lopez, is sick today. He is in second grade. He will not come to school today.\"",
            "Simu ikienda haraka sana, tumia vifungu vyako kutoka Somo la 2: \"Sorry, can you speak more slowly, please?\" \"Can you spell that?\" Wakitaja namba ya simu, irudie kwa makundi: \"5-5-5, 0-1-2-3?\""
          ],
          steps: ["Andika utakachosema kabla ya kupiga simu.", "Sema jina lako na kwa nini unapiga simu.", "Jibu: ni kwa ajili ya nini, na siku na saa gani inakufaa.", "Andika siku na saa, kisha uirudie.", "Maliza: \"Thank you. Bye.\""],
          words: [["\"Make an appointment\"", "kupanga siku na saa ya kumwona mtu."], ["\"Change\" / \"cancel\"", "kuhamisha kwenda saa mpya / kusitisha miadi."], ["\"What works for you?\"", "swali linalomaanisha \"what day or time is good for you?\" (siku au saa gani inakufaa?)"]],
          slides: [
            { title: "Kabla ya kupiga simu", bullets: ["Andika utakachosema", "Kalamu na karatasi tayari"] },
            { title: "Kupanga miadi", bullets: ["\"I'd like to make an appointment, please.\"", "\"What day works for you?\" - \"Tuesday morning.\"", "Rudia: \"So, Tuesday the 12th at 9:30?\""] },
            { title: "Kupiga simu shuleni", bullets: ["\"My son, David Lopez, is sick today.\"", "\"He is in second grade.\"", "\"He will not come to school today.\""] },
            { title: "Inapoenda haraka sana", bullets: ["\"Can you speak more slowly, please?\"", "Rudia namba kwa makundi"] }
          ],
          tryIt: "Andika maandishi mafupi ya simu ya kupanga miadi na daktari, kwa jina na tatizo la kubuni. Yaigize na mwenzako, au sema sehemu zote mbili kwa sauti. Hakikisha unarudia siku na saa mwishoni.",
          youCanNow: "kupanga au kubadilisha miadi kwa simu, kupiga simu shuleni kwa mtoto wako, na kurudia siku na saa ili kuzikagua.",
          quickCheck: [
            { objective: "O4", q: "Ofisi inasema \"What day works for you?\" Wanataka nini?", options: ["Anwani yako", "Kazi yako", "Siku inayokufaa", "Kadi yako ya bima"], answer: 2, why: "\"What day works for you?\" kinauliza siku ipi inakufaa." },
            { objective: "O2", q: "Ofisi inataja saa ya miadi yako. Unafanya nini baadaye?", options: ["Kukata simu mara moja", "Kurudia siku na saa ili kukagua", "Kusema \"Nice to meet you\"", "Kuuliza \"How much are these?\""], answer: 1, why: "Kurudia siku na saa kunahakikisha umesikia sawa." }
          ]
        },
        {
          title: "Kuuliza njia",
          objectives: ["O5"],
          minutes: 5,
          goal: "Uliza njia ya kwenda mahali na urudie maelekezo ili kuyakagua.",
          text: [
            "Anza na \"Excuse me.\" Kisha uliza: \"How do I get to the library?\" au \"Where is the bus stop?\" au \"Is the post office near here?\"",
            "Maneno ya mwelekeo: \"Go straight.\" \"Turn left.\" \"Turn right.\" \"It's on the corner.\" \"It's next to the bank.\" \"It's across from the park.\" \"Go two blocks.\" \"Block\" ni sehemu ya barabara kati ya kona mbili.",
            "Rudia maelekezo: \"So, go straight two blocks, then turn left?\" Mtu huyo atasema \"Yes\" au atayasahihisha. Yakiwa mengi sana, uliza: \"Can you show me on my phone?\" au \"Can you point?\"",
            "Mazungumzo ya mfano. A: \"Excuse me, how do I get to the clinic?\" B: \"Go straight two blocks and turn right. It's next to the pharmacy.\" A: \"So, straight two blocks, turn right, next to the pharmacy?\" B: \"That's right.\" A: \"Thank you!\""
          ],
          steps: ["Sema \"Excuse me.\"", "Uliza \"How do I get to ...?\" au \"Where is ...?\"", "Sikiliza \"left\", \"right\", \"straight\", \"blocks\" na \"next to\".", "Rudia maelekezo.", "Sema \"Thank you!\""],
          words: [["\"Straight\"", "moja kwa moja mbele, bila kugeuka."], ["\"Block\"", "sehemu ya barabara kati ya kona mbili."], ["\"Across from\"", "upande wa pili wa barabara kutoka kitu fulani."], ["\"Next to\"", "kando kabisa ya kitu."]],
          slides: [
            { title: "Uliza njia", bullets: ["\"Excuse me, how do I get to the library?\"", "\"Where is the bus stop?\"", "\"Is the post office near here?\""] },
            { title: "Maneno ya mwelekeo", bullets: ["\"Go straight.\" \"Turn left.\" \"Turn right.\"", "\"Go two blocks.\"", "\"Next to\" / \"across from\" / \"on the corner\""] },
            { title: "Kagua", bullets: ["\"So, straight two blocks, then left?\"", "\"Can you show me on my phone?\""] }
          ],
          sources: [{ name: "USA Learns: mazoezi ya bure ya Kiingereza kwa watu wazima", url: "https://www.usalearns.org/" }],
          tryIt: "Kazi ya mwisho: tengeneza kadi yako ya vifungu vya Kiingereza cha Kila Siku. Andika utangulizi wako, vifungu vitatu vya kumwomba mtu arudie au aongee polepole, maswali mawili ya dukani, maandishi mafupi ya simu ya miadi na daktari, na swali moja la kuuliza njia ya kwenda mahali unapokwenda mara nyingi. Soma kadi yote kwa sauti, au iigize na mwenzako, na ujirekodi ukiweza.",
          youCanNow: "kuuliza njia, kuelewa \"left\", \"right\", \"straight\" na \"next to\", na kurudia maelekezo ili kuyakagua.",
          quickCheck: [
            { objective: "O5", q: "Mtu anasema \"It's across from the park.\" Kiko wapi?", options: ["Ndani ya bustani", "Mbali na bustani", "Upande wa pili wa barabara kutoka bustani", "Nyuma yako"], answer: 2, why: "\"Across from\" inamaanisha upande wa pili wa barabara." },
            { objective: "O5", q: "Swali lipi linauliza njia?", options: ["\"How much is this?\"", "\"How do I get to the bus station?\"", "\"Do you have an interpreter?\"", "\"What's your name?\""], answer: 1, why: "\"How do I get to ...?\" kinauliza njia ya kwenda mahali." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Daktari, simu na kutafuta njia",
        questions: [
          { objective: "O4", q: "Umefika kliniki. Unasema nini kwenye mapokezi?", options: ["\"I have an appointment at 2 o'clock. My name is Li Wei.\"", "\"Turn right.\"", "\"Cash or card?\"", "\"Where are you from?\""], answer: 0, why: "Sema saa ya miadi yako na jina lako unapojiandikisha." },
          { objective: "O4", q: "Sentensi ipi inasema umekuwa mgonjwa kwa muda gani?", options: ["\"My stomach hurts.\"", "\"I feel dizzy.\"", "\"I have an appointment.\"", "\"I've had a fever since Monday.\""], answer: 3, why: "\"Since Monday\" inamwambia daktari ni kwa muda gani." },
          { objective: "O4", q: "Huwezi kwenda kwenye miadi yako Ijumaa. Unasema nini kwenye simu?", options: ["\"I need to change my appointment, please.\"", "\"Nice to meet you.\"", "\"Where is aisle 3?\"", "\"Go straight.\""], answer: 0, why: "Kifungu hiki kinaomba kuhamisha miadi kwenda saa mpya." },
          { objective: "O5", q: "\"Go two blocks\" inamaanisha nini?", options: ["Subiri dakika mbili", "Tembea upite kona mbili za barabara", "Panda basi namba mbili", "Geuka mara mbili"], answer: 1, why: "\"Block\" ni sehemu ya barabara kati ya kona mbili." },
          { objective: "O5", q: "Mtu anakupa maelekezo. Unahakikishaje umeelewa?", options: ["Kusema \"Okay\" na kuondoka", "Kuuliza \"How much is it?\"", "Kurudia maelekezo", "Kuuliza \"What's your name?\""], answer: 2, why: "Kurudia maelekezo kunamruhusu mtu kuyathibitisha au kuyasahihisha." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kiingereza kwa Maisha ya Kila Siku (ESL)",
    questions: [
      { objective: "O1", q: "Njia bora ya kuanza utangulizi ni ipi?", options: ["\"Hello, I'm Marco.\"", "\"How much is this?\"", "\"Turn left.\"", "\"My back hurts.\""], answer: 0, why: "Salamu na jina lako vinaanza utangulizi." },
      { objective: "O1", q: "\"I'm\" inamaanisha nini?", options: ["I will", "I have", "I am", "I can"], answer: 2, why: "\"I'm\" ni njia fupi ya kusema \"I am\"." },
      { objective: "O1", q: "Mfanyakazi mwenzako mpya anasema \"I'm from Nigeria.\" Swali zuri la kumuuliza ni lipi?", options: ["\"Cash or card?\"", "\"Where is the bus stop?\"", "\"Can you spell that?\"", "\"How long have you been here?\""], answer: 3, why: "Swali la urafiki kuhusu mtu huyo linaendeleza mazungumzo." },
      { objective: "O2", q: "Mtu anaongea haraka sana. Unasema nini?", options: ["\"Yes, yes, okay.\"", "\"Can you speak more slowly, please?\"", "\"Nice to meet you.\"", "\"Goodbye.\""], answer: 1, why: "Kumwomba mtu aongee polepole ni adabu na kunakusaidia kuelewa." },
      { objective: "O2", q: "Kwa nini ni bora kuuliza kuliko kusema \"yes\" wakati hukuelewa?", options: ["Unaweza kukosa taarifa muhimu kama saa au mahali", "Kuuliza ni ukosefu wa adabu", "Watu hawapendi maswali", "Ni haraka zaidi kubahatisha"], answer: 0, why: "\"Yes\" isiyo sahihi inaweza kumaanisha kukosa saa, mahali au maelekezo." },
      { objective: "O2", q: "Unahitaji kuandika jina la barabara uliyosikia. Unauliza nini?", options: ["\"How much is it?\"", "\"Do you want a bag?\"", "\"How do you spell that?\"", "\"What's your name?\""], answer: 2, why: "\"How do you spell that?\" kinaomba herufi." },
      { objective: "O3", q: "Huwezi kupata mkate dukani. Unamuuliza mfanyakazi nini?", options: ["\"I have a fever.\"", "\"So, Tuesday at 3?\"", "\"Nice to meet you.\"", "\"Excuse me, where can I find the bread?\""], answer: 3, why: "\"Where can I find ...?\" kinauliza bidhaa iko wapi." },
      { objective: "O3", q: "\"Receipt\" ni nini?", options: ["Karatasi inayoonyesha ulichonunua na ulicholipa", "Mfuko wa kubebea manunuzi", "Mfanyakazi wa duka", "Safu dukani"], answer: 0, why: "Risiti inaonyesha ulichonunua; iweke ili uweze kurudisha bidhaa." },
      { objective: "O3", q: "Keshia anauliza \"Do you want a bag?\" Hutaki mfuko. Unasema nini?", options: ["\"Aisle 5.\"", "\"No bag, thanks.\"", "\"Turn right.\"", "\"I'm from Peru.\""], answer: 1, why: "\"No bag, thanks\" kinakataa kwa adabu." },
      { objective: "O4", q: "Sentensi ipi inamwambia daktari tatizo lako?", options: ["\"Go straight.\"", "\"How much are these?\"", "\"My stomach hurts.\"", "\"Nice to meet you.\""], answer: 2, why: "\"My stomach hurts\" kinasema tatizo." },
      { objective: "O4", q: "\"Interpreter\" ni nini?", options: ["Daktari wa watoto", "Mtu anayewasaidia watu wawili kuongea kwa lugha tofauti", "Aina ya dawa", "Fomu unayoijaza"], answer: 1, why: "Mkalimani anakusaidia wewe na daktari kuelewana." },
      { objective: "O4", q: "Mtu ana maumivu ya kifua na anashindwa kupumua. Unafanya nini?", options: ["Kupiga 911 na kusema \"I need an ambulance.\"", "Kupanga miadi wiki ijayo", "Kwenda kununua vitu", "Kumtumia rafiki ujumbe"], answer: 0, why: "Maumivu ya kifua na kushindwa kupumua ni dharura: piga 911." },
      { objective: "O4", q: "Unapiga simu kupanga miadi. Jambo la kwanza kusema ni lipi?", options: ["\"Turn left.\"", "\"How much is this?\"", "\"Do you want a bag?\"", "\"Hi, my name is Ana Lopez. I'd like to make an appointment, please.\""], answer: 3, why: "Sema jina lako na kwa nini unapiga simu." },
      { objective: "O4", q: "Ofisi inasema \"Thursday at 4:15.\" Unasema nini baadaye?", options: ["\"So, Thursday at 4:15?\"", "\"Where are you from?\"", "\"Cash, please.\"", "\"Go straight.\""], answer: 0, why: "Kurudia siku na saa kunakagua kwamba umesikia sawa." },
      { objective: "O4", q: "Binti yako anaumwa na hataenda shule. Unampigia nani na unasema nini?", options: ["Duka: \"Where is the milk?\"", "Shule: \"My daughter is sick today. She will not come to school.\"", "Kampuni ya basi: \"Turn right.\"", "Hakuna mtu"], answer: 1, why: "Piga simu shuleni, taja jina la mtoto wako na useme anaumwa leo." },
      { objective: "O5", q: "\"Turn right\" inamaanisha nini?", options: ["Acha kutembea", "Rudi nyuma", "Badilisha mwelekeo kwenda upande wa kulia", "Nenda moja kwa moja"], answer: 2, why: "\"Turn right\" inamaanisha geuka kwenda kulia." },
      { objective: "O5", q: "Benki iko \"next to\" duka la dawa. Iko wapi?", options: ["Mbali na duka la dawa", "Ndani ya duka la dawa", "Kwenye barabara nyingine", "Kando kabisa ya duka la dawa"], answer: 3, why: "\"Next to\" inamaanisha kando kabisa." },
      { objective: "O5", q: "Maelekezo ni marefu na yanachanganya. Unaweza kuuliza nini?", options: ["\"Can you show me on my phone?\"", "\"Do you want a bag?\"", "\"I have a headache.\"", "\"Nice to meet you.\""], answer: 0, why: "Ramani kwenye simu yako au kuonyeshwa kwa kidole kunafanya maelekezo yawe wazi." },
      { objective: "O2", q: "Ulikosa saa tu katika sentensi ndefu. Swali bora ni lipi?", options: ["\"Goodbye.\"", "\"Sorry, what time?\"", "\"How much are these?\"", "\"Where are you from?\""], answer: 1, why: "Kuuliza kuhusu sehemu moja uliyokosa ni haraka na wazi." },
      { objective: "O1", q: "Utangulizi upi uko wazi na kamili?", options: ["\"Me, me, job.\"", "\"Where is the bank?\"", "\"Hi, I'm Fatima. I'm from Syria. I'm a cook.\"", "\"Card, please.\""], answer: 2, why: "Unataja jina, nchi na kazi kwa sentensi fupi." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi amepiga hatua kiasi gani
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 3, 5, 6, 9, 13, 15, 16] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, fanya mazoezi ya sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Utangulizi", objective: "O1", notYet: "Sentensi chini ya tatu, au hakuna jina au hakuna swali kwa mwenzake.", meets: "Anasema jina, anakotoka na kazi anayofanya, na anauliza swali moja.", exceeds: "Anausema kwa sauti bila kusoma na anaongeza jambo moja zaidi, kama lengo lake." },
      { name: "Kuomba kurudia au kuongea polepole", objective: "O2", notYet: "Hakuna vifungu, au vifungu si vya adabu.", meets: "Vifungu vitatu vya adabu vya kuomba kurudia, kuongea polepole, kutaja herufi au kuandika.", exceeds: "Pia anaonyesha jinsi ya kurudia kitu ili kukikagua, kama \"So, Tuesday at 3?\"" },
      { name: "Maswali ya dukani", objective: "O3", notYet: "Hakuna maswali ya dukani, au hayaulizi bidhaa wala bei.", meets: "Maswali mawili yaliyo wazi, kama bidhaa iko wapi na bei yake.", exceeds: "Pia anajibu maswali ya keshia katika igizo." },
      { name: "Maandishi ya simu ya miadi", objective: "O4", notYet: "Hakuna jina, sababu au siku na saa.", meets: "Anataja jina, sababu, siku na saa inayomfaa, na anarudia saa.", exceeds: "Pia anaonyesha jinsi ya kubadilisha miadi au kuomba mkalimani." },
      { name: "Kuuliza njia", objective: "O5", notYet: "Hakuna swali, au swali halitaji mahali.", meets: "Swali lililo wazi kuhusu mahali halisi, na sentensi inayorudia maelekezo.", exceeds: "Anatumia maneno matatu ya mwelekeo kwa usahihi katika igizo." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaoripoti kupiga simu, kupanga miadi au kuomba kitu dukani kwa Kiingereza wao wenyewe ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi wanaoanza kozi \"English for the Workplace (ESL)\" (Kiingereza Kazini) au darasa la Kiingereza la watu wazima ndani ya siku 30",
      "Programu washirika zinaripoti miadi michache inayokosekana kwa sababu ya kutoelewana kwa lugha"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta ya kutazama masomo, au nakala iliyochapishwa ya maandishi ya masomo",
      "Karatasi na kalamu kwa kadi za vifungu na maandishi ya simu",
      "Mwenzako wa kuigiza naye, au simu ya kujirekodi",
      "Kama dakika 60 hadi 75 kwa jumla, katika vipindi vifupi"
    ],
    facilitatorNotes: [
      "Soma kila mazungumzo ya mfano kwa sauti kwanza, kisha wanafunzi wayasome wawili wawili, kisha wabadilishane nafasi.",
      "Matoleo yaliyotafsiriwa yanaacha vifungu vya Kiingereza kwa Kiingereza; vieleze kwa lugha ya wanafunzi lakini vifanyiwe mazoezi kwa Kiingereza.",
      "Tumia majina, siku za kuzaliwa na namba za simu za kubuni katika mazoezi yote; kamwe usikusanye taarifa halisi za binafsi.",
      "Sherehekea majaribio, si sarufi kamili. Lengo ni vifungu vinavyofanya kazi na ujasiri wa kuvitumia.",
      "Somo la daktari linafundisha maneno tu; peleka maswali ya afya kwa daktari au nesi. Waelekeze wanafunzi kwenye madarasa ya bure ya Kiingereza kwa watu wazima karibu nao (shule za watu wazima, maktaba, vyuo vya jamii) na kwenye mazoezi ya bure kama USA Learns."
    ]
  }
};
