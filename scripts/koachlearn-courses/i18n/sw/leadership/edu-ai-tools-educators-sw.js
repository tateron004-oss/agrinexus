"use strict";

// Koach Learn course (Swahili translation of leadership/edu-ai-tools-educators.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "edu-ai-tools-educators-sw",
  lang: "sw",
  translationOf: "edu-ai-tools-educators",
  category: "Leadership Development",
  name: "AI kwa Viongozi wa Shule na Elimu 2: Zana za AI kwa Walimu",
  skills: "Kujua aina za zana za AI shuleni, Kuandika prompt za walimu zinazofanya kazi, Kutumia AI kwa kazi tatu za kila siku za mwalimu, Kukagua masharti ya faragha ya zana, Kutengeneza orodha ya zana ya kijani-njano-nyekundu",
  outcome: "kutumia zana za AI kwa kazi za kila siku za mwalimu kwa mtindo wa prompt unaoaminika, kukagua masharti ya faragha ya zana ya AI kwa orodha ya ukaguzi kabla mtu yeyote hajaitumia na wanafunzi, na kutoa orodha fupi ya zana za AI ya kijani-njano-nyekundu kwa shule yako.",
  about: [
    "Kozi hii ni kwa wakuu wa shule, wakufunzi wa ufundishaji, walimu viongozi, waratibu wa teknolojia na walimu. Ni ya vitendo: utatumia zana za AI kwa kazi halisi za shule, kisha utaamua zana zipi ni salama kupendekeza.",
    "Sura ya 1 inapanga zana nyingi za AI katika aina chache, inafundisha mtindo wa prompt unaowafaa walimu, na inafanya mazoezi ya kazi tatu za kila siku. Sura ya 2 inakufundisha kukagua zana kabla walimu au wanafunzi hawajaitumia: masharti ya faragha, sheria za umri, matumizi ya data, na jinsi ya kutoa orodha rahisi ya zana ambayo walimu wanaweza kuiamini.",
    "Usiweke kamwe majina ya wanafunzi, alama, maelezo ya IEP (mpango maalum wa elimu) au taarifa nyingine zinazomtambulisha mwanafunzi katika zana yoyote ambayo wilaya yako haijaidhinisha. Fanya mazoezi kwa mifano ya kubuni. Jaribio la maarifa linafunga kila sura na mtihani wa maswali 20 unafunga kozi. Hii ni kozi ya 2 kati ya 8 katika AI kwa Viongozi wa Shule na Elimu."
  ],
  finalTask: "Tengeneza seti ya kuanzia ya zana za AI ya shule yako: kadi ya prompt yenye prompt tatu za walimu zilizojaribiwa (barua pepe kwa wazazi, kifungu cha kusoma katika viwango vitatu, na maswali kumi ya mazoezi yenye funguo za majibu), na orodha ya kijani-njano-nyekundu ya angalau zana tatu za AI, kila moja imekaguliwa kwa orodha ya ukaguzi wa faragha iliyotokana na rasilimali ya Model Terms of Service kwenye studentprivacy.ed.gov, pamoja na sababu ya mstari mmoja ya rangi yake.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wakuu wa shule, wakufunzi wa ufundishaji, walimu viongozi, waratibu wa teknolojia na walimu katika shule za Marekani wanaotaka mazoezi ya vitendo na zana za AI na njia ya kuamua zipi ni salama.",
    startingPoint: "Wanajua AI ni nini na misingi ya FERPA na COPPA (sheria za Marekani za faragha ya wanafunzi na watoto) kutoka kozi ya 1. Wamejaribu chatbot lakini hawana mtindo wa prompt unaoaminika wala njia ya kukagua masharti ya faragha ya zana.",
    gap: "Walimu wanajaribu zana nyingi za AI, baadhi zikiwa na masharti dhaifu ya faragha au sheria za umri ambazo wanafunzi hawawezi kutimiza. Viongozi wanahitaji kupata matokeo mazuri kutoka AI kwa kazi za kila siku za mwalimu, kukagua zana kabla mtu yeyote hajazitumia na wanafunzi, na kuwapa walimu orodha rahisi wanayoweza kuiamini.",
    constraints: [
      "Usiweke kamwe majina ya wanafunzi, alama, maelezo ya IEP au taarifa nyingine zinazowatambulisha katika zana ambayo wilaya haijaidhinisha; mazoezi yanatumia mifano ya kubuni",
      "Masharti ya zana na sheria za umri hubadilika, kwa hiyo wanafunzi wanakagua masharti ya sasa wenyewe",
      "Afisa wa faragha wa wilaya au timu ya teknolojia anathibitisha orodha ya mwisho ya zana",
      "Vifaa: kompyuta yenye intaneti na angalau msaidizi mmoja wa AI wa bure",
      "Muda: masomo mafupi yanayoingia katika siku ya shule"
    ],
    prerequisites: "\"AI kwa Viongozi wa Shule na Elimu 1: Utangulizi wa AI katika Elimu\"."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa zana za AI ambazo walimu wako wanatumia", action: "kupanga kila zana kama msaidizi wa jumla, jukwaa la elimu au kipengele kilichojengwa ndani", standard: "ukionyesha kama wilaya ina makubaliano kwa zana hiyo" },
    { id: "O2", condition: "Kwa somo unalofundisha au unalosaidia", action: "kuandika prompt ya mwalimu yenye jukumu, wanafunzi, lengo, vikwazo na muundo", standard: "ikiwa na sehemu zote tano na imehifadhiwa kwenye kadi ya prompt ya pamoja" },
    { id: "O3", condition: "Ukitumia maelezo ya kubuni", action: "kutumia AI kwa barua pepe kwa wazazi, kifungu cha viwango na maswali ya mazoezi yenye funguo za majibu, na kukagua kila kimoja", standard: "ukirekebisha kila kosa kabla ya kutumia na ukitatua kila jibu wewe mwenyewe" },
    { id: "O4", condition: "Ukipewa zana ya AI ambayo walimu wanaitaka", action: "kukagua sera yake ya faragha na masharti yake dhidi ya orodha ya ukaguzi wa faragha", standard: "ukiweka alama kila kipengele wazi, hakiko wazi au tatizo kwa mpango ambao ungetumia" },
    { id: "O5", condition: "Kabla wanafunzi hawajaingia (sign in) kwenye zana", action: "kukagua umri wa chini wa sasa wa zana, sheria za ruhusa ya wazazi na jinsi COPPA inavyohusika", standard: "ukitumia masharti ya sasa ya zana yenyewe" },
    { id: "O6", condition: "Ukipewa angalau zana tatu zilizokaguliwa", action: "kutoa orodha ya zana ya kijani-njano-nyekundu kwa walimu", standard: "ikionyesha rangi ya kila zana, sababu, matumizi yanayoruhusiwa na tarehe ya ukaguzi" }
  ],
  chapters: [
    {
      name: "Sura 1: Kutumia zana za AI kwa kazi za mwalimu",
      lessons: [
        {
          objectives: ["O1"],
          title: "Aina za zana za AI shuleni",
          minutes: 5,
          goal: "Panga zana za AI kama wasaidizi wa jumla, majukwaa ya elimu na vipengele vilivyojengwa ndani.",
          text: [
            "Wasaidizi wa jumla wa AI, kama ChatGPT, Microsoft Copilot, Google Gemini na Claude, wanaweza kufanya karibu kazi yoyote ya kuandika au kufikiri. Wanabadilika kwa urahisi, lakini hawajui chochote kuhusu mtaala wako usipowaambia, na masharti yao ya data yanategemea mpango unaotumia.",
            "Majukwaa ya elimu ya AI yametengenezwa kwa walimu au wanafunzi: zana za kutunga masomo na majaribio, zana za ufundishaji wa ziada (tutoring), zana za kutoa maoni. Huenda yakafaa kazi za shule zaidi na baadhi yanatoa makubaliano na wilaya, lakini kila moja lazima likaguliwe kwa faragha na ubora.",
            "Vipengele vya AI vilivyojengwa ndani viko ndani ya zana unazotumia tayari: Microsoft 365, Google Workspace, Canva, mfumo wako wa usimamizi wa ujifunzaji (LMS). Ni rahisi kutumia, lakini vinaweza kuwashwa bila mtu yeyote kuamua, kwa hiyo uliza timu yako ya teknolojia vipi vimewashwa na chini ya makubaliano gani."
          ],
          words: [["Msaidizi wa jumla", "zana ya mazungumzo ya AI inayoweza kusaidia karibu kazi yoyote."], ["Jukwaa la elimu", "zana ya AI iliyotengenezwa kwa kazi za kufundisha au kujifunza."], ["Kipengele kilichojengwa ndani", "kazi ya AI ndani ya programu unayotumia tayari."]],
          slides: [
            { title: "Wasaidizi wa jumla", bullets: ["ChatGPT, Copilot, Gemini, Claude", "Wanabadilika, lakini hawajui mtaala wako", "Masharti ya data yanategemea mpango"] },
            { title: "Majukwaa ya elimu", bullets: ["Zana za masomo, majaribio, tutoring na maoni", "Yanafaa kazi za shule zaidi", "Kila moja lazima likaguliwe"] },
            { title: "Vipengele vilivyojengwa ndani", bullets: ["Ndani ya Microsoft 365, Google, Canva, LMS yako", "Huenda vimewashwa tangu mwanzo", "Kagua vipi vimewashwa na chini ya makubaliano gani"] }
          ],
          tryIt: "Orodhesha zana za AI ambazo wewe au walimu wako mnatumia sasa. Weka kila moja katika moja ya aina tatu, na uonyeshe kama wilaya yako ina makubaliano kwa zana hiyo (ndiyo, hapana, sijui).",
          youCanNow: "kupanga zana za AI katika aina tatu na kujua cha kukagua kwa kila moja.",
          quickCheck: [
            { objective: "O1", q: "Kipengele cha AI kilichojengwa ndani ni nini?", options: ["Zana ya AI unayopaswa kununua peke yake", "Kipengele cha AI ndani ya programu unayotumia tayari", "Chatbot iliyotengenezwa na mwanafunzi", "Karatasi ya mazoezi"], answer: 1, why: "Vipengele vilivyojengwa ndani vinaonekana ndani ya zana ulizo nazo tayari, wakati mwingine vikiwa vimewashwa tangu mwanzo." },
            { objective: "O1", q: "Mwalimu anatumia jukwaa jipya la elimu la AI ambalo hujawahi kulisikia. Ungefanya nini kwanza?", options: ["Kuliidhinisha, kwa sababu limetengenezwa kwa shule", "Kupiga marufuku majukwaa yote ya AI", "Kuliorodhesha na kukagua kama wilaya ina makubaliano kwa jukwaa hilo", "Kuwauliza wanafunzi kama wanalipenda"], answer: 2, why: "Majukwaa ya elimu bado yanahitaji kukaguliwa kwa faragha na ubora." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Mtindo wa prompt unaowafaa walimu",
          minutes: 5,
          goal: "Andika prompt za walimu zenye jukumu, wanafunzi, lengo, vikwazo na muundo.",
          text: [
            "Walimu wanapata matokeo bora kwa prompt yenye sehemu tano. Jukumu: \"Wewe ni mwalimu wa sayansi wa darasa la 7 mwenye uzoefu.\" Wanafunzi: darasa, kiwango cha kusoma, mahitaji kwa ujumla (bila majina). Lengo: lengo la kujifunza au kiwango cha mtaala. Vikwazo: muda, vifaa, urefu, cha kuepuka. Muundo: jedwali, hatua zenye namba, karatasi ya kugawa.",
            "Mfano: \"Wewe ni mwalimu wa darasa la 4 mwenye uzoefu. Darasa langu linasoma katika viwango tofauti. Andika kifungu cha maneno 300 kuhusu mzunguko wa maji katika viwango vitatu vya kusoma vyenye ukweli muhimu ule ule, kisha maswali matano ya ufahamu kwa kila kimoja. Tumia jedwali.\"",
            "Kisha kiboreshe kwa maswali ya kufuatilia: \"fanya kiwango cha 1 kiwe rahisi zaidi\", \"ongeza orodha ya msamiati\", \"linganisha maswali na wazo kuu\". Hifadhi prompt zinazofanya kazi kwenye kadi ya prompt ya pamoja ili wenzako waweze kuzitumia tena."
          ],
          steps: ["Jukumu: AI ifanye kama nani?", "Wanafunzi: darasa, kiwango, mahitaji kwa ujumla.", "Lengo: lengo la kujifunza au kiwango cha mtaala.", "Vikwazo: muda, urefu, vifaa.", "Muundo: jedwali, hatua, karatasi ya kugawa."],
          words: [["Prompt", "unachoandika kwa zana ya AI ili kuomba kitu."], ["Kadi ya prompt", "orodha ya pamoja ya prompt zilizojaribiwa ambazo walimu wanaweza kutumia tena."]],
          slides: [
            { title: "Prompt ya mwalimu yenye sehemu tano", bullets: ["Jukumu", "Wanafunzi (bila majina)", "Lengo, vikwazo, muundo"] },
            { title: "Mfano", bullets: ["Mwalimu wa darasa la 4, viwango tofauti vya kusoma", "Kifungu cha mzunguko wa maji katika viwango vitatu", "Maswali matano kwa kila kimoja, katika jedwali"] },
            { title: "Boresha na uhifadhi", bullets: ["Kufuatilia: rahisi zaidi, ongeza msamiati", "Hifadhi zilizofaulu kwenye kadi ya prompt ya pamoja"] }
          ],
          tryIt: "Andika prompt yenye sehemu tano kwa somo utakalofundisha (au kusaidia) hivi karibuni. Iendeshe, uliza swali moja la kufuatilia, na uhifadhi prompt ya mwisho.",
          youCanNow: "kuandika prompt za walimu zinazoleta matokeo yanayotumika mara ya kwanza.",
          quickCheck: [
            { objective: "O2", q: "Nini kinaingia katika sehemu ya \"vikwazo\" ya prompt ya mwalimu?", options: ["Mipaka kama urefu, kiwango cha kusoma au cha kuepuka", "Jina kamili la mwanafunzi", "Nywila ya mwalimu", "Jina la zana ya AI"], answer: 0, why: "Vikwazo vinaweka mipaka ili jibu lifae darasa lako." },
            { objective: "O2", q: "AI inatoa kifungu kigumu mno kwa wanafunzi wako. Ungetuma nini?", options: ["Kuanza upya katika zana nyingine", "Kukikubali na kueleza maneno magumu darasani", "Kubandika alama za kusoma za mwanafunzi", "Swali la kufuatilia kama \"Kifanye kiwe rahisi zaidi, kwa sentensi fupi zaidi\""], answer: 3, why: "Swali la kufuatilia lililo wazi linarekebisha jibu bila kushiriki data ya wanafunzi." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kazi tatu za kila siku, zilizofanywa vizuri",
          minutes: 6,
          goal: "Tumia AI kwa barua pepe kwa wazazi, kifungu cha viwango na maswali ya mazoezi, na ukague kila kimoja.",
          text: [
            "Barua pepe kwa wazazi: toa kusudi, ukweli muhimu (tukio, tarehe, familia zinapaswa kufanya nini) na sauti. Omba toleo fupi, la ukarimu, kwa lugha rahisi. Ikilazimu itumwe kwa lugha nyingine, tafsiri ya AI ni rasimu; mzungumzaji mwenye sifa aikague kabla haijafika kwa familia.",
            "Kifungu cha viwango: omba maudhui yale yale katika viwango vitatu vya kusoma vyenye ukweli muhimu ule ule. Kagua ukweli wewe mwenyewe; AI inaweza kuingiza makosa inaporahisisha.",
            "Maswali ya mazoezi: omba maswali kumi yenye funguo za majibu na maelezo mafupi kwa kila jibu. Tatua majibu wewe mwenyewe; funguo za majibu za AI hukosea mara nyingi kuliko watu wanavyotarajia, hasa katika hisabati na sayansi. Katika zote tatu, wewe ndiye mhariri na ukaguzi wa mwisho."
          ],
          steps: ["Barua pepe kwa wazazi: kusudi, ukweli, sauti; tafsiri ikaguliwe na mtu mwenye sifa.", "Kifungu cha viwango: ukweli ule ule katika viwango vitatu; kagua ukweli.", "Maswali ya mazoezi: funguo za majibu zenye maelezo; tatua kila jibu wewe mwenyewe.", "Hariri kila kitu kabla hakijatumika."],
          words: [["Maandishi ya viwango", "maudhui yale yale yaliyoandikwa katika viwango tofauti vya kusoma."], ["Funguo za majibu", "orodha ya majibu sahihi ya maswali."]],
          slides: [
            { title: "Barua pepe kwa wazazi", bullets: ["Kusudi, ukweli, sauti", "Lugha rahisi", "Tafsiri zikaguliwe na mzungumzaji mwenye sifa"] },
            { title: "Kifungu cha viwango", bullets: ["Ukweli ule ule, viwango vitatu", "Kagua ukweli: kurahisisha kunaweza kuongeza makosa"] },
            { title: "Maswali ya mazoezi", bullets: ["Maswali kumi yenye funguo za majibu", "Tatua kila jibu wewe mwenyewe", "Wewe ndiye mhariri na ukaguzi wa mwisho"] }
          ],
          tryIt: "Fanya kazi zote tatu kwa maelezo ya kubuni: barua pepe kwa wazazi kuhusu ziara ya kimasomo, kifungu katika viwango vitatu, na maswali kumi yenye funguo za majibu. Hesabu makosa uliyolazimika kurekebisha.",
          youCanNow: "kutumia AI kwa kazi tatu za kila siku za mwalimu na kukagua matokeo kama mhariri.",
          quickCheck: [
            { objective: "O3", q: "Maandishi ya viwango ni nini?", options: ["Maandishi yaliyochapishwa kwa herufi kubwa", "Maudhui yale yale yaliyoandikwa katika viwango tofauti vya kusoma", "Maandishi yasiyo na picha", "Jaribio lenye sehemu tatu"], answer: 1, why: "Maandishi ya viwango yanawaruhusu wanafunzi wa viwango tofauti vya kusoma kujifunza maudhui yale yale." },
            { objective: "O3", q: "AI inaandika maswali kumi ya mazoezi yenye funguo za majibu. Unafanya nini kabla ya kuyatumia?", options: ["Kutatua kila jibu wewe mwenyewe na kurekebisha makosa", "Kuyatumia kama yalivyo", "Kukagua swali la kwanza tu", "Kuiuliza AI kama majibu yake ni sahihi"], answer: 0, why: "Funguo za majibu za AI hukosea mara nyingi kuliko watu wanavyotarajia, kwa hiyo mwalimu anakagua kila moja." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kutumia zana za AI kwa kazi za mwalimu",
        questions: [
          { objective: "O1", q: "Vipengele vya AI ndani ya programu unayomiliki tayari:", options: ["Vimezimwa kila wakati", "Havigusi data kamwe", "Huenda vimewashwa tangu mwanzo; uliza timu yako ya teknolojia", "Havihitaji makubaliano"], answer: 2, why: "Vipengele vilivyojengwa ndani vinaweza kuwashwa bila uamuzi wowote." },
          { objective: "O2", q: "Kipi kinafaa katika sehemu ya \"wanafunzi\" ya prompt ya mwalimu?", options: ["Darasa na viwango vya kusoma kwa ujumla", "Majina kamili ya wanafunzi", "Malengo ya IEP ya wanafunzi kwa majina", "Namba za simu za wazazi"], answer: 0, why: "Eleza wanafunzi kwa ujumla, kamwe usitumie maelezo yanayowatambulisha." },
          { objective: "O3", q: "Tafsiri ya AI ya barua kwa familia ni:", options: ["Tayari kutumwa", "Kamili kila wakati", "Haramu kisheria", "Rasimu ambayo mzungumzaji mwenye sifa anapaswa kuikagua"], answer: 3, why: "Tafsiri zinaweza kukosea; familia zinastahili taarifa sahihi." },
          { objective: "O3", q: "Kwa nini utatue kila jibu katika funguo za majibu za AI wewe mwenyewe?", options: ["Inatakiwa na sheria", "Funguo za majibu za AI hukosea mara nyingi kuliko watu wanavyotarajia", "Inafanya jaribio kuwa refu zaidi", "Wanafunzi wanapenda hivyo"], answer: 1, why: "Makosa katika funguo yanawapotosha wanafunzi." },
          { objective: "O2", q: "Uhifadhi wapi prompt zinazofanya kazi vizuri?", options: ["Hakuna mahali", "Katika barua pepe kwa wazazi", "Katika akaunti ya mwanafunzi", "Kwenye kadi ya prompt ya pamoja"], answer: 3, why: "Prompt za pamoja zilizojaribiwa zinawaokolea wenzako muda." }
        ]
      }
    },
    {
      name: "Sura 2: Kuchagua zana zilizo salama kwa wanafunzi",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kusoma masharti ya faragha ya zana kwa orodha ya ukaguzi",
          minutes: 6,
          goal: "Kagua sera ya faragha na masharti ya zana ya AI dhidi ya orodha fupi ya ukaguzi.",
          text: [
            "Ofisi ya Sera ya Faragha ya Wanafunzi (Student Privacy Policy Office) ya Wizara ya Elimu ya Marekani inatoa orodha ya ukaguzi inayoitwa Model Terms of Service ili kusaidia shule kupitia sera ya faragha na masharti ya zana ya mtandaoni kabla ya kujisajili. Itumie, au orodha ya ukaguzi ambayo wilaya yako tayari inayo.",
            "Maswali muhimu: Inakusanya data gani ya wanafunzi? Nani anamiliki data? Je, kampuni inatumia data ya wanafunzi kwa matangazo au kufundisha mifano yake ya AI? Je, shule inaweza kufanya data ifutwe, na lini? Nani mwingine anapata data? Inalindwa vipi, na nini kinatokea kukiwa na uvujaji? Je, kampuni inaweza kubadilisha masharti bila kukuambia?",
            "Soma sera ya mpango ambao ungetumia kweli; mipango ya bure ya watumiaji binafsi na mipango ya elimu mara nyingi ina masharti tofauti. Majibu yasipokuwa wazi, jibu ni \"bado\". FERPA na COPPA zinaweka kiwango cha chini, na jimbo lako linaweza kuwa na sheria kali zaidi za faragha ya wanafunzi; afisa wa faragha wa wilaya yako anaweza kukuambia zipi zinahusika."
          ],
          steps: ["Fungua sera ya faragha na masharti ya zana kwa mpango ambao ungetumia.", "Pitia orodha ya ukaguzi: data inayokusanywa, umiliki, matangazo na kufundisha AI, kufuta, kushiriki, usalama, mabadiliko.", "Weka alama kila kipengele: wazi, hakiko wazi au tatizo.", "Uliza kampuni kuhusu vipengele visivyo wazi kwa maandishi.", "Tuma matokeo kwa afisa wa faragha wa wilaya yako."],
          words: [["Sera ya faragha", "taarifa ya kampuni kuhusu data inayokusanya na jinsi inavyoitumia."], ["Masharti ya huduma", "sheria na makubaliano ya kutumia bidhaa."], ["Uvujaji wa data", "data inapofikiwa au kutolewa bila ruhusa."]],
          slides: [
            { title: "Tumia orodha ya ukaguzi", bullets: ["Model Terms of Service (studentprivacy.ed.gov)", "Au orodha ya ukaguzi ya wilaya yako"] },
            { title: "Maswali muhimu", bullets: ["Data gani, nani anaimiliki", "Matangazo au kufundisha AI kwa data ya wanafunzi?", "Kufuta, kushiriki, usalama, uvujaji"] },
            { title: "Soma mpango sahihi", bullets: ["Masharti ya watumiaji binafsi na ya elimu ni tofauti", "Isipokuwa wazi, maana yake ni \"bado\"", "Muulize afisa wa faragha kuhusu sheria za jimbo"] }
          ],
          sources: [{ name: "Privacy and Education Technology: Model Terms of Service checklist", url: "https://studentprivacy.ed.gov/privacy-and-education-technology" }, { name: "FERPA: Protecting Student Privacy", url: "https://studentprivacy.ed.gov/ferpa" }],
          tryIt: "Chagua zana moja ya AI ambayo walimu wako wanaitaka. Soma sera yake ya faragha kwa mpango ambao ungetumia na uweke alama kila kipengele cha orodha: wazi, hakiko wazi au tatizo.",
          youCanNow: "kukagua masharti ya faragha ya zana ya AI kwa orodha ya ukaguzi kabla haijatumiwa na wanafunzi.",
          quickCheck: [
            { objective: "O4", q: "Lipi ni swali la orodha ya ukaguzi wa faragha?", options: ["Je, nembo ya zana inavutia?", "Watu wangapi wanaitumia?", "Je, kampuni inatumia data ya wanafunzi kufundisha AI yake?", "Je, inafanya kazi kwenye tableti?"], answer: 2, why: "Kama data ya wanafunzi inafundisha AI ni swali muhimu la faragha." },
            { objective: "O4", q: "Masharti ya faragha ya mpango wa bure ni tofauti na ya mpango wa elimu. Unakagua yapi?", options: ["Yale mafupi zaidi", "Ya mpango wa bure, kwa sababu ni nafuu", "Hakuna; masharti yote ni sawa", "Masharti ya mpango ambao shule yako ingetumia kweli"], answer: 3, why: "Mipango ya bure ya watumiaji binafsi na ya elimu mara nyingi ina masharti tofauti." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Sheria za umri na akaunti za wanafunzi",
          minutes: 5,
          goal: "Kagua sheria za umri za zana na jinsi COPPA inavyohusika kabla wanafunzi hawajaingia.",
          text: [
            "Zana nyingi za AI zinaweka umri wa chini na sheria za ruhusa ya wazazi katika masharti yao, na hizi hubadilika. Kagua masharti ya sasa ya kila zana; usitegemee anachokumbuka mwenzako. Zana inayofaa walimu huenda isiruhusiwe kabisa kwa wanafunzi.",
            "Kwa watoto walio chini ya miaka 13, COPPA inahusika na huduma ya mtandaoni. FTC (Tume ya Biashara ya Marekani) inasema shule inaweza kutoa ridhaa badala ya wazazi pale tu huduma inapokusanya taarifa za wanafunzi kwa matumizi na manufaa ya shule na si kwa kusudi lingine lolote la kibiashara. FTC pia inapendekeza, kama desturi nzuri, kwamba shule ziwaambie wazazi huduma zipi za mtandaoni zimeidhinishwa.",
            "Pendelea akaunti za wanafunzi zinazosimamiwa na shule chini ya makubaliano ya wilaya kuliko wanafunzi kujisajili wenyewe kwa barua pepe binafsi. Amueni mapema wanafunzi wanaweza kutumia AI kwa nini, na waambieni familia."
          ],
          steps: ["Soma sheria za sasa za umri na ruhusa za zana.", "Wanafunzi wakiwa chini ya miaka 13, kagua jinsi ridhaa ya COPPA ingefanya kazi.", "Pendelea akaunti zinazosimamiwa na shule chini ya makubaliano.", "Waambie familia huduma zipi zimeidhinishwa.", "Amua wanafunzi wanaweza kuitumia kwa nini."],
          words: [["Umri wa chini", "umri mdogo zaidi ambao masharti ya zana yanaruhusu kuitumia."], ["Akaunti inayosimamiwa na shule", "akaunti ya mwanafunzi iliyofunguliwa na kudhibitiwa na shule."]],
          slides: [
            { title: "Kagua sheria za umri za kila zana", bullets: ["Zimewekwa katika masharti ya zana yenyewe", "Hubadilika: soma toleo la sasa", "Kufaa walimu si kufaa wanafunzi"] },
            { title: "Chini ya miaka 13: COPPA", bullets: ["Ridhaa ya shule kwa matumizi ya shule tu", "Hakuna kusudi lingine la kibiashara", "Waambie wazazi ulichoidhinisha"] },
            { title: "Akaunti", bullets: ["Zinazosimamiwa na shule, chini ya makubaliano", "Si usajili binafsi", "Waambie familia matumizi yanayoruhusiwa"] }
          ],
          sources: [{ name: "FTC: Complying with COPPA, Frequently Asked Questions", url: "https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions" }],
          tryIt: "Kwa zana kutoka Somo la 4, tafuta umri wake wa chini wa sasa na sheria ya ruhusa ya wazazi katika masharti yake. Andika kama wanafunzi katika shule yako wangeweza kuitumia, na jinsi gani.",
          youCanNow: "kukagua sheria za umri za zana na ridhaa ya COPPA kabla mwanafunzi yeyote hajaingia.",
          quickCheck: [
            { objective: "O5", q: "Akaunti za wanafunzi kwenye zana ya AI zinapaswa kufunguliwaje kwa upendeleo?", options: ["Wanafunzi wajisajili kwa barua pepe binafsi", "Walimu washiriki akaunti moja na darasa", "Akaunti zinazosimamiwa na shule chini ya makubaliano", "Hakuna akaunti; wanafunzi watumie akaunti ya mzazi"], answer: 2, why: "Akaunti zinazosimamiwa na shule chini ya makubaliano zinaweka data ya wanafunzi chini ya udhibiti wa shule." },
            { objective: "O5", q: "Mwenzako anasema zana inafaa watoto wa miaka 10. Unakagua nini?", options: ["Masharti ya sasa ya zana kuhusu umri wa chini na sheria ya ruhusa ya wazazi", "Maoni kwenye mitandao ya kijamii", "Kama shule nyingine zinaitumia", "Hakuna; mwamini mwenzako"], answer: 0, why: "Sheria za umri hubadilika, kwa hiyo kagua masharti ya sasa ya zana wewe mwenyewe." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kutoa orodha ya zana ya kijani-njano-nyekundu",
          minutes: 6,
          goal: "Toa orodha rahisi inayowaambia walimu zana zipi za AI zimeidhinishwa na kwa matumizi gani.",
          text: [
            "Walimu wanahitaji jibu rahisi kwa swali \"naweza kutumia hii?\". Orodha ya kijani-njano-nyekundu inalitoa. Kijani: imeidhinishwa chini ya makubaliano ya wilaya, inaweza kutumiwa na taarifa za wanafunzi kama makubaliano yanavyoruhusu. Njano: inaruhusiwa kwa kazi za mwalimu bila taarifa za wanafunzi (mawazo ya masomo, vifaa vya jumla). Nyekundu: hairuhusiwi, kwa sababu ya matatizo ya faragha, umri au ubora.",
            "Kwa kila zana, andika rangi, sababu, matumizi yanayoruhusiwa, kama wanafunzi wanaweza kuitumia, na tarehe ulipokagua. Afisa wa faragha wa wilaya yako au timu ya teknolojia wanapaswa kukubaliana na orodha ya kijani.",
            "Iunganishe orodha na kadi yako ya prompt ili walimu wajue cha kutumia na jinsi ya kukitumia vizuri. Pitia zote mbili kila muhula, kwa sababu zana na masharti hubadilika."
          ],
          steps: ["Orodhesha zana ulizokagua.", "Ipe kila moja rangi: kijani, njano au nyekundu.", "Andika sababu, matumizi yanayoruhusiwa, matumizi ya wanafunzi na tarehe ya ukaguzi.", "Mwombe afisa wa faragha au timu ya teknolojia athibitishe.", "Ishiriki pamoja na kadi ya prompt; ipitie kila muhula."],
          words: [["Orodha iliyoidhinishwa", "orodha iliyotolewa ya zana ambazo walimu wanaweza kutumia na jinsi gani."], ["Makubaliano", "mkataba uliosainiwa au makubaliano ya faragha ya data kati ya wilaya na kampuni."]],
          slides: [
            { title: "Rangi tatu", bullets: ["Kijani: imeidhinishwa chini ya makubaliano", "Njano: kazi za mwalimu, bila taarifa za wanafunzi", "Nyekundu: hairuhusiwi"] },
            { title: "Kwa kila zana andika", bullets: ["Rangi na sababu", "Matumizi yanayoruhusiwa na matumizi ya wanafunzi", "Tarehe ya ukaguzi"] },
            { title: "Ifanye iwe na manufaa", bullets: ["Thibitisha na timu ya faragha au teknolojia", "Ishiriki pamoja na kadi ya prompt", "Ipitie kila muhula"] }
          ],
          tryIt: "Kazi ya mwisho: tengeneza seti yako ya kuanzia, kadi ya prompt yenye prompt zako tatu zilizojaribiwa (barua pepe kwa wazazi, kifungu cha viwango, maswali ya mazoezi) na orodha ya kijani-njano-nyekundu ya angalau zana tatu zilizokaguliwa kwa orodha ya ukaguzi wa faragha, kila moja na sababu ya mstari mmoja.",
          youCanNow: "kuwapa walimu mwongozo rahisi unaoaminika wa zana zipi za AI za kutumia na jinsi ya kuzitumia.",
          quickCheck: [
            { objective: "O6", q: "Zana ya KIJANI inamaanisha nini kwenye orodha?", options: ["Ni ya bure", "Inaweza kutumiwa, pamoja na taarifa za wanafunzi kama makubaliano ya wilaya yanavyoruhusu", "Imepigwa marufuku", "Wanafunzi tu wanaweza kuitumia"], answer: 1, why: "Zana za kijani zimeidhinishwa, na taarifa za wanafunzi zinaruhusiwa tu kama makubaliano yanavyoruhusu." },
            { objective: "O6", q: "Masharti ya zana yamebadilika tangu orodha yako ilipotengenezwa. Ungefanya nini?", options: ["Kuiacha orodha kama ilivyo hadi mwaka ujao", "Kufuta orodha nzima", "Kuikagua zana upya, kusasisha rangi yake na tarehe ya ukaguzi", "Kuwaambia walimu waamue wenyewe"], answer: 2, why: "Orodha inaonyesha tarehe ya ukaguzi ili ibaki ya sasa masharti yanapobadilika." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kuchagua zana zilizo salama kwa wanafunzi",
        questions: [
          { objective: "O4", q: "Unaweza kupata wapi orodha ya ukaguzi ya Model Terms of Service?", options: ["Chapisho kwenye mitandao ya kijamii", "Tangazo la kampuni inayouza", "studentprivacy.ed.gov", "Nembo ya zana"], answer: 2, why: "Ofisi ya Sera ya Faragha ya Wanafunzi inaiorodhesha." },
          { objective: "O4", q: "Sera ya faragha ya zana haiko wazi kuhusu kufundisha AI kwa data ya wanafunzi. Uamuzi wako?", options: ["\"Bado\": uliza kampuni kwa maandishi", "Kuiidhinisha", "Kuwaacha wanafunzi waamue", "Kupuuza swali"], answer: 0, why: "Majibu yasiyo wazi yanamaanisha zana haiko tayari kuidhinishwa." },
          { objective: "O5", q: "Mwenzako anasema umri wa chini wa zana ni miaka 13. Ufanye nini?", options: ["Kumwamini", "Kukagua masharti ya sasa ya zana wewe mwenyewe", "Kumuuliza mwanafunzi", "Kudhani hakuna kikomo"], answer: 1, why: "Sheria za umri zinawekwa na kila zana na hubadilika." },
          { objective: "O6", q: "Zana ya NJANO inamaanisha nini kwenye orodha?", options: ["Kazi za mwalimu tu, bila taarifa za wanafunzi", "Imeidhinishwa kwa data yote ya wanafunzi", "Imepigwa marufuku", "Kwa wazazi tu"], answer: 0, why: "Njano inaruhusu matumizi ya jumla ya mwalimu bila data ya wanafunzi." },
          { objective: "O6", q: "Orodha ya zana inapaswa kupitiwa mara ngapi?", options: ["Kamwe", "Baada ya uvujaji tu", "Kila miaka kumi", "Kila muhula"], answer: 3, why: "Zana na masharti hubadilika mara nyingi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI kwa Viongozi wa Shule na Elimu 2: Zana za AI kwa Walimu",
    questions: [
      { objective: "O1", q: "Kipi ni msaidizi wa jumla wa AI?", options: ["Daftari la alama", "Google Gemini", "Projekta", "Ratiba ya kengele"], answer: 1, why: "Gemini, ChatGPT, Copilot na Claude ni wasaidizi wa jumla." },
      { objective: "O1", q: "Wasaidizi wa jumla wanajua mtaala wako:", options: ["Kutoka kumbukumbu za wanafunzi wako", "Kila wakati", "Ukiwaambia tu", "Kutoka ratiba ya kengele"], answer: 2, why: "Wanahitaji maelezo ya hali katika prompt." },
      { objective: "O1", q: "Majukwaa ya elimu ya AI lazima:", options: ["Yalipiwe na wanafunzi", "Yatumiwe bila kukaguliwa", "Yakaguliwe kwa faragha na ubora", "Yapigwe marufuku"], answer: 2, why: "Kila zana inahitaji kukaguliwa." },
      { objective: "O2", q: "Prompt ya mwalimu yenye sehemu tano ina:", options: ["Jukumu, wanafunzi, lengo, vikwazo, muundo", "Majina, alama, IEP, anwani, simu", "Mada tu", "Nywila"], answer: 0, why: "Sehemu hizo zinaleta matokeo yanayotumika." },
      { objective: "O2", q: "Swali zuri la kufuatilia ni:", options: ["\"Futa jibu.\"", "\"Haya ni majina ya wanafunzi wangu.\"", "\"Wape alama darasa langu.\"", "\"Fanya kiwango cha 1 kiwe rahisi zaidi.\""], answer: 3, why: "Linaboresha matokeo bila data binafsi." },
      { objective: "O2", q: "Kadi ya prompt ni:", options: ["Kitambulisho cha mwanafunzi", "Orodha ya pamoja ya prompt zilizojaribiwa", "Kibali cha kuegesha gari", "Ripoti ya maendeleo"], answer: 1, why: "Inawaruhusu wenzako kutumia tena kinachofanya kazi." },
      { objective: "O3", q: "Maandishi ya viwango yanamaanisha:", options: ["Ukubwa wa herufi", "Maandishi kwenye rafu", "Alama ya jaribio", "Maudhui yale yale katika viwango tofauti vya kusoma"], answer: 3, why: "Yanapanua uwezo wa wote kufikia mawazo yale yale." },
      { objective: "O3", q: "AI inaporahisisha kifungu, unapaswa:", options: ["Kukirefusha", "Kukiamini", "Kukagua kwamba ukweli umebaki sahihi", "Kuondoa ukweli wote"], answer: 2, why: "Kurahisisha kunaweza kuingiza makosa." },
      { objective: "O3", q: "Katika kazi za mwalimu zinazosaidiwa na AI, mwalimu ni:", options: ["Mhariri na ukaguzi wa mwisho", "Hahitajiki", "Msaidizi wa AI", "Msomaji tu"], answer: 0, why: "Walimu wanawajibika kwa kinachowafikia wanafunzi." },
      { objective: "O4", q: "Swali lipi liko kwenye orodha ya ukaguzi wa faragha?", options: ["App ina rangi gani?", "Je, kampuni inatumia data ya wanafunzi kufundisha AI yake?", "Imepakuliwa mara ngapi?", "Je, iko kwenye mtindo?"], answer: 1, why: "Matumizi ya data ya wanafunzi kufundisha AI ni wasiwasi mkubwa." },
      { objective: "O4", q: "Mipango ya bure ya watumiaji binafsi na mipango ya elimu:", options: ["Mara nyingi ina masharti tofauti", "Ina masharti yale yale kila wakati", "Haikusanyi data kamwe", "Yote si salama"], answer: 0, why: "Soma masharti ya mpango utakaotumia." },
      { objective: "O4", q: "Nani anapaswa kuthibitisha orodha yako ya kijani?", options: ["Hakuna mtu", "Mwanafunzi", "Kampuni inayouza", "Afisa wa faragha wa wilaya au timu ya teknolojia"], answer: 3, why: "Idhini inahitaji watu wanaowajibika kwa faragha." },
      { objective: "O4", q: "Sheria za majimbo za faragha ya wanafunzi:", options: ["Hazipo kamwe", "Zinaweza kuongeza matakwa zaidi ya FERPA na COPPA", "Zinachukua nafasi ya sheria ya shirikisho kabisa", "Zinahusu vyuo tu"], answer: 1, why: "Sheria ya shirikisho ni kiwango cha chini; majimbo yanaweza kuongeza zaidi." },
      { objective: "O5", q: "Chini ya COPPA, ridhaa ya shule inafanya kazi pale tu data inapokusanywa:", options: ["Kwa sababu yoyote", "Kwa matangazo", "Kwa matumizi na manufaa ya shule, bila kusudi lingine la kibiashara", "Kamwe"], answer: 2, why: "Hilo ndilo sharti la FTC." },
      { objective: "O5", q: "FTC inapendekeza shule:", options: ["Ziwaache wanafunzi waidhinishe zana", "Zifiche idhini zao", "Ziwaambie wazazi huduma zipi za mtandaoni zimeidhinishwa", "Ziepuke zana zote"], answer: 2, why: "Ni desturi inayopendekezwa." },
      { objective: "O5", q: "Akaunti za wanafunzi zinapaswa kwa upendeleo kuwa:", options: ["Zinazosimamiwa na shule chini ya makubaliano", "Usajili binafsi kwa barua pepe ya nyumbani", "Zinazoshirikiwa na darasa zima", "Zilizofunguliwa na kampuni inayouza"], answer: 0, why: "Akaunti zinazosimamiwa na shule zinaweka udhibiti kwa shule." },
      { objective: "O6", q: "Zana ya NYEKUNDU ni:", options: ["Inakaguliwa milele", "Imeidhinishwa kwa matumizi yote", "Kwa kazi za mwalimu tu", "Hairuhusiwi"], answer: 3, why: "Nyekundu inamaanisha usitumie." },
      { objective: "O6", q: "Zana ya KIJANI inaweza kutumiwa na taarifa za wanafunzi:", options: ["Bila mipaka yoyote", "Kama makubaliano ya wilaya yanavyoruhusu", "Kamwe", "Wikendi tu"], answer: 1, why: "Makubaliano yanaweka mipaka." },
      { objective: "O6", q: "Kila zana kwenye orodha inapaswa kuonyesha:", options: ["Idadi ya mara ilipopakuliwa", "Nembo yake tu", "Bei yake tu", "Rangi, sababu, matumizi yanayoruhusiwa na tarehe ya ukaguzi"], answer: 3, why: "Walimu wanahitaji sababu na mipaka." },
      { objective: "O3", q: "Mazoezi ya kozi hii yanapaswa kutumia:", options: ["Majina ya wanafunzi", "Kumbukumbu halisi za wanafunzi", "Mifano ya kubuni", "Nyaraka za IEP"], answer: 2, why: "Usitumie kamwe taarifa zinazomtambulisha mwanafunzi katika mazoezi." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 3, 7, 8, 9, 10, 13, 15, 16, 18] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Kadi ya prompt", objective: "O2", notYet: "Prompt chini ya tatu, au prompt zinakosa sehemu.", meets: "Prompt tatu zilizojaribiwa (barua pepe kwa wazazi, kifungu cha viwango, maswali ya mazoezi) zenye jukumu, wanafunzi, lengo, vikwazo na muundo.", exceeds: "Kila prompt ina swali la kufuatilia lenye manufaa ambalo walimu wanaweza kutumia tena." },
      { name: "Matokeo yamekaguliwa", objective: "O3", notYet: "Matokeo yalitumiwa bila kukaguliwa, au funguo za majibu hazikutatuliwa.", meets: "Kila tokeo lilikaguliwa na makosa yakarekebishwa; kila jibu katika funguo lilitatuliwa.", exceeds: "Anaandika makosa mangapi yalipatikana na ya aina gani." },
      { name: "Orodha ya ukaguzi wa faragha", objective: "O4", notYet: "Zana hazikukaguliwa, au orodha ya ukaguzi haitokani na rasilimali ya Model Terms of Service.", meets: "Kila zana ilikaguliwa kwa orodha ya ukaguzi wa faragha iliyotokana na rasilimali ya Model Terms of Service kwenye studentprivacy.ed.gov.", exceeds: "Vipengele visivyo wazi vilitumwa kwa kampuni kama maswali ya maandishi." },
      { name: "Sheria za umri", objective: "O5", notYet: "Matumizi ya wanafunzi yanaruhusiwa bila kukagua sheria za umri.", meets: "Anaandika umri wa chini wa sasa wa kila zana na sheria ya ruhusa ya wazazi kutoka masharti yake.", exceeds: "Anaeleza jinsi wanafunzi wangeweza kuitumia, kama kwa akaunti zinazosimamiwa na shule." },
      { name: "Orodha ya kijani-njano-nyekundu", objective: "O6", notYet: "Zana chini ya tatu, au rangi bila sababu.", meets: "Angalau zana tatu, kila moja na rangi na sababu ya mstari mmoja.", exceeds: "Pia inaonyesha matumizi yanayoruhusiwa na tarehe ya ukaguzi, na ilitumwa kwa afisa wa faragha au timu ya teknolojia ili kuthibitisha." }
    ]
  },
  evaluation: {
    results: [
      "Viongozi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Shule zinazotoa orodha ya zana za AI ya kijani-njano-nyekundu ndani ya siku 30 (utafiti wa kufuatilia)",
      "Walimu wanaoripoti kutumia kadi ya prompt ya pamoja kwa kazi za kila wiki (utafiti wa kufuatilia)",
      "Viongozi wanaoendelea na kozi ya 3 ya AI kwa Viongozi wa Shule na Elimu"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta yenye intaneti na angalau msaidizi mmoja wa AI wa bure",
      "Rasilimali ya Model Terms of Service kutoka studentprivacy.ed.gov",
      "Mifano ya kubuni kwa kazi za mazoezi",
      "Orodha ya wilaya yako ya zana zilizoidhinishwa na makubaliano, kama ipo",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Fanyeni jaribio la awali pamoja, kisha fanyeni kazi tatu za kila siku moja kwa moja kwa maelezo ya kubuni.",
      "Usitumie kamwe majina halisi ya wanafunzi, alama au maelezo ya IEP katika mazoezi.",
      "Gawanya kikundi ili kila jozi ikague zana tofauti, kisha unganisheni matokeo kuwa rasimu moja ya orodha.",
      "Mwalike afisa wa faragha wa wilaya au timu ya teknolojia kupitia rasimu ya orodha.",
      "Pima kazi ya mwisho kwa rubriki, na hakikisha tarehe ya ukaguzi ya kila zana imeandikwa."
    ]
  }
};
