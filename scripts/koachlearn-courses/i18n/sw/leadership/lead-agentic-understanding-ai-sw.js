"use strict";

// Koach Learn course (Swahili translation of leadership/lead-agentic-understanding-ai.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "lead-agentic-understanding-ai-sw",
  lang: "sw",
  translationOf: "lead-agentic-understanding-ai",
  category: "Leadership Development",
  name: "Uongozi katika Zama za AI Wakala 1: Kuielewa AI",
  skills: "Kueleza AI kwa timu yako kwa maneno rahisi, Kutofautisha AI zalishi na AI wakala, Kutambua matumizi mazuri na mabaya, Kutaja hatari kuu, Kuandaa maelezo mafupi ya AI kwa timu",
  outcome: "kueleza timu yako, kwa maneno rahisi, AI zalishi na AI wakala ni nini, zinasaidia wapi na zinashindwa wapi, na kuongoza kikao cha dakika kumi cha maelezo kwa timu chenye matumizi matatu mazuri, hatari tatu na kanuni moja ya msingi iliyo wazi.",
  about: [
    "Kozi hii ni kwa mameneja, wasimamizi, viongozi wa timu na wamiliki wa biashara ndogo na mashirika yasiyo ya faida. Huhitaji ujuzi wa kiufundi. Unahitaji kuweza kuzungumza kuhusu AI kwa uwazi, kwa sababu timu yako tayari inaitumia au inauliza kuihusu.",
    "Sura ya 1 inaeleza AI ni nini, jinsi AI zalishi ya leo inavyofanya kazi, na kinachoifanya AI wakala kuwa tofauti. Sura ya 2 inakusaidia kupima AI inafaa wapi katika kazi ya timu yako, nini kinaweza kwenda vibaya, na jinsi ya kuieleza timu yako ili kila mtu aanze na uelewa mmoja.",
    "Kila somo linachukua kama dakika tano na linaisha na kazi fupi unayoifanya kwa kazi yako mwenyewe. Jaribio la maarifa linafunga kila sura na mtihani wa maswali 20 unafunga kozi. Hii ni kozi ya 1 kati ya 3 katika Uongozi katika Zama za AI Wakala."
  ],
  finalTask: "Andaa na utoe (au urekodi) kikao cha dakika kumi cha maelezo ya AI kwa timu yako. Kinaeleza AI zalishi na AI wakala kwa maneno rahisi, kinaonyesha mfano mmoja wa moja kwa moja kwa msaidizi wa AI wa bure, kinataja matumizi matatu mazuri na hatari tatu kwa kazi halisi ya timu yako, na kinaisha na kanuni moja ya msingi ambayo kila mtu ataifuata, kama \"hakuna taarifa binafsi za mteja au mfanyakazi zinazoingizwa kwenye zana za AI za umma\".",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Mameneja, wasimamizi, viongozi wa timu na wamiliki wa biashara ndogo na mashirika yasiyo ya faida ambao timu zao tayari zinatumia AI au zinauliza kuihusu. Hakuna ujuzi wa kiufundi unaohitajika.",
    startingPoint: "Wamesikia kuhusu ChatGPT na zana zinazofanana na huenda wamejaribu moja. Bado hawawezi kueleza AI zalishi au AI wakala kwa uwazi, kupima inafaa wapi katika kazi ya timu yao, au kutaja hatari zake kuu.",
    gap: "Timu zinatumia AI, zikiwa na mwongozo au bila. Viongozi wanahitaji kuieleza kwa maneno rahisi, kupima matumizi mazuri na mabaya, kutaja hatari na kuweka kanuni ya kwanza ya msingi, ili watu wao watumie AI kwa usalama na kwa matarajio yanayofanana.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi, bila kudhani ujuzi wa kiufundi",
      "Vifaa: simu au kompyuta yenye msaidizi wa AI wa bure",
      "Muda: kama dakika tano kwa kila somo, zinazoingia katika siku ya meneja",
      "Faragha: hakuna taarifa binafsi za wateja au wafanyakazi kwenye zana za AI za umma wakati wa mazoezi",
      "Sera na sheria za kila shirika kuhusu AI na data zinatumika"
    ],
    prerequisites: "Hakuna. Hii ni kozi ya 1 kati ya 3 katika Uongozi katika Zama za AI Wakala."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Mwanatimu anapouliza AI ni nini", action: "kueleza AI, machine learning na AI zalishi kwa maneno rahisi", standard: "kwa sentensi moja kila moja ambayo mwanatimu mpya angeielewa" },
    { id: "O2", condition: "Ukipewa kazi ya kawaida ya timu", action: "kueleza kile msaidizi wa AI na wakala wa AI wangefanya kila mmoja, na hatua zipi mtu anapaswa kuidhinisha", standard: "ukitaja nani anabaki kuwajibika" },
    { id: "O3", condition: "Ukipewa orodha ya kazi za timu yako", action: "kupanga kila kazi kuwa matumizi mazuri, ya tahadhari au mabaya ya AI", standard: "ukiwa na sababu fupi kwa kila moja" },
    { id: "O4", condition: "Kwa kazi halisi ya timu yako", action: "kutaja hatari tatu kubwa za AI na kinga moja kwa kila moja", standard: "ukiwa na kinga unazoweza kuweka mwezi huu" },
    { id: "O5", condition: "Ukitumia msaidizi wa AI wa bure na kazi ya timu isiyo ya siri", action: "kufanya onyesho fupi la moja kwa moja, pamoja na swali moja la kufuatilia na ukaguzi", standard: "bila kutumia data yoyote ya siri" },
    { id: "O6", condition: "Ukiwa na timu yako", action: "kutoa kikao cha dakika kumi cha maelezo ya AI kinachoisha na kanuni moja ya msingi", standard: "kikigusa matumizi matatu, hatari tatu na kanuni, na kanuni ikitumwa kwa maandishi baadaye" }
  ],
  chapters: [
    {
      name: "Sura 1: Kile viongozi wanahitaji kujua kuhusu AI",
      lessons: [
        {
          objectives: ["O1"],
          title: "AI kwa maneno rahisi",
          minutes: 5,
          goal: "Eleza AI, machine learning na AI zalishi kwa sentensi moja kila moja.",
          text: [
            "Akili bandia (AI) ni programu inayofanya kazi ambazo kwa kawaida zinahitaji busara ya binadamu, kama kutambua sauti, kuona mifumo au kuandika maandishi. Machine learning (ujifunzaji wa mashine) ndiyo njia ya kawaida zaidi ya kuijenga: badala ya kuandika kila kanuni, watu huionyesha programu mifano mingi nayo hujifunza mifumo.",
            "AI zalishi (generative AI) ni machine learning inayounda maudhui mapya: maandishi, picha, sauti, msimbo. Zana kama ChatGPT, Microsoft Copilot, Google Gemini na Claude zimejengwa juu ya miundo mikubwa ya lugha (LLM) iliyofunzwa kwa maandishi mengi sana. Zinatabiri maneno yanayowezekana, ndiyo sababu zinaandika kwa ufasaha na pia ndiyo sababu zinaweza kukosea huku zikisikika na uhakika.",
            "Kama kiongozi, huhitaji hesabu zake. Unahitaji sentensi tatu rahisi unazoweza kuiambia timu yako, na busara ya kujua zana inasaidia lini na inakisia lini."
          ],
          words: [["Akili bandia (AI)", "programu inayofanya kazi ambazo kwa kawaida zinahitaji busara ya binadamu."], ["Machine learning", "kujenga programu kwa kuionyesha mifano ili ijifunze mifumo."], ["AI zalishi", "AI inayounda maandishi, picha, sauti au msimbo mpya."], ["LLM", "large language model (muundo mkubwa wa lugha): AI iliyo nyuma ya wasaidizi wa mazungumzo."]],
          slides: [
            { title: "Maana tatu rahisi", bullets: ["AI: programu inayofanya kazi zinazohitaji busara", "Machine learning: hujifunza mifumo kutoka kwa mifano", "AI zalishi: huunda maandishi, picha, msimbo"] },
            { title: "Kwa nini inasikika na uhakika", bullets: ["LLM hutabiri maneno yanayowezekana", "Ufasaha si sawa na usahihi"] },
            { title: "Kiongozi anahitaji nini", bullets: ["Maneno rahisi kwa timu yako", "Busara: inasaidia au inakisia?"] }
          ],
          tryIt: "Andika maelezo yako mwenyewe ya sentensi moja ya AI, machine learning na AI zalishi, kwa maneno ambayo mwanatimu wako mpya kabisa angeyaelewa. Yasome kwa sauti.",
          youCanNow: "kueleza AI, machine learning na AI zalishi kwa maneno rahisi.",
          quickCheck: [
            { objective: "O1", q: "Machine learning ni nini?", options: ["Programu inayojifunza mifumo kutoka kwa mifano", "Roboti inayojifunza kutembea", "Mtu anayefundisha kompyuta kwa mkono, kanuni moja baada ya nyingine", "Programu isiyokosea kamwe"], answer: 0, why: "Machine learning hupata mifumo katika mifano badala ya kufuata kanuni zilizoandikwa kwa mkono." },
            { objective: "O1", q: "Mwanatimu mpya anauliza AI zalishi ni nini. Ungetoa jibu lipi?", options: ["Ni injini ya utafutaji yenye jina jipya", "Ni programu inayofanya hesabu tu", "Ni AI inayounda maandishi, picha au msimbo mpya kutokana na unachoomba", "Ni programu inayojua kila ukweli"], answer: 2, why: "AI zalishi huunda maudhui mapya; haijui kila ukweli." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kutoka msaidizi hadi wakala: AI wakala inabadilisha nini",
          minutes: 5,
          goal: "Eleza tofauti kati ya msaidizi wa AI na wakala wa AI, na kwa nini ni muhimu kwa viongozi.",
          text: [
            "Msaidizi wa AI hujibu anapoulizwa: wewe unaomba, yeye anaandika rasimu, wewe unaamua. Wakala wa AI hupewa lengo na kutenda: hupanga hatua, hutumia zana kama barua pepe, kalenda, lahajedwali au tovuti, hukagua matokeo na huendelea hadi amalize au asimamishwe.",
            "AI wakala (agentic AI) huhamisha AI kutoka kushauri hadi kutenda. Msaidizi huandika rasimu ya jibu kwa mteja; wakala anaweza kusoma sanduku la barua, kuandika majibu, kuyatuma na kusasisha rekodi ya mteja. Hilo huokoa muda zaidi, na linaweza kufanya makosa kwa kasi, kwa jina la shirika lako.",
            "Kwa viongozi, maswali muhimu hubadilika. Si tu \"jibu ni zuri?\" bali \"inaruhusiwa kufanya nini, nani anaidhinisha vitendo vyake, na nani anawajibika inapokosea?\" Mtu ndiye anawajibika kila wakati."
          ],
          words: [["AI wakala", "AI inayofanya kazi kuelekea lengo kwa kupanga hatua na kuchukua vitendo kwa zana."], ["Kuwajibika", "kuwa mtu anayejibu kwa matokeo, yawe mazuri au mabaya."]],
          slides: [
            { title: "Msaidizi dhidi ya wakala", bullets: ["Msaidizi: unaomba, anaandika rasimu, unaamua", "Wakala: anapewa lengo, anapanga na kutenda kwa zana"] },
            { title: "Kutoka kushauri hadi kutenda", bullets: ["Kuandika rasimu ya jibu dhidi ya kulituma na kusasisha rekodi", "Muda zaidi unaokolewa, makosa kwa kasi"] },
            { title: "Maswali mapya ya kiongozi", bullets: ["Inaruhusiwa kufanya nini?", "Nani anaidhinisha vitendo vyake?", "Nani anawajibika? Mtu, kila wakati"] }
          ],
          tryIt: "Chagua kazi moja ya kawaida katika timu yako. Eleza msaidizi wa AI angefanya nini kwa kazi hiyo, na wakala wa AI angeweza kufanya nini. Andika hatua zipi ungetaka mtu aziidhinishe.",
          youCanNow: "kueleza jinsi AI wakala inavyotofautiana na msaidizi na kile viongozi lazima waamue.",
          quickCheck: [
            { objective: "O2", q: "Wakala wa AI anaweza kufanya nini ambacho msaidizi wa kawaida hafanyi?", options: ["Kujibu swali anapoulizwa", "Kupanga hatua na kuchukua vitendo kwa zana kuelekea lengo", "Kuandika rasimu ya barua pepe fupi", "Kurekebisha makosa yake bila mtu yeyote kujua"], answer: 1, why: "Mawakala hupanga na kutenda kwa zana, ndiyo sababu viongozi lazima waamue wanaruhusiwa kufanya nini." },
            { objective: "O2", q: "Wakala angeweza kutuma barua pepe za kurudisha pesa kwa wateja peke yake. Ungeamua nini kwanza?", options: ["Kumwacha atume kila kitu ili kuokoa muda", "Kupiga marufuku AI yote katika timu", "Kumwacha wakala aamue marejesho yapi yanahitaji mtu", "Hatua zipi mtu lazima aziidhinishe na nani anawajibika"], answer: 3, why: "Kwa mawakala, swali la kiongozi ni wanaruhusiwa kufanya nini, nani anaidhinisha na nani anawajibika." }
          ]
        },
        {
          objectives: ["O3"],
          title: "AI inafanya nini vizuri na inashindwa wapi",
          minutes: 5,
          goal: "Panga kazi kuwa matumizi mazuri, ya tahadhari na mabaya ya AI.",
          text: [
            "AI ni hodari wa rasimu za kwanza (barua pepe, matangazo ya kazi, ajenda), kufupisha nyaraka ndefu, kubuni mawazo, kuandika upya kwa ajili ya wasomaji tofauti, na kueleza mada usizozijua. Hizi huokoa muda kwa sababu mtu bado anakagua matokeo.",
            "Kuwa na tahadhari na chochote cha ukweli, cha kisheria, cha fedha, cha afya au kinachohusu watu: AI inaweza kubuni ukweli, vyanzo na namba (mara nyingi huitwa hallucination), inaweza kuonyesha upendeleo uliomo katika data iliyofunzwa nayo, na haijui sera za shirika lako usipoiambia.",
            "Matumizi mabaya: maamuzi ya mwisho kuhusu watu (kuajiri, kufukuza kazi, nidhamu, mshahara), chochote ambacho kosa lake haliwezi kurekebishwa, na chochote kinachohitaji data ya siri kuingizwa kwenye zana ya umma. Kipimo rahisi kwa timu yako: ungejisikia vizuri kumweleza mtu aliyeathirika kwamba AI ndiyo ilifanya hivi?"
          ],
          words: [["Hallucination", "AI inapoandika kitu kinachosikika kuwa kweli lakini kimebuniwa."], ["Upendeleo (bias)", "mifumo isiyo ya haki katika majibu ya AI, mara nyingi iliyojifunzwa kutoka data iliyofunzwa nayo."]],
          slides: [
            { title: "Matumizi mazuri", bullets: ["Rasimu za kwanza: barua pepe, matangazo, ajenda", "Muhtasari na kubuni mawazo", "Kuandika upya kwa wasomaji wapya"] },
            { title: "Tumia kwa tahadhari", bullets: ["Ukweli, sheria, pesa, afya, watu", "Inaweza kubuni ukweli na vyanzo", "Inaweza kuonyesha upendeleo"] },
            { title: "Matumizi mabaya", bullets: ["Maamuzi ya mwisho kuhusu watu", "Makosa yasiyoweza kurekebishwa", "Data ya siri kwenye zana za umma"] },
            { title: "Kipimo cha kueleza", bullets: ["Ungemwambia mtu aliyeathirika kwamba AI ndiyo ilifanya hivi?"] }
          ],
          tryIt: "Orodhesha kazi kumi ambazo timu yako inafanya. Weka alama kila moja NZURI, TAHADHARI au MBAYA kwa AI, na maneno machache ya kwa nini.",
          youCanNow: "kupima kazi zipi za timu yako ni matumizi mazuri, ya tahadhari au mabaya ya AI.",
          quickCheck: [
            { objective: "O3", q: "Hallucination ya AI ni nini?", options: ["Picha iliyotengenezwa na AI", "AI kukataa kujibu", "AI kuandika kitu kinachosikika kuwa kweli lakini kimebuniwa", "AI kwenda polepole"], answer: 2, why: "Hallucination husikika na uhakika, ndiyo sababu majibu ya AI yanahitaji kukaguliwa." },
            { objective: "O3", q: "Timu yako inataka AI iamue waombaji wapi waitwe kwenye usaili. Ungeweka alama gani?", options: ["TAHADHARI au MBAYA: mtu lazima afanye uamuzi, akitumia AI kusaidia tu", "NZURI: AI ni ya haraka zaidi", "NZURI, ilimradi hakuna anayeambiwa", "Haifai kufikiriwa"], answer: 0, why: "Maamuzi kuhusu watu yanahitaji busara ya binadamu, na kipimo cha kueleza kinashindwa ikiwa ungelificha." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kile viongozi wanahitaji kujua kuhusu AI",
        questions: [
          { objective: "O1", q: "Maelezo yapi rahisi ni bora zaidi kwa AI zalishi?", options: ["Roboti kiwandani", "Lahajedwali la haraka zaidi", "AI inayounda maandishi, picha au msimbo mpya", "Injini ya utafutaji"], answer: 2, why: "AI zalishi huunda maudhui mapya." },
          { objective: "O1", q: "Kwa nini msaidizi wa AI anaweza kusikika na uhakika na bado akakosea?", options: ["Anatabiri maneno yanayowezekana badala ya kukagua ukweli", "Ameundwa kudanganya", "Anasoma magazeti ya zamani tu", "Ameharibika"], answer: 0, why: "Kutabiri kwa ufasaha si kukagua ukweli." },
          { objective: "O2", q: "Nini hasa kinaifanya AI kuwa \"wakala\"?", options: ["Ina sauti", "Ni ghali", "Inaandika majibu marefu", "Inapanga hatua na kuchukua vitendo kwa zana"], answer: 3, why: "Mawakala hutenda kuelekea lengo, si kujibu tu." },
          { objective: "O2", q: "Wakala wa AI anatuma barua pepe isiyo sahihi ya kurudisha pesa kwa mteja. Nani anawajibika?", options: ["AI", "Mtu katika shirika lako", "Hakuna mtu", "Kampuni ya programu peke yake"], answer: 1, why: "Mtu anawajibika kila wakati kwa vitendo vya AI vinavyofanywa kwa jina la shirika." },
          { objective: "O3", q: "Lipi ni matumizi MABAYA ya AI?", options: ["Kuandika rasimu ya ajenda ya mkutano", "Kubuni majina ya tukio", "Kufupisha ripoti ndefu", "Kufanya uamuzi wa mwisho wa kumfukuza mfanyakazi"], answer: 3, why: "Maamuzi ya mwisho kuhusu watu yanahitaji busara ya binadamu." }
        ]
      }
    },
    {
      name: "Sura 2: Kuongoza hatua za kwanza za timu yako",
      lessons: [
        {
          objectives: ["O4"],
          title: "Hatari ambazo kila kiongozi anapaswa kuzitaja",
          minutes: 5,
          goal: "Taja hatari kuu za AI kwa timu yako na kinga moja kwa kila moja.",
          text: [
            "Faragha: chochote kinachoandikwa kwenye zana ya AI ya umma kinaweza kuhifadhiwa na mtoa huduma, na baadhi ya zana za bure zinaweza kukitumia kuboresha bidhaa zao. Kinga: hakuna data ya wateja, wafanyakazi au ya siri kwenye zana za umma; tumia zana ambazo shirika lako limeidhinisha.",
            "Usahihi: ukweli uliobuniwa, namba zisizo sahihi, vyanzo vya kubuni. Kinga: mtu anakagua ukweli, takwimu na nukuu kabla ya chochote kutoka nje. Upendeleo na haki: majibu yanaweza kuwa si ya haki kwa makundi ya watu. Kinga: hakuna maamuzi kuhusu watu yanayofanywa na AI peke yake.",
            "Usalama na mawakala: mawakala wanaosoma barua pepe au kurasa za wavuti wanaweza kudanganywa na maagizo yaliyofichwa (prompt injection), na mawakala wenye ruhusa nyingi mno wanaweza kuleta madhara halisi. Kinga: ruhusa ndogo kabisa inayohitajika na idhini ya mtu kwa vitendo. Kwa mfumo kamili zaidi, Mfumo wa bure wa NIST wa Kusimamia Hatari za AI (AI Risk Management Framework) unapanga kazi hii katika kazi nne: Govern, Map, Measure na Manage (Kutawala, Kubaini, Kupima na Kusimamia)."
          ],
          words: [["Prompt injection", "maandishi yaliyofichwa yanayojaribu kuifanya AI ifuate maagizo ya mtu mwingine."], ["Ruhusa ndogo kabisa", "kuipa zana au mtu ruhusa ambayo kazi inahitaji tu, si zaidi."], ["NIST AI RMF", "mfumo wa bure, wa hiari, wa Marekani wa kusimamia hatari za AI."]],
          slides: [
            { title: "Faragha", bullets: ["Zana za umma zinaweza kuhifadhi unachoandika", "Hakuna data ya wateja, wafanyakazi au ya siri", "Tumia zana zilizoidhinishwa"] },
            { title: "Usahihi na haki", bullets: ["Kagua ukweli, takwimu na nukuu", "Hakuna maamuzi kuhusu watu yanayofanywa na AI peke yake"] },
            { title: "Usalama na mawakala", bullets: ["Maagizo yaliyofichwa yanaweza kudanganya mawakala", "Ruhusa ndogo kabisa, idhini ya mtu kwa vitendo"] },
            { title: "Mfumo wa bure", bullets: ["NIST AI RMF: Govern, Map, Measure, Manage", "Ni wa hiari; unarekebishwa: angalia ukurasa wa NIST"] }
          ],
          sources: [{ name: "NIST AI Risk Management Framework", url: "https://www.nist.gov/itl/ai-risk-management-framework" }, { name: "OWASP Top 10 for LLM Applications 2025", url: "https://genai.owasp.org/llm-top-10/" }],
          tryIt: "Andika hatari tatu kubwa za AI kwa kazi halisi ya timu yako, na kinga moja unayoweza kuweka mwezi huu kwa kila moja.",
          youCanNow: "kutaja hatari kuu za AI kwa timu yako na kinga inayotekelezeka kwa kila moja.",
          quickCheck: [
            { objective: "O4", q: "Ruhusa ndogo kabisa inamaanisha nini kwa zana za AI?", options: ["Kuzipa zana za AI ruhusa nyingi iwezekanavyo ili zifanye kazi vizuri", "Kuipa kila zana ruhusa ambayo kazi yake inahitaji tu", "Kumruhusu kiongozi peke yake kutumia AI", "Kutumia AI kidogo iwezekanavyo"], answer: 1, why: "Ruhusa ndogo kabisa hupunguza madhara ikiwa zana itakosea au itadanganywa." },
            { objective: "O4", q: "Timu yako inashughulikia rekodi za wateja. Jozi ipi ya hatari na kinga inafaa zaidi?", options: ["Hatari: AI ni ya polepole. Kinga: nunua kompyuta ya haraka zaidi", "Hatari: AI ni mpya. Kinga: subiri miaka mitano", "Hatari: wafanyakazi wanapenda AI. Kinga: zuia tovuti zote", "Hatari: taarifa binafsi zinavuja kwenye zana za umma. Kinga: ondoa taarifa kwanza au tumia zana iliyoidhinishwa"], answer: 3, why: "Kinga nzuri inalingana na hatari halisi katika kazi ya timu yenyewe." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kujaribu mwenyewe: onyesho la moja kwa moja unaloweza kuonyesha",
          minutes: 5,
          goal: "Fanya onyesho fupi na salama la AI kwa kazi halisi ya timu (isiyo ya siri).",
          text: [
            "Viongozi wanaotumia AI wenyewe huiongoza vizuri zaidi. Chagua kazi halisi isiyo na data ya siri: ajenda ya mkutano wa timu wa wiki ijayo, rasimu ya kwanza ya tangazo la kazi, au muhtasari kwa maneno rahisi wa sera ya umma.",
            "Andika prompt iliyo wazi: unachohitaji, muktadha (bila majina wala taarifa za siri), na muundo. Kisha iboreshe kwa swali moja la kufuatilia, kama \"lifupishe\" au \"liandike kwa ajili ya wafanyakazi wapya\". Kagua kila ukweli kabla ya kuutumia.",
            "Katika kikao chako, onyesha mchakato mzima, pamoja na kosa ikiwa AI italifanya. Kuona kiongozi akigundua kosa la AI kunaifundisha timu zaidi kuliko onyesho lisilo na dosari."
          ],
          steps: ["Chagua kazi halisi isiyo na data ya siri.", "Andika prompt: hitaji, muktadha, muundo.", "Uliza swali moja la kufuatilia ili kuiboresha.", "Kagua ukweli na urekebishe makosa.", "Andika utakachoionyesha timu."],
          words: [["Prompt", "unachoandika au kusema kwa zana ya AI ili kuomba kitu."], ["Swali la kufuatilia", "ombi la pili linaloboresha jibu la kwanza."]],
          slides: [
            { title: "Itumie mwenyewe kwanza", bullets: ["Viongozi wanaotumia AI huiongoza vizuri zaidi", "Chagua kazi halisi, bila data ya siri"] },
            { title: "Onyesho zuri", bullets: ["Prompt iliyo wazi: hitaji, muktadha, muundo", "Swali moja la kufuatilia ili kuiboresha", "Kagua kila ukweli"] },
            { title: "Onyesha makosa pia", bullets: ["Kugundua kosa la AI hufundisha zaidi"] }
          ],
          tryIt: "Tumia ChatGPT, Copilot, Gemini au Claude kuandika rasimu ya ajenda ya mkutano wa timu wa wiki ijayo. Uliza swali moja la kufuatilia, ikague, na uhifadhi toleo la kabla na la baada kwa ajili ya kikao chako.",
          youCanNow: "kufanya onyesho fupi, salama na la kweli la AI kwa kazi halisi ya timu.",
          quickCheck: [
            { objective: "O5", q: "Nini kinafanya onyesho zuri la moja kwa moja la AI kwa timu yako?", options: ["Kazi halisi isiyo na data ya siri", "Kazi inayotumia faili ya mteja halisi", "Kazi ya kubuni isiyohusiana na kazi yako", "Onyesho linaloficha makosa yoyote"], answer: 0, why: "Kazi halisi lakini isiyo ya siri huonyesha thamani bila kuweka data ya mtu yeyote hatarini." },
            { objective: "O5", q: "Wakati wa onyesho lako AI inaandika ajenda yenye tarehe isiyo sahihi ya mkutano. Unafanya nini?", options: ["Kuruka sehemu hiyo haraka", "Kuilaumu zana na kusimama", "Kuonyesha jinsi ulivyoligundua na kuuliza swali la kufuatilia kulirekebisha", "Kusema kila mara inakosea hivi"], answer: 2, why: "Kuonyesha jinsi ulivyogundua kosa huifundisha timu yako tabia ya kukagua." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kuieleza timu yako na kuweka kanuni ya kwanza ya msingi",
          minutes: 6,
          goal: "Toa kikao cha dakika kumi cha maelezo ya AI kwa timu kinachoisha na kanuni moja ya msingi.",
          text: [
            "Kikao kizuri cha kwanza ni kifupi na cha vitendo. Mpangilio: dakika mbili kuhusu AI na AI wakala ni nini; dakika tatu za onyesho la moja kwa moja; dakika mbili kuhusu matumizi mazuri kwa timu yetu; dakika mbili kuhusu hatari; dakika moja kuhusu kanuni ya msingi na mahali pa kuuliza maswali.",
            "Chagua kanuni moja ya msingi inayolinda watu na ni rahisi kukumbuka. Kanuni ya kwanza yenye manufaa zaidi kwa timu nyingi: \"Hakuna taarifa binafsi za mteja, mwanafunzi, mgonjwa au mfanyakazi zinazoingizwa kwenye zana za AI za umma.\" Ongeza nani wa kuuliza ukiwa na shaka.",
            "Karibisha maswali na wasiwasi. Baadhi ya watu watafurahi, wengine watakuwa na wasiwasi kuhusu kazi zao. Sema wazi unachojua, usichojua, na kwamba watu wanabaki kuwajibika kwa kazi yao. Kisha fuatilia kwa maandishi ukiwa na kanuni hiyo."
          ],
          steps: ["Dakika mbili: AI na AI wakala ni nini.", "Dakika tatu: onyesho la moja kwa moja.", "Dakika mbili: matumizi mazuri kwa timu yetu.", "Dakika mbili: hatari.", "Dakika moja: kanuni ya msingi na nani wa kuuliza; kisha itume kwa maandishi."],
          words: [["Kanuni ya msingi", "kanuni rahisi, ya pamoja, ambayo kila mtu anaifuata."], ["Kikao cha maelezo", "mkutano mfupi wa kuipa timu taarifa zile zile."]],
          slides: [
            { title: "Kikao cha dakika kumi", bullets: ["Dakika 2: AI na mawakala ni nini", "Dakika 3: onyesho la moja kwa moja", "Dakika 2: matumizi mazuri; dakika 2: hatari", "Dakika 1: kanuni ya msingi"] },
            { title: "Kanuni ya kwanza ya msingi", bullets: ["Hakuna taarifa binafsi kwenye zana za AI za umma", "Sema nani wa kuuliza ukiwa na shaka"] },
            { title: "Ongoza mazungumzo", bullets: ["Karibisha maswali na wasiwasi", "Sema unachojua na usichojua", "Watu wanabaki kuwajibika; fuatilia kwa maandishi"] }
          ],
          tryIt: "Kazi ya mwisho: andaa kikao chako cha dakika kumi chenye sehemu tano hapo juu, ukitumia onyesho lako kutoka Somo la 5 na hatari zako kutoka Somo la 4. Kitoe kwa timu yako (au ukirekodi), kimalize na kanuni moja ya msingi, na utume kanuni hiyo kwa maandishi baadaye.",
          youCanNow: "kuieleza timu yako kuhusu AI kwa uwazi na kuweka kanuni ya kwanza ya msingi inayolinda watu.",
          quickCheck: [
            { objective: "O6", q: "Kikao cha kwanza cha maelezo ya AI kinapaswa kuisha na nini?", options: ["Orodha ya kila zana ya AI sokoni", "Kanuni moja ya msingi iliyo wazi na nani wa kuuliza", "Ahadi kwamba AI haitabadilisha chochote", "Mtihani wenye alama"], answer: 1, why: "Kanuni moja iliyo wazi na mtu wa kuwasiliana naye huipa timu mahali pamoja pa kuanzia." },
            { objective: "O6", q: "Siku moja baada ya kikao chako, hatua bora inayofuata ni ipi?", options: ["Kusubiri kuona kama kuna anayekumbuka kanuni", "Kuongeza kanuni tano zaidi", "Kuiomba AI iwakumbushe wote", "Kutuma kanuni ya msingi kwa timu kwa maandishi"], answer: 3, why: "Kanuni iliyoandikwa ni rahisi kupatikana na kurejelewa." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kuongoza hatua za kwanza za timu yako",
        questions: [
          { objective: "O4", q: "Mfanyakazi anataka kubandika malalamiko ya mteja, pamoja na jina na anwani, kwenye zana ya AI ya umma ya bure. Jibu bora ni lipi?", options: ["Endelea", "Bandika anwani tu", "Ondoa taarifa binafsi kwanza, au tumia zana iliyoidhinishwa", "Iulize AI kama ni salama"], answer: 2, why: "Taarifa binafsi zinabaki nje ya zana za umma." },
          { objective: "O4", q: "Kazi nne za Mfumo wa NIST wa Kusimamia Hatari za AI ni zipi?", options: ["Govern, Map, Measure, Manage", "Plan, Build, Test, Ship", "Buy, Install, Train, Use", "Read, Write, Check, Send"], answer: 0, why: "NIST inataja Govern, Map, Measure na Manage." },
          { objective: "O5", q: "Onyesho lako la moja kwa moja linatoa tarehe isiyo sahihi. Ufanye nini katika kikao?", options: ["Kulificha", "Kuonyesha jinsi ulivyoligundua na kulirekebisha", "Kusimamisha kikao", "Kuilaumu zana na kuendelea"], answer: 1, why: "Kugundua makosa waziwazi hufundisha tabia ya kukagua." },
          { objective: "O6", q: "Ipi ni kanuni bora ya kwanza ya msingi kwa timu nyingi?", options: ["\"Hakuna taarifa binafsi kwenye zana za AI za umma; uliza ukiwa na shaka.\"", "\"Usitumie AI kamwe.\"", "\"Mameneja peke yao ndio wanaweza kutumia AI.\"", "\"Tumia AI kwa kila kitu.\""], answer: 0, why: "Inalinda watu na ni rahisi kukumbuka." },
          { objective: "O6", q: "Mwanatimu ana wasiwasi kwamba AI itachukua nafasi yake. Kiongozi mzuri:", options: ["Anamaliza mkutano", "Anapuuza wasiwasi huo", "Anaahidi kwamba hakuna kitakachobadilika kamwe", "Anasema wazi kinachojulikana na kwamba watu wanabaki kuwajibika"], answer: 3, why: "Majibu ya kweli na rahisi hujenga uaminifu." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Uongozi katika Zama za AI Wakala 1: Kuielewa AI",
    questions: [
      { objective: "O1", q: "AI inaelezwa vizuri zaidi kama:", options: ["Aina mpya ya skrini ya kompyuta", "Programu inayofanya kazi ambazo kwa kawaida zinahitaji busara ya binadamu", "App ya mitandao ya kijamii", "Aina ya roboti tu"], answer: 1, why: "Hiyo ndiyo maana rahisi." },
      { objective: "O1", q: "Machine learning inamaanisha:", options: ["Wafanyakazi wanajifunza kutumia mashine", "Mashine zinajirekebisha zenyewe", "Programu inajifunza mifumo kutoka kwa mifano", "Kuandika kwa kasi zaidi"], answer: 2, why: "Inajifunza kutoka kwa mifano badala ya kanuni zilizoandikwa kwa mkono." },
      { objective: "O1", q: "Ipi ni zana ya AI zalishi?", options: ["Printa", "Kikokotoo", "Microsoft Copilot", "Kabati la mafaili"], answer: 2, why: "Copilot, ChatGPT, Gemini na Claude huzalisha maandishi." },
      { objective: "O1", q: "LLM ni kifupi cha:", options: ["Large language model (muundo mkubwa wa lugha)", "Long legal memo (barua ndefu ya kisheria)", "Low-level machine (mashine ya kiwango cha chini)", "Local learning module (moduli ya kujifunzia ya ndani)"], answer: 0, why: "LLM ndizo zinazoendesha wasaidizi wa mazungumzo." },
      { objective: "O2", q: "Msaidizi wa AI:", options: ["Hakosei kamwe", "Hutenda peke yake kila wakati", "Husaini mikataba", "Hujibu na kuandika rasimu anapoombwa"], answer: 3, why: "Wasaidizi hujibu; wewe unaamua." },
      { objective: "O2", q: "Wakala wa AI:", options: ["Hujibu maswali tu", "Hupanga hatua na kutenda kwa zana kuelekea lengo", "Ni mfanyakazi wa kibinadamu", "Hawezi kutumia barua pepe wala kalenda"], answer: 1, why: "Mawakala huchukua vitendo." },
      { objective: "O2", q: "AI wakala inabadilisha swali la kiongozi kuwa:", options: ["Inapendwa na wengi?", "Ina rangi gani?", "Inaweza kuandika maneno mangapi?", "Inaruhusiwa kufanya nini, nani anaidhinisha, nani anawajibika?"], answer: 3, why: "Kutenda kunahitaji ruhusa na uwajibikaji." },
      { objective: "O3", q: "Hallucination inamaanisha AI:", options: ["Inakataa kujibu", "Ni ya haraka sana", "Inaandika kitu kinachosikika kuwa kweli lakini kimebuniwa", "Inaongea kwa sauti"], answer: 2, why: "Maudhui yaliyobuniwa lazima yakaguliwe." },
      { objective: "O3", q: "Lipi ni matumizi MAZURI ya AI kwa timu?", options: ["Rasimu ya kwanza ya tangazo la kazi ambayo mtu anaikagua", "Kuamua nani apate nyongeza ya mshahara", "Kutuma notisi za kisheria bila kukaguliwa", "Kuhifadhi rekodi za matibabu za wafanyakazi"], answer: 0, why: "Rasimu zinazokaguliwa na watu huokoa muda kwa usalama." },
      { objective: "O3", q: "Majibu ya AI yanaweza kuwa si ya haki kwa makundi ya watu kwa sababu ya:", options: ["Intaneti ya polepole", "Upendeleo uliojifunzwa kutoka data iliyofunzwa nayo", "Uchaguzi wa herufi", "Ukubwa wa skrini"], answer: 1, why: "Mifumo katika data iliyofunzwa nayo inaweza kubeba upendeleo." },
      { objective: "O3", q: "Kipimo cha kueleza kinauliza:", options: ["Ungemwambia mtu aliyeathirika kwamba AI ndiyo ilifanya hivi?", "AI inaweza kujieleza yenyewe?", "Ni nafuu?", "Ni ya haraka?"], answer: 0, why: "Kujisikia vizuri kulieleza ni ishara ya matumizi yanayokubalika." },
      { objective: "O4", q: "Prompt injection ni:", options: ["Mpango wa bei", "Tiba ya kitabibu", "Prompt ya haraka zaidi", "Maandishi yaliyofichwa yanayojaribu kuifanya AI ifuate amri za mtu mwingine"], answer: 3, why: "Mawakala wanaosoma barua pepe au kurasa za wavuti wanaweza kudanganywa." },
      { objective: "O4", q: "Ruhusa ndogo kabisa inamaanisha:", options: ["Hakuna ruhusa yoyote", "Ruhusa ambayo kazi inahitaji tu", "Ruhusa kamili kwa ajili ya kasi", "Ruhusa kwa mameneja tu"], answer: 1, why: "Ruhusa ndogo hupunguza madhara ya makosa." },
      { objective: "O4", q: "NIST AI RMF ni:", options: ["Zana ya AI", "Sheria yenye faini", "Mfumo wa bure, wa hiari wa kusimamia hatari za AI", "Cheti cha mafunzo"], answer: 2, why: "NIST inaueleza kuwa wa hiari." },
      { objective: "O4", q: "Kabla ya kutumia ukweli ulioandikwa na AI katika ripoti, unapaswa:", options: ["Kuiomba AI iahidi", "Kuuamini ikiwa unasikika sawa", "Kuukagua dhidi ya chanzo cha kuaminika", "Kuondoa namba zote"], answer: 2, why: "Mtu anakagua ukweli na takwimu." },
      { objective: "O5", q: "Onyesho zuri la moja kwa moja linatumia:", options: ["Kazi halisi isiyo na data ya siri", "Faili kamili ya mteja", "Data ya mishahara ya wafanyakazi", "Nywila"], answer: 0, why: "Kazi halisi lakini zisizo za siri ni salama na zinahusika." },
      { objective: "O5", q: "Kwa nini uonyeshe kosa la AI wakati wa kikao chako?", options: ["Linathibitisha AI haina maana", "Linachekesha", "Linamaliza mkutano mapema", "Linafundisha tabia ya kukagua"], answer: 3, why: "Kuona makosa yakigunduliwa hufundisha zaidi kuliko onyesho lisilo na dosari." },
      { objective: "O6", q: "Kikao cha kwanza kinapaswa kuisha na:", options: ["Sera ya kurasa 50", "Kanuni moja ya msingi iliyo wazi na nani wa kuuliza", "Bila hitimisho", "Ununuzi wa programu"], answer: 1, why: "Kanuni rahisi hukumbukwa na kufuatwa." },
      { objective: "O6", q: "Baada ya kikao unapaswa:", options: ["Kupiga marufuku maswali", "Kutotaja AI tena kamwe", "Kufuta onyesho", "Kutuma kanuni ya msingi kwa maandishi"], answer: 3, why: "Kuiandika huifanya ikumbukwe." },
      { objective: "O6", q: "Watu wanapotumia AI kwa kazi yao, nani anabaki kuwajibika kwa kazi hiyo?", options: ["Kampuni ya AI", "Zana ya AI", "Watu wanaofanya kazi hiyo", "Hakuna mtu"], answer: 2, why: "Uwajibikaji unabaki kwa watu." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [0, 3, 5, 6, 8, 10, 11, 13, 15, 17]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Maelezo rahisi", objective: "O1", notYet: "Anatumia maneno ya kitaalamu, au anachanganya AI zalishi na AI wakala.", meets: "Anaeleza AI zalishi na AI wakala kwa maneno rahisi.", exceeds: "Anatumia mfano kutoka kazi ya timu yenyewe ambao kila mtu anautambua." },
      { name: "Matumizi matatu mazuri", objective: "O3", notYet: "Matumizi chini ya matatu, au matumizi yasiyofaa.", meets: "Anataja matumizi matatu mazuri kwa kazi halisi ya timu.", exceeds: "Anasema yapi yanahitaji mtu kukagua majibu." },
      { name: "Hatari tatu", objective: "O4", notYet: "Hatari ni za jumla au hazipo.", meets: "Anataja hatari tatu zinazolingana na kazi halisi ya timu.", exceeds: "Anatoa kinga kwa kila hatari." },
      { name: "Mfano wa moja kwa moja", objective: "O5", notYet: "Hakuna mfano, au unatumia data ya siri.", meets: "Anaonyesha mfano mmoja wa moja kwa moja kwa msaidizi wa AI wa bure kwenye kazi isiyo ya siri.", exceeds: "Anaonyesha swali la kufuatilia na jinsi majibu yalivyokaguliwa." },
      { name: "Kanuni ya msingi", objective: "O6", notYet: "Hakuna kanuni ya msingi, au ni isiyo wazi.", meets: "Anamalizia na kanuni moja ya msingi iliyo wazi ambayo kila mtu ataifuata.", exceeds: "Anataja nani wa kuuliza na anatuma kanuni kwa maandishi baadaye." }
    ]
  },
  evaluation: {
    results: [
      "Viongozi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Viongozi wanaotoa kikao cha maelezo kwa timu yao ndani ya siku 30 (utafiti wa kufuatilia)",
      "Timu zenye kanuni ya msingi ya AI iliyoandikwa ndani ya siku 30 (utafiti wa kufuatilia)",
      "Viongozi wanaoendelea na kozi ya 2 ya Uongozi katika Zama za AI Wakala"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye msaidizi wa AI wa bure kama ChatGPT, Copilot, Gemini au Claude",
      "Orodha ya kazi za kawaida za timu yako",
      "Karatasi au hati ya maelezo na muhtasari wa kikao",
      "Kama dakika 60 kwa jumla, pamoja na kikao cha dakika kumi cha timu"
    ],
    facilitatorNotes: [
      "Fanyeni jaribio la awali pamoja, kisha kila meneja aeleze kazi moja aliyoiwekea alama NZURI, TAHADHARI au MBAYA na kwa nini.",
      "Fanya onyesho la Somo la 5 moja kwa moja na kikundi, pamoja na kosa moja linalogunduliwa.",
      "Wakumbushe wote kufuata sera za AI na data za shirika lao na kutotumia taarifa binafsi katika mazoezi.",
      "Waruhusu viongozi wajizoeze kikao chao wawili wawili kabla ya kukitoa kwa timu yao.",
      "Pima kazi ya mwisho kwa rubriki, na omba kanuni ya msingi iliyoandikwa kama ushahidi."
    ]
  }
};
