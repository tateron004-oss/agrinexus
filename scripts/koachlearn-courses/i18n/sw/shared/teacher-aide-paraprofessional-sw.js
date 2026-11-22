"use strict";

// Koach Learn course (Swahili translation of shared/teacher-aide-paraprofessional.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.
// The course stays about US public schools. English sentences used as grammar, reading and phonics practice stay in English,
// because the ParaPro Assessment is in English; only the explanations are translated.

module.exports = {
  id: "teacher-aide-paraprofessional-sw",
  lang: "sw",
  translationOf: "teacher-aide-paraprofessional",
  category: "Workforce Development",
  name: "Maandalizi ya Msaidizi wa Mwalimu (Paraprofessional)",
  skills: "Kukagua masharti ya jimbo lako kwa msaidizi wa mwalimu, Kujiandaa kwa mtihani wa ParaPro, Kuongoza shughuli ya kikundi kidogo, Kusaidia tabia ya wanafunzi na kulinda faragha yao, Kuwaweka watoto salama na kuripoti wasiwasi",
  outcome: "kujua hasa jimbo lako na wilaya ya shule wanataka nini kutoka kwa msaidizi wa mwalimu, kujiandaa kwa mtihani wa kusoma, kuandika na hesabu ambao shule nyingi hutumia, kuongoza shughuli ya kikundi kidogo kutoka kwenye mpango wa mwalimu, na kuwaweka wanafunzi salama na taarifa zao siri.",
  about: [
    "Wasaidizi wa walimu, wanaoitwa pia paraprofessionals au paraeducators, hufanya kazi pamoja na walimu kuwasaidia wanafunzi kujifunza. Shule za Marekani huwaajiri kwa madarasa ya kawaida, elimu maalum, madarasa ya chini na wanafunzi wanaojifunza Kiingereza. Ni kazi nzuri ya kwanza katika elimu, na wasaidizi wengi baadaye huwa walimu.",
    "Kozi hii inakuandaa kwa kazi hii na kwa hatua za kuajiriwa. Utakagua masharti ya jimbo lako, utafanya mazoezi ya aina ya maswali ya kusoma, kuandika na hesabu yaliyo kwenye mtihani wa ParaPro (ParaPro Assessment) wa ETS, na utajifunza kazi ya kila siku: kuongoza vikundi vidogo, kusaidia tabia, kuweka kumbukumbu za wanafunzi siri, na kuripoti mtoto anapoweza kuwa hatarini.",
    "Kozi hii inakuandaa; haikupi cheti wala leseni. Jimbo lako na wilaya ya shule ndio wanaoamua nani anaweza kuajiriwa, na wao ndio wanaoweka mtihani na alama ya kufaulu. Kila somo linakuonyesha mahali pa kukagua.",
    "Kila somo linachukua kama dakika tano. Soma somo, tazama slaidi, fanya kazi ya \"Jaribu sasa\", kisha ujibu maswali mawili mafupi. Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Tengeneza Mpango wako wa Kujiandaa kuwa Msaidizi wa Mwalimu kwenye ukurasa mmoja au miwili: (1) masharti ya jimbo lako na ya wilaya moja, pamoja na kurasa rasmi ulizokagua; (2) njia utakayotumia (masomo ya chuo, shahada, au mtihani kama ParaPro) na mpango wa kusoma wenye tarehe; (3) shughuli ya kikundi kidogo ya dakika 10 iliyoandikwa kutoka kwenye mpango wa mfano wa mwalimu, pamoja na vidokezo utakavyotoa na ujumbe kwa mwalimu; na (4) hatua ungechukua na ungempigia nani simu kama ungedhani mtoto anadhuriwa.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima na vijana wanaotaka kufanya kazi shuleni: wazazi, wajitolea wa shule, madereva wa basi na wafanyakazi wa jikoni wanaotaka kazi darasani, watu wanaobadilisha kazi, watu wanaorudi nyumbani kutoka gerezani (pale sheria za jimbo zinaporuhusu), na watu kutoka jamii zisizopata huduma za kutosha wanaotaka kuhudumia shule za mtaa wao.",
    startingPoint: "Wengi wana cheti cha shule ya sekondari (high school) au GED na wanapenda kufanya kazi na watoto. Wengi hawajasoma hesabu au sarufi kwa miaka mingi, hawajui sheria za kuajiri, na hawajawahi kuona jinsi darasa linavyoendeshwa kwa upande wa watu wazima.",
    gap: "Shule zinahitaji wasaidizi wanaotimiza masharti ya jimbo, wanaoweza kufaulu mtihani unaotakiwa, kufuata mpango wa mwalimu, kushughulikia tabia kwa utulivu na kuwalinda watoto. Wanafunzi wanahitaji kujua masharti ya jimbo lao, kuburudisha ujuzi wao wa kusoma, kuandika na hesabu, na kujifunza kazi za kila siku, ili waombe kazi kwa kujiamini na waidumishe.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi, na kila neno la shule linaelezwa",
      "Masharti yanatofautiana kwa jimbo na kwa wilaya; kozi inafundisha jinsi ya kukagua, si sheria moja ya taifa zima",
      "Vifaa: simu au kompyuta ya maktaba; mazoezi yanaweza kufanywa kwenye karatasi",
      "Usalama wa watoto na faragha ya wanafunzi: hakuna majina halisi wala taarifa halisi za wanafunzi katika zoezi lolote",
      "Uchunguzi wa historia (background check): shule nyingi zinautaka; kozi inasema hivyo na haimuahidi mtu yeyote kazi"
    ],
    prerequisites: "Kwa kazi hii, cheti cha shule ya sekondari au kinacholingana nacho kinatarajiwa. Wanafunzi wasio nacho wanaweza kuanza na kozi za GED. Kozi \"Hesabu za Kila Siku\" inamsaidia yeyote anayetaka mazoezi zaidi ya hesabu."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa jimbo lako na wilaya ya shule unayotaka kufanyia kazi", action: "kuorodhesha sifa wanazotaka kwa msaidizi wa mwalimu na kurasa rasmi zinazozitaja", standard: "ukitaja njia ya elimu, mtihani wowote na alama ya kufaulu, na uchunguzi wa historia" },
    { id: "O2", condition: "Ukipewa maswali ya mazoezi ya kusoma, kuandika na hesabu kama yale ya mtihani wa ParaPro", action: "kujibu maswali na kueleza kila kosa", standard: "ukipata angalau 8 kati ya 10 sahihi" },
    { id: "O3", condition: "Ukipewa mpango wa somo wa mwalimu kwa kikundi kidogo", action: "kuongoza shughuli fupi ya mazoezi inayofuata mpango na kutoa vidokezo kabla ya majibu", standard: "ukibaki kwenye lengo la mwalimu na kuandika ujumbe wa mistari miwili kwa mwalimu" },
    { id: "O4", condition: "Ukipewa hali ya tabia au ya faragha darasani", action: "kuchagua hatua tulivu na chanya na kushiriki taarifa za mwanafunzi tu na wafanyakazi wanaozihitaji", standard: "ukifuata mpango wa mwalimu na wa mwanafunzi" },
    { id: "O5", condition: "Ukipewa hali ambapo mtoto anaweza kudhuriwa au kuwa hatarini", action: "kueleza hatua unazochukua, unayemwambia na lini", standard: "ukiripoti siku hiyo hiyo kwa njia ambayo jimbo lako na shule wanataka, bila kuchunguza mwenyewe" }
  ],
  chapters: [
    {
      name: "Sura 1: Kupata sifa zinazotakiwa",
      lessons: [
        {
          title: "Kazi yenyewe, na masharti ya jimbo lako",
          objectives: ["O1"],
          minutes: 6,
          goal: "Orodhesha sifa ambazo jimbo lako na wilaya moja ya shule wanataka kwa msaidizi wa mwalimu.",
          text: [
            "Msaidizi wa mwalimu anafanya kazi chini ya mwalimu. Unaweza kusaidia kikundi kidogo kusoma, kumsaidia mwanafunzi mwenye ulemavu kufuata somo, kuangalia watoto wakati wa chakula cha mchana au kwenye uwanja wa michezo, au kuandaa vifaa. Mwalimu anapanga na kusahihisha; wewe unasaidia. Majina ya kazi ni pamoja na teacher's aide, instructional assistant, paraeducator na special education aide.",
            "Sheria za serikali kuu ya Marekani (federal) zinawahusu wasaidizi wanaosaidia kufundisha katika shule zinazolipiwa na Title I, mpango wa serikali kuu kwa shule zenye familia nyingi za kipato cha chini. Wasaidizi hao wanahitaji cheti cha shule ya sekondari au kinacholingana nacho, na kimojawapo kati ya hivi: miaka miwili ya masomo ya chuo, shahada ya associate au zaidi, au kufaulu mtihani rasmi wa jimbo au wa eneo wa kusoma, kuandika na hesabu. Shule nyingi hutumia mtihani wa ParaPro wa ETS kama mtihani huo.",
            "Kila jimbo, na wakati mwingine kila wilaya, linaongeza masharti yake juu ya hayo. ETS inaorodhesha alama ya kufaulu ParaPro kwa kila jimbo linaloutumia; katika baadhi ya majimbo kila wilaya inaweka alama yake, na majimbo mengine yanatumia mitihani mingine (Rhode Island sasa inakubali ParaPathways pekee). Karibu kila shule pia inataka uchunguzi wa historia na alama za vidole. Kwa hiyo kagua jimbo lako na wilaya yako kila wakati kabla ya kulipia mtihani.",
            "Mahali pa kukagua: tovuti ya idara ya elimu ya jimbo lako, tangazo la kazi kwenye tovuti ya wilaya, na ukurasa wa masharti ya majimbo kwenye parapro.ets.org."
          ],
          steps: ["Tafuta \"paraprofessional\" au \"paraeducator\" kwenye tovuti ya idara ya elimu ya jimbo lako.", "Fungua tangazo halisi la kazi kutoka wilaya iliyo karibu nawe na usome masharti.", "Kagua parapro.ets.org kuona mtihani na alama ya kufaulu ya jimbo lako.", "Andika njia ambayo tayari unaitimiza au utakayotumia: masomo ya chuo, shahada, au mtihani.", "Andika uchunguzi wa historia na hatua nyingine zozote (uchunguzi wa afya, mafunzo)."],
          words: [["Paraprofessional", "mfanyakazi wa shule anayesaidia wanafunzi kujifunza chini ya maelekezo ya mwalimu; anaitwa pia msaidizi wa mwalimu (teacher's aide) au paraeducator."], ["Title I", "mpango wa serikali kuu ya Marekani unaotoa pesa za ziada kwa shule zenye wanafunzi wengi kutoka familia za kipato cha chini."], ["ParaPro Assessment", "mtihani wa ETS wa ujuzi wa kusoma, kuandika na hesabu, na wa kuutumia ujuzi huo kusaidia darasani."], ["Alama ya kufaulu (qualifying score)", "alama ya chini kabisa ambayo jimbo lako au wilaya yako inakubali."], ["Uchunguzi wa historia (background check)", "ukaguzi wa rekodi za uhalifu na rekodi nyingine ambao shule hufanya kabla ya kuajiri."]],
          slides: [
            { title: "Msaidizi wa mwalimu anafanya nini", bullets: ["Anafanya kazi chini ya maelekezo ya mwalimu", "Anasaidia vikundi vidogo na mwanafunzi mmoja mmoja", "Anasaidia wanafunzi wenye ulemavu na wanaojifunza Kiingereza", "Anaandaa vifaa na kusaidia kuwaangalia watoto"] },
            { title: "Sheria ya serikali kuu kwa wasaidizi wa Title I", bullets: ["Cheti cha shule ya sekondari au kinacholingana nacho", "PAMOJA na miaka 2 ya chuo, shahada ya associate, au mtihani wa jimbo au eneo uliofaulu"] },
            { title: "Jimbo na wilaya yako wanaongeza masharti", bullets: ["Wengine wanatumia ParaPro; wengine mitihani mingine", "Alama za kufaulu zinatofautiana kwa jimbo, wakati mwingine kwa wilaya", "Uchunguzi wa historia na alama za vidole ni kawaida"] },
            { title: "Mahali pa kukagua", bullets: ["Idara ya elimu ya jimbo lako", "Tangazo la kazi la wilaya", "parapro.ets.org: ukurasa wa masharti ya majimbo"] }
          ],
          sources: [
            { name: "34 CFR 200.58: sifa za wasaidizi wa walimu wa Title I (Cornell LII)", url: "https://www.law.cornell.edu/cfr/text/34/200.58" },
            { name: "ETS ParaPro: masharti ya majimbo na alama za kufaulu", url: "https://parapro.ets.org/state-requirements.html" },
            { name: "ETS ParaPro: kuhusu mtihani", url: "https://parapro.ets.org/test-takers/about-the-test.html" }
          ],
          tryIt: "Tafuta tangazo moja halisi la kazi ya msaidizi wa mwalimu kutoka wilaya ya shule iliyo karibu nawe. Andika: jina la kazi, elimu au mtihani unaotakiwa, uchunguzi wa historia, na mshahara kama umetajwa. Kisha tafuta jimbo lako kwenye ukurasa wa masharti ya majimbo wa ETS na uandike kama linatumia ParaPro.",
          youCanNow: "kuorodhesha jimbo lako na wilaya iliyo karibu wanataka nini kwa msaidizi wa mwalimu, na kuonyesha ulikagua wapi.",
          quickCheck: [
            { objective: "O1", q: "Pamoja na cheti cha shule ya sekondari, njia ipi inatimiza sheria ya serikali kuu kwa msaidizi wa kufundisha wa Title I?", options: ["Miaka mitano ya kulea watoto wa watu", "Leseni ya udereva", "Shahada ya associate", "Barua kutoka kwa mzazi"], answer: 2, why: "Sheria inataja miaka miwili ya chuo, shahada ya associate au zaidi, au mtihani rasmi wa jimbo au wa eneo." },
            { objective: "O1", q: "Rafiki anasema alama ya kufaulu ParaPro ni ile ile kila mahali. Unafanya nini?", options: ["Unakagua jimbo lako, na wilaya yako, kwenye kurasa rasmi", "Unaamini na kujiandikisha kwa mtihani", "Unaruka mtihani na kuomba kazi tu", "Unamwomba rafiki akufanyie mtihani"], answer: 0, why: "Alama za kufaulu zinawekwa na kila jimbo, na katika baadhi ya majimbo na kila wilaya." }
          ]
        },
        {
          title: "Mazoezi ya ParaPro: kusoma na kuandika",
          objectives: ["O2"],
          minutes: 5,
          goal: "Jibu maswali ya mazoezi ya kusoma na kuandika na ueleze kila kosa.",
          text: [
            "ETS inasema ParaPro inapima ujuzi na maarifa ya kusoma, kuandika na hesabu, na uwezo wako wa kuyatumia unaposaidia darasani. Kwa hiyo baadhi ya maswali yanakutaka usome au uandike vizuri, na mengine yanauliza jinsi ungemsaidia mwanafunzi katika kusoma au kuandika. Mtihani uko kwa Kiingereza, kwa hiyo mifano ya mazoezi katika somo hili iko kwa Kiingereza.",
            "Maswali ya kusoma yanaweza kuuliza wazo kuu la kifungu, jambo moja dogo, maana ya neno kutokana na maneno yanayolizunguka, au kile mwandishi anachodokeza bila kukisema. Soma swali kwanza, kisha kifungu, kisha urudi kutafuta ushahidi.",
            "Maswali ya kuandika yanaweza kukutaka upate kosa la sarufi, tahajia au alama za uandishi, au uchague njia bora ya kurekebisha sentensi. Maswali ya darasani yanaweza kuuliza jinsi ya kumsaidia mwanafunzi kutamka neno sauti kwa sauti au kurekebisha sentensi ndefu iliyounganishwa vibaya (run-on).",
            "ETS inatoa bure Study Companion na Study Guide zenye maswali ya mfano kwenye ukurasa wake wa maandalizi ya mtihani. Zitumie; zinaonyesha aina halisi ya maswali kuliko chanzo kingine chochote."
          ],
          steps: ["Soma swali kabla ya kifungu.", "Tafuta mstari katika kifungu unaothibitisha jibu lako.", "Kwa maswali ya kuandika, soma sentensi kwa sauti kichwani na usikilize kinachosikika vibaya.", "Futa majibu unayojua si sahihi, kisha uchague.", "Kwa kila kosa, andika mstari mmoja: kwa nini jibu sahihi ni sahihi."],
          words: [["Wazo kuu (main idea)", "kile ambacho kifungu kinahusu kwa sehemu kubwa."], ["Vidokezo vya muktadha (context clues)", "maneno yanayozunguka neno jipya yanayokusaidia kukisia maana yake."], ["Run-on sentence", "sentensi mbili zilizounganishwa bila alama sahihi ya uandishi au neno la kuunganisha."], ["Phonics", "kuoanisha herufi na sauti zake ili kusoma maneno."]],
          slides: [
            { title: "ParaPro inapima nini", bullets: ["Kusoma, kuandika na hesabu", "Kutumia ujuzi huo kusaidia wanafunzi darasani"] },
            { title: "Maswali ya kusoma", bullets: ["Wazo kuu na mambo madogo", "Maana ya neno kutokana na vidokezo vya muktadha", "Kile mwandishi anachodokeza", "Tafuta ushahidi katika kifungu"] },
            { title: "Maswali ya kuandika", bullets: ["Pata kosa la sarufi, tahajia au alama za uandishi", "Chagua marekebisho bora ya sentensi", "Jinsi ya kumsaidia mwanafunzi kurekebisha maandishi yake"] },
            { title: "Soma kwa akili", bullets: ["Tumia Study Companion na Study Guide za bure za ETS", "Andika kwa nini kwa kila kosa"] }
          ],
          sources: [
            { name: "ETS ParaPro: maandalizi ya mtihani (Study Companion na Study Guide)", url: "https://parapro.ets.org/parapro-test-prep.html" },
            { name: "ETS ParaPro: kuhusu mtihani", url: "https://parapro.ets.org/test-takers/about-the-test.html" }
          ],
          tryIt: "Fanya mazoezi sasa. 1) Rekebisha sentensi hii: \"The students was excited, they ran to the window.\" 2) Katika \"The path was so narrow that two people could not walk side by side,\" neno narrow lina maana gani? 3) Andika sentensi moja kuhusu jinsi ungemsaidia mtoto anayesoma \"ship\" kama \"sip\". Kagua: \"The students were excited, so they ran to the window\" (au tumia nukta); narrow maana yake si pana (finyu); onyesha herufi \"sh\" na mfanye mazoezi ya sauti yake pamoja.",
          youCanNow: "kujibu maswali ya mazoezi ya kusoma na kuandika, kupata ushahidi, na kueleza makosa yako.",
          quickCheck: [
            { objective: "O2", q: "Sentensi ipi imeandikwa kwa usahihi?", options: ["Her and me helped the class.", "The children was ready.", "Each of the boys have a book.", "The teacher and I set up the tables."], answer: 3, why: "\"The teacher and I\" ndiye kiima, na \"set up\" kinaendana nacho; nyingine zina makosa ya kiima au kitenzi." },
            { objective: "O2", q: "Kifungu kinasema, \"The garden was barren; nothing grew there.\" Neno barren lina maana gani?", options: ["Imejaa maua", "Haizai chochote", "Imelowa sana", "Imepandwa karibuni"], answer: 1, why: "Kidokezo \"nothing grew there\" (hakuna kilichoota pale) kinakuambia barren maana yake haizai chochote." }
          ]
        },
        {
          title: "Mazoezi ya ParaPro: hesabu, na mpango wako wa kusoma",
          objectives: ["O2", "O1"],
          minutes: 6,
          goal: "Jibu maswali ya mazoezi ya hesabu na uandike mpango wa kusoma wenye tarehe ya mtihani.",
          text: [
            "Hesabu katika ParaPro inahusu mambo ya msingi ambayo ungewasaidia wanafunzi nayo: kuelewa namba, kujumlisha, kutoa, kuzidisha na kugawanya, sehemu, desimali na asilimia, vipimo rahisi, kusoma chati na grafu, na milinganyo rahisi. Baadhi ya maswali yanauliza jinsi ungemweleza mtoto wazo la hesabu.",
            "Fanya polepole na uonyeshe hatua zako kwenye karatasi ya kuandikia. Kwa maswali ya hadithi: tafuta swali, toa namba, amua operesheni, tatua, kisha ujiulize \"Je, jibu hili lina mantiki?\"",
            "Mpango wa kusoma unageuza \"siku moja\" kuwa tarehe. Jua jinsi ya kujiandikisha (kituo cha mitihani au nyumbani, pale inapotolewa), kagua ada na masharti ya kitambulisho kwenye tovuti rasmi, chagua tarehe ya mtihani wiki tatu hadi sita kutoka sasa, na upe kila wiki jambo moja la kuzingatia: kusoma, kuandika, hesabu, kisha seti kamili ya mazoezi."
          ],
          steps: ["Soma swali la hadithi mara mbili na uzungushie swali duara.", "Andika namba unazohitaji.", "Chagua operesheni na utatue kwenye karatasi.", "Kagua kwamba jibu lina mantiki.", "Weka tarehe ya mtihani na jambo la kusoma kila wiki kwenye kalenda."],
          words: [["Sehemu (fraction)", "kipande cha kitu kizima, kama 3/4."], ["Asilimia (percent)", "namba kati ya 100; 25% maana yake 25 kati ya 100."], ["Mlinganyo (equation)", "sentensi ya hesabu yenye alama ya kulingana, kama 3 + x = 10."]],
          slides: [
            { title: "Hesabu katika ParaPro", bullets: ["Kuelewa namba na operesheni nne", "Sehemu, desimali na asilimia", "Vipimo, chati na milinganyo rahisi", "Jinsi ya kumweleza mtoto hesabu"] },
            { title: "Kutatua maswali ya hadithi", bullets: ["Zungushia swali duara", "Toa namba", "Chagua operesheni na utatue", "Je, jibu lina mantiki?"] },
            { title: "Mpango wako wa kusoma", bullets: ["Kagua usajili, ada na masharti ya kitambulisho kwenye tovuti rasmi", "Chagua tarehe wiki 3 hadi 6 kutoka sasa", "Jambo moja kila wiki, kisha seti kamili ya mazoezi"] }
          ],
          sources: [
            { name: "ETS ParaPro: jinsi ya kujiandikisha", url: "https://parapro.ets.org/how-to-register.html" },
            { name: "ETS ParaPro: masharti ya kitambulisho", url: "https://parapro.ets.org/test-takers/register-requirements.html" }
          ],
          tryIt: "Fanya mazoezi sasa. 1) Wanafunzi 24 wanagawanyika sawa kwenye meza 6. Ni wangapi kwa kila meza? 2) 3/4 ni asilimia ngapi? 3) 3 + x = 10; x ni nini? 4) Darasa linasoma kurasa 12 Jumatatu na 15 Jumanne. Ni kurasa ngapi kwa jumla? Majibu: 4, 75%, 7, 27. Kisha andika mpango wako wa kusoma: tarehe ya mtihani, na jambo moja kwa kila wiki.",
          youCanNow: "kutatua maswali rahisi ya hadithi hatua kwa hatua na kuweka mpango wa kusoma wenye tarehe halisi ya mtihani.",
          quickCheck: [
            { objective: "O2", q: "Shati moja linagharimu $8. Mwalimu ananunua 5. Jumla ni kiasi gani?", options: ["$13", "$35", "$40", "$45"], answer: 2, why: "5 x $8 = $40." },
            { objective: "O1", q: "Unapaswa kufanya nini KABLA ya kulipia ParaPro?", options: ["Kukagua kwamba jimbo lako au wilaya inaukubali na alama inayotakiwa", "Kununua kikokotoo kipya", "Kuacha kazi yako ya sasa", "Kumwomba mwanafunzi akuulize maswali"], answer: 0, why: "ETS inashauri uhakikishe ofisi ya jimbo au ya eneo lako inaukubali mtihani kabla ya kupanga tarehe." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kupata sifa zinazotakiwa",
        questions: [
          { objective: "O1", q: "Nani anaamua alama ya kufaulu ParaPro unayohitaji?", options: ["Jimbo lako, na katika baadhi ya majimbo wilaya yako", "Mwalimu unayefanya naye kazi", "Wazazi wa kila mwanafunzi", "Tovuti yoyote inayouza maandalizi ya mtihani"], answer: 0, why: "ETS inaorodhesha alama za kufaulu kwa kila jimbo; katika baadhi ya majimbo, wilaya zinaweka alama zao." },
          { objective: "O1", q: "Mahali bora pa kukagua masharti ya wilaya ni wapi?", options: ["Chapisho la mitandao ya kijamii", "Tangazo la kazi au tovuti ya wilaya yenyewe", "Rafiki aliyefanya kazi pale miaka mingi iliyopita", "Tangazo la biashara la maandalizi ya mtihani"], answer: 1, why: "Tangazo la wilaya yenyewe ndilo chanzo rasmi na cha sasa." },
          { objective: "O2", q: "Sentensi ipi inarekebisha run-on hii: \"I finished my work I went to recess\"?", options: ["I finished my work I, went to recess.", "I finished, my work I went to recess.", "I finished my work, then I went to recess.", "I finished my work, so I went to recess."], answer: 3, why: "Koma pamoja na neno la kuunganisha \"so\" inaunganisha kwa usahihi sentensi mbili kamili." },
          { objective: "O2", q: "20% ya 50 ni ngapi?", options: ["5", "25", "10", "70"], answer: 2, why: "20% ni 0.2, na 0.2 x 50 = 10." },
          { objective: "O2", q: "Katika swali la kusoma, unapaswa kutafuta ushahidi wa jibu lako wapi?", options: ["Ndani ya kifungu chenyewe", "Katika maoni yako mwenyewe", "Katika jibu refu zaidi", "Katika kichwa cha mtihani"], answer: 0, why: "Jibu sahihi linaungwa mkono na maneno yaliyo katika kifungu." }
        ]
      }
    },
    {
      name: "Sura 2: Kufanya kazi darasani",
      lessons: [
        {
          title: "Kuongoza kikundi kidogo kutoka kwenye mpango wa mwalimu",
          objectives: ["O3"],
          minutes: 5,
          goal: "Ongoza shughuli fupi ya mazoezi ya kikundi kidogo inayofuata mpango wa mwalimu.",
          text: [
            "Mwalimu anaamua wanafunzi wajifunze nini; wewe unawasaidia kukifanyia mazoezi. Kabla kikundi hakijaanza, muulize mwalimu: Lengo ni nini? Wanafunzi wanapaswa kuweza kufanya nini mwishoni? Msaada gani unaruhusiwa kutoa?",
            "Toa vidokezo kabla ya majibu. Mpangilio mzuri ni: subiri sekunde chache, uliza swali linaloonyesha njia (\"Neno hili linaanza na sauti gani?\"), onyesha mfano unaofanana, na hapo tu ndipo uonyeshe jibu. Hii inaitwa scaffolding (kiunzi): unatoa msaada, kisha unauondoa kidogo kidogo.",
            "Sifu juhudi kwa maneno kamili (\"Ulikagua kazi yako, ndiyo maana uliliona kosa\"). Weka kikundi kwenye kazi kwa maelekezo mafupi na wazi. Mwishoni, mwandikie mwalimu ujumbe mfupi: nani ameelewa, nani amepata shida na katika nini."
          ],
          steps: ["Muulize mwalimu lengo na msaada unaoruhusiwa.", "Andaa vifaa kabla wanafunzi hawajafika.", "Eleza kazi kwa sentensi moja au mbili fupi.", "Toa vidokezo kabla ya majibu: subiri, uliza, onyesha mfano, kisha onyesha jibu.", "Mwishoni andika ujumbe wa mistari miwili kwa mwalimu."],
          words: [["Mpango wa somo (lesson plan)", "mpango wa maandishi wa mwalimu kuhusu wanafunzi watajifunza nini na jinsi gani."], ["Scaffolding (kiunzi)", "msaada unaomwezesha mwanafunzi kufanya kazi, kisha unaondolewa hatua kwa hatua."], ["Muda wa kusubiri (wait time)", "sekunde chache za kimya baada ya swali ili wanafunzi wafikiri."]],
          slides: [
            { title: "Mwalimu anaongoza; wewe unasaidia", bullets: ["Uliza: lengo ni nini?", "Uliza: msaada gani unaruhusiwa?"] },
            { title: "Vidokezo kabla ya majibu", bullets: ["Subiri sekunde chache", "Uliza swali linaloonyesha njia", "Onyesha mfano unaofanana", "Hapo tu ndipo uonyeshe jibu"] },
            { title: "Kiweke kikundi kiendelee", bullets: ["Maelekezo mafupi na wazi", "Sifu juhudi kwa maneno kamili", "Ujumbe wa mistari miwili kwa mwalimu mwishoni"] }
          ],
          tryIt: "Huu ni mpango wa mfano wa mwalimu: \"Lengo: wanafunzi wajumlishe namba za tarakimu mbili kwa kubeba (regrouping). Kikundi: wanafunzi 4, dakika 10.\" Andika shughuli yako: jinsi unavyoieleza kwa sentensi mbili, maswali matatu ya mazoezi, vidokezo viwili utakavyotoa kabla ya kuonyesha jibu, na ujumbe wa mistari miwili kwa mwalimu. Tumia herufi za kwanza za kubuni, kamwe si majina halisi ya wanafunzi.",
          youCanNow: "kugeuza mpango wa mwalimu kuwa shughuli fupi ya kikundi kidogo yenye vidokezo na ujumbe wa kurudisha kwa mwalimu.",
          quickCheck: [
            { objective: "O3", q: "Mwanafunzi amekwama kwenye neno. Hatua yako ya KWANZA ni ipi?", options: ["Kumtamkia neno mara moja", "Kusubiri, kisha kuuliza linaanza na sauti gani", "Kwenda kwa mwanafunzi anayefuata", "Kumwambia abahatishe"], answer: 1, why: "Muda wa kusubiri na swali linaloonyesha njia vinamwacha mwanafunzi afikiri kwanza." },
            { objective: "O3", q: "Nani anaamua kikundi kidogo kijifunze nini?", options: ["Msaidizi wa mwalimu", "Wanafunzi", "Mwalimu", "Wazazi"], answer: 2, why: "Mwalimu anapanga somo; msaidizi anawasaidia wanafunzi kulifanyia mazoezi." }
          ]
        },
        {
          title: "Kusaidia tabia, elimu maalum na faragha",
          objectives: ["O4"],
          minutes: 6,
          goal: "Chagua hatua tulivu na chanya kwa tabia fulani na ushiriki taarifa za mwanafunzi tu na wafanyakazi wanaozihitaji.",
          text: [
            "Tabia ni njia moja ambayo wanafunzi huwasiliana. Kaa mtulivu na tumia sauti ya chini na thabiti. Wakumbushe wanafunzi kanuni kwa njia chanya (\"Tembea kwa miguu\" badala ya \"Usikimbie\"). Watambue na uwasifu wanafunzi wanaofanya jambo sahihi. Toa machaguo unapoweza (\"Unataka kuanza na ukurasa mwekundu au wa bluu?\"). Fuata mpango wa darasa wa mwalimu, na umwite mwalimu au wafanyakazi wa shule mara moja ikiwa mtu yeyote anaweza kuumia.",
            "Wasaidizi wengi hufanya kazi na wanafunzi wenye IEP, yaani Individualized Education Program (Mpango wa Elimu wa Mtu Binafsi) chini ya sheria ya serikali kuu ya elimu maalum (IDEA). IEP au mpango wa tabia unaweza kusema hasa msaada anaopata mwanafunzi, kama muda wa ziada, mapumziko mahali tulivu, au ratiba ya picha. Muulize mwalimu sehemu zipi za mpango wewe unazitekeleza, na uzifuate kila wakati.",
            "Taarifa za mwanafunzi ni siri. FERPA ni sheria ya serikali kuu inayowapa wazazi haki ya kuona kumbukumbu za elimu za mtoto wao na udhibiti fulani juu ya nani mwingine anaziona. Kama msaidizi, unashiriki alama, tabia, afya au mambo ya IEP tu na wafanyakazi wa shule wanaoyahitaji kwa kazi yao. Usiwazungumzie wanafunzi mtaani kamwe, usiweke habari zao mtandaoni, wala usiwapige picha kwa simu yako."
          ],
          steps: ["Kaa mtulivu na tumia sauti ya chini.", "Sema kanuni kama jambo la kufanya, si la kutofanya.", "Wasifu wanafunzi wanaoifuata.", "Fuata mpango wa mwalimu na IEP au mpango wa tabia wa mwanafunzi.", "Pata msaada mara moja ikiwa mtu yeyote anaweza kuumia.", "Shiriki taarifa za mwanafunzi tu na wafanyakazi wanaozihitaji."],
          words: [["IEP", "Individualized Education Program: mpango wa maandishi kwa mwanafunzi mwenye ulemavu, chini ya sheria ya serikali kuu IDEA."], ["IDEA", "Individuals with Disabilities Education Act, sheria ya serikali kuu ya Marekani ya elimu maalum."], ["FERPA", "sheria ya serikali kuu ya Marekani inayolinda faragha ya kumbukumbu za elimu za wanafunzi."], ["Msaada chanya wa tabia (positive behavior support)", "kufundisha na kusifu tabia unayotaka, si kujibu matatizo tu."]],
          slides: [
            { title: "Msaada wa tabia ulio tulivu na chanya", bullets: ["Sauti ya chini na thabiti", "Sema la KUFANYA: \"Tembea kwa miguu\"", "Wasifu wanaofanya vizuri", "Toa machaguo unapoweza"] },
            { title: "Wanafunzi wenye IEP", bullets: ["IEP: mpango wa maandishi chini ya IDEA", "Uliza sehemu zipi wewe unazitekeleza", "Ufuate kila wakati"] },
            { title: "Weka taarifa za wanafunzi siri", bullets: ["FERPA inalinda kumbukumbu za elimu", "Shiriki tu na wafanyakazi wanaozihitaji", "Usiongee mtaani, usiweke mtandaoni, usipige picha"] }
          ],
          sources: [
            { name: "Idara ya Elimu ya Marekani: FERPA ni nini?", url: "https://studentprivacy.ed.gov/faq/what-ferpa" },
            { name: "Idara ya Elimu ya Marekani: IDEA", url: "https://sites.ed.gov/idea/" }
          ],
          tryIt: "Hali: wakati wa kusoma, mwanafunzi (tumwite J.) anatupa kitabu chake na kusema \"Hii ni ya kijinga.\" Mpango wake wa tabia unasema anaweza kupumzika dakika mbili kwenye kona tulivu. Andika unachosema na kufanya, kwa mpangilio. Kisha andika ungemwambia nani kuhusu hili baadaye, na nani USINGEMWAMBIA.",
          youCanNow: "kujibu tabia kwa utulivu na kwa njia chanya, kufuata mpango wa mwanafunzi, na kuweka taarifa za wanafunzi siri.",
          quickCheck: [
            { objective: "O4", q: "Maelekezo yapi yamesemwa kwa njia chanya?", options: ["\"Acha kupiga kelele!\"", "\"Usiguse hicho.\"", "\"Acha kukimbia.\"", "\"Tumia sauti ya chini, tafadhali.\""], answer: 3, why: "Yanamwambia mwanafunzi la kufanya badala ya kumwambia tu asilofanya." },
            { objective: "O4", q: "Jirani dukani anakuuliza mwanafunzi wa darasa lako anaendeleaje. Wewe:", options: ["Unamweleza mambo machache kwa sababu ni jirani", "Unasema kwa adabu kwamba huwezi kuzungumza kuhusu wanafunzi", "Unamwonyesha kazi ya mwanafunzi kwenye simu yako", "Unaeleza IEP ya mwanafunzi"], answer: 1, why: "Taarifa za mwanafunzi ni siri na zinashirikiwa tu na wafanyakazi wa shule wanaozihitaji." }
          ]
        },
        {
          title: "Kuwaweka watoto salama na kuripoti wasiwasi",
          objectives: ["O5", "O1"],
          minutes: 6,
          goal: "Eleza hatua unazochukua unapodhani mtoto anaweza kudhuriwa, na unayemwambia.",
          text: [
            "Kila mtu mzima shuleni anasaidia kuwaweka watoto salama. Ikiwa mtoto yuko hatarini sasa hivi, piga 911 (au namba ya dharura ya eneo lako) na upate msaada mara moja.",
            "Sheria za majimbo zinataja watu wanaolazimika kuripoti unyanyasaji au utelekezaji wa mtoto unaoshukiwa; wanaitwa mandated reporters (waripoti wa lazima). Katika majimbo mengi wafanyakazi wa shule, pamoja na wasaidizi, wamo kwenye orodha hiyo. Wajibu wako ni kuripoti ulichoona au kusikia, si kukithibitisha. Jifunze sheria ya jimbo lako na sera ya shule yako katika mafunzo yako: unaripoti kwa nani (mara nyingi namba ya jimbo ya kuripoti unyanyasaji wa watoto au child protective services) na kwa haraka kiasi gani. Katika baadhi ya majimbo, kumwambia mwalimu au mkuu wa shule hakuchukui nafasi ya ripoti yako mwenyewe.",
            "Mtoto akikuambia jambo: kaa mtulivu, sikiliza, na umshukuru kwa kukuambia. Usiulize maswali yanayoongoza wala usichunguze. Usiahidi kuweka siri; sema utapata msaada kutoka kwa watu ambao kazi yao ni kuwaweka watoto salama. Andika maneno halisi ya mtoto, tarehe na saa, na uripoti siku hiyo hiyo. Liweke siri kwa kila mtu asiyehitaji kujua.",
            "Childhelp National Child Abuse Hotline, 1-800-422-4453, inatoa ushauri na msaada wakati wowote; yenyewe si namba ya kuripoti, lakini inaweza kukusaidia kupata mahali pa kuripoti katika jimbo lako."
          ],
          steps: ["Ikiwa mtoto yuko hatarini sasa, piga 911.", "Sikiliza kwa utulivu; usichunguze wala usiulize maswali yanayoongoza.", "Usiahidi kuweka siri.", "Andika maneno halisi ya mtoto, tarehe na saa.", "Ripoti siku hiyo hiyo kwa njia ambayo sheria ya jimbo lako na sera ya shule zinasema.", "Liweke siri kwa kila mtu asiyehitaji kujua."],
          words: [["Mandated reporter (mripoti wa lazima)", "mtu ambaye sheria inamlazimisha kuripoti unyanyasaji au utelekezaji wa mtoto unaoshukiwa."], ["Utelekezaji (neglect)", "mahitaji ya msingi ya mtoto, kama chakula, makazi, matunzo au uangalizi, yasipotimizwa."], ["Child protective services (CPS)", "ofisi ya jimbo au kaunti inayochunguza ripoti za unyanyasaji na utelekezaji wa watoto."], ["Swali linaloongoza (leading question)", "swali linalodokeza jibu, kama \"Je, baba yako alikupiga?\""]],
          slides: [
            { title: "Hatari sasa hivi?", bullets: ["Piga 911 au namba ya dharura ya eneo lako", "Pata msaada mara moja"] },
            { title: "Waripoti wa lazima (mandated reporters)", bullets: ["Sheria za majimbo zinataja nani lazima aripoti", "Katika majimbo mengi hii inajumuisha wafanyakazi wa shule", "Ripoti ulichoona au kusikia; huhitaji kuthibitisha"] },
            { title: "Mtoto akikuambia", bullets: ["Kaa mtulivu, sikiliza, mshukuru", "Hakuna maswali yanayoongoza, hakuna kuchunguza", "Usiahidi kuweka siri", "Andika maneno yake halisi, tarehe na saa"] },
            { title: "Ripoti siku hiyo hiyo", bullets: ["Fuata sheria ya jimbo lako na sera ya shule", "Mara nyingi namba ya jimbo ya kuripoti au CPS", "Liweke siri"] }
          ],
          sources: [
            { name: "Child Welfare Information Gateway: kuripoti kwa lazima unyanyasaji na utelekezaji wa watoto", url: "https://www.childwelfare.gov/resources/mandatory-reporting-child-abuse-and-neglect/" },
            { name: "Child Welfare Information Gateway: jinsi ya kuripoti unyanyasaji na utelekezaji wa watoto", url: "https://www.childwelfare.gov/how-report-child-abuse-and-neglect/" },
            { name: "Child Welfare Information Gateway: kutafuta sheria za majimbo", url: "https://www.childwelfare.gov/resources/states-territories-tribes/state-statutes/" },
            { name: "Childhelp National Child Abuse Hotline", url: "https://www.childhelphotline.org/" }
          ],
          tryIt: "Kazi ya mwisho: andika Mpango wako wa Kujiandaa kuwa Msaidizi wa Mwalimu. Weka masharti ya jimbo na wilaya yako pamoja na viungo, njia yako na tarehe za kusoma, shughuli yako ya kikundi kidogo kutoka Somo la 4, na hatua za usalama kutoka somo hili pamoja na namba ya jimbo lako ya kuripoti unyanyasaji wa watoto (itafute kwenye ukurasa wa \"how to report\" wa Child Welfare Information Gateway).",
          youCanNow: "kusema la kufanya mtoto anapoweza kudhuriwa, unaripoti kwa nani na lini, na kuweka njia yako yote ya kupata kazi ya msaidizi wa mwalimu kwenye karatasi.",
          quickCheck: [
            { objective: "O5", q: "Mtoto anakuambia kwamba mtu mzima nyumbani anamuumiza na anakuomba usimwambie mtu. Unasema nini?", options: ["\"Nakuahidi sitamwambia mtu yeyote.\"", "\"Una uhakika? Hilo halisikiki kuwa kweli.\"", "\"Asante kwa kuniambia. Ninahitaji kuwaambia watu ambao kazi yao ni kukuweka salama.\"", "\"Niambie kila kitu ili niamue.\""], answer: 2, why: "Huahidi kamwe kuweka siri, na humhoji wala kumhukumu; unapata msaada kutoka kwa watu sahihi." },
            { objective: "O5", q: "Mripoti wa lazima anapaswa kuripoti wasiwasi lini?", options: ["Baada ya kupata ushahidi tu", "Baada ya kuongea na familia kwanza", "Mwishoni mwa mwaka wa shule", "Siku hiyo hiyo, kwa njia ambayo sheria ya jimbo na sera ya shule zinasema"], answer: 3, why: "Unaripoti ulichoona au kusikia, haraka; kuthibitisha ni kazi ya CPS au polisi." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kufanya kazi darasani",
        questions: [
          { objective: "O3", q: "Scaffolding (kiunzi) ni nini?", options: ["Msaada unaomwezesha mwanafunzi kufanya kazi, kisha unaondolewa kidogo kidogo", "Kumfanyia mwanafunzi kazi", "Adhabu kwa majibu yasiyo sahihi", "Vifaa vya ujenzi kwa ajili ya darasa"], answer: 0, why: "Scaffolding inatoa msaada na kuuondoa polepole mwanafunzi anapojifunza." },
          { objective: "O3", q: "Kikundi chako kimemaliza. Unampa mwalimu nini?", options: ["Hakuna; mwalimu atakisia", "Ujumbe mfupi: nani ameelewa na nani amepata shida katika nini", "Namba za simu za nyumbani za kila mwanafunzi", "Mpango mpya wa somo ulioandika wewe"], answer: 1, why: "Ujumbe mfupi unamsaidia mwalimu kupanga kinachofuata." },
          { objective: "O4", q: "IEP ya mwanafunzi inasema anapata muda wa ziada kwenye mitihani. Mwalimu anakuomba usimamie mtihani. Wewe:", options: ["Unampa muda sawa na wengine ili iwe haki", "Unamuuliza kama anataka muda wa ziada leo", "Unampa muda wa ziada, kama IEP inavyosema", "Unamruhusu aruke mtihani"], answer: 2, why: "Msaada ulio katika IEP ni wa lazima na lazima ufuatwe kila wakati." },
          { objective: "O4", q: "Chaguo lipi ni salama kwa FERPA?", options: ["Kuweka picha ya darasa ya kuchekesha kwenye mitandao yako ya kijamii", "Kuzungumza kuhusu alama za mwanafunzi kwenye chakula cha jioni cha familia", "Kumtumia rafiki yako ripoti ya tabia ya mwanafunzi kwa ujumbe", "Kujadili maendeleo ya mwanafunzi na mwalimu tu"], answer: 3, why: "Kumbukumbu na taarifa za wanafunzi zinashirikiwa tu na wafanyakazi wa shule wanaozihitaji." },
          { objective: "O5", q: "Unamwona mtoto mwenye jeraha kubwa anayesema anaogopa kwenda nyumbani leo. Kinachotangulia ni nini?", options: ["Kupata msaada mara moja, kupiga 911 ikiwa mtoto yuko hatarini sasa, na kuripoti siku hiyo hiyo", "Kuwapigia wazazi simu kuuliza kilichotokea", "Kusubiri wiki moja kuona kama kitatokea tena", "Kuwauliza wanafunzi wenzake wanajua nini"], answer: 0, why: "Hatari ya sasa inamaanisha msaada wa dharura; kisha uripoti kama jimbo lako na shule wanavyotaka, bila kuchunguza mwenyewe." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Maandalizi ya Msaidizi wa Mwalimu (Paraprofessional)",
    questions: [
      { objective: "O1", q: "Kipi kinaeleza vizuri zaidi msaidizi wa mwalimu (paraprofessional)?", options: ["Mfanyakazi wa shule anayewasaidia wanafunzi kujifunza chini ya maelekezo ya mwalimu", "Mtu anayepanga na kusahihisha masomo yote", "Msaidizi wa mkuu wa shule tu", "Mwalimu wa akiba mwenye leseni kamili"], answer: 0, why: "Wasaidizi wanasaidia kujifunza; mwalimu anapanga na kusahihisha." },
      { objective: "O1", q: "Kwa sheria ya serikali kuu, msaidizi wa kufundisha wa Title I mwenye cheti cha sekondari pia anahitaji kimojawapo kati ya hivi. Kipi SI mojawapo ya machaguo?", options: ["Miaka miwili ya masomo ya chuo", "Shahada ya associate au zaidi", "Kufaulu mtihani rasmi wa jimbo au wa eneo", "Mwaka mmoja wa kujitolea shuleni"], answer: 3, why: "Machaguo matatu ni miaka miwili ya chuo, shahada, au mtihani rasmi wa kitaaluma." },
      { objective: "O1", q: "Karibu shule zote zinataka nini kabla ya kumwajiri msaidizi?", options: ["Leseni ya ualimu", "Uchunguzi wa historia", "Shahada ya uzamili", "Gari"], answer: 1, why: "Shule hukagua historia ili kuwalinda watoto." },
      { objective: "O1", q: "Chanzo kipi kinakuambia alama ya kufaulu ParaPro ya jimbo lako?", options: ["Tangazo la biashara la maandalizi ya mtihani", "Mwanafunzi mwenzako", "Ukurasa wa masharti ya majimbo kwenye parapro.ets.org na jimbo lako au wilaya", "Jukwaa lolote la mtandaoni"], answer: 2, why: "ETS inaorodhesha alama za kufaulu kwa kila jimbo; jimbo lako au wilaya inazithibitisha." },
      { objective: "O2", q: "ParaPro inapima:", options: ["Ukweli wa sayansi na historia", "Kasi ya kuchapa", "Kanuni za darasa tu", "Kusoma, kuandika na hesabu, na kuvitumia kusaidia darasani"], answer: 3, why: "ETS inasema inapima kusoma, kuandika na hesabu na kuvitumia katika kufundisha darasani." },
      { objective: "O2", q: "Neno lipi linafaa? \"Neither the teacher nor the students ___ ready.\"", options: ["were", "was", "is", "be"], answer: 0, why: "Kwa \"neither...nor\", kitenzi kinaendana na kiima kilicho karibu zaidi, \"students\", kwa hiyo \"were\"." },
      { objective: "O2", q: "1/2 + 1/4 ni ngapi?", options: ["2/6", "3/4", "1/8", "2/4"], answer: 1, why: "1/2 ni 2/4, na 2/4 + 1/4 = 3/4." },
      { objective: "O2", q: "Darasa la wanafunzi 28 linaenda safari. Kila gari dogo (van) linabeba 8. Yanahitajika magari mangapi?", options: ["3", "3.5", "4", "5"], answer: 2, why: "28 / 8 = 3.5, na huwezi kuchukua nusu ya gari, kwa hiyo unahitaji 4." },
      { objective: "O2", q: "Njia bora ya kutumia Study Companion ya bure ya ETS ni ipi?", options: ["Kusoma majibu tu", "Kuruka maswali uliyokosea", "Kuitumia usiku wa kabla ya mtihani tu", "Kufanya maswali ya mfano na kuandika kwa nini kwa kila kosa"], answer: 3, why: "Kueleza kila kosa kunakuonyesha cha kusoma baadaye." },
      { objective: "O3", q: "Kabla ya kuongoza kikundi kidogo, unapaswa kumuuliza mwalimu nini?", options: ["Lengo na msaada unaoruhusiwa kutoa", "Kama unaweza kuondoka mapema", "Wanafunzi gani ni werevu zaidi", "Kama unaweza kubadilisha somo"], answer: 0, why: "Kujua lengo na msaada unaoruhusiwa kunakuweka kwenye mpango wa mwalimu." },
      { objective: "O3", q: "Mwanafunzi anatoa jibu lisilo sahihi. Hatua bora inayofuata ni ipi?", options: ["Kusema \"Umekosea\" na kuendelea", "Kuuliza swali linaloonyesha kosa", "Kutoa jibu mara moja", "Kumwacha mwanafunzi mwingine acheke"], answer: 1, why: "Swali linaloonyesha njia linamwezesha mwanafunzi kupata na kurekebisha kosa." },
      { objective: "O3", q: "Sifa ipi inasaidia zaidi?", options: ["\"Vizuri.\"", "\"Wewe ni mwerevu sana.\"", "\"Ulikagua kazi yako, ndiyo maana uliliona kosa.\"", "\"Hatimaye.\""], answer: 2, why: "Sifa kamili ya juhudi inamwambia mwanafunzi aendelee kufanya nini." },
      { objective: "O4", q: "Mwanafunzi anaanza kukasirika. Hatua ipi ni tulivu na chanya?", options: ["Kupaza sauti ili asikilize", "Kutumia sauti ya chini na kutoa chaguo", "Kumpuuza kabisa", "Kumtisha kwamba utawapigia wazazi wake"], answer: 1, why: "Sauti tulivu na chaguo vinamsaidia mwanafunzi kutulia." },
      { objective: "O4", q: "IEP ni nini?", options: ["Mpango wa maandishi kwa mwanafunzi mwenye ulemavu, chini ya IDEA", "Mpango wa chakula cha mchana shuleni", "Mpango wa mshahara wa mwalimu", "Mtihani kwa wasaidizi"], answer: 0, why: "IEP maana yake Individualized Education Program, mpango chini ya sheria ya serikali kuu IDEA." },
      { objective: "O4", q: "Mzazi wa mwanafunzi mwingine anakuuliza kuhusu tabia ya mwanafunzi mwenzake. Wewe:", options: ["Unaeleza kilichotokea", "Unashiriki mpango wa tabia wa mwanafunzi huyo", "Unamwonyesha maandishi ya tukio", "Unasema huwezi kushiriki taarifa za wanafunzi wengine na unamwelekeza kwa mwalimu"], answer: 3, why: "Taarifa za mwanafunzi ni siri; zishiriki tu na wafanyakazi wanaozihitaji." },
      { objective: "O4", q: "Je, ni sawa kuwapiga wanafunzi picha kwa simu yako mwenyewe?", options: ["Ndiyo, kama wanapendeza", "Ndiyo, kama huziweki mtandaoni", "Hapana; fuata sera ya shule na uweke picha za wanafunzi siri", "Wakati wa safari za masomo tu"], answer: 2, why: "Picha ni taarifa za mwanafunzi; fuata sera ya shule." },
      { objective: "O5", q: "Mandated reporter (mripoti wa lazima) ni nani?", options: ["Mtu ambaye sheria inamlazimisha kuripoti unyanyasaji au utelekezaji wa mtoto unaoshukiwa", "Mwandishi wa habari kwenye matukio ya shule", "Mwanafunzi anayeripoti uonevu", "Mzazi anayejitolea"], answer: 0, why: "Sheria za majimbo zinataja wataalamu wanaolazimika kuripoti unyanyasaji au utelekezaji unaoshukiwa." },
      { objective: "O5", q: "Kama mripoti wa lazima, kazi yako ni ipi?", options: ["Kuthibitisha kwamba unyanyasaji ulitokea", "Kuihoji familia", "Kuripoti ulichoona au kusikia, kama jimbo lako na shule wanavyotaka", "Kusubiri hadi uwe na uhakika"], answer: 2, why: "Wewe unaripoti; CPS au polisi wanachunguza." },
      { objective: "O5", q: "Mtoto aliye mbele yako yuko hatarini sasa hivi. Wewe:", options: ["Unamtumia mkuu wa shule barua pepe", "Unapiga 911 au namba ya dharura ya eneo lako", "Unaandika ujumbe kwa ajili ya kesho", "Unamwambia mtoto asubiri"], answer: 1, why: "Hatari ya papo hapo inamaanisha msaada wa dharura kwanza." },
      { objective: "O5", q: "Unapaswa kuandika nini baada ya mtoto kukuambia kuhusu madhara?", options: ["Unachokisia kuhusu nani alifanya", "Maswali ya kuiuliza familia", "Hakuna; kumbuka tu", "Maneno halisi ya mtoto, tarehe na saa"], answer: 3, why: "Maneno halisi, tarehe na saa vinafanya ripoti iwe wazi na ya haki." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi amepiga hatua kiasi gani
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 3, 5, 7, 9, 12, 14, 16, 17] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Masharti yamekaguliwa", objective: "O1", notYet: "Masharti yamekisiwa au yanatoka chanzo kisicho rasmi.", meets: "Anaorodhesha njia ya elimu, mtihani na alama (kama zipo) na uchunguzi wa historia kwa jimbo na wilaya moja, pamoja na viungo rasmi.", exceeds: "Pia analinganisha wilaya mbili na kutaja mshahara au hatua nyingine kama mafunzo." },
      { name: "Mpango wa kusoma", objective: "O2", notYet: "Hakuna tarehe ya mtihani, au hakuna mpango wa kitu cha kusoma.", meets: "Tarehe halisi ya mtihani (au njia isiyo na mtihani) na jambo moja la kusoma kila wiki.", exceeds: "Inajumuisha alama za seti za mazoezi na maeneo dhaifu yaliyoonyeshwa nazo." },
      { name: "Shughuli ya kikundi kidogo", objective: "O3", notYet: "Shughuli hailingani na lengo la mwalimu, au inatoa majibu kwanza.", meets: "Inafuata lengo, ina maswali ya mazoezi, vidokezo viwili kabla ya majibu, na ujumbe kwa mwalimu.", exceeds: "Pia inapanga njia ya haraka ya kuona wanafunzi gani wanahitaji msaada zaidi." },
      { name: "Tabia na faragha", objective: "O4", notYet: "Anatumia majina au taarifa halisi za wanafunzi, au anapanga kuzishiriki nje ya wafanyakazi wa shule.", meets: "Anatumia herufi za kwanza za kubuni na anasema nani anaweza na nani hawezi kuona taarifa za wanafunzi.", exceeds: "Anaongeza jibu tulivu na chanya kwa tabia moja linalofuata mpango wa mwanafunzi." },
      { name: "Hatua za usalama", objective: "O5", notYet: "Hatua ya dharura haipo, anaahidi kuweka siri, au anapanga kuchunguza.", meets: "Anaorodhesha hatua kwa mpangilio pamoja na namba ya jimbo ya kuripoti na kuripoti siku hiyo hiyo.", exceeds: "Anataja kile ambacho sera ya shule yenyewe inaongeza, baada ya kuuliza shule au kuisoma." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (rubric)",
      "Wanafunzi wanaofanya na kufaulu ParaPro au mtihani unaotakiwa na jimbo lao, au wanaotimiza sharti kwa njia nyingine, ndani ya siku 90",
      "Wanafunzi wanaoomba kazi na kuajiriwa kama wasaidizi wa walimu, walimu wa akiba au wafanyakazi wa kusaidia shule (utafiti wa ufuatiliaji)",
      "Shule washirika zinaripoti wasaidizi wapya wanaofuata mipango ya masomo, wanaoshughulikia tabia kwa utulivu na wanaolinda faragha ya wanafunzi"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye intaneti kwa kurasa rasmi; karatasi, penseli na karatasi za kuandikia kwa mazoezi",
      "Study Companion na Study Guide za bure za ETS ParaPro (kutoka parapro.ets.org)",
      "Tangazo halisi la kazi kutoka wilaya ya shule iliyo karibu",
      "Kama dakika 75 kwa jumla, kwa vipindi vifupi, pamoja na muda wa ziada wa kusoma kabla ya mtihani"
    ],
    facilitatorNotes: [
      "Kabla ya kozi, tafuta masharti ya jimbo lako kwa wasaidizi wa walimu na tangazo la kazi la wilaya ya karibu ili uweze kujibu maswali kuyahusu.",
      "Usitumie kamwe majina au taarifa halisi za wanafunzi katika mazoezi; tumia herufi za kwanza za kubuni.",
      "Endesha Somo la 4 kama igizo: mwanafunzi mmoja anaongoza, wengine wanaigiza wanafunzi, na kikundi kinatoa maoni kwa kutumia rubric.",
      "Somo la 6 linaweza kuwa gumu kwa watu walioumizwa walipokuwa watoto. Lisema hilo kabla ya kuanza, waruhusu wanafunzi kutoka nje, na uwe na taarifa za msaada wa eneo lako tayari.",
      "Waambie wanafunzi wenye hatia za zamani wakague moja kwa moja masharti ya uchunguzi wa historia ya jimbo na wilaya; usikisie kama wanatimiza masharti.",
      "Mwalike msaidizi wa mwalimu anayefanya kazi au mfanyakazi wa wilaya anayeshughulikia kuajiri ajibu maswali."
    ]
  }
};
