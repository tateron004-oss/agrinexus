"use strict";

// Koach Learn course (Swahili translation of shared/python-basics.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const COLAB = { name: "Google Colab: Maswali Yanayoulizwa Mara kwa Mara", url: "https://research.google.com/colaboratory/faq.html" };

module.exports = {
  id: "python-basics-sw",
  lang: "sw",
  translationOf: "python-basics",
  category: "Youth",
  name: "Utangulizi wa Kuandika Programu kwa Python",
  skills: "Kuendesha Python katika Google Colab, Kutumia vigezo na input, Kufanya maamuzi kwa if, Kufanya kazi na orodha na vitanzi, Kuandika function",
  outcome: "kuandika na kuendesha programu fupi ya Python katika Google Colab inayomwuliza mtumiaji taarifa, kuzihifadhi, kufanya uamuzi kwa kuzitumia, kurudia hatua kwa kitanzi, na kuonyesha jibu lililo wazi.",
  about: [
    "Kozi hii ni kwa yeyote ambaye hajawahi kuandika code: wanafunzi, wanajeshi wastaafu wanaoanza kazi mpya, na watu wazima wanaotafuta kazi ya teknolojia. Unahitaji tu akaunti ya Google ya bure na kivinjari cha wavuti.",
    "Utaandika Python halisi katika Google Colab, tovuti ya bure inayoendesha code kwa ajili yako, kwa hiyo hakuna cha kusakinisha. Kila somo linaongeza zana moja mpya: print, vigezo, maamuzi, orodha, vitanzi na function.",
    "Kila somo linachukua kama dakika tano. Lisome, tazama slaidi, kisha andika code mwenyewe katika \"Jaribu sasa\". Mwishoni utajenga kikagua bajeti ya manunuzi kuanzia mwanzo. Jaribio la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Katika Google Colab, andika kikagua bajeti ya manunuzi: function inayopokea orodha ya bei na bajeti, inayojumlisha bei kwa kitanzi, na inayoonyesha jumla pamoja na \"Under budget\" au \"Over budget\" na tofauti. Muulize mtumiaji bajeti kwa input(), ita function yako, na uijaribu kwa bajeti mbili tofauti.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Vijana na watu wazima wanaojaribu kuandika programu kwa mara ya kwanza: wanafunzi wa sekondari na chuo, wanachama wa programu za vijana, watu wanaobadilisha kazi na wanafunzi wa mafunzo ya kazi wanaopenda kujua kuhusu code, data au AI.",
    startingPoint: "Wanaweza kutumia kompyuta na kivinjari cha wavuti na kuingia kwenye akaunti ya Google. Wengi hawajawahi kuandika code, na hawajui kigezo, sharti, orodha, kitanzi au function ni nini.",
    gap: "Kuandika programu ni mwanzo wa kazi za teknolojia, data na AI, na ni zana muhimu katika kazi nyingine nyingi. Wanafunzi ambao hawajawahi kuandika programu inayofanya kazi mara nyingi hufikiri code si kwa ajili yao; programu ya kwanza inayotatua tatizo halisi hujenga ujuzi na kujiamini ili waendelee.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; kila neno la programu linaelezwa kwa mfano",
      "Vifaa: kompyuta au laptop yenye kivinjari ni bora; tableti inawezekana lakini ni ngumu zaidi kuandika code",
      "Akaunti na gharama: akaunti ya Google ya bure kwa Google Colab; hakuna cha kusakinisha wala kununua",
      "Muda: kama dakika 5 hadi 6 kwa somo pamoja na mazoezi, kama dakika 60 hadi 75 kwa jumla",
      "Hesabu: kujumlisha, kulinganisha na desimali rahisi tu"
    ],
    prerequisites: "Hakuna. Kozi ya Ujuzi wa Msingi wa Kompyuta inawasaidia wanafunzi ambao ni wapya katika kuandika kwa kibodi na kutumia kivinjari."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukitumia Google Colab kwenye kivinjari", action: "kufungua notebook, kuandika na kuendesha mstari wa print, na kusoma mstari wa mwisho wa ujumbe wa kosa", standard: "programu ikifanya kazi na kosa lolote la herufi likirekebishwa kwa kutumia ujumbe wa kosa" },
    { id: "O2", condition: "Ukipewa taarifa ambazo programu inahitaji", action: "kuzihifadhi katika vigezo vya aina sahihi, kupokea input kutoka kwa mtumiaji na kuzionyesha kwa f-string", standard: "ukibadilisha input kuwa namba kwa float() au int() kabla ya kufanya hesabu" },
    { id: "O3", condition: "Ukipewa kanuni yenye matokeo mawili au zaidi", action: "kuandika kizuizi cha if, elif na else kinachochagua matokeo sahihi", standard: "kwa alama sahihi za kulinganisha, nukta pacha na nafasi za mwanzo, na jibu sahihi kwa kila thamani ya majaribio" },
    { id: "O4", condition: "Ukipewa thamani kadhaa", action: "kutengeneza orodha, kuongeza kipengele na kusoma vipengele kwa index, na kutumia len() na sum() juu yake", standard: "kila index na kila jibu likiwa sahihi" },
    { id: "O5", condition: "Ukipewa orodha au kazi ya kurudia", action: "kuandika kitanzi cha for chenye jumla inayoendelea na kitanzi cha while kinachosimama", standard: "jumla ikiwa sahihi na bila kitanzi kinachoendelea milele" },
    { id: "O6", condition: "Ukipewa tatizo dogo kama kukagua bajeti", action: "kuandika function yenye parameters na thamani ya return, kuiita katika programu kamili na kuijaribu", standard: "programu ikitoa majibu sahihi kwa angalau input mbili tofauti" }
  ],
  chapters: [
    {
      name: "Sura 1: Programu zako za kwanza",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kufungua Google Colab na kuendesha mstari wako wa kwanza",
          minutes: 5,
          goal: "Fungua notebook ya Colab, andika mstari wa Python na uuendeshe.",
          text: [
            "Programu ni orodha ya maagizo ambayo kompyuta inafuata kwa mpangilio. Python ni lugha ya programu: njia ya kuandika maagizo hayo ambayo watu wanaweza kusoma. Inatumika kwa tovuti, data, michezo, roboti na AI.",
            "Google Colab ni tovuti ya bure inayoendesha Python kwenye kivinjari chako. Huhitaji kusakinisha chochote. Kazi yako inahifadhiwa kama notebook katika Google Drive yako. Notebook imeundwa kwa visanduku (cells): sehemu ambapo unaandika code na kuiendesha.",
            "Agizo lako la kwanza ni print. print(\"Hello, world!\") inaonyesha maneno yaliyo ndani ya alama za nukuu. Alama za nukuu zinaiambia Python kuwa haya ni maandishi, si amri. Ukikosea herufi, Python inaonyesha ujumbe wa kosa. Soma mstari wake wa mwisho: unakuambia kilichoharibika."
          ],
          steps: ["Nenda colab.research.google.com na uingie kwa akaunti ya Google.", "Chagua kutengeneza notebook mpya.", "Bofya ndani ya kisanduku cha kwanza cha code na uandike: print(\"Hello, world!\")", "Bonyeza kitufe cha play kando ya kisanduku, au Shift + Enter, ili kukiendesha.", "Soma matokeo chini ya kisanduku."],
          words: [["Programu", "orodha ya maagizo ambayo kompyuta inafuata kwa mpangilio."], ["Python", "lugha maarufu ya programu iliyo rahisi kusoma."], ["Notebook", "faili ya Colab iliyoundwa kwa visanduku ambapo unaandika na kuendesha code."], ["Kisanduku (cell)", "sehemu moja ya notebook inayobeba code unayoweza kuendesha."], ["Ujumbe wa kosa", "taarifa ya Python kwamba kitu fulani katika code yako si sahihi; mstari wa mwisho unasema ni nini."]],
          slides: [
            { title: "Python ni nini", bullets: ["Lugha ya kuandika maagizo kwa kompyuta", "Inatumika kwa tovuti, data, michezo na AI", "Ni rahisi kusoma kuliko lugha nyingi"] },
            { title: "Google Colab", bullets: ["Tovuti ya bure inayoendesha Python kwenye kivinjari chako", "Hakuna cha kusakinisha", "Notebook zinahifadhiwa katika Google Drive yako"] },
            { title: "Mstari wako wa kwanza", bullets: ["Andika: print(\"Hello, world!\")", "Uendeshe kwa kitufe cha play au Shift + Enter", "Maneno yanaonekana chini ya kisanduku"] },
            { title: "Makosa ni ya kawaida", bullets: ["Soma mstari wa mwisho wa kosa", "Kagua herufi, alama za nukuu na mabano", "Rekebisha na uendeshe tena"] }
          ],
          sources: [COLAB],
          tryIt: "Fungua notebook mpya ya Colab. Katika kisanduku kimoja, onyesha jina lako la kwanza kwa print. Katika kisanduku cha pili, onyesha sentensi kuhusu chakula unachokipenda. Kisha ondoa alama moja ya nukuu kwa makusudi, endesha, na usome kosa. Rudisha alama hiyo na uendeshe tena.",
          youCanNow: "kufungua Google Colab, kuandika mstari wa print, kuuendesha, na kusoma ujumbe wa kosa.",
          quickCheck: [
            { objective: "O1", q: "Katika notebook ya Colab, kisanduku (cell) ni nini?", options: ["Folda ya Google Drive", "Sehemu ambapo unaandika code na kuiendesha", "Ujumbe wa kosa", "Aina ya namba"], answer: 1, why: "Notebook imeundwa kwa visanduku ambapo unaandika na kuendesha code." },
            { objective: "O1", q: "Uliandika prnt(\"Hi\") na Python inaonyesha kosa refu. Ungefanya nini?", options: ["Kufunga Colab na kufungua akaunti mpya", "Kulipuuza na kuandika code zaidi", "Kusoma mstari wa mwisho wa kosa, kisha kurekebisha neno liwe print", "Kufuta notebook nzima"], answer: 2, why: "Mstari wa mwisho wa kosa unakuambia kilichoharibika, hapa ni jina lililoandikwa vibaya." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Vigezo: kuipa data jina",
          minutes: 5,
          goal: "Hifadhi taarifa katika vigezo na umwulize mtumiaji input.",
          text: [
            "Kigezo (variable) ni jina linalobeba thamani, kama sanduku lenye lebo. name = \"Maya\" inaweka maandishi Maya katika sanduku linaloitwa name. hours = 20 inaweka namba 20 katika sanduku linaloitwa hours. Alama = inamaanisha \"hifadhi hiki\", si \"ni sawa na\".",
            "Thamani zina aina. Maandishi ndani ya alama za nukuu ni string (str). Namba nzima ni integer (int). Namba zenye nukta ya desimali ni float. Aina ni muhimu: \"5\" + \"5\" inatoa \"55\", lakini 5 + 5 inatoa 10.",
            "input() inamwomba mtu anayeendesha programu aandike kitu. Daima inarudisha string, kwa hiyo ili kufanya hesabu unaibadilisha kuwa namba: hours = float(input(\"Hours worked: \")).",
            "f-string inachanganya maandishi na vigezo: print(f\"Hi {name}, you worked {hours} hours.\") Herufi f kabla ya alama za nukuu na mabano ya maua { } ndizo zinazofanya kazi hiyo."
          ],
          steps: ["Chagua jina fupi na wazi la kigezo bila nafasi (tumia_underscore).", "Hifadhi thamani kwa =.", "Kwa input ya mtumiaji, tumia input(\"swali: \").", "Ifunike kwa int() au float() kama unahitaji namba.", "Onyesha jibu kwa f-string."],
          words: [["Kigezo (variable)", "jina linalobeba thamani."], ["String (str)", "maandishi, yanaandikwa ndani ya alama za nukuu."], ["Integer (int)", "namba nzima, kama 7."], ["Float", "namba yenye nukta ya desimali, kama 7.5."], ["input()", "inamwomba mtumiaji aandike kitu na kukirudisha kama string."], ["f-string", "maandishi yanayoanza na f yanayoweza kuonyesha vigezo ndani ya { }."]],
          slides: [
            { title: "Kigezo ni sanduku lenye lebo", bullets: ["name = \"Maya\"", "hours = 20", "= inamaanisha hifadhi, si ni sawa na"] },
            { title: "Aina tatu za kawaida", bullets: ["str: maandishi ndani ya alama za nukuu", "int: namba nzima", "float: namba zenye desimali"] },
            { title: "Kumwuliza mtumiaji", bullets: ["input() daima inarudisha maandishi", "hours = float(input(\"Hours worked: \"))", "Badilisha maandishi kuwa namba kabla ya hesabu"] },
            { title: "Kuonyesha kwa f-string", bullets: ["print(f\"Hi {name}!\")", "Weka vigezo ndani ya mabano ya maua"] }
          ],
          tryIt: "Andika programu inayomwuliza mtumiaji jina lake, malipo yake kwa saa, na saa alizofanya kazi wiki hii. Hifadhi kila moja katika kigezo, zidisha malipo kwa saa, na uonyeshe: Hi <jina>, you earned <kiasi> this week.",
          youCanNow: "kuhifadhi thamani katika vigezo, kumwuliza mtumiaji input, kubadilisha maandishi kuwa namba, na kuonyesha jibu lililo wazi.",
          quickCheck: [
            { objective: "O2", q: "Thamani 3.75 ni aina gani?", options: ["str", "int", "list", "float"], answer: 3, why: "Namba yenye nukta ya desimali ni float." },
            { objective: "O2", q: "Unataka mtumiaji aandike kiwango chake cha malipo ili ukizidishe kwa saa. Ungeandika mstari upi?", options: ["rate = float(input(\"Pay rate: \"))", "rate = input(\"Pay rate: \")", "print(\"Pay rate\")", "rate == input(\"Pay rate: \")"], answer: 0, why: "input() inatoa string, kwa hiyo float() inaigeuza kuwa namba unayoweza kufanyia hesabu." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kufanya maamuzi kwa if, elif na else",
          minutes: 6,
          goal: "Andika code inayofanya mambo tofauti kulingana na sharti.",
          text: [
            "Programu hufanya machaguo kwa if. Sharti (condition) ni swali ambalo jibu lake ni True au False, kama hours > 40. Likiwa True, mistari iliyosogezwa ndani chini yake inaendeshwa.",
            "Alama za kulinganisha: == ni sawa na (alama mbili za sawa), != si sawa na, > kubwa kuliko, < ndogo kuliko, >= angalau, <= isiyozidi. Unaweza kuunganisha masharti kwa and na or.",
            "elif inamaanisha \"else if\": ukaguzi wa pili wakati wa kwanza ni False. else inaendeshwa wakati hakuna ukaguzi uliokuwa True. Nafasi za mwanzo wa mstari (nafasi nne) ndizo zinazoonyesha Python mistari ipi ni ya if. Colab inaziweka yenyewe baada ya nukta pacha (:).",
            "Mfano: if score >= 90: print(\"A\") elif score >= 80: print(\"B\") else: print(\"Keep practicing\"). Kila sehemu inakaa kwenye mstari wake, na print ikiwa imesogezwa ndani."
          ],
          steps: ["Andika if, kisha sharti, kisha nukta pacha (:).", "Sogeza ndani mistari inayopaswa kuendeshwa likiwa True.", "Ongeza elif kwa ukaguzi mwingine ukihitajika.", "Ongeza else kwa kila kitu kingine.", "Jaribu kwa thamani zinazogusa kila tawi."],
          words: [["Sharti (condition)", "swali ambalo jibu lake ni True au False."], ["Boolean", "aina ya True au False katika Python."], ["Nafasi za mwanzo (indentation)", "nafasi mwanzoni mwa mstari zinazoonyesha mstari ni wa kizuizi kipi."], ["Tawi (branch)", "mojawapo ya njia ambazo kauli ya if inaweza kufuata."]],
          slides: [
            { title: "if inaendesha code ikiwa True tu", bullets: ["if hours > 40:", "    print(\"Overtime!\")", "Usisahau nukta pacha na nafasi za mwanzo"] },
            { title: "Alama za kulinganisha", bullets: ["== sawa na, != si sawa na", "> kubwa kuliko, < ndogo kuliko", ">= angalau, <= isiyozidi"] },
            { title: "elif na else", bullets: ["elif: kagua sharti jingine", "else: inaendeshwa wakati hakuna kilicholingana", "Python inakagua kutoka juu kwenda chini"] },
            { title: "Jaribu kila tawi", bullets: ["Jaribu thamani kwa kila njia", "Jaribu mpakani, kama 40 kamili"] }
          ],
          tryIt: "Andika programu inayouliza joto kwa Fahrenheit. Likiwa 85 au zaidi, onyesha \"Hot: drink water.\" Likiwa 50 au zaidi, onyesha \"Nice day.\" Vinginevyo onyesha \"Bring a jacket.\" Iendeshe mara tatu kwa 90, 50 na 30.",
          youCanNow: "kuandika vizuizi vya if, elif na else na kujaribu kila tawi.",
          quickCheck: [
            { objective: "O3", q: "Alama != inamaanisha nini?", options: ["Sawa na", "Kubwa kuliko", "Si sawa na", "Hifadhi thamani hii"], answer: 2, why: "!= inamaanisha si sawa na; == inamaanisha sawa na." },
            { objective: "O3", q: "Unataka kuonyesha \"Ticket free\" kama umri ni chini ya 5 au angalau 65. Ungetumia sharti lipi?", options: ["if age < 5 and age >= 65:", "if age < 5 or age >= 65:", "if age = 5 or 65:", "if age > 5 or age < 65:"], answer: 1, why: "or inafanya sharti kuwa True sehemu yoyote ikiwa True; hakuna umri ulio chini ya 5 na angalau 65 kwa wakati mmoja." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Programu zako za kwanza",
        questions: [
          { objective: "O1", q: "print(\"Hello\") inafanya nini?", options: ["Inahifadhi faili inayoitwa Hello", "Inatuma Hello kwa printa", "Inaonyesha neno Hello chini ya kisanduku", "Inafuta kisanduku"], answer: 2, why: "print inaonyesha maandishi kama matokeo." },
          { objective: "O1", q: "Code yako inaonyesha kosa. Unaangalia wapi kwanza?", options: ["Mstari wa mwisho wa ujumbe wa kosa", "Neno la kwanza la notebook", "Google Drive yako", "Historia ya kivinjari"], answer: 0, why: "Mstari wa mwisho wa kosa la Python unasema kilichoharibika." },
          { objective: "O2", q: "Unaendesha age = input(\"Age: \") na kuandika 16. age ni aina gani?", options: ["int", "float", "Boolean", "str (maandishi)"], answer: 3, why: "input() daima inarudisha string; tumia int() kuigeuza kuwa namba." },
          { objective: "O3", q: "Mstari upi unakagua kwa usahihi kama hours ni zaidi ya 40?", options: ["if hours = 40", "if hours > 40:", "if hours more 40", "hours > 40 if:"], answer: 1, why: "if, sharti, kisha nukta pacha." },
          { objective: "O3", q: "Sehemu ya else inaendeshwa lini?", options: ["Kila wakati, kwanza", "Tu wakati hakuna sharti la if au elif lililokuwa True", "Tu wakati if ilikuwa True", "Kamwe"], answer: 1, why: "else inashika kila hali ambayo ukaguzi wa awali haukushika." }
        ]
      }
    },
    {
      name: "Sura 2: Programu zinazorudia na kukumbuka",
      lessons: [
        {
          objectives: ["O4"],
          title: "Orodha: kuweka thamani nyingi pamoja",
          minutes: 5,
          goal: "Tengeneza orodha, iongezee, na usome vipengele vyake.",
          text: [
            "Orodha (list) inabeba thamani nyingi kwa mpangilio, ndani ya mabano ya mraba: prices = [3.50, 12.00, 6.25]. Orodha inaweza kubeba maandishi pia: chores = [\"dishes\", \"laundry\"].",
            "Kila kipengele kina namba ya nafasi inayoitwa index. Python inahesabu kuanzia 0, kwa hiyo prices[0] ni kipengele cha kwanza (3.50) na prices[-1] ni cha mwisho.",
            "Zana muhimu za orodha: prices.append(4.99) inaongeza kipengele mwishoni. len(prices) inakuambia kuna vipengele vingapi. sum(prices) inajumlisha orodha ya namba. \"dishes\" in chores ni True kama kipengele kiko kwenye orodha."
          ],
          steps: ["Tengeneza orodha kwa mabano ya mraba na koma.", "Soma kipengele kwa jina_la_orodha[index], kuanzia 0.", "Ongeza kwa .append(thamani).", "Hesabu vipengele kwa len().", "Jumlisha namba kwa sum()."],
          words: [["Orodha (list)", "kundi la thamani kwa mpangilio ndani ya mabano ya mraba."], ["Index", "nafasi ya kipengele katika orodha, kuanzia 0."], ["append", "inaongeza kipengele kimoja mwishoni mwa orodha."], ["len()", "inatoa idadi ya vipengele."]],
          slides: [
            { title: "Orodha inabeba thamani nyingi", bullets: ["prices = [3.50, 12.00, 6.25]", "chores = [\"dishes\", \"laundry\"]"] },
            { title: "Kuhesabu kunaanza kwa 0", bullets: ["prices[0] ni kipengele cha kwanza", "prices[-1] ni kipengele cha mwisho"] },
            { title: "Zana za orodha", bullets: ["append() inaongeza mwishoni", "len() inahesabu vipengele", "sum() inajumlisha namba", "in inakagua kama kipengele kipo"] }
          ],
          tryIt: "Tengeneza orodha ya vitu vitatu unavyohitaji kununua, na bei zake katika orodha ya pili. Ongeza kitu kimoja zaidi na bei yake kwa append. Onyesha kuna vitu vingapi, kitu cha kwanza, na jumla ya bei kwa sum().",
          youCanNow: "kutengeneza orodha, kusoma vipengele kwa index, kuongeza vipengele na kuvihesabu au kuvijumlisha.",
          quickCheck: [
            { objective: "O4", q: "Index katika orodha ni nini?", options: ["Namba ya nafasi ya kipengele, kuanzia 0", "Jumla ya orodha", "Jina la orodha", "Kipengele cha mwisho tu"], answer: 0, why: "Kila kipengele kina index, na Python inahesabu kuanzia 0." },
            { objective: "O4", q: "chores = [\"dishes\", \"laundry\"]. Unataka kukagua kama \"laundry\" iko kwenye orodha. Ungeandika nini?", options: ["len(\"laundry\")", "chores[\"laundry\"]", "sum(chores)", "\"laundry\" in chores"], answer: 3, why: "\"laundry\" in chores ni True kama kipengele kiko kwenye orodha." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Vitanzi: kurudia hatua bila kuandika upya",
          minutes: 6,
          goal: "Tumia kitanzi cha for kupitia orodha na kitanzi cha while kurudia hadi umalize.",
          text: [
            "Kitanzi (loop) kinarudia code. Kitanzi cha for kinaendeshwa mara moja kwa kila kipengele katika orodha: for price in prices: print(price). Kila mzunguko, kigezo price kinabeba kipengele kinachofuata.",
            "range() inatengeneza mfululizo wa namba za kuhesabu: for i in range(5) inaendeshwa mara tano huku i = 0, 1, 2, 3, 4.",
            "Jumla inayoendelea ni mtindo wa kawaida: anza na total = 0 kabla ya kitanzi, kisha ongeza total = total + price ndani yake (au total += price). Baada ya kitanzi, total inabeba jumla.",
            "Kitanzi cha while kinarudia muda wote sharti likiwa True, kwa mfano while answer != \"done\". Hakikisha kitu ndani ya kitanzi kinabadilisha sharti, la sivyo kitaendelea milele. Katika Colab, bonyeza kitufe cha stop kusimamisha kitanzi kisichosimama."
          ],
          steps: ["Amua kinachorudiwa.", "Kwa kila kipengele katika orodha, tumia: for item in my_list:", "Sogeza ndani code inayorudiwa.", "Kwa jumla, weka total = 0 kabla ya kitanzi na uongeze ndani yake.", "Kwa kitanzi cha while, hakikisha sharti linaweza kuwa False."],
          words: [["Kitanzi (loop)", "code inayorudiwa."], ["Kitanzi cha for", "kinarudia mara moja kwa kila kipengele katika orodha au range."], ["Kitanzi cha while", "kinarudia muda wote sharti likiwa True."], ["range()", "inatengeneza mfululizo wa namba, kuanzia 0 kwa kawaida."], ["Jumla inayoendelea", "kigezo unachoendelea kukiongezea ndani ya kitanzi."]],
          slides: [
            { title: "for: mara moja kwa kila kipengele", bullets: ["for price in prices:", "    print(price)", "price inabeba kipengele kinachofuata kila mara"] },
            { title: "Kuhesabu kwa range", bullets: ["for i in range(5): inaendeshwa mara 5", "i inapita 0, 1, 2, 3, 4"] },
            { title: "Mtindo wa jumla inayoendelea", bullets: ["total = 0 kabla ya kitanzi", "total += price ndani ya kitanzi", "Onyesha total baada ya kitanzi"] },
            { title: "while: hadi sharti libadilike", bullets: ["Inarudia muda wote sharti likiwa True", "Badilisha kitu ndani, la sivyo haitaisha", "Kitufe cha stop kinasimamisha kitanzi kilichokwama"] }
          ],
          tryIt: "Andika kitanzi cha while kinachoendelea kuuliza \"Add a price (or type done): \". Ongeza kila namba kwenye orodha kwa append. Mtumiaji akiandika done, tumia kitanzi cha for na jumla inayoendelea kujumlisha bei na kuonyesha jumla.",
          youCanNow: "kurudia code kwa vitanzi vya for na while na kuweka jumla inayoendelea.",
          quickCheck: [
            { objective: "O5", q: "range(4) inatoa namba zipi?", options: ["1, 2, 3, 4", "0, 1, 2, 3", "0, 1, 2, 3, 4", "4 tu"], answer: 1, why: "range(4) inahesabu kuanzia 0 na inasimama kabla ya 4." },
            { objective: "O5", q: "Kitanzi chako kinajumlisha bei lakini total inarudi 0 kila mara. Ungehamishia total = 0 wapi?", options: ["Ndani ya kitanzi", "Baada ya kitanzi", "Kabla ya kitanzi", "Ndani ya mstari wa print"], answer: 2, why: "Weka total = 0 mara moja kabla ya kitanzi, kisha uongeze ndani yake." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Function: kufunga code unayoweza kutumia tena",
          minutes: 6,
          goal: "Andika function yenye inputs na thamani ya return, kisha uitumie katika programu kamili.",
          text: [
            "Function ni kizuizi cha code chenye jina unachoweza kuendesha wakati wowote unapokihitaji. Tayari umetumia zilizojengwa ndani: print(), len(), sum(). Sasa utaandika zako mwenyewe kwa def.",
            "def check_budget(prices, budget): inaanzisha function yenye parameters mbili, yaani inputs inazohitaji. Ndani yake unafanya kazi. return inarudisha jibu kwa yule aliyeiita.",
            "Kuita function kunaiendesha: result = check_budget([3.5, 12, 6.25], 25). Function nzuri inafanya kazi moja na ina jina linalosema kazi hiyo ni ipi.",
            "Kuunganisha yote: kazi ya mwisho inatumia kila kitu katika kozi hii. Ipange kwanza kwa maneno ya kawaida (pata bajeti, jumlisha bei, linganisha, onyesha), kisha geuza kila mstari kuwa code na uijaribu kwa bajeti mbili."
          ],
          steps: ["Andika mpango kwa maneno ya kawaida kama maelezo (comments) yanayoanza na #.", "Anzisha function kwa def jina(parameters):", "Sogeza ndani mwili wake; tumia kitanzi na if ndani yake.", "Tumia return kurudisha jibu, au print ndani yake.", "Ita function na uijaribu kwa inputs tofauti."],
          words: [["Function", "kizuizi cha code chenye jina unachoweza kuendesha tena na tena."], ["def", "neno linaloanzisha function mpya."], ["Parameter", "input ambayo function inahitaji, inatajwa ndani ya mabano yake."], ["return", "inarudisha thamani kutoka kwenye function."], ["Comment (maelezo)", "maandishi katika code yanayoanza na #; Python inayapuuza."]],
          slides: [
            { title: "Kwa nini function", bullets: ["Andika code mara moja, itumie mara nyingi", "Kazi moja kwa kila function", "Jina wazi linasema inafanya nini"] },
            { title: "Kuandika function", bullets: ["def check_budget(prices, budget):", "Sogeza ndani mwili wake", "return inarudisha jibu"] },
            { title: "Kuita function", bullets: ["check_budget([3.5, 12, 6.25], 25)", "Jaribu inputs tofauti kuikagua"] },
            { title: "Mpango wa kazi ya mwisho", bullets: ["Pata bajeti kwa input()", "Jumlisha bei kwa kitanzi", "Linganisha kwa if, onyesha jibu"] }
          ],
          tryIt: "Kazi ya mwisho: andika check_budget(prices, budget). Ndani yake, tumia kitanzi kujumlisha bei, kisha onyesha jumla na \"Under budget by X\" au \"Over budget by X\". Muulize mtumiaji bajeti kwa float(input()), ita function kwa orodha yako ya manunuzi, na uijaribu kwa bajeti kubwa na ndogo.",
          youCanNow: "kuandika na kuita function yako mwenyewe na kuunganisha vigezo, input, if, orodha na vitanzi katika programu moja inayofanya kazi.",
          quickCheck: [
            { objective: "O6", q: "Parameters katika function ni nini?", options: ["Ujumbe wa makosa", "Vitanzi ndani ya function", "Jina la function", "Inputs ambazo function inahitaji"], answer: 3, why: "Parameters, kama prices na budget, ni inputs ambazo function inahitaji." },
            { objective: "O6", q: "Kabla ya kuandika kikagua bajeti, ungefanya nini kwanza?", options: ["Kuipanga kwa maneno ya kawaida: pata bajeti, jumlisha bei, linganisha, onyesha", "Kuandika code nyingi iwezekanavyo na kutumaini itafanya kazi", "Kuandika jina la function tu", "Kuijaribu bila bajeti"], answer: 0, why: "Kupanga kwanza kwa maneno ya kawaida kunafanya kila mstari uwe rahisi kugeuza kuwa code." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Programu zinazorudia na kukumbuka",
        questions: [
          { objective: "O4", q: "colors = [\"red\", \"blue\", \"green\"]. colors[0] ni nini?", options: ["\"blue\"", "\"green\"", "Kosa", "\"red\""], answer: 3, why: "Python inahesabu nafasi za orodha kuanzia 0, kwa hiyo index 0 ni kipengele cha kwanza." },
          { objective: "O4", q: "Mstari upi unaongeza 4.99 mwishoni mwa orodha prices?", options: ["prices.append(4.99)", "prices + 4.99", "append.prices(4.99)", "prices[4.99]"], answer: 0, why: "append inaongeza kipengele kimoja mwishoni mwa orodha." },
          { objective: "O5", q: "for i in range(3): inaendeshwa mara ngapi?", options: ["2", "4", "3", "Milele"], answer: 2, why: "range(3) inatoa 0, 1 na 2: mara tatu." },
          { objective: "O5", q: "Kitanzi chako cha while hakisimami kamwe. Sababu inayowezekana zaidi ni ipi?", options: ["Ulitumia orodha", "Colab haiko mtandaoni", "Ulitumia print", "Hakuna kitu ndani ya kitanzi kinachofanya sharti kuwa False"], answer: 3, why: "Kitanzi cha while kinaisha tu sharti lake likiwa False." },
          { objective: "O6", q: "return inafanya nini ndani ya function?", options: ["Inafuta function", "Inaanzisha upya Colab", "Inarudisha thamani mahali function ilipoitwa", "Inaonyesha kosa"], answer: 2, why: "return inarudisha jibu kwa aliyeiita." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Utangulizi wa Kuandika Programu kwa Python",
    questions: [
      { objective: "O1", q: "Programu ni nini?", options: ["Aina ya skrini ya kompyuta", "Orodha ya maagizo ambayo kompyuta inafuata kwa mpangilio", "Anwani ya tovuti", "Akaunti ya Google"], answer: 1, why: "Programu ni seti ya maagizo yanayoendeshwa kwa mpangilio." },
      { objective: "O1", q: "Kwa nini Google Colab inawafaa wanaoanza?", options: ["Inaendesha Python kwenye kivinjari bila kusakinisha chochote", "Inafanya kazi bila intaneti tu", "Inakuandikia code yote", "Inahitaji leseni ya kulipia"], answer: 0, why: "Colab ni notebook ya bure iliyo mtandaoni; huhitaji kusakinisha chochote." },
      { objective: "O1", q: "Unaendeshaje kisanduku cha code katika Colab?", options: ["Kufunga kichupo", "Kuandika run juu ya ukurasa", "Kubonyeza kitufe cha play au Shift + Enter", "Kujitumia kwa barua pepe"], answer: 2, why: "Kitufe cha play au Shift + Enter kinaendesha kisanduku." },
      { objective: "O1", q: "Mstari upi unaonyesha maandishi Good job?", options: ["print(\"Good job\")", "print(Good job)", "print \"Good job\"", "say(\"Good job\")"], answer: 0, why: "Maandishi yanaingia ndani ya alama za nukuu ndani ya mabano ya print." },
      { objective: "O2", q: "Katika Python, = inafanya nini katika pay = 15?", options: ["Inakagua kama pay ni sawa na 15", "Inaonyesha 15", "Inafuta pay", "Inahifadhi 15 katika kigezo pay"], answer: 3, why: "= moja inahifadhi thamani; == inalinganisha." },
      { objective: "O2", q: "\"5\" + \"5\" inatoa nini?", options: ["10", "\"55\"", "Kosa kila wakati", "5"], answer: 1, why: "String mbili zikiunganishwa zinatoa \"55\"." },
      { objective: "O2", q: "Unahitaji kufanya hesabu kwa kile mtumiaji anachoandika. Mstari upi ni sahihi?", options: ["hours = input(\"Hours: \") * 2", "hours = float(input(\"Hours: \"))", "hours = print(\"Hours\")", "hours = text(input())"], answer: 1, why: "input inatoa maandishi; float() inayageuza kuwa namba." },
      { objective: "O2", q: "name = \"Ana\". Upi unaonyesha Hi Ana?", options: ["print(\"Hi {name}\")", "print(Hi name)", "print(f(Hi name))", "print(f\"Hi {name}\")"], answer: 3, why: "Herufi f kabla ya alama za nukuu inaruhusu {name} kuonyesha kigezo." },
      { objective: "O3", q: "Alama ipi inamaanisha \"ni sawa na\" katika sharti?", options: ["==", "=", "=>", "!="], answer: 0, why: "== inalinganisha; = inahifadhi." },
      { objective: "O3", q: "Nini lazima kiwe mwishoni mwa mstari wa if?", options: ["Nukta mkato (;)", "Nukta (.)", "Nukta pacha (:)", "Hakuna kitu"], answer: 2, why: "Mistari ya if, elif, else, for, while na def inaishia kwa nukta pacha." },
      { objective: "O3", q: "score = 85. Tawi lipi linaendeshwa? if score >= 90 / elif score >= 80 / else", options: ["if", "else", "Hakuna hata moja", "elif"], answer: 3, why: "85 si 90 au zaidi, lakini ni 80 au zaidi, kwa hiyo elif inaendeshwa." },
      { objective: "O3", q: "Python inajuaje mistari ipi ni ya if?", options: ["Kwa rangi ya maandishi", "Kwa herufi kubwa", "Kwa nafasi za mwanzo wa mstari (indentation)", "Kwa namba za mistari"], answer: 2, why: "Mistari iliyosogezwa ndani chini ya if ndiyo kizuizi chake." },
      { objective: "O4", q: "nums = [4, 8, 2]. len(nums) inatoa nini?", options: ["2", "3", "8", "14"], answer: 1, why: "len inahesabu vipengele; viko vitatu." },
      { objective: "O4", q: "nums = [4, 8, 2]. sum(nums) inatoa nini?", options: ["3", "8", "14", "482"], answer: 2, why: "sum inajumlisha namba: 4 + 8 + 2 = 14." },
      { objective: "O4", q: "prices[-1] ni nini?", options: ["Kipengele cha kwanza", "Kosa", "Kipengele cha mwisho", "Bei ya kwanza kwa hasi"], answer: 2, why: "Index -1 inamaanisha kipengele cha mwisho." },
      { objective: "O5", q: "Unataka kujumlisha orodha katika kitanzi. Nini kinakuja kabla ya kitanzi?", options: ["total = 0", "return total", "print(total)", "def total"], answer: 0, why: "Jumla inayoendelea inaanza kwa 0 kabla ya kitanzi." },
      { objective: "O5", q: "for chore in chores: inafanya nini?", options: ["Inafuta orodha", "Inaendeshwa mara moja tu", "Inapanga orodha", "Inaendeshwa mara moja kwa kila kipengele katika chores"], answer: 3, why: "Kitanzi cha for kinapitia kila kipengele kwa mpangilio." },
      { objective: "O6", q: "Neno lipi linaanzisha function mpya?", options: ["func", "def", "new", "make"], answer: 1, why: "def inafafanua function." },
      { objective: "O6", q: "Katika def check_budget(prices, budget):, prices na budget ni nini?", options: ["Makosa", "Parameters: inputs ambazo function inahitaji", "Orodha za function", "Maelezo (comments)"], answer: 1, why: "Majina yaliyo ndani ya mabano ni parameters." },
      { objective: "O6", q: "Umeandika kikagua bajeti. Njia bora ya kukijaribu ni ipi?", options: ["Kukiendesha mara moja na kutumaini", "Kufuta maelezo (comments)", "Kukishiriki kabla ya kukiendesha", "Kukiendesha kwa bajeti kubwa na bajeti ndogo na kukagua majibu yote mawili"], answer: 3, why: "Kujaribu inputs tofauti kunakagua kwamba kila tawi linafanya kazi." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      3,
      5,
      6,
      8,
      10,
      12,
      14,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Function",
        objective: "O6",
        notYet: "Hakuna function, au haipokei bei na bajeti.",
        meets: "Function yenye parameters za bei na bajeti inayorudisha au kuonyesha jibu.",
        exceeds: "Function ina jina wazi, inafanya kazi moja na inatumia return."
      },
      {
        name: "Kitanzi na jumla",
        objective: "O5",
        notYet: "Jumla si sahihi au hakuna kitanzi kilichotumika.",
        meets: "Kitanzi cha for kinajumlisha bei katika jumla inayoendelea inayoanza kwa 0.",
        exceeds: "Pia kinaonyesha vitu vingapi vilikaguliwa kwa kutumia len()."
      },
      {
        name: "Uamuzi",
        objective: "O3",
        notYet: "Programu haisemi Under budget au Over budget, au inasema lisilo sahihi.",
        meets: "if na else zinaonyesha ujumbe sahihi pamoja na tofauti.",
        exceeds: "Pia inashughulikia bajeti iliyo sawa kabisa kwa elif."
      },
      {
        name: "Input",
        objective: "O2",
        notYet: "Bajeti haiulizwi, au inatumika kama maandishi kwa hiyo hesabu inashindwa.",
        meets: "input() inauliza bajeti na float() inaigeuza kuwa namba.",
        exceeds: "Inaonyesha jibu kwa f-string iliyo rahisi kusoma."
      },
      {
        name: "Kujaribu",
        objective: "O6",
        notYet: "Programu iliendeshwa mara moja au haikuendeshwa kabisa.",
        meets: "Iliendeshwa kwa bajeti mbili tofauti, na majibu yote mawili ni sahihi.",
        exceeds: "Pia ilijaribiwa kwa bajeti iliyo sawa kabisa na jumla, au kwa orodha tupu."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kupata Anafikia au Anazidi katika kila mstari wa rubric ya kikagua bajeti",
      "Wanafunzi wanaoripoti kuandika programu nyingine ya Python yao wenyewe ndani ya siku 30 baada ya kozi (utafiti wa ufuatiliaji)",
      "Wanafunzi wanaoendelea na kozi inayofuata, kama AI Programming with Python au Data Science for Beginners",
      "Wanafunzi wanaojiunga na klabu ya code, darasa, mafunzo kazini (internship) au programu ya mafunzo baada ya kozi"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta au laptop yenye kivinjari cha wavuti",
      "Akaunti ya Google ya bure ili kutumia Google Colab",
      "Karatasi na kalamu kupanga programu kwa maneno ya kawaida",
      "Kama dakika 60 hadi 75 kwa jumla, pamoja na muda wa mazoezi"
    ],
    facilitatorNotes: [
      "Kabla ya darasa, hakikisha kila mwanafunzi anaweza kuingia Google Colab; akaunti za shule wakati mwingine zinaizuia, kwa hiyo andaa akaunti binafsi au notebook nyingine ya bure ya Python.",
      "Wahimize wanafunzi kuandika code wenyewe badala ya kunakili na kubandika, na kusoma ujumbe wa makosa kwa sauti pamoja.",
      "Tumia uandishi wa programu kwa jozi: mmoja anaandika, mwingine anasoma na kukagua, kisha mbadilishane kila somo.",
      "Sherehekea makosa kama sehemu ya kuandika code; onyesha jinsi unavyorekebisha kosa lako mwenyewe kwenye skrini.",
      "Kwa kazi ya mwisho, toa mifano ya orodha za bei na bajeti ili wanafunzi walinganishe majibu yao na yako."
    ]
  }
};
