"use strict";

// Koach Learn course (Swahili translation of artificial-intelligence/agentic-multi-agent.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "agentic-multi-agent-sw",
  lang: "sw",
  translationOf: "agentic-multi-agent",
  category: "Artificial Intelligence",
  name: "Mifumo ya Mawakala Wengi",
  skills: "Kuamua lini wakala mmoja anatosha, Kuchagua mfumo: mstari wa kazi, mratibu, mkaguzi, Kuandika majukumu na makabidhiano, Kushiriki hali kwa usalama, Kusimamisha mizunguko ya ukaguzi, Kulinganisha na wakala mmoja",
  outcome: "kusanifu na kujenga mfumo mdogo wa mawakala wengi kwa Python, wakala mwandishi na wakala mkaguzi wenye majukumu wazi, makabidhiano yaliyoandikwa, hali ya pamoja na kikomo cha mizunguko, na kuonyesha kwa jaribio rahisi kama unashinda wakala mmoja.",
  about: [
    "Hii ni kozi ya 5 ya Design, Build, and Deploy Autonomous AI Agents (Kusanifu, Kujenga na Kuzindua Mawakala wa AI Wanaojiendesha). Mfumo wa mawakala wengi unagawa kazi kati ya mawakala kadhaa, kila mmoja na jukumu lake, maelekezo yake na zana zake, kama timu inavyogawana kazi. Ukifanywa vizuri, unaweza kuongeza ubora. Ukifanywa vibaya, unazidisha gharama, mkanganyiko na makosa.",
    "Sura ya 1 inahusu usanifu: lini kutumia zaidi ya wakala mmoja, mifumo ya kawaida (mstari wa kazi, mratibu na wafanyakazi, mwandishi na mkaguzi), na jinsi ya kuandika majukumu na makabidhiano. Sura ya 2 inahusu ujenzi: hali ya pamoja, kusimamisha kurudiana bila mwisho, kumweka mtu kuwa msimamizi, na kupima kama timu kweli inashinda wakala mmoja.",
    "Utatumia tena kitanzi chako cha Python na msaidizi ask_model kutoka kozi ya 3. Msimbo unaonyeshwa kama mistari mifupi katika masomo. Jaribio la maarifa linafunga kila sura na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Jenga mfumo wa mawakala wawili kwa Python: wakala mwandishi anaandika rasimu ya aya moja ya maelezo ya bidhaa kutoka karatasi fupi ya ukweli, na wakala mkaguzi anaikagua kwa orodha ya ukaguzi iliyoandikwa (inatumia ukweli kutoka karatasi tu, chini ya maneno 80, hakuna madai kama \"bora zaidi\" au \"imehakikishwa\") na anarudisha JSON: approve (kubali) au revise (rekebisha) pamoja na sababu. Pitisha kazi kupitia kamusi (dictionary) ya hali ya pamoja, simama baada ya mizunguko 3 kwa juu kabisa, na uchapishe kumbukumbu yote. Kisha pitisha karatasi zile zile 3 za ukweli kwa wakala mmoja na uandike kipi kilifanya vizuri zaidi na kwa nini.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima katika programu ya Design, Build, and Deploy Autonomous AI Agents waliomaliza kozi ya 1 hadi 4: wamiliki wa biashara ndogo, watu wanaobadilisha kazi, wanafunzi na wafanyakazi wanaotaka kujua lini na jinsi ya kutumia timu ya mawakala.",
    startingPoint: "Wanaweza kujenga wakala mmoja kwa Python mwenye zana, ukaguzi wa hoja (arguments), kikomo cha hatua, kumbukumbu ya utekelezaji na idhini kwa vitendo vya kuandika. Hawajawahi kugawa kazi kati ya mawakala.",
    gap: "Mifumo ya mawakala wengi inapendwa sana, lakini ikifanywa vibaya inazidisha gharama, mkanganyiko na makosa. Wanafunzi wanahitaji kuamua lini timu inafaa, kusanifu majukumu na makabidhiano wazi, kusimamisha mizunguko isiyo na mwisho, kumweka mtu kuwa msimamizi na kuthibitisha kwa jaribio kama timu inashinda wakala mmoja.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi; msimbo unaonyeshwa kama mistari mifupi ya kunakili",
      "Vifaa: kompyuta yenye kivinjari cha wavuti; viwango vya bure vya API vinapunguza idadi ya miito kwa modeli unayoweza kufanya",
      "Mazoezi yanatumia karatasi za ukweli za kubuni tu",
      "Kila kitanzi kina kikomo cha mizunguko na kinamkabidhi mtu kazi isiyotatuliwa",
      "Muda: masomo mafupi yenye kazi moja ya mazoezi kila moja"
    ],
    prerequisites: "Kozi ya 3 na ya 4 za Design, Build, and Deploy Autonomous AI Agents (\"Kujenga Mawakala wa AI\" na \"Wakala wa AI: Kutumia Zana na Uendeshaji wa Kiotomatiki\")."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa kazi unayoweza kuiendesha kiotomatiki", action: "kuamua kama inahitaji wakala mmoja au timu, ukitumia jaribio la kuajiri", standard: "ukiwa na sababu ya sentensi moja kwa kila kazi" },
    { id: "O2", condition: "Ukipewa kazi inayohitaji timu", action: "kuchagua mfumo (mstari wa kazi, mratibu na wafanyakazi, au mwandishi na mkaguzi) na kuchora jinsi kazi inavyopita kati ya mawakala", standard: "ukiandika kinachopita katika kila mshale" },
    { id: "O3", condition: "Kwa kila wakala katika timu", action: "kuandika prompt ya jukumu na muundo wa makabidhiano wa JSON", standard: "kazi moja kwa kila wakala na orodha ya ukaguzi ya mkaguzi inayoweza kukaguliwa" },
    { id: "O4", condition: "Katika msimbo wako wa Python", action: "kuweka kazi ya timu katika hali moja ya pamoja ambayo msimbo wako tu unaisasisha", standard: "ukiandika hali kwenye kumbukumbu baada ya kila hatua" },
    { id: "O5", condition: "Ukipewa kitanzi cha mwandishi na mkaguzi", action: "kuongeza kikomo cha mizunguko na kumkabidhi mtu kazi isiyotatuliwa", standard: "ukisimama na needs_human baada ya mizunguko 3 kwa juu kabisa" },
    { id: "O6", condition: "Ukipewa pembejeo zile zile za majaribio", action: "kulinganisha timu na wakala mmoja wa msingi kwa ubora na idadi ya miito kwa modeli", standard: "ukipima vyote viwili kwa orodha ile ile na kuchagua kilicho rahisi zaidi alama zikilingana" }
  ],
  chapters: [
    {
      name: "Sura 1: Kusanifu timu ya mawakala",
      lessons: [
        {
          objectives: ["O1"],
          title: "Lini wakala mmoja anatosha, na lini hatoshi",
          minutes: 5,
          goal: "Amua kama kazi inahitaji zaidi ya wakala mmoja.",
          text: [
            "Anza na wakala mmoja. Kila wakala wa ziada anaongeza miito kwa modeli (gharama na muda), makabidhiano (mahali pa kupoteza taarifa) na vitu zaidi vya kupima. Kazi nyingi zinazoonekana kuhitaji timu zinafanya kazi vizuri kwa wakala mmoja mwenye prompt nzuri na zana nzuri.",
            "Fikiria zaidi ya wakala mmoja wakati: kazi ina ujuzi tofauti kabisa (utafiti, kisha uandishi, kisha ukaguzi); prompt moja inakuwa ndefu mno na yenye mkanganyiko; unataka ukaguzi huru, kwa sababu mkaguzi mwenye maelekezo mapya anaona makosa ambayo mwandishi hakuyaona; au sehemu zinaweza kufanyika kwa wakati mmoja.",
            "Jaribio lenye manufaa: kama ungeajiri watu wawili tofauti kwa kazi hii, mawakala wawili wanaweza kusaidia. Kama mtu mmoja angeweza kuifanya kwa orodha ya ukaguzi, wakala mmoja mwenye orodha ya ukaguzi huenda ni bora zaidi."
          ],
          words: [["Mfumo wa mawakala wengi", "mawakala kadhaa wa AI, kila mmoja na jukumu lake, wanaofanya kazi pamoja kwenye kazi moja."], ["Makabidhiano", "kupitisha kazi na taarifa kutoka kwa wakala mmoja kwenda kwa mwingine."], ["Gharama ya ziada", "gharama na juhudi za ziada ambazo usanifu unaongeza (kwa Kiingereza overhead)."]],
          slides: [
            { title: "Anza na wakala mmoja", bullets: ["Kila wakala wa ziada anaongeza gharama na muda", "Kila makabidhiano yanaweza kupoteza taarifa", "Sehemu zaidi za kupima"] },
            { title: "Fikiria timu wakati", bullets: ["Kazi inahitaji ujuzi tofauti kabisa", "Prompt moja ni ndefu mno na ina mkanganyiko", "Unataka ukaguzi huru", "Sehemu zinaweza kufanyika kwa wakati mmoja"] },
            { title: "Jaribio la kuajiri", bullets: ["Watu wawili tofauti? Huenda mawakala wawili", "Mtu mmoja mwenye orodha ya ukaguzi? Wakala mmoja"] }
          ],
          tryIt: "Andika kazi tatu unazoweza kuziendesha kiotomatiki. Kwa kila moja, andika \"wakala mmoja\" au \"timu\" na sentensi moja ya kwa nini, ukitumia jaribio la kuajiri.",
          youCanNow: "kuamua lini kazi kweli inahitaji zaidi ya wakala mmoja.",
          quickCheck: [
            { objective: "O1", q: "Jaribio la kuajiri ni nini?", options: ["Kuuliza kama mtu angefaulu usaili wa kazi", "Kupima kama modeli inaweza kuajiriwa na kampuni", "Kuuliza kama ungeajiri watu wawili tofauti kwa kazi hii", "Kuhesabu kazi inahitaji zana ngapi"], answer: 2, why: "Kama usingeajiri watu wawili, kwa kawaida wakala mmoja anatosha." },
            { objective: "O1", q: "Kazi ni kupanga ujumbe katika makundi manne kwa orodha ya ukaguzi. Ungejenga nini?", options: ["Wakala mmoja mwenye maelekezo wazi", "Timu ya mawakala wanne, mmoja kwa kila kundi", "Mratibu mwenye wafanyakazi", "Mwandishi na mkaguzi"], answer: 0, why: "Kazi rahisi iliyoelezwa vizuri haihitaji gharama ya ziada na makabidhiano ya timu." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Mifumo ya kawaida: mstari wa kazi, mratibu, mkaguzi",
          minutes: 6,
          goal: "Chagua mfumo wa mawakala wengi unaofaa kazi.",
          text: [
            "Mstari wa kazi (pipeline): mawakala wanafanya kazi kwa mpangilio uliowekwa, kila mmoja akipitisha matokeo yake kwa anayefuata, kama mstari wa kiwandani: utafiti, kisha kuandika, kisha kupanga muundo. Ni rahisi kujenga na kutatua hitilafu, kwa sababu unajua kila wakati nani anafuata.",
            "Mratibu na wafanyakazi: wakala mmoja (mratibu, kwa Kiingereza orchestrator) anagawa lengo katika sehemu, anampa kila wakala mfanyakazi sehemu moja, kisha anaunganisha matokeo. Ni rahisi kubadilika, lakini mratibu anaweza kugawa kazi vibaya, na uhuru zaidi unamaanisha mengi zaidi ya kukagua.",
            "Mwandishi na mkaguzi: wakala mmoja anatengeneza kazi, wa pili anaihukumu kwa orodha ya ukaguzi na ama anaikubali au anairudisha pamoja na sababu. Huu ndio mfumo wenye manufaa zaidi kwa wanaoanza kwa sababu unaongeza ukaguzi huru wa ubora. Unahitaji kikomo cha mizunguko ili wawili hao wasibishane milele."
          ],
          words: [["Mstari wa kazi", "mawakala wanaofanya kazi kwa mpangilio uliowekwa, kila mmoja akipitisha kazi kwa anayefuata (kwa Kiingereza pipeline)."], ["Mratibu", "wakala anayegawa lengo katika kazi na kuzikabidhi kwa mawakala wengine (kwa Kiingereza orchestrator)."], ["Wakala mkaguzi", "wakala anayekagua kazi ya wakala mwingine kwa kanuni zilizo wazi."]],
          slides: [
            { title: "Mstari wa kazi", bullets: ["Mpangilio uliowekwa: utafiti, kuandika, kupanga muundo", "Rahisi kujenga na kutatua hitilafu"] },
            { title: "Mratibu na wafanyakazi", bullets: ["Wakala mmoja anagawa lengo", "Wafanyakazi wanafanya sehemu", "Rahisi kubadilika, lakini ngumu zaidi kukagua"] },
            { title: "Mwandishi na mkaguzi", bullets: ["Mmoja anatengeneza, mwingine anahukumu kwa orodha", "Kubali, au rudisha pamoja na sababu", "Unahitaji kikomo cha mizunguko"] }
          ],
          tryIt: "Kwa kazi ya \"timu\" kutoka Somo la 1, chora mawakala kama visanduku vyenye mishale (kwenye karatasi inatosha). Andika ni mfumo upi na kinachopita katika kila mshale.",
          youCanNow: "kuchagua kati ya mstari wa kazi, mratibu mwenye wafanyakazi, na mwandishi mwenye mkaguzi.",
          quickCheck: [
            { objective: "O2", q: "Mratibu anafanya nini katika mfumo wa mratibu na wafanyakazi?", options: ["Anakagua kila rasimu kwa orodha ya ukaguzi", "Anagawa lengo na kuwapa wafanyakazi sehemu", "Anahifadhi faili kwenye diski", "Anafanya kazi mwishoni tu"], answer: 1, why: "Mratibu anagawa kazi na kupitisha sehemu kwa mawakala wafanyakazi." },
            { objective: "O2", q: "Kazi yako daima inaenda utafiti, kisha kuandika, kisha kupanga muundo, kwa mpangilio huo. Mfumo upi unafaa?", options: ["Mwandishi na mkaguzi", "Mratibu na wafanyakazi", "Hakuna mfumo; tumia chatbot tatu", "Mstari wa kazi"], answer: 3, why: "Mpangilio uliowekwa wa hatua ni mstari wa kazi, ambao pia ni rahisi kutatua hitilafu." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kuandika majukumu na makabidhiano",
          minutes: 5,
          goal: "Andika prompt ya jukumu kwa kila wakala na muundo wa makabidhiano kati yao.",
          text: [
            "Kila wakala anapata system prompt yake fupi: yeye ni nani, kazi yake moja, zana zake (zile anazohitaji tu), na muundo wa matokeo yake. Mwandishi hahitaji orodha yote ya ukaguzi ya mkaguzi; mkaguzi hahitaji zana za kuandika kabisa.",
            "Makabidhiano ni ujumbe unaopitishwa kati ya mawakala. Yafanye yawe na muundo, si ya maongezi: {\"draft\": \"...\", \"facts_used\": [...]} kutoka kwa mwandishi kwenda kwa mkaguzi, na {\"decision\": \"approve\" au \"revise\", \"reasons\": [...]} kurudi. Makabidhiano yenye muundo yanaonyesha wazi kilichopitishwa na ni rahisi kwa msimbo kuyakagua.",
            "Mpe mkaguzi orodha ya ukaguzi, si hisia. \"Ni nzuri?\" inaleta kukubali tu. \"Kila ukweli umo kwenye karatasi ya ukweli? Iko chini ya maneno 80? Inaepuka maneno bora zaidi na imehakikishwa?\" inaleta ukaguzi halisi."
          ],
          steps: ["Andika prompt ya jukumu kwa kila wakala: jukumu, kazi moja, zana, muundo wa matokeo.", "Mpe kila wakala zana anazohitaji tu.", "Eleza makabidhiano kama JSON yenye funguo (keys) zisizobadilika.", "Andika orodha ya ukaguzi ya mkaguzi kama maswali ya ndiyo/hapana."],
          words: [["Prompt ya jukumu", "system prompt inayompa wakala mmoja kazi yake na kanuni zake."], ["Orodha ya ukaguzi", "orodha ya ukaguzi mahususi wa ndiyo/hapana unaotumika kuhukumu kazi (kwa Kiingereza checklist)."]],
          slides: [
            { title: "Prompt moja ya jukumu kwa kila wakala", bullets: ["Yeye ni nani na kazi yake moja", "Zana anazohitaji tu", "Muundo wa matokeo yake"] },
            { title: "Makabidhiano yenye muundo", bullets: ["Mwandishi -> mkaguzi: rasimu na ukweli uliotumika", "Mkaguzi -> mwandishi: uamuzi na sababu", "Msimbo unaweza kukagua kila makabidhiano"] },
            { title: "Mpe mkaguzi orodha ya ukaguzi", bullets: ["\"Ni nzuri?\" inaleta kukubali kwa urahisi", "Ukaguzi wa ndiyo/hapana unaleta ukaguzi halisi"] }
          ],
          tryIt: "Andika prompt ya jukumu ya mwandishi, prompt ya jukumu ya mkaguzi yenye orodha ya ukaguzi ya vipengele 3, na miundo miwili ya makabidhiano ya JSON kwa mfumo wa kazi ya mwisho.",
          youCanNow: "kuandika prompt za majukumu na makabidhiano yenye muundo kwa timu ya mawakala.",
          quickCheck: [
            { objective: "O3", q: "Nini kinafaa kuwa katika prompt ya jukumu?", options: ["Kazi moja ya wakala, zana zake na muundo wa matokeo yake", "Maelekezo ya kila wakala mwingine", "Ufunguo wako wa API", "Orodha ya utekelezaji wote uliopita"], answer: 0, why: "Prompt ya jukumu inamweka kila wakala kwenye kazi yake mwenyewe na muundo wake." },
            { objective: "O3", q: "Mkaguzi wako ameambiwa \"Kagua kama rasimu ni nzuri.\" Ungebadilisha nini?", options: ["Hakuna, ni fupi", "Kumpa zana za kuandika ili arekebishe rasimu", "Kuibadilisha na orodha ya maswali mahususi anayoweza kujibu ndiyo au hapana", "Kumwacha aamue kanuni zake mwenyewe"], answer: 2, why: "Maswali ya ukaguzi yasiyo wazi yanaleta kukubali kwa urahisi mno; orodha ya ukaguzi inaleta ukaguzi halisi." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kusanifu timu ya mawakala",
        questions: [
          { objective: "O1", q: "Mahali bora pa kuanzia kwa miradi mingi mipya ya mawakala ni wapi?", options: ["Mawakala watano", "Mratibu mwenye wafanyakazi kumi", "Wakala mmoja mwenye zana nzuri", "Hakuna mawakala"], answer: 2, why: "Mawakala wa ziada wanaongeza gharama na ugumu; anza kwa urahisi." },
          { objective: "O1", q: "Ipi ni sababu nzuri ya kuongeza wakala mkaguzi?", options: ["Kupata ukaguzi huru kwa kanuni zilizo wazi", "Kuufanya mradi uonekane mkubwa", "Kutumia tokeni zaidi", "Kwa sababu wawili ni bora daima"], answer: 0, why: "Maelekezo mapya na orodha ya ukaguzi vinaona makosa ambayo mwandishi hakuyaona." },
          { objective: "O2", q: "Utafiti, kisha kuandika, kisha kupanga muundo, kwa mpangilio uliowekwa, ni:", options: ["Skima", "Mratibu", "Kichochezi", "Mstari wa kazi"], answer: 3, why: "Mstari wa kazi unapitisha kazi kwa mpangilio uliowekwa." },
          { objective: "O3", q: "Makabidhiano yapi ni rahisi zaidi kwa msimbo kukagua?", options: ["\"Hiki ndicho ninachofikiri, natumaini kitasaidia!\"", "{\"decision\": \"revise\", \"reasons\": [\"over 80 words\"]}", "Aya ndefu", "Picha"], answer: 1, why: "JSON yenye muundo ina funguo zisizobadilika ambazo msimbo unaweza kusoma." },
          { objective: "O3", q: "Maelekezo yapi ya mkaguzi yanaleta ukaguzi halisi zaidi?", options: ["\"Ni nzuri?\"", "\"Kuwa mkali.\"", "\"Unaipenda?\"", "\"Kila ukweli umo kwenye karatasi ya ukweli, na iko chini ya maneno 80?\""], answer: 3, why: "Ukaguzi mahususi wa ndiyo/hapana unazuia kukubali kwa urahisi." }
        ]
      }
    },
    {
      name: "Sura 2: Kujenga na kupima timu",
      lessons: [
        {
          objectives: ["O4"],
          title: "Hali ya pamoja: mahali pamoja pa kazi",
          minutes: 5,
          goal: "Weka kazi ya timu katika hali moja ya pamoja ambayo kila wakala anasoma kutoka kwayo.",
          text: [
            "Hali ya pamoja (shared state) ni mahali pamoja ambapo kazi ya timu inakaa, inayomilikiwa na msimbo wako, si na wakala yeyote. Katika Python, kamusi (dictionary) inafaa: state = {'facts': FACTS, 'draft': None, 'reviews': [], 'round': 0, 'status': 'drafting'}.",
            "Kila wakala anapata sehemu anazohitaji tu na anarudisha makabidhiano; msimbo wako unakagua makabidhiano na kusasisha hali. Mwandishi anasoma ukweli na ukaguzi wa mwisho; mkaguzi anasoma ukweli na rasimu. Hakuna wakala anayebadilisha hali moja kwa moja.",
            "Hii inaweka ukweli mahali pamoja, inafanya kumbukumbu iwe rahisi (hifadhi hali baada ya kila hatua), na inazuia mawakala kupitishana nakala zinazotofautiana polepole. Matokeo ya wakala mmoja yakiwa mabaya, msimbo wako unaweza kuyakataa kabla hayajafika kwa wakala anayefuata."
          ],
          steps: ["Unda kamusi ya hali yenye kila sehemu ambayo timu inahitaji.", "Mpe kila wakala sehemu anazohitaji tu.", "Kagua kila makabidhiano kwa msimbo kabla ya kusasisha hali.", "Hifadhi nakala ya hali kwenye kumbukumbu baada ya kila hatua."],
          words: [["Hali ya pamoja", "rekodi moja ya kazi ya timu ambayo msimbo unaitunza na kila wakala anasoma kutoka kwayo."], ["Kutofautiana polepole", "nakala za taarifa zinapozidi kuwa tofauti kidogo kidogo (kwa Kiingereza drift)."]],
          slides: [
            { title: "Mahali pamoja pa kazi", bullets: ["state = {facts, draft, reviews, round, status}", "Inamilikiwa na msimbo wako, si wakala"] },
            { title: "Mawakala wanasoma, msimbo unaandika", bullets: ["Kila wakala anapata sehemu anazohitaji tu", "Msimbo unakagua makabidhiano, kisha unasasisha hali"] },
            { title: "Kwa nini inasaidia", bullets: ["Ukweli mmoja, hakuna nakala zinazotofautiana", "Kumbukumbu rahisi: hifadhi hali kila hatua", "Matokeo mabaya yanazuiwa kabla ya wakala anayefuata"] }
          ],
          tryIt: "Unda kamusi ya hali kwa kazi ya mwisho. Andika functions mbili, run_writer(state) na run_reviewer(state), ambazo kila moja inaita ask_model kwa prompt yake ya jukumu na kurudisha JSON iliyochanganuliwa, bila kubadilisha hali zenyewe.",
          youCanNow: "kuweka kazi ya mfumo wa mawakala wengi katika hali moja ya pamoja inayodhibitiwa na msimbo wako.",
          quickCheck: [
            { objective: "O4", q: "Hali ya pamoja ni nini katika mfumo wa mawakala wengi?", options: ["Maelezo binafsi ya kila wakala", "Mahali pamoja, panapomilikiwa na msimbo wako, panaposhika kazi ya timu", "Kumbukumbu ya modeli kati ya siku", "Nywila ya pamoja"], answer: 1, why: "Hali moja ya pamoja inayosasishwa na msimbo wako inamfanya kila wakala afanye kazi kwa ukweli ule ule." },
            { objective: "O4", q: "Mwandishi na mkaguzi kila mmoja anashika nakala yake ya rasimu, na nakala zinaanza kutofautiana. Ungefanya nini?", options: ["Kumwacha kila wakala asasishe hali moja kwa moja", "Kuongeza wakala wa tatu kuziunganisha", "Kupuuza kama jibu la mwisho linaonekana sawa", "Kuweka hali moja ya pamoja ambayo msimbo wako tu unaisasisha baada ya kukagua kila makabidhiano"], answer: 3, why: "Nakala tofauti zinatofautiana polepole; hali moja ya pamoja iliyokaguliwa inazuia hilo." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kusimamisha mizunguko na kumweka mtu kuwa msimamizi",
          minutes: 5,
          goal: "Ongeza kikomo cha mizunguko na kumkabidhi mtu katika kitanzi cha mwandishi na mkaguzi.",
          text: [
            "Mawakala wawili wanaweza kuzunguka milele: mkaguzi daima anapata kitu, mwandishi daima anabadilisha kitu. Weka MAX_ROUNDS = 3. Kama mkaguzi hajakubali kufikia hapo, simama na status 'needs_human' na uonyeshe rasimu ya mwisho na sababu.",
            "Angalia makosa mengine mawili ya timu. Kupiga muhuri tu (rubber-stamping): mkaguzi anakubali kila kitu, mara nyingi kwa sababu orodha yake ya ukaguzi haiko wazi. Kurudiana (ping-pong): mwandishi anarekebisha tatizo moja na kurudisha tatizo la zamani. Soma kumbukumbu kutafuta yote mawili.",
            "Mweke mtu kuwa msimamizi wa matokeo. Timu inatoa rasimu na ukaguzi; mtu anaidhinisha chochote kitakachochapishwa, kutumwa au kutumika kufanya uamuzi. Mawakala zaidi hawaondoi haja ya kituo hicho cha ukaguzi; wanakifanya kiwe muhimu zaidi."
          ],
          steps: ["Weka MAX_ROUNDS.", "Kitanzi: mwandishi anaandika rasimu, mkaguzi anaamua.", "Akikubali (approve): status 'approved', simama.", "Akisema rekebisha (revise): mrudishie mwandishi sababu.", "Kwenye kikomo: status 'needs_human', onyesha rasimu na sababu."],
          words: [["Mzunguko", "duru moja ya rasimu na ukaguzi (kwa Kiingereza round)."], ["Kupiga muhuri tu", "kukubali kila kitu bila kukagua kweli (kwa Kiingereza rubber-stamping)."], ["Kumkabidhi mtu", "kumpa mtu tatizo wakati mfumo hauwezi kulitatua (kwa Kiingereza escalation)."]],
          slides: [
            { title: "Mawakala wawili wanaweza kuzunguka milele", bullets: ["MAX_ROUNDS = 3", "Hakuna idhini kufikia hapo: 'needs_human'"] },
            { title: "Makosa mawili ya timu", bullets: ["Kupiga muhuri tu: anakubali kila kitu", "Kurudiana: matatizo ya zamani yanarudi", "Soma kumbukumbu kutafuta yote mawili"] },
            { title: "Watu wanabaki wasimamizi", bullets: ["Timu inaandika rasimu na kukagua", "Mtu anaidhinisha kinachochapishwa au kutumwa"] }
          ],
          tryIt: "Andika kitanzi cha mwandishi na mkaguzi chenye MAX_ROUNDS = 3. Kipime kwa karatasi ya ukweli ambapo mwandishi ana uwezekano wa kutia chumvi. Kisha pima kikomo kwa kuifanya orodha ya ukaguzi ya mkaguzi isiwezekane (\"chini ya maneno 5\") na uthibitishe kinasimama na needs_human.",
          youCanNow: "kusimamisha kurudiana kwa mawakala kwa kikomo cha mizunguko na kumkabidhi mtu kazi isiyotatuliwa.",
          quickCheck: [
            { objective: "O5", q: "Kurudiana (ping-pong) ni nini katika kitanzi cha mwandishi na mkaguzi?", options: ["Kurekebisha tatizo moja kunarudisha la zamani, mzunguko baada ya mzunguko", "Mkaguzi kukubali kila rasimu", "Mawakala wawili kufanya kazi kwa wakati mmoja", "Kitanzi cha haraka kinachomalizika kwa mzunguko mmoja"], answer: 0, why: "Kurudiana ni kwenda na kurudi bila mwisho, ndiyo sababu kitanzi kinahitaji kikomo cha mizunguko." },
            { objective: "O5", q: "Mkaguzi hajakubali baada ya mizunguko 3. Mfumo ufanye nini?", options: ["Kukubali rasimu ya mwisho hata hivyo", "Kuanza upya na mzunguko 1", "Kusimama na needs_human na kuonyesha rasimu na sababu", "Kupandisha kikomo hadi mizunguko 10"], answer: 2, why: "Kazi isiyotatuliwa inaenda kwa mtu pamoja na kila kitu anachohitaji kuamua." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Je, timu inashinda wakala mmoja? Kupima",
          minutes: 6,
          goal: "Linganisha mfumo wa mawakala wengi na wakala mmoja kwa majaribio yale yale.",
          text: [
            "Timu inafaa tu kama inafanya vizuri zaidi. Ipime kama ulivyopima prompt katika kozi ya 2: pembejeo zile zile, alama iliyo wazi, na ulinganisho. Tengeneza karatasi tatu za ukweli, uzipitishe kwa timu na kwa wakala mmoja ambaye ana orodha ya ukaguzi ndani ya prompt yake.",
            "Pima kila matokeo kwa orodha ya ukaguzi ya mkaguzi wewe mwenyewe (si kwa wakala mkaguzi), na uhesabu miito kwa modeli kwa kila njia. Miito kwa modeli inawakilisha gharama na muda.",
            "Andika matokeo kwa uaminifu. Kama wakala mmoja alipata alama ile ile kwa theluthi moja ya miito, tumia wakala mmoja. Kama timu iligundua makosa halisi ambayo wakala mmoja hakuyaona, miito ya ziada ilikununulia ubora. Jibu lolote kati ya hayo ni matokeo mazuri ya kihandisi."
          ],
          steps: ["Tengeneza karatasi tatu za ukweli za majaribio.", "Pitisha kila moja kwa timu na kwa wakala mmoja.", "Pima kila matokeo wewe mwenyewe kwa orodha ya ukaguzi.", "Hesabu miito kwa modeli kwa kila njia.", "Andika njia ipi inashinda na kwa nini."],
          words: [["Msingi wa kulinganisha", "toleo rahisi unalolinganisha nalo, hapa wakala mmoja (kwa Kiingereza baseline)."], ["Mwito kwa modeli", "ombi moja kwa modeli; miito zaidi inamaanisha gharama na muda zaidi."]],
          slides: [
            { title: "Timu lazima istahili nafasi yake", bullets: ["Pembejeo zile zile, alama wazi, ulinganisho", "Msingi: wakala mmoja mwenye orodha ya ukaguzi"] },
            { title: "Pima vitu viwili", bullets: ["Ubora: pima kwa orodha ya ukaguzi wewe mwenyewe", "Gharama: hesabu miito kwa modeli"] },
            { title: "Ripoti kwa uaminifu", bullets: ["Alama ile ile, miito michache? Tumia wakala mmoja", "Makosa halisi yamegunduliwa? Timu inastahili"] }
          ],
          tryIt: "Kazi ya mwisho: maliza mfumo wa mwandishi na mkaguzi wenye hali ya pamoja, makabidhiano yenye muundo na MAX_ROUNDS = 3, uendeshe kwa karatasi tatu za ukweli, endesha wakala mmoja wa msingi kwa karatasi zile zile, na uandike ulinganisho mfupi wa ubora na miito kwa modeli.",
          youCanNow: "kujenga mfumo mdogo wa mawakala wengi na kuthibitisha kama unashinda wakala mmoja.",
          quickCheck: [
            { objective: "O6", q: "Msingi wa kulinganisha (baseline) ni nini katika kozi hii?", options: ["Rasimu ya kwanza ambayo mwandishi anatengeneza", "Wakala mmoja unayemlinganisha na timu", "Alama ya chini kabisa inayoruhusiwa", "Kikomo cha mizunguko"], answer: 1, why: "Kulinganisha na wakala mmoja kunaonyesha kama timu inastahili gharama yake ya ziada." },
            { objective: "O6", q: "Timu inapata alama juu kidogo kuliko wakala mmoja lakini inatumia miito mara tatu zaidi kwa modeli. Ungefanya nini?", options: ["Kuchagua timu daima, kwa sababu timu ni bora", "Kuacha kupima", "Kuongeza mawakala zaidi ili kupandisha alama", "Kupima kama faida ndogo inastahili gharama na muda wa ziada, na kuandika kwa nini"], answer: 3, why: "Miito kwa modeli inawakilisha gharama na muda, kwa hiyo uamuzi unapima ubora dhidi ya hivyo." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kujenga na kupima timu",
        questions: [
          { objective: "O4", q: "Nani anapaswa kusasisha hali ya pamoja?", options: ["Wakala yeyote, wakati wowote anapotaka", "Mkaguzi tu", "Msimbo wako, baada ya kukagua kila makabidhiano", "Hakuna mtu"], answer: 2, why: "Hali inayomilikiwa na msimbo inaweka ukweli mmoja na inazuia matokeo mabaya." },
          { objective: "O5", q: "Mkaguzi hajakubali baada ya mizunguko 3. Nini kifanyike?", options: ["Kusimama na 'needs_human' na kuonyesha rasimu na sababu", "Kuikubali kiotomatiki", "Kuendelea hadi akubali", "Kufuta rasimu"], answer: 0, why: "Mkabidhi mtu badala ya kuendelea kuzunguka." },
          { objective: "O5", q: "Mkaguzi anakubali kila rasimu, hata mbaya. Hii ni:", options: ["Kurudiana", "Kupiga muhuri tu", "Mstari wa kazi", "Hali ya pamoja"], answer: 1, why: "Orodha za ukaguzi zisizo wazi zinaleta kukubali kila kitu." },
          { objective: "O6", q: "Unapaswa kupimaje matokeo ya timu na ya wakala mmoja?", options: ["Uyapime wewe mwenyewe kwa orodha ile ile ya ukaguzi", "Kumwuliza wakala mkaguzi", "Kuchagua lililo refu zaidi", "Kuhesabu maneno tu"], answer: 0, why: "Alama huru na thabiti inafanya ulinganisho uwe wa haki." },
          { objective: "O6", q: "Wakala mmoja anapata alama ile ile na timu kwa theluthi moja ya miito kwa modeli. Ufanye nini?", options: ["Kutumia timu hata hivyo", "Kuongeza mawakala zaidi", "Kuacha kupima", "Kutumia wakala mmoja"], answer: 3, why: "Ubora ule ule kwa gharama ndogo unamaanisha usanifu rahisi zaidi unashinda." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Mifumo ya Mawakala Wengi",
    questions: [
      { objective: "O1", q: "Mfumo wa mawakala wengi ni:", options: ["Wakala mmoja mwenye prompt ndefu", "Mawakala kadhaa wenye majukumu yao wanaofanya kazi kwenye kazi moja", "Chatbot yenye watumiaji wengi", "Hifadhidata"], answer: 1, why: "Kila wakala ana jukumu lake, maelekezo yake na zana zake." },
      { objective: "O1", q: "Kila wakala wa ziada anaongeza:", options: ["Ubora wa bure", "Hakuna kitu", "Gharama, makabidhiano na kazi ya kupima", "Muda mfupi zaidi"], answer: 2, why: "Mawakala zaidi wanamaanisha miito zaidi na mengi zaidi ya kukagua." },
      { objective: "O1", q: "Jaribio la kuajiri linauliza:", options: ["Wakala ni mkarimu?", "Modeli inagharimu kiasi gani?", "Ungeajiri watu wawili tofauti kwa kazi hii?", "Prompt ni ndefu?"], answer: 2, why: "Ujuzi tofauti kabisa unaashiria mawakala tofauti." },
      { objective: "O1", q: "Kazi ipi ina uwezekano mkubwa wa kuhitaji wakala mmoja tu?", options: ["Kupanga ujumbe katika makundi manne kwa orodha ya ukaguzi", "Kutafiti, kuandika na kukagua ukweli wa ripoti ndefu", "Kufanya utafutaji kumi kwa wakati mmoja", "Kuandika matangazo na kuyakagua kwa uhuru"], answer: 0, why: "Mtu mmoja mwenye orodha ya ukaguzi angeweza kuifanya." },
      { objective: "O2", q: "Katika mfumo wa mratibu, mratibu:", options: ["Anakubali kazi yake mwenyewe", "Anapanga muundo wa maandishi tu", "Anahifadhi ufunguo wa API", "Anagawa lengo na kuwapa wafanyakazi sehemu"], answer: 3, why: "Anapanga na kukabidhi kazi, kisha anaunganisha matokeo." },
      { objective: "O2", q: "Kwa nini mwandishi na mkaguzi ni mzuri kwa wanaoanza?", options: ["Hauhitaji vikomo", "Unaongeza ukaguzi huru wa ubora", "Hautumii modeli", "Hauzunguki kamwe"], answer: 1, why: "Wakala wa pili mwenye orodha ya ukaguzi anagundua makosa." },
      { objective: "O2", q: "Mstari wa kazi ni rahisi kutatua hitilafu kwa sababu:", options: ["Unafanya kazi kwa siri", "Hauna mawakala", "Haushindwi kamwe", "Unajua daima wakala yupi anafuata"], answer: 3, why: "Mpangilio uliowekwa unafanya kila hatua iwe wazi." },
      { objective: "O3", q: "Prompt ya jukumu inapaswa kuwa na:", options: ["Nywila yako", "Prompt kamili ya kila wakala mwingine", "Kazi moja ya wakala, zana na muundo wa matokeo", "Utani"], answer: 2, why: "Kila wakala anahitaji jukumu lake na kanuni zake tu." },
      { objective: "O3", q: "Je, wakala mkaguzi anapaswa kuwa na zana za kuandika?", options: ["Hapana, vile tu anavyohitaji kukagua", "Ndiyo, zana zote", "Zana ya barua pepe tu", "Anapaswa kuwa na ufunguo wa API"], answer: 0, why: "Kanuni ya ruhusa ndogo kabisa inahusu kila wakala." },
      { objective: "O3", q: "Makabidhiano yenye muundo yana manufaa kwa sababu:", options: ["Ni marefu zaidi", "Msimbo unaweza kukagua kilichopitishwa", "Yanaficha taarifa", "Modeli haziwezi kusoma maandishi"], answer: 1, why: "Funguo zisizobadilika zinafanya makabidhiano yaweze kukaguliwa." },
      { objective: "O3", q: "Mkaguzi anayeulizwa \"Ni nzuri?\" kuna uwezekano mkubwa:", options: ["Akubali kwa urahisi mno", "Akague kila ukweli", "Akatae kujibu", "Ahesabu maneno kwa usahihi"], answer: 0, why: "Maswali yasiyo wazi yanaleta idhini isiyo wazi." },
      { objective: "O4", q: "Hali ya pamoja inamilikiwa na:", options: ["Kivinjari cha mtumiaji", "Wakala mwandishi", "Mtoa huduma wa modeli", "Msimbo wako"], answer: 3, why: "Msimbo unatunza chanzo kimoja cha ukweli." },
      { objective: "O4", q: "Kutofautiana polepole (drift) kunamaanisha:", options: ["Modeli kuwa ya haraka zaidi", "Nakala za taarifa kuzidi kuwa tofauti polepole", "Kikomo cha mizunguko", "Kichochezi"], answer: 1, why: "Hali ya pamoja inazuia nakala zinazotofautiana." },
      { objective: "O4", q: "Kwa nini uhifadhi hali kwenye kumbukumbu baada ya kila hatua?", options: ["Kuruka mizunguko", "Kuifanya modeli iwe na akili zaidi", "Kuona hasa jinsi kazi ilivyobadilika", "Kushiriki ufunguo wako"], answer: 2, why: "Kumbukumbu inaonyesha kila badiliko kwa ajili ya kutatua hitilafu." },
      { objective: "O5", q: "MAX_ROUNDS inazuia:", options: ["Miito yote kwa modeli", "Rasimu nzuri", "Kwenda na kurudi bila mwisho kati ya mawakala", "Kumbukumbu"], answer: 2, why: "Kikomo cha mizunguko kinamaliza kurudiana." },
      { objective: "O5", q: "Kurudiana katika kitanzi cha mwandishi na mkaguzi ni wakati:", options: ["Kurekebisha tatizo moja kunarudisha la zamani", "Mkaguzi anakubali kila kitu", "Rasimu ni kamili", "Hali imehifadhiwa"], answer: 0, why: "Mawakala wanaendelea kubadilishana matatizo yale yale." },
      { objective: "O5", q: "Kumkabidhi mtu (escalation) kunamaanisha:", options: ["Kufuta kumbukumbu", "Kuongeza mawakala zaidi", "Kupandisha kikomo cha mizunguko milele", "Kumpa mtu kazi isiyotatuliwa"], answer: 3, why: "Watu wanatatua kile ambacho mfumo hauwezi." },
      { objective: "O5", q: "Kwa mawakala zaidi, kituo cha ukaguzi cha mtu kinakuwa:", options: ["Hakihitajiki", "Muhimu zaidi", "Cha kiotomatiki", "Haramu"], answer: 1, why: "Sehemu zaidi zinazosonga zinamaanisha njia zaidi za kukosea." },
      { objective: "O6", q: "Msingi wa kulinganisha katika kozi hii ni:", options: ["Matokeo marefu zaidi", "Rasimu ya kwanza", "Ufunguo wa API", "Wakala mmoja unayemlinganisha na timu"], answer: 3, why: "Unalinganisha timu na chaguo rahisi." },
      { objective: "O6", q: "Miito kwa modeli inahesabiwa kwa sababu inawakilisha:", options: ["Idadi ya maneno", "Ubora", "Gharama na muda", "Idadi ya watumiaji"], answer: 2, why: "Miito zaidi inagharimu zaidi na inachukua muda mrefu zaidi." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [0, 2, 4, 7, 9, 11, 13, 14, 16, 18]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Majukumu wazi na orodha ya ukaguzi", objective: "O3", notYet: "Majukumu yanaingiliana, au mkaguzi anauliza tu kama rasimu ni nzuri.", meets: "Mwandishi na mkaguzi kila mmoja ana kazi moja; mkaguzi anakagua ukweli kutoka karatasi, chini ya maneno 80 na hakuna madai kama \"bora zaidi\".", exceeds: "Mkaguzi hana zana za kuandika na anatoa sababu kwa kila revise." },
      { name: "Makabidhiano yenye muundo", objective: "O3", notYet: "Mawakala wanapitisha maandishi huru ambayo msimbo hauwezi kukagua.", meets: "Mkaguzi anarudisha JSON yenye approve au revise na sababu.", exceeds: "Msimbo unakagua kila makabidhiano kabla ya kuyatumia." },
      { name: "Hali ya pamoja", objective: "O4", notYet: "Mawakala wanashika nakala tofauti za kazi.", meets: "Kazi inapita kupitia kamusi moja ya hali ambayo msimbo unaisasisha.", exceeds: "Hali inaandikwa kwenye kumbukumbu baada ya kila hatua." },
      { name: "Kikomo cha mizunguko na kumkabidhi mtu", objective: "O5", notYet: "Hakuna kikomo cha mizunguko, au kitanzi kinaweza kuendelea milele.", meets: "Kinasimama baada ya mizunguko 3 kwa juu kabisa na kuchapisha kumbukumbu yote.", exceeds: "Kazi isiyotatuliwa inasimama na needs_human na kuonyesha rasimu na sababu." },
      { name: "Ulinganisho wa haki", objective: "O6", notYet: "Hakuna wakala mmoja wa msingi, au pembejeo tofauti zilitumika.", meets: "Karatasi zile zile 3 za ukweli zilipitishwa kwa vyote viwili, pamoja na maelezo yaliyoandikwa ya kipi kilifanya vizuri zaidi na kwa nini.", exceeds: "Vyote viwili vilipimwa kwa orodha ile ile ya ukaguzi na miito kwa modeli ilihesabiwa." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaoendelea na kozi ya 6 ya programu ya mawakala ndani ya siku 30",
      "Wanafunzi wanaoripoti kuchagua wakala mmoja au timu kwa msingi wa jaribio badala ya kubahatisha (utafiti wa kufuatilia)"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta yenye kivinjari cha wavuti na intaneti; Colab au Python kwenye kompyuta yako mwenyewe",
      "Kitanzi chako cha wakala na msaidizi ask_model kutoka kozi ya 3, na ufunguo wa API wa modeli",
      "Karatasi tatu fupi za ukweli za bidhaa za kubuni",
      "Karatasi ya kuchora mifumo ya mawakala",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Fanyeni jaribio la awali pamoja, kisha kikundi kitumie jaribio la kuajiri kwa kazi halisi kabla mtu yeyote hajaandika msimbo.",
      "Mpeni kila mtu karatasi zile zile tatu za ukweli ili matokeo ya timu na ya wakala mmoja yaweze kulinganishwa katika kikundi chote.",
      "Fuatilieni idadi ya miito kwa modeli kwenye viwango vya bure; kikomo cha mizunguko kibaki 3.",
      "Waombe wanafunzi waonyeshe utekelezaji mmoja uliosimama na needs_human, na mjadili mtu huyo angeamua nini.",
      "Pima kazi ya mwisho kwa rubriki, na ukubali \"wakala mmoja alifanya vizuri vile vile\" kama matokeo mazuri jaribio linapoonyesha hivyo."
    ]
  }
};
