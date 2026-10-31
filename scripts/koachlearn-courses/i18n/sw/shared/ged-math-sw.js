"use strict";

// Koach Learn course (Swahili translation of shared/ged-math.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.
// The content stays about the US GED Math test; GED, HiSET, GED Ready, TI-30XS and ged.com are kept as written.
// Math is written exactly as in the English (x for times, ^ for powers, / for divide, a point for decimals) so it matches the test screen.

const GED_SUBJECTS = { name: "GED Testing Service: Masomo ya mtihani (Hesabu)", url: "https://www.ged.com/about-test/test-subjects.html" };
const GED_MATH = { name: "GED Testing Service: Mtihani wa Hesabu, karatasi ya kanuni na swali la mfano", url: "https://ged.com/about_test/test_subjects/math/" };
const GED_PRACTICE = { name: "GED Testing Service: Mitihani ya mfano ya bure na GED Ready", url: "https://www.ged.com/practice-test/" };
const GED_CALC = { name: "GED Testing Service: Karatasi ya maelezo ya kikokotoo TI-30XS (PDF)", url: "https://www.ged.com/wp-content/uploads/calculator_sheet.pdf" };
const HISET = { name: "HiSET: mtihani wa kulingana na diploma ya sekondari", url: "https://hiset.org/" };

module.exports = {
  id: "ged-math-sw",
  lang: "sw",
  translationOf: "ged-math",
  category: "Workforce Development",
  name: "Maandalizi ya Mtihani wa GED: Hesabu",
  skills: "Kuujua mtihani wa Hesabu wa GED na kupanga ratiba ya kusoma, Hesabu za namba bila kikokotoo, Uwiano, asilimia na data, Kutatua milinganyo na milinganyo isiyo sawa, Jiometri kwa karatasi ya kanuni, Mteremko, grafu na fanksheni",
  outcome: "kutatua aina kuu za maswali ya Hesabu ya GED (namba, asilimia na data, milinganyo, jiometri kwa karatasi ya kanuni, na grafu) na kufuata mpango wa kusoma na wa mtihani wenye tarehe unaokuandaa kufanya mtihani wa Hesabu wa GED.",
  about: [
    "Kozi hii ni kwa watu wazima wanaotafuta diploma inayolingana na ya shule ya sekondari (high school): vijana, watu wanaorudi nyumbani kutoka gerezani, wahamiaji, wanajeshi wastaafu na yeyote anayerudi kusoma. Diploma inafungua milango ya kazi, programu za mafunzo na chuo.",
    "Mtihani wa GED una masomo manne, na Hesabu (inaitwa Mathematical Reasoning) ni mojawapo. Unatolewa na GED Testing Service kwenye kompyuta. Mtihani wa hesabu una sehemu hizi: Hesabu za Msingi, Jiometri, Aljebra ya Msingi, na Grafu na Fanksheni. Unapewa karatasi ya kanuni, kwa hiyo huhitaji kukariri kanuni. Baadhi ya majimbo hutumia mtihani wa HiSET badala ya GED, au pamoja na GED; ofisi ya elimu ya watu wazima ya jimbo lako au ged.com itakuambia.",
    "Utajifunza jinsi mtihani wa hesabu unavyofanya kazi, kisha ufanye mazoezi ya kila aina ya swali kwa mifano iliyotatuliwa na maswali ya mazoezi yenye majibu yaliyoelezwa. Unamaliza na mpango wako mwenyewe wa kusoma na wa mtihani wenye tarehe.",
    "Kozi hii inakuandaa kwa mtihani; haikupi diploma ya GED. Ni kufaulu mtihani rasmi wa GED tu kunakoipa. Angalia ged.com kwa sheria za sasa za jimbo lako, gharama, kufanya mtihani kwenye kituo cha mtihani au mtandaoni, na mitihani rasmi ya mazoezi. Kila somo linachukua kama dakika sita, na jaribio fupi baada yake, jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Andaa mpango wako wa kusoma na wa mtihani wa Hesabu wa GED: fanya GED Math Sample Test ya bure kwenye ged.com na uandike matokeo yako; orodhesha mada 3 zilizo ngumu zaidi kwako kutokana nayo na kutokana na majaribio ya kozi hii; andika ratiba ya kusoma ya kila wiki yenye tarehe halisi kwa wiki 6 hadi 8 zijazo (mada gani, siku gani, kwa muda gani); tatua seti ya mazoezi ya maswali 12 (2 kutoka kila somo) na ueleze yale uliyokosea; na andika tarehe unazopanga kufanya mtihani rasmi wa mazoezi GED Ready na mtihani wa Hesabu wa GED, baada ya kuangalia sheria na gharama za jimbo lako kwenye ged.com.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima na vijana wasio na diploma ya shule ya sekondari: watu wanaorudi nyumbani kutoka gerezani, wahamiaji, wanajeshi wastaafu, wazazi na wafanyakazi wanaohitaji diploma kwa kazi, kupandishwa cheo au chuo. Wengi waliacha shule miaka mingi iliyopita; wengine walikuwa na uzoefu mbaya na hesabu.",
    startingPoint: "Wanaweza kujumlisha, kutoa, kuzidisha na kugawanya namba nzima, mara nyingi kwa kikokotoo. Wengi wamesahau sehemu (fractions), namba hasi na asilimia, na wanajua aljebra kidogo au hawajui kabisa. Wengi hawajaona muundo wa mtihani wa GED wala kikokotoo chake.",
    gap: "Mtihani wa Hesabu wa GED unauliza hesabu za namba, asilimia na data, aljebra, jiometri kwa karatasi ya kanuni, na grafu, kwa dakika 115 kwenye kompyuta. Wanafunzi wanahitaji kujua muundo wa mtihani, kufanya mazoezi ya kila aina ya swali kwa mifano iliyotatuliwa, na kufuata mpango wa kusoma ili wafanye mtihani wakiwa tayari. Kufaulu kunafungua kazi, mafunzo na chuo.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; kila neno la hesabu limeelezwa",
      "Vifaa: simu au kompyuta kwa mtihani wa mfano wa GED wa bure; karatasi na penseli kwa mazoezi",
      "Kikokotoo: fanya mazoezi kwa TI-30XS ikiwezekana, au kikokotoo cha kisayansi cha bure mtandaoni",
      "Muda: masomo ya dakika 5 hadi 6, pamoja na ratiba ya kusoma ya kila wiki anayoipanga mwanafunzi",
      "Sheria, gharama na njia za kufanya mtihani zinatofautiana kwa jimbo na zinaweza kubadilika: elekeza daima kwenye ged.com au ofisi ya jimbo",
      "Hofu ya hesabu: mifano mingi iliyotatuliwa, kukagua majibu, bila shinikizo la muda katika mazoezi"
    ],
    prerequisites: "Kujumlisha, kutoa, kuzidisha na kugawanya namba nzima. Wanafunzi wasio na uhakika na sehemu, desimali na asilimia wanaweza kuanza na kozi \"Hesabu za Kila Siku kwa Kazi na Maisha\"."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukitumia ged.com na GED Math Sample Test ya bure", action: "kuorodhesha sehemu za mtihani wa Hesabu wa GED, muda wake, sheria za kikokotoo na aina za maswali, na kuandika mpango wa kusoma na wa mtihani wenye tarehe", standard: "wenye ratiba ya kila wiki kwa wiki 6 hadi 8 na tarehe lengwa ya mtihani" },
    { id: "O2", condition: "Bila kikokotoo", action: "kutatua maswali ya mpangilio wa hatua za hesabu, sehemu, namba hasi, vipeo na vipeuo vya pili", standard: "ukipata angalau 4 kati ya 5 sahihi" },
    { id: "O3", condition: "Ukipewa maswali ya maneno na seti ndogo za data", action: "kutatua maswali ya uwiano, ulinganifu na asilimia na kupata wastani, kipimo cha kati, modi na masafa", standard: "ukipata angalau 4 kati ya 5 sahihi" },
    { id: "O4", condition: "Ukipewa swali la maneno au mlinganyo", action: "kuandika na kutatua milinganyo ya mstari yenye kigeu kimoja na milinganyo isiyo sawa", standard: "ukipata angalau 4 kati ya 5 sahihi na kukagua kila jibu kwa kulirudisha ndani ya swali" },
    { id: "O5", condition: "Ukitumia karatasi ya kanuni na kikokotoo", action: "kukokotoa mzingo, eneo, ujazo na upande unaokosekana wa pembetatu mraba", standard: "ukipata angalau 4 kati ya 5 sahihi, na vipimo sahihi" },
    { id: "O6", condition: "Ukipewa grafu, jedwali, nukta mbili au fanksheni", action: "kupata mteremko, kusoma thamani na kukokotoa thamani ya fanksheni", standard: "ukipata angalau 4 kati ya 5 sahihi" }
  ],
  chapters: [
    {
      name: "Sura 1: Mtihani, namba na data",
      lessons: [
        {
          title: "Mtihani wa Hesabu wa GED na mpango wako wa kusoma",
          objectives: ["O1"],
          minutes: 6,
          goal: "Eleza jinsi mtihani wa Hesabu wa GED unavyofanya kazi na uanze mpango wa kusoma wenye tarehe.",
          text: [
            "Mtihani wa GED una masomo manne: Hesabu, Kufikiri kupitia Lugha (Reasoning Through Language Arts), Sayansi na Masomo ya Jamii. Unaweza kuyafanya moja moja. Mtihani wa Hesabu unaitwa Mathematical Reasoning. Una sehemu nne: Hesabu za Msingi, Jiometri, Aljebra ya Msingi, na Grafu na Fanksheni.",
            "Kwa mujibu wa ged.com, mtihani wa Hesabu ni dakika 115, pamoja na muda wa maelekezo na wa kupitia majibu. Una sehemu, na mapumziko mafupi kati yake. Kikokotoo cha kwenye skrini kinatolewa katika sehemu ya 2; kwenye kituo cha mtihani unaweza kuleta kikokotoo chako mwenyewe cha TI-30XS. Baadhi ya maswali lazima yafanywe bila kikokotoo, kwa hiyo unahitaji pia hesabu za kichwani na za karatasi. Unapewa karatasi ya kanuni na karatasi ya maelezo ya kikokotoo, kwa hiyo huhitaji kukariri kanuni.",
            "Aina za maswali ni pamoja na kuchagua jibu moja (multiple choice), kuburuta na kuweka (drag and drop), kujaza nafasi, kuchagua eneo (kubofya kwenye grafu au picha) na kuchagua kutoka orodha (drop down). Angalia ged.com kabla ya mtihani, kwa sababu maelezo yanaweza kubadilika. Katika baadhi ya majimbo mtihani wa HiSET unatumika badala ya GED, au pamoja nao; jimbo lako ndilo linaloamua.",
            "Anza na GED Math Sample Test ya bure kwenye ged.com. Inakuonyesha skrini na aina za maswali. Itumie kupata mada zilizo ngumu kwako. Ukikaribia, mtihani rasmi wa mazoezi, GED Ready, unakuambia kama huenda uko tayari (angalia gharama yake kwenye ged.com). Kisha panga mpango wa kusoma: vipindi vifupi, siku kadhaa kwa wiki, mada moja kwa wakati."
          ],
          steps: ["Nenda ged.com na usome ukurasa wa mtihani wa Hesabu na sheria za jimbo lako.", "Fanya GED Math Sample Test ya bure na uandike matokeo yako.", "Orodhesha mada ulizoona ngumu.", "Chagua siku na saa za kusoma kwa wiki 6 hadi 8 zijazo, zenye tarehe halisi.", "Weka mada moja kwa kila siku ya kusoma, ukianza na iliyo ngumu zaidi.", "Chagua tarehe ya kufanya GED Ready, na tarehe lengwa ya mtihani halisi."],
          words: [["GED", "mtihani wa kulingana na diploma ya sekondari kutoka GED Testing Service; ukifaulu masomo yote manne unapata diploma inayolingana na ya shule ya sekondari."], ["HiSET", "mtihani mwingine wa kulingana na diploma ya sekondari unaotumika katika baadhi ya majimbo."], ["Karatasi ya kanuni", "ukurasa wa kanuni za hesabu (formula sheet) unaopewa wakati wa mtihani."], ["TI-30XS", "aina ya kikokotoo cha kisayansi kinachotumika katika mtihani wa Hesabu wa GED."], ["GED Ready", "mtihani rasmi wa mazoezi wa GED unaoonyesha kama huenda uko tayari."], ["Mpango wa kusoma", "ratiba iliyoandikwa ya utakachosoma na lini."]],
          slides: [
            { title: "Hesabu ya GED (Mathematical Reasoning)", bullets: ["Hesabu za Msingi, Jiometri, Aljebra ya Msingi, Grafu na Fanksheni", "Dakika 115, kwenye kompyuta, na mapumziko mafupi", "Karatasi ya kanuni na karatasi ya maelezo ya kikokotoo zinatolewa"] },
            { title: "Kikokotoo na aina za maswali", bullets: ["Kikokotoo cha skrini katika sehemu ya 2; au TI-30XS yako kwenye kituo cha mtihani", "Baadhi ya maswali bila kikokotoo", "Kuchagua jibu, kuburuta na kuweka, kujaza, kuchagua eneo, orodha"] },
            { title: "Mitihani ya mazoezi", bullets: ["GED Math Sample Test ya bure kwenye ged.com", "GED Ready: mtihani rasmi wa mazoezi (angalia gharama)", "Baadhi ya majimbo hutumia HiSET: angalia jimbo lako"] },
            { title: "Mpango wako wa kusoma", bullets: ["Anza na mada zilizo ngumu zaidi kwako", "Vipindi vifupi, siku kadhaa kwa wiki, tarehe halisi", "Chagua tarehe ya GED Ready na tarehe lengwa ya mtihani"] }
          ],
          tryIt: "Nenda ged.com na ufanye GED Math Sample Test ya bure. Andika matokeo yako na mada zilizokuwa ngumu. Kisha kwenye karatasi tengeneza kalenda ya wiki 6 hadi 8 zijazo: zungushia duara siku zako za kusoma, andika saa kwa kila moja, na weka mada yako ngumu zaidi siku ya kwanza. Huu ndio mwanzo wa kazi yako ya mwisho.",
          youCanNow: "kueleza mtihani wa Hesabu wa GED (sehemu, muda, kikokotoo, karatasi ya kanuni, aina za maswali) na kuanza mpango wa kusoma wenye tarehe.",
          quickCheck: [
            { objective: "O1", q: "Je, lazima ukariri kanuni kwa mtihani wa Hesabu wa GED?", options: ["Ndiyo, kila kanuni", "Hapana, karatasi ya kanuni inatolewa", "Zile tu zilizo nyuma ya kikokotoo", "Tu kama unafanya mtihani mtandaoni"], answer: 1, why: "GED Testing Service inatoa karatasi ya kanuni wakati wa mtihani." },
            { objective: "O1", q: "Uangalie wapi sheria na gharama za sasa za GED za jimbo lako?", options: ["Ujumbe kwenye mitandao ya kijamii", "Rafiki aliyefanya mtihani miaka mingi iliyopita", "ged.com au ofisi ya elimu ya watu wazima ya jimbo lako", "Kozi hii tu"], answer: 2, why: "Sheria na gharama hubadilika na zinatofautiana kwa jimbo; tovuti rasmi ndiyo chanzo." }
          ],
          sources: [GED_SUBJECTS, GED_PRACTICE, HISET]
        },
        {
          title: "Hesabu za namba bila kikokotoo",
          objectives: ["O2"],
          minutes: 6,
          goal: "Tatua kwa mkono maswali ya mpangilio wa hatua, sehemu, namba hasi, vipeo na vipeuo vya pili.",
          text: [
            "Mpangilio wa hatua: fanya kwanza ndani ya Mabano (Parentheses), kisha Vipeo (Exponents), kisha Kuzidisha na Kugawanya kutoka kushoto kwenda kulia, kisha Kujumlisha na Kutoa kutoka kushoto kwenda kulia. Watu wengine hukumbuka kwa neno PEMDAS. Mfano: 3 + 4 x (6 - 2)^2 / 8. Mabano: 6 - 2 = 4. Kipeo: 4^2 = 16. Zidisha na gawanya kutoka kushoto kwenda kulia: 4 x 16 = 64, 64 / 8 = 8. Jumlisha: 3 + 8 = 11.",
            "Sehemu (fractions): kuzidisha, zidisha juu kwa juu na chini kwa chini: 2/3 x 3/4 = 6/12 = 1/2. Kugawanya, geuza sehemu ya pili kisha uzidishe: 3/4 / 1/2 = 3/4 x 2/1 = 6/4 = 1 1/2. Kulinganisha sehemu na desimali, zibadilishe zote kuwa desimali: 2/3 ni kama 0.667, kwa hiyo kuanzia ndogo zaidi: 0.65, 2/3, 0.7.",
            "Namba hasi: -5 + 8 = 3. Kutoa namba hasi ni kujumlisha: 6 - (-2) = 8. Hasi mara hasi ni chanya: -3 x -4 = 12; hasi mara chanya ni hasi: -3 x 4 = -12. Kwenye mstari wa namba, namba zinakuwa kubwa zaidi kuelekea kulia.",
            "Vipeo na vipeuo: 2^5 maana yake 2 x 2 x 2 x 2 x 2 = 32. Kipeuo cha pili (square root) kinarudisha nyuma kuzidisha namba kwa yenyewe: kipeuo cha pili cha 49 ni 7, kwa sababu 7 x 7 = 49. Kipeuo cha pili cha 50 ni zaidi kidogo ya 7, kwa sababu 50 iko kati ya 49 na 64."
          ],
          steps: ["Mabano kwanza.", "Kisha vipeo na vipeuo.", "Kisha zidisha na gawanya, kutoka kushoto kwenda kulia.", "Kisha jumlisha na toa, kutoka kushoto kwenda kulia.", "Sehemu: zidisha moja kwa moja; kugawanya, geuza ya pili kisha zidisha.", "Alama: alama zinazofanana zikizidishwa zinatoa chanya, tofauti zinatoa hasi."],
          words: [["Mpangilio wa hatua", "mpangilio uliokubaliwa wa kufanya hatua za hesabu (order of operations): mabano, vipeo, kuzidisha na kugawanya, kujumlisha na kutoa."], ["Kipeo", "namba ndogo iliyoinuliwa (exponent) inayosema mara ngapi uzidishe namba kwa yenyewe: 2^3 = 2 x 2 x 2."], ["Kipeuo cha pili", "namba ambayo ikizidishwa kwa yenyewe inatoa namba hiyo (square root): kipeuo cha pili cha 25 ni 5."], ["Namba hasi", "namba iliyo chini ya sifuri, kama -4."], ["Mstari wa namba", "mstari wenye namba kwa mpangilio; namba zinakuwa kubwa zaidi kuelekea kulia."]],
          slides: [
            { title: "Mpangilio wa hatua", bullets: ["Mabano, Vipeo", "Kuzidisha na Kugawanya, kushoto kwenda kulia", "Kujumlisha na Kutoa, kushoto kwenda kulia", "3 + 4 x (6 - 2)^2 / 8 = 11"] },
            { title: "Sehemu", bullets: ["Kuzidisha: 2/3 x 3/4 = 6/12 = 1/2", "Kugawanya: geuza kisha zidisha: 3/4 / 1/2 = 1 1/2", "Kulinganisha: badilisha kuwa desimali"] },
            { title: "Namba hasi", bullets: ["-5 + 8 = 3", "6 - (-2) = 8", "-3 x -4 = 12; -3 x 4 = -12"] },
            { title: "Vipeo na vipeuo", bullets: ["2^5 = 32", "Kipeuo cha pili cha 49 = 7", "Kipeuo cha pili cha 50 ni zaidi kidogo ya 7"] }
          ],
          tryIt: "Fanya mazoezi bila kikokotoo (majibu yako chini): (1) 10 - 2 x 3 + 4. (2) 5/6 x 3/5. (3) 2/3 / 4/9. (4) -7 - (-10). (5) 3^3 - kipeuo cha pili cha 16. Majibu: (1) 10 - 6 + 4 = 8 (zidisha kwanza). (2) 15/30 = 1/2. (3) 2/3 x 9/4 = 18/12 = 1 1/2. (4) -7 + 10 = 3. (5) 27 - 4 = 23. Kwa lolote ulilokosea, tafuta hatua ambapo ulikosea na uandike kanuni unayohitaji.",
          youCanNow: "kufanya kwa mkono mpangilio wa hatua, sehemu, namba hasi, vipeo na vipeuo vya pili.",
          quickCheck: [
            { objective: "O2", q: "8 + 12 / 4 ni ngapi?", options: ["5", "20", "14", "11"], answer: 3, why: "Gawanya kabla ya kujumlisha: 12 / 4 = 3, kisha 8 + 3 = 11." },
            { objective: "O2", q: "-6 x -5 ni ngapi?", options: ["30", "-30", "-11", "11"], answer: 0, why: "Hasi mara hasi ni chanya: 30." }
          ],
          sources: [GED_MATH]
        },
        {
          title: "Uwiano, ulinganifu, asilimia na data",
          objectives: ["O3"],
          minutes: 6,
          goal: "Tatua maswali ya uwiano, ulinganifu na asilimia na upate wastani, kipimo cha kati, modi na masafa.",
          text: [
            "Uwiano unalinganisha viwango viwili: vikombe 3 vya unga kwa kila vikombe 2 vya sukari ni 3:2. Ulinganifu (proportion) unasema uwiano miwili ni sawa. Kuutatua, zidisha kwa mkingamo. Mfano: vikombe 3 vya unga vinatengeneza biskuti 24. Kiasi gani kwa biskuti 40? 3/24 = x/40, kwa hiyo 24x = 120 na x = vikombe 5.",
            "Maswali matatu ya asilimia: (1) 35% ya 80 ni ngapi? 0.35 x 80 = 28. (2) 18 ni asilimia ngapi ya 72? 18 / 72 = 0.25 = 25%. (3) Mabadiliko ya asilimia: bei inapanda kutoka $40 hadi $50. Mabadiliko ni $10, na 10 / 40 = 0.25, kwa hiyo ilipanda 25%. Daima gawanya mabadiliko kwa kiasi cha MWANZO.",
            "Data: kwa namba 4, 7, 7, 9, 13, wastani (mean) ni jumla ikigawanywa kwa idadi ya namba: 40 / 5 = 8. Kipimo cha kati (median) ni namba ya katikati zikiwa kwa mpangilio: 7. Modi (mode) ni namba inayojitokeza mara nyingi zaidi: 7. Masafa (range) ni kubwa zaidi toa ndogo zaidi: 13 - 4 = 9. Kama kuna namba mbili za katikati, kipimo cha kati ni nusu kati yake.",
            "Uwezekano (probability) ni nafasi ya jambo kutokea: idadi ya njia linavyoweza kutokea / idadi yote ya matokeo. Mfuko una gololi 3 nyekundu na 9 za bluu: nafasi ya nyekundu ni 3/12 = 1/4, au 25%."
          ],
          steps: ["Ulinganifu: andika sehemu mbili zilizo sawa zenye vipimo vile vile mahali pale pale, kisha zidisha kwa mkingamo na gawanya.", "Asilimia ya namba: badilisha asilimia kuwa desimali na uzidishe.", "Asilimia ngapi: sehemu / jumla, kisha badilisha kuwa asilimia.", "Mabadiliko ya asilimia: mabadiliko / kiasi cha mwanzo.", "Wastani: jumlisha, kisha gawanya kwa idadi. Kipimo cha kati: panga kwa mpangilio, tafuta ya katikati.", "Modi: inayojitokeza zaidi. Masafa: kubwa zaidi toa ndogo zaidi."],
          words: [["Uwiano", "ulinganisho wa viwango viwili (ratio), kama 3:2."], ["Ulinganifu", "uwiano miwili iliyo sawa (proportion), kama 3/24 = 5/40."], ["Kuzidisha kwa mkingamo", "kuzidisha juu ya kila sehemu kwa chini ya nyingine (cross-multiply) ili kutatua ulinganifu."], ["Wastani", "mean: jumlisha namba na ugawanye kwa idadi yake."], ["Kipimo cha kati", "median: namba ya katikati namba zikiwa kwa mpangilio."], ["Modi", "mode: namba inayojitokeza mara nyingi zaidi."], ["Masafa", "range: namba kubwa zaidi toa ndogo zaidi."], ["Uwezekano", "probability: nafasi ya jambo kutokea, kutoka 0 (kamwe) hadi 1 (daima)."]],
          slides: [
            { title: "Uwiano na ulinganifu", bullets: ["Vikombe 3 kwa biskuti 24; vikombe x kwa 40", "3/24 = x/40, kwa hiyo 24x = 120", "x = vikombe 5"] },
            { title: "Maswali matatu ya asilimia", bullets: ["35% ya 80 = 0.35 x 80 = 28", "18 kati ya 72 = 18 / 72 = 25%", "$40 hadi $50: 10 / 40 = ongezeko la 25%"] },
            { title: "Data: 4, 7, 7, 9, 13", bullets: ["Wastani: 40 / 5 = 8", "Kipimo cha kati: 7; Modi: 7", "Masafa: 13 - 4 = 9"] },
            { title: "Uwezekano", bullets: ["Njia linavyoweza kutokea / matokeo yote", "Gololi 3 nyekundu kati ya 12: 3/12 = 1/4 = 25%"] }
          ],
          tryIt: "Mazoezi (majibu yako chini): (1) Kipimo cha ramani ni inchi 1 : maili 20. Inchi 3.5 ni maili ngapi? (2) 15% ya 260 ni ngapi? (3) Simu ya $250 sasa ni $200. Punguzo la asilimia ni ngapi? (4) Tafuta wastani, kipimo cha kati, modi na masafa ya 12, 15, 15, 18, 20, 22. Majibu: (1) maili 70. (2) 39. (3) 50 / 250 = punguzo la 20%. (4) Wastani 102 / 6 = 17; kipimo cha kati ni nusu kati ya 15 na 18 = 16.5; modi 15; masafa 10.",
          youCanNow: "kutatua ulinganifu na aina tatu za maswali ya asilimia, na kueleza seti ya data kwa wastani, kipimo cha kati, modi na masafa.",
          quickCheck: [
            { objective: "O3", q: "Kipimo cha kati cha 3, 9, 4, 8, 6 ni kipi?", options: ["4", "9", "6", "30"], answer: 2, why: "Kwa mpangilio: 3, 4, 6, 8, 9. Namba ya katikati ni 6." },
            { objective: "O3", q: "Bidhaa ya $60 inapanda hadi $75. Ongezeko la asilimia ni ngapi?", options: ["15%", "20%", "80%", "25%"], answer: 3, why: "Mabadiliko ni 15, na 15 / 60 = 0.25 = 25%." }
          ],
          sources: [GED_SUBJECTS]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Mtihani, namba na data",
        questions: [
          { objective: "O1", q: "Ipi ni mojawapo ya sehemu nne za mtihani wa Hesabu wa GED?", options: ["Tahajia", "Grafu na Fanksheni", "Historia ya dunia", "Kasi ya kuchapa"], answer: 1, why: "Mtihani wa hesabu una Hesabu za Msingi, Jiometri, Aljebra ya Msingi, na Grafu na Fanksheni." },
          { objective: "O2", q: "2 + 3 x 4^2 ni ngapi?", options: ["50", "80", "26", "400"], answer: 0, why: "Kipeo kwanza: 16. Zidisha: 48. Jumlisha: 50." },
          { objective: "O2", q: "3/4 / 3/8 ni ngapi?", options: ["9/32", "1/2", "3/8", "2"], answer: 3, why: "Geuza kisha zidisha: 3/4 x 8/3 = 24/12 = 2." },
          { objective: "O3", q: "Wafanyakazi 5 wanaweza kupakia masanduku 40 kwa saa. Kwa kasi ile ile, wafanyakazi 8 wanaweza kupakia masanduku mangapi?", options: ["43", "50", "64", "80"], answer: 2, why: "40/5 = x/8, kwa hiyo 5x = 320 na x = 64." },
          { objective: "O3", q: "Wastani wa 10, 14, 15 na 21 ni upi?", options: ["15", "14.5", "11", "60"], answer: 0, why: "Jumla ni 60, ikigawanywa kwa namba 4, ni 15." }
        ]
      }
    },
    {
      name: "Sura 2: Aljebra, jiometri na grafu",
      lessons: [
        {
          title: "Kutatua milinganyo na milinganyo isiyo sawa",
          objectives: ["O4"],
          minutes: 6,
          goal: "Andika na utatue milinganyo yenye kigeu kimoja na milinganyo isiyo sawa, na ukague kila jibu.",
          text: [
            "Kigeu (variable) ni herufi, kama x, inayosimama badala ya namba isiyojulikana. Maneno yanageuka kuwa hesabu: \"5 zaidi ya mara mbili ya namba\" ni 2x + 5. \"Namba ikipunguzwa kwa 7\" ni x - 7. \"Zao la 4 na namba\" ni 4x.",
            "Kutatua mlinganyo, fanya jambo lile lile pande zote mbili hadi x ibaki peke yake. Ondoa kujumlisha au kutoa kwanza, kisha kuzidisha au kugawanya. Mfano: 3x - 7 = 20. Jumlisha 7: 3x = 27. Gawanya kwa 3: x = 9. Kagua: 3 x 9 - 7 = 20. Ndiyo. Mfano wenye mabano: 2(x + 4) = 18. Gawanya kwa 2: x + 4 = 9, kwa hiyo x = 5.",
            "Swali la maneno: kifurushi cha simu kinagharimu $25 kwa mwezi pamoja na $0.10 kwa kila ujumbe mfupi. Bili ilikuwa $32. Ujumbe mingapi? 25 + 0.10t = 32. Toa 25: 0.10t = 7. Gawanya kwa 0.10: t = ujumbe 70.",
            "Milinganyo isiyo sawa (inequalities) inatumia <, >, <= au >= na inatatuliwa kwa njia ile ile, na kanuni moja: unapozidisha au kugawanya pande zote mbili kwa namba hasi, geuza alama. 4x + 3 > 19 inatoa 4x > 16, kwa hiyo x > 4. Lakini -2x <= 10 inatoa x >= -5. Katika maswali ya kuchagua jibu, unaweza pia kukagua kwa kurudisha kila jibu ndani ya swali."
          ],
          steps: ["Geuza maneno kuwa mlinganyo wenye herufi badala ya namba isiyojulikana.", "Ondoa kujumlisha au kutoa pande zote mbili.", "Ondoa kuzidisha au kugawanya pande zote mbili.", "Mlinganyo usio sawa: geuza alama ukizidisha au kugawanya kwa namba hasi.", "Kagua: rudisha jibu lako ndani ya swali la mwanzo."],
          words: [["Kigeu", "herufi inayosimama badala ya namba isiyojulikana (variable)."], ["Usemi", "namba, herufi na hatua za hesabu bila alama ya sawa (expression), kama 2x + 5."], ["Mlinganyo", "sentensi ya hesabu yenye alama ya sawa (equation), kama 3x - 7 = 20."], ["Mlinganyo usio sawa", "sentensi ya hesabu inayotumia <, >, <= au >= badala ya alama ya sawa (inequality)."], ["Kutatua", "kupata thamani ya kigeu inayofanya sentensi kuwa kweli."]],
          slides: [
            { title: "Maneno kuwa hesabu", bullets: ["5 zaidi ya mara mbili ya namba: 2x + 5", "Namba ikipunguzwa kwa 7: x - 7", "Zao la 4 na namba: 4x"] },
            { title: "Kutatua mlinganyo", bullets: ["3x - 7 = 20", "Jumlisha 7: 3x = 27; gawanya kwa 3: x = 9", "Kagua: 3 x 9 - 7 = 20"] },
            { title: "Swali la maneno", bullets: ["$25 kwa mwezi + $0.10 kwa ujumbe = $32", "25 + 0.10t = 32, kwa hiyo 0.10t = 7", "t = ujumbe 70"] },
            { title: "Milinganyo isiyo sawa", bullets: ["Tatua kama mlinganyo", "Ukizidisha au kugawanya kwa namba hasi: geuza alama", "-2x <= 10 inatoa x >= -5"] }
          ],
          tryIt: "Mazoezi (majibu yako chini): (1) Andika \"8 pungufu ya mara 3 ya namba\" kama usemi. (2) Tatua 5x + 6 = 41. (3) Tatua 4(x - 2) = 28. (4) Teksi inatoza $3 pamoja na $2 kwa maili. Safari iligharimu $19. Maili ngapi? (5) Tatua -3x + 1 > 13. Majibu: (1) 3x - 8. (2) 5x = 35, x = 7. (3) x - 2 = 7, x = 9. (4) 3 + 2m = 19, m = maili 8. (5) -3x > 12, kwa hiyo x < -4 (geuza alama). Kagua kila jibu kwa kulirudisha ndani ya swali.",
          youCanNow: "kugeuza maneno kuwa milinganyo, kutatua milinganyo na milinganyo isiyo sawa, na kukagua majibu yako.",
          quickCheck: [
            { objective: "O4", q: "Tatua: x / 4 + 3 = 8", options: ["x = 44", "x = 5", "x = 20", "x = 1.25"], answer: 2, why: "Toa 3: x / 4 = 5. Zidisha kwa 4: x = 20." },
            { objective: "O4", q: "Tatua: -5x < 20", options: ["x > -4", "x < -4", "x < 4", "x > 4"], answer: 0, why: "Gawanya kwa -5 na ugeuze alama: x > -4." }
          ],
          sources: [GED_SUBJECTS]
        },
        {
          title: "Jiometri kwa karatasi ya kanuni na kikokotoo",
          objectives: ["O5"],
          minutes: 6,
          goal: "Kokotoa mzingo, eneo, ujazo na upande unaokosekana wa pembetatu mraba ukitumia karatasi ya kanuni na kikokotoo.",
          text: [
            "Mzingo (perimeter) ni umbali wa kuzunguka umbo; jumlisha pande. Eneo (area) ni nafasi iliyo ndani, kwa vipimo vya mraba. Ujazo (volume) ni nafasi iliyo ndani ya kitu cha 3-D, kwa vipimo vya ujazo. Mstatili wa futi 8 kwa futi 5 una mzingo 2 x (8 + 5) = futi 26 na eneo 8 x 5 = futi za mraba 40. Pembetatu yenye kitako 10 na kimo 6 ina eneo 1/2 x 10 x 6 = 30.",
            "Duara zinatumia pi, karibu 3.14 (kikokotoo kina kitufe cha pi). Kwa duara lenye nusu kipenyo (radius) 3: eneo = pi x r^2 = karibu vipimo vya mraba 28.27; mzunguko (circumference) = 2 x pi x r = karibu 18.85. Kipenyo (diameter) ni mara mbili ya nusu kipenyo, kwa hiyo soma kwa makini swali linakupa kipi.",
            "Ujazo: sanduku la 4 kwa 3 kwa 2 lina ujazo 4 x 3 x 2 = vipimo vya ujazo 24. Silinda yenye nusu kipenyo 2 na kimo 5 ina ujazo pi x r^2 x h = pi x 4 x 5 = karibu vipimo vya ujazo 62.83.",
            "Pembetatu mraba: a^2 + b^2 = c^2 (nadharia ya Pythagoras), ambapo c ni upande mrefu zaidi, unaotazamana na kona ya mraba. Kama pande mbili fupi ni 6 na 8, c^2 = 36 + 64 = 100, kwa hiyo c = 10. Unapewa karatasi ya kanuni kwenye mtihani: fanya mazoezi kwa karatasi ya sasa kutoka ged.com ili ujue kila kanuni iko wapi. Kwenye TI-30XS, tumia kitufe cha (-) kwa namba hasi na kitufe cha x^2 kwa kipeo cha pili; karatasi ya maelezo ya kikokotoo ya GED inaonyesha vitufe."
          ],
          steps: ["Chora umbo na uandike unachojua.", "Amua: mzingo (kuzunguka), eneo (ndani, bapa) au ujazo (ndani, 3-D)?", "Tafuta kanuni kwenye karatasi ya kanuni.", "Weka namba na utumie kikokotoo.", "Andika vipimo: futi, futi za mraba au futi za ujazo.", "Jiulize: je, jibu linaeleweka kwa picha hii?"],
          words: [["Mzingo", "umbali wa kuzunguka umbo bapa (perimeter)."], ["Eneo", "nafasi iliyo ndani ya umbo bapa (area), kwa vipimo vya mraba."], ["Ujazo", "nafasi iliyo ndani ya kitu cha 3-D (volume), kwa vipimo vya ujazo."], ["Nusu kipenyo", "umbali kutoka katikati ya duara hadi ukingo wake (radius); kipenyo ni mara mbili ya nusu kipenyo."], ["Pi", "namba karibu 3.14 inayotumika na duara."], ["Nadharia ya Pythagoras", "kwa pembetatu mraba, a^2 + b^2 = c^2, ambapo c ni upande mrefu zaidi."]],
          slides: [
            { title: "Mzingo, eneo, ujazo", bullets: ["Mzingo: kuzunguka, kwa vipimo", "Eneo: ndani ya umbo bapa, vipimo vya mraba", "Ujazo: ndani ya kitu cha 3-D, vipimo vya ujazo"] },
            { title: "Mistatili na pembetatu", bullets: ["Mstatili wa 8 kwa 5: mzingo 26, eneo 40", "Pembetatu: 1/2 x kitako x kimo", "Kitako 10, kimo 6: eneo 30"] },
            { title: "Duara na silinda", bullets: ["Eneo = pi x r^2; nusu kipenyo 3: karibu 28.27", "Mzunguko = 2 x pi x r", "Ujazo wa silinda = pi x r^2 x h"] },
            { title: "Pembetatu mraba", bullets: ["a^2 + b^2 = c^2", "Pande fupi 6 na 8: c = 10", "Fanya mazoezi kwa karatasi ya kanuni ya sasa kutoka ged.com"] }
          ],
          tryIt: "Mazoezi kwa kikokotoo na karatasi ya kanuni kutoka ged.com (majibu yako chini): (1) Eneo na mzingo wa mstatili wa m 12 kwa m 7. (2) Eneo la duara lenye kipenyo cha inchi 10. (3) Ujazo wa sanduku la futi 6 kwa futi 2 kwa futi 3. (4) Ngazi ya futi 13 imeegemea ukuta na mguu wake uko futi 5 kutoka ukutani. Inafika juu kiasi gani ukutani? Majibu: (1) eneo mita za mraba 84, mzingo m 38. (2) nusu kipenyo 5, eneo karibu inchi za mraba 78.54. (3) futi za ujazo 36. (4) 5^2 + b^2 = 13^2, kwa hiyo b^2 = 169 - 25 = 144, b = futi 12.",
          youCanNow: "kupata mzingo, eneo, ujazo na upande unaokosekana wa pembetatu mraba, kwa vipimo sahihi.",
          quickCheck: [
            { objective: "O5", q: "Chumba ni futi 14 kwa futi 10. Eneo lake ni lipi?", options: ["Futi za mraba 24", "Futi 48", "Futi za ujazo 140", "Futi za mraba 140"], answer: 3, why: "Eneo = urefu x upana = 140, kwa futi za mraba." },
            { objective: "O5", q: "Pembetatu mraba ina pande fupi 9 na 12. Upande mrefu zaidi una urefu gani?", options: ["21", "15", "225", "108"], answer: 1, why: "81 + 144 = 225, na kipeuo cha pili cha 225 ni 15." }
          ],
          sources: [GED_MATH, GED_CALC]
        },
        {
          title: "Mteremko, grafu na fanksheni",
          objectives: ["O6", "O1"],
          minutes: 6,
          goal: "Pata mteremko, soma grafu na majedwali, kokotoa fanksheni, na umalize mpango wako wa kusoma na wa mtihani.",
          text: [
            "Gridi ya kuratibu ina mhimili wa x (kwenda kando) na mhimili wa y (juu na chini). Nukta inaandikwa (x, y): (3, 5) maana yake 3 kando, 5 juu. Mteremko (slope) unaonyesha jinsi mstari ulivyo mkali: kupanda juu ya kwenda kando, au (y2 - y1) / (x2 - x1). Kutoka (1, 3) hadi (4, 9): (9 - 3) / (4 - 1) = 6 / 3 = 2. Mstari unaopanda kutoka kushoto kwenda kulia una mteremko chanya; unaoshuka, mteremko hasi.",
            "Mstari unaweza kuandikwa y = mx + b, ambapo m ni mteremko na b ni mahali mstari unapokata mhimili wa y. Kutoka jedwali ambapo x = 0, 1, 2 inatoa y = 5, 8, 11, y inaongezeka 3 kila mara, kwa hiyo m = 3, na x ikiwa 0, y = 5, kwa hiyo b = 5: y = 3x + 5.",
            "Fanksheni (function) inatoa jibu moja kwa kila namba unayoiingiza. f(x) = x^2 - 3x maana yake: chukua namba, izidishe kwa yenyewe, toa mara 3 ya namba hiyo. f(4) = 16 - 12 = 4. Kwenye grafu, pata thamani kwa kwenda kando hadi x unayotaka, kisha juu au chini hadi kwenye mstari, kisha kando kusoma y.",
            "Maliza mpango wako. Angalia alama zako katika majaribio mafupi, majaribio ya maarifa na mtihani wa mfano. Weka mada zako 3 zilizo ngumu zaidi kwanza katika ratiba yako ya kila wiki, ongeza siku za kurudia, na uchague tarehe za GED Ready na mtihani halisi, baada ya kuangalia sheria za jimbo lako kwenye ged.com."
          ],
          steps: ["Mteremko: toa thamani za y, toa thamani za x kwa mpangilio ule ule, gawanya.", "y = mx + b: m ni mteremko, b ni thamani ya y x ikiwa 0.", "Kutoka jedwali: kiasi y kinachobadilika kila x inapoongezeka kwa 1 ndio mteremko.", "Fanksheni: weka namba mahali pa x na ufuate mpangilio wa hatua.", "Mpango: mada ngumu zaidi kwanza, tarehe halisi, GED Ready kabla ya mtihani halisi."],
          words: [["Gridi ya kuratibu", "gridi yenye mhimili wa x na mhimili wa y kwa kuweka nukta (coordinate grid)."], ["Jozi iliyopangwa", "nukta inayoandikwa (x, y) (ordered pair)."], ["Mteremko", "jinsi mstari ulivyo mkali (slope): kupanda kugawanywa kwa kwenda kando."], ["Mkato wa y", "mahali mstari unapokata mhimili wa y (y-intercept); b katika y = mx + b."], ["Fanksheni", "kanuni inayotoa jibu moja tu kwa kila namba unayoiingiza (function), kama f(x) = 2x + 1."]],
          slides: [
            { title: "Mteremko = kupanda / kwenda kando", bullets: ["(y2 - y1) / (x2 - x1)", "(1, 3) hadi (4, 9): 6 / 3 = 2", "Unapanda kushoto kwenda kulia: chanya; unashuka: hasi"] },
            { title: "y = mx + b", bullets: ["m: mteremko; b: mahali unapokata mhimili wa y", "Jedwali x = 0, 1, 2 inatoa y = 5, 8, 11", "Kwa hiyo y = 3x + 5"] },
            { title: "Fanksheni", bullets: ["f(x) = x^2 - 3x", "f(4) = 16 - 12 = 4", "Grafu: nenda kwenye x, tafuta mstari, soma y"] },
            { title: "Maliza mpango wako", bullets: ["Mada 3 ngumu zaidi kwanza", "Tarehe halisi, siku za kurudia", "Tarehe ya GED Ready, kisha tarehe ya mtihani wako"] }
          ],
          tryIt: "Mazoezi (majibu yako chini): (1) Pata mteremko kutoka (2, 1) hadi (6, 9). (2) Andika mlinganyo wa mstari wenye mteremko -2 unaokata mhimili wa y kwenye 7. (3) Kama f(x) = 3x - 4, pata f(5). (4) Jedwali lina x = 0, 1, 2 na y = 10, 7, 4. Mteremko ni upi? Majibu: (1) 8 / 4 = 2. (2) y = -2x + 7. (3) 15 - 4 = 11. (4) y inashuka 3 kila mara, kwa hiyo -3. Kisha maliza kazi yako ya mwisho: ratiba yako ya kila wiki yenye tarehe, seti yako ya mazoezi ya maswali 12 na maelezo ya uliyokosea, na tarehe zako za GED Ready na mtihani.",
          youCanNow: "kupata mteremko, kuandika y = mx + b, kusoma grafu na majedwali, kukokotoa fanksheni, na kufuata mpango wa kusoma na wa mtihani wa Hesabu wa GED wenye tarehe.",
          quickCheck: [
            { objective: "O6", q: "Mteremko kutoka (0, 2) hadi (3, 11) ni upi?", options: ["2", "9", "1/3", "3"], answer: 3, why: "(11 - 2) / (3 - 0) = 9 / 3 = 3." },
            { objective: "O6", q: "Kama f(x) = 2x + 1, f(6) ni ngapi?", options: ["9", "13", "8", "12"], answer: 1, why: "2 x 6 + 1 = 13." }
          ],
          sources: [GED_SUBJECTS, GED_PRACTICE]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Aljebra, jiometri na grafu",
        questions: [
          { objective: "O4", q: "Mlinganyo upi unalingana na \"Mara mbili ya namba jumlisha 9 ni 25\"?", options: ["2 + x + 9 = 25", "2(x + 9) = 25", "2x + 9 = 25", "x + 9 = 2 x 25"], answer: 2, why: "Mara mbili ya namba ni 2x, jumlisha 9, ni sawa na 25." },
          { objective: "O4", q: "Tatua: 7x - 4 = 31", options: ["x = 5", "x = 27", "x = 3.9", "x = 35"], answer: 0, why: "Jumlisha 4: 7x = 35. Gawanya kwa 7: x = 5." },
          { objective: "O5", q: "Ujazo wa sanduku la inchi 5 kwa 4 kwa 2 ni upi?", options: ["Inchi za ujazo 11", "Inchi za mraba 20", "Inchi 22", "Inchi za ujazo 40"], answer: 3, why: "Ujazo = 5 x 4 x 2 = inchi za ujazo 40." },
          { objective: "O5", q: "Duara lina nusu kipenyo 7. Mzunguko wake ni karibu kiasi gani?", options: ["21.99", "43.98", "153.94", "49"], answer: 1, why: "2 x pi x 7 ni karibu 43.98." },
          { objective: "O6", q: "Katika y = 4x - 2, mteremko ni upi?", options: ["-2", "2", "4", "x"], answer: 2, why: "Katika y = mx + b, m ni mteremko, kwa hiyo ni 4." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Maandalizi ya Mtihani wa GED: Hesabu",
    questions: [
      { objective: "O1", q: "Mtihani wa Hesabu wa GED ni wa muda gani, kwa mujibu wa ged.com?", options: ["Dakika 30", "Dakika 115", "Saa 3", "Hakuna kikomo cha muda"], answer: 1, why: "ged.com inasema mtihani wa Hesabu ni dakika 115, pamoja na maelekezo na kupitia majibu." },
      { objective: "O1", q: "Zana gani ya bure inakuonyesha skrini ya mtihani wa Hesabu wa GED na aina za maswali?", options: ["GED Math Sample Test kwenye ged.com", "App yoyote ya maswali", "Mchezo wa video", "Hakuna"], answer: 0, why: "ged.com inatoa mtihani wa mfano wa Hesabu wa bure." },
      { objective: "O1", q: "Ni aina gani ya kikokotoo unaweza kuleta kwenye kituo cha mtihani wa GED?", options: ["Simu yoyote", "Kikokotoo cha grafu", "Kikokotoo hakiruhusiwi kamwe", "TI-30XS"], answer: 3, why: "ged.com inasema unaweza kuleta TI-30XS yako mwenyewe; cha kwenye skrini kinatolewa katika sehemu ya 2." },
      { objective: "O1", q: "Jimbo lako linatumia HiSET. Hiyo inamaanisha nini?", options: ["Huwezi kupata diploma", "Lazima uhamie jimbo jingine", "HiSET ni mtihani mwingine wa kulingana na diploma ya sekondari unaotumiwa na jimbo lako; angalia sheria zake", "Unafanya mtihani wa hesabu tu"], answer: 2, why: "Baadhi ya majimbo hutumia HiSET badala ya GED, au pamoja nao." },
      { objective: "O2", q: "20 - 4 x 3 + 2 ni ngapi?", options: ["50", "10", "6", "18"], answer: 1, why: "Zidisha kwanza: 12. Kisha 20 - 12 + 2 = 10." },
      { objective: "O2", q: "4/5 x 5/8 ni ngapi?", options: ["1/2", "9/13", "20/13", "32/25"], answer: 0, why: "20/40 = 1/2." },
      { objective: "O2", q: "Namba ipi iko kati ya 8 na 9?", options: ["Kipeuo cha pili cha 60", "Kipeuo cha pili cha 100", "Kipeuo cha pili cha 70", "Kipeuo cha pili cha 81"], answer: 2, why: "64 < 70 < 81, kwa hiyo kipeuo cha pili cha 70 kiko kati ya 8 na 9." },
      { objective: "O3", q: "40% ya 150 ni ngapi?", options: ["40", "6", "110", "60"], answer: 3, why: "0.40 x 150 = 60." },
      { objective: "O3", q: "Mapishi yanatumia vikombe 2 vya mchele kwa watu 6. Vikombe vingapi kwa watu 15?", options: ["5", "4", "7.5", "45"], answer: 0, why: "2/6 = x/15, kwa hiyo 6x = 30 na x = 5." },
      { objective: "O3", q: "Masafa ya 5, 12, 3, 9, 20 ni yapi?", options: ["9", "17", "49", "20"], answer: 1, why: "Kubwa zaidi toa ndogo zaidi: 20 - 3 = 17." },
      { objective: "O3", q: "Mfuko una gololi 4 za kijani na 6 za njano. Nafasi ya kuchagua ya kijani ni ipi?", options: ["4/6", "1/4", "2/5", "6/10"], answer: 2, why: "Za kijani 4 kati ya 10 kwa jumla = 4/10 = 2/5." },
      { objective: "O4", q: "Tatua: 6x + 5 = 47", options: ["x = 8.67", "x = 6", "x = 42", "x = 7"], answer: 3, why: "Toa 5: 6x = 42. Gawanya kwa 6: x = 7." },
      { objective: "O4", q: "Ukumbi wa mazoezi (gym) unatoza $40 kujiunga pamoja na $20 kwa mwezi. Ulilipa $160. Miezi mingapi?", options: ["6", "8", "10", "4"], answer: 0, why: "40 + 20m = 160, kwa hiyo 20m = 120 na m = 6." },
      { objective: "O4", q: "Tatua: 10 - 2x >= 4", options: ["x >= 3", "x <= 3", "x <= -3", "x >= 7"], answer: 1, why: "Toa 10: -2x >= -6. Gawanya kwa -2 na ugeuze alama: x <= 3." },
      { objective: "O5", q: "Eneo la pembetatu yenye kitako 12 na kimo 5 ni lipi?", options: ["60", "17", "30", "120"], answer: 2, why: "1/2 x 12 x 5 = 30." },
      { objective: "O5", q: "Uwanja wa mstatili ni futi 30 kwa futi 20. Uzio kiasi gani unauzunguka?", options: ["Futi 600", "Futi 50", "Futi za mraba 100", "Futi 100"], answer: 3, why: "Mzingo = 2 x (30 + 20) = futi 100." },
      { objective: "O5", q: "Silinda ina nusu kipenyo 3 na kimo 10. Ujazo wake ni karibu kiasi gani?", options: ["Vipimo vya ujazo 282.74", "Vipimo vya ujazo 94.25", "Vipimo vya ujazo 30", "Vipimo vya ujazo 188.50"], answer: 0, why: "pi x 9 x 10 ni karibu 282.74." },
      { objective: "O6", q: "Mteremko kutoka (2, 7) hadi (5, 1) ni upi?", options: ["2", "-2", "-1/2", "6"], answer: 1, why: "(1 - 7) / (5 - 2) = -6 / 3 = -2." },
      { objective: "O6", q: "Mstari una mteremko 5 na unakata mhimili wa y kwenye -3. Mlinganyo wake ni:", options: ["y = -3x + 5", "y = 5x", "y = 5x - 3", "y = x - 8"], answer: 2, why: "y = mx + b ambapo m = 5 na b = -3." },
      { objective: "O6", q: "Kama f(x) = x^2 + 2, f(-3) ni ngapi?", options: ["-7", "-1", "8", "11"], answer: 3, why: "(-3)^2 = 9, na 9 + 2 = 11." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 4, 6, 7, 9, 11, 13, 14, 16, 17] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo, kisha mwonyeshe mwalimu au mwenzako wa kusoma mpango huo.",
    criteria: [
      { name: "Anaujua mtihani", objective: "O1", notYet: "Hajafanya mtihani wa mfano wa bure, au mpango hauna ukweli wa mtihani kutoka ged.com.", meets: "Matokeo ya mtihani wa mfano yameandikwa; sehemu, muda, sheria za kikokotoo na aina za maswali zimeorodheshwa kutoka ged.com.", exceeds: "Pia anaorodhesha sheria za jimbo (GED au HiSET), jinsi ya kupanga tarehe ya mtihani na gharama ya sasa, kutoka tovuti rasmi." },
      { name: "Mpango wa kusoma wenye tarehe", objective: "O1", notYet: "Hakuna tarehe, au hakuna mpangilio wa mada.", meets: "Wiki 6 hadi 8 za siku za kusoma zenye tarehe na saa halisi, mada 3 ngumu zaidi kwanza, tarehe ya GED Ready na tarehe lengwa ya mtihani.", exceeds: "Una siku za kurudia na mpango mbadala kwa vipindi vilivyokosekana." },
      { name: "Namba na data", objective: "O3", notYet: "Chini ya maswali 3 kati ya 4 ya namba na data ni sahihi.", meets: "Angalau maswali 3 kati ya 4 ya namba na data (Masomo 2 na 3) ni sahihi, na makosa yameelezwa.", exceeds: "Yote ni sahihi, na kazi imeonyeshwa wazi hatua kwa hatua." },
      { name: "Aljebra", objective: "O4", notYet: "Milinganyo ya mazoezi ilitatuliwa bila kukaguliwa, au moja au yote mawili si sahihi.", meets: "Maswali yote mawili ya aljebra ni sahihi na yamekaguliwa kwa kurudisha jibu ndani.", exceeds: "Anaeleza kanuni ya kugeuza alama kwa milinganyo isiyo sawa kwa maneno yake mwenyewe." },
      { name: "Jiometri na grafu", objective: "O6", notYet: "Kanuni isiyo sahihi ilitumika, vipimo havipo, au alama ya mteremko si sahihi.", meets: "Maswali ya jiometri na grafu (Masomo 5 na 6) kwa kiasi kikubwa ni sahihi, na vipimo sahihi na alama sahihi za mteremko.", exceeds: "Anaweza kuonyesha kila kanuni iko wapi kwenye karatasi ya kanuni na kuchora grafu kwa swali la mteremko." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi wakiwa na mpango wa kusoma na wa mtihani wenye tarehe unaofikia rubriki",
      "Maendeleo kutoka jaribio la awali hadi mtihani wa mwisho",
      "Wanafunzi wanaofanya GED Ready au mtihani rasmi wa mfano tena ndani ya siku 60 na kupata alama za juu zaidi (utafiti wa kufuatilia)",
      "Wanafunzi wanaofaulu mtihani wa Hesabu wa GED (au hesabu ya HiSET) ndani ya miezi 6, na wanaoendelea kumaliza diploma nzima"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Karatasi, penseli na kalenda",
      "Kikokotoo cha TI-30XS ikiwezekana, au kikokotoo cha kisayansi cha bure mtandaoni",
      "Karatasi ya kanuni ya GED ya sasa na karatasi ya maelezo ya kikokotoo TI-30XS kutoka ged.com",
      "Simu au kompyuta yenye intaneti kwa GED Math Sample Test ya bure",
      "Kama saa 2 hadi 3 kwa kozi, kisha ratiba ya kusoma ya kila wiki ya mwanafunzi mwenyewe"
    ],
    facilitatorNotes: [
      "Toa jaribio la awali kama zoezi la kuanza bila alama; wanafunzi wengi wana hofu ya hesabu.",
      "Tatua kila mfano ubaoni, kisha wanafunzi wafanye unaofuata wawili wawili kabla ya kufanya peke yao.",
      "Chapisha karatasi ya kanuni ya sasa na karatasi ya maelezo ya kikokotoo kutoka ged.com ili wanafunzi wafanye mazoezi kwa kile watakachokiona.",
      "Wasaidie wanafunzi kuangalia sheria za jimbo lao (GED au HiSET, umri, kitambulisho, gharama, mtandaoni au kituo cha mtihani) kwenye tovuti rasmi; usitaje ada wala alama za kufaulu kwa kukumbuka.",
      "Katika programu za magereza au za kurudi katika jamii, uliza ofisi ya elimu jinsi mtihani unavyopangwa hapo hapo.",
      "Unganisha kozi hii na \"Hesabu za Kila Siku kwa Kazi na Maisha\" kwa wanafunzi wanaohitaji mazoezi zaidi ya sehemu na asilimia."
    ]
  }
};
