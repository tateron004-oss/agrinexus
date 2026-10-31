"use strict";

// Koach Learn course (Swahili translation of shared/insurance-license-prep.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.
// Kozi hii inahusu leseni za bima nchini Marekani; majina ya ofisi, sheria na mitihani ya Marekani yamebaki kama yalivyo.

const SRC = {
  naicDepts: { name: "NAIC: Tafuta idara ya bima ya jimbo lako", url: "https://content.naic.org/state-insurance-departments" },
  nipr: { name: "NIPR: National Insurance Producer Registry (kuomba na kuhuisha leseni za mawakala wa bima)", url: "https://nipr.com/" },
  tdiAgent: { name: "Idara ya Bima ya Texas (Texas Department of Insurance): Leseni za mawakala", url: "https://www.tdi.texas.gov/agent/index.html" },
  tdiLifeApply: { name: "Idara ya Bima ya Texas: Jinsi ya kuomba leseni ya general lines ya maisha, ajali, afya na HMO", url: "https://www.tdi.texas.gov/agent/general-life-apply.html" },
  usc1033: { name: "18 U.S.C. 1033 (Cornell Legal Information Institute)", url: "https://www.law.cornell.edu/uscode/text/18/1033" },
  naicUtpa: { name: "NAIC Model Law 880: Sheria ya Mazoea Yasiyo ya Haki ya Biashara (Unfair Trade Practices Act)", url: "https://content.naic.org/sites/default/files/model-law-880.pdf" }
};

module.exports = {
  id: "insurance-license-prep-sw",
  lang: "sw",
  translationOf: "insurance-license-prep",
  category: "Workforce Development",
  name: "Maandalizi ya Mtihani wa Leseni ya Wakala wa Bima",
  skills: "Kuchagua aina ya leseni, Kupata hatua za leseni za jimbo lako, Kueleza maneno ya bima, Kukokotoa madai ya mazoezi, Kutambua mbinu za mauzo zisizo za kimaadili, Kupanga kwa ajili ya mtihani",
  outcome: "kujiandaa kwa mtihani wa leseni ya wakala wa bima wa jimbo lako: kuchagua aina sahihi ya leseni, kupata hatua rasmi za jimbo lako na muhtasari wa mtihani, kueleza maneno ya msingi, kukokotoa madai ya mazoezi, kutambua mbinu za mauzo zisizo za kimaadili, na kufuata mpango wa kusoma na kufanya mtihani wenye tarehe.",
  about: [
    "Kozi hii ni kwa watu wazima wanaotaka kuuza bima kama wakala mwenye leseni, anayeitwa pia producer: watafuta kazi, watu wanaobadilisha kazi, watu wanaorudi nyumbani kutoka gerezani, wanajeshi wastaafu (veterans) na watu wanaotaka kufungua wakala wao wenyewe. Nchini Marekani, mawakala wa bima wanapewa leseni na kila jimbo, si na serikali kuu (federal).",
    "Utajifunza aina kuu za leseni, jinsi ya kupata hatua za jimbo lako na muhtasari wa mtihani, maneno na mawazo ya msingi yanayoulizwa kwenye mitihani, jinsi ya kukokotoa madai ya mazoezi yenye deductible na kikomo, na kanuni za maadili zinazowalinda wateja. Mwishoni utaandika mpango wako wa kusoma na kufanya mtihani wenye tarehe halisi.",
    "Kozi hii INAKUANDAA kwa mtihani. Haitoi leseni, na haichukui nafasi ya kozi yoyote ya kabla ya leseni (prelicensing) ambayo jimbo lako linaweza kuhitaji. Masharti, ada na maelezo ya mtihani yanawekwa na idara ya bima ya jimbo lako na hubadilika, kwa hiyo kila somo linakuelekeza kwenye ukurasa rasmi. Hakuna kitu hapa ni ushauri kuhusu kununua bima au uwekezaji."
  ],
  finalTask: "Andika Mpango wa Kusoma na Kufanya Mtihani wa Leseni ya Bima wa ukurasa mmoja kwa jimbo lako: (1) aina ya leseni utakayopata na kwa nini; (2) hatua rasmi za jimbo lako kwa mpangilio (mafunzo ya kabla ya leseni kama yanahitajika, mtihani na kampuni ya mitihani, alama za vidole au ukaguzi wa historia, maombi, uteuzi), kila moja na anwani yake rasmi ya tovuti; (3) mada na uzito wake kutoka muhtasari wa mtihani wa jimbo lako; (4) ratiba ya kusoma ya kila wiki yenye tarehe, tarehe unayolenga ya mtihani na angalau tarehe mbili za mitihani ya mazoezi pamoja na lengo la alama; (5) madai matatu ya mazoezi uliyokokotoa sawasawa na kanuni tatu za maadili kwa maneno yako mwenyewe.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima nchini Marekani wanaotaka kazi ya wakala wa bima (producer) katika kituo cha simu (call center), benki, wakala au kampuni ya bima, au wanaotaka kufungua wakala wao wenyewe. Kundi mchanganyiko: watafuta kazi, watu wanaobadilisha kazi, wanajeshi wastaafu, watu wanaorudi kutoka gerezani, wahamiaji na wamiliki wa biashara ndogo.",
    startingPoint: "Wamewahi kununua bima ya gari, ya nyumba ya kupanga au ya afya lakini mara chache husoma mkataba wa bima (policy). Hawajui jinsi leseni zinavyotolewa, leseni ipi wapate, wala maneno yanayotumika kwenye mtihani. Wanaweza kufanya hesabu rahisi za asilimia kwa msaada kidogo.",
    gap: "Watu wengi hulipia kozi ya kabla ya leseni au mtihani bila kujua leseni ipi inafaa kazi, jimbo lao linahitaji nini, au mtihani umejengwa vipi, kisha hushindwa au hukata tamaa. Kujua njia, maneno ya msingi, hesabu za madai na kanuni za maadili kunageuza mchakato unaochanganya kuwa mpango wenye tarehe, na kunaongoza kwenye kazi ambayo mara nyingi haihitaji shahada.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi (kama darasa la 8); kila neno la mtihani linaelezwa",
      "Vifaa: simu au kompyuta ya maktaba; karatasi, kalamu na kikokotoo rahisi vinatosha kwa kila kazi",
      "Muda: masomo ya dakika 4 hadi 6",
      "Leseni ni za kila jimbo: hatua, saa za kabla ya leseni, ada, kampuni ya mitihani na alama za kufaulu zinatofautiana, kwa hiyo wanafunzi wanakagua ukurasa rasmi wa jimbo lao",
      "Ukaguzi wa historia: baadhi ya wanafunzi wana rekodi ya uhalifu; kozi inaeleza kanuni kwa uaminifu na kuwaelekeza kwa idara ya jimbo lao",
      "Hakuna ushauri kuhusu bima au uwekezaji upi mtu anunue; mazoezi yanatumia namba za kubuni"
    ],
    prerequisites: "Hakuna. Wanafunzi wanaotaka msaada wa hesabu za asilimia wanaweza kuanza na kozi \"Hesabu za Kila Siku\" (Everyday Math)."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa kazi au bidhaa ya bima", action: "kutambua aina ya leseni na nafasi ya kazi inayoifaa", standard: "ukipata angalau mifano 5 kati ya 6 sahihi" },
    { id: "O2", condition: "Kwa jimbo lako mwenyewe", action: "kupata hatua rasmi za leseni, kampuni ya mitihani na muhtasari wa maudhui ya mtihani", standard: "ukiandika kila hatua na anwani yake rasmi ya tovuti" },
    { id: "O3", condition: "Ukipewa orodha ya maneno na mawazo ya mtihani", action: "kueleza maneno ya msingi ya bima na kanuni za mkataba kwa maneno rahisi", standard: "ukitoa maana sahihi kwa angalau 8 kati ya 10" },
    { id: "O4", condition: "Ukipewa dai la mazoezi lenye deductible, coinsurance au kikomo cha bima", action: "kukokotoa kiasi ambacho kampuni ya bima inalipa na kiasi ambacho mwenye bima analipa", standard: "sahihi hadi dola moja kwa madai 3 ya mazoezi" },
    { id: "O5", condition: "Ukipewa hali ya mauzo au huduma", action: "kutambua mbinu zisizo za kimaadili au zisizo halali na kuchagua hatua ya uaminifu", standard: "ukipata angalau hali 4 kati ya 5 sahihi" },
    { id: "O6", condition: "Ukitumia hatua rasmi za jimbo lako na muhtasari wa mtihani", action: "kuandika mpango wa kusoma na kufanya mtihani wa leseni yako wenye tarehe", standard: "unaojumuisha kila hatua rasmi, kila mada ya muhtasari na angalau tarehe mbili za mitihani ya mazoezi" }
  ],
  chapters: [
    {
      name: "Sura 1: Njia yako ya kupata leseni ya bima",
      lessons: [
        {
          title: "Wakala anafanya nini na unahitaji aina gani ya leseni",
          objectives: ["O1"],
          minutes: 5,
          goal: "Chagua aina ya leseni inayofaa kazi ya bima unayoitaka.",
          text: [
            "Wakala wa bima, anayeitwa producer katika sheria, anauza, anatafuta wateja au anajadiliana kuhusu bima kwa niaba ya wateja. Kila jimbo linahitaji leseni ili kufanya hivi. Wakala wa kampuni moja (captive agent) anauzia kampuni moja tu. Wakala huru (independent agent) anauzia kampuni kadhaa na mara nyingi anaendesha biashara ndogo. Wakala lazima pia ateuliwe (appointment) na kila kampuni ya bima anayoiuzia.",
            "Majimbo yanatoa leseni kwa aina ya mamlaka (line of authority). Aina nne kuu za kawaida ni Maisha (Life), Ajali na Afya (Accident and Health, au ugonjwa), Mali (Property) na Dhima (Casualty). Watu wengi huanza na Maisha na Afya pamoja, au na Mali na Dhima pamoja. Baadhi ya majimbo pia yana leseni ndogo ya Personal Lines kwa bima ya nyumba na gari tu.",
            "Maisha inahusu kifo na baadhi ya mikataba ya akiba ya muda mrefu. Ajali na Afya inahusu bili za matibabu, mapato wakati wa ulemavu na gharama zinazofanana. Mali inahusu uharibifu wa vitu unavyomiliki, kama nyumba au gari. Dhima inahusu liability, yaani pesa unazodaiwa ukimuumiza mtu au ukiharibu vitu vyake.",
            "Kazi nyingine za bima zinatumia leseni tofauti. Mrekebishaji wa madai (adjuster) anachunguza na kumaliza madai. Kuuza baadhi ya bidhaa za aina ya uwekezaji, kama variable annuities, kunahitaji pia leseni ya dhamana (securities). Kagua orodha ya aina za leseni za jimbo lako kabla ya kulipia kozi yoyote."
          ],
          words: [["Producer", "neno la kisheria la wakala au dalali wa bima mwenye leseni anayeuza bima."], ["Line of authority (aina ya mamlaka)", "aina ya bima ambayo leseni yako inakuruhusu kuuza, kama Maisha au Mali."], ["Appointment (uteuzi)", "idhini rasmi ya kampuni ya bima kwako kuuza bidhaa zake."], ["Liability (dhima)", "pesa unazodaiwa kisheria ukimuumiza mtu au ukiharibu mali yake."], ["Adjuster", "mtu anayechunguza na kumaliza madai ya bima; kwa kawaida ni leseni tofauti."]],
          slides: [
            { title: "Mawakala ni producers", bullets: ["Wanauza, wanatafuta wateja au wanajadiliana kuhusu bima", "Kila jimbo linahitaji leseni", "Kila kampuni unayoiuzia lazima ikuteue"] },
            { title: "Wa kampuni moja au huru", bullets: ["Captive: anauzia kampuni moja", "Independent: anauzia kampuni kadhaa, mara nyingi anaendesha biashara"] },
            { title: "Aina nne kuu", bullets: ["Maisha: inalipa mtu anapokufa", "Ajali na Afya: bili za matibabu, ulemavu", "Mali: uharibifu wa vitu vyako", "Dhima: liability unapowadhuru wengine"] },
            { title: "Kagua kabla ya kulipa", bullets: ["Adjusters wanahitaji leseni tofauti", "Bidhaa za variable zinahitaji pia leseni ya securities", "Tafuta kwanza orodha ya aina za leseni za jimbo lako"] }
          ],
          tryIt: "Andika kazi tatu za bima unazoweza kuziomba (kwa mfano wakala wa kituo cha simu anayeuza bima ya gari, mfanyakazi wa benki anayeuza bima ya maisha, au wakala wako mwenyewe). Kando ya kila moja, andika aina ya leseni au aina za leseni inazohitaji.",
          youCanNow: "kusema producer wa bima anafanya nini na kuchagua aina ya leseni inayofaa kazi.",
          quickCheck: [
            { objective: "O1", q: "Tangazo la kazi linasema utauza bima ya gari na ya nyumba. Aina zipi za leseni zinafaa?", options: ["Maisha na Afya", "Mali na Dhima", "Securities peke yake", "Adjuster peke yake"], answer: 1, why: "Bima ya gari na nyumba inahusu uharibifu wa mali na dhima kwa wengine, yaani Mali na Dhima." },
            { objective: "O1", q: "Captive agent ni nani?", options: ["Wakala anayeuzia kampuni moja tu ya bima", "Wakala asiye na leseni", "Wakala anayemaliza madai tu", "Wakala anayefanya kazi kwa jimbo"], answer: 0, why: "Captive agent anawakilisha kampuni moja; independent agent anawakilisha kampuni kadhaa." }
          ]
        },
        {
          title: "Kupata hatua rasmi za leseni za jimbo lako",
          objectives: ["O2"],
          minutes: 6,
          goal: "Pata hatua za leseni za jimbo lako, kampuni ya mitihani na muhtasari wa mtihani kwenye kurasa rasmi.",
          text: [
            "Idara ya bima ya jimbo lako ndiyo inayoweka kanuni. Ili kuipata, tumia ukurasa wa NAIC (National Association of Insurance Commissioners, chama cha wasimamizi wa bima wa majimbo) wenye viungo vya idara ya kila jimbo. Tafuta kurasa zinazoitwa producer licensing, agent licensing au how to apply.",
            "Majimbo mengi yanafuata njia inayofanana: kozi ya kabla ya leseni (inahitajika katika majimbo mengi, si yote), mtihani wa jimbo unaotolewa na kampuni ya mitihani, alama za vidole au ukaguzi wa historia, maombi, kisha uteuzi na kampuni ya bima. Baada ya kupata leseni, unaihuisha na unasoma mafunzo endelevu. Kwa mfano, tulipokagua Oktoba 2026, Texas ilitoa mtihani wake kupitia Pearson VUE, ilihitaji alama za vidole, na ilipokea maombi kupitia Sircon au NIPR tu baada ya kufaulu mtihani.",
            "Kampuni ya mitihani inachapisha kitabu cha mwongozo wa mtahiniwa (candidate handbook) na muhtasari wa maudhui ya mtihani (content outline) kwa jimbo lako. Muhtasari unaorodhesha kila mada na idadi ya maswali yanayotoka kwa kila moja. Ndicho chombo bora zaidi cha kusomea ulicho nacho, na ni bure.",
            "Kama una rekodi ya uhalifu, kuwa mwaminifu kwenye maombi. Sheria ya serikali kuu (18 U.S.C. 1033) inasema mtu aliyetiwa hatiani kwa kosa kubwa (felony) linalohusu udanganyifu au kuvunja uaminifu anahitaji idhini ya maandishi ya msimamizi wa bima ili kufanya kazi ya bima. Idara ya jimbo lako inaeleza jinsi ya kuomba. Usimkubalie muuzaji wa kozi akuambie kwamba haijalishi."
          ],
          steps: ["Fungua ukurasa wa NAIC wa idara za bima za majimbo na uchague jimbo lako.", "Tafuta ukurasa wa leseni za producer au wakala na orodha ya aina za leseni.", "Andika kila hatua: mafunzo ya kabla ya leseni, mtihani, alama za vidole, maombi, uteuzi.", "Tafuta jina la kampuni ya mitihani na upakue bure kitabu cha mwongozo wa mtahiniwa na muhtasari.", "Andika anwani rasmi ya tovuti ya kila hatua na tarehe ulipoikagua."],
          words: [["NAIC", "National Association of Insurance Commissioners: chama cha wasimamizi wa bima wa majimbo."], ["Mafunzo ya kabla ya leseni (prelicensing)", "kozi ambayo baadhi ya majimbo yanahitaji kabla hujaruhusiwa kufanya mtihani wa leseni."], ["Muhtasari wa maudhui (content outline)", "orodha ya mada za mtihani na idadi ya maswali yanayotoka kwa kila moja."], ["NIPR", "National Insurance Producer Registry: tovuti ambayo majimbo mengi yanatumia kwa maombi na kuhuisha leseni."], ["Mafunzo endelevu (continuing education)", "masomo ambayo mawakala wenye leseni lazima wasome ili kuhuisha leseni yao."]],
          slides: [
            { title: "Anza na chanzo rasmi", bullets: ["Idara ya bima ya jimbo lako inaweka kanuni", "Ipate kutoka ukurasa wa NAIC wa idara za majimbo", "Tafuta producer licensing au agent licensing"] },
            { title: "Njia ya kawaida", bullets: ["Kozi ya kabla ya leseni (majimbo mengi)", "Mtihani wa jimbo kupitia kampuni ya mitihani", "Alama za vidole au ukaguzi wa historia", "Maombi, kisha uteuzi na kampuni ya bima"] },
            { title: "Pata muhtasari wa bure", bullets: ["Kampuni ya mitihani inaweka candidate handbook", "Content outline inaorodhesha mada na idadi ya maswali", "Soma kufuatana na muhtasari"] },
            { title: "Rekodi si mwisho", bullets: ["Kuwa mwaminifu kwenye maombi", "Baadhi ya makosa makubwa yanahitaji idhini ya maandishi ya msimamizi", "Uliza idara ya jimbo lako jinsi ya kufanya"] }
          ],
          sources: [SRC.naicDepts, SRC.nipr, SRC.tdiAgent, SRC.tdiLifeApply, SRC.usc1033],
          tryIt: "Fungua ukurasa wa NAIC, chagua jimbo lako na utafute ukurasa wake wa leseni za producer. Andika kila hatua ya leseni kwa mpangilio, jina la kampuni ya mitihani, na anwani ya tovuti ya muhtasari wa maudhui ya mtihani.",
          youCanNow: "kupata hatua rasmi za leseni za jimbo lako, kampuni ya mitihani na muhtasari wa maudhui ya mtihani.",
          quickCheck: [
            { objective: "O2", q: "Unapata wapi hatua halisi za leseni za jimbo lako?", options: ["Chapisho kwenye mitandao ya kijamii", "Tangazo la kozi ya kabla ya leseni", "Ukurasa rasmi wa idara ya bima ya jimbo lako", "Rafiki mwenye leseni ya jimbo jingine"], answer: 2, why: "Idara ya bima ya kila jimbo inaweka na kuchapisha kanuni zake za leseni." },
            { objective: "O2", q: "Hati ipi ya bure inakuambia mada zilizo kwenye mtihani wa jimbo lako?", options: ["Bili ya bima ya gari", "Ukurasa wa declarations wa mkataba", "Kipeperushi cha mwajiri", "Muhtasari wa maudhui ya mtihani wa kampuni ya mitihani"], answer: 3, why: "Muhtasari wa maudhui unaorodhesha kila mada ya mtihani na idadi ya maswali kutoka kwa kila moja." }
          ]
        },
        {
          title: "Maneno ya msingi na jinsi mkataba wa bima unavyofanya kazi",
          objectives: ["O3"],
          minutes: 6,
          goal: "Eleza maneno ya msingi ya bima na mawazo ya mkataba kwa maneno yako mwenyewe.",
          text: [
            "Bima inahamisha hatari kutoka kwa mtu kwenda kwa kampuni ya bima. Mwenye bima (insured) analipa ada ya bima (premium). Kwa malipo hayo, kampuni ya bima (insurer) inaahidi kulipia hasara fulani. Policy ni mkataba wa maandishi, na ukurasa wa declarations unaorodhesha nani na nini kimefunikwa, vikomo na ada ya bima.",
            "Mitihani inauliza mawazo machache makubwa. Maslahi yanayoweza kuwekewa bima (insurable interest): lazima uwe utapoteza pesa hasara ikitokea. Fidia (indemnity): bima inakurudisha ulipokuwa, si katika hali bora zaidi. Nia njema kabisa (utmost good faith): pande zote mbili lazima ziwe waaminifu, kwa hiyo uongo kwenye maombi (misrepresentation) unaweza kufuta kinga. Underwriting: kampuni ya bima inachunguza hatari na kuamua kama itaikubali na kwa bei gani.",
            "Policy ya bima ni mkataba, kwa hiyo inahitaji pendekezo na kukubali (offer and acceptance), malipo ya kubadilishana (consideration: ada na ahadi), pande zenye uwezo kisheria na lengo halali. Pia ni mkataba wa kukubali kama ulivyo (contract of adhesion): kampuni ya bima inauandika na mteja anaukubali kama ulivyoandikwa, kwa hiyo maneno yasiyo wazi kwa kawaida yanasomwa kwa faida ya mteja.",
            "Jifunze maneno haya kwa kadi za kujipima (flash cards). Mara nyingi mitihani inatoa hadithi fupi na kuuliza inaonyesha wazo lipi."
          ],
          words: [["Premium (ada ya bima)", "pesa ambazo mwenye bima analipa ili apate kinga."], ["Insurable interest", "kuwa na hasara halisi ya pesa tukio lililowekewa bima likitokea."], ["Indemnity (fidia)", "kulipa hasara ili urudi ulipokuwa, si katika hali bora zaidi."], ["Underwriting", "kuchunguza hatari ili kuamua kama kuiwekea bima na kwa bei gani."], ["Declarations page", "ukurasa wa policy unaoorodhesha nani amefunikwa, nini kimefunikwa, vikomo na ada ya bima."], ["Contract of adhesion", "mkataba unaoandikwa na upande mmoja na kukubaliwa kama ulivyo na upande mwingine."]],
          slides: [
            { title: "Bima inahamisha hatari", bullets: ["Mwenye bima analipa premium", "Kampuni ya bima inaahidi kulipia hasara zilizofunikwa", "Policy ndiyo mkataba"] },
            { title: "Mawazo makubwa kwenye mtihani", bullets: ["Insurable interest: utapoteza pesa", "Indemnity: kurudi ulipokuwa", "Utmost good faith: pande zote waaminifu", "Underwriting: kuamua kama, na kwa bei gani"] },
            { title: "Policy ni mkataba", bullets: ["Pendekezo na kukubali, consideration", "Pande zenye uwezo, lengo halali", "Adhesion: maneno yasiyo wazi yanampendelea mteja"] }
          ],
          tryIt: "Tengeneza kadi 10 za kujipima kwenye karatasi au simu: upande mmoja neno (premium, insurable interest, indemnity, underwriting, declarations page, consideration, adhesion, misrepresentation, insured, insurer), upande mwingine maana yako ya mstari mmoja. Jipime hadi upate 8 kati ya 10.",
          youCanNow: "kueleza maneno ya msingi ya bima na sehemu za mkataba wa bima kwa maneno rahisi.",
          quickCheck: [
            { objective: "O3", q: "Mwanamume anataka kununua bima ya moto kwa nyumba ya mtu asiyemjua. Wazo lipi linamzuia?", options: ["Indemnity", "Underwriting", "Consideration", "Insurable interest"], answer: 3, why: "Hangepoteza pesa yoyote nyumba ya mtu huyo ikiungua, kwa hiyo hana insurable interest." },
            { objective: "O3", q: "Baada ya wizi uliofunikwa, kampuni ya bima inalipa thamani ya TV iliyoibwa, si TV kubwa zaidi. Hili ni wazo lipi?", options: ["Indemnity", "Adhesion", "Appointment", "Liability"], answer: 0, why: "Indemnity inamrudisha mwenye bima alipokuwa, si katika hali bora zaidi." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Njia yako ya kupata leseni ya bima",
        questions: [
          { objective: "O1", q: "Utauza bima ya maisha ya muda maalum (term life) na bima ya mapato wakati wa ulemavu. Aina zipi za leseni zinafaa?", options: ["Mali na Dhima", "Maisha na Ajali na Afya", "Personal Lines peke yake", "Adjuster"], answer: 1, why: "Bima ya maisha inahitaji leseni ya Maisha, na mapato wakati wa ulemavu ni Ajali na Afya." },
          { objective: "O1", q: "Uteuzi (appointment) wa kampuni ya bima unafanya nini?", options: ["Unachukua nafasi ya mtihani wa jimbo", "Unatoa leseni ya securities", "Unakuidhinisha rasmi kuuza bidhaa za kampuni hiyo", "Unaweka ada ya leseni ya jimbo lako"], answer: 2, why: "Leseni inatoka kwa jimbo; kisha kila kampuni ya bima inakuteua kuiuzia." },
          { objective: "O2", q: "Nani anatoa leseni za mawakala wa bima nchini Marekani?", options: ["Idara ya bima ya kila jimbo", "Serikali kuu (federal)", "Kampuni ya bima unayoifanyia kazi", "Kampuni ya mitihani"], answer: 0, why: "Producers wa bima wanapewa leseni jimbo kwa jimbo." },
          { objective: "O2", q: "Uliwahi kutiwa hatiani kwa kosa kubwa la udanganyifu (fraud). Hatua ya kwanza ya uaminifu ni ipi?", options: ["Kuliacha nje ya maombi", "Kuacha kabisa kazi ya bima", "Kutumia jina la rafiki", "Kuuliza idara ya jimbo lako jinsi ya kuomba idhini ya maandishi ya msimamizi"], answer: 3, why: "Sheria ya serikali kuu inahitaji idhini ya maandishi kwa baadhi ya hatia, na idara ya jimbo inaeleza jinsi ya kuomba." },
          { objective: "O3", q: "Kwenye maombi, mnunuzi anaficha tatizo kubwa la afya. Amevunja kanuni ipi?", options: ["Indemnity", "Insurable interest", "Utmost good faith", "Adhesion"], answer: 2, why: "Pande zote lazima ziwe waaminifu; uongo muhimu unaweza kufuta kinga." }
        ]
      }
    },
    {
      name: "Sura 2: Maudhui ya mtihani na utayari wa mtihani",
      lessons: [
        {
          title: "Misingi ya bima ya maisha na afya na hesabu za madai ya afya",
          objectives: ["O3", "O4"],
          minutes: 6,
          goal: "Kokotoa nani analipa nini katika dai la mazoezi la afya lenye deductible na coinsurance.",
          text: [
            "Bima ya maisha: term life inafunika idadi fulani ya miaka na haina thamani ya fedha taslimu (cash value). Bima ya kudumu, kama whole life, inaweza kudumu maisha yote na inajenga cash value. Mnufaika (beneficiary) ni mtu anayepokea malipo ya kifo; mnufaika wa akiba (contingent beneficiary) anayapokea kama wa kwanza amekwisha kufa. Mmiliki wa policy (policyowner) anaidhibiti policy na anaweza kuwa mtu tofauti na mwenye bima.",
            "Bima ya afya ina maneno yake. Deductible ni kiasi unacholipa kila mwaka kabla mpango haujaanza kugawana gharama. Coinsurance ni asilimia unayogawana baada ya hapo, kama 80/20: mpango unalipa 80% na wewe unalipa 20%. Copay ni kiasi maalum cha dola kwa kila ziara. Kiwango cha juu cha malipo ya mfukoni (out-of-pocket maximum) ni kiasi kikubwa zaidi unacholipa kwa mwaka kwa huduma zilizofunikwa.",
            "Mazoezi tu, namba za kubuni: bili iliyofunikwa ya $3,000, deductible ya $1,000 ambayo bado haijalipwa, coinsurance ya 80/20. Unalipa $1,000 za kwanza. $2,000 zinazobaki zinagawanywa: mpango unalipa 80% ($1,600) na wewe unalipa 20% ($400). Unalipa $1,400 kwa jumla; mpango unalipa $1,600. Hakiki: $1,400 + $1,600 = $3,000."
          ],
          steps: ["Andika kiasi cha bili iliyofunikwa.", "Toa sehemu ya deductible ambayo bado inadaiwa; mwenye bima analipa sehemu hiyo.", "Gawanya kinachobaki kwa asilimia za coinsurance.", "Jumlisha deductible na coinsurance ya mwenye bima; simama kwenye out-of-pocket maximum.", "Hakiki kwamba sehemu mbili zinajumlika kuwa bili."],
          words: [["Beneficiary (mnufaika)", "mtu anayepokea pesa mwenye bima anapokufa."], ["Cash value", "akiba inayojengwa ndani ya policy ya kudumu ya bima ya maisha."], ["Deductible", "kiasi unacholipa kabla bima haijaanza kulipa."], ["Coinsurance", "asilimia ya gharama unayogawana na mpango baada ya deductible."], ["Out-of-pocket maximum", "kiasi kikubwa zaidi unacholipa katika mwaka wa mpango kwa huduma zilizofunikwa."]],
          slides: [
            { title: "Maneno ya bima ya maisha", bullets: ["Term: miaka maalum, haina cash value", "Whole life: maisha yote, inajenga cash value", "Beneficiary na contingent beneficiary"] },
            { title: "Maneno ya bima ya afya", bullets: ["Deductible: wewe unalipa kwanza", "Coinsurance: asilimia ya kugawana, kama 80/20", "Copay: kiasi maalum kwa kila ziara", "Out-of-pocket maximum: kikomo cha mwaka"] },
            { title: "Dai la mazoezi (la kubuni)", bullets: ["Bili $3,000, deductible $1,000, 80/20", "Wewe: $1,000 + 20% ya $2,000 = $1,400", "Mpango: 80% ya $2,000 = $1,600"] }
          ],
          tryIt: "Mazoezi tu: kokotoa dai hili kwenye karatasi. Bili iliyofunikwa ya $5,000, deductible ya $500 ambayo bado haijalipwa, coinsurance ya 80/20. Mwenye bima analipa kiasi gani, na mpango unalipa kiasi gani? (Jibu: mwenye bima $500 + $900 = $1,400; mpango $3,600.)",
          youCanNow: "kueleza maneno makuu ya bima ya maisha na afya na kukokotoa dai la afya lenye deductible na coinsurance.",
          quickCheck: [
            { objective: "O4", q: "Mazoezi tu: bili iliyofunikwa ya $2,000, deductible ya $500 ambayo bado haijalipwa, coinsurance ya 80/20. Mwenye bima analipa kiasi gani?", options: ["$400", "$500", "$800", "$1,500"], answer: 2, why: "Deductible ya $500 pamoja na 20% ya $1,500 zinazobaki ($300) ni $800." },
            { objective: "O3", q: "Policy ipi ya bima ya maisha inajenga cash value?", options: ["Whole life", "Term ya miaka kumi", "Term ya miaka ishirini", "Bima ya ajali za safari"], answer: 0, why: "Policy za kudumu kama whole life zinajenga cash value; policy za term hazijengi." }
          ]
        },
        {
          title: "Misingi ya bima ya mali na dhima na hesabu za madai ya mali",
          objectives: ["O1", "O4"],
          minutes: 6,
          goal: "Kokotoa kiasi ambacho policy ya mali au ya dhima ya gari inalipa katika dai la mazoezi.",
          text: [
            "Policy za mali zinalipia uharibifu wa vitu unavyomiliki. Replacement cost inalipa ili kubadilisha kitu kwa kipya cha aina hiyo hiyo. Actual cash value inalipa replacement cost ukitoa uchakavu (depreciation: kuchakaa na umri). Mazoezi tu: sofa linagharimu $1,200 likiwa jipya na lina uchakavu wa $500, kwa hiyo actual cash value yake ni $700. Deductible inatolewa kwenye malipo.",
            "Kinga ya dhima (casualty, liability) inawalipa wengine unapowajibika kisheria kwa kuwadhuru. Vikomo vya dhima ya gari mara nyingi huandikwa kama namba tatu, kama 25/50/25: hadi $25,000 kwa majeraha ya mtu mmoja, hadi $50,000 kwa majeraha yote katika ajali moja, na hadi $25,000 kwa uharibifu wa mali. Jimbo lako linaweka viwango vya chini; vikague.",
            "Mazoezi tu: dereva mwenye vikomo vya 25/50/25 anamjeruhi mtu mmoja, ambaye bili zake ni $40,000. Policy inalipa $25,000, kikomo chake kwa kila mtu. Huenda dereva akalazimika kulipa $15,000 zilizobaki mwenyewe. Ndiyo maana mawakala wanaeleza vikomo kwa uangalifu."
          ],
          steps: ["Tafuta kiasi cha hasara na aina ya kinga.", "Kwa actual cash value, toa uchakavu kutoka replacement cost.", "Toa deductible.", "Linganisha na kikomo cha policy; kampuni ya bima hailipi kamwe zaidi ya kikomo.", "Chochote kinachozidi kikomo ni cha mwenye bima kulipa."],
          words: [["Replacement cost", "gharama ya kubadilisha kitu kwa kipya cha aina na ubora uleule."], ["Actual cash value", "replacement cost ukitoa uchakavu."], ["Depreciation (uchakavu)", "kupungua kwa thamani kutokana na umri na kutumika."], ["Policy limit (kikomo cha policy)", "kiasi kikubwa zaidi ambacho kampuni ya bima italipa kwa hasara iliyofunikwa."], ["Split limits", "vikomo vya dhima ya gari vilivyoandikwa kama namba tatu, kama 25/50/25."]],
          slides: [
            { title: "Mali: njia mbili za kulipa", bullets: ["Replacement cost: kitu kipya cha aina hiyo hiyo", "Actual cash value: replacement cost ukitoa uchakavu", "Deductible inatolewa kwenye malipo"] },
            { title: "Dhima: kuwajibika kwa wengine", bullets: ["Inalipa unapowadhuru wengine kisheria", "Vikomo vya gari kama 25/50/25", "Jimbo lako linaweka viwango vya chini"] },
            { title: "Dai la mazoezi (la kubuni)", bullets: ["25/50/25, mtu mmoja ameumia, bili $40,000", "Policy inalipa kikomo cha $25,000 kwa kila mtu", "Huenda dereva akadaiwa $15,000 zilizobaki"] }
          ],
          tryIt: "Mazoezi tu: moto jikoni unasababisha uharibifu uliofunikwa wa $18,000. Policy ya nyumba inalipa replacement cost, deductible ni $1,000, na kikomo cha jengo ni $250,000. Andika kiasi ambacho kampuni ya bima inalipa na kiasi ambacho mwenye nyumba analipa. (Jibu: kampuni ya bima $17,000; mwenye nyumba $1,000.)",
          youCanNow: "kutofautisha kinga ya mali na ya dhima na kukokotoa madai ya mazoezi yenye uchakavu, deductible na vikomo.",
          quickCheck: [
            { objective: "O4", q: "Mazoezi tu: TV inagharimu $900 ikiwa mpya na ina uchakavu wa $300. Actual cash value yake ni kiasi gani?", options: ["$300", "$900", "$1,200", "$600"], answer: 3, why: "Actual cash value ni replacement cost ukitoa uchakavu: $900 - $300 = $600." },
            { objective: "O1", q: "Mteja anamjeruhi kwa bahati mbaya dereva wa kuleta mizigo nyumbani kwake na anashtakiwa. Kinga ipi inahusika?", options: ["Maisha", "Dhima (liability)", "Mapato wakati wa ulemavu", "Uharibifu wa mali ya nyumba"], answer: 1, why: "Kinga ya dhima inawalipa wengine mwenye bima anapowajibika kisheria kwa kuwadhuru." }
          ]
        },
        {
          title: "Kanuni za maadili na mpango wako wa kusoma na mtihani",
          objectives: ["O5", "O6"],
          minutes: 6,
          goal: "Tambua mbinu za mauzo zisizo za kimaadili na uandike mpango wa kusoma na kufanya mtihani wenye tarehe.",
          text: [
            "Majimbo yana sheria za mazoea yasiyo ya haki ya biashara (unfair trade practices), na kila mtihani unaziuliza. Misrepresentation ni kudanganya au kuficha kile policy inachofanya. Twisting ni kumshawishi mteja kubadilisha policy kwa uongo au ulinganisho unaopotosha, kwa hasara yake. Churning ni kubadilisha policy tena na tena hasa ili kupata kamisheni mpya. Rebating ni kutoa sehemu ya kamisheni yako au zawadi ili kupata mauzo; ni kinyume cha sheria katika majimbo mengi, kwa hiyo kagua kanuni ya jimbo lako. Ada za bima unazokusanya ni za mteja na kampuni ya bima: wakala anazishika kwa uaminifu (wajibu wa fiduciary) na hapaswi kuzichanganya na pesa zake binafsi (commingling).",
            "Hatua ya uaminifu ni rahisi: sema ukweli kuhusu kinga, weka mahitaji ya mteja mbele, linganisha policy kwa haki, andika mambo, na weka pesa za ada ya bima kando. Kama huna uhakika, muulize meneja wako au idara ya jimbo.",
            "Sasa panga. Tumia muhtasari wa maudhui wa jimbo lako kuorodhesha kila mada na idadi ya maswali yake. Zipe mada nzito siku nyingi zaidi za kusoma. Weka tarehe unayolenga ya mtihani, tarehe mbili au zaidi za mitihani ya mazoezi na lengo la alama. Maliza kozi yoyote ya kabla ya leseni inayohitajika kabla ya kujiandikisha kwa mtihani. Soma kila swali la mtihani mara mbili na uwe makini na maneno kama EXCEPT (isipokuwa) na NOT (si).",
            "Kazi ya mwisho: andika Mpango wako wa Kusoma na Kufanya Mtihani wa ukurasa mmoja wenye aina ya leseni yako, hatua rasmi za jimbo lako na anwani za tovuti, mada za muhtasari na uzito wake, ratiba ya kila wiki yenye tarehe, tarehe za mitihani ya mazoezi, madai matatu ya mazoezi na kanuni tatu za maadili."
          ],
          steps: ["Orodhesha hatua rasmi za jimbo lako kwa mpangilio pamoja na anwani zake za tovuti.", "Nakili kila mada ya muhtasari na idadi ya maswali yake.", "Zipe siku nyingi zaidi za kusoma mada zenye maswali mengi zaidi.", "Chagua tarehe unayolenga ya mtihani na angalau tarehe mbili za mitihani ya mazoezi pamoja na lengo la alama.", "Ongeza madai matatu ya mazoezi na kanuni tatu za maadili kwa maneno yako mwenyewe."],
          words: [["Misrepresentation", "kudanganya au kuficha kile policy inachofanya au inachogharimu."], ["Twisting", "kutumia uongo au ulinganisho unaopotosha ili mteja abadilishe policy."], ["Churning", "kubadilisha policy tena na tena hasa ili kupata kamisheni."], ["Rebating", "kurudisha sehemu ya kamisheni au kutoa zawadi ili kupata mauzo; ni kinyume cha sheria katika majimbo mengi."], ["Fiduciary", "mtu anayeaminiwa kushughulikia pesa za mtu mwingine kwa uaminifu."], ["Commingling", "kuchanganya pesa za ada ya bima za mteja na pesa zako mwenyewe."]],
          slides: [
            { title: "Mazoea yanayoulizwa kwenye mtihani", bullets: ["Misrepresentation: kudanganya kuhusu policy", "Twisting: kumpotosha mteja ili aibadilishe", "Churning: kubadilisha ili kupata kamisheni", "Rebating: kinyume cha sheria katika majimbo mengi, kagua lako"] },
            { title: "Pesa za ada ya bima", bullets: ["Unazishika kwa uaminifu: wajibu wa fiduciary", "Usizichanganye kamwe na pesa zako mwenyewe"] },
            { title: "Jenga mpango wako", bullets: ["Hatua na anwani za tovuti kutoka jimbo lako", "Mada za muhtasari na uzito wake", "Ratiba ya kila wiki yenye tarehe na mitihani ya mazoezi"] },
            { title: "Siku ya mtihani", bullets: ["Soma kila swali mara mbili", "Kuwa makini na EXCEPT na NOT", "Leta kitambulisho ambacho handbook inakiomba"] }
          ],
          sources: [SRC.naicUtpa, SRC.naicDepts],
          tryIt: "Kazi ya mwisho: andika Mpango wako wa Kusoma na Kufanya Mtihani wa Leseni ya Bima kwenye ukurasa mmoja, ukitumia hatua rasmi za jimbo lako na muhtasari wa maudhui, pamoja na tarehe halisi za kila wiki ya kusoma, mitihani miwili ya mazoezi na tarehe unayolenga ya mtihani.",
          youCanNow: "kutambua mbinu za mauzo zisizo za kimaadili, kuchagua hatua ya uaminifu, na kufuata mpango wa kusoma na kufanya mtihani wa leseni yako wenye tarehe.",
          quickCheck: [
            { objective: "O5", q: "Wakala anamwambia mama mzee kwamba policy yake ya zamani \"haina thamani\" ili anunue mpya inayomlipa wakala zaidi. Hii ni nini?", options: ["Underwriting", "Indemnity", "Twisting", "Appointment"], answer: 2, why: "Kutumia madai ya kupotosha ili mteja abadilishe policy ni twisting." },
            { objective: "O6", q: "Muhtasari wa jimbo lako unaipa mada moja maswali mengi zaidi kuliko nyingine. Unafanya nini katika mpango wako?", options: ["Kuipa mada hiyo siku nyingi zaidi za kusoma", "Kuiruka kwa sababu ni ndefu", "Kusoma mada ndogo zaidi tu", "Kupuuza muhtasari"], answer: 0, why: "Mada zenye maswali mengi zaidi zinastahili muda zaidi wa kusoma." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Maudhui ya mtihani na utayari wa mtihani",
        questions: [
          { objective: "O4", q: "Mazoezi tu: bili iliyofunikwa ya $4,000, deductible imeshalipwa, coinsurance ya 80/20. Mpango unalipa kiasi gani?", options: ["$800", "$4,000", "$3,000", "$3,200"], answer: 3, why: "Deductible ikiwa imeshalipwa, mpango unalipa 80% ya $4,000, yaani $3,200." },
          { objective: "O4", q: "Mazoezi tu: uharibifu uliofunikwa wa dhoruba wa $12,000, replacement cost, deductible ya $2,000. Kampuni ya bima inalipa kiasi gani?", options: ["$10,000", "$12,000", "$14,000", "$2,000"], answer: 0, why: "Deductible inatolewa kwenye hasara: $12,000 - $2,000 = $10,000." },
          { objective: "O3", q: "Nani anapokea malipo ya kifo kama mnufaika wa kwanza amekwisha kufa?", options: ["Wakala", "Contingent beneficiary (mnufaika wa akiba)", "Kampuni ya bima", "Jimbo"], answer: 1, why: "Contingent beneficiary ndiye anayefuata mnufaika wa kwanza akiwa amekwisha kufa." },
          { objective: "O5", q: "Mteja anakulipa ada ya bima kwa pesa taslimu. Unazifanyia nini?", options: ["Kuziweka kwenye akaunti yako binafsi kwa sasa", "Kuzitumia na kuzirudisha baadaye", "Kuzishughulikia kama pesa za amana, zikiwa kando kama wakala wako na jimbo wanavyotaka", "Kumrudishia mteja sehemu kama shukrani"], answer: 2, why: "Ada za bima zinashikwa kwa uaminifu; kuzichanganya na pesa zako ni commingling." },
          { objective: "O6", q: "Nini kinafaa kuwemo katika mpango mzuri wa kusoma na kufanya mtihani?", options: ["Tarehe ya mtihani peke yake", "Hatua rasmi, mada za muhtasari, wiki za kusoma zenye tarehe na mitihani ya mazoezi", "Orodha ya kamisheni za wakala", "Majibu yaliyonakiliwa kutoka tovuti"], answer: 1, why: "Mpango kamili unajumuisha hatua rasmi, mada za muhtasari na tarehe halisi za kusoma na mazoezi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Maandalizi ya Mtihani wa Leseni ya Wakala wa Bima",
    questions: [
      { objective: "O1", q: "Neno la kisheria la wakala wa bima mwenye leseni anayeuza bima ni lipi?", options: ["Producer", "Underwriter", "Adjuster", "Actuary"], answer: 0, why: "Sheria za majimbo zinawaita mawakala na madalali wenye leseni producers." },
      { objective: "O1", q: "Benki inakuajiri uuze bima ya maisha na bima ya ulemavu wa muda mrefu. Unahitaji aina zipi za leseni?", options: ["Mali na Dhima", "Personal Lines", "Maisha na Ajali na Afya", "Adjuster"], answer: 2, why: "Bima ya maisha inahitaji Maisha, na bima ya ulemavu ni Ajali na Afya." },
      { objective: "O1", q: "Kazi ipi kwa kawaida inahitaji leseni tofauti na ya wakala?", options: ["Kuuza bima ya mpangaji", "Kuuza term life", "Kuuza bima ya gari", "Kuchunguza na kumaliza madai kama adjuster"], answer: 3, why: "Adjusters wanachunguza na kumaliza madai na kwa kawaida wanahitaji leseni yao wenyewe." },
      { objective: "O2", q: "Tovuti ipi inakusaidia kupata idara ya bima ya kila jimbo?", options: ["Ukurasa wa NAIC wa idara za bima za majimbo", "Blogu ya muuzaji wa kozi", "Kikundi cha mitandao ya kijamii", "Jukwaa la mtandaoni"], answer: 0, why: "NAIC, chama cha wasimamizi wa majimbo, kina viungo vya idara ya kila jimbo." },
      { objective: "O2", q: "Huko Texas, tulipokagua, ungeweza kuomba leseni ya general lines lini?", options: ["Kabla ya kufanya mtihani wowote", "Baada ya kufaulu mtihani wa jimbo", "Baada ya miaka mitano ya kazi tu", "Kupitia kampuni ya bima tu"], answer: 1, why: "TDI ilisema ufaulu mtihani kwanza kisha uombe kupitia Sircon au NIPR." },
      { objective: "O2", q: "Rafiki yako anasema kozi ya saa 20 inahitajika kila mahali. Unafanya nini?", options: ["Kuamini", "Kulipia kozi ndefu zaidi unayoweza kupata", "Kukagua ukurasa wa idara ya jimbo lako mwenyewe", "Kuruka kozi yoyote"], answer: 2, why: "Kanuni za kabla ya leseni zinatofautiana kwa kila jimbo, kwa hiyo kagua ukurasa rasmi." },
      { objective: "O3", q: "Premium ni nini?", options: ["Kiasi ambacho kampuni ya bima inalipa kwa dai", "Pesa ambazo mwenye bima analipa ili apate kinga", "Leseni ya wakala", "Kikomo cha policy"], answer: 1, why: "Premium ni kile mwenye bima analipa ili kununua kinga." },
      { objective: "O3", q: "Ukurasa upi wa policy unaorodhesha nani amefunikwa, vikomo na premium?", options: ["Barua ya utangulizi", "Fomu ya dai", "Maombi", "Ukurasa wa declarations"], answer: 3, why: "Ukurasa wa declarations unafupisha nani na nini kimefunikwa, vikomo na premium." },
      { objective: "O3", q: "Kwa nini maneno yasiyo wazi katika policy kwa kawaida yanasomwa kwa faida ya mteja?", options: ["Kwa sababu policy ni contract of adhesion iliyoandikwa na kampuni ya bima", "Kwa sababu wakala aliiandika", "Kwa sababu mteja yuko sahihi kila wakati", "Kwa sababu ya indemnity"], answer: 0, why: "Kampuni ya bima inaandika mkataba na mteja anaukubali kama ulivyo, kwa hiyo maneno yasiyo wazi yanampendelea mteja." },
      { objective: "O3", q: "Policy ipi ya maisha inafunika idadi fulani ya miaka na haina cash value?", options: ["Whole life", "Universal life", "Term life", "Bima ya maisha ya kudumu"], answer: 2, why: "Term life inafunika kipindi maalum na haijengi cash value." },
      { objective: "O4", q: "Mazoezi tu: bili iliyofunikwa ya $6,000, deductible ya $1,000 ambayo bado haijalipwa, coinsurance ya 80/20. Mwenye bima analipa kiasi gani?", options: ["$1,200", "$2,000", "$1,000", "$5,000"], answer: 1, why: "Deductible ya $1,000 pamoja na 20% ya $5,000 zinazobaki ($1,000) ni $2,000." },
      { objective: "O4", q: "Mazoezi tu: dereva mwenye vikomo vya 25/50/25 anamjeruhi mtu mmoja ambaye bili zake ni $30,000. Policy inalipa kiasi gani kwa mtu huyo?", options: ["$30,000", "$50,000", "$5,000", "$25,000"], answer: 3, why: "Kikomo cha majeraha kwa kila mtu ni $25,000; huenda dereva akadaiwa $5,000 zilizobaki." },
      { objective: "O4", q: "Mazoezi tu: kompyuta mpakato (laptop) inagharimu $1,000 ikiwa mpya na ina uchakavu wa $400; deductible ni $100. Policy ya actual cash value inalipa kiasi gani?", options: ["$500", "$600", "$900", "$1,000"], answer: 0, why: "Actual cash value ni $1,000 - $400 = $600, ukitoa deductible ya $100, ni $500." },
      { objective: "O4", q: "Kiasi kipi kinaweka kikomo cha kile mtu analipa kwa huduma za afya zilizofunikwa kwa mwaka?", options: ["Copay", "Premium", "Out-of-pocket maximum", "Deductible"], answer: 2, why: "Out-of-pocket maximum ni kiasi kikubwa zaidi ambacho mwenye bima analipa katika mwaka wa mpango kwa huduma zilizofunikwa." },
      { objective: "O5", q: "Wakala anampa mteja kadi ya zawadi ya $100 ili anunue policy. Hii inaitwaje?", options: ["Twisting", "Rebating", "Underwriting", "Indemnity"], answer: 1, why: "Kutoa kitu chenye thamani ili kupata mauzo ni rebating, ambayo ni kinyume cha sheria katika majimbo mengi." },
      { objective: "O5", q: "Wakala anabadilisha policy ya mteja kila mwaka hasa ili kupata kamisheni mpya. Hii ni nini?", options: ["Churning", "Coinsurance", "Appointment", "Utmost good faith"], answer: 0, why: "Kubadilisha mara kwa mara hasa kwa ajili ya kamisheni ni churning." },
      { objective: "O5", q: "Mteja anauliza kama policy ya bei nafuu inafunika uharibifu wa mafuriko na huna uhakika. Unafanya nini?", options: ["Kusema ndiyo ili kumaliza mauzo", "Kubadilisha mada", "Kusema mafuriko yanafunikwa kila wakati", "Kukagua maneno ya policy au kuuliza kampuni kabla ya kujibu"], answer: 3, why: "Kubahatisha kuhusu kinga kunaleta hatari ya misrepresentation; kagua kwanza na useme ukweli." },
      { objective: "O6", q: "Hatua bora ya kwanza unapojenga mpango wako wa kusoma kwa mtihani ni ipi?", options: ["Kujiandikisha kwa mtihani wa kesho", "Kununua kozi ghali zaidi", "Kupata hatua rasmi za jimbo lako na muhtasari wa maudhui ya mtihani", "Kukariri maswali ya mazoezi ya kubahatisha"], answer: 2, why: "Hatua rasmi na muhtasari vinaonyesha cha kufanya na cha kusoma." },
      { objective: "O6", q: "Alama yako ya mtihani wa kwanza wa mazoezi iko chini ya lengo lako. Unabadilisha nini katika mpango wako?", options: ["Kuongeza siku za kusoma kwa mada zako dhaifu zaidi za muhtasari na kuweka mtihani mwingine wa mazoezi", "Kufuta mpango", "Kufanya mtihani halisi mara moja", "Kusoma mada unazozijua tayari tu"], answer: 0, why: "Mitihani ya mazoezi inaonyesha mada dhaifu; ongeza muda hapo na ujipime tena kabla ya mtihani halisi." },
      { objective: "O6", q: "Kwenye mtihani, swali linauliza ni kitu kipi kimefunikwa \"EXCEPT\" (isipokuwa). Ufanye nini?", options: ["Kuchagua kauli ya kwanza iliyo kweli", "Kuliruka", "Kubahatisha haraka", "Kulisoma mara mbili na kuchagua kitu ambacho HAKIJAFUNIKWA"], answer: 3, why: "EXCEPT inauliza chaguo moja lisilofaa; kusoma mara mbili kunazuia kosa la kutokuwa makini." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi amepiga hatua kiasi gani
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [1, 3, 6, 8, 10, 12, 14, 16, 17] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Aina sahihi ya leseni", objective: "O1", notYet: "Hakuna aina iliyotajwa, au aina isiyofaa kazi.", meets: "Anataja aina ya leseni inayofaa kazi na kusema kwa nini.", exceeds: "Pia anataja aina ya pili au leseni ambayo mwanafunzi anaweza kuhitaji baadaye na kwa nini." },
      { name: "Hatua rasmi", objective: "O2", notYet: "Hatua zinakosekana au zinatoka kwenye matangazo au kwa marafiki.", meets: "Kila hatua kutoka ukurasa rasmi wa jimbo, kwa mpangilio, na anwani za tovuti.", exceeds: "Anaongeza tarehe ya kukagua, handbook ya kampuni ya mitihani na hatua zozote za ukaguzi wa historia." },
      { name: "Mada za muhtasari na maneno", objective: "O3", notYet: "Hakuna mada za muhtasari, au maneno ya msingi yameelezwa vibaya.", meets: "Anaorodhesha kila mada ya muhtasari na uzito wake na anaeleza maneno muhimu kwa usahihi.", exceeds: "Anaonyesha mada dhaifu zaidi za mwanafunzi na anaongeza kadi za kujipima kwa ajili yake." },
      { name: "Madai ya mazoezi", objective: "O4", notYet: "Madai chini ya matatu, au majibu si sahihi.", meets: "Madai matatu ya mazoezi yamekokotolewa sawasawa, yakionyesha kila hatua.", exceeds: "Madai yanahusu deductible, coinsurance na kikomo cha policy, kila moja na uhakiki wa hesabu." },
      { name: "Kanuni za maadili", objective: "O5", notYet: "Kanuni zinakosekana au si sahihi.", meets: "Kanuni tatu za maadili zimeelezwa kwa usahihi kwa maneno ya mwanafunzi mwenyewe.", exceeds: "Kila kanuni ina mfano mfupi wa hatua ya uaminifu." },
      { name: "Mpango wenye tarehe", objective: "O6", notYet: "Hakuna tarehe, au hakuna mitihani ya mazoezi.", meets: "Ratiba ya kila wiki yenye tarehe, tarehe inayolengwa ya mtihani na mitihani miwili ya mazoezi yenye lengo la alama.", exceeds: "Siku nyingi zaidi za kusoma zinaenda kwa mada nzito zaidi za muhtasari, pamoja na tarehe ya akiba ya mtihani." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaojiandikisha kwa mtihani wa leseni wa jimbo lao ndani ya siku 60 (utafiti wa kufuatilia)",
      "Wanafunzi wanaoripoti kufaulu mtihani wa jimbo na kupata leseni (utafiti wa kufuatilia)",
      "Wanafunzi wanaoripoti kupata ofa ya kazi au uteuzi kama wakala wa bima, au kufungua wakala wao wenyewe"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye intaneti ili kufungua kurasa rasmi za jimbo",
      "Karatasi, kalamu na kikokotoo rahisi",
      "Muhtasari wa maudhui ya mtihani na candidate handbook ya jimbo la mwanafunzi (bure kutoka kampuni ya mitihani)",
      "Kama dakika 60 hadi 75 kwa jumla, katika vipindi vifupi, pamoja na muda wa mpango wa mwisho"
    ],
    facilitatorNotes: [
      "Wapange wanafunzi kwa jimbo kama inawezekana, na mfungue ukurasa wa leseni wa kila jimbo pamoja; usitoe kanuni za jimbo moja kana kwamba zinahusu kila mahali.",
      "Eleza wazi kwamba kozi inawaandaa wanafunzi na haichukui nafasi ya kozi ya kabla ya leseni inayohitajika na jimbo wala haitoi leseni.",
      "Kwa wanafunzi wenye rekodi ya uhalifu, eleza kanuni ya idhini ya maandishi kwa uaminifu na uwaelekeze kwa idara ya jimbo lao; usibahatishe kuhusu kesi yao.",
      "Hesabu zote za madai zinatumia namba za kubuni; usitoe ushauri kuhusu policy ipi mtu anunue.",
      "Pima mpango wa mwisho kwa rubriki, na hakikisha kila hatua ina anwani rasmi ya tovuti."
    ]
  }
};
