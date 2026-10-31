"use strict";

// Koach Learn course (Swahili translation of shared/first-aid-cpr-awareness.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.
// Kozi ya UFAHAMU tu: haitoi cheti. Ujuzi wa mikono wa CPR, AED na huduma ya kwanza unajifunzwa na kuthibitishwa ana kwa ana na mkufunzi aliyehitimu. Hakuna vipimo vya dawa popote.

const MEDLINE_CPR = { name: "MedlinePlus (Maktaba ya Kitaifa ya Tiba ya Marekani): CPR - mtu mzima na mtoto aliyefikia balehe", url: "https://medlineplus.gov/ency/article/000013.htm" };
const MEDLINE_CHOKING = { name: "MedlinePlus: Kukabwa na kitu kooni - mtu mzima au mtoto zaidi ya mwaka 1", url: "https://medlineplus.gov/ency/article/000049.htm" };
const MEDLINE_BLEEDING = { name: "MedlinePlus: Kutokwa na damu", url: "https://medlineplus.gov/ency/article/000045.htm" };
const MEDLINE_HEART = { name: "MedlinePlus: Huduma ya kwanza kwa shambulio la moyo", url: "https://medlineplus.gov/ency/article/000063.htm" };
const CDC_STROKE = { name: "CDC: Dalili za kiharusi", url: "https://www.cdc.gov/stroke/signs-symptoms/index.html" };
const AHA_CPR = { name: "American Heart Association: Kozi za CPR na huduma ya kwanza", url: "https://cpr.heart.org/" };
const REDCROSS = { name: "American Red Cross: Madarasa ya huduma ya kwanza, CPR na AED", url: "https://www.redcross.org/take-a-class" };
const OSHA_FIRSTAID = { name: "OSHA: Huduma ya matibabu na huduma ya kwanza", url: "https://www.osha.gov/medical-first-aid" };

module.exports = {
  id: "first-aid-cpr-awareness-sw",
  lang: "sw",
  translationOf: "first-aid-cpr-awareness",
  category: "Workforce Development",
  name: "Ufahamu wa Huduma ya Kwanza na CPR",
  skills: "Kukagua eneo na kupiga 911, Hatua za CPR ya Mikono Tu, Kutumia AED, Kumsaidia mtu aliyekabwa, Kuzuia damu nyingi, Kutambua shambulio la moyo na kiharusi",
  outcome: "kutenda kwa utulivu katika dakika za kwanza za dharura: kuhakikisha ni salama, kupiga 911 (au namba ya dharura ya nchi yako), kufuata hatua za CPR ya Mikono Tu na za AED, kusaidia mtu aliyekabwa na mtu anayetoka damu nyingi, kutambua shambulio la moyo au kiharusi, na kujiandikisha katika darasa la ana kwa ana la CPR na huduma ya kwanza linalotoa cheti halisi.",
  about: [
    "Kozi hii ni kwa yeyote anayetaka kuwa tayari kusaidia: vijana wanaotafuta kazi ya kwanza, wazazi na babu na bibi, wafanyakazi wa malezi ya watoto, huduma ya chakula, maduka, ulinzi na kazi za ufundi, na wajitolea katika mashirika yasiyo ya faida na makanisa. Kazi nyingi kati ya hizi zinaomba cheti cha CPR na huduma ya kwanza.",
    "Utajifunza mpangilio wa kutenda katika dharura, hatua za CPR ya Mikono Tu, jinsi AED inavyokuongoza kwa sauti hadi kutoa mshtuko, na la kufanya kwa mtu aliyekabwa, anayetoka damu nyingi, mwenye shambulio la moyo au kiharusi. Hatua zinafuata mwongozo wa jumla wa American Red Cross, American Heart Association na Maktaba ya Kitaifa ya Tiba ya Marekani.",
    "Hii ni kozi ya ufahamu. Inakuandaa; haikupi cheti cha CPR wala cha huduma ya kwanza. Ujuzi halisi wa mikono, kama kubonyeza kifua kwa kina sahihi, unajifunzwa na kupimwa ana kwa ana na mkufunzi aliyehitimu, kwa kutumia mwanasesere wa mazoezi. Somo la mwisho linakuonyesha jinsi ya kupata darasa hilo.",
    "Kila somo linachukua kama dakika tano. Soma somo, tazama slaidi, kisha fanya kazi ya \"Jaribu sasa\" kwa karatasi au mto. Kuna swali fupi baada ya kila somo, jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Tengeneza Mpango wako wa Utayari wa Huduma ya Kwanza na CPR kwenye ukurasa mmoja: (1) namba yako ya dharura na jinsi ya kutaja anwani yako kwa uwazi; (2) mahali AED na sanduku la huduma ya kwanza vilivyo karibu nyumbani, kazini, shuleni au mahali pako pa ibada; (3) hatua za dharura, zilizoandikwa kwa kumbukumbu kwa mpangilio sahihi (kagua, piga simu, CPR na AED, kukabwa, damu, B.E. F.A.S.T.); na (4) darasa la ana kwa ana la CPR, AED na huduma ya kwanza unalochagua kutoka American Red Cross au American Heart Association, pamoja na jina lake, anayetoa cheti, mahali lilipo, na tarehe utakayolihudhuria.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wanafunzi wa aina mbalimbali: vijana wanaotafuta kazi ya kwanza, watu wazima walio au wanaoingia katika kazi zinazoomba CPR na huduma ya kwanza (malezi ya watoto, huduma ya chakula, maduka, ulinzi, ufundi, huduma ya nyumbani), wazee wanaomtunza mwenzi au wajukuu, na wajitolea wa mashirika yasiyo ya faida na makanisa. Baadhi wanazungumza lugha hii kama lugha ya pili.",
    startingPoint: "Wengi wanajua kupiga 911 lakini wanaganda au hawajui la kufanya baadaye. Wengi wameona CPR kwenye TV lakini hawajawahi kuifanyia mazoezi. Wachache wanajua AED iliyo karibu iko wapi au inavyofanya kazi. Baadhi wanadhani wanaweza kupata matatizo kwa kusaidia.",
    gap: "Moyo unaposimama, mtu anapokabwa au anapotoka damu nyingi, dakika chache za kwanza kabla msaada haujafika ndizo muhimu zaidi. Wanafunzi wanahitaji mpangilio wazi wa hatua, ujasiri wa kuanza, na mpango wa kupata cheti ana kwa ana, kwa sababu kazi nyingi zinahitaji cheti halali kutoka kwa mtoaji anayetambuliwa.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi (kama darasa la 6)",
      "Vifaa: simu au kompyuta ya maktaba; mazoezi yanatumia karatasi, mto au taulo iliyokunjwa",
      "Muda: masomo ya dakika 4 hadi 6",
      "Usalama: ufahamu tu; hakuna mazoezi kwa mtu halisi; ujuzi wa mikono na cheti vinapatikana ana kwa ana na mkufunzi aliyehitimu",
      "Hakuna vipimo vya dawa wala ushauri wa kitabibu; fuata mpokeaji simu wa 911 na wahudumu wa dharura",
      "Namba za dharura zinatofautiana kwa nchi: 911 nchini Marekani; wanafunzi wa nchi nyingine wanatumia namba ya nchi yao"
    ],
    prerequisites: "Hakuna. Wanafunzi wanaotaka zaidi kuhusu kusoma taarifa za afya wanaweza pia kusoma kozi \"Elimu ya Afya: Kuelewa Huduma Yako ya Afya\"."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa maelezo ya tukio la dharura kwa maneno", action: "kukagua hatari katika eneo, kukagua kama mtu anaitika, na kupiga 911 au namba ya dharura ya nchi yako", standard: "kwa mpangilio sahihi, ukitaja anwani na kilichotokea katika sentensi moja iliyo wazi" },
    { id: "O2", condition: "Ukipewa mtu mzima aliyeanguka ghafla na hapumui kawaida", action: "kuorodhesha hatua za CPR ya Mikono Tu na za kutumia AED", standard: "kwa mpangilio sahihi, pamoja na mahali pa mikono, kasi ya mara 100 hadi 120 kwa dakika na kina cha kama inchi 2" },
    { id: "O3", condition: "Ukipewa maelezo ya mtu mzima ambaye huenda amekabwa", action: "kutambua dalili za kukabwa na kueleza huduma ya kwanza", standard: "ukitofautisha mtu anayeweza kukohoa na kuongea na yule asiyeweza" },
    { id: "O4", condition: "Ukipewa jeraha linalotoa damu nyingi", action: "kueleza jinsi ya kuzuia damu kwa kubonyeza kwa nguvu moja kwa moja juu ya jeraha", standard: "ukitaja glavu au kizuizi, kubonyeza bila kuacha, na kuongeza tabaka badala ya kuinua kitambaa" },
    { id: "O5", condition: "Ukipewa orodha ya dalili", action: "kutambua dalili za hatari za shambulio la moyo na za kiharusi kwa kutumia B.E. F.A.S.T.", standard: "ukipata angalau 4 kati ya 5 sahihi na kupiga 911 badala ya kumpeleka mtu kwa gari" },
    { id: "O6", condition: "Ukitumia kitafuta madarasa cha American Red Cross au American Heart Association", action: "kuchagua darasa la ana kwa ana la CPR, AED na huduma ya kwanza na kuandika mpango wa mafunzo wenye tarehe", standard: "ukitaja kozi, anayetoa cheti na kama kazi yako inakihitaji" }
  ],
  chapters: [
    {
      name: "Sura 1: Tenda haraka na uufanye moyo uendelee",
      lessons: [
        {
          title: "Kagua, piga simu, saidia: dakika ya kwanza",
          objectives: ["O1"],
          minutes: 5,
          goal: "Kagua eneo na mtu, kisha piga 911 kwa ujumbe ulio wazi.",
          text: [
            "Katika dharura yoyote, anza na maneno matatu: kagua, piga simu, saidia. Kwanza KAGUA kwamba eneo ni salama kwako: magari, moto, moshi, umeme, mtu mwenye hasira au maji marefu. Kama si salama, kaa mbali na upige simu. Huwezi kumsaidia mtu yeyote ukiumia wewe pia.",
            "Kisha mkague mtu. Mguse begani na useme kwa sauti, \"Uko sawa?\" Tazama kifua chake uone kama anapumua kawaida. Kuhema kwa shida mara kwa mara SI kupumua kawaida.",
            "Kisha PIGA SIMU 911 (au namba ya dharura ya nchi yako nje ya Marekani). Kama kuna mtu nawe, mwonyeshe kwa kidole na useme, \"Wewe, piga 911 na ulete AED.\" Weka simu kwenye spika. Taja anwani kwanza, kisha kilichotokea, na usikate simu hadi mpokeaji simu akuambie. Mpokeaji simu anaweza kukuongoza katika CPR.",
            "Kisha SAIDIA: toa msaada unaoweza hadi msaada wa wataalamu ufike. Tumia glavu au kizuizi kama unavyo. Majimbo mengi ya Marekani yana sheria za Msamaria Mwema zinazowalinda watu wanaosaidia kwa nia njema; maelezo yanatofautiana kwa jimbo."
          ],
          steps: ["Kagua eneo: ni salama kwangu?", "Mkague mtu: mguse, sema kwa sauti \"Uko sawa?\", tazama kama anapumua kawaida.", "Piga 911 (au namba ya nchi yako), au mwonyeshe mtu mmoja apige simu na mwingine alete AED.", "Simu kwenye spika: anwani kwanza, kisha kilichotokea. Usikate simu.", "Saidia: toa msaada hadi wataalamu wafike."],
          words: [["Mpokeaji simu (dispatcher)", "mtu aliyefunzwa anayepokea simu za 911, anatuma msaada na anaweza kukuambia la kufanya."], ["Asiyeitika", "mtu asiyesogea, asiyefumbua macho wala kujibu unapomgusa na kumwita kwa sauti."], ["Sheria ya Msamaria Mwema", "sheria ya jimbo inayowalinda watu wanaosaidia katika dharura kwa nia njema; maelezo yanatofautiana kwa jimbo."]],
          slides: [
            { title: "Kagua, piga simu, saidia", bullets: ["Kagua: eneo ni salama? Mtu anaitika?", "Piga simu: 911 au namba ya dharura ya nchi yako", "Saidia: toa msaada hadi wataalamu wafike"] },
            { title: "Mkague mtu", bullets: ["Mguse begani na useme kwa sauti \"Uko sawa?\"", "Tazama kifua uone kama anapumua kawaida", "Kuhema kwa shida SI kupumua kawaida"] },
            { title: "Piga simu kwa uwazi", bullets: ["Mwonyeshe mtu mmoja: \"Wewe, piga 911\"", "Mwombe mwingine alete AED", "Anwani kwanza, kisha kilichotokea", "Usikate simu; mpokeaji simu anakusaidia"] }
          ],
          sources: [MEDLINE_CPR, REDCROSS],
          tryIt: "Andika sentensi moja ambayo ungesema kwa 911 ukiwa nyumbani: anwani yako kamili pamoja na barabara iliyo karibu inayokatiza, kisha \"mwanamume ameanguka na hapumui\". Isome kwa sauti mara mbili hadi uweze kuisema bila kuangalia.",
          youCanNow: "kukagua eneo na mtu, na kupiga 911 kwa ujumbe ulio wazi.",
          quickCheck: [
            { objective: "O1", q: "Unaona mwanamume amelala barabarani na magari yanapita. Unafanya nini kwanza?", options: ["Kumkimbilia mara moja", "Kuhakikisha eneo ni salama kwako, kisha kupiga 911", "Kuanza CPR barabarani", "Kumrekodi video"], answer: 1, why: "Kukagua kwamba eneo ni salama huja kwanza; kama si salama, kaa mbali na upige simu." },
            { objective: "O1", q: "Unapopiga 911, unasema nini kwanza?", options: ["Historia ya maisha yako", "Historia ya matibabu ya mtu huyo", "Anwani au mahali", "Aina ya simu yako"], answer: 2, why: "Anwani inakuja kwanza ili msaada utumwe hata simu ikikatika." }
          ]
        },
        {
          title: "CPR ya Mikono Tu: bonyeza kwa nguvu na haraka",
          objectives: ["O2"],
          minutes: 6,
          goal: "Orodhesha hatua za CPR ya Mikono Tu kwa mpangilio sahihi.",
          text: [
            "Mtu mzima anapoanguka ghafla, haitiki na hapumui kawaida, huenda moyo wake umesimama. Hii inaitwa moyo kusimama ghafla (cardiac arrest). CPR inasukuma damu kwenda kwenye ubongo hadi AED na wahudumu wa dharura wafike.",
            "American Heart Association inafundisha CPR ya Mikono Tu kwa yeyote ambaye hajafunzwa au hajiamini kutoa pumzi: piga 911, kisha bonyeza kwa nguvu na haraka katikati ya kifua. Huhitaji kupima mapigo ya moyo isipokuwa wewe ni mtaalamu wa afya.",
            "Piga magoti kando ya mtu aliyelala juu ya sehemu ngumu na tambarare. Weka kisigino cha kiganja kimoja katikati ya kifua, kiganja kingine juu yake, mikono imenyooka, mabega juu ya mikono yako. Bonyeza chini kama inchi 2 (sentimita 5), mara 100 hadi 120 kwa dakika, na uache kifua kirudi juu kabisa kila mara.",
            "Endelea hadi AED iwe tayari, wataalamu wachukue nafasi, au mtu aanze kupumua kawaida. CPR inachosha: kama mtu mwingine anajua, badilishaneni kila baada ya kama dakika mbili bila kusimama sana. Darasani unafanya mazoezi ya kina kwa mwanasesere; usifanye mazoezi kamwe kwa mtu halisi."
          ],
          steps: ["Haitiki na hapumui kawaida: piga 911 na mtume mtu alete AED.", "Mlaze mtu chali juu ya sehemu ngumu na tambarare.", "Kisigino cha kiganja kimoja katikati ya kifua, kiganja kingine juu.", "Mikono imenyooka, mabega juu ya mikono.", "Bonyeza kina cha kama inchi 2, mara 100 hadi 120 kwa dakika; acha kifua kirudi juu kabisa.", "Usisimame hadi AED, wataalamu, au kupumua kawaida."],
          words: [["CPR", "cardiopulmonary resuscitation (ufufuaji wa moyo na mapafu): kubonyeza kifua (na wakati mwingine kutoa pumzi) ili damu iendelee kutembea moyo unaposimama."], ["Moyo kusimama ghafla (cardiac arrest)", "moyo unapoacha ghafla kusukuma damu; mtu anaanguka na hapumui kawaida."], ["Mbonyezo", "msukumo mmoja wa kubonyeza kifua chini."], ["Mwanasesere wa mazoezi (manikin)", "mwili wa bandia unaotumika kwa mazoezi katika madarasa ya CPR."]],
          slides: [
            { title: "Wakati wa kuanza CPR", bullets: ["Mtu mzima ameanguka na haitiki", "Hapumui kawaida, au anahema kwa shida tu", "Piga 911 na mtume mtu alete AED kwanza"] },
            { title: "Mikono mahali sahihi", bullets: ["Kisigino cha kiganja kimoja katikati ya kifua", "Kiganja kingine juu yake", "Mikono imenyooka, mabega juu ya mikono"] },
            { title: "Kwa nguvu na haraka", bullets: ["Kina cha kama inchi 2 (sentimita 5)", "Mara 100 hadi 120 kwa dakika", "Acha kifua kirudi juu kabisa"] },
            { title: "Endelea", bullets: ["Hadi AED iwe tayari au wataalamu wachukue nafasi", "Badilishana na msaidizi kila baada ya kama dakika 2", "Fanya mazoezi ya kina kwa mwanasesere darasani"] }
          ],
          sources: [MEDLINE_CPR, AHA_CPR],
          tryIt: "Piga magoti kando ya mto mgumu au taulo iliyokunjwa sakafuni (kamwe si mtu). Weka mikono kama ilivyoonyeshwa, mikono imenyooka. Weka saa ya simu kwa sekunde 30 na uhesabu mibonyezo yako kwa sauti. Lenga mibonyezo 50 hadi 60 katika sekunde 30, sawa na 100 hadi 120 kwa dakika.",
          youCanNow: "kuorodhesha hatua za CPR ya Mikono Tu na kudumisha kasi sahihi.",
          quickCheck: [
            { objective: "O2", q: "Kwa CPR ya mtu mzima, mikono yako inakaa wapi?", options: ["Juu ya tumbo", "Juu ya bega la kushoto", "Juu ya shingo", "Katikati ya kifua"], answer: 3, why: "Kisigino cha kiganja kimoja kinakaa katikati ya kifua na kiganja kingine juu yake." },
            { objective: "O2", q: "Katika CPR unabonyeza kwa kasi gani?", options: ["Mara 100 hadi 120 kwa dakika", "Kama mara 20 kwa dakika", "Mara moja kila sekunde 10", "Polepole kadiri unavyoweza"], answer: 0, why: "Mwongozo ni mibonyezo 100 hadi 120 kwa dakika, ukiacha kifua kirudi juu kila mara." }
          ]
        },
        {
          title: "Kutumia AED, na kile darasa kamili la CPR linaongeza",
          objectives: ["O2"],
          minutes: 5,
          goal: "Orodhesha hatua za kutumia AED pamoja na CPR.",
          text: [
            "AED (automated external defibrillator, yaani kifaa cha kushtua moyo) ni kisanduku kidogo kinachoweza kuushtua moyo urudi kwenye mdundo wa kawaida. Vinapatikana shuleni, kwenye ukumbi wa mazoezi, viwanja vya ndege, ofisini, maduka makubwa na mahali pa ibada, mara nyingi ndani ya kabati ukutani lenye alama ya moyo na radi.",
            "AED zimetengenezwa kwa watu wasio na mafunzo. Iwashe nayo inazungumza nawe. Funua kifua, kifute kikauke, weka pedi mahali picha zinapoonyesha, na uchomeke waya kama inahitajika. Kila mtu akae mbali wakati inakagua moyo. Ikisema ushtue, hakikisha hakuna anayemgusa mtu na ubonyeze kitufe. Kisha rudi moja kwa moja kwenye CPR, kama AED inavyokuambia.",
            "Tumia AED mara tu inapofika, na ufuate sauti yake kikamilifu. Usisimamishe CPR ili uende kuitafuta mwenyewe kama mtu mwingine anaweza kuileta.",
            "Katika darasa kamili la CPR unajifunza pia kutoa pumzi za uokoaji: mibonyezo 30, kisha pumzi 2, kurudia. Unajifunza pia CPR kwa watoto na watoto wachanga, ambayo ni tofauti. Fanya mazoezi ya hatua hizo darasani na mkufunzi."
          ],
          steps: ["Endelea na CPR wakati mtu analeta AED.", "Washa AED na usikilize.", "Funua na ukaushe kifua; weka pedi mahali picha zinapoonyesha.", "Kaa mbali wakati inakagua; hakuna anayemgusa mtu.", "Ikisema ushtue: kila mtu akae mbali, bonyeza kitufe.", "Rudi moja kwa moja kwenye CPR kama inavyokuambia."],
          words: [["AED", "automated external defibrillator: kisanduku kinachokagua moyo na, ikihitajika, kinatoa mshtuko kurekebisha mdundo wake. Kinakuongoza kwa sauti katika kila hatua."], ["Pedi", "vibandiko vyenye waya vinavyowekwa kwenye kifua kilichofunuliwa ili AED ikague moyo na kuushtua."], ["Pumzi za uokoaji", "pumzi unazompa mtu kupitia mdomo wake wakati wa CPR; zinajifunzwa katika darasa kamili."]],
          slides: [
            { title: "AED inafanya nini", bullets: ["Inakagua mdundo wa moyo", "Inatoa mshtuko pale tu unapohitajika", "Inakuongoza kwa sauti katika kila hatua"] },
            { title: "Hatua za AED", bullets: ["Iwashe na usikilize", "Kifua wazi na kikavu; pedi mahali picha zinapoonyesha", "Kaa mbali wakati inakagua"] },
            { title: "Ikisema ushtue", bullets: ["Hakikisha hakuna anayemgusa mtu", "Bonyeza kitufe cha mshtuko", "Rudi moja kwa moja kwenye CPR"] },
            { title: "Darasa kamili linaongeza", bullets: ["Pumzi za uokoaji: mibonyezo 30, kisha pumzi 2", "CPR kwa watoto na watoto wachanga", "Mazoezi ya mikono na mkufunzi"] }
          ],
          sources: [MEDLINE_CPR, AHA_CPR, REDCROSS],
          tryIt: "Tafuta AED iliyo karibu zaidi iko wapi kazini, shuleni, kwenye ukumbi wa mazoezi au mahali pako pa ibada. Muulize meneja au tafuta alama. Andika hasa mahali ilipo, na uchore kwa kumbukumbu sehemu mbili za pedi kwenye mchoro wa mtu wa vijiti.",
          youCanNow: "kuorodhesha hatua za kutumia AED pamoja na CPR na kusema AED iliyo karibu iko wapi.",
          quickCheck: [
            { objective: "O2", q: "AED inasema mshtuko unashauriwa. Unafanya nini kabla ya kubonyeza kitufe?", options: ["Kumshika mtu mkono", "Kuondoa pedi", "Kuhakikisha hakuna anayemgusa mtu", "Kumpa mtu maji"], answer: 2, why: "Kila mtu lazima akae mbali ili mshtuko uende kwa mtu huyo tu." },
            { objective: "O2", q: "AED imetoa mshtuko. Nini kinafuata?", options: ["Kusubiri gari la wagonjwa kimya", "Kurudi kwenye CPR kama AED inavyokuambia", "Kuzima AED", "Kumketisha mtu"], answer: 1, why: "Baada ya mshtuko unarudi moja kwa moja kwenye CPR, ukifuata sauti ya AED." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Tenda haraka na uufanye moyo uendelee",
        questions: [
          { objective: "O1", q: "Maneno matatu ya kwanza kwa dharura yoyote ni yapi?", options: ["Subiri, tazama, tembea", "Kagua, piga simu, saidia", "Kimbia, jificha, sema", "Uliza, rekodi, chapisha"], answer: 1, why: "Kagua eneo na mtu, piga 911, kisha saidia hadi msaada ufike." },
          { objective: "O1", q: "Watu watatu wanamtazama mwanamke aliyeanguka. Unapataje msaada haraka zaidi?", options: ["Kumwonyesha mtu mmoja: \"Wewe, piga 911,\" na kumwomba mwingine alete AED", "Kupiga kelele kwa umati \"Mtu apige simu!\"", "Kusubiri mtu mwingine afanye", "Kuchapisha kwenye mitandao ya kijamii"], answer: 0, why: "Kumpa mtu mmoja kazi wazi kunazuia kila mtu kudhani kwamba mwingine amepiga simu." },
          { objective: "O2", q: "Katika CPR unabonyeza kifua cha mtu mzima kwa kina gani?", options: ["Kugusa tu kidogo", "Kama nusu inchi", "Kwa kina kadiri unavyoweza", "Kama inchi 2 (sentimita 5)"], answer: 3, why: "Mibonyezo kwa mtu mzima ni ya kina cha kama inchi 2, ukiacha kifua kirudi juu." },
          { objective: "O2", q: "Unapaswa kuanza CPR ya Mikono Tu kwa mtu mzima lini?", options: ["Anapoongea lakini amechoka", "Haitiki na hapumui kawaida", "Ana mkato mdogo", "Anakohoa kwa nguvu"], answer: 1, why: "CPR ni kwa mtu asiyeitika na asiyepumua kawaida, au anayehema kwa shida tu." },
          { objective: "O2", q: "Nani anaweza kutumia AED?", options: ["Yeyote; inakuongoza katika hatua", "Madaktari tu", "Wazima moto tu", "Watu wenye umri zaidi ya miaka 30 tu"], answer: 0, why: "AED zimetengenezwa kwa watu wasio na mafunzo na zinatoa maelekezo kwa sauti." }
        ]
      }
    },
    {
      name: "Sura 2: Dharura za kawaida na kupata cheti",
      lessons: [
        {
          title: "Kukabwa na kutokwa na damu nyingi",
          objectives: ["O3", "O4"],
          minutes: 6,
          goal: "Tambua mtu aliyekabwa, na ueleze jinsi ya kuzuia damu nyingi kwa kubonyeza moja kwa moja.",
          text: [
            "Kukabwa: mtu anaweza kushika koo lake, kushindwa kuongea, kukohoa kwa udhaifu, kutoa sauti nyembamba ya juu au kubadilika rangi kuwa buluu. Uliza, \"Umekabwa? Unaweza kuongea?\" Kama anaweza kukohoa kwa nguvu na kuongea, usimpige; mwambie aendelee kukohoa.",
            "Kama hawezi kuongea, kukohoa wala kupumua, mtu apige 911. Mwongozo wa Marekani unaonyesha njia mbili za kutoa kitu hicho: kumpiga kwa nguvu kati ya vile vya mabega kwa kisigino cha kiganja (mapigo ya mgongoni), na misukumo ya haraka kuelekea ndani na juu, juu kidogo ya kitovu (misukumo ya tumbo). Mama mjamzito au mtu mnene sana hupewa misukumo ya kifua badala yake. Mtu akizimia, piga 911, mshushe sakafuni na uanze CPR. Jifunze na ufanye mazoezi ya hatua hizi darasani; usifanye mazoezi ya misukumo kwa mtu halisi.",
            "Damu nyingi: piga 911. Vaa glavu kama unazo, au tumia mfuko wa plastiki kama kizuizi. Bonyeza kwa nguvu, moja kwa moja juu ya jeraha, kwa kitambaa safi, shashi au hata kipande cha nguo, na uendelee kubonyeza. Usikiinue ili kuangalia. Damu ikipenya, ongeza kitambaa zaidi juu na uendelee kubonyeza.",
            "Usichomoe kitu kilichokwama ndani ya jeraha; weka kitambaa kuzunguka. Tourniquet ni kwa damu inayohatarisha maisha kwenye mkono au mguu wakati kubonyeza hakutoshi; madarasa ya Stop the Bleed na ya huduma ya kwanza yanafundisha jinsi ya kuitumia."
          ],
          steps: ["Kukabwa: uliza \"Umekabwa? Unaweza kuongea?\"", "Anaweza kukohoa na kuongea: mwache aendelee kukohoa.", "Hawezi kuongea wala kupumua: piga 911 na utoe huduma ya kwanza uliyojifunza darasani (mapigo ya mgongoni na misukumo ya tumbo).", "Akizimia: mshushe sakafuni, anza CPR.", "Damu: piga 911, glavu au kizuizi, bonyeza kwa nguvu juu ya jeraha kwa kitambaa safi.", "Damu ikipenya: ongeza tabaka juu; usiinue kitambaa cha kwanza."],
          words: [["Misukumo ya tumbo", "misukumo ya haraka kuelekea ndani na juu, juu kidogo ya kitovu, ili kutoa kitu kilichoziba; wakati mwingine inaitwa Heimlich maneuver."], ["Mapigo ya mgongoni", "mapigo ya nguvu kati ya vile vya mabega kwa kisigino cha kiganja ili kulegeza kitu kilichoziba."], ["Kubonyeza moja kwa moja", "kubonyeza kwa nguvu juu kabisa ya jeraha ili kupunguza na kuzuia damu."], ["Tourniquet", "kamba au mkanda unaofungwa kwa nguvu kwenye mkono au mguu juu ya jeraha ili kuzuia damu inayohatarisha maisha; inafundishwa darasani."]],
          slides: [
            { title: "Dalili za kukabwa", bullets: ["Anashika koo, hawezi kuongea", "Kikohozi dhaifu au sauti nyembamba ya juu", "Anabadilika rangi kuwa buluu"] },
            { title: "Kukabwa: la kufanya", bullets: ["Anaweza kukohoa na kuongea: mwache akohoe", "Hawezi kuongea: piga 911, mapigo ya mgongoni na misukumo", "Akizimia: mshushe sakafuni, anza CPR"] },
            { title: "Damu nyingi", bullets: ["Piga 911; glavu au kizuizi", "Bonyeza kwa nguvu, juu kabisa ya jeraha", "Damu ikipenya: ongeza tabaka, endelea kubonyeza"] },
            { title: "Usifanye", bullets: ["Usiinue kitambaa ili kuangalia", "Usichomoe kitu kilichokwama", "Usifanye mazoezi ya misukumo kwa mtu halisi"] }
          ],
          sources: [MEDLINE_CHOKING, MEDLINE_BLEEDING, REDCROSS],
          tryIt: "Weka taulo iliyokunjwa juu ya mkono wako mwenyewe. Bonyeza chini kwa nguvu kwa kiganja kilicho wazi kwa sekunde 60 kwa saa bila kuinua. Kisha ongeza taulo ya pili juu na uendelee kubonyeza. Andika mistari miwili: jinsi ilivyokuwa vigumu kuendelea kubonyeza, na dalili tatu za kukabwa kutoka somo hili.",
          youCanNow: "kutambua dalili za kukabwa na kuzuia damu nyingi kwa kubonyeza kwa nguvu moja kwa moja juu ya jeraha.",
          quickCheck: [
            { objective: "O3", q: "Mwanamke anakohoa kwa nguvu wakati wa chakula cha mchana na bado anaweza kuongea. Unafanya nini?", options: ["Kumpiga mgongoni kwa nguvu mara moja", "Kumpa misukumo ya tumbo", "Kumhimiza aendelee kukohoa na kukaa naye", "Kumlaza sakafuni"], answer: 2, why: "Mtu akiweza kukohoa kwa nguvu na kuongea, mwache aendelee kukohoa; usimpige." },
            { objective: "O4", q: "Damu inapenya kitambaa unachobonyeza juu ya jeraha. Unafanya nini?", options: ["Kuinua kitambaa ili kuangalia", "Kuacha kubonyeza", "Kuosha jeraha kwa maji", "Kuweka kitambaa zaidi juu na kuendelea kubonyeza"], answer: 3, why: "Kuongeza tabaka kunadumisha mbonyezo; kuinua kitambaa kunaweza kuanzisha damu tena." }
          ]
        },
        {
          title: "Kutambua shambulio la moyo na kiharusi",
          objectives: ["O5"],
          minutes: 5,
          goal: "Tambua dalili za hatari za shambulio la moyo na kiharusi.",
          text: [
            "Shambulio la moyo ni pale mtiririko wa damu kwenda sehemu ya moyo unapozibwa. Dalili za kawaida: maumivu au mkandamizo kifuani unaoweza kusambaa hadi tayani, mkononi, mgongoni au tumboni, kukosa pumzi, jasho baridi, kujisikia mgonjwa au kizunguzungu, na uchovu usio wa kawaida. Wanawake, wazee na watu wenye kisukari wanaweza kuwa na dalili ndogo au tofauti.",
            "Ukidhani ni shambulio la moyo, piga 911 mara moja. Usisubiri uone kama litapita, na usimwache mtu akushawishi usipige. Mketishe apumzike, legeza nguo zinazombana, na ukae naye. Usimpe dawa yoyote isipokuwa ni dawa yake mwenyewe aliyoandikiwa au mpokeaji simu wa 911 akuambie. Akiacha kuitika na kuacha kupumua kawaida, anza CPR na utumie AED.",
            "Kiharusi ni pale mtiririko wa damu kwenda sehemu ya ubongo unapozibwa au mshipa wa damu unapopasuka. CDC inafundisha B.E. F.A.S.T. (herufi za maneno ya Kiingereza): Balance, usawa (kizunguzungu cha ghafla au kupoteza usawa), Eyes, macho (shida ya ghafla kuona), Face, uso (mwombe atabasamu; upande mmoja unalegea?), Arms, mikono (mwombe ainue mikono yote miwili; mmoja unashuka?), Speech, usemi (unatatizika au ni wa ajabu?), Time, muda (piga 911 mara moja).",
            "Andika muda dalili zilipoanza na uwaambie wahudumu. Ita gari la wagonjwa; usimpeleke mtu hospitalini kwa gari lako mwenyewe."
          ],
          steps: ["Dalili za shambulio la moyo: maumivu au mkandamizo kifuani, kukosa pumzi, jasho baridi, kujisikia mgonjwa, kizunguzungu.", "Piga 911 mara moja; mketishe, legeza nguo, kaa naye.", "Hakuna dawa isipokuwa ni yake au mpokeaji simu akuambie.", "Kiharusi: kagua B.E. F.A.S.T.", "Andika muda dalili zilipoanza; ita gari la wagonjwa, usimpeleke kwa gari."],
          words: [["Shambulio la moyo", "mtiririko wa damu kwenda sehemu ya moyo unapozibwa; mara nyingi mtu yuko macho na ana maumivu au mkandamizo kifuani."], ["Kiharusi", "mtiririko wa damu kwenda sehemu ya ubongo unapozibwa au mshipa wa damu ndani ya ubongo unapopasuka."], ["B.E. F.A.S.T.", "Balance (usawa), Eyes (macho), Face (uso), Arms (mikono), Speech (usemi), Time (muda): njia ya kutambua kiharusi na kukumbuka kupiga 911."]],
          slides: [
            { title: "Dalili za shambulio la moyo", bullets: ["Maumivu au mkandamizo kifuani; yanaweza kusambaa tayani, mkononi, mgongoni", "Kukosa pumzi, jasho baridi, kujisikia mgonjwa", "Wanawake na wazee wanaweza kuwa na dalili ndogo"] },
            { title: "Shambulio la moyo: la kufanya", bullets: ["Piga 911 sasa; usisubiri", "Mketishe, apumzike, legeza nguo, kaa naye", "Hakuna dawa isipokuwa ni yake au mpokeaji simu akuambie"] },
            { title: "Kiharusi: B.E. F.A.S.T.", bullets: ["Balance na Eyes: kizunguzungu cha ghafla au shida kuona", "Face: uso unalegea, Arms: mkono unashuka, Speech: usemi unatatizika", "Time: piga 911 mara moja"] },
            { title: "Muda ni muhimu", bullets: ["Andika dalili zilipoanza", "Ita gari la wagonjwa; usimpeleke kwa gari"] }
          ],
          sources: [MEDLINE_HEART, CDC_STROKE],
          tryIt: "Andika B.E. F.A.S.T. kuteremka upande wa ukurasa. Kando ya kila herufi, andika swali au kipimo ambacho ungetumia, kwa kumbukumbu. Kisha mfundishe rafiki mmoja au mwanafamilia ndani ya chini ya dakika moja.",
          youCanNow: "kutambua dalili za hatari za shambulio la moyo na kiharusi na kupiga 911 haraka.",
          quickCheck: [
            { objective: "O5", q: "Tabasamu la mjomba wako linalegea upande mmoja na maneno yake yanatatizika. Unafanya nini?", options: ["Kupiga 911 mara moja na kuandika muda", "Kumwacha alale mpaka apone", "Kumpeleka hospitalini kwa gari lako mwenyewe", "Kumpa kidonge cha maumivu"], answer: 0, why: "Hizi ni dalili za kiharusi; piga 911 mara moja, andika muda, na acha gari la wagonjwa limpeleke." },
            { objective: "O5", q: "Ipi ni dalili ya kawaida ya shambulio la moyo?", options: ["Mkato mdogo mkononi", "Maumivu au mkandamizo kifuani unaosambaa hadi mkononi au tayani", "Kupiga chafya", "Upele unaowasha mguuni"], answer: 1, why: "Maumivu au mkandamizo kifuani unaoweza kusambaa ni dalili ya kawaida ya shambulio la moyo." }
          ]
        },
        {
          title: "Kupata cheti: mpango wako wa utayari",
          objectives: ["O6"],
          minutes: 5,
          goal: "Chagua darasa la ana kwa ana la CPR na huduma ya kwanza na uandike mpango wa mafunzo wenye tarehe.",
          text: [
            "Kozi hii inatoa ufahamu, si cheti. Waajiri wanaoomba CPR na huduma ya kwanza kwa kawaida wanataka kadi kutoka kwa mtoaji anayetambuliwa. Nchini Marekani wanaojulikana zaidi ni American Red Cross na American Heart Association. Wote wawili wana vitafuta madarasa kwenye tovuti zao.",
            "Chagua darasa linalofaa njia yako. Kazi nyingi za mahali pa kazi na za jamii (malezi ya watoto, ukocha, ulinzi, huduma ya chakula, mashirika yasiyo ya faida) zinakubali darasa la Huduma ya Kwanza, CPR na AED kwa watu wazima na watoto. Kazi za afya (msaidizi wa muuguzi, EMT, wanafunzi wa famasia na wa tiba) kwa kawaida zinahitaji Basic Life Support (BLS). Muulize mwajiri wako au programu yako wanakubali lipi kabla ya kulipa.",
            "Madarasa mengi ni mchanganyiko: sehemu mtandaoni, kisha kipindi cha ana kwa ana cha ujuzi na mkufunzi na wanasesere wa mazoezi. Darasa la mtandaoni tu bila mtihani wa mikono huenda lisikubaliwe. Bei, urefu wa darasa na muda kadi inadumu vinatofautiana: kagua ukurasa wa mtoaji na tarehe kwenye kadi yako, na uifanye upya kabla haijaisha.",
            "Uliza kuhusu madarasa ya bure au ya bei nafuu: baadhi ya waajiri, programu za nguvu kazi, idara za zimamoto, hospitali na vikundi vya jamii vinayatoa. OSHA (ofisi ya serikali ya Marekani ya usalama kazini) inasema waajiri lazima wawe na watu wa huduma ya kwanza na vifaa vinavyofaa hatari za mahali pa kazi."
          ],
          steps: ["Muulize mwajiri wako au programu yako wanakubali darasa lipi (kwa mfano Huduma ya Kwanza, CPR na AED, au BLS).", "Fungua kitafuta madarasa cha Red Cross au American Heart Association.", "Chagua darasa la ana kwa ana au la mchanganyiko lililo karibu nawe.", "Andika jina la kozi, anayetoa kadi, mahali, tarehe na gharama.", "Weka tarehe kwenye kalenda yako na uweke kikumbusho kabla kadi haijaisha."],
          words: [["Kadi ya cheti", "uthibitisho kutoka kwa mtoaji mafunzo kwamba ulifaulu mtihani wa ujuzi; waajiri wanaomba kuiona."], ["BLS", "Basic Life Support (msaada wa msingi wa uhai): darasa la CPR kwa wafanyakazi na wanafunzi wa afya."], ["Mafunzo ya mchanganyiko", "darasa ambalo ni sehemu mtandaoni na sehemu ana kwa ana, pamoja na mtihani wa ujuzi wa mikono."], ["Ya watoto (pediatric)", "kwa watoto na watoto wachanga."]],
          slides: [
            { title: "Kozi hii ni ya ufahamu", bullets: ["Inakuandaa; haikupi cheti", "Vyeti vinatoka kwa mtoaji anayetambuliwa", "Nchini Marekani: American Red Cross, American Heart Association"] },
            { title: "Chagua darasa linalofaa", bullets: ["Kazi nyingi: Huduma ya Kwanza, CPR na AED (watu wazima na watoto)", "Afya: Basic Life Support (BLS)", "Muulize mwajiri wako anakubali lipi"] },
            { title: "Kabla ya kujiandikisha", bullets: ["Linahitaji mtihani wa ujuzi ana kwa ana", "Kagua bei, urefu na muda kadi inadumu", "Uliza kuhusu madarasa ya bure au ya bei nafuu"] }
          ],
          sources: [REDCROSS, AHA_CPR, OSHA_FIRSTAID],
          tryIt: "Kazi ya mwisho: tengeneza Mpango wako wa ukurasa mmoja wa Utayari wa Huduma ya Kwanza na CPR. Andika namba yako ya dharura na sentensi ya anwani, mahali AED na sanduku la huduma ya kwanza vilivyo karibu, hatua za dharura kwa kumbukumbu, na darasa la ana kwa ana ulilopata kwenye tovuti ya Red Cross au AHA: jina, anayelitoa, mahali na tarehe.",
          youCanNow: "kuchagua darasa la ana kwa ana la CPR na huduma ya kwanza linalotambuliwa na kupanga utakapolihudhuria.",
          quickCheck: [
            { objective: "O6", q: "Umemaliza kozi hii ya ufahamu. Inakupa nini?", options: ["Kadi ya CPR ambayo mwajiri wako lazima aikubali", "Leseni ya uuguzi", "Maarifa ya kukuandaa kwa darasa la ana kwa ana la cheti", "Ruhusa ya kufundisha CPR"], answer: 2, why: "Kozi hii inakuandaa; cheti kinatoka katika darasa la ana kwa ana la mtoaji anayetambuliwa." },
            { objective: "O6", q: "Unaanza programu ya msaidizi wa muuguzi. Kuna uwezekano mkubwa wanataka darasa gani la CPR?", options: ["Video ya mtandaoni tu bila mtihani wa ujuzi", "Hakuna darasa kabisa", "Darasa kutoka tangazo la mitandao ya kijamii", "Basic Life Support (BLS), baada ya kuthibitisha na programu"], answer: 3, why: "Programu za afya kwa kawaida zinahitaji BLS; muulize programu ithibitishe wanakubali lipi." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Dharura za kawaida na kupata cheti",
        questions: [
          { objective: "O3", q: "Mwanamume anashika koo lake na hawezi kuongea wala kukohoa. Unafanya nini?", options: ["Kusubiri ajisikie vizuri", "Mtu apige 911 na kutoa huduma ya kwanza ya kukabwa", "Kumpa maji anywe", "Kumwambia alale apumzike"], answer: 1, why: "Mtu asiyeweza kuongea wala kukohoa amekabwa vibaya; piga 911 na uchukue hatua." },
          { objective: "O4", q: "Jambo la kwanza la kufanya kwa mkato mrefu unaotoa damu nyingi (baada ya kupiga 911) ni lipi?", options: ["Kubonyeza kwa nguvu, juu kabisa ya jeraha, kwa kitambaa safi", "Kuacha damu itoke ili kulisafisha", "Kuweka barafu juu yake", "Kumwambia mtu atembee tembee"], answer: 0, why: "Kubonyeza kwa nguvu moja kwa moja ndiyo njia kuu ya kuzuia damu nyingi." },
          { objective: "O4", q: "Kipande cha kioo kimekwama ndani ya jeraha. Unapaswa kufanya nini?", options: ["Kukichomoa haraka", "Kukisukuma ndani zaidi", "Kukiacha na kuweka kitambaa kuzunguka", "Kumwaga maji juu yake hadi kitoke"], answer: 2, why: "Kukichomoa kunaweza kuongeza damu; weka kitambaa kuzunguka na uwaache wataalamu wakiondoe." },
          { objective: "O5", q: "Katika B.E. F.A.S.T., herufi A inasimama badala ya nini?", options: ["Allergy (mzio)", "Address (anwani)", "Ambulance (gari la wagonjwa)", "Arms (mikono): mkono mmoja unashuka?"], answer: 3, why: "A ni Arms (mikono): mwombe mtu ainue mikono yote miwili uone kama mmoja unashuka." },
          { objective: "O6", q: "Njia bora ya kupata cheti cha CPR ambacho kazi itakubali ni ipi?", options: ["Darasa la ana kwa ana au la mchanganyiko kutoka Red Cross au AHA", "Kutazama video mtandaoni bila mtihani", "Kusoma kozi hii mara mbili", "Kumwomba rafiki asaini barua"], answer: 0, why: "Waajiri kwa kawaida wanataka kadi kutoka kwa mtoaji anayetambuliwa pamoja na mtihani wa ujuzi wa mikono." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Ufahamu wa Huduma ya Kwanza na CPR",
    questions: [
      { objective: "O1", q: "Unamkuta mfanyakazi mwenzako sakafuni karibu na waya wa umeme unaotoa cheche. Unafanya nini kwanza?", options: ["Kumshika mkono na kumvuta", "Kukaa mbali, kupiga 911 na kuhakikisha umeme unazimwa", "Kumwaga maji juu ya waya", "Kuanza CPR pale pale alipo"], answer: 1, why: "Eneo si salama; kaa mbali, piga simu na lifanye salama kabla ya kumgusa mtu yeyote." },
      { objective: "O1", q: "Unakaguaje kama mtu anaitika?", options: ["Kumgusa begani na kusema kwa sauti \"Uko sawa?\"", "Kummwagia maji baridi usoni", "Kumtikisa kichwa kwa nguvu", "Kusubiri dakika tano"], answer: 0, why: "Kugusa na kuita kwa sauti ndiyo njia salama ya kukagua kama mtu anaitika." },
      { objective: "O1", q: "Unapiga simu 911. Unaweza kukata simu lini?", options: ["Mara tu unapotaja anwani", "Baada ya dakika moja", "Mpokeaji simu anapokuambia", "Mtu anapofumbua macho"], answer: 2, why: "Usikate simu; mpokeaji simu anaweza kuhitaji maelezo zaidi au kukuongoza katika CPR." },
      { objective: "O1", q: "Nje ya Marekani, unapiga namba gani?", options: ["911 kila wakati, kila mahali", "Namba ya rafiki", "Ofisi kuu ya hospitali", "Namba ya dharura ya nchi yako"], answer: 3, why: "Namba za dharura zinatofautiana kwa nchi; jifunze namba ya nchi yako." },
      { objective: "O2", q: "Mtu mzima anaanguka, haitiki na anahema kwa shida tu. Nini kinatokea?", options: ["Huenda amelala tu", "Huenda moyo wake umesimama; piga 911 na uanze CPR", "Amekabwa lakini yuko sawa", "Anahitaji glasi ya maji"], answer: 1, why: "Kuhema kwa shida si kupumua kawaida; ichukulie kama moyo umesimama ghafla." },
      { objective: "O2", q: "CPR ya Mikono Tu inamaanisha nini?", options: ["Kupiga 911 na kubonyeza kwa nguvu na haraka katikati ya kifua", "Kusugua mikono ya mtu", "Kutoa pumzi za uokoaji tu", "Kushika mikono ya mtu hadi msaada ufike"], answer: 0, why: "CPR ya Mikono Tu ni kubonyeza kifua bila kutoa pumzi, baada ya kupiga 911." },
      { objective: "O2", q: "Baada ya kila mbonyezo katika CPR, unaacha kifua kifanye nini?", options: ["Kibaki kimebonyezwa chini", "Kitetemeke", "Kirudi juu kabisa", "Kigeuke upande"], answer: 2, why: "Kuacha kifua kirudi juu kabisa kunaruhusu moyo ujae damu kabla ya mbonyezo unaofuata." },
      { objective: "O2", q: "Mtu analeta AED. Unafanya nini?", options: ["Kusubiri gari la wagonjwa liitumie", "Kusoma kitabu chake chote cha maelekezo kwanza", "Kuiweka chini ya kichwa cha mtu", "Kuiwasha na kufuata sauti yake"], answer: 3, why: "AED zinakuongoza kwa sauti katika kila hatua; itumie mara tu inapofika." },
      { objective: "O3", q: "Ipi ni dalili kwamba mtu mzima amekabwa?", options: ["Anacheka kwa sauti", "Anashika koo lake na hawezi kuongea", "Anapiga chafya", "Anaomba kitambaa cha mezani"], answer: 1, why: "Kushika koo na kushindwa kuongea ni dalili za kawaida za kukabwa." },
      { objective: "O3", q: "Mtu aliyekabwa anazimia. Unafanya nini?", options: ["Kupiga 911, kumshusha sakafuni na kuanza CPR", "Kuendelea na mapigo ya mgongoni akiwa amelala", "Kumwacha apumzike", "Kumpa maji"], answer: 0, why: "Mtu aliyekabwa akiacha kuitika, piga 911 na uanze CPR." },
      { objective: "O3", q: "Unapaswa kujifunza vizuri mapigo ya mgongoni na misukumo ya tumbo wapi?", options: ["Kwa kufanya mazoezi kwa nguvu kwa rafiki", "Kutoka maoni ya video yoyote", "Katika darasa la mazoezi ya mikono na mkufunzi", "Huhitaji kujifunza"], answer: 2, why: "Hatua hizi zinafanyiwa mazoezi kwa usalama darasani; usifanye mazoezi ya misukumo kamwe kwa mtu halisi." },
      { objective: "O4", q: "Kabla ya kubonyeza jeraha la mtu linalotoa damu, nini kinakulinda?", options: ["Glavu, au mfuko wa plastiki kama kizuizi", "Hakuna kinachohitajika", "Kunawa mikono kwa dakika tano kwanza", "Kufumba macho"], answer: 0, why: "Glavu au kizuizi kinakulinda dhidi ya damu wakati unasaidia." },
      { objective: "O4", q: "Unabonyeza jeraha. Unaendelea kubonyeza kwa muda gani?", options: ["Sekunde kumi", "Hadi uchoke", "Hadi uangalie chini ya kitambaa", "Hadi damu ikome au wataalamu wachukue nafasi, bila kuinua"], answer: 3, why: "Kubonyeza bila kuacha na bila kuchungulia kunaipa damu muda wa kuganda." },
      { objective: "O4", q: "Tourniquet inatumika lini?", options: ["Kwa mkato wowote mdogo", "Kwa damu inayohatarisha maisha kwenye mkono au mguu wakati kubonyeza hakutoshi", "Kwa damu ya puani", "Kwa uvimbe wa kugongwa"], answer: 1, why: "Tourniquet ni kwa damu ya mkono au mguu inayohatarisha maisha na inafundishwa darasani." },
      { objective: "O5", q: "Bibi yako anasema ana mkandamizo kifuani na jasho baridi lakini anataka kusubiri. Unafanya nini?", options: ["Kusubiri saa moja uone", "Kupiga 911 sasa na kukaa naye", "Kumpeleka mwenyewe kwa gari baada ya chakula cha jioni", "Kumpa kidonge chochote kilicho nyumbani"], answer: 1, why: "Hizi ni dalili za shambulio la moyo; piga 911 sasa na usimwache akushawishi usipige." },
      { objective: "O5", q: "Katika B.E. F.A.S.T., herufi T inakukumbusha kufanya nini?", options: ["Kupiga picha", "Kumtumia rafiki ujumbe", "Kumwambia alale", "Time (muda): piga 911 mara moja na uandike dalili zilipoanza"], answer: 3, why: "T ni Time (muda): piga 911 mara moja na uandike dalili zilipoanza." },
      { objective: "O5", q: "Kwa nini uite gari la wagonjwa kwa kiharusi badala ya kumpeleka mtu kwa gari?", options: ["Wahudumu wanaweza kuanza huduma njiani na kuiarifu hospitali", "Magari ya wagonjwa ni bure kila wakati", "Hospitali hazipokei watu wanaofika wenyewe", "Ni kinyume cha sheria kumpeleka mtu kwa gari"], answer: 0, why: "Wahudumu wa dharura wanaanza huduma mapema na kuiarifu hospitali; CDC inasema piga 911, usimpeleke kwa gari." },
      { objective: "O6", q: "Ni mashirika mawili gani ya Marekani yanayojulikana zaidi kwa vyeti vya CPR na huduma ya kwanza?", options: ["DMV na posta", "IRS na SBA", "American Red Cross na American Heart Association", "Kikundi chochote cha mitandao ya kijamii"], answer: 2, why: "Red Cross na AHA ndio watoaji wanaojulikana zaidi wa CPR na huduma ya kwanza nchini Marekani." },
      { objective: "O6", q: "Kabla ya kulipia darasa la CPR kwa ajili ya kazi, unapaswa kuuliza nini?", options: ["Darasa na mtoaji gani mwajiri anakubali", "Kama unaweza kuruka mtihani wa ujuzi", "Kama rafiki anaweza kukufanyia", "Hakuna; madarasa yote ni sawa"], answer: 0, why: "Kazi zinatofautiana: baadhi zinakubali Huduma ya Kwanza, CPR na AED; kazi za afya mara nyingi zinahitaji BLS." },
      { objective: "O6", q: "Kadi yako ya CPR ina tarehe juu yake. Unafanya nini?", options: ["Kuipuuza", "Kuitupa kadi", "Kuifunika kwa plastiki ili isiishe kamwe", "Kuweka kikumbusho cha kuifanya upya kabla haijaisha"], answer: 3, why: "Kadi zinaisha muda; zifanye upya kabla ya tarehe ili ubaki na cheti halali." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 2, 4, 6, 8, 11, 15, 17, 18] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Tayari kupiga simu ya dharura", objective: "O1", notYet: "Hakuna namba ya dharura wala sentensi ya anwani, au anwani haiko wazi.", meets: "Ana namba sahihi ya dharura na sentensi iliyo wazi yenye anwani kwanza, kisha kilichotokea.", exceeds: "Anaongeza pia barabara inayokatiza au alama ya mahali na anafanya mazoezi ya kuisema kwa sauti." },
      { name: "AED na sanduku vimepatikana", objective: "O2", notYet: "Hajui AED au sanduku la huduma ya kwanza liko wapi.", meets: "Anataja mahali AED na sanduku la huduma ya kwanza vilivyo karibu nyumbani, kazini, shuleni au mahali pa ibada.", exceeds: "Anataja sehemu mbili, na amehakikisha kabati la AED linafikika." },
      { name: "Hatua kwa mpangilio", objective: "O2", notYet: "Hatua zinakosekana au ziko kwa mpangilio mbaya, au kasi na kina cha CPR si sahihi.", meets: "Anaandika kagua, piga simu, CPR na AED kwa mpangilio, mikono katikati ya kifua, mara 100 hadi 120 kwa dakika na kama inchi 2.", exceeds: "Anaandika pia hatua za AED na wakati wa kubadilishana waokoaji." },
      { name: "Kukabwa na damu", objective: "O4", notYet: "Anachanganya la kufanya, au anasema kuinua kitambaa au kuchomoa kitu.", meets: "Anaandika dalili za kukabwa (O3) na kubonyeza kwa nguvu moja kwa moja pamoja na tabaka kwa damu.", exceeds: "Anasema pia ni lini mtu aliyekabwa anahitaji CPR na tourniquet ni ya nini." },
      { name: "Shambulio la moyo na kiharusi", objective: "O5", notYet: "Hawezi kuorodhesha B.E. F.A.S.T. wala dalili za shambulio la moyo.", meets: "Anaorodhesha B.E. F.A.S.T. na dalili tatu za shambulio la moyo, pamoja na \"piga 911\".", exceeds: "Anaandika pia kurekodi muda dalili zilipoanza na kutompeleka mtu kwa gari." },
      { name: "Mpango wa cheti", objective: "O6", notYet: "Hakuna darasa lililochaguliwa, au darasa la mtandaoni tu bila mtihani wa ujuzi.", meets: "Anataja darasa la ana kwa ana au la mchanganyiko, anayetoa kadi, mahali na tarehe.", exceeds: "Amethibitisha pia na mwajiri au programu kwamba darasa linakubaliwa, na ameweka kikumbusho cha kulifanya upya." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaomaliza darasa la ana kwa ana la CPR, AED na huduma ya kwanza la Red Cross au AHA ndani ya siku 60 (utafiti wa kufuatilia, kadi imeonyeshwa)",
      "Wanafunzi wanaoorodhesha kadi halali ya CPR na huduma ya kwanza kwenye ombi la kazi au CV",
      "Mahali pa kazi na mashirika yasiyo ya faida katika programu yanayoripoti wafanyakazi na wajitolea zaidi wenye vyeti na mahali pa AED panapojulikana"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye intaneti kutazama masomo na vitafuta madarasa",
      "Karatasi na kalamu; mto mgumu au taulo iliyokunjwa kwa mazoezi ya kasi ya CPR; taulo kwa mazoezi ya kubonyeza",
      "Saa ya simu au saa ya ukutani",
      "Kama dakika 60 hadi 75 kwa jumla, katika vipindi vifupi"
    ],
    facilitatorNotes: [
      "Hii ni ufahamu tu. Sema mara nyingi kwamba haitoi cheti, na waelekeze wanafunzi kwenye darasa la ana kwa ana na mkufunzi aliyehitimu wa Red Cross au AHA.",
      "Usiwaruhusu kamwe wanafunzi kufanyiana mazoezi ya kubonyeza kifua, mapigo ya mgongoni au misukumo ya tumbo; tumieni mito au, kama mnayo, wanasesere wa mazoezi pamoja na mkufunzi aliyethibitishwa.",
      "Usitoe vipimo vya dawa wala ushauri wa kitabibu; peleka maswali ya afya kwa daktari au kwa mpokeaji simu wa 911.",
      "Baadhi ya wanafunzi huenda wamepitia dharura au wamefiwa; ruhusu mapumziko na waache watoke nje.",
      "Kwa vikundi vya nje ya Marekani, badilisha 911 kwa namba ya dharura ya nchi hiyo na watoaji mafunzo wa nchi hiyo (kwa mfano vyama vya kitaifa vya Msalaba Mwekundu au Hilali Nyekundu).",
      "Shirikiana na idara ya zimamoto, hospitali au tawi la Red Cross la eneo lako ili kutoa darasa la cheti mara tu baada ya kozi."
    ]
  }
};
